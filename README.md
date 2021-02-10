# Vue.js 완벽 가이드 
#### 실습과 리팩토링으로 배우는 실전 개념
- [Vue.js 스타일 가이드](https://vuejs.org/v2/style-guide)
<br />

#### VSCode 플러그인 리스트
- **Vetur :** Vue.js 플러그인
- **Night Owl :** 코드 하이라이팅 플러그인
- **Meterial Icon Theme :** vs코드에서 파일 확장자 명에 따라 아이콘으로 구분
- **ESLint :** 자바스크립트 문법 검사 플러그인
- **TSLint :** 타입스크립트 문법 검사 플러그인
- **Auto Close tag :** HTML 태그 자동 닫기 플러그인
- **Live Server :** 정적 파일을 로컬 서버에 올리고 자동 갱신해주는 플러그인

<br />
<hr />
<br />

## 1. 소개 및 설계
### 1.1. 제작할 사이트 및 API 소개
- 이번 강의를 통해 해커 뉴스 사이트를 제작한다 
	- show, ask, jobs 페이지
	- 해커 뉴스 API를 호출하여 화면에 정보를 노출하려고 한다.
- 페이지 이동을 위한 **뷰 라우터 구현**
- 컴포넌트 기반의 사이트 제작
	- **컴포넌트 공통화 방법**에 대한 안내와 실습
- Vuex를 사용한 API 호출과 Vuex를 사용안한 API 호출 비교

#### 강의 참고 자료
1. [해커 뉴스 공식 사이트 주소](https://news.ycombinator.com/)
2. [해커 뉴스 API 문서 주소](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

<br />

### 1.2. 애플리케이션 라우터 설계
#### 사이트 설계란?
기본적으로 웹서비스를 만들 때, 구성되어 있는 사이트 또는 기획자가 만들어 논 기획 문서를 확인하고 그 기획서를 토대로 **컴포넌트 기반으로 설계**를 할 줄 알아야 한다.<br />
그리고 여러 페이지로 구성되어 있는 경우에는 **라우터를 설계**해야 한다. 예를 들어 News, Ask, Jobs 등 각 각 페이지들의 라우터를 구성해야 한다. 
<br />
<br />

### 1.3. 비공개 리포지토리 소개 및 뷰 CLI 설명
- [비공개 리포지토리(수업자료 - 브랜치별 확인)](https://github.com/joshua1988/vue-advanced)
<br />

### 1.4. Vue CLI 2.X vs Vue CLI 3.X
- **명령어**
	- 2.x : <code>vue init '프로젝트 템플릿 이름' '파일 위치'</code>
	- 3.x : <code>vue create '프로젝트 이름'</code>
- **웹팩 설정 파일 (가장 큰 차이점)**
	- 2.x : 노출 O
		- 프로젝트 루트에서 **webpack.config.js 파일 확인 가능**
	- 3.x : 노출 X
- **프로젝트 구성**
	- 2.x : 깃헙의 템플릿 다운로드
	- 3.x : 플러그인 기반으로 기능 추가
- **ES6 이해도(자바스크립트 문법)**
	- 2.x : 필요 X
	- 3.x : 필요 O

#### 강의 참고 자료
1. [Vue CLI 사이트](https://cli.vuejs.org/)
2. [webpack-simple 템플릿 깃헙 주소](https://github.com/vuejs-templates/webpack-simple)
<br />

## 2. 프로젝트 셋업
### 2.1. Vue CLI로 프로젝트 생성 및 ESLint 로그 확인
1. [터미널] <code>npm i -g @vue/cli</code> Vue CLI 설치
2. [터미널] 프로젝트 폴더 기준 <code>vue create vue-news</code> 명령어 입력
3. Vue CLI 3.x 이상부터 선택할 수 있는 preset 
	- preset : 프로젝트를 시작하기 위한 기본적인 플러그인 구성을 할 수 있다. 
	- 플러그인의 집합이라고 보면 된다. 여러 개의 플러그인을 개인적으로 좋아하는 플러그인으로 골라서 셋업
4. <code>Default ([Vue 2] babel, eslint)</code> 선택<br />
	![2-1-1](./_images/2-1-1.png)<br />
5. [터미널] <code>cd vue-news</code> 명령어 입력 - 폴더 이동
6. [터미널] <code>npm run serve</code> 명령어 입력 - 서버 실행
7. [package.json] "scripts" 에서 "serve" 명령어를 입력하게 되면 "vue-cli-service serve" 가 실행되는 것.<br />
	![2-1-3](./_images/2-1-3.png)<br />
	![2-1-2](./_images/2-1-2.png)<br />
<br />

### 2.2. ESLint 도구 소개와 사용해야 하는 이유?
- **ESLint**
	- 자바스크립트에서 코딩할 때에 도움말 역활. 
	- 에러가 나지 않게, 코드 작성을 유도하는 보조도구
	- 미관상 등의 이유로 <code>;</code> 을 표시하지 않는다. ESList는 <code>;</code> 표시를 권장한다.<br />
	그 이유로는 아래 <code>if ( a === 1 ) console.log('1이다')</code> 케이스를 보면 된다.<br />
	if문 뒤에 메서드 실행을 적용한다 했을 때, 어느 구간에서 자바스크립트를 끊어야 할 지를 모른다.<br />
	그래서 <b>꼭!</b> <code>;</code> <b>세미클론을 표시</b>해야 한다
		```javascript
		var a = 10  

		import AppHeader from './components/AppHeader'
		import Vue from 'vue' 

		if ( a === 10 ) {
		  console.log('10이다')
		}

		if ( a === 1 ) console.log('1이다') b() c()
		``` 
	- 트레일링 콤마(trailing comma) 경우, 1개만 있을 때엔 <code>,(콤마)</code> 생략이 가능하나<br />
	ESLint 에서는 1개일 때에도 <code>,(콤마)</code> 표시를 권장한다
		```javascript
		components: {
		  '컴포넌트 이름': 컴포넌트 내용
		}
		```
<br />

### 2.3. Vue CLI 3.x에서 ESLint 설정 끄는 방법
- Vue CLI 를 설치하면 자동으로 ESLint 설정이 되어 있다.
	![2-1-2](./_images/2-3-1.png)<br />
	<br />

- 각 컴포넌트 .vue 파일 마다 <code>/* eslint-disable */</code>를 표기해도 되지만 컴포넌트 마다 적용하게 되면 불필요한 줄이 생기기 때문에 권장하지 않는다.
	```javascript
	<script>
	/* eslint-disable */
	</script>
	```
	- <code>/* eslint-disable */</code> 적용하게 되면 [터미널] 에서 오류 문구가 사라진 것을 확인할 수 있다.<br />
	![2-3-2](./_images/2-3-2.png)<br />
	<br />

#### 간단하게 ESLint 설정 끄는 법
1. 프로젝트 폴더 루트에서 vue.config.js 파일 생성
	- 기본 문법 (아래 코드 참고)
	```javascript
	// vue.config.js
	module.exports = {
  
	}
	```
	<br />

2. [[Vue CLI 공식문서]](https://cli.vuejs.org/)에서 'lint' 로 검색한다.<br />
	풀네임은 'lintOnSave' 이다.
	![2-3-3](./_images/2-3-3.png)<br />
	<br />

3. [[Vue CLI 공식문서 -lintOnSave]](https://cli.vuejs.org/config/#lintonsave) 가이드를 보면 설정하는 방법이 나오는데 조건없이 false 로 적용을 해주면 된다.
	```javascript
	module.exports = {
	  lintOnSave: false
	}
	```
	![2-3-4](./_images/2-3-4.png)<br />
	<br />

## 3. 라우터
### 3.1. 라우터 설치 및 라우터 구현
#### 3.1.1. 참고자료
- [Vue.js 중급 ES6 Modules 강좌 링크](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/lecture/11542?tab=curriculum)
- [Vue.js 중급 ES6 Enhanced Object Literal 강좌 링크](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/lecture/11537?tab=curriculum)

<br />

1. [터미널] <code>npm i vue-router --save</code> 명령어 실행(= 라우터 설치)
2. 설치가 완료되면 [package.json] **"dependencies" 에 "vue-router" 추가**된다<br />
	- dependencies 에 들어가는 라이브러리들은 실제로 웹을 실행시킬 때 필요한 비즈니스 로직 또는 웹의 동작을 담당하는 라이브러리이며, 배보할 때 포함되어 있어야 하는 라이브러리.<br />
	![3-1-1](./_images/3-1-1.png)<br />
	<br />

3. [main.js] 는 기본적으로 애플리케이션의 설정(플러그인, 라이브러리, 구조 등)들을 파악할 수 있어야 한다. (== 구조도가 한 눈에 쉽게 파악)<br />
따라서, router 관련된 정보는 새로운 폴더를 생성하여 해당 폴더에 적용을 한다.
<br />

4. src 폴더 밑에 "router" 폴더 생성 -> index.js 파일 생성, 아래 코드적용
	```javascript
	import Vue from 'vue'
	import VueRouter from 'vue-router'

	vue.use(VueRouter);

	const router = new VueRouter({
	  routes: [
			path: '',
	  ]
	})
	```
<br />

5. 변수 router에 routes를 이용하여 정보를 담는다.
	- routes 속성에 path, component 정보를 적용한다.
	- components == page 로 이해하면 된다.
	```javascript
	import Vue from 'vue'
	import VueRouter from 'vue-router'

	vue.use(VueRouter);

	const router = new VueRouter({
	  routes: [
	    {
	      // path : URL 주소
	      path: '/',
	      // component : URL 주소로 갔을 때 표시될 컴포넌트
	      component: 'MainPage',
	    },
	    {
	      path: '',
	      component: '',
	    },
	    {
	      path: '',
	      component: '',
	    }
	  ]
	})
	```
<br />

6. src 폴더 밑에 views 폴더 생성
	- views 폴더에는 url 마다 뿌려지는 컴포넌트들을 등록할 예정
	<br />

7. [views] 폴더 아래에 NewsView, JobsView, AskView 뷰페이지를 생성
	- Vetur 플러그인 설치로 인해 'vue' 로 자동완성기능으로 템플릿 작성을 한다
	<br />

8. [router/index.js] 각각의 url 주소를 기재한다
	```javascript
	import Vue from 'vue'
	import VueRouter from 'vue-router'

	vue.use(VueRouter);

	const router = new VueRouter({
	  routes: [
	    {
	      // path : URL 주소
	      path: '/news',
	      // component : URL 주소로 갔을 때 표시될 컴포넌트
	      component: '',
	    },
	    {
	      path: '/ask',
	      component: '',
	    },
	    {
	      path: '/jobs',
	      component: '',
	    }
	  ]
	})
	```
<br />

9. [router/index.js] url 주소로 이동했을 때의 컴포넌트를 불러온다.
	- 불러올 컴포넌트를 연결한다.
		```javascript
		import NewsView from '../views/NewsView.vue'
		import AskView from '../views/AskView.vue'
		import JobsView from '../views/JobsView.vue'
		```
	- 연결한 컴포넌트를 routes - component 속성에 적용시킨다
		```javascript
		import Vue from 'vue'
		import VueRouter from 'vue-router'

		import NewsView from '../views/NewsView.vue'
		import AskView from '../views/AskView.vue'
		import JobsView from '../views/JobsView.vue'

		vue.use(VueRouter);

		const router = new VueRouter({
		  routes: [
		    {
		      // path : URL 주소
		      path: '/news',
		      // component : URL 주소로 갔을 때 표시될 컴포넌트
		      component: NewsView,
		    },
		    {
		      path: '/ask',
		      component: AskView,
		    },
		    {
		      path: '/jobs',
		      component: JobsView,
		    }
		  ]
		})
		```
<br />

10. [router/index.js] 파일을 main.js 파일에서 import 하기 위해 변수 router를 export 로 수정한다
	```javascript
	// index.js
	export const router = new VueRouter({ })
	```
	<br />

11. [main.js] 파일에 router 를 import 해준다.
	```javascript
	// main.js
	import { router } from './router/index';

	new Vue({
	  router,
	}).$mount('#app')
	```
<br />

### 3.2. router-view를 이용한 라우팅 컴포넌트 표시
1. [App.vue]에서 라우팅으로 설정한 컴포넌트로 보이게 적용을 해야 한다.<br />이 때, router-view 컴포넌트 태그를 이용한다
	```html
	<router-view></router-view>
	```

2. [터미널] <code>npm run serve</code> 명령어를 실행 후 localhost:8080 을 브라우저에서 확인하면 빈 페이지로 확인이 된다.<br />그 이유는 router에서 기본 url 값 '/' 이 설정되어 있지 않기 때문이다.<br />
	![3-2-1](./_images/3-2-1.png)<br />

3. /news, /ask, /jobs 로 페이지를 이동하면 해당 페이지에 맞는 컴포넌트의 내용이 제대로 보여진다.<br />
	![3-2-2](./_images/3-2-2.png)<br />
<br />

4. **라우팅 라이브러리를 사용할 때 URL에 #이 들어가는 이유?**<br />브라우저 히스토리 조작을 위해서 #이 들어간다.<br />쉽게 말해 URL에 입력된 값을 자바스크립트로 구분하기 위한 것이라고 이해하면 된다.

