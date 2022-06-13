const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const display = document.getElementById('display');
const GbBtn8 = document.getElementById('8gb-btn');
const GbBtn16 = document.getElementById('16gb-btn');
const memorycost = document.getElementById('memory-cost');
const storagecost = document.getElementById('storage-cost');
const ssd256 = document.getElementById('256gb-ssd-btn');
const ssd512 = document.getElementById('512gb-ssd-btn');
const ssd1tb = document.getElementById('1tb-ssd-btn');
const Aug25 = document.getElementById('25-aug');
const Aug21 = document.getElementById('21-aug');
const deliverycost = document.getElementById('delivery-cost');

const cupon = document.getElementById('coupon-code').value;
const cuponBtn = document.getElementById('coupon-btn');
img1.addEventListener('click',function(){
    display.src='./image/mac-1.jpg';
});
img2.addEventListener('click',function(){
    display.src='./image/mac-2.png';
});
img3.addEventListener('click',function(){
    display.src='./image/mac-3.png';
});

GbBtn8.addEventListener('click',function(){
    memorycost.innerText='0';
    totalprice();
});
GbBtn16.addEventListener('click',function(){
    memorycost.innerText='180';
    totalprice();
})
ssd256.addEventListener('click',function(){
    storagecost.innerText='0';
    totalprice();
});
ssd512.addEventListener('click',function(){
    storagecost.innerText='100';
    totalprice();
});
ssd1tb.addEventListener('click',function(){
    storagecost.innerText='180';
    totalprice();
});

Aug25.addEventListener('click',function(){
    deliverycost.innerText='0';
    totalprice();
})
Aug21.addEventListener('click',function(){
    deliverycost.innerText='20';
    totalprice();
})

function totalprice(){
    let cost =1299+ parseInt(memorycost.innerText)+parseInt(storagecost.innerText)+parseInt(deliverycost.innerText);
    document.getElementById('total-price').innerText=cost;
    document.getElementById('total').innerText=cost;
}

cuponBtn.addEventListener('click',function(){
    const cupon = document.getElementById('coupon-code').value;
    console.log(cupon);
    let time =0;
    
    if(cupon === 'stevekaku'){
        if(time<=1){
        console.log('done');
        let total= document.getElementById('total').innerText;
        total=total- (total*(0.25));
       document.getElementById('total').innerText=total;
       time+=1;
       document.getElementById('coupon-btn').disabled=true;
       document.getElementById('invalid').innerText='Congratulation! Code Applied';
       document.getElementById('invalid').style.color='red';
        }
    }
    else if(cupon !== 'stevekaku'){
       document.getElementById('invalid').innerText='Invalid Code !';
       document.getElementById('invalid').style.color='red';
       setTimeout(()=>{
        document.getElementById('invalid').innerText='';
        
       },3000) 
       
    };

    document.getElementById('coupon-code').value='';
})