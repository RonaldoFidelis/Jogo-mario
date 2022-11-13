const personagem = document.querySelector('.personagem');
const fireBall = document.querySelector('.fire-ball')
const btn = document.querySelector('.button');
const jump = () => {
    personagem.classList.add('jump');

    setTimeout(() => {
        personagem.classList.remove('jump');
    }, 500)
};

const loop = setInterval(() => {
    const fireBallPosition = fireBall.offsetLeft;
    const personagemPositon = +window.getComputedStyle(personagem).bottom.replace('px', ' ')

    if(fireBallPosition <= 85  && fireBallPosition > 0 && personagemPositon <=25){
        fireBall.style.animation = 'none';
        fireBall.style.left=`${fireBallPosition}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPositon}`;

        personagem.src = './img/gamerOver.png';
        personagem.style.width = '70px';

        clearInterval(loop);
    }

}, 10)
document.addEventListener('keydown', jump);
btn.addEventListener('click', jump);
