document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");

    // Move to Page 2
    startBtn.addEventListener("click", function () {
        page1.classList.add("hidden");
        page2.classList.remove("hidden");
    });

    // Move "No" Button Randomly
    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("click", moveButton);

    function moveButton() {
        const maxX = window.innerWidth - noBtn.clientWidth;
        const maxY = window.innerHeight - noBtn.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }

    // Move to Page 3
    yesBtn.addEventListener("click", function () {
        page2.classList.add("hidden");
        page3.classList.remove("hidden");
    });
});
