import { Storage } from "~~/utils/storage";
import { LANG_KEY } from "~~/enums/cache";

export const useLang = () => {
    const { locale } = useI18n();


    const switchLanguage = (lang: string) => {
        locale.value = lang;
        Storage.save(LANG_KEY, locale.value)
    }

    return {
        switchLanguage, 
    }
}