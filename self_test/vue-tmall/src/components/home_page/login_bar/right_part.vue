<template>
  <div>
    <ul class="quick-menu">
      <li class="mytaobao menu-item">
        <div class="menu-item-content">
          <a class="menu-hd" href="//i.taobao.com/my_taobao.htm?spm=a223b.7790858.a2226mz.4.261b4187pdHi7B" target="_top" rel="login-menu-mytb">
            我的淘宝
            <b></b>
          </a>
          <div class="menu-bd">
            <div class="menu-bd-panel">
              <a href="//trade.taobao.com/trade/itemlist/list_bought_items.htm?t=20110530" target="_top" rel="login-menu-mytb">已买到的宝贝</a>
              <a href="//trade.taobao.com/trade/itemlist/list_sold_items.htm?t=20110530" target="_top" rel="login-menu-mytb">已卖出的宝贝</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.login_bar a:link, .login_bar a:visited, .bar_container {
  color: #999;
}
.login_bar .menu-bd, .login_bar a:active, .login_bar a:hover {
  color: #FF0036;
}
.quick-menu {
  position: absolute;
  right: 0;
  top: 0;
  height: 26px;
  line-height: 26px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.quick-menu li {
  float: left;
  position: relative;
}
.menu-item {
  z-index: 93110;
  position: relative;
}
.menu-item-content {
  position: relative;
}
.menu-hd {
  padding-right: 14px;
}
.menu-hd {
  padding: 0 10px;
}
.menu-hd {
  display: block;
  height: 26px;
  cursor: pointer;
  z-index: 100001;
  border: solid #f2f2f2;
  border-width: 0 1px;
  position: relative;
}
.menu-hd:hover {
  background-color: #fff
}
.menu-hd b {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  position: absolute;
  right: 6px;
  top: 12px;
  width: 0;
  height: 0;
  border-width: 3px;
  border-style: solid dashed dashed;
  border-color: #bbb transparent transparent;
  font-size: 0;
  line-height: 0;
}
.menu-bd {
  width: 74px;
}
.mytaobao .menu-bd {
  line-height: 1.4;
  padding: 8px 10px;
}
.menu-bd {
  /* display: none; */
  position: absolute;
  left: 0;
  top: 27px;
  background: #fff;
  filter: alpha(opacity=99);
  z-index: 93110;
  border: solid #eee;
  border-width: 0 1px 1px;
}
.menu-bd-panel a {
  display: block;
  line-height: 20px;
}

</style>
