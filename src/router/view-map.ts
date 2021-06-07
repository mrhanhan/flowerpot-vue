import {ViewMap} from "@/router/types";

/**
 * 视图Map
 */
export const viewMap: ViewMap = {
    "AdminLayoutView" : ()=>import('@/layout/AdminLayout.vue'),
    "SystemLayoutView" : () => import('@/layout/SystemLayout.vue'),

    "HomeView" : ()=>import('@/views/home'),

    "AdminHomeView" : ()=>import('@/views/admin/home'),
    "AdminMenuView" : ()=>import('@/views/admin/menu'),
    "AdminAccountView" : ()=>import('@/views/admin/account'),

    "AdminSettingMailboxView" : () => import('@/views/setting/mailbox')
};
