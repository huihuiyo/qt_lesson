<template>
  <div class="search-list">
    <transition-group name="list" tag="ul">
      <li class="search-item" v-for="item in searches" :key="item" @click="selectItem(item)">
        <span class="text">{{item}}</span>
        <span class="icon-box" @click.stop="deleteOne(item)">
          <i class="icon">&#xe656;</i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    searches: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
  },
  methods: {
    selecteItem(item) {
      this.$emit('select', item)
    },
    deleteOne(item) {

    }
  }
}
</script>

<style scoped>

</style>
