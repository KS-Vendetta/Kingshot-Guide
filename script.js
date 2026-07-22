// ==========================
// VEN Alliance Hub v2
// ==========================

console.log("VEN Alliance Hub Loaded");

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Future-ready card click animation
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.3s";

    });

});

// Future-ready dropdown support for mobile
if (window.innerWidth <= 768) {

    document.querySelectorAll(".dropdown > a").forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const menu = this.nextElementSibling;

            if (menu.style.display === "block") {

                menu.style.display = "none";

            } else {

                document.querySelectorAll(".dropdown-content").forEach(item => {
                    item.style.display = "none";
                });

                menu.style.display = "block";

            }

        });

    });

}

// Welcome message
console.log("Welcome Commander!");
