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

4. **개발 작업을 진행할 때엔 ESLint 설정을 켜두고 사용하는 것을 권장**한다.

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
<br />

### 3.3. redirect 속성과 router-link
#### 3.3.1. 참고자료
- [케밥 케이스 컴포넌트 스타일 가이드 (Essential)](https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential)
- [파스칼 케이스 컴포넌트 스타일 가이드 (Strongly Recommended)](https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended)
<br />

#### 3.3.2. redirect 속성
1. '/' 루트로 접속했을 때 연결된 router-view 가 없을 경우 빈 페이지가 보여지는데,<br />빈 페이지가 아닌 **'/'로 접속하면 특정 페이지를 보이게 적용**한다.
2. **redirect 속성을 이용하여 '/' 접속 시, 특정 폴더를 적용하여 해당 컴포넌트 페이지가 보이게 한다.**
3. '/'로 접속하게 되면 '/news' 폴더의 컴포넌트 페이지가 보이게 적용한다.
	```javascript
	// index.js
	export const router = new VueRouter({
	   routes: [
	     {
	       path: '/',
	       redirect: '/news',
	     },
	  ]
	})
	```

4. '/'로 접속 시, '/news'로 자동 바뀌면서 해당 컴포넌트 페이지가 보인다.<br />
	![3-3-1](./_images/3-3-1.png)<br />
	<br />

#### 3.3.3. router-link 속성
1. components 폴더에 ToolBar.vue 컴포넌트 파일을 생성한다
2. App.vue 파일에 ToolBar 컴포넌트를 적용한다.
	```html
	<template>
	  <div id="app">
	    <tool-bar></tool-bar>
	    <router-view></router-view>  
	  </div>
	</template>
	```
	```javascript
	import ToolBar from './components/ToolBar.vue';

	export default {
	  components: {
	    ToolBar,
	  },
	}
	```
	#### 컴포넌트 태그 형식은 파스칼 문법이 아닌 케밥 문법으로 적용한다.
	- **컴포넌트 태그 형식**
		- 파스칼 케이스 : <ToolBar></ToolBar>
		- 케밥 문법 : <tool-bar></tool-bar>
	- **케밥 문법으로 사용하는 이유는 해당 컴포넌트 태그를 ctrl 또는 alt 누르고 클릭하면 해당 컴포넌트 태그 .vue 페이지로 이동**이 된다.
		- 작은 단어 두개를 - 으로 연결한 컴포넌트 태그로 표기한다.<br />
		![3-3-2](./_images/3-3-2.png)<br />
	- Vue에서 권장하는 컴포넌트 태그는 파스칼 케이스지만, **VS Code를 사용할 경우 케밥 문법으로 VS Code에서 제공하는 기능을 사용**하는 것을 추천.
	<br />

3. [ Toolbar.vue ] router-link 로 코드를 작성한다.
	- router-link 기본 문법
	```html
	<router-link to="">router link</router-link>
	```
	- router-link 태그를 사용하면 자동적으로 a 태그로 보여진다
	```html
	<template>  
	  <div>
	    <router-link to="">News</router-link>
	    <router-link to="">Ask</router-link>
	    <router-link to="">Jobs</router-link>
	  </div>
	</template>
	```
	![3-3-3](./_images/3-3-3.png)<br />
<br />

4. router-link 태그에서 to 속성에 이동할 링크 URL을 적용한다
	```html
	<template>  
	  <div>
	    <router-link to="/news">News</router-link>
	    <router-link to="/ask">Ask</router-link>
	    <router-link to="/jobs">Jobs</router-link>
	  </div>
	</template>
	```
	<br />

### 3.4. ToolBar의 라우터 링크 스타일링
- <code><style scoped></style></code> :<br />해당 컴포넌트 .vue 파일에만 적용되는 css
- < router-link /> :<br />active인 상태일 때의 클래스 자동추가 == router-link-exact-active
<br />

### 3.5. 라우터 폴더 작명 팁과 라우터 mode 안내
#### 3.5.1. 라우터 폴더 작명  
- 기존의 router(라우터) 폴더명을 routes 로 변경한다
- 기존의 router로 명명했을 때엔 일반폴더로 되어 있었지만 routes로 하게 되면 일반폴더와 달라 구분이 된다.<br />
	![3-5-1](./_images/3-5-1.png)<br />
- routes 로 폴더명을 구분했으면 main.js 에서 import router 의 경로도 수정해줘야 한다.
- import 경로가 맞는 지 확인을 할 경우, 변수 영역에 ctrl 또는 alt 와 함께 클릭하여 파일을 확인 해본다.<br />
	![3-5-2](./_images/3-5-2.png)<br />
	<br />

#### 3.5.2. 라우터 mode 안내
- [ routes/index.js ] **new VueRouter 인스턴스에 mode를 적용하여 url 주소에 표시된 # 을 제거**한다.
	```javascript
	export const router = new VueRouter({
	  mode: 'history',
	}
	```
	![3-5-3](./_images/3-5-3.png)<br />
<br />
<br />
<br />

## 4. API 구현
### 4.1. axios를 이용한 api 호출
#### 참고자료 API
- [API 참고사이트](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)
	- news, ask, jobs API 활용 예정
	<br />

