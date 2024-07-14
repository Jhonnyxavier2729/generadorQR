const contenedorQR = document.getElementById("contenedor-qr");
const formulario = document.getElementById("formulario");

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    const texto = document.getElementById("input").value;
    if (texto) {
        QR.makeCode(texto);
    }
});