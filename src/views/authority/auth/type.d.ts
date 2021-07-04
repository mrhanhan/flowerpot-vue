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
