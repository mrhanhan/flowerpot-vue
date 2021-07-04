import {defineComponent} from "vue";
import {Button, Card, Form, Input} from "ant-design-vue";
import {createTableHolder, StandardTable, TableColumn} from "@/components/table";
import {TableHolder} from "@/components/table/type";


export default defineComponent({
    setup() {
        const holder: TableHolder = createTableHolder();
        const onRefresh = () => {
            console.log(1);
        };
        const onCreate = () => {
            console.log(1);
        };
        return {onCreate, holder, onRefresh};
    },
    render() {
        const {onCreate, onRefresh, holder} = this;
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
                    <Button onClick={() => onRefresh()}>搜索</Button>
                </Form.Item>
            </Form>
            <StandardTable holder={holder}>
                <TableColumn title="分组"/>
                <TableColumn title="名称"/>
                <TableColumn title="编码"/>
                <TableColumn title="系统"/>
                <TableColumn title="类型"/>
                <TableColumn title="数据"/>
                <TableColumn title="描述"/>
                <TableColumn title="操作"/>
            </StandardTable>
        </Card>;
    }
});
