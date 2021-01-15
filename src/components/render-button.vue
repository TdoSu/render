<template>
    <div style="padding: 10px;" @click="handleClick">
        <button>{{ config.name }}</button>
    </div>
</template>

<script scoped>

export default {
    props: {
        config: {
            type: Object,
            default: () => ({}),
        },
        states: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        handleClick () {
            return () => {
                const { clickEvent } = this.config
                if (!clickEvent) {
                    return null
                } else if (clickEvent.type === 'router-back') {
                    this.$router.back()
                } else if (clickEvent.type === 'router-push') {
                    this.$router.push({
                        path: clickEvent.path,
                        query: {
                            account: this.states.account,
                            password: this.states.password,
                        },
                    })
                }
            }
        },
    },
}

</script>
