function counter(){
   let text = document.getElementById('textarea').value;

   let counter =document.getElementById('counter');
   counter.innerText=text.length;
   console.log(text.length);
}
