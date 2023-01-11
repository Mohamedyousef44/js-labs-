
var checkForOthers ;
var count = 0 ;
var str = prompt("insert any string u want") ;
while(str  != null){

    for(let i = 0 ; i < str.length ; i++){
        let letter = str.charAt(i);
        switch(letter){
            case 'a':
            case 'A':
                count += 1;
                break;
            
            case 'e':
            case 'E':
            count += 1;
                break;

            case 'o':
            case 'O':
            count += 1;
                break;

            case 'u':
            case "U":
            count += 1;
                break;
            
            case 'i':
            case 'I':
            count += 1;
                break;
        }

    }
    document.write(`number of vowels in your word is ${count}`) ; 
    checkForOthers = confirm("do you want to insert anther word?");
    if(checkForOthers == false){
        break;
    }else{
        str = prompt("please inset the next word")
    }
}