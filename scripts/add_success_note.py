import json, os

BASE = os.path.join(os.path.dirname(__file__), '..', 'messages')

content = {
"sl": "Podrobno ponudbo posojila v obliki PDF smo poslali na vaš e-poštni naslov.",
"sk": "Podrobnú ponuku pôžičky vo formáte PDF sme odoslali na vašu e-mailovú adresu.",
"lt": "Išsamų paskolos pasiūlymą PDF formatu išsiuntėme jūsų el. paštu.",
"es": "Hemos enviado la oferta detallada del préstamo en formato PDF a tu correo electrónico.",
"nl": "We hebben het gedetailleerde leningaanbod als PDF naar uw e-mailadres gestuurd.",
"en": "We've sent the detailed loan offer as a PDF to your email address.",
}

for locale, text in content.items():
    path = os.path.join(BASE, f'{locale}.json')
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data['form']['successContractNote'] = text
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'{locale}: updated')
