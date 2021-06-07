import {FormModalHolder} from "@/components/form-modal/type";
import {reactive, h, VNode} from "vue";

/**
 * 创建Layout
 */
export const createLayout = (span: number):{span: number} => {
    return {span};
}

/**
 * 创建表单的Holder
 */
export function createFormModalHolder(): FormModalHolder {
    const holder: FormModalHolder = reactive<FormModalHolder>({
        title: '',
        visible: false,
        content: h('div'),
        loading: false,
        close() {
            holder.visible = false;
            holder.end();
        },
        open(title: string, content :VNode | JSX.Element) {
            holder.title = title;
            holder.visible = true;
            holder.content = content;
        },
        begin() {
            holder.loading = true;
        },
        end() {
            holder.loading = false;
        }
    });
    return holder;
}
