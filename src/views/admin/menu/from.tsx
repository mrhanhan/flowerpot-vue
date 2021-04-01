import {defineComponent, DefineComponent} from 'vue'
import {Checkbox, Form} from "ant-design-vue";


export default defineComponent({
   name: 'MenuForm',
    setup() {

        return () => (
            <Form layout={"horizontal"} labelCol={{span: 2}} wrapperCol={{span: 22}}>
                <Form.Item label="类型">
                    <Checkbox.Group>
                        <Checkbox value={0}></Checkbox>
                    </Checkbox.Group>
                </Form.Item>
            </Form>
        );
    }
});
