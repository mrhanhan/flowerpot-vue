import {API_BASE_URL} from '@/utils/API';
import {HttpClient} from "@/utils/HttpUtils";
import {AuthResourceGroup} from "@/views/authority/auth-group/type";
import {Resp} from "@/utils/type";

const API_BASE = `${API_BASE_URL}/api/authorize/common`;

/**
 * 获取所有资源信息
 */
export async function getChooseResourceGroup(): Resp<Array<AuthResourceGroup>> {
    return HttpClient.get(`${API_BASE}/resource/group`);
}
