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
