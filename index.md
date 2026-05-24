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
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lebenslauf - Sirwan Rashek</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="theme-toggle">Dark Mode aktivieren</button>

    <div class="container">
        <header>
            <h1>Sirwan Rashek</h1>
            <p>Kufsteiner Strasse 17, 45899 Gelsenkirchen | Tel: 015739383139 | E-Mail: Sirwanrashek@hotmail.com</p>
        </header>

        <section>
            <h2>Akademischer Werdegang</h2>
            <p><strong>Studium der Informatik (B.Sc.)</strong><br>
            Westfälische Hochschule Gelsenkirchen, aktuell im 6. Fachsemester.</p>
        </section>

        <section>
            <h2>IT-Kenntnisse & Kompetenzen</h2>
            <ul>
                <li><strong>Programmierung:</strong> Sicherer Umgang mit Java und Python.</li>
                <li><strong>Webentwicklung:</strong> Konzeption und Realisierung von Webseiten mittels HTML und CSS.</li>
                <li><strong>Datenbanken:</strong> Fundierte Kenntnisse in SQL und relationalen Datenbankmanagementsystemen.</li>
                <li><strong>Systemadministration:</strong> Ausführliches Wissen und praktische Fertigkeiten im Bereich der Betriebssysteme.</li>
            </ul>
        </section>

        <section>
            <h2>Berufserfahrung</h2>
            <div class="job">
                <h3>Pharmazeutisch-technischer Assistent (PTA)</h3>
                <p><em>Alte Apotheke, Gelsenkirchen | 01.11.2022 - 01.09.2025</em></p>
                <p>Abgabe von Arzneimitteln auf Rezept, Verkauf von OTC-Präparaten, Herstellung von Arzneimitteln gemäß GMP-Richtlinien, Kundenberatung, Apothekenverwaltung.</p>
            </div>
            <div class="job">
                <h3>Praktikum (Pharmazie)</h3>
                <p><em>Alte Apotheke, Gelsenkirchen | 01.07.2022 - 01.09.2022</em></p>
            </div>
            <div class="job">
                <h3>Pharmazeutisch-technischer Assistent</h3>
                <p><em>Apotheke Jacob Ibrahim, Al Hasaka | 08.2016 - 09.2018</em></p>
            </div>
        </section>

        <section>
            <h2>Weitere Ausbildungen</h2>
            <ul>
                <li>Qualifizierungsmaßnahme für PTA, Völker-Schule in Osnabrück und Vorbereitungskurs auf die Eignungs- bzw. Kenntnisprüfung für PTA</li>
                <li>Technisches Diplom, Fachrichtung Pharmazie, Technisches Fachinstitut für Gesundheitswesen, Al Hasaka (Bewertung: "ausgezeichnet")</li>
                <li>Abitur (mathematisch-naturwissenschaftlich), Oberschule Al Hasaka</li>
            </ul>
        </section>

        <section>
            <h2>Fachliche Kenntnisse & Stärken</h2>
            <ul>
                <li><strong>Pharmazie:</strong> Bearbeitung ärztlicher Verschreibungen, Informationsbeschaffung, Patientenberatung, Prüfung von Ausgangsstoffen und Fertigarzneimitteln, Dokumentationsaufgaben.</li>
                <li><strong>Sprachen:</strong> Arabisch und Kurdisch (Muttersprache), Deutsch (Wort und Schrift), Englisch B1.</li>
                <li><strong>Soft Skills:</strong> Kommunikationsfähigkeit, Eigeninitiative, Belastbarkeit, schnelle Auffassungsgabe, strukturierte Arbeitsweise, Selbständigkeit, gutes Organisationsvermögen, Diskretion und Loyalität.</li>
            </ul>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>
