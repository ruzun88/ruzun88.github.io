---
layout: post
title: "[책 정리] Do it! Vue.js 입문"
author: "Yongjun Cho"
tags: vue
---

저자: 캡틴 판교 (장기효님)
공부 배경: inflearn vue강의가 좋아서 책도 정리할 겸 함께 봄

## Vue의 특징
- 컴포넌트 기반 F/W -> 재사용성 증가, 구조의 직관적 파악 가능
- angular 장점 (양방향 데이터 바인딩), react 장점(단방향 데이터 흐름)을 결합함
- 가상돔을 통한 빠른 렌더링

## Vue의 유효 범위
- 인스턴스와 연결된 element 한정

## Vue lifecycle
![Vue Lifecycle](https://joshua1988.github.io/vue-camp/assets/img/lifecycle.dcbe29f6.png)
출처: https://joshua1988.github.io/vue-camp/vue/life-cycle.html

각 lifecycle에서 원하는대로 정상적으로 변하지 않을 때, $nextTick()을 사용하자.

## Vue Component
### 전역 컴포넌트
- Vue library 로딩 후, 컴포넌트 등록 수행
#### 예제
``` js
Vue.component('컴포넌트 이름', {
    template: '<div>~~~</div>'// 컴포넌트 내용
});
```

### 지역 컴포넌트
- vue instance 안에 components 속성에 등록함
#### 예제
``` js
new Vue({
    components: {
        '컴포넌트 이름': {
            template: '<div>~~~</div>'// 컴포넌트 내용
        }
    }
})
```

### 전역 vs 지역
- 유효범위가 다름
- 전역은 선언된 source 전체에서 사용 가능, 지역은 선언한 인스턴스에서만 사용 가능


## Vue Component 통신
- 상하 관계의 통신만 가능, 자식 노드끼리의 통신은 부모 컴포넌트를 통해 수행
- 하위->상위: 이벤트 발생 (emit)
- 상위->하위: props 전달

### props 전달
- 하위 컴포넌트에 props 생성 필요
``` js
Vue.component('child-component', {
    props:['propsdata']
});
```

- 상위 컴포넌트에 v-bind로 연결 필요

``` html
<child-component v-bind:propsdata="전달할 상위 컴포넌트의 data 속성"></child-component>
```

### 이벤트 발생
- $emit() / v-on 속성 사용
```js
// 이벤트 발생
this.$emit('이벤트이름')
```

``` html
// 이벤트 수신
<child-component v-on:이벤트이름="상위 컴포넌트 메서드이름"></child-component>
```

### 이벤트 버스
- 관계 없는 2개의 컴포넌트간 데이터를 주고 받을 수 있는 방법
- 별도의 Vue instance를 생성하여 .$emit()으로 보내고 .$on()으로 받음
- 많아지면 관리가 되지 않아, vuex가 필요함


## 뷰 라우터
### 라우팅
- 웹 페이지 간의 이동 방법
- 싱글 페이지 어플리케이션에서 주로 활용함

### 뷰 라우터
- 뷰에서 라우팅 구현을 도와주는 라이브러리
- router-link to에서 지정한 url을 routes list의 객체로 매핑한다.
- 뷰 라우터 사용 시, el 지정 대신, $mount를 사용한다.<br>$mount는 강제로 인스턴스를 화면에 붙이는 방법이다.
- router-view는 URL값에 따라 갱신되는 화면 영역이다.

```js
var routes = [
    { path: '/main', component: { template: '<div>main</div>' } },
    { path: '/login', component: { template: '<div>login</div>' } }
]
var router = new VueRouter({
    mode: 'history', // URL에 '#'이 붙는 것을 방지함
    routes
});
var app = new Vue({
    router
}).$mount('#app')
```

### Nested Router
- router-view는 중첩되서 사용될 수 있다.
- nested router는 vuepress 문서를 사용할때는 기억하면 된다.

```js
var routes = [
    {
        path: '/user',
        component: User,
        childredn: [
            {
                path: 'posts',
                component: UserPost
            }
        ]
    }
]
```

### Named View
- 여러개의 컴포넌트를 동시에 표시하는 라우팅 방식
- routerview에 name을 할당해주면 끝

## HTTP 통신
### 뷰 리소스
- 지원 중단됨
- 사용하기 위해서 cdn 또는 npm 설치 필요

### axios
- 가장 많이 사용되는 HTTP Lib
- Promise 기반의 API 다양하게 제공 됨

#### Promise 기반 API ?
- 비동기 로직 처리에 유용한 자바스크립트 객체
- 데이터 요청 후 받아올때까지 기다렸다 화면에 나타낼 때 주로 사용함