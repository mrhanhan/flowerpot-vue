/*
   路由配置文件
 */
import {VNode} from "vue";
import {_RouteRecordBase, RouteComponent} from "vue-router";

interface MenuRaw extends _RouteRecordBase{
    /**
     * 标题
     */
    title?: string;
    /**
     * 图标
     */
    icon?: VNode | JSX.Element,
    /**
     * 子菜单
     */
    children?: Array<RouteConfig>;
    /**
     * 视图名称
     */
    viewName?: string;
    /**
     * 视图
     */
    component?: View;
    /**
     * 权限
     */
    permission?: string;
}
/**
 * 类型
 */
export type RouteConfig = MenuRaw;

/**
 * 懒加载
 */
declare type Lazy<T> = () => Promise<T>;
/**
 * 视图
 */
declare type View = RouteComponent | Lazy<RouteComponent>;
/**
 * 视图Map
 */
export declare type ViewMap = {[index: string] : View}
