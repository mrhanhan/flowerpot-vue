/**
 * 授权类型
 */
import {AuthResource} from "@/views/authority/auth/type";

export enum AuthType {
    URL = 1,
    BUTTON = 2
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
