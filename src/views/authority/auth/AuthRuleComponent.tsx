import {defineComponent, PropType, Ref, ref} from "vue"
import './AuthRuleComponent.less'
import {Button, Input, Modal, Radio, Switch} from "ant-design-vue";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons-vue";

const eventProps = {
    onAdd: Function as PropType<(() => void)>,
    onRemove: Function as PropType<((index: number) => void)>

}

const RuleGroup = defineComponent({
    name: 'rule-group',
    props: {
        separation: String,
        children: Object as PropType<Array<JSX.Element>>,
        ...eventProps
    },
    emits: ["add", "remove"],
    setup(props, {emit}) {
        const onAddRule = () => {
            emit('add', {});
        };
        const onRemoveRule = (index: number) => {
            emit('remove', index);
        };

        return {onAddRule, onRemoveRule};
    },
    render() {
        const {separation, children = [], onAddRule, onRemoveRule} = this;
        const renderChildren: JSX.Element[] = [];
        for (let i = 0; i < children.length; i++) {
            if (i !== 0) {
                renderChildren.push(<span class="rule-group-separation">{separation}</span>);
            }
            renderChildren.push(<div class="rule-group-item">
                <div class="rule-group-item-content">{children[i]}</div>
                <div class="rule-group-item-tools">
                    <MinusOutlined onClick={() => onRemoveRule(i)}/>
                </div>
            </div>)
        }
        return <div class="rule-group">
            {renderChildren}
            <div>
                <Button icon={<PlusOutlined/>} type={"ghost"} size={"small"} block
                        onClick={() => onAddRule()}>添加规则</Button>
            </div>
        </div>
    }
});


export const AndRule = defineComponent({
    name: 'and-rule',
    setup() {
        const children: Ref<Array<JSX.Element>> = ref([]);
        const onAddRule = () => {
            ShowRuleModal((rule) => {
                children.value.push(rule);
            });
        }
        const onRemoveRule = (index: number) => {
            children.value.splice(index, 1);
        }
        return {onRemoveRule, onAddRule, children};
    },
    render() {
        const {children = [], onAddRule, onRemoveRule} = this;
        return <div class="and-rule">
            <RuleGroup onAdd={() => onAddRule()} onRemove={onRemoveRule} children={children} separation={"并且"}/>
        </div>
    }
});

export const OrRule = defineComponent({
    name: 'or-rule',
    setup() {
        const children: Ref<Array<JSX.Element>> = ref([]);
        const onAddRule = () => {
            ShowRuleModal((rule) => {
                children.value.push(rule);
            });
        }
        const onRemoveRule = (index: number) => {
            children.value.splice(index, 1);
        }
        return {onRemoveRule, onAddRule, children};
    },
    render() {
        const {children = [], onAddRule, onRemoveRule} = this;
        return <div class="or-rule">
            <RuleGroup onAdd={() => onAddRule()} onRemove={onRemoveRule} children={children} separation={"或者"}/>
        </div>
    }
});

export const RootRule = defineComponent({
    name: 'root-rule',
    setup() {
        const child: Ref<JSX.Element| null> = ref(null);
        const onSelectRule = () => {
            ShowRuleModal((rule) => {
                child.value = rule;
            });
        };
        const onClearRule = () => {
            child.value = null;
        }
        return {child, onSelectRule, onClearRule};
    },
    render() {
        const {child, onSelectRule, onClearRule} = this;
        return <div class="root-rule">
            <div class="rule-group">
                { child ? <div class="rule-group-item">
                        <div class="rule-group-item-content">
                            {child}
                        </div>
                        <div class="rule-group-item-tools">
                            <Button onClick={onClearRule}><MinusOutlined/></Button>
                        </div>
                    </div>
                    :
                    <div>
                        <Button block onClick={onSelectRule}>选择规则</Button>
                    </div>
                }
            </div>
        </div>
    }
});

export const LoginRule = defineComponent({
    name: 'login-rule',
    setup() {
        return {};
    },
    render() {
        return <div class="login-rule">
            <Radio.Group>
                <Switch/> 需要登录可访问
            </Radio.Group>
        </div>
    }
});

export const PermissionRule = defineComponent({
    name: 'login-rule',
    setup() {
        return {};
    },
    render() {
        return <div class="login-rule">
            <Switch/> 拥有此资源码可访问
        </div>
    }
});
export const RoleRule = defineComponent({
    name: 'login-rule',
    setup() {
        return {};
    },
    render() {
        return <div class="login-rule">
            <Input placeholder="拥有指定角色才可以访问"/>
        </div>
    }
});



interface SelectRuleCallback {
    (rule: JSX.Element): void
}

function ShowRuleModal(callback: SelectRuleCallback) {
    let select: JSX.Element | null = null;
    const ctx = Modal.confirm({
        title: '选择规则',
        content: <div class="show-modal">
            <Radio.Group onChange={({target: {value}}) => select = value}>
                <div>分组规则</div>
                <Radio value={<AndRule/>}>并且分组</Radio>
                <Radio value={<OrRule/>}>或者分组</Radio>
                <div>规则</div>
                <Radio value={<LoginRule/>}>登录规则</Radio>
                <Radio value={<PermissionRule/>}>需要权限</Radio>
                <Radio value={<RoleRule/>}>需要角色</Radio>
            </Radio.Group>
        </div>,
        onOk: () => {
            select && callback(select);
            ctx.destroy();
        },
        onCancel: () => {
            ctx.destroy();
        }
    });

}
