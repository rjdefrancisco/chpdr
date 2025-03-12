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
  document.getElementById("last-updated").innerHTML = "2025-3-12";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "0.4";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "0.4";
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
  const metricData    = "19386";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "8141";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "11245";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "1915";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "6274";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "4971";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "825";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "2124";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "2847";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "758";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "19386";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "8141";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "11245";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "1915";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "6274";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "4971";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "825";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "2124";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "2847";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "758";
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
  const incomingData = "19386<SeP>8141<SeP>11245<SeP>1915";
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
  const incomingData = "11245<SeP>6274<SeP>4971<SeP>825";
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
  const incomingData = "4971<SeP>2124<SeP>2847<SeP>758";
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
  const incomingData = "2098<SeP>1919<SeP>179";
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
  const incomingData = "24<SeP>6<SeP>18<SeP>5";
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
  const incomingData = "19386<SeP>8141<SeP>11245<SeP>1915";
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
  const incomingData = "11245<SeP>6274<SeP>4971<SeP>825";
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
  const incomingData = "4971<SeP>2124<SeP>2847<SeP>758";
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
  const incomingData = "2098<SeP>1919<SeP>179";
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
  const incomingData = "24<SeP>6<SeP>18<SeP>5";
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
  const column1Data  = "IP01 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>126.62.95.172</span>)<SeP>IP03 (<span class=blur>1.14.61.167</span>)<SeP>IP04 (<span class=blur>185.7.214.180</span>)<SeP>IP05 (<span class=blur>220.158.49.7</span>)<SeP>IP06 (<span class=blur>2.57.122.193</span>)<SeP>IP10 (<span class=blur>206.189.33.165</span>)<SeP>IP09 (<span class=blur>165.154.241.160</span>)<SeP>IP08 (<span class=blur>189.152.64.220</span>)<SeP>IP07 (<span class=blur>51.254.138.254</span>)";
  const column2Data  = "AS4609<SeP>AS17676<SeP>AS45090<SeP>AS207566<SeP>AS2519<SeP>AS47890<SeP>AS14061<SeP>AS142002<SeP>AS8151<SeP>AS16276";
  const column3Data  = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-ae\u0022></span>\u00a0United Arab Emirates<SeP><span class=\u0022fi fi-mx\u0022></span>\u00a0Mexico<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France";
  const column4Data  = "758<SeP>337<SeP>326<SeP>324<SeP>288<SeP>285<SeP>248<SeP>248<SeP>248<SeP>248";
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
  const column1Data  = "IP01 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>126.62.95.172</span>)<SeP>IP05 (<span class=blur>220.158.49.7</span>)<SeP>IP14 (<span class=blur>93.127.125.22</span>)<SeP>IP04 (<span class=blur>185.7.214.180</span>)<SeP>IP15 (<span class=blur>27.109.169.15</span>)<SeP>IP16 (<span class=blur>92.255.85.35</span>)<SeP>IP17 (<span class=blur>193.46.217.52</span>)<SeP>IP18 (<span class=blur>141.98.11.205</span>)<SeP>IP19 (<span class=blur>91.149.56.173</span>)";
  const column2Data  = "AS4609<SeP>AS17676<SeP>AS2519<SeP>AS21497<SeP>AS207566<SeP>AS4609<SeP>AS207566<SeP>AS400992<SeP>AS209605<SeP>AS203995";
  const column3Data  = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-lt\u0022></span>\u00a0Lithuania<SeP><span class=\u0022fi fi-no\u0022></span>\u00a0Norway";
  const column4Data  = "758<SeP>337<SeP>288<SeP>196<SeP>162<SeP>136<SeP>130<SeP>124<SeP>115<SeP>106";
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
  const column1Data  = "IP03 (<span class=blur>1.14.61.167</span>)<SeP>IP06 (<span class=blur>2.57.122.193</span>)<SeP>IP10 (<span class=blur>206.189.33.165</span>)<SeP>IP09 (<span class=blur>165.154.241.160</span>)<SeP>IP08 (<span class=blur>189.152.64.220</span>)<SeP>IP07 (<span class=blur>51.254.138.254</span>)<SeP>IP11 (<span class=blur>143.47.106.2</span>)<SeP>IP12 (<span class=blur>128.14.227.10</span>)<SeP>IP13 (<span class=blur>92.255.57.132</span>)<SeP>IP04 (<span class=blur>185.7.214.180</span>)";
  const column2Data  = "AS45090<SeP>AS47890<SeP>AS14061<SeP>AS142002<SeP>AS8151<SeP>AS16276<SeP>AS31898<SeP>AS135377<SeP>AS207566<SeP>AS207566";
  const column3Data  = "<span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-ae\u0022></span>\u00a0United Arab Emirates<SeP><span class=\u0022fi fi-mx\u0022></span>\u00a0Mexico<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  const column4Data  = "308<SeP>284<SeP>247<SeP>247<SeP>247<SeP>247<SeP>234<SeP>215<SeP>210<SeP>162";
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
  const column1Data   = "IP01 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>126.62.95.172</span>)<SeP>IP03 (<span class=blur>1.14.61.167</span>)<SeP>IP04 (<span class=blur>185.7.214.180</span>)<SeP>IP05 (<span class=blur>220.158.49.7</span>)<SeP>IP06 (<span class=blur>2.57.122.193</span>)<SeP>IP10 (<span class=blur>206.189.33.165</span>)<SeP>IP09 (<span class=blur>165.154.241.160</span>)<SeP>IP08 (<span class=blur>189.152.64.220</span>)<SeP>IP07 (<span class=blur>51.254.138.254</span>)";
  const column2Data   = "AS4609<SeP>AS17676<SeP>AS45090<SeP>AS207566<SeP>AS2519<SeP>AS47890<SeP>AS14061<SeP>AS142002<SeP>AS8151<SeP>AS16276";
  const column3Data   = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-ae\u0022></span>\u00a0United Arab Emirates<SeP><span class=\u0022fi fi-mx\u0022></span>\u00a0Mexico<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "758<SeP>337<SeP>326<SeP>324<SeP>288<SeP>285<SeP>248<SeP>248<SeP>248<SeP>248";
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
  const column1Data   = "IP01 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>126.62.95.172</span>)<SeP>IP05 (<span class=blur>220.158.49.7</span>)<SeP>IP14 (<span class=blur>93.127.125.22</span>)<SeP>IP04 (<span class=blur>185.7.214.180</span>)<SeP>IP15 (<span class=blur>27.109.169.15</span>)<SeP>IP16 (<span class=blur>92.255.85.35</span>)<SeP>IP17 (<span class=blur>193.46.217.52</span>)<SeP>IP18 (<span class=blur>141.98.11.205</span>)<SeP>IP19 (<span class=blur>91.149.56.173</span>)";
  const column2Data   = "AS4609<SeP>AS17676<SeP>AS2519<SeP>AS21497<SeP>AS207566<SeP>AS4609<SeP>AS207566<SeP>AS400992<SeP>AS209605<SeP>AS203995";
  const column3Data   = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-lt\u0022></span>\u00a0Lithuania<SeP><span class=\u0022fi fi-no\u0022></span>\u00a0Norway";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "758<SeP>337<SeP>288<SeP>196<SeP>162<SeP>136<SeP>130<SeP>124<SeP>115<SeP>106";
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
  const column1Data   = "IP03 (<span class=blur>1.14.61.167</span>)<SeP>IP06 (<span class=blur>2.57.122.193</span>)<SeP>IP10 (<span class=blur>206.189.33.165</span>)<SeP>IP09 (<span class=blur>165.154.241.160</span>)<SeP>IP08 (<span class=blur>189.152.64.220</span>)<SeP>IP07 (<span class=blur>51.254.138.254</span>)<SeP>IP11 (<span class=blur>143.47.106.2</span>)<SeP>IP12 (<span class=blur>128.14.227.10</span>)<SeP>IP13 (<span class=blur>92.255.57.132</span>)<SeP>IP04 (<span class=blur>185.7.214.180</span>)";
  const column2Data   = "AS45090<SeP>AS47890<SeP>AS14061<SeP>AS142002<SeP>AS8151<SeP>AS16276<SeP>AS31898<SeP>AS135377<SeP>AS207566<SeP>AS207566";
  const column3Data   = "<span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-ae\u0022></span>\u00a0United Arab Emirates<SeP><span class=\u0022fi fi-mx\u0022></span>\u00a0Mexico<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "308<SeP>284<SeP>247<SeP>247<SeP>247<SeP>247<SeP>234<SeP>215<SeP>210<SeP>162";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP><empty> <empty><SeP>system system@123<SeP>teamspeak 1<SeP>teamspeak3 1<SeP>ts 1<SeP>testuser 1<SeP>test 1";
  const column3Data   = "1621<SeP>1615<SeP>252<SeP>86<SeP>65<SeP>64<SeP>63<SeP>62<SeP>62<SeP>60";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae";
  const column2Data  = "1697<SeP>125<SeP>73<SeP>21<SeP>17<SeP>17<SeP>17<SeP>17<SeP>16<SeP>16";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  const column4Data  = "NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA";
  const listLocale   = "en-US";

  column3Data = column3Data.replace(/redir/g, "redirection");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsEnglish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Malware Distribution Site";
  const column2Label = "Count";
  const column1Data  = "http://37.44.238.92<SeP>http://61.215.151.173<SeP>http://45.148.10.136<SeP>http://193.143.1.7<SeP>http://141.98.10.50";
  const column2Data  = "15<SeP>3<SeP>2<SeP>2<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "13546<SeP>5840";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP><empty> <empty><SeP>system system@123<SeP>teamspeak 1<SeP>teamspeak3 1<SeP>ts 1<SeP>testuser 1<SeP>test 1";
  const column3Data   = "1621<SeP>1615<SeP>252<SeP>86<SeP>65<SeP>64<SeP>63<SeP>62<SeP>62<SeP>60";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae";
  const column2Data  = "1697<SeP>125<SeP>73<SeP>21<SeP>17<SeP>17<SeP>17<SeP>17<SeP>16<SeP>16";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  let   column4Data  = "NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA";
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
  const column1Data  = "http://37.44.238.92<SeP>http://61.215.151.173<SeP>http://45.148.10.136<SeP>http://193.143.1.7<SeP>http://141.98.10.50";
  const column2Data  = "15<SeP>3<SeP>2<SeP>2<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "13546<SeP>5840";
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

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// The following functions use the maplibre-gl and maxboxgl-legend JS libraries //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////

function loadMapEnglish() {
  // Process URL parameters
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let mapa = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-week-attacks.geojson" + "?v=" + String(Date.now()); // Map of origin of attacks
  let maps = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-week-scans.geojson" + "?v=" + String(Date.now());   // Map of origin of scans
  let mapt = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-week-traffic.geojson" + "?v=" + String(Date.now()); // Map of origin of traffic
  let vat = urlParams.get("vat");                                  // Visibility of all-traffic layer
  let vas = urlParams.get("vas");                                  // Visibility of all-scans layer
  let vaa = urlParams.get("vaa");                                  // Visibility of all-attacks layer


  if (!vat && !vas && !vaa) vat = "visible";
  if (!vat) vat = "none";
  if (!vas) vas = "none";
  if (!vaa) vaa = "none";
  
  const map = new maplibregl.Map({
    container: "map",                                                                    // container ID
    style: '/scripts/voyager-nolabels-gl-style.json',                                    // map style: light with a touch of color
  //style: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',     // map style: light`
  //style: 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json',  // map style: dark
    zoom: 2,                                                                             // starting zoom
    center: [-25.00, 20.00],                                                             // starting center
    attributionControl: false                                                            // toggle the attribution button off
  });

  document.getElementById('map-title').innerHTML = "Updated 2025-3-12";

  map.addControl(new LegendControl({
    collapsed: true,
    toggler: true,
    highlight: true,
    minimized: true,
    layers: ["all-attacks", "all-scans", "all-traffic"]
    }),
    'bottom-left');
  
  map.on("load", async () => {
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-traffic", {
      type: "geojson",
      data: mapt
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "traffic between 2025-03-05 and 2025-03-11"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2832,50
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
        "name": "scans between 2025-03-05 and 2025-03-11"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2040,37,
          2832,50
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
        "name": "attacks between 2025-03-05 and 2025-03-11"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          859,17,
          2832,50
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
  }, 500); // This timeout should the a bit longer than the  timeout of the page loader
}

