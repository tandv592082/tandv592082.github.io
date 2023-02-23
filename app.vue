<script lang="ts" setup>
import { initialzeI18n } from './i18n';
import { useTheme } from './composables/useTheme';

const { initialzeTheme, currentTheme } = useTheme();
const { locale } = useI18n();

initialzeI18n();
initialzeTheme();
</script>

<template>
  <Html :class="`${currentTheme === 'dark' ? 'dark' : ''}`" :lang="locale">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    </Body>
    </Html>
</template>
