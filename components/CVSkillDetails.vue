<script lang="ts" setup>
const props = defineProps({
    skillTitle: {
        type: String,
        require: false
    },
    skillDetails: {
        type: String,
        require: true
    }
})
</script>

<template>
    <div class="flex mb-1">
        <p class="font-semibold" v-if="props.skillTitle">{{ `${props.skillTitle}: ` }}</p>
        <p class="ml-1">{{ ` ${props.skillDetails}` }}</p>
    </div>
</template>