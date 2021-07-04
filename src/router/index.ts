import {createRouter,  createWebHistory} from 'vue-router'

import {parseRoutes} from "@/router/utils";
import {viewMap} from "@/router/view-map";
import {adminRoutes} from "@/router/config";

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: to => {
        console.log(to)
        return '/home'
      }
    },
    ...parseRoutes(adminRoutes, viewMap)
  ]
});

export default router
