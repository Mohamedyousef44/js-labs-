var num = prompt("please insrt number of your clock ");
var flag = true ;
while (num != null && flag){

    if(num <= 12 && num >= 0){
        document.write(`${num} am`)
        flag = false;

    }else if(num > 12 && num <= 24){
        num = num -12 ;
        document.write(`${num} pm`)
        flag = false;

    }else{
        alert("please insert num between 0 : 24 ")
        num = prompt("please insrt number of your clock ");
    }
}
