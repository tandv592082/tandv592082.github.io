const opts = {
    margin: [25, 0, 25, 0],
    image: { type: 'jpeg', quality: 1},
    html2canvas: {  useCORS: true, allowTaint: true }, // https://html2canvas.hertzen.com/configuration
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait', compressPDF: true}
}

const getPdfOptions = (lang: string) => ({
    ...opts,
    filename: lang === 'vi' ? 'DUONG_VAN_TAN_CV_vi.pdf' : 'TAN_DUONG_VAN_CV_en.pdf',
})

export default getPdfOptions;