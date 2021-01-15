export default {
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
                    name: '测试输入框1',
                    style: { background: 'red' },
                },
            },
            {
                id: 2,
                name: 'render-input',
                config: {
                    name: '测试输入框2',
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
