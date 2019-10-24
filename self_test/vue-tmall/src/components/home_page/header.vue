<template>
  <div class="header">
    <div class="headerLayout">
      <div class="headerCon">
        <h1 class="mallLogo">
          <span class="mlogo">
            <div>
              <a href="//nvxie.tmall.com?acm=lb-zebra-28539-342128.1003.8.463028&amp;scm=1003.8.lb-zebra-28539-342128.ITEM_14437468628521_463028" title="天猫女鞋" style="float:left;width:115px;">
                <s style="background:url(//img.alicdn.com/tps/TB1RBn7IpXXXXcYXVXXXXXXXXXX.png) center center no-repeat;width:115px;height:48px;">
                </s>
                天猫女鞋
              </a>
            </div>
          </span>
          <div class="global-sub-nav" @mouseleave="mouseLeave" @mouseenter="mouseEnter">
            <h2>
              更多
              <i></i>
            </h2>
            <div class="global-nav-list" v-show="mouseInDiv">
              <ul>
                <li class="global-sub-nav-item link-miao">
                  <a href="//miao.tmall.com">喵鲜生</a>
                </li>
                <li class="global-sub-nav-item link-chaoshi">
                  <a href="//chaoshi.tmall.com">天猫超市</a>
                </li>
                <li class="global-sub-nav-item link-vip">
                  <a href="//vip.tmall.com">天猫会员</a>
                </li>
                <li class="global-sub-nav-item link-nvzhuang">
                  <a href="//nvzhuang.tmall.com">天猫女装</a>
                </li>
                <li class="global-sub-nav-item link-nanzhuang">
                  <a href="//nanzhuang.tmall.com">天猫男装</a>
                </li>
                <li class="global-sub-nav-item link-nvxie">
                  <a href="//nvxie.tmall.com">天猫女鞋</a>
                </li>
                <li class="global-sub-nav-item link-nanxie">
                  <a href="//nanxie.tmall.com">天猫男鞋</a>
                </li>
                <li class="global-sub-nav-item link-neiyi">
                  <a href="//neiyi.tmall.com">天猫内衣</a>
                </li>
                <li class="global-sub-nav-item link-bag">
                  <a href="//bag.tmall.com">天猫箱包</a>
                </li>
                <li class="global-sub-nav-item link-sports">
                  <a href="//sports.tmall.com">天猫运动</a>
                </li>
                <li class="global-sub-nav-item link-3c">
                  <a href="//3c.tmall.com">天猫电器</a>
                </li>
                <li class="global-sub-nav-item link-car">
                  <a href="//car.tmall.com">阿里汽车</a>
                </li>
                <li class="global-sub-nav-item link-mei">
                  <a href="//mei.tmall.com">天猫美妆</a>
                </li>
                <li class="global-sub-nav-item link-baby">
                  <a href="//baby.tmall.com">天猫母婴</a>
                </li>
                <li class="global-sub-nav-item link-jia">
                  <a href="//jia.tmall.com">天猫家装</a>
                </li>
                <li class="global-sub-nav-item link-yao">
                  <a href="//yao.tmall.com">天猫医药</a>
                </li>
                <li class="global-sub-nav-item link-food">
                  <a href="//food.tmall.com">天猫食品</a>
                </li>
              </ul>
            </div>
            <b class="global-kill-line" v-show="mouseInDiv"></b>
          </div>
        </h1>
        <div class="header-extra">
          <div class="header-banner">
            <div></div>
          </div>
          <SearchPart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPart from './header/search_part'
export default {
  data () {
    return {
      mouseInDiv: false
    }
  },
  components: {
    SearchPart
  },
  methods: {
    mouseEnter() {
      this.mouseInDiv = true
    },
    mouseLeave() {
      this.mouseInDiv = false
    }
  },
}
</script>

<style scoped>
.header {
  margin-left: auto;
  margin-right: auto;
  width: auto!important;
  position: relative;
  z-index: 1000;
  margin-bottom: 0;
  min-width: 990px;
  background: #fff;
  height: 122px;
  margin-top: -26px!important;
}
.headerLayout {
  padding-top: 26px;
  margin: 0 auto;
}
.headerLayout, .headerCon {
  width: 1190px;
}
.headerCon {
  zoom: 1;
}
.mallLogo {
  padding-top: 20px;
  width: 350px;
  float: left;
  z-index: 9;
  height: 64px;
  line-height: 64px;
  position: relative;
}
.mallLogo a {
  position: relative;
  display: block;
  color: #fff;
  text-indent: 0!important;
}
.mallLogo .mlogo {
  float: left;
  margin-right: 10px;
  padding: 0;
}
.mallLogo .mlogo a {
  height: 48px;
  font-size: 22px;
  overflow: hidden;
}
.mallLogo s {
  position: absolute;
  display: block;
  top: 0;
  cursor: pointer;
}
.global-sub-nav {
  width: 28px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #ebebeb;
  color: #666;
  float: left;
  padding: 0 18px 0 8px;
  margin: 8px 0 0;
  margin-top: 10px\9;
  position: relative;
}
.global-sub-nav:hover h2 i {
  transition: transform .2s ease-in;
  transform: rotateZ(180deg);
  transform-origin: 50% 30%;
}
.global-sub-nav h2 {
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
}
.global-sub-nav i {
  display: block;
  overflow: hidden;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  border-width: 5px;
  border-style: solid dashed dashed;
  border-color: #999 transparent transparent;
  position: absolute;
  top: 6px;
  right: 6px;
}
.global-nav-list {
  position: absolute;
  left: -1px;
  top: 18px;
  width: 140px;
  padding: 10px 0 0 12px;
  border: 1px solid #ebebeb;
  z-index: 9998;
  background: #fff;
  overflow: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
.global-nav-list, .global-sub-nav:hover {
  box-shadow: 0 2px 2px #eee;
}
.global-nav-list ul {
  width: 160px;
}
.global-nav-list li {
  float: left;
  width: 75px;
  padding-bottom: 8px;
}
.mallLogo .global-nav-list a {
  color: #333;
  font-weight: 400;
}
.mallLogo .global-nav-list a:hover {
  text-decoration: underline !important;
}
.global-kill-line {
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  border-top: 1px solid #fff;
  width: 54px;
  position: absolute;
  top: 18px;
  left: 0;
  z-index: 9999;
}
.header-extra {
  overflow: hidden;
}
.header-banner {
  float: right;
  height: 70px;
  padding: 10px 0 0 100px;
  width: 200px;
}
</style>
