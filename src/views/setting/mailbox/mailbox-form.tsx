import {defineComponent, onBeforeMount, PropType, Ref, ref} from 'vue';
import {Form, Input, Select} from "ant-design-vue";
import {Rules, Supplier} from "@/models/common";
import {Mailbox} from "@/views/setting/mailbox/type";
import {FormInstance} from "@/models/form";
import {createLayout} from "@/components/form-modal";
import {lengthRange, required} from "@/utils/FormRoleUtils";

const rules: Rules<Mailbox> = {
    account: [required('邮箱账号必填'), ...lengthRange(3, 30)],
    password: [required('邮箱账号密码必填'), ...lengthRange(3, 30)],
    mailHost: [required('邮箱服务地址必填'), ...lengthRange(3, 255)],
    mailPort: [{...required('邮箱服务端口必填'), type: 'number'}],
    mailConfig: [required('邮箱服务配置必填')]
};

const MailboxForm = defineComponent({
    props: {
      model: Object as PropType<Mailbox>
    },
    setup(props) {
        const formInstance: Ref<FormInstance> = ref({} as FormInstance);
        const onSubmit: Supplier<Promise<unknown>> = () => {
            return formInstance.value.validate<Mailbox>().then((model: Mailbox) => {
                return {...formModel.value, ...model};
            });
        };
        const formModel: Ref<Mailbox> = ref( {...props.model});
        onBeforeMount(() => {
            formModel.value = {...props.model};
            if (!formModel.value.mailProtocol) {
                formModel.value.mailProtocol = 'SMTP';
            }
            if (formModel.value.mailPort) {
                formModel.value.mailPort = parseInt(`${formModel.value.mailPort}`);
            }
        });
        return {onSubmit, formInstance, formModel};
    },
    render() {
        const {formModel} = this;
        return <div>
            <Form labelCol={createLayout(4)}
                  wrapperCol={createLayout(20)}
                  ref={(node: unknown) => this.formInstance = (node as FormInstance)}
                  rules={rules} model={formModel}>
                <Form.Item label={"邮箱名称"}>
                    <Input value={formModel.name} readonly={true}/>
                </Form.Item>
                <Form.Item label={"邮箱编码"}>
                    <Input value={formModel.code} readonly/>
                </Form.Item>
                <Form.Item label={"邮箱账号"} name={"account"}>
                    <Input value={formModel.account}
                            {...{autocomplete:"off"}}
                           placeholder={"请输入邮箱账号"}
                           onInput={({currentTarget: {value}}) => formModel.account = value}/>
                </Form.Item>
                <Form.Item label={"邮箱密码"} name={"password"}>
                    <Input type={"password"}
                           placeholder={"请输入邮箱账号密码"}
                           value={formModel.password}
                           onInput={({currentTarget: {value}}) => formModel.password = value}/>
                </Form.Item>
                <Form.Item label={"邮件协议"}>
                    <Select value={formModel.mailProtocol} onChange={(val: string) => formModel.mailProtocol = val}>
                        <Select.Option value={"smtp"}>SMTP</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label={"邮箱服务主机"} name={"mailHost"}>
                    <Input value={formModel.mailHost}
                           {...{autocomplete:"off"}}
                           placeholder={"请输入邮箱服务主机"}
                           onInput={({currentTarget: {value}}) => formModel.mailHost = value}/>
                </Form.Item>
                <Form.Item label={"邮箱服务端口"} name={"mailPort"}>
                    <Input value={formModel.mailPort}
                           type={"number"}
                           placeholder={"请输入邮箱服务端口"}
                           onInput={({currentTarget: {value}}) => {formModel.mailPort = (parseInt(value) || 1);}}/>
                </Form.Item>
                <Form.Item label={"邮箱服务配置"} name={"mailConfig"}>
                    <Input.TextArea
                        placeholder={"配置文件格式为，properties文件格式，配置项请参考SpringBoot Mail配置"}
                        value={formModel.mailConfig}
                        onInput={({currentTarget: {value}}) => formModel.mailConfig = value}/>
                </Form.Item>
                <Form.Item label={"邮箱描述"} name={"desc"}>
                    <Input.TextArea
                        placeholder={"邮箱描述"}
                        value={formModel.desc}
                        onInput={({currentTarget: {value}}) => formModel.desc = value}/>
                </Form.Item>
            </Form>
        </div>
    },
    watch: {
        model(newModel: Mailbox) {
            this.formModel = newModel;
            if (!this.formModel.mailProtocol) {
                this.formModel.mailProtocol = 'SMTP';
            }
        }
    }
});

export default MailboxForm;
