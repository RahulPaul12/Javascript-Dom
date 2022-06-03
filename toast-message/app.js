
let div=null;
window.onload=()=>{
   main();
}

function main(){
    let body= document.getElementById('root');
    let btn = document.getElementById('btn');
    let output = document.getElementById('output');
    let copy = document.getElementById('copy');
    btn.addEventListener('click',function(){
        let bgcolor = getbgcolor();
        body.style.backgroundColor=output.value;
        
       
    });

    copy.addEventListener('click',function(){
        navigator.clipboard.writeText(output.value);
        
        if(div !== null){
            div.remove();
            div=null;
        }
        generatemessage(`${output.value} copied`);
    });
}

function getbgcolor(){
    const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
    
	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
function generatemessage(message){
    div = document.createElement('div')
    div.innerText=message;
    document.body.appendChild(div);
    div.className='toast-message toast-in';

    div.addEventListener('click',function (){
        div.classList.remove('toast-in');
        div.classList.add('toast-out');
        div.addEventListener('animationend',function(){
            div.remove();
            div=null;
        })
    })
}