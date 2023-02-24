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
    },
    hasRightDivider: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <div class="flex flex-wrap items-center">
        <a class="flex-1 dark:text-white" target="_blank" rel="noopener" v-if="props.type === 'email'" :href="`mailto:${props.info}`">
            {{ props.info }}
        </a>
        <a class="flex-1 dark:text-white" target="_blank" rel="noopener" v-else-if="props.type === 'phone'" :href="`tel:${props.info}`">
            {{ props.info }}
        </a>
        <a class="flex-1 dark:text-white" target="_blank" rel="noopener" v-else-if="props.type === 'link'" :href="props.info">
            {{ props.text || props.info }}
        </a>
        <p v-else>
            {{ props.info }}
        </p>
        <div class="mx-2 h-1/2 w-2px bg-dark-50" v-if="props.hasRightDivider"></div>
    </div>
</template>