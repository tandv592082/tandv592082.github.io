<template>
    <div v-if="!isLoading">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="inline-flex w-full justify-center rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <Icon name="fluent:drawer-download-24-regular" size="24" class="cursor-pointer" />
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute dark:bg-black dark:border dark:border-gray-200 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non">

                    <div class="py-2 ">
                       <p class="text-center text-black dark:text-white">
                            {{ $t('settings.download.title') }}
                       </p>
                    </div>

                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }" v-for="menu in i18nMenus" :key="menu.lang" @click="downloadPdfCV()">
                        <button :class="[
                            active ? 'bg-violet-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <Icon :name="menu.flag" size="24" class="cursor-pointer" />
                            <p class="ml-2 text-gray-700 dark:text-gray-200">{{ $t(`settings.download.${menu.lang}`) }}</p>
                        </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>
  
<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { i18nMenus } from '~~/i18n';
import { useSavePDF } from '~~/composables/useSavePDF';

const {isLoading, downloadPdfCV} = useSavePDF();


</script>
  