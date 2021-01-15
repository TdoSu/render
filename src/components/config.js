export default {
    // key -- 页面路径
    // value -- 页面配置
    // components -- 页面内的组件列表
    // states -- 页面内状态
    '/': {
        message: 'home',
    },
    '/container1': {
        message: 'test page - 111111',
        components: [
            {
                id: 1,
                name: 'render-input',
                config: {
                    target: 'account',
                    name: '账号',
                    style: { background: 'red' },
                },
            },
            {
                id: 2,
                name: 'render-input',
                config: {
                    target: 'password',
                    name: '密码',
                    style: { background: 'green' },
                },
            },
            {
                id: 3,
                name: 'render-button',
                config: {
                    clickEvent: {
                        type: 'router-push',
                        path: '/container2',
                    },
                    name: '登录',
                },
            },
        ],
        states: [
            {
                key: 'account',
                defaultValue: 'your name',
            },
            {
                key: 'password',
                defaultValue: 'your password',
            },
        ],
    },
    '/container2': {
        message: 'test page - 222222',
        components: [
            {
                id: 4,
                name: 'render-label',
                config: {
                    message: '没错其实你已经登录成功了!',
                    style: {
                        width: '80%',
                        margin: '0 auto',
                        padding: '10px',
                    },
                },
            },
            {
                id: 5,
                name: 'render-button',
                config: {
                    clickEvent: {
                        type: 'router-back',
                    },
                    name: '返回登录页',
                },
            },
        ],
    },
}
