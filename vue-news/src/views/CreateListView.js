import ListView from './ListView.vue';

export default function createListView(name) {
  // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
  name : name,  // 'NewsView'
  render(createElement) {
    return createElement(ListView);
  }
}