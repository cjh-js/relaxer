const wrap = document.querySelector('.wrap');
const text = document.querySelector('.text');

const totalTime = 7500;
const breatheTime = (totalTime/5) * 2;
const holdTime = totalTime/5;

breathAnimation();

function breathAnimation(){
    text.innerText = 'Breathe In';
    wrap.className = 'wrap grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out';
            wrap.className = 'wrap shrink';
        }, holdTime);
        
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);