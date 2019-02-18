const getConjForm= document.getElementById('get-conj-form');
const conjWrapper = document.querySelector('.conj');

getConjForm.onsubmit = (e) => {
    e.preventDefault();
    fetch('/conj')
        .then(res => res.json())
        .then(data => {
             console.log(data)
             const conjs = data.conjs;
             for (let i in conjs) {
                 const conj = document.createElement('div');
                 conj.classList.add(conjs[i]);
                 conjWrapper.appendChild(conj);
             }
        });
};