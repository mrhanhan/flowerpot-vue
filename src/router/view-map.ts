import {ViewMap} from "@/router/types";

/**
 * 视图Map
 */
export const viewMap: ViewMap = {
    "AdminLayoutView" : ()=>import('@/layout/AdminLayout.vue'),
    "AdminHomeView" : ()=>import('@/views/admin/home'),
    "AdminMenuView" : ()=>import('@/views/admin/menu'),
    "AdminAccountView" : ()=>import('@/views/admin/account'),
};
