<template>
    <div>
        {{ title }}
        <div class="editor-container">
            <div class="area" style="flex: 30%;">
                这里有上下两个区域
                <hr>
                已选组件区
                <div class="component-list">
                    <div
                        class="component-item"
                        v-for="component of selectedComponents"
                        :key="component.id"
                        >
                        {{ component.name }}
                    </div>
                </div>
                <hr>
                可选组件区
            </div>
            <div class="area" style="flex: 40%;">
                这里的东西上面添加一个遮盖层, 禁止内部被操作
                <br>
                同时添加拖动排序
                <br>
                给渲染器传递一个模式吧, 通过模式区分
                <RenderContainer
                    mode="edit"
                    :currentPath="currentPath"
                />
            </div>
            <div class="area" style="flex: 30%;">
                这里应该有两个 tab
                <br>
                页面基本配置
                <br>
                当前组件配置
            </div>
        </div>
    </div>
</template>

<script>

import RenderContainer from '../render/render-container.vue'

export default {
    components: {
        RenderContainer,
    },
    props: {
        pageList: {
            type: Array,
            default: () => [],
        },
    },
    data () {
        return {
            title: '页面编辑区',
            currentPath: '/container1',
        }
    },
    computed: {
        currentPage () {
            const key = this.currentPath || this.$route.path
            const target = this.pageList.find(p => p.path === key)
            return target || { components: [] }
        },
        selectedComponents () {
            return this.currentPage.components
        },
    },
}

</script>

<style scoped>
    .editor-container {
        display: flex;
        height: 600px;
    }
    .area {
        height: 100%;
        border: 1px solid #ccc;
    }
    .component-list {
        display: flex;
        flex-wrap: wrap;
    }
    .component-item {
        box-sizing: border-box;
        margin: 4px;
        padding: 4px 10px;
        width: 40%;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .component-item:hover {
        cursor: pointer;
        color: #fff;
        background: lightblue;
    }
</style>
