<template>
    <div class="render-container">
        <div
            v-for="component of currentComponents"
            :key="component.id"
            style="position: relative;"
            >
            <component
                :is="component.name"
                :config="component.config"
                :states="states"
                @states-change="handleStatesChange"
            />
            <div v-if="mode === 'edit'" class="cover"></div>
        </div>
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
    props: {
        currentPath: {
            type: String,
            default: '',
        },
        mode: {
            type: String,
            default: '',
        },
    },
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
            const key = this.currentPath || this.$route.path
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
            this.pageConfigs = pageConfigs
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
    .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .cover:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
