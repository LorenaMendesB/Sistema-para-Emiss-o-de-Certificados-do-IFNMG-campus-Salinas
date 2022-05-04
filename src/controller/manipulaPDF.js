import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export function donwloadPDF(texto, data, nome){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    let body = texto.replace(/{nome}/gi, nome);

    var docDefinition = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        content: [
            {
                text: '',
                absolutePosition: {x: 50, y: 250},
                fontSize: 17,
            }, 
            {
                text: '',
                absolutePosition: {y: 350},
                alignment: 'right',
                fontSize: 17,
            },
          ]
    }
    docDefinition.content[0].text = body;
    docDefinition.content[1].text = data;
    pdfMake.createPdf(docDefinition).download();
}