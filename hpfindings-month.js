/////////////////////////////
//                         //
// Global le section //
//                         //
/////////////////////////////

let myVar;                 // Used by the page loader

/////////////////////////////
//                         //
// Global constant section //
//                         //
/////////////////////////////

// Separator of data items passed as a string instead of as an array
const ARRAY_SEP = "<SeP>";

// Array mapping English country names to Spanish country names
const cntrsp = {"Afghanistan": "Afganistán",
                "Akrotiri": "Akrotiri",
                "Aland": "Aland",
                "Albania": "Albania",
                "Algeria": "Argelia",
                "American Samoa": "Samoa Americana",
                "Andorra": "Andorra",
                "Angola": "Angola",
                "Anguilla": "Anguila",
                "Antarctica": "Antártica",
                "Antigua and Barbuda": "Antigua y Barbuda",
                "Argentina": "Argentina",
                "Armenia": "Armenia",
                "Aruba": "Aruba",
                "Ashmore and Cartier Islands": "Islas Ashmore y Cartier",
                "Australia": "Australia",
                "Austria": "Austria",
                "Azerbaijan": "Azerbaiyán",
                "Bahamas": "Bahamas",
                "Bahrain": "Baréin",
                "Bangladesh": "Bangladés",
                "Barbados": "Barbados",
                "Belarus": "Bielorrusia",
                "Belgium": "Bélgica",
                "Belize": "Belice",
                "Benin": "Benín",
                "Bermuda": "Bermudas",
                "Bhutan": "Bután",
                "Bolivia": "Bolivia",
                "Bonaire": "Bonaire",
                "Bonaire, Sint Eustatius, and Saba": "Caribe Neerlandés",
                "Bosnia and Herzegovina": "Bosnia-Herzegovina",
                "Botswana": "Botsuana",
                "Bouvet Island": "Isla Bouvet",
                "Brazil": "Brasil",
                "British Indian Ocean Territory": "Territorio Británico del Océano Índico",
                "British Virgin Islands": "Islas Vírgenes Británicas",
                "Brunei": "Brunéi",
                "Bulgaria": "Bulgaria",
                "Burkina Faso": "Burkina Faso",
                "Burundi": "Burundi",
                "Cabo Verde": "Cabo Verde",
                "Cambodia": "Camboya",
                "Cameroon": "Camerún",
                "Canada": "Canadá",
                "Cape Verde": "Cabo Verde",
                "Cayman Islands": "Islas Caimán",
                "Central African Republic": "República Centroafricana",
                "Chad": "Chad",
                "Chile": "Chile",
                "China": "China",
                "Christmas Island": "Isla de Navidad",
                "Clipperton Island": "Isla Clipperton",
                "Cocos Islands": "Islas Cocos",
                "Colombia": "Colombia",
                "Comoros": "Comoras",
                "Congo": "República del Congo",
                "Congo Republic": "República del Congo",
                "Cook Islands": "Islas Cook",
                "Coral Sea Islands": "Islas del Mar del Coral",
                "Costa Rica": "Costa Rica",
                "Cote d'Ivoire": "Costa de Marfil",
                "Croatia": "Croacia",
                "Cuba": "Cuba",
                "Curacao": "Curazao",
                "Curaçao": "Curazao",
                "Cyprus": "Chipre",
                "Czech Republic": "República Checa",
                "Czechia": "República Checa",
                "Côte d'Ivoire": "Isla de Marfil",
                "DR Congo": "República Democrática del Congo",
                "Denmark": "Dinamarca",
                "Dhekelia": "Dekelia",
                "Diego Garcia": "Diego García",
                "Djibouti": "Yibuti",
                "Dominica": "Dominica",
                "Dominican Republic": "República Dominicana",
                "East Timor": "Timor Oriental",
                "Ecuador": "Ecuador",
                "Egypt": "Egipto",
                "El Salvador": "El Salvador",
                "Equatorial Guinea": "Guinea Ecuatorial",
                "Eritrea": "Eritrea",
                "Estonia": "Estonia",
                "Eswatini": "Suazilandia",
                "Ethiopia": "Etiopía",
                "Falkland Islands": "Islas Malvinas",
                "Falkland Islands (Malvinas)": "Islas Malvinas",
                "Faroe Islands": "Islas Feroe",
                "Federated States of Micronesia": "Micronesia",
                "Fiji": "Fiyi",
                "Finland": "Finlandia",
                "France": "Francia",
                "French Guiana": "Guayana Francesa",
                "French Polynesia": "Polinesia Francesa",
                "French Southern Territories": "Tierras Australes y Antárticas Francesas",
                "Gabon": "Gabón",
                "Gambia": "Gambia",
                "Gaza Strip": "Franja de Gaza",
                "Georgia": "Georgia",
                "Germany": "Alemania",
                "Ghana": "Ghana",
                "Gibraltar": "Gibraltar",
                "Greece": "Grecia",
                "Greenland": "Groenlandia",
                "Grenada": "Granada",
                "Guadeloupe": "Guadalupe",
                "Guam": "Guam",
                "Guatemala": "Guatemala",
                "Guernsey": "Guernsey",
                "Guinea": "Guinea",
                "Guinea-Bissau": "Guinea-Bisáu",
                "Guyana": "Guyana",
                "Haiti": "Haití",
                "Hashemite Kingdom of Jordan": "Jordania",
                "Heard Island and McDonald Islands": "Islas Heard y McDonald",
                "Honduras": "Honduras",
                "Hong Kong": "Hong Kong",
                "Hungary": "Hungría",
                "Iceland": "Islandia",
                "India": "India",
                "Indonesia": "Indonesia",
                "Iran": "Irán",
                "Iraq": "Irak",
                "Ireland": "Irlanda",
                "Isle of Man": "Isla de Man",
                "Israel": "Israel",
                "Italy": "Italia",
                "Ivory Coast": "Costa de Marfil",
                "Jamaica": "Jamaica",
                "Jan Mayen": "Jan Mayen",
                "Japan": "Japón",
                "Jersey": "Jersey",
                "Jordan": "Jordania",
                "Kazakhstan": "Kazajistán",
                "Kenya": "Kenia",
                "Kiribati": "Kiribati",
                "Kosovo": "Kosovo",
                "Kuwait": "Kuwait",
                "Kyrgyzstan": "Kirguistán",
                "Laos": "Laos",
                "Latvia": "Letonia",
                "Lebanon": "Líbano",
                "Lesotho": "Lesoto",
                "Liberia": "Liberia",
                "Libya": "Libia",
                "Liechtenstein": "Liechtenstein",
                "Lithuania": "Lituania",
                "Luxembourg": "Luxemburgo",
                "Macao": "Macao",
                "Madagascar": "Madagascar",
                "Malawi": "Malaui",
                "Malaysia": "Malasia",
                "Maldives": "Maldivas",
                "Mali": "Malí",
                "Malta": "Malta",
                "Marshall Islands": "Islas Marshall",
                "Martinique": "Martinica",
                "Mauritania": "Mauritania",
                "Mauritius": "Mauricio",
                "Mayotte": "Mayotte",
                "Mexico": "México",
                "Moldova": "Moldavia",
                "Monaco": "Mónaco",
                "Mongolia": "Mongolia",
                "Montenegro": "Montenegro",
                "Montserrat": "Montserrat",
                "Morocco": "Marruecos",
                "Mozambique": "Mozambique",
                "Myanmar": "Birmania",
                "Namibia": "Namibia",
                "Nauru": "Nauru",
                "Navassa Island": "Isla de Navaza",
                "Nepal": "Nepal",
                "Netherlands": "Países Bajos",
                "New Caledonia": "Nueva Caledonia",
                "New Zealand": "Nueva Zelanda",
                "Nicaragua": "Nicaragua",
                "Niger": "Níger",
                "Nigeria": "Nigeria",
                "Niue": "Niue",
                "Norfolk Island": "Isla Norfolk",
                "North Korea": "Corea del Norte",
                "North Macedonia": "Macedonia del Norte",
                "Northern Mariana Islands": "Islas Marianas del Norte",
                "Norway": "Noruega",
                "Oman": "Omán",
                "Pakistan": "Pakistán",
                "Palau": "Palaos",
                "Palestine": "Palestina",
                "Panama": "Panamá",
                "Papua New Guinea": "Papúa Nueva Guinea",
                "Paracel Islands": "Islas Paracel",
                "Paraguay": "Paraguay",
                "Peru": "Perú",
                "Philippines": "Filipinas",
                "Pitcairn Islands": "Islas Pitcairn",
                "Poland": "Polonia",
                "Portugal": "Portugal",
                "Puerto Rico": "Puerto Rico",
                "Qatar": "Catar",
                "Republic of Lithuania": "Lituania",
                "Republic of Moldova": "Moldova",
                "Reunion": "Reunión",
                "Romania": "Rumania",
                "Russia": "Rusia",
                "Rwanda": "Ruanda",
                "Réunion": "Reunión",
                "Saint Barthelemy": "San Bartolomé",
                "Saint Barthélemy": "San Bartolomé",
                "Saint Helena": "Santa Elena",
                "Saint Helena, Ascension and Tristan da Cunha": "Santa Elena, Ascensión y Tristán de Acuña",
                "Saint Lucia": "Santa Lucía",
                "Saint Martin": "San Martín Francesa",
                "Saint Pierre and Miquelon": "San Pedro y Miquelón",
                "Saint Vincent and the Grenadines": "San Vicente y las Granadinas",
                "Saint-Barthélemy": "San Bartolomé",
                "Samoa": "Samoa",
                "San Marino": "San Marino",
                "Sao Tome and Principe": "Sao Tomé y Príncipe",
                "Saudi Arabia": "Arabia Saudita",
                "Senegal": "Senegal",
                "Serbia": "Serbia",
                "Seychelles": "Seychelles",
                "Sierra Leone": "Sierra Leona",
                "Singapore": "Singapur",
                "Sint Maarten": "San Martín",
                "Slovakia": "Eslovaquia",
                "Slovenia": "Eslovenia",
                "Solomon Islands": "Islas Salomón",
                "Somalia": "Somalia",
                "South Africa": "Sudáfrica",
                "South Georgia and South Sandwich Islands": "Islas Georgias del Sur y Sandwich del Sur",
                "South Korea": "Corea del Sur",
                "South Sudan": "Sudán del Sur",
                "Spain": "España",
                "Spratly Islands": "Islas Spratly",
                "Sri Lanka": "Sri Lanka",
                "St Kitts and Nevis": "San Cristóbal y Nieves",
                "St Vincent and Grenadines": "San Vicente y las Granadinas",
                "Sudan": "Sudán",
                "Suriname": "Surinam",
                "Svalbard": "Svalbard",
                "Swaziland": "Suazilandia",
                "Sweden": "Suecia",
                "Switzerland": "Suiza",
                "Syria": "Siria",
                "São Tomé and Príncipe": "Santo Tomé y Príncipe",
                "Taiwan": "Taiwán",
                "Tajikistan": "Tayikistán",
                "Tanzania": "Tanzania",
                "Thailand": "Tailandia",
                "The Netherlands": "Países Bajos",
                "Timor-Leste": "Timor Oriental",
                "Togo": "Togo",
                "Tokelau": "Tokelau",
                "Tonga": "Tonga",
                "Trinidad and Tobago": "Trinidad y Tobago",
                "Tunisia": "Túnez",
                "Turkey": "Turquía",
                "Turkmenistan": "Turkmenistán",
                "Turks and Caicos Islands": "Islas Turcas y Caicos",
                "Tuvalu": "Tuvalu",
                "Türkiye": "Turquía",
                "U.S. Minor Outlying Islands": "Islas Ultramarinas Menores de los Estados Unidos",
                "U.S. Virgin Islands": "Islas Vírgenes de los Estados Unidos",
                "Uganda": "Uganda",
                "Ukraine": "Ucrania",
                "United Arab Emirates": "Emiratos Árabes Unidos",
                "United Kingdom": "Reino Unido",
                "United States": "Estados Unidos",
                "Uruguay": "Uruguay",
                "Uzbekistan": "Uzbekistán",
                "Vanuatu": "Vanuatu",
                "Vatican": "Ciudad del Vaticano",
                "Vatican City": "Ciudad del Vaticano",
                "Venezuela": "Venezuela",
                "Vietnam": "Vietnam",
                "Wake Island": "Isla Wake",
                "Wallis and Futuna": "Wallis y Futuna",
                "Western Sahara": "Sahara Occidental",
                "Yemen": "Yemen",
                "Zambia": "Zambia",
                "Zimbabwe": "Zimbabue",
                "Åland": "Aland",
                "Åland Islands": "Aland"};

////////////////////////////////
//                            //
// Auxiliary function section //
//                            //
////////////////////////////////

