<template>
  <v-scroll ref="suggest" class="suggest" :data='result' :pullup='pullup' :beforeScroll='beforeScroll' @scrollToEnd='searchMore' @beforeScroll='listScroll'>
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item, index) in result" :key="index" @click="selectItem(item)">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length || !hasMore">
      <span>抱歉，暂无搜索结果</span>
    </div>
  </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'
import api from '@/api'
const limit = 20
export default {
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      result: [],
      hasMore: true,
      pullup: true,
      beforeScroll: true,
      page: 1
    }
  },
  components: {
    'v-scroll': scroll
  },
  methods: {
    refresh () {
      this.$refs.suggest.refresh()
    },
    fetchResult (page) {
      const params = {
        limit,
        offset: page - 1,
        keywords: this.query
      }
      api.MusicSearch(params).then(res => {
        if (res.code === 200) {
          this.result = [...this.result, ...res.result.songs]
          this._checkMore(res.result)
        }
      })
    },
    search () {
      this.page = 1
      this.hasMore = true
      this.$refs.suggest.scrollTo(0, 0)
      this.result = []
      this.fetchResult(this.page)
    },
    searchMore () {},
    listScroll () {
      this.$emit('listScroll')
    },
    selectItem (item) {
      this.$emit('select', item)
    },
    getDisplayName (item) {
      return `${item.name}-${item.artists[0] && item.artists[0].name}`
    },
    _checkMore (data) {
      if (data.songs.leng < 12 || ((this.page - 1) * limit) >= data.songs.count) {
        this.hasMore = false
      }
    }
  },
  watch: {
    query (newQuery) {
      if (!newQuery) {
        return
      }
      this.search(newQuery)
    }
  },
}
</script>

<style scoped lang="stylus">
@import "../assets/css/function.styl"
.suggest
  height 100%
  overflow hidden
  .suggest-list
    padding 0 px2rem(60px)
    .suggest-item
      display flex
      align-items center
      line-height px2rem(80px)
    .icon
      flex 0 0 px2rem(60px)
      width px2rem(60px)
      font-size 14px
      color hsla(0,0%,100%,.3)
    .name
      flex 1
      font-size 14px
      color hsla(0,0%,100%,.3)
      overflow hidden
      .text
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
    .loading-wraper
      height px2rem(80px)
  .no-result-wrapper
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
    span
      font-size 14px
      color hsla(0,0%,100%,.3)
</style>
