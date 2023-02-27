// @ts-ignore
import pdfWorker from '~~/utils/pdf';
import { CVLayoutId } from '~~/enums/app';


export default defineNuxtPlugin(() => {
    return {
        provide: {
            savePDF: () => {
                const element = document.getElementById(CVLayoutId);
                return pdfWorker.from(element);
            }
        }
    }
})
