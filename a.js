function getRandomPosition() {
    const maxWidth = window.innerWidth - 40; // Adjust for the size of your water drop
    const maxHeight = window.innerHeight - 40; // Adjust for the size of your water drop

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    return { x: randomX, y: randomY };
}

function createRandomDrop() {
    const waterDrop = document.createElement("div");
    waterDrop.classList.add("water-drop");
    const position = getRandomPosition();
    waterDrop.style.left = `${position.x}px`;
    waterDrop.style.top = `${position.y}px`;

    document.body.appendChild(waterDrop);

    setTimeout(() => {
        document.body.removeChild(waterDrop);
    }, 2000); // Remove the drop after 2 seconds (adjust as needed)
}

setInterval(createRandomDrop, 1000); // Create a new drop every 8 seconds



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
