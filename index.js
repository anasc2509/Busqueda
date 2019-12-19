function buscar(){
    var colores=["rojo", "azul", "verde"];
    var micolor=document.getElementById("color").value;
    var colorEncontrado=false;
    for(i=0;i<colores.length;i++){
        if(colores[i]==micolor){
        colorEncontrado=true;
        }
    }
    if(colorEncontrado){
        //document.getElementById("buscar").value == "";
        document.getElementById("descripcion").value=" Palabra encontrada";
    }
    else{
        document.getElementById("descripcion").value=" Palabra NO encontrada";
    }
    if(document.getElementById("buscar").value == ""){
        document.getElementById("descripcion").value = "Debe escribir una palabra a buscar";
    }

}

function salir(){
    window.close();
}

