// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs');

import {API_BASE_URL} from "@/utils/API";


export const defineMock = (uri: string, method: 'get'|'post'|'delete', callback: unknown):void => {
    Mock.mock(`${API_BASE_URL}${uri}`, method, callback);
}

/**
 * 定义数据
 * @param options
 */
export const defineData = (options: unknown) => {
    return Mock.mock(options);
}
