import { THEME_MODE } from "~~/enums/setting";

const opts = {
    margin: 1/2,
    // filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 1},
    // html2canvas: { scale: 2 }, https://html2canvas.hertzen.com/configuration
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', floatPrecision: 'smart'}
}

const getPdfOptions = (lang: string, theme: THEME_MODE) => ({
    ...opts,
    filename: lang === 'vi' ? 'DUONG_VAN_TAN_CV_vi.pdf' : 'TAN_DUONG_VAN_CV_en.pdf',
    html2canvas: {
        backgroundColor: theme === 'dark' ? '#181818' : '#f00'
    }
})

export default getPdfOptions;