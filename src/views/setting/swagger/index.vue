<template>
  <div class="swagger" style="width:100%; min-height: 100%">
    <iframe :style="{width: '100%', 'minHeight': `${height}px`}" frameborder="0" :src="SWAGGER_API"></iframe>
  </div>
</template>
<script lang="ts">

import {SWAGGER_API} from "@/utils/API";
import {defineComponent} from "vue";

export default  defineComponent({
  setup(){
    return {SWAGGER_API, height: window.document.body.clientHeight - 138};
  }
});
</script>
