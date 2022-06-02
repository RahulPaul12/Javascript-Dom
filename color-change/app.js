window.onload=()=>{
    main();
}
function main(){
 let rgb = ['red','yellow','green','skyblue','blue','crimson','aqua','grey','darkorange','hotpink']
    let root= document.getElementById('body')
let changerbtn= document.getElementById('changer')
let color=(Math.floor(Math.random()*10));
changerbtn.addEventListener('click', function(){
    
    root.style.backgroundColor=rgb[color];
    main();
});
}
