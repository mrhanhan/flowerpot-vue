/*
    表格工具类
 */


import {PageResult, TableHolder} from "@/components/table/type";
import {reactive} from 'vue';
import {AxiosPromise} from "axios";
import {Resp} from "@/utils/type";

export function createTableHolder(): TableHolder {
    const holder: TableHolder = reactive({
        loading: false,
        rowKey: 'id',
        page: {
            current: 1,
            pageSize: 20,
            pageSizeOption: ['20', '40', '80', '100', '500']
        },
        searchWord: ''
    });
    return reactive(holder);
}

/**
 * 设置数据源
 * @param holder            表格Holder
 * @param promise           业务响应信息
 */
export function handlerDataSource(holder: TableHolder, promise: Resp<PageResult<unknown>>): AxiosPromise {
    promise.then(({data})=>{
        holder.dataSource = data?.list;
        holder.page.total = parseInt(data?.total.toString());
    });
    return promise;
}
