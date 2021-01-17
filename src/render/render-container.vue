<template>
    <div class="render-container">
        <component
            v-for="component of currentComponents"
            :key="component.id"
            :is="component.name"
            :config="component.config"
            :states="states"
            @states-change="handleStatesChange"
        />
    </div>
</template>

<script>
// 配置文件
import pageConfigs from '@/config/page-config.js'
// 组件库
import components from '@/config/component-lib.js'

// TODO: 添加页面打开时通过路由设置 state 的方式
//      考虑添加一些钩子函数
//      考虑一下是否可以通过 render-container 实现可配置复合组件

export default {
    components,
    data () {
        return {
            // 所有动态页面配置数据
            pageConfigs: {},
            states: {},
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
    watch: {
        currentPageConfig: {
            handler (newValue) {
                // 设置页面状态
                const { states } = newValue
                if (states) {
                    states.forEach(({ key, defaultValue }) => {
                        this.$set(this.states, key, defaultValue)
                    })
                } else {
                    this.states = {}
                }
            },
            deep: true,
        },
    },
    methods: {
        getPageConfigs () {
            setTimeout(_ => {
                this.pageConfigs = pageConfigs
            }, 500)
        },
        handleStatesChange (k, v) {
            this.states[k] = v
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
