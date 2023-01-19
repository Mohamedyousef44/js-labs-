
// using function factory

function Person (fname,money,sleepMood,healthRate){
    return {
        fname,
        money,
        sleepMood,
        healthRate,

        Sleep(hours){
            if(hours === 7) this.sleepMood = "Happy";
            else if(hours > 7) this.sleepMood = "Lazy";
            else{
                Person.sleepMood = "Tired";
            }
        },
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
        },
        Buy(items){
            let total = items * 10 ;
            this.money = this.money - total;
        }

    }
}


let student = Person("ahmed",133,"good",6);
console.log(ahmed);
student.Buy(6);
student.Sleep(10);
student.Eat(1);
console.log(ahmed);




