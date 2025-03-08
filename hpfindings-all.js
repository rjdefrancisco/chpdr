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
  document.getElementById("last-updated").innerHTML = "2025-3-8";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.5";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.5";
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
  const metricData    = "2847404";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "556374";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2291030";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140472";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1437575";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "853455";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54422";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "250486";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "602969";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43703";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2847404";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "556374";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2291030";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140472";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1437575";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "853455";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54422";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "250486";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "602969";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43703";
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
  const incomingData = "2847404<SeP>556374<SeP>2291030<SeP>140472";
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
  const incomingData = "2291030<SeP>1437575<SeP>853455<SeP>54422";
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
  const incomingData = "853455<SeP>250486<SeP>602969<SeP>43703";
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
  const incomingData = "2561189<SeP>258183<SeP>2303006";
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
  const incomingData = "388203<SeP>149<SeP>388054<SeP>229";
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
  const incomingData = "2847404<SeP>556374<SeP>2291030<SeP>140472";
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
  const incomingData = "2291030<SeP>1437575<SeP>853455<SeP>54422";
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
  const incomingData = "853455<SeP>250486<SeP>602969<SeP>43703";
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
  const incomingData = "2561189<SeP>258183<SeP>2303006";
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
  const incomingData = "388203<SeP>149<SeP>388054<SeP>229";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>admin 3245gs5662d34<SeP>root root<SeP>admin admin<SeP>root qwerty<SeP>root broadguam1<SeP>oracle 3245gs5662d34<SeP>root 123456";
  const column3Data   = "221498<SeP>203021<SeP>12732<SeP>12464<SeP>9789<SeP>9455<SeP>6449<SeP>5593<SeP>4633<SeP>3503";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4";
  const column2Data  = "212874<SeP>43151<SeP>912<SeP>485<SeP>464<SeP>445<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2409742<SeP>437662";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>admin 3245gs5662d34<SeP>root root<SeP>admin admin<SeP>root qwerty<SeP>root broadguam1<SeP>oracle 3245gs5662d34<SeP>root 123456";
  const column3Data   = "221498<SeP>203021<SeP>12732<SeP>12464<SeP>9789<SeP>9455<SeP>6449<SeP>5593<SeP>4633<SeP>3503";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4";
  const column2Data  = "212874<SeP>43151<SeP>912<SeP>485<SeP>464<SeP>445<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2409742<SeP>437662";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-8";

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
        "name": "traffic between 2023-07-26 and 2025-03-06"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          397601,50
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
        "name": "scans between 2023-07-26 and 2025-03-06"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          229012,30,
          397601,50
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
        "name": "attacks between 2023-07-26 and 2025-03-06"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168589,23,
          397601,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-8";

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
        "name": "tráfico entre 2023-07-26 y 2025-03-06"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          397601,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-06"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          229012,30,
          397601,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-06"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168589,23,
          397601,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:27:45<SeP>2023-07-28 22:55:30<SeP>2023-07-30 10:23:15<SeP>2023-07-31 21:51:00<SeP>2023-08-02 09:18:45<SeP>2023-08-03 20:46:30<SeP>2023-08-05 08:14:15<SeP>2023-08-06 19:42:00<SeP>2023-08-08 07:09:45<SeP>2023-08-09 18:37:30<SeP>2023-08-11 06:05:15<SeP>2023-08-12 17:33:00<SeP>2023-08-14 05:00:45<SeP>2023-08-15 16:28:30<SeP>2023-08-17 03:56:15<SeP>2023-08-18 15:24:00<SeP>2023-08-20 02:51:45<SeP>2023-08-21 14:19:30<SeP>2023-08-23 01:47:15<SeP>2023-08-24 13:15:00<SeP>2023-08-26 00:42:45<SeP>2023-08-27 12:10:30<SeP>2023-08-28 23:38:15<SeP>2023-08-30 11:06:00<SeP>2023-08-31 22:33:45<SeP>2023-09-02 10:01:30<SeP>2023-09-03 21:29:15<SeP>2023-09-05 08:57:00<SeP>2023-09-06 20:24:45<SeP>2023-09-08 07:52:30<SeP>2023-09-09 19:20:15<SeP>2023-09-11 06:48:00<SeP>2023-09-12 18:15:45<SeP>2023-09-14 05:43:30<SeP>2023-09-15 17:11:15<SeP>2023-09-17 04:39:00<SeP>2023-09-18 16:06:45<SeP>2023-09-20 03:34:30<SeP>2023-09-21 15:02:15<SeP>2023-09-23 02:30:00<SeP>2023-09-24 13:57:45<SeP>2023-09-26 01:25:30<SeP>2023-09-27 12:53:15<SeP>2023-09-29 00:21:00<SeP>2023-09-30 11:48:45<SeP>2023-10-01 23:16:30<SeP>2023-10-03 10:44:15<SeP>2023-10-04 22:12:00<SeP>2023-10-06 09:39:45<SeP>2023-10-07 21:07:30<SeP>2023-10-09 08:35:15<SeP>2023-10-10 20:03:00<SeP>2023-10-12 07:30:45<SeP>2023-10-13 18:58:30<SeP>2023-10-15 06:26:15<SeP>2023-10-16 17:54:00<SeP>2023-10-18 05:21:45<SeP>2023-10-19 16:49:30<SeP>2023-10-21 04:17:15<SeP>2023-10-22 15:45:00<SeP>2023-10-24 03:12:45<SeP>2023-10-25 14:40:30<SeP>2023-10-27 02:08:15<SeP>2023-10-28 13:36:00<SeP>2023-10-30 01:03:45<SeP>2023-10-31 12:31:30<SeP>2023-11-01 23:59:15<SeP>2023-11-03 11:27:00<SeP>2023-11-04 22:54:45<SeP>2023-11-06 09:22:30<SeP>2023-11-07 20:50:15<SeP>2023-11-09 08:18:00<SeP>2023-11-10 19:45:45<SeP>2023-11-12 07:13:30<SeP>2023-11-13 18:41:15<SeP>2023-11-15 06:09:00<SeP>2023-11-16 17:36:45<SeP>2023-11-18 05:04:30<SeP>2023-11-19 16:32:15<SeP>2023-11-21 04:00:00<SeP>2023-11-22 15:27:45<SeP>2023-11-24 02:55:30<SeP>2023-11-25 14:23:15<SeP>2023-11-27 01:51:00<SeP>2023-11-28 13:18:45<SeP>2023-11-30 00:46:30<SeP>2023-12-01 12:14:15<SeP>2023-12-02 23:42:00<SeP>2023-12-04 11:09:45<SeP>2023-12-05 22:37:30<SeP>2023-12-07 10:05:15<SeP>2023-12-08 21:33:00<SeP>2023-12-10 09:00:45<SeP>2023-12-11 20:28:30<SeP>2023-12-13 07:56:15<SeP>2023-12-14 19:24:00<SeP>2023-12-16 06:51:45<SeP>2023-12-17 18:19:30<SeP>2023-12-19 05:47:15<SeP>2023-12-20 17:15:00<SeP>2023-12-22 04:42:45<SeP>2023-12-23 16:10:30<SeP>2023-12-25 03:38:15<SeP>2023-12-26 15:06:00<SeP>2023-12-28 02:33:45<SeP>2023-12-29 14:01:30<SeP>2023-12-31 01:29:15<SeP>2024-01-01 12:57:00<SeP>2024-01-03 00:24:45<SeP>2024-01-04 11:52:30<SeP>2024-01-05 23:20:15<SeP>2024-01-07 10:48:00<SeP>2024-01-08 22:15:45<SeP>2024-01-10 09:43:30<SeP>2024-01-11 21:11:15<SeP>2024-01-13 08:39:00<SeP>2024-01-14 20:06:45<SeP>2024-01-16 07:34:30<SeP>2024-01-17 19:02:15<SeP>2024-01-19 06:30:00<SeP>2024-01-20 17:57:45<SeP>2024-01-22 05:25:30<SeP>2024-01-23 16:53:15<SeP>2024-01-25 04:21:00<SeP>2024-01-26 15:48:45<SeP>2024-01-28 03:16:30<SeP>2024-01-29 14:44:15<SeP>2024-01-31 02:12:00<SeP>2024-02-01 13:39:45<SeP>2024-02-03 01:07:30<SeP>2024-02-04 12:35:15<SeP>2024-02-06 00:03:00<SeP>2024-02-07 11:30:45<SeP>2024-02-08 22:58:30<SeP>2024-02-10 10:26:15<SeP>2024-02-11 21:54:00<SeP>2024-02-13 09:21:45<SeP>2024-02-14 20:49:30<SeP>2024-02-16 08:17:15<SeP>2024-02-17 19:45:00<SeP>2024-02-19 07:12:45<SeP>2024-02-20 18:40:30<SeP>2024-02-22 06:08:15<SeP>2024-02-23 17:36:00<SeP>2024-02-25 05:03:45<SeP>2024-02-26 16:31:30<SeP>2024-02-28 03:59:15<SeP>2024-02-29 15:27:00<SeP>2024-03-02 02:54:45<SeP>2024-03-03 14:22:30<SeP>2024-03-05 01:50:15<SeP>2024-03-06 13:18:00<SeP>2024-03-08 00:45:45<SeP>2024-03-09 12:13:30<SeP>2024-03-11 00:41:15<SeP>2024-03-12 12:09:00<SeP>2024-03-13 23:36:45<SeP>2024-03-15 11:04:30<SeP>2024-03-16 22:32:15<SeP>2024-03-18 10:00:00<SeP>2024-03-19 21:27:45<SeP>2024-03-21 08:55:30<SeP>2024-03-22 20:23:15<SeP>2024-03-24 07:51:00<SeP>2024-03-25 19:18:45<SeP>2024-03-27 06:46:30<SeP>2024-03-28 18:14:15<SeP>2024-03-30 05:42:00<SeP>2024-03-31 17:09:45<SeP>2024-04-02 04:37:30<SeP>2024-04-03 16:05:15<SeP>2024-04-05 03:33:00<SeP>2024-04-06 15:00:45<SeP>2024-04-08 02:28:30<SeP>2024-04-09 13:56:15<SeP>2024-04-11 01:24:00<SeP>2024-04-12 12:51:45<SeP>2024-04-14 00:19:30<SeP>2024-04-15 11:47:15<SeP>2024-04-16 23:15:00<SeP>2024-04-18 10:42:45<SeP>2024-04-19 22:10:30<SeP>2024-04-21 09:38:15<SeP>2024-04-22 21:06:00<SeP>2024-04-24 08:33:45<SeP>2024-04-25 20:01:30<SeP>2024-04-27 07:29:15<SeP>2024-04-28 18:57:00<SeP>2024-04-30 06:24:45<SeP>2024-05-01 17:52:30<SeP>2024-05-03 05:20:15<SeP>2024-05-04 16:48:00<SeP>2024-05-06 04:15:45<SeP>2024-05-07 15:43:30<SeP>2024-05-09 03:11:15<SeP>2024-05-10 14:39:00<SeP>2024-05-12 02:06:45<SeP>2024-05-13 13:34:30<SeP>2024-05-15 01:02:15<SeP>2024-05-16 12:30:00<SeP>2024-05-17 23:57:45<SeP>2024-05-19 11:25:30<SeP>2024-05-20 22:53:15<SeP>2024-05-22 10:21:00<SeP>2024-05-23 21:48:45<SeP>2024-05-25 09:16:30<SeP>2024-05-26 20:44:15<SeP>2024-05-28 08:12:00<SeP>2024-05-29 19:39:45<SeP>2024-05-31 07:07:30<SeP>2024-06-01 18:35:15<SeP>2024-06-03 06:03:00<SeP>2024-06-04 17:30:45<SeP>2024-06-06 04:58:30<SeP>2024-06-07 16:26:15<SeP>2024-06-09 03:54:00<SeP>2024-06-10 15:21:45<SeP>2024-06-12 02:49:30<SeP>2024-06-13 14:17:15<SeP>2024-06-15 01:45:00<SeP>2024-06-16 13:12:45<SeP>2024-06-18 00:40:30<SeP>2024-06-19 12:08:15<SeP>2024-06-20 23:36:00<SeP>2024-06-22 11:03:45<SeP>2024-06-23 22:31:30<SeP>2024-06-25 09:59:15<SeP>2024-06-26 21:27:00<SeP>2024-06-28 08:54:45<SeP>2024-06-29 20:22:30<SeP>2024-07-01 07:50:15<SeP>2024-07-02 19:18:00<SeP>2024-07-04 06:45:45<SeP>2024-07-05 18:13:30<SeP>2024-07-07 05:41:15<SeP>2024-07-08 17:09:00<SeP>2024-07-10 04:36:45<SeP>2024-07-11 16:04:30<SeP>2024-07-13 03:32:15<SeP>2024-07-14 15:00:00<SeP>2024-07-16 02:27:45<SeP>2024-07-17 13:55:30<SeP>2024-07-19 01:23:15<SeP>2024-07-20 12:51:00<SeP>2024-07-22 00:18:45<SeP>2024-07-23 11:46:30<SeP>2024-07-24 23:14:15<SeP>2024-07-26 10:42:00<SeP>2024-07-27 22:09:45<SeP>2024-07-29 09:37:30<SeP>2024-07-30 21:05:15<SeP>2024-08-01 08:33:00<SeP>2024-08-02 20:00:45<SeP>2024-08-04 07:28:30<SeP>2024-08-05 18:56:15<SeP>2024-08-07 06:24:00<SeP>2024-08-08 17:51:45<SeP>2024-08-10 05:19:30<SeP>2024-08-11 16:47:15<SeP>2024-08-13 04:15:00<SeP>2024-08-14 15:42:45<SeP>2024-08-16 03:10:30<SeP>2024-08-17 14:38:15<SeP>2024-08-19 02:06:00<SeP>2024-08-20 13:33:45<SeP>2024-08-22 01:01:30<SeP>2024-08-23 12:29:15<SeP>2024-08-24 23:57:00<SeP>2024-08-26 11:24:45<SeP>2024-08-27 22:52:30<SeP>2024-08-29 10:20:15<SeP>2024-08-30 21:48:00<SeP>2024-09-01 09:15:45<SeP>2024-09-02 20:43:30<SeP>2024-09-04 08:11:15<SeP>2024-09-05 19:39:00<SeP>2024-09-07 07:06:45<SeP>2024-09-08 18:34:30<SeP>2024-09-10 06:02:15<SeP>2024-09-11 17:30:00<SeP>2024-09-13 04:57:45<SeP>2024-09-14 16:25:30<SeP>2024-09-16 03:53:15<SeP>2024-09-17 15:21:00<SeP>2024-09-19 02:48:45<SeP>2024-09-20 14:16:30<SeP>2024-09-22 01:44:15<SeP>2024-09-23 13:12:00<SeP>2024-09-25 00:39:45<SeP>2024-09-26 12:07:30<SeP>2024-09-27 23:35:15<SeP>2024-09-29 11:03:00<SeP>2024-09-30 22:30:45<SeP>2024-10-02 09:58:30<SeP>2024-10-03 21:26:15<SeP>2024-10-05 08:54:00<SeP>2024-10-06 20:21:45<SeP>2024-10-08 07:49:30<SeP>2024-10-09 19:17:15<SeP>2024-10-11 06:45:00<SeP>2024-10-12 18:12:45<SeP>2024-10-14 05:40:30<SeP>2024-10-15 17:08:15<SeP>2024-10-17 04:36:00<SeP>2024-10-18 16:03:45<SeP>2024-10-20 03:31:30<SeP>2024-10-21 14:59:15<SeP>2024-10-23 02:27:00<SeP>2024-10-24 13:54:45<SeP>2024-10-26 01:22:30<SeP>2024-10-27 12:50:15<SeP>2024-10-29 00:18:00<SeP>2024-10-30 11:45:45<SeP>2024-10-31 23:13:30<SeP>2024-11-02 10:41:15<SeP>2024-11-03 21:09:00<SeP>2024-11-05 08:36:45<SeP>2024-11-06 20:04:30<SeP>2024-11-08 07:32:15<SeP>2024-11-09 19:00:00<SeP>2024-11-11 06:27:45<SeP>2024-11-12 17:55:30<SeP>2024-11-14 05:23:15<SeP>2024-11-15 16:51:00<SeP>2024-11-17 04:18:45<SeP>2024-11-18 15:46:30<SeP>2024-11-20 03:14:15<SeP>2024-11-21 14:42:00<SeP>2024-11-23 02:09:45<SeP>2024-11-24 13:37:30<SeP>2024-11-26 01:05:15<SeP>2024-11-27 12:33:00<SeP>2024-11-29 00:00:45<SeP>2024-11-30 11:28:30<SeP>2024-12-01 22:56:15<SeP>2024-12-03 10:24:00<SeP>2024-12-04 21:51:45<SeP>2024-12-06 09:19:30<SeP>2024-12-07 20:47:15<SeP>2024-12-09 08:15:00<SeP>2024-12-10 19:42:45<SeP>2024-12-12 07:10:30<SeP>2024-12-13 18:38:15<SeP>2024-12-15 06:06:00<SeP>2024-12-16 17:33:45<SeP>2024-12-18 05:01:30<SeP>2024-12-19 16:29:15<SeP>2024-12-21 03:57:00<SeP>2024-12-22 15:24:45<SeP>2024-12-24 02:52:30<SeP>2024-12-25 14:20:15<SeP>2024-12-27 01:48:00<SeP>2024-12-28 13:15:45<SeP>2024-12-30 00:43:30<SeP>2024-12-31 12:11:15<SeP>2025-01-01 23:39:00<SeP>2025-01-03 11:06:45<SeP>2025-01-04 22:34:30<SeP>2025-01-06 10:02:15<SeP>2025-01-07 21:30:00<SeP>2025-01-09 08:57:45<SeP>2025-01-10 20:25:30<SeP>2025-01-12 07:53:15<SeP>2025-01-13 19:21:00<SeP>2025-01-15 06:48:45<SeP>2025-01-16 18:16:30<SeP>2025-01-18 05:44:15<SeP>2025-01-19 17:12:00<SeP>2025-01-21 04:39:45<SeP>2025-01-22 16:07:30<SeP>2025-01-24 03:35:15<SeP>2025-01-25 15:03:00<SeP>2025-01-27 02:30:45<SeP>2025-01-28 13:58:30<SeP>2025-01-30 01:26:15<SeP>2025-01-31 12:54:00<SeP>2025-02-02 00:21:45<SeP>2025-02-03 11:49:30<SeP>2025-02-04 23:17:15<SeP>2025-02-06 10:45:00<SeP>2025-02-07 22:12:45<SeP>2025-02-09 09:40:30<SeP>2025-02-10 21:08:15<SeP>2025-02-12 08:36:00<SeP>2025-02-13 20:03:45<SeP>2025-02-15 07:31:30<SeP>2025-02-16 18:59:15<SeP>2025-02-18 06:27:00<SeP>2025-02-19 17:54:45<SeP>2025-02-21 05:22:30<SeP>2025-02-22 16:50:15<SeP>2025-02-24 04:18:00<SeP>2025-02-25 15:45:45<SeP>2025-02-27 03:13:30<SeP>2025-02-28 14:41:15<SeP>2025-03-02 02:09:00<SeP>2025-03-03 13:36:45<SeP>2025-03-05 01:04:30<SeP>2025-03-06 12:32:15";
  const item1Label       = "Scans";
  const item1Data        = "774<SeP>1518<SeP>1371<SeP>1494<SeP>1224<SeP>1755<SeP>939<SeP>977<SeP>1145<SeP>3411<SeP>3030<SeP>1402<SeP>3299<SeP>886<SeP>773<SeP>890<SeP>1434<SeP>2934<SeP>1795<SeP>1228<SeP>1254<SeP>906<SeP>1048<SeP>1275<SeP>891<SeP>816<SeP>973<SeP>3672<SeP>841<SeP>867<SeP>1192<SeP>1436<SeP>869<SeP>1056<SeP>3062<SeP>2908<SeP>1817<SeP>1487<SeP>1760<SeP>1314<SeP>1651<SeP>1955<SeP>2115<SeP>1565<SeP>1782<SeP>1574<SeP>1601<SeP>1815<SeP>1694<SeP>2147<SeP>1505<SeP>1697<SeP>2124<SeP>2854<SeP>1408<SeP>1771<SeP>1913<SeP>2452<SeP>1492<SeP>2972<SeP>2308<SeP>1426<SeP>1616<SeP>1340<SeP>1812<SeP>1622<SeP>1531<SeP>1263<SeP>1453<SeP>1177<SeP>2403<SeP>1261<SeP>1051<SeP>1371<SeP>2492<SeP>7001<SeP>1346<SeP>1347<SeP>1538<SeP>2059<SeP>1191<SeP>3374<SeP>4556<SeP>1615<SeP>1480<SeP>1020<SeP>3280<SeP>1257<SeP>1104<SeP>975<SeP>1115<SeP>1074<SeP>3008<SeP>928<SeP>1438<SeP>3029<SeP>5425<SeP>2486<SeP>1029<SeP>929<SeP>918<SeP>1015<SeP>1007<SeP>1007<SeP>1034<SeP>3855<SeP>2179<SeP>1430<SeP>1643<SeP>598<SeP>986<SeP>1594<SeP>1186<SeP>1011<SeP>999<SeP>2314<SeP>1327<SeP>1039<SeP>955<SeP>1111<SeP>802<SeP>869<SeP>859<SeP>825<SeP>880<SeP>1092<SeP>799<SeP>822<SeP>923<SeP>862<SeP>894<SeP>665<SeP>864<SeP>856<SeP>928<SeP>895<SeP>857<SeP>795<SeP>756<SeP>991<SeP>913<SeP>805<SeP>910<SeP>1026<SeP>837<SeP>1098<SeP>995<SeP>454<SeP>965<SeP>884<SeP>947<SeP>1162<SeP>1050<SeP>1137<SeP>1188<SeP>1005<SeP>935<SeP>978<SeP>996<SeP>730<SeP>1006<SeP>1048<SeP>958<SeP>823<SeP>946<SeP>1079<SeP>1023<SeP>1101<SeP>967<SeP>1144<SeP>884<SeP>885<SeP>1666<SeP>1680<SeP>1274<SeP>989<SeP>1041<SeP>1192<SeP>1000<SeP>962<SeP>798<SeP>808<SeP>908<SeP>1143<SeP>807<SeP>1074<SeP>1289<SeP>1065<SeP>1215<SeP>1330<SeP>1174<SeP>1316<SeP>1266<SeP>1306<SeP>1531<SeP>1730<SeP>1710<SeP>1371<SeP>750<SeP>830<SeP>1128<SeP>1103<SeP>620<SeP>722<SeP>864<SeP>1008<SeP>1590<SeP>5807<SeP>2481<SeP>1968<SeP>1276<SeP>894<SeP>994<SeP>940<SeP>981<SeP>921<SeP>1114<SeP>1086<SeP>1056<SeP>2045<SeP>1485<SeP>1054<SeP>1254<SeP>1239<SeP>1219<SeP>1106<SeP>978<SeP>1099<SeP>1074<SeP>1117<SeP>1046<SeP>1146<SeP>1125<SeP>995<SeP>925<SeP>1294<SeP>1131<SeP>1188<SeP>1208<SeP>1387<SeP>1240<SeP>1497<SeP>1255<SeP>1083<SeP>1204<SeP>1182<SeP>1974<SeP>1280<SeP>1897<SeP>1687<SeP>1502<SeP>2027<SeP>1579<SeP>1154<SeP>1149<SeP>1451<SeP>1068<SeP>1582<SeP>1267<SeP>1252<SeP>1711<SeP>1699<SeP>1399<SeP>1450<SeP>1476<SeP>1245<SeP>1091<SeP>1108<SeP>1399<SeP>1090<SeP>1248<SeP>1343<SeP>1198<SeP>1426<SeP>1955<SeP>1330<SeP>1393<SeP>1559<SeP>1384<SeP>1088<SeP>1001<SeP>996<SeP>956<SeP>909<SeP>998<SeP>1779<SeP>1166<SeP>1068<SeP>1127<SeP>971<SeP>773<SeP>1145<SeP>1355<SeP>855<SeP>924<SeP>953<SeP>1320<SeP>1625<SeP>1490<SeP>1040<SeP>1153<SeP>992<SeP>1871<SeP>1082<SeP>1167<SeP>1084<SeP>1269<SeP>1290<SeP>999<SeP>976<SeP>1252<SeP>1024<SeP>956<SeP>833<SeP>1286<SeP>1420<SeP>1494<SeP>1642<SeP>1449<SeP>954<SeP>1131<SeP>1123<SeP>1145<SeP>1147<SeP>1159<SeP>1061<SeP>1023<SeP>1304<SeP>1597<SeP>1295<SeP>1589<SeP>1366<SeP>1422<SeP>1611<SeP>1362<SeP>1475<SeP>1390<SeP>1356<SeP>1301<SeP>1766<SeP>1458<SeP>1529<SeP>1530<SeP>1278<SeP>1464<SeP>1262<SeP>1300<SeP>1432<SeP>1442<SeP>1619<SeP>1243<SeP>1318<SeP>1285<SeP>1372<SeP>1358<SeP>1180<SeP>1446<SeP>1919<SeP>1607<SeP>1249<SeP>709<SeP>1461<SeP>1828<SeP>1306<SeP>1319<SeP>1233<SeP>1157<SeP>1399<SeP>1495<SeP>1324<SeP>1520<SeP>1669<SeP>1392<SeP>1507<SeP>1770<SeP>1323<SeP>1506<SeP>1619<SeP>1661<SeP>1316<SeP>1086<SeP>1613<SeP>1732<SeP>1962<SeP>1747<SeP>1787<SeP>1637<SeP>1625<SeP>1576<SeP>1619<SeP>1532<SeP>1575<SeP>1743<SeP>1918<SeP>1430<SeP>1554<SeP>1249<SeP>1759<SeP>1415<SeP>2067";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "159<SeP>610<SeP>1367<SeP>688<SeP>220<SeP>238<SeP>7007<SeP>575<SeP>9437<SeP>563<SeP>401<SeP>1132<SeP>1295<SeP>242<SeP>303<SeP>310<SeP>140<SeP>747<SeP>344<SeP>7464<SeP>7166<SeP>6832<SeP>8901<SeP>3139<SeP>288<SeP>406<SeP>183<SeP>378<SeP>5804<SeP>215<SeP>369<SeP>134<SeP>539<SeP>324<SeP>8982<SeP>9420<SeP>10307<SeP>9783<SeP>6292<SeP>6037<SeP>8130<SeP>7996<SeP>9288<SeP>8123<SeP>7501<SeP>9303<SeP>7799<SeP>8755<SeP>8628<SeP>6104<SeP>8814<SeP>9713<SeP>6358<SeP>8446<SeP>8563<SeP>9231<SeP>18599<SeP>15867<SeP>9855<SeP>11353<SeP>6763<SeP>7738<SeP>8696<SeP>9641<SeP>8450<SeP>6650<SeP>6922<SeP>6524<SeP>6689<SeP>3732<SeP>6347<SeP>5532<SeP>6547<SeP>6865<SeP>7588<SeP>3588<SeP>6188<SeP>6290<SeP>6041<SeP>5295<SeP>7038<SeP>4627<SeP>6686<SeP>6017<SeP>5653<SeP>5784<SeP>6106<SeP>21844<SeP>11835<SeP>33990<SeP>7675<SeP>8168<SeP>7241<SeP>10922<SeP>8114<SeP>4314<SeP>6273<SeP>3461<SeP>5577<SeP>6937<SeP>4911<SeP>8887<SeP>6818<SeP>5472<SeP>4411<SeP>6157<SeP>9294<SeP>8153<SeP>8554<SeP>4239<SeP>6301<SeP>10643<SeP>8407<SeP>3900<SeP>3592<SeP>6985<SeP>9139<SeP>5930<SeP>7283<SeP>8469<SeP>2765<SeP>3138<SeP>1106<SeP>1637<SeP>2550<SeP>1793<SeP>872<SeP>1270<SeP>1008<SeP>1280<SeP>1317<SeP>1197<SeP>1181<SeP>757<SeP>1261<SeP>1046<SeP>1285<SeP>1344<SeP>1064<SeP>1813<SeP>2118<SeP>4227<SeP>11294<SeP>8414<SeP>7455<SeP>7660<SeP>12738<SeP>2723<SeP>9161<SeP>12144<SeP>9815<SeP>12380<SeP>9319<SeP>11212<SeP>11482<SeP>8687<SeP>13447<SeP>5188<SeP>4673<SeP>7241<SeP>23830<SeP>7762<SeP>7817<SeP>8091<SeP>17036<SeP>9803<SeP>7518<SeP>5544<SeP>6770<SeP>8398<SeP>25338<SeP>6989<SeP>10157<SeP>9180<SeP>5750<SeP>5183<SeP>7480<SeP>15134<SeP>5930<SeP>13450<SeP>8283<SeP>8562<SeP>6312<SeP>6481<SeP>3060<SeP>7536<SeP>7574<SeP>4795<SeP>6385<SeP>8614<SeP>3507<SeP>21667<SeP>7877<SeP>6546<SeP>5897<SeP>8626<SeP>10655<SeP>7152<SeP>2489<SeP>5965<SeP>4252<SeP>4688<SeP>4364<SeP>1610<SeP>620<SeP>639<SeP>202<SeP>543<SeP>633<SeP>773<SeP>427<SeP>925<SeP>1562<SeP>3190<SeP>1035<SeP>22521<SeP>1434<SeP>4909<SeP>2842<SeP>3590<SeP>6416<SeP>4565<SeP>2746<SeP>3669<SeP>2698<SeP>3054<SeP>3397<SeP>4522<SeP>1446<SeP>4139<SeP>1267<SeP>2718<SeP>1148<SeP>1918<SeP>1599<SeP>1385<SeP>1252<SeP>854<SeP>1720<SeP>26794<SeP>1769<SeP>4178<SeP>3810<SeP>2168<SeP>3692<SeP>2945<SeP>1784<SeP>3749<SeP>2610<SeP>3821<SeP>2031<SeP>3024<SeP>3481<SeP>5017<SeP>5650<SeP>4620<SeP>4309<SeP>2578<SeP>2732<SeP>4868<SeP>3975<SeP>10510<SeP>5158<SeP>2495<SeP>2865<SeP>2390<SeP>4320<SeP>4191<SeP>3669<SeP>2819<SeP>2617<SeP>6012<SeP>3546<SeP>5891<SeP>4485<SeP>5560<SeP>5857<SeP>5493<SeP>4736<SeP>22096<SeP>5766<SeP>10949<SeP>1779<SeP>2941<SeP>4316<SeP>3746<SeP>5015<SeP>3304<SeP>5158<SeP>4586<SeP>4819<SeP>3104<SeP>4243<SeP>1979<SeP>1493<SeP>2105<SeP>3998<SeP>2265<SeP>3146<SeP>3390<SeP>4742<SeP>3567<SeP>3587<SeP>4175<SeP>3397<SeP>3399<SeP>6209<SeP>7773<SeP>6074<SeP>4690<SeP>4840<SeP>4462<SeP>3929<SeP>4044<SeP>4054<SeP>6866<SeP>5087<SeP>4626<SeP>3062<SeP>778<SeP>1212<SeP>1753<SeP>1245<SeP>1234<SeP>2189<SeP>1075<SeP>1631<SeP>3528<SeP>5070<SeP>6628<SeP>34111<SeP>4826<SeP>4616<SeP>23670<SeP>5712<SeP>5566<SeP>5868<SeP>4252<SeP>24637<SeP>5145<SeP>5130<SeP>4903<SeP>5815<SeP>13906<SeP>21418<SeP>4399<SeP>3579<SeP>4420<SeP>5218<SeP>6098<SeP>3325<SeP>3177<SeP>3847<SeP>4592<SeP>5758<SeP>3875<SeP>17824<SeP>6190<SeP>7158<SeP>3467<SeP>2417<SeP>3509<SeP>4295<SeP>4029<SeP>4358<SeP>2579<SeP>4105<SeP>2151<SeP>4524<SeP>4452<SeP>8461<SeP>10636<SeP>8365<SeP>8810<SeP>8866<SeP>7929<SeP>4850<SeP>4824<SeP>4229<SeP>26084<SeP>3374<SeP>3119<SeP>4469<SeP>10186<SeP>5872<SeP>5096<SeP>3494<SeP>4987<SeP>3571<SeP>5444<SeP>9311<SeP>8291<SeP>4339<SeP>2744<SeP>3784<SeP>2052<SeP>1969<SeP>2571<SeP>2044<SeP>2458";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:27:45<SeP>2023-07-28 22:55:30<SeP>2023-07-30 10:23:15<SeP>2023-07-31 21:51:00<SeP>2023-08-02 09:18:45<SeP>2023-08-03 20:46:30<SeP>2023-08-05 08:14:15<SeP>2023-08-06 19:42:00<SeP>2023-08-08 07:09:45<SeP>2023-08-09 18:37:30<SeP>2023-08-11 06:05:15<SeP>2023-08-12 17:33:00<SeP>2023-08-14 05:00:45<SeP>2023-08-15 16:28:30<SeP>2023-08-17 03:56:15<SeP>2023-08-18 15:24:00<SeP>2023-08-20 02:51:45<SeP>2023-08-21 14:19:30<SeP>2023-08-23 01:47:15<SeP>2023-08-24 13:15:00<SeP>2023-08-26 00:42:45<SeP>2023-08-27 12:10:30<SeP>2023-08-28 23:38:15<SeP>2023-08-30 11:06:00<SeP>2023-08-31 22:33:45<SeP>2023-09-02 10:01:30<SeP>2023-09-03 21:29:15<SeP>2023-09-05 08:57:00<SeP>2023-09-06 20:24:45<SeP>2023-09-08 07:52:30<SeP>2023-09-09 19:20:15<SeP>2023-09-11 06:48:00<SeP>2023-09-12 18:15:45<SeP>2023-09-14 05:43:30<SeP>2023-09-15 17:11:15<SeP>2023-09-17 04:39:00<SeP>2023-09-18 16:06:45<SeP>2023-09-20 03:34:30<SeP>2023-09-21 15:02:15<SeP>2023-09-23 02:30:00<SeP>2023-09-24 13:57:45<SeP>2023-09-26 01:25:30<SeP>2023-09-27 12:53:15<SeP>2023-09-29 00:21:00<SeP>2023-09-30 11:48:45<SeP>2023-10-01 23:16:30<SeP>2023-10-03 10:44:15<SeP>2023-10-04 22:12:00<SeP>2023-10-06 09:39:45<SeP>2023-10-07 21:07:30<SeP>2023-10-09 08:35:15<SeP>2023-10-10 20:03:00<SeP>2023-10-12 07:30:45<SeP>2023-10-13 18:58:30<SeP>2023-10-15 06:26:15<SeP>2023-10-16 17:54:00<SeP>2023-10-18 05:21:45<SeP>2023-10-19 16:49:30<SeP>2023-10-21 04:17:15<SeP>2023-10-22 15:45:00<SeP>2023-10-24 03:12:45<SeP>2023-10-25 14:40:30<SeP>2023-10-27 02:08:15<SeP>2023-10-28 13:36:00<SeP>2023-10-30 01:03:45<SeP>2023-10-31 12:31:30<SeP>2023-11-01 23:59:15<SeP>2023-11-03 11:27:00<SeP>2023-11-04 22:54:45<SeP>2023-11-06 09:22:30<SeP>2023-11-07 20:50:15<SeP>2023-11-09 08:18:00<SeP>2023-11-10 19:45:45<SeP>2023-11-12 07:13:30<SeP>2023-11-13 18:41:15<SeP>2023-11-15 06:09:00<SeP>2023-11-16 17:36:45<SeP>2023-11-18 05:04:30<SeP>2023-11-19 16:32:15<SeP>2023-11-21 04:00:00<SeP>2023-11-22 15:27:45<SeP>2023-11-24 02:55:30<SeP>2023-11-25 14:23:15<SeP>2023-11-27 01:51:00<SeP>2023-11-28 13:18:45<SeP>2023-11-30 00:46:30<SeP>2023-12-01 12:14:15<SeP>2023-12-02 23:42:00<SeP>2023-12-04 11:09:45<SeP>2023-12-05 22:37:30<SeP>2023-12-07 10:05:15<SeP>2023-12-08 21:33:00<SeP>2023-12-10 09:00:45<SeP>2023-12-11 20:28:30<SeP>2023-12-13 07:56:15<SeP>2023-12-14 19:24:00<SeP>2023-12-16 06:51:45<SeP>2023-12-17 18:19:30<SeP>2023-12-19 05:47:15<SeP>2023-12-20 17:15:00<SeP>2023-12-22 04:42:45<SeP>2023-12-23 16:10:30<SeP>2023-12-25 03:38:15<SeP>2023-12-26 15:06:00<SeP>2023-12-28 02:33:45<SeP>2023-12-29 14:01:30<SeP>2023-12-31 01:29:15<SeP>2024-01-01 12:57:00<SeP>2024-01-03 00:24:45<SeP>2024-01-04 11:52:30<SeP>2024-01-05 23:20:15<SeP>2024-01-07 10:48:00<SeP>2024-01-08 22:15:45<SeP>2024-01-10 09:43:30<SeP>2024-01-11 21:11:15<SeP>2024-01-13 08:39:00<SeP>2024-01-14 20:06:45<SeP>2024-01-16 07:34:30<SeP>2024-01-17 19:02:15<SeP>2024-01-19 06:30:00<SeP>2024-01-20 17:57:45<SeP>2024-01-22 05:25:30<SeP>2024-01-23 16:53:15<SeP>2024-01-25 04:21:00<SeP>2024-01-26 15:48:45<SeP>2024-01-28 03:16:30<SeP>2024-01-29 14:44:15<SeP>2024-01-31 02:12:00<SeP>2024-02-01 13:39:45<SeP>2024-02-03 01:07:30<SeP>2024-02-04 12:35:15<SeP>2024-02-06 00:03:00<SeP>2024-02-07 11:30:45<SeP>2024-02-08 22:58:30<SeP>2024-02-10 10:26:15<SeP>2024-02-11 21:54:00<SeP>2024-02-13 09:21:45<SeP>2024-02-14 20:49:30<SeP>2024-02-16 08:17:15<SeP>2024-02-17 19:45:00<SeP>2024-02-19 07:12:45<SeP>2024-02-20 18:40:30<SeP>2024-02-22 06:08:15<SeP>2024-02-23 17:36:00<SeP>2024-02-25 05:03:45<SeP>2024-02-26 16:31:30<SeP>2024-02-28 03:59:15<SeP>2024-02-29 15:27:00<SeP>2024-03-02 02:54:45<SeP>2024-03-03 14:22:30<SeP>2024-03-05 01:50:15<SeP>2024-03-06 13:18:00<SeP>2024-03-08 00:45:45<SeP>2024-03-09 12:13:30<SeP>2024-03-11 00:41:15<SeP>2024-03-12 12:09:00<SeP>2024-03-13 23:36:45<SeP>2024-03-15 11:04:30<SeP>2024-03-16 22:32:15<SeP>2024-03-18 10:00:00<SeP>2024-03-19 21:27:45<SeP>2024-03-21 08:55:30<SeP>2024-03-22 20:23:15<SeP>2024-03-24 07:51:00<SeP>2024-03-25 19:18:45<SeP>2024-03-27 06:46:30<SeP>2024-03-28 18:14:15<SeP>2024-03-30 05:42:00<SeP>2024-03-31 17:09:45<SeP>2024-04-02 04:37:30<SeP>2024-04-03 16:05:15<SeP>2024-04-05 03:33:00<SeP>2024-04-06 15:00:45<SeP>2024-04-08 02:28:30<SeP>2024-04-09 13:56:15<SeP>2024-04-11 01:24:00<SeP>2024-04-12 12:51:45<SeP>2024-04-14 00:19:30<SeP>2024-04-15 11:47:15<SeP>2024-04-16 23:15:00<SeP>2024-04-18 10:42:45<SeP>2024-04-19 22:10:30<SeP>2024-04-21 09:38:15<SeP>2024-04-22 21:06:00<SeP>2024-04-24 08:33:45<SeP>2024-04-25 20:01:30<SeP>2024-04-27 07:29:15<SeP>2024-04-28 18:57:00<SeP>2024-04-30 06:24:45<SeP>2024-05-01 17:52:30<SeP>2024-05-03 05:20:15<SeP>2024-05-04 16:48:00<SeP>2024-05-06 04:15:45<SeP>2024-05-07 15:43:30<SeP>2024-05-09 03:11:15<SeP>2024-05-10 14:39:00<SeP>2024-05-12 02:06:45<SeP>2024-05-13 13:34:30<SeP>2024-05-15 01:02:15<SeP>2024-05-16 12:30:00<SeP>2024-05-17 23:57:45<SeP>2024-05-19 11:25:30<SeP>2024-05-20 22:53:15<SeP>2024-05-22 10:21:00<SeP>2024-05-23 21:48:45<SeP>2024-05-25 09:16:30<SeP>2024-05-26 20:44:15<SeP>2024-05-28 08:12:00<SeP>2024-05-29 19:39:45<SeP>2024-05-31 07:07:30<SeP>2024-06-01 18:35:15<SeP>2024-06-03 06:03:00<SeP>2024-06-04 17:30:45<SeP>2024-06-06 04:58:30<SeP>2024-06-07 16:26:15<SeP>2024-06-09 03:54:00<SeP>2024-06-10 15:21:45<SeP>2024-06-12 02:49:30<SeP>2024-06-13 14:17:15<SeP>2024-06-15 01:45:00<SeP>2024-06-16 13:12:45<SeP>2024-06-18 00:40:30<SeP>2024-06-19 12:08:15<SeP>2024-06-20 23:36:00<SeP>2024-06-22 11:03:45<SeP>2024-06-23 22:31:30<SeP>2024-06-25 09:59:15<SeP>2024-06-26 21:27:00<SeP>2024-06-28 08:54:45<SeP>2024-06-29 20:22:30<SeP>2024-07-01 07:50:15<SeP>2024-07-02 19:18:00<SeP>2024-07-04 06:45:45<SeP>2024-07-05 18:13:30<SeP>2024-07-07 05:41:15<SeP>2024-07-08 17:09:00<SeP>2024-07-10 04:36:45<SeP>2024-07-11 16:04:30<SeP>2024-07-13 03:32:15<SeP>2024-07-14 15:00:00<SeP>2024-07-16 02:27:45<SeP>2024-07-17 13:55:30<SeP>2024-07-19 01:23:15<SeP>2024-07-20 12:51:00<SeP>2024-07-22 00:18:45<SeP>2024-07-23 11:46:30<SeP>2024-07-24 23:14:15<SeP>2024-07-26 10:42:00<SeP>2024-07-27 22:09:45<SeP>2024-07-29 09:37:30<SeP>2024-07-30 21:05:15<SeP>2024-08-01 08:33:00<SeP>2024-08-02 20:00:45<SeP>2024-08-04 07:28:30<SeP>2024-08-05 18:56:15<SeP>2024-08-07 06:24:00<SeP>2024-08-08 17:51:45<SeP>2024-08-10 05:19:30<SeP>2024-08-11 16:47:15<SeP>2024-08-13 04:15:00<SeP>2024-08-14 15:42:45<SeP>2024-08-16 03:10:30<SeP>2024-08-17 14:38:15<SeP>2024-08-19 02:06:00<SeP>2024-08-20 13:33:45<SeP>2024-08-22 01:01:30<SeP>2024-08-23 12:29:15<SeP>2024-08-24 23:57:00<SeP>2024-08-26 11:24:45<SeP>2024-08-27 22:52:30<SeP>2024-08-29 10:20:15<SeP>2024-08-30 21:48:00<SeP>2024-09-01 09:15:45<SeP>2024-09-02 20:43:30<SeP>2024-09-04 08:11:15<SeP>2024-09-05 19:39:00<SeP>2024-09-07 07:06:45<SeP>2024-09-08 18:34:30<SeP>2024-09-10 06:02:15<SeP>2024-09-11 17:30:00<SeP>2024-09-13 04:57:45<SeP>2024-09-14 16:25:30<SeP>2024-09-16 03:53:15<SeP>2024-09-17 15:21:00<SeP>2024-09-19 02:48:45<SeP>2024-09-20 14:16:30<SeP>2024-09-22 01:44:15<SeP>2024-09-23 13:12:00<SeP>2024-09-25 00:39:45<SeP>2024-09-26 12:07:30<SeP>2024-09-27 23:35:15<SeP>2024-09-29 11:03:00<SeP>2024-09-30 22:30:45<SeP>2024-10-02 09:58:30<SeP>2024-10-03 21:26:15<SeP>2024-10-05 08:54:00<SeP>2024-10-06 20:21:45<SeP>2024-10-08 07:49:30<SeP>2024-10-09 19:17:15<SeP>2024-10-11 06:45:00<SeP>2024-10-12 18:12:45<SeP>2024-10-14 05:40:30<SeP>2024-10-15 17:08:15<SeP>2024-10-17 04:36:00<SeP>2024-10-18 16:03:45<SeP>2024-10-20 03:31:30<SeP>2024-10-21 14:59:15<SeP>2024-10-23 02:27:00<SeP>2024-10-24 13:54:45<SeP>2024-10-26 01:22:30<SeP>2024-10-27 12:50:15<SeP>2024-10-29 00:18:00<SeP>2024-10-30 11:45:45<SeP>2024-10-31 23:13:30<SeP>2024-11-02 10:41:15<SeP>2024-11-03 21:09:00<SeP>2024-11-05 08:36:45<SeP>2024-11-06 20:04:30<SeP>2024-11-08 07:32:15<SeP>2024-11-09 19:00:00<SeP>2024-11-11 06:27:45<SeP>2024-11-12 17:55:30<SeP>2024-11-14 05:23:15<SeP>2024-11-15 16:51:00<SeP>2024-11-17 04:18:45<SeP>2024-11-18 15:46:30<SeP>2024-11-20 03:14:15<SeP>2024-11-21 14:42:00<SeP>2024-11-23 02:09:45<SeP>2024-11-24 13:37:30<SeP>2024-11-26 01:05:15<SeP>2024-11-27 12:33:00<SeP>2024-11-29 00:00:45<SeP>2024-11-30 11:28:30<SeP>2024-12-01 22:56:15<SeP>2024-12-03 10:24:00<SeP>2024-12-04 21:51:45<SeP>2024-12-06 09:19:30<SeP>2024-12-07 20:47:15<SeP>2024-12-09 08:15:00<SeP>2024-12-10 19:42:45<SeP>2024-12-12 07:10:30<SeP>2024-12-13 18:38:15<SeP>2024-12-15 06:06:00<SeP>2024-12-16 17:33:45<SeP>2024-12-18 05:01:30<SeP>2024-12-19 16:29:15<SeP>2024-12-21 03:57:00<SeP>2024-12-22 15:24:45<SeP>2024-12-24 02:52:30<SeP>2024-12-25 14:20:15<SeP>2024-12-27 01:48:00<SeP>2024-12-28 13:15:45<SeP>2024-12-30 00:43:30<SeP>2024-12-31 12:11:15<SeP>2025-01-01 23:39:00<SeP>2025-01-03 11:06:45<SeP>2025-01-04 22:34:30<SeP>2025-01-06 10:02:15<SeP>2025-01-07 21:30:00<SeP>2025-01-09 08:57:45<SeP>2025-01-10 20:25:30<SeP>2025-01-12 07:53:15<SeP>2025-01-13 19:21:00<SeP>2025-01-15 06:48:45<SeP>2025-01-16 18:16:30<SeP>2025-01-18 05:44:15<SeP>2025-01-19 17:12:00<SeP>2025-01-21 04:39:45<SeP>2025-01-22 16:07:30<SeP>2025-01-24 03:35:15<SeP>2025-01-25 15:03:00<SeP>2025-01-27 02:30:45<SeP>2025-01-28 13:58:30<SeP>2025-01-30 01:26:15<SeP>2025-01-31 12:54:00<SeP>2025-02-02 00:21:45<SeP>2025-02-03 11:49:30<SeP>2025-02-04 23:17:15<SeP>2025-02-06 10:45:00<SeP>2025-02-07 22:12:45<SeP>2025-02-09 09:40:30<SeP>2025-02-10 21:08:15<SeP>2025-02-12 08:36:00<SeP>2025-02-13 20:03:45<SeP>2025-02-15 07:31:30<SeP>2025-02-16 18:59:15<SeP>2025-02-18 06:27:00<SeP>2025-02-19 17:54:45<SeP>2025-02-21 05:22:30<SeP>2025-02-22 16:50:15<SeP>2025-02-24 04:18:00<SeP>2025-02-25 15:45:45<SeP>2025-02-27 03:13:30<SeP>2025-02-28 14:41:15<SeP>2025-03-02 02:09:00<SeP>2025-03-03 13:36:45<SeP>2025-03-05 01:04:30<SeP>2025-03-06 12:32:15";
  const itemLabel       = "Scans";
  const itemData        = "774<SeP>1518<SeP>1371<SeP>1494<SeP>1224<SeP>1755<SeP>939<SeP>977<SeP>1145<SeP>3411<SeP>3030<SeP>1402<SeP>3299<SeP>886<SeP>773<SeP>890<SeP>1434<SeP>2934<SeP>1795<SeP>1228<SeP>1254<SeP>906<SeP>1048<SeP>1275<SeP>891<SeP>816<SeP>973<SeP>3672<SeP>841<SeP>867<SeP>1192<SeP>1436<SeP>869<SeP>1056<SeP>3062<SeP>2908<SeP>1817<SeP>1487<SeP>1760<SeP>1314<SeP>1651<SeP>1955<SeP>2115<SeP>1565<SeP>1782<SeP>1574<SeP>1601<SeP>1815<SeP>1694<SeP>2147<SeP>1505<SeP>1697<SeP>2124<SeP>2854<SeP>1408<SeP>1771<SeP>1913<SeP>2452<SeP>1492<SeP>2972<SeP>2308<SeP>1426<SeP>1616<SeP>1340<SeP>1812<SeP>1622<SeP>1531<SeP>1263<SeP>1453<SeP>1177<SeP>2403<SeP>1261<SeP>1051<SeP>1371<SeP>2492<SeP>7001<SeP>1346<SeP>1347<SeP>1538<SeP>2059<SeP>1191<SeP>3374<SeP>4556<SeP>1615<SeP>1480<SeP>1020<SeP>3280<SeP>1257<SeP>1104<SeP>975<SeP>1115<SeP>1074<SeP>3008<SeP>928<SeP>1438<SeP>3029<SeP>5425<SeP>2486<SeP>1029<SeP>929<SeP>918<SeP>1015<SeP>1007<SeP>1007<SeP>1034<SeP>3855<SeP>2179<SeP>1430<SeP>1643<SeP>598<SeP>986<SeP>1594<SeP>1186<SeP>1011<SeP>999<SeP>2314<SeP>1327<SeP>1039<SeP>955<SeP>1111<SeP>802<SeP>869<SeP>859<SeP>825<SeP>880<SeP>1092<SeP>799<SeP>822<SeP>923<SeP>862<SeP>894<SeP>665<SeP>864<SeP>856<SeP>928<SeP>895<SeP>857<SeP>795<SeP>756<SeP>991<SeP>913<SeP>805<SeP>910<SeP>1026<SeP>837<SeP>1098<SeP>995<SeP>454<SeP>965<SeP>884<SeP>947<SeP>1162<SeP>1050<SeP>1137<SeP>1188<SeP>1005<SeP>935<SeP>978<SeP>996<SeP>730<SeP>1006<SeP>1048<SeP>958<SeP>823<SeP>946<SeP>1079<SeP>1023<SeP>1101<SeP>967<SeP>1144<SeP>884<SeP>885<SeP>1666<SeP>1680<SeP>1274<SeP>989<SeP>1041<SeP>1192<SeP>1000<SeP>962<SeP>798<SeP>808<SeP>908<SeP>1143<SeP>807<SeP>1074<SeP>1289<SeP>1065<SeP>1215<SeP>1330<SeP>1174<SeP>1316<SeP>1266<SeP>1306<SeP>1531<SeP>1730<SeP>1710<SeP>1371<SeP>750<SeP>830<SeP>1128<SeP>1103<SeP>620<SeP>722<SeP>864<SeP>1008<SeP>1590<SeP>5807<SeP>2481<SeP>1968<SeP>1276<SeP>894<SeP>994<SeP>940<SeP>981<SeP>921<SeP>1114<SeP>1086<SeP>1056<SeP>2045<SeP>1485<SeP>1054<SeP>1254<SeP>1239<SeP>1219<SeP>1106<SeP>978<SeP>1099<SeP>1074<SeP>1117<SeP>1046<SeP>1146<SeP>1125<SeP>995<SeP>925<SeP>1294<SeP>1131<SeP>1188<SeP>1208<SeP>1387<SeP>1240<SeP>1497<SeP>1255<SeP>1083<SeP>1204<SeP>1182<SeP>1974<SeP>1280<SeP>1897<SeP>1687<SeP>1502<SeP>2027<SeP>1579<SeP>1154<SeP>1149<SeP>1451<SeP>1068<SeP>1582<SeP>1267<SeP>1252<SeP>1711<SeP>1699<SeP>1399<SeP>1450<SeP>1476<SeP>1245<SeP>1091<SeP>1108<SeP>1399<SeP>1090<SeP>1248<SeP>1343<SeP>1198<SeP>1426<SeP>1955<SeP>1330<SeP>1393<SeP>1559<SeP>1384<SeP>1088<SeP>1001<SeP>996<SeP>956<SeP>909<SeP>998<SeP>1779<SeP>1166<SeP>1068<SeP>1127<SeP>971<SeP>773<SeP>1145<SeP>1355<SeP>855<SeP>924<SeP>953<SeP>1320<SeP>1625<SeP>1490<SeP>1040<SeP>1153<SeP>992<SeP>1871<SeP>1082<SeP>1167<SeP>1084<SeP>1269<SeP>1290<SeP>999<SeP>976<SeP>1252<SeP>1024<SeP>956<SeP>833<SeP>1286<SeP>1420<SeP>1494<SeP>1642<SeP>1449<SeP>954<SeP>1131<SeP>1123<SeP>1145<SeP>1147<SeP>1159<SeP>1061<SeP>1023<SeP>1304<SeP>1597<SeP>1295<SeP>1589<SeP>1366<SeP>1422<SeP>1611<SeP>1362<SeP>1475<SeP>1390<SeP>1356<SeP>1301<SeP>1766<SeP>1458<SeP>1529<SeP>1530<SeP>1278<SeP>1464<SeP>1262<SeP>1300<SeP>1432<SeP>1442<SeP>1619<SeP>1243<SeP>1318<SeP>1285<SeP>1372<SeP>1358<SeP>1180<SeP>1446<SeP>1919<SeP>1607<SeP>1249<SeP>709<SeP>1461<SeP>1828<SeP>1306<SeP>1319<SeP>1233<SeP>1157<SeP>1399<SeP>1495<SeP>1324<SeP>1520<SeP>1669<SeP>1392<SeP>1507<SeP>1770<SeP>1323<SeP>1506<SeP>1619<SeP>1661<SeP>1316<SeP>1086<SeP>1613<SeP>1732<SeP>1962<SeP>1747<SeP>1787<SeP>1637<SeP>1625<SeP>1576<SeP>1619<SeP>1532<SeP>1575<SeP>1743<SeP>1918<SeP>1430<SeP>1554<SeP>1249<SeP>1759<SeP>1415<SeP>2067";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:27:45<SeP>2023-07-28 22:55:30<SeP>2023-07-30 10:23:15<SeP>2023-07-31 21:51:00<SeP>2023-08-02 09:18:45<SeP>2023-08-03 20:46:30<SeP>2023-08-05 08:14:15<SeP>2023-08-06 19:42:00<SeP>2023-08-08 07:09:45<SeP>2023-08-09 18:37:30<SeP>2023-08-11 06:05:15<SeP>2023-08-12 17:33:00<SeP>2023-08-14 05:00:45<SeP>2023-08-15 16:28:30<SeP>2023-08-17 03:56:15<SeP>2023-08-18 15:24:00<SeP>2023-08-20 02:51:45<SeP>2023-08-21 14:19:30<SeP>2023-08-23 01:47:15<SeP>2023-08-24 13:15:00<SeP>2023-08-26 00:42:45<SeP>2023-08-27 12:10:30<SeP>2023-08-28 23:38:15<SeP>2023-08-30 11:06:00<SeP>2023-08-31 22:33:45<SeP>2023-09-02 10:01:30<SeP>2023-09-03 21:29:15<SeP>2023-09-05 08:57:00<SeP>2023-09-06 20:24:45<SeP>2023-09-08 07:52:30<SeP>2023-09-09 19:20:15<SeP>2023-09-11 06:48:00<SeP>2023-09-12 18:15:45<SeP>2023-09-14 05:43:30<SeP>2023-09-15 17:11:15<SeP>2023-09-17 04:39:00<SeP>2023-09-18 16:06:45<SeP>2023-09-20 03:34:30<SeP>2023-09-21 15:02:15<SeP>2023-09-23 02:30:00<SeP>2023-09-24 13:57:45<SeP>2023-09-26 01:25:30<SeP>2023-09-27 12:53:15<SeP>2023-09-29 00:21:00<SeP>2023-09-30 11:48:45<SeP>2023-10-01 23:16:30<SeP>2023-10-03 10:44:15<SeP>2023-10-04 22:12:00<SeP>2023-10-06 09:39:45<SeP>2023-10-07 21:07:30<SeP>2023-10-09 08:35:15<SeP>2023-10-10 20:03:00<SeP>2023-10-12 07:30:45<SeP>2023-10-13 18:58:30<SeP>2023-10-15 06:26:15<SeP>2023-10-16 17:54:00<SeP>2023-10-18 05:21:45<SeP>2023-10-19 16:49:30<SeP>2023-10-21 04:17:15<SeP>2023-10-22 15:45:00<SeP>2023-10-24 03:12:45<SeP>2023-10-25 14:40:30<SeP>2023-10-27 02:08:15<SeP>2023-10-28 13:36:00<SeP>2023-10-30 01:03:45<SeP>2023-10-31 12:31:30<SeP>2023-11-01 23:59:15<SeP>2023-11-03 11:27:00<SeP>2023-11-04 22:54:45<SeP>2023-11-06 09:22:30<SeP>2023-11-07 20:50:15<SeP>2023-11-09 08:18:00<SeP>2023-11-10 19:45:45<SeP>2023-11-12 07:13:30<SeP>2023-11-13 18:41:15<SeP>2023-11-15 06:09:00<SeP>2023-11-16 17:36:45<SeP>2023-11-18 05:04:30<SeP>2023-11-19 16:32:15<SeP>2023-11-21 04:00:00<SeP>2023-11-22 15:27:45<SeP>2023-11-24 02:55:30<SeP>2023-11-25 14:23:15<SeP>2023-11-27 01:51:00<SeP>2023-11-28 13:18:45<SeP>2023-11-30 00:46:30<SeP>2023-12-01 12:14:15<SeP>2023-12-02 23:42:00<SeP>2023-12-04 11:09:45<SeP>2023-12-05 22:37:30<SeP>2023-12-07 10:05:15<SeP>2023-12-08 21:33:00<SeP>2023-12-10 09:00:45<SeP>2023-12-11 20:28:30<SeP>2023-12-13 07:56:15<SeP>2023-12-14 19:24:00<SeP>2023-12-16 06:51:45<SeP>2023-12-17 18:19:30<SeP>2023-12-19 05:47:15<SeP>2023-12-20 17:15:00<SeP>2023-12-22 04:42:45<SeP>2023-12-23 16:10:30<SeP>2023-12-25 03:38:15<SeP>2023-12-26 15:06:00<SeP>2023-12-28 02:33:45<SeP>2023-12-29 14:01:30<SeP>2023-12-31 01:29:15<SeP>2024-01-01 12:57:00<SeP>2024-01-03 00:24:45<SeP>2024-01-04 11:52:30<SeP>2024-01-05 23:20:15<SeP>2024-01-07 10:48:00<SeP>2024-01-08 22:15:45<SeP>2024-01-10 09:43:30<SeP>2024-01-11 21:11:15<SeP>2024-01-13 08:39:00<SeP>2024-01-14 20:06:45<SeP>2024-01-16 07:34:30<SeP>2024-01-17 19:02:15<SeP>2024-01-19 06:30:00<SeP>2024-01-20 17:57:45<SeP>2024-01-22 05:25:30<SeP>2024-01-23 16:53:15<SeP>2024-01-25 04:21:00<SeP>2024-01-26 15:48:45<SeP>2024-01-28 03:16:30<SeP>2024-01-29 14:44:15<SeP>2024-01-31 02:12:00<SeP>2024-02-01 13:39:45<SeP>2024-02-03 01:07:30<SeP>2024-02-04 12:35:15<SeP>2024-02-06 00:03:00<SeP>2024-02-07 11:30:45<SeP>2024-02-08 22:58:30<SeP>2024-02-10 10:26:15<SeP>2024-02-11 21:54:00<SeP>2024-02-13 09:21:45<SeP>2024-02-14 20:49:30<SeP>2024-02-16 08:17:15<SeP>2024-02-17 19:45:00<SeP>2024-02-19 07:12:45<SeP>2024-02-20 18:40:30<SeP>2024-02-22 06:08:15<SeP>2024-02-23 17:36:00<SeP>2024-02-25 05:03:45<SeP>2024-02-26 16:31:30<SeP>2024-02-28 03:59:15<SeP>2024-02-29 15:27:00<SeP>2024-03-02 02:54:45<SeP>2024-03-03 14:22:30<SeP>2024-03-05 01:50:15<SeP>2024-03-06 13:18:00<SeP>2024-03-08 00:45:45<SeP>2024-03-09 12:13:30<SeP>2024-03-11 00:41:15<SeP>2024-03-12 12:09:00<SeP>2024-03-13 23:36:45<SeP>2024-03-15 11:04:30<SeP>2024-03-16 22:32:15<SeP>2024-03-18 10:00:00<SeP>2024-03-19 21:27:45<SeP>2024-03-21 08:55:30<SeP>2024-03-22 20:23:15<SeP>2024-03-24 07:51:00<SeP>2024-03-25 19:18:45<SeP>2024-03-27 06:46:30<SeP>2024-03-28 18:14:15<SeP>2024-03-30 05:42:00<SeP>2024-03-31 17:09:45<SeP>2024-04-02 04:37:30<SeP>2024-04-03 16:05:15<SeP>2024-04-05 03:33:00<SeP>2024-04-06 15:00:45<SeP>2024-04-08 02:28:30<SeP>2024-04-09 13:56:15<SeP>2024-04-11 01:24:00<SeP>2024-04-12 12:51:45<SeP>2024-04-14 00:19:30<SeP>2024-04-15 11:47:15<SeP>2024-04-16 23:15:00<SeP>2024-04-18 10:42:45<SeP>2024-04-19 22:10:30<SeP>2024-04-21 09:38:15<SeP>2024-04-22 21:06:00<SeP>2024-04-24 08:33:45<SeP>2024-04-25 20:01:30<SeP>2024-04-27 07:29:15<SeP>2024-04-28 18:57:00<SeP>2024-04-30 06:24:45<SeP>2024-05-01 17:52:30<SeP>2024-05-03 05:20:15<SeP>2024-05-04 16:48:00<SeP>2024-05-06 04:15:45<SeP>2024-05-07 15:43:30<SeP>2024-05-09 03:11:15<SeP>2024-05-10 14:39:00<SeP>2024-05-12 02:06:45<SeP>2024-05-13 13:34:30<SeP>2024-05-15 01:02:15<SeP>2024-05-16 12:30:00<SeP>2024-05-17 23:57:45<SeP>2024-05-19 11:25:30<SeP>2024-05-20 22:53:15<SeP>2024-05-22 10:21:00<SeP>2024-05-23 21:48:45<SeP>2024-05-25 09:16:30<SeP>2024-05-26 20:44:15<SeP>2024-05-28 08:12:00<SeP>2024-05-29 19:39:45<SeP>2024-05-31 07:07:30<SeP>2024-06-01 18:35:15<SeP>2024-06-03 06:03:00<SeP>2024-06-04 17:30:45<SeP>2024-06-06 04:58:30<SeP>2024-06-07 16:26:15<SeP>2024-06-09 03:54:00<SeP>2024-06-10 15:21:45<SeP>2024-06-12 02:49:30<SeP>2024-06-13 14:17:15<SeP>2024-06-15 01:45:00<SeP>2024-06-16 13:12:45<SeP>2024-06-18 00:40:30<SeP>2024-06-19 12:08:15<SeP>2024-06-20 23:36:00<SeP>2024-06-22 11:03:45<SeP>2024-06-23 22:31:30<SeP>2024-06-25 09:59:15<SeP>2024-06-26 21:27:00<SeP>2024-06-28 08:54:45<SeP>2024-06-29 20:22:30<SeP>2024-07-01 07:50:15<SeP>2024-07-02 19:18:00<SeP>2024-07-04 06:45:45<SeP>2024-07-05 18:13:30<SeP>2024-07-07 05:41:15<SeP>2024-07-08 17:09:00<SeP>2024-07-10 04:36:45<SeP>2024-07-11 16:04:30<SeP>2024-07-13 03:32:15<SeP>2024-07-14 15:00:00<SeP>2024-07-16 02:27:45<SeP>2024-07-17 13:55:30<SeP>2024-07-19 01:23:15<SeP>2024-07-20 12:51:00<SeP>2024-07-22 00:18:45<SeP>2024-07-23 11:46:30<SeP>2024-07-24 23:14:15<SeP>2024-07-26 10:42:00<SeP>2024-07-27 22:09:45<SeP>2024-07-29 09:37:30<SeP>2024-07-30 21:05:15<SeP>2024-08-01 08:33:00<SeP>2024-08-02 20:00:45<SeP>2024-08-04 07:28:30<SeP>2024-08-05 18:56:15<SeP>2024-08-07 06:24:00<SeP>2024-08-08 17:51:45<SeP>2024-08-10 05:19:30<SeP>2024-08-11 16:47:15<SeP>2024-08-13 04:15:00<SeP>2024-08-14 15:42:45<SeP>2024-08-16 03:10:30<SeP>2024-08-17 14:38:15<SeP>2024-08-19 02:06:00<SeP>2024-08-20 13:33:45<SeP>2024-08-22 01:01:30<SeP>2024-08-23 12:29:15<SeP>2024-08-24 23:57:00<SeP>2024-08-26 11:24:45<SeP>2024-08-27 22:52:30<SeP>2024-08-29 10:20:15<SeP>2024-08-30 21:48:00<SeP>2024-09-01 09:15:45<SeP>2024-09-02 20:43:30<SeP>2024-09-04 08:11:15<SeP>2024-09-05 19:39:00<SeP>2024-09-07 07:06:45<SeP>2024-09-08 18:34:30<SeP>2024-09-10 06:02:15<SeP>2024-09-11 17:30:00<SeP>2024-09-13 04:57:45<SeP>2024-09-14 16:25:30<SeP>2024-09-16 03:53:15<SeP>2024-09-17 15:21:00<SeP>2024-09-19 02:48:45<SeP>2024-09-20 14:16:30<SeP>2024-09-22 01:44:15<SeP>2024-09-23 13:12:00<SeP>2024-09-25 00:39:45<SeP>2024-09-26 12:07:30<SeP>2024-09-27 23:35:15<SeP>2024-09-29 11:03:00<SeP>2024-09-30 22:30:45<SeP>2024-10-02 09:58:30<SeP>2024-10-03 21:26:15<SeP>2024-10-05 08:54:00<SeP>2024-10-06 20:21:45<SeP>2024-10-08 07:49:30<SeP>2024-10-09 19:17:15<SeP>2024-10-11 06:45:00<SeP>2024-10-12 18:12:45<SeP>2024-10-14 05:40:30<SeP>2024-10-15 17:08:15<SeP>2024-10-17 04:36:00<SeP>2024-10-18 16:03:45<SeP>2024-10-20 03:31:30<SeP>2024-10-21 14:59:15<SeP>2024-10-23 02:27:00<SeP>2024-10-24 13:54:45<SeP>2024-10-26 01:22:30<SeP>2024-10-27 12:50:15<SeP>2024-10-29 00:18:00<SeP>2024-10-30 11:45:45<SeP>2024-10-31 23:13:30<SeP>2024-11-02 10:41:15<SeP>2024-11-03 21:09:00<SeP>2024-11-05 08:36:45<SeP>2024-11-06 20:04:30<SeP>2024-11-08 07:32:15<SeP>2024-11-09 19:00:00<SeP>2024-11-11 06:27:45<SeP>2024-11-12 17:55:30<SeP>2024-11-14 05:23:15<SeP>2024-11-15 16:51:00<SeP>2024-11-17 04:18:45<SeP>2024-11-18 15:46:30<SeP>2024-11-20 03:14:15<SeP>2024-11-21 14:42:00<SeP>2024-11-23 02:09:45<SeP>2024-11-24 13:37:30<SeP>2024-11-26 01:05:15<SeP>2024-11-27 12:33:00<SeP>2024-11-29 00:00:45<SeP>2024-11-30 11:28:30<SeP>2024-12-01 22:56:15<SeP>2024-12-03 10:24:00<SeP>2024-12-04 21:51:45<SeP>2024-12-06 09:19:30<SeP>2024-12-07 20:47:15<SeP>2024-12-09 08:15:00<SeP>2024-12-10 19:42:45<SeP>2024-12-12 07:10:30<SeP>2024-12-13 18:38:15<SeP>2024-12-15 06:06:00<SeP>2024-12-16 17:33:45<SeP>2024-12-18 05:01:30<SeP>2024-12-19 16:29:15<SeP>2024-12-21 03:57:00<SeP>2024-12-22 15:24:45<SeP>2024-12-24 02:52:30<SeP>2024-12-25 14:20:15<SeP>2024-12-27 01:48:00<SeP>2024-12-28 13:15:45<SeP>2024-12-30 00:43:30<SeP>2024-12-31 12:11:15<SeP>2025-01-01 23:39:00<SeP>2025-01-03 11:06:45<SeP>2025-01-04 22:34:30<SeP>2025-01-06 10:02:15<SeP>2025-01-07 21:30:00<SeP>2025-01-09 08:57:45<SeP>2025-01-10 20:25:30<SeP>2025-01-12 07:53:15<SeP>2025-01-13 19:21:00<SeP>2025-01-15 06:48:45<SeP>2025-01-16 18:16:30<SeP>2025-01-18 05:44:15<SeP>2025-01-19 17:12:00<SeP>2025-01-21 04:39:45<SeP>2025-01-22 16:07:30<SeP>2025-01-24 03:35:15<SeP>2025-01-25 15:03:00<SeP>2025-01-27 02:30:45<SeP>2025-01-28 13:58:30<SeP>2025-01-30 01:26:15<SeP>2025-01-31 12:54:00<SeP>2025-02-02 00:21:45<SeP>2025-02-03 11:49:30<SeP>2025-02-04 23:17:15<SeP>2025-02-06 10:45:00<SeP>2025-02-07 22:12:45<SeP>2025-02-09 09:40:30<SeP>2025-02-10 21:08:15<SeP>2025-02-12 08:36:00<SeP>2025-02-13 20:03:45<SeP>2025-02-15 07:31:30<SeP>2025-02-16 18:59:15<SeP>2025-02-18 06:27:00<SeP>2025-02-19 17:54:45<SeP>2025-02-21 05:22:30<SeP>2025-02-22 16:50:15<SeP>2025-02-24 04:18:00<SeP>2025-02-25 15:45:45<SeP>2025-02-27 03:13:30<SeP>2025-02-28 14:41:15<SeP>2025-03-02 02:09:00<SeP>2025-03-03 13:36:45<SeP>2025-03-05 01:04:30<SeP>2025-03-06 12:32:15";
  const itemLabel       = "Attacks";
  const itemData        = "159<SeP>610<SeP>1367<SeP>688<SeP>220<SeP>238<SeP>7007<SeP>575<SeP>9437<SeP>563<SeP>401<SeP>1132<SeP>1295<SeP>242<SeP>303<SeP>310<SeP>140<SeP>747<SeP>344<SeP>7464<SeP>7166<SeP>6832<SeP>8901<SeP>3139<SeP>288<SeP>406<SeP>183<SeP>378<SeP>5804<SeP>215<SeP>369<SeP>134<SeP>539<SeP>324<SeP>8982<SeP>9420<SeP>10307<SeP>9783<SeP>6292<SeP>6037<SeP>8130<SeP>7996<SeP>9288<SeP>8123<SeP>7501<SeP>9303<SeP>7799<SeP>8755<SeP>8628<SeP>6104<SeP>8814<SeP>9713<SeP>6358<SeP>8446<SeP>8563<SeP>9231<SeP>18599<SeP>15867<SeP>9855<SeP>11353<SeP>6763<SeP>7738<SeP>8696<SeP>9641<SeP>8450<SeP>6650<SeP>6922<SeP>6524<SeP>6689<SeP>3732<SeP>6347<SeP>5532<SeP>6547<SeP>6865<SeP>7588<SeP>3588<SeP>6188<SeP>6290<SeP>6041<SeP>5295<SeP>7038<SeP>4627<SeP>6686<SeP>6017<SeP>5653<SeP>5784<SeP>6106<SeP>21844<SeP>11835<SeP>33990<SeP>7675<SeP>8168<SeP>7241<SeP>10922<SeP>8114<SeP>4314<SeP>6273<SeP>3461<SeP>5577<SeP>6937<SeP>4911<SeP>8887<SeP>6818<SeP>5472<SeP>4411<SeP>6157<SeP>9294<SeP>8153<SeP>8554<SeP>4239<SeP>6301<SeP>10643<SeP>8407<SeP>3900<SeP>3592<SeP>6985<SeP>9139<SeP>5930<SeP>7283<SeP>8469<SeP>2765<SeP>3138<SeP>1106<SeP>1637<SeP>2550<SeP>1793<SeP>872<SeP>1270<SeP>1008<SeP>1280<SeP>1317<SeP>1197<SeP>1181<SeP>757<SeP>1261<SeP>1046<SeP>1285<SeP>1344<SeP>1064<SeP>1813<SeP>2118<SeP>4227<SeP>11294<SeP>8414<SeP>7455<SeP>7660<SeP>12738<SeP>2723<SeP>9161<SeP>12144<SeP>9815<SeP>12380<SeP>9319<SeP>11212<SeP>11482<SeP>8687<SeP>13447<SeP>5188<SeP>4673<SeP>7241<SeP>23830<SeP>7762<SeP>7817<SeP>8091<SeP>17036<SeP>9803<SeP>7518<SeP>5544<SeP>6770<SeP>8398<SeP>25338<SeP>6989<SeP>10157<SeP>9180<SeP>5750<SeP>5183<SeP>7480<SeP>15134<SeP>5930<SeP>13450<SeP>8283<SeP>8562<SeP>6312<SeP>6481<SeP>3060<SeP>7536<SeP>7574<SeP>4795<SeP>6385<SeP>8614<SeP>3507<SeP>21667<SeP>7877<SeP>6546<SeP>5897<SeP>8626<SeP>10655<SeP>7152<SeP>2489<SeP>5965<SeP>4252<SeP>4688<SeP>4364<SeP>1610<SeP>620<SeP>639<SeP>202<SeP>543<SeP>633<SeP>773<SeP>427<SeP>925<SeP>1562<SeP>3190<SeP>1035<SeP>22521<SeP>1434<SeP>4909<SeP>2842<SeP>3590<SeP>6416<SeP>4565<SeP>2746<SeP>3669<SeP>2698<SeP>3054<SeP>3397<SeP>4522<SeP>1446<SeP>4139<SeP>1267<SeP>2718<SeP>1148<SeP>1918<SeP>1599<SeP>1385<SeP>1252<SeP>854<SeP>1720<SeP>26794<SeP>1769<SeP>4178<SeP>3810<SeP>2168<SeP>3692<SeP>2945<SeP>1784<SeP>3749<SeP>2610<SeP>3821<SeP>2031<SeP>3024<SeP>3481<SeP>5017<SeP>5650<SeP>4620<SeP>4309<SeP>2578<SeP>2732<SeP>4868<SeP>3975<SeP>10510<SeP>5158<SeP>2495<SeP>2865<SeP>2390<SeP>4320<SeP>4191<SeP>3669<SeP>2819<SeP>2617<SeP>6012<SeP>3546<SeP>5891<SeP>4485<SeP>5560<SeP>5857<SeP>5493<SeP>4736<SeP>22096<SeP>5766<SeP>10949<SeP>1779<SeP>2941<SeP>4316<SeP>3746<SeP>5015<SeP>3304<SeP>5158<SeP>4586<SeP>4819<SeP>3104<SeP>4243<SeP>1979<SeP>1493<SeP>2105<SeP>3998<SeP>2265<SeP>3146<SeP>3390<SeP>4742<SeP>3567<SeP>3587<SeP>4175<SeP>3397<SeP>3399<SeP>6209<SeP>7773<SeP>6074<SeP>4690<SeP>4840<SeP>4462<SeP>3929<SeP>4044<SeP>4054<SeP>6866<SeP>5087<SeP>4626<SeP>3062<SeP>778<SeP>1212<SeP>1753<SeP>1245<SeP>1234<SeP>2189<SeP>1075<SeP>1631<SeP>3528<SeP>5070<SeP>6628<SeP>34111<SeP>4826<SeP>4616<SeP>23670<SeP>5712<SeP>5566<SeP>5868<SeP>4252<SeP>24637<SeP>5145<SeP>5130<SeP>4903<SeP>5815<SeP>13906<SeP>21418<SeP>4399<SeP>3579<SeP>4420<SeP>5218<SeP>6098<SeP>3325<SeP>3177<SeP>3847<SeP>4592<SeP>5758<SeP>3875<SeP>17824<SeP>6190<SeP>7158<SeP>3467<SeP>2417<SeP>3509<SeP>4295<SeP>4029<SeP>4358<SeP>2579<SeP>4105<SeP>2151<SeP>4524<SeP>4452<SeP>8461<SeP>10636<SeP>8365<SeP>8810<SeP>8866<SeP>7929<SeP>4850<SeP>4824<SeP>4229<SeP>26084<SeP>3374<SeP>3119<SeP>4469<SeP>10186<SeP>5872<SeP>5096<SeP>3494<SeP>4987<SeP>3571<SeP>5444<SeP>9311<SeP>8291<SeP>4339<SeP>2744<SeP>3784<SeP>2052<SeP>1969<SeP>2571<SeP>2044<SeP>2458";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:27:45<SeP>2023-07-28 22:55:30<SeP>2023-07-30 10:23:15<SeP>2023-07-31 21:51:00<SeP>2023-08-02 09:18:45<SeP>2023-08-03 20:46:30<SeP>2023-08-05 08:14:15<SeP>2023-08-06 19:42:00<SeP>2023-08-08 07:09:45<SeP>2023-08-09 18:37:30<SeP>2023-08-11 06:05:15<SeP>2023-08-12 17:33:00<SeP>2023-08-14 05:00:45<SeP>2023-08-15 16:28:30<SeP>2023-08-17 03:56:15<SeP>2023-08-18 15:24:00<SeP>2023-08-20 02:51:45<SeP>2023-08-21 14:19:30<SeP>2023-08-23 01:47:15<SeP>2023-08-24 13:15:00<SeP>2023-08-26 00:42:45<SeP>2023-08-27 12:10:30<SeP>2023-08-28 23:38:15<SeP>2023-08-30 11:06:00<SeP>2023-08-31 22:33:45<SeP>2023-09-02 10:01:30<SeP>2023-09-03 21:29:15<SeP>2023-09-05 08:57:00<SeP>2023-09-06 20:24:45<SeP>2023-09-08 07:52:30<SeP>2023-09-09 19:20:15<SeP>2023-09-11 06:48:00<SeP>2023-09-12 18:15:45<SeP>2023-09-14 05:43:30<SeP>2023-09-15 17:11:15<SeP>2023-09-17 04:39:00<SeP>2023-09-18 16:06:45<SeP>2023-09-20 03:34:30<SeP>2023-09-21 15:02:15<SeP>2023-09-23 02:30:00<SeP>2023-09-24 13:57:45<SeP>2023-09-26 01:25:30<SeP>2023-09-27 12:53:15<SeP>2023-09-29 00:21:00<SeP>2023-09-30 11:48:45<SeP>2023-10-01 23:16:30<SeP>2023-10-03 10:44:15<SeP>2023-10-04 22:12:00<SeP>2023-10-06 09:39:45<SeP>2023-10-07 21:07:30<SeP>2023-10-09 08:35:15<SeP>2023-10-10 20:03:00<SeP>2023-10-12 07:30:45<SeP>2023-10-13 18:58:30<SeP>2023-10-15 06:26:15<SeP>2023-10-16 17:54:00<SeP>2023-10-18 05:21:45<SeP>2023-10-19 16:49:30<SeP>2023-10-21 04:17:15<SeP>2023-10-22 15:45:00<SeP>2023-10-24 03:12:45<SeP>2023-10-25 14:40:30<SeP>2023-10-27 02:08:15<SeP>2023-10-28 13:36:00<SeP>2023-10-30 01:03:45<SeP>2023-10-31 12:31:30<SeP>2023-11-01 23:59:15<SeP>2023-11-03 11:27:00<SeP>2023-11-04 22:54:45<SeP>2023-11-06 09:22:30<SeP>2023-11-07 20:50:15<SeP>2023-11-09 08:18:00<SeP>2023-11-10 19:45:45<SeP>2023-11-12 07:13:30<SeP>2023-11-13 18:41:15<SeP>2023-11-15 06:09:00<SeP>2023-11-16 17:36:45<SeP>2023-11-18 05:04:30<SeP>2023-11-19 16:32:15<SeP>2023-11-21 04:00:00<SeP>2023-11-22 15:27:45<SeP>2023-11-24 02:55:30<SeP>2023-11-25 14:23:15<SeP>2023-11-27 01:51:00<SeP>2023-11-28 13:18:45<SeP>2023-11-30 00:46:30<SeP>2023-12-01 12:14:15<SeP>2023-12-02 23:42:00<SeP>2023-12-04 11:09:45<SeP>2023-12-05 22:37:30<SeP>2023-12-07 10:05:15<SeP>2023-12-08 21:33:00<SeP>2023-12-10 09:00:45<SeP>2023-12-11 20:28:30<SeP>2023-12-13 07:56:15<SeP>2023-12-14 19:24:00<SeP>2023-12-16 06:51:45<SeP>2023-12-17 18:19:30<SeP>2023-12-19 05:47:15<SeP>2023-12-20 17:15:00<SeP>2023-12-22 04:42:45<SeP>2023-12-23 16:10:30<SeP>2023-12-25 03:38:15<SeP>2023-12-26 15:06:00<SeP>2023-12-28 02:33:45<SeP>2023-12-29 14:01:30<SeP>2023-12-31 01:29:15<SeP>2024-01-01 12:57:00<SeP>2024-01-03 00:24:45<SeP>2024-01-04 11:52:30<SeP>2024-01-05 23:20:15<SeP>2024-01-07 10:48:00<SeP>2024-01-08 22:15:45<SeP>2024-01-10 09:43:30<SeP>2024-01-11 21:11:15<SeP>2024-01-13 08:39:00<SeP>2024-01-14 20:06:45<SeP>2024-01-16 07:34:30<SeP>2024-01-17 19:02:15<SeP>2024-01-19 06:30:00<SeP>2024-01-20 17:57:45<SeP>2024-01-22 05:25:30<SeP>2024-01-23 16:53:15<SeP>2024-01-25 04:21:00<SeP>2024-01-26 15:48:45<SeP>2024-01-28 03:16:30<SeP>2024-01-29 14:44:15<SeP>2024-01-31 02:12:00<SeP>2024-02-01 13:39:45<SeP>2024-02-03 01:07:30<SeP>2024-02-04 12:35:15<SeP>2024-02-06 00:03:00<SeP>2024-02-07 11:30:45<SeP>2024-02-08 22:58:30<SeP>2024-02-10 10:26:15<SeP>2024-02-11 21:54:00<SeP>2024-02-13 09:21:45<SeP>2024-02-14 20:49:30<SeP>2024-02-16 08:17:15<SeP>2024-02-17 19:45:00<SeP>2024-02-19 07:12:45<SeP>2024-02-20 18:40:30<SeP>2024-02-22 06:08:15<SeP>2024-02-23 17:36:00<SeP>2024-02-25 05:03:45<SeP>2024-02-26 16:31:30<SeP>2024-02-28 03:59:15<SeP>2024-02-29 15:27:00<SeP>2024-03-02 02:54:45<SeP>2024-03-03 14:22:30<SeP>2024-03-05 01:50:15<SeP>2024-03-06 13:18:00<SeP>2024-03-08 00:45:45<SeP>2024-03-09 12:13:30<SeP>2024-03-11 00:41:15<SeP>2024-03-12 12:09:00<SeP>2024-03-13 23:36:45<SeP>2024-03-15 11:04:30<SeP>2024-03-16 22:32:15<SeP>2024-03-18 10:00:00<SeP>2024-03-19 21:27:45<SeP>2024-03-21 08:55:30<SeP>2024-03-22 20:23:15<SeP>2024-03-24 07:51:00<SeP>2024-03-25 19:18:45<SeP>2024-03-27 06:46:30<SeP>2024-03-28 18:14:15<SeP>2024-03-30 05:42:00<SeP>2024-03-31 17:09:45<SeP>2024-04-02 04:37:30<SeP>2024-04-03 16:05:15<SeP>2024-04-05 03:33:00<SeP>2024-04-06 15:00:45<SeP>2024-04-08 02:28:30<SeP>2024-04-09 13:56:15<SeP>2024-04-11 01:24:00<SeP>2024-04-12 12:51:45<SeP>2024-04-14 00:19:30<SeP>2024-04-15 11:47:15<SeP>2024-04-16 23:15:00<SeP>2024-04-18 10:42:45<SeP>2024-04-19 22:10:30<SeP>2024-04-21 09:38:15<SeP>2024-04-22 21:06:00<SeP>2024-04-24 08:33:45<SeP>2024-04-25 20:01:30<SeP>2024-04-27 07:29:15<SeP>2024-04-28 18:57:00<SeP>2024-04-30 06:24:45<SeP>2024-05-01 17:52:30<SeP>2024-05-03 05:20:15<SeP>2024-05-04 16:48:00<SeP>2024-05-06 04:15:45<SeP>2024-05-07 15:43:30<SeP>2024-05-09 03:11:15<SeP>2024-05-10 14:39:00<SeP>2024-05-12 02:06:45<SeP>2024-05-13 13:34:30<SeP>2024-05-15 01:02:15<SeP>2024-05-16 12:30:00<SeP>2024-05-17 23:57:45<SeP>2024-05-19 11:25:30<SeP>2024-05-20 22:53:15<SeP>2024-05-22 10:21:00<SeP>2024-05-23 21:48:45<SeP>2024-05-25 09:16:30<SeP>2024-05-26 20:44:15<SeP>2024-05-28 08:12:00<SeP>2024-05-29 19:39:45<SeP>2024-05-31 07:07:30<SeP>2024-06-01 18:35:15<SeP>2024-06-03 06:03:00<SeP>2024-06-04 17:30:45<SeP>2024-06-06 04:58:30<SeP>2024-06-07 16:26:15<SeP>2024-06-09 03:54:00<SeP>2024-06-10 15:21:45<SeP>2024-06-12 02:49:30<SeP>2024-06-13 14:17:15<SeP>2024-06-15 01:45:00<SeP>2024-06-16 13:12:45<SeP>2024-06-18 00:40:30<SeP>2024-06-19 12:08:15<SeP>2024-06-20 23:36:00<SeP>2024-06-22 11:03:45<SeP>2024-06-23 22:31:30<SeP>2024-06-25 09:59:15<SeP>2024-06-26 21:27:00<SeP>2024-06-28 08:54:45<SeP>2024-06-29 20:22:30<SeP>2024-07-01 07:50:15<SeP>2024-07-02 19:18:00<SeP>2024-07-04 06:45:45<SeP>2024-07-05 18:13:30<SeP>2024-07-07 05:41:15<SeP>2024-07-08 17:09:00<SeP>2024-07-10 04:36:45<SeP>2024-07-11 16:04:30<SeP>2024-07-13 03:32:15<SeP>2024-07-14 15:00:00<SeP>2024-07-16 02:27:45<SeP>2024-07-17 13:55:30<SeP>2024-07-19 01:23:15<SeP>2024-07-20 12:51:00<SeP>2024-07-22 00:18:45<SeP>2024-07-23 11:46:30<SeP>2024-07-24 23:14:15<SeP>2024-07-26 10:42:00<SeP>2024-07-27 22:09:45<SeP>2024-07-29 09:37:30<SeP>2024-07-30 21:05:15<SeP>2024-08-01 08:33:00<SeP>2024-08-02 20:00:45<SeP>2024-08-04 07:28:30<SeP>2024-08-05 18:56:15<SeP>2024-08-07 06:24:00<SeP>2024-08-08 17:51:45<SeP>2024-08-10 05:19:30<SeP>2024-08-11 16:47:15<SeP>2024-08-13 04:15:00<SeP>2024-08-14 15:42:45<SeP>2024-08-16 03:10:30<SeP>2024-08-17 14:38:15<SeP>2024-08-19 02:06:00<SeP>2024-08-20 13:33:45<SeP>2024-08-22 01:01:30<SeP>2024-08-23 12:29:15<SeP>2024-08-24 23:57:00<SeP>2024-08-26 11:24:45<SeP>2024-08-27 22:52:30<SeP>2024-08-29 10:20:15<SeP>2024-08-30 21:48:00<SeP>2024-09-01 09:15:45<SeP>2024-09-02 20:43:30<SeP>2024-09-04 08:11:15<SeP>2024-09-05 19:39:00<SeP>2024-09-07 07:06:45<SeP>2024-09-08 18:34:30<SeP>2024-09-10 06:02:15<SeP>2024-09-11 17:30:00<SeP>2024-09-13 04:57:45<SeP>2024-09-14 16:25:30<SeP>2024-09-16 03:53:15<SeP>2024-09-17 15:21:00<SeP>2024-09-19 02:48:45<SeP>2024-09-20 14:16:30<SeP>2024-09-22 01:44:15<SeP>2024-09-23 13:12:00<SeP>2024-09-25 00:39:45<SeP>2024-09-26 12:07:30<SeP>2024-09-27 23:35:15<SeP>2024-09-29 11:03:00<SeP>2024-09-30 22:30:45<SeP>2024-10-02 09:58:30<SeP>2024-10-03 21:26:15<SeP>2024-10-05 08:54:00<SeP>2024-10-06 20:21:45<SeP>2024-10-08 07:49:30<SeP>2024-10-09 19:17:15<SeP>2024-10-11 06:45:00<SeP>2024-10-12 18:12:45<SeP>2024-10-14 05:40:30<SeP>2024-10-15 17:08:15<SeP>2024-10-17 04:36:00<SeP>2024-10-18 16:03:45<SeP>2024-10-20 03:31:30<SeP>2024-10-21 14:59:15<SeP>2024-10-23 02:27:00<SeP>2024-10-24 13:54:45<SeP>2024-10-26 01:22:30<SeP>2024-10-27 12:50:15<SeP>2024-10-29 00:18:00<SeP>2024-10-30 11:45:45<SeP>2024-10-31 23:13:30<SeP>2024-11-02 10:41:15<SeP>2024-11-03 21:09:00<SeP>2024-11-05 08:36:45<SeP>2024-11-06 20:04:30<SeP>2024-11-08 07:32:15<SeP>2024-11-09 19:00:00<SeP>2024-11-11 06:27:45<SeP>2024-11-12 17:55:30<SeP>2024-11-14 05:23:15<SeP>2024-11-15 16:51:00<SeP>2024-11-17 04:18:45<SeP>2024-11-18 15:46:30<SeP>2024-11-20 03:14:15<SeP>2024-11-21 14:42:00<SeP>2024-11-23 02:09:45<SeP>2024-11-24 13:37:30<SeP>2024-11-26 01:05:15<SeP>2024-11-27 12:33:00<SeP>2024-11-29 00:00:45<SeP>2024-11-30 11:28:30<SeP>2024-12-01 22:56:15<SeP>2024-12-03 10:24:00<SeP>2024-12-04 21:51:45<SeP>2024-12-06 09:19:30<SeP>2024-12-07 20:47:15<SeP>2024-12-09 08:15:00<SeP>2024-12-10 19:42:45<SeP>2024-12-12 07:10:30<SeP>2024-12-13 18:38:15<SeP>2024-12-15 06:06:00<SeP>2024-12-16 17:33:45<SeP>2024-12-18 05:01:30<SeP>2024-12-19 16:29:15<SeP>2024-12-21 03:57:00<SeP>2024-12-22 15:24:45<SeP>2024-12-24 02:52:30<SeP>2024-12-25 14:20:15<SeP>2024-12-27 01:48:00<SeP>2024-12-28 13:15:45<SeP>2024-12-30 00:43:30<SeP>2024-12-31 12:11:15<SeP>2025-01-01 23:39:00<SeP>2025-01-03 11:06:45<SeP>2025-01-04 22:34:30<SeP>2025-01-06 10:02:15<SeP>2025-01-07 21:30:00<SeP>2025-01-09 08:57:45<SeP>2025-01-10 20:25:30<SeP>2025-01-12 07:53:15<SeP>2025-01-13 19:21:00<SeP>2025-01-15 06:48:45<SeP>2025-01-16 18:16:30<SeP>2025-01-18 05:44:15<SeP>2025-01-19 17:12:00<SeP>2025-01-21 04:39:45<SeP>2025-01-22 16:07:30<SeP>2025-01-24 03:35:15<SeP>2025-01-25 15:03:00<SeP>2025-01-27 02:30:45<SeP>2025-01-28 13:58:30<SeP>2025-01-30 01:26:15<SeP>2025-01-31 12:54:00<SeP>2025-02-02 00:21:45<SeP>2025-02-03 11:49:30<SeP>2025-02-04 23:17:15<SeP>2025-02-06 10:45:00<SeP>2025-02-07 22:12:45<SeP>2025-02-09 09:40:30<SeP>2025-02-10 21:08:15<SeP>2025-02-12 08:36:00<SeP>2025-02-13 20:03:45<SeP>2025-02-15 07:31:30<SeP>2025-02-16 18:59:15<SeP>2025-02-18 06:27:00<SeP>2025-02-19 17:54:45<SeP>2025-02-21 05:22:30<SeP>2025-02-22 16:50:15<SeP>2025-02-24 04:18:00<SeP>2025-02-25 15:45:45<SeP>2025-02-27 03:13:30<SeP>2025-02-28 14:41:15<SeP>2025-03-02 02:09:00<SeP>2025-03-03 13:36:45<SeP>2025-03-05 01:04:30<SeP>2025-03-06 12:32:15";
  const item1Label       = "Escaneos";
  const item1Data        = "774<SeP>1518<SeP>1371<SeP>1494<SeP>1224<SeP>1755<SeP>939<SeP>977<SeP>1145<SeP>3411<SeP>3030<SeP>1402<SeP>3299<SeP>886<SeP>773<SeP>890<SeP>1434<SeP>2934<SeP>1795<SeP>1228<SeP>1254<SeP>906<SeP>1048<SeP>1275<SeP>891<SeP>816<SeP>973<SeP>3672<SeP>841<SeP>867<SeP>1192<SeP>1436<SeP>869<SeP>1056<SeP>3062<SeP>2908<SeP>1817<SeP>1487<SeP>1760<SeP>1314<SeP>1651<SeP>1955<SeP>2115<SeP>1565<SeP>1782<SeP>1574<SeP>1601<SeP>1815<SeP>1694<SeP>2147<SeP>1505<SeP>1697<SeP>2124<SeP>2854<SeP>1408<SeP>1771<SeP>1913<SeP>2452<SeP>1492<SeP>2972<SeP>2308<SeP>1426<SeP>1616<SeP>1340<SeP>1812<SeP>1622<SeP>1531<SeP>1263<SeP>1453<SeP>1177<SeP>2403<SeP>1261<SeP>1051<SeP>1371<SeP>2492<SeP>7001<SeP>1346<SeP>1347<SeP>1538<SeP>2059<SeP>1191<SeP>3374<SeP>4556<SeP>1615<SeP>1480<SeP>1020<SeP>3280<SeP>1257<SeP>1104<SeP>975<SeP>1115<SeP>1074<SeP>3008<SeP>928<SeP>1438<SeP>3029<SeP>5425<SeP>2486<SeP>1029<SeP>929<SeP>918<SeP>1015<SeP>1007<SeP>1007<SeP>1034<SeP>3855<SeP>2179<SeP>1430<SeP>1643<SeP>598<SeP>986<SeP>1594<SeP>1186<SeP>1011<SeP>999<SeP>2314<SeP>1327<SeP>1039<SeP>955<SeP>1111<SeP>802<SeP>869<SeP>859<SeP>825<SeP>880<SeP>1092<SeP>799<SeP>822<SeP>923<SeP>862<SeP>894<SeP>665<SeP>864<SeP>856<SeP>928<SeP>895<SeP>857<SeP>795<SeP>756<SeP>991<SeP>913<SeP>805<SeP>910<SeP>1026<SeP>837<SeP>1098<SeP>995<SeP>454<SeP>965<SeP>884<SeP>947<SeP>1162<SeP>1050<SeP>1137<SeP>1188<SeP>1005<SeP>935<SeP>978<SeP>996<SeP>730<SeP>1006<SeP>1048<SeP>958<SeP>823<SeP>946<SeP>1079<SeP>1023<SeP>1101<SeP>967<SeP>1144<SeP>884<SeP>885<SeP>1666<SeP>1680<SeP>1274<SeP>989<SeP>1041<SeP>1192<SeP>1000<SeP>962<SeP>798<SeP>808<SeP>908<SeP>1143<SeP>807<SeP>1074<SeP>1289<SeP>1065<SeP>1215<SeP>1330<SeP>1174<SeP>1316<SeP>1266<SeP>1306<SeP>1531<SeP>1730<SeP>1710<SeP>1371<SeP>750<SeP>830<SeP>1128<SeP>1103<SeP>620<SeP>722<SeP>864<SeP>1008<SeP>1590<SeP>5807<SeP>2481<SeP>1968<SeP>1276<SeP>894<SeP>994<SeP>940<SeP>981<SeP>921<SeP>1114<SeP>1086<SeP>1056<SeP>2045<SeP>1485<SeP>1054<SeP>1254<SeP>1239<SeP>1219<SeP>1106<SeP>978<SeP>1099<SeP>1074<SeP>1117<SeP>1046<SeP>1146<SeP>1125<SeP>995<SeP>925<SeP>1294<SeP>1131<SeP>1188<SeP>1208<SeP>1387<SeP>1240<SeP>1497<SeP>1255<SeP>1083<SeP>1204<SeP>1182<SeP>1974<SeP>1280<SeP>1897<SeP>1687<SeP>1502<SeP>2027<SeP>1579<SeP>1154<SeP>1149<SeP>1451<SeP>1068<SeP>1582<SeP>1267<SeP>1252<SeP>1711<SeP>1699<SeP>1399<SeP>1450<SeP>1476<SeP>1245<SeP>1091<SeP>1108<SeP>1399<SeP>1090<SeP>1248<SeP>1343<SeP>1198<SeP>1426<SeP>1955<SeP>1330<SeP>1393<SeP>1559<SeP>1384<SeP>1088<SeP>1001<SeP>996<SeP>956<SeP>909<SeP>998<SeP>1779<SeP>1166<SeP>1068<SeP>1127<SeP>971<SeP>773<SeP>1145<SeP>1355<SeP>855<SeP>924<SeP>953<SeP>1320<SeP>1625<SeP>1490<SeP>1040<SeP>1153<SeP>992<SeP>1871<SeP>1082<SeP>1167<SeP>1084<SeP>1269<SeP>1290<SeP>999<SeP>976<SeP>1252<SeP>1024<SeP>956<SeP>833<SeP>1286<SeP>1420<SeP>1494<SeP>1642<SeP>1449<SeP>954<SeP>1131<SeP>1123<SeP>1145<SeP>1147<SeP>1159<SeP>1061<SeP>1023<SeP>1304<SeP>1597<SeP>1295<SeP>1589<SeP>1366<SeP>1422<SeP>1611<SeP>1362<SeP>1475<SeP>1390<SeP>1356<SeP>1301<SeP>1766<SeP>1458<SeP>1529<SeP>1530<SeP>1278<SeP>1464<SeP>1262<SeP>1300<SeP>1432<SeP>1442<SeP>1619<SeP>1243<SeP>1318<SeP>1285<SeP>1372<SeP>1358<SeP>1180<SeP>1446<SeP>1919<SeP>1607<SeP>1249<SeP>709<SeP>1461<SeP>1828<SeP>1306<SeP>1319<SeP>1233<SeP>1157<SeP>1399<SeP>1495<SeP>1324<SeP>1520<SeP>1669<SeP>1392<SeP>1507<SeP>1770<SeP>1323<SeP>1506<SeP>1619<SeP>1661<SeP>1316<SeP>1086<SeP>1613<SeP>1732<SeP>1962<SeP>1747<SeP>1787<SeP>1637<SeP>1625<SeP>1576<SeP>1619<SeP>1532<SeP>1575<SeP>1743<SeP>1918<SeP>1430<SeP>1554<SeP>1249<SeP>1759<SeP>1415<SeP>2067";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "159<SeP>610<SeP>1367<SeP>688<SeP>220<SeP>238<SeP>7007<SeP>575<SeP>9437<SeP>563<SeP>401<SeP>1132<SeP>1295<SeP>242<SeP>303<SeP>310<SeP>140<SeP>747<SeP>344<SeP>7464<SeP>7166<SeP>6832<SeP>8901<SeP>3139<SeP>288<SeP>406<SeP>183<SeP>378<SeP>5804<SeP>215<SeP>369<SeP>134<SeP>539<SeP>324<SeP>8982<SeP>9420<SeP>10307<SeP>9783<SeP>6292<SeP>6037<SeP>8130<SeP>7996<SeP>9288<SeP>8123<SeP>7501<SeP>9303<SeP>7799<SeP>8755<SeP>8628<SeP>6104<SeP>8814<SeP>9713<SeP>6358<SeP>8446<SeP>8563<SeP>9231<SeP>18599<SeP>15867<SeP>9855<SeP>11353<SeP>6763<SeP>7738<SeP>8696<SeP>9641<SeP>8450<SeP>6650<SeP>6922<SeP>6524<SeP>6689<SeP>3732<SeP>6347<SeP>5532<SeP>6547<SeP>6865<SeP>7588<SeP>3588<SeP>6188<SeP>6290<SeP>6041<SeP>5295<SeP>7038<SeP>4627<SeP>6686<SeP>6017<SeP>5653<SeP>5784<SeP>6106<SeP>21844<SeP>11835<SeP>33990<SeP>7675<SeP>8168<SeP>7241<SeP>10922<SeP>8114<SeP>4314<SeP>6273<SeP>3461<SeP>5577<SeP>6937<SeP>4911<SeP>8887<SeP>6818<SeP>5472<SeP>4411<SeP>6157<SeP>9294<SeP>8153<SeP>8554<SeP>4239<SeP>6301<SeP>10643<SeP>8407<SeP>3900<SeP>3592<SeP>6985<SeP>9139<SeP>5930<SeP>7283<SeP>8469<SeP>2765<SeP>3138<SeP>1106<SeP>1637<SeP>2550<SeP>1793<SeP>872<SeP>1270<SeP>1008<SeP>1280<SeP>1317<SeP>1197<SeP>1181<SeP>757<SeP>1261<SeP>1046<SeP>1285<SeP>1344<SeP>1064<SeP>1813<SeP>2118<SeP>4227<SeP>11294<SeP>8414<SeP>7455<SeP>7660<SeP>12738<SeP>2723<SeP>9161<SeP>12144<SeP>9815<SeP>12380<SeP>9319<SeP>11212<SeP>11482<SeP>8687<SeP>13447<SeP>5188<SeP>4673<SeP>7241<SeP>23830<SeP>7762<SeP>7817<SeP>8091<SeP>17036<SeP>9803<SeP>7518<SeP>5544<SeP>6770<SeP>8398<SeP>25338<SeP>6989<SeP>10157<SeP>9180<SeP>5750<SeP>5183<SeP>7480<SeP>15134<SeP>5930<SeP>13450<SeP>8283<SeP>8562<SeP>6312<SeP>6481<SeP>3060<SeP>7536<SeP>7574<SeP>4795<SeP>6385<SeP>8614<SeP>3507<SeP>21667<SeP>7877<SeP>6546<SeP>5897<SeP>8626<SeP>10655<SeP>7152<SeP>2489<SeP>5965<SeP>4252<SeP>4688<SeP>4364<SeP>1610<SeP>620<SeP>639<SeP>202<SeP>543<SeP>633<SeP>773<SeP>427<SeP>925<SeP>1562<SeP>3190<SeP>1035<SeP>22521<SeP>1434<SeP>4909<SeP>2842<SeP>3590<SeP>6416<SeP>4565<SeP>2746<SeP>3669<SeP>2698<SeP>3054<SeP>3397<SeP>4522<SeP>1446<SeP>4139<SeP>1267<SeP>2718<SeP>1148<SeP>1918<SeP>1599<SeP>1385<SeP>1252<SeP>854<SeP>1720<SeP>26794<SeP>1769<SeP>4178<SeP>3810<SeP>2168<SeP>3692<SeP>2945<SeP>1784<SeP>3749<SeP>2610<SeP>3821<SeP>2031<SeP>3024<SeP>3481<SeP>5017<SeP>5650<SeP>4620<SeP>4309<SeP>2578<SeP>2732<SeP>4868<SeP>3975<SeP>10510<SeP>5158<SeP>2495<SeP>2865<SeP>2390<SeP>4320<SeP>4191<SeP>3669<SeP>2819<SeP>2617<SeP>6012<SeP>3546<SeP>5891<SeP>4485<SeP>5560<SeP>5857<SeP>5493<SeP>4736<SeP>22096<SeP>5766<SeP>10949<SeP>1779<SeP>2941<SeP>4316<SeP>3746<SeP>5015<SeP>3304<SeP>5158<SeP>4586<SeP>4819<SeP>3104<SeP>4243<SeP>1979<SeP>1493<SeP>2105<SeP>3998<SeP>2265<SeP>3146<SeP>3390<SeP>4742<SeP>3567<SeP>3587<SeP>4175<SeP>3397<SeP>3399<SeP>6209<SeP>7773<SeP>6074<SeP>4690<SeP>4840<SeP>4462<SeP>3929<SeP>4044<SeP>4054<SeP>6866<SeP>5087<SeP>4626<SeP>3062<SeP>778<SeP>1212<SeP>1753<SeP>1245<SeP>1234<SeP>2189<SeP>1075<SeP>1631<SeP>3528<SeP>5070<SeP>6628<SeP>34111<SeP>4826<SeP>4616<SeP>23670<SeP>5712<SeP>5566<SeP>5868<SeP>4252<SeP>24637<SeP>5145<SeP>5130<SeP>4903<SeP>5815<SeP>13906<SeP>21418<SeP>4399<SeP>3579<SeP>4420<SeP>5218<SeP>6098<SeP>3325<SeP>3177<SeP>3847<SeP>4592<SeP>5758<SeP>3875<SeP>17824<SeP>6190<SeP>7158<SeP>3467<SeP>2417<SeP>3509<SeP>4295<SeP>4029<SeP>4358<SeP>2579<SeP>4105<SeP>2151<SeP>4524<SeP>4452<SeP>8461<SeP>10636<SeP>8365<SeP>8810<SeP>8866<SeP>7929<SeP>4850<SeP>4824<SeP>4229<SeP>26084<SeP>3374<SeP>3119<SeP>4469<SeP>10186<SeP>5872<SeP>5096<SeP>3494<SeP>4987<SeP>3571<SeP>5444<SeP>9311<SeP>8291<SeP>4339<SeP>2744<SeP>3784<SeP>2052<SeP>1969<SeP>2571<SeP>2044<SeP>2458";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:27:45<SeP>2023-07-28 22:55:30<SeP>2023-07-30 10:23:15<SeP>2023-07-31 21:51:00<SeP>2023-08-02 09:18:45<SeP>2023-08-03 20:46:30<SeP>2023-08-05 08:14:15<SeP>2023-08-06 19:42:00<SeP>2023-08-08 07:09:45<SeP>2023-08-09 18:37:30<SeP>2023-08-11 06:05:15<SeP>2023-08-12 17:33:00<SeP>2023-08-14 05:00:45<SeP>2023-08-15 16:28:30<SeP>2023-08-17 03:56:15<SeP>2023-08-18 15:24:00<SeP>2023-08-20 02:51:45<SeP>2023-08-21 14:19:30<SeP>2023-08-23 01:47:15<SeP>2023-08-24 13:15:00<SeP>2023-08-26 00:42:45<SeP>2023-08-27 12:10:30<SeP>2023-08-28 23:38:15<SeP>2023-08-30 11:06:00<SeP>2023-08-31 22:33:45<SeP>2023-09-02 10:01:30<SeP>2023-09-03 21:29:15<SeP>2023-09-05 08:57:00<SeP>2023-09-06 20:24:45<SeP>2023-09-08 07:52:30<SeP>2023-09-09 19:20:15<SeP>2023-09-11 06:48:00<SeP>2023-09-12 18:15:45<SeP>2023-09-14 05:43:30<SeP>2023-09-15 17:11:15<SeP>2023-09-17 04:39:00<SeP>2023-09-18 16:06:45<SeP>2023-09-20 03:34:30<SeP>2023-09-21 15:02:15<SeP>2023-09-23 02:30:00<SeP>2023-09-24 13:57:45<SeP>2023-09-26 01:25:30<SeP>2023-09-27 12:53:15<SeP>2023-09-29 00:21:00<SeP>2023-09-30 11:48:45<SeP>2023-10-01 23:16:30<SeP>2023-10-03 10:44:15<SeP>2023-10-04 22:12:00<SeP>2023-10-06 09:39:45<SeP>2023-10-07 21:07:30<SeP>2023-10-09 08:35:15<SeP>2023-10-10 20:03:00<SeP>2023-10-12 07:30:45<SeP>2023-10-13 18:58:30<SeP>2023-10-15 06:26:15<SeP>2023-10-16 17:54:00<SeP>2023-10-18 05:21:45<SeP>2023-10-19 16:49:30<SeP>2023-10-21 04:17:15<SeP>2023-10-22 15:45:00<SeP>2023-10-24 03:12:45<SeP>2023-10-25 14:40:30<SeP>2023-10-27 02:08:15<SeP>2023-10-28 13:36:00<SeP>2023-10-30 01:03:45<SeP>2023-10-31 12:31:30<SeP>2023-11-01 23:59:15<SeP>2023-11-03 11:27:00<SeP>2023-11-04 22:54:45<SeP>2023-11-06 09:22:30<SeP>2023-11-07 20:50:15<SeP>2023-11-09 08:18:00<SeP>2023-11-10 19:45:45<SeP>2023-11-12 07:13:30<SeP>2023-11-13 18:41:15<SeP>2023-11-15 06:09:00<SeP>2023-11-16 17:36:45<SeP>2023-11-18 05:04:30<SeP>2023-11-19 16:32:15<SeP>2023-11-21 04:00:00<SeP>2023-11-22 15:27:45<SeP>2023-11-24 02:55:30<SeP>2023-11-25 14:23:15<SeP>2023-11-27 01:51:00<SeP>2023-11-28 13:18:45<SeP>2023-11-30 00:46:30<SeP>2023-12-01 12:14:15<SeP>2023-12-02 23:42:00<SeP>2023-12-04 11:09:45<SeP>2023-12-05 22:37:30<SeP>2023-12-07 10:05:15<SeP>2023-12-08 21:33:00<SeP>2023-12-10 09:00:45<SeP>2023-12-11 20:28:30<SeP>2023-12-13 07:56:15<SeP>2023-12-14 19:24:00<SeP>2023-12-16 06:51:45<SeP>2023-12-17 18:19:30<SeP>2023-12-19 05:47:15<SeP>2023-12-20 17:15:00<SeP>2023-12-22 04:42:45<SeP>2023-12-23 16:10:30<SeP>2023-12-25 03:38:15<SeP>2023-12-26 15:06:00<SeP>2023-12-28 02:33:45<SeP>2023-12-29 14:01:30<SeP>2023-12-31 01:29:15<SeP>2024-01-01 12:57:00<SeP>2024-01-03 00:24:45<SeP>2024-01-04 11:52:30<SeP>2024-01-05 23:20:15<SeP>2024-01-07 10:48:00<SeP>2024-01-08 22:15:45<SeP>2024-01-10 09:43:30<SeP>2024-01-11 21:11:15<SeP>2024-01-13 08:39:00<SeP>2024-01-14 20:06:45<SeP>2024-01-16 07:34:30<SeP>2024-01-17 19:02:15<SeP>2024-01-19 06:30:00<SeP>2024-01-20 17:57:45<SeP>2024-01-22 05:25:30<SeP>2024-01-23 16:53:15<SeP>2024-01-25 04:21:00<SeP>2024-01-26 15:48:45<SeP>2024-01-28 03:16:30<SeP>2024-01-29 14:44:15<SeP>2024-01-31 02:12:00<SeP>2024-02-01 13:39:45<SeP>2024-02-03 01:07:30<SeP>2024-02-04 12:35:15<SeP>2024-02-06 00:03:00<SeP>2024-02-07 11:30:45<SeP>2024-02-08 22:58:30<SeP>2024-02-10 10:26:15<SeP>2024-02-11 21:54:00<SeP>2024-02-13 09:21:45<SeP>2024-02-14 20:49:30<SeP>2024-02-16 08:17:15<SeP>2024-02-17 19:45:00<SeP>2024-02-19 07:12:45<SeP>2024-02-20 18:40:30<SeP>2024-02-22 06:08:15<SeP>2024-02-23 17:36:00<SeP>2024-02-25 05:03:45<SeP>2024-02-26 16:31:30<SeP>2024-02-28 03:59:15<SeP>2024-02-29 15:27:00<SeP>2024-03-02 02:54:45<SeP>2024-03-03 14:22:30<SeP>2024-03-05 01:50:15<SeP>2024-03-06 13:18:00<SeP>2024-03-08 00:45:45<SeP>2024-03-09 12:13:30<SeP>2024-03-11 00:41:15<SeP>2024-03-12 12:09:00<SeP>2024-03-13 23:36:45<SeP>2024-03-15 11:04:30<SeP>2024-03-16 22:32:15<SeP>2024-03-18 10:00:00<SeP>2024-03-19 21:27:45<SeP>2024-03-21 08:55:30<SeP>2024-03-22 20:23:15<SeP>2024-03-24 07:51:00<SeP>2024-03-25 19:18:45<SeP>2024-03-27 06:46:30<SeP>2024-03-28 18:14:15<SeP>2024-03-30 05:42:00<SeP>2024-03-31 17:09:45<SeP>2024-04-02 04:37:30<SeP>2024-04-03 16:05:15<SeP>2024-04-05 03:33:00<SeP>2024-04-06 15:00:45<SeP>2024-04-08 02:28:30<SeP>2024-04-09 13:56:15<SeP>2024-04-11 01:24:00<SeP>2024-04-12 12:51:45<SeP>2024-04-14 00:19:30<SeP>2024-04-15 11:47:15<SeP>2024-04-16 23:15:00<SeP>2024-04-18 10:42:45<SeP>2024-04-19 22:10:30<SeP>2024-04-21 09:38:15<SeP>2024-04-22 21:06:00<SeP>2024-04-24 08:33:45<SeP>2024-04-25 20:01:30<SeP>2024-04-27 07:29:15<SeP>2024-04-28 18:57:00<SeP>2024-04-30 06:24:45<SeP>2024-05-01 17:52:30<SeP>2024-05-03 05:20:15<SeP>2024-05-04 16:48:00<SeP>2024-05-06 04:15:45<SeP>2024-05-07 15:43:30<SeP>2024-05-09 03:11:15<SeP>2024-05-10 14:39:00<SeP>2024-05-12 02:06:45<SeP>2024-05-13 13:34:30<SeP>2024-05-15 01:02:15<SeP>2024-05-16 12:30:00<SeP>2024-05-17 23:57:45<SeP>2024-05-19 11:25:30<SeP>2024-05-20 22:53:15<SeP>2024-05-22 10:21:00<SeP>2024-05-23 21:48:45<SeP>2024-05-25 09:16:30<SeP>2024-05-26 20:44:15<SeP>2024-05-28 08:12:00<SeP>2024-05-29 19:39:45<SeP>2024-05-31 07:07:30<SeP>2024-06-01 18:35:15<SeP>2024-06-03 06:03:00<SeP>2024-06-04 17:30:45<SeP>2024-06-06 04:58:30<SeP>2024-06-07 16:26:15<SeP>2024-06-09 03:54:00<SeP>2024-06-10 15:21:45<SeP>2024-06-12 02:49:30<SeP>2024-06-13 14:17:15<SeP>2024-06-15 01:45:00<SeP>2024-06-16 13:12:45<SeP>2024-06-18 00:40:30<SeP>2024-06-19 12:08:15<SeP>2024-06-20 23:36:00<SeP>2024-06-22 11:03:45<SeP>2024-06-23 22:31:30<SeP>2024-06-25 09:59:15<SeP>2024-06-26 21:27:00<SeP>2024-06-28 08:54:45<SeP>2024-06-29 20:22:30<SeP>2024-07-01 07:50:15<SeP>2024-07-02 19:18:00<SeP>2024-07-04 06:45:45<SeP>2024-07-05 18:13:30<SeP>2024-07-07 05:41:15<SeP>2024-07-08 17:09:00<SeP>2024-07-10 04:36:45<SeP>2024-07-11 16:04:30<SeP>2024-07-13 03:32:15<SeP>2024-07-14 15:00:00<SeP>2024-07-16 02:27:45<SeP>2024-07-17 13:55:30<SeP>2024-07-19 01:23:15<SeP>2024-07-20 12:51:00<SeP>2024-07-22 00:18:45<SeP>2024-07-23 11:46:30<SeP>2024-07-24 23:14:15<SeP>2024-07-26 10:42:00<SeP>2024-07-27 22:09:45<SeP>2024-07-29 09:37:30<SeP>2024-07-30 21:05:15<SeP>2024-08-01 08:33:00<SeP>2024-08-02 20:00:45<SeP>2024-08-04 07:28:30<SeP>2024-08-05 18:56:15<SeP>2024-08-07 06:24:00<SeP>2024-08-08 17:51:45<SeP>2024-08-10 05:19:30<SeP>2024-08-11 16:47:15<SeP>2024-08-13 04:15:00<SeP>2024-08-14 15:42:45<SeP>2024-08-16 03:10:30<SeP>2024-08-17 14:38:15<SeP>2024-08-19 02:06:00<SeP>2024-08-20 13:33:45<SeP>2024-08-22 01:01:30<SeP>2024-08-23 12:29:15<SeP>2024-08-24 23:57:00<SeP>2024-08-26 11:24:45<SeP>2024-08-27 22:52:30<SeP>2024-08-29 10:20:15<SeP>2024-08-30 21:48:00<SeP>2024-09-01 09:15:45<SeP>2024-09-02 20:43:30<SeP>2024-09-04 08:11:15<SeP>2024-09-05 19:39:00<SeP>2024-09-07 07:06:45<SeP>2024-09-08 18:34:30<SeP>2024-09-10 06:02:15<SeP>2024-09-11 17:30:00<SeP>2024-09-13 04:57:45<SeP>2024-09-14 16:25:30<SeP>2024-09-16 03:53:15<SeP>2024-09-17 15:21:00<SeP>2024-09-19 02:48:45<SeP>2024-09-20 14:16:30<SeP>2024-09-22 01:44:15<SeP>2024-09-23 13:12:00<SeP>2024-09-25 00:39:45<SeP>2024-09-26 12:07:30<SeP>2024-09-27 23:35:15<SeP>2024-09-29 11:03:00<SeP>2024-09-30 22:30:45<SeP>2024-10-02 09:58:30<SeP>2024-10-03 21:26:15<SeP>2024-10-05 08:54:00<SeP>2024-10-06 20:21:45<SeP>2024-10-08 07:49:30<SeP>2024-10-09 19:17:15<SeP>2024-10-11 06:45:00<SeP>2024-10-12 18:12:45<SeP>2024-10-14 05:40:30<SeP>2024-10-15 17:08:15<SeP>2024-10-17 04:36:00<SeP>2024-10-18 16:03:45<SeP>2024-10-20 03:31:30<SeP>2024-10-21 14:59:15<SeP>2024-10-23 02:27:00<SeP>2024-10-24 13:54:45<SeP>2024-10-26 01:22:30<SeP>2024-10-27 12:50:15<SeP>2024-10-29 00:18:00<SeP>2024-10-30 11:45:45<SeP>2024-10-31 23:13:30<SeP>2024-11-02 10:41:15<SeP>2024-11-03 21:09:00<SeP>2024-11-05 08:36:45<SeP>2024-11-06 20:04:30<SeP>2024-11-08 07:32:15<SeP>2024-11-09 19:00:00<SeP>2024-11-11 06:27:45<SeP>2024-11-12 17:55:30<SeP>2024-11-14 05:23:15<SeP>2024-11-15 16:51:00<SeP>2024-11-17 04:18:45<SeP>2024-11-18 15:46:30<SeP>2024-11-20 03:14:15<SeP>2024-11-21 14:42:00<SeP>2024-11-23 02:09:45<SeP>2024-11-24 13:37:30<SeP>2024-11-26 01:05:15<SeP>2024-11-27 12:33:00<SeP>2024-11-29 00:00:45<SeP>2024-11-30 11:28:30<SeP>2024-12-01 22:56:15<SeP>2024-12-03 10:24:00<SeP>2024-12-04 21:51:45<SeP>2024-12-06 09:19:30<SeP>2024-12-07 20:47:15<SeP>2024-12-09 08:15:00<SeP>2024-12-10 19:42:45<SeP>2024-12-12 07:10:30<SeP>2024-12-13 18:38:15<SeP>2024-12-15 06:06:00<SeP>2024-12-16 17:33:45<SeP>2024-12-18 05:01:30<SeP>2024-12-19 16:29:15<SeP>2024-12-21 03:57:00<SeP>2024-12-22 15:24:45<SeP>2024-12-24 02:52:30<SeP>2024-12-25 14:20:15<SeP>2024-12-27 01:48:00<SeP>2024-12-28 13:15:45<SeP>2024-12-30 00:43:30<SeP>2024-12-31 12:11:15<SeP>2025-01-01 23:39:00<SeP>2025-01-03 11:06:45<SeP>2025-01-04 22:34:30<SeP>2025-01-06 10:02:15<SeP>2025-01-07 21:30:00<SeP>2025-01-09 08:57:45<SeP>2025-01-10 20:25:30<SeP>2025-01-12 07:53:15<SeP>2025-01-13 19:21:00<SeP>2025-01-15 06:48:45<SeP>2025-01-16 18:16:30<SeP>2025-01-18 05:44:15<SeP>2025-01-19 17:12:00<SeP>2025-01-21 04:39:45<SeP>2025-01-22 16:07:30<SeP>2025-01-24 03:35:15<SeP>2025-01-25 15:03:00<SeP>2025-01-27 02:30:45<SeP>2025-01-28 13:58:30<SeP>2025-01-30 01:26:15<SeP>2025-01-31 12:54:00<SeP>2025-02-02 00:21:45<SeP>2025-02-03 11:49:30<SeP>2025-02-04 23:17:15<SeP>2025-02-06 10:45:00<SeP>2025-02-07 22:12:45<SeP>2025-02-09 09:40:30<SeP>2025-02-10 21:08:15<SeP>2025-02-12 08:36:00<SeP>2025-02-13 20:03:45<SeP>2025-02-15 07:31:30<SeP>2025-02-16 18:59:15<SeP>2025-02-18 06:27:00<SeP>2025-02-19 17:54:45<SeP>2025-02-21 05:22:30<SeP>2025-02-22 16:50:15<SeP>2025-02-24 04:18:00<SeP>2025-02-25 15:45:45<SeP>2025-02-27 03:13:30<SeP>2025-02-28 14:41:15<SeP>2025-03-02 02:09:00<SeP>2025-03-03 13:36:45<SeP>2025-03-05 01:04:30<SeP>2025-03-06 12:32:15";
  const itemLabel       = "Escaneos";
  const itemData        = "774<SeP>1518<SeP>1371<SeP>1494<SeP>1224<SeP>1755<SeP>939<SeP>977<SeP>1145<SeP>3411<SeP>3030<SeP>1402<SeP>3299<SeP>886<SeP>773<SeP>890<SeP>1434<SeP>2934<SeP>1795<SeP>1228<SeP>1254<SeP>906<SeP>1048<SeP>1275<SeP>891<SeP>816<SeP>973<SeP>3672<SeP>841<SeP>867<SeP>1192<SeP>1436<SeP>869<SeP>1056<SeP>3062<SeP>2908<SeP>1817<SeP>1487<SeP>1760<SeP>1314<SeP>1651<SeP>1955<SeP>2115<SeP>1565<SeP>1782<SeP>1574<SeP>1601<SeP>1815<SeP>1694<SeP>2147<SeP>1505<SeP>1697<SeP>2124<SeP>2854<SeP>1408<SeP>1771<SeP>1913<SeP>2452<SeP>1492<SeP>2972<SeP>2308<SeP>1426<SeP>1616<SeP>1340<SeP>1812<SeP>1622<SeP>1531<SeP>1263<SeP>1453<SeP>1177<SeP>2403<SeP>1261<SeP>1051<SeP>1371<SeP>2492<SeP>7001<SeP>1346<SeP>1347<SeP>1538<SeP>2059<SeP>1191<SeP>3374<SeP>4556<SeP>1615<SeP>1480<SeP>1020<SeP>3280<SeP>1257<SeP>1104<SeP>975<SeP>1115<SeP>1074<SeP>3008<SeP>928<SeP>1438<SeP>3029<SeP>5425<SeP>2486<SeP>1029<SeP>929<SeP>918<SeP>1015<SeP>1007<SeP>1007<SeP>1034<SeP>3855<SeP>2179<SeP>1430<SeP>1643<SeP>598<SeP>986<SeP>1594<SeP>1186<SeP>1011<SeP>999<SeP>2314<SeP>1327<SeP>1039<SeP>955<SeP>1111<SeP>802<SeP>869<SeP>859<SeP>825<SeP>880<SeP>1092<SeP>799<SeP>822<SeP>923<SeP>862<SeP>894<SeP>665<SeP>864<SeP>856<SeP>928<SeP>895<SeP>857<SeP>795<SeP>756<SeP>991<SeP>913<SeP>805<SeP>910<SeP>1026<SeP>837<SeP>1098<SeP>995<SeP>454<SeP>965<SeP>884<SeP>947<SeP>1162<SeP>1050<SeP>1137<SeP>1188<SeP>1005<SeP>935<SeP>978<SeP>996<SeP>730<SeP>1006<SeP>1048<SeP>958<SeP>823<SeP>946<SeP>1079<SeP>1023<SeP>1101<SeP>967<SeP>1144<SeP>884<SeP>885<SeP>1666<SeP>1680<SeP>1274<SeP>989<SeP>1041<SeP>1192<SeP>1000<SeP>962<SeP>798<SeP>808<SeP>908<SeP>1143<SeP>807<SeP>1074<SeP>1289<SeP>1065<SeP>1215<SeP>1330<SeP>1174<SeP>1316<SeP>1266<SeP>1306<SeP>1531<SeP>1730<SeP>1710<SeP>1371<SeP>750<SeP>830<SeP>1128<SeP>1103<SeP>620<SeP>722<SeP>864<SeP>1008<SeP>1590<SeP>5807<SeP>2481<SeP>1968<SeP>1276<SeP>894<SeP>994<SeP>940<SeP>981<SeP>921<SeP>1114<SeP>1086<SeP>1056<SeP>2045<SeP>1485<SeP>1054<SeP>1254<SeP>1239<SeP>1219<SeP>1106<SeP>978<SeP>1099<SeP>1074<SeP>1117<SeP>1046<SeP>1146<SeP>1125<SeP>995<SeP>925<SeP>1294<SeP>1131<SeP>1188<SeP>1208<SeP>1387<SeP>1240<SeP>1497<SeP>1255<SeP>1083<SeP>1204<SeP>1182<SeP>1974<SeP>1280<SeP>1897<SeP>1687<SeP>1502<SeP>2027<SeP>1579<SeP>1154<SeP>1149<SeP>1451<SeP>1068<SeP>1582<SeP>1267<SeP>1252<SeP>1711<SeP>1699<SeP>1399<SeP>1450<SeP>1476<SeP>1245<SeP>1091<SeP>1108<SeP>1399<SeP>1090<SeP>1248<SeP>1343<SeP>1198<SeP>1426<SeP>1955<SeP>1330<SeP>1393<SeP>1559<SeP>1384<SeP>1088<SeP>1001<SeP>996<SeP>956<SeP>909<SeP>998<SeP>1779<SeP>1166<SeP>1068<SeP>1127<SeP>971<SeP>773<SeP>1145<SeP>1355<SeP>855<SeP>924<SeP>953<SeP>1320<SeP>1625<SeP>1490<SeP>1040<SeP>1153<SeP>992<SeP>1871<SeP>1082<SeP>1167<SeP>1084<SeP>1269<SeP>1290<SeP>999<SeP>976<SeP>1252<SeP>1024<SeP>956<SeP>833<SeP>1286<SeP>1420<SeP>1494<SeP>1642<SeP>1449<SeP>954<SeP>1131<SeP>1123<SeP>1145<SeP>1147<SeP>1159<SeP>1061<SeP>1023<SeP>1304<SeP>1597<SeP>1295<SeP>1589<SeP>1366<SeP>1422<SeP>1611<SeP>1362<SeP>1475<SeP>1390<SeP>1356<SeP>1301<SeP>1766<SeP>1458<SeP>1529<SeP>1530<SeP>1278<SeP>1464<SeP>1262<SeP>1300<SeP>1432<SeP>1442<SeP>1619<SeP>1243<SeP>1318<SeP>1285<SeP>1372<SeP>1358<SeP>1180<SeP>1446<SeP>1919<SeP>1607<SeP>1249<SeP>709<SeP>1461<SeP>1828<SeP>1306<SeP>1319<SeP>1233<SeP>1157<SeP>1399<SeP>1495<SeP>1324<SeP>1520<SeP>1669<SeP>1392<SeP>1507<SeP>1770<SeP>1323<SeP>1506<SeP>1619<SeP>1661<SeP>1316<SeP>1086<SeP>1613<SeP>1732<SeP>1962<SeP>1747<SeP>1787<SeP>1637<SeP>1625<SeP>1576<SeP>1619<SeP>1532<SeP>1575<SeP>1743<SeP>1918<SeP>1430<SeP>1554<SeP>1249<SeP>1759<SeP>1415<SeP>2067";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:27:45<SeP>2023-07-28 22:55:30<SeP>2023-07-30 10:23:15<SeP>2023-07-31 21:51:00<SeP>2023-08-02 09:18:45<SeP>2023-08-03 20:46:30<SeP>2023-08-05 08:14:15<SeP>2023-08-06 19:42:00<SeP>2023-08-08 07:09:45<SeP>2023-08-09 18:37:30<SeP>2023-08-11 06:05:15<SeP>2023-08-12 17:33:00<SeP>2023-08-14 05:00:45<SeP>2023-08-15 16:28:30<SeP>2023-08-17 03:56:15<SeP>2023-08-18 15:24:00<SeP>2023-08-20 02:51:45<SeP>2023-08-21 14:19:30<SeP>2023-08-23 01:47:15<SeP>2023-08-24 13:15:00<SeP>2023-08-26 00:42:45<SeP>2023-08-27 12:10:30<SeP>2023-08-28 23:38:15<SeP>2023-08-30 11:06:00<SeP>2023-08-31 22:33:45<SeP>2023-09-02 10:01:30<SeP>2023-09-03 21:29:15<SeP>2023-09-05 08:57:00<SeP>2023-09-06 20:24:45<SeP>2023-09-08 07:52:30<SeP>2023-09-09 19:20:15<SeP>2023-09-11 06:48:00<SeP>2023-09-12 18:15:45<SeP>2023-09-14 05:43:30<SeP>2023-09-15 17:11:15<SeP>2023-09-17 04:39:00<SeP>2023-09-18 16:06:45<SeP>2023-09-20 03:34:30<SeP>2023-09-21 15:02:15<SeP>2023-09-23 02:30:00<SeP>2023-09-24 13:57:45<SeP>2023-09-26 01:25:30<SeP>2023-09-27 12:53:15<SeP>2023-09-29 00:21:00<SeP>2023-09-30 11:48:45<SeP>2023-10-01 23:16:30<SeP>2023-10-03 10:44:15<SeP>2023-10-04 22:12:00<SeP>2023-10-06 09:39:45<SeP>2023-10-07 21:07:30<SeP>2023-10-09 08:35:15<SeP>2023-10-10 20:03:00<SeP>2023-10-12 07:30:45<SeP>2023-10-13 18:58:30<SeP>2023-10-15 06:26:15<SeP>2023-10-16 17:54:00<SeP>2023-10-18 05:21:45<SeP>2023-10-19 16:49:30<SeP>2023-10-21 04:17:15<SeP>2023-10-22 15:45:00<SeP>2023-10-24 03:12:45<SeP>2023-10-25 14:40:30<SeP>2023-10-27 02:08:15<SeP>2023-10-28 13:36:00<SeP>2023-10-30 01:03:45<SeP>2023-10-31 12:31:30<SeP>2023-11-01 23:59:15<SeP>2023-11-03 11:27:00<SeP>2023-11-04 22:54:45<SeP>2023-11-06 09:22:30<SeP>2023-11-07 20:50:15<SeP>2023-11-09 08:18:00<SeP>2023-11-10 19:45:45<SeP>2023-11-12 07:13:30<SeP>2023-11-13 18:41:15<SeP>2023-11-15 06:09:00<SeP>2023-11-16 17:36:45<SeP>2023-11-18 05:04:30<SeP>2023-11-19 16:32:15<SeP>2023-11-21 04:00:00<SeP>2023-11-22 15:27:45<SeP>2023-11-24 02:55:30<SeP>2023-11-25 14:23:15<SeP>2023-11-27 01:51:00<SeP>2023-11-28 13:18:45<SeP>2023-11-30 00:46:30<SeP>2023-12-01 12:14:15<SeP>2023-12-02 23:42:00<SeP>2023-12-04 11:09:45<SeP>2023-12-05 22:37:30<SeP>2023-12-07 10:05:15<SeP>2023-12-08 21:33:00<SeP>2023-12-10 09:00:45<SeP>2023-12-11 20:28:30<SeP>2023-12-13 07:56:15<SeP>2023-12-14 19:24:00<SeP>2023-12-16 06:51:45<SeP>2023-12-17 18:19:30<SeP>2023-12-19 05:47:15<SeP>2023-12-20 17:15:00<SeP>2023-12-22 04:42:45<SeP>2023-12-23 16:10:30<SeP>2023-12-25 03:38:15<SeP>2023-12-26 15:06:00<SeP>2023-12-28 02:33:45<SeP>2023-12-29 14:01:30<SeP>2023-12-31 01:29:15<SeP>2024-01-01 12:57:00<SeP>2024-01-03 00:24:45<SeP>2024-01-04 11:52:30<SeP>2024-01-05 23:20:15<SeP>2024-01-07 10:48:00<SeP>2024-01-08 22:15:45<SeP>2024-01-10 09:43:30<SeP>2024-01-11 21:11:15<SeP>2024-01-13 08:39:00<SeP>2024-01-14 20:06:45<SeP>2024-01-16 07:34:30<SeP>2024-01-17 19:02:15<SeP>2024-01-19 06:30:00<SeP>2024-01-20 17:57:45<SeP>2024-01-22 05:25:30<SeP>2024-01-23 16:53:15<SeP>2024-01-25 04:21:00<SeP>2024-01-26 15:48:45<SeP>2024-01-28 03:16:30<SeP>2024-01-29 14:44:15<SeP>2024-01-31 02:12:00<SeP>2024-02-01 13:39:45<SeP>2024-02-03 01:07:30<SeP>2024-02-04 12:35:15<SeP>2024-02-06 00:03:00<SeP>2024-02-07 11:30:45<SeP>2024-02-08 22:58:30<SeP>2024-02-10 10:26:15<SeP>2024-02-11 21:54:00<SeP>2024-02-13 09:21:45<SeP>2024-02-14 20:49:30<SeP>2024-02-16 08:17:15<SeP>2024-02-17 19:45:00<SeP>2024-02-19 07:12:45<SeP>2024-02-20 18:40:30<SeP>2024-02-22 06:08:15<SeP>2024-02-23 17:36:00<SeP>2024-02-25 05:03:45<SeP>2024-02-26 16:31:30<SeP>2024-02-28 03:59:15<SeP>2024-02-29 15:27:00<SeP>2024-03-02 02:54:45<SeP>2024-03-03 14:22:30<SeP>2024-03-05 01:50:15<SeP>2024-03-06 13:18:00<SeP>2024-03-08 00:45:45<SeP>2024-03-09 12:13:30<SeP>2024-03-11 00:41:15<SeP>2024-03-12 12:09:00<SeP>2024-03-13 23:36:45<SeP>2024-03-15 11:04:30<SeP>2024-03-16 22:32:15<SeP>2024-03-18 10:00:00<SeP>2024-03-19 21:27:45<SeP>2024-03-21 08:55:30<SeP>2024-03-22 20:23:15<SeP>2024-03-24 07:51:00<SeP>2024-03-25 19:18:45<SeP>2024-03-27 06:46:30<SeP>2024-03-28 18:14:15<SeP>2024-03-30 05:42:00<SeP>2024-03-31 17:09:45<SeP>2024-04-02 04:37:30<SeP>2024-04-03 16:05:15<SeP>2024-04-05 03:33:00<SeP>2024-04-06 15:00:45<SeP>2024-04-08 02:28:30<SeP>2024-04-09 13:56:15<SeP>2024-04-11 01:24:00<SeP>2024-04-12 12:51:45<SeP>2024-04-14 00:19:30<SeP>2024-04-15 11:47:15<SeP>2024-04-16 23:15:00<SeP>2024-04-18 10:42:45<SeP>2024-04-19 22:10:30<SeP>2024-04-21 09:38:15<SeP>2024-04-22 21:06:00<SeP>2024-04-24 08:33:45<SeP>2024-04-25 20:01:30<SeP>2024-04-27 07:29:15<SeP>2024-04-28 18:57:00<SeP>2024-04-30 06:24:45<SeP>2024-05-01 17:52:30<SeP>2024-05-03 05:20:15<SeP>2024-05-04 16:48:00<SeP>2024-05-06 04:15:45<SeP>2024-05-07 15:43:30<SeP>2024-05-09 03:11:15<SeP>2024-05-10 14:39:00<SeP>2024-05-12 02:06:45<SeP>2024-05-13 13:34:30<SeP>2024-05-15 01:02:15<SeP>2024-05-16 12:30:00<SeP>2024-05-17 23:57:45<SeP>2024-05-19 11:25:30<SeP>2024-05-20 22:53:15<SeP>2024-05-22 10:21:00<SeP>2024-05-23 21:48:45<SeP>2024-05-25 09:16:30<SeP>2024-05-26 20:44:15<SeP>2024-05-28 08:12:00<SeP>2024-05-29 19:39:45<SeP>2024-05-31 07:07:30<SeP>2024-06-01 18:35:15<SeP>2024-06-03 06:03:00<SeP>2024-06-04 17:30:45<SeP>2024-06-06 04:58:30<SeP>2024-06-07 16:26:15<SeP>2024-06-09 03:54:00<SeP>2024-06-10 15:21:45<SeP>2024-06-12 02:49:30<SeP>2024-06-13 14:17:15<SeP>2024-06-15 01:45:00<SeP>2024-06-16 13:12:45<SeP>2024-06-18 00:40:30<SeP>2024-06-19 12:08:15<SeP>2024-06-20 23:36:00<SeP>2024-06-22 11:03:45<SeP>2024-06-23 22:31:30<SeP>2024-06-25 09:59:15<SeP>2024-06-26 21:27:00<SeP>2024-06-28 08:54:45<SeP>2024-06-29 20:22:30<SeP>2024-07-01 07:50:15<SeP>2024-07-02 19:18:00<SeP>2024-07-04 06:45:45<SeP>2024-07-05 18:13:30<SeP>2024-07-07 05:41:15<SeP>2024-07-08 17:09:00<SeP>2024-07-10 04:36:45<SeP>2024-07-11 16:04:30<SeP>2024-07-13 03:32:15<SeP>2024-07-14 15:00:00<SeP>2024-07-16 02:27:45<SeP>2024-07-17 13:55:30<SeP>2024-07-19 01:23:15<SeP>2024-07-20 12:51:00<SeP>2024-07-22 00:18:45<SeP>2024-07-23 11:46:30<SeP>2024-07-24 23:14:15<SeP>2024-07-26 10:42:00<SeP>2024-07-27 22:09:45<SeP>2024-07-29 09:37:30<SeP>2024-07-30 21:05:15<SeP>2024-08-01 08:33:00<SeP>2024-08-02 20:00:45<SeP>2024-08-04 07:28:30<SeP>2024-08-05 18:56:15<SeP>2024-08-07 06:24:00<SeP>2024-08-08 17:51:45<SeP>2024-08-10 05:19:30<SeP>2024-08-11 16:47:15<SeP>2024-08-13 04:15:00<SeP>2024-08-14 15:42:45<SeP>2024-08-16 03:10:30<SeP>2024-08-17 14:38:15<SeP>2024-08-19 02:06:00<SeP>2024-08-20 13:33:45<SeP>2024-08-22 01:01:30<SeP>2024-08-23 12:29:15<SeP>2024-08-24 23:57:00<SeP>2024-08-26 11:24:45<SeP>2024-08-27 22:52:30<SeP>2024-08-29 10:20:15<SeP>2024-08-30 21:48:00<SeP>2024-09-01 09:15:45<SeP>2024-09-02 20:43:30<SeP>2024-09-04 08:11:15<SeP>2024-09-05 19:39:00<SeP>2024-09-07 07:06:45<SeP>2024-09-08 18:34:30<SeP>2024-09-10 06:02:15<SeP>2024-09-11 17:30:00<SeP>2024-09-13 04:57:45<SeP>2024-09-14 16:25:30<SeP>2024-09-16 03:53:15<SeP>2024-09-17 15:21:00<SeP>2024-09-19 02:48:45<SeP>2024-09-20 14:16:30<SeP>2024-09-22 01:44:15<SeP>2024-09-23 13:12:00<SeP>2024-09-25 00:39:45<SeP>2024-09-26 12:07:30<SeP>2024-09-27 23:35:15<SeP>2024-09-29 11:03:00<SeP>2024-09-30 22:30:45<SeP>2024-10-02 09:58:30<SeP>2024-10-03 21:26:15<SeP>2024-10-05 08:54:00<SeP>2024-10-06 20:21:45<SeP>2024-10-08 07:49:30<SeP>2024-10-09 19:17:15<SeP>2024-10-11 06:45:00<SeP>2024-10-12 18:12:45<SeP>2024-10-14 05:40:30<SeP>2024-10-15 17:08:15<SeP>2024-10-17 04:36:00<SeP>2024-10-18 16:03:45<SeP>2024-10-20 03:31:30<SeP>2024-10-21 14:59:15<SeP>2024-10-23 02:27:00<SeP>2024-10-24 13:54:45<SeP>2024-10-26 01:22:30<SeP>2024-10-27 12:50:15<SeP>2024-10-29 00:18:00<SeP>2024-10-30 11:45:45<SeP>2024-10-31 23:13:30<SeP>2024-11-02 10:41:15<SeP>2024-11-03 21:09:00<SeP>2024-11-05 08:36:45<SeP>2024-11-06 20:04:30<SeP>2024-11-08 07:32:15<SeP>2024-11-09 19:00:00<SeP>2024-11-11 06:27:45<SeP>2024-11-12 17:55:30<SeP>2024-11-14 05:23:15<SeP>2024-11-15 16:51:00<SeP>2024-11-17 04:18:45<SeP>2024-11-18 15:46:30<SeP>2024-11-20 03:14:15<SeP>2024-11-21 14:42:00<SeP>2024-11-23 02:09:45<SeP>2024-11-24 13:37:30<SeP>2024-11-26 01:05:15<SeP>2024-11-27 12:33:00<SeP>2024-11-29 00:00:45<SeP>2024-11-30 11:28:30<SeP>2024-12-01 22:56:15<SeP>2024-12-03 10:24:00<SeP>2024-12-04 21:51:45<SeP>2024-12-06 09:19:30<SeP>2024-12-07 20:47:15<SeP>2024-12-09 08:15:00<SeP>2024-12-10 19:42:45<SeP>2024-12-12 07:10:30<SeP>2024-12-13 18:38:15<SeP>2024-12-15 06:06:00<SeP>2024-12-16 17:33:45<SeP>2024-12-18 05:01:30<SeP>2024-12-19 16:29:15<SeP>2024-12-21 03:57:00<SeP>2024-12-22 15:24:45<SeP>2024-12-24 02:52:30<SeP>2024-12-25 14:20:15<SeP>2024-12-27 01:48:00<SeP>2024-12-28 13:15:45<SeP>2024-12-30 00:43:30<SeP>2024-12-31 12:11:15<SeP>2025-01-01 23:39:00<SeP>2025-01-03 11:06:45<SeP>2025-01-04 22:34:30<SeP>2025-01-06 10:02:15<SeP>2025-01-07 21:30:00<SeP>2025-01-09 08:57:45<SeP>2025-01-10 20:25:30<SeP>2025-01-12 07:53:15<SeP>2025-01-13 19:21:00<SeP>2025-01-15 06:48:45<SeP>2025-01-16 18:16:30<SeP>2025-01-18 05:44:15<SeP>2025-01-19 17:12:00<SeP>2025-01-21 04:39:45<SeP>2025-01-22 16:07:30<SeP>2025-01-24 03:35:15<SeP>2025-01-25 15:03:00<SeP>2025-01-27 02:30:45<SeP>2025-01-28 13:58:30<SeP>2025-01-30 01:26:15<SeP>2025-01-31 12:54:00<SeP>2025-02-02 00:21:45<SeP>2025-02-03 11:49:30<SeP>2025-02-04 23:17:15<SeP>2025-02-06 10:45:00<SeP>2025-02-07 22:12:45<SeP>2025-02-09 09:40:30<SeP>2025-02-10 21:08:15<SeP>2025-02-12 08:36:00<SeP>2025-02-13 20:03:45<SeP>2025-02-15 07:31:30<SeP>2025-02-16 18:59:15<SeP>2025-02-18 06:27:00<SeP>2025-02-19 17:54:45<SeP>2025-02-21 05:22:30<SeP>2025-02-22 16:50:15<SeP>2025-02-24 04:18:00<SeP>2025-02-25 15:45:45<SeP>2025-02-27 03:13:30<SeP>2025-02-28 14:41:15<SeP>2025-03-02 02:09:00<SeP>2025-03-03 13:36:45<SeP>2025-03-05 01:04:30<SeP>2025-03-06 12:32:15";
  const itemLabel       = "Ataques";
  const itemData        = "159<SeP>610<SeP>1367<SeP>688<SeP>220<SeP>238<SeP>7007<SeP>575<SeP>9437<SeP>563<SeP>401<SeP>1132<SeP>1295<SeP>242<SeP>303<SeP>310<SeP>140<SeP>747<SeP>344<SeP>7464<SeP>7166<SeP>6832<SeP>8901<SeP>3139<SeP>288<SeP>406<SeP>183<SeP>378<SeP>5804<SeP>215<SeP>369<SeP>134<SeP>539<SeP>324<SeP>8982<SeP>9420<SeP>10307<SeP>9783<SeP>6292<SeP>6037<SeP>8130<SeP>7996<SeP>9288<SeP>8123<SeP>7501<SeP>9303<SeP>7799<SeP>8755<SeP>8628<SeP>6104<SeP>8814<SeP>9713<SeP>6358<SeP>8446<SeP>8563<SeP>9231<SeP>18599<SeP>15867<SeP>9855<SeP>11353<SeP>6763<SeP>7738<SeP>8696<SeP>9641<SeP>8450<SeP>6650<SeP>6922<SeP>6524<SeP>6689<SeP>3732<SeP>6347<SeP>5532<SeP>6547<SeP>6865<SeP>7588<SeP>3588<SeP>6188<SeP>6290<SeP>6041<SeP>5295<SeP>7038<SeP>4627<SeP>6686<SeP>6017<SeP>5653<SeP>5784<SeP>6106<SeP>21844<SeP>11835<SeP>33990<SeP>7675<SeP>8168<SeP>7241<SeP>10922<SeP>8114<SeP>4314<SeP>6273<SeP>3461<SeP>5577<SeP>6937<SeP>4911<SeP>8887<SeP>6818<SeP>5472<SeP>4411<SeP>6157<SeP>9294<SeP>8153<SeP>8554<SeP>4239<SeP>6301<SeP>10643<SeP>8407<SeP>3900<SeP>3592<SeP>6985<SeP>9139<SeP>5930<SeP>7283<SeP>8469<SeP>2765<SeP>3138<SeP>1106<SeP>1637<SeP>2550<SeP>1793<SeP>872<SeP>1270<SeP>1008<SeP>1280<SeP>1317<SeP>1197<SeP>1181<SeP>757<SeP>1261<SeP>1046<SeP>1285<SeP>1344<SeP>1064<SeP>1813<SeP>2118<SeP>4227<SeP>11294<SeP>8414<SeP>7455<SeP>7660<SeP>12738<SeP>2723<SeP>9161<SeP>12144<SeP>9815<SeP>12380<SeP>9319<SeP>11212<SeP>11482<SeP>8687<SeP>13447<SeP>5188<SeP>4673<SeP>7241<SeP>23830<SeP>7762<SeP>7817<SeP>8091<SeP>17036<SeP>9803<SeP>7518<SeP>5544<SeP>6770<SeP>8398<SeP>25338<SeP>6989<SeP>10157<SeP>9180<SeP>5750<SeP>5183<SeP>7480<SeP>15134<SeP>5930<SeP>13450<SeP>8283<SeP>8562<SeP>6312<SeP>6481<SeP>3060<SeP>7536<SeP>7574<SeP>4795<SeP>6385<SeP>8614<SeP>3507<SeP>21667<SeP>7877<SeP>6546<SeP>5897<SeP>8626<SeP>10655<SeP>7152<SeP>2489<SeP>5965<SeP>4252<SeP>4688<SeP>4364<SeP>1610<SeP>620<SeP>639<SeP>202<SeP>543<SeP>633<SeP>773<SeP>427<SeP>925<SeP>1562<SeP>3190<SeP>1035<SeP>22521<SeP>1434<SeP>4909<SeP>2842<SeP>3590<SeP>6416<SeP>4565<SeP>2746<SeP>3669<SeP>2698<SeP>3054<SeP>3397<SeP>4522<SeP>1446<SeP>4139<SeP>1267<SeP>2718<SeP>1148<SeP>1918<SeP>1599<SeP>1385<SeP>1252<SeP>854<SeP>1720<SeP>26794<SeP>1769<SeP>4178<SeP>3810<SeP>2168<SeP>3692<SeP>2945<SeP>1784<SeP>3749<SeP>2610<SeP>3821<SeP>2031<SeP>3024<SeP>3481<SeP>5017<SeP>5650<SeP>4620<SeP>4309<SeP>2578<SeP>2732<SeP>4868<SeP>3975<SeP>10510<SeP>5158<SeP>2495<SeP>2865<SeP>2390<SeP>4320<SeP>4191<SeP>3669<SeP>2819<SeP>2617<SeP>6012<SeP>3546<SeP>5891<SeP>4485<SeP>5560<SeP>5857<SeP>5493<SeP>4736<SeP>22096<SeP>5766<SeP>10949<SeP>1779<SeP>2941<SeP>4316<SeP>3746<SeP>5015<SeP>3304<SeP>5158<SeP>4586<SeP>4819<SeP>3104<SeP>4243<SeP>1979<SeP>1493<SeP>2105<SeP>3998<SeP>2265<SeP>3146<SeP>3390<SeP>4742<SeP>3567<SeP>3587<SeP>4175<SeP>3397<SeP>3399<SeP>6209<SeP>7773<SeP>6074<SeP>4690<SeP>4840<SeP>4462<SeP>3929<SeP>4044<SeP>4054<SeP>6866<SeP>5087<SeP>4626<SeP>3062<SeP>778<SeP>1212<SeP>1753<SeP>1245<SeP>1234<SeP>2189<SeP>1075<SeP>1631<SeP>3528<SeP>5070<SeP>6628<SeP>34111<SeP>4826<SeP>4616<SeP>23670<SeP>5712<SeP>5566<SeP>5868<SeP>4252<SeP>24637<SeP>5145<SeP>5130<SeP>4903<SeP>5815<SeP>13906<SeP>21418<SeP>4399<SeP>3579<SeP>4420<SeP>5218<SeP>6098<SeP>3325<SeP>3177<SeP>3847<SeP>4592<SeP>5758<SeP>3875<SeP>17824<SeP>6190<SeP>7158<SeP>3467<SeP>2417<SeP>3509<SeP>4295<SeP>4029<SeP>4358<SeP>2579<SeP>4105<SeP>2151<SeP>4524<SeP>4452<SeP>8461<SeP>10636<SeP>8365<SeP>8810<SeP>8866<SeP>7929<SeP>4850<SeP>4824<SeP>4229<SeP>26084<SeP>3374<SeP>3119<SeP>4469<SeP>10186<SeP>5872<SeP>5096<SeP>3494<SeP>4987<SeP>3571<SeP>5444<SeP>9311<SeP>8291<SeP>4339<SeP>2744<SeP>3784<SeP>2052<SeP>1969<SeP>2571<SeP>2044<SeP>2458";
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
  const itemData    = "697325<SeP>367087<SeP>206698<SeP>180700<SeP>110813<SeP>88428<SeP>84105<SeP>81101<SeP>68262<SeP>67801";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "299055<SeP>41432<SeP>40887<SeP>36504<SeP>14649<SeP>11179<SeP>8320<SeP>8002<SeP>7238<SeP>7232";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "398270<SeP>330583<SeP>203621<SeP>139813<SeP>96164<SeP>81419<SeP>81196<SeP>69922<SeP>59799<SeP>58797";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "364127<SeP>259557<SeP>237947<SeP>143866<SeP>67606<SeP>59947<SeP>56913<SeP>53399<SeP>37112<SeP>36406";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>0<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "157598<SeP>53719<SeP>36000<SeP>32739<SeP>21924<SeP>12892<SeP>12445<SeP>10934<SeP>7614<SeP>7507";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "351235<SeP>258790<SeP>121942<SeP>80349<SeP>55899<SeP>49013<SeP>47297<SeP>30684<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "697325<SeP>367087<SeP>206698<SeP>180700<SeP>110813<SeP>88428<SeP>84105<SeP>81101<SeP>68262<SeP>67801";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "299055<SeP>41432<SeP>40887<SeP>36504<SeP>14649<SeP>11179<SeP>8320<SeP>8002<SeP>7238<SeP>7232";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "398270<SeP>330583<SeP>203621<SeP>139813<SeP>96164<SeP>81419<SeP>81196<SeP>69922<SeP>59799<SeP>58797";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "364127<SeP>259557<SeP>237947<SeP>143866<SeP>67606<SeP>59947<SeP>56913<SeP>53399<SeP>37112<SeP>36406";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>0<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "157598<SeP>53719<SeP>36000<SeP>32739<SeP>21924<SeP>12892<SeP>12445<SeP>10934<SeP>7614<SeP>7507";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "351235<SeP>258790<SeP>121942<SeP>80349<SeP>55899<SeP>49013<SeP>47297<SeP>30684<SeP>29324<SeP>26846";
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
