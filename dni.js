let dniHTML=document.getElementById('dni');
//console.log(dniHTML);
let botonCalcula=document.getElementById('calcula');
//console.log(botonCalcula);

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
 botonCalcula.addEventListener('click', ()=>{
     let dniIntro=dniHTML.value;
     let dniLetra=dniIntro.slice(-1);
     alert(dniLetra);
     let dniNumero=dniIntro.slice(0,-1);
     alert(dniNumero);
     if (dniNumero<=99999999&&dniNumero>=0){
         let resto=dniNumero%23;
         let letra=letras[resto];
         if(letra==dniLetra.toUpperCase()){
             alert('Letra correcta')
         } else {
             alert('Letra incorrecta')
         }
        }
        else{
       alert('numero incorrecto')}
alert(isNaN(dniLetra)); 

 });

 function validaLetra(dniLetra) {
    let esLetra=isNaN(dniLetra);
    let esMayus= (dniLetra==dniLetra.toUpperCase())
    return (esLetra&&esMayus)
 }
