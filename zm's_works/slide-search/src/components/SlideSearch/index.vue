<template>
  <div class="search-wrap" :class="{'showSearch':showSearchPage, 'hideSearch':!showSearchPage}">
    <div class="title-wrap">
      <span>标题</span>
      <div>&gt;</div>
    </div>
    <div class="icon-back">
      <span>&lt;</span>
    </div>
    <div class="search-input" :class="{'showSearch':showSearchPage}">
      <input type="text" class="search" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    showSearchPage: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.search-wrap {
  z-index: 110;
  width: 100%;
  height: 94px;
  background-color: white;
  transition: all .1s linear;
}
.search-wrap.showSearch{
  height: 52px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .1);
}
.search-wrap.hideSearch{
  box-shadow: none;
}
.title-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  text-align: center;
}
.title-wrap div {
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  padding-right: 10px;
}
.showSearch .title-wrap span {
  display: none;
}
.icon-back {
  position: absolute;
  left: 10px;
  top: 0;
  z-index: 110;
  height: 42px;
}
.search-input {
  position: absolute;
  top: 42px;
  left: 0;
  z-index: 100;
  display: flex;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  transition: all .2s linear;
}
.search-input.showSearch{
  top: 0;
  left: 40px;
}
.search {
  border: 1px solid #eee;
  color: #666;
  width: 100%;
  height: 22px;
  background: transparent;
  font-size: 12px;
  margin-left: 10px;
  padding: 4px;
  border-radius: 5px;
}
</style>
