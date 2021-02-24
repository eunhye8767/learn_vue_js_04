<template>
  <div>
    <p>id : {{ itemInfo.id }}</p>
    <p>title : {{ itemInfo.title }}</p>
    <p>user : {{ itemInfo.user }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    const itemInfo = this.$route.query.id;
    console.log(itemInfo);
    this.$store.dispatch('FETCH_ITEM', itemInfo);
  }
}
</script>

<style>

</style>