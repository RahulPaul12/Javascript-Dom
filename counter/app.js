let decreaseBtn = document.getElementById('decrease-btn');
let increaseBtn = document.getElementById('increase-btn');
let counter = document.getElementById('counter-machine');
let count =0;
decreaseBtn.addEventListener('click',function(){
    count--;
    counter.innerHTML=count;
    console.log("helloooooo");
    if (count < 0) {
        counter.style.color = "red";
        console.log(counter);
    }else if (count > 0) {
        counter.style.color = "green";
    }
    else {
        counter.style.color = "#fff"
    }
});

increaseBtn.addEventListener('click',function(){
    count++;
    counter.innerHTML=count;
    console.log("hello");
    if (count < 0) {
        counter.style.color = "red";
        console.log(counter);
    }else if (count > 0) {
        counter.style.color = "green";
    }else if(count==0) {
        counter.style.color = "#fff"
    }
})