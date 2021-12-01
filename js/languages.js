const ita = {
    "title": "Top Serie TV",

    "footerTitle": "Domande? Chiama <num>800-123-456</num>",
    "footer1": "Domande frequenti",
    "footer2": "Centro assistenza",
    "footer3": "Account",
    "footer4": "Media Center",
    "footer5": "Rapporti con gli investitori",
    "footer6": "Opportunità di lavoro",
    "footer7": "Riscatta carte regalo",
    "footer8": "Acquista carte regalo",
    "footer9": "Come guardare in streaming",
    "footer10": "Condizioni di utilizzo",
    "footer11": "Privacy",
    "footer12": "Preferenze per i cookie",
    "footer13": "Informazioni sull'azienda",
    "footer14": "Contattaci",
    "footer15": "Test di velocità",
    "footer16": "Note legali",

    "back2home": "Torna alla home",

    "apiLang": "&language=it",
    "description": "Descrizione",
    "year": "Anno",
    "genre": "Genere",
    "platform": "Piattaforma"
}

const eng = {
    "title": "Top TV Series",

    "footerTitle": "Questions? Call <num>800-123-456</num>",
    "footer1": "FAQ",
    "footer2": "Help Center",
    "footer3": "Account",
    "footer4": "Media Center",
    "footer5": "Investor Relations",
    "footer6": "Jobs",
    "footer7": "Redeem Gift Cards",
    "footer8": "Buy Gift Cards",
    "footer9": "Ways to Watch",
    "footer10": "Terms of Use",
    "footer11": "Privacy",
    "footer12": "Cookie Preferences",
    "footer13": "Corporate Information",
    "footer14": "Contact Us",
    "footer15": "Speed Test",
    "footer16": "Legal Notices",

    "back2home": "Back to home",

    "apiLang": "&language=en",
    "description": "Description",
    "year": "Year",
    "genre": "Genre",
    "platform": "Platform"
}


switch (localStorage.getItem("language")) {
    case "en":
        var lang = eng;
        break;
    default:
        var lang = ita;
        break;
}

export { lang };