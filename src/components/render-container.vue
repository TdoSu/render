<template>
    <div class="render-container">
        <component
            v-for="component of currentComponents"
            :key="component.id"
            :is="component.name"
            :config="component.config"
        />
    </div>
</template>

<script>
// 配置文件
import pageConfigs from './config.js'
// 组件库
import components from './component-lib.js'

export default {
    components,
    data () {
        return {
            // 所有动态页面配置数据
            pageConfigs: {},
        }
    },
    computed: {
        // 当前页面配置数据
        currentPageConfig () {
            const key = this.$route.path
            return this.pageConfigs[key] || {}
        },
        currentComponents () {
            return this.currentPageConfig.components || []
        },
    },
    created () {
        // 获取到所有动态页面配置
        this.getPageConfigs()
    },
    methods: {
        getPageConfigs () {
            setTimeout(_ => {
                this.pageConfigs = pageConfigs
            }, 500)
        },
    },
}
</script>

<style scoped>
    .render-container {
        padding: 10px;
        border-radius: 4px;
        background: lightblue;
    }
</style>
