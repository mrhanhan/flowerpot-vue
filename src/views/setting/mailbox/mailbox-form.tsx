import {defineComponent, Component} from 'vue';
import {Form, Input} from "ant-design-vue";
import {Supplier} from "@/models/common";


const MailboxForm = defineComponent({
    setup() {
        console.log(this);
        const onSubmit: Supplier<Promise<any>> = () => {
            console.log('submit', this);
            return new Promise((resolve) => {
                resolve('子组件');
            });
        };
        return {onSubmit};
    },
    render() {
        return <div>
            <Form>
                <Form.Item label={"邮箱名称"}>

                </Form.Item>
            </Form>
        </div>
    }
});

export default MailboxForm;
