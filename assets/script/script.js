const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}
function displaySquare(){

const wrapper = document.getElementsByClassName("displayedsquare-wrapper");
const firstChild = wrapper.firstChild;
const green = document.createElement("div", {"class":"displayedsquare green"});
const violet = document.createElement("div", {"class":"displayedsquare violet"});
const orange = document.createElement("div", {"class":"displayedsquare green"});
firstChild.appendChild(orange);
firstChild.appendChild(violet);
firstChild.appendChild(green);

}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare, displaySquare)
  
}

