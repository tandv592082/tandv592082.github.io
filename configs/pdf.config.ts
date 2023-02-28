const opts = {
    margin: [25, 0, 25, 0],
    image: { type: 'jpeg', quality: 1},
    html2canvas: {  useCORS: true, allowTaint: true }, // https://html2canvas.hertzen.com/configuration
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait', compressPDF: true}
}

const getPdfOptions = (lang: string) => ({
    ...opts,
    filename: lang === 'vi' ? 'DUONG_VAN_TAN_CV_vi.pdf' : 'TAN_DUONG_VAN_CV_en.pdf',
});

const pageBreakSettings = {
    vi: [30],
    en: [31]
}



const insertBefore = (refNode: any) => {
    const div = document.createElement("div");
    div.className = 'html2pdf__page-break';
    refNode.before(div);
}

export const removeAllPageBreakElms = () => window?.document && window.document.querySelectorAll(".html2pdf__page-break").forEach(e => e.remove());

export const appendPageBreak = (lang: string) => {
    // @ts-ignore
    const positions = pageBreakSettings[`${lang}`];
    console.log(positions);
    const pElms = document.querySelectorAll('p');
    pElms.forEach((p, index) => positions.includes(index) && insertBefore(p))

}

export default getPdfOptions;