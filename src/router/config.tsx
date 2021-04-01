import {RouteConfig} from "@/router/types";
import {SettingOutlined} from "@ant-design/icons-vue";

export const adminRoutes: Array<RouteConfig> = [
   {
        path: '/admin',
        name: '/admin',
        title: '后台管理',
        icon: (<SettingOutlined/>),
        viewName: 'AdminLayoutView',
        children: [
            {
                path: '',
                name: 'AdminHome',
                title: '首页',
                viewName: 'AdminHomeView'
            }, {
                path: 'menu',
                name: 'Menu',
                title: '菜单栏',
                viewName: 'AdminMenuView'
            }, {
                path: 'role',
                name: 'Role',
                title: '角色管理',
                viewName: 'AdminMenuView'
            }, {
                path: 'dept',
                name: 'Dept',
                title: '部门管理',
                viewName: 'AdminMenuView'
            }, {
                path: 'account',
                name: 'Account',
                title: '账号管理',
                meta: {target: '_blank'},
                viewName: 'AdminAccountView'
            }
        ],

    }
];
