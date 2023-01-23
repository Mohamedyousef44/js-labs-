// parent class 

class Person {
    constructor(fname,money,sleepMood,healthRate){
        this.fname = fname;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }
    Sleep(hours) {
        if(hours === 7) this.sleepMood = "Happy";
        else if(hours > 7) this.sleepMood = "Lazy";
        else{
            Person.sleepMood = "Tired";
        }
    }
    
    Eat(meals){
        switch(meals){
            case 3 :this.healthRate = 100;
                    break;
            case 2 :this.healthRate = 70;
                    break;
            case 1 :this.healthRate = 50;
                    break;
            default :console.log("your are so hungry or you will die soon")
                    break;
        }
    }
    
    Buy(items){
        let total = items * 10 ;
        this.money = this.money - total;
    }

}

// child class 
class Employee extends Person {
    constructor(fname,id,email,salary,isManager,money,sleepMood,healthRate,workMood){
        super(fname,money,sleepMood,healthRate);
        this.id = id;
        this.email = email;
        this.workMood = workMood ;
        this.salary = salary < 1000 ? 1000 : salary ;
        this.isManager = isManager ;
    }

    Work(hours){
        if(hours === 8) this.workMood = "Happy";
        else if(hours > 8) this.workMood = "Tired";
        else{
            Person.workMood = "Lazy";
        }
    }
}

// class office that has objects from Employee class
class Office {
    constructor(name , employees){
        this.name = name ;
        this.employees = employees ;
    }

    getAllEmployees () {
        let count = 1;
        for(let x of this.employees ){
            console.log(`Emp ${count}`)
            console.log( x )
            count++;
        }
    }

    getEmployee(id){
        const emp = this.employees.find(obj => obj.id === id)
        return emp ;
    }

    hire(fname,id,email,salary,isManager,money){
        let emp1 = new Employee(fname,id,email,salary,isManager,money)
        this.employees.push(emp1);
    }

    fire(id){
        const emp = employees.find(obj => obj.id === id)
        const idx = employees.indexOf(emp);
        return employees.splice(idx , idx-1);
    }
}



// main program 

let flag = true ;

while(flag){
    let officeName =  prompt("Enter Office Name");
    let officEmps = [];
    var off1 = new Office(officeName,officEmps);

    let menu = true ;

    while(menu){
        let Empstatus = prompt(`Hi ${off1.name}\nAdd New Emp ----> Press A\nRemove Emp ----> Press R\nGet All Emps ----> Press G\nGet Specific Emp ----> Press S\nQuit ----> Press Q`)
        let ch = Empstatus.toLocaleLowerCase();
        switch (ch) {
            case 'a':
                let isManager = prompt("Is he a manger?\n write true or false");
                let name = prompt("What is his name ?");
                let id = Number (prompt("What is his id ?"));
                let email = prompt("What is his email ?");
                let sal = Number(prompt("What is his salary ?"));
                let mon = sal ;
                let newEmp = new Employee(name,id,email,sal,isManager,mon);
                off1.employees.push(newEmp);
                break;
            case 'r':
                if(off1.employees.length === 0){
                    alert("you dont have any employee yet")
                }else{
                    let fireId = Number(prompt("The Id of the fired Emp"));
                    let checkArr = off1.fire(fireId);
                    if(checkArr.length > 0){
                        alert(`Emp is deleted and his name is ${checkArr[0].name}`)
                    }else{
                        alert("`Emp is not found")
                    }
                }   
                break;
            case 'g':
                off1.getAllEmployees();
                break;
            case 's':
                let empId = Number(prompt("Enter His Id"));
                let idStatues = off1.getEmployee(empId);
                if(idStatues === undefined){
                    alert("Emp is not exist")
                }else{
                    console.log(idStatues);
                }
                break;
            case 'q':
                menu = false ;
                flag = false ;
                break;
        }
    }
}






