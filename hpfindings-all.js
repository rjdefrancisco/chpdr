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
  document.getElementById("last-updated").innerHTML = "2025-2-18";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "34.4";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.4";
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
  const metricData    = "2778222";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "536603";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2241619";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "136693";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1413873";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "827746";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52632";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "244415";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "583331";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42121";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2778222";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "536603";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2241619";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "136693";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1413873";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "827746";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52632";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "244415";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "583331";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42121";
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
  const incomingData = "2778222<SeP>536603<SeP>2241619<SeP>136693";
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
  const incomingData = "2241619<SeP>1413873<SeP>827746<SeP>52632";
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
  const incomingData = "827746<SeP>244415<SeP>583331<SeP>42121";
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
  const incomingData = "2554585<SeP>252005<SeP>2302580";
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
  const incomingData = "388170<SeP>144<SeP>388026<SeP>224";
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
  const incomingData = "2778222<SeP>536603<SeP>2241619<SeP>136693";
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
  const incomingData = "2241619<SeP>1413873<SeP>827746<SeP>52632";
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
  const incomingData = "827746<SeP>244415<SeP>583331<SeP>42121";
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
  const incomingData = "2554585<SeP>252005<SeP>2302580";
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
  const incomingData = "388170<SeP>144<SeP>388026<SeP>224";
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
  const column3Data   = "216642<SeP>198210<SeP>12441<SeP>11876<SeP>9665<SeP>9355<SeP>6436<SeP>5593<SeP>4618<SeP>3443";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4<SeP>992cb5a753697ee2642aa390f09326fcdb7fd59119053d6b1bdd35d47e62f472";
  const column2Data  = "207831<SeP>42956<SeP>481<SeP>442<SeP>423<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>upload<SeP>upload";
  const column4Data  = "malicious<SeP>harmless<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>harmless<SeP>harmless<SeP>NA<SeP>NA";
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
  const column2Data  = "2364957<SeP>413265";
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
  const column3Data   = "216642<SeP>198210<SeP>12441<SeP>11876<SeP>9665<SeP>9355<SeP>6436<SeP>5593<SeP>4618<SeP>3443";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4<SeP>992cb5a753697ee2642aa390f09326fcdb7fd59119053d6b1bdd35d47e62f472";
  const column2Data  = "207831<SeP>42956<SeP>481<SeP>442<SeP>423<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>upload<SeP>upload";
  let   column4Data  = "malicious<SeP>harmless<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>harmless<SeP>harmless<SeP>NA<SeP>NA";
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
  const column2Data  = "2364957<SeP>413265";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-18";

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
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "traffic between 2023-07-26 and 2025-02-16"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          358233,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "scans between 2023-07-26 and 2025-02-16"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          221284,32,
          358233,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "attacks between 2023-07-26 and 2025-02-16"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          136949,21,
          358233,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-18";

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
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "tráfico entre 2023-07-26 y 2025-02-16"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          358233,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "escaneos entre 2023-07-26 y 2025-02-16"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          221284,32,
          358233,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "ataques entre 2023-07-26 y 2025-02-16"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          136949,21,
          358233,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:22:57<SeP>2023-07-28 20:45:54<SeP>2023-07-30 07:08:51<SeP>2023-07-31 17:31:48<SeP>2023-08-02 03:54:45<SeP>2023-08-03 14:17:42<SeP>2023-08-05 00:40:39<SeP>2023-08-06 11:03:36<SeP>2023-08-07 21:26:33<SeP>2023-08-09 07:49:30<SeP>2023-08-10 18:12:27<SeP>2023-08-12 04:35:24<SeP>2023-08-13 14:58:21<SeP>2023-08-15 01:21:18<SeP>2023-08-16 11:44:15<SeP>2023-08-17 22:07:12<SeP>2023-08-19 08:30:09<SeP>2023-08-20 18:53:06<SeP>2023-08-22 05:16:03<SeP>2023-08-23 15:39:00<SeP>2023-08-25 02:01:57<SeP>2023-08-26 12:24:54<SeP>2023-08-27 22:47:51<SeP>2023-08-29 09:10:48<SeP>2023-08-30 19:33:45<SeP>2023-09-01 05:56:42<SeP>2023-09-02 16:19:39<SeP>2023-09-04 02:42:36<SeP>2023-09-05 13:05:33<SeP>2023-09-06 23:28:30<SeP>2023-09-08 09:51:27<SeP>2023-09-09 20:14:24<SeP>2023-09-11 06:37:21<SeP>2023-09-12 17:00:18<SeP>2023-09-14 03:23:15<SeP>2023-09-15 13:46:12<SeP>2023-09-17 00:09:09<SeP>2023-09-18 10:32:06<SeP>2023-09-19 20:55:03<SeP>2023-09-21 07:18:00<SeP>2023-09-22 17:40:57<SeP>2023-09-24 04:03:54<SeP>2023-09-25 14:26:51<SeP>2023-09-27 00:49:48<SeP>2023-09-28 11:12:45<SeP>2023-09-29 21:35:42<SeP>2023-10-01 07:58:39<SeP>2023-10-02 18:21:36<SeP>2023-10-04 04:44:33<SeP>2023-10-05 15:07:30<SeP>2023-10-07 01:30:27<SeP>2023-10-08 11:53:24<SeP>2023-10-09 22:16:21<SeP>2023-10-11 08:39:18<SeP>2023-10-12 19:02:15<SeP>2023-10-14 05:25:12<SeP>2023-10-15 15:48:09<SeP>2023-10-17 02:11:06<SeP>2023-10-18 12:34:03<SeP>2023-10-19 22:57:00<SeP>2023-10-21 09:19:57<SeP>2023-10-22 19:42:54<SeP>2023-10-24 06:05:51<SeP>2023-10-25 16:28:48<SeP>2023-10-27 02:51:45<SeP>2023-10-28 13:14:42<SeP>2023-10-29 23:37:39<SeP>2023-10-31 10:00:36<SeP>2023-11-01 20:23:33<SeP>2023-11-03 06:46:30<SeP>2023-11-04 17:09:27<SeP>2023-11-06 02:32:24<SeP>2023-11-07 12:55:21<SeP>2023-11-08 23:18:18<SeP>2023-11-10 09:41:15<SeP>2023-11-11 20:04:12<SeP>2023-11-13 06:27:09<SeP>2023-11-14 16:50:06<SeP>2023-11-16 03:13:03<SeP>2023-11-17 13:36:00<SeP>2023-11-18 23:58:57<SeP>2023-11-20 10:21:54<SeP>2023-11-21 20:44:51<SeP>2023-11-23 07:07:48<SeP>2023-11-24 17:30:45<SeP>2023-11-26 03:53:42<SeP>2023-11-27 14:16:39<SeP>2023-11-29 00:39:36<SeP>2023-11-30 11:02:33<SeP>2023-12-01 21:25:30<SeP>2023-12-03 07:48:27<SeP>2023-12-04 18:11:24<SeP>2023-12-06 04:34:21<SeP>2023-12-07 14:57:18<SeP>2023-12-09 01:20:15<SeP>2023-12-10 11:43:12<SeP>2023-12-11 22:06:09<SeP>2023-12-13 08:29:06<SeP>2023-12-14 18:52:03<SeP>2023-12-16 05:15:00<SeP>2023-12-17 15:37:57<SeP>2023-12-19 02:00:54<SeP>2023-12-20 12:23:51<SeP>2023-12-21 22:46:48<SeP>2023-12-23 09:09:45<SeP>2023-12-24 19:32:42<SeP>2023-12-26 05:55:39<SeP>2023-12-27 16:18:36<SeP>2023-12-29 02:41:33<SeP>2023-12-30 13:04:30<SeP>2023-12-31 23:27:27<SeP>2024-01-02 09:50:24<SeP>2024-01-03 20:13:21<SeP>2024-01-05 06:36:18<SeP>2024-01-06 16:59:15<SeP>2024-01-08 03:22:12<SeP>2024-01-09 13:45:09<SeP>2024-01-11 00:08:06<SeP>2024-01-12 10:31:03<SeP>2024-01-13 20:54:00<SeP>2024-01-15 07:16:57<SeP>2024-01-16 17:39:54<SeP>2024-01-18 04:02:51<SeP>2024-01-19 14:25:48<SeP>2024-01-21 00:48:45<SeP>2024-01-22 11:11:42<SeP>2024-01-23 21:34:39<SeP>2024-01-25 07:57:36<SeP>2024-01-26 18:20:33<SeP>2024-01-28 04:43:30<SeP>2024-01-29 15:06:27<SeP>2024-01-31 01:29:24<SeP>2024-02-01 11:52:21<SeP>2024-02-02 22:15:18<SeP>2024-02-04 08:38:15<SeP>2024-02-05 19:01:12<SeP>2024-02-07 05:24:09<SeP>2024-02-08 15:47:06<SeP>2024-02-10 02:10:03<SeP>2024-02-11 12:33:00<SeP>2024-02-12 22:55:57<SeP>2024-02-14 09:18:54<SeP>2024-02-15 19:41:51<SeP>2024-02-17 06:04:48<SeP>2024-02-18 16:27:45<SeP>2024-02-20 02:50:42<SeP>2024-02-21 13:13:39<SeP>2024-02-22 23:36:36<SeP>2024-02-24 09:59:33<SeP>2024-02-25 20:22:30<SeP>2024-02-27 06:45:27<SeP>2024-02-28 17:08:24<SeP>2024-03-01 03:31:21<SeP>2024-03-02 13:54:18<SeP>2024-03-04 00:17:15<SeP>2024-03-05 10:40:12<SeP>2024-03-06 21:03:09<SeP>2024-03-08 07:26:06<SeP>2024-03-09 17:49:03<SeP>2024-03-11 05:12:00<SeP>2024-03-12 15:34:57<SeP>2024-03-14 01:57:54<SeP>2024-03-15 12:20:51<SeP>2024-03-16 22:43:48<SeP>2024-03-18 09:06:45<SeP>2024-03-19 19:29:42<SeP>2024-03-21 05:52:39<SeP>2024-03-22 16:15:36<SeP>2024-03-24 02:38:33<SeP>2024-03-25 13:01:30<SeP>2024-03-26 23:24:27<SeP>2024-03-28 09:47:24<SeP>2024-03-29 20:10:21<SeP>2024-03-31 06:33:18<SeP>2024-04-01 16:56:15<SeP>2024-04-03 03:19:12<SeP>2024-04-04 13:42:09<SeP>2024-04-06 00:05:06<SeP>2024-04-07 10:28:03<SeP>2024-04-08 20:51:00<SeP>2024-04-10 07:13:57<SeP>2024-04-11 17:36:54<SeP>2024-04-13 03:59:51<SeP>2024-04-14 14:22:48<SeP>2024-04-16 00:45:45<SeP>2024-04-17 11:08:42<SeP>2024-04-18 21:31:39<SeP>2024-04-20 07:54:36<SeP>2024-04-21 18:17:33<SeP>2024-04-23 04:40:30<SeP>2024-04-24 15:03:27<SeP>2024-04-26 01:26:24<SeP>2024-04-27 11:49:21<SeP>2024-04-28 22:12:18<SeP>2024-04-30 08:35:15<SeP>2024-05-01 18:58:12<SeP>2024-05-03 05:21:09<SeP>2024-05-04 15:44:06<SeP>2024-05-06 02:07:03<SeP>2024-05-07 12:30:00<SeP>2024-05-08 22:52:57<SeP>2024-05-10 09:15:54<SeP>2024-05-11 19:38:51<SeP>2024-05-13 06:01:48<SeP>2024-05-14 16:24:45<SeP>2024-05-16 02:47:42<SeP>2024-05-17 13:10:39<SeP>2024-05-18 23:33:36<SeP>2024-05-20 09:56:33<SeP>2024-05-21 20:19:30<SeP>2024-05-23 06:42:27<SeP>2024-05-24 17:05:24<SeP>2024-05-26 03:28:21<SeP>2024-05-27 13:51:18<SeP>2024-05-29 00:14:15<SeP>2024-05-30 10:37:12<SeP>2024-05-31 21:00:09<SeP>2024-06-02 07:23:06<SeP>2024-06-03 17:46:03<SeP>2024-06-05 04:09:00<SeP>2024-06-06 14:31:57<SeP>2024-06-08 00:54:54<SeP>2024-06-09 11:17:51<SeP>2024-06-10 21:40:48<SeP>2024-06-12 08:03:45<SeP>2024-06-13 18:26:42<SeP>2024-06-15 04:49:39<SeP>2024-06-16 15:12:36<SeP>2024-06-18 01:35:33<SeP>2024-06-19 11:58:30<SeP>2024-06-20 22:21:27<SeP>2024-06-22 08:44:24<SeP>2024-06-23 19:07:21<SeP>2024-06-25 05:30:18<SeP>2024-06-26 15:53:15<SeP>2024-06-28 02:16:12<SeP>2024-06-29 12:39:09<SeP>2024-06-30 23:02:06<SeP>2024-07-02 09:25:03<SeP>2024-07-03 19:48:00<SeP>2024-07-05 06:10:57<SeP>2024-07-06 16:33:54<SeP>2024-07-08 02:56:51<SeP>2024-07-09 13:19:48<SeP>2024-07-10 23:42:45<SeP>2024-07-12 10:05:42<SeP>2024-07-13 20:28:39<SeP>2024-07-15 06:51:36<SeP>2024-07-16 17:14:33<SeP>2024-07-18 03:37:30<SeP>2024-07-19 14:00:27<SeP>2024-07-21 00:23:24<SeP>2024-07-22 10:46:21<SeP>2024-07-23 21:09:18<SeP>2024-07-25 07:32:15<SeP>2024-07-26 17:55:12<SeP>2024-07-28 04:18:09<SeP>2024-07-29 14:41:06<SeP>2024-07-31 01:04:03<SeP>2024-08-01 11:27:00<SeP>2024-08-02 21:49:57<SeP>2024-08-04 08:12:54<SeP>2024-08-05 18:35:51<SeP>2024-08-07 04:58:48<SeP>2024-08-08 15:21:45<SeP>2024-08-10 01:44:42<SeP>2024-08-11 12:07:39<SeP>2024-08-12 22:30:36<SeP>2024-08-14 08:53:33<SeP>2024-08-15 19:16:30<SeP>2024-08-17 05:39:27<SeP>2024-08-18 16:02:24<SeP>2024-08-20 02:25:21<SeP>2024-08-21 12:48:18<SeP>2024-08-22 23:11:15<SeP>2024-08-24 09:34:12<SeP>2024-08-25 19:57:09<SeP>2024-08-27 06:20:06<SeP>2024-08-28 16:43:03<SeP>2024-08-30 03:06:00<SeP>2024-08-31 13:28:57<SeP>2024-09-01 23:51:54<SeP>2024-09-03 10:14:51<SeP>2024-09-04 20:37:48<SeP>2024-09-06 07:00:45<SeP>2024-09-07 17:23:42<SeP>2024-09-09 03:46:39<SeP>2024-09-10 14:09:36<SeP>2024-09-12 00:32:33<SeP>2024-09-13 10:55:30<SeP>2024-09-14 21:18:27<SeP>2024-09-16 07:41:24<SeP>2024-09-17 18:04:21<SeP>2024-09-19 04:27:18<SeP>2024-09-20 14:50:15<SeP>2024-09-22 01:13:12<SeP>2024-09-23 11:36:09<SeP>2024-09-24 21:59:06<SeP>2024-09-26 08:22:03<SeP>2024-09-27 18:45:00<SeP>2024-09-29 05:07:57<SeP>2024-09-30 15:30:54<SeP>2024-10-02 01:53:51<SeP>2024-10-03 12:16:48<SeP>2024-10-04 22:39:45<SeP>2024-10-06 09:02:42<SeP>2024-10-07 19:25:39<SeP>2024-10-09 05:48:36<SeP>2024-10-10 16:11:33<SeP>2024-10-12 02:34:30<SeP>2024-10-13 12:57:27<SeP>2024-10-14 23:20:24<SeP>2024-10-16 09:43:21<SeP>2024-10-17 20:06:18<SeP>2024-10-19 06:29:15<SeP>2024-10-20 16:52:12<SeP>2024-10-22 03:15:09<SeP>2024-10-23 13:38:06<SeP>2024-10-25 00:01:03<SeP>2024-10-26 10:24:00<SeP>2024-10-27 20:46:57<SeP>2024-10-29 07:09:54<SeP>2024-10-30 17:32:51<SeP>2024-11-01 03:55:48<SeP>2024-11-02 14:18:45<SeP>2024-11-03 23:41:42<SeP>2024-11-05 10:04:39<SeP>2024-11-06 20:27:36<SeP>2024-11-08 06:50:33<SeP>2024-11-09 17:13:30<SeP>2024-11-11 03:36:27<SeP>2024-11-12 13:59:24<SeP>2024-11-14 00:22:21<SeP>2024-11-15 10:45:18<SeP>2024-11-16 21:08:15<SeP>2024-11-18 07:31:12<SeP>2024-11-19 17:54:09<SeP>2024-11-21 04:17:06<SeP>2024-11-22 14:40:03<SeP>2024-11-24 01:03:00<SeP>2024-11-25 11:25:57<SeP>2024-11-26 21:48:54<SeP>2024-11-28 08:11:51<SeP>2024-11-29 18:34:48<SeP>2024-12-01 04:57:45<SeP>2024-12-02 15:20:42<SeP>2024-12-04 01:43:39<SeP>2024-12-05 12:06:36<SeP>2024-12-06 22:29:33<SeP>2024-12-08 08:52:30<SeP>2024-12-09 19:15:27<SeP>2024-12-11 05:38:24<SeP>2024-12-12 16:01:21<SeP>2024-12-14 02:24:18<SeP>2024-12-15 12:47:15<SeP>2024-12-16 23:10:12<SeP>2024-12-18 09:33:09<SeP>2024-12-19 19:56:06<SeP>2024-12-21 06:19:03<SeP>2024-12-22 16:42:00<SeP>2024-12-24 03:04:57<SeP>2024-12-25 13:27:54<SeP>2024-12-26 23:50:51<SeP>2024-12-28 10:13:48<SeP>2024-12-29 20:36:45<SeP>2024-12-31 06:59:42<SeP>2025-01-01 17:22:39<SeP>2025-01-03 03:45:36<SeP>2025-01-04 14:08:33<SeP>2025-01-06 00:31:30<SeP>2025-01-07 10:54:27<SeP>2025-01-08 21:17:24<SeP>2025-01-10 07:40:21<SeP>2025-01-11 18:03:18<SeP>2025-01-13 04:26:15<SeP>2025-01-14 14:49:12<SeP>2025-01-16 01:12:09<SeP>2025-01-17 11:35:06<SeP>2025-01-18 21:58:03<SeP>2025-01-20 08:21:00<SeP>2025-01-21 18:43:57<SeP>2025-01-23 05:06:54<SeP>2025-01-24 15:29:51<SeP>2025-01-26 01:52:48<SeP>2025-01-27 12:15:45<SeP>2025-01-28 22:38:42<SeP>2025-01-30 09:01:39<SeP>2025-01-31 19:24:36<SeP>2025-02-02 05:47:33<SeP>2025-02-03 16:10:30<SeP>2025-02-05 02:33:27<SeP>2025-02-06 12:56:24<SeP>2025-02-07 23:19:21<SeP>2025-02-09 09:42:18<SeP>2025-02-10 20:05:15<SeP>2025-02-12 06:28:12<SeP>2025-02-13 16:51:09<SeP>2025-02-15 03:14:06<SeP>2025-02-16 13:37:03";
  const item1Label       = "Scans";
  const item1Data        = "755<SeP>1443<SeP>1366<SeP>1426<SeP>1192<SeP>1665<SeP>1044<SeP>983<SeP>1054<SeP>3308<SeP>1485<SeP>2862<SeP>1830<SeP>2511<SeP>727<SeP>831<SeP>1412<SeP>1030<SeP>2945<SeP>1462<SeP>1478<SeP>1000<SeP>904<SeP>1076<SeP>1179<SeP>930<SeP>669<SeP>923<SeP>3666<SeP>921<SeP>793<SeP>1204<SeP>1371<SeP>868<SeP>804<SeP>3166<SeP>2606<SeP>1881<SeP>1652<SeP>1677<SeP>1234<SeP>1492<SeP>1817<SeP>1911<SeP>2004<SeP>1494<SeP>1574<SeP>1523<SeP>1720<SeP>1693<SeP>1796<SeP>1803<SeP>1739<SeP>1430<SeP>3144<SeP>1697<SeP>1369<SeP>1825<SeP>2054<SeP>2266<SeP>1419<SeP>3590<SeP>1567<SeP>1342<SeP>1593<SeP>1293<SeP>1752<SeP>1579<SeP>1571<SeP>1134<SeP>1419<SeP>1171<SeP>2368<SeP>1192<SeP>1141<SeP>1184<SeP>2293<SeP>7262<SeP>1126<SeP>1340<SeP>1230<SeP>1697<SeP>1954<SeP>1073<SeP>6517<SeP>1686<SeP>1559<SeP>993<SeP>1097<SeP>3236<SeP>1333<SeP>830<SeP>1037<SeP>1039<SeP>1005<SeP>3017<SeP>981<SeP>1365<SeP>2990<SeP>5110<SeP>2781<SeP>995<SeP>842<SeP>952<SeP>923<SeP>995<SeP>839<SeP>1129<SeP>3005<SeP>2839<SeP>1509<SeP>1692<SeP>740<SeP>677<SeP>1399<SeP>1274<SeP>1101<SeP>945<SeP>2279<SeP>1026<SeP>1203<SeP>1049<SeP>899<SeP>1173<SeP>653<SeP>848<SeP>834<SeP>775<SeP>883<SeP>1087<SeP>768<SeP>790<SeP>902<SeP>871<SeP>929<SeP>559<SeP>862<SeP>858<SeP>801<SeP>900<SeP>827<SeP>801<SeP>743<SeP>829<SeP>1060<SeP>750<SeP>835<SeP>946<SeP>863<SeP>1125<SeP>942<SeP>830<SeP>465<SeP>916<SeP>807<SeP>1193<SeP>887<SeP>953<SeP>1204<SeP>1147<SeP>970<SeP>939<SeP>913<SeP>967<SeP>720<SeP>975<SeP>1042<SeP>893<SeP>847<SeP>893<SeP>1030<SeP>940<SeP>994<SeP>1008<SeP>1020<SeP>1053<SeP>945<SeP>866<SeP>2199<SeP>1230<SeP>1055<SeP>1069<SeP>1000<SeP>1127<SeP>915<SeP>807<SeP>727<SeP>874<SeP>1066<SeP>932<SeP>782<SeP>1078<SeP>1271<SeP>1092<SeP>1119<SeP>1290<SeP>1151<SeP>1259<SeP>1105<SeP>1423<SeP>1292<SeP>1720<SeP>1824<SeP>1332<SeP>663<SeP>912<SeP>1086<SeP>1056<SeP>647<SeP>787<SeP>859<SeP>945<SeP>793<SeP>4532<SeP>3921<SeP>1951<SeP>1466<SeP>1122<SeP>835<SeP>1028<SeP>910<SeP>908<SeP>1051<SeP>1027<SeP>1005<SeP>1004<SeP>2183<SeP>1325<SeP>1010<SeP>1218<SeP>1179<SeP>1229<SeP>1066<SeP>962<SeP>1019<SeP>1058<SeP>1077<SeP>1024<SeP>1156<SeP>890<SeP>1120<SeP>811<SeP>1391<SeP>1053<SeP>1132<SeP>1084<SeP>1329<SeP>1232<SeP>1101<SeP>1606<SeP>1098<SeP>1130<SeP>1060<SeP>1468<SeP>1728<SeP>1334<SeP>1881<SeP>1730<SeP>1388<SeP>1969<SeP>1452<SeP>1094<SeP>1129<SeP>1408<SeP>1073<SeP>1545<SeP>1198<SeP>1194<SeP>1775<SeP>1516<SeP>1333<SeP>1537<SeP>1218<SeP>1315<SeP>1167<SeP>1092<SeP>1285<SeP>1145<SeP>1150<SeP>1257<SeP>1268<SeP>1078<SeP>1996<SeP>1281<SeP>1309<SeP>1625<SeP>1369<SeP>1271<SeP>975<SeP>964<SeP>1001<SeP>965<SeP>811<SeP>1013<SeP>1732<SeP>1130<SeP>1012<SeP>1142<SeP>918<SeP>823<SeP>1065<SeP>1205<SeP>947<SeP>919<SeP>870<SeP>1204<SeP>1429<SeP>1623<SeP>1118<SeP>1039<SeP>1011<SeP>1099<SeP>1796<SeP>914<SeP>1226<SeP>986<SeP>1432<SeP>1189<SeP>853<SeP>1163<SeP>1060<SeP>966<SeP>872<SeP>896<SeP>1307<SeP>1292<SeP>1587<SeP>1519<SeP>1410<SeP>938<SeP>1076<SeP>1057<SeP>1116<SeP>1142<SeP>1152<SeP>988<SeP>952<SeP>1243<SeP>1494<SeP>1275<SeP>1517<SeP>1260<SeP>1450<SeP>1517<SeP>1394<SeP>1259<SeP>1441<SeP>1494<SeP>1391<SeP>1342<SeP>1462<SeP>1497<SeP>1621<SeP>1293<SeP>1347<SeP>1329<SeP>1310<SeP>1197<SeP>1373<SeP>1394<SeP>1595<SeP>1228<SeP>1280<SeP>1270<SeP>1297<SeP>1297<SeP>1068<SeP>1518<SeP>1751<SeP>1758<SeP>1138<SeP>616<SeP>1381<SeP>1905<SeP>1144<SeP>1412<SeP>1160<SeP>1150<SeP>1284<SeP>1419<SeP>1173<SeP>1500<SeP>1441<SeP>1617<SeP>1487<SeP>1479<SeP>1575<SeP>1370<SeP>1313<SeP>1694<SeP>1520<SeP>1249<SeP>1153<SeP>1541<SeP>1710<SeP>1896<SeP>1706<SeP>1672<SeP>1662<SeP>1509";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "152<SeP>612<SeP>965<SeP>707<SeP>556<SeP>212<SeP>6948<SeP>487<SeP>9224<SeP>974<SeP>234<SeP>1274<SeP>756<SeP>766<SeP>144<SeP>431<SeP>160<SeP>361<SeP>668<SeP>2840<SeP>6924<SeP>8058<SeP>6194<SeP>9215<SeP>436<SeP>294<SeP>404<SeP>171<SeP>381<SeP>5924<SeP>85<SeP>369<SeP>130<SeP>539<SeP>290<SeP>7591<SeP>9822<SeP>9114<SeP>10113<SeP>7555<SeP>4604<SeP>8670<SeP>6355<SeP>9277<SeP>9110<SeP>7207<SeP>7834<SeP>8450<SeP>8746<SeP>8005<SeP>6264<SeP>5294<SeP>11996<SeP>7163<SeP>6848<SeP>7744<SeP>8839<SeP>8749<SeP>18190<SeP>16163<SeP>9200<SeP>11175<SeP>6530<SeP>7601<SeP>8294<SeP>9519<SeP>7906<SeP>6998<SeP>6520<SeP>6375<SeP>6559<SeP>4652<SeP>4721<SeP>6427<SeP>5219<SeP>6575<SeP>6523<SeP>6320<SeP>4495<SeP>5791<SeP>7151<SeP>4627<SeP>6403<SeP>5558<SeP>4479<SeP>7561<SeP>5298<SeP>4858<SeP>5757<SeP>7713<SeP>21713<SeP>18929<SeP>24592<SeP>8431<SeP>6898<SeP>7102<SeP>11087<SeP>7810<SeP>4042<SeP>6454<SeP>3363<SeP>5454<SeP>6676<SeP>4979<SeP>8481<SeP>6045<SeP>5935<SeP>4573<SeP>5341<SeP>8794<SeP>7732<SeP>7293<SeP>6471<SeP>4029<SeP>9185<SeP>9841<SeP>6128<SeP>3175<SeP>5479<SeP>7801<SeP>6431<SeP>6385<SeP>7873<SeP>8042<SeP>1516<SeP>2750<SeP>923<SeP>1639<SeP>2549<SeP>1762<SeP>832<SeP>1263<SeP>941<SeP>1321<SeP>1343<SeP>1084<SeP>1131<SeP>823<SeP>1125<SeP>1075<SeP>1096<SeP>1462<SeP>1030<SeP>1653<SeP>2022<SeP>1448<SeP>9345<SeP>7486<SeP>9325<SeP>9381<SeP>5941<SeP>11475<SeP>4069<SeP>10764<SeP>9445<SeP>9107<SeP>12539<SeP>8088<SeP>12424<SeP>11625<SeP>7481<SeP>12875<SeP>5124<SeP>4677<SeP>7186<SeP>23556<SeP>7541<SeP>7755<SeP>7876<SeP>12422<SeP>12928<SeP>8866<SeP>3853<SeP>7670<SeP>6927<SeP>25985<SeP>7794<SeP>8434<SeP>10946<SeP>4696<SeP>6180<SeP>5105<SeP>16653<SeP>5224<SeP>10699<SeP>9338<SeP>6675<SeP>8056<SeP>6852<SeP>5412<SeP>3540<SeP>7073<SeP>7509<SeP>4610<SeP>6491<SeP>8120<SeP>3514<SeP>21130<SeP>6978<SeP>6648<SeP>6877<SeP>6852<SeP>11354<SeP>6762<SeP>3943<SeP>4369<SeP>5174<SeP>3364<SeP>4114<SeP>4164<SeP>640<SeP>90<SeP>645<SeP>388<SeP>503<SeP>984<SeP>368<SeP>595<SeP>1001<SeP>1375<SeP>3174<SeP>18805<SeP>4668<SeP>2267<SeP>4073<SeP>2846<SeP>3626<SeP>6329<SeP>4699<SeP>2538<SeP>3579<SeP>2645<SeP>3047<SeP>3068<SeP>4688<SeP>1248<SeP>3144<SeP>2464<SeP>2113<SeP>1958<SeP>1886<SeP>1140<SeP>1905<SeP>793<SeP>924<SeP>1772<SeP>20072<SeP>8145<SeP>2333<SeP>3725<SeP>3641<SeP>2222<SeP>3741<SeP>2039<SeP>2737<SeP>3184<SeP>2638<SeP>3393<SeP>2109<SeP>3401<SeP>3059<SeP>4853<SeP>5527<SeP>4642<SeP>4381<SeP>2588<SeP>2273<SeP>5149<SeP>3238<SeP>9710<SeP>5280<SeP>3384<SeP>2326<SeP>2822<SeP>4076<SeP>3941<SeP>3068<SeP>3324<SeP>2454<SeP>5084<SeP>4585<SeP>3166<SeP>5861<SeP>4141<SeP>6250<SeP>4427<SeP>5372<SeP>5011<SeP>22108<SeP>5615<SeP>10665<SeP>1725<SeP>2964<SeP>4132<SeP>3653<SeP>5008<SeP>2874<SeP>5212<SeP>4642<SeP>4328<SeP>3748<SeP>3666<SeP>2361<SeP>1322<SeP>1956<SeP>3789<SeP>2105<SeP>2804<SeP>3472<SeP>4058<SeP>4124<SeP>2964<SeP>4576<SeP>2753<SeP>3663<SeP>3151<SeP>8252<SeP>6636<SeP>5226<SeP>4607<SeP>5133<SeP>4233<SeP>3298<SeP>4257<SeP>3726<SeP>6629<SeP>4953<SeP>4651<SeP>2997<SeP>784<SeP>1140<SeP>1734<SeP>1303<SeP>1230<SeP>1691<SeP>1546<SeP>1078<SeP>3336<SeP>3948<SeP>6469<SeP>23889<SeP>14585<SeP>5541<SeP>12964<SeP>14778<SeP>5476<SeP>5478<SeP>5197<SeP>9457<SeP>19343<SeP>5822<SeP>4468<SeP>4567<SeP>5731<SeP>18713<SeP>16394<SeP>4559<SeP>2949<SeP>4548<SeP>4919<SeP>6025<SeP>3284<SeP>3122<SeP>3361<SeP>4625<SeP>5215<SeP>4057<SeP>18000<SeP>5415<SeP>6769<SeP>4847<SeP>1315<SeP>3907<SeP>3924<SeP>4214<SeP>4117<SeP>3070<SeP>2910<SeP>3505<SeP>3412<SeP>3610<SeP>5979<SeP>8529<SeP>10067<SeP>8440<SeP>8991<SeP>7588<SeP>7277<SeP>4911<SeP>5052<SeP>3508<SeP>25670<SeP>3636<SeP>2837<SeP>4425<SeP>6305<SeP>9115<SeP>4920<SeP>3576<SeP>4925";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:22:57<SeP>2023-07-28 20:45:54<SeP>2023-07-30 07:08:51<SeP>2023-07-31 17:31:48<SeP>2023-08-02 03:54:45<SeP>2023-08-03 14:17:42<SeP>2023-08-05 00:40:39<SeP>2023-08-06 11:03:36<SeP>2023-08-07 21:26:33<SeP>2023-08-09 07:49:30<SeP>2023-08-10 18:12:27<SeP>2023-08-12 04:35:24<SeP>2023-08-13 14:58:21<SeP>2023-08-15 01:21:18<SeP>2023-08-16 11:44:15<SeP>2023-08-17 22:07:12<SeP>2023-08-19 08:30:09<SeP>2023-08-20 18:53:06<SeP>2023-08-22 05:16:03<SeP>2023-08-23 15:39:00<SeP>2023-08-25 02:01:57<SeP>2023-08-26 12:24:54<SeP>2023-08-27 22:47:51<SeP>2023-08-29 09:10:48<SeP>2023-08-30 19:33:45<SeP>2023-09-01 05:56:42<SeP>2023-09-02 16:19:39<SeP>2023-09-04 02:42:36<SeP>2023-09-05 13:05:33<SeP>2023-09-06 23:28:30<SeP>2023-09-08 09:51:27<SeP>2023-09-09 20:14:24<SeP>2023-09-11 06:37:21<SeP>2023-09-12 17:00:18<SeP>2023-09-14 03:23:15<SeP>2023-09-15 13:46:12<SeP>2023-09-17 00:09:09<SeP>2023-09-18 10:32:06<SeP>2023-09-19 20:55:03<SeP>2023-09-21 07:18:00<SeP>2023-09-22 17:40:57<SeP>2023-09-24 04:03:54<SeP>2023-09-25 14:26:51<SeP>2023-09-27 00:49:48<SeP>2023-09-28 11:12:45<SeP>2023-09-29 21:35:42<SeP>2023-10-01 07:58:39<SeP>2023-10-02 18:21:36<SeP>2023-10-04 04:44:33<SeP>2023-10-05 15:07:30<SeP>2023-10-07 01:30:27<SeP>2023-10-08 11:53:24<SeP>2023-10-09 22:16:21<SeP>2023-10-11 08:39:18<SeP>2023-10-12 19:02:15<SeP>2023-10-14 05:25:12<SeP>2023-10-15 15:48:09<SeP>2023-10-17 02:11:06<SeP>2023-10-18 12:34:03<SeP>2023-10-19 22:57:00<SeP>2023-10-21 09:19:57<SeP>2023-10-22 19:42:54<SeP>2023-10-24 06:05:51<SeP>2023-10-25 16:28:48<SeP>2023-10-27 02:51:45<SeP>2023-10-28 13:14:42<SeP>2023-10-29 23:37:39<SeP>2023-10-31 10:00:36<SeP>2023-11-01 20:23:33<SeP>2023-11-03 06:46:30<SeP>2023-11-04 17:09:27<SeP>2023-11-06 02:32:24<SeP>2023-11-07 12:55:21<SeP>2023-11-08 23:18:18<SeP>2023-11-10 09:41:15<SeP>2023-11-11 20:04:12<SeP>2023-11-13 06:27:09<SeP>2023-11-14 16:50:06<SeP>2023-11-16 03:13:03<SeP>2023-11-17 13:36:00<SeP>2023-11-18 23:58:57<SeP>2023-11-20 10:21:54<SeP>2023-11-21 20:44:51<SeP>2023-11-23 07:07:48<SeP>2023-11-24 17:30:45<SeP>2023-11-26 03:53:42<SeP>2023-11-27 14:16:39<SeP>2023-11-29 00:39:36<SeP>2023-11-30 11:02:33<SeP>2023-12-01 21:25:30<SeP>2023-12-03 07:48:27<SeP>2023-12-04 18:11:24<SeP>2023-12-06 04:34:21<SeP>2023-12-07 14:57:18<SeP>2023-12-09 01:20:15<SeP>2023-12-10 11:43:12<SeP>2023-12-11 22:06:09<SeP>2023-12-13 08:29:06<SeP>2023-12-14 18:52:03<SeP>2023-12-16 05:15:00<SeP>2023-12-17 15:37:57<SeP>2023-12-19 02:00:54<SeP>2023-12-20 12:23:51<SeP>2023-12-21 22:46:48<SeP>2023-12-23 09:09:45<SeP>2023-12-24 19:32:42<SeP>2023-12-26 05:55:39<SeP>2023-12-27 16:18:36<SeP>2023-12-29 02:41:33<SeP>2023-12-30 13:04:30<SeP>2023-12-31 23:27:27<SeP>2024-01-02 09:50:24<SeP>2024-01-03 20:13:21<SeP>2024-01-05 06:36:18<SeP>2024-01-06 16:59:15<SeP>2024-01-08 03:22:12<SeP>2024-01-09 13:45:09<SeP>2024-01-11 00:08:06<SeP>2024-01-12 10:31:03<SeP>2024-01-13 20:54:00<SeP>2024-01-15 07:16:57<SeP>2024-01-16 17:39:54<SeP>2024-01-18 04:02:51<SeP>2024-01-19 14:25:48<SeP>2024-01-21 00:48:45<SeP>2024-01-22 11:11:42<SeP>2024-01-23 21:34:39<SeP>2024-01-25 07:57:36<SeP>2024-01-26 18:20:33<SeP>2024-01-28 04:43:30<SeP>2024-01-29 15:06:27<SeP>2024-01-31 01:29:24<SeP>2024-02-01 11:52:21<SeP>2024-02-02 22:15:18<SeP>2024-02-04 08:38:15<SeP>2024-02-05 19:01:12<SeP>2024-02-07 05:24:09<SeP>2024-02-08 15:47:06<SeP>2024-02-10 02:10:03<SeP>2024-02-11 12:33:00<SeP>2024-02-12 22:55:57<SeP>2024-02-14 09:18:54<SeP>2024-02-15 19:41:51<SeP>2024-02-17 06:04:48<SeP>2024-02-18 16:27:45<SeP>2024-02-20 02:50:42<SeP>2024-02-21 13:13:39<SeP>2024-02-22 23:36:36<SeP>2024-02-24 09:59:33<SeP>2024-02-25 20:22:30<SeP>2024-02-27 06:45:27<SeP>2024-02-28 17:08:24<SeP>2024-03-01 03:31:21<SeP>2024-03-02 13:54:18<SeP>2024-03-04 00:17:15<SeP>2024-03-05 10:40:12<SeP>2024-03-06 21:03:09<SeP>2024-03-08 07:26:06<SeP>2024-03-09 17:49:03<SeP>2024-03-11 05:12:00<SeP>2024-03-12 15:34:57<SeP>2024-03-14 01:57:54<SeP>2024-03-15 12:20:51<SeP>2024-03-16 22:43:48<SeP>2024-03-18 09:06:45<SeP>2024-03-19 19:29:42<SeP>2024-03-21 05:52:39<SeP>2024-03-22 16:15:36<SeP>2024-03-24 02:38:33<SeP>2024-03-25 13:01:30<SeP>2024-03-26 23:24:27<SeP>2024-03-28 09:47:24<SeP>2024-03-29 20:10:21<SeP>2024-03-31 06:33:18<SeP>2024-04-01 16:56:15<SeP>2024-04-03 03:19:12<SeP>2024-04-04 13:42:09<SeP>2024-04-06 00:05:06<SeP>2024-04-07 10:28:03<SeP>2024-04-08 20:51:00<SeP>2024-04-10 07:13:57<SeP>2024-04-11 17:36:54<SeP>2024-04-13 03:59:51<SeP>2024-04-14 14:22:48<SeP>2024-04-16 00:45:45<SeP>2024-04-17 11:08:42<SeP>2024-04-18 21:31:39<SeP>2024-04-20 07:54:36<SeP>2024-04-21 18:17:33<SeP>2024-04-23 04:40:30<SeP>2024-04-24 15:03:27<SeP>2024-04-26 01:26:24<SeP>2024-04-27 11:49:21<SeP>2024-04-28 22:12:18<SeP>2024-04-30 08:35:15<SeP>2024-05-01 18:58:12<SeP>2024-05-03 05:21:09<SeP>2024-05-04 15:44:06<SeP>2024-05-06 02:07:03<SeP>2024-05-07 12:30:00<SeP>2024-05-08 22:52:57<SeP>2024-05-10 09:15:54<SeP>2024-05-11 19:38:51<SeP>2024-05-13 06:01:48<SeP>2024-05-14 16:24:45<SeP>2024-05-16 02:47:42<SeP>2024-05-17 13:10:39<SeP>2024-05-18 23:33:36<SeP>2024-05-20 09:56:33<SeP>2024-05-21 20:19:30<SeP>2024-05-23 06:42:27<SeP>2024-05-24 17:05:24<SeP>2024-05-26 03:28:21<SeP>2024-05-27 13:51:18<SeP>2024-05-29 00:14:15<SeP>2024-05-30 10:37:12<SeP>2024-05-31 21:00:09<SeP>2024-06-02 07:23:06<SeP>2024-06-03 17:46:03<SeP>2024-06-05 04:09:00<SeP>2024-06-06 14:31:57<SeP>2024-06-08 00:54:54<SeP>2024-06-09 11:17:51<SeP>2024-06-10 21:40:48<SeP>2024-06-12 08:03:45<SeP>2024-06-13 18:26:42<SeP>2024-06-15 04:49:39<SeP>2024-06-16 15:12:36<SeP>2024-06-18 01:35:33<SeP>2024-06-19 11:58:30<SeP>2024-06-20 22:21:27<SeP>2024-06-22 08:44:24<SeP>2024-06-23 19:07:21<SeP>2024-06-25 05:30:18<SeP>2024-06-26 15:53:15<SeP>2024-06-28 02:16:12<SeP>2024-06-29 12:39:09<SeP>2024-06-30 23:02:06<SeP>2024-07-02 09:25:03<SeP>2024-07-03 19:48:00<SeP>2024-07-05 06:10:57<SeP>2024-07-06 16:33:54<SeP>2024-07-08 02:56:51<SeP>2024-07-09 13:19:48<SeP>2024-07-10 23:42:45<SeP>2024-07-12 10:05:42<SeP>2024-07-13 20:28:39<SeP>2024-07-15 06:51:36<SeP>2024-07-16 17:14:33<SeP>2024-07-18 03:37:30<SeP>2024-07-19 14:00:27<SeP>2024-07-21 00:23:24<SeP>2024-07-22 10:46:21<SeP>2024-07-23 21:09:18<SeP>2024-07-25 07:32:15<SeP>2024-07-26 17:55:12<SeP>2024-07-28 04:18:09<SeP>2024-07-29 14:41:06<SeP>2024-07-31 01:04:03<SeP>2024-08-01 11:27:00<SeP>2024-08-02 21:49:57<SeP>2024-08-04 08:12:54<SeP>2024-08-05 18:35:51<SeP>2024-08-07 04:58:48<SeP>2024-08-08 15:21:45<SeP>2024-08-10 01:44:42<SeP>2024-08-11 12:07:39<SeP>2024-08-12 22:30:36<SeP>2024-08-14 08:53:33<SeP>2024-08-15 19:16:30<SeP>2024-08-17 05:39:27<SeP>2024-08-18 16:02:24<SeP>2024-08-20 02:25:21<SeP>2024-08-21 12:48:18<SeP>2024-08-22 23:11:15<SeP>2024-08-24 09:34:12<SeP>2024-08-25 19:57:09<SeP>2024-08-27 06:20:06<SeP>2024-08-28 16:43:03<SeP>2024-08-30 03:06:00<SeP>2024-08-31 13:28:57<SeP>2024-09-01 23:51:54<SeP>2024-09-03 10:14:51<SeP>2024-09-04 20:37:48<SeP>2024-09-06 07:00:45<SeP>2024-09-07 17:23:42<SeP>2024-09-09 03:46:39<SeP>2024-09-10 14:09:36<SeP>2024-09-12 00:32:33<SeP>2024-09-13 10:55:30<SeP>2024-09-14 21:18:27<SeP>2024-09-16 07:41:24<SeP>2024-09-17 18:04:21<SeP>2024-09-19 04:27:18<SeP>2024-09-20 14:50:15<SeP>2024-09-22 01:13:12<SeP>2024-09-23 11:36:09<SeP>2024-09-24 21:59:06<SeP>2024-09-26 08:22:03<SeP>2024-09-27 18:45:00<SeP>2024-09-29 05:07:57<SeP>2024-09-30 15:30:54<SeP>2024-10-02 01:53:51<SeP>2024-10-03 12:16:48<SeP>2024-10-04 22:39:45<SeP>2024-10-06 09:02:42<SeP>2024-10-07 19:25:39<SeP>2024-10-09 05:48:36<SeP>2024-10-10 16:11:33<SeP>2024-10-12 02:34:30<SeP>2024-10-13 12:57:27<SeP>2024-10-14 23:20:24<SeP>2024-10-16 09:43:21<SeP>2024-10-17 20:06:18<SeP>2024-10-19 06:29:15<SeP>2024-10-20 16:52:12<SeP>2024-10-22 03:15:09<SeP>2024-10-23 13:38:06<SeP>2024-10-25 00:01:03<SeP>2024-10-26 10:24:00<SeP>2024-10-27 20:46:57<SeP>2024-10-29 07:09:54<SeP>2024-10-30 17:32:51<SeP>2024-11-01 03:55:48<SeP>2024-11-02 14:18:45<SeP>2024-11-03 23:41:42<SeP>2024-11-05 10:04:39<SeP>2024-11-06 20:27:36<SeP>2024-11-08 06:50:33<SeP>2024-11-09 17:13:30<SeP>2024-11-11 03:36:27<SeP>2024-11-12 13:59:24<SeP>2024-11-14 00:22:21<SeP>2024-11-15 10:45:18<SeP>2024-11-16 21:08:15<SeP>2024-11-18 07:31:12<SeP>2024-11-19 17:54:09<SeP>2024-11-21 04:17:06<SeP>2024-11-22 14:40:03<SeP>2024-11-24 01:03:00<SeP>2024-11-25 11:25:57<SeP>2024-11-26 21:48:54<SeP>2024-11-28 08:11:51<SeP>2024-11-29 18:34:48<SeP>2024-12-01 04:57:45<SeP>2024-12-02 15:20:42<SeP>2024-12-04 01:43:39<SeP>2024-12-05 12:06:36<SeP>2024-12-06 22:29:33<SeP>2024-12-08 08:52:30<SeP>2024-12-09 19:15:27<SeP>2024-12-11 05:38:24<SeP>2024-12-12 16:01:21<SeP>2024-12-14 02:24:18<SeP>2024-12-15 12:47:15<SeP>2024-12-16 23:10:12<SeP>2024-12-18 09:33:09<SeP>2024-12-19 19:56:06<SeP>2024-12-21 06:19:03<SeP>2024-12-22 16:42:00<SeP>2024-12-24 03:04:57<SeP>2024-12-25 13:27:54<SeP>2024-12-26 23:50:51<SeP>2024-12-28 10:13:48<SeP>2024-12-29 20:36:45<SeP>2024-12-31 06:59:42<SeP>2025-01-01 17:22:39<SeP>2025-01-03 03:45:36<SeP>2025-01-04 14:08:33<SeP>2025-01-06 00:31:30<SeP>2025-01-07 10:54:27<SeP>2025-01-08 21:17:24<SeP>2025-01-10 07:40:21<SeP>2025-01-11 18:03:18<SeP>2025-01-13 04:26:15<SeP>2025-01-14 14:49:12<SeP>2025-01-16 01:12:09<SeP>2025-01-17 11:35:06<SeP>2025-01-18 21:58:03<SeP>2025-01-20 08:21:00<SeP>2025-01-21 18:43:57<SeP>2025-01-23 05:06:54<SeP>2025-01-24 15:29:51<SeP>2025-01-26 01:52:48<SeP>2025-01-27 12:15:45<SeP>2025-01-28 22:38:42<SeP>2025-01-30 09:01:39<SeP>2025-01-31 19:24:36<SeP>2025-02-02 05:47:33<SeP>2025-02-03 16:10:30<SeP>2025-02-05 02:33:27<SeP>2025-02-06 12:56:24<SeP>2025-02-07 23:19:21<SeP>2025-02-09 09:42:18<SeP>2025-02-10 20:05:15<SeP>2025-02-12 06:28:12<SeP>2025-02-13 16:51:09<SeP>2025-02-15 03:14:06<SeP>2025-02-16 13:37:03";
  const itemLabel       = "Scans";
  const itemData        = "755<SeP>1443<SeP>1366<SeP>1426<SeP>1192<SeP>1665<SeP>1044<SeP>983<SeP>1054<SeP>3308<SeP>1485<SeP>2862<SeP>1830<SeP>2511<SeP>727<SeP>831<SeP>1412<SeP>1030<SeP>2945<SeP>1462<SeP>1478<SeP>1000<SeP>904<SeP>1076<SeP>1179<SeP>930<SeP>669<SeP>923<SeP>3666<SeP>921<SeP>793<SeP>1204<SeP>1371<SeP>868<SeP>804<SeP>3166<SeP>2606<SeP>1881<SeP>1652<SeP>1677<SeP>1234<SeP>1492<SeP>1817<SeP>1911<SeP>2004<SeP>1494<SeP>1574<SeP>1523<SeP>1720<SeP>1693<SeP>1796<SeP>1803<SeP>1739<SeP>1430<SeP>3144<SeP>1697<SeP>1369<SeP>1825<SeP>2054<SeP>2266<SeP>1419<SeP>3590<SeP>1567<SeP>1342<SeP>1593<SeP>1293<SeP>1752<SeP>1579<SeP>1571<SeP>1134<SeP>1419<SeP>1171<SeP>2368<SeP>1192<SeP>1141<SeP>1184<SeP>2293<SeP>7262<SeP>1126<SeP>1340<SeP>1230<SeP>1697<SeP>1954<SeP>1073<SeP>6517<SeP>1686<SeP>1559<SeP>993<SeP>1097<SeP>3236<SeP>1333<SeP>830<SeP>1037<SeP>1039<SeP>1005<SeP>3017<SeP>981<SeP>1365<SeP>2990<SeP>5110<SeP>2781<SeP>995<SeP>842<SeP>952<SeP>923<SeP>995<SeP>839<SeP>1129<SeP>3005<SeP>2839<SeP>1509<SeP>1692<SeP>740<SeP>677<SeP>1399<SeP>1274<SeP>1101<SeP>945<SeP>2279<SeP>1026<SeP>1203<SeP>1049<SeP>899<SeP>1173<SeP>653<SeP>848<SeP>834<SeP>775<SeP>883<SeP>1087<SeP>768<SeP>790<SeP>902<SeP>871<SeP>929<SeP>559<SeP>862<SeP>858<SeP>801<SeP>900<SeP>827<SeP>801<SeP>743<SeP>829<SeP>1060<SeP>750<SeP>835<SeP>946<SeP>863<SeP>1125<SeP>942<SeP>830<SeP>465<SeP>916<SeP>807<SeP>1193<SeP>887<SeP>953<SeP>1204<SeP>1147<SeP>970<SeP>939<SeP>913<SeP>967<SeP>720<SeP>975<SeP>1042<SeP>893<SeP>847<SeP>893<SeP>1030<SeP>940<SeP>994<SeP>1008<SeP>1020<SeP>1053<SeP>945<SeP>866<SeP>2199<SeP>1230<SeP>1055<SeP>1069<SeP>1000<SeP>1127<SeP>915<SeP>807<SeP>727<SeP>874<SeP>1066<SeP>932<SeP>782<SeP>1078<SeP>1271<SeP>1092<SeP>1119<SeP>1290<SeP>1151<SeP>1259<SeP>1105<SeP>1423<SeP>1292<SeP>1720<SeP>1824<SeP>1332<SeP>663<SeP>912<SeP>1086<SeP>1056<SeP>647<SeP>787<SeP>859<SeP>945<SeP>793<SeP>4532<SeP>3921<SeP>1951<SeP>1466<SeP>1122<SeP>835<SeP>1028<SeP>910<SeP>908<SeP>1051<SeP>1027<SeP>1005<SeP>1004<SeP>2183<SeP>1325<SeP>1010<SeP>1218<SeP>1179<SeP>1229<SeP>1066<SeP>962<SeP>1019<SeP>1058<SeP>1077<SeP>1024<SeP>1156<SeP>890<SeP>1120<SeP>811<SeP>1391<SeP>1053<SeP>1132<SeP>1084<SeP>1329<SeP>1232<SeP>1101<SeP>1606<SeP>1098<SeP>1130<SeP>1060<SeP>1468<SeP>1728<SeP>1334<SeP>1881<SeP>1730<SeP>1388<SeP>1969<SeP>1452<SeP>1094<SeP>1129<SeP>1408<SeP>1073<SeP>1545<SeP>1198<SeP>1194<SeP>1775<SeP>1516<SeP>1333<SeP>1537<SeP>1218<SeP>1315<SeP>1167<SeP>1092<SeP>1285<SeP>1145<SeP>1150<SeP>1257<SeP>1268<SeP>1078<SeP>1996<SeP>1281<SeP>1309<SeP>1625<SeP>1369<SeP>1271<SeP>975<SeP>964<SeP>1001<SeP>965<SeP>811<SeP>1013<SeP>1732<SeP>1130<SeP>1012<SeP>1142<SeP>918<SeP>823<SeP>1065<SeP>1205<SeP>947<SeP>919<SeP>870<SeP>1204<SeP>1429<SeP>1623<SeP>1118<SeP>1039<SeP>1011<SeP>1099<SeP>1796<SeP>914<SeP>1226<SeP>986<SeP>1432<SeP>1189<SeP>853<SeP>1163<SeP>1060<SeP>966<SeP>872<SeP>896<SeP>1307<SeP>1292<SeP>1587<SeP>1519<SeP>1410<SeP>938<SeP>1076<SeP>1057<SeP>1116<SeP>1142<SeP>1152<SeP>988<SeP>952<SeP>1243<SeP>1494<SeP>1275<SeP>1517<SeP>1260<SeP>1450<SeP>1517<SeP>1394<SeP>1259<SeP>1441<SeP>1494<SeP>1391<SeP>1342<SeP>1462<SeP>1497<SeP>1621<SeP>1293<SeP>1347<SeP>1329<SeP>1310<SeP>1197<SeP>1373<SeP>1394<SeP>1595<SeP>1228<SeP>1280<SeP>1270<SeP>1297<SeP>1297<SeP>1068<SeP>1518<SeP>1751<SeP>1758<SeP>1138<SeP>616<SeP>1381<SeP>1905<SeP>1144<SeP>1412<SeP>1160<SeP>1150<SeP>1284<SeP>1419<SeP>1173<SeP>1500<SeP>1441<SeP>1617<SeP>1487<SeP>1479<SeP>1575<SeP>1370<SeP>1313<SeP>1694<SeP>1520<SeP>1249<SeP>1153<SeP>1541<SeP>1710<SeP>1896<SeP>1706<SeP>1672<SeP>1662<SeP>1509";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:22:57<SeP>2023-07-28 20:45:54<SeP>2023-07-30 07:08:51<SeP>2023-07-31 17:31:48<SeP>2023-08-02 03:54:45<SeP>2023-08-03 14:17:42<SeP>2023-08-05 00:40:39<SeP>2023-08-06 11:03:36<SeP>2023-08-07 21:26:33<SeP>2023-08-09 07:49:30<SeP>2023-08-10 18:12:27<SeP>2023-08-12 04:35:24<SeP>2023-08-13 14:58:21<SeP>2023-08-15 01:21:18<SeP>2023-08-16 11:44:15<SeP>2023-08-17 22:07:12<SeP>2023-08-19 08:30:09<SeP>2023-08-20 18:53:06<SeP>2023-08-22 05:16:03<SeP>2023-08-23 15:39:00<SeP>2023-08-25 02:01:57<SeP>2023-08-26 12:24:54<SeP>2023-08-27 22:47:51<SeP>2023-08-29 09:10:48<SeP>2023-08-30 19:33:45<SeP>2023-09-01 05:56:42<SeP>2023-09-02 16:19:39<SeP>2023-09-04 02:42:36<SeP>2023-09-05 13:05:33<SeP>2023-09-06 23:28:30<SeP>2023-09-08 09:51:27<SeP>2023-09-09 20:14:24<SeP>2023-09-11 06:37:21<SeP>2023-09-12 17:00:18<SeP>2023-09-14 03:23:15<SeP>2023-09-15 13:46:12<SeP>2023-09-17 00:09:09<SeP>2023-09-18 10:32:06<SeP>2023-09-19 20:55:03<SeP>2023-09-21 07:18:00<SeP>2023-09-22 17:40:57<SeP>2023-09-24 04:03:54<SeP>2023-09-25 14:26:51<SeP>2023-09-27 00:49:48<SeP>2023-09-28 11:12:45<SeP>2023-09-29 21:35:42<SeP>2023-10-01 07:58:39<SeP>2023-10-02 18:21:36<SeP>2023-10-04 04:44:33<SeP>2023-10-05 15:07:30<SeP>2023-10-07 01:30:27<SeP>2023-10-08 11:53:24<SeP>2023-10-09 22:16:21<SeP>2023-10-11 08:39:18<SeP>2023-10-12 19:02:15<SeP>2023-10-14 05:25:12<SeP>2023-10-15 15:48:09<SeP>2023-10-17 02:11:06<SeP>2023-10-18 12:34:03<SeP>2023-10-19 22:57:00<SeP>2023-10-21 09:19:57<SeP>2023-10-22 19:42:54<SeP>2023-10-24 06:05:51<SeP>2023-10-25 16:28:48<SeP>2023-10-27 02:51:45<SeP>2023-10-28 13:14:42<SeP>2023-10-29 23:37:39<SeP>2023-10-31 10:00:36<SeP>2023-11-01 20:23:33<SeP>2023-11-03 06:46:30<SeP>2023-11-04 17:09:27<SeP>2023-11-06 02:32:24<SeP>2023-11-07 12:55:21<SeP>2023-11-08 23:18:18<SeP>2023-11-10 09:41:15<SeP>2023-11-11 20:04:12<SeP>2023-11-13 06:27:09<SeP>2023-11-14 16:50:06<SeP>2023-11-16 03:13:03<SeP>2023-11-17 13:36:00<SeP>2023-11-18 23:58:57<SeP>2023-11-20 10:21:54<SeP>2023-11-21 20:44:51<SeP>2023-11-23 07:07:48<SeP>2023-11-24 17:30:45<SeP>2023-11-26 03:53:42<SeP>2023-11-27 14:16:39<SeP>2023-11-29 00:39:36<SeP>2023-11-30 11:02:33<SeP>2023-12-01 21:25:30<SeP>2023-12-03 07:48:27<SeP>2023-12-04 18:11:24<SeP>2023-12-06 04:34:21<SeP>2023-12-07 14:57:18<SeP>2023-12-09 01:20:15<SeP>2023-12-10 11:43:12<SeP>2023-12-11 22:06:09<SeP>2023-12-13 08:29:06<SeP>2023-12-14 18:52:03<SeP>2023-12-16 05:15:00<SeP>2023-12-17 15:37:57<SeP>2023-12-19 02:00:54<SeP>2023-12-20 12:23:51<SeP>2023-12-21 22:46:48<SeP>2023-12-23 09:09:45<SeP>2023-12-24 19:32:42<SeP>2023-12-26 05:55:39<SeP>2023-12-27 16:18:36<SeP>2023-12-29 02:41:33<SeP>2023-12-30 13:04:30<SeP>2023-12-31 23:27:27<SeP>2024-01-02 09:50:24<SeP>2024-01-03 20:13:21<SeP>2024-01-05 06:36:18<SeP>2024-01-06 16:59:15<SeP>2024-01-08 03:22:12<SeP>2024-01-09 13:45:09<SeP>2024-01-11 00:08:06<SeP>2024-01-12 10:31:03<SeP>2024-01-13 20:54:00<SeP>2024-01-15 07:16:57<SeP>2024-01-16 17:39:54<SeP>2024-01-18 04:02:51<SeP>2024-01-19 14:25:48<SeP>2024-01-21 00:48:45<SeP>2024-01-22 11:11:42<SeP>2024-01-23 21:34:39<SeP>2024-01-25 07:57:36<SeP>2024-01-26 18:20:33<SeP>2024-01-28 04:43:30<SeP>2024-01-29 15:06:27<SeP>2024-01-31 01:29:24<SeP>2024-02-01 11:52:21<SeP>2024-02-02 22:15:18<SeP>2024-02-04 08:38:15<SeP>2024-02-05 19:01:12<SeP>2024-02-07 05:24:09<SeP>2024-02-08 15:47:06<SeP>2024-02-10 02:10:03<SeP>2024-02-11 12:33:00<SeP>2024-02-12 22:55:57<SeP>2024-02-14 09:18:54<SeP>2024-02-15 19:41:51<SeP>2024-02-17 06:04:48<SeP>2024-02-18 16:27:45<SeP>2024-02-20 02:50:42<SeP>2024-02-21 13:13:39<SeP>2024-02-22 23:36:36<SeP>2024-02-24 09:59:33<SeP>2024-02-25 20:22:30<SeP>2024-02-27 06:45:27<SeP>2024-02-28 17:08:24<SeP>2024-03-01 03:31:21<SeP>2024-03-02 13:54:18<SeP>2024-03-04 00:17:15<SeP>2024-03-05 10:40:12<SeP>2024-03-06 21:03:09<SeP>2024-03-08 07:26:06<SeP>2024-03-09 17:49:03<SeP>2024-03-11 05:12:00<SeP>2024-03-12 15:34:57<SeP>2024-03-14 01:57:54<SeP>2024-03-15 12:20:51<SeP>2024-03-16 22:43:48<SeP>2024-03-18 09:06:45<SeP>2024-03-19 19:29:42<SeP>2024-03-21 05:52:39<SeP>2024-03-22 16:15:36<SeP>2024-03-24 02:38:33<SeP>2024-03-25 13:01:30<SeP>2024-03-26 23:24:27<SeP>2024-03-28 09:47:24<SeP>2024-03-29 20:10:21<SeP>2024-03-31 06:33:18<SeP>2024-04-01 16:56:15<SeP>2024-04-03 03:19:12<SeP>2024-04-04 13:42:09<SeP>2024-04-06 00:05:06<SeP>2024-04-07 10:28:03<SeP>2024-04-08 20:51:00<SeP>2024-04-10 07:13:57<SeP>2024-04-11 17:36:54<SeP>2024-04-13 03:59:51<SeP>2024-04-14 14:22:48<SeP>2024-04-16 00:45:45<SeP>2024-04-17 11:08:42<SeP>2024-04-18 21:31:39<SeP>2024-04-20 07:54:36<SeP>2024-04-21 18:17:33<SeP>2024-04-23 04:40:30<SeP>2024-04-24 15:03:27<SeP>2024-04-26 01:26:24<SeP>2024-04-27 11:49:21<SeP>2024-04-28 22:12:18<SeP>2024-04-30 08:35:15<SeP>2024-05-01 18:58:12<SeP>2024-05-03 05:21:09<SeP>2024-05-04 15:44:06<SeP>2024-05-06 02:07:03<SeP>2024-05-07 12:30:00<SeP>2024-05-08 22:52:57<SeP>2024-05-10 09:15:54<SeP>2024-05-11 19:38:51<SeP>2024-05-13 06:01:48<SeP>2024-05-14 16:24:45<SeP>2024-05-16 02:47:42<SeP>2024-05-17 13:10:39<SeP>2024-05-18 23:33:36<SeP>2024-05-20 09:56:33<SeP>2024-05-21 20:19:30<SeP>2024-05-23 06:42:27<SeP>2024-05-24 17:05:24<SeP>2024-05-26 03:28:21<SeP>2024-05-27 13:51:18<SeP>2024-05-29 00:14:15<SeP>2024-05-30 10:37:12<SeP>2024-05-31 21:00:09<SeP>2024-06-02 07:23:06<SeP>2024-06-03 17:46:03<SeP>2024-06-05 04:09:00<SeP>2024-06-06 14:31:57<SeP>2024-06-08 00:54:54<SeP>2024-06-09 11:17:51<SeP>2024-06-10 21:40:48<SeP>2024-06-12 08:03:45<SeP>2024-06-13 18:26:42<SeP>2024-06-15 04:49:39<SeP>2024-06-16 15:12:36<SeP>2024-06-18 01:35:33<SeP>2024-06-19 11:58:30<SeP>2024-06-20 22:21:27<SeP>2024-06-22 08:44:24<SeP>2024-06-23 19:07:21<SeP>2024-06-25 05:30:18<SeP>2024-06-26 15:53:15<SeP>2024-06-28 02:16:12<SeP>2024-06-29 12:39:09<SeP>2024-06-30 23:02:06<SeP>2024-07-02 09:25:03<SeP>2024-07-03 19:48:00<SeP>2024-07-05 06:10:57<SeP>2024-07-06 16:33:54<SeP>2024-07-08 02:56:51<SeP>2024-07-09 13:19:48<SeP>2024-07-10 23:42:45<SeP>2024-07-12 10:05:42<SeP>2024-07-13 20:28:39<SeP>2024-07-15 06:51:36<SeP>2024-07-16 17:14:33<SeP>2024-07-18 03:37:30<SeP>2024-07-19 14:00:27<SeP>2024-07-21 00:23:24<SeP>2024-07-22 10:46:21<SeP>2024-07-23 21:09:18<SeP>2024-07-25 07:32:15<SeP>2024-07-26 17:55:12<SeP>2024-07-28 04:18:09<SeP>2024-07-29 14:41:06<SeP>2024-07-31 01:04:03<SeP>2024-08-01 11:27:00<SeP>2024-08-02 21:49:57<SeP>2024-08-04 08:12:54<SeP>2024-08-05 18:35:51<SeP>2024-08-07 04:58:48<SeP>2024-08-08 15:21:45<SeP>2024-08-10 01:44:42<SeP>2024-08-11 12:07:39<SeP>2024-08-12 22:30:36<SeP>2024-08-14 08:53:33<SeP>2024-08-15 19:16:30<SeP>2024-08-17 05:39:27<SeP>2024-08-18 16:02:24<SeP>2024-08-20 02:25:21<SeP>2024-08-21 12:48:18<SeP>2024-08-22 23:11:15<SeP>2024-08-24 09:34:12<SeP>2024-08-25 19:57:09<SeP>2024-08-27 06:20:06<SeP>2024-08-28 16:43:03<SeP>2024-08-30 03:06:00<SeP>2024-08-31 13:28:57<SeP>2024-09-01 23:51:54<SeP>2024-09-03 10:14:51<SeP>2024-09-04 20:37:48<SeP>2024-09-06 07:00:45<SeP>2024-09-07 17:23:42<SeP>2024-09-09 03:46:39<SeP>2024-09-10 14:09:36<SeP>2024-09-12 00:32:33<SeP>2024-09-13 10:55:30<SeP>2024-09-14 21:18:27<SeP>2024-09-16 07:41:24<SeP>2024-09-17 18:04:21<SeP>2024-09-19 04:27:18<SeP>2024-09-20 14:50:15<SeP>2024-09-22 01:13:12<SeP>2024-09-23 11:36:09<SeP>2024-09-24 21:59:06<SeP>2024-09-26 08:22:03<SeP>2024-09-27 18:45:00<SeP>2024-09-29 05:07:57<SeP>2024-09-30 15:30:54<SeP>2024-10-02 01:53:51<SeP>2024-10-03 12:16:48<SeP>2024-10-04 22:39:45<SeP>2024-10-06 09:02:42<SeP>2024-10-07 19:25:39<SeP>2024-10-09 05:48:36<SeP>2024-10-10 16:11:33<SeP>2024-10-12 02:34:30<SeP>2024-10-13 12:57:27<SeP>2024-10-14 23:20:24<SeP>2024-10-16 09:43:21<SeP>2024-10-17 20:06:18<SeP>2024-10-19 06:29:15<SeP>2024-10-20 16:52:12<SeP>2024-10-22 03:15:09<SeP>2024-10-23 13:38:06<SeP>2024-10-25 00:01:03<SeP>2024-10-26 10:24:00<SeP>2024-10-27 20:46:57<SeP>2024-10-29 07:09:54<SeP>2024-10-30 17:32:51<SeP>2024-11-01 03:55:48<SeP>2024-11-02 14:18:45<SeP>2024-11-03 23:41:42<SeP>2024-11-05 10:04:39<SeP>2024-11-06 20:27:36<SeP>2024-11-08 06:50:33<SeP>2024-11-09 17:13:30<SeP>2024-11-11 03:36:27<SeP>2024-11-12 13:59:24<SeP>2024-11-14 00:22:21<SeP>2024-11-15 10:45:18<SeP>2024-11-16 21:08:15<SeP>2024-11-18 07:31:12<SeP>2024-11-19 17:54:09<SeP>2024-11-21 04:17:06<SeP>2024-11-22 14:40:03<SeP>2024-11-24 01:03:00<SeP>2024-11-25 11:25:57<SeP>2024-11-26 21:48:54<SeP>2024-11-28 08:11:51<SeP>2024-11-29 18:34:48<SeP>2024-12-01 04:57:45<SeP>2024-12-02 15:20:42<SeP>2024-12-04 01:43:39<SeP>2024-12-05 12:06:36<SeP>2024-12-06 22:29:33<SeP>2024-12-08 08:52:30<SeP>2024-12-09 19:15:27<SeP>2024-12-11 05:38:24<SeP>2024-12-12 16:01:21<SeP>2024-12-14 02:24:18<SeP>2024-12-15 12:47:15<SeP>2024-12-16 23:10:12<SeP>2024-12-18 09:33:09<SeP>2024-12-19 19:56:06<SeP>2024-12-21 06:19:03<SeP>2024-12-22 16:42:00<SeP>2024-12-24 03:04:57<SeP>2024-12-25 13:27:54<SeP>2024-12-26 23:50:51<SeP>2024-12-28 10:13:48<SeP>2024-12-29 20:36:45<SeP>2024-12-31 06:59:42<SeP>2025-01-01 17:22:39<SeP>2025-01-03 03:45:36<SeP>2025-01-04 14:08:33<SeP>2025-01-06 00:31:30<SeP>2025-01-07 10:54:27<SeP>2025-01-08 21:17:24<SeP>2025-01-10 07:40:21<SeP>2025-01-11 18:03:18<SeP>2025-01-13 04:26:15<SeP>2025-01-14 14:49:12<SeP>2025-01-16 01:12:09<SeP>2025-01-17 11:35:06<SeP>2025-01-18 21:58:03<SeP>2025-01-20 08:21:00<SeP>2025-01-21 18:43:57<SeP>2025-01-23 05:06:54<SeP>2025-01-24 15:29:51<SeP>2025-01-26 01:52:48<SeP>2025-01-27 12:15:45<SeP>2025-01-28 22:38:42<SeP>2025-01-30 09:01:39<SeP>2025-01-31 19:24:36<SeP>2025-02-02 05:47:33<SeP>2025-02-03 16:10:30<SeP>2025-02-05 02:33:27<SeP>2025-02-06 12:56:24<SeP>2025-02-07 23:19:21<SeP>2025-02-09 09:42:18<SeP>2025-02-10 20:05:15<SeP>2025-02-12 06:28:12<SeP>2025-02-13 16:51:09<SeP>2025-02-15 03:14:06<SeP>2025-02-16 13:37:03";
  const itemLabel       = "Attacks";
  const itemData        = "152<SeP>612<SeP>965<SeP>707<SeP>556<SeP>212<SeP>6948<SeP>487<SeP>9224<SeP>974<SeP>234<SeP>1274<SeP>756<SeP>766<SeP>144<SeP>431<SeP>160<SeP>361<SeP>668<SeP>2840<SeP>6924<SeP>8058<SeP>6194<SeP>9215<SeP>436<SeP>294<SeP>404<SeP>171<SeP>381<SeP>5924<SeP>85<SeP>369<SeP>130<SeP>539<SeP>290<SeP>7591<SeP>9822<SeP>9114<SeP>10113<SeP>7555<SeP>4604<SeP>8670<SeP>6355<SeP>9277<SeP>9110<SeP>7207<SeP>7834<SeP>8450<SeP>8746<SeP>8005<SeP>6264<SeP>5294<SeP>11996<SeP>7163<SeP>6848<SeP>7744<SeP>8839<SeP>8749<SeP>18190<SeP>16163<SeP>9200<SeP>11175<SeP>6530<SeP>7601<SeP>8294<SeP>9519<SeP>7906<SeP>6998<SeP>6520<SeP>6375<SeP>6559<SeP>4652<SeP>4721<SeP>6427<SeP>5219<SeP>6575<SeP>6523<SeP>6320<SeP>4495<SeP>5791<SeP>7151<SeP>4627<SeP>6403<SeP>5558<SeP>4479<SeP>7561<SeP>5298<SeP>4858<SeP>5757<SeP>7713<SeP>21713<SeP>18929<SeP>24592<SeP>8431<SeP>6898<SeP>7102<SeP>11087<SeP>7810<SeP>4042<SeP>6454<SeP>3363<SeP>5454<SeP>6676<SeP>4979<SeP>8481<SeP>6045<SeP>5935<SeP>4573<SeP>5341<SeP>8794<SeP>7732<SeP>7293<SeP>6471<SeP>4029<SeP>9185<SeP>9841<SeP>6128<SeP>3175<SeP>5479<SeP>7801<SeP>6431<SeP>6385<SeP>7873<SeP>8042<SeP>1516<SeP>2750<SeP>923<SeP>1639<SeP>2549<SeP>1762<SeP>832<SeP>1263<SeP>941<SeP>1321<SeP>1343<SeP>1084<SeP>1131<SeP>823<SeP>1125<SeP>1075<SeP>1096<SeP>1462<SeP>1030<SeP>1653<SeP>2022<SeP>1448<SeP>9345<SeP>7486<SeP>9325<SeP>9381<SeP>5941<SeP>11475<SeP>4069<SeP>10764<SeP>9445<SeP>9107<SeP>12539<SeP>8088<SeP>12424<SeP>11625<SeP>7481<SeP>12875<SeP>5124<SeP>4677<SeP>7186<SeP>23556<SeP>7541<SeP>7755<SeP>7876<SeP>12422<SeP>12928<SeP>8866<SeP>3853<SeP>7670<SeP>6927<SeP>25985<SeP>7794<SeP>8434<SeP>10946<SeP>4696<SeP>6180<SeP>5105<SeP>16653<SeP>5224<SeP>10699<SeP>9338<SeP>6675<SeP>8056<SeP>6852<SeP>5412<SeP>3540<SeP>7073<SeP>7509<SeP>4610<SeP>6491<SeP>8120<SeP>3514<SeP>21130<SeP>6978<SeP>6648<SeP>6877<SeP>6852<SeP>11354<SeP>6762<SeP>3943<SeP>4369<SeP>5174<SeP>3364<SeP>4114<SeP>4164<SeP>640<SeP>90<SeP>645<SeP>388<SeP>503<SeP>984<SeP>368<SeP>595<SeP>1001<SeP>1375<SeP>3174<SeP>18805<SeP>4668<SeP>2267<SeP>4073<SeP>2846<SeP>3626<SeP>6329<SeP>4699<SeP>2538<SeP>3579<SeP>2645<SeP>3047<SeP>3068<SeP>4688<SeP>1248<SeP>3144<SeP>2464<SeP>2113<SeP>1958<SeP>1886<SeP>1140<SeP>1905<SeP>793<SeP>924<SeP>1772<SeP>20072<SeP>8145<SeP>2333<SeP>3725<SeP>3641<SeP>2222<SeP>3741<SeP>2039<SeP>2737<SeP>3184<SeP>2638<SeP>3393<SeP>2109<SeP>3401<SeP>3059<SeP>4853<SeP>5527<SeP>4642<SeP>4381<SeP>2588<SeP>2273<SeP>5149<SeP>3238<SeP>9710<SeP>5280<SeP>3384<SeP>2326<SeP>2822<SeP>4076<SeP>3941<SeP>3068<SeP>3324<SeP>2454<SeP>5084<SeP>4585<SeP>3166<SeP>5861<SeP>4141<SeP>6250<SeP>4427<SeP>5372<SeP>5011<SeP>22108<SeP>5615<SeP>10665<SeP>1725<SeP>2964<SeP>4132<SeP>3653<SeP>5008<SeP>2874<SeP>5212<SeP>4642<SeP>4328<SeP>3748<SeP>3666<SeP>2361<SeP>1322<SeP>1956<SeP>3789<SeP>2105<SeP>2804<SeP>3472<SeP>4058<SeP>4124<SeP>2964<SeP>4576<SeP>2753<SeP>3663<SeP>3151<SeP>8252<SeP>6636<SeP>5226<SeP>4607<SeP>5133<SeP>4233<SeP>3298<SeP>4257<SeP>3726<SeP>6629<SeP>4953<SeP>4651<SeP>2997<SeP>784<SeP>1140<SeP>1734<SeP>1303<SeP>1230<SeP>1691<SeP>1546<SeP>1078<SeP>3336<SeP>3948<SeP>6469<SeP>23889<SeP>14585<SeP>5541<SeP>12964<SeP>14778<SeP>5476<SeP>5478<SeP>5197<SeP>9457<SeP>19343<SeP>5822<SeP>4468<SeP>4567<SeP>5731<SeP>18713<SeP>16394<SeP>4559<SeP>2949<SeP>4548<SeP>4919<SeP>6025<SeP>3284<SeP>3122<SeP>3361<SeP>4625<SeP>5215<SeP>4057<SeP>18000<SeP>5415<SeP>6769<SeP>4847<SeP>1315<SeP>3907<SeP>3924<SeP>4214<SeP>4117<SeP>3070<SeP>2910<SeP>3505<SeP>3412<SeP>3610<SeP>5979<SeP>8529<SeP>10067<SeP>8440<SeP>8991<SeP>7588<SeP>7277<SeP>4911<SeP>5052<SeP>3508<SeP>25670<SeP>3636<SeP>2837<SeP>4425<SeP>6305<SeP>9115<SeP>4920<SeP>3576<SeP>4925";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:22:57<SeP>2023-07-28 20:45:54<SeP>2023-07-30 07:08:51<SeP>2023-07-31 17:31:48<SeP>2023-08-02 03:54:45<SeP>2023-08-03 14:17:42<SeP>2023-08-05 00:40:39<SeP>2023-08-06 11:03:36<SeP>2023-08-07 21:26:33<SeP>2023-08-09 07:49:30<SeP>2023-08-10 18:12:27<SeP>2023-08-12 04:35:24<SeP>2023-08-13 14:58:21<SeP>2023-08-15 01:21:18<SeP>2023-08-16 11:44:15<SeP>2023-08-17 22:07:12<SeP>2023-08-19 08:30:09<SeP>2023-08-20 18:53:06<SeP>2023-08-22 05:16:03<SeP>2023-08-23 15:39:00<SeP>2023-08-25 02:01:57<SeP>2023-08-26 12:24:54<SeP>2023-08-27 22:47:51<SeP>2023-08-29 09:10:48<SeP>2023-08-30 19:33:45<SeP>2023-09-01 05:56:42<SeP>2023-09-02 16:19:39<SeP>2023-09-04 02:42:36<SeP>2023-09-05 13:05:33<SeP>2023-09-06 23:28:30<SeP>2023-09-08 09:51:27<SeP>2023-09-09 20:14:24<SeP>2023-09-11 06:37:21<SeP>2023-09-12 17:00:18<SeP>2023-09-14 03:23:15<SeP>2023-09-15 13:46:12<SeP>2023-09-17 00:09:09<SeP>2023-09-18 10:32:06<SeP>2023-09-19 20:55:03<SeP>2023-09-21 07:18:00<SeP>2023-09-22 17:40:57<SeP>2023-09-24 04:03:54<SeP>2023-09-25 14:26:51<SeP>2023-09-27 00:49:48<SeP>2023-09-28 11:12:45<SeP>2023-09-29 21:35:42<SeP>2023-10-01 07:58:39<SeP>2023-10-02 18:21:36<SeP>2023-10-04 04:44:33<SeP>2023-10-05 15:07:30<SeP>2023-10-07 01:30:27<SeP>2023-10-08 11:53:24<SeP>2023-10-09 22:16:21<SeP>2023-10-11 08:39:18<SeP>2023-10-12 19:02:15<SeP>2023-10-14 05:25:12<SeP>2023-10-15 15:48:09<SeP>2023-10-17 02:11:06<SeP>2023-10-18 12:34:03<SeP>2023-10-19 22:57:00<SeP>2023-10-21 09:19:57<SeP>2023-10-22 19:42:54<SeP>2023-10-24 06:05:51<SeP>2023-10-25 16:28:48<SeP>2023-10-27 02:51:45<SeP>2023-10-28 13:14:42<SeP>2023-10-29 23:37:39<SeP>2023-10-31 10:00:36<SeP>2023-11-01 20:23:33<SeP>2023-11-03 06:46:30<SeP>2023-11-04 17:09:27<SeP>2023-11-06 02:32:24<SeP>2023-11-07 12:55:21<SeP>2023-11-08 23:18:18<SeP>2023-11-10 09:41:15<SeP>2023-11-11 20:04:12<SeP>2023-11-13 06:27:09<SeP>2023-11-14 16:50:06<SeP>2023-11-16 03:13:03<SeP>2023-11-17 13:36:00<SeP>2023-11-18 23:58:57<SeP>2023-11-20 10:21:54<SeP>2023-11-21 20:44:51<SeP>2023-11-23 07:07:48<SeP>2023-11-24 17:30:45<SeP>2023-11-26 03:53:42<SeP>2023-11-27 14:16:39<SeP>2023-11-29 00:39:36<SeP>2023-11-30 11:02:33<SeP>2023-12-01 21:25:30<SeP>2023-12-03 07:48:27<SeP>2023-12-04 18:11:24<SeP>2023-12-06 04:34:21<SeP>2023-12-07 14:57:18<SeP>2023-12-09 01:20:15<SeP>2023-12-10 11:43:12<SeP>2023-12-11 22:06:09<SeP>2023-12-13 08:29:06<SeP>2023-12-14 18:52:03<SeP>2023-12-16 05:15:00<SeP>2023-12-17 15:37:57<SeP>2023-12-19 02:00:54<SeP>2023-12-20 12:23:51<SeP>2023-12-21 22:46:48<SeP>2023-12-23 09:09:45<SeP>2023-12-24 19:32:42<SeP>2023-12-26 05:55:39<SeP>2023-12-27 16:18:36<SeP>2023-12-29 02:41:33<SeP>2023-12-30 13:04:30<SeP>2023-12-31 23:27:27<SeP>2024-01-02 09:50:24<SeP>2024-01-03 20:13:21<SeP>2024-01-05 06:36:18<SeP>2024-01-06 16:59:15<SeP>2024-01-08 03:22:12<SeP>2024-01-09 13:45:09<SeP>2024-01-11 00:08:06<SeP>2024-01-12 10:31:03<SeP>2024-01-13 20:54:00<SeP>2024-01-15 07:16:57<SeP>2024-01-16 17:39:54<SeP>2024-01-18 04:02:51<SeP>2024-01-19 14:25:48<SeP>2024-01-21 00:48:45<SeP>2024-01-22 11:11:42<SeP>2024-01-23 21:34:39<SeP>2024-01-25 07:57:36<SeP>2024-01-26 18:20:33<SeP>2024-01-28 04:43:30<SeP>2024-01-29 15:06:27<SeP>2024-01-31 01:29:24<SeP>2024-02-01 11:52:21<SeP>2024-02-02 22:15:18<SeP>2024-02-04 08:38:15<SeP>2024-02-05 19:01:12<SeP>2024-02-07 05:24:09<SeP>2024-02-08 15:47:06<SeP>2024-02-10 02:10:03<SeP>2024-02-11 12:33:00<SeP>2024-02-12 22:55:57<SeP>2024-02-14 09:18:54<SeP>2024-02-15 19:41:51<SeP>2024-02-17 06:04:48<SeP>2024-02-18 16:27:45<SeP>2024-02-20 02:50:42<SeP>2024-02-21 13:13:39<SeP>2024-02-22 23:36:36<SeP>2024-02-24 09:59:33<SeP>2024-02-25 20:22:30<SeP>2024-02-27 06:45:27<SeP>2024-02-28 17:08:24<SeP>2024-03-01 03:31:21<SeP>2024-03-02 13:54:18<SeP>2024-03-04 00:17:15<SeP>2024-03-05 10:40:12<SeP>2024-03-06 21:03:09<SeP>2024-03-08 07:26:06<SeP>2024-03-09 17:49:03<SeP>2024-03-11 05:12:00<SeP>2024-03-12 15:34:57<SeP>2024-03-14 01:57:54<SeP>2024-03-15 12:20:51<SeP>2024-03-16 22:43:48<SeP>2024-03-18 09:06:45<SeP>2024-03-19 19:29:42<SeP>2024-03-21 05:52:39<SeP>2024-03-22 16:15:36<SeP>2024-03-24 02:38:33<SeP>2024-03-25 13:01:30<SeP>2024-03-26 23:24:27<SeP>2024-03-28 09:47:24<SeP>2024-03-29 20:10:21<SeP>2024-03-31 06:33:18<SeP>2024-04-01 16:56:15<SeP>2024-04-03 03:19:12<SeP>2024-04-04 13:42:09<SeP>2024-04-06 00:05:06<SeP>2024-04-07 10:28:03<SeP>2024-04-08 20:51:00<SeP>2024-04-10 07:13:57<SeP>2024-04-11 17:36:54<SeP>2024-04-13 03:59:51<SeP>2024-04-14 14:22:48<SeP>2024-04-16 00:45:45<SeP>2024-04-17 11:08:42<SeP>2024-04-18 21:31:39<SeP>2024-04-20 07:54:36<SeP>2024-04-21 18:17:33<SeP>2024-04-23 04:40:30<SeP>2024-04-24 15:03:27<SeP>2024-04-26 01:26:24<SeP>2024-04-27 11:49:21<SeP>2024-04-28 22:12:18<SeP>2024-04-30 08:35:15<SeP>2024-05-01 18:58:12<SeP>2024-05-03 05:21:09<SeP>2024-05-04 15:44:06<SeP>2024-05-06 02:07:03<SeP>2024-05-07 12:30:00<SeP>2024-05-08 22:52:57<SeP>2024-05-10 09:15:54<SeP>2024-05-11 19:38:51<SeP>2024-05-13 06:01:48<SeP>2024-05-14 16:24:45<SeP>2024-05-16 02:47:42<SeP>2024-05-17 13:10:39<SeP>2024-05-18 23:33:36<SeP>2024-05-20 09:56:33<SeP>2024-05-21 20:19:30<SeP>2024-05-23 06:42:27<SeP>2024-05-24 17:05:24<SeP>2024-05-26 03:28:21<SeP>2024-05-27 13:51:18<SeP>2024-05-29 00:14:15<SeP>2024-05-30 10:37:12<SeP>2024-05-31 21:00:09<SeP>2024-06-02 07:23:06<SeP>2024-06-03 17:46:03<SeP>2024-06-05 04:09:00<SeP>2024-06-06 14:31:57<SeP>2024-06-08 00:54:54<SeP>2024-06-09 11:17:51<SeP>2024-06-10 21:40:48<SeP>2024-06-12 08:03:45<SeP>2024-06-13 18:26:42<SeP>2024-06-15 04:49:39<SeP>2024-06-16 15:12:36<SeP>2024-06-18 01:35:33<SeP>2024-06-19 11:58:30<SeP>2024-06-20 22:21:27<SeP>2024-06-22 08:44:24<SeP>2024-06-23 19:07:21<SeP>2024-06-25 05:30:18<SeP>2024-06-26 15:53:15<SeP>2024-06-28 02:16:12<SeP>2024-06-29 12:39:09<SeP>2024-06-30 23:02:06<SeP>2024-07-02 09:25:03<SeP>2024-07-03 19:48:00<SeP>2024-07-05 06:10:57<SeP>2024-07-06 16:33:54<SeP>2024-07-08 02:56:51<SeP>2024-07-09 13:19:48<SeP>2024-07-10 23:42:45<SeP>2024-07-12 10:05:42<SeP>2024-07-13 20:28:39<SeP>2024-07-15 06:51:36<SeP>2024-07-16 17:14:33<SeP>2024-07-18 03:37:30<SeP>2024-07-19 14:00:27<SeP>2024-07-21 00:23:24<SeP>2024-07-22 10:46:21<SeP>2024-07-23 21:09:18<SeP>2024-07-25 07:32:15<SeP>2024-07-26 17:55:12<SeP>2024-07-28 04:18:09<SeP>2024-07-29 14:41:06<SeP>2024-07-31 01:04:03<SeP>2024-08-01 11:27:00<SeP>2024-08-02 21:49:57<SeP>2024-08-04 08:12:54<SeP>2024-08-05 18:35:51<SeP>2024-08-07 04:58:48<SeP>2024-08-08 15:21:45<SeP>2024-08-10 01:44:42<SeP>2024-08-11 12:07:39<SeP>2024-08-12 22:30:36<SeP>2024-08-14 08:53:33<SeP>2024-08-15 19:16:30<SeP>2024-08-17 05:39:27<SeP>2024-08-18 16:02:24<SeP>2024-08-20 02:25:21<SeP>2024-08-21 12:48:18<SeP>2024-08-22 23:11:15<SeP>2024-08-24 09:34:12<SeP>2024-08-25 19:57:09<SeP>2024-08-27 06:20:06<SeP>2024-08-28 16:43:03<SeP>2024-08-30 03:06:00<SeP>2024-08-31 13:28:57<SeP>2024-09-01 23:51:54<SeP>2024-09-03 10:14:51<SeP>2024-09-04 20:37:48<SeP>2024-09-06 07:00:45<SeP>2024-09-07 17:23:42<SeP>2024-09-09 03:46:39<SeP>2024-09-10 14:09:36<SeP>2024-09-12 00:32:33<SeP>2024-09-13 10:55:30<SeP>2024-09-14 21:18:27<SeP>2024-09-16 07:41:24<SeP>2024-09-17 18:04:21<SeP>2024-09-19 04:27:18<SeP>2024-09-20 14:50:15<SeP>2024-09-22 01:13:12<SeP>2024-09-23 11:36:09<SeP>2024-09-24 21:59:06<SeP>2024-09-26 08:22:03<SeP>2024-09-27 18:45:00<SeP>2024-09-29 05:07:57<SeP>2024-09-30 15:30:54<SeP>2024-10-02 01:53:51<SeP>2024-10-03 12:16:48<SeP>2024-10-04 22:39:45<SeP>2024-10-06 09:02:42<SeP>2024-10-07 19:25:39<SeP>2024-10-09 05:48:36<SeP>2024-10-10 16:11:33<SeP>2024-10-12 02:34:30<SeP>2024-10-13 12:57:27<SeP>2024-10-14 23:20:24<SeP>2024-10-16 09:43:21<SeP>2024-10-17 20:06:18<SeP>2024-10-19 06:29:15<SeP>2024-10-20 16:52:12<SeP>2024-10-22 03:15:09<SeP>2024-10-23 13:38:06<SeP>2024-10-25 00:01:03<SeP>2024-10-26 10:24:00<SeP>2024-10-27 20:46:57<SeP>2024-10-29 07:09:54<SeP>2024-10-30 17:32:51<SeP>2024-11-01 03:55:48<SeP>2024-11-02 14:18:45<SeP>2024-11-03 23:41:42<SeP>2024-11-05 10:04:39<SeP>2024-11-06 20:27:36<SeP>2024-11-08 06:50:33<SeP>2024-11-09 17:13:30<SeP>2024-11-11 03:36:27<SeP>2024-11-12 13:59:24<SeP>2024-11-14 00:22:21<SeP>2024-11-15 10:45:18<SeP>2024-11-16 21:08:15<SeP>2024-11-18 07:31:12<SeP>2024-11-19 17:54:09<SeP>2024-11-21 04:17:06<SeP>2024-11-22 14:40:03<SeP>2024-11-24 01:03:00<SeP>2024-11-25 11:25:57<SeP>2024-11-26 21:48:54<SeP>2024-11-28 08:11:51<SeP>2024-11-29 18:34:48<SeP>2024-12-01 04:57:45<SeP>2024-12-02 15:20:42<SeP>2024-12-04 01:43:39<SeP>2024-12-05 12:06:36<SeP>2024-12-06 22:29:33<SeP>2024-12-08 08:52:30<SeP>2024-12-09 19:15:27<SeP>2024-12-11 05:38:24<SeP>2024-12-12 16:01:21<SeP>2024-12-14 02:24:18<SeP>2024-12-15 12:47:15<SeP>2024-12-16 23:10:12<SeP>2024-12-18 09:33:09<SeP>2024-12-19 19:56:06<SeP>2024-12-21 06:19:03<SeP>2024-12-22 16:42:00<SeP>2024-12-24 03:04:57<SeP>2024-12-25 13:27:54<SeP>2024-12-26 23:50:51<SeP>2024-12-28 10:13:48<SeP>2024-12-29 20:36:45<SeP>2024-12-31 06:59:42<SeP>2025-01-01 17:22:39<SeP>2025-01-03 03:45:36<SeP>2025-01-04 14:08:33<SeP>2025-01-06 00:31:30<SeP>2025-01-07 10:54:27<SeP>2025-01-08 21:17:24<SeP>2025-01-10 07:40:21<SeP>2025-01-11 18:03:18<SeP>2025-01-13 04:26:15<SeP>2025-01-14 14:49:12<SeP>2025-01-16 01:12:09<SeP>2025-01-17 11:35:06<SeP>2025-01-18 21:58:03<SeP>2025-01-20 08:21:00<SeP>2025-01-21 18:43:57<SeP>2025-01-23 05:06:54<SeP>2025-01-24 15:29:51<SeP>2025-01-26 01:52:48<SeP>2025-01-27 12:15:45<SeP>2025-01-28 22:38:42<SeP>2025-01-30 09:01:39<SeP>2025-01-31 19:24:36<SeP>2025-02-02 05:47:33<SeP>2025-02-03 16:10:30<SeP>2025-02-05 02:33:27<SeP>2025-02-06 12:56:24<SeP>2025-02-07 23:19:21<SeP>2025-02-09 09:42:18<SeP>2025-02-10 20:05:15<SeP>2025-02-12 06:28:12<SeP>2025-02-13 16:51:09<SeP>2025-02-15 03:14:06<SeP>2025-02-16 13:37:03";
  const item1Label       = "Escaneos";
  const item1Data        = "755<SeP>1443<SeP>1366<SeP>1426<SeP>1192<SeP>1665<SeP>1044<SeP>983<SeP>1054<SeP>3308<SeP>1485<SeP>2862<SeP>1830<SeP>2511<SeP>727<SeP>831<SeP>1412<SeP>1030<SeP>2945<SeP>1462<SeP>1478<SeP>1000<SeP>904<SeP>1076<SeP>1179<SeP>930<SeP>669<SeP>923<SeP>3666<SeP>921<SeP>793<SeP>1204<SeP>1371<SeP>868<SeP>804<SeP>3166<SeP>2606<SeP>1881<SeP>1652<SeP>1677<SeP>1234<SeP>1492<SeP>1817<SeP>1911<SeP>2004<SeP>1494<SeP>1574<SeP>1523<SeP>1720<SeP>1693<SeP>1796<SeP>1803<SeP>1739<SeP>1430<SeP>3144<SeP>1697<SeP>1369<SeP>1825<SeP>2054<SeP>2266<SeP>1419<SeP>3590<SeP>1567<SeP>1342<SeP>1593<SeP>1293<SeP>1752<SeP>1579<SeP>1571<SeP>1134<SeP>1419<SeP>1171<SeP>2368<SeP>1192<SeP>1141<SeP>1184<SeP>2293<SeP>7262<SeP>1126<SeP>1340<SeP>1230<SeP>1697<SeP>1954<SeP>1073<SeP>6517<SeP>1686<SeP>1559<SeP>993<SeP>1097<SeP>3236<SeP>1333<SeP>830<SeP>1037<SeP>1039<SeP>1005<SeP>3017<SeP>981<SeP>1365<SeP>2990<SeP>5110<SeP>2781<SeP>995<SeP>842<SeP>952<SeP>923<SeP>995<SeP>839<SeP>1129<SeP>3005<SeP>2839<SeP>1509<SeP>1692<SeP>740<SeP>677<SeP>1399<SeP>1274<SeP>1101<SeP>945<SeP>2279<SeP>1026<SeP>1203<SeP>1049<SeP>899<SeP>1173<SeP>653<SeP>848<SeP>834<SeP>775<SeP>883<SeP>1087<SeP>768<SeP>790<SeP>902<SeP>871<SeP>929<SeP>559<SeP>862<SeP>858<SeP>801<SeP>900<SeP>827<SeP>801<SeP>743<SeP>829<SeP>1060<SeP>750<SeP>835<SeP>946<SeP>863<SeP>1125<SeP>942<SeP>830<SeP>465<SeP>916<SeP>807<SeP>1193<SeP>887<SeP>953<SeP>1204<SeP>1147<SeP>970<SeP>939<SeP>913<SeP>967<SeP>720<SeP>975<SeP>1042<SeP>893<SeP>847<SeP>893<SeP>1030<SeP>940<SeP>994<SeP>1008<SeP>1020<SeP>1053<SeP>945<SeP>866<SeP>2199<SeP>1230<SeP>1055<SeP>1069<SeP>1000<SeP>1127<SeP>915<SeP>807<SeP>727<SeP>874<SeP>1066<SeP>932<SeP>782<SeP>1078<SeP>1271<SeP>1092<SeP>1119<SeP>1290<SeP>1151<SeP>1259<SeP>1105<SeP>1423<SeP>1292<SeP>1720<SeP>1824<SeP>1332<SeP>663<SeP>912<SeP>1086<SeP>1056<SeP>647<SeP>787<SeP>859<SeP>945<SeP>793<SeP>4532<SeP>3921<SeP>1951<SeP>1466<SeP>1122<SeP>835<SeP>1028<SeP>910<SeP>908<SeP>1051<SeP>1027<SeP>1005<SeP>1004<SeP>2183<SeP>1325<SeP>1010<SeP>1218<SeP>1179<SeP>1229<SeP>1066<SeP>962<SeP>1019<SeP>1058<SeP>1077<SeP>1024<SeP>1156<SeP>890<SeP>1120<SeP>811<SeP>1391<SeP>1053<SeP>1132<SeP>1084<SeP>1329<SeP>1232<SeP>1101<SeP>1606<SeP>1098<SeP>1130<SeP>1060<SeP>1468<SeP>1728<SeP>1334<SeP>1881<SeP>1730<SeP>1388<SeP>1969<SeP>1452<SeP>1094<SeP>1129<SeP>1408<SeP>1073<SeP>1545<SeP>1198<SeP>1194<SeP>1775<SeP>1516<SeP>1333<SeP>1537<SeP>1218<SeP>1315<SeP>1167<SeP>1092<SeP>1285<SeP>1145<SeP>1150<SeP>1257<SeP>1268<SeP>1078<SeP>1996<SeP>1281<SeP>1309<SeP>1625<SeP>1369<SeP>1271<SeP>975<SeP>964<SeP>1001<SeP>965<SeP>811<SeP>1013<SeP>1732<SeP>1130<SeP>1012<SeP>1142<SeP>918<SeP>823<SeP>1065<SeP>1205<SeP>947<SeP>919<SeP>870<SeP>1204<SeP>1429<SeP>1623<SeP>1118<SeP>1039<SeP>1011<SeP>1099<SeP>1796<SeP>914<SeP>1226<SeP>986<SeP>1432<SeP>1189<SeP>853<SeP>1163<SeP>1060<SeP>966<SeP>872<SeP>896<SeP>1307<SeP>1292<SeP>1587<SeP>1519<SeP>1410<SeP>938<SeP>1076<SeP>1057<SeP>1116<SeP>1142<SeP>1152<SeP>988<SeP>952<SeP>1243<SeP>1494<SeP>1275<SeP>1517<SeP>1260<SeP>1450<SeP>1517<SeP>1394<SeP>1259<SeP>1441<SeP>1494<SeP>1391<SeP>1342<SeP>1462<SeP>1497<SeP>1621<SeP>1293<SeP>1347<SeP>1329<SeP>1310<SeP>1197<SeP>1373<SeP>1394<SeP>1595<SeP>1228<SeP>1280<SeP>1270<SeP>1297<SeP>1297<SeP>1068<SeP>1518<SeP>1751<SeP>1758<SeP>1138<SeP>616<SeP>1381<SeP>1905<SeP>1144<SeP>1412<SeP>1160<SeP>1150<SeP>1284<SeP>1419<SeP>1173<SeP>1500<SeP>1441<SeP>1617<SeP>1487<SeP>1479<SeP>1575<SeP>1370<SeP>1313<SeP>1694<SeP>1520<SeP>1249<SeP>1153<SeP>1541<SeP>1710<SeP>1896<SeP>1706<SeP>1672<SeP>1662<SeP>1509";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "152<SeP>612<SeP>965<SeP>707<SeP>556<SeP>212<SeP>6948<SeP>487<SeP>9224<SeP>974<SeP>234<SeP>1274<SeP>756<SeP>766<SeP>144<SeP>431<SeP>160<SeP>361<SeP>668<SeP>2840<SeP>6924<SeP>8058<SeP>6194<SeP>9215<SeP>436<SeP>294<SeP>404<SeP>171<SeP>381<SeP>5924<SeP>85<SeP>369<SeP>130<SeP>539<SeP>290<SeP>7591<SeP>9822<SeP>9114<SeP>10113<SeP>7555<SeP>4604<SeP>8670<SeP>6355<SeP>9277<SeP>9110<SeP>7207<SeP>7834<SeP>8450<SeP>8746<SeP>8005<SeP>6264<SeP>5294<SeP>11996<SeP>7163<SeP>6848<SeP>7744<SeP>8839<SeP>8749<SeP>18190<SeP>16163<SeP>9200<SeP>11175<SeP>6530<SeP>7601<SeP>8294<SeP>9519<SeP>7906<SeP>6998<SeP>6520<SeP>6375<SeP>6559<SeP>4652<SeP>4721<SeP>6427<SeP>5219<SeP>6575<SeP>6523<SeP>6320<SeP>4495<SeP>5791<SeP>7151<SeP>4627<SeP>6403<SeP>5558<SeP>4479<SeP>7561<SeP>5298<SeP>4858<SeP>5757<SeP>7713<SeP>21713<SeP>18929<SeP>24592<SeP>8431<SeP>6898<SeP>7102<SeP>11087<SeP>7810<SeP>4042<SeP>6454<SeP>3363<SeP>5454<SeP>6676<SeP>4979<SeP>8481<SeP>6045<SeP>5935<SeP>4573<SeP>5341<SeP>8794<SeP>7732<SeP>7293<SeP>6471<SeP>4029<SeP>9185<SeP>9841<SeP>6128<SeP>3175<SeP>5479<SeP>7801<SeP>6431<SeP>6385<SeP>7873<SeP>8042<SeP>1516<SeP>2750<SeP>923<SeP>1639<SeP>2549<SeP>1762<SeP>832<SeP>1263<SeP>941<SeP>1321<SeP>1343<SeP>1084<SeP>1131<SeP>823<SeP>1125<SeP>1075<SeP>1096<SeP>1462<SeP>1030<SeP>1653<SeP>2022<SeP>1448<SeP>9345<SeP>7486<SeP>9325<SeP>9381<SeP>5941<SeP>11475<SeP>4069<SeP>10764<SeP>9445<SeP>9107<SeP>12539<SeP>8088<SeP>12424<SeP>11625<SeP>7481<SeP>12875<SeP>5124<SeP>4677<SeP>7186<SeP>23556<SeP>7541<SeP>7755<SeP>7876<SeP>12422<SeP>12928<SeP>8866<SeP>3853<SeP>7670<SeP>6927<SeP>25985<SeP>7794<SeP>8434<SeP>10946<SeP>4696<SeP>6180<SeP>5105<SeP>16653<SeP>5224<SeP>10699<SeP>9338<SeP>6675<SeP>8056<SeP>6852<SeP>5412<SeP>3540<SeP>7073<SeP>7509<SeP>4610<SeP>6491<SeP>8120<SeP>3514<SeP>21130<SeP>6978<SeP>6648<SeP>6877<SeP>6852<SeP>11354<SeP>6762<SeP>3943<SeP>4369<SeP>5174<SeP>3364<SeP>4114<SeP>4164<SeP>640<SeP>90<SeP>645<SeP>388<SeP>503<SeP>984<SeP>368<SeP>595<SeP>1001<SeP>1375<SeP>3174<SeP>18805<SeP>4668<SeP>2267<SeP>4073<SeP>2846<SeP>3626<SeP>6329<SeP>4699<SeP>2538<SeP>3579<SeP>2645<SeP>3047<SeP>3068<SeP>4688<SeP>1248<SeP>3144<SeP>2464<SeP>2113<SeP>1958<SeP>1886<SeP>1140<SeP>1905<SeP>793<SeP>924<SeP>1772<SeP>20072<SeP>8145<SeP>2333<SeP>3725<SeP>3641<SeP>2222<SeP>3741<SeP>2039<SeP>2737<SeP>3184<SeP>2638<SeP>3393<SeP>2109<SeP>3401<SeP>3059<SeP>4853<SeP>5527<SeP>4642<SeP>4381<SeP>2588<SeP>2273<SeP>5149<SeP>3238<SeP>9710<SeP>5280<SeP>3384<SeP>2326<SeP>2822<SeP>4076<SeP>3941<SeP>3068<SeP>3324<SeP>2454<SeP>5084<SeP>4585<SeP>3166<SeP>5861<SeP>4141<SeP>6250<SeP>4427<SeP>5372<SeP>5011<SeP>22108<SeP>5615<SeP>10665<SeP>1725<SeP>2964<SeP>4132<SeP>3653<SeP>5008<SeP>2874<SeP>5212<SeP>4642<SeP>4328<SeP>3748<SeP>3666<SeP>2361<SeP>1322<SeP>1956<SeP>3789<SeP>2105<SeP>2804<SeP>3472<SeP>4058<SeP>4124<SeP>2964<SeP>4576<SeP>2753<SeP>3663<SeP>3151<SeP>8252<SeP>6636<SeP>5226<SeP>4607<SeP>5133<SeP>4233<SeP>3298<SeP>4257<SeP>3726<SeP>6629<SeP>4953<SeP>4651<SeP>2997<SeP>784<SeP>1140<SeP>1734<SeP>1303<SeP>1230<SeP>1691<SeP>1546<SeP>1078<SeP>3336<SeP>3948<SeP>6469<SeP>23889<SeP>14585<SeP>5541<SeP>12964<SeP>14778<SeP>5476<SeP>5478<SeP>5197<SeP>9457<SeP>19343<SeP>5822<SeP>4468<SeP>4567<SeP>5731<SeP>18713<SeP>16394<SeP>4559<SeP>2949<SeP>4548<SeP>4919<SeP>6025<SeP>3284<SeP>3122<SeP>3361<SeP>4625<SeP>5215<SeP>4057<SeP>18000<SeP>5415<SeP>6769<SeP>4847<SeP>1315<SeP>3907<SeP>3924<SeP>4214<SeP>4117<SeP>3070<SeP>2910<SeP>3505<SeP>3412<SeP>3610<SeP>5979<SeP>8529<SeP>10067<SeP>8440<SeP>8991<SeP>7588<SeP>7277<SeP>4911<SeP>5052<SeP>3508<SeP>25670<SeP>3636<SeP>2837<SeP>4425<SeP>6305<SeP>9115<SeP>4920<SeP>3576<SeP>4925";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:22:57<SeP>2023-07-28 20:45:54<SeP>2023-07-30 07:08:51<SeP>2023-07-31 17:31:48<SeP>2023-08-02 03:54:45<SeP>2023-08-03 14:17:42<SeP>2023-08-05 00:40:39<SeP>2023-08-06 11:03:36<SeP>2023-08-07 21:26:33<SeP>2023-08-09 07:49:30<SeP>2023-08-10 18:12:27<SeP>2023-08-12 04:35:24<SeP>2023-08-13 14:58:21<SeP>2023-08-15 01:21:18<SeP>2023-08-16 11:44:15<SeP>2023-08-17 22:07:12<SeP>2023-08-19 08:30:09<SeP>2023-08-20 18:53:06<SeP>2023-08-22 05:16:03<SeP>2023-08-23 15:39:00<SeP>2023-08-25 02:01:57<SeP>2023-08-26 12:24:54<SeP>2023-08-27 22:47:51<SeP>2023-08-29 09:10:48<SeP>2023-08-30 19:33:45<SeP>2023-09-01 05:56:42<SeP>2023-09-02 16:19:39<SeP>2023-09-04 02:42:36<SeP>2023-09-05 13:05:33<SeP>2023-09-06 23:28:30<SeP>2023-09-08 09:51:27<SeP>2023-09-09 20:14:24<SeP>2023-09-11 06:37:21<SeP>2023-09-12 17:00:18<SeP>2023-09-14 03:23:15<SeP>2023-09-15 13:46:12<SeP>2023-09-17 00:09:09<SeP>2023-09-18 10:32:06<SeP>2023-09-19 20:55:03<SeP>2023-09-21 07:18:00<SeP>2023-09-22 17:40:57<SeP>2023-09-24 04:03:54<SeP>2023-09-25 14:26:51<SeP>2023-09-27 00:49:48<SeP>2023-09-28 11:12:45<SeP>2023-09-29 21:35:42<SeP>2023-10-01 07:58:39<SeP>2023-10-02 18:21:36<SeP>2023-10-04 04:44:33<SeP>2023-10-05 15:07:30<SeP>2023-10-07 01:30:27<SeP>2023-10-08 11:53:24<SeP>2023-10-09 22:16:21<SeP>2023-10-11 08:39:18<SeP>2023-10-12 19:02:15<SeP>2023-10-14 05:25:12<SeP>2023-10-15 15:48:09<SeP>2023-10-17 02:11:06<SeP>2023-10-18 12:34:03<SeP>2023-10-19 22:57:00<SeP>2023-10-21 09:19:57<SeP>2023-10-22 19:42:54<SeP>2023-10-24 06:05:51<SeP>2023-10-25 16:28:48<SeP>2023-10-27 02:51:45<SeP>2023-10-28 13:14:42<SeP>2023-10-29 23:37:39<SeP>2023-10-31 10:00:36<SeP>2023-11-01 20:23:33<SeP>2023-11-03 06:46:30<SeP>2023-11-04 17:09:27<SeP>2023-11-06 02:32:24<SeP>2023-11-07 12:55:21<SeP>2023-11-08 23:18:18<SeP>2023-11-10 09:41:15<SeP>2023-11-11 20:04:12<SeP>2023-11-13 06:27:09<SeP>2023-11-14 16:50:06<SeP>2023-11-16 03:13:03<SeP>2023-11-17 13:36:00<SeP>2023-11-18 23:58:57<SeP>2023-11-20 10:21:54<SeP>2023-11-21 20:44:51<SeP>2023-11-23 07:07:48<SeP>2023-11-24 17:30:45<SeP>2023-11-26 03:53:42<SeP>2023-11-27 14:16:39<SeP>2023-11-29 00:39:36<SeP>2023-11-30 11:02:33<SeP>2023-12-01 21:25:30<SeP>2023-12-03 07:48:27<SeP>2023-12-04 18:11:24<SeP>2023-12-06 04:34:21<SeP>2023-12-07 14:57:18<SeP>2023-12-09 01:20:15<SeP>2023-12-10 11:43:12<SeP>2023-12-11 22:06:09<SeP>2023-12-13 08:29:06<SeP>2023-12-14 18:52:03<SeP>2023-12-16 05:15:00<SeP>2023-12-17 15:37:57<SeP>2023-12-19 02:00:54<SeP>2023-12-20 12:23:51<SeP>2023-12-21 22:46:48<SeP>2023-12-23 09:09:45<SeP>2023-12-24 19:32:42<SeP>2023-12-26 05:55:39<SeP>2023-12-27 16:18:36<SeP>2023-12-29 02:41:33<SeP>2023-12-30 13:04:30<SeP>2023-12-31 23:27:27<SeP>2024-01-02 09:50:24<SeP>2024-01-03 20:13:21<SeP>2024-01-05 06:36:18<SeP>2024-01-06 16:59:15<SeP>2024-01-08 03:22:12<SeP>2024-01-09 13:45:09<SeP>2024-01-11 00:08:06<SeP>2024-01-12 10:31:03<SeP>2024-01-13 20:54:00<SeP>2024-01-15 07:16:57<SeP>2024-01-16 17:39:54<SeP>2024-01-18 04:02:51<SeP>2024-01-19 14:25:48<SeP>2024-01-21 00:48:45<SeP>2024-01-22 11:11:42<SeP>2024-01-23 21:34:39<SeP>2024-01-25 07:57:36<SeP>2024-01-26 18:20:33<SeP>2024-01-28 04:43:30<SeP>2024-01-29 15:06:27<SeP>2024-01-31 01:29:24<SeP>2024-02-01 11:52:21<SeP>2024-02-02 22:15:18<SeP>2024-02-04 08:38:15<SeP>2024-02-05 19:01:12<SeP>2024-02-07 05:24:09<SeP>2024-02-08 15:47:06<SeP>2024-02-10 02:10:03<SeP>2024-02-11 12:33:00<SeP>2024-02-12 22:55:57<SeP>2024-02-14 09:18:54<SeP>2024-02-15 19:41:51<SeP>2024-02-17 06:04:48<SeP>2024-02-18 16:27:45<SeP>2024-02-20 02:50:42<SeP>2024-02-21 13:13:39<SeP>2024-02-22 23:36:36<SeP>2024-02-24 09:59:33<SeP>2024-02-25 20:22:30<SeP>2024-02-27 06:45:27<SeP>2024-02-28 17:08:24<SeP>2024-03-01 03:31:21<SeP>2024-03-02 13:54:18<SeP>2024-03-04 00:17:15<SeP>2024-03-05 10:40:12<SeP>2024-03-06 21:03:09<SeP>2024-03-08 07:26:06<SeP>2024-03-09 17:49:03<SeP>2024-03-11 05:12:00<SeP>2024-03-12 15:34:57<SeP>2024-03-14 01:57:54<SeP>2024-03-15 12:20:51<SeP>2024-03-16 22:43:48<SeP>2024-03-18 09:06:45<SeP>2024-03-19 19:29:42<SeP>2024-03-21 05:52:39<SeP>2024-03-22 16:15:36<SeP>2024-03-24 02:38:33<SeP>2024-03-25 13:01:30<SeP>2024-03-26 23:24:27<SeP>2024-03-28 09:47:24<SeP>2024-03-29 20:10:21<SeP>2024-03-31 06:33:18<SeP>2024-04-01 16:56:15<SeP>2024-04-03 03:19:12<SeP>2024-04-04 13:42:09<SeP>2024-04-06 00:05:06<SeP>2024-04-07 10:28:03<SeP>2024-04-08 20:51:00<SeP>2024-04-10 07:13:57<SeP>2024-04-11 17:36:54<SeP>2024-04-13 03:59:51<SeP>2024-04-14 14:22:48<SeP>2024-04-16 00:45:45<SeP>2024-04-17 11:08:42<SeP>2024-04-18 21:31:39<SeP>2024-04-20 07:54:36<SeP>2024-04-21 18:17:33<SeP>2024-04-23 04:40:30<SeP>2024-04-24 15:03:27<SeP>2024-04-26 01:26:24<SeP>2024-04-27 11:49:21<SeP>2024-04-28 22:12:18<SeP>2024-04-30 08:35:15<SeP>2024-05-01 18:58:12<SeP>2024-05-03 05:21:09<SeP>2024-05-04 15:44:06<SeP>2024-05-06 02:07:03<SeP>2024-05-07 12:30:00<SeP>2024-05-08 22:52:57<SeP>2024-05-10 09:15:54<SeP>2024-05-11 19:38:51<SeP>2024-05-13 06:01:48<SeP>2024-05-14 16:24:45<SeP>2024-05-16 02:47:42<SeP>2024-05-17 13:10:39<SeP>2024-05-18 23:33:36<SeP>2024-05-20 09:56:33<SeP>2024-05-21 20:19:30<SeP>2024-05-23 06:42:27<SeP>2024-05-24 17:05:24<SeP>2024-05-26 03:28:21<SeP>2024-05-27 13:51:18<SeP>2024-05-29 00:14:15<SeP>2024-05-30 10:37:12<SeP>2024-05-31 21:00:09<SeP>2024-06-02 07:23:06<SeP>2024-06-03 17:46:03<SeP>2024-06-05 04:09:00<SeP>2024-06-06 14:31:57<SeP>2024-06-08 00:54:54<SeP>2024-06-09 11:17:51<SeP>2024-06-10 21:40:48<SeP>2024-06-12 08:03:45<SeP>2024-06-13 18:26:42<SeP>2024-06-15 04:49:39<SeP>2024-06-16 15:12:36<SeP>2024-06-18 01:35:33<SeP>2024-06-19 11:58:30<SeP>2024-06-20 22:21:27<SeP>2024-06-22 08:44:24<SeP>2024-06-23 19:07:21<SeP>2024-06-25 05:30:18<SeP>2024-06-26 15:53:15<SeP>2024-06-28 02:16:12<SeP>2024-06-29 12:39:09<SeP>2024-06-30 23:02:06<SeP>2024-07-02 09:25:03<SeP>2024-07-03 19:48:00<SeP>2024-07-05 06:10:57<SeP>2024-07-06 16:33:54<SeP>2024-07-08 02:56:51<SeP>2024-07-09 13:19:48<SeP>2024-07-10 23:42:45<SeP>2024-07-12 10:05:42<SeP>2024-07-13 20:28:39<SeP>2024-07-15 06:51:36<SeP>2024-07-16 17:14:33<SeP>2024-07-18 03:37:30<SeP>2024-07-19 14:00:27<SeP>2024-07-21 00:23:24<SeP>2024-07-22 10:46:21<SeP>2024-07-23 21:09:18<SeP>2024-07-25 07:32:15<SeP>2024-07-26 17:55:12<SeP>2024-07-28 04:18:09<SeP>2024-07-29 14:41:06<SeP>2024-07-31 01:04:03<SeP>2024-08-01 11:27:00<SeP>2024-08-02 21:49:57<SeP>2024-08-04 08:12:54<SeP>2024-08-05 18:35:51<SeP>2024-08-07 04:58:48<SeP>2024-08-08 15:21:45<SeP>2024-08-10 01:44:42<SeP>2024-08-11 12:07:39<SeP>2024-08-12 22:30:36<SeP>2024-08-14 08:53:33<SeP>2024-08-15 19:16:30<SeP>2024-08-17 05:39:27<SeP>2024-08-18 16:02:24<SeP>2024-08-20 02:25:21<SeP>2024-08-21 12:48:18<SeP>2024-08-22 23:11:15<SeP>2024-08-24 09:34:12<SeP>2024-08-25 19:57:09<SeP>2024-08-27 06:20:06<SeP>2024-08-28 16:43:03<SeP>2024-08-30 03:06:00<SeP>2024-08-31 13:28:57<SeP>2024-09-01 23:51:54<SeP>2024-09-03 10:14:51<SeP>2024-09-04 20:37:48<SeP>2024-09-06 07:00:45<SeP>2024-09-07 17:23:42<SeP>2024-09-09 03:46:39<SeP>2024-09-10 14:09:36<SeP>2024-09-12 00:32:33<SeP>2024-09-13 10:55:30<SeP>2024-09-14 21:18:27<SeP>2024-09-16 07:41:24<SeP>2024-09-17 18:04:21<SeP>2024-09-19 04:27:18<SeP>2024-09-20 14:50:15<SeP>2024-09-22 01:13:12<SeP>2024-09-23 11:36:09<SeP>2024-09-24 21:59:06<SeP>2024-09-26 08:22:03<SeP>2024-09-27 18:45:00<SeP>2024-09-29 05:07:57<SeP>2024-09-30 15:30:54<SeP>2024-10-02 01:53:51<SeP>2024-10-03 12:16:48<SeP>2024-10-04 22:39:45<SeP>2024-10-06 09:02:42<SeP>2024-10-07 19:25:39<SeP>2024-10-09 05:48:36<SeP>2024-10-10 16:11:33<SeP>2024-10-12 02:34:30<SeP>2024-10-13 12:57:27<SeP>2024-10-14 23:20:24<SeP>2024-10-16 09:43:21<SeP>2024-10-17 20:06:18<SeP>2024-10-19 06:29:15<SeP>2024-10-20 16:52:12<SeP>2024-10-22 03:15:09<SeP>2024-10-23 13:38:06<SeP>2024-10-25 00:01:03<SeP>2024-10-26 10:24:00<SeP>2024-10-27 20:46:57<SeP>2024-10-29 07:09:54<SeP>2024-10-30 17:32:51<SeP>2024-11-01 03:55:48<SeP>2024-11-02 14:18:45<SeP>2024-11-03 23:41:42<SeP>2024-11-05 10:04:39<SeP>2024-11-06 20:27:36<SeP>2024-11-08 06:50:33<SeP>2024-11-09 17:13:30<SeP>2024-11-11 03:36:27<SeP>2024-11-12 13:59:24<SeP>2024-11-14 00:22:21<SeP>2024-11-15 10:45:18<SeP>2024-11-16 21:08:15<SeP>2024-11-18 07:31:12<SeP>2024-11-19 17:54:09<SeP>2024-11-21 04:17:06<SeP>2024-11-22 14:40:03<SeP>2024-11-24 01:03:00<SeP>2024-11-25 11:25:57<SeP>2024-11-26 21:48:54<SeP>2024-11-28 08:11:51<SeP>2024-11-29 18:34:48<SeP>2024-12-01 04:57:45<SeP>2024-12-02 15:20:42<SeP>2024-12-04 01:43:39<SeP>2024-12-05 12:06:36<SeP>2024-12-06 22:29:33<SeP>2024-12-08 08:52:30<SeP>2024-12-09 19:15:27<SeP>2024-12-11 05:38:24<SeP>2024-12-12 16:01:21<SeP>2024-12-14 02:24:18<SeP>2024-12-15 12:47:15<SeP>2024-12-16 23:10:12<SeP>2024-12-18 09:33:09<SeP>2024-12-19 19:56:06<SeP>2024-12-21 06:19:03<SeP>2024-12-22 16:42:00<SeP>2024-12-24 03:04:57<SeP>2024-12-25 13:27:54<SeP>2024-12-26 23:50:51<SeP>2024-12-28 10:13:48<SeP>2024-12-29 20:36:45<SeP>2024-12-31 06:59:42<SeP>2025-01-01 17:22:39<SeP>2025-01-03 03:45:36<SeP>2025-01-04 14:08:33<SeP>2025-01-06 00:31:30<SeP>2025-01-07 10:54:27<SeP>2025-01-08 21:17:24<SeP>2025-01-10 07:40:21<SeP>2025-01-11 18:03:18<SeP>2025-01-13 04:26:15<SeP>2025-01-14 14:49:12<SeP>2025-01-16 01:12:09<SeP>2025-01-17 11:35:06<SeP>2025-01-18 21:58:03<SeP>2025-01-20 08:21:00<SeP>2025-01-21 18:43:57<SeP>2025-01-23 05:06:54<SeP>2025-01-24 15:29:51<SeP>2025-01-26 01:52:48<SeP>2025-01-27 12:15:45<SeP>2025-01-28 22:38:42<SeP>2025-01-30 09:01:39<SeP>2025-01-31 19:24:36<SeP>2025-02-02 05:47:33<SeP>2025-02-03 16:10:30<SeP>2025-02-05 02:33:27<SeP>2025-02-06 12:56:24<SeP>2025-02-07 23:19:21<SeP>2025-02-09 09:42:18<SeP>2025-02-10 20:05:15<SeP>2025-02-12 06:28:12<SeP>2025-02-13 16:51:09<SeP>2025-02-15 03:14:06<SeP>2025-02-16 13:37:03";
  const itemLabel       = "Escaneos";
  const itemData        = "755<SeP>1443<SeP>1366<SeP>1426<SeP>1192<SeP>1665<SeP>1044<SeP>983<SeP>1054<SeP>3308<SeP>1485<SeP>2862<SeP>1830<SeP>2511<SeP>727<SeP>831<SeP>1412<SeP>1030<SeP>2945<SeP>1462<SeP>1478<SeP>1000<SeP>904<SeP>1076<SeP>1179<SeP>930<SeP>669<SeP>923<SeP>3666<SeP>921<SeP>793<SeP>1204<SeP>1371<SeP>868<SeP>804<SeP>3166<SeP>2606<SeP>1881<SeP>1652<SeP>1677<SeP>1234<SeP>1492<SeP>1817<SeP>1911<SeP>2004<SeP>1494<SeP>1574<SeP>1523<SeP>1720<SeP>1693<SeP>1796<SeP>1803<SeP>1739<SeP>1430<SeP>3144<SeP>1697<SeP>1369<SeP>1825<SeP>2054<SeP>2266<SeP>1419<SeP>3590<SeP>1567<SeP>1342<SeP>1593<SeP>1293<SeP>1752<SeP>1579<SeP>1571<SeP>1134<SeP>1419<SeP>1171<SeP>2368<SeP>1192<SeP>1141<SeP>1184<SeP>2293<SeP>7262<SeP>1126<SeP>1340<SeP>1230<SeP>1697<SeP>1954<SeP>1073<SeP>6517<SeP>1686<SeP>1559<SeP>993<SeP>1097<SeP>3236<SeP>1333<SeP>830<SeP>1037<SeP>1039<SeP>1005<SeP>3017<SeP>981<SeP>1365<SeP>2990<SeP>5110<SeP>2781<SeP>995<SeP>842<SeP>952<SeP>923<SeP>995<SeP>839<SeP>1129<SeP>3005<SeP>2839<SeP>1509<SeP>1692<SeP>740<SeP>677<SeP>1399<SeP>1274<SeP>1101<SeP>945<SeP>2279<SeP>1026<SeP>1203<SeP>1049<SeP>899<SeP>1173<SeP>653<SeP>848<SeP>834<SeP>775<SeP>883<SeP>1087<SeP>768<SeP>790<SeP>902<SeP>871<SeP>929<SeP>559<SeP>862<SeP>858<SeP>801<SeP>900<SeP>827<SeP>801<SeP>743<SeP>829<SeP>1060<SeP>750<SeP>835<SeP>946<SeP>863<SeP>1125<SeP>942<SeP>830<SeP>465<SeP>916<SeP>807<SeP>1193<SeP>887<SeP>953<SeP>1204<SeP>1147<SeP>970<SeP>939<SeP>913<SeP>967<SeP>720<SeP>975<SeP>1042<SeP>893<SeP>847<SeP>893<SeP>1030<SeP>940<SeP>994<SeP>1008<SeP>1020<SeP>1053<SeP>945<SeP>866<SeP>2199<SeP>1230<SeP>1055<SeP>1069<SeP>1000<SeP>1127<SeP>915<SeP>807<SeP>727<SeP>874<SeP>1066<SeP>932<SeP>782<SeP>1078<SeP>1271<SeP>1092<SeP>1119<SeP>1290<SeP>1151<SeP>1259<SeP>1105<SeP>1423<SeP>1292<SeP>1720<SeP>1824<SeP>1332<SeP>663<SeP>912<SeP>1086<SeP>1056<SeP>647<SeP>787<SeP>859<SeP>945<SeP>793<SeP>4532<SeP>3921<SeP>1951<SeP>1466<SeP>1122<SeP>835<SeP>1028<SeP>910<SeP>908<SeP>1051<SeP>1027<SeP>1005<SeP>1004<SeP>2183<SeP>1325<SeP>1010<SeP>1218<SeP>1179<SeP>1229<SeP>1066<SeP>962<SeP>1019<SeP>1058<SeP>1077<SeP>1024<SeP>1156<SeP>890<SeP>1120<SeP>811<SeP>1391<SeP>1053<SeP>1132<SeP>1084<SeP>1329<SeP>1232<SeP>1101<SeP>1606<SeP>1098<SeP>1130<SeP>1060<SeP>1468<SeP>1728<SeP>1334<SeP>1881<SeP>1730<SeP>1388<SeP>1969<SeP>1452<SeP>1094<SeP>1129<SeP>1408<SeP>1073<SeP>1545<SeP>1198<SeP>1194<SeP>1775<SeP>1516<SeP>1333<SeP>1537<SeP>1218<SeP>1315<SeP>1167<SeP>1092<SeP>1285<SeP>1145<SeP>1150<SeP>1257<SeP>1268<SeP>1078<SeP>1996<SeP>1281<SeP>1309<SeP>1625<SeP>1369<SeP>1271<SeP>975<SeP>964<SeP>1001<SeP>965<SeP>811<SeP>1013<SeP>1732<SeP>1130<SeP>1012<SeP>1142<SeP>918<SeP>823<SeP>1065<SeP>1205<SeP>947<SeP>919<SeP>870<SeP>1204<SeP>1429<SeP>1623<SeP>1118<SeP>1039<SeP>1011<SeP>1099<SeP>1796<SeP>914<SeP>1226<SeP>986<SeP>1432<SeP>1189<SeP>853<SeP>1163<SeP>1060<SeP>966<SeP>872<SeP>896<SeP>1307<SeP>1292<SeP>1587<SeP>1519<SeP>1410<SeP>938<SeP>1076<SeP>1057<SeP>1116<SeP>1142<SeP>1152<SeP>988<SeP>952<SeP>1243<SeP>1494<SeP>1275<SeP>1517<SeP>1260<SeP>1450<SeP>1517<SeP>1394<SeP>1259<SeP>1441<SeP>1494<SeP>1391<SeP>1342<SeP>1462<SeP>1497<SeP>1621<SeP>1293<SeP>1347<SeP>1329<SeP>1310<SeP>1197<SeP>1373<SeP>1394<SeP>1595<SeP>1228<SeP>1280<SeP>1270<SeP>1297<SeP>1297<SeP>1068<SeP>1518<SeP>1751<SeP>1758<SeP>1138<SeP>616<SeP>1381<SeP>1905<SeP>1144<SeP>1412<SeP>1160<SeP>1150<SeP>1284<SeP>1419<SeP>1173<SeP>1500<SeP>1441<SeP>1617<SeP>1487<SeP>1479<SeP>1575<SeP>1370<SeP>1313<SeP>1694<SeP>1520<SeP>1249<SeP>1153<SeP>1541<SeP>1710<SeP>1896<SeP>1706<SeP>1672<SeP>1662<SeP>1509";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:22:57<SeP>2023-07-28 20:45:54<SeP>2023-07-30 07:08:51<SeP>2023-07-31 17:31:48<SeP>2023-08-02 03:54:45<SeP>2023-08-03 14:17:42<SeP>2023-08-05 00:40:39<SeP>2023-08-06 11:03:36<SeP>2023-08-07 21:26:33<SeP>2023-08-09 07:49:30<SeP>2023-08-10 18:12:27<SeP>2023-08-12 04:35:24<SeP>2023-08-13 14:58:21<SeP>2023-08-15 01:21:18<SeP>2023-08-16 11:44:15<SeP>2023-08-17 22:07:12<SeP>2023-08-19 08:30:09<SeP>2023-08-20 18:53:06<SeP>2023-08-22 05:16:03<SeP>2023-08-23 15:39:00<SeP>2023-08-25 02:01:57<SeP>2023-08-26 12:24:54<SeP>2023-08-27 22:47:51<SeP>2023-08-29 09:10:48<SeP>2023-08-30 19:33:45<SeP>2023-09-01 05:56:42<SeP>2023-09-02 16:19:39<SeP>2023-09-04 02:42:36<SeP>2023-09-05 13:05:33<SeP>2023-09-06 23:28:30<SeP>2023-09-08 09:51:27<SeP>2023-09-09 20:14:24<SeP>2023-09-11 06:37:21<SeP>2023-09-12 17:00:18<SeP>2023-09-14 03:23:15<SeP>2023-09-15 13:46:12<SeP>2023-09-17 00:09:09<SeP>2023-09-18 10:32:06<SeP>2023-09-19 20:55:03<SeP>2023-09-21 07:18:00<SeP>2023-09-22 17:40:57<SeP>2023-09-24 04:03:54<SeP>2023-09-25 14:26:51<SeP>2023-09-27 00:49:48<SeP>2023-09-28 11:12:45<SeP>2023-09-29 21:35:42<SeP>2023-10-01 07:58:39<SeP>2023-10-02 18:21:36<SeP>2023-10-04 04:44:33<SeP>2023-10-05 15:07:30<SeP>2023-10-07 01:30:27<SeP>2023-10-08 11:53:24<SeP>2023-10-09 22:16:21<SeP>2023-10-11 08:39:18<SeP>2023-10-12 19:02:15<SeP>2023-10-14 05:25:12<SeP>2023-10-15 15:48:09<SeP>2023-10-17 02:11:06<SeP>2023-10-18 12:34:03<SeP>2023-10-19 22:57:00<SeP>2023-10-21 09:19:57<SeP>2023-10-22 19:42:54<SeP>2023-10-24 06:05:51<SeP>2023-10-25 16:28:48<SeP>2023-10-27 02:51:45<SeP>2023-10-28 13:14:42<SeP>2023-10-29 23:37:39<SeP>2023-10-31 10:00:36<SeP>2023-11-01 20:23:33<SeP>2023-11-03 06:46:30<SeP>2023-11-04 17:09:27<SeP>2023-11-06 02:32:24<SeP>2023-11-07 12:55:21<SeP>2023-11-08 23:18:18<SeP>2023-11-10 09:41:15<SeP>2023-11-11 20:04:12<SeP>2023-11-13 06:27:09<SeP>2023-11-14 16:50:06<SeP>2023-11-16 03:13:03<SeP>2023-11-17 13:36:00<SeP>2023-11-18 23:58:57<SeP>2023-11-20 10:21:54<SeP>2023-11-21 20:44:51<SeP>2023-11-23 07:07:48<SeP>2023-11-24 17:30:45<SeP>2023-11-26 03:53:42<SeP>2023-11-27 14:16:39<SeP>2023-11-29 00:39:36<SeP>2023-11-30 11:02:33<SeP>2023-12-01 21:25:30<SeP>2023-12-03 07:48:27<SeP>2023-12-04 18:11:24<SeP>2023-12-06 04:34:21<SeP>2023-12-07 14:57:18<SeP>2023-12-09 01:20:15<SeP>2023-12-10 11:43:12<SeP>2023-12-11 22:06:09<SeP>2023-12-13 08:29:06<SeP>2023-12-14 18:52:03<SeP>2023-12-16 05:15:00<SeP>2023-12-17 15:37:57<SeP>2023-12-19 02:00:54<SeP>2023-12-20 12:23:51<SeP>2023-12-21 22:46:48<SeP>2023-12-23 09:09:45<SeP>2023-12-24 19:32:42<SeP>2023-12-26 05:55:39<SeP>2023-12-27 16:18:36<SeP>2023-12-29 02:41:33<SeP>2023-12-30 13:04:30<SeP>2023-12-31 23:27:27<SeP>2024-01-02 09:50:24<SeP>2024-01-03 20:13:21<SeP>2024-01-05 06:36:18<SeP>2024-01-06 16:59:15<SeP>2024-01-08 03:22:12<SeP>2024-01-09 13:45:09<SeP>2024-01-11 00:08:06<SeP>2024-01-12 10:31:03<SeP>2024-01-13 20:54:00<SeP>2024-01-15 07:16:57<SeP>2024-01-16 17:39:54<SeP>2024-01-18 04:02:51<SeP>2024-01-19 14:25:48<SeP>2024-01-21 00:48:45<SeP>2024-01-22 11:11:42<SeP>2024-01-23 21:34:39<SeP>2024-01-25 07:57:36<SeP>2024-01-26 18:20:33<SeP>2024-01-28 04:43:30<SeP>2024-01-29 15:06:27<SeP>2024-01-31 01:29:24<SeP>2024-02-01 11:52:21<SeP>2024-02-02 22:15:18<SeP>2024-02-04 08:38:15<SeP>2024-02-05 19:01:12<SeP>2024-02-07 05:24:09<SeP>2024-02-08 15:47:06<SeP>2024-02-10 02:10:03<SeP>2024-02-11 12:33:00<SeP>2024-02-12 22:55:57<SeP>2024-02-14 09:18:54<SeP>2024-02-15 19:41:51<SeP>2024-02-17 06:04:48<SeP>2024-02-18 16:27:45<SeP>2024-02-20 02:50:42<SeP>2024-02-21 13:13:39<SeP>2024-02-22 23:36:36<SeP>2024-02-24 09:59:33<SeP>2024-02-25 20:22:30<SeP>2024-02-27 06:45:27<SeP>2024-02-28 17:08:24<SeP>2024-03-01 03:31:21<SeP>2024-03-02 13:54:18<SeP>2024-03-04 00:17:15<SeP>2024-03-05 10:40:12<SeP>2024-03-06 21:03:09<SeP>2024-03-08 07:26:06<SeP>2024-03-09 17:49:03<SeP>2024-03-11 05:12:00<SeP>2024-03-12 15:34:57<SeP>2024-03-14 01:57:54<SeP>2024-03-15 12:20:51<SeP>2024-03-16 22:43:48<SeP>2024-03-18 09:06:45<SeP>2024-03-19 19:29:42<SeP>2024-03-21 05:52:39<SeP>2024-03-22 16:15:36<SeP>2024-03-24 02:38:33<SeP>2024-03-25 13:01:30<SeP>2024-03-26 23:24:27<SeP>2024-03-28 09:47:24<SeP>2024-03-29 20:10:21<SeP>2024-03-31 06:33:18<SeP>2024-04-01 16:56:15<SeP>2024-04-03 03:19:12<SeP>2024-04-04 13:42:09<SeP>2024-04-06 00:05:06<SeP>2024-04-07 10:28:03<SeP>2024-04-08 20:51:00<SeP>2024-04-10 07:13:57<SeP>2024-04-11 17:36:54<SeP>2024-04-13 03:59:51<SeP>2024-04-14 14:22:48<SeP>2024-04-16 00:45:45<SeP>2024-04-17 11:08:42<SeP>2024-04-18 21:31:39<SeP>2024-04-20 07:54:36<SeP>2024-04-21 18:17:33<SeP>2024-04-23 04:40:30<SeP>2024-04-24 15:03:27<SeP>2024-04-26 01:26:24<SeP>2024-04-27 11:49:21<SeP>2024-04-28 22:12:18<SeP>2024-04-30 08:35:15<SeP>2024-05-01 18:58:12<SeP>2024-05-03 05:21:09<SeP>2024-05-04 15:44:06<SeP>2024-05-06 02:07:03<SeP>2024-05-07 12:30:00<SeP>2024-05-08 22:52:57<SeP>2024-05-10 09:15:54<SeP>2024-05-11 19:38:51<SeP>2024-05-13 06:01:48<SeP>2024-05-14 16:24:45<SeP>2024-05-16 02:47:42<SeP>2024-05-17 13:10:39<SeP>2024-05-18 23:33:36<SeP>2024-05-20 09:56:33<SeP>2024-05-21 20:19:30<SeP>2024-05-23 06:42:27<SeP>2024-05-24 17:05:24<SeP>2024-05-26 03:28:21<SeP>2024-05-27 13:51:18<SeP>2024-05-29 00:14:15<SeP>2024-05-30 10:37:12<SeP>2024-05-31 21:00:09<SeP>2024-06-02 07:23:06<SeP>2024-06-03 17:46:03<SeP>2024-06-05 04:09:00<SeP>2024-06-06 14:31:57<SeP>2024-06-08 00:54:54<SeP>2024-06-09 11:17:51<SeP>2024-06-10 21:40:48<SeP>2024-06-12 08:03:45<SeP>2024-06-13 18:26:42<SeP>2024-06-15 04:49:39<SeP>2024-06-16 15:12:36<SeP>2024-06-18 01:35:33<SeP>2024-06-19 11:58:30<SeP>2024-06-20 22:21:27<SeP>2024-06-22 08:44:24<SeP>2024-06-23 19:07:21<SeP>2024-06-25 05:30:18<SeP>2024-06-26 15:53:15<SeP>2024-06-28 02:16:12<SeP>2024-06-29 12:39:09<SeP>2024-06-30 23:02:06<SeP>2024-07-02 09:25:03<SeP>2024-07-03 19:48:00<SeP>2024-07-05 06:10:57<SeP>2024-07-06 16:33:54<SeP>2024-07-08 02:56:51<SeP>2024-07-09 13:19:48<SeP>2024-07-10 23:42:45<SeP>2024-07-12 10:05:42<SeP>2024-07-13 20:28:39<SeP>2024-07-15 06:51:36<SeP>2024-07-16 17:14:33<SeP>2024-07-18 03:37:30<SeP>2024-07-19 14:00:27<SeP>2024-07-21 00:23:24<SeP>2024-07-22 10:46:21<SeP>2024-07-23 21:09:18<SeP>2024-07-25 07:32:15<SeP>2024-07-26 17:55:12<SeP>2024-07-28 04:18:09<SeP>2024-07-29 14:41:06<SeP>2024-07-31 01:04:03<SeP>2024-08-01 11:27:00<SeP>2024-08-02 21:49:57<SeP>2024-08-04 08:12:54<SeP>2024-08-05 18:35:51<SeP>2024-08-07 04:58:48<SeP>2024-08-08 15:21:45<SeP>2024-08-10 01:44:42<SeP>2024-08-11 12:07:39<SeP>2024-08-12 22:30:36<SeP>2024-08-14 08:53:33<SeP>2024-08-15 19:16:30<SeP>2024-08-17 05:39:27<SeP>2024-08-18 16:02:24<SeP>2024-08-20 02:25:21<SeP>2024-08-21 12:48:18<SeP>2024-08-22 23:11:15<SeP>2024-08-24 09:34:12<SeP>2024-08-25 19:57:09<SeP>2024-08-27 06:20:06<SeP>2024-08-28 16:43:03<SeP>2024-08-30 03:06:00<SeP>2024-08-31 13:28:57<SeP>2024-09-01 23:51:54<SeP>2024-09-03 10:14:51<SeP>2024-09-04 20:37:48<SeP>2024-09-06 07:00:45<SeP>2024-09-07 17:23:42<SeP>2024-09-09 03:46:39<SeP>2024-09-10 14:09:36<SeP>2024-09-12 00:32:33<SeP>2024-09-13 10:55:30<SeP>2024-09-14 21:18:27<SeP>2024-09-16 07:41:24<SeP>2024-09-17 18:04:21<SeP>2024-09-19 04:27:18<SeP>2024-09-20 14:50:15<SeP>2024-09-22 01:13:12<SeP>2024-09-23 11:36:09<SeP>2024-09-24 21:59:06<SeP>2024-09-26 08:22:03<SeP>2024-09-27 18:45:00<SeP>2024-09-29 05:07:57<SeP>2024-09-30 15:30:54<SeP>2024-10-02 01:53:51<SeP>2024-10-03 12:16:48<SeP>2024-10-04 22:39:45<SeP>2024-10-06 09:02:42<SeP>2024-10-07 19:25:39<SeP>2024-10-09 05:48:36<SeP>2024-10-10 16:11:33<SeP>2024-10-12 02:34:30<SeP>2024-10-13 12:57:27<SeP>2024-10-14 23:20:24<SeP>2024-10-16 09:43:21<SeP>2024-10-17 20:06:18<SeP>2024-10-19 06:29:15<SeP>2024-10-20 16:52:12<SeP>2024-10-22 03:15:09<SeP>2024-10-23 13:38:06<SeP>2024-10-25 00:01:03<SeP>2024-10-26 10:24:00<SeP>2024-10-27 20:46:57<SeP>2024-10-29 07:09:54<SeP>2024-10-30 17:32:51<SeP>2024-11-01 03:55:48<SeP>2024-11-02 14:18:45<SeP>2024-11-03 23:41:42<SeP>2024-11-05 10:04:39<SeP>2024-11-06 20:27:36<SeP>2024-11-08 06:50:33<SeP>2024-11-09 17:13:30<SeP>2024-11-11 03:36:27<SeP>2024-11-12 13:59:24<SeP>2024-11-14 00:22:21<SeP>2024-11-15 10:45:18<SeP>2024-11-16 21:08:15<SeP>2024-11-18 07:31:12<SeP>2024-11-19 17:54:09<SeP>2024-11-21 04:17:06<SeP>2024-11-22 14:40:03<SeP>2024-11-24 01:03:00<SeP>2024-11-25 11:25:57<SeP>2024-11-26 21:48:54<SeP>2024-11-28 08:11:51<SeP>2024-11-29 18:34:48<SeP>2024-12-01 04:57:45<SeP>2024-12-02 15:20:42<SeP>2024-12-04 01:43:39<SeP>2024-12-05 12:06:36<SeP>2024-12-06 22:29:33<SeP>2024-12-08 08:52:30<SeP>2024-12-09 19:15:27<SeP>2024-12-11 05:38:24<SeP>2024-12-12 16:01:21<SeP>2024-12-14 02:24:18<SeP>2024-12-15 12:47:15<SeP>2024-12-16 23:10:12<SeP>2024-12-18 09:33:09<SeP>2024-12-19 19:56:06<SeP>2024-12-21 06:19:03<SeP>2024-12-22 16:42:00<SeP>2024-12-24 03:04:57<SeP>2024-12-25 13:27:54<SeP>2024-12-26 23:50:51<SeP>2024-12-28 10:13:48<SeP>2024-12-29 20:36:45<SeP>2024-12-31 06:59:42<SeP>2025-01-01 17:22:39<SeP>2025-01-03 03:45:36<SeP>2025-01-04 14:08:33<SeP>2025-01-06 00:31:30<SeP>2025-01-07 10:54:27<SeP>2025-01-08 21:17:24<SeP>2025-01-10 07:40:21<SeP>2025-01-11 18:03:18<SeP>2025-01-13 04:26:15<SeP>2025-01-14 14:49:12<SeP>2025-01-16 01:12:09<SeP>2025-01-17 11:35:06<SeP>2025-01-18 21:58:03<SeP>2025-01-20 08:21:00<SeP>2025-01-21 18:43:57<SeP>2025-01-23 05:06:54<SeP>2025-01-24 15:29:51<SeP>2025-01-26 01:52:48<SeP>2025-01-27 12:15:45<SeP>2025-01-28 22:38:42<SeP>2025-01-30 09:01:39<SeP>2025-01-31 19:24:36<SeP>2025-02-02 05:47:33<SeP>2025-02-03 16:10:30<SeP>2025-02-05 02:33:27<SeP>2025-02-06 12:56:24<SeP>2025-02-07 23:19:21<SeP>2025-02-09 09:42:18<SeP>2025-02-10 20:05:15<SeP>2025-02-12 06:28:12<SeP>2025-02-13 16:51:09<SeP>2025-02-15 03:14:06<SeP>2025-02-16 13:37:03";
  const itemLabel       = "Ataques";
  const itemData        = "152<SeP>612<SeP>965<SeP>707<SeP>556<SeP>212<SeP>6948<SeP>487<SeP>9224<SeP>974<SeP>234<SeP>1274<SeP>756<SeP>766<SeP>144<SeP>431<SeP>160<SeP>361<SeP>668<SeP>2840<SeP>6924<SeP>8058<SeP>6194<SeP>9215<SeP>436<SeP>294<SeP>404<SeP>171<SeP>381<SeP>5924<SeP>85<SeP>369<SeP>130<SeP>539<SeP>290<SeP>7591<SeP>9822<SeP>9114<SeP>10113<SeP>7555<SeP>4604<SeP>8670<SeP>6355<SeP>9277<SeP>9110<SeP>7207<SeP>7834<SeP>8450<SeP>8746<SeP>8005<SeP>6264<SeP>5294<SeP>11996<SeP>7163<SeP>6848<SeP>7744<SeP>8839<SeP>8749<SeP>18190<SeP>16163<SeP>9200<SeP>11175<SeP>6530<SeP>7601<SeP>8294<SeP>9519<SeP>7906<SeP>6998<SeP>6520<SeP>6375<SeP>6559<SeP>4652<SeP>4721<SeP>6427<SeP>5219<SeP>6575<SeP>6523<SeP>6320<SeP>4495<SeP>5791<SeP>7151<SeP>4627<SeP>6403<SeP>5558<SeP>4479<SeP>7561<SeP>5298<SeP>4858<SeP>5757<SeP>7713<SeP>21713<SeP>18929<SeP>24592<SeP>8431<SeP>6898<SeP>7102<SeP>11087<SeP>7810<SeP>4042<SeP>6454<SeP>3363<SeP>5454<SeP>6676<SeP>4979<SeP>8481<SeP>6045<SeP>5935<SeP>4573<SeP>5341<SeP>8794<SeP>7732<SeP>7293<SeP>6471<SeP>4029<SeP>9185<SeP>9841<SeP>6128<SeP>3175<SeP>5479<SeP>7801<SeP>6431<SeP>6385<SeP>7873<SeP>8042<SeP>1516<SeP>2750<SeP>923<SeP>1639<SeP>2549<SeP>1762<SeP>832<SeP>1263<SeP>941<SeP>1321<SeP>1343<SeP>1084<SeP>1131<SeP>823<SeP>1125<SeP>1075<SeP>1096<SeP>1462<SeP>1030<SeP>1653<SeP>2022<SeP>1448<SeP>9345<SeP>7486<SeP>9325<SeP>9381<SeP>5941<SeP>11475<SeP>4069<SeP>10764<SeP>9445<SeP>9107<SeP>12539<SeP>8088<SeP>12424<SeP>11625<SeP>7481<SeP>12875<SeP>5124<SeP>4677<SeP>7186<SeP>23556<SeP>7541<SeP>7755<SeP>7876<SeP>12422<SeP>12928<SeP>8866<SeP>3853<SeP>7670<SeP>6927<SeP>25985<SeP>7794<SeP>8434<SeP>10946<SeP>4696<SeP>6180<SeP>5105<SeP>16653<SeP>5224<SeP>10699<SeP>9338<SeP>6675<SeP>8056<SeP>6852<SeP>5412<SeP>3540<SeP>7073<SeP>7509<SeP>4610<SeP>6491<SeP>8120<SeP>3514<SeP>21130<SeP>6978<SeP>6648<SeP>6877<SeP>6852<SeP>11354<SeP>6762<SeP>3943<SeP>4369<SeP>5174<SeP>3364<SeP>4114<SeP>4164<SeP>640<SeP>90<SeP>645<SeP>388<SeP>503<SeP>984<SeP>368<SeP>595<SeP>1001<SeP>1375<SeP>3174<SeP>18805<SeP>4668<SeP>2267<SeP>4073<SeP>2846<SeP>3626<SeP>6329<SeP>4699<SeP>2538<SeP>3579<SeP>2645<SeP>3047<SeP>3068<SeP>4688<SeP>1248<SeP>3144<SeP>2464<SeP>2113<SeP>1958<SeP>1886<SeP>1140<SeP>1905<SeP>793<SeP>924<SeP>1772<SeP>20072<SeP>8145<SeP>2333<SeP>3725<SeP>3641<SeP>2222<SeP>3741<SeP>2039<SeP>2737<SeP>3184<SeP>2638<SeP>3393<SeP>2109<SeP>3401<SeP>3059<SeP>4853<SeP>5527<SeP>4642<SeP>4381<SeP>2588<SeP>2273<SeP>5149<SeP>3238<SeP>9710<SeP>5280<SeP>3384<SeP>2326<SeP>2822<SeP>4076<SeP>3941<SeP>3068<SeP>3324<SeP>2454<SeP>5084<SeP>4585<SeP>3166<SeP>5861<SeP>4141<SeP>6250<SeP>4427<SeP>5372<SeP>5011<SeP>22108<SeP>5615<SeP>10665<SeP>1725<SeP>2964<SeP>4132<SeP>3653<SeP>5008<SeP>2874<SeP>5212<SeP>4642<SeP>4328<SeP>3748<SeP>3666<SeP>2361<SeP>1322<SeP>1956<SeP>3789<SeP>2105<SeP>2804<SeP>3472<SeP>4058<SeP>4124<SeP>2964<SeP>4576<SeP>2753<SeP>3663<SeP>3151<SeP>8252<SeP>6636<SeP>5226<SeP>4607<SeP>5133<SeP>4233<SeP>3298<SeP>4257<SeP>3726<SeP>6629<SeP>4953<SeP>4651<SeP>2997<SeP>784<SeP>1140<SeP>1734<SeP>1303<SeP>1230<SeP>1691<SeP>1546<SeP>1078<SeP>3336<SeP>3948<SeP>6469<SeP>23889<SeP>14585<SeP>5541<SeP>12964<SeP>14778<SeP>5476<SeP>5478<SeP>5197<SeP>9457<SeP>19343<SeP>5822<SeP>4468<SeP>4567<SeP>5731<SeP>18713<SeP>16394<SeP>4559<SeP>2949<SeP>4548<SeP>4919<SeP>6025<SeP>3284<SeP>3122<SeP>3361<SeP>4625<SeP>5215<SeP>4057<SeP>18000<SeP>5415<SeP>6769<SeP>4847<SeP>1315<SeP>3907<SeP>3924<SeP>4214<SeP>4117<SeP>3070<SeP>2910<SeP>3505<SeP>3412<SeP>3610<SeP>5979<SeP>8529<SeP>10067<SeP>8440<SeP>8991<SeP>7588<SeP>7277<SeP>4911<SeP>5052<SeP>3508<SeP>25670<SeP>3636<SeP>2837<SeP>4425<SeP>6305<SeP>9115<SeP>4920<SeP>3576<SeP>4925";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Hong Kong";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "685461<SeP>357228<SeP>205099<SeP>177612<SeP>107185<SeP>86707<SeP>81692<SeP>79064<SeP>67305<SeP>64909";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "291037<SeP>41404<SeP>39585<SeP>34569<SeP>14162<SeP>10368<SeP>7303<SeP>7054<SeP>6903<SeP>6766";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Attacks";
  const itemData    = "394424<SeP>322659<SeP>202407<SeP>138027<SeP>93023<SeP>79941<SeP>79113<SeP>68696<SeP>57855<SeP>56089";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "359279<SeP>259475<SeP>232228<SeP>143804<SeP>65991<SeP>56839<SeP>55373<SeP>44712<SeP>41606<SeP>35346";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "152792<SeP>52300<SeP>40486<SeP>31729<SeP>21866<SeP>12539<SeP>10520<SeP>9179<SeP>7614<SeP>7364";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "346740<SeP>258713<SeP>121938<SeP>79436<SeP>54424<SeP>46319<SeP>39218<SeP>30420<SeP>29324<SeP>26816";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Hong Kong";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "685461<SeP>357228<SeP>205099<SeP>177612<SeP>107185<SeP>86707<SeP>81692<SeP>79064<SeP>67305<SeP>64909";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "291037<SeP>41404<SeP>39585<SeP>34569<SeP>14162<SeP>10368<SeP>7303<SeP>7054<SeP>6903<SeP>6766";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Ataques";
  const itemData    = "394424<SeP>322659<SeP>202407<SeP>138027<SeP>93023<SeP>79941<SeP>79113<SeP>68696<SeP>57855<SeP>56089";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "359279<SeP>259475<SeP>232228<SeP>143804<SeP>65991<SeP>56839<SeP>55373<SeP>44712<SeP>41606<SeP>35346";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "152792<SeP>52300<SeP>40486<SeP>31729<SeP>21866<SeP>12539<SeP>10520<SeP>9179<SeP>7614<SeP>7364";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "346740<SeP>258713<SeP>121938<SeP>79436<SeP>54424<SeP>46319<SeP>39218<SeP>30420<SeP>29324<SeP>26816";
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
