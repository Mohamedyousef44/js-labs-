
let inputMain = document.getElementById('maininput');
let task = document.getElementById('task');
let taskInputs = document.querySelectorAll(".addtask");
let btnadd = document.getElementById('addBtn');
let deleteAll = document.getElementById('btn');


window.onload = function () {
    inputMain.focus();
  };


// add new task to the plan

btnadd.addEventListener('click' , ()=>{

    if(inputMain.value !== ""){

        let div = document.createElement('div');
        div.setAttribute("class","addtask")
        div.innerHTML = '<input type="text" class="taskinput" readonly> <span class="btnDel">x</span>';
        div.firstChild.value = inputMain.value;
        task = document.getElementById('task');
        task.appendChild(div);
        inputMain.value = "";

    }
})

// mark any task 

document.addEventListener('click',(e)=>{

    if(e.target.classList == 'taskinput'){

        e.target.classList.toggle('marked');
    }
})



// remove specific task 

document.addEventListener('click',(e)=>{

    if(e.target.classList == 'btnDel'){

        e.target.parentNode.remove();
    }
})


// removing all tasks

deleteAll.addEventListener('click',function(){

    task.innerHTML = " ";
    inputMain.value = "";

})




