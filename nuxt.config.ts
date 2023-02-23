import { getLanguageMessages } from "./i18n"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxtjs/i18n',
        'nuxt-windicss',
        'nuxt-icon',
    ],
    css: [ '~/assets/sass/app.scss' ],
    i18n: {
        vueI18n: {
            legacy: false,
            messages: getLanguageMessages()
        }
    },
    build: {
        transpile: [ '@headlessui/vue' ],
    },
})
