
var nameStatus = false ;
var fname = null ;
var lname = null ;
var bod = null;

while(!nameStatus){
 fname = prompt("please enter ur first name","mohamed");
 lname = prompt("please enter ur last name","yossef");
 nameStatus  = confirm(`your full name is ${fname}+${lname}`);
}

while(bod == null){
bod = prompt("please enter ur birth of date ",26);
}
document.write(`welcome ${fname +" "+ lname} your are ${bod} years old` )





