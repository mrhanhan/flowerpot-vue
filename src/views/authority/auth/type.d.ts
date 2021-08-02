import {BaseEntity} from "@/models/common";


export interface AuthResource extends BaseEntity{
    /**
     * 分组ID
     */
    groupId?: string;
    /**
     * 是否是系统资源
     */
    system?: number;
    /**
     * 资源名称
     */
    name?: string;
    /**
     * 资源编码
     */
    code?: string;
    /**
     * 资源编码
     */
    type?: number;
    /**
     * 授权塑胶
     */
    raw?: string;
    /**
     * 描述说明信息
     */
    desc?: string;
}

export interface AuthRuleExpression {
    /**
     * 同资源下表达式ID
     */
    id: number;
    /**
     * 分组层级
     */
    groupLevel: number;
    /**
     * 分组路径
     */
    groupPath: string;
    /**
     * 表达式值
     */
    value: string;
}

export interface AuthResourceRuleParam {
    /**
     * 规则记录ID
     */
    id: string;
    /**
     * 受权资源类型
     */
    type: number;
    /**
     * 表达式
     */
    expression: AuthRuleExpression;
    /**
     * 子表达式
     */
    children?: AuthResourceRuleParam[];
    /**
     * 描述信息
     */
    desc: string;
}


export interface AuthResourceParam {

    authResource: AuthResource;
    authResourceRule: AuthResourceRuleParam;
}
