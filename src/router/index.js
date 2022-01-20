import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Backlog from '../views/Backlog.vue'
import RoadMap from '../views/RoadMap.vue'
import Board from '../views/Board.vue'
import Repositories from '../views/Repositories.vue'
import Chat from '../views/Chat.vue'
import Setting from '../views/Setting.vue'

import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/backlog',
    name: 'Backlog',
    component: Backlog
  },
  {
    path: '/roadmap',
    name: 'RoadMap',
    component: RoadMap
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: Repositories
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '*',
    component: NotFound 
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
