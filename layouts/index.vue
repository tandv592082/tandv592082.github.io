<script lang="ts" setup>
const CVLangSwitcher = resolveComponent('CVLangSwitcher');
const CVDownload = resolveComponent('CVDownload');
const CVThemeSwitcher = resolveComponent('CVThemeSwitcher');
</script>


<template>
    <div class="container mx-auto mb-10">
        <div class="h-12 flex justify-end items-center fixed bg-white dark:bg-dark-800 w-full container <sm:justify-center">
            <CVDownload class="mr-5"/>
            <CVLangSwitcher class="mr-5"/>
            <CVThemeSwitcher />
        </div>
        <div id="__cv" class="mx-auto content w-prose px-4 py-1 rounded-md pt-12">
            <slot />
        </div>
    </div>
</template>