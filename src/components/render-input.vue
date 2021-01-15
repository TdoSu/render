<template>
    <div>
        {{ config.name }}
        <input
            type="text"
            :style="{ background: config.style.background }"
            :value="states[config.target]"
            @input="ev => $emit('states-change', config.target, ev.target.value)"
        >
    </div>
</template>

<script>

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
}

</script>
