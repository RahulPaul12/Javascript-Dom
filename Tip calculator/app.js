
document.getElementById("tip-container").style.display = "none";
document.getElementById('tip').style.display="none"
let btn= document.getElementById("calculate-btn");
let billamount= document.getElementById('bill').value='';
let servicequality= document.getElementById('service').value='';
let people= document.getElementById('numOfPeople').value='';
btn.addEventListener('click',function(){
   
let billamount= document.getElementById('bill').value;
let servicequality= document.getElementById('service').value;
let people= document.getElementById('numOfPeople').value;
    if(people===""|| people<=1){
        people=1;
        document.getElementById('each').style.display='none';
    }
    else{
        document.getElementById('each').style.display='block';

    }
    if(billamount==="" || servicequality==0){
           alert("Please enter required field data!")
           alert.style.color="red";

    }
    console.log(billamount);
    console.log(servicequality);
    var totalAmount = (billamount * servicequality) / people;
    totalAmount = Math.round(totalAmount * 100) / 100;
    totalAmount = totalAmount.toFixed(2);
    document.getElementById('tip-container').style.display="block";
    document.getElementById('tip').style.display="block";
    console.log(totalAmount);
    document.getElementById('tip').innerHTML=totalAmount;
    
})
