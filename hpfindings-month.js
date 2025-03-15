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
  document.getElementById(varElement).innerHTML = "2025-3-15";
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
  const metricData    = "111855";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "33653";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "78202";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8812";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "43627";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "34575";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4328";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "8456";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "26119";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3620";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "111855";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "33653";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "78202";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8812";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "43627";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "34575";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4328";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "8456";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "26119";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3620";
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
  const incomingData = "111855<SeP>33653<SeP>78202<SeP>8812";
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
  const incomingData = "78202<SeP>43627<SeP>34575<SeP>4328";
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
  const incomingData = "34575<SeP>8456<SeP>26119<SeP>3620";
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
  const incomingData = "8807<SeP>8092<SeP>715";
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
  const incomingData = "89<SeP>10<SeP>79<SeP>18";
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
  const incomingData = "111855<SeP>33653<SeP>78202<SeP>8812";
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
  const incomingData = "78202<SeP>43627<SeP>34575<SeP>4328";
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
  const incomingData = "34575<SeP>8456<SeP>26119<SeP>3620";
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
  const incomingData = "8807<SeP>8092<SeP>715";
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
  const incomingData = "89<SeP>10<SeP>79<SeP>18";
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
  const column1Data  = "IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP02 (<span class=blur>2.57.122.193</span>)<SeP>IP03 (<span class=blur>122.100.182.168</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>80.94.95.112</span>)<SeP>IP06 (<span class=blur>38.12.5.41</span>)<SeP>IP07 (<span class=blur>92.255.85.35</span>)<SeP>IP08 (<span class=blur>64.23.130.251</span>)<SeP>IP09 (<span class=blur>92.255.57.132</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)";
  const column2Data  = "AS207566<SeP>AS47890<SeP>AS4609<SeP>AS34534<SeP>AS204428<SeP>AS400619<SeP>AS207566<SeP>AS14061<SeP>AS207566<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  const column4Data  = "1364<SeP>1140<SeP>758<SeP>654<SeP>621<SeP>604<SeP>574<SeP>528<SeP>459<SeP>431";
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
  const column1Data  = "IP03 (<span class=blur>122.100.182.168</span>)<SeP>IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP07 (<span class=blur>92.255.85.35</span>)<SeP>IP13 (<span class=blur>126.62.95.172</span>)<SeP>IP14 (<span class=blur>218.92.0.226</span>)<SeP>IP15 (<span class=blur>218.92.0.230</span>)<SeP>IP16 (<span class=blur>218.92.0.216</span>)<SeP>IP17 (<span class=blur>218.92.0.223</span>)<SeP>IP18 (<span class=blur>218.92.0.237</span>)<SeP>IP19 (<span class=blur>185.32.14.85</span>)";
  const column2Data  = "AS4609<SeP>AS207566<SeP>AS207566<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS201863";
  const column3Data  = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-tr\u0022></span>\u00a0Türkiye";
  const column4Data  = "758<SeP>682<SeP>574<SeP>337<SeP>326<SeP>324<SeP>316<SeP>315<SeP>314<SeP>311";
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
  const column1Data  = "IP02 (<span class=blur>2.57.122.193</span>)<SeP>IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>80.94.95.112</span>)<SeP>IP06 (<span class=blur>38.12.5.41</span>)<SeP>IP08 (<span class=blur>64.23.130.251</span>)<SeP>IP09 (<span class=blur>92.255.57.132</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)<SeP>IP11 (<span class=blur>104.252.127.63</span>)<SeP>IP12 (<span class=blur>109.206.236.140</span>)";
  const column2Data  = "AS47890<SeP>AS207566<SeP>AS34534<SeP>AS204428<SeP>AS400619<SeP>AS14061<SeP>AS207566<SeP>AS56971<SeP>AS56971<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland";
  const column4Data  = "1136<SeP>682<SeP>642<SeP>621<SeP>602<SeP>527<SeP>458<SeP>430<SeP>382<SeP>381";
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
  const column1Data   = "IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP02 (<span class=blur>2.57.122.193</span>)<SeP>IP03 (<span class=blur>122.100.182.168</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>80.94.95.112</span>)<SeP>IP06 (<span class=blur>38.12.5.41</span>)<SeP>IP07 (<span class=blur>92.255.85.35</span>)<SeP>IP08 (<span class=blur>64.23.130.251</span>)<SeP>IP09 (<span class=blur>92.255.57.132</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)";
  const column2Data   = "AS207566<SeP>AS47890<SeP>AS4609<SeP>AS34534<SeP>AS204428<SeP>AS400619<SeP>AS207566<SeP>AS14061<SeP>AS207566<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "1364<SeP>1140<SeP>758<SeP>654<SeP>621<SeP>604<SeP>574<SeP>528<SeP>459<SeP>431";
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
  const column1Data   = "IP03 (<span class=blur>122.100.182.168</span>)<SeP>IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP07 (<span class=blur>92.255.85.35</span>)<SeP>IP13 (<span class=blur>126.62.95.172</span>)<SeP>IP14 (<span class=blur>218.92.0.226</span>)<SeP>IP15 (<span class=blur>218.92.0.230</span>)<SeP>IP16 (<span class=blur>218.92.0.216</span>)<SeP>IP17 (<span class=blur>218.92.0.223</span>)<SeP>IP18 (<span class=blur>218.92.0.237</span>)<SeP>IP19 (<span class=blur>185.32.14.85</span>)";
  const column2Data   = "AS4609<SeP>AS207566<SeP>AS207566<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS201863";
  const column3Data   = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-tr\u0022></span>\u00a0Türkiye";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "758<SeP>682<SeP>574<SeP>337<SeP>326<SeP>324<SeP>316<SeP>315<SeP>314<SeP>311";
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
  const column1Data   = "IP02 (<span class=blur>2.57.122.193</span>)<SeP>IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>80.94.95.112</span>)<SeP>IP06 (<span class=blur>38.12.5.41</span>)<SeP>IP08 (<span class=blur>64.23.130.251</span>)<SeP>IP09 (<span class=blur>92.255.57.132</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)<SeP>IP11 (<span class=blur>104.252.127.63</span>)<SeP>IP12 (<span class=blur>109.206.236.140</span>)";
  const column2Data   = "AS47890<SeP>AS207566<SeP>AS34534<SeP>AS204428<SeP>AS400619<SeP>AS14061<SeP>AS207566<SeP>AS56971<SeP>AS56971<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "1136<SeP>682<SeP>642<SeP>621<SeP>602<SeP>527<SeP>458<SeP>430<SeP>382<SeP>381";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>admin adminHW<SeP>root realtek<SeP>root root<SeP>root epon<SeP>admin hp.com<SeP>root Zxic521 ";
  const column3Data   = "6301<SeP>6228<SeP>1311<SeP>244<SeP>220<SeP>205<SeP>200<SeP>197<SeP>195<SeP>189";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b";
  const column2Data  = "6580<SeP>972<SeP>279<SeP>227<SeP>41<SeP>40<SeP>35<SeP>35<SeP>35<SeP>34";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
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
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://193.143.1.7<SeP>http://61.215.151.173<SeP>http://66.63.187.69<SeP>tftp://156.253.227.112<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>http://141.98.10.122<SeP>tftp://199.195.248.181";
  const column2Data  = "72<SeP>20<SeP>7<SeP>5<SeP>3<SeP>2<SeP>2<SeP>2<SeP>2<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "76855<SeP>35000";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>admin adminHW<SeP>root realtek<SeP>root root<SeP>root epon<SeP>admin hp.com<SeP>root Zxic521 ";
  const column3Data   = "6301<SeP>6228<SeP>1311<SeP>244<SeP>220<SeP>205<SeP>200<SeP>197<SeP>195<SeP>189";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b";
  const column2Data  = "6580<SeP>972<SeP>279<SeP>227<SeP>41<SeP>40<SeP>35<SeP>35<SeP>35<SeP>34";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
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
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://193.143.1.7<SeP>http://61.215.151.173<SeP>http://66.63.187.69<SeP>tftp://156.253.227.112<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>http://141.98.10.122<SeP>tftp://199.195.248.181";
  const column2Data  = "72<SeP>20<SeP>7<SeP>5<SeP>3<SeP>2<SeP>2<SeP>2<SeP>2<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "76855<SeP>35000";
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
        "name": "traffic between 2025-02-13 and 2025-03-14"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          16429,50
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
        "name": "scans between 2025-02-13 and 2025-03-14"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          11860,37,
          16429,50
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
        "name": "attacks between 2025-02-13 and 2025-03-14"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          4569,16,
          16429,50
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
        "name": "tráfico entre 2025-02-13 y 2025-03-14"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          16429,50
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
        "name": "escaneos entre 2025-02-13 y 2025-03-14"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          11860,37,
          16429,50
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
        "name": "ataques entre 2025-02-13 y 2025-03-14"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          4569,16,
          16429,50
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
  const labelsData       = "2025-02-13 00:00:00<SeP>2025-02-13 01:47:51<SeP>2025-02-13 03:35:42<SeP>2025-02-13 05:23:33<SeP>2025-02-13 07:11:24<SeP>2025-02-13 08:59:15<SeP>2025-02-13 10:47:06<SeP>2025-02-13 12:34:57<SeP>2025-02-13 14:22:48<SeP>2025-02-13 16:10:39<SeP>2025-02-13 17:58:30<SeP>2025-02-13 19:46:21<SeP>2025-02-13 21:34:12<SeP>2025-02-13 23:22:03<SeP>2025-02-14 01:09:54<SeP>2025-02-14 02:57:45<SeP>2025-02-14 04:45:36<SeP>2025-02-14 06:33:27<SeP>2025-02-14 08:21:18<SeP>2025-02-14 10:09:09<SeP>2025-02-14 11:57:00<SeP>2025-02-14 13:44:51<SeP>2025-02-14 15:32:42<SeP>2025-02-14 17:20:33<SeP>2025-02-14 19:08:24<SeP>2025-02-14 20:56:15<SeP>2025-02-14 22:44:06<SeP>2025-02-15 00:31:57<SeP>2025-02-15 02:19:48<SeP>2025-02-15 04:07:39<SeP>2025-02-15 05:55:30<SeP>2025-02-15 07:43:21<SeP>2025-02-15 09:31:12<SeP>2025-02-15 11:19:03<SeP>2025-02-15 13:06:54<SeP>2025-02-15 14:54:45<SeP>2025-02-15 16:42:36<SeP>2025-02-15 18:30:27<SeP>2025-02-15 20:18:18<SeP>2025-02-15 22:06:09<SeP>2025-02-15 23:54:00<SeP>2025-02-16 01:41:51<SeP>2025-02-16 03:29:42<SeP>2025-02-16 05:17:33<SeP>2025-02-16 07:05:24<SeP>2025-02-16 08:53:15<SeP>2025-02-16 10:41:06<SeP>2025-02-16 12:28:57<SeP>2025-02-16 14:16:48<SeP>2025-02-16 16:04:39<SeP>2025-02-16 17:52:30<SeP>2025-02-16 19:40:21<SeP>2025-02-16 21:28:12<SeP>2025-02-16 23:16:03<SeP>2025-02-17 01:03:54<SeP>2025-02-17 02:51:45<SeP>2025-02-17 04:39:36<SeP>2025-02-17 06:27:27<SeP>2025-02-17 08:15:18<SeP>2025-02-17 10:03:09<SeP>2025-02-17 11:51:00<SeP>2025-02-17 13:38:51<SeP>2025-02-17 15:26:42<SeP>2025-02-17 17:14:33<SeP>2025-02-17 19:02:24<SeP>2025-02-17 20:50:15<SeP>2025-02-17 22:38:06<SeP>2025-02-18 00:25:57<SeP>2025-02-18 02:13:48<SeP>2025-02-18 04:01:39<SeP>2025-02-18 05:49:30<SeP>2025-02-18 07:37:21<SeP>2025-02-18 09:25:12<SeP>2025-02-18 11:13:03<SeP>2025-02-18 13:00:54<SeP>2025-02-18 14:48:45<SeP>2025-02-18 16:36:36<SeP>2025-02-18 18:24:27<SeP>2025-02-18 20:12:18<SeP>2025-02-18 22:00:09<SeP>2025-02-18 23:48:00<SeP>2025-02-19 01:35:51<SeP>2025-02-19 03:23:42<SeP>2025-02-19 05:11:33<SeP>2025-02-19 06:59:24<SeP>2025-02-19 08:47:15<SeP>2025-02-19 10:35:06<SeP>2025-02-19 12:22:57<SeP>2025-02-19 14:10:48<SeP>2025-02-19 15:58:39<SeP>2025-02-19 17:46:30<SeP>2025-02-19 19:34:21<SeP>2025-02-19 21:22:12<SeP>2025-02-19 23:10:03<SeP>2025-02-20 00:57:54<SeP>2025-02-20 02:45:45<SeP>2025-02-20 04:33:36<SeP>2025-02-20 06:21:27<SeP>2025-02-20 08:09:18<SeP>2025-02-20 09:57:09<SeP>2025-02-20 11:45:00<SeP>2025-02-20 13:32:51<SeP>2025-02-20 15:20:42<SeP>2025-02-20 17:08:33<SeP>2025-02-20 18:56:24<SeP>2025-02-20 20:44:15<SeP>2025-02-20 22:32:06<SeP>2025-02-21 00:19:57<SeP>2025-02-21 02:07:48<SeP>2025-02-21 03:55:39<SeP>2025-02-21 05:43:30<SeP>2025-02-21 07:31:21<SeP>2025-02-21 09:19:12<SeP>2025-02-21 11:07:03<SeP>2025-02-21 12:54:54<SeP>2025-02-21 14:42:45<SeP>2025-02-21 16:30:36<SeP>2025-02-21 18:18:27<SeP>2025-02-21 20:06:18<SeP>2025-02-21 21:54:09<SeP>2025-02-21 23:42:00<SeP>2025-02-22 01:29:51<SeP>2025-02-22 03:17:42<SeP>2025-02-22 05:05:33<SeP>2025-02-22 06:53:24<SeP>2025-02-22 08:41:15<SeP>2025-02-22 10:29:06<SeP>2025-02-22 12:16:57<SeP>2025-02-22 14:04:48<SeP>2025-02-22 15:52:39<SeP>2025-02-22 17:40:30<SeP>2025-02-22 19:28:21<SeP>2025-02-22 21:16:12<SeP>2025-02-22 23:04:03<SeP>2025-02-23 00:51:54<SeP>2025-02-23 02:39:45<SeP>2025-02-23 04:27:36<SeP>2025-02-23 06:15:27<SeP>2025-02-23 08:03:18<SeP>2025-02-23 09:51:09<SeP>2025-02-23 11:39:00<SeP>2025-02-23 13:26:51<SeP>2025-02-23 15:14:42<SeP>2025-02-23 17:02:33<SeP>2025-02-23 18:50:24<SeP>2025-02-23 20:38:15<SeP>2025-02-23 22:26:06<SeP>2025-02-24 00:13:57<SeP>2025-02-24 02:01:48<SeP>2025-02-24 03:49:39<SeP>2025-02-24 05:37:30<SeP>2025-02-24 07:25:21<SeP>2025-02-24 09:13:12<SeP>2025-02-24 11:01:03<SeP>2025-02-24 12:48:54<SeP>2025-02-24 14:36:45<SeP>2025-02-24 16:24:36<SeP>2025-02-24 18:12:27<SeP>2025-02-24 20:00:18<SeP>2025-02-24 21:48:09<SeP>2025-02-24 23:36:00<SeP>2025-02-25 01:23:51<SeP>2025-02-25 03:11:42<SeP>2025-02-25 04:59:33<SeP>2025-02-25 06:47:24<SeP>2025-02-25 08:35:15<SeP>2025-02-25 10:23:06<SeP>2025-02-25 12:10:57<SeP>2025-02-25 13:58:48<SeP>2025-02-25 15:46:39<SeP>2025-02-25 17:34:30<SeP>2025-02-25 19:22:21<SeP>2025-02-25 21:10:12<SeP>2025-02-25 22:58:03<SeP>2025-02-26 00:45:54<SeP>2025-02-26 02:33:45<SeP>2025-02-26 04:21:36<SeP>2025-02-26 06:09:27<SeP>2025-02-26 07:57:18<SeP>2025-02-26 09:45:09<SeP>2025-02-26 11:33:00<SeP>2025-02-26 13:20:51<SeP>2025-02-26 15:08:42<SeP>2025-02-26 16:56:33<SeP>2025-02-26 18:44:24<SeP>2025-02-26 20:32:15<SeP>2025-02-26 22:20:06<SeP>2025-02-27 00:07:57<SeP>2025-02-27 01:55:48<SeP>2025-02-27 03:43:39<SeP>2025-02-27 05:31:30<SeP>2025-02-27 07:19:21<SeP>2025-02-27 09:07:12<SeP>2025-02-27 10:55:03<SeP>2025-02-27 12:42:54<SeP>2025-02-27 14:30:45<SeP>2025-02-27 16:18:36<SeP>2025-02-27 18:06:27<SeP>2025-02-27 19:54:18<SeP>2025-02-27 21:42:09<SeP>2025-02-27 23:30:00<SeP>2025-02-28 01:17:51<SeP>2025-02-28 03:05:42<SeP>2025-02-28 04:53:33<SeP>2025-02-28 06:41:24<SeP>2025-02-28 08:29:15<SeP>2025-02-28 10:17:06<SeP>2025-02-28 12:04:57<SeP>2025-02-28 13:52:48<SeP>2025-02-28 15:40:39<SeP>2025-02-28 17:28:30<SeP>2025-02-28 19:16:21<SeP>2025-02-28 21:04:12<SeP>2025-02-28 22:52:03<SeP>2025-03-01 00:39:54<SeP>2025-03-01 02:27:45<SeP>2025-03-01 04:15:36<SeP>2025-03-01 06:03:27<SeP>2025-03-01 07:51:18<SeP>2025-03-01 09:39:09<SeP>2025-03-01 11:27:00<SeP>2025-03-01 13:14:51<SeP>2025-03-01 15:02:42<SeP>2025-03-01 16:50:33<SeP>2025-03-01 18:38:24<SeP>2025-03-01 20:26:15<SeP>2025-03-01 22:14:06<SeP>2025-03-02 00:01:57<SeP>2025-03-02 01:49:48<SeP>2025-03-02 03:37:39<SeP>2025-03-02 05:25:30<SeP>2025-03-02 07:13:21<SeP>2025-03-02 09:01:12<SeP>2025-03-02 10:49:03<SeP>2025-03-02 12:36:54<SeP>2025-03-02 14:24:45<SeP>2025-03-02 16:12:36<SeP>2025-03-02 18:00:27<SeP>2025-03-02 19:48:18<SeP>2025-03-02 21:36:09<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:11:51<SeP>2025-03-03 02:59:42<SeP>2025-03-03 04:47:33<SeP>2025-03-03 06:35:24<SeP>2025-03-03 08:23:15<SeP>2025-03-03 10:11:06<SeP>2025-03-03 11:58:57<SeP>2025-03-03 13:46:48<SeP>2025-03-03 15:34:39<SeP>2025-03-03 17:22:30<SeP>2025-03-03 19:10:21<SeP>2025-03-03 20:58:12<SeP>2025-03-03 22:46:03<SeP>2025-03-04 00:33:54<SeP>2025-03-04 02:21:45<SeP>2025-03-04 04:09:36<SeP>2025-03-04 05:57:27<SeP>2025-03-04 07:45:18<SeP>2025-03-04 09:33:09<SeP>2025-03-04 11:21:00<SeP>2025-03-04 13:08:51<SeP>2025-03-04 14:56:42<SeP>2025-03-04 16:44:33<SeP>2025-03-04 18:32:24<SeP>2025-03-04 20:20:15<SeP>2025-03-04 22:08:06<SeP>2025-03-04 23:55:57<SeP>2025-03-05 01:43:48<SeP>2025-03-05 03:31:39<SeP>2025-03-05 05:19:30<SeP>2025-03-05 07:07:21<SeP>2025-03-05 08:55:12<SeP>2025-03-05 10:43:03<SeP>2025-03-05 12:30:54<SeP>2025-03-05 14:18:45<SeP>2025-03-05 16:06:36<SeP>2025-03-05 17:54:27<SeP>2025-03-05 19:42:18<SeP>2025-03-05 21:30:09<SeP>2025-03-05 23:18:00<SeP>2025-03-06 01:05:51<SeP>2025-03-06 02:53:42<SeP>2025-03-06 04:41:33<SeP>2025-03-06 06:29:24<SeP>2025-03-06 08:17:15<SeP>2025-03-06 10:05:06<SeP>2025-03-06 11:52:57<SeP>2025-03-06 13:40:48<SeP>2025-03-06 15:28:39<SeP>2025-03-06 17:16:30<SeP>2025-03-06 19:04:21<SeP>2025-03-06 20:52:12<SeP>2025-03-06 22:40:03<SeP>2025-03-07 00:27:54<SeP>2025-03-07 02:15:45<SeP>2025-03-07 04:03:36<SeP>2025-03-07 05:51:27<SeP>2025-03-07 07:39:18<SeP>2025-03-07 09:27:09<SeP>2025-03-07 11:15:00<SeP>2025-03-07 13:02:51<SeP>2025-03-07 14:50:42<SeP>2025-03-07 16:38:33<SeP>2025-03-07 18:26:24<SeP>2025-03-07 20:14:15<SeP>2025-03-07 22:02:06<SeP>2025-03-07 23:49:57<SeP>2025-03-08 01:37:48<SeP>2025-03-08 03:25:39<SeP>2025-03-08 05:13:30<SeP>2025-03-08 07:01:21<SeP>2025-03-08 08:49:12<SeP>2025-03-08 10:37:03<SeP>2025-03-08 12:24:54<SeP>2025-03-08 14:12:45<SeP>2025-03-08 16:00:36<SeP>2025-03-08 17:48:27<SeP>2025-03-08 19:36:18<SeP>2025-03-08 21:24:09<SeP>2025-03-08 23:12:00<SeP>2025-03-09 00:59:51<SeP>2025-03-09 03:47:42<SeP>2025-03-09 05:35:33<SeP>2025-03-09 07:23:24<SeP>2025-03-09 09:11:15<SeP>2025-03-09 10:59:06<SeP>2025-03-09 12:46:57<SeP>2025-03-09 14:34:48<SeP>2025-03-09 16:22:39<SeP>2025-03-09 18:10:30<SeP>2025-03-09 19:58:21<SeP>2025-03-09 21:46:12<SeP>2025-03-09 23:34:03<SeP>2025-03-10 01:21:54<SeP>2025-03-10 03:09:45<SeP>2025-03-10 04:57:36<SeP>2025-03-10 06:45:27<SeP>2025-03-10 08:33:18<SeP>2025-03-10 10:21:09<SeP>2025-03-10 12:09:00<SeP>2025-03-10 13:56:51<SeP>2025-03-10 15:44:42<SeP>2025-03-10 17:32:33<SeP>2025-03-10 19:20:24<SeP>2025-03-10 21:08:15<SeP>2025-03-10 22:56:06<SeP>2025-03-11 00:43:57<SeP>2025-03-11 02:31:48<SeP>2025-03-11 04:19:39<SeP>2025-03-11 06:07:30<SeP>2025-03-11 07:55:21<SeP>2025-03-11 09:43:12<SeP>2025-03-11 11:31:03<SeP>2025-03-11 13:18:54<SeP>2025-03-11 15:06:45<SeP>2025-03-11 16:54:36<SeP>2025-03-11 18:42:27<SeP>2025-03-11 20:30:18<SeP>2025-03-11 22:18:09<SeP>2025-03-12 00:06:00<SeP>2025-03-12 01:53:51<SeP>2025-03-12 03:41:42<SeP>2025-03-12 05:29:33<SeP>2025-03-12 07:17:24<SeP>2025-03-12 09:05:15<SeP>2025-03-12 10:53:06<SeP>2025-03-12 12:40:57<SeP>2025-03-12 14:28:48<SeP>2025-03-12 16:16:39<SeP>2025-03-12 18:04:30<SeP>2025-03-12 19:52:21<SeP>2025-03-12 21:40:12<SeP>2025-03-12 23:28:03<SeP>2025-03-13 01:15:54<SeP>2025-03-13 03:03:45<SeP>2025-03-13 04:51:36<SeP>2025-03-13 06:39:27<SeP>2025-03-13 08:27:18<SeP>2025-03-13 10:15:09<SeP>2025-03-13 12:03:00<SeP>2025-03-13 13:50:51<SeP>2025-03-13 15:38:42<SeP>2025-03-13 17:26:33<SeP>2025-03-13 19:14:24<SeP>2025-03-13 21:02:15<SeP>2025-03-13 22:50:06<SeP>2025-03-14 00:37:57<SeP>2025-03-14 02:25:48<SeP>2025-03-14 04:13:39<SeP>2025-03-14 06:01:30<SeP>2025-03-14 07:49:21<SeP>2025-03-14 09:37:12<SeP>2025-03-14 11:25:03<SeP>2025-03-14 13:12:54<SeP>2025-03-14 15:00:45<SeP>2025-03-14 16:48:36<SeP>2025-03-14 18:36:27<SeP>2025-03-14 20:24:18<SeP>2025-03-14 22:12:09";
  const item1Label       = "Scans";
  const item1Data        = "112<SeP>100<SeP>117<SeP>41<SeP>69<SeP>83<SeP>166<SeP>69<SeP>129<SeP>26<SeP>77<SeP>121<SeP>45<SeP>82<SeP>75<SeP>99<SeP>135<SeP>111<SeP>178<SeP>97<SeP>51<SeP>48<SeP>89<SeP>41<SeP>86<SeP>106<SeP>108<SeP>70<SeP>74<SeP>71<SeP>132<SeP>169<SeP>126<SeP>102<SeP>64<SeP>36<SeP>77<SeP>44<SeP>151<SeP>72<SeP>62<SeP>52<SeP>73<SeP>62<SeP>144<SeP>58<SeP>77<SeP>90<SeP>37<SeP>83<SeP>75<SeP>130<SeP>105<SeP>95<SeP>74<SeP>66<SeP>62<SeP>84<SeP>68<SeP>108<SeP>70<SeP>57<SeP>21<SeP>56<SeP>50<SeP>158<SeP>82<SeP>101<SeP>86<SeP>90<SeP>97<SeP>153<SeP>67<SeP>70<SeP>93<SeP>86<SeP>32<SeP>40<SeP>95<SeP>58<SeP>48<SeP>68<SeP>124<SeP>56<SeP>197<SeP>84<SeP>69<SeP>63<SeP>58<SeP>55<SeP>68<SeP>84<SeP>83<SeP>105<SeP>59<SeP>77<SeP>116<SeP>62<SeP>78<SeP>152<SeP>57<SeP>62<SeP>56<SeP>42<SeP>64<SeP>92<SeP>88<SeP>75<SeP>73<SeP>162<SeP>63<SeP>109<SeP>51<SeP>62<SeP>48<SeP>101<SeP>76<SeP>65<SeP>116<SeP>89<SeP>93<SeP>79<SeP>89<SeP>132<SeP>59<SeP>50<SeP>29<SeP>48<SeP>111<SeP>54<SeP>54<SeP>90<SeP>86<SeP>50<SeP>86<SeP>100<SeP>123<SeP>79<SeP>34<SeP>28<SeP>59<SeP>63<SeP>193<SeP>131<SeP>63<SeP>67<SeP>119<SeP>53<SeP>57<SeP>95<SeP>91<SeP>182<SeP>75<SeP>48<SeP>99<SeP>100<SeP>65<SeP>78<SeP>80<SeP>116<SeP>112<SeP>66<SeP>101<SeP>76<SeP>77<SeP>82<SeP>63<SeP>70<SeP>83<SeP>123<SeP>54<SeP>137<SeP>78<SeP>96<SeP>139<SeP>53<SeP>82<SeP>155<SeP>45<SeP>65<SeP>126<SeP>119<SeP>75<SeP>191<SeP>68<SeP>145<SeP>56<SeP>76<SeP>60<SeP>83<SeP>87<SeP>70<SeP>60<SeP>57<SeP>72<SeP>51<SeP>86<SeP>38<SeP>104<SeP>93<SeP>111<SeP>69<SeP>74<SeP>98<SeP>37<SeP>50<SeP>96<SeP>46<SeP>50<SeP>55<SeP>77<SeP>87<SeP>62<SeP>110<SeP>49<SeP>73<SeP>42<SeP>34<SeP>231<SeP>86<SeP>41<SeP>81<SeP>59<SeP>91<SeP>84<SeP>45<SeP>41<SeP>114<SeP>134<SeP>80<SeP>45<SeP>46<SeP>91<SeP>51<SeP>40<SeP>67<SeP>90<SeP>125<SeP>65<SeP>61<SeP>110<SeP>63<SeP>67<SeP>27<SeP>24<SeP>56<SeP>32<SeP>45<SeP>102<SeP>71<SeP>58<SeP>58<SeP>89<SeP>262<SeP>50<SeP>28<SeP>66<SeP>64<SeP>117<SeP>139<SeP>64<SeP>50<SeP>72<SeP>147<SeP>87<SeP>96<SeP>66<SeP>105<SeP>31<SeP>96<SeP>41<SeP>34<SeP>42<SeP>74<SeP>53<SeP>91<SeP>70<SeP>140<SeP>106<SeP>56<SeP>67<SeP>56<SeP>47<SeP>80<SeP>82<SeP>127<SeP>40<SeP>80<SeP>195<SeP>40<SeP>64<SeP>51<SeP>67<SeP>161<SeP>361<SeP>33<SeP>45<SeP>17<SeP>49<SeP>37<SeP>46<SeP>64<SeP>112<SeP>170<SeP>95<SeP>57<SeP>363<SeP>58<SeP>70<SeP>285<SeP>140<SeP>196<SeP>50<SeP>53<SeP>55<SeP>65<SeP>68<SeP>45<SeP>52<SeP>63<SeP>21<SeP>37<SeP>83<SeP>90<SeP>52<SeP>78<SeP>46<SeP>57<SeP>55<SeP>32<SeP>26<SeP>41<SeP>114<SeP>28<SeP>35<SeP>815<SeP>71<SeP>88<SeP>113<SeP>111<SeP>93<SeP>68<SeP>25<SeP>30<SeP>41<SeP>178<SeP>77<SeP>96<SeP>66<SeP>117<SeP>31<SeP>24<SeP>55<SeP>107<SeP>145<SeP>35<SeP>53<SeP>65<SeP>54<SeP>66<SeP>86<SeP>43<SeP>105<SeP>69<SeP>78<SeP>65<SeP>104<SeP>50<SeP>90<SeP>130<SeP>121<SeP>109<SeP>115<SeP>95<SeP>62<SeP>73<SeP>51<SeP>79<SeP>65<SeP>150<SeP>105<SeP>79<SeP>47<SeP>76<SeP>61<SeP>75<SeP>96<SeP>95<SeP>63<SeP>82<SeP>92<SeP>82<SeP>51<SeP>54<SeP>51<SeP>82<SeP>159<SeP>78<SeP>228<SeP>140";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "59<SeP>46<SeP>622<SeP>20<SeP>329<SeP>110<SeP>265<SeP>161<SeP>567<SeP>615<SeP>104<SeP>571<SeP>229<SeP>86<SeP>257<SeP>189<SeP>480<SeP>278<SeP>240<SeP>332<SeP>132<SeP>295<SeP>348<SeP>117<SeP>408<SeP>158<SeP>154<SeP>114<SeP>206<SeP>116<SeP>748<SeP>69<SeP>196<SeP>170<SeP>217<SeP>89<SeP>40<SeP>169<SeP>408<SeP>128<SeP>148<SeP>62<SeP>33<SeP>170<SeP>400<SeP>183<SeP>148<SeP>168<SeP>328<SeP>164<SeP>323<SeP>533<SeP>101<SeP>348<SeP>226<SeP>315<SeP>211<SeP>304<SeP>390<SeP>124<SeP>386<SeP>173<SeP>35<SeP>278<SeP>388<SeP>17<SeP>145<SeP>341<SeP>363<SeP>97<SeP>400<SeP>98<SeP>88<SeP>336<SeP>145<SeP>249<SeP>260<SeP>215<SeP>193<SeP>28<SeP>252<SeP>121<SeP>409<SeP>273<SeP>47<SeP>81<SeP>90<SeP>49<SeP>75<SeP>173<SeP>316<SeP>206<SeP>157<SeP>136<SeP>244<SeP>190<SeP>118<SeP>49<SeP>174<SeP>9<SeP>28<SeP>261<SeP>216<SeP>244<SeP>699<SeP>535<SeP>243<SeP>765<SeP>305<SeP>607<SeP>183<SeP>411<SeP>369<SeP>492<SeP>435<SeP>287<SeP>503<SeP>1074<SeP>601<SeP>879<SeP>344<SeP>327<SeP>207<SeP>293<SeP>379<SeP>900<SeP>446<SeP>471<SeP>562<SeP>202<SeP>513<SeP>744<SeP>496<SeP>589<SeP>226<SeP>696<SeP>543<SeP>412<SeP>337<SeP>389<SeP>799<SeP>537<SeP>579<SeP>422<SeP>191<SeP>87<SeP>331<SeP>81<SeP>198<SeP>298<SeP>345<SeP>58<SeP>260<SeP>202<SeP>64<SeP>96<SeP>219<SeP>266<SeP>221<SeP>263<SeP>122<SeP>457<SeP>116<SeP>74<SeP>276<SeP>108<SeP>429<SeP>317<SeP>168<SeP>148<SeP>199<SeP>45<SeP>132<SeP>173<SeP>73<SeP>33<SeP>279<SeP>156<SeP>64<SeP>224<SeP>44<SeP>93<SeP>63<SeP>75<SeP>126<SeP>321<SeP>120<SeP>338<SeP>69<SeP>269<SeP>466<SeP>167<SeP>157<SeP>158<SeP>127<SeP>313<SeP>39<SeP>42<SeP>88<SeP>113<SeP>201<SeP>182<SeP>122<SeP>279<SeP>128<SeP>200<SeP>302<SeP>129<SeP>307<SeP>58<SeP>61<SeP>45<SeP>52<SeP>135<SeP>28<SeP>19<SeP>86<SeP>64<SeP>59<SeP>88<SeP>42<SeP>194<SeP>109<SeP>103<SeP>46<SeP>215<SeP>78<SeP>381<SeP>214<SeP>117<SeP>19<SeP>313<SeP>22<SeP>20<SeP>139<SeP>142<SeP>83<SeP>31<SeP>166<SeP>77<SeP>110<SeP>142<SeP>230<SeP>52<SeP>89<SeP>49<SeP>38<SeP>175<SeP>325<SeP>74<SeP>93<SeP>39<SeP>134<SeP>195<SeP>37<SeP>212<SeP>273<SeP>30<SeP>21<SeP>206<SeP>131<SeP>25<SeP>97<SeP>31<SeP>97<SeP>45<SeP>304<SeP>143<SeP>138<SeP>39<SeP>112<SeP>73<SeP>37<SeP>35<SeP>33<SeP>278<SeP>89<SeP>86<SeP>145<SeP>169<SeP>89<SeP>32<SeP>83<SeP>181<SeP>76<SeP>172<SeP>100<SeP>66<SeP>76<SeP>124<SeP>27<SeP>168<SeP>87<SeP>118<SeP>174<SeP>43<SeP>240<SeP>513<SeP>103<SeP>109<SeP>183<SeP>36<SeP>38<SeP>82<SeP>91<SeP>81<SeP>117<SeP>72<SeP>231<SeP>38<SeP>15<SeP>12<SeP>234<SeP>68<SeP>76<SeP>16<SeP>25<SeP>21<SeP>95<SeP>285<SeP>38<SeP>160<SeP>115<SeP>11<SeP>19<SeP>39<SeP>93<SeP>54<SeP>250<SeP>85<SeP>25<SeP>33<SeP>267<SeP>317<SeP>342<SeP>592<SeP>33<SeP>52<SeP>116<SeP>40<SeP>122<SeP>61<SeP>116<SeP>31<SeP>76<SeP>403<SeP>296<SeP>63<SeP>121<SeP>30<SeP>221<SeP>32<SeP>31<SeP>181<SeP>161<SeP>483<SeP>83<SeP>42<SeP>48<SeP>197<SeP>65<SeP>173<SeP>18<SeP>89<SeP>71<SeP>153<SeP>164<SeP>164<SeP>135<SeP>378<SeP>117<SeP>172<SeP>183<SeP>165<SeP>214<SeP>140<SeP>152<SeP>136<SeP>98<SeP>184<SeP>153<SeP>395<SeP>155<SeP>117<SeP>130<SeP>54<SeP>324<SeP>132<SeP>50<SeP>30<SeP>146<SeP>213<SeP>119<SeP>249<SeP>158<SeP>391<SeP>187<SeP>100<SeP>37<SeP>92";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-13 00:00:00<SeP>2025-02-13 01:47:51<SeP>2025-02-13 03:35:42<SeP>2025-02-13 05:23:33<SeP>2025-02-13 07:11:24<SeP>2025-02-13 08:59:15<SeP>2025-02-13 10:47:06<SeP>2025-02-13 12:34:57<SeP>2025-02-13 14:22:48<SeP>2025-02-13 16:10:39<SeP>2025-02-13 17:58:30<SeP>2025-02-13 19:46:21<SeP>2025-02-13 21:34:12<SeP>2025-02-13 23:22:03<SeP>2025-02-14 01:09:54<SeP>2025-02-14 02:57:45<SeP>2025-02-14 04:45:36<SeP>2025-02-14 06:33:27<SeP>2025-02-14 08:21:18<SeP>2025-02-14 10:09:09<SeP>2025-02-14 11:57:00<SeP>2025-02-14 13:44:51<SeP>2025-02-14 15:32:42<SeP>2025-02-14 17:20:33<SeP>2025-02-14 19:08:24<SeP>2025-02-14 20:56:15<SeP>2025-02-14 22:44:06<SeP>2025-02-15 00:31:57<SeP>2025-02-15 02:19:48<SeP>2025-02-15 04:07:39<SeP>2025-02-15 05:55:30<SeP>2025-02-15 07:43:21<SeP>2025-02-15 09:31:12<SeP>2025-02-15 11:19:03<SeP>2025-02-15 13:06:54<SeP>2025-02-15 14:54:45<SeP>2025-02-15 16:42:36<SeP>2025-02-15 18:30:27<SeP>2025-02-15 20:18:18<SeP>2025-02-15 22:06:09<SeP>2025-02-15 23:54:00<SeP>2025-02-16 01:41:51<SeP>2025-02-16 03:29:42<SeP>2025-02-16 05:17:33<SeP>2025-02-16 07:05:24<SeP>2025-02-16 08:53:15<SeP>2025-02-16 10:41:06<SeP>2025-02-16 12:28:57<SeP>2025-02-16 14:16:48<SeP>2025-02-16 16:04:39<SeP>2025-02-16 17:52:30<SeP>2025-02-16 19:40:21<SeP>2025-02-16 21:28:12<SeP>2025-02-16 23:16:03<SeP>2025-02-17 01:03:54<SeP>2025-02-17 02:51:45<SeP>2025-02-17 04:39:36<SeP>2025-02-17 06:27:27<SeP>2025-02-17 08:15:18<SeP>2025-02-17 10:03:09<SeP>2025-02-17 11:51:00<SeP>2025-02-17 13:38:51<SeP>2025-02-17 15:26:42<SeP>2025-02-17 17:14:33<SeP>2025-02-17 19:02:24<SeP>2025-02-17 20:50:15<SeP>2025-02-17 22:38:06<SeP>2025-02-18 00:25:57<SeP>2025-02-18 02:13:48<SeP>2025-02-18 04:01:39<SeP>2025-02-18 05:49:30<SeP>2025-02-18 07:37:21<SeP>2025-02-18 09:25:12<SeP>2025-02-18 11:13:03<SeP>2025-02-18 13:00:54<SeP>2025-02-18 14:48:45<SeP>2025-02-18 16:36:36<SeP>2025-02-18 18:24:27<SeP>2025-02-18 20:12:18<SeP>2025-02-18 22:00:09<SeP>2025-02-18 23:48:00<SeP>2025-02-19 01:35:51<SeP>2025-02-19 03:23:42<SeP>2025-02-19 05:11:33<SeP>2025-02-19 06:59:24<SeP>2025-02-19 08:47:15<SeP>2025-02-19 10:35:06<SeP>2025-02-19 12:22:57<SeP>2025-02-19 14:10:48<SeP>2025-02-19 15:58:39<SeP>2025-02-19 17:46:30<SeP>2025-02-19 19:34:21<SeP>2025-02-19 21:22:12<SeP>2025-02-19 23:10:03<SeP>2025-02-20 00:57:54<SeP>2025-02-20 02:45:45<SeP>2025-02-20 04:33:36<SeP>2025-02-20 06:21:27<SeP>2025-02-20 08:09:18<SeP>2025-02-20 09:57:09<SeP>2025-02-20 11:45:00<SeP>2025-02-20 13:32:51<SeP>2025-02-20 15:20:42<SeP>2025-02-20 17:08:33<SeP>2025-02-20 18:56:24<SeP>2025-02-20 20:44:15<SeP>2025-02-20 22:32:06<SeP>2025-02-21 00:19:57<SeP>2025-02-21 02:07:48<SeP>2025-02-21 03:55:39<SeP>2025-02-21 05:43:30<SeP>2025-02-21 07:31:21<SeP>2025-02-21 09:19:12<SeP>2025-02-21 11:07:03<SeP>2025-02-21 12:54:54<SeP>2025-02-21 14:42:45<SeP>2025-02-21 16:30:36<SeP>2025-02-21 18:18:27<SeP>2025-02-21 20:06:18<SeP>2025-02-21 21:54:09<SeP>2025-02-21 23:42:00<SeP>2025-02-22 01:29:51<SeP>2025-02-22 03:17:42<SeP>2025-02-22 05:05:33<SeP>2025-02-22 06:53:24<SeP>2025-02-22 08:41:15<SeP>2025-02-22 10:29:06<SeP>2025-02-22 12:16:57<SeP>2025-02-22 14:04:48<SeP>2025-02-22 15:52:39<SeP>2025-02-22 17:40:30<SeP>2025-02-22 19:28:21<SeP>2025-02-22 21:16:12<SeP>2025-02-22 23:04:03<SeP>2025-02-23 00:51:54<SeP>2025-02-23 02:39:45<SeP>2025-02-23 04:27:36<SeP>2025-02-23 06:15:27<SeP>2025-02-23 08:03:18<SeP>2025-02-23 09:51:09<SeP>2025-02-23 11:39:00<SeP>2025-02-23 13:26:51<SeP>2025-02-23 15:14:42<SeP>2025-02-23 17:02:33<SeP>2025-02-23 18:50:24<SeP>2025-02-23 20:38:15<SeP>2025-02-23 22:26:06<SeP>2025-02-24 00:13:57<SeP>2025-02-24 02:01:48<SeP>2025-02-24 03:49:39<SeP>2025-02-24 05:37:30<SeP>2025-02-24 07:25:21<SeP>2025-02-24 09:13:12<SeP>2025-02-24 11:01:03<SeP>2025-02-24 12:48:54<SeP>2025-02-24 14:36:45<SeP>2025-02-24 16:24:36<SeP>2025-02-24 18:12:27<SeP>2025-02-24 20:00:18<SeP>2025-02-24 21:48:09<SeP>2025-02-24 23:36:00<SeP>2025-02-25 01:23:51<SeP>2025-02-25 03:11:42<SeP>2025-02-25 04:59:33<SeP>2025-02-25 06:47:24<SeP>2025-02-25 08:35:15<SeP>2025-02-25 10:23:06<SeP>2025-02-25 12:10:57<SeP>2025-02-25 13:58:48<SeP>2025-02-25 15:46:39<SeP>2025-02-25 17:34:30<SeP>2025-02-25 19:22:21<SeP>2025-02-25 21:10:12<SeP>2025-02-25 22:58:03<SeP>2025-02-26 00:45:54<SeP>2025-02-26 02:33:45<SeP>2025-02-26 04:21:36<SeP>2025-02-26 06:09:27<SeP>2025-02-26 07:57:18<SeP>2025-02-26 09:45:09<SeP>2025-02-26 11:33:00<SeP>2025-02-26 13:20:51<SeP>2025-02-26 15:08:42<SeP>2025-02-26 16:56:33<SeP>2025-02-26 18:44:24<SeP>2025-02-26 20:32:15<SeP>2025-02-26 22:20:06<SeP>2025-02-27 00:07:57<SeP>2025-02-27 01:55:48<SeP>2025-02-27 03:43:39<SeP>2025-02-27 05:31:30<SeP>2025-02-27 07:19:21<SeP>2025-02-27 09:07:12<SeP>2025-02-27 10:55:03<SeP>2025-02-27 12:42:54<SeP>2025-02-27 14:30:45<SeP>2025-02-27 16:18:36<SeP>2025-02-27 18:06:27<SeP>2025-02-27 19:54:18<SeP>2025-02-27 21:42:09<SeP>2025-02-27 23:30:00<SeP>2025-02-28 01:17:51<SeP>2025-02-28 03:05:42<SeP>2025-02-28 04:53:33<SeP>2025-02-28 06:41:24<SeP>2025-02-28 08:29:15<SeP>2025-02-28 10:17:06<SeP>2025-02-28 12:04:57<SeP>2025-02-28 13:52:48<SeP>2025-02-28 15:40:39<SeP>2025-02-28 17:28:30<SeP>2025-02-28 19:16:21<SeP>2025-02-28 21:04:12<SeP>2025-02-28 22:52:03<SeP>2025-03-01 00:39:54<SeP>2025-03-01 02:27:45<SeP>2025-03-01 04:15:36<SeP>2025-03-01 06:03:27<SeP>2025-03-01 07:51:18<SeP>2025-03-01 09:39:09<SeP>2025-03-01 11:27:00<SeP>2025-03-01 13:14:51<SeP>2025-03-01 15:02:42<SeP>2025-03-01 16:50:33<SeP>2025-03-01 18:38:24<SeP>2025-03-01 20:26:15<SeP>2025-03-01 22:14:06<SeP>2025-03-02 00:01:57<SeP>2025-03-02 01:49:48<SeP>2025-03-02 03:37:39<SeP>2025-03-02 05:25:30<SeP>2025-03-02 07:13:21<SeP>2025-03-02 09:01:12<SeP>2025-03-02 10:49:03<SeP>2025-03-02 12:36:54<SeP>2025-03-02 14:24:45<SeP>2025-03-02 16:12:36<SeP>2025-03-02 18:00:27<SeP>2025-03-02 19:48:18<SeP>2025-03-02 21:36:09<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:11:51<SeP>2025-03-03 02:59:42<SeP>2025-03-03 04:47:33<SeP>2025-03-03 06:35:24<SeP>2025-03-03 08:23:15<SeP>2025-03-03 10:11:06<SeP>2025-03-03 11:58:57<SeP>2025-03-03 13:46:48<SeP>2025-03-03 15:34:39<SeP>2025-03-03 17:22:30<SeP>2025-03-03 19:10:21<SeP>2025-03-03 20:58:12<SeP>2025-03-03 22:46:03<SeP>2025-03-04 00:33:54<SeP>2025-03-04 02:21:45<SeP>2025-03-04 04:09:36<SeP>2025-03-04 05:57:27<SeP>2025-03-04 07:45:18<SeP>2025-03-04 09:33:09<SeP>2025-03-04 11:21:00<SeP>2025-03-04 13:08:51<SeP>2025-03-04 14:56:42<SeP>2025-03-04 16:44:33<SeP>2025-03-04 18:32:24<SeP>2025-03-04 20:20:15<SeP>2025-03-04 22:08:06<SeP>2025-03-04 23:55:57<SeP>2025-03-05 01:43:48<SeP>2025-03-05 03:31:39<SeP>2025-03-05 05:19:30<SeP>2025-03-05 07:07:21<SeP>2025-03-05 08:55:12<SeP>2025-03-05 10:43:03<SeP>2025-03-05 12:30:54<SeP>2025-03-05 14:18:45<SeP>2025-03-05 16:06:36<SeP>2025-03-05 17:54:27<SeP>2025-03-05 19:42:18<SeP>2025-03-05 21:30:09<SeP>2025-03-05 23:18:00<SeP>2025-03-06 01:05:51<SeP>2025-03-06 02:53:42<SeP>2025-03-06 04:41:33<SeP>2025-03-06 06:29:24<SeP>2025-03-06 08:17:15<SeP>2025-03-06 10:05:06<SeP>2025-03-06 11:52:57<SeP>2025-03-06 13:40:48<SeP>2025-03-06 15:28:39<SeP>2025-03-06 17:16:30<SeP>2025-03-06 19:04:21<SeP>2025-03-06 20:52:12<SeP>2025-03-06 22:40:03<SeP>2025-03-07 00:27:54<SeP>2025-03-07 02:15:45<SeP>2025-03-07 04:03:36<SeP>2025-03-07 05:51:27<SeP>2025-03-07 07:39:18<SeP>2025-03-07 09:27:09<SeP>2025-03-07 11:15:00<SeP>2025-03-07 13:02:51<SeP>2025-03-07 14:50:42<SeP>2025-03-07 16:38:33<SeP>2025-03-07 18:26:24<SeP>2025-03-07 20:14:15<SeP>2025-03-07 22:02:06<SeP>2025-03-07 23:49:57<SeP>2025-03-08 01:37:48<SeP>2025-03-08 03:25:39<SeP>2025-03-08 05:13:30<SeP>2025-03-08 07:01:21<SeP>2025-03-08 08:49:12<SeP>2025-03-08 10:37:03<SeP>2025-03-08 12:24:54<SeP>2025-03-08 14:12:45<SeP>2025-03-08 16:00:36<SeP>2025-03-08 17:48:27<SeP>2025-03-08 19:36:18<SeP>2025-03-08 21:24:09<SeP>2025-03-08 23:12:00<SeP>2025-03-09 00:59:51<SeP>2025-03-09 03:47:42<SeP>2025-03-09 05:35:33<SeP>2025-03-09 07:23:24<SeP>2025-03-09 09:11:15<SeP>2025-03-09 10:59:06<SeP>2025-03-09 12:46:57<SeP>2025-03-09 14:34:48<SeP>2025-03-09 16:22:39<SeP>2025-03-09 18:10:30<SeP>2025-03-09 19:58:21<SeP>2025-03-09 21:46:12<SeP>2025-03-09 23:34:03<SeP>2025-03-10 01:21:54<SeP>2025-03-10 03:09:45<SeP>2025-03-10 04:57:36<SeP>2025-03-10 06:45:27<SeP>2025-03-10 08:33:18<SeP>2025-03-10 10:21:09<SeP>2025-03-10 12:09:00<SeP>2025-03-10 13:56:51<SeP>2025-03-10 15:44:42<SeP>2025-03-10 17:32:33<SeP>2025-03-10 19:20:24<SeP>2025-03-10 21:08:15<SeP>2025-03-10 22:56:06<SeP>2025-03-11 00:43:57<SeP>2025-03-11 02:31:48<SeP>2025-03-11 04:19:39<SeP>2025-03-11 06:07:30<SeP>2025-03-11 07:55:21<SeP>2025-03-11 09:43:12<SeP>2025-03-11 11:31:03<SeP>2025-03-11 13:18:54<SeP>2025-03-11 15:06:45<SeP>2025-03-11 16:54:36<SeP>2025-03-11 18:42:27<SeP>2025-03-11 20:30:18<SeP>2025-03-11 22:18:09<SeP>2025-03-12 00:06:00<SeP>2025-03-12 01:53:51<SeP>2025-03-12 03:41:42<SeP>2025-03-12 05:29:33<SeP>2025-03-12 07:17:24<SeP>2025-03-12 09:05:15<SeP>2025-03-12 10:53:06<SeP>2025-03-12 12:40:57<SeP>2025-03-12 14:28:48<SeP>2025-03-12 16:16:39<SeP>2025-03-12 18:04:30<SeP>2025-03-12 19:52:21<SeP>2025-03-12 21:40:12<SeP>2025-03-12 23:28:03<SeP>2025-03-13 01:15:54<SeP>2025-03-13 03:03:45<SeP>2025-03-13 04:51:36<SeP>2025-03-13 06:39:27<SeP>2025-03-13 08:27:18<SeP>2025-03-13 10:15:09<SeP>2025-03-13 12:03:00<SeP>2025-03-13 13:50:51<SeP>2025-03-13 15:38:42<SeP>2025-03-13 17:26:33<SeP>2025-03-13 19:14:24<SeP>2025-03-13 21:02:15<SeP>2025-03-13 22:50:06<SeP>2025-03-14 00:37:57<SeP>2025-03-14 02:25:48<SeP>2025-03-14 04:13:39<SeP>2025-03-14 06:01:30<SeP>2025-03-14 07:49:21<SeP>2025-03-14 09:37:12<SeP>2025-03-14 11:25:03<SeP>2025-03-14 13:12:54<SeP>2025-03-14 15:00:45<SeP>2025-03-14 16:48:36<SeP>2025-03-14 18:36:27<SeP>2025-03-14 20:24:18<SeP>2025-03-14 22:12:09";
  const itemLabel       = "Scans";
  const itemData        = "112<SeP>100<SeP>117<SeP>41<SeP>69<SeP>83<SeP>166<SeP>69<SeP>129<SeP>26<SeP>77<SeP>121<SeP>45<SeP>82<SeP>75<SeP>99<SeP>135<SeP>111<SeP>178<SeP>97<SeP>51<SeP>48<SeP>89<SeP>41<SeP>86<SeP>106<SeP>108<SeP>70<SeP>74<SeP>71<SeP>132<SeP>169<SeP>126<SeP>102<SeP>64<SeP>36<SeP>77<SeP>44<SeP>151<SeP>72<SeP>62<SeP>52<SeP>73<SeP>62<SeP>144<SeP>58<SeP>77<SeP>90<SeP>37<SeP>83<SeP>75<SeP>130<SeP>105<SeP>95<SeP>74<SeP>66<SeP>62<SeP>84<SeP>68<SeP>108<SeP>70<SeP>57<SeP>21<SeP>56<SeP>50<SeP>158<SeP>82<SeP>101<SeP>86<SeP>90<SeP>97<SeP>153<SeP>67<SeP>70<SeP>93<SeP>86<SeP>32<SeP>40<SeP>95<SeP>58<SeP>48<SeP>68<SeP>124<SeP>56<SeP>197<SeP>84<SeP>69<SeP>63<SeP>58<SeP>55<SeP>68<SeP>84<SeP>83<SeP>105<SeP>59<SeP>77<SeP>116<SeP>62<SeP>78<SeP>152<SeP>57<SeP>62<SeP>56<SeP>42<SeP>64<SeP>92<SeP>88<SeP>75<SeP>73<SeP>162<SeP>63<SeP>109<SeP>51<SeP>62<SeP>48<SeP>101<SeP>76<SeP>65<SeP>116<SeP>89<SeP>93<SeP>79<SeP>89<SeP>132<SeP>59<SeP>50<SeP>29<SeP>48<SeP>111<SeP>54<SeP>54<SeP>90<SeP>86<SeP>50<SeP>86<SeP>100<SeP>123<SeP>79<SeP>34<SeP>28<SeP>59<SeP>63<SeP>193<SeP>131<SeP>63<SeP>67<SeP>119<SeP>53<SeP>57<SeP>95<SeP>91<SeP>182<SeP>75<SeP>48<SeP>99<SeP>100<SeP>65<SeP>78<SeP>80<SeP>116<SeP>112<SeP>66<SeP>101<SeP>76<SeP>77<SeP>82<SeP>63<SeP>70<SeP>83<SeP>123<SeP>54<SeP>137<SeP>78<SeP>96<SeP>139<SeP>53<SeP>82<SeP>155<SeP>45<SeP>65<SeP>126<SeP>119<SeP>75<SeP>191<SeP>68<SeP>145<SeP>56<SeP>76<SeP>60<SeP>83<SeP>87<SeP>70<SeP>60<SeP>57<SeP>72<SeP>51<SeP>86<SeP>38<SeP>104<SeP>93<SeP>111<SeP>69<SeP>74<SeP>98<SeP>37<SeP>50<SeP>96<SeP>46<SeP>50<SeP>55<SeP>77<SeP>87<SeP>62<SeP>110<SeP>49<SeP>73<SeP>42<SeP>34<SeP>231<SeP>86<SeP>41<SeP>81<SeP>59<SeP>91<SeP>84<SeP>45<SeP>41<SeP>114<SeP>134<SeP>80<SeP>45<SeP>46<SeP>91<SeP>51<SeP>40<SeP>67<SeP>90<SeP>125<SeP>65<SeP>61<SeP>110<SeP>63<SeP>67<SeP>27<SeP>24<SeP>56<SeP>32<SeP>45<SeP>102<SeP>71<SeP>58<SeP>58<SeP>89<SeP>262<SeP>50<SeP>28<SeP>66<SeP>64<SeP>117<SeP>139<SeP>64<SeP>50<SeP>72<SeP>147<SeP>87<SeP>96<SeP>66<SeP>105<SeP>31<SeP>96<SeP>41<SeP>34<SeP>42<SeP>74<SeP>53<SeP>91<SeP>70<SeP>140<SeP>106<SeP>56<SeP>67<SeP>56<SeP>47<SeP>80<SeP>82<SeP>127<SeP>40<SeP>80<SeP>195<SeP>40<SeP>64<SeP>51<SeP>67<SeP>161<SeP>361<SeP>33<SeP>45<SeP>17<SeP>49<SeP>37<SeP>46<SeP>64<SeP>112<SeP>170<SeP>95<SeP>57<SeP>363<SeP>58<SeP>70<SeP>285<SeP>140<SeP>196<SeP>50<SeP>53<SeP>55<SeP>65<SeP>68<SeP>45<SeP>52<SeP>63<SeP>21<SeP>37<SeP>83<SeP>90<SeP>52<SeP>78<SeP>46<SeP>57<SeP>55<SeP>32<SeP>26<SeP>41<SeP>114<SeP>28<SeP>35<SeP>815<SeP>71<SeP>88<SeP>113<SeP>111<SeP>93<SeP>68<SeP>25<SeP>30<SeP>41<SeP>178<SeP>77<SeP>96<SeP>66<SeP>117<SeP>31<SeP>24<SeP>55<SeP>107<SeP>145<SeP>35<SeP>53<SeP>65<SeP>54<SeP>66<SeP>86<SeP>43<SeP>105<SeP>69<SeP>78<SeP>65<SeP>104<SeP>50<SeP>90<SeP>130<SeP>121<SeP>109<SeP>115<SeP>95<SeP>62<SeP>73<SeP>51<SeP>79<SeP>65<SeP>150<SeP>105<SeP>79<SeP>47<SeP>76<SeP>61<SeP>75<SeP>96<SeP>95<SeP>63<SeP>82<SeP>92<SeP>82<SeP>51<SeP>54<SeP>51<SeP>82<SeP>159<SeP>78<SeP>228<SeP>140";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-13 00:00:00<SeP>2025-02-13 01:47:51<SeP>2025-02-13 03:35:42<SeP>2025-02-13 05:23:33<SeP>2025-02-13 07:11:24<SeP>2025-02-13 08:59:15<SeP>2025-02-13 10:47:06<SeP>2025-02-13 12:34:57<SeP>2025-02-13 14:22:48<SeP>2025-02-13 16:10:39<SeP>2025-02-13 17:58:30<SeP>2025-02-13 19:46:21<SeP>2025-02-13 21:34:12<SeP>2025-02-13 23:22:03<SeP>2025-02-14 01:09:54<SeP>2025-02-14 02:57:45<SeP>2025-02-14 04:45:36<SeP>2025-02-14 06:33:27<SeP>2025-02-14 08:21:18<SeP>2025-02-14 10:09:09<SeP>2025-02-14 11:57:00<SeP>2025-02-14 13:44:51<SeP>2025-02-14 15:32:42<SeP>2025-02-14 17:20:33<SeP>2025-02-14 19:08:24<SeP>2025-02-14 20:56:15<SeP>2025-02-14 22:44:06<SeP>2025-02-15 00:31:57<SeP>2025-02-15 02:19:48<SeP>2025-02-15 04:07:39<SeP>2025-02-15 05:55:30<SeP>2025-02-15 07:43:21<SeP>2025-02-15 09:31:12<SeP>2025-02-15 11:19:03<SeP>2025-02-15 13:06:54<SeP>2025-02-15 14:54:45<SeP>2025-02-15 16:42:36<SeP>2025-02-15 18:30:27<SeP>2025-02-15 20:18:18<SeP>2025-02-15 22:06:09<SeP>2025-02-15 23:54:00<SeP>2025-02-16 01:41:51<SeP>2025-02-16 03:29:42<SeP>2025-02-16 05:17:33<SeP>2025-02-16 07:05:24<SeP>2025-02-16 08:53:15<SeP>2025-02-16 10:41:06<SeP>2025-02-16 12:28:57<SeP>2025-02-16 14:16:48<SeP>2025-02-16 16:04:39<SeP>2025-02-16 17:52:30<SeP>2025-02-16 19:40:21<SeP>2025-02-16 21:28:12<SeP>2025-02-16 23:16:03<SeP>2025-02-17 01:03:54<SeP>2025-02-17 02:51:45<SeP>2025-02-17 04:39:36<SeP>2025-02-17 06:27:27<SeP>2025-02-17 08:15:18<SeP>2025-02-17 10:03:09<SeP>2025-02-17 11:51:00<SeP>2025-02-17 13:38:51<SeP>2025-02-17 15:26:42<SeP>2025-02-17 17:14:33<SeP>2025-02-17 19:02:24<SeP>2025-02-17 20:50:15<SeP>2025-02-17 22:38:06<SeP>2025-02-18 00:25:57<SeP>2025-02-18 02:13:48<SeP>2025-02-18 04:01:39<SeP>2025-02-18 05:49:30<SeP>2025-02-18 07:37:21<SeP>2025-02-18 09:25:12<SeP>2025-02-18 11:13:03<SeP>2025-02-18 13:00:54<SeP>2025-02-18 14:48:45<SeP>2025-02-18 16:36:36<SeP>2025-02-18 18:24:27<SeP>2025-02-18 20:12:18<SeP>2025-02-18 22:00:09<SeP>2025-02-18 23:48:00<SeP>2025-02-19 01:35:51<SeP>2025-02-19 03:23:42<SeP>2025-02-19 05:11:33<SeP>2025-02-19 06:59:24<SeP>2025-02-19 08:47:15<SeP>2025-02-19 10:35:06<SeP>2025-02-19 12:22:57<SeP>2025-02-19 14:10:48<SeP>2025-02-19 15:58:39<SeP>2025-02-19 17:46:30<SeP>2025-02-19 19:34:21<SeP>2025-02-19 21:22:12<SeP>2025-02-19 23:10:03<SeP>2025-02-20 00:57:54<SeP>2025-02-20 02:45:45<SeP>2025-02-20 04:33:36<SeP>2025-02-20 06:21:27<SeP>2025-02-20 08:09:18<SeP>2025-02-20 09:57:09<SeP>2025-02-20 11:45:00<SeP>2025-02-20 13:32:51<SeP>2025-02-20 15:20:42<SeP>2025-02-20 17:08:33<SeP>2025-02-20 18:56:24<SeP>2025-02-20 20:44:15<SeP>2025-02-20 22:32:06<SeP>2025-02-21 00:19:57<SeP>2025-02-21 02:07:48<SeP>2025-02-21 03:55:39<SeP>2025-02-21 05:43:30<SeP>2025-02-21 07:31:21<SeP>2025-02-21 09:19:12<SeP>2025-02-21 11:07:03<SeP>2025-02-21 12:54:54<SeP>2025-02-21 14:42:45<SeP>2025-02-21 16:30:36<SeP>2025-02-21 18:18:27<SeP>2025-02-21 20:06:18<SeP>2025-02-21 21:54:09<SeP>2025-02-21 23:42:00<SeP>2025-02-22 01:29:51<SeP>2025-02-22 03:17:42<SeP>2025-02-22 05:05:33<SeP>2025-02-22 06:53:24<SeP>2025-02-22 08:41:15<SeP>2025-02-22 10:29:06<SeP>2025-02-22 12:16:57<SeP>2025-02-22 14:04:48<SeP>2025-02-22 15:52:39<SeP>2025-02-22 17:40:30<SeP>2025-02-22 19:28:21<SeP>2025-02-22 21:16:12<SeP>2025-02-22 23:04:03<SeP>2025-02-23 00:51:54<SeP>2025-02-23 02:39:45<SeP>2025-02-23 04:27:36<SeP>2025-02-23 06:15:27<SeP>2025-02-23 08:03:18<SeP>2025-02-23 09:51:09<SeP>2025-02-23 11:39:00<SeP>2025-02-23 13:26:51<SeP>2025-02-23 15:14:42<SeP>2025-02-23 17:02:33<SeP>2025-02-23 18:50:24<SeP>2025-02-23 20:38:15<SeP>2025-02-23 22:26:06<SeP>2025-02-24 00:13:57<SeP>2025-02-24 02:01:48<SeP>2025-02-24 03:49:39<SeP>2025-02-24 05:37:30<SeP>2025-02-24 07:25:21<SeP>2025-02-24 09:13:12<SeP>2025-02-24 11:01:03<SeP>2025-02-24 12:48:54<SeP>2025-02-24 14:36:45<SeP>2025-02-24 16:24:36<SeP>2025-02-24 18:12:27<SeP>2025-02-24 20:00:18<SeP>2025-02-24 21:48:09<SeP>2025-02-24 23:36:00<SeP>2025-02-25 01:23:51<SeP>2025-02-25 03:11:42<SeP>2025-02-25 04:59:33<SeP>2025-02-25 06:47:24<SeP>2025-02-25 08:35:15<SeP>2025-02-25 10:23:06<SeP>2025-02-25 12:10:57<SeP>2025-02-25 13:58:48<SeP>2025-02-25 15:46:39<SeP>2025-02-25 17:34:30<SeP>2025-02-25 19:22:21<SeP>2025-02-25 21:10:12<SeP>2025-02-25 22:58:03<SeP>2025-02-26 00:45:54<SeP>2025-02-26 02:33:45<SeP>2025-02-26 04:21:36<SeP>2025-02-26 06:09:27<SeP>2025-02-26 07:57:18<SeP>2025-02-26 09:45:09<SeP>2025-02-26 11:33:00<SeP>2025-02-26 13:20:51<SeP>2025-02-26 15:08:42<SeP>2025-02-26 16:56:33<SeP>2025-02-26 18:44:24<SeP>2025-02-26 20:32:15<SeP>2025-02-26 22:20:06<SeP>2025-02-27 00:07:57<SeP>2025-02-27 01:55:48<SeP>2025-02-27 03:43:39<SeP>2025-02-27 05:31:30<SeP>2025-02-27 07:19:21<SeP>2025-02-27 09:07:12<SeP>2025-02-27 10:55:03<SeP>2025-02-27 12:42:54<SeP>2025-02-27 14:30:45<SeP>2025-02-27 16:18:36<SeP>2025-02-27 18:06:27<SeP>2025-02-27 19:54:18<SeP>2025-02-27 21:42:09<SeP>2025-02-27 23:30:00<SeP>2025-02-28 01:17:51<SeP>2025-02-28 03:05:42<SeP>2025-02-28 04:53:33<SeP>2025-02-28 06:41:24<SeP>2025-02-28 08:29:15<SeP>2025-02-28 10:17:06<SeP>2025-02-28 12:04:57<SeP>2025-02-28 13:52:48<SeP>2025-02-28 15:40:39<SeP>2025-02-28 17:28:30<SeP>2025-02-28 19:16:21<SeP>2025-02-28 21:04:12<SeP>2025-02-28 22:52:03<SeP>2025-03-01 00:39:54<SeP>2025-03-01 02:27:45<SeP>2025-03-01 04:15:36<SeP>2025-03-01 06:03:27<SeP>2025-03-01 07:51:18<SeP>2025-03-01 09:39:09<SeP>2025-03-01 11:27:00<SeP>2025-03-01 13:14:51<SeP>2025-03-01 15:02:42<SeP>2025-03-01 16:50:33<SeP>2025-03-01 18:38:24<SeP>2025-03-01 20:26:15<SeP>2025-03-01 22:14:06<SeP>2025-03-02 00:01:57<SeP>2025-03-02 01:49:48<SeP>2025-03-02 03:37:39<SeP>2025-03-02 05:25:30<SeP>2025-03-02 07:13:21<SeP>2025-03-02 09:01:12<SeP>2025-03-02 10:49:03<SeP>2025-03-02 12:36:54<SeP>2025-03-02 14:24:45<SeP>2025-03-02 16:12:36<SeP>2025-03-02 18:00:27<SeP>2025-03-02 19:48:18<SeP>2025-03-02 21:36:09<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:11:51<SeP>2025-03-03 02:59:42<SeP>2025-03-03 04:47:33<SeP>2025-03-03 06:35:24<SeP>2025-03-03 08:23:15<SeP>2025-03-03 10:11:06<SeP>2025-03-03 11:58:57<SeP>2025-03-03 13:46:48<SeP>2025-03-03 15:34:39<SeP>2025-03-03 17:22:30<SeP>2025-03-03 19:10:21<SeP>2025-03-03 20:58:12<SeP>2025-03-03 22:46:03<SeP>2025-03-04 00:33:54<SeP>2025-03-04 02:21:45<SeP>2025-03-04 04:09:36<SeP>2025-03-04 05:57:27<SeP>2025-03-04 07:45:18<SeP>2025-03-04 09:33:09<SeP>2025-03-04 11:21:00<SeP>2025-03-04 13:08:51<SeP>2025-03-04 14:56:42<SeP>2025-03-04 16:44:33<SeP>2025-03-04 18:32:24<SeP>2025-03-04 20:20:15<SeP>2025-03-04 22:08:06<SeP>2025-03-04 23:55:57<SeP>2025-03-05 01:43:48<SeP>2025-03-05 03:31:39<SeP>2025-03-05 05:19:30<SeP>2025-03-05 07:07:21<SeP>2025-03-05 08:55:12<SeP>2025-03-05 10:43:03<SeP>2025-03-05 12:30:54<SeP>2025-03-05 14:18:45<SeP>2025-03-05 16:06:36<SeP>2025-03-05 17:54:27<SeP>2025-03-05 19:42:18<SeP>2025-03-05 21:30:09<SeP>2025-03-05 23:18:00<SeP>2025-03-06 01:05:51<SeP>2025-03-06 02:53:42<SeP>2025-03-06 04:41:33<SeP>2025-03-06 06:29:24<SeP>2025-03-06 08:17:15<SeP>2025-03-06 10:05:06<SeP>2025-03-06 11:52:57<SeP>2025-03-06 13:40:48<SeP>2025-03-06 15:28:39<SeP>2025-03-06 17:16:30<SeP>2025-03-06 19:04:21<SeP>2025-03-06 20:52:12<SeP>2025-03-06 22:40:03<SeP>2025-03-07 00:27:54<SeP>2025-03-07 02:15:45<SeP>2025-03-07 04:03:36<SeP>2025-03-07 05:51:27<SeP>2025-03-07 07:39:18<SeP>2025-03-07 09:27:09<SeP>2025-03-07 11:15:00<SeP>2025-03-07 13:02:51<SeP>2025-03-07 14:50:42<SeP>2025-03-07 16:38:33<SeP>2025-03-07 18:26:24<SeP>2025-03-07 20:14:15<SeP>2025-03-07 22:02:06<SeP>2025-03-07 23:49:57<SeP>2025-03-08 01:37:48<SeP>2025-03-08 03:25:39<SeP>2025-03-08 05:13:30<SeP>2025-03-08 07:01:21<SeP>2025-03-08 08:49:12<SeP>2025-03-08 10:37:03<SeP>2025-03-08 12:24:54<SeP>2025-03-08 14:12:45<SeP>2025-03-08 16:00:36<SeP>2025-03-08 17:48:27<SeP>2025-03-08 19:36:18<SeP>2025-03-08 21:24:09<SeP>2025-03-08 23:12:00<SeP>2025-03-09 00:59:51<SeP>2025-03-09 03:47:42<SeP>2025-03-09 05:35:33<SeP>2025-03-09 07:23:24<SeP>2025-03-09 09:11:15<SeP>2025-03-09 10:59:06<SeP>2025-03-09 12:46:57<SeP>2025-03-09 14:34:48<SeP>2025-03-09 16:22:39<SeP>2025-03-09 18:10:30<SeP>2025-03-09 19:58:21<SeP>2025-03-09 21:46:12<SeP>2025-03-09 23:34:03<SeP>2025-03-10 01:21:54<SeP>2025-03-10 03:09:45<SeP>2025-03-10 04:57:36<SeP>2025-03-10 06:45:27<SeP>2025-03-10 08:33:18<SeP>2025-03-10 10:21:09<SeP>2025-03-10 12:09:00<SeP>2025-03-10 13:56:51<SeP>2025-03-10 15:44:42<SeP>2025-03-10 17:32:33<SeP>2025-03-10 19:20:24<SeP>2025-03-10 21:08:15<SeP>2025-03-10 22:56:06<SeP>2025-03-11 00:43:57<SeP>2025-03-11 02:31:48<SeP>2025-03-11 04:19:39<SeP>2025-03-11 06:07:30<SeP>2025-03-11 07:55:21<SeP>2025-03-11 09:43:12<SeP>2025-03-11 11:31:03<SeP>2025-03-11 13:18:54<SeP>2025-03-11 15:06:45<SeP>2025-03-11 16:54:36<SeP>2025-03-11 18:42:27<SeP>2025-03-11 20:30:18<SeP>2025-03-11 22:18:09<SeP>2025-03-12 00:06:00<SeP>2025-03-12 01:53:51<SeP>2025-03-12 03:41:42<SeP>2025-03-12 05:29:33<SeP>2025-03-12 07:17:24<SeP>2025-03-12 09:05:15<SeP>2025-03-12 10:53:06<SeP>2025-03-12 12:40:57<SeP>2025-03-12 14:28:48<SeP>2025-03-12 16:16:39<SeP>2025-03-12 18:04:30<SeP>2025-03-12 19:52:21<SeP>2025-03-12 21:40:12<SeP>2025-03-12 23:28:03<SeP>2025-03-13 01:15:54<SeP>2025-03-13 03:03:45<SeP>2025-03-13 04:51:36<SeP>2025-03-13 06:39:27<SeP>2025-03-13 08:27:18<SeP>2025-03-13 10:15:09<SeP>2025-03-13 12:03:00<SeP>2025-03-13 13:50:51<SeP>2025-03-13 15:38:42<SeP>2025-03-13 17:26:33<SeP>2025-03-13 19:14:24<SeP>2025-03-13 21:02:15<SeP>2025-03-13 22:50:06<SeP>2025-03-14 00:37:57<SeP>2025-03-14 02:25:48<SeP>2025-03-14 04:13:39<SeP>2025-03-14 06:01:30<SeP>2025-03-14 07:49:21<SeP>2025-03-14 09:37:12<SeP>2025-03-14 11:25:03<SeP>2025-03-14 13:12:54<SeP>2025-03-14 15:00:45<SeP>2025-03-14 16:48:36<SeP>2025-03-14 18:36:27<SeP>2025-03-14 20:24:18<SeP>2025-03-14 22:12:09";
  const itemLabel       = "Attacks";
  const itemData        = "59<SeP>46<SeP>622<SeP>20<SeP>329<SeP>110<SeP>265<SeP>161<SeP>567<SeP>615<SeP>104<SeP>571<SeP>229<SeP>86<SeP>257<SeP>189<SeP>480<SeP>278<SeP>240<SeP>332<SeP>132<SeP>295<SeP>348<SeP>117<SeP>408<SeP>158<SeP>154<SeP>114<SeP>206<SeP>116<SeP>748<SeP>69<SeP>196<SeP>170<SeP>217<SeP>89<SeP>40<SeP>169<SeP>408<SeP>128<SeP>148<SeP>62<SeP>33<SeP>170<SeP>400<SeP>183<SeP>148<SeP>168<SeP>328<SeP>164<SeP>323<SeP>533<SeP>101<SeP>348<SeP>226<SeP>315<SeP>211<SeP>304<SeP>390<SeP>124<SeP>386<SeP>173<SeP>35<SeP>278<SeP>388<SeP>17<SeP>145<SeP>341<SeP>363<SeP>97<SeP>400<SeP>98<SeP>88<SeP>336<SeP>145<SeP>249<SeP>260<SeP>215<SeP>193<SeP>28<SeP>252<SeP>121<SeP>409<SeP>273<SeP>47<SeP>81<SeP>90<SeP>49<SeP>75<SeP>173<SeP>316<SeP>206<SeP>157<SeP>136<SeP>244<SeP>190<SeP>118<SeP>49<SeP>174<SeP>9<SeP>28<SeP>261<SeP>216<SeP>244<SeP>699<SeP>535<SeP>243<SeP>765<SeP>305<SeP>607<SeP>183<SeP>411<SeP>369<SeP>492<SeP>435<SeP>287<SeP>503<SeP>1074<SeP>601<SeP>879<SeP>344<SeP>327<SeP>207<SeP>293<SeP>379<SeP>900<SeP>446<SeP>471<SeP>562<SeP>202<SeP>513<SeP>744<SeP>496<SeP>589<SeP>226<SeP>696<SeP>543<SeP>412<SeP>337<SeP>389<SeP>799<SeP>537<SeP>579<SeP>422<SeP>191<SeP>87<SeP>331<SeP>81<SeP>198<SeP>298<SeP>345<SeP>58<SeP>260<SeP>202<SeP>64<SeP>96<SeP>219<SeP>266<SeP>221<SeP>263<SeP>122<SeP>457<SeP>116<SeP>74<SeP>276<SeP>108<SeP>429<SeP>317<SeP>168<SeP>148<SeP>199<SeP>45<SeP>132<SeP>173<SeP>73<SeP>33<SeP>279<SeP>156<SeP>64<SeP>224<SeP>44<SeP>93<SeP>63<SeP>75<SeP>126<SeP>321<SeP>120<SeP>338<SeP>69<SeP>269<SeP>466<SeP>167<SeP>157<SeP>158<SeP>127<SeP>313<SeP>39<SeP>42<SeP>88<SeP>113<SeP>201<SeP>182<SeP>122<SeP>279<SeP>128<SeP>200<SeP>302<SeP>129<SeP>307<SeP>58<SeP>61<SeP>45<SeP>52<SeP>135<SeP>28<SeP>19<SeP>86<SeP>64<SeP>59<SeP>88<SeP>42<SeP>194<SeP>109<SeP>103<SeP>46<SeP>215<SeP>78<SeP>381<SeP>214<SeP>117<SeP>19<SeP>313<SeP>22<SeP>20<SeP>139<SeP>142<SeP>83<SeP>31<SeP>166<SeP>77<SeP>110<SeP>142<SeP>230<SeP>52<SeP>89<SeP>49<SeP>38<SeP>175<SeP>325<SeP>74<SeP>93<SeP>39<SeP>134<SeP>195<SeP>37<SeP>212<SeP>273<SeP>30<SeP>21<SeP>206<SeP>131<SeP>25<SeP>97<SeP>31<SeP>97<SeP>45<SeP>304<SeP>143<SeP>138<SeP>39<SeP>112<SeP>73<SeP>37<SeP>35<SeP>33<SeP>278<SeP>89<SeP>86<SeP>145<SeP>169<SeP>89<SeP>32<SeP>83<SeP>181<SeP>76<SeP>172<SeP>100<SeP>66<SeP>76<SeP>124<SeP>27<SeP>168<SeP>87<SeP>118<SeP>174<SeP>43<SeP>240<SeP>513<SeP>103<SeP>109<SeP>183<SeP>36<SeP>38<SeP>82<SeP>91<SeP>81<SeP>117<SeP>72<SeP>231<SeP>38<SeP>15<SeP>12<SeP>234<SeP>68<SeP>76<SeP>16<SeP>25<SeP>21<SeP>95<SeP>285<SeP>38<SeP>160<SeP>115<SeP>11<SeP>19<SeP>39<SeP>93<SeP>54<SeP>250<SeP>85<SeP>25<SeP>33<SeP>267<SeP>317<SeP>342<SeP>592<SeP>33<SeP>52<SeP>116<SeP>40<SeP>122<SeP>61<SeP>116<SeP>31<SeP>76<SeP>403<SeP>296<SeP>63<SeP>121<SeP>30<SeP>221<SeP>32<SeP>31<SeP>181<SeP>161<SeP>483<SeP>83<SeP>42<SeP>48<SeP>197<SeP>65<SeP>173<SeP>18<SeP>89<SeP>71<SeP>153<SeP>164<SeP>164<SeP>135<SeP>378<SeP>117<SeP>172<SeP>183<SeP>165<SeP>214<SeP>140<SeP>152<SeP>136<SeP>98<SeP>184<SeP>153<SeP>395<SeP>155<SeP>117<SeP>130<SeP>54<SeP>324<SeP>132<SeP>50<SeP>30<SeP>146<SeP>213<SeP>119<SeP>249<SeP>158<SeP>391<SeP>187<SeP>100<SeP>37<SeP>92";
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
  const labelsData       = "2025-02-13 00:00:00<SeP>2025-02-13 01:47:51<SeP>2025-02-13 03:35:42<SeP>2025-02-13 05:23:33<SeP>2025-02-13 07:11:24<SeP>2025-02-13 08:59:15<SeP>2025-02-13 10:47:06<SeP>2025-02-13 12:34:57<SeP>2025-02-13 14:22:48<SeP>2025-02-13 16:10:39<SeP>2025-02-13 17:58:30<SeP>2025-02-13 19:46:21<SeP>2025-02-13 21:34:12<SeP>2025-02-13 23:22:03<SeP>2025-02-14 01:09:54<SeP>2025-02-14 02:57:45<SeP>2025-02-14 04:45:36<SeP>2025-02-14 06:33:27<SeP>2025-02-14 08:21:18<SeP>2025-02-14 10:09:09<SeP>2025-02-14 11:57:00<SeP>2025-02-14 13:44:51<SeP>2025-02-14 15:32:42<SeP>2025-02-14 17:20:33<SeP>2025-02-14 19:08:24<SeP>2025-02-14 20:56:15<SeP>2025-02-14 22:44:06<SeP>2025-02-15 00:31:57<SeP>2025-02-15 02:19:48<SeP>2025-02-15 04:07:39<SeP>2025-02-15 05:55:30<SeP>2025-02-15 07:43:21<SeP>2025-02-15 09:31:12<SeP>2025-02-15 11:19:03<SeP>2025-02-15 13:06:54<SeP>2025-02-15 14:54:45<SeP>2025-02-15 16:42:36<SeP>2025-02-15 18:30:27<SeP>2025-02-15 20:18:18<SeP>2025-02-15 22:06:09<SeP>2025-02-15 23:54:00<SeP>2025-02-16 01:41:51<SeP>2025-02-16 03:29:42<SeP>2025-02-16 05:17:33<SeP>2025-02-16 07:05:24<SeP>2025-02-16 08:53:15<SeP>2025-02-16 10:41:06<SeP>2025-02-16 12:28:57<SeP>2025-02-16 14:16:48<SeP>2025-02-16 16:04:39<SeP>2025-02-16 17:52:30<SeP>2025-02-16 19:40:21<SeP>2025-02-16 21:28:12<SeP>2025-02-16 23:16:03<SeP>2025-02-17 01:03:54<SeP>2025-02-17 02:51:45<SeP>2025-02-17 04:39:36<SeP>2025-02-17 06:27:27<SeP>2025-02-17 08:15:18<SeP>2025-02-17 10:03:09<SeP>2025-02-17 11:51:00<SeP>2025-02-17 13:38:51<SeP>2025-02-17 15:26:42<SeP>2025-02-17 17:14:33<SeP>2025-02-17 19:02:24<SeP>2025-02-17 20:50:15<SeP>2025-02-17 22:38:06<SeP>2025-02-18 00:25:57<SeP>2025-02-18 02:13:48<SeP>2025-02-18 04:01:39<SeP>2025-02-18 05:49:30<SeP>2025-02-18 07:37:21<SeP>2025-02-18 09:25:12<SeP>2025-02-18 11:13:03<SeP>2025-02-18 13:00:54<SeP>2025-02-18 14:48:45<SeP>2025-02-18 16:36:36<SeP>2025-02-18 18:24:27<SeP>2025-02-18 20:12:18<SeP>2025-02-18 22:00:09<SeP>2025-02-18 23:48:00<SeP>2025-02-19 01:35:51<SeP>2025-02-19 03:23:42<SeP>2025-02-19 05:11:33<SeP>2025-02-19 06:59:24<SeP>2025-02-19 08:47:15<SeP>2025-02-19 10:35:06<SeP>2025-02-19 12:22:57<SeP>2025-02-19 14:10:48<SeP>2025-02-19 15:58:39<SeP>2025-02-19 17:46:30<SeP>2025-02-19 19:34:21<SeP>2025-02-19 21:22:12<SeP>2025-02-19 23:10:03<SeP>2025-02-20 00:57:54<SeP>2025-02-20 02:45:45<SeP>2025-02-20 04:33:36<SeP>2025-02-20 06:21:27<SeP>2025-02-20 08:09:18<SeP>2025-02-20 09:57:09<SeP>2025-02-20 11:45:00<SeP>2025-02-20 13:32:51<SeP>2025-02-20 15:20:42<SeP>2025-02-20 17:08:33<SeP>2025-02-20 18:56:24<SeP>2025-02-20 20:44:15<SeP>2025-02-20 22:32:06<SeP>2025-02-21 00:19:57<SeP>2025-02-21 02:07:48<SeP>2025-02-21 03:55:39<SeP>2025-02-21 05:43:30<SeP>2025-02-21 07:31:21<SeP>2025-02-21 09:19:12<SeP>2025-02-21 11:07:03<SeP>2025-02-21 12:54:54<SeP>2025-02-21 14:42:45<SeP>2025-02-21 16:30:36<SeP>2025-02-21 18:18:27<SeP>2025-02-21 20:06:18<SeP>2025-02-21 21:54:09<SeP>2025-02-21 23:42:00<SeP>2025-02-22 01:29:51<SeP>2025-02-22 03:17:42<SeP>2025-02-22 05:05:33<SeP>2025-02-22 06:53:24<SeP>2025-02-22 08:41:15<SeP>2025-02-22 10:29:06<SeP>2025-02-22 12:16:57<SeP>2025-02-22 14:04:48<SeP>2025-02-22 15:52:39<SeP>2025-02-22 17:40:30<SeP>2025-02-22 19:28:21<SeP>2025-02-22 21:16:12<SeP>2025-02-22 23:04:03<SeP>2025-02-23 00:51:54<SeP>2025-02-23 02:39:45<SeP>2025-02-23 04:27:36<SeP>2025-02-23 06:15:27<SeP>2025-02-23 08:03:18<SeP>2025-02-23 09:51:09<SeP>2025-02-23 11:39:00<SeP>2025-02-23 13:26:51<SeP>2025-02-23 15:14:42<SeP>2025-02-23 17:02:33<SeP>2025-02-23 18:50:24<SeP>2025-02-23 20:38:15<SeP>2025-02-23 22:26:06<SeP>2025-02-24 00:13:57<SeP>2025-02-24 02:01:48<SeP>2025-02-24 03:49:39<SeP>2025-02-24 05:37:30<SeP>2025-02-24 07:25:21<SeP>2025-02-24 09:13:12<SeP>2025-02-24 11:01:03<SeP>2025-02-24 12:48:54<SeP>2025-02-24 14:36:45<SeP>2025-02-24 16:24:36<SeP>2025-02-24 18:12:27<SeP>2025-02-24 20:00:18<SeP>2025-02-24 21:48:09<SeP>2025-02-24 23:36:00<SeP>2025-02-25 01:23:51<SeP>2025-02-25 03:11:42<SeP>2025-02-25 04:59:33<SeP>2025-02-25 06:47:24<SeP>2025-02-25 08:35:15<SeP>2025-02-25 10:23:06<SeP>2025-02-25 12:10:57<SeP>2025-02-25 13:58:48<SeP>2025-02-25 15:46:39<SeP>2025-02-25 17:34:30<SeP>2025-02-25 19:22:21<SeP>2025-02-25 21:10:12<SeP>2025-02-25 22:58:03<SeP>2025-02-26 00:45:54<SeP>2025-02-26 02:33:45<SeP>2025-02-26 04:21:36<SeP>2025-02-26 06:09:27<SeP>2025-02-26 07:57:18<SeP>2025-02-26 09:45:09<SeP>2025-02-26 11:33:00<SeP>2025-02-26 13:20:51<SeP>2025-02-26 15:08:42<SeP>2025-02-26 16:56:33<SeP>2025-02-26 18:44:24<SeP>2025-02-26 20:32:15<SeP>2025-02-26 22:20:06<SeP>2025-02-27 00:07:57<SeP>2025-02-27 01:55:48<SeP>2025-02-27 03:43:39<SeP>2025-02-27 05:31:30<SeP>2025-02-27 07:19:21<SeP>2025-02-27 09:07:12<SeP>2025-02-27 10:55:03<SeP>2025-02-27 12:42:54<SeP>2025-02-27 14:30:45<SeP>2025-02-27 16:18:36<SeP>2025-02-27 18:06:27<SeP>2025-02-27 19:54:18<SeP>2025-02-27 21:42:09<SeP>2025-02-27 23:30:00<SeP>2025-02-28 01:17:51<SeP>2025-02-28 03:05:42<SeP>2025-02-28 04:53:33<SeP>2025-02-28 06:41:24<SeP>2025-02-28 08:29:15<SeP>2025-02-28 10:17:06<SeP>2025-02-28 12:04:57<SeP>2025-02-28 13:52:48<SeP>2025-02-28 15:40:39<SeP>2025-02-28 17:28:30<SeP>2025-02-28 19:16:21<SeP>2025-02-28 21:04:12<SeP>2025-02-28 22:52:03<SeP>2025-03-01 00:39:54<SeP>2025-03-01 02:27:45<SeP>2025-03-01 04:15:36<SeP>2025-03-01 06:03:27<SeP>2025-03-01 07:51:18<SeP>2025-03-01 09:39:09<SeP>2025-03-01 11:27:00<SeP>2025-03-01 13:14:51<SeP>2025-03-01 15:02:42<SeP>2025-03-01 16:50:33<SeP>2025-03-01 18:38:24<SeP>2025-03-01 20:26:15<SeP>2025-03-01 22:14:06<SeP>2025-03-02 00:01:57<SeP>2025-03-02 01:49:48<SeP>2025-03-02 03:37:39<SeP>2025-03-02 05:25:30<SeP>2025-03-02 07:13:21<SeP>2025-03-02 09:01:12<SeP>2025-03-02 10:49:03<SeP>2025-03-02 12:36:54<SeP>2025-03-02 14:24:45<SeP>2025-03-02 16:12:36<SeP>2025-03-02 18:00:27<SeP>2025-03-02 19:48:18<SeP>2025-03-02 21:36:09<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:11:51<SeP>2025-03-03 02:59:42<SeP>2025-03-03 04:47:33<SeP>2025-03-03 06:35:24<SeP>2025-03-03 08:23:15<SeP>2025-03-03 10:11:06<SeP>2025-03-03 11:58:57<SeP>2025-03-03 13:46:48<SeP>2025-03-03 15:34:39<SeP>2025-03-03 17:22:30<SeP>2025-03-03 19:10:21<SeP>2025-03-03 20:58:12<SeP>2025-03-03 22:46:03<SeP>2025-03-04 00:33:54<SeP>2025-03-04 02:21:45<SeP>2025-03-04 04:09:36<SeP>2025-03-04 05:57:27<SeP>2025-03-04 07:45:18<SeP>2025-03-04 09:33:09<SeP>2025-03-04 11:21:00<SeP>2025-03-04 13:08:51<SeP>2025-03-04 14:56:42<SeP>2025-03-04 16:44:33<SeP>2025-03-04 18:32:24<SeP>2025-03-04 20:20:15<SeP>2025-03-04 22:08:06<SeP>2025-03-04 23:55:57<SeP>2025-03-05 01:43:48<SeP>2025-03-05 03:31:39<SeP>2025-03-05 05:19:30<SeP>2025-03-05 07:07:21<SeP>2025-03-05 08:55:12<SeP>2025-03-05 10:43:03<SeP>2025-03-05 12:30:54<SeP>2025-03-05 14:18:45<SeP>2025-03-05 16:06:36<SeP>2025-03-05 17:54:27<SeP>2025-03-05 19:42:18<SeP>2025-03-05 21:30:09<SeP>2025-03-05 23:18:00<SeP>2025-03-06 01:05:51<SeP>2025-03-06 02:53:42<SeP>2025-03-06 04:41:33<SeP>2025-03-06 06:29:24<SeP>2025-03-06 08:17:15<SeP>2025-03-06 10:05:06<SeP>2025-03-06 11:52:57<SeP>2025-03-06 13:40:48<SeP>2025-03-06 15:28:39<SeP>2025-03-06 17:16:30<SeP>2025-03-06 19:04:21<SeP>2025-03-06 20:52:12<SeP>2025-03-06 22:40:03<SeP>2025-03-07 00:27:54<SeP>2025-03-07 02:15:45<SeP>2025-03-07 04:03:36<SeP>2025-03-07 05:51:27<SeP>2025-03-07 07:39:18<SeP>2025-03-07 09:27:09<SeP>2025-03-07 11:15:00<SeP>2025-03-07 13:02:51<SeP>2025-03-07 14:50:42<SeP>2025-03-07 16:38:33<SeP>2025-03-07 18:26:24<SeP>2025-03-07 20:14:15<SeP>2025-03-07 22:02:06<SeP>2025-03-07 23:49:57<SeP>2025-03-08 01:37:48<SeP>2025-03-08 03:25:39<SeP>2025-03-08 05:13:30<SeP>2025-03-08 07:01:21<SeP>2025-03-08 08:49:12<SeP>2025-03-08 10:37:03<SeP>2025-03-08 12:24:54<SeP>2025-03-08 14:12:45<SeP>2025-03-08 16:00:36<SeP>2025-03-08 17:48:27<SeP>2025-03-08 19:36:18<SeP>2025-03-08 21:24:09<SeP>2025-03-08 23:12:00<SeP>2025-03-09 00:59:51<SeP>2025-03-09 03:47:42<SeP>2025-03-09 05:35:33<SeP>2025-03-09 07:23:24<SeP>2025-03-09 09:11:15<SeP>2025-03-09 10:59:06<SeP>2025-03-09 12:46:57<SeP>2025-03-09 14:34:48<SeP>2025-03-09 16:22:39<SeP>2025-03-09 18:10:30<SeP>2025-03-09 19:58:21<SeP>2025-03-09 21:46:12<SeP>2025-03-09 23:34:03<SeP>2025-03-10 01:21:54<SeP>2025-03-10 03:09:45<SeP>2025-03-10 04:57:36<SeP>2025-03-10 06:45:27<SeP>2025-03-10 08:33:18<SeP>2025-03-10 10:21:09<SeP>2025-03-10 12:09:00<SeP>2025-03-10 13:56:51<SeP>2025-03-10 15:44:42<SeP>2025-03-10 17:32:33<SeP>2025-03-10 19:20:24<SeP>2025-03-10 21:08:15<SeP>2025-03-10 22:56:06<SeP>2025-03-11 00:43:57<SeP>2025-03-11 02:31:48<SeP>2025-03-11 04:19:39<SeP>2025-03-11 06:07:30<SeP>2025-03-11 07:55:21<SeP>2025-03-11 09:43:12<SeP>2025-03-11 11:31:03<SeP>2025-03-11 13:18:54<SeP>2025-03-11 15:06:45<SeP>2025-03-11 16:54:36<SeP>2025-03-11 18:42:27<SeP>2025-03-11 20:30:18<SeP>2025-03-11 22:18:09<SeP>2025-03-12 00:06:00<SeP>2025-03-12 01:53:51<SeP>2025-03-12 03:41:42<SeP>2025-03-12 05:29:33<SeP>2025-03-12 07:17:24<SeP>2025-03-12 09:05:15<SeP>2025-03-12 10:53:06<SeP>2025-03-12 12:40:57<SeP>2025-03-12 14:28:48<SeP>2025-03-12 16:16:39<SeP>2025-03-12 18:04:30<SeP>2025-03-12 19:52:21<SeP>2025-03-12 21:40:12<SeP>2025-03-12 23:28:03<SeP>2025-03-13 01:15:54<SeP>2025-03-13 03:03:45<SeP>2025-03-13 04:51:36<SeP>2025-03-13 06:39:27<SeP>2025-03-13 08:27:18<SeP>2025-03-13 10:15:09<SeP>2025-03-13 12:03:00<SeP>2025-03-13 13:50:51<SeP>2025-03-13 15:38:42<SeP>2025-03-13 17:26:33<SeP>2025-03-13 19:14:24<SeP>2025-03-13 21:02:15<SeP>2025-03-13 22:50:06<SeP>2025-03-14 00:37:57<SeP>2025-03-14 02:25:48<SeP>2025-03-14 04:13:39<SeP>2025-03-14 06:01:30<SeP>2025-03-14 07:49:21<SeP>2025-03-14 09:37:12<SeP>2025-03-14 11:25:03<SeP>2025-03-14 13:12:54<SeP>2025-03-14 15:00:45<SeP>2025-03-14 16:48:36<SeP>2025-03-14 18:36:27<SeP>2025-03-14 20:24:18<SeP>2025-03-14 22:12:09";
  const item1Label       = "Escaneos";
  const item1Data        = "112<SeP>100<SeP>117<SeP>41<SeP>69<SeP>83<SeP>166<SeP>69<SeP>129<SeP>26<SeP>77<SeP>121<SeP>45<SeP>82<SeP>75<SeP>99<SeP>135<SeP>111<SeP>178<SeP>97<SeP>51<SeP>48<SeP>89<SeP>41<SeP>86<SeP>106<SeP>108<SeP>70<SeP>74<SeP>71<SeP>132<SeP>169<SeP>126<SeP>102<SeP>64<SeP>36<SeP>77<SeP>44<SeP>151<SeP>72<SeP>62<SeP>52<SeP>73<SeP>62<SeP>144<SeP>58<SeP>77<SeP>90<SeP>37<SeP>83<SeP>75<SeP>130<SeP>105<SeP>95<SeP>74<SeP>66<SeP>62<SeP>84<SeP>68<SeP>108<SeP>70<SeP>57<SeP>21<SeP>56<SeP>50<SeP>158<SeP>82<SeP>101<SeP>86<SeP>90<SeP>97<SeP>153<SeP>67<SeP>70<SeP>93<SeP>86<SeP>32<SeP>40<SeP>95<SeP>58<SeP>48<SeP>68<SeP>124<SeP>56<SeP>197<SeP>84<SeP>69<SeP>63<SeP>58<SeP>55<SeP>68<SeP>84<SeP>83<SeP>105<SeP>59<SeP>77<SeP>116<SeP>62<SeP>78<SeP>152<SeP>57<SeP>62<SeP>56<SeP>42<SeP>64<SeP>92<SeP>88<SeP>75<SeP>73<SeP>162<SeP>63<SeP>109<SeP>51<SeP>62<SeP>48<SeP>101<SeP>76<SeP>65<SeP>116<SeP>89<SeP>93<SeP>79<SeP>89<SeP>132<SeP>59<SeP>50<SeP>29<SeP>48<SeP>111<SeP>54<SeP>54<SeP>90<SeP>86<SeP>50<SeP>86<SeP>100<SeP>123<SeP>79<SeP>34<SeP>28<SeP>59<SeP>63<SeP>193<SeP>131<SeP>63<SeP>67<SeP>119<SeP>53<SeP>57<SeP>95<SeP>91<SeP>182<SeP>75<SeP>48<SeP>99<SeP>100<SeP>65<SeP>78<SeP>80<SeP>116<SeP>112<SeP>66<SeP>101<SeP>76<SeP>77<SeP>82<SeP>63<SeP>70<SeP>83<SeP>123<SeP>54<SeP>137<SeP>78<SeP>96<SeP>139<SeP>53<SeP>82<SeP>155<SeP>45<SeP>65<SeP>126<SeP>119<SeP>75<SeP>191<SeP>68<SeP>145<SeP>56<SeP>76<SeP>60<SeP>83<SeP>87<SeP>70<SeP>60<SeP>57<SeP>72<SeP>51<SeP>86<SeP>38<SeP>104<SeP>93<SeP>111<SeP>69<SeP>74<SeP>98<SeP>37<SeP>50<SeP>96<SeP>46<SeP>50<SeP>55<SeP>77<SeP>87<SeP>62<SeP>110<SeP>49<SeP>73<SeP>42<SeP>34<SeP>231<SeP>86<SeP>41<SeP>81<SeP>59<SeP>91<SeP>84<SeP>45<SeP>41<SeP>114<SeP>134<SeP>80<SeP>45<SeP>46<SeP>91<SeP>51<SeP>40<SeP>67<SeP>90<SeP>125<SeP>65<SeP>61<SeP>110<SeP>63<SeP>67<SeP>27<SeP>24<SeP>56<SeP>32<SeP>45<SeP>102<SeP>71<SeP>58<SeP>58<SeP>89<SeP>262<SeP>50<SeP>28<SeP>66<SeP>64<SeP>117<SeP>139<SeP>64<SeP>50<SeP>72<SeP>147<SeP>87<SeP>96<SeP>66<SeP>105<SeP>31<SeP>96<SeP>41<SeP>34<SeP>42<SeP>74<SeP>53<SeP>91<SeP>70<SeP>140<SeP>106<SeP>56<SeP>67<SeP>56<SeP>47<SeP>80<SeP>82<SeP>127<SeP>40<SeP>80<SeP>195<SeP>40<SeP>64<SeP>51<SeP>67<SeP>161<SeP>361<SeP>33<SeP>45<SeP>17<SeP>49<SeP>37<SeP>46<SeP>64<SeP>112<SeP>170<SeP>95<SeP>57<SeP>363<SeP>58<SeP>70<SeP>285<SeP>140<SeP>196<SeP>50<SeP>53<SeP>55<SeP>65<SeP>68<SeP>45<SeP>52<SeP>63<SeP>21<SeP>37<SeP>83<SeP>90<SeP>52<SeP>78<SeP>46<SeP>57<SeP>55<SeP>32<SeP>26<SeP>41<SeP>114<SeP>28<SeP>35<SeP>815<SeP>71<SeP>88<SeP>113<SeP>111<SeP>93<SeP>68<SeP>25<SeP>30<SeP>41<SeP>178<SeP>77<SeP>96<SeP>66<SeP>117<SeP>31<SeP>24<SeP>55<SeP>107<SeP>145<SeP>35<SeP>53<SeP>65<SeP>54<SeP>66<SeP>86<SeP>43<SeP>105<SeP>69<SeP>78<SeP>65<SeP>104<SeP>50<SeP>90<SeP>130<SeP>121<SeP>109<SeP>115<SeP>95<SeP>62<SeP>73<SeP>51<SeP>79<SeP>65<SeP>150<SeP>105<SeP>79<SeP>47<SeP>76<SeP>61<SeP>75<SeP>96<SeP>95<SeP>63<SeP>82<SeP>92<SeP>82<SeP>51<SeP>54<SeP>51<SeP>82<SeP>159<SeP>78<SeP>228<SeP>140";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "59<SeP>46<SeP>622<SeP>20<SeP>329<SeP>110<SeP>265<SeP>161<SeP>567<SeP>615<SeP>104<SeP>571<SeP>229<SeP>86<SeP>257<SeP>189<SeP>480<SeP>278<SeP>240<SeP>332<SeP>132<SeP>295<SeP>348<SeP>117<SeP>408<SeP>158<SeP>154<SeP>114<SeP>206<SeP>116<SeP>748<SeP>69<SeP>196<SeP>170<SeP>217<SeP>89<SeP>40<SeP>169<SeP>408<SeP>128<SeP>148<SeP>62<SeP>33<SeP>170<SeP>400<SeP>183<SeP>148<SeP>168<SeP>328<SeP>164<SeP>323<SeP>533<SeP>101<SeP>348<SeP>226<SeP>315<SeP>211<SeP>304<SeP>390<SeP>124<SeP>386<SeP>173<SeP>35<SeP>278<SeP>388<SeP>17<SeP>145<SeP>341<SeP>363<SeP>97<SeP>400<SeP>98<SeP>88<SeP>336<SeP>145<SeP>249<SeP>260<SeP>215<SeP>193<SeP>28<SeP>252<SeP>121<SeP>409<SeP>273<SeP>47<SeP>81<SeP>90<SeP>49<SeP>75<SeP>173<SeP>316<SeP>206<SeP>157<SeP>136<SeP>244<SeP>190<SeP>118<SeP>49<SeP>174<SeP>9<SeP>28<SeP>261<SeP>216<SeP>244<SeP>699<SeP>535<SeP>243<SeP>765<SeP>305<SeP>607<SeP>183<SeP>411<SeP>369<SeP>492<SeP>435<SeP>287<SeP>503<SeP>1074<SeP>601<SeP>879<SeP>344<SeP>327<SeP>207<SeP>293<SeP>379<SeP>900<SeP>446<SeP>471<SeP>562<SeP>202<SeP>513<SeP>744<SeP>496<SeP>589<SeP>226<SeP>696<SeP>543<SeP>412<SeP>337<SeP>389<SeP>799<SeP>537<SeP>579<SeP>422<SeP>191<SeP>87<SeP>331<SeP>81<SeP>198<SeP>298<SeP>345<SeP>58<SeP>260<SeP>202<SeP>64<SeP>96<SeP>219<SeP>266<SeP>221<SeP>263<SeP>122<SeP>457<SeP>116<SeP>74<SeP>276<SeP>108<SeP>429<SeP>317<SeP>168<SeP>148<SeP>199<SeP>45<SeP>132<SeP>173<SeP>73<SeP>33<SeP>279<SeP>156<SeP>64<SeP>224<SeP>44<SeP>93<SeP>63<SeP>75<SeP>126<SeP>321<SeP>120<SeP>338<SeP>69<SeP>269<SeP>466<SeP>167<SeP>157<SeP>158<SeP>127<SeP>313<SeP>39<SeP>42<SeP>88<SeP>113<SeP>201<SeP>182<SeP>122<SeP>279<SeP>128<SeP>200<SeP>302<SeP>129<SeP>307<SeP>58<SeP>61<SeP>45<SeP>52<SeP>135<SeP>28<SeP>19<SeP>86<SeP>64<SeP>59<SeP>88<SeP>42<SeP>194<SeP>109<SeP>103<SeP>46<SeP>215<SeP>78<SeP>381<SeP>214<SeP>117<SeP>19<SeP>313<SeP>22<SeP>20<SeP>139<SeP>142<SeP>83<SeP>31<SeP>166<SeP>77<SeP>110<SeP>142<SeP>230<SeP>52<SeP>89<SeP>49<SeP>38<SeP>175<SeP>325<SeP>74<SeP>93<SeP>39<SeP>134<SeP>195<SeP>37<SeP>212<SeP>273<SeP>30<SeP>21<SeP>206<SeP>131<SeP>25<SeP>97<SeP>31<SeP>97<SeP>45<SeP>304<SeP>143<SeP>138<SeP>39<SeP>112<SeP>73<SeP>37<SeP>35<SeP>33<SeP>278<SeP>89<SeP>86<SeP>145<SeP>169<SeP>89<SeP>32<SeP>83<SeP>181<SeP>76<SeP>172<SeP>100<SeP>66<SeP>76<SeP>124<SeP>27<SeP>168<SeP>87<SeP>118<SeP>174<SeP>43<SeP>240<SeP>513<SeP>103<SeP>109<SeP>183<SeP>36<SeP>38<SeP>82<SeP>91<SeP>81<SeP>117<SeP>72<SeP>231<SeP>38<SeP>15<SeP>12<SeP>234<SeP>68<SeP>76<SeP>16<SeP>25<SeP>21<SeP>95<SeP>285<SeP>38<SeP>160<SeP>115<SeP>11<SeP>19<SeP>39<SeP>93<SeP>54<SeP>250<SeP>85<SeP>25<SeP>33<SeP>267<SeP>317<SeP>342<SeP>592<SeP>33<SeP>52<SeP>116<SeP>40<SeP>122<SeP>61<SeP>116<SeP>31<SeP>76<SeP>403<SeP>296<SeP>63<SeP>121<SeP>30<SeP>221<SeP>32<SeP>31<SeP>181<SeP>161<SeP>483<SeP>83<SeP>42<SeP>48<SeP>197<SeP>65<SeP>173<SeP>18<SeP>89<SeP>71<SeP>153<SeP>164<SeP>164<SeP>135<SeP>378<SeP>117<SeP>172<SeP>183<SeP>165<SeP>214<SeP>140<SeP>152<SeP>136<SeP>98<SeP>184<SeP>153<SeP>395<SeP>155<SeP>117<SeP>130<SeP>54<SeP>324<SeP>132<SeP>50<SeP>30<SeP>146<SeP>213<SeP>119<SeP>249<SeP>158<SeP>391<SeP>187<SeP>100<SeP>37<SeP>92";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-13 00:00:00<SeP>2025-02-13 01:47:51<SeP>2025-02-13 03:35:42<SeP>2025-02-13 05:23:33<SeP>2025-02-13 07:11:24<SeP>2025-02-13 08:59:15<SeP>2025-02-13 10:47:06<SeP>2025-02-13 12:34:57<SeP>2025-02-13 14:22:48<SeP>2025-02-13 16:10:39<SeP>2025-02-13 17:58:30<SeP>2025-02-13 19:46:21<SeP>2025-02-13 21:34:12<SeP>2025-02-13 23:22:03<SeP>2025-02-14 01:09:54<SeP>2025-02-14 02:57:45<SeP>2025-02-14 04:45:36<SeP>2025-02-14 06:33:27<SeP>2025-02-14 08:21:18<SeP>2025-02-14 10:09:09<SeP>2025-02-14 11:57:00<SeP>2025-02-14 13:44:51<SeP>2025-02-14 15:32:42<SeP>2025-02-14 17:20:33<SeP>2025-02-14 19:08:24<SeP>2025-02-14 20:56:15<SeP>2025-02-14 22:44:06<SeP>2025-02-15 00:31:57<SeP>2025-02-15 02:19:48<SeP>2025-02-15 04:07:39<SeP>2025-02-15 05:55:30<SeP>2025-02-15 07:43:21<SeP>2025-02-15 09:31:12<SeP>2025-02-15 11:19:03<SeP>2025-02-15 13:06:54<SeP>2025-02-15 14:54:45<SeP>2025-02-15 16:42:36<SeP>2025-02-15 18:30:27<SeP>2025-02-15 20:18:18<SeP>2025-02-15 22:06:09<SeP>2025-02-15 23:54:00<SeP>2025-02-16 01:41:51<SeP>2025-02-16 03:29:42<SeP>2025-02-16 05:17:33<SeP>2025-02-16 07:05:24<SeP>2025-02-16 08:53:15<SeP>2025-02-16 10:41:06<SeP>2025-02-16 12:28:57<SeP>2025-02-16 14:16:48<SeP>2025-02-16 16:04:39<SeP>2025-02-16 17:52:30<SeP>2025-02-16 19:40:21<SeP>2025-02-16 21:28:12<SeP>2025-02-16 23:16:03<SeP>2025-02-17 01:03:54<SeP>2025-02-17 02:51:45<SeP>2025-02-17 04:39:36<SeP>2025-02-17 06:27:27<SeP>2025-02-17 08:15:18<SeP>2025-02-17 10:03:09<SeP>2025-02-17 11:51:00<SeP>2025-02-17 13:38:51<SeP>2025-02-17 15:26:42<SeP>2025-02-17 17:14:33<SeP>2025-02-17 19:02:24<SeP>2025-02-17 20:50:15<SeP>2025-02-17 22:38:06<SeP>2025-02-18 00:25:57<SeP>2025-02-18 02:13:48<SeP>2025-02-18 04:01:39<SeP>2025-02-18 05:49:30<SeP>2025-02-18 07:37:21<SeP>2025-02-18 09:25:12<SeP>2025-02-18 11:13:03<SeP>2025-02-18 13:00:54<SeP>2025-02-18 14:48:45<SeP>2025-02-18 16:36:36<SeP>2025-02-18 18:24:27<SeP>2025-02-18 20:12:18<SeP>2025-02-18 22:00:09<SeP>2025-02-18 23:48:00<SeP>2025-02-19 01:35:51<SeP>2025-02-19 03:23:42<SeP>2025-02-19 05:11:33<SeP>2025-02-19 06:59:24<SeP>2025-02-19 08:47:15<SeP>2025-02-19 10:35:06<SeP>2025-02-19 12:22:57<SeP>2025-02-19 14:10:48<SeP>2025-02-19 15:58:39<SeP>2025-02-19 17:46:30<SeP>2025-02-19 19:34:21<SeP>2025-02-19 21:22:12<SeP>2025-02-19 23:10:03<SeP>2025-02-20 00:57:54<SeP>2025-02-20 02:45:45<SeP>2025-02-20 04:33:36<SeP>2025-02-20 06:21:27<SeP>2025-02-20 08:09:18<SeP>2025-02-20 09:57:09<SeP>2025-02-20 11:45:00<SeP>2025-02-20 13:32:51<SeP>2025-02-20 15:20:42<SeP>2025-02-20 17:08:33<SeP>2025-02-20 18:56:24<SeP>2025-02-20 20:44:15<SeP>2025-02-20 22:32:06<SeP>2025-02-21 00:19:57<SeP>2025-02-21 02:07:48<SeP>2025-02-21 03:55:39<SeP>2025-02-21 05:43:30<SeP>2025-02-21 07:31:21<SeP>2025-02-21 09:19:12<SeP>2025-02-21 11:07:03<SeP>2025-02-21 12:54:54<SeP>2025-02-21 14:42:45<SeP>2025-02-21 16:30:36<SeP>2025-02-21 18:18:27<SeP>2025-02-21 20:06:18<SeP>2025-02-21 21:54:09<SeP>2025-02-21 23:42:00<SeP>2025-02-22 01:29:51<SeP>2025-02-22 03:17:42<SeP>2025-02-22 05:05:33<SeP>2025-02-22 06:53:24<SeP>2025-02-22 08:41:15<SeP>2025-02-22 10:29:06<SeP>2025-02-22 12:16:57<SeP>2025-02-22 14:04:48<SeP>2025-02-22 15:52:39<SeP>2025-02-22 17:40:30<SeP>2025-02-22 19:28:21<SeP>2025-02-22 21:16:12<SeP>2025-02-22 23:04:03<SeP>2025-02-23 00:51:54<SeP>2025-02-23 02:39:45<SeP>2025-02-23 04:27:36<SeP>2025-02-23 06:15:27<SeP>2025-02-23 08:03:18<SeP>2025-02-23 09:51:09<SeP>2025-02-23 11:39:00<SeP>2025-02-23 13:26:51<SeP>2025-02-23 15:14:42<SeP>2025-02-23 17:02:33<SeP>2025-02-23 18:50:24<SeP>2025-02-23 20:38:15<SeP>2025-02-23 22:26:06<SeP>2025-02-24 00:13:57<SeP>2025-02-24 02:01:48<SeP>2025-02-24 03:49:39<SeP>2025-02-24 05:37:30<SeP>2025-02-24 07:25:21<SeP>2025-02-24 09:13:12<SeP>2025-02-24 11:01:03<SeP>2025-02-24 12:48:54<SeP>2025-02-24 14:36:45<SeP>2025-02-24 16:24:36<SeP>2025-02-24 18:12:27<SeP>2025-02-24 20:00:18<SeP>2025-02-24 21:48:09<SeP>2025-02-24 23:36:00<SeP>2025-02-25 01:23:51<SeP>2025-02-25 03:11:42<SeP>2025-02-25 04:59:33<SeP>2025-02-25 06:47:24<SeP>2025-02-25 08:35:15<SeP>2025-02-25 10:23:06<SeP>2025-02-25 12:10:57<SeP>2025-02-25 13:58:48<SeP>2025-02-25 15:46:39<SeP>2025-02-25 17:34:30<SeP>2025-02-25 19:22:21<SeP>2025-02-25 21:10:12<SeP>2025-02-25 22:58:03<SeP>2025-02-26 00:45:54<SeP>2025-02-26 02:33:45<SeP>2025-02-26 04:21:36<SeP>2025-02-26 06:09:27<SeP>2025-02-26 07:57:18<SeP>2025-02-26 09:45:09<SeP>2025-02-26 11:33:00<SeP>2025-02-26 13:20:51<SeP>2025-02-26 15:08:42<SeP>2025-02-26 16:56:33<SeP>2025-02-26 18:44:24<SeP>2025-02-26 20:32:15<SeP>2025-02-26 22:20:06<SeP>2025-02-27 00:07:57<SeP>2025-02-27 01:55:48<SeP>2025-02-27 03:43:39<SeP>2025-02-27 05:31:30<SeP>2025-02-27 07:19:21<SeP>2025-02-27 09:07:12<SeP>2025-02-27 10:55:03<SeP>2025-02-27 12:42:54<SeP>2025-02-27 14:30:45<SeP>2025-02-27 16:18:36<SeP>2025-02-27 18:06:27<SeP>2025-02-27 19:54:18<SeP>2025-02-27 21:42:09<SeP>2025-02-27 23:30:00<SeP>2025-02-28 01:17:51<SeP>2025-02-28 03:05:42<SeP>2025-02-28 04:53:33<SeP>2025-02-28 06:41:24<SeP>2025-02-28 08:29:15<SeP>2025-02-28 10:17:06<SeP>2025-02-28 12:04:57<SeP>2025-02-28 13:52:48<SeP>2025-02-28 15:40:39<SeP>2025-02-28 17:28:30<SeP>2025-02-28 19:16:21<SeP>2025-02-28 21:04:12<SeP>2025-02-28 22:52:03<SeP>2025-03-01 00:39:54<SeP>2025-03-01 02:27:45<SeP>2025-03-01 04:15:36<SeP>2025-03-01 06:03:27<SeP>2025-03-01 07:51:18<SeP>2025-03-01 09:39:09<SeP>2025-03-01 11:27:00<SeP>2025-03-01 13:14:51<SeP>2025-03-01 15:02:42<SeP>2025-03-01 16:50:33<SeP>2025-03-01 18:38:24<SeP>2025-03-01 20:26:15<SeP>2025-03-01 22:14:06<SeP>2025-03-02 00:01:57<SeP>2025-03-02 01:49:48<SeP>2025-03-02 03:37:39<SeP>2025-03-02 05:25:30<SeP>2025-03-02 07:13:21<SeP>2025-03-02 09:01:12<SeP>2025-03-02 10:49:03<SeP>2025-03-02 12:36:54<SeP>2025-03-02 14:24:45<SeP>2025-03-02 16:12:36<SeP>2025-03-02 18:00:27<SeP>2025-03-02 19:48:18<SeP>2025-03-02 21:36:09<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:11:51<SeP>2025-03-03 02:59:42<SeP>2025-03-03 04:47:33<SeP>2025-03-03 06:35:24<SeP>2025-03-03 08:23:15<SeP>2025-03-03 10:11:06<SeP>2025-03-03 11:58:57<SeP>2025-03-03 13:46:48<SeP>2025-03-03 15:34:39<SeP>2025-03-03 17:22:30<SeP>2025-03-03 19:10:21<SeP>2025-03-03 20:58:12<SeP>2025-03-03 22:46:03<SeP>2025-03-04 00:33:54<SeP>2025-03-04 02:21:45<SeP>2025-03-04 04:09:36<SeP>2025-03-04 05:57:27<SeP>2025-03-04 07:45:18<SeP>2025-03-04 09:33:09<SeP>2025-03-04 11:21:00<SeP>2025-03-04 13:08:51<SeP>2025-03-04 14:56:42<SeP>2025-03-04 16:44:33<SeP>2025-03-04 18:32:24<SeP>2025-03-04 20:20:15<SeP>2025-03-04 22:08:06<SeP>2025-03-04 23:55:57<SeP>2025-03-05 01:43:48<SeP>2025-03-05 03:31:39<SeP>2025-03-05 05:19:30<SeP>2025-03-05 07:07:21<SeP>2025-03-05 08:55:12<SeP>2025-03-05 10:43:03<SeP>2025-03-05 12:30:54<SeP>2025-03-05 14:18:45<SeP>2025-03-05 16:06:36<SeP>2025-03-05 17:54:27<SeP>2025-03-05 19:42:18<SeP>2025-03-05 21:30:09<SeP>2025-03-05 23:18:00<SeP>2025-03-06 01:05:51<SeP>2025-03-06 02:53:42<SeP>2025-03-06 04:41:33<SeP>2025-03-06 06:29:24<SeP>2025-03-06 08:17:15<SeP>2025-03-06 10:05:06<SeP>2025-03-06 11:52:57<SeP>2025-03-06 13:40:48<SeP>2025-03-06 15:28:39<SeP>2025-03-06 17:16:30<SeP>2025-03-06 19:04:21<SeP>2025-03-06 20:52:12<SeP>2025-03-06 22:40:03<SeP>2025-03-07 00:27:54<SeP>2025-03-07 02:15:45<SeP>2025-03-07 04:03:36<SeP>2025-03-07 05:51:27<SeP>2025-03-07 07:39:18<SeP>2025-03-07 09:27:09<SeP>2025-03-07 11:15:00<SeP>2025-03-07 13:02:51<SeP>2025-03-07 14:50:42<SeP>2025-03-07 16:38:33<SeP>2025-03-07 18:26:24<SeP>2025-03-07 20:14:15<SeP>2025-03-07 22:02:06<SeP>2025-03-07 23:49:57<SeP>2025-03-08 01:37:48<SeP>2025-03-08 03:25:39<SeP>2025-03-08 05:13:30<SeP>2025-03-08 07:01:21<SeP>2025-03-08 08:49:12<SeP>2025-03-08 10:37:03<SeP>2025-03-08 12:24:54<SeP>2025-03-08 14:12:45<SeP>2025-03-08 16:00:36<SeP>2025-03-08 17:48:27<SeP>2025-03-08 19:36:18<SeP>2025-03-08 21:24:09<SeP>2025-03-08 23:12:00<SeP>2025-03-09 00:59:51<SeP>2025-03-09 03:47:42<SeP>2025-03-09 05:35:33<SeP>2025-03-09 07:23:24<SeP>2025-03-09 09:11:15<SeP>2025-03-09 10:59:06<SeP>2025-03-09 12:46:57<SeP>2025-03-09 14:34:48<SeP>2025-03-09 16:22:39<SeP>2025-03-09 18:10:30<SeP>2025-03-09 19:58:21<SeP>2025-03-09 21:46:12<SeP>2025-03-09 23:34:03<SeP>2025-03-10 01:21:54<SeP>2025-03-10 03:09:45<SeP>2025-03-10 04:57:36<SeP>2025-03-10 06:45:27<SeP>2025-03-10 08:33:18<SeP>2025-03-10 10:21:09<SeP>2025-03-10 12:09:00<SeP>2025-03-10 13:56:51<SeP>2025-03-10 15:44:42<SeP>2025-03-10 17:32:33<SeP>2025-03-10 19:20:24<SeP>2025-03-10 21:08:15<SeP>2025-03-10 22:56:06<SeP>2025-03-11 00:43:57<SeP>2025-03-11 02:31:48<SeP>2025-03-11 04:19:39<SeP>2025-03-11 06:07:30<SeP>2025-03-11 07:55:21<SeP>2025-03-11 09:43:12<SeP>2025-03-11 11:31:03<SeP>2025-03-11 13:18:54<SeP>2025-03-11 15:06:45<SeP>2025-03-11 16:54:36<SeP>2025-03-11 18:42:27<SeP>2025-03-11 20:30:18<SeP>2025-03-11 22:18:09<SeP>2025-03-12 00:06:00<SeP>2025-03-12 01:53:51<SeP>2025-03-12 03:41:42<SeP>2025-03-12 05:29:33<SeP>2025-03-12 07:17:24<SeP>2025-03-12 09:05:15<SeP>2025-03-12 10:53:06<SeP>2025-03-12 12:40:57<SeP>2025-03-12 14:28:48<SeP>2025-03-12 16:16:39<SeP>2025-03-12 18:04:30<SeP>2025-03-12 19:52:21<SeP>2025-03-12 21:40:12<SeP>2025-03-12 23:28:03<SeP>2025-03-13 01:15:54<SeP>2025-03-13 03:03:45<SeP>2025-03-13 04:51:36<SeP>2025-03-13 06:39:27<SeP>2025-03-13 08:27:18<SeP>2025-03-13 10:15:09<SeP>2025-03-13 12:03:00<SeP>2025-03-13 13:50:51<SeP>2025-03-13 15:38:42<SeP>2025-03-13 17:26:33<SeP>2025-03-13 19:14:24<SeP>2025-03-13 21:02:15<SeP>2025-03-13 22:50:06<SeP>2025-03-14 00:37:57<SeP>2025-03-14 02:25:48<SeP>2025-03-14 04:13:39<SeP>2025-03-14 06:01:30<SeP>2025-03-14 07:49:21<SeP>2025-03-14 09:37:12<SeP>2025-03-14 11:25:03<SeP>2025-03-14 13:12:54<SeP>2025-03-14 15:00:45<SeP>2025-03-14 16:48:36<SeP>2025-03-14 18:36:27<SeP>2025-03-14 20:24:18<SeP>2025-03-14 22:12:09";
  const itemLabel       = "Escaneos";
  const itemData        = "112<SeP>100<SeP>117<SeP>41<SeP>69<SeP>83<SeP>166<SeP>69<SeP>129<SeP>26<SeP>77<SeP>121<SeP>45<SeP>82<SeP>75<SeP>99<SeP>135<SeP>111<SeP>178<SeP>97<SeP>51<SeP>48<SeP>89<SeP>41<SeP>86<SeP>106<SeP>108<SeP>70<SeP>74<SeP>71<SeP>132<SeP>169<SeP>126<SeP>102<SeP>64<SeP>36<SeP>77<SeP>44<SeP>151<SeP>72<SeP>62<SeP>52<SeP>73<SeP>62<SeP>144<SeP>58<SeP>77<SeP>90<SeP>37<SeP>83<SeP>75<SeP>130<SeP>105<SeP>95<SeP>74<SeP>66<SeP>62<SeP>84<SeP>68<SeP>108<SeP>70<SeP>57<SeP>21<SeP>56<SeP>50<SeP>158<SeP>82<SeP>101<SeP>86<SeP>90<SeP>97<SeP>153<SeP>67<SeP>70<SeP>93<SeP>86<SeP>32<SeP>40<SeP>95<SeP>58<SeP>48<SeP>68<SeP>124<SeP>56<SeP>197<SeP>84<SeP>69<SeP>63<SeP>58<SeP>55<SeP>68<SeP>84<SeP>83<SeP>105<SeP>59<SeP>77<SeP>116<SeP>62<SeP>78<SeP>152<SeP>57<SeP>62<SeP>56<SeP>42<SeP>64<SeP>92<SeP>88<SeP>75<SeP>73<SeP>162<SeP>63<SeP>109<SeP>51<SeP>62<SeP>48<SeP>101<SeP>76<SeP>65<SeP>116<SeP>89<SeP>93<SeP>79<SeP>89<SeP>132<SeP>59<SeP>50<SeP>29<SeP>48<SeP>111<SeP>54<SeP>54<SeP>90<SeP>86<SeP>50<SeP>86<SeP>100<SeP>123<SeP>79<SeP>34<SeP>28<SeP>59<SeP>63<SeP>193<SeP>131<SeP>63<SeP>67<SeP>119<SeP>53<SeP>57<SeP>95<SeP>91<SeP>182<SeP>75<SeP>48<SeP>99<SeP>100<SeP>65<SeP>78<SeP>80<SeP>116<SeP>112<SeP>66<SeP>101<SeP>76<SeP>77<SeP>82<SeP>63<SeP>70<SeP>83<SeP>123<SeP>54<SeP>137<SeP>78<SeP>96<SeP>139<SeP>53<SeP>82<SeP>155<SeP>45<SeP>65<SeP>126<SeP>119<SeP>75<SeP>191<SeP>68<SeP>145<SeP>56<SeP>76<SeP>60<SeP>83<SeP>87<SeP>70<SeP>60<SeP>57<SeP>72<SeP>51<SeP>86<SeP>38<SeP>104<SeP>93<SeP>111<SeP>69<SeP>74<SeP>98<SeP>37<SeP>50<SeP>96<SeP>46<SeP>50<SeP>55<SeP>77<SeP>87<SeP>62<SeP>110<SeP>49<SeP>73<SeP>42<SeP>34<SeP>231<SeP>86<SeP>41<SeP>81<SeP>59<SeP>91<SeP>84<SeP>45<SeP>41<SeP>114<SeP>134<SeP>80<SeP>45<SeP>46<SeP>91<SeP>51<SeP>40<SeP>67<SeP>90<SeP>125<SeP>65<SeP>61<SeP>110<SeP>63<SeP>67<SeP>27<SeP>24<SeP>56<SeP>32<SeP>45<SeP>102<SeP>71<SeP>58<SeP>58<SeP>89<SeP>262<SeP>50<SeP>28<SeP>66<SeP>64<SeP>117<SeP>139<SeP>64<SeP>50<SeP>72<SeP>147<SeP>87<SeP>96<SeP>66<SeP>105<SeP>31<SeP>96<SeP>41<SeP>34<SeP>42<SeP>74<SeP>53<SeP>91<SeP>70<SeP>140<SeP>106<SeP>56<SeP>67<SeP>56<SeP>47<SeP>80<SeP>82<SeP>127<SeP>40<SeP>80<SeP>195<SeP>40<SeP>64<SeP>51<SeP>67<SeP>161<SeP>361<SeP>33<SeP>45<SeP>17<SeP>49<SeP>37<SeP>46<SeP>64<SeP>112<SeP>170<SeP>95<SeP>57<SeP>363<SeP>58<SeP>70<SeP>285<SeP>140<SeP>196<SeP>50<SeP>53<SeP>55<SeP>65<SeP>68<SeP>45<SeP>52<SeP>63<SeP>21<SeP>37<SeP>83<SeP>90<SeP>52<SeP>78<SeP>46<SeP>57<SeP>55<SeP>32<SeP>26<SeP>41<SeP>114<SeP>28<SeP>35<SeP>815<SeP>71<SeP>88<SeP>113<SeP>111<SeP>93<SeP>68<SeP>25<SeP>30<SeP>41<SeP>178<SeP>77<SeP>96<SeP>66<SeP>117<SeP>31<SeP>24<SeP>55<SeP>107<SeP>145<SeP>35<SeP>53<SeP>65<SeP>54<SeP>66<SeP>86<SeP>43<SeP>105<SeP>69<SeP>78<SeP>65<SeP>104<SeP>50<SeP>90<SeP>130<SeP>121<SeP>109<SeP>115<SeP>95<SeP>62<SeP>73<SeP>51<SeP>79<SeP>65<SeP>150<SeP>105<SeP>79<SeP>47<SeP>76<SeP>61<SeP>75<SeP>96<SeP>95<SeP>63<SeP>82<SeP>92<SeP>82<SeP>51<SeP>54<SeP>51<SeP>82<SeP>159<SeP>78<SeP>228<SeP>140";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-13 00:00:00<SeP>2025-02-13 01:47:51<SeP>2025-02-13 03:35:42<SeP>2025-02-13 05:23:33<SeP>2025-02-13 07:11:24<SeP>2025-02-13 08:59:15<SeP>2025-02-13 10:47:06<SeP>2025-02-13 12:34:57<SeP>2025-02-13 14:22:48<SeP>2025-02-13 16:10:39<SeP>2025-02-13 17:58:30<SeP>2025-02-13 19:46:21<SeP>2025-02-13 21:34:12<SeP>2025-02-13 23:22:03<SeP>2025-02-14 01:09:54<SeP>2025-02-14 02:57:45<SeP>2025-02-14 04:45:36<SeP>2025-02-14 06:33:27<SeP>2025-02-14 08:21:18<SeP>2025-02-14 10:09:09<SeP>2025-02-14 11:57:00<SeP>2025-02-14 13:44:51<SeP>2025-02-14 15:32:42<SeP>2025-02-14 17:20:33<SeP>2025-02-14 19:08:24<SeP>2025-02-14 20:56:15<SeP>2025-02-14 22:44:06<SeP>2025-02-15 00:31:57<SeP>2025-02-15 02:19:48<SeP>2025-02-15 04:07:39<SeP>2025-02-15 05:55:30<SeP>2025-02-15 07:43:21<SeP>2025-02-15 09:31:12<SeP>2025-02-15 11:19:03<SeP>2025-02-15 13:06:54<SeP>2025-02-15 14:54:45<SeP>2025-02-15 16:42:36<SeP>2025-02-15 18:30:27<SeP>2025-02-15 20:18:18<SeP>2025-02-15 22:06:09<SeP>2025-02-15 23:54:00<SeP>2025-02-16 01:41:51<SeP>2025-02-16 03:29:42<SeP>2025-02-16 05:17:33<SeP>2025-02-16 07:05:24<SeP>2025-02-16 08:53:15<SeP>2025-02-16 10:41:06<SeP>2025-02-16 12:28:57<SeP>2025-02-16 14:16:48<SeP>2025-02-16 16:04:39<SeP>2025-02-16 17:52:30<SeP>2025-02-16 19:40:21<SeP>2025-02-16 21:28:12<SeP>2025-02-16 23:16:03<SeP>2025-02-17 01:03:54<SeP>2025-02-17 02:51:45<SeP>2025-02-17 04:39:36<SeP>2025-02-17 06:27:27<SeP>2025-02-17 08:15:18<SeP>2025-02-17 10:03:09<SeP>2025-02-17 11:51:00<SeP>2025-02-17 13:38:51<SeP>2025-02-17 15:26:42<SeP>2025-02-17 17:14:33<SeP>2025-02-17 19:02:24<SeP>2025-02-17 20:50:15<SeP>2025-02-17 22:38:06<SeP>2025-02-18 00:25:57<SeP>2025-02-18 02:13:48<SeP>2025-02-18 04:01:39<SeP>2025-02-18 05:49:30<SeP>2025-02-18 07:37:21<SeP>2025-02-18 09:25:12<SeP>2025-02-18 11:13:03<SeP>2025-02-18 13:00:54<SeP>2025-02-18 14:48:45<SeP>2025-02-18 16:36:36<SeP>2025-02-18 18:24:27<SeP>2025-02-18 20:12:18<SeP>2025-02-18 22:00:09<SeP>2025-02-18 23:48:00<SeP>2025-02-19 01:35:51<SeP>2025-02-19 03:23:42<SeP>2025-02-19 05:11:33<SeP>2025-02-19 06:59:24<SeP>2025-02-19 08:47:15<SeP>2025-02-19 10:35:06<SeP>2025-02-19 12:22:57<SeP>2025-02-19 14:10:48<SeP>2025-02-19 15:58:39<SeP>2025-02-19 17:46:30<SeP>2025-02-19 19:34:21<SeP>2025-02-19 21:22:12<SeP>2025-02-19 23:10:03<SeP>2025-02-20 00:57:54<SeP>2025-02-20 02:45:45<SeP>2025-02-20 04:33:36<SeP>2025-02-20 06:21:27<SeP>2025-02-20 08:09:18<SeP>2025-02-20 09:57:09<SeP>2025-02-20 11:45:00<SeP>2025-02-20 13:32:51<SeP>2025-02-20 15:20:42<SeP>2025-02-20 17:08:33<SeP>2025-02-20 18:56:24<SeP>2025-02-20 20:44:15<SeP>2025-02-20 22:32:06<SeP>2025-02-21 00:19:57<SeP>2025-02-21 02:07:48<SeP>2025-02-21 03:55:39<SeP>2025-02-21 05:43:30<SeP>2025-02-21 07:31:21<SeP>2025-02-21 09:19:12<SeP>2025-02-21 11:07:03<SeP>2025-02-21 12:54:54<SeP>2025-02-21 14:42:45<SeP>2025-02-21 16:30:36<SeP>2025-02-21 18:18:27<SeP>2025-02-21 20:06:18<SeP>2025-02-21 21:54:09<SeP>2025-02-21 23:42:00<SeP>2025-02-22 01:29:51<SeP>2025-02-22 03:17:42<SeP>2025-02-22 05:05:33<SeP>2025-02-22 06:53:24<SeP>2025-02-22 08:41:15<SeP>2025-02-22 10:29:06<SeP>2025-02-22 12:16:57<SeP>2025-02-22 14:04:48<SeP>2025-02-22 15:52:39<SeP>2025-02-22 17:40:30<SeP>2025-02-22 19:28:21<SeP>2025-02-22 21:16:12<SeP>2025-02-22 23:04:03<SeP>2025-02-23 00:51:54<SeP>2025-02-23 02:39:45<SeP>2025-02-23 04:27:36<SeP>2025-02-23 06:15:27<SeP>2025-02-23 08:03:18<SeP>2025-02-23 09:51:09<SeP>2025-02-23 11:39:00<SeP>2025-02-23 13:26:51<SeP>2025-02-23 15:14:42<SeP>2025-02-23 17:02:33<SeP>2025-02-23 18:50:24<SeP>2025-02-23 20:38:15<SeP>2025-02-23 22:26:06<SeP>2025-02-24 00:13:57<SeP>2025-02-24 02:01:48<SeP>2025-02-24 03:49:39<SeP>2025-02-24 05:37:30<SeP>2025-02-24 07:25:21<SeP>2025-02-24 09:13:12<SeP>2025-02-24 11:01:03<SeP>2025-02-24 12:48:54<SeP>2025-02-24 14:36:45<SeP>2025-02-24 16:24:36<SeP>2025-02-24 18:12:27<SeP>2025-02-24 20:00:18<SeP>2025-02-24 21:48:09<SeP>2025-02-24 23:36:00<SeP>2025-02-25 01:23:51<SeP>2025-02-25 03:11:42<SeP>2025-02-25 04:59:33<SeP>2025-02-25 06:47:24<SeP>2025-02-25 08:35:15<SeP>2025-02-25 10:23:06<SeP>2025-02-25 12:10:57<SeP>2025-02-25 13:58:48<SeP>2025-02-25 15:46:39<SeP>2025-02-25 17:34:30<SeP>2025-02-25 19:22:21<SeP>2025-02-25 21:10:12<SeP>2025-02-25 22:58:03<SeP>2025-02-26 00:45:54<SeP>2025-02-26 02:33:45<SeP>2025-02-26 04:21:36<SeP>2025-02-26 06:09:27<SeP>2025-02-26 07:57:18<SeP>2025-02-26 09:45:09<SeP>2025-02-26 11:33:00<SeP>2025-02-26 13:20:51<SeP>2025-02-26 15:08:42<SeP>2025-02-26 16:56:33<SeP>2025-02-26 18:44:24<SeP>2025-02-26 20:32:15<SeP>2025-02-26 22:20:06<SeP>2025-02-27 00:07:57<SeP>2025-02-27 01:55:48<SeP>2025-02-27 03:43:39<SeP>2025-02-27 05:31:30<SeP>2025-02-27 07:19:21<SeP>2025-02-27 09:07:12<SeP>2025-02-27 10:55:03<SeP>2025-02-27 12:42:54<SeP>2025-02-27 14:30:45<SeP>2025-02-27 16:18:36<SeP>2025-02-27 18:06:27<SeP>2025-02-27 19:54:18<SeP>2025-02-27 21:42:09<SeP>2025-02-27 23:30:00<SeP>2025-02-28 01:17:51<SeP>2025-02-28 03:05:42<SeP>2025-02-28 04:53:33<SeP>2025-02-28 06:41:24<SeP>2025-02-28 08:29:15<SeP>2025-02-28 10:17:06<SeP>2025-02-28 12:04:57<SeP>2025-02-28 13:52:48<SeP>2025-02-28 15:40:39<SeP>2025-02-28 17:28:30<SeP>2025-02-28 19:16:21<SeP>2025-02-28 21:04:12<SeP>2025-02-28 22:52:03<SeP>2025-03-01 00:39:54<SeP>2025-03-01 02:27:45<SeP>2025-03-01 04:15:36<SeP>2025-03-01 06:03:27<SeP>2025-03-01 07:51:18<SeP>2025-03-01 09:39:09<SeP>2025-03-01 11:27:00<SeP>2025-03-01 13:14:51<SeP>2025-03-01 15:02:42<SeP>2025-03-01 16:50:33<SeP>2025-03-01 18:38:24<SeP>2025-03-01 20:26:15<SeP>2025-03-01 22:14:06<SeP>2025-03-02 00:01:57<SeP>2025-03-02 01:49:48<SeP>2025-03-02 03:37:39<SeP>2025-03-02 05:25:30<SeP>2025-03-02 07:13:21<SeP>2025-03-02 09:01:12<SeP>2025-03-02 10:49:03<SeP>2025-03-02 12:36:54<SeP>2025-03-02 14:24:45<SeP>2025-03-02 16:12:36<SeP>2025-03-02 18:00:27<SeP>2025-03-02 19:48:18<SeP>2025-03-02 21:36:09<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:11:51<SeP>2025-03-03 02:59:42<SeP>2025-03-03 04:47:33<SeP>2025-03-03 06:35:24<SeP>2025-03-03 08:23:15<SeP>2025-03-03 10:11:06<SeP>2025-03-03 11:58:57<SeP>2025-03-03 13:46:48<SeP>2025-03-03 15:34:39<SeP>2025-03-03 17:22:30<SeP>2025-03-03 19:10:21<SeP>2025-03-03 20:58:12<SeP>2025-03-03 22:46:03<SeP>2025-03-04 00:33:54<SeP>2025-03-04 02:21:45<SeP>2025-03-04 04:09:36<SeP>2025-03-04 05:57:27<SeP>2025-03-04 07:45:18<SeP>2025-03-04 09:33:09<SeP>2025-03-04 11:21:00<SeP>2025-03-04 13:08:51<SeP>2025-03-04 14:56:42<SeP>2025-03-04 16:44:33<SeP>2025-03-04 18:32:24<SeP>2025-03-04 20:20:15<SeP>2025-03-04 22:08:06<SeP>2025-03-04 23:55:57<SeP>2025-03-05 01:43:48<SeP>2025-03-05 03:31:39<SeP>2025-03-05 05:19:30<SeP>2025-03-05 07:07:21<SeP>2025-03-05 08:55:12<SeP>2025-03-05 10:43:03<SeP>2025-03-05 12:30:54<SeP>2025-03-05 14:18:45<SeP>2025-03-05 16:06:36<SeP>2025-03-05 17:54:27<SeP>2025-03-05 19:42:18<SeP>2025-03-05 21:30:09<SeP>2025-03-05 23:18:00<SeP>2025-03-06 01:05:51<SeP>2025-03-06 02:53:42<SeP>2025-03-06 04:41:33<SeP>2025-03-06 06:29:24<SeP>2025-03-06 08:17:15<SeP>2025-03-06 10:05:06<SeP>2025-03-06 11:52:57<SeP>2025-03-06 13:40:48<SeP>2025-03-06 15:28:39<SeP>2025-03-06 17:16:30<SeP>2025-03-06 19:04:21<SeP>2025-03-06 20:52:12<SeP>2025-03-06 22:40:03<SeP>2025-03-07 00:27:54<SeP>2025-03-07 02:15:45<SeP>2025-03-07 04:03:36<SeP>2025-03-07 05:51:27<SeP>2025-03-07 07:39:18<SeP>2025-03-07 09:27:09<SeP>2025-03-07 11:15:00<SeP>2025-03-07 13:02:51<SeP>2025-03-07 14:50:42<SeP>2025-03-07 16:38:33<SeP>2025-03-07 18:26:24<SeP>2025-03-07 20:14:15<SeP>2025-03-07 22:02:06<SeP>2025-03-07 23:49:57<SeP>2025-03-08 01:37:48<SeP>2025-03-08 03:25:39<SeP>2025-03-08 05:13:30<SeP>2025-03-08 07:01:21<SeP>2025-03-08 08:49:12<SeP>2025-03-08 10:37:03<SeP>2025-03-08 12:24:54<SeP>2025-03-08 14:12:45<SeP>2025-03-08 16:00:36<SeP>2025-03-08 17:48:27<SeP>2025-03-08 19:36:18<SeP>2025-03-08 21:24:09<SeP>2025-03-08 23:12:00<SeP>2025-03-09 00:59:51<SeP>2025-03-09 03:47:42<SeP>2025-03-09 05:35:33<SeP>2025-03-09 07:23:24<SeP>2025-03-09 09:11:15<SeP>2025-03-09 10:59:06<SeP>2025-03-09 12:46:57<SeP>2025-03-09 14:34:48<SeP>2025-03-09 16:22:39<SeP>2025-03-09 18:10:30<SeP>2025-03-09 19:58:21<SeP>2025-03-09 21:46:12<SeP>2025-03-09 23:34:03<SeP>2025-03-10 01:21:54<SeP>2025-03-10 03:09:45<SeP>2025-03-10 04:57:36<SeP>2025-03-10 06:45:27<SeP>2025-03-10 08:33:18<SeP>2025-03-10 10:21:09<SeP>2025-03-10 12:09:00<SeP>2025-03-10 13:56:51<SeP>2025-03-10 15:44:42<SeP>2025-03-10 17:32:33<SeP>2025-03-10 19:20:24<SeP>2025-03-10 21:08:15<SeP>2025-03-10 22:56:06<SeP>2025-03-11 00:43:57<SeP>2025-03-11 02:31:48<SeP>2025-03-11 04:19:39<SeP>2025-03-11 06:07:30<SeP>2025-03-11 07:55:21<SeP>2025-03-11 09:43:12<SeP>2025-03-11 11:31:03<SeP>2025-03-11 13:18:54<SeP>2025-03-11 15:06:45<SeP>2025-03-11 16:54:36<SeP>2025-03-11 18:42:27<SeP>2025-03-11 20:30:18<SeP>2025-03-11 22:18:09<SeP>2025-03-12 00:06:00<SeP>2025-03-12 01:53:51<SeP>2025-03-12 03:41:42<SeP>2025-03-12 05:29:33<SeP>2025-03-12 07:17:24<SeP>2025-03-12 09:05:15<SeP>2025-03-12 10:53:06<SeP>2025-03-12 12:40:57<SeP>2025-03-12 14:28:48<SeP>2025-03-12 16:16:39<SeP>2025-03-12 18:04:30<SeP>2025-03-12 19:52:21<SeP>2025-03-12 21:40:12<SeP>2025-03-12 23:28:03<SeP>2025-03-13 01:15:54<SeP>2025-03-13 03:03:45<SeP>2025-03-13 04:51:36<SeP>2025-03-13 06:39:27<SeP>2025-03-13 08:27:18<SeP>2025-03-13 10:15:09<SeP>2025-03-13 12:03:00<SeP>2025-03-13 13:50:51<SeP>2025-03-13 15:38:42<SeP>2025-03-13 17:26:33<SeP>2025-03-13 19:14:24<SeP>2025-03-13 21:02:15<SeP>2025-03-13 22:50:06<SeP>2025-03-14 00:37:57<SeP>2025-03-14 02:25:48<SeP>2025-03-14 04:13:39<SeP>2025-03-14 06:01:30<SeP>2025-03-14 07:49:21<SeP>2025-03-14 09:37:12<SeP>2025-03-14 11:25:03<SeP>2025-03-14 13:12:54<SeP>2025-03-14 15:00:45<SeP>2025-03-14 16:48:36<SeP>2025-03-14 18:36:27<SeP>2025-03-14 20:24:18<SeP>2025-03-14 22:12:09";
  const itemLabel       = "Ataques";
  const itemData        = "59<SeP>46<SeP>622<SeP>20<SeP>329<SeP>110<SeP>265<SeP>161<SeP>567<SeP>615<SeP>104<SeP>571<SeP>229<SeP>86<SeP>257<SeP>189<SeP>480<SeP>278<SeP>240<SeP>332<SeP>132<SeP>295<SeP>348<SeP>117<SeP>408<SeP>158<SeP>154<SeP>114<SeP>206<SeP>116<SeP>748<SeP>69<SeP>196<SeP>170<SeP>217<SeP>89<SeP>40<SeP>169<SeP>408<SeP>128<SeP>148<SeP>62<SeP>33<SeP>170<SeP>400<SeP>183<SeP>148<SeP>168<SeP>328<SeP>164<SeP>323<SeP>533<SeP>101<SeP>348<SeP>226<SeP>315<SeP>211<SeP>304<SeP>390<SeP>124<SeP>386<SeP>173<SeP>35<SeP>278<SeP>388<SeP>17<SeP>145<SeP>341<SeP>363<SeP>97<SeP>400<SeP>98<SeP>88<SeP>336<SeP>145<SeP>249<SeP>260<SeP>215<SeP>193<SeP>28<SeP>252<SeP>121<SeP>409<SeP>273<SeP>47<SeP>81<SeP>90<SeP>49<SeP>75<SeP>173<SeP>316<SeP>206<SeP>157<SeP>136<SeP>244<SeP>190<SeP>118<SeP>49<SeP>174<SeP>9<SeP>28<SeP>261<SeP>216<SeP>244<SeP>699<SeP>535<SeP>243<SeP>765<SeP>305<SeP>607<SeP>183<SeP>411<SeP>369<SeP>492<SeP>435<SeP>287<SeP>503<SeP>1074<SeP>601<SeP>879<SeP>344<SeP>327<SeP>207<SeP>293<SeP>379<SeP>900<SeP>446<SeP>471<SeP>562<SeP>202<SeP>513<SeP>744<SeP>496<SeP>589<SeP>226<SeP>696<SeP>543<SeP>412<SeP>337<SeP>389<SeP>799<SeP>537<SeP>579<SeP>422<SeP>191<SeP>87<SeP>331<SeP>81<SeP>198<SeP>298<SeP>345<SeP>58<SeP>260<SeP>202<SeP>64<SeP>96<SeP>219<SeP>266<SeP>221<SeP>263<SeP>122<SeP>457<SeP>116<SeP>74<SeP>276<SeP>108<SeP>429<SeP>317<SeP>168<SeP>148<SeP>199<SeP>45<SeP>132<SeP>173<SeP>73<SeP>33<SeP>279<SeP>156<SeP>64<SeP>224<SeP>44<SeP>93<SeP>63<SeP>75<SeP>126<SeP>321<SeP>120<SeP>338<SeP>69<SeP>269<SeP>466<SeP>167<SeP>157<SeP>158<SeP>127<SeP>313<SeP>39<SeP>42<SeP>88<SeP>113<SeP>201<SeP>182<SeP>122<SeP>279<SeP>128<SeP>200<SeP>302<SeP>129<SeP>307<SeP>58<SeP>61<SeP>45<SeP>52<SeP>135<SeP>28<SeP>19<SeP>86<SeP>64<SeP>59<SeP>88<SeP>42<SeP>194<SeP>109<SeP>103<SeP>46<SeP>215<SeP>78<SeP>381<SeP>214<SeP>117<SeP>19<SeP>313<SeP>22<SeP>20<SeP>139<SeP>142<SeP>83<SeP>31<SeP>166<SeP>77<SeP>110<SeP>142<SeP>230<SeP>52<SeP>89<SeP>49<SeP>38<SeP>175<SeP>325<SeP>74<SeP>93<SeP>39<SeP>134<SeP>195<SeP>37<SeP>212<SeP>273<SeP>30<SeP>21<SeP>206<SeP>131<SeP>25<SeP>97<SeP>31<SeP>97<SeP>45<SeP>304<SeP>143<SeP>138<SeP>39<SeP>112<SeP>73<SeP>37<SeP>35<SeP>33<SeP>278<SeP>89<SeP>86<SeP>145<SeP>169<SeP>89<SeP>32<SeP>83<SeP>181<SeP>76<SeP>172<SeP>100<SeP>66<SeP>76<SeP>124<SeP>27<SeP>168<SeP>87<SeP>118<SeP>174<SeP>43<SeP>240<SeP>513<SeP>103<SeP>109<SeP>183<SeP>36<SeP>38<SeP>82<SeP>91<SeP>81<SeP>117<SeP>72<SeP>231<SeP>38<SeP>15<SeP>12<SeP>234<SeP>68<SeP>76<SeP>16<SeP>25<SeP>21<SeP>95<SeP>285<SeP>38<SeP>160<SeP>115<SeP>11<SeP>19<SeP>39<SeP>93<SeP>54<SeP>250<SeP>85<SeP>25<SeP>33<SeP>267<SeP>317<SeP>342<SeP>592<SeP>33<SeP>52<SeP>116<SeP>40<SeP>122<SeP>61<SeP>116<SeP>31<SeP>76<SeP>403<SeP>296<SeP>63<SeP>121<SeP>30<SeP>221<SeP>32<SeP>31<SeP>181<SeP>161<SeP>483<SeP>83<SeP>42<SeP>48<SeP>197<SeP>65<SeP>173<SeP>18<SeP>89<SeP>71<SeP>153<SeP>164<SeP>164<SeP>135<SeP>378<SeP>117<SeP>172<SeP>183<SeP>165<SeP>214<SeP>140<SeP>152<SeP>136<SeP>98<SeP>184<SeP>153<SeP>395<SeP>155<SeP>117<SeP>130<SeP>54<SeP>324<SeP>132<SeP>50<SeP>30<SeP>146<SeP>213<SeP>119<SeP>249<SeP>158<SeP>391<SeP>187<SeP>100<SeP>37<SeP>92";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>India<SeP>South Korea<SeP>Hong Kong<SeP>Indonesia<SeP>Russia<SeP>Romania<SeP>France";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "20786<SeP>13873<SeP>12224<SeP>5734<SeP>5176<SeP>4476<SeP>3911<SeP>3814<SeP>3702<SeP>3567";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>United States<SeP>Hong Kong<SeP>India<SeP>Russia<SeP>Macao<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "13843<SeP>3250<SeP>2278<SeP>2193<SeP>1253<SeP>1170<SeP>951<SeP>929<SeP>712<SeP>572";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Taiwan<SeP>United States<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>India<SeP>France<SeP>Romania<SeP>Singapore<SeP>Russia";
  const itemLabel   = "Attacks";
  const itemData    = "11273<SeP>10623<SeP>6943<SeP>4464<SeP>3752<SeP>3541<SeP>3376<SeP>3360<SeP>2563<SeP>2561";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>4766<SeP>47890<SeP>4837<SeP>16276<SeP>207566<SeP>136052<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "10296<SeP>9501<SeP>8937<SeP>4083<SeP>3715<SeP>2921<SeP>2748<SeP>2518<SeP>2346<SeP>1848";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4609<SeP>9269<SeP>3462<SeP>4766<SeP>14061<SeP>701";
  const itemLabel   = "Scans";
  const itemData    = "8076<SeP>2630<SeP>1686<SeP>1257<SeP>1170<SeP>840<SeP>800<SeP>597<SeP>585<SeP>468";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "3462<SeP>14061<SeP>4766<SeP>47890<SeP>16276<SeP>136052<SeP>4134<SeP>207566<SeP>45102<SeP>56971";
  const itemLabel   = "Atacks";
  const itemData    = "9496<SeP>8352<SeP>3486<SeP>3307<SeP>2615<SeP>2345<SeP>1425<SeP>1261<SeP>1229<SeP>1199";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>India<SeP>South Korea<SeP>Hong Kong<SeP>Indonesia<SeP>Russia<SeP>Romania<SeP>France";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "20786<SeP>13873<SeP>12224<SeP>5734<SeP>5176<SeP>4476<SeP>3911<SeP>3814<SeP>3702<SeP>3567";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>United States<SeP>Hong Kong<SeP>India<SeP>Russia<SeP>Macao<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "13843<SeP>3250<SeP>2278<SeP>2193<SeP>1253<SeP>1170<SeP>951<SeP>929<SeP>712<SeP>572";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Taiwan<SeP>United States<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>India<SeP>France<SeP>Romania<SeP>Singapore<SeP>Russia";
  const itemLabel   = "Ataques";
  const itemData    = "11273<SeP>10623<SeP>6943<SeP>4464<SeP>3752<SeP>3541<SeP>3376<SeP>3360<SeP>2563<SeP>2561";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>4766<SeP>47890<SeP>4837<SeP>16276<SeP>207566<SeP>136052<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "10296<SeP>9501<SeP>8937<SeP>4083<SeP>3715<SeP>2921<SeP>2748<SeP>2518<SeP>2346<SeP>1848";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4609<SeP>9269<SeP>3462<SeP>4766<SeP>14061<SeP>701";
  const itemLabel   = "Escaneos";
  const itemData    = "8076<SeP>2630<SeP>1686<SeP>1257<SeP>1170<SeP>840<SeP>800<SeP>597<SeP>585<SeP>468";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "3462<SeP>14061<SeP>4766<SeP>47890<SeP>16276<SeP>136052<SeP>4134<SeP>207566<SeP>45102<SeP>56971";
  const itemLabel   = "Ataques";
  const itemData    = "9496<SeP>8352<SeP>3486<SeP>3307<SeP>2615<SeP>2345<SeP>1425<SeP>1261<SeP>1229<SeP>1199";
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
