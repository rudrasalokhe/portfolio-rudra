document.addEventListener("DOMContentLoaded", () => {
    const line1 = "Hi There!";
    const line2 = "I'm Rudra Salokhe";
    const h2Line1 = document.getElementById("line1");
    const h2Line2 = document.getElementById("line2");

    let index1 = 0;
    let index2 = 0;

    function typeLine1() {
        if (index1 < line1.length) {
            h2Line1.textContent += line1[index1];
            index1++;
            setTimeout(typeLine1, 70); // Adjust typing speed
        } else {
            h2Line1.style.opacity = 1; // Make visible after typing
            setTimeout(typeLine2, 500); // Start next line after a delay
        }
    }

    function typeLine2() {
        if (index2 < line2.length) {
            h2Line2.textContent += line2[index2];
            index2++;
            setTimeout(typeLine2, 70); // Adjust typing speed
        } else {
            h2Line2.style.opacity = 1; // Make visible after typing
        }
    }

    typeLine1();
});
