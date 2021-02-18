<template>
  <div>
    <div v-for="job in jobs">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchAskList, fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    // var vm = this;
	  // fetchJobsList()
	    // .then(function(response) {
        // vm.jobs = response.data;
      // })
	    // .catch(function(error){
        // console.log(error);
      // })
    fetchAskList()
      // 한줄이어서 {} 생략 가능
      // var vm 선언없이 this로 적용 가능하다.
      .then(response => this.jobs = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>