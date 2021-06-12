import {defineComponent, PropType, } from 'vue';
import {FormModalHolder} from "@/components/form-modal/type";
import {Modal, Spin} from "ant-design-vue";


export default defineComponent({
    props: {
        holder: Object as PropType<FormModalHolder>,
        onOk: Function as PropType<(()=>void)>,
        onClose: Function as PropType<(()=>void)>
    },
    setup() {
        return {};
    },
    render() {
        const {holder, $slots, $emit} = this;
        return (
            <Modal confirmLoading={holder?.loading}  visible={holder?.visible} title={holder?.title} onOk={()=>$emit('ok')} onCancel={()=>{holder?.close(); $emit('close');}}>
                <Spin spinning={holder?.loading}>
                    {{default: ()=> holder?.content ? holder.content : $slots.default?.()}}
                </Spin>
            </Modal>
        );
    }
});
