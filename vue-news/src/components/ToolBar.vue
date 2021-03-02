<template>  
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color: #fff;
  background: #42b883;
  display: flex;
  padding: 8px;
}
.header a {
  color: #fff;
}
.header a:not(:first-of-type) {
  padding-left: 15px;
}
.header .router-link-exact-active {
  color: #35495e;
}
</style>