const form = document.getElementById('form');
const result = document.querySelector('.result');

form.onsubmit = (e) => {
    e.preventDefault();
    fetch('/search')
        .then(res => res.json())
        .then(data => {
             console.log(data)
        });
};