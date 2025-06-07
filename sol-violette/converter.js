const loader = document.getElementById('containerLoader');
const convertBtn = document.getElementById('convertBtn');
const converter = document.getElementById('converter');

convertBtn.addEventListener('click', () => {
    loader.style.display = 'flex';
    setTimeout(() => {
        loader.style.display = 'none';
        converter.value = '';
    }, "8000");
})