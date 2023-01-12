var contact = {
}
var arr = [];

let flag = true ;


while(flag){

    let operation = prompt("welecome to your notebook \n write [a for (add)  or s for (search)]")

    switch(operation){
        case 'a':
            let n = prompt("Enter Name")
            let ph = prompt("Enter Phone")
            contact.name = n ;
            contact.phone = ph ;
            arr.push(contact) 
            break;

        case 's' :
            if(arr.length > 0){
               let na = prompt("Enter Name for search")
               let pho = prompt("Enter Phone for search")
                //searching in the array
                let i1 = arr.findIndex((c) => c.name == na);
                let i2 = arr.findIndex((c) => c.phone == pho);
                
                if(i1 == -1 && i2 == -1){
                    alert("user not exist")
                }else if(i1 == i2){
                    alert(`your contact name is ${arr[i1].name} \n your contact phone is ${arr[i1].phone}`)
                }else{
                    alert(`your 1st contact name is ${arr[i1].name} \n your 1st contact phone is ${arr[i1].phone}\n
                    your 2nd contact name is ${arr[i2].name} \n your 2nd contact phone is ${arr[i2].phone}`)
                }
                
            }else{
                alert("the notebook is empty")
            }
            break;
    }

    flag = confirm("do you waant to continue ?")

}





