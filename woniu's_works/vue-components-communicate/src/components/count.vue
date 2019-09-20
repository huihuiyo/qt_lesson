<template>
  <div>
    <h2>{{msg}}</h2>
    <hr />
    <h3>{{count}}</h3>
    <button @click="add(10)">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <hr />
    <p>{{date}}</p>
    <hr />
    <p>{{money}}</p>
    <button @click="makeMoneyAction">makeMoney</button>
  </div>
</template>

<script>
import store from "@/store/index.js";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: "Hello Vuex!"
    };
  },

  // 三种方式：
  // 1
  // computed: {
  //   date () {
  //     return this.$store.state.date
  //   }
  // },
  // 2
  computed: {
    ...mapState(['date', 'money']),
    // count () {
    //   return this.$store.getters.count
    // }
    ...mapGetters(['count'])
  },
  // 3
  // computed: mapState({
  //   date: state => state.date
  // }),
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['makeMoneyAction'])
  },
  store
};
</script>

<style scoped>
</style>
