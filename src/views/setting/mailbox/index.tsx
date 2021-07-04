import {defineComponent, Ref, ref, onBeforeMount} from 'vue';
import {Button, Card, message, Table} from "ant-design-vue";
import {Mailbox} from "@/views/setting/mailbox/type";
import {getMailboxList, updateMailbox} from "@/service/setting/mailbox";
import {StdModal, getStdModal} from "@/components/form-modal";
import {Consumer, Func} from "@/models/common";
import MailboxForm from './mailbox-form'

export default defineComponent({
    setup() {
        const dataSource: Ref<Mailbox[]> = ref([]);
        const loading: Ref<boolean> = ref(false);
        const loadDataSource = () => {
            loading.value = true;
            getMailboxList().then(({data}) => {
                dataSource.value = data;
            }).finally(() => loading.value = false);
        };
        const onEdit: Consumer<Mailbox> = (row) => {
            getStdModal().open('编辑邮箱配置', <MailboxForm model={row}/>, (data: unknown) => {
                return updateMailbox(data as Mailbox).then(() => {
                    loadDataSource();
                    message.success('更新成功');
                });
            });
        }

        // 调用执行
        onBeforeMount(loadDataSource);

        return {dataSource, loading, onEdit};
    },
    render() {
        const {dataSource, loading, onEdit} = this;
        return <Card>
            <Table dataSource={dataSource} rowKey={"id"} loading={loading}>
                <Table.Column title={"编码"} dataIndex={"code"}/>
                <Table.Column title={"名称"} dataIndex={"name"}/>
                <Table.Column title={"账号"} dataIndex={"account"}/>
                <Table.Column title={"Host"} dataIndex={"mailHost"}/>
                <Table.Column title={"端口"} dataIndex={"mailPort"}/>
                <Table.Column title={"协议"} dataIndex={"mailProtocol"}/>
                <Table.Column title={"说明"} dataIndex={"desc"}/>
                <Table.Column title={"操作"} dataIndex={"id"} customRender={({record}) => {
                    return <>
                        <Button size={"small"} onClick={()=>onEdit(record)}>编辑</Button>
                    </>
                }}/>
            </Table>
            <StdModal width={800} />
        </Card>
    }
});
