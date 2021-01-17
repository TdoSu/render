<template>
    <div>
        {{ title }}
        <div>
            <div class="operat-container">
                <button style="margin-right: 16px;">添加页面</button>
            </div>
            <div
                v-for="page of pageList"
                class="page-item"
                :key="page.id">
                <div>
                    {{ page.name }}
                </div>
                <div>
                    <button style="margin-right: 10px;">编辑页面</button>
                    <button style="margin-right: 10px;">删除页面</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        pageList: {
            type: Array,
            default: () => [],
        },
    },
    data () {
        return {
            title: '页面列表区',
        }
    },
}

</script>

<style scoped>
    .operat-container {
        padding: 4px;
        border-bottom: 1px solid #ccc;
        text-align: right;
    }
    .page-item {
        padding: 4px 10px;
        display: flex;
        justify-content: space-between;
        text-align: left;
    }
    button:hover {
        cursor: pointer;
    }
</style>
