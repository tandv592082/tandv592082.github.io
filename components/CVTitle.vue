<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="w-full">
        <p class="text-xl">{{ props.title }}</p>
        <div></div>
        <slot />
    </div>
</template>