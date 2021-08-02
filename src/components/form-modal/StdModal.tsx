import {defineComponent, ref, Ref, PropType, VNode, onBeforeUnmount} from 'vue';
import {Modal, Spin} from "ant-design-vue";
import {Func, NoticeCallback, Supplier} from "@/models/common";
import {StdModalContext} from "@/components/form-modal/type";
import {registerStdModal} from "@/components/form-modal/util";

export default defineComponent({
    name: 'std-modal',
    props: {
        width: Number,
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
        onSubmit: Function as PropType<Func<unknown, Promise<unknown>>>,
        onCancel: Function as PropType<NoticeCallback>
    },
    emits: ['ok', 'cancel'],
    setup(props, {emit}) {
        const loading: Ref<boolean> = ref(false);
        const visible: Ref<boolean> = ref(false);
        const title: Ref<string> = ref('');
        const content: Ref<JSX.Element | VNode> = ref(<></>);
        const submit: Ref<Func<unknown, Promise<unknown>> | undefined> = ref(props.onSubmit);
        const onInnerOk = (): void => {
            if (submit.value) {
                loading.value = true;
                const vnode: unknown = (content.value as unknown);
                // 判断注入的子组件是否有onSubmit方法
                type Component = {component: {ctx?: {onSubmit?: Supplier<Promise<unknown>>}}};
                const component: Component = (vnode as Component);
                // 调用子组件的方法
                if (component.component.ctx && component.component.ctx.onSubmit) {
                    component.component.ctx.onSubmit().then((res) => {
                        if (submit.value) {
                            submit.value(res).then(() => {
                                visible.value = false;
                            }).finally(() => {
                                loading.value = false;
                            });
                        } else {
                            loading.value = false;
                        }
                    }).catch(() => {
                        loading.value = false;
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
            loading.value = false;
        }
        const context: StdModalContext = {
            open(t: string, c?: VNode | JSX.Element, s?:Func<unknown, Promise<unknown>>) {
                title.value = t;
                if (c) {
                    content.value = c;
                }
                if (s)  {
                    submit.value = s;
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
        const {onInnerOk, onInnerCancel, loading, visible, title, content, width} = this;
        return <>
            <Modal confirmLoading={loading} maskClosable={false} visible={visible} width={width} title={title} onOk={onInnerOk} onCancel={onInnerCancel}
                   destroyOnClose={true}>
                <Spin spinning={loading}>
                    {{default: () => content}}
                </Spin>
            </Modal>
        </>
    }
})
