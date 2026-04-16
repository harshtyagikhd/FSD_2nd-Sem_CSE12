let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 30;

document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerText = input.value;
    } else {
        alert("Please enter text to change heading");
    }
});

document.getElementById("bgColorBtn").onclick = function () {
    document.body.style.backgroundColor = "darkblue";
};

 input.onchange = function (){
    console.log("Input changed:", input.value);
 };

document.getElementById("fontSizeBtn").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = Math.min(fontSize, 30) + "px";
    mainHeading.style.fontSize = Math.min(fontSize, 40) + "px";

});

document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

document.getElementById("resetBtn").addEventListener("click", function () {
    // heading.innerTextL = "Welcome to JavaScript Lab";
    // paragraph.style.display = "block";
    // paragraph.style.fontSize = "30px";
    // document.body.style.backgroundColor = "#0f172a"; 
    // input.value = "";
    // fontSize = 30;
    location.reload();
});
heading.onmouseover = function (){
    let color = "#" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    heading.style.color= color;
};