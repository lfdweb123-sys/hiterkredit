import json, os

BASE = os.path.join(os.path.dirname(__file__), '..', 'messages')

content = {
"sl": {
  "contractEmail": {
    "subject": "Vaša ponudba posojila Posojilnica — {ref}",
    "greeting": "Pozdravljeni, {name},",
    "intro": "Hvala za oddano vlogo pri Posojilnica. V priponki najdete izračunano ponudbo posojila, pripravljeno na podlagi podatkov, ki ste jih posredovali.",
    "summaryTitle": "Povzetek vaše vloge",
    "amountLabel": "Znesek",
    "durationLabel": "Doba odplačevanja",
    "monthlyLabel": "Mesečni obrok",
    "instructions": "Dokument v priponki natančno preglejte. Za podpis in nadaljnje korake nas kontaktirajte na podpora@posojilnica.com — po potrebi vas lahko kontaktiramo tudi telefonsko.",
    "closing": "Lep pozdrav,\nEkipa Posojilnica"
  }
},
"sk": {
  "contractEmail": {
    "subject": "Vaša ponuka pôžičky Posojilnica — {ref}",
    "greeting": "Dobrý deň, {name},",
    "intro": "Ďakujeme za podanú žiadosť u Posojilnica. V prílohe nájdete vypočítanú ponuku pôžičky pripravenú na základe údajov, ktoré ste nám poskytli.",
    "summaryTitle": "Zhrnutie vašej žiadosti",
    "amountLabel": "Suma",
    "durationLabel": "Doba splácania",
    "monthlyLabel": "Mesačná splátka",
    "instructions": "Dokument v prílohe si pozorne preštudujte. Ohľadom podpisu a ďalších krokov nás kontaktujte na podpora@posojilnica.com — v prípade potreby vás môžeme kontaktovať aj telefonicky.",
    "closing": "S pozdravom,\nTím Posojilnica"
  }
},
"lt": {
  "contractEmail": {
    "subject": "Jūsų Posojilnica paskolos pasiūlymas — {ref}",
    "greeting": "Sveiki, {name},",
    "intro": "Dėkojame už pateiktą paraišką Posojilnica. Priede rasite apskaičiuotą paskolos pasiūlymą, parengtą pagal jūsų pateiktus duomenis.",
    "summaryTitle": "Jūsų paraiškos santrauka",
    "amountLabel": "Suma",
    "durationLabel": "Grąžinimo terminas",
    "monthlyLabel": "Mėnesinė įmoka",
    "instructions": "Atidžiai peržiūrėkite priede pateiktą dokumentą. Dėl pasirašymo ir tolesnių žingsnių susisiekite su mumis el. paštu podpora@posojilnica.com — prireikus galime susisiekti su jumis ir telefonu.",
    "closing": "Pagarbiai,\nPosojilnica komanda"
  }
},
"es": {
  "contractEmail": {
    "subject": "Tu oferta de préstamo Posojilnica — {ref}",
    "greeting": "Hola, {name}:",
    "intro": "Gracias por enviar tu solicitud a Posojilnica. Adjunto encontrarás la oferta de préstamo calculada, preparada a partir de los datos que nos proporcionaste.",
    "summaryTitle": "Resumen de tu solicitud",
    "amountLabel": "Monto",
    "durationLabel": "Plazo de pago",
    "monthlyLabel": "Cuota mensual",
    "instructions": "Revisa cuidadosamente el documento adjunto. Para la firma y los siguientes pasos, contáctanos en podpora@posojilnica.com — si es necesario, también podemos contactarte por teléfono.",
    "closing": "Saludos cordiales,\nEquipo de Posojilnica"
  }
},
"nl": {
  "contractEmail": {
    "subject": "Uw Posojilnica leningaanbod — {ref}",
    "greeting": "Hallo {name},",
    "intro": "Bedankt voor uw aanvraag bij Posojilnica. In de bijlage vindt u het berekende leningaanbod, opgesteld op basis van de door u verstrekte gegevens.",
    "summaryTitle": "Samenvatting van uw aanvraag",
    "amountLabel": "Bedrag",
    "durationLabel": "Looptijd",
    "monthlyLabel": "Maandelijkse aflossing",
    "instructions": "Bekijk het bijgevoegde document zorgvuldig. Neem voor ondertekening en de volgende stappen contact met ons op via podpora@posojilnica.com — indien nodig kunnen wij u ook telefonisch contacteren.",
    "closing": "Met vriendelijke groet,\nHet Posojilnica-team"
  }
},
"en": {
  "contractEmail": {
    "subject": "Your Posojilnica loan offer — {ref}",
    "greeting": "Hello {name},",
    "intro": "Thank you for submitting your application to Posojilnica. Attached is the calculated loan offer, prepared from the details you provided.",
    "summaryTitle": "Summary of your application",
    "amountLabel": "Amount",
    "durationLabel": "Repayment term",
    "monthlyLabel": "Monthly instalment",
    "instructions": "Please review the attached document carefully. For signature and next steps, contact us at podpora@posojilnica.com — we may also reach out to you by phone if needed.",
    "closing": "Best regards,\nThe Posojilnica Team"
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
