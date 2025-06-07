const cardContainer = document.getElementById('containerCard');
const openCard = document.getElementById('openCard');


cardContainer.addEventListener('click', () => {
    containerCard.style.display = 'none';
})

console.log(openCard);
openCard.addEventListener('click', () => {
    containerCard.style.display = 'flex';
})
