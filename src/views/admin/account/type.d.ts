import { BaseEntity } from "@/models/common";

/**
 * 账号
 */
export declare interface Account extends BaseEntity {
    /**
     * 账号
     */
    account?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 部门ID
     */
    deptId?: string;
    /**
     * 部门名称
     */
    deptName?: string;
    /**
     * 角色ID
     */
    roleId?: string;
    /**
     * 角色名称
     */
    roleName?: string;
    /**
     * QQ
     */
    qq?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 邮箱
     */
    mailbox?: string;
}