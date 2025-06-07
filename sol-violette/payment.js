const cardContainer = document.getElementById('containerCard');
const openCard = document.getElementById('openCard');

cardContainer.addEventListener('click', () => {
    containerCard.style.display = 'none';
    console.log(body[0]);
    body[0].style.backgroundColor = 'yellow';
})

openCard.addEventListener('click', () => {
    containerCard.style.display = 'flex';
})
