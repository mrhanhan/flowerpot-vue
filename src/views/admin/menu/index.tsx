import {defineComponent} from 'vue'
import {Button, Card, Form, Table} from "ant-design-vue";

export default defineComponent({
    setup() {

        return ()=>(
            <Card>
                <Form layout={"inline"}>
                    <Form.Item>
                        <Button type={"primary"}>新增</Button>
                    </Form.Item>
                </Form>
                <Table class={"search-table"}>
                </Table>
            </Card>
        );
    }
});
