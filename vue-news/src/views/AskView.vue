<template>
  <div>
    <p v-for="item in askItems">
      <router-link v-bind:to="`/item/${item.id}`">{{ item.title}}</router-link>
      <!-- <a v-bind:href="item.url">
        {{ item.title}}
      </a> -->
      <small>
        {{ item.time_ago}} by {{ item.user }}
        </small>
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