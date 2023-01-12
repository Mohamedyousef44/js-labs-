

let flag = true;

while(flag){
    let userName = prompt("insert user name");
    let userPass = prompt("insert password");

    if(userName =="admin" && userPass == "421$$"){
        alert("welcome login success")
        flag = false;

    }else{
        alert("data you enterd is wrong")
        flag = confirm("do you want to insert again")
}
}