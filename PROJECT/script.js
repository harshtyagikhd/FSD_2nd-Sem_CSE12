// Cart Count
let cartCount = 0;
let totalPrice = 0;

// Product buttons
const buttons = document.querySelectorAll(".add-cart");
const cartDisplay = document.getElementById("cart-count");

// Create floating notification
const notification = document.createElement("div");
notification.style.position = "fixed";
notification.style.top = "20px";
notification.style.right = "20px";
notification.style.background = "#28a745";
notification.style.color = "white";
notification.style.padding = "12px 20px";
notification.style.borderRadius = "8px";
notification.style.fontWeight = "bold";
notification.style.display = "none";
notification.style.zIndex = "9999";
document.body.appendChild(notification);

// Add To Cart Function
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        cartCount++;
        cartDisplay.textContent = cartCount;

        // Random price simulation
        let price = Math.floor(Math.random() * 500) + 20;
        totalPrice += price;

        // Button effect
        button.textContent = "✓ Added";
        button.style.background = "#28a745";
        button.style.color = "white";

        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.style.background = "#ffd814";
            button.style.color = "black";
        }, 1000);

        // Notification
        notification.textContent = "Product Added To Cart";
        notification.style.display = "block";

        setTimeout(() => {
            notification.style.display = "none";
        }, 1500);

        // Save cart count
        localStorage.setItem("cartCount", cartCount);
    });
});

// Load saved cart count
window.addEventListener("load", () => {
    const savedCart = localStorage.getItem("cartCount");

    if(savedCart){
        cartCount = parseInt(savedCart);
        cartDisplay.textContent = cartCount;
    }
});

// Search Bar Functionality
const searchInput = document.querySelector(".search-box input");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {

        const title = product.querySelector("h3").textContent.toLowerCase();

        if(title.includes(searchValue)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }

    });
});

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.background = "#131921";
topBtn.style.color = "white";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// Welcome Popup
setTimeout(() => {

    notification.textContent = "Welcome To Amazon Clone!";
    notification.style.background = "#131921";
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
        notification.style.background = "#28a745";
    }, 2500);

}, 1000);

// Product Click Analytics
products.forEach(product => {

    product.addEventListener("mouseenter", () => {

        product.style.transform = "scale(1.03)";

    });

    product.addEventListener("mouseleave", () => {

        product.style.transform = "scale(1)";

    });

});

// Fake Stock Counter
products.forEach(product => {

    const stock = document.createElement("p");

    stock.textContent =
        "Only " + (Math.floor(Math.random() * 15) + 1) + " left in stock";

    stock.style.color = "red";
    stock.style.fontSize = "14px";

const btn = product.querySelector(".add-cart");
product.insertBefore(stock, btn);

});

buttons.forEach(btn => {

    btn.addEventListener("click", e => {

        const fly = document.createElement("div");

        fly.innerHTML = "🛒";

        fly.style.position = "fixed";
        fly.style.left = e.clientX + "px";
        fly.style.top = e.clientY + "px";
        fly.style.fontSize = "30px";
        fly.style.zIndex = "9999";

        document.body.appendChild(fly);

        let pos = e.clientY;

        const anim = setInterval(() => {

            pos -= 10;
            fly.style.top = pos + "px";

            if(pos < 50){
                clearInterval(anim);
                fly.remove();
            }

        }, 10);

    });

});

const dealBox = document.createElement("div");

dealBox.style.position = "fixed";
dealBox.style.top = "80px";
dealBox.style.left = "20px";
dealBox.style.background = "red";
dealBox.style.color = "white";
dealBox.style.padding = "10px";
dealBox.style.borderRadius = "8px";
dealBox.style.zIndex = "999";

document.body.appendChild(dealBox);

let time = 7200;

setInterval(() => {
    let h = Math.floor(time / 3600);
    let m = Math.floor((time % 3600) / 60);
    let s = time % 60;

    dealBox.innerHTML =
        `⚡ Deal Ends In ${h}:${m}:${s}`;

    time--;
}, 1000);

// Live Clock
const clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.left = "20px";
clock.style.bottom = "20px";
clock.style.background = "#131921";
clock.style.color = "white";
clock.style.padding = "10px";
clock.style.borderRadius = "8px";
clock.style.zIndex = "999";

document.body.appendChild(clock);

setInterval(() => {

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString();

}, 1000);
