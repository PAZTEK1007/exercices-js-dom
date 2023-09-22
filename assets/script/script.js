const ol = document.querySelector("ol");
const one = ol.children[0];
const five = ol.children[4];
ol.insertBefore(five, one);

const div = document.querySelector("div");
const main = document.querySelector("main")
const section1 = main.children[1];
const paragraph = section1.children[1];
const title1 = section1.children[0];
const title2 = div.children[0];

section1.insertBefore(title2, title1)
section1.insertBefore(paragraph, title1);

// Uncomment for delete the last section
// div.remove();
// title1.remove();
