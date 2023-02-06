
let signUp = document.getElementById('signUp')
let signUpInputs = document.querySelectorAll('input');
let form = document.getElementById('form');


signUp.addEventListener('click' , ()=>{
    let emailHelp = document.getElementById('emailHelp')
    let username = signUpInputs[0];
    let email = signUpInputs[1];
    let password = signUpInputs[2];
    let repass = signUpInputs[3];

    localStorage.set('username' , username.value )
    localStorage.set('email' , email.value )
    localStorage.set('password' , password.value )

    if(password.value === repass.value){

        window.location.assign('http://127.0.0.1:5500/index.html')

    }else{
        emailHelp.classList.toggle = 'd-none';

        form.onsubmit = function(e){
            e.preventDefault();
        }
    }
})
