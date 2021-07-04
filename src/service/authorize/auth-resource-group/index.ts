import {HttpClient} from "@/utils/HttpUtils";
import {Resp} from "@/utils/type";
import {AuthResourceGroup} from "@/views/authority/auth-group/type";
import {PageRequest, PageResult} from "@/components/table/type";
import {API_BASE_URL} from "@/utils/API";

const API_BASE = `${API_BASE_URL}/api/authorize/auth_group`

export async function getAuthResourceGroupPage(params: PageRequest): Resp<PageResult<AuthResourceGroup>> {
    return HttpClient.get(`${API_BASE}/page`, {params: params});
}

export async function saveAuthResourceGroup(param: AuthResourceGroup): Resp<AuthResourceGroup> {
    return HttpClient.post(`${API_BASE}/save`, {...param});
}

export async function updateAuthResourceGroup(param: AuthResourceGroup): Resp<AuthResourceGroup> {
    return HttpClient.post(`${API_BASE}/update`, {...param});
}
//
// export async function getAuthResource(id: string): Resp<AuthResourceGroup> {
//     return HttpClient.get(`${API_BASE}/${id}`);
// }

export async function deleteAuthResourceGroup(id?: string): Resp<AuthResourceGroup> {
    return HttpClient.post(`${API_BASE}/${id}/delete`);
}
