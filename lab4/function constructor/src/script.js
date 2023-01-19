// using function constructor

function Person (fname,money,sleepMood,healthRate){
    this.fname = fname;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
}

Person.prototype.Sleep = function (hours){
    if(hours === 7) {this.sleepMood = "Happy";}
    else if(hours > 7) {this.sleepMood = "Lazy";}
    else{
        this.sleepMood = "Tired";
    }
}

Person.prototype.Eat = function (meals){

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

Person.prototype.Buy = function(items){

    let total = items * 10 ;
    this.money = this.money - total;
}



let Mohamed = new Person("mohamed",1000,"normal",10);
Mohamed.Sleep(9);
Mohamed.Eat(5);
Mohamed.Buy(4);
console.log(Mohamed);


