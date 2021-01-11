import Vue from 'vue'
import App from './App.vue'
import generatorRouter from './router'
import store from './store'

import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.config.productionTip = false

const path2Component = path => ({
    './views/Home.vue': Home,
    './views/About.vue': About,
})[path]

const getRoutes = function () {
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
        setTimeout(_ => {
            resolve(routes)
        }, 500)
    })
}

getRoutes()
    .then(res => {
        const routes = res.map(r => {
            return {
                path: r.pagePath,
                name: r.pageName,
                component: path2Component(r.componentPath),
            }
        })
        const router = generatorRouter(routes)
        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app')
    })
