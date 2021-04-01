import {defineComponent, PropType} from 'vue'
import {Layout, Menu} from 'ant-design-vue'
import {RouteConfig} from "@/router/types";
import {useRouter} from "vue-router";
const {Header, Sider , Content} = Layout;

interface LayoutPropsType {
    /**
     *
     */
    menus: Array<RouteConfig>;
}

export default  defineComponent({
    name: 'Layout',
    props: {
        menus: Array as PropType<Array<RouteConfig>>
    },
    setup(props, {slots, emit}) {
        const {menus} = props as LayoutPropsType;
        const router = useRouter();
        const forEachRenderMenu = (menu: RouteConfig) => {
            if (!menu.children || !menu.children.length) {
                return <Menu.Item  key={menu.path.replace('/', '')}>
                    <span>{menu.icon ? menu.icon : <span/>}{menu.title}</span>
                </Menu.Item>
            }
            return (
                <Menu.SubMenu key={menu.path.replace('/', '')} title={()=><span>{menu.icon ? menu.icon : <span/>}{menu.title}</span>}>
                    {
                        menu.children.map(forEachRenderMenu)
                    }
                </Menu.SubMenu>
            );
        }

        const handlerMenuClick = ({keyPath}: {key: string, keyPath: Array<string>}) => {
            if (keyPath) {
                router.push('/' + keyPath.reverse().join('/')).then(() => {console.log('跳转');
                    emit('menu', keyPath);});
            }
        }
        return ()=>(

              <Layout style="height: 100%;">
                  <Header>{{default: slots.header}}</Header>
                  <Layout hasSider={true}>
                      <Sider>
                          <Menu onClick={handlerMenuClick}>
                              {
                                  menus.map(t => forEachRenderMenu(t))
                              }
                          </Menu>
                      </Sider>
                      <Content>
                          {{default: slots.default}}
                      </Content>
                  </Layout>
              </Layout>

        )
    }
});
