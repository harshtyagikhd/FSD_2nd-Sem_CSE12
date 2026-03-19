let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;

// Change heading text
document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value.trim() !== "") {
        heading.innerHTML = input.value.trim();
    } else {
        alert("Please enter text to change heading");
    }
});

// Change background color
document.getElementById("bgColorBtn").onclick = function () {
    document.body.style.backgroundColor = "red";
};

// Increase font size
document.getElementById("fontSizeBtn").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});

// Show/Hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Reset page
document.getElementById("resetBtn").addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    document.body.style.backgroundColor = "#0f172a"; // match your CSS theme
    input.value = "";
    fontSize = 16;
});