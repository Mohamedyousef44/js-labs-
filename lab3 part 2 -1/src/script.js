
let numbers = [];
let sum = 0 ;
let avg = 0 ;
let flag = true;

while(flag){

    let num = prompt("How many nums you want to sum ?");

    let arrlen = Number(num);

    for(let i = 0 ; i < arrlen ; i++){
        numbers[i] = Number(prompt(`insert num number ${i+1}`)) 
    }

    for(let j = 0 ; j < arrlen ; j++){
        sum += numbers[j];
    }

    avg = sum/(numbers.length)  

    confirm(`the SUM of numbers is : ${sum} and the AVG is : ${avg}`)

    flag = confirm("Do u want to do it again");

}





