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

