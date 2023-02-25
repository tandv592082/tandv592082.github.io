import { ref } from 'vue';
import { useTheme } from './useTheme';

const isLoading = ref(false);

export const useSavePDF = () => {
    const { $savePDF } = useNuxtApp();
    const { locale } = useI18n();

    const downloadPdfCV = async () => {
        const { currentTheme } = useTheme();
        isLoading.value  = true;
        await $savePDF('__cv', locale.value, currentTheme.value);
        isLoading.value = false;
    }

    return {
        isLoading,
        downloadPdfCV
    }
}