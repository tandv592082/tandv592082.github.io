<script lang="ts" setup>
import { initialzeI18n } from './i18n';
import { useTheme } from './composables/useTheme';

const { initialzeTheme, currentTheme } = useTheme();
const { locale, t } = useI18n();

initialzeI18n();
initialzeTheme();

useHead({
  title: t('app.name'),
  titleTemplate: `%s - ${t('app.name')}`,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: t('app.content'),
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<template>
  <Html :class="`${currentTheme === 'dark' ? 'dark' : ''}`" :lang="locale">

  <Body class="antialiased dark:bg-black tracking-wide duration-300 font-size transition-colors text-gray-700 dark:text-gray-200">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>

  </Html>
</template>
