
var age = prompt("insert ur age") ;
var flag;

do{

    if (age >= 1 && age <=10){
        document.write("Child");
    }else if (age >= 11 && age <=18){
        document.write("Teenager");
    }else if (age >= 19 && age <=50){
        document.write("Grown up");
    }else if (age > 50){
        document.write("Old");
    }else{
        alert("sorry please insert positive number");
        age = prompt("insert ur age again ")
    }
    flag = confirm("do u want to isnert again");
    if(flag == true) age = prompt("insert ur age again ");

}while(age != "" && age != null && flag)


    