function loadMapSpanish() {
  // Process URL parameters
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let mapa = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-week-attacks.geojson" + "?v=" + String(Date.now()); // Map of origin of attacks
  let maps = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-week-scans.geojson" + "?v=" + String(Date.now());   // Map of origin of scans
  let mapt = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-week-traffic.geojson" + "?v=" + String(Date.now()); // Map of origin of traffic
  let vat = urlParams.get("vat");                                  // Visibility of all-traffic layer
  let vas = urlParams.get("vas");                                  // Visibility of all-scans layer
  let vaa = urlParams.get("vaa");                                  // Visibility of all-attacks layer

  if (!vat && !vas && !vaa) vat = "visible";
  if (!vat) vat = "none";
  if (!vas) vas = "none";
  if (!vaa) vaa = "none";
  
  const map = new maplibregl.Map({
    container: "map",                                                                    // container ID
    style: '/scripts/voyager-nolabels-gl-style.json',                                    // map style: light with a touch of color
  //style: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',     // map style: light`
  //style: 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json',  // map style: dark
    zoom: 2,                                                                             // starting zoom
    center: [-25.00, 20.00],                                                             // starting center
    attributionControl: false                                                            // toggle the attribution button off
  });

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-12";

  map.addControl(new LegendControl({
    collapsed: true,
    toggler: true,
    highlight: true,
    minimized: true,
    layers: ["all-attacks", "all-scans", "all-traffic"]
    }),
    'bottom-left');
  
  map.on("load", async () => {
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-traffic", {
      type: "geojson",
      data: mapt
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "tráfico entre 2025-03-05 y 2025-03-11"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2832,50
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
        "name": "escaneos entre 2025-03-05 y 2025-03-11"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2040,37,
          2832,50
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
        "name": "ataques entre 2025-03-05 y 2025-03-11"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          859,17,
          2832,50
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
  }, 500);
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
  const labelsData       = "2025-03-05 00:00:00<SeP>2025-03-05 00:25:03<SeP>2025-03-05 00:50:06<SeP>2025-03-05 01:15:09<SeP>2025-03-05 01:40:12<SeP>2025-03-05 02:05:15<SeP>2025-03-05 02:30:18<SeP>2025-03-05 02:55:21<SeP>2025-03-05 03:20:24<SeP>2025-03-05 03:45:27<SeP>2025-03-05 04:10:30<SeP>2025-03-05 04:35:33<SeP>2025-03-05 05:00:36<SeP>2025-03-05 05:25:39<SeP>2025-03-05 05:50:42<SeP>2025-03-05 06:15:45<SeP>2025-03-05 06:40:48<SeP>2025-03-05 07:05:51<SeP>2025-03-05 07:30:54<SeP>2025-03-05 07:55:57<SeP>2025-03-05 08:21:00<SeP>2025-03-05 08:46:03<SeP>2025-03-05 09:11:06<SeP>2025-03-05 09:36:09<SeP>2025-03-05 10:01:12<SeP>2025-03-05 10:26:15<SeP>2025-03-05 10:51:18<SeP>2025-03-05 11:16:21<SeP>2025-03-05 11:41:24<SeP>2025-03-05 12:06:27<SeP>2025-03-05 12:31:30<SeP>2025-03-05 12:56:33<SeP>2025-03-05 13:21:36<SeP>2025-03-05 13:46:39<SeP>2025-03-05 14:11:42<SeP>2025-03-05 14:36:45<SeP>2025-03-05 15:01:48<SeP>2025-03-05 15:26:51<SeP>2025-03-05 15:51:54<SeP>2025-03-05 16:16:57<SeP>2025-03-05 16:42:00<SeP>2025-03-05 17:07:03<SeP>2025-03-05 17:32:06<SeP>2025-03-05 17:57:09<SeP>2025-03-05 18:22:12<SeP>2025-03-05 18:47:15<SeP>2025-03-05 19:12:18<SeP>2025-03-05 19:37:21<SeP>2025-03-05 20:02:24<SeP>2025-03-05 20:27:27<SeP>2025-03-05 20:52:30<SeP>2025-03-05 21:17:33<SeP>2025-03-05 21:42:36<SeP>2025-03-05 22:07:39<SeP>2025-03-05 22:32:42<SeP>2025-03-05 22:57:45<SeP>2025-03-05 23:22:48<SeP>2025-03-05 23:47:51<SeP>2025-03-06 00:12:54<SeP>2025-03-06 00:37:57<SeP>2025-03-06 01:03:00<SeP>2025-03-06 01:28:03<SeP>2025-03-06 01:53:06<SeP>2025-03-06 02:18:09<SeP>2025-03-06 02:43:12<SeP>2025-03-06 03:08:15<SeP>2025-03-06 03:33:18<SeP>2025-03-06 03:58:21<SeP>2025-03-06 04:23:24<SeP>2025-03-06 04:48:27<SeP>2025-03-06 05:13:30<SeP>2025-03-06 05:38:33<SeP>2025-03-06 06:03:36<SeP>2025-03-06 06:28:39<SeP>2025-03-06 06:53:42<SeP>2025-03-06 07:18:45<SeP>2025-03-06 07:43:48<SeP>2025-03-06 08:08:51<SeP>2025-03-06 08:33:54<SeP>2025-03-06 08:58:57<SeP>2025-03-06 09:24:00<SeP>2025-03-06 09:49:03<SeP>2025-03-06 10:14:06<SeP>2025-03-06 10:39:09<SeP>2025-03-06 11:04:12<SeP>2025-03-06 11:29:15<SeP>2025-03-06 11:54:18<SeP>2025-03-06 12:19:21<SeP>2025-03-06 12:44:24<SeP>2025-03-06 13:09:27<SeP>2025-03-06 13:34:30<SeP>2025-03-06 13:59:33<SeP>2025-03-06 14:24:36<SeP>2025-03-06 14:49:39<SeP>2025-03-06 15:14:42<SeP>2025-03-06 15:39:45<SeP>2025-03-06 16:04:48<SeP>2025-03-06 16:29:51<SeP>2025-03-06 16:54:54<SeP>2025-03-06 17:19:57<SeP>2025-03-06 17:45:00<SeP>2025-03-06 18:10:03<SeP>2025-03-06 18:35:06<SeP>2025-03-06 19:00:09<SeP>2025-03-06 19:25:12<SeP>2025-03-06 19:50:15<SeP>2025-03-06 20:15:18<SeP>2025-03-06 20:40:21<SeP>2025-03-06 21:05:24<SeP>2025-03-06 21:30:27<SeP>2025-03-06 21:55:30<SeP>2025-03-06 22:20:33<SeP>2025-03-06 22:45:36<SeP>2025-03-06 23:10:39<SeP>2025-03-06 23:35:42<SeP>2025-03-07 00:00:45<SeP>2025-03-07 00:25:48<SeP>2025-03-07 00:50:51<SeP>2025-03-07 01:15:54<SeP>2025-03-07 01:40:57<SeP>2025-03-07 02:06:00<SeP>2025-03-07 02:31:03<SeP>2025-03-07 02:56:06<SeP>2025-03-07 03:21:09<SeP>2025-03-07 03:46:12<SeP>2025-03-07 04:11:15<SeP>2025-03-07 04:36:18<SeP>2025-03-07 05:01:21<SeP>2025-03-07 05:26:24<SeP>2025-03-07 05:51:27<SeP>2025-03-07 06:16:30<SeP>2025-03-07 06:41:33<SeP>2025-03-07 07:06:36<SeP>2025-03-07 07:31:39<SeP>2025-03-07 07:56:42<SeP>2025-03-07 08:21:45<SeP>2025-03-07 08:46:48<SeP>2025-03-07 09:11:51<SeP>2025-03-07 09:36:54<SeP>2025-03-07 10:01:57<SeP>2025-03-07 10:27:00<SeP>2025-03-07 10:52:03<SeP>2025-03-07 11:17:06<SeP>2025-03-07 11:42:09<SeP>2025-03-07 12:07:12<SeP>2025-03-07 12:32:15<SeP>2025-03-07 12:57:18<SeP>2025-03-07 13:22:21<SeP>2025-03-07 13:47:24<SeP>2025-03-07 14:12:27<SeP>2025-03-07 14:37:30<SeP>2025-03-07 15:02:33<SeP>2025-03-07 15:27:36<SeP>2025-03-07 15:52:39<SeP>2025-03-07 16:17:42<SeP>2025-03-07 16:42:45<SeP>2025-03-07 17:07:48<SeP>2025-03-07 17:32:51<SeP>2025-03-07 17:57:54<SeP>2025-03-07 18:22:57<SeP>2025-03-07 18:48:00<SeP>2025-03-07 19:13:03<SeP>2025-03-07 19:38:06<SeP>2025-03-07 20:03:09<SeP>2025-03-07 20:28:12<SeP>2025-03-07 20:53:15<SeP>2025-03-07 21:18:18<SeP>2025-03-07 21:43:21<SeP>2025-03-07 22:08:24<SeP>2025-03-07 22:33:27<SeP>2025-03-07 22:58:30<SeP>2025-03-07 23:23:33<SeP>2025-03-07 23:48:36<SeP>2025-03-08 00:13:39<SeP>2025-03-08 00:38:42<SeP>2025-03-08 01:03:45<SeP>2025-03-08 01:28:48<SeP>2025-03-08 01:53:51<SeP>2025-03-08 02:18:54<SeP>2025-03-08 02:43:57<SeP>2025-03-08 03:09:00<SeP>2025-03-08 03:34:03<SeP>2025-03-08 03:59:06<SeP>2025-03-08 04:24:09<SeP>2025-03-08 04:49:12<SeP>2025-03-08 05:14:15<SeP>2025-03-08 05:39:18<SeP>2025-03-08 06:04:21<SeP>2025-03-08 06:29:24<SeP>2025-03-08 06:54:27<SeP>2025-03-08 07:19:30<SeP>2025-03-08 07:44:33<SeP>2025-03-08 08:09:36<SeP>2025-03-08 08:34:39<SeP>2025-03-08 08:59:42<SeP>2025-03-08 09:24:45<SeP>2025-03-08 09:49:48<SeP>2025-03-08 10:14:51<SeP>2025-03-08 10:39:54<SeP>2025-03-08 11:04:57<SeP>2025-03-08 11:30:00<SeP>2025-03-08 11:55:03<SeP>2025-03-08 12:20:06<SeP>2025-03-08 12:45:09<SeP>2025-03-08 13:10:12<SeP>2025-03-08 13:35:15<SeP>2025-03-08 14:00:18<SeP>2025-03-08 14:25:21<SeP>2025-03-08 14:50:24<SeP>2025-03-08 15:15:27<SeP>2025-03-08 15:40:30<SeP>2025-03-08 16:05:33<SeP>2025-03-08 16:30:36<SeP>2025-03-08 16:55:39<SeP>2025-03-08 17:20:42<SeP>2025-03-08 17:45:45<SeP>2025-03-08 18:10:48<SeP>2025-03-08 18:35:51<SeP>2025-03-08 19:00:54<SeP>2025-03-08 19:25:57<SeP>2025-03-08 19:51:00<SeP>2025-03-08 20:16:03<SeP>2025-03-08 20:41:06<SeP>2025-03-08 21:06:09<SeP>2025-03-08 21:31:12<SeP>2025-03-08 21:56:15<SeP>2025-03-08 22:21:18<SeP>2025-03-08 22:46:21<SeP>2025-03-08 23:11:24<SeP>2025-03-08 23:36:27<SeP>2025-03-09 00:01:30<SeP>2025-03-09 00:26:33<SeP>2025-03-09 00:51:36<SeP>2025-03-09 01:16:39<SeP>2025-03-09 01:41:42<SeP>2025-03-09 03:06:45<SeP>2025-03-09 03:31:48<SeP>2025-03-09 03:56:51<SeP>2025-03-09 04:21:54<SeP>2025-03-09 04:46:57<SeP>2025-03-09 05:12:00<SeP>2025-03-09 05:37:03<SeP>2025-03-09 06:02:06<SeP>2025-03-09 06:27:09<SeP>2025-03-09 06:52:12<SeP>2025-03-09 07:17:15<SeP>2025-03-09 07:42:18<SeP>2025-03-09 08:07:21<SeP>2025-03-09 08:32:24<SeP>2025-03-09 08:57:27<SeP>2025-03-09 09:22:30<SeP>2025-03-09 09:47:33<SeP>2025-03-09 10:12:36<SeP>2025-03-09 10:37:39<SeP>2025-03-09 11:02:42<SeP>2025-03-09 11:27:45<SeP>2025-03-09 11:52:48<SeP>2025-03-09 12:17:51<SeP>2025-03-09 12:42:54<SeP>2025-03-09 13:07:57<SeP>2025-03-09 13:33:00<SeP>2025-03-09 13:58:03<SeP>2025-03-09 14:23:06<SeP>2025-03-09 14:48:09<SeP>2025-03-09 15:13:12<SeP>2025-03-09 15:38:15<SeP>2025-03-09 16:03:18<SeP>2025-03-09 16:28:21<SeP>2025-03-09 16:53:24<SeP>2025-03-09 17:18:27<SeP>2025-03-09 17:43:30<SeP>2025-03-09 18:08:33<SeP>2025-03-09 18:33:36<SeP>2025-03-09 18:58:39<SeP>2025-03-09 19:23:42<SeP>2025-03-09 19:48:45<SeP>2025-03-09 20:13:48<SeP>2025-03-09 20:38:51<SeP>2025-03-09 21:03:54<SeP>2025-03-09 21:28:57<SeP>2025-03-09 21:54:00<SeP>2025-03-09 22:19:03<SeP>2025-03-09 22:44:06<SeP>2025-03-09 23:09:09<SeP>2025-03-09 23:34:12<SeP>2025-03-09 23:59:15<SeP>2025-03-10 00:24:18<SeP>2025-03-10 00:49:21<SeP>2025-03-10 01:14:24<SeP>2025-03-10 01:39:27<SeP>2025-03-10 02:04:30<SeP>2025-03-10 02:29:33<SeP>2025-03-10 02:54:36<SeP>2025-03-10 03:19:39<SeP>2025-03-10 03:44:42<SeP>2025-03-10 04:09:45<SeP>2025-03-10 04:34:48<SeP>2025-03-10 04:59:51<SeP>2025-03-10 05:24:54<SeP>2025-03-10 05:49:57<SeP>2025-03-10 06:15:00<SeP>2025-03-10 06:40:03<SeP>2025-03-10 07:05:06<SeP>2025-03-10 07:30:09<SeP>2025-03-10 07:55:12<SeP>2025-03-10 08:20:15<SeP>2025-03-10 08:45:18<SeP>2025-03-10 09:10:21<SeP>2025-03-10 09:35:24<SeP>2025-03-10 10:00:27<SeP>2025-03-10 10:25:30<SeP>2025-03-10 10:50:33<SeP>2025-03-10 11:15:36<SeP>2025-03-10 11:40:39<SeP>2025-03-10 12:05:42<SeP>2025-03-10 12:30:45<SeP>2025-03-10 12:55:48<SeP>2025-03-10 13:20:51<SeP>2025-03-10 13:45:54<SeP>2025-03-10 14:10:57<SeP>2025-03-10 14:36:00<SeP>2025-03-10 15:01:03<SeP>2025-03-10 15:26:06<SeP>2025-03-10 15:51:09<SeP>2025-03-10 16:16:12<SeP>2025-03-10 16:41:15<SeP>2025-03-10 17:06:18<SeP>2025-03-10 17:31:21<SeP>2025-03-10 17:56:24<SeP>2025-03-10 18:21:27<SeP>2025-03-10 18:46:30<SeP>2025-03-10 19:11:33<SeP>2025-03-10 19:36:36<SeP>2025-03-10 20:01:39<SeP>2025-03-10 20:26:42<SeP>2025-03-10 20:51:45<SeP>2025-03-10 21:16:48<SeP>2025-03-10 21:41:51<SeP>2025-03-10 22:06:54<SeP>2025-03-10 22:31:57<SeP>2025-03-10 22:57:00<SeP>2025-03-10 23:22:03<SeP>2025-03-10 23:47:06<SeP>2025-03-11 00:12:09<SeP>2025-03-11 00:37:12<SeP>2025-03-11 01:02:15<SeP>2025-03-11 01:27:18<SeP>2025-03-11 01:52:21<SeP>2025-03-11 02:17:24<SeP>2025-03-11 02:42:27<SeP>2025-03-11 03:07:30<SeP>2025-03-11 03:32:33<SeP>2025-03-11 03:57:36<SeP>2025-03-11 04:22:39<SeP>2025-03-11 04:47:42<SeP>2025-03-11 05:12:45<SeP>2025-03-11 05:37:48<SeP>2025-03-11 06:02:51<SeP>2025-03-11 06:27:54<SeP>2025-03-11 06:52:57<SeP>2025-03-11 07:18:00<SeP>2025-03-11 07:43:03<SeP>2025-03-11 08:08:06<SeP>2025-03-11 08:33:09<SeP>2025-03-11 08:58:12<SeP>2025-03-11 09:23:15<SeP>2025-03-11 09:48:18<SeP>2025-03-11 10:13:21<SeP>2025-03-11 10:38:24<SeP>2025-03-11 11:03:27<SeP>2025-03-11 11:28:30<SeP>2025-03-11 11:53:33<SeP>2025-03-11 12:18:36<SeP>2025-03-11 12:43:39<SeP>2025-03-11 13:08:42<SeP>2025-03-11 13:33:45<SeP>2025-03-11 13:58:48<SeP>2025-03-11 14:23:51<SeP>2025-03-11 14:48:54<SeP>2025-03-11 15:13:57<SeP>2025-03-11 15:39:00<SeP>2025-03-11 16:04:03<SeP>2025-03-11 16:29:06<SeP>2025-03-11 16:54:09<SeP>2025-03-11 17:19:12<SeP>2025-03-11 17:44:15<SeP>2025-03-11 18:09:18<SeP>2025-03-11 18:34:21<SeP>2025-03-11 18:59:24<SeP>2025-03-11 19:24:27<SeP>2025-03-11 19:49:30<SeP>2025-03-11 20:14:33<SeP>2025-03-11 20:39:36<SeP>2025-03-11 21:04:39<SeP>2025-03-11 21:29:42<SeP>2025-03-11 21:54:45<SeP>2025-03-11 22:19:48<SeP>2025-03-11 22:44:51<SeP>2025-03-11 23:09:54<SeP>2025-03-11 23:34:57";
  const item1Label       = "Scans";
  const item1Data        = "11<SeP>9<SeP>56<SeP>28<SeP>9<SeP>6<SeP>10<SeP>5<SeP>2<SeP>3<SeP>2<SeP>88<SeP>4<SeP>19<SeP>8<SeP>5<SeP>7<SeP>1<SeP>10<SeP>11<SeP>10<SeP>11<SeP>8<SeP>12<SeP>7<SeP>28<SeP>6<SeP>23<SeP>10<SeP>13<SeP>8<SeP>21<SeP>12<SeP>10<SeP>6<SeP>10<SeP>13<SeP>44<SeP>34<SeP>5<SeP>16<SeP>22<SeP>21<SeP>33<SeP>9<SeP>57<SeP>28<SeP>34<SeP>11<SeP>13<SeP>42<SeP>20<SeP>19<SeP>10<SeP>11<SeP>8<SeP>12<SeP>13<SeP>14<SeP>26<SeP>15<SeP>17<SeP>11<SeP>5<SeP>17<SeP>4<SeP>6<SeP>5<SeP>29<SeP>11<SeP>2<SeP>21<SeP>41<SeP>47<SeP>9<SeP>9<SeP>10<SeP>16<SeP>88<SeP>8<SeP>13<SeP>11<SeP>9<SeP>7<SeP>12<SeP>10<SeP>40<SeP>23<SeP>5<SeP>11<SeP>20<SeP>133<SeP>5<SeP>8<SeP>34<SeP>10<SeP>8<SeP>12<SeP>7<SeP>6<SeP>35<SeP>13<SeP>8<SeP>16<SeP>14<SeP>11<SeP>9<SeP>7<SeP>20<SeP>26<SeP>7<SeP>10<SeP>18<SeP>31<SeP>51<SeP>52<SeP>211<SeP>120<SeP>23<SeP>12<SeP>9<SeP>8<SeP>10<SeP>5<SeP>4<SeP>3<SeP>25<SeP>10<SeP>7<SeP>4<SeP>7<SeP>1<SeP>4<SeP>5<SeP>6<SeP>10<SeP>20<SeP>11<SeP>10<SeP>6<SeP>12<SeP>8<SeP>9<SeP>17<SeP>10<SeP>9<SeP>31<SeP>12<SeP>6<SeP>8<SeP>46<SeP>15<SeP>8<SeP>44<SeP>8<SeP>9<SeP>19<SeP>50<SeP>88<SeP>26<SeP>19<SeP>21<SeP>13<SeP>20<SeP>19<SeP>16<SeP>11<SeP>10<SeP>31<SeP>91<SeP>123<SeP>117<SeP>7<SeP>29<SeP>8<SeP>9<SeP>15<SeP>12<SeP>14<SeP>22<SeP>26<SeP>35<SeP>11<SeP>133<SeP>92<SeP>15<SeP>23<SeP>58<SeP>42<SeP>8<SeP>24<SeP>18<SeP>125<SeP>32<SeP>10<SeP>13<SeP>7<SeP>14<SeP>17<SeP>11<SeP>15<SeP>5<SeP>6<SeP>29<SeP>9<SeP>11<SeP>33<SeP>9<SeP>5<SeP>14<SeP>9<SeP>9<SeP>12<SeP>36<SeP>7<SeP>10<SeP>14<SeP>8<SeP>9<SeP>10<SeP>17<SeP>13<SeP>15<SeP>8<SeP>10<SeP>6<SeP>35<SeP>6<SeP>3<SeP>7<SeP>3<SeP>4<SeP>6<SeP>3<SeP>5<SeP>22<SeP>18<SeP>25<SeP>24<SeP>16<SeP>6<SeP>6<SeP>17<SeP>6<SeP>57<SeP>14<SeP>7<SeP>14<SeP>13<SeP>12<SeP>19<SeP>15<SeP>12<SeP>33<SeP>8<SeP>10<SeP>7<SeP>12<SeP>10<SeP>29<SeP>11<SeP>5<SeP>11<SeP>8<SeP>3<SeP>38<SeP>0<SeP>13<SeP>11<SeP>3<SeP>5<SeP>8<SeP>8<SeP>5<SeP>1<SeP>17<SeP>3<SeP>9<SeP>4<SeP>13<SeP>5<SeP>3<SeP>88<SeP>17<SeP>8<SeP>7<SeP>4<SeP>7<SeP>6<SeP>9<SeP>5<SeP>14<SeP>15<SeP>757<SeP>9<SeP>27<SeP>13<SeP>7<SeP>7<SeP>13<SeP>38<SeP>19<SeP>16<SeP>24<SeP>22<SeP>19<SeP>19<SeP>9<SeP>54<SeP>25<SeP>17<SeP>49<SeP>12<SeP>20<SeP>46<SeP>16<SeP>19<SeP>14<SeP>13<SeP>39<SeP>10<SeP>11<SeP>5<SeP>0<SeP>8<SeP>9<SeP>6<SeP>2<SeP>3<SeP>0<SeP>24<SeP>7<SeP>0<SeP>18<SeP>10<SeP>26<SeP>79<SeP>47<SeP>23<SeP>10<SeP>23<SeP>34<SeP>8<SeP>11<SeP>13<SeP>36<SeP>27<SeP>14<SeP>10<SeP>41<SeP>7<SeP>3<SeP>26<SeP>10<SeP>3<SeP>4<SeP>55<SeP>45<SeP>5<SeP>3<SeP>8<SeP>3<SeP>3<SeP>1<SeP>9<SeP>11<SeP>12<SeP>14<SeP>11<SeP>14<SeP>11<SeP>54<SeP>31<SeP>11<SeP>8<SeP>65<SeP>39<SeP>14<SeP>26<SeP>2<SeP>17<SeP>5<SeP>6<SeP>26<SeP>6<SeP>10<SeP>7<SeP>14<SeP>7<SeP>23<SeP>22<SeP>7<SeP>3<SeP>29<SeP>7<SeP>12<SeP>12<SeP>7<SeP>9<SeP>15";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "19<SeP>40<SeP>60<SeP>10<SeP>23<SeP>5<SeP>69<SeP>50<SeP>10<SeP>15<SeP>12<SeP>5<SeP>9<SeP>49<SeP>49<SeP>4<SeP>2<SeP>2<SeP>15<SeP>48<SeP>8<SeP>1<SeP>19<SeP>6<SeP>9<SeP>5<SeP>7<SeP>8<SeP>12<SeP>5<SeP>5<SeP>5<SeP>11<SeP>11<SeP>7<SeP>7<SeP>86<SeP>129<SeP>76<SeP>14<SeP>9<SeP>36<SeP>4<SeP>2<SeP>5<SeP>37<SeP>21<SeP>61<SeP>20<SeP>12<SeP>52<SeP>31<SeP>67<SeP>76<SeP>6<SeP>10<SeP>11<SeP>13<SeP>59<SeP>6<SeP>9<SeP>9<SeP>2<SeP>3<SeP>9<SeP>1<SeP>3<SeP>26<SeP>66<SeP>38<SeP>24<SeP>49<SeP>57<SeP>3<SeP>6<SeP>27<SeP>24<SeP>66<SeP>75<SeP>25<SeP>15<SeP>10<SeP>11<SeP>8<SeP>36<SeP>46<SeP>19<SeP>11<SeP>11<SeP>12<SeP>34<SeP>30<SeP>6<SeP>5<SeP>12<SeP>8<SeP>44<SeP>62<SeP>8<SeP>3<SeP>8<SeP>7<SeP>8<SeP>39<SeP>50<SeP>65<SeP>6<SeP>14<SeP>12<SeP>11<SeP>10<SeP>68<SeP>58<SeP>16<SeP>18<SeP>6<SeP>7<SeP>24<SeP>78<SeP>64<SeP>6<SeP>5<SeP>16<SeP>11<SeP>9<SeP>22<SeP>68<SeP>48<SeP>100<SeP>170<SeP>151<SeP>137<SeP>42<SeP>44<SeP>28<SeP>14<SeP>22<SeP>11<SeP>9<SeP>29<SeP>35<SeP>34<SeP>32<SeP>23<SeP>8<SeP>117<SeP>8<SeP>8<SeP>8<SeP>7<SeP>11<SeP>9<SeP>10<SeP>8<SeP>9<SeP>11<SeP>17<SeP>5<SeP>35<SeP>62<SeP>15<SeP>3<SeP>6<SeP>32<SeP>6<SeP>9<SeP>28<SeP>31<SeP>25<SeP>8<SeP>32<SeP>42<SeP>19<SeP>6<SeP>18<SeP>20<SeP>39<SeP>98<SeP>77<SeP>18<SeP>12<SeP>19<SeP>7<SeP>6<SeP>4<SeP>4<SeP>3<SeP>4<SeP>4<SeP>1<SeP>4<SeP>3<SeP>1<SeP>22<SeP>71<SeP>51<SeP>40<SeP>61<SeP>19<SeP>19<SeP>10<SeP>11<SeP>5<SeP>8<SeP>6<SeP>39<SeP>25<SeP>5<SeP>0<SeP>3<SeP>3<SeP>2<SeP>15<SeP>4<SeP>3<SeP>2<SeP>8<SeP>3<SeP>4<SeP>7<SeP>4<SeP>56<SeP>12<SeP>61<SeP>155<SeP>48<SeP>24<SeP>17<SeP>16<SeP>8<SeP>5<SeP>6<SeP>10<SeP>10<SeP>73<SeP>67<SeP>8<SeP>10<SeP>64<SeP>32<SeP>4<SeP>2<SeP>3<SeP>5<SeP>1<SeP>3<SeP>4<SeP>3<SeP>5<SeP>10<SeP>5<SeP>8<SeP>4<SeP>23<SeP>35<SeP>20<SeP>23<SeP>8<SeP>5<SeP>5<SeP>4<SeP>10<SeP>32<SeP>5<SeP>7<SeP>221<SeP>29<SeP>23<SeP>24<SeP>15<SeP>7<SeP>10<SeP>3<SeP>6<SeP>6<SeP>2<SeP>2<SeP>2<SeP>17<SeP>12<SeP>3<SeP>7<SeP>4<SeP>253<SeP>236<SeP>7<SeP>10<SeP>48<SeP>43<SeP>43<SeP>253<SeP>17<SeP>253<SeP>15<SeP>11<SeP>277<SeP>40<SeP>11<SeP>6<SeP>5<SeP>7<SeP>10<SeP>18<SeP>7<SeP>8<SeP>26<SeP>39<SeP>37<SeP>18<SeP>8<SeP>6<SeP>6<SeP>11<SeP>13<SeP>14<SeP>8<SeP>44<SeP>35<SeP>39<SeP>17<SeP>9<SeP>17<SeP>4<SeP>6<SeP>26<SeP>40<SeP>43<SeP>9<SeP>7<SeP>7<SeP>6<SeP>7<SeP>6<SeP>7<SeP>13<SeP>107<SeP>172<SeP>67<SeP>56<SeP>47<SeP>29<SeP>9<SeP>61<SeP>169<SeP>64<SeP>8<SeP>13<SeP>5<SeP>2<SeP>22<SeP>30<SeP>34<SeP>41<SeP>1<SeP>2<SeP>3<SeP>16<SeP>6<SeP>4<SeP>88<SeP>110<SeP>18<SeP>8<SeP>8<SeP>6<SeP>7<SeP>15<SeP>5<SeP>3<SeP>6<SeP>6<SeP>50<SeP>99<SeP>25<SeP>1<SeP>1<SeP>31<SeP>67<SeP>97<SeP>88<SeP>301<SeP>39<SeP>20<SeP>26<SeP>35<SeP>14<SeP>7<SeP>4<SeP>15<SeP>3<SeP>14<SeP>11<SeP>7<SeP>16<SeP>15<SeP>7<SeP>2<SeP>62<SeP>94<SeP>31";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-03-05 00:00:00<SeP>2025-03-05 00:25:03<SeP>2025-03-05 00:50:06<SeP>2025-03-05 01:15:09<SeP>2025-03-05 01:40:12<SeP>2025-03-05 02:05:15<SeP>2025-03-05 02:30:18<SeP>2025-03-05 02:55:21<SeP>2025-03-05 03:20:24<SeP>2025-03-05 03:45:27<SeP>2025-03-05 04:10:30<SeP>2025-03-05 04:35:33<SeP>2025-03-05 05:00:36<SeP>2025-03-05 05:25:39<SeP>2025-03-05 05:50:42<SeP>2025-03-05 06:15:45<SeP>2025-03-05 06:40:48<SeP>2025-03-05 07:05:51<SeP>2025-03-05 07:30:54<SeP>2025-03-05 07:55:57<SeP>2025-03-05 08:21:00<SeP>2025-03-05 08:46:03<SeP>2025-03-05 09:11:06<SeP>2025-03-05 09:36:09<SeP>2025-03-05 10:01:12<SeP>2025-03-05 10:26:15<SeP>2025-03-05 10:51:18<SeP>2025-03-05 11:16:21<SeP>2025-03-05 11:41:24<SeP>2025-03-05 12:06:27<SeP>2025-03-05 12:31:30<SeP>2025-03-05 12:56:33<SeP>2025-03-05 13:21:36<SeP>2025-03-05 13:46:39<SeP>2025-03-05 14:11:42<SeP>2025-03-05 14:36:45<SeP>2025-03-05 15:01:48<SeP>2025-03-05 15:26:51<SeP>2025-03-05 15:51:54<SeP>2025-03-05 16:16:57<SeP>2025-03-05 16:42:00<SeP>2025-03-05 17:07:03<SeP>2025-03-05 17:32:06<SeP>2025-03-05 17:57:09<SeP>2025-03-05 18:22:12<SeP>2025-03-05 18:47:15<SeP>2025-03-05 19:12:18<SeP>2025-03-05 19:37:21<SeP>2025-03-05 20:02:24<SeP>2025-03-05 20:27:27<SeP>2025-03-05 20:52:30<SeP>2025-03-05 21:17:33<SeP>2025-03-05 21:42:36<SeP>2025-03-05 22:07:39<SeP>2025-03-05 22:32:42<SeP>2025-03-05 22:57:45<SeP>2025-03-05 23:22:48<SeP>2025-03-05 23:47:51<SeP>2025-03-06 00:12:54<SeP>2025-03-06 00:37:57<SeP>2025-03-06 01:03:00<SeP>2025-03-06 01:28:03<SeP>2025-03-06 01:53:06<SeP>2025-03-06 02:18:09<SeP>2025-03-06 02:43:12<SeP>2025-03-06 03:08:15<SeP>2025-03-06 03:33:18<SeP>2025-03-06 03:58:21<SeP>2025-03-06 04:23:24<SeP>2025-03-06 04:48:27<SeP>2025-03-06 05:13:30<SeP>2025-03-06 05:38:33<SeP>2025-03-06 06:03:36<SeP>2025-03-06 06:28:39<SeP>2025-03-06 06:53:42<SeP>2025-03-06 07:18:45<SeP>2025-03-06 07:43:48<SeP>2025-03-06 08:08:51<SeP>2025-03-06 08:33:54<SeP>2025-03-06 08:58:57<SeP>2025-03-06 09:24:00<SeP>2025-03-06 09:49:03<SeP>2025-03-06 10:14:06<SeP>2025-03-06 10:39:09<SeP>2025-03-06 11:04:12<SeP>2025-03-06 11:29:15<SeP>2025-03-06 11:54:18<SeP>2025-03-06 12:19:21<SeP>2025-03-06 12:44:24<SeP>2025-03-06 13:09:27<SeP>2025-03-06 13:34:30<SeP>2025-03-06 13:59:33<SeP>2025-03-06 14:24:36<SeP>2025-03-06 14:49:39<SeP>2025-03-06 15:14:42<SeP>2025-03-06 15:39:45<SeP>2025-03-06 16:04:48<SeP>2025-03-06 16:29:51<SeP>2025-03-06 16:54:54<SeP>2025-03-06 17:19:57<SeP>2025-03-06 17:45:00<SeP>2025-03-06 18:10:03<SeP>2025-03-06 18:35:06<SeP>2025-03-06 19:00:09<SeP>2025-03-06 19:25:12<SeP>2025-03-06 19:50:15<SeP>2025-03-06 20:15:18<SeP>2025-03-06 20:40:21<SeP>2025-03-06 21:05:24<SeP>2025-03-06 21:30:27<SeP>2025-03-06 21:55:30<SeP>2025-03-06 22:20:33<SeP>2025-03-06 22:45:36<SeP>2025-03-06 23:10:39<SeP>2025-03-06 23:35:42<SeP>2025-03-07 00:00:45<SeP>2025-03-07 00:25:48<SeP>2025-03-07 00:50:51<SeP>2025-03-07 01:15:54<SeP>2025-03-07 01:40:57<SeP>2025-03-07 02:06:00<SeP>2025-03-07 02:31:03<SeP>2025-03-07 02:56:06<SeP>2025-03-07 03:21:09<SeP>2025-03-07 03:46:12<SeP>2025-03-07 04:11:15<SeP>2025-03-07 04:36:18<SeP>2025-03-07 05:01:21<SeP>2025-03-07 05:26:24<SeP>2025-03-07 05:51:27<SeP>2025-03-07 06:16:30<SeP>2025-03-07 06:41:33<SeP>2025-03-07 07:06:36<SeP>2025-03-07 07:31:39<SeP>2025-03-07 07:56:42<SeP>2025-03-07 08:21:45<SeP>2025-03-07 08:46:48<SeP>2025-03-07 09:11:51<SeP>2025-03-07 09:36:54<SeP>2025-03-07 10:01:57<SeP>2025-03-07 10:27:00<SeP>2025-03-07 10:52:03<SeP>2025-03-07 11:17:06<SeP>2025-03-07 11:42:09<SeP>2025-03-07 12:07:12<SeP>2025-03-07 12:32:15<SeP>2025-03-07 12:57:18<SeP>2025-03-07 13:22:21<SeP>2025-03-07 13:47:24<SeP>2025-03-07 14:12:27<SeP>2025-03-07 14:37:30<SeP>2025-03-07 15:02:33<SeP>2025-03-07 15:27:36<SeP>2025-03-07 15:52:39<SeP>2025-03-07 16:17:42<SeP>2025-03-07 16:42:45<SeP>2025-03-07 17:07:48<SeP>2025-03-07 17:32:51<SeP>2025-03-07 17:57:54<SeP>2025-03-07 18:22:57<SeP>2025-03-07 18:48:00<SeP>2025-03-07 19:13:03<SeP>2025-03-07 19:38:06<SeP>2025-03-07 20:03:09<SeP>2025-03-07 20:28:12<SeP>2025-03-07 20:53:15<SeP>2025-03-07 21:18:18<SeP>2025-03-07 21:43:21<SeP>2025-03-07 22:08:24<SeP>2025-03-07 22:33:27<SeP>2025-03-07 22:58:30<SeP>2025-03-07 23:23:33<SeP>2025-03-07 23:48:36<SeP>2025-03-08 00:13:39<SeP>2025-03-08 00:38:42<SeP>2025-03-08 01:03:45<SeP>2025-03-08 01:28:48<SeP>2025-03-08 01:53:51<SeP>2025-03-08 02:18:54<SeP>2025-03-08 02:43:57<SeP>2025-03-08 03:09:00<SeP>2025-03-08 03:34:03<SeP>2025-03-08 03:59:06<SeP>2025-03-08 04:24:09<SeP>2025-03-08 04:49:12<SeP>2025-03-08 05:14:15<SeP>2025-03-08 05:39:18<SeP>2025-03-08 06:04:21<SeP>2025-03-08 06:29:24<SeP>2025-03-08 06:54:27<SeP>2025-03-08 07:19:30<SeP>2025-03-08 07:44:33<SeP>2025-03-08 08:09:36<SeP>2025-03-08 08:34:39<SeP>2025-03-08 08:59:42<SeP>2025-03-08 09:24:45<SeP>2025-03-08 09:49:48<SeP>2025-03-08 10:14:51<SeP>2025-03-08 10:39:54<SeP>2025-03-08 11:04:57<SeP>2025-03-08 11:30:00<SeP>2025-03-08 11:55:03<SeP>2025-03-08 12:20:06<SeP>2025-03-08 12:45:09<SeP>2025-03-08 13:10:12<SeP>2025-03-08 13:35:15<SeP>2025-03-08 14:00:18<SeP>2025-03-08 14:25:21<SeP>2025-03-08 14:50:24<SeP>2025-03-08 15:15:27<SeP>2025-03-08 15:40:30<SeP>2025-03-08 16:05:33<SeP>2025-03-08 16:30:36<SeP>2025-03-08 16:55:39<SeP>2025-03-08 17:20:42<SeP>2025-03-08 17:45:45<SeP>2025-03-08 18:10:48<SeP>2025-03-08 18:35:51<SeP>2025-03-08 19:00:54<SeP>2025-03-08 19:25:57<SeP>2025-03-08 19:51:00<SeP>2025-03-08 20:16:03<SeP>2025-03-08 20:41:06<SeP>2025-03-08 21:06:09<SeP>2025-03-08 21:31:12<SeP>2025-03-08 21:56:15<SeP>2025-03-08 22:21:18<SeP>2025-03-08 22:46:21<SeP>2025-03-08 23:11:24<SeP>2025-03-08 23:36:27<SeP>2025-03-09 00:01:30<SeP>2025-03-09 00:26:33<SeP>2025-03-09 00:51:36<SeP>2025-03-09 01:16:39<SeP>2025-03-09 01:41:42<SeP>2025-03-09 03:06:45<SeP>2025-03-09 03:31:48<SeP>2025-03-09 03:56:51<SeP>2025-03-09 04:21:54<SeP>2025-03-09 04:46:57<SeP>2025-03-09 05:12:00<SeP>2025-03-09 05:37:03<SeP>2025-03-09 06:02:06<SeP>2025-03-09 06:27:09<SeP>2025-03-09 06:52:12<SeP>2025-03-09 07:17:15<SeP>2025-03-09 07:42:18<SeP>2025-03-09 08:07:21<SeP>2025-03-09 08:32:24<SeP>2025-03-09 08:57:27<SeP>2025-03-09 09:22:30<SeP>2025-03-09 09:47:33<SeP>2025-03-09 10:12:36<SeP>2025-03-09 10:37:39<SeP>2025-03-09 11:02:42<SeP>2025-03-09 11:27:45<SeP>2025-03-09 11:52:48<SeP>2025-03-09 12:17:51<SeP>2025-03-09 12:42:54<SeP>2025-03-09 13:07:57<SeP>2025-03-09 13:33:00<SeP>2025-03-09 13:58:03<SeP>2025-03-09 14:23:06<SeP>2025-03-09 14:48:09<SeP>2025-03-09 15:13:12<SeP>2025-03-09 15:38:15<SeP>2025-03-09 16:03:18<SeP>2025-03-09 16:28:21<SeP>2025-03-09 16:53:24<SeP>2025-03-09 17:18:27<SeP>2025-03-09 17:43:30<SeP>2025-03-09 18:08:33<SeP>2025-03-09 18:33:36<SeP>2025-03-09 18:58:39<SeP>2025-03-09 19:23:42<SeP>2025-03-09 19:48:45<SeP>2025-03-09 20:13:48<SeP>2025-03-09 20:38:51<SeP>2025-03-09 21:03:54<SeP>2025-03-09 21:28:57<SeP>2025-03-09 21:54:00<SeP>2025-03-09 22:19:03<SeP>2025-03-09 22:44:06<SeP>2025-03-09 23:09:09<SeP>2025-03-09 23:34:12<SeP>2025-03-09 23:59:15<SeP>2025-03-10 00:24:18<SeP>2025-03-10 00:49:21<SeP>2025-03-10 01:14:24<SeP>2025-03-10 01:39:27<SeP>2025-03-10 02:04:30<SeP>2025-03-10 02:29:33<SeP>2025-03-10 02:54:36<SeP>2025-03-10 03:19:39<SeP>2025-03-10 03:44:42<SeP>2025-03-10 04:09:45<SeP>2025-03-10 04:34:48<SeP>2025-03-10 04:59:51<SeP>2025-03-10 05:24:54<SeP>2025-03-10 05:49:57<SeP>2025-03-10 06:15:00<SeP>2025-03-10 06:40:03<SeP>2025-03-10 07:05:06<SeP>2025-03-10 07:30:09<SeP>2025-03-10 07:55:12<SeP>2025-03-10 08:20:15<SeP>2025-03-10 08:45:18<SeP>2025-03-10 09:10:21<SeP>2025-03-10 09:35:24<SeP>2025-03-10 10:00:27<SeP>2025-03-10 10:25:30<SeP>2025-03-10 10:50:33<SeP>2025-03-10 11:15:36<SeP>2025-03-10 11:40:39<SeP>2025-03-10 12:05:42<SeP>2025-03-10 12:30:45<SeP>2025-03-10 12:55:48<SeP>2025-03-10 13:20:51<SeP>2025-03-10 13:45:54<SeP>2025-03-10 14:10:57<SeP>2025-03-10 14:36:00<SeP>2025-03-10 15:01:03<SeP>2025-03-10 15:26:06<SeP>2025-03-10 15:51:09<SeP>2025-03-10 16:16:12<SeP>2025-03-10 16:41:15<SeP>2025-03-10 17:06:18<SeP>2025-03-10 17:31:21<SeP>2025-03-10 17:56:24<SeP>2025-03-10 18:21:27<SeP>2025-03-10 18:46:30<SeP>2025-03-10 19:11:33<SeP>2025-03-10 19:36:36<SeP>2025-03-10 20:01:39<SeP>2025-03-10 20:26:42<SeP>2025-03-10 20:51:45<SeP>2025-03-10 21:16:48<SeP>2025-03-10 21:41:51<SeP>2025-03-10 22:06:54<SeP>2025-03-10 22:31:57<SeP>2025-03-10 22:57:00<SeP>2025-03-10 23:22:03<SeP>2025-03-10 23:47:06<SeP>2025-03-11 00:12:09<SeP>2025-03-11 00:37:12<SeP>2025-03-11 01:02:15<SeP>2025-03-11 01:27:18<SeP>2025-03-11 01:52:21<SeP>2025-03-11 02:17:24<SeP>2025-03-11 02:42:27<SeP>2025-03-11 03:07:30<SeP>2025-03-11 03:32:33<SeP>2025-03-11 03:57:36<SeP>2025-03-11 04:22:39<SeP>2025-03-11 04:47:42<SeP>2025-03-11 05:12:45<SeP>2025-03-11 05:37:48<SeP>2025-03-11 06:02:51<SeP>2025-03-11 06:27:54<SeP>2025-03-11 06:52:57<SeP>2025-03-11 07:18:00<SeP>2025-03-11 07:43:03<SeP>2025-03-11 08:08:06<SeP>2025-03-11 08:33:09<SeP>2025-03-11 08:58:12<SeP>2025-03-11 09:23:15<SeP>2025-03-11 09:48:18<SeP>2025-03-11 10:13:21<SeP>2025-03-11 10:38:24<SeP>2025-03-11 11:03:27<SeP>2025-03-11 11:28:30<SeP>2025-03-11 11:53:33<SeP>2025-03-11 12:18:36<SeP>2025-03-11 12:43:39<SeP>2025-03-11 13:08:42<SeP>2025-03-11 13:33:45<SeP>2025-03-11 13:58:48<SeP>2025-03-11 14:23:51<SeP>2025-03-11 14:48:54<SeP>2025-03-11 15:13:57<SeP>2025-03-11 15:39:00<SeP>2025-03-11 16:04:03<SeP>2025-03-11 16:29:06<SeP>2025-03-11 16:54:09<SeP>2025-03-11 17:19:12<SeP>2025-03-11 17:44:15<SeP>2025-03-11 18:09:18<SeP>2025-03-11 18:34:21<SeP>2025-03-11 18:59:24<SeP>2025-03-11 19:24:27<SeP>2025-03-11 19:49:30<SeP>2025-03-11 20:14:33<SeP>2025-03-11 20:39:36<SeP>2025-03-11 21:04:39<SeP>2025-03-11 21:29:42<SeP>2025-03-11 21:54:45<SeP>2025-03-11 22:19:48<SeP>2025-03-11 22:44:51<SeP>2025-03-11 23:09:54<SeP>2025-03-11 23:34:57";
  const itemLabel       = "Scans";
  const itemData        = "11<SeP>9<SeP>56<SeP>28<SeP>9<SeP>6<SeP>10<SeP>5<SeP>2<SeP>3<SeP>2<SeP>88<SeP>4<SeP>19<SeP>8<SeP>5<SeP>7<SeP>1<SeP>10<SeP>11<SeP>10<SeP>11<SeP>8<SeP>12<SeP>7<SeP>28<SeP>6<SeP>23<SeP>10<SeP>13<SeP>8<SeP>21<SeP>12<SeP>10<SeP>6<SeP>10<SeP>13<SeP>44<SeP>34<SeP>5<SeP>16<SeP>22<SeP>21<SeP>33<SeP>9<SeP>57<SeP>28<SeP>34<SeP>11<SeP>13<SeP>42<SeP>20<SeP>19<SeP>10<SeP>11<SeP>8<SeP>12<SeP>13<SeP>14<SeP>26<SeP>15<SeP>17<SeP>11<SeP>5<SeP>17<SeP>4<SeP>6<SeP>5<SeP>29<SeP>11<SeP>2<SeP>21<SeP>41<SeP>47<SeP>9<SeP>9<SeP>10<SeP>16<SeP>88<SeP>8<SeP>13<SeP>11<SeP>9<SeP>7<SeP>12<SeP>10<SeP>40<SeP>23<SeP>5<SeP>11<SeP>20<SeP>133<SeP>5<SeP>8<SeP>34<SeP>10<SeP>8<SeP>12<SeP>7<SeP>6<SeP>35<SeP>13<SeP>8<SeP>16<SeP>14<SeP>11<SeP>9<SeP>7<SeP>20<SeP>26<SeP>7<SeP>10<SeP>18<SeP>31<SeP>51<SeP>52<SeP>211<SeP>120<SeP>23<SeP>12<SeP>9<SeP>8<SeP>10<SeP>5<SeP>4<SeP>3<SeP>25<SeP>10<SeP>7<SeP>4<SeP>7<SeP>1<SeP>4<SeP>5<SeP>6<SeP>10<SeP>20<SeP>11<SeP>10<SeP>6<SeP>12<SeP>8<SeP>9<SeP>17<SeP>10<SeP>9<SeP>31<SeP>12<SeP>6<SeP>8<SeP>46<SeP>15<SeP>8<SeP>44<SeP>8<SeP>9<SeP>19<SeP>50<SeP>88<SeP>26<SeP>19<SeP>21<SeP>13<SeP>20<SeP>19<SeP>16<SeP>11<SeP>10<SeP>31<SeP>91<SeP>123<SeP>117<SeP>7<SeP>29<SeP>8<SeP>9<SeP>15<SeP>12<SeP>14<SeP>22<SeP>26<SeP>35<SeP>11<SeP>133<SeP>92<SeP>15<SeP>23<SeP>58<SeP>42<SeP>8<SeP>24<SeP>18<SeP>125<SeP>32<SeP>10<SeP>13<SeP>7<SeP>14<SeP>17<SeP>11<SeP>15<SeP>5<SeP>6<SeP>29<SeP>9<SeP>11<SeP>33<SeP>9<SeP>5<SeP>14<SeP>9<SeP>9<SeP>12<SeP>36<SeP>7<SeP>10<SeP>14<SeP>8<SeP>9<SeP>10<SeP>17<SeP>13<SeP>15<SeP>8<SeP>10<SeP>6<SeP>35<SeP>6<SeP>3<SeP>7<SeP>3<SeP>4<SeP>6<SeP>3<SeP>5<SeP>22<SeP>18<SeP>25<SeP>24<SeP>16<SeP>6<SeP>6<SeP>17<SeP>6<SeP>57<SeP>14<SeP>7<SeP>14<SeP>13<SeP>12<SeP>19<SeP>15<SeP>12<SeP>33<SeP>8<SeP>10<SeP>7<SeP>12<SeP>10<SeP>29<SeP>11<SeP>5<SeP>11<SeP>8<SeP>3<SeP>38<SeP>0<SeP>13<SeP>11<SeP>3<SeP>5<SeP>8<SeP>8<SeP>5<SeP>1<SeP>17<SeP>3<SeP>9<SeP>4<SeP>13<SeP>5<SeP>3<SeP>88<SeP>17<SeP>8<SeP>7<SeP>4<SeP>7<SeP>6<SeP>9<SeP>5<SeP>14<SeP>15<SeP>757<SeP>9<SeP>27<SeP>13<SeP>7<SeP>7<SeP>13<SeP>38<SeP>19<SeP>16<SeP>24<SeP>22<SeP>19<SeP>19<SeP>9<SeP>54<SeP>25<SeP>17<SeP>49<SeP>12<SeP>20<SeP>46<SeP>16<SeP>19<SeP>14<SeP>13<SeP>39<SeP>10<SeP>11<SeP>5<SeP>0<SeP>8<SeP>9<SeP>6<SeP>2<SeP>3<SeP>0<SeP>24<SeP>7<SeP>0<SeP>18<SeP>10<SeP>26<SeP>79<SeP>47<SeP>23<SeP>10<SeP>23<SeP>34<SeP>8<SeP>11<SeP>13<SeP>36<SeP>27<SeP>14<SeP>10<SeP>41<SeP>7<SeP>3<SeP>26<SeP>10<SeP>3<SeP>4<SeP>55<SeP>45<SeP>5<SeP>3<SeP>8<SeP>3<SeP>3<SeP>1<SeP>9<SeP>11<SeP>12<SeP>14<SeP>11<SeP>14<SeP>11<SeP>54<SeP>31<SeP>11<SeP>8<SeP>65<SeP>39<SeP>14<SeP>26<SeP>2<SeP>17<SeP>5<SeP>6<SeP>26<SeP>6<SeP>10<SeP>7<SeP>14<SeP>7<SeP>23<SeP>22<SeP>7<SeP>3<SeP>29<SeP>7<SeP>12<SeP>12<SeP>7<SeP>9<SeP>15";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-03-05 00:00:00<SeP>2025-03-05 00:25:03<SeP>2025-03-05 00:50:06<SeP>2025-03-05 01:15:09<SeP>2025-03-05 01:40:12<SeP>2025-03-05 02:05:15<SeP>2025-03-05 02:30:18<SeP>2025-03-05 02:55:21<SeP>2025-03-05 03:20:24<SeP>2025-03-05 03:45:27<SeP>2025-03-05 04:10:30<SeP>2025-03-05 04:35:33<SeP>2025-03-05 05:00:36<SeP>2025-03-05 05:25:39<SeP>2025-03-05 05:50:42<SeP>2025-03-05 06:15:45<SeP>2025-03-05 06:40:48<SeP>2025-03-05 07:05:51<SeP>2025-03-05 07:30:54<SeP>2025-03-05 07:55:57<SeP>2025-03-05 08:21:00<SeP>2025-03-05 08:46:03<SeP>2025-03-05 09:11:06<SeP>2025-03-05 09:36:09<SeP>2025-03-05 10:01:12<SeP>2025-03-05 10:26:15<SeP>2025-03-05 10:51:18<SeP>2025-03-05 11:16:21<SeP>2025-03-05 11:41:24<SeP>2025-03-05 12:06:27<SeP>2025-03-05 12:31:30<SeP>2025-03-05 12:56:33<SeP>2025-03-05 13:21:36<SeP>2025-03-05 13:46:39<SeP>2025-03-05 14:11:42<SeP>2025-03-05 14:36:45<SeP>2025-03-05 15:01:48<SeP>2025-03-05 15:26:51<SeP>2025-03-05 15:51:54<SeP>2025-03-05 16:16:57<SeP>2025-03-05 16:42:00<SeP>2025-03-05 17:07:03<SeP>2025-03-05 17:32:06<SeP>2025-03-05 17:57:09<SeP>2025-03-05 18:22:12<SeP>2025-03-05 18:47:15<SeP>2025-03-05 19:12:18<SeP>2025-03-05 19:37:21<SeP>2025-03-05 20:02:24<SeP>2025-03-05 20:27:27<SeP>2025-03-05 20:52:30<SeP>2025-03-05 21:17:33<SeP>2025-03-05 21:42:36<SeP>2025-03-05 22:07:39<SeP>2025-03-05 22:32:42<SeP>2025-03-05 22:57:45<SeP>2025-03-05 23:22:48<SeP>2025-03-05 23:47:51<SeP>2025-03-06 00:12:54<SeP>2025-03-06 00:37:57<SeP>2025-03-06 01:03:00<SeP>2025-03-06 01:28:03<SeP>2025-03-06 01:53:06<SeP>2025-03-06 02:18:09<SeP>2025-03-06 02:43:12<SeP>2025-03-06 03:08:15<SeP>2025-03-06 03:33:18<SeP>2025-03-06 03:58:21<SeP>2025-03-06 04:23:24<SeP>2025-03-06 04:48:27<SeP>2025-03-06 05:13:30<SeP>2025-03-06 05:38:33<SeP>2025-03-06 06:03:36<SeP>2025-03-06 06:28:39<SeP>2025-03-06 06:53:42<SeP>2025-03-06 07:18:45<SeP>2025-03-06 07:43:48<SeP>2025-03-06 08:08:51<SeP>2025-03-06 08:33:54<SeP>2025-03-06 08:58:57<SeP>2025-03-06 09:24:00<SeP>2025-03-06 09:49:03<SeP>2025-03-06 10:14:06<SeP>2025-03-06 10:39:09<SeP>2025-03-06 11:04:12<SeP>2025-03-06 11:29:15<SeP>2025-03-06 11:54:18<SeP>2025-03-06 12:19:21<SeP>2025-03-06 12:44:24<SeP>2025-03-06 13:09:27<SeP>2025-03-06 13:34:30<SeP>2025-03-06 13:59:33<SeP>2025-03-06 14:24:36<SeP>2025-03-06 14:49:39<SeP>2025-03-06 15:14:42<SeP>2025-03-06 15:39:45<SeP>2025-03-06 16:04:48<SeP>2025-03-06 16:29:51<SeP>2025-03-06 16:54:54<SeP>2025-03-06 17:19:57<SeP>2025-03-06 17:45:00<SeP>2025-03-06 18:10:03<SeP>2025-03-06 18:35:06<SeP>2025-03-06 19:00:09<SeP>2025-03-06 19:25:12<SeP>2025-03-06 19:50:15<SeP>2025-03-06 20:15:18<SeP>2025-03-06 20:40:21<SeP>2025-03-06 21:05:24<SeP>2025-03-06 21:30:27<SeP>2025-03-06 21:55:30<SeP>2025-03-06 22:20:33<SeP>2025-03-06 22:45:36<SeP>2025-03-06 23:10:39<SeP>2025-03-06 23:35:42<SeP>2025-03-07 00:00:45<SeP>2025-03-07 00:25:48<SeP>2025-03-07 00:50:51<SeP>2025-03-07 01:15:54<SeP>2025-03-07 01:40:57<SeP>2025-03-07 02:06:00<SeP>2025-03-07 02:31:03<SeP>2025-03-07 02:56:06<SeP>2025-03-07 03:21:09<SeP>2025-03-07 03:46:12<SeP>2025-03-07 04:11:15<SeP>2025-03-07 04:36:18<SeP>2025-03-07 05:01:21<SeP>2025-03-07 05:26:24<SeP>2025-03-07 05:51:27<SeP>2025-03-07 06:16:30<SeP>2025-03-07 06:41:33<SeP>2025-03-07 07:06:36<SeP>2025-03-07 07:31:39<SeP>2025-03-07 07:56:42<SeP>2025-03-07 08:21:45<SeP>2025-03-07 08:46:48<SeP>2025-03-07 09:11:51<SeP>2025-03-07 09:36:54<SeP>2025-03-07 10:01:57<SeP>2025-03-07 10:27:00<SeP>2025-03-07 10:52:03<SeP>2025-03-07 11:17:06<SeP>2025-03-07 11:42:09<SeP>2025-03-07 12:07:12<SeP>2025-03-07 12:32:15<SeP>2025-03-07 12:57:18<SeP>2025-03-07 13:22:21<SeP>2025-03-07 13:47:24<SeP>2025-03-07 14:12:27<SeP>2025-03-07 14:37:30<SeP>2025-03-07 15:02:33<SeP>2025-03-07 15:27:36<SeP>2025-03-07 15:52:39<SeP>2025-03-07 16:17:42<SeP>2025-03-07 16:42:45<SeP>2025-03-07 17:07:48<SeP>2025-03-07 17:32:51<SeP>2025-03-07 17:57:54<SeP>2025-03-07 18:22:57<SeP>2025-03-07 18:48:00<SeP>2025-03-07 19:13:03<SeP>2025-03-07 19:38:06<SeP>2025-03-07 20:03:09<SeP>2025-03-07 20:28:12<SeP>2025-03-07 20:53:15<SeP>2025-03-07 21:18:18<SeP>2025-03-07 21:43:21<SeP>2025-03-07 22:08:24<SeP>2025-03-07 22:33:27<SeP>2025-03-07 22:58:30<SeP>2025-03-07 23:23:33<SeP>2025-03-07 23:48:36<SeP>2025-03-08 00:13:39<SeP>2025-03-08 00:38:42<SeP>2025-03-08 01:03:45<SeP>2025-03-08 01:28:48<SeP>2025-03-08 01:53:51<SeP>2025-03-08 02:18:54<SeP>2025-03-08 02:43:57<SeP>2025-03-08 03:09:00<SeP>2025-03-08 03:34:03<SeP>2025-03-08 03:59:06<SeP>2025-03-08 04:24:09<SeP>2025-03-08 04:49:12<SeP>2025-03-08 05:14:15<SeP>2025-03-08 05:39:18<SeP>2025-03-08 06:04:21<SeP>2025-03-08 06:29:24<SeP>2025-03-08 06:54:27<SeP>2025-03-08 07:19:30<SeP>2025-03-08 07:44:33<SeP>2025-03-08 08:09:36<SeP>2025-03-08 08:34:39<SeP>2025-03-08 08:59:42<SeP>2025-03-08 09:24:45<SeP>2025-03-08 09:49:48<SeP>2025-03-08 10:14:51<SeP>2025-03-08 10:39:54<SeP>2025-03-08 11:04:57<SeP>2025-03-08 11:30:00<SeP>2025-03-08 11:55:03<SeP>2025-03-08 12:20:06<SeP>2025-03-08 12:45:09<SeP>2025-03-08 13:10:12<SeP>2025-03-08 13:35:15<SeP>2025-03-08 14:00:18<SeP>2025-03-08 14:25:21<SeP>2025-03-08 14:50:24<SeP>2025-03-08 15:15:27<SeP>2025-03-08 15:40:30<SeP>2025-03-08 16:05:33<SeP>2025-03-08 16:30:36<SeP>2025-03-08 16:55:39<SeP>2025-03-08 17:20:42<SeP>2025-03-08 17:45:45<SeP>2025-03-08 18:10:48<SeP>2025-03-08 18:35:51<SeP>2025-03-08 19:00:54<SeP>2025-03-08 19:25:57<SeP>2025-03-08 19:51:00<SeP>2025-03-08 20:16:03<SeP>2025-03-08 20:41:06<SeP>2025-03-08 21:06:09<SeP>2025-03-08 21:31:12<SeP>2025-03-08 21:56:15<SeP>2025-03-08 22:21:18<SeP>2025-03-08 22:46:21<SeP>2025-03-08 23:11:24<SeP>2025-03-08 23:36:27<SeP>2025-03-09 00:01:30<SeP>2025-03-09 00:26:33<SeP>2025-03-09 00:51:36<SeP>2025-03-09 01:16:39<SeP>2025-03-09 01:41:42<SeP>2025-03-09 03:06:45<SeP>2025-03-09 03:31:48<SeP>2025-03-09 03:56:51<SeP>2025-03-09 04:21:54<SeP>2025-03-09 04:46:57<SeP>2025-03-09 05:12:00<SeP>2025-03-09 05:37:03<SeP>2025-03-09 06:02:06<SeP>2025-03-09 06:27:09<SeP>2025-03-09 06:52:12<SeP>2025-03-09 07:17:15<SeP>2025-03-09 07:42:18<SeP>2025-03-09 08:07:21<SeP>2025-03-09 08:32:24<SeP>2025-03-09 08:57:27<SeP>2025-03-09 09:22:30<SeP>2025-03-09 09:47:33<SeP>2025-03-09 10:12:36<SeP>2025-03-09 10:37:39<SeP>2025-03-09 11:02:42<SeP>2025-03-09 11:27:45<SeP>2025-03-09 11:52:48<SeP>2025-03-09 12:17:51<SeP>2025-03-09 12:42:54<SeP>2025-03-09 13:07:57<SeP>2025-03-09 13:33:00<SeP>2025-03-09 13:58:03<SeP>2025-03-09 14:23:06<SeP>2025-03-09 14:48:09<SeP>2025-03-09 15:13:12<SeP>2025-03-09 15:38:15<SeP>2025-03-09 16:03:18<SeP>2025-03-09 16:28:21<SeP>2025-03-09 16:53:24<SeP>2025-03-09 17:18:27<SeP>2025-03-09 17:43:30<SeP>2025-03-09 18:08:33<SeP>2025-03-09 18:33:36<SeP>2025-03-09 18:58:39<SeP>2025-03-09 19:23:42<SeP>2025-03-09 19:48:45<SeP>2025-03-09 20:13:48<SeP>2025-03-09 20:38:51<SeP>2025-03-09 21:03:54<SeP>2025-03-09 21:28:57<SeP>2025-03-09 21:54:00<SeP>2025-03-09 22:19:03<SeP>2025-03-09 22:44:06<SeP>2025-03-09 23:09:09<SeP>2025-03-09 23:34:12<SeP>2025-03-09 23:59:15<SeP>2025-03-10 00:24:18<SeP>2025-03-10 00:49:21<SeP>2025-03-10 01:14:24<SeP>2025-03-10 01:39:27<SeP>2025-03-10 02:04:30<SeP>2025-03-10 02:29:33<SeP>2025-03-10 02:54:36<SeP>2025-03-10 03:19:39<SeP>2025-03-10 03:44:42<SeP>2025-03-10 04:09:45<SeP>2025-03-10 04:34:48<SeP>2025-03-10 04:59:51<SeP>2025-03-10 05:24:54<SeP>2025-03-10 05:49:57<SeP>2025-03-10 06:15:00<SeP>2025-03-10 06:40:03<SeP>2025-03-10 07:05:06<SeP>2025-03-10 07:30:09<SeP>2025-03-10 07:55:12<SeP>2025-03-10 08:20:15<SeP>2025-03-10 08:45:18<SeP>2025-03-10 09:10:21<SeP>2025-03-10 09:35:24<SeP>2025-03-10 10:00:27<SeP>2025-03-10 10:25:30<SeP>2025-03-10 10:50:33<SeP>2025-03-10 11:15:36<SeP>2025-03-10 11:40:39<SeP>2025-03-10 12:05:42<SeP>2025-03-10 12:30:45<SeP>2025-03-10 12:55:48<SeP>2025-03-10 13:20:51<SeP>2025-03-10 13:45:54<SeP>2025-03-10 14:10:57<SeP>2025-03-10 14:36:00<SeP>2025-03-10 15:01:03<SeP>2025-03-10 15:26:06<SeP>2025-03-10 15:51:09<SeP>2025-03-10 16:16:12<SeP>2025-03-10 16:41:15<SeP>2025-03-10 17:06:18<SeP>2025-03-10 17:31:21<SeP>2025-03-10 17:56:24<SeP>2025-03-10 18:21:27<SeP>2025-03-10 18:46:30<SeP>2025-03-10 19:11:33<SeP>2025-03-10 19:36:36<SeP>2025-03-10 20:01:39<SeP>2025-03-10 20:26:42<SeP>2025-03-10 20:51:45<SeP>2025-03-10 21:16:48<SeP>2025-03-10 21:41:51<SeP>2025-03-10 22:06:54<SeP>2025-03-10 22:31:57<SeP>2025-03-10 22:57:00<SeP>2025-03-10 23:22:03<SeP>2025-03-10 23:47:06<SeP>2025-03-11 00:12:09<SeP>2025-03-11 00:37:12<SeP>2025-03-11 01:02:15<SeP>2025-03-11 01:27:18<SeP>2025-03-11 01:52:21<SeP>2025-03-11 02:17:24<SeP>2025-03-11 02:42:27<SeP>2025-03-11 03:07:30<SeP>2025-03-11 03:32:33<SeP>2025-03-11 03:57:36<SeP>2025-03-11 04:22:39<SeP>2025-03-11 04:47:42<SeP>2025-03-11 05:12:45<SeP>2025-03-11 05:37:48<SeP>2025-03-11 06:02:51<SeP>2025-03-11 06:27:54<SeP>2025-03-11 06:52:57<SeP>2025-03-11 07:18:00<SeP>2025-03-11 07:43:03<SeP>2025-03-11 08:08:06<SeP>2025-03-11 08:33:09<SeP>2025-03-11 08:58:12<SeP>2025-03-11 09:23:15<SeP>2025-03-11 09:48:18<SeP>2025-03-11 10:13:21<SeP>2025-03-11 10:38:24<SeP>2025-03-11 11:03:27<SeP>2025-03-11 11:28:30<SeP>2025-03-11 11:53:33<SeP>2025-03-11 12:18:36<SeP>2025-03-11 12:43:39<SeP>2025-03-11 13:08:42<SeP>2025-03-11 13:33:45<SeP>2025-03-11 13:58:48<SeP>2025-03-11 14:23:51<SeP>2025-03-11 14:48:54<SeP>2025-03-11 15:13:57<SeP>2025-03-11 15:39:00<SeP>2025-03-11 16:04:03<SeP>2025-03-11 16:29:06<SeP>2025-03-11 16:54:09<SeP>2025-03-11 17:19:12<SeP>2025-03-11 17:44:15<SeP>2025-03-11 18:09:18<SeP>2025-03-11 18:34:21<SeP>2025-03-11 18:59:24<SeP>2025-03-11 19:24:27<SeP>2025-03-11 19:49:30<SeP>2025-03-11 20:14:33<SeP>2025-03-11 20:39:36<SeP>2025-03-11 21:04:39<SeP>2025-03-11 21:29:42<SeP>2025-03-11 21:54:45<SeP>2025-03-11 22:19:48<SeP>2025-03-11 22:44:51<SeP>2025-03-11 23:09:54<SeP>2025-03-11 23:34:57";
  const itemLabel       = "Attacks";
  const itemData        = "19<SeP>40<SeP>60<SeP>10<SeP>23<SeP>5<SeP>69<SeP>50<SeP>10<SeP>15<SeP>12<SeP>5<SeP>9<SeP>49<SeP>49<SeP>4<SeP>2<SeP>2<SeP>15<SeP>48<SeP>8<SeP>1<SeP>19<SeP>6<SeP>9<SeP>5<SeP>7<SeP>8<SeP>12<SeP>5<SeP>5<SeP>5<SeP>11<SeP>11<SeP>7<SeP>7<SeP>86<SeP>129<SeP>76<SeP>14<SeP>9<SeP>36<SeP>4<SeP>2<SeP>5<SeP>37<SeP>21<SeP>61<SeP>20<SeP>12<SeP>52<SeP>31<SeP>67<SeP>76<SeP>6<SeP>10<SeP>11<SeP>13<SeP>59<SeP>6<SeP>9<SeP>9<SeP>2<SeP>3<SeP>9<SeP>1<SeP>3<SeP>26<SeP>66<SeP>38<SeP>24<SeP>49<SeP>57<SeP>3<SeP>6<SeP>27<SeP>24<SeP>66<SeP>75<SeP>25<SeP>15<SeP>10<SeP>11<SeP>8<SeP>36<SeP>46<SeP>19<SeP>11<SeP>11<SeP>12<SeP>34<SeP>30<SeP>6<SeP>5<SeP>12<SeP>8<SeP>44<SeP>62<SeP>8<SeP>3<SeP>8<SeP>7<SeP>8<SeP>39<SeP>50<SeP>65<SeP>6<SeP>14<SeP>12<SeP>11<SeP>10<SeP>68<SeP>58<SeP>16<SeP>18<SeP>6<SeP>7<SeP>24<SeP>78<SeP>64<SeP>6<SeP>5<SeP>16<SeP>11<SeP>9<SeP>22<SeP>68<SeP>48<SeP>100<SeP>170<SeP>151<SeP>137<SeP>42<SeP>44<SeP>28<SeP>14<SeP>22<SeP>11<SeP>9<SeP>29<SeP>35<SeP>34<SeP>32<SeP>23<SeP>8<SeP>117<SeP>8<SeP>8<SeP>8<SeP>7<SeP>11<SeP>9<SeP>10<SeP>8<SeP>9<SeP>11<SeP>17<SeP>5<SeP>35<SeP>62<SeP>15<SeP>3<SeP>6<SeP>32<SeP>6<SeP>9<SeP>28<SeP>31<SeP>25<SeP>8<SeP>32<SeP>42<SeP>19<SeP>6<SeP>18<SeP>20<SeP>39<SeP>98<SeP>77<SeP>18<SeP>12<SeP>19<SeP>7<SeP>6<SeP>4<SeP>4<SeP>3<SeP>4<SeP>4<SeP>1<SeP>4<SeP>3<SeP>1<SeP>22<SeP>71<SeP>51<SeP>40<SeP>61<SeP>19<SeP>19<SeP>10<SeP>11<SeP>5<SeP>8<SeP>6<SeP>39<SeP>25<SeP>5<SeP>0<SeP>3<SeP>3<SeP>2<SeP>15<SeP>4<SeP>3<SeP>2<SeP>8<SeP>3<SeP>4<SeP>7<SeP>4<SeP>56<SeP>12<SeP>61<SeP>155<SeP>48<SeP>24<SeP>17<SeP>16<SeP>8<SeP>5<SeP>6<SeP>10<SeP>10<SeP>73<SeP>67<SeP>8<SeP>10<SeP>64<SeP>32<SeP>4<SeP>2<SeP>3<SeP>5<SeP>1<SeP>3<SeP>4<SeP>3<SeP>5<SeP>10<SeP>5<SeP>8<SeP>4<SeP>23<SeP>35<SeP>20<SeP>23<SeP>8<SeP>5<SeP>5<SeP>4<SeP>10<SeP>32<SeP>5<SeP>7<SeP>221<SeP>29<SeP>23<SeP>24<SeP>15<SeP>7<SeP>10<SeP>3<SeP>6<SeP>6<SeP>2<SeP>2<SeP>2<SeP>17<SeP>12<SeP>3<SeP>7<SeP>4<SeP>253<SeP>236<SeP>7<SeP>10<SeP>48<SeP>43<SeP>43<SeP>253<SeP>17<SeP>253<SeP>15<SeP>11<SeP>277<SeP>40<SeP>11<SeP>6<SeP>5<SeP>7<SeP>10<SeP>18<SeP>7<SeP>8<SeP>26<SeP>39<SeP>37<SeP>18<SeP>8<SeP>6<SeP>6<SeP>11<SeP>13<SeP>14<SeP>8<SeP>44<SeP>35<SeP>39<SeP>17<SeP>9<SeP>17<SeP>4<SeP>6<SeP>26<SeP>40<SeP>43<SeP>9<SeP>7<SeP>7<SeP>6<SeP>7<SeP>6<SeP>7<SeP>13<SeP>107<SeP>172<SeP>67<SeP>56<SeP>47<SeP>29<SeP>9<SeP>61<SeP>169<SeP>64<SeP>8<SeP>13<SeP>5<SeP>2<SeP>22<SeP>30<SeP>34<SeP>41<SeP>1<SeP>2<SeP>3<SeP>16<SeP>6<SeP>4<SeP>88<SeP>110<SeP>18<SeP>8<SeP>8<SeP>6<SeP>7<SeP>15<SeP>5<SeP>3<SeP>6<SeP>6<SeP>50<SeP>99<SeP>25<SeP>1<SeP>1<SeP>31<SeP>67<SeP>97<SeP>88<SeP>301<SeP>39<SeP>20<SeP>26<SeP>35<SeP>14<SeP>7<SeP>4<SeP>15<SeP>3<SeP>14<SeP>11<SeP>7<SeP>16<SeP>15<SeP>7<SeP>2<SeP>62<SeP>94<SeP>31";
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
  const labelsData       = "2025-03-05 00:00:00<SeP>2025-03-05 00:25:03<SeP>2025-03-05 00:50:06<SeP>2025-03-05 01:15:09<SeP>2025-03-05 01:40:12<SeP>2025-03-05 02:05:15<SeP>2025-03-05 02:30:18<SeP>2025-03-05 02:55:21<SeP>2025-03-05 03:20:24<SeP>2025-03-05 03:45:27<SeP>2025-03-05 04:10:30<SeP>2025-03-05 04:35:33<SeP>2025-03-05 05:00:36<SeP>2025-03-05 05:25:39<SeP>2025-03-05 05:50:42<SeP>2025-03-05 06:15:45<SeP>2025-03-05 06:40:48<SeP>2025-03-05 07:05:51<SeP>2025-03-05 07:30:54<SeP>2025-03-05 07:55:57<SeP>2025-03-05 08:21:00<SeP>2025-03-05 08:46:03<SeP>2025-03-05 09:11:06<SeP>2025-03-05 09:36:09<SeP>2025-03-05 10:01:12<SeP>2025-03-05 10:26:15<SeP>2025-03-05 10:51:18<SeP>2025-03-05 11:16:21<SeP>2025-03-05 11:41:24<SeP>2025-03-05 12:06:27<SeP>2025-03-05 12:31:30<SeP>2025-03-05 12:56:33<SeP>2025-03-05 13:21:36<SeP>2025-03-05 13:46:39<SeP>2025-03-05 14:11:42<SeP>2025-03-05 14:36:45<SeP>2025-03-05 15:01:48<SeP>2025-03-05 15:26:51<SeP>2025-03-05 15:51:54<SeP>2025-03-05 16:16:57<SeP>2025-03-05 16:42:00<SeP>2025-03-05 17:07:03<SeP>2025-03-05 17:32:06<SeP>2025-03-05 17:57:09<SeP>2025-03-05 18:22:12<SeP>2025-03-05 18:47:15<SeP>2025-03-05 19:12:18<SeP>2025-03-05 19:37:21<SeP>2025-03-05 20:02:24<SeP>2025-03-05 20:27:27<SeP>2025-03-05 20:52:30<SeP>2025-03-05 21:17:33<SeP>2025-03-05 21:42:36<SeP>2025-03-05 22:07:39<SeP>2025-03-05 22:32:42<SeP>2025-03-05 22:57:45<SeP>2025-03-05 23:22:48<SeP>2025-03-05 23:47:51<SeP>2025-03-06 00:12:54<SeP>2025-03-06 00:37:57<SeP>2025-03-06 01:03:00<SeP>2025-03-06 01:28:03<SeP>2025-03-06 01:53:06<SeP>2025-03-06 02:18:09<SeP>2025-03-06 02:43:12<SeP>2025-03-06 03:08:15<SeP>2025-03-06 03:33:18<SeP>2025-03-06 03:58:21<SeP>2025-03-06 04:23:24<SeP>2025-03-06 04:48:27<SeP>2025-03-06 05:13:30<SeP>2025-03-06 05:38:33<SeP>2025-03-06 06:03:36<SeP>2025-03-06 06:28:39<SeP>2025-03-06 06:53:42<SeP>2025-03-06 07:18:45<SeP>2025-03-06 07:43:48<SeP>2025-03-06 08:08:51<SeP>2025-03-06 08:33:54<SeP>2025-03-06 08:58:57<SeP>2025-03-06 09:24:00<SeP>2025-03-06 09:49:03<SeP>2025-03-06 10:14:06<SeP>2025-03-06 10:39:09<SeP>2025-03-06 11:04:12<SeP>2025-03-06 11:29:15<SeP>2025-03-06 11:54:18<SeP>2025-03-06 12:19:21<SeP>2025-03-06 12:44:24<SeP>2025-03-06 13:09:27<SeP>2025-03-06 13:34:30<SeP>2025-03-06 13:59:33<SeP>2025-03-06 14:24:36<SeP>2025-03-06 14:49:39<SeP>2025-03-06 15:14:42<SeP>2025-03-06 15:39:45<SeP>2025-03-06 16:04:48<SeP>2025-03-06 16:29:51<SeP>2025-03-06 16:54:54<SeP>2025-03-06 17:19:57<SeP>2025-03-06 17:45:00<SeP>2025-03-06 18:10:03<SeP>2025-03-06 18:35:06<SeP>2025-03-06 19:00:09<SeP>2025-03-06 19:25:12<SeP>2025-03-06 19:50:15<SeP>2025-03-06 20:15:18<SeP>2025-03-06 20:40:21<SeP>2025-03-06 21:05:24<SeP>2025-03-06 21:30:27<SeP>2025-03-06 21:55:30<SeP>2025-03-06 22:20:33<SeP>2025-03-06 22:45:36<SeP>2025-03-06 23:10:39<SeP>2025-03-06 23:35:42<SeP>2025-03-07 00:00:45<SeP>2025-03-07 00:25:48<SeP>2025-03-07 00:50:51<SeP>2025-03-07 01:15:54<SeP>2025-03-07 01:40:57<SeP>2025-03-07 02:06:00<SeP>2025-03-07 02:31:03<SeP>2025-03-07 02:56:06<SeP>2025-03-07 03:21:09<SeP>2025-03-07 03:46:12<SeP>2025-03-07 04:11:15<SeP>2025-03-07 04:36:18<SeP>2025-03-07 05:01:21<SeP>2025-03-07 05:26:24<SeP>2025-03-07 05:51:27<SeP>2025-03-07 06:16:30<SeP>2025-03-07 06:41:33<SeP>2025-03-07 07:06:36<SeP>2025-03-07 07:31:39<SeP>2025-03-07 07:56:42<SeP>2025-03-07 08:21:45<SeP>2025-03-07 08:46:48<SeP>2025-03-07 09:11:51<SeP>2025-03-07 09:36:54<SeP>2025-03-07 10:01:57<SeP>2025-03-07 10:27:00<SeP>2025-03-07 10:52:03<SeP>2025-03-07 11:17:06<SeP>2025-03-07 11:42:09<SeP>2025-03-07 12:07:12<SeP>2025-03-07 12:32:15<SeP>2025-03-07 12:57:18<SeP>2025-03-07 13:22:21<SeP>2025-03-07 13:47:24<SeP>2025-03-07 14:12:27<SeP>2025-03-07 14:37:30<SeP>2025-03-07 15:02:33<SeP>2025-03-07 15:27:36<SeP>2025-03-07 15:52:39<SeP>2025-03-07 16:17:42<SeP>2025-03-07 16:42:45<SeP>2025-03-07 17:07:48<SeP>2025-03-07 17:32:51<SeP>2025-03-07 17:57:54<SeP>2025-03-07 18:22:57<SeP>2025-03-07 18:48:00<SeP>2025-03-07 19:13:03<SeP>2025-03-07 19:38:06<SeP>2025-03-07 20:03:09<SeP>2025-03-07 20:28:12<SeP>2025-03-07 20:53:15<SeP>2025-03-07 21:18:18<SeP>2025-03-07 21:43:21<SeP>2025-03-07 22:08:24<SeP>2025-03-07 22:33:27<SeP>2025-03-07 22:58:30<SeP>2025-03-07 23:23:33<SeP>2025-03-07 23:48:36<SeP>2025-03-08 00:13:39<SeP>2025-03-08 00:38:42<SeP>2025-03-08 01:03:45<SeP>2025-03-08 01:28:48<SeP>2025-03-08 01:53:51<SeP>2025-03-08 02:18:54<SeP>2025-03-08 02:43:57<SeP>2025-03-08 03:09:00<SeP>2025-03-08 03:34:03<SeP>2025-03-08 03:59:06<SeP>2025-03-08 04:24:09<SeP>2025-03-08 04:49:12<SeP>2025-03-08 05:14:15<SeP>2025-03-08 05:39:18<SeP>2025-03-08 06:04:21<SeP>2025-03-08 06:29:24<SeP>2025-03-08 06:54:27<SeP>2025-03-08 07:19:30<SeP>2025-03-08 07:44:33<SeP>2025-03-08 08:09:36<SeP>2025-03-08 08:34:39<SeP>2025-03-08 08:59:42<SeP>2025-03-08 09:24:45<SeP>2025-03-08 09:49:48<SeP>2025-03-08 10:14:51<SeP>2025-03-08 10:39:54<SeP>2025-03-08 11:04:57<SeP>2025-03-08 11:30:00<SeP>2025-03-08 11:55:03<SeP>2025-03-08 12:20:06<SeP>2025-03-08 12:45:09<SeP>2025-03-08 13:10:12<SeP>2025-03-08 13:35:15<SeP>2025-03-08 14:00:18<SeP>2025-03-08 14:25:21<SeP>2025-03-08 14:50:24<SeP>2025-03-08 15:15:27<SeP>2025-03-08 15:40:30<SeP>2025-03-08 16:05:33<SeP>2025-03-08 16:30:36<SeP>2025-03-08 16:55:39<SeP>2025-03-08 17:20:42<SeP>2025-03-08 17:45:45<SeP>2025-03-08 18:10:48<SeP>2025-03-08 18:35:51<SeP>2025-03-08 19:00:54<SeP>2025-03-08 19:25:57<SeP>2025-03-08 19:51:00<SeP>2025-03-08 20:16:03<SeP>2025-03-08 20:41:06<SeP>2025-03-08 21:06:09<SeP>2025-03-08 21:31:12<SeP>2025-03-08 21:56:15<SeP>2025-03-08 22:21:18<SeP>2025-03-08 22:46:21<SeP>2025-03-08 23:11:24<SeP>2025-03-08 23:36:27<SeP>2025-03-09 00:01:30<SeP>2025-03-09 00:26:33<SeP>2025-03-09 00:51:36<SeP>2025-03-09 01:16:39<SeP>2025-03-09 01:41:42<SeP>2025-03-09 03:06:45<SeP>2025-03-09 03:31:48<SeP>2025-03-09 03:56:51<SeP>2025-03-09 04:21:54<SeP>2025-03-09 04:46:57<SeP>2025-03-09 05:12:00<SeP>2025-03-09 05:37:03<SeP>2025-03-09 06:02:06<SeP>2025-03-09 06:27:09<SeP>2025-03-09 06:52:12<SeP>2025-03-09 07:17:15<SeP>2025-03-09 07:42:18<SeP>2025-03-09 08:07:21<SeP>2025-03-09 08:32:24<SeP>2025-03-09 08:57:27<SeP>2025-03-09 09:22:30<SeP>2025-03-09 09:47:33<SeP>2025-03-09 10:12:36<SeP>2025-03-09 10:37:39<SeP>2025-03-09 11:02:42<SeP>2025-03-09 11:27:45<SeP>2025-03-09 11:52:48<SeP>2025-03-09 12:17:51<SeP>2025-03-09 12:42:54<SeP>2025-03-09 13:07:57<SeP>2025-03-09 13:33:00<SeP>2025-03-09 13:58:03<SeP>2025-03-09 14:23:06<SeP>2025-03-09 14:48:09<SeP>2025-03-09 15:13:12<SeP>2025-03-09 15:38:15<SeP>2025-03-09 16:03:18<SeP>2025-03-09 16:28:21<SeP>2025-03-09 16:53:24<SeP>2025-03-09 17:18:27<SeP>2025-03-09 17:43:30<SeP>2025-03-09 18:08:33<SeP>2025-03-09 18:33:36<SeP>2025-03-09 18:58:39<SeP>2025-03-09 19:23:42<SeP>2025-03-09 19:48:45<SeP>2025-03-09 20:13:48<SeP>2025-03-09 20:38:51<SeP>2025-03-09 21:03:54<SeP>2025-03-09 21:28:57<SeP>2025-03-09 21:54:00<SeP>2025-03-09 22:19:03<SeP>2025-03-09 22:44:06<SeP>2025-03-09 23:09:09<SeP>2025-03-09 23:34:12<SeP>2025-03-09 23:59:15<SeP>2025-03-10 00:24:18<SeP>2025-03-10 00:49:21<SeP>2025-03-10 01:14:24<SeP>2025-03-10 01:39:27<SeP>2025-03-10 02:04:30<SeP>2025-03-10 02:29:33<SeP>2025-03-10 02:54:36<SeP>2025-03-10 03:19:39<SeP>2025-03-10 03:44:42<SeP>2025-03-10 04:09:45<SeP>2025-03-10 04:34:48<SeP>2025-03-10 04:59:51<SeP>2025-03-10 05:24:54<SeP>2025-03-10 05:49:57<SeP>2025-03-10 06:15:00<SeP>2025-03-10 06:40:03<SeP>2025-03-10 07:05:06<SeP>2025-03-10 07:30:09<SeP>2025-03-10 07:55:12<SeP>2025-03-10 08:20:15<SeP>2025-03-10 08:45:18<SeP>2025-03-10 09:10:21<SeP>2025-03-10 09:35:24<SeP>2025-03-10 10:00:27<SeP>2025-03-10 10:25:30<SeP>2025-03-10 10:50:33<SeP>2025-03-10 11:15:36<SeP>2025-03-10 11:40:39<SeP>2025-03-10 12:05:42<SeP>2025-03-10 12:30:45<SeP>2025-03-10 12:55:48<SeP>2025-03-10 13:20:51<SeP>2025-03-10 13:45:54<SeP>2025-03-10 14:10:57<SeP>2025-03-10 14:36:00<SeP>2025-03-10 15:01:03<SeP>2025-03-10 15:26:06<SeP>2025-03-10 15:51:09<SeP>2025-03-10 16:16:12<SeP>2025-03-10 16:41:15<SeP>2025-03-10 17:06:18<SeP>2025-03-10 17:31:21<SeP>2025-03-10 17:56:24<SeP>2025-03-10 18:21:27<SeP>2025-03-10 18:46:30<SeP>2025-03-10 19:11:33<SeP>2025-03-10 19:36:36<SeP>2025-03-10 20:01:39<SeP>2025-03-10 20:26:42<SeP>2025-03-10 20:51:45<SeP>2025-03-10 21:16:48<SeP>2025-03-10 21:41:51<SeP>2025-03-10 22:06:54<SeP>2025-03-10 22:31:57<SeP>2025-03-10 22:57:00<SeP>2025-03-10 23:22:03<SeP>2025-03-10 23:47:06<SeP>2025-03-11 00:12:09<SeP>2025-03-11 00:37:12<SeP>2025-03-11 01:02:15<SeP>2025-03-11 01:27:18<SeP>2025-03-11 01:52:21<SeP>2025-03-11 02:17:24<SeP>2025-03-11 02:42:27<SeP>2025-03-11 03:07:30<SeP>2025-03-11 03:32:33<SeP>2025-03-11 03:57:36<SeP>2025-03-11 04:22:39<SeP>2025-03-11 04:47:42<SeP>2025-03-11 05:12:45<SeP>2025-03-11 05:37:48<SeP>2025-03-11 06:02:51<SeP>2025-03-11 06:27:54<SeP>2025-03-11 06:52:57<SeP>2025-03-11 07:18:00<SeP>2025-03-11 07:43:03<SeP>2025-03-11 08:08:06<SeP>2025-03-11 08:33:09<SeP>2025-03-11 08:58:12<SeP>2025-03-11 09:23:15<SeP>2025-03-11 09:48:18<SeP>2025-03-11 10:13:21<SeP>2025-03-11 10:38:24<SeP>2025-03-11 11:03:27<SeP>2025-03-11 11:28:30<SeP>2025-03-11 11:53:33<SeP>2025-03-11 12:18:36<SeP>2025-03-11 12:43:39<SeP>2025-03-11 13:08:42<SeP>2025-03-11 13:33:45<SeP>2025-03-11 13:58:48<SeP>2025-03-11 14:23:51<SeP>2025-03-11 14:48:54<SeP>2025-03-11 15:13:57<SeP>2025-03-11 15:39:00<SeP>2025-03-11 16:04:03<SeP>2025-03-11 16:29:06<SeP>2025-03-11 16:54:09<SeP>2025-03-11 17:19:12<SeP>2025-03-11 17:44:15<SeP>2025-03-11 18:09:18<SeP>2025-03-11 18:34:21<SeP>2025-03-11 18:59:24<SeP>2025-03-11 19:24:27<SeP>2025-03-11 19:49:30<SeP>2025-03-11 20:14:33<SeP>2025-03-11 20:39:36<SeP>2025-03-11 21:04:39<SeP>2025-03-11 21:29:42<SeP>2025-03-11 21:54:45<SeP>2025-03-11 22:19:48<SeP>2025-03-11 22:44:51<SeP>2025-03-11 23:09:54<SeP>2025-03-11 23:34:57";
  const item1Label       = "Escaneos";
  const item1Data        = "11<SeP>9<SeP>56<SeP>28<SeP>9<SeP>6<SeP>10<SeP>5<SeP>2<SeP>3<SeP>2<SeP>88<SeP>4<SeP>19<SeP>8<SeP>5<SeP>7<SeP>1<SeP>10<SeP>11<SeP>10<SeP>11<SeP>8<SeP>12<SeP>7<SeP>28<SeP>6<SeP>23<SeP>10<SeP>13<SeP>8<SeP>21<SeP>12<SeP>10<SeP>6<SeP>10<SeP>13<SeP>44<SeP>34<SeP>5<SeP>16<SeP>22<SeP>21<SeP>33<SeP>9<SeP>57<SeP>28<SeP>34<SeP>11<SeP>13<SeP>42<SeP>20<SeP>19<SeP>10<SeP>11<SeP>8<SeP>12<SeP>13<SeP>14<SeP>26<SeP>15<SeP>17<SeP>11<SeP>5<SeP>17<SeP>4<SeP>6<SeP>5<SeP>29<SeP>11<SeP>2<SeP>21<SeP>41<SeP>47<SeP>9<SeP>9<SeP>10<SeP>16<SeP>88<SeP>8<SeP>13<SeP>11<SeP>9<SeP>7<SeP>12<SeP>10<SeP>40<SeP>23<SeP>5<SeP>11<SeP>20<SeP>133<SeP>5<SeP>8<SeP>34<SeP>10<SeP>8<SeP>12<SeP>7<SeP>6<SeP>35<SeP>13<SeP>8<SeP>16<SeP>14<SeP>11<SeP>9<SeP>7<SeP>20<SeP>26<SeP>7<SeP>10<SeP>18<SeP>31<SeP>51<SeP>52<SeP>211<SeP>120<SeP>23<SeP>12<SeP>9<SeP>8<SeP>10<SeP>5<SeP>4<SeP>3<SeP>25<SeP>10<SeP>7<SeP>4<SeP>7<SeP>1<SeP>4<SeP>5<SeP>6<SeP>10<SeP>20<SeP>11<SeP>10<SeP>6<SeP>12<SeP>8<SeP>9<SeP>17<SeP>10<SeP>9<SeP>31<SeP>12<SeP>6<SeP>8<SeP>46<SeP>15<SeP>8<SeP>44<SeP>8<SeP>9<SeP>19<SeP>50<SeP>88<SeP>26<SeP>19<SeP>21<SeP>13<SeP>20<SeP>19<SeP>16<SeP>11<SeP>10<SeP>31<SeP>91<SeP>123<SeP>117<SeP>7<SeP>29<SeP>8<SeP>9<SeP>15<SeP>12<SeP>14<SeP>22<SeP>26<SeP>35<SeP>11<SeP>133<SeP>92<SeP>15<SeP>23<SeP>58<SeP>42<SeP>8<SeP>24<SeP>18<SeP>125<SeP>32<SeP>10<SeP>13<SeP>7<SeP>14<SeP>17<SeP>11<SeP>15<SeP>5<SeP>6<SeP>29<SeP>9<SeP>11<SeP>33<SeP>9<SeP>5<SeP>14<SeP>9<SeP>9<SeP>12<SeP>36<SeP>7<SeP>10<SeP>14<SeP>8<SeP>9<SeP>10<SeP>17<SeP>13<SeP>15<SeP>8<SeP>10<SeP>6<SeP>35<SeP>6<SeP>3<SeP>7<SeP>3<SeP>4<SeP>6<SeP>3<SeP>5<SeP>22<SeP>18<SeP>25<SeP>24<SeP>16<SeP>6<SeP>6<SeP>17<SeP>6<SeP>57<SeP>14<SeP>7<SeP>14<SeP>13<SeP>12<SeP>19<SeP>15<SeP>12<SeP>33<SeP>8<SeP>10<SeP>7<SeP>12<SeP>10<SeP>29<SeP>11<SeP>5<SeP>11<SeP>8<SeP>3<SeP>38<SeP>0<SeP>13<SeP>11<SeP>3<SeP>5<SeP>8<SeP>8<SeP>5<SeP>1<SeP>17<SeP>3<SeP>9<SeP>4<SeP>13<SeP>5<SeP>3<SeP>88<SeP>17<SeP>8<SeP>7<SeP>4<SeP>7<SeP>6<SeP>9<SeP>5<SeP>14<SeP>15<SeP>757<SeP>9<SeP>27<SeP>13<SeP>7<SeP>7<SeP>13<SeP>38<SeP>19<SeP>16<SeP>24<SeP>22<SeP>19<SeP>19<SeP>9<SeP>54<SeP>25<SeP>17<SeP>49<SeP>12<SeP>20<SeP>46<SeP>16<SeP>19<SeP>14<SeP>13<SeP>39<SeP>10<SeP>11<SeP>5<SeP>0<SeP>8<SeP>9<SeP>6<SeP>2<SeP>3<SeP>0<SeP>24<SeP>7<SeP>0<SeP>18<SeP>10<SeP>26<SeP>79<SeP>47<SeP>23<SeP>10<SeP>23<SeP>34<SeP>8<SeP>11<SeP>13<SeP>36<SeP>27<SeP>14<SeP>10<SeP>41<SeP>7<SeP>3<SeP>26<SeP>10<SeP>3<SeP>4<SeP>55<SeP>45<SeP>5<SeP>3<SeP>8<SeP>3<SeP>3<SeP>1<SeP>9<SeP>11<SeP>12<SeP>14<SeP>11<SeP>14<SeP>11<SeP>54<SeP>31<SeP>11<SeP>8<SeP>65<SeP>39<SeP>14<SeP>26<SeP>2<SeP>17<SeP>5<SeP>6<SeP>26<SeP>6<SeP>10<SeP>7<SeP>14<SeP>7<SeP>23<SeP>22<SeP>7<SeP>3<SeP>29<SeP>7<SeP>12<SeP>12<SeP>7<SeP>9<SeP>15";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "19<SeP>40<SeP>60<SeP>10<SeP>23<SeP>5<SeP>69<SeP>50<SeP>10<SeP>15<SeP>12<SeP>5<SeP>9<SeP>49<SeP>49<SeP>4<SeP>2<SeP>2<SeP>15<SeP>48<SeP>8<SeP>1<SeP>19<SeP>6<SeP>9<SeP>5<SeP>7<SeP>8<SeP>12<SeP>5<SeP>5<SeP>5<SeP>11<SeP>11<SeP>7<SeP>7<SeP>86<SeP>129<SeP>76<SeP>14<SeP>9<SeP>36<SeP>4<SeP>2<SeP>5<SeP>37<SeP>21<SeP>61<SeP>20<SeP>12<SeP>52<SeP>31<SeP>67<SeP>76<SeP>6<SeP>10<SeP>11<SeP>13<SeP>59<SeP>6<SeP>9<SeP>9<SeP>2<SeP>3<SeP>9<SeP>1<SeP>3<SeP>26<SeP>66<SeP>38<SeP>24<SeP>49<SeP>57<SeP>3<SeP>6<SeP>27<SeP>24<SeP>66<SeP>75<SeP>25<SeP>15<SeP>10<SeP>11<SeP>8<SeP>36<SeP>46<SeP>19<SeP>11<SeP>11<SeP>12<SeP>34<SeP>30<SeP>6<SeP>5<SeP>12<SeP>8<SeP>44<SeP>62<SeP>8<SeP>3<SeP>8<SeP>7<SeP>8<SeP>39<SeP>50<SeP>65<SeP>6<SeP>14<SeP>12<SeP>11<SeP>10<SeP>68<SeP>58<SeP>16<SeP>18<SeP>6<SeP>7<SeP>24<SeP>78<SeP>64<SeP>6<SeP>5<SeP>16<SeP>11<SeP>9<SeP>22<SeP>68<SeP>48<SeP>100<SeP>170<SeP>151<SeP>137<SeP>42<SeP>44<SeP>28<SeP>14<SeP>22<SeP>11<SeP>9<SeP>29<SeP>35<SeP>34<SeP>32<SeP>23<SeP>8<SeP>117<SeP>8<SeP>8<SeP>8<SeP>7<SeP>11<SeP>9<SeP>10<SeP>8<SeP>9<SeP>11<SeP>17<SeP>5<SeP>35<SeP>62<SeP>15<SeP>3<SeP>6<SeP>32<SeP>6<SeP>9<SeP>28<SeP>31<SeP>25<SeP>8<SeP>32<SeP>42<SeP>19<SeP>6<SeP>18<SeP>20<SeP>39<SeP>98<SeP>77<SeP>18<SeP>12<SeP>19<SeP>7<SeP>6<SeP>4<SeP>4<SeP>3<SeP>4<SeP>4<SeP>1<SeP>4<SeP>3<SeP>1<SeP>22<SeP>71<SeP>51<SeP>40<SeP>61<SeP>19<SeP>19<SeP>10<SeP>11<SeP>5<SeP>8<SeP>6<SeP>39<SeP>25<SeP>5<SeP>0<SeP>3<SeP>3<SeP>2<SeP>15<SeP>4<SeP>3<SeP>2<SeP>8<SeP>3<SeP>4<SeP>7<SeP>4<SeP>56<SeP>12<SeP>61<SeP>155<SeP>48<SeP>24<SeP>17<SeP>16<SeP>8<SeP>5<SeP>6<SeP>10<SeP>10<SeP>73<SeP>67<SeP>8<SeP>10<SeP>64<SeP>32<SeP>4<SeP>2<SeP>3<SeP>5<SeP>1<SeP>3<SeP>4<SeP>3<SeP>5<SeP>10<SeP>5<SeP>8<SeP>4<SeP>23<SeP>35<SeP>20<SeP>23<SeP>8<SeP>5<SeP>5<SeP>4<SeP>10<SeP>32<SeP>5<SeP>7<SeP>221<SeP>29<SeP>23<SeP>24<SeP>15<SeP>7<SeP>10<SeP>3<SeP>6<SeP>6<SeP>2<SeP>2<SeP>2<SeP>17<SeP>12<SeP>3<SeP>7<SeP>4<SeP>253<SeP>236<SeP>7<SeP>10<SeP>48<SeP>43<SeP>43<SeP>253<SeP>17<SeP>253<SeP>15<SeP>11<SeP>277<SeP>40<SeP>11<SeP>6<SeP>5<SeP>7<SeP>10<SeP>18<SeP>7<SeP>8<SeP>26<SeP>39<SeP>37<SeP>18<SeP>8<SeP>6<SeP>6<SeP>11<SeP>13<SeP>14<SeP>8<SeP>44<SeP>35<SeP>39<SeP>17<SeP>9<SeP>17<SeP>4<SeP>6<SeP>26<SeP>40<SeP>43<SeP>9<SeP>7<SeP>7<SeP>6<SeP>7<SeP>6<SeP>7<SeP>13<SeP>107<SeP>172<SeP>67<SeP>56<SeP>47<SeP>29<SeP>9<SeP>61<SeP>169<SeP>64<SeP>8<SeP>13<SeP>5<SeP>2<SeP>22<SeP>30<SeP>34<SeP>41<SeP>1<SeP>2<SeP>3<SeP>16<SeP>6<SeP>4<SeP>88<SeP>110<SeP>18<SeP>8<SeP>8<SeP>6<SeP>7<SeP>15<SeP>5<SeP>3<SeP>6<SeP>6<SeP>50<SeP>99<SeP>25<SeP>1<SeP>1<SeP>31<SeP>67<SeP>97<SeP>88<SeP>301<SeP>39<SeP>20<SeP>26<SeP>35<SeP>14<SeP>7<SeP>4<SeP>15<SeP>3<SeP>14<SeP>11<SeP>7<SeP>16<SeP>15<SeP>7<SeP>2<SeP>62<SeP>94<SeP>31";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-03-05 00:00:00<SeP>2025-03-05 00:25:03<SeP>2025-03-05 00:50:06<SeP>2025-03-05 01:15:09<SeP>2025-03-05 01:40:12<SeP>2025-03-05 02:05:15<SeP>2025-03-05 02:30:18<SeP>2025-03-05 02:55:21<SeP>2025-03-05 03:20:24<SeP>2025-03-05 03:45:27<SeP>2025-03-05 04:10:30<SeP>2025-03-05 04:35:33<SeP>2025-03-05 05:00:36<SeP>2025-03-05 05:25:39<SeP>2025-03-05 05:50:42<SeP>2025-03-05 06:15:45<SeP>2025-03-05 06:40:48<SeP>2025-03-05 07:05:51<SeP>2025-03-05 07:30:54<SeP>2025-03-05 07:55:57<SeP>2025-03-05 08:21:00<SeP>2025-03-05 08:46:03<SeP>2025-03-05 09:11:06<SeP>2025-03-05 09:36:09<SeP>2025-03-05 10:01:12<SeP>2025-03-05 10:26:15<SeP>2025-03-05 10:51:18<SeP>2025-03-05 11:16:21<SeP>2025-03-05 11:41:24<SeP>2025-03-05 12:06:27<SeP>2025-03-05 12:31:30<SeP>2025-03-05 12:56:33<SeP>2025-03-05 13:21:36<SeP>2025-03-05 13:46:39<SeP>2025-03-05 14:11:42<SeP>2025-03-05 14:36:45<SeP>2025-03-05 15:01:48<SeP>2025-03-05 15:26:51<SeP>2025-03-05 15:51:54<SeP>2025-03-05 16:16:57<SeP>2025-03-05 16:42:00<SeP>2025-03-05 17:07:03<SeP>2025-03-05 17:32:06<SeP>2025-03-05 17:57:09<SeP>2025-03-05 18:22:12<SeP>2025-03-05 18:47:15<SeP>2025-03-05 19:12:18<SeP>2025-03-05 19:37:21<SeP>2025-03-05 20:02:24<SeP>2025-03-05 20:27:27<SeP>2025-03-05 20:52:30<SeP>2025-03-05 21:17:33<SeP>2025-03-05 21:42:36<SeP>2025-03-05 22:07:39<SeP>2025-03-05 22:32:42<SeP>2025-03-05 22:57:45<SeP>2025-03-05 23:22:48<SeP>2025-03-05 23:47:51<SeP>2025-03-06 00:12:54<SeP>2025-03-06 00:37:57<SeP>2025-03-06 01:03:00<SeP>2025-03-06 01:28:03<SeP>2025-03-06 01:53:06<SeP>2025-03-06 02:18:09<SeP>2025-03-06 02:43:12<SeP>2025-03-06 03:08:15<SeP>2025-03-06 03:33:18<SeP>2025-03-06 03:58:21<SeP>2025-03-06 04:23:24<SeP>2025-03-06 04:48:27<SeP>2025-03-06 05:13:30<SeP>2025-03-06 05:38:33<SeP>2025-03-06 06:03:36<SeP>2025-03-06 06:28:39<SeP>2025-03-06 06:53:42<SeP>2025-03-06 07:18:45<SeP>2025-03-06 07:43:48<SeP>2025-03-06 08:08:51<SeP>2025-03-06 08:33:54<SeP>2025-03-06 08:58:57<SeP>2025-03-06 09:24:00<SeP>2025-03-06 09:49:03<SeP>2025-03-06 10:14:06<SeP>2025-03-06 10:39:09<SeP>2025-03-06 11:04:12<SeP>2025-03-06 11:29:15<SeP>2025-03-06 11:54:18<SeP>2025-03-06 12:19:21<SeP>2025-03-06 12:44:24<SeP>2025-03-06 13:09:27<SeP>2025-03-06 13:34:30<SeP>2025-03-06 13:59:33<SeP>2025-03-06 14:24:36<SeP>2025-03-06 14:49:39<SeP>2025-03-06 15:14:42<SeP>2025-03-06 15:39:45<SeP>2025-03-06 16:04:48<SeP>2025-03-06 16:29:51<SeP>2025-03-06 16:54:54<SeP>2025-03-06 17:19:57<SeP>2025-03-06 17:45:00<SeP>2025-03-06 18:10:03<SeP>2025-03-06 18:35:06<SeP>2025-03-06 19:00:09<SeP>2025-03-06 19:25:12<SeP>2025-03-06 19:50:15<SeP>2025-03-06 20:15:18<SeP>2025-03-06 20:40:21<SeP>2025-03-06 21:05:24<SeP>2025-03-06 21:30:27<SeP>2025-03-06 21:55:30<SeP>2025-03-06 22:20:33<SeP>2025-03-06 22:45:36<SeP>2025-03-06 23:10:39<SeP>2025-03-06 23:35:42<SeP>2025-03-07 00:00:45<SeP>2025-03-07 00:25:48<SeP>2025-03-07 00:50:51<SeP>2025-03-07 01:15:54<SeP>2025-03-07 01:40:57<SeP>2025-03-07 02:06:00<SeP>2025-03-07 02:31:03<SeP>2025-03-07 02:56:06<SeP>2025-03-07 03:21:09<SeP>2025-03-07 03:46:12<SeP>2025-03-07 04:11:15<SeP>2025-03-07 04:36:18<SeP>2025-03-07 05:01:21<SeP>2025-03-07 05:26:24<SeP>2025-03-07 05:51:27<SeP>2025-03-07 06:16:30<SeP>2025-03-07 06:41:33<SeP>2025-03-07 07:06:36<SeP>2025-03-07 07:31:39<SeP>2025-03-07 07:56:42<SeP>2025-03-07 08:21:45<SeP>2025-03-07 08:46:48<SeP>2025-03-07 09:11:51<SeP>2025-03-07 09:36:54<SeP>2025-03-07 10:01:57<SeP>2025-03-07 10:27:00<SeP>2025-03-07 10:52:03<SeP>2025-03-07 11:17:06<SeP>2025-03-07 11:42:09<SeP>2025-03-07 12:07:12<SeP>2025-03-07 12:32:15<SeP>2025-03-07 12:57:18<SeP>2025-03-07 13:22:21<SeP>2025-03-07 13:47:24<SeP>2025-03-07 14:12:27<SeP>2025-03-07 14:37:30<SeP>2025-03-07 15:02:33<SeP>2025-03-07 15:27:36<SeP>2025-03-07 15:52:39<SeP>2025-03-07 16:17:42<SeP>2025-03-07 16:42:45<SeP>2025-03-07 17:07:48<SeP>2025-03-07 17:32:51<SeP>2025-03-07 17:57:54<SeP>2025-03-07 18:22:57<SeP>2025-03-07 18:48:00<SeP>2025-03-07 19:13:03<SeP>2025-03-07 19:38:06<SeP>2025-03-07 20:03:09<SeP>2025-03-07 20:28:12<SeP>2025-03-07 20:53:15<SeP>2025-03-07 21:18:18<SeP>2025-03-07 21:43:21<SeP>2025-03-07 22:08:24<SeP>2025-03-07 22:33:27<SeP>2025-03-07 22:58:30<SeP>2025-03-07 23:23:33<SeP>2025-03-07 23:48:36<SeP>2025-03-08 00:13:39<SeP>2025-03-08 00:38:42<SeP>2025-03-08 01:03:45<SeP>2025-03-08 01:28:48<SeP>2025-03-08 01:53:51<SeP>2025-03-08 02:18:54<SeP>2025-03-08 02:43:57<SeP>2025-03-08 03:09:00<SeP>2025-03-08 03:34:03<SeP>2025-03-08 03:59:06<SeP>2025-03-08 04:24:09<SeP>2025-03-08 04:49:12<SeP>2025-03-08 05:14:15<SeP>2025-03-08 05:39:18<SeP>2025-03-08 06:04:21<SeP>2025-03-08 06:29:24<SeP>2025-03-08 06:54:27<SeP>2025-03-08 07:19:30<SeP>2025-03-08 07:44:33<SeP>2025-03-08 08:09:36<SeP>2025-03-08 08:34:39<SeP>2025-03-08 08:59:42<SeP>2025-03-08 09:24:45<SeP>2025-03-08 09:49:48<SeP>2025-03-08 10:14:51<SeP>2025-03-08 10:39:54<SeP>2025-03-08 11:04:57<SeP>2025-03-08 11:30:00<SeP>2025-03-08 11:55:03<SeP>2025-03-08 12:20:06<SeP>2025-03-08 12:45:09<SeP>2025-03-08 13:10:12<SeP>2025-03-08 13:35:15<SeP>2025-03-08 14:00:18<SeP>2025-03-08 14:25:21<SeP>2025-03-08 14:50:24<SeP>2025-03-08 15:15:27<SeP>2025-03-08 15:40:30<SeP>2025-03-08 16:05:33<SeP>2025-03-08 16:30:36<SeP>2025-03-08 16:55:39<SeP>2025-03-08 17:20:42<SeP>2025-03-08 17:45:45<SeP>2025-03-08 18:10:48<SeP>2025-03-08 18:35:51<SeP>2025-03-08 19:00:54<SeP>2025-03-08 19:25:57<SeP>2025-03-08 19:51:00<SeP>2025-03-08 20:16:03<SeP>2025-03-08 20:41:06<SeP>2025-03-08 21:06:09<SeP>2025-03-08 21:31:12<SeP>2025-03-08 21:56:15<SeP>2025-03-08 22:21:18<SeP>2025-03-08 22:46:21<SeP>2025-03-08 23:11:24<SeP>2025-03-08 23:36:27<SeP>2025-03-09 00:01:30<SeP>2025-03-09 00:26:33<SeP>2025-03-09 00:51:36<SeP>2025-03-09 01:16:39<SeP>2025-03-09 01:41:42<SeP>2025-03-09 03:06:45<SeP>2025-03-09 03:31:48<SeP>2025-03-09 03:56:51<SeP>2025-03-09 04:21:54<SeP>2025-03-09 04:46:57<SeP>2025-03-09 05:12:00<SeP>2025-03-09 05:37:03<SeP>2025-03-09 06:02:06<SeP>2025-03-09 06:27:09<SeP>2025-03-09 06:52:12<SeP>2025-03-09 07:17:15<SeP>2025-03-09 07:42:18<SeP>2025-03-09 08:07:21<SeP>2025-03-09 08:32:24<SeP>2025-03-09 08:57:27<SeP>2025-03-09 09:22:30<SeP>2025-03-09 09:47:33<SeP>2025-03-09 10:12:36<SeP>2025-03-09 10:37:39<SeP>2025-03-09 11:02:42<SeP>2025-03-09 11:27:45<SeP>2025-03-09 11:52:48<SeP>2025-03-09 12:17:51<SeP>2025-03-09 12:42:54<SeP>2025-03-09 13:07:57<SeP>2025-03-09 13:33:00<SeP>2025-03-09 13:58:03<SeP>2025-03-09 14:23:06<SeP>2025-03-09 14:48:09<SeP>2025-03-09 15:13:12<SeP>2025-03-09 15:38:15<SeP>2025-03-09 16:03:18<SeP>2025-03-09 16:28:21<SeP>2025-03-09 16:53:24<SeP>2025-03-09 17:18:27<SeP>2025-03-09 17:43:30<SeP>2025-03-09 18:08:33<SeP>2025-03-09 18:33:36<SeP>2025-03-09 18:58:39<SeP>2025-03-09 19:23:42<SeP>2025-03-09 19:48:45<SeP>2025-03-09 20:13:48<SeP>2025-03-09 20:38:51<SeP>2025-03-09 21:03:54<SeP>2025-03-09 21:28:57<SeP>2025-03-09 21:54:00<SeP>2025-03-09 22:19:03<SeP>2025-03-09 22:44:06<SeP>2025-03-09 23:09:09<SeP>2025-03-09 23:34:12<SeP>2025-03-09 23:59:15<SeP>2025-03-10 00:24:18<SeP>2025-03-10 00:49:21<SeP>2025-03-10 01:14:24<SeP>2025-03-10 01:39:27<SeP>2025-03-10 02:04:30<SeP>2025-03-10 02:29:33<SeP>2025-03-10 02:54:36<SeP>2025-03-10 03:19:39<SeP>2025-03-10 03:44:42<SeP>2025-03-10 04:09:45<SeP>2025-03-10 04:34:48<SeP>2025-03-10 04:59:51<SeP>2025-03-10 05:24:54<SeP>2025-03-10 05:49:57<SeP>2025-03-10 06:15:00<SeP>2025-03-10 06:40:03<SeP>2025-03-10 07:05:06<SeP>2025-03-10 07:30:09<SeP>2025-03-10 07:55:12<SeP>2025-03-10 08:20:15<SeP>2025-03-10 08:45:18<SeP>2025-03-10 09:10:21<SeP>2025-03-10 09:35:24<SeP>2025-03-10 10:00:27<SeP>2025-03-10 10:25:30<SeP>2025-03-10 10:50:33<SeP>2025-03-10 11:15:36<SeP>2025-03-10 11:40:39<SeP>2025-03-10 12:05:42<SeP>2025-03-10 12:30:45<SeP>2025-03-10 12:55:48<SeP>2025-03-10 13:20:51<SeP>2025-03-10 13:45:54<SeP>2025-03-10 14:10:57<SeP>2025-03-10 14:36:00<SeP>2025-03-10 15:01:03<SeP>2025-03-10 15:26:06<SeP>2025-03-10 15:51:09<SeP>2025-03-10 16:16:12<SeP>2025-03-10 16:41:15<SeP>2025-03-10 17:06:18<SeP>2025-03-10 17:31:21<SeP>2025-03-10 17:56:24<SeP>2025-03-10 18:21:27<SeP>2025-03-10 18:46:30<SeP>2025-03-10 19:11:33<SeP>2025-03-10 19:36:36<SeP>2025-03-10 20:01:39<SeP>2025-03-10 20:26:42<SeP>2025-03-10 20:51:45<SeP>2025-03-10 21:16:48<SeP>2025-03-10 21:41:51<SeP>2025-03-10 22:06:54<SeP>2025-03-10 22:31:57<SeP>2025-03-10 22:57:00<SeP>2025-03-10 23:22:03<SeP>2025-03-10 23:47:06<SeP>2025-03-11 00:12:09<SeP>2025-03-11 00:37:12<SeP>2025-03-11 01:02:15<SeP>2025-03-11 01:27:18<SeP>2025-03-11 01:52:21<SeP>2025-03-11 02:17:24<SeP>2025-03-11 02:42:27<SeP>2025-03-11 03:07:30<SeP>2025-03-11 03:32:33<SeP>2025-03-11 03:57:36<SeP>2025-03-11 04:22:39<SeP>2025-03-11 04:47:42<SeP>2025-03-11 05:12:45<SeP>2025-03-11 05:37:48<SeP>2025-03-11 06:02:51<SeP>2025-03-11 06:27:54<SeP>2025-03-11 06:52:57<SeP>2025-03-11 07:18:00<SeP>2025-03-11 07:43:03<SeP>2025-03-11 08:08:06<SeP>2025-03-11 08:33:09<SeP>2025-03-11 08:58:12<SeP>2025-03-11 09:23:15<SeP>2025-03-11 09:48:18<SeP>2025-03-11 10:13:21<SeP>2025-03-11 10:38:24<SeP>2025-03-11 11:03:27<SeP>2025-03-11 11:28:30<SeP>2025-03-11 11:53:33<SeP>2025-03-11 12:18:36<SeP>2025-03-11 12:43:39<SeP>2025-03-11 13:08:42<SeP>2025-03-11 13:33:45<SeP>2025-03-11 13:58:48<SeP>2025-03-11 14:23:51<SeP>2025-03-11 14:48:54<SeP>2025-03-11 15:13:57<SeP>2025-03-11 15:39:00<SeP>2025-03-11 16:04:03<SeP>2025-03-11 16:29:06<SeP>2025-03-11 16:54:09<SeP>2025-03-11 17:19:12<SeP>2025-03-11 17:44:15<SeP>2025-03-11 18:09:18<SeP>2025-03-11 18:34:21<SeP>2025-03-11 18:59:24<SeP>2025-03-11 19:24:27<SeP>2025-03-11 19:49:30<SeP>2025-03-11 20:14:33<SeP>2025-03-11 20:39:36<SeP>2025-03-11 21:04:39<SeP>2025-03-11 21:29:42<SeP>2025-03-11 21:54:45<SeP>2025-03-11 22:19:48<SeP>2025-03-11 22:44:51<SeP>2025-03-11 23:09:54<SeP>2025-03-11 23:34:57";
  const itemLabel       = "Escaneos";
  const itemData        = "11<SeP>9<SeP>56<SeP>28<SeP>9<SeP>6<SeP>10<SeP>5<SeP>2<SeP>3<SeP>2<SeP>88<SeP>4<SeP>19<SeP>8<SeP>5<SeP>7<SeP>1<SeP>10<SeP>11<SeP>10<SeP>11<SeP>8<SeP>12<SeP>7<SeP>28<SeP>6<SeP>23<SeP>10<SeP>13<SeP>8<SeP>21<SeP>12<SeP>10<SeP>6<SeP>10<SeP>13<SeP>44<SeP>34<SeP>5<SeP>16<SeP>22<SeP>21<SeP>33<SeP>9<SeP>57<SeP>28<SeP>34<SeP>11<SeP>13<SeP>42<SeP>20<SeP>19<SeP>10<SeP>11<SeP>8<SeP>12<SeP>13<SeP>14<SeP>26<SeP>15<SeP>17<SeP>11<SeP>5<SeP>17<SeP>4<SeP>6<SeP>5<SeP>29<SeP>11<SeP>2<SeP>21<SeP>41<SeP>47<SeP>9<SeP>9<SeP>10<SeP>16<SeP>88<SeP>8<SeP>13<SeP>11<SeP>9<SeP>7<SeP>12<SeP>10<SeP>40<SeP>23<SeP>5<SeP>11<SeP>20<SeP>133<SeP>5<SeP>8<SeP>34<SeP>10<SeP>8<SeP>12<SeP>7<SeP>6<SeP>35<SeP>13<SeP>8<SeP>16<SeP>14<SeP>11<SeP>9<SeP>7<SeP>20<SeP>26<SeP>7<SeP>10<SeP>18<SeP>31<SeP>51<SeP>52<SeP>211<SeP>120<SeP>23<SeP>12<SeP>9<SeP>8<SeP>10<SeP>5<SeP>4<SeP>3<SeP>25<SeP>10<SeP>7<SeP>4<SeP>7<SeP>1<SeP>4<SeP>5<SeP>6<SeP>10<SeP>20<SeP>11<SeP>10<SeP>6<SeP>12<SeP>8<SeP>9<SeP>17<SeP>10<SeP>9<SeP>31<SeP>12<SeP>6<SeP>8<SeP>46<SeP>15<SeP>8<SeP>44<SeP>8<SeP>9<SeP>19<SeP>50<SeP>88<SeP>26<SeP>19<SeP>21<SeP>13<SeP>20<SeP>19<SeP>16<SeP>11<SeP>10<SeP>31<SeP>91<SeP>123<SeP>117<SeP>7<SeP>29<SeP>8<SeP>9<SeP>15<SeP>12<SeP>14<SeP>22<SeP>26<SeP>35<SeP>11<SeP>133<SeP>92<SeP>15<SeP>23<SeP>58<SeP>42<SeP>8<SeP>24<SeP>18<SeP>125<SeP>32<SeP>10<SeP>13<SeP>7<SeP>14<SeP>17<SeP>11<SeP>15<SeP>5<SeP>6<SeP>29<SeP>9<SeP>11<SeP>33<SeP>9<SeP>5<SeP>14<SeP>9<SeP>9<SeP>12<SeP>36<SeP>7<SeP>10<SeP>14<SeP>8<SeP>9<SeP>10<SeP>17<SeP>13<SeP>15<SeP>8<SeP>10<SeP>6<SeP>35<SeP>6<SeP>3<SeP>7<SeP>3<SeP>4<SeP>6<SeP>3<SeP>5<SeP>22<SeP>18<SeP>25<SeP>24<SeP>16<SeP>6<SeP>6<SeP>17<SeP>6<SeP>57<SeP>14<SeP>7<SeP>14<SeP>13<SeP>12<SeP>19<SeP>15<SeP>12<SeP>33<SeP>8<SeP>10<SeP>7<SeP>12<SeP>10<SeP>29<SeP>11<SeP>5<SeP>11<SeP>8<SeP>3<SeP>38<SeP>0<SeP>13<SeP>11<SeP>3<SeP>5<SeP>8<SeP>8<SeP>5<SeP>1<SeP>17<SeP>3<SeP>9<SeP>4<SeP>13<SeP>5<SeP>3<SeP>88<SeP>17<SeP>8<SeP>7<SeP>4<SeP>7<SeP>6<SeP>9<SeP>5<SeP>14<SeP>15<SeP>757<SeP>9<SeP>27<SeP>13<SeP>7<SeP>7<SeP>13<SeP>38<SeP>19<SeP>16<SeP>24<SeP>22<SeP>19<SeP>19<SeP>9<SeP>54<SeP>25<SeP>17<SeP>49<SeP>12<SeP>20<SeP>46<SeP>16<SeP>19<SeP>14<SeP>13<SeP>39<SeP>10<SeP>11<SeP>5<SeP>0<SeP>8<SeP>9<SeP>6<SeP>2<SeP>3<SeP>0<SeP>24<SeP>7<SeP>0<SeP>18<SeP>10<SeP>26<SeP>79<SeP>47<SeP>23<SeP>10<SeP>23<SeP>34<SeP>8<SeP>11<SeP>13<SeP>36<SeP>27<SeP>14<SeP>10<SeP>41<SeP>7<SeP>3<SeP>26<SeP>10<SeP>3<SeP>4<SeP>55<SeP>45<SeP>5<SeP>3<SeP>8<SeP>3<SeP>3<SeP>1<SeP>9<SeP>11<SeP>12<SeP>14<SeP>11<SeP>14<SeP>11<SeP>54<SeP>31<SeP>11<SeP>8<SeP>65<SeP>39<SeP>14<SeP>26<SeP>2<SeP>17<SeP>5<SeP>6<SeP>26<SeP>6<SeP>10<SeP>7<SeP>14<SeP>7<SeP>23<SeP>22<SeP>7<SeP>3<SeP>29<SeP>7<SeP>12<SeP>12<SeP>7<SeP>9<SeP>15";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-03-05 00:00:00<SeP>2025-03-05 00:25:03<SeP>2025-03-05 00:50:06<SeP>2025-03-05 01:15:09<SeP>2025-03-05 01:40:12<SeP>2025-03-05 02:05:15<SeP>2025-03-05 02:30:18<SeP>2025-03-05 02:55:21<SeP>2025-03-05 03:20:24<SeP>2025-03-05 03:45:27<SeP>2025-03-05 04:10:30<SeP>2025-03-05 04:35:33<SeP>2025-03-05 05:00:36<SeP>2025-03-05 05:25:39<SeP>2025-03-05 05:50:42<SeP>2025-03-05 06:15:45<SeP>2025-03-05 06:40:48<SeP>2025-03-05 07:05:51<SeP>2025-03-05 07:30:54<SeP>2025-03-05 07:55:57<SeP>2025-03-05 08:21:00<SeP>2025-03-05 08:46:03<SeP>2025-03-05 09:11:06<SeP>2025-03-05 09:36:09<SeP>2025-03-05 10:01:12<SeP>2025-03-05 10:26:15<SeP>2025-03-05 10:51:18<SeP>2025-03-05 11:16:21<SeP>2025-03-05 11:41:24<SeP>2025-03-05 12:06:27<SeP>2025-03-05 12:31:30<SeP>2025-03-05 12:56:33<SeP>2025-03-05 13:21:36<SeP>2025-03-05 13:46:39<SeP>2025-03-05 14:11:42<SeP>2025-03-05 14:36:45<SeP>2025-03-05 15:01:48<SeP>2025-03-05 15:26:51<SeP>2025-03-05 15:51:54<SeP>2025-03-05 16:16:57<SeP>2025-03-05 16:42:00<SeP>2025-03-05 17:07:03<SeP>2025-03-05 17:32:06<SeP>2025-03-05 17:57:09<SeP>2025-03-05 18:22:12<SeP>2025-03-05 18:47:15<SeP>2025-03-05 19:12:18<SeP>2025-03-05 19:37:21<SeP>2025-03-05 20:02:24<SeP>2025-03-05 20:27:27<SeP>2025-03-05 20:52:30<SeP>2025-03-05 21:17:33<SeP>2025-03-05 21:42:36<SeP>2025-03-05 22:07:39<SeP>2025-03-05 22:32:42<SeP>2025-03-05 22:57:45<SeP>2025-03-05 23:22:48<SeP>2025-03-05 23:47:51<SeP>2025-03-06 00:12:54<SeP>2025-03-06 00:37:57<SeP>2025-03-06 01:03:00<SeP>2025-03-06 01:28:03<SeP>2025-03-06 01:53:06<SeP>2025-03-06 02:18:09<SeP>2025-03-06 02:43:12<SeP>2025-03-06 03:08:15<SeP>2025-03-06 03:33:18<SeP>2025-03-06 03:58:21<SeP>2025-03-06 04:23:24<SeP>2025-03-06 04:48:27<SeP>2025-03-06 05:13:30<SeP>2025-03-06 05:38:33<SeP>2025-03-06 06:03:36<SeP>2025-03-06 06:28:39<SeP>2025-03-06 06:53:42<SeP>2025-03-06 07:18:45<SeP>2025-03-06 07:43:48<SeP>2025-03-06 08:08:51<SeP>2025-03-06 08:33:54<SeP>2025-03-06 08:58:57<SeP>2025-03-06 09:24:00<SeP>2025-03-06 09:49:03<SeP>2025-03-06 10:14:06<SeP>2025-03-06 10:39:09<SeP>2025-03-06 11:04:12<SeP>2025-03-06 11:29:15<SeP>2025-03-06 11:54:18<SeP>2025-03-06 12:19:21<SeP>2025-03-06 12:44:24<SeP>2025-03-06 13:09:27<SeP>2025-03-06 13:34:30<SeP>2025-03-06 13:59:33<SeP>2025-03-06 14:24:36<SeP>2025-03-06 14:49:39<SeP>2025-03-06 15:14:42<SeP>2025-03-06 15:39:45<SeP>2025-03-06 16:04:48<SeP>2025-03-06 16:29:51<SeP>2025-03-06 16:54:54<SeP>2025-03-06 17:19:57<SeP>2025-03-06 17:45:00<SeP>2025-03-06 18:10:03<SeP>2025-03-06 18:35:06<SeP>2025-03-06 19:00:09<SeP>2025-03-06 19:25:12<SeP>2025-03-06 19:50:15<SeP>2025-03-06 20:15:18<SeP>2025-03-06 20:40:21<SeP>2025-03-06 21:05:24<SeP>2025-03-06 21:30:27<SeP>2025-03-06 21:55:30<SeP>2025-03-06 22:20:33<SeP>2025-03-06 22:45:36<SeP>2025-03-06 23:10:39<SeP>2025-03-06 23:35:42<SeP>2025-03-07 00:00:45<SeP>2025-03-07 00:25:48<SeP>2025-03-07 00:50:51<SeP>2025-03-07 01:15:54<SeP>2025-03-07 01:40:57<SeP>2025-03-07 02:06:00<SeP>2025-03-07 02:31:03<SeP>2025-03-07 02:56:06<SeP>2025-03-07 03:21:09<SeP>2025-03-07 03:46:12<SeP>2025-03-07 04:11:15<SeP>2025-03-07 04:36:18<SeP>2025-03-07 05:01:21<SeP>2025-03-07 05:26:24<SeP>2025-03-07 05:51:27<SeP>2025-03-07 06:16:30<SeP>2025-03-07 06:41:33<SeP>2025-03-07 07:06:36<SeP>2025-03-07 07:31:39<SeP>2025-03-07 07:56:42<SeP>2025-03-07 08:21:45<SeP>2025-03-07 08:46:48<SeP>2025-03-07 09:11:51<SeP>2025-03-07 09:36:54<SeP>2025-03-07 10:01:57<SeP>2025-03-07 10:27:00<SeP>2025-03-07 10:52:03<SeP>2025-03-07 11:17:06<SeP>2025-03-07 11:42:09<SeP>2025-03-07 12:07:12<SeP>2025-03-07 12:32:15<SeP>2025-03-07 12:57:18<SeP>2025-03-07 13:22:21<SeP>2025-03-07 13:47:24<SeP>2025-03-07 14:12:27<SeP>2025-03-07 14:37:30<SeP>2025-03-07 15:02:33<SeP>2025-03-07 15:27:36<SeP>2025-03-07 15:52:39<SeP>2025-03-07 16:17:42<SeP>2025-03-07 16:42:45<SeP>2025-03-07 17:07:48<SeP>2025-03-07 17:32:51<SeP>2025-03-07 17:57:54<SeP>2025-03-07 18:22:57<SeP>2025-03-07 18:48:00<SeP>2025-03-07 19:13:03<SeP>2025-03-07 19:38:06<SeP>2025-03-07 20:03:09<SeP>2025-03-07 20:28:12<SeP>2025-03-07 20:53:15<SeP>2025-03-07 21:18:18<SeP>2025-03-07 21:43:21<SeP>2025-03-07 22:08:24<SeP>2025-03-07 22:33:27<SeP>2025-03-07 22:58:30<SeP>2025-03-07 23:23:33<SeP>2025-03-07 23:48:36<SeP>2025-03-08 00:13:39<SeP>2025-03-08 00:38:42<SeP>2025-03-08 01:03:45<SeP>2025-03-08 01:28:48<SeP>2025-03-08 01:53:51<SeP>2025-03-08 02:18:54<SeP>2025-03-08 02:43:57<SeP>2025-03-08 03:09:00<SeP>2025-03-08 03:34:03<SeP>2025-03-08 03:59:06<SeP>2025-03-08 04:24:09<SeP>2025-03-08 04:49:12<SeP>2025-03-08 05:14:15<SeP>2025-03-08 05:39:18<SeP>2025-03-08 06:04:21<SeP>2025-03-08 06:29:24<SeP>2025-03-08 06:54:27<SeP>2025-03-08 07:19:30<SeP>2025-03-08 07:44:33<SeP>2025-03-08 08:09:36<SeP>2025-03-08 08:34:39<SeP>2025-03-08 08:59:42<SeP>2025-03-08 09:24:45<SeP>2025-03-08 09:49:48<SeP>2025-03-08 10:14:51<SeP>2025-03-08 10:39:54<SeP>2025-03-08 11:04:57<SeP>2025-03-08 11:30:00<SeP>2025-03-08 11:55:03<SeP>2025-03-08 12:20:06<SeP>2025-03-08 12:45:09<SeP>2025-03-08 13:10:12<SeP>2025-03-08 13:35:15<SeP>2025-03-08 14:00:18<SeP>2025-03-08 14:25:21<SeP>2025-03-08 14:50:24<SeP>2025-03-08 15:15:27<SeP>2025-03-08 15:40:30<SeP>2025-03-08 16:05:33<SeP>2025-03-08 16:30:36<SeP>2025-03-08 16:55:39<SeP>2025-03-08 17:20:42<SeP>2025-03-08 17:45:45<SeP>2025-03-08 18:10:48<SeP>2025-03-08 18:35:51<SeP>2025-03-08 19:00:54<SeP>2025-03-08 19:25:57<SeP>2025-03-08 19:51:00<SeP>2025-03-08 20:16:03<SeP>2025-03-08 20:41:06<SeP>2025-03-08 21:06:09<SeP>2025-03-08 21:31:12<SeP>2025-03-08 21:56:15<SeP>2025-03-08 22:21:18<SeP>2025-03-08 22:46:21<SeP>2025-03-08 23:11:24<SeP>2025-03-08 23:36:27<SeP>2025-03-09 00:01:30<SeP>2025-03-09 00:26:33<SeP>2025-03-09 00:51:36<SeP>2025-03-09 01:16:39<SeP>2025-03-09 01:41:42<SeP>2025-03-09 03:06:45<SeP>2025-03-09 03:31:48<SeP>2025-03-09 03:56:51<SeP>2025-03-09 04:21:54<SeP>2025-03-09 04:46:57<SeP>2025-03-09 05:12:00<SeP>2025-03-09 05:37:03<SeP>2025-03-09 06:02:06<SeP>2025-03-09 06:27:09<SeP>2025-03-09 06:52:12<SeP>2025-03-09 07:17:15<SeP>2025-03-09 07:42:18<SeP>2025-03-09 08:07:21<SeP>2025-03-09 08:32:24<SeP>2025-03-09 08:57:27<SeP>2025-03-09 09:22:30<SeP>2025-03-09 09:47:33<SeP>2025-03-09 10:12:36<SeP>2025-03-09 10:37:39<SeP>2025-03-09 11:02:42<SeP>2025-03-09 11:27:45<SeP>2025-03-09 11:52:48<SeP>2025-03-09 12:17:51<SeP>2025-03-09 12:42:54<SeP>2025-03-09 13:07:57<SeP>2025-03-09 13:33:00<SeP>2025-03-09 13:58:03<SeP>2025-03-09 14:23:06<SeP>2025-03-09 14:48:09<SeP>2025-03-09 15:13:12<SeP>2025-03-09 15:38:15<SeP>2025-03-09 16:03:18<SeP>2025-03-09 16:28:21<SeP>2025-03-09 16:53:24<SeP>2025-03-09 17:18:27<SeP>2025-03-09 17:43:30<SeP>2025-03-09 18:08:33<SeP>2025-03-09 18:33:36<SeP>2025-03-09 18:58:39<SeP>2025-03-09 19:23:42<SeP>2025-03-09 19:48:45<SeP>2025-03-09 20:13:48<SeP>2025-03-09 20:38:51<SeP>2025-03-09 21:03:54<SeP>2025-03-09 21:28:57<SeP>2025-03-09 21:54:00<SeP>2025-03-09 22:19:03<SeP>2025-03-09 22:44:06<SeP>2025-03-09 23:09:09<SeP>2025-03-09 23:34:12<SeP>2025-03-09 23:59:15<SeP>2025-03-10 00:24:18<SeP>2025-03-10 00:49:21<SeP>2025-03-10 01:14:24<SeP>2025-03-10 01:39:27<SeP>2025-03-10 02:04:30<SeP>2025-03-10 02:29:33<SeP>2025-03-10 02:54:36<SeP>2025-03-10 03:19:39<SeP>2025-03-10 03:44:42<SeP>2025-03-10 04:09:45<SeP>2025-03-10 04:34:48<SeP>2025-03-10 04:59:51<SeP>2025-03-10 05:24:54<SeP>2025-03-10 05:49:57<SeP>2025-03-10 06:15:00<SeP>2025-03-10 06:40:03<SeP>2025-03-10 07:05:06<SeP>2025-03-10 07:30:09<SeP>2025-03-10 07:55:12<SeP>2025-03-10 08:20:15<SeP>2025-03-10 08:45:18<SeP>2025-03-10 09:10:21<SeP>2025-03-10 09:35:24<SeP>2025-03-10 10:00:27<SeP>2025-03-10 10:25:30<SeP>2025-03-10 10:50:33<SeP>2025-03-10 11:15:36<SeP>2025-03-10 11:40:39<SeP>2025-03-10 12:05:42<SeP>2025-03-10 12:30:45<SeP>2025-03-10 12:55:48<SeP>2025-03-10 13:20:51<SeP>2025-03-10 13:45:54<SeP>2025-03-10 14:10:57<SeP>2025-03-10 14:36:00<SeP>2025-03-10 15:01:03<SeP>2025-03-10 15:26:06<SeP>2025-03-10 15:51:09<SeP>2025-03-10 16:16:12<SeP>2025-03-10 16:41:15<SeP>2025-03-10 17:06:18<SeP>2025-03-10 17:31:21<SeP>2025-03-10 17:56:24<SeP>2025-03-10 18:21:27<SeP>2025-03-10 18:46:30<SeP>2025-03-10 19:11:33<SeP>2025-03-10 19:36:36<SeP>2025-03-10 20:01:39<SeP>2025-03-10 20:26:42<SeP>2025-03-10 20:51:45<SeP>2025-03-10 21:16:48<SeP>2025-03-10 21:41:51<SeP>2025-03-10 22:06:54<SeP>2025-03-10 22:31:57<SeP>2025-03-10 22:57:00<SeP>2025-03-10 23:22:03<SeP>2025-03-10 23:47:06<SeP>2025-03-11 00:12:09<SeP>2025-03-11 00:37:12<SeP>2025-03-11 01:02:15<SeP>2025-03-11 01:27:18<SeP>2025-03-11 01:52:21<SeP>2025-03-11 02:17:24<SeP>2025-03-11 02:42:27<SeP>2025-03-11 03:07:30<SeP>2025-03-11 03:32:33<SeP>2025-03-11 03:57:36<SeP>2025-03-11 04:22:39<SeP>2025-03-11 04:47:42<SeP>2025-03-11 05:12:45<SeP>2025-03-11 05:37:48<SeP>2025-03-11 06:02:51<SeP>2025-03-11 06:27:54<SeP>2025-03-11 06:52:57<SeP>2025-03-11 07:18:00<SeP>2025-03-11 07:43:03<SeP>2025-03-11 08:08:06<SeP>2025-03-11 08:33:09<SeP>2025-03-11 08:58:12<SeP>2025-03-11 09:23:15<SeP>2025-03-11 09:48:18<SeP>2025-03-11 10:13:21<SeP>2025-03-11 10:38:24<SeP>2025-03-11 11:03:27<SeP>2025-03-11 11:28:30<SeP>2025-03-11 11:53:33<SeP>2025-03-11 12:18:36<SeP>2025-03-11 12:43:39<SeP>2025-03-11 13:08:42<SeP>2025-03-11 13:33:45<SeP>2025-03-11 13:58:48<SeP>2025-03-11 14:23:51<SeP>2025-03-11 14:48:54<SeP>2025-03-11 15:13:57<SeP>2025-03-11 15:39:00<SeP>2025-03-11 16:04:03<SeP>2025-03-11 16:29:06<SeP>2025-03-11 16:54:09<SeP>2025-03-11 17:19:12<SeP>2025-03-11 17:44:15<SeP>2025-03-11 18:09:18<SeP>2025-03-11 18:34:21<SeP>2025-03-11 18:59:24<SeP>2025-03-11 19:24:27<SeP>2025-03-11 19:49:30<SeP>2025-03-11 20:14:33<SeP>2025-03-11 20:39:36<SeP>2025-03-11 21:04:39<SeP>2025-03-11 21:29:42<SeP>2025-03-11 21:54:45<SeP>2025-03-11 22:19:48<SeP>2025-03-11 22:44:51<SeP>2025-03-11 23:09:54<SeP>2025-03-11 23:34:57";
  const itemLabel       = "Ataques";
  const itemData        = "19<SeP>40<SeP>60<SeP>10<SeP>23<SeP>5<SeP>69<SeP>50<SeP>10<SeP>15<SeP>12<SeP>5<SeP>9<SeP>49<SeP>49<SeP>4<SeP>2<SeP>2<SeP>15<SeP>48<SeP>8<SeP>1<SeP>19<SeP>6<SeP>9<SeP>5<SeP>7<SeP>8<SeP>12<SeP>5<SeP>5<SeP>5<SeP>11<SeP>11<SeP>7<SeP>7<SeP>86<SeP>129<SeP>76<SeP>14<SeP>9<SeP>36<SeP>4<SeP>2<SeP>5<SeP>37<SeP>21<SeP>61<SeP>20<SeP>12<SeP>52<SeP>31<SeP>67<SeP>76<SeP>6<SeP>10<SeP>11<SeP>13<SeP>59<SeP>6<SeP>9<SeP>9<SeP>2<SeP>3<SeP>9<SeP>1<SeP>3<SeP>26<SeP>66<SeP>38<SeP>24<SeP>49<SeP>57<SeP>3<SeP>6<SeP>27<SeP>24<SeP>66<SeP>75<SeP>25<SeP>15<SeP>10<SeP>11<SeP>8<SeP>36<SeP>46<SeP>19<SeP>11<SeP>11<SeP>12<SeP>34<SeP>30<SeP>6<SeP>5<SeP>12<SeP>8<SeP>44<SeP>62<SeP>8<SeP>3<SeP>8<SeP>7<SeP>8<SeP>39<SeP>50<SeP>65<SeP>6<SeP>14<SeP>12<SeP>11<SeP>10<SeP>68<SeP>58<SeP>16<SeP>18<SeP>6<SeP>7<SeP>24<SeP>78<SeP>64<SeP>6<SeP>5<SeP>16<SeP>11<SeP>9<SeP>22<SeP>68<SeP>48<SeP>100<SeP>170<SeP>151<SeP>137<SeP>42<SeP>44<SeP>28<SeP>14<SeP>22<SeP>11<SeP>9<SeP>29<SeP>35<SeP>34<SeP>32<SeP>23<SeP>8<SeP>117<SeP>8<SeP>8<SeP>8<SeP>7<SeP>11<SeP>9<SeP>10<SeP>8<SeP>9<SeP>11<SeP>17<SeP>5<SeP>35<SeP>62<SeP>15<SeP>3<SeP>6<SeP>32<SeP>6<SeP>9<SeP>28<SeP>31<SeP>25<SeP>8<SeP>32<SeP>42<SeP>19<SeP>6<SeP>18<SeP>20<SeP>39<SeP>98<SeP>77<SeP>18<SeP>12<SeP>19<SeP>7<SeP>6<SeP>4<SeP>4<SeP>3<SeP>4<SeP>4<SeP>1<SeP>4<SeP>3<SeP>1<SeP>22<SeP>71<SeP>51<SeP>40<SeP>61<SeP>19<SeP>19<SeP>10<SeP>11<SeP>5<SeP>8<SeP>6<SeP>39<SeP>25<SeP>5<SeP>0<SeP>3<SeP>3<SeP>2<SeP>15<SeP>4<SeP>3<SeP>2<SeP>8<SeP>3<SeP>4<SeP>7<SeP>4<SeP>56<SeP>12<SeP>61<SeP>155<SeP>48<SeP>24<SeP>17<SeP>16<SeP>8<SeP>5<SeP>6<SeP>10<SeP>10<SeP>73<SeP>67<SeP>8<SeP>10<SeP>64<SeP>32<SeP>4<SeP>2<SeP>3<SeP>5<SeP>1<SeP>3<SeP>4<SeP>3<SeP>5<SeP>10<SeP>5<SeP>8<SeP>4<SeP>23<SeP>35<SeP>20<SeP>23<SeP>8<SeP>5<SeP>5<SeP>4<SeP>10<SeP>32<SeP>5<SeP>7<SeP>221<SeP>29<SeP>23<SeP>24<SeP>15<SeP>7<SeP>10<SeP>3<SeP>6<SeP>6<SeP>2<SeP>2<SeP>2<SeP>17<SeP>12<SeP>3<SeP>7<SeP>4<SeP>253<SeP>236<SeP>7<SeP>10<SeP>48<SeP>43<SeP>43<SeP>253<SeP>17<SeP>253<SeP>15<SeP>11<SeP>277<SeP>40<SeP>11<SeP>6<SeP>5<SeP>7<SeP>10<SeP>18<SeP>7<SeP>8<SeP>26<SeP>39<SeP>37<SeP>18<SeP>8<SeP>6<SeP>6<SeP>11<SeP>13<SeP>14<SeP>8<SeP>44<SeP>35<SeP>39<SeP>17<SeP>9<SeP>17<SeP>4<SeP>6<SeP>26<SeP>40<SeP>43<SeP>9<SeP>7<SeP>7<SeP>6<SeP>7<SeP>6<SeP>7<SeP>13<SeP>107<SeP>172<SeP>67<SeP>56<SeP>47<SeP>29<SeP>9<SeP>61<SeP>169<SeP>64<SeP>8<SeP>13<SeP>5<SeP>2<SeP>22<SeP>30<SeP>34<SeP>41<SeP>1<SeP>2<SeP>3<SeP>16<SeP>6<SeP>4<SeP>88<SeP>110<SeP>18<SeP>8<SeP>8<SeP>6<SeP>7<SeP>15<SeP>5<SeP>3<SeP>6<SeP>6<SeP>50<SeP>99<SeP>25<SeP>1<SeP>1<SeP>31<SeP>67<SeP>97<SeP>88<SeP>301<SeP>39<SeP>20<SeP>26<SeP>35<SeP>14<SeP>7<SeP>4<SeP>15<SeP>3<SeP>14<SeP>11<SeP>7<SeP>16<SeP>15<SeP>7<SeP>2<SeP>62<SeP>94<SeP>31";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Romania<SeP>Macao<SeP>Hong Kong<SeP>Japan<SeP>Taiwan<SeP>Indonesia<SeP>Singapore";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "3865<SeP>2192<SeP>1144<SeP>948<SeP>936<SeP>921<SeP>733<SeP>678<SeP>636<SeP>604";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Macao<SeP>United States<SeP>Japan<SeP>India<SeP>Hong Kong<SeP>Ukraine<SeP>Russia<SeP>South Korea<SeP>Nigeria";
  const itemLabel   = "Scans";
  const itemData    = "2453<SeP>936<SeP>747<SeP>667<SeP>516<SeP>468<SeP>257<SeP>233<SeP>175<SeP>163";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "United States<SeP>China<SeP>Romania<SeP>India<SeP>Indonesia<SeP>Taiwan<SeP>France<SeP>Singapore<SeP>Hong Kong<SeP>South Korea";
  const itemLabel   = "Attacks";
  const itemData    = "1445<SeP>1412<SeP>859<SeP>628<SeP>550<SeP>543<SeP>523<SeP>515<SeP>453<SeP>382";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>4134<SeP>47890<SeP>4609<SeP>207566<SeP>16276<SeP>9829<SeP>4837<SeP>4766<SeP>135377";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "1830<SeP>1609<SeP>1089<SeP>936<SeP>700<SeP>504<SeP>439<SeP>406<SeP>361<SeP>361";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4609<SeP>9829<SeP>4837<SeP>17676<SeP>207566<SeP>2519<SeP>21497<SeP>4766<SeP>329244";
  const itemLabel   = "Scans";
  const itemData    = "1446<SeP>936<SeP>438<SeP>387<SeP>339<SeP>293<SeP>288<SeP>196<SeP>156<SeP>139";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>47890<SeP>16276<SeP>207566<SeP>45090<SeP>135377<SeP>136052<SeP>8075<SeP>142002<SeP>8151";
  const itemLabel   = "Atacks";
  const itemData    = "1743<SeP>977<SeP>484<SeP>407<SeP>308<SeP>299<SeP>275<SeP>252<SeP>251<SeP>250";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Romania<SeP>Macao<SeP>Hong Kong<SeP>Japan<SeP>Taiwan<SeP>Indonesia<SeP>Singapore";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "3865<SeP>2192<SeP>1144<SeP>948<SeP>936<SeP>921<SeP>733<SeP>678<SeP>636<SeP>604";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Macao<SeP>United States<SeP>Japan<SeP>India<SeP>Hong Kong<SeP>Ukraine<SeP>Russia<SeP>South Korea<SeP>Nigeria";
  const itemLabel   = "Escaneos";
  const itemData    = "2453<SeP>936<SeP>747<SeP>667<SeP>516<SeP>468<SeP>257<SeP>233<SeP>175<SeP>163";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "United States<SeP>China<SeP>Romania<SeP>India<SeP>Indonesia<SeP>Taiwan<SeP>France<SeP>Singapore<SeP>Hong Kong<SeP>South Korea";
  const itemLabel   = "Ataques";
  const itemData    = "1445<SeP>1412<SeP>859<SeP>628<SeP>550<SeP>543<SeP>523<SeP>515<SeP>453<SeP>382";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>4134<SeP>47890<SeP>4609<SeP>207566<SeP>16276<SeP>9829<SeP>4837<SeP>4766<SeP>135377";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "1830<SeP>1609<SeP>1089<SeP>936<SeP>700<SeP>504<SeP>439<SeP>406<SeP>361<SeP>361";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4609<SeP>9829<SeP>4837<SeP>17676<SeP>207566<SeP>2519<SeP>21497<SeP>4766<SeP>329244";
  const itemLabel   = "Escaneos";
  const itemData    = "1446<SeP>936<SeP>438<SeP>387<SeP>339<SeP>293<SeP>288<SeP>196<SeP>156<SeP>139";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>47890<SeP>16276<SeP>207566<SeP>45090<SeP>135377<SeP>136052<SeP>8075<SeP>142002<SeP>8151";
  const itemLabel   = "Ataques";
  const itemData    = "1743<SeP>977<SeP>484<SeP>407<SeP>308<SeP>299<SeP>275<SeP>252<SeP>251<SeP>250";
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
