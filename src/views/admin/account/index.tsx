import {defineComponent} from 'vue';
import {Button, Card, Form} from "ant-design-vue";
import {StandardTable, createTableHolder, TableColumn} from "@/components/table";
import {DivideLine} from "@/components/divide-line";


export default defineComponent({
    setup() {

        const holder = createTableHolder();

        return () => (
            <Card>
                <Form layout={"inline"}>
                    <Button>
                        新增
                    </Button>
                </Form>
                <DivideLine/>
                <StandardTable holder={holder}>
                    <TableColumn title={"账号"}/>
                    <TableColumn title={"昵称"}/>
                </StandardTable>
            </Card>
        )
    }
})
