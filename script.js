const learners = ["Mathias", "Antoine", "Pierre", "Thomas", "Alexande.V", "Alexande", "Bastien", "Carole" , "Dorian", "Elisabeth" , "Elodie", "Justin", "Justine L" , "Justine" , "Kimi", "Layla", "Lidwine", "Lucas" , "Marie", "Okly", "Robin", "Rosalie", "Stephane", "Tim", "Valentin" ,"Virginie"];

const article = document.querySelector("article");

learners.forEach((learners) => {
    const section = document.createElement("section");

    const paragraph = document.createElement("p");
    paragraph.textContent = learners;

    section.appendChild(paragraph);
    article.appendChild(section);
});