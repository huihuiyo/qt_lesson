<template>
  <div class="outer" ref="ratingsPart">
    <div class="ratings">
      <div class="rating-header">
        <div class="header-left">
          <p class="totalRating">{{seller.score}}</p>
          <p class="title">综合评分</p>
          <p class="rankRate">高于周边商家{{seller.rankRate}}%</p>
        </div>
        <div class="header-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <div class="star star-36">
              <span class="star-item off"></span>
              <span class="star-item off"></span>
              <span class="star-item off"></span>
              <span class="star-item off"></span>
              <span class="star-item off"></span>
            </div>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div class="star star-36">
              <span class="star-item off"></span>
              <span class="star-item off"></span>
              <span class="star-item off"></span>
              <span class="star-item off"></span>
              <span class="star-item off"></span>
            </div>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive" :class="{'active': activeOp === 2}" @click="allCommClick">
            全部<span class="count">{{comments.length}}</span>
          </span>
          <span class="block positive" :class="{'active': activeOp === 0}" @click="filterClick(0)">
            满意<span class="count">{{goodComms}}</span>
          </span>
          <span class="block negative" :class="{'active': activeOp === 1}" @click="filterClick(1)">
            不满意<span class="count">{{badComms}}</span>
          </span>
        </div>
        <div class="switch" :class="{'on': option}" @click="hasContentComm">
          <span class="icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item"
            v-for="(comment, index) in displayComments"
            :key="index"
          >
            <div class="avatar">
              <img :src="comment.avatar" alt="" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">{{comment.username}}</h1>
              <div class="star-wrapper">
                <div class="star star-24">
                  <span class="star-item off"></span>
                  <span class="star-item off"></span>
                  <span class="star-item off"></span>
                  <span class="star-item off"></span>
                  <span class="star-item off"></span>
                </div>
                <span class="delivery">{{comment.deliveryTime}}</span>
              </div>
              <p class="text">{{comment.text}}</p>
              <div class="recommend">
                <span class="icon-thumb_up"></span>
                <span
                  class="item"
                  v-for="(recommend, index) in comment.recommend"
                  :key="index"
                >
                  {{recommend}}
                </span>
              </div>
              <div class="time">!!!</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      comments: [],
      displayComm: [],
      option: true,
      activeOp: 2
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json').then(res => {
      if (res.data.errno === 0) {
        this.comments = res.data.data
        this.displayComm = this.comments
        this.$nextTick(() => {
          this.initScroll()
        })
      }
    })
  },
  methods: {
    initScroll () {
      this.commScroll = new BScroll(this.$refs.ratingsPart, {
        click: true
      })
    },
    filterClick (condition) {
      this.activeOp = condition
      let retArr = []
      for (let comment of this.comments) {
        if (condition === comment.rateType) {
          retArr.push(comment)
        }
      }
      this.displayComm = this.judgeSelect(retArr)
    },
    allCommClick () {
      let retArr = this.comments
      this.displayComm = this.judgeSelect(retArr)
      this.activeOp = 2
    },
    judgeSelect (retArr) {
      let tempArr = []
      if (this.option) {
        for (const item of retArr) {
          if (item.text && item.text !== '') {
            tempArr.push(item)
          }
        }
        return tempArr
      } else {
        return retArr
      }
    },
    hasContentComm () {
      let retArr = []
      for (let comment of this.displayComm) {
        if (comment.text && comment.text !== '') {
          retArr.push(comment)
        }
      }
      this.option = !this.option
      if (this.option) {
        this.displayComm = retArr
      } else {
        this.displayComm = this.comments
      }
    },
    commCount (condition) {
      let count = 0
      for (const comm of this.comments) {
        if (condition === comm.rateType) {
          count++
        }
      }
      return count
    }
  },
  computed: {
    displayComments () {
      return this.displayComm
    },
    goodComms () {
      return this.commCount(0)
    },
    badComms () {
      return this.commCount(1)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin';
.outer
  position fixed
  overflow hidden
  top 174px
  width 100%
  bottom 0
  .ratings
    position absolute
    top 174px
    width 100%
    .rating-header
      padding 18px 0
      display flex
      .header-left
        text-align center
        flex 0 0 137px
        padding 6px 0
        width 137px
        border-right 1px solid rgba(7,17,27,0.1)
        .totalRating
          line-height 28px
          margin-bottom 6px
          color #f90
          font-size 24px
        .title
          margin-bottom 8px
          line-height 12px
          font-size 12px
          color #07111b
        .rankRate
          line-height 10px
          font-size 10px
          color #93999f
      .header-right
        padding 6px 0 6px 24px
        flex 1
        .score-wrapper
          margin-bottom 8px
          font-size 0
          .title
            display inline-block
            line-height 18px
            vertical-align top
            font-size 12px
            color #07111b
          .star
            display inline-block
            margin 0 12px
            vertical-align top
            .star-item
              width 15px
              height 15px
              margin-right 6px
              background-size 15px 15px
              .on
                background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNkRGNzA2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNkRGNzE2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NEY2REY2RTZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NEY2REY2RjZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpQH5+oAAAHMSURBVHjaxJe/TgJBEMY5pVBrQAspiVpoAY2CxEJ7CxJDZbkJBVpowxvYQGJiI6WNIYRXIDERHsCOQKGxIIJUFKhB1283gyHk0Lu5O5zkxy7772N2Z+cOQ177uLanP4W840z2+/h2QiVLeI4pGgaHmqIRnqVwBswTGc4CBuOMF8AzCND3V70DQr557XF6TNRH9fQstjprsc1V4TiImrRHEWRxL4WzzD5HwhGQ+qU/Ba8jdqJ6G2UILIMg1UNUH7UF6epYsU/QJV6o7BCjto6fksENXRM3TP3AFWLTpF9du2O11WVwAHo+762ntYQsj864BnZAy0PRltYQsjYZXE26LnUPROt6bSGb06K6S9tecVG0Qtvb/es6DcARyLsgmtdrCTmw+jz+AufgEVwyEo2afwrBK24CKYIPhqfvNJeduaLM+704JadbFk46ON9dJ8IJB8KJ/xJme7w+8aYxbg90DEmqm1kAT6s1jrCZt31wBmLgnohRW9+O13M2tqoElAcFMPxpFXIICtRXsnpUVjxugH16oWtPHS1kG6RpbIPrsXoBWAU5sAWqlkNKyCrNyek1ikbIzl8YlQA2wBMrnoVU2e4Corcol8yGfAswAGyVaSErvYjsAAAAAElFTkSuQmCC')
              .off
                background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFW…MrcDhO6gqgzXWobhqBpIK0mMoPwIfMdObuv+HuFzr+BBgA06Z0wbQa03AAAAAASUVORK5CYII=")
          .score
            display inline-block
            line-height 18px
            vertical-align top
            font-size 12px
            color #f90
        .delivery-wrapper
          font-size 0
          .title
            line-height 18px
            font-size 12px
            color #07111b
          .delivery
            margin-left 12px
            font-size 12px
            color #93999f
    .split
      width 100%
      height 16px
      border-top 1px solid rgba(7,17,27,.1)
      border-bottom 1px solid rgba(7,17,27,.1)
      background #f3f5f7
    .ratingselect
      .rating-type
        padding 18px 0
        margin 0 18px
        position relative
        font-size 0
        &::after
          display block
          position absolute
          left 0
          bottom 0
          width 100%
          border-top 1px solid rgba(7,17,27,.1)
          content: " "
        .block
          display inline-block
          padding 8px 12px
          margin-right 8px
          line-height 16px
          border-radius 1px
          font-size 12px
          color #4d555d
          .count
            margin-left 2px
            font-size 8px
        .block.active
          color #fff
        .block.positive
          background rgba(0,160,220,.2)
        .block.negative
          background rgba(77,85,93,.2)
        .block.positive.active
          background #00a0dc
        .block.negative.active
          background #4d555d
      .switch
        padding 12px 18px
        line-height 24px
        border-bottom 1px solid rgba(7,17,27,0.1)
        color #93999f
        font-size 0
        .icon-check_circle
          display inline-block
          vertical-align top
          margin-right 4px
          font-size 24px
        .text
          display inline-block
          vertical-align top
          font-size 12px
      .switch.on
        .icon-check_circle
          color #00c850
    .rating-wrapper
      padding 0 18px
      .rating-item
        display flex
        padding 18px 0
        position relative
        &::after
          display block
          position absolute
          left 0
          bottom 0
          width 100%
          border-top 1px solid rgba(7,17,27,.1)
          content " "
        .avatar
          flex 0 0 28px
          width 28px
          margin-right 12px
          img
            border-radius 50%
        .content
          position relative
          flex 1
          .name
            margin-bottom 4px
            line-height 12px
            font-size 10px
            color #07111b
          .star-wrapper
            margin-bottom 6px
            font-size 0
            .star
              display inline-block
              margin-right 6px
              vertical-align top
              .star-item
                display inline-block
                background-repeat no-repeat
            .star.star-24
              .star-item.on
                background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAGXRFW…aByn0ixoVSQHwQiNWBeCo00aODv1A5NSA+BMzL0siSAAEGAFbSPvm9m4DCAAAAAElFTkSuQmCC')
            .star.star-24
              .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
            .delivery
              display inline-block
              vertical-align top
              line-height 12px
              font-size 10px
              color #93999f
          .text
            margin-bottom 8px
            line-height 18px
            color #07111b
            font-size 12px
          .recommend
            line-height 16px
            font-size 0
            .icon-thumb_up
              color #00a0dc
            .item
              padding 0 6px
              border 1px solid rgba(7,17,27,.1)
              border-radius 1px
              color #93999f
              background: #fff
            .icon-thumb_up,
            .item
              display inline-block
              margin 0 8px 4px 0
              font-size 9px
          .time
            position absolute
            top 0
            right 0
            line-height 12px
            font-size 10px
            color #93999f
</style>
