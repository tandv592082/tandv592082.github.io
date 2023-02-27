import { ref } from 'vue';
import { useTheme } from './useTheme';
import { useLang } from './useLang';
import getPdfOptions from '~~/configs/pdf.config';
import { wait } from '~~/utils/fn';
import { THEME_MODE } from '~~/enums/setting';

const isLoading = ref(false);
const message = ref<String | null>(null);

export const useSavePDF = () => {
    const { $savePDF } = useNuxtApp();
    const { locale, t } = useI18n();
    const { currentTheme, setTheme } = useTheme();
     const { switchLanguage } = useLang();

    const downloadPdfCV = async (lang: string) => {
        try {
            isLoading.value = true;
            
            const tempTheme: THEME_MODE = currentTheme.value;
            const tempLang = locale.value;

            // changing theme to dark and language to specific input language
            if (tempTheme === 'dark') {
                message.value = t('system.messages.savePDF.changeThemeLight');
                setTheme('light');
                await wait(500);
            }

            if (locale.value !== lang) {
                message.value = t(`system.messages.savePDF.changeLang-${lang}`);
                switchLanguage(lang);
                await wait(500);
            }

            const opts = getPdfOptions(lang);
            await $savePDF().set(opts).save();

            //return theme and current user's language
            if (tempTheme === 'dark') {
                message.value = t('system.messages.savePDF.changeThemeDark');
                setTheme(tempTheme);
            }

            if (tempLang !== locale.value) {
                message.value = t(`system.messages.savePDF.changeLang-${tempLang}`);
                switchLanguage(tempLang);
            }

            message.value = null
            isLoading.value = false;
        } catch (_e) {
            console.log(_e);
            message.value = `${t('system.messages.savePDF.error')}: ${t('system.messages.savePDF.errorMsg')}`
        } finally {
            isLoading.value = false;
        }

    }

    const isErrorMsg = () => message.value?.includes(t('system.messages.savePDF.error'))

    return {
        isLoading,
        message,
        downloadPdfCV,
        isErrorMsg
    }
}