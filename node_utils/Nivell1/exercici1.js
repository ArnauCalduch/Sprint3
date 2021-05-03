//Funció que després d'1 segon printa per consola un missatge
function printMessage (){
    setTimeout(function(){
        console.log("Hola 1 segon tard");
    },1000);
}
//Execució de la funció
printMessage();