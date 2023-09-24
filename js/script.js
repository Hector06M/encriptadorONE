const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munheco = document.getElementById("munheco");
const rightinfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    munheco.classList.add("oculto");
    ingresoTexto.value = ""
    rightinfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    munheco.style.display = "block";
    rightinfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != "") {
        function encriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++) {
                if (newText.includes(reemplazar[i][0])) {
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newText;
        };
    } else {
        alert("Ingrese texto a encriptar");
        reset();
    }
    
    // const textoEncriptado = encriptar(texto);

    remplace(encriptar(texto));

    mensajeFinal.innerHTML = encriptar(texto);

});
botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != "") {
        function desencriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++) {
                if(newText.includes(reemplazar[i][1])) {
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
            return newText;
        };
        
    }else {
        alert("Ingrese texto a desencriptar");
        reset();
    }
    
    remplace(desencriptar(texto));

});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado")
    reset();
})