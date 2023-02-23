import vi from './vi';
import en from './en';
import { LANG_KEY } from '~~/enums/cache';
import { LANGS } from '~~/enums/setting';
import { Storage } from '~~/utils/storage';

const { locale } = useI18n();

export const getLanguageMessages = () => ({
    vi, en
})

export const initI18n = () => {
    const defaultLang: LANGS = 'en';
    const currentLanguage = Storage.load(LANG_KEY);
    locale.value = currentLanguage || defaultLang;
}

export const setLang = (lang: LANGS) => {
    locale.value = lang;
}