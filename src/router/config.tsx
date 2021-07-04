import {RouteConfig} from "@/router/types";
import {HomeOutlined, ProfileFilled, SettingOutlined, LockOutlined, FileAddOutlined} from "@ant-design/icons-vue";

export const adminRoutes: Array<RouteConfig> = [
    {
        path: '/home',
        name: 'Home',
        title: '平台首页',
        icon: (<HomeOutlined/>),
        viewName: 'HomeView',
        layoutViewName: 'AdminLayoutView'
    },
   {
        path: '/admin',
        name: 'Admin',
        title: '后台管理',
        icon: (<ProfileFilled/>),
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
            },  {
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
            }, {
                path: 'system',
                name: 'System',
                title: '系统管理',
                viewName: 'SystemLayoutView',
                children: [
                ]
            }
        ],
    },
    {
        path: '/setting',
        name: 'Setting',
        title: '系统配置',
        icon: (<SettingOutlined/>),
        viewName: 'AdminLayoutView',
        children: [
            {
                path: 'mailbox',
                name: 'MailBox',
                title: '邮箱配置',
                viewName: 'AdminSettingMailboxView'
            }
        ]
    },
    {
        path: '/authority',
        name: 'Authority',
        title: '权限管理',
        icon: (<LockOutlined/>),
        viewName: 'AdminLayoutView',
        children: [
            {
                path: 'auth_group',
                name: 'AuthResourceGroup',
                title: '授权资源组',
                viewName: 'AdminAuthorityAuthGroupView'
            },
            {
                path: 'auth',
                name: 'AuthResource',
                title: '授权资源',
                viewName: 'AdminAuthorityAuthView'
            },
            {
                path: 'role',
                name: 'Role',
                title: '角色',
                viewName: 'AdminSettingMailboxView'
            }
        ]
    },
    {
        path: '/swagger',
        name: 'Swagger',
        title: '接口文档',
        layoutViewName: 'AdminLayoutView',
        viewName: 'AdminSettingSwaggerView',
        icon: <FileAddOutlined/>
    }
];
