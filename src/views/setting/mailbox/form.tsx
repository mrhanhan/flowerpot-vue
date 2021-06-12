import {defineComponent, PropType} from 'vue';
import {Mailbox} from "@/views/setting/mailbox/type";


export default defineComponent({
    props: {
       model: Object as  PropType<Mailbox>
    },
    setup() {
        return {};
    },
    render() {
        const {model} = this;

        return <>
            <div>
                Hello World
            </div>
        </>
    }
});
