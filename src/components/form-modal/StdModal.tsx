import {defineComponent, ref, Ref, PropType, VNode, onBeforeUnmount} from 'vue';
import {Modal, Spin} from "ant-design-vue";
import {Func, NoticeCallback, Supplier} from "@/models/common";
import {StdModalContext} from "@/components/form-modal/type";
import {registerStdModal} from "@/components/form-modal/util";

export default defineComponent({
    name: 'std-modal',
    props: {
        cancelClose: {
            type: Boolean,
            required: false,
            default: true
        },
        id: {
            type: String,
            required: false,
            default: 'StdModalContext'
        },
        onSubmit: Function as PropType<Func<unknown, Promise<any>>>,
        onCancel: Function as PropType<NoticeCallback>
    },
    emits: ['ok', 'cancel'],
    setup(props, {emit}) {
        const loading: Ref<boolean> = ref(false);
        const visible: Ref<boolean> = ref(false);
        const title: Ref<string> = ref('');
        const content: Ref<JSX.Element | VNode> = ref(<></>);
        const onInnerOk = (): void => {
            if (props.onSubmit) {
                loading.value = true;
                const vnode: unknown = (content.value as unknown);
                // 判断注入的子组件是否有onSubmit方法
                type Component = {component: {ctx?: {onSubmit?: Supplier<Promise<unknown>>}}};
                const component: Component = (vnode as Component);
                // 调用子组件的方法
                if (component.component.ctx && component.component.ctx.onSubmit) {
                    component.component.ctx.onSubmit().then((res) => {
                        if (props.onSubmit) {
                            props.onSubmit(res).finally(() => {
                                loading.value = false;
                            });
                        }
                    });
                }

            }
            emit('ok');
        };
        const onInnerCancel = (): void => {
            emit('cancel');
            if (props.cancelClose) {
                visible.value = false;
            }
        }
        const context: StdModalContext = {
            open(t: string, c?: VNode | JSX.Element) {
                title.value = t;
                if (c) {
                    content.value = c;
                }
                visible.value = true;
            },
            close() {
                visible.value = false;
            }
        };
        // 注册 Context
        const id: string = props.id || '';
        registerStdModal(id, context);

        onBeforeUnmount(() => {
            registerStdModal(id, context);
        });
        return {onInnerOk, onInnerCancel, loading, visible, title, content};
    },
    render() {
        const {onInnerOk, onInnerCancel, loading, visible, title, content} = this;
        return <>
            <Modal confirmLoading={loading} maskClosable={false} visible={visible} title={title} onOk={onInnerOk} onCancel={onInnerCancel}
                   destroyOnClose={true}>
                <Spin spinning={loading}>
                    {{default: () => content}}
                </Spin>
            </Modal>
        </>
    }
})
