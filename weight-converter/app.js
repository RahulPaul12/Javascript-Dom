const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    var input= document.querySelector('input');
    var convert = document.querySelector('span');

    var pound;

    if(isNaN(input.value)){
        convert.innerHTML="<p>Please Enter a valid number!</p>"
        setTimeout(() => {
            convert.innerHTML = "";
        }, 2500);
        input.value = "";
    }
    else{
        pound = Number(input.value)*2.20462;
        convert.innerText= pound.toFixed(2);
        setTimeout(() => {
            convert.innerHTML = "";
            input.value = "";
        }, 3000);
    }
})