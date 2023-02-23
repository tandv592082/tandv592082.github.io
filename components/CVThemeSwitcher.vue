<template>
    <Icon @click="isDark = !isDark" :name="isDark ? 'fluent:weather-moon-16-regular' : 'fluent:weather-sunny-24-regular'"
        size="24" class="cursor-pointer hover:opacity-50 hover:scale-50 transition-all" />
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
const isDark = ref(false);

</script>
  