import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Classify from '@/components/classify/Classify'
import My from '@/components/my/My'
import Handpick from '@/components/home/nav/handpick/Handpick'
import Favorable from '@/components/home/nav/favorable/Favorable'
import Discover from '@/components/home/nav/discover/Discover'
import OlineShopping from '@/components/home/nav/olineShopping/OlineShopping'
import Original from '@/components/home/nav/original/Original'


Vue.use(Router)

export default new Router({

  routes: [
      {
        path:'/',
        redirect:'/home'
      },{
        path:'/home',
        component:Home,
        name:'首页',
        children:[
          {
            path:'/home',
            redirect:'Handpick'
          }
          ,{
            path:'Handpick',
            component:Handpick,
            name:'精选'
          },{
            path:'Favorable',
            component:Favorable,
            name:'优惠'
          },{
            path:'Discover',
            component:Discover,
            name:'发现'
          },{
            path:'OlineShopping',
            component:OlineShopping,
            name:'海淘'
          },{
            path:'Original',
            component:Original,
            name:'原创'
          }
        ]
      },{
        path:'/Classify',
        component:Classify,
        name:'分类'
      },{
        path:'/My',
        component:My,
        name:'我的'
      }
  ]
})
