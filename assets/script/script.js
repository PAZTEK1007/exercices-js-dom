const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  const colorClass = e.target.classList[1];
  const square = document.createElement("div");
  square.classList.add("displayedsquare", colorClass);
  document.querySelector(".displayedsquare-wrapper").appendChild(square);

  const ul = document.querySelector("ul");
  const list = document.createElement("li");
  const listContent = document.createTextNode(
    `[${getElapsedTime()}] You create a ${e.target.classList[1]} square !`
  );
  list.appendChild(listContent);
  ul.appendChild(list);

}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare, );
}

function randomColor(){
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
const body = document.getElementsByTagName("body");
body.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.keyCode === 32) {
        body.style.backgroundColor= randomColor();
    }
});



