import {defineData, defineMock, resultSuccess} from "@/mock/utils";


/**
 * Admin 列表接口
 */
defineMock('/admin/account/list', 'get', ()=>{

    return resultSuccess(defineData({
        "array|1-100": [
            {
                "name|+1": ['User'],
                "account|+1": ['User'],
                "nickname|+1": ['User']
            }
            ]
        }
    ));
});
