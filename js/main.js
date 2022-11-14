const personagem = document.querySelector('.personagem');
const bolaDeFogo = document.querySelector('.bolaDeFogo');
const nuvem = document.querySelector('.nuvem');
const nuvens = document.querySelector('.nuvens');
const placar = document.querySelector('.placar');
let contagem = 0;

const saltoPersonagem = () => {
    personagem.classList.add('saltar');

    setTimeout(() => {
        personagem.classList.remove('saltar');
    }, 500)
};


const verificarSalto = setInterval(() => {
    const posiçãoBolaDeFogo = bolaDeFogo.offsetLeft;
    const posiçãoNuvem = nuvem.offsetLeft;
    const posiçãoNuvens = nuvens.offsetLeft;
    const posiçãoPersonagem = +window.getComputedStyle(personagem).bottom.replace('px', ' ');

    if (posiçãoBolaDeFogo <= 85 && posiçãoBolaDeFogo > 0 && posiçãoPersonagem <= 25) {
        bolaDeFogo.style.animation = 'none';
        bolaDeFogo.style.left = `${posiçãoBolaDeFogo}px`;

        nuvens.style.animation = 'none';
        nuvens.style.left = `${posiçãoNuvens}px`;
        nuvem.style.animation = 'none';
        nuvem.style.left = `${posiçãoNuvem}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${posiçãoPersonagem}`;

        personagem.src = './img/gamerOver.png';
        personagem.style.width = '70px';

        clearInterval(verificarSalto);
        clearInterval(score);

        document.addEventListener('click',() =>{
            window.location.reload();
        });
        document.addEventListener('keydown',() =>{
            window.location.reload();
        });
    }

}, 10);

const score = setInterval(() => {
    contagem++;
    placar.innerHTML = contagem;
}, 1000)
document.addEventListener('click', saltoPersonagem);
document.addEventListener('keydown', saltoPersonagem);
