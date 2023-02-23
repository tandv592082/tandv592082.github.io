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
    <div class="flex">
        <p class="font-semibold" v-if="props.skillTitle">{{ `${props.skillTitle}: ` }}</p>
        <p>{{ ` ${props.skillDetails}` }}</p>
    </div>
</template>