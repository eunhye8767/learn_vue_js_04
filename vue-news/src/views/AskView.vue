<template>
  <div>
    <p v-for="item in askItems">
      <a v-bind:href="item.url">
        {{ item.title}}
      </a>
      <small>{{ item.time_ago}} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askItems : 'fetchAsk',
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>