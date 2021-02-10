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
