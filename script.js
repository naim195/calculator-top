let calcBody=document.querySelector('.calc-body');
let btnNos=document.querySelector('#button-nos');
let btnOps=document.querySelector('#button-ops');
let button=document.createElement('div');

const buttonOrder=[7, 8, 9, 4, 5, 6, 1, 2, 3, 0,'.']
function createButtonsNos(){    
    for(let i=0;i<buttonOrder.length;i++){
        let button=document.createElement('div');
        button.className='button no';
        button.innerText=buttonOrder[i];
        if(i==buttonOrder.length-2) button.className+=' zero';
        btnNos.appendChild(button);
    }
    
}

function createButtonsOps(){
    let ops=['/','*','-','+','='];
    for(let i=0;i<5;i++){
        let button=document.createElement('div');
        button.className='button ops';
        button.innerText=ops[i];
        btnOps.appendChild(button);
    }
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}



createButtonsNos();
createButtonsOps();
