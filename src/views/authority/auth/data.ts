/**
 * 授权类型
 */
import {AuthResource} from "@/views/authority/auth/type";

export enum AuthType {
    URL = 1,
    IDENTIFIER = 2
}


export const AuthTypeDict: Record<number, string> = {
    1: 'URL资源',
    2: '标识符资源'
};
export const AuthTypeArray = [
    {label: AuthTypeDict[1], value: AuthType.URL},
    {label: AuthTypeDict[2], value: AuthType.IDENTIFIER}
];


export const AuthResourceSystem: Record<number, string> = {
    1: '系统资源',
    2: '用户资源',
}

/**
 * 创建新的授权资源
 */
export function createNewAuthResource(): AuthResource {
    return  {
        groupId: '',
        name: '',
        code: '',
        type : AuthType.URL,
        raw: '',
        desc: '',
    }
}
