import json, os

BASE = os.path.join(os.path.dirname(__file__), '..', 'messages')

content = {
"sl": {
  "meta": {
    "titleContact": "Kontakt — Posojilnica",
    "descContact": "Kontaktirajte ekipo Posojilnica za vsa vprašanja o posojilih, vlogah ali sodelovanju."
  },
  "contactPage": {
    "eyebrow": "Smo tu za vas",
    "title": "Kontaktirajte ekipo Posojilnica",
    "subtitle": "Imate vprašanje o posojilu, vlogi ali našem delovanju v vaši državi? Pišite nam — odgovorimo hitro.",
    "emailLabel": "E-pošta",
    "emailValue": "podpora@posojilnica.com",
    "responseLabel": "Odzivni čas",
    "responseValue": "Običajno v 24 urah ob delavnikih",
    "hoursLabel": "Poslovni čas podpore",
    "hoursValue": "Ponedeljek–petek, 9.00–17.00 (CET)"
  },
  "trust": {
    "title": "Delujemo v skladu z lokalno zakonodajo",
    "subtitle": "V vsaki državi upoštevamo predpise pristojnega finančnega nadzornega organa."
  },
  "legal": {
    "termsTitle": "Splošni pogoji",
    "termsP1": "Ta dokument ureja pogoje uporabe spletnega mesta Posojilnica (posojilnica.com) ter storitev simulacije in oddaje vloge za posojilo. Z uporabo spletnega mesta se strinjate s temi pogoji.",
    "termsP2": "Simulacija posojila na spletnem mestu je zgolj informativne narave in ne predstavlja zavezujoče ponudbe kredita. Končna ponudba je odvisna od individualne ocene vloge.",
    "termsP3": "Posojilnica si pridržuje pravico, da brez navedbe razloga zavrne katero koli vlogo za posojilo, v skladu z veljavno zakonodajo posamezne države.",
    "termsP4": "Vsebina spletnega mesta je zaščitena z avtorskimi pravicami. Kopiranje ali razširjanje vsebine brez dovoljenja ni dovoljeno.",
    "privacyTitle": "Zasebnost",
    "privacyP1": "Posojilnica spoštuje vašo zasebnost. Simulator posojila na tem spletnem mestu ne zahteva nobenih osebnih podatkov in nič se ne shranjuje na naših strežnikih — vrednosti ostanejo samo v vašem brskalniku med sejo.",
    "privacyP2": "Osebne podatke (ime, priimek, e-pošto, telefon), ki nam jih posredujete prek kontaktnega obrazca ali obrazca za vlogo za posojilo, uporabimo izključno za obravnavo vaše vloge in jih pošljemo neposredno na naš e-poštni naslov. Teh podatkov ne shranjujemo v bazi podatkov.",
    "privacyP3": "Vaših podatkov nikoli ne prodajamo ali posredujemo tretjim osebam za trženjske namene.",
    "privacyP4": "Za vsa vprašanja glede varstva podatkov nas kontaktirajte na podpora@posojilnica.com.",
    "cookiesTitle": "Piškotki",
    "cookiesP1": "To spletno mesto uporablja minimalno količino tehničnih podatkov, shranjenih v vašem brskalniku (session storage), izključno zato, da si med vašim obiskom zapomni vrednosti iz simulatorja posojila (znesek in dobo odplačevanja), ko preidete na obrazec za vlogo.",
    "cookiesP2": "Ti podatki se samodejno izbrišejo, ko zaprete brskalnik, in nikoli niso poslani na noben strežnik.",
    "cookiesP3": "Spletno mesto ne uporablja sledilnih ali oglaševalskih piškotkov tretjih oseb."
  }
},
"sk": {
  "meta": {
    "titleContact": "Kontakt — Posojilnica",
    "descContact": "Kontaktujte tím Posojilnica so všetkými otázkami o pôžičkách, žiadostiach alebo spolupráci."
  },
  "contactPage": {
    "eyebrow": "Sme tu pre vás",
    "title": "Kontaktujte tím Posojilnica",
    "subtitle": "Máte otázku o pôžičke, žiadosti alebo našom pôsobení vo vašej krajine? Napíšte nám — odpovieme rýchlo.",
    "emailLabel": "E-mail",
    "emailValue": "podpora@posojilnica.com",
    "responseLabel": "Doba odozvy",
    "responseValue": "Zvyčajne do 24 hodín v pracovné dni",
    "hoursLabel": "Prevádzková doba podpory",
    "hoursValue": "Pondelok–piatok, 9:00–17:00 (SEČ)"
  },
  "trust": {
    "title": "Pôsobíme v súlade s miestnou legislatívou",
    "subtitle": "V každej krajine dodržiavame predpisy príslušného orgánu finančného dohľadu."
  },
  "legal": {
    "termsTitle": "Všeobecné podmienky",
    "termsP1": "Tento dokument upravuje podmienky používania webovej stránky Posojilnica (posojilnica.com) a služieb simulácie a žiadosti o pôžičku. Používaním stránky súhlasíte s týmito podmienkami.",
    "termsP2": "Simulácia pôžičky na stránke má výlučne informatívny charakter a nepredstavuje záväznú ponuku úveru. Konečná ponuka závisí od individuálneho posúdenia žiadosti.",
    "termsP3": "Posojilnica si vyhradzuje právo odmietnuť akúkoľvek žiadosť o pôžičku bez uvedenia dôvodu, v súlade s platnou legislatívou danej krajiny.",
    "termsP4": "Obsah stránky je chránený autorským právom. Akékoľvek kopírovanie alebo šírenie obsahu bez súhlasu je zakázané.",
    "privacyTitle": "Súkromie",
    "privacyP1": "Posojilnica rešpektuje vaše súkromie. Simulátor pôžičky na tejto stránke nevyžaduje žiadne osobné údaje a nič sa neukladá na našich serveroch — hodnoty zostávajú iba vo vašom prehliadači počas relácie.",
    "privacyP2": "Osobné údaje (meno, priezvisko, e-mail, telefón), ktoré nám poskytnete prostredníctvom kontaktného formulára alebo formulára žiadosti o pôžičku, sú použité výlučne na účely vybavenia vašej žiadosti a odoslané priamo na náš e-mail. Tieto údaje neukladáme do databázy.",
    "privacyP3": "Vaše údaje nikdy nepredávame ani neposkytujeme tretím stranám na marketingové účely.",
    "privacyP4": "Pre akékoľvek otázky týkajúce sa ochrany údajov nás kontaktujte na podpora@posojilnica.com.",
    "cookiesTitle": "Cookies",
    "cookiesP1": "Táto stránka používa minimálne množstvo technických údajov uložených vo vašom prehliadači (session storage), a to výlučne na to, aby si počas vašej návštevy zapamätala hodnoty zo simulátora pôžičky (sumu a dobu splácania), keď prejdete na formulár žiadosti.",
    "cookiesP2": "Tieto údaje sa automaticky vymažú, keď zatvoríte prehliadač, a nikdy nie sú odoslané na žiadny server.",
    "cookiesP3": "Stránka nepoužíva sledovacie ani reklamné cookies tretích strán."
  }
},
"lt": {
  "meta": {
    "titleContact": "Kontaktai — Posojilnica",
    "descContact": "Susisiekite su Posojilnica komanda dėl paskolų, paraiškų ar bendradarbiavimo klausimų."
  },
  "contactPage": {
    "eyebrow": "Esame čia dėl jūsų",
    "title": "Susisiekite su Posojilnica komanda",
    "subtitle": "Turite klausimą apie paskolą, paraišką ar mūsų veiklą jūsų šalyje? Parašykite mums — atsakysime greitai.",
    "emailLabel": "El. paštas",
    "emailValue": "podpora@posojilnica.com",
    "responseLabel": "Atsakymo laikas",
    "responseValue": "Paprastai per 24 val. darbo dienomis",
    "hoursLabel": "Palaikymo darbo laikas",
    "hoursValue": "Pirmadienis–penktadienis, 9.00–17.00 (CET)"
  },
  "trust": {
    "title": "Veikiame laikydamiesi vietinių teisės aktų",
    "subtitle": "Kiekvienoje šalyje laikomės atitinkamos finansų priežiūros institucijos reikalavimų."
  },
  "legal": {
    "termsTitle": "Bendrosios sąlygos",
    "termsP1": "Šis dokumentas nustato Posojilnica svetainės (posojilnica.com) bei paskolos skaičiuoklės ir paraiškos teikimo paslaugų naudojimo sąlygas. Naudodamiesi svetaine sutinkate su šiomis sąlygomis.",
    "termsP2": "Svetainėje pateikiama paskolos skaičiuoklė yra tik informacinio pobūdžio ir nėra įpareigojantis kredito pasiūlymas. Galutinis pasiūlymas priklauso nuo individualaus paraiškos vertinimo.",
    "termsP3": "Posojilnica pasilieka teisę atmesti bet kurią paskolos paraišką nenurodydama priežasties, laikantis atitinkamos šalies galiojančių teisės aktų.",
    "termsP4": "Svetainės turinys yra saugomas autorių teisių. Bet koks turinio kopijavimas ar platinimas be sutikimo draudžiamas.",
    "privacyTitle": "Privatumas",
    "privacyP1": "Posojilnica gerbia jūsų privatumą. Šioje svetainėje esanti paskolos skaičiuoklė nereikalauja jokių asmens duomenų, ir niekas nėra saugoma mūsų serveriuose — reikšmės išlieka tik jūsų naršyklėje sesijos metu.",
    "privacyP2": "Asmens duomenys (vardas, pavardė, el. paštas, telefonas), kuriuos pateikiate per kontaktų formą ar paskolos paraiškos formą, naudojami išimtinai jūsų paraiškos nagrinėjimui ir siunčiami tiesiogiai mūsų el. paštu. Šių duomenų nesaugome duomenų bazėje.",
    "privacyP3": "Niekada neparduodame ir neperduodame jūsų duomenų trečiosioms šalims rinkodaros tikslais.",
    "privacyP4": "Dėl bet kokių klausimų, susijusių su duomenų apsauga, kreipkitės el. paštu podpora@posojilnica.com.",
    "cookiesTitle": "Slapukai",
    "cookiesP1": "Ši svetainė naudoja minimalų kiekį techninių duomenų, saugomų jūsų naršyklėje (session storage), išimtinai tam, kad apsilankymo metu prisimintų paskolos skaičiuoklės reikšmes (sumą ir terminą), kai pereinate į paraiškos formą.",
    "cookiesP2": "Šie duomenys automatiškai ištrinami uždarius naršyklę ir niekada nesiunčiami į jokį serverį.",
    "cookiesP3": "Svetainė nenaudoja trečiųjų šalių sekimo ar reklamos slapukų."
  }
},
"es": {
  "meta": {
    "titleContact": "Contacto — Posojilnica",
    "descContact": "Contacta al equipo de Posojilnica para cualquier pregunta sobre préstamos, solicitudes o colaboraciones."
  },
  "contactPage": {
    "eyebrow": "Estamos aquí para ti",
    "title": "Contacta al equipo de Posojilnica",
    "subtitle": "¿Tienes una pregunta sobre un préstamo, una solicitud o nuestra operación en tu país? Escríbenos — respondemos rápido.",
    "emailLabel": "Correo electrónico",
    "emailValue": "podpora@posojilnica.com",
    "responseLabel": "Tiempo de respuesta",
    "responseValue": "Normalmente en 24 horas en días laborables",
    "hoursLabel": "Horario de atención",
    "hoursValue": "Lunes a viernes, 9:00–17:00 (CET)"
  },
  "trust": {
    "title": "Operamos conforme a la normativa local",
    "subtitle": "En cada país respetamos las regulaciones de la autoridad de supervisión financiera correspondiente."
  },
  "legal": {
    "termsTitle": "Términos y condiciones",
    "termsP1": "Este documento regula las condiciones de uso del sitio web Posojilnica (posojilnica.com) y de los servicios de simulación y solicitud de préstamo. Al usar el sitio, aceptas estos términos.",
    "termsP2": "El simulador de préstamo disponible en el sitio tiene un carácter meramente informativo y no constituye una oferta de crédito vinculante. La oferta final depende de la evaluación individual de la solicitud.",
    "termsP3": "Posojilnica se reserva el derecho de rechazar cualquier solicitud de préstamo sin indicar motivo, conforme a la legislación vigente en cada país.",
    "termsP4": "El contenido del sitio está protegido por derechos de autor. Queda prohibida la copia o distribución del contenido sin autorización.",
    "privacyTitle": "Privacidad",
    "privacyP1": "Posojilnica respeta tu privacidad. El simulador de préstamo de este sitio no requiere ningún dato personal y nada se almacena en nuestros servidores — los valores permanecen solo en tu navegador durante la sesión.",
    "privacyP2": "Los datos personales (nombre, apellido, correo electrónico, teléfono) que nos proporcionas a través del formulario de contacto o de solicitud de préstamo se utilizan exclusivamente para procesar tu solicitud y se envían directamente a nuestro correo. No almacenamos estos datos en una base de datos.",
    "privacyP3": "Nunca vendemos ni compartimos tus datos con terceros con fines de marketing.",
    "privacyP4": "Para cualquier pregunta sobre protección de datos, contáctanos en podpora@posojilnica.com.",
    "cookiesTitle": "Cookies",
    "cookiesP1": "Este sitio utiliza una cantidad mínima de datos técnicos almacenados en tu navegador (session storage), únicamente para recordar durante tu visita los valores del simulador de préstamo (monto y plazo) al pasar al formulario de solicitud.",
    "cookiesP2": "Estos datos se eliminan automáticamente al cerrar el navegador y nunca se envían a ningún servidor.",
    "cookiesP3": "El sitio no utiliza cookies de seguimiento ni publicitarias de terceros."
  }
},
"nl": {
  "meta": {
    "titleContact": "Contact — Posojilnica",
    "descContact": "Neem contact op met het Posojilnica-team voor al uw vragen over leningen, aanvragen of samenwerking."
  },
  "contactPage": {
    "eyebrow": "Wij staan voor u klaar",
    "title": "Neem contact op met Posojilnica",
    "subtitle": "Heeft u een vraag over een lening, een aanvraag of onze werking in uw land? Schrijf ons — wij antwoorden snel.",
    "emailLabel": "E-mail",
    "emailValue": "podpora@posojilnica.com",
    "responseLabel": "Reactietijd",
    "responseValue": "Doorgaans binnen 24 uur op werkdagen",
    "hoursLabel": "Openingstijden ondersteuning",
    "hoursValue": "Maandag–vrijdag, 9.00–17.00 (CET)"
  },
  "trust": {
    "title": "Wij opereren conform de lokale regelgeving",
    "subtitle": "In elk land houden wij ons aan de voorschriften van de bevoegde financiële toezichthouder."
  },
  "legal": {
    "termsTitle": "Algemene voorwaarden",
    "termsP1": "Dit document regelt de gebruiksvoorwaarden van de website Posojilnica (posojilnica.com) en de diensten voor leningsimulatie en -aanvraag. Door de website te gebruiken, gaat u akkoord met deze voorwaarden.",
    "termsP2": "De leningsimulator op de website is uitsluitend informatief en vormt geen bindend kredietaanbod. Het uiteindelijke aanbod hangt af van de individuele beoordeling van de aanvraag.",
    "termsP3": "Posojilnica behoudt zich het recht voor om elke leningaanvraag zonder opgave van reden te weigeren, in overeenstemming met de geldende wetgeving van het betreffende land.",
    "termsP4": "De inhoud van de website is auteursrechtelijk beschermd. Het kopiëren of verspreiden van de inhoud zonder toestemming is verboden.",
    "privacyTitle": "Privacy",
    "privacyP1": "Posojilnica respecteert uw privacy. De leningsimulator op deze website vereist geen persoonsgegevens en er wordt niets op onze servers opgeslagen — de waarden blijven alleen in uw browser tijdens de sessie.",
    "privacyP2": "Persoonsgegevens (voornaam, achternaam, e-mail, telefoon) die u via het contactformulier of het leningaanvraagformulier verstrekt, worden uitsluitend gebruikt voor de verwerking van uw aanvraag en rechtstreeks naar ons e-mailadres verzonden. Wij bewaren deze gegevens niet in een database.",
    "privacyP3": "Wij verkopen of delen uw gegevens nooit met derden voor marketingdoeleinden.",
    "privacyP4": "Voor vragen over gegevensbescherming kunt u contact met ons opnemen via podpora@posojilnica.com.",
    "cookiesTitle": "Cookies",
    "cookiesP1": "Deze website gebruikt een minimale hoeveelheid technische gegevens die in uw browser worden opgeslagen (session storage), uitsluitend om tijdens uw bezoek de waarden van de leningsimulator (bedrag en looptijd) te onthouden wanneer u naar het aanvraagformulier gaat.",
    "cookiesP2": "Deze gegevens worden automatisch verwijderd wanneer u uw browser sluit en worden nooit naar een server verzonden.",
    "cookiesP3": "De website gebruikt geen trackings- of reclamecookies van derden."
  }
},
"en": {
  "meta": {
    "titleContact": "Contact — Posojilnica",
    "descContact": "Get in touch with the Posojilnica team for any question about loans, applications or partnerships."
  },
  "contactPage": {
    "eyebrow": "We're here for you",
    "title": "Contact the Posojilnica team",
    "subtitle": "Got a question about a loan, an application, or how we operate in your country? Write to us — we reply quickly.",
    "emailLabel": "Email",
    "emailValue": "podpora@posojilnica.com",
    "responseLabel": "Response time",
    "responseValue": "Usually within 24 hours on business days",
    "hoursLabel": "Support hours",
    "hoursValue": "Monday–Friday, 9:00 AM–5:00 PM (CET)"
  },
  "trust": {
    "title": "We operate in line with local regulation",
    "subtitle": "In every country, we follow the rules set by the relevant financial supervisory authority."
  },
  "legal": {
    "termsTitle": "Terms & conditions",
    "termsP1": "This document governs the terms of use of the Posojilnica website (posojilnica.com) and its loan simulation and application services. By using the site, you agree to these terms.",
    "termsP2": "The loan simulator on the website is for information purposes only and does not constitute a binding credit offer. The actual offer depends on an individual assessment of the application.",
    "termsP3": "Posojilnica reserves the right to decline any loan application without stating a reason, in accordance with the applicable legislation of each country.",
    "termsP4": "The content of the website is protected by copyright. Copying or distributing the content without permission is prohibited.",
    "privacyTitle": "Privacy",
    "privacyP1": "Posojilnica respects your privacy. The loan simulator on this site requires no personal data, and nothing is stored on our servers — the figures remain only in your browser during your session.",
    "privacyP2": "Personal data (first name, last name, email, phone) that you provide through the contact form or the loan application form is used solely to process your application and is sent directly to our email. We do not store this data in a database.",
    "privacyP3": "We never sell or share your data with third parties for marketing purposes.",
    "privacyP4": "For any questions about data protection, contact us at podpora@posojilnica.com.",
    "cookiesTitle": "Cookies",
    "cookiesP1": "This website uses a minimal amount of technical data stored in your browser (session storage), solely to remember the loan simulator figures (amount and term) during your visit when you move to the application form.",
    "cookiesP2": "This data is automatically deleted when you close your browser and is never sent to any server.",
    "cookiesP3": "The website does not use third-party tracking or advertising cookies."
  }
}
}

for locale, new_keys in content.items():
    path = os.path.join(BASE, f'{locale}.json')
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    for ns, values in new_keys.items():
        if ns in data:
            data[ns].update(values)
        else:
            data[ns] = values
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'{locale}: updated')
