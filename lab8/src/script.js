
let inputMain = document.getElementById('maininput');
let task = document.getElementById('task');
let taskInputs = document.querySelectorAll(".addtask");
let btnadd = document.getElementById('addBtn');
let deleteAll = document.getElementById('btn');

let taskArray = [];


// get data from local storage if exists

getLocal();


// function create element and add it to the an array

function addToArray(text){

    let task = {
        id : Date.now(),
        value :  text ,
        marked : 'no',
    }

    taskArray.push(task);

    createElement(taskArray);

}


// function to add element to page

function createElement(taskArray){

    task.innerHTML = "";

    taskArray.forEach(element =>{

        let div = document.createElement('div');
        div.setAttribute("class","addtask");
        div.setAttribute("task-id", element.id);

        if(element.marked === 'yes'){

            div.innerHTML = '<input type="text" class="taskinput marked" readonly> <span class="btnDel">x</span>';

        }else{

            div.innerHTML = '<input type="text" class="taskinput" readonly> <span class="btnDel">x</span>';
        }

        div.firstChild.value = element.value;
        task.appendChild(div);
        inputMain.value = "";
    })
}

// function to add to local storage 

function setLocal(taskArray){

    localStorage.setItem('taskList' , JSON.stringify(taskArray));

}

// function to retrieve data from local storage

function getLocal(){

    let check = localStorage.getItem('taskList');

    if(check){

        taskArray =  JSON.parse(check);
        createElement(taskArray);
    }
}


window.onload = function () {
    inputMain.focus();
  };


// add new task to the plan

btnadd.addEventListener('click' , ()=>{

    if(inputMain.value !== ""){

        addToArray(inputMain.value);

        setLocal(taskArray)

    }
})

// mark any task 

document.addEventListener('click',(e)=>{

    if(e.target.classList == 'taskinput'){

        let id = e.target.parentElement.getAttribute("task-id");

        taskArray[searchIds(id)].marked = 'yes';

        setLocal(taskArray)

        e.target.classList.toggle('marked');

    }
})



// remove specific task 

document.addEventListener('click',(e)=>{

    if(e.target.classList == 'btnDel' ){

       let id = e.target.parentElement.getAttribute("task-id");

       if(searchIds(id) == 0){

            taskArray.shift();
            
       }else{

        taskArray.splice(searchIds(id),searchIds(id));

       }

        setLocal(taskArray);
        e.target.parentNode.remove();
    }
})


// removing all tasks

deleteAll.addEventListener('click',function(){

    task.innerHTML = " ";
    localStorage.clear();
    taskArray = [] ;
    inputMain.value = "";

})




// function to search for ids in taskarray

function searchIds(id){

    for(let i = 0 ; i < taskArray.length ; i++){

        if(taskArray[i].id == id){
            return i ;
        }

    }

    return -1;
}