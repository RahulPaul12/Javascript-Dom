const blueBtn = document.getElementById('blueBtn');
const orangeBtn = document.getElementById('orangeBtn');
const greenBtn = document.getElementById('greenBtn');

const jumbotron = document.getElementById('jumbotron');
const donateBike = document.getElementById('donate');
const volunteer = document.getElementById('volunteer');
blueBtn.addEventListener('click',function(){
    const jumbotron = document.getElementById('jumbotron');
     jumbotron.style.backgroundColor = '#588fbd';
     donateBike.style.backgroundColor='#ffa500';
     volunteer.style.cssText=`background-color: #31b0d5; color: white`;

})
orangeBtn.addEventListener('click',function(){
    const jumbotron = document.getElementById('jumbotron');
     jumbotron.style.backgroundColor = '#f0ad4e';
     donateBike.style.backgroundColor='#5751fd';
     volunteer.style.cssText=`background-color: black; color: white`;

})
greenBtn.addEventListener('click',function(){
    const jumbotron = document.getElementById('jumbotron');
     jumbotron.style.backgroundColor = '#87ca8a';
     donateBike.style.backgroundColor='black';
     volunteer.style.cssText=`background-color: #8c9c08; color: white`;

})

const button=document.getElementById('submitBtn');
button.addEventListener('click',function(e){
    e.preventDefault();
    const email = document.getElementById('exampleInputEmail1');
    const name = document.getElementById('example-text-input');
    const describe = document.getElementById('exampleTextarea');
    
    if(name.value.length ==0){
         name.style.borderBlockColor='red';
    }
    
     if((email.value.indexOf("@"))<1 && email.value.length==0){
        email.style.borderBlockColor='red';
    }
     if(describe.value.length==0){
        describe.style.borderBlockColor='red';
    }
    else{
        window.alert('Thank you Filling out the Form');
    }
  


});
