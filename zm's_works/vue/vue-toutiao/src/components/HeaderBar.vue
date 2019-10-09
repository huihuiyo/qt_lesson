<template>
  <div class="header-wrapper df-sb">
    <div class="logo df-c">
      <img src="@/assets/images/logo.png" alt="LOGO" />
    </div>
    <div class="search">
      <Icon name="2fangdajing" class="search-icon"></Icon>
      <input type="text" placeholder="搜索些啥呢..." @click="skipSearch" readonly />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    skipSearch(){}
  }
};
</script>

<style scoped lang='less'>

</style>
