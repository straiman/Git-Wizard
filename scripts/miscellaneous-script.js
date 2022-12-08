const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

backBtn.addEventListener('click', goBackPage);
nextBtn.addEventListener('click', goNextPage);

function goBackPage() {
    location.href = 'address.html';
}

function goNextPage() {
    location.href = 'summary.html'
}