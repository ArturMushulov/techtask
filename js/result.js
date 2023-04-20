const btnRequest = document.querySelector('.btn-call');

const app = async () => {
    const obj = await fetch('https://swapi.dev/api/people/1/');
    let result = await obj.json();
    for (key in result) {
        console.log(key, result[key]);
        let str = document.createElement('p');
        str.style.color = '#000';
        str.innerHTML = `${key}: ${result[key]}`;
        document.body.append(str);
    }
}

btnRequest.addEventListener('click', app);

const countDown = document.querySelector('.countDown');
let time = 60 * 10;

const updateCountDown = () => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.innerHTML = `${minutes}:${seconds}`;
    time -= 1;
}

setInterval(updateCountDown, 1000);