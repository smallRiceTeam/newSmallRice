/*
 * @Author: your name
 * @Date: 2019-11-26 13:32:06
 * @LastEditTime: 2019-12-04 15:53:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newxmsc\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Wstart from '../pages/Wstart'
import Wmine from '../pages/Wmine'
import wreove from '../components/Wstar/wreove'
import wshipin from '../components/Wstar/wshipin'
import wlogin from '../components/Wmine/wlogin'
import wregister from '../components/Wmine/wregister'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Wstart',
    //   component: Wstart
    // },
    {
      path: '/Wstart',
      name: 'Wstart',
      component: Wstart,
      children:[
        {
          path: '',
          redirect: 'wreove' //重定向
        },
        {
          path:'wreove',
          component:wreove
        },
        {
          path:'wshipin',
          component:wshipin
        },
      ]
    },
    {
      path: '/wlogin',
      component: wlogin
    },
    {
      path: '/',
      component: Wmine
    },
    {
      path: '/Wmine',
      component: Wmine,
      beforeEnter(to,from,next){
        if(!localStorage.getItem('name')){
            next('/wlogin')
        }
        next();
      }
    },
    {
      path: '/wregister',
      component: wregister
    },
  ]
})
