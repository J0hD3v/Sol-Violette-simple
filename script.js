const password = ['1','9','0','6','2','5']
let passwordTry = [];

const buttons = document.getElementsByTagName('button');
const message = document.getElementById('message');
let newMessage = "";

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        passwordTry.push(buttons[i].innerText);
        if (JSON.stringify(passwordTry)==JSON.stringify(password)) {
            playAnimation();
            setTimeout(() => {
                location.href = './sol-violette/solViolette.html';
            }, 1500);
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

function playAnimation() {
    const section = document.createElement('section');
    section.style = `
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    `;
    
    const video = document.createElement('video');
    video.setAttribute("autoplay",'');
    video.setAttribute("loop",'');
    video.setAttribute("muted",'');
    video.setAttribute("disablePictureInPicture",'');
    video.setAttribute("playsinline",'');
    video.style = "width: 70vw";
    
    const source = document.createElement('source');
    source.src = "./assets/Croix-ezgif.com-gif-to-webm-converter.webm";
    source.type = "video/webm";
    
    document.body.appendChild(section);
    section.appendChild(video);
    video.appendChild(source);
    
    
    video.addEventListener('canplay', () => {
        video.play().catch(err => {
            console.warn("Autoplay failed:", err);
        });
    });
}
