const titleImportant = document.querySelectorAll(".important");

titleImportant.forEach(function(titleImportant) {
    titleImportant.setAttribute('title', 'This is an important item');
});

const imgImportant = document.querySelectorAll("img");

imgImportant.forEach(imgImportant => {
    if (imgImportant.classList.contains('important')) {
        imgImportant.style.display = "none";
    }
});

const paragraph = document.querySelectorAll("p");

paragraph.forEach(paragraph => {
    console
    if (paragraph.classList.contains()){
        console.log(paragraph.className);
    }
});