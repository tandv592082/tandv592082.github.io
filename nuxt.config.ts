import { getLanguageMessages } from "./i18n"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        'nuxt-windicss',
        'nuxt-icon',
    ],
    css: [ '~/assets/sass/app.scss' ],
    i18n: {
        locales: ['en', 'vi'],
        defaultLocale: 'en',
        vueI18n: {
            legacy: false,
            locale: 'en',
            messages: getLanguageMessages()
        }
    },
    build: {
        transpile: [ '@headlessui/vue' ],
    },
})
