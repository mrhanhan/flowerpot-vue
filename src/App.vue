<template>
  <ConfigProvider :locale="locale">
    <router-view></router-view>
  </ConfigProvider>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {ConfigProvider} from 'ant-design-vue'
import {mapState, createNamespacedHelpers} from "vuex";
const login = createNamespacedHelpers('login');

@Options({
  components: {ConfigProvider},
  computed: {
    ... mapState('config', ['locale']),
    ... login.mapState(['loggedIn']),
  },
  methods: {
    ...login.mapActions(['doLogin'])
  }
})
export default class App extends Vue {
}
</script>

<style lang="less">
#app, html, body {
  padding: 0;
  margin: 0;
  min-width: 100%;
  height: 100%;
}
</style>
