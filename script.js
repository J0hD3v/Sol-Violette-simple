const password = ['1','9','0','6','2','5']
let passwordTry = [];
let inputsCounter = 0;

const buttons = document.getElementsByTagName('button');
const message = document.getElementById('message');
let newMessage = "\xa0";

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        inputsCounter++;
        passwordTry.push(buttons[i].innerText);
        if (JSON.stringify(passwordTry)==JSON.stringify(password)) {
            location.href = './sol-violette/solViolette.html';
        }
        newMessage += "●";
        message.innerText = newMessage;
        if (newMessage.length-1 >= 6) {
            passwordTry = [];
            inputsCounter = 0;
            newMessage = "\xa0";
            message.innerText = newMessage;
        }
    })
}

document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);