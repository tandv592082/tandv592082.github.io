// @ts-ignore
import pdfWorker from '~~/utils/pdf';
import { THEME_MODE } from '~~/enums/setting';
import getPdfOptions from '~~/configs/pdf.config';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            savePDF: (elementID: string, lang: string, theme: THEME_MODE) => {
                const element = document.getElementById(elementID);
                return pdfWorker.set(getPdfOptions(lang)).from(element).save();
            }
        }
    }
})
