import {defineComponent, Ref, ref, unref} from 'vue';
import {Button, Card, Form, message} from "ant-design-vue";
import {StandardTable, createTableHolder, TableColumn, handlerDataSource} from "@/components/table";
import {DivideLine} from "@/components/divide-line";
import {createFormModalHolder, FormModal} from "@/components/form-modal";
import {AccountForm} from './form'
import {getAccountPage, saveAccount} from "@/service/admin/account";
import {Account} from "@/views/admin/account/type";
import {Resp} from "@/utils/type";


type AccountFormHolder = {submit: ()=>void};

export default defineComponent({
    setup() {
        const holder = createTableHolder();
        const formModal = createFormModalHolder();
        const accountForm: Ref<AccountFormHolder> = ref() as Ref<AccountFormHolder>;
        // 提交
        const submit: ((model: Account)=>Resp<unknown>) = saveAccount;

        const handlerOk = ()=> {
            unref(accountForm).submit();
            console.log(unref(accountForm))
        }
        const reload = ()=> {
            handlerDataSource(holder, getAccountPage(holder.page));
        };
        // 处理提交事件
        const handlerSubmit = (account: Account) => {
            submit(account).then(()=> {
                message.success('保存成功');
                reload();
            }).catch(()=> message.error('保存失败'))
        }
        reload();
        return () => (
            <Card>
                <Form layout={"inline"}>
                    <Button onClick={()=>formModal.open('测试')}>
                        新增
                    </Button>
                </Form>
                <DivideLine/>
                <StandardTable holder={holder}>
                    <TableColumn title={"头像"} dataIndex={"avatar"}/>
                    <TableColumn title={"账号"} dataIndex={"account"}/>
                    <TableColumn title={"昵称"} dataIndex={"nickname"}/>
                    <TableColumn title={"邮箱"} dataIndex={"mailbox"}/>
                    <TableColumn title={"QQ"}  dataIndex={"qq"}/>
                    <TableColumn title={"电话"} dataIndex={"phone"}/>
                    <TableColumn title={"操作"}/>
                </StandardTable>
                <FormModal onOk={handlerOk} holder={formModal}>
                    <AccountForm onSubmit={(account)=>handlerSubmit(account)} ref={accountForm} />
                </FormModal>
            </Card>
        )
    }
})
