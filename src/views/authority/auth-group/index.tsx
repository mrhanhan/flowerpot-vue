import {createTableHolder, StandardTable, TableColumn} from "@/components/table";
import {TableHolder} from "@/components/table/type";
import {Card, Button, Input, Form, message, Tag, Modal} from 'ant-design-vue';
import {defineComponent, onMounted} from 'vue';
import {
    getAuthResourceGroupPage,
    deleteAuthResourceGroup,
    saveAuthResourceGroup,
    updateAuthResourceGroup
} from "@/service/authorize/auth-resource-group";
import {getStdModal, StdModal} from "@/components/form-modal";
import AuthGroupForm from './auth-group-form.vue';
import {AuthResourceGroup} from "@/views/authority/auth-group/type";
import {AuthResourceGroupSystem} from './data';

export default defineComponent({
    setup() {
        const holder: TableHolder = createTableHolder();
        const onCreate = () => {
            getStdModal().open('新增分组', <AuthGroupForm/>, (data: unknown) => {
                return saveAuthResourceGroup(data as AuthResourceGroup).then(() => {
                    message.success('保存成功');
                    refresh();
                }).catch((reason) => {
                    message.warning('保存失败,' + reason);
                    throw reason;
                });
            });
        };

        const onEdit = (row: AuthResourceGroup) => {
            getStdModal().open('编辑分组', <AuthGroupForm model={row}/>, (data: unknown) => {
                return updateAuthResourceGroup({...(data  as AuthResourceGroup), id: row.id}).then(() => {
                    message.success('保存成功');
                    refresh();
                }).catch((reason) => {
                    message.warning('保存失败,' + reason);
                    throw reason;
                });
            });
        };

        const onInfo = (row: AuthResourceGroup) => {
                getStdModal().open('分组信息', <AuthGroupForm model={row} editable={false}/>);
        };

        const onDelete = (row: AuthResourceGroup) => {
            Modal.confirm({
                title: '系统提示',
                content: `是否删除此授权资源组【${row.name}】`,
                onOk: () => {
                    deleteAuthResourceGroup(row.id).then(() => {
                        message.success('删除成功');
                        refresh();
                    }).catch(() => {
                        message.error('删除失败');
                    });
                }
            });
        };

        const refresh = () => {
            const {page: {current, pageSize}, searchWord} = holder;
            holder.loading = true;
            getAuthResourceGroupPage({current, pageSize, searchWord: searchWord})
                .then(({data: {total, list}}) => {
                    holder.dataSource = list;
                    holder.page.total = total;
                }).finally(() => {
                holder.loading = false;
            });
        };
        onMounted(() => {
            refresh();
        });
        return {holder, refresh, onCreate, onEdit, onInfo, onDelete};
    },
    render() {
        const {refresh, holder, onCreate, onEdit, onInfo, onDelete} = this;
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
                    <Button onClick={() => refresh()}>搜索</Button>
                </Form.Item>
            </Form>
            <StandardTable holder={holder}>
                <TableColumn title="分组名称" data-index="name"/>
                <TableColumn title="分类" data-index="system" customRender={({text}) => {
                    return <Tag>{AuthResourceGroupSystem[text]}</Tag>
                } }/>
                <TableColumn title="说明" data-index="desc"/>
                <TableColumn title="操作" width={200} customRender={({record}) => {
                    return record.system === 1 ? <><Button size={"small"} onClick={() => onInfo(record)}>查看</Button></> : <Button.Group  size={"small"}>
                        <Button onClick={() => onEdit(record)}>编辑</Button>
                        <Button onClick={() => onDelete(record)}>删除</Button>
                        <Button onClick={() => onInfo(record)}>查看</Button>
                    </Button.Group>
                }}/>
            </StandardTable>
            <StdModal/>
        </Card>;
    }

});
