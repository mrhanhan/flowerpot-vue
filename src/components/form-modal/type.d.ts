/**
 * Submit
 */
import {VNode} from "vue";
import {Func} from "@/models/common";

/**
 * 表单
 */
export declare interface FormModalHolder {
    /**
     * 表单标题
     */
    title?: string;
    /**
     * 是否显示
     */
    visible?: boolean;

    /**
     * 加载中
     */
    loading?: boolean;
    /**
     * Content
     */
    content?: VNode | JSX.Element;

    /**
     * 关闭表单
     */
    close();

    /**
     * 打开表单
     * @param title         标题
     * @param content       Content
     */
    open(title: string, content?: VNode | JSX.Element);

    /**
     * 打开 loading
     */
    begin();

    /**
     * 关闭加载
     */
    end();
}


export declare interface StdModalContext {
    /**
     * 打开标签
     * @param title     打开
     * @param content   Content
     * @param submit    回调方法
     */
    open(title: string, content?: VNode | JSX.Element, submit?: Func<unknown, Promise<unknown>>);

    /**
     * 关闭Modal
     */
    close();
}
