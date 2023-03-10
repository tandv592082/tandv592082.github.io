<script lang="ts" setup>
import increaseCountAsync from '~~/utils/counter-views'
import { CVLayoutId } from '~~/enums/app'
const CVLangSwitcher = resolveComponent('CVLangSwitcher');
const CVDownload = resolveComponent('CVDownload');
const CVThemeSwitcher = resolveComponent('CVThemeSwitcher');
let info = ref<any>(null);

const gotoGithubProfile = () => {
    const w =  window.open('https://github.com/tandv592082', '_blank');
    if(w) {
        w.focus();
    }
}

const countAPI = () => {
    if(window?.location) {
        return `https://api.countapi.xyz/hit/${window.location.host}/visits`;
    }

    return null;
}

onMounted(async () => {
    info.value = await increaseCountAsync();
})


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
        
        <footer class="h-12  mt-20 flex justify-center flex-wrap items-center bg-white dark:bg-black w-full border-t border-gray-100 dark:border-gray-800 text-sm">
            <p class=" text-center mr-2">{{ $t('system.footer.intro') }}</p>
            <p>(</p>
            <a  :href="countAPI() || '#'" class="text-xs mt-1 dark:text-white" target="_blank" rel="noopener" >{{ info || '' }}</a>
            <p class="ml-1 ">{{ $t('system.footer.view') }})</p>
        </footer>
    </div>
</template>