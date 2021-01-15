<template>
    <div :style="config.style">
        {{ config.message }}
        <br>
        account: {{ account }}
        <br>
        password: {{ password }}
    </div>
</template>

<script>

export default {
    props: {
        config: {
            type: Object,
            default: _ => ({}),
        },
    },
    data () {
        return {
            account: '',
            password: '',
        }
    },
    created () {
        // 可以在 created 时抛出事件, 设置状态
        const { query } = this.$route
        this.account = query.account
        this.password = query.password
    },
}

</script>
