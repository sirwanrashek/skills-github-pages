// Das Wörterbuch mit den Übersetzungen
const translations = {
    "de": {
        "btn_darkmode": "Dark Mode aktivieren",
        "btn_lightmode": "Light Mode aktivieren",
        "contact_info": "Kufsteiner Strasse 17, 45899 Gelsenkirchen | Tel: 015739383139 | E-Mail: Sirwanrashek@hotmail.com",
        "header_academic": "Akademischer Werdegang",
        "study_title": "Studium der Informatik (B.Sc.)",
        "study_desc": "Westfälische Hochschule Gelsenkirchen, aktuell im 6. Fachsemester.",
        "header_skills": "IT-Kenntnisse & Kompetenzen",
        "skill_software": "<strong>Softwaretechnik:</strong> Tiefgehendes Verständnis des gesamten Software-Lebenszyklus...",
        "skill_web": "<strong>Webentwicklung:</strong> Konzeption und Realisierung von Webseiten mittels HTML und CSS.",
        "header_experience": "Berufserfahrung",
        "job_pta_title": "Pharmazeutisch-technischer Assistent (PTA)",
        "job_pta_date": "Alte Apotheke, Gelsenkirchen | 01.11.2022 - 01.09.2025",
        "job_pta_desc": "Abgabe von Arzneimitteln auf Rezept, Verkauf von OTC-Präparaten, Herstellung von Arzneimitteln gemäß GMP-Richtlinien, Kundenberatung, Apothekenverwaltung."
    },
    "en": {
        "btn_darkmode": "Enable Dark Mode",
        "btn_lightmode": "Enable Light Mode",
        "contact_info": "Kufsteiner Strasse 17, 45899 Gelsenkirchen, Germany | Phone: +49 15739383139 | Email: Sirwanrashek@hotmail.com",
        "header_academic": "Academic Background",
        "study_title": "Computer Science (B.Sc.)",
        "study_desc": "Westfälische Hochschule Gelsenkirchen, currently in the 6th semester.",
        "header_skills": "IT Skills & Competencies",
        "skill_software": "<strong>Software Engineering:</strong> In-depth understanding of the entire software lifecycle...",
        "skill_web": "<strong>Web Development:</strong> Design and implementation of websites using HTML and CSS.",
        "header_experience": "Professional Experience",
        "job_pta_title": "Pharmaceutical Technical Assistant (PTA)",
        "job_pta_date": "Alte Apotheke, Gelsenkirchen | 11/2022 - 09/2025",
        "job_pta_desc": "Dispensing prescription medications, sale of OTC products, compounding of medications according to GMP guidelines, customer consultation, pharmacy administration."
    },
    "ar": {
        "btn_darkmode": "تفعيل الوضع الداكن",
        "btn_lightmode": "تفعيل الوضع الفاتح",
        "contact_info": "شارع كوفشتاينر 17، 45899 غيلسنكيرشن | هاتف: 015739383139 | بريد إلكتروني: Sirwanrashek@hotmail.com",
        "header_academic": "الخلفية الأكاديمية",
        "study_title": "دراسة علوم الحاسوب (بكالوريوس)",
        "study_desc": "جامعة ويستفاليا في غيلسنكيرشن، حالياً في الفصل الدراسي السادس.",
        "header_skills": "مهارات وكفاءات تكنولوجيا المعلومات",
        "skill_software": "<strong>هندسة البرمجيات:</strong> فهم عميق لدورة حياة البرمجيات بأكملها...",
        "skill_web": "<strong>تطوير الويب:</strong> تصميم وتنفيذ مواقع الويب باستخدام HTML و CSS.",
        "header_experience": "الخبرة المهنية",
        "job_pta_title": "مساعد صيدلي فني (PTA)",
        "job_pta_date": "صيدلية ألت، غيلسنكيرشن | 01.11.2022 - 01.09.2025",
        "job_pta_desc": "صرف الأدوية بوصفة طبية، بيع الأدوية المتاحة بدون وصفة، تحضير الأدوية وفقًا لإرشادات ممارسات التصنيع الجيدة (GMP)، تقديم الاستشارات للعملاء، إدارة الصيدلية."
    }
};

let currentLang = 'de';

// Funktion zum Ändern der Sprache
function changeLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Text für jedes Element austauschen
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // RTL-Logik für Arabisch
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
}

// Dark Mode Logik (überarbeitet, um die Übersetzung des Buttons beizubehalten)
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = translations[currentLang]["btn_lightmode"];
        } else {
            toggleButton.textContent = translations[currentLang]["btn_darkmode"];
        }
    });
});
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
