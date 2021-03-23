import {defineComponent} from 'vue'
import {Button as AButton, Layout, Menu} from 'ant-design-vue'
const {Header, Sider , Content} = Layout;

export default defineComponent({
    name: 'Layout',
    setup(props, {slots}) {
        return ()=>(
            <>
              <Layout style="height: 100%;">
                  <Header>{{default: slots.header}}</Header>
                  <Layout hasSider={true}>
                      <Sider>
                          <Menu>
                              <Menu.Item key="1">首页</Menu.Item>
                              <Menu.Item key="2">系统</Menu.Item>
                          </Menu>
                      </Sider>
                      <Content>
                          {{default: slots.default}}
                      </Content>
                  </Layout>
              </Layout>
            </>
        )
    }
})
