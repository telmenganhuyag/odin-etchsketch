const container = document.createElement("div");
document.body.appendChild(container);
container.setAttribute( 
    "style", "display: flex; justify-content: center;"
);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const row = () => {
    for (i = 0; i < 16; i++) {
        let div = document.createElement("div");
        div.textContent = "";
        div.setAttribute( 
            "style", "border: 1px solid black; padding: 20px;"
        );
        div.addEventListener('mouseover', () => { 
            div.style.backgroundColor = getRandomColor();
        });
        container.appendChild(div);
    }
};

row();


