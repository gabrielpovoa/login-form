const registryField = document.getElementById('registry')
const passwordField = document.getElementById('password')
const buttonAccess = document.getElementById('access')
let eyeToggle = document.querySelector('.fa-eye')


const show = () => {
    passwordField.setAttribute('type', 'text')
}

const hide = () => {
    passwordField.setAttribute('type', 'password')
}

let pwShown = 0;

eyeToggle.addEventListener('click', () => {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);


const accessDash = () => {
    let registry = registryField.value
    let password = passwordField.value

    let registryTOKEN = 'BM500';
    let passwordTOKEN = '123456';
    
    if(registry === registryTOKEN && password === passwordTOKEN) {
        let loginForm = document.getElementById('login-area')
        let userArea = document.getElementById('user-area')
        userArea.style.display = 'block'
        loginForm.style.display = 'none'
    } else {
        if(password !== passwordTOKEN && registry !== registryTOKEN || password === '' && registry === '') {
            alert('errou')
        }
    }
}

buttonAccess.addEventListener('click', accessDash)