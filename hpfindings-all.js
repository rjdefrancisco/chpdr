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
  document.getElementById("trend-click").innerHTML = "35.6";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.6";
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
  const metricData    = "2851942";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "558309";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2293633";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140735";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1439025";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "854608";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54517";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "250954";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "603654";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43798";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2851942";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "558309";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2293633";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140735";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1439025";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "854608";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54517";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "250954";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "603654";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43798";
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
  const incomingData = "2851942<SeP>558309<SeP>2293633<SeP>140735";
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
  const incomingData = "2293633<SeP>1439025<SeP>854608<SeP>54517";
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
  const incomingData = "854608<SeP>250954<SeP>603654<SeP>43798";
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
  const incomingData = "2561648<SeP>258600<SeP>2303048";
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
  const incomingData = "388205<SeP>149<SeP>388056<SeP>229";
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
  const incomingData = "2851942<SeP>558309<SeP>2293633<SeP>140735";
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
  const incomingData = "2293633<SeP>1439025<SeP>854608<SeP>54517";
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
  const incomingData = "854608<SeP>250954<SeP>603654<SeP>43798";
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
  const incomingData = "2561648<SeP>258600<SeP>2303048";
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
  const incomingData = "388205<SeP>149<SeP>388056<SeP>229";
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
  const column3Data   = "221814<SeP>203338<SeP>12792<SeP>12470<SeP>9802<SeP>9464<SeP>6452<SeP>5593<SeP>4635<SeP>3508";
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
  const column2Data  = "213222<SeP>43179<SeP>952<SeP>485<SeP>468<SeP>450<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2412982<SeP>438960";
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
  const column3Data   = "221814<SeP>203338<SeP>12792<SeP>12470<SeP>9802<SeP>9464<SeP>6452<SeP>5593<SeP>4635<SeP>3508";
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
  const column2Data  = "213222<SeP>43179<SeP>952<SeP>485<SeP>468<SeP>450<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2412982<SeP>438960";
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
        "name": "traffic between 2023-07-26 and 2025-03-08"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          398321,50
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
        "name": "scans between 2023-07-26 and 2025-03-08"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          229545,30,
          398321,50
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
        "name": "attacks between 2023-07-26 and 2025-03-08"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168776,23,
          398321,50
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
        "name": "tráfico entre 2023-07-26 y 2025-03-08"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          398321,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-08"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          229545,30,
          398321,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-08"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168776,23,
          398321,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:34:48<SeP>2023-07-28 23:09:36<SeP>2023-07-30 10:44:24<SeP>2023-07-31 22:19:12<SeP>2023-08-02 09:54:00<SeP>2023-08-03 21:28:48<SeP>2023-08-05 09:03:36<SeP>2023-08-06 20:38:24<SeP>2023-08-08 08:13:12<SeP>2023-08-09 19:48:00<SeP>2023-08-11 07:22:48<SeP>2023-08-12 18:57:36<SeP>2023-08-14 06:32:24<SeP>2023-08-15 18:07:12<SeP>2023-08-17 05:42:00<SeP>2023-08-18 17:16:48<SeP>2023-08-20 04:51:36<SeP>2023-08-21 16:26:24<SeP>2023-08-23 04:01:12<SeP>2023-08-24 15:36:00<SeP>2023-08-26 03:10:48<SeP>2023-08-27 14:45:36<SeP>2023-08-29 02:20:24<SeP>2023-08-30 13:55:12<SeP>2023-09-01 01:30:00<SeP>2023-09-02 13:04:48<SeP>2023-09-04 00:39:36<SeP>2023-09-05 12:14:24<SeP>2023-09-06 23:49:12<SeP>2023-09-08 11:24:00<SeP>2023-09-09 22:58:48<SeP>2023-09-11 10:33:36<SeP>2023-09-12 22:08:24<SeP>2023-09-14 09:43:12<SeP>2023-09-15 21:18:00<SeP>2023-09-17 08:52:48<SeP>2023-09-18 20:27:36<SeP>2023-09-20 08:02:24<SeP>2023-09-21 19:37:12<SeP>2023-09-23 07:12:00<SeP>2023-09-24 18:46:48<SeP>2023-09-26 06:21:36<SeP>2023-09-27 17:56:24<SeP>2023-09-29 05:31:12<SeP>2023-09-30 17:06:00<SeP>2023-10-02 04:40:48<SeP>2023-10-03 16:15:36<SeP>2023-10-05 03:50:24<SeP>2023-10-06 15:25:12<SeP>2023-10-08 03:00:00<SeP>2023-10-09 14:34:48<SeP>2023-10-11 02:09:36<SeP>2023-10-12 13:44:24<SeP>2023-10-14 01:19:12<SeP>2023-10-15 12:54:00<SeP>2023-10-17 00:28:48<SeP>2023-10-18 12:03:36<SeP>2023-10-19 23:38:24<SeP>2023-10-21 11:13:12<SeP>2023-10-22 22:48:00<SeP>2023-10-24 10:22:48<SeP>2023-10-25 21:57:36<SeP>2023-10-27 09:32:24<SeP>2023-10-28 21:07:12<SeP>2023-10-30 08:42:00<SeP>2023-10-31 20:16:48<SeP>2023-11-02 07:51:36<SeP>2023-11-03 19:26:24<SeP>2023-11-05 06:01:12<SeP>2023-11-06 17:36:00<SeP>2023-11-08 05:10:48<SeP>2023-11-09 16:45:36<SeP>2023-11-11 04:20:24<SeP>2023-11-12 15:55:12<SeP>2023-11-14 03:30:00<SeP>2023-11-15 15:04:48<SeP>2023-11-17 02:39:36<SeP>2023-11-18 14:14:24<SeP>2023-11-20 01:49:12<SeP>2023-11-21 13:24:00<SeP>2023-11-23 00:58:48<SeP>2023-11-24 12:33:36<SeP>2023-11-26 00:08:24<SeP>2023-11-27 11:43:12<SeP>2023-11-28 23:18:00<SeP>2023-11-30 10:52:48<SeP>2023-12-01 22:27:36<SeP>2023-12-03 10:02:24<SeP>2023-12-04 21:37:12<SeP>2023-12-06 09:12:00<SeP>2023-12-07 20:46:48<SeP>2023-12-09 08:21:36<SeP>2023-12-10 19:56:24<SeP>2023-12-12 07:31:12<SeP>2023-12-13 19:06:00<SeP>2023-12-15 06:40:48<SeP>2023-12-16 18:15:36<SeP>2023-12-18 05:50:24<SeP>2023-12-19 17:25:12<SeP>2023-12-21 05:00:00<SeP>2023-12-22 16:34:48<SeP>2023-12-24 04:09:36<SeP>2023-12-25 15:44:24<SeP>2023-12-27 03:19:12<SeP>2023-12-28 14:54:00<SeP>2023-12-30 02:28:48<SeP>2023-12-31 14:03:36<SeP>2024-01-02 01:38:24<SeP>2024-01-03 13:13:12<SeP>2024-01-05 00:48:00<SeP>2024-01-06 12:22:48<SeP>2024-01-07 23:57:36<SeP>2024-01-09 11:32:24<SeP>2024-01-10 23:07:12<SeP>2024-01-12 10:42:00<SeP>2024-01-13 22:16:48<SeP>2024-01-15 09:51:36<SeP>2024-01-16 21:26:24<SeP>2024-01-18 09:01:12<SeP>2024-01-19 20:36:00<SeP>2024-01-21 08:10:48<SeP>2024-01-22 19:45:36<SeP>2024-01-24 07:20:24<SeP>2024-01-25 18:55:12<SeP>2024-01-27 06:30:00<SeP>2024-01-28 18:04:48<SeP>2024-01-30 05:39:36<SeP>2024-01-31 17:14:24<SeP>2024-02-02 04:49:12<SeP>2024-02-03 16:24:00<SeP>2024-02-05 03:58:48<SeP>2024-02-06 15:33:36<SeP>2024-02-08 03:08:24<SeP>2024-02-09 14:43:12<SeP>2024-02-11 02:18:00<SeP>2024-02-12 13:52:48<SeP>2024-02-14 01:27:36<SeP>2024-02-15 13:02:24<SeP>2024-02-17 00:37:12<SeP>2024-02-18 12:12:00<SeP>2024-02-19 23:46:48<SeP>2024-02-21 11:21:36<SeP>2024-02-22 22:56:24<SeP>2024-02-24 10:31:12<SeP>2024-02-25 22:06:00<SeP>2024-02-27 09:40:48<SeP>2024-02-28 21:15:36<SeP>2024-03-01 08:50:24<SeP>2024-03-02 20:25:12<SeP>2024-03-04 08:00:00<SeP>2024-03-05 19:34:48<SeP>2024-03-07 07:09:36<SeP>2024-03-08 18:44:24<SeP>2024-03-10 07:19:12<SeP>2024-03-11 18:54:00<SeP>2024-03-13 06:28:48<SeP>2024-03-14 18:03:36<SeP>2024-03-16 05:38:24<SeP>2024-03-17 17:13:12<SeP>2024-03-19 04:48:00<SeP>2024-03-20 16:22:48<SeP>2024-03-22 03:57:36<SeP>2024-03-23 15:32:24<SeP>2024-03-25 03:07:12<SeP>2024-03-26 14:42:00<SeP>2024-03-28 02:16:48<SeP>2024-03-29 13:51:36<SeP>2024-03-31 01:26:24<SeP>2024-04-01 13:01:12<SeP>2024-04-03 00:36:00<SeP>2024-04-04 12:10:48<SeP>2024-04-05 23:45:36<SeP>2024-04-07 11:20:24<SeP>2024-04-08 22:55:12<SeP>2024-04-10 10:30:00<SeP>2024-04-11 22:04:48<SeP>2024-04-13 09:39:36<SeP>2024-04-14 21:14:24<SeP>2024-04-16 08:49:12<SeP>2024-04-17 20:24:00<SeP>2024-04-19 07:58:48<SeP>2024-04-20 19:33:36<SeP>2024-04-22 07:08:24<SeP>2024-04-23 18:43:12<SeP>2024-04-25 06:18:00<SeP>2024-04-26 17:52:48<SeP>2024-04-28 05:27:36<SeP>2024-04-29 17:02:24<SeP>2024-05-01 04:37:12<SeP>2024-05-02 16:12:00<SeP>2024-05-04 03:46:48<SeP>2024-05-05 15:21:36<SeP>2024-05-07 02:56:24<SeP>2024-05-08 14:31:12<SeP>2024-05-10 02:06:00<SeP>2024-05-11 13:40:48<SeP>2024-05-13 01:15:36<SeP>2024-05-14 12:50:24<SeP>2024-05-16 00:25:12<SeP>2024-05-17 12:00:00<SeP>2024-05-18 23:34:48<SeP>2024-05-20 11:09:36<SeP>2024-05-21 22:44:24<SeP>2024-05-23 10:19:12<SeP>2024-05-24 21:54:00<SeP>2024-05-26 09:28:48<SeP>2024-05-27 21:03:36<SeP>2024-05-29 08:38:24<SeP>2024-05-30 20:13:12<SeP>2024-06-01 07:48:00<SeP>2024-06-02 19:22:48<SeP>2024-06-04 06:57:36<SeP>2024-06-05 18:32:24<SeP>2024-06-07 06:07:12<SeP>2024-06-08 17:42:00<SeP>2024-06-10 05:16:48<SeP>2024-06-11 16:51:36<SeP>2024-06-13 04:26:24<SeP>2024-06-14 16:01:12<SeP>2024-06-16 03:36:00<SeP>2024-06-17 15:10:48<SeP>2024-06-19 02:45:36<SeP>2024-06-20 14:20:24<SeP>2024-06-22 01:55:12<SeP>2024-06-23 13:30:00<SeP>2024-06-25 01:04:48<SeP>2024-06-26 12:39:36<SeP>2024-06-28 00:14:24<SeP>2024-06-29 11:49:12<SeP>2024-06-30 23:24:00<SeP>2024-07-02 10:58:48<SeP>2024-07-03 22:33:36<SeP>2024-07-05 10:08:24<SeP>2024-07-06 21:43:12<SeP>2024-07-08 09:18:00<SeP>2024-07-09 20:52:48<SeP>2024-07-11 08:27:36<SeP>2024-07-12 20:02:24<SeP>2024-07-14 07:37:12<SeP>2024-07-15 19:12:00<SeP>2024-07-17 06:46:48<SeP>2024-07-18 18:21:36<SeP>2024-07-20 05:56:24<SeP>2024-07-21 17:31:12<SeP>2024-07-23 05:06:00<SeP>2024-07-24 16:40:48<SeP>2024-07-26 04:15:36<SeP>2024-07-27 15:50:24<SeP>2024-07-29 03:25:12<SeP>2024-07-30 15:00:00<SeP>2024-08-01 02:34:48<SeP>2024-08-02 14:09:36<SeP>2024-08-04 01:44:24<SeP>2024-08-05 13:19:12<SeP>2024-08-07 00:54:00<SeP>2024-08-08 12:28:48<SeP>2024-08-10 00:03:36<SeP>2024-08-11 11:38:24<SeP>2024-08-12 23:13:12<SeP>2024-08-14 10:48:00<SeP>2024-08-15 22:22:48<SeP>2024-08-17 09:57:36<SeP>2024-08-18 21:32:24<SeP>2024-08-20 09:07:12<SeP>2024-08-21 20:42:00<SeP>2024-08-23 08:16:48<SeP>2024-08-24 19:51:36<SeP>2024-08-26 07:26:24<SeP>2024-08-27 19:01:12<SeP>2024-08-29 06:36:00<SeP>2024-08-30 18:10:48<SeP>2024-09-01 05:45:36<SeP>2024-09-02 17:20:24<SeP>2024-09-04 04:55:12<SeP>2024-09-05 16:30:00<SeP>2024-09-07 04:04:48<SeP>2024-09-08 15:39:36<SeP>2024-09-10 03:14:24<SeP>2024-09-11 14:49:12<SeP>2024-09-13 02:24:00<SeP>2024-09-14 13:58:48<SeP>2024-09-16 01:33:36<SeP>2024-09-17 13:08:24<SeP>2024-09-19 00:43:12<SeP>2024-09-20 12:18:00<SeP>2024-09-21 23:52:48<SeP>2024-09-23 11:27:36<SeP>2024-09-24 23:02:24<SeP>2024-09-26 10:37:12<SeP>2024-09-27 22:12:00<SeP>2024-09-29 09:46:48<SeP>2024-09-30 21:21:36<SeP>2024-10-02 08:56:24<SeP>2024-10-03 20:31:12<SeP>2024-10-05 08:06:00<SeP>2024-10-06 19:40:48<SeP>2024-10-08 07:15:36<SeP>2024-10-09 18:50:24<SeP>2024-10-11 06:25:12<SeP>2024-10-12 18:00:00<SeP>2024-10-14 05:34:48<SeP>2024-10-15 17:09:36<SeP>2024-10-17 04:44:24<SeP>2024-10-18 16:19:12<SeP>2024-10-20 03:54:00<SeP>2024-10-21 15:28:48<SeP>2024-10-23 03:03:36<SeP>2024-10-24 14:38:24<SeP>2024-10-26 02:13:12<SeP>2024-10-27 13:48:00<SeP>2024-10-29 01:22:48<SeP>2024-10-30 12:57:36<SeP>2024-11-01 00:32:24<SeP>2024-11-02 12:07:12<SeP>2024-11-03 22:42:00<SeP>2024-11-05 10:16:48<SeP>2024-11-06 21:51:36<SeP>2024-11-08 09:26:24<SeP>2024-11-09 21:01:12<SeP>2024-11-11 08:36:00<SeP>2024-11-12 20:10:48<SeP>2024-11-14 07:45:36<SeP>2024-11-15 19:20:24<SeP>2024-11-17 06:55:12<SeP>2024-11-18 18:30:00<SeP>2024-11-20 06:04:48<SeP>2024-11-21 17:39:36<SeP>2024-11-23 05:14:24<SeP>2024-11-24 16:49:12<SeP>2024-11-26 04:24:00<SeP>2024-11-27 15:58:48<SeP>2024-11-29 03:33:36<SeP>2024-11-30 15:08:24<SeP>2024-12-02 02:43:12<SeP>2024-12-03 14:18:00<SeP>2024-12-05 01:52:48<SeP>2024-12-06 13:27:36<SeP>2024-12-08 01:02:24<SeP>2024-12-09 12:37:12<SeP>2024-12-11 00:12:00<SeP>2024-12-12 11:46:48<SeP>2024-12-13 23:21:36<SeP>2024-12-15 10:56:24<SeP>2024-12-16 22:31:12<SeP>2024-12-18 10:06:00<SeP>2024-12-19 21:40:48<SeP>2024-12-21 09:15:36<SeP>2024-12-22 20:50:24<SeP>2024-12-24 08:25:12<SeP>2024-12-25 20:00:00<SeP>2024-12-27 07:34:48<SeP>2024-12-28 19:09:36<SeP>2024-12-30 06:44:24<SeP>2024-12-31 18:19:12<SeP>2025-01-02 05:54:00<SeP>2025-01-03 17:28:48<SeP>2025-01-05 05:03:36<SeP>2025-01-06 16:38:24<SeP>2025-01-08 04:13:12<SeP>2025-01-09 15:48:00<SeP>2025-01-11 03:22:48<SeP>2025-01-12 14:57:36<SeP>2025-01-14 02:32:24<SeP>2025-01-15 14:07:12<SeP>2025-01-17 01:42:00<SeP>2025-01-18 13:16:48<SeP>2025-01-20 00:51:36<SeP>2025-01-21 12:26:24<SeP>2025-01-23 00:01:12<SeP>2025-01-24 11:36:00<SeP>2025-01-25 23:10:48<SeP>2025-01-27 10:45:36<SeP>2025-01-28 22:20:24<SeP>2025-01-30 09:55:12<SeP>2025-01-31 21:30:00<SeP>2025-02-02 09:04:48<SeP>2025-02-03 20:39:36<SeP>2025-02-05 08:14:24<SeP>2025-02-06 19:49:12<SeP>2025-02-08 07:24:00<SeP>2025-02-09 18:58:48<SeP>2025-02-11 06:33:36<SeP>2025-02-12 18:08:24<SeP>2025-02-14 05:43:12<SeP>2025-02-15 17:18:00<SeP>2025-02-17 04:52:48<SeP>2025-02-18 16:27:36<SeP>2025-02-20 04:02:24<SeP>2025-02-21 15:37:12<SeP>2025-02-23 03:12:00<SeP>2025-02-24 14:46:48<SeP>2025-02-26 02:21:36<SeP>2025-02-27 13:56:24<SeP>2025-03-01 01:31:12<SeP>2025-03-02 13:06:00<SeP>2025-03-04 00:40:48<SeP>2025-03-05 12:15:36<SeP>2025-03-06 23:50:24<SeP>2025-03-08 11:25:12";
  const item1Label       = "Scans";
  const item1Data        = "778<SeP>1517<SeP>1374<SeP>1508<SeP>1250<SeP>1739<SeP>928<SeP>994<SeP>1159<SeP>3381<SeP>3244<SeP>1198<SeP>3313<SeP>880<SeP>783<SeP>890<SeP>1431<SeP>2933<SeP>1784<SeP>1365<SeP>1154<SeP>893<SeP>1093<SeP>1241<SeP>922<SeP>761<SeP>954<SeP>3684<SeP>936<SeP>825<SeP>1344<SeP>1264<SeP>887<SeP>1745<SeP>2498<SeP>2916<SeP>1784<SeP>1886<SeP>1324<SeP>1319<SeP>1805<SeP>1788<SeP>2211<SeP>1616<SeP>1674<SeP>1629<SeP>1739<SeP>1701<SeP>1744<SeP>1973<SeP>1701<SeP>1669<SeP>3138<SeP>1756<SeP>1438<SeP>1803<SeP>2118<SeP>2340<SeP>1434<SeP>3798<SeP>1420<SeP>1531<SeP>1607<SeP>1186<SeP>1923<SeP>1782<SeP>1250<SeP>1350<SeP>1495<SeP>1216<SeP>2287<SeP>1231<SeP>1184<SeP>1312<SeP>5644<SeP>3796<SeP>1398<SeP>1338<SeP>1779<SeP>1965<SeP>1142<SeP>6546<SeP>1644<SeP>1663<SeP>1023<SeP>1156<SeP>3322<SeP>1276<SeP>946<SeP>1014<SeP>1099<SeP>1218<SeP>2860<SeP>1160<SeP>1544<SeP>2872<SeP>6519<SeP>1297<SeP>967<SeP>960<SeP>903<SeP>991<SeP>996<SeP>1036<SeP>1696<SeP>3972<SeP>1783<SeP>1229<SeP>1400<SeP>612<SeP>1464<SeP>1316<SeP>1155<SeP>942<SeP>2319<SeP>1066<SeP>1210<SeP>1099<SeP>926<SeP>1188<SeP>662<SeP>927<SeP>858<SeP>774<SeP>1122<SeP>869<SeP>911<SeP>825<SeP>880<SeP>901<SeP>717<SeP>768<SeP>826<SeP>984<SeP>905<SeP>808<SeP>963<SeP>640<SeP>831<SeP>1135<SeP>732<SeP>933<SeP>958<SeP>910<SeP>1149<SeP>984<SeP>755<SeP>543<SeP>955<SeP>850<SeP>1308<SeP>886<SeP>1073<SeP>1187<SeP>1240<SeP>957<SeP>838<SeP>983<SeP>912<SeP>883<SeP>1082<SeP>841<SeP>948<SeP>952<SeP>1100<SeP>936<SeP>1124<SeP>930<SeP>1090<SeP>1106<SeP>943<SeP>907<SeP>2239<SeP>1260<SeP>1117<SeP>1074<SeP>1057<SeP>1045<SeP>1044<SeP>859<SeP>638<SeP>941<SeP>1176<SeP>894<SeP>980<SeP>1082<SeP>1356<SeP>1091<SeP>1222<SeP>1269<SeP>1309<SeP>1155<SeP>1499<SeP>1224<SeP>1548<SeP>2127<SeP>1339<SeP>829<SeP>899<SeP>1110<SeP>1086<SeP>661<SeP>833<SeP>883<SeP>1000<SeP>793<SeP>5334<SeP>3427<SeP>2013<SeP>1337<SeP>1074<SeP>837<SeP>1076<SeP>874<SeP>1028<SeP>1087<SeP>1106<SeP>1050<SeP>1488<SeP>1939<SeP>1071<SeP>1295<SeP>1284<SeP>1184<SeP>1161<SeP>1032<SeP>1022<SeP>1080<SeP>1123<SeP>1061<SeP>1166<SeP>955<SeP>1152<SeP>833<SeP>1375<SeP>1163<SeP>1142<SeP>1193<SeP>1381<SeP>1218<SeP>1595<SeP>1209<SeP>1156<SeP>1245<SeP>1103<SeP>2001<SeP>1278<SeP>1855<SeP>1664<SeP>1457<SeP>2021<SeP>1693<SeP>1188<SeP>1185<SeP>1336<SeP>1081<SeP>1720<SeP>1200<SeP>1251<SeP>1777<SeP>1529<SeP>1410<SeP>1603<SeP>1207<SeP>1438<SeP>1203<SeP>1097<SeP>1286<SeP>1185<SeP>1257<SeP>1308<SeP>1169<SeP>1495<SeP>1883<SeP>1346<SeP>1386<SeP>1621<SeP>1363<SeP>1128<SeP>965<SeP>1058<SeP>952<SeP>803<SeP>1047<SeP>1865<SeP>1126<SeP>1038<SeP>1162<SeP>979<SeP>800<SeP>1105<SeP>1396<SeP>798<SeP>980<SeP>937<SeP>1336<SeP>1624<SeP>1481<SeP>1057<SeP>1157<SeP>996<SeP>1873<SeP>1085<SeP>1167<SeP>1084<SeP>1292<SeP>1274<SeP>998<SeP>1026<SeP>1227<SeP>1014<SeP>957<SeP>823<SeP>1393<SeP>1320<SeP>1644<SeP>1629<SeP>1356<SeP>963<SeP>1127<SeP>1139<SeP>1149<SeP>1115<SeP>1204<SeP>1026<SeP>1019<SeP>1279<SeP>1634<SeP>1286<SeP>1678<SeP>1287<SeP>1724<SeP>1377<SeP>1285<SeP>1515<SeP>1454<SeP>1394<SeP>1276<SeP>1737<SeP>1423<SeP>1627<SeP>1422<SeP>1416<SeP>1392<SeP>1341<SeP>1258<SeP>1393<SeP>1578<SeP>1527<SeP>1205<SeP>1373<SeP>1217<SeP>1477<SeP>1300<SeP>1150<SeP>1700<SeP>1914<SeP>1411<SeP>1026<SeP>940<SeP>1545<SeP>1734<SeP>1313<SeP>1394<SeP>1026<SeP>1418<SeP>1356<SeP>1400<SeP>1430<SeP>1461<SeP>1691<SeP>1571<SeP>1496<SeP>1615<SeP>1444<SeP>1320<SeP>1736<SeP>1465<SeP>1382<SeP>1140<SeP>1839<SeP>1695<SeP>1841<SeP>1837<SeP>1844<SeP>1625<SeP>1635<SeP>1525<SeP>1594<SeP>1515<SeP>1745<SeP>1781<SeP>1730<SeP>1441<SeP>1506<SeP>1499<SeP>1461<SeP>1588<SeP>2365<SeP>1115";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "183<SeP>586<SeP>1400<SeP>656<SeP>222<SeP>236<SeP>7026<SeP>594<SeP>9402<SeP>563<SeP>401<SeP>1132<SeP>1297<SeP>241<SeP>309<SeP>306<SeP>161<SeP>750<SeP>349<SeP>8214<SeP>6620<SeP>6963<SeP>9092<SeP>2584<SeP>288<SeP>414<SeP>174<SeP>385<SeP>5925<SeP>87<SeP>387<SeP>154<SeP>510<SeP>520<SeP>10110<SeP>9157<SeP>10166<SeP>10175<SeP>5503<SeP>6030<SeP>8607<SeP>7913<SeP>9934<SeP>7939<SeP>7379<SeP>9443<SeP>8989<SeP>7454<SeP>8496<SeP>5395<SeP>9682<SeP>9902<SeP>6694<SeP>7696<SeP>8495<SeP>9473<SeP>18522<SeP>16516<SeP>9357<SeP>11862<SeP>6426<SeP>8568<SeP>8453<SeP>9001<SeP>8818<SeP>6112<SeP>6763<SeP>7872<SeP>6409<SeP>2531<SeP>6420<SeP>5357<SeP>6913<SeP>6664<SeP>8234<SeP>3196<SeP>6527<SeP>5740<SeP>6780<SeP>5823<SeP>6460<SeP>4428<SeP>7500<SeP>5027<SeP>5684<SeP>5948<SeP>8357<SeP>21621<SeP>24824<SeP>18855<SeP>9842<SeP>5663<SeP>8028<SeP>12410<SeP>6762<SeP>4003<SeP>5698<SeP>5101<SeP>4639<SeP>6507<SeP>7315<SeP>7601<SeP>6077<SeP>5460<SeP>4691<SeP>7979<SeP>8715<SeP>7704<SeP>7222<SeP>3886<SeP>8994<SeP>10048<SeP>6883<SeP>3244<SeP>5623<SeP>8058<SeP>6258<SeP>7010<SeP>9156<SeP>6740<SeP>1315<SeP>2490<SeP>1023<SeP>2527<SeP>2444<SeP>1077<SeP>766<SeP>1168<SeP>1332<SeP>1643<SeP>995<SeP>937<SeP>1185<SeP>1074<SeP>769<SeP>1472<SeP>1454<SeP>1186<SeP>975<SeP>2690<SeP>1458<SeP>8398<SeP>8531<SeP>9727<SeP>9193<SeP>6071<SeP>11150<SeP>7518<SeP>8468<SeP>9746<SeP>10599<SeP>11394<SeP>8633<SeP>11951<SeP>14247<SeP>8298<SeP>9577<SeP>4552<SeP>6368<SeP>9145<SeP>23443<SeP>6439<SeP>8289<SeP>10869<SeP>17344<SeP>6960<SeP>6062<SeP>6347<SeP>8010<SeP>26040<SeP>7542<SeP>9153<SeP>10965<SeP>4800<SeP>6585<SeP>6170<SeP>16153<SeP>4735<SeP>12785<SeP>8272<SeP>6786<SeP>8420<SeP>8036<SeP>2953<SeP>7049<SeP>4502<SeP>7124<SeP>7911<SeP>5879<SeP>6846<SeP>20730<SeP>6996<SeP>6044<SeP>6271<SeP>8262<SeP>11215<SeP>7090<SeP>4592<SeP>3296<SeP>6328<SeP>3366<SeP>4129<SeP>4161<SeP>632<SeP>112<SeP>634<SeP>613<SeP>580<SeP>753<SeP>362<SeP>665<SeP>1321<SeP>1257<SeP>3127<SeP>22922<SeP>609<SeP>4491<SeP>3829<SeP>2459<SeP>7445<SeP>2768<SeP>4240<SeP>3499<SeP>2951<SeP>3067<SeP>3180<SeP>4872<SeP>1477<SeP>3149<SeP>2474<SeP>2179<SeP>1933<SeP>1851<SeP>1161<SeP>1918<SeP>841<SeP>1281<SeP>1603<SeP>26513<SeP>1686<SeP>4081<SeP>4208<SeP>1965<SeP>3526<SeP>2890<SeP>1829<SeP>3740<SeP>2422<SeP>3772<SeP>2379<SeP>2986<SeP>3816<SeP>4597<SeP>5105<SeP>4981<SeP>4808<SeP>2678<SeP>2209<SeP>5397<SeP>3552<SeP>9587<SeP>5489<SeP>3667<SeP>2515<SeP>2090<SeP>4937<SeP>3540<SeP>3878<SeP>3203<SeP>2525<SeP>5902<SeP>3341<SeP>6361<SeP>3702<SeP>5931<SeP>5853<SeP>5177<SeP>5014<SeP>22337<SeP>4930<SeP>11973<SeP>1819<SeP>2541<SeP>4638<SeP>3755<SeP>5034<SeP>2955<SeP>5466<SeP>4613<SeP>4855<SeP>3154<SeP>4221<SeP>2005<SeP>1385<SeP>2188<SeP>3949<SeP>2336<SeP>3082<SeP>3444<SeP>4725<SeP>3601<SeP>3594<SeP>4186<SeP>3387<SeP>3399<SeP>6356<SeP>7648<SeP>6170<SeP>4763<SeP>4888<SeP>4513<SeP>3825<SeP>4081<SeP>4122<SeP>6666<SeP>5038<SeP>4904<SeP>2766<SeP>774<SeP>1485<SeP>1748<SeP>1230<SeP>1064<SeP>2093<SeP>1086<SeP>1655<SeP>3963<SeP>4956<SeP>6479<SeP>34209<SeP>4885<SeP>5963<SeP>22668<SeP>5493<SeP>5291<SeP>6260<SeP>4026<SeP>24723<SeP>5449<SeP>4890<SeP>4922<SeP>5879<SeP>18467<SeP>16929<SeP>4667<SeP>3304<SeP>4474<SeP>5578<SeP>5597<SeP>3033<SeP>3235<SeP>4144<SeP>5285<SeP>4966<SeP>13845<SeP>9227<SeP>5724<SeP>6454<SeP>2706<SeP>2772<SeP>3561<SeP>5001<SeP>3946<SeP>4000<SeP>2563<SeP>3682<SeP>2815<SeP>4591<SeP>5179<SeP>8497<SeP>10781<SeP>8517<SeP>9504<SeP>7812<SeP>7243<SeP>5261<SeP>4972<SeP>4272<SeP>25281<SeP>3591<SeP>3886<SeP>3568<SeP>11429<SeP>5215<SeP>4487<SeP>4390<SeP>4512<SeP>3521<SeP>6343<SeP>10109<SeP>6591<SeP>3897<SeP>3341<SeP>2822<SeP>2210<SeP>2377<SeP>2081<SeP>2187<SeP>2461<SeP>1977";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:34:48<SeP>2023-07-28 23:09:36<SeP>2023-07-30 10:44:24<SeP>2023-07-31 22:19:12<SeP>2023-08-02 09:54:00<SeP>2023-08-03 21:28:48<SeP>2023-08-05 09:03:36<SeP>2023-08-06 20:38:24<SeP>2023-08-08 08:13:12<SeP>2023-08-09 19:48:00<SeP>2023-08-11 07:22:48<SeP>2023-08-12 18:57:36<SeP>2023-08-14 06:32:24<SeP>2023-08-15 18:07:12<SeP>2023-08-17 05:42:00<SeP>2023-08-18 17:16:48<SeP>2023-08-20 04:51:36<SeP>2023-08-21 16:26:24<SeP>2023-08-23 04:01:12<SeP>2023-08-24 15:36:00<SeP>2023-08-26 03:10:48<SeP>2023-08-27 14:45:36<SeP>2023-08-29 02:20:24<SeP>2023-08-30 13:55:12<SeP>2023-09-01 01:30:00<SeP>2023-09-02 13:04:48<SeP>2023-09-04 00:39:36<SeP>2023-09-05 12:14:24<SeP>2023-09-06 23:49:12<SeP>2023-09-08 11:24:00<SeP>2023-09-09 22:58:48<SeP>2023-09-11 10:33:36<SeP>2023-09-12 22:08:24<SeP>2023-09-14 09:43:12<SeP>2023-09-15 21:18:00<SeP>2023-09-17 08:52:48<SeP>2023-09-18 20:27:36<SeP>2023-09-20 08:02:24<SeP>2023-09-21 19:37:12<SeP>2023-09-23 07:12:00<SeP>2023-09-24 18:46:48<SeP>2023-09-26 06:21:36<SeP>2023-09-27 17:56:24<SeP>2023-09-29 05:31:12<SeP>2023-09-30 17:06:00<SeP>2023-10-02 04:40:48<SeP>2023-10-03 16:15:36<SeP>2023-10-05 03:50:24<SeP>2023-10-06 15:25:12<SeP>2023-10-08 03:00:00<SeP>2023-10-09 14:34:48<SeP>2023-10-11 02:09:36<SeP>2023-10-12 13:44:24<SeP>2023-10-14 01:19:12<SeP>2023-10-15 12:54:00<SeP>2023-10-17 00:28:48<SeP>2023-10-18 12:03:36<SeP>2023-10-19 23:38:24<SeP>2023-10-21 11:13:12<SeP>2023-10-22 22:48:00<SeP>2023-10-24 10:22:48<SeP>2023-10-25 21:57:36<SeP>2023-10-27 09:32:24<SeP>2023-10-28 21:07:12<SeP>2023-10-30 08:42:00<SeP>2023-10-31 20:16:48<SeP>2023-11-02 07:51:36<SeP>2023-11-03 19:26:24<SeP>2023-11-05 06:01:12<SeP>2023-11-06 17:36:00<SeP>2023-11-08 05:10:48<SeP>2023-11-09 16:45:36<SeP>2023-11-11 04:20:24<SeP>2023-11-12 15:55:12<SeP>2023-11-14 03:30:00<SeP>2023-11-15 15:04:48<SeP>2023-11-17 02:39:36<SeP>2023-11-18 14:14:24<SeP>2023-11-20 01:49:12<SeP>2023-11-21 13:24:00<SeP>2023-11-23 00:58:48<SeP>2023-11-24 12:33:36<SeP>2023-11-26 00:08:24<SeP>2023-11-27 11:43:12<SeP>2023-11-28 23:18:00<SeP>2023-11-30 10:52:48<SeP>2023-12-01 22:27:36<SeP>2023-12-03 10:02:24<SeP>2023-12-04 21:37:12<SeP>2023-12-06 09:12:00<SeP>2023-12-07 20:46:48<SeP>2023-12-09 08:21:36<SeP>2023-12-10 19:56:24<SeP>2023-12-12 07:31:12<SeP>2023-12-13 19:06:00<SeP>2023-12-15 06:40:48<SeP>2023-12-16 18:15:36<SeP>2023-12-18 05:50:24<SeP>2023-12-19 17:25:12<SeP>2023-12-21 05:00:00<SeP>2023-12-22 16:34:48<SeP>2023-12-24 04:09:36<SeP>2023-12-25 15:44:24<SeP>2023-12-27 03:19:12<SeP>2023-12-28 14:54:00<SeP>2023-12-30 02:28:48<SeP>2023-12-31 14:03:36<SeP>2024-01-02 01:38:24<SeP>2024-01-03 13:13:12<SeP>2024-01-05 00:48:00<SeP>2024-01-06 12:22:48<SeP>2024-01-07 23:57:36<SeP>2024-01-09 11:32:24<SeP>2024-01-10 23:07:12<SeP>2024-01-12 10:42:00<SeP>2024-01-13 22:16:48<SeP>2024-01-15 09:51:36<SeP>2024-01-16 21:26:24<SeP>2024-01-18 09:01:12<SeP>2024-01-19 20:36:00<SeP>2024-01-21 08:10:48<SeP>2024-01-22 19:45:36<SeP>2024-01-24 07:20:24<SeP>2024-01-25 18:55:12<SeP>2024-01-27 06:30:00<SeP>2024-01-28 18:04:48<SeP>2024-01-30 05:39:36<SeP>2024-01-31 17:14:24<SeP>2024-02-02 04:49:12<SeP>2024-02-03 16:24:00<SeP>2024-02-05 03:58:48<SeP>2024-02-06 15:33:36<SeP>2024-02-08 03:08:24<SeP>2024-02-09 14:43:12<SeP>2024-02-11 02:18:00<SeP>2024-02-12 13:52:48<SeP>2024-02-14 01:27:36<SeP>2024-02-15 13:02:24<SeP>2024-02-17 00:37:12<SeP>2024-02-18 12:12:00<SeP>2024-02-19 23:46:48<SeP>2024-02-21 11:21:36<SeP>2024-02-22 22:56:24<SeP>2024-02-24 10:31:12<SeP>2024-02-25 22:06:00<SeP>2024-02-27 09:40:48<SeP>2024-02-28 21:15:36<SeP>2024-03-01 08:50:24<SeP>2024-03-02 20:25:12<SeP>2024-03-04 08:00:00<SeP>2024-03-05 19:34:48<SeP>2024-03-07 07:09:36<SeP>2024-03-08 18:44:24<SeP>2024-03-10 07:19:12<SeP>2024-03-11 18:54:00<SeP>2024-03-13 06:28:48<SeP>2024-03-14 18:03:36<SeP>2024-03-16 05:38:24<SeP>2024-03-17 17:13:12<SeP>2024-03-19 04:48:00<SeP>2024-03-20 16:22:48<SeP>2024-03-22 03:57:36<SeP>2024-03-23 15:32:24<SeP>2024-03-25 03:07:12<SeP>2024-03-26 14:42:00<SeP>2024-03-28 02:16:48<SeP>2024-03-29 13:51:36<SeP>2024-03-31 01:26:24<SeP>2024-04-01 13:01:12<SeP>2024-04-03 00:36:00<SeP>2024-04-04 12:10:48<SeP>2024-04-05 23:45:36<SeP>2024-04-07 11:20:24<SeP>2024-04-08 22:55:12<SeP>2024-04-10 10:30:00<SeP>2024-04-11 22:04:48<SeP>2024-04-13 09:39:36<SeP>2024-04-14 21:14:24<SeP>2024-04-16 08:49:12<SeP>2024-04-17 20:24:00<SeP>2024-04-19 07:58:48<SeP>2024-04-20 19:33:36<SeP>2024-04-22 07:08:24<SeP>2024-04-23 18:43:12<SeP>2024-04-25 06:18:00<SeP>2024-04-26 17:52:48<SeP>2024-04-28 05:27:36<SeP>2024-04-29 17:02:24<SeP>2024-05-01 04:37:12<SeP>2024-05-02 16:12:00<SeP>2024-05-04 03:46:48<SeP>2024-05-05 15:21:36<SeP>2024-05-07 02:56:24<SeP>2024-05-08 14:31:12<SeP>2024-05-10 02:06:00<SeP>2024-05-11 13:40:48<SeP>2024-05-13 01:15:36<SeP>2024-05-14 12:50:24<SeP>2024-05-16 00:25:12<SeP>2024-05-17 12:00:00<SeP>2024-05-18 23:34:48<SeP>2024-05-20 11:09:36<SeP>2024-05-21 22:44:24<SeP>2024-05-23 10:19:12<SeP>2024-05-24 21:54:00<SeP>2024-05-26 09:28:48<SeP>2024-05-27 21:03:36<SeP>2024-05-29 08:38:24<SeP>2024-05-30 20:13:12<SeP>2024-06-01 07:48:00<SeP>2024-06-02 19:22:48<SeP>2024-06-04 06:57:36<SeP>2024-06-05 18:32:24<SeP>2024-06-07 06:07:12<SeP>2024-06-08 17:42:00<SeP>2024-06-10 05:16:48<SeP>2024-06-11 16:51:36<SeP>2024-06-13 04:26:24<SeP>2024-06-14 16:01:12<SeP>2024-06-16 03:36:00<SeP>2024-06-17 15:10:48<SeP>2024-06-19 02:45:36<SeP>2024-06-20 14:20:24<SeP>2024-06-22 01:55:12<SeP>2024-06-23 13:30:00<SeP>2024-06-25 01:04:48<SeP>2024-06-26 12:39:36<SeP>2024-06-28 00:14:24<SeP>2024-06-29 11:49:12<SeP>2024-06-30 23:24:00<SeP>2024-07-02 10:58:48<SeP>2024-07-03 22:33:36<SeP>2024-07-05 10:08:24<SeP>2024-07-06 21:43:12<SeP>2024-07-08 09:18:00<SeP>2024-07-09 20:52:48<SeP>2024-07-11 08:27:36<SeP>2024-07-12 20:02:24<SeP>2024-07-14 07:37:12<SeP>2024-07-15 19:12:00<SeP>2024-07-17 06:46:48<SeP>2024-07-18 18:21:36<SeP>2024-07-20 05:56:24<SeP>2024-07-21 17:31:12<SeP>2024-07-23 05:06:00<SeP>2024-07-24 16:40:48<SeP>2024-07-26 04:15:36<SeP>2024-07-27 15:50:24<SeP>2024-07-29 03:25:12<SeP>2024-07-30 15:00:00<SeP>2024-08-01 02:34:48<SeP>2024-08-02 14:09:36<SeP>2024-08-04 01:44:24<SeP>2024-08-05 13:19:12<SeP>2024-08-07 00:54:00<SeP>2024-08-08 12:28:48<SeP>2024-08-10 00:03:36<SeP>2024-08-11 11:38:24<SeP>2024-08-12 23:13:12<SeP>2024-08-14 10:48:00<SeP>2024-08-15 22:22:48<SeP>2024-08-17 09:57:36<SeP>2024-08-18 21:32:24<SeP>2024-08-20 09:07:12<SeP>2024-08-21 20:42:00<SeP>2024-08-23 08:16:48<SeP>2024-08-24 19:51:36<SeP>2024-08-26 07:26:24<SeP>2024-08-27 19:01:12<SeP>2024-08-29 06:36:00<SeP>2024-08-30 18:10:48<SeP>2024-09-01 05:45:36<SeP>2024-09-02 17:20:24<SeP>2024-09-04 04:55:12<SeP>2024-09-05 16:30:00<SeP>2024-09-07 04:04:48<SeP>2024-09-08 15:39:36<SeP>2024-09-10 03:14:24<SeP>2024-09-11 14:49:12<SeP>2024-09-13 02:24:00<SeP>2024-09-14 13:58:48<SeP>2024-09-16 01:33:36<SeP>2024-09-17 13:08:24<SeP>2024-09-19 00:43:12<SeP>2024-09-20 12:18:00<SeP>2024-09-21 23:52:48<SeP>2024-09-23 11:27:36<SeP>2024-09-24 23:02:24<SeP>2024-09-26 10:37:12<SeP>2024-09-27 22:12:00<SeP>2024-09-29 09:46:48<SeP>2024-09-30 21:21:36<SeP>2024-10-02 08:56:24<SeP>2024-10-03 20:31:12<SeP>2024-10-05 08:06:00<SeP>2024-10-06 19:40:48<SeP>2024-10-08 07:15:36<SeP>2024-10-09 18:50:24<SeP>2024-10-11 06:25:12<SeP>2024-10-12 18:00:00<SeP>2024-10-14 05:34:48<SeP>2024-10-15 17:09:36<SeP>2024-10-17 04:44:24<SeP>2024-10-18 16:19:12<SeP>2024-10-20 03:54:00<SeP>2024-10-21 15:28:48<SeP>2024-10-23 03:03:36<SeP>2024-10-24 14:38:24<SeP>2024-10-26 02:13:12<SeP>2024-10-27 13:48:00<SeP>2024-10-29 01:22:48<SeP>2024-10-30 12:57:36<SeP>2024-11-01 00:32:24<SeP>2024-11-02 12:07:12<SeP>2024-11-03 22:42:00<SeP>2024-11-05 10:16:48<SeP>2024-11-06 21:51:36<SeP>2024-11-08 09:26:24<SeP>2024-11-09 21:01:12<SeP>2024-11-11 08:36:00<SeP>2024-11-12 20:10:48<SeP>2024-11-14 07:45:36<SeP>2024-11-15 19:20:24<SeP>2024-11-17 06:55:12<SeP>2024-11-18 18:30:00<SeP>2024-11-20 06:04:48<SeP>2024-11-21 17:39:36<SeP>2024-11-23 05:14:24<SeP>2024-11-24 16:49:12<SeP>2024-11-26 04:24:00<SeP>2024-11-27 15:58:48<SeP>2024-11-29 03:33:36<SeP>2024-11-30 15:08:24<SeP>2024-12-02 02:43:12<SeP>2024-12-03 14:18:00<SeP>2024-12-05 01:52:48<SeP>2024-12-06 13:27:36<SeP>2024-12-08 01:02:24<SeP>2024-12-09 12:37:12<SeP>2024-12-11 00:12:00<SeP>2024-12-12 11:46:48<SeP>2024-12-13 23:21:36<SeP>2024-12-15 10:56:24<SeP>2024-12-16 22:31:12<SeP>2024-12-18 10:06:00<SeP>2024-12-19 21:40:48<SeP>2024-12-21 09:15:36<SeP>2024-12-22 20:50:24<SeP>2024-12-24 08:25:12<SeP>2024-12-25 20:00:00<SeP>2024-12-27 07:34:48<SeP>2024-12-28 19:09:36<SeP>2024-12-30 06:44:24<SeP>2024-12-31 18:19:12<SeP>2025-01-02 05:54:00<SeP>2025-01-03 17:28:48<SeP>2025-01-05 05:03:36<SeP>2025-01-06 16:38:24<SeP>2025-01-08 04:13:12<SeP>2025-01-09 15:48:00<SeP>2025-01-11 03:22:48<SeP>2025-01-12 14:57:36<SeP>2025-01-14 02:32:24<SeP>2025-01-15 14:07:12<SeP>2025-01-17 01:42:00<SeP>2025-01-18 13:16:48<SeP>2025-01-20 00:51:36<SeP>2025-01-21 12:26:24<SeP>2025-01-23 00:01:12<SeP>2025-01-24 11:36:00<SeP>2025-01-25 23:10:48<SeP>2025-01-27 10:45:36<SeP>2025-01-28 22:20:24<SeP>2025-01-30 09:55:12<SeP>2025-01-31 21:30:00<SeP>2025-02-02 09:04:48<SeP>2025-02-03 20:39:36<SeP>2025-02-05 08:14:24<SeP>2025-02-06 19:49:12<SeP>2025-02-08 07:24:00<SeP>2025-02-09 18:58:48<SeP>2025-02-11 06:33:36<SeP>2025-02-12 18:08:24<SeP>2025-02-14 05:43:12<SeP>2025-02-15 17:18:00<SeP>2025-02-17 04:52:48<SeP>2025-02-18 16:27:36<SeP>2025-02-20 04:02:24<SeP>2025-02-21 15:37:12<SeP>2025-02-23 03:12:00<SeP>2025-02-24 14:46:48<SeP>2025-02-26 02:21:36<SeP>2025-02-27 13:56:24<SeP>2025-03-01 01:31:12<SeP>2025-03-02 13:06:00<SeP>2025-03-04 00:40:48<SeP>2025-03-05 12:15:36<SeP>2025-03-06 23:50:24<SeP>2025-03-08 11:25:12";
  const itemLabel       = "Scans";
  const itemData        = "778<SeP>1517<SeP>1374<SeP>1508<SeP>1250<SeP>1739<SeP>928<SeP>994<SeP>1159<SeP>3381<SeP>3244<SeP>1198<SeP>3313<SeP>880<SeP>783<SeP>890<SeP>1431<SeP>2933<SeP>1784<SeP>1365<SeP>1154<SeP>893<SeP>1093<SeP>1241<SeP>922<SeP>761<SeP>954<SeP>3684<SeP>936<SeP>825<SeP>1344<SeP>1264<SeP>887<SeP>1745<SeP>2498<SeP>2916<SeP>1784<SeP>1886<SeP>1324<SeP>1319<SeP>1805<SeP>1788<SeP>2211<SeP>1616<SeP>1674<SeP>1629<SeP>1739<SeP>1701<SeP>1744<SeP>1973<SeP>1701<SeP>1669<SeP>3138<SeP>1756<SeP>1438<SeP>1803<SeP>2118<SeP>2340<SeP>1434<SeP>3798<SeP>1420<SeP>1531<SeP>1607<SeP>1186<SeP>1923<SeP>1782<SeP>1250<SeP>1350<SeP>1495<SeP>1216<SeP>2287<SeP>1231<SeP>1184<SeP>1312<SeP>5644<SeP>3796<SeP>1398<SeP>1338<SeP>1779<SeP>1965<SeP>1142<SeP>6546<SeP>1644<SeP>1663<SeP>1023<SeP>1156<SeP>3322<SeP>1276<SeP>946<SeP>1014<SeP>1099<SeP>1218<SeP>2860<SeP>1160<SeP>1544<SeP>2872<SeP>6519<SeP>1297<SeP>967<SeP>960<SeP>903<SeP>991<SeP>996<SeP>1036<SeP>1696<SeP>3972<SeP>1783<SeP>1229<SeP>1400<SeP>612<SeP>1464<SeP>1316<SeP>1155<SeP>942<SeP>2319<SeP>1066<SeP>1210<SeP>1099<SeP>926<SeP>1188<SeP>662<SeP>927<SeP>858<SeP>774<SeP>1122<SeP>869<SeP>911<SeP>825<SeP>880<SeP>901<SeP>717<SeP>768<SeP>826<SeP>984<SeP>905<SeP>808<SeP>963<SeP>640<SeP>831<SeP>1135<SeP>732<SeP>933<SeP>958<SeP>910<SeP>1149<SeP>984<SeP>755<SeP>543<SeP>955<SeP>850<SeP>1308<SeP>886<SeP>1073<SeP>1187<SeP>1240<SeP>957<SeP>838<SeP>983<SeP>912<SeP>883<SeP>1082<SeP>841<SeP>948<SeP>952<SeP>1100<SeP>936<SeP>1124<SeP>930<SeP>1090<SeP>1106<SeP>943<SeP>907<SeP>2239<SeP>1260<SeP>1117<SeP>1074<SeP>1057<SeP>1045<SeP>1044<SeP>859<SeP>638<SeP>941<SeP>1176<SeP>894<SeP>980<SeP>1082<SeP>1356<SeP>1091<SeP>1222<SeP>1269<SeP>1309<SeP>1155<SeP>1499<SeP>1224<SeP>1548<SeP>2127<SeP>1339<SeP>829<SeP>899<SeP>1110<SeP>1086<SeP>661<SeP>833<SeP>883<SeP>1000<SeP>793<SeP>5334<SeP>3427<SeP>2013<SeP>1337<SeP>1074<SeP>837<SeP>1076<SeP>874<SeP>1028<SeP>1087<SeP>1106<SeP>1050<SeP>1488<SeP>1939<SeP>1071<SeP>1295<SeP>1284<SeP>1184<SeP>1161<SeP>1032<SeP>1022<SeP>1080<SeP>1123<SeP>1061<SeP>1166<SeP>955<SeP>1152<SeP>833<SeP>1375<SeP>1163<SeP>1142<SeP>1193<SeP>1381<SeP>1218<SeP>1595<SeP>1209<SeP>1156<SeP>1245<SeP>1103<SeP>2001<SeP>1278<SeP>1855<SeP>1664<SeP>1457<SeP>2021<SeP>1693<SeP>1188<SeP>1185<SeP>1336<SeP>1081<SeP>1720<SeP>1200<SeP>1251<SeP>1777<SeP>1529<SeP>1410<SeP>1603<SeP>1207<SeP>1438<SeP>1203<SeP>1097<SeP>1286<SeP>1185<SeP>1257<SeP>1308<SeP>1169<SeP>1495<SeP>1883<SeP>1346<SeP>1386<SeP>1621<SeP>1363<SeP>1128<SeP>965<SeP>1058<SeP>952<SeP>803<SeP>1047<SeP>1865<SeP>1126<SeP>1038<SeP>1162<SeP>979<SeP>800<SeP>1105<SeP>1396<SeP>798<SeP>980<SeP>937<SeP>1336<SeP>1624<SeP>1481<SeP>1057<SeP>1157<SeP>996<SeP>1873<SeP>1085<SeP>1167<SeP>1084<SeP>1292<SeP>1274<SeP>998<SeP>1026<SeP>1227<SeP>1014<SeP>957<SeP>823<SeP>1393<SeP>1320<SeP>1644<SeP>1629<SeP>1356<SeP>963<SeP>1127<SeP>1139<SeP>1149<SeP>1115<SeP>1204<SeP>1026<SeP>1019<SeP>1279<SeP>1634<SeP>1286<SeP>1678<SeP>1287<SeP>1724<SeP>1377<SeP>1285<SeP>1515<SeP>1454<SeP>1394<SeP>1276<SeP>1737<SeP>1423<SeP>1627<SeP>1422<SeP>1416<SeP>1392<SeP>1341<SeP>1258<SeP>1393<SeP>1578<SeP>1527<SeP>1205<SeP>1373<SeP>1217<SeP>1477<SeP>1300<SeP>1150<SeP>1700<SeP>1914<SeP>1411<SeP>1026<SeP>940<SeP>1545<SeP>1734<SeP>1313<SeP>1394<SeP>1026<SeP>1418<SeP>1356<SeP>1400<SeP>1430<SeP>1461<SeP>1691<SeP>1571<SeP>1496<SeP>1615<SeP>1444<SeP>1320<SeP>1736<SeP>1465<SeP>1382<SeP>1140<SeP>1839<SeP>1695<SeP>1841<SeP>1837<SeP>1844<SeP>1625<SeP>1635<SeP>1525<SeP>1594<SeP>1515<SeP>1745<SeP>1781<SeP>1730<SeP>1441<SeP>1506<SeP>1499<SeP>1461<SeP>1588<SeP>2365<SeP>1115";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:34:48<SeP>2023-07-28 23:09:36<SeP>2023-07-30 10:44:24<SeP>2023-07-31 22:19:12<SeP>2023-08-02 09:54:00<SeP>2023-08-03 21:28:48<SeP>2023-08-05 09:03:36<SeP>2023-08-06 20:38:24<SeP>2023-08-08 08:13:12<SeP>2023-08-09 19:48:00<SeP>2023-08-11 07:22:48<SeP>2023-08-12 18:57:36<SeP>2023-08-14 06:32:24<SeP>2023-08-15 18:07:12<SeP>2023-08-17 05:42:00<SeP>2023-08-18 17:16:48<SeP>2023-08-20 04:51:36<SeP>2023-08-21 16:26:24<SeP>2023-08-23 04:01:12<SeP>2023-08-24 15:36:00<SeP>2023-08-26 03:10:48<SeP>2023-08-27 14:45:36<SeP>2023-08-29 02:20:24<SeP>2023-08-30 13:55:12<SeP>2023-09-01 01:30:00<SeP>2023-09-02 13:04:48<SeP>2023-09-04 00:39:36<SeP>2023-09-05 12:14:24<SeP>2023-09-06 23:49:12<SeP>2023-09-08 11:24:00<SeP>2023-09-09 22:58:48<SeP>2023-09-11 10:33:36<SeP>2023-09-12 22:08:24<SeP>2023-09-14 09:43:12<SeP>2023-09-15 21:18:00<SeP>2023-09-17 08:52:48<SeP>2023-09-18 20:27:36<SeP>2023-09-20 08:02:24<SeP>2023-09-21 19:37:12<SeP>2023-09-23 07:12:00<SeP>2023-09-24 18:46:48<SeP>2023-09-26 06:21:36<SeP>2023-09-27 17:56:24<SeP>2023-09-29 05:31:12<SeP>2023-09-30 17:06:00<SeP>2023-10-02 04:40:48<SeP>2023-10-03 16:15:36<SeP>2023-10-05 03:50:24<SeP>2023-10-06 15:25:12<SeP>2023-10-08 03:00:00<SeP>2023-10-09 14:34:48<SeP>2023-10-11 02:09:36<SeP>2023-10-12 13:44:24<SeP>2023-10-14 01:19:12<SeP>2023-10-15 12:54:00<SeP>2023-10-17 00:28:48<SeP>2023-10-18 12:03:36<SeP>2023-10-19 23:38:24<SeP>2023-10-21 11:13:12<SeP>2023-10-22 22:48:00<SeP>2023-10-24 10:22:48<SeP>2023-10-25 21:57:36<SeP>2023-10-27 09:32:24<SeP>2023-10-28 21:07:12<SeP>2023-10-30 08:42:00<SeP>2023-10-31 20:16:48<SeP>2023-11-02 07:51:36<SeP>2023-11-03 19:26:24<SeP>2023-11-05 06:01:12<SeP>2023-11-06 17:36:00<SeP>2023-11-08 05:10:48<SeP>2023-11-09 16:45:36<SeP>2023-11-11 04:20:24<SeP>2023-11-12 15:55:12<SeP>2023-11-14 03:30:00<SeP>2023-11-15 15:04:48<SeP>2023-11-17 02:39:36<SeP>2023-11-18 14:14:24<SeP>2023-11-20 01:49:12<SeP>2023-11-21 13:24:00<SeP>2023-11-23 00:58:48<SeP>2023-11-24 12:33:36<SeP>2023-11-26 00:08:24<SeP>2023-11-27 11:43:12<SeP>2023-11-28 23:18:00<SeP>2023-11-30 10:52:48<SeP>2023-12-01 22:27:36<SeP>2023-12-03 10:02:24<SeP>2023-12-04 21:37:12<SeP>2023-12-06 09:12:00<SeP>2023-12-07 20:46:48<SeP>2023-12-09 08:21:36<SeP>2023-12-10 19:56:24<SeP>2023-12-12 07:31:12<SeP>2023-12-13 19:06:00<SeP>2023-12-15 06:40:48<SeP>2023-12-16 18:15:36<SeP>2023-12-18 05:50:24<SeP>2023-12-19 17:25:12<SeP>2023-12-21 05:00:00<SeP>2023-12-22 16:34:48<SeP>2023-12-24 04:09:36<SeP>2023-12-25 15:44:24<SeP>2023-12-27 03:19:12<SeP>2023-12-28 14:54:00<SeP>2023-12-30 02:28:48<SeP>2023-12-31 14:03:36<SeP>2024-01-02 01:38:24<SeP>2024-01-03 13:13:12<SeP>2024-01-05 00:48:00<SeP>2024-01-06 12:22:48<SeP>2024-01-07 23:57:36<SeP>2024-01-09 11:32:24<SeP>2024-01-10 23:07:12<SeP>2024-01-12 10:42:00<SeP>2024-01-13 22:16:48<SeP>2024-01-15 09:51:36<SeP>2024-01-16 21:26:24<SeP>2024-01-18 09:01:12<SeP>2024-01-19 20:36:00<SeP>2024-01-21 08:10:48<SeP>2024-01-22 19:45:36<SeP>2024-01-24 07:20:24<SeP>2024-01-25 18:55:12<SeP>2024-01-27 06:30:00<SeP>2024-01-28 18:04:48<SeP>2024-01-30 05:39:36<SeP>2024-01-31 17:14:24<SeP>2024-02-02 04:49:12<SeP>2024-02-03 16:24:00<SeP>2024-02-05 03:58:48<SeP>2024-02-06 15:33:36<SeP>2024-02-08 03:08:24<SeP>2024-02-09 14:43:12<SeP>2024-02-11 02:18:00<SeP>2024-02-12 13:52:48<SeP>2024-02-14 01:27:36<SeP>2024-02-15 13:02:24<SeP>2024-02-17 00:37:12<SeP>2024-02-18 12:12:00<SeP>2024-02-19 23:46:48<SeP>2024-02-21 11:21:36<SeP>2024-02-22 22:56:24<SeP>2024-02-24 10:31:12<SeP>2024-02-25 22:06:00<SeP>2024-02-27 09:40:48<SeP>2024-02-28 21:15:36<SeP>2024-03-01 08:50:24<SeP>2024-03-02 20:25:12<SeP>2024-03-04 08:00:00<SeP>2024-03-05 19:34:48<SeP>2024-03-07 07:09:36<SeP>2024-03-08 18:44:24<SeP>2024-03-10 07:19:12<SeP>2024-03-11 18:54:00<SeP>2024-03-13 06:28:48<SeP>2024-03-14 18:03:36<SeP>2024-03-16 05:38:24<SeP>2024-03-17 17:13:12<SeP>2024-03-19 04:48:00<SeP>2024-03-20 16:22:48<SeP>2024-03-22 03:57:36<SeP>2024-03-23 15:32:24<SeP>2024-03-25 03:07:12<SeP>2024-03-26 14:42:00<SeP>2024-03-28 02:16:48<SeP>2024-03-29 13:51:36<SeP>2024-03-31 01:26:24<SeP>2024-04-01 13:01:12<SeP>2024-04-03 00:36:00<SeP>2024-04-04 12:10:48<SeP>2024-04-05 23:45:36<SeP>2024-04-07 11:20:24<SeP>2024-04-08 22:55:12<SeP>2024-04-10 10:30:00<SeP>2024-04-11 22:04:48<SeP>2024-04-13 09:39:36<SeP>2024-04-14 21:14:24<SeP>2024-04-16 08:49:12<SeP>2024-04-17 20:24:00<SeP>2024-04-19 07:58:48<SeP>2024-04-20 19:33:36<SeP>2024-04-22 07:08:24<SeP>2024-04-23 18:43:12<SeP>2024-04-25 06:18:00<SeP>2024-04-26 17:52:48<SeP>2024-04-28 05:27:36<SeP>2024-04-29 17:02:24<SeP>2024-05-01 04:37:12<SeP>2024-05-02 16:12:00<SeP>2024-05-04 03:46:48<SeP>2024-05-05 15:21:36<SeP>2024-05-07 02:56:24<SeP>2024-05-08 14:31:12<SeP>2024-05-10 02:06:00<SeP>2024-05-11 13:40:48<SeP>2024-05-13 01:15:36<SeP>2024-05-14 12:50:24<SeP>2024-05-16 00:25:12<SeP>2024-05-17 12:00:00<SeP>2024-05-18 23:34:48<SeP>2024-05-20 11:09:36<SeP>2024-05-21 22:44:24<SeP>2024-05-23 10:19:12<SeP>2024-05-24 21:54:00<SeP>2024-05-26 09:28:48<SeP>2024-05-27 21:03:36<SeP>2024-05-29 08:38:24<SeP>2024-05-30 20:13:12<SeP>2024-06-01 07:48:00<SeP>2024-06-02 19:22:48<SeP>2024-06-04 06:57:36<SeP>2024-06-05 18:32:24<SeP>2024-06-07 06:07:12<SeP>2024-06-08 17:42:00<SeP>2024-06-10 05:16:48<SeP>2024-06-11 16:51:36<SeP>2024-06-13 04:26:24<SeP>2024-06-14 16:01:12<SeP>2024-06-16 03:36:00<SeP>2024-06-17 15:10:48<SeP>2024-06-19 02:45:36<SeP>2024-06-20 14:20:24<SeP>2024-06-22 01:55:12<SeP>2024-06-23 13:30:00<SeP>2024-06-25 01:04:48<SeP>2024-06-26 12:39:36<SeP>2024-06-28 00:14:24<SeP>2024-06-29 11:49:12<SeP>2024-06-30 23:24:00<SeP>2024-07-02 10:58:48<SeP>2024-07-03 22:33:36<SeP>2024-07-05 10:08:24<SeP>2024-07-06 21:43:12<SeP>2024-07-08 09:18:00<SeP>2024-07-09 20:52:48<SeP>2024-07-11 08:27:36<SeP>2024-07-12 20:02:24<SeP>2024-07-14 07:37:12<SeP>2024-07-15 19:12:00<SeP>2024-07-17 06:46:48<SeP>2024-07-18 18:21:36<SeP>2024-07-20 05:56:24<SeP>2024-07-21 17:31:12<SeP>2024-07-23 05:06:00<SeP>2024-07-24 16:40:48<SeP>2024-07-26 04:15:36<SeP>2024-07-27 15:50:24<SeP>2024-07-29 03:25:12<SeP>2024-07-30 15:00:00<SeP>2024-08-01 02:34:48<SeP>2024-08-02 14:09:36<SeP>2024-08-04 01:44:24<SeP>2024-08-05 13:19:12<SeP>2024-08-07 00:54:00<SeP>2024-08-08 12:28:48<SeP>2024-08-10 00:03:36<SeP>2024-08-11 11:38:24<SeP>2024-08-12 23:13:12<SeP>2024-08-14 10:48:00<SeP>2024-08-15 22:22:48<SeP>2024-08-17 09:57:36<SeP>2024-08-18 21:32:24<SeP>2024-08-20 09:07:12<SeP>2024-08-21 20:42:00<SeP>2024-08-23 08:16:48<SeP>2024-08-24 19:51:36<SeP>2024-08-26 07:26:24<SeP>2024-08-27 19:01:12<SeP>2024-08-29 06:36:00<SeP>2024-08-30 18:10:48<SeP>2024-09-01 05:45:36<SeP>2024-09-02 17:20:24<SeP>2024-09-04 04:55:12<SeP>2024-09-05 16:30:00<SeP>2024-09-07 04:04:48<SeP>2024-09-08 15:39:36<SeP>2024-09-10 03:14:24<SeP>2024-09-11 14:49:12<SeP>2024-09-13 02:24:00<SeP>2024-09-14 13:58:48<SeP>2024-09-16 01:33:36<SeP>2024-09-17 13:08:24<SeP>2024-09-19 00:43:12<SeP>2024-09-20 12:18:00<SeP>2024-09-21 23:52:48<SeP>2024-09-23 11:27:36<SeP>2024-09-24 23:02:24<SeP>2024-09-26 10:37:12<SeP>2024-09-27 22:12:00<SeP>2024-09-29 09:46:48<SeP>2024-09-30 21:21:36<SeP>2024-10-02 08:56:24<SeP>2024-10-03 20:31:12<SeP>2024-10-05 08:06:00<SeP>2024-10-06 19:40:48<SeP>2024-10-08 07:15:36<SeP>2024-10-09 18:50:24<SeP>2024-10-11 06:25:12<SeP>2024-10-12 18:00:00<SeP>2024-10-14 05:34:48<SeP>2024-10-15 17:09:36<SeP>2024-10-17 04:44:24<SeP>2024-10-18 16:19:12<SeP>2024-10-20 03:54:00<SeP>2024-10-21 15:28:48<SeP>2024-10-23 03:03:36<SeP>2024-10-24 14:38:24<SeP>2024-10-26 02:13:12<SeP>2024-10-27 13:48:00<SeP>2024-10-29 01:22:48<SeP>2024-10-30 12:57:36<SeP>2024-11-01 00:32:24<SeP>2024-11-02 12:07:12<SeP>2024-11-03 22:42:00<SeP>2024-11-05 10:16:48<SeP>2024-11-06 21:51:36<SeP>2024-11-08 09:26:24<SeP>2024-11-09 21:01:12<SeP>2024-11-11 08:36:00<SeP>2024-11-12 20:10:48<SeP>2024-11-14 07:45:36<SeP>2024-11-15 19:20:24<SeP>2024-11-17 06:55:12<SeP>2024-11-18 18:30:00<SeP>2024-11-20 06:04:48<SeP>2024-11-21 17:39:36<SeP>2024-11-23 05:14:24<SeP>2024-11-24 16:49:12<SeP>2024-11-26 04:24:00<SeP>2024-11-27 15:58:48<SeP>2024-11-29 03:33:36<SeP>2024-11-30 15:08:24<SeP>2024-12-02 02:43:12<SeP>2024-12-03 14:18:00<SeP>2024-12-05 01:52:48<SeP>2024-12-06 13:27:36<SeP>2024-12-08 01:02:24<SeP>2024-12-09 12:37:12<SeP>2024-12-11 00:12:00<SeP>2024-12-12 11:46:48<SeP>2024-12-13 23:21:36<SeP>2024-12-15 10:56:24<SeP>2024-12-16 22:31:12<SeP>2024-12-18 10:06:00<SeP>2024-12-19 21:40:48<SeP>2024-12-21 09:15:36<SeP>2024-12-22 20:50:24<SeP>2024-12-24 08:25:12<SeP>2024-12-25 20:00:00<SeP>2024-12-27 07:34:48<SeP>2024-12-28 19:09:36<SeP>2024-12-30 06:44:24<SeP>2024-12-31 18:19:12<SeP>2025-01-02 05:54:00<SeP>2025-01-03 17:28:48<SeP>2025-01-05 05:03:36<SeP>2025-01-06 16:38:24<SeP>2025-01-08 04:13:12<SeP>2025-01-09 15:48:00<SeP>2025-01-11 03:22:48<SeP>2025-01-12 14:57:36<SeP>2025-01-14 02:32:24<SeP>2025-01-15 14:07:12<SeP>2025-01-17 01:42:00<SeP>2025-01-18 13:16:48<SeP>2025-01-20 00:51:36<SeP>2025-01-21 12:26:24<SeP>2025-01-23 00:01:12<SeP>2025-01-24 11:36:00<SeP>2025-01-25 23:10:48<SeP>2025-01-27 10:45:36<SeP>2025-01-28 22:20:24<SeP>2025-01-30 09:55:12<SeP>2025-01-31 21:30:00<SeP>2025-02-02 09:04:48<SeP>2025-02-03 20:39:36<SeP>2025-02-05 08:14:24<SeP>2025-02-06 19:49:12<SeP>2025-02-08 07:24:00<SeP>2025-02-09 18:58:48<SeP>2025-02-11 06:33:36<SeP>2025-02-12 18:08:24<SeP>2025-02-14 05:43:12<SeP>2025-02-15 17:18:00<SeP>2025-02-17 04:52:48<SeP>2025-02-18 16:27:36<SeP>2025-02-20 04:02:24<SeP>2025-02-21 15:37:12<SeP>2025-02-23 03:12:00<SeP>2025-02-24 14:46:48<SeP>2025-02-26 02:21:36<SeP>2025-02-27 13:56:24<SeP>2025-03-01 01:31:12<SeP>2025-03-02 13:06:00<SeP>2025-03-04 00:40:48<SeP>2025-03-05 12:15:36<SeP>2025-03-06 23:50:24<SeP>2025-03-08 11:25:12";
  const itemLabel       = "Attacks";
  const itemData        = "183<SeP>586<SeP>1400<SeP>656<SeP>222<SeP>236<SeP>7026<SeP>594<SeP>9402<SeP>563<SeP>401<SeP>1132<SeP>1297<SeP>241<SeP>309<SeP>306<SeP>161<SeP>750<SeP>349<SeP>8214<SeP>6620<SeP>6963<SeP>9092<SeP>2584<SeP>288<SeP>414<SeP>174<SeP>385<SeP>5925<SeP>87<SeP>387<SeP>154<SeP>510<SeP>520<SeP>10110<SeP>9157<SeP>10166<SeP>10175<SeP>5503<SeP>6030<SeP>8607<SeP>7913<SeP>9934<SeP>7939<SeP>7379<SeP>9443<SeP>8989<SeP>7454<SeP>8496<SeP>5395<SeP>9682<SeP>9902<SeP>6694<SeP>7696<SeP>8495<SeP>9473<SeP>18522<SeP>16516<SeP>9357<SeP>11862<SeP>6426<SeP>8568<SeP>8453<SeP>9001<SeP>8818<SeP>6112<SeP>6763<SeP>7872<SeP>6409<SeP>2531<SeP>6420<SeP>5357<SeP>6913<SeP>6664<SeP>8234<SeP>3196<SeP>6527<SeP>5740<SeP>6780<SeP>5823<SeP>6460<SeP>4428<SeP>7500<SeP>5027<SeP>5684<SeP>5948<SeP>8357<SeP>21621<SeP>24824<SeP>18855<SeP>9842<SeP>5663<SeP>8028<SeP>12410<SeP>6762<SeP>4003<SeP>5698<SeP>5101<SeP>4639<SeP>6507<SeP>7315<SeP>7601<SeP>6077<SeP>5460<SeP>4691<SeP>7979<SeP>8715<SeP>7704<SeP>7222<SeP>3886<SeP>8994<SeP>10048<SeP>6883<SeP>3244<SeP>5623<SeP>8058<SeP>6258<SeP>7010<SeP>9156<SeP>6740<SeP>1315<SeP>2490<SeP>1023<SeP>2527<SeP>2444<SeP>1077<SeP>766<SeP>1168<SeP>1332<SeP>1643<SeP>995<SeP>937<SeP>1185<SeP>1074<SeP>769<SeP>1472<SeP>1454<SeP>1186<SeP>975<SeP>2690<SeP>1458<SeP>8398<SeP>8531<SeP>9727<SeP>9193<SeP>6071<SeP>11150<SeP>7518<SeP>8468<SeP>9746<SeP>10599<SeP>11394<SeP>8633<SeP>11951<SeP>14247<SeP>8298<SeP>9577<SeP>4552<SeP>6368<SeP>9145<SeP>23443<SeP>6439<SeP>8289<SeP>10869<SeP>17344<SeP>6960<SeP>6062<SeP>6347<SeP>8010<SeP>26040<SeP>7542<SeP>9153<SeP>10965<SeP>4800<SeP>6585<SeP>6170<SeP>16153<SeP>4735<SeP>12785<SeP>8272<SeP>6786<SeP>8420<SeP>8036<SeP>2953<SeP>7049<SeP>4502<SeP>7124<SeP>7911<SeP>5879<SeP>6846<SeP>20730<SeP>6996<SeP>6044<SeP>6271<SeP>8262<SeP>11215<SeP>7090<SeP>4592<SeP>3296<SeP>6328<SeP>3366<SeP>4129<SeP>4161<SeP>632<SeP>112<SeP>634<SeP>613<SeP>580<SeP>753<SeP>362<SeP>665<SeP>1321<SeP>1257<SeP>3127<SeP>22922<SeP>609<SeP>4491<SeP>3829<SeP>2459<SeP>7445<SeP>2768<SeP>4240<SeP>3499<SeP>2951<SeP>3067<SeP>3180<SeP>4872<SeP>1477<SeP>3149<SeP>2474<SeP>2179<SeP>1933<SeP>1851<SeP>1161<SeP>1918<SeP>841<SeP>1281<SeP>1603<SeP>26513<SeP>1686<SeP>4081<SeP>4208<SeP>1965<SeP>3526<SeP>2890<SeP>1829<SeP>3740<SeP>2422<SeP>3772<SeP>2379<SeP>2986<SeP>3816<SeP>4597<SeP>5105<SeP>4981<SeP>4808<SeP>2678<SeP>2209<SeP>5397<SeP>3552<SeP>9587<SeP>5489<SeP>3667<SeP>2515<SeP>2090<SeP>4937<SeP>3540<SeP>3878<SeP>3203<SeP>2525<SeP>5902<SeP>3341<SeP>6361<SeP>3702<SeP>5931<SeP>5853<SeP>5177<SeP>5014<SeP>22337<SeP>4930<SeP>11973<SeP>1819<SeP>2541<SeP>4638<SeP>3755<SeP>5034<SeP>2955<SeP>5466<SeP>4613<SeP>4855<SeP>3154<SeP>4221<SeP>2005<SeP>1385<SeP>2188<SeP>3949<SeP>2336<SeP>3082<SeP>3444<SeP>4725<SeP>3601<SeP>3594<SeP>4186<SeP>3387<SeP>3399<SeP>6356<SeP>7648<SeP>6170<SeP>4763<SeP>4888<SeP>4513<SeP>3825<SeP>4081<SeP>4122<SeP>6666<SeP>5038<SeP>4904<SeP>2766<SeP>774<SeP>1485<SeP>1748<SeP>1230<SeP>1064<SeP>2093<SeP>1086<SeP>1655<SeP>3963<SeP>4956<SeP>6479<SeP>34209<SeP>4885<SeP>5963<SeP>22668<SeP>5493<SeP>5291<SeP>6260<SeP>4026<SeP>24723<SeP>5449<SeP>4890<SeP>4922<SeP>5879<SeP>18467<SeP>16929<SeP>4667<SeP>3304<SeP>4474<SeP>5578<SeP>5597<SeP>3033<SeP>3235<SeP>4144<SeP>5285<SeP>4966<SeP>13845<SeP>9227<SeP>5724<SeP>6454<SeP>2706<SeP>2772<SeP>3561<SeP>5001<SeP>3946<SeP>4000<SeP>2563<SeP>3682<SeP>2815<SeP>4591<SeP>5179<SeP>8497<SeP>10781<SeP>8517<SeP>9504<SeP>7812<SeP>7243<SeP>5261<SeP>4972<SeP>4272<SeP>25281<SeP>3591<SeP>3886<SeP>3568<SeP>11429<SeP>5215<SeP>4487<SeP>4390<SeP>4512<SeP>3521<SeP>6343<SeP>10109<SeP>6591<SeP>3897<SeP>3341<SeP>2822<SeP>2210<SeP>2377<SeP>2081<SeP>2187<SeP>2461<SeP>1977";
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:34:48<SeP>2023-07-28 23:09:36<SeP>2023-07-30 10:44:24<SeP>2023-07-31 22:19:12<SeP>2023-08-02 09:54:00<SeP>2023-08-03 21:28:48<SeP>2023-08-05 09:03:36<SeP>2023-08-06 20:38:24<SeP>2023-08-08 08:13:12<SeP>2023-08-09 19:48:00<SeP>2023-08-11 07:22:48<SeP>2023-08-12 18:57:36<SeP>2023-08-14 06:32:24<SeP>2023-08-15 18:07:12<SeP>2023-08-17 05:42:00<SeP>2023-08-18 17:16:48<SeP>2023-08-20 04:51:36<SeP>2023-08-21 16:26:24<SeP>2023-08-23 04:01:12<SeP>2023-08-24 15:36:00<SeP>2023-08-26 03:10:48<SeP>2023-08-27 14:45:36<SeP>2023-08-29 02:20:24<SeP>2023-08-30 13:55:12<SeP>2023-09-01 01:30:00<SeP>2023-09-02 13:04:48<SeP>2023-09-04 00:39:36<SeP>2023-09-05 12:14:24<SeP>2023-09-06 23:49:12<SeP>2023-09-08 11:24:00<SeP>2023-09-09 22:58:48<SeP>2023-09-11 10:33:36<SeP>2023-09-12 22:08:24<SeP>2023-09-14 09:43:12<SeP>2023-09-15 21:18:00<SeP>2023-09-17 08:52:48<SeP>2023-09-18 20:27:36<SeP>2023-09-20 08:02:24<SeP>2023-09-21 19:37:12<SeP>2023-09-23 07:12:00<SeP>2023-09-24 18:46:48<SeP>2023-09-26 06:21:36<SeP>2023-09-27 17:56:24<SeP>2023-09-29 05:31:12<SeP>2023-09-30 17:06:00<SeP>2023-10-02 04:40:48<SeP>2023-10-03 16:15:36<SeP>2023-10-05 03:50:24<SeP>2023-10-06 15:25:12<SeP>2023-10-08 03:00:00<SeP>2023-10-09 14:34:48<SeP>2023-10-11 02:09:36<SeP>2023-10-12 13:44:24<SeP>2023-10-14 01:19:12<SeP>2023-10-15 12:54:00<SeP>2023-10-17 00:28:48<SeP>2023-10-18 12:03:36<SeP>2023-10-19 23:38:24<SeP>2023-10-21 11:13:12<SeP>2023-10-22 22:48:00<SeP>2023-10-24 10:22:48<SeP>2023-10-25 21:57:36<SeP>2023-10-27 09:32:24<SeP>2023-10-28 21:07:12<SeP>2023-10-30 08:42:00<SeP>2023-10-31 20:16:48<SeP>2023-11-02 07:51:36<SeP>2023-11-03 19:26:24<SeP>2023-11-05 06:01:12<SeP>2023-11-06 17:36:00<SeP>2023-11-08 05:10:48<SeP>2023-11-09 16:45:36<SeP>2023-11-11 04:20:24<SeP>2023-11-12 15:55:12<SeP>2023-11-14 03:30:00<SeP>2023-11-15 15:04:48<SeP>2023-11-17 02:39:36<SeP>2023-11-18 14:14:24<SeP>2023-11-20 01:49:12<SeP>2023-11-21 13:24:00<SeP>2023-11-23 00:58:48<SeP>2023-11-24 12:33:36<SeP>2023-11-26 00:08:24<SeP>2023-11-27 11:43:12<SeP>2023-11-28 23:18:00<SeP>2023-11-30 10:52:48<SeP>2023-12-01 22:27:36<SeP>2023-12-03 10:02:24<SeP>2023-12-04 21:37:12<SeP>2023-12-06 09:12:00<SeP>2023-12-07 20:46:48<SeP>2023-12-09 08:21:36<SeP>2023-12-10 19:56:24<SeP>2023-12-12 07:31:12<SeP>2023-12-13 19:06:00<SeP>2023-12-15 06:40:48<SeP>2023-12-16 18:15:36<SeP>2023-12-18 05:50:24<SeP>2023-12-19 17:25:12<SeP>2023-12-21 05:00:00<SeP>2023-12-22 16:34:48<SeP>2023-12-24 04:09:36<SeP>2023-12-25 15:44:24<SeP>2023-12-27 03:19:12<SeP>2023-12-28 14:54:00<SeP>2023-12-30 02:28:48<SeP>2023-12-31 14:03:36<SeP>2024-01-02 01:38:24<SeP>2024-01-03 13:13:12<SeP>2024-01-05 00:48:00<SeP>2024-01-06 12:22:48<SeP>2024-01-07 23:57:36<SeP>2024-01-09 11:32:24<SeP>2024-01-10 23:07:12<SeP>2024-01-12 10:42:00<SeP>2024-01-13 22:16:48<SeP>2024-01-15 09:51:36<SeP>2024-01-16 21:26:24<SeP>2024-01-18 09:01:12<SeP>2024-01-19 20:36:00<SeP>2024-01-21 08:10:48<SeP>2024-01-22 19:45:36<SeP>2024-01-24 07:20:24<SeP>2024-01-25 18:55:12<SeP>2024-01-27 06:30:00<SeP>2024-01-28 18:04:48<SeP>2024-01-30 05:39:36<SeP>2024-01-31 17:14:24<SeP>2024-02-02 04:49:12<SeP>2024-02-03 16:24:00<SeP>2024-02-05 03:58:48<SeP>2024-02-06 15:33:36<SeP>2024-02-08 03:08:24<SeP>2024-02-09 14:43:12<SeP>2024-02-11 02:18:00<SeP>2024-02-12 13:52:48<SeP>2024-02-14 01:27:36<SeP>2024-02-15 13:02:24<SeP>2024-02-17 00:37:12<SeP>2024-02-18 12:12:00<SeP>2024-02-19 23:46:48<SeP>2024-02-21 11:21:36<SeP>2024-02-22 22:56:24<SeP>2024-02-24 10:31:12<SeP>2024-02-25 22:06:00<SeP>2024-02-27 09:40:48<SeP>2024-02-28 21:15:36<SeP>2024-03-01 08:50:24<SeP>2024-03-02 20:25:12<SeP>2024-03-04 08:00:00<SeP>2024-03-05 19:34:48<SeP>2024-03-07 07:09:36<SeP>2024-03-08 18:44:24<SeP>2024-03-10 07:19:12<SeP>2024-03-11 18:54:00<SeP>2024-03-13 06:28:48<SeP>2024-03-14 18:03:36<SeP>2024-03-16 05:38:24<SeP>2024-03-17 17:13:12<SeP>2024-03-19 04:48:00<SeP>2024-03-20 16:22:48<SeP>2024-03-22 03:57:36<SeP>2024-03-23 15:32:24<SeP>2024-03-25 03:07:12<SeP>2024-03-26 14:42:00<SeP>2024-03-28 02:16:48<SeP>2024-03-29 13:51:36<SeP>2024-03-31 01:26:24<SeP>2024-04-01 13:01:12<SeP>2024-04-03 00:36:00<SeP>2024-04-04 12:10:48<SeP>2024-04-05 23:45:36<SeP>2024-04-07 11:20:24<SeP>2024-04-08 22:55:12<SeP>2024-04-10 10:30:00<SeP>2024-04-11 22:04:48<SeP>2024-04-13 09:39:36<SeP>2024-04-14 21:14:24<SeP>2024-04-16 08:49:12<SeP>2024-04-17 20:24:00<SeP>2024-04-19 07:58:48<SeP>2024-04-20 19:33:36<SeP>2024-04-22 07:08:24<SeP>2024-04-23 18:43:12<SeP>2024-04-25 06:18:00<SeP>2024-04-26 17:52:48<SeP>2024-04-28 05:27:36<SeP>2024-04-29 17:02:24<SeP>2024-05-01 04:37:12<SeP>2024-05-02 16:12:00<SeP>2024-05-04 03:46:48<SeP>2024-05-05 15:21:36<SeP>2024-05-07 02:56:24<SeP>2024-05-08 14:31:12<SeP>2024-05-10 02:06:00<SeP>2024-05-11 13:40:48<SeP>2024-05-13 01:15:36<SeP>2024-05-14 12:50:24<SeP>2024-05-16 00:25:12<SeP>2024-05-17 12:00:00<SeP>2024-05-18 23:34:48<SeP>2024-05-20 11:09:36<SeP>2024-05-21 22:44:24<SeP>2024-05-23 10:19:12<SeP>2024-05-24 21:54:00<SeP>2024-05-26 09:28:48<SeP>2024-05-27 21:03:36<SeP>2024-05-29 08:38:24<SeP>2024-05-30 20:13:12<SeP>2024-06-01 07:48:00<SeP>2024-06-02 19:22:48<SeP>2024-06-04 06:57:36<SeP>2024-06-05 18:32:24<SeP>2024-06-07 06:07:12<SeP>2024-06-08 17:42:00<SeP>2024-06-10 05:16:48<SeP>2024-06-11 16:51:36<SeP>2024-06-13 04:26:24<SeP>2024-06-14 16:01:12<SeP>2024-06-16 03:36:00<SeP>2024-06-17 15:10:48<SeP>2024-06-19 02:45:36<SeP>2024-06-20 14:20:24<SeP>2024-06-22 01:55:12<SeP>2024-06-23 13:30:00<SeP>2024-06-25 01:04:48<SeP>2024-06-26 12:39:36<SeP>2024-06-28 00:14:24<SeP>2024-06-29 11:49:12<SeP>2024-06-30 23:24:00<SeP>2024-07-02 10:58:48<SeP>2024-07-03 22:33:36<SeP>2024-07-05 10:08:24<SeP>2024-07-06 21:43:12<SeP>2024-07-08 09:18:00<SeP>2024-07-09 20:52:48<SeP>2024-07-11 08:27:36<SeP>2024-07-12 20:02:24<SeP>2024-07-14 07:37:12<SeP>2024-07-15 19:12:00<SeP>2024-07-17 06:46:48<SeP>2024-07-18 18:21:36<SeP>2024-07-20 05:56:24<SeP>2024-07-21 17:31:12<SeP>2024-07-23 05:06:00<SeP>2024-07-24 16:40:48<SeP>2024-07-26 04:15:36<SeP>2024-07-27 15:50:24<SeP>2024-07-29 03:25:12<SeP>2024-07-30 15:00:00<SeP>2024-08-01 02:34:48<SeP>2024-08-02 14:09:36<SeP>2024-08-04 01:44:24<SeP>2024-08-05 13:19:12<SeP>2024-08-07 00:54:00<SeP>2024-08-08 12:28:48<SeP>2024-08-10 00:03:36<SeP>2024-08-11 11:38:24<SeP>2024-08-12 23:13:12<SeP>2024-08-14 10:48:00<SeP>2024-08-15 22:22:48<SeP>2024-08-17 09:57:36<SeP>2024-08-18 21:32:24<SeP>2024-08-20 09:07:12<SeP>2024-08-21 20:42:00<SeP>2024-08-23 08:16:48<SeP>2024-08-24 19:51:36<SeP>2024-08-26 07:26:24<SeP>2024-08-27 19:01:12<SeP>2024-08-29 06:36:00<SeP>2024-08-30 18:10:48<SeP>2024-09-01 05:45:36<SeP>2024-09-02 17:20:24<SeP>2024-09-04 04:55:12<SeP>2024-09-05 16:30:00<SeP>2024-09-07 04:04:48<SeP>2024-09-08 15:39:36<SeP>2024-09-10 03:14:24<SeP>2024-09-11 14:49:12<SeP>2024-09-13 02:24:00<SeP>2024-09-14 13:58:48<SeP>2024-09-16 01:33:36<SeP>2024-09-17 13:08:24<SeP>2024-09-19 00:43:12<SeP>2024-09-20 12:18:00<SeP>2024-09-21 23:52:48<SeP>2024-09-23 11:27:36<SeP>2024-09-24 23:02:24<SeP>2024-09-26 10:37:12<SeP>2024-09-27 22:12:00<SeP>2024-09-29 09:46:48<SeP>2024-09-30 21:21:36<SeP>2024-10-02 08:56:24<SeP>2024-10-03 20:31:12<SeP>2024-10-05 08:06:00<SeP>2024-10-06 19:40:48<SeP>2024-10-08 07:15:36<SeP>2024-10-09 18:50:24<SeP>2024-10-11 06:25:12<SeP>2024-10-12 18:00:00<SeP>2024-10-14 05:34:48<SeP>2024-10-15 17:09:36<SeP>2024-10-17 04:44:24<SeP>2024-10-18 16:19:12<SeP>2024-10-20 03:54:00<SeP>2024-10-21 15:28:48<SeP>2024-10-23 03:03:36<SeP>2024-10-24 14:38:24<SeP>2024-10-26 02:13:12<SeP>2024-10-27 13:48:00<SeP>2024-10-29 01:22:48<SeP>2024-10-30 12:57:36<SeP>2024-11-01 00:32:24<SeP>2024-11-02 12:07:12<SeP>2024-11-03 22:42:00<SeP>2024-11-05 10:16:48<SeP>2024-11-06 21:51:36<SeP>2024-11-08 09:26:24<SeP>2024-11-09 21:01:12<SeP>2024-11-11 08:36:00<SeP>2024-11-12 20:10:48<SeP>2024-11-14 07:45:36<SeP>2024-11-15 19:20:24<SeP>2024-11-17 06:55:12<SeP>2024-11-18 18:30:00<SeP>2024-11-20 06:04:48<SeP>2024-11-21 17:39:36<SeP>2024-11-23 05:14:24<SeP>2024-11-24 16:49:12<SeP>2024-11-26 04:24:00<SeP>2024-11-27 15:58:48<SeP>2024-11-29 03:33:36<SeP>2024-11-30 15:08:24<SeP>2024-12-02 02:43:12<SeP>2024-12-03 14:18:00<SeP>2024-12-05 01:52:48<SeP>2024-12-06 13:27:36<SeP>2024-12-08 01:02:24<SeP>2024-12-09 12:37:12<SeP>2024-12-11 00:12:00<SeP>2024-12-12 11:46:48<SeP>2024-12-13 23:21:36<SeP>2024-12-15 10:56:24<SeP>2024-12-16 22:31:12<SeP>2024-12-18 10:06:00<SeP>2024-12-19 21:40:48<SeP>2024-12-21 09:15:36<SeP>2024-12-22 20:50:24<SeP>2024-12-24 08:25:12<SeP>2024-12-25 20:00:00<SeP>2024-12-27 07:34:48<SeP>2024-12-28 19:09:36<SeP>2024-12-30 06:44:24<SeP>2024-12-31 18:19:12<SeP>2025-01-02 05:54:00<SeP>2025-01-03 17:28:48<SeP>2025-01-05 05:03:36<SeP>2025-01-06 16:38:24<SeP>2025-01-08 04:13:12<SeP>2025-01-09 15:48:00<SeP>2025-01-11 03:22:48<SeP>2025-01-12 14:57:36<SeP>2025-01-14 02:32:24<SeP>2025-01-15 14:07:12<SeP>2025-01-17 01:42:00<SeP>2025-01-18 13:16:48<SeP>2025-01-20 00:51:36<SeP>2025-01-21 12:26:24<SeP>2025-01-23 00:01:12<SeP>2025-01-24 11:36:00<SeP>2025-01-25 23:10:48<SeP>2025-01-27 10:45:36<SeP>2025-01-28 22:20:24<SeP>2025-01-30 09:55:12<SeP>2025-01-31 21:30:00<SeP>2025-02-02 09:04:48<SeP>2025-02-03 20:39:36<SeP>2025-02-05 08:14:24<SeP>2025-02-06 19:49:12<SeP>2025-02-08 07:24:00<SeP>2025-02-09 18:58:48<SeP>2025-02-11 06:33:36<SeP>2025-02-12 18:08:24<SeP>2025-02-14 05:43:12<SeP>2025-02-15 17:18:00<SeP>2025-02-17 04:52:48<SeP>2025-02-18 16:27:36<SeP>2025-02-20 04:02:24<SeP>2025-02-21 15:37:12<SeP>2025-02-23 03:12:00<SeP>2025-02-24 14:46:48<SeP>2025-02-26 02:21:36<SeP>2025-02-27 13:56:24<SeP>2025-03-01 01:31:12<SeP>2025-03-02 13:06:00<SeP>2025-03-04 00:40:48<SeP>2025-03-05 12:15:36<SeP>2025-03-06 23:50:24<SeP>2025-03-08 11:25:12";
  const item1Label       = "Escaneos";
  const item1Data        = "778<SeP>1517<SeP>1374<SeP>1508<SeP>1250<SeP>1739<SeP>928<SeP>994<SeP>1159<SeP>3381<SeP>3244<SeP>1198<SeP>3313<SeP>880<SeP>783<SeP>890<SeP>1431<SeP>2933<SeP>1784<SeP>1365<SeP>1154<SeP>893<SeP>1093<SeP>1241<SeP>922<SeP>761<SeP>954<SeP>3684<SeP>936<SeP>825<SeP>1344<SeP>1264<SeP>887<SeP>1745<SeP>2498<SeP>2916<SeP>1784<SeP>1886<SeP>1324<SeP>1319<SeP>1805<SeP>1788<SeP>2211<SeP>1616<SeP>1674<SeP>1629<SeP>1739<SeP>1701<SeP>1744<SeP>1973<SeP>1701<SeP>1669<SeP>3138<SeP>1756<SeP>1438<SeP>1803<SeP>2118<SeP>2340<SeP>1434<SeP>3798<SeP>1420<SeP>1531<SeP>1607<SeP>1186<SeP>1923<SeP>1782<SeP>1250<SeP>1350<SeP>1495<SeP>1216<SeP>2287<SeP>1231<SeP>1184<SeP>1312<SeP>5644<SeP>3796<SeP>1398<SeP>1338<SeP>1779<SeP>1965<SeP>1142<SeP>6546<SeP>1644<SeP>1663<SeP>1023<SeP>1156<SeP>3322<SeP>1276<SeP>946<SeP>1014<SeP>1099<SeP>1218<SeP>2860<SeP>1160<SeP>1544<SeP>2872<SeP>6519<SeP>1297<SeP>967<SeP>960<SeP>903<SeP>991<SeP>996<SeP>1036<SeP>1696<SeP>3972<SeP>1783<SeP>1229<SeP>1400<SeP>612<SeP>1464<SeP>1316<SeP>1155<SeP>942<SeP>2319<SeP>1066<SeP>1210<SeP>1099<SeP>926<SeP>1188<SeP>662<SeP>927<SeP>858<SeP>774<SeP>1122<SeP>869<SeP>911<SeP>825<SeP>880<SeP>901<SeP>717<SeP>768<SeP>826<SeP>984<SeP>905<SeP>808<SeP>963<SeP>640<SeP>831<SeP>1135<SeP>732<SeP>933<SeP>958<SeP>910<SeP>1149<SeP>984<SeP>755<SeP>543<SeP>955<SeP>850<SeP>1308<SeP>886<SeP>1073<SeP>1187<SeP>1240<SeP>957<SeP>838<SeP>983<SeP>912<SeP>883<SeP>1082<SeP>841<SeP>948<SeP>952<SeP>1100<SeP>936<SeP>1124<SeP>930<SeP>1090<SeP>1106<SeP>943<SeP>907<SeP>2239<SeP>1260<SeP>1117<SeP>1074<SeP>1057<SeP>1045<SeP>1044<SeP>859<SeP>638<SeP>941<SeP>1176<SeP>894<SeP>980<SeP>1082<SeP>1356<SeP>1091<SeP>1222<SeP>1269<SeP>1309<SeP>1155<SeP>1499<SeP>1224<SeP>1548<SeP>2127<SeP>1339<SeP>829<SeP>899<SeP>1110<SeP>1086<SeP>661<SeP>833<SeP>883<SeP>1000<SeP>793<SeP>5334<SeP>3427<SeP>2013<SeP>1337<SeP>1074<SeP>837<SeP>1076<SeP>874<SeP>1028<SeP>1087<SeP>1106<SeP>1050<SeP>1488<SeP>1939<SeP>1071<SeP>1295<SeP>1284<SeP>1184<SeP>1161<SeP>1032<SeP>1022<SeP>1080<SeP>1123<SeP>1061<SeP>1166<SeP>955<SeP>1152<SeP>833<SeP>1375<SeP>1163<SeP>1142<SeP>1193<SeP>1381<SeP>1218<SeP>1595<SeP>1209<SeP>1156<SeP>1245<SeP>1103<SeP>2001<SeP>1278<SeP>1855<SeP>1664<SeP>1457<SeP>2021<SeP>1693<SeP>1188<SeP>1185<SeP>1336<SeP>1081<SeP>1720<SeP>1200<SeP>1251<SeP>1777<SeP>1529<SeP>1410<SeP>1603<SeP>1207<SeP>1438<SeP>1203<SeP>1097<SeP>1286<SeP>1185<SeP>1257<SeP>1308<SeP>1169<SeP>1495<SeP>1883<SeP>1346<SeP>1386<SeP>1621<SeP>1363<SeP>1128<SeP>965<SeP>1058<SeP>952<SeP>803<SeP>1047<SeP>1865<SeP>1126<SeP>1038<SeP>1162<SeP>979<SeP>800<SeP>1105<SeP>1396<SeP>798<SeP>980<SeP>937<SeP>1336<SeP>1624<SeP>1481<SeP>1057<SeP>1157<SeP>996<SeP>1873<SeP>1085<SeP>1167<SeP>1084<SeP>1292<SeP>1274<SeP>998<SeP>1026<SeP>1227<SeP>1014<SeP>957<SeP>823<SeP>1393<SeP>1320<SeP>1644<SeP>1629<SeP>1356<SeP>963<SeP>1127<SeP>1139<SeP>1149<SeP>1115<SeP>1204<SeP>1026<SeP>1019<SeP>1279<SeP>1634<SeP>1286<SeP>1678<SeP>1287<SeP>1724<SeP>1377<SeP>1285<SeP>1515<SeP>1454<SeP>1394<SeP>1276<SeP>1737<SeP>1423<SeP>1627<SeP>1422<SeP>1416<SeP>1392<SeP>1341<SeP>1258<SeP>1393<SeP>1578<SeP>1527<SeP>1205<SeP>1373<SeP>1217<SeP>1477<SeP>1300<SeP>1150<SeP>1700<SeP>1914<SeP>1411<SeP>1026<SeP>940<SeP>1545<SeP>1734<SeP>1313<SeP>1394<SeP>1026<SeP>1418<SeP>1356<SeP>1400<SeP>1430<SeP>1461<SeP>1691<SeP>1571<SeP>1496<SeP>1615<SeP>1444<SeP>1320<SeP>1736<SeP>1465<SeP>1382<SeP>1140<SeP>1839<SeP>1695<SeP>1841<SeP>1837<SeP>1844<SeP>1625<SeP>1635<SeP>1525<SeP>1594<SeP>1515<SeP>1745<SeP>1781<SeP>1730<SeP>1441<SeP>1506<SeP>1499<SeP>1461<SeP>1588<SeP>2365<SeP>1115";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "183<SeP>586<SeP>1400<SeP>656<SeP>222<SeP>236<SeP>7026<SeP>594<SeP>9402<SeP>563<SeP>401<SeP>1132<SeP>1297<SeP>241<SeP>309<SeP>306<SeP>161<SeP>750<SeP>349<SeP>8214<SeP>6620<SeP>6963<SeP>9092<SeP>2584<SeP>288<SeP>414<SeP>174<SeP>385<SeP>5925<SeP>87<SeP>387<SeP>154<SeP>510<SeP>520<SeP>10110<SeP>9157<SeP>10166<SeP>10175<SeP>5503<SeP>6030<SeP>8607<SeP>7913<SeP>9934<SeP>7939<SeP>7379<SeP>9443<SeP>8989<SeP>7454<SeP>8496<SeP>5395<SeP>9682<SeP>9902<SeP>6694<SeP>7696<SeP>8495<SeP>9473<SeP>18522<SeP>16516<SeP>9357<SeP>11862<SeP>6426<SeP>8568<SeP>8453<SeP>9001<SeP>8818<SeP>6112<SeP>6763<SeP>7872<SeP>6409<SeP>2531<SeP>6420<SeP>5357<SeP>6913<SeP>6664<SeP>8234<SeP>3196<SeP>6527<SeP>5740<SeP>6780<SeP>5823<SeP>6460<SeP>4428<SeP>7500<SeP>5027<SeP>5684<SeP>5948<SeP>8357<SeP>21621<SeP>24824<SeP>18855<SeP>9842<SeP>5663<SeP>8028<SeP>12410<SeP>6762<SeP>4003<SeP>5698<SeP>5101<SeP>4639<SeP>6507<SeP>7315<SeP>7601<SeP>6077<SeP>5460<SeP>4691<SeP>7979<SeP>8715<SeP>7704<SeP>7222<SeP>3886<SeP>8994<SeP>10048<SeP>6883<SeP>3244<SeP>5623<SeP>8058<SeP>6258<SeP>7010<SeP>9156<SeP>6740<SeP>1315<SeP>2490<SeP>1023<SeP>2527<SeP>2444<SeP>1077<SeP>766<SeP>1168<SeP>1332<SeP>1643<SeP>995<SeP>937<SeP>1185<SeP>1074<SeP>769<SeP>1472<SeP>1454<SeP>1186<SeP>975<SeP>2690<SeP>1458<SeP>8398<SeP>8531<SeP>9727<SeP>9193<SeP>6071<SeP>11150<SeP>7518<SeP>8468<SeP>9746<SeP>10599<SeP>11394<SeP>8633<SeP>11951<SeP>14247<SeP>8298<SeP>9577<SeP>4552<SeP>6368<SeP>9145<SeP>23443<SeP>6439<SeP>8289<SeP>10869<SeP>17344<SeP>6960<SeP>6062<SeP>6347<SeP>8010<SeP>26040<SeP>7542<SeP>9153<SeP>10965<SeP>4800<SeP>6585<SeP>6170<SeP>16153<SeP>4735<SeP>12785<SeP>8272<SeP>6786<SeP>8420<SeP>8036<SeP>2953<SeP>7049<SeP>4502<SeP>7124<SeP>7911<SeP>5879<SeP>6846<SeP>20730<SeP>6996<SeP>6044<SeP>6271<SeP>8262<SeP>11215<SeP>7090<SeP>4592<SeP>3296<SeP>6328<SeP>3366<SeP>4129<SeP>4161<SeP>632<SeP>112<SeP>634<SeP>613<SeP>580<SeP>753<SeP>362<SeP>665<SeP>1321<SeP>1257<SeP>3127<SeP>22922<SeP>609<SeP>4491<SeP>3829<SeP>2459<SeP>7445<SeP>2768<SeP>4240<SeP>3499<SeP>2951<SeP>3067<SeP>3180<SeP>4872<SeP>1477<SeP>3149<SeP>2474<SeP>2179<SeP>1933<SeP>1851<SeP>1161<SeP>1918<SeP>841<SeP>1281<SeP>1603<SeP>26513<SeP>1686<SeP>4081<SeP>4208<SeP>1965<SeP>3526<SeP>2890<SeP>1829<SeP>3740<SeP>2422<SeP>3772<SeP>2379<SeP>2986<SeP>3816<SeP>4597<SeP>5105<SeP>4981<SeP>4808<SeP>2678<SeP>2209<SeP>5397<SeP>3552<SeP>9587<SeP>5489<SeP>3667<SeP>2515<SeP>2090<SeP>4937<SeP>3540<SeP>3878<SeP>3203<SeP>2525<SeP>5902<SeP>3341<SeP>6361<SeP>3702<SeP>5931<SeP>5853<SeP>5177<SeP>5014<SeP>22337<SeP>4930<SeP>11973<SeP>1819<SeP>2541<SeP>4638<SeP>3755<SeP>5034<SeP>2955<SeP>5466<SeP>4613<SeP>4855<SeP>3154<SeP>4221<SeP>2005<SeP>1385<SeP>2188<SeP>3949<SeP>2336<SeP>3082<SeP>3444<SeP>4725<SeP>3601<SeP>3594<SeP>4186<SeP>3387<SeP>3399<SeP>6356<SeP>7648<SeP>6170<SeP>4763<SeP>4888<SeP>4513<SeP>3825<SeP>4081<SeP>4122<SeP>6666<SeP>5038<SeP>4904<SeP>2766<SeP>774<SeP>1485<SeP>1748<SeP>1230<SeP>1064<SeP>2093<SeP>1086<SeP>1655<SeP>3963<SeP>4956<SeP>6479<SeP>34209<SeP>4885<SeP>5963<SeP>22668<SeP>5493<SeP>5291<SeP>6260<SeP>4026<SeP>24723<SeP>5449<SeP>4890<SeP>4922<SeP>5879<SeP>18467<SeP>16929<SeP>4667<SeP>3304<SeP>4474<SeP>5578<SeP>5597<SeP>3033<SeP>3235<SeP>4144<SeP>5285<SeP>4966<SeP>13845<SeP>9227<SeP>5724<SeP>6454<SeP>2706<SeP>2772<SeP>3561<SeP>5001<SeP>3946<SeP>4000<SeP>2563<SeP>3682<SeP>2815<SeP>4591<SeP>5179<SeP>8497<SeP>10781<SeP>8517<SeP>9504<SeP>7812<SeP>7243<SeP>5261<SeP>4972<SeP>4272<SeP>25281<SeP>3591<SeP>3886<SeP>3568<SeP>11429<SeP>5215<SeP>4487<SeP>4390<SeP>4512<SeP>3521<SeP>6343<SeP>10109<SeP>6591<SeP>3897<SeP>3341<SeP>2822<SeP>2210<SeP>2377<SeP>2081<SeP>2187<SeP>2461<SeP>1977";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:34:48<SeP>2023-07-28 23:09:36<SeP>2023-07-30 10:44:24<SeP>2023-07-31 22:19:12<SeP>2023-08-02 09:54:00<SeP>2023-08-03 21:28:48<SeP>2023-08-05 09:03:36<SeP>2023-08-06 20:38:24<SeP>2023-08-08 08:13:12<SeP>2023-08-09 19:48:00<SeP>2023-08-11 07:22:48<SeP>2023-08-12 18:57:36<SeP>2023-08-14 06:32:24<SeP>2023-08-15 18:07:12<SeP>2023-08-17 05:42:00<SeP>2023-08-18 17:16:48<SeP>2023-08-20 04:51:36<SeP>2023-08-21 16:26:24<SeP>2023-08-23 04:01:12<SeP>2023-08-24 15:36:00<SeP>2023-08-26 03:10:48<SeP>2023-08-27 14:45:36<SeP>2023-08-29 02:20:24<SeP>2023-08-30 13:55:12<SeP>2023-09-01 01:30:00<SeP>2023-09-02 13:04:48<SeP>2023-09-04 00:39:36<SeP>2023-09-05 12:14:24<SeP>2023-09-06 23:49:12<SeP>2023-09-08 11:24:00<SeP>2023-09-09 22:58:48<SeP>2023-09-11 10:33:36<SeP>2023-09-12 22:08:24<SeP>2023-09-14 09:43:12<SeP>2023-09-15 21:18:00<SeP>2023-09-17 08:52:48<SeP>2023-09-18 20:27:36<SeP>2023-09-20 08:02:24<SeP>2023-09-21 19:37:12<SeP>2023-09-23 07:12:00<SeP>2023-09-24 18:46:48<SeP>2023-09-26 06:21:36<SeP>2023-09-27 17:56:24<SeP>2023-09-29 05:31:12<SeP>2023-09-30 17:06:00<SeP>2023-10-02 04:40:48<SeP>2023-10-03 16:15:36<SeP>2023-10-05 03:50:24<SeP>2023-10-06 15:25:12<SeP>2023-10-08 03:00:00<SeP>2023-10-09 14:34:48<SeP>2023-10-11 02:09:36<SeP>2023-10-12 13:44:24<SeP>2023-10-14 01:19:12<SeP>2023-10-15 12:54:00<SeP>2023-10-17 00:28:48<SeP>2023-10-18 12:03:36<SeP>2023-10-19 23:38:24<SeP>2023-10-21 11:13:12<SeP>2023-10-22 22:48:00<SeP>2023-10-24 10:22:48<SeP>2023-10-25 21:57:36<SeP>2023-10-27 09:32:24<SeP>2023-10-28 21:07:12<SeP>2023-10-30 08:42:00<SeP>2023-10-31 20:16:48<SeP>2023-11-02 07:51:36<SeP>2023-11-03 19:26:24<SeP>2023-11-05 06:01:12<SeP>2023-11-06 17:36:00<SeP>2023-11-08 05:10:48<SeP>2023-11-09 16:45:36<SeP>2023-11-11 04:20:24<SeP>2023-11-12 15:55:12<SeP>2023-11-14 03:30:00<SeP>2023-11-15 15:04:48<SeP>2023-11-17 02:39:36<SeP>2023-11-18 14:14:24<SeP>2023-11-20 01:49:12<SeP>2023-11-21 13:24:00<SeP>2023-11-23 00:58:48<SeP>2023-11-24 12:33:36<SeP>2023-11-26 00:08:24<SeP>2023-11-27 11:43:12<SeP>2023-11-28 23:18:00<SeP>2023-11-30 10:52:48<SeP>2023-12-01 22:27:36<SeP>2023-12-03 10:02:24<SeP>2023-12-04 21:37:12<SeP>2023-12-06 09:12:00<SeP>2023-12-07 20:46:48<SeP>2023-12-09 08:21:36<SeP>2023-12-10 19:56:24<SeP>2023-12-12 07:31:12<SeP>2023-12-13 19:06:00<SeP>2023-12-15 06:40:48<SeP>2023-12-16 18:15:36<SeP>2023-12-18 05:50:24<SeP>2023-12-19 17:25:12<SeP>2023-12-21 05:00:00<SeP>2023-12-22 16:34:48<SeP>2023-12-24 04:09:36<SeP>2023-12-25 15:44:24<SeP>2023-12-27 03:19:12<SeP>2023-12-28 14:54:00<SeP>2023-12-30 02:28:48<SeP>2023-12-31 14:03:36<SeP>2024-01-02 01:38:24<SeP>2024-01-03 13:13:12<SeP>2024-01-05 00:48:00<SeP>2024-01-06 12:22:48<SeP>2024-01-07 23:57:36<SeP>2024-01-09 11:32:24<SeP>2024-01-10 23:07:12<SeP>2024-01-12 10:42:00<SeP>2024-01-13 22:16:48<SeP>2024-01-15 09:51:36<SeP>2024-01-16 21:26:24<SeP>2024-01-18 09:01:12<SeP>2024-01-19 20:36:00<SeP>2024-01-21 08:10:48<SeP>2024-01-22 19:45:36<SeP>2024-01-24 07:20:24<SeP>2024-01-25 18:55:12<SeP>2024-01-27 06:30:00<SeP>2024-01-28 18:04:48<SeP>2024-01-30 05:39:36<SeP>2024-01-31 17:14:24<SeP>2024-02-02 04:49:12<SeP>2024-02-03 16:24:00<SeP>2024-02-05 03:58:48<SeP>2024-02-06 15:33:36<SeP>2024-02-08 03:08:24<SeP>2024-02-09 14:43:12<SeP>2024-02-11 02:18:00<SeP>2024-02-12 13:52:48<SeP>2024-02-14 01:27:36<SeP>2024-02-15 13:02:24<SeP>2024-02-17 00:37:12<SeP>2024-02-18 12:12:00<SeP>2024-02-19 23:46:48<SeP>2024-02-21 11:21:36<SeP>2024-02-22 22:56:24<SeP>2024-02-24 10:31:12<SeP>2024-02-25 22:06:00<SeP>2024-02-27 09:40:48<SeP>2024-02-28 21:15:36<SeP>2024-03-01 08:50:24<SeP>2024-03-02 20:25:12<SeP>2024-03-04 08:00:00<SeP>2024-03-05 19:34:48<SeP>2024-03-07 07:09:36<SeP>2024-03-08 18:44:24<SeP>2024-03-10 07:19:12<SeP>2024-03-11 18:54:00<SeP>2024-03-13 06:28:48<SeP>2024-03-14 18:03:36<SeP>2024-03-16 05:38:24<SeP>2024-03-17 17:13:12<SeP>2024-03-19 04:48:00<SeP>2024-03-20 16:22:48<SeP>2024-03-22 03:57:36<SeP>2024-03-23 15:32:24<SeP>2024-03-25 03:07:12<SeP>2024-03-26 14:42:00<SeP>2024-03-28 02:16:48<SeP>2024-03-29 13:51:36<SeP>2024-03-31 01:26:24<SeP>2024-04-01 13:01:12<SeP>2024-04-03 00:36:00<SeP>2024-04-04 12:10:48<SeP>2024-04-05 23:45:36<SeP>2024-04-07 11:20:24<SeP>2024-04-08 22:55:12<SeP>2024-04-10 10:30:00<SeP>2024-04-11 22:04:48<SeP>2024-04-13 09:39:36<SeP>2024-04-14 21:14:24<SeP>2024-04-16 08:49:12<SeP>2024-04-17 20:24:00<SeP>2024-04-19 07:58:48<SeP>2024-04-20 19:33:36<SeP>2024-04-22 07:08:24<SeP>2024-04-23 18:43:12<SeP>2024-04-25 06:18:00<SeP>2024-04-26 17:52:48<SeP>2024-04-28 05:27:36<SeP>2024-04-29 17:02:24<SeP>2024-05-01 04:37:12<SeP>2024-05-02 16:12:00<SeP>2024-05-04 03:46:48<SeP>2024-05-05 15:21:36<SeP>2024-05-07 02:56:24<SeP>2024-05-08 14:31:12<SeP>2024-05-10 02:06:00<SeP>2024-05-11 13:40:48<SeP>2024-05-13 01:15:36<SeP>2024-05-14 12:50:24<SeP>2024-05-16 00:25:12<SeP>2024-05-17 12:00:00<SeP>2024-05-18 23:34:48<SeP>2024-05-20 11:09:36<SeP>2024-05-21 22:44:24<SeP>2024-05-23 10:19:12<SeP>2024-05-24 21:54:00<SeP>2024-05-26 09:28:48<SeP>2024-05-27 21:03:36<SeP>2024-05-29 08:38:24<SeP>2024-05-30 20:13:12<SeP>2024-06-01 07:48:00<SeP>2024-06-02 19:22:48<SeP>2024-06-04 06:57:36<SeP>2024-06-05 18:32:24<SeP>2024-06-07 06:07:12<SeP>2024-06-08 17:42:00<SeP>2024-06-10 05:16:48<SeP>2024-06-11 16:51:36<SeP>2024-06-13 04:26:24<SeP>2024-06-14 16:01:12<SeP>2024-06-16 03:36:00<SeP>2024-06-17 15:10:48<SeP>2024-06-19 02:45:36<SeP>2024-06-20 14:20:24<SeP>2024-06-22 01:55:12<SeP>2024-06-23 13:30:00<SeP>2024-06-25 01:04:48<SeP>2024-06-26 12:39:36<SeP>2024-06-28 00:14:24<SeP>2024-06-29 11:49:12<SeP>2024-06-30 23:24:00<SeP>2024-07-02 10:58:48<SeP>2024-07-03 22:33:36<SeP>2024-07-05 10:08:24<SeP>2024-07-06 21:43:12<SeP>2024-07-08 09:18:00<SeP>2024-07-09 20:52:48<SeP>2024-07-11 08:27:36<SeP>2024-07-12 20:02:24<SeP>2024-07-14 07:37:12<SeP>2024-07-15 19:12:00<SeP>2024-07-17 06:46:48<SeP>2024-07-18 18:21:36<SeP>2024-07-20 05:56:24<SeP>2024-07-21 17:31:12<SeP>2024-07-23 05:06:00<SeP>2024-07-24 16:40:48<SeP>2024-07-26 04:15:36<SeP>2024-07-27 15:50:24<SeP>2024-07-29 03:25:12<SeP>2024-07-30 15:00:00<SeP>2024-08-01 02:34:48<SeP>2024-08-02 14:09:36<SeP>2024-08-04 01:44:24<SeP>2024-08-05 13:19:12<SeP>2024-08-07 00:54:00<SeP>2024-08-08 12:28:48<SeP>2024-08-10 00:03:36<SeP>2024-08-11 11:38:24<SeP>2024-08-12 23:13:12<SeP>2024-08-14 10:48:00<SeP>2024-08-15 22:22:48<SeP>2024-08-17 09:57:36<SeP>2024-08-18 21:32:24<SeP>2024-08-20 09:07:12<SeP>2024-08-21 20:42:00<SeP>2024-08-23 08:16:48<SeP>2024-08-24 19:51:36<SeP>2024-08-26 07:26:24<SeP>2024-08-27 19:01:12<SeP>2024-08-29 06:36:00<SeP>2024-08-30 18:10:48<SeP>2024-09-01 05:45:36<SeP>2024-09-02 17:20:24<SeP>2024-09-04 04:55:12<SeP>2024-09-05 16:30:00<SeP>2024-09-07 04:04:48<SeP>2024-09-08 15:39:36<SeP>2024-09-10 03:14:24<SeP>2024-09-11 14:49:12<SeP>2024-09-13 02:24:00<SeP>2024-09-14 13:58:48<SeP>2024-09-16 01:33:36<SeP>2024-09-17 13:08:24<SeP>2024-09-19 00:43:12<SeP>2024-09-20 12:18:00<SeP>2024-09-21 23:52:48<SeP>2024-09-23 11:27:36<SeP>2024-09-24 23:02:24<SeP>2024-09-26 10:37:12<SeP>2024-09-27 22:12:00<SeP>2024-09-29 09:46:48<SeP>2024-09-30 21:21:36<SeP>2024-10-02 08:56:24<SeP>2024-10-03 20:31:12<SeP>2024-10-05 08:06:00<SeP>2024-10-06 19:40:48<SeP>2024-10-08 07:15:36<SeP>2024-10-09 18:50:24<SeP>2024-10-11 06:25:12<SeP>2024-10-12 18:00:00<SeP>2024-10-14 05:34:48<SeP>2024-10-15 17:09:36<SeP>2024-10-17 04:44:24<SeP>2024-10-18 16:19:12<SeP>2024-10-20 03:54:00<SeP>2024-10-21 15:28:48<SeP>2024-10-23 03:03:36<SeP>2024-10-24 14:38:24<SeP>2024-10-26 02:13:12<SeP>2024-10-27 13:48:00<SeP>2024-10-29 01:22:48<SeP>2024-10-30 12:57:36<SeP>2024-11-01 00:32:24<SeP>2024-11-02 12:07:12<SeP>2024-11-03 22:42:00<SeP>2024-11-05 10:16:48<SeP>2024-11-06 21:51:36<SeP>2024-11-08 09:26:24<SeP>2024-11-09 21:01:12<SeP>2024-11-11 08:36:00<SeP>2024-11-12 20:10:48<SeP>2024-11-14 07:45:36<SeP>2024-11-15 19:20:24<SeP>2024-11-17 06:55:12<SeP>2024-11-18 18:30:00<SeP>2024-11-20 06:04:48<SeP>2024-11-21 17:39:36<SeP>2024-11-23 05:14:24<SeP>2024-11-24 16:49:12<SeP>2024-11-26 04:24:00<SeP>2024-11-27 15:58:48<SeP>2024-11-29 03:33:36<SeP>2024-11-30 15:08:24<SeP>2024-12-02 02:43:12<SeP>2024-12-03 14:18:00<SeP>2024-12-05 01:52:48<SeP>2024-12-06 13:27:36<SeP>2024-12-08 01:02:24<SeP>2024-12-09 12:37:12<SeP>2024-12-11 00:12:00<SeP>2024-12-12 11:46:48<SeP>2024-12-13 23:21:36<SeP>2024-12-15 10:56:24<SeP>2024-12-16 22:31:12<SeP>2024-12-18 10:06:00<SeP>2024-12-19 21:40:48<SeP>2024-12-21 09:15:36<SeP>2024-12-22 20:50:24<SeP>2024-12-24 08:25:12<SeP>2024-12-25 20:00:00<SeP>2024-12-27 07:34:48<SeP>2024-12-28 19:09:36<SeP>2024-12-30 06:44:24<SeP>2024-12-31 18:19:12<SeP>2025-01-02 05:54:00<SeP>2025-01-03 17:28:48<SeP>2025-01-05 05:03:36<SeP>2025-01-06 16:38:24<SeP>2025-01-08 04:13:12<SeP>2025-01-09 15:48:00<SeP>2025-01-11 03:22:48<SeP>2025-01-12 14:57:36<SeP>2025-01-14 02:32:24<SeP>2025-01-15 14:07:12<SeP>2025-01-17 01:42:00<SeP>2025-01-18 13:16:48<SeP>2025-01-20 00:51:36<SeP>2025-01-21 12:26:24<SeP>2025-01-23 00:01:12<SeP>2025-01-24 11:36:00<SeP>2025-01-25 23:10:48<SeP>2025-01-27 10:45:36<SeP>2025-01-28 22:20:24<SeP>2025-01-30 09:55:12<SeP>2025-01-31 21:30:00<SeP>2025-02-02 09:04:48<SeP>2025-02-03 20:39:36<SeP>2025-02-05 08:14:24<SeP>2025-02-06 19:49:12<SeP>2025-02-08 07:24:00<SeP>2025-02-09 18:58:48<SeP>2025-02-11 06:33:36<SeP>2025-02-12 18:08:24<SeP>2025-02-14 05:43:12<SeP>2025-02-15 17:18:00<SeP>2025-02-17 04:52:48<SeP>2025-02-18 16:27:36<SeP>2025-02-20 04:02:24<SeP>2025-02-21 15:37:12<SeP>2025-02-23 03:12:00<SeP>2025-02-24 14:46:48<SeP>2025-02-26 02:21:36<SeP>2025-02-27 13:56:24<SeP>2025-03-01 01:31:12<SeP>2025-03-02 13:06:00<SeP>2025-03-04 00:40:48<SeP>2025-03-05 12:15:36<SeP>2025-03-06 23:50:24<SeP>2025-03-08 11:25:12";
  const itemLabel       = "Escaneos";
  const itemData        = "778<SeP>1517<SeP>1374<SeP>1508<SeP>1250<SeP>1739<SeP>928<SeP>994<SeP>1159<SeP>3381<SeP>3244<SeP>1198<SeP>3313<SeP>880<SeP>783<SeP>890<SeP>1431<SeP>2933<SeP>1784<SeP>1365<SeP>1154<SeP>893<SeP>1093<SeP>1241<SeP>922<SeP>761<SeP>954<SeP>3684<SeP>936<SeP>825<SeP>1344<SeP>1264<SeP>887<SeP>1745<SeP>2498<SeP>2916<SeP>1784<SeP>1886<SeP>1324<SeP>1319<SeP>1805<SeP>1788<SeP>2211<SeP>1616<SeP>1674<SeP>1629<SeP>1739<SeP>1701<SeP>1744<SeP>1973<SeP>1701<SeP>1669<SeP>3138<SeP>1756<SeP>1438<SeP>1803<SeP>2118<SeP>2340<SeP>1434<SeP>3798<SeP>1420<SeP>1531<SeP>1607<SeP>1186<SeP>1923<SeP>1782<SeP>1250<SeP>1350<SeP>1495<SeP>1216<SeP>2287<SeP>1231<SeP>1184<SeP>1312<SeP>5644<SeP>3796<SeP>1398<SeP>1338<SeP>1779<SeP>1965<SeP>1142<SeP>6546<SeP>1644<SeP>1663<SeP>1023<SeP>1156<SeP>3322<SeP>1276<SeP>946<SeP>1014<SeP>1099<SeP>1218<SeP>2860<SeP>1160<SeP>1544<SeP>2872<SeP>6519<SeP>1297<SeP>967<SeP>960<SeP>903<SeP>991<SeP>996<SeP>1036<SeP>1696<SeP>3972<SeP>1783<SeP>1229<SeP>1400<SeP>612<SeP>1464<SeP>1316<SeP>1155<SeP>942<SeP>2319<SeP>1066<SeP>1210<SeP>1099<SeP>926<SeP>1188<SeP>662<SeP>927<SeP>858<SeP>774<SeP>1122<SeP>869<SeP>911<SeP>825<SeP>880<SeP>901<SeP>717<SeP>768<SeP>826<SeP>984<SeP>905<SeP>808<SeP>963<SeP>640<SeP>831<SeP>1135<SeP>732<SeP>933<SeP>958<SeP>910<SeP>1149<SeP>984<SeP>755<SeP>543<SeP>955<SeP>850<SeP>1308<SeP>886<SeP>1073<SeP>1187<SeP>1240<SeP>957<SeP>838<SeP>983<SeP>912<SeP>883<SeP>1082<SeP>841<SeP>948<SeP>952<SeP>1100<SeP>936<SeP>1124<SeP>930<SeP>1090<SeP>1106<SeP>943<SeP>907<SeP>2239<SeP>1260<SeP>1117<SeP>1074<SeP>1057<SeP>1045<SeP>1044<SeP>859<SeP>638<SeP>941<SeP>1176<SeP>894<SeP>980<SeP>1082<SeP>1356<SeP>1091<SeP>1222<SeP>1269<SeP>1309<SeP>1155<SeP>1499<SeP>1224<SeP>1548<SeP>2127<SeP>1339<SeP>829<SeP>899<SeP>1110<SeP>1086<SeP>661<SeP>833<SeP>883<SeP>1000<SeP>793<SeP>5334<SeP>3427<SeP>2013<SeP>1337<SeP>1074<SeP>837<SeP>1076<SeP>874<SeP>1028<SeP>1087<SeP>1106<SeP>1050<SeP>1488<SeP>1939<SeP>1071<SeP>1295<SeP>1284<SeP>1184<SeP>1161<SeP>1032<SeP>1022<SeP>1080<SeP>1123<SeP>1061<SeP>1166<SeP>955<SeP>1152<SeP>833<SeP>1375<SeP>1163<SeP>1142<SeP>1193<SeP>1381<SeP>1218<SeP>1595<SeP>1209<SeP>1156<SeP>1245<SeP>1103<SeP>2001<SeP>1278<SeP>1855<SeP>1664<SeP>1457<SeP>2021<SeP>1693<SeP>1188<SeP>1185<SeP>1336<SeP>1081<SeP>1720<SeP>1200<SeP>1251<SeP>1777<SeP>1529<SeP>1410<SeP>1603<SeP>1207<SeP>1438<SeP>1203<SeP>1097<SeP>1286<SeP>1185<SeP>1257<SeP>1308<SeP>1169<SeP>1495<SeP>1883<SeP>1346<SeP>1386<SeP>1621<SeP>1363<SeP>1128<SeP>965<SeP>1058<SeP>952<SeP>803<SeP>1047<SeP>1865<SeP>1126<SeP>1038<SeP>1162<SeP>979<SeP>800<SeP>1105<SeP>1396<SeP>798<SeP>980<SeP>937<SeP>1336<SeP>1624<SeP>1481<SeP>1057<SeP>1157<SeP>996<SeP>1873<SeP>1085<SeP>1167<SeP>1084<SeP>1292<SeP>1274<SeP>998<SeP>1026<SeP>1227<SeP>1014<SeP>957<SeP>823<SeP>1393<SeP>1320<SeP>1644<SeP>1629<SeP>1356<SeP>963<SeP>1127<SeP>1139<SeP>1149<SeP>1115<SeP>1204<SeP>1026<SeP>1019<SeP>1279<SeP>1634<SeP>1286<SeP>1678<SeP>1287<SeP>1724<SeP>1377<SeP>1285<SeP>1515<SeP>1454<SeP>1394<SeP>1276<SeP>1737<SeP>1423<SeP>1627<SeP>1422<SeP>1416<SeP>1392<SeP>1341<SeP>1258<SeP>1393<SeP>1578<SeP>1527<SeP>1205<SeP>1373<SeP>1217<SeP>1477<SeP>1300<SeP>1150<SeP>1700<SeP>1914<SeP>1411<SeP>1026<SeP>940<SeP>1545<SeP>1734<SeP>1313<SeP>1394<SeP>1026<SeP>1418<SeP>1356<SeP>1400<SeP>1430<SeP>1461<SeP>1691<SeP>1571<SeP>1496<SeP>1615<SeP>1444<SeP>1320<SeP>1736<SeP>1465<SeP>1382<SeP>1140<SeP>1839<SeP>1695<SeP>1841<SeP>1837<SeP>1844<SeP>1625<SeP>1635<SeP>1525<SeP>1594<SeP>1515<SeP>1745<SeP>1781<SeP>1730<SeP>1441<SeP>1506<SeP>1499<SeP>1461<SeP>1588<SeP>2365<SeP>1115";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:34:48<SeP>2023-07-28 23:09:36<SeP>2023-07-30 10:44:24<SeP>2023-07-31 22:19:12<SeP>2023-08-02 09:54:00<SeP>2023-08-03 21:28:48<SeP>2023-08-05 09:03:36<SeP>2023-08-06 20:38:24<SeP>2023-08-08 08:13:12<SeP>2023-08-09 19:48:00<SeP>2023-08-11 07:22:48<SeP>2023-08-12 18:57:36<SeP>2023-08-14 06:32:24<SeP>2023-08-15 18:07:12<SeP>2023-08-17 05:42:00<SeP>2023-08-18 17:16:48<SeP>2023-08-20 04:51:36<SeP>2023-08-21 16:26:24<SeP>2023-08-23 04:01:12<SeP>2023-08-24 15:36:00<SeP>2023-08-26 03:10:48<SeP>2023-08-27 14:45:36<SeP>2023-08-29 02:20:24<SeP>2023-08-30 13:55:12<SeP>2023-09-01 01:30:00<SeP>2023-09-02 13:04:48<SeP>2023-09-04 00:39:36<SeP>2023-09-05 12:14:24<SeP>2023-09-06 23:49:12<SeP>2023-09-08 11:24:00<SeP>2023-09-09 22:58:48<SeP>2023-09-11 10:33:36<SeP>2023-09-12 22:08:24<SeP>2023-09-14 09:43:12<SeP>2023-09-15 21:18:00<SeP>2023-09-17 08:52:48<SeP>2023-09-18 20:27:36<SeP>2023-09-20 08:02:24<SeP>2023-09-21 19:37:12<SeP>2023-09-23 07:12:00<SeP>2023-09-24 18:46:48<SeP>2023-09-26 06:21:36<SeP>2023-09-27 17:56:24<SeP>2023-09-29 05:31:12<SeP>2023-09-30 17:06:00<SeP>2023-10-02 04:40:48<SeP>2023-10-03 16:15:36<SeP>2023-10-05 03:50:24<SeP>2023-10-06 15:25:12<SeP>2023-10-08 03:00:00<SeP>2023-10-09 14:34:48<SeP>2023-10-11 02:09:36<SeP>2023-10-12 13:44:24<SeP>2023-10-14 01:19:12<SeP>2023-10-15 12:54:00<SeP>2023-10-17 00:28:48<SeP>2023-10-18 12:03:36<SeP>2023-10-19 23:38:24<SeP>2023-10-21 11:13:12<SeP>2023-10-22 22:48:00<SeP>2023-10-24 10:22:48<SeP>2023-10-25 21:57:36<SeP>2023-10-27 09:32:24<SeP>2023-10-28 21:07:12<SeP>2023-10-30 08:42:00<SeP>2023-10-31 20:16:48<SeP>2023-11-02 07:51:36<SeP>2023-11-03 19:26:24<SeP>2023-11-05 06:01:12<SeP>2023-11-06 17:36:00<SeP>2023-11-08 05:10:48<SeP>2023-11-09 16:45:36<SeP>2023-11-11 04:20:24<SeP>2023-11-12 15:55:12<SeP>2023-11-14 03:30:00<SeP>2023-11-15 15:04:48<SeP>2023-11-17 02:39:36<SeP>2023-11-18 14:14:24<SeP>2023-11-20 01:49:12<SeP>2023-11-21 13:24:00<SeP>2023-11-23 00:58:48<SeP>2023-11-24 12:33:36<SeP>2023-11-26 00:08:24<SeP>2023-11-27 11:43:12<SeP>2023-11-28 23:18:00<SeP>2023-11-30 10:52:48<SeP>2023-12-01 22:27:36<SeP>2023-12-03 10:02:24<SeP>2023-12-04 21:37:12<SeP>2023-12-06 09:12:00<SeP>2023-12-07 20:46:48<SeP>2023-12-09 08:21:36<SeP>2023-12-10 19:56:24<SeP>2023-12-12 07:31:12<SeP>2023-12-13 19:06:00<SeP>2023-12-15 06:40:48<SeP>2023-12-16 18:15:36<SeP>2023-12-18 05:50:24<SeP>2023-12-19 17:25:12<SeP>2023-12-21 05:00:00<SeP>2023-12-22 16:34:48<SeP>2023-12-24 04:09:36<SeP>2023-12-25 15:44:24<SeP>2023-12-27 03:19:12<SeP>2023-12-28 14:54:00<SeP>2023-12-30 02:28:48<SeP>2023-12-31 14:03:36<SeP>2024-01-02 01:38:24<SeP>2024-01-03 13:13:12<SeP>2024-01-05 00:48:00<SeP>2024-01-06 12:22:48<SeP>2024-01-07 23:57:36<SeP>2024-01-09 11:32:24<SeP>2024-01-10 23:07:12<SeP>2024-01-12 10:42:00<SeP>2024-01-13 22:16:48<SeP>2024-01-15 09:51:36<SeP>2024-01-16 21:26:24<SeP>2024-01-18 09:01:12<SeP>2024-01-19 20:36:00<SeP>2024-01-21 08:10:48<SeP>2024-01-22 19:45:36<SeP>2024-01-24 07:20:24<SeP>2024-01-25 18:55:12<SeP>2024-01-27 06:30:00<SeP>2024-01-28 18:04:48<SeP>2024-01-30 05:39:36<SeP>2024-01-31 17:14:24<SeP>2024-02-02 04:49:12<SeP>2024-02-03 16:24:00<SeP>2024-02-05 03:58:48<SeP>2024-02-06 15:33:36<SeP>2024-02-08 03:08:24<SeP>2024-02-09 14:43:12<SeP>2024-02-11 02:18:00<SeP>2024-02-12 13:52:48<SeP>2024-02-14 01:27:36<SeP>2024-02-15 13:02:24<SeP>2024-02-17 00:37:12<SeP>2024-02-18 12:12:00<SeP>2024-02-19 23:46:48<SeP>2024-02-21 11:21:36<SeP>2024-02-22 22:56:24<SeP>2024-02-24 10:31:12<SeP>2024-02-25 22:06:00<SeP>2024-02-27 09:40:48<SeP>2024-02-28 21:15:36<SeP>2024-03-01 08:50:24<SeP>2024-03-02 20:25:12<SeP>2024-03-04 08:00:00<SeP>2024-03-05 19:34:48<SeP>2024-03-07 07:09:36<SeP>2024-03-08 18:44:24<SeP>2024-03-10 07:19:12<SeP>2024-03-11 18:54:00<SeP>2024-03-13 06:28:48<SeP>2024-03-14 18:03:36<SeP>2024-03-16 05:38:24<SeP>2024-03-17 17:13:12<SeP>2024-03-19 04:48:00<SeP>2024-03-20 16:22:48<SeP>2024-03-22 03:57:36<SeP>2024-03-23 15:32:24<SeP>2024-03-25 03:07:12<SeP>2024-03-26 14:42:00<SeP>2024-03-28 02:16:48<SeP>2024-03-29 13:51:36<SeP>2024-03-31 01:26:24<SeP>2024-04-01 13:01:12<SeP>2024-04-03 00:36:00<SeP>2024-04-04 12:10:48<SeP>2024-04-05 23:45:36<SeP>2024-04-07 11:20:24<SeP>2024-04-08 22:55:12<SeP>2024-04-10 10:30:00<SeP>2024-04-11 22:04:48<SeP>2024-04-13 09:39:36<SeP>2024-04-14 21:14:24<SeP>2024-04-16 08:49:12<SeP>2024-04-17 20:24:00<SeP>2024-04-19 07:58:48<SeP>2024-04-20 19:33:36<SeP>2024-04-22 07:08:24<SeP>2024-04-23 18:43:12<SeP>2024-04-25 06:18:00<SeP>2024-04-26 17:52:48<SeP>2024-04-28 05:27:36<SeP>2024-04-29 17:02:24<SeP>2024-05-01 04:37:12<SeP>2024-05-02 16:12:00<SeP>2024-05-04 03:46:48<SeP>2024-05-05 15:21:36<SeP>2024-05-07 02:56:24<SeP>2024-05-08 14:31:12<SeP>2024-05-10 02:06:00<SeP>2024-05-11 13:40:48<SeP>2024-05-13 01:15:36<SeP>2024-05-14 12:50:24<SeP>2024-05-16 00:25:12<SeP>2024-05-17 12:00:00<SeP>2024-05-18 23:34:48<SeP>2024-05-20 11:09:36<SeP>2024-05-21 22:44:24<SeP>2024-05-23 10:19:12<SeP>2024-05-24 21:54:00<SeP>2024-05-26 09:28:48<SeP>2024-05-27 21:03:36<SeP>2024-05-29 08:38:24<SeP>2024-05-30 20:13:12<SeP>2024-06-01 07:48:00<SeP>2024-06-02 19:22:48<SeP>2024-06-04 06:57:36<SeP>2024-06-05 18:32:24<SeP>2024-06-07 06:07:12<SeP>2024-06-08 17:42:00<SeP>2024-06-10 05:16:48<SeP>2024-06-11 16:51:36<SeP>2024-06-13 04:26:24<SeP>2024-06-14 16:01:12<SeP>2024-06-16 03:36:00<SeP>2024-06-17 15:10:48<SeP>2024-06-19 02:45:36<SeP>2024-06-20 14:20:24<SeP>2024-06-22 01:55:12<SeP>2024-06-23 13:30:00<SeP>2024-06-25 01:04:48<SeP>2024-06-26 12:39:36<SeP>2024-06-28 00:14:24<SeP>2024-06-29 11:49:12<SeP>2024-06-30 23:24:00<SeP>2024-07-02 10:58:48<SeP>2024-07-03 22:33:36<SeP>2024-07-05 10:08:24<SeP>2024-07-06 21:43:12<SeP>2024-07-08 09:18:00<SeP>2024-07-09 20:52:48<SeP>2024-07-11 08:27:36<SeP>2024-07-12 20:02:24<SeP>2024-07-14 07:37:12<SeP>2024-07-15 19:12:00<SeP>2024-07-17 06:46:48<SeP>2024-07-18 18:21:36<SeP>2024-07-20 05:56:24<SeP>2024-07-21 17:31:12<SeP>2024-07-23 05:06:00<SeP>2024-07-24 16:40:48<SeP>2024-07-26 04:15:36<SeP>2024-07-27 15:50:24<SeP>2024-07-29 03:25:12<SeP>2024-07-30 15:00:00<SeP>2024-08-01 02:34:48<SeP>2024-08-02 14:09:36<SeP>2024-08-04 01:44:24<SeP>2024-08-05 13:19:12<SeP>2024-08-07 00:54:00<SeP>2024-08-08 12:28:48<SeP>2024-08-10 00:03:36<SeP>2024-08-11 11:38:24<SeP>2024-08-12 23:13:12<SeP>2024-08-14 10:48:00<SeP>2024-08-15 22:22:48<SeP>2024-08-17 09:57:36<SeP>2024-08-18 21:32:24<SeP>2024-08-20 09:07:12<SeP>2024-08-21 20:42:00<SeP>2024-08-23 08:16:48<SeP>2024-08-24 19:51:36<SeP>2024-08-26 07:26:24<SeP>2024-08-27 19:01:12<SeP>2024-08-29 06:36:00<SeP>2024-08-30 18:10:48<SeP>2024-09-01 05:45:36<SeP>2024-09-02 17:20:24<SeP>2024-09-04 04:55:12<SeP>2024-09-05 16:30:00<SeP>2024-09-07 04:04:48<SeP>2024-09-08 15:39:36<SeP>2024-09-10 03:14:24<SeP>2024-09-11 14:49:12<SeP>2024-09-13 02:24:00<SeP>2024-09-14 13:58:48<SeP>2024-09-16 01:33:36<SeP>2024-09-17 13:08:24<SeP>2024-09-19 00:43:12<SeP>2024-09-20 12:18:00<SeP>2024-09-21 23:52:48<SeP>2024-09-23 11:27:36<SeP>2024-09-24 23:02:24<SeP>2024-09-26 10:37:12<SeP>2024-09-27 22:12:00<SeP>2024-09-29 09:46:48<SeP>2024-09-30 21:21:36<SeP>2024-10-02 08:56:24<SeP>2024-10-03 20:31:12<SeP>2024-10-05 08:06:00<SeP>2024-10-06 19:40:48<SeP>2024-10-08 07:15:36<SeP>2024-10-09 18:50:24<SeP>2024-10-11 06:25:12<SeP>2024-10-12 18:00:00<SeP>2024-10-14 05:34:48<SeP>2024-10-15 17:09:36<SeP>2024-10-17 04:44:24<SeP>2024-10-18 16:19:12<SeP>2024-10-20 03:54:00<SeP>2024-10-21 15:28:48<SeP>2024-10-23 03:03:36<SeP>2024-10-24 14:38:24<SeP>2024-10-26 02:13:12<SeP>2024-10-27 13:48:00<SeP>2024-10-29 01:22:48<SeP>2024-10-30 12:57:36<SeP>2024-11-01 00:32:24<SeP>2024-11-02 12:07:12<SeP>2024-11-03 22:42:00<SeP>2024-11-05 10:16:48<SeP>2024-11-06 21:51:36<SeP>2024-11-08 09:26:24<SeP>2024-11-09 21:01:12<SeP>2024-11-11 08:36:00<SeP>2024-11-12 20:10:48<SeP>2024-11-14 07:45:36<SeP>2024-11-15 19:20:24<SeP>2024-11-17 06:55:12<SeP>2024-11-18 18:30:00<SeP>2024-11-20 06:04:48<SeP>2024-11-21 17:39:36<SeP>2024-11-23 05:14:24<SeP>2024-11-24 16:49:12<SeP>2024-11-26 04:24:00<SeP>2024-11-27 15:58:48<SeP>2024-11-29 03:33:36<SeP>2024-11-30 15:08:24<SeP>2024-12-02 02:43:12<SeP>2024-12-03 14:18:00<SeP>2024-12-05 01:52:48<SeP>2024-12-06 13:27:36<SeP>2024-12-08 01:02:24<SeP>2024-12-09 12:37:12<SeP>2024-12-11 00:12:00<SeP>2024-12-12 11:46:48<SeP>2024-12-13 23:21:36<SeP>2024-12-15 10:56:24<SeP>2024-12-16 22:31:12<SeP>2024-12-18 10:06:00<SeP>2024-12-19 21:40:48<SeP>2024-12-21 09:15:36<SeP>2024-12-22 20:50:24<SeP>2024-12-24 08:25:12<SeP>2024-12-25 20:00:00<SeP>2024-12-27 07:34:48<SeP>2024-12-28 19:09:36<SeP>2024-12-30 06:44:24<SeP>2024-12-31 18:19:12<SeP>2025-01-02 05:54:00<SeP>2025-01-03 17:28:48<SeP>2025-01-05 05:03:36<SeP>2025-01-06 16:38:24<SeP>2025-01-08 04:13:12<SeP>2025-01-09 15:48:00<SeP>2025-01-11 03:22:48<SeP>2025-01-12 14:57:36<SeP>2025-01-14 02:32:24<SeP>2025-01-15 14:07:12<SeP>2025-01-17 01:42:00<SeP>2025-01-18 13:16:48<SeP>2025-01-20 00:51:36<SeP>2025-01-21 12:26:24<SeP>2025-01-23 00:01:12<SeP>2025-01-24 11:36:00<SeP>2025-01-25 23:10:48<SeP>2025-01-27 10:45:36<SeP>2025-01-28 22:20:24<SeP>2025-01-30 09:55:12<SeP>2025-01-31 21:30:00<SeP>2025-02-02 09:04:48<SeP>2025-02-03 20:39:36<SeP>2025-02-05 08:14:24<SeP>2025-02-06 19:49:12<SeP>2025-02-08 07:24:00<SeP>2025-02-09 18:58:48<SeP>2025-02-11 06:33:36<SeP>2025-02-12 18:08:24<SeP>2025-02-14 05:43:12<SeP>2025-02-15 17:18:00<SeP>2025-02-17 04:52:48<SeP>2025-02-18 16:27:36<SeP>2025-02-20 04:02:24<SeP>2025-02-21 15:37:12<SeP>2025-02-23 03:12:00<SeP>2025-02-24 14:46:48<SeP>2025-02-26 02:21:36<SeP>2025-02-27 13:56:24<SeP>2025-03-01 01:31:12<SeP>2025-03-02 13:06:00<SeP>2025-03-04 00:40:48<SeP>2025-03-05 12:15:36<SeP>2025-03-06 23:50:24<SeP>2025-03-08 11:25:12";
  const itemLabel       = "Ataques";
  const itemData        = "183<SeP>586<SeP>1400<SeP>656<SeP>222<SeP>236<SeP>7026<SeP>594<SeP>9402<SeP>563<SeP>401<SeP>1132<SeP>1297<SeP>241<SeP>309<SeP>306<SeP>161<SeP>750<SeP>349<SeP>8214<SeP>6620<SeP>6963<SeP>9092<SeP>2584<SeP>288<SeP>414<SeP>174<SeP>385<SeP>5925<SeP>87<SeP>387<SeP>154<SeP>510<SeP>520<SeP>10110<SeP>9157<SeP>10166<SeP>10175<SeP>5503<SeP>6030<SeP>8607<SeP>7913<SeP>9934<SeP>7939<SeP>7379<SeP>9443<SeP>8989<SeP>7454<SeP>8496<SeP>5395<SeP>9682<SeP>9902<SeP>6694<SeP>7696<SeP>8495<SeP>9473<SeP>18522<SeP>16516<SeP>9357<SeP>11862<SeP>6426<SeP>8568<SeP>8453<SeP>9001<SeP>8818<SeP>6112<SeP>6763<SeP>7872<SeP>6409<SeP>2531<SeP>6420<SeP>5357<SeP>6913<SeP>6664<SeP>8234<SeP>3196<SeP>6527<SeP>5740<SeP>6780<SeP>5823<SeP>6460<SeP>4428<SeP>7500<SeP>5027<SeP>5684<SeP>5948<SeP>8357<SeP>21621<SeP>24824<SeP>18855<SeP>9842<SeP>5663<SeP>8028<SeP>12410<SeP>6762<SeP>4003<SeP>5698<SeP>5101<SeP>4639<SeP>6507<SeP>7315<SeP>7601<SeP>6077<SeP>5460<SeP>4691<SeP>7979<SeP>8715<SeP>7704<SeP>7222<SeP>3886<SeP>8994<SeP>10048<SeP>6883<SeP>3244<SeP>5623<SeP>8058<SeP>6258<SeP>7010<SeP>9156<SeP>6740<SeP>1315<SeP>2490<SeP>1023<SeP>2527<SeP>2444<SeP>1077<SeP>766<SeP>1168<SeP>1332<SeP>1643<SeP>995<SeP>937<SeP>1185<SeP>1074<SeP>769<SeP>1472<SeP>1454<SeP>1186<SeP>975<SeP>2690<SeP>1458<SeP>8398<SeP>8531<SeP>9727<SeP>9193<SeP>6071<SeP>11150<SeP>7518<SeP>8468<SeP>9746<SeP>10599<SeP>11394<SeP>8633<SeP>11951<SeP>14247<SeP>8298<SeP>9577<SeP>4552<SeP>6368<SeP>9145<SeP>23443<SeP>6439<SeP>8289<SeP>10869<SeP>17344<SeP>6960<SeP>6062<SeP>6347<SeP>8010<SeP>26040<SeP>7542<SeP>9153<SeP>10965<SeP>4800<SeP>6585<SeP>6170<SeP>16153<SeP>4735<SeP>12785<SeP>8272<SeP>6786<SeP>8420<SeP>8036<SeP>2953<SeP>7049<SeP>4502<SeP>7124<SeP>7911<SeP>5879<SeP>6846<SeP>20730<SeP>6996<SeP>6044<SeP>6271<SeP>8262<SeP>11215<SeP>7090<SeP>4592<SeP>3296<SeP>6328<SeP>3366<SeP>4129<SeP>4161<SeP>632<SeP>112<SeP>634<SeP>613<SeP>580<SeP>753<SeP>362<SeP>665<SeP>1321<SeP>1257<SeP>3127<SeP>22922<SeP>609<SeP>4491<SeP>3829<SeP>2459<SeP>7445<SeP>2768<SeP>4240<SeP>3499<SeP>2951<SeP>3067<SeP>3180<SeP>4872<SeP>1477<SeP>3149<SeP>2474<SeP>2179<SeP>1933<SeP>1851<SeP>1161<SeP>1918<SeP>841<SeP>1281<SeP>1603<SeP>26513<SeP>1686<SeP>4081<SeP>4208<SeP>1965<SeP>3526<SeP>2890<SeP>1829<SeP>3740<SeP>2422<SeP>3772<SeP>2379<SeP>2986<SeP>3816<SeP>4597<SeP>5105<SeP>4981<SeP>4808<SeP>2678<SeP>2209<SeP>5397<SeP>3552<SeP>9587<SeP>5489<SeP>3667<SeP>2515<SeP>2090<SeP>4937<SeP>3540<SeP>3878<SeP>3203<SeP>2525<SeP>5902<SeP>3341<SeP>6361<SeP>3702<SeP>5931<SeP>5853<SeP>5177<SeP>5014<SeP>22337<SeP>4930<SeP>11973<SeP>1819<SeP>2541<SeP>4638<SeP>3755<SeP>5034<SeP>2955<SeP>5466<SeP>4613<SeP>4855<SeP>3154<SeP>4221<SeP>2005<SeP>1385<SeP>2188<SeP>3949<SeP>2336<SeP>3082<SeP>3444<SeP>4725<SeP>3601<SeP>3594<SeP>4186<SeP>3387<SeP>3399<SeP>6356<SeP>7648<SeP>6170<SeP>4763<SeP>4888<SeP>4513<SeP>3825<SeP>4081<SeP>4122<SeP>6666<SeP>5038<SeP>4904<SeP>2766<SeP>774<SeP>1485<SeP>1748<SeP>1230<SeP>1064<SeP>2093<SeP>1086<SeP>1655<SeP>3963<SeP>4956<SeP>6479<SeP>34209<SeP>4885<SeP>5963<SeP>22668<SeP>5493<SeP>5291<SeP>6260<SeP>4026<SeP>24723<SeP>5449<SeP>4890<SeP>4922<SeP>5879<SeP>18467<SeP>16929<SeP>4667<SeP>3304<SeP>4474<SeP>5578<SeP>5597<SeP>3033<SeP>3235<SeP>4144<SeP>5285<SeP>4966<SeP>13845<SeP>9227<SeP>5724<SeP>6454<SeP>2706<SeP>2772<SeP>3561<SeP>5001<SeP>3946<SeP>4000<SeP>2563<SeP>3682<SeP>2815<SeP>4591<SeP>5179<SeP>8497<SeP>10781<SeP>8517<SeP>9504<SeP>7812<SeP>7243<SeP>5261<SeP>4972<SeP>4272<SeP>25281<SeP>3591<SeP>3886<SeP>3568<SeP>11429<SeP>5215<SeP>4487<SeP>4390<SeP>4512<SeP>3521<SeP>6343<SeP>10109<SeP>6591<SeP>3897<SeP>3341<SeP>2822<SeP>2210<SeP>2377<SeP>2081<SeP>2187<SeP>2461<SeP>1977";
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
  const itemData    = "698100<SeP>367735<SeP>206815<SeP>180973<SeP>110959<SeP>88490<SeP>84206<SeP>81495<SeP>68358<SeP>68240";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "299622<SeP>41433<SeP>41074<SeP>36693<SeP>14667<SeP>11254<SeP>8401<SeP>8057<SeP>7246<SeP>7235";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "398478<SeP>331042<SeP>203698<SeP>139899<SeP>96292<SeP>81498<SeP>81255<SeP>70241<SeP>60183<SeP>58967";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "364535<SeP>259557<SeP>238339<SeP>143868<SeP>67647<SeP>60025<SeP>56923<SeP>53471<SeP>37113<SeP>36573";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>0<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "157971<SeP>53755<SeP>36000<SeP>32906<SeP>21926<SeP>12907<SeP>12484<SeP>10944<SeP>7614<SeP>7512";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "351628<SeP>258790<SeP>121942<SeP>80368<SeP>55903<SeP>49081<SeP>47351<SeP>30688<SeP>29324<SeP>26849";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "698100<SeP>367735<SeP>206815<SeP>180973<SeP>110959<SeP>88490<SeP>84206<SeP>81495<SeP>68358<SeP>68240";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "299622<SeP>41433<SeP>41074<SeP>36693<SeP>14667<SeP>11254<SeP>8401<SeP>8057<SeP>7246<SeP>7235";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "398478<SeP>331042<SeP>203698<SeP>139899<SeP>96292<SeP>81498<SeP>81255<SeP>70241<SeP>60183<SeP>58967";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "364535<SeP>259557<SeP>238339<SeP>143868<SeP>67647<SeP>60025<SeP>56923<SeP>53471<SeP>37113<SeP>36573";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>0<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "157971<SeP>53755<SeP>36000<SeP>32906<SeP>21926<SeP>12907<SeP>12484<SeP>10944<SeP>7614<SeP>7512";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "351628<SeP>258790<SeP>121942<SeP>80368<SeP>55903<SeP>49081<SeP>47351<SeP>30688<SeP>29324<SeP>26849";
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
