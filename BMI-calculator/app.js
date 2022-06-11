const form = document.querySelector('form')
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    let result= document.getElementById('result');

    if(height==="" || isNaN(height || weight==="" || isNaN(weight))){
        result.innerHTML="<span>Please Enter a Valid Number!</span>";
        setTimeout(()=>{
            result.innerHTML="";
        },3000);
        height.value="";
        weight.value="";
    }
    else{
        const yourBMIis = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML= yourBMIis;
    }
})