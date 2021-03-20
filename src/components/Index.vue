<template>
  <div class="Index">
    {{loggedIn ? '登录' : '快去登录'}}
  </div>
</template>

<script lang="ts">
import {Options, Vue, ClassComponentHooks} from 'vue-class-component';
import {createNamespacedHelpers} from "vuex";

const {mapState} = createNamespacedHelpers('login');

@Options({
  computed: {
    ...mapState(['loggedIn'])
  }
})
export default class Index extends Vue implements ClassComponentHooks {

}
</script>
<style lang="less">
.Index {

}
</style>
