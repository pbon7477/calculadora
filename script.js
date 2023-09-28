// funcionando ------0.3.0---- 

const pantalla = document.getElementById('pantalla');

const agregar = (valor)=>{
    pantalla.value += valor;
}


const borrarA= ()=>{
    const valorActual = pantalla.value;

    if(valorActual > 0){
        pantalla.value = valorActual.slice(0,-1);
    }
    else{
        pantalla.value = '';
    }
}

const borrarC = ()=>{
    pantalla.value = '';
}


const calcular = ()=>{
    //elimina espacios vacios al principio y al final
    const valorPantalla = pantalla.value.trim();

   if(valorPantalla === ''){
    pantalla.value = '';
    return;
   }
        
        try{
            const resultado = eval(valorPantalla)
            pantalla.value = resultado;
            
        }
        
        catch(error){
            pantalla.value = '..Error';
        }
} 








//------------------------------------------

///// funcionando 0.2

/*


//Esto agrega el valor del botton que toquemos a la pantalla
const agregar = (valor)=>{
    document.getElementById('pantalla').value += valor;
}

let pantalla = document.getElementById('pantalla');

const borrar = ()=>{
    
    const valorActual = pantalla.value;

    if(valorActual.length > 0){
        //toma todos los caracteres hasta el penultimo
        const nuevoValor = valorActual.slice(0, -1); 
        pantalla.value = nuevoValor;
    }

}

const borrarA = ()=>{
    borrar();
}


const borrarC = ()=>{
      pantalla.value = '';
}



const calcular = ()=>{
    valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}





*/
//------------------------------------








/*
// funcionando 0.1


//Esto agrega el valor del botton que toquemos a la pantalla
const agregar = (valor)=>{
    document.getElementById('pantalla').value += valor;
}

const borrar = ()=>{
    document.getElementById('pantalla').value = '';
}

const calcular = ()=>{
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}

*/