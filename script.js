let calcBody=document.querySelector('.calc-body');
let btnNos=document.querySelector('#button-nos');
let btnOps=document.querySelector('#button-ops');
let disp=document.querySelector('#display');

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

function operate(a,b,oprtr){   
    switch (oprtr) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Invalid operator';
    }
}

let nums,oprtr;
nums=[];
oprtr=[];

createButtonsNos();
createButtonsOps();

let buttons=document.querySelectorAll('.button');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.className==='button no') nums.push(Number(button.innerText));
        else if(button.className==='button ops') oprtr.push(button.innerText); 
    });
});
