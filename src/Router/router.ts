import { createWebHistory, createRouter, RouteRecordRaw  } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name:"Home",
        component: function (){
            return import('../pages/home.vue')
        }
    }
]
const router = createRouter({history:createWebHistory(),routes})

export default router