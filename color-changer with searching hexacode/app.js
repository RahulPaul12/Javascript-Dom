window.onload=()=>{
   main();
}

function main(){
    let body= document.getElementById('root');
    let btn = document.getElementById('btn');
    let output = document.getElementById('output');

    btn.addEventListener('click',function(){
        let bgcolor = getbgcolor();
        body.style.backgroundColor=output.value;
       
       
    })
}

function getbgcolor(){
    const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
    
	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}