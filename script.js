
// Wartet, bis die Webseite vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Klick-Event für den Button
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        
        // Button-Text anpassen
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "Light Mode aktivieren";
        } else {
            toggleButton.textContent = "Dark Mode aktivieren";
        }
    });
});
