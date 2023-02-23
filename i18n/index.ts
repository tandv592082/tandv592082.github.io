import vi from './vi';
import en from './en';
import { LANG_KEY } from '../enums/cache';
import { Storage } from '../utils/storage';
import { LANGS } from '../enums/setting';

export const i18nMenus = [
    {
        lang: 'vi',
        flag: 'emojione:flag-for-vietnam'
    },
    {
        lang: 'en',
        flag: 'emojione:flag-for-united-states'
    }
]

export const initialzeI18n = () => {
    const defaultLang: LANGS = 'en';
    const currentLang = Storage.load(LANG_KEY);
    const { locale } = useI18n();
    locale.value = currentLang || defaultLang;
}

export const getLanguageMessages = () => ({
    vi, en
});

