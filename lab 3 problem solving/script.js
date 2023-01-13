// arrOfdistance1 : distance of apples  
// arrOfdistance2 : distance of oranges  

function countApplesAndOranges(s , t , a , o ,arrOfdistance1 ,arrOfdistance2){

    let arrOfapples = arrOfdistance1.filter((x)=>{return x >= 0});
    let arrOforanges = arrOfdistance2.filter((y)=>{return y <= 0});
    let countOfapples = 0;
    let countOforanges = 0;

    for(let i = 0 ; i < arrOfapples.length ; i++){
        if(a + arrOfapples[i] >= s){
            countOfapples +=1;
        }
    }
    for(let i = 0 ; i < arrOforanges.length ; i++){
        if((t-o) >= arrOforanges[i] ){
            countOforanges +=1;
        }
    }
    console.log(`The number of apples that fall on Sam's house is ${countOfapples}`+
    `\n The number of oranges that fall on Sam's house is ${countOforanges}`)
};


countApplesAndOranges(7 , 11 , 5 , 15 , [-2,2,1],[5,-6]); // expexted value[1,1]









