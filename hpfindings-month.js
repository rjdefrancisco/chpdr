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
  const metricData    = "128926";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "32797";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "96129";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8690";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "56650";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "39479";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4235";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "7463";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "32016";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3267";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "128926";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "32797";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "96129";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8690";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "56650";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "39479";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4235";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "7463";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "32016";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3267";
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
  const incomingData = "128926<SeP>32797<SeP>96129<SeP>8690";
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
  const incomingData = "96129<SeP>56650<SeP>39479<SeP>4235";
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
  const incomingData = "39479<SeP>7463<SeP>32016<SeP>3267";
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
  const incomingData = "7603<SeP>6833<SeP>770";
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
  const incomingData = "128926<SeP>32797<SeP>96129<SeP>8690";
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
  const incomingData = "96129<SeP>56650<SeP>39479<SeP>4235";
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
  const incomingData = "39479<SeP>7463<SeP>32016<SeP>3267";
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
  const incomingData = "7603<SeP>6833<SeP>770";
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
  const column1Data  = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>2.57.122.193</span>)<SeP>IP05 (<span class=blur>37.44.238.88</span>)<SeP>IP06 (<span class=blur>46.8.237.53</span>)<SeP>IP07 (<span class=blur>80.94.95.112</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>38.12.5.41</span>)<SeP>IP10 (<span class=blur>64.23.130.251</span>)";
  const column2Data  = "AS38264<SeP>AS44486<SeP>AS207566<SeP>AS47890<SeP>AS34534<SeP>AS56971<SeP>AS204428<SeP>AS207566<SeP>AS400619<SeP>AS14061";
  const column3Data  = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States";
  const column4Data  = "6229<SeP>6226<SeP>1396<SeP>1140<SeP>916<SeP>877<SeP>797<SeP>624<SeP>604<SeP>528";
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
  const column1Data  = "IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP12 (<span class=blur>218.92.0.114</span>)<SeP>IP13 (<span class=blur>218.92.0.230</span>)<SeP>IP14 (<span class=blur>126.62.95.172</span>)<SeP>IP15 (<span class=blur>218.92.0.226</span>)<SeP>IP16 (<span class=blur>218.92.0.216</span>)<SeP>IP17 (<span class=blur>218.92.0.233</span>)<SeP>IP18 (<span class=blur>218.92.0.237</span>)<SeP>IP19 (<span class=blur>218.92.0.217</span>)";
  const column2Data  = "AS207566<SeP>AS207566<SeP>AS4134<SeP>AS4134<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data  = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "698<SeP>624<SeP>346<SeP>339<SeP>337<SeP>336<SeP>335<SeP>330<SeP>327<SeP>324";
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
  const column1Data  = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP04 (<span class=blur>2.57.122.193</span>)<SeP>IP05 (<span class=blur>37.44.238.88</span>)<SeP>IP06 (<span class=blur>46.8.237.53</span>)<SeP>IP07 (<span class=blur>80.94.95.112</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP09 (<span class=blur>38.12.5.41</span>)<SeP>IP10 (<span class=blur>64.23.130.251</span>)<SeP>IP11 (<span class=blur>95.182.115.45</span>)";
  const column2Data  = "AS38264<SeP>AS44486<SeP>AS47890<SeP>AS34534<SeP>AS56971<SeP>AS204428<SeP>AS207566<SeP>AS400619<SeP>AS14061<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  const column4Data  = "6229<SeP>6225<SeP>1136<SeP>899<SeP>867<SeP>797<SeP>698<SeP>602<SeP>527<SeP>430";
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
  const column1Data   = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>2.57.122.193</span>)<SeP>IP05 (<span class=blur>37.44.238.88</span>)<SeP>IP06 (<span class=blur>46.8.237.53</span>)<SeP>IP07 (<span class=blur>80.94.95.112</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>38.12.5.41</span>)<SeP>IP10 (<span class=blur>64.23.130.251</span>)";
  const column2Data   = "AS38264<SeP>AS44486<SeP>AS207566<SeP>AS47890<SeP>AS34534<SeP>AS56971<SeP>AS204428<SeP>AS207566<SeP>AS400619<SeP>AS14061";
  const column3Data   = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6229<SeP>6226<SeP>1396<SeP>1140<SeP>916<SeP>877<SeP>797<SeP>624<SeP>604<SeP>528";
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
  const column1Data   = "IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP12 (<span class=blur>218.92.0.114</span>)<SeP>IP13 (<span class=blur>218.92.0.230</span>)<SeP>IP14 (<span class=blur>126.62.95.172</span>)<SeP>IP15 (<span class=blur>218.92.0.226</span>)<SeP>IP16 (<span class=blur>218.92.0.216</span>)<SeP>IP17 (<span class=blur>218.92.0.233</span>)<SeP>IP18 (<span class=blur>218.92.0.237</span>)<SeP>IP19 (<span class=blur>218.92.0.217</span>)";
  const column2Data   = "AS207566<SeP>AS207566<SeP>AS4134<SeP>AS4134<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data   = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "698<SeP>624<SeP>346<SeP>339<SeP>337<SeP>336<SeP>335<SeP>330<SeP>327<SeP>324";
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
  const column1Data   = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP04 (<span class=blur>2.57.122.193</span>)<SeP>IP05 (<span class=blur>37.44.238.88</span>)<SeP>IP06 (<span class=blur>46.8.237.53</span>)<SeP>IP07 (<span class=blur>80.94.95.112</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP09 (<span class=blur>38.12.5.41</span>)<SeP>IP10 (<span class=blur>64.23.130.251</span>)<SeP>IP11 (<span class=blur>95.182.115.45</span>)";
  const column2Data   = "AS38264<SeP>AS44486<SeP>AS47890<SeP>AS34534<SeP>AS56971<SeP>AS204428<SeP>AS207566<SeP>AS400619<SeP>AS14061<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6229<SeP>6225<SeP>1136<SeP>899<SeP>867<SeP>797<SeP>698<SeP>602<SeP>527<SeP>430";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>root epon<SeP>admin 3245gs5662d34<SeP>admin adminHW<SeP>admin hp.com<SeP>root realtek<SeP>root Zxic521 ";
  const column3Data   = "5470<SeP>5217<SeP>1245<SeP>257<SeP>216<SeP>216<SeP>214<SeP>212<SeP>199<SeP>193";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>4e0b27339e784ecfec59332890bec0c7cd664b60416f61c9fef79d936e12d173<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c";
  const column2Data  = "5676<SeP>912<SeP>208<SeP>29<SeP>29<SeP>20<SeP>19<SeP>19<SeP>19<SeP>19";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>download<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
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
  const column2Data  = "96<SeP>20<SeP>15<SeP>8<SeP>7<SeP>4<SeP>2<SeP>2<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "95076<SeP>33850";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>root epon<SeP>admin 3245gs5662d34<SeP>admin adminHW<SeP>admin hp.com<SeP>root realtek<SeP>root Zxic521 ";
  const column3Data   = "5470<SeP>5217<SeP>1245<SeP>257<SeP>216<SeP>216<SeP>214<SeP>212<SeP>199<SeP>193";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>4e0b27339e784ecfec59332890bec0c7cd664b60416f61c9fef79d936e12d173<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c";
  const column2Data  = "5676<SeP>912<SeP>208<SeP>29<SeP>29<SeP>20<SeP>19<SeP>19<SeP>19<SeP>19";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>download<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
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
  const column2Data  = "96<SeP>20<SeP>15<SeP>8<SeP>7<SeP>4<SeP>2<SeP>2<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "95076<SeP>33850";
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
        "name": "traffic between 2025-02-06 and 2025-03-07"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          17101,50
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
        "name": "scans between 2025-02-06 and 2025-03-07"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12663,38,
          17101,50
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
        "name": "attacks between 2025-02-06 and 2025-03-07"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6566,21,
          17101,50
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
        "name": "tráfico entre 2025-02-06 y 2025-03-07"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          17101,50
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
        "name": "escaneos entre 2025-02-06 y 2025-03-07"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12663,38,
          17101,50
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
        "name": "ataques entre 2025-02-06 y 2025-03-07"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6566,21,
          17101,50
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
  const labelsData       = "2025-02-06 00:00:00<SeP>2025-02-06 01:48:00<SeP>2025-02-06 03:36:00<SeP>2025-02-06 05:24:00<SeP>2025-02-06 07:12:00<SeP>2025-02-06 09:00:00<SeP>2025-02-06 10:48:00<SeP>2025-02-06 12:36:00<SeP>2025-02-06 14:24:00<SeP>2025-02-06 16:12:00<SeP>2025-02-06 18:00:00<SeP>2025-02-06 19:48:00<SeP>2025-02-06 21:36:00<SeP>2025-02-06 23:24:00<SeP>2025-02-07 01:12:00<SeP>2025-02-07 03:00:00<SeP>2025-02-07 04:48:00<SeP>2025-02-07 06:36:00<SeP>2025-02-07 08:24:00<SeP>2025-02-07 10:12:00<SeP>2025-02-07 12:00:00<SeP>2025-02-07 13:48:00<SeP>2025-02-07 15:36:00<SeP>2025-02-07 17:24:00<SeP>2025-02-07 19:12:00<SeP>2025-02-07 21:00:00<SeP>2025-02-07 22:48:00<SeP>2025-02-08 00:36:00<SeP>2025-02-08 02:24:00<SeP>2025-02-08 04:12:00<SeP>2025-02-08 06:00:00<SeP>2025-02-08 07:48:00<SeP>2025-02-08 09:36:00<SeP>2025-02-08 11:24:00<SeP>2025-02-08 13:12:00<SeP>2025-02-08 15:00:00<SeP>2025-02-08 16:48:00<SeP>2025-02-08 18:36:00<SeP>2025-02-08 20:24:00<SeP>2025-02-08 22:12:00<SeP>2025-02-09 00:00:00<SeP>2025-02-09 01:48:00<SeP>2025-02-09 03:36:00<SeP>2025-02-09 05:24:00<SeP>2025-02-09 07:12:00<SeP>2025-02-09 09:00:00<SeP>2025-02-09 10:48:00<SeP>2025-02-09 12:36:00<SeP>2025-02-09 14:24:00<SeP>2025-02-09 16:12:00<SeP>2025-02-09 18:00:00<SeP>2025-02-09 19:48:00<SeP>2025-02-09 21:36:00<SeP>2025-02-09 23:24:00<SeP>2025-02-10 01:12:00<SeP>2025-02-10 03:00:00<SeP>2025-02-10 04:48:00<SeP>2025-02-10 06:36:00<SeP>2025-02-10 08:24:00<SeP>2025-02-10 10:12:00<SeP>2025-02-10 12:00:00<SeP>2025-02-10 13:48:00<SeP>2025-02-10 15:36:00<SeP>2025-02-10 17:24:00<SeP>2025-02-10 19:12:00<SeP>2025-02-10 21:00:00<SeP>2025-02-10 22:48:00<SeP>2025-02-11 00:36:00<SeP>2025-02-11 02:24:00<SeP>2025-02-11 04:12:00<SeP>2025-02-11 06:00:00<SeP>2025-02-11 07:48:00<SeP>2025-02-11 09:36:00<SeP>2025-02-11 11:24:00<SeP>2025-02-11 13:12:00<SeP>2025-02-11 15:00:00<SeP>2025-02-11 16:48:00<SeP>2025-02-11 18:36:00<SeP>2025-02-11 20:24:00<SeP>2025-02-11 22:12:00<SeP>2025-02-12 00:00:00<SeP>2025-02-12 01:48:00<SeP>2025-02-12 03:36:00<SeP>2025-02-12 05:24:00<SeP>2025-02-12 07:12:00<SeP>2025-02-12 09:00:00<SeP>2025-02-12 10:48:00<SeP>2025-02-12 12:36:00<SeP>2025-02-12 14:24:00<SeP>2025-02-12 16:12:00<SeP>2025-02-12 18:00:00<SeP>2025-02-12 19:48:00<SeP>2025-02-12 21:36:00<SeP>2025-02-12 23:24:00<SeP>2025-02-13 01:12:00<SeP>2025-02-13 03:00:00<SeP>2025-02-13 04:48:00<SeP>2025-02-13 06:36:00<SeP>2025-02-13 08:24:00<SeP>2025-02-13 10:12:00<SeP>2025-02-13 12:00:00<SeP>2025-02-13 13:48:00<SeP>2025-02-13 15:36:00<SeP>2025-02-13 17:24:00<SeP>2025-02-13 19:12:00<SeP>2025-02-13 21:00:00<SeP>2025-02-13 22:48:00<SeP>2025-02-14 00:36:00<SeP>2025-02-14 02:24:00<SeP>2025-02-14 04:12:00<SeP>2025-02-14 06:00:00<SeP>2025-02-14 07:48:00<SeP>2025-02-14 09:36:00<SeP>2025-02-14 11:24:00<SeP>2025-02-14 13:12:00<SeP>2025-02-14 15:00:00<SeP>2025-02-14 16:48:00<SeP>2025-02-14 18:36:00<SeP>2025-02-14 20:24:00<SeP>2025-02-14 22:12:00<SeP>2025-02-15 00:00:00<SeP>2025-02-15 01:48:00<SeP>2025-02-15 03:36:00<SeP>2025-02-15 05:24:00<SeP>2025-02-15 07:12:00<SeP>2025-02-15 09:00:00<SeP>2025-02-15 10:48:00<SeP>2025-02-15 12:36:00<SeP>2025-02-15 14:24:00<SeP>2025-02-15 16:12:00<SeP>2025-02-15 18:00:00<SeP>2025-02-15 19:48:00<SeP>2025-02-15 21:36:00<SeP>2025-02-15 23:24:00<SeP>2025-02-16 01:12:00<SeP>2025-02-16 03:00:00<SeP>2025-02-16 04:48:00<SeP>2025-02-16 06:36:00<SeP>2025-02-16 08:24:00<SeP>2025-02-16 10:12:00<SeP>2025-02-16 12:00:00<SeP>2025-02-16 13:48:00<SeP>2025-02-16 15:36:00<SeP>2025-02-16 17:24:00<SeP>2025-02-16 19:12:00<SeP>2025-02-16 21:00:00<SeP>2025-02-16 22:48:00<SeP>2025-02-17 00:36:00<SeP>2025-02-17 02:24:00<SeP>2025-02-17 04:12:00<SeP>2025-02-17 06:00:00<SeP>2025-02-17 07:48:00<SeP>2025-02-17 09:36:00<SeP>2025-02-17 11:24:00<SeP>2025-02-17 13:12:00<SeP>2025-02-17 15:00:00<SeP>2025-02-17 16:48:00<SeP>2025-02-17 18:36:00<SeP>2025-02-17 20:24:00<SeP>2025-02-17 22:12:00<SeP>2025-02-18 00:00:00<SeP>2025-02-18 01:48:00<SeP>2025-02-18 03:36:00<SeP>2025-02-18 05:24:00<SeP>2025-02-18 07:12:00<SeP>2025-02-18 09:00:00<SeP>2025-02-18 10:48:00<SeP>2025-02-18 12:36:00<SeP>2025-02-18 14:24:00<SeP>2025-02-18 16:12:00<SeP>2025-02-18 18:00:00<SeP>2025-02-18 19:48:00<SeP>2025-02-18 21:36:00<SeP>2025-02-18 23:24:00<SeP>2025-02-19 01:12:00<SeP>2025-02-19 03:00:00<SeP>2025-02-19 04:48:00<SeP>2025-02-19 06:36:00<SeP>2025-02-19 08:24:00<SeP>2025-02-19 10:12:00<SeP>2025-02-19 12:00:00<SeP>2025-02-19 13:48:00<SeP>2025-02-19 15:36:00<SeP>2025-02-19 17:24:00<SeP>2025-02-19 19:12:00<SeP>2025-02-19 21:00:00<SeP>2025-02-19 22:48:00<SeP>2025-02-20 00:36:00<SeP>2025-02-20 02:24:00<SeP>2025-02-20 04:12:00<SeP>2025-02-20 06:00:00<SeP>2025-02-20 07:48:00<SeP>2025-02-20 09:36:00<SeP>2025-02-20 11:24:00<SeP>2025-02-20 13:12:00<SeP>2025-02-20 15:00:00<SeP>2025-02-20 16:48:00<SeP>2025-02-20 18:36:00<SeP>2025-02-20 20:24:00<SeP>2025-02-20 22:12:00<SeP>2025-02-21 00:00:00<SeP>2025-02-21 01:48:00<SeP>2025-02-21 03:36:00<SeP>2025-02-21 05:24:00<SeP>2025-02-21 07:12:00<SeP>2025-02-21 09:00:00<SeP>2025-02-21 10:48:00<SeP>2025-02-21 12:36:00<SeP>2025-02-21 14:24:00<SeP>2025-02-21 16:12:00<SeP>2025-02-21 18:00:00<SeP>2025-02-21 19:48:00<SeP>2025-02-21 21:36:00<SeP>2025-02-21 23:24:00<SeP>2025-02-22 01:12:00<SeP>2025-02-22 03:00:00<SeP>2025-02-22 04:48:00<SeP>2025-02-22 06:36:00<SeP>2025-02-22 08:24:00<SeP>2025-02-22 10:12:00<SeP>2025-02-22 12:00:00<SeP>2025-02-22 13:48:00<SeP>2025-02-22 15:36:00<SeP>2025-02-22 17:24:00<SeP>2025-02-22 19:12:00<SeP>2025-02-22 21:00:00<SeP>2025-02-22 22:48:00<SeP>2025-02-23 00:36:00<SeP>2025-02-23 02:24:00<SeP>2025-02-23 04:12:00<SeP>2025-02-23 06:00:00<SeP>2025-02-23 07:48:00<SeP>2025-02-23 09:36:00<SeP>2025-02-23 11:24:00<SeP>2025-02-23 13:12:00<SeP>2025-02-23 15:00:00<SeP>2025-02-23 16:48:00<SeP>2025-02-23 18:36:00<SeP>2025-02-23 20:24:00<SeP>2025-02-23 22:12:00<SeP>2025-02-24 00:00:00<SeP>2025-02-24 01:48:00<SeP>2025-02-24 03:36:00<SeP>2025-02-24 05:24:00<SeP>2025-02-24 07:12:00<SeP>2025-02-24 09:00:00<SeP>2025-02-24 10:48:00<SeP>2025-02-24 12:36:00<SeP>2025-02-24 14:24:00<SeP>2025-02-24 16:12:00<SeP>2025-02-24 18:00:00<SeP>2025-02-24 19:48:00<SeP>2025-02-24 21:36:00<SeP>2025-02-24 23:24:00<SeP>2025-02-25 01:12:00<SeP>2025-02-25 03:00:00<SeP>2025-02-25 04:48:00<SeP>2025-02-25 06:36:00<SeP>2025-02-25 08:24:00<SeP>2025-02-25 10:12:00<SeP>2025-02-25 12:00:00<SeP>2025-02-25 13:48:00<SeP>2025-02-25 15:36:00<SeP>2025-02-25 17:24:00<SeP>2025-02-25 19:12:00<SeP>2025-02-25 21:00:00<SeP>2025-02-25 22:48:00<SeP>2025-02-26 00:36:00<SeP>2025-02-26 02:24:00<SeP>2025-02-26 04:12:00<SeP>2025-02-26 06:00:00<SeP>2025-02-26 07:48:00<SeP>2025-02-26 09:36:00<SeP>2025-02-26 11:24:00<SeP>2025-02-26 13:12:00<SeP>2025-02-26 15:00:00<SeP>2025-02-26 16:48:00<SeP>2025-02-26 18:36:00<SeP>2025-02-26 20:24:00<SeP>2025-02-26 22:12:00<SeP>2025-02-27 00:00:00<SeP>2025-02-27 01:48:00<SeP>2025-02-27 03:36:00<SeP>2025-02-27 05:24:00<SeP>2025-02-27 07:12:00<SeP>2025-02-27 09:00:00<SeP>2025-02-27 10:48:00<SeP>2025-02-27 12:36:00<SeP>2025-02-27 14:24:00<SeP>2025-02-27 16:12:00<SeP>2025-02-27 18:00:00<SeP>2025-02-27 19:48:00<SeP>2025-02-27 21:36:00<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:12:00<SeP>2025-02-28 03:00:00<SeP>2025-02-28 04:48:00<SeP>2025-02-28 06:36:00<SeP>2025-02-28 08:24:00<SeP>2025-02-28 10:12:00<SeP>2025-02-28 12:00:00<SeP>2025-02-28 13:48:00<SeP>2025-02-28 15:36:00<SeP>2025-02-28 17:24:00<SeP>2025-02-28 19:12:00<SeP>2025-02-28 21:00:00<SeP>2025-02-28 22:48:00<SeP>2025-03-01 00:36:00<SeP>2025-03-01 02:24:00<SeP>2025-03-01 04:12:00<SeP>2025-03-01 06:00:00<SeP>2025-03-01 07:48:00<SeP>2025-03-01 09:36:00<SeP>2025-03-01 11:24:00<SeP>2025-03-01 13:12:00<SeP>2025-03-01 15:00:00<SeP>2025-03-01 16:48:00<SeP>2025-03-01 18:36:00<SeP>2025-03-01 20:24:00<SeP>2025-03-01 22:12:00<SeP>2025-03-02 00:00:00<SeP>2025-03-02 01:48:00<SeP>2025-03-02 03:36:00<SeP>2025-03-02 05:24:00<SeP>2025-03-02 07:12:00<SeP>2025-03-02 09:00:00<SeP>2025-03-02 10:48:00<SeP>2025-03-02 12:36:00<SeP>2025-03-02 14:24:00<SeP>2025-03-02 16:12:00<SeP>2025-03-02 18:00:00<SeP>2025-03-02 19:48:00<SeP>2025-03-02 21:36:00<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:12:00<SeP>2025-03-03 03:00:00<SeP>2025-03-03 04:48:00<SeP>2025-03-03 06:36:00<SeP>2025-03-03 08:24:00<SeP>2025-03-03 10:12:00<SeP>2025-03-03 12:00:00<SeP>2025-03-03 13:48:00<SeP>2025-03-03 15:36:00<SeP>2025-03-03 17:24:00<SeP>2025-03-03 19:12:00<SeP>2025-03-03 21:00:00<SeP>2025-03-03 22:48:00<SeP>2025-03-04 00:36:00<SeP>2025-03-04 02:24:00<SeP>2025-03-04 04:12:00<SeP>2025-03-04 06:00:00<SeP>2025-03-04 07:48:00<SeP>2025-03-04 09:36:00<SeP>2025-03-04 11:24:00<SeP>2025-03-04 13:12:00<SeP>2025-03-04 15:00:00<SeP>2025-03-04 16:48:00<SeP>2025-03-04 18:36:00<SeP>2025-03-04 20:24:00<SeP>2025-03-04 22:12:00<SeP>2025-03-05 00:00:00<SeP>2025-03-05 01:48:00<SeP>2025-03-05 03:36:00<SeP>2025-03-05 05:24:00<SeP>2025-03-05 07:12:00<SeP>2025-03-05 09:00:00<SeP>2025-03-05 10:48:00<SeP>2025-03-05 12:36:00<SeP>2025-03-05 14:24:00<SeP>2025-03-05 16:12:00<SeP>2025-03-05 18:00:00<SeP>2025-03-05 19:48:00<SeP>2025-03-05 21:36:00<SeP>2025-03-05 23:24:00<SeP>2025-03-06 01:12:00<SeP>2025-03-06 03:00:00<SeP>2025-03-06 04:48:00<SeP>2025-03-06 06:36:00<SeP>2025-03-06 08:24:00<SeP>2025-03-06 10:12:00<SeP>2025-03-06 12:00:00<SeP>2025-03-06 13:48:00<SeP>2025-03-06 15:36:00<SeP>2025-03-06 17:24:00<SeP>2025-03-06 19:12:00<SeP>2025-03-06 21:00:00<SeP>2025-03-06 22:48:00<SeP>2025-03-07 00:36:00<SeP>2025-03-07 02:24:00<SeP>2025-03-07 04:12:00<SeP>2025-03-07 06:00:00<SeP>2025-03-07 07:48:00<SeP>2025-03-07 09:36:00<SeP>2025-03-07 11:24:00<SeP>2025-03-07 13:12:00<SeP>2025-03-07 15:00:00<SeP>2025-03-07 16:48:00<SeP>2025-03-07 18:36:00<SeP>2025-03-07 20:24:00<SeP>2025-03-07 22:12:00";
  const item1Label       = "Scans";
  const item1Data        = "66<SeP>44<SeP>61<SeP>0<SeP>0<SeP>0<SeP>0<SeP>76<SeP>111<SeP>36<SeP>17<SeP>51<SeP>24<SeP>56<SeP>79<SeP>95<SeP>78<SeP>76<SeP>45<SeP>87<SeP>103<SeP>33<SeP>17<SeP>41<SeP>26<SeP>90<SeP>74<SeP>55<SeP>40<SeP>42<SeP>33<SeP>75<SeP>59<SeP>109<SeP>70<SeP>35<SeP>70<SeP>38<SeP>63<SeP>66<SeP>84<SeP>151<SeP>205<SeP>105<SeP>104<SeP>127<SeP>80<SeP>82<SeP>95<SeP>132<SeP>195<SeP>45<SeP>118<SeP>47<SeP>100<SeP>83<SeP>76<SeP>78<SeP>117<SeP>62<SeP>75<SeP>78<SeP>86<SeP>61<SeP>74<SeP>160<SeP>51<SeP>46<SeP>102<SeP>94<SeP>180<SeP>119<SeP>69<SeP>123<SeP>102<SeP>130<SeP>81<SeP>176<SeP>52<SeP>86<SeP>65<SeP>90<SeP>52<SeP>117<SeP>80<SeP>61<SeP>60<SeP>84<SeP>57<SeP>79<SeP>93<SeP>163<SeP>73<SeP>147<SeP>81<SeP>127<SeP>48<SeP>65<SeP>74<SeP>113<SeP>135<SeP>130<SeP>25<SeP>72<SeP>123<SeP>51<SeP>75<SeP>80<SeP>83<SeP>110<SeP>146<SeP>157<SeP>117<SeP>49<SeP>49<SeP>61<SeP>86<SeP>74<SeP>108<SeP>107<SeP>51<SeP>83<SeP>61<SeP>151<SeP>169<SeP>123<SeP>105<SeP>79<SeP>31<SeP>44<SeP>69<SeP>124<SeP>76<SeP>84<SeP>51<SeP>77<SeP>57<SeP>143<SeP>64<SeP>78<SeP>65<SeP>63<SeP>86<SeP>64<SeP>132<SeP>112<SeP>89<SeP>81<SeP>62<SeP>43<SeP>75<SeP>99<SeP>104<SeP>60<SeP>66<SeP>29<SeP>51<SeP>48<SeP>161<SeP>77<SeP>58<SeP>144<SeP>27<SeP>133<SeP>99<SeP>136<SeP>60<SeP>97<SeP>81<SeP>38<SeP>48<SeP>92<SeP>60<SeP>46<SeP>56<SeP>126<SeP>62<SeP>179<SeP>96<SeP>78<SeP>69<SeP>62<SeP>47<SeP>75<SeP>80<SeP>68<SeP>110<SeP>63<SeP>83<SeP>110<SeP>71<SeP>53<SeP>167<SeP>50<SeP>81<SeP>57<SeP>40<SeP>55<SeP>98<SeP>77<SeP>80<SeP>66<SeP>153<SeP>81<SeP>108<SeP>60<SeP>62<SeP>36<SeP>109<SeP>73<SeP>67<SeP>109<SeP>94<SeP>65<SeP>88<SeP>99<SeP>118<SeP>85<SeP>53<SeP>31<SeP>41<SeP>81<SeP>83<SeP>57<SeP>90<SeP>85<SeP>52<SeP>83<SeP>90<SeP>130<SeP>85<SeP>39<SeP>25<SeP>60<SeP>59<SeP>195<SeP>128<SeP>62<SeP>71<SeP>115<SeP>55<SeP>58<SeP>86<SeP>103<SeP>180<SeP>70<SeP>58<SeP>89<SeP>110<SeP>55<SeP>85<SeP>71<SeP>117<SeP>118<SeP>67<SeP>98<SeP>77<SeP>84<SeP>73<SeP>70<SeP>66<SeP>87<SeP>114<SeP>59<SeP>133<SeP>84<SeP>91<SeP>146<SeP>49<SeP>83<SeP>128<SeP>74<SeP>68<SeP>113<SeP>121<SeP>82<SeP>189<SeP>72<SeP>138<SeP>60<SeP>69<SeP>67<SeP>82<SeP>91<SeP>67<SeP>65<SeP>57<SeP>69<SeP>50<SeP>77<SeP>50<SeP>105<SeP>88<SeP>91<SeP>91<SeP>76<SeP>85<SeP>46<SeP>52<SeP>98<SeP>47<SeP>45<SeP>59<SeP>78<SeP>85<SeP>61<SeP>112<SeP>47<SeP>75<SeP>42<SeP>30<SeP>234<SeP>87<SeP>40<SeP>83<SeP>54<SeP>84<SeP>96<SeP>44<SeP>40<SeP>111<SeP>139<SeP>80<SeP>45<SeP>46<SeP>91<SeP>51<SeP>40<SeP>67<SeP>90<SeP>125<SeP>65<SeP>61<SeP>110<SeP>64<SeP>66<SeP>27<SeP>25<SeP>56<SeP>31<SeP>46<SeP>101<SeP>73<SeP>56<SeP>58<SeP>90<SeP>262<SeP>49<SeP>28<SeP>66<SeP>64<SeP>120<SeP>136<SeP>64<SeP>51<SeP>73<SeP>156<SeP>79<SeP>93<SeP>67<SeP>107<SeP>29<SeP>97<SeP>39<SeP>35<SeP>62<SeP>55<SeP>53<SeP>99<SeP>95<SeP>123<SeP>93<SeP>53<SeP>70<SeP>53<SeP>49<SeP>91<SeP>70<SeP>126<SeP>41<SeP>86<SeP>188<SeP>41<SeP>62<SeP>55<SeP>67<SeP>207<SeP>315<SeP>29<SeP>46<SeP>15<SeP>51<SeP>39<SeP>50<SeP>93<SeP>78<SeP>179<SeP>85<SeP>56<SeP>367";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "2585<SeP>2759<SeP>1610<SeP>0<SeP>0<SeP>0<SeP>1<SeP>198<SeP>272<SeP>176<SeP>136<SeP>502<SeP>35<SeP>138<SeP>158<SeP>74<SeP>102<SeP>226<SeP>18<SeP>229<SeP>298<SeP>231<SeP>65<SeP>265<SeP>237<SeP>202<SeP>252<SeP>141<SeP>124<SeP>255<SeP>43<SeP>195<SeP>119<SeP>122<SeP>181<SeP>6<SeP>42<SeP>122<SeP>212<SeP>268<SeP>187<SeP>220<SeP>58<SeP>105<SeP>248<SeP>311<SeP>300<SeP>173<SeP>487<SeP>176<SeP>534<SeP>323<SeP>345<SeP>88<SeP>251<SeP>269<SeP>285<SeP>118<SeP>91<SeP>49<SeP>28<SeP>165<SeP>224<SeP>140<SeP>140<SeP>38<SeP>219<SeP>219<SeP>60<SeP>323<SeP>94<SeP>263<SeP>210<SeP>28<SeP>171<SeP>425<SeP>81<SeP>319<SeP>55<SeP>267<SeP>194<SeP>440<SeP>910<SeP>3218<SeP>2738<SeP>511<SeP>310<SeP>320<SeP>225<SeP>657<SeP>266<SeP>184<SeP>126<SeP>33<SeP>50<SeP>581<SeP>80<SeP>243<SeP>133<SeP>320<SeP>102<SeP>279<SeP>878<SeP>197<SeP>559<SeP>122<SeP>173<SeP>251<SeP>172<SeP>486<SeP>275<SeP>264<SeP>358<SeP>40<SeP>295<SeP>370<SeP>168<SeP>383<SeP>200<SeP>159<SeP>43<SeP>243<SeP>51<SeP>607<SeP>304<SeP>160<SeP>173<SeP>238<SeP>99<SeP>46<SeP>94<SeP>426<SeP>145<SeP>171<SeP>60<SeP>51<SeP>26<SeP>511<SeP>155<SeP>206<SeP>37<SeP>430<SeP>181<SeP>223<SeP>537<SeP>206<SeP>250<SeP>254<SeP>348<SeP>201<SeP>187<SeP>419<SeP>246<SeP>340<SeP>220<SeP>56<SeP>182<SeP>475<SeP>26<SeP>135<SeP>204<SeP>502<SeP>104<SeP>252<SeP>225<SeP>46<SeP>349<SeP>122<SeP>276<SeP>284<SeP>210<SeP>221<SeP>8<SeP>235<SeP>124<SeP>216<SeP>433<SeP>110<SeP>47<SeP>118<SeP>58<SeP>38<SeP>124<SeP>393<SeP>203<SeP>147<SeP>159<SeP>219<SeP>214<SeP>116<SeP>51<SeP>161<SeP>21<SeP>8<SeP>254<SeP>245<SeP>245<SeP>652<SeP>540<SeP>247<SeP>680<SeP>345<SeP>648<SeP>202<SeP>318<SeP>407<SeP>539<SeP>392<SeP>321<SeP>417<SeP>1060<SeP>614<SeP>933<SeP>377<SeP>322<SeP>249<SeP>285<SeP>321<SeP>856<SeP>455<SeP>546<SeP>571<SeP>184<SeP>490<SeP>451<SeP>778<SeP>608<SeP>251<SeP>659<SeP>401<SeP>607<SeP>324<SeP>365<SeP>648<SeP>625<SeP>641<SeP>389<SeP>259<SeP>89<SeP>291<SeP>129<SeP>199<SeP>215<SeP>426<SeP>58<SeP>221<SeP>242<SeP>65<SeP>96<SeP>200<SeP>285<SeP>211<SeP>271<SeP>102<SeP>447<SeP>146<SeP>76<SeP>272<SeP>100<SeP>411<SeP>299<SeP>216<SeP>135<SeP>213<SeP>39<SeP>137<SeP>163<SeP>85<SeP>20<SeP>290<SeP>158<SeP>42<SeP>241<SeP>48<SeP>91<SeP>61<SeP>80<SeP>98<SeP>324<SeP>144<SeP>335<SeP>49<SeP>274<SeP>467<SeP>184<SeP>156<SeP>133<SeP>155<SeP>302<SeP>52<SeP>37<SeP>74<SeP>115<SeP>207<SeP>185<SeP>125<SeP>257<SeP>153<SeP>201<SeP>294<SeP>128<SeP>314<SeP>60<SeP>60<SeP>46<SeP>48<SeP>140<SeP>24<SeP>23<SeP>86<SeP>58<SeP>65<SeP>88<SeP>40<SeP>194<SeP>108<SeP>106<SeP>46<SeP>211<SeP>81<SeP>368<SeP>227<SeP>118<SeP>19<SeP>313<SeP>21<SeP>20<SeP>137<SeP>145<SeP>83<SeP>31<SeP>163<SeP>80<SeP>111<SeP>144<SeP>227<SeP>52<SeP>89<SeP>49<SeP>38<SeP>191<SeP>313<SeP>71<SeP>92<SeP>39<SeP>142<SeP>188<SeP>37<SeP>459<SeP>28<SeP>31<SeP>19<SeP>207<SeP>128<SeP>26<SeP>96<SeP>36<SeP>92<SeP>51<SeP>299<SeP>142<SeP>138<SeP>47<SeP>104<SeP>73<SeP>39<SeP>33<SeP>33<SeP>290<SeP>79<SeP>109<SeP>127<SeP>162<SeP>90<SeP>31<SeP>95<SeP>169<SeP>104<SeP>145<SeP>104<SeP>66<SeP>72<SeP>124<SeP>27<SeP>170<SeP>114<SeP>89<SeP>175<SeP>43<SeP>298<SeP>465<SeP>94<SeP>115<SeP>177<SeP>36<SeP>37<SeP>100<SeP>86<SeP>77<SeP>116";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-06 00:00:00<SeP>2025-02-06 01:48:00<SeP>2025-02-06 03:36:00<SeP>2025-02-06 05:24:00<SeP>2025-02-06 07:12:00<SeP>2025-02-06 09:00:00<SeP>2025-02-06 10:48:00<SeP>2025-02-06 12:36:00<SeP>2025-02-06 14:24:00<SeP>2025-02-06 16:12:00<SeP>2025-02-06 18:00:00<SeP>2025-02-06 19:48:00<SeP>2025-02-06 21:36:00<SeP>2025-02-06 23:24:00<SeP>2025-02-07 01:12:00<SeP>2025-02-07 03:00:00<SeP>2025-02-07 04:48:00<SeP>2025-02-07 06:36:00<SeP>2025-02-07 08:24:00<SeP>2025-02-07 10:12:00<SeP>2025-02-07 12:00:00<SeP>2025-02-07 13:48:00<SeP>2025-02-07 15:36:00<SeP>2025-02-07 17:24:00<SeP>2025-02-07 19:12:00<SeP>2025-02-07 21:00:00<SeP>2025-02-07 22:48:00<SeP>2025-02-08 00:36:00<SeP>2025-02-08 02:24:00<SeP>2025-02-08 04:12:00<SeP>2025-02-08 06:00:00<SeP>2025-02-08 07:48:00<SeP>2025-02-08 09:36:00<SeP>2025-02-08 11:24:00<SeP>2025-02-08 13:12:00<SeP>2025-02-08 15:00:00<SeP>2025-02-08 16:48:00<SeP>2025-02-08 18:36:00<SeP>2025-02-08 20:24:00<SeP>2025-02-08 22:12:00<SeP>2025-02-09 00:00:00<SeP>2025-02-09 01:48:00<SeP>2025-02-09 03:36:00<SeP>2025-02-09 05:24:00<SeP>2025-02-09 07:12:00<SeP>2025-02-09 09:00:00<SeP>2025-02-09 10:48:00<SeP>2025-02-09 12:36:00<SeP>2025-02-09 14:24:00<SeP>2025-02-09 16:12:00<SeP>2025-02-09 18:00:00<SeP>2025-02-09 19:48:00<SeP>2025-02-09 21:36:00<SeP>2025-02-09 23:24:00<SeP>2025-02-10 01:12:00<SeP>2025-02-10 03:00:00<SeP>2025-02-10 04:48:00<SeP>2025-02-10 06:36:00<SeP>2025-02-10 08:24:00<SeP>2025-02-10 10:12:00<SeP>2025-02-10 12:00:00<SeP>2025-02-10 13:48:00<SeP>2025-02-10 15:36:00<SeP>2025-02-10 17:24:00<SeP>2025-02-10 19:12:00<SeP>2025-02-10 21:00:00<SeP>2025-02-10 22:48:00<SeP>2025-02-11 00:36:00<SeP>2025-02-11 02:24:00<SeP>2025-02-11 04:12:00<SeP>2025-02-11 06:00:00<SeP>2025-02-11 07:48:00<SeP>2025-02-11 09:36:00<SeP>2025-02-11 11:24:00<SeP>2025-02-11 13:12:00<SeP>2025-02-11 15:00:00<SeP>2025-02-11 16:48:00<SeP>2025-02-11 18:36:00<SeP>2025-02-11 20:24:00<SeP>2025-02-11 22:12:00<SeP>2025-02-12 00:00:00<SeP>2025-02-12 01:48:00<SeP>2025-02-12 03:36:00<SeP>2025-02-12 05:24:00<SeP>2025-02-12 07:12:00<SeP>2025-02-12 09:00:00<SeP>2025-02-12 10:48:00<SeP>2025-02-12 12:36:00<SeP>2025-02-12 14:24:00<SeP>2025-02-12 16:12:00<SeP>2025-02-12 18:00:00<SeP>2025-02-12 19:48:00<SeP>2025-02-12 21:36:00<SeP>2025-02-12 23:24:00<SeP>2025-02-13 01:12:00<SeP>2025-02-13 03:00:00<SeP>2025-02-13 04:48:00<SeP>2025-02-13 06:36:00<SeP>2025-02-13 08:24:00<SeP>2025-02-13 10:12:00<SeP>2025-02-13 12:00:00<SeP>2025-02-13 13:48:00<SeP>2025-02-13 15:36:00<SeP>2025-02-13 17:24:00<SeP>2025-02-13 19:12:00<SeP>2025-02-13 21:00:00<SeP>2025-02-13 22:48:00<SeP>2025-02-14 00:36:00<SeP>2025-02-14 02:24:00<SeP>2025-02-14 04:12:00<SeP>2025-02-14 06:00:00<SeP>2025-02-14 07:48:00<SeP>2025-02-14 09:36:00<SeP>2025-02-14 11:24:00<SeP>2025-02-14 13:12:00<SeP>2025-02-14 15:00:00<SeP>2025-02-14 16:48:00<SeP>2025-02-14 18:36:00<SeP>2025-02-14 20:24:00<SeP>2025-02-14 22:12:00<SeP>2025-02-15 00:00:00<SeP>2025-02-15 01:48:00<SeP>2025-02-15 03:36:00<SeP>2025-02-15 05:24:00<SeP>2025-02-15 07:12:00<SeP>2025-02-15 09:00:00<SeP>2025-02-15 10:48:00<SeP>2025-02-15 12:36:00<SeP>2025-02-15 14:24:00<SeP>2025-02-15 16:12:00<SeP>2025-02-15 18:00:00<SeP>2025-02-15 19:48:00<SeP>2025-02-15 21:36:00<SeP>2025-02-15 23:24:00<SeP>2025-02-16 01:12:00<SeP>2025-02-16 03:00:00<SeP>2025-02-16 04:48:00<SeP>2025-02-16 06:36:00<SeP>2025-02-16 08:24:00<SeP>2025-02-16 10:12:00<SeP>2025-02-16 12:00:00<SeP>2025-02-16 13:48:00<SeP>2025-02-16 15:36:00<SeP>2025-02-16 17:24:00<SeP>2025-02-16 19:12:00<SeP>2025-02-16 21:00:00<SeP>2025-02-16 22:48:00<SeP>2025-02-17 00:36:00<SeP>2025-02-17 02:24:00<SeP>2025-02-17 04:12:00<SeP>2025-02-17 06:00:00<SeP>2025-02-17 07:48:00<SeP>2025-02-17 09:36:00<SeP>2025-02-17 11:24:00<SeP>2025-02-17 13:12:00<SeP>2025-02-17 15:00:00<SeP>2025-02-17 16:48:00<SeP>2025-02-17 18:36:00<SeP>2025-02-17 20:24:00<SeP>2025-02-17 22:12:00<SeP>2025-02-18 00:00:00<SeP>2025-02-18 01:48:00<SeP>2025-02-18 03:36:00<SeP>2025-02-18 05:24:00<SeP>2025-02-18 07:12:00<SeP>2025-02-18 09:00:00<SeP>2025-02-18 10:48:00<SeP>2025-02-18 12:36:00<SeP>2025-02-18 14:24:00<SeP>2025-02-18 16:12:00<SeP>2025-02-18 18:00:00<SeP>2025-02-18 19:48:00<SeP>2025-02-18 21:36:00<SeP>2025-02-18 23:24:00<SeP>2025-02-19 01:12:00<SeP>2025-02-19 03:00:00<SeP>2025-02-19 04:48:00<SeP>2025-02-19 06:36:00<SeP>2025-02-19 08:24:00<SeP>2025-02-19 10:12:00<SeP>2025-02-19 12:00:00<SeP>2025-02-19 13:48:00<SeP>2025-02-19 15:36:00<SeP>2025-02-19 17:24:00<SeP>2025-02-19 19:12:00<SeP>2025-02-19 21:00:00<SeP>2025-02-19 22:48:00<SeP>2025-02-20 00:36:00<SeP>2025-02-20 02:24:00<SeP>2025-02-20 04:12:00<SeP>2025-02-20 06:00:00<SeP>2025-02-20 07:48:00<SeP>2025-02-20 09:36:00<SeP>2025-02-20 11:24:00<SeP>2025-02-20 13:12:00<SeP>2025-02-20 15:00:00<SeP>2025-02-20 16:48:00<SeP>2025-02-20 18:36:00<SeP>2025-02-20 20:24:00<SeP>2025-02-20 22:12:00<SeP>2025-02-21 00:00:00<SeP>2025-02-21 01:48:00<SeP>2025-02-21 03:36:00<SeP>2025-02-21 05:24:00<SeP>2025-02-21 07:12:00<SeP>2025-02-21 09:00:00<SeP>2025-02-21 10:48:00<SeP>2025-02-21 12:36:00<SeP>2025-02-21 14:24:00<SeP>2025-02-21 16:12:00<SeP>2025-02-21 18:00:00<SeP>2025-02-21 19:48:00<SeP>2025-02-21 21:36:00<SeP>2025-02-21 23:24:00<SeP>2025-02-22 01:12:00<SeP>2025-02-22 03:00:00<SeP>2025-02-22 04:48:00<SeP>2025-02-22 06:36:00<SeP>2025-02-22 08:24:00<SeP>2025-02-22 10:12:00<SeP>2025-02-22 12:00:00<SeP>2025-02-22 13:48:00<SeP>2025-02-22 15:36:00<SeP>2025-02-22 17:24:00<SeP>2025-02-22 19:12:00<SeP>2025-02-22 21:00:00<SeP>2025-02-22 22:48:00<SeP>2025-02-23 00:36:00<SeP>2025-02-23 02:24:00<SeP>2025-02-23 04:12:00<SeP>2025-02-23 06:00:00<SeP>2025-02-23 07:48:00<SeP>2025-02-23 09:36:00<SeP>2025-02-23 11:24:00<SeP>2025-02-23 13:12:00<SeP>2025-02-23 15:00:00<SeP>2025-02-23 16:48:00<SeP>2025-02-23 18:36:00<SeP>2025-02-23 20:24:00<SeP>2025-02-23 22:12:00<SeP>2025-02-24 00:00:00<SeP>2025-02-24 01:48:00<SeP>2025-02-24 03:36:00<SeP>2025-02-24 05:24:00<SeP>2025-02-24 07:12:00<SeP>2025-02-24 09:00:00<SeP>2025-02-24 10:48:00<SeP>2025-02-24 12:36:00<SeP>2025-02-24 14:24:00<SeP>2025-02-24 16:12:00<SeP>2025-02-24 18:00:00<SeP>2025-02-24 19:48:00<SeP>2025-02-24 21:36:00<SeP>2025-02-24 23:24:00<SeP>2025-02-25 01:12:00<SeP>2025-02-25 03:00:00<SeP>2025-02-25 04:48:00<SeP>2025-02-25 06:36:00<SeP>2025-02-25 08:24:00<SeP>2025-02-25 10:12:00<SeP>2025-02-25 12:00:00<SeP>2025-02-25 13:48:00<SeP>2025-02-25 15:36:00<SeP>2025-02-25 17:24:00<SeP>2025-02-25 19:12:00<SeP>2025-02-25 21:00:00<SeP>2025-02-25 22:48:00<SeP>2025-02-26 00:36:00<SeP>2025-02-26 02:24:00<SeP>2025-02-26 04:12:00<SeP>2025-02-26 06:00:00<SeP>2025-02-26 07:48:00<SeP>2025-02-26 09:36:00<SeP>2025-02-26 11:24:00<SeP>2025-02-26 13:12:00<SeP>2025-02-26 15:00:00<SeP>2025-02-26 16:48:00<SeP>2025-02-26 18:36:00<SeP>2025-02-26 20:24:00<SeP>2025-02-26 22:12:00<SeP>2025-02-27 00:00:00<SeP>2025-02-27 01:48:00<SeP>2025-02-27 03:36:00<SeP>2025-02-27 05:24:00<SeP>2025-02-27 07:12:00<SeP>2025-02-27 09:00:00<SeP>2025-02-27 10:48:00<SeP>2025-02-27 12:36:00<SeP>2025-02-27 14:24:00<SeP>2025-02-27 16:12:00<SeP>2025-02-27 18:00:00<SeP>2025-02-27 19:48:00<SeP>2025-02-27 21:36:00<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:12:00<SeP>2025-02-28 03:00:00<SeP>2025-02-28 04:48:00<SeP>2025-02-28 06:36:00<SeP>2025-02-28 08:24:00<SeP>2025-02-28 10:12:00<SeP>2025-02-28 12:00:00<SeP>2025-02-28 13:48:00<SeP>2025-02-28 15:36:00<SeP>2025-02-28 17:24:00<SeP>2025-02-28 19:12:00<SeP>2025-02-28 21:00:00<SeP>2025-02-28 22:48:00<SeP>2025-03-01 00:36:00<SeP>2025-03-01 02:24:00<SeP>2025-03-01 04:12:00<SeP>2025-03-01 06:00:00<SeP>2025-03-01 07:48:00<SeP>2025-03-01 09:36:00<SeP>2025-03-01 11:24:00<SeP>2025-03-01 13:12:00<SeP>2025-03-01 15:00:00<SeP>2025-03-01 16:48:00<SeP>2025-03-01 18:36:00<SeP>2025-03-01 20:24:00<SeP>2025-03-01 22:12:00<SeP>2025-03-02 00:00:00<SeP>2025-03-02 01:48:00<SeP>2025-03-02 03:36:00<SeP>2025-03-02 05:24:00<SeP>2025-03-02 07:12:00<SeP>2025-03-02 09:00:00<SeP>2025-03-02 10:48:00<SeP>2025-03-02 12:36:00<SeP>2025-03-02 14:24:00<SeP>2025-03-02 16:12:00<SeP>2025-03-02 18:00:00<SeP>2025-03-02 19:48:00<SeP>2025-03-02 21:36:00<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:12:00<SeP>2025-03-03 03:00:00<SeP>2025-03-03 04:48:00<SeP>2025-03-03 06:36:00<SeP>2025-03-03 08:24:00<SeP>2025-03-03 10:12:00<SeP>2025-03-03 12:00:00<SeP>2025-03-03 13:48:00<SeP>2025-03-03 15:36:00<SeP>2025-03-03 17:24:00<SeP>2025-03-03 19:12:00<SeP>2025-03-03 21:00:00<SeP>2025-03-03 22:48:00<SeP>2025-03-04 00:36:00<SeP>2025-03-04 02:24:00<SeP>2025-03-04 04:12:00<SeP>2025-03-04 06:00:00<SeP>2025-03-04 07:48:00<SeP>2025-03-04 09:36:00<SeP>2025-03-04 11:24:00<SeP>2025-03-04 13:12:00<SeP>2025-03-04 15:00:00<SeP>2025-03-04 16:48:00<SeP>2025-03-04 18:36:00<SeP>2025-03-04 20:24:00<SeP>2025-03-04 22:12:00<SeP>2025-03-05 00:00:00<SeP>2025-03-05 01:48:00<SeP>2025-03-05 03:36:00<SeP>2025-03-05 05:24:00<SeP>2025-03-05 07:12:00<SeP>2025-03-05 09:00:00<SeP>2025-03-05 10:48:00<SeP>2025-03-05 12:36:00<SeP>2025-03-05 14:24:00<SeP>2025-03-05 16:12:00<SeP>2025-03-05 18:00:00<SeP>2025-03-05 19:48:00<SeP>2025-03-05 21:36:00<SeP>2025-03-05 23:24:00<SeP>2025-03-06 01:12:00<SeP>2025-03-06 03:00:00<SeP>2025-03-06 04:48:00<SeP>2025-03-06 06:36:00<SeP>2025-03-06 08:24:00<SeP>2025-03-06 10:12:00<SeP>2025-03-06 12:00:00<SeP>2025-03-06 13:48:00<SeP>2025-03-06 15:36:00<SeP>2025-03-06 17:24:00<SeP>2025-03-06 19:12:00<SeP>2025-03-06 21:00:00<SeP>2025-03-06 22:48:00<SeP>2025-03-07 00:36:00<SeP>2025-03-07 02:24:00<SeP>2025-03-07 04:12:00<SeP>2025-03-07 06:00:00<SeP>2025-03-07 07:48:00<SeP>2025-03-07 09:36:00<SeP>2025-03-07 11:24:00<SeP>2025-03-07 13:12:00<SeP>2025-03-07 15:00:00<SeP>2025-03-07 16:48:00<SeP>2025-03-07 18:36:00<SeP>2025-03-07 20:24:00<SeP>2025-03-07 22:12:00";
  const itemLabel       = "Scans";
  const itemData        = "66<SeP>44<SeP>61<SeP>0<SeP>0<SeP>0<SeP>0<SeP>76<SeP>111<SeP>36<SeP>17<SeP>51<SeP>24<SeP>56<SeP>79<SeP>95<SeP>78<SeP>76<SeP>45<SeP>87<SeP>103<SeP>33<SeP>17<SeP>41<SeP>26<SeP>90<SeP>74<SeP>55<SeP>40<SeP>42<SeP>33<SeP>75<SeP>59<SeP>109<SeP>70<SeP>35<SeP>70<SeP>38<SeP>63<SeP>66<SeP>84<SeP>151<SeP>205<SeP>105<SeP>104<SeP>127<SeP>80<SeP>82<SeP>95<SeP>132<SeP>195<SeP>45<SeP>118<SeP>47<SeP>100<SeP>83<SeP>76<SeP>78<SeP>117<SeP>62<SeP>75<SeP>78<SeP>86<SeP>61<SeP>74<SeP>160<SeP>51<SeP>46<SeP>102<SeP>94<SeP>180<SeP>119<SeP>69<SeP>123<SeP>102<SeP>130<SeP>81<SeP>176<SeP>52<SeP>86<SeP>65<SeP>90<SeP>52<SeP>117<SeP>80<SeP>61<SeP>60<SeP>84<SeP>57<SeP>79<SeP>93<SeP>163<SeP>73<SeP>147<SeP>81<SeP>127<SeP>48<SeP>65<SeP>74<SeP>113<SeP>135<SeP>130<SeP>25<SeP>72<SeP>123<SeP>51<SeP>75<SeP>80<SeP>83<SeP>110<SeP>146<SeP>157<SeP>117<SeP>49<SeP>49<SeP>61<SeP>86<SeP>74<SeP>108<SeP>107<SeP>51<SeP>83<SeP>61<SeP>151<SeP>169<SeP>123<SeP>105<SeP>79<SeP>31<SeP>44<SeP>69<SeP>124<SeP>76<SeP>84<SeP>51<SeP>77<SeP>57<SeP>143<SeP>64<SeP>78<SeP>65<SeP>63<SeP>86<SeP>64<SeP>132<SeP>112<SeP>89<SeP>81<SeP>62<SeP>43<SeP>75<SeP>99<SeP>104<SeP>60<SeP>66<SeP>29<SeP>51<SeP>48<SeP>161<SeP>77<SeP>58<SeP>144<SeP>27<SeP>133<SeP>99<SeP>136<SeP>60<SeP>97<SeP>81<SeP>38<SeP>48<SeP>92<SeP>60<SeP>46<SeP>56<SeP>126<SeP>62<SeP>179<SeP>96<SeP>78<SeP>69<SeP>62<SeP>47<SeP>75<SeP>80<SeP>68<SeP>110<SeP>63<SeP>83<SeP>110<SeP>71<SeP>53<SeP>167<SeP>50<SeP>81<SeP>57<SeP>40<SeP>55<SeP>98<SeP>77<SeP>80<SeP>66<SeP>153<SeP>81<SeP>108<SeP>60<SeP>62<SeP>36<SeP>109<SeP>73<SeP>67<SeP>109<SeP>94<SeP>65<SeP>88<SeP>99<SeP>118<SeP>85<SeP>53<SeP>31<SeP>41<SeP>81<SeP>83<SeP>57<SeP>90<SeP>85<SeP>52<SeP>83<SeP>90<SeP>130<SeP>85<SeP>39<SeP>25<SeP>60<SeP>59<SeP>195<SeP>128<SeP>62<SeP>71<SeP>115<SeP>55<SeP>58<SeP>86<SeP>103<SeP>180<SeP>70<SeP>58<SeP>89<SeP>110<SeP>55<SeP>85<SeP>71<SeP>117<SeP>118<SeP>67<SeP>98<SeP>77<SeP>84<SeP>73<SeP>70<SeP>66<SeP>87<SeP>114<SeP>59<SeP>133<SeP>84<SeP>91<SeP>146<SeP>49<SeP>83<SeP>128<SeP>74<SeP>68<SeP>113<SeP>121<SeP>82<SeP>189<SeP>72<SeP>138<SeP>60<SeP>69<SeP>67<SeP>82<SeP>91<SeP>67<SeP>65<SeP>57<SeP>69<SeP>50<SeP>77<SeP>50<SeP>105<SeP>88<SeP>91<SeP>91<SeP>76<SeP>85<SeP>46<SeP>52<SeP>98<SeP>47<SeP>45<SeP>59<SeP>78<SeP>85<SeP>61<SeP>112<SeP>47<SeP>75<SeP>42<SeP>30<SeP>234<SeP>87<SeP>40<SeP>83<SeP>54<SeP>84<SeP>96<SeP>44<SeP>40<SeP>111<SeP>139<SeP>80<SeP>45<SeP>46<SeP>91<SeP>51<SeP>40<SeP>67<SeP>90<SeP>125<SeP>65<SeP>61<SeP>110<SeP>64<SeP>66<SeP>27<SeP>25<SeP>56<SeP>31<SeP>46<SeP>101<SeP>73<SeP>56<SeP>58<SeP>90<SeP>262<SeP>49<SeP>28<SeP>66<SeP>64<SeP>120<SeP>136<SeP>64<SeP>51<SeP>73<SeP>156<SeP>79<SeP>93<SeP>67<SeP>107<SeP>29<SeP>97<SeP>39<SeP>35<SeP>62<SeP>55<SeP>53<SeP>99<SeP>95<SeP>123<SeP>93<SeP>53<SeP>70<SeP>53<SeP>49<SeP>91<SeP>70<SeP>126<SeP>41<SeP>86<SeP>188<SeP>41<SeP>62<SeP>55<SeP>67<SeP>207<SeP>315<SeP>29<SeP>46<SeP>15<SeP>51<SeP>39<SeP>50<SeP>93<SeP>78<SeP>179<SeP>85<SeP>56<SeP>367";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-06 00:00:00<SeP>2025-02-06 01:48:00<SeP>2025-02-06 03:36:00<SeP>2025-02-06 05:24:00<SeP>2025-02-06 07:12:00<SeP>2025-02-06 09:00:00<SeP>2025-02-06 10:48:00<SeP>2025-02-06 12:36:00<SeP>2025-02-06 14:24:00<SeP>2025-02-06 16:12:00<SeP>2025-02-06 18:00:00<SeP>2025-02-06 19:48:00<SeP>2025-02-06 21:36:00<SeP>2025-02-06 23:24:00<SeP>2025-02-07 01:12:00<SeP>2025-02-07 03:00:00<SeP>2025-02-07 04:48:00<SeP>2025-02-07 06:36:00<SeP>2025-02-07 08:24:00<SeP>2025-02-07 10:12:00<SeP>2025-02-07 12:00:00<SeP>2025-02-07 13:48:00<SeP>2025-02-07 15:36:00<SeP>2025-02-07 17:24:00<SeP>2025-02-07 19:12:00<SeP>2025-02-07 21:00:00<SeP>2025-02-07 22:48:00<SeP>2025-02-08 00:36:00<SeP>2025-02-08 02:24:00<SeP>2025-02-08 04:12:00<SeP>2025-02-08 06:00:00<SeP>2025-02-08 07:48:00<SeP>2025-02-08 09:36:00<SeP>2025-02-08 11:24:00<SeP>2025-02-08 13:12:00<SeP>2025-02-08 15:00:00<SeP>2025-02-08 16:48:00<SeP>2025-02-08 18:36:00<SeP>2025-02-08 20:24:00<SeP>2025-02-08 22:12:00<SeP>2025-02-09 00:00:00<SeP>2025-02-09 01:48:00<SeP>2025-02-09 03:36:00<SeP>2025-02-09 05:24:00<SeP>2025-02-09 07:12:00<SeP>2025-02-09 09:00:00<SeP>2025-02-09 10:48:00<SeP>2025-02-09 12:36:00<SeP>2025-02-09 14:24:00<SeP>2025-02-09 16:12:00<SeP>2025-02-09 18:00:00<SeP>2025-02-09 19:48:00<SeP>2025-02-09 21:36:00<SeP>2025-02-09 23:24:00<SeP>2025-02-10 01:12:00<SeP>2025-02-10 03:00:00<SeP>2025-02-10 04:48:00<SeP>2025-02-10 06:36:00<SeP>2025-02-10 08:24:00<SeP>2025-02-10 10:12:00<SeP>2025-02-10 12:00:00<SeP>2025-02-10 13:48:00<SeP>2025-02-10 15:36:00<SeP>2025-02-10 17:24:00<SeP>2025-02-10 19:12:00<SeP>2025-02-10 21:00:00<SeP>2025-02-10 22:48:00<SeP>2025-02-11 00:36:00<SeP>2025-02-11 02:24:00<SeP>2025-02-11 04:12:00<SeP>2025-02-11 06:00:00<SeP>2025-02-11 07:48:00<SeP>2025-02-11 09:36:00<SeP>2025-02-11 11:24:00<SeP>2025-02-11 13:12:00<SeP>2025-02-11 15:00:00<SeP>2025-02-11 16:48:00<SeP>2025-02-11 18:36:00<SeP>2025-02-11 20:24:00<SeP>2025-02-11 22:12:00<SeP>2025-02-12 00:00:00<SeP>2025-02-12 01:48:00<SeP>2025-02-12 03:36:00<SeP>2025-02-12 05:24:00<SeP>2025-02-12 07:12:00<SeP>2025-02-12 09:00:00<SeP>2025-02-12 10:48:00<SeP>2025-02-12 12:36:00<SeP>2025-02-12 14:24:00<SeP>2025-02-12 16:12:00<SeP>2025-02-12 18:00:00<SeP>2025-02-12 19:48:00<SeP>2025-02-12 21:36:00<SeP>2025-02-12 23:24:00<SeP>2025-02-13 01:12:00<SeP>2025-02-13 03:00:00<SeP>2025-02-13 04:48:00<SeP>2025-02-13 06:36:00<SeP>2025-02-13 08:24:00<SeP>2025-02-13 10:12:00<SeP>2025-02-13 12:00:00<SeP>2025-02-13 13:48:00<SeP>2025-02-13 15:36:00<SeP>2025-02-13 17:24:00<SeP>2025-02-13 19:12:00<SeP>2025-02-13 21:00:00<SeP>2025-02-13 22:48:00<SeP>2025-02-14 00:36:00<SeP>2025-02-14 02:24:00<SeP>2025-02-14 04:12:00<SeP>2025-02-14 06:00:00<SeP>2025-02-14 07:48:00<SeP>2025-02-14 09:36:00<SeP>2025-02-14 11:24:00<SeP>2025-02-14 13:12:00<SeP>2025-02-14 15:00:00<SeP>2025-02-14 16:48:00<SeP>2025-02-14 18:36:00<SeP>2025-02-14 20:24:00<SeP>2025-02-14 22:12:00<SeP>2025-02-15 00:00:00<SeP>2025-02-15 01:48:00<SeP>2025-02-15 03:36:00<SeP>2025-02-15 05:24:00<SeP>2025-02-15 07:12:00<SeP>2025-02-15 09:00:00<SeP>2025-02-15 10:48:00<SeP>2025-02-15 12:36:00<SeP>2025-02-15 14:24:00<SeP>2025-02-15 16:12:00<SeP>2025-02-15 18:00:00<SeP>2025-02-15 19:48:00<SeP>2025-02-15 21:36:00<SeP>2025-02-15 23:24:00<SeP>2025-02-16 01:12:00<SeP>2025-02-16 03:00:00<SeP>2025-02-16 04:48:00<SeP>2025-02-16 06:36:00<SeP>2025-02-16 08:24:00<SeP>2025-02-16 10:12:00<SeP>2025-02-16 12:00:00<SeP>2025-02-16 13:48:00<SeP>2025-02-16 15:36:00<SeP>2025-02-16 17:24:00<SeP>2025-02-16 19:12:00<SeP>2025-02-16 21:00:00<SeP>2025-02-16 22:48:00<SeP>2025-02-17 00:36:00<SeP>2025-02-17 02:24:00<SeP>2025-02-17 04:12:00<SeP>2025-02-17 06:00:00<SeP>2025-02-17 07:48:00<SeP>2025-02-17 09:36:00<SeP>2025-02-17 11:24:00<SeP>2025-02-17 13:12:00<SeP>2025-02-17 15:00:00<SeP>2025-02-17 16:48:00<SeP>2025-02-17 18:36:00<SeP>2025-02-17 20:24:00<SeP>2025-02-17 22:12:00<SeP>2025-02-18 00:00:00<SeP>2025-02-18 01:48:00<SeP>2025-02-18 03:36:00<SeP>2025-02-18 05:24:00<SeP>2025-02-18 07:12:00<SeP>2025-02-18 09:00:00<SeP>2025-02-18 10:48:00<SeP>2025-02-18 12:36:00<SeP>2025-02-18 14:24:00<SeP>2025-02-18 16:12:00<SeP>2025-02-18 18:00:00<SeP>2025-02-18 19:48:00<SeP>2025-02-18 21:36:00<SeP>2025-02-18 23:24:00<SeP>2025-02-19 01:12:00<SeP>2025-02-19 03:00:00<SeP>2025-02-19 04:48:00<SeP>2025-02-19 06:36:00<SeP>2025-02-19 08:24:00<SeP>2025-02-19 10:12:00<SeP>2025-02-19 12:00:00<SeP>2025-02-19 13:48:00<SeP>2025-02-19 15:36:00<SeP>2025-02-19 17:24:00<SeP>2025-02-19 19:12:00<SeP>2025-02-19 21:00:00<SeP>2025-02-19 22:48:00<SeP>2025-02-20 00:36:00<SeP>2025-02-20 02:24:00<SeP>2025-02-20 04:12:00<SeP>2025-02-20 06:00:00<SeP>2025-02-20 07:48:00<SeP>2025-02-20 09:36:00<SeP>2025-02-20 11:24:00<SeP>2025-02-20 13:12:00<SeP>2025-02-20 15:00:00<SeP>2025-02-20 16:48:00<SeP>2025-02-20 18:36:00<SeP>2025-02-20 20:24:00<SeP>2025-02-20 22:12:00<SeP>2025-02-21 00:00:00<SeP>2025-02-21 01:48:00<SeP>2025-02-21 03:36:00<SeP>2025-02-21 05:24:00<SeP>2025-02-21 07:12:00<SeP>2025-02-21 09:00:00<SeP>2025-02-21 10:48:00<SeP>2025-02-21 12:36:00<SeP>2025-02-21 14:24:00<SeP>2025-02-21 16:12:00<SeP>2025-02-21 18:00:00<SeP>2025-02-21 19:48:00<SeP>2025-02-21 21:36:00<SeP>2025-02-21 23:24:00<SeP>2025-02-22 01:12:00<SeP>2025-02-22 03:00:00<SeP>2025-02-22 04:48:00<SeP>2025-02-22 06:36:00<SeP>2025-02-22 08:24:00<SeP>2025-02-22 10:12:00<SeP>2025-02-22 12:00:00<SeP>2025-02-22 13:48:00<SeP>2025-02-22 15:36:00<SeP>2025-02-22 17:24:00<SeP>2025-02-22 19:12:00<SeP>2025-02-22 21:00:00<SeP>2025-02-22 22:48:00<SeP>2025-02-23 00:36:00<SeP>2025-02-23 02:24:00<SeP>2025-02-23 04:12:00<SeP>2025-02-23 06:00:00<SeP>2025-02-23 07:48:00<SeP>2025-02-23 09:36:00<SeP>2025-02-23 11:24:00<SeP>2025-02-23 13:12:00<SeP>2025-02-23 15:00:00<SeP>2025-02-23 16:48:00<SeP>2025-02-23 18:36:00<SeP>2025-02-23 20:24:00<SeP>2025-02-23 22:12:00<SeP>2025-02-24 00:00:00<SeP>2025-02-24 01:48:00<SeP>2025-02-24 03:36:00<SeP>2025-02-24 05:24:00<SeP>2025-02-24 07:12:00<SeP>2025-02-24 09:00:00<SeP>2025-02-24 10:48:00<SeP>2025-02-24 12:36:00<SeP>2025-02-24 14:24:00<SeP>2025-02-24 16:12:00<SeP>2025-02-24 18:00:00<SeP>2025-02-24 19:48:00<SeP>2025-02-24 21:36:00<SeP>2025-02-24 23:24:00<SeP>2025-02-25 01:12:00<SeP>2025-02-25 03:00:00<SeP>2025-02-25 04:48:00<SeP>2025-02-25 06:36:00<SeP>2025-02-25 08:24:00<SeP>2025-02-25 10:12:00<SeP>2025-02-25 12:00:00<SeP>2025-02-25 13:48:00<SeP>2025-02-25 15:36:00<SeP>2025-02-25 17:24:00<SeP>2025-02-25 19:12:00<SeP>2025-02-25 21:00:00<SeP>2025-02-25 22:48:00<SeP>2025-02-26 00:36:00<SeP>2025-02-26 02:24:00<SeP>2025-02-26 04:12:00<SeP>2025-02-26 06:00:00<SeP>2025-02-26 07:48:00<SeP>2025-02-26 09:36:00<SeP>2025-02-26 11:24:00<SeP>2025-02-26 13:12:00<SeP>2025-02-26 15:00:00<SeP>2025-02-26 16:48:00<SeP>2025-02-26 18:36:00<SeP>2025-02-26 20:24:00<SeP>2025-02-26 22:12:00<SeP>2025-02-27 00:00:00<SeP>2025-02-27 01:48:00<SeP>2025-02-27 03:36:00<SeP>2025-02-27 05:24:00<SeP>2025-02-27 07:12:00<SeP>2025-02-27 09:00:00<SeP>2025-02-27 10:48:00<SeP>2025-02-27 12:36:00<SeP>2025-02-27 14:24:00<SeP>2025-02-27 16:12:00<SeP>2025-02-27 18:00:00<SeP>2025-02-27 19:48:00<SeP>2025-02-27 21:36:00<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:12:00<SeP>2025-02-28 03:00:00<SeP>2025-02-28 04:48:00<SeP>2025-02-28 06:36:00<SeP>2025-02-28 08:24:00<SeP>2025-02-28 10:12:00<SeP>2025-02-28 12:00:00<SeP>2025-02-28 13:48:00<SeP>2025-02-28 15:36:00<SeP>2025-02-28 17:24:00<SeP>2025-02-28 19:12:00<SeP>2025-02-28 21:00:00<SeP>2025-02-28 22:48:00<SeP>2025-03-01 00:36:00<SeP>2025-03-01 02:24:00<SeP>2025-03-01 04:12:00<SeP>2025-03-01 06:00:00<SeP>2025-03-01 07:48:00<SeP>2025-03-01 09:36:00<SeP>2025-03-01 11:24:00<SeP>2025-03-01 13:12:00<SeP>2025-03-01 15:00:00<SeP>2025-03-01 16:48:00<SeP>2025-03-01 18:36:00<SeP>2025-03-01 20:24:00<SeP>2025-03-01 22:12:00<SeP>2025-03-02 00:00:00<SeP>2025-03-02 01:48:00<SeP>2025-03-02 03:36:00<SeP>2025-03-02 05:24:00<SeP>2025-03-02 07:12:00<SeP>2025-03-02 09:00:00<SeP>2025-03-02 10:48:00<SeP>2025-03-02 12:36:00<SeP>2025-03-02 14:24:00<SeP>2025-03-02 16:12:00<SeP>2025-03-02 18:00:00<SeP>2025-03-02 19:48:00<SeP>2025-03-02 21:36:00<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:12:00<SeP>2025-03-03 03:00:00<SeP>2025-03-03 04:48:00<SeP>2025-03-03 06:36:00<SeP>2025-03-03 08:24:00<SeP>2025-03-03 10:12:00<SeP>2025-03-03 12:00:00<SeP>2025-03-03 13:48:00<SeP>2025-03-03 15:36:00<SeP>2025-03-03 17:24:00<SeP>2025-03-03 19:12:00<SeP>2025-03-03 21:00:00<SeP>2025-03-03 22:48:00<SeP>2025-03-04 00:36:00<SeP>2025-03-04 02:24:00<SeP>2025-03-04 04:12:00<SeP>2025-03-04 06:00:00<SeP>2025-03-04 07:48:00<SeP>2025-03-04 09:36:00<SeP>2025-03-04 11:24:00<SeP>2025-03-04 13:12:00<SeP>2025-03-04 15:00:00<SeP>2025-03-04 16:48:00<SeP>2025-03-04 18:36:00<SeP>2025-03-04 20:24:00<SeP>2025-03-04 22:12:00<SeP>2025-03-05 00:00:00<SeP>2025-03-05 01:48:00<SeP>2025-03-05 03:36:00<SeP>2025-03-05 05:24:00<SeP>2025-03-05 07:12:00<SeP>2025-03-05 09:00:00<SeP>2025-03-05 10:48:00<SeP>2025-03-05 12:36:00<SeP>2025-03-05 14:24:00<SeP>2025-03-05 16:12:00<SeP>2025-03-05 18:00:00<SeP>2025-03-05 19:48:00<SeP>2025-03-05 21:36:00<SeP>2025-03-05 23:24:00<SeP>2025-03-06 01:12:00<SeP>2025-03-06 03:00:00<SeP>2025-03-06 04:48:00<SeP>2025-03-06 06:36:00<SeP>2025-03-06 08:24:00<SeP>2025-03-06 10:12:00<SeP>2025-03-06 12:00:00<SeP>2025-03-06 13:48:00<SeP>2025-03-06 15:36:00<SeP>2025-03-06 17:24:00<SeP>2025-03-06 19:12:00<SeP>2025-03-06 21:00:00<SeP>2025-03-06 22:48:00<SeP>2025-03-07 00:36:00<SeP>2025-03-07 02:24:00<SeP>2025-03-07 04:12:00<SeP>2025-03-07 06:00:00<SeP>2025-03-07 07:48:00<SeP>2025-03-07 09:36:00<SeP>2025-03-07 11:24:00<SeP>2025-03-07 13:12:00<SeP>2025-03-07 15:00:00<SeP>2025-03-07 16:48:00<SeP>2025-03-07 18:36:00<SeP>2025-03-07 20:24:00<SeP>2025-03-07 22:12:00";
  const itemLabel       = "Attacks";
  const itemData        = "2585<SeP>2759<SeP>1610<SeP>0<SeP>0<SeP>0<SeP>1<SeP>198<SeP>272<SeP>176<SeP>136<SeP>502<SeP>35<SeP>138<SeP>158<SeP>74<SeP>102<SeP>226<SeP>18<SeP>229<SeP>298<SeP>231<SeP>65<SeP>265<SeP>237<SeP>202<SeP>252<SeP>141<SeP>124<SeP>255<SeP>43<SeP>195<SeP>119<SeP>122<SeP>181<SeP>6<SeP>42<SeP>122<SeP>212<SeP>268<SeP>187<SeP>220<SeP>58<SeP>105<SeP>248<SeP>311<SeP>300<SeP>173<SeP>487<SeP>176<SeP>534<SeP>323<SeP>345<SeP>88<SeP>251<SeP>269<SeP>285<SeP>118<SeP>91<SeP>49<SeP>28<SeP>165<SeP>224<SeP>140<SeP>140<SeP>38<SeP>219<SeP>219<SeP>60<SeP>323<SeP>94<SeP>263<SeP>210<SeP>28<SeP>171<SeP>425<SeP>81<SeP>319<SeP>55<SeP>267<SeP>194<SeP>440<SeP>910<SeP>3218<SeP>2738<SeP>511<SeP>310<SeP>320<SeP>225<SeP>657<SeP>266<SeP>184<SeP>126<SeP>33<SeP>50<SeP>581<SeP>80<SeP>243<SeP>133<SeP>320<SeP>102<SeP>279<SeP>878<SeP>197<SeP>559<SeP>122<SeP>173<SeP>251<SeP>172<SeP>486<SeP>275<SeP>264<SeP>358<SeP>40<SeP>295<SeP>370<SeP>168<SeP>383<SeP>200<SeP>159<SeP>43<SeP>243<SeP>51<SeP>607<SeP>304<SeP>160<SeP>173<SeP>238<SeP>99<SeP>46<SeP>94<SeP>426<SeP>145<SeP>171<SeP>60<SeP>51<SeP>26<SeP>511<SeP>155<SeP>206<SeP>37<SeP>430<SeP>181<SeP>223<SeP>537<SeP>206<SeP>250<SeP>254<SeP>348<SeP>201<SeP>187<SeP>419<SeP>246<SeP>340<SeP>220<SeP>56<SeP>182<SeP>475<SeP>26<SeP>135<SeP>204<SeP>502<SeP>104<SeP>252<SeP>225<SeP>46<SeP>349<SeP>122<SeP>276<SeP>284<SeP>210<SeP>221<SeP>8<SeP>235<SeP>124<SeP>216<SeP>433<SeP>110<SeP>47<SeP>118<SeP>58<SeP>38<SeP>124<SeP>393<SeP>203<SeP>147<SeP>159<SeP>219<SeP>214<SeP>116<SeP>51<SeP>161<SeP>21<SeP>8<SeP>254<SeP>245<SeP>245<SeP>652<SeP>540<SeP>247<SeP>680<SeP>345<SeP>648<SeP>202<SeP>318<SeP>407<SeP>539<SeP>392<SeP>321<SeP>417<SeP>1060<SeP>614<SeP>933<SeP>377<SeP>322<SeP>249<SeP>285<SeP>321<SeP>856<SeP>455<SeP>546<SeP>571<SeP>184<SeP>490<SeP>451<SeP>778<SeP>608<SeP>251<SeP>659<SeP>401<SeP>607<SeP>324<SeP>365<SeP>648<SeP>625<SeP>641<SeP>389<SeP>259<SeP>89<SeP>291<SeP>129<SeP>199<SeP>215<SeP>426<SeP>58<SeP>221<SeP>242<SeP>65<SeP>96<SeP>200<SeP>285<SeP>211<SeP>271<SeP>102<SeP>447<SeP>146<SeP>76<SeP>272<SeP>100<SeP>411<SeP>299<SeP>216<SeP>135<SeP>213<SeP>39<SeP>137<SeP>163<SeP>85<SeP>20<SeP>290<SeP>158<SeP>42<SeP>241<SeP>48<SeP>91<SeP>61<SeP>80<SeP>98<SeP>324<SeP>144<SeP>335<SeP>49<SeP>274<SeP>467<SeP>184<SeP>156<SeP>133<SeP>155<SeP>302<SeP>52<SeP>37<SeP>74<SeP>115<SeP>207<SeP>185<SeP>125<SeP>257<SeP>153<SeP>201<SeP>294<SeP>128<SeP>314<SeP>60<SeP>60<SeP>46<SeP>48<SeP>140<SeP>24<SeP>23<SeP>86<SeP>58<SeP>65<SeP>88<SeP>40<SeP>194<SeP>108<SeP>106<SeP>46<SeP>211<SeP>81<SeP>368<SeP>227<SeP>118<SeP>19<SeP>313<SeP>21<SeP>20<SeP>137<SeP>145<SeP>83<SeP>31<SeP>163<SeP>80<SeP>111<SeP>144<SeP>227<SeP>52<SeP>89<SeP>49<SeP>38<SeP>191<SeP>313<SeP>71<SeP>92<SeP>39<SeP>142<SeP>188<SeP>37<SeP>459<SeP>28<SeP>31<SeP>19<SeP>207<SeP>128<SeP>26<SeP>96<SeP>36<SeP>92<SeP>51<SeP>299<SeP>142<SeP>138<SeP>47<SeP>104<SeP>73<SeP>39<SeP>33<SeP>33<SeP>290<SeP>79<SeP>109<SeP>127<SeP>162<SeP>90<SeP>31<SeP>95<SeP>169<SeP>104<SeP>145<SeP>104<SeP>66<SeP>72<SeP>124<SeP>27<SeP>170<SeP>114<SeP>89<SeP>175<SeP>43<SeP>298<SeP>465<SeP>94<SeP>115<SeP>177<SeP>36<SeP>37<SeP>100<SeP>86<SeP>77<SeP>116";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2025-02-06 00:00:00<SeP>2025-02-06 01:48:00<SeP>2025-02-06 03:36:00<SeP>2025-02-06 05:24:00<SeP>2025-02-06 07:12:00<SeP>2025-02-06 09:00:00<SeP>2025-02-06 10:48:00<SeP>2025-02-06 12:36:00<SeP>2025-02-06 14:24:00<SeP>2025-02-06 16:12:00<SeP>2025-02-06 18:00:00<SeP>2025-02-06 19:48:00<SeP>2025-02-06 21:36:00<SeP>2025-02-06 23:24:00<SeP>2025-02-07 01:12:00<SeP>2025-02-07 03:00:00<SeP>2025-02-07 04:48:00<SeP>2025-02-07 06:36:00<SeP>2025-02-07 08:24:00<SeP>2025-02-07 10:12:00<SeP>2025-02-07 12:00:00<SeP>2025-02-07 13:48:00<SeP>2025-02-07 15:36:00<SeP>2025-02-07 17:24:00<SeP>2025-02-07 19:12:00<SeP>2025-02-07 21:00:00<SeP>2025-02-07 22:48:00<SeP>2025-02-08 00:36:00<SeP>2025-02-08 02:24:00<SeP>2025-02-08 04:12:00<SeP>2025-02-08 06:00:00<SeP>2025-02-08 07:48:00<SeP>2025-02-08 09:36:00<SeP>2025-02-08 11:24:00<SeP>2025-02-08 13:12:00<SeP>2025-02-08 15:00:00<SeP>2025-02-08 16:48:00<SeP>2025-02-08 18:36:00<SeP>2025-02-08 20:24:00<SeP>2025-02-08 22:12:00<SeP>2025-02-09 00:00:00<SeP>2025-02-09 01:48:00<SeP>2025-02-09 03:36:00<SeP>2025-02-09 05:24:00<SeP>2025-02-09 07:12:00<SeP>2025-02-09 09:00:00<SeP>2025-02-09 10:48:00<SeP>2025-02-09 12:36:00<SeP>2025-02-09 14:24:00<SeP>2025-02-09 16:12:00<SeP>2025-02-09 18:00:00<SeP>2025-02-09 19:48:00<SeP>2025-02-09 21:36:00<SeP>2025-02-09 23:24:00<SeP>2025-02-10 01:12:00<SeP>2025-02-10 03:00:00<SeP>2025-02-10 04:48:00<SeP>2025-02-10 06:36:00<SeP>2025-02-10 08:24:00<SeP>2025-02-10 10:12:00<SeP>2025-02-10 12:00:00<SeP>2025-02-10 13:48:00<SeP>2025-02-10 15:36:00<SeP>2025-02-10 17:24:00<SeP>2025-02-10 19:12:00<SeP>2025-02-10 21:00:00<SeP>2025-02-10 22:48:00<SeP>2025-02-11 00:36:00<SeP>2025-02-11 02:24:00<SeP>2025-02-11 04:12:00<SeP>2025-02-11 06:00:00<SeP>2025-02-11 07:48:00<SeP>2025-02-11 09:36:00<SeP>2025-02-11 11:24:00<SeP>2025-02-11 13:12:00<SeP>2025-02-11 15:00:00<SeP>2025-02-11 16:48:00<SeP>2025-02-11 18:36:00<SeP>2025-02-11 20:24:00<SeP>2025-02-11 22:12:00<SeP>2025-02-12 00:00:00<SeP>2025-02-12 01:48:00<SeP>2025-02-12 03:36:00<SeP>2025-02-12 05:24:00<SeP>2025-02-12 07:12:00<SeP>2025-02-12 09:00:00<SeP>2025-02-12 10:48:00<SeP>2025-02-12 12:36:00<SeP>2025-02-12 14:24:00<SeP>2025-02-12 16:12:00<SeP>2025-02-12 18:00:00<SeP>2025-02-12 19:48:00<SeP>2025-02-12 21:36:00<SeP>2025-02-12 23:24:00<SeP>2025-02-13 01:12:00<SeP>2025-02-13 03:00:00<SeP>2025-02-13 04:48:00<SeP>2025-02-13 06:36:00<SeP>2025-02-13 08:24:00<SeP>2025-02-13 10:12:00<SeP>2025-02-13 12:00:00<SeP>2025-02-13 13:48:00<SeP>2025-02-13 15:36:00<SeP>2025-02-13 17:24:00<SeP>2025-02-13 19:12:00<SeP>2025-02-13 21:00:00<SeP>2025-02-13 22:48:00<SeP>2025-02-14 00:36:00<SeP>2025-02-14 02:24:00<SeP>2025-02-14 04:12:00<SeP>2025-02-14 06:00:00<SeP>2025-02-14 07:48:00<SeP>2025-02-14 09:36:00<SeP>2025-02-14 11:24:00<SeP>2025-02-14 13:12:00<SeP>2025-02-14 15:00:00<SeP>2025-02-14 16:48:00<SeP>2025-02-14 18:36:00<SeP>2025-02-14 20:24:00<SeP>2025-02-14 22:12:00<SeP>2025-02-15 00:00:00<SeP>2025-02-15 01:48:00<SeP>2025-02-15 03:36:00<SeP>2025-02-15 05:24:00<SeP>2025-02-15 07:12:00<SeP>2025-02-15 09:00:00<SeP>2025-02-15 10:48:00<SeP>2025-02-15 12:36:00<SeP>2025-02-15 14:24:00<SeP>2025-02-15 16:12:00<SeP>2025-02-15 18:00:00<SeP>2025-02-15 19:48:00<SeP>2025-02-15 21:36:00<SeP>2025-02-15 23:24:00<SeP>2025-02-16 01:12:00<SeP>2025-02-16 03:00:00<SeP>2025-02-16 04:48:00<SeP>2025-02-16 06:36:00<SeP>2025-02-16 08:24:00<SeP>2025-02-16 10:12:00<SeP>2025-02-16 12:00:00<SeP>2025-02-16 13:48:00<SeP>2025-02-16 15:36:00<SeP>2025-02-16 17:24:00<SeP>2025-02-16 19:12:00<SeP>2025-02-16 21:00:00<SeP>2025-02-16 22:48:00<SeP>2025-02-17 00:36:00<SeP>2025-02-17 02:24:00<SeP>2025-02-17 04:12:00<SeP>2025-02-17 06:00:00<SeP>2025-02-17 07:48:00<SeP>2025-02-17 09:36:00<SeP>2025-02-17 11:24:00<SeP>2025-02-17 13:12:00<SeP>2025-02-17 15:00:00<SeP>2025-02-17 16:48:00<SeP>2025-02-17 18:36:00<SeP>2025-02-17 20:24:00<SeP>2025-02-17 22:12:00<SeP>2025-02-18 00:00:00<SeP>2025-02-18 01:48:00<SeP>2025-02-18 03:36:00<SeP>2025-02-18 05:24:00<SeP>2025-02-18 07:12:00<SeP>2025-02-18 09:00:00<SeP>2025-02-18 10:48:00<SeP>2025-02-18 12:36:00<SeP>2025-02-18 14:24:00<SeP>2025-02-18 16:12:00<SeP>2025-02-18 18:00:00<SeP>2025-02-18 19:48:00<SeP>2025-02-18 21:36:00<SeP>2025-02-18 23:24:00<SeP>2025-02-19 01:12:00<SeP>2025-02-19 03:00:00<SeP>2025-02-19 04:48:00<SeP>2025-02-19 06:36:00<SeP>2025-02-19 08:24:00<SeP>2025-02-19 10:12:00<SeP>2025-02-19 12:00:00<SeP>2025-02-19 13:48:00<SeP>2025-02-19 15:36:00<SeP>2025-02-19 17:24:00<SeP>2025-02-19 19:12:00<SeP>2025-02-19 21:00:00<SeP>2025-02-19 22:48:00<SeP>2025-02-20 00:36:00<SeP>2025-02-20 02:24:00<SeP>2025-02-20 04:12:00<SeP>2025-02-20 06:00:00<SeP>2025-02-20 07:48:00<SeP>2025-02-20 09:36:00<SeP>2025-02-20 11:24:00<SeP>2025-02-20 13:12:00<SeP>2025-02-20 15:00:00<SeP>2025-02-20 16:48:00<SeP>2025-02-20 18:36:00<SeP>2025-02-20 20:24:00<SeP>2025-02-20 22:12:00<SeP>2025-02-21 00:00:00<SeP>2025-02-21 01:48:00<SeP>2025-02-21 03:36:00<SeP>2025-02-21 05:24:00<SeP>2025-02-21 07:12:00<SeP>2025-02-21 09:00:00<SeP>2025-02-21 10:48:00<SeP>2025-02-21 12:36:00<SeP>2025-02-21 14:24:00<SeP>2025-02-21 16:12:00<SeP>2025-02-21 18:00:00<SeP>2025-02-21 19:48:00<SeP>2025-02-21 21:36:00<SeP>2025-02-21 23:24:00<SeP>2025-02-22 01:12:00<SeP>2025-02-22 03:00:00<SeP>2025-02-22 04:48:00<SeP>2025-02-22 06:36:00<SeP>2025-02-22 08:24:00<SeP>2025-02-22 10:12:00<SeP>2025-02-22 12:00:00<SeP>2025-02-22 13:48:00<SeP>2025-02-22 15:36:00<SeP>2025-02-22 17:24:00<SeP>2025-02-22 19:12:00<SeP>2025-02-22 21:00:00<SeP>2025-02-22 22:48:00<SeP>2025-02-23 00:36:00<SeP>2025-02-23 02:24:00<SeP>2025-02-23 04:12:00<SeP>2025-02-23 06:00:00<SeP>2025-02-23 07:48:00<SeP>2025-02-23 09:36:00<SeP>2025-02-23 11:24:00<SeP>2025-02-23 13:12:00<SeP>2025-02-23 15:00:00<SeP>2025-02-23 16:48:00<SeP>2025-02-23 18:36:00<SeP>2025-02-23 20:24:00<SeP>2025-02-23 22:12:00<SeP>2025-02-24 00:00:00<SeP>2025-02-24 01:48:00<SeP>2025-02-24 03:36:00<SeP>2025-02-24 05:24:00<SeP>2025-02-24 07:12:00<SeP>2025-02-24 09:00:00<SeP>2025-02-24 10:48:00<SeP>2025-02-24 12:36:00<SeP>2025-02-24 14:24:00<SeP>2025-02-24 16:12:00<SeP>2025-02-24 18:00:00<SeP>2025-02-24 19:48:00<SeP>2025-02-24 21:36:00<SeP>2025-02-24 23:24:00<SeP>2025-02-25 01:12:00<SeP>2025-02-25 03:00:00<SeP>2025-02-25 04:48:00<SeP>2025-02-25 06:36:00<SeP>2025-02-25 08:24:00<SeP>2025-02-25 10:12:00<SeP>2025-02-25 12:00:00<SeP>2025-02-25 13:48:00<SeP>2025-02-25 15:36:00<SeP>2025-02-25 17:24:00<SeP>2025-02-25 19:12:00<SeP>2025-02-25 21:00:00<SeP>2025-02-25 22:48:00<SeP>2025-02-26 00:36:00<SeP>2025-02-26 02:24:00<SeP>2025-02-26 04:12:00<SeP>2025-02-26 06:00:00<SeP>2025-02-26 07:48:00<SeP>2025-02-26 09:36:00<SeP>2025-02-26 11:24:00<SeP>2025-02-26 13:12:00<SeP>2025-02-26 15:00:00<SeP>2025-02-26 16:48:00<SeP>2025-02-26 18:36:00<SeP>2025-02-26 20:24:00<SeP>2025-02-26 22:12:00<SeP>2025-02-27 00:00:00<SeP>2025-02-27 01:48:00<SeP>2025-02-27 03:36:00<SeP>2025-02-27 05:24:00<SeP>2025-02-27 07:12:00<SeP>2025-02-27 09:00:00<SeP>2025-02-27 10:48:00<SeP>2025-02-27 12:36:00<SeP>2025-02-27 14:24:00<SeP>2025-02-27 16:12:00<SeP>2025-02-27 18:00:00<SeP>2025-02-27 19:48:00<SeP>2025-02-27 21:36:00<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:12:00<SeP>2025-02-28 03:00:00<SeP>2025-02-28 04:48:00<SeP>2025-02-28 06:36:00<SeP>2025-02-28 08:24:00<SeP>2025-02-28 10:12:00<SeP>2025-02-28 12:00:00<SeP>2025-02-28 13:48:00<SeP>2025-02-28 15:36:00<SeP>2025-02-28 17:24:00<SeP>2025-02-28 19:12:00<SeP>2025-02-28 21:00:00<SeP>2025-02-28 22:48:00<SeP>2025-03-01 00:36:00<SeP>2025-03-01 02:24:00<SeP>2025-03-01 04:12:00<SeP>2025-03-01 06:00:00<SeP>2025-03-01 07:48:00<SeP>2025-03-01 09:36:00<SeP>2025-03-01 11:24:00<SeP>2025-03-01 13:12:00<SeP>2025-03-01 15:00:00<SeP>2025-03-01 16:48:00<SeP>2025-03-01 18:36:00<SeP>2025-03-01 20:24:00<SeP>2025-03-01 22:12:00<SeP>2025-03-02 00:00:00<SeP>2025-03-02 01:48:00<SeP>2025-03-02 03:36:00<SeP>2025-03-02 05:24:00<SeP>2025-03-02 07:12:00<SeP>2025-03-02 09:00:00<SeP>2025-03-02 10:48:00<SeP>2025-03-02 12:36:00<SeP>2025-03-02 14:24:00<SeP>2025-03-02 16:12:00<SeP>2025-03-02 18:00:00<SeP>2025-03-02 19:48:00<SeP>2025-03-02 21:36:00<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:12:00<SeP>2025-03-03 03:00:00<SeP>2025-03-03 04:48:00<SeP>2025-03-03 06:36:00<SeP>2025-03-03 08:24:00<SeP>2025-03-03 10:12:00<SeP>2025-03-03 12:00:00<SeP>2025-03-03 13:48:00<SeP>2025-03-03 15:36:00<SeP>2025-03-03 17:24:00<SeP>2025-03-03 19:12:00<SeP>2025-03-03 21:00:00<SeP>2025-03-03 22:48:00<SeP>2025-03-04 00:36:00<SeP>2025-03-04 02:24:00<SeP>2025-03-04 04:12:00<SeP>2025-03-04 06:00:00<SeP>2025-03-04 07:48:00<SeP>2025-03-04 09:36:00<SeP>2025-03-04 11:24:00<SeP>2025-03-04 13:12:00<SeP>2025-03-04 15:00:00<SeP>2025-03-04 16:48:00<SeP>2025-03-04 18:36:00<SeP>2025-03-04 20:24:00<SeP>2025-03-04 22:12:00<SeP>2025-03-05 00:00:00<SeP>2025-03-05 01:48:00<SeP>2025-03-05 03:36:00<SeP>2025-03-05 05:24:00<SeP>2025-03-05 07:12:00<SeP>2025-03-05 09:00:00<SeP>2025-03-05 10:48:00<SeP>2025-03-05 12:36:00<SeP>2025-03-05 14:24:00<SeP>2025-03-05 16:12:00<SeP>2025-03-05 18:00:00<SeP>2025-03-05 19:48:00<SeP>2025-03-05 21:36:00<SeP>2025-03-05 23:24:00<SeP>2025-03-06 01:12:00<SeP>2025-03-06 03:00:00<SeP>2025-03-06 04:48:00<SeP>2025-03-06 06:36:00<SeP>2025-03-06 08:24:00<SeP>2025-03-06 10:12:00<SeP>2025-03-06 12:00:00<SeP>2025-03-06 13:48:00<SeP>2025-03-06 15:36:00<SeP>2025-03-06 17:24:00<SeP>2025-03-06 19:12:00<SeP>2025-03-06 21:00:00<SeP>2025-03-06 22:48:00<SeP>2025-03-07 00:36:00<SeP>2025-03-07 02:24:00<SeP>2025-03-07 04:12:00<SeP>2025-03-07 06:00:00<SeP>2025-03-07 07:48:00<SeP>2025-03-07 09:36:00<SeP>2025-03-07 11:24:00<SeP>2025-03-07 13:12:00<SeP>2025-03-07 15:00:00<SeP>2025-03-07 16:48:00<SeP>2025-03-07 18:36:00<SeP>2025-03-07 20:24:00<SeP>2025-03-07 22:12:00";
  const item1Label       = "Escaneos";
  const item1Data        = "66<SeP>44<SeP>61<SeP>0<SeP>0<SeP>0<SeP>0<SeP>76<SeP>111<SeP>36<SeP>17<SeP>51<SeP>24<SeP>56<SeP>79<SeP>95<SeP>78<SeP>76<SeP>45<SeP>87<SeP>103<SeP>33<SeP>17<SeP>41<SeP>26<SeP>90<SeP>74<SeP>55<SeP>40<SeP>42<SeP>33<SeP>75<SeP>59<SeP>109<SeP>70<SeP>35<SeP>70<SeP>38<SeP>63<SeP>66<SeP>84<SeP>151<SeP>205<SeP>105<SeP>104<SeP>127<SeP>80<SeP>82<SeP>95<SeP>132<SeP>195<SeP>45<SeP>118<SeP>47<SeP>100<SeP>83<SeP>76<SeP>78<SeP>117<SeP>62<SeP>75<SeP>78<SeP>86<SeP>61<SeP>74<SeP>160<SeP>51<SeP>46<SeP>102<SeP>94<SeP>180<SeP>119<SeP>69<SeP>123<SeP>102<SeP>130<SeP>81<SeP>176<SeP>52<SeP>86<SeP>65<SeP>90<SeP>52<SeP>117<SeP>80<SeP>61<SeP>60<SeP>84<SeP>57<SeP>79<SeP>93<SeP>163<SeP>73<SeP>147<SeP>81<SeP>127<SeP>48<SeP>65<SeP>74<SeP>113<SeP>135<SeP>130<SeP>25<SeP>72<SeP>123<SeP>51<SeP>75<SeP>80<SeP>83<SeP>110<SeP>146<SeP>157<SeP>117<SeP>49<SeP>49<SeP>61<SeP>86<SeP>74<SeP>108<SeP>107<SeP>51<SeP>83<SeP>61<SeP>151<SeP>169<SeP>123<SeP>105<SeP>79<SeP>31<SeP>44<SeP>69<SeP>124<SeP>76<SeP>84<SeP>51<SeP>77<SeP>57<SeP>143<SeP>64<SeP>78<SeP>65<SeP>63<SeP>86<SeP>64<SeP>132<SeP>112<SeP>89<SeP>81<SeP>62<SeP>43<SeP>75<SeP>99<SeP>104<SeP>60<SeP>66<SeP>29<SeP>51<SeP>48<SeP>161<SeP>77<SeP>58<SeP>144<SeP>27<SeP>133<SeP>99<SeP>136<SeP>60<SeP>97<SeP>81<SeP>38<SeP>48<SeP>92<SeP>60<SeP>46<SeP>56<SeP>126<SeP>62<SeP>179<SeP>96<SeP>78<SeP>69<SeP>62<SeP>47<SeP>75<SeP>80<SeP>68<SeP>110<SeP>63<SeP>83<SeP>110<SeP>71<SeP>53<SeP>167<SeP>50<SeP>81<SeP>57<SeP>40<SeP>55<SeP>98<SeP>77<SeP>80<SeP>66<SeP>153<SeP>81<SeP>108<SeP>60<SeP>62<SeP>36<SeP>109<SeP>73<SeP>67<SeP>109<SeP>94<SeP>65<SeP>88<SeP>99<SeP>118<SeP>85<SeP>53<SeP>31<SeP>41<SeP>81<SeP>83<SeP>57<SeP>90<SeP>85<SeP>52<SeP>83<SeP>90<SeP>130<SeP>85<SeP>39<SeP>25<SeP>60<SeP>59<SeP>195<SeP>128<SeP>62<SeP>71<SeP>115<SeP>55<SeP>58<SeP>86<SeP>103<SeP>180<SeP>70<SeP>58<SeP>89<SeP>110<SeP>55<SeP>85<SeP>71<SeP>117<SeP>118<SeP>67<SeP>98<SeP>77<SeP>84<SeP>73<SeP>70<SeP>66<SeP>87<SeP>114<SeP>59<SeP>133<SeP>84<SeP>91<SeP>146<SeP>49<SeP>83<SeP>128<SeP>74<SeP>68<SeP>113<SeP>121<SeP>82<SeP>189<SeP>72<SeP>138<SeP>60<SeP>69<SeP>67<SeP>82<SeP>91<SeP>67<SeP>65<SeP>57<SeP>69<SeP>50<SeP>77<SeP>50<SeP>105<SeP>88<SeP>91<SeP>91<SeP>76<SeP>85<SeP>46<SeP>52<SeP>98<SeP>47<SeP>45<SeP>59<SeP>78<SeP>85<SeP>61<SeP>112<SeP>47<SeP>75<SeP>42<SeP>30<SeP>234<SeP>87<SeP>40<SeP>83<SeP>54<SeP>84<SeP>96<SeP>44<SeP>40<SeP>111<SeP>139<SeP>80<SeP>45<SeP>46<SeP>91<SeP>51<SeP>40<SeP>67<SeP>90<SeP>125<SeP>65<SeP>61<SeP>110<SeP>64<SeP>66<SeP>27<SeP>25<SeP>56<SeP>31<SeP>46<SeP>101<SeP>73<SeP>56<SeP>58<SeP>90<SeP>262<SeP>49<SeP>28<SeP>66<SeP>64<SeP>120<SeP>136<SeP>64<SeP>51<SeP>73<SeP>156<SeP>79<SeP>93<SeP>67<SeP>107<SeP>29<SeP>97<SeP>39<SeP>35<SeP>62<SeP>55<SeP>53<SeP>99<SeP>95<SeP>123<SeP>93<SeP>53<SeP>70<SeP>53<SeP>49<SeP>91<SeP>70<SeP>126<SeP>41<SeP>86<SeP>188<SeP>41<SeP>62<SeP>55<SeP>67<SeP>207<SeP>315<SeP>29<SeP>46<SeP>15<SeP>51<SeP>39<SeP>50<SeP>93<SeP>78<SeP>179<SeP>85<SeP>56<SeP>367";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "2585<SeP>2759<SeP>1610<SeP>0<SeP>0<SeP>0<SeP>1<SeP>198<SeP>272<SeP>176<SeP>136<SeP>502<SeP>35<SeP>138<SeP>158<SeP>74<SeP>102<SeP>226<SeP>18<SeP>229<SeP>298<SeP>231<SeP>65<SeP>265<SeP>237<SeP>202<SeP>252<SeP>141<SeP>124<SeP>255<SeP>43<SeP>195<SeP>119<SeP>122<SeP>181<SeP>6<SeP>42<SeP>122<SeP>212<SeP>268<SeP>187<SeP>220<SeP>58<SeP>105<SeP>248<SeP>311<SeP>300<SeP>173<SeP>487<SeP>176<SeP>534<SeP>323<SeP>345<SeP>88<SeP>251<SeP>269<SeP>285<SeP>118<SeP>91<SeP>49<SeP>28<SeP>165<SeP>224<SeP>140<SeP>140<SeP>38<SeP>219<SeP>219<SeP>60<SeP>323<SeP>94<SeP>263<SeP>210<SeP>28<SeP>171<SeP>425<SeP>81<SeP>319<SeP>55<SeP>267<SeP>194<SeP>440<SeP>910<SeP>3218<SeP>2738<SeP>511<SeP>310<SeP>320<SeP>225<SeP>657<SeP>266<SeP>184<SeP>126<SeP>33<SeP>50<SeP>581<SeP>80<SeP>243<SeP>133<SeP>320<SeP>102<SeP>279<SeP>878<SeP>197<SeP>559<SeP>122<SeP>173<SeP>251<SeP>172<SeP>486<SeP>275<SeP>264<SeP>358<SeP>40<SeP>295<SeP>370<SeP>168<SeP>383<SeP>200<SeP>159<SeP>43<SeP>243<SeP>51<SeP>607<SeP>304<SeP>160<SeP>173<SeP>238<SeP>99<SeP>46<SeP>94<SeP>426<SeP>145<SeP>171<SeP>60<SeP>51<SeP>26<SeP>511<SeP>155<SeP>206<SeP>37<SeP>430<SeP>181<SeP>223<SeP>537<SeP>206<SeP>250<SeP>254<SeP>348<SeP>201<SeP>187<SeP>419<SeP>246<SeP>340<SeP>220<SeP>56<SeP>182<SeP>475<SeP>26<SeP>135<SeP>204<SeP>502<SeP>104<SeP>252<SeP>225<SeP>46<SeP>349<SeP>122<SeP>276<SeP>284<SeP>210<SeP>221<SeP>8<SeP>235<SeP>124<SeP>216<SeP>433<SeP>110<SeP>47<SeP>118<SeP>58<SeP>38<SeP>124<SeP>393<SeP>203<SeP>147<SeP>159<SeP>219<SeP>214<SeP>116<SeP>51<SeP>161<SeP>21<SeP>8<SeP>254<SeP>245<SeP>245<SeP>652<SeP>540<SeP>247<SeP>680<SeP>345<SeP>648<SeP>202<SeP>318<SeP>407<SeP>539<SeP>392<SeP>321<SeP>417<SeP>1060<SeP>614<SeP>933<SeP>377<SeP>322<SeP>249<SeP>285<SeP>321<SeP>856<SeP>455<SeP>546<SeP>571<SeP>184<SeP>490<SeP>451<SeP>778<SeP>608<SeP>251<SeP>659<SeP>401<SeP>607<SeP>324<SeP>365<SeP>648<SeP>625<SeP>641<SeP>389<SeP>259<SeP>89<SeP>291<SeP>129<SeP>199<SeP>215<SeP>426<SeP>58<SeP>221<SeP>242<SeP>65<SeP>96<SeP>200<SeP>285<SeP>211<SeP>271<SeP>102<SeP>447<SeP>146<SeP>76<SeP>272<SeP>100<SeP>411<SeP>299<SeP>216<SeP>135<SeP>213<SeP>39<SeP>137<SeP>163<SeP>85<SeP>20<SeP>290<SeP>158<SeP>42<SeP>241<SeP>48<SeP>91<SeP>61<SeP>80<SeP>98<SeP>324<SeP>144<SeP>335<SeP>49<SeP>274<SeP>467<SeP>184<SeP>156<SeP>133<SeP>155<SeP>302<SeP>52<SeP>37<SeP>74<SeP>115<SeP>207<SeP>185<SeP>125<SeP>257<SeP>153<SeP>201<SeP>294<SeP>128<SeP>314<SeP>60<SeP>60<SeP>46<SeP>48<SeP>140<SeP>24<SeP>23<SeP>86<SeP>58<SeP>65<SeP>88<SeP>40<SeP>194<SeP>108<SeP>106<SeP>46<SeP>211<SeP>81<SeP>368<SeP>227<SeP>118<SeP>19<SeP>313<SeP>21<SeP>20<SeP>137<SeP>145<SeP>83<SeP>31<SeP>163<SeP>80<SeP>111<SeP>144<SeP>227<SeP>52<SeP>89<SeP>49<SeP>38<SeP>191<SeP>313<SeP>71<SeP>92<SeP>39<SeP>142<SeP>188<SeP>37<SeP>459<SeP>28<SeP>31<SeP>19<SeP>207<SeP>128<SeP>26<SeP>96<SeP>36<SeP>92<SeP>51<SeP>299<SeP>142<SeP>138<SeP>47<SeP>104<SeP>73<SeP>39<SeP>33<SeP>33<SeP>290<SeP>79<SeP>109<SeP>127<SeP>162<SeP>90<SeP>31<SeP>95<SeP>169<SeP>104<SeP>145<SeP>104<SeP>66<SeP>72<SeP>124<SeP>27<SeP>170<SeP>114<SeP>89<SeP>175<SeP>43<SeP>298<SeP>465<SeP>94<SeP>115<SeP>177<SeP>36<SeP>37<SeP>100<SeP>86<SeP>77<SeP>116";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-06 00:00:00<SeP>2025-02-06 01:48:00<SeP>2025-02-06 03:36:00<SeP>2025-02-06 05:24:00<SeP>2025-02-06 07:12:00<SeP>2025-02-06 09:00:00<SeP>2025-02-06 10:48:00<SeP>2025-02-06 12:36:00<SeP>2025-02-06 14:24:00<SeP>2025-02-06 16:12:00<SeP>2025-02-06 18:00:00<SeP>2025-02-06 19:48:00<SeP>2025-02-06 21:36:00<SeP>2025-02-06 23:24:00<SeP>2025-02-07 01:12:00<SeP>2025-02-07 03:00:00<SeP>2025-02-07 04:48:00<SeP>2025-02-07 06:36:00<SeP>2025-02-07 08:24:00<SeP>2025-02-07 10:12:00<SeP>2025-02-07 12:00:00<SeP>2025-02-07 13:48:00<SeP>2025-02-07 15:36:00<SeP>2025-02-07 17:24:00<SeP>2025-02-07 19:12:00<SeP>2025-02-07 21:00:00<SeP>2025-02-07 22:48:00<SeP>2025-02-08 00:36:00<SeP>2025-02-08 02:24:00<SeP>2025-02-08 04:12:00<SeP>2025-02-08 06:00:00<SeP>2025-02-08 07:48:00<SeP>2025-02-08 09:36:00<SeP>2025-02-08 11:24:00<SeP>2025-02-08 13:12:00<SeP>2025-02-08 15:00:00<SeP>2025-02-08 16:48:00<SeP>2025-02-08 18:36:00<SeP>2025-02-08 20:24:00<SeP>2025-02-08 22:12:00<SeP>2025-02-09 00:00:00<SeP>2025-02-09 01:48:00<SeP>2025-02-09 03:36:00<SeP>2025-02-09 05:24:00<SeP>2025-02-09 07:12:00<SeP>2025-02-09 09:00:00<SeP>2025-02-09 10:48:00<SeP>2025-02-09 12:36:00<SeP>2025-02-09 14:24:00<SeP>2025-02-09 16:12:00<SeP>2025-02-09 18:00:00<SeP>2025-02-09 19:48:00<SeP>2025-02-09 21:36:00<SeP>2025-02-09 23:24:00<SeP>2025-02-10 01:12:00<SeP>2025-02-10 03:00:00<SeP>2025-02-10 04:48:00<SeP>2025-02-10 06:36:00<SeP>2025-02-10 08:24:00<SeP>2025-02-10 10:12:00<SeP>2025-02-10 12:00:00<SeP>2025-02-10 13:48:00<SeP>2025-02-10 15:36:00<SeP>2025-02-10 17:24:00<SeP>2025-02-10 19:12:00<SeP>2025-02-10 21:00:00<SeP>2025-02-10 22:48:00<SeP>2025-02-11 00:36:00<SeP>2025-02-11 02:24:00<SeP>2025-02-11 04:12:00<SeP>2025-02-11 06:00:00<SeP>2025-02-11 07:48:00<SeP>2025-02-11 09:36:00<SeP>2025-02-11 11:24:00<SeP>2025-02-11 13:12:00<SeP>2025-02-11 15:00:00<SeP>2025-02-11 16:48:00<SeP>2025-02-11 18:36:00<SeP>2025-02-11 20:24:00<SeP>2025-02-11 22:12:00<SeP>2025-02-12 00:00:00<SeP>2025-02-12 01:48:00<SeP>2025-02-12 03:36:00<SeP>2025-02-12 05:24:00<SeP>2025-02-12 07:12:00<SeP>2025-02-12 09:00:00<SeP>2025-02-12 10:48:00<SeP>2025-02-12 12:36:00<SeP>2025-02-12 14:24:00<SeP>2025-02-12 16:12:00<SeP>2025-02-12 18:00:00<SeP>2025-02-12 19:48:00<SeP>2025-02-12 21:36:00<SeP>2025-02-12 23:24:00<SeP>2025-02-13 01:12:00<SeP>2025-02-13 03:00:00<SeP>2025-02-13 04:48:00<SeP>2025-02-13 06:36:00<SeP>2025-02-13 08:24:00<SeP>2025-02-13 10:12:00<SeP>2025-02-13 12:00:00<SeP>2025-02-13 13:48:00<SeP>2025-02-13 15:36:00<SeP>2025-02-13 17:24:00<SeP>2025-02-13 19:12:00<SeP>2025-02-13 21:00:00<SeP>2025-02-13 22:48:00<SeP>2025-02-14 00:36:00<SeP>2025-02-14 02:24:00<SeP>2025-02-14 04:12:00<SeP>2025-02-14 06:00:00<SeP>2025-02-14 07:48:00<SeP>2025-02-14 09:36:00<SeP>2025-02-14 11:24:00<SeP>2025-02-14 13:12:00<SeP>2025-02-14 15:00:00<SeP>2025-02-14 16:48:00<SeP>2025-02-14 18:36:00<SeP>2025-02-14 20:24:00<SeP>2025-02-14 22:12:00<SeP>2025-02-15 00:00:00<SeP>2025-02-15 01:48:00<SeP>2025-02-15 03:36:00<SeP>2025-02-15 05:24:00<SeP>2025-02-15 07:12:00<SeP>2025-02-15 09:00:00<SeP>2025-02-15 10:48:00<SeP>2025-02-15 12:36:00<SeP>2025-02-15 14:24:00<SeP>2025-02-15 16:12:00<SeP>2025-02-15 18:00:00<SeP>2025-02-15 19:48:00<SeP>2025-02-15 21:36:00<SeP>2025-02-15 23:24:00<SeP>2025-02-16 01:12:00<SeP>2025-02-16 03:00:00<SeP>2025-02-16 04:48:00<SeP>2025-02-16 06:36:00<SeP>2025-02-16 08:24:00<SeP>2025-02-16 10:12:00<SeP>2025-02-16 12:00:00<SeP>2025-02-16 13:48:00<SeP>2025-02-16 15:36:00<SeP>2025-02-16 17:24:00<SeP>2025-02-16 19:12:00<SeP>2025-02-16 21:00:00<SeP>2025-02-16 22:48:00<SeP>2025-02-17 00:36:00<SeP>2025-02-17 02:24:00<SeP>2025-02-17 04:12:00<SeP>2025-02-17 06:00:00<SeP>2025-02-17 07:48:00<SeP>2025-02-17 09:36:00<SeP>2025-02-17 11:24:00<SeP>2025-02-17 13:12:00<SeP>2025-02-17 15:00:00<SeP>2025-02-17 16:48:00<SeP>2025-02-17 18:36:00<SeP>2025-02-17 20:24:00<SeP>2025-02-17 22:12:00<SeP>2025-02-18 00:00:00<SeP>2025-02-18 01:48:00<SeP>2025-02-18 03:36:00<SeP>2025-02-18 05:24:00<SeP>2025-02-18 07:12:00<SeP>2025-02-18 09:00:00<SeP>2025-02-18 10:48:00<SeP>2025-02-18 12:36:00<SeP>2025-02-18 14:24:00<SeP>2025-02-18 16:12:00<SeP>2025-02-18 18:00:00<SeP>2025-02-18 19:48:00<SeP>2025-02-18 21:36:00<SeP>2025-02-18 23:24:00<SeP>2025-02-19 01:12:00<SeP>2025-02-19 03:00:00<SeP>2025-02-19 04:48:00<SeP>2025-02-19 06:36:00<SeP>2025-02-19 08:24:00<SeP>2025-02-19 10:12:00<SeP>2025-02-19 12:00:00<SeP>2025-02-19 13:48:00<SeP>2025-02-19 15:36:00<SeP>2025-02-19 17:24:00<SeP>2025-02-19 19:12:00<SeP>2025-02-19 21:00:00<SeP>2025-02-19 22:48:00<SeP>2025-02-20 00:36:00<SeP>2025-02-20 02:24:00<SeP>2025-02-20 04:12:00<SeP>2025-02-20 06:00:00<SeP>2025-02-20 07:48:00<SeP>2025-02-20 09:36:00<SeP>2025-02-20 11:24:00<SeP>2025-02-20 13:12:00<SeP>2025-02-20 15:00:00<SeP>2025-02-20 16:48:00<SeP>2025-02-20 18:36:00<SeP>2025-02-20 20:24:00<SeP>2025-02-20 22:12:00<SeP>2025-02-21 00:00:00<SeP>2025-02-21 01:48:00<SeP>2025-02-21 03:36:00<SeP>2025-02-21 05:24:00<SeP>2025-02-21 07:12:00<SeP>2025-02-21 09:00:00<SeP>2025-02-21 10:48:00<SeP>2025-02-21 12:36:00<SeP>2025-02-21 14:24:00<SeP>2025-02-21 16:12:00<SeP>2025-02-21 18:00:00<SeP>2025-02-21 19:48:00<SeP>2025-02-21 21:36:00<SeP>2025-02-21 23:24:00<SeP>2025-02-22 01:12:00<SeP>2025-02-22 03:00:00<SeP>2025-02-22 04:48:00<SeP>2025-02-22 06:36:00<SeP>2025-02-22 08:24:00<SeP>2025-02-22 10:12:00<SeP>2025-02-22 12:00:00<SeP>2025-02-22 13:48:00<SeP>2025-02-22 15:36:00<SeP>2025-02-22 17:24:00<SeP>2025-02-22 19:12:00<SeP>2025-02-22 21:00:00<SeP>2025-02-22 22:48:00<SeP>2025-02-23 00:36:00<SeP>2025-02-23 02:24:00<SeP>2025-02-23 04:12:00<SeP>2025-02-23 06:00:00<SeP>2025-02-23 07:48:00<SeP>2025-02-23 09:36:00<SeP>2025-02-23 11:24:00<SeP>2025-02-23 13:12:00<SeP>2025-02-23 15:00:00<SeP>2025-02-23 16:48:00<SeP>2025-02-23 18:36:00<SeP>2025-02-23 20:24:00<SeP>2025-02-23 22:12:00<SeP>2025-02-24 00:00:00<SeP>2025-02-24 01:48:00<SeP>2025-02-24 03:36:00<SeP>2025-02-24 05:24:00<SeP>2025-02-24 07:12:00<SeP>2025-02-24 09:00:00<SeP>2025-02-24 10:48:00<SeP>2025-02-24 12:36:00<SeP>2025-02-24 14:24:00<SeP>2025-02-24 16:12:00<SeP>2025-02-24 18:00:00<SeP>2025-02-24 19:48:00<SeP>2025-02-24 21:36:00<SeP>2025-02-24 23:24:00<SeP>2025-02-25 01:12:00<SeP>2025-02-25 03:00:00<SeP>2025-02-25 04:48:00<SeP>2025-02-25 06:36:00<SeP>2025-02-25 08:24:00<SeP>2025-02-25 10:12:00<SeP>2025-02-25 12:00:00<SeP>2025-02-25 13:48:00<SeP>2025-02-25 15:36:00<SeP>2025-02-25 17:24:00<SeP>2025-02-25 19:12:00<SeP>2025-02-25 21:00:00<SeP>2025-02-25 22:48:00<SeP>2025-02-26 00:36:00<SeP>2025-02-26 02:24:00<SeP>2025-02-26 04:12:00<SeP>2025-02-26 06:00:00<SeP>2025-02-26 07:48:00<SeP>2025-02-26 09:36:00<SeP>2025-02-26 11:24:00<SeP>2025-02-26 13:12:00<SeP>2025-02-26 15:00:00<SeP>2025-02-26 16:48:00<SeP>2025-02-26 18:36:00<SeP>2025-02-26 20:24:00<SeP>2025-02-26 22:12:00<SeP>2025-02-27 00:00:00<SeP>2025-02-27 01:48:00<SeP>2025-02-27 03:36:00<SeP>2025-02-27 05:24:00<SeP>2025-02-27 07:12:00<SeP>2025-02-27 09:00:00<SeP>2025-02-27 10:48:00<SeP>2025-02-27 12:36:00<SeP>2025-02-27 14:24:00<SeP>2025-02-27 16:12:00<SeP>2025-02-27 18:00:00<SeP>2025-02-27 19:48:00<SeP>2025-02-27 21:36:00<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:12:00<SeP>2025-02-28 03:00:00<SeP>2025-02-28 04:48:00<SeP>2025-02-28 06:36:00<SeP>2025-02-28 08:24:00<SeP>2025-02-28 10:12:00<SeP>2025-02-28 12:00:00<SeP>2025-02-28 13:48:00<SeP>2025-02-28 15:36:00<SeP>2025-02-28 17:24:00<SeP>2025-02-28 19:12:00<SeP>2025-02-28 21:00:00<SeP>2025-02-28 22:48:00<SeP>2025-03-01 00:36:00<SeP>2025-03-01 02:24:00<SeP>2025-03-01 04:12:00<SeP>2025-03-01 06:00:00<SeP>2025-03-01 07:48:00<SeP>2025-03-01 09:36:00<SeP>2025-03-01 11:24:00<SeP>2025-03-01 13:12:00<SeP>2025-03-01 15:00:00<SeP>2025-03-01 16:48:00<SeP>2025-03-01 18:36:00<SeP>2025-03-01 20:24:00<SeP>2025-03-01 22:12:00<SeP>2025-03-02 00:00:00<SeP>2025-03-02 01:48:00<SeP>2025-03-02 03:36:00<SeP>2025-03-02 05:24:00<SeP>2025-03-02 07:12:00<SeP>2025-03-02 09:00:00<SeP>2025-03-02 10:48:00<SeP>2025-03-02 12:36:00<SeP>2025-03-02 14:24:00<SeP>2025-03-02 16:12:00<SeP>2025-03-02 18:00:00<SeP>2025-03-02 19:48:00<SeP>2025-03-02 21:36:00<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:12:00<SeP>2025-03-03 03:00:00<SeP>2025-03-03 04:48:00<SeP>2025-03-03 06:36:00<SeP>2025-03-03 08:24:00<SeP>2025-03-03 10:12:00<SeP>2025-03-03 12:00:00<SeP>2025-03-03 13:48:00<SeP>2025-03-03 15:36:00<SeP>2025-03-03 17:24:00<SeP>2025-03-03 19:12:00<SeP>2025-03-03 21:00:00<SeP>2025-03-03 22:48:00<SeP>2025-03-04 00:36:00<SeP>2025-03-04 02:24:00<SeP>2025-03-04 04:12:00<SeP>2025-03-04 06:00:00<SeP>2025-03-04 07:48:00<SeP>2025-03-04 09:36:00<SeP>2025-03-04 11:24:00<SeP>2025-03-04 13:12:00<SeP>2025-03-04 15:00:00<SeP>2025-03-04 16:48:00<SeP>2025-03-04 18:36:00<SeP>2025-03-04 20:24:00<SeP>2025-03-04 22:12:00<SeP>2025-03-05 00:00:00<SeP>2025-03-05 01:48:00<SeP>2025-03-05 03:36:00<SeP>2025-03-05 05:24:00<SeP>2025-03-05 07:12:00<SeP>2025-03-05 09:00:00<SeP>2025-03-05 10:48:00<SeP>2025-03-05 12:36:00<SeP>2025-03-05 14:24:00<SeP>2025-03-05 16:12:00<SeP>2025-03-05 18:00:00<SeP>2025-03-05 19:48:00<SeP>2025-03-05 21:36:00<SeP>2025-03-05 23:24:00<SeP>2025-03-06 01:12:00<SeP>2025-03-06 03:00:00<SeP>2025-03-06 04:48:00<SeP>2025-03-06 06:36:00<SeP>2025-03-06 08:24:00<SeP>2025-03-06 10:12:00<SeP>2025-03-06 12:00:00<SeP>2025-03-06 13:48:00<SeP>2025-03-06 15:36:00<SeP>2025-03-06 17:24:00<SeP>2025-03-06 19:12:00<SeP>2025-03-06 21:00:00<SeP>2025-03-06 22:48:00<SeP>2025-03-07 00:36:00<SeP>2025-03-07 02:24:00<SeP>2025-03-07 04:12:00<SeP>2025-03-07 06:00:00<SeP>2025-03-07 07:48:00<SeP>2025-03-07 09:36:00<SeP>2025-03-07 11:24:00<SeP>2025-03-07 13:12:00<SeP>2025-03-07 15:00:00<SeP>2025-03-07 16:48:00<SeP>2025-03-07 18:36:00<SeP>2025-03-07 20:24:00<SeP>2025-03-07 22:12:00";
  const itemLabel       = "Escaneos";
  const itemData        = "66<SeP>44<SeP>61<SeP>0<SeP>0<SeP>0<SeP>0<SeP>76<SeP>111<SeP>36<SeP>17<SeP>51<SeP>24<SeP>56<SeP>79<SeP>95<SeP>78<SeP>76<SeP>45<SeP>87<SeP>103<SeP>33<SeP>17<SeP>41<SeP>26<SeP>90<SeP>74<SeP>55<SeP>40<SeP>42<SeP>33<SeP>75<SeP>59<SeP>109<SeP>70<SeP>35<SeP>70<SeP>38<SeP>63<SeP>66<SeP>84<SeP>151<SeP>205<SeP>105<SeP>104<SeP>127<SeP>80<SeP>82<SeP>95<SeP>132<SeP>195<SeP>45<SeP>118<SeP>47<SeP>100<SeP>83<SeP>76<SeP>78<SeP>117<SeP>62<SeP>75<SeP>78<SeP>86<SeP>61<SeP>74<SeP>160<SeP>51<SeP>46<SeP>102<SeP>94<SeP>180<SeP>119<SeP>69<SeP>123<SeP>102<SeP>130<SeP>81<SeP>176<SeP>52<SeP>86<SeP>65<SeP>90<SeP>52<SeP>117<SeP>80<SeP>61<SeP>60<SeP>84<SeP>57<SeP>79<SeP>93<SeP>163<SeP>73<SeP>147<SeP>81<SeP>127<SeP>48<SeP>65<SeP>74<SeP>113<SeP>135<SeP>130<SeP>25<SeP>72<SeP>123<SeP>51<SeP>75<SeP>80<SeP>83<SeP>110<SeP>146<SeP>157<SeP>117<SeP>49<SeP>49<SeP>61<SeP>86<SeP>74<SeP>108<SeP>107<SeP>51<SeP>83<SeP>61<SeP>151<SeP>169<SeP>123<SeP>105<SeP>79<SeP>31<SeP>44<SeP>69<SeP>124<SeP>76<SeP>84<SeP>51<SeP>77<SeP>57<SeP>143<SeP>64<SeP>78<SeP>65<SeP>63<SeP>86<SeP>64<SeP>132<SeP>112<SeP>89<SeP>81<SeP>62<SeP>43<SeP>75<SeP>99<SeP>104<SeP>60<SeP>66<SeP>29<SeP>51<SeP>48<SeP>161<SeP>77<SeP>58<SeP>144<SeP>27<SeP>133<SeP>99<SeP>136<SeP>60<SeP>97<SeP>81<SeP>38<SeP>48<SeP>92<SeP>60<SeP>46<SeP>56<SeP>126<SeP>62<SeP>179<SeP>96<SeP>78<SeP>69<SeP>62<SeP>47<SeP>75<SeP>80<SeP>68<SeP>110<SeP>63<SeP>83<SeP>110<SeP>71<SeP>53<SeP>167<SeP>50<SeP>81<SeP>57<SeP>40<SeP>55<SeP>98<SeP>77<SeP>80<SeP>66<SeP>153<SeP>81<SeP>108<SeP>60<SeP>62<SeP>36<SeP>109<SeP>73<SeP>67<SeP>109<SeP>94<SeP>65<SeP>88<SeP>99<SeP>118<SeP>85<SeP>53<SeP>31<SeP>41<SeP>81<SeP>83<SeP>57<SeP>90<SeP>85<SeP>52<SeP>83<SeP>90<SeP>130<SeP>85<SeP>39<SeP>25<SeP>60<SeP>59<SeP>195<SeP>128<SeP>62<SeP>71<SeP>115<SeP>55<SeP>58<SeP>86<SeP>103<SeP>180<SeP>70<SeP>58<SeP>89<SeP>110<SeP>55<SeP>85<SeP>71<SeP>117<SeP>118<SeP>67<SeP>98<SeP>77<SeP>84<SeP>73<SeP>70<SeP>66<SeP>87<SeP>114<SeP>59<SeP>133<SeP>84<SeP>91<SeP>146<SeP>49<SeP>83<SeP>128<SeP>74<SeP>68<SeP>113<SeP>121<SeP>82<SeP>189<SeP>72<SeP>138<SeP>60<SeP>69<SeP>67<SeP>82<SeP>91<SeP>67<SeP>65<SeP>57<SeP>69<SeP>50<SeP>77<SeP>50<SeP>105<SeP>88<SeP>91<SeP>91<SeP>76<SeP>85<SeP>46<SeP>52<SeP>98<SeP>47<SeP>45<SeP>59<SeP>78<SeP>85<SeP>61<SeP>112<SeP>47<SeP>75<SeP>42<SeP>30<SeP>234<SeP>87<SeP>40<SeP>83<SeP>54<SeP>84<SeP>96<SeP>44<SeP>40<SeP>111<SeP>139<SeP>80<SeP>45<SeP>46<SeP>91<SeP>51<SeP>40<SeP>67<SeP>90<SeP>125<SeP>65<SeP>61<SeP>110<SeP>64<SeP>66<SeP>27<SeP>25<SeP>56<SeP>31<SeP>46<SeP>101<SeP>73<SeP>56<SeP>58<SeP>90<SeP>262<SeP>49<SeP>28<SeP>66<SeP>64<SeP>120<SeP>136<SeP>64<SeP>51<SeP>73<SeP>156<SeP>79<SeP>93<SeP>67<SeP>107<SeP>29<SeP>97<SeP>39<SeP>35<SeP>62<SeP>55<SeP>53<SeP>99<SeP>95<SeP>123<SeP>93<SeP>53<SeP>70<SeP>53<SeP>49<SeP>91<SeP>70<SeP>126<SeP>41<SeP>86<SeP>188<SeP>41<SeP>62<SeP>55<SeP>67<SeP>207<SeP>315<SeP>29<SeP>46<SeP>15<SeP>51<SeP>39<SeP>50<SeP>93<SeP>78<SeP>179<SeP>85<SeP>56<SeP>367";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-06 00:00:00<SeP>2025-02-06 01:48:00<SeP>2025-02-06 03:36:00<SeP>2025-02-06 05:24:00<SeP>2025-02-06 07:12:00<SeP>2025-02-06 09:00:00<SeP>2025-02-06 10:48:00<SeP>2025-02-06 12:36:00<SeP>2025-02-06 14:24:00<SeP>2025-02-06 16:12:00<SeP>2025-02-06 18:00:00<SeP>2025-02-06 19:48:00<SeP>2025-02-06 21:36:00<SeP>2025-02-06 23:24:00<SeP>2025-02-07 01:12:00<SeP>2025-02-07 03:00:00<SeP>2025-02-07 04:48:00<SeP>2025-02-07 06:36:00<SeP>2025-02-07 08:24:00<SeP>2025-02-07 10:12:00<SeP>2025-02-07 12:00:00<SeP>2025-02-07 13:48:00<SeP>2025-02-07 15:36:00<SeP>2025-02-07 17:24:00<SeP>2025-02-07 19:12:00<SeP>2025-02-07 21:00:00<SeP>2025-02-07 22:48:00<SeP>2025-02-08 00:36:00<SeP>2025-02-08 02:24:00<SeP>2025-02-08 04:12:00<SeP>2025-02-08 06:00:00<SeP>2025-02-08 07:48:00<SeP>2025-02-08 09:36:00<SeP>2025-02-08 11:24:00<SeP>2025-02-08 13:12:00<SeP>2025-02-08 15:00:00<SeP>2025-02-08 16:48:00<SeP>2025-02-08 18:36:00<SeP>2025-02-08 20:24:00<SeP>2025-02-08 22:12:00<SeP>2025-02-09 00:00:00<SeP>2025-02-09 01:48:00<SeP>2025-02-09 03:36:00<SeP>2025-02-09 05:24:00<SeP>2025-02-09 07:12:00<SeP>2025-02-09 09:00:00<SeP>2025-02-09 10:48:00<SeP>2025-02-09 12:36:00<SeP>2025-02-09 14:24:00<SeP>2025-02-09 16:12:00<SeP>2025-02-09 18:00:00<SeP>2025-02-09 19:48:00<SeP>2025-02-09 21:36:00<SeP>2025-02-09 23:24:00<SeP>2025-02-10 01:12:00<SeP>2025-02-10 03:00:00<SeP>2025-02-10 04:48:00<SeP>2025-02-10 06:36:00<SeP>2025-02-10 08:24:00<SeP>2025-02-10 10:12:00<SeP>2025-02-10 12:00:00<SeP>2025-02-10 13:48:00<SeP>2025-02-10 15:36:00<SeP>2025-02-10 17:24:00<SeP>2025-02-10 19:12:00<SeP>2025-02-10 21:00:00<SeP>2025-02-10 22:48:00<SeP>2025-02-11 00:36:00<SeP>2025-02-11 02:24:00<SeP>2025-02-11 04:12:00<SeP>2025-02-11 06:00:00<SeP>2025-02-11 07:48:00<SeP>2025-02-11 09:36:00<SeP>2025-02-11 11:24:00<SeP>2025-02-11 13:12:00<SeP>2025-02-11 15:00:00<SeP>2025-02-11 16:48:00<SeP>2025-02-11 18:36:00<SeP>2025-02-11 20:24:00<SeP>2025-02-11 22:12:00<SeP>2025-02-12 00:00:00<SeP>2025-02-12 01:48:00<SeP>2025-02-12 03:36:00<SeP>2025-02-12 05:24:00<SeP>2025-02-12 07:12:00<SeP>2025-02-12 09:00:00<SeP>2025-02-12 10:48:00<SeP>2025-02-12 12:36:00<SeP>2025-02-12 14:24:00<SeP>2025-02-12 16:12:00<SeP>2025-02-12 18:00:00<SeP>2025-02-12 19:48:00<SeP>2025-02-12 21:36:00<SeP>2025-02-12 23:24:00<SeP>2025-02-13 01:12:00<SeP>2025-02-13 03:00:00<SeP>2025-02-13 04:48:00<SeP>2025-02-13 06:36:00<SeP>2025-02-13 08:24:00<SeP>2025-02-13 10:12:00<SeP>2025-02-13 12:00:00<SeP>2025-02-13 13:48:00<SeP>2025-02-13 15:36:00<SeP>2025-02-13 17:24:00<SeP>2025-02-13 19:12:00<SeP>2025-02-13 21:00:00<SeP>2025-02-13 22:48:00<SeP>2025-02-14 00:36:00<SeP>2025-02-14 02:24:00<SeP>2025-02-14 04:12:00<SeP>2025-02-14 06:00:00<SeP>2025-02-14 07:48:00<SeP>2025-02-14 09:36:00<SeP>2025-02-14 11:24:00<SeP>2025-02-14 13:12:00<SeP>2025-02-14 15:00:00<SeP>2025-02-14 16:48:00<SeP>2025-02-14 18:36:00<SeP>2025-02-14 20:24:00<SeP>2025-02-14 22:12:00<SeP>2025-02-15 00:00:00<SeP>2025-02-15 01:48:00<SeP>2025-02-15 03:36:00<SeP>2025-02-15 05:24:00<SeP>2025-02-15 07:12:00<SeP>2025-02-15 09:00:00<SeP>2025-02-15 10:48:00<SeP>2025-02-15 12:36:00<SeP>2025-02-15 14:24:00<SeP>2025-02-15 16:12:00<SeP>2025-02-15 18:00:00<SeP>2025-02-15 19:48:00<SeP>2025-02-15 21:36:00<SeP>2025-02-15 23:24:00<SeP>2025-02-16 01:12:00<SeP>2025-02-16 03:00:00<SeP>2025-02-16 04:48:00<SeP>2025-02-16 06:36:00<SeP>2025-02-16 08:24:00<SeP>2025-02-16 10:12:00<SeP>2025-02-16 12:00:00<SeP>2025-02-16 13:48:00<SeP>2025-02-16 15:36:00<SeP>2025-02-16 17:24:00<SeP>2025-02-16 19:12:00<SeP>2025-02-16 21:00:00<SeP>2025-02-16 22:48:00<SeP>2025-02-17 00:36:00<SeP>2025-02-17 02:24:00<SeP>2025-02-17 04:12:00<SeP>2025-02-17 06:00:00<SeP>2025-02-17 07:48:00<SeP>2025-02-17 09:36:00<SeP>2025-02-17 11:24:00<SeP>2025-02-17 13:12:00<SeP>2025-02-17 15:00:00<SeP>2025-02-17 16:48:00<SeP>2025-02-17 18:36:00<SeP>2025-02-17 20:24:00<SeP>2025-02-17 22:12:00<SeP>2025-02-18 00:00:00<SeP>2025-02-18 01:48:00<SeP>2025-02-18 03:36:00<SeP>2025-02-18 05:24:00<SeP>2025-02-18 07:12:00<SeP>2025-02-18 09:00:00<SeP>2025-02-18 10:48:00<SeP>2025-02-18 12:36:00<SeP>2025-02-18 14:24:00<SeP>2025-02-18 16:12:00<SeP>2025-02-18 18:00:00<SeP>2025-02-18 19:48:00<SeP>2025-02-18 21:36:00<SeP>2025-02-18 23:24:00<SeP>2025-02-19 01:12:00<SeP>2025-02-19 03:00:00<SeP>2025-02-19 04:48:00<SeP>2025-02-19 06:36:00<SeP>2025-02-19 08:24:00<SeP>2025-02-19 10:12:00<SeP>2025-02-19 12:00:00<SeP>2025-02-19 13:48:00<SeP>2025-02-19 15:36:00<SeP>2025-02-19 17:24:00<SeP>2025-02-19 19:12:00<SeP>2025-02-19 21:00:00<SeP>2025-02-19 22:48:00<SeP>2025-02-20 00:36:00<SeP>2025-02-20 02:24:00<SeP>2025-02-20 04:12:00<SeP>2025-02-20 06:00:00<SeP>2025-02-20 07:48:00<SeP>2025-02-20 09:36:00<SeP>2025-02-20 11:24:00<SeP>2025-02-20 13:12:00<SeP>2025-02-20 15:00:00<SeP>2025-02-20 16:48:00<SeP>2025-02-20 18:36:00<SeP>2025-02-20 20:24:00<SeP>2025-02-20 22:12:00<SeP>2025-02-21 00:00:00<SeP>2025-02-21 01:48:00<SeP>2025-02-21 03:36:00<SeP>2025-02-21 05:24:00<SeP>2025-02-21 07:12:00<SeP>2025-02-21 09:00:00<SeP>2025-02-21 10:48:00<SeP>2025-02-21 12:36:00<SeP>2025-02-21 14:24:00<SeP>2025-02-21 16:12:00<SeP>2025-02-21 18:00:00<SeP>2025-02-21 19:48:00<SeP>2025-02-21 21:36:00<SeP>2025-02-21 23:24:00<SeP>2025-02-22 01:12:00<SeP>2025-02-22 03:00:00<SeP>2025-02-22 04:48:00<SeP>2025-02-22 06:36:00<SeP>2025-02-22 08:24:00<SeP>2025-02-22 10:12:00<SeP>2025-02-22 12:00:00<SeP>2025-02-22 13:48:00<SeP>2025-02-22 15:36:00<SeP>2025-02-22 17:24:00<SeP>2025-02-22 19:12:00<SeP>2025-02-22 21:00:00<SeP>2025-02-22 22:48:00<SeP>2025-02-23 00:36:00<SeP>2025-02-23 02:24:00<SeP>2025-02-23 04:12:00<SeP>2025-02-23 06:00:00<SeP>2025-02-23 07:48:00<SeP>2025-02-23 09:36:00<SeP>2025-02-23 11:24:00<SeP>2025-02-23 13:12:00<SeP>2025-02-23 15:00:00<SeP>2025-02-23 16:48:00<SeP>2025-02-23 18:36:00<SeP>2025-02-23 20:24:00<SeP>2025-02-23 22:12:00<SeP>2025-02-24 00:00:00<SeP>2025-02-24 01:48:00<SeP>2025-02-24 03:36:00<SeP>2025-02-24 05:24:00<SeP>2025-02-24 07:12:00<SeP>2025-02-24 09:00:00<SeP>2025-02-24 10:48:00<SeP>2025-02-24 12:36:00<SeP>2025-02-24 14:24:00<SeP>2025-02-24 16:12:00<SeP>2025-02-24 18:00:00<SeP>2025-02-24 19:48:00<SeP>2025-02-24 21:36:00<SeP>2025-02-24 23:24:00<SeP>2025-02-25 01:12:00<SeP>2025-02-25 03:00:00<SeP>2025-02-25 04:48:00<SeP>2025-02-25 06:36:00<SeP>2025-02-25 08:24:00<SeP>2025-02-25 10:12:00<SeP>2025-02-25 12:00:00<SeP>2025-02-25 13:48:00<SeP>2025-02-25 15:36:00<SeP>2025-02-25 17:24:00<SeP>2025-02-25 19:12:00<SeP>2025-02-25 21:00:00<SeP>2025-02-25 22:48:00<SeP>2025-02-26 00:36:00<SeP>2025-02-26 02:24:00<SeP>2025-02-26 04:12:00<SeP>2025-02-26 06:00:00<SeP>2025-02-26 07:48:00<SeP>2025-02-26 09:36:00<SeP>2025-02-26 11:24:00<SeP>2025-02-26 13:12:00<SeP>2025-02-26 15:00:00<SeP>2025-02-26 16:48:00<SeP>2025-02-26 18:36:00<SeP>2025-02-26 20:24:00<SeP>2025-02-26 22:12:00<SeP>2025-02-27 00:00:00<SeP>2025-02-27 01:48:00<SeP>2025-02-27 03:36:00<SeP>2025-02-27 05:24:00<SeP>2025-02-27 07:12:00<SeP>2025-02-27 09:00:00<SeP>2025-02-27 10:48:00<SeP>2025-02-27 12:36:00<SeP>2025-02-27 14:24:00<SeP>2025-02-27 16:12:00<SeP>2025-02-27 18:00:00<SeP>2025-02-27 19:48:00<SeP>2025-02-27 21:36:00<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:12:00<SeP>2025-02-28 03:00:00<SeP>2025-02-28 04:48:00<SeP>2025-02-28 06:36:00<SeP>2025-02-28 08:24:00<SeP>2025-02-28 10:12:00<SeP>2025-02-28 12:00:00<SeP>2025-02-28 13:48:00<SeP>2025-02-28 15:36:00<SeP>2025-02-28 17:24:00<SeP>2025-02-28 19:12:00<SeP>2025-02-28 21:00:00<SeP>2025-02-28 22:48:00<SeP>2025-03-01 00:36:00<SeP>2025-03-01 02:24:00<SeP>2025-03-01 04:12:00<SeP>2025-03-01 06:00:00<SeP>2025-03-01 07:48:00<SeP>2025-03-01 09:36:00<SeP>2025-03-01 11:24:00<SeP>2025-03-01 13:12:00<SeP>2025-03-01 15:00:00<SeP>2025-03-01 16:48:00<SeP>2025-03-01 18:36:00<SeP>2025-03-01 20:24:00<SeP>2025-03-01 22:12:00<SeP>2025-03-02 00:00:00<SeP>2025-03-02 01:48:00<SeP>2025-03-02 03:36:00<SeP>2025-03-02 05:24:00<SeP>2025-03-02 07:12:00<SeP>2025-03-02 09:00:00<SeP>2025-03-02 10:48:00<SeP>2025-03-02 12:36:00<SeP>2025-03-02 14:24:00<SeP>2025-03-02 16:12:00<SeP>2025-03-02 18:00:00<SeP>2025-03-02 19:48:00<SeP>2025-03-02 21:36:00<SeP>2025-03-02 23:24:00<SeP>2025-03-03 01:12:00<SeP>2025-03-03 03:00:00<SeP>2025-03-03 04:48:00<SeP>2025-03-03 06:36:00<SeP>2025-03-03 08:24:00<SeP>2025-03-03 10:12:00<SeP>2025-03-03 12:00:00<SeP>2025-03-03 13:48:00<SeP>2025-03-03 15:36:00<SeP>2025-03-03 17:24:00<SeP>2025-03-03 19:12:00<SeP>2025-03-03 21:00:00<SeP>2025-03-03 22:48:00<SeP>2025-03-04 00:36:00<SeP>2025-03-04 02:24:00<SeP>2025-03-04 04:12:00<SeP>2025-03-04 06:00:00<SeP>2025-03-04 07:48:00<SeP>2025-03-04 09:36:00<SeP>2025-03-04 11:24:00<SeP>2025-03-04 13:12:00<SeP>2025-03-04 15:00:00<SeP>2025-03-04 16:48:00<SeP>2025-03-04 18:36:00<SeP>2025-03-04 20:24:00<SeP>2025-03-04 22:12:00<SeP>2025-03-05 00:00:00<SeP>2025-03-05 01:48:00<SeP>2025-03-05 03:36:00<SeP>2025-03-05 05:24:00<SeP>2025-03-05 07:12:00<SeP>2025-03-05 09:00:00<SeP>2025-03-05 10:48:00<SeP>2025-03-05 12:36:00<SeP>2025-03-05 14:24:00<SeP>2025-03-05 16:12:00<SeP>2025-03-05 18:00:00<SeP>2025-03-05 19:48:00<SeP>2025-03-05 21:36:00<SeP>2025-03-05 23:24:00<SeP>2025-03-06 01:12:00<SeP>2025-03-06 03:00:00<SeP>2025-03-06 04:48:00<SeP>2025-03-06 06:36:00<SeP>2025-03-06 08:24:00<SeP>2025-03-06 10:12:00<SeP>2025-03-06 12:00:00<SeP>2025-03-06 13:48:00<SeP>2025-03-06 15:36:00<SeP>2025-03-06 17:24:00<SeP>2025-03-06 19:12:00<SeP>2025-03-06 21:00:00<SeP>2025-03-06 22:48:00<SeP>2025-03-07 00:36:00<SeP>2025-03-07 02:24:00<SeP>2025-03-07 04:12:00<SeP>2025-03-07 06:00:00<SeP>2025-03-07 07:48:00<SeP>2025-03-07 09:36:00<SeP>2025-03-07 11:24:00<SeP>2025-03-07 13:12:00<SeP>2025-03-07 15:00:00<SeP>2025-03-07 16:48:00<SeP>2025-03-07 18:36:00<SeP>2025-03-07 20:24:00<SeP>2025-03-07 22:12:00";
  const itemLabel       = "Ataques";
  const itemData        = "2585<SeP>2759<SeP>1610<SeP>0<SeP>0<SeP>0<SeP>1<SeP>198<SeP>272<SeP>176<SeP>136<SeP>502<SeP>35<SeP>138<SeP>158<SeP>74<SeP>102<SeP>226<SeP>18<SeP>229<SeP>298<SeP>231<SeP>65<SeP>265<SeP>237<SeP>202<SeP>252<SeP>141<SeP>124<SeP>255<SeP>43<SeP>195<SeP>119<SeP>122<SeP>181<SeP>6<SeP>42<SeP>122<SeP>212<SeP>268<SeP>187<SeP>220<SeP>58<SeP>105<SeP>248<SeP>311<SeP>300<SeP>173<SeP>487<SeP>176<SeP>534<SeP>323<SeP>345<SeP>88<SeP>251<SeP>269<SeP>285<SeP>118<SeP>91<SeP>49<SeP>28<SeP>165<SeP>224<SeP>140<SeP>140<SeP>38<SeP>219<SeP>219<SeP>60<SeP>323<SeP>94<SeP>263<SeP>210<SeP>28<SeP>171<SeP>425<SeP>81<SeP>319<SeP>55<SeP>267<SeP>194<SeP>440<SeP>910<SeP>3218<SeP>2738<SeP>511<SeP>310<SeP>320<SeP>225<SeP>657<SeP>266<SeP>184<SeP>126<SeP>33<SeP>50<SeP>581<SeP>80<SeP>243<SeP>133<SeP>320<SeP>102<SeP>279<SeP>878<SeP>197<SeP>559<SeP>122<SeP>173<SeP>251<SeP>172<SeP>486<SeP>275<SeP>264<SeP>358<SeP>40<SeP>295<SeP>370<SeP>168<SeP>383<SeP>200<SeP>159<SeP>43<SeP>243<SeP>51<SeP>607<SeP>304<SeP>160<SeP>173<SeP>238<SeP>99<SeP>46<SeP>94<SeP>426<SeP>145<SeP>171<SeP>60<SeP>51<SeP>26<SeP>511<SeP>155<SeP>206<SeP>37<SeP>430<SeP>181<SeP>223<SeP>537<SeP>206<SeP>250<SeP>254<SeP>348<SeP>201<SeP>187<SeP>419<SeP>246<SeP>340<SeP>220<SeP>56<SeP>182<SeP>475<SeP>26<SeP>135<SeP>204<SeP>502<SeP>104<SeP>252<SeP>225<SeP>46<SeP>349<SeP>122<SeP>276<SeP>284<SeP>210<SeP>221<SeP>8<SeP>235<SeP>124<SeP>216<SeP>433<SeP>110<SeP>47<SeP>118<SeP>58<SeP>38<SeP>124<SeP>393<SeP>203<SeP>147<SeP>159<SeP>219<SeP>214<SeP>116<SeP>51<SeP>161<SeP>21<SeP>8<SeP>254<SeP>245<SeP>245<SeP>652<SeP>540<SeP>247<SeP>680<SeP>345<SeP>648<SeP>202<SeP>318<SeP>407<SeP>539<SeP>392<SeP>321<SeP>417<SeP>1060<SeP>614<SeP>933<SeP>377<SeP>322<SeP>249<SeP>285<SeP>321<SeP>856<SeP>455<SeP>546<SeP>571<SeP>184<SeP>490<SeP>451<SeP>778<SeP>608<SeP>251<SeP>659<SeP>401<SeP>607<SeP>324<SeP>365<SeP>648<SeP>625<SeP>641<SeP>389<SeP>259<SeP>89<SeP>291<SeP>129<SeP>199<SeP>215<SeP>426<SeP>58<SeP>221<SeP>242<SeP>65<SeP>96<SeP>200<SeP>285<SeP>211<SeP>271<SeP>102<SeP>447<SeP>146<SeP>76<SeP>272<SeP>100<SeP>411<SeP>299<SeP>216<SeP>135<SeP>213<SeP>39<SeP>137<SeP>163<SeP>85<SeP>20<SeP>290<SeP>158<SeP>42<SeP>241<SeP>48<SeP>91<SeP>61<SeP>80<SeP>98<SeP>324<SeP>144<SeP>335<SeP>49<SeP>274<SeP>467<SeP>184<SeP>156<SeP>133<SeP>155<SeP>302<SeP>52<SeP>37<SeP>74<SeP>115<SeP>207<SeP>185<SeP>125<SeP>257<SeP>153<SeP>201<SeP>294<SeP>128<SeP>314<SeP>60<SeP>60<SeP>46<SeP>48<SeP>140<SeP>24<SeP>23<SeP>86<SeP>58<SeP>65<SeP>88<SeP>40<SeP>194<SeP>108<SeP>106<SeP>46<SeP>211<SeP>81<SeP>368<SeP>227<SeP>118<SeP>19<SeP>313<SeP>21<SeP>20<SeP>137<SeP>145<SeP>83<SeP>31<SeP>163<SeP>80<SeP>111<SeP>144<SeP>227<SeP>52<SeP>89<SeP>49<SeP>38<SeP>191<SeP>313<SeP>71<SeP>92<SeP>39<SeP>142<SeP>188<SeP>37<SeP>459<SeP>28<SeP>31<SeP>19<SeP>207<SeP>128<SeP>26<SeP>96<SeP>36<SeP>92<SeP>51<SeP>299<SeP>142<SeP>138<SeP>47<SeP>104<SeP>73<SeP>39<SeP>33<SeP>33<SeP>290<SeP>79<SeP>109<SeP>127<SeP>162<SeP>90<SeP>31<SeP>95<SeP>169<SeP>104<SeP>145<SeP>104<SeP>66<SeP>72<SeP>124<SeP>27<SeP>170<SeP>114<SeP>89<SeP>175<SeP>43<SeP>298<SeP>465<SeP>94<SeP>115<SeP>177<SeP>36<SeP>37<SeP>100<SeP>86<SeP>77<SeP>116";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>Pakistan<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Russia<SeP>Hong Kong";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "21520<SeP>13598<SeP>12695<SeP>8900<SeP>6554<SeP>6090<SeP>5373<SeP>4516<SeP>4461<SeP>4108";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "14775<SeP>3030<SeP>2488<SeP>1997<SeP>1350<SeP>980<SeP>850<SeP>735<SeP>635<SeP>482";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>Pakistan<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Romania";
  const itemLabel   = "Attacks";
  const itemData    = "11715<SeP>10568<SeP>8265<SeP>6745<SeP>6323<SeP>4638<SeP>4373<SeP>3740<SeP>3602<SeP>3341";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>38264<SeP>44486<SeP>4766<SeP>16276<SeP>47890<SeP>4837<SeP>136052";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "11071<SeP>9948<SeP>8249<SeP>6261<SeP>6226<SeP>4271<SeP>3341<SeP>3331<SeP>3102<SeP>3046";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>3462<SeP>4766<SeP>4811<SeP>14061<SeP>9269<SeP>4808";
  const itemLabel   = "Scans";
  const itemData    = "8418<SeP>2705<SeP>1999<SeP>1322<SeP>864<SeP>630<SeP>611<SeP>579<SeP>510<SeP>496";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "3462<SeP>14061<SeP>38264<SeP>44486<SeP>4766<SeP>16276<SeP>136052<SeP>47890<SeP>56971<SeP>4134";
  const itemLabel   = "Atacks";
  const itemData    = "10207<SeP>7670<SeP>6261<SeP>6225<SeP>3641<SeP>3178<SeP>3045<SeP>3024<SeP>2447<SeP>1530";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>Pakistan<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Russia<SeP>Hong Kong";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "21520<SeP>13598<SeP>12695<SeP>8900<SeP>6554<SeP>6090<SeP>5373<SeP>4516<SeP>4461<SeP>4108";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "14775<SeP>3030<SeP>2488<SeP>1997<SeP>1350<SeP>980<SeP>850<SeP>735<SeP>635<SeP>482";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>Pakistan<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Romania";
  const itemLabel   = "Ataques";
  const itemData    = "11715<SeP>10568<SeP>8265<SeP>6745<SeP>6323<SeP>4638<SeP>4373<SeP>3740<SeP>3602<SeP>3341";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>38264<SeP>44486<SeP>4766<SeP>16276<SeP>47890<SeP>4837<SeP>136052";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "11071<SeP>9948<SeP>8249<SeP>6261<SeP>6226<SeP>4271<SeP>3341<SeP>3331<SeP>3102<SeP>3046";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>3462<SeP>4766<SeP>4811<SeP>14061<SeP>9269<SeP>4808";
  const itemLabel   = "Escaneos";
  const itemData    = "8418<SeP>2705<SeP>1999<SeP>1322<SeP>864<SeP>630<SeP>611<SeP>579<SeP>510<SeP>496";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "3462<SeP>14061<SeP>38264<SeP>44486<SeP>4766<SeP>16276<SeP>136052<SeP>47890<SeP>56971<SeP>4134";
  const itemLabel   = "Ataques";
  const itemData    = "10207<SeP>7670<SeP>6261<SeP>6225<SeP>3641<SeP>3178<SeP>3045<SeP>3024<SeP>2447<SeP>1530";
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
