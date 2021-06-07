import {ValidationRule} from "ant-design-vue/lib/form/Form";

export declare interface BaseEntity {
    /**
     * 记录ID
     */
    id?: string;
}


export declare type Rules<T> = {[key: string]: ValidationRule | ValidationRule[]} & {[key in keyof T]: ValidationRule | ValidationRule[]};


/**
 * 响应类
 */
export declare interface Result<T> {

    /**
     * 数据
     */
    data?: T;
    /**
     * 响应数据
     */
    message: string;

    /**
     * Code
     */
    code: number;
}

/**
 * 参数
 */
export declare type Param<T> = {[key in string]: T}
