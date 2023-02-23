<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="w-full mb-5">
        <p class="text-xl font-semi-bold">{{ props.title.toUpperCase() }}</p>
        <slot />
    </div>
</template>