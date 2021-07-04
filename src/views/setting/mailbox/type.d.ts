

export interface Mailbox {
    /**
     * 编码
     */
    code?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 密码
     */
    password?: string;
    /**
     * 描述
     */
    desc?: string;
    /**
     * 账号
     */
    account?: string;
    /**
     * 主机名称
     */
    mailHost?: string;
    /**
     * 端口
     */
    mailPort?: number;
    /**
     * 配置
     */
    mailConfig?: string;
    /**
     * 邮件协议
     */
    mailProtocol?: string;
}
