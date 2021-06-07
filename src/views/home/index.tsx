import {defineComponent} from 'vue';
import {Card} from "ant-design-vue";



export default defineComponent({

   render() {
       return <div>
           <Card title={"首页"}>
               Hello World
           </Card>
       </div>
   }
});
