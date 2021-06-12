/**
 * 加载配置
 */
import {RouteRecordRaw} from "vue-router";
import {RouteConfig, ViewMap} from "@/router/types";

/**
 * 解析RouteConfig 到 RouteRecordRaw
 * @param routes
 * @param viewMap
 */
export function parseRoutes(routes: Array<RouteConfig>, viewMap: ViewMap): Array<RouteRecordRaw> {
    /**
     * 遍历eachRoute
     * @param route
     * @return RouteRecordRaw
     */
    const eachRoute = (route: RouteConfig) => {

        const routeRecordRaw: RouteRecordRaw = {...route as RouteRecordRaw, meta: {data: {...route}}};
        // 如果视图不存在，并且有视图名称，尝试设置视图
        if (!route.component && !!route.viewName) {
            routeRecordRaw.component = viewMap[route.viewName];
        }
        // 如果存在子组件，设置子组件
        if (route.children && route.children.length) {
            routeRecordRaw.children = parseRoutes(route.children, viewMap);
        } else if (!!route.layoutViewName && viewMap[route.layoutViewName]) {
            // 如果没有children 判断是否是有layout

            const newLayoutPath: RouteRecordRaw = {
                component: viewMap[route.layoutViewName],
                path: routeRecordRaw.path,
                name: routeRecordRaw.name,
                meta: {data: {...route}},
                children: [routeRecordRaw]
            };
            routeRecordRaw.path = '';
            const config: RouteConfig = routeRecordRaw.meta?.data as RouteConfig;
            config.title = '';
            return newLayoutPath;

        }
        return routeRecordRaw;
    }
    return routes.map( t => eachRoute(t));
}
