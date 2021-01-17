# render-editro

---

- 所有路由指向 RenderContainer.vue
- RenderContainer.vue 中监听路由变化
- 根据路由获取匹配的 pageConfig
    ```js
    const pageConfig = {
        '/home': {
            components: [],
        },
        '/about': {
            components: [],
        },
    }
    ```
- 根据 pageConfig 加载组件列表, 绘制页面
- RenderContainer 通过 props 给组件传递 componentConfig
- 组件内部根据 componentConfig 渲染页面


- 考虑一下, 要不要开放一个全局状态配置 ???
- 否则就都要利用路由跳转参数和后台接口进行组件间通信.

---


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
