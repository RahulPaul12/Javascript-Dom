 var addbtn = document.getElementById('add');
  var task = document.getElementById('task-add');

  var taskboard = document.getElementById('taskboard');
   
       
  function load(){
  if(taskboard.children.length==0){
    
    taskboard.innerHTML=`<p>You have no task !</p>`}
  addbtn.addEventListener('click',function(){
    if(taskboard.children.length>=0){
        
        taskboard.children[0].textContent='';
    }
       if(taskboard.children.length>=4){
        taskboard.classList.add('overflow');
       }
    if(task.value===""){
        alert("Please add one task !")
    }
    else{
        
        var div = document.createElement('div');
      
    div.innerHTML=`<div id="all"><div id="task">${task.value}</div> <button onclick="calldelete(event)">X</button></div>`;
    taskboard.appendChild(div);
    task.value ='';
    }
    
  })
  
 
}
load();

 
function calldelete(event){
  event.target.parentElement.remove()
}