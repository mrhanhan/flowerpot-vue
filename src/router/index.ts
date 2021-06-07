import {createRouter,  createWebHistory} from 'vue-router'

import {parseRoutes} from "@/router/utils";
import {viewMap} from "@/router/view-map";
import {adminRoutes} from "@/router/config";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/admin'
    },
    ...parseRoutes(adminRoutes, viewMap)
  ]
});
console.log(parseRoutes(adminRoutes, viewMap));


export default router
