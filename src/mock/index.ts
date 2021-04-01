// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs');


import './mock'
/**
 * Mock
 */
if (process.env.MOCK_STATUE === 'true') {
    // 设置请求延时时间
    Mock.setup({
        // timeout: 2000 方式一 直接设置值
        // 方式二 设置区间 注意这个是一个字符串形式
        timeout: '200 - 500'
    });
}
