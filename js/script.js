// Load navbar into pages
fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
    });

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
}
