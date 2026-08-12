export type ContractText = {
  title: string;
  modelNote: string;
  refLabel: string;
  dateLabel: string;
  sec1Title: string;
  nameLabel: string;
  surnameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  sec2Title: string;
  amountLabel: string;
  durationLabel: string;
  monthsUnit: string;
  purposeLabel: string;
  purposeValue: string;
  sec2Note: string;
  sec3Title: string;
  nominalRateLabel: string;
  aprLabel: string;
  feesLabel: string;
  feesValue: string;
  totalCostLabel: string;
  totalDueLabel: string;
  installmentsCountLabel: string;
  installmentAmountLabel: string;
  frequencyLabel: string;
  frequencyValue: string;
  sec3Note: string;
  sec4Title: string;
  sec4Text: string;
  sec5Title: string;
  sec5Text: string;
  plannedAmountLabel: string;
  accountLabel: string;
  accountValue: string;
  sec6Title: string;
  sec6Text: string;
  firstInstallmentLabel: string;
  lastInstallmentLabel: string;
  sec7Title: string;
  sec7Text: string;
  sec8Title: string;
  sec8Text: string;
  sec9Title: string;
  sec9Text: string;
  sec10Title: string;
  sec10Text: string;
  sec11Title: string;
  sec11Text: string;
  borrowerNameLabel: string;
  signatureLabel: string;
  lenderTitle: string;
  companyLabel: string;
  websiteLabel: string;
  addressLabel: string;
  addressValue: string;
  regNumberLabel: string;
  regNumberValue: string;
  lenderEmailLabel: string;
  repLabel: string;
  repValue: string;
};

