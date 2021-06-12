import {Resp} from "@/utils/type";
import {Mailbox} from "@/views/setting/mailbox/type";
import {HttpClient} from "@/utils/HttpUtils";

/**
 * 获取邮箱列表
 */
export async function getMailboxList() : Resp<Mailbox[]> {
    return HttpClient.get('/api/email/mailbox/list');
}
