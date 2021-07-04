import {BaseEntity} from "@/models/common";


export interface AuthResourceGroup extends BaseEntity{
    /**
     * 资源分组名称
     */
    name?: string;
    /**
     * 资源分组描述
     */
    desc?: string;
    /**
     * 是否是系统资源组
     */
    system?: number;
}
