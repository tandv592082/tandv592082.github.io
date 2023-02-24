<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="w-full mb-4">
        <p class="text-xl font-semibold text-black dark:text-white">{{ props.title.toUpperCase() }}</p>
        <div class="w-full h-3px bg-dark-50  mb-2"></div>
        <div class="py-2">
            <slot/>
        </div>
    </div>
</template>