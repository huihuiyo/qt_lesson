<template>
  <div id="mallSearch" class="mall-search">
    <form name="searchTop" action="" class="mallSearch-form" target="_top">
      <fieldset>
        <legend>天猫搜索</legend>
        <div class="mallSearch-input">
          <div class="s-combobox">
            <div class="s-combobox-input-wrap">
              <input @blur="changeInputState" @focus="changeInputState" type="text" autocomplete="off" name="q" value="" id="mq" class="s-combobox-input" role="combobox" title="请输入搜索文字">
            </div>
            <label for="mq" class="s-combobox-placeholder" :class="{'focusCss': input_state}" style="color: rgb(102, 102, 102); visibility: visible;">
              搜索 天猫 商品/品牌/店铺
            </label>
          </div>
          <button type="submit">
            搜索
            <s></s>
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input_state: false
    }
  },
  methods: {
    changeInputState() {
      this.input_state = !this.input_state
    }
  }
}
</script>

<style scoped>
#mallSearch {
  float: right;
  padding-top: 25px;
  width: 540px;
  overflow: hidden;
}
.mallSearch-form {
  border: solid #FF0036;
  border-width: 3px 0 3px 3px;
}
#mallSearch fieldset {
  position: relative;
}
legend {
  color: #000;
}
#mallSearch legend {
  display: none;
}
.mallSearch-input {
  background: #fff;
  height: 30px;
}
#mallSearch fieldset, .mallSearch-input, #mallSearch #mq {
  position: relative;
}
.s-combobox {
  float: left;
  height: 30px;
  font-size: 12px;
}
.s-combobox .s-combobox-input-wrap {
  position: relative;
  height: 30px;
  vertical-align: middle;
}
#mallSearch #mq {
  color: #000;
  margin: 0;
  z-index: 2;
  height: 20px;
  line-height: 20px;
  padding: 5px 3px 5px 5px;
  outline: 0;
  border: none;
  font-weight: 900;
  background: url(data:image/gif;base64,R0lGODlhAQADAJEAAObm5t3d3ff39wAAACH5BAAAAAAALAAAAAABAAMAAAICDFQAOw==) repeat-x;
  box-sizing: content-box;
  position: relative;
  width: 439px;
}
.s-combobox .s-combobox-input {
  border-radius: 2px 0 0 2px;
  font-size: 100%;
  vertical-align: middle;
  overflow-y: visible;
}
.focusCss {
  color: rgb(204, 204, 204) !important;
}
#mallSearch label {
  max-width: 90%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  line-height: 30px;
  height: 30px;
  position: absolute;
  left: 8px;
  top: 0;
  z-index: 1;
}
#mallSearch button {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  width: 90px;
  border: 0;
  font-size: 16px;
  letter-spacing: 4px;
  cursor: pointer;
  color: #fff;
  background-color: #FF0036;
  height: 31px;
  overflow: hidden;
  font-family: '\5FAE\8F6F\96C5\9ED1',arial,"\5b8b\4f53";
}

</style>
