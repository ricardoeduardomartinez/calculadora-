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
let btn_numeral = document.getElementById('btn_numeral');
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

let simboloOperador=null

let memoria = () => {
    if (memoria1 === 0){
        acumuladorPantalla=memoria1
    } else {
        acumuladorPantalla=memoria2
    }
}



btn_1.addEventListener('click', () => { 
    text_visor.innerText += 1
    return
});

btn_2.addEventListener('click', () => { 
    text_visor.innerText += 2
    return
});

btn_3.addEventListener('click', () => { 
    text_visor.innerText += 3
    return
});

btn_4.addEventListener('click', () => { 
    text_visor.innerText += 4
    return
});

btn_5.addEventListener('click', () => { 
    text_visor.innerText += 5
    return
});

btn_6.addEventListener('click', () => { 
    text_visor.innerText += 6
    return
});

btn_7.addEventListener('click', () => { 
    text_visor.innerText += 7
    return
});

btn_8.addEventListener('click', () => { 
    text_visor.innerText += 8
    return
});

btn_9.addEventListener('click', () => { 
    text_visor.innerText += 9
    return
});

btn_0.addEventListener('click', () => { 
    text_visor.innerText += 0
    return
});

btn_borrarTodo.addEventListener('click', () => { 
    text_visor.innerText = 0
    return
});

btn_sumar.addEventListener('click', () => { 
    memoria1=acumuladorPantalla
    acumuladorPantalla=0
    simboloOperador='+'
    text_visor.innerText = '+'
    return
});

btn_restar.addEventListener('click', () => { 
    memoria1=acumuladorPantalla
    acumuladorPantalla=0
    simboloOperador='-'
    text_visor.innerText = '-'
    return
});

btn_multiplo.addEventListener('click', () => { 
    memoria1=acumuladorPantalla
    acumuladorPantalla=0
    simboloOperador='*'
    text_visor.innerText = '*'
    return
});

btn_barra.addEventListener('click', () => { 
    memoria1=acumuladorPantalla
    acumuladorPantalla=0
    simboloOperador='/'
    text_visor.innerText = '/'
    return
});

btn_barra.addEventListener('click', () => { 
    
    text_visor.innerText += "."
    return
});

btn_backSpace.addEventListener('click', () => { 
    
    return
});

btn_resultado.addEventListener('click', () => { 
    
    text_visor.innerText = parseFloat((memoria1)(simboloOperador)(acumuladorPantalla))

    return
});
