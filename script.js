document.addEventListener("DOMContentLoaded", function () {
    const letsGoBtn = document.getElementById("letsGo");
    const page1 = document.querySelector(".page1");
    const page2 = document.querySelector(".page2");
    const page3 = document.querySelector(".page3");

    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    const roseContainer = document.getElementById("rose-container");

    // Move to Page 2
    letsGoBtn.addEventListener("click", function () {
        page1.style.display = "none";
        page2.style.display = "flex";
    });

    // Move to Page 3 + Trigger Massive Rose Explosion
    yesBtn.addEventListener("click", function () {
        page2.style.display = "none";
        page3.style.display = "flex";
        createMassiveRoseExplosion();
    });

    // Make "No" button jump around
    noBtn.addEventListener("mouseover", function () {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * window.innerWidth + "px";
        noBtn.style.top = Math.random() * window.innerHeight + "px";
    });

    // Function to create a massive rose explosion
    function createMassiveRoseExplosion() {
        for (let i = 0; i < 80; i++) { // Increased to 80 petals for full-screen effect
            let rose = document.createElement("div");
            rose.classList.add("rose");

            // Random explosion directions (covering entire page)
            let angle = Math.random() * 2 * Math.PI; // Random angle in radians
            let distance = Math.random() * (window.innerWidth / 2) + 150; // Wider explosion spread

            let x = Math.cos(angle) * distance + "px";
            let y = Math.sin(angle) * distance + "px";

            let xFinal = Math.cos(angle) * (distance + 50) + "px";
            let yFinal = Math.sin(angle) * (distance + 50) + "px";

            // Random rotation
            let rotation = Math.random() * 720 + "deg"; 

            // Random size (small to large petals)
            let size = Math.random() * 50 + 30 + "px"; // 30px to 80px

            rose.style.setProperty("--x", x);
            rose.style.setProperty("--y", y);
            rose.style.setProperty("--x-final", xFinal);
            rose.style.setProperty("--y-final", yFinal);
            rose.style.setProperty("--rotation", rotation);
            rose.style.width = size;
            rose.style.height = size;

            roseContainer.appendChild(rose);

            setTimeout(() => { rose.remove(); }, 2500); // Make sure petals fade out smoothly
        }
    }
});
