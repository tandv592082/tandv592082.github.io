<script lang="ts" setup>
import { initialzeI18n } from './i18n';
import { useTheme } from './composables/useTheme';


const { initialzeTheme, currentTheme } = useTheme();
const { locale, t } = useI18n();

initialzeI18n();
initialzeTheme();



useHead({
  title: t('cv.persionalInfo.fullname'),
  titleTemplate: `%s CV - ${t('cv.persionalInfo.position')}`,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: `${t('cv.persionalInfo.fullname')} - ${t('cv.persionalInfo.position')}`,
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<template>
  <Html :class="`${currentTheme === 'dark' ? 'dark' : ''}`" :lang="locale">

  <Body class="antialiased overflow-auto dark:bg-black tracking-wide font-size  text-gray-700 dark:text-gray-200">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>

  </Html>
</template>
