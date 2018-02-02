import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Vhome from '@/components/index/Vhome'
import Vdiscover from '@/components/discover/Vdiscover'
import Vorder from '@/components/order/Vorder'
import Vuser from '@/components/user/Vuser'
import Vshop from '@/components/shop/Vshop'
import Vfoods from '@/components/shop/Vfoods'
import VshopDetail from '@/components/shop/VshopDetail'
import Vevaluate from '@/components/shop/Vevaluate'
import Vsignin from '@/components/user/Vsignin'
import Vlogin from '@/components/user/Vlogin'
import Vregister from '@/components/user/Vregister'
import Vwrap from '@/components/Vwrap'
import Verror from '@/components/error/Verror'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Vwrap',
      component: Vwrap,
      children:[
        {
          path:'',
          redirect:'/home' 
        },
        {
          path:'/home',
          component:Vhome
        },
        {
          path:'/discover',
          name:'Vdiscover',
          component:Vdiscover
        },
        {
          path:'/order',
          name:'Vorder',
          component:Vorder
        },
        {
          path:'/user',
          name:'Vuser',
          component:Vuser
        }
      ]
    },
    {
      path:'/shop',
      name:'shop',
      component:Vshop,
      children:[
        {
          path:'/shop/:shopId(\\d+)',
          component:Vfoods
        },
        {
          path:'/evaluate/:shopId(\\d+)',
          component:Vevaluate
        },
        {
          path:'/shopDetail/:shopId(\\d+)',
          component:VshopDetail
        }
      ]
    },
    {
      path:'/login',
      component:Vsignin,
      children:[
        {
          path:'/login',
          component:Vlogin
        },
        {
          path:'/register',
          component:Vregister
        }
      ]
    },
    {
      path:'*',
      component:Verror
    }
  ]
})
