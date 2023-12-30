let calcBody=document.querySelector('.calc-body');
let btnNos=document.querySelector('#button-nos');
let btnOps=document.querySelector('#button-ops');

function createButtonsNos(){    
    for(let i=9;i>=0;i--){
        let button=document.createElement('div');
        button.className='button no';
        button.innerText=i;
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

createButtonsNos();
createButtonsOps();