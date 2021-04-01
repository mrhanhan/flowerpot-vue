import {defineComponent, PropType} from 'vue';
import {TableHolder} from "@/components/table/type";
import {Table} from "ant-design-vue";

export default defineComponent({
    props: {
        holder: Object as PropType<TableHolder>,

    },
    setup: () => {
        return;
    },
    render() {
        const {holder, $slots} = this;
        return <div>
            <Table
                loading={holder?.loading}
                bordered={true}
                columns={holder?.columns}
                dataSource={holder?.dataSource}
                rowKey={holder?.rowKey}
                pagination={holder?.page}
            >
                {{...$slots}}
            </Table>
        </div>
    }
});
