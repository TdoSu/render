import Vue from 'vue'
import App from './App.vue'
import generatorRouter from './router'
import store from './store'

import RenderContainer from './components/render-container.vue'

Vue.config.productionTip = false

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
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
