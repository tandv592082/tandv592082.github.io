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
        <p class="text-xl font-semibold text-dark-500 dark:text-light-800">{{ props.title.toUpperCase() }}</p>
        <div class="w-full h-3px bg-dark-50"></div>
        <div class="pt-2">
            <slot/>
        </div>
    </div>
</template>