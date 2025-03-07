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
  document.getElementById("last-updated").innerHTML = "2025-3-7";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.4";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.4";
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
  const metricData    = "2844062";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "554860";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2289202";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140341";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1436548";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "852654";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54381";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "250140";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "602514";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43666";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2844062";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "554860";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2289202";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140341";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1436548";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "852654";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54381";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "250140";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "602514";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43666";
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
  const incomingData = "2844062<SeP>554860<SeP>2289202<SeP>140341";
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
  const incomingData = "2289202<SeP>1436548<SeP>852654<SeP>54381";
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
  const incomingData = "852654<SeP>250140<SeP>602514<SeP>43666";
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
  const incomingData = "2560832<SeP>257868<SeP>2302964";
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
  const incomingData = "2844062<SeP>554860<SeP>2289202<SeP>140341";
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
  const incomingData = "2289202<SeP>1436548<SeP>852654<SeP>54381";
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
  const incomingData = "852654<SeP>250140<SeP>602514<SeP>43666";
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
  const incomingData = "2560832<SeP>257868<SeP>2302964";
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
  const column3Data   = "221209<SeP>202733<SeP>12680<SeP>12464<SeP>9780<SeP>9452<SeP>6449<SeP>5593<SeP>4633<SeP>3500";
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
  const column2Data  = "212582<SeP>43147<SeP>894<SeP>485<SeP>464<SeP>445<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2407662<SeP>436400";
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
  const column3Data   = "221209<SeP>202733<SeP>12680<SeP>12464<SeP>9780<SeP>9452<SeP>6449<SeP>5593<SeP>4633<SeP>3500";
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
  const column2Data  = "212582<SeP>43147<SeP>894<SeP>485<SeP>464<SeP>445<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2407662<SeP>436400";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-7";

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
        "name": "traffic between 2023-07-26 and 2025-03-05"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          397283,50
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
        "name": "scans between 2023-07-26 and 2025-03-05"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          228774,30,
          397283,50
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
        "name": "attacks between 2023-07-26 and 2025-03-05"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168509,23,
          397283,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-7";

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
        "name": "tráfico entre 2023-07-26 y 2025-03-05"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          397283,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-05"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          228774,30,
          397283,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-05"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168509,23,
          397283,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:24:09<SeP>2023-07-28 22:48:18<SeP>2023-07-30 10:12:27<SeP>2023-07-31 21:36:36<SeP>2023-08-02 09:00:45<SeP>2023-08-03 20:24:54<SeP>2023-08-05 07:49:03<SeP>2023-08-06 19:13:12<SeP>2023-08-08 06:37:21<SeP>2023-08-09 18:01:30<SeP>2023-08-11 05:25:39<SeP>2023-08-12 16:49:48<SeP>2023-08-14 04:13:57<SeP>2023-08-15 15:38:06<SeP>2023-08-17 03:02:15<SeP>2023-08-18 14:26:24<SeP>2023-08-20 01:50:33<SeP>2023-08-21 13:14:42<SeP>2023-08-23 00:38:51<SeP>2023-08-24 12:03:00<SeP>2023-08-25 23:27:09<SeP>2023-08-27 10:51:18<SeP>2023-08-28 22:15:27<SeP>2023-08-30 09:39:36<SeP>2023-08-31 21:03:45<SeP>2023-09-02 08:27:54<SeP>2023-09-03 19:52:03<SeP>2023-09-05 07:16:12<SeP>2023-09-06 18:40:21<SeP>2023-09-08 06:04:30<SeP>2023-09-09 17:28:39<SeP>2023-09-11 04:52:48<SeP>2023-09-12 16:16:57<SeP>2023-09-14 03:41:06<SeP>2023-09-15 15:05:15<SeP>2023-09-17 02:29:24<SeP>2023-09-18 13:53:33<SeP>2023-09-20 01:17:42<SeP>2023-09-21 12:41:51<SeP>2023-09-23 00:06:00<SeP>2023-09-24 11:30:09<SeP>2023-09-25 22:54:18<SeP>2023-09-27 10:18:27<SeP>2023-09-28 21:42:36<SeP>2023-09-30 09:06:45<SeP>2023-10-01 20:30:54<SeP>2023-10-03 07:55:03<SeP>2023-10-04 19:19:12<SeP>2023-10-06 06:43:21<SeP>2023-10-07 18:07:30<SeP>2023-10-09 05:31:39<SeP>2023-10-10 16:55:48<SeP>2023-10-12 04:19:57<SeP>2023-10-13 15:44:06<SeP>2023-10-15 03:08:15<SeP>2023-10-16 14:32:24<SeP>2023-10-18 01:56:33<SeP>2023-10-19 13:20:42<SeP>2023-10-21 00:44:51<SeP>2023-10-22 12:09:00<SeP>2023-10-23 23:33:09<SeP>2023-10-25 10:57:18<SeP>2023-10-26 22:21:27<SeP>2023-10-28 09:45:36<SeP>2023-10-29 21:09:45<SeP>2023-10-31 08:33:54<SeP>2023-11-01 19:58:03<SeP>2023-11-03 07:22:12<SeP>2023-11-04 18:46:21<SeP>2023-11-06 05:10:30<SeP>2023-11-07 16:34:39<SeP>2023-11-09 03:58:48<SeP>2023-11-10 15:22:57<SeP>2023-11-12 02:47:06<SeP>2023-11-13 14:11:15<SeP>2023-11-15 01:35:24<SeP>2023-11-16 12:59:33<SeP>2023-11-18 00:23:42<SeP>2023-11-19 11:47:51<SeP>2023-11-20 23:12:00<SeP>2023-11-22 10:36:09<SeP>2023-11-23 22:00:18<SeP>2023-11-25 09:24:27<SeP>2023-11-26 20:48:36<SeP>2023-11-28 08:12:45<SeP>2023-11-29 19:36:54<SeP>2023-12-01 07:01:03<SeP>2023-12-02 18:25:12<SeP>2023-12-04 05:49:21<SeP>2023-12-05 17:13:30<SeP>2023-12-07 04:37:39<SeP>2023-12-08 16:01:48<SeP>2023-12-10 03:25:57<SeP>2023-12-11 14:50:06<SeP>2023-12-13 02:14:15<SeP>2023-12-14 13:38:24<SeP>2023-12-16 01:02:33<SeP>2023-12-17 12:26:42<SeP>2023-12-18 23:50:51<SeP>2023-12-20 11:15:00<SeP>2023-12-21 22:39:09<SeP>2023-12-23 10:03:18<SeP>2023-12-24 21:27:27<SeP>2023-12-26 08:51:36<SeP>2023-12-27 20:15:45<SeP>2023-12-29 07:39:54<SeP>2023-12-30 19:04:03<SeP>2024-01-01 06:28:12<SeP>2024-01-02 17:52:21<SeP>2024-01-04 05:16:30<SeP>2024-01-05 16:40:39<SeP>2024-01-07 04:04:48<SeP>2024-01-08 15:28:57<SeP>2024-01-10 02:53:06<SeP>2024-01-11 14:17:15<SeP>2024-01-13 01:41:24<SeP>2024-01-14 13:05:33<SeP>2024-01-16 00:29:42<SeP>2024-01-17 11:53:51<SeP>2024-01-18 23:18:00<SeP>2024-01-20 10:42:09<SeP>2024-01-21 22:06:18<SeP>2024-01-23 09:30:27<SeP>2024-01-24 20:54:36<SeP>2024-01-26 08:18:45<SeP>2024-01-27 19:42:54<SeP>2024-01-29 07:07:03<SeP>2024-01-30 18:31:12<SeP>2024-02-01 05:55:21<SeP>2024-02-02 17:19:30<SeP>2024-02-04 04:43:39<SeP>2024-02-05 16:07:48<SeP>2024-02-07 03:31:57<SeP>2024-02-08 14:56:06<SeP>2024-02-10 02:20:15<SeP>2024-02-11 13:44:24<SeP>2024-02-13 01:08:33<SeP>2024-02-14 12:32:42<SeP>2024-02-15 23:56:51<SeP>2024-02-17 11:21:00<SeP>2024-02-18 22:45:09<SeP>2024-02-20 10:09:18<SeP>2024-02-21 21:33:27<SeP>2024-02-23 08:57:36<SeP>2024-02-24 20:21:45<SeP>2024-02-26 07:45:54<SeP>2024-02-27 19:10:03<SeP>2024-02-29 06:34:12<SeP>2024-03-01 17:58:21<SeP>2024-03-03 05:22:30<SeP>2024-03-04 16:46:39<SeP>2024-03-06 04:10:48<SeP>2024-03-07 15:34:57<SeP>2024-03-09 02:59:06<SeP>2024-03-10 15:23:15<SeP>2024-03-12 02:47:24<SeP>2024-03-13 14:11:33<SeP>2024-03-15 01:35:42<SeP>2024-03-16 12:59:51<SeP>2024-03-18 00:24:00<SeP>2024-03-19 11:48:09<SeP>2024-03-20 23:12:18<SeP>2024-03-22 10:36:27<SeP>2024-03-23 22:00:36<SeP>2024-03-25 09:24:45<SeP>2024-03-26 20:48:54<SeP>2024-03-28 08:13:03<SeP>2024-03-29 19:37:12<SeP>2024-03-31 07:01:21<SeP>2024-04-01 18:25:30<SeP>2024-04-03 05:49:39<SeP>2024-04-04 17:13:48<SeP>2024-04-06 04:37:57<SeP>2024-04-07 16:02:06<SeP>2024-04-09 03:26:15<SeP>2024-04-10 14:50:24<SeP>2024-04-12 02:14:33<SeP>2024-04-13 13:38:42<SeP>2024-04-15 01:02:51<SeP>2024-04-16 12:27:00<SeP>2024-04-17 23:51:09<SeP>2024-04-19 11:15:18<SeP>2024-04-20 22:39:27<SeP>2024-04-22 10:03:36<SeP>2024-04-23 21:27:45<SeP>2024-04-25 08:51:54<SeP>2024-04-26 20:16:03<SeP>2024-04-28 07:40:12<SeP>2024-04-29 19:04:21<SeP>2024-05-01 06:28:30<SeP>2024-05-02 17:52:39<SeP>2024-05-04 05:16:48<SeP>2024-05-05 16:40:57<SeP>2024-05-07 04:05:06<SeP>2024-05-08 15:29:15<SeP>2024-05-10 02:53:24<SeP>2024-05-11 14:17:33<SeP>2024-05-13 01:41:42<SeP>2024-05-14 13:05:51<SeP>2024-05-16 00:30:00<SeP>2024-05-17 11:54:09<SeP>2024-05-18 23:18:18<SeP>2024-05-20 10:42:27<SeP>2024-05-21 22:06:36<SeP>2024-05-23 09:30:45<SeP>2024-05-24 20:54:54<SeP>2024-05-26 08:19:03<SeP>2024-05-27 19:43:12<SeP>2024-05-29 07:07:21<SeP>2024-05-30 18:31:30<SeP>2024-06-01 05:55:39<SeP>2024-06-02 17:19:48<SeP>2024-06-04 04:43:57<SeP>2024-06-05 16:08:06<SeP>2024-06-07 03:32:15<SeP>2024-06-08 14:56:24<SeP>2024-06-10 02:20:33<SeP>2024-06-11 13:44:42<SeP>2024-06-13 01:08:51<SeP>2024-06-14 12:33:00<SeP>2024-06-15 23:57:09<SeP>2024-06-17 11:21:18<SeP>2024-06-18 22:45:27<SeP>2024-06-20 10:09:36<SeP>2024-06-21 21:33:45<SeP>2024-06-23 08:57:54<SeP>2024-06-24 20:22:03<SeP>2024-06-26 07:46:12<SeP>2024-06-27 19:10:21<SeP>2024-06-29 06:34:30<SeP>2024-06-30 17:58:39<SeP>2024-07-02 05:22:48<SeP>2024-07-03 16:46:57<SeP>2024-07-05 04:11:06<SeP>2024-07-06 15:35:15<SeP>2024-07-08 02:59:24<SeP>2024-07-09 14:23:33<SeP>2024-07-11 01:47:42<SeP>2024-07-12 13:11:51<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:00:09<SeP>2024-07-16 23:24:18<SeP>2024-07-18 10:48:27<SeP>2024-07-19 22:12:36<SeP>2024-07-21 09:36:45<SeP>2024-07-22 21:00:54<SeP>2024-07-24 08:25:03<SeP>2024-07-25 19:49:12<SeP>2024-07-27 07:13:21<SeP>2024-07-28 18:37:30<SeP>2024-07-30 06:01:39<SeP>2024-07-31 17:25:48<SeP>2024-08-02 04:49:57<SeP>2024-08-03 16:14:06<SeP>2024-08-05 03:38:15<SeP>2024-08-06 15:02:24<SeP>2024-08-08 02:26:33<SeP>2024-08-09 13:50:42<SeP>2024-08-11 01:14:51<SeP>2024-08-12 12:39:00<SeP>2024-08-14 00:03:09<SeP>2024-08-15 11:27:18<SeP>2024-08-16 22:51:27<SeP>2024-08-18 10:15:36<SeP>2024-08-19 21:39:45<SeP>2024-08-21 09:03:54<SeP>2024-08-22 20:28:03<SeP>2024-08-24 07:52:12<SeP>2024-08-25 19:16:21<SeP>2024-08-27 06:40:30<SeP>2024-08-28 18:04:39<SeP>2024-08-30 05:28:48<SeP>2024-08-31 16:52:57<SeP>2024-09-02 04:17:06<SeP>2024-09-03 15:41:15<SeP>2024-09-05 03:05:24<SeP>2024-09-06 14:29:33<SeP>2024-09-08 01:53:42<SeP>2024-09-09 13:17:51<SeP>2024-09-11 00:42:00<SeP>2024-09-12 12:06:09<SeP>2024-09-13 23:30:18<SeP>2024-09-15 10:54:27<SeP>2024-09-16 22:18:36<SeP>2024-09-18 09:42:45<SeP>2024-09-19 21:06:54<SeP>2024-09-21 08:31:03<SeP>2024-09-22 19:55:12<SeP>2024-09-24 07:19:21<SeP>2024-09-25 18:43:30<SeP>2024-09-27 06:07:39<SeP>2024-09-28 17:31:48<SeP>2024-09-30 04:55:57<SeP>2024-10-01 16:20:06<SeP>2024-10-03 03:44:15<SeP>2024-10-04 15:08:24<SeP>2024-10-06 02:32:33<SeP>2024-10-07 13:56:42<SeP>2024-10-09 01:20:51<SeP>2024-10-10 12:45:00<SeP>2024-10-12 00:09:09<SeP>2024-10-13 11:33:18<SeP>2024-10-14 22:57:27<SeP>2024-10-16 10:21:36<SeP>2024-10-17 21:45:45<SeP>2024-10-19 09:09:54<SeP>2024-10-20 20:34:03<SeP>2024-10-22 07:58:12<SeP>2024-10-23 19:22:21<SeP>2024-10-25 06:46:30<SeP>2024-10-26 18:10:39<SeP>2024-10-28 05:34:48<SeP>2024-10-29 16:58:57<SeP>2024-10-31 04:23:06<SeP>2024-11-01 15:47:15<SeP>2024-11-03 02:11:24<SeP>2024-11-04 13:35:33<SeP>2024-11-06 00:59:42<SeP>2024-11-07 12:23:51<SeP>2024-11-08 23:48:00<SeP>2024-11-10 11:12:09<SeP>2024-11-11 22:36:18<SeP>2024-11-13 10:00:27<SeP>2024-11-14 21:24:36<SeP>2024-11-16 08:48:45<SeP>2024-11-17 20:12:54<SeP>2024-11-19 07:37:03<SeP>2024-11-20 19:01:12<SeP>2024-11-22 06:25:21<SeP>2024-11-23 17:49:30<SeP>2024-11-25 05:13:39<SeP>2024-11-26 16:37:48<SeP>2024-11-28 04:01:57<SeP>2024-11-29 15:26:06<SeP>2024-12-01 02:50:15<SeP>2024-12-02 14:14:24<SeP>2024-12-04 01:38:33<SeP>2024-12-05 13:02:42<SeP>2024-12-07 00:26:51<SeP>2024-12-08 11:51:00<SeP>2024-12-09 23:15:09<SeP>2024-12-11 10:39:18<SeP>2024-12-12 22:03:27<SeP>2024-12-14 09:27:36<SeP>2024-12-15 20:51:45<SeP>2024-12-17 08:15:54<SeP>2024-12-18 19:40:03<SeP>2024-12-20 07:04:12<SeP>2024-12-21 18:28:21<SeP>2024-12-23 05:52:30<SeP>2024-12-24 17:16:39<SeP>2024-12-26 04:40:48<SeP>2024-12-27 16:04:57<SeP>2024-12-29 03:29:06<SeP>2024-12-30 14:53:15<SeP>2025-01-01 02:17:24<SeP>2025-01-02 13:41:33<SeP>2025-01-04 01:05:42<SeP>2025-01-05 12:29:51<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:18:09<SeP>2025-01-09 22:42:18<SeP>2025-01-11 10:06:27<SeP>2025-01-12 21:30:36<SeP>2025-01-14 08:54:45<SeP>2025-01-15 20:18:54<SeP>2025-01-17 07:43:03<SeP>2025-01-18 19:07:12<SeP>2025-01-20 06:31:21<SeP>2025-01-21 17:55:30<SeP>2025-01-23 05:19:39<SeP>2025-01-24 16:43:48<SeP>2025-01-26 04:07:57<SeP>2025-01-27 15:32:06<SeP>2025-01-29 02:56:15<SeP>2025-01-30 14:20:24<SeP>2025-02-01 01:44:33<SeP>2025-02-02 13:08:42<SeP>2025-02-04 00:32:51<SeP>2025-02-05 11:57:00<SeP>2025-02-06 23:21:09<SeP>2025-02-08 10:45:18<SeP>2025-02-09 22:09:27<SeP>2025-02-11 09:33:36<SeP>2025-02-12 20:57:45<SeP>2025-02-14 08:21:54<SeP>2025-02-15 19:46:03<SeP>2025-02-17 07:10:12<SeP>2025-02-18 18:34:21<SeP>2025-02-20 05:58:30<SeP>2025-02-21 17:22:39<SeP>2025-02-23 04:46:48<SeP>2025-02-24 16:10:57<SeP>2025-02-26 03:35:06<SeP>2025-02-27 14:59:15<SeP>2025-03-01 02:23:24<SeP>2025-03-02 13:47:33<SeP>2025-03-04 01:11:42<SeP>2025-03-05 12:35:51";
  const item1Label       = "Scans";
  const item1Data        = "771<SeP>1517<SeP>1366<SeP>1486<SeP>1230<SeP>1750<SeP>941<SeP>961<SeP>1165<SeP>3406<SeP>2929<SeP>1492<SeP>3300<SeP>891<SeP>770<SeP>890<SeP>1416<SeP>2956<SeP>1789<SeP>1191<SeP>1249<SeP>933<SeP>1046<SeP>1249<SeP>898<SeP>853<SeP>820<SeP>3801<SeP>739<SeP>971<SeP>1091<SeP>1532<SeP>904<SeP>819<SeP>3240<SeP>2727<SeP>1976<SeP>1489<SeP>1804<SeP>1229<SeP>1688<SeP>1906<SeP>2090<SeP>1652<SeP>1719<SeP>1614<SeP>1644<SeP>1759<SeP>1718<SeP>1833<SeP>1789<SeP>1710<SeP>1758<SeP>3086<SeP>1355<SeP>1947<SeP>1867<SeP>2412<SeP>1545<SeP>2369<SeP>2924<SeP>1455<SeP>1504<SeP>1435<SeP>1694<SeP>1715<SeP>1596<SeP>1186<SeP>1444<SeP>1211<SeP>2396<SeP>1244<SeP>1124<SeP>1329<SeP>2436<SeP>7048<SeP>1301<SeP>1286<SeP>1438<SeP>2228<SeP>1276<SeP>2200<SeP>5646<SeP>1548<SeP>1652<SeP>936<SeP>3296<SeP>1223<SeP>1080<SeP>1062<SeP>1088<SeP>1026<SeP>3137<SeP>902<SeP>1139<SeP>2959<SeP>4634<SeP>3651<SeP>982<SeP>888<SeP>970<SeP>955<SeP>1025<SeP>913<SeP>1109<SeP>3505<SeP>2507<SeP>1433<SeP>1655<SeP>699<SeP>901<SeP>1494<SeP>1190<SeP>1084<SeP>990<SeP>2248<SeP>1323<SeP>1066<SeP>1008<SeP>1063<SeP>855<SeP>846<SeP>898<SeP>819<SeP>927<SeP>1043<SeP>806<SeP>819<SeP>852<SeP>1001<SeP>813<SeP>687<SeP>900<SeP>877<SeP>810<SeP>903<SeP>897<SeP>782<SeP>809<SeP>931<SeP>935<SeP>814<SeP>866<SeP>907<SeP>929<SeP>1141<SeP>984<SeP>550<SeP>847<SeP>842<SeP>887<SeP>1295<SeP>904<SeP>1141<SeP>1207<SeP>1160<SeP>904<SeP>926<SeP>960<SeP>842<SeP>869<SeP>1117<SeP>941<SeP>791<SeP>976<SeP>1101<SeP>886<SeP>1092<SeP>1029<SeP>1039<SeP>1093<SeP>939<SeP>1026<SeP>2157<SeP>1342<SeP>993<SeP>1038<SeP>1147<SeP>1033<SeP>970<SeP>822<SeP>643<SeP>950<SeP>1157<SeP>883<SeP>983<SeP>1141<SeP>1305<SeP>1141<SeP>1277<SeP>1131<SeP>1373<SeP>1117<SeP>1499<SeP>1218<SeP>1572<SeP>2109<SeP>1324<SeP>812<SeP>896<SeP>1106<SeP>1085<SeP>661<SeP>823<SeP>857<SeP>1021<SeP>786<SeP>5202<SeP>3514<SeP>2008<SeP>1275<SeP>1162<SeP>868<SeP>1058<SeP>840<SeP>1027<SeP>1053<SeP>1131<SeP>1031<SeP>1335<SeP>2123<SeP>1010<SeP>1250<SeP>1256<SeP>1247<SeP>1170<SeP>1058<SeP>967<SeP>1086<SeP>1120<SeP>997<SeP>1202<SeP>957<SeP>1194<SeP>813<SeP>1412<SeP>1075<SeP>1176<SeP>1170<SeP>1285<SeP>1358<SeP>1505<SeP>1193<SeP>1202<SeP>1088<SeP>1201<SeP>1959<SeP>1284<SeP>1603<SeP>1853<SeP>1444<SeP>1964<SeP>1720<SeP>1270<SeP>1189<SeP>1234<SeP>1230<SeP>1461<SeP>1375<SeP>1228<SeP>1385<SeP>1904<SeP>1407<SeP>1481<SeP>1352<SeP>1449<SeP>1144<SeP>1138<SeP>1312<SeP>1172<SeP>1249<SeP>1230<SeP>1269<SeP>1278<SeP>1896<SeP>1371<SeP>1321<SeP>1586<SeP>1518<SeP>1206<SeP>1106<SeP>865<SeP>995<SeP>840<SeP>1056<SeP>1007<SeP>1801<SeP>1096<SeP>1134<SeP>1173<SeP>788<SeP>1015<SeP>1004<SeP>1320<SeP>875<SeP>911<SeP>1153<SeP>1384<SeP>1646<SeP>1264<SeP>1085<SeP>1041<SeP>1115<SeP>1821<SeP>939<SeP>1246<SeP>1013<SeP>1492<SeP>1163<SeP>863<SeP>1240<SeP>1118<SeP>885<SeP>903<SeP>1151<SeP>1369<SeP>1587<SeP>1406<SeP>1441<SeP>1320<SeP>938<SeP>1176<SeP>1195<SeP>1207<SeP>1125<SeP>1014<SeP>1080<SeP>1127<SeP>1456<SeP>1379<SeP>1453<SeP>1428<SeP>1457<SeP>1513<SeP>1469<SeP>1259<SeP>1510<SeP>1531<SeP>1448<SeP>1347<SeP>1497<SeP>1673<SeP>1559<SeP>1320<SeP>1457<SeP>1340<SeP>1224<SeP>1270<SeP>1441<SeP>1642<SeP>1489<SeP>1297<SeP>1117<SeP>1524<SeP>1161<SeP>1415<SeP>1197<SeP>1729<SeP>1862<SeP>1344<SeP>757<SeP>1159<SeP>1860<SeP>1432<SeP>1291<SeP>1399<SeP>1055<SeP>1385<SeP>1423<SeP>1243<SeP>1524<SeP>1498<SeP>1618<SeP>1499<SeP>1589<SeP>1587<SeP>1447<SeP>1402<SeP>1656<SeP>1453<SeP>1292<SeP>1188<SeP>1881<SeP>1796<SeP>1820<SeP>1780<SeP>1752<SeP>1614<SeP>1603<SeP>1582<SeP>1555<SeP>1531<SeP>1747<SeP>1725<SeP>1745<SeP>1412<SeP>1500<SeP>1499<SeP>1456<SeP>1611";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "155<SeP>614<SeP>1330<SeP>724<SeP>220<SeP>236<SeP>7000<SeP>564<SeP>9454<SeP>567<SeP>401<SeP>1128<SeP>1297<SeP>238<SeP>282<SeP>337<SeP>127<SeP>746<SeP>343<SeP>7377<SeP>7180<SeP>6594<SeP>8844<SeP>3519<SeP>251<SeP>429<SeP>192<SeP>384<SeP>5755<SeP>264<SeP>364<SeP>138<SeP>538<SeP>297<SeP>8297<SeP>9790<SeP>10361<SeP>9535<SeP>6786<SeP>5267<SeP>8631<SeP>7406<SeP>9054<SeP>8985<SeP>7427<SeP>8644<SeP>8637<SeP>8609<SeP>8545<SeP>5813<SeP>6198<SeP>12825<SeP>6267<SeP>7719<SeP>7885<SeP>10547<SeP>18211<SeP>15933<SeP>9970<SeP>10762<SeP>7618<SeP>7469<SeP>8831<SeP>9152<SeP>8325<SeP>7306<SeP>6593<SeP>6440<SeP>6755<SeP>4454<SeP>5793<SeP>5812<SeP>6502<SeP>5887<SeP>8243<SeP>3913<SeP>6106<SeP>5467<SeP>6999<SeP>4310<SeP>7428<SeP>4534<SeP>6359<SeP>6506<SeP>5649<SeP>5741<SeP>5558<SeP>21864<SeP>11240<SeP>35325<SeP>7235<SeP>8496<SeP>6254<SeP>11716<SeP>7465<SeP>5067<SeP>6513<SeP>3794<SeP>5478<SeP>6477<SeP>5241<SeP>8677<SeP>6562<SeP>5673<SeP>4211<SeP>6003<SeP>9618<SeP>8292<SeP>7265<SeP>5198<SeP>5558<SeP>10246<SeP>8706<SeP>4865<SeP>3294<SeP>6442<SeP>9541<SeP>4846<SeP>7697<SeP>9010<SeP>4167<SeP>3033<SeP>1075<SeP>1663<SeP>1853<SeP>2521<SeP>852<SeP>1322<SeP>665<SeP>1633<SeP>1248<SeP>1161<SeP>1167<SeP>858<SeP>1131<SeP>1089<SeP>1142<SeP>1436<SeP>1143<SeP>1661<SeP>2140<SeP>1560<SeP>12350<SeP>6073<SeP>10603<SeP>7406<SeP>5485<SeP>10649<SeP>9121<SeP>9316<SeP>8533<SeP>13919<SeP>8504<SeP>10738<SeP>10954<SeP>12685<SeP>9831<SeP>8737<SeP>3841<SeP>7832<SeP>17213<SeP>14797<SeP>5806<SeP>7878<SeP>10740<SeP>16868<SeP>8805<SeP>4082<SeP>7673<SeP>6977<SeP>26035<SeP>7796<SeP>9001<SeP>10751<SeP>5751<SeP>5497<SeP>6575<SeP>16325<SeP>4771<SeP>12696<SeP>7933<SeP>6728<SeP>8803<SeP>7305<SeP>3026<SeP>7004<SeP>4917<SeP>7828<SeP>7026<SeP>6662<SeP>5688<SeP>21000<SeP>6751<SeP>6028<SeP>6277<SeP>8277<SeP>11462<SeP>6951<SeP>4456<SeP>3292<SeP>6327<SeP>3366<SeP>4123<SeP>4166<SeP>632<SeP>110<SeP>635<SeP>562<SeP>630<SeP>740<SeP>366<SeP>658<SeP>1252<SeP>1279<SeP>3135<SeP>22948<SeP>554<SeP>4482<SeP>3239<SeP>2512<SeP>7881<SeP>2786<SeP>4165<SeP>3146<SeP>3195<SeP>3039<SeP>3291<SeP>4674<SeP>1910<SeP>2929<SeP>2616<SeP>2197<SeP>1959<SeP>1917<SeP>1140<SeP>1910<SeP>796<SeP>925<SeP>1777<SeP>26749<SeP>1485<SeP>3592<SeP>3480<SeP>3097<SeP>3245<SeP>3111<SeP>1624<SeP>3669<SeP>2588<SeP>3504<SeP>2658<SeP>2529<SeP>3289<SeP>3429<SeP>6765<SeP>5209<SeP>4326<SeP>2745<SeP>2975<SeP>3666<SeP>4150<SeP>6506<SeP>8851<SeP>3722<SeP>2305<SeP>3280<SeP>3743<SeP>4259<SeP>3123<SeP>3340<SeP>2666<SeP>5043<SeP>4571<SeP>3376<SeP>6069<SeP>5434<SeP>4860<SeP>4766<SeP>5552<SeP>10820<SeP>17560<SeP>12824<SeP>1930<SeP>1850<SeP>5118<SeP>3414<SeP>3813<SeP>4205<SeP>5048<SeP>3969<SeP>4537<SeP>4246<SeP>3570<SeP>3304<SeP>1268<SeP>2117<SeP>3101<SeP>2879<SeP>2834<SeP>3317<SeP>4331<SeP>4132<SeP>3116<SeP>4627<SeP>3004<SeP>3560<SeP>4066<SeP>8063<SeP>6378<SeP>5456<SeP>4868<SeP>5047<SeP>3694<SeP>3826<SeP>4657<SeP>5556<SeP>5422<SeP>4351<SeP>4273<SeP>2327<SeP>417<SeP>2131<SeP>1674<SeP>753<SeP>1913<SeP>1540<SeP>831<SeP>3081<SeP>3918<SeP>6668<SeP>13593<SeP>25265<SeP>5601<SeP>11591<SeP>16346<SeP>5594<SeP>5609<SeP>5252<SeP>13090<SeP>16015<SeP>5600<SeP>4853<SeP>4732<SeP>6302<SeP>19410<SeP>16072<SeP>4182<SeP>3563<SeP>4021<SeP>5715<SeP>4987<SeP>2991<SeP>3287<SeP>4435<SeP>5216<SeP>5265<SeP>17997<SeP>5249<SeP>6134<SeP>5772<SeP>1765<SeP>2910<SeP>3908<SeP>5445<SeP>3836<SeP>3525<SeP>3102<SeP>3397<SeP>3604<SeP>3645<SeP>6189<SeP>8679<SeP>10080<SeP>8566<SeP>9096<SeP>7918<SeP>7149<SeP>5085<SeP>4993<SeP>4749<SeP>24903<SeP>3348<SeP>4207<SeP>3307<SeP>11528<SeP>5119<SeP>4239<SeP>4535<SeP>4581<SeP>3344<SeP>6525<SeP>10300<SeP>6169<SeP>3824<SeP>3428<SeP>2728<SeP>2248<SeP>2345<SeP>2069<SeP>2191";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:24:09<SeP>2023-07-28 22:48:18<SeP>2023-07-30 10:12:27<SeP>2023-07-31 21:36:36<SeP>2023-08-02 09:00:45<SeP>2023-08-03 20:24:54<SeP>2023-08-05 07:49:03<SeP>2023-08-06 19:13:12<SeP>2023-08-08 06:37:21<SeP>2023-08-09 18:01:30<SeP>2023-08-11 05:25:39<SeP>2023-08-12 16:49:48<SeP>2023-08-14 04:13:57<SeP>2023-08-15 15:38:06<SeP>2023-08-17 03:02:15<SeP>2023-08-18 14:26:24<SeP>2023-08-20 01:50:33<SeP>2023-08-21 13:14:42<SeP>2023-08-23 00:38:51<SeP>2023-08-24 12:03:00<SeP>2023-08-25 23:27:09<SeP>2023-08-27 10:51:18<SeP>2023-08-28 22:15:27<SeP>2023-08-30 09:39:36<SeP>2023-08-31 21:03:45<SeP>2023-09-02 08:27:54<SeP>2023-09-03 19:52:03<SeP>2023-09-05 07:16:12<SeP>2023-09-06 18:40:21<SeP>2023-09-08 06:04:30<SeP>2023-09-09 17:28:39<SeP>2023-09-11 04:52:48<SeP>2023-09-12 16:16:57<SeP>2023-09-14 03:41:06<SeP>2023-09-15 15:05:15<SeP>2023-09-17 02:29:24<SeP>2023-09-18 13:53:33<SeP>2023-09-20 01:17:42<SeP>2023-09-21 12:41:51<SeP>2023-09-23 00:06:00<SeP>2023-09-24 11:30:09<SeP>2023-09-25 22:54:18<SeP>2023-09-27 10:18:27<SeP>2023-09-28 21:42:36<SeP>2023-09-30 09:06:45<SeP>2023-10-01 20:30:54<SeP>2023-10-03 07:55:03<SeP>2023-10-04 19:19:12<SeP>2023-10-06 06:43:21<SeP>2023-10-07 18:07:30<SeP>2023-10-09 05:31:39<SeP>2023-10-10 16:55:48<SeP>2023-10-12 04:19:57<SeP>2023-10-13 15:44:06<SeP>2023-10-15 03:08:15<SeP>2023-10-16 14:32:24<SeP>2023-10-18 01:56:33<SeP>2023-10-19 13:20:42<SeP>2023-10-21 00:44:51<SeP>2023-10-22 12:09:00<SeP>2023-10-23 23:33:09<SeP>2023-10-25 10:57:18<SeP>2023-10-26 22:21:27<SeP>2023-10-28 09:45:36<SeP>2023-10-29 21:09:45<SeP>2023-10-31 08:33:54<SeP>2023-11-01 19:58:03<SeP>2023-11-03 07:22:12<SeP>2023-11-04 18:46:21<SeP>2023-11-06 05:10:30<SeP>2023-11-07 16:34:39<SeP>2023-11-09 03:58:48<SeP>2023-11-10 15:22:57<SeP>2023-11-12 02:47:06<SeP>2023-11-13 14:11:15<SeP>2023-11-15 01:35:24<SeP>2023-11-16 12:59:33<SeP>2023-11-18 00:23:42<SeP>2023-11-19 11:47:51<SeP>2023-11-20 23:12:00<SeP>2023-11-22 10:36:09<SeP>2023-11-23 22:00:18<SeP>2023-11-25 09:24:27<SeP>2023-11-26 20:48:36<SeP>2023-11-28 08:12:45<SeP>2023-11-29 19:36:54<SeP>2023-12-01 07:01:03<SeP>2023-12-02 18:25:12<SeP>2023-12-04 05:49:21<SeP>2023-12-05 17:13:30<SeP>2023-12-07 04:37:39<SeP>2023-12-08 16:01:48<SeP>2023-12-10 03:25:57<SeP>2023-12-11 14:50:06<SeP>2023-12-13 02:14:15<SeP>2023-12-14 13:38:24<SeP>2023-12-16 01:02:33<SeP>2023-12-17 12:26:42<SeP>2023-12-18 23:50:51<SeP>2023-12-20 11:15:00<SeP>2023-12-21 22:39:09<SeP>2023-12-23 10:03:18<SeP>2023-12-24 21:27:27<SeP>2023-12-26 08:51:36<SeP>2023-12-27 20:15:45<SeP>2023-12-29 07:39:54<SeP>2023-12-30 19:04:03<SeP>2024-01-01 06:28:12<SeP>2024-01-02 17:52:21<SeP>2024-01-04 05:16:30<SeP>2024-01-05 16:40:39<SeP>2024-01-07 04:04:48<SeP>2024-01-08 15:28:57<SeP>2024-01-10 02:53:06<SeP>2024-01-11 14:17:15<SeP>2024-01-13 01:41:24<SeP>2024-01-14 13:05:33<SeP>2024-01-16 00:29:42<SeP>2024-01-17 11:53:51<SeP>2024-01-18 23:18:00<SeP>2024-01-20 10:42:09<SeP>2024-01-21 22:06:18<SeP>2024-01-23 09:30:27<SeP>2024-01-24 20:54:36<SeP>2024-01-26 08:18:45<SeP>2024-01-27 19:42:54<SeP>2024-01-29 07:07:03<SeP>2024-01-30 18:31:12<SeP>2024-02-01 05:55:21<SeP>2024-02-02 17:19:30<SeP>2024-02-04 04:43:39<SeP>2024-02-05 16:07:48<SeP>2024-02-07 03:31:57<SeP>2024-02-08 14:56:06<SeP>2024-02-10 02:20:15<SeP>2024-02-11 13:44:24<SeP>2024-02-13 01:08:33<SeP>2024-02-14 12:32:42<SeP>2024-02-15 23:56:51<SeP>2024-02-17 11:21:00<SeP>2024-02-18 22:45:09<SeP>2024-02-20 10:09:18<SeP>2024-02-21 21:33:27<SeP>2024-02-23 08:57:36<SeP>2024-02-24 20:21:45<SeP>2024-02-26 07:45:54<SeP>2024-02-27 19:10:03<SeP>2024-02-29 06:34:12<SeP>2024-03-01 17:58:21<SeP>2024-03-03 05:22:30<SeP>2024-03-04 16:46:39<SeP>2024-03-06 04:10:48<SeP>2024-03-07 15:34:57<SeP>2024-03-09 02:59:06<SeP>2024-03-10 15:23:15<SeP>2024-03-12 02:47:24<SeP>2024-03-13 14:11:33<SeP>2024-03-15 01:35:42<SeP>2024-03-16 12:59:51<SeP>2024-03-18 00:24:00<SeP>2024-03-19 11:48:09<SeP>2024-03-20 23:12:18<SeP>2024-03-22 10:36:27<SeP>2024-03-23 22:00:36<SeP>2024-03-25 09:24:45<SeP>2024-03-26 20:48:54<SeP>2024-03-28 08:13:03<SeP>2024-03-29 19:37:12<SeP>2024-03-31 07:01:21<SeP>2024-04-01 18:25:30<SeP>2024-04-03 05:49:39<SeP>2024-04-04 17:13:48<SeP>2024-04-06 04:37:57<SeP>2024-04-07 16:02:06<SeP>2024-04-09 03:26:15<SeP>2024-04-10 14:50:24<SeP>2024-04-12 02:14:33<SeP>2024-04-13 13:38:42<SeP>2024-04-15 01:02:51<SeP>2024-04-16 12:27:00<SeP>2024-04-17 23:51:09<SeP>2024-04-19 11:15:18<SeP>2024-04-20 22:39:27<SeP>2024-04-22 10:03:36<SeP>2024-04-23 21:27:45<SeP>2024-04-25 08:51:54<SeP>2024-04-26 20:16:03<SeP>2024-04-28 07:40:12<SeP>2024-04-29 19:04:21<SeP>2024-05-01 06:28:30<SeP>2024-05-02 17:52:39<SeP>2024-05-04 05:16:48<SeP>2024-05-05 16:40:57<SeP>2024-05-07 04:05:06<SeP>2024-05-08 15:29:15<SeP>2024-05-10 02:53:24<SeP>2024-05-11 14:17:33<SeP>2024-05-13 01:41:42<SeP>2024-05-14 13:05:51<SeP>2024-05-16 00:30:00<SeP>2024-05-17 11:54:09<SeP>2024-05-18 23:18:18<SeP>2024-05-20 10:42:27<SeP>2024-05-21 22:06:36<SeP>2024-05-23 09:30:45<SeP>2024-05-24 20:54:54<SeP>2024-05-26 08:19:03<SeP>2024-05-27 19:43:12<SeP>2024-05-29 07:07:21<SeP>2024-05-30 18:31:30<SeP>2024-06-01 05:55:39<SeP>2024-06-02 17:19:48<SeP>2024-06-04 04:43:57<SeP>2024-06-05 16:08:06<SeP>2024-06-07 03:32:15<SeP>2024-06-08 14:56:24<SeP>2024-06-10 02:20:33<SeP>2024-06-11 13:44:42<SeP>2024-06-13 01:08:51<SeP>2024-06-14 12:33:00<SeP>2024-06-15 23:57:09<SeP>2024-06-17 11:21:18<SeP>2024-06-18 22:45:27<SeP>2024-06-20 10:09:36<SeP>2024-06-21 21:33:45<SeP>2024-06-23 08:57:54<SeP>2024-06-24 20:22:03<SeP>2024-06-26 07:46:12<SeP>2024-06-27 19:10:21<SeP>2024-06-29 06:34:30<SeP>2024-06-30 17:58:39<SeP>2024-07-02 05:22:48<SeP>2024-07-03 16:46:57<SeP>2024-07-05 04:11:06<SeP>2024-07-06 15:35:15<SeP>2024-07-08 02:59:24<SeP>2024-07-09 14:23:33<SeP>2024-07-11 01:47:42<SeP>2024-07-12 13:11:51<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:00:09<SeP>2024-07-16 23:24:18<SeP>2024-07-18 10:48:27<SeP>2024-07-19 22:12:36<SeP>2024-07-21 09:36:45<SeP>2024-07-22 21:00:54<SeP>2024-07-24 08:25:03<SeP>2024-07-25 19:49:12<SeP>2024-07-27 07:13:21<SeP>2024-07-28 18:37:30<SeP>2024-07-30 06:01:39<SeP>2024-07-31 17:25:48<SeP>2024-08-02 04:49:57<SeP>2024-08-03 16:14:06<SeP>2024-08-05 03:38:15<SeP>2024-08-06 15:02:24<SeP>2024-08-08 02:26:33<SeP>2024-08-09 13:50:42<SeP>2024-08-11 01:14:51<SeP>2024-08-12 12:39:00<SeP>2024-08-14 00:03:09<SeP>2024-08-15 11:27:18<SeP>2024-08-16 22:51:27<SeP>2024-08-18 10:15:36<SeP>2024-08-19 21:39:45<SeP>2024-08-21 09:03:54<SeP>2024-08-22 20:28:03<SeP>2024-08-24 07:52:12<SeP>2024-08-25 19:16:21<SeP>2024-08-27 06:40:30<SeP>2024-08-28 18:04:39<SeP>2024-08-30 05:28:48<SeP>2024-08-31 16:52:57<SeP>2024-09-02 04:17:06<SeP>2024-09-03 15:41:15<SeP>2024-09-05 03:05:24<SeP>2024-09-06 14:29:33<SeP>2024-09-08 01:53:42<SeP>2024-09-09 13:17:51<SeP>2024-09-11 00:42:00<SeP>2024-09-12 12:06:09<SeP>2024-09-13 23:30:18<SeP>2024-09-15 10:54:27<SeP>2024-09-16 22:18:36<SeP>2024-09-18 09:42:45<SeP>2024-09-19 21:06:54<SeP>2024-09-21 08:31:03<SeP>2024-09-22 19:55:12<SeP>2024-09-24 07:19:21<SeP>2024-09-25 18:43:30<SeP>2024-09-27 06:07:39<SeP>2024-09-28 17:31:48<SeP>2024-09-30 04:55:57<SeP>2024-10-01 16:20:06<SeP>2024-10-03 03:44:15<SeP>2024-10-04 15:08:24<SeP>2024-10-06 02:32:33<SeP>2024-10-07 13:56:42<SeP>2024-10-09 01:20:51<SeP>2024-10-10 12:45:00<SeP>2024-10-12 00:09:09<SeP>2024-10-13 11:33:18<SeP>2024-10-14 22:57:27<SeP>2024-10-16 10:21:36<SeP>2024-10-17 21:45:45<SeP>2024-10-19 09:09:54<SeP>2024-10-20 20:34:03<SeP>2024-10-22 07:58:12<SeP>2024-10-23 19:22:21<SeP>2024-10-25 06:46:30<SeP>2024-10-26 18:10:39<SeP>2024-10-28 05:34:48<SeP>2024-10-29 16:58:57<SeP>2024-10-31 04:23:06<SeP>2024-11-01 15:47:15<SeP>2024-11-03 02:11:24<SeP>2024-11-04 13:35:33<SeP>2024-11-06 00:59:42<SeP>2024-11-07 12:23:51<SeP>2024-11-08 23:48:00<SeP>2024-11-10 11:12:09<SeP>2024-11-11 22:36:18<SeP>2024-11-13 10:00:27<SeP>2024-11-14 21:24:36<SeP>2024-11-16 08:48:45<SeP>2024-11-17 20:12:54<SeP>2024-11-19 07:37:03<SeP>2024-11-20 19:01:12<SeP>2024-11-22 06:25:21<SeP>2024-11-23 17:49:30<SeP>2024-11-25 05:13:39<SeP>2024-11-26 16:37:48<SeP>2024-11-28 04:01:57<SeP>2024-11-29 15:26:06<SeP>2024-12-01 02:50:15<SeP>2024-12-02 14:14:24<SeP>2024-12-04 01:38:33<SeP>2024-12-05 13:02:42<SeP>2024-12-07 00:26:51<SeP>2024-12-08 11:51:00<SeP>2024-12-09 23:15:09<SeP>2024-12-11 10:39:18<SeP>2024-12-12 22:03:27<SeP>2024-12-14 09:27:36<SeP>2024-12-15 20:51:45<SeP>2024-12-17 08:15:54<SeP>2024-12-18 19:40:03<SeP>2024-12-20 07:04:12<SeP>2024-12-21 18:28:21<SeP>2024-12-23 05:52:30<SeP>2024-12-24 17:16:39<SeP>2024-12-26 04:40:48<SeP>2024-12-27 16:04:57<SeP>2024-12-29 03:29:06<SeP>2024-12-30 14:53:15<SeP>2025-01-01 02:17:24<SeP>2025-01-02 13:41:33<SeP>2025-01-04 01:05:42<SeP>2025-01-05 12:29:51<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:18:09<SeP>2025-01-09 22:42:18<SeP>2025-01-11 10:06:27<SeP>2025-01-12 21:30:36<SeP>2025-01-14 08:54:45<SeP>2025-01-15 20:18:54<SeP>2025-01-17 07:43:03<SeP>2025-01-18 19:07:12<SeP>2025-01-20 06:31:21<SeP>2025-01-21 17:55:30<SeP>2025-01-23 05:19:39<SeP>2025-01-24 16:43:48<SeP>2025-01-26 04:07:57<SeP>2025-01-27 15:32:06<SeP>2025-01-29 02:56:15<SeP>2025-01-30 14:20:24<SeP>2025-02-01 01:44:33<SeP>2025-02-02 13:08:42<SeP>2025-02-04 00:32:51<SeP>2025-02-05 11:57:00<SeP>2025-02-06 23:21:09<SeP>2025-02-08 10:45:18<SeP>2025-02-09 22:09:27<SeP>2025-02-11 09:33:36<SeP>2025-02-12 20:57:45<SeP>2025-02-14 08:21:54<SeP>2025-02-15 19:46:03<SeP>2025-02-17 07:10:12<SeP>2025-02-18 18:34:21<SeP>2025-02-20 05:58:30<SeP>2025-02-21 17:22:39<SeP>2025-02-23 04:46:48<SeP>2025-02-24 16:10:57<SeP>2025-02-26 03:35:06<SeP>2025-02-27 14:59:15<SeP>2025-03-01 02:23:24<SeP>2025-03-02 13:47:33<SeP>2025-03-04 01:11:42<SeP>2025-03-05 12:35:51";
  const itemLabel       = "Scans";
  const itemData        = "771<SeP>1517<SeP>1366<SeP>1486<SeP>1230<SeP>1750<SeP>941<SeP>961<SeP>1165<SeP>3406<SeP>2929<SeP>1492<SeP>3300<SeP>891<SeP>770<SeP>890<SeP>1416<SeP>2956<SeP>1789<SeP>1191<SeP>1249<SeP>933<SeP>1046<SeP>1249<SeP>898<SeP>853<SeP>820<SeP>3801<SeP>739<SeP>971<SeP>1091<SeP>1532<SeP>904<SeP>819<SeP>3240<SeP>2727<SeP>1976<SeP>1489<SeP>1804<SeP>1229<SeP>1688<SeP>1906<SeP>2090<SeP>1652<SeP>1719<SeP>1614<SeP>1644<SeP>1759<SeP>1718<SeP>1833<SeP>1789<SeP>1710<SeP>1758<SeP>3086<SeP>1355<SeP>1947<SeP>1867<SeP>2412<SeP>1545<SeP>2369<SeP>2924<SeP>1455<SeP>1504<SeP>1435<SeP>1694<SeP>1715<SeP>1596<SeP>1186<SeP>1444<SeP>1211<SeP>2396<SeP>1244<SeP>1124<SeP>1329<SeP>2436<SeP>7048<SeP>1301<SeP>1286<SeP>1438<SeP>2228<SeP>1276<SeP>2200<SeP>5646<SeP>1548<SeP>1652<SeP>936<SeP>3296<SeP>1223<SeP>1080<SeP>1062<SeP>1088<SeP>1026<SeP>3137<SeP>902<SeP>1139<SeP>2959<SeP>4634<SeP>3651<SeP>982<SeP>888<SeP>970<SeP>955<SeP>1025<SeP>913<SeP>1109<SeP>3505<SeP>2507<SeP>1433<SeP>1655<SeP>699<SeP>901<SeP>1494<SeP>1190<SeP>1084<SeP>990<SeP>2248<SeP>1323<SeP>1066<SeP>1008<SeP>1063<SeP>855<SeP>846<SeP>898<SeP>819<SeP>927<SeP>1043<SeP>806<SeP>819<SeP>852<SeP>1001<SeP>813<SeP>687<SeP>900<SeP>877<SeP>810<SeP>903<SeP>897<SeP>782<SeP>809<SeP>931<SeP>935<SeP>814<SeP>866<SeP>907<SeP>929<SeP>1141<SeP>984<SeP>550<SeP>847<SeP>842<SeP>887<SeP>1295<SeP>904<SeP>1141<SeP>1207<SeP>1160<SeP>904<SeP>926<SeP>960<SeP>842<SeP>869<SeP>1117<SeP>941<SeP>791<SeP>976<SeP>1101<SeP>886<SeP>1092<SeP>1029<SeP>1039<SeP>1093<SeP>939<SeP>1026<SeP>2157<SeP>1342<SeP>993<SeP>1038<SeP>1147<SeP>1033<SeP>970<SeP>822<SeP>643<SeP>950<SeP>1157<SeP>883<SeP>983<SeP>1141<SeP>1305<SeP>1141<SeP>1277<SeP>1131<SeP>1373<SeP>1117<SeP>1499<SeP>1218<SeP>1572<SeP>2109<SeP>1324<SeP>812<SeP>896<SeP>1106<SeP>1085<SeP>661<SeP>823<SeP>857<SeP>1021<SeP>786<SeP>5202<SeP>3514<SeP>2008<SeP>1275<SeP>1162<SeP>868<SeP>1058<SeP>840<SeP>1027<SeP>1053<SeP>1131<SeP>1031<SeP>1335<SeP>2123<SeP>1010<SeP>1250<SeP>1256<SeP>1247<SeP>1170<SeP>1058<SeP>967<SeP>1086<SeP>1120<SeP>997<SeP>1202<SeP>957<SeP>1194<SeP>813<SeP>1412<SeP>1075<SeP>1176<SeP>1170<SeP>1285<SeP>1358<SeP>1505<SeP>1193<SeP>1202<SeP>1088<SeP>1201<SeP>1959<SeP>1284<SeP>1603<SeP>1853<SeP>1444<SeP>1964<SeP>1720<SeP>1270<SeP>1189<SeP>1234<SeP>1230<SeP>1461<SeP>1375<SeP>1228<SeP>1385<SeP>1904<SeP>1407<SeP>1481<SeP>1352<SeP>1449<SeP>1144<SeP>1138<SeP>1312<SeP>1172<SeP>1249<SeP>1230<SeP>1269<SeP>1278<SeP>1896<SeP>1371<SeP>1321<SeP>1586<SeP>1518<SeP>1206<SeP>1106<SeP>865<SeP>995<SeP>840<SeP>1056<SeP>1007<SeP>1801<SeP>1096<SeP>1134<SeP>1173<SeP>788<SeP>1015<SeP>1004<SeP>1320<SeP>875<SeP>911<SeP>1153<SeP>1384<SeP>1646<SeP>1264<SeP>1085<SeP>1041<SeP>1115<SeP>1821<SeP>939<SeP>1246<SeP>1013<SeP>1492<SeP>1163<SeP>863<SeP>1240<SeP>1118<SeP>885<SeP>903<SeP>1151<SeP>1369<SeP>1587<SeP>1406<SeP>1441<SeP>1320<SeP>938<SeP>1176<SeP>1195<SeP>1207<SeP>1125<SeP>1014<SeP>1080<SeP>1127<SeP>1456<SeP>1379<SeP>1453<SeP>1428<SeP>1457<SeP>1513<SeP>1469<SeP>1259<SeP>1510<SeP>1531<SeP>1448<SeP>1347<SeP>1497<SeP>1673<SeP>1559<SeP>1320<SeP>1457<SeP>1340<SeP>1224<SeP>1270<SeP>1441<SeP>1642<SeP>1489<SeP>1297<SeP>1117<SeP>1524<SeP>1161<SeP>1415<SeP>1197<SeP>1729<SeP>1862<SeP>1344<SeP>757<SeP>1159<SeP>1860<SeP>1432<SeP>1291<SeP>1399<SeP>1055<SeP>1385<SeP>1423<SeP>1243<SeP>1524<SeP>1498<SeP>1618<SeP>1499<SeP>1589<SeP>1587<SeP>1447<SeP>1402<SeP>1656<SeP>1453<SeP>1292<SeP>1188<SeP>1881<SeP>1796<SeP>1820<SeP>1780<SeP>1752<SeP>1614<SeP>1603<SeP>1582<SeP>1555<SeP>1531<SeP>1747<SeP>1725<SeP>1745<SeP>1412<SeP>1500<SeP>1499<SeP>1456<SeP>1611";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:24:09<SeP>2023-07-28 22:48:18<SeP>2023-07-30 10:12:27<SeP>2023-07-31 21:36:36<SeP>2023-08-02 09:00:45<SeP>2023-08-03 20:24:54<SeP>2023-08-05 07:49:03<SeP>2023-08-06 19:13:12<SeP>2023-08-08 06:37:21<SeP>2023-08-09 18:01:30<SeP>2023-08-11 05:25:39<SeP>2023-08-12 16:49:48<SeP>2023-08-14 04:13:57<SeP>2023-08-15 15:38:06<SeP>2023-08-17 03:02:15<SeP>2023-08-18 14:26:24<SeP>2023-08-20 01:50:33<SeP>2023-08-21 13:14:42<SeP>2023-08-23 00:38:51<SeP>2023-08-24 12:03:00<SeP>2023-08-25 23:27:09<SeP>2023-08-27 10:51:18<SeP>2023-08-28 22:15:27<SeP>2023-08-30 09:39:36<SeP>2023-08-31 21:03:45<SeP>2023-09-02 08:27:54<SeP>2023-09-03 19:52:03<SeP>2023-09-05 07:16:12<SeP>2023-09-06 18:40:21<SeP>2023-09-08 06:04:30<SeP>2023-09-09 17:28:39<SeP>2023-09-11 04:52:48<SeP>2023-09-12 16:16:57<SeP>2023-09-14 03:41:06<SeP>2023-09-15 15:05:15<SeP>2023-09-17 02:29:24<SeP>2023-09-18 13:53:33<SeP>2023-09-20 01:17:42<SeP>2023-09-21 12:41:51<SeP>2023-09-23 00:06:00<SeP>2023-09-24 11:30:09<SeP>2023-09-25 22:54:18<SeP>2023-09-27 10:18:27<SeP>2023-09-28 21:42:36<SeP>2023-09-30 09:06:45<SeP>2023-10-01 20:30:54<SeP>2023-10-03 07:55:03<SeP>2023-10-04 19:19:12<SeP>2023-10-06 06:43:21<SeP>2023-10-07 18:07:30<SeP>2023-10-09 05:31:39<SeP>2023-10-10 16:55:48<SeP>2023-10-12 04:19:57<SeP>2023-10-13 15:44:06<SeP>2023-10-15 03:08:15<SeP>2023-10-16 14:32:24<SeP>2023-10-18 01:56:33<SeP>2023-10-19 13:20:42<SeP>2023-10-21 00:44:51<SeP>2023-10-22 12:09:00<SeP>2023-10-23 23:33:09<SeP>2023-10-25 10:57:18<SeP>2023-10-26 22:21:27<SeP>2023-10-28 09:45:36<SeP>2023-10-29 21:09:45<SeP>2023-10-31 08:33:54<SeP>2023-11-01 19:58:03<SeP>2023-11-03 07:22:12<SeP>2023-11-04 18:46:21<SeP>2023-11-06 05:10:30<SeP>2023-11-07 16:34:39<SeP>2023-11-09 03:58:48<SeP>2023-11-10 15:22:57<SeP>2023-11-12 02:47:06<SeP>2023-11-13 14:11:15<SeP>2023-11-15 01:35:24<SeP>2023-11-16 12:59:33<SeP>2023-11-18 00:23:42<SeP>2023-11-19 11:47:51<SeP>2023-11-20 23:12:00<SeP>2023-11-22 10:36:09<SeP>2023-11-23 22:00:18<SeP>2023-11-25 09:24:27<SeP>2023-11-26 20:48:36<SeP>2023-11-28 08:12:45<SeP>2023-11-29 19:36:54<SeP>2023-12-01 07:01:03<SeP>2023-12-02 18:25:12<SeP>2023-12-04 05:49:21<SeP>2023-12-05 17:13:30<SeP>2023-12-07 04:37:39<SeP>2023-12-08 16:01:48<SeP>2023-12-10 03:25:57<SeP>2023-12-11 14:50:06<SeP>2023-12-13 02:14:15<SeP>2023-12-14 13:38:24<SeP>2023-12-16 01:02:33<SeP>2023-12-17 12:26:42<SeP>2023-12-18 23:50:51<SeP>2023-12-20 11:15:00<SeP>2023-12-21 22:39:09<SeP>2023-12-23 10:03:18<SeP>2023-12-24 21:27:27<SeP>2023-12-26 08:51:36<SeP>2023-12-27 20:15:45<SeP>2023-12-29 07:39:54<SeP>2023-12-30 19:04:03<SeP>2024-01-01 06:28:12<SeP>2024-01-02 17:52:21<SeP>2024-01-04 05:16:30<SeP>2024-01-05 16:40:39<SeP>2024-01-07 04:04:48<SeP>2024-01-08 15:28:57<SeP>2024-01-10 02:53:06<SeP>2024-01-11 14:17:15<SeP>2024-01-13 01:41:24<SeP>2024-01-14 13:05:33<SeP>2024-01-16 00:29:42<SeP>2024-01-17 11:53:51<SeP>2024-01-18 23:18:00<SeP>2024-01-20 10:42:09<SeP>2024-01-21 22:06:18<SeP>2024-01-23 09:30:27<SeP>2024-01-24 20:54:36<SeP>2024-01-26 08:18:45<SeP>2024-01-27 19:42:54<SeP>2024-01-29 07:07:03<SeP>2024-01-30 18:31:12<SeP>2024-02-01 05:55:21<SeP>2024-02-02 17:19:30<SeP>2024-02-04 04:43:39<SeP>2024-02-05 16:07:48<SeP>2024-02-07 03:31:57<SeP>2024-02-08 14:56:06<SeP>2024-02-10 02:20:15<SeP>2024-02-11 13:44:24<SeP>2024-02-13 01:08:33<SeP>2024-02-14 12:32:42<SeP>2024-02-15 23:56:51<SeP>2024-02-17 11:21:00<SeP>2024-02-18 22:45:09<SeP>2024-02-20 10:09:18<SeP>2024-02-21 21:33:27<SeP>2024-02-23 08:57:36<SeP>2024-02-24 20:21:45<SeP>2024-02-26 07:45:54<SeP>2024-02-27 19:10:03<SeP>2024-02-29 06:34:12<SeP>2024-03-01 17:58:21<SeP>2024-03-03 05:22:30<SeP>2024-03-04 16:46:39<SeP>2024-03-06 04:10:48<SeP>2024-03-07 15:34:57<SeP>2024-03-09 02:59:06<SeP>2024-03-10 15:23:15<SeP>2024-03-12 02:47:24<SeP>2024-03-13 14:11:33<SeP>2024-03-15 01:35:42<SeP>2024-03-16 12:59:51<SeP>2024-03-18 00:24:00<SeP>2024-03-19 11:48:09<SeP>2024-03-20 23:12:18<SeP>2024-03-22 10:36:27<SeP>2024-03-23 22:00:36<SeP>2024-03-25 09:24:45<SeP>2024-03-26 20:48:54<SeP>2024-03-28 08:13:03<SeP>2024-03-29 19:37:12<SeP>2024-03-31 07:01:21<SeP>2024-04-01 18:25:30<SeP>2024-04-03 05:49:39<SeP>2024-04-04 17:13:48<SeP>2024-04-06 04:37:57<SeP>2024-04-07 16:02:06<SeP>2024-04-09 03:26:15<SeP>2024-04-10 14:50:24<SeP>2024-04-12 02:14:33<SeP>2024-04-13 13:38:42<SeP>2024-04-15 01:02:51<SeP>2024-04-16 12:27:00<SeP>2024-04-17 23:51:09<SeP>2024-04-19 11:15:18<SeP>2024-04-20 22:39:27<SeP>2024-04-22 10:03:36<SeP>2024-04-23 21:27:45<SeP>2024-04-25 08:51:54<SeP>2024-04-26 20:16:03<SeP>2024-04-28 07:40:12<SeP>2024-04-29 19:04:21<SeP>2024-05-01 06:28:30<SeP>2024-05-02 17:52:39<SeP>2024-05-04 05:16:48<SeP>2024-05-05 16:40:57<SeP>2024-05-07 04:05:06<SeP>2024-05-08 15:29:15<SeP>2024-05-10 02:53:24<SeP>2024-05-11 14:17:33<SeP>2024-05-13 01:41:42<SeP>2024-05-14 13:05:51<SeP>2024-05-16 00:30:00<SeP>2024-05-17 11:54:09<SeP>2024-05-18 23:18:18<SeP>2024-05-20 10:42:27<SeP>2024-05-21 22:06:36<SeP>2024-05-23 09:30:45<SeP>2024-05-24 20:54:54<SeP>2024-05-26 08:19:03<SeP>2024-05-27 19:43:12<SeP>2024-05-29 07:07:21<SeP>2024-05-30 18:31:30<SeP>2024-06-01 05:55:39<SeP>2024-06-02 17:19:48<SeP>2024-06-04 04:43:57<SeP>2024-06-05 16:08:06<SeP>2024-06-07 03:32:15<SeP>2024-06-08 14:56:24<SeP>2024-06-10 02:20:33<SeP>2024-06-11 13:44:42<SeP>2024-06-13 01:08:51<SeP>2024-06-14 12:33:00<SeP>2024-06-15 23:57:09<SeP>2024-06-17 11:21:18<SeP>2024-06-18 22:45:27<SeP>2024-06-20 10:09:36<SeP>2024-06-21 21:33:45<SeP>2024-06-23 08:57:54<SeP>2024-06-24 20:22:03<SeP>2024-06-26 07:46:12<SeP>2024-06-27 19:10:21<SeP>2024-06-29 06:34:30<SeP>2024-06-30 17:58:39<SeP>2024-07-02 05:22:48<SeP>2024-07-03 16:46:57<SeP>2024-07-05 04:11:06<SeP>2024-07-06 15:35:15<SeP>2024-07-08 02:59:24<SeP>2024-07-09 14:23:33<SeP>2024-07-11 01:47:42<SeP>2024-07-12 13:11:51<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:00:09<SeP>2024-07-16 23:24:18<SeP>2024-07-18 10:48:27<SeP>2024-07-19 22:12:36<SeP>2024-07-21 09:36:45<SeP>2024-07-22 21:00:54<SeP>2024-07-24 08:25:03<SeP>2024-07-25 19:49:12<SeP>2024-07-27 07:13:21<SeP>2024-07-28 18:37:30<SeP>2024-07-30 06:01:39<SeP>2024-07-31 17:25:48<SeP>2024-08-02 04:49:57<SeP>2024-08-03 16:14:06<SeP>2024-08-05 03:38:15<SeP>2024-08-06 15:02:24<SeP>2024-08-08 02:26:33<SeP>2024-08-09 13:50:42<SeP>2024-08-11 01:14:51<SeP>2024-08-12 12:39:00<SeP>2024-08-14 00:03:09<SeP>2024-08-15 11:27:18<SeP>2024-08-16 22:51:27<SeP>2024-08-18 10:15:36<SeP>2024-08-19 21:39:45<SeP>2024-08-21 09:03:54<SeP>2024-08-22 20:28:03<SeP>2024-08-24 07:52:12<SeP>2024-08-25 19:16:21<SeP>2024-08-27 06:40:30<SeP>2024-08-28 18:04:39<SeP>2024-08-30 05:28:48<SeP>2024-08-31 16:52:57<SeP>2024-09-02 04:17:06<SeP>2024-09-03 15:41:15<SeP>2024-09-05 03:05:24<SeP>2024-09-06 14:29:33<SeP>2024-09-08 01:53:42<SeP>2024-09-09 13:17:51<SeP>2024-09-11 00:42:00<SeP>2024-09-12 12:06:09<SeP>2024-09-13 23:30:18<SeP>2024-09-15 10:54:27<SeP>2024-09-16 22:18:36<SeP>2024-09-18 09:42:45<SeP>2024-09-19 21:06:54<SeP>2024-09-21 08:31:03<SeP>2024-09-22 19:55:12<SeP>2024-09-24 07:19:21<SeP>2024-09-25 18:43:30<SeP>2024-09-27 06:07:39<SeP>2024-09-28 17:31:48<SeP>2024-09-30 04:55:57<SeP>2024-10-01 16:20:06<SeP>2024-10-03 03:44:15<SeP>2024-10-04 15:08:24<SeP>2024-10-06 02:32:33<SeP>2024-10-07 13:56:42<SeP>2024-10-09 01:20:51<SeP>2024-10-10 12:45:00<SeP>2024-10-12 00:09:09<SeP>2024-10-13 11:33:18<SeP>2024-10-14 22:57:27<SeP>2024-10-16 10:21:36<SeP>2024-10-17 21:45:45<SeP>2024-10-19 09:09:54<SeP>2024-10-20 20:34:03<SeP>2024-10-22 07:58:12<SeP>2024-10-23 19:22:21<SeP>2024-10-25 06:46:30<SeP>2024-10-26 18:10:39<SeP>2024-10-28 05:34:48<SeP>2024-10-29 16:58:57<SeP>2024-10-31 04:23:06<SeP>2024-11-01 15:47:15<SeP>2024-11-03 02:11:24<SeP>2024-11-04 13:35:33<SeP>2024-11-06 00:59:42<SeP>2024-11-07 12:23:51<SeP>2024-11-08 23:48:00<SeP>2024-11-10 11:12:09<SeP>2024-11-11 22:36:18<SeP>2024-11-13 10:00:27<SeP>2024-11-14 21:24:36<SeP>2024-11-16 08:48:45<SeP>2024-11-17 20:12:54<SeP>2024-11-19 07:37:03<SeP>2024-11-20 19:01:12<SeP>2024-11-22 06:25:21<SeP>2024-11-23 17:49:30<SeP>2024-11-25 05:13:39<SeP>2024-11-26 16:37:48<SeP>2024-11-28 04:01:57<SeP>2024-11-29 15:26:06<SeP>2024-12-01 02:50:15<SeP>2024-12-02 14:14:24<SeP>2024-12-04 01:38:33<SeP>2024-12-05 13:02:42<SeP>2024-12-07 00:26:51<SeP>2024-12-08 11:51:00<SeP>2024-12-09 23:15:09<SeP>2024-12-11 10:39:18<SeP>2024-12-12 22:03:27<SeP>2024-12-14 09:27:36<SeP>2024-12-15 20:51:45<SeP>2024-12-17 08:15:54<SeP>2024-12-18 19:40:03<SeP>2024-12-20 07:04:12<SeP>2024-12-21 18:28:21<SeP>2024-12-23 05:52:30<SeP>2024-12-24 17:16:39<SeP>2024-12-26 04:40:48<SeP>2024-12-27 16:04:57<SeP>2024-12-29 03:29:06<SeP>2024-12-30 14:53:15<SeP>2025-01-01 02:17:24<SeP>2025-01-02 13:41:33<SeP>2025-01-04 01:05:42<SeP>2025-01-05 12:29:51<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:18:09<SeP>2025-01-09 22:42:18<SeP>2025-01-11 10:06:27<SeP>2025-01-12 21:30:36<SeP>2025-01-14 08:54:45<SeP>2025-01-15 20:18:54<SeP>2025-01-17 07:43:03<SeP>2025-01-18 19:07:12<SeP>2025-01-20 06:31:21<SeP>2025-01-21 17:55:30<SeP>2025-01-23 05:19:39<SeP>2025-01-24 16:43:48<SeP>2025-01-26 04:07:57<SeP>2025-01-27 15:32:06<SeP>2025-01-29 02:56:15<SeP>2025-01-30 14:20:24<SeP>2025-02-01 01:44:33<SeP>2025-02-02 13:08:42<SeP>2025-02-04 00:32:51<SeP>2025-02-05 11:57:00<SeP>2025-02-06 23:21:09<SeP>2025-02-08 10:45:18<SeP>2025-02-09 22:09:27<SeP>2025-02-11 09:33:36<SeP>2025-02-12 20:57:45<SeP>2025-02-14 08:21:54<SeP>2025-02-15 19:46:03<SeP>2025-02-17 07:10:12<SeP>2025-02-18 18:34:21<SeP>2025-02-20 05:58:30<SeP>2025-02-21 17:22:39<SeP>2025-02-23 04:46:48<SeP>2025-02-24 16:10:57<SeP>2025-02-26 03:35:06<SeP>2025-02-27 14:59:15<SeP>2025-03-01 02:23:24<SeP>2025-03-02 13:47:33<SeP>2025-03-04 01:11:42<SeP>2025-03-05 12:35:51";
  const itemLabel       = "Attacks";
  const itemData        = "155<SeP>614<SeP>1330<SeP>724<SeP>220<SeP>236<SeP>7000<SeP>564<SeP>9454<SeP>567<SeP>401<SeP>1128<SeP>1297<SeP>238<SeP>282<SeP>337<SeP>127<SeP>746<SeP>343<SeP>7377<SeP>7180<SeP>6594<SeP>8844<SeP>3519<SeP>251<SeP>429<SeP>192<SeP>384<SeP>5755<SeP>264<SeP>364<SeP>138<SeP>538<SeP>297<SeP>8297<SeP>9790<SeP>10361<SeP>9535<SeP>6786<SeP>5267<SeP>8631<SeP>7406<SeP>9054<SeP>8985<SeP>7427<SeP>8644<SeP>8637<SeP>8609<SeP>8545<SeP>5813<SeP>6198<SeP>12825<SeP>6267<SeP>7719<SeP>7885<SeP>10547<SeP>18211<SeP>15933<SeP>9970<SeP>10762<SeP>7618<SeP>7469<SeP>8831<SeP>9152<SeP>8325<SeP>7306<SeP>6593<SeP>6440<SeP>6755<SeP>4454<SeP>5793<SeP>5812<SeP>6502<SeP>5887<SeP>8243<SeP>3913<SeP>6106<SeP>5467<SeP>6999<SeP>4310<SeP>7428<SeP>4534<SeP>6359<SeP>6506<SeP>5649<SeP>5741<SeP>5558<SeP>21864<SeP>11240<SeP>35325<SeP>7235<SeP>8496<SeP>6254<SeP>11716<SeP>7465<SeP>5067<SeP>6513<SeP>3794<SeP>5478<SeP>6477<SeP>5241<SeP>8677<SeP>6562<SeP>5673<SeP>4211<SeP>6003<SeP>9618<SeP>8292<SeP>7265<SeP>5198<SeP>5558<SeP>10246<SeP>8706<SeP>4865<SeP>3294<SeP>6442<SeP>9541<SeP>4846<SeP>7697<SeP>9010<SeP>4167<SeP>3033<SeP>1075<SeP>1663<SeP>1853<SeP>2521<SeP>852<SeP>1322<SeP>665<SeP>1633<SeP>1248<SeP>1161<SeP>1167<SeP>858<SeP>1131<SeP>1089<SeP>1142<SeP>1436<SeP>1143<SeP>1661<SeP>2140<SeP>1560<SeP>12350<SeP>6073<SeP>10603<SeP>7406<SeP>5485<SeP>10649<SeP>9121<SeP>9316<SeP>8533<SeP>13919<SeP>8504<SeP>10738<SeP>10954<SeP>12685<SeP>9831<SeP>8737<SeP>3841<SeP>7832<SeP>17213<SeP>14797<SeP>5806<SeP>7878<SeP>10740<SeP>16868<SeP>8805<SeP>4082<SeP>7673<SeP>6977<SeP>26035<SeP>7796<SeP>9001<SeP>10751<SeP>5751<SeP>5497<SeP>6575<SeP>16325<SeP>4771<SeP>12696<SeP>7933<SeP>6728<SeP>8803<SeP>7305<SeP>3026<SeP>7004<SeP>4917<SeP>7828<SeP>7026<SeP>6662<SeP>5688<SeP>21000<SeP>6751<SeP>6028<SeP>6277<SeP>8277<SeP>11462<SeP>6951<SeP>4456<SeP>3292<SeP>6327<SeP>3366<SeP>4123<SeP>4166<SeP>632<SeP>110<SeP>635<SeP>562<SeP>630<SeP>740<SeP>366<SeP>658<SeP>1252<SeP>1279<SeP>3135<SeP>22948<SeP>554<SeP>4482<SeP>3239<SeP>2512<SeP>7881<SeP>2786<SeP>4165<SeP>3146<SeP>3195<SeP>3039<SeP>3291<SeP>4674<SeP>1910<SeP>2929<SeP>2616<SeP>2197<SeP>1959<SeP>1917<SeP>1140<SeP>1910<SeP>796<SeP>925<SeP>1777<SeP>26749<SeP>1485<SeP>3592<SeP>3480<SeP>3097<SeP>3245<SeP>3111<SeP>1624<SeP>3669<SeP>2588<SeP>3504<SeP>2658<SeP>2529<SeP>3289<SeP>3429<SeP>6765<SeP>5209<SeP>4326<SeP>2745<SeP>2975<SeP>3666<SeP>4150<SeP>6506<SeP>8851<SeP>3722<SeP>2305<SeP>3280<SeP>3743<SeP>4259<SeP>3123<SeP>3340<SeP>2666<SeP>5043<SeP>4571<SeP>3376<SeP>6069<SeP>5434<SeP>4860<SeP>4766<SeP>5552<SeP>10820<SeP>17560<SeP>12824<SeP>1930<SeP>1850<SeP>5118<SeP>3414<SeP>3813<SeP>4205<SeP>5048<SeP>3969<SeP>4537<SeP>4246<SeP>3570<SeP>3304<SeP>1268<SeP>2117<SeP>3101<SeP>2879<SeP>2834<SeP>3317<SeP>4331<SeP>4132<SeP>3116<SeP>4627<SeP>3004<SeP>3560<SeP>4066<SeP>8063<SeP>6378<SeP>5456<SeP>4868<SeP>5047<SeP>3694<SeP>3826<SeP>4657<SeP>5556<SeP>5422<SeP>4351<SeP>4273<SeP>2327<SeP>417<SeP>2131<SeP>1674<SeP>753<SeP>1913<SeP>1540<SeP>831<SeP>3081<SeP>3918<SeP>6668<SeP>13593<SeP>25265<SeP>5601<SeP>11591<SeP>16346<SeP>5594<SeP>5609<SeP>5252<SeP>13090<SeP>16015<SeP>5600<SeP>4853<SeP>4732<SeP>6302<SeP>19410<SeP>16072<SeP>4182<SeP>3563<SeP>4021<SeP>5715<SeP>4987<SeP>2991<SeP>3287<SeP>4435<SeP>5216<SeP>5265<SeP>17997<SeP>5249<SeP>6134<SeP>5772<SeP>1765<SeP>2910<SeP>3908<SeP>5445<SeP>3836<SeP>3525<SeP>3102<SeP>3397<SeP>3604<SeP>3645<SeP>6189<SeP>8679<SeP>10080<SeP>8566<SeP>9096<SeP>7918<SeP>7149<SeP>5085<SeP>4993<SeP>4749<SeP>24903<SeP>3348<SeP>4207<SeP>3307<SeP>11528<SeP>5119<SeP>4239<SeP>4535<SeP>4581<SeP>3344<SeP>6525<SeP>10300<SeP>6169<SeP>3824<SeP>3428<SeP>2728<SeP>2248<SeP>2345<SeP>2069<SeP>2191";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:24:09<SeP>2023-07-28 22:48:18<SeP>2023-07-30 10:12:27<SeP>2023-07-31 21:36:36<SeP>2023-08-02 09:00:45<SeP>2023-08-03 20:24:54<SeP>2023-08-05 07:49:03<SeP>2023-08-06 19:13:12<SeP>2023-08-08 06:37:21<SeP>2023-08-09 18:01:30<SeP>2023-08-11 05:25:39<SeP>2023-08-12 16:49:48<SeP>2023-08-14 04:13:57<SeP>2023-08-15 15:38:06<SeP>2023-08-17 03:02:15<SeP>2023-08-18 14:26:24<SeP>2023-08-20 01:50:33<SeP>2023-08-21 13:14:42<SeP>2023-08-23 00:38:51<SeP>2023-08-24 12:03:00<SeP>2023-08-25 23:27:09<SeP>2023-08-27 10:51:18<SeP>2023-08-28 22:15:27<SeP>2023-08-30 09:39:36<SeP>2023-08-31 21:03:45<SeP>2023-09-02 08:27:54<SeP>2023-09-03 19:52:03<SeP>2023-09-05 07:16:12<SeP>2023-09-06 18:40:21<SeP>2023-09-08 06:04:30<SeP>2023-09-09 17:28:39<SeP>2023-09-11 04:52:48<SeP>2023-09-12 16:16:57<SeP>2023-09-14 03:41:06<SeP>2023-09-15 15:05:15<SeP>2023-09-17 02:29:24<SeP>2023-09-18 13:53:33<SeP>2023-09-20 01:17:42<SeP>2023-09-21 12:41:51<SeP>2023-09-23 00:06:00<SeP>2023-09-24 11:30:09<SeP>2023-09-25 22:54:18<SeP>2023-09-27 10:18:27<SeP>2023-09-28 21:42:36<SeP>2023-09-30 09:06:45<SeP>2023-10-01 20:30:54<SeP>2023-10-03 07:55:03<SeP>2023-10-04 19:19:12<SeP>2023-10-06 06:43:21<SeP>2023-10-07 18:07:30<SeP>2023-10-09 05:31:39<SeP>2023-10-10 16:55:48<SeP>2023-10-12 04:19:57<SeP>2023-10-13 15:44:06<SeP>2023-10-15 03:08:15<SeP>2023-10-16 14:32:24<SeP>2023-10-18 01:56:33<SeP>2023-10-19 13:20:42<SeP>2023-10-21 00:44:51<SeP>2023-10-22 12:09:00<SeP>2023-10-23 23:33:09<SeP>2023-10-25 10:57:18<SeP>2023-10-26 22:21:27<SeP>2023-10-28 09:45:36<SeP>2023-10-29 21:09:45<SeP>2023-10-31 08:33:54<SeP>2023-11-01 19:58:03<SeP>2023-11-03 07:22:12<SeP>2023-11-04 18:46:21<SeP>2023-11-06 05:10:30<SeP>2023-11-07 16:34:39<SeP>2023-11-09 03:58:48<SeP>2023-11-10 15:22:57<SeP>2023-11-12 02:47:06<SeP>2023-11-13 14:11:15<SeP>2023-11-15 01:35:24<SeP>2023-11-16 12:59:33<SeP>2023-11-18 00:23:42<SeP>2023-11-19 11:47:51<SeP>2023-11-20 23:12:00<SeP>2023-11-22 10:36:09<SeP>2023-11-23 22:00:18<SeP>2023-11-25 09:24:27<SeP>2023-11-26 20:48:36<SeP>2023-11-28 08:12:45<SeP>2023-11-29 19:36:54<SeP>2023-12-01 07:01:03<SeP>2023-12-02 18:25:12<SeP>2023-12-04 05:49:21<SeP>2023-12-05 17:13:30<SeP>2023-12-07 04:37:39<SeP>2023-12-08 16:01:48<SeP>2023-12-10 03:25:57<SeP>2023-12-11 14:50:06<SeP>2023-12-13 02:14:15<SeP>2023-12-14 13:38:24<SeP>2023-12-16 01:02:33<SeP>2023-12-17 12:26:42<SeP>2023-12-18 23:50:51<SeP>2023-12-20 11:15:00<SeP>2023-12-21 22:39:09<SeP>2023-12-23 10:03:18<SeP>2023-12-24 21:27:27<SeP>2023-12-26 08:51:36<SeP>2023-12-27 20:15:45<SeP>2023-12-29 07:39:54<SeP>2023-12-30 19:04:03<SeP>2024-01-01 06:28:12<SeP>2024-01-02 17:52:21<SeP>2024-01-04 05:16:30<SeP>2024-01-05 16:40:39<SeP>2024-01-07 04:04:48<SeP>2024-01-08 15:28:57<SeP>2024-01-10 02:53:06<SeP>2024-01-11 14:17:15<SeP>2024-01-13 01:41:24<SeP>2024-01-14 13:05:33<SeP>2024-01-16 00:29:42<SeP>2024-01-17 11:53:51<SeP>2024-01-18 23:18:00<SeP>2024-01-20 10:42:09<SeP>2024-01-21 22:06:18<SeP>2024-01-23 09:30:27<SeP>2024-01-24 20:54:36<SeP>2024-01-26 08:18:45<SeP>2024-01-27 19:42:54<SeP>2024-01-29 07:07:03<SeP>2024-01-30 18:31:12<SeP>2024-02-01 05:55:21<SeP>2024-02-02 17:19:30<SeP>2024-02-04 04:43:39<SeP>2024-02-05 16:07:48<SeP>2024-02-07 03:31:57<SeP>2024-02-08 14:56:06<SeP>2024-02-10 02:20:15<SeP>2024-02-11 13:44:24<SeP>2024-02-13 01:08:33<SeP>2024-02-14 12:32:42<SeP>2024-02-15 23:56:51<SeP>2024-02-17 11:21:00<SeP>2024-02-18 22:45:09<SeP>2024-02-20 10:09:18<SeP>2024-02-21 21:33:27<SeP>2024-02-23 08:57:36<SeP>2024-02-24 20:21:45<SeP>2024-02-26 07:45:54<SeP>2024-02-27 19:10:03<SeP>2024-02-29 06:34:12<SeP>2024-03-01 17:58:21<SeP>2024-03-03 05:22:30<SeP>2024-03-04 16:46:39<SeP>2024-03-06 04:10:48<SeP>2024-03-07 15:34:57<SeP>2024-03-09 02:59:06<SeP>2024-03-10 15:23:15<SeP>2024-03-12 02:47:24<SeP>2024-03-13 14:11:33<SeP>2024-03-15 01:35:42<SeP>2024-03-16 12:59:51<SeP>2024-03-18 00:24:00<SeP>2024-03-19 11:48:09<SeP>2024-03-20 23:12:18<SeP>2024-03-22 10:36:27<SeP>2024-03-23 22:00:36<SeP>2024-03-25 09:24:45<SeP>2024-03-26 20:48:54<SeP>2024-03-28 08:13:03<SeP>2024-03-29 19:37:12<SeP>2024-03-31 07:01:21<SeP>2024-04-01 18:25:30<SeP>2024-04-03 05:49:39<SeP>2024-04-04 17:13:48<SeP>2024-04-06 04:37:57<SeP>2024-04-07 16:02:06<SeP>2024-04-09 03:26:15<SeP>2024-04-10 14:50:24<SeP>2024-04-12 02:14:33<SeP>2024-04-13 13:38:42<SeP>2024-04-15 01:02:51<SeP>2024-04-16 12:27:00<SeP>2024-04-17 23:51:09<SeP>2024-04-19 11:15:18<SeP>2024-04-20 22:39:27<SeP>2024-04-22 10:03:36<SeP>2024-04-23 21:27:45<SeP>2024-04-25 08:51:54<SeP>2024-04-26 20:16:03<SeP>2024-04-28 07:40:12<SeP>2024-04-29 19:04:21<SeP>2024-05-01 06:28:30<SeP>2024-05-02 17:52:39<SeP>2024-05-04 05:16:48<SeP>2024-05-05 16:40:57<SeP>2024-05-07 04:05:06<SeP>2024-05-08 15:29:15<SeP>2024-05-10 02:53:24<SeP>2024-05-11 14:17:33<SeP>2024-05-13 01:41:42<SeP>2024-05-14 13:05:51<SeP>2024-05-16 00:30:00<SeP>2024-05-17 11:54:09<SeP>2024-05-18 23:18:18<SeP>2024-05-20 10:42:27<SeP>2024-05-21 22:06:36<SeP>2024-05-23 09:30:45<SeP>2024-05-24 20:54:54<SeP>2024-05-26 08:19:03<SeP>2024-05-27 19:43:12<SeP>2024-05-29 07:07:21<SeP>2024-05-30 18:31:30<SeP>2024-06-01 05:55:39<SeP>2024-06-02 17:19:48<SeP>2024-06-04 04:43:57<SeP>2024-06-05 16:08:06<SeP>2024-06-07 03:32:15<SeP>2024-06-08 14:56:24<SeP>2024-06-10 02:20:33<SeP>2024-06-11 13:44:42<SeP>2024-06-13 01:08:51<SeP>2024-06-14 12:33:00<SeP>2024-06-15 23:57:09<SeP>2024-06-17 11:21:18<SeP>2024-06-18 22:45:27<SeP>2024-06-20 10:09:36<SeP>2024-06-21 21:33:45<SeP>2024-06-23 08:57:54<SeP>2024-06-24 20:22:03<SeP>2024-06-26 07:46:12<SeP>2024-06-27 19:10:21<SeP>2024-06-29 06:34:30<SeP>2024-06-30 17:58:39<SeP>2024-07-02 05:22:48<SeP>2024-07-03 16:46:57<SeP>2024-07-05 04:11:06<SeP>2024-07-06 15:35:15<SeP>2024-07-08 02:59:24<SeP>2024-07-09 14:23:33<SeP>2024-07-11 01:47:42<SeP>2024-07-12 13:11:51<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:00:09<SeP>2024-07-16 23:24:18<SeP>2024-07-18 10:48:27<SeP>2024-07-19 22:12:36<SeP>2024-07-21 09:36:45<SeP>2024-07-22 21:00:54<SeP>2024-07-24 08:25:03<SeP>2024-07-25 19:49:12<SeP>2024-07-27 07:13:21<SeP>2024-07-28 18:37:30<SeP>2024-07-30 06:01:39<SeP>2024-07-31 17:25:48<SeP>2024-08-02 04:49:57<SeP>2024-08-03 16:14:06<SeP>2024-08-05 03:38:15<SeP>2024-08-06 15:02:24<SeP>2024-08-08 02:26:33<SeP>2024-08-09 13:50:42<SeP>2024-08-11 01:14:51<SeP>2024-08-12 12:39:00<SeP>2024-08-14 00:03:09<SeP>2024-08-15 11:27:18<SeP>2024-08-16 22:51:27<SeP>2024-08-18 10:15:36<SeP>2024-08-19 21:39:45<SeP>2024-08-21 09:03:54<SeP>2024-08-22 20:28:03<SeP>2024-08-24 07:52:12<SeP>2024-08-25 19:16:21<SeP>2024-08-27 06:40:30<SeP>2024-08-28 18:04:39<SeP>2024-08-30 05:28:48<SeP>2024-08-31 16:52:57<SeP>2024-09-02 04:17:06<SeP>2024-09-03 15:41:15<SeP>2024-09-05 03:05:24<SeP>2024-09-06 14:29:33<SeP>2024-09-08 01:53:42<SeP>2024-09-09 13:17:51<SeP>2024-09-11 00:42:00<SeP>2024-09-12 12:06:09<SeP>2024-09-13 23:30:18<SeP>2024-09-15 10:54:27<SeP>2024-09-16 22:18:36<SeP>2024-09-18 09:42:45<SeP>2024-09-19 21:06:54<SeP>2024-09-21 08:31:03<SeP>2024-09-22 19:55:12<SeP>2024-09-24 07:19:21<SeP>2024-09-25 18:43:30<SeP>2024-09-27 06:07:39<SeP>2024-09-28 17:31:48<SeP>2024-09-30 04:55:57<SeP>2024-10-01 16:20:06<SeP>2024-10-03 03:44:15<SeP>2024-10-04 15:08:24<SeP>2024-10-06 02:32:33<SeP>2024-10-07 13:56:42<SeP>2024-10-09 01:20:51<SeP>2024-10-10 12:45:00<SeP>2024-10-12 00:09:09<SeP>2024-10-13 11:33:18<SeP>2024-10-14 22:57:27<SeP>2024-10-16 10:21:36<SeP>2024-10-17 21:45:45<SeP>2024-10-19 09:09:54<SeP>2024-10-20 20:34:03<SeP>2024-10-22 07:58:12<SeP>2024-10-23 19:22:21<SeP>2024-10-25 06:46:30<SeP>2024-10-26 18:10:39<SeP>2024-10-28 05:34:48<SeP>2024-10-29 16:58:57<SeP>2024-10-31 04:23:06<SeP>2024-11-01 15:47:15<SeP>2024-11-03 02:11:24<SeP>2024-11-04 13:35:33<SeP>2024-11-06 00:59:42<SeP>2024-11-07 12:23:51<SeP>2024-11-08 23:48:00<SeP>2024-11-10 11:12:09<SeP>2024-11-11 22:36:18<SeP>2024-11-13 10:00:27<SeP>2024-11-14 21:24:36<SeP>2024-11-16 08:48:45<SeP>2024-11-17 20:12:54<SeP>2024-11-19 07:37:03<SeP>2024-11-20 19:01:12<SeP>2024-11-22 06:25:21<SeP>2024-11-23 17:49:30<SeP>2024-11-25 05:13:39<SeP>2024-11-26 16:37:48<SeP>2024-11-28 04:01:57<SeP>2024-11-29 15:26:06<SeP>2024-12-01 02:50:15<SeP>2024-12-02 14:14:24<SeP>2024-12-04 01:38:33<SeP>2024-12-05 13:02:42<SeP>2024-12-07 00:26:51<SeP>2024-12-08 11:51:00<SeP>2024-12-09 23:15:09<SeP>2024-12-11 10:39:18<SeP>2024-12-12 22:03:27<SeP>2024-12-14 09:27:36<SeP>2024-12-15 20:51:45<SeP>2024-12-17 08:15:54<SeP>2024-12-18 19:40:03<SeP>2024-12-20 07:04:12<SeP>2024-12-21 18:28:21<SeP>2024-12-23 05:52:30<SeP>2024-12-24 17:16:39<SeP>2024-12-26 04:40:48<SeP>2024-12-27 16:04:57<SeP>2024-12-29 03:29:06<SeP>2024-12-30 14:53:15<SeP>2025-01-01 02:17:24<SeP>2025-01-02 13:41:33<SeP>2025-01-04 01:05:42<SeP>2025-01-05 12:29:51<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:18:09<SeP>2025-01-09 22:42:18<SeP>2025-01-11 10:06:27<SeP>2025-01-12 21:30:36<SeP>2025-01-14 08:54:45<SeP>2025-01-15 20:18:54<SeP>2025-01-17 07:43:03<SeP>2025-01-18 19:07:12<SeP>2025-01-20 06:31:21<SeP>2025-01-21 17:55:30<SeP>2025-01-23 05:19:39<SeP>2025-01-24 16:43:48<SeP>2025-01-26 04:07:57<SeP>2025-01-27 15:32:06<SeP>2025-01-29 02:56:15<SeP>2025-01-30 14:20:24<SeP>2025-02-01 01:44:33<SeP>2025-02-02 13:08:42<SeP>2025-02-04 00:32:51<SeP>2025-02-05 11:57:00<SeP>2025-02-06 23:21:09<SeP>2025-02-08 10:45:18<SeP>2025-02-09 22:09:27<SeP>2025-02-11 09:33:36<SeP>2025-02-12 20:57:45<SeP>2025-02-14 08:21:54<SeP>2025-02-15 19:46:03<SeP>2025-02-17 07:10:12<SeP>2025-02-18 18:34:21<SeP>2025-02-20 05:58:30<SeP>2025-02-21 17:22:39<SeP>2025-02-23 04:46:48<SeP>2025-02-24 16:10:57<SeP>2025-02-26 03:35:06<SeP>2025-02-27 14:59:15<SeP>2025-03-01 02:23:24<SeP>2025-03-02 13:47:33<SeP>2025-03-04 01:11:42<SeP>2025-03-05 12:35:51";
  const item1Label       = "Escaneos";
  const item1Data        = "771<SeP>1517<SeP>1366<SeP>1486<SeP>1230<SeP>1750<SeP>941<SeP>961<SeP>1165<SeP>3406<SeP>2929<SeP>1492<SeP>3300<SeP>891<SeP>770<SeP>890<SeP>1416<SeP>2956<SeP>1789<SeP>1191<SeP>1249<SeP>933<SeP>1046<SeP>1249<SeP>898<SeP>853<SeP>820<SeP>3801<SeP>739<SeP>971<SeP>1091<SeP>1532<SeP>904<SeP>819<SeP>3240<SeP>2727<SeP>1976<SeP>1489<SeP>1804<SeP>1229<SeP>1688<SeP>1906<SeP>2090<SeP>1652<SeP>1719<SeP>1614<SeP>1644<SeP>1759<SeP>1718<SeP>1833<SeP>1789<SeP>1710<SeP>1758<SeP>3086<SeP>1355<SeP>1947<SeP>1867<SeP>2412<SeP>1545<SeP>2369<SeP>2924<SeP>1455<SeP>1504<SeP>1435<SeP>1694<SeP>1715<SeP>1596<SeP>1186<SeP>1444<SeP>1211<SeP>2396<SeP>1244<SeP>1124<SeP>1329<SeP>2436<SeP>7048<SeP>1301<SeP>1286<SeP>1438<SeP>2228<SeP>1276<SeP>2200<SeP>5646<SeP>1548<SeP>1652<SeP>936<SeP>3296<SeP>1223<SeP>1080<SeP>1062<SeP>1088<SeP>1026<SeP>3137<SeP>902<SeP>1139<SeP>2959<SeP>4634<SeP>3651<SeP>982<SeP>888<SeP>970<SeP>955<SeP>1025<SeP>913<SeP>1109<SeP>3505<SeP>2507<SeP>1433<SeP>1655<SeP>699<SeP>901<SeP>1494<SeP>1190<SeP>1084<SeP>990<SeP>2248<SeP>1323<SeP>1066<SeP>1008<SeP>1063<SeP>855<SeP>846<SeP>898<SeP>819<SeP>927<SeP>1043<SeP>806<SeP>819<SeP>852<SeP>1001<SeP>813<SeP>687<SeP>900<SeP>877<SeP>810<SeP>903<SeP>897<SeP>782<SeP>809<SeP>931<SeP>935<SeP>814<SeP>866<SeP>907<SeP>929<SeP>1141<SeP>984<SeP>550<SeP>847<SeP>842<SeP>887<SeP>1295<SeP>904<SeP>1141<SeP>1207<SeP>1160<SeP>904<SeP>926<SeP>960<SeP>842<SeP>869<SeP>1117<SeP>941<SeP>791<SeP>976<SeP>1101<SeP>886<SeP>1092<SeP>1029<SeP>1039<SeP>1093<SeP>939<SeP>1026<SeP>2157<SeP>1342<SeP>993<SeP>1038<SeP>1147<SeP>1033<SeP>970<SeP>822<SeP>643<SeP>950<SeP>1157<SeP>883<SeP>983<SeP>1141<SeP>1305<SeP>1141<SeP>1277<SeP>1131<SeP>1373<SeP>1117<SeP>1499<SeP>1218<SeP>1572<SeP>2109<SeP>1324<SeP>812<SeP>896<SeP>1106<SeP>1085<SeP>661<SeP>823<SeP>857<SeP>1021<SeP>786<SeP>5202<SeP>3514<SeP>2008<SeP>1275<SeP>1162<SeP>868<SeP>1058<SeP>840<SeP>1027<SeP>1053<SeP>1131<SeP>1031<SeP>1335<SeP>2123<SeP>1010<SeP>1250<SeP>1256<SeP>1247<SeP>1170<SeP>1058<SeP>967<SeP>1086<SeP>1120<SeP>997<SeP>1202<SeP>957<SeP>1194<SeP>813<SeP>1412<SeP>1075<SeP>1176<SeP>1170<SeP>1285<SeP>1358<SeP>1505<SeP>1193<SeP>1202<SeP>1088<SeP>1201<SeP>1959<SeP>1284<SeP>1603<SeP>1853<SeP>1444<SeP>1964<SeP>1720<SeP>1270<SeP>1189<SeP>1234<SeP>1230<SeP>1461<SeP>1375<SeP>1228<SeP>1385<SeP>1904<SeP>1407<SeP>1481<SeP>1352<SeP>1449<SeP>1144<SeP>1138<SeP>1312<SeP>1172<SeP>1249<SeP>1230<SeP>1269<SeP>1278<SeP>1896<SeP>1371<SeP>1321<SeP>1586<SeP>1518<SeP>1206<SeP>1106<SeP>865<SeP>995<SeP>840<SeP>1056<SeP>1007<SeP>1801<SeP>1096<SeP>1134<SeP>1173<SeP>788<SeP>1015<SeP>1004<SeP>1320<SeP>875<SeP>911<SeP>1153<SeP>1384<SeP>1646<SeP>1264<SeP>1085<SeP>1041<SeP>1115<SeP>1821<SeP>939<SeP>1246<SeP>1013<SeP>1492<SeP>1163<SeP>863<SeP>1240<SeP>1118<SeP>885<SeP>903<SeP>1151<SeP>1369<SeP>1587<SeP>1406<SeP>1441<SeP>1320<SeP>938<SeP>1176<SeP>1195<SeP>1207<SeP>1125<SeP>1014<SeP>1080<SeP>1127<SeP>1456<SeP>1379<SeP>1453<SeP>1428<SeP>1457<SeP>1513<SeP>1469<SeP>1259<SeP>1510<SeP>1531<SeP>1448<SeP>1347<SeP>1497<SeP>1673<SeP>1559<SeP>1320<SeP>1457<SeP>1340<SeP>1224<SeP>1270<SeP>1441<SeP>1642<SeP>1489<SeP>1297<SeP>1117<SeP>1524<SeP>1161<SeP>1415<SeP>1197<SeP>1729<SeP>1862<SeP>1344<SeP>757<SeP>1159<SeP>1860<SeP>1432<SeP>1291<SeP>1399<SeP>1055<SeP>1385<SeP>1423<SeP>1243<SeP>1524<SeP>1498<SeP>1618<SeP>1499<SeP>1589<SeP>1587<SeP>1447<SeP>1402<SeP>1656<SeP>1453<SeP>1292<SeP>1188<SeP>1881<SeP>1796<SeP>1820<SeP>1780<SeP>1752<SeP>1614<SeP>1603<SeP>1582<SeP>1555<SeP>1531<SeP>1747<SeP>1725<SeP>1745<SeP>1412<SeP>1500<SeP>1499<SeP>1456<SeP>1611";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "155<SeP>614<SeP>1330<SeP>724<SeP>220<SeP>236<SeP>7000<SeP>564<SeP>9454<SeP>567<SeP>401<SeP>1128<SeP>1297<SeP>238<SeP>282<SeP>337<SeP>127<SeP>746<SeP>343<SeP>7377<SeP>7180<SeP>6594<SeP>8844<SeP>3519<SeP>251<SeP>429<SeP>192<SeP>384<SeP>5755<SeP>264<SeP>364<SeP>138<SeP>538<SeP>297<SeP>8297<SeP>9790<SeP>10361<SeP>9535<SeP>6786<SeP>5267<SeP>8631<SeP>7406<SeP>9054<SeP>8985<SeP>7427<SeP>8644<SeP>8637<SeP>8609<SeP>8545<SeP>5813<SeP>6198<SeP>12825<SeP>6267<SeP>7719<SeP>7885<SeP>10547<SeP>18211<SeP>15933<SeP>9970<SeP>10762<SeP>7618<SeP>7469<SeP>8831<SeP>9152<SeP>8325<SeP>7306<SeP>6593<SeP>6440<SeP>6755<SeP>4454<SeP>5793<SeP>5812<SeP>6502<SeP>5887<SeP>8243<SeP>3913<SeP>6106<SeP>5467<SeP>6999<SeP>4310<SeP>7428<SeP>4534<SeP>6359<SeP>6506<SeP>5649<SeP>5741<SeP>5558<SeP>21864<SeP>11240<SeP>35325<SeP>7235<SeP>8496<SeP>6254<SeP>11716<SeP>7465<SeP>5067<SeP>6513<SeP>3794<SeP>5478<SeP>6477<SeP>5241<SeP>8677<SeP>6562<SeP>5673<SeP>4211<SeP>6003<SeP>9618<SeP>8292<SeP>7265<SeP>5198<SeP>5558<SeP>10246<SeP>8706<SeP>4865<SeP>3294<SeP>6442<SeP>9541<SeP>4846<SeP>7697<SeP>9010<SeP>4167<SeP>3033<SeP>1075<SeP>1663<SeP>1853<SeP>2521<SeP>852<SeP>1322<SeP>665<SeP>1633<SeP>1248<SeP>1161<SeP>1167<SeP>858<SeP>1131<SeP>1089<SeP>1142<SeP>1436<SeP>1143<SeP>1661<SeP>2140<SeP>1560<SeP>12350<SeP>6073<SeP>10603<SeP>7406<SeP>5485<SeP>10649<SeP>9121<SeP>9316<SeP>8533<SeP>13919<SeP>8504<SeP>10738<SeP>10954<SeP>12685<SeP>9831<SeP>8737<SeP>3841<SeP>7832<SeP>17213<SeP>14797<SeP>5806<SeP>7878<SeP>10740<SeP>16868<SeP>8805<SeP>4082<SeP>7673<SeP>6977<SeP>26035<SeP>7796<SeP>9001<SeP>10751<SeP>5751<SeP>5497<SeP>6575<SeP>16325<SeP>4771<SeP>12696<SeP>7933<SeP>6728<SeP>8803<SeP>7305<SeP>3026<SeP>7004<SeP>4917<SeP>7828<SeP>7026<SeP>6662<SeP>5688<SeP>21000<SeP>6751<SeP>6028<SeP>6277<SeP>8277<SeP>11462<SeP>6951<SeP>4456<SeP>3292<SeP>6327<SeP>3366<SeP>4123<SeP>4166<SeP>632<SeP>110<SeP>635<SeP>562<SeP>630<SeP>740<SeP>366<SeP>658<SeP>1252<SeP>1279<SeP>3135<SeP>22948<SeP>554<SeP>4482<SeP>3239<SeP>2512<SeP>7881<SeP>2786<SeP>4165<SeP>3146<SeP>3195<SeP>3039<SeP>3291<SeP>4674<SeP>1910<SeP>2929<SeP>2616<SeP>2197<SeP>1959<SeP>1917<SeP>1140<SeP>1910<SeP>796<SeP>925<SeP>1777<SeP>26749<SeP>1485<SeP>3592<SeP>3480<SeP>3097<SeP>3245<SeP>3111<SeP>1624<SeP>3669<SeP>2588<SeP>3504<SeP>2658<SeP>2529<SeP>3289<SeP>3429<SeP>6765<SeP>5209<SeP>4326<SeP>2745<SeP>2975<SeP>3666<SeP>4150<SeP>6506<SeP>8851<SeP>3722<SeP>2305<SeP>3280<SeP>3743<SeP>4259<SeP>3123<SeP>3340<SeP>2666<SeP>5043<SeP>4571<SeP>3376<SeP>6069<SeP>5434<SeP>4860<SeP>4766<SeP>5552<SeP>10820<SeP>17560<SeP>12824<SeP>1930<SeP>1850<SeP>5118<SeP>3414<SeP>3813<SeP>4205<SeP>5048<SeP>3969<SeP>4537<SeP>4246<SeP>3570<SeP>3304<SeP>1268<SeP>2117<SeP>3101<SeP>2879<SeP>2834<SeP>3317<SeP>4331<SeP>4132<SeP>3116<SeP>4627<SeP>3004<SeP>3560<SeP>4066<SeP>8063<SeP>6378<SeP>5456<SeP>4868<SeP>5047<SeP>3694<SeP>3826<SeP>4657<SeP>5556<SeP>5422<SeP>4351<SeP>4273<SeP>2327<SeP>417<SeP>2131<SeP>1674<SeP>753<SeP>1913<SeP>1540<SeP>831<SeP>3081<SeP>3918<SeP>6668<SeP>13593<SeP>25265<SeP>5601<SeP>11591<SeP>16346<SeP>5594<SeP>5609<SeP>5252<SeP>13090<SeP>16015<SeP>5600<SeP>4853<SeP>4732<SeP>6302<SeP>19410<SeP>16072<SeP>4182<SeP>3563<SeP>4021<SeP>5715<SeP>4987<SeP>2991<SeP>3287<SeP>4435<SeP>5216<SeP>5265<SeP>17997<SeP>5249<SeP>6134<SeP>5772<SeP>1765<SeP>2910<SeP>3908<SeP>5445<SeP>3836<SeP>3525<SeP>3102<SeP>3397<SeP>3604<SeP>3645<SeP>6189<SeP>8679<SeP>10080<SeP>8566<SeP>9096<SeP>7918<SeP>7149<SeP>5085<SeP>4993<SeP>4749<SeP>24903<SeP>3348<SeP>4207<SeP>3307<SeP>11528<SeP>5119<SeP>4239<SeP>4535<SeP>4581<SeP>3344<SeP>6525<SeP>10300<SeP>6169<SeP>3824<SeP>3428<SeP>2728<SeP>2248<SeP>2345<SeP>2069<SeP>2191";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:24:09<SeP>2023-07-28 22:48:18<SeP>2023-07-30 10:12:27<SeP>2023-07-31 21:36:36<SeP>2023-08-02 09:00:45<SeP>2023-08-03 20:24:54<SeP>2023-08-05 07:49:03<SeP>2023-08-06 19:13:12<SeP>2023-08-08 06:37:21<SeP>2023-08-09 18:01:30<SeP>2023-08-11 05:25:39<SeP>2023-08-12 16:49:48<SeP>2023-08-14 04:13:57<SeP>2023-08-15 15:38:06<SeP>2023-08-17 03:02:15<SeP>2023-08-18 14:26:24<SeP>2023-08-20 01:50:33<SeP>2023-08-21 13:14:42<SeP>2023-08-23 00:38:51<SeP>2023-08-24 12:03:00<SeP>2023-08-25 23:27:09<SeP>2023-08-27 10:51:18<SeP>2023-08-28 22:15:27<SeP>2023-08-30 09:39:36<SeP>2023-08-31 21:03:45<SeP>2023-09-02 08:27:54<SeP>2023-09-03 19:52:03<SeP>2023-09-05 07:16:12<SeP>2023-09-06 18:40:21<SeP>2023-09-08 06:04:30<SeP>2023-09-09 17:28:39<SeP>2023-09-11 04:52:48<SeP>2023-09-12 16:16:57<SeP>2023-09-14 03:41:06<SeP>2023-09-15 15:05:15<SeP>2023-09-17 02:29:24<SeP>2023-09-18 13:53:33<SeP>2023-09-20 01:17:42<SeP>2023-09-21 12:41:51<SeP>2023-09-23 00:06:00<SeP>2023-09-24 11:30:09<SeP>2023-09-25 22:54:18<SeP>2023-09-27 10:18:27<SeP>2023-09-28 21:42:36<SeP>2023-09-30 09:06:45<SeP>2023-10-01 20:30:54<SeP>2023-10-03 07:55:03<SeP>2023-10-04 19:19:12<SeP>2023-10-06 06:43:21<SeP>2023-10-07 18:07:30<SeP>2023-10-09 05:31:39<SeP>2023-10-10 16:55:48<SeP>2023-10-12 04:19:57<SeP>2023-10-13 15:44:06<SeP>2023-10-15 03:08:15<SeP>2023-10-16 14:32:24<SeP>2023-10-18 01:56:33<SeP>2023-10-19 13:20:42<SeP>2023-10-21 00:44:51<SeP>2023-10-22 12:09:00<SeP>2023-10-23 23:33:09<SeP>2023-10-25 10:57:18<SeP>2023-10-26 22:21:27<SeP>2023-10-28 09:45:36<SeP>2023-10-29 21:09:45<SeP>2023-10-31 08:33:54<SeP>2023-11-01 19:58:03<SeP>2023-11-03 07:22:12<SeP>2023-11-04 18:46:21<SeP>2023-11-06 05:10:30<SeP>2023-11-07 16:34:39<SeP>2023-11-09 03:58:48<SeP>2023-11-10 15:22:57<SeP>2023-11-12 02:47:06<SeP>2023-11-13 14:11:15<SeP>2023-11-15 01:35:24<SeP>2023-11-16 12:59:33<SeP>2023-11-18 00:23:42<SeP>2023-11-19 11:47:51<SeP>2023-11-20 23:12:00<SeP>2023-11-22 10:36:09<SeP>2023-11-23 22:00:18<SeP>2023-11-25 09:24:27<SeP>2023-11-26 20:48:36<SeP>2023-11-28 08:12:45<SeP>2023-11-29 19:36:54<SeP>2023-12-01 07:01:03<SeP>2023-12-02 18:25:12<SeP>2023-12-04 05:49:21<SeP>2023-12-05 17:13:30<SeP>2023-12-07 04:37:39<SeP>2023-12-08 16:01:48<SeP>2023-12-10 03:25:57<SeP>2023-12-11 14:50:06<SeP>2023-12-13 02:14:15<SeP>2023-12-14 13:38:24<SeP>2023-12-16 01:02:33<SeP>2023-12-17 12:26:42<SeP>2023-12-18 23:50:51<SeP>2023-12-20 11:15:00<SeP>2023-12-21 22:39:09<SeP>2023-12-23 10:03:18<SeP>2023-12-24 21:27:27<SeP>2023-12-26 08:51:36<SeP>2023-12-27 20:15:45<SeP>2023-12-29 07:39:54<SeP>2023-12-30 19:04:03<SeP>2024-01-01 06:28:12<SeP>2024-01-02 17:52:21<SeP>2024-01-04 05:16:30<SeP>2024-01-05 16:40:39<SeP>2024-01-07 04:04:48<SeP>2024-01-08 15:28:57<SeP>2024-01-10 02:53:06<SeP>2024-01-11 14:17:15<SeP>2024-01-13 01:41:24<SeP>2024-01-14 13:05:33<SeP>2024-01-16 00:29:42<SeP>2024-01-17 11:53:51<SeP>2024-01-18 23:18:00<SeP>2024-01-20 10:42:09<SeP>2024-01-21 22:06:18<SeP>2024-01-23 09:30:27<SeP>2024-01-24 20:54:36<SeP>2024-01-26 08:18:45<SeP>2024-01-27 19:42:54<SeP>2024-01-29 07:07:03<SeP>2024-01-30 18:31:12<SeP>2024-02-01 05:55:21<SeP>2024-02-02 17:19:30<SeP>2024-02-04 04:43:39<SeP>2024-02-05 16:07:48<SeP>2024-02-07 03:31:57<SeP>2024-02-08 14:56:06<SeP>2024-02-10 02:20:15<SeP>2024-02-11 13:44:24<SeP>2024-02-13 01:08:33<SeP>2024-02-14 12:32:42<SeP>2024-02-15 23:56:51<SeP>2024-02-17 11:21:00<SeP>2024-02-18 22:45:09<SeP>2024-02-20 10:09:18<SeP>2024-02-21 21:33:27<SeP>2024-02-23 08:57:36<SeP>2024-02-24 20:21:45<SeP>2024-02-26 07:45:54<SeP>2024-02-27 19:10:03<SeP>2024-02-29 06:34:12<SeP>2024-03-01 17:58:21<SeP>2024-03-03 05:22:30<SeP>2024-03-04 16:46:39<SeP>2024-03-06 04:10:48<SeP>2024-03-07 15:34:57<SeP>2024-03-09 02:59:06<SeP>2024-03-10 15:23:15<SeP>2024-03-12 02:47:24<SeP>2024-03-13 14:11:33<SeP>2024-03-15 01:35:42<SeP>2024-03-16 12:59:51<SeP>2024-03-18 00:24:00<SeP>2024-03-19 11:48:09<SeP>2024-03-20 23:12:18<SeP>2024-03-22 10:36:27<SeP>2024-03-23 22:00:36<SeP>2024-03-25 09:24:45<SeP>2024-03-26 20:48:54<SeP>2024-03-28 08:13:03<SeP>2024-03-29 19:37:12<SeP>2024-03-31 07:01:21<SeP>2024-04-01 18:25:30<SeP>2024-04-03 05:49:39<SeP>2024-04-04 17:13:48<SeP>2024-04-06 04:37:57<SeP>2024-04-07 16:02:06<SeP>2024-04-09 03:26:15<SeP>2024-04-10 14:50:24<SeP>2024-04-12 02:14:33<SeP>2024-04-13 13:38:42<SeP>2024-04-15 01:02:51<SeP>2024-04-16 12:27:00<SeP>2024-04-17 23:51:09<SeP>2024-04-19 11:15:18<SeP>2024-04-20 22:39:27<SeP>2024-04-22 10:03:36<SeP>2024-04-23 21:27:45<SeP>2024-04-25 08:51:54<SeP>2024-04-26 20:16:03<SeP>2024-04-28 07:40:12<SeP>2024-04-29 19:04:21<SeP>2024-05-01 06:28:30<SeP>2024-05-02 17:52:39<SeP>2024-05-04 05:16:48<SeP>2024-05-05 16:40:57<SeP>2024-05-07 04:05:06<SeP>2024-05-08 15:29:15<SeP>2024-05-10 02:53:24<SeP>2024-05-11 14:17:33<SeP>2024-05-13 01:41:42<SeP>2024-05-14 13:05:51<SeP>2024-05-16 00:30:00<SeP>2024-05-17 11:54:09<SeP>2024-05-18 23:18:18<SeP>2024-05-20 10:42:27<SeP>2024-05-21 22:06:36<SeP>2024-05-23 09:30:45<SeP>2024-05-24 20:54:54<SeP>2024-05-26 08:19:03<SeP>2024-05-27 19:43:12<SeP>2024-05-29 07:07:21<SeP>2024-05-30 18:31:30<SeP>2024-06-01 05:55:39<SeP>2024-06-02 17:19:48<SeP>2024-06-04 04:43:57<SeP>2024-06-05 16:08:06<SeP>2024-06-07 03:32:15<SeP>2024-06-08 14:56:24<SeP>2024-06-10 02:20:33<SeP>2024-06-11 13:44:42<SeP>2024-06-13 01:08:51<SeP>2024-06-14 12:33:00<SeP>2024-06-15 23:57:09<SeP>2024-06-17 11:21:18<SeP>2024-06-18 22:45:27<SeP>2024-06-20 10:09:36<SeP>2024-06-21 21:33:45<SeP>2024-06-23 08:57:54<SeP>2024-06-24 20:22:03<SeP>2024-06-26 07:46:12<SeP>2024-06-27 19:10:21<SeP>2024-06-29 06:34:30<SeP>2024-06-30 17:58:39<SeP>2024-07-02 05:22:48<SeP>2024-07-03 16:46:57<SeP>2024-07-05 04:11:06<SeP>2024-07-06 15:35:15<SeP>2024-07-08 02:59:24<SeP>2024-07-09 14:23:33<SeP>2024-07-11 01:47:42<SeP>2024-07-12 13:11:51<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:00:09<SeP>2024-07-16 23:24:18<SeP>2024-07-18 10:48:27<SeP>2024-07-19 22:12:36<SeP>2024-07-21 09:36:45<SeP>2024-07-22 21:00:54<SeP>2024-07-24 08:25:03<SeP>2024-07-25 19:49:12<SeP>2024-07-27 07:13:21<SeP>2024-07-28 18:37:30<SeP>2024-07-30 06:01:39<SeP>2024-07-31 17:25:48<SeP>2024-08-02 04:49:57<SeP>2024-08-03 16:14:06<SeP>2024-08-05 03:38:15<SeP>2024-08-06 15:02:24<SeP>2024-08-08 02:26:33<SeP>2024-08-09 13:50:42<SeP>2024-08-11 01:14:51<SeP>2024-08-12 12:39:00<SeP>2024-08-14 00:03:09<SeP>2024-08-15 11:27:18<SeP>2024-08-16 22:51:27<SeP>2024-08-18 10:15:36<SeP>2024-08-19 21:39:45<SeP>2024-08-21 09:03:54<SeP>2024-08-22 20:28:03<SeP>2024-08-24 07:52:12<SeP>2024-08-25 19:16:21<SeP>2024-08-27 06:40:30<SeP>2024-08-28 18:04:39<SeP>2024-08-30 05:28:48<SeP>2024-08-31 16:52:57<SeP>2024-09-02 04:17:06<SeP>2024-09-03 15:41:15<SeP>2024-09-05 03:05:24<SeP>2024-09-06 14:29:33<SeP>2024-09-08 01:53:42<SeP>2024-09-09 13:17:51<SeP>2024-09-11 00:42:00<SeP>2024-09-12 12:06:09<SeP>2024-09-13 23:30:18<SeP>2024-09-15 10:54:27<SeP>2024-09-16 22:18:36<SeP>2024-09-18 09:42:45<SeP>2024-09-19 21:06:54<SeP>2024-09-21 08:31:03<SeP>2024-09-22 19:55:12<SeP>2024-09-24 07:19:21<SeP>2024-09-25 18:43:30<SeP>2024-09-27 06:07:39<SeP>2024-09-28 17:31:48<SeP>2024-09-30 04:55:57<SeP>2024-10-01 16:20:06<SeP>2024-10-03 03:44:15<SeP>2024-10-04 15:08:24<SeP>2024-10-06 02:32:33<SeP>2024-10-07 13:56:42<SeP>2024-10-09 01:20:51<SeP>2024-10-10 12:45:00<SeP>2024-10-12 00:09:09<SeP>2024-10-13 11:33:18<SeP>2024-10-14 22:57:27<SeP>2024-10-16 10:21:36<SeP>2024-10-17 21:45:45<SeP>2024-10-19 09:09:54<SeP>2024-10-20 20:34:03<SeP>2024-10-22 07:58:12<SeP>2024-10-23 19:22:21<SeP>2024-10-25 06:46:30<SeP>2024-10-26 18:10:39<SeP>2024-10-28 05:34:48<SeP>2024-10-29 16:58:57<SeP>2024-10-31 04:23:06<SeP>2024-11-01 15:47:15<SeP>2024-11-03 02:11:24<SeP>2024-11-04 13:35:33<SeP>2024-11-06 00:59:42<SeP>2024-11-07 12:23:51<SeP>2024-11-08 23:48:00<SeP>2024-11-10 11:12:09<SeP>2024-11-11 22:36:18<SeP>2024-11-13 10:00:27<SeP>2024-11-14 21:24:36<SeP>2024-11-16 08:48:45<SeP>2024-11-17 20:12:54<SeP>2024-11-19 07:37:03<SeP>2024-11-20 19:01:12<SeP>2024-11-22 06:25:21<SeP>2024-11-23 17:49:30<SeP>2024-11-25 05:13:39<SeP>2024-11-26 16:37:48<SeP>2024-11-28 04:01:57<SeP>2024-11-29 15:26:06<SeP>2024-12-01 02:50:15<SeP>2024-12-02 14:14:24<SeP>2024-12-04 01:38:33<SeP>2024-12-05 13:02:42<SeP>2024-12-07 00:26:51<SeP>2024-12-08 11:51:00<SeP>2024-12-09 23:15:09<SeP>2024-12-11 10:39:18<SeP>2024-12-12 22:03:27<SeP>2024-12-14 09:27:36<SeP>2024-12-15 20:51:45<SeP>2024-12-17 08:15:54<SeP>2024-12-18 19:40:03<SeP>2024-12-20 07:04:12<SeP>2024-12-21 18:28:21<SeP>2024-12-23 05:52:30<SeP>2024-12-24 17:16:39<SeP>2024-12-26 04:40:48<SeP>2024-12-27 16:04:57<SeP>2024-12-29 03:29:06<SeP>2024-12-30 14:53:15<SeP>2025-01-01 02:17:24<SeP>2025-01-02 13:41:33<SeP>2025-01-04 01:05:42<SeP>2025-01-05 12:29:51<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:18:09<SeP>2025-01-09 22:42:18<SeP>2025-01-11 10:06:27<SeP>2025-01-12 21:30:36<SeP>2025-01-14 08:54:45<SeP>2025-01-15 20:18:54<SeP>2025-01-17 07:43:03<SeP>2025-01-18 19:07:12<SeP>2025-01-20 06:31:21<SeP>2025-01-21 17:55:30<SeP>2025-01-23 05:19:39<SeP>2025-01-24 16:43:48<SeP>2025-01-26 04:07:57<SeP>2025-01-27 15:32:06<SeP>2025-01-29 02:56:15<SeP>2025-01-30 14:20:24<SeP>2025-02-01 01:44:33<SeP>2025-02-02 13:08:42<SeP>2025-02-04 00:32:51<SeP>2025-02-05 11:57:00<SeP>2025-02-06 23:21:09<SeP>2025-02-08 10:45:18<SeP>2025-02-09 22:09:27<SeP>2025-02-11 09:33:36<SeP>2025-02-12 20:57:45<SeP>2025-02-14 08:21:54<SeP>2025-02-15 19:46:03<SeP>2025-02-17 07:10:12<SeP>2025-02-18 18:34:21<SeP>2025-02-20 05:58:30<SeP>2025-02-21 17:22:39<SeP>2025-02-23 04:46:48<SeP>2025-02-24 16:10:57<SeP>2025-02-26 03:35:06<SeP>2025-02-27 14:59:15<SeP>2025-03-01 02:23:24<SeP>2025-03-02 13:47:33<SeP>2025-03-04 01:11:42<SeP>2025-03-05 12:35:51";
  const itemLabel       = "Escaneos";
  const itemData        = "771<SeP>1517<SeP>1366<SeP>1486<SeP>1230<SeP>1750<SeP>941<SeP>961<SeP>1165<SeP>3406<SeP>2929<SeP>1492<SeP>3300<SeP>891<SeP>770<SeP>890<SeP>1416<SeP>2956<SeP>1789<SeP>1191<SeP>1249<SeP>933<SeP>1046<SeP>1249<SeP>898<SeP>853<SeP>820<SeP>3801<SeP>739<SeP>971<SeP>1091<SeP>1532<SeP>904<SeP>819<SeP>3240<SeP>2727<SeP>1976<SeP>1489<SeP>1804<SeP>1229<SeP>1688<SeP>1906<SeP>2090<SeP>1652<SeP>1719<SeP>1614<SeP>1644<SeP>1759<SeP>1718<SeP>1833<SeP>1789<SeP>1710<SeP>1758<SeP>3086<SeP>1355<SeP>1947<SeP>1867<SeP>2412<SeP>1545<SeP>2369<SeP>2924<SeP>1455<SeP>1504<SeP>1435<SeP>1694<SeP>1715<SeP>1596<SeP>1186<SeP>1444<SeP>1211<SeP>2396<SeP>1244<SeP>1124<SeP>1329<SeP>2436<SeP>7048<SeP>1301<SeP>1286<SeP>1438<SeP>2228<SeP>1276<SeP>2200<SeP>5646<SeP>1548<SeP>1652<SeP>936<SeP>3296<SeP>1223<SeP>1080<SeP>1062<SeP>1088<SeP>1026<SeP>3137<SeP>902<SeP>1139<SeP>2959<SeP>4634<SeP>3651<SeP>982<SeP>888<SeP>970<SeP>955<SeP>1025<SeP>913<SeP>1109<SeP>3505<SeP>2507<SeP>1433<SeP>1655<SeP>699<SeP>901<SeP>1494<SeP>1190<SeP>1084<SeP>990<SeP>2248<SeP>1323<SeP>1066<SeP>1008<SeP>1063<SeP>855<SeP>846<SeP>898<SeP>819<SeP>927<SeP>1043<SeP>806<SeP>819<SeP>852<SeP>1001<SeP>813<SeP>687<SeP>900<SeP>877<SeP>810<SeP>903<SeP>897<SeP>782<SeP>809<SeP>931<SeP>935<SeP>814<SeP>866<SeP>907<SeP>929<SeP>1141<SeP>984<SeP>550<SeP>847<SeP>842<SeP>887<SeP>1295<SeP>904<SeP>1141<SeP>1207<SeP>1160<SeP>904<SeP>926<SeP>960<SeP>842<SeP>869<SeP>1117<SeP>941<SeP>791<SeP>976<SeP>1101<SeP>886<SeP>1092<SeP>1029<SeP>1039<SeP>1093<SeP>939<SeP>1026<SeP>2157<SeP>1342<SeP>993<SeP>1038<SeP>1147<SeP>1033<SeP>970<SeP>822<SeP>643<SeP>950<SeP>1157<SeP>883<SeP>983<SeP>1141<SeP>1305<SeP>1141<SeP>1277<SeP>1131<SeP>1373<SeP>1117<SeP>1499<SeP>1218<SeP>1572<SeP>2109<SeP>1324<SeP>812<SeP>896<SeP>1106<SeP>1085<SeP>661<SeP>823<SeP>857<SeP>1021<SeP>786<SeP>5202<SeP>3514<SeP>2008<SeP>1275<SeP>1162<SeP>868<SeP>1058<SeP>840<SeP>1027<SeP>1053<SeP>1131<SeP>1031<SeP>1335<SeP>2123<SeP>1010<SeP>1250<SeP>1256<SeP>1247<SeP>1170<SeP>1058<SeP>967<SeP>1086<SeP>1120<SeP>997<SeP>1202<SeP>957<SeP>1194<SeP>813<SeP>1412<SeP>1075<SeP>1176<SeP>1170<SeP>1285<SeP>1358<SeP>1505<SeP>1193<SeP>1202<SeP>1088<SeP>1201<SeP>1959<SeP>1284<SeP>1603<SeP>1853<SeP>1444<SeP>1964<SeP>1720<SeP>1270<SeP>1189<SeP>1234<SeP>1230<SeP>1461<SeP>1375<SeP>1228<SeP>1385<SeP>1904<SeP>1407<SeP>1481<SeP>1352<SeP>1449<SeP>1144<SeP>1138<SeP>1312<SeP>1172<SeP>1249<SeP>1230<SeP>1269<SeP>1278<SeP>1896<SeP>1371<SeP>1321<SeP>1586<SeP>1518<SeP>1206<SeP>1106<SeP>865<SeP>995<SeP>840<SeP>1056<SeP>1007<SeP>1801<SeP>1096<SeP>1134<SeP>1173<SeP>788<SeP>1015<SeP>1004<SeP>1320<SeP>875<SeP>911<SeP>1153<SeP>1384<SeP>1646<SeP>1264<SeP>1085<SeP>1041<SeP>1115<SeP>1821<SeP>939<SeP>1246<SeP>1013<SeP>1492<SeP>1163<SeP>863<SeP>1240<SeP>1118<SeP>885<SeP>903<SeP>1151<SeP>1369<SeP>1587<SeP>1406<SeP>1441<SeP>1320<SeP>938<SeP>1176<SeP>1195<SeP>1207<SeP>1125<SeP>1014<SeP>1080<SeP>1127<SeP>1456<SeP>1379<SeP>1453<SeP>1428<SeP>1457<SeP>1513<SeP>1469<SeP>1259<SeP>1510<SeP>1531<SeP>1448<SeP>1347<SeP>1497<SeP>1673<SeP>1559<SeP>1320<SeP>1457<SeP>1340<SeP>1224<SeP>1270<SeP>1441<SeP>1642<SeP>1489<SeP>1297<SeP>1117<SeP>1524<SeP>1161<SeP>1415<SeP>1197<SeP>1729<SeP>1862<SeP>1344<SeP>757<SeP>1159<SeP>1860<SeP>1432<SeP>1291<SeP>1399<SeP>1055<SeP>1385<SeP>1423<SeP>1243<SeP>1524<SeP>1498<SeP>1618<SeP>1499<SeP>1589<SeP>1587<SeP>1447<SeP>1402<SeP>1656<SeP>1453<SeP>1292<SeP>1188<SeP>1881<SeP>1796<SeP>1820<SeP>1780<SeP>1752<SeP>1614<SeP>1603<SeP>1582<SeP>1555<SeP>1531<SeP>1747<SeP>1725<SeP>1745<SeP>1412<SeP>1500<SeP>1499<SeP>1456<SeP>1611";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:24:09<SeP>2023-07-28 22:48:18<SeP>2023-07-30 10:12:27<SeP>2023-07-31 21:36:36<SeP>2023-08-02 09:00:45<SeP>2023-08-03 20:24:54<SeP>2023-08-05 07:49:03<SeP>2023-08-06 19:13:12<SeP>2023-08-08 06:37:21<SeP>2023-08-09 18:01:30<SeP>2023-08-11 05:25:39<SeP>2023-08-12 16:49:48<SeP>2023-08-14 04:13:57<SeP>2023-08-15 15:38:06<SeP>2023-08-17 03:02:15<SeP>2023-08-18 14:26:24<SeP>2023-08-20 01:50:33<SeP>2023-08-21 13:14:42<SeP>2023-08-23 00:38:51<SeP>2023-08-24 12:03:00<SeP>2023-08-25 23:27:09<SeP>2023-08-27 10:51:18<SeP>2023-08-28 22:15:27<SeP>2023-08-30 09:39:36<SeP>2023-08-31 21:03:45<SeP>2023-09-02 08:27:54<SeP>2023-09-03 19:52:03<SeP>2023-09-05 07:16:12<SeP>2023-09-06 18:40:21<SeP>2023-09-08 06:04:30<SeP>2023-09-09 17:28:39<SeP>2023-09-11 04:52:48<SeP>2023-09-12 16:16:57<SeP>2023-09-14 03:41:06<SeP>2023-09-15 15:05:15<SeP>2023-09-17 02:29:24<SeP>2023-09-18 13:53:33<SeP>2023-09-20 01:17:42<SeP>2023-09-21 12:41:51<SeP>2023-09-23 00:06:00<SeP>2023-09-24 11:30:09<SeP>2023-09-25 22:54:18<SeP>2023-09-27 10:18:27<SeP>2023-09-28 21:42:36<SeP>2023-09-30 09:06:45<SeP>2023-10-01 20:30:54<SeP>2023-10-03 07:55:03<SeP>2023-10-04 19:19:12<SeP>2023-10-06 06:43:21<SeP>2023-10-07 18:07:30<SeP>2023-10-09 05:31:39<SeP>2023-10-10 16:55:48<SeP>2023-10-12 04:19:57<SeP>2023-10-13 15:44:06<SeP>2023-10-15 03:08:15<SeP>2023-10-16 14:32:24<SeP>2023-10-18 01:56:33<SeP>2023-10-19 13:20:42<SeP>2023-10-21 00:44:51<SeP>2023-10-22 12:09:00<SeP>2023-10-23 23:33:09<SeP>2023-10-25 10:57:18<SeP>2023-10-26 22:21:27<SeP>2023-10-28 09:45:36<SeP>2023-10-29 21:09:45<SeP>2023-10-31 08:33:54<SeP>2023-11-01 19:58:03<SeP>2023-11-03 07:22:12<SeP>2023-11-04 18:46:21<SeP>2023-11-06 05:10:30<SeP>2023-11-07 16:34:39<SeP>2023-11-09 03:58:48<SeP>2023-11-10 15:22:57<SeP>2023-11-12 02:47:06<SeP>2023-11-13 14:11:15<SeP>2023-11-15 01:35:24<SeP>2023-11-16 12:59:33<SeP>2023-11-18 00:23:42<SeP>2023-11-19 11:47:51<SeP>2023-11-20 23:12:00<SeP>2023-11-22 10:36:09<SeP>2023-11-23 22:00:18<SeP>2023-11-25 09:24:27<SeP>2023-11-26 20:48:36<SeP>2023-11-28 08:12:45<SeP>2023-11-29 19:36:54<SeP>2023-12-01 07:01:03<SeP>2023-12-02 18:25:12<SeP>2023-12-04 05:49:21<SeP>2023-12-05 17:13:30<SeP>2023-12-07 04:37:39<SeP>2023-12-08 16:01:48<SeP>2023-12-10 03:25:57<SeP>2023-12-11 14:50:06<SeP>2023-12-13 02:14:15<SeP>2023-12-14 13:38:24<SeP>2023-12-16 01:02:33<SeP>2023-12-17 12:26:42<SeP>2023-12-18 23:50:51<SeP>2023-12-20 11:15:00<SeP>2023-12-21 22:39:09<SeP>2023-12-23 10:03:18<SeP>2023-12-24 21:27:27<SeP>2023-12-26 08:51:36<SeP>2023-12-27 20:15:45<SeP>2023-12-29 07:39:54<SeP>2023-12-30 19:04:03<SeP>2024-01-01 06:28:12<SeP>2024-01-02 17:52:21<SeP>2024-01-04 05:16:30<SeP>2024-01-05 16:40:39<SeP>2024-01-07 04:04:48<SeP>2024-01-08 15:28:57<SeP>2024-01-10 02:53:06<SeP>2024-01-11 14:17:15<SeP>2024-01-13 01:41:24<SeP>2024-01-14 13:05:33<SeP>2024-01-16 00:29:42<SeP>2024-01-17 11:53:51<SeP>2024-01-18 23:18:00<SeP>2024-01-20 10:42:09<SeP>2024-01-21 22:06:18<SeP>2024-01-23 09:30:27<SeP>2024-01-24 20:54:36<SeP>2024-01-26 08:18:45<SeP>2024-01-27 19:42:54<SeP>2024-01-29 07:07:03<SeP>2024-01-30 18:31:12<SeP>2024-02-01 05:55:21<SeP>2024-02-02 17:19:30<SeP>2024-02-04 04:43:39<SeP>2024-02-05 16:07:48<SeP>2024-02-07 03:31:57<SeP>2024-02-08 14:56:06<SeP>2024-02-10 02:20:15<SeP>2024-02-11 13:44:24<SeP>2024-02-13 01:08:33<SeP>2024-02-14 12:32:42<SeP>2024-02-15 23:56:51<SeP>2024-02-17 11:21:00<SeP>2024-02-18 22:45:09<SeP>2024-02-20 10:09:18<SeP>2024-02-21 21:33:27<SeP>2024-02-23 08:57:36<SeP>2024-02-24 20:21:45<SeP>2024-02-26 07:45:54<SeP>2024-02-27 19:10:03<SeP>2024-02-29 06:34:12<SeP>2024-03-01 17:58:21<SeP>2024-03-03 05:22:30<SeP>2024-03-04 16:46:39<SeP>2024-03-06 04:10:48<SeP>2024-03-07 15:34:57<SeP>2024-03-09 02:59:06<SeP>2024-03-10 15:23:15<SeP>2024-03-12 02:47:24<SeP>2024-03-13 14:11:33<SeP>2024-03-15 01:35:42<SeP>2024-03-16 12:59:51<SeP>2024-03-18 00:24:00<SeP>2024-03-19 11:48:09<SeP>2024-03-20 23:12:18<SeP>2024-03-22 10:36:27<SeP>2024-03-23 22:00:36<SeP>2024-03-25 09:24:45<SeP>2024-03-26 20:48:54<SeP>2024-03-28 08:13:03<SeP>2024-03-29 19:37:12<SeP>2024-03-31 07:01:21<SeP>2024-04-01 18:25:30<SeP>2024-04-03 05:49:39<SeP>2024-04-04 17:13:48<SeP>2024-04-06 04:37:57<SeP>2024-04-07 16:02:06<SeP>2024-04-09 03:26:15<SeP>2024-04-10 14:50:24<SeP>2024-04-12 02:14:33<SeP>2024-04-13 13:38:42<SeP>2024-04-15 01:02:51<SeP>2024-04-16 12:27:00<SeP>2024-04-17 23:51:09<SeP>2024-04-19 11:15:18<SeP>2024-04-20 22:39:27<SeP>2024-04-22 10:03:36<SeP>2024-04-23 21:27:45<SeP>2024-04-25 08:51:54<SeP>2024-04-26 20:16:03<SeP>2024-04-28 07:40:12<SeP>2024-04-29 19:04:21<SeP>2024-05-01 06:28:30<SeP>2024-05-02 17:52:39<SeP>2024-05-04 05:16:48<SeP>2024-05-05 16:40:57<SeP>2024-05-07 04:05:06<SeP>2024-05-08 15:29:15<SeP>2024-05-10 02:53:24<SeP>2024-05-11 14:17:33<SeP>2024-05-13 01:41:42<SeP>2024-05-14 13:05:51<SeP>2024-05-16 00:30:00<SeP>2024-05-17 11:54:09<SeP>2024-05-18 23:18:18<SeP>2024-05-20 10:42:27<SeP>2024-05-21 22:06:36<SeP>2024-05-23 09:30:45<SeP>2024-05-24 20:54:54<SeP>2024-05-26 08:19:03<SeP>2024-05-27 19:43:12<SeP>2024-05-29 07:07:21<SeP>2024-05-30 18:31:30<SeP>2024-06-01 05:55:39<SeP>2024-06-02 17:19:48<SeP>2024-06-04 04:43:57<SeP>2024-06-05 16:08:06<SeP>2024-06-07 03:32:15<SeP>2024-06-08 14:56:24<SeP>2024-06-10 02:20:33<SeP>2024-06-11 13:44:42<SeP>2024-06-13 01:08:51<SeP>2024-06-14 12:33:00<SeP>2024-06-15 23:57:09<SeP>2024-06-17 11:21:18<SeP>2024-06-18 22:45:27<SeP>2024-06-20 10:09:36<SeP>2024-06-21 21:33:45<SeP>2024-06-23 08:57:54<SeP>2024-06-24 20:22:03<SeP>2024-06-26 07:46:12<SeP>2024-06-27 19:10:21<SeP>2024-06-29 06:34:30<SeP>2024-06-30 17:58:39<SeP>2024-07-02 05:22:48<SeP>2024-07-03 16:46:57<SeP>2024-07-05 04:11:06<SeP>2024-07-06 15:35:15<SeP>2024-07-08 02:59:24<SeP>2024-07-09 14:23:33<SeP>2024-07-11 01:47:42<SeP>2024-07-12 13:11:51<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:00:09<SeP>2024-07-16 23:24:18<SeP>2024-07-18 10:48:27<SeP>2024-07-19 22:12:36<SeP>2024-07-21 09:36:45<SeP>2024-07-22 21:00:54<SeP>2024-07-24 08:25:03<SeP>2024-07-25 19:49:12<SeP>2024-07-27 07:13:21<SeP>2024-07-28 18:37:30<SeP>2024-07-30 06:01:39<SeP>2024-07-31 17:25:48<SeP>2024-08-02 04:49:57<SeP>2024-08-03 16:14:06<SeP>2024-08-05 03:38:15<SeP>2024-08-06 15:02:24<SeP>2024-08-08 02:26:33<SeP>2024-08-09 13:50:42<SeP>2024-08-11 01:14:51<SeP>2024-08-12 12:39:00<SeP>2024-08-14 00:03:09<SeP>2024-08-15 11:27:18<SeP>2024-08-16 22:51:27<SeP>2024-08-18 10:15:36<SeP>2024-08-19 21:39:45<SeP>2024-08-21 09:03:54<SeP>2024-08-22 20:28:03<SeP>2024-08-24 07:52:12<SeP>2024-08-25 19:16:21<SeP>2024-08-27 06:40:30<SeP>2024-08-28 18:04:39<SeP>2024-08-30 05:28:48<SeP>2024-08-31 16:52:57<SeP>2024-09-02 04:17:06<SeP>2024-09-03 15:41:15<SeP>2024-09-05 03:05:24<SeP>2024-09-06 14:29:33<SeP>2024-09-08 01:53:42<SeP>2024-09-09 13:17:51<SeP>2024-09-11 00:42:00<SeP>2024-09-12 12:06:09<SeP>2024-09-13 23:30:18<SeP>2024-09-15 10:54:27<SeP>2024-09-16 22:18:36<SeP>2024-09-18 09:42:45<SeP>2024-09-19 21:06:54<SeP>2024-09-21 08:31:03<SeP>2024-09-22 19:55:12<SeP>2024-09-24 07:19:21<SeP>2024-09-25 18:43:30<SeP>2024-09-27 06:07:39<SeP>2024-09-28 17:31:48<SeP>2024-09-30 04:55:57<SeP>2024-10-01 16:20:06<SeP>2024-10-03 03:44:15<SeP>2024-10-04 15:08:24<SeP>2024-10-06 02:32:33<SeP>2024-10-07 13:56:42<SeP>2024-10-09 01:20:51<SeP>2024-10-10 12:45:00<SeP>2024-10-12 00:09:09<SeP>2024-10-13 11:33:18<SeP>2024-10-14 22:57:27<SeP>2024-10-16 10:21:36<SeP>2024-10-17 21:45:45<SeP>2024-10-19 09:09:54<SeP>2024-10-20 20:34:03<SeP>2024-10-22 07:58:12<SeP>2024-10-23 19:22:21<SeP>2024-10-25 06:46:30<SeP>2024-10-26 18:10:39<SeP>2024-10-28 05:34:48<SeP>2024-10-29 16:58:57<SeP>2024-10-31 04:23:06<SeP>2024-11-01 15:47:15<SeP>2024-11-03 02:11:24<SeP>2024-11-04 13:35:33<SeP>2024-11-06 00:59:42<SeP>2024-11-07 12:23:51<SeP>2024-11-08 23:48:00<SeP>2024-11-10 11:12:09<SeP>2024-11-11 22:36:18<SeP>2024-11-13 10:00:27<SeP>2024-11-14 21:24:36<SeP>2024-11-16 08:48:45<SeP>2024-11-17 20:12:54<SeP>2024-11-19 07:37:03<SeP>2024-11-20 19:01:12<SeP>2024-11-22 06:25:21<SeP>2024-11-23 17:49:30<SeP>2024-11-25 05:13:39<SeP>2024-11-26 16:37:48<SeP>2024-11-28 04:01:57<SeP>2024-11-29 15:26:06<SeP>2024-12-01 02:50:15<SeP>2024-12-02 14:14:24<SeP>2024-12-04 01:38:33<SeP>2024-12-05 13:02:42<SeP>2024-12-07 00:26:51<SeP>2024-12-08 11:51:00<SeP>2024-12-09 23:15:09<SeP>2024-12-11 10:39:18<SeP>2024-12-12 22:03:27<SeP>2024-12-14 09:27:36<SeP>2024-12-15 20:51:45<SeP>2024-12-17 08:15:54<SeP>2024-12-18 19:40:03<SeP>2024-12-20 07:04:12<SeP>2024-12-21 18:28:21<SeP>2024-12-23 05:52:30<SeP>2024-12-24 17:16:39<SeP>2024-12-26 04:40:48<SeP>2024-12-27 16:04:57<SeP>2024-12-29 03:29:06<SeP>2024-12-30 14:53:15<SeP>2025-01-01 02:17:24<SeP>2025-01-02 13:41:33<SeP>2025-01-04 01:05:42<SeP>2025-01-05 12:29:51<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:18:09<SeP>2025-01-09 22:42:18<SeP>2025-01-11 10:06:27<SeP>2025-01-12 21:30:36<SeP>2025-01-14 08:54:45<SeP>2025-01-15 20:18:54<SeP>2025-01-17 07:43:03<SeP>2025-01-18 19:07:12<SeP>2025-01-20 06:31:21<SeP>2025-01-21 17:55:30<SeP>2025-01-23 05:19:39<SeP>2025-01-24 16:43:48<SeP>2025-01-26 04:07:57<SeP>2025-01-27 15:32:06<SeP>2025-01-29 02:56:15<SeP>2025-01-30 14:20:24<SeP>2025-02-01 01:44:33<SeP>2025-02-02 13:08:42<SeP>2025-02-04 00:32:51<SeP>2025-02-05 11:57:00<SeP>2025-02-06 23:21:09<SeP>2025-02-08 10:45:18<SeP>2025-02-09 22:09:27<SeP>2025-02-11 09:33:36<SeP>2025-02-12 20:57:45<SeP>2025-02-14 08:21:54<SeP>2025-02-15 19:46:03<SeP>2025-02-17 07:10:12<SeP>2025-02-18 18:34:21<SeP>2025-02-20 05:58:30<SeP>2025-02-21 17:22:39<SeP>2025-02-23 04:46:48<SeP>2025-02-24 16:10:57<SeP>2025-02-26 03:35:06<SeP>2025-02-27 14:59:15<SeP>2025-03-01 02:23:24<SeP>2025-03-02 13:47:33<SeP>2025-03-04 01:11:42<SeP>2025-03-05 12:35:51";
  const itemLabel       = "Ataques";
  const itemData        = "155<SeP>614<SeP>1330<SeP>724<SeP>220<SeP>236<SeP>7000<SeP>564<SeP>9454<SeP>567<SeP>401<SeP>1128<SeP>1297<SeP>238<SeP>282<SeP>337<SeP>127<SeP>746<SeP>343<SeP>7377<SeP>7180<SeP>6594<SeP>8844<SeP>3519<SeP>251<SeP>429<SeP>192<SeP>384<SeP>5755<SeP>264<SeP>364<SeP>138<SeP>538<SeP>297<SeP>8297<SeP>9790<SeP>10361<SeP>9535<SeP>6786<SeP>5267<SeP>8631<SeP>7406<SeP>9054<SeP>8985<SeP>7427<SeP>8644<SeP>8637<SeP>8609<SeP>8545<SeP>5813<SeP>6198<SeP>12825<SeP>6267<SeP>7719<SeP>7885<SeP>10547<SeP>18211<SeP>15933<SeP>9970<SeP>10762<SeP>7618<SeP>7469<SeP>8831<SeP>9152<SeP>8325<SeP>7306<SeP>6593<SeP>6440<SeP>6755<SeP>4454<SeP>5793<SeP>5812<SeP>6502<SeP>5887<SeP>8243<SeP>3913<SeP>6106<SeP>5467<SeP>6999<SeP>4310<SeP>7428<SeP>4534<SeP>6359<SeP>6506<SeP>5649<SeP>5741<SeP>5558<SeP>21864<SeP>11240<SeP>35325<SeP>7235<SeP>8496<SeP>6254<SeP>11716<SeP>7465<SeP>5067<SeP>6513<SeP>3794<SeP>5478<SeP>6477<SeP>5241<SeP>8677<SeP>6562<SeP>5673<SeP>4211<SeP>6003<SeP>9618<SeP>8292<SeP>7265<SeP>5198<SeP>5558<SeP>10246<SeP>8706<SeP>4865<SeP>3294<SeP>6442<SeP>9541<SeP>4846<SeP>7697<SeP>9010<SeP>4167<SeP>3033<SeP>1075<SeP>1663<SeP>1853<SeP>2521<SeP>852<SeP>1322<SeP>665<SeP>1633<SeP>1248<SeP>1161<SeP>1167<SeP>858<SeP>1131<SeP>1089<SeP>1142<SeP>1436<SeP>1143<SeP>1661<SeP>2140<SeP>1560<SeP>12350<SeP>6073<SeP>10603<SeP>7406<SeP>5485<SeP>10649<SeP>9121<SeP>9316<SeP>8533<SeP>13919<SeP>8504<SeP>10738<SeP>10954<SeP>12685<SeP>9831<SeP>8737<SeP>3841<SeP>7832<SeP>17213<SeP>14797<SeP>5806<SeP>7878<SeP>10740<SeP>16868<SeP>8805<SeP>4082<SeP>7673<SeP>6977<SeP>26035<SeP>7796<SeP>9001<SeP>10751<SeP>5751<SeP>5497<SeP>6575<SeP>16325<SeP>4771<SeP>12696<SeP>7933<SeP>6728<SeP>8803<SeP>7305<SeP>3026<SeP>7004<SeP>4917<SeP>7828<SeP>7026<SeP>6662<SeP>5688<SeP>21000<SeP>6751<SeP>6028<SeP>6277<SeP>8277<SeP>11462<SeP>6951<SeP>4456<SeP>3292<SeP>6327<SeP>3366<SeP>4123<SeP>4166<SeP>632<SeP>110<SeP>635<SeP>562<SeP>630<SeP>740<SeP>366<SeP>658<SeP>1252<SeP>1279<SeP>3135<SeP>22948<SeP>554<SeP>4482<SeP>3239<SeP>2512<SeP>7881<SeP>2786<SeP>4165<SeP>3146<SeP>3195<SeP>3039<SeP>3291<SeP>4674<SeP>1910<SeP>2929<SeP>2616<SeP>2197<SeP>1959<SeP>1917<SeP>1140<SeP>1910<SeP>796<SeP>925<SeP>1777<SeP>26749<SeP>1485<SeP>3592<SeP>3480<SeP>3097<SeP>3245<SeP>3111<SeP>1624<SeP>3669<SeP>2588<SeP>3504<SeP>2658<SeP>2529<SeP>3289<SeP>3429<SeP>6765<SeP>5209<SeP>4326<SeP>2745<SeP>2975<SeP>3666<SeP>4150<SeP>6506<SeP>8851<SeP>3722<SeP>2305<SeP>3280<SeP>3743<SeP>4259<SeP>3123<SeP>3340<SeP>2666<SeP>5043<SeP>4571<SeP>3376<SeP>6069<SeP>5434<SeP>4860<SeP>4766<SeP>5552<SeP>10820<SeP>17560<SeP>12824<SeP>1930<SeP>1850<SeP>5118<SeP>3414<SeP>3813<SeP>4205<SeP>5048<SeP>3969<SeP>4537<SeP>4246<SeP>3570<SeP>3304<SeP>1268<SeP>2117<SeP>3101<SeP>2879<SeP>2834<SeP>3317<SeP>4331<SeP>4132<SeP>3116<SeP>4627<SeP>3004<SeP>3560<SeP>4066<SeP>8063<SeP>6378<SeP>5456<SeP>4868<SeP>5047<SeP>3694<SeP>3826<SeP>4657<SeP>5556<SeP>5422<SeP>4351<SeP>4273<SeP>2327<SeP>417<SeP>2131<SeP>1674<SeP>753<SeP>1913<SeP>1540<SeP>831<SeP>3081<SeP>3918<SeP>6668<SeP>13593<SeP>25265<SeP>5601<SeP>11591<SeP>16346<SeP>5594<SeP>5609<SeP>5252<SeP>13090<SeP>16015<SeP>5600<SeP>4853<SeP>4732<SeP>6302<SeP>19410<SeP>16072<SeP>4182<SeP>3563<SeP>4021<SeP>5715<SeP>4987<SeP>2991<SeP>3287<SeP>4435<SeP>5216<SeP>5265<SeP>17997<SeP>5249<SeP>6134<SeP>5772<SeP>1765<SeP>2910<SeP>3908<SeP>5445<SeP>3836<SeP>3525<SeP>3102<SeP>3397<SeP>3604<SeP>3645<SeP>6189<SeP>8679<SeP>10080<SeP>8566<SeP>9096<SeP>7918<SeP>7149<SeP>5085<SeP>4993<SeP>4749<SeP>24903<SeP>3348<SeP>4207<SeP>3307<SeP>11528<SeP>5119<SeP>4239<SeP>4535<SeP>4581<SeP>3344<SeP>6525<SeP>10300<SeP>6169<SeP>3824<SeP>3428<SeP>2728<SeP>2248<SeP>2345<SeP>2069<SeP>2191";
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
  const itemData    = "696980<SeP>366846<SeP>206651<SeP>180398<SeP>110722<SeP>88345<SeP>84051<SeP>81039<SeP>68251<SeP>67688";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "298798<SeP>41431<SeP>40773<SeP>36414<SeP>14573<SeP>11150<SeP>8270<SeP>7993<SeP>7224<SeP>7220";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "398182<SeP>330432<SeP>203603<SeP>139625<SeP>96149<SeP>81367<SeP>81125<SeP>69889<SeP>59695<SeP>58761";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "363861<SeP>259557<SeP>237751<SeP>143866<SeP>67556<SeP>59864<SeP>56902<SeP>53357<SeP>41621<SeP>36319";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "157408<SeP>53673<SeP>40499<SeP>32652<SeP>21924<SeP>12878<SeP>10860<SeP>8427<SeP>7614<SeP>7504";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "350983<SeP>258790<SeP>121942<SeP>80343<SeP>55890<SeP>49004<SeP>47262<SeP>30622<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "696980<SeP>366846<SeP>206651<SeP>180398<SeP>110722<SeP>88345<SeP>84051<SeP>81039<SeP>68251<SeP>67688";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "298798<SeP>41431<SeP>40773<SeP>36414<SeP>14573<SeP>11150<SeP>8270<SeP>7993<SeP>7224<SeP>7220";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "398182<SeP>330432<SeP>203603<SeP>139625<SeP>96149<SeP>81367<SeP>81125<SeP>69889<SeP>59695<SeP>58761";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "363861<SeP>259557<SeP>237751<SeP>143866<SeP>67556<SeP>59864<SeP>56902<SeP>53357<SeP>41621<SeP>36319";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "157408<SeP>53673<SeP>40499<SeP>32652<SeP>21924<SeP>12878<SeP>10860<SeP>8427<SeP>7614<SeP>7504";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "350983<SeP>258790<SeP>121942<SeP>80343<SeP>55890<SeP>49004<SeP>47262<SeP>30622<SeP>29324<SeP>26846";
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
