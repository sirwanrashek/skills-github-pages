<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lebenslauf - Sirwan Rashek</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="top-controls">
        <button id="theme-toggle" data-i18n="btn_darkmode">Dark Mode aktivieren</button>
        <div class="lang-switcher">
            <button onclick="changeLanguage('de')">🇩🇪 DE</button>
            <button onclick="changeLanguage('en')">🇬🇧 EN</button>
            <button onclick="changeLanguage('ar')">🇸🇾 AR</button>
        </div>
    </div>

    <div class="container">
        <header>
            <h1>Sirwan Rashek</h1>
            <p data-i18n="contact_info">Kufsteiner Strasse 17, 45899 Gelsenkirchen | Tel: 015739383139 | E-Mail: Sirwanrashek@hotmail.com</p>
        </header>

        <section>
            <h2 data-i18n="header_academic">Akademischer Werdegang</h2>
            <p><strong data-i18n="study_title">Studium der Informatik (B.Sc.)</strong><br>
            <span data-i18n="study_desc">Westfälische Hochschule Gelsenkirchen, aktuell im 6. Fachsemester.</span></p>
        </section>

        <section>
            <h2 data-i18n="header_skills">IT-Kenntnisse & Kompetenzen</h2>
            <ul>
                <li data-i18n="skill_software"><strong>Softwaretechnik:</strong> Tiefgehendes Verständnis des gesamten Software-Lebenszyklus...</li>
                <li data-i18n="skill_web"><strong>Webentwicklung:</strong> Konzeption und Realisierung von Webseiten mittels HTML und CSS.</li>
                </ul>
        </section>

        <section>
            <h2 data-i18n="header_experience">Berufserfahrung</h2>
            <div class="job">
                <h3 data-i18n="job_pta_title">Pharmazeutisch-technischer Assistent (PTA)</h3>
                <p><em data-i18n="job_pta_date">Alte Apotheke, Gelsenkirchen | 01.11.2022 - 01.09.2025</em></p>
                <p data-i18n="job_pta_desc">Abgabe von Arzneimitteln auf Rezept, Verkauf von OTC-Präparaten, Herstellung von Arzneimitteln gemäß GMP-Richtlinien, Kundenberatung, Apothekenverwaltung.</p>
            </div>
            </section>
    </div>

    <script src="script.js"></script>
</body>
</html>
