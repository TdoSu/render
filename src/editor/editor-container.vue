<template>
    <div style="padding-top: 10px;">
        {{ message }}
        <button @click="save">保存</button>
        <hr>
        <div style="width: 1000px; margin: 0 auto;">
            <PageListEditor
                :page-list="pageList"
                @add-page="handleAddPage"
                @delete-page="handleDeletePage"
                @change-page="handleChangePage"
            />
            <hr>
            <PageDetailEditor
                :page-list="pageList"
            />
        </div>
    </div>
</template>

<script>
import PageListEditor from './editor-page-list.vue'
import PageDetailEditor from './editor-page-detail.vue'

// 配置文件
import pageConfigs from '@/config/page-config.js'

export default {
    components: {
        PageListEditor,
        PageDetailEditor,
    },
    data () {
        return {
            message: '这里是编辑页面, 点击保存修改 pageConfig',
            pageList: [],
        }
    },
    created () {
        //
        this.init()
    },
    methods: {
        init () {
            // 获取 pageConfig 设置 pageList
            const deepCopy = o => JSON.parse(JSON.stringify(o))
            const pageConfigsCopy = deepCopy(pageConfigs)
            this.pageList = Object.keys(pageConfigsCopy)
                .map(k => ({
                    path: k,
                    ...pageConfigsCopy[k],
                }))
        },
        save () {
            //
            console.log('save: ', pageConfigs, this.pageList)
        },
        handleAddPage (page) {
            this.pageList.push(page)
        },
        handleDeletePage (page) {
            const id = page.id
            this.pageList = this.pageList.filter(p => p.id !== id)
        },
        handleChangePage (page) {
            const id = page.id
            const targetIndex = this.pageList.findIndex(p => p.id === id)
            this.pageList = this.pageList.splice(targetIndex, 1, page)
        },
    },
}

</script>
