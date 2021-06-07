import {createLayout} from '@/components/form-modal';
import {Form, Input} from 'ant-design-vue';
import {defineComponent, PropType, reactive, ref, unref} from 'vue';
import {Account} from './type'
import {Rules} from "@/models/common";
import {lengthRange, required} from "@/utils/FormRoleUtils";
import {FormInstance} from "@/models/form";

const rules: Rules<Account> = {
    account: [required('账号必填'), ...lengthRange(6, 16)],
    nickname: [required('昵称必填'), ...lengthRange(6, 16)],
    mailbox: [required('邮箱必填'), ...lengthRange(6, 64)],
    // phone: [mobileTelephone()]
}

const AccountForm = defineComponent({
    props: {
        model: Object as PropType<Account>,
        onSubmit: Function as PropType<(model: Account) => void>
    },
    setup(props, {emit}) {
        const {model} = props as { model: Account };
        const account: Account = model ? model : reactive({});
        const form = ref();
        const submit = () => {
            console.log(unref(form));
            const {validate} = unref(form) as FormInstance;
            validate().then(() => {
                emit('submit', account);
            }).catch(() => {
                console.log('验证失败');
            });
        };
        return {form, submit, account}
    },
    render() {
        const {account} = this;
        return (
            <div>
                <Form layout={"horizontal"} ref={(node: unknown) => this.form = node} rules={rules} model={account} labelCol={createLayout(4)} wrapperCol={createLayout(18)}>
                    <Form.Item label="昵称" prop={"nickname"}>
                        <Input placeholder={"请输入账号昵称"}  value={account.nickname} onInput={(e) => account.nickname = e.target.value}/>
                    </Form.Item>
                    <Form.Item label="账号" prop={"account"}>
                        <Input placeholder={"请输入账号"} value={account.account} onInput={(e) => account.account = e.target.value}/>
                    </Form.Item>
                    <Form.Item label="邮箱" prop={"mailbox"}>
                        <Input placeholder={"请输入邮箱"} value={account.mailbox} onInput={(e) => account.mailbox = e.target.value}/>
                    </Form.Item>
                    <Form.Item label="手机号" prop={"phone"}>
                        <Input placeholder={"请输入手机号"} value={account.phone} onInput={(e) => account.phone = e.target.value}/>
                    </Form.Item>
                    <Form.Item label="QQ" prop={"qq"}>
                        <Input placeholder={"请输入QQ"} value={account.qq} onInput={(e) => account.mailbox = e.target.value}/>
                    </Form.Item>
                </Form>
            </div>
        );
    }
});

export {AccountForm};
