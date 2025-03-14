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
function lastUpdated(varElement) {
  document.getElementById(varElement).innerHTML = "2025-3-14";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.8";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.8";
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
  const metricData    = "2864913";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "563217";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2301696";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "141432";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1443579";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "858117";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54813";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "252169";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "605948";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "44069";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2864913";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "563217";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2301696";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "141432";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1443579";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "858117";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54813";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "252169";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "605948";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "44069";
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
  const incomingData = "2864913<SeP>563217<SeP>2301696<SeP>141432";
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
  const incomingData = "2301696<SeP>1443579<SeP>858117<SeP>54813";
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
  const incomingData = "858117<SeP>252169<SeP>605948<SeP>44069";
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
  const incomingData = "2562940<SeP>259804<SeP>2303136";
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
  const incomingData = "388212<SeP>150<SeP>388062<SeP>235";
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
  const incomingData = "2864913<SeP>563217<SeP>2301696<SeP>141432";
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
  const incomingData = "2301696<SeP>1443579<SeP>858117<SeP>54813";
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
  const incomingData = "858117<SeP>252169<SeP>605948<SeP>44069";
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
  const incomingData = "2562940<SeP>259804<SeP>2303136";
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
  const incomingData = "388212<SeP>150<SeP>388062<SeP>235";
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
  const column3Data   = "222741<SeP>204260<SeP>12982<SeP>12478<SeP>9833<SeP>9494<SeP>6457<SeP>5593<SeP>4638<SeP>3527";
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
  const column2Data  = "214198<SeP>43224<SeP>972<SeP>485<SeP>479<SeP>461<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2422305<SeP>442608";
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
  const column3Data   = "222741<SeP>204260<SeP>12982<SeP>12478<SeP>9833<SeP>9494<SeP>6457<SeP>5593<SeP>4638<SeP>3527";
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
  const column2Data  = "214198<SeP>43224<SeP>972<SeP>485<SeP>479<SeP>461<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2422305<SeP>442608";
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
  
  const map = new maplibregl.Map({
    container: "map",                                                                    // container ID
    style: '/scripts/voyager-nolabels-gl-style.json',                                    // map style: light with a touch of color
  //style: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',     // map style: light`
  //style: 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json',  // map style: dark
    zoom: 2,                                                                             // starting zoom
    center: [-25.00, 20.00],                                                             // starting center
    attributionControl: false                                                            // toggle the attribution button off
  });

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
        "name": "traffic between 2023-07-26 and 2025-03-12"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          401921,50
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
        "name": "scans between 2023-07-26 and 2025-03-12"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          231730,30,
          401921,50
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
        "name": "attacks between 2023-07-26 and 2025-03-12"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          170191,23,
          401921,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#FF0000" // Red
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
  });

  // setTimeout(function() {
  //   map.resize();
  // }, 500); // This timeout should the a bit longer than the  timeout of the page loader
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
  
  const map = new maplibregl.Map({
    container: "map",                                                                    // container ID
    style: '/scripts/voyager-nolabels-gl-style.json',                                    // map style: light with a touch of color
  //style: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',     // map style: light`
  //style: 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json',  // map style: dark
    zoom: 2,                                                                             // starting zoom
    center: [-25.00, 20.00],                                                             // starting center
    attributionControl: false                                                            // toggle the attribution button off
  });

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
        "name": "tráfico entre 2023-07-26 y 2025-03-12"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          401921,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-12"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          231730,30,
          401921,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-12"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          170191,23,
          401921,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:49:12<SeP>2023-07-28 23:38:24<SeP>2023-07-30 11:27:36<SeP>2023-07-31 23:16:48<SeP>2023-08-02 11:06:00<SeP>2023-08-03 22:55:12<SeP>2023-08-05 10:44:24<SeP>2023-08-06 22:33:36<SeP>2023-08-08 10:22:48<SeP>2023-08-09 22:12:00<SeP>2023-08-11 10:01:12<SeP>2023-08-12 21:50:24<SeP>2023-08-14 09:39:36<SeP>2023-08-15 21:28:48<SeP>2023-08-17 09:18:00<SeP>2023-08-18 21:07:12<SeP>2023-08-20 08:56:24<SeP>2023-08-21 20:45:36<SeP>2023-08-23 08:34:48<SeP>2023-08-24 20:24:00<SeP>2023-08-26 08:13:12<SeP>2023-08-27 20:02:24<SeP>2023-08-29 07:51:36<SeP>2023-08-30 19:40:48<SeP>2023-09-01 07:30:00<SeP>2023-09-02 19:19:12<SeP>2023-09-04 07:08:24<SeP>2023-09-05 18:57:36<SeP>2023-09-07 06:46:48<SeP>2023-09-08 18:36:00<SeP>2023-09-10 06:25:12<SeP>2023-09-11 18:14:24<SeP>2023-09-13 06:03:36<SeP>2023-09-14 17:52:48<SeP>2023-09-16 05:42:00<SeP>2023-09-17 17:31:12<SeP>2023-09-19 05:20:24<SeP>2023-09-20 17:09:36<SeP>2023-09-22 04:58:48<SeP>2023-09-23 16:48:00<SeP>2023-09-25 04:37:12<SeP>2023-09-26 16:26:24<SeP>2023-09-28 04:15:36<SeP>2023-09-29 16:04:48<SeP>2023-10-01 03:54:00<SeP>2023-10-02 15:43:12<SeP>2023-10-04 03:32:24<SeP>2023-10-05 15:21:36<SeP>2023-10-07 03:10:48<SeP>2023-10-08 15:00:00<SeP>2023-10-10 02:49:12<SeP>2023-10-11 14:38:24<SeP>2023-10-13 02:27:36<SeP>2023-10-14 14:16:48<SeP>2023-10-16 02:06:00<SeP>2023-10-17 13:55:12<SeP>2023-10-19 01:44:24<SeP>2023-10-20 13:33:36<SeP>2023-10-22 01:22:48<SeP>2023-10-23 13:12:00<SeP>2023-10-25 01:01:12<SeP>2023-10-26 12:50:24<SeP>2023-10-28 00:39:36<SeP>2023-10-29 12:28:48<SeP>2023-10-31 00:18:00<SeP>2023-11-01 12:07:12<SeP>2023-11-02 23:56:24<SeP>2023-11-04 11:45:36<SeP>2023-11-05 22:34:48<SeP>2023-11-07 10:24:00<SeP>2023-11-08 22:13:12<SeP>2023-11-10 10:02:24<SeP>2023-11-11 21:51:36<SeP>2023-11-13 09:40:48<SeP>2023-11-14 21:30:00<SeP>2023-11-16 09:19:12<SeP>2023-11-17 21:08:24<SeP>2023-11-19 08:57:36<SeP>2023-11-20 20:46:48<SeP>2023-11-22 08:36:00<SeP>2023-11-23 20:25:12<SeP>2023-11-25 08:14:24<SeP>2023-11-26 20:03:36<SeP>2023-11-28 07:52:48<SeP>2023-11-29 19:42:00<SeP>2023-12-01 07:31:12<SeP>2023-12-02 19:20:24<SeP>2023-12-04 07:09:36<SeP>2023-12-05 18:58:48<SeP>2023-12-07 06:48:00<SeP>2023-12-08 18:37:12<SeP>2023-12-10 06:26:24<SeP>2023-12-11 18:15:36<SeP>2023-12-13 06:04:48<SeP>2023-12-14 17:54:00<SeP>2023-12-16 05:43:12<SeP>2023-12-17 17:32:24<SeP>2023-12-19 05:21:36<SeP>2023-12-20 17:10:48<SeP>2023-12-22 05:00:00<SeP>2023-12-23 16:49:12<SeP>2023-12-25 04:38:24<SeP>2023-12-26 16:27:36<SeP>2023-12-28 04:16:48<SeP>2023-12-29 16:06:00<SeP>2023-12-31 03:55:12<SeP>2024-01-01 15:44:24<SeP>2024-01-03 03:33:36<SeP>2024-01-04 15:22:48<SeP>2024-01-06 03:12:00<SeP>2024-01-07 15:01:12<SeP>2024-01-09 02:50:24<SeP>2024-01-10 14:39:36<SeP>2024-01-12 02:28:48<SeP>2024-01-13 14:18:00<SeP>2024-01-15 02:07:12<SeP>2024-01-16 13:56:24<SeP>2024-01-18 01:45:36<SeP>2024-01-19 13:34:48<SeP>2024-01-21 01:24:00<SeP>2024-01-22 13:13:12<SeP>2024-01-24 01:02:24<SeP>2024-01-25 12:51:36<SeP>2024-01-27 00:40:48<SeP>2024-01-28 12:30:00<SeP>2024-01-30 00:19:12<SeP>2024-01-31 12:08:24<SeP>2024-02-01 23:57:36<SeP>2024-02-03 11:46:48<SeP>2024-02-04 23:36:00<SeP>2024-02-06 11:25:12<SeP>2024-02-07 23:14:24<SeP>2024-02-09 11:03:36<SeP>2024-02-10 22:52:48<SeP>2024-02-12 10:42:00<SeP>2024-02-13 22:31:12<SeP>2024-02-15 10:20:24<SeP>2024-02-16 22:09:36<SeP>2024-02-18 09:58:48<SeP>2024-02-19 21:48:00<SeP>2024-02-21 09:37:12<SeP>2024-02-22 21:26:24<SeP>2024-02-24 09:15:36<SeP>2024-02-25 21:04:48<SeP>2024-02-27 08:54:00<SeP>2024-02-28 20:43:12<SeP>2024-03-01 08:32:24<SeP>2024-03-02 20:21:36<SeP>2024-03-04 08:10:48<SeP>2024-03-05 20:00:00<SeP>2024-03-07 07:49:12<SeP>2024-03-08 19:38:24<SeP>2024-03-10 08:27:36<SeP>2024-03-11 20:16:48<SeP>2024-03-13 08:06:00<SeP>2024-03-14 19:55:12<SeP>2024-03-16 07:44:24<SeP>2024-03-17 19:33:36<SeP>2024-03-19 07:22:48<SeP>2024-03-20 19:12:00<SeP>2024-03-22 07:01:12<SeP>2024-03-23 18:50:24<SeP>2024-03-25 06:39:36<SeP>2024-03-26 18:28:48<SeP>2024-03-28 06:18:00<SeP>2024-03-29 18:07:12<SeP>2024-03-31 05:56:24<SeP>2024-04-01 17:45:36<SeP>2024-04-03 05:34:48<SeP>2024-04-04 17:24:00<SeP>2024-04-06 05:13:12<SeP>2024-04-07 17:02:24<SeP>2024-04-09 04:51:36<SeP>2024-04-10 16:40:48<SeP>2024-04-12 04:30:00<SeP>2024-04-13 16:19:12<SeP>2024-04-15 04:08:24<SeP>2024-04-16 15:57:36<SeP>2024-04-18 03:46:48<SeP>2024-04-19 15:36:00<SeP>2024-04-21 03:25:12<SeP>2024-04-22 15:14:24<SeP>2024-04-24 03:03:36<SeP>2024-04-25 14:52:48<SeP>2024-04-27 02:42:00<SeP>2024-04-28 14:31:12<SeP>2024-04-30 02:20:24<SeP>2024-05-01 14:09:36<SeP>2024-05-03 01:58:48<SeP>2024-05-04 13:48:00<SeP>2024-05-06 01:37:12<SeP>2024-05-07 13:26:24<SeP>2024-05-09 01:15:36<SeP>2024-05-10 13:04:48<SeP>2024-05-12 00:54:00<SeP>2024-05-13 12:43:12<SeP>2024-05-15 00:32:24<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:10:48<SeP>2024-05-19 12:00:00<SeP>2024-05-20 23:49:12<SeP>2024-05-22 11:38:24<SeP>2024-05-23 23:27:36<SeP>2024-05-25 11:16:48<SeP>2024-05-26 23:06:00<SeP>2024-05-28 10:55:12<SeP>2024-05-29 22:44:24<SeP>2024-05-31 10:33:36<SeP>2024-06-01 22:22:48<SeP>2024-06-03 10:12:00<SeP>2024-06-04 22:01:12<SeP>2024-06-06 09:50:24<SeP>2024-06-07 21:39:36<SeP>2024-06-09 09:28:48<SeP>2024-06-10 21:18:00<SeP>2024-06-12 09:07:12<SeP>2024-06-13 20:56:24<SeP>2024-06-15 08:45:36<SeP>2024-06-16 20:34:48<SeP>2024-06-18 08:24:00<SeP>2024-06-19 20:13:12<SeP>2024-06-21 08:02:24<SeP>2024-06-22 19:51:36<SeP>2024-06-24 07:40:48<SeP>2024-06-25 19:30:00<SeP>2024-06-27 07:19:12<SeP>2024-06-28 19:08:24<SeP>2024-06-30 06:57:36<SeP>2024-07-01 18:46:48<SeP>2024-07-03 06:36:00<SeP>2024-07-04 18:25:12<SeP>2024-07-06 06:14:24<SeP>2024-07-07 18:03:36<SeP>2024-07-09 05:52:48<SeP>2024-07-10 17:42:00<SeP>2024-07-12 05:31:12<SeP>2024-07-13 17:20:24<SeP>2024-07-15 05:09:36<SeP>2024-07-16 16:58:48<SeP>2024-07-18 04:48:00<SeP>2024-07-19 16:37:12<SeP>2024-07-21 04:26:24<SeP>2024-07-22 16:15:36<SeP>2024-07-24 04:04:48<SeP>2024-07-25 15:54:00<SeP>2024-07-27 03:43:12<SeP>2024-07-28 15:32:24<SeP>2024-07-30 03:21:36<SeP>2024-07-31 15:10:48<SeP>2024-08-02 03:00:00<SeP>2024-08-03 14:49:12<SeP>2024-08-05 02:38:24<SeP>2024-08-06 14:27:36<SeP>2024-08-08 02:16:48<SeP>2024-08-09 14:06:00<SeP>2024-08-11 01:55:12<SeP>2024-08-12 13:44:24<SeP>2024-08-14 01:33:36<SeP>2024-08-15 13:22:48<SeP>2024-08-17 01:12:00<SeP>2024-08-18 13:01:12<SeP>2024-08-20 00:50:24<SeP>2024-08-21 12:39:36<SeP>2024-08-23 00:28:48<SeP>2024-08-24 12:18:00<SeP>2024-08-26 00:07:12<SeP>2024-08-27 11:56:24<SeP>2024-08-28 23:45:36<SeP>2024-08-30 11:34:48<SeP>2024-08-31 23:24:00<SeP>2024-09-02 11:13:12<SeP>2024-09-03 23:02:24<SeP>2024-09-05 10:51:36<SeP>2024-09-06 22:40:48<SeP>2024-09-08 10:30:00<SeP>2024-09-09 22:19:12<SeP>2024-09-11 10:08:24<SeP>2024-09-12 21:57:36<SeP>2024-09-14 09:46:48<SeP>2024-09-15 21:36:00<SeP>2024-09-17 09:25:12<SeP>2024-09-18 21:14:24<SeP>2024-09-20 09:03:36<SeP>2024-09-21 20:52:48<SeP>2024-09-23 08:42:00<SeP>2024-09-24 20:31:12<SeP>2024-09-26 08:20:24<SeP>2024-09-27 20:09:36<SeP>2024-09-29 07:58:48<SeP>2024-09-30 19:48:00<SeP>2024-10-02 07:37:12<SeP>2024-10-03 19:26:24<SeP>2024-10-05 07:15:36<SeP>2024-10-06 19:04:48<SeP>2024-10-08 06:54:00<SeP>2024-10-09 18:43:12<SeP>2024-10-11 06:32:24<SeP>2024-10-12 18:21:36<SeP>2024-10-14 06:10:48<SeP>2024-10-15 18:00:00<SeP>2024-10-17 05:49:12<SeP>2024-10-18 17:38:24<SeP>2024-10-20 05:27:36<SeP>2024-10-21 17:16:48<SeP>2024-10-23 05:06:00<SeP>2024-10-24 16:55:12<SeP>2024-10-26 04:44:24<SeP>2024-10-27 16:33:36<SeP>2024-10-29 04:22:48<SeP>2024-10-30 16:12:00<SeP>2024-11-01 04:01:12<SeP>2024-11-02 15:50:24<SeP>2024-11-04 02:39:36<SeP>2024-11-05 14:28:48<SeP>2024-11-07 02:18:00<SeP>2024-11-08 14:07:12<SeP>2024-11-10 01:56:24<SeP>2024-11-11 13:45:36<SeP>2024-11-13 01:34:48<SeP>2024-11-14 13:24:00<SeP>2024-11-16 01:13:12<SeP>2024-11-17 13:02:24<SeP>2024-11-19 00:51:36<SeP>2024-11-20 12:40:48<SeP>2024-11-22 00:30:00<SeP>2024-11-23 12:19:12<SeP>2024-11-25 00:08:24<SeP>2024-11-26 11:57:36<SeP>2024-11-27 23:46:48<SeP>2024-11-29 11:36:00<SeP>2024-11-30 23:25:12<SeP>2024-12-02 11:14:24<SeP>2024-12-03 23:03:36<SeP>2024-12-05 10:52:48<SeP>2024-12-06 22:42:00<SeP>2024-12-08 10:31:12<SeP>2024-12-09 22:20:24<SeP>2024-12-11 10:09:36<SeP>2024-12-12 21:58:48<SeP>2024-12-14 09:48:00<SeP>2024-12-15 21:37:12<SeP>2024-12-17 09:26:24<SeP>2024-12-18 21:15:36<SeP>2024-12-20 09:04:48<SeP>2024-12-21 20:54:00<SeP>2024-12-23 08:43:12<SeP>2024-12-24 20:32:24<SeP>2024-12-26 08:21:36<SeP>2024-12-27 20:10:48<SeP>2024-12-29 08:00:00<SeP>2024-12-30 19:49:12<SeP>2025-01-01 07:38:24<SeP>2025-01-02 19:27:36<SeP>2025-01-04 07:16:48<SeP>2025-01-05 19:06:00<SeP>2025-01-07 06:55:12<SeP>2025-01-08 18:44:24<SeP>2025-01-10 06:33:36<SeP>2025-01-11 18:22:48<SeP>2025-01-13 06:12:00<SeP>2025-01-14 18:01:12<SeP>2025-01-16 05:50:24<SeP>2025-01-17 17:39:36<SeP>2025-01-19 05:28:48<SeP>2025-01-20 17:18:00<SeP>2025-01-22 05:07:12<SeP>2025-01-23 16:56:24<SeP>2025-01-25 04:45:36<SeP>2025-01-26 16:34:48<SeP>2025-01-28 04:24:00<SeP>2025-01-29 16:13:12<SeP>2025-01-31 04:02:24<SeP>2025-02-01 15:51:36<SeP>2025-02-03 03:40:48<SeP>2025-02-04 15:30:00<SeP>2025-02-06 03:19:12<SeP>2025-02-07 15:08:24<SeP>2025-02-09 02:57:36<SeP>2025-02-10 14:46:48<SeP>2025-02-12 02:36:00<SeP>2025-02-13 14:25:12<SeP>2025-02-15 02:14:24<SeP>2025-02-16 14:03:36<SeP>2025-02-18 01:52:48<SeP>2025-02-19 13:42:00<SeP>2025-02-21 01:31:12<SeP>2025-02-22 13:20:24<SeP>2025-02-24 01:09:36<SeP>2025-02-25 12:58:48<SeP>2025-02-27 00:48:00<SeP>2025-02-28 12:37:12<SeP>2025-03-02 00:26:24<SeP>2025-03-03 12:15:36<SeP>2025-03-05 00:04:48<SeP>2025-03-06 11:54:00<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:32:24<SeP>2025-03-11 00:21:36<SeP>2025-03-12 12:10:48";
  const item1Label       = "Scans";
  const item1Data        = "787<SeP>1524<SeP>1387<SeP>1500<SeP>1271<SeP>1748<SeP>949<SeP>967<SeP>1165<SeP>3409<SeP>3403<SeP>1025<SeP>3321<SeP>901<SeP>778<SeP>885<SeP>1446<SeP>3233<SeP>1453<SeP>1487<SeP>1071<SeP>937<SeP>1107<SeP>1219<SeP>951<SeP>737<SeP>940<SeP>3630<SeP>995<SeP>846<SeP>1419<SeP>1281<SeP>839<SeP>2856<SeP>1701<SeP>2678<SeP>1904<SeP>1769<SeP>1436<SeP>1330<SeP>1833<SeP>1935<SeP>2124<SeP>1642<SeP>1599<SeP>1584<SeP>1819<SeP>1745<SeP>1867<SeP>1906<SeP>1714<SeP>1584<SeP>3279<SeP>1515<SeP>1600<SeP>2150<SeP>1958<SeP>2180<SeP>1919<SeP>3352<SeP>1436<SeP>1512<SeP>1522<SeP>1467<SeP>1973<SeP>1572<SeP>1281<SeP>1469<SeP>1230<SeP>2362<SeP>1234<SeP>1169<SeP>1265<SeP>2431<SeP>7168<SeP>1233<SeP>1345<SeP>1429<SeP>2323<SeP>1259<SeP>1939<SeP>5923<SeP>1551<SeP>1670<SeP>951<SeP>3305<SeP>1225<SeP>1121<SeP>1041<SeP>1142<SeP>1016<SeP>3081<SeP>918<SeP>1353<SeP>3124<SeP>5233<SeP>2708<SeP>1029<SeP>939<SeP>928<SeP>1023<SeP>1019<SeP>1007<SeP>1028<SeP>3980<SeP>2140<SeP>1439<SeP>1565<SeP>594<SeP>1224<SeP>1485<SeP>1144<SeP>1007<SeP>1606<SeP>1774<SeP>1275<SeP>1059<SeP>985<SeP>1178<SeP>702<SeP>878<SeP>884<SeP>822<SeP>1142<SeP>837<SeP>934<SeP>790<SeP>934<SeP>893<SeP>683<SeP>792<SeP>881<SeP>922<SeP>910<SeP>838<SeP>886<SeP>778<SeP>814<SeP>1097<SeP>752<SeP>935<SeP>960<SeP>923<SeP>1164<SeP>973<SeP>783<SeP>537<SeP>960<SeP>851<SeP>1330<SeP>889<SeP>1103<SeP>1145<SeP>1235<SeP>982<SeP>845<SeP>1081<SeP>838<SeP>850<SeP>1078<SeP>929<SeP>907<SeP>954<SeP>1107<SeP>927<SeP>1134<SeP>1005<SeP>1059<SeP>1092<SeP>951<SeP>1045<SeP>2159<SeP>1339<SeP>1021<SeP>1027<SeP>1218<SeP>987<SeP>1019<SeP>780<SeP>690<SeP>1012<SeP>1121<SeP>875<SeP>1124<SeP>1231<SeP>1119<SeP>1198<SeP>1305<SeP>1131<SeP>1391<SeP>1137<SeP>1467<SeP>1507<SeP>1728<SeP>1766<SeP>1381<SeP>773<SeP>839<SeP>1154<SeP>1130<SeP>572<SeP>765<SeP>865<SeP>1009<SeP>1937<SeP>5742<SeP>2265<SeP>2052<SeP>1172<SeP>906<SeP>1057<SeP>896<SeP>945<SeP>1045<SeP>1123<SeP>1056<SeP>1041<SeP>2241<SeP>1266<SeP>1149<SeP>1239<SeP>1352<SeP>1115<SeP>1081<SeP>1000<SeP>1194<SeP>1116<SeP>1017<SeP>1134<SeP>1049<SeP>1206<SeP>901<SeP>1397<SeP>1055<SeP>1149<SeP>1096<SeP>1378<SeP>1280<SeP>1153<SeP>1625<SeP>1190<SeP>1122<SeP>1245<SeP>1820<SeP>1500<SeP>1473<SeP>1964<SeP>1446<SeP>1693<SeP>2028<SeP>1292<SeP>1185<SeP>1154<SeP>1337<SeP>1469<SeP>1474<SeP>1141<SeP>1496<SeP>1883<SeP>1340<SeP>1500<SeP>1444<SeP>1360<SeP>1198<SeP>1249<SeP>1199<SeP>1196<SeP>1232<SeP>1266<SeP>1279<SeP>1483<SeP>1854<SeP>1444<SeP>1198<SeP>1697<SeP>1509<SeP>1028<SeP>1092<SeP>1046<SeP>938<SeP>808<SeP>1090<SeP>1801<SeP>1137<SeP>1113<SeP>1130<SeP>971<SeP>836<SeP>1085<SeP>1399<SeP>842<SeP>984<SeP>942<SeP>1326<SeP>1608<SeP>1501<SeP>1076<SeP>1159<SeP>1018<SeP>1859<SeP>1143<SeP>1130<SeP>1063<SeP>1305<SeP>1359<SeP>946<SeP>1008<SeP>1257<SeP>1050<SeP>897<SeP>914<SeP>1414<SeP>1275<SeP>1735<SeP>1585<SeP>1287<SeP>991<SeP>1148<SeP>1265<SeP>1154<SeP>912<SeP>1291<SeP>1011<SeP>1216<SeP>1354<SeP>1521<SeP>1230<SeP>1668<SeP>1370<SeP>1623<SeP>1425<SeP>1335<SeP>1494<SeP>1507<SeP>1471<SeP>1374<SeP>1529<SeP>1680<SeP>1569<SeP>1329<SeP>1459<SeP>1386<SeP>1200<SeP>1311<SeP>1434<SeP>1724<SeP>1380<SeP>1358<SeP>1207<SeP>1484<SeP>1178<SeP>1322<SeP>1448<SeP>1768<SeP>1785<SeP>1299<SeP>646<SeP>1429<SeP>1966<SeP>1180<SeP>1472<SeP>1199<SeP>1206<SeP>1339<SeP>1448<SeP>1324<SeP>1512<SeP>1804<SeP>1334<SeP>1631<SeP>1807<SeP>1305<SeP>1421<SeP>1478<SeP>1824<SeP>1623<SeP>1026<SeP>1190<SeP>2026<SeP>1919<SeP>1782<SeP>1773<SeP>1730<SeP>1533<SeP>1721<SeP>1520<SeP>1605<SeP>1633<SeP>1722<SeP>1944<SeP>1466<SeP>1443<SeP>1380<SeP>1729<SeP>1435<SeP>2099<SeP>1605<SeP>2102<SeP>1418<SeP>1731";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "234<SeP>537<SeP>1407<SeP>648<SeP>227<SeP>233<SeP>7052<SeP>760<SeP>9280<SeP>499<SeP>404<SeP>1342<SeP>1086<SeP>244<SeP>340<SeP>275<SeP>261<SeP>694<SeP>667<SeP>8463<SeP>7897<SeP>6626<SeP>9667<SeP>455<SeP>307<SeP>404<SeP>213<SeP>390<SeP>5885<SeP>77<SeP>385<SeP>306<SeP>391<SeP>3030<SeP>9811<SeP>8547<SeP>10619<SeP>9452<SeP>6071<SeP>7453<SeP>7112<SeP>8997<SeP>9098<SeP>8059<SeP>8697<SeP>8458<SeP>8633<SeP>8686<SeP>6321<SeP>6102<SeP>11622<SeP>7487<SeP>8539<SeP>6975<SeP>10765<SeP>13979<SeP>21016<SeP>8772<SeP>9344<SeP>10223<SeP>7497<SeP>8702<SeP>8155<SeP>9042<SeP>8126<SeP>6549<SeP>7038<SeP>6987<SeP>5246<SeP>4034<SeP>6874<SeP>5599<SeP>6590<SeP>7561<SeP>5377<SeP>5609<SeP>5601<SeP>6777<SeP>4960<SeP>7168<SeP>4839<SeP>6133<SeP>6795<SeP>5631<SeP>5772<SeP>5661<SeP>22071<SeP>11391<SeP>35048<SeP>7827<SeP>7850<SeP>7647<SeP>11103<SeP>7453<SeP>4524<SeP>6708<SeP>3454<SeP>5493<SeP>7099<SeP>4924<SeP>8889<SeP>6832<SeP>5576<SeP>4360<SeP>7025<SeP>8825<SeP>8269<SeP>8465<SeP>3876<SeP>7445<SeP>10809<SeP>7942<SeP>3273<SeP>4732<SeP>7606<SeP>7849<SeP>5753<SeP>8606<SeP>8078<SeP>1853<SeP>2782<SeP>1034<SeP>1990<SeP>2600<SeP>1533<SeP>725<SeP>1095<SeP>1264<SeP>1855<SeP>591<SeP>1335<SeP>1123<SeP>1119<SeP>816<SeP>1379<SeP>1426<SeP>1246<SeP>898<SeP>2487<SeP>1795<SeP>7887<SeP>9050<SeP>8977<SeP>9841<SeP>6156<SeP>11192<SeP>7342<SeP>8643<SeP>9787<SeP>10717<SeP>11330<SeP>9478<SeP>11049<SeP>14273<SeP>9452<SeP>8424<SeP>4509<SeP>6822<SeP>11956<SeP>20409<SeP>6489<SeP>8140<SeP>10880<SeP>17435<SeP>7361<SeP>5697<SeP>7646<SeP>7008<SeP>26033<SeP>7801<SeP>9079<SeP>10980<SeP>5493<SeP>6131<SeP>6186<SeP>16193<SeP>4684<SeP>13834<SeP>7323<SeP>7010<SeP>8950<SeP>6305<SeP>4089<SeP>6536<SeP>7438<SeP>5683<SeP>6803<SeP>7675<SeP>4138<SeP>21528<SeP>7070<SeP>6672<SeP>7151<SeP>8269<SeP>10782<SeP>7381<SeP>2511<SeP>5984<SeP>4391<SeP>4564<SeP>4472<SeP>1499<SeP>618<SeP>645<SeP>201<SeP>543<SeP>641<SeP>798<SeP>466<SeP>901<SeP>1595<SeP>3204<SeP>8951<SeP>14593<SeP>2126<SeP>4256<SeP>2932<SeP>3696<SeP>7131<SeP>4267<SeP>2315<SeP>3923<SeP>2982<SeP>3051<SeP>4239<SeP>3088<SeP>2369<SeP>3624<SeP>1907<SeP>2047<SeP>1917<SeP>1341<SeP>1409<SeP>1400<SeP>872<SeP>1852<SeP>14338<SeP>13784<SeP>2410<SeP>3795<SeP>3679<SeP>2558<SeP>3855<SeP>1727<SeP>3735<SeP>2652<SeP>3566<SeP>2331<SeP>2939<SeP>3270<SeP>3077<SeP>6942<SeP>5098<SeP>4626<SeP>2761<SeP>3050<SeP>3905<SeP>4117<SeP>8390<SeP>6695<SeP>3774<SeP>2723<SeP>2850<SeP>4567<SeP>3629<SeP>3492<SeP>3116<SeP>2862<SeP>5777<SeP>3740<SeP>5960<SeP>3582<SeP>5701<SeP>4684<SeP>6979<SeP>4055<SeP>20716<SeP>6932<SeP>12688<SeP>1828<SeP>2225<SeP>5014<SeP>3770<SeP>4714<SeP>3425<SeP>5232<SeP>4659<SeP>4635<SeP>3487<SeP>3924<SeP>2304<SeP>1462<SeP>2219<SeP>3835<SeP>2461<SeP>3031<SeP>3497<SeP>4767<SeP>3708<SeP>3499<SeP>4186<SeP>3537<SeP>3255<SeP>6395<SeP>8095<SeP>5883<SeP>4712<SeP>4825<SeP>4808<SeP>3608<SeP>4374<SeP>4034<SeP>6649<SeP>4919<SeP>5430<SeP>1984<SeP>748<SeP>1591<SeP>1774<SeP>1128<SeP>1409<SeP>1761<SeP>1133<SeP>2138<SeP>4402<SeP>6164<SeP>5130<SeP>33962<SeP>5533<SeP>10536<SeP>18101<SeP>5319<SeP>5763<SeP>5480<SeP>9830<SeP>19251<SeP>5643<SeP>4886<SeP>4737<SeP>6348<SeP>20557<SeP>15170<SeP>3952<SeP>3778<SeP>3979<SeP>5744<SeP>5020<SeP>3089<SeP>3292<SeP>4477<SeP>5787<SeP>4743<SeP>18176<SeP>5436<SeP>6388<SeP>5608<SeP>1407<SeP>3939<SeP>4297<SeP>4051<SeP>4597<SeP>2842<SeP>3903<SeP>2601<SeP>4195<SeP>3794<SeP>7468<SeP>10135<SeP>9002<SeP>8514<SeP>9652<SeP>7366<SeP>6243<SeP>5297<SeP>4317<SeP>24609<SeP>4851<SeP>3105<SeP>4456<SeP>3741<SeP>11362<SeP>5662<SeP>3784<SeP>5086<SeP>3924<SeP>4678<SeP>9518<SeP>8869<SeP>4197<SeP>3064<SeP>3488<SeP>1916<SeP>2404<SeP>2539<SeP>2112<SeP>2464<SeP>1667<SeP>3181<SeP>2504<SeP>3332";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:49:12<SeP>2023-07-28 23:38:24<SeP>2023-07-30 11:27:36<SeP>2023-07-31 23:16:48<SeP>2023-08-02 11:06:00<SeP>2023-08-03 22:55:12<SeP>2023-08-05 10:44:24<SeP>2023-08-06 22:33:36<SeP>2023-08-08 10:22:48<SeP>2023-08-09 22:12:00<SeP>2023-08-11 10:01:12<SeP>2023-08-12 21:50:24<SeP>2023-08-14 09:39:36<SeP>2023-08-15 21:28:48<SeP>2023-08-17 09:18:00<SeP>2023-08-18 21:07:12<SeP>2023-08-20 08:56:24<SeP>2023-08-21 20:45:36<SeP>2023-08-23 08:34:48<SeP>2023-08-24 20:24:00<SeP>2023-08-26 08:13:12<SeP>2023-08-27 20:02:24<SeP>2023-08-29 07:51:36<SeP>2023-08-30 19:40:48<SeP>2023-09-01 07:30:00<SeP>2023-09-02 19:19:12<SeP>2023-09-04 07:08:24<SeP>2023-09-05 18:57:36<SeP>2023-09-07 06:46:48<SeP>2023-09-08 18:36:00<SeP>2023-09-10 06:25:12<SeP>2023-09-11 18:14:24<SeP>2023-09-13 06:03:36<SeP>2023-09-14 17:52:48<SeP>2023-09-16 05:42:00<SeP>2023-09-17 17:31:12<SeP>2023-09-19 05:20:24<SeP>2023-09-20 17:09:36<SeP>2023-09-22 04:58:48<SeP>2023-09-23 16:48:00<SeP>2023-09-25 04:37:12<SeP>2023-09-26 16:26:24<SeP>2023-09-28 04:15:36<SeP>2023-09-29 16:04:48<SeP>2023-10-01 03:54:00<SeP>2023-10-02 15:43:12<SeP>2023-10-04 03:32:24<SeP>2023-10-05 15:21:36<SeP>2023-10-07 03:10:48<SeP>2023-10-08 15:00:00<SeP>2023-10-10 02:49:12<SeP>2023-10-11 14:38:24<SeP>2023-10-13 02:27:36<SeP>2023-10-14 14:16:48<SeP>2023-10-16 02:06:00<SeP>2023-10-17 13:55:12<SeP>2023-10-19 01:44:24<SeP>2023-10-20 13:33:36<SeP>2023-10-22 01:22:48<SeP>2023-10-23 13:12:00<SeP>2023-10-25 01:01:12<SeP>2023-10-26 12:50:24<SeP>2023-10-28 00:39:36<SeP>2023-10-29 12:28:48<SeP>2023-10-31 00:18:00<SeP>2023-11-01 12:07:12<SeP>2023-11-02 23:56:24<SeP>2023-11-04 11:45:36<SeP>2023-11-05 22:34:48<SeP>2023-11-07 10:24:00<SeP>2023-11-08 22:13:12<SeP>2023-11-10 10:02:24<SeP>2023-11-11 21:51:36<SeP>2023-11-13 09:40:48<SeP>2023-11-14 21:30:00<SeP>2023-11-16 09:19:12<SeP>2023-11-17 21:08:24<SeP>2023-11-19 08:57:36<SeP>2023-11-20 20:46:48<SeP>2023-11-22 08:36:00<SeP>2023-11-23 20:25:12<SeP>2023-11-25 08:14:24<SeP>2023-11-26 20:03:36<SeP>2023-11-28 07:52:48<SeP>2023-11-29 19:42:00<SeP>2023-12-01 07:31:12<SeP>2023-12-02 19:20:24<SeP>2023-12-04 07:09:36<SeP>2023-12-05 18:58:48<SeP>2023-12-07 06:48:00<SeP>2023-12-08 18:37:12<SeP>2023-12-10 06:26:24<SeP>2023-12-11 18:15:36<SeP>2023-12-13 06:04:48<SeP>2023-12-14 17:54:00<SeP>2023-12-16 05:43:12<SeP>2023-12-17 17:32:24<SeP>2023-12-19 05:21:36<SeP>2023-12-20 17:10:48<SeP>2023-12-22 05:00:00<SeP>2023-12-23 16:49:12<SeP>2023-12-25 04:38:24<SeP>2023-12-26 16:27:36<SeP>2023-12-28 04:16:48<SeP>2023-12-29 16:06:00<SeP>2023-12-31 03:55:12<SeP>2024-01-01 15:44:24<SeP>2024-01-03 03:33:36<SeP>2024-01-04 15:22:48<SeP>2024-01-06 03:12:00<SeP>2024-01-07 15:01:12<SeP>2024-01-09 02:50:24<SeP>2024-01-10 14:39:36<SeP>2024-01-12 02:28:48<SeP>2024-01-13 14:18:00<SeP>2024-01-15 02:07:12<SeP>2024-01-16 13:56:24<SeP>2024-01-18 01:45:36<SeP>2024-01-19 13:34:48<SeP>2024-01-21 01:24:00<SeP>2024-01-22 13:13:12<SeP>2024-01-24 01:02:24<SeP>2024-01-25 12:51:36<SeP>2024-01-27 00:40:48<SeP>2024-01-28 12:30:00<SeP>2024-01-30 00:19:12<SeP>2024-01-31 12:08:24<SeP>2024-02-01 23:57:36<SeP>2024-02-03 11:46:48<SeP>2024-02-04 23:36:00<SeP>2024-02-06 11:25:12<SeP>2024-02-07 23:14:24<SeP>2024-02-09 11:03:36<SeP>2024-02-10 22:52:48<SeP>2024-02-12 10:42:00<SeP>2024-02-13 22:31:12<SeP>2024-02-15 10:20:24<SeP>2024-02-16 22:09:36<SeP>2024-02-18 09:58:48<SeP>2024-02-19 21:48:00<SeP>2024-02-21 09:37:12<SeP>2024-02-22 21:26:24<SeP>2024-02-24 09:15:36<SeP>2024-02-25 21:04:48<SeP>2024-02-27 08:54:00<SeP>2024-02-28 20:43:12<SeP>2024-03-01 08:32:24<SeP>2024-03-02 20:21:36<SeP>2024-03-04 08:10:48<SeP>2024-03-05 20:00:00<SeP>2024-03-07 07:49:12<SeP>2024-03-08 19:38:24<SeP>2024-03-10 08:27:36<SeP>2024-03-11 20:16:48<SeP>2024-03-13 08:06:00<SeP>2024-03-14 19:55:12<SeP>2024-03-16 07:44:24<SeP>2024-03-17 19:33:36<SeP>2024-03-19 07:22:48<SeP>2024-03-20 19:12:00<SeP>2024-03-22 07:01:12<SeP>2024-03-23 18:50:24<SeP>2024-03-25 06:39:36<SeP>2024-03-26 18:28:48<SeP>2024-03-28 06:18:00<SeP>2024-03-29 18:07:12<SeP>2024-03-31 05:56:24<SeP>2024-04-01 17:45:36<SeP>2024-04-03 05:34:48<SeP>2024-04-04 17:24:00<SeP>2024-04-06 05:13:12<SeP>2024-04-07 17:02:24<SeP>2024-04-09 04:51:36<SeP>2024-04-10 16:40:48<SeP>2024-04-12 04:30:00<SeP>2024-04-13 16:19:12<SeP>2024-04-15 04:08:24<SeP>2024-04-16 15:57:36<SeP>2024-04-18 03:46:48<SeP>2024-04-19 15:36:00<SeP>2024-04-21 03:25:12<SeP>2024-04-22 15:14:24<SeP>2024-04-24 03:03:36<SeP>2024-04-25 14:52:48<SeP>2024-04-27 02:42:00<SeP>2024-04-28 14:31:12<SeP>2024-04-30 02:20:24<SeP>2024-05-01 14:09:36<SeP>2024-05-03 01:58:48<SeP>2024-05-04 13:48:00<SeP>2024-05-06 01:37:12<SeP>2024-05-07 13:26:24<SeP>2024-05-09 01:15:36<SeP>2024-05-10 13:04:48<SeP>2024-05-12 00:54:00<SeP>2024-05-13 12:43:12<SeP>2024-05-15 00:32:24<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:10:48<SeP>2024-05-19 12:00:00<SeP>2024-05-20 23:49:12<SeP>2024-05-22 11:38:24<SeP>2024-05-23 23:27:36<SeP>2024-05-25 11:16:48<SeP>2024-05-26 23:06:00<SeP>2024-05-28 10:55:12<SeP>2024-05-29 22:44:24<SeP>2024-05-31 10:33:36<SeP>2024-06-01 22:22:48<SeP>2024-06-03 10:12:00<SeP>2024-06-04 22:01:12<SeP>2024-06-06 09:50:24<SeP>2024-06-07 21:39:36<SeP>2024-06-09 09:28:48<SeP>2024-06-10 21:18:00<SeP>2024-06-12 09:07:12<SeP>2024-06-13 20:56:24<SeP>2024-06-15 08:45:36<SeP>2024-06-16 20:34:48<SeP>2024-06-18 08:24:00<SeP>2024-06-19 20:13:12<SeP>2024-06-21 08:02:24<SeP>2024-06-22 19:51:36<SeP>2024-06-24 07:40:48<SeP>2024-06-25 19:30:00<SeP>2024-06-27 07:19:12<SeP>2024-06-28 19:08:24<SeP>2024-06-30 06:57:36<SeP>2024-07-01 18:46:48<SeP>2024-07-03 06:36:00<SeP>2024-07-04 18:25:12<SeP>2024-07-06 06:14:24<SeP>2024-07-07 18:03:36<SeP>2024-07-09 05:52:48<SeP>2024-07-10 17:42:00<SeP>2024-07-12 05:31:12<SeP>2024-07-13 17:20:24<SeP>2024-07-15 05:09:36<SeP>2024-07-16 16:58:48<SeP>2024-07-18 04:48:00<SeP>2024-07-19 16:37:12<SeP>2024-07-21 04:26:24<SeP>2024-07-22 16:15:36<SeP>2024-07-24 04:04:48<SeP>2024-07-25 15:54:00<SeP>2024-07-27 03:43:12<SeP>2024-07-28 15:32:24<SeP>2024-07-30 03:21:36<SeP>2024-07-31 15:10:48<SeP>2024-08-02 03:00:00<SeP>2024-08-03 14:49:12<SeP>2024-08-05 02:38:24<SeP>2024-08-06 14:27:36<SeP>2024-08-08 02:16:48<SeP>2024-08-09 14:06:00<SeP>2024-08-11 01:55:12<SeP>2024-08-12 13:44:24<SeP>2024-08-14 01:33:36<SeP>2024-08-15 13:22:48<SeP>2024-08-17 01:12:00<SeP>2024-08-18 13:01:12<SeP>2024-08-20 00:50:24<SeP>2024-08-21 12:39:36<SeP>2024-08-23 00:28:48<SeP>2024-08-24 12:18:00<SeP>2024-08-26 00:07:12<SeP>2024-08-27 11:56:24<SeP>2024-08-28 23:45:36<SeP>2024-08-30 11:34:48<SeP>2024-08-31 23:24:00<SeP>2024-09-02 11:13:12<SeP>2024-09-03 23:02:24<SeP>2024-09-05 10:51:36<SeP>2024-09-06 22:40:48<SeP>2024-09-08 10:30:00<SeP>2024-09-09 22:19:12<SeP>2024-09-11 10:08:24<SeP>2024-09-12 21:57:36<SeP>2024-09-14 09:46:48<SeP>2024-09-15 21:36:00<SeP>2024-09-17 09:25:12<SeP>2024-09-18 21:14:24<SeP>2024-09-20 09:03:36<SeP>2024-09-21 20:52:48<SeP>2024-09-23 08:42:00<SeP>2024-09-24 20:31:12<SeP>2024-09-26 08:20:24<SeP>2024-09-27 20:09:36<SeP>2024-09-29 07:58:48<SeP>2024-09-30 19:48:00<SeP>2024-10-02 07:37:12<SeP>2024-10-03 19:26:24<SeP>2024-10-05 07:15:36<SeP>2024-10-06 19:04:48<SeP>2024-10-08 06:54:00<SeP>2024-10-09 18:43:12<SeP>2024-10-11 06:32:24<SeP>2024-10-12 18:21:36<SeP>2024-10-14 06:10:48<SeP>2024-10-15 18:00:00<SeP>2024-10-17 05:49:12<SeP>2024-10-18 17:38:24<SeP>2024-10-20 05:27:36<SeP>2024-10-21 17:16:48<SeP>2024-10-23 05:06:00<SeP>2024-10-24 16:55:12<SeP>2024-10-26 04:44:24<SeP>2024-10-27 16:33:36<SeP>2024-10-29 04:22:48<SeP>2024-10-30 16:12:00<SeP>2024-11-01 04:01:12<SeP>2024-11-02 15:50:24<SeP>2024-11-04 02:39:36<SeP>2024-11-05 14:28:48<SeP>2024-11-07 02:18:00<SeP>2024-11-08 14:07:12<SeP>2024-11-10 01:56:24<SeP>2024-11-11 13:45:36<SeP>2024-11-13 01:34:48<SeP>2024-11-14 13:24:00<SeP>2024-11-16 01:13:12<SeP>2024-11-17 13:02:24<SeP>2024-11-19 00:51:36<SeP>2024-11-20 12:40:48<SeP>2024-11-22 00:30:00<SeP>2024-11-23 12:19:12<SeP>2024-11-25 00:08:24<SeP>2024-11-26 11:57:36<SeP>2024-11-27 23:46:48<SeP>2024-11-29 11:36:00<SeP>2024-11-30 23:25:12<SeP>2024-12-02 11:14:24<SeP>2024-12-03 23:03:36<SeP>2024-12-05 10:52:48<SeP>2024-12-06 22:42:00<SeP>2024-12-08 10:31:12<SeP>2024-12-09 22:20:24<SeP>2024-12-11 10:09:36<SeP>2024-12-12 21:58:48<SeP>2024-12-14 09:48:00<SeP>2024-12-15 21:37:12<SeP>2024-12-17 09:26:24<SeP>2024-12-18 21:15:36<SeP>2024-12-20 09:04:48<SeP>2024-12-21 20:54:00<SeP>2024-12-23 08:43:12<SeP>2024-12-24 20:32:24<SeP>2024-12-26 08:21:36<SeP>2024-12-27 20:10:48<SeP>2024-12-29 08:00:00<SeP>2024-12-30 19:49:12<SeP>2025-01-01 07:38:24<SeP>2025-01-02 19:27:36<SeP>2025-01-04 07:16:48<SeP>2025-01-05 19:06:00<SeP>2025-01-07 06:55:12<SeP>2025-01-08 18:44:24<SeP>2025-01-10 06:33:36<SeP>2025-01-11 18:22:48<SeP>2025-01-13 06:12:00<SeP>2025-01-14 18:01:12<SeP>2025-01-16 05:50:24<SeP>2025-01-17 17:39:36<SeP>2025-01-19 05:28:48<SeP>2025-01-20 17:18:00<SeP>2025-01-22 05:07:12<SeP>2025-01-23 16:56:24<SeP>2025-01-25 04:45:36<SeP>2025-01-26 16:34:48<SeP>2025-01-28 04:24:00<SeP>2025-01-29 16:13:12<SeP>2025-01-31 04:02:24<SeP>2025-02-01 15:51:36<SeP>2025-02-03 03:40:48<SeP>2025-02-04 15:30:00<SeP>2025-02-06 03:19:12<SeP>2025-02-07 15:08:24<SeP>2025-02-09 02:57:36<SeP>2025-02-10 14:46:48<SeP>2025-02-12 02:36:00<SeP>2025-02-13 14:25:12<SeP>2025-02-15 02:14:24<SeP>2025-02-16 14:03:36<SeP>2025-02-18 01:52:48<SeP>2025-02-19 13:42:00<SeP>2025-02-21 01:31:12<SeP>2025-02-22 13:20:24<SeP>2025-02-24 01:09:36<SeP>2025-02-25 12:58:48<SeP>2025-02-27 00:48:00<SeP>2025-02-28 12:37:12<SeP>2025-03-02 00:26:24<SeP>2025-03-03 12:15:36<SeP>2025-03-05 00:04:48<SeP>2025-03-06 11:54:00<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:32:24<SeP>2025-03-11 00:21:36<SeP>2025-03-12 12:10:48";
  const itemLabel       = "Scans";
  const itemData        = "787<SeP>1524<SeP>1387<SeP>1500<SeP>1271<SeP>1748<SeP>949<SeP>967<SeP>1165<SeP>3409<SeP>3403<SeP>1025<SeP>3321<SeP>901<SeP>778<SeP>885<SeP>1446<SeP>3233<SeP>1453<SeP>1487<SeP>1071<SeP>937<SeP>1107<SeP>1219<SeP>951<SeP>737<SeP>940<SeP>3630<SeP>995<SeP>846<SeP>1419<SeP>1281<SeP>839<SeP>2856<SeP>1701<SeP>2678<SeP>1904<SeP>1769<SeP>1436<SeP>1330<SeP>1833<SeP>1935<SeP>2124<SeP>1642<SeP>1599<SeP>1584<SeP>1819<SeP>1745<SeP>1867<SeP>1906<SeP>1714<SeP>1584<SeP>3279<SeP>1515<SeP>1600<SeP>2150<SeP>1958<SeP>2180<SeP>1919<SeP>3352<SeP>1436<SeP>1512<SeP>1522<SeP>1467<SeP>1973<SeP>1572<SeP>1281<SeP>1469<SeP>1230<SeP>2362<SeP>1234<SeP>1169<SeP>1265<SeP>2431<SeP>7168<SeP>1233<SeP>1345<SeP>1429<SeP>2323<SeP>1259<SeP>1939<SeP>5923<SeP>1551<SeP>1670<SeP>951<SeP>3305<SeP>1225<SeP>1121<SeP>1041<SeP>1142<SeP>1016<SeP>3081<SeP>918<SeP>1353<SeP>3124<SeP>5233<SeP>2708<SeP>1029<SeP>939<SeP>928<SeP>1023<SeP>1019<SeP>1007<SeP>1028<SeP>3980<SeP>2140<SeP>1439<SeP>1565<SeP>594<SeP>1224<SeP>1485<SeP>1144<SeP>1007<SeP>1606<SeP>1774<SeP>1275<SeP>1059<SeP>985<SeP>1178<SeP>702<SeP>878<SeP>884<SeP>822<SeP>1142<SeP>837<SeP>934<SeP>790<SeP>934<SeP>893<SeP>683<SeP>792<SeP>881<SeP>922<SeP>910<SeP>838<SeP>886<SeP>778<SeP>814<SeP>1097<SeP>752<SeP>935<SeP>960<SeP>923<SeP>1164<SeP>973<SeP>783<SeP>537<SeP>960<SeP>851<SeP>1330<SeP>889<SeP>1103<SeP>1145<SeP>1235<SeP>982<SeP>845<SeP>1081<SeP>838<SeP>850<SeP>1078<SeP>929<SeP>907<SeP>954<SeP>1107<SeP>927<SeP>1134<SeP>1005<SeP>1059<SeP>1092<SeP>951<SeP>1045<SeP>2159<SeP>1339<SeP>1021<SeP>1027<SeP>1218<SeP>987<SeP>1019<SeP>780<SeP>690<SeP>1012<SeP>1121<SeP>875<SeP>1124<SeP>1231<SeP>1119<SeP>1198<SeP>1305<SeP>1131<SeP>1391<SeP>1137<SeP>1467<SeP>1507<SeP>1728<SeP>1766<SeP>1381<SeP>773<SeP>839<SeP>1154<SeP>1130<SeP>572<SeP>765<SeP>865<SeP>1009<SeP>1937<SeP>5742<SeP>2265<SeP>2052<SeP>1172<SeP>906<SeP>1057<SeP>896<SeP>945<SeP>1045<SeP>1123<SeP>1056<SeP>1041<SeP>2241<SeP>1266<SeP>1149<SeP>1239<SeP>1352<SeP>1115<SeP>1081<SeP>1000<SeP>1194<SeP>1116<SeP>1017<SeP>1134<SeP>1049<SeP>1206<SeP>901<SeP>1397<SeP>1055<SeP>1149<SeP>1096<SeP>1378<SeP>1280<SeP>1153<SeP>1625<SeP>1190<SeP>1122<SeP>1245<SeP>1820<SeP>1500<SeP>1473<SeP>1964<SeP>1446<SeP>1693<SeP>2028<SeP>1292<SeP>1185<SeP>1154<SeP>1337<SeP>1469<SeP>1474<SeP>1141<SeP>1496<SeP>1883<SeP>1340<SeP>1500<SeP>1444<SeP>1360<SeP>1198<SeP>1249<SeP>1199<SeP>1196<SeP>1232<SeP>1266<SeP>1279<SeP>1483<SeP>1854<SeP>1444<SeP>1198<SeP>1697<SeP>1509<SeP>1028<SeP>1092<SeP>1046<SeP>938<SeP>808<SeP>1090<SeP>1801<SeP>1137<SeP>1113<SeP>1130<SeP>971<SeP>836<SeP>1085<SeP>1399<SeP>842<SeP>984<SeP>942<SeP>1326<SeP>1608<SeP>1501<SeP>1076<SeP>1159<SeP>1018<SeP>1859<SeP>1143<SeP>1130<SeP>1063<SeP>1305<SeP>1359<SeP>946<SeP>1008<SeP>1257<SeP>1050<SeP>897<SeP>914<SeP>1414<SeP>1275<SeP>1735<SeP>1585<SeP>1287<SeP>991<SeP>1148<SeP>1265<SeP>1154<SeP>912<SeP>1291<SeP>1011<SeP>1216<SeP>1354<SeP>1521<SeP>1230<SeP>1668<SeP>1370<SeP>1623<SeP>1425<SeP>1335<SeP>1494<SeP>1507<SeP>1471<SeP>1374<SeP>1529<SeP>1680<SeP>1569<SeP>1329<SeP>1459<SeP>1386<SeP>1200<SeP>1311<SeP>1434<SeP>1724<SeP>1380<SeP>1358<SeP>1207<SeP>1484<SeP>1178<SeP>1322<SeP>1448<SeP>1768<SeP>1785<SeP>1299<SeP>646<SeP>1429<SeP>1966<SeP>1180<SeP>1472<SeP>1199<SeP>1206<SeP>1339<SeP>1448<SeP>1324<SeP>1512<SeP>1804<SeP>1334<SeP>1631<SeP>1807<SeP>1305<SeP>1421<SeP>1478<SeP>1824<SeP>1623<SeP>1026<SeP>1190<SeP>2026<SeP>1919<SeP>1782<SeP>1773<SeP>1730<SeP>1533<SeP>1721<SeP>1520<SeP>1605<SeP>1633<SeP>1722<SeP>1944<SeP>1466<SeP>1443<SeP>1380<SeP>1729<SeP>1435<SeP>2099<SeP>1605<SeP>2102<SeP>1418<SeP>1731";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:49:12<SeP>2023-07-28 23:38:24<SeP>2023-07-30 11:27:36<SeP>2023-07-31 23:16:48<SeP>2023-08-02 11:06:00<SeP>2023-08-03 22:55:12<SeP>2023-08-05 10:44:24<SeP>2023-08-06 22:33:36<SeP>2023-08-08 10:22:48<SeP>2023-08-09 22:12:00<SeP>2023-08-11 10:01:12<SeP>2023-08-12 21:50:24<SeP>2023-08-14 09:39:36<SeP>2023-08-15 21:28:48<SeP>2023-08-17 09:18:00<SeP>2023-08-18 21:07:12<SeP>2023-08-20 08:56:24<SeP>2023-08-21 20:45:36<SeP>2023-08-23 08:34:48<SeP>2023-08-24 20:24:00<SeP>2023-08-26 08:13:12<SeP>2023-08-27 20:02:24<SeP>2023-08-29 07:51:36<SeP>2023-08-30 19:40:48<SeP>2023-09-01 07:30:00<SeP>2023-09-02 19:19:12<SeP>2023-09-04 07:08:24<SeP>2023-09-05 18:57:36<SeP>2023-09-07 06:46:48<SeP>2023-09-08 18:36:00<SeP>2023-09-10 06:25:12<SeP>2023-09-11 18:14:24<SeP>2023-09-13 06:03:36<SeP>2023-09-14 17:52:48<SeP>2023-09-16 05:42:00<SeP>2023-09-17 17:31:12<SeP>2023-09-19 05:20:24<SeP>2023-09-20 17:09:36<SeP>2023-09-22 04:58:48<SeP>2023-09-23 16:48:00<SeP>2023-09-25 04:37:12<SeP>2023-09-26 16:26:24<SeP>2023-09-28 04:15:36<SeP>2023-09-29 16:04:48<SeP>2023-10-01 03:54:00<SeP>2023-10-02 15:43:12<SeP>2023-10-04 03:32:24<SeP>2023-10-05 15:21:36<SeP>2023-10-07 03:10:48<SeP>2023-10-08 15:00:00<SeP>2023-10-10 02:49:12<SeP>2023-10-11 14:38:24<SeP>2023-10-13 02:27:36<SeP>2023-10-14 14:16:48<SeP>2023-10-16 02:06:00<SeP>2023-10-17 13:55:12<SeP>2023-10-19 01:44:24<SeP>2023-10-20 13:33:36<SeP>2023-10-22 01:22:48<SeP>2023-10-23 13:12:00<SeP>2023-10-25 01:01:12<SeP>2023-10-26 12:50:24<SeP>2023-10-28 00:39:36<SeP>2023-10-29 12:28:48<SeP>2023-10-31 00:18:00<SeP>2023-11-01 12:07:12<SeP>2023-11-02 23:56:24<SeP>2023-11-04 11:45:36<SeP>2023-11-05 22:34:48<SeP>2023-11-07 10:24:00<SeP>2023-11-08 22:13:12<SeP>2023-11-10 10:02:24<SeP>2023-11-11 21:51:36<SeP>2023-11-13 09:40:48<SeP>2023-11-14 21:30:00<SeP>2023-11-16 09:19:12<SeP>2023-11-17 21:08:24<SeP>2023-11-19 08:57:36<SeP>2023-11-20 20:46:48<SeP>2023-11-22 08:36:00<SeP>2023-11-23 20:25:12<SeP>2023-11-25 08:14:24<SeP>2023-11-26 20:03:36<SeP>2023-11-28 07:52:48<SeP>2023-11-29 19:42:00<SeP>2023-12-01 07:31:12<SeP>2023-12-02 19:20:24<SeP>2023-12-04 07:09:36<SeP>2023-12-05 18:58:48<SeP>2023-12-07 06:48:00<SeP>2023-12-08 18:37:12<SeP>2023-12-10 06:26:24<SeP>2023-12-11 18:15:36<SeP>2023-12-13 06:04:48<SeP>2023-12-14 17:54:00<SeP>2023-12-16 05:43:12<SeP>2023-12-17 17:32:24<SeP>2023-12-19 05:21:36<SeP>2023-12-20 17:10:48<SeP>2023-12-22 05:00:00<SeP>2023-12-23 16:49:12<SeP>2023-12-25 04:38:24<SeP>2023-12-26 16:27:36<SeP>2023-12-28 04:16:48<SeP>2023-12-29 16:06:00<SeP>2023-12-31 03:55:12<SeP>2024-01-01 15:44:24<SeP>2024-01-03 03:33:36<SeP>2024-01-04 15:22:48<SeP>2024-01-06 03:12:00<SeP>2024-01-07 15:01:12<SeP>2024-01-09 02:50:24<SeP>2024-01-10 14:39:36<SeP>2024-01-12 02:28:48<SeP>2024-01-13 14:18:00<SeP>2024-01-15 02:07:12<SeP>2024-01-16 13:56:24<SeP>2024-01-18 01:45:36<SeP>2024-01-19 13:34:48<SeP>2024-01-21 01:24:00<SeP>2024-01-22 13:13:12<SeP>2024-01-24 01:02:24<SeP>2024-01-25 12:51:36<SeP>2024-01-27 00:40:48<SeP>2024-01-28 12:30:00<SeP>2024-01-30 00:19:12<SeP>2024-01-31 12:08:24<SeP>2024-02-01 23:57:36<SeP>2024-02-03 11:46:48<SeP>2024-02-04 23:36:00<SeP>2024-02-06 11:25:12<SeP>2024-02-07 23:14:24<SeP>2024-02-09 11:03:36<SeP>2024-02-10 22:52:48<SeP>2024-02-12 10:42:00<SeP>2024-02-13 22:31:12<SeP>2024-02-15 10:20:24<SeP>2024-02-16 22:09:36<SeP>2024-02-18 09:58:48<SeP>2024-02-19 21:48:00<SeP>2024-02-21 09:37:12<SeP>2024-02-22 21:26:24<SeP>2024-02-24 09:15:36<SeP>2024-02-25 21:04:48<SeP>2024-02-27 08:54:00<SeP>2024-02-28 20:43:12<SeP>2024-03-01 08:32:24<SeP>2024-03-02 20:21:36<SeP>2024-03-04 08:10:48<SeP>2024-03-05 20:00:00<SeP>2024-03-07 07:49:12<SeP>2024-03-08 19:38:24<SeP>2024-03-10 08:27:36<SeP>2024-03-11 20:16:48<SeP>2024-03-13 08:06:00<SeP>2024-03-14 19:55:12<SeP>2024-03-16 07:44:24<SeP>2024-03-17 19:33:36<SeP>2024-03-19 07:22:48<SeP>2024-03-20 19:12:00<SeP>2024-03-22 07:01:12<SeP>2024-03-23 18:50:24<SeP>2024-03-25 06:39:36<SeP>2024-03-26 18:28:48<SeP>2024-03-28 06:18:00<SeP>2024-03-29 18:07:12<SeP>2024-03-31 05:56:24<SeP>2024-04-01 17:45:36<SeP>2024-04-03 05:34:48<SeP>2024-04-04 17:24:00<SeP>2024-04-06 05:13:12<SeP>2024-04-07 17:02:24<SeP>2024-04-09 04:51:36<SeP>2024-04-10 16:40:48<SeP>2024-04-12 04:30:00<SeP>2024-04-13 16:19:12<SeP>2024-04-15 04:08:24<SeP>2024-04-16 15:57:36<SeP>2024-04-18 03:46:48<SeP>2024-04-19 15:36:00<SeP>2024-04-21 03:25:12<SeP>2024-04-22 15:14:24<SeP>2024-04-24 03:03:36<SeP>2024-04-25 14:52:48<SeP>2024-04-27 02:42:00<SeP>2024-04-28 14:31:12<SeP>2024-04-30 02:20:24<SeP>2024-05-01 14:09:36<SeP>2024-05-03 01:58:48<SeP>2024-05-04 13:48:00<SeP>2024-05-06 01:37:12<SeP>2024-05-07 13:26:24<SeP>2024-05-09 01:15:36<SeP>2024-05-10 13:04:48<SeP>2024-05-12 00:54:00<SeP>2024-05-13 12:43:12<SeP>2024-05-15 00:32:24<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:10:48<SeP>2024-05-19 12:00:00<SeP>2024-05-20 23:49:12<SeP>2024-05-22 11:38:24<SeP>2024-05-23 23:27:36<SeP>2024-05-25 11:16:48<SeP>2024-05-26 23:06:00<SeP>2024-05-28 10:55:12<SeP>2024-05-29 22:44:24<SeP>2024-05-31 10:33:36<SeP>2024-06-01 22:22:48<SeP>2024-06-03 10:12:00<SeP>2024-06-04 22:01:12<SeP>2024-06-06 09:50:24<SeP>2024-06-07 21:39:36<SeP>2024-06-09 09:28:48<SeP>2024-06-10 21:18:00<SeP>2024-06-12 09:07:12<SeP>2024-06-13 20:56:24<SeP>2024-06-15 08:45:36<SeP>2024-06-16 20:34:48<SeP>2024-06-18 08:24:00<SeP>2024-06-19 20:13:12<SeP>2024-06-21 08:02:24<SeP>2024-06-22 19:51:36<SeP>2024-06-24 07:40:48<SeP>2024-06-25 19:30:00<SeP>2024-06-27 07:19:12<SeP>2024-06-28 19:08:24<SeP>2024-06-30 06:57:36<SeP>2024-07-01 18:46:48<SeP>2024-07-03 06:36:00<SeP>2024-07-04 18:25:12<SeP>2024-07-06 06:14:24<SeP>2024-07-07 18:03:36<SeP>2024-07-09 05:52:48<SeP>2024-07-10 17:42:00<SeP>2024-07-12 05:31:12<SeP>2024-07-13 17:20:24<SeP>2024-07-15 05:09:36<SeP>2024-07-16 16:58:48<SeP>2024-07-18 04:48:00<SeP>2024-07-19 16:37:12<SeP>2024-07-21 04:26:24<SeP>2024-07-22 16:15:36<SeP>2024-07-24 04:04:48<SeP>2024-07-25 15:54:00<SeP>2024-07-27 03:43:12<SeP>2024-07-28 15:32:24<SeP>2024-07-30 03:21:36<SeP>2024-07-31 15:10:48<SeP>2024-08-02 03:00:00<SeP>2024-08-03 14:49:12<SeP>2024-08-05 02:38:24<SeP>2024-08-06 14:27:36<SeP>2024-08-08 02:16:48<SeP>2024-08-09 14:06:00<SeP>2024-08-11 01:55:12<SeP>2024-08-12 13:44:24<SeP>2024-08-14 01:33:36<SeP>2024-08-15 13:22:48<SeP>2024-08-17 01:12:00<SeP>2024-08-18 13:01:12<SeP>2024-08-20 00:50:24<SeP>2024-08-21 12:39:36<SeP>2024-08-23 00:28:48<SeP>2024-08-24 12:18:00<SeP>2024-08-26 00:07:12<SeP>2024-08-27 11:56:24<SeP>2024-08-28 23:45:36<SeP>2024-08-30 11:34:48<SeP>2024-08-31 23:24:00<SeP>2024-09-02 11:13:12<SeP>2024-09-03 23:02:24<SeP>2024-09-05 10:51:36<SeP>2024-09-06 22:40:48<SeP>2024-09-08 10:30:00<SeP>2024-09-09 22:19:12<SeP>2024-09-11 10:08:24<SeP>2024-09-12 21:57:36<SeP>2024-09-14 09:46:48<SeP>2024-09-15 21:36:00<SeP>2024-09-17 09:25:12<SeP>2024-09-18 21:14:24<SeP>2024-09-20 09:03:36<SeP>2024-09-21 20:52:48<SeP>2024-09-23 08:42:00<SeP>2024-09-24 20:31:12<SeP>2024-09-26 08:20:24<SeP>2024-09-27 20:09:36<SeP>2024-09-29 07:58:48<SeP>2024-09-30 19:48:00<SeP>2024-10-02 07:37:12<SeP>2024-10-03 19:26:24<SeP>2024-10-05 07:15:36<SeP>2024-10-06 19:04:48<SeP>2024-10-08 06:54:00<SeP>2024-10-09 18:43:12<SeP>2024-10-11 06:32:24<SeP>2024-10-12 18:21:36<SeP>2024-10-14 06:10:48<SeP>2024-10-15 18:00:00<SeP>2024-10-17 05:49:12<SeP>2024-10-18 17:38:24<SeP>2024-10-20 05:27:36<SeP>2024-10-21 17:16:48<SeP>2024-10-23 05:06:00<SeP>2024-10-24 16:55:12<SeP>2024-10-26 04:44:24<SeP>2024-10-27 16:33:36<SeP>2024-10-29 04:22:48<SeP>2024-10-30 16:12:00<SeP>2024-11-01 04:01:12<SeP>2024-11-02 15:50:24<SeP>2024-11-04 02:39:36<SeP>2024-11-05 14:28:48<SeP>2024-11-07 02:18:00<SeP>2024-11-08 14:07:12<SeP>2024-11-10 01:56:24<SeP>2024-11-11 13:45:36<SeP>2024-11-13 01:34:48<SeP>2024-11-14 13:24:00<SeP>2024-11-16 01:13:12<SeP>2024-11-17 13:02:24<SeP>2024-11-19 00:51:36<SeP>2024-11-20 12:40:48<SeP>2024-11-22 00:30:00<SeP>2024-11-23 12:19:12<SeP>2024-11-25 00:08:24<SeP>2024-11-26 11:57:36<SeP>2024-11-27 23:46:48<SeP>2024-11-29 11:36:00<SeP>2024-11-30 23:25:12<SeP>2024-12-02 11:14:24<SeP>2024-12-03 23:03:36<SeP>2024-12-05 10:52:48<SeP>2024-12-06 22:42:00<SeP>2024-12-08 10:31:12<SeP>2024-12-09 22:20:24<SeP>2024-12-11 10:09:36<SeP>2024-12-12 21:58:48<SeP>2024-12-14 09:48:00<SeP>2024-12-15 21:37:12<SeP>2024-12-17 09:26:24<SeP>2024-12-18 21:15:36<SeP>2024-12-20 09:04:48<SeP>2024-12-21 20:54:00<SeP>2024-12-23 08:43:12<SeP>2024-12-24 20:32:24<SeP>2024-12-26 08:21:36<SeP>2024-12-27 20:10:48<SeP>2024-12-29 08:00:00<SeP>2024-12-30 19:49:12<SeP>2025-01-01 07:38:24<SeP>2025-01-02 19:27:36<SeP>2025-01-04 07:16:48<SeP>2025-01-05 19:06:00<SeP>2025-01-07 06:55:12<SeP>2025-01-08 18:44:24<SeP>2025-01-10 06:33:36<SeP>2025-01-11 18:22:48<SeP>2025-01-13 06:12:00<SeP>2025-01-14 18:01:12<SeP>2025-01-16 05:50:24<SeP>2025-01-17 17:39:36<SeP>2025-01-19 05:28:48<SeP>2025-01-20 17:18:00<SeP>2025-01-22 05:07:12<SeP>2025-01-23 16:56:24<SeP>2025-01-25 04:45:36<SeP>2025-01-26 16:34:48<SeP>2025-01-28 04:24:00<SeP>2025-01-29 16:13:12<SeP>2025-01-31 04:02:24<SeP>2025-02-01 15:51:36<SeP>2025-02-03 03:40:48<SeP>2025-02-04 15:30:00<SeP>2025-02-06 03:19:12<SeP>2025-02-07 15:08:24<SeP>2025-02-09 02:57:36<SeP>2025-02-10 14:46:48<SeP>2025-02-12 02:36:00<SeP>2025-02-13 14:25:12<SeP>2025-02-15 02:14:24<SeP>2025-02-16 14:03:36<SeP>2025-02-18 01:52:48<SeP>2025-02-19 13:42:00<SeP>2025-02-21 01:31:12<SeP>2025-02-22 13:20:24<SeP>2025-02-24 01:09:36<SeP>2025-02-25 12:58:48<SeP>2025-02-27 00:48:00<SeP>2025-02-28 12:37:12<SeP>2025-03-02 00:26:24<SeP>2025-03-03 12:15:36<SeP>2025-03-05 00:04:48<SeP>2025-03-06 11:54:00<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:32:24<SeP>2025-03-11 00:21:36<SeP>2025-03-12 12:10:48";
  const itemLabel       = "Attacks";
  const itemData        = "234<SeP>537<SeP>1407<SeP>648<SeP>227<SeP>233<SeP>7052<SeP>760<SeP>9280<SeP>499<SeP>404<SeP>1342<SeP>1086<SeP>244<SeP>340<SeP>275<SeP>261<SeP>694<SeP>667<SeP>8463<SeP>7897<SeP>6626<SeP>9667<SeP>455<SeP>307<SeP>404<SeP>213<SeP>390<SeP>5885<SeP>77<SeP>385<SeP>306<SeP>391<SeP>3030<SeP>9811<SeP>8547<SeP>10619<SeP>9452<SeP>6071<SeP>7453<SeP>7112<SeP>8997<SeP>9098<SeP>8059<SeP>8697<SeP>8458<SeP>8633<SeP>8686<SeP>6321<SeP>6102<SeP>11622<SeP>7487<SeP>8539<SeP>6975<SeP>10765<SeP>13979<SeP>21016<SeP>8772<SeP>9344<SeP>10223<SeP>7497<SeP>8702<SeP>8155<SeP>9042<SeP>8126<SeP>6549<SeP>7038<SeP>6987<SeP>5246<SeP>4034<SeP>6874<SeP>5599<SeP>6590<SeP>7561<SeP>5377<SeP>5609<SeP>5601<SeP>6777<SeP>4960<SeP>7168<SeP>4839<SeP>6133<SeP>6795<SeP>5631<SeP>5772<SeP>5661<SeP>22071<SeP>11391<SeP>35048<SeP>7827<SeP>7850<SeP>7647<SeP>11103<SeP>7453<SeP>4524<SeP>6708<SeP>3454<SeP>5493<SeP>7099<SeP>4924<SeP>8889<SeP>6832<SeP>5576<SeP>4360<SeP>7025<SeP>8825<SeP>8269<SeP>8465<SeP>3876<SeP>7445<SeP>10809<SeP>7942<SeP>3273<SeP>4732<SeP>7606<SeP>7849<SeP>5753<SeP>8606<SeP>8078<SeP>1853<SeP>2782<SeP>1034<SeP>1990<SeP>2600<SeP>1533<SeP>725<SeP>1095<SeP>1264<SeP>1855<SeP>591<SeP>1335<SeP>1123<SeP>1119<SeP>816<SeP>1379<SeP>1426<SeP>1246<SeP>898<SeP>2487<SeP>1795<SeP>7887<SeP>9050<SeP>8977<SeP>9841<SeP>6156<SeP>11192<SeP>7342<SeP>8643<SeP>9787<SeP>10717<SeP>11330<SeP>9478<SeP>11049<SeP>14273<SeP>9452<SeP>8424<SeP>4509<SeP>6822<SeP>11956<SeP>20409<SeP>6489<SeP>8140<SeP>10880<SeP>17435<SeP>7361<SeP>5697<SeP>7646<SeP>7008<SeP>26033<SeP>7801<SeP>9079<SeP>10980<SeP>5493<SeP>6131<SeP>6186<SeP>16193<SeP>4684<SeP>13834<SeP>7323<SeP>7010<SeP>8950<SeP>6305<SeP>4089<SeP>6536<SeP>7438<SeP>5683<SeP>6803<SeP>7675<SeP>4138<SeP>21528<SeP>7070<SeP>6672<SeP>7151<SeP>8269<SeP>10782<SeP>7381<SeP>2511<SeP>5984<SeP>4391<SeP>4564<SeP>4472<SeP>1499<SeP>618<SeP>645<SeP>201<SeP>543<SeP>641<SeP>798<SeP>466<SeP>901<SeP>1595<SeP>3204<SeP>8951<SeP>14593<SeP>2126<SeP>4256<SeP>2932<SeP>3696<SeP>7131<SeP>4267<SeP>2315<SeP>3923<SeP>2982<SeP>3051<SeP>4239<SeP>3088<SeP>2369<SeP>3624<SeP>1907<SeP>2047<SeP>1917<SeP>1341<SeP>1409<SeP>1400<SeP>872<SeP>1852<SeP>14338<SeP>13784<SeP>2410<SeP>3795<SeP>3679<SeP>2558<SeP>3855<SeP>1727<SeP>3735<SeP>2652<SeP>3566<SeP>2331<SeP>2939<SeP>3270<SeP>3077<SeP>6942<SeP>5098<SeP>4626<SeP>2761<SeP>3050<SeP>3905<SeP>4117<SeP>8390<SeP>6695<SeP>3774<SeP>2723<SeP>2850<SeP>4567<SeP>3629<SeP>3492<SeP>3116<SeP>2862<SeP>5777<SeP>3740<SeP>5960<SeP>3582<SeP>5701<SeP>4684<SeP>6979<SeP>4055<SeP>20716<SeP>6932<SeP>12688<SeP>1828<SeP>2225<SeP>5014<SeP>3770<SeP>4714<SeP>3425<SeP>5232<SeP>4659<SeP>4635<SeP>3487<SeP>3924<SeP>2304<SeP>1462<SeP>2219<SeP>3835<SeP>2461<SeP>3031<SeP>3497<SeP>4767<SeP>3708<SeP>3499<SeP>4186<SeP>3537<SeP>3255<SeP>6395<SeP>8095<SeP>5883<SeP>4712<SeP>4825<SeP>4808<SeP>3608<SeP>4374<SeP>4034<SeP>6649<SeP>4919<SeP>5430<SeP>1984<SeP>748<SeP>1591<SeP>1774<SeP>1128<SeP>1409<SeP>1761<SeP>1133<SeP>2138<SeP>4402<SeP>6164<SeP>5130<SeP>33962<SeP>5533<SeP>10536<SeP>18101<SeP>5319<SeP>5763<SeP>5480<SeP>9830<SeP>19251<SeP>5643<SeP>4886<SeP>4737<SeP>6348<SeP>20557<SeP>15170<SeP>3952<SeP>3778<SeP>3979<SeP>5744<SeP>5020<SeP>3089<SeP>3292<SeP>4477<SeP>5787<SeP>4743<SeP>18176<SeP>5436<SeP>6388<SeP>5608<SeP>1407<SeP>3939<SeP>4297<SeP>4051<SeP>4597<SeP>2842<SeP>3903<SeP>2601<SeP>4195<SeP>3794<SeP>7468<SeP>10135<SeP>9002<SeP>8514<SeP>9652<SeP>7366<SeP>6243<SeP>5297<SeP>4317<SeP>24609<SeP>4851<SeP>3105<SeP>4456<SeP>3741<SeP>11362<SeP>5662<SeP>3784<SeP>5086<SeP>3924<SeP>4678<SeP>9518<SeP>8869<SeP>4197<SeP>3064<SeP>3488<SeP>1916<SeP>2404<SeP>2539<SeP>2112<SeP>2464<SeP>1667<SeP>3181<SeP>2504<SeP>3332";
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:49:12<SeP>2023-07-28 23:38:24<SeP>2023-07-30 11:27:36<SeP>2023-07-31 23:16:48<SeP>2023-08-02 11:06:00<SeP>2023-08-03 22:55:12<SeP>2023-08-05 10:44:24<SeP>2023-08-06 22:33:36<SeP>2023-08-08 10:22:48<SeP>2023-08-09 22:12:00<SeP>2023-08-11 10:01:12<SeP>2023-08-12 21:50:24<SeP>2023-08-14 09:39:36<SeP>2023-08-15 21:28:48<SeP>2023-08-17 09:18:00<SeP>2023-08-18 21:07:12<SeP>2023-08-20 08:56:24<SeP>2023-08-21 20:45:36<SeP>2023-08-23 08:34:48<SeP>2023-08-24 20:24:00<SeP>2023-08-26 08:13:12<SeP>2023-08-27 20:02:24<SeP>2023-08-29 07:51:36<SeP>2023-08-30 19:40:48<SeP>2023-09-01 07:30:00<SeP>2023-09-02 19:19:12<SeP>2023-09-04 07:08:24<SeP>2023-09-05 18:57:36<SeP>2023-09-07 06:46:48<SeP>2023-09-08 18:36:00<SeP>2023-09-10 06:25:12<SeP>2023-09-11 18:14:24<SeP>2023-09-13 06:03:36<SeP>2023-09-14 17:52:48<SeP>2023-09-16 05:42:00<SeP>2023-09-17 17:31:12<SeP>2023-09-19 05:20:24<SeP>2023-09-20 17:09:36<SeP>2023-09-22 04:58:48<SeP>2023-09-23 16:48:00<SeP>2023-09-25 04:37:12<SeP>2023-09-26 16:26:24<SeP>2023-09-28 04:15:36<SeP>2023-09-29 16:04:48<SeP>2023-10-01 03:54:00<SeP>2023-10-02 15:43:12<SeP>2023-10-04 03:32:24<SeP>2023-10-05 15:21:36<SeP>2023-10-07 03:10:48<SeP>2023-10-08 15:00:00<SeP>2023-10-10 02:49:12<SeP>2023-10-11 14:38:24<SeP>2023-10-13 02:27:36<SeP>2023-10-14 14:16:48<SeP>2023-10-16 02:06:00<SeP>2023-10-17 13:55:12<SeP>2023-10-19 01:44:24<SeP>2023-10-20 13:33:36<SeP>2023-10-22 01:22:48<SeP>2023-10-23 13:12:00<SeP>2023-10-25 01:01:12<SeP>2023-10-26 12:50:24<SeP>2023-10-28 00:39:36<SeP>2023-10-29 12:28:48<SeP>2023-10-31 00:18:00<SeP>2023-11-01 12:07:12<SeP>2023-11-02 23:56:24<SeP>2023-11-04 11:45:36<SeP>2023-11-05 22:34:48<SeP>2023-11-07 10:24:00<SeP>2023-11-08 22:13:12<SeP>2023-11-10 10:02:24<SeP>2023-11-11 21:51:36<SeP>2023-11-13 09:40:48<SeP>2023-11-14 21:30:00<SeP>2023-11-16 09:19:12<SeP>2023-11-17 21:08:24<SeP>2023-11-19 08:57:36<SeP>2023-11-20 20:46:48<SeP>2023-11-22 08:36:00<SeP>2023-11-23 20:25:12<SeP>2023-11-25 08:14:24<SeP>2023-11-26 20:03:36<SeP>2023-11-28 07:52:48<SeP>2023-11-29 19:42:00<SeP>2023-12-01 07:31:12<SeP>2023-12-02 19:20:24<SeP>2023-12-04 07:09:36<SeP>2023-12-05 18:58:48<SeP>2023-12-07 06:48:00<SeP>2023-12-08 18:37:12<SeP>2023-12-10 06:26:24<SeP>2023-12-11 18:15:36<SeP>2023-12-13 06:04:48<SeP>2023-12-14 17:54:00<SeP>2023-12-16 05:43:12<SeP>2023-12-17 17:32:24<SeP>2023-12-19 05:21:36<SeP>2023-12-20 17:10:48<SeP>2023-12-22 05:00:00<SeP>2023-12-23 16:49:12<SeP>2023-12-25 04:38:24<SeP>2023-12-26 16:27:36<SeP>2023-12-28 04:16:48<SeP>2023-12-29 16:06:00<SeP>2023-12-31 03:55:12<SeP>2024-01-01 15:44:24<SeP>2024-01-03 03:33:36<SeP>2024-01-04 15:22:48<SeP>2024-01-06 03:12:00<SeP>2024-01-07 15:01:12<SeP>2024-01-09 02:50:24<SeP>2024-01-10 14:39:36<SeP>2024-01-12 02:28:48<SeP>2024-01-13 14:18:00<SeP>2024-01-15 02:07:12<SeP>2024-01-16 13:56:24<SeP>2024-01-18 01:45:36<SeP>2024-01-19 13:34:48<SeP>2024-01-21 01:24:00<SeP>2024-01-22 13:13:12<SeP>2024-01-24 01:02:24<SeP>2024-01-25 12:51:36<SeP>2024-01-27 00:40:48<SeP>2024-01-28 12:30:00<SeP>2024-01-30 00:19:12<SeP>2024-01-31 12:08:24<SeP>2024-02-01 23:57:36<SeP>2024-02-03 11:46:48<SeP>2024-02-04 23:36:00<SeP>2024-02-06 11:25:12<SeP>2024-02-07 23:14:24<SeP>2024-02-09 11:03:36<SeP>2024-02-10 22:52:48<SeP>2024-02-12 10:42:00<SeP>2024-02-13 22:31:12<SeP>2024-02-15 10:20:24<SeP>2024-02-16 22:09:36<SeP>2024-02-18 09:58:48<SeP>2024-02-19 21:48:00<SeP>2024-02-21 09:37:12<SeP>2024-02-22 21:26:24<SeP>2024-02-24 09:15:36<SeP>2024-02-25 21:04:48<SeP>2024-02-27 08:54:00<SeP>2024-02-28 20:43:12<SeP>2024-03-01 08:32:24<SeP>2024-03-02 20:21:36<SeP>2024-03-04 08:10:48<SeP>2024-03-05 20:00:00<SeP>2024-03-07 07:49:12<SeP>2024-03-08 19:38:24<SeP>2024-03-10 08:27:36<SeP>2024-03-11 20:16:48<SeP>2024-03-13 08:06:00<SeP>2024-03-14 19:55:12<SeP>2024-03-16 07:44:24<SeP>2024-03-17 19:33:36<SeP>2024-03-19 07:22:48<SeP>2024-03-20 19:12:00<SeP>2024-03-22 07:01:12<SeP>2024-03-23 18:50:24<SeP>2024-03-25 06:39:36<SeP>2024-03-26 18:28:48<SeP>2024-03-28 06:18:00<SeP>2024-03-29 18:07:12<SeP>2024-03-31 05:56:24<SeP>2024-04-01 17:45:36<SeP>2024-04-03 05:34:48<SeP>2024-04-04 17:24:00<SeP>2024-04-06 05:13:12<SeP>2024-04-07 17:02:24<SeP>2024-04-09 04:51:36<SeP>2024-04-10 16:40:48<SeP>2024-04-12 04:30:00<SeP>2024-04-13 16:19:12<SeP>2024-04-15 04:08:24<SeP>2024-04-16 15:57:36<SeP>2024-04-18 03:46:48<SeP>2024-04-19 15:36:00<SeP>2024-04-21 03:25:12<SeP>2024-04-22 15:14:24<SeP>2024-04-24 03:03:36<SeP>2024-04-25 14:52:48<SeP>2024-04-27 02:42:00<SeP>2024-04-28 14:31:12<SeP>2024-04-30 02:20:24<SeP>2024-05-01 14:09:36<SeP>2024-05-03 01:58:48<SeP>2024-05-04 13:48:00<SeP>2024-05-06 01:37:12<SeP>2024-05-07 13:26:24<SeP>2024-05-09 01:15:36<SeP>2024-05-10 13:04:48<SeP>2024-05-12 00:54:00<SeP>2024-05-13 12:43:12<SeP>2024-05-15 00:32:24<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:10:48<SeP>2024-05-19 12:00:00<SeP>2024-05-20 23:49:12<SeP>2024-05-22 11:38:24<SeP>2024-05-23 23:27:36<SeP>2024-05-25 11:16:48<SeP>2024-05-26 23:06:00<SeP>2024-05-28 10:55:12<SeP>2024-05-29 22:44:24<SeP>2024-05-31 10:33:36<SeP>2024-06-01 22:22:48<SeP>2024-06-03 10:12:00<SeP>2024-06-04 22:01:12<SeP>2024-06-06 09:50:24<SeP>2024-06-07 21:39:36<SeP>2024-06-09 09:28:48<SeP>2024-06-10 21:18:00<SeP>2024-06-12 09:07:12<SeP>2024-06-13 20:56:24<SeP>2024-06-15 08:45:36<SeP>2024-06-16 20:34:48<SeP>2024-06-18 08:24:00<SeP>2024-06-19 20:13:12<SeP>2024-06-21 08:02:24<SeP>2024-06-22 19:51:36<SeP>2024-06-24 07:40:48<SeP>2024-06-25 19:30:00<SeP>2024-06-27 07:19:12<SeP>2024-06-28 19:08:24<SeP>2024-06-30 06:57:36<SeP>2024-07-01 18:46:48<SeP>2024-07-03 06:36:00<SeP>2024-07-04 18:25:12<SeP>2024-07-06 06:14:24<SeP>2024-07-07 18:03:36<SeP>2024-07-09 05:52:48<SeP>2024-07-10 17:42:00<SeP>2024-07-12 05:31:12<SeP>2024-07-13 17:20:24<SeP>2024-07-15 05:09:36<SeP>2024-07-16 16:58:48<SeP>2024-07-18 04:48:00<SeP>2024-07-19 16:37:12<SeP>2024-07-21 04:26:24<SeP>2024-07-22 16:15:36<SeP>2024-07-24 04:04:48<SeP>2024-07-25 15:54:00<SeP>2024-07-27 03:43:12<SeP>2024-07-28 15:32:24<SeP>2024-07-30 03:21:36<SeP>2024-07-31 15:10:48<SeP>2024-08-02 03:00:00<SeP>2024-08-03 14:49:12<SeP>2024-08-05 02:38:24<SeP>2024-08-06 14:27:36<SeP>2024-08-08 02:16:48<SeP>2024-08-09 14:06:00<SeP>2024-08-11 01:55:12<SeP>2024-08-12 13:44:24<SeP>2024-08-14 01:33:36<SeP>2024-08-15 13:22:48<SeP>2024-08-17 01:12:00<SeP>2024-08-18 13:01:12<SeP>2024-08-20 00:50:24<SeP>2024-08-21 12:39:36<SeP>2024-08-23 00:28:48<SeP>2024-08-24 12:18:00<SeP>2024-08-26 00:07:12<SeP>2024-08-27 11:56:24<SeP>2024-08-28 23:45:36<SeP>2024-08-30 11:34:48<SeP>2024-08-31 23:24:00<SeP>2024-09-02 11:13:12<SeP>2024-09-03 23:02:24<SeP>2024-09-05 10:51:36<SeP>2024-09-06 22:40:48<SeP>2024-09-08 10:30:00<SeP>2024-09-09 22:19:12<SeP>2024-09-11 10:08:24<SeP>2024-09-12 21:57:36<SeP>2024-09-14 09:46:48<SeP>2024-09-15 21:36:00<SeP>2024-09-17 09:25:12<SeP>2024-09-18 21:14:24<SeP>2024-09-20 09:03:36<SeP>2024-09-21 20:52:48<SeP>2024-09-23 08:42:00<SeP>2024-09-24 20:31:12<SeP>2024-09-26 08:20:24<SeP>2024-09-27 20:09:36<SeP>2024-09-29 07:58:48<SeP>2024-09-30 19:48:00<SeP>2024-10-02 07:37:12<SeP>2024-10-03 19:26:24<SeP>2024-10-05 07:15:36<SeP>2024-10-06 19:04:48<SeP>2024-10-08 06:54:00<SeP>2024-10-09 18:43:12<SeP>2024-10-11 06:32:24<SeP>2024-10-12 18:21:36<SeP>2024-10-14 06:10:48<SeP>2024-10-15 18:00:00<SeP>2024-10-17 05:49:12<SeP>2024-10-18 17:38:24<SeP>2024-10-20 05:27:36<SeP>2024-10-21 17:16:48<SeP>2024-10-23 05:06:00<SeP>2024-10-24 16:55:12<SeP>2024-10-26 04:44:24<SeP>2024-10-27 16:33:36<SeP>2024-10-29 04:22:48<SeP>2024-10-30 16:12:00<SeP>2024-11-01 04:01:12<SeP>2024-11-02 15:50:24<SeP>2024-11-04 02:39:36<SeP>2024-11-05 14:28:48<SeP>2024-11-07 02:18:00<SeP>2024-11-08 14:07:12<SeP>2024-11-10 01:56:24<SeP>2024-11-11 13:45:36<SeP>2024-11-13 01:34:48<SeP>2024-11-14 13:24:00<SeP>2024-11-16 01:13:12<SeP>2024-11-17 13:02:24<SeP>2024-11-19 00:51:36<SeP>2024-11-20 12:40:48<SeP>2024-11-22 00:30:00<SeP>2024-11-23 12:19:12<SeP>2024-11-25 00:08:24<SeP>2024-11-26 11:57:36<SeP>2024-11-27 23:46:48<SeP>2024-11-29 11:36:00<SeP>2024-11-30 23:25:12<SeP>2024-12-02 11:14:24<SeP>2024-12-03 23:03:36<SeP>2024-12-05 10:52:48<SeP>2024-12-06 22:42:00<SeP>2024-12-08 10:31:12<SeP>2024-12-09 22:20:24<SeP>2024-12-11 10:09:36<SeP>2024-12-12 21:58:48<SeP>2024-12-14 09:48:00<SeP>2024-12-15 21:37:12<SeP>2024-12-17 09:26:24<SeP>2024-12-18 21:15:36<SeP>2024-12-20 09:04:48<SeP>2024-12-21 20:54:00<SeP>2024-12-23 08:43:12<SeP>2024-12-24 20:32:24<SeP>2024-12-26 08:21:36<SeP>2024-12-27 20:10:48<SeP>2024-12-29 08:00:00<SeP>2024-12-30 19:49:12<SeP>2025-01-01 07:38:24<SeP>2025-01-02 19:27:36<SeP>2025-01-04 07:16:48<SeP>2025-01-05 19:06:00<SeP>2025-01-07 06:55:12<SeP>2025-01-08 18:44:24<SeP>2025-01-10 06:33:36<SeP>2025-01-11 18:22:48<SeP>2025-01-13 06:12:00<SeP>2025-01-14 18:01:12<SeP>2025-01-16 05:50:24<SeP>2025-01-17 17:39:36<SeP>2025-01-19 05:28:48<SeP>2025-01-20 17:18:00<SeP>2025-01-22 05:07:12<SeP>2025-01-23 16:56:24<SeP>2025-01-25 04:45:36<SeP>2025-01-26 16:34:48<SeP>2025-01-28 04:24:00<SeP>2025-01-29 16:13:12<SeP>2025-01-31 04:02:24<SeP>2025-02-01 15:51:36<SeP>2025-02-03 03:40:48<SeP>2025-02-04 15:30:00<SeP>2025-02-06 03:19:12<SeP>2025-02-07 15:08:24<SeP>2025-02-09 02:57:36<SeP>2025-02-10 14:46:48<SeP>2025-02-12 02:36:00<SeP>2025-02-13 14:25:12<SeP>2025-02-15 02:14:24<SeP>2025-02-16 14:03:36<SeP>2025-02-18 01:52:48<SeP>2025-02-19 13:42:00<SeP>2025-02-21 01:31:12<SeP>2025-02-22 13:20:24<SeP>2025-02-24 01:09:36<SeP>2025-02-25 12:58:48<SeP>2025-02-27 00:48:00<SeP>2025-02-28 12:37:12<SeP>2025-03-02 00:26:24<SeP>2025-03-03 12:15:36<SeP>2025-03-05 00:04:48<SeP>2025-03-06 11:54:00<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:32:24<SeP>2025-03-11 00:21:36<SeP>2025-03-12 12:10:48";
  const item1Label       = "Escaneos";
  const item1Data        = "787<SeP>1524<SeP>1387<SeP>1500<SeP>1271<SeP>1748<SeP>949<SeP>967<SeP>1165<SeP>3409<SeP>3403<SeP>1025<SeP>3321<SeP>901<SeP>778<SeP>885<SeP>1446<SeP>3233<SeP>1453<SeP>1487<SeP>1071<SeP>937<SeP>1107<SeP>1219<SeP>951<SeP>737<SeP>940<SeP>3630<SeP>995<SeP>846<SeP>1419<SeP>1281<SeP>839<SeP>2856<SeP>1701<SeP>2678<SeP>1904<SeP>1769<SeP>1436<SeP>1330<SeP>1833<SeP>1935<SeP>2124<SeP>1642<SeP>1599<SeP>1584<SeP>1819<SeP>1745<SeP>1867<SeP>1906<SeP>1714<SeP>1584<SeP>3279<SeP>1515<SeP>1600<SeP>2150<SeP>1958<SeP>2180<SeP>1919<SeP>3352<SeP>1436<SeP>1512<SeP>1522<SeP>1467<SeP>1973<SeP>1572<SeP>1281<SeP>1469<SeP>1230<SeP>2362<SeP>1234<SeP>1169<SeP>1265<SeP>2431<SeP>7168<SeP>1233<SeP>1345<SeP>1429<SeP>2323<SeP>1259<SeP>1939<SeP>5923<SeP>1551<SeP>1670<SeP>951<SeP>3305<SeP>1225<SeP>1121<SeP>1041<SeP>1142<SeP>1016<SeP>3081<SeP>918<SeP>1353<SeP>3124<SeP>5233<SeP>2708<SeP>1029<SeP>939<SeP>928<SeP>1023<SeP>1019<SeP>1007<SeP>1028<SeP>3980<SeP>2140<SeP>1439<SeP>1565<SeP>594<SeP>1224<SeP>1485<SeP>1144<SeP>1007<SeP>1606<SeP>1774<SeP>1275<SeP>1059<SeP>985<SeP>1178<SeP>702<SeP>878<SeP>884<SeP>822<SeP>1142<SeP>837<SeP>934<SeP>790<SeP>934<SeP>893<SeP>683<SeP>792<SeP>881<SeP>922<SeP>910<SeP>838<SeP>886<SeP>778<SeP>814<SeP>1097<SeP>752<SeP>935<SeP>960<SeP>923<SeP>1164<SeP>973<SeP>783<SeP>537<SeP>960<SeP>851<SeP>1330<SeP>889<SeP>1103<SeP>1145<SeP>1235<SeP>982<SeP>845<SeP>1081<SeP>838<SeP>850<SeP>1078<SeP>929<SeP>907<SeP>954<SeP>1107<SeP>927<SeP>1134<SeP>1005<SeP>1059<SeP>1092<SeP>951<SeP>1045<SeP>2159<SeP>1339<SeP>1021<SeP>1027<SeP>1218<SeP>987<SeP>1019<SeP>780<SeP>690<SeP>1012<SeP>1121<SeP>875<SeP>1124<SeP>1231<SeP>1119<SeP>1198<SeP>1305<SeP>1131<SeP>1391<SeP>1137<SeP>1467<SeP>1507<SeP>1728<SeP>1766<SeP>1381<SeP>773<SeP>839<SeP>1154<SeP>1130<SeP>572<SeP>765<SeP>865<SeP>1009<SeP>1937<SeP>5742<SeP>2265<SeP>2052<SeP>1172<SeP>906<SeP>1057<SeP>896<SeP>945<SeP>1045<SeP>1123<SeP>1056<SeP>1041<SeP>2241<SeP>1266<SeP>1149<SeP>1239<SeP>1352<SeP>1115<SeP>1081<SeP>1000<SeP>1194<SeP>1116<SeP>1017<SeP>1134<SeP>1049<SeP>1206<SeP>901<SeP>1397<SeP>1055<SeP>1149<SeP>1096<SeP>1378<SeP>1280<SeP>1153<SeP>1625<SeP>1190<SeP>1122<SeP>1245<SeP>1820<SeP>1500<SeP>1473<SeP>1964<SeP>1446<SeP>1693<SeP>2028<SeP>1292<SeP>1185<SeP>1154<SeP>1337<SeP>1469<SeP>1474<SeP>1141<SeP>1496<SeP>1883<SeP>1340<SeP>1500<SeP>1444<SeP>1360<SeP>1198<SeP>1249<SeP>1199<SeP>1196<SeP>1232<SeP>1266<SeP>1279<SeP>1483<SeP>1854<SeP>1444<SeP>1198<SeP>1697<SeP>1509<SeP>1028<SeP>1092<SeP>1046<SeP>938<SeP>808<SeP>1090<SeP>1801<SeP>1137<SeP>1113<SeP>1130<SeP>971<SeP>836<SeP>1085<SeP>1399<SeP>842<SeP>984<SeP>942<SeP>1326<SeP>1608<SeP>1501<SeP>1076<SeP>1159<SeP>1018<SeP>1859<SeP>1143<SeP>1130<SeP>1063<SeP>1305<SeP>1359<SeP>946<SeP>1008<SeP>1257<SeP>1050<SeP>897<SeP>914<SeP>1414<SeP>1275<SeP>1735<SeP>1585<SeP>1287<SeP>991<SeP>1148<SeP>1265<SeP>1154<SeP>912<SeP>1291<SeP>1011<SeP>1216<SeP>1354<SeP>1521<SeP>1230<SeP>1668<SeP>1370<SeP>1623<SeP>1425<SeP>1335<SeP>1494<SeP>1507<SeP>1471<SeP>1374<SeP>1529<SeP>1680<SeP>1569<SeP>1329<SeP>1459<SeP>1386<SeP>1200<SeP>1311<SeP>1434<SeP>1724<SeP>1380<SeP>1358<SeP>1207<SeP>1484<SeP>1178<SeP>1322<SeP>1448<SeP>1768<SeP>1785<SeP>1299<SeP>646<SeP>1429<SeP>1966<SeP>1180<SeP>1472<SeP>1199<SeP>1206<SeP>1339<SeP>1448<SeP>1324<SeP>1512<SeP>1804<SeP>1334<SeP>1631<SeP>1807<SeP>1305<SeP>1421<SeP>1478<SeP>1824<SeP>1623<SeP>1026<SeP>1190<SeP>2026<SeP>1919<SeP>1782<SeP>1773<SeP>1730<SeP>1533<SeP>1721<SeP>1520<SeP>1605<SeP>1633<SeP>1722<SeP>1944<SeP>1466<SeP>1443<SeP>1380<SeP>1729<SeP>1435<SeP>2099<SeP>1605<SeP>2102<SeP>1418<SeP>1731";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "234<SeP>537<SeP>1407<SeP>648<SeP>227<SeP>233<SeP>7052<SeP>760<SeP>9280<SeP>499<SeP>404<SeP>1342<SeP>1086<SeP>244<SeP>340<SeP>275<SeP>261<SeP>694<SeP>667<SeP>8463<SeP>7897<SeP>6626<SeP>9667<SeP>455<SeP>307<SeP>404<SeP>213<SeP>390<SeP>5885<SeP>77<SeP>385<SeP>306<SeP>391<SeP>3030<SeP>9811<SeP>8547<SeP>10619<SeP>9452<SeP>6071<SeP>7453<SeP>7112<SeP>8997<SeP>9098<SeP>8059<SeP>8697<SeP>8458<SeP>8633<SeP>8686<SeP>6321<SeP>6102<SeP>11622<SeP>7487<SeP>8539<SeP>6975<SeP>10765<SeP>13979<SeP>21016<SeP>8772<SeP>9344<SeP>10223<SeP>7497<SeP>8702<SeP>8155<SeP>9042<SeP>8126<SeP>6549<SeP>7038<SeP>6987<SeP>5246<SeP>4034<SeP>6874<SeP>5599<SeP>6590<SeP>7561<SeP>5377<SeP>5609<SeP>5601<SeP>6777<SeP>4960<SeP>7168<SeP>4839<SeP>6133<SeP>6795<SeP>5631<SeP>5772<SeP>5661<SeP>22071<SeP>11391<SeP>35048<SeP>7827<SeP>7850<SeP>7647<SeP>11103<SeP>7453<SeP>4524<SeP>6708<SeP>3454<SeP>5493<SeP>7099<SeP>4924<SeP>8889<SeP>6832<SeP>5576<SeP>4360<SeP>7025<SeP>8825<SeP>8269<SeP>8465<SeP>3876<SeP>7445<SeP>10809<SeP>7942<SeP>3273<SeP>4732<SeP>7606<SeP>7849<SeP>5753<SeP>8606<SeP>8078<SeP>1853<SeP>2782<SeP>1034<SeP>1990<SeP>2600<SeP>1533<SeP>725<SeP>1095<SeP>1264<SeP>1855<SeP>591<SeP>1335<SeP>1123<SeP>1119<SeP>816<SeP>1379<SeP>1426<SeP>1246<SeP>898<SeP>2487<SeP>1795<SeP>7887<SeP>9050<SeP>8977<SeP>9841<SeP>6156<SeP>11192<SeP>7342<SeP>8643<SeP>9787<SeP>10717<SeP>11330<SeP>9478<SeP>11049<SeP>14273<SeP>9452<SeP>8424<SeP>4509<SeP>6822<SeP>11956<SeP>20409<SeP>6489<SeP>8140<SeP>10880<SeP>17435<SeP>7361<SeP>5697<SeP>7646<SeP>7008<SeP>26033<SeP>7801<SeP>9079<SeP>10980<SeP>5493<SeP>6131<SeP>6186<SeP>16193<SeP>4684<SeP>13834<SeP>7323<SeP>7010<SeP>8950<SeP>6305<SeP>4089<SeP>6536<SeP>7438<SeP>5683<SeP>6803<SeP>7675<SeP>4138<SeP>21528<SeP>7070<SeP>6672<SeP>7151<SeP>8269<SeP>10782<SeP>7381<SeP>2511<SeP>5984<SeP>4391<SeP>4564<SeP>4472<SeP>1499<SeP>618<SeP>645<SeP>201<SeP>543<SeP>641<SeP>798<SeP>466<SeP>901<SeP>1595<SeP>3204<SeP>8951<SeP>14593<SeP>2126<SeP>4256<SeP>2932<SeP>3696<SeP>7131<SeP>4267<SeP>2315<SeP>3923<SeP>2982<SeP>3051<SeP>4239<SeP>3088<SeP>2369<SeP>3624<SeP>1907<SeP>2047<SeP>1917<SeP>1341<SeP>1409<SeP>1400<SeP>872<SeP>1852<SeP>14338<SeP>13784<SeP>2410<SeP>3795<SeP>3679<SeP>2558<SeP>3855<SeP>1727<SeP>3735<SeP>2652<SeP>3566<SeP>2331<SeP>2939<SeP>3270<SeP>3077<SeP>6942<SeP>5098<SeP>4626<SeP>2761<SeP>3050<SeP>3905<SeP>4117<SeP>8390<SeP>6695<SeP>3774<SeP>2723<SeP>2850<SeP>4567<SeP>3629<SeP>3492<SeP>3116<SeP>2862<SeP>5777<SeP>3740<SeP>5960<SeP>3582<SeP>5701<SeP>4684<SeP>6979<SeP>4055<SeP>20716<SeP>6932<SeP>12688<SeP>1828<SeP>2225<SeP>5014<SeP>3770<SeP>4714<SeP>3425<SeP>5232<SeP>4659<SeP>4635<SeP>3487<SeP>3924<SeP>2304<SeP>1462<SeP>2219<SeP>3835<SeP>2461<SeP>3031<SeP>3497<SeP>4767<SeP>3708<SeP>3499<SeP>4186<SeP>3537<SeP>3255<SeP>6395<SeP>8095<SeP>5883<SeP>4712<SeP>4825<SeP>4808<SeP>3608<SeP>4374<SeP>4034<SeP>6649<SeP>4919<SeP>5430<SeP>1984<SeP>748<SeP>1591<SeP>1774<SeP>1128<SeP>1409<SeP>1761<SeP>1133<SeP>2138<SeP>4402<SeP>6164<SeP>5130<SeP>33962<SeP>5533<SeP>10536<SeP>18101<SeP>5319<SeP>5763<SeP>5480<SeP>9830<SeP>19251<SeP>5643<SeP>4886<SeP>4737<SeP>6348<SeP>20557<SeP>15170<SeP>3952<SeP>3778<SeP>3979<SeP>5744<SeP>5020<SeP>3089<SeP>3292<SeP>4477<SeP>5787<SeP>4743<SeP>18176<SeP>5436<SeP>6388<SeP>5608<SeP>1407<SeP>3939<SeP>4297<SeP>4051<SeP>4597<SeP>2842<SeP>3903<SeP>2601<SeP>4195<SeP>3794<SeP>7468<SeP>10135<SeP>9002<SeP>8514<SeP>9652<SeP>7366<SeP>6243<SeP>5297<SeP>4317<SeP>24609<SeP>4851<SeP>3105<SeP>4456<SeP>3741<SeP>11362<SeP>5662<SeP>3784<SeP>5086<SeP>3924<SeP>4678<SeP>9518<SeP>8869<SeP>4197<SeP>3064<SeP>3488<SeP>1916<SeP>2404<SeP>2539<SeP>2112<SeP>2464<SeP>1667<SeP>3181<SeP>2504<SeP>3332";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:49:12<SeP>2023-07-28 23:38:24<SeP>2023-07-30 11:27:36<SeP>2023-07-31 23:16:48<SeP>2023-08-02 11:06:00<SeP>2023-08-03 22:55:12<SeP>2023-08-05 10:44:24<SeP>2023-08-06 22:33:36<SeP>2023-08-08 10:22:48<SeP>2023-08-09 22:12:00<SeP>2023-08-11 10:01:12<SeP>2023-08-12 21:50:24<SeP>2023-08-14 09:39:36<SeP>2023-08-15 21:28:48<SeP>2023-08-17 09:18:00<SeP>2023-08-18 21:07:12<SeP>2023-08-20 08:56:24<SeP>2023-08-21 20:45:36<SeP>2023-08-23 08:34:48<SeP>2023-08-24 20:24:00<SeP>2023-08-26 08:13:12<SeP>2023-08-27 20:02:24<SeP>2023-08-29 07:51:36<SeP>2023-08-30 19:40:48<SeP>2023-09-01 07:30:00<SeP>2023-09-02 19:19:12<SeP>2023-09-04 07:08:24<SeP>2023-09-05 18:57:36<SeP>2023-09-07 06:46:48<SeP>2023-09-08 18:36:00<SeP>2023-09-10 06:25:12<SeP>2023-09-11 18:14:24<SeP>2023-09-13 06:03:36<SeP>2023-09-14 17:52:48<SeP>2023-09-16 05:42:00<SeP>2023-09-17 17:31:12<SeP>2023-09-19 05:20:24<SeP>2023-09-20 17:09:36<SeP>2023-09-22 04:58:48<SeP>2023-09-23 16:48:00<SeP>2023-09-25 04:37:12<SeP>2023-09-26 16:26:24<SeP>2023-09-28 04:15:36<SeP>2023-09-29 16:04:48<SeP>2023-10-01 03:54:00<SeP>2023-10-02 15:43:12<SeP>2023-10-04 03:32:24<SeP>2023-10-05 15:21:36<SeP>2023-10-07 03:10:48<SeP>2023-10-08 15:00:00<SeP>2023-10-10 02:49:12<SeP>2023-10-11 14:38:24<SeP>2023-10-13 02:27:36<SeP>2023-10-14 14:16:48<SeP>2023-10-16 02:06:00<SeP>2023-10-17 13:55:12<SeP>2023-10-19 01:44:24<SeP>2023-10-20 13:33:36<SeP>2023-10-22 01:22:48<SeP>2023-10-23 13:12:00<SeP>2023-10-25 01:01:12<SeP>2023-10-26 12:50:24<SeP>2023-10-28 00:39:36<SeP>2023-10-29 12:28:48<SeP>2023-10-31 00:18:00<SeP>2023-11-01 12:07:12<SeP>2023-11-02 23:56:24<SeP>2023-11-04 11:45:36<SeP>2023-11-05 22:34:48<SeP>2023-11-07 10:24:00<SeP>2023-11-08 22:13:12<SeP>2023-11-10 10:02:24<SeP>2023-11-11 21:51:36<SeP>2023-11-13 09:40:48<SeP>2023-11-14 21:30:00<SeP>2023-11-16 09:19:12<SeP>2023-11-17 21:08:24<SeP>2023-11-19 08:57:36<SeP>2023-11-20 20:46:48<SeP>2023-11-22 08:36:00<SeP>2023-11-23 20:25:12<SeP>2023-11-25 08:14:24<SeP>2023-11-26 20:03:36<SeP>2023-11-28 07:52:48<SeP>2023-11-29 19:42:00<SeP>2023-12-01 07:31:12<SeP>2023-12-02 19:20:24<SeP>2023-12-04 07:09:36<SeP>2023-12-05 18:58:48<SeP>2023-12-07 06:48:00<SeP>2023-12-08 18:37:12<SeP>2023-12-10 06:26:24<SeP>2023-12-11 18:15:36<SeP>2023-12-13 06:04:48<SeP>2023-12-14 17:54:00<SeP>2023-12-16 05:43:12<SeP>2023-12-17 17:32:24<SeP>2023-12-19 05:21:36<SeP>2023-12-20 17:10:48<SeP>2023-12-22 05:00:00<SeP>2023-12-23 16:49:12<SeP>2023-12-25 04:38:24<SeP>2023-12-26 16:27:36<SeP>2023-12-28 04:16:48<SeP>2023-12-29 16:06:00<SeP>2023-12-31 03:55:12<SeP>2024-01-01 15:44:24<SeP>2024-01-03 03:33:36<SeP>2024-01-04 15:22:48<SeP>2024-01-06 03:12:00<SeP>2024-01-07 15:01:12<SeP>2024-01-09 02:50:24<SeP>2024-01-10 14:39:36<SeP>2024-01-12 02:28:48<SeP>2024-01-13 14:18:00<SeP>2024-01-15 02:07:12<SeP>2024-01-16 13:56:24<SeP>2024-01-18 01:45:36<SeP>2024-01-19 13:34:48<SeP>2024-01-21 01:24:00<SeP>2024-01-22 13:13:12<SeP>2024-01-24 01:02:24<SeP>2024-01-25 12:51:36<SeP>2024-01-27 00:40:48<SeP>2024-01-28 12:30:00<SeP>2024-01-30 00:19:12<SeP>2024-01-31 12:08:24<SeP>2024-02-01 23:57:36<SeP>2024-02-03 11:46:48<SeP>2024-02-04 23:36:00<SeP>2024-02-06 11:25:12<SeP>2024-02-07 23:14:24<SeP>2024-02-09 11:03:36<SeP>2024-02-10 22:52:48<SeP>2024-02-12 10:42:00<SeP>2024-02-13 22:31:12<SeP>2024-02-15 10:20:24<SeP>2024-02-16 22:09:36<SeP>2024-02-18 09:58:48<SeP>2024-02-19 21:48:00<SeP>2024-02-21 09:37:12<SeP>2024-02-22 21:26:24<SeP>2024-02-24 09:15:36<SeP>2024-02-25 21:04:48<SeP>2024-02-27 08:54:00<SeP>2024-02-28 20:43:12<SeP>2024-03-01 08:32:24<SeP>2024-03-02 20:21:36<SeP>2024-03-04 08:10:48<SeP>2024-03-05 20:00:00<SeP>2024-03-07 07:49:12<SeP>2024-03-08 19:38:24<SeP>2024-03-10 08:27:36<SeP>2024-03-11 20:16:48<SeP>2024-03-13 08:06:00<SeP>2024-03-14 19:55:12<SeP>2024-03-16 07:44:24<SeP>2024-03-17 19:33:36<SeP>2024-03-19 07:22:48<SeP>2024-03-20 19:12:00<SeP>2024-03-22 07:01:12<SeP>2024-03-23 18:50:24<SeP>2024-03-25 06:39:36<SeP>2024-03-26 18:28:48<SeP>2024-03-28 06:18:00<SeP>2024-03-29 18:07:12<SeP>2024-03-31 05:56:24<SeP>2024-04-01 17:45:36<SeP>2024-04-03 05:34:48<SeP>2024-04-04 17:24:00<SeP>2024-04-06 05:13:12<SeP>2024-04-07 17:02:24<SeP>2024-04-09 04:51:36<SeP>2024-04-10 16:40:48<SeP>2024-04-12 04:30:00<SeP>2024-04-13 16:19:12<SeP>2024-04-15 04:08:24<SeP>2024-04-16 15:57:36<SeP>2024-04-18 03:46:48<SeP>2024-04-19 15:36:00<SeP>2024-04-21 03:25:12<SeP>2024-04-22 15:14:24<SeP>2024-04-24 03:03:36<SeP>2024-04-25 14:52:48<SeP>2024-04-27 02:42:00<SeP>2024-04-28 14:31:12<SeP>2024-04-30 02:20:24<SeP>2024-05-01 14:09:36<SeP>2024-05-03 01:58:48<SeP>2024-05-04 13:48:00<SeP>2024-05-06 01:37:12<SeP>2024-05-07 13:26:24<SeP>2024-05-09 01:15:36<SeP>2024-05-10 13:04:48<SeP>2024-05-12 00:54:00<SeP>2024-05-13 12:43:12<SeP>2024-05-15 00:32:24<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:10:48<SeP>2024-05-19 12:00:00<SeP>2024-05-20 23:49:12<SeP>2024-05-22 11:38:24<SeP>2024-05-23 23:27:36<SeP>2024-05-25 11:16:48<SeP>2024-05-26 23:06:00<SeP>2024-05-28 10:55:12<SeP>2024-05-29 22:44:24<SeP>2024-05-31 10:33:36<SeP>2024-06-01 22:22:48<SeP>2024-06-03 10:12:00<SeP>2024-06-04 22:01:12<SeP>2024-06-06 09:50:24<SeP>2024-06-07 21:39:36<SeP>2024-06-09 09:28:48<SeP>2024-06-10 21:18:00<SeP>2024-06-12 09:07:12<SeP>2024-06-13 20:56:24<SeP>2024-06-15 08:45:36<SeP>2024-06-16 20:34:48<SeP>2024-06-18 08:24:00<SeP>2024-06-19 20:13:12<SeP>2024-06-21 08:02:24<SeP>2024-06-22 19:51:36<SeP>2024-06-24 07:40:48<SeP>2024-06-25 19:30:00<SeP>2024-06-27 07:19:12<SeP>2024-06-28 19:08:24<SeP>2024-06-30 06:57:36<SeP>2024-07-01 18:46:48<SeP>2024-07-03 06:36:00<SeP>2024-07-04 18:25:12<SeP>2024-07-06 06:14:24<SeP>2024-07-07 18:03:36<SeP>2024-07-09 05:52:48<SeP>2024-07-10 17:42:00<SeP>2024-07-12 05:31:12<SeP>2024-07-13 17:20:24<SeP>2024-07-15 05:09:36<SeP>2024-07-16 16:58:48<SeP>2024-07-18 04:48:00<SeP>2024-07-19 16:37:12<SeP>2024-07-21 04:26:24<SeP>2024-07-22 16:15:36<SeP>2024-07-24 04:04:48<SeP>2024-07-25 15:54:00<SeP>2024-07-27 03:43:12<SeP>2024-07-28 15:32:24<SeP>2024-07-30 03:21:36<SeP>2024-07-31 15:10:48<SeP>2024-08-02 03:00:00<SeP>2024-08-03 14:49:12<SeP>2024-08-05 02:38:24<SeP>2024-08-06 14:27:36<SeP>2024-08-08 02:16:48<SeP>2024-08-09 14:06:00<SeP>2024-08-11 01:55:12<SeP>2024-08-12 13:44:24<SeP>2024-08-14 01:33:36<SeP>2024-08-15 13:22:48<SeP>2024-08-17 01:12:00<SeP>2024-08-18 13:01:12<SeP>2024-08-20 00:50:24<SeP>2024-08-21 12:39:36<SeP>2024-08-23 00:28:48<SeP>2024-08-24 12:18:00<SeP>2024-08-26 00:07:12<SeP>2024-08-27 11:56:24<SeP>2024-08-28 23:45:36<SeP>2024-08-30 11:34:48<SeP>2024-08-31 23:24:00<SeP>2024-09-02 11:13:12<SeP>2024-09-03 23:02:24<SeP>2024-09-05 10:51:36<SeP>2024-09-06 22:40:48<SeP>2024-09-08 10:30:00<SeP>2024-09-09 22:19:12<SeP>2024-09-11 10:08:24<SeP>2024-09-12 21:57:36<SeP>2024-09-14 09:46:48<SeP>2024-09-15 21:36:00<SeP>2024-09-17 09:25:12<SeP>2024-09-18 21:14:24<SeP>2024-09-20 09:03:36<SeP>2024-09-21 20:52:48<SeP>2024-09-23 08:42:00<SeP>2024-09-24 20:31:12<SeP>2024-09-26 08:20:24<SeP>2024-09-27 20:09:36<SeP>2024-09-29 07:58:48<SeP>2024-09-30 19:48:00<SeP>2024-10-02 07:37:12<SeP>2024-10-03 19:26:24<SeP>2024-10-05 07:15:36<SeP>2024-10-06 19:04:48<SeP>2024-10-08 06:54:00<SeP>2024-10-09 18:43:12<SeP>2024-10-11 06:32:24<SeP>2024-10-12 18:21:36<SeP>2024-10-14 06:10:48<SeP>2024-10-15 18:00:00<SeP>2024-10-17 05:49:12<SeP>2024-10-18 17:38:24<SeP>2024-10-20 05:27:36<SeP>2024-10-21 17:16:48<SeP>2024-10-23 05:06:00<SeP>2024-10-24 16:55:12<SeP>2024-10-26 04:44:24<SeP>2024-10-27 16:33:36<SeP>2024-10-29 04:22:48<SeP>2024-10-30 16:12:00<SeP>2024-11-01 04:01:12<SeP>2024-11-02 15:50:24<SeP>2024-11-04 02:39:36<SeP>2024-11-05 14:28:48<SeP>2024-11-07 02:18:00<SeP>2024-11-08 14:07:12<SeP>2024-11-10 01:56:24<SeP>2024-11-11 13:45:36<SeP>2024-11-13 01:34:48<SeP>2024-11-14 13:24:00<SeP>2024-11-16 01:13:12<SeP>2024-11-17 13:02:24<SeP>2024-11-19 00:51:36<SeP>2024-11-20 12:40:48<SeP>2024-11-22 00:30:00<SeP>2024-11-23 12:19:12<SeP>2024-11-25 00:08:24<SeP>2024-11-26 11:57:36<SeP>2024-11-27 23:46:48<SeP>2024-11-29 11:36:00<SeP>2024-11-30 23:25:12<SeP>2024-12-02 11:14:24<SeP>2024-12-03 23:03:36<SeP>2024-12-05 10:52:48<SeP>2024-12-06 22:42:00<SeP>2024-12-08 10:31:12<SeP>2024-12-09 22:20:24<SeP>2024-12-11 10:09:36<SeP>2024-12-12 21:58:48<SeP>2024-12-14 09:48:00<SeP>2024-12-15 21:37:12<SeP>2024-12-17 09:26:24<SeP>2024-12-18 21:15:36<SeP>2024-12-20 09:04:48<SeP>2024-12-21 20:54:00<SeP>2024-12-23 08:43:12<SeP>2024-12-24 20:32:24<SeP>2024-12-26 08:21:36<SeP>2024-12-27 20:10:48<SeP>2024-12-29 08:00:00<SeP>2024-12-30 19:49:12<SeP>2025-01-01 07:38:24<SeP>2025-01-02 19:27:36<SeP>2025-01-04 07:16:48<SeP>2025-01-05 19:06:00<SeP>2025-01-07 06:55:12<SeP>2025-01-08 18:44:24<SeP>2025-01-10 06:33:36<SeP>2025-01-11 18:22:48<SeP>2025-01-13 06:12:00<SeP>2025-01-14 18:01:12<SeP>2025-01-16 05:50:24<SeP>2025-01-17 17:39:36<SeP>2025-01-19 05:28:48<SeP>2025-01-20 17:18:00<SeP>2025-01-22 05:07:12<SeP>2025-01-23 16:56:24<SeP>2025-01-25 04:45:36<SeP>2025-01-26 16:34:48<SeP>2025-01-28 04:24:00<SeP>2025-01-29 16:13:12<SeP>2025-01-31 04:02:24<SeP>2025-02-01 15:51:36<SeP>2025-02-03 03:40:48<SeP>2025-02-04 15:30:00<SeP>2025-02-06 03:19:12<SeP>2025-02-07 15:08:24<SeP>2025-02-09 02:57:36<SeP>2025-02-10 14:46:48<SeP>2025-02-12 02:36:00<SeP>2025-02-13 14:25:12<SeP>2025-02-15 02:14:24<SeP>2025-02-16 14:03:36<SeP>2025-02-18 01:52:48<SeP>2025-02-19 13:42:00<SeP>2025-02-21 01:31:12<SeP>2025-02-22 13:20:24<SeP>2025-02-24 01:09:36<SeP>2025-02-25 12:58:48<SeP>2025-02-27 00:48:00<SeP>2025-02-28 12:37:12<SeP>2025-03-02 00:26:24<SeP>2025-03-03 12:15:36<SeP>2025-03-05 00:04:48<SeP>2025-03-06 11:54:00<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:32:24<SeP>2025-03-11 00:21:36<SeP>2025-03-12 12:10:48";
  const itemLabel       = "Escaneos";
  const itemData        = "787<SeP>1524<SeP>1387<SeP>1500<SeP>1271<SeP>1748<SeP>949<SeP>967<SeP>1165<SeP>3409<SeP>3403<SeP>1025<SeP>3321<SeP>901<SeP>778<SeP>885<SeP>1446<SeP>3233<SeP>1453<SeP>1487<SeP>1071<SeP>937<SeP>1107<SeP>1219<SeP>951<SeP>737<SeP>940<SeP>3630<SeP>995<SeP>846<SeP>1419<SeP>1281<SeP>839<SeP>2856<SeP>1701<SeP>2678<SeP>1904<SeP>1769<SeP>1436<SeP>1330<SeP>1833<SeP>1935<SeP>2124<SeP>1642<SeP>1599<SeP>1584<SeP>1819<SeP>1745<SeP>1867<SeP>1906<SeP>1714<SeP>1584<SeP>3279<SeP>1515<SeP>1600<SeP>2150<SeP>1958<SeP>2180<SeP>1919<SeP>3352<SeP>1436<SeP>1512<SeP>1522<SeP>1467<SeP>1973<SeP>1572<SeP>1281<SeP>1469<SeP>1230<SeP>2362<SeP>1234<SeP>1169<SeP>1265<SeP>2431<SeP>7168<SeP>1233<SeP>1345<SeP>1429<SeP>2323<SeP>1259<SeP>1939<SeP>5923<SeP>1551<SeP>1670<SeP>951<SeP>3305<SeP>1225<SeP>1121<SeP>1041<SeP>1142<SeP>1016<SeP>3081<SeP>918<SeP>1353<SeP>3124<SeP>5233<SeP>2708<SeP>1029<SeP>939<SeP>928<SeP>1023<SeP>1019<SeP>1007<SeP>1028<SeP>3980<SeP>2140<SeP>1439<SeP>1565<SeP>594<SeP>1224<SeP>1485<SeP>1144<SeP>1007<SeP>1606<SeP>1774<SeP>1275<SeP>1059<SeP>985<SeP>1178<SeP>702<SeP>878<SeP>884<SeP>822<SeP>1142<SeP>837<SeP>934<SeP>790<SeP>934<SeP>893<SeP>683<SeP>792<SeP>881<SeP>922<SeP>910<SeP>838<SeP>886<SeP>778<SeP>814<SeP>1097<SeP>752<SeP>935<SeP>960<SeP>923<SeP>1164<SeP>973<SeP>783<SeP>537<SeP>960<SeP>851<SeP>1330<SeP>889<SeP>1103<SeP>1145<SeP>1235<SeP>982<SeP>845<SeP>1081<SeP>838<SeP>850<SeP>1078<SeP>929<SeP>907<SeP>954<SeP>1107<SeP>927<SeP>1134<SeP>1005<SeP>1059<SeP>1092<SeP>951<SeP>1045<SeP>2159<SeP>1339<SeP>1021<SeP>1027<SeP>1218<SeP>987<SeP>1019<SeP>780<SeP>690<SeP>1012<SeP>1121<SeP>875<SeP>1124<SeP>1231<SeP>1119<SeP>1198<SeP>1305<SeP>1131<SeP>1391<SeP>1137<SeP>1467<SeP>1507<SeP>1728<SeP>1766<SeP>1381<SeP>773<SeP>839<SeP>1154<SeP>1130<SeP>572<SeP>765<SeP>865<SeP>1009<SeP>1937<SeP>5742<SeP>2265<SeP>2052<SeP>1172<SeP>906<SeP>1057<SeP>896<SeP>945<SeP>1045<SeP>1123<SeP>1056<SeP>1041<SeP>2241<SeP>1266<SeP>1149<SeP>1239<SeP>1352<SeP>1115<SeP>1081<SeP>1000<SeP>1194<SeP>1116<SeP>1017<SeP>1134<SeP>1049<SeP>1206<SeP>901<SeP>1397<SeP>1055<SeP>1149<SeP>1096<SeP>1378<SeP>1280<SeP>1153<SeP>1625<SeP>1190<SeP>1122<SeP>1245<SeP>1820<SeP>1500<SeP>1473<SeP>1964<SeP>1446<SeP>1693<SeP>2028<SeP>1292<SeP>1185<SeP>1154<SeP>1337<SeP>1469<SeP>1474<SeP>1141<SeP>1496<SeP>1883<SeP>1340<SeP>1500<SeP>1444<SeP>1360<SeP>1198<SeP>1249<SeP>1199<SeP>1196<SeP>1232<SeP>1266<SeP>1279<SeP>1483<SeP>1854<SeP>1444<SeP>1198<SeP>1697<SeP>1509<SeP>1028<SeP>1092<SeP>1046<SeP>938<SeP>808<SeP>1090<SeP>1801<SeP>1137<SeP>1113<SeP>1130<SeP>971<SeP>836<SeP>1085<SeP>1399<SeP>842<SeP>984<SeP>942<SeP>1326<SeP>1608<SeP>1501<SeP>1076<SeP>1159<SeP>1018<SeP>1859<SeP>1143<SeP>1130<SeP>1063<SeP>1305<SeP>1359<SeP>946<SeP>1008<SeP>1257<SeP>1050<SeP>897<SeP>914<SeP>1414<SeP>1275<SeP>1735<SeP>1585<SeP>1287<SeP>991<SeP>1148<SeP>1265<SeP>1154<SeP>912<SeP>1291<SeP>1011<SeP>1216<SeP>1354<SeP>1521<SeP>1230<SeP>1668<SeP>1370<SeP>1623<SeP>1425<SeP>1335<SeP>1494<SeP>1507<SeP>1471<SeP>1374<SeP>1529<SeP>1680<SeP>1569<SeP>1329<SeP>1459<SeP>1386<SeP>1200<SeP>1311<SeP>1434<SeP>1724<SeP>1380<SeP>1358<SeP>1207<SeP>1484<SeP>1178<SeP>1322<SeP>1448<SeP>1768<SeP>1785<SeP>1299<SeP>646<SeP>1429<SeP>1966<SeP>1180<SeP>1472<SeP>1199<SeP>1206<SeP>1339<SeP>1448<SeP>1324<SeP>1512<SeP>1804<SeP>1334<SeP>1631<SeP>1807<SeP>1305<SeP>1421<SeP>1478<SeP>1824<SeP>1623<SeP>1026<SeP>1190<SeP>2026<SeP>1919<SeP>1782<SeP>1773<SeP>1730<SeP>1533<SeP>1721<SeP>1520<SeP>1605<SeP>1633<SeP>1722<SeP>1944<SeP>1466<SeP>1443<SeP>1380<SeP>1729<SeP>1435<SeP>2099<SeP>1605<SeP>2102<SeP>1418<SeP>1731";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:49:12<SeP>2023-07-28 23:38:24<SeP>2023-07-30 11:27:36<SeP>2023-07-31 23:16:48<SeP>2023-08-02 11:06:00<SeP>2023-08-03 22:55:12<SeP>2023-08-05 10:44:24<SeP>2023-08-06 22:33:36<SeP>2023-08-08 10:22:48<SeP>2023-08-09 22:12:00<SeP>2023-08-11 10:01:12<SeP>2023-08-12 21:50:24<SeP>2023-08-14 09:39:36<SeP>2023-08-15 21:28:48<SeP>2023-08-17 09:18:00<SeP>2023-08-18 21:07:12<SeP>2023-08-20 08:56:24<SeP>2023-08-21 20:45:36<SeP>2023-08-23 08:34:48<SeP>2023-08-24 20:24:00<SeP>2023-08-26 08:13:12<SeP>2023-08-27 20:02:24<SeP>2023-08-29 07:51:36<SeP>2023-08-30 19:40:48<SeP>2023-09-01 07:30:00<SeP>2023-09-02 19:19:12<SeP>2023-09-04 07:08:24<SeP>2023-09-05 18:57:36<SeP>2023-09-07 06:46:48<SeP>2023-09-08 18:36:00<SeP>2023-09-10 06:25:12<SeP>2023-09-11 18:14:24<SeP>2023-09-13 06:03:36<SeP>2023-09-14 17:52:48<SeP>2023-09-16 05:42:00<SeP>2023-09-17 17:31:12<SeP>2023-09-19 05:20:24<SeP>2023-09-20 17:09:36<SeP>2023-09-22 04:58:48<SeP>2023-09-23 16:48:00<SeP>2023-09-25 04:37:12<SeP>2023-09-26 16:26:24<SeP>2023-09-28 04:15:36<SeP>2023-09-29 16:04:48<SeP>2023-10-01 03:54:00<SeP>2023-10-02 15:43:12<SeP>2023-10-04 03:32:24<SeP>2023-10-05 15:21:36<SeP>2023-10-07 03:10:48<SeP>2023-10-08 15:00:00<SeP>2023-10-10 02:49:12<SeP>2023-10-11 14:38:24<SeP>2023-10-13 02:27:36<SeP>2023-10-14 14:16:48<SeP>2023-10-16 02:06:00<SeP>2023-10-17 13:55:12<SeP>2023-10-19 01:44:24<SeP>2023-10-20 13:33:36<SeP>2023-10-22 01:22:48<SeP>2023-10-23 13:12:00<SeP>2023-10-25 01:01:12<SeP>2023-10-26 12:50:24<SeP>2023-10-28 00:39:36<SeP>2023-10-29 12:28:48<SeP>2023-10-31 00:18:00<SeP>2023-11-01 12:07:12<SeP>2023-11-02 23:56:24<SeP>2023-11-04 11:45:36<SeP>2023-11-05 22:34:48<SeP>2023-11-07 10:24:00<SeP>2023-11-08 22:13:12<SeP>2023-11-10 10:02:24<SeP>2023-11-11 21:51:36<SeP>2023-11-13 09:40:48<SeP>2023-11-14 21:30:00<SeP>2023-11-16 09:19:12<SeP>2023-11-17 21:08:24<SeP>2023-11-19 08:57:36<SeP>2023-11-20 20:46:48<SeP>2023-11-22 08:36:00<SeP>2023-11-23 20:25:12<SeP>2023-11-25 08:14:24<SeP>2023-11-26 20:03:36<SeP>2023-11-28 07:52:48<SeP>2023-11-29 19:42:00<SeP>2023-12-01 07:31:12<SeP>2023-12-02 19:20:24<SeP>2023-12-04 07:09:36<SeP>2023-12-05 18:58:48<SeP>2023-12-07 06:48:00<SeP>2023-12-08 18:37:12<SeP>2023-12-10 06:26:24<SeP>2023-12-11 18:15:36<SeP>2023-12-13 06:04:48<SeP>2023-12-14 17:54:00<SeP>2023-12-16 05:43:12<SeP>2023-12-17 17:32:24<SeP>2023-12-19 05:21:36<SeP>2023-12-20 17:10:48<SeP>2023-12-22 05:00:00<SeP>2023-12-23 16:49:12<SeP>2023-12-25 04:38:24<SeP>2023-12-26 16:27:36<SeP>2023-12-28 04:16:48<SeP>2023-12-29 16:06:00<SeP>2023-12-31 03:55:12<SeP>2024-01-01 15:44:24<SeP>2024-01-03 03:33:36<SeP>2024-01-04 15:22:48<SeP>2024-01-06 03:12:00<SeP>2024-01-07 15:01:12<SeP>2024-01-09 02:50:24<SeP>2024-01-10 14:39:36<SeP>2024-01-12 02:28:48<SeP>2024-01-13 14:18:00<SeP>2024-01-15 02:07:12<SeP>2024-01-16 13:56:24<SeP>2024-01-18 01:45:36<SeP>2024-01-19 13:34:48<SeP>2024-01-21 01:24:00<SeP>2024-01-22 13:13:12<SeP>2024-01-24 01:02:24<SeP>2024-01-25 12:51:36<SeP>2024-01-27 00:40:48<SeP>2024-01-28 12:30:00<SeP>2024-01-30 00:19:12<SeP>2024-01-31 12:08:24<SeP>2024-02-01 23:57:36<SeP>2024-02-03 11:46:48<SeP>2024-02-04 23:36:00<SeP>2024-02-06 11:25:12<SeP>2024-02-07 23:14:24<SeP>2024-02-09 11:03:36<SeP>2024-02-10 22:52:48<SeP>2024-02-12 10:42:00<SeP>2024-02-13 22:31:12<SeP>2024-02-15 10:20:24<SeP>2024-02-16 22:09:36<SeP>2024-02-18 09:58:48<SeP>2024-02-19 21:48:00<SeP>2024-02-21 09:37:12<SeP>2024-02-22 21:26:24<SeP>2024-02-24 09:15:36<SeP>2024-02-25 21:04:48<SeP>2024-02-27 08:54:00<SeP>2024-02-28 20:43:12<SeP>2024-03-01 08:32:24<SeP>2024-03-02 20:21:36<SeP>2024-03-04 08:10:48<SeP>2024-03-05 20:00:00<SeP>2024-03-07 07:49:12<SeP>2024-03-08 19:38:24<SeP>2024-03-10 08:27:36<SeP>2024-03-11 20:16:48<SeP>2024-03-13 08:06:00<SeP>2024-03-14 19:55:12<SeP>2024-03-16 07:44:24<SeP>2024-03-17 19:33:36<SeP>2024-03-19 07:22:48<SeP>2024-03-20 19:12:00<SeP>2024-03-22 07:01:12<SeP>2024-03-23 18:50:24<SeP>2024-03-25 06:39:36<SeP>2024-03-26 18:28:48<SeP>2024-03-28 06:18:00<SeP>2024-03-29 18:07:12<SeP>2024-03-31 05:56:24<SeP>2024-04-01 17:45:36<SeP>2024-04-03 05:34:48<SeP>2024-04-04 17:24:00<SeP>2024-04-06 05:13:12<SeP>2024-04-07 17:02:24<SeP>2024-04-09 04:51:36<SeP>2024-04-10 16:40:48<SeP>2024-04-12 04:30:00<SeP>2024-04-13 16:19:12<SeP>2024-04-15 04:08:24<SeP>2024-04-16 15:57:36<SeP>2024-04-18 03:46:48<SeP>2024-04-19 15:36:00<SeP>2024-04-21 03:25:12<SeP>2024-04-22 15:14:24<SeP>2024-04-24 03:03:36<SeP>2024-04-25 14:52:48<SeP>2024-04-27 02:42:00<SeP>2024-04-28 14:31:12<SeP>2024-04-30 02:20:24<SeP>2024-05-01 14:09:36<SeP>2024-05-03 01:58:48<SeP>2024-05-04 13:48:00<SeP>2024-05-06 01:37:12<SeP>2024-05-07 13:26:24<SeP>2024-05-09 01:15:36<SeP>2024-05-10 13:04:48<SeP>2024-05-12 00:54:00<SeP>2024-05-13 12:43:12<SeP>2024-05-15 00:32:24<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:10:48<SeP>2024-05-19 12:00:00<SeP>2024-05-20 23:49:12<SeP>2024-05-22 11:38:24<SeP>2024-05-23 23:27:36<SeP>2024-05-25 11:16:48<SeP>2024-05-26 23:06:00<SeP>2024-05-28 10:55:12<SeP>2024-05-29 22:44:24<SeP>2024-05-31 10:33:36<SeP>2024-06-01 22:22:48<SeP>2024-06-03 10:12:00<SeP>2024-06-04 22:01:12<SeP>2024-06-06 09:50:24<SeP>2024-06-07 21:39:36<SeP>2024-06-09 09:28:48<SeP>2024-06-10 21:18:00<SeP>2024-06-12 09:07:12<SeP>2024-06-13 20:56:24<SeP>2024-06-15 08:45:36<SeP>2024-06-16 20:34:48<SeP>2024-06-18 08:24:00<SeP>2024-06-19 20:13:12<SeP>2024-06-21 08:02:24<SeP>2024-06-22 19:51:36<SeP>2024-06-24 07:40:48<SeP>2024-06-25 19:30:00<SeP>2024-06-27 07:19:12<SeP>2024-06-28 19:08:24<SeP>2024-06-30 06:57:36<SeP>2024-07-01 18:46:48<SeP>2024-07-03 06:36:00<SeP>2024-07-04 18:25:12<SeP>2024-07-06 06:14:24<SeP>2024-07-07 18:03:36<SeP>2024-07-09 05:52:48<SeP>2024-07-10 17:42:00<SeP>2024-07-12 05:31:12<SeP>2024-07-13 17:20:24<SeP>2024-07-15 05:09:36<SeP>2024-07-16 16:58:48<SeP>2024-07-18 04:48:00<SeP>2024-07-19 16:37:12<SeP>2024-07-21 04:26:24<SeP>2024-07-22 16:15:36<SeP>2024-07-24 04:04:48<SeP>2024-07-25 15:54:00<SeP>2024-07-27 03:43:12<SeP>2024-07-28 15:32:24<SeP>2024-07-30 03:21:36<SeP>2024-07-31 15:10:48<SeP>2024-08-02 03:00:00<SeP>2024-08-03 14:49:12<SeP>2024-08-05 02:38:24<SeP>2024-08-06 14:27:36<SeP>2024-08-08 02:16:48<SeP>2024-08-09 14:06:00<SeP>2024-08-11 01:55:12<SeP>2024-08-12 13:44:24<SeP>2024-08-14 01:33:36<SeP>2024-08-15 13:22:48<SeP>2024-08-17 01:12:00<SeP>2024-08-18 13:01:12<SeP>2024-08-20 00:50:24<SeP>2024-08-21 12:39:36<SeP>2024-08-23 00:28:48<SeP>2024-08-24 12:18:00<SeP>2024-08-26 00:07:12<SeP>2024-08-27 11:56:24<SeP>2024-08-28 23:45:36<SeP>2024-08-30 11:34:48<SeP>2024-08-31 23:24:00<SeP>2024-09-02 11:13:12<SeP>2024-09-03 23:02:24<SeP>2024-09-05 10:51:36<SeP>2024-09-06 22:40:48<SeP>2024-09-08 10:30:00<SeP>2024-09-09 22:19:12<SeP>2024-09-11 10:08:24<SeP>2024-09-12 21:57:36<SeP>2024-09-14 09:46:48<SeP>2024-09-15 21:36:00<SeP>2024-09-17 09:25:12<SeP>2024-09-18 21:14:24<SeP>2024-09-20 09:03:36<SeP>2024-09-21 20:52:48<SeP>2024-09-23 08:42:00<SeP>2024-09-24 20:31:12<SeP>2024-09-26 08:20:24<SeP>2024-09-27 20:09:36<SeP>2024-09-29 07:58:48<SeP>2024-09-30 19:48:00<SeP>2024-10-02 07:37:12<SeP>2024-10-03 19:26:24<SeP>2024-10-05 07:15:36<SeP>2024-10-06 19:04:48<SeP>2024-10-08 06:54:00<SeP>2024-10-09 18:43:12<SeP>2024-10-11 06:32:24<SeP>2024-10-12 18:21:36<SeP>2024-10-14 06:10:48<SeP>2024-10-15 18:00:00<SeP>2024-10-17 05:49:12<SeP>2024-10-18 17:38:24<SeP>2024-10-20 05:27:36<SeP>2024-10-21 17:16:48<SeP>2024-10-23 05:06:00<SeP>2024-10-24 16:55:12<SeP>2024-10-26 04:44:24<SeP>2024-10-27 16:33:36<SeP>2024-10-29 04:22:48<SeP>2024-10-30 16:12:00<SeP>2024-11-01 04:01:12<SeP>2024-11-02 15:50:24<SeP>2024-11-04 02:39:36<SeP>2024-11-05 14:28:48<SeP>2024-11-07 02:18:00<SeP>2024-11-08 14:07:12<SeP>2024-11-10 01:56:24<SeP>2024-11-11 13:45:36<SeP>2024-11-13 01:34:48<SeP>2024-11-14 13:24:00<SeP>2024-11-16 01:13:12<SeP>2024-11-17 13:02:24<SeP>2024-11-19 00:51:36<SeP>2024-11-20 12:40:48<SeP>2024-11-22 00:30:00<SeP>2024-11-23 12:19:12<SeP>2024-11-25 00:08:24<SeP>2024-11-26 11:57:36<SeP>2024-11-27 23:46:48<SeP>2024-11-29 11:36:00<SeP>2024-11-30 23:25:12<SeP>2024-12-02 11:14:24<SeP>2024-12-03 23:03:36<SeP>2024-12-05 10:52:48<SeP>2024-12-06 22:42:00<SeP>2024-12-08 10:31:12<SeP>2024-12-09 22:20:24<SeP>2024-12-11 10:09:36<SeP>2024-12-12 21:58:48<SeP>2024-12-14 09:48:00<SeP>2024-12-15 21:37:12<SeP>2024-12-17 09:26:24<SeP>2024-12-18 21:15:36<SeP>2024-12-20 09:04:48<SeP>2024-12-21 20:54:00<SeP>2024-12-23 08:43:12<SeP>2024-12-24 20:32:24<SeP>2024-12-26 08:21:36<SeP>2024-12-27 20:10:48<SeP>2024-12-29 08:00:00<SeP>2024-12-30 19:49:12<SeP>2025-01-01 07:38:24<SeP>2025-01-02 19:27:36<SeP>2025-01-04 07:16:48<SeP>2025-01-05 19:06:00<SeP>2025-01-07 06:55:12<SeP>2025-01-08 18:44:24<SeP>2025-01-10 06:33:36<SeP>2025-01-11 18:22:48<SeP>2025-01-13 06:12:00<SeP>2025-01-14 18:01:12<SeP>2025-01-16 05:50:24<SeP>2025-01-17 17:39:36<SeP>2025-01-19 05:28:48<SeP>2025-01-20 17:18:00<SeP>2025-01-22 05:07:12<SeP>2025-01-23 16:56:24<SeP>2025-01-25 04:45:36<SeP>2025-01-26 16:34:48<SeP>2025-01-28 04:24:00<SeP>2025-01-29 16:13:12<SeP>2025-01-31 04:02:24<SeP>2025-02-01 15:51:36<SeP>2025-02-03 03:40:48<SeP>2025-02-04 15:30:00<SeP>2025-02-06 03:19:12<SeP>2025-02-07 15:08:24<SeP>2025-02-09 02:57:36<SeP>2025-02-10 14:46:48<SeP>2025-02-12 02:36:00<SeP>2025-02-13 14:25:12<SeP>2025-02-15 02:14:24<SeP>2025-02-16 14:03:36<SeP>2025-02-18 01:52:48<SeP>2025-02-19 13:42:00<SeP>2025-02-21 01:31:12<SeP>2025-02-22 13:20:24<SeP>2025-02-24 01:09:36<SeP>2025-02-25 12:58:48<SeP>2025-02-27 00:48:00<SeP>2025-02-28 12:37:12<SeP>2025-03-02 00:26:24<SeP>2025-03-03 12:15:36<SeP>2025-03-05 00:04:48<SeP>2025-03-06 11:54:00<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:32:24<SeP>2025-03-11 00:21:36<SeP>2025-03-12 12:10:48";
  const itemLabel       = "Ataques";
  const itemData        = "234<SeP>537<SeP>1407<SeP>648<SeP>227<SeP>233<SeP>7052<SeP>760<SeP>9280<SeP>499<SeP>404<SeP>1342<SeP>1086<SeP>244<SeP>340<SeP>275<SeP>261<SeP>694<SeP>667<SeP>8463<SeP>7897<SeP>6626<SeP>9667<SeP>455<SeP>307<SeP>404<SeP>213<SeP>390<SeP>5885<SeP>77<SeP>385<SeP>306<SeP>391<SeP>3030<SeP>9811<SeP>8547<SeP>10619<SeP>9452<SeP>6071<SeP>7453<SeP>7112<SeP>8997<SeP>9098<SeP>8059<SeP>8697<SeP>8458<SeP>8633<SeP>8686<SeP>6321<SeP>6102<SeP>11622<SeP>7487<SeP>8539<SeP>6975<SeP>10765<SeP>13979<SeP>21016<SeP>8772<SeP>9344<SeP>10223<SeP>7497<SeP>8702<SeP>8155<SeP>9042<SeP>8126<SeP>6549<SeP>7038<SeP>6987<SeP>5246<SeP>4034<SeP>6874<SeP>5599<SeP>6590<SeP>7561<SeP>5377<SeP>5609<SeP>5601<SeP>6777<SeP>4960<SeP>7168<SeP>4839<SeP>6133<SeP>6795<SeP>5631<SeP>5772<SeP>5661<SeP>22071<SeP>11391<SeP>35048<SeP>7827<SeP>7850<SeP>7647<SeP>11103<SeP>7453<SeP>4524<SeP>6708<SeP>3454<SeP>5493<SeP>7099<SeP>4924<SeP>8889<SeP>6832<SeP>5576<SeP>4360<SeP>7025<SeP>8825<SeP>8269<SeP>8465<SeP>3876<SeP>7445<SeP>10809<SeP>7942<SeP>3273<SeP>4732<SeP>7606<SeP>7849<SeP>5753<SeP>8606<SeP>8078<SeP>1853<SeP>2782<SeP>1034<SeP>1990<SeP>2600<SeP>1533<SeP>725<SeP>1095<SeP>1264<SeP>1855<SeP>591<SeP>1335<SeP>1123<SeP>1119<SeP>816<SeP>1379<SeP>1426<SeP>1246<SeP>898<SeP>2487<SeP>1795<SeP>7887<SeP>9050<SeP>8977<SeP>9841<SeP>6156<SeP>11192<SeP>7342<SeP>8643<SeP>9787<SeP>10717<SeP>11330<SeP>9478<SeP>11049<SeP>14273<SeP>9452<SeP>8424<SeP>4509<SeP>6822<SeP>11956<SeP>20409<SeP>6489<SeP>8140<SeP>10880<SeP>17435<SeP>7361<SeP>5697<SeP>7646<SeP>7008<SeP>26033<SeP>7801<SeP>9079<SeP>10980<SeP>5493<SeP>6131<SeP>6186<SeP>16193<SeP>4684<SeP>13834<SeP>7323<SeP>7010<SeP>8950<SeP>6305<SeP>4089<SeP>6536<SeP>7438<SeP>5683<SeP>6803<SeP>7675<SeP>4138<SeP>21528<SeP>7070<SeP>6672<SeP>7151<SeP>8269<SeP>10782<SeP>7381<SeP>2511<SeP>5984<SeP>4391<SeP>4564<SeP>4472<SeP>1499<SeP>618<SeP>645<SeP>201<SeP>543<SeP>641<SeP>798<SeP>466<SeP>901<SeP>1595<SeP>3204<SeP>8951<SeP>14593<SeP>2126<SeP>4256<SeP>2932<SeP>3696<SeP>7131<SeP>4267<SeP>2315<SeP>3923<SeP>2982<SeP>3051<SeP>4239<SeP>3088<SeP>2369<SeP>3624<SeP>1907<SeP>2047<SeP>1917<SeP>1341<SeP>1409<SeP>1400<SeP>872<SeP>1852<SeP>14338<SeP>13784<SeP>2410<SeP>3795<SeP>3679<SeP>2558<SeP>3855<SeP>1727<SeP>3735<SeP>2652<SeP>3566<SeP>2331<SeP>2939<SeP>3270<SeP>3077<SeP>6942<SeP>5098<SeP>4626<SeP>2761<SeP>3050<SeP>3905<SeP>4117<SeP>8390<SeP>6695<SeP>3774<SeP>2723<SeP>2850<SeP>4567<SeP>3629<SeP>3492<SeP>3116<SeP>2862<SeP>5777<SeP>3740<SeP>5960<SeP>3582<SeP>5701<SeP>4684<SeP>6979<SeP>4055<SeP>20716<SeP>6932<SeP>12688<SeP>1828<SeP>2225<SeP>5014<SeP>3770<SeP>4714<SeP>3425<SeP>5232<SeP>4659<SeP>4635<SeP>3487<SeP>3924<SeP>2304<SeP>1462<SeP>2219<SeP>3835<SeP>2461<SeP>3031<SeP>3497<SeP>4767<SeP>3708<SeP>3499<SeP>4186<SeP>3537<SeP>3255<SeP>6395<SeP>8095<SeP>5883<SeP>4712<SeP>4825<SeP>4808<SeP>3608<SeP>4374<SeP>4034<SeP>6649<SeP>4919<SeP>5430<SeP>1984<SeP>748<SeP>1591<SeP>1774<SeP>1128<SeP>1409<SeP>1761<SeP>1133<SeP>2138<SeP>4402<SeP>6164<SeP>5130<SeP>33962<SeP>5533<SeP>10536<SeP>18101<SeP>5319<SeP>5763<SeP>5480<SeP>9830<SeP>19251<SeP>5643<SeP>4886<SeP>4737<SeP>6348<SeP>20557<SeP>15170<SeP>3952<SeP>3778<SeP>3979<SeP>5744<SeP>5020<SeP>3089<SeP>3292<SeP>4477<SeP>5787<SeP>4743<SeP>18176<SeP>5436<SeP>6388<SeP>5608<SeP>1407<SeP>3939<SeP>4297<SeP>4051<SeP>4597<SeP>2842<SeP>3903<SeP>2601<SeP>4195<SeP>3794<SeP>7468<SeP>10135<SeP>9002<SeP>8514<SeP>9652<SeP>7366<SeP>6243<SeP>5297<SeP>4317<SeP>24609<SeP>4851<SeP>3105<SeP>4456<SeP>3741<SeP>11362<SeP>5662<SeP>3784<SeP>5086<SeP>3924<SeP>4678<SeP>9518<SeP>8869<SeP>4197<SeP>3064<SeP>3488<SeP>1916<SeP>2404<SeP>2539<SeP>2112<SeP>2464<SeP>1667<SeP>3181<SeP>2504<SeP>3332";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Iran";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "700826<SeP>369648<SeP>207544<SeP>181698<SeP>111209<SeP>88946<SeP>84520<SeP>81755<SeP>68685<SeP>68405";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "301317<SeP>41451<SeP>41291<SeP>37260<SeP>14755<SeP>11396<SeP>8878<SeP>8150<SeP>7296<SeP>7277";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "399509<SeP>332388<SeP>204384<SeP>140407<SeP>96454<SeP>81798<SeP>81650<SeP>70359<SeP>60535<SeP>59220";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>9829<SeP>58224";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "366570<SeP>259559<SeP>239276<SeP>144195<SeP>68088<SeP>60234<SeP>57263<SeP>53758<SeP>36718<SeP>36062";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>0<SeP>14061<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "158824<SeP>54183<SeP>35026<SeP>33050<SeP>21945<SeP>13906<SeP>13020<SeP>11019<SeP>7614<SeP>7524";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Atacks";
  const itemData    = "353550<SeP>258791<SeP>122250<SeP>80452<SeP>56231<SeP>49215<SeP>47554<SeP>30694<SeP>29324<SeP>26896";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Iran";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "700826<SeP>369648<SeP>207544<SeP>181698<SeP>111209<SeP>88946<SeP>84520<SeP>81755<SeP>68685<SeP>68405";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "301317<SeP>41451<SeP>41291<SeP>37260<SeP>14755<SeP>11396<SeP>8878<SeP>8150<SeP>7296<SeP>7277";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "399509<SeP>332388<SeP>204384<SeP>140407<SeP>96454<SeP>81798<SeP>81650<SeP>70359<SeP>60535<SeP>59220";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>9829<SeP>58224";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "366570<SeP>259559<SeP>239276<SeP>144195<SeP>68088<SeP>60234<SeP>57263<SeP>53758<SeP>36718<SeP>36062";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>0<SeP>14061<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "158824<SeP>54183<SeP>35026<SeP>33050<SeP>21945<SeP>13906<SeP>13020<SeP>11019<SeP>7614<SeP>7524";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Ataques";
  const itemData    = "353550<SeP>258791<SeP>122250<SeP>80452<SeP>56231<SeP>49215<SeP>47554<SeP>30694<SeP>29324<SeP>26896";
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
