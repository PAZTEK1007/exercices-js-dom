const titleImportant = document.querySelectorAll(".important");

titleImportant.forEach(function(titleImportant) {
    titleImportant.setAttribute('title', 'This is an important item');
});

const imgImportant = document.querySelectorAll("img");

imgImportant.forEach(imgImportant => {
    if (imgImportant.classList.contains('important')) {
        imgImportant.style.display = "block";
    } else {
        imgImportant.style.display = "none";
    }
});

const paragraph = document.querySelectorAll("p");

paragraph.forEach((paragraph, index ) => {
   const text = paragraph.textContent;
   const className = paragraph.className;

   const rgb = [];
   for (let i = 0; i < 3; i++) {
       let random = Math.floor(Math.random()*256)
       rgb.push(random)
   }
   const rgbToString = ` rgb(${rgb.join()})`;
    paragraph.style.color = rgbToString;

   console.log(`Paragraph ${index + 1}: ${text}`);
   
   if (className) {
    paragraph.style.color = "black";
    console.log(` Class Name : ${className}`);
   }
});
