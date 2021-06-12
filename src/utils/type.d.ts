import {AxiosResponse} from "axios";
import {ObjectEmitsOptions} from "@vue/runtime-core";

/**
 * Result
 */
export declare type Resp<T> = Promise<AxiosResponse<T>>;

declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends Array<infer V> ? (event: V, ...args: any[]) => void : {} extends Options ? (event: string, ...args: any[]) => void : UnionToIntersection<{
    [key in Event]: Options[key] extends ((...args: infer Args) => any) ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;
}[Event]>;
