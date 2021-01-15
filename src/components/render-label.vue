<template>
    <div :style="config.style">
        {{ config.message }}
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
}

</script>