#### 구성 팁
- views 라는 폴더의 컴포넌트에는 페이지의 라우팅에 대한 정보만 들어가는 것이 좋다.
- 데이터에 관련된 로직에 관한 것을 views에 적용하는 것은 옳지 않다. (유지보수 등에 관리하기가 좋지 않다.)

#### axios 적용법
1. [터미널] <code>npm i axios --save</code> 명령어 실행
2. [ NewsView.vue ] 아래 코드로 파일 작성
	```html
	<template>
	  <div>
	    
	  </div>
	</template>
	```
	```javascript
	import axios from 'axios';

	export default {
	  data() {
	    return {
	      user: []
	    }
	  },
	  created() {
	    axios.get('https://api.hnpwa.com/v0/news/1.json')
	      .then(function(response) {
	        console.log(response);
	    })
	      .catch(function(error){
	        console.log(error);
	    })
	  }
	}
	```
3. [터미널] <code>npm run serve</code> 명령어로 서버 실행
4. Local 사이트를 브라우저에서 확인 가능
	- 개발자도구 > network 패널 탭 > XHR 에서 axios된 내용을 확인할 수 있다.
		![4-1-1](./_images/4-1-1.png)<br />

5. [개발자도구] 콘솔 창에서 해당 로그 확인 가능<br />
	![4-1-2](./_images/4-1-2.png)<br />

6. 전달 받은 값을 data - user 속성에 대입시킨다
	- 변수 vm을 생성하여 this 값을 대입한다
	```html
	<template>
	  <div>
	    <div v-for="user in users">{{ user }}</div>
	  </div>
	</template>
	```
	```javascript
	import axios from 'axios';

	export default {
	  data() {
	    return {
	      user: []
	    }
	  },
	  created() {
	    var vm = this;

		  axios.get('https://api.hnpwa.com/v0/news/1.json')
		    .then(function(response) {
				  console.log(response);
	        vm.user = response.data;
			})
		    .catch(function(error){
	        console.log(error);
			})
		}
	}
	```

7. [ vue 개발자도구 ] 불러온 data의 값들을 확인할 수 있다

8. 불러온 data 값에서 title 속성의 값만 불러오고 싶을 때엔 .title 속성을 추가하면 된다.
	```html
	<template>
	  <div>
	    <div v-for="user in users">{{ user.title }}</div>
	  </div>
	</template>
	```
	<br />

### 4.2. axios의 api 함수 구조화 방법 및 실습안내
1. 컴포넌트마다 api를 호출해서 쓰는 것이 아닌 **api 폴더를 만들어서 관리**해야 한다
	```javascript
	// NewsView.vue
	import axios from 'axios';

	export default {
	  data() {
	    return {
	      users: []
	    }
	  },
	  created() {
	    var vm = this;
	
		  axios.get('https://api.hnpwa.com/v0/news/1.json')
		    .then(function(response) {
				  console.log(response);
	        vm.users = response.data;
			})
		    .catch(function(error){
	        console.log(error);
			})
		}
	}
	```
2. src 폴더에 api 폴더를 만들고 index.js 파일을 생성한다.<br />
	- 일반 폴더 아이콘과 다른 api 폴더 아이콘을 확인할 수 있다.
		![4-2-1](./_images/4-2-1.png)<br />

3. [src/api/index.js] import axios from 'axios';
	- from 'axios' :<br />nodo_modules 에 설치된 axios 라이브러리를 갖고 오는 것을 의미한다.
	```javascript
	import axios from 'axios';
	```

4. NewsView.vue 에서 axios를 호출한 코드를 api/index.js 에 함수로 변환하여 코드를 작성한다.
	- API을 각 컴포넌트별로 적용을 하게 되면 동일한 코드를 각 컴포넌트 페이지에 적용하기 때문에 유지보수 등 관리가 용이하지 않다.<br /> 따라서, 별도의 API 폴더를 만들어 관리하는 것이 좋다.
	```javascript
	// api/index.js 

	import axios from 'axios';

	// 1. HTTP Request & Response와 관련된 기본 설정
	const config = {
	  baseUrl: 'https://api.hnpwa.com/v0/'
	};

	// 2. API 함수들을 정리
	function fetchNewsList() {
	  // return axios.get(config.baseUrl+'news/1.json');
	  return axios.get(`${config.baseUrl}news/1.json`);
	};

	export {
	  fetchNewsList
	};
	```

5. api/index.js 코드 작성이 끝났으면 NewsView.vue 컴포넌트 파일에서 해당 파일을 import 한다.
	```html
	<!-- NewsView.vue -->
	<template>
	  <div>
	    <div v-for="user in users">{{ user.title }}</div>
	  </div>
	</template>
	```
	```javascript
	// NewsView.vue
	import { fetchNewsList } from '../api/index.js';

	export default {
	  data() {
	    return {
	      users: []
	    }
	  },
	  created() {
	    var vm = this;
		  fetchNewsList()
		    .then(function(response) {
				  console.log(response);
	        vm.users = response.data;
	      })
		    .catch(function(error){
	        console.log(error);
	      })
		}
	}
	```