const topSec = document.getElementById('topSec');
const dark = document.getElementById('dark');
const body = document.body

dark.addEventListener('click', () => {
    body.classList.toggle('bg-dark');
    topSec.classList.toggle('bg-danger');
})