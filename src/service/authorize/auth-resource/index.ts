import {API_BASE_URL} from '@/utils/API';
import {HttpClient} from "@/utils/HttpUtils";
import {Resp} from "@/utils/type";
import {AuthResource, AuthResourceParam} from "@/views/authority/auth/type";
import {PageRequest, PageResult} from "@/components/table/type";

const API_BASE = `${API_BASE_URL}/api/authorize/auth`;


/**
 * 保存资源信息
 * @param model 资源信息Model
 * @return 返回保存信息
 */
export async function saveAuthResource(model: AuthResource): Resp<AuthResourceParam> {
    return HttpClient.post(`${API_BASE}/save`, {authResource: {...model}});
}

/**
 * 更新授权资源
 * @param model AuthResource
 */
export async function updateAuthResource(model: AuthResource): Resp<AuthResource> {
    return HttpClient.post(`${API_BASE}/update`, {authResource: {...model}});
}

/**
 * 获取授权资源分页列表
 * @param params    授权资源列表
 */
export async function getAuthResourcePage(params: PageRequest): Resp<PageResult<AuthResource>> {
    return HttpClient.get(`${API_BASE}/page`, {params: params});
}


