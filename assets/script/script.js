


const learners = ["Mathias", "Antoine", "Pierre", "Thomas", "Alexande.V", "Alexande", "Bastien", "Carole" , "Dorian", "Elisabeth" , "Elodie", "Justin", "Justine L" , "Justine" , "Kimi", "Layla", "Lidwine", "Lucas" , "Marie", "Okly", "Robin", "Rosalie", "Stephane", "Tim", "Valentin" ,"Virginie"];

const article = document.querySelector("article");

function background(rgbColor){
    const brightness = (parseInt(rgbColor[0]) * 299 + parseInt(rgbColor[1]) * 587 + parseInt(rgbColor[2]) * 114) / 1000;
    return brightness > 128;
    }

document.addEventListener('DOMContentLoaded', () =>{
    const article = document.querySelector('article');
    shuffleArray(learners);
    learners.forEach((learners) => {
    const section = document.createElement("section");
    const paragraph = document.createElement("p");

    const rgb = [];
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random()*256)
        rgb.push(random)
    }

    const rgbToString = ` rgb(${rgb.join()})`;
    paragraph.style.backgroundColor = rgbToString;
    paragraph.textContent = learners;
    const rgbValues = rgbToString.match(/\d+/g);
    const textColor = background(rgbValues) ? 'black' : 'white';
    paragraph.style.color = textColor;
    section.appendChild(paragraph);
    article.appendChild(section);
    
    });
});
   


