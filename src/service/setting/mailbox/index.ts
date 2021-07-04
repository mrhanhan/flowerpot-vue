import {Resp} from "@/utils/type";
import {Mailbox} from "@/views/setting/mailbox/type";
import {HttpClient} from "@/utils/HttpUtils";

const BASE_URL = '/api/email/mailbox';
/**
 * 获取邮箱列表
 */
export async function getMailboxList() : Resp<Mailbox[]> {
    return HttpClient.get(`${BASE_URL}/list`);
}


export async function updateMailbox(model: Mailbox): Resp<Mailbox> {
    return HttpClient.post(`${BASE_URL}/update`, model);
}
