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
  document.getElementById("last-updated").innerHTML = "2025-3-10";
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
  const metricData    = "121364";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "33382";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "87982";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8665";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "52998";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "34984";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4199";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "7613";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "27371";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3268";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "121364";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "33382";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "87982";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8665";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "52998";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "34984";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4199";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "7613";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "27371";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3268";
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
  const incomingData = "121364<SeP>33382<SeP>87982<SeP>8665";
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
  const incomingData = "87982<SeP>52998<SeP>34984<SeP>4199";
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
  const incomingData = "34984<SeP>7613<SeP>27371<SeP>3268";
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
  const incomingData = "7805<SeP>7006<SeP>799";
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
  const incomingData = "97<SeP>9<SeP>88<SeP>14";
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
  const incomingData = "121364<SeP>33382<SeP>87982<SeP>8665";
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
  const incomingData = "87982<SeP>52998<SeP>34984<SeP>4199";
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
  const incomingData = "34984<SeP>7613<SeP>27371<SeP>3268";
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
  const incomingData = "7805<SeP>7006<SeP>799";
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
  const incomingData = "97<SeP>9<SeP>88<SeP>14";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>46.8.237.53</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>92.255.85.35</span>)<SeP>IP08 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)";
  const column2Data  = "AS44486<SeP>AS207566<SeP>AS47890<SeP>AS34534<SeP>AS56971<SeP>AS204428<SeP>AS207566<SeP>AS400619<SeP>AS14061<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  const column4Data  = "6226<SeP>1422<SeP>1140<SeP>916<SeP>877<SeP>746<SeP>616<SeP>604<SeP>528<SeP>431";
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
  const column1Data  = "IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP07 (<span class=blur>92.255.85.35</span>)<SeP>IP12 (<span class=blur>218.92.0.114</span>)<SeP>IP13 (<span class=blur>218.92.0.216</span>)<SeP>IP14 (<span class=blur>218.92.0.226</span>)<SeP>IP15 (<span class=blur>126.62.95.172</span>)<SeP>IP16 (<span class=blur>218.92.0.230</span>)<SeP>IP17 (<span class=blur>218.92.0.233</span>)<SeP>IP19 (<span class=blur>218.92.0.228</span>)<SeP>IP18 (<span class=blur>218.92.0.217</span>)";
  const column2Data  = "AS207566<SeP>AS207566<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data  = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "711<SeP>616<SeP>351<SeP>341<SeP>338<SeP>337<SeP>334<SeP>331<SeP>327<SeP>327";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>46.8.237.53</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)<SeP>IP11 (<span class=blur>104.252.127.63</span>)";
  const column2Data  = "AS44486<SeP>AS47890<SeP>AS34534<SeP>AS56971<SeP>AS204428<SeP>AS207566<SeP>AS400619<SeP>AS14061<SeP>AS56971<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  const column4Data  = "6225<SeP>1136<SeP>899<SeP>867<SeP>746<SeP>711<SeP>602<SeP>527<SeP>430<SeP>382";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>46.8.237.53</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>92.255.85.35</span>)<SeP>IP08 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)";
  const column2Data   = "AS44486<SeP>AS207566<SeP>AS47890<SeP>AS34534<SeP>AS56971<SeP>AS204428<SeP>AS207566<SeP>AS400619<SeP>AS14061<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6226<SeP>1422<SeP>1140<SeP>916<SeP>877<SeP>746<SeP>616<SeP>604<SeP>528<SeP>431";
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
  const column1Data   = "IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP07 (<span class=blur>92.255.85.35</span>)<SeP>IP12 (<span class=blur>218.92.0.114</span>)<SeP>IP13 (<span class=blur>218.92.0.216</span>)<SeP>IP14 (<span class=blur>218.92.0.226</span>)<SeP>IP15 (<span class=blur>126.62.95.172</span>)<SeP>IP16 (<span class=blur>218.92.0.230</span>)<SeP>IP17 (<span class=blur>218.92.0.233</span>)<SeP>IP19 (<span class=blur>218.92.0.228</span>)<SeP>IP18 (<span class=blur>218.92.0.217</span>)";
  const column2Data   = "AS207566<SeP>AS207566<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data   = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "711<SeP>616<SeP>351<SeP>341<SeP>338<SeP>337<SeP>334<SeP>331<SeP>327<SeP>327";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>46.8.237.53</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)<SeP>IP11 (<span class=blur>104.252.127.63</span>)";
  const column2Data   = "AS44486<SeP>AS47890<SeP>AS34534<SeP>AS56971<SeP>AS204428<SeP>AS207566<SeP>AS400619<SeP>AS14061<SeP>AS56971<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6225<SeP>1136<SeP>899<SeP>867<SeP>746<SeP>711<SeP>602<SeP>527<SeP>430<SeP>382";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>admin hp.com<SeP>admin adminHW<SeP>root epon<SeP>root realtek<SeP>root root<SeP>root Zxic521 ";
  const column3Data   = "5555<SeP>5426<SeP>1261<SeP>253<SeP>222<SeP>216<SeP>215<SeP>200<SeP>196<SeP>186";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>94f2e4d8d4436874785cd14e6e6d403507b8750852f7f2040352069a75da4c00";
  const column2Data  = "5785<SeP>952<SeP>233<SeP>33<SeP>32<SeP>24<SeP>24<SeP>24<SeP>23<SeP>20";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  const column4Data  = "malicious<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA";
  const listLocale   = "en-US";

  column3Data = column3Data.replace(/redir/g, "redirection");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsEnglish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Malware Distribution Site";
  const column2Label = "Count";
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://194.85.251.8<SeP>http://193.143.1.7<SeP>http://66.63.187.69<SeP>http://61.215.151.173<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>tftp://199.195.248.181<SeP>http://91.224.92.19";
  const column2Data  = "96<SeP>20<SeP>15<SeP>7<SeP>6<SeP>5<SeP>2<SeP>2<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "87157<SeP>34207";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>admin hp.com<SeP>admin adminHW<SeP>root epon<SeP>root realtek<SeP>root root<SeP>root Zxic521 ";
  const column3Data   = "5555<SeP>5426<SeP>1261<SeP>253<SeP>222<SeP>216<SeP>215<SeP>200<SeP>196<SeP>186";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>94f2e4d8d4436874785cd14e6e6d403507b8750852f7f2040352069a75da4c00";
  const column2Data  = "5785<SeP>952<SeP>233<SeP>33<SeP>32<SeP>24<SeP>24<SeP>24<SeP>23<SeP>20";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  let   column4Data  = "malicious<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA";
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
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://194.85.251.8<SeP>http://193.143.1.7<SeP>http://66.63.187.69<SeP>http://61.215.151.173<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>tftp://199.195.248.181<SeP>http://91.224.92.19";
  const column2Data  = "96<SeP>20<SeP>15<SeP>7<SeP>6<SeP>5<SeP>2<SeP>2<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "87157<SeP>34207";
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
  let mapa = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-month-attacks.geojson" + "?v=" + String(Date.now()); // Map of origin of attacks
  let maps = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-month-scans.geojson" + "?v=" + String(Date.now());   // Map of origin of scans
  let mapt = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-month-traffic.geojson" + "?v=" + String(Date.now()); // Map of origin of traffic
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-10";

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
        "name": "traffic between 2025-02-08 and 2025-03-09"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          17006,50
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
        "name": "scans between 2025-02-08 and 2025-03-09"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12638,38,
          17006,50
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
        "name": "attacks between 2025-02-08 and 2025-03-09"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6589,21,
          17006,50
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
  let mapa = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-month-attacks.geojson" + "?v=" + String(Date.now()); // Map of origin of attacks
  let maps = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-month-scans.geojson" + "?v=" + String(Date.now());   // Map of origin of scans
  let mapt = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-month-traffic.geojson" + "?v=" + String(Date.now()); // Map of origin of traffic
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-10";

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
        "name": "tráfico entre 2025-02-08 y 2025-03-09"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          17006,50
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
        "name": "escaneos entre 2025-02-08 y 2025-03-09"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12638,38,
          17006,50
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
        "name": "ataques entre 2025-02-08 y 2025-03-09"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6589,21,
          17006,50
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

function trafficTrendPreviewEnglish()
{
  const chartElement     = "traffic-trend-preview";

  trafficTrendBaseEnglish(chartElement);
}

function trafficTrendEnglish()
{
  const chartElement     = "traffic-trend";

  trafficTrendBaseEnglish(chartElement);
}

