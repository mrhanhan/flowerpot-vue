import {ValidationRule} from "ant-design-vue/lib/form/Form";
import {VNode} from "vue";

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

export interface NoticeCallback {
    ():void
}

/**
 * 消费者
 */
export interface Consumer<T> {
    (arg: T): void
}

/**
 * 消费者
 */
export interface BiConsumer<T, R> {
    (arg: T, arg2: R): void
}

/**
 * 供应商
 */
export interface Supplier<T> {
    (): T
}
/**
 * Func
 */
export interface Func<T, R> {
    (arg: T): R
}

export type Elm = VNode | JSX.Element
