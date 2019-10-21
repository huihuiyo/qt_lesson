<template>
  <div>
    <ul class="quick-menu">
      <li class="mytaobao menu-item">
        <div class="menu-item-content">
          <a @mouseenter="enterDiv(0)" @mouseleave="leaveDiv(0)" class="menu-hd" :class="{'hoverCss': mouseInDiv[0].status}" href="//i.taobao.com/my_taobao.htm?spm=a223b.7790858.a2226mz.4.261b4187pdHi7B" target="_top" rel="login-menu-mytb">
            我的淘宝
            <b :class="{'rotateB': mouseInDiv[0].status}"></b>
          </a>
          <div class="menu-bd" v-show="mouseInDiv[0].status" @mouseenter="enterDiv(0)" @mouseleave="leaveDiv(0)">
            <div class="menu-bd-panel">
              <a href="//trade.taobao.com/trade/itemlist/list_bought_items.htm?t=20110530" target="_top" rel="login-menu-mytb">已买到的宝贝</a>
              <a href="//trade.taobao.com/trade/itemlist/list_sold_items.htm?t=20110530" target="_top" rel="login-menu-mytb">已卖出的宝贝</a>
            </div>
          </div>
        </div>
      </li>
      <li class="cart">
        <i class="iconfont icon-gouwuche tmall_icon_font"></i>
        <a class="cart-link" href="//cart.tmall.com/cart/myCart.htm?spm=a223b.7790858.a2226mz.8.261b4187cwsXek&amp;from=btop" target="_top" rel="login-menu-mytb">
          购物车
        </a>
      </li>
      <li class="favorite menu-item">
        <div class="menu-item-content">
          <a class="menu-hd" @mouseenter="enterDiv(1)" @mouseleave="leaveDiv(1)" :class="{'hoverCss': mouseInDiv[1].status}" href="//shoucang.taobao.com/shop_collect_list.htm?spm=a223b.7790858.a2226mz.9.261b4187jTjPeA&amp;scjjc=c1" target="_top" rel="login-menu-mytb">
            收藏夹
            <b :class="{'rotateB': mouseInDiv[1].status}"></b>
          </a>
          <div class="menu-bd" v-show="mouseInDiv[1].status" @mouseenter="enterDiv(1)" @mouseleave="leaveDiv(1)">
            <div class="menu-bd-panel">
              <a href="//shoucang.taobao.com/item_collect.htm" target="_top" rel="login-menu-mytb">收藏的宝贝</a>
              <a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top" rel="login-menu-mytb">收藏的店铺</a>
            </div>
          </div>
        </div>
      </li>
      <li class="separator"></li>
      <li class="mobile">
        <i class="iconfont icon-shouji tmall_icon_font"></i>
        <a @mouseenter="enterDiv(2)" @mouseleave="leaveDiv(2)" title="天猫无线" target="_top" class="mobile-link" href="//pages.tmall.com/wow/portal/act/app-download?scm=1027.1.1.1">手机版</a>
        <div class="qrcode" v-show="mouseInDiv[2].status" @mouseenter="enterDiv(2)" @mouseleave="leaveDiv(2)">
          <div class="qrcode-content"></div>
          <p>扫一扫，定制我的天猫！</p>
          <b></b>
        </div>
      </li>
      <li class="home">
        <a href="//www.taobao.com/?spm=a223b.7790858.a2226mz.13.261b4187AthNLX">淘宝网</a>
      </li>
      <li class="seller menu-item">
        <div class="menu-item-content">
          <a @mouseenter="enterDiv(3)" @mouseleave="leaveDiv(3)" :class="{'hoverCss': mouseInDiv[3].status}" class="menu-hd" href="//mai.taobao.com?spm=a223b.7790858.a2226mz.14.261b4187AthNLX" target="_top">
            商家支持
            <b :class="{'rotateB': mouseInDiv[3].status}"></b>
          </a>
          <div class="menu-bd" v-show="mouseInDiv[3].status" @mouseenter="enterDiv(3)" @mouseleave="leaveDiv(3)">
            <ul>
              <li><h3>商家：</h3>
                <a target="_top" href="//mai.taobao.com/">商家中心</a>
                <a class="sitemap-right" target="_top" href="//guize.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_6_268545">天猫规则</a>
                <a class="sitemap-right" target="_top" href="//zhaoshang.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_2_268545">商家入驻</a>
                <a target="_top" href="//fw.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_3_268545">运营服务</a>
                <a class="sitemap-right" target="_top" href="//www.tmall.com/wow/seller/act/tmallpinkong">商家品控</a>
                <a target="_top" href="//fuwu.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_5_268545">商家工具</a>
                <a target="_top" href="//zhiku.tmall.com">天猫智库</a>
                <a class="sitemap-right" target="_top" href="//maowo.tmall.com/?acm=lb-tms-1104633-90536.1003.4.268545&amp;scm=1003.4.lb-tms-1104633-90536.OTHER_8_268545">喵言喵语</a>
              </li>
              <li><h3>帮助：</h3>
                <a target="_top" href="//helpcenter.tmall.com/index?from=high">帮助中心</a>
                <a target="_top" href="//infob.taobao.com/help">问商友</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="sitemap">
        <div class="menu-item-content">
          <h3 class="menu-hd" @mouseenter="enterDiv(4)" @mouseleave="leaveDiv(4)" :class="{'hoverCss': mouseInDiv[4].status}">
            <i class="iconfont icon-liebiao tmall_icon_font"></i>
            <span>网站导航</span>
            <b :class="{'rotateB': mouseInDiv[4].status}"></b>
          </h3>
          <div class="menu-bd" @mouseenter="enterDiv(4)" @mouseleave="leaveDiv(4)" v-show="mouseInDiv[4].status">
            <div class="site-cont site-hot">
              <h2>热点推荐
                <span>Hot</span>
              </h2>
              <ul class="site-list">
                <li>
                  <a href="//chaoshi.tmall.com?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_1_247689">天猫超市</a>
                </li>
                <li>
                  <a href="//miao.tmall.com?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_2_247689">喵鲜生</a>
                </li>
                <li>
                  <a href="//new3c.tmall.com/?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_3_247689">科技新品<i class="sitemap-icon sitemap-icon-new"></i> </a></li>
                <li>
                  <a href="//www.tmall.com/wow/fushi/act/nvzhuangnew?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_4_247689">女装新品<i class="sitemap-icon  sitemap-icon-hot "></i> </a></li>
                <li>
                  <a href="//ku.tmall.com?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_5_247689">酷玩街</a>
                </li>
                <li>
                  <a href="//www.tmall.com/wow/fushi/act/neiyinew?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_6_247689">内衣新品<i class="sitemap-icon  sitemap-icon-hot "></i> </a></li>
                <li>
                  <a href="//mei.tmall.com/shiyong.htm?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_7_247689">试美妆</a>
                </li>
                <li>
                  <a href="//www.tmall.com/wow/fushi/act/sportsnew?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_8_247689">运动新品</a>
                </li>
                <li>
                  <a href="//www.tmall.com/wow/fushi/act/nanzhuangnew?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_9_247689">时尚先生<i class="sitemap-icon  sitemap-icon-hot "></i> </a></li>
                <li>
                  <a href="//baby.tmall.com?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_11_247689">精明妈咪</a>
                </li>
                <li>
                  <a href="//chi.tmall.com/?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_12_247689">吃乐会<i class="sitemap-icon sitemap-icon-new"></i> </a></li>
                <li>
                  <a href="//b.tmall.com/?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_13_247689">企业采购</a>
                </li>
                <li>
                  <a href="//vip.tmall.com/vip/index.htm?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_14_247689">会员积分</a>
                </li>
                <li>
                  <a href="//www.tmall.hk/?acm=lb-tms-1289015-81300.1003.4.247689&amp;scm=1003.4.lb-tms-1289015-81300.OTHER_15_247689">天猫国际</a>
                </li>
                <li>
                  <a href="//pages.tmall.com/wow/seller/act/ebusiness2?spm=a223k.7780452.7195644330.3&amp;acm=lb-zebra-18822-2134013.1003.4.1914591&amp;scm=1003.4.lb-zebra-18822-2134013.OTHER_14975441556961_1914591#tab=%E6%B5%99%E6%B1%9F%E5%88%B6%E9%80%A0&amp;sub=%E6%B5%99%E6%B1%9F%E5%88%B6%E9%80%A0">品质频道</a>
                </li>
              </ul>
            </div>
            <div class="site-cont site-market">
              <h2>行业市场
                <span>Market</span>
              </h2>
              <ul class="site-list">
                <li><a href="//mei.tmall.com">美妆</a></li>
                <li><a href="//3c.tmall.com">电器</a></li>
                <li><a href="//nvzhuang.tmall.com">女装<i class="sitemap-icon  sitemap-icon-hot "></i> </a></li>
                <li><a href="//nanzhuang.tmall.com">男装<i class="sitemap-icon  sitemap-icon-hot "></i> </a></li>
                <li><a href="//nvxie.tmall.com">女鞋</a></li>
                <li><a href="//nanxie.tmall.com">男鞋</a></li>
                <li><a href="//neiyi.tmall.com">内衣<i class="sitemap-icon  sitemap-icon-hot "></i> </a></li>
                <li><a href="//bag.tmall.com">箱包</a></li>
                <li><a href="//sports.tmall.com">运动</a></li>
                <li><a href="//baby.tmall.com">母婴</a></li>
                <li><a href="//jia.tmall.com">家装</a></li>
                <li><a href="//yao.tmall.com">医药</a></li>
                <li><a href="//food.tmall.com">食品</a></li>
                <li><a href="//dai.tmall.com/">配饰<i class="sitemap-icon sitemap-icon-new"></i></a></li>
                <li><a href="//car.tmall.com/">汽车</a></li>
              </ul>
            </div>
            <div class="site-cont site-help"><h2>服务指南<span>Help</span></h2>
              <ul class="site-list">
                <li>
                  <a href="//consumerservice.tmall.com/online-help">帮助中心 </a>
                </li>
                <li><a href="//www.tmall.com/wow/seller/act/pinkong">品质保障 </a></li>
                <li><a href="//www.tmall.com/wow/seller/act/special-service">特色服务 </a></li>
                <li><a href="//www.tmall.com/wow/seller/act/seven-day">7天退换货 </a></li>
              </ul>
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
      mouseInDiv: [
        {
          status: false
        },
        {
          status: false
        },
        {
          status: false
        },
        {
          status: false
        },
        {
          status: false
        }
      ]
    }
  },
  methods: {
    enterDiv(opt) {
      this.mouseInDiv[opt].status = true;
    },
    leaveDiv(opt) {
      this.mouseInDiv[opt].status = false;
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
  margin-right: 4px;
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
  display: block;
  height: 26px;
  cursor: pointer;
  z-index: 100001;
  border: solid #f2f2f2;
  border-width: 0 1px;
  position: relative;
}
.menu-hd, .cart, .mobile, .home{
  padding: 0 10px;
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
  right: 1px;
}
.rotateB {
  border-color: #bbb transparent transparent;
  transition: transform .2s ease-in;
  transform: rotateZ(180deg);
  transform-origin: 50% 30%;
}
.menu-bd {
  width: 74px;
  position: absolute;
  left: 0;
  top: 27px;
  background: #fff;
  filter: alpha(opacity=99);
  z-index: 93110;
  border: solid #eee;
  border-width: 0 1px 1px;
}
.mytaobao .menu-bd, .favorite .menu-bd, .seller .menu-bd, .sitemap .menu-bd {
  line-height: 1.4;
  padding: 8px 10px;
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
.favorite .menu-bd {
  width: 62px;
}
.separator {
  display: inline-block;
  width: 0;
  height: 14px;
  line-height: 14px;
  vertical-align: top;
  position: relative;
  top: 6px;
  left: 0;
  font-size: 0;
  border-left: 1px solid #ccc;
  margin: 0 2px 0 5px;
}
.qrcode {
  position: absolute;
  width: 175px;
  height: 227px;
  background: #fff;
  left: -48px;
  top: 26px;
  box-shadow: 0 0 5px #aaa;
}
.qrcode-content {
  width: 175px;
  height: 175px;
  margin: 5px 0 0px;
  background: url(//img.alicdn.com/tfs/TB1vJ0POwTqK1RjSZPhXXXfOFXa-175-215.png) 0 0 no-repeat;
}
.qrcode p {
  background: url(//img.alicdn.com/tfs/TB1XdkUe7L0gK0jSZFtXXXQCXXa-145-30.jpg) center bottom no-repeat;
  text-indent: -9999px;
  overflow: hidden;
  margin: 0 15px;
  line-height: 35px;
}
.seller .menu-bd {
  width: 122px;
  overflow: hidden;
  right: 0;
  left: auto;
}
.seller ul {
  margin-top: -5px;
  overflow: hidden;
  width: 122px;
}
.seller li {
  float: none;
  padding: 5px 0;
  height: auto;
  display: block;
  line-height: 1.4;
  border-bottom: 1px dotted #827777;
  margin-right: -20px;
}
.seller li a {
  display: inline-block;
  width: 48px;
  margin-right: 20px;
  line-height: 22px;
}
.seller h3 {
  color: #666;
  font-weight: 700;
}
.sitemap .menu-hd {
  font-weight: 400;
}
.sitemap .menu-hd span {
  color: #999;
  height: 26px;
  cursor: pointer;
  z-index: 100001;
  border-width: 0 1px;
  position: relative;
}
.sitemap .menu-bd {
  width: 1188px;
  border-width: 0 1px 1px;
  right: 0;
  left: auto;
  padding: 25px 0;
}
.site-hot a:hover, .site-hot h2 {
  color: #f56a00;
}
.site-cont {
  padding-left: 30px;
  overflow: hidden;
  height: 110px;
}
.site-cont h2 {
  font-size: 16px;
  padding-bottom: 8px;
  font-family: '\5FAE\8F6F\96C5\9ED1',arial,"\5b8b\4f53";
}
.site-cont h2 span {
  padding-left: 6px;
}
.site-cont ul {
  margin-right: -20px;
  overflow: hidden;
}
.site-list li {
  width: 95px;
  float: left;
  padding: 6px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.site-market {
  width: 275px;
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
}
.site-market a:hover, .site-market h2 {
  color: #2263d4;
}
.site-hot, .site-market {
  float: left;
  width: 455px;
}
.site-list li a {
  position: relative;
  outline: none;
}
.sitemap-icon {
  position: absolute;
  width: 9px;
  height: 11px;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  top: -7px;
  right: -9px;
  background: url(//img.alicdn.com/tps/i1/TB1gyXLGFXXXXceXVXXCEcU6VXX-439-220.png) -9999px -9999px no-repeat;
}
.sitemap-icon-hot {
  background-position: -37px 0;
}
.sitemap-icon-new {
  background-position: -37px -11px;
}
</style>
