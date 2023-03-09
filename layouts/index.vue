<script lang="ts" setup>
import { CVLayoutId } from '~~/enums/app'
const CVLangSwitcher = resolveComponent('CVLangSwitcher');
const CVDownload = resolveComponent('CVDownload');
const CVThemeSwitcher = resolveComponent('CVThemeSwitcher');

const gotoGithubProfile = () => {
    const w =  window.open('https://github.com/tandv592082', '_blank');
    if(w) {
        w.focus();
    }
}

</script>


<template>
    <div class="container mx-auto">
        <header class="h-12 backdrop-filter backdrop-blur-sm flex justify-end items-center top-0 fixed bg-white dark:bg-black w-full !bg-opacity-50 container <sm:justify-center ">
            <CVDownload class="mr-5 <sm:hidden"/>
            <CVLangSwitcher class="mr-5"/>
            <CVThemeSwitcher class="mr-5"/>
            <Icon name="mdi:github" size="24" class="cursor-pointer" @click="gotoGithubProfile"/>
        </header>
        <main :id="CVLayoutId" class="mx-auto content w-prose px-4 py-1 rounded-md pt-12 <sm:w-full <sm:text-sm">
            <slot />
        </main>
        <footer class="h-12 mt-20 flex justify-center items-center bg-white dark:bg-black w-full border-t border-gray-100 dark:border-gray-800">
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener" class="dark:text-white ">CC BY-NC-SA 4.0</a>
            <p class="text-sm text-center ml-2">{{ $t('system.footer.intro') }}</p>
        </footer>
    </div>
</template>