import {defineComponent, onBeforeMount, ref, Ref} from "vue";
import {Button, Card, Form, Input, message, Modal, Tag} from "ant-design-vue";
import {createTableHolder, StandardTable, TableColumn} from "@/components/table";
import {TableHolder} from "@/components/table/type";
import {getStdModal, StdModal} from "@/components/form-modal";
import AuthForm from './auth-form.vue'
import {AuthResource} from "@/views/authority/auth/type";
import {getAuthResourcePage, saveAuthResource, updateAuthResource} from "@/service/authorize/auth-resource";
import {AuthResourceGroup} from "@/views/authority/auth-group/type";
import {getChooseResourceGroup} from "@/service/authorize/common";
import {AuthResourceSystem, AuthTypeDict} from "@/views/authority/auth/data";

export default defineComponent({
    setup() {
        const holder: TableHolder = createTableHolder();
        const authResourceGroupArray: Ref<AuthResourceGroup[]> = ref([]);

        const onRefresh = () => {
            holder.loading = true;
            const callback = () => {
                getAuthResourcePage({pageSize: holder.page.pageSize, current: holder.page.current }).then(({data: {list}}) => {
                    const map:Record<string, string> = {};
                    authResourceGroupArray.value.forEach( t=> map[t.id || ''] = t.name || '-');
                    holder.dataSource = list.map( t => ({...t, groupName: map[t.groupId || '']}));
                }).finally(() => holder.loading = false);
            };

            getChooseResourceGroup().then(({data}) => {
                authResourceGroupArray.value = data;
                callback();
            });

        };

        const onCreate = () => {
            getStdModal().open('新增授权资源', <AuthForm/>, (data: unknown) => {
                return saveAuthResource(data as AuthResource).then(() => {
                    message.success('保存成功');
                    onRefresh();
                }).catch((reason) => {
                    message.error('保存失败 ' + reason);
                    return Promise.reject(reason);
                });
            });
        };

        const onEdit = (row: AuthResource) => {
            getStdModal().open('编辑授权资源', <AuthForm model={row}/>, (data: unknown) => {
                return updateAuthResource({...data as AuthResource, id: row.id}).then(() => {
                    message.success('保存成功');
                    onRefresh();
                }).catch((reason) => {
                    message.error('保存失败 ' + reason);
                    return Promise.reject(reason);
                });
            });
        };

        const onDelete = (row: AuthResource) => {
            Modal.confirm({
                title: '系统提示',
                content: `是否删除此授权资源【${row.name}】`,
                onOk: () => {
                    console.log('删除');
                }
            });
        };
        const onInfo = (row: AuthResource) => {
            getStdModal().open('资源类型', <AuthForm model={row} editable={false}/>);
        };


        onBeforeMount(() => onRefresh());

        return {onCreate, holder, onRefresh, onEdit, onDelete, onInfo};
    },
    render() {
        const {onCreate, onRefresh, holder, onEdit, onDelete, onInfo} = this;
        return <Card>
            <Form layout="inline">
                <Form.Item>
                    <Button onClick={onCreate}>新增</Button>
                </Form.Item>
                <Form.Item label="查询">
                    <Input placeholder="搜索关键字" value={holder.searchWord}
                           onInput={({currentTarget: {value}}) => holder.searchWord = value}/>
                </Form.Item>
                <Form.Item>
                    <Button loading={holder.loading} onClick={() => onRefresh()}>搜索</Button>
                </Form.Item>
            </Form>
            <StandardTable holder={holder}>
                <TableColumn title="分组" dataIndex={'groupName'}/>
                <TableColumn title="名称" dataIndex={"name"}/>
                <TableColumn title="编码" dataIndex={"code"}/>
                <TableColumn title="系统" dataIndex={"system"} customRender={({text}) => {
                    return <Tag>{AuthResourceSystem[text]}</Tag>
                }}/>
                <TableColumn title="类型" dataIndex={"type"} customRender={({text}) => {
                    return <Tag>{AuthTypeDict[text]}</Tag>
                }}/>
                <TableColumn title="数据" dataIndex={"raw"}/>
                <TableColumn title="描述" dataIndex={"desc"}/>
                <TableColumn title="操作" width={200} customRender={({record}) => {
                    return record.system === 1 ? <><Button size={"small"} onClick={() => onInfo(record)}>查看</Button></> : <Button.Group  size={"small"}>
                        <Button onClick={() => onEdit(record)}>编辑</Button>
                        <Button onClick={() => onDelete(record)}>删除</Button>
                        <Button onClick={() => onInfo(record)}>查看</Button>
                    </Button.Group>
                }}/>
            </StandardTable>
            <StdModal width={800}/>
        </Card>;
    }
});
