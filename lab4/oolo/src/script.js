
// using oolo
let Person ={
    init(fname,money,sleepMood,healthRate){
        this.fname = fname;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    },

    Sleep(hours) {
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

let prof = Object.create(Person);
prof.init("noha",1000,"good",80);
prof.Buy(23);
prof.Sleep(7);
prof.Eat(3);
console.log(prof);



