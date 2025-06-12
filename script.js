const password = ['1','9','0','6','2','5']
let passwordTry = [];

const buttons = document.getElementsByTagName('button');
const message = document.getElementById('message');
let newMessage = "";

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        passwordTry.push(buttons[i].innerText);
        if (JSON.stringify(passwordTry)==JSON.stringify(password)) {
            location.href = './sol-violette/solViolette.html';
        }
        newMessage += "●";
        message.innerText = newMessage;
        if (newMessage.length-1 >= 6) {
            passwordTry = [];
            newMessage = "";
            message.innerText = newMessage;
        }
    })
}

document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);