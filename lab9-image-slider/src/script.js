
let btns = document.querySelectorAll('.btns button');
let arr = ['#3AB0FF' , '#FD841F' , 'black' , 'purple' , 'blue' , '#36AE7C'];

function takeColor(){
    let divs = document.querySelectorAll('.card-slider div');
    for(let i = 0 ; i < divs.length ; i++){

        divs[i].style.backgroundColor = arr[i]; 
        
    }
}

takeColor();

btns.forEach(btn =>{
    btn.addEventListener('click' , (e)=>{
        if(e.target.id == 'next'){

            arr.push(arr.shift());
            takeColor()

        }else{

            arr.unshift(arr.pop());
            takeColor();

        }
    })
})










