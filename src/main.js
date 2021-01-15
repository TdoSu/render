import Vue from 'vue'
import App from './App.vue'
import generatorRouter from './router'
import store from './store'

import RenderContainer from './components/render-container.vue'

Vue.config.productionTip = false

// page 生成
const pageGenerator = config => {
}

// component 生成
const componentGenerator = config => {
}

const getConfig = () => {
    return new Promise((resolve, reject) => {
        const routes = [
            {
                pagePath: '/',
                pageName: 'Home',
                componentPath: './views/Home.vue',
            },
            {
                pagePath: '/about',
                pageName: 'About',
                componentPath: './views/About.vue',
            },
        ]
        const pages = [
            {
                pageName: 'Home',
                config: {},
                // ...
            },
        ]
        setTimeout(_ => {
            resolve({
                routes,
                pages,
            })
        }, 500)
    })
}

getConfig()
    .then(res => {
        // const routes = res.routes.map(r => {
        //     return {
        //         path: r.pagePath,
        //         name: r.pageName,
        //         component: path2Component(r.componentPath),
        //         // 这里其实应该是同一个页面 render.vue
        //         // render.vue 根据路径或者页面名, 获取配置,
        //         // 根据配置获取内部组件和组件布局
        //     }
        // }).concat([
        //     {
        //         path: '/container1',
        //         name: 'render',
        //         component: RenderContainer,
        //     },
        //     {
        //         path: '/container2',
        //         name: 'render',
        //         component: RenderContainer,
        //     },
        // ])
        const routes = [
            {
                path: '/',
                name: 'home',
                component: RenderContainer,
            },
            {
                path: '/container1',
                name: 'render1',
                component: RenderContainer,
            },
            {
                path: '/container2',
                name: 'render2',
                component: RenderContainer,
            },
        ]
        const router = generatorRouter(routes)
        //
        pageGenerator()
        componentGenerator()
        //
        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app')
    })
