import { Storage } from "~~/utils/storage";
import { LANG_KEY } from "~~/enums/cache";

export const useLang = () => {
    const { locale, t } = useI18n();


    const switchLanguage = (lang: string) => {
        locale.value = lang;
        Storage.save(LANG_KEY, locale.value);
        useHead({
            title: t('cv.persionalInfo.fullname'),
            titleTemplate: `%s CV - ${t('cv.persionalInfo.position')}`,
        })
    }

    return {
        switchLanguage, 
    }
}