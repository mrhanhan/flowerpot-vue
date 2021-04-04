import {defineComponent} from 'vue';
import {Button, Card, Form} from "ant-design-vue";
import {StandardTable, createTableHolder, TableColumn} from "@/components/table";
import {DivideLine} from "@/components/divide-line";
import {createFormModalHolder, FormModal} from "@/components/form-modal";
import AccountForm from './form'


export default defineComponent({
    setup() {
        const holder = createTableHolder();
        const formModal = createFormModalHolder();
        return () => (
            <Card>
                <Form layout={"inline"}>
                    <Button onClick={()=>formModal.open('测试', <AccountForm />)}>
                        新增
                    </Button>
                </Form>
                <DivideLine/>
                <StandardTable holder={holder}>
                    <TableColumn title={"头像"}/>
                    <TableColumn title={"账号"}/>
                    <TableColumn title={"昵称"}/>
                    <TableColumn title={"邮箱"}/>
                    <TableColumn title={"QQ"}/>
                    <TableColumn title={"电话"}/>
                    <TableColumn title={"操作"}/>
                </StandardTable>
                <FormModal holder={formModal}/>
            </Card>
        )
    }
})
