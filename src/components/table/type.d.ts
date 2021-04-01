import {Result} from "@/models/common";


export declare interface PageOptions {
    /**
     * 当前叶
     */
    current: number;
    /**
     * PageSize
     */
    pageSize: number;
    /**
     * 总记录条数
     */
    total?: number;
    /**
     * f
     */
    pageSizeOption?: Array<string>;
}

/**
 * Table
 */
export declare interface TableHolder {
    /**
     * 分页配置
     */
    page: PageOptions;
    /**
     * 单行的Key
     */
    rowKey?: string;

    /**
     * 是否在加载种
     */
    loading?: boolean;

    /**
     * 数据源
     */
    dataSource?: Array<>;
}

/**
 * 分页响应实体
 */
export declare interface PageResult<T>{
    /**
     * 数据
     */
    list: Array<T>;
    /**
     * 总记录条数
     */
    total: number | string;
}
