<template>
  <!-- 后台Layout -->
  <div class="AdminLayout Layout">
    <Layout :menus="menus" @menu="setBreadcrumb">
      <template #header>

      </template>
      <template #default>
        <div style="padding: 15px;">
          <div style="margin-bottom: 8px">
            <Breadcrumb>
              <BreadcrumbItem v-for="(it,index) in breadcrumbNames" :key="index">{{ it }}</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <router-view></router-view>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import {Options, Vue, ClassComponentHooks} from 'vue-class-component';
import {Breadcrumb} from 'ant-design-vue'
import Layout from '@/components/layout'
import {RouteConfig} from "@/router/types";
import {adminRoutes} from "@/router/config";

@Options({
  components: {Layout, Breadcrumb, BreadcrumbItem: Breadcrumb.Item},
})
export default class AdminLayout extends Vue implements ClassComponentHooks {
  menus: Array<RouteConfig> = adminRoutes;

  breadcrumbNames: Array<string> = [];

  created(): void {
    this.setBreadcrumb();
  }

  setBreadcrumb(): void{
    this.breadcrumbNames.splice(0, this.breadcrumbNames.length);
    let currentRoute = this.$route;
    console.log(currentRoute.matched);
    for (let route of currentRoute.matched) {
      if (route.meta.data) {
        let data = route.meta.data as RouteConfig;
        if (data.title) {
          this.breadcrumbNames.push(data.title);
        }
      }
    }
  }
}
</script>
<style lang="less">
.AdminLayout {
  height: 100%;
}
</style>
