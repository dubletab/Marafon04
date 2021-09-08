const board = document.querySelector('#board');
const SQUARE_NUMBER = 600;
const colors = ['#20639b', '#3caea3', '#f6d55c', 
'#ed553b', '#173f5f'];

// const colors = ['#88abff', '#1000bb', '#2177aa', 
// '#4322ed', '#7b83f2', '#0033ee'];

for (let i = 0; i < SQUARE_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square);
}


function setColor(event) {
    const color = getRandomColor(colors);
    const elem = event.target;
    elem.style.background = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const elem = event.target;
    elem.style.background = '#1d1d1d';
    elem.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(myArr) {
    return myArr[Math.floor(Math.random() * colors.length)];
}

