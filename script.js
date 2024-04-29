const buttons = document.createElement("div");
buttons.setAttribute(
    "style", "display: flex; justify-content: center; padding: 20px; ; gap: 10px;"
)
document.body.appendChild(buttons);


const page = document.createElement("div")
page.setAttribute( 
    "style", "display:flex; justify-content: space-between;"
)
document.body.appendChild(page)

const setSize = document.createElement("button");
setSize.textContent = "Sexy meter";
buttons.appendChild(setSize);

const resetButton = document.createElement("button");
resetButton.textContent = 'Reset';
buttons.appendChild(resetButton);

const nina = document.createElement("img")
nina.src = "https://i.imgur.com/CicwMk5.jpeg";
page.appendChild(nina)

const container = document.createElement("div");
container.setAttribute( 
    "style", "border: 1px solid pink; width: 800px; height: 800px; display:flex; flex-wrap: wrap;"
)
container.classList.add("container");
page.appendChild(container);

const nina2 = document.createElement("img")
nina2.src = "https://i.imgur.com/CicwMk5.jpeg";
page.appendChild(nina2)

let boardSize = 800

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const board = (gridSize) => {
        let totalSquares = gridSize * gridSize;
        let squareSize = boardSize / gridSize
        for (let j = 0; j < totalSquares; j++) { 
            const square = document.createElement("div");
            square.style.width = squareSize + 'px';
            square.style.height = squareSize + 'px';
            square.className = 'square';
            square.addEventListener('mouseover', () => { 
                square.style.backgroundColor = getRandomColor();
            });
            container.appendChild(square);
        }
};

board(16);

const getInput = () => { 
    let gridSize = prompt("Are you the sexy mexers huslens muslens? ;)")
    while (gridSize > 100) {
        gridSize = prompt("You are the sexy mexers. But please enter a number between 1 and 100.");
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    } board(gridSize)
};
const reset = () => {
    let blocks = document.getElementsByClassName('square'); // Get elements by class name
    for (const block of blocks) {
        block.style.backgroundColor = 'black';
    }
};



setSize.addEventListener('click', getInput);
resetButton.addEventListener('click', reset);
