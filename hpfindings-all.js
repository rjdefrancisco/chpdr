/////////////////////////////
//                         //
// Global variable section //
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
  document.getElementById("last-updated").innerHTML = "2025-2-27";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "34.9";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.9";
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
  const metricData    = "2822558";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "546784";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2275774";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "138903";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1429503";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "846271";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53767";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "247603";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "598668";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43084";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2822558";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "546784";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2275774";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "138903";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1429503";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "846271";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53767";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "247603";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "598668";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43084";
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
  const incomingData = "2822558<SeP>546784<SeP>2275774<SeP>138903";
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
  const incomingData = "2275774<SeP>1429503<SeP>846271<SeP>53767";
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
  const incomingData = "846271<SeP>247603<SeP>598668<SeP>43084";
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
  const incomingData = "2558107<SeP>255303<SeP>2302804";
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
  const incomingData = "388194<SeP>148<SeP>388046<SeP>226";
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
  const incomingData = "2822558<SeP>546784<SeP>2275774<SeP>138903";
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
  const incomingData = "2275774<SeP>1429503<SeP>846271<SeP>53767";
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
  const incomingData = "846271<SeP>247603<SeP>598668<SeP>43084";
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
  const incomingData = "2558107<SeP>255303<SeP>2302804";
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
  const incomingData = "388194<SeP>148<SeP>388046<SeP>226";
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
  const column1Data  = "IP01 (<span class=blur>103.187.91.2</span>)<SeP>IP02 (<span class=blur>121.12.76.28</span>)<SeP>IP03 (<span class=blur>191.80.66.169</span>)<SeP>IP04 (<span class=blur>159.223.162.113</span>)<SeP>IP05 (<span class=blur>110.39.172.238</span>)<SeP>IP06 (<span class=blur>61.50.119.110</span>)<SeP>IP07 (<span class=blur>156.249.197.254</span>)<SeP>IP08 (<span class=blur>180.167.44.62</span>)<SeP>IP09 (<span class=blur>183.208.40.86</span>)<SeP>IP10 (<span class=blur>128.199.219.130</span>)";
  const column2Data  = "AS149722<SeP>AS4134<SeP>AS22927<SeP>AS14061<SeP>AS38264<SeP>AS4808<SeP>AS984<SeP>AS4812<SeP>AS56046<SeP>AS14061";
  const column3Data  = "<span class=\u0022fi fi-id\u0022></span>\u00a0Indonesia<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ar\u0022></span>\u00a0Argentina<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-th\u0022></span>\u00a0Thailand<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore";
  const column4Data  = "29325<SeP>28597<SeP>25878<SeP>21800<SeP>21294<SeP>20850<SeP>18946<SeP>18737<SeP>17906<SeP>15967";
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
  const column1Data  = "IP11 (<span class=blur>59.47.5.35</span>)<SeP>IP12 (<span class=blur>2.183.82.226</span>)<SeP>IP13 (<span class=blur>218.92.0.34</span>)<SeP>IP14 (<span class=blur>218.92.0.27</span>)<SeP>IP15 (<span class=blur>2.183.194.0</span>)<SeP>IP16 (<span class=blur>218.92.0.31</span>)<SeP>IP17 (<span class=blur>61.177.172.140</span>)<SeP>IP18 (<span class=blur>61.177.172.179</span>)<SeP>IP19 (<span class=blur>218.92.0.118</span>)<SeP>IP20 (<span class=blur>218.92.0.56</span>)";
  const column2Data  = "AS137688<SeP>AS58224<SeP>AS4134<SeP>AS4134<SeP>AS58224<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data  = "<span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ir\u0022></span>\u00a0Iran<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ir\u0022></span>\u00a0Iran<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "7611<SeP>5636<SeP>5035<SeP>4910<SeP>4849<SeP>4802<SeP>4757<SeP>4672<SeP>4651<SeP>4569";
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
  const column1Data  = "IP01 (<span class=blur>103.187.91.2</span>)<SeP>IP02 (<span class=blur>121.12.76.28</span>)<SeP>IP03 (<span class=blur>191.80.66.169</span>)<SeP>IP04 (<span class=blur>159.223.162.113</span>)<SeP>IP05 (<span class=blur>110.39.172.238</span>)<SeP>IP06 (<span class=blur>61.50.119.110</span>)<SeP>IP07 (<span class=blur>156.249.197.254</span>)<SeP>IP08 (<span class=blur>180.167.44.62</span>)<SeP>IP09 (<span class=blur>183.208.40.86</span>)<SeP>IP10 (<span class=blur>128.199.219.130</span>)";
  const column2Data  = "AS149722<SeP>AS4134<SeP>AS22927<SeP>AS14061<SeP>AS38264<SeP>AS4808<SeP>AS984<SeP>AS4812<SeP>AS56046<SeP>AS14061";
  const column3Data  = "<span class=\u0022fi fi-id\u0022></span>\u00a0Indonesia<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ar\u0022></span>\u00a0Argentina<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-th\u0022></span>\u00a0Thailand<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore";
  const column4Data  = "29324<SeP>28585<SeP>25877<SeP>21799<SeP>21293<SeP>20849<SeP>18945<SeP>18729<SeP>17897<SeP>15966";
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
  const column1Data   = "IP01 (<span class=blur>103.187.91.2</span>)<SeP>IP02 (<span class=blur>121.12.76.28</span>)<SeP>IP03 (<span class=blur>191.80.66.169</span>)<SeP>IP04 (<span class=blur>159.223.162.113</span>)<SeP>IP05 (<span class=blur>110.39.172.238</span>)<SeP>IP06 (<span class=blur>61.50.119.110</span>)<SeP>IP07 (<span class=blur>156.249.197.254</span>)<SeP>IP08 (<span class=blur>180.167.44.62</span>)<SeP>IP09 (<span class=blur>183.208.40.86</span>)<SeP>IP10 (<span class=blur>128.199.219.130</span>)";
  const column2Data   = "AS149722<SeP>AS4134<SeP>AS22927<SeP>AS14061<SeP>AS38264<SeP>AS4808<SeP>AS984<SeP>AS4812<SeP>AS56046<SeP>AS14061";
  const column3Data   = "<span class=\u0022fi fi-id\u0022></span>\u00a0Indonesia<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ar\u0022></span>\u00a0Argentina<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-th\u0022></span>\u00a0Thailand<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "29325<SeP>28597<SeP>25878<SeP>21800<SeP>21294<SeP>20850<SeP>18946<SeP>18737<SeP>17906<SeP>15967";
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
  const column1Data   = "IP11 (<span class=blur>59.47.5.35</span>)<SeP>IP12 (<span class=blur>2.183.82.226</span>)<SeP>IP13 (<span class=blur>218.92.0.34</span>)<SeP>IP14 (<span class=blur>218.92.0.27</span>)<SeP>IP15 (<span class=blur>2.183.194.0</span>)<SeP>IP16 (<span class=blur>218.92.0.31</span>)<SeP>IP17 (<span class=blur>61.177.172.140</span>)<SeP>IP18 (<span class=blur>61.177.172.179</span>)<SeP>IP19 (<span class=blur>218.92.0.118</span>)<SeP>IP20 (<span class=blur>218.92.0.56</span>)";
  const column2Data   = "AS137688<SeP>AS58224<SeP>AS4134<SeP>AS4134<SeP>AS58224<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data   = "<span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ir\u0022></span>\u00a0Iran<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ir\u0022></span>\u00a0Iran<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "7611<SeP>5636<SeP>5035<SeP>4910<SeP>4849<SeP>4802<SeP>4757<SeP>4672<SeP>4651<SeP>4569";
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
  const column1Data   = "IP01 (<span class=blur>103.187.91.2</span>)<SeP>IP02 (<span class=blur>121.12.76.28</span>)<SeP>IP03 (<span class=blur>191.80.66.169</span>)<SeP>IP04 (<span class=blur>159.223.162.113</span>)<SeP>IP05 (<span class=blur>110.39.172.238</span>)<SeP>IP06 (<span class=blur>61.50.119.110</span>)<SeP>IP07 (<span class=blur>156.249.197.254</span>)<SeP>IP08 (<span class=blur>180.167.44.62</span>)<SeP>IP09 (<span class=blur>183.208.40.86</span>)<SeP>IP10 (<span class=blur>128.199.219.130</span>)";
  const column2Data   = "AS149722<SeP>AS4134<SeP>AS22927<SeP>AS14061<SeP>AS38264<SeP>AS4808<SeP>AS984<SeP>AS4812<SeP>AS56046<SeP>AS14061";
  const column3Data   = "<span class=\u0022fi fi-id\u0022></span>\u00a0Indonesia<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ar\u0022></span>\u00a0Argentina<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-th\u0022></span>\u00a0Thailand<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "29324<SeP>28585<SeP>25877<SeP>21799<SeP>21293<SeP>20849<SeP>18945<SeP>18729<SeP>17897<SeP>15966";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>admin 3245gs5662d34<SeP>root admin<SeP>root root<SeP>admin admin<SeP>root qwerty<SeP>root broadguam1<SeP>oracle 3245gs5662d34<SeP>root 123456";
  const column3Data   = "219230<SeP>200777<SeP>12453<SeP>12332<SeP>9722<SeP>9425<SeP>6443<SeP>5593<SeP>4625<SeP>3484";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4";
  const column2Data  = "210528<SeP>43068<SeP>485<SeP>468<SeP>449<SeP>430<SeP>376<SeP>281<SeP>245<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>upload";
  const column4Data  = "malicious<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>harmless<SeP>harmless<SeP>NA";
  const listLocale   = "en-US";

  column3Data = column3Data.replace(/redir/g, "redirection");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsEnglish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Malware Distribution Site";
  const column2Label = "Count";
  const column1Data  = "http://170.75.166.213<SeP>http://golden-orda.biz<SeP>http://93.123.85.79<SeP>http://104.248.164.183<SeP>https://evrotics.ru<SeP>https://wc24.biz<SeP>http://37.187.56.77<SeP>ftp://anonymous<SeP>https://terra-life.company<SeP>tftp://93.123.85.79";
  const column2Data  = "2640<SeP>1376<SeP>663<SeP>602<SeP>282<SeP>249<SeP>210<SeP>183<SeP>164<SeP>122";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "2392205<SeP>430353";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>admin 3245gs5662d34<SeP>root admin<SeP>root root<SeP>admin admin<SeP>root qwerty<SeP>root broadguam1<SeP>oracle 3245gs5662d34<SeP>root 123456";
  const column3Data   = "219230<SeP>200777<SeP>12453<SeP>12332<SeP>9722<SeP>9425<SeP>6443<SeP>5593<SeP>4625<SeP>3484";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4";
  const column2Data  = "210528<SeP>43068<SeP>485<SeP>468<SeP>449<SeP>430<SeP>376<SeP>281<SeP>245<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>upload";
  let   column4Data  = "malicious<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>harmless<SeP>harmless<SeP>NA";
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
  const column1Data  = "http://170.75.166.213<SeP>http://golden-orda.biz<SeP>http://93.123.85.79<SeP>http://104.248.164.183<SeP>https://evrotics.ru<SeP>https://wc24.biz<SeP>http://37.187.56.77<SeP>ftp://anonymous<SeP>https://terra-life.company<SeP>tftp://93.123.85.79";
  const column2Data  = "2640<SeP>1376<SeP>663<SeP>602<SeP>282<SeP>249<SeP>210<SeP>183<SeP>164<SeP>122";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "2392205<SeP>430353";
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
  let mapa = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-attacks.geojson" + "?v=" + String(Date.now()); // Map of origin of attacks
  let maps = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-scans.geojson" + "?v=" + String(Date.now());   // Map of origin of scans
  let mapt = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-traffic.geojson" + "?v=" + String(Date.now()); // Map of origin of traffic
  let vat = urlParams.get("vat");                                  // Visibility of all-traffic layer
  let vas = urlParams.get("vas");                                  // Visibility of all-scans layer
  let vaa = urlParams.get("vaa");                                  // Visibility of all-attacks layer


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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-27";

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
      data: mapt
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "traffic between 2023-07-26 and 2025-02-25"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          363347,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: maps
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "scans between 2023-07-26 and 2025-02-25"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225054,32,
          363347,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: mapa
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "attacks between 2023-07-26 and 2025-02-25"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138293,21,
          363347,50
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
  let mapa = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-attacks.geojson" + "?v=" + String(Date.now()); // Map of origin of attacks
  let maps = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-scans.geojson" + "?v=" + String(Date.now());   // Map of origin of scans
  let mapt = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-traffic.geojson" + "?v=" + String(Date.now()); // Map of origin of traffic
  let vat = urlParams.get("vat");                                  // Visibility of all-traffic layer
  let vas = urlParams.get("vas");                                  // Visibility of all-scans layer
  let vaa = urlParams.get("vaa");                                  // Visibility of all-attacks layer

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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-27";

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
      data: mapt
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "tráfico entre 2023-07-26 y 2025-02-25"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          363347,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: maps
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "escaneos entre 2023-07-26 y 2025-02-25"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225054,32,
          363347,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: mapa
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "ataques entre 2023-07-26 y 2025-02-25"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138293,21,
          363347,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:55:21<SeP>2023-07-28 21:50:42<SeP>2023-07-30 08:46:03<SeP>2023-07-31 19:41:24<SeP>2023-08-02 06:36:45<SeP>2023-08-03 17:32:06<SeP>2023-08-05 04:27:27<SeP>2023-08-06 15:22:48<SeP>2023-08-08 02:18:09<SeP>2023-08-09 13:13:30<SeP>2023-08-11 00:08:51<SeP>2023-08-12 11:04:12<SeP>2023-08-13 21:59:33<SeP>2023-08-15 08:54:54<SeP>2023-08-16 19:50:15<SeP>2023-08-18 06:45:36<SeP>2023-08-19 17:40:57<SeP>2023-08-21 04:36:18<SeP>2023-08-22 15:31:39<SeP>2023-08-24 02:27:00<SeP>2023-08-25 13:22:21<SeP>2023-08-27 00:17:42<SeP>2023-08-28 11:13:03<SeP>2023-08-29 22:08:24<SeP>2023-08-31 09:03:45<SeP>2023-09-01 19:59:06<SeP>2023-09-03 06:54:27<SeP>2023-09-04 17:49:48<SeP>2023-09-06 04:45:09<SeP>2023-09-07 15:40:30<SeP>2023-09-09 02:35:51<SeP>2023-09-10 13:31:12<SeP>2023-09-12 00:26:33<SeP>2023-09-13 11:21:54<SeP>2023-09-14 22:17:15<SeP>2023-09-16 09:12:36<SeP>2023-09-17 20:07:57<SeP>2023-09-19 07:03:18<SeP>2023-09-20 17:58:39<SeP>2023-09-22 04:54:00<SeP>2023-09-23 15:49:21<SeP>2023-09-25 02:44:42<SeP>2023-09-26 13:40:03<SeP>2023-09-28 00:35:24<SeP>2023-09-29 11:30:45<SeP>2023-09-30 22:26:06<SeP>2023-10-02 09:21:27<SeP>2023-10-03 20:16:48<SeP>2023-10-05 07:12:09<SeP>2023-10-06 18:07:30<SeP>2023-10-08 05:02:51<SeP>2023-10-09 15:58:12<SeP>2023-10-11 02:53:33<SeP>2023-10-12 13:48:54<SeP>2023-10-14 00:44:15<SeP>2023-10-15 11:39:36<SeP>2023-10-16 22:34:57<SeP>2023-10-18 09:30:18<SeP>2023-10-19 20:25:39<SeP>2023-10-21 07:21:00<SeP>2023-10-22 18:16:21<SeP>2023-10-24 05:11:42<SeP>2023-10-25 16:07:03<SeP>2023-10-27 03:02:24<SeP>2023-10-28 13:57:45<SeP>2023-10-30 00:53:06<SeP>2023-10-31 11:48:27<SeP>2023-11-01 22:43:48<SeP>2023-11-03 09:39:09<SeP>2023-11-04 20:34:30<SeP>2023-11-06 06:29:51<SeP>2023-11-07 17:25:12<SeP>2023-11-09 04:20:33<SeP>2023-11-10 15:15:54<SeP>2023-11-12 02:11:15<SeP>2023-11-13 13:06:36<SeP>2023-11-15 00:01:57<SeP>2023-11-16 10:57:18<SeP>2023-11-17 21:52:39<SeP>2023-11-19 08:48:00<SeP>2023-11-20 19:43:21<SeP>2023-11-22 06:38:42<SeP>2023-11-23 17:34:03<SeP>2023-11-25 04:29:24<SeP>2023-11-26 15:24:45<SeP>2023-11-28 02:20:06<SeP>2023-11-29 13:15:27<SeP>2023-12-01 00:10:48<SeP>2023-12-02 11:06:09<SeP>2023-12-03 22:01:30<SeP>2023-12-05 08:56:51<SeP>2023-12-06 19:52:12<SeP>2023-12-08 06:47:33<SeP>2023-12-09 17:42:54<SeP>2023-12-11 04:38:15<SeP>2023-12-12 15:33:36<SeP>2023-12-14 02:28:57<SeP>2023-12-15 13:24:18<SeP>2023-12-17 00:19:39<SeP>2023-12-18 11:15:00<SeP>2023-12-19 22:10:21<SeP>2023-12-21 09:05:42<SeP>2023-12-22 20:01:03<SeP>2023-12-24 06:56:24<SeP>2023-12-25 17:51:45<SeP>2023-12-27 04:47:06<SeP>2023-12-28 15:42:27<SeP>2023-12-30 02:37:48<SeP>2023-12-31 13:33:09<SeP>2024-01-02 00:28:30<SeP>2024-01-03 11:23:51<SeP>2024-01-04 22:19:12<SeP>2024-01-06 09:14:33<SeP>2024-01-07 20:09:54<SeP>2024-01-09 07:05:15<SeP>2024-01-10 18:00:36<SeP>2024-01-12 04:55:57<SeP>2024-01-13 15:51:18<SeP>2024-01-15 02:46:39<SeP>2024-01-16 13:42:00<SeP>2024-01-18 00:37:21<SeP>2024-01-19 11:32:42<SeP>2024-01-20 22:28:03<SeP>2024-01-22 09:23:24<SeP>2024-01-23 20:18:45<SeP>2024-01-25 07:14:06<SeP>2024-01-26 18:09:27<SeP>2024-01-28 05:04:48<SeP>2024-01-29 16:00:09<SeP>2024-01-31 02:55:30<SeP>2024-02-01 13:50:51<SeP>2024-02-03 00:46:12<SeP>2024-02-04 11:41:33<SeP>2024-02-05 22:36:54<SeP>2024-02-07 09:32:15<SeP>2024-02-08 20:27:36<SeP>2024-02-10 07:22:57<SeP>2024-02-11 18:18:18<SeP>2024-02-13 05:13:39<SeP>2024-02-14 16:09:00<SeP>2024-02-16 03:04:21<SeP>2024-02-17 13:59:42<SeP>2024-02-19 00:55:03<SeP>2024-02-20 11:50:24<SeP>2024-02-21 22:45:45<SeP>2024-02-23 09:41:06<SeP>2024-02-24 20:36:27<SeP>2024-02-26 07:31:48<SeP>2024-02-27 18:27:09<SeP>2024-02-29 05:22:30<SeP>2024-03-01 16:17:51<SeP>2024-03-03 03:13:12<SeP>2024-03-04 14:08:33<SeP>2024-03-06 01:03:54<SeP>2024-03-07 11:59:15<SeP>2024-03-08 22:54:36<SeP>2024-03-10 10:49:57<SeP>2024-03-11 21:45:18<SeP>2024-03-13 08:40:39<SeP>2024-03-14 19:36:00<SeP>2024-03-16 06:31:21<SeP>2024-03-17 17:26:42<SeP>2024-03-19 04:22:03<SeP>2024-03-20 15:17:24<SeP>2024-03-22 02:12:45<SeP>2024-03-23 13:08:06<SeP>2024-03-25 00:03:27<SeP>2024-03-26 10:58:48<SeP>2024-03-27 21:54:09<SeP>2024-03-29 08:49:30<SeP>2024-03-30 19:44:51<SeP>2024-04-01 06:40:12<SeP>2024-04-02 17:35:33<SeP>2024-04-04 04:30:54<SeP>2024-04-05 15:26:15<SeP>2024-04-07 02:21:36<SeP>2024-04-08 13:16:57<SeP>2024-04-10 00:12:18<SeP>2024-04-11 11:07:39<SeP>2024-04-12 22:03:00<SeP>2024-04-14 08:58:21<SeP>2024-04-15 19:53:42<SeP>2024-04-17 06:49:03<SeP>2024-04-18 17:44:24<SeP>2024-04-20 04:39:45<SeP>2024-04-21 15:35:06<SeP>2024-04-23 02:30:27<SeP>2024-04-24 13:25:48<SeP>2024-04-26 00:21:09<SeP>2024-04-27 11:16:30<SeP>2024-04-28 22:11:51<SeP>2024-04-30 09:07:12<SeP>2024-05-01 20:02:33<SeP>2024-05-03 06:57:54<SeP>2024-05-04 17:53:15<SeP>2024-05-06 04:48:36<SeP>2024-05-07 15:43:57<SeP>2024-05-09 02:39:18<SeP>2024-05-10 13:34:39<SeP>2024-05-12 00:30:00<SeP>2024-05-13 11:25:21<SeP>2024-05-14 22:20:42<SeP>2024-05-16 09:16:03<SeP>2024-05-17 20:11:24<SeP>2024-05-19 07:06:45<SeP>2024-05-20 18:02:06<SeP>2024-05-22 04:57:27<SeP>2024-05-23 15:52:48<SeP>2024-05-25 02:48:09<SeP>2024-05-26 13:43:30<SeP>2024-05-28 00:38:51<SeP>2024-05-29 11:34:12<SeP>2024-05-30 22:29:33<SeP>2024-06-01 09:24:54<SeP>2024-06-02 20:20:15<SeP>2024-06-04 07:15:36<SeP>2024-06-05 18:10:57<SeP>2024-06-07 05:06:18<SeP>2024-06-08 16:01:39<SeP>2024-06-10 02:57:00<SeP>2024-06-11 13:52:21<SeP>2024-06-13 00:47:42<SeP>2024-06-14 11:43:03<SeP>2024-06-15 22:38:24<SeP>2024-06-17 09:33:45<SeP>2024-06-18 20:29:06<SeP>2024-06-20 07:24:27<SeP>2024-06-21 18:19:48<SeP>2024-06-23 05:15:09<SeP>2024-06-24 16:10:30<SeP>2024-06-26 03:05:51<SeP>2024-06-27 14:01:12<SeP>2024-06-29 00:56:33<SeP>2024-06-30 11:51:54<SeP>2024-07-01 22:47:15<SeP>2024-07-03 09:42:36<SeP>2024-07-04 20:37:57<SeP>2024-07-06 07:33:18<SeP>2024-07-07 18:28:39<SeP>2024-07-09 05:24:00<SeP>2024-07-10 16:19:21<SeP>2024-07-12 03:14:42<SeP>2024-07-13 14:10:03<SeP>2024-07-15 01:05:24<SeP>2024-07-16 12:00:45<SeP>2024-07-17 22:56:06<SeP>2024-07-19 09:51:27<SeP>2024-07-20 20:46:48<SeP>2024-07-22 07:42:09<SeP>2024-07-23 18:37:30<SeP>2024-07-25 05:32:51<SeP>2024-07-26 16:28:12<SeP>2024-07-28 03:23:33<SeP>2024-07-29 14:18:54<SeP>2024-07-31 01:14:15<SeP>2024-08-01 12:09:36<SeP>2024-08-02 23:04:57<SeP>2024-08-04 10:00:18<SeP>2024-08-05 20:55:39<SeP>2024-08-07 07:51:00<SeP>2024-08-08 18:46:21<SeP>2024-08-10 05:41:42<SeP>2024-08-11 16:37:03<SeP>2024-08-13 03:32:24<SeP>2024-08-14 14:27:45<SeP>2024-08-16 01:23:06<SeP>2024-08-17 12:18:27<SeP>2024-08-18 23:13:48<SeP>2024-08-20 10:09:09<SeP>2024-08-21 21:04:30<SeP>2024-08-23 07:59:51<SeP>2024-08-24 18:55:12<SeP>2024-08-26 05:50:33<SeP>2024-08-27 16:45:54<SeP>2024-08-29 03:41:15<SeP>2024-08-30 14:36:36<SeP>2024-09-01 01:31:57<SeP>2024-09-02 12:27:18<SeP>2024-09-03 23:22:39<SeP>2024-09-05 10:18:00<SeP>2024-09-06 21:13:21<SeP>2024-09-08 08:08:42<SeP>2024-09-09 19:04:03<SeP>2024-09-11 05:59:24<SeP>2024-09-12 16:54:45<SeP>2024-09-14 03:50:06<SeP>2024-09-15 14:45:27<SeP>2024-09-17 01:40:48<SeP>2024-09-18 12:36:09<SeP>2024-09-19 23:31:30<SeP>2024-09-21 10:26:51<SeP>2024-09-22 21:22:12<SeP>2024-09-24 08:17:33<SeP>2024-09-25 19:12:54<SeP>2024-09-27 06:08:15<SeP>2024-09-28 17:03:36<SeP>2024-09-30 03:58:57<SeP>2024-10-01 14:54:18<SeP>2024-10-03 01:49:39<SeP>2024-10-04 12:45:00<SeP>2024-10-05 23:40:21<SeP>2024-10-07 10:35:42<SeP>2024-10-08 21:31:03<SeP>2024-10-10 08:26:24<SeP>2024-10-11 19:21:45<SeP>2024-10-13 06:17:06<SeP>2024-10-14 17:12:27<SeP>2024-10-16 04:07:48<SeP>2024-10-17 15:03:09<SeP>2024-10-19 01:58:30<SeP>2024-10-20 12:53:51<SeP>2024-10-21 23:49:12<SeP>2024-10-23 10:44:33<SeP>2024-10-24 21:39:54<SeP>2024-10-26 08:35:15<SeP>2024-10-27 19:30:36<SeP>2024-10-29 06:25:57<SeP>2024-10-30 17:21:18<SeP>2024-11-01 04:16:39<SeP>2024-11-02 15:12:00<SeP>2024-11-04 01:07:21<SeP>2024-11-05 12:02:42<SeP>2024-11-06 22:58:03<SeP>2024-11-08 09:53:24<SeP>2024-11-09 20:48:45<SeP>2024-11-11 07:44:06<SeP>2024-11-12 18:39:27<SeP>2024-11-14 05:34:48<SeP>2024-11-15 16:30:09<SeP>2024-11-17 03:25:30<SeP>2024-11-18 14:20:51<SeP>2024-11-20 01:16:12<SeP>2024-11-21 12:11:33<SeP>2024-11-22 23:06:54<SeP>2024-11-24 10:02:15<SeP>2024-11-25 20:57:36<SeP>2024-11-27 07:52:57<SeP>2024-11-28 18:48:18<SeP>2024-11-30 05:43:39<SeP>2024-12-01 16:39:00<SeP>2024-12-03 03:34:21<SeP>2024-12-04 14:29:42<SeP>2024-12-06 01:25:03<SeP>2024-12-07 12:20:24<SeP>2024-12-08 23:15:45<SeP>2024-12-10 10:11:06<SeP>2024-12-11 21:06:27<SeP>2024-12-13 08:01:48<SeP>2024-12-14 18:57:09<SeP>2024-12-16 05:52:30<SeP>2024-12-17 16:47:51<SeP>2024-12-19 03:43:12<SeP>2024-12-20 14:38:33<SeP>2024-12-22 01:33:54<SeP>2024-12-23 12:29:15<SeP>2024-12-24 23:24:36<SeP>2024-12-26 10:19:57<SeP>2024-12-27 21:15:18<SeP>2024-12-29 08:10:39<SeP>2024-12-30 19:06:00<SeP>2025-01-01 06:01:21<SeP>2025-01-02 16:56:42<SeP>2025-01-04 03:52:03<SeP>2025-01-05 14:47:24<SeP>2025-01-07 01:42:45<SeP>2025-01-08 12:38:06<SeP>2025-01-09 23:33:27<SeP>2025-01-11 10:28:48<SeP>2025-01-12 21:24:09<SeP>2025-01-14 08:19:30<SeP>2025-01-15 19:14:51<SeP>2025-01-17 06:10:12<SeP>2025-01-18 17:05:33<SeP>2025-01-20 04:00:54<SeP>2025-01-21 14:56:15<SeP>2025-01-23 01:51:36<SeP>2025-01-24 12:46:57<SeP>2025-01-25 23:42:18<SeP>2025-01-27 10:37:39<SeP>2025-01-28 21:33:00<SeP>2025-01-30 08:28:21<SeP>2025-01-31 19:23:42<SeP>2025-02-02 06:19:03<SeP>2025-02-03 17:14:24<SeP>2025-02-05 04:09:45<SeP>2025-02-06 15:05:06<SeP>2025-02-08 02:00:27<SeP>2025-02-09 12:55:48<SeP>2025-02-10 23:51:09<SeP>2025-02-12 10:46:30<SeP>2025-02-13 21:41:51<SeP>2025-02-15 08:37:12<SeP>2025-02-16 19:32:33<SeP>2025-02-18 06:27:54<SeP>2025-02-19 17:23:15<SeP>2025-02-21 04:18:36<SeP>2025-02-22 15:13:57<SeP>2025-02-24 02:09:18<SeP>2025-02-25 13:04:39";
  const item1Label       = "Scans";
  const item1Data        = "765<SeP>1482<SeP>1378<SeP>1443<SeP>1253<SeP>1697<SeP>957<SeP>950<SeP>1189<SeP>3358<SeP>2013<SeP>2270<SeP>2509<SeP>1795<SeP>734<SeP>943<SeP>1385<SeP>2716<SeP>1211<SeP>1801<SeP>1358<SeP>912<SeP>897<SeP>1405<SeP>831<SeP>930<SeP>827<SeP>2147<SeP>2301<SeP>952<SeP>833<SeP>1397<SeP>1254<SeP>841<SeP>2993<SeP>1798<SeP>2489<SeP>1859<SeP>1663<SeP>1417<SeP>1299<SeP>1777<SeP>1777<SeP>2240<SeP>1474<SeP>1650<SeP>1584<SeP>1742<SeP>1759<SeP>1771<SeP>1797<SeP>1692<SeP>1642<SeP>3112<SeP>1738<SeP>1389<SeP>1769<SeP>2068<SeP>2314<SeP>1438<SeP>3370<SeP>1859<SeP>1371<SeP>1620<SeP>1309<SeP>1791<SeP>1589<SeP>1561<SeP>1195<SeP>1451<SeP>1177<SeP>2356<SeP>1234<SeP>1103<SeP>1296<SeP>2399<SeP>7088<SeP>1269<SeP>1263<SeP>1396<SeP>2268<SeP>1255<SeP>1439<SeP>6403<SeP>1436<SeP>1600<SeP>966<SeP>2709<SeP>1834<SeP>1087<SeP>1027<SeP>1051<SeP>1080<SeP>2708<SeP>1266<SeP>1125<SeP>1638<SeP>3947<SeP>5340<SeP>1242<SeP>928<SeP>913<SeP>967<SeP>937<SeP>974<SeP>1029<SeP>1830<SeP>3801<SeP>1758<SeP>1221<SeP>1397<SeP>536<SeP>1402<SeP>1320<SeP>1192<SeP>858<SeP>2057<SeP>1331<SeP>1242<SeP>1029<SeP>957<SeP>1146<SeP>735<SeP>832<SeP>841<SeP>798<SeP>891<SeP>1108<SeP>868<SeP>719<SeP>914<SeP>841<SeP>900<SeP>649<SeP>822<SeP>844<SeP>895<SeP>894<SeP>867<SeP>785<SeP>791<SeP>947<SeP>863<SeP>810<SeP>895<SeP>895<SeP>924<SeP>1110<SeP>971<SeP>569<SeP>800<SeP>871<SeP>842<SeP>1266<SeP>876<SeP>1121<SeP>1085<SeP>1226<SeP>956<SeP>829<SeP>1057<SeP>809<SeP>866<SeP>1075<SeP>802<SeP>971<SeP>898<SeP>1103<SeP>893<SeP>1068<SeP>997<SeP>1047<SeP>1083<SeP>936<SeP>879<SeP>2134<SeP>1168<SeP>1221<SeP>1064<SeP>939<SeP>1158<SeP>957<SeP>908<SeP>734<SeP>880<SeP>1020<SeP>1009<SeP>807<SeP>1063<SeP>1290<SeP>1101<SeP>1135<SeP>1305<SeP>1177<SeP>1276<SeP>1264<SeP>1292<SeP>1503<SeP>1682<SeP>1729<SeP>1319<SeP>737<SeP>890<SeP>1142<SeP>1003<SeP>554<SeP>845<SeP>854<SeP>982<SeP>878<SeP>5700<SeP>3088<SeP>1918<SeP>1357<SeP>992<SeP>809<SeP>1067<SeP>853<SeP>1010<SeP>1036<SeP>1123<SeP>1014<SeP>1284<SeP>2167<SeP>981<SeP>1199<SeP>1263<SeP>1263<SeP>1126<SeP>1051<SeP>965<SeP>1091<SeP>1102<SeP>959<SeP>1118<SeP>1013<SeP>1214<SeP>856<SeP>1384<SeP>985<SeP>1195<SeP>995<SeP>1325<SeP>1245<SeP>1192<SeP>1536<SeP>1276<SeP>1093<SeP>1069<SeP>1278<SeP>1912<SeP>1317<SeP>1938<SeP>1778<SeP>1397<SeP>1984<SeP>1448<SeP>1169<SeP>1123<SeP>1422<SeP>1037<SeP>1571<SeP>1258<SeP>1222<SeP>1719<SeP>1677<SeP>1299<SeP>1552<SeP>1179<SeP>1413<SeP>1183<SeP>1105<SeP>1218<SeP>1118<SeP>1337<SeP>1173<SeP>1251<SeP>1440<SeP>1841<SeP>1404<SeP>1090<SeP>1700<SeP>1448<SeP>1135<SeP>1094<SeP>912<SeP>862<SeP>894<SeP>1023<SeP>999<SeP>1824<SeP>1037<SeP>1136<SeP>1160<SeP>781<SeP>1011<SeP>994<SeP>1308<SeP>861<SeP>883<SeP>1149<SeP>1278<SeP>1608<SeP>1363<SeP>1063<SeP>1013<SeP>1133<SeP>1807<SeP>1003<SeP>1170<SeP>976<SeP>1343<SeP>1347<SeP>859<SeP>1162<SeP>1087<SeP>974<SeP>886<SeP>901<SeP>1357<SeP>1278<SeP>1697<SeP>1559<SeP>1322<SeP>946<SeP>1110<SeP>1123<SeP>1099<SeP>1134<SeP>1140<SeP>1062<SeP>1001<SeP>1207<SeP>1433<SeP>1428<SeP>1552<SeP>1470<SeP>1287<SeP>1503<SeP>1390<SeP>1529<SeP>1334<SeP>1480<SeP>1208<SeP>1801<SeP>1260<SeP>1474<SeP>1627<SeP>1296<SeP>1453<SeP>1337<SeP>1124<SeP>1318<SeP>1405<SeP>1680<SeP>1311<SeP>1339<SeP>1180<SeP>1465<SeP>1144<SeP>1311<SeP>1404<SeP>1700<SeP>1797<SeP>1265<SeP>678<SeP>1309<SeP>1720<SeP>1422<SeP>1274<SeP>1392<SeP>1051<SeP>1387<SeP>1328<SeP>1324<SeP>1437<SeP>1431<SeP>1649<SeP>1552<SeP>1476<SeP>1594<SeP>1381<SeP>1319<SeP>1716<SeP>1516<SeP>1325<SeP>1162<SeP>1575<SeP>1774<SeP>1848<SeP>1771<SeP>1830<SeP>1519<SeP>1604<SeP>1560<SeP>1546<SeP>1536<SeP>1591<SeP>1698<SeP>1916";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "153<SeP>614<SeP>1030<SeP>670<SeP>562<SeP>209<SeP>6968<SeP>518<SeP>9450<SeP>679<SeP>395<SeP>1131<SeP>1237<SeP>288<SeP>152<SeP>460<SeP>111<SeP>761<SeP>284<SeP>5090<SeP>7615<SeP>6700<SeP>7992<SeP>6068<SeP>243<SeP>311<SeP>430<SeP>128<SeP>1361<SeP>4914<SeP>72<SeP>386<SeP>373<SeP>366<SeP>3862<SeP>10043<SeP>8768<SeP>10132<SeP>8602<SeP>6039<SeP>6883<SeP>7375<SeP>8602<SeP>9024<SeP>7884<SeP>7099<SeP>9008<SeP>9081<SeP>7932<SeP>7651<SeP>5307<SeP>9698<SeP>9918<SeP>6486<SeP>7676<SeP>8205<SeP>9382<SeP>18025<SeP>16808<SeP>8944<SeP>11601<SeP>6644<SeP>7624<SeP>8370<SeP>9744<SeP>8282<SeP>6535<SeP>6916<SeP>6288<SeP>6617<SeP>4166<SeP>5883<SeP>5736<SeP>6445<SeP>5714<SeP>7776<SeP>4570<SeP>5782<SeP>5616<SeP>6416<SeP>4785<SeP>7198<SeP>4680<SeP>5824<SeP>6441<SeP>5772<SeP>5944<SeP>5176<SeP>11303<SeP>20285<SeP>35367<SeP>7944<SeP>9418<SeP>5264<SeP>6606<SeP>12782<SeP>6085<SeP>4467<SeP>5224<SeP>4822<SeP>6186<SeP>5458<SeP>7924<SeP>6232<SeP>6425<SeP>5023<SeP>4675<SeP>7974<SeP>8506<SeP>7480<SeP>7543<SeP>3781<SeP>8071<SeP>10510<SeP>7362<SeP>2744<SeP>5382<SeP>7270<SeP>7403<SeP>5725<SeP>8352<SeP>8030<SeP>2128<SeP>2742<SeP>935<SeP>1655<SeP>2550<SeP>1765<SeP>847<SeP>1249<SeP>1007<SeP>1276<SeP>1319<SeP>1152<SeP>1195<SeP>745<SeP>1188<SeP>1069<SeP>1191<SeP>1411<SeP>1053<SeP>1711<SeP>2135<SeP>1534<SeP>12506<SeP>6380<SeP>10095<SeP>7351<SeP>5505<SeP>10681<SeP>9080<SeP>8739<SeP>8853<SeP>12405<SeP>9142<SeP>9520<SeP>10939<SeP>13943<SeP>9462<SeP>8404<SeP>4510<SeP>6490<SeP>8477<SeP>23806<SeP>6451<SeP>7972<SeP>10692<SeP>17168<SeP>6676<SeP>6571<SeP>6685<SeP>6427<SeP>21532<SeP>13058<SeP>7524<SeP>11172<SeP>5162<SeP>6859<SeP>5000<SeP>15835<SeP>5778<SeP>5262<SeP>14845<SeP>7500<SeP>8362<SeP>6990<SeP>5543<SeP>3536<SeP>7079<SeP>7512<SeP>4618<SeP>6496<SeP>8144<SeP>6005<SeP>19142<SeP>7893<SeP>6524<SeP>5890<SeP>8527<SeP>10475<SeP>7203<SeP>2636<SeP>4765<SeP>4876<SeP>3902<SeP>4736<SeP>2665<SeP>635<SeP>586<SeP>156<SeP>617<SeP>580<SeP>765<SeP>354<SeP>651<SeP>1320<SeP>1238<SeP>3123<SeP>22919<SeP>562<SeP>4467<SeP>3232<SeP>2490<SeP>7860<SeP>2758<SeP>4169<SeP>3000<SeP>3256<SeP>2933<SeP>3296<SeP>4073<SeP>2478<SeP>2301<SeP>3441<SeP>1866<SeP>2060<SeP>1886<SeP>1328<SeP>1414<SeP>1389<SeP>856<SeP>1864<SeP>8736<SeP>19206<SeP>2002<SeP>4206<SeP>3490<SeP>2088<SeP>4176<SeP>2033<SeP>2260<SeP>3440<SeP>2861<SeP>3409<SeP>2112<SeP>3725<SeP>2741<SeP>5278<SeP>5574<SeP>4608<SeP>3974<SeP>2578<SeP>2723<SeP>4825<SeP>3791<SeP>9967<SeP>5105<SeP>3304<SeP>2512<SeP>2106<SeP>4910<SeP>3529<SeP>3850<SeP>2512<SeP>2943<SeP>5945<SeP>3347<SeP>5947<SeP>3738<SeP>5453<SeP>4349<SeP>6804<SeP>4134<SeP>16320<SeP>11751<SeP>12489<SeP>1754<SeP>2297<SeP>4887<SeP>3390<SeP>3980<SeP>3855<SeP>5005<SeP>3954<SeP>4516<SeP>4246<SeP>3546<SeP>3308<SeP>1264<SeP>1963<SeP>2875<SeP>2867<SeP>2244<SeP>4224<SeP>3768<SeP>4236<SeP>3280<SeP>4000<SeP>3387<SeP>3613<SeP>3050<SeP>7087<SeP>8048<SeP>5315<SeP>4373<SeP>5353<SeP>4299<SeP>3386<SeP>4345<SeP>3822<SeP>6599<SeP>4999<SeP>5005<SeP>2497<SeP>762<SeP>1465<SeP>1501<SeP>1231<SeP>1230<SeP>1942<SeP>1307<SeP>1427<SeP>3402<SeP>4665<SeP>6552<SeP>34252<SeP>4920<SeP>4428<SeP>20517<SeP>8771<SeP>5175<SeP>6085<SeP>4501<SeP>24165<SeP>4994<SeP>5135<SeP>4700<SeP>5250<SeP>6305<SeP>29467<SeP>4915<SeP>3893<SeP>4021<SeP>3762<SeP>5692<SeP>4683<SeP>3666<SeP>2635<SeP>4477<SeP>5703<SeP>4708<SeP>18035<SeP>5306<SeP>6167<SeP>5453<SeP>1556<SeP>3212<SeP>4015<SeP>5035<SeP>3782<SeP>3559<SeP>2810<SeP>3530<SeP>3013<SeP>4337<SeP>5349<SeP>8236<SeP>10692<SeP>8288<SeP>9373<SeP>7626<SeP>7494<SeP>4950<SeP>5174<SeP>3766<SeP>25438<SeP>3734<SeP>3166<SeP>3925<SeP>10700<SeP>5566<SeP>4942<SeP>3517<SeP>4837<SeP>3467<SeP>5059<SeP>9531<SeP>8345<SeP>4185<SeP>2733";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:55:21<SeP>2023-07-28 21:50:42<SeP>2023-07-30 08:46:03<SeP>2023-07-31 19:41:24<SeP>2023-08-02 06:36:45<SeP>2023-08-03 17:32:06<SeP>2023-08-05 04:27:27<SeP>2023-08-06 15:22:48<SeP>2023-08-08 02:18:09<SeP>2023-08-09 13:13:30<SeP>2023-08-11 00:08:51<SeP>2023-08-12 11:04:12<SeP>2023-08-13 21:59:33<SeP>2023-08-15 08:54:54<SeP>2023-08-16 19:50:15<SeP>2023-08-18 06:45:36<SeP>2023-08-19 17:40:57<SeP>2023-08-21 04:36:18<SeP>2023-08-22 15:31:39<SeP>2023-08-24 02:27:00<SeP>2023-08-25 13:22:21<SeP>2023-08-27 00:17:42<SeP>2023-08-28 11:13:03<SeP>2023-08-29 22:08:24<SeP>2023-08-31 09:03:45<SeP>2023-09-01 19:59:06<SeP>2023-09-03 06:54:27<SeP>2023-09-04 17:49:48<SeP>2023-09-06 04:45:09<SeP>2023-09-07 15:40:30<SeP>2023-09-09 02:35:51<SeP>2023-09-10 13:31:12<SeP>2023-09-12 00:26:33<SeP>2023-09-13 11:21:54<SeP>2023-09-14 22:17:15<SeP>2023-09-16 09:12:36<SeP>2023-09-17 20:07:57<SeP>2023-09-19 07:03:18<SeP>2023-09-20 17:58:39<SeP>2023-09-22 04:54:00<SeP>2023-09-23 15:49:21<SeP>2023-09-25 02:44:42<SeP>2023-09-26 13:40:03<SeP>2023-09-28 00:35:24<SeP>2023-09-29 11:30:45<SeP>2023-09-30 22:26:06<SeP>2023-10-02 09:21:27<SeP>2023-10-03 20:16:48<SeP>2023-10-05 07:12:09<SeP>2023-10-06 18:07:30<SeP>2023-10-08 05:02:51<SeP>2023-10-09 15:58:12<SeP>2023-10-11 02:53:33<SeP>2023-10-12 13:48:54<SeP>2023-10-14 00:44:15<SeP>2023-10-15 11:39:36<SeP>2023-10-16 22:34:57<SeP>2023-10-18 09:30:18<SeP>2023-10-19 20:25:39<SeP>2023-10-21 07:21:00<SeP>2023-10-22 18:16:21<SeP>2023-10-24 05:11:42<SeP>2023-10-25 16:07:03<SeP>2023-10-27 03:02:24<SeP>2023-10-28 13:57:45<SeP>2023-10-30 00:53:06<SeP>2023-10-31 11:48:27<SeP>2023-11-01 22:43:48<SeP>2023-11-03 09:39:09<SeP>2023-11-04 20:34:30<SeP>2023-11-06 06:29:51<SeP>2023-11-07 17:25:12<SeP>2023-11-09 04:20:33<SeP>2023-11-10 15:15:54<SeP>2023-11-12 02:11:15<SeP>2023-11-13 13:06:36<SeP>2023-11-15 00:01:57<SeP>2023-11-16 10:57:18<SeP>2023-11-17 21:52:39<SeP>2023-11-19 08:48:00<SeP>2023-11-20 19:43:21<SeP>2023-11-22 06:38:42<SeP>2023-11-23 17:34:03<SeP>2023-11-25 04:29:24<SeP>2023-11-26 15:24:45<SeP>2023-11-28 02:20:06<SeP>2023-11-29 13:15:27<SeP>2023-12-01 00:10:48<SeP>2023-12-02 11:06:09<SeP>2023-12-03 22:01:30<SeP>2023-12-05 08:56:51<SeP>2023-12-06 19:52:12<SeP>2023-12-08 06:47:33<SeP>2023-12-09 17:42:54<SeP>2023-12-11 04:38:15<SeP>2023-12-12 15:33:36<SeP>2023-12-14 02:28:57<SeP>2023-12-15 13:24:18<SeP>2023-12-17 00:19:39<SeP>2023-12-18 11:15:00<SeP>2023-12-19 22:10:21<SeP>2023-12-21 09:05:42<SeP>2023-12-22 20:01:03<SeP>2023-12-24 06:56:24<SeP>2023-12-25 17:51:45<SeP>2023-12-27 04:47:06<SeP>2023-12-28 15:42:27<SeP>2023-12-30 02:37:48<SeP>2023-12-31 13:33:09<SeP>2024-01-02 00:28:30<SeP>2024-01-03 11:23:51<SeP>2024-01-04 22:19:12<SeP>2024-01-06 09:14:33<SeP>2024-01-07 20:09:54<SeP>2024-01-09 07:05:15<SeP>2024-01-10 18:00:36<SeP>2024-01-12 04:55:57<SeP>2024-01-13 15:51:18<SeP>2024-01-15 02:46:39<SeP>2024-01-16 13:42:00<SeP>2024-01-18 00:37:21<SeP>2024-01-19 11:32:42<SeP>2024-01-20 22:28:03<SeP>2024-01-22 09:23:24<SeP>2024-01-23 20:18:45<SeP>2024-01-25 07:14:06<SeP>2024-01-26 18:09:27<SeP>2024-01-28 05:04:48<SeP>2024-01-29 16:00:09<SeP>2024-01-31 02:55:30<SeP>2024-02-01 13:50:51<SeP>2024-02-03 00:46:12<SeP>2024-02-04 11:41:33<SeP>2024-02-05 22:36:54<SeP>2024-02-07 09:32:15<SeP>2024-02-08 20:27:36<SeP>2024-02-10 07:22:57<SeP>2024-02-11 18:18:18<SeP>2024-02-13 05:13:39<SeP>2024-02-14 16:09:00<SeP>2024-02-16 03:04:21<SeP>2024-02-17 13:59:42<SeP>2024-02-19 00:55:03<SeP>2024-02-20 11:50:24<SeP>2024-02-21 22:45:45<SeP>2024-02-23 09:41:06<SeP>2024-02-24 20:36:27<SeP>2024-02-26 07:31:48<SeP>2024-02-27 18:27:09<SeP>2024-02-29 05:22:30<SeP>2024-03-01 16:17:51<SeP>2024-03-03 03:13:12<SeP>2024-03-04 14:08:33<SeP>2024-03-06 01:03:54<SeP>2024-03-07 11:59:15<SeP>2024-03-08 22:54:36<SeP>2024-03-10 10:49:57<SeP>2024-03-11 21:45:18<SeP>2024-03-13 08:40:39<SeP>2024-03-14 19:36:00<SeP>2024-03-16 06:31:21<SeP>2024-03-17 17:26:42<SeP>2024-03-19 04:22:03<SeP>2024-03-20 15:17:24<SeP>2024-03-22 02:12:45<SeP>2024-03-23 13:08:06<SeP>2024-03-25 00:03:27<SeP>2024-03-26 10:58:48<SeP>2024-03-27 21:54:09<SeP>2024-03-29 08:49:30<SeP>2024-03-30 19:44:51<SeP>2024-04-01 06:40:12<SeP>2024-04-02 17:35:33<SeP>2024-04-04 04:30:54<SeP>2024-04-05 15:26:15<SeP>2024-04-07 02:21:36<SeP>2024-04-08 13:16:57<SeP>2024-04-10 00:12:18<SeP>2024-04-11 11:07:39<SeP>2024-04-12 22:03:00<SeP>2024-04-14 08:58:21<SeP>2024-04-15 19:53:42<SeP>2024-04-17 06:49:03<SeP>2024-04-18 17:44:24<SeP>2024-04-20 04:39:45<SeP>2024-04-21 15:35:06<SeP>2024-04-23 02:30:27<SeP>2024-04-24 13:25:48<SeP>2024-04-26 00:21:09<SeP>2024-04-27 11:16:30<SeP>2024-04-28 22:11:51<SeP>2024-04-30 09:07:12<SeP>2024-05-01 20:02:33<SeP>2024-05-03 06:57:54<SeP>2024-05-04 17:53:15<SeP>2024-05-06 04:48:36<SeP>2024-05-07 15:43:57<SeP>2024-05-09 02:39:18<SeP>2024-05-10 13:34:39<SeP>2024-05-12 00:30:00<SeP>2024-05-13 11:25:21<SeP>2024-05-14 22:20:42<SeP>2024-05-16 09:16:03<SeP>2024-05-17 20:11:24<SeP>2024-05-19 07:06:45<SeP>2024-05-20 18:02:06<SeP>2024-05-22 04:57:27<SeP>2024-05-23 15:52:48<SeP>2024-05-25 02:48:09<SeP>2024-05-26 13:43:30<SeP>2024-05-28 00:38:51<SeP>2024-05-29 11:34:12<SeP>2024-05-30 22:29:33<SeP>2024-06-01 09:24:54<SeP>2024-06-02 20:20:15<SeP>2024-06-04 07:15:36<SeP>2024-06-05 18:10:57<SeP>2024-06-07 05:06:18<SeP>2024-06-08 16:01:39<SeP>2024-06-10 02:57:00<SeP>2024-06-11 13:52:21<SeP>2024-06-13 00:47:42<SeP>2024-06-14 11:43:03<SeP>2024-06-15 22:38:24<SeP>2024-06-17 09:33:45<SeP>2024-06-18 20:29:06<SeP>2024-06-20 07:24:27<SeP>2024-06-21 18:19:48<SeP>2024-06-23 05:15:09<SeP>2024-06-24 16:10:30<SeP>2024-06-26 03:05:51<SeP>2024-06-27 14:01:12<SeP>2024-06-29 00:56:33<SeP>2024-06-30 11:51:54<SeP>2024-07-01 22:47:15<SeP>2024-07-03 09:42:36<SeP>2024-07-04 20:37:57<SeP>2024-07-06 07:33:18<SeP>2024-07-07 18:28:39<SeP>2024-07-09 05:24:00<SeP>2024-07-10 16:19:21<SeP>2024-07-12 03:14:42<SeP>2024-07-13 14:10:03<SeP>2024-07-15 01:05:24<SeP>2024-07-16 12:00:45<SeP>2024-07-17 22:56:06<SeP>2024-07-19 09:51:27<SeP>2024-07-20 20:46:48<SeP>2024-07-22 07:42:09<SeP>2024-07-23 18:37:30<SeP>2024-07-25 05:32:51<SeP>2024-07-26 16:28:12<SeP>2024-07-28 03:23:33<SeP>2024-07-29 14:18:54<SeP>2024-07-31 01:14:15<SeP>2024-08-01 12:09:36<SeP>2024-08-02 23:04:57<SeP>2024-08-04 10:00:18<SeP>2024-08-05 20:55:39<SeP>2024-08-07 07:51:00<SeP>2024-08-08 18:46:21<SeP>2024-08-10 05:41:42<SeP>2024-08-11 16:37:03<SeP>2024-08-13 03:32:24<SeP>2024-08-14 14:27:45<SeP>2024-08-16 01:23:06<SeP>2024-08-17 12:18:27<SeP>2024-08-18 23:13:48<SeP>2024-08-20 10:09:09<SeP>2024-08-21 21:04:30<SeP>2024-08-23 07:59:51<SeP>2024-08-24 18:55:12<SeP>2024-08-26 05:50:33<SeP>2024-08-27 16:45:54<SeP>2024-08-29 03:41:15<SeP>2024-08-30 14:36:36<SeP>2024-09-01 01:31:57<SeP>2024-09-02 12:27:18<SeP>2024-09-03 23:22:39<SeP>2024-09-05 10:18:00<SeP>2024-09-06 21:13:21<SeP>2024-09-08 08:08:42<SeP>2024-09-09 19:04:03<SeP>2024-09-11 05:59:24<SeP>2024-09-12 16:54:45<SeP>2024-09-14 03:50:06<SeP>2024-09-15 14:45:27<SeP>2024-09-17 01:40:48<SeP>2024-09-18 12:36:09<SeP>2024-09-19 23:31:30<SeP>2024-09-21 10:26:51<SeP>2024-09-22 21:22:12<SeP>2024-09-24 08:17:33<SeP>2024-09-25 19:12:54<SeP>2024-09-27 06:08:15<SeP>2024-09-28 17:03:36<SeP>2024-09-30 03:58:57<SeP>2024-10-01 14:54:18<SeP>2024-10-03 01:49:39<SeP>2024-10-04 12:45:00<SeP>2024-10-05 23:40:21<SeP>2024-10-07 10:35:42<SeP>2024-10-08 21:31:03<SeP>2024-10-10 08:26:24<SeP>2024-10-11 19:21:45<SeP>2024-10-13 06:17:06<SeP>2024-10-14 17:12:27<SeP>2024-10-16 04:07:48<SeP>2024-10-17 15:03:09<SeP>2024-10-19 01:58:30<SeP>2024-10-20 12:53:51<SeP>2024-10-21 23:49:12<SeP>2024-10-23 10:44:33<SeP>2024-10-24 21:39:54<SeP>2024-10-26 08:35:15<SeP>2024-10-27 19:30:36<SeP>2024-10-29 06:25:57<SeP>2024-10-30 17:21:18<SeP>2024-11-01 04:16:39<SeP>2024-11-02 15:12:00<SeP>2024-11-04 01:07:21<SeP>2024-11-05 12:02:42<SeP>2024-11-06 22:58:03<SeP>2024-11-08 09:53:24<SeP>2024-11-09 20:48:45<SeP>2024-11-11 07:44:06<SeP>2024-11-12 18:39:27<SeP>2024-11-14 05:34:48<SeP>2024-11-15 16:30:09<SeP>2024-11-17 03:25:30<SeP>2024-11-18 14:20:51<SeP>2024-11-20 01:16:12<SeP>2024-11-21 12:11:33<SeP>2024-11-22 23:06:54<SeP>2024-11-24 10:02:15<SeP>2024-11-25 20:57:36<SeP>2024-11-27 07:52:57<SeP>2024-11-28 18:48:18<SeP>2024-11-30 05:43:39<SeP>2024-12-01 16:39:00<SeP>2024-12-03 03:34:21<SeP>2024-12-04 14:29:42<SeP>2024-12-06 01:25:03<SeP>2024-12-07 12:20:24<SeP>2024-12-08 23:15:45<SeP>2024-12-10 10:11:06<SeP>2024-12-11 21:06:27<SeP>2024-12-13 08:01:48<SeP>2024-12-14 18:57:09<SeP>2024-12-16 05:52:30<SeP>2024-12-17 16:47:51<SeP>2024-12-19 03:43:12<SeP>2024-12-20 14:38:33<SeP>2024-12-22 01:33:54<SeP>2024-12-23 12:29:15<SeP>2024-12-24 23:24:36<SeP>2024-12-26 10:19:57<SeP>2024-12-27 21:15:18<SeP>2024-12-29 08:10:39<SeP>2024-12-30 19:06:00<SeP>2025-01-01 06:01:21<SeP>2025-01-02 16:56:42<SeP>2025-01-04 03:52:03<SeP>2025-01-05 14:47:24<SeP>2025-01-07 01:42:45<SeP>2025-01-08 12:38:06<SeP>2025-01-09 23:33:27<SeP>2025-01-11 10:28:48<SeP>2025-01-12 21:24:09<SeP>2025-01-14 08:19:30<SeP>2025-01-15 19:14:51<SeP>2025-01-17 06:10:12<SeP>2025-01-18 17:05:33<SeP>2025-01-20 04:00:54<SeP>2025-01-21 14:56:15<SeP>2025-01-23 01:51:36<SeP>2025-01-24 12:46:57<SeP>2025-01-25 23:42:18<SeP>2025-01-27 10:37:39<SeP>2025-01-28 21:33:00<SeP>2025-01-30 08:28:21<SeP>2025-01-31 19:23:42<SeP>2025-02-02 06:19:03<SeP>2025-02-03 17:14:24<SeP>2025-02-05 04:09:45<SeP>2025-02-06 15:05:06<SeP>2025-02-08 02:00:27<SeP>2025-02-09 12:55:48<SeP>2025-02-10 23:51:09<SeP>2025-02-12 10:46:30<SeP>2025-02-13 21:41:51<SeP>2025-02-15 08:37:12<SeP>2025-02-16 19:32:33<SeP>2025-02-18 06:27:54<SeP>2025-02-19 17:23:15<SeP>2025-02-21 04:18:36<SeP>2025-02-22 15:13:57<SeP>2025-02-24 02:09:18<SeP>2025-02-25 13:04:39";
  const itemLabel       = "Scans";
  const itemData        = "765<SeP>1482<SeP>1378<SeP>1443<SeP>1253<SeP>1697<SeP>957<SeP>950<SeP>1189<SeP>3358<SeP>2013<SeP>2270<SeP>2509<SeP>1795<SeP>734<SeP>943<SeP>1385<SeP>2716<SeP>1211<SeP>1801<SeP>1358<SeP>912<SeP>897<SeP>1405<SeP>831<SeP>930<SeP>827<SeP>2147<SeP>2301<SeP>952<SeP>833<SeP>1397<SeP>1254<SeP>841<SeP>2993<SeP>1798<SeP>2489<SeP>1859<SeP>1663<SeP>1417<SeP>1299<SeP>1777<SeP>1777<SeP>2240<SeP>1474<SeP>1650<SeP>1584<SeP>1742<SeP>1759<SeP>1771<SeP>1797<SeP>1692<SeP>1642<SeP>3112<SeP>1738<SeP>1389<SeP>1769<SeP>2068<SeP>2314<SeP>1438<SeP>3370<SeP>1859<SeP>1371<SeP>1620<SeP>1309<SeP>1791<SeP>1589<SeP>1561<SeP>1195<SeP>1451<SeP>1177<SeP>2356<SeP>1234<SeP>1103<SeP>1296<SeP>2399<SeP>7088<SeP>1269<SeP>1263<SeP>1396<SeP>2268<SeP>1255<SeP>1439<SeP>6403<SeP>1436<SeP>1600<SeP>966<SeP>2709<SeP>1834<SeP>1087<SeP>1027<SeP>1051<SeP>1080<SeP>2708<SeP>1266<SeP>1125<SeP>1638<SeP>3947<SeP>5340<SeP>1242<SeP>928<SeP>913<SeP>967<SeP>937<SeP>974<SeP>1029<SeP>1830<SeP>3801<SeP>1758<SeP>1221<SeP>1397<SeP>536<SeP>1402<SeP>1320<SeP>1192<SeP>858<SeP>2057<SeP>1331<SeP>1242<SeP>1029<SeP>957<SeP>1146<SeP>735<SeP>832<SeP>841<SeP>798<SeP>891<SeP>1108<SeP>868<SeP>719<SeP>914<SeP>841<SeP>900<SeP>649<SeP>822<SeP>844<SeP>895<SeP>894<SeP>867<SeP>785<SeP>791<SeP>947<SeP>863<SeP>810<SeP>895<SeP>895<SeP>924<SeP>1110<SeP>971<SeP>569<SeP>800<SeP>871<SeP>842<SeP>1266<SeP>876<SeP>1121<SeP>1085<SeP>1226<SeP>956<SeP>829<SeP>1057<SeP>809<SeP>866<SeP>1075<SeP>802<SeP>971<SeP>898<SeP>1103<SeP>893<SeP>1068<SeP>997<SeP>1047<SeP>1083<SeP>936<SeP>879<SeP>2134<SeP>1168<SeP>1221<SeP>1064<SeP>939<SeP>1158<SeP>957<SeP>908<SeP>734<SeP>880<SeP>1020<SeP>1009<SeP>807<SeP>1063<SeP>1290<SeP>1101<SeP>1135<SeP>1305<SeP>1177<SeP>1276<SeP>1264<SeP>1292<SeP>1503<SeP>1682<SeP>1729<SeP>1319<SeP>737<SeP>890<SeP>1142<SeP>1003<SeP>554<SeP>845<SeP>854<SeP>982<SeP>878<SeP>5700<SeP>3088<SeP>1918<SeP>1357<SeP>992<SeP>809<SeP>1067<SeP>853<SeP>1010<SeP>1036<SeP>1123<SeP>1014<SeP>1284<SeP>2167<SeP>981<SeP>1199<SeP>1263<SeP>1263<SeP>1126<SeP>1051<SeP>965<SeP>1091<SeP>1102<SeP>959<SeP>1118<SeP>1013<SeP>1214<SeP>856<SeP>1384<SeP>985<SeP>1195<SeP>995<SeP>1325<SeP>1245<SeP>1192<SeP>1536<SeP>1276<SeP>1093<SeP>1069<SeP>1278<SeP>1912<SeP>1317<SeP>1938<SeP>1778<SeP>1397<SeP>1984<SeP>1448<SeP>1169<SeP>1123<SeP>1422<SeP>1037<SeP>1571<SeP>1258<SeP>1222<SeP>1719<SeP>1677<SeP>1299<SeP>1552<SeP>1179<SeP>1413<SeP>1183<SeP>1105<SeP>1218<SeP>1118<SeP>1337<SeP>1173<SeP>1251<SeP>1440<SeP>1841<SeP>1404<SeP>1090<SeP>1700<SeP>1448<SeP>1135<SeP>1094<SeP>912<SeP>862<SeP>894<SeP>1023<SeP>999<SeP>1824<SeP>1037<SeP>1136<SeP>1160<SeP>781<SeP>1011<SeP>994<SeP>1308<SeP>861<SeP>883<SeP>1149<SeP>1278<SeP>1608<SeP>1363<SeP>1063<SeP>1013<SeP>1133<SeP>1807<SeP>1003<SeP>1170<SeP>976<SeP>1343<SeP>1347<SeP>859<SeP>1162<SeP>1087<SeP>974<SeP>886<SeP>901<SeP>1357<SeP>1278<SeP>1697<SeP>1559<SeP>1322<SeP>946<SeP>1110<SeP>1123<SeP>1099<SeP>1134<SeP>1140<SeP>1062<SeP>1001<SeP>1207<SeP>1433<SeP>1428<SeP>1552<SeP>1470<SeP>1287<SeP>1503<SeP>1390<SeP>1529<SeP>1334<SeP>1480<SeP>1208<SeP>1801<SeP>1260<SeP>1474<SeP>1627<SeP>1296<SeP>1453<SeP>1337<SeP>1124<SeP>1318<SeP>1405<SeP>1680<SeP>1311<SeP>1339<SeP>1180<SeP>1465<SeP>1144<SeP>1311<SeP>1404<SeP>1700<SeP>1797<SeP>1265<SeP>678<SeP>1309<SeP>1720<SeP>1422<SeP>1274<SeP>1392<SeP>1051<SeP>1387<SeP>1328<SeP>1324<SeP>1437<SeP>1431<SeP>1649<SeP>1552<SeP>1476<SeP>1594<SeP>1381<SeP>1319<SeP>1716<SeP>1516<SeP>1325<SeP>1162<SeP>1575<SeP>1774<SeP>1848<SeP>1771<SeP>1830<SeP>1519<SeP>1604<SeP>1560<SeP>1546<SeP>1536<SeP>1591<SeP>1698<SeP>1916";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:55:21<SeP>2023-07-28 21:50:42<SeP>2023-07-30 08:46:03<SeP>2023-07-31 19:41:24<SeP>2023-08-02 06:36:45<SeP>2023-08-03 17:32:06<SeP>2023-08-05 04:27:27<SeP>2023-08-06 15:22:48<SeP>2023-08-08 02:18:09<SeP>2023-08-09 13:13:30<SeP>2023-08-11 00:08:51<SeP>2023-08-12 11:04:12<SeP>2023-08-13 21:59:33<SeP>2023-08-15 08:54:54<SeP>2023-08-16 19:50:15<SeP>2023-08-18 06:45:36<SeP>2023-08-19 17:40:57<SeP>2023-08-21 04:36:18<SeP>2023-08-22 15:31:39<SeP>2023-08-24 02:27:00<SeP>2023-08-25 13:22:21<SeP>2023-08-27 00:17:42<SeP>2023-08-28 11:13:03<SeP>2023-08-29 22:08:24<SeP>2023-08-31 09:03:45<SeP>2023-09-01 19:59:06<SeP>2023-09-03 06:54:27<SeP>2023-09-04 17:49:48<SeP>2023-09-06 04:45:09<SeP>2023-09-07 15:40:30<SeP>2023-09-09 02:35:51<SeP>2023-09-10 13:31:12<SeP>2023-09-12 00:26:33<SeP>2023-09-13 11:21:54<SeP>2023-09-14 22:17:15<SeP>2023-09-16 09:12:36<SeP>2023-09-17 20:07:57<SeP>2023-09-19 07:03:18<SeP>2023-09-20 17:58:39<SeP>2023-09-22 04:54:00<SeP>2023-09-23 15:49:21<SeP>2023-09-25 02:44:42<SeP>2023-09-26 13:40:03<SeP>2023-09-28 00:35:24<SeP>2023-09-29 11:30:45<SeP>2023-09-30 22:26:06<SeP>2023-10-02 09:21:27<SeP>2023-10-03 20:16:48<SeP>2023-10-05 07:12:09<SeP>2023-10-06 18:07:30<SeP>2023-10-08 05:02:51<SeP>2023-10-09 15:58:12<SeP>2023-10-11 02:53:33<SeP>2023-10-12 13:48:54<SeP>2023-10-14 00:44:15<SeP>2023-10-15 11:39:36<SeP>2023-10-16 22:34:57<SeP>2023-10-18 09:30:18<SeP>2023-10-19 20:25:39<SeP>2023-10-21 07:21:00<SeP>2023-10-22 18:16:21<SeP>2023-10-24 05:11:42<SeP>2023-10-25 16:07:03<SeP>2023-10-27 03:02:24<SeP>2023-10-28 13:57:45<SeP>2023-10-30 00:53:06<SeP>2023-10-31 11:48:27<SeP>2023-11-01 22:43:48<SeP>2023-11-03 09:39:09<SeP>2023-11-04 20:34:30<SeP>2023-11-06 06:29:51<SeP>2023-11-07 17:25:12<SeP>2023-11-09 04:20:33<SeP>2023-11-10 15:15:54<SeP>2023-11-12 02:11:15<SeP>2023-11-13 13:06:36<SeP>2023-11-15 00:01:57<SeP>2023-11-16 10:57:18<SeP>2023-11-17 21:52:39<SeP>2023-11-19 08:48:00<SeP>2023-11-20 19:43:21<SeP>2023-11-22 06:38:42<SeP>2023-11-23 17:34:03<SeP>2023-11-25 04:29:24<SeP>2023-11-26 15:24:45<SeP>2023-11-28 02:20:06<SeP>2023-11-29 13:15:27<SeP>2023-12-01 00:10:48<SeP>2023-12-02 11:06:09<SeP>2023-12-03 22:01:30<SeP>2023-12-05 08:56:51<SeP>2023-12-06 19:52:12<SeP>2023-12-08 06:47:33<SeP>2023-12-09 17:42:54<SeP>2023-12-11 04:38:15<SeP>2023-12-12 15:33:36<SeP>2023-12-14 02:28:57<SeP>2023-12-15 13:24:18<SeP>2023-12-17 00:19:39<SeP>2023-12-18 11:15:00<SeP>2023-12-19 22:10:21<SeP>2023-12-21 09:05:42<SeP>2023-12-22 20:01:03<SeP>2023-12-24 06:56:24<SeP>2023-12-25 17:51:45<SeP>2023-12-27 04:47:06<SeP>2023-12-28 15:42:27<SeP>2023-12-30 02:37:48<SeP>2023-12-31 13:33:09<SeP>2024-01-02 00:28:30<SeP>2024-01-03 11:23:51<SeP>2024-01-04 22:19:12<SeP>2024-01-06 09:14:33<SeP>2024-01-07 20:09:54<SeP>2024-01-09 07:05:15<SeP>2024-01-10 18:00:36<SeP>2024-01-12 04:55:57<SeP>2024-01-13 15:51:18<SeP>2024-01-15 02:46:39<SeP>2024-01-16 13:42:00<SeP>2024-01-18 00:37:21<SeP>2024-01-19 11:32:42<SeP>2024-01-20 22:28:03<SeP>2024-01-22 09:23:24<SeP>2024-01-23 20:18:45<SeP>2024-01-25 07:14:06<SeP>2024-01-26 18:09:27<SeP>2024-01-28 05:04:48<SeP>2024-01-29 16:00:09<SeP>2024-01-31 02:55:30<SeP>2024-02-01 13:50:51<SeP>2024-02-03 00:46:12<SeP>2024-02-04 11:41:33<SeP>2024-02-05 22:36:54<SeP>2024-02-07 09:32:15<SeP>2024-02-08 20:27:36<SeP>2024-02-10 07:22:57<SeP>2024-02-11 18:18:18<SeP>2024-02-13 05:13:39<SeP>2024-02-14 16:09:00<SeP>2024-02-16 03:04:21<SeP>2024-02-17 13:59:42<SeP>2024-02-19 00:55:03<SeP>2024-02-20 11:50:24<SeP>2024-02-21 22:45:45<SeP>2024-02-23 09:41:06<SeP>2024-02-24 20:36:27<SeP>2024-02-26 07:31:48<SeP>2024-02-27 18:27:09<SeP>2024-02-29 05:22:30<SeP>2024-03-01 16:17:51<SeP>2024-03-03 03:13:12<SeP>2024-03-04 14:08:33<SeP>2024-03-06 01:03:54<SeP>2024-03-07 11:59:15<SeP>2024-03-08 22:54:36<SeP>2024-03-10 10:49:57<SeP>2024-03-11 21:45:18<SeP>2024-03-13 08:40:39<SeP>2024-03-14 19:36:00<SeP>2024-03-16 06:31:21<SeP>2024-03-17 17:26:42<SeP>2024-03-19 04:22:03<SeP>2024-03-20 15:17:24<SeP>2024-03-22 02:12:45<SeP>2024-03-23 13:08:06<SeP>2024-03-25 00:03:27<SeP>2024-03-26 10:58:48<SeP>2024-03-27 21:54:09<SeP>2024-03-29 08:49:30<SeP>2024-03-30 19:44:51<SeP>2024-04-01 06:40:12<SeP>2024-04-02 17:35:33<SeP>2024-04-04 04:30:54<SeP>2024-04-05 15:26:15<SeP>2024-04-07 02:21:36<SeP>2024-04-08 13:16:57<SeP>2024-04-10 00:12:18<SeP>2024-04-11 11:07:39<SeP>2024-04-12 22:03:00<SeP>2024-04-14 08:58:21<SeP>2024-04-15 19:53:42<SeP>2024-04-17 06:49:03<SeP>2024-04-18 17:44:24<SeP>2024-04-20 04:39:45<SeP>2024-04-21 15:35:06<SeP>2024-04-23 02:30:27<SeP>2024-04-24 13:25:48<SeP>2024-04-26 00:21:09<SeP>2024-04-27 11:16:30<SeP>2024-04-28 22:11:51<SeP>2024-04-30 09:07:12<SeP>2024-05-01 20:02:33<SeP>2024-05-03 06:57:54<SeP>2024-05-04 17:53:15<SeP>2024-05-06 04:48:36<SeP>2024-05-07 15:43:57<SeP>2024-05-09 02:39:18<SeP>2024-05-10 13:34:39<SeP>2024-05-12 00:30:00<SeP>2024-05-13 11:25:21<SeP>2024-05-14 22:20:42<SeP>2024-05-16 09:16:03<SeP>2024-05-17 20:11:24<SeP>2024-05-19 07:06:45<SeP>2024-05-20 18:02:06<SeP>2024-05-22 04:57:27<SeP>2024-05-23 15:52:48<SeP>2024-05-25 02:48:09<SeP>2024-05-26 13:43:30<SeP>2024-05-28 00:38:51<SeP>2024-05-29 11:34:12<SeP>2024-05-30 22:29:33<SeP>2024-06-01 09:24:54<SeP>2024-06-02 20:20:15<SeP>2024-06-04 07:15:36<SeP>2024-06-05 18:10:57<SeP>2024-06-07 05:06:18<SeP>2024-06-08 16:01:39<SeP>2024-06-10 02:57:00<SeP>2024-06-11 13:52:21<SeP>2024-06-13 00:47:42<SeP>2024-06-14 11:43:03<SeP>2024-06-15 22:38:24<SeP>2024-06-17 09:33:45<SeP>2024-06-18 20:29:06<SeP>2024-06-20 07:24:27<SeP>2024-06-21 18:19:48<SeP>2024-06-23 05:15:09<SeP>2024-06-24 16:10:30<SeP>2024-06-26 03:05:51<SeP>2024-06-27 14:01:12<SeP>2024-06-29 00:56:33<SeP>2024-06-30 11:51:54<SeP>2024-07-01 22:47:15<SeP>2024-07-03 09:42:36<SeP>2024-07-04 20:37:57<SeP>2024-07-06 07:33:18<SeP>2024-07-07 18:28:39<SeP>2024-07-09 05:24:00<SeP>2024-07-10 16:19:21<SeP>2024-07-12 03:14:42<SeP>2024-07-13 14:10:03<SeP>2024-07-15 01:05:24<SeP>2024-07-16 12:00:45<SeP>2024-07-17 22:56:06<SeP>2024-07-19 09:51:27<SeP>2024-07-20 20:46:48<SeP>2024-07-22 07:42:09<SeP>2024-07-23 18:37:30<SeP>2024-07-25 05:32:51<SeP>2024-07-26 16:28:12<SeP>2024-07-28 03:23:33<SeP>2024-07-29 14:18:54<SeP>2024-07-31 01:14:15<SeP>2024-08-01 12:09:36<SeP>2024-08-02 23:04:57<SeP>2024-08-04 10:00:18<SeP>2024-08-05 20:55:39<SeP>2024-08-07 07:51:00<SeP>2024-08-08 18:46:21<SeP>2024-08-10 05:41:42<SeP>2024-08-11 16:37:03<SeP>2024-08-13 03:32:24<SeP>2024-08-14 14:27:45<SeP>2024-08-16 01:23:06<SeP>2024-08-17 12:18:27<SeP>2024-08-18 23:13:48<SeP>2024-08-20 10:09:09<SeP>2024-08-21 21:04:30<SeP>2024-08-23 07:59:51<SeP>2024-08-24 18:55:12<SeP>2024-08-26 05:50:33<SeP>2024-08-27 16:45:54<SeP>2024-08-29 03:41:15<SeP>2024-08-30 14:36:36<SeP>2024-09-01 01:31:57<SeP>2024-09-02 12:27:18<SeP>2024-09-03 23:22:39<SeP>2024-09-05 10:18:00<SeP>2024-09-06 21:13:21<SeP>2024-09-08 08:08:42<SeP>2024-09-09 19:04:03<SeP>2024-09-11 05:59:24<SeP>2024-09-12 16:54:45<SeP>2024-09-14 03:50:06<SeP>2024-09-15 14:45:27<SeP>2024-09-17 01:40:48<SeP>2024-09-18 12:36:09<SeP>2024-09-19 23:31:30<SeP>2024-09-21 10:26:51<SeP>2024-09-22 21:22:12<SeP>2024-09-24 08:17:33<SeP>2024-09-25 19:12:54<SeP>2024-09-27 06:08:15<SeP>2024-09-28 17:03:36<SeP>2024-09-30 03:58:57<SeP>2024-10-01 14:54:18<SeP>2024-10-03 01:49:39<SeP>2024-10-04 12:45:00<SeP>2024-10-05 23:40:21<SeP>2024-10-07 10:35:42<SeP>2024-10-08 21:31:03<SeP>2024-10-10 08:26:24<SeP>2024-10-11 19:21:45<SeP>2024-10-13 06:17:06<SeP>2024-10-14 17:12:27<SeP>2024-10-16 04:07:48<SeP>2024-10-17 15:03:09<SeP>2024-10-19 01:58:30<SeP>2024-10-20 12:53:51<SeP>2024-10-21 23:49:12<SeP>2024-10-23 10:44:33<SeP>2024-10-24 21:39:54<SeP>2024-10-26 08:35:15<SeP>2024-10-27 19:30:36<SeP>2024-10-29 06:25:57<SeP>2024-10-30 17:21:18<SeP>2024-11-01 04:16:39<SeP>2024-11-02 15:12:00<SeP>2024-11-04 01:07:21<SeP>2024-11-05 12:02:42<SeP>2024-11-06 22:58:03<SeP>2024-11-08 09:53:24<SeP>2024-11-09 20:48:45<SeP>2024-11-11 07:44:06<SeP>2024-11-12 18:39:27<SeP>2024-11-14 05:34:48<SeP>2024-11-15 16:30:09<SeP>2024-11-17 03:25:30<SeP>2024-11-18 14:20:51<SeP>2024-11-20 01:16:12<SeP>2024-11-21 12:11:33<SeP>2024-11-22 23:06:54<SeP>2024-11-24 10:02:15<SeP>2024-11-25 20:57:36<SeP>2024-11-27 07:52:57<SeP>2024-11-28 18:48:18<SeP>2024-11-30 05:43:39<SeP>2024-12-01 16:39:00<SeP>2024-12-03 03:34:21<SeP>2024-12-04 14:29:42<SeP>2024-12-06 01:25:03<SeP>2024-12-07 12:20:24<SeP>2024-12-08 23:15:45<SeP>2024-12-10 10:11:06<SeP>2024-12-11 21:06:27<SeP>2024-12-13 08:01:48<SeP>2024-12-14 18:57:09<SeP>2024-12-16 05:52:30<SeP>2024-12-17 16:47:51<SeP>2024-12-19 03:43:12<SeP>2024-12-20 14:38:33<SeP>2024-12-22 01:33:54<SeP>2024-12-23 12:29:15<SeP>2024-12-24 23:24:36<SeP>2024-12-26 10:19:57<SeP>2024-12-27 21:15:18<SeP>2024-12-29 08:10:39<SeP>2024-12-30 19:06:00<SeP>2025-01-01 06:01:21<SeP>2025-01-02 16:56:42<SeP>2025-01-04 03:52:03<SeP>2025-01-05 14:47:24<SeP>2025-01-07 01:42:45<SeP>2025-01-08 12:38:06<SeP>2025-01-09 23:33:27<SeP>2025-01-11 10:28:48<SeP>2025-01-12 21:24:09<SeP>2025-01-14 08:19:30<SeP>2025-01-15 19:14:51<SeP>2025-01-17 06:10:12<SeP>2025-01-18 17:05:33<SeP>2025-01-20 04:00:54<SeP>2025-01-21 14:56:15<SeP>2025-01-23 01:51:36<SeP>2025-01-24 12:46:57<SeP>2025-01-25 23:42:18<SeP>2025-01-27 10:37:39<SeP>2025-01-28 21:33:00<SeP>2025-01-30 08:28:21<SeP>2025-01-31 19:23:42<SeP>2025-02-02 06:19:03<SeP>2025-02-03 17:14:24<SeP>2025-02-05 04:09:45<SeP>2025-02-06 15:05:06<SeP>2025-02-08 02:00:27<SeP>2025-02-09 12:55:48<SeP>2025-02-10 23:51:09<SeP>2025-02-12 10:46:30<SeP>2025-02-13 21:41:51<SeP>2025-02-15 08:37:12<SeP>2025-02-16 19:32:33<SeP>2025-02-18 06:27:54<SeP>2025-02-19 17:23:15<SeP>2025-02-21 04:18:36<SeP>2025-02-22 15:13:57<SeP>2025-02-24 02:09:18<SeP>2025-02-25 13:04:39";
  const itemLabel       = "Attacks";
  const itemData        = "153<SeP>614<SeP>1030<SeP>670<SeP>562<SeP>209<SeP>6968<SeP>518<SeP>9450<SeP>679<SeP>395<SeP>1131<SeP>1237<SeP>288<SeP>152<SeP>460<SeP>111<SeP>761<SeP>284<SeP>5090<SeP>7615<SeP>6700<SeP>7992<SeP>6068<SeP>243<SeP>311<SeP>430<SeP>128<SeP>1361<SeP>4914<SeP>72<SeP>386<SeP>373<SeP>366<SeP>3862<SeP>10043<SeP>8768<SeP>10132<SeP>8602<SeP>6039<SeP>6883<SeP>7375<SeP>8602<SeP>9024<SeP>7884<SeP>7099<SeP>9008<SeP>9081<SeP>7932<SeP>7651<SeP>5307<SeP>9698<SeP>9918<SeP>6486<SeP>7676<SeP>8205<SeP>9382<SeP>18025<SeP>16808<SeP>8944<SeP>11601<SeP>6644<SeP>7624<SeP>8370<SeP>9744<SeP>8282<SeP>6535<SeP>6916<SeP>6288<SeP>6617<SeP>4166<SeP>5883<SeP>5736<SeP>6445<SeP>5714<SeP>7776<SeP>4570<SeP>5782<SeP>5616<SeP>6416<SeP>4785<SeP>7198<SeP>4680<SeP>5824<SeP>6441<SeP>5772<SeP>5944<SeP>5176<SeP>11303<SeP>20285<SeP>35367<SeP>7944<SeP>9418<SeP>5264<SeP>6606<SeP>12782<SeP>6085<SeP>4467<SeP>5224<SeP>4822<SeP>6186<SeP>5458<SeP>7924<SeP>6232<SeP>6425<SeP>5023<SeP>4675<SeP>7974<SeP>8506<SeP>7480<SeP>7543<SeP>3781<SeP>8071<SeP>10510<SeP>7362<SeP>2744<SeP>5382<SeP>7270<SeP>7403<SeP>5725<SeP>8352<SeP>8030<SeP>2128<SeP>2742<SeP>935<SeP>1655<SeP>2550<SeP>1765<SeP>847<SeP>1249<SeP>1007<SeP>1276<SeP>1319<SeP>1152<SeP>1195<SeP>745<SeP>1188<SeP>1069<SeP>1191<SeP>1411<SeP>1053<SeP>1711<SeP>2135<SeP>1534<SeP>12506<SeP>6380<SeP>10095<SeP>7351<SeP>5505<SeP>10681<SeP>9080<SeP>8739<SeP>8853<SeP>12405<SeP>9142<SeP>9520<SeP>10939<SeP>13943<SeP>9462<SeP>8404<SeP>4510<SeP>6490<SeP>8477<SeP>23806<SeP>6451<SeP>7972<SeP>10692<SeP>17168<SeP>6676<SeP>6571<SeP>6685<SeP>6427<SeP>21532<SeP>13058<SeP>7524<SeP>11172<SeP>5162<SeP>6859<SeP>5000<SeP>15835<SeP>5778<SeP>5262<SeP>14845<SeP>7500<SeP>8362<SeP>6990<SeP>5543<SeP>3536<SeP>7079<SeP>7512<SeP>4618<SeP>6496<SeP>8144<SeP>6005<SeP>19142<SeP>7893<SeP>6524<SeP>5890<SeP>8527<SeP>10475<SeP>7203<SeP>2636<SeP>4765<SeP>4876<SeP>3902<SeP>4736<SeP>2665<SeP>635<SeP>586<SeP>156<SeP>617<SeP>580<SeP>765<SeP>354<SeP>651<SeP>1320<SeP>1238<SeP>3123<SeP>22919<SeP>562<SeP>4467<SeP>3232<SeP>2490<SeP>7860<SeP>2758<SeP>4169<SeP>3000<SeP>3256<SeP>2933<SeP>3296<SeP>4073<SeP>2478<SeP>2301<SeP>3441<SeP>1866<SeP>2060<SeP>1886<SeP>1328<SeP>1414<SeP>1389<SeP>856<SeP>1864<SeP>8736<SeP>19206<SeP>2002<SeP>4206<SeP>3490<SeP>2088<SeP>4176<SeP>2033<SeP>2260<SeP>3440<SeP>2861<SeP>3409<SeP>2112<SeP>3725<SeP>2741<SeP>5278<SeP>5574<SeP>4608<SeP>3974<SeP>2578<SeP>2723<SeP>4825<SeP>3791<SeP>9967<SeP>5105<SeP>3304<SeP>2512<SeP>2106<SeP>4910<SeP>3529<SeP>3850<SeP>2512<SeP>2943<SeP>5945<SeP>3347<SeP>5947<SeP>3738<SeP>5453<SeP>4349<SeP>6804<SeP>4134<SeP>16320<SeP>11751<SeP>12489<SeP>1754<SeP>2297<SeP>4887<SeP>3390<SeP>3980<SeP>3855<SeP>5005<SeP>3954<SeP>4516<SeP>4246<SeP>3546<SeP>3308<SeP>1264<SeP>1963<SeP>2875<SeP>2867<SeP>2244<SeP>4224<SeP>3768<SeP>4236<SeP>3280<SeP>4000<SeP>3387<SeP>3613<SeP>3050<SeP>7087<SeP>8048<SeP>5315<SeP>4373<SeP>5353<SeP>4299<SeP>3386<SeP>4345<SeP>3822<SeP>6599<SeP>4999<SeP>5005<SeP>2497<SeP>762<SeP>1465<SeP>1501<SeP>1231<SeP>1230<SeP>1942<SeP>1307<SeP>1427<SeP>3402<SeP>4665<SeP>6552<SeP>34252<SeP>4920<SeP>4428<SeP>20517<SeP>8771<SeP>5175<SeP>6085<SeP>4501<SeP>24165<SeP>4994<SeP>5135<SeP>4700<SeP>5250<SeP>6305<SeP>29467<SeP>4915<SeP>3893<SeP>4021<SeP>3762<SeP>5692<SeP>4683<SeP>3666<SeP>2635<SeP>4477<SeP>5703<SeP>4708<SeP>18035<SeP>5306<SeP>6167<SeP>5453<SeP>1556<SeP>3212<SeP>4015<SeP>5035<SeP>3782<SeP>3559<SeP>2810<SeP>3530<SeP>3013<SeP>4337<SeP>5349<SeP>8236<SeP>10692<SeP>8288<SeP>9373<SeP>7626<SeP>7494<SeP>4950<SeP>5174<SeP>3766<SeP>25438<SeP>3734<SeP>3166<SeP>3925<SeP>10700<SeP>5566<SeP>4942<SeP>3517<SeP>4837<SeP>3467<SeP>5059<SeP>9531<SeP>8345<SeP>4185<SeP>2733";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:55:21<SeP>2023-07-28 21:50:42<SeP>2023-07-30 08:46:03<SeP>2023-07-31 19:41:24<SeP>2023-08-02 06:36:45<SeP>2023-08-03 17:32:06<SeP>2023-08-05 04:27:27<SeP>2023-08-06 15:22:48<SeP>2023-08-08 02:18:09<SeP>2023-08-09 13:13:30<SeP>2023-08-11 00:08:51<SeP>2023-08-12 11:04:12<SeP>2023-08-13 21:59:33<SeP>2023-08-15 08:54:54<SeP>2023-08-16 19:50:15<SeP>2023-08-18 06:45:36<SeP>2023-08-19 17:40:57<SeP>2023-08-21 04:36:18<SeP>2023-08-22 15:31:39<SeP>2023-08-24 02:27:00<SeP>2023-08-25 13:22:21<SeP>2023-08-27 00:17:42<SeP>2023-08-28 11:13:03<SeP>2023-08-29 22:08:24<SeP>2023-08-31 09:03:45<SeP>2023-09-01 19:59:06<SeP>2023-09-03 06:54:27<SeP>2023-09-04 17:49:48<SeP>2023-09-06 04:45:09<SeP>2023-09-07 15:40:30<SeP>2023-09-09 02:35:51<SeP>2023-09-10 13:31:12<SeP>2023-09-12 00:26:33<SeP>2023-09-13 11:21:54<SeP>2023-09-14 22:17:15<SeP>2023-09-16 09:12:36<SeP>2023-09-17 20:07:57<SeP>2023-09-19 07:03:18<SeP>2023-09-20 17:58:39<SeP>2023-09-22 04:54:00<SeP>2023-09-23 15:49:21<SeP>2023-09-25 02:44:42<SeP>2023-09-26 13:40:03<SeP>2023-09-28 00:35:24<SeP>2023-09-29 11:30:45<SeP>2023-09-30 22:26:06<SeP>2023-10-02 09:21:27<SeP>2023-10-03 20:16:48<SeP>2023-10-05 07:12:09<SeP>2023-10-06 18:07:30<SeP>2023-10-08 05:02:51<SeP>2023-10-09 15:58:12<SeP>2023-10-11 02:53:33<SeP>2023-10-12 13:48:54<SeP>2023-10-14 00:44:15<SeP>2023-10-15 11:39:36<SeP>2023-10-16 22:34:57<SeP>2023-10-18 09:30:18<SeP>2023-10-19 20:25:39<SeP>2023-10-21 07:21:00<SeP>2023-10-22 18:16:21<SeP>2023-10-24 05:11:42<SeP>2023-10-25 16:07:03<SeP>2023-10-27 03:02:24<SeP>2023-10-28 13:57:45<SeP>2023-10-30 00:53:06<SeP>2023-10-31 11:48:27<SeP>2023-11-01 22:43:48<SeP>2023-11-03 09:39:09<SeP>2023-11-04 20:34:30<SeP>2023-11-06 06:29:51<SeP>2023-11-07 17:25:12<SeP>2023-11-09 04:20:33<SeP>2023-11-10 15:15:54<SeP>2023-11-12 02:11:15<SeP>2023-11-13 13:06:36<SeP>2023-11-15 00:01:57<SeP>2023-11-16 10:57:18<SeP>2023-11-17 21:52:39<SeP>2023-11-19 08:48:00<SeP>2023-11-20 19:43:21<SeP>2023-11-22 06:38:42<SeP>2023-11-23 17:34:03<SeP>2023-11-25 04:29:24<SeP>2023-11-26 15:24:45<SeP>2023-11-28 02:20:06<SeP>2023-11-29 13:15:27<SeP>2023-12-01 00:10:48<SeP>2023-12-02 11:06:09<SeP>2023-12-03 22:01:30<SeP>2023-12-05 08:56:51<SeP>2023-12-06 19:52:12<SeP>2023-12-08 06:47:33<SeP>2023-12-09 17:42:54<SeP>2023-12-11 04:38:15<SeP>2023-12-12 15:33:36<SeP>2023-12-14 02:28:57<SeP>2023-12-15 13:24:18<SeP>2023-12-17 00:19:39<SeP>2023-12-18 11:15:00<SeP>2023-12-19 22:10:21<SeP>2023-12-21 09:05:42<SeP>2023-12-22 20:01:03<SeP>2023-12-24 06:56:24<SeP>2023-12-25 17:51:45<SeP>2023-12-27 04:47:06<SeP>2023-12-28 15:42:27<SeP>2023-12-30 02:37:48<SeP>2023-12-31 13:33:09<SeP>2024-01-02 00:28:30<SeP>2024-01-03 11:23:51<SeP>2024-01-04 22:19:12<SeP>2024-01-06 09:14:33<SeP>2024-01-07 20:09:54<SeP>2024-01-09 07:05:15<SeP>2024-01-10 18:00:36<SeP>2024-01-12 04:55:57<SeP>2024-01-13 15:51:18<SeP>2024-01-15 02:46:39<SeP>2024-01-16 13:42:00<SeP>2024-01-18 00:37:21<SeP>2024-01-19 11:32:42<SeP>2024-01-20 22:28:03<SeP>2024-01-22 09:23:24<SeP>2024-01-23 20:18:45<SeP>2024-01-25 07:14:06<SeP>2024-01-26 18:09:27<SeP>2024-01-28 05:04:48<SeP>2024-01-29 16:00:09<SeP>2024-01-31 02:55:30<SeP>2024-02-01 13:50:51<SeP>2024-02-03 00:46:12<SeP>2024-02-04 11:41:33<SeP>2024-02-05 22:36:54<SeP>2024-02-07 09:32:15<SeP>2024-02-08 20:27:36<SeP>2024-02-10 07:22:57<SeP>2024-02-11 18:18:18<SeP>2024-02-13 05:13:39<SeP>2024-02-14 16:09:00<SeP>2024-02-16 03:04:21<SeP>2024-02-17 13:59:42<SeP>2024-02-19 00:55:03<SeP>2024-02-20 11:50:24<SeP>2024-02-21 22:45:45<SeP>2024-02-23 09:41:06<SeP>2024-02-24 20:36:27<SeP>2024-02-26 07:31:48<SeP>2024-02-27 18:27:09<SeP>2024-02-29 05:22:30<SeP>2024-03-01 16:17:51<SeP>2024-03-03 03:13:12<SeP>2024-03-04 14:08:33<SeP>2024-03-06 01:03:54<SeP>2024-03-07 11:59:15<SeP>2024-03-08 22:54:36<SeP>2024-03-10 10:49:57<SeP>2024-03-11 21:45:18<SeP>2024-03-13 08:40:39<SeP>2024-03-14 19:36:00<SeP>2024-03-16 06:31:21<SeP>2024-03-17 17:26:42<SeP>2024-03-19 04:22:03<SeP>2024-03-20 15:17:24<SeP>2024-03-22 02:12:45<SeP>2024-03-23 13:08:06<SeP>2024-03-25 00:03:27<SeP>2024-03-26 10:58:48<SeP>2024-03-27 21:54:09<SeP>2024-03-29 08:49:30<SeP>2024-03-30 19:44:51<SeP>2024-04-01 06:40:12<SeP>2024-04-02 17:35:33<SeP>2024-04-04 04:30:54<SeP>2024-04-05 15:26:15<SeP>2024-04-07 02:21:36<SeP>2024-04-08 13:16:57<SeP>2024-04-10 00:12:18<SeP>2024-04-11 11:07:39<SeP>2024-04-12 22:03:00<SeP>2024-04-14 08:58:21<SeP>2024-04-15 19:53:42<SeP>2024-04-17 06:49:03<SeP>2024-04-18 17:44:24<SeP>2024-04-20 04:39:45<SeP>2024-04-21 15:35:06<SeP>2024-04-23 02:30:27<SeP>2024-04-24 13:25:48<SeP>2024-04-26 00:21:09<SeP>2024-04-27 11:16:30<SeP>2024-04-28 22:11:51<SeP>2024-04-30 09:07:12<SeP>2024-05-01 20:02:33<SeP>2024-05-03 06:57:54<SeP>2024-05-04 17:53:15<SeP>2024-05-06 04:48:36<SeP>2024-05-07 15:43:57<SeP>2024-05-09 02:39:18<SeP>2024-05-10 13:34:39<SeP>2024-05-12 00:30:00<SeP>2024-05-13 11:25:21<SeP>2024-05-14 22:20:42<SeP>2024-05-16 09:16:03<SeP>2024-05-17 20:11:24<SeP>2024-05-19 07:06:45<SeP>2024-05-20 18:02:06<SeP>2024-05-22 04:57:27<SeP>2024-05-23 15:52:48<SeP>2024-05-25 02:48:09<SeP>2024-05-26 13:43:30<SeP>2024-05-28 00:38:51<SeP>2024-05-29 11:34:12<SeP>2024-05-30 22:29:33<SeP>2024-06-01 09:24:54<SeP>2024-06-02 20:20:15<SeP>2024-06-04 07:15:36<SeP>2024-06-05 18:10:57<SeP>2024-06-07 05:06:18<SeP>2024-06-08 16:01:39<SeP>2024-06-10 02:57:00<SeP>2024-06-11 13:52:21<SeP>2024-06-13 00:47:42<SeP>2024-06-14 11:43:03<SeP>2024-06-15 22:38:24<SeP>2024-06-17 09:33:45<SeP>2024-06-18 20:29:06<SeP>2024-06-20 07:24:27<SeP>2024-06-21 18:19:48<SeP>2024-06-23 05:15:09<SeP>2024-06-24 16:10:30<SeP>2024-06-26 03:05:51<SeP>2024-06-27 14:01:12<SeP>2024-06-29 00:56:33<SeP>2024-06-30 11:51:54<SeP>2024-07-01 22:47:15<SeP>2024-07-03 09:42:36<SeP>2024-07-04 20:37:57<SeP>2024-07-06 07:33:18<SeP>2024-07-07 18:28:39<SeP>2024-07-09 05:24:00<SeP>2024-07-10 16:19:21<SeP>2024-07-12 03:14:42<SeP>2024-07-13 14:10:03<SeP>2024-07-15 01:05:24<SeP>2024-07-16 12:00:45<SeP>2024-07-17 22:56:06<SeP>2024-07-19 09:51:27<SeP>2024-07-20 20:46:48<SeP>2024-07-22 07:42:09<SeP>2024-07-23 18:37:30<SeP>2024-07-25 05:32:51<SeP>2024-07-26 16:28:12<SeP>2024-07-28 03:23:33<SeP>2024-07-29 14:18:54<SeP>2024-07-31 01:14:15<SeP>2024-08-01 12:09:36<SeP>2024-08-02 23:04:57<SeP>2024-08-04 10:00:18<SeP>2024-08-05 20:55:39<SeP>2024-08-07 07:51:00<SeP>2024-08-08 18:46:21<SeP>2024-08-10 05:41:42<SeP>2024-08-11 16:37:03<SeP>2024-08-13 03:32:24<SeP>2024-08-14 14:27:45<SeP>2024-08-16 01:23:06<SeP>2024-08-17 12:18:27<SeP>2024-08-18 23:13:48<SeP>2024-08-20 10:09:09<SeP>2024-08-21 21:04:30<SeP>2024-08-23 07:59:51<SeP>2024-08-24 18:55:12<SeP>2024-08-26 05:50:33<SeP>2024-08-27 16:45:54<SeP>2024-08-29 03:41:15<SeP>2024-08-30 14:36:36<SeP>2024-09-01 01:31:57<SeP>2024-09-02 12:27:18<SeP>2024-09-03 23:22:39<SeP>2024-09-05 10:18:00<SeP>2024-09-06 21:13:21<SeP>2024-09-08 08:08:42<SeP>2024-09-09 19:04:03<SeP>2024-09-11 05:59:24<SeP>2024-09-12 16:54:45<SeP>2024-09-14 03:50:06<SeP>2024-09-15 14:45:27<SeP>2024-09-17 01:40:48<SeP>2024-09-18 12:36:09<SeP>2024-09-19 23:31:30<SeP>2024-09-21 10:26:51<SeP>2024-09-22 21:22:12<SeP>2024-09-24 08:17:33<SeP>2024-09-25 19:12:54<SeP>2024-09-27 06:08:15<SeP>2024-09-28 17:03:36<SeP>2024-09-30 03:58:57<SeP>2024-10-01 14:54:18<SeP>2024-10-03 01:49:39<SeP>2024-10-04 12:45:00<SeP>2024-10-05 23:40:21<SeP>2024-10-07 10:35:42<SeP>2024-10-08 21:31:03<SeP>2024-10-10 08:26:24<SeP>2024-10-11 19:21:45<SeP>2024-10-13 06:17:06<SeP>2024-10-14 17:12:27<SeP>2024-10-16 04:07:48<SeP>2024-10-17 15:03:09<SeP>2024-10-19 01:58:30<SeP>2024-10-20 12:53:51<SeP>2024-10-21 23:49:12<SeP>2024-10-23 10:44:33<SeP>2024-10-24 21:39:54<SeP>2024-10-26 08:35:15<SeP>2024-10-27 19:30:36<SeP>2024-10-29 06:25:57<SeP>2024-10-30 17:21:18<SeP>2024-11-01 04:16:39<SeP>2024-11-02 15:12:00<SeP>2024-11-04 01:07:21<SeP>2024-11-05 12:02:42<SeP>2024-11-06 22:58:03<SeP>2024-11-08 09:53:24<SeP>2024-11-09 20:48:45<SeP>2024-11-11 07:44:06<SeP>2024-11-12 18:39:27<SeP>2024-11-14 05:34:48<SeP>2024-11-15 16:30:09<SeP>2024-11-17 03:25:30<SeP>2024-11-18 14:20:51<SeP>2024-11-20 01:16:12<SeP>2024-11-21 12:11:33<SeP>2024-11-22 23:06:54<SeP>2024-11-24 10:02:15<SeP>2024-11-25 20:57:36<SeP>2024-11-27 07:52:57<SeP>2024-11-28 18:48:18<SeP>2024-11-30 05:43:39<SeP>2024-12-01 16:39:00<SeP>2024-12-03 03:34:21<SeP>2024-12-04 14:29:42<SeP>2024-12-06 01:25:03<SeP>2024-12-07 12:20:24<SeP>2024-12-08 23:15:45<SeP>2024-12-10 10:11:06<SeP>2024-12-11 21:06:27<SeP>2024-12-13 08:01:48<SeP>2024-12-14 18:57:09<SeP>2024-12-16 05:52:30<SeP>2024-12-17 16:47:51<SeP>2024-12-19 03:43:12<SeP>2024-12-20 14:38:33<SeP>2024-12-22 01:33:54<SeP>2024-12-23 12:29:15<SeP>2024-12-24 23:24:36<SeP>2024-12-26 10:19:57<SeP>2024-12-27 21:15:18<SeP>2024-12-29 08:10:39<SeP>2024-12-30 19:06:00<SeP>2025-01-01 06:01:21<SeP>2025-01-02 16:56:42<SeP>2025-01-04 03:52:03<SeP>2025-01-05 14:47:24<SeP>2025-01-07 01:42:45<SeP>2025-01-08 12:38:06<SeP>2025-01-09 23:33:27<SeP>2025-01-11 10:28:48<SeP>2025-01-12 21:24:09<SeP>2025-01-14 08:19:30<SeP>2025-01-15 19:14:51<SeP>2025-01-17 06:10:12<SeP>2025-01-18 17:05:33<SeP>2025-01-20 04:00:54<SeP>2025-01-21 14:56:15<SeP>2025-01-23 01:51:36<SeP>2025-01-24 12:46:57<SeP>2025-01-25 23:42:18<SeP>2025-01-27 10:37:39<SeP>2025-01-28 21:33:00<SeP>2025-01-30 08:28:21<SeP>2025-01-31 19:23:42<SeP>2025-02-02 06:19:03<SeP>2025-02-03 17:14:24<SeP>2025-02-05 04:09:45<SeP>2025-02-06 15:05:06<SeP>2025-02-08 02:00:27<SeP>2025-02-09 12:55:48<SeP>2025-02-10 23:51:09<SeP>2025-02-12 10:46:30<SeP>2025-02-13 21:41:51<SeP>2025-02-15 08:37:12<SeP>2025-02-16 19:32:33<SeP>2025-02-18 06:27:54<SeP>2025-02-19 17:23:15<SeP>2025-02-21 04:18:36<SeP>2025-02-22 15:13:57<SeP>2025-02-24 02:09:18<SeP>2025-02-25 13:04:39";
  const item1Label       = "Escaneos";
  const item1Data        = "765<SeP>1482<SeP>1378<SeP>1443<SeP>1253<SeP>1697<SeP>957<SeP>950<SeP>1189<SeP>3358<SeP>2013<SeP>2270<SeP>2509<SeP>1795<SeP>734<SeP>943<SeP>1385<SeP>2716<SeP>1211<SeP>1801<SeP>1358<SeP>912<SeP>897<SeP>1405<SeP>831<SeP>930<SeP>827<SeP>2147<SeP>2301<SeP>952<SeP>833<SeP>1397<SeP>1254<SeP>841<SeP>2993<SeP>1798<SeP>2489<SeP>1859<SeP>1663<SeP>1417<SeP>1299<SeP>1777<SeP>1777<SeP>2240<SeP>1474<SeP>1650<SeP>1584<SeP>1742<SeP>1759<SeP>1771<SeP>1797<SeP>1692<SeP>1642<SeP>3112<SeP>1738<SeP>1389<SeP>1769<SeP>2068<SeP>2314<SeP>1438<SeP>3370<SeP>1859<SeP>1371<SeP>1620<SeP>1309<SeP>1791<SeP>1589<SeP>1561<SeP>1195<SeP>1451<SeP>1177<SeP>2356<SeP>1234<SeP>1103<SeP>1296<SeP>2399<SeP>7088<SeP>1269<SeP>1263<SeP>1396<SeP>2268<SeP>1255<SeP>1439<SeP>6403<SeP>1436<SeP>1600<SeP>966<SeP>2709<SeP>1834<SeP>1087<SeP>1027<SeP>1051<SeP>1080<SeP>2708<SeP>1266<SeP>1125<SeP>1638<SeP>3947<SeP>5340<SeP>1242<SeP>928<SeP>913<SeP>967<SeP>937<SeP>974<SeP>1029<SeP>1830<SeP>3801<SeP>1758<SeP>1221<SeP>1397<SeP>536<SeP>1402<SeP>1320<SeP>1192<SeP>858<SeP>2057<SeP>1331<SeP>1242<SeP>1029<SeP>957<SeP>1146<SeP>735<SeP>832<SeP>841<SeP>798<SeP>891<SeP>1108<SeP>868<SeP>719<SeP>914<SeP>841<SeP>900<SeP>649<SeP>822<SeP>844<SeP>895<SeP>894<SeP>867<SeP>785<SeP>791<SeP>947<SeP>863<SeP>810<SeP>895<SeP>895<SeP>924<SeP>1110<SeP>971<SeP>569<SeP>800<SeP>871<SeP>842<SeP>1266<SeP>876<SeP>1121<SeP>1085<SeP>1226<SeP>956<SeP>829<SeP>1057<SeP>809<SeP>866<SeP>1075<SeP>802<SeP>971<SeP>898<SeP>1103<SeP>893<SeP>1068<SeP>997<SeP>1047<SeP>1083<SeP>936<SeP>879<SeP>2134<SeP>1168<SeP>1221<SeP>1064<SeP>939<SeP>1158<SeP>957<SeP>908<SeP>734<SeP>880<SeP>1020<SeP>1009<SeP>807<SeP>1063<SeP>1290<SeP>1101<SeP>1135<SeP>1305<SeP>1177<SeP>1276<SeP>1264<SeP>1292<SeP>1503<SeP>1682<SeP>1729<SeP>1319<SeP>737<SeP>890<SeP>1142<SeP>1003<SeP>554<SeP>845<SeP>854<SeP>982<SeP>878<SeP>5700<SeP>3088<SeP>1918<SeP>1357<SeP>992<SeP>809<SeP>1067<SeP>853<SeP>1010<SeP>1036<SeP>1123<SeP>1014<SeP>1284<SeP>2167<SeP>981<SeP>1199<SeP>1263<SeP>1263<SeP>1126<SeP>1051<SeP>965<SeP>1091<SeP>1102<SeP>959<SeP>1118<SeP>1013<SeP>1214<SeP>856<SeP>1384<SeP>985<SeP>1195<SeP>995<SeP>1325<SeP>1245<SeP>1192<SeP>1536<SeP>1276<SeP>1093<SeP>1069<SeP>1278<SeP>1912<SeP>1317<SeP>1938<SeP>1778<SeP>1397<SeP>1984<SeP>1448<SeP>1169<SeP>1123<SeP>1422<SeP>1037<SeP>1571<SeP>1258<SeP>1222<SeP>1719<SeP>1677<SeP>1299<SeP>1552<SeP>1179<SeP>1413<SeP>1183<SeP>1105<SeP>1218<SeP>1118<SeP>1337<SeP>1173<SeP>1251<SeP>1440<SeP>1841<SeP>1404<SeP>1090<SeP>1700<SeP>1448<SeP>1135<SeP>1094<SeP>912<SeP>862<SeP>894<SeP>1023<SeP>999<SeP>1824<SeP>1037<SeP>1136<SeP>1160<SeP>781<SeP>1011<SeP>994<SeP>1308<SeP>861<SeP>883<SeP>1149<SeP>1278<SeP>1608<SeP>1363<SeP>1063<SeP>1013<SeP>1133<SeP>1807<SeP>1003<SeP>1170<SeP>976<SeP>1343<SeP>1347<SeP>859<SeP>1162<SeP>1087<SeP>974<SeP>886<SeP>901<SeP>1357<SeP>1278<SeP>1697<SeP>1559<SeP>1322<SeP>946<SeP>1110<SeP>1123<SeP>1099<SeP>1134<SeP>1140<SeP>1062<SeP>1001<SeP>1207<SeP>1433<SeP>1428<SeP>1552<SeP>1470<SeP>1287<SeP>1503<SeP>1390<SeP>1529<SeP>1334<SeP>1480<SeP>1208<SeP>1801<SeP>1260<SeP>1474<SeP>1627<SeP>1296<SeP>1453<SeP>1337<SeP>1124<SeP>1318<SeP>1405<SeP>1680<SeP>1311<SeP>1339<SeP>1180<SeP>1465<SeP>1144<SeP>1311<SeP>1404<SeP>1700<SeP>1797<SeP>1265<SeP>678<SeP>1309<SeP>1720<SeP>1422<SeP>1274<SeP>1392<SeP>1051<SeP>1387<SeP>1328<SeP>1324<SeP>1437<SeP>1431<SeP>1649<SeP>1552<SeP>1476<SeP>1594<SeP>1381<SeP>1319<SeP>1716<SeP>1516<SeP>1325<SeP>1162<SeP>1575<SeP>1774<SeP>1848<SeP>1771<SeP>1830<SeP>1519<SeP>1604<SeP>1560<SeP>1546<SeP>1536<SeP>1591<SeP>1698<SeP>1916";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "153<SeP>614<SeP>1030<SeP>670<SeP>562<SeP>209<SeP>6968<SeP>518<SeP>9450<SeP>679<SeP>395<SeP>1131<SeP>1237<SeP>288<SeP>152<SeP>460<SeP>111<SeP>761<SeP>284<SeP>5090<SeP>7615<SeP>6700<SeP>7992<SeP>6068<SeP>243<SeP>311<SeP>430<SeP>128<SeP>1361<SeP>4914<SeP>72<SeP>386<SeP>373<SeP>366<SeP>3862<SeP>10043<SeP>8768<SeP>10132<SeP>8602<SeP>6039<SeP>6883<SeP>7375<SeP>8602<SeP>9024<SeP>7884<SeP>7099<SeP>9008<SeP>9081<SeP>7932<SeP>7651<SeP>5307<SeP>9698<SeP>9918<SeP>6486<SeP>7676<SeP>8205<SeP>9382<SeP>18025<SeP>16808<SeP>8944<SeP>11601<SeP>6644<SeP>7624<SeP>8370<SeP>9744<SeP>8282<SeP>6535<SeP>6916<SeP>6288<SeP>6617<SeP>4166<SeP>5883<SeP>5736<SeP>6445<SeP>5714<SeP>7776<SeP>4570<SeP>5782<SeP>5616<SeP>6416<SeP>4785<SeP>7198<SeP>4680<SeP>5824<SeP>6441<SeP>5772<SeP>5944<SeP>5176<SeP>11303<SeP>20285<SeP>35367<SeP>7944<SeP>9418<SeP>5264<SeP>6606<SeP>12782<SeP>6085<SeP>4467<SeP>5224<SeP>4822<SeP>6186<SeP>5458<SeP>7924<SeP>6232<SeP>6425<SeP>5023<SeP>4675<SeP>7974<SeP>8506<SeP>7480<SeP>7543<SeP>3781<SeP>8071<SeP>10510<SeP>7362<SeP>2744<SeP>5382<SeP>7270<SeP>7403<SeP>5725<SeP>8352<SeP>8030<SeP>2128<SeP>2742<SeP>935<SeP>1655<SeP>2550<SeP>1765<SeP>847<SeP>1249<SeP>1007<SeP>1276<SeP>1319<SeP>1152<SeP>1195<SeP>745<SeP>1188<SeP>1069<SeP>1191<SeP>1411<SeP>1053<SeP>1711<SeP>2135<SeP>1534<SeP>12506<SeP>6380<SeP>10095<SeP>7351<SeP>5505<SeP>10681<SeP>9080<SeP>8739<SeP>8853<SeP>12405<SeP>9142<SeP>9520<SeP>10939<SeP>13943<SeP>9462<SeP>8404<SeP>4510<SeP>6490<SeP>8477<SeP>23806<SeP>6451<SeP>7972<SeP>10692<SeP>17168<SeP>6676<SeP>6571<SeP>6685<SeP>6427<SeP>21532<SeP>13058<SeP>7524<SeP>11172<SeP>5162<SeP>6859<SeP>5000<SeP>15835<SeP>5778<SeP>5262<SeP>14845<SeP>7500<SeP>8362<SeP>6990<SeP>5543<SeP>3536<SeP>7079<SeP>7512<SeP>4618<SeP>6496<SeP>8144<SeP>6005<SeP>19142<SeP>7893<SeP>6524<SeP>5890<SeP>8527<SeP>10475<SeP>7203<SeP>2636<SeP>4765<SeP>4876<SeP>3902<SeP>4736<SeP>2665<SeP>635<SeP>586<SeP>156<SeP>617<SeP>580<SeP>765<SeP>354<SeP>651<SeP>1320<SeP>1238<SeP>3123<SeP>22919<SeP>562<SeP>4467<SeP>3232<SeP>2490<SeP>7860<SeP>2758<SeP>4169<SeP>3000<SeP>3256<SeP>2933<SeP>3296<SeP>4073<SeP>2478<SeP>2301<SeP>3441<SeP>1866<SeP>2060<SeP>1886<SeP>1328<SeP>1414<SeP>1389<SeP>856<SeP>1864<SeP>8736<SeP>19206<SeP>2002<SeP>4206<SeP>3490<SeP>2088<SeP>4176<SeP>2033<SeP>2260<SeP>3440<SeP>2861<SeP>3409<SeP>2112<SeP>3725<SeP>2741<SeP>5278<SeP>5574<SeP>4608<SeP>3974<SeP>2578<SeP>2723<SeP>4825<SeP>3791<SeP>9967<SeP>5105<SeP>3304<SeP>2512<SeP>2106<SeP>4910<SeP>3529<SeP>3850<SeP>2512<SeP>2943<SeP>5945<SeP>3347<SeP>5947<SeP>3738<SeP>5453<SeP>4349<SeP>6804<SeP>4134<SeP>16320<SeP>11751<SeP>12489<SeP>1754<SeP>2297<SeP>4887<SeP>3390<SeP>3980<SeP>3855<SeP>5005<SeP>3954<SeP>4516<SeP>4246<SeP>3546<SeP>3308<SeP>1264<SeP>1963<SeP>2875<SeP>2867<SeP>2244<SeP>4224<SeP>3768<SeP>4236<SeP>3280<SeP>4000<SeP>3387<SeP>3613<SeP>3050<SeP>7087<SeP>8048<SeP>5315<SeP>4373<SeP>5353<SeP>4299<SeP>3386<SeP>4345<SeP>3822<SeP>6599<SeP>4999<SeP>5005<SeP>2497<SeP>762<SeP>1465<SeP>1501<SeP>1231<SeP>1230<SeP>1942<SeP>1307<SeP>1427<SeP>3402<SeP>4665<SeP>6552<SeP>34252<SeP>4920<SeP>4428<SeP>20517<SeP>8771<SeP>5175<SeP>6085<SeP>4501<SeP>24165<SeP>4994<SeP>5135<SeP>4700<SeP>5250<SeP>6305<SeP>29467<SeP>4915<SeP>3893<SeP>4021<SeP>3762<SeP>5692<SeP>4683<SeP>3666<SeP>2635<SeP>4477<SeP>5703<SeP>4708<SeP>18035<SeP>5306<SeP>6167<SeP>5453<SeP>1556<SeP>3212<SeP>4015<SeP>5035<SeP>3782<SeP>3559<SeP>2810<SeP>3530<SeP>3013<SeP>4337<SeP>5349<SeP>8236<SeP>10692<SeP>8288<SeP>9373<SeP>7626<SeP>7494<SeP>4950<SeP>5174<SeP>3766<SeP>25438<SeP>3734<SeP>3166<SeP>3925<SeP>10700<SeP>5566<SeP>4942<SeP>3517<SeP>4837<SeP>3467<SeP>5059<SeP>9531<SeP>8345<SeP>4185<SeP>2733";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:55:21<SeP>2023-07-28 21:50:42<SeP>2023-07-30 08:46:03<SeP>2023-07-31 19:41:24<SeP>2023-08-02 06:36:45<SeP>2023-08-03 17:32:06<SeP>2023-08-05 04:27:27<SeP>2023-08-06 15:22:48<SeP>2023-08-08 02:18:09<SeP>2023-08-09 13:13:30<SeP>2023-08-11 00:08:51<SeP>2023-08-12 11:04:12<SeP>2023-08-13 21:59:33<SeP>2023-08-15 08:54:54<SeP>2023-08-16 19:50:15<SeP>2023-08-18 06:45:36<SeP>2023-08-19 17:40:57<SeP>2023-08-21 04:36:18<SeP>2023-08-22 15:31:39<SeP>2023-08-24 02:27:00<SeP>2023-08-25 13:22:21<SeP>2023-08-27 00:17:42<SeP>2023-08-28 11:13:03<SeP>2023-08-29 22:08:24<SeP>2023-08-31 09:03:45<SeP>2023-09-01 19:59:06<SeP>2023-09-03 06:54:27<SeP>2023-09-04 17:49:48<SeP>2023-09-06 04:45:09<SeP>2023-09-07 15:40:30<SeP>2023-09-09 02:35:51<SeP>2023-09-10 13:31:12<SeP>2023-09-12 00:26:33<SeP>2023-09-13 11:21:54<SeP>2023-09-14 22:17:15<SeP>2023-09-16 09:12:36<SeP>2023-09-17 20:07:57<SeP>2023-09-19 07:03:18<SeP>2023-09-20 17:58:39<SeP>2023-09-22 04:54:00<SeP>2023-09-23 15:49:21<SeP>2023-09-25 02:44:42<SeP>2023-09-26 13:40:03<SeP>2023-09-28 00:35:24<SeP>2023-09-29 11:30:45<SeP>2023-09-30 22:26:06<SeP>2023-10-02 09:21:27<SeP>2023-10-03 20:16:48<SeP>2023-10-05 07:12:09<SeP>2023-10-06 18:07:30<SeP>2023-10-08 05:02:51<SeP>2023-10-09 15:58:12<SeP>2023-10-11 02:53:33<SeP>2023-10-12 13:48:54<SeP>2023-10-14 00:44:15<SeP>2023-10-15 11:39:36<SeP>2023-10-16 22:34:57<SeP>2023-10-18 09:30:18<SeP>2023-10-19 20:25:39<SeP>2023-10-21 07:21:00<SeP>2023-10-22 18:16:21<SeP>2023-10-24 05:11:42<SeP>2023-10-25 16:07:03<SeP>2023-10-27 03:02:24<SeP>2023-10-28 13:57:45<SeP>2023-10-30 00:53:06<SeP>2023-10-31 11:48:27<SeP>2023-11-01 22:43:48<SeP>2023-11-03 09:39:09<SeP>2023-11-04 20:34:30<SeP>2023-11-06 06:29:51<SeP>2023-11-07 17:25:12<SeP>2023-11-09 04:20:33<SeP>2023-11-10 15:15:54<SeP>2023-11-12 02:11:15<SeP>2023-11-13 13:06:36<SeP>2023-11-15 00:01:57<SeP>2023-11-16 10:57:18<SeP>2023-11-17 21:52:39<SeP>2023-11-19 08:48:00<SeP>2023-11-20 19:43:21<SeP>2023-11-22 06:38:42<SeP>2023-11-23 17:34:03<SeP>2023-11-25 04:29:24<SeP>2023-11-26 15:24:45<SeP>2023-11-28 02:20:06<SeP>2023-11-29 13:15:27<SeP>2023-12-01 00:10:48<SeP>2023-12-02 11:06:09<SeP>2023-12-03 22:01:30<SeP>2023-12-05 08:56:51<SeP>2023-12-06 19:52:12<SeP>2023-12-08 06:47:33<SeP>2023-12-09 17:42:54<SeP>2023-12-11 04:38:15<SeP>2023-12-12 15:33:36<SeP>2023-12-14 02:28:57<SeP>2023-12-15 13:24:18<SeP>2023-12-17 00:19:39<SeP>2023-12-18 11:15:00<SeP>2023-12-19 22:10:21<SeP>2023-12-21 09:05:42<SeP>2023-12-22 20:01:03<SeP>2023-12-24 06:56:24<SeP>2023-12-25 17:51:45<SeP>2023-12-27 04:47:06<SeP>2023-12-28 15:42:27<SeP>2023-12-30 02:37:48<SeP>2023-12-31 13:33:09<SeP>2024-01-02 00:28:30<SeP>2024-01-03 11:23:51<SeP>2024-01-04 22:19:12<SeP>2024-01-06 09:14:33<SeP>2024-01-07 20:09:54<SeP>2024-01-09 07:05:15<SeP>2024-01-10 18:00:36<SeP>2024-01-12 04:55:57<SeP>2024-01-13 15:51:18<SeP>2024-01-15 02:46:39<SeP>2024-01-16 13:42:00<SeP>2024-01-18 00:37:21<SeP>2024-01-19 11:32:42<SeP>2024-01-20 22:28:03<SeP>2024-01-22 09:23:24<SeP>2024-01-23 20:18:45<SeP>2024-01-25 07:14:06<SeP>2024-01-26 18:09:27<SeP>2024-01-28 05:04:48<SeP>2024-01-29 16:00:09<SeP>2024-01-31 02:55:30<SeP>2024-02-01 13:50:51<SeP>2024-02-03 00:46:12<SeP>2024-02-04 11:41:33<SeP>2024-02-05 22:36:54<SeP>2024-02-07 09:32:15<SeP>2024-02-08 20:27:36<SeP>2024-02-10 07:22:57<SeP>2024-02-11 18:18:18<SeP>2024-02-13 05:13:39<SeP>2024-02-14 16:09:00<SeP>2024-02-16 03:04:21<SeP>2024-02-17 13:59:42<SeP>2024-02-19 00:55:03<SeP>2024-02-20 11:50:24<SeP>2024-02-21 22:45:45<SeP>2024-02-23 09:41:06<SeP>2024-02-24 20:36:27<SeP>2024-02-26 07:31:48<SeP>2024-02-27 18:27:09<SeP>2024-02-29 05:22:30<SeP>2024-03-01 16:17:51<SeP>2024-03-03 03:13:12<SeP>2024-03-04 14:08:33<SeP>2024-03-06 01:03:54<SeP>2024-03-07 11:59:15<SeP>2024-03-08 22:54:36<SeP>2024-03-10 10:49:57<SeP>2024-03-11 21:45:18<SeP>2024-03-13 08:40:39<SeP>2024-03-14 19:36:00<SeP>2024-03-16 06:31:21<SeP>2024-03-17 17:26:42<SeP>2024-03-19 04:22:03<SeP>2024-03-20 15:17:24<SeP>2024-03-22 02:12:45<SeP>2024-03-23 13:08:06<SeP>2024-03-25 00:03:27<SeP>2024-03-26 10:58:48<SeP>2024-03-27 21:54:09<SeP>2024-03-29 08:49:30<SeP>2024-03-30 19:44:51<SeP>2024-04-01 06:40:12<SeP>2024-04-02 17:35:33<SeP>2024-04-04 04:30:54<SeP>2024-04-05 15:26:15<SeP>2024-04-07 02:21:36<SeP>2024-04-08 13:16:57<SeP>2024-04-10 00:12:18<SeP>2024-04-11 11:07:39<SeP>2024-04-12 22:03:00<SeP>2024-04-14 08:58:21<SeP>2024-04-15 19:53:42<SeP>2024-04-17 06:49:03<SeP>2024-04-18 17:44:24<SeP>2024-04-20 04:39:45<SeP>2024-04-21 15:35:06<SeP>2024-04-23 02:30:27<SeP>2024-04-24 13:25:48<SeP>2024-04-26 00:21:09<SeP>2024-04-27 11:16:30<SeP>2024-04-28 22:11:51<SeP>2024-04-30 09:07:12<SeP>2024-05-01 20:02:33<SeP>2024-05-03 06:57:54<SeP>2024-05-04 17:53:15<SeP>2024-05-06 04:48:36<SeP>2024-05-07 15:43:57<SeP>2024-05-09 02:39:18<SeP>2024-05-10 13:34:39<SeP>2024-05-12 00:30:00<SeP>2024-05-13 11:25:21<SeP>2024-05-14 22:20:42<SeP>2024-05-16 09:16:03<SeP>2024-05-17 20:11:24<SeP>2024-05-19 07:06:45<SeP>2024-05-20 18:02:06<SeP>2024-05-22 04:57:27<SeP>2024-05-23 15:52:48<SeP>2024-05-25 02:48:09<SeP>2024-05-26 13:43:30<SeP>2024-05-28 00:38:51<SeP>2024-05-29 11:34:12<SeP>2024-05-30 22:29:33<SeP>2024-06-01 09:24:54<SeP>2024-06-02 20:20:15<SeP>2024-06-04 07:15:36<SeP>2024-06-05 18:10:57<SeP>2024-06-07 05:06:18<SeP>2024-06-08 16:01:39<SeP>2024-06-10 02:57:00<SeP>2024-06-11 13:52:21<SeP>2024-06-13 00:47:42<SeP>2024-06-14 11:43:03<SeP>2024-06-15 22:38:24<SeP>2024-06-17 09:33:45<SeP>2024-06-18 20:29:06<SeP>2024-06-20 07:24:27<SeP>2024-06-21 18:19:48<SeP>2024-06-23 05:15:09<SeP>2024-06-24 16:10:30<SeP>2024-06-26 03:05:51<SeP>2024-06-27 14:01:12<SeP>2024-06-29 00:56:33<SeP>2024-06-30 11:51:54<SeP>2024-07-01 22:47:15<SeP>2024-07-03 09:42:36<SeP>2024-07-04 20:37:57<SeP>2024-07-06 07:33:18<SeP>2024-07-07 18:28:39<SeP>2024-07-09 05:24:00<SeP>2024-07-10 16:19:21<SeP>2024-07-12 03:14:42<SeP>2024-07-13 14:10:03<SeP>2024-07-15 01:05:24<SeP>2024-07-16 12:00:45<SeP>2024-07-17 22:56:06<SeP>2024-07-19 09:51:27<SeP>2024-07-20 20:46:48<SeP>2024-07-22 07:42:09<SeP>2024-07-23 18:37:30<SeP>2024-07-25 05:32:51<SeP>2024-07-26 16:28:12<SeP>2024-07-28 03:23:33<SeP>2024-07-29 14:18:54<SeP>2024-07-31 01:14:15<SeP>2024-08-01 12:09:36<SeP>2024-08-02 23:04:57<SeP>2024-08-04 10:00:18<SeP>2024-08-05 20:55:39<SeP>2024-08-07 07:51:00<SeP>2024-08-08 18:46:21<SeP>2024-08-10 05:41:42<SeP>2024-08-11 16:37:03<SeP>2024-08-13 03:32:24<SeP>2024-08-14 14:27:45<SeP>2024-08-16 01:23:06<SeP>2024-08-17 12:18:27<SeP>2024-08-18 23:13:48<SeP>2024-08-20 10:09:09<SeP>2024-08-21 21:04:30<SeP>2024-08-23 07:59:51<SeP>2024-08-24 18:55:12<SeP>2024-08-26 05:50:33<SeP>2024-08-27 16:45:54<SeP>2024-08-29 03:41:15<SeP>2024-08-30 14:36:36<SeP>2024-09-01 01:31:57<SeP>2024-09-02 12:27:18<SeP>2024-09-03 23:22:39<SeP>2024-09-05 10:18:00<SeP>2024-09-06 21:13:21<SeP>2024-09-08 08:08:42<SeP>2024-09-09 19:04:03<SeP>2024-09-11 05:59:24<SeP>2024-09-12 16:54:45<SeP>2024-09-14 03:50:06<SeP>2024-09-15 14:45:27<SeP>2024-09-17 01:40:48<SeP>2024-09-18 12:36:09<SeP>2024-09-19 23:31:30<SeP>2024-09-21 10:26:51<SeP>2024-09-22 21:22:12<SeP>2024-09-24 08:17:33<SeP>2024-09-25 19:12:54<SeP>2024-09-27 06:08:15<SeP>2024-09-28 17:03:36<SeP>2024-09-30 03:58:57<SeP>2024-10-01 14:54:18<SeP>2024-10-03 01:49:39<SeP>2024-10-04 12:45:00<SeP>2024-10-05 23:40:21<SeP>2024-10-07 10:35:42<SeP>2024-10-08 21:31:03<SeP>2024-10-10 08:26:24<SeP>2024-10-11 19:21:45<SeP>2024-10-13 06:17:06<SeP>2024-10-14 17:12:27<SeP>2024-10-16 04:07:48<SeP>2024-10-17 15:03:09<SeP>2024-10-19 01:58:30<SeP>2024-10-20 12:53:51<SeP>2024-10-21 23:49:12<SeP>2024-10-23 10:44:33<SeP>2024-10-24 21:39:54<SeP>2024-10-26 08:35:15<SeP>2024-10-27 19:30:36<SeP>2024-10-29 06:25:57<SeP>2024-10-30 17:21:18<SeP>2024-11-01 04:16:39<SeP>2024-11-02 15:12:00<SeP>2024-11-04 01:07:21<SeP>2024-11-05 12:02:42<SeP>2024-11-06 22:58:03<SeP>2024-11-08 09:53:24<SeP>2024-11-09 20:48:45<SeP>2024-11-11 07:44:06<SeP>2024-11-12 18:39:27<SeP>2024-11-14 05:34:48<SeP>2024-11-15 16:30:09<SeP>2024-11-17 03:25:30<SeP>2024-11-18 14:20:51<SeP>2024-11-20 01:16:12<SeP>2024-11-21 12:11:33<SeP>2024-11-22 23:06:54<SeP>2024-11-24 10:02:15<SeP>2024-11-25 20:57:36<SeP>2024-11-27 07:52:57<SeP>2024-11-28 18:48:18<SeP>2024-11-30 05:43:39<SeP>2024-12-01 16:39:00<SeP>2024-12-03 03:34:21<SeP>2024-12-04 14:29:42<SeP>2024-12-06 01:25:03<SeP>2024-12-07 12:20:24<SeP>2024-12-08 23:15:45<SeP>2024-12-10 10:11:06<SeP>2024-12-11 21:06:27<SeP>2024-12-13 08:01:48<SeP>2024-12-14 18:57:09<SeP>2024-12-16 05:52:30<SeP>2024-12-17 16:47:51<SeP>2024-12-19 03:43:12<SeP>2024-12-20 14:38:33<SeP>2024-12-22 01:33:54<SeP>2024-12-23 12:29:15<SeP>2024-12-24 23:24:36<SeP>2024-12-26 10:19:57<SeP>2024-12-27 21:15:18<SeP>2024-12-29 08:10:39<SeP>2024-12-30 19:06:00<SeP>2025-01-01 06:01:21<SeP>2025-01-02 16:56:42<SeP>2025-01-04 03:52:03<SeP>2025-01-05 14:47:24<SeP>2025-01-07 01:42:45<SeP>2025-01-08 12:38:06<SeP>2025-01-09 23:33:27<SeP>2025-01-11 10:28:48<SeP>2025-01-12 21:24:09<SeP>2025-01-14 08:19:30<SeP>2025-01-15 19:14:51<SeP>2025-01-17 06:10:12<SeP>2025-01-18 17:05:33<SeP>2025-01-20 04:00:54<SeP>2025-01-21 14:56:15<SeP>2025-01-23 01:51:36<SeP>2025-01-24 12:46:57<SeP>2025-01-25 23:42:18<SeP>2025-01-27 10:37:39<SeP>2025-01-28 21:33:00<SeP>2025-01-30 08:28:21<SeP>2025-01-31 19:23:42<SeP>2025-02-02 06:19:03<SeP>2025-02-03 17:14:24<SeP>2025-02-05 04:09:45<SeP>2025-02-06 15:05:06<SeP>2025-02-08 02:00:27<SeP>2025-02-09 12:55:48<SeP>2025-02-10 23:51:09<SeP>2025-02-12 10:46:30<SeP>2025-02-13 21:41:51<SeP>2025-02-15 08:37:12<SeP>2025-02-16 19:32:33<SeP>2025-02-18 06:27:54<SeP>2025-02-19 17:23:15<SeP>2025-02-21 04:18:36<SeP>2025-02-22 15:13:57<SeP>2025-02-24 02:09:18<SeP>2025-02-25 13:04:39";
  const itemLabel       = "Escaneos";
  const itemData        = "765<SeP>1482<SeP>1378<SeP>1443<SeP>1253<SeP>1697<SeP>957<SeP>950<SeP>1189<SeP>3358<SeP>2013<SeP>2270<SeP>2509<SeP>1795<SeP>734<SeP>943<SeP>1385<SeP>2716<SeP>1211<SeP>1801<SeP>1358<SeP>912<SeP>897<SeP>1405<SeP>831<SeP>930<SeP>827<SeP>2147<SeP>2301<SeP>952<SeP>833<SeP>1397<SeP>1254<SeP>841<SeP>2993<SeP>1798<SeP>2489<SeP>1859<SeP>1663<SeP>1417<SeP>1299<SeP>1777<SeP>1777<SeP>2240<SeP>1474<SeP>1650<SeP>1584<SeP>1742<SeP>1759<SeP>1771<SeP>1797<SeP>1692<SeP>1642<SeP>3112<SeP>1738<SeP>1389<SeP>1769<SeP>2068<SeP>2314<SeP>1438<SeP>3370<SeP>1859<SeP>1371<SeP>1620<SeP>1309<SeP>1791<SeP>1589<SeP>1561<SeP>1195<SeP>1451<SeP>1177<SeP>2356<SeP>1234<SeP>1103<SeP>1296<SeP>2399<SeP>7088<SeP>1269<SeP>1263<SeP>1396<SeP>2268<SeP>1255<SeP>1439<SeP>6403<SeP>1436<SeP>1600<SeP>966<SeP>2709<SeP>1834<SeP>1087<SeP>1027<SeP>1051<SeP>1080<SeP>2708<SeP>1266<SeP>1125<SeP>1638<SeP>3947<SeP>5340<SeP>1242<SeP>928<SeP>913<SeP>967<SeP>937<SeP>974<SeP>1029<SeP>1830<SeP>3801<SeP>1758<SeP>1221<SeP>1397<SeP>536<SeP>1402<SeP>1320<SeP>1192<SeP>858<SeP>2057<SeP>1331<SeP>1242<SeP>1029<SeP>957<SeP>1146<SeP>735<SeP>832<SeP>841<SeP>798<SeP>891<SeP>1108<SeP>868<SeP>719<SeP>914<SeP>841<SeP>900<SeP>649<SeP>822<SeP>844<SeP>895<SeP>894<SeP>867<SeP>785<SeP>791<SeP>947<SeP>863<SeP>810<SeP>895<SeP>895<SeP>924<SeP>1110<SeP>971<SeP>569<SeP>800<SeP>871<SeP>842<SeP>1266<SeP>876<SeP>1121<SeP>1085<SeP>1226<SeP>956<SeP>829<SeP>1057<SeP>809<SeP>866<SeP>1075<SeP>802<SeP>971<SeP>898<SeP>1103<SeP>893<SeP>1068<SeP>997<SeP>1047<SeP>1083<SeP>936<SeP>879<SeP>2134<SeP>1168<SeP>1221<SeP>1064<SeP>939<SeP>1158<SeP>957<SeP>908<SeP>734<SeP>880<SeP>1020<SeP>1009<SeP>807<SeP>1063<SeP>1290<SeP>1101<SeP>1135<SeP>1305<SeP>1177<SeP>1276<SeP>1264<SeP>1292<SeP>1503<SeP>1682<SeP>1729<SeP>1319<SeP>737<SeP>890<SeP>1142<SeP>1003<SeP>554<SeP>845<SeP>854<SeP>982<SeP>878<SeP>5700<SeP>3088<SeP>1918<SeP>1357<SeP>992<SeP>809<SeP>1067<SeP>853<SeP>1010<SeP>1036<SeP>1123<SeP>1014<SeP>1284<SeP>2167<SeP>981<SeP>1199<SeP>1263<SeP>1263<SeP>1126<SeP>1051<SeP>965<SeP>1091<SeP>1102<SeP>959<SeP>1118<SeP>1013<SeP>1214<SeP>856<SeP>1384<SeP>985<SeP>1195<SeP>995<SeP>1325<SeP>1245<SeP>1192<SeP>1536<SeP>1276<SeP>1093<SeP>1069<SeP>1278<SeP>1912<SeP>1317<SeP>1938<SeP>1778<SeP>1397<SeP>1984<SeP>1448<SeP>1169<SeP>1123<SeP>1422<SeP>1037<SeP>1571<SeP>1258<SeP>1222<SeP>1719<SeP>1677<SeP>1299<SeP>1552<SeP>1179<SeP>1413<SeP>1183<SeP>1105<SeP>1218<SeP>1118<SeP>1337<SeP>1173<SeP>1251<SeP>1440<SeP>1841<SeP>1404<SeP>1090<SeP>1700<SeP>1448<SeP>1135<SeP>1094<SeP>912<SeP>862<SeP>894<SeP>1023<SeP>999<SeP>1824<SeP>1037<SeP>1136<SeP>1160<SeP>781<SeP>1011<SeP>994<SeP>1308<SeP>861<SeP>883<SeP>1149<SeP>1278<SeP>1608<SeP>1363<SeP>1063<SeP>1013<SeP>1133<SeP>1807<SeP>1003<SeP>1170<SeP>976<SeP>1343<SeP>1347<SeP>859<SeP>1162<SeP>1087<SeP>974<SeP>886<SeP>901<SeP>1357<SeP>1278<SeP>1697<SeP>1559<SeP>1322<SeP>946<SeP>1110<SeP>1123<SeP>1099<SeP>1134<SeP>1140<SeP>1062<SeP>1001<SeP>1207<SeP>1433<SeP>1428<SeP>1552<SeP>1470<SeP>1287<SeP>1503<SeP>1390<SeP>1529<SeP>1334<SeP>1480<SeP>1208<SeP>1801<SeP>1260<SeP>1474<SeP>1627<SeP>1296<SeP>1453<SeP>1337<SeP>1124<SeP>1318<SeP>1405<SeP>1680<SeP>1311<SeP>1339<SeP>1180<SeP>1465<SeP>1144<SeP>1311<SeP>1404<SeP>1700<SeP>1797<SeP>1265<SeP>678<SeP>1309<SeP>1720<SeP>1422<SeP>1274<SeP>1392<SeP>1051<SeP>1387<SeP>1328<SeP>1324<SeP>1437<SeP>1431<SeP>1649<SeP>1552<SeP>1476<SeP>1594<SeP>1381<SeP>1319<SeP>1716<SeP>1516<SeP>1325<SeP>1162<SeP>1575<SeP>1774<SeP>1848<SeP>1771<SeP>1830<SeP>1519<SeP>1604<SeP>1560<SeP>1546<SeP>1536<SeP>1591<SeP>1698<SeP>1916";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:55:21<SeP>2023-07-28 21:50:42<SeP>2023-07-30 08:46:03<SeP>2023-07-31 19:41:24<SeP>2023-08-02 06:36:45<SeP>2023-08-03 17:32:06<SeP>2023-08-05 04:27:27<SeP>2023-08-06 15:22:48<SeP>2023-08-08 02:18:09<SeP>2023-08-09 13:13:30<SeP>2023-08-11 00:08:51<SeP>2023-08-12 11:04:12<SeP>2023-08-13 21:59:33<SeP>2023-08-15 08:54:54<SeP>2023-08-16 19:50:15<SeP>2023-08-18 06:45:36<SeP>2023-08-19 17:40:57<SeP>2023-08-21 04:36:18<SeP>2023-08-22 15:31:39<SeP>2023-08-24 02:27:00<SeP>2023-08-25 13:22:21<SeP>2023-08-27 00:17:42<SeP>2023-08-28 11:13:03<SeP>2023-08-29 22:08:24<SeP>2023-08-31 09:03:45<SeP>2023-09-01 19:59:06<SeP>2023-09-03 06:54:27<SeP>2023-09-04 17:49:48<SeP>2023-09-06 04:45:09<SeP>2023-09-07 15:40:30<SeP>2023-09-09 02:35:51<SeP>2023-09-10 13:31:12<SeP>2023-09-12 00:26:33<SeP>2023-09-13 11:21:54<SeP>2023-09-14 22:17:15<SeP>2023-09-16 09:12:36<SeP>2023-09-17 20:07:57<SeP>2023-09-19 07:03:18<SeP>2023-09-20 17:58:39<SeP>2023-09-22 04:54:00<SeP>2023-09-23 15:49:21<SeP>2023-09-25 02:44:42<SeP>2023-09-26 13:40:03<SeP>2023-09-28 00:35:24<SeP>2023-09-29 11:30:45<SeP>2023-09-30 22:26:06<SeP>2023-10-02 09:21:27<SeP>2023-10-03 20:16:48<SeP>2023-10-05 07:12:09<SeP>2023-10-06 18:07:30<SeP>2023-10-08 05:02:51<SeP>2023-10-09 15:58:12<SeP>2023-10-11 02:53:33<SeP>2023-10-12 13:48:54<SeP>2023-10-14 00:44:15<SeP>2023-10-15 11:39:36<SeP>2023-10-16 22:34:57<SeP>2023-10-18 09:30:18<SeP>2023-10-19 20:25:39<SeP>2023-10-21 07:21:00<SeP>2023-10-22 18:16:21<SeP>2023-10-24 05:11:42<SeP>2023-10-25 16:07:03<SeP>2023-10-27 03:02:24<SeP>2023-10-28 13:57:45<SeP>2023-10-30 00:53:06<SeP>2023-10-31 11:48:27<SeP>2023-11-01 22:43:48<SeP>2023-11-03 09:39:09<SeP>2023-11-04 20:34:30<SeP>2023-11-06 06:29:51<SeP>2023-11-07 17:25:12<SeP>2023-11-09 04:20:33<SeP>2023-11-10 15:15:54<SeP>2023-11-12 02:11:15<SeP>2023-11-13 13:06:36<SeP>2023-11-15 00:01:57<SeP>2023-11-16 10:57:18<SeP>2023-11-17 21:52:39<SeP>2023-11-19 08:48:00<SeP>2023-11-20 19:43:21<SeP>2023-11-22 06:38:42<SeP>2023-11-23 17:34:03<SeP>2023-11-25 04:29:24<SeP>2023-11-26 15:24:45<SeP>2023-11-28 02:20:06<SeP>2023-11-29 13:15:27<SeP>2023-12-01 00:10:48<SeP>2023-12-02 11:06:09<SeP>2023-12-03 22:01:30<SeP>2023-12-05 08:56:51<SeP>2023-12-06 19:52:12<SeP>2023-12-08 06:47:33<SeP>2023-12-09 17:42:54<SeP>2023-12-11 04:38:15<SeP>2023-12-12 15:33:36<SeP>2023-12-14 02:28:57<SeP>2023-12-15 13:24:18<SeP>2023-12-17 00:19:39<SeP>2023-12-18 11:15:00<SeP>2023-12-19 22:10:21<SeP>2023-12-21 09:05:42<SeP>2023-12-22 20:01:03<SeP>2023-12-24 06:56:24<SeP>2023-12-25 17:51:45<SeP>2023-12-27 04:47:06<SeP>2023-12-28 15:42:27<SeP>2023-12-30 02:37:48<SeP>2023-12-31 13:33:09<SeP>2024-01-02 00:28:30<SeP>2024-01-03 11:23:51<SeP>2024-01-04 22:19:12<SeP>2024-01-06 09:14:33<SeP>2024-01-07 20:09:54<SeP>2024-01-09 07:05:15<SeP>2024-01-10 18:00:36<SeP>2024-01-12 04:55:57<SeP>2024-01-13 15:51:18<SeP>2024-01-15 02:46:39<SeP>2024-01-16 13:42:00<SeP>2024-01-18 00:37:21<SeP>2024-01-19 11:32:42<SeP>2024-01-20 22:28:03<SeP>2024-01-22 09:23:24<SeP>2024-01-23 20:18:45<SeP>2024-01-25 07:14:06<SeP>2024-01-26 18:09:27<SeP>2024-01-28 05:04:48<SeP>2024-01-29 16:00:09<SeP>2024-01-31 02:55:30<SeP>2024-02-01 13:50:51<SeP>2024-02-03 00:46:12<SeP>2024-02-04 11:41:33<SeP>2024-02-05 22:36:54<SeP>2024-02-07 09:32:15<SeP>2024-02-08 20:27:36<SeP>2024-02-10 07:22:57<SeP>2024-02-11 18:18:18<SeP>2024-02-13 05:13:39<SeP>2024-02-14 16:09:00<SeP>2024-02-16 03:04:21<SeP>2024-02-17 13:59:42<SeP>2024-02-19 00:55:03<SeP>2024-02-20 11:50:24<SeP>2024-02-21 22:45:45<SeP>2024-02-23 09:41:06<SeP>2024-02-24 20:36:27<SeP>2024-02-26 07:31:48<SeP>2024-02-27 18:27:09<SeP>2024-02-29 05:22:30<SeP>2024-03-01 16:17:51<SeP>2024-03-03 03:13:12<SeP>2024-03-04 14:08:33<SeP>2024-03-06 01:03:54<SeP>2024-03-07 11:59:15<SeP>2024-03-08 22:54:36<SeP>2024-03-10 10:49:57<SeP>2024-03-11 21:45:18<SeP>2024-03-13 08:40:39<SeP>2024-03-14 19:36:00<SeP>2024-03-16 06:31:21<SeP>2024-03-17 17:26:42<SeP>2024-03-19 04:22:03<SeP>2024-03-20 15:17:24<SeP>2024-03-22 02:12:45<SeP>2024-03-23 13:08:06<SeP>2024-03-25 00:03:27<SeP>2024-03-26 10:58:48<SeP>2024-03-27 21:54:09<SeP>2024-03-29 08:49:30<SeP>2024-03-30 19:44:51<SeP>2024-04-01 06:40:12<SeP>2024-04-02 17:35:33<SeP>2024-04-04 04:30:54<SeP>2024-04-05 15:26:15<SeP>2024-04-07 02:21:36<SeP>2024-04-08 13:16:57<SeP>2024-04-10 00:12:18<SeP>2024-04-11 11:07:39<SeP>2024-04-12 22:03:00<SeP>2024-04-14 08:58:21<SeP>2024-04-15 19:53:42<SeP>2024-04-17 06:49:03<SeP>2024-04-18 17:44:24<SeP>2024-04-20 04:39:45<SeP>2024-04-21 15:35:06<SeP>2024-04-23 02:30:27<SeP>2024-04-24 13:25:48<SeP>2024-04-26 00:21:09<SeP>2024-04-27 11:16:30<SeP>2024-04-28 22:11:51<SeP>2024-04-30 09:07:12<SeP>2024-05-01 20:02:33<SeP>2024-05-03 06:57:54<SeP>2024-05-04 17:53:15<SeP>2024-05-06 04:48:36<SeP>2024-05-07 15:43:57<SeP>2024-05-09 02:39:18<SeP>2024-05-10 13:34:39<SeP>2024-05-12 00:30:00<SeP>2024-05-13 11:25:21<SeP>2024-05-14 22:20:42<SeP>2024-05-16 09:16:03<SeP>2024-05-17 20:11:24<SeP>2024-05-19 07:06:45<SeP>2024-05-20 18:02:06<SeP>2024-05-22 04:57:27<SeP>2024-05-23 15:52:48<SeP>2024-05-25 02:48:09<SeP>2024-05-26 13:43:30<SeP>2024-05-28 00:38:51<SeP>2024-05-29 11:34:12<SeP>2024-05-30 22:29:33<SeP>2024-06-01 09:24:54<SeP>2024-06-02 20:20:15<SeP>2024-06-04 07:15:36<SeP>2024-06-05 18:10:57<SeP>2024-06-07 05:06:18<SeP>2024-06-08 16:01:39<SeP>2024-06-10 02:57:00<SeP>2024-06-11 13:52:21<SeP>2024-06-13 00:47:42<SeP>2024-06-14 11:43:03<SeP>2024-06-15 22:38:24<SeP>2024-06-17 09:33:45<SeP>2024-06-18 20:29:06<SeP>2024-06-20 07:24:27<SeP>2024-06-21 18:19:48<SeP>2024-06-23 05:15:09<SeP>2024-06-24 16:10:30<SeP>2024-06-26 03:05:51<SeP>2024-06-27 14:01:12<SeP>2024-06-29 00:56:33<SeP>2024-06-30 11:51:54<SeP>2024-07-01 22:47:15<SeP>2024-07-03 09:42:36<SeP>2024-07-04 20:37:57<SeP>2024-07-06 07:33:18<SeP>2024-07-07 18:28:39<SeP>2024-07-09 05:24:00<SeP>2024-07-10 16:19:21<SeP>2024-07-12 03:14:42<SeP>2024-07-13 14:10:03<SeP>2024-07-15 01:05:24<SeP>2024-07-16 12:00:45<SeP>2024-07-17 22:56:06<SeP>2024-07-19 09:51:27<SeP>2024-07-20 20:46:48<SeP>2024-07-22 07:42:09<SeP>2024-07-23 18:37:30<SeP>2024-07-25 05:32:51<SeP>2024-07-26 16:28:12<SeP>2024-07-28 03:23:33<SeP>2024-07-29 14:18:54<SeP>2024-07-31 01:14:15<SeP>2024-08-01 12:09:36<SeP>2024-08-02 23:04:57<SeP>2024-08-04 10:00:18<SeP>2024-08-05 20:55:39<SeP>2024-08-07 07:51:00<SeP>2024-08-08 18:46:21<SeP>2024-08-10 05:41:42<SeP>2024-08-11 16:37:03<SeP>2024-08-13 03:32:24<SeP>2024-08-14 14:27:45<SeP>2024-08-16 01:23:06<SeP>2024-08-17 12:18:27<SeP>2024-08-18 23:13:48<SeP>2024-08-20 10:09:09<SeP>2024-08-21 21:04:30<SeP>2024-08-23 07:59:51<SeP>2024-08-24 18:55:12<SeP>2024-08-26 05:50:33<SeP>2024-08-27 16:45:54<SeP>2024-08-29 03:41:15<SeP>2024-08-30 14:36:36<SeP>2024-09-01 01:31:57<SeP>2024-09-02 12:27:18<SeP>2024-09-03 23:22:39<SeP>2024-09-05 10:18:00<SeP>2024-09-06 21:13:21<SeP>2024-09-08 08:08:42<SeP>2024-09-09 19:04:03<SeP>2024-09-11 05:59:24<SeP>2024-09-12 16:54:45<SeP>2024-09-14 03:50:06<SeP>2024-09-15 14:45:27<SeP>2024-09-17 01:40:48<SeP>2024-09-18 12:36:09<SeP>2024-09-19 23:31:30<SeP>2024-09-21 10:26:51<SeP>2024-09-22 21:22:12<SeP>2024-09-24 08:17:33<SeP>2024-09-25 19:12:54<SeP>2024-09-27 06:08:15<SeP>2024-09-28 17:03:36<SeP>2024-09-30 03:58:57<SeP>2024-10-01 14:54:18<SeP>2024-10-03 01:49:39<SeP>2024-10-04 12:45:00<SeP>2024-10-05 23:40:21<SeP>2024-10-07 10:35:42<SeP>2024-10-08 21:31:03<SeP>2024-10-10 08:26:24<SeP>2024-10-11 19:21:45<SeP>2024-10-13 06:17:06<SeP>2024-10-14 17:12:27<SeP>2024-10-16 04:07:48<SeP>2024-10-17 15:03:09<SeP>2024-10-19 01:58:30<SeP>2024-10-20 12:53:51<SeP>2024-10-21 23:49:12<SeP>2024-10-23 10:44:33<SeP>2024-10-24 21:39:54<SeP>2024-10-26 08:35:15<SeP>2024-10-27 19:30:36<SeP>2024-10-29 06:25:57<SeP>2024-10-30 17:21:18<SeP>2024-11-01 04:16:39<SeP>2024-11-02 15:12:00<SeP>2024-11-04 01:07:21<SeP>2024-11-05 12:02:42<SeP>2024-11-06 22:58:03<SeP>2024-11-08 09:53:24<SeP>2024-11-09 20:48:45<SeP>2024-11-11 07:44:06<SeP>2024-11-12 18:39:27<SeP>2024-11-14 05:34:48<SeP>2024-11-15 16:30:09<SeP>2024-11-17 03:25:30<SeP>2024-11-18 14:20:51<SeP>2024-11-20 01:16:12<SeP>2024-11-21 12:11:33<SeP>2024-11-22 23:06:54<SeP>2024-11-24 10:02:15<SeP>2024-11-25 20:57:36<SeP>2024-11-27 07:52:57<SeP>2024-11-28 18:48:18<SeP>2024-11-30 05:43:39<SeP>2024-12-01 16:39:00<SeP>2024-12-03 03:34:21<SeP>2024-12-04 14:29:42<SeP>2024-12-06 01:25:03<SeP>2024-12-07 12:20:24<SeP>2024-12-08 23:15:45<SeP>2024-12-10 10:11:06<SeP>2024-12-11 21:06:27<SeP>2024-12-13 08:01:48<SeP>2024-12-14 18:57:09<SeP>2024-12-16 05:52:30<SeP>2024-12-17 16:47:51<SeP>2024-12-19 03:43:12<SeP>2024-12-20 14:38:33<SeP>2024-12-22 01:33:54<SeP>2024-12-23 12:29:15<SeP>2024-12-24 23:24:36<SeP>2024-12-26 10:19:57<SeP>2024-12-27 21:15:18<SeP>2024-12-29 08:10:39<SeP>2024-12-30 19:06:00<SeP>2025-01-01 06:01:21<SeP>2025-01-02 16:56:42<SeP>2025-01-04 03:52:03<SeP>2025-01-05 14:47:24<SeP>2025-01-07 01:42:45<SeP>2025-01-08 12:38:06<SeP>2025-01-09 23:33:27<SeP>2025-01-11 10:28:48<SeP>2025-01-12 21:24:09<SeP>2025-01-14 08:19:30<SeP>2025-01-15 19:14:51<SeP>2025-01-17 06:10:12<SeP>2025-01-18 17:05:33<SeP>2025-01-20 04:00:54<SeP>2025-01-21 14:56:15<SeP>2025-01-23 01:51:36<SeP>2025-01-24 12:46:57<SeP>2025-01-25 23:42:18<SeP>2025-01-27 10:37:39<SeP>2025-01-28 21:33:00<SeP>2025-01-30 08:28:21<SeP>2025-01-31 19:23:42<SeP>2025-02-02 06:19:03<SeP>2025-02-03 17:14:24<SeP>2025-02-05 04:09:45<SeP>2025-02-06 15:05:06<SeP>2025-02-08 02:00:27<SeP>2025-02-09 12:55:48<SeP>2025-02-10 23:51:09<SeP>2025-02-12 10:46:30<SeP>2025-02-13 21:41:51<SeP>2025-02-15 08:37:12<SeP>2025-02-16 19:32:33<SeP>2025-02-18 06:27:54<SeP>2025-02-19 17:23:15<SeP>2025-02-21 04:18:36<SeP>2025-02-22 15:13:57<SeP>2025-02-24 02:09:18<SeP>2025-02-25 13:04:39";
  const itemLabel       = "Ataques";
  const itemData        = "153<SeP>614<SeP>1030<SeP>670<SeP>562<SeP>209<SeP>6968<SeP>518<SeP>9450<SeP>679<SeP>395<SeP>1131<SeP>1237<SeP>288<SeP>152<SeP>460<SeP>111<SeP>761<SeP>284<SeP>5090<SeP>7615<SeP>6700<SeP>7992<SeP>6068<SeP>243<SeP>311<SeP>430<SeP>128<SeP>1361<SeP>4914<SeP>72<SeP>386<SeP>373<SeP>366<SeP>3862<SeP>10043<SeP>8768<SeP>10132<SeP>8602<SeP>6039<SeP>6883<SeP>7375<SeP>8602<SeP>9024<SeP>7884<SeP>7099<SeP>9008<SeP>9081<SeP>7932<SeP>7651<SeP>5307<SeP>9698<SeP>9918<SeP>6486<SeP>7676<SeP>8205<SeP>9382<SeP>18025<SeP>16808<SeP>8944<SeP>11601<SeP>6644<SeP>7624<SeP>8370<SeP>9744<SeP>8282<SeP>6535<SeP>6916<SeP>6288<SeP>6617<SeP>4166<SeP>5883<SeP>5736<SeP>6445<SeP>5714<SeP>7776<SeP>4570<SeP>5782<SeP>5616<SeP>6416<SeP>4785<SeP>7198<SeP>4680<SeP>5824<SeP>6441<SeP>5772<SeP>5944<SeP>5176<SeP>11303<SeP>20285<SeP>35367<SeP>7944<SeP>9418<SeP>5264<SeP>6606<SeP>12782<SeP>6085<SeP>4467<SeP>5224<SeP>4822<SeP>6186<SeP>5458<SeP>7924<SeP>6232<SeP>6425<SeP>5023<SeP>4675<SeP>7974<SeP>8506<SeP>7480<SeP>7543<SeP>3781<SeP>8071<SeP>10510<SeP>7362<SeP>2744<SeP>5382<SeP>7270<SeP>7403<SeP>5725<SeP>8352<SeP>8030<SeP>2128<SeP>2742<SeP>935<SeP>1655<SeP>2550<SeP>1765<SeP>847<SeP>1249<SeP>1007<SeP>1276<SeP>1319<SeP>1152<SeP>1195<SeP>745<SeP>1188<SeP>1069<SeP>1191<SeP>1411<SeP>1053<SeP>1711<SeP>2135<SeP>1534<SeP>12506<SeP>6380<SeP>10095<SeP>7351<SeP>5505<SeP>10681<SeP>9080<SeP>8739<SeP>8853<SeP>12405<SeP>9142<SeP>9520<SeP>10939<SeP>13943<SeP>9462<SeP>8404<SeP>4510<SeP>6490<SeP>8477<SeP>23806<SeP>6451<SeP>7972<SeP>10692<SeP>17168<SeP>6676<SeP>6571<SeP>6685<SeP>6427<SeP>21532<SeP>13058<SeP>7524<SeP>11172<SeP>5162<SeP>6859<SeP>5000<SeP>15835<SeP>5778<SeP>5262<SeP>14845<SeP>7500<SeP>8362<SeP>6990<SeP>5543<SeP>3536<SeP>7079<SeP>7512<SeP>4618<SeP>6496<SeP>8144<SeP>6005<SeP>19142<SeP>7893<SeP>6524<SeP>5890<SeP>8527<SeP>10475<SeP>7203<SeP>2636<SeP>4765<SeP>4876<SeP>3902<SeP>4736<SeP>2665<SeP>635<SeP>586<SeP>156<SeP>617<SeP>580<SeP>765<SeP>354<SeP>651<SeP>1320<SeP>1238<SeP>3123<SeP>22919<SeP>562<SeP>4467<SeP>3232<SeP>2490<SeP>7860<SeP>2758<SeP>4169<SeP>3000<SeP>3256<SeP>2933<SeP>3296<SeP>4073<SeP>2478<SeP>2301<SeP>3441<SeP>1866<SeP>2060<SeP>1886<SeP>1328<SeP>1414<SeP>1389<SeP>856<SeP>1864<SeP>8736<SeP>19206<SeP>2002<SeP>4206<SeP>3490<SeP>2088<SeP>4176<SeP>2033<SeP>2260<SeP>3440<SeP>2861<SeP>3409<SeP>2112<SeP>3725<SeP>2741<SeP>5278<SeP>5574<SeP>4608<SeP>3974<SeP>2578<SeP>2723<SeP>4825<SeP>3791<SeP>9967<SeP>5105<SeP>3304<SeP>2512<SeP>2106<SeP>4910<SeP>3529<SeP>3850<SeP>2512<SeP>2943<SeP>5945<SeP>3347<SeP>5947<SeP>3738<SeP>5453<SeP>4349<SeP>6804<SeP>4134<SeP>16320<SeP>11751<SeP>12489<SeP>1754<SeP>2297<SeP>4887<SeP>3390<SeP>3980<SeP>3855<SeP>5005<SeP>3954<SeP>4516<SeP>4246<SeP>3546<SeP>3308<SeP>1264<SeP>1963<SeP>2875<SeP>2867<SeP>2244<SeP>4224<SeP>3768<SeP>4236<SeP>3280<SeP>4000<SeP>3387<SeP>3613<SeP>3050<SeP>7087<SeP>8048<SeP>5315<SeP>4373<SeP>5353<SeP>4299<SeP>3386<SeP>4345<SeP>3822<SeP>6599<SeP>4999<SeP>5005<SeP>2497<SeP>762<SeP>1465<SeP>1501<SeP>1231<SeP>1230<SeP>1942<SeP>1307<SeP>1427<SeP>3402<SeP>4665<SeP>6552<SeP>34252<SeP>4920<SeP>4428<SeP>20517<SeP>8771<SeP>5175<SeP>6085<SeP>4501<SeP>24165<SeP>4994<SeP>5135<SeP>4700<SeP>5250<SeP>6305<SeP>29467<SeP>4915<SeP>3893<SeP>4021<SeP>3762<SeP>5692<SeP>4683<SeP>3666<SeP>2635<SeP>4477<SeP>5703<SeP>4708<SeP>18035<SeP>5306<SeP>6167<SeP>5453<SeP>1556<SeP>3212<SeP>4015<SeP>5035<SeP>3782<SeP>3559<SeP>2810<SeP>3530<SeP>3013<SeP>4337<SeP>5349<SeP>8236<SeP>10692<SeP>8288<SeP>9373<SeP>7626<SeP>7494<SeP>4950<SeP>5174<SeP>3766<SeP>25438<SeP>3734<SeP>3166<SeP>3925<SeP>10700<SeP>5566<SeP>4942<SeP>3517<SeP>4837<SeP>3467<SeP>5059<SeP>9531<SeP>8345<SeP>4185<SeP>2733";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "692359<SeP>362901<SeP>206065<SeP>179321<SeP>110215<SeP>87711<SeP>83296<SeP>80399<SeP>67985<SeP>66515";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "295809<SeP>41421<SeP>40202<SeP>35458<SeP>14409<SeP>10830<SeP>7783<SeP>7461<SeP>7124<SeP>6994";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "396550<SeP>327443<SeP>203058<SeP>139119<SeP>95806<SeP>80686<SeP>80587<SeP>69569<SeP>58732<SeP>58469";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "362262<SeP>259550<SeP>235481<SeP>143847<SeP>66906<SeP>59517<SeP>56417<SeP>52442<SeP>41617<SeP>35893";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "155560<SeP>53132<SeP>40495<SeP>32233<SeP>21906<SeP>12748<SeP>10738<SeP>8979<SeP>7614<SeP>7441";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "349514<SeP>258785<SeP>121941<SeP>79921<SeP>55442<SeP>48779<SeP>46535<SeP>30550<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "692359<SeP>362901<SeP>206065<SeP>179321<SeP>110215<SeP>87711<SeP>83296<SeP>80399<SeP>67985<SeP>66515";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "295809<SeP>41421<SeP>40202<SeP>35458<SeP>14409<SeP>10830<SeP>7783<SeP>7461<SeP>7124<SeP>6994";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "396550<SeP>327443<SeP>203058<SeP>139119<SeP>95806<SeP>80686<SeP>80587<SeP>69569<SeP>58732<SeP>58469";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "362262<SeP>259550<SeP>235481<SeP>143847<SeP>66906<SeP>59517<SeP>56417<SeP>52442<SeP>41617<SeP>35893";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "155560<SeP>53132<SeP>40495<SeP>32233<SeP>21906<SeP>12748<SeP>10738<SeP>8979<SeP>7614<SeP>7441";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "349514<SeP>258785<SeP>121941<SeP>79921<SeP>55442<SeP>48779<SeP>46535<SeP>30550<SeP>29324<SeP>26846";
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
