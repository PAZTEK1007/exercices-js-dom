console.log(document);

const title = document.querySelector("header h1");
console.log(title);

const titleChange = document.createElement("h1");
titleChange.innerHTML = "Modifying the DOM";

title.parentNode.replaceChild(titleChange, title);

const colorBody = document.getElementsByTagName("body");
colorBody[0].style.backgroundColor ="#FF69B4";

function randomColor() {
    let rgb = []
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random()*256)
        rgb.push(random)
    }
    let rgbToString = ` rgb(${rgb.join()})`
    colorBody[0].style.backgroundColor = rgbToString;
}

const bdy = document.body;
for (const child of bdy.children){
    console.log(child);
}

