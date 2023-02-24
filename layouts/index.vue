<script lang="ts" setup>
const CVLangSwitcher = resolveComponent('CVLangSwitcher');
const CVDownload = resolveComponent('CVDownload');
const CVThemeSwitcher = resolveComponent('CVThemeSwitcher');
</script>


<template>
    <div class="container mx-auto">
        <div class="h-12 flex justify-end items-center">
            <CVDownload class="mr-5"/>
            <CVLangSwitcher class="mr-5"/>
            <CVThemeSwitcher />
        </div>
        <div class="mx-auto content w-prose px-4 py-2 rounded-md">
            <slot />
        </div>
    </div>
</template>