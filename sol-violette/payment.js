const cardContainer = document.getElementById('containerCard');
const openCard = document.getElementById('openCard');

cardContainer.addEventListener('click', () => {
    containerCard.style.display = 'none';
    body[0].style.backgroundColor = 'var(--yellow)';
})

openCard.addEventListener('click', () => {
    containerCard.style.display = 'flex';
})
