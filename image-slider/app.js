(function (){
    const image=[
        "image-0",
        "image-1",
        "image-2",
        "image-3",
        "image-4"
    ];
    const buttons = document.querySelectorAll('.button');
    let container = document.querySelector('.container');
    let count=0;

    buttons.forEach(function(button){
       button.addEventListener('click', function(e){
           if(button.classList.contains('fa-chevron-left')){
               count--;
           
           if(count<0){
               count= image.length-1;
           }
           console.log(count);
           container.style.backgroundImage= `url('./image/${image[count]}.jpg')`;
        }
           if(button.classList.contains('fa-chevron-right')){
            count++;
        
        if(count>image.length-1){
            count=0 ;
        }
        container.style.backgroundImage= `url('./image/${image[count]}.jpg')`
    }
       })
    })

})();