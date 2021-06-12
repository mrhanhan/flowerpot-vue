import {defineComponent, Ref, ref, onBeforeMount, onMounted} from 'vue';
import {Button, Card, Table} from "ant-design-vue";
import {Mailbox} from "@/views/setting/mailbox/type";
import {getMailboxList} from "@/service/setting/mailbox";
import {StdModal, getStdModal} from "@/components/form-modal";
import {Consumer, NoticeCallback, Supplier} from "@/models/common";

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
        const onOk: Supplier<Promise<any>> = () => {
            console.log(1);
            return new Promise((resolve) => {setTimeout(resolve, 3000)});
        }
        const onEdit: Consumer<Mailbox> = (row) => {
            console.log(row)
        }

        // 调用执行
        onBeforeMount(loadDataSource);
        onMounted(() =>{
            console.log(getStdModal());
        })

        return {dataSource, loading, onOk, onEdit};
    },
    render() {
        const {dataSource, loading, onOk, onEdit} = this;
        return <Card>
            <Table dataSource={dataSource} rowKey={"id"} loading={loading}>
                <Table.Column title={"编码"} dataIndex={"code"}/>
                <Table.Column title={"名称"} dataIndex={"name"}/>
                <Table.Column title={"账号"} dataIndex={"account"}/>
                <Table.Column title={"Host"} dataIndex={"mailHost"}/>
                <Table.Column title={"端口"} dataIndex={"mailPort"}/>
                <Table.Column title={"协议"} dataIndex={"Protocol"}/>
                <Table.Column title={"说明"} dataIndex={"desc"}/>
                <Table.Column title={"操作"} dataIndex={"id"} customRender={({record}) => {
                    return <>
                        <Button size={"small"} onClick={()=>onEdit(record)}>编辑</Button>
                    </>
                }}/>
            </Table>
            <StdModal onOk={onOk}/>
        </Card>
    }
});