function trafficTrendBaseEnglish(chartElement)
{
  const chartTitle       = "Unwanted Traffic Trend";
  const yaxisTitle       = "Number of Unwanted Connections";
  const labelsData       = "2025-02-08 00:00:00<SeP>2025-02-08 01:47:51<SeP>2025-02-08 03:35:42<SeP>2025-02-08 05:23:33<SeP>2025-02-08 07:11:24<SeP>2025-02-08 08:59:15<SeP>2025-02-08 10:47:06<SeP>2025-02-08 12:34:57<SeP>2025-02-08 14:22:48<SeP>2025-02-08 16:10:39<SeP>2025-02-08 17:58:30<SeP>2025-02-08 19:46:21<SeP>2025-02-08 21:34:12<SeP>2025-02-08 23:22:03<SeP>2025-02-09 01:09:54<SeP>2025-02-09 02:57:45<SeP>2025-02-09 04:45:36<SeP>2025-02-09 06:33:27<SeP>2025-02-09 08:21:18<SeP>2025-02-09 10:09:09<SeP>2025-02-09 11:57:00<SeP>2025-02-09 13:44:51<SeP>2025-02-09 15:32:42<SeP>2025-02-09 17:20:33<SeP>2025-02-09 19:08:24<SeP>2025-02-09 20:56:15<SeP>2025-02-09 22:44:06<SeP>2025-02-10 00:31:57<SeP>2025-02-10 02:19:48<SeP>2025-02-10 04:07:39<SeP>2025-02-10 05:55:30<SeP>2025-02-10 07:43:21<SeP>2025-02-10 09:31:12<SeP>2025-02-10 11:19:03<SeP>2025-02-10 13:06:54<SeP>2025-02-10 14:54:45<SeP>2025-02-10 16:42:36<SeP>2025-02-10 18:30:27<SeP>2025-02-10 20:18:18<SeP>2025-02-10 22:06:09<SeP>2025-02-10 23:54:00<SeP>2025-02-11 01:41:51<SeP>2025-02-11 03:29:42<SeP>2025-02-11 05:17:33<SeP>2025-02-11 07:05:24<SeP>2025-02-11 08:53:15<SeP>2025-02-11 10:41:06<SeP>2025-02-11 12:28:57<SeP>2025-02-11 14:16:48<SeP>2025-02-11 16:04:39<SeP>2025-02-11 17:52:30<SeP>2025-02-11 19:40:21<SeP>2025-02-11 21:28:12<SeP>2025-02-11 23:16:03<SeP>2025-02-12 01:03:54<SeP>2025-02-12 02:51:45<SeP>2025-02-12 04:39:36<SeP>2025-02-12 06:27:27<SeP>2025-02-12 08:15:18<SeP>2025-02-12 10:03:09<SeP>2025-02-12 11:51:00<SeP>2025-02-12 13:38:51<SeP>2025-02-12 15:26:42<SeP>2025-02-12 17:14:33<SeP>2025-02-12 19:02:24<SeP>2025-02-12 20:50:15<SeP>2025-02-12 22:38:06<SeP>2025-02-13 00:25:57<SeP>2025-02-13 02:13:48<SeP>2025-02-13 04:01:39<SeP>2025-02-13 05:49:30<SeP>2025-02-13 07:37:21<SeP>2025-02-13 09:25:12<SeP>2025-02-13 11:13:03<SeP>2025-02-13 13:00:54<SeP>2025-02-13 14:48:45<SeP>2025-02-13 16:36:36<SeP>2025-02-13 18:24:27<SeP>2025-02-13 20:12:18<SeP>2025-02-13 22:00:09<SeP>2025-02-13 23:48:00<SeP>2025-02-14 01:35:51<SeP>2025-02-14 03:23:42<SeP>2025-02-14 05:11:33<SeP>2025-02-14 06:59:24<SeP>2025-02-14 08:47:15<SeP>2025-02-14 10:35:06<SeP>2025-02-14 12:22:57<SeP>2025-02-14 14:10:48<SeP>2025-02-14 15:58:39<SeP>2025-02-14 17:46:30<SeP>2025-02-14 19:34:21<SeP>2025-02-14 21:22:12<SeP>2025-02-14 23:10:03<SeP>2025-02-15 00:57:54<SeP>2025-02-15 02:45:45<SeP>2025-02-15 04:33:36<SeP>2025-02-15 06:21:27<SeP>2025-02-15 08:09:18<SeP>2025-02-15 09:57:09<SeP>2025-02-15 11:45:00<SeP>2025-02-15 13:32:51<SeP>2025-02-15 15:20:42<SeP>2025-02-15 17:08:33<SeP>2025-02-15 18:56:24<SeP>2025-02-15 20:44:15<SeP>2025-02-15 22:32:06<SeP>2025-02-16 00:19:57<SeP>2025-02-16 02:07:48<SeP>2025-02-16 03:55:39<SeP>2025-02-16 05:43:30<SeP>2025-02-16 07:31:21<SeP>2025-02-16 09:19:12<SeP>2025-02-16 11:07:03<SeP>2025-02-16 12:54:54<SeP>2025-02-16 14:42:45<SeP>2025-02-16 16:30:36<SeP>2025-02-16 18:18:27<SeP>2025-02-16 20:06:18<SeP>2025-02-16 21:54:09<SeP>2025-02-16 23:42:00<SeP>2025-02-17 01:29:51<SeP>2025-02-17 03:17:42<SeP>2025-02-17 05:05:33<SeP>2025-02-17 06:53:24<SeP>2025-02-17 08:41:15<SeP>2025-02-17 10:29:06<SeP>2025-02-17 12:16:57<SeP>2025-02-17 14:04:48<SeP>2025-02-17 15:52:39<SeP>2025-02-17 17:40:30<SeP>2025-02-17 19:28:21<SeP>2025-02-17 21:16:12<SeP>2025-02-17 23:04:03<SeP>2025-02-18 00:51:54<SeP>2025-02-18 02:39:45<SeP>2025-02-18 04:27:36<SeP>2025-02-18 06:15:27<SeP>2025-02-18 08:03:18<SeP>2025-02-18 09:51:09<SeP>2025-02-18 11:39:00<SeP>2025-02-18 13:26:51<SeP>2025-02-18 15:14:42<SeP>2025-02-18 17:02:33<SeP>2025-02-18 18:50:24<SeP>2025-02-18 20:38:15<SeP>2025-02-18 22:26:06<SeP>2025-02-19 00:13:57<SeP>2025-02-19 02:01:48<SeP>2025-02-19 03:49:39<SeP>2025-02-19 05:37:30<SeP>2025-02-19 07:25:21<SeP>2025-02-19 09:13:12<SeP>2025-02-19 11:01:03<SeP>2025-02-19 12:48:54<SeP>2025-02-19 14:36:45<SeP>2025-02-19 16:24:36<SeP>2025-02-19 18:12:27<SeP>2025-02-19 20:00:18<SeP>2025-02-19 21:48:09<SeP>2025-02-19 23:36:00<SeP>2025-02-20 01:23:51<SeP>2025-02-20 03:11:42<SeP>2025-02-20 04:59:33<SeP>2025-02-20 06:47:24<SeP>2025-02-20 08:35:15<SeP>2025-02-20 10:23:06<SeP>2025-02-20 12:10:57<SeP>2025-02-20 13:58:48<SeP>2025-02-20 15:46:39<SeP>2025-02-20 17:34:30<SeP>2025-02-20 19:22:21<SeP>2025-02-20 21:10:12<SeP>2025-02-20 22:58:03<SeP>2025-02-21 00:45:54<SeP>2025-02-21 02:33:45<SeP>2025-02-21 04:21:36<SeP>2025-02-21 06:09:27<SeP>2025-02-21 07:57:18<SeP>2025-02-21 09:45:09<SeP>2025-02-21 11:33:00<SeP>2025-02-21 13:20:51<SeP>2025-02-21 15:08:42<SeP>2025-02-21 16:56:33<SeP>2025-02-21 18:44:24<SeP>2025-02-21 20:32:15<SeP>2025-02-21 22:20:06<SeP>2025-02-22 00:07:57<SeP>2025-02-22 01:55:48<SeP>2025-02-22 03:43:39<SeP>2025-02-22 05:31:30<SeP>2025-02-22 07:19:21<SeP>2025-02-22 09:07:12<SeP>2025-02-22 10:55:03<SeP>2025-02-22 12:42:54<SeP>2025-02-22 14:30:45<SeP>2025-02-22 16:18:36<SeP>2025-02-22 18:06:27<SeP>2025-02-22 19:54:18<SeP>2025-02-22 21:42:09<SeP>2025-02-22 23:30:00<SeP>2025-02-23 01:17:51<SeP>2025-02-23 03:05:42<SeP>2025-02-23 04:53:33<SeP>2025-02-23 06:41:24<SeP>2025-02-23 08:29:15<SeP>2025-02-23 10:17:06<SeP>2025-02-23 12:04:57<SeP>2025-02-23 13:52:48<SeP>2025-02-23 15:40:39<SeP>2025-02-23 17:28:30<SeP>2025-02-23 19:16:21<SeP>2025-02-23 21:04:12<SeP>2025-02-23 22:52:03<SeP>2025-02-24 00:39:54<SeP>2025-02-24 02:27:45<SeP>2025-02-24 04:15:36<SeP>2025-02-24 06:03:27<SeP>2025-02-24 07:51:18<SeP>2025-02-24 09:39:09<SeP>2025-02-24 11:27:00<SeP>2025-02-24 13:14:51<SeP>2025-02-24 15:02:42<SeP>2025-02-24 16:50:33<SeP>2025-02-24 18:38:24<SeP>2025-02-24 20:26:15<SeP>2025-02-24 22:14:06<SeP>2025-02-25 00:01:57<SeP>2025-02-25 01:49:48<SeP>2025-02-25 03:37:39<SeP>2025-02-25 05:25:30<SeP>2025-02-25 07:13:21<SeP>2025-02-25 09:01:12<SeP>2025-02-25 10:49:03<SeP>2025-02-25 12:36:54<SeP>2025-02-25 14:24:45<SeP>2025-02-25 16:12:36<SeP>2025-02-25 18:00:27<SeP>2025-02-25 19:48:18<SeP>2025-02-25 21:36:09<SeP>2025-02-25 23:24:00<SeP>2025-02-26 01:11:51<SeP>2025-02-26 02:59:42<SeP>2025-02-26 04:47:33<SeP>2025-02-26 06:35:24<SeP>2025-02-26 08:23:15<SeP>2025-02-26 10:11:06<SeP>2025-02-26 11:58:57<SeP>2025-02-26 13:46:48<SeP>2025-02-26 15:34:39<SeP>2025-02-26 17:22:30<SeP>2025-02-26 19:10:21<SeP>2025-02-26 20:58:12<SeP>2025-02-26 22:46:03<SeP>2025-02-27 00:33:54<SeP>2025-02-27 02:21:45<SeP>2025-02-27 04:09:36<SeP>2025-02-27 05:57:27<SeP>2025-02-27 07:45:18<SeP>2025-02-27 09:33:09<SeP>2025-02-27 11:21:00<SeP>2025-02-27 13:08:51<SeP>2025-02-27 14:56:42<SeP>2025-02-27 16:44:33<SeP>2025-02-27 18:32:24<SeP>2025-02-27 20:20:15<SeP>2025-02-27 22:08:06<SeP>2025-02-27 23:55:57<SeP>2025-02-28 01:43:48<SeP>2025-02-28 03:31:39<SeP>2025-02-28 05:19:30<SeP>2025-02-28 07:07:21<SeP>2025-02-28 08:55:12<SeP>2025-02-28 10:43:03<SeP>2025-02-28 12:30:54<SeP>2025-02-28 14:18:45<SeP>2025-02-28 16:06:36<SeP>2025-02-28 17:54:27<SeP>2025-02-28 19:42:18<SeP>2025-02-28 21:30:09<SeP>2025-02-28 23:18:00<SeP>2025-03-01 01:05:51<SeP>2025-03-01 02:53:42<SeP>2025-03-01 04:41:33<SeP>2025-03-01 06:29:24<SeP>2025-03-01 08:17:15<SeP>2025-03-01 10:05:06<SeP>2025-03-01 11:52:57<SeP>2025-03-01 13:40:48<SeP>2025-03-01 15:28:39<SeP>2025-03-01 17:16:30<SeP>2025-03-01 19:04:21<SeP>2025-03-01 20:52:12<SeP>2025-03-01 22:40:03<SeP>2025-03-02 00:27:54<SeP>2025-03-02 02:15:45<SeP>2025-03-02 04:03:36<SeP>2025-03-02 05:51:27<SeP>2025-03-02 07:39:18<SeP>2025-03-02 09:27:09<SeP>2025-03-02 11:15:00<SeP>2025-03-02 13:02:51<SeP>2025-03-02 14:50:42<SeP>2025-03-02 16:38:33<SeP>2025-03-02 18:26:24<SeP>2025-03-02 20:14:15<SeP>2025-03-02 22:02:06<SeP>2025-03-02 23:49:57<SeP>2025-03-03 01:37:48<SeP>2025-03-03 03:25:39<SeP>2025-03-03 05:13:30<SeP>2025-03-03 07:01:21<SeP>2025-03-03 08:49:12<SeP>2025-03-03 10:37:03<SeP>2025-03-03 12:24:54<SeP>2025-03-03 14:12:45<SeP>2025-03-03 16:00:36<SeP>2025-03-03 17:48:27<SeP>2025-03-03 19:36:18<SeP>2025-03-03 21:24:09<SeP>2025-03-03 23:12:00<SeP>2025-03-04 00:59:51<SeP>2025-03-04 02:47:42<SeP>2025-03-04 04:35:33<SeP>2025-03-04 06:23:24<SeP>2025-03-04 08:11:15<SeP>2025-03-04 09:59:06<SeP>2025-03-04 11:46:57<SeP>2025-03-04 13:34:48<SeP>2025-03-04 15:22:39<SeP>2025-03-04 17:10:30<SeP>2025-03-04 18:58:21<SeP>2025-03-04 20:46:12<SeP>2025-03-04 22:34:03<SeP>2025-03-05 00:21:54<SeP>2025-03-05 02:09:45<SeP>2025-03-05 03:57:36<SeP>2025-03-05 05:45:27<SeP>2025-03-05 07:33:18<SeP>2025-03-05 09:21:09<SeP>2025-03-05 11:09:00<SeP>2025-03-05 12:56:51<SeP>2025-03-05 14:44:42<SeP>2025-03-05 16:32:33<SeP>2025-03-05 18:20:24<SeP>2025-03-05 20:08:15<SeP>2025-03-05 21:56:06<SeP>2025-03-05 23:43:57<SeP>2025-03-06 01:31:48<SeP>2025-03-06 03:19:39<SeP>2025-03-06 05:07:30<SeP>2025-03-06 06:55:21<SeP>2025-03-06 08:43:12<SeP>2025-03-06 10:31:03<SeP>2025-03-06 12:18:54<SeP>2025-03-06 14:06:45<SeP>2025-03-06 15:54:36<SeP>2025-03-06 17:42:27<SeP>2025-03-06 19:30:18<SeP>2025-03-06 21:18:09<SeP>2025-03-06 23:06:00<SeP>2025-03-07 00:53:51<SeP>2025-03-07 02:41:42<SeP>2025-03-07 04:29:33<SeP>2025-03-07 06:17:24<SeP>2025-03-07 08:05:15<SeP>2025-03-07 09:53:06<SeP>2025-03-07 11:40:57<SeP>2025-03-07 13:28:48<SeP>2025-03-07 15:16:39<SeP>2025-03-07 17:04:30<SeP>2025-03-07 18:52:21<SeP>2025-03-07 20:40:12<SeP>2025-03-07 22:28:03<SeP>2025-03-08 00:15:54<SeP>2025-03-08 02:03:45<SeP>2025-03-08 03:51:36<SeP>2025-03-08 05:39:27<SeP>2025-03-08 07:27:18<SeP>2025-03-08 09:15:09<SeP>2025-03-08 11:03:00<SeP>2025-03-08 12:50:51<SeP>2025-03-08 14:38:42<SeP>2025-03-08 16:26:33<SeP>2025-03-08 18:14:24<SeP>2025-03-08 20:02:15<SeP>2025-03-08 21:50:06<SeP>2025-03-08 23:37:57<SeP>2025-03-09 01:25:48<SeP>2025-03-09 04:13:39<SeP>2025-03-09 06:01:30<SeP>2025-03-09 07:49:21<SeP>2025-03-09 09:37:12<SeP>2025-03-09 11:25:03<SeP>2025-03-09 13:12:54<SeP>2025-03-09 15:00:45<SeP>2025-03-09 16:48:36<SeP>2025-03-09 18:36:27<SeP>2025-03-09 20:24:18<SeP>2025-03-09 22:12:09";
  const item1Label       = "Scans";
  const item1Data        = "88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>93<SeP>84<SeP>28<SeP>58<SeP>65<SeP>45<SeP>83<SeP>45<SeP>150<SeP>214<SeP>115<SeP>84<SeP>147<SeP>73<SeP>96<SeP>94<SeP>136<SeP>148<SeP>94<SeP>109<SeP>46<SeP>75<SeP>111<SeP>82<SeP>67<SeP>101<SeP>77<SeP>83<SeP>74<SeP>89<SeP>67<SeP>76<SeP>147<SeP>60<SeP>48<SeP>88<SeP>83<SeP>112<SeP>193<SeP>84<SeP>130<SeP>88<SeP>115<SeP>96<SeP>141<SeP>110<SeP>29<SeP>117<SeP>65<SeP>71<SeP>117<SeP>55<SeP>84<SeP>52<SeP>77<SeP>66<SeP>60<SeP>108<SeP>192<SeP>38<SeP>101<SeP>107<SeP>105<SeP>113<SeP>42<SeP>83<SeP>71<SeP>174<SeP>69<SeP>106<SeP>53<SeP>83<SeP>98<SeP>75<SeP>74<SeP>85<SeP>76<SeP>151<SeP>98<SeP>194<SeP>67<SeP>62<SeP>56<SeP>91<SeP>36<SeP>99<SeP>86<SeP>101<SeP>73<SeP>74<SeP>101<SeP>166<SeP>166<SeP>81<SeP>86<SeP>53<SeP>42<SeP>89<SeP>76<SeP>116<SeP>72<SeP>53<SeP>75<SeP>60<SeP>112<SeP>90<SeP>56<SeP>84<SeP>75<SeP>84<SeP>43<SeP>71<SeP>149<SeP>126<SeP>75<SeP>62<SeP>63<SeP>67<SeP>83<SeP>90<SeP>86<SeP>79<SeP>37<SeP>20<SeP>57<SeP>85<SeP>133<SeP>77<SeP>145<SeP>42<SeP>120<SeP>71<SeP>149<SeP>74<SeP>67<SeP>93<SeP>80<SeP>28<SeP>72<SeP>79<SeP>49<SeP>49<SeP>97<SeP>92<SeP>159<SeP>110<SeP>86<SeP>65<SeP>49<SeP>71<SeP>70<SeP>39<SeP>87<SeP>90<SeP>101<SeP>83<SeP>68<SeP>100<SeP>62<SeP>84<SeP>141<SeP>73<SeP>43<SeP>57<SeP>44<SeP>76<SeP>85<SeP>96<SeP>69<SeP>102<SeP>133<SeP>59<SeP>104<SeP>69<SeP>49<SeP>71<SeP>85<SeP>71<SeP>70<SeP>140<SeP>63<SeP>90<SeP>90<SeP>107<SeP>101<SeP>61<SeP>44<SeP>26<SeP>76<SeP>93<SeP>54<SeP>54<SeP>89<SeP>86<SeP>48<SeP>95<SeP>115<SeP>117<SeP>59<SeP>40<SeP>25<SeP>59<SeP>167<SeP>88<SeP>138<SeP>57<SeP>68<SeP>121<SeP>48<SeP>62<SeP>111<SeP>68<SeP>190<SeP>74<SeP>42<SeP>135<SeP>71<SeP>74<SeP>67<SeP>91<SeP>106<SeP>110<SeP>82<SeP>105<SeP>55<SeP>71<SeP>90<SeP>72<SeP>83<SeP>59<SeP>129<SeP>110<SeP>87<SeP>89<SeP>86<SeP>125<SeP>59<SeP>122<SeP>107<SeP>48<SeP>62<SeP>129<SeP>144<SeP>50<SeP>197<SeP>81<SeP>136<SeP>48<SeP>71<SeP>83<SeP>73<SeP>85<SeP>86<SeP>37<SeP>73<SeP>71<SeP>60<SeP>55<SeP>40<SeP>112<SeP>92<SeP>118<SeP>68<SeP>81<SeP>76<SeP>46<SeP>50<SeP>93<SeP>47<SeP>51<SeP>55<SeP>72<SeP>87<SeP>86<SeP>88<SeP>67<SeP>49<SeP>44<SeP>58<SeP>212<SeP>84<SeP>40<SeP>79<SeP>70<SeP>113<SeP>58<SeP>41<SeP>45<SeP>170<SeP>104<SeP>44<SeP>49<SeP>53<SeP>90<SeP>51<SeP>34<SeP>64<SeP>138<SeP>83<SeP>66<SeP>60<SeP>116<SeP>53<SeP>64<SeP>26<SeP>38<SeP>47<SeP>30<SeP>63<SeP>85<SeP>75<SeP>60<SeP>75<SeP>75<SeP>253<SeP>51<SeP>29<SeP>70<SeP>69<SeP>118<SeP>141<SeP>52<SeP>55<SeP>67<SeP>171<SeP>67<SeP>95<SeP>64<SeP>107<SeP>21<SeP>112<SeP>24<SeP>47<SeP>55<SeP>55<SeP>53<SeP>100<SeP>94<SeP>128<SeP>98<SeP>45<SeP>75<SeP>46<SeP>54<SeP>113<SeP>88<SeP>81<SeP>72<SeP>70<SeP>172<SeP>39<SeP>76<SeP>46<SeP>68<SeP>365<SeP>153<SeP>25<SeP>47<SeP>17<SeP>51<SeP>41<SeP>70<SeP>75<SeP>76<SeP>185<SeP>76<SeP>75<SeP>347<SeP>66<SeP>99<SeP>257<SeP>141<SeP>197<SeP>51<SeP>54<SeP>67<SeP>44<SeP>69<SeP>45<SeP>55<SeP>52<SeP>20<SeP>66<SeP>58<SeP>95<SeP>62<SeP>69<SeP>42<SeP>60<SeP>55<SeP>29<SeP>31<SeP>32<SeP>117";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "133<SeP>83<SeP>282<SeP>77<SeP>23<SeP>269<SeP>137<SeP>171<SeP>27<SeP>38<SeP>122<SeP>120<SeP>333<SeP>130<SeP>153<SeP>183<SeP>122<SeP>165<SeP>193<SeP>343<SeP>261<SeP>409<SeP>269<SeP>477<SeP>333<SeP>350<SeP>179<SeP>198<SeP>307<SeP>223<SeP>148<SeP>142<SeP>63<SeP>30<SeP>81<SeP>186<SeP>214<SeP>169<SeP>45<SeP>63<SeP>235<SeP>184<SeP>324<SeP>84<SeP>217<SeP>161<SeP>160<SeP>48<SeP>486<SeP>126<SeP>263<SeP>113<SeP>100<SeP>368<SeP>279<SeP>430<SeP>2581<SeP>3274<SeP>1113<SeP>375<SeP>211<SeP>307<SeP>617<SeP>181<SeP>409<SeP>133<SeP>11<SeP>66<SeP>78<SeP>592<SeP>39<SeP>312<SeP>129<SeP>251<SeP>172<SeP>779<SeP>432<SeP>377<SeP>243<SeP>260<SeP>150<SeP>201<SeP>235<SeP>459<SeP>241<SeP>390<SeP>152<SeP>312<SeP>259<SeP>257<SeP>271<SeP>241<SeP>158<SeP>117<SeP>160<SeP>159<SeP>227<SeP>685<SeP>46<SeP>210<SeP>149<SeP>259<SeP>53<SeP>83<SeP>243<SeP>281<SeP>121<SeP>141<SeP>75<SeP>23<SeP>307<SeP>268<SeP>194<SeP>130<SeP>271<SeP>275<SeP>135<SeP>432<SeP>421<SeP>177<SeP>294<SeP>259<SeP>296<SeP>155<SeP>348<SeP>392<SeP>141<SeP>383<SeP>116<SeP>34<SeP>319<SeP>347<SeP>45<SeP>201<SeP>450<SeP>185<SeP>79<SeP>438<SeP>62<SeP>186<SeP>250<SeP>252<SeP>234<SeP>183<SeP>285<SeP>95<SeP>109<SeP>184<SeP>123<SeP>528<SeP>149<SeP>39<SeP>105<SeP>103<SeP>8<SeP>100<SeP>163<SeP>325<SeP>183<SeP>249<SeP>77<SeP>282<SeP>139<SeP>117<SeP>96<SeP>108<SeP>9<SeP>112<SeP>247<SeP>156<SeP>301<SeP>836<SeP>421<SeP>310<SeP>704<SeP>287<SeP>610<SeP>173<SeP>445<SeP>538<SeP>222<SeP>529<SeP>304<SeP>650<SeP>855<SeP>923<SeP>630<SeP>322<SeP>308<SeP>226<SeP>293<SeP>426<SeP>793<SeP>635<SeP>353<SeP>487<SeP>272<SeP>551<SeP>702<SeP>589<SeP>467<SeP>366<SeP>555<SeP>757<SeP>223<SeP>310<SeP>499<SeP>747<SeP>571<SeP>526<SeP>453<SeP>78<SeP>78<SeP>347<SeP>63<SeP>203<SeP>404<SeP>232<SeP>63<SeP>337<SeP>125<SeP>53<SeP>100<SeP>273<SeP>225<SeP>225<SeP>261<SeP>223<SeP>415<SeP>55<SeP>107<SeP>258<SeP>136<SeP>438<SeP>336<SeP>111<SeP>185<SeP>142<SeP>52<SeP>121<SeP>190<SeP>54<SeP>65<SeP>323<SeP>79<SeP>120<SeP>173<SeP>84<SeP>57<SeP>69<SeP>64<SeP>200<SeP>341<SeP>323<SeP>35<SeP>222<SeP>179<SeP>498<SeP>95<SeP>149<SeP>152<SeP>192<SeP>252<SeP>25<SeP>42<SeP>144<SeP>114<SeP>213<SeP>131<SeP>148<SeP>336<SeP>26<SeP>342<SeP>193<SeP>354<SeP>61<SeP>63<SeP>48<SeP>47<SeP>78<SeP>106<SeP>32<SeP>13<SeP>85<SeP>99<SeP>30<SeP>82<SeP>67<SeP>197<SeP>108<SeP>77<SeP>45<SeP>263<SeP>63<SeP>523<SeP>42<SeP>115<SeP>17<SeP>312<SeP>28<SeP>20<SeP>197<SeP>82<SeP>86<SeP>40<SeP>184<SeP>50<SeP>117<SeP>275<SeP>107<SeP>33<SeP>91<SeP>49<SeP>37<SeP>381<SeP>152<SeP>48<SeP>88<SeP>57<SeP>206<SeP>108<SeP>35<SeP>456<SeP>28<SeP>30<SeP>14<SeP>253<SeP>88<SeP>35<SeP>83<SeP>65<SeP>62<SeP>83<SeP>280<SeP>138<SeP>142<SeP>69<SeP>69<SeP>73<SeP>43<SeP>32<SeP>37<SeP>305<SeP>55<SeP>132<SeP>140<SeP>137<SeP>91<SeP>19<SeP>123<SeP>144<SeP>161<SeP>93<SeP>114<SeP>88<SeP>40<SeP>118<SeP>72<SeP>129<SeP>151<SeP>51<SeP>174<SeP>45<SeP>407<SeP>380<SeP>69<SeP>131<SeP>163<SeP>35<SeP>40<SeP>130<SeP>49<SeP>90<SeP>108<SeP>108<SeP>195<SeP>25<SeP>12<SeP>65<SeP>207<SeP>48<SeP>78<SeP>10<SeP>26<SeP>21<SeP>246<SeP>148<SeP>29<SeP>156<SeP>112<SeP>12<SeP>25<SeP>71<SeP>58<SeP>52<SeP>279<SeP>60<SeP>18<SeP>34<SeP>501";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-08 00:00:00<SeP>2025-02-08 01:47:51<SeP>2025-02-08 03:35:42<SeP>2025-02-08 05:23:33<SeP>2025-02-08 07:11:24<SeP>2025-02-08 08:59:15<SeP>2025-02-08 10:47:06<SeP>2025-02-08 12:34:57<SeP>2025-02-08 14:22:48<SeP>2025-02-08 16:10:39<SeP>2025-02-08 17:58:30<SeP>2025-02-08 19:46:21<SeP>2025-02-08 21:34:12<SeP>2025-02-08 23:22:03<SeP>2025-02-09 01:09:54<SeP>2025-02-09 02:57:45<SeP>2025-02-09 04:45:36<SeP>2025-02-09 06:33:27<SeP>2025-02-09 08:21:18<SeP>2025-02-09 10:09:09<SeP>2025-02-09 11:57:00<SeP>2025-02-09 13:44:51<SeP>2025-02-09 15:32:42<SeP>2025-02-09 17:20:33<SeP>2025-02-09 19:08:24<SeP>2025-02-09 20:56:15<SeP>2025-02-09 22:44:06<SeP>2025-02-10 00:31:57<SeP>2025-02-10 02:19:48<SeP>2025-02-10 04:07:39<SeP>2025-02-10 05:55:30<SeP>2025-02-10 07:43:21<SeP>2025-02-10 09:31:12<SeP>2025-02-10 11:19:03<SeP>2025-02-10 13:06:54<SeP>2025-02-10 14:54:45<SeP>2025-02-10 16:42:36<SeP>2025-02-10 18:30:27<SeP>2025-02-10 20:18:18<SeP>2025-02-10 22:06:09<SeP>2025-02-10 23:54:00<SeP>2025-02-11 01:41:51<SeP>2025-02-11 03:29:42<SeP>2025-02-11 05:17:33<SeP>2025-02-11 07:05:24<SeP>2025-02-11 08:53:15<SeP>2025-02-11 10:41:06<SeP>2025-02-11 12:28:57<SeP>2025-02-11 14:16:48<SeP>2025-02-11 16:04:39<SeP>2025-02-11 17:52:30<SeP>2025-02-11 19:40:21<SeP>2025-02-11 21:28:12<SeP>2025-02-11 23:16:03<SeP>2025-02-12 01:03:54<SeP>2025-02-12 02:51:45<SeP>2025-02-12 04:39:36<SeP>2025-02-12 06:27:27<SeP>2025-02-12 08:15:18<SeP>2025-02-12 10:03:09<SeP>2025-02-12 11:51:00<SeP>2025-02-12 13:38:51<SeP>2025-02-12 15:26:42<SeP>2025-02-12 17:14:33<SeP>2025-02-12 19:02:24<SeP>2025-02-12 20:50:15<SeP>2025-02-12 22:38:06<SeP>2025-02-13 00:25:57<SeP>2025-02-13 02:13:48<SeP>2025-02-13 04:01:39<SeP>2025-02-13 05:49:30<SeP>2025-02-13 07:37:21<SeP>2025-02-13 09:25:12<SeP>2025-02-13 11:13:03<SeP>2025-02-13 13:00:54<SeP>2025-02-13 14:48:45<SeP>2025-02-13 16:36:36<SeP>2025-02-13 18:24:27<SeP>2025-02-13 20:12:18<SeP>2025-02-13 22:00:09<SeP>2025-02-13 23:48:00<SeP>2025-02-14 01:35:51<SeP>2025-02-14 03:23:42<SeP>2025-02-14 05:11:33<SeP>2025-02-14 06:59:24<SeP>2025-02-14 08:47:15<SeP>2025-02-14 10:35:06<SeP>2025-02-14 12:22:57<SeP>2025-02-14 14:10:48<SeP>2025-02-14 15:58:39<SeP>2025-02-14 17:46:30<SeP>2025-02-14 19:34:21<SeP>2025-02-14 21:22:12<SeP>2025-02-14 23:10:03<SeP>2025-02-15 00:57:54<SeP>2025-02-15 02:45:45<SeP>2025-02-15 04:33:36<SeP>2025-02-15 06:21:27<SeP>2025-02-15 08:09:18<SeP>2025-02-15 09:57:09<SeP>2025-02-15 11:45:00<SeP>2025-02-15 13:32:51<SeP>2025-02-15 15:20:42<SeP>2025-02-15 17:08:33<SeP>2025-02-15 18:56:24<SeP>2025-02-15 20:44:15<SeP>2025-02-15 22:32:06<SeP>2025-02-16 00:19:57<SeP>2025-02-16 02:07:48<SeP>2025-02-16 03:55:39<SeP>2025-02-16 05:43:30<SeP>2025-02-16 07:31:21<SeP>2025-02-16 09:19:12<SeP>2025-02-16 11:07:03<SeP>2025-02-16 12:54:54<SeP>2025-02-16 14:42:45<SeP>2025-02-16 16:30:36<SeP>2025-02-16 18:18:27<SeP>2025-02-16 20:06:18<SeP>2025-02-16 21:54:09<SeP>2025-02-16 23:42:00<SeP>2025-02-17 01:29:51<SeP>2025-02-17 03:17:42<SeP>2025-02-17 05:05:33<SeP>2025-02-17 06:53:24<SeP>2025-02-17 08:41:15<SeP>2025-02-17 10:29:06<SeP>2025-02-17 12:16:57<SeP>2025-02-17 14:04:48<SeP>2025-02-17 15:52:39<SeP>2025-02-17 17:40:30<SeP>2025-02-17 19:28:21<SeP>2025-02-17 21:16:12<SeP>2025-02-17 23:04:03<SeP>2025-02-18 00:51:54<SeP>2025-02-18 02:39:45<SeP>2025-02-18 04:27:36<SeP>2025-02-18 06:15:27<SeP>2025-02-18 08:03:18<SeP>2025-02-18 09:51:09<SeP>2025-02-18 11:39:00<SeP>2025-02-18 13:26:51<SeP>2025-02-18 15:14:42<SeP>2025-02-18 17:02:33<SeP>2025-02-18 18:50:24<SeP>2025-02-18 20:38:15<SeP>2025-02-18 22:26:06<SeP>2025-02-19 00:13:57<SeP>2025-02-19 02:01:48<SeP>2025-02-19 03:49:39<SeP>2025-02-19 05:37:30<SeP>2025-02-19 07:25:21<SeP>2025-02-19 09:13:12<SeP>2025-02-19 11:01:03<SeP>2025-02-19 12:48:54<SeP>2025-02-19 14:36:45<SeP>2025-02-19 16:24:36<SeP>2025-02-19 18:12:27<SeP>2025-02-19 20:00:18<SeP>2025-02-19 21:48:09<SeP>2025-02-19 23:36:00<SeP>2025-02-20 01:23:51<SeP>2025-02-20 03:11:42<SeP>2025-02-20 04:59:33<SeP>2025-02-20 06:47:24<SeP>2025-02-20 08:35:15<SeP>2025-02-20 10:23:06<SeP>2025-02-20 12:10:57<SeP>2025-02-20 13:58:48<SeP>2025-02-20 15:46:39<SeP>2025-02-20 17:34:30<SeP>2025-02-20 19:22:21<SeP>2025-02-20 21:10:12<SeP>2025-02-20 22:58:03<SeP>2025-02-21 00:45:54<SeP>2025-02-21 02:33:45<SeP>2025-02-21 04:21:36<SeP>2025-02-21 06:09:27<SeP>2025-02-21 07:57:18<SeP>2025-02-21 09:45:09<SeP>2025-02-21 11:33:00<SeP>2025-02-21 13:20:51<SeP>2025-02-21 15:08:42<SeP>2025-02-21 16:56:33<SeP>2025-02-21 18:44:24<SeP>2025-02-21 20:32:15<SeP>2025-02-21 22:20:06<SeP>2025-02-22 00:07:57<SeP>2025-02-22 01:55:48<SeP>2025-02-22 03:43:39<SeP>2025-02-22 05:31:30<SeP>2025-02-22 07:19:21<SeP>2025-02-22 09:07:12<SeP>2025-02-22 10:55:03<SeP>2025-02-22 12:42:54<SeP>2025-02-22 14:30:45<SeP>2025-02-22 16:18:36<SeP>2025-02-22 18:06:27<SeP>2025-02-22 19:54:18<SeP>2025-02-22 21:42:09<SeP>2025-02-22 23:30:00<SeP>2025-02-23 01:17:51<SeP>2025-02-23 03:05:42<SeP>2025-02-23 04:53:33<SeP>2025-02-23 06:41:24<SeP>2025-02-23 08:29:15<SeP>2025-02-23 10:17:06<SeP>2025-02-23 12:04:57<SeP>2025-02-23 13:52:48<SeP>2025-02-23 15:40:39<SeP>2025-02-23 17:28:30<SeP>2025-02-23 19:16:21<SeP>2025-02-23 21:04:12<SeP>2025-02-23 22:52:03<SeP>2025-02-24 00:39:54<SeP>2025-02-24 02:27:45<SeP>2025-02-24 04:15:36<SeP>2025-02-24 06:03:27<SeP>2025-02-24 07:51:18<SeP>2025-02-24 09:39:09<SeP>2025-02-24 11:27:00<SeP>2025-02-24 13:14:51<SeP>2025-02-24 15:02:42<SeP>2025-02-24 16:50:33<SeP>2025-02-24 18:38:24<SeP>2025-02-24 20:26:15<SeP>2025-02-24 22:14:06<SeP>2025-02-25 00:01:57<SeP>2025-02-25 01:49:48<SeP>2025-02-25 03:37:39<SeP>2025-02-25 05:25:30<SeP>2025-02-25 07:13:21<SeP>2025-02-25 09:01:12<SeP>2025-02-25 10:49:03<SeP>2025-02-25 12:36:54<SeP>2025-02-25 14:24:45<SeP>2025-02-25 16:12:36<SeP>2025-02-25 18:00:27<SeP>2025-02-25 19:48:18<SeP>2025-02-25 21:36:09<SeP>2025-02-25 23:24:00<SeP>2025-02-26 01:11:51<SeP>2025-02-26 02:59:42<SeP>2025-02-26 04:47:33<SeP>2025-02-26 06:35:24<SeP>2025-02-26 08:23:15<SeP>2025-02-26 10:11:06<SeP>2025-02-26 11:58:57<SeP>2025-02-26 13:46:48<SeP>2025-02-26 15:34:39<SeP>2025-02-26 17:22:30<SeP>2025-02-26 19:10:21<SeP>2025-02-26 20:58:12<SeP>2025-02-26 22:46:03<SeP>2025-02-27 00:33:54<SeP>2025-02-27 02:21:45<SeP>2025-02-27 04:09:36<SeP>2025-02-27 05:57:27<SeP>2025-02-27 07:45:18<SeP>2025-02-27 09:33:09<SeP>2025-02-27 11:21:00<SeP>2025-02-27 13:08:51<SeP>2025-02-27 14:56:42<SeP>2025-02-27 16:44:33<SeP>2025-02-27 18:32:24<SeP>2025-02-27 20:20:15<SeP>2025-02-27 22:08:06<SeP>2025-02-27 23:55:57<SeP>2025-02-28 01:43:48<SeP>2025-02-28 03:31:39<SeP>2025-02-28 05:19:30<SeP>2025-02-28 07:07:21<SeP>2025-02-28 08:55:12<SeP>2025-02-28 10:43:03<SeP>2025-02-28 12:30:54<SeP>2025-02-28 14:18:45<SeP>2025-02-28 16:06:36<SeP>2025-02-28 17:54:27<SeP>2025-02-28 19:42:18<SeP>2025-02-28 21:30:09<SeP>2025-02-28 23:18:00<SeP>2025-03-01 01:05:51<SeP>2025-03-01 02:53:42<SeP>2025-03-01 04:41:33<SeP>2025-03-01 06:29:24<SeP>2025-03-01 08:17:15<SeP>2025-03-01 10:05:06<SeP>2025-03-01 11:52:57<SeP>2025-03-01 13:40:48<SeP>2025-03-01 15:28:39<SeP>2025-03-01 17:16:30<SeP>2025-03-01 19:04:21<SeP>2025-03-01 20:52:12<SeP>2025-03-01 22:40:03<SeP>2025-03-02 00:27:54<SeP>2025-03-02 02:15:45<SeP>2025-03-02 04:03:36<SeP>2025-03-02 05:51:27<SeP>2025-03-02 07:39:18<SeP>2025-03-02 09:27:09<SeP>2025-03-02 11:15:00<SeP>2025-03-02 13:02:51<SeP>2025-03-02 14:50:42<SeP>2025-03-02 16:38:33<SeP>2025-03-02 18:26:24<SeP>2025-03-02 20:14:15<SeP>2025-03-02 22:02:06<SeP>2025-03-02 23:49:57<SeP>2025-03-03 01:37:48<SeP>2025-03-03 03:25:39<SeP>2025-03-03 05:13:30<SeP>2025-03-03 07:01:21<SeP>2025-03-03 08:49:12<SeP>2025-03-03 10:37:03<SeP>2025-03-03 12:24:54<SeP>2025-03-03 14:12:45<SeP>2025-03-03 16:00:36<SeP>2025-03-03 17:48:27<SeP>2025-03-03 19:36:18<SeP>2025-03-03 21:24:09<SeP>2025-03-03 23:12:00<SeP>2025-03-04 00:59:51<SeP>2025-03-04 02:47:42<SeP>2025-03-04 04:35:33<SeP>2025-03-04 06:23:24<SeP>2025-03-04 08:11:15<SeP>2025-03-04 09:59:06<SeP>2025-03-04 11:46:57<SeP>2025-03-04 13:34:48<SeP>2025-03-04 15:22:39<SeP>2025-03-04 17:10:30<SeP>2025-03-04 18:58:21<SeP>2025-03-04 20:46:12<SeP>2025-03-04 22:34:03<SeP>2025-03-05 00:21:54<SeP>2025-03-05 02:09:45<SeP>2025-03-05 03:57:36<SeP>2025-03-05 05:45:27<SeP>2025-03-05 07:33:18<SeP>2025-03-05 09:21:09<SeP>2025-03-05 11:09:00<SeP>2025-03-05 12:56:51<SeP>2025-03-05 14:44:42<SeP>2025-03-05 16:32:33<SeP>2025-03-05 18:20:24<SeP>2025-03-05 20:08:15<SeP>2025-03-05 21:56:06<SeP>2025-03-05 23:43:57<SeP>2025-03-06 01:31:48<SeP>2025-03-06 03:19:39<SeP>2025-03-06 05:07:30<SeP>2025-03-06 06:55:21<SeP>2025-03-06 08:43:12<SeP>2025-03-06 10:31:03<SeP>2025-03-06 12:18:54<SeP>2025-03-06 14:06:45<SeP>2025-03-06 15:54:36<SeP>2025-03-06 17:42:27<SeP>2025-03-06 19:30:18<SeP>2025-03-06 21:18:09<SeP>2025-03-06 23:06:00<SeP>2025-03-07 00:53:51<SeP>2025-03-07 02:41:42<SeP>2025-03-07 04:29:33<SeP>2025-03-07 06:17:24<SeP>2025-03-07 08:05:15<SeP>2025-03-07 09:53:06<SeP>2025-03-07 11:40:57<SeP>2025-03-07 13:28:48<SeP>2025-03-07 15:16:39<SeP>2025-03-07 17:04:30<SeP>2025-03-07 18:52:21<SeP>2025-03-07 20:40:12<SeP>2025-03-07 22:28:03<SeP>2025-03-08 00:15:54<SeP>2025-03-08 02:03:45<SeP>2025-03-08 03:51:36<SeP>2025-03-08 05:39:27<SeP>2025-03-08 07:27:18<SeP>2025-03-08 09:15:09<SeP>2025-03-08 11:03:00<SeP>2025-03-08 12:50:51<SeP>2025-03-08 14:38:42<SeP>2025-03-08 16:26:33<SeP>2025-03-08 18:14:24<SeP>2025-03-08 20:02:15<SeP>2025-03-08 21:50:06<SeP>2025-03-08 23:37:57<SeP>2025-03-09 01:25:48<SeP>2025-03-09 04:13:39<SeP>2025-03-09 06:01:30<SeP>2025-03-09 07:49:21<SeP>2025-03-09 09:37:12<SeP>2025-03-09 11:25:03<SeP>2025-03-09 13:12:54<SeP>2025-03-09 15:00:45<SeP>2025-03-09 16:48:36<SeP>2025-03-09 18:36:27<SeP>2025-03-09 20:24:18<SeP>2025-03-09 22:12:09";
  const itemLabel       = "Scans";
  const itemData        = "88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>93<SeP>84<SeP>28<SeP>58<SeP>65<SeP>45<SeP>83<SeP>45<SeP>150<SeP>214<SeP>115<SeP>84<SeP>147<SeP>73<SeP>96<SeP>94<SeP>136<SeP>148<SeP>94<SeP>109<SeP>46<SeP>75<SeP>111<SeP>82<SeP>67<SeP>101<SeP>77<SeP>83<SeP>74<SeP>89<SeP>67<SeP>76<SeP>147<SeP>60<SeP>48<SeP>88<SeP>83<SeP>112<SeP>193<SeP>84<SeP>130<SeP>88<SeP>115<SeP>96<SeP>141<SeP>110<SeP>29<SeP>117<SeP>65<SeP>71<SeP>117<SeP>55<SeP>84<SeP>52<SeP>77<SeP>66<SeP>60<SeP>108<SeP>192<SeP>38<SeP>101<SeP>107<SeP>105<SeP>113<SeP>42<SeP>83<SeP>71<SeP>174<SeP>69<SeP>106<SeP>53<SeP>83<SeP>98<SeP>75<SeP>74<SeP>85<SeP>76<SeP>151<SeP>98<SeP>194<SeP>67<SeP>62<SeP>56<SeP>91<SeP>36<SeP>99<SeP>86<SeP>101<SeP>73<SeP>74<SeP>101<SeP>166<SeP>166<SeP>81<SeP>86<SeP>53<SeP>42<SeP>89<SeP>76<SeP>116<SeP>72<SeP>53<SeP>75<SeP>60<SeP>112<SeP>90<SeP>56<SeP>84<SeP>75<SeP>84<SeP>43<SeP>71<SeP>149<SeP>126<SeP>75<SeP>62<SeP>63<SeP>67<SeP>83<SeP>90<SeP>86<SeP>79<SeP>37<SeP>20<SeP>57<SeP>85<SeP>133<SeP>77<SeP>145<SeP>42<SeP>120<SeP>71<SeP>149<SeP>74<SeP>67<SeP>93<SeP>80<SeP>28<SeP>72<SeP>79<SeP>49<SeP>49<SeP>97<SeP>92<SeP>159<SeP>110<SeP>86<SeP>65<SeP>49<SeP>71<SeP>70<SeP>39<SeP>87<SeP>90<SeP>101<SeP>83<SeP>68<SeP>100<SeP>62<SeP>84<SeP>141<SeP>73<SeP>43<SeP>57<SeP>44<SeP>76<SeP>85<SeP>96<SeP>69<SeP>102<SeP>133<SeP>59<SeP>104<SeP>69<SeP>49<SeP>71<SeP>85<SeP>71<SeP>70<SeP>140<SeP>63<SeP>90<SeP>90<SeP>107<SeP>101<SeP>61<SeP>44<SeP>26<SeP>76<SeP>93<SeP>54<SeP>54<SeP>89<SeP>86<SeP>48<SeP>95<SeP>115<SeP>117<SeP>59<SeP>40<SeP>25<SeP>59<SeP>167<SeP>88<SeP>138<SeP>57<SeP>68<SeP>121<SeP>48<SeP>62<SeP>111<SeP>68<SeP>190<SeP>74<SeP>42<SeP>135<SeP>71<SeP>74<SeP>67<SeP>91<SeP>106<SeP>110<SeP>82<SeP>105<SeP>55<SeP>71<SeP>90<SeP>72<SeP>83<SeP>59<SeP>129<SeP>110<SeP>87<SeP>89<SeP>86<SeP>125<SeP>59<SeP>122<SeP>107<SeP>48<SeP>62<SeP>129<SeP>144<SeP>50<SeP>197<SeP>81<SeP>136<SeP>48<SeP>71<SeP>83<SeP>73<SeP>85<SeP>86<SeP>37<SeP>73<SeP>71<SeP>60<SeP>55<SeP>40<SeP>112<SeP>92<SeP>118<SeP>68<SeP>81<SeP>76<SeP>46<SeP>50<SeP>93<SeP>47<SeP>51<SeP>55<SeP>72<SeP>87<SeP>86<SeP>88<SeP>67<SeP>49<SeP>44<SeP>58<SeP>212<SeP>84<SeP>40<SeP>79<SeP>70<SeP>113<SeP>58<SeP>41<SeP>45<SeP>170<SeP>104<SeP>44<SeP>49<SeP>53<SeP>90<SeP>51<SeP>34<SeP>64<SeP>138<SeP>83<SeP>66<SeP>60<SeP>116<SeP>53<SeP>64<SeP>26<SeP>38<SeP>47<SeP>30<SeP>63<SeP>85<SeP>75<SeP>60<SeP>75<SeP>75<SeP>253<SeP>51<SeP>29<SeP>70<SeP>69<SeP>118<SeP>141<SeP>52<SeP>55<SeP>67<SeP>171<SeP>67<SeP>95<SeP>64<SeP>107<SeP>21<SeP>112<SeP>24<SeP>47<SeP>55<SeP>55<SeP>53<SeP>100<SeP>94<SeP>128<SeP>98<SeP>45<SeP>75<SeP>46<SeP>54<SeP>113<SeP>88<SeP>81<SeP>72<SeP>70<SeP>172<SeP>39<SeP>76<SeP>46<SeP>68<SeP>365<SeP>153<SeP>25<SeP>47<SeP>17<SeP>51<SeP>41<SeP>70<SeP>75<SeP>76<SeP>185<SeP>76<SeP>75<SeP>347<SeP>66<SeP>99<SeP>257<SeP>141<SeP>197<SeP>51<SeP>54<SeP>67<SeP>44<SeP>69<SeP>45<SeP>55<SeP>52<SeP>20<SeP>66<SeP>58<SeP>95<SeP>62<SeP>69<SeP>42<SeP>60<SeP>55<SeP>29<SeP>31<SeP>32<SeP>117";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-08 00:00:00<SeP>2025-02-08 01:47:51<SeP>2025-02-08 03:35:42<SeP>2025-02-08 05:23:33<SeP>2025-02-08 07:11:24<SeP>2025-02-08 08:59:15<SeP>2025-02-08 10:47:06<SeP>2025-02-08 12:34:57<SeP>2025-02-08 14:22:48<SeP>2025-02-08 16:10:39<SeP>2025-02-08 17:58:30<SeP>2025-02-08 19:46:21<SeP>2025-02-08 21:34:12<SeP>2025-02-08 23:22:03<SeP>2025-02-09 01:09:54<SeP>2025-02-09 02:57:45<SeP>2025-02-09 04:45:36<SeP>2025-02-09 06:33:27<SeP>2025-02-09 08:21:18<SeP>2025-02-09 10:09:09<SeP>2025-02-09 11:57:00<SeP>2025-02-09 13:44:51<SeP>2025-02-09 15:32:42<SeP>2025-02-09 17:20:33<SeP>2025-02-09 19:08:24<SeP>2025-02-09 20:56:15<SeP>2025-02-09 22:44:06<SeP>2025-02-10 00:31:57<SeP>2025-02-10 02:19:48<SeP>2025-02-10 04:07:39<SeP>2025-02-10 05:55:30<SeP>2025-02-10 07:43:21<SeP>2025-02-10 09:31:12<SeP>2025-02-10 11:19:03<SeP>2025-02-10 13:06:54<SeP>2025-02-10 14:54:45<SeP>2025-02-10 16:42:36<SeP>2025-02-10 18:30:27<SeP>2025-02-10 20:18:18<SeP>2025-02-10 22:06:09<SeP>2025-02-10 23:54:00<SeP>2025-02-11 01:41:51<SeP>2025-02-11 03:29:42<SeP>2025-02-11 05:17:33<SeP>2025-02-11 07:05:24<SeP>2025-02-11 08:53:15<SeP>2025-02-11 10:41:06<SeP>2025-02-11 12:28:57<SeP>2025-02-11 14:16:48<SeP>2025-02-11 16:04:39<SeP>2025-02-11 17:52:30<SeP>2025-02-11 19:40:21<SeP>2025-02-11 21:28:12<SeP>2025-02-11 23:16:03<SeP>2025-02-12 01:03:54<SeP>2025-02-12 02:51:45<SeP>2025-02-12 04:39:36<SeP>2025-02-12 06:27:27<SeP>2025-02-12 08:15:18<SeP>2025-02-12 10:03:09<SeP>2025-02-12 11:51:00<SeP>2025-02-12 13:38:51<SeP>2025-02-12 15:26:42<SeP>2025-02-12 17:14:33<SeP>2025-02-12 19:02:24<SeP>2025-02-12 20:50:15<SeP>2025-02-12 22:38:06<SeP>2025-02-13 00:25:57<SeP>2025-02-13 02:13:48<SeP>2025-02-13 04:01:39<SeP>2025-02-13 05:49:30<SeP>2025-02-13 07:37:21<SeP>2025-02-13 09:25:12<SeP>2025-02-13 11:13:03<SeP>2025-02-13 13:00:54<SeP>2025-02-13 14:48:45<SeP>2025-02-13 16:36:36<SeP>2025-02-13 18:24:27<SeP>2025-02-13 20:12:18<SeP>2025-02-13 22:00:09<SeP>2025-02-13 23:48:00<SeP>2025-02-14 01:35:51<SeP>2025-02-14 03:23:42<SeP>2025-02-14 05:11:33<SeP>2025-02-14 06:59:24<SeP>2025-02-14 08:47:15<SeP>2025-02-14 10:35:06<SeP>2025-02-14 12:22:57<SeP>2025-02-14 14:10:48<SeP>2025-02-14 15:58:39<SeP>2025-02-14 17:46:30<SeP>2025-02-14 19:34:21<SeP>2025-02-14 21:22:12<SeP>2025-02-14 23:10:03<SeP>2025-02-15 00:57:54<SeP>2025-02-15 02:45:45<SeP>2025-02-15 04:33:36<SeP>2025-02-15 06:21:27<SeP>2025-02-15 08:09:18<SeP>2025-02-15 09:57:09<SeP>2025-02-15 11:45:00<SeP>2025-02-15 13:32:51<SeP>2025-02-15 15:20:42<SeP>2025-02-15 17:08:33<SeP>2025-02-15 18:56:24<SeP>2025-02-15 20:44:15<SeP>2025-02-15 22:32:06<SeP>2025-02-16 00:19:57<SeP>2025-02-16 02:07:48<SeP>2025-02-16 03:55:39<SeP>2025-02-16 05:43:30<SeP>2025-02-16 07:31:21<SeP>2025-02-16 09:19:12<SeP>2025-02-16 11:07:03<SeP>2025-02-16 12:54:54<SeP>2025-02-16 14:42:45<SeP>2025-02-16 16:30:36<SeP>2025-02-16 18:18:27<SeP>2025-02-16 20:06:18<SeP>2025-02-16 21:54:09<SeP>2025-02-16 23:42:00<SeP>2025-02-17 01:29:51<SeP>2025-02-17 03:17:42<SeP>2025-02-17 05:05:33<SeP>2025-02-17 06:53:24<SeP>2025-02-17 08:41:15<SeP>2025-02-17 10:29:06<SeP>2025-02-17 12:16:57<SeP>2025-02-17 14:04:48<SeP>2025-02-17 15:52:39<SeP>2025-02-17 17:40:30<SeP>2025-02-17 19:28:21<SeP>2025-02-17 21:16:12<SeP>2025-02-17 23:04:03<SeP>2025-02-18 00:51:54<SeP>2025-02-18 02:39:45<SeP>2025-02-18 04:27:36<SeP>2025-02-18 06:15:27<SeP>2025-02-18 08:03:18<SeP>2025-02-18 09:51:09<SeP>2025-02-18 11:39:00<SeP>2025-02-18 13:26:51<SeP>2025-02-18 15:14:42<SeP>2025-02-18 17:02:33<SeP>2025-02-18 18:50:24<SeP>2025-02-18 20:38:15<SeP>2025-02-18 22:26:06<SeP>2025-02-19 00:13:57<SeP>2025-02-19 02:01:48<SeP>2025-02-19 03:49:39<SeP>2025-02-19 05:37:30<SeP>2025-02-19 07:25:21<SeP>2025-02-19 09:13:12<SeP>2025-02-19 11:01:03<SeP>2025-02-19 12:48:54<SeP>2025-02-19 14:36:45<SeP>2025-02-19 16:24:36<SeP>2025-02-19 18:12:27<SeP>2025-02-19 20:00:18<SeP>2025-02-19 21:48:09<SeP>2025-02-19 23:36:00<SeP>2025-02-20 01:23:51<SeP>2025-02-20 03:11:42<SeP>2025-02-20 04:59:33<SeP>2025-02-20 06:47:24<SeP>2025-02-20 08:35:15<SeP>2025-02-20 10:23:06<SeP>2025-02-20 12:10:57<SeP>2025-02-20 13:58:48<SeP>2025-02-20 15:46:39<SeP>2025-02-20 17:34:30<SeP>2025-02-20 19:22:21<SeP>2025-02-20 21:10:12<SeP>2025-02-20 22:58:03<SeP>2025-02-21 00:45:54<SeP>2025-02-21 02:33:45<SeP>2025-02-21 04:21:36<SeP>2025-02-21 06:09:27<SeP>2025-02-21 07:57:18<SeP>2025-02-21 09:45:09<SeP>2025-02-21 11:33:00<SeP>2025-02-21 13:20:51<SeP>2025-02-21 15:08:42<SeP>2025-02-21 16:56:33<SeP>2025-02-21 18:44:24<SeP>2025-02-21 20:32:15<SeP>2025-02-21 22:20:06<SeP>2025-02-22 00:07:57<SeP>2025-02-22 01:55:48<SeP>2025-02-22 03:43:39<SeP>2025-02-22 05:31:30<SeP>2025-02-22 07:19:21<SeP>2025-02-22 09:07:12<SeP>2025-02-22 10:55:03<SeP>2025-02-22 12:42:54<SeP>2025-02-22 14:30:45<SeP>2025-02-22 16:18:36<SeP>2025-02-22 18:06:27<SeP>2025-02-22 19:54:18<SeP>2025-02-22 21:42:09<SeP>2025-02-22 23:30:00<SeP>2025-02-23 01:17:51<SeP>2025-02-23 03:05:42<SeP>2025-02-23 04:53:33<SeP>2025-02-23 06:41:24<SeP>2025-02-23 08:29:15<SeP>2025-02-23 10:17:06<SeP>2025-02-23 12:04:57<SeP>2025-02-23 13:52:48<SeP>2025-02-23 15:40:39<SeP>2025-02-23 17:28:30<SeP>2025-02-23 19:16:21<SeP>2025-02-23 21:04:12<SeP>2025-02-23 22:52:03<SeP>2025-02-24 00:39:54<SeP>2025-02-24 02:27:45<SeP>2025-02-24 04:15:36<SeP>2025-02-24 06:03:27<SeP>2025-02-24 07:51:18<SeP>2025-02-24 09:39:09<SeP>2025-02-24 11:27:00<SeP>2025-02-24 13:14:51<SeP>2025-02-24 15:02:42<SeP>2025-02-24 16:50:33<SeP>2025-02-24 18:38:24<SeP>2025-02-24 20:26:15<SeP>2025-02-24 22:14:06<SeP>2025-02-25 00:01:57<SeP>2025-02-25 01:49:48<SeP>2025-02-25 03:37:39<SeP>2025-02-25 05:25:30<SeP>2025-02-25 07:13:21<SeP>2025-02-25 09:01:12<SeP>2025-02-25 10:49:03<SeP>2025-02-25 12:36:54<SeP>2025-02-25 14:24:45<SeP>2025-02-25 16:12:36<SeP>2025-02-25 18:00:27<SeP>2025-02-25 19:48:18<SeP>2025-02-25 21:36:09<SeP>2025-02-25 23:24:00<SeP>2025-02-26 01:11:51<SeP>2025-02-26 02:59:42<SeP>2025-02-26 04:47:33<SeP>2025-02-26 06:35:24<SeP>2025-02-26 08:23:15<SeP>2025-02-26 10:11:06<SeP>2025-02-26 11:58:57<SeP>2025-02-26 13:46:48<SeP>2025-02-26 15:34:39<SeP>2025-02-26 17:22:30<SeP>2025-02-26 19:10:21<SeP>2025-02-26 20:58:12<SeP>2025-02-26 22:46:03<SeP>2025-02-27 00:33:54<SeP>2025-02-27 02:21:45<SeP>2025-02-27 04:09:36<SeP>2025-02-27 05:57:27<SeP>2025-02-27 07:45:18<SeP>2025-02-27 09:33:09<SeP>2025-02-27 11:21:00<SeP>2025-02-27 13:08:51<SeP>2025-02-27 14:56:42<SeP>2025-02-27 16:44:33<SeP>2025-02-27 18:32:24<SeP>2025-02-27 20:20:15<SeP>2025-02-27 22:08:06<SeP>2025-02-27 23:55:57<SeP>2025-02-28 01:43:48<SeP>2025-02-28 03:31:39<SeP>2025-02-28 05:19:30<SeP>2025-02-28 07:07:21<SeP>2025-02-28 08:55:12<SeP>2025-02-28 10:43:03<SeP>2025-02-28 12:30:54<SeP>2025-02-28 14:18:45<SeP>2025-02-28 16:06:36<SeP>2025-02-28 17:54:27<SeP>2025-02-28 19:42:18<SeP>2025-02-28 21:30:09<SeP>2025-02-28 23:18:00<SeP>2025-03-01 01:05:51<SeP>2025-03-01 02:53:42<SeP>2025-03-01 04:41:33<SeP>2025-03-01 06:29:24<SeP>2025-03-01 08:17:15<SeP>2025-03-01 10:05:06<SeP>2025-03-01 11:52:57<SeP>2025-03-01 13:40:48<SeP>2025-03-01 15:28:39<SeP>2025-03-01 17:16:30<SeP>2025-03-01 19:04:21<SeP>2025-03-01 20:52:12<SeP>2025-03-01 22:40:03<SeP>2025-03-02 00:27:54<SeP>2025-03-02 02:15:45<SeP>2025-03-02 04:03:36<SeP>2025-03-02 05:51:27<SeP>2025-03-02 07:39:18<SeP>2025-03-02 09:27:09<SeP>2025-03-02 11:15:00<SeP>2025-03-02 13:02:51<SeP>2025-03-02 14:50:42<SeP>2025-03-02 16:38:33<SeP>2025-03-02 18:26:24<SeP>2025-03-02 20:14:15<SeP>2025-03-02 22:02:06<SeP>2025-03-02 23:49:57<SeP>2025-03-03 01:37:48<SeP>2025-03-03 03:25:39<SeP>2025-03-03 05:13:30<SeP>2025-03-03 07:01:21<SeP>2025-03-03 08:49:12<SeP>2025-03-03 10:37:03<SeP>2025-03-03 12:24:54<SeP>2025-03-03 14:12:45<SeP>2025-03-03 16:00:36<SeP>2025-03-03 17:48:27<SeP>2025-03-03 19:36:18<SeP>2025-03-03 21:24:09<SeP>2025-03-03 23:12:00<SeP>2025-03-04 00:59:51<SeP>2025-03-04 02:47:42<SeP>2025-03-04 04:35:33<SeP>2025-03-04 06:23:24<SeP>2025-03-04 08:11:15<SeP>2025-03-04 09:59:06<SeP>2025-03-04 11:46:57<SeP>2025-03-04 13:34:48<SeP>2025-03-04 15:22:39<SeP>2025-03-04 17:10:30<SeP>2025-03-04 18:58:21<SeP>2025-03-04 20:46:12<SeP>2025-03-04 22:34:03<SeP>2025-03-05 00:21:54<SeP>2025-03-05 02:09:45<SeP>2025-03-05 03:57:36<SeP>2025-03-05 05:45:27<SeP>2025-03-05 07:33:18<SeP>2025-03-05 09:21:09<SeP>2025-03-05 11:09:00<SeP>2025-03-05 12:56:51<SeP>2025-03-05 14:44:42<SeP>2025-03-05 16:32:33<SeP>2025-03-05 18:20:24<SeP>2025-03-05 20:08:15<SeP>2025-03-05 21:56:06<SeP>2025-03-05 23:43:57<SeP>2025-03-06 01:31:48<SeP>2025-03-06 03:19:39<SeP>2025-03-06 05:07:30<SeP>2025-03-06 06:55:21<SeP>2025-03-06 08:43:12<SeP>2025-03-06 10:31:03<SeP>2025-03-06 12:18:54<SeP>2025-03-06 14:06:45<SeP>2025-03-06 15:54:36<SeP>2025-03-06 17:42:27<SeP>2025-03-06 19:30:18<SeP>2025-03-06 21:18:09<SeP>2025-03-06 23:06:00<SeP>2025-03-07 00:53:51<SeP>2025-03-07 02:41:42<SeP>2025-03-07 04:29:33<SeP>2025-03-07 06:17:24<SeP>2025-03-07 08:05:15<SeP>2025-03-07 09:53:06<SeP>2025-03-07 11:40:57<SeP>2025-03-07 13:28:48<SeP>2025-03-07 15:16:39<SeP>2025-03-07 17:04:30<SeP>2025-03-07 18:52:21<SeP>2025-03-07 20:40:12<SeP>2025-03-07 22:28:03<SeP>2025-03-08 00:15:54<SeP>2025-03-08 02:03:45<SeP>2025-03-08 03:51:36<SeP>2025-03-08 05:39:27<SeP>2025-03-08 07:27:18<SeP>2025-03-08 09:15:09<SeP>2025-03-08 11:03:00<SeP>2025-03-08 12:50:51<SeP>2025-03-08 14:38:42<SeP>2025-03-08 16:26:33<SeP>2025-03-08 18:14:24<SeP>2025-03-08 20:02:15<SeP>2025-03-08 21:50:06<SeP>2025-03-08 23:37:57<SeP>2025-03-09 01:25:48<SeP>2025-03-09 04:13:39<SeP>2025-03-09 06:01:30<SeP>2025-03-09 07:49:21<SeP>2025-03-09 09:37:12<SeP>2025-03-09 11:25:03<SeP>2025-03-09 13:12:54<SeP>2025-03-09 15:00:45<SeP>2025-03-09 16:48:36<SeP>2025-03-09 18:36:27<SeP>2025-03-09 20:24:18<SeP>2025-03-09 22:12:09";
  const itemLabel       = "Attacks";
  const itemData        = "133<SeP>83<SeP>282<SeP>77<SeP>23<SeP>269<SeP>137<SeP>171<SeP>27<SeP>38<SeP>122<SeP>120<SeP>333<SeP>130<SeP>153<SeP>183<SeP>122<SeP>165<SeP>193<SeP>343<SeP>261<SeP>409<SeP>269<SeP>477<SeP>333<SeP>350<SeP>179<SeP>198<SeP>307<SeP>223<SeP>148<SeP>142<SeP>63<SeP>30<SeP>81<SeP>186<SeP>214<SeP>169<SeP>45<SeP>63<SeP>235<SeP>184<SeP>324<SeP>84<SeP>217<SeP>161<SeP>160<SeP>48<SeP>486<SeP>126<SeP>263<SeP>113<SeP>100<SeP>368<SeP>279<SeP>430<SeP>2581<SeP>3274<SeP>1113<SeP>375<SeP>211<SeP>307<SeP>617<SeP>181<SeP>409<SeP>133<SeP>11<SeP>66<SeP>78<SeP>592<SeP>39<SeP>312<SeP>129<SeP>251<SeP>172<SeP>779<SeP>432<SeP>377<SeP>243<SeP>260<SeP>150<SeP>201<SeP>235<SeP>459<SeP>241<SeP>390<SeP>152<SeP>312<SeP>259<SeP>257<SeP>271<SeP>241<SeP>158<SeP>117<SeP>160<SeP>159<SeP>227<SeP>685<SeP>46<SeP>210<SeP>149<SeP>259<SeP>53<SeP>83<SeP>243<SeP>281<SeP>121<SeP>141<SeP>75<SeP>23<SeP>307<SeP>268<SeP>194<SeP>130<SeP>271<SeP>275<SeP>135<SeP>432<SeP>421<SeP>177<SeP>294<SeP>259<SeP>296<SeP>155<SeP>348<SeP>392<SeP>141<SeP>383<SeP>116<SeP>34<SeP>319<SeP>347<SeP>45<SeP>201<SeP>450<SeP>185<SeP>79<SeP>438<SeP>62<SeP>186<SeP>250<SeP>252<SeP>234<SeP>183<SeP>285<SeP>95<SeP>109<SeP>184<SeP>123<SeP>528<SeP>149<SeP>39<SeP>105<SeP>103<SeP>8<SeP>100<SeP>163<SeP>325<SeP>183<SeP>249<SeP>77<SeP>282<SeP>139<SeP>117<SeP>96<SeP>108<SeP>9<SeP>112<SeP>247<SeP>156<SeP>301<SeP>836<SeP>421<SeP>310<SeP>704<SeP>287<SeP>610<SeP>173<SeP>445<SeP>538<SeP>222<SeP>529<SeP>304<SeP>650<SeP>855<SeP>923<SeP>630<SeP>322<SeP>308<SeP>226<SeP>293<SeP>426<SeP>793<SeP>635<SeP>353<SeP>487<SeP>272<SeP>551<SeP>702<SeP>589<SeP>467<SeP>366<SeP>555<SeP>757<SeP>223<SeP>310<SeP>499<SeP>747<SeP>571<SeP>526<SeP>453<SeP>78<SeP>78<SeP>347<SeP>63<SeP>203<SeP>404<SeP>232<SeP>63<SeP>337<SeP>125<SeP>53<SeP>100<SeP>273<SeP>225<SeP>225<SeP>261<SeP>223<SeP>415<SeP>55<SeP>107<SeP>258<SeP>136<SeP>438<SeP>336<SeP>111<SeP>185<SeP>142<SeP>52<SeP>121<SeP>190<SeP>54<SeP>65<SeP>323<SeP>79<SeP>120<SeP>173<SeP>84<SeP>57<SeP>69<SeP>64<SeP>200<SeP>341<SeP>323<SeP>35<SeP>222<SeP>179<SeP>498<SeP>95<SeP>149<SeP>152<SeP>192<SeP>252<SeP>25<SeP>42<SeP>144<SeP>114<SeP>213<SeP>131<SeP>148<SeP>336<SeP>26<SeP>342<SeP>193<SeP>354<SeP>61<SeP>63<SeP>48<SeP>47<SeP>78<SeP>106<SeP>32<SeP>13<SeP>85<SeP>99<SeP>30<SeP>82<SeP>67<SeP>197<SeP>108<SeP>77<SeP>45<SeP>263<SeP>63<SeP>523<SeP>42<SeP>115<SeP>17<SeP>312<SeP>28<SeP>20<SeP>197<SeP>82<SeP>86<SeP>40<SeP>184<SeP>50<SeP>117<SeP>275<SeP>107<SeP>33<SeP>91<SeP>49<SeP>37<SeP>381<SeP>152<SeP>48<SeP>88<SeP>57<SeP>206<SeP>108<SeP>35<SeP>456<SeP>28<SeP>30<SeP>14<SeP>253<SeP>88<SeP>35<SeP>83<SeP>65<SeP>62<SeP>83<SeP>280<SeP>138<SeP>142<SeP>69<SeP>69<SeP>73<SeP>43<SeP>32<SeP>37<SeP>305<SeP>55<SeP>132<SeP>140<SeP>137<SeP>91<SeP>19<SeP>123<SeP>144<SeP>161<SeP>93<SeP>114<SeP>88<SeP>40<SeP>118<SeP>72<SeP>129<SeP>151<SeP>51<SeP>174<SeP>45<SeP>407<SeP>380<SeP>69<SeP>131<SeP>163<SeP>35<SeP>40<SeP>130<SeP>49<SeP>90<SeP>108<SeP>108<SeP>195<SeP>25<SeP>12<SeP>65<SeP>207<SeP>48<SeP>78<SeP>10<SeP>26<SeP>21<SeP>246<SeP>148<SeP>29<SeP>156<SeP>112<SeP>12<SeP>25<SeP>71<SeP>58<SeP>52<SeP>279<SeP>60<SeP>18<SeP>34<SeP>501";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendPreviewSpanish()
{
  const chartElement     = "traffic-trend-preview";

  trafficTrendBaseSpanish(chartElement);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";

  trafficTrendBaseSpanish(chartElement);
}

function trafficTrendBaseSpanish(chartElement)
{
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2025-02-08 00:00:00<SeP>2025-02-08 01:47:51<SeP>2025-02-08 03:35:42<SeP>2025-02-08 05:23:33<SeP>2025-02-08 07:11:24<SeP>2025-02-08 08:59:15<SeP>2025-02-08 10:47:06<SeP>2025-02-08 12:34:57<SeP>2025-02-08 14:22:48<SeP>2025-02-08 16:10:39<SeP>2025-02-08 17:58:30<SeP>2025-02-08 19:46:21<SeP>2025-02-08 21:34:12<SeP>2025-02-08 23:22:03<SeP>2025-02-09 01:09:54<SeP>2025-02-09 02:57:45<SeP>2025-02-09 04:45:36<SeP>2025-02-09 06:33:27<SeP>2025-02-09 08:21:18<SeP>2025-02-09 10:09:09<SeP>2025-02-09 11:57:00<SeP>2025-02-09 13:44:51<SeP>2025-02-09 15:32:42<SeP>2025-02-09 17:20:33<SeP>2025-02-09 19:08:24<SeP>2025-02-09 20:56:15<SeP>2025-02-09 22:44:06<SeP>2025-02-10 00:31:57<SeP>2025-02-10 02:19:48<SeP>2025-02-10 04:07:39<SeP>2025-02-10 05:55:30<SeP>2025-02-10 07:43:21<SeP>2025-02-10 09:31:12<SeP>2025-02-10 11:19:03<SeP>2025-02-10 13:06:54<SeP>2025-02-10 14:54:45<SeP>2025-02-10 16:42:36<SeP>2025-02-10 18:30:27<SeP>2025-02-10 20:18:18<SeP>2025-02-10 22:06:09<SeP>2025-02-10 23:54:00<SeP>2025-02-11 01:41:51<SeP>2025-02-11 03:29:42<SeP>2025-02-11 05:17:33<SeP>2025-02-11 07:05:24<SeP>2025-02-11 08:53:15<SeP>2025-02-11 10:41:06<SeP>2025-02-11 12:28:57<SeP>2025-02-11 14:16:48<SeP>2025-02-11 16:04:39<SeP>2025-02-11 17:52:30<SeP>2025-02-11 19:40:21<SeP>2025-02-11 21:28:12<SeP>2025-02-11 23:16:03<SeP>2025-02-12 01:03:54<SeP>2025-02-12 02:51:45<SeP>2025-02-12 04:39:36<SeP>2025-02-12 06:27:27<SeP>2025-02-12 08:15:18<SeP>2025-02-12 10:03:09<SeP>2025-02-12 11:51:00<SeP>2025-02-12 13:38:51<SeP>2025-02-12 15:26:42<SeP>2025-02-12 17:14:33<SeP>2025-02-12 19:02:24<SeP>2025-02-12 20:50:15<SeP>2025-02-12 22:38:06<SeP>2025-02-13 00:25:57<SeP>2025-02-13 02:13:48<SeP>2025-02-13 04:01:39<SeP>2025-02-13 05:49:30<SeP>2025-02-13 07:37:21<SeP>2025-02-13 09:25:12<SeP>2025-02-13 11:13:03<SeP>2025-02-13 13:00:54<SeP>2025-02-13 14:48:45<SeP>2025-02-13 16:36:36<SeP>2025-02-13 18:24:27<SeP>2025-02-13 20:12:18<SeP>2025-02-13 22:00:09<SeP>2025-02-13 23:48:00<SeP>2025-02-14 01:35:51<SeP>2025-02-14 03:23:42<SeP>2025-02-14 05:11:33<SeP>2025-02-14 06:59:24<SeP>2025-02-14 08:47:15<SeP>2025-02-14 10:35:06<SeP>2025-02-14 12:22:57<SeP>2025-02-14 14:10:48<SeP>2025-02-14 15:58:39<SeP>2025-02-14 17:46:30<SeP>2025-02-14 19:34:21<SeP>2025-02-14 21:22:12<SeP>2025-02-14 23:10:03<SeP>2025-02-15 00:57:54<SeP>2025-02-15 02:45:45<SeP>2025-02-15 04:33:36<SeP>2025-02-15 06:21:27<SeP>2025-02-15 08:09:18<SeP>2025-02-15 09:57:09<SeP>2025-02-15 11:45:00<SeP>2025-02-15 13:32:51<SeP>2025-02-15 15:20:42<SeP>2025-02-15 17:08:33<SeP>2025-02-15 18:56:24<SeP>2025-02-15 20:44:15<SeP>2025-02-15 22:32:06<SeP>2025-02-16 00:19:57<SeP>2025-02-16 02:07:48<SeP>2025-02-16 03:55:39<SeP>2025-02-16 05:43:30<SeP>2025-02-16 07:31:21<SeP>2025-02-16 09:19:12<SeP>2025-02-16 11:07:03<SeP>2025-02-16 12:54:54<SeP>2025-02-16 14:42:45<SeP>2025-02-16 16:30:36<SeP>2025-02-16 18:18:27<SeP>2025-02-16 20:06:18<SeP>2025-02-16 21:54:09<SeP>2025-02-16 23:42:00<SeP>2025-02-17 01:29:51<SeP>2025-02-17 03:17:42<SeP>2025-02-17 05:05:33<SeP>2025-02-17 06:53:24<SeP>2025-02-17 08:41:15<SeP>2025-02-17 10:29:06<SeP>2025-02-17 12:16:57<SeP>2025-02-17 14:04:48<SeP>2025-02-17 15:52:39<SeP>2025-02-17 17:40:30<SeP>2025-02-17 19:28:21<SeP>2025-02-17 21:16:12<SeP>2025-02-17 23:04:03<SeP>2025-02-18 00:51:54<SeP>2025-02-18 02:39:45<SeP>2025-02-18 04:27:36<SeP>2025-02-18 06:15:27<SeP>2025-02-18 08:03:18<SeP>2025-02-18 09:51:09<SeP>2025-02-18 11:39:00<SeP>2025-02-18 13:26:51<SeP>2025-02-18 15:14:42<SeP>2025-02-18 17:02:33<SeP>2025-02-18 18:50:24<SeP>2025-02-18 20:38:15<SeP>2025-02-18 22:26:06<SeP>2025-02-19 00:13:57<SeP>2025-02-19 02:01:48<SeP>2025-02-19 03:49:39<SeP>2025-02-19 05:37:30<SeP>2025-02-19 07:25:21<SeP>2025-02-19 09:13:12<SeP>2025-02-19 11:01:03<SeP>2025-02-19 12:48:54<SeP>2025-02-19 14:36:45<SeP>2025-02-19 16:24:36<SeP>2025-02-19 18:12:27<SeP>2025-02-19 20:00:18<SeP>2025-02-19 21:48:09<SeP>2025-02-19 23:36:00<SeP>2025-02-20 01:23:51<SeP>2025-02-20 03:11:42<SeP>2025-02-20 04:59:33<SeP>2025-02-20 06:47:24<SeP>2025-02-20 08:35:15<SeP>2025-02-20 10:23:06<SeP>2025-02-20 12:10:57<SeP>2025-02-20 13:58:48<SeP>2025-02-20 15:46:39<SeP>2025-02-20 17:34:30<SeP>2025-02-20 19:22:21<SeP>2025-02-20 21:10:12<SeP>2025-02-20 22:58:03<SeP>2025-02-21 00:45:54<SeP>2025-02-21 02:33:45<SeP>2025-02-21 04:21:36<SeP>2025-02-21 06:09:27<SeP>2025-02-21 07:57:18<SeP>2025-02-21 09:45:09<SeP>2025-02-21 11:33:00<SeP>2025-02-21 13:20:51<SeP>2025-02-21 15:08:42<SeP>2025-02-21 16:56:33<SeP>2025-02-21 18:44:24<SeP>2025-02-21 20:32:15<SeP>2025-02-21 22:20:06<SeP>2025-02-22 00:07:57<SeP>2025-02-22 01:55:48<SeP>2025-02-22 03:43:39<SeP>2025-02-22 05:31:30<SeP>2025-02-22 07:19:21<SeP>2025-02-22 09:07:12<SeP>2025-02-22 10:55:03<SeP>2025-02-22 12:42:54<SeP>2025-02-22 14:30:45<SeP>2025-02-22 16:18:36<SeP>2025-02-22 18:06:27<SeP>2025-02-22 19:54:18<SeP>2025-02-22 21:42:09<SeP>2025-02-22 23:30:00<SeP>2025-02-23 01:17:51<SeP>2025-02-23 03:05:42<SeP>2025-02-23 04:53:33<SeP>2025-02-23 06:41:24<SeP>2025-02-23 08:29:15<SeP>2025-02-23 10:17:06<SeP>2025-02-23 12:04:57<SeP>2025-02-23 13:52:48<SeP>2025-02-23 15:40:39<SeP>2025-02-23 17:28:30<SeP>2025-02-23 19:16:21<SeP>2025-02-23 21:04:12<SeP>2025-02-23 22:52:03<SeP>2025-02-24 00:39:54<SeP>2025-02-24 02:27:45<SeP>2025-02-24 04:15:36<SeP>2025-02-24 06:03:27<SeP>2025-02-24 07:51:18<SeP>2025-02-24 09:39:09<SeP>2025-02-24 11:27:00<SeP>2025-02-24 13:14:51<SeP>2025-02-24 15:02:42<SeP>2025-02-24 16:50:33<SeP>2025-02-24 18:38:24<SeP>2025-02-24 20:26:15<SeP>2025-02-24 22:14:06<SeP>2025-02-25 00:01:57<SeP>2025-02-25 01:49:48<SeP>2025-02-25 03:37:39<SeP>2025-02-25 05:25:30<SeP>2025-02-25 07:13:21<SeP>2025-02-25 09:01:12<SeP>2025-02-25 10:49:03<SeP>2025-02-25 12:36:54<SeP>2025-02-25 14:24:45<SeP>2025-02-25 16:12:36<SeP>2025-02-25 18:00:27<SeP>2025-02-25 19:48:18<SeP>2025-02-25 21:36:09<SeP>2025-02-25 23:24:00<SeP>2025-02-26 01:11:51<SeP>2025-02-26 02:59:42<SeP>2025-02-26 04:47:33<SeP>2025-02-26 06:35:24<SeP>2025-02-26 08:23:15<SeP>2025-02-26 10:11:06<SeP>2025-02-26 11:58:57<SeP>2025-02-26 13:46:48<SeP>2025-02-26 15:34:39<SeP>2025-02-26 17:22:30<SeP>2025-02-26 19:10:21<SeP>2025-02-26 20:58:12<SeP>2025-02-26 22:46:03<SeP>2025-02-27 00:33:54<SeP>2025-02-27 02:21:45<SeP>2025-02-27 04:09:36<SeP>2025-02-27 05:57:27<SeP>2025-02-27 07:45:18<SeP>2025-02-27 09:33:09<SeP>2025-02-27 11:21:00<SeP>2025-02-27 13:08:51<SeP>2025-02-27 14:56:42<SeP>2025-02-27 16:44:33<SeP>2025-02-27 18:32:24<SeP>2025-02-27 20:20:15<SeP>2025-02-27 22:08:06<SeP>2025-02-27 23:55:57<SeP>2025-02-28 01:43:48<SeP>2025-02-28 03:31:39<SeP>2025-02-28 05:19:30<SeP>2025-02-28 07:07:21<SeP>2025-02-28 08:55:12<SeP>2025-02-28 10:43:03<SeP>2025-02-28 12:30:54<SeP>2025-02-28 14:18:45<SeP>2025-02-28 16:06:36<SeP>2025-02-28 17:54:27<SeP>2025-02-28 19:42:18<SeP>2025-02-28 21:30:09<SeP>2025-02-28 23:18:00<SeP>2025-03-01 01:05:51<SeP>2025-03-01 02:53:42<SeP>2025-03-01 04:41:33<SeP>2025-03-01 06:29:24<SeP>2025-03-01 08:17:15<SeP>2025-03-01 10:05:06<SeP>2025-03-01 11:52:57<SeP>2025-03-01 13:40:48<SeP>2025-03-01 15:28:39<SeP>2025-03-01 17:16:30<SeP>2025-03-01 19:04:21<SeP>2025-03-01 20:52:12<SeP>2025-03-01 22:40:03<SeP>2025-03-02 00:27:54<SeP>2025-03-02 02:15:45<SeP>2025-03-02 04:03:36<SeP>2025-03-02 05:51:27<SeP>2025-03-02 07:39:18<SeP>2025-03-02 09:27:09<SeP>2025-03-02 11:15:00<SeP>2025-03-02 13:02:51<SeP>2025-03-02 14:50:42<SeP>2025-03-02 16:38:33<SeP>2025-03-02 18:26:24<SeP>2025-03-02 20:14:15<SeP>2025-03-02 22:02:06<SeP>2025-03-02 23:49:57<SeP>2025-03-03 01:37:48<SeP>2025-03-03 03:25:39<SeP>2025-03-03 05:13:30<SeP>2025-03-03 07:01:21<SeP>2025-03-03 08:49:12<SeP>2025-03-03 10:37:03<SeP>2025-03-03 12:24:54<SeP>2025-03-03 14:12:45<SeP>2025-03-03 16:00:36<SeP>2025-03-03 17:48:27<SeP>2025-03-03 19:36:18<SeP>2025-03-03 21:24:09<SeP>2025-03-03 23:12:00<SeP>2025-03-04 00:59:51<SeP>2025-03-04 02:47:42<SeP>2025-03-04 04:35:33<SeP>2025-03-04 06:23:24<SeP>2025-03-04 08:11:15<SeP>2025-03-04 09:59:06<SeP>2025-03-04 11:46:57<SeP>2025-03-04 13:34:48<SeP>2025-03-04 15:22:39<SeP>2025-03-04 17:10:30<SeP>2025-03-04 18:58:21<SeP>2025-03-04 20:46:12<SeP>2025-03-04 22:34:03<SeP>2025-03-05 00:21:54<SeP>2025-03-05 02:09:45<SeP>2025-03-05 03:57:36<SeP>2025-03-05 05:45:27<SeP>2025-03-05 07:33:18<SeP>2025-03-05 09:21:09<SeP>2025-03-05 11:09:00<SeP>2025-03-05 12:56:51<SeP>2025-03-05 14:44:42<SeP>2025-03-05 16:32:33<SeP>2025-03-05 18:20:24<SeP>2025-03-05 20:08:15<SeP>2025-03-05 21:56:06<SeP>2025-03-05 23:43:57<SeP>2025-03-06 01:31:48<SeP>2025-03-06 03:19:39<SeP>2025-03-06 05:07:30<SeP>2025-03-06 06:55:21<SeP>2025-03-06 08:43:12<SeP>2025-03-06 10:31:03<SeP>2025-03-06 12:18:54<SeP>2025-03-06 14:06:45<SeP>2025-03-06 15:54:36<SeP>2025-03-06 17:42:27<SeP>2025-03-06 19:30:18<SeP>2025-03-06 21:18:09<SeP>2025-03-06 23:06:00<SeP>2025-03-07 00:53:51<SeP>2025-03-07 02:41:42<SeP>2025-03-07 04:29:33<SeP>2025-03-07 06:17:24<SeP>2025-03-07 08:05:15<SeP>2025-03-07 09:53:06<SeP>2025-03-07 11:40:57<SeP>2025-03-07 13:28:48<SeP>2025-03-07 15:16:39<SeP>2025-03-07 17:04:30<SeP>2025-03-07 18:52:21<SeP>2025-03-07 20:40:12<SeP>2025-03-07 22:28:03<SeP>2025-03-08 00:15:54<SeP>2025-03-08 02:03:45<SeP>2025-03-08 03:51:36<SeP>2025-03-08 05:39:27<SeP>2025-03-08 07:27:18<SeP>2025-03-08 09:15:09<SeP>2025-03-08 11:03:00<SeP>2025-03-08 12:50:51<SeP>2025-03-08 14:38:42<SeP>2025-03-08 16:26:33<SeP>2025-03-08 18:14:24<SeP>2025-03-08 20:02:15<SeP>2025-03-08 21:50:06<SeP>2025-03-08 23:37:57<SeP>2025-03-09 01:25:48<SeP>2025-03-09 04:13:39<SeP>2025-03-09 06:01:30<SeP>2025-03-09 07:49:21<SeP>2025-03-09 09:37:12<SeP>2025-03-09 11:25:03<SeP>2025-03-09 13:12:54<SeP>2025-03-09 15:00:45<SeP>2025-03-09 16:48:36<SeP>2025-03-09 18:36:27<SeP>2025-03-09 20:24:18<SeP>2025-03-09 22:12:09";
  const item1Label       = "Escaneos";
  const item1Data        = "88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>93<SeP>84<SeP>28<SeP>58<SeP>65<SeP>45<SeP>83<SeP>45<SeP>150<SeP>214<SeP>115<SeP>84<SeP>147<SeP>73<SeP>96<SeP>94<SeP>136<SeP>148<SeP>94<SeP>109<SeP>46<SeP>75<SeP>111<SeP>82<SeP>67<SeP>101<SeP>77<SeP>83<SeP>74<SeP>89<SeP>67<SeP>76<SeP>147<SeP>60<SeP>48<SeP>88<SeP>83<SeP>112<SeP>193<SeP>84<SeP>130<SeP>88<SeP>115<SeP>96<SeP>141<SeP>110<SeP>29<SeP>117<SeP>65<SeP>71<SeP>117<SeP>55<SeP>84<SeP>52<SeP>77<SeP>66<SeP>60<SeP>108<SeP>192<SeP>38<SeP>101<SeP>107<SeP>105<SeP>113<SeP>42<SeP>83<SeP>71<SeP>174<SeP>69<SeP>106<SeP>53<SeP>83<SeP>98<SeP>75<SeP>74<SeP>85<SeP>76<SeP>151<SeP>98<SeP>194<SeP>67<SeP>62<SeP>56<SeP>91<SeP>36<SeP>99<SeP>86<SeP>101<SeP>73<SeP>74<SeP>101<SeP>166<SeP>166<SeP>81<SeP>86<SeP>53<SeP>42<SeP>89<SeP>76<SeP>116<SeP>72<SeP>53<SeP>75<SeP>60<SeP>112<SeP>90<SeP>56<SeP>84<SeP>75<SeP>84<SeP>43<SeP>71<SeP>149<SeP>126<SeP>75<SeP>62<SeP>63<SeP>67<SeP>83<SeP>90<SeP>86<SeP>79<SeP>37<SeP>20<SeP>57<SeP>85<SeP>133<SeP>77<SeP>145<SeP>42<SeP>120<SeP>71<SeP>149<SeP>74<SeP>67<SeP>93<SeP>80<SeP>28<SeP>72<SeP>79<SeP>49<SeP>49<SeP>97<SeP>92<SeP>159<SeP>110<SeP>86<SeP>65<SeP>49<SeP>71<SeP>70<SeP>39<SeP>87<SeP>90<SeP>101<SeP>83<SeP>68<SeP>100<SeP>62<SeP>84<SeP>141<SeP>73<SeP>43<SeP>57<SeP>44<SeP>76<SeP>85<SeP>96<SeP>69<SeP>102<SeP>133<SeP>59<SeP>104<SeP>69<SeP>49<SeP>71<SeP>85<SeP>71<SeP>70<SeP>140<SeP>63<SeP>90<SeP>90<SeP>107<SeP>101<SeP>61<SeP>44<SeP>26<SeP>76<SeP>93<SeP>54<SeP>54<SeP>89<SeP>86<SeP>48<SeP>95<SeP>115<SeP>117<SeP>59<SeP>40<SeP>25<SeP>59<SeP>167<SeP>88<SeP>138<SeP>57<SeP>68<SeP>121<SeP>48<SeP>62<SeP>111<SeP>68<SeP>190<SeP>74<SeP>42<SeP>135<SeP>71<SeP>74<SeP>67<SeP>91<SeP>106<SeP>110<SeP>82<SeP>105<SeP>55<SeP>71<SeP>90<SeP>72<SeP>83<SeP>59<SeP>129<SeP>110<SeP>87<SeP>89<SeP>86<SeP>125<SeP>59<SeP>122<SeP>107<SeP>48<SeP>62<SeP>129<SeP>144<SeP>50<SeP>197<SeP>81<SeP>136<SeP>48<SeP>71<SeP>83<SeP>73<SeP>85<SeP>86<SeP>37<SeP>73<SeP>71<SeP>60<SeP>55<SeP>40<SeP>112<SeP>92<SeP>118<SeP>68<SeP>81<SeP>76<SeP>46<SeP>50<SeP>93<SeP>47<SeP>51<SeP>55<SeP>72<SeP>87<SeP>86<SeP>88<SeP>67<SeP>49<SeP>44<SeP>58<SeP>212<SeP>84<SeP>40<SeP>79<SeP>70<SeP>113<SeP>58<SeP>41<SeP>45<SeP>170<SeP>104<SeP>44<SeP>49<SeP>53<SeP>90<SeP>51<SeP>34<SeP>64<SeP>138<SeP>83<SeP>66<SeP>60<SeP>116<SeP>53<SeP>64<SeP>26<SeP>38<SeP>47<SeP>30<SeP>63<SeP>85<SeP>75<SeP>60<SeP>75<SeP>75<SeP>253<SeP>51<SeP>29<SeP>70<SeP>69<SeP>118<SeP>141<SeP>52<SeP>55<SeP>67<SeP>171<SeP>67<SeP>95<SeP>64<SeP>107<SeP>21<SeP>112<SeP>24<SeP>47<SeP>55<SeP>55<SeP>53<SeP>100<SeP>94<SeP>128<SeP>98<SeP>45<SeP>75<SeP>46<SeP>54<SeP>113<SeP>88<SeP>81<SeP>72<SeP>70<SeP>172<SeP>39<SeP>76<SeP>46<SeP>68<SeP>365<SeP>153<SeP>25<SeP>47<SeP>17<SeP>51<SeP>41<SeP>70<SeP>75<SeP>76<SeP>185<SeP>76<SeP>75<SeP>347<SeP>66<SeP>99<SeP>257<SeP>141<SeP>197<SeP>51<SeP>54<SeP>67<SeP>44<SeP>69<SeP>45<SeP>55<SeP>52<SeP>20<SeP>66<SeP>58<SeP>95<SeP>62<SeP>69<SeP>42<SeP>60<SeP>55<SeP>29<SeP>31<SeP>32<SeP>117";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "133<SeP>83<SeP>282<SeP>77<SeP>23<SeP>269<SeP>137<SeP>171<SeP>27<SeP>38<SeP>122<SeP>120<SeP>333<SeP>130<SeP>153<SeP>183<SeP>122<SeP>165<SeP>193<SeP>343<SeP>261<SeP>409<SeP>269<SeP>477<SeP>333<SeP>350<SeP>179<SeP>198<SeP>307<SeP>223<SeP>148<SeP>142<SeP>63<SeP>30<SeP>81<SeP>186<SeP>214<SeP>169<SeP>45<SeP>63<SeP>235<SeP>184<SeP>324<SeP>84<SeP>217<SeP>161<SeP>160<SeP>48<SeP>486<SeP>126<SeP>263<SeP>113<SeP>100<SeP>368<SeP>279<SeP>430<SeP>2581<SeP>3274<SeP>1113<SeP>375<SeP>211<SeP>307<SeP>617<SeP>181<SeP>409<SeP>133<SeP>11<SeP>66<SeP>78<SeP>592<SeP>39<SeP>312<SeP>129<SeP>251<SeP>172<SeP>779<SeP>432<SeP>377<SeP>243<SeP>260<SeP>150<SeP>201<SeP>235<SeP>459<SeP>241<SeP>390<SeP>152<SeP>312<SeP>259<SeP>257<SeP>271<SeP>241<SeP>158<SeP>117<SeP>160<SeP>159<SeP>227<SeP>685<SeP>46<SeP>210<SeP>149<SeP>259<SeP>53<SeP>83<SeP>243<SeP>281<SeP>121<SeP>141<SeP>75<SeP>23<SeP>307<SeP>268<SeP>194<SeP>130<SeP>271<SeP>275<SeP>135<SeP>432<SeP>421<SeP>177<SeP>294<SeP>259<SeP>296<SeP>155<SeP>348<SeP>392<SeP>141<SeP>383<SeP>116<SeP>34<SeP>319<SeP>347<SeP>45<SeP>201<SeP>450<SeP>185<SeP>79<SeP>438<SeP>62<SeP>186<SeP>250<SeP>252<SeP>234<SeP>183<SeP>285<SeP>95<SeP>109<SeP>184<SeP>123<SeP>528<SeP>149<SeP>39<SeP>105<SeP>103<SeP>8<SeP>100<SeP>163<SeP>325<SeP>183<SeP>249<SeP>77<SeP>282<SeP>139<SeP>117<SeP>96<SeP>108<SeP>9<SeP>112<SeP>247<SeP>156<SeP>301<SeP>836<SeP>421<SeP>310<SeP>704<SeP>287<SeP>610<SeP>173<SeP>445<SeP>538<SeP>222<SeP>529<SeP>304<SeP>650<SeP>855<SeP>923<SeP>630<SeP>322<SeP>308<SeP>226<SeP>293<SeP>426<SeP>793<SeP>635<SeP>353<SeP>487<SeP>272<SeP>551<SeP>702<SeP>589<SeP>467<SeP>366<SeP>555<SeP>757<SeP>223<SeP>310<SeP>499<SeP>747<SeP>571<SeP>526<SeP>453<SeP>78<SeP>78<SeP>347<SeP>63<SeP>203<SeP>404<SeP>232<SeP>63<SeP>337<SeP>125<SeP>53<SeP>100<SeP>273<SeP>225<SeP>225<SeP>261<SeP>223<SeP>415<SeP>55<SeP>107<SeP>258<SeP>136<SeP>438<SeP>336<SeP>111<SeP>185<SeP>142<SeP>52<SeP>121<SeP>190<SeP>54<SeP>65<SeP>323<SeP>79<SeP>120<SeP>173<SeP>84<SeP>57<SeP>69<SeP>64<SeP>200<SeP>341<SeP>323<SeP>35<SeP>222<SeP>179<SeP>498<SeP>95<SeP>149<SeP>152<SeP>192<SeP>252<SeP>25<SeP>42<SeP>144<SeP>114<SeP>213<SeP>131<SeP>148<SeP>336<SeP>26<SeP>342<SeP>193<SeP>354<SeP>61<SeP>63<SeP>48<SeP>47<SeP>78<SeP>106<SeP>32<SeP>13<SeP>85<SeP>99<SeP>30<SeP>82<SeP>67<SeP>197<SeP>108<SeP>77<SeP>45<SeP>263<SeP>63<SeP>523<SeP>42<SeP>115<SeP>17<SeP>312<SeP>28<SeP>20<SeP>197<SeP>82<SeP>86<SeP>40<SeP>184<SeP>50<SeP>117<SeP>275<SeP>107<SeP>33<SeP>91<SeP>49<SeP>37<SeP>381<SeP>152<SeP>48<SeP>88<SeP>57<SeP>206<SeP>108<SeP>35<SeP>456<SeP>28<SeP>30<SeP>14<SeP>253<SeP>88<SeP>35<SeP>83<SeP>65<SeP>62<SeP>83<SeP>280<SeP>138<SeP>142<SeP>69<SeP>69<SeP>73<SeP>43<SeP>32<SeP>37<SeP>305<SeP>55<SeP>132<SeP>140<SeP>137<SeP>91<SeP>19<SeP>123<SeP>144<SeP>161<SeP>93<SeP>114<SeP>88<SeP>40<SeP>118<SeP>72<SeP>129<SeP>151<SeP>51<SeP>174<SeP>45<SeP>407<SeP>380<SeP>69<SeP>131<SeP>163<SeP>35<SeP>40<SeP>130<SeP>49<SeP>90<SeP>108<SeP>108<SeP>195<SeP>25<SeP>12<SeP>65<SeP>207<SeP>48<SeP>78<SeP>10<SeP>26<SeP>21<SeP>246<SeP>148<SeP>29<SeP>156<SeP>112<SeP>12<SeP>25<SeP>71<SeP>58<SeP>52<SeP>279<SeP>60<SeP>18<SeP>34<SeP>501";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-08 00:00:00<SeP>2025-02-08 01:47:51<SeP>2025-02-08 03:35:42<SeP>2025-02-08 05:23:33<SeP>2025-02-08 07:11:24<SeP>2025-02-08 08:59:15<SeP>2025-02-08 10:47:06<SeP>2025-02-08 12:34:57<SeP>2025-02-08 14:22:48<SeP>2025-02-08 16:10:39<SeP>2025-02-08 17:58:30<SeP>2025-02-08 19:46:21<SeP>2025-02-08 21:34:12<SeP>2025-02-08 23:22:03<SeP>2025-02-09 01:09:54<SeP>2025-02-09 02:57:45<SeP>2025-02-09 04:45:36<SeP>2025-02-09 06:33:27<SeP>2025-02-09 08:21:18<SeP>2025-02-09 10:09:09<SeP>2025-02-09 11:57:00<SeP>2025-02-09 13:44:51<SeP>2025-02-09 15:32:42<SeP>2025-02-09 17:20:33<SeP>2025-02-09 19:08:24<SeP>2025-02-09 20:56:15<SeP>2025-02-09 22:44:06<SeP>2025-02-10 00:31:57<SeP>2025-02-10 02:19:48<SeP>2025-02-10 04:07:39<SeP>2025-02-10 05:55:30<SeP>2025-02-10 07:43:21<SeP>2025-02-10 09:31:12<SeP>2025-02-10 11:19:03<SeP>2025-02-10 13:06:54<SeP>2025-02-10 14:54:45<SeP>2025-02-10 16:42:36<SeP>2025-02-10 18:30:27<SeP>2025-02-10 20:18:18<SeP>2025-02-10 22:06:09<SeP>2025-02-10 23:54:00<SeP>2025-02-11 01:41:51<SeP>2025-02-11 03:29:42<SeP>2025-02-11 05:17:33<SeP>2025-02-11 07:05:24<SeP>2025-02-11 08:53:15<SeP>2025-02-11 10:41:06<SeP>2025-02-11 12:28:57<SeP>2025-02-11 14:16:48<SeP>2025-02-11 16:04:39<SeP>2025-02-11 17:52:30<SeP>2025-02-11 19:40:21<SeP>2025-02-11 21:28:12<SeP>2025-02-11 23:16:03<SeP>2025-02-12 01:03:54<SeP>2025-02-12 02:51:45<SeP>2025-02-12 04:39:36<SeP>2025-02-12 06:27:27<SeP>2025-02-12 08:15:18<SeP>2025-02-12 10:03:09<SeP>2025-02-12 11:51:00<SeP>2025-02-12 13:38:51<SeP>2025-02-12 15:26:42<SeP>2025-02-12 17:14:33<SeP>2025-02-12 19:02:24<SeP>2025-02-12 20:50:15<SeP>2025-02-12 22:38:06<SeP>2025-02-13 00:25:57<SeP>2025-02-13 02:13:48<SeP>2025-02-13 04:01:39<SeP>2025-02-13 05:49:30<SeP>2025-02-13 07:37:21<SeP>2025-02-13 09:25:12<SeP>2025-02-13 11:13:03<SeP>2025-02-13 13:00:54<SeP>2025-02-13 14:48:45<SeP>2025-02-13 16:36:36<SeP>2025-02-13 18:24:27<SeP>2025-02-13 20:12:18<SeP>2025-02-13 22:00:09<SeP>2025-02-13 23:48:00<SeP>2025-02-14 01:35:51<SeP>2025-02-14 03:23:42<SeP>2025-02-14 05:11:33<SeP>2025-02-14 06:59:24<SeP>2025-02-14 08:47:15<SeP>2025-02-14 10:35:06<SeP>2025-02-14 12:22:57<SeP>2025-02-14 14:10:48<SeP>2025-02-14 15:58:39<SeP>2025-02-14 17:46:30<SeP>2025-02-14 19:34:21<SeP>2025-02-14 21:22:12<SeP>2025-02-14 23:10:03<SeP>2025-02-15 00:57:54<SeP>2025-02-15 02:45:45<SeP>2025-02-15 04:33:36<SeP>2025-02-15 06:21:27<SeP>2025-02-15 08:09:18<SeP>2025-02-15 09:57:09<SeP>2025-02-15 11:45:00<SeP>2025-02-15 13:32:51<SeP>2025-02-15 15:20:42<SeP>2025-02-15 17:08:33<SeP>2025-02-15 18:56:24<SeP>2025-02-15 20:44:15<SeP>2025-02-15 22:32:06<SeP>2025-02-16 00:19:57<SeP>2025-02-16 02:07:48<SeP>2025-02-16 03:55:39<SeP>2025-02-16 05:43:30<SeP>2025-02-16 07:31:21<SeP>2025-02-16 09:19:12<SeP>2025-02-16 11:07:03<SeP>2025-02-16 12:54:54<SeP>2025-02-16 14:42:45<SeP>2025-02-16 16:30:36<SeP>2025-02-16 18:18:27<SeP>2025-02-16 20:06:18<SeP>2025-02-16 21:54:09<SeP>2025-02-16 23:42:00<SeP>2025-02-17 01:29:51<SeP>2025-02-17 03:17:42<SeP>2025-02-17 05:05:33<SeP>2025-02-17 06:53:24<SeP>2025-02-17 08:41:15<SeP>2025-02-17 10:29:06<SeP>2025-02-17 12:16:57<SeP>2025-02-17 14:04:48<SeP>2025-02-17 15:52:39<SeP>2025-02-17 17:40:30<SeP>2025-02-17 19:28:21<SeP>2025-02-17 21:16:12<SeP>2025-02-17 23:04:03<SeP>2025-02-18 00:51:54<SeP>2025-02-18 02:39:45<SeP>2025-02-18 04:27:36<SeP>2025-02-18 06:15:27<SeP>2025-02-18 08:03:18<SeP>2025-02-18 09:51:09<SeP>2025-02-18 11:39:00<SeP>2025-02-18 13:26:51<SeP>2025-02-18 15:14:42<SeP>2025-02-18 17:02:33<SeP>2025-02-18 18:50:24<SeP>2025-02-18 20:38:15<SeP>2025-02-18 22:26:06<SeP>2025-02-19 00:13:57<SeP>2025-02-19 02:01:48<SeP>2025-02-19 03:49:39<SeP>2025-02-19 05:37:30<SeP>2025-02-19 07:25:21<SeP>2025-02-19 09:13:12<SeP>2025-02-19 11:01:03<SeP>2025-02-19 12:48:54<SeP>2025-02-19 14:36:45<SeP>2025-02-19 16:24:36<SeP>2025-02-19 18:12:27<SeP>2025-02-19 20:00:18<SeP>2025-02-19 21:48:09<SeP>2025-02-19 23:36:00<SeP>2025-02-20 01:23:51<SeP>2025-02-20 03:11:42<SeP>2025-02-20 04:59:33<SeP>2025-02-20 06:47:24<SeP>2025-02-20 08:35:15<SeP>2025-02-20 10:23:06<SeP>2025-02-20 12:10:57<SeP>2025-02-20 13:58:48<SeP>2025-02-20 15:46:39<SeP>2025-02-20 17:34:30<SeP>2025-02-20 19:22:21<SeP>2025-02-20 21:10:12<SeP>2025-02-20 22:58:03<SeP>2025-02-21 00:45:54<SeP>2025-02-21 02:33:45<SeP>2025-02-21 04:21:36<SeP>2025-02-21 06:09:27<SeP>2025-02-21 07:57:18<SeP>2025-02-21 09:45:09<SeP>2025-02-21 11:33:00<SeP>2025-02-21 13:20:51<SeP>2025-02-21 15:08:42<SeP>2025-02-21 16:56:33<SeP>2025-02-21 18:44:24<SeP>2025-02-21 20:32:15<SeP>2025-02-21 22:20:06<SeP>2025-02-22 00:07:57<SeP>2025-02-22 01:55:48<SeP>2025-02-22 03:43:39<SeP>2025-02-22 05:31:30<SeP>2025-02-22 07:19:21<SeP>2025-02-22 09:07:12<SeP>2025-02-22 10:55:03<SeP>2025-02-22 12:42:54<SeP>2025-02-22 14:30:45<SeP>2025-02-22 16:18:36<SeP>2025-02-22 18:06:27<SeP>2025-02-22 19:54:18<SeP>2025-02-22 21:42:09<SeP>2025-02-22 23:30:00<SeP>2025-02-23 01:17:51<SeP>2025-02-23 03:05:42<SeP>2025-02-23 04:53:33<SeP>2025-02-23 06:41:24<SeP>2025-02-23 08:29:15<SeP>2025-02-23 10:17:06<SeP>2025-02-23 12:04:57<SeP>2025-02-23 13:52:48<SeP>2025-02-23 15:40:39<SeP>2025-02-23 17:28:30<SeP>2025-02-23 19:16:21<SeP>2025-02-23 21:04:12<SeP>2025-02-23 22:52:03<SeP>2025-02-24 00:39:54<SeP>2025-02-24 02:27:45<SeP>2025-02-24 04:15:36<SeP>2025-02-24 06:03:27<SeP>2025-02-24 07:51:18<SeP>2025-02-24 09:39:09<SeP>2025-02-24 11:27:00<SeP>2025-02-24 13:14:51<SeP>2025-02-24 15:02:42<SeP>2025-02-24 16:50:33<SeP>2025-02-24 18:38:24<SeP>2025-02-24 20:26:15<SeP>2025-02-24 22:14:06<SeP>2025-02-25 00:01:57<SeP>2025-02-25 01:49:48<SeP>2025-02-25 03:37:39<SeP>2025-02-25 05:25:30<SeP>2025-02-25 07:13:21<SeP>2025-02-25 09:01:12<SeP>2025-02-25 10:49:03<SeP>2025-02-25 12:36:54<SeP>2025-02-25 14:24:45<SeP>2025-02-25 16:12:36<SeP>2025-02-25 18:00:27<SeP>2025-02-25 19:48:18<SeP>2025-02-25 21:36:09<SeP>2025-02-25 23:24:00<SeP>2025-02-26 01:11:51<SeP>2025-02-26 02:59:42<SeP>2025-02-26 04:47:33<SeP>2025-02-26 06:35:24<SeP>2025-02-26 08:23:15<SeP>2025-02-26 10:11:06<SeP>2025-02-26 11:58:57<SeP>2025-02-26 13:46:48<SeP>2025-02-26 15:34:39<SeP>2025-02-26 17:22:30<SeP>2025-02-26 19:10:21<SeP>2025-02-26 20:58:12<SeP>2025-02-26 22:46:03<SeP>2025-02-27 00:33:54<SeP>2025-02-27 02:21:45<SeP>2025-02-27 04:09:36<SeP>2025-02-27 05:57:27<SeP>2025-02-27 07:45:18<SeP>2025-02-27 09:33:09<SeP>2025-02-27 11:21:00<SeP>2025-02-27 13:08:51<SeP>2025-02-27 14:56:42<SeP>2025-02-27 16:44:33<SeP>2025-02-27 18:32:24<SeP>2025-02-27 20:20:15<SeP>2025-02-27 22:08:06<SeP>2025-02-27 23:55:57<SeP>2025-02-28 01:43:48<SeP>2025-02-28 03:31:39<SeP>2025-02-28 05:19:30<SeP>2025-02-28 07:07:21<SeP>2025-02-28 08:55:12<SeP>2025-02-28 10:43:03<SeP>2025-02-28 12:30:54<SeP>2025-02-28 14:18:45<SeP>2025-02-28 16:06:36<SeP>2025-02-28 17:54:27<SeP>2025-02-28 19:42:18<SeP>2025-02-28 21:30:09<SeP>2025-02-28 23:18:00<SeP>2025-03-01 01:05:51<SeP>2025-03-01 02:53:42<SeP>2025-03-01 04:41:33<SeP>2025-03-01 06:29:24<SeP>2025-03-01 08:17:15<SeP>2025-03-01 10:05:06<SeP>2025-03-01 11:52:57<SeP>2025-03-01 13:40:48<SeP>2025-03-01 15:28:39<SeP>2025-03-01 17:16:30<SeP>2025-03-01 19:04:21<SeP>2025-03-01 20:52:12<SeP>2025-03-01 22:40:03<SeP>2025-03-02 00:27:54<SeP>2025-03-02 02:15:45<SeP>2025-03-02 04:03:36<SeP>2025-03-02 05:51:27<SeP>2025-03-02 07:39:18<SeP>2025-03-02 09:27:09<SeP>2025-03-02 11:15:00<SeP>2025-03-02 13:02:51<SeP>2025-03-02 14:50:42<SeP>2025-03-02 16:38:33<SeP>2025-03-02 18:26:24<SeP>2025-03-02 20:14:15<SeP>2025-03-02 22:02:06<SeP>2025-03-02 23:49:57<SeP>2025-03-03 01:37:48<SeP>2025-03-03 03:25:39<SeP>2025-03-03 05:13:30<SeP>2025-03-03 07:01:21<SeP>2025-03-03 08:49:12<SeP>2025-03-03 10:37:03<SeP>2025-03-03 12:24:54<SeP>2025-03-03 14:12:45<SeP>2025-03-03 16:00:36<SeP>2025-03-03 17:48:27<SeP>2025-03-03 19:36:18<SeP>2025-03-03 21:24:09<SeP>2025-03-03 23:12:00<SeP>2025-03-04 00:59:51<SeP>2025-03-04 02:47:42<SeP>2025-03-04 04:35:33<SeP>2025-03-04 06:23:24<SeP>2025-03-04 08:11:15<SeP>2025-03-04 09:59:06<SeP>2025-03-04 11:46:57<SeP>2025-03-04 13:34:48<SeP>2025-03-04 15:22:39<SeP>2025-03-04 17:10:30<SeP>2025-03-04 18:58:21<SeP>2025-03-04 20:46:12<SeP>2025-03-04 22:34:03<SeP>2025-03-05 00:21:54<SeP>2025-03-05 02:09:45<SeP>2025-03-05 03:57:36<SeP>2025-03-05 05:45:27<SeP>2025-03-05 07:33:18<SeP>2025-03-05 09:21:09<SeP>2025-03-05 11:09:00<SeP>2025-03-05 12:56:51<SeP>2025-03-05 14:44:42<SeP>2025-03-05 16:32:33<SeP>2025-03-05 18:20:24<SeP>2025-03-05 20:08:15<SeP>2025-03-05 21:56:06<SeP>2025-03-05 23:43:57<SeP>2025-03-06 01:31:48<SeP>2025-03-06 03:19:39<SeP>2025-03-06 05:07:30<SeP>2025-03-06 06:55:21<SeP>2025-03-06 08:43:12<SeP>2025-03-06 10:31:03<SeP>2025-03-06 12:18:54<SeP>2025-03-06 14:06:45<SeP>2025-03-06 15:54:36<SeP>2025-03-06 17:42:27<SeP>2025-03-06 19:30:18<SeP>2025-03-06 21:18:09<SeP>2025-03-06 23:06:00<SeP>2025-03-07 00:53:51<SeP>2025-03-07 02:41:42<SeP>2025-03-07 04:29:33<SeP>2025-03-07 06:17:24<SeP>2025-03-07 08:05:15<SeP>2025-03-07 09:53:06<SeP>2025-03-07 11:40:57<SeP>2025-03-07 13:28:48<SeP>2025-03-07 15:16:39<SeP>2025-03-07 17:04:30<SeP>2025-03-07 18:52:21<SeP>2025-03-07 20:40:12<SeP>2025-03-07 22:28:03<SeP>2025-03-08 00:15:54<SeP>2025-03-08 02:03:45<SeP>2025-03-08 03:51:36<SeP>2025-03-08 05:39:27<SeP>2025-03-08 07:27:18<SeP>2025-03-08 09:15:09<SeP>2025-03-08 11:03:00<SeP>2025-03-08 12:50:51<SeP>2025-03-08 14:38:42<SeP>2025-03-08 16:26:33<SeP>2025-03-08 18:14:24<SeP>2025-03-08 20:02:15<SeP>2025-03-08 21:50:06<SeP>2025-03-08 23:37:57<SeP>2025-03-09 01:25:48<SeP>2025-03-09 04:13:39<SeP>2025-03-09 06:01:30<SeP>2025-03-09 07:49:21<SeP>2025-03-09 09:37:12<SeP>2025-03-09 11:25:03<SeP>2025-03-09 13:12:54<SeP>2025-03-09 15:00:45<SeP>2025-03-09 16:48:36<SeP>2025-03-09 18:36:27<SeP>2025-03-09 20:24:18<SeP>2025-03-09 22:12:09";
  const itemLabel       = "Escaneos";
  const itemData        = "88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>93<SeP>84<SeP>28<SeP>58<SeP>65<SeP>45<SeP>83<SeP>45<SeP>150<SeP>214<SeP>115<SeP>84<SeP>147<SeP>73<SeP>96<SeP>94<SeP>136<SeP>148<SeP>94<SeP>109<SeP>46<SeP>75<SeP>111<SeP>82<SeP>67<SeP>101<SeP>77<SeP>83<SeP>74<SeP>89<SeP>67<SeP>76<SeP>147<SeP>60<SeP>48<SeP>88<SeP>83<SeP>112<SeP>193<SeP>84<SeP>130<SeP>88<SeP>115<SeP>96<SeP>141<SeP>110<SeP>29<SeP>117<SeP>65<SeP>71<SeP>117<SeP>55<SeP>84<SeP>52<SeP>77<SeP>66<SeP>60<SeP>108<SeP>192<SeP>38<SeP>101<SeP>107<SeP>105<SeP>113<SeP>42<SeP>83<SeP>71<SeP>174<SeP>69<SeP>106<SeP>53<SeP>83<SeP>98<SeP>75<SeP>74<SeP>85<SeP>76<SeP>151<SeP>98<SeP>194<SeP>67<SeP>62<SeP>56<SeP>91<SeP>36<SeP>99<SeP>86<SeP>101<SeP>73<SeP>74<SeP>101<SeP>166<SeP>166<SeP>81<SeP>86<SeP>53<SeP>42<SeP>89<SeP>76<SeP>116<SeP>72<SeP>53<SeP>75<SeP>60<SeP>112<SeP>90<SeP>56<SeP>84<SeP>75<SeP>84<SeP>43<SeP>71<SeP>149<SeP>126<SeP>75<SeP>62<SeP>63<SeP>67<SeP>83<SeP>90<SeP>86<SeP>79<SeP>37<SeP>20<SeP>57<SeP>85<SeP>133<SeP>77<SeP>145<SeP>42<SeP>120<SeP>71<SeP>149<SeP>74<SeP>67<SeP>93<SeP>80<SeP>28<SeP>72<SeP>79<SeP>49<SeP>49<SeP>97<SeP>92<SeP>159<SeP>110<SeP>86<SeP>65<SeP>49<SeP>71<SeP>70<SeP>39<SeP>87<SeP>90<SeP>101<SeP>83<SeP>68<SeP>100<SeP>62<SeP>84<SeP>141<SeP>73<SeP>43<SeP>57<SeP>44<SeP>76<SeP>85<SeP>96<SeP>69<SeP>102<SeP>133<SeP>59<SeP>104<SeP>69<SeP>49<SeP>71<SeP>85<SeP>71<SeP>70<SeP>140<SeP>63<SeP>90<SeP>90<SeP>107<SeP>101<SeP>61<SeP>44<SeP>26<SeP>76<SeP>93<SeP>54<SeP>54<SeP>89<SeP>86<SeP>48<SeP>95<SeP>115<SeP>117<SeP>59<SeP>40<SeP>25<SeP>59<SeP>167<SeP>88<SeP>138<SeP>57<SeP>68<SeP>121<SeP>48<SeP>62<SeP>111<SeP>68<SeP>190<SeP>74<SeP>42<SeP>135<SeP>71<SeP>74<SeP>67<SeP>91<SeP>106<SeP>110<SeP>82<SeP>105<SeP>55<SeP>71<SeP>90<SeP>72<SeP>83<SeP>59<SeP>129<SeP>110<SeP>87<SeP>89<SeP>86<SeP>125<SeP>59<SeP>122<SeP>107<SeP>48<SeP>62<SeP>129<SeP>144<SeP>50<SeP>197<SeP>81<SeP>136<SeP>48<SeP>71<SeP>83<SeP>73<SeP>85<SeP>86<SeP>37<SeP>73<SeP>71<SeP>60<SeP>55<SeP>40<SeP>112<SeP>92<SeP>118<SeP>68<SeP>81<SeP>76<SeP>46<SeP>50<SeP>93<SeP>47<SeP>51<SeP>55<SeP>72<SeP>87<SeP>86<SeP>88<SeP>67<SeP>49<SeP>44<SeP>58<SeP>212<SeP>84<SeP>40<SeP>79<SeP>70<SeP>113<SeP>58<SeP>41<SeP>45<SeP>170<SeP>104<SeP>44<SeP>49<SeP>53<SeP>90<SeP>51<SeP>34<SeP>64<SeP>138<SeP>83<SeP>66<SeP>60<SeP>116<SeP>53<SeP>64<SeP>26<SeP>38<SeP>47<SeP>30<SeP>63<SeP>85<SeP>75<SeP>60<SeP>75<SeP>75<SeP>253<SeP>51<SeP>29<SeP>70<SeP>69<SeP>118<SeP>141<SeP>52<SeP>55<SeP>67<SeP>171<SeP>67<SeP>95<SeP>64<SeP>107<SeP>21<SeP>112<SeP>24<SeP>47<SeP>55<SeP>55<SeP>53<SeP>100<SeP>94<SeP>128<SeP>98<SeP>45<SeP>75<SeP>46<SeP>54<SeP>113<SeP>88<SeP>81<SeP>72<SeP>70<SeP>172<SeP>39<SeP>76<SeP>46<SeP>68<SeP>365<SeP>153<SeP>25<SeP>47<SeP>17<SeP>51<SeP>41<SeP>70<SeP>75<SeP>76<SeP>185<SeP>76<SeP>75<SeP>347<SeP>66<SeP>99<SeP>257<SeP>141<SeP>197<SeP>51<SeP>54<SeP>67<SeP>44<SeP>69<SeP>45<SeP>55<SeP>52<SeP>20<SeP>66<SeP>58<SeP>95<SeP>62<SeP>69<SeP>42<SeP>60<SeP>55<SeP>29<SeP>31<SeP>32<SeP>117";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-08 00:00:00<SeP>2025-02-08 01:47:51<SeP>2025-02-08 03:35:42<SeP>2025-02-08 05:23:33<SeP>2025-02-08 07:11:24<SeP>2025-02-08 08:59:15<SeP>2025-02-08 10:47:06<SeP>2025-02-08 12:34:57<SeP>2025-02-08 14:22:48<SeP>2025-02-08 16:10:39<SeP>2025-02-08 17:58:30<SeP>2025-02-08 19:46:21<SeP>2025-02-08 21:34:12<SeP>2025-02-08 23:22:03<SeP>2025-02-09 01:09:54<SeP>2025-02-09 02:57:45<SeP>2025-02-09 04:45:36<SeP>2025-02-09 06:33:27<SeP>2025-02-09 08:21:18<SeP>2025-02-09 10:09:09<SeP>2025-02-09 11:57:00<SeP>2025-02-09 13:44:51<SeP>2025-02-09 15:32:42<SeP>2025-02-09 17:20:33<SeP>2025-02-09 19:08:24<SeP>2025-02-09 20:56:15<SeP>2025-02-09 22:44:06<SeP>2025-02-10 00:31:57<SeP>2025-02-10 02:19:48<SeP>2025-02-10 04:07:39<SeP>2025-02-10 05:55:30<SeP>2025-02-10 07:43:21<SeP>2025-02-10 09:31:12<SeP>2025-02-10 11:19:03<SeP>2025-02-10 13:06:54<SeP>2025-02-10 14:54:45<SeP>2025-02-10 16:42:36<SeP>2025-02-10 18:30:27<SeP>2025-02-10 20:18:18<SeP>2025-02-10 22:06:09<SeP>2025-02-10 23:54:00<SeP>2025-02-11 01:41:51<SeP>2025-02-11 03:29:42<SeP>2025-02-11 05:17:33<SeP>2025-02-11 07:05:24<SeP>2025-02-11 08:53:15<SeP>2025-02-11 10:41:06<SeP>2025-02-11 12:28:57<SeP>2025-02-11 14:16:48<SeP>2025-02-11 16:04:39<SeP>2025-02-11 17:52:30<SeP>2025-02-11 19:40:21<SeP>2025-02-11 21:28:12<SeP>2025-02-11 23:16:03<SeP>2025-02-12 01:03:54<SeP>2025-02-12 02:51:45<SeP>2025-02-12 04:39:36<SeP>2025-02-12 06:27:27<SeP>2025-02-12 08:15:18<SeP>2025-02-12 10:03:09<SeP>2025-02-12 11:51:00<SeP>2025-02-12 13:38:51<SeP>2025-02-12 15:26:42<SeP>2025-02-12 17:14:33<SeP>2025-02-12 19:02:24<SeP>2025-02-12 20:50:15<SeP>2025-02-12 22:38:06<SeP>2025-02-13 00:25:57<SeP>2025-02-13 02:13:48<SeP>2025-02-13 04:01:39<SeP>2025-02-13 05:49:30<SeP>2025-02-13 07:37:21<SeP>2025-02-13 09:25:12<SeP>2025-02-13 11:13:03<SeP>2025-02-13 13:00:54<SeP>2025-02-13 14:48:45<SeP>2025-02-13 16:36:36<SeP>2025-02-13 18:24:27<SeP>2025-02-13 20:12:18<SeP>2025-02-13 22:00:09<SeP>2025-02-13 23:48:00<SeP>2025-02-14 01:35:51<SeP>2025-02-14 03:23:42<SeP>2025-02-14 05:11:33<SeP>2025-02-14 06:59:24<SeP>2025-02-14 08:47:15<SeP>2025-02-14 10:35:06<SeP>2025-02-14 12:22:57<SeP>2025-02-14 14:10:48<SeP>2025-02-14 15:58:39<SeP>2025-02-14 17:46:30<SeP>2025-02-14 19:34:21<SeP>2025-02-14 21:22:12<SeP>2025-02-14 23:10:03<SeP>2025-02-15 00:57:54<SeP>2025-02-15 02:45:45<SeP>2025-02-15 04:33:36<SeP>2025-02-15 06:21:27<SeP>2025-02-15 08:09:18<SeP>2025-02-15 09:57:09<SeP>2025-02-15 11:45:00<SeP>2025-02-15 13:32:51<SeP>2025-02-15 15:20:42<SeP>2025-02-15 17:08:33<SeP>2025-02-15 18:56:24<SeP>2025-02-15 20:44:15<SeP>2025-02-15 22:32:06<SeP>2025-02-16 00:19:57<SeP>2025-02-16 02:07:48<SeP>2025-02-16 03:55:39<SeP>2025-02-16 05:43:30<SeP>2025-02-16 07:31:21<SeP>2025-02-16 09:19:12<SeP>2025-02-16 11:07:03<SeP>2025-02-16 12:54:54<SeP>2025-02-16 14:42:45<SeP>2025-02-16 16:30:36<SeP>2025-02-16 18:18:27<SeP>2025-02-16 20:06:18<SeP>2025-02-16 21:54:09<SeP>2025-02-16 23:42:00<SeP>2025-02-17 01:29:51<SeP>2025-02-17 03:17:42<SeP>2025-02-17 05:05:33<SeP>2025-02-17 06:53:24<SeP>2025-02-17 08:41:15<SeP>2025-02-17 10:29:06<SeP>2025-02-17 12:16:57<SeP>2025-02-17 14:04:48<SeP>2025-02-17 15:52:39<SeP>2025-02-17 17:40:30<SeP>2025-02-17 19:28:21<SeP>2025-02-17 21:16:12<SeP>2025-02-17 23:04:03<SeP>2025-02-18 00:51:54<SeP>2025-02-18 02:39:45<SeP>2025-02-18 04:27:36<SeP>2025-02-18 06:15:27<SeP>2025-02-18 08:03:18<SeP>2025-02-18 09:51:09<SeP>2025-02-18 11:39:00<SeP>2025-02-18 13:26:51<SeP>2025-02-18 15:14:42<SeP>2025-02-18 17:02:33<SeP>2025-02-18 18:50:24<SeP>2025-02-18 20:38:15<SeP>2025-02-18 22:26:06<SeP>2025-02-19 00:13:57<SeP>2025-02-19 02:01:48<SeP>2025-02-19 03:49:39<SeP>2025-02-19 05:37:30<SeP>2025-02-19 07:25:21<SeP>2025-02-19 09:13:12<SeP>2025-02-19 11:01:03<SeP>2025-02-19 12:48:54<SeP>2025-02-19 14:36:45<SeP>2025-02-19 16:24:36<SeP>2025-02-19 18:12:27<SeP>2025-02-19 20:00:18<SeP>2025-02-19 21:48:09<SeP>2025-02-19 23:36:00<SeP>2025-02-20 01:23:51<SeP>2025-02-20 03:11:42<SeP>2025-02-20 04:59:33<SeP>2025-02-20 06:47:24<SeP>2025-02-20 08:35:15<SeP>2025-02-20 10:23:06<SeP>2025-02-20 12:10:57<SeP>2025-02-20 13:58:48<SeP>2025-02-20 15:46:39<SeP>2025-02-20 17:34:30<SeP>2025-02-20 19:22:21<SeP>2025-02-20 21:10:12<SeP>2025-02-20 22:58:03<SeP>2025-02-21 00:45:54<SeP>2025-02-21 02:33:45<SeP>2025-02-21 04:21:36<SeP>2025-02-21 06:09:27<SeP>2025-02-21 07:57:18<SeP>2025-02-21 09:45:09<SeP>2025-02-21 11:33:00<SeP>2025-02-21 13:20:51<SeP>2025-02-21 15:08:42<SeP>2025-02-21 16:56:33<SeP>2025-02-21 18:44:24<SeP>2025-02-21 20:32:15<SeP>2025-02-21 22:20:06<SeP>2025-02-22 00:07:57<SeP>2025-02-22 01:55:48<SeP>2025-02-22 03:43:39<SeP>2025-02-22 05:31:30<SeP>2025-02-22 07:19:21<SeP>2025-02-22 09:07:12<SeP>2025-02-22 10:55:03<SeP>2025-02-22 12:42:54<SeP>2025-02-22 14:30:45<SeP>2025-02-22 16:18:36<SeP>2025-02-22 18:06:27<SeP>2025-02-22 19:54:18<SeP>2025-02-22 21:42:09<SeP>2025-02-22 23:30:00<SeP>2025-02-23 01:17:51<SeP>2025-02-23 03:05:42<SeP>2025-02-23 04:53:33<SeP>2025-02-23 06:41:24<SeP>2025-02-23 08:29:15<SeP>2025-02-23 10:17:06<SeP>2025-02-23 12:04:57<SeP>2025-02-23 13:52:48<SeP>2025-02-23 15:40:39<SeP>2025-02-23 17:28:30<SeP>2025-02-23 19:16:21<SeP>2025-02-23 21:04:12<SeP>2025-02-23 22:52:03<SeP>2025-02-24 00:39:54<SeP>2025-02-24 02:27:45<SeP>2025-02-24 04:15:36<SeP>2025-02-24 06:03:27<SeP>2025-02-24 07:51:18<SeP>2025-02-24 09:39:09<SeP>2025-02-24 11:27:00<SeP>2025-02-24 13:14:51<SeP>2025-02-24 15:02:42<SeP>2025-02-24 16:50:33<SeP>2025-02-24 18:38:24<SeP>2025-02-24 20:26:15<SeP>2025-02-24 22:14:06<SeP>2025-02-25 00:01:57<SeP>2025-02-25 01:49:48<SeP>2025-02-25 03:37:39<SeP>2025-02-25 05:25:30<SeP>2025-02-25 07:13:21<SeP>2025-02-25 09:01:12<SeP>2025-02-25 10:49:03<SeP>2025-02-25 12:36:54<SeP>2025-02-25 14:24:45<SeP>2025-02-25 16:12:36<SeP>2025-02-25 18:00:27<SeP>2025-02-25 19:48:18<SeP>2025-02-25 21:36:09<SeP>2025-02-25 23:24:00<SeP>2025-02-26 01:11:51<SeP>2025-02-26 02:59:42<SeP>2025-02-26 04:47:33<SeP>2025-02-26 06:35:24<SeP>2025-02-26 08:23:15<SeP>2025-02-26 10:11:06<SeP>2025-02-26 11:58:57<SeP>2025-02-26 13:46:48<SeP>2025-02-26 15:34:39<SeP>2025-02-26 17:22:30<SeP>2025-02-26 19:10:21<SeP>2025-02-26 20:58:12<SeP>2025-02-26 22:46:03<SeP>2025-02-27 00:33:54<SeP>2025-02-27 02:21:45<SeP>2025-02-27 04:09:36<SeP>2025-02-27 05:57:27<SeP>2025-02-27 07:45:18<SeP>2025-02-27 09:33:09<SeP>2025-02-27 11:21:00<SeP>2025-02-27 13:08:51<SeP>2025-02-27 14:56:42<SeP>2025-02-27 16:44:33<SeP>2025-02-27 18:32:24<SeP>2025-02-27 20:20:15<SeP>2025-02-27 22:08:06<SeP>2025-02-27 23:55:57<SeP>2025-02-28 01:43:48<SeP>2025-02-28 03:31:39<SeP>2025-02-28 05:19:30<SeP>2025-02-28 07:07:21<SeP>2025-02-28 08:55:12<SeP>2025-02-28 10:43:03<SeP>2025-02-28 12:30:54<SeP>2025-02-28 14:18:45<SeP>2025-02-28 16:06:36<SeP>2025-02-28 17:54:27<SeP>2025-02-28 19:42:18<SeP>2025-02-28 21:30:09<SeP>2025-02-28 23:18:00<SeP>2025-03-01 01:05:51<SeP>2025-03-01 02:53:42<SeP>2025-03-01 04:41:33<SeP>2025-03-01 06:29:24<SeP>2025-03-01 08:17:15<SeP>2025-03-01 10:05:06<SeP>2025-03-01 11:52:57<SeP>2025-03-01 13:40:48<SeP>2025-03-01 15:28:39<SeP>2025-03-01 17:16:30<SeP>2025-03-01 19:04:21<SeP>2025-03-01 20:52:12<SeP>2025-03-01 22:40:03<SeP>2025-03-02 00:27:54<SeP>2025-03-02 02:15:45<SeP>2025-03-02 04:03:36<SeP>2025-03-02 05:51:27<SeP>2025-03-02 07:39:18<SeP>2025-03-02 09:27:09<SeP>2025-03-02 11:15:00<SeP>2025-03-02 13:02:51<SeP>2025-03-02 14:50:42<SeP>2025-03-02 16:38:33<SeP>2025-03-02 18:26:24<SeP>2025-03-02 20:14:15<SeP>2025-03-02 22:02:06<SeP>2025-03-02 23:49:57<SeP>2025-03-03 01:37:48<SeP>2025-03-03 03:25:39<SeP>2025-03-03 05:13:30<SeP>2025-03-03 07:01:21<SeP>2025-03-03 08:49:12<SeP>2025-03-03 10:37:03<SeP>2025-03-03 12:24:54<SeP>2025-03-03 14:12:45<SeP>2025-03-03 16:00:36<SeP>2025-03-03 17:48:27<SeP>2025-03-03 19:36:18<SeP>2025-03-03 21:24:09<SeP>2025-03-03 23:12:00<SeP>2025-03-04 00:59:51<SeP>2025-03-04 02:47:42<SeP>2025-03-04 04:35:33<SeP>2025-03-04 06:23:24<SeP>2025-03-04 08:11:15<SeP>2025-03-04 09:59:06<SeP>2025-03-04 11:46:57<SeP>2025-03-04 13:34:48<SeP>2025-03-04 15:22:39<SeP>2025-03-04 17:10:30<SeP>2025-03-04 18:58:21<SeP>2025-03-04 20:46:12<SeP>2025-03-04 22:34:03<SeP>2025-03-05 00:21:54<SeP>2025-03-05 02:09:45<SeP>2025-03-05 03:57:36<SeP>2025-03-05 05:45:27<SeP>2025-03-05 07:33:18<SeP>2025-03-05 09:21:09<SeP>2025-03-05 11:09:00<SeP>2025-03-05 12:56:51<SeP>2025-03-05 14:44:42<SeP>2025-03-05 16:32:33<SeP>2025-03-05 18:20:24<SeP>2025-03-05 20:08:15<SeP>2025-03-05 21:56:06<SeP>2025-03-05 23:43:57<SeP>2025-03-06 01:31:48<SeP>2025-03-06 03:19:39<SeP>2025-03-06 05:07:30<SeP>2025-03-06 06:55:21<SeP>2025-03-06 08:43:12<SeP>2025-03-06 10:31:03<SeP>2025-03-06 12:18:54<SeP>2025-03-06 14:06:45<SeP>2025-03-06 15:54:36<SeP>2025-03-06 17:42:27<SeP>2025-03-06 19:30:18<SeP>2025-03-06 21:18:09<SeP>2025-03-06 23:06:00<SeP>2025-03-07 00:53:51<SeP>2025-03-07 02:41:42<SeP>2025-03-07 04:29:33<SeP>2025-03-07 06:17:24<SeP>2025-03-07 08:05:15<SeP>2025-03-07 09:53:06<SeP>2025-03-07 11:40:57<SeP>2025-03-07 13:28:48<SeP>2025-03-07 15:16:39<SeP>2025-03-07 17:04:30<SeP>2025-03-07 18:52:21<SeP>2025-03-07 20:40:12<SeP>2025-03-07 22:28:03<SeP>2025-03-08 00:15:54<SeP>2025-03-08 02:03:45<SeP>2025-03-08 03:51:36<SeP>2025-03-08 05:39:27<SeP>2025-03-08 07:27:18<SeP>2025-03-08 09:15:09<SeP>2025-03-08 11:03:00<SeP>2025-03-08 12:50:51<SeP>2025-03-08 14:38:42<SeP>2025-03-08 16:26:33<SeP>2025-03-08 18:14:24<SeP>2025-03-08 20:02:15<SeP>2025-03-08 21:50:06<SeP>2025-03-08 23:37:57<SeP>2025-03-09 01:25:48<SeP>2025-03-09 04:13:39<SeP>2025-03-09 06:01:30<SeP>2025-03-09 07:49:21<SeP>2025-03-09 09:37:12<SeP>2025-03-09 11:25:03<SeP>2025-03-09 13:12:54<SeP>2025-03-09 15:00:45<SeP>2025-03-09 16:48:36<SeP>2025-03-09 18:36:27<SeP>2025-03-09 20:24:18<SeP>2025-03-09 22:12:09";
  const itemLabel       = "Ataques";
  const itemData        = "133<SeP>83<SeP>282<SeP>77<SeP>23<SeP>269<SeP>137<SeP>171<SeP>27<SeP>38<SeP>122<SeP>120<SeP>333<SeP>130<SeP>153<SeP>183<SeP>122<SeP>165<SeP>193<SeP>343<SeP>261<SeP>409<SeP>269<SeP>477<SeP>333<SeP>350<SeP>179<SeP>198<SeP>307<SeP>223<SeP>148<SeP>142<SeP>63<SeP>30<SeP>81<SeP>186<SeP>214<SeP>169<SeP>45<SeP>63<SeP>235<SeP>184<SeP>324<SeP>84<SeP>217<SeP>161<SeP>160<SeP>48<SeP>486<SeP>126<SeP>263<SeP>113<SeP>100<SeP>368<SeP>279<SeP>430<SeP>2581<SeP>3274<SeP>1113<SeP>375<SeP>211<SeP>307<SeP>617<SeP>181<SeP>409<SeP>133<SeP>11<SeP>66<SeP>78<SeP>592<SeP>39<SeP>312<SeP>129<SeP>251<SeP>172<SeP>779<SeP>432<SeP>377<SeP>243<SeP>260<SeP>150<SeP>201<SeP>235<SeP>459<SeP>241<SeP>390<SeP>152<SeP>312<SeP>259<SeP>257<SeP>271<SeP>241<SeP>158<SeP>117<SeP>160<SeP>159<SeP>227<SeP>685<SeP>46<SeP>210<SeP>149<SeP>259<SeP>53<SeP>83<SeP>243<SeP>281<SeP>121<SeP>141<SeP>75<SeP>23<SeP>307<SeP>268<SeP>194<SeP>130<SeP>271<SeP>275<SeP>135<SeP>432<SeP>421<SeP>177<SeP>294<SeP>259<SeP>296<SeP>155<SeP>348<SeP>392<SeP>141<SeP>383<SeP>116<SeP>34<SeP>319<SeP>347<SeP>45<SeP>201<SeP>450<SeP>185<SeP>79<SeP>438<SeP>62<SeP>186<SeP>250<SeP>252<SeP>234<SeP>183<SeP>285<SeP>95<SeP>109<SeP>184<SeP>123<SeP>528<SeP>149<SeP>39<SeP>105<SeP>103<SeP>8<SeP>100<SeP>163<SeP>325<SeP>183<SeP>249<SeP>77<SeP>282<SeP>139<SeP>117<SeP>96<SeP>108<SeP>9<SeP>112<SeP>247<SeP>156<SeP>301<SeP>836<SeP>421<SeP>310<SeP>704<SeP>287<SeP>610<SeP>173<SeP>445<SeP>538<SeP>222<SeP>529<SeP>304<SeP>650<SeP>855<SeP>923<SeP>630<SeP>322<SeP>308<SeP>226<SeP>293<SeP>426<SeP>793<SeP>635<SeP>353<SeP>487<SeP>272<SeP>551<SeP>702<SeP>589<SeP>467<SeP>366<SeP>555<SeP>757<SeP>223<SeP>310<SeP>499<SeP>747<SeP>571<SeP>526<SeP>453<SeP>78<SeP>78<SeP>347<SeP>63<SeP>203<SeP>404<SeP>232<SeP>63<SeP>337<SeP>125<SeP>53<SeP>100<SeP>273<SeP>225<SeP>225<SeP>261<SeP>223<SeP>415<SeP>55<SeP>107<SeP>258<SeP>136<SeP>438<SeP>336<SeP>111<SeP>185<SeP>142<SeP>52<SeP>121<SeP>190<SeP>54<SeP>65<SeP>323<SeP>79<SeP>120<SeP>173<SeP>84<SeP>57<SeP>69<SeP>64<SeP>200<SeP>341<SeP>323<SeP>35<SeP>222<SeP>179<SeP>498<SeP>95<SeP>149<SeP>152<SeP>192<SeP>252<SeP>25<SeP>42<SeP>144<SeP>114<SeP>213<SeP>131<SeP>148<SeP>336<SeP>26<SeP>342<SeP>193<SeP>354<SeP>61<SeP>63<SeP>48<SeP>47<SeP>78<SeP>106<SeP>32<SeP>13<SeP>85<SeP>99<SeP>30<SeP>82<SeP>67<SeP>197<SeP>108<SeP>77<SeP>45<SeP>263<SeP>63<SeP>523<SeP>42<SeP>115<SeP>17<SeP>312<SeP>28<SeP>20<SeP>197<SeP>82<SeP>86<SeP>40<SeP>184<SeP>50<SeP>117<SeP>275<SeP>107<SeP>33<SeP>91<SeP>49<SeP>37<SeP>381<SeP>152<SeP>48<SeP>88<SeP>57<SeP>206<SeP>108<SeP>35<SeP>456<SeP>28<SeP>30<SeP>14<SeP>253<SeP>88<SeP>35<SeP>83<SeP>65<SeP>62<SeP>83<SeP>280<SeP>138<SeP>142<SeP>69<SeP>69<SeP>73<SeP>43<SeP>32<SeP>37<SeP>305<SeP>55<SeP>132<SeP>140<SeP>137<SeP>91<SeP>19<SeP>123<SeP>144<SeP>161<SeP>93<SeP>114<SeP>88<SeP>40<SeP>118<SeP>72<SeP>129<SeP>151<SeP>51<SeP>174<SeP>45<SeP>407<SeP>380<SeP>69<SeP>131<SeP>163<SeP>35<SeP>40<SeP>130<SeP>49<SeP>90<SeP>108<SeP>108<SeP>195<SeP>25<SeP>12<SeP>65<SeP>207<SeP>48<SeP>78<SeP>10<SeP>26<SeP>21<SeP>246<SeP>148<SeP>29<SeP>156<SeP>112<SeP>12<SeP>25<SeP>71<SeP>58<SeP>52<SeP>279<SeP>60<SeP>18<SeP>34<SeP>501";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>India<SeP>South Korea<SeP>Russia<SeP>Indonesia<SeP>Hong Kong<SeP>Romania";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "21115<SeP>13616<SeP>12610<SeP>8803<SeP>5936<SeP>5373<SeP>4399<SeP>4245<SeP>4184<SeP>3725";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany<SeP>Singapore";
  const itemLabel   = "Scans";
  const itemData    = "14605<SeP>3044<SeP>2617<SeP>2008<SeP>1369<SeP>1011<SeP>860<SeP>743<SeP>617<SeP>489";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>Romania<SeP>India<SeP>Russia";
  const itemLabel   = "Attacks";
  const itemData    = "11599<SeP>10572<SeP>8186<SeP>6510<SeP>4630<SeP>4104<SeP>3499<SeP>3428<SeP>3319<SeP>3030";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>4837<SeP>16276<SeP>136052<SeP>207566";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "10750<SeP>9876<SeP>8127<SeP>6226<SeP>4240<SeP>3465<SeP>2986<SeP>2899<SeP>2763<SeP>2504";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>3462<SeP>4766<SeP>4811<SeP>14061<SeP>9269<SeP>701";
  const itemLabel   = "Scans";
  const itemData    = "8445<SeP>2618<SeP>2120<SeP>1327<SeP>858<SeP>635<SeP>588<SeP>556<SeP>524<SeP>467";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "3462<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>136052<SeP>16276<SeP>56971<SeP>4134<SeP>396982";
  const itemLabel   = "Atacks";
  const itemData    = "9892<SeP>7571<SeP>6225<SeP>3605<SeP>3127<SeP>2762<SeP>2730<SeP>2444<SeP>1431<SeP>1342";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>India<SeP>South Korea<SeP>Russia<SeP>Indonesia<SeP>Hong Kong<SeP>Romania";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "21115<SeP>13616<SeP>12610<SeP>8803<SeP>5936<SeP>5373<SeP>4399<SeP>4245<SeP>4184<SeP>3725";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany<SeP>Singapore";
  const itemLabel   = "Escaneos";
  const itemData    = "14605<SeP>3044<SeP>2617<SeP>2008<SeP>1369<SeP>1011<SeP>860<SeP>743<SeP>617<SeP>489";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>Romania<SeP>India<SeP>Russia";
  const itemLabel   = "Ataques";
  const itemData    = "11599<SeP>10572<SeP>8186<SeP>6510<SeP>4630<SeP>4104<SeP>3499<SeP>3428<SeP>3319<SeP>3030";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>4837<SeP>16276<SeP>136052<SeP>207566";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "10750<SeP>9876<SeP>8127<SeP>6226<SeP>4240<SeP>3465<SeP>2986<SeP>2899<SeP>2763<SeP>2504";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>3462<SeP>4766<SeP>4811<SeP>14061<SeP>9269<SeP>701";
  const itemLabel   = "Escaneos";
  const itemData    = "8445<SeP>2618<SeP>2120<SeP>1327<SeP>858<SeP>635<SeP>588<SeP>556<SeP>524<SeP>467";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "3462<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>136052<SeP>16276<SeP>56971<SeP>4134<SeP>396982";
  const itemLabel   = "Ataques";
  const itemData    = "9892<SeP>7571<SeP>6225<SeP>3605<SeP>3127<SeP>2762<SeP>2730<SeP>2444<SeP>1431<SeP>1342";
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
