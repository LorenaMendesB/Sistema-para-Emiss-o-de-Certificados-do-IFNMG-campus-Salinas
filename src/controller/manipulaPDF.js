import pdfMake from 'pdfmake/build/pdfmake'
export default function donwloadPDF(texto, data, nome){
    let body = texto.replace(/{nome}/gi, nome);
    let docDefinition = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        content: [
            {
                image: '../assets/modeloBackground.png',
                width: 839,
                alignment: 'center',
            },
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
            }
          ]
    }
    docDefinition.content[1].text = body
    docDefinition.content[2].text = 'Salinas - MG, ' + data;
    pdfMake.createPdf(docDefinition).print();
}