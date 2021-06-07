<template>
  <div class="SystemLayout">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Options, Vue, ClassComponentHooks} from 'vue-class-component';

@Options({
  components: {},
})
export default class SystemLayout extends Vue implements ClassComponentHooks {
}
</script>
<style lang="less">
.SystemLayout {

}
</style>
