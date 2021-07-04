import axios from 'axios';
import {Param} from "@/models/common";
import {API_BASE_URL} from "@/utils/API";

/**
 * Result Response转换
 * @param res
 * @param header
 */
const resultTransformResponse = (res: string, header: Record<string, unknown>) => {
    if (header['content-type'] === 'application/json') {
        const {data} = JSON.parse(res) as {data: Param<unknown>}; return data;
    }
    return res;
}

/**
 * 创建实例
 */
export const HttpClient = axios.create({
    /**
     * BaseUrl
     */
    baseURL: API_BASE_URL,
    /**
     * 通用请求头
     */
    headers: {},
    /**
     * 响应数据转换
     * @param res
     */
    transformResponse: resultTransformResponse

});


export const postHeaders = {
    'Content-Type': 'application/json'
}
