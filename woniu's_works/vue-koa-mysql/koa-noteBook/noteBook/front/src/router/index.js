import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/login/StarLogin'
import StarRegister from '@/components/register/StarRegister'
import NoteClass from '@/components/noteClass/noteClass'
import NoteList from '@/components/noteList/noteList'
import NoteDetail from '@/components/noteDetail/noteDetail'
import Person from '@/components/person/person'
import PublishNote from '@/components/publishNote/publishNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: StarLogin,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/StarRegister',
      name: 'StarRegister',
      component: StarRegister,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/NoteClass',
      name: 'NoteClass',
      component: NoteClass,
      meta: {
        title: '笔记分类'
      }
    },
    {
      path: '/NoteList',
      name: 'NoteList',
      component: NoteList,
      meta: {
        title: '笔记列表'
      }
    },
    {
      path: '/NoteDetail',
      name: 'NoteDetail',
      component: NoteDetail,
      meta: {
        title: '笔记详情'
      }
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person,
      meta: {
        title: '作者详情'
      }
    },
    {
      path: '/PublishNote',
      name: 'PublishNote',
      component: PublishNote,
      meta: {
        title: '发布笔记'
      }
    }
  ]
})
