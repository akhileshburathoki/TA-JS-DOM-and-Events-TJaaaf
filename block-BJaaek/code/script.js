let click = document.querySelector(`.first`)
let move = document.querySelector(`.second`)

function generateRandomColor() {
    let any = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = "#";
    for(let i = 0; i < 8; i++) {
        let randomNumber = Math.floor(Math.random() * 16) ;
        color = color + any[randomNumber];
    }
    return color;
}
function onClick() {
    let randomColor = generateRandomColor()
    click.style.backgroundColor = randomColor
}

function moveMouse() {
    let randomColor = generateRandomColor();
    move.style.backgroundColor = randomColor;
}
click.addEventListener("click", onClick)
move.addEventListener(`mousemove`,moveMouse )






















