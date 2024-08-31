let btn_1 = document.getElementById('btn_1');
let btn_2 = document.getElementById('btn_2');
let btn_3 = document.getElementById('btn_3');
let btn_4 = document.getElementById('btn_4');
let btn_5 = document.getElementById('btn_5');
let btn_6 = document.getElementById('btn_6');
let btn_7 = document.getElementById('btn_7');
let btn_8 = document.getElementById('btn_8');
let btn_9 = document.getElementById('btn_9');
let btn_0 = document.getElementById('btn_0');
let btn_punto = document.getElementById('btn_punto');
let btn_sumar = document.getElementById('btn_sumar');
let btn_restar = document.getElementById('btn_restar');
let btn_barra = document.getElementById('btn_barra');
let btn_multiplo = document.getElementById('btn_multiplo');
let btn_backSpace = document.getElementById('btn_backSpace');
let btn_borrarTodo = document.getElementById('btn_borrarTodo');
let btn_resultado = document.getElementById('btn_resultado');
let text_visor = document.getElementById('text__visor')

let acumuladorPantalla = 0
acumuladorPantalla = text_visor.innerText 

let memoria1=0
let memoria2=0
let ingresandoSegundoNumero=false
let resultado=0

let simboloOperador=''

/*let memoria = () => {
    if (memoria1 === 0){
        acumuladorPantalla=memoria1
    } else {
        acumuladorPantalla=memoria2
    }
}*/



btn_1.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
    text_visor.innerText += '1'
    memoria1+= '1'
    } else{
        text_visor.innerText += '1';
        memoria2+= '1';
    }
});

btn_2.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '2'
        memoria1+= '2'
        } else{
            text_visor.innerText += '2';
            memoria2+= '2';
        }
});

btn_3.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '3'
        memoria1+= '3'
        } else{
            text_visor.innerText += '3';
            memoria2+= '3';
        }
});

btn_4.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '4'
        memoria1+= '4'
        } else{
            text_visor.innerText += '4';
            memoria2+= '4';
        }
});

btn_5.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '5'
        memoria1+= '5'
        } else{
            text_visor.innerText += '5';
            memoria2+= '5';
        }
});

btn_6.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '6'
        memoria1+= '6'
        } else{
            text_visor.innerText += '6';
            memoria2+= '6';
        }
});

btn_7.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '7'
        memoria1+= '7'
        } else{
            text_visor.innerText += '7';
            memoria2+= '7';
        }
});

btn_8.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '8'
        memoria1+= '8'
        } else{
            text_visor.innerText += '8';
            memoria2+= '8';
        }
});

btn_9.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '9'
        memoria1+= '9'
        } else{
            text_visor.innerText += '9';
            memoria2+= '9';
        }
});

btn_0.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '0'
        memoria1+= '0'
        } else{
            text_visor.innerText += '0';
            memoria2+= '0';
        }
});

btn_borrarTodo.addEventListener('click', () => { 
    text_visor.innerText = ''
    memoria1 = ''
    memoria2 = ''
    simboloOperador= ''

    
});

btn_sumar.addEventListener('click', () => { 
    ingresandoSegundoNumero=true
    simboloOperador='+'
    text_visor.innerText=''
    
});

btn_restar.addEventListener('click', () => { 
    ingresandoSegundoNumero=true
    simboloOperador='-'
    text_visor.innerText=''
    
});

btn_multiplo.addEventListener('click', () => { 
    ingresandoSegundoNumero=true
    simboloOperador='*'
    text_visor.innerText=''
    
});

btn_barra.addEventListener('click', () => { 
    ingresandoSegundoNumero=true
    simboloOperador='/'
    text_visor.innerText=''
    
});

btn_punto.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText += '.'
        memoria1+= '.'
        } else{
            text_visor.innerText += '.';
            memoria2+= '.';
        }    
});

btn_backSpace.addEventListener('click', () => { 
    if (ingresandoSegundoNumero===false){
        text_visor.innerText = text_visor.innerText.slice(0,-1)
        memoria1=memoria1.slice(0,-1)
        } else{
            text_visor.innerText = text_visor.innerText.slice(0,-1);
            memoria2 = memoria2.slice(0,-1);
        }    
    });

btn_resultado.addEventListener('click', () => { 
    
    if (simboloOperador=='+'){
        resultado= parseFloat(memoria1) + parseFloat(memoria2)
        text_visor.innerText = resultado
        memoria1=''
        memoria2=''
        ingresandoSegundoNumero=false
        


    }   else if (simboloOperador=='-'){
        resultado= parseFloat(memoria1) - parseFloat(memoria2)
        text_visor.innerText = resultado
        memoria1=''
        memoria2=''
        ingresandoSegundoNumero=false
    }   
        else if (simboloOperador=='-'){
        resultado= parseFloat(memoria1) - parseFloat(memoria2)
        text_visor.innerText = resultado
        memoria1=''
        memoria2=''
        ingresandoSegundoNumero=false
    }
        else if (simboloOperador=='*'){
        resultado= parseFloat(memoria1) * parseFloat(memoria2)
        text_visor.innerText = resultado
        memoria1=''
        memoria2=''
        ingresandoSegundoNumero=false
    }
        else if (simboloOperador=='/'){
        resultado= parseFloat(memoria1) / parseFloat(memoria2)
        text_visor.innerText = resultado
        memoria1=''
        memoria2=''
        ingresandoSegundoNumero=false
    }
});
