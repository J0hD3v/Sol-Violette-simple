const cardContainer = document.getElementById('containerCard');
const openCard = document.getElementById('openCard');


cardContainer.addEventListener('click', () => {
    containerCard.style.display = 'none';
})

openCard.addEventListener('click', () => {
    containerCard.style.display = 'flex';
})
