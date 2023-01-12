
let result = 0;
let flag = true;
let resultFlag = true;

while(flag){

    let num1 = prompt("insert 1st num")
    let num2 = prompt("insert 2nd num")
    let op = prompt("write your operation [+,*,-,/,%]")

    result = operation (num1 , num2 , op)

    alert(`the result is = ${result}`)

    flag = confirm("do you want to continue ?")

    if (flag == true){

        resultFlag = confirm("do you want to add on prev result ?")

            if(resultFlag == true){

                op = prompt("write your operation [+,*,-,/,%]")
                num2 = prompt("insert 2nd num")
                result = operation (result , num2 , op)
                alert(`the result is = ${result}`)

            }  
    }

}



function operation (num1 , num2 , op){

    let result = 0 ;
    switch(op){
        case '+' :
            result = Number(num1) + Number(num2);
            break;
        
        case '*' :
            result = Number(num1) * Number(num2);
            break;
        
        case '-' :
            result = Number(num1) - Number(num2);
            break;

        case '/' :
            result = Number(num1) / Number(num2);
            break;

        case '%' :
            result = Number(num1) % Number(num2);
            break;
    }

    return result ;

}