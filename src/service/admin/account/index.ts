import {HttpClient, postHeaders} from "@/utils/HttpUtils";
import {Resp} from "@/utils/type";
import {PageOptions, PageResult} from "@/components/table/type";
import {Account} from "@/views/admin/account/type";

/**
 * 获取账号分页
 */
export async function getAccountPage(page: PageOptions, search?: Record<string, unknown>): Resp<PageResult<Account[]>> {
    return HttpClient.get<PageResult<Account[]>>(`/api/system/user/page`, {params: {...search, current: page.current, pageSize: page.pageSize}});
}

/**
 * 保存账号
 * @param model
 */
export async function saveAccount(model: Account): Resp<unknown> {
    return HttpClient.post<unknown>(`/api/system/user/save`, JSON.stringify({...model}), {headers: postHeaders});
}
/**
 * 保存账号
 * @param model
 */
export async function updateAccount(model: Account): Resp<unknown> {
    return HttpClient.post<unknown>(`/api/system/user/update`, JSON.stringify({...model}), {headers: postHeaders});
}
