const score =  document.querySelector('#score');
const timeLeft =  document.querySelector('#time-left');
const squares = document.querySelectorAll('.square');

let result = 0;
let currentTime = 30;
let hitPosition

const randomSquare = () => {
    squares.forEach(square =>{
        square.classList.remove('mole');
    });

    const randomId = squares[Math.floor(Math.random() * 9)];
    randomId.classList.add('mole');
    hitPosition = randomId.id;
}

squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        if (square.id===hitPosition) {
            result++;
            score.textContent=result;
            hitPosition= null;
        }
    })
})

// const setTime = () =>{
//     setInterval(randomSquare, 1000)
// }
// setTime();
const countDown =()=>{
    randomSquare();
    currentTime--
    timeLeft.textContent=currentTime;
    if (currentTime===0) {
        clearInterval(countDownTimer);
        alert('GAME OVER! Your final score is ' + result)
    }
}

const countDownTimer = setInterval(countDown, 1000);