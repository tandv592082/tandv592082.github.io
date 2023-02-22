<script lang="ts" setup>
const props = defineProps({
    info: {
        type: String,
        required: true,
        default: ''
    },
    type: {
        type: String,
        require: false
    },
    text: {
        type: String,
        required: false,
    }
})
</script>

<template>
    <div>
        <a v-if="props.type === 'email'" :href="`mailto:${props.info}`">
            {{ props.info }}
        </a>
        <a v-else-if="props.type === 'phone'" :href="`tel:${props.info}`">
            {{ props.info }}
        </a>
        <a v-else-if="props.type === 'link'" :href="props.info">
            {{ props.text || props.info }}
        </a>
        <p v-else>
            {{ props.info }}
        </p>
    </div>
</template>