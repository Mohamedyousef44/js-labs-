
let x = 0 ;
let y = 0 ;
let a = 0 ;
const pi = Math.PI;
let flag = true;

function area (c , d1 , d2){
    return (c * d1 * d2)
}

while(flag){

    let askShape = prompt("Please write the shape \n [C for circle] [T for triangle] \n [S for square] [R for rectangle] \n [E for Ellipse] [Z for Trapezium] \n[P for Parallelogram] ")
    let sh = askShape.toLocaleLowerCase();

    switch(sh){

        case 'c' :
            x = Number(prompt("insert radius")); 
            a = area (pi , x , x)
            alert(`area of Circle is ${a}`)
            break;

        case 't' :
            x = Number(prompt("insert 1st dimension"));
            y = prompt("insert 2nd dimension");
            a = area (0.5 , x , y)
            alert(`area of Triangle is ${a}`)
            break;

        case 's' :
            x = Number(prompt("insert length")); 
            a = area (1 , x , x)
            alert(`area of Square is ${a}`)
            break;

        case 'r' :
            x = Number(prompt("insert 1st dimension"));
            y = Number(prompt("insert 2nd dimension")); 
            a = area (1 , x , y)
            alert(`area of Rectangle is ${a}`)
            break;

        case 'e' :
            x = .5 * Number(prompt("insert minor axis length"));
            y = .5 * Number(prompt("insert major axis length")); 
            a = area (pi , x , y)
            alert(`area of Elipse is ${a}`)
            break;

        case 'z' :
            x = Number(prompt("insert height"));
            let l = Number(prompt("insert length"));
            let w = Number(prompt("insert width"));
            y = .5 * (l+w)
            a = area (.5 , x , y)
            alert(`area of Trapezium is ${a}`)
            break;

        case 'p' :
            x = Number(prompt("insert base length")); 
            y = Number(prompt("insert vertical height")); 
            a = area (1 , x , y)
            alert(`area of Parallelogram is ${a}`)
            break;
    }

    flag = confirm("do u want to insert another shape");

}






