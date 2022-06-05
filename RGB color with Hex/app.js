
let div=null;
window.onload=()=>{
   main();
}

function main(){
    let body= document.getElementById('root');
    let btn = document.getElementById('btn');
    let output = document.getElementById('output');
    let copy = document.getElementById('copy');
    let ouput2= document.getElementById('output2');
    btn.addEventListener('click',function(){
        let bgcolor = getbgcolor();
        body.style.backgroundColor=bgcolor;
        output.value=bgcolor;
        let bgcolor2 = convertHexToRgbA(bgcolor);
        ouput2.value= bgcolor2;
       
    });
    function convertHexToRgbA(hexVal) {
        var ret;
          
        // If the hex value is valid.
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexVal)) {
              
            // Getting the content after '#',
            // eg. 'ffffff' in case of '#ffffff'
            ret = hexVal.slice(1);
              
            // Splitting each character
            ret = ret.split('');
              
            // Checking if the length is 3
            // then make that 6
            if(ret.length == 3) {
                var ar = [];
                ar.push(ret[0]); 
                ar.push(ret[0]);
                ar.push(ret[1]);
                ar.push(ret[1]);
                ar.push(ret[2]);
                ar.push(ret[2]);
                ret = ar;
            }
              
            // Starts with '0x'(in hexadecimal)
            ret = '0x'+ ret.join('');
              
            // Converting the first 2 characters
            // from hexadecimal to r value
            var r = (ret>>16)&255;
              
            // Converting the second 2 characters
            // to hexadecimal to g value
            var g = (ret>>8)&255;
              
            // Converting the last 2 characters
            // to hexadecimal to b value
            var b = ret&255;
              
            // Appending all of them to make
            // the RGBA value
            return [r, g, b].join(',')+',1';
        }
    }

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