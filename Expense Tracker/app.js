function updateName(){
    const name = document.getElementById('name_input').value;
    document.getElementById('name_header').innerText=name;
    document.getElementById('name_header').style.color='red';
}

const button = document.getElementById('submit_button');
button.addEventListener('click',function(){
    const itemName = document.getElementById('item_text').value;
    const itemPrice = document.getElementById('item_price').value;
    

    let tr = document.createElement('tr');
    tr.innerHTML=`<td>${itemName}</td>
            <td class="price">${itemPrice}</td>
            <td ><button class="btn btn-danger" onclick='Delete(event)'>Delete</button></td>`;
            document.getElementById('table_body').appendChild(tr);
      tottalcost()
            
})

function tottalcost(){
  const allcost= document.getElementsByClassName('price');
  
  let cost =0;
  for(let i=0;i<allcost.length;i++){
    const elem = allcost[i];
    cost+=parseInt(elem.innerText);
    
  }
  document.getElementById('total_cost').innerText=cost;
  
}
function Delete(event){
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    tottalcost();
}
