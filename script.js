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
        if(ops[i]==='=') button.className+=' eq';        
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
            if(b==0) return undefined;
            else    return divide(a, b);
        default:
            return 'Invalid operator. Press AC to restart.';
    }
}

function updateDisplay(ans){
    disp.innerText=ans;
}

let nums,oprtr;
nums=[];
oprtr=[];
let currentNum = '';

createButtonsNos();
createButtonsOps();

let buttons=document.querySelectorAll('.button');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.className==='button no'||button.className==='button no zero'){
            currentNum += button.innerText;
            updateDisplay(currentNum);
        } 
        else if(button.className==='button ops' || button.className === 'button ops eq') {
            nums.push(Number(currentNum));
            currentNum = '';
            if(nums.length === 2) {
                let ans = operate(nums[0], nums[1], oprtr[0]);
                if (ans !== undefined) {
                    updateDisplay(ans);
                    nums = [ans];
                } else {
                    updateDisplay('Error: Division by zero');
                }
                oprtr = [];
            }
            if(button.innerText !== '=') oprtr.push(button.innerText);
        }

        if(button.classList.contains('clear')){
            updateDisplay(0);
            nums=[];
            oprtr=[];
            currentNum = '';
        }
    });
});
