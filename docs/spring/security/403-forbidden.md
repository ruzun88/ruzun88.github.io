---
lang: ko-KR
title: 403 Forbidden
description: Spring security에서 403이 뜰 때 확인해 보아야 할 것
tags: ['spring security', 'Forbidden']
---

# Spring Security 에서, 403 Forbidden
::: tip
난 잘못한게 없는데, 403이 떴다! 싶을 때, 참고하세요.   
case를 늘려가면서 추가할 예정입니다.
:::

## Config 설정 돌아보기
spring security는 uri 별로 권한을 지정해 줄 수 있습니다다.   
따라서, uri가 잘못 되었을 때나 해당 uri에 권한 지정이 잘못 되었을 때, 문제가 될 수 있습니다.   
아래의 코드에서 예시 상황을 들어보겠습니다.   
만약 uri가 `/main`인 화면은 권한과 상관없이 모든 사용자가 볼 수 있어야 한다고 가정해 봅시다.   
그렇다면, `/main`은 permitAll()이 되어야 합니다. 모든 사용자가 볼 수 있어야 하니까요.   
하지만, `/main`이라는 uri는 아래 소스에 존재하지 않지요. 따라서, `/main`은 anyRequest 조건에 걸리게 되고, `USER`가 아닌 사람들에게는 403이 뜨게 됩니다.
``` java{10}
@Override
protected void configure(HttpSecurity http) throws Exception {
    http
      .httpBasic().disable() // rest api 이므로 기본설정 사용안함. 기본설정은 비인증시 로그인폼 화면으로 리다이렉트 된다.
      .csrf().disable() // rest api이므로 csrf 보안이 필요없으므로 disable처리.
      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // jwt token으로 인증하므로 세션은 필요없으므로 생성안함.
      .and()
          .authorizeRequests() // 다음 리퀘스트에 대한 사용권한 체크
              .antMatchers("/signin", "/signup", "/login").permitAll() // 가입 및 인증 주소는 누구나 접근가능
              .antMatchers("/test").hasAnyRole("USER", "ADMIN")
              .anyRequest().hasRole("USER") // 그외 나머지 요청은 모두 인증된 회원만 접근 가능
      .and()
          .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class); // jwt token 필터를 id/password 인증 필터 전에 넣는다
}
// 소스 코드 출처: https://sybarits.github.io/2020/11/08/rest-api-security.html
```

## Filter 들여다 보기
위 소스코드의 마지막을 보면, `JwtAuthenticationFilter`가 Filter로 등록됩니다.   
이 필터의 소스는 아래와 같습니다.
``` java{12}
@Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        // 토큰 정보 추출
        String token = jwtTokenProvider.resolveToken((HttpServletRequest) request);
        // 토큰이 유효하면, 인증 정보 추출
        if (token != null && jwtTokenProvider.validateToken(token)) {
            // 추출된 인증 정보를 필터링에 사용할 수 있도록 context에 등록
            Authentication auth = jwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(auth);
        }
        // 필터링 수행
        filterChain.doFilter(request, response);
    }
```
위와 같이, 토큰으로 정보를 조회하고, 인증정보를 가져온 결과는 사진과 같습니다. 디버깅 포인트는 위 코드에서 하이라이트 된 12번 line입니다.
![필터 디버깅 정보](@assets/spring/security/token-debug-role-error.png)
정상적인 토큰에서 정보를 잘 추출 했고, 인증정보(authorities)를 보면 `USER`라는 권한이 잘 들어가 있습니다.   
위 configure메서드에서 설정한 `USER`라는 권한과 토큰에서의 인증정보가 동일한 String(USER)을 가지고 있으니, 통과 될 것이라 생각 하기 쉽습니다.   
저도 스프링 시큐리티를 처음 썼을 때, 그렇게 기대를 하고 썼다가 한참을 헤맸습니다.. ㅠㅠ   
스프링 시큐리티는, config에서 정의한 권한이 `USER`이면, 토큰에서 추출한 권한은 `ROLE_USER`인지 확인을 합니다.   
즉, `ROLE_` 접두어가 자동으로 붙는 것입니다.   
만약 유저의 이 권한이 DB에 저장되어있다면, 이 또한 역시 `ROLE_USER`로 저장되어 있어야 합니다.   
별도의 권한 Mapper를 통해 접두어를 바꿀 수도 있다고 합니다.

### 정리하자면,
config 설정 시에는 `ROLE_`이 빠진 진짜 역할 이름을 적고, 토큰 안에 있는 정보는 `ROLE_역할` 형태로 저장되어 있어야 합니다. DB에서 권한을 불러 온다면, DB도 `ROLE_역할`형태로 저장되어 있어야 합니다.