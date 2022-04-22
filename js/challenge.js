let seconds = 0;

let isPaused = false;

const timer = document.getElementById('counter');
let counterFunc = 0;
let increment = () => {
    if(!isPaused) {
        seconds += 1;
     timer.innerText = seconds; }
}
counterFunc = setInterval(increment, 1000);

const minusButton = document.getElementById('minus')


function minusFunc() {
    seconds -= 1;
}
const decrease = minusButton.addEventListener("click", minusFunc);

const plusButton = document.getElementById('plus')

const increase = plusButton.addEventListener("click", plusFunc);

function plusFunc() {
    seconds += 1;
}
const heartButton = document.getElementById('heart')
const like = heartButton.addEventListener("click", likeFunc);

let likes = {};
let timerCurrent = 0;

const manageCount = (currentTime) => {

    if (currentTime in likes){
        likes[currentTime] += 1
    } else {
        likes[currentTime] = 1
    }
    console.log(likes);
}

function likeFunc() {

    
    const currentTime = document.getElementById('counter').innerText;
   
    manageCount(currentTime)
    render()
    }

const render = () => {

    document.querySelector('.likes').innerHTML = ''
    
    for (const [key, value] of Object.entries(likes)) {
        let numOfLikes = `${key} has been liked ${value} times`;
        const list = document.createElement('li');
        list.innerText = numOfLikes;
        document.querySelector('.likes').appendChild(list);
    }
}


let pauseButtonStatus = "counting";
const pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', () => {
    if (pauseButtonStatus === 'counting') {
        pauseButtonStatus = 'Stopped';
        clearInterval(counterFunc);
        pauseButton.innerHTML = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;

        heartButton.disabled = true;
    } else if (pauseButtonStatus === 'Stopped') {
        counterFunc = setInterval(increment, 100);
        pauseButtonStatus = 'counting';
        pauseButton.innerHTML = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;

        heartButton.disabled = false;
    }
});

const pause = () => {
    document.getElementById('pause').addEventListener("click", event => pauseFunc());
}

const play = () => {
     document.getElementById('play').addEventListener("click", event => playFunc());

    }

function playFunc() {
    const playButton = document.getElementById('play');
    isPaused = false;
   
    playButton.setAttribute("id", "pause");
   
    playButton.textContent = "Pause";
    
   pause();
}

function pauseFunc() {
    const pauseButton = document.getElementById('pause');
    isPaused = true;

    pauseButton.setAttribute("id", "play");

    pauseButton.innerHTML = "Play";
 play();
}


const leaveComment = () => {
    const comment = document.getElementById("comment-input").value;
    console.log(comment)
    const commentList = document.getElementById("list");
    const paraGraph = document.createElement("p");
    paraGraph.innerText = comment;
    commentList.appendChild(paraGraph);

}

const submit = document.getElementById('submit');
submit.addEventListener('click', event => {
    
    event.preventDefault(); 

    leaveComment();
});