<template>
<!-- 后台Layout -->
  <div class="AdminLayout Layout">
    <Layout></Layout>
  </div>
</template>

<script lang="ts">
import {Options, Vue, ClassComponentHooks} from 'vue-class-component';
import Layout from '@/components/layout'
@Options({
  components: {Layout},
})
export default class AdminLayout extends Vue implements ClassComponentHooks {
}
</script>
<style lang="less">
.AdminLayout {
  height: 100%;
}
</style>
