import {defineComponent} from 'vue';
import {Card} from "ant-design-vue";
import {StandardTable} from "@/components/table";

export default defineComponent({
    name: 'Home',
    setup() {

        return ()=>(<Card>
            <StandardTable holder={{page: {current: 0, pageSize: 20}}}>

            </StandardTable>
        </Card>)
    }
});
