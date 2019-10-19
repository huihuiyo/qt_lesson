<template>
  <div>
    <ul class="quick-menu">
      <li class="mytaobao menu-item">
        <div class="menu-item-content">
          <a @mouseenter="enterDiv1" @mouseleave="leaveDiv1" class="menu-hd" :class="{'hoverCss': mouseInDiv1}" href="//i.taobao.com/my_taobao.htm?spm=a223b.7790858.a2226mz.4.261b4187pdHi7B" target="_top" rel="login-menu-mytb">
            我的淘宝
            <b :class="{'rotateB': mouseInDiv1}"></b>
          </a>
          <div class="menu-bd" v-show="mouseInDiv1" @mouseenter="enterDiv1" @mouseleave="leaveDiv1">
            <div class="menu-bd-panel">
              <a href="//trade.taobao.com/trade/itemlist/list_bought_items.htm?t=20110530" target="_top" rel="login-menu-mytb">已买到的宝贝</a>
              <a href="//trade.taobao.com/trade/itemlist/list_sold_items.htm?t=20110530" target="_top" rel="login-menu-mytb">已卖出的宝贝</a>
            </div>
          </div>
        </div>
      </li>
      <li class="cart">
        <i class="iconfont icon-gouwuche tmall_icon_font"></i>
        <a class="sn-cart-link" href="//cart.tmall.com/cart/myCart.htm?spm=a223b.7790858.a2226mz.8.261b4187cwsXek&amp;from=btop" target="_top" rel="login-menu-mytb">
          购物车
        </a>
      </li>
      <li class="favorite menu-item">
        <div class="menu-item-content">
          <a class="menu-hd" @mouseenter="enterDiv2" @mouseleave="leaveDiv2" :class="{'hoverCss': mouseInDiv2}" href="//shoucang.taobao.com/shop_collect_list.htm?spm=a223b.7790858.a2226mz.9.261b4187jTjPeA&amp;scjjc=c1" target="_top" rel="login-menu-mytb">
            收藏夹
            <b :class="{'rotateB': mouseInDiv2}"></b>
          </a>
          <div class="menu-bd" v-show="mouseInDiv2" @mouseenter="enterDiv2" @mouseleave="leaveDiv2">
            <div class="menu-bd-panel">
              <a href="//shoucang.taobao.com/item_collect.htm" target="_top" rel="login-menu-mytb">收藏的宝贝</a>
              <a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top" rel="login-menu-mytb">收藏的店铺</a>
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
      mouseInDiv1: false,
      mouseInDiv2: false
    }
  },
  methods: {
    enterDiv1() {
      this.mouseInDiv1 = true;
    },
    leaveDiv1() {
      this.mouseInDiv1 = false;
    },
    enterDiv2() {
      this.mouseInDiv2 = true;
    },
    leaveDiv2() {
      this.mouseInDiv2 = false;
    }
  }
}
</script>

<style scoped>
.tmall_icon_font {
  color: #FF0036;
  position: relative;
  top: 1px;
  font-size: 12px;
  font-style: normal;
}
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
.quick-menu a:hover {
  text-decoration: underline !important;
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
.menu-hd, .cart {
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
.hoverCss {
  background-color: #fff;
  border-color: #eee;
  padding-bottom: 1px;
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
.rotateB {
  border-color: #bbb transparent transparent;
  transition: transform .2s ease-in;
  transform: rotateZ(180deg);
  transform-origin: 50% 30%;
}
.menu-bd {
  width: 74px;
}
.mytaobao .menu-bd {
  line-height: 1.4;
  padding: 8px 10px;
}
.menu-bd {
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
.cart {
  position: relative;
  text-align: center;
  text-decoration: none;
}
.cart a {
  position: static;
}
</style>
