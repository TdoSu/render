<template>
    <div>
        {{ config.name }}
        <input type="text" :style="{ background: config.style.background }">
    </div>
</template>

<script>

export default {
    props: {
        config: {
            type: Object,
            default: () => ({}),
        },
    },
}

</script>