export const CONTRACT_TEXT: Record<string, ContractText> = {
  sl: {
    title: 'POGODBA O POTROŠNIŠKEM KREDITU',
    modelNote: 'Vzorčni dokument, ustvarjen samodejno na podlagi oddane vloge',
    refLabel: 'Referenca dosjeja',
    dateLabel: 'Datum',
    sec1Title: '1. IDENTIFIKACIJA POSOJILOJEMALCA',
    nameLabel: 'Ime',
    surnameLabel: 'Priimek',
    emailLabel: 'E-poštni naslov',
    phoneLabel: 'Telefonska številka',
    sec2Title: '2. ZNAČILNOSTI KREDITA',
    amountLabel: 'Zaprošeni znesek kredita',
    durationLabel: 'Želena doba odplačevanja',
    monthsUnit: 'mesecev',
    purposeLabel: 'Navedeni namen',
    purposeValue: 'Osebno financiranje',
    sec2Note:
      'Dokončna odobritev kredita je pogojena s presojo kreditne sposobnosti posojilojemalca in izpolnjevanjem vseh veljavnih zakonskih pogojev.',
    sec3Title: '3. FINANČNI POGOJI',
    nominalRateLabel: 'Nominalna letna obrestna mera',
    aprLabel: 'Efektivna letna obrestna mera (EOM)',
    feesLabel: 'Morebitni stroški in provizije',
    feesValue: 'Brez stroškov ob odobritvi ali izplačilu kredita',
    totalCostLabel: 'Skupni strošek kredita za posojilojemalca',
    totalDueLabel: 'Skupni znesek, ki ga dolguje posojilojemalec',
    installmentsCountLabel: 'Število obrokov',
    installmentAmountLabel: 'Znesek posameznega obroka',
    frequencyLabel: 'Pogostost odplačil',
    frequencyValue: 'Mesečno',
    sec3Note:
      'Noben znesek se ne sme predstaviti kot obvezen, ne da bi bil predhodno opredeljen, utemeljen in vključen v predpogodbene informacije, kadar to zahteva zakonodaja.',
    sec4Title: '4. STROŠKI',
    sec4Text:
      'Vsak morebitni strošek mora biti jasno naveden pred sklenitvijo pogodbe, skupaj z zneskom ali metodo njegove določitve. Stroški se ne smejo umetno poimenovati kot »stroški izplačila«, »taksa«, »obvezno zavarovanje« ali druga dajatev zgolj z namenom pridobitve predhodnega plačila posojilojemalca. Ta ponudba ne vključuje nobenega predhodnega plačila ali provizije pred izplačilom kredita.',
    sec5Title: '5. IZPLAČILO KREDITA',
    sec5Text:
      'Po dokončni potrditvi dosjeja in izpolnitvi vseh zakonsko predpisanih formalnosti se znesek kredita nakaže na bančni račun, ki ga navede posojilojemalec. Za izplačilo kredita ni potrebno nobeno predhodno plačilo.',
    plannedAmountLabel: 'Predvideni znesek izplačila',
    accountLabel: 'Račun upravičenca',
    accountValue: '[bo dopolnjeno po preverjanju identitete posojilojemalca]',
    sec6Title: '6. ODPLAČEVANJE',
    sec6Text:
      'Posojilojemalec se zavezuje, da bo kredit odplačal v skladu s spodaj navedenim okvirnim načrtom odplačil, izračunanim na podlagi zaprošenega zneska in dobe odplačevanja.',
    firstInstallmentLabel: 'Predviden datum prvega obroka',
    lastInstallmentLabel: 'Predviden datum zadnjega obroka',
    sec7Title: '7. PREDČASNO ODPLAČILO',
    sec7Text:
      'Posojilojemalec lahko, kadar so izpolnjeni zakonski pogoji, uveljavlja pravice v zvezi s predčasnim odplačilom kredita. Morebitna nadomestila ali stroški, povezani s predčasnim odplačilom, morajo biti skladni z veljavnimi predpisi.',
    sec8Title: '8. ZAMUDA PRI PLAČILU',
    sec8Text:
      'V primeru zamude ali neplačila veljajo posledice, določene v pogodbi in v veljavni zakonodaji. Posojilojemalcu se ne sme zaračunati noben nepredviden ali nepooblaščen strošek.',
    sec9Title: '9. PRAVICA DO ODSTOPA',
    sec9Text:
      'Kadar kredit spada v okvir veljavnega režima potrošniškega kreditiranja, ima posojilojemalec pravico do odstopa od pogodbe v skladu z veljavno zakonodajo. Postopek, rok in način uveljavljanja te pravice morajo biti posojilojemalcu jasno sporočeni pred sklenitvijo pogodbe ali ob njej.',
    sec10Title: '10. PREDPOGODBENE INFORMACIJE',
    sec10Text:
      'Pred sklenitvijo pogodbe mora posojilojemalec na trajnem nosilcu podatkov prejeti vse informacije, potrebne za primerjavo in razumevanje ponudbe, vključno z zneskom kredita, dobo odplačevanja, obrestno mero, EOM, skupnimi stroški, zneskom obrokov in drugimi veljavnimi stroški.',
    sec11Title: '11. SPREJETJE',
    sec11Text:
      'Posojilojemalec potrjuje, da je prejel potrebne informacije o ponudbi in da je imel možnost seznaniti se z veljavnimi pogoji pred sklenitvijo pogodbe.',
    borrowerNameLabel: 'Ime posojilojemalca',
    signatureLabel: 'Podpis',
    lenderTitle: 'POSOJILODAJALEC',
    companyLabel: 'Naziv družbe',
    websiteLabel: 'Spletno mesto',
    addressLabel: 'Naslov',
    addressValue: '[dopolni se z uradnim registriranim naslovom družbe]',
    regNumberLabel: 'Matična številka / številka dovoljenja',
    regNumberValue: '[dopolni se pred dokončno sklenitvijo pogodbe]',
    lenderEmailLabel: 'E-pošta',
    repLabel: 'Pooblaščeni predstavnik',
    repValue: 'Ekipa Posojilnica',
  },
  sk: {
    title: 'ZMLUVA O SPOTREBITEĽSKOM ÚVERE',
    modelNote: 'Vzorový dokument vygenerovaný automaticky na základe podanej žiadosti',
    refLabel: 'Referencia spisu',
    dateLabel: 'Dátum',
    sec1Title: '1. IDENTIFIKÁCIA DLŽNÍKA',
    nameLabel: 'Meno',
    surnameLabel: 'Priezvisko',
    emailLabel: 'E-mailová adresa',
    phoneLabel: 'Telefónne číslo',
    sec2Title: '2. CHARAKTERISTIKA ÚVERU',
    amountLabel: 'Požadovaná výška úveru',
    durationLabel: 'Požadovaná doba splácania',
    monthsUnit: 'mesiacov',
    purposeLabel: 'Uvedený účel',
    purposeValue: 'Osobné financovanie',
    sec2Note:
      'Konečné poskytnutie úveru je podmienené posúdením bonity dlžníka a splnením všetkých platných zákonných podmienok.',
    sec3Title: '3. FINANČNÉ PODMIENKY',
    nominalRateLabel: 'Nominálna ročná úroková sadzba',
    aprLabel: 'Ročná percentuálna miera nákladov (RPMN)',
    feesLabel: 'Prípadné poplatky a provízie',
    feesValue: 'Bez poplatkov pri schválení alebo vyplatení úveru',
    totalCostLabel: 'Celkové náklady úveru pre dlžníka',
    totalDueLabel: 'Celková suma, ktorú dlží dlžník',
    installmentsCountLabel: 'Počet splátok',
    installmentAmountLabel: 'Výška jednej splátky',
    frequencyLabel: 'Frekvencia splátok',
    frequencyValue: 'Mesačne',
    sec3Note:
      'Žiadna suma nesmie byť prezentovaná ako povinná bez toho, aby bola vopred určená, odôvodnená a zahrnutá do predzmluvných informácií, ak to vyžaduje legislatíva.',
    sec4Title: '4. POPLATKY',
    sec4Text:
      'Akýkoľvek prípadný poplatok musí byť jasne uvedený pred uzavretím zmluvy spolu s jeho výškou alebo spôsobom jej určenia. Poplatky nesmú byť umelo označované ako „poplatok za uvoľnenie prostriedkov“, „daň“, „povinné poistenie“ alebo iný poplatok len s cieľom získať platbu od dlžníka vopred. Táto ponuka nezahŕňa žiadnu platbu vopred ani províziu pred vyplatením úveru.',
    sec5Title: '5. VYPLATENIE ÚVERU',
    sec5Text:
      'Po konečnom schválení spisu a splnení všetkých zákonom požadovaných formalít sa suma úveru poukáže na bankový účet uvedený dlžníkom. Na vyplatenie úveru sa nevyžaduje žiadna platba vopred.',
    plannedAmountLabel: 'Plánovaná suma vyplatenia',
    accountLabel: 'Účet príjemcu',
    accountValue: '[doplní sa po overení totožnosti dlžníka]',
    sec6Title: '6. SPLÁCANIE',
    sec6Text:
      'Dlžník sa zaväzuje splácať úver podľa nižšie uvedeného orientačného splátkového kalendára vypočítaného na základe požadovanej sumy a doby splácania.',
    firstInstallmentLabel: 'Predpokladaný dátum prvej splátky',
    lastInstallmentLabel: 'Predpokladaný dátum poslednej splátky',
    sec7Title: '7. PREDČASNÉ SPLATENIE',
    sec7Text:
      'Dlžník môže, pokiaľ sú splnené zákonné podmienky, využiť práva týkajúce sa predčasného splatenia úveru. Prípadné kompenzácie alebo poplatky spojené s predčasným splatením musia byť v súlade s platnými predpismi.',
    sec8Title: '8. OMEŠKANIE PLATIEB',
    sec8Text:
      'V prípade omeškania alebo nezaplatenia platia dôsledky uvedené v zmluve a v platnej legislatíve. Dlžníkovi nemôže byť účtovaný žiadny neplánovaný alebo neautorizovaný poplatok.',
    sec9Title: '9. PRÁVO NA ODSTÚPENIE',
    sec9Text:
      'Ak úver patrí do režimu spotrebiteľského úveru, dlžník má právo na odstúpenie od zmluvy v súlade s platnou legislatívou. Postup, lehota a spôsob uplatnenia tohto práva musia byť dlžníkovi jasne oznámené pred uzavretím zmluvy alebo pri jej uzavretí.',
    sec10Title: '10. PREDZMLUVNÉ INFORMÁCIE',
    sec10Text:
      'Pred uzavretím zmluvy musí dlžník na trvalom nosiči dostať všetky informácie potrebné na porovnanie a pochopenie ponuky, vrátane výšky úveru, doby splácania, úrokovej sadzby, RPMN, celkových nákladov, výšky splátok a ďalších platných poplatkov.',
    sec11Title: '11. PRIJATIE',
    sec11Text:
      'Dlžník potvrdzuje, že dostal potrebné informácie o ponuke a mal možnosť oboznámiť sa s platnými podmienkami pred uzavretím zmluvy.',
    borrowerNameLabel: 'Meno dlžníka',
    signatureLabel: 'Podpis',
    lenderTitle: 'VERITEĽ',
    companyLabel: 'Obchodné meno',
    websiteLabel: 'Webová stránka',
    addressLabel: 'Adresa',
    addressValue: '[doplní sa oficiálnou registrovanou adresou spoločnosti]',
    regNumberLabel: 'IČO / číslo povolenia',
    regNumberValue: '[doplní sa pred konečným uzavretím zmluvy]',
    lenderEmailLabel: 'E-mail',
    repLabel: 'Poverený zástupca',
    repValue: 'Tím Posojilnica',
  },
  lt: {
    title: 'VARTOJIMO KREDITO SUTARTIS',
    modelNote: 'Pavyzdinis dokumentas, sugeneruotas automatiškai pagal pateiktą paraišką',
    refLabel: 'Bylos numeris',
    dateLabel: 'Data',
    sec1Title: '1. SKOLININKO DUOMENYS',
    nameLabel: 'Vardas',
    surnameLabel: 'Pavardė',
    emailLabel: 'El. pašto adresas',
    phoneLabel: 'Telefono numeris',
    sec2Title: '2. PASKOLOS SĄLYGOS',
    amountLabel: 'Prašoma paskolos suma',
    durationLabel: 'Pageidaujamas grąžinimo terminas',
    monthsUnit: 'mėn.',
    purposeLabel: 'Nurodyta paskirtis',
    purposeValue: 'Asmeninis finansavimas',
    sec2Note:
      'Galutinis paskolos suteikimas priklauso nuo skolininko mokumo vertinimo ir visų taikomų teisinių sąlygų įvykdymo.',
    sec3Title: '3. FINANSINĖS SĄLYGOS',
    nominalRateLabel: 'Nominali metinė palūkanų norma',
    aprLabel: 'Bendra metinė kredito kainos norma (BVKKMN)',
    feesLabel: 'Galimi mokesčiai ir komisiniai',
    feesValue: 'Jokių mokesčių už patvirtinimą ar išmokėjimą netaikoma',
    totalCostLabel: 'Bendra kredito kaina skolininkui',
    totalDueLabel: 'Bendra skolininko mokėtina suma',
    installmentsCountLabel: 'Įmokų skaičius',
    installmentAmountLabel: 'Vienos įmokos dydis',
    frequencyLabel: 'Mokėjimų dažnumas',
    frequencyValue: 'Kas mėnesį',
    sec3Note:
      'Jokia suma negali būti pateikiama kaip privaloma, jeigu ji nebuvo iš anksto nustatyta, pagrįsta ir įtraukta į ikisutartinę informaciją, kai to reikalauja teisės aktai.',
    sec4Title: '4. MOKESČIAI',
    sec4Text:
      'Bet koks galimas mokestis turi būti aiškiai nurodytas prieš sudarant sutartį, kartu su jo suma arba jos nustatymo metodu. Mokesčiai negali būti dirbtinai vadinami „lėšų išmokėjimo mokesčiu“, „mokesčiu“, „privalomu draudimu“ ar kitu mokėjimu vien tam, kad būtų gautas išankstinis mokėjimas iš skolininko. Šis pasiūlymas neapima jokio išankstinio mokėjimo ar komisinio prieš išmokant paskolą.',
    sec5Title: '5. PASKOLOS IŠMOKĖJIMAS',
    sec5Text:
      'Galutinai patvirtinus bylą ir įvykdžius visus teisės aktų reikalaujamus formalumus, paskolos suma pervedama į skolininko nurodytą banko sąskaitą. Paskolai išmokėti joks išankstinis mokėjimas nereikalingas.',
    plannedAmountLabel: 'Numatoma išmokėjimo suma',
    accountLabel: 'Gavėjo sąskaita',
    accountValue: '[bus papildyta patikrinus skolininko tapatybę]',
    sec6Title: '6. GRĄŽINIMAS',
    sec6Text:
      'Skolininkas įsipareigoja grąžinti paskolą pagal žemiau pateiktą preliminarų grafiką, apskaičiuotą pagal prašomą sumą ir terminą.',
    firstInstallmentLabel: 'Numatoma pirmos įmokos data',
    lastInstallmentLabel: 'Numatoma paskutinės įmokos data',
    sec7Title: '7. IŠANKSTINIS GRĄŽINIMAS',
    sec7Text:
      'Skolininkas gali, kai tenkinamos teisinės sąlygos, pasinaudoti teisėmis, susijusiomis su išankstiniu paskolos grąžinimu. Galimos kompensacijos ar mokesčiai, susiję su išankstiniu grąžinimu, turi atitikti taikomas taisykles.',
    sec8Title: '8. PAVĖLUOTI MOKĖJIMAI',
    sec8Text:
      'Vėlavimo ar nemokėjimo atveju taikomos sutartyje ir galiojančiuose teisės aktuose numatytos pasekmės. Skolininkui negali būti taikomas joks nenumatytas ar nepatvirtintas mokestis.',
    sec9Title: '9. TEISĖ ATSISAKYTI SUTARTIES',
    sec9Text:
      'Kai paskolai taikomas vartojimo kredito režimas, skolininkas turi teisę atsisakyti sutarties pagal taikomus teisės aktus. Šios teisės įgyvendinimo tvarka, terminas ir būdas turi būti aiškiai pranešti skolininkui prieš sudarant sutartį arba jos sudarymo metu.',
    sec10Title: '10. IKISUTARTINĖ INFORMACIJA',
    sec10Text:
      'Prieš skolininkui įsipareigojant, jam patvarioje laikmenoje turi būti pateikta visa informacija, reikalinga pasiūlymui palyginti ir suprasti, įskaitant paskolos sumą, terminą, palūkanų normą, BVKKMN, bendrą kainą, įmokų dydį ir kitus taikomus mokesčius.',
    sec11Title: '11. SUTIKIMAS',
    sec11Text:
      'Skolininkas patvirtina gavęs reikiamą informaciją apie pasiūlymą ir turėjęs galimybę susipažinti su taikomomis sąlygomis prieš sudarant sutartį.',
    borrowerNameLabel: 'Skolininko vardas ir pavardė',
    signatureLabel: 'Parašas',
    lenderTitle: 'KREDITORIUS',
    companyLabel: 'Įmonės pavadinimas',
    websiteLabel: 'Svetainė',
    addressLabel: 'Adresas',
    addressValue: '[bus papildytas oficialiu registruotu įmonės adresu]',
    regNumberLabel: 'Įmonės kodas / licencijos numeris',
    regNumberValue: '[bus papildytas prieš galutinį sutarties sudarymą]',
    lenderEmailLabel: 'El. paštas',
    repLabel: 'Įgaliotas atstovas',
    repValue: 'Posojilnica komanda',
  },
  es: {
    title: 'CONTRATO DE CRÉDITO AL CONSUMO',
    modelNote: 'Documento generado automáticamente a partir de la solicitud enviada',
    refLabel: 'Referencia del expediente',
    dateLabel: 'Fecha',
    sec1Title: '1. IDENTIFICACIÓN DEL PRESTATARIO',
    nameLabel: 'Nombre',
    surnameLabel: 'Apellido',
    emailLabel: 'Correo electrónico',
    phoneLabel: 'Número de teléfono',
    sec2Title: '2. CARACTERÍSTICAS DEL CRÉDITO',
    amountLabel: 'Monto de crédito solicitado',
    durationLabel: 'Plazo de pago deseado',
    monthsUnit: 'meses',
    purposeLabel: 'Finalidad declarada',
    purposeValue: 'Financiamiento personal',
    sec2Note:
      'La concesión definitiva del crédito está sujeta a la evaluación de la solvencia del prestatario y al cumplimiento de todas las condiciones legales aplicables.',
    sec3Title: '3. CONDICIONES FINANCIERAS',
    nominalRateLabel: 'Tasa de interés nominal anual',
    aprLabel: 'Tasa anual equivalente (TAE)',
    feesLabel: 'Posibles cargos y comisiones',
    feesValue: 'Sin cargos por aprobación o desembolso del crédito',
    totalCostLabel: 'Costo total del crédito para el prestatario',
    totalDueLabel: 'Monto total adeudado por el prestatario',
    installmentsCountLabel: 'Número de cuotas',
    installmentAmountLabel: 'Monto de cada cuota',
    frequencyLabel: 'Frecuencia de los pagos',
    frequencyValue: 'Mensual',
    sec3Note:
      'Ningún monto puede presentarse como obligatorio sin haber sido previamente identificado, justificado e incluido en la información precontractual cuando la normativa lo exija.',
    sec4Title: '4. CARGOS',
    sec4Text:
      'Cualquier cargo aplicable debe indicarse claramente antes de la firma del contrato, junto con su monto o el método para determinarlo. Los cargos no pueden calificarse artificialmente como "cargo de desembolso", "impuesto", "seguro obligatorio" u otro concepto con el único fin de obtener un pago anticipado del prestatario. Esta oferta no incluye ningún pago anticipado ni comisión previa al desembolso del crédito.',
    sec5Title: '5. DESEMBOLSO DEL CRÉDITO',
    sec5Text:
      'Tras la aprobación definitiva del expediente y el cumplimiento de todos los trámites legalmente exigidos, el monto del crédito se transfiere a la cuenta bancaria indicada por el prestatario. No se requiere ningún pago anticipado para el desembolso del crédito.',
    plannedAmountLabel: 'Monto previsto del desembolso',
    accountLabel: 'Cuenta beneficiaria',
    accountValue: '[se completará tras la verificación de identidad del prestatario]',
    sec6Title: '6. REEMBOLSO',
    sec6Text:
      'El prestatario se compromete a reembolsar el crédito conforme al calendario orientativo indicado a continuación, calculado según el monto y el plazo solicitados.',
    firstInstallmentLabel: 'Fecha prevista de la primera cuota',
    lastInstallmentLabel: 'Fecha prevista de la última cuota',
    sec7Title: '7. REEMBOLSO ANTICIPADO',
    sec7Text:
      'El prestatario puede, cuando se cumplan las condiciones legales, ejercer los derechos aplicables al reembolso anticipado del crédito. Las posibles compensaciones o cargos vinculados al reembolso anticipado deben respetar la normativa vigente.',
    sec8Title: '8. IMPAGOS',
    sec8Text:
      'En caso de retraso o impago, se aplican las consecuencias previstas en el contrato y en la legislación vigente. No podrá reclamarse al prestatario ningún cargo no previsto o no autorizado.',
    sec9Title: '9. DERECHO DE DESISTIMIENTO',
    sec9Text:
      'Cuando el crédito esté sujeto al régimen de crédito al consumo aplicable, el prestatario goza del derecho de desistimiento previsto por la normativa aplicable. El procedimiento, el plazo y la forma de ejercer este derecho deben comunicarse claramente al prestatario antes o al momento de la firma del contrato.',
    sec10Title: '10. INFORMACIÓN PRECONTRACTUAL',
    sec10Text:
      'Antes de que el prestatario se comprometa, debe recibir en un soporte duradero la información necesaria para comparar y comprender la oferta, incluyendo el monto del crédito, su plazo, la tasa, la TAE, el costo total, el monto de las cuotas y los demás cargos aplicables.',
    sec11Title: '11. ACEPTACIÓN',
    sec11Text:
      'El prestatario reconoce haber recibido la información necesaria sobre la oferta y haber tenido la oportunidad de conocer las condiciones aplicables antes de comprometerse.',
    borrowerNameLabel: 'Nombre del prestatario',
    signatureLabel: 'Firma',
    lenderTitle: 'EL PRESTAMISTA',
    companyLabel: 'Razón social',
    websiteLabel: 'Sitio web',
    addressLabel: 'Dirección',
    addressValue: '[se completará con la dirección legal oficial de la empresa]',
    regNumberLabel: 'Número de registro / licencia',
    regNumberValue: '[se completará antes de la firma definitiva del contrato]',
    lenderEmailLabel: 'Correo electrónico',
    repLabel: 'Representante autorizado',
    repValue: 'Equipo de Posojilnica',
  },
  nl: {
    title: 'CONSUMENTENKREDIETOVEREENKOMST',
    modelNote: 'Document automatisch gegenereerd op basis van de ingediende aanvraag',
    refLabel: 'Dossierreferentie',
    dateLabel: 'Datum',
    sec1Title: '1. IDENTIFICATIE VAN DE KREDIETNEMER',
    nameLabel: 'Voornaam',
    surnameLabel: 'Achternaam',
    emailLabel: 'E-mailadres',
    phoneLabel: 'Telefoonnummer',
    sec2Title: '2. KENMERKEN VAN DE LENING',
    amountLabel: 'Aangevraagd leningbedrag',
    durationLabel: 'Gewenste aflossingsperiode',
    monthsUnit: 'maanden',
    purposeLabel: 'Opgegeven doel',
    purposeValue: 'Persoonlijke financiering',
    sec2Note:
      'De definitieve toekenning van de lening is onderworpen aan de beoordeling van de kredietwaardigheid van de kredietnemer en de naleving van alle toepasselijke wettelijke voorwaarden.',
    sec3Title: '3. FINANCIËLE VOORWAARDEN',
    nominalRateLabel: 'Nominale jaarlijkse rentevoet',
    aprLabel: 'Jaarlijks kostenpercentage (JKP)',
    feesLabel: 'Eventuele kosten en commissies',
    feesValue: 'Geen kosten bij goedkeuring of uitbetaling van de lening',
    totalCostLabel: 'Totale kosten van de lening voor de kredietnemer',
    totalDueLabel: 'Totaal door de kredietnemer verschuldigd bedrag',
    installmentsCountLabel: 'Aantal termijnen',
    installmentAmountLabel: 'Bedrag per termijn',
    frequencyLabel: 'Frequentie van de terugbetalingen',
    frequencyValue: 'Maandelijks',
    sec3Note:
      'Geen enkel bedrag mag als verplicht worden voorgesteld zonder vooraf te zijn vastgesteld, onderbouwd en opgenomen in de precontractuele informatie wanneer de regelgeving dit vereist.',
    sec4Title: '4. KOSTEN',
    sec4Text:
      'Eventuele kosten moeten duidelijk worden vermeld vóór het sluiten van de overeenkomst, samen met het bedrag of de methode om dit te bepalen. Kosten mogen niet kunstmatig worden aangeduid als "uitbetalingskosten", "belasting", "verplichte verzekering" of andere heffing enkel om een vooruitbetaling van de kredietnemer te verkrijgen. Dit aanbod omvat geen enkele vooruitbetaling of commissie vóór uitbetaling van de lening.',
    sec5Title: '5. UITBETALING VAN DE LENING',
    sec5Text:
      'Na definitieve goedkeuring van het dossier en het vervullen van alle wettelijk vereiste formaliteiten wordt het leningbedrag overgemaakt naar de door de kredietnemer opgegeven bankrekening. Voor de uitbetaling van de lening is geen vooruitbetaling vereist.',
    plannedAmountLabel: 'Gepland uitbetalingsbedrag',
    accountLabel: 'Begunstigde rekening',
    accountValue: '[aan te vullen na verificatie van de identiteit van de kredietnemer]',
    sec6Title: '6. TERUGBETALING',
    sec6Text:
      'De kredietnemer verbindt zich ertoe de lening terug te betalen volgens het onderstaande indicatieve aflossingsschema, berekend op basis van het aangevraagde bedrag en de looptijd.',
    firstInstallmentLabel: 'Verwachte datum van de eerste termijn',
    lastInstallmentLabel: 'Verwachte datum van de laatste termijn',
    sec7Title: '7. VERVROEGDE TERUGBETALING',
    sec7Text:
      'De kredietnemer kan, wanneer aan de wettelijke voorwaarden is voldaan, gebruikmaken van de rechten met betrekking tot vervroegde terugbetaling van de lening. Eventuele vergoedingen of kosten in verband met vervroegde terugbetaling moeten voldoen aan de toepasselijke regelgeving.',
    sec8Title: '8. BETALINGSACHTERSTAND',
    sec8Text:
      'In geval van achterstand of niet-betaling gelden de gevolgen zoals bepaald in de overeenkomst en de toepasselijke wetgeving. Er kunnen geen onvoorziene of niet-geautoriseerde kosten aan de kredietnemer in rekening worden gebracht.',
    sec9Title: '9. HERROEPINGSRECHT',
    sec9Text:
      'Wanneer de lening onder het toepasselijke regime voor consumentenkrediet valt, geniet de kredietnemer het herroepingsrecht zoals bepaald door de toepasselijke regelgeving. De procedure, termijn en wijze van uitoefening van dit recht moeten duidelijk aan de kredietnemer worden meegedeeld vóór of bij het sluiten van de overeenkomst.',
    sec10Title: '10. PRECONTRACTUELE INFORMATIE',
    sec10Text:
      'Voordat de kredietnemer zich verbindt, moet hij op een duurzame drager alle informatie ontvangen die nodig is om het aanbod te vergelijken en te begrijpen, waaronder het leningbedrag, de looptijd, de rentevoet, het JKP, de totale kosten, het bedrag van de termijnen en de overige toepasselijke kosten.',
    sec11Title: '11. AANVAARDING',
    sec11Text:
      'De kredietnemer erkent de nodige informatie over het aanbod te hebben ontvangen en de gelegenheid te hebben gehad kennis te nemen van de toepasselijke voorwaarden vóór het aangaan van de verbintenis.',
    borrowerNameLabel: 'Naam van de kredietnemer',
    signatureLabel: 'Handtekening',
    lenderTitle: 'DE KREDIETGEVER',
    companyLabel: 'Bedrijfsnaam',
    websiteLabel: 'Website',
    addressLabel: 'Adres',
    addressValue: '[aan te vullen met het officiële geregistreerde adres van de onderneming]',
    regNumberLabel: 'Registratienummer / vergunningsnummer',
    regNumberValue: '[aan te vullen vóór definitieve ondertekening van de overeenkomst]',
    lenderEmailLabel: 'E-mail',
    repLabel: 'Gemachtigde vertegenwoordiger',
    repValue: 'Posojilnica-team',
  },
  en: {
    title: 'CONSUMER CREDIT AGREEMENT',
    modelNote: 'Document generated automatically from the submitted application',
    refLabel: 'File reference',
    dateLabel: 'Date',
    sec1Title: '1. IDENTIFICATION OF THE BORROWER',
    nameLabel: 'First name',
    surnameLabel: 'Last name',
    emailLabel: 'Email address',
    phoneLabel: 'Phone number',
    sec2Title: '2. LOAN CHARACTERISTICS',
    amountLabel: 'Requested loan amount',
    durationLabel: 'Desired repayment term',
    monthsUnit: 'months',
    purposeLabel: 'Stated purpose',
    purposeValue: 'Personal financing',
    sec2Note:
      'Final approval of the loan is subject to an assessment of the borrower\u2019s creditworthiness and compliance with all applicable legal conditions.',
    sec3Title: '3. FINANCIAL CONDITIONS',
    nominalRateLabel: 'Nominal annual interest rate',
    aprLabel: 'Annual percentage rate of charge (APR)',
    feesLabel: 'Any applicable fees and charges',
    feesValue: 'No fees for approval or disbursement of the loan',
    totalCostLabel: 'Total cost of credit to the borrower',
    totalDueLabel: 'Total amount owed by the borrower',
    installmentsCountLabel: 'Number of instalments',
    installmentAmountLabel: 'Amount of each instalment',
    frequencyLabel: 'Repayment frequency',
    frequencyValue: 'Monthly',
    sec3Note:
      'No amount may be presented as mandatory unless it has been previously identified, justified, and included in the pre-contractual information where required by law.',
    sec4Title: '4. FEES',
    sec4Text:
      'Any applicable fee must be clearly disclosed before the contract is concluded, together with its amount or the method for determining it. Fees may not be artificially labelled as a "disbursement fee", "tax", "mandatory insurance" or other charge for the sole purpose of obtaining an advance payment from the borrower. This offer includes no advance payment or commission prior to disbursement of the loan.',
    sec5Title: '5. DISBURSEMENT OF THE LOAN',
    sec5Text:
      'After final approval of the file and completion of all legally required formalities, the loan amount is transferred to the bank account indicated by the borrower. No advance payment is required for disbursement of the loan.',
    plannedAmountLabel: 'Planned disbursement amount',
    accountLabel: 'Beneficiary account',
    accountValue: '[to be completed after verification of the borrower\u2019s identity]',
    sec6Title: '6. REPAYMENT',
    sec6Text:
      'The borrower undertakes to repay the loan according to the indicative schedule below, calculated based on the requested amount and term.',
    firstInstallmentLabel: 'Expected date of first instalment',
    lastInstallmentLabel: 'Expected date of last instalment',
    sec7Title: '7. EARLY REPAYMENT',
    sec7Text:
      'Where the legal conditions are met, the borrower may exercise the rights applicable to early repayment of the loan. Any compensation or fees linked to early repayment must comply with applicable regulations.',
    sec8Title: '8. LATE PAYMENTS',
    sec8Text:
      'In the event of late or non-payment, the consequences set out in the contract and applicable legislation shall apply. No unforeseen or unauthorised fee may be charged to the borrower.',
    sec9Title: '9. RIGHT OF WITHDRAWAL',
    sec9Text:
      'Where the loan falls under the applicable consumer credit regime, the borrower benefits from the right of withdrawal provided for by applicable regulations. The procedure, time limit and method for exercising this right must be clearly communicated to the borrower before or at the time the contract is concluded.',
    sec10Title: '10. PRE-CONTRACTUAL INFORMATION',
    sec10Text:
      'Before the borrower is bound, the information necessary to compare and understand the offer must be provided on a durable medium, including the loan amount, term, rate, APR, total cost, instalment amount and other applicable costs.',
    sec11Title: '11. ACCEPTANCE',
    sec11Text:
      'The borrower acknowledges having received the necessary information about the offer and having had the opportunity to review the applicable conditions before entering into the agreement.',
    borrowerNameLabel: 'Name of the borrower',
    signatureLabel: 'Signature',
    lenderTitle: 'THE LENDER',
    companyLabel: 'Company name',
    websiteLabel: 'Website',
    addressLabel: 'Address',
    addressValue: '[to be completed with the company\u2019s official registered address]',
    regNumberLabel: 'Registration / licence number',
    regNumberValue: '[to be completed before final execution of the contract]',
    lenderEmailLabel: 'Email',
    repLabel: 'Authorised representative',
    repValue: 'Posojilnica Team',
  },
};
