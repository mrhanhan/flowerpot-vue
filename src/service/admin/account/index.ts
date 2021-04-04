import {HttpClient} from "@/utils/HttpUtils";



export const get = () => {
    return HttpClient.get<string>('/admin/account/list');
}
