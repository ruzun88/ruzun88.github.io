(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{368:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("저자: 캡틴 판교 (장기효님)\n공부 배경: inflearn vue강의가 좋아서 책도 정리할 겸 함께 봄")]),t._v(" "),s("h2",{attrs:{id:"vue의-특징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue의-특징"}},[t._v("#")]),t._v(" Vue의 특징")]),t._v(" "),s("ul",[s("li",[t._v("컴포넌트 기반 F/W -> 재사용성 증가, 구조의 직관적 파악 가능")]),t._v(" "),s("li",[t._v("angular 장점 (양방향 데이터 바인딩), react 장점(단방향 데이터 흐름)을 결합함")]),t._v(" "),s("li",[t._v("가상돔을 통한 빠른 렌더링")])]),t._v(" "),s("h2",{attrs:{id:"vue의-유효-범위"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue의-유효-범위"}},[t._v("#")]),t._v(" Vue의 유효 범위")]),t._v(" "),s("ul",[s("li",[t._v("인스턴스와 연결된 element 한정")])]),t._v(" "),s("h2",{attrs:{id:"vue-lifecycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-lifecycle"}},[t._v("#")]),t._v(" Vue lifecycle")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://joshua1988.github.io/vue-camp/assets/img/lifecycle.dcbe29f6.png",alt:"Vue Lifecycle"}}),t._v("\n출처: https://joshua1988.github.io/vue-camp/vue/life-cycle.html")]),t._v(" "),s("p",[t._v("각 lifecycle에서 원하는대로 정상적으로 변하지 않을 때, $nextTick()을 사용하자.")]),t._v(" "),s("h2",{attrs:{id:"vue-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-component"}},[t._v("#")]),t._v(" Vue Component")]),t._v(" "),s("h3",{attrs:{id:"전역-컴포넌트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전역-컴포넌트"}},[t._v("#")]),t._v(" 전역 컴포넌트")]),t._v(" "),s("ul",[s("li",[t._v("Vue library 로딩 후, 컴포넌트 등록 수행")])]),t._v(" "),s("h4",{attrs:{id:"예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제"}},[t._v("#")]),t._v(" 예제")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'컴포넌트 이름'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>~~~</div>'")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 컴포넌트 내용")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"지역-컴포넌트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#지역-컴포넌트"}},[t._v("#")]),t._v(" 지역 컴포넌트")]),t._v(" "),s("ul",[s("li",[t._v("vue instance 안에 components 속성에 등록함")])]),t._v(" "),s("h4",{attrs:{id:"예제-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제-2"}},[t._v("#")]),t._v(" 예제")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    components"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'컴포넌트 이름'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>~~~</div>'")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 컴포넌트 내용")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"전역-vs-지역"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전역-vs-지역"}},[t._v("#")]),t._v(" 전역 vs 지역")]),t._v(" "),s("ul",[s("li",[t._v("유효범위가 다름")]),t._v(" "),s("li",[t._v("전역은 선언된 source 전체에서 사용 가능, 지역은 선언한 인스턴스에서만 사용 가능")])]),t._v(" "),s("h2",{attrs:{id:"vue-component-통신"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-component-통신"}},[t._v("#")]),t._v(" Vue Component 통신")]),t._v(" "),s("ul",[s("li",[t._v("상하 관계의 통신만 가능, 자식 노드끼리의 통신은 부모 컴포넌트를 통해 수행")]),t._v(" "),s("li",[t._v("하위->상위: 이벤트 발생 (emit)")]),t._v(" "),s("li",[t._v("상위->하위: props 전달")])]),t._v(" "),s("h3",{attrs:{id:"props-전달"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props-전달"}},[t._v("#")]),t._v(" props 전달")]),t._v(" "),s("ul",[s("li",[t._v("하위 컴포넌트에 props 생성 필요")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child-component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'propsdata'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("상위 컴포넌트에 v-bind로 연결 필요")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child-component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("propsdata")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("전달할 상위 컴포넌트의 data 속성"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child-component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"이벤트-발생"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-발생"}},[t._v("#")]),t._v(" 이벤트 발생")]),t._v(" "),s("ul",[s("li",[t._v("$emit() / v-on 속성 사용")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이벤트 발생")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'이벤트이름'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("// 이벤트 수신\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child-component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("이벤트이름")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("상위 컴포넌트 메서드이름"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child-component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"이벤트-버스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-버스"}},[t._v("#")]),t._v(" 이벤트 버스")]),t._v(" "),s("ul",[s("li",[t._v("관계 없는 2개의 컴포넌트간 데이터를 주고 받을 수 있는 방법")]),t._v(" "),s("li",[t._v("별도의 Vue instance를 생성하여 .$emit()으로 보내고 .$on()으로 받음")]),t._v(" "),s("li",[t._v("많아지면 관리가 되지 않아, vuex가 필요함")])]),t._v(" "),s("h2",{attrs:{id:"뷰-라우터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#뷰-라우터"}},[t._v("#")]),t._v(" 뷰 라우터")]),t._v(" "),s("h3",{attrs:{id:"라우팅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#라우팅"}},[t._v("#")]),t._v(" 라우팅")]),t._v(" "),s("ul",[s("li",[t._v("웹 페이지 간의 이동 방법")]),t._v(" "),s("li",[t._v("싱글 페이지 어플리케이션에서 주로 활용함")])]),t._v(" "),s("h3",{attrs:{id:"뷰-라우터-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#뷰-라우터-2"}},[t._v("#")]),t._v(" 뷰 라우터")]),t._v(" "),s("ul",[s("li",[t._v("뷰에서 라우팅 구현을 도와주는 라이브러리")]),t._v(" "),s("li",[t._v("router-link to에서 지정한 url을 routes list의 객체로 매핑한다.")]),t._v(" "),s("li",[t._v("뷰 라우터 사용 시, el 지정 대신, $mount를 사용한다."),s("br"),t._v("$mount는 강제로 인스턴스를 화면에 붙이는 방법이다.")]),t._v(" "),s("li",[t._v("router-view는 URL값에 따라 갱신되는 화면 영역이다.")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>main</div>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>login</div>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// URL에 '#'이 붙는 것을 방지함")]),t._v("\n    routes\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    router\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"nested-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nested-router"}},[t._v("#")]),t._v(" Nested Router")]),t._v(" "),s("ul",[s("li",[t._v("router-view는 중첩되서 사용될 수 있다.")]),t._v(" "),s("li",[t._v("nested router는 vuepress 문서를 사용할때는 기억하면 된다.")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        childredn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'posts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserPost\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"named-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#named-view"}},[t._v("#")]),t._v(" Named View")]),t._v(" "),s("ul",[s("li",[t._v("여러개의 컴포넌트를 동시에 표시하는 라우팅 방식")]),t._v(" "),s("li",[t._v("routerview에 name을 할당해주면 끝")])]),t._v(" "),s("h2",{attrs:{id:"http-통신"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-통신"}},[t._v("#")]),t._v(" HTTP 통신")]),t._v(" "),s("h3",{attrs:{id:"뷰-리소스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#뷰-리소스"}},[t._v("#")]),t._v(" 뷰 리소스")]),t._v(" "),s("ul",[s("li",[t._v("지원 중단됨")]),t._v(" "),s("li",[t._v("사용하기 위해서 cdn 또는 npm 설치 필요")])]),t._v(" "),s("h3",{attrs:{id:"axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" axios")]),t._v(" "),s("ul",[s("li",[t._v("가장 많이 사용되는 HTTP Lib")]),t._v(" "),s("li",[t._v("Promise 기반의 API 다양하게 제공 됨")])]),t._v(" "),s("h4",{attrs:{id:"promise-기반-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-기반-api"}},[t._v("#")]),t._v(" Promise 기반 API ?")]),t._v(" "),s("ul",[s("li",[t._v("비동기 로직 처리에 유용한 자바스크립트 객체")]),t._v(" "),s("li",[t._v("데이터 요청 후 받아올때까지 기다렸다 화면에 나타낼 때 주로 사용함")])]),t._v(" "),s("h2",{attrs:{id:"뷰-템플릿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#뷰-템플릿"}},[t._v("#")]),t._v(" 뷰 템플릿")]),t._v(" "),s("h3",{attrs:{id:"정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정의"}},[t._v("#")]),t._v(" 정의")]),t._v(" "),s("p",[t._v("마크업 속성(HTML / CSS 등)과 뷰 인스턴스의 데이터/로직을 연결하여 브라우저에서 볼 수 있게 변환해주는 속성")]),t._v(" "),s("h3",{attrs:{id:"사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("ol",[s("li",[t._v("ES5의 template 속성 활용 : 내부적으로 render() 함수 사용")]),t._v(" "),s("li",[t._v("ES6의 <template> 코드 활용")])]),t._v(" "),s("h3",{attrs:{id:"데이터-바인딩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#데이터-바인딩"}},[t._v("#")]),t._v(" 데이터 바인딩")]),t._v(" "),s("h4",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" {{}}")]),t._v(" "),s("ul",[s("li",[t._v("해당 변수 안의 값을 그대로 보여줌")]),t._v(" "),s("li",[t._v("js 표현식도 사용 가능, 단, 복잡한건 사용하지 말자.")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("{{ message }}\n{{ message + \"!!!\" }}\n{{ message.split('').reverse().join('') }} // 쓸 수 있지만 안좋은 예\n")])])]),s("p",[t._v("이렇게 two step으로 바꾸자")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("{{ reversedMessage }}\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("computed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reversedMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"v-bind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-bind"}},[t._v("#")]),t._v(" v-bind")]),t._v(" "),s("p",[t._v("HTML 속성에 데이터 값을 연결할 때 사용함")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("idA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("아이디 바인딩"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("classA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("class 바인딩"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("styleA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("style 바인딩"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"directive-디렉티브"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directive-디렉티브"}},[t._v("#")]),t._v(" Directive (디렉티브)")]),t._v(" "),s("ul",[s("li",[t._v("v-접두사를 가진 모든 속성")]),t._v(" "),s("li",[t._v("v-if / v-show / v-on / v-bind / v-for / v-model")])]),t._v(" "),s("h3",{attrs:{id:"이벤트-처리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-처리"}},[t._v("#")]),t._v(" 이벤트 처리")]),t._v(" "),s("ul",[s("li",[t._v("v-on 디렉티브와 methods 속성을 활용")]),t._v(" "),s("li",[t._v("v-on으로 받을 이벤트를 정의하고, method를 호출함")])]),t._v(" "),s("h3",{attrs:{id:"computed-속성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed-속성"}},[t._v("#")]),t._v(" computed 속성")]),t._v(" "),s("ul",[s("li",[t._v("data가 변하면 자동으로 다시 연산을 수행")]),t._v(" "),s("li",[t._v("캐싱을 통해 결과값을 미리 저장하고 있다가 필요시 불러옴")])]),t._v(" "),s("h4",{attrs:{id:"vs-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs-methods"}},[t._v("#")]),t._v(" vs methods")]),t._v(" "),s("ul",[s("li",[t._v("method는 호출할때만 수동적으로 수행됨")])]),t._v(" "),s("h3",{attrs:{id:"watch-속성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch-속성"}},[t._v("#")]),t._v(" watch 속성")]),t._v(" "),s("ul",[s("li",[t._v("computed처럼 data변화를 감지하면 자동으로 로직 수행함")]),t._v(" "),s("li",[t._v("computed는 간단한거 하고, watch는 시간 걸리는 비동기 처리에 적합")])]),t._v(" "),s("h2",{attrs:{id:"vue-프로젝트-구성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-프로젝트-구성"}},[t._v("#")]),t._v(" Vue 프로젝트 구성")]),t._v(" "),s("h3",{attrs:{id:"single-file-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-file-component"}},[t._v("#")]),t._v(" single file component")]),t._v(" "),s("p",[t._v(".vue 파일은 template / script / style 모두 포함 가능함")]),t._v(" "),s("h3",{attrs:{id:"vue-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli"}},[t._v("#")]),t._v(" VUE CLI")]),t._v(" "),s("ul",[s("li",[t._v("vue init webpack: 기본")]),t._v(" "),s("li",[t._v("vue init webpack-simple: 프로토타입시 빠르고 가볍게 사용")])]),t._v(" "),s("h3",{attrs:{id:"vue-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-loader"}},[t._v("#")]),t._v(" vue loader")]),t._v(" "),s("ul",[s("li",[t._v("vue 파일을 브라우저 실행 가능한 웹페이지 형태로 변환함")]),t._v(" "),s("li",[t._v("변환 기능은 웹팩에서 담당함. 그 중에 웹팩에서 설정된 뷰로더가 변환함")]),t._v(" "),s("li",[t._v("필요시 css/html을 별도로 추출가능함")]),t._v(" "),s("li",[t._v("webpack.config.js파일의 loader 항목에서 확인 가능")])])])}),[],!1,null,null,null);a.default=e.exports}}]);