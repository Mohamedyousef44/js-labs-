let container = document.querySelector('.container');




// using XHR

// const myReq = new XMLHttpRequest();

// myReq.addEventListener('load' , function(){

//     let result = JSON.parse(this.response);
//     result.data.forEach(element => {
//         createDiv(element.avatar,element.email)
//     });
    
    
// } )
// myReq.addEventListener('error' , function(){

//     createDiv("",'error 404 not found')

// });

// myReq.open('GET' ,'https://reqres.in/api/users?page=2');
// myReq.send();
// console.log('request is sent')

// using fetch API 

fetch('https://reqres.in/api/users?page=2')

.then((response)=>{

    if(response.ok){

        response.json().then((res)=>{
            console.log(res)
            res.data.forEach(element => {
                createDiv(element.avatar,element.email)
            });
        })
    }else{

        throw new Error(`server is not responding error ${response.status}`)
    }  
})
.catch((err)=>{

    createDiv("",err)
    
})




// function to create elemnts inside div to append to page to user

function createDiv(url,text){

    let div = document.createElement('div')
    div.setAttribute('class' , 'frame');

    let img = document.createElement('img')
    img.setAttribute('src' , url)

    let email = document.createElement('p')
    email.innerText = text;

    div.appendChild(img)
    div.appendChild(email)

    container.appendChild(div)
}