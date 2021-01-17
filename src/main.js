import Vue from 'vue'
import App from './App.vue'
import generatorRouter from './router'
import store from './store'

// render 容器
import RenderContainer from './render/render-container.vue'

// 这里还需要有一个 editor 容器

Vue.config.productionTip = false

const routes = [
    // 作为编辑页, 配置 editor 容器
    {
        path: '/',
        name: 'home',
        component: RenderContainer,
    },
    // demo 页 1
    {
        path: '/container1',
        name: 'render1',
        component: RenderContainer,
    },
    // demo 页 2
    {
        path: '/container2',
        name: 'render2',
        component: RenderContainer,
    },
]
const router = generatorRouter(routes)
//
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