// Page loader functions
function loaderFunction() {
  myVar = setTimeout(showPage, 2000); // This timeout should be a bit shorter than the mapbpx map.resize() timeout
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// Determine whether the contents of a variable is a number
function isNumber(value) {
  if (isNaN(value)) return false;
  return true;
}

// Print the date when the data was last updated
function lastUpdated() {
  document.getElementById("last-updated").innerHTML = "2025-2-17";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "1.8";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "1.8";
  const clickSpanish = clickEnglish.replace(".", ",");
  document.getElementById("trend-click").innerHTML = clickSpanish;
}

function isNumber(value) {
  if (isNaN(value)) return false;
  return true;
}

function translateCountryName(value)
{
  if (value in cntrsp) return cntrsp[value];
  else return value;
}

function translateCountryList(value)
{
  const countriesEN = value.split(ARRAY_SEP);
  let   countryEN;
  let   countryES;
  let   countryListES = "";

  for (let i = 0; i < countriesEN.length; i++) {
    // Separate and extract the country flag before translating the country name
    countryEN = countriesEN[i].split("\u00a0");
    countryES = countryEN[0] + "\u00a0" + translateCountryName(countryEN[1]);
    if (countryListES == "") countryListES = countryES;
    else                     countryListES = countryListES + ARRAY_SEP + countryES;
  }
  return countryListES;
}

///////////////////////////////////////////////////////////////
//                                                           //
// The following home-grown functions display single metrics //
//                                                           //
///////////////////////////////////////////////////////////////

function metricTrafficEnglish()
{
  const metricElement = "metric-traffic";
  const metricData    = "172952";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "31621";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "141331";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "9056";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "79793";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "61538";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4700";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "9493";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "52045";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3816";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "172952";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "31621";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "141331";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "9056";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "79793";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "61538";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4700";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "9493";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "52045";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3816";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function singleMetric(metricElement, metricData, metricLocale)
{
  document.getElementById(metricElement).innerHTML = Number(metricData).toLocaleString(metricLocale);
}

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// The following home-grown functions group and display single metrics as pseudo-lists //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

function pseudolistTrafficEnglish()
{
  const listElement  = "pseudolist-traffic";
  const column1Label = "Unwanted Connections";
  const column2Label = "Scans";
  const column3Label = "Attacks";
  const column4Label = "Unique IP Addresses";
  const incomingData = "172952<SeP>31621<SeP>141331<SeP>9056";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const column4Data  = tmpData[3];
  const listLocale   = "en-US";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function pseudolistAttacksEnglish()
{
  const listElement  = "pseudolist-attacks";
  const column1Label = "Attacks";
  const column2Label = "Unsuccessful Attacks";
  const column3Label = "Successful Attacks";
  const column4Label = "Unique IP Addresses";
  const incomingData = "141331<SeP>79793<SeP>61538<SeP>4700";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const column4Data  = tmpData[3];
  const listLocale   = "en-US";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function pseudolistAttacksSuccessfulEnglish()
{
  const listElement  = "pseudolist-attacks-successful";
  const column1Label = "Successful Attacks";
  const column2Label = "Passive Attacks";
  const column3Label = "Active Attacks";
  const column4Label = "Unique IP Addresses";
  const incomingData = "61538<SeP>9493<SeP>52045<SeP>3816";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const column4Data  = tmpData[3];
  const listLocale   = "en-US";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function pseudolistMalwareInteractionsEnglish()
{
  const listElement  = "pseudolist-malware-interactions";
  const column1Label = "File Interactions";
  const column2Label = "File Creations";
  const column3Label = "File Transfers";
  const incomingData = "5324<SeP>4846<SeP>478";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const listLocale   = "en-US";

  listColumns3(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, listLocale);
}

function pseudolistMalwareFilesEnglish()
{
  const listElement  = "pseudolist-malware-files";
  const column1Label = "Files";
  const column2Label = "Files Created";
  const column3Label = "Files Transferred";
  const column4Label = "Distribution URLs";
  const incomingData = "83<SeP>4<SeP>79<SeP>9";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const column4Data  = tmpData[3];
  const listLocale   = "en-US";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function pseudolistTrafficSpanish()
{
  const listElement  = "pseudolist-traffic";
  const column1Label = "Conexiones no deseadas";
  const column2Label = "Escaneos";
  const column3Label = "Ataques";
  const column4Label = "Direcciones de IP \u00fanicas";
  const incomingData = "172952<SeP>31621<SeP>141331<SeP>9056";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const column4Data  = tmpData[3];
  const listLocale   = "it-IT";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function pseudolistAttacksSpanish()
{
  const listElement  = "pseudolist-attacks";
  const column1Label = "Ataques";
  const column2Label = "Ataques fallidos";
  const column3Label = "Ataques con \u00e9xito";
  const column4Label = "Direcciones de IP \u00fanicas";
  const incomingData = "141331<SeP>79793<SeP>61538<SeP>4700";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const column4Data  = tmpData[3];
  const listLocale   = "it-IT";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function pseudolistAttacksSuccessfulSpanish()
{
  const listElement  = "pseudolist-attacks-successful";
  const column1Label = "Ataques con \u00e9xito";
  const column2Label = "Ataques pasivos";
  const column3Label = "Ataques activos";
  const column4Label = "Direcciones de IP \u00fanicas";
  const incomingData = "61538<SeP>9493<SeP>52045<SeP>3816";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const column4Data  = tmpData[3];
  const listLocale   = "it-IT";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function pseudolistMalwareInteractionsSpanish()
{
  const listElement  = "pseudolist-malware-interactions";
  const column1Label = "Interacciones con ficheros";
  const column2Label = "Creaciones de ficheros";
  const column3Label = "Transferencias de ficheros";
  const incomingData = "5324<SeP>4846<SeP>478";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const listLocale   = "it-IT";

  listColumns3(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, listLocale);
}

function pseudolistMalwareFilesSpanish()
{
  const listElement  = "pseudolist-malware-files";
  const column1Label = "Ficheros";
  const column2Label = "Ficheros creados";
  const column3Label = "Ficheros transferidos";
  const column4Label = "URLs de distribuci\u00f3n";
  const incomingData = "83<SeP>4<SeP>79<SeP>9";
  const tmpData      = incomingData.split(ARRAY_SEP);
  const column1Data  = tmpData[0];
  const column2Data  = tmpData[1];
  const column3Data  = tmpData[2];
  const column4Data  = tmpData[3];
  const listLocale   = "it-IT";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

//////////////////////////////////////////////////////////////////
//                                                              //
// The following home-grown functions display enhanced IP lists //
//                                                              //
//////////////////////////////////////////////////////////////////

function listTrafficIPsEnglish()
{
  const listElement  = "list-traffic-ips";
  const column1Label = "IP Address";
  const column2Label = "Autonomous System";
  const column3Label = "Country";
  const column4Label = "Count";
  const column1Data  = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>83.222.191.62</span>)<SeP>IP04 (<span class=blur>128.14.227.10</span>)<SeP>IP05 (<span class=blur>46.8.237.53</span>)<SeP>IP06 (<span class=blur>185.7.214.180</span>)<SeP>IP07 (<span class=blur>80.94.95.112</span>)<SeP>IP08 (<span class=blur>159.65.89.126</span>)<SeP>IP09 (<span class=blur>37.44.238.88</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)";
  const column2Data  = "AS38264<SeP>AS44486<SeP>AS204428<SeP>AS135377<SeP>AS56971<SeP>AS207566<SeP>AS204428<SeP>AS14061<SeP>AS34534<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  const column4Data  = "21294<SeP>6226<SeP>1277<SeP>989<SeP>877<SeP>644<SeP>631<SeP>496<SeP>448<SeP>431";
  const listLocale   = "en-US"

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listScansIPsEnglish()
{
  const listElement  = "list-scans-ips";
  const column1Label = "IP Address";
  const column2Label = "Autonomous System";
  const column3Label = "Country";
  const column4Label = "Count";
  const column1Data  = "IP11 (<span class=blur>92.255.85.35</span>)<SeP>IP12 (<span class=blur>218.92.0.227</span>)<SeP>IP14 (<span class=blur>218.92.0.230</span>)<SeP>IP15 (<span class=blur>218.92.0.216</span>)<SeP>IP16 (<span class=blur>218.92.0.225</span>)<SeP>IP17 (<span class=blur>218.92.0.114</span>)<SeP>IP18 (<span class=blur>218.92.0.111</span>)<SeP>IP19 (<span class=blur>218.92.0.220</span>)<SeP>IP20 (<span class=blur>218.92.0.228</span>)<SeP>IP21 (<span class=blur>218.92.0.231</span>)";
  const column2Data  = "AS207566<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data  = "<span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "427<SeP>383<SeP>382<SeP>367<SeP>365<SeP>359<SeP>351<SeP>349<SeP>341<SeP>339";
  const listLocale   = "en-US";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listAttacksIPsEnglish()
{
  const listElement  = "list-attacks-ips";
  const column1Label = "IP Address";
  const column2Label = "Autonomous System";
  const column3Label = "Country";
  const column4Label = "Count";
  const column1Data  = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>83.222.191.62</span>)<SeP>IP05 (<span class=blur>46.8.237.53</span>)<SeP>IP04 (<span class=blur>128.14.227.10</span>)<SeP>IP07 (<span class=blur>80.94.95.112</span>)<SeP>IP08 (<span class=blur>159.65.89.126</span>)<SeP>IP09 (<span class=blur>37.44.238.88</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)<SeP>IP13 (<span class=blur>104.252.127.63</span>)";
  const column2Data  = "AS38264<SeP>AS44486<SeP>AS204428<SeP>AS56971<SeP>AS135377<SeP>AS204428<SeP>AS14061<SeP>AS34534<SeP>AS56971<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  const column4Data  = "21293<SeP>6225<SeP>1277<SeP>867<SeP>827<SeP>631<SeP>494<SeP>443<SeP>430<SeP>382";
  const listLocale   = "en-US";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listTrafficIPsSpanish()
{
  const listElement   = "list-traffic-ips";
  const column1Label  = "Direcci\u00f3n de IP";
  const column2Label  = "Sistema Aut\u00f3nomo";
  const column3Label  = "Pa\u00eds";
  const column4Label  = "N\u00famero";
  const column1Data   = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>83.222.191.62</span>)<SeP>IP04 (<span class=blur>128.14.227.10</span>)<SeP>IP05 (<span class=blur>46.8.237.53</span>)<SeP>IP06 (<span class=blur>185.7.214.180</span>)<SeP>IP07 (<span class=blur>80.94.95.112</span>)<SeP>IP08 (<span class=blur>159.65.89.126</span>)<SeP>IP09 (<span class=blur>37.44.238.88</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)";
  const column2Data   = "AS38264<SeP>AS44486<SeP>AS204428<SeP>AS135377<SeP>AS56971<SeP>AS207566<SeP>AS204428<SeP>AS14061<SeP>AS34534<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "21294<SeP>6226<SeP>1277<SeP>989<SeP>877<SeP>644<SeP>631<SeP>496<SeP>448<SeP>431";
  const listLocale    = "it-IT";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3DataES, column4Label, column4Data, listLocale);
}

function listScansIPsSpanish()
{
  const listElement   = "list-scans-ips";
  const column1Label  = "Direcci\u00f3n de IP";
  const column2Label  = "Sistema Aut\u00f3nomo";
  const column3Label  = "Pa\u00eds";
  const column4Label  = "N\u00famero";
  const column1Data   = "IP11 (<span class=blur>92.255.85.35</span>)<SeP>IP12 (<span class=blur>218.92.0.227</span>)<SeP>IP14 (<span class=blur>218.92.0.230</span>)<SeP>IP15 (<span class=blur>218.92.0.216</span>)<SeP>IP16 (<span class=blur>218.92.0.225</span>)<SeP>IP17 (<span class=blur>218.92.0.114</span>)<SeP>IP18 (<span class=blur>218.92.0.111</span>)<SeP>IP19 (<span class=blur>218.92.0.220</span>)<SeP>IP20 (<span class=blur>218.92.0.228</span>)<SeP>IP21 (<span class=blur>218.92.0.231</span>)";
  const column2Data   = "AS207566<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data   = "<span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "427<SeP>383<SeP>382<SeP>367<SeP>365<SeP>359<SeP>351<SeP>349<SeP>341<SeP>339";
  const listLocale    = "it-IT";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3DataES, column4Label, column4Data, listLocale);
}

function listAttacksIPsSpanish()
{
  const listElement   = "list-attacks-ips";
  const column1Label  = "Direcci\u00f3n de IP";
  const column2Label  = "Sistema Aut\u00f3nomo";
  const column3Label  = "Pa\u00eds";
  const column4Label  = "N\u00famero";
  const column1Data   = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>83.222.191.62</span>)<SeP>IP05 (<span class=blur>46.8.237.53</span>)<SeP>IP04 (<span class=blur>128.14.227.10</span>)<SeP>IP07 (<span class=blur>80.94.95.112</span>)<SeP>IP08 (<span class=blur>159.65.89.126</span>)<SeP>IP09 (<span class=blur>37.44.238.88</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)<SeP>IP13 (<span class=blur>104.252.127.63</span>)";
  const column2Data   = "AS38264<SeP>AS44486<SeP>AS204428<SeP>AS56971<SeP>AS135377<SeP>AS204428<SeP>AS14061<SeP>AS34534<SeP>AS56971<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "21293<SeP>6225<SeP>1277<SeP>867<SeP>827<SeP>631<SeP>494<SeP>443<SeP>430<SeP>382";
  const listLocale    = "it-IT";

  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3DataES, column4Label, column4Data, listLocale);
}

/////////////////////////////////////////////////////////////
//                                                         //
// The following home-grown functions display lists/tables //
//                                                         //
/////////////////////////////////////////////////////////////

function listCredentialsEnglish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Username";
  const column2Label  = "Password";
  const column3Label  = "Count";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>admin 3245gs5662d34<SeP>root  <SeP>root hkipc2016<SeP>root hslwificam<SeP>root vizxv<SeP>root klv1234<SeP>root helpme";
  const column3Data   = "5451<SeP>4147<SeP>1256<SeP>1222<SeP>353<SeP>351<SeP>341<SeP>339<SeP>327<SeP>322";
  const listLocale    = "en-US";
  let   column1Data   = "";
  let   column2Data   = "";
  let   oneCredential = [];
  const column12DataS = column12Data.split(ARRAY_SEP);

  for (let i = 0; i < column12DataS.length; i++) {
    oneCredential = column12DataS[i].split(" ");
    if (column1Data == "")
    {
      column1Data = oneCredential[0];
      column2Data = oneCredential[1];
    }
    else
    {
      column1Data += ARRAY_SEP + oneCredential[0];
      column2Data += ARRAY_SEP + oneCredential[1];
    }
  }
  listColumns3(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, listLocale);
}

function listMalwareEnglish()
{
  const listElement  = "list-malware";
  const column1Label = "Malware File Hash";
  const column2Label = "Count";
  const column3Label = "Type";
  const column4Label = "VirusTotal Assessment";
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4<SeP>992cb5a753697ee2642aa390f09326fcdb7fd59119053d6b1bdd35d47e62f472<SeP>69dc9dd8065692ea262850b617c621e6c1361e9095a90b653b26e3901597f586<SeP>29f8524562c2436f42019e0fc473bd88584234c57979c7375c1ace3648784e4b";
  const column2Data  = "4711<SeP>104<SeP>20<SeP>20<SeP>20<SeP>14<SeP>13<SeP>13<SeP>13<SeP>13";
  let   column3Data  = "redir<SeP>redir<SeP>upload<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  const column4Data  = "malicious<SeP>harmless<SeP>NA<SeP>NA<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA";
  const listLocale   = "en-US";

  column3Data = column3Data.replace(/redir/g, "redirection");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsEnglish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Malware Distribution Site";
  const column2Label = "Count";
  const column1Data  = "http://37.44.238.88<SeP>http://194.85.251.8<SeP>http://66.63.187.69<SeP>http://193.143.1.42<SeP>http://193.143.1.7<SeP>tftp://199.195.248.181<SeP>http://83.23.65.68<SeP>http://45.149.241.217<SeP>http://199.195.248.181";
  const column2Data  = "54<SeP>15<SeP>7<SeP>7<SeP>4<SeP>1<SeP>1<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "131363<SeP>41589";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>admin 3245gs5662d34<SeP>root  <SeP>root hkipc2016<SeP>root hslwificam<SeP>root vizxv<SeP>root klv1234<SeP>root helpme";
  const column3Data   = "5451<SeP>4147<SeP>1256<SeP>1222<SeP>353<SeP>351<SeP>341<SeP>339<SeP>327<SeP>322";
  const listLocale    = "it-IT";
  let   column1Data   = "";
  let   column2Data   = "";
  let   oneCredential = [];

  const column12DataS = column12Data.split(ARRAY_SEP);
  for (let i = 0; i < column12DataS.length; i++) {
    oneCredential = column12DataS[i].split(" ");
    if (column1Data == "")
    {
      column1Data = oneCredential[0];
      column2Data = oneCredential[1];
    }
    else
    {
      column1Data += ARRAY_SEP + oneCredential[0];
      column2Data += ARRAY_SEP + oneCredential[1];
    }
  }
  listColumns3(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, listLocale);
}

function listMalwareSpanish()
{
  const listElement  = "list-malware";
  const column1Label = "Hash de fichero malicioso";
  const column2Label = "N\u00famero";
  const column3Label = "Tipo";
  const column4Label = "Valoraci\u00f3n de VirusTotal";
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4<SeP>992cb5a753697ee2642aa390f09326fcdb7fd59119053d6b1bdd35d47e62f472<SeP>69dc9dd8065692ea262850b617c621e6c1361e9095a90b653b26e3901597f586<SeP>29f8524562c2436f42019e0fc473bd88584234c57979c7375c1ace3648784e4b";
  const column2Data  = "4711<SeP>104<SeP>20<SeP>20<SeP>20<SeP>14<SeP>13<SeP>13<SeP>13<SeP>13";
  let   column3Data  = "redir<SeP>redir<SeP>upload<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  let   column4Data  = "malicious<SeP>harmless<SeP>NA<SeP>NA<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA";
  const listLocale   = "it-IT";

  column3Data = column3Data.replace(/redir/g, "redirecci\u00f3n");
  column3Data = column3Data.replace(/upload/g, "carga");
  column3Data = column3Data.replace(/download/g, "descarga");
  column4Data = column4Data.replace(/malicious/g, "malicioso");
  column4Data = column4Data.replace(/harmless/g, "inofensivo");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsSpanish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Sitios de Distribuci\u00f3n de Malware";
  const column2Label = "N\u00famero";
  const column1Data  = "http://37.44.238.88<SeP>http://194.85.251.8<SeP>http://66.63.187.69<SeP>http://193.143.1.42<SeP>http://193.143.1.7<SeP>tftp://199.195.248.181<SeP>http://83.23.65.68<SeP>http://45.149.241.217<SeP>http://199.195.248.181";
  const column2Data  = "54<SeP>15<SeP>7<SeP>7<SeP>4<SeP>1<SeP>1<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "131363<SeP>41589";
  const listLocale   = "it-IT";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale) {
  const column1DataS = column1Data.split(ARRAY_SEP);
  const column2DataS = column2Data.split(ARRAY_SEP);
  let   strHTML    = "  <table class=\"hp-table\">\n";

  strHTML       += "    <tr>\n";
  strHTML       += "      <th>" + column1Label + "</th>\n";
  strHTML       += "      <th>" + column2Label + "</th>\n";
  strHTML       += "    </tr>\n";
  for (let i = 0; i < column1DataS.length; i++) {
     strHTML    += "    <tr>\n";
     if (isNumber(column1DataS[i])) strHTML    += "      <td>" + Number(column1DataS[i]).toLocaleString(listLocale) + "</td>\n";
     else                           strHTML    += "      <td>" + column1DataS[i] + "</td>\n";
     if (isNumber(column2DataS[i])) strHTML    += "      <td>" + Number(column2DataS[i]).toLocaleString(listLocale) + "</td>\n";
     else                           strHTML    += "      <td>" + column2DataS[i] + "</td>\n";
     strHTML    += "    </tr>\n";
  }
  strHTML       += "  </table>";
  document.getElementById(listElement).innerHTML = strHTML;
}

function listColumns3(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, listLocale) {
  const column1DataS = column1Data.split(ARRAY_SEP);
  const column2DataS = column2Data.split(ARRAY_SEP);
  const column3DataS = column3Data.split(ARRAY_SEP);
  let   strHTML    = "  <table class=\"hp-table\">\n";

  strHTML       += "    <tr>\n";
  strHTML       += "      <th>" + column1Label + "</th>\n";
  strHTML       += "      <th>" + column2Label + "</th>\n";
  strHTML       += "      <th>" + column3Label + "</th>\n";
  strHTML       += "    </tr>\n";
  for (let i = 0; i < column1DataS.length; i++) {
     strHTML    += "    <tr>\n";
     if (isNumber(column1DataS[i])) strHTML    += "      <td>" + Number(column1DataS[i]).toLocaleString(listLocale) + "</td>\n";
     else                           strHTML    += "      <td>" + column1DataS[i] + "</td>\n";
     if (isNumber(column2DataS[i])) strHTML    += "      <td>" + Number(column2DataS[i]).toLocaleString(listLocale) + "</td>\n";
     else                           strHTML    += "      <td>" + column2DataS[i] + "</td>\n";
     if (isNumber(column3DataS[i])) strHTML    += "      <td>" + Number(column3DataS[i]).toLocaleString(listLocale) + "</td>\n";
     else                           strHTML    += "      <td>" + column3DataS[i] + "</td>\n";
     strHTML    += "    </tr>\n";
  }
  strHTML       += "  </table>";
  document.getElementById(listElement).innerHTML = strHTML;
}

function listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale) {
  const column1DataS = column1Data.split(ARRAY_SEP);
  const column2DataS = column2Data.split(ARRAY_SEP);
  const column3DataS = column3Data.split(ARRAY_SEP);
  const column4DataS = column4Data.split(ARRAY_SEP);
  let   strHTML    = "  <table class=\"hp-table\">\n";

  strHTML       += "    <tr>\n";
  strHTML       += "      <th style=\"width:25%\">" + column1Label + "</th>\n";
  strHTML       += "      <th style=\"width:25%\">" + column2Label + "</th>\n";
  strHTML       += "      <th style=\"width:25%\">" + column3Label + "</th>\n";
  strHTML       += "      <th style=\"width:25%\">" + column4Label + "</th>\n";
  strHTML       += "    </tr>\n";
  for (let i = 0; i < column1DataS.length; i++) {
     strHTML    += "    <tr>\n";
     if (isNumber(column1DataS[i])) strHTML    += "      <td>" + Number(column1DataS[i]).toLocaleString(listLocale) + "</td>\n";
     else                           strHTML    += "      <td>" + column1DataS[i] + "</td>\n";
     if (isNumber(column2DataS[i])) strHTML    += "      <td>" + Number(column2DataS[i]).toLocaleString(listLocale) + "</td>\n";
     else                           strHTML    += "      <td>" + column2DataS[i] + "</td>\n";
     if (isNumber(column3DataS[i])) strHTML    += "      <td>" + Number(column3DataS[i]).toLocaleString(listLocale) + "</td>\n";
     else                           strHTML    += "      <td>" + column3DataS[i] + "</td>\n";
     if (isNumber(column4DataS[i])) strHTML    += "      <td>" + Number(column4DataS[i]).toLocaleString(listLocale) + "</td>\n";
     else                           strHTML    += "      <td>" + column4DataS[i] + "</td>\n";
     strHTML    += "    </tr>\n";
  }
  strHTML       += "  </table>";
  document.getElementById(listElement).innerHTML = strHTML;
}

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The following functions use the mapbox-gl and maxboxgl-legend JS libraries //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

function loadMapEnglish() {
  // Process URL parameters
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let vat = urlParams.get("vat"); // Visibility of all-traffic layer
  let vas = urlParams.get("vas"); // Visibility of all-scans layer
  let vaa = urlParams.get("vaa"); // Visibility of all-attacks layer

  if (!vat && !vas && !vaa) vat = "visible";
  if (!vat) vat = "none";
  if (!vas) vas = "none";
  if (!vaa) vaa = "none";
  
  // Restricted to this site
  mapboxgl.accessToken = "pk.eyJ1IjoicmRlZnJhbmNpc2NvIiwiYSI6ImNsbXYxcHRxeDBmejEyanBjN3VpNG1vYXMifQ.rXdgexSxKXg3Cqk9omlirA";
  
  const map = new mapboxgl.Map({
    container: "map",                          // container ID
    style: "mapbox://styles/mapbox/light-v10", // style URL
    zoom: 2,                                   // starting zoom
    center: [-25.00, 20.00]                    // starting center
  });

  document.getElementById('map-title').innerHTML = "Updated 2025-2-17";

  map.addControl(new LegendControl({
    collapsed: true,
    toggler: true,
    highlight: true,
    minimized: true,
    }),
    'bottom-left');
  
  map.on("load", () => {
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-traffic", {
      type: "geojson",
      data: "/scripts/hpdata/map-month-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "traffic between 2025-01-18 and 2025-02-16"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          22637,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "/scripts/hpdata/map-month-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "scans between 2025-01-18 and 2025-02-16"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          14810,34,
          22637,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "/scripts/hpdata/map-month-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "attacks between 2025-01-18 and 2025-02-16"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          21293,47,
          22637,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#FF0000" // Red
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
  });

  setTimeout(function() {
    map.resize();
  }, 2500); // This timeout should the a bit longer than the  timeout of the page loader
}

function loadMapSpanish() {
  // Process URL parameters
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let vat = urlParams.get("vat"); // Visibility of all-traffic layer
  let vas = urlParams.get("vas"); // Visibility of all-scans layer
  let vaa = urlParams.get("vaa"); // Visibility of all-attacks layer

  if (!vat && !vas && !vaa) vat = "visible";
  if (!vat) vat = "none";
  if (!vas) vas = "none";
  if (!vaa) vaa = "none";
  
  // Restricted to this site
  mapboxgl.accessToken = "pk.eyJ1IjoicmRlZnJhbmNpc2NvIiwiYSI6ImNsbXYxcHRxeDBmejEyanBjN3VpNG1vYXMifQ.rXdgexSxKXg3Cqk9omlirA";
  
  const map = new mapboxgl.Map({
    container: "map",                          // container ID
    style: "mapbox://styles/mapbox/light-v10", // style URL
    zoom: 2,                                   // starting zoom
    center: [-25.00, 20.00]                    // starting center
  });

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-17";

  map.addControl(new LegendControl({
    collapsed: true,
    toggler: true,
    highlight: true,
    minimized: true,
    }),
    'bottom-left');
  
  map.on("load", () => {
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-traffic", {
      type: "geojson",
      data: "/scripts/hpdata/map-month-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "tráfico entre 2025-01-18 y 2025-02-16"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          22637,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "/scripts/hpdata/map-month-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "escaneos entre 2025-01-18 y 2025-02-16"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          14810,34,
          22637,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "/scripts/hpdata/map-month-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "ataques entre 2025-01-18 y 2025-02-16"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          21293,47,
          22637,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#FF0000" // Red
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
  });

  setTimeout(function() {
    map.resize();
  }, 3000);
}

//////////////////////////////////////////////////////
//                                                  //
// The following functions use the chart JS library //
//                                                  //
//////////////////////////////////////////////////////

function trafficTrendEnglish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Unwanted Traffic Trend";
  const yaxisTitle       = "Number of Unwanted Connections";
  const labelsData       = "2025-01-18 00:00:00<SeP>2025-01-18 01:48:00<SeP>2025-01-18 03:36:00<SeP>2025-01-18 05:24:00<SeP>2025-01-18 07:12:00<SeP>2025-01-18 09:00:00<SeP>2025-01-18 10:48:00<SeP>2025-01-18 12:36:00<SeP>2025-01-18 14:24:00<SeP>2025-01-18 16:12:00<SeP>2025-01-18 18:00:00<SeP>2025-01-18 19:48:00<SeP>2025-01-18 21:36:00<SeP>2025-01-18 23:24:00<SeP>2025-01-19 01:12:00<SeP>2025-01-19 03:00:00<SeP>2025-01-19 04:48:00<SeP>2025-01-19 06:36:00<SeP>2025-01-19 08:24:00<SeP>2025-01-19 10:12:00<SeP>2025-01-19 12:00:00<SeP>2025-01-19 13:48:00<SeP>2025-01-19 15:36:00<SeP>2025-01-19 17:24:00<SeP>2025-01-19 19:12:00<SeP>2025-01-19 21:00:00<SeP>2025-01-19 22:48:00<SeP>2025-01-20 00:36:00<SeP>2025-01-20 02:24:00<SeP>2025-01-20 04:12:00<SeP>2025-01-20 06:00:00<SeP>2025-01-20 07:48:00<SeP>2025-01-20 09:36:00<SeP>2025-01-20 11:24:00<SeP>2025-01-20 13:12:00<SeP>2025-01-20 15:00:00<SeP>2025-01-20 16:48:00<SeP>2025-01-20 18:36:00<SeP>2025-01-20 20:24:00<SeP>2025-01-20 22:12:00<SeP>2025-01-21 00:00:00<SeP>2025-01-21 01:48:00<SeP>2025-01-21 03:36:00<SeP>2025-01-21 05:24:00<SeP>2025-01-21 07:12:00<SeP>2025-01-21 09:00:00<SeP>2025-01-21 10:48:00<SeP>2025-01-21 12:36:00<SeP>2025-01-21 14:24:00<SeP>2025-01-21 16:12:00<SeP>2025-01-21 18:00:00<SeP>2025-01-21 19:48:00<SeP>2025-01-21 21:36:00<SeP>2025-01-21 23:24:00<SeP>2025-01-22 01:12:00<SeP>2025-01-22 03:00:00<SeP>2025-01-22 04:48:00<SeP>2025-01-22 06:36:00<SeP>2025-01-22 08:24:00<SeP>2025-01-22 10:12:00<SeP>2025-01-22 12:00:00<SeP>2025-01-22 13:48:00<SeP>2025-01-22 15:36:00<SeP>2025-01-22 17:24:00<SeP>2025-01-22 19:12:00<SeP>2025-01-22 21:00:00<SeP>2025-01-22 22:48:00<SeP>2025-01-23 00:36:00<SeP>2025-01-23 02:24:00<SeP>2025-01-23 04:12:00<SeP>2025-01-23 06:00:00<SeP>2025-01-23 07:48:00<SeP>2025-01-23 09:36:00<SeP>2025-01-23 11:24:00<SeP>2025-01-23 13:12:00<SeP>2025-01-23 15:00:00<SeP>2025-01-23 16:48:00<SeP>2025-01-23 18:36:00<SeP>2025-01-23 20:24:00<SeP>2025-01-23 22:12:00<SeP>2025-01-24 00:00:00<SeP>2025-01-24 01:48:00<SeP>2025-01-24 03:36:00<SeP>2025-01-24 05:24:00<SeP>2025-01-24 07:12:00<SeP>2025-01-24 09:00:00<SeP>2025-01-24 10:48:00<SeP>2025-01-24 12:36:00<SeP>2025-01-24 14:24:00<SeP>2025-01-24 16:12:00<SeP>2025-01-24 18:00:00<SeP>2025-01-24 19:48:00<SeP>2025-01-24 21:36:00<SeP>2025-01-24 23:24:00<SeP>2025-01-25 01:12:00<SeP>2025-01-25 03:00:00<SeP>2025-01-25 04:48:00<SeP>2025-01-25 06:36:00<SeP>2025-01-25 08:24:00<SeP>2025-01-25 10:12:00<SeP>2025-01-25 12:00:00<SeP>2025-01-25 13:48:00<SeP>2025-01-25 15:36:00<SeP>2025-01-25 17:24:00<SeP>2025-01-25 19:12:00<SeP>2025-01-25 21:00:00<SeP>2025-01-25 22:48:00<SeP>2025-01-26 00:36:00<SeP>2025-01-26 02:24:00<SeP>2025-01-26 04:12:00<SeP>2025-01-26 06:00:00<SeP>2025-01-26 07:48:00<SeP>2025-01-26 09:36:00<SeP>2025-01-26 11:24:00<SeP>2025-01-26 13:12:00<SeP>2025-01-26 15:00:00<SeP>2025-01-26 16:48:00<SeP>2025-01-26 18:36:00<SeP>2025-01-26 20:24:00<SeP>2025-01-26 22:12:00<SeP>2025-01-27 00:00:00<SeP>2025-01-27 01:48:00<SeP>2025-01-27 03:36:00<SeP>2025-01-27 05:24:00<SeP>2025-01-27 07:12:00<SeP>2025-01-27 09:00:00<SeP>2025-01-27 10:48:00<SeP>2025-01-27 12:36:00<SeP>2025-01-27 14:24:00<SeP>2025-01-27 16:12:00<SeP>2025-01-27 18:00:00<SeP>2025-01-27 19:48:00<SeP>2025-01-27 21:36:00<SeP>2025-01-27 23:24:00<SeP>2025-01-28 01:12:00<SeP>2025-01-28 03:00:00<SeP>2025-01-28 04:48:00<SeP>2025-01-28 06:36:00<SeP>2025-01-28 08:24:00<SeP>2025-01-28 10:12:00<SeP>2025-01-28 12:00:00<SeP>2025-01-28 13:48:00<SeP>2025-01-28 15:36:00<SeP>2025-01-28 17:24:00<SeP>2025-01-28 19:12:00<SeP>2025-01-28 21:00:00<SeP>2025-01-28 22:48:00<SeP>2025-01-29 00:36:00<SeP>2025-01-29 02:24:00<SeP>2025-01-29 04:12:00<SeP>2025-01-29 06:00:00<SeP>2025-01-29 07:48:00<SeP>2025-01-29 09:36:00<SeP>2025-01-29 11:24:00<SeP>2025-01-29 13:12:00<SeP>2025-01-29 15:00:00<SeP>2025-01-29 16:48:00<SeP>2025-01-29 18:36:00<SeP>2025-01-29 20:24:00<SeP>2025-01-29 22:12:00<SeP>2025-01-30 00:00:00<SeP>2025-01-30 01:48:00<SeP>2025-01-30 03:36:00<SeP>2025-01-30 05:24:00<SeP>2025-01-30 07:12:00<SeP>2025-01-30 09:00:00<SeP>2025-01-30 10:48:00<SeP>2025-01-30 12:36:00<SeP>2025-01-30 14:24:00<SeP>2025-01-30 16:12:00<SeP>2025-01-30 18:00:00<SeP>2025-01-30 19:48:00<SeP>2025-01-30 21:36:00<SeP>2025-01-30 23:24:00<SeP>2025-01-31 01:12:00<SeP>2025-01-31 03:00:00<SeP>2025-01-31 04:48:00<SeP>2025-01-31 06:36:00<SeP>2025-01-31 08:24:00<SeP>2025-01-31 10:12:00<SeP>2025-01-31 12:00:00<SeP>2025-01-31 13:48:00<SeP>2025-01-31 15:36:00<SeP>2025-01-31 17:24:00<SeP>2025-01-31 19:12:00<SeP>2025-01-31 21:00:00<SeP>2025-01-31 22:48:00<SeP>2025-02-01 00:36:00<SeP>2025-02-01 02:24:00<SeP>2025-02-01 04:12:00<SeP>2025-02-01 06:00:00<SeP>2025-02-01 07:48:00<SeP>2025-02-01 09:36:00<SeP>2025-02-01 11:24:00<SeP>2025-02-01 13:12:00<SeP>2025-02-01 15:00:00<SeP>2025-02-01 16:48:00<SeP>2025-02-01 18:36:00<SeP>2025-02-01 20:24:00<SeP>2025-02-01 22:12:00<SeP>2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00";
  const item1Label       = "Scans";
  const item1Data        = "82<SeP>94<SeP>61<SeP>82<SeP>100<SeP>74<SeP>93<SeP>63<SeP>119<SeP>41<SeP>24<SeP>67<SeP>55<SeP>68<SeP>48<SeP>81<SeP>53<SeP>180<SeP>83<SeP>53<SeP>63<SeP>25<SeP>32<SeP>25<SeP>99<SeP>56<SeP>143<SeP>82<SeP>94<SeP>80<SeP>94<SeP>47<SeP>85<SeP>54<SeP>44<SeP>56<SeP>63<SeP>61<SeP>79<SeP>153<SeP>97<SeP>41<SeP>76<SeP>69<SeP>35<SeP>58<SeP>45<SeP>69<SeP>22<SeP>24<SeP>76<SeP>24<SeP>38<SeP>76<SeP>72<SeP>156<SeP>56<SeP>96<SeP>168<SeP>87<SeP>66<SeP>27<SeP>103<SeP>32<SeP>113<SeP>63<SeP>96<SeP>66<SeP>53<SeP>73<SeP>68<SeP>59<SeP>91<SeP>62<SeP>71<SeP>62<SeP>70<SeP>78<SeP>80<SeP>131<SeP>71<SeP>103<SeP>70<SeP>103<SeP>45<SeP>49<SeP>49<SeP>108<SeP>73<SeP>86<SeP>80<SeP>171<SeP>105<SeP>160<SeP>78<SeP>102<SeP>86<SeP>73<SeP>91<SeP>49<SeP>38<SeP>69<SeP>76<SeP>65<SeP>87<SeP>50<SeP>74<SeP>63<SeP>55<SeP>94<SeP>130<SeP>35<SeP>30<SeP>49<SeP>46<SeP>78<SeP>59<SeP>90<SeP>88<SeP>73<SeP>112<SeP>56<SeP>209<SeP>99<SeP>105<SeP>38<SeP>30<SeP>41<SeP>71<SeP>88<SeP>113<SeP>84<SeP>78<SeP>83<SeP>70<SeP>52<SeP>64<SeP>80<SeP>64<SeP>48<SeP>50<SeP>122<SeP>57<SeP>124<SeP>117<SeP>71<SeP>74<SeP>93<SeP>93<SeP>125<SeP>203<SeP>75<SeP>43<SeP>50<SeP>51<SeP>211<SeP>49<SeP>62<SeP>28<SeP>31<SeP>124<SeP>34<SeP>82<SeP>44<SeP>98<SeP>80<SeP>73<SeP>53<SeP>72<SeP>51<SeP>53<SeP>56<SeP>91<SeP>93<SeP>59<SeP>60<SeP>56<SeP>41<SeP>67<SeP>83<SeP>116<SeP>78<SeP>84<SeP>99<SeP>74<SeP>85<SeP>101<SeP>65<SeP>43<SeP>45<SeP>41<SeP>5<SeP>132<SeP>51<SeP>120<SeP>149<SeP>82<SeP>49<SeP>57<SeP>59<SeP>75<SeP>36<SeP>30<SeP>44<SeP>85<SeP>152<SeP>94<SeP>71<SeP>89<SeP>82<SeP>74<SeP>55<SeP>64<SeP>111<SeP>42<SeP>57<SeP>81<SeP>202<SeP>129<SeP>71<SeP>104<SeP>56<SeP>82<SeP>46<SeP>90<SeP>53<SeP>113<SeP>86<SeP>62<SeP>29<SeP>117<SeP>99<SeP>160<SeP>113<SeP>59<SeP>77<SeP>86<SeP>90<SeP>97<SeP>59<SeP>38<SeP>28<SeP>28<SeP>39<SeP>46<SeP>112<SeP>134<SeP>78<SeP>267<SeP>66<SeP>59<SeP>138<SeP>56<SeP>82<SeP>58<SeP>66<SeP>0<SeP>0<SeP>0<SeP>0<SeP>39<SeP>126<SeP>51<SeP>15<SeP>56<SeP>25<SeP>37<SeP>86<SeP>86<SeP>86<SeP>71<SeP>53<SeP>83<SeP>52<SeP>97<SeP>14<SeP>18<SeP>47<SeP>43<SeP>94<SeP>88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>95<SeP>82<SeP>28<SeP>60<SeP>64<SeP>46<SeP>82<SeP>46<SeP>149<SeP>215<SeP>114<SeP>85<SeP>151<SeP>68<SeP>96<SeP>95<SeP>136<SeP>165<SeP>87<SeP>98<SeP>60<SeP>68<SeP>105<SeP>84<SeP>68<SeP>99<SeP>78<SeP>87<SeP>71<SeP>85<SeP>68<SeP>79<SeP>143<SeP>68<SeP>39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>122<SeP>90<SeP>151<SeP>93<SeP>34<SeP>113<SeP>71<SeP>67<SeP>118<SeP>54<SeP>85<SeP>51<SeP>80<SeP>66<SeP>59<SeP>109<SeP>186<SeP>47<SeP>100<SeP>104<SeP>115<SeP>102<SeP>51<SeP>84<SeP>65<SeP>173<SeP>63<SeP>106<SeP>69<SeP>71<SeP>97<SeP>77<SeP>73<SeP>91<SeP>81<SeP>146<SeP>118<SeP>183<SeP>51<SeP>63<SeP>57<SeP>88<SeP>42<SeP>100<SeP>91<SeP>92<SeP>74<SeP>73<SeP>114<SeP>198<SeP>134<SeP>104<SeP>77<SeP>20<SeP>43<SeP>90<SeP>91<SeP>106<SeP>76<SeP>52<SeP>75<SeP>55<SeP>121<SeP>90<SeP>50<SeP>85<SeP>68<SeP>89<SeP>40<SeP>150<SeP>90<SeP>114";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "49<SeP>256<SeP>229<SeP>13<SeP>23<SeP>16<SeP>179<SeP>74<SeP>210<SeP>208<SeP>129<SeP>174<SeP>245<SeP>179<SeP>26<SeP>45<SeP>33<SeP>113<SeP>164<SeP>20<SeP>44<SeP>24<SeP>238<SeP>307<SeP>198<SeP>155<SeP>225<SeP>396<SeP>276<SeP>599<SeP>267<SeP>19<SeP>329<SeP>293<SeP>182<SeP>220<SeP>155<SeP>37<SeP>90<SeP>139<SeP>299<SeP>206<SeP>226<SeP>282<SeP>276<SeP>142<SeP>176<SeP>276<SeP>139<SeP>24<SeP>149<SeP>11<SeP>105<SeP>369<SeP>353<SeP>272<SeP>345<SeP>224<SeP>228<SeP>163<SeP>395<SeP>303<SeP>590<SeP>252<SeP>484<SeP>208<SeP>391<SeP>685<SeP>237<SeP>580<SeP>390<SeP>281<SeP>157<SeP>786<SeP>597<SeP>274<SeP>493<SeP>366<SeP>349<SeP>381<SeP>516<SeP>569<SeP>400<SeP>294<SeP>460<SeP>413<SeP>415<SeP>779<SeP>523<SeP>411<SeP>447<SeP>673<SeP>365<SeP>452<SeP>1033<SeP>866<SeP>625<SeP>548<SeP>731<SeP>512<SeP>500<SeP>313<SeP>499<SeP>490<SeP>264<SeP>454<SeP>366<SeP>378<SeP>235<SeP>310<SeP>915<SeP>341<SeP>273<SeP>368<SeP>546<SeP>350<SeP>230<SeP>464<SeP>474<SeP>507<SeP>594<SeP>364<SeP>340<SeP>472<SeP>425<SeP>617<SeP>613<SeP>290<SeP>170<SeP>433<SeP>845<SeP>425<SeP>341<SeP>170<SeP>346<SeP>423<SeP>647<SeP>482<SeP>465<SeP>632<SeP>487<SeP>266<SeP>532<SeP>823<SeP>577<SeP>634<SeP>232<SeP>179<SeP>495<SeP>477<SeP>252<SeP>464<SeP>317<SeP>268<SeP>487<SeP>1086<SeP>147<SeP>752<SeP>389<SeP>360<SeP>182<SeP>242<SeP>285<SeP>378<SeP>553<SeP>274<SeP>225<SeP>350<SeP>446<SeP>251<SeP>348<SeP>255<SeP>684<SeP>609<SeP>289<SeP>284<SeP>252<SeP>532<SeP>559<SeP>623<SeP>635<SeP>303<SeP>235<SeP>116<SeP>127<SeP>292<SeP>293<SeP>20<SeP>308<SeP>176<SeP>278<SeP>7<SeP>403<SeP>255<SeP>516<SeP>374<SeP>190<SeP>89<SeP>396<SeP>229<SeP>309<SeP>244<SeP>308<SeP>207<SeP>363<SeP>177<SeP>185<SeP>194<SeP>437<SeP>184<SeP>88<SeP>182<SeP>306<SeP>372<SeP>596<SeP>94<SeP>251<SeP>64<SeP>164<SeP>150<SeP>790<SeP>190<SeP>370<SeP>136<SeP>122<SeP>140<SeP>223<SeP>112<SeP>262<SeP>219<SeP>87<SeP>296<SeP>279<SeP>198<SeP>110<SeP>200<SeP>243<SeP>75<SeP>77<SeP>190<SeP>196<SeP>412<SeP>305<SeP>138<SeP>711<SeP>197<SeP>1070<SeP>2489<SeP>2717<SeP>2444<SeP>2263<SeP>2519<SeP>2680<SeP>2715<SeP>2548<SeP>2587<SeP>0<SeP>0<SeP>0<SeP>0<SeP>122<SeP>164<SeP>212<SeP>260<SeP>403<SeP>143<SeP>146<SeP>101<SeP>110<SeP>89<SeP>233<SeP>41<SeP>157<SeP>183<SeP>423<SeP>27<SeP>127<SeP>397<SeP>35<SeP>423<SeP>133<SeP>86<SeP>281<SeP>76<SeP>22<SeP>269<SeP>141<SeP>167<SeP>28<SeP>38<SeP>122<SeP>141<SeP>316<SeP>130<SeP>156<SeP>175<SeP>124<SeP>173<SeP>190<SeP>342<SeP>259<SeP>431<SeP>249<SeP>489<SeP>329<SeP>351<SeP>167<SeP>204<SeP>309<SeP>227<SeP>145<SeP>136<SeP>58<SeP>30<SeP>94<SeP>173<SeP>222<SeP>169<SeP>37<SeP>85<SeP>229<SeP>170<SeP>332<SeP>82<SeP>225<SeP>186<SeP>119<SeP>47<SeP>505<SeP>109<SeP>311<SeP>66<SeP>108<SeP>358<SeP>324<SeP>388<SeP>2824<SeP>3323<SeP>853<SeP>349<SeP>231<SeP>278<SeP>682<SeP>151<SeP>384<SeP>124<SeP>10<SeP>68<SeP>158<SeP>510<SeP>78<SeP>274<SeP>199<SeP>191<SeP>161<SeP>852<SeP>371<SeP>433<SeP>177<SeP>260<SeP>168<SeP>206<SeP>245<SeP>465<SeP>202<SeP>475<SeP>64<SeP>321<SeP>334<SeP>178<SeP>384<SeP>173<SeP>160<SeP>66<SeP>226<SeP>95<SeP>323<SeP>588<SeP>107<SeP>173<SeP>203<SeP>186<SeP>48<SeP>84<SeP>317<SeP>210<SeP>138<SeP>123<SeP>74<SeP>23<SeP>353<SeP>237<SeP>193<SeP>116<SeP>293<SeP>292<SeP>94<SeP>556<SeP>297<SeP>254";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-01-18 00:00:00<SeP>2025-01-18 01:48:00<SeP>2025-01-18 03:36:00<SeP>2025-01-18 05:24:00<SeP>2025-01-18 07:12:00<SeP>2025-01-18 09:00:00<SeP>2025-01-18 10:48:00<SeP>2025-01-18 12:36:00<SeP>2025-01-18 14:24:00<SeP>2025-01-18 16:12:00<SeP>2025-01-18 18:00:00<SeP>2025-01-18 19:48:00<SeP>2025-01-18 21:36:00<SeP>2025-01-18 23:24:00<SeP>2025-01-19 01:12:00<SeP>2025-01-19 03:00:00<SeP>2025-01-19 04:48:00<SeP>2025-01-19 06:36:00<SeP>2025-01-19 08:24:00<SeP>2025-01-19 10:12:00<SeP>2025-01-19 12:00:00<SeP>2025-01-19 13:48:00<SeP>2025-01-19 15:36:00<SeP>2025-01-19 17:24:00<SeP>2025-01-19 19:12:00<SeP>2025-01-19 21:00:00<SeP>2025-01-19 22:48:00<SeP>2025-01-20 00:36:00<SeP>2025-01-20 02:24:00<SeP>2025-01-20 04:12:00<SeP>2025-01-20 06:00:00<SeP>2025-01-20 07:48:00<SeP>2025-01-20 09:36:00<SeP>2025-01-20 11:24:00<SeP>2025-01-20 13:12:00<SeP>2025-01-20 15:00:00<SeP>2025-01-20 16:48:00<SeP>2025-01-20 18:36:00<SeP>2025-01-20 20:24:00<SeP>2025-01-20 22:12:00<SeP>2025-01-21 00:00:00<SeP>2025-01-21 01:48:00<SeP>2025-01-21 03:36:00<SeP>2025-01-21 05:24:00<SeP>2025-01-21 07:12:00<SeP>2025-01-21 09:00:00<SeP>2025-01-21 10:48:00<SeP>2025-01-21 12:36:00<SeP>2025-01-21 14:24:00<SeP>2025-01-21 16:12:00<SeP>2025-01-21 18:00:00<SeP>2025-01-21 19:48:00<SeP>2025-01-21 21:36:00<SeP>2025-01-21 23:24:00<SeP>2025-01-22 01:12:00<SeP>2025-01-22 03:00:00<SeP>2025-01-22 04:48:00<SeP>2025-01-22 06:36:00<SeP>2025-01-22 08:24:00<SeP>2025-01-22 10:12:00<SeP>2025-01-22 12:00:00<SeP>2025-01-22 13:48:00<SeP>2025-01-22 15:36:00<SeP>2025-01-22 17:24:00<SeP>2025-01-22 19:12:00<SeP>2025-01-22 21:00:00<SeP>2025-01-22 22:48:00<SeP>2025-01-23 00:36:00<SeP>2025-01-23 02:24:00<SeP>2025-01-23 04:12:00<SeP>2025-01-23 06:00:00<SeP>2025-01-23 07:48:00<SeP>2025-01-23 09:36:00<SeP>2025-01-23 11:24:00<SeP>2025-01-23 13:12:00<SeP>2025-01-23 15:00:00<SeP>2025-01-23 16:48:00<SeP>2025-01-23 18:36:00<SeP>2025-01-23 20:24:00<SeP>2025-01-23 22:12:00<SeP>2025-01-24 00:00:00<SeP>2025-01-24 01:48:00<SeP>2025-01-24 03:36:00<SeP>2025-01-24 05:24:00<SeP>2025-01-24 07:12:00<SeP>2025-01-24 09:00:00<SeP>2025-01-24 10:48:00<SeP>2025-01-24 12:36:00<SeP>2025-01-24 14:24:00<SeP>2025-01-24 16:12:00<SeP>2025-01-24 18:00:00<SeP>2025-01-24 19:48:00<SeP>2025-01-24 21:36:00<SeP>2025-01-24 23:24:00<SeP>2025-01-25 01:12:00<SeP>2025-01-25 03:00:00<SeP>2025-01-25 04:48:00<SeP>2025-01-25 06:36:00<SeP>2025-01-25 08:24:00<SeP>2025-01-25 10:12:00<SeP>2025-01-25 12:00:00<SeP>2025-01-25 13:48:00<SeP>2025-01-25 15:36:00<SeP>2025-01-25 17:24:00<SeP>2025-01-25 19:12:00<SeP>2025-01-25 21:00:00<SeP>2025-01-25 22:48:00<SeP>2025-01-26 00:36:00<SeP>2025-01-26 02:24:00<SeP>2025-01-26 04:12:00<SeP>2025-01-26 06:00:00<SeP>2025-01-26 07:48:00<SeP>2025-01-26 09:36:00<SeP>2025-01-26 11:24:00<SeP>2025-01-26 13:12:00<SeP>2025-01-26 15:00:00<SeP>2025-01-26 16:48:00<SeP>2025-01-26 18:36:00<SeP>2025-01-26 20:24:00<SeP>2025-01-26 22:12:00<SeP>2025-01-27 00:00:00<SeP>2025-01-27 01:48:00<SeP>2025-01-27 03:36:00<SeP>2025-01-27 05:24:00<SeP>2025-01-27 07:12:00<SeP>2025-01-27 09:00:00<SeP>2025-01-27 10:48:00<SeP>2025-01-27 12:36:00<SeP>2025-01-27 14:24:00<SeP>2025-01-27 16:12:00<SeP>2025-01-27 18:00:00<SeP>2025-01-27 19:48:00<SeP>2025-01-27 21:36:00<SeP>2025-01-27 23:24:00<SeP>2025-01-28 01:12:00<SeP>2025-01-28 03:00:00<SeP>2025-01-28 04:48:00<SeP>2025-01-28 06:36:00<SeP>2025-01-28 08:24:00<SeP>2025-01-28 10:12:00<SeP>2025-01-28 12:00:00<SeP>2025-01-28 13:48:00<SeP>2025-01-28 15:36:00<SeP>2025-01-28 17:24:00<SeP>2025-01-28 19:12:00<SeP>2025-01-28 21:00:00<SeP>2025-01-28 22:48:00<SeP>2025-01-29 00:36:00<SeP>2025-01-29 02:24:00<SeP>2025-01-29 04:12:00<SeP>2025-01-29 06:00:00<SeP>2025-01-29 07:48:00<SeP>2025-01-29 09:36:00<SeP>2025-01-29 11:24:00<SeP>2025-01-29 13:12:00<SeP>2025-01-29 15:00:00<SeP>2025-01-29 16:48:00<SeP>2025-01-29 18:36:00<SeP>2025-01-29 20:24:00<SeP>2025-01-29 22:12:00<SeP>2025-01-30 00:00:00<SeP>2025-01-30 01:48:00<SeP>2025-01-30 03:36:00<SeP>2025-01-30 05:24:00<SeP>2025-01-30 07:12:00<SeP>2025-01-30 09:00:00<SeP>2025-01-30 10:48:00<SeP>2025-01-30 12:36:00<SeP>2025-01-30 14:24:00<SeP>2025-01-30 16:12:00<SeP>2025-01-30 18:00:00<SeP>2025-01-30 19:48:00<SeP>2025-01-30 21:36:00<SeP>2025-01-30 23:24:00<SeP>2025-01-31 01:12:00<SeP>2025-01-31 03:00:00<SeP>2025-01-31 04:48:00<SeP>2025-01-31 06:36:00<SeP>2025-01-31 08:24:00<SeP>2025-01-31 10:12:00<SeP>2025-01-31 12:00:00<SeP>2025-01-31 13:48:00<SeP>2025-01-31 15:36:00<SeP>2025-01-31 17:24:00<SeP>2025-01-31 19:12:00<SeP>2025-01-31 21:00:00<SeP>2025-01-31 22:48:00<SeP>2025-02-01 00:36:00<SeP>2025-02-01 02:24:00<SeP>2025-02-01 04:12:00<SeP>2025-02-01 06:00:00<SeP>2025-02-01 07:48:00<SeP>2025-02-01 09:36:00<SeP>2025-02-01 11:24:00<SeP>2025-02-01 13:12:00<SeP>2025-02-01 15:00:00<SeP>2025-02-01 16:48:00<SeP>2025-02-01 18:36:00<SeP>2025-02-01 20:24:00<SeP>2025-02-01 22:12:00<SeP>2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00";
  const itemLabel       = "Scans";
  const itemData        = "82<SeP>94<SeP>61<SeP>82<SeP>100<SeP>74<SeP>93<SeP>63<SeP>119<SeP>41<SeP>24<SeP>67<SeP>55<SeP>68<SeP>48<SeP>81<SeP>53<SeP>180<SeP>83<SeP>53<SeP>63<SeP>25<SeP>32<SeP>25<SeP>99<SeP>56<SeP>143<SeP>82<SeP>94<SeP>80<SeP>94<SeP>47<SeP>85<SeP>54<SeP>44<SeP>56<SeP>63<SeP>61<SeP>79<SeP>153<SeP>97<SeP>41<SeP>76<SeP>69<SeP>35<SeP>58<SeP>45<SeP>69<SeP>22<SeP>24<SeP>76<SeP>24<SeP>38<SeP>76<SeP>72<SeP>156<SeP>56<SeP>96<SeP>168<SeP>87<SeP>66<SeP>27<SeP>103<SeP>32<SeP>113<SeP>63<SeP>96<SeP>66<SeP>53<SeP>73<SeP>68<SeP>59<SeP>91<SeP>62<SeP>71<SeP>62<SeP>70<SeP>78<SeP>80<SeP>131<SeP>71<SeP>103<SeP>70<SeP>103<SeP>45<SeP>49<SeP>49<SeP>108<SeP>73<SeP>86<SeP>80<SeP>171<SeP>105<SeP>160<SeP>78<SeP>102<SeP>86<SeP>73<SeP>91<SeP>49<SeP>38<SeP>69<SeP>76<SeP>65<SeP>87<SeP>50<SeP>74<SeP>63<SeP>55<SeP>94<SeP>130<SeP>35<SeP>30<SeP>49<SeP>46<SeP>78<SeP>59<SeP>90<SeP>88<SeP>73<SeP>112<SeP>56<SeP>209<SeP>99<SeP>105<SeP>38<SeP>30<SeP>41<SeP>71<SeP>88<SeP>113<SeP>84<SeP>78<SeP>83<SeP>70<SeP>52<SeP>64<SeP>80<SeP>64<SeP>48<SeP>50<SeP>122<SeP>57<SeP>124<SeP>117<SeP>71<SeP>74<SeP>93<SeP>93<SeP>125<SeP>203<SeP>75<SeP>43<SeP>50<SeP>51<SeP>211<SeP>49<SeP>62<SeP>28<SeP>31<SeP>124<SeP>34<SeP>82<SeP>44<SeP>98<SeP>80<SeP>73<SeP>53<SeP>72<SeP>51<SeP>53<SeP>56<SeP>91<SeP>93<SeP>59<SeP>60<SeP>56<SeP>41<SeP>67<SeP>83<SeP>116<SeP>78<SeP>84<SeP>99<SeP>74<SeP>85<SeP>101<SeP>65<SeP>43<SeP>45<SeP>41<SeP>5<SeP>132<SeP>51<SeP>120<SeP>149<SeP>82<SeP>49<SeP>57<SeP>59<SeP>75<SeP>36<SeP>30<SeP>44<SeP>85<SeP>152<SeP>94<SeP>71<SeP>89<SeP>82<SeP>74<SeP>55<SeP>64<SeP>111<SeP>42<SeP>57<SeP>81<SeP>202<SeP>129<SeP>71<SeP>104<SeP>56<SeP>82<SeP>46<SeP>90<SeP>53<SeP>113<SeP>86<SeP>62<SeP>29<SeP>117<SeP>99<SeP>160<SeP>113<SeP>59<SeP>77<SeP>86<SeP>90<SeP>97<SeP>59<SeP>38<SeP>28<SeP>28<SeP>39<SeP>46<SeP>112<SeP>134<SeP>78<SeP>267<SeP>66<SeP>59<SeP>138<SeP>56<SeP>82<SeP>58<SeP>66<SeP>0<SeP>0<SeP>0<SeP>0<SeP>39<SeP>126<SeP>51<SeP>15<SeP>56<SeP>25<SeP>37<SeP>86<SeP>86<SeP>86<SeP>71<SeP>53<SeP>83<SeP>52<SeP>97<SeP>14<SeP>18<SeP>47<SeP>43<SeP>94<SeP>88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>95<SeP>82<SeP>28<SeP>60<SeP>64<SeP>46<SeP>82<SeP>46<SeP>149<SeP>215<SeP>114<SeP>85<SeP>151<SeP>68<SeP>96<SeP>95<SeP>136<SeP>165<SeP>87<SeP>98<SeP>60<SeP>68<SeP>105<SeP>84<SeP>68<SeP>99<SeP>78<SeP>87<SeP>71<SeP>85<SeP>68<SeP>79<SeP>143<SeP>68<SeP>39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>122<SeP>90<SeP>151<SeP>93<SeP>34<SeP>113<SeP>71<SeP>67<SeP>118<SeP>54<SeP>85<SeP>51<SeP>80<SeP>66<SeP>59<SeP>109<SeP>186<SeP>47<SeP>100<SeP>104<SeP>115<SeP>102<SeP>51<SeP>84<SeP>65<SeP>173<SeP>63<SeP>106<SeP>69<SeP>71<SeP>97<SeP>77<SeP>73<SeP>91<SeP>81<SeP>146<SeP>118<SeP>183<SeP>51<SeP>63<SeP>57<SeP>88<SeP>42<SeP>100<SeP>91<SeP>92<SeP>74<SeP>73<SeP>114<SeP>198<SeP>134<SeP>104<SeP>77<SeP>20<SeP>43<SeP>90<SeP>91<SeP>106<SeP>76<SeP>52<SeP>75<SeP>55<SeP>121<SeP>90<SeP>50<SeP>85<SeP>68<SeP>89<SeP>40<SeP>150<SeP>90<SeP>114";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-01-18 00:00:00<SeP>2025-01-18 01:48:00<SeP>2025-01-18 03:36:00<SeP>2025-01-18 05:24:00<SeP>2025-01-18 07:12:00<SeP>2025-01-18 09:00:00<SeP>2025-01-18 10:48:00<SeP>2025-01-18 12:36:00<SeP>2025-01-18 14:24:00<SeP>2025-01-18 16:12:00<SeP>2025-01-18 18:00:00<SeP>2025-01-18 19:48:00<SeP>2025-01-18 21:36:00<SeP>2025-01-18 23:24:00<SeP>2025-01-19 01:12:00<SeP>2025-01-19 03:00:00<SeP>2025-01-19 04:48:00<SeP>2025-01-19 06:36:00<SeP>2025-01-19 08:24:00<SeP>2025-01-19 10:12:00<SeP>2025-01-19 12:00:00<SeP>2025-01-19 13:48:00<SeP>2025-01-19 15:36:00<SeP>2025-01-19 17:24:00<SeP>2025-01-19 19:12:00<SeP>2025-01-19 21:00:00<SeP>2025-01-19 22:48:00<SeP>2025-01-20 00:36:00<SeP>2025-01-20 02:24:00<SeP>2025-01-20 04:12:00<SeP>2025-01-20 06:00:00<SeP>2025-01-20 07:48:00<SeP>2025-01-20 09:36:00<SeP>2025-01-20 11:24:00<SeP>2025-01-20 13:12:00<SeP>2025-01-20 15:00:00<SeP>2025-01-20 16:48:00<SeP>2025-01-20 18:36:00<SeP>2025-01-20 20:24:00<SeP>2025-01-20 22:12:00<SeP>2025-01-21 00:00:00<SeP>2025-01-21 01:48:00<SeP>2025-01-21 03:36:00<SeP>2025-01-21 05:24:00<SeP>2025-01-21 07:12:00<SeP>2025-01-21 09:00:00<SeP>2025-01-21 10:48:00<SeP>2025-01-21 12:36:00<SeP>2025-01-21 14:24:00<SeP>2025-01-21 16:12:00<SeP>2025-01-21 18:00:00<SeP>2025-01-21 19:48:00<SeP>2025-01-21 21:36:00<SeP>2025-01-21 23:24:00<SeP>2025-01-22 01:12:00<SeP>2025-01-22 03:00:00<SeP>2025-01-22 04:48:00<SeP>2025-01-22 06:36:00<SeP>2025-01-22 08:24:00<SeP>2025-01-22 10:12:00<SeP>2025-01-22 12:00:00<SeP>2025-01-22 13:48:00<SeP>2025-01-22 15:36:00<SeP>2025-01-22 17:24:00<SeP>2025-01-22 19:12:00<SeP>2025-01-22 21:00:00<SeP>2025-01-22 22:48:00<SeP>2025-01-23 00:36:00<SeP>2025-01-23 02:24:00<SeP>2025-01-23 04:12:00<SeP>2025-01-23 06:00:00<SeP>2025-01-23 07:48:00<SeP>2025-01-23 09:36:00<SeP>2025-01-23 11:24:00<SeP>2025-01-23 13:12:00<SeP>2025-01-23 15:00:00<SeP>2025-01-23 16:48:00<SeP>2025-01-23 18:36:00<SeP>2025-01-23 20:24:00<SeP>2025-01-23 22:12:00<SeP>2025-01-24 00:00:00<SeP>2025-01-24 01:48:00<SeP>2025-01-24 03:36:00<SeP>2025-01-24 05:24:00<SeP>2025-01-24 07:12:00<SeP>2025-01-24 09:00:00<SeP>2025-01-24 10:48:00<SeP>2025-01-24 12:36:00<SeP>2025-01-24 14:24:00<SeP>2025-01-24 16:12:00<SeP>2025-01-24 18:00:00<SeP>2025-01-24 19:48:00<SeP>2025-01-24 21:36:00<SeP>2025-01-24 23:24:00<SeP>2025-01-25 01:12:00<SeP>2025-01-25 03:00:00<SeP>2025-01-25 04:48:00<SeP>2025-01-25 06:36:00<SeP>2025-01-25 08:24:00<SeP>2025-01-25 10:12:00<SeP>2025-01-25 12:00:00<SeP>2025-01-25 13:48:00<SeP>2025-01-25 15:36:00<SeP>2025-01-25 17:24:00<SeP>2025-01-25 19:12:00<SeP>2025-01-25 21:00:00<SeP>2025-01-25 22:48:00<SeP>2025-01-26 00:36:00<SeP>2025-01-26 02:24:00<SeP>2025-01-26 04:12:00<SeP>2025-01-26 06:00:00<SeP>2025-01-26 07:48:00<SeP>2025-01-26 09:36:00<SeP>2025-01-26 11:24:00<SeP>2025-01-26 13:12:00<SeP>2025-01-26 15:00:00<SeP>2025-01-26 16:48:00<SeP>2025-01-26 18:36:00<SeP>2025-01-26 20:24:00<SeP>2025-01-26 22:12:00<SeP>2025-01-27 00:00:00<SeP>2025-01-27 01:48:00<SeP>2025-01-27 03:36:00<SeP>2025-01-27 05:24:00<SeP>2025-01-27 07:12:00<SeP>2025-01-27 09:00:00<SeP>2025-01-27 10:48:00<SeP>2025-01-27 12:36:00<SeP>2025-01-27 14:24:00<SeP>2025-01-27 16:12:00<SeP>2025-01-27 18:00:00<SeP>2025-01-27 19:48:00<SeP>2025-01-27 21:36:00<SeP>2025-01-27 23:24:00<SeP>2025-01-28 01:12:00<SeP>2025-01-28 03:00:00<SeP>2025-01-28 04:48:00<SeP>2025-01-28 06:36:00<SeP>2025-01-28 08:24:00<SeP>2025-01-28 10:12:00<SeP>2025-01-28 12:00:00<SeP>2025-01-28 13:48:00<SeP>2025-01-28 15:36:00<SeP>2025-01-28 17:24:00<SeP>2025-01-28 19:12:00<SeP>2025-01-28 21:00:00<SeP>2025-01-28 22:48:00<SeP>2025-01-29 00:36:00<SeP>2025-01-29 02:24:00<SeP>2025-01-29 04:12:00<SeP>2025-01-29 06:00:00<SeP>2025-01-29 07:48:00<SeP>2025-01-29 09:36:00<SeP>2025-01-29 11:24:00<SeP>2025-01-29 13:12:00<SeP>2025-01-29 15:00:00<SeP>2025-01-29 16:48:00<SeP>2025-01-29 18:36:00<SeP>2025-01-29 20:24:00<SeP>2025-01-29 22:12:00<SeP>2025-01-30 00:00:00<SeP>2025-01-30 01:48:00<SeP>2025-01-30 03:36:00<SeP>2025-01-30 05:24:00<SeP>2025-01-30 07:12:00<SeP>2025-01-30 09:00:00<SeP>2025-01-30 10:48:00<SeP>2025-01-30 12:36:00<SeP>2025-01-30 14:24:00<SeP>2025-01-30 16:12:00<SeP>2025-01-30 18:00:00<SeP>2025-01-30 19:48:00<SeP>2025-01-30 21:36:00<SeP>2025-01-30 23:24:00<SeP>2025-01-31 01:12:00<SeP>2025-01-31 03:00:00<SeP>2025-01-31 04:48:00<SeP>2025-01-31 06:36:00<SeP>2025-01-31 08:24:00<SeP>2025-01-31 10:12:00<SeP>2025-01-31 12:00:00<SeP>2025-01-31 13:48:00<SeP>2025-01-31 15:36:00<SeP>2025-01-31 17:24:00<SeP>2025-01-31 19:12:00<SeP>2025-01-31 21:00:00<SeP>2025-01-31 22:48:00<SeP>2025-02-01 00:36:00<SeP>2025-02-01 02:24:00<SeP>2025-02-01 04:12:00<SeP>2025-02-01 06:00:00<SeP>2025-02-01 07:48:00<SeP>2025-02-01 09:36:00<SeP>2025-02-01 11:24:00<SeP>2025-02-01 13:12:00<SeP>2025-02-01 15:00:00<SeP>2025-02-01 16:48:00<SeP>2025-02-01 18:36:00<SeP>2025-02-01 20:24:00<SeP>2025-02-01 22:12:00<SeP>2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00";
  const itemLabel       = "Attacks";
  const itemData        = "49<SeP>256<SeP>229<SeP>13<SeP>23<SeP>16<SeP>179<SeP>74<SeP>210<SeP>208<SeP>129<SeP>174<SeP>245<SeP>179<SeP>26<SeP>45<SeP>33<SeP>113<SeP>164<SeP>20<SeP>44<SeP>24<SeP>238<SeP>307<SeP>198<SeP>155<SeP>225<SeP>396<SeP>276<SeP>599<SeP>267<SeP>19<SeP>329<SeP>293<SeP>182<SeP>220<SeP>155<SeP>37<SeP>90<SeP>139<SeP>299<SeP>206<SeP>226<SeP>282<SeP>276<SeP>142<SeP>176<SeP>276<SeP>139<SeP>24<SeP>149<SeP>11<SeP>105<SeP>369<SeP>353<SeP>272<SeP>345<SeP>224<SeP>228<SeP>163<SeP>395<SeP>303<SeP>590<SeP>252<SeP>484<SeP>208<SeP>391<SeP>685<SeP>237<SeP>580<SeP>390<SeP>281<SeP>157<SeP>786<SeP>597<SeP>274<SeP>493<SeP>366<SeP>349<SeP>381<SeP>516<SeP>569<SeP>400<SeP>294<SeP>460<SeP>413<SeP>415<SeP>779<SeP>523<SeP>411<SeP>447<SeP>673<SeP>365<SeP>452<SeP>1033<SeP>866<SeP>625<SeP>548<SeP>731<SeP>512<SeP>500<SeP>313<SeP>499<SeP>490<SeP>264<SeP>454<SeP>366<SeP>378<SeP>235<SeP>310<SeP>915<SeP>341<SeP>273<SeP>368<SeP>546<SeP>350<SeP>230<SeP>464<SeP>474<SeP>507<SeP>594<SeP>364<SeP>340<SeP>472<SeP>425<SeP>617<SeP>613<SeP>290<SeP>170<SeP>433<SeP>845<SeP>425<SeP>341<SeP>170<SeP>346<SeP>423<SeP>647<SeP>482<SeP>465<SeP>632<SeP>487<SeP>266<SeP>532<SeP>823<SeP>577<SeP>634<SeP>232<SeP>179<SeP>495<SeP>477<SeP>252<SeP>464<SeP>317<SeP>268<SeP>487<SeP>1086<SeP>147<SeP>752<SeP>389<SeP>360<SeP>182<SeP>242<SeP>285<SeP>378<SeP>553<SeP>274<SeP>225<SeP>350<SeP>446<SeP>251<SeP>348<SeP>255<SeP>684<SeP>609<SeP>289<SeP>284<SeP>252<SeP>532<SeP>559<SeP>623<SeP>635<SeP>303<SeP>235<SeP>116<SeP>127<SeP>292<SeP>293<SeP>20<SeP>308<SeP>176<SeP>278<SeP>7<SeP>403<SeP>255<SeP>516<SeP>374<SeP>190<SeP>89<SeP>396<SeP>229<SeP>309<SeP>244<SeP>308<SeP>207<SeP>363<SeP>177<SeP>185<SeP>194<SeP>437<SeP>184<SeP>88<SeP>182<SeP>306<SeP>372<SeP>596<SeP>94<SeP>251<SeP>64<SeP>164<SeP>150<SeP>790<SeP>190<SeP>370<SeP>136<SeP>122<SeP>140<SeP>223<SeP>112<SeP>262<SeP>219<SeP>87<SeP>296<SeP>279<SeP>198<SeP>110<SeP>200<SeP>243<SeP>75<SeP>77<SeP>190<SeP>196<SeP>412<SeP>305<SeP>138<SeP>711<SeP>197<SeP>1070<SeP>2489<SeP>2717<SeP>2444<SeP>2263<SeP>2519<SeP>2680<SeP>2715<SeP>2548<SeP>2587<SeP>0<SeP>0<SeP>0<SeP>0<SeP>122<SeP>164<SeP>212<SeP>260<SeP>403<SeP>143<SeP>146<SeP>101<SeP>110<SeP>89<SeP>233<SeP>41<SeP>157<SeP>183<SeP>423<SeP>27<SeP>127<SeP>397<SeP>35<SeP>423<SeP>133<SeP>86<SeP>281<SeP>76<SeP>22<SeP>269<SeP>141<SeP>167<SeP>28<SeP>38<SeP>122<SeP>141<SeP>316<SeP>130<SeP>156<SeP>175<SeP>124<SeP>173<SeP>190<SeP>342<SeP>259<SeP>431<SeP>249<SeP>489<SeP>329<SeP>351<SeP>167<SeP>204<SeP>309<SeP>227<SeP>145<SeP>136<SeP>58<SeP>30<SeP>94<SeP>173<SeP>222<SeP>169<SeP>37<SeP>85<SeP>229<SeP>170<SeP>332<SeP>82<SeP>225<SeP>186<SeP>119<SeP>47<SeP>505<SeP>109<SeP>311<SeP>66<SeP>108<SeP>358<SeP>324<SeP>388<SeP>2824<SeP>3323<SeP>853<SeP>349<SeP>231<SeP>278<SeP>682<SeP>151<SeP>384<SeP>124<SeP>10<SeP>68<SeP>158<SeP>510<SeP>78<SeP>274<SeP>199<SeP>191<SeP>161<SeP>852<SeP>371<SeP>433<SeP>177<SeP>260<SeP>168<SeP>206<SeP>245<SeP>465<SeP>202<SeP>475<SeP>64<SeP>321<SeP>334<SeP>178<SeP>384<SeP>173<SeP>160<SeP>66<SeP>226<SeP>95<SeP>323<SeP>588<SeP>107<SeP>173<SeP>203<SeP>186<SeP>48<SeP>84<SeP>317<SeP>210<SeP>138<SeP>123<SeP>74<SeP>23<SeP>353<SeP>237<SeP>193<SeP>116<SeP>293<SeP>292<SeP>94<SeP>556<SeP>297<SeP>254";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2025-01-18 00:00:00<SeP>2025-01-18 01:48:00<SeP>2025-01-18 03:36:00<SeP>2025-01-18 05:24:00<SeP>2025-01-18 07:12:00<SeP>2025-01-18 09:00:00<SeP>2025-01-18 10:48:00<SeP>2025-01-18 12:36:00<SeP>2025-01-18 14:24:00<SeP>2025-01-18 16:12:00<SeP>2025-01-18 18:00:00<SeP>2025-01-18 19:48:00<SeP>2025-01-18 21:36:00<SeP>2025-01-18 23:24:00<SeP>2025-01-19 01:12:00<SeP>2025-01-19 03:00:00<SeP>2025-01-19 04:48:00<SeP>2025-01-19 06:36:00<SeP>2025-01-19 08:24:00<SeP>2025-01-19 10:12:00<SeP>2025-01-19 12:00:00<SeP>2025-01-19 13:48:00<SeP>2025-01-19 15:36:00<SeP>2025-01-19 17:24:00<SeP>2025-01-19 19:12:00<SeP>2025-01-19 21:00:00<SeP>2025-01-19 22:48:00<SeP>2025-01-20 00:36:00<SeP>2025-01-20 02:24:00<SeP>2025-01-20 04:12:00<SeP>2025-01-20 06:00:00<SeP>2025-01-20 07:48:00<SeP>2025-01-20 09:36:00<SeP>2025-01-20 11:24:00<SeP>2025-01-20 13:12:00<SeP>2025-01-20 15:00:00<SeP>2025-01-20 16:48:00<SeP>2025-01-20 18:36:00<SeP>2025-01-20 20:24:00<SeP>2025-01-20 22:12:00<SeP>2025-01-21 00:00:00<SeP>2025-01-21 01:48:00<SeP>2025-01-21 03:36:00<SeP>2025-01-21 05:24:00<SeP>2025-01-21 07:12:00<SeP>2025-01-21 09:00:00<SeP>2025-01-21 10:48:00<SeP>2025-01-21 12:36:00<SeP>2025-01-21 14:24:00<SeP>2025-01-21 16:12:00<SeP>2025-01-21 18:00:00<SeP>2025-01-21 19:48:00<SeP>2025-01-21 21:36:00<SeP>2025-01-21 23:24:00<SeP>2025-01-22 01:12:00<SeP>2025-01-22 03:00:00<SeP>2025-01-22 04:48:00<SeP>2025-01-22 06:36:00<SeP>2025-01-22 08:24:00<SeP>2025-01-22 10:12:00<SeP>2025-01-22 12:00:00<SeP>2025-01-22 13:48:00<SeP>2025-01-22 15:36:00<SeP>2025-01-22 17:24:00<SeP>2025-01-22 19:12:00<SeP>2025-01-22 21:00:00<SeP>2025-01-22 22:48:00<SeP>2025-01-23 00:36:00<SeP>2025-01-23 02:24:00<SeP>2025-01-23 04:12:00<SeP>2025-01-23 06:00:00<SeP>2025-01-23 07:48:00<SeP>2025-01-23 09:36:00<SeP>2025-01-23 11:24:00<SeP>2025-01-23 13:12:00<SeP>2025-01-23 15:00:00<SeP>2025-01-23 16:48:00<SeP>2025-01-23 18:36:00<SeP>2025-01-23 20:24:00<SeP>2025-01-23 22:12:00<SeP>2025-01-24 00:00:00<SeP>2025-01-24 01:48:00<SeP>2025-01-24 03:36:00<SeP>2025-01-24 05:24:00<SeP>2025-01-24 07:12:00<SeP>2025-01-24 09:00:00<SeP>2025-01-24 10:48:00<SeP>2025-01-24 12:36:00<SeP>2025-01-24 14:24:00<SeP>2025-01-24 16:12:00<SeP>2025-01-24 18:00:00<SeP>2025-01-24 19:48:00<SeP>2025-01-24 21:36:00<SeP>2025-01-24 23:24:00<SeP>2025-01-25 01:12:00<SeP>2025-01-25 03:00:00<SeP>2025-01-25 04:48:00<SeP>2025-01-25 06:36:00<SeP>2025-01-25 08:24:00<SeP>2025-01-25 10:12:00<SeP>2025-01-25 12:00:00<SeP>2025-01-25 13:48:00<SeP>2025-01-25 15:36:00<SeP>2025-01-25 17:24:00<SeP>2025-01-25 19:12:00<SeP>2025-01-25 21:00:00<SeP>2025-01-25 22:48:00<SeP>2025-01-26 00:36:00<SeP>2025-01-26 02:24:00<SeP>2025-01-26 04:12:00<SeP>2025-01-26 06:00:00<SeP>2025-01-26 07:48:00<SeP>2025-01-26 09:36:00<SeP>2025-01-26 11:24:00<SeP>2025-01-26 13:12:00<SeP>2025-01-26 15:00:00<SeP>2025-01-26 16:48:00<SeP>2025-01-26 18:36:00<SeP>2025-01-26 20:24:00<SeP>2025-01-26 22:12:00<SeP>2025-01-27 00:00:00<SeP>2025-01-27 01:48:00<SeP>2025-01-27 03:36:00<SeP>2025-01-27 05:24:00<SeP>2025-01-27 07:12:00<SeP>2025-01-27 09:00:00<SeP>2025-01-27 10:48:00<SeP>2025-01-27 12:36:00<SeP>2025-01-27 14:24:00<SeP>2025-01-27 16:12:00<SeP>2025-01-27 18:00:00<SeP>2025-01-27 19:48:00<SeP>2025-01-27 21:36:00<SeP>2025-01-27 23:24:00<SeP>2025-01-28 01:12:00<SeP>2025-01-28 03:00:00<SeP>2025-01-28 04:48:00<SeP>2025-01-28 06:36:00<SeP>2025-01-28 08:24:00<SeP>2025-01-28 10:12:00<SeP>2025-01-28 12:00:00<SeP>2025-01-28 13:48:00<SeP>2025-01-28 15:36:00<SeP>2025-01-28 17:24:00<SeP>2025-01-28 19:12:00<SeP>2025-01-28 21:00:00<SeP>2025-01-28 22:48:00<SeP>2025-01-29 00:36:00<SeP>2025-01-29 02:24:00<SeP>2025-01-29 04:12:00<SeP>2025-01-29 06:00:00<SeP>2025-01-29 07:48:00<SeP>2025-01-29 09:36:00<SeP>2025-01-29 11:24:00<SeP>2025-01-29 13:12:00<SeP>2025-01-29 15:00:00<SeP>2025-01-29 16:48:00<SeP>2025-01-29 18:36:00<SeP>2025-01-29 20:24:00<SeP>2025-01-29 22:12:00<SeP>2025-01-30 00:00:00<SeP>2025-01-30 01:48:00<SeP>2025-01-30 03:36:00<SeP>2025-01-30 05:24:00<SeP>2025-01-30 07:12:00<SeP>2025-01-30 09:00:00<SeP>2025-01-30 10:48:00<SeP>2025-01-30 12:36:00<SeP>2025-01-30 14:24:00<SeP>2025-01-30 16:12:00<SeP>2025-01-30 18:00:00<SeP>2025-01-30 19:48:00<SeP>2025-01-30 21:36:00<SeP>2025-01-30 23:24:00<SeP>2025-01-31 01:12:00<SeP>2025-01-31 03:00:00<SeP>2025-01-31 04:48:00<SeP>2025-01-31 06:36:00<SeP>2025-01-31 08:24:00<SeP>2025-01-31 10:12:00<SeP>2025-01-31 12:00:00<SeP>2025-01-31 13:48:00<SeP>2025-01-31 15:36:00<SeP>2025-01-31 17:24:00<SeP>2025-01-31 19:12:00<SeP>2025-01-31 21:00:00<SeP>2025-01-31 22:48:00<SeP>2025-02-01 00:36:00<SeP>2025-02-01 02:24:00<SeP>2025-02-01 04:12:00<SeP>2025-02-01 06:00:00<SeP>2025-02-01 07:48:00<SeP>2025-02-01 09:36:00<SeP>2025-02-01 11:24:00<SeP>2025-02-01 13:12:00<SeP>2025-02-01 15:00:00<SeP>2025-02-01 16:48:00<SeP>2025-02-01 18:36:00<SeP>2025-02-01 20:24:00<SeP>2025-02-01 22:12:00<SeP>2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00";
  const item1Label       = "Escaneos";
  const item1Data        = "82<SeP>94<SeP>61<SeP>82<SeP>100<SeP>74<SeP>93<SeP>63<SeP>119<SeP>41<SeP>24<SeP>67<SeP>55<SeP>68<SeP>48<SeP>81<SeP>53<SeP>180<SeP>83<SeP>53<SeP>63<SeP>25<SeP>32<SeP>25<SeP>99<SeP>56<SeP>143<SeP>82<SeP>94<SeP>80<SeP>94<SeP>47<SeP>85<SeP>54<SeP>44<SeP>56<SeP>63<SeP>61<SeP>79<SeP>153<SeP>97<SeP>41<SeP>76<SeP>69<SeP>35<SeP>58<SeP>45<SeP>69<SeP>22<SeP>24<SeP>76<SeP>24<SeP>38<SeP>76<SeP>72<SeP>156<SeP>56<SeP>96<SeP>168<SeP>87<SeP>66<SeP>27<SeP>103<SeP>32<SeP>113<SeP>63<SeP>96<SeP>66<SeP>53<SeP>73<SeP>68<SeP>59<SeP>91<SeP>62<SeP>71<SeP>62<SeP>70<SeP>78<SeP>80<SeP>131<SeP>71<SeP>103<SeP>70<SeP>103<SeP>45<SeP>49<SeP>49<SeP>108<SeP>73<SeP>86<SeP>80<SeP>171<SeP>105<SeP>160<SeP>78<SeP>102<SeP>86<SeP>73<SeP>91<SeP>49<SeP>38<SeP>69<SeP>76<SeP>65<SeP>87<SeP>50<SeP>74<SeP>63<SeP>55<SeP>94<SeP>130<SeP>35<SeP>30<SeP>49<SeP>46<SeP>78<SeP>59<SeP>90<SeP>88<SeP>73<SeP>112<SeP>56<SeP>209<SeP>99<SeP>105<SeP>38<SeP>30<SeP>41<SeP>71<SeP>88<SeP>113<SeP>84<SeP>78<SeP>83<SeP>70<SeP>52<SeP>64<SeP>80<SeP>64<SeP>48<SeP>50<SeP>122<SeP>57<SeP>124<SeP>117<SeP>71<SeP>74<SeP>93<SeP>93<SeP>125<SeP>203<SeP>75<SeP>43<SeP>50<SeP>51<SeP>211<SeP>49<SeP>62<SeP>28<SeP>31<SeP>124<SeP>34<SeP>82<SeP>44<SeP>98<SeP>80<SeP>73<SeP>53<SeP>72<SeP>51<SeP>53<SeP>56<SeP>91<SeP>93<SeP>59<SeP>60<SeP>56<SeP>41<SeP>67<SeP>83<SeP>116<SeP>78<SeP>84<SeP>99<SeP>74<SeP>85<SeP>101<SeP>65<SeP>43<SeP>45<SeP>41<SeP>5<SeP>132<SeP>51<SeP>120<SeP>149<SeP>82<SeP>49<SeP>57<SeP>59<SeP>75<SeP>36<SeP>30<SeP>44<SeP>85<SeP>152<SeP>94<SeP>71<SeP>89<SeP>82<SeP>74<SeP>55<SeP>64<SeP>111<SeP>42<SeP>57<SeP>81<SeP>202<SeP>129<SeP>71<SeP>104<SeP>56<SeP>82<SeP>46<SeP>90<SeP>53<SeP>113<SeP>86<SeP>62<SeP>29<SeP>117<SeP>99<SeP>160<SeP>113<SeP>59<SeP>77<SeP>86<SeP>90<SeP>97<SeP>59<SeP>38<SeP>28<SeP>28<SeP>39<SeP>46<SeP>112<SeP>134<SeP>78<SeP>267<SeP>66<SeP>59<SeP>138<SeP>56<SeP>82<SeP>58<SeP>66<SeP>0<SeP>0<SeP>0<SeP>0<SeP>39<SeP>126<SeP>51<SeP>15<SeP>56<SeP>25<SeP>37<SeP>86<SeP>86<SeP>86<SeP>71<SeP>53<SeP>83<SeP>52<SeP>97<SeP>14<SeP>18<SeP>47<SeP>43<SeP>94<SeP>88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>95<SeP>82<SeP>28<SeP>60<SeP>64<SeP>46<SeP>82<SeP>46<SeP>149<SeP>215<SeP>114<SeP>85<SeP>151<SeP>68<SeP>96<SeP>95<SeP>136<SeP>165<SeP>87<SeP>98<SeP>60<SeP>68<SeP>105<SeP>84<SeP>68<SeP>99<SeP>78<SeP>87<SeP>71<SeP>85<SeP>68<SeP>79<SeP>143<SeP>68<SeP>39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>122<SeP>90<SeP>151<SeP>93<SeP>34<SeP>113<SeP>71<SeP>67<SeP>118<SeP>54<SeP>85<SeP>51<SeP>80<SeP>66<SeP>59<SeP>109<SeP>186<SeP>47<SeP>100<SeP>104<SeP>115<SeP>102<SeP>51<SeP>84<SeP>65<SeP>173<SeP>63<SeP>106<SeP>69<SeP>71<SeP>97<SeP>77<SeP>73<SeP>91<SeP>81<SeP>146<SeP>118<SeP>183<SeP>51<SeP>63<SeP>57<SeP>88<SeP>42<SeP>100<SeP>91<SeP>92<SeP>74<SeP>73<SeP>114<SeP>198<SeP>134<SeP>104<SeP>77<SeP>20<SeP>43<SeP>90<SeP>91<SeP>106<SeP>76<SeP>52<SeP>75<SeP>55<SeP>121<SeP>90<SeP>50<SeP>85<SeP>68<SeP>89<SeP>40<SeP>150<SeP>90<SeP>114";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "49<SeP>256<SeP>229<SeP>13<SeP>23<SeP>16<SeP>179<SeP>74<SeP>210<SeP>208<SeP>129<SeP>174<SeP>245<SeP>179<SeP>26<SeP>45<SeP>33<SeP>113<SeP>164<SeP>20<SeP>44<SeP>24<SeP>238<SeP>307<SeP>198<SeP>155<SeP>225<SeP>396<SeP>276<SeP>599<SeP>267<SeP>19<SeP>329<SeP>293<SeP>182<SeP>220<SeP>155<SeP>37<SeP>90<SeP>139<SeP>299<SeP>206<SeP>226<SeP>282<SeP>276<SeP>142<SeP>176<SeP>276<SeP>139<SeP>24<SeP>149<SeP>11<SeP>105<SeP>369<SeP>353<SeP>272<SeP>345<SeP>224<SeP>228<SeP>163<SeP>395<SeP>303<SeP>590<SeP>252<SeP>484<SeP>208<SeP>391<SeP>685<SeP>237<SeP>580<SeP>390<SeP>281<SeP>157<SeP>786<SeP>597<SeP>274<SeP>493<SeP>366<SeP>349<SeP>381<SeP>516<SeP>569<SeP>400<SeP>294<SeP>460<SeP>413<SeP>415<SeP>779<SeP>523<SeP>411<SeP>447<SeP>673<SeP>365<SeP>452<SeP>1033<SeP>866<SeP>625<SeP>548<SeP>731<SeP>512<SeP>500<SeP>313<SeP>499<SeP>490<SeP>264<SeP>454<SeP>366<SeP>378<SeP>235<SeP>310<SeP>915<SeP>341<SeP>273<SeP>368<SeP>546<SeP>350<SeP>230<SeP>464<SeP>474<SeP>507<SeP>594<SeP>364<SeP>340<SeP>472<SeP>425<SeP>617<SeP>613<SeP>290<SeP>170<SeP>433<SeP>845<SeP>425<SeP>341<SeP>170<SeP>346<SeP>423<SeP>647<SeP>482<SeP>465<SeP>632<SeP>487<SeP>266<SeP>532<SeP>823<SeP>577<SeP>634<SeP>232<SeP>179<SeP>495<SeP>477<SeP>252<SeP>464<SeP>317<SeP>268<SeP>487<SeP>1086<SeP>147<SeP>752<SeP>389<SeP>360<SeP>182<SeP>242<SeP>285<SeP>378<SeP>553<SeP>274<SeP>225<SeP>350<SeP>446<SeP>251<SeP>348<SeP>255<SeP>684<SeP>609<SeP>289<SeP>284<SeP>252<SeP>532<SeP>559<SeP>623<SeP>635<SeP>303<SeP>235<SeP>116<SeP>127<SeP>292<SeP>293<SeP>20<SeP>308<SeP>176<SeP>278<SeP>7<SeP>403<SeP>255<SeP>516<SeP>374<SeP>190<SeP>89<SeP>396<SeP>229<SeP>309<SeP>244<SeP>308<SeP>207<SeP>363<SeP>177<SeP>185<SeP>194<SeP>437<SeP>184<SeP>88<SeP>182<SeP>306<SeP>372<SeP>596<SeP>94<SeP>251<SeP>64<SeP>164<SeP>150<SeP>790<SeP>190<SeP>370<SeP>136<SeP>122<SeP>140<SeP>223<SeP>112<SeP>262<SeP>219<SeP>87<SeP>296<SeP>279<SeP>198<SeP>110<SeP>200<SeP>243<SeP>75<SeP>77<SeP>190<SeP>196<SeP>412<SeP>305<SeP>138<SeP>711<SeP>197<SeP>1070<SeP>2489<SeP>2717<SeP>2444<SeP>2263<SeP>2519<SeP>2680<SeP>2715<SeP>2548<SeP>2587<SeP>0<SeP>0<SeP>0<SeP>0<SeP>122<SeP>164<SeP>212<SeP>260<SeP>403<SeP>143<SeP>146<SeP>101<SeP>110<SeP>89<SeP>233<SeP>41<SeP>157<SeP>183<SeP>423<SeP>27<SeP>127<SeP>397<SeP>35<SeP>423<SeP>133<SeP>86<SeP>281<SeP>76<SeP>22<SeP>269<SeP>141<SeP>167<SeP>28<SeP>38<SeP>122<SeP>141<SeP>316<SeP>130<SeP>156<SeP>175<SeP>124<SeP>173<SeP>190<SeP>342<SeP>259<SeP>431<SeP>249<SeP>489<SeP>329<SeP>351<SeP>167<SeP>204<SeP>309<SeP>227<SeP>145<SeP>136<SeP>58<SeP>30<SeP>94<SeP>173<SeP>222<SeP>169<SeP>37<SeP>85<SeP>229<SeP>170<SeP>332<SeP>82<SeP>225<SeP>186<SeP>119<SeP>47<SeP>505<SeP>109<SeP>311<SeP>66<SeP>108<SeP>358<SeP>324<SeP>388<SeP>2824<SeP>3323<SeP>853<SeP>349<SeP>231<SeP>278<SeP>682<SeP>151<SeP>384<SeP>124<SeP>10<SeP>68<SeP>158<SeP>510<SeP>78<SeP>274<SeP>199<SeP>191<SeP>161<SeP>852<SeP>371<SeP>433<SeP>177<SeP>260<SeP>168<SeP>206<SeP>245<SeP>465<SeP>202<SeP>475<SeP>64<SeP>321<SeP>334<SeP>178<SeP>384<SeP>173<SeP>160<SeP>66<SeP>226<SeP>95<SeP>323<SeP>588<SeP>107<SeP>173<SeP>203<SeP>186<SeP>48<SeP>84<SeP>317<SeP>210<SeP>138<SeP>123<SeP>74<SeP>23<SeP>353<SeP>237<SeP>193<SeP>116<SeP>293<SeP>292<SeP>94<SeP>556<SeP>297<SeP>254";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-01-18 00:00:00<SeP>2025-01-18 01:48:00<SeP>2025-01-18 03:36:00<SeP>2025-01-18 05:24:00<SeP>2025-01-18 07:12:00<SeP>2025-01-18 09:00:00<SeP>2025-01-18 10:48:00<SeP>2025-01-18 12:36:00<SeP>2025-01-18 14:24:00<SeP>2025-01-18 16:12:00<SeP>2025-01-18 18:00:00<SeP>2025-01-18 19:48:00<SeP>2025-01-18 21:36:00<SeP>2025-01-18 23:24:00<SeP>2025-01-19 01:12:00<SeP>2025-01-19 03:00:00<SeP>2025-01-19 04:48:00<SeP>2025-01-19 06:36:00<SeP>2025-01-19 08:24:00<SeP>2025-01-19 10:12:00<SeP>2025-01-19 12:00:00<SeP>2025-01-19 13:48:00<SeP>2025-01-19 15:36:00<SeP>2025-01-19 17:24:00<SeP>2025-01-19 19:12:00<SeP>2025-01-19 21:00:00<SeP>2025-01-19 22:48:00<SeP>2025-01-20 00:36:00<SeP>2025-01-20 02:24:00<SeP>2025-01-20 04:12:00<SeP>2025-01-20 06:00:00<SeP>2025-01-20 07:48:00<SeP>2025-01-20 09:36:00<SeP>2025-01-20 11:24:00<SeP>2025-01-20 13:12:00<SeP>2025-01-20 15:00:00<SeP>2025-01-20 16:48:00<SeP>2025-01-20 18:36:00<SeP>2025-01-20 20:24:00<SeP>2025-01-20 22:12:00<SeP>2025-01-21 00:00:00<SeP>2025-01-21 01:48:00<SeP>2025-01-21 03:36:00<SeP>2025-01-21 05:24:00<SeP>2025-01-21 07:12:00<SeP>2025-01-21 09:00:00<SeP>2025-01-21 10:48:00<SeP>2025-01-21 12:36:00<SeP>2025-01-21 14:24:00<SeP>2025-01-21 16:12:00<SeP>2025-01-21 18:00:00<SeP>2025-01-21 19:48:00<SeP>2025-01-21 21:36:00<SeP>2025-01-21 23:24:00<SeP>2025-01-22 01:12:00<SeP>2025-01-22 03:00:00<SeP>2025-01-22 04:48:00<SeP>2025-01-22 06:36:00<SeP>2025-01-22 08:24:00<SeP>2025-01-22 10:12:00<SeP>2025-01-22 12:00:00<SeP>2025-01-22 13:48:00<SeP>2025-01-22 15:36:00<SeP>2025-01-22 17:24:00<SeP>2025-01-22 19:12:00<SeP>2025-01-22 21:00:00<SeP>2025-01-22 22:48:00<SeP>2025-01-23 00:36:00<SeP>2025-01-23 02:24:00<SeP>2025-01-23 04:12:00<SeP>2025-01-23 06:00:00<SeP>2025-01-23 07:48:00<SeP>2025-01-23 09:36:00<SeP>2025-01-23 11:24:00<SeP>2025-01-23 13:12:00<SeP>2025-01-23 15:00:00<SeP>2025-01-23 16:48:00<SeP>2025-01-23 18:36:00<SeP>2025-01-23 20:24:00<SeP>2025-01-23 22:12:00<SeP>2025-01-24 00:00:00<SeP>2025-01-24 01:48:00<SeP>2025-01-24 03:36:00<SeP>2025-01-24 05:24:00<SeP>2025-01-24 07:12:00<SeP>2025-01-24 09:00:00<SeP>2025-01-24 10:48:00<SeP>2025-01-24 12:36:00<SeP>2025-01-24 14:24:00<SeP>2025-01-24 16:12:00<SeP>2025-01-24 18:00:00<SeP>2025-01-24 19:48:00<SeP>2025-01-24 21:36:00<SeP>2025-01-24 23:24:00<SeP>2025-01-25 01:12:00<SeP>2025-01-25 03:00:00<SeP>2025-01-25 04:48:00<SeP>2025-01-25 06:36:00<SeP>2025-01-25 08:24:00<SeP>2025-01-25 10:12:00<SeP>2025-01-25 12:00:00<SeP>2025-01-25 13:48:00<SeP>2025-01-25 15:36:00<SeP>2025-01-25 17:24:00<SeP>2025-01-25 19:12:00<SeP>2025-01-25 21:00:00<SeP>2025-01-25 22:48:00<SeP>2025-01-26 00:36:00<SeP>2025-01-26 02:24:00<SeP>2025-01-26 04:12:00<SeP>2025-01-26 06:00:00<SeP>2025-01-26 07:48:00<SeP>2025-01-26 09:36:00<SeP>2025-01-26 11:24:00<SeP>2025-01-26 13:12:00<SeP>2025-01-26 15:00:00<SeP>2025-01-26 16:48:00<SeP>2025-01-26 18:36:00<SeP>2025-01-26 20:24:00<SeP>2025-01-26 22:12:00<SeP>2025-01-27 00:00:00<SeP>2025-01-27 01:48:00<SeP>2025-01-27 03:36:00<SeP>2025-01-27 05:24:00<SeP>2025-01-27 07:12:00<SeP>2025-01-27 09:00:00<SeP>2025-01-27 10:48:00<SeP>2025-01-27 12:36:00<SeP>2025-01-27 14:24:00<SeP>2025-01-27 16:12:00<SeP>2025-01-27 18:00:00<SeP>2025-01-27 19:48:00<SeP>2025-01-27 21:36:00<SeP>2025-01-27 23:24:00<SeP>2025-01-28 01:12:00<SeP>2025-01-28 03:00:00<SeP>2025-01-28 04:48:00<SeP>2025-01-28 06:36:00<SeP>2025-01-28 08:24:00<SeP>2025-01-28 10:12:00<SeP>2025-01-28 12:00:00<SeP>2025-01-28 13:48:00<SeP>2025-01-28 15:36:00<SeP>2025-01-28 17:24:00<SeP>2025-01-28 19:12:00<SeP>2025-01-28 21:00:00<SeP>2025-01-28 22:48:00<SeP>2025-01-29 00:36:00<SeP>2025-01-29 02:24:00<SeP>2025-01-29 04:12:00<SeP>2025-01-29 06:00:00<SeP>2025-01-29 07:48:00<SeP>2025-01-29 09:36:00<SeP>2025-01-29 11:24:00<SeP>2025-01-29 13:12:00<SeP>2025-01-29 15:00:00<SeP>2025-01-29 16:48:00<SeP>2025-01-29 18:36:00<SeP>2025-01-29 20:24:00<SeP>2025-01-29 22:12:00<SeP>2025-01-30 00:00:00<SeP>2025-01-30 01:48:00<SeP>2025-01-30 03:36:00<SeP>2025-01-30 05:24:00<SeP>2025-01-30 07:12:00<SeP>2025-01-30 09:00:00<SeP>2025-01-30 10:48:00<SeP>2025-01-30 12:36:00<SeP>2025-01-30 14:24:00<SeP>2025-01-30 16:12:00<SeP>2025-01-30 18:00:00<SeP>2025-01-30 19:48:00<SeP>2025-01-30 21:36:00<SeP>2025-01-30 23:24:00<SeP>2025-01-31 01:12:00<SeP>2025-01-31 03:00:00<SeP>2025-01-31 04:48:00<SeP>2025-01-31 06:36:00<SeP>2025-01-31 08:24:00<SeP>2025-01-31 10:12:00<SeP>2025-01-31 12:00:00<SeP>2025-01-31 13:48:00<SeP>2025-01-31 15:36:00<SeP>2025-01-31 17:24:00<SeP>2025-01-31 19:12:00<SeP>2025-01-31 21:00:00<SeP>2025-01-31 22:48:00<SeP>2025-02-01 00:36:00<SeP>2025-02-01 02:24:00<SeP>2025-02-01 04:12:00<SeP>2025-02-01 06:00:00<SeP>2025-02-01 07:48:00<SeP>2025-02-01 09:36:00<SeP>2025-02-01 11:24:00<SeP>2025-02-01 13:12:00<SeP>2025-02-01 15:00:00<SeP>2025-02-01 16:48:00<SeP>2025-02-01 18:36:00<SeP>2025-02-01 20:24:00<SeP>2025-02-01 22:12:00<SeP>2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00";
  const itemLabel       = "Escaneos";
  const itemData        = "82<SeP>94<SeP>61<SeP>82<SeP>100<SeP>74<SeP>93<SeP>63<SeP>119<SeP>41<SeP>24<SeP>67<SeP>55<SeP>68<SeP>48<SeP>81<SeP>53<SeP>180<SeP>83<SeP>53<SeP>63<SeP>25<SeP>32<SeP>25<SeP>99<SeP>56<SeP>143<SeP>82<SeP>94<SeP>80<SeP>94<SeP>47<SeP>85<SeP>54<SeP>44<SeP>56<SeP>63<SeP>61<SeP>79<SeP>153<SeP>97<SeP>41<SeP>76<SeP>69<SeP>35<SeP>58<SeP>45<SeP>69<SeP>22<SeP>24<SeP>76<SeP>24<SeP>38<SeP>76<SeP>72<SeP>156<SeP>56<SeP>96<SeP>168<SeP>87<SeP>66<SeP>27<SeP>103<SeP>32<SeP>113<SeP>63<SeP>96<SeP>66<SeP>53<SeP>73<SeP>68<SeP>59<SeP>91<SeP>62<SeP>71<SeP>62<SeP>70<SeP>78<SeP>80<SeP>131<SeP>71<SeP>103<SeP>70<SeP>103<SeP>45<SeP>49<SeP>49<SeP>108<SeP>73<SeP>86<SeP>80<SeP>171<SeP>105<SeP>160<SeP>78<SeP>102<SeP>86<SeP>73<SeP>91<SeP>49<SeP>38<SeP>69<SeP>76<SeP>65<SeP>87<SeP>50<SeP>74<SeP>63<SeP>55<SeP>94<SeP>130<SeP>35<SeP>30<SeP>49<SeP>46<SeP>78<SeP>59<SeP>90<SeP>88<SeP>73<SeP>112<SeP>56<SeP>209<SeP>99<SeP>105<SeP>38<SeP>30<SeP>41<SeP>71<SeP>88<SeP>113<SeP>84<SeP>78<SeP>83<SeP>70<SeP>52<SeP>64<SeP>80<SeP>64<SeP>48<SeP>50<SeP>122<SeP>57<SeP>124<SeP>117<SeP>71<SeP>74<SeP>93<SeP>93<SeP>125<SeP>203<SeP>75<SeP>43<SeP>50<SeP>51<SeP>211<SeP>49<SeP>62<SeP>28<SeP>31<SeP>124<SeP>34<SeP>82<SeP>44<SeP>98<SeP>80<SeP>73<SeP>53<SeP>72<SeP>51<SeP>53<SeP>56<SeP>91<SeP>93<SeP>59<SeP>60<SeP>56<SeP>41<SeP>67<SeP>83<SeP>116<SeP>78<SeP>84<SeP>99<SeP>74<SeP>85<SeP>101<SeP>65<SeP>43<SeP>45<SeP>41<SeP>5<SeP>132<SeP>51<SeP>120<SeP>149<SeP>82<SeP>49<SeP>57<SeP>59<SeP>75<SeP>36<SeP>30<SeP>44<SeP>85<SeP>152<SeP>94<SeP>71<SeP>89<SeP>82<SeP>74<SeP>55<SeP>64<SeP>111<SeP>42<SeP>57<SeP>81<SeP>202<SeP>129<SeP>71<SeP>104<SeP>56<SeP>82<SeP>46<SeP>90<SeP>53<SeP>113<SeP>86<SeP>62<SeP>29<SeP>117<SeP>99<SeP>160<SeP>113<SeP>59<SeP>77<SeP>86<SeP>90<SeP>97<SeP>59<SeP>38<SeP>28<SeP>28<SeP>39<SeP>46<SeP>112<SeP>134<SeP>78<SeP>267<SeP>66<SeP>59<SeP>138<SeP>56<SeP>82<SeP>58<SeP>66<SeP>0<SeP>0<SeP>0<SeP>0<SeP>39<SeP>126<SeP>51<SeP>15<SeP>56<SeP>25<SeP>37<SeP>86<SeP>86<SeP>86<SeP>71<SeP>53<SeP>83<SeP>52<SeP>97<SeP>14<SeP>18<SeP>47<SeP>43<SeP>94<SeP>88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>95<SeP>82<SeP>28<SeP>60<SeP>64<SeP>46<SeP>82<SeP>46<SeP>149<SeP>215<SeP>114<SeP>85<SeP>151<SeP>68<SeP>96<SeP>95<SeP>136<SeP>165<SeP>87<SeP>98<SeP>60<SeP>68<SeP>105<SeP>84<SeP>68<SeP>99<SeP>78<SeP>87<SeP>71<SeP>85<SeP>68<SeP>79<SeP>143<SeP>68<SeP>39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>122<SeP>90<SeP>151<SeP>93<SeP>34<SeP>113<SeP>71<SeP>67<SeP>118<SeP>54<SeP>85<SeP>51<SeP>80<SeP>66<SeP>59<SeP>109<SeP>186<SeP>47<SeP>100<SeP>104<SeP>115<SeP>102<SeP>51<SeP>84<SeP>65<SeP>173<SeP>63<SeP>106<SeP>69<SeP>71<SeP>97<SeP>77<SeP>73<SeP>91<SeP>81<SeP>146<SeP>118<SeP>183<SeP>51<SeP>63<SeP>57<SeP>88<SeP>42<SeP>100<SeP>91<SeP>92<SeP>74<SeP>73<SeP>114<SeP>198<SeP>134<SeP>104<SeP>77<SeP>20<SeP>43<SeP>90<SeP>91<SeP>106<SeP>76<SeP>52<SeP>75<SeP>55<SeP>121<SeP>90<SeP>50<SeP>85<SeP>68<SeP>89<SeP>40<SeP>150<SeP>90<SeP>114";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-01-18 00:00:00<SeP>2025-01-18 01:48:00<SeP>2025-01-18 03:36:00<SeP>2025-01-18 05:24:00<SeP>2025-01-18 07:12:00<SeP>2025-01-18 09:00:00<SeP>2025-01-18 10:48:00<SeP>2025-01-18 12:36:00<SeP>2025-01-18 14:24:00<SeP>2025-01-18 16:12:00<SeP>2025-01-18 18:00:00<SeP>2025-01-18 19:48:00<SeP>2025-01-18 21:36:00<SeP>2025-01-18 23:24:00<SeP>2025-01-19 01:12:00<SeP>2025-01-19 03:00:00<SeP>2025-01-19 04:48:00<SeP>2025-01-19 06:36:00<SeP>2025-01-19 08:24:00<SeP>2025-01-19 10:12:00<SeP>2025-01-19 12:00:00<SeP>2025-01-19 13:48:00<SeP>2025-01-19 15:36:00<SeP>2025-01-19 17:24:00<SeP>2025-01-19 19:12:00<SeP>2025-01-19 21:00:00<SeP>2025-01-19 22:48:00<SeP>2025-01-20 00:36:00<SeP>2025-01-20 02:24:00<SeP>2025-01-20 04:12:00<SeP>2025-01-20 06:00:00<SeP>2025-01-20 07:48:00<SeP>2025-01-20 09:36:00<SeP>2025-01-20 11:24:00<SeP>2025-01-20 13:12:00<SeP>2025-01-20 15:00:00<SeP>2025-01-20 16:48:00<SeP>2025-01-20 18:36:00<SeP>2025-01-20 20:24:00<SeP>2025-01-20 22:12:00<SeP>2025-01-21 00:00:00<SeP>2025-01-21 01:48:00<SeP>2025-01-21 03:36:00<SeP>2025-01-21 05:24:00<SeP>2025-01-21 07:12:00<SeP>2025-01-21 09:00:00<SeP>2025-01-21 10:48:00<SeP>2025-01-21 12:36:00<SeP>2025-01-21 14:24:00<SeP>2025-01-21 16:12:00<SeP>2025-01-21 18:00:00<SeP>2025-01-21 19:48:00<SeP>2025-01-21 21:36:00<SeP>2025-01-21 23:24:00<SeP>2025-01-22 01:12:00<SeP>2025-01-22 03:00:00<SeP>2025-01-22 04:48:00<SeP>2025-01-22 06:36:00<SeP>2025-01-22 08:24:00<SeP>2025-01-22 10:12:00<SeP>2025-01-22 12:00:00<SeP>2025-01-22 13:48:00<SeP>2025-01-22 15:36:00<SeP>2025-01-22 17:24:00<SeP>2025-01-22 19:12:00<SeP>2025-01-22 21:00:00<SeP>2025-01-22 22:48:00<SeP>2025-01-23 00:36:00<SeP>2025-01-23 02:24:00<SeP>2025-01-23 04:12:00<SeP>2025-01-23 06:00:00<SeP>2025-01-23 07:48:00<SeP>2025-01-23 09:36:00<SeP>2025-01-23 11:24:00<SeP>2025-01-23 13:12:00<SeP>2025-01-23 15:00:00<SeP>2025-01-23 16:48:00<SeP>2025-01-23 18:36:00<SeP>2025-01-23 20:24:00<SeP>2025-01-23 22:12:00<SeP>2025-01-24 00:00:00<SeP>2025-01-24 01:48:00<SeP>2025-01-24 03:36:00<SeP>2025-01-24 05:24:00<SeP>2025-01-24 07:12:00<SeP>2025-01-24 09:00:00<SeP>2025-01-24 10:48:00<SeP>2025-01-24 12:36:00<SeP>2025-01-24 14:24:00<SeP>2025-01-24 16:12:00<SeP>2025-01-24 18:00:00<SeP>2025-01-24 19:48:00<SeP>2025-01-24 21:36:00<SeP>2025-01-24 23:24:00<SeP>2025-01-25 01:12:00<SeP>2025-01-25 03:00:00<SeP>2025-01-25 04:48:00<SeP>2025-01-25 06:36:00<SeP>2025-01-25 08:24:00<SeP>2025-01-25 10:12:00<SeP>2025-01-25 12:00:00<SeP>2025-01-25 13:48:00<SeP>2025-01-25 15:36:00<SeP>2025-01-25 17:24:00<SeP>2025-01-25 19:12:00<SeP>2025-01-25 21:00:00<SeP>2025-01-25 22:48:00<SeP>2025-01-26 00:36:00<SeP>2025-01-26 02:24:00<SeP>2025-01-26 04:12:00<SeP>2025-01-26 06:00:00<SeP>2025-01-26 07:48:00<SeP>2025-01-26 09:36:00<SeP>2025-01-26 11:24:00<SeP>2025-01-26 13:12:00<SeP>2025-01-26 15:00:00<SeP>2025-01-26 16:48:00<SeP>2025-01-26 18:36:00<SeP>2025-01-26 20:24:00<SeP>2025-01-26 22:12:00<SeP>2025-01-27 00:00:00<SeP>2025-01-27 01:48:00<SeP>2025-01-27 03:36:00<SeP>2025-01-27 05:24:00<SeP>2025-01-27 07:12:00<SeP>2025-01-27 09:00:00<SeP>2025-01-27 10:48:00<SeP>2025-01-27 12:36:00<SeP>2025-01-27 14:24:00<SeP>2025-01-27 16:12:00<SeP>2025-01-27 18:00:00<SeP>2025-01-27 19:48:00<SeP>2025-01-27 21:36:00<SeP>2025-01-27 23:24:00<SeP>2025-01-28 01:12:00<SeP>2025-01-28 03:00:00<SeP>2025-01-28 04:48:00<SeP>2025-01-28 06:36:00<SeP>2025-01-28 08:24:00<SeP>2025-01-28 10:12:00<SeP>2025-01-28 12:00:00<SeP>2025-01-28 13:48:00<SeP>2025-01-28 15:36:00<SeP>2025-01-28 17:24:00<SeP>2025-01-28 19:12:00<SeP>2025-01-28 21:00:00<SeP>2025-01-28 22:48:00<SeP>2025-01-29 00:36:00<SeP>2025-01-29 02:24:00<SeP>2025-01-29 04:12:00<SeP>2025-01-29 06:00:00<SeP>2025-01-29 07:48:00<SeP>2025-01-29 09:36:00<SeP>2025-01-29 11:24:00<SeP>2025-01-29 13:12:00<SeP>2025-01-29 15:00:00<SeP>2025-01-29 16:48:00<SeP>2025-01-29 18:36:00<SeP>2025-01-29 20:24:00<SeP>2025-01-29 22:12:00<SeP>2025-01-30 00:00:00<SeP>2025-01-30 01:48:00<SeP>2025-01-30 03:36:00<SeP>2025-01-30 05:24:00<SeP>2025-01-30 07:12:00<SeP>2025-01-30 09:00:00<SeP>2025-01-30 10:48:00<SeP>2025-01-30 12:36:00<SeP>2025-01-30 14:24:00<SeP>2025-01-30 16:12:00<SeP>2025-01-30 18:00:00<SeP>2025-01-30 19:48:00<SeP>2025-01-30 21:36:00<SeP>2025-01-30 23:24:00<SeP>2025-01-31 01:12:00<SeP>2025-01-31 03:00:00<SeP>2025-01-31 04:48:00<SeP>2025-01-31 06:36:00<SeP>2025-01-31 08:24:00<SeP>2025-01-31 10:12:00<SeP>2025-01-31 12:00:00<SeP>2025-01-31 13:48:00<SeP>2025-01-31 15:36:00<SeP>2025-01-31 17:24:00<SeP>2025-01-31 19:12:00<SeP>2025-01-31 21:00:00<SeP>2025-01-31 22:48:00<SeP>2025-02-01 00:36:00<SeP>2025-02-01 02:24:00<SeP>2025-02-01 04:12:00<SeP>2025-02-01 06:00:00<SeP>2025-02-01 07:48:00<SeP>2025-02-01 09:36:00<SeP>2025-02-01 11:24:00<SeP>2025-02-01 13:12:00<SeP>2025-02-01 15:00:00<SeP>2025-02-01 16:48:00<SeP>2025-02-01 18:36:00<SeP>2025-02-01 20:24:00<SeP>2025-02-01 22:12:00<SeP>2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00";
  const itemLabel       = "Ataques";
  const itemData        = "49<SeP>256<SeP>229<SeP>13<SeP>23<SeP>16<SeP>179<SeP>74<SeP>210<SeP>208<SeP>129<SeP>174<SeP>245<SeP>179<SeP>26<SeP>45<SeP>33<SeP>113<SeP>164<SeP>20<SeP>44<SeP>24<SeP>238<SeP>307<SeP>198<SeP>155<SeP>225<SeP>396<SeP>276<SeP>599<SeP>267<SeP>19<SeP>329<SeP>293<SeP>182<SeP>220<SeP>155<SeP>37<SeP>90<SeP>139<SeP>299<SeP>206<SeP>226<SeP>282<SeP>276<SeP>142<SeP>176<SeP>276<SeP>139<SeP>24<SeP>149<SeP>11<SeP>105<SeP>369<SeP>353<SeP>272<SeP>345<SeP>224<SeP>228<SeP>163<SeP>395<SeP>303<SeP>590<SeP>252<SeP>484<SeP>208<SeP>391<SeP>685<SeP>237<SeP>580<SeP>390<SeP>281<SeP>157<SeP>786<SeP>597<SeP>274<SeP>493<SeP>366<SeP>349<SeP>381<SeP>516<SeP>569<SeP>400<SeP>294<SeP>460<SeP>413<SeP>415<SeP>779<SeP>523<SeP>411<SeP>447<SeP>673<SeP>365<SeP>452<SeP>1033<SeP>866<SeP>625<SeP>548<SeP>731<SeP>512<SeP>500<SeP>313<SeP>499<SeP>490<SeP>264<SeP>454<SeP>366<SeP>378<SeP>235<SeP>310<SeP>915<SeP>341<SeP>273<SeP>368<SeP>546<SeP>350<SeP>230<SeP>464<SeP>474<SeP>507<SeP>594<SeP>364<SeP>340<SeP>472<SeP>425<SeP>617<SeP>613<SeP>290<SeP>170<SeP>433<SeP>845<SeP>425<SeP>341<SeP>170<SeP>346<SeP>423<SeP>647<SeP>482<SeP>465<SeP>632<SeP>487<SeP>266<SeP>532<SeP>823<SeP>577<SeP>634<SeP>232<SeP>179<SeP>495<SeP>477<SeP>252<SeP>464<SeP>317<SeP>268<SeP>487<SeP>1086<SeP>147<SeP>752<SeP>389<SeP>360<SeP>182<SeP>242<SeP>285<SeP>378<SeP>553<SeP>274<SeP>225<SeP>350<SeP>446<SeP>251<SeP>348<SeP>255<SeP>684<SeP>609<SeP>289<SeP>284<SeP>252<SeP>532<SeP>559<SeP>623<SeP>635<SeP>303<SeP>235<SeP>116<SeP>127<SeP>292<SeP>293<SeP>20<SeP>308<SeP>176<SeP>278<SeP>7<SeP>403<SeP>255<SeP>516<SeP>374<SeP>190<SeP>89<SeP>396<SeP>229<SeP>309<SeP>244<SeP>308<SeP>207<SeP>363<SeP>177<SeP>185<SeP>194<SeP>437<SeP>184<SeP>88<SeP>182<SeP>306<SeP>372<SeP>596<SeP>94<SeP>251<SeP>64<SeP>164<SeP>150<SeP>790<SeP>190<SeP>370<SeP>136<SeP>122<SeP>140<SeP>223<SeP>112<SeP>262<SeP>219<SeP>87<SeP>296<SeP>279<SeP>198<SeP>110<SeP>200<SeP>243<SeP>75<SeP>77<SeP>190<SeP>196<SeP>412<SeP>305<SeP>138<SeP>711<SeP>197<SeP>1070<SeP>2489<SeP>2717<SeP>2444<SeP>2263<SeP>2519<SeP>2680<SeP>2715<SeP>2548<SeP>2587<SeP>0<SeP>0<SeP>0<SeP>0<SeP>122<SeP>164<SeP>212<SeP>260<SeP>403<SeP>143<SeP>146<SeP>101<SeP>110<SeP>89<SeP>233<SeP>41<SeP>157<SeP>183<SeP>423<SeP>27<SeP>127<SeP>397<SeP>35<SeP>423<SeP>133<SeP>86<SeP>281<SeP>76<SeP>22<SeP>269<SeP>141<SeP>167<SeP>28<SeP>38<SeP>122<SeP>141<SeP>316<SeP>130<SeP>156<SeP>175<SeP>124<SeP>173<SeP>190<SeP>342<SeP>259<SeP>431<SeP>249<SeP>489<SeP>329<SeP>351<SeP>167<SeP>204<SeP>309<SeP>227<SeP>145<SeP>136<SeP>58<SeP>30<SeP>94<SeP>173<SeP>222<SeP>169<SeP>37<SeP>85<SeP>229<SeP>170<SeP>332<SeP>82<SeP>225<SeP>186<SeP>119<SeP>47<SeP>505<SeP>109<SeP>311<SeP>66<SeP>108<SeP>358<SeP>324<SeP>388<SeP>2824<SeP>3323<SeP>853<SeP>349<SeP>231<SeP>278<SeP>682<SeP>151<SeP>384<SeP>124<SeP>10<SeP>68<SeP>158<SeP>510<SeP>78<SeP>274<SeP>199<SeP>191<SeP>161<SeP>852<SeP>371<SeP>433<SeP>177<SeP>260<SeP>168<SeP>206<SeP>245<SeP>465<SeP>202<SeP>475<SeP>64<SeP>321<SeP>334<SeP>178<SeP>384<SeP>173<SeP>160<SeP>66<SeP>226<SeP>95<SeP>323<SeP>588<SeP>107<SeP>173<SeP>203<SeP>186<SeP>48<SeP>84<SeP>317<SeP>210<SeP>138<SeP>123<SeP>74<SeP>23<SeP>353<SeP>237<SeP>193<SeP>116<SeP>293<SeP>292<SeP>94<SeP>556<SeP>297<SeP>254";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>Taiwan<SeP>Pakistan<SeP>United States<SeP>Germany<SeP>India<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Romania";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "28198<SeP>25350<SeP>21846<SeP>12810<SeP>9417<SeP>7631<SeP>6336<SeP>5513<SeP>4602<SeP>4300";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>India<SeP>United States<SeP>Hong Kong<SeP>Taiwan<SeP>Russia<SeP>South Korea<SeP>Brazil<SeP>Germany<SeP>Sweden";
  const itemLabel   = "Scans";
  const itemData    = "17273<SeP>2449<SeP>2346<SeP>1594<SeP>1333<SeP>1138<SeP>564<SeP>455<SeP>377<SeP>318";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Taiwan<SeP>Pakistan<SeP>China<SeP>United States<SeP>Germany<SeP>Indonesia<SeP>India<SeP>Russia<SeP>France<SeP>Romania";
  const itemLabel   = "Attacks";
  const itemData    = "24017<SeP>21542<SeP>10925<SeP>10464<SeP>9040<SeP>6183<SeP>5182<SeP>4375<SeP>4109<SeP>4070";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "3462<SeP>38264<SeP>4134<SeP>14061<SeP>44486<SeP>16276<SeP>136052<SeP>4837<SeP>47890<SeP>56971";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "22073<SeP>21324<SeP>11826<SeP>9382<SeP>6306<SeP>4259<SeP>4120<SeP>4055<SeP>2653<SeP>2543";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>3462<SeP>207566<SeP>4811<SeP>4766<SeP>14061<SeP>4808<SeP>137718";
  const itemLabel   = "Scans";
  const itemData    = "9261<SeP>3369<SeP>2152<SeP>1029<SeP>953<SeP>807<SeP>467<SeP>428<SeP>394<SeP>366";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "38264<SeP>3462<SeP>14061<SeP>44486<SeP>136052<SeP>16276<SeP>4134<SeP>56971<SeP>47890<SeP>204428";
  const itemLabel   = "Atacks";
  const itemData    = "21323<SeP>21044<SeP>8954<SeP>6305<SeP>4109<SeP>4104<SeP>2565<SeP>2527<SeP>2414<SeP>2175";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>Taiwan<SeP>Pakistan<SeP>United States<SeP>Germany<SeP>India<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Romania";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "28198<SeP>25350<SeP>21846<SeP>12810<SeP>9417<SeP>7631<SeP>6336<SeP>5513<SeP>4602<SeP>4300";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>India<SeP>United States<SeP>Hong Kong<SeP>Taiwan<SeP>Russia<SeP>South Korea<SeP>Brazil<SeP>Germany<SeP>Sweden";
  const itemLabel   = "Escaneos";
  const itemData    = "17273<SeP>2449<SeP>2346<SeP>1594<SeP>1333<SeP>1138<SeP>564<SeP>455<SeP>377<SeP>318";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Taiwan<SeP>Pakistan<SeP>China<SeP>United States<SeP>Germany<SeP>Indonesia<SeP>India<SeP>Russia<SeP>France<SeP>Romania";
  const itemLabel   = "Ataques";
  const itemData    = "24017<SeP>21542<SeP>10925<SeP>10464<SeP>9040<SeP>6183<SeP>5182<SeP>4375<SeP>4109<SeP>4070";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "3462<SeP>38264<SeP>4134<SeP>14061<SeP>44486<SeP>16276<SeP>136052<SeP>4837<SeP>47890<SeP>56971";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "22073<SeP>21324<SeP>11826<SeP>9382<SeP>6306<SeP>4259<SeP>4120<SeP>4055<SeP>2653<SeP>2543";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>3462<SeP>207566<SeP>4811<SeP>4766<SeP>14061<SeP>4808<SeP>137718";
  const itemLabel   = "Escaneos";
  const itemData    = "9261<SeP>3369<SeP>2152<SeP>1029<SeP>953<SeP>807<SeP>467<SeP>428<SeP>394<SeP>366";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "38264<SeP>3462<SeP>14061<SeP>44486<SeP>136052<SeP>16276<SeP>4134<SeP>56971<SeP>47890<SeP>204428";
  const itemLabel   = "Ataques";
  const itemData    = "21323<SeP>21044<SeP>8954<SeP>6305<SeP>4109<SeP>4104<SeP>2565<SeP>2527<SeP>2414<SeP>2175";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor)
{
  const labelsDataS = labelsData.split(ARRAY_SEP);
  const item1DataS  = item1Data.split(ARRAY_SEP);
  const item2DataS  = item2Data.split(ARRAY_SEP);
  const item1DataN  = item1DataS.map(Number);
  const item2DataN  = item2DataS.map(Number);
  new   Chart(document.getElementById(chartElement), {
    type: 'line',
    data: {
      labels: labelsDataS,
      datasets: [{ 
          data: item1DataN,
          label: item1Label,
          fill: true,
          borderWidth: 1,
          pointRadius: 0,
          borderColor: item1BorderColor,
          backgroundColor: item1FillColor
        }, {
          data: item2DataN,
          label: item2Label,
          fill: true,
          borderWidth: 1,
          pointRadius: 0,
          borderColor: item2BorderColor,
          backgroundColor: item2FillColor
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          // Stack the area charts
          stacked: true,
          // Axis title
          scaleLabel: {
            display: true,
            labelString: yaxisTitle
          }
        }
      },
      // Don't smooth the lines
      elements: {
        line: {
          tension: 0
        }
      },
      title: {
        display: true,
        text: chartTitle
      }
    }
  });
}

function areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor)
{
  const labelsDataS = labelsData.split(ARRAY_SEP);
  const itemDataS  = itemData.split(ARRAY_SEP);
  const itemDataN  = itemDataS.map(Number);
  new   Chart(document.getElementById(chartElement), {
    type: 'line',
    data: {
      labels: labelsDataS,
      datasets: [{ 
          data: itemDataN,
          label: itemLabel,
          fill: true,
          borderWidth: 1,
          pointRadius: 0,
          borderColor: itemBorderColor,
          backgroundColor: itemFillColor
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          // Stack the area charts
          stacked: true,
          // Axis title
          scaleLabel: {
            display: true,
            labelString: yaxisTitle
          }
        }
      },
      // Don't smooth the lines
      elements: {
        line: {
          tension: 0
        }
      },
      title: {
        display: true,
        text: chartTitle
      }
    }
  });
}

function pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor)
{
  const labelsDataS = labelsData.split(ARRAY_SEP);
  const itemDataS  = itemData.split(ARRAY_SEP);
  const itemDataN  = itemDataS.map(Number);
  const itemColorS = itemColor.split(ARRAY_SEP);
  new   Chart(document.getElementById(chartElement), {
    type: 'doughnut',
    data: {
      labels: labelsDataS,
      datasets: [{
        label: itemLabel,
        backgroundColor: itemColorS,
        data: itemDataN
      }]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: chartTitle
      },
      plugins: {
        legend: {
          labels: {
             boxWidth: 15
          }
        }
      }
    }
  });
}
