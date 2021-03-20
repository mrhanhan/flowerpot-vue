<template>
  <ConfigProvider :locale="locale">
    <AButton @click="doLogin(!loggedIn)">{{'Hello World'}}, 是否登录: {{loggedIn ? '登录' : '未登录'}}</AButton>
    <Index></Index>
  </ConfigProvider>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {ConfigProvider, Button as AButton} from 'ant-design-vue'
import {mapState, createNamespacedHelpers} from "vuex";
import {useStore} from "@/store";
import Index from "@/components/Index.vue";
const login = createNamespacedHelpers('login');

@Options({
  components: {ConfigProvider, AButton, Index},
  computed: {
    ... mapState('config', ['locale']),
    ... login.mapState(['loggedIn']),
  },
  methods: {
    ...login.mapActions(['doLogin'])
  }
})
export default class App extends Vue {

  created() {
    console.log(useStore())
  }
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
