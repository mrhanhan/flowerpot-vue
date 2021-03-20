<template>
  <ConfigProvider :locale="locale">
    <AButton>{{'Hello World'}}</AButton>
  </ConfigProvider>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {ConfigProvider, Button as AButton} from 'ant-design-vue'
import {mapState} from "vuex";
import {ConfigStateType} from "@/store/types";
@Options({
  components: {ConfigProvider, AButton},
  computed: {
    ... mapState('config', ['locale'])
  }
})
export default class App extends Vue {
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
