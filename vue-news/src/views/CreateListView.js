import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    // name: 'HOC Component', name 값을 정해주면 해당 name을 뷰 개발자도구에서 컴포넌트 태그 이름을 확인할 수 있다
    name,
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then( ()=> {
          console.log('fetched');
          bus.$emit('end:spinner')
        })
        .catch( (error)=> {
          console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}