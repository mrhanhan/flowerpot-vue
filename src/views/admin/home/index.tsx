import {defineComponent} from 'vue';
import {Card} from "ant-design-vue";

export default defineComponent({
    name: 'Home',
    setup() {
        const array = Array(10).fill(10);
        return ()=>(<Card>
            Admin
            {
                array.map(t => <div v-permission={t}>{t}</div>)
            }
        </Card>)
    }
});
