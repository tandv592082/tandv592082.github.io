<template>
    <Icon 
        @click="setTheme(currentTheme === 'dark' ? 'light' : 'dark')" 
        :name="currentTheme === 'dark' ? 'fluent:weather-moon-16-regular' : 'fluent:weather-sunny-24-regular'"
        size="24" 
        class="cursor-pointer hover:opacity-50 hover:scale-50 transition-all" />
</template>
  
<script lang="ts" setup>
import { useTheme } from '~~/composables/useTheme';
const {currentTheme, setTheme } = useTheme();

</script>
  