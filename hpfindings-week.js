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
  document.getElementById("last-updated").innerHTML = "2025-3-5";
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
  const metricData    = "19844";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "7400";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "12444";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "2439";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "6386";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "6058";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "1179";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "2252";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "3806";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "1092";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "19844";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "7400";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "12444";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "2439";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "6386";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "6058";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "1179";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "2252";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "3806";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "1092";
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
  const incomingData = "19844<SeP>7400<SeP>12444<SeP>2439";
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
  const incomingData = "12444<SeP>6386<SeP>6058<SeP>1179";
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
  const incomingData = "6058<SeP>2252<SeP>3806<SeP>1092";
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
  const incomingData = "2611<SeP>2471<SeP>140";
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
  const incomingData = "29<SeP>8<SeP>21<SeP>4";
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
  const incomingData = "19844<SeP>7400<SeP>12444<SeP>2439";
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
  const incomingData = "12444<SeP>6386<SeP>6058<SeP>1179";
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
  const incomingData = "6058<SeP>2252<SeP>3806<SeP>1092";
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
  const incomingData = "2611<SeP>2471<SeP>140";
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
  const incomingData = "29<SeP>8<SeP>21<SeP>4";
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
  const column1Data  = "IP03 (<span class=blur>8.222.249.158</span>)<SeP>IP02 (<span class=blur>137.184.11.175</span>)<SeP>IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>2.57.122.193</span>)<SeP>IP05 (<span class=blur>146.190.59.60</span>)<SeP>IP07 (<span class=blur>192.243.115.161</span>)<SeP>IP06 (<span class=blur>195.245.229.151</span>)<SeP>IP08 (<span class=blur>120.26.114.24</span>)<SeP>IP09 (<span class=blur>80.94.95.112</span>)<SeP>IP10 (<span class=blur>108.5.89.14</span>)";
  const column2Data  = "AS45102<SeP>AS14061<SeP>AS207566<SeP>AS47890<SeP>AS14061<SeP>AS25820<SeP>AS4785<SeP>AS37963<SeP>AS204428<SeP>AS701";
  const column3Data  = "<span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States";
  const column4Data  = "302<SeP>302<SeP>302<SeP>285<SeP>249<SeP>248<SeP>248<SeP>244<SeP>208<SeP>191";
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
  const column1Data  = "IP10 (<span class=blur>108.5.89.14</span>)<SeP>IP13 (<span class=blur>123.202.158.74</span>)<SeP>IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP14 (<span class=blur>92.255.85.35</span>)<SeP>IP15 (<span class=blur>138.75.54.7</span>)<SeP>IP16 (<span class=blur>176.65.137.13</span>)<SeP>IP17 (<span class=blur>158.140.243.132</span>)<SeP>IP18 (<span class=blur>208.118.124.186</span>)<SeP>IP19 (<span class=blur>98.113.131.56</span>)<SeP>IP20 (<span class=blur>141.98.11.205</span>)";
  const column2Data  = "AS701<SeP>AS9269<SeP>AS207566<SeP>AS207566<SeP>AS4773<SeP>AS50580<SeP>AS9790<SeP>AS6327<SeP>AS701<SeP>AS209605";
  const column3Data  = "<span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-nz\u0022></span>\u00a0New Zealand<SeP><span class=\u0022fi fi-ca\u0022></span>\u00a0Canada<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-lt\u0022></span>\u00a0Lithuania";
  const column4Data  = "191<SeP>153<SeP>151<SeP>132<SeP>124<SeP>122<SeP>121<SeP>119<SeP>117<SeP>102";
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
  const column1Data  = "IP03 (<span class=blur>8.222.249.158</span>)<SeP>IP02 (<span class=blur>137.184.11.175</span>)<SeP>IP04 (<span class=blur>2.57.122.193</span>)<SeP>IP07 (<span class=blur>192.243.115.161</span>)<SeP>IP06 (<span class=blur>195.245.229.151</span>)<SeP>IP05 (<span class=blur>146.190.59.60</span>)<SeP>IP08 (<span class=blur>120.26.114.24</span>)<SeP>IP09 (<span class=blur>80.94.95.112</span>)<SeP>IP11 (<span class=blur>92.255.57.132</span>)<SeP>IP12 (<span class=blur>193.32.162.137</span>)";
  const column2Data  = "AS45102<SeP>AS14061<SeP>AS47890<SeP>AS25820<SeP>AS4785<SeP>AS14061<SeP>AS37963<SeP>AS204428<SeP>AS207566<SeP>AS47890";
  const column3Data  = "<span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania";
  const column4Data  = "301<SeP>301<SeP>284<SeP>247<SeP>247<SeP>247<SeP>243<SeP>208<SeP>161<SeP>154";
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
  const column1Data   = "IP03 (<span class=blur>8.222.249.158</span>)<SeP>IP02 (<span class=blur>137.184.11.175</span>)<SeP>IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>2.57.122.193</span>)<SeP>IP05 (<span class=blur>146.190.59.60</span>)<SeP>IP07 (<span class=blur>192.243.115.161</span>)<SeP>IP06 (<span class=blur>195.245.229.151</span>)<SeP>IP08 (<span class=blur>120.26.114.24</span>)<SeP>IP09 (<span class=blur>80.94.95.112</span>)<SeP>IP10 (<span class=blur>108.5.89.14</span>)";
  const column2Data   = "AS45102<SeP>AS14061<SeP>AS207566<SeP>AS47890<SeP>AS14061<SeP>AS25820<SeP>AS4785<SeP>AS37963<SeP>AS204428<SeP>AS701";
  const column3Data   = "<span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "302<SeP>302<SeP>302<SeP>285<SeP>249<SeP>248<SeP>248<SeP>244<SeP>208<SeP>191";
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
  const column1Data   = "IP10 (<span class=blur>108.5.89.14</span>)<SeP>IP13 (<span class=blur>123.202.158.74</span>)<SeP>IP01 (<span class=blur>185.7.214.180</span>)<SeP>IP14 (<span class=blur>92.255.85.35</span>)<SeP>IP15 (<span class=blur>138.75.54.7</span>)<SeP>IP16 (<span class=blur>176.65.137.13</span>)<SeP>IP17 (<span class=blur>158.140.243.132</span>)<SeP>IP18 (<span class=blur>208.118.124.186</span>)<SeP>IP19 (<span class=blur>98.113.131.56</span>)<SeP>IP20 (<span class=blur>141.98.11.205</span>)";
  const column2Data   = "AS701<SeP>AS9269<SeP>AS207566<SeP>AS207566<SeP>AS4773<SeP>AS50580<SeP>AS9790<SeP>AS6327<SeP>AS701<SeP>AS209605";
  const column3Data   = "<span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-nz\u0022></span>\u00a0New Zealand<SeP><span class=\u0022fi fi-ca\u0022></span>\u00a0Canada<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-lt\u0022></span>\u00a0Lithuania";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "191<SeP>153<SeP>151<SeP>132<SeP>124<SeP>122<SeP>121<SeP>119<SeP>117<SeP>102";
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
  const column1Data   = "IP03 (<span class=blur>8.222.249.158</span>)<SeP>IP02 (<span class=blur>137.184.11.175</span>)<SeP>IP04 (<span class=blur>2.57.122.193</span>)<SeP>IP07 (<span class=blur>192.243.115.161</span>)<SeP>IP06 (<span class=blur>195.245.229.151</span>)<SeP>IP05 (<span class=blur>146.190.59.60</span>)<SeP>IP08 (<span class=blur>120.26.114.24</span>)<SeP>IP09 (<span class=blur>80.94.95.112</span>)<SeP>IP11 (<span class=blur>92.255.57.132</span>)<SeP>IP12 (<span class=blur>193.32.162.137</span>)";
  const column2Data   = "AS45102<SeP>AS14061<SeP>AS47890<SeP>AS25820<SeP>AS4785<SeP>AS14061<SeP>AS37963<SeP>AS204428<SeP>AS207566<SeP>AS47890";
  const column3Data   = "<span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "301<SeP>301<SeP>284<SeP>247<SeP>247<SeP>247<SeP>243<SeP>208<SeP>161<SeP>154";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>root root<SeP>root Abc123456.<SeP>root Aa123456!!!<SeP>admin admins<SeP>mc 1<SeP>dev 1";
  const column3Data   = "1788<SeP>1767<SeP>312<SeP>62<SeP>51<SeP>39<SeP>39<SeP>39<SeP>38<SeP>38";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>d9fde4e5cc24e7a961520adfe1484237007292f9e53676dfa1c84e4acfc06742";
  const column2Data  = "1867<SeP>507<SeP>83<SeP>14<SeP>14<SeP>14<SeP>14<SeP>14<SeP>14<SeP>8";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>redir";
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
  const column1Data  = "http://37.44.238.92<SeP>http://37.44.238.88<SeP>http://61.215.151.173<SeP>http://193.143.1.7";
  const column2Data  = "5<SeP>3<SeP>2<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "14012<SeP>5832";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>root root<SeP>root Abc123456.<SeP>root Aa123456!!!<SeP>admin admins<SeP>mc 1<SeP>dev 1";
  const column3Data   = "1788<SeP>1767<SeP>312<SeP>62<SeP>51<SeP>39<SeP>39<SeP>39<SeP>38<SeP>38";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>d9fde4e5cc24e7a961520adfe1484237007292f9e53676dfa1c84e4acfc06742";
  const column2Data  = "1867<SeP>507<SeP>83<SeP>14<SeP>14<SeP>14<SeP>14<SeP>14<SeP>14<SeP>8";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>redir";
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
  const column1Data  = "http://37.44.238.92<SeP>http://37.44.238.88<SeP>http://61.215.151.173<SeP>http://193.143.1.7";
  const column2Data  = "5<SeP>3<SeP>2<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "14012<SeP>5832";
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
  
  // Restricted to this site
  mapboxgl.accessToken = "pk.eyJ1IjoicmRlZnJhbmNpc2NvIiwiYSI6ImNsbXYxcHRxeDBmejEyanBjN3VpNG1vYXMifQ.rXdgexSxKXg3Cqk9omlirA";
  
  const map = new mapboxgl.Map({
    container: "map",                          // container ID
    style: "mapbox://styles/mapbox/light-v10", // style URL
    zoom: 2,                                   // starting zoom
    center: [-25.00, 20.00]                    // starting center
  });

  document.getElementById('map-title').innerHTML = "Updated 2025-3-5";

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
        "name": "traffic between 2025-02-26 and 2025-03-04"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          3048,50
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
        "name": "scans between 2025-02-26 and 2025-03-04"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2266,38,
          3048,50
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
        "name": "attacks between 2025-02-26 and 2025-03-04"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          889,17,
          3048,50
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
  
  // Restricted to this site
  mapboxgl.accessToken = "pk.eyJ1IjoicmRlZnJhbmNpc2NvIiwiYSI6ImNsbXYxcHRxeDBmejEyanBjN3VpNG1vYXMifQ.rXdgexSxKXg3Cqk9omlirA";
  
  const map = new mapboxgl.Map({
    container: "map",                          // container ID
    style: "mapbox://styles/mapbox/light-v10", // style URL
    zoom: 2,                                   // starting zoom
    center: [-25.00, 20.00]                    // starting center
  });

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-5";

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
        "name": "tráfico entre 2025-02-26 y 2025-03-04"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          3048,50
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
        "name": "escaneos entre 2025-02-26 y 2025-03-04"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2266,38,
          3048,50
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
        "name": "ataques entre 2025-02-26 y 2025-03-04"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          889,17,
          3048,50
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
  const labelsData       = "2025-02-26 00:00:00<SeP>2025-02-26 00:25:12<SeP>2025-02-26 00:50:24<SeP>2025-02-26 01:15:36<SeP>2025-02-26 01:40:48<SeP>2025-02-26 02:06:00<SeP>2025-02-26 02:31:12<SeP>2025-02-26 02:56:24<SeP>2025-02-26 03:21:36<SeP>2025-02-26 03:46:48<SeP>2025-02-26 04:12:00<SeP>2025-02-26 04:37:12<SeP>2025-02-26 05:02:24<SeP>2025-02-26 05:27:36<SeP>2025-02-26 05:52:48<SeP>2025-02-26 06:18:00<SeP>2025-02-26 06:43:12<SeP>2025-02-26 07:08:24<SeP>2025-02-26 07:33:36<SeP>2025-02-26 07:58:48<SeP>2025-02-26 08:24:00<SeP>2025-02-26 08:49:12<SeP>2025-02-26 09:14:24<SeP>2025-02-26 09:39:36<SeP>2025-02-26 10:04:48<SeP>2025-02-26 10:30:00<SeP>2025-02-26 10:55:12<SeP>2025-02-26 11:20:24<SeP>2025-02-26 11:45:36<SeP>2025-02-26 12:10:48<SeP>2025-02-26 12:36:00<SeP>2025-02-26 13:01:12<SeP>2025-02-26 13:26:24<SeP>2025-02-26 13:51:36<SeP>2025-02-26 14:16:48<SeP>2025-02-26 14:42:00<SeP>2025-02-26 15:07:12<SeP>2025-02-26 15:32:24<SeP>2025-02-26 15:57:36<SeP>2025-02-26 16:22:48<SeP>2025-02-26 16:48:00<SeP>2025-02-26 17:13:12<SeP>2025-02-26 17:38:24<SeP>2025-02-26 18:03:36<SeP>2025-02-26 18:28:48<SeP>2025-02-26 18:54:00<SeP>2025-02-26 19:19:12<SeP>2025-02-26 19:44:24<SeP>2025-02-26 20:09:36<SeP>2025-02-26 20:34:48<SeP>2025-02-26 21:00:00<SeP>2025-02-26 21:25:12<SeP>2025-02-26 21:50:24<SeP>2025-02-26 22:15:36<SeP>2025-02-26 22:40:48<SeP>2025-02-26 23:06:00<SeP>2025-02-26 23:31:12<SeP>2025-02-26 23:56:24<SeP>2025-02-27 00:21:36<SeP>2025-02-27 00:46:48<SeP>2025-02-27 01:12:00<SeP>2025-02-27 01:37:12<SeP>2025-02-27 02:02:24<SeP>2025-02-27 02:27:36<SeP>2025-02-27 02:52:48<SeP>2025-02-27 03:18:00<SeP>2025-02-27 03:43:12<SeP>2025-02-27 04:08:24<SeP>2025-02-27 04:33:36<SeP>2025-02-27 04:58:48<SeP>2025-02-27 05:24:00<SeP>2025-02-27 05:49:12<SeP>2025-02-27 06:14:24<SeP>2025-02-27 06:39:36<SeP>2025-02-27 07:04:48<SeP>2025-02-27 07:30:00<SeP>2025-02-27 07:55:12<SeP>2025-02-27 08:20:24<SeP>2025-02-27 08:45:36<SeP>2025-02-27 09:10:48<SeP>2025-02-27 09:36:00<SeP>2025-02-27 10:01:12<SeP>2025-02-27 10:26:24<SeP>2025-02-27 10:51:36<SeP>2025-02-27 11:16:48<SeP>2025-02-27 11:42:00<SeP>2025-02-27 12:07:12<SeP>2025-02-27 12:32:24<SeP>2025-02-27 12:57:36<SeP>2025-02-27 13:22:48<SeP>2025-02-27 13:48:00<SeP>2025-02-27 14:13:12<SeP>2025-02-27 14:38:24<SeP>2025-02-27 15:03:36<SeP>2025-02-27 15:28:48<SeP>2025-02-27 15:54:00<SeP>2025-02-27 16:19:12<SeP>2025-02-27 16:44:24<SeP>2025-02-27 17:09:36<SeP>2025-02-27 17:34:48<SeP>2025-02-27 18:00:00<SeP>2025-02-27 18:25:12<SeP>2025-02-27 18:50:24<SeP>2025-02-27 19:15:36<SeP>2025-02-27 19:40:48<SeP>2025-02-27 20:06:00<SeP>2025-02-27 20:31:12<SeP>2025-02-27 20:56:24<SeP>2025-02-27 21:21:36<SeP>2025-02-27 21:46:48<SeP>2025-02-27 22:12:00<SeP>2025-02-27 22:37:12<SeP>2025-02-27 23:02:24<SeP>2025-02-27 23:27:36<SeP>2025-02-27 23:52:48<SeP>2025-02-28 00:18:00<SeP>2025-02-28 00:43:12<SeP>2025-02-28 01:08:24<SeP>2025-02-28 01:33:36<SeP>2025-02-28 01:58:48<SeP>2025-02-28 02:24:00<SeP>2025-02-28 02:49:12<SeP>2025-02-28 03:14:24<SeP>2025-02-28 03:39:36<SeP>2025-02-28 04:04:48<SeP>2025-02-28 04:30:00<SeP>2025-02-28 04:55:12<SeP>2025-02-28 05:20:24<SeP>2025-02-28 05:45:36<SeP>2025-02-28 06:10:48<SeP>2025-02-28 06:36:00<SeP>2025-02-28 07:01:12<SeP>2025-02-28 07:26:24<SeP>2025-02-28 07:51:36<SeP>2025-02-28 08:16:48<SeP>2025-02-28 08:42:00<SeP>2025-02-28 09:07:12<SeP>2025-02-28 09:32:24<SeP>2025-02-28 09:57:36<SeP>2025-02-28 10:22:48<SeP>2025-02-28 10:48:00<SeP>2025-02-28 11:13:12<SeP>2025-02-28 11:38:24<SeP>2025-02-28 12:03:36<SeP>2025-02-28 12:28:48<SeP>2025-02-28 12:54:00<SeP>2025-02-28 13:19:12<SeP>2025-02-28 13:44:24<SeP>2025-02-28 14:09:36<SeP>2025-02-28 14:34:48<SeP>2025-02-28 15:00:00<SeP>2025-02-28 15:25:12<SeP>2025-02-28 15:50:24<SeP>2025-02-28 16:15:36<SeP>2025-02-28 16:40:48<SeP>2025-02-28 17:06:00<SeP>2025-02-28 17:31:12<SeP>2025-02-28 17:56:24<SeP>2025-02-28 18:21:36<SeP>2025-02-28 18:46:48<SeP>2025-02-28 19:12:00<SeP>2025-02-28 19:37:12<SeP>2025-02-28 20:02:24<SeP>2025-02-28 20:27:36<SeP>2025-02-28 20:52:48<SeP>2025-02-28 21:18:00<SeP>2025-02-28 21:43:12<SeP>2025-02-28 22:08:24<SeP>2025-02-28 22:33:36<SeP>2025-02-28 22:58:48<SeP>2025-02-28 23:24:00<SeP>2025-02-28 23:49:12<SeP>2025-03-01 00:14:24<SeP>2025-03-01 00:39:36<SeP>2025-03-01 01:04:48<SeP>2025-03-01 01:30:00<SeP>2025-03-01 01:55:12<SeP>2025-03-01 02:20:24<SeP>2025-03-01 02:45:36<SeP>2025-03-01 03:10:48<SeP>2025-03-01 03:36:00<SeP>2025-03-01 04:01:12<SeP>2025-03-01 04:26:24<SeP>2025-03-01 04:51:36<SeP>2025-03-01 05:16:48<SeP>2025-03-01 05:42:00<SeP>2025-03-01 06:07:12<SeP>2025-03-01 06:32:24<SeP>2025-03-01 06:57:36<SeP>2025-03-01 07:22:48<SeP>2025-03-01 07:48:00<SeP>2025-03-01 08:13:12<SeP>2025-03-01 08:38:24<SeP>2025-03-01 09:03:36<SeP>2025-03-01 09:28:48<SeP>2025-03-01 09:54:00<SeP>2025-03-01 10:19:12<SeP>2025-03-01 10:44:24<SeP>2025-03-01 11:09:36<SeP>2025-03-01 11:34:48<SeP>2025-03-01 12:00:00<SeP>2025-03-01 12:25:12<SeP>2025-03-01 12:50:24<SeP>2025-03-01 13:15:36<SeP>2025-03-01 13:40:48<SeP>2025-03-01 14:06:00<SeP>2025-03-01 14:31:12<SeP>2025-03-01 14:56:24<SeP>2025-03-01 15:21:36<SeP>2025-03-01 15:46:48<SeP>2025-03-01 16:12:00<SeP>2025-03-01 16:37:12<SeP>2025-03-01 17:02:24<SeP>2025-03-01 17:27:36<SeP>2025-03-01 17:52:48<SeP>2025-03-01 18:18:00<SeP>2025-03-01 18:43:12<SeP>2025-03-01 19:08:24<SeP>2025-03-01 19:33:36<SeP>2025-03-01 19:58:48<SeP>2025-03-01 20:24:00<SeP>2025-03-01 20:49:12<SeP>2025-03-01 21:14:24<SeP>2025-03-01 21:39:36<SeP>2025-03-01 22:04:48<SeP>2025-03-01 22:30:00<SeP>2025-03-01 22:55:12<SeP>2025-03-01 23:20:24<SeP>2025-03-01 23:45:36<SeP>2025-03-02 00:10:48<SeP>2025-03-02 00:36:00<SeP>2025-03-02 01:01:12<SeP>2025-03-02 01:26:24<SeP>2025-03-02 01:51:36<SeP>2025-03-02 02:16:48<SeP>2025-03-02 02:42:00<SeP>2025-03-02 03:07:12<SeP>2025-03-02 03:32:24<SeP>2025-03-02 03:57:36<SeP>2025-03-02 04:22:48<SeP>2025-03-02 04:48:00<SeP>2025-03-02 05:13:12<SeP>2025-03-02 05:38:24<SeP>2025-03-02 06:03:36<SeP>2025-03-02 06:28:48<SeP>2025-03-02 06:54:00<SeP>2025-03-02 07:19:12<SeP>2025-03-02 07:44:24<SeP>2025-03-02 08:09:36<SeP>2025-03-02 08:34:48<SeP>2025-03-02 09:00:00<SeP>2025-03-02 09:25:12<SeP>2025-03-02 09:50:24<SeP>2025-03-02 10:15:36<SeP>2025-03-02 10:40:48<SeP>2025-03-02 11:06:00<SeP>2025-03-02 11:31:12<SeP>2025-03-02 11:56:24<SeP>2025-03-02 12:21:36<SeP>2025-03-02 12:46:48<SeP>2025-03-02 13:12:00<SeP>2025-03-02 13:37:12<SeP>2025-03-02 14:02:24<SeP>2025-03-02 14:27:36<SeP>2025-03-02 14:52:48<SeP>2025-03-02 15:18:00<SeP>2025-03-02 15:43:12<SeP>2025-03-02 16:08:24<SeP>2025-03-02 16:33:36<SeP>2025-03-02 16:58:48<SeP>2025-03-02 17:24:00<SeP>2025-03-02 17:49:12<SeP>2025-03-02 18:14:24<SeP>2025-03-02 18:39:36<SeP>2025-03-02 19:04:48<SeP>2025-03-02 19:30:00<SeP>2025-03-02 19:55:12<SeP>2025-03-02 20:20:24<SeP>2025-03-02 20:45:36<SeP>2025-03-02 21:10:48<SeP>2025-03-02 21:36:00<SeP>2025-03-02 22:01:12<SeP>2025-03-02 22:26:24<SeP>2025-03-02 22:51:36<SeP>2025-03-02 23:16:48<SeP>2025-03-02 23:42:00<SeP>2025-03-03 00:07:12<SeP>2025-03-03 00:32:24<SeP>2025-03-03 00:57:36<SeP>2025-03-03 01:22:48<SeP>2025-03-03 01:48:00<SeP>2025-03-03 02:13:12<SeP>2025-03-03 02:38:24<SeP>2025-03-03 03:03:36<SeP>2025-03-03 03:28:48<SeP>2025-03-03 03:54:00<SeP>2025-03-03 04:19:12<SeP>2025-03-03 04:44:24<SeP>2025-03-03 05:09:36<SeP>2025-03-03 05:34:48<SeP>2025-03-03 06:00:00<SeP>2025-03-03 06:25:12<SeP>2025-03-03 06:50:24<SeP>2025-03-03 07:15:36<SeP>2025-03-03 07:40:48<SeP>2025-03-03 08:06:00<SeP>2025-03-03 08:31:12<SeP>2025-03-03 08:56:24<SeP>2025-03-03 09:21:36<SeP>2025-03-03 09:46:48<SeP>2025-03-03 10:12:00<SeP>2025-03-03 10:37:12<SeP>2025-03-03 11:02:24<SeP>2025-03-03 11:27:36<SeP>2025-03-03 11:52:48<SeP>2025-03-03 12:18:00<SeP>2025-03-03 12:43:12<SeP>2025-03-03 13:08:24<SeP>2025-03-03 13:33:36<SeP>2025-03-03 13:58:48<SeP>2025-03-03 14:24:00<SeP>2025-03-03 14:49:12<SeP>2025-03-03 15:14:24<SeP>2025-03-03 15:39:36<SeP>2025-03-03 16:04:48<SeP>2025-03-03 16:30:00<SeP>2025-03-03 16:55:12<SeP>2025-03-03 17:20:24<SeP>2025-03-03 17:45:36<SeP>2025-03-03 18:10:48<SeP>2025-03-03 18:36:00<SeP>2025-03-03 19:01:12<SeP>2025-03-03 19:26:24<SeP>2025-03-03 19:51:36<SeP>2025-03-03 20:16:48<SeP>2025-03-03 20:42:00<SeP>2025-03-03 21:07:12<SeP>2025-03-03 21:32:24<SeP>2025-03-03 21:57:36<SeP>2025-03-03 22:22:48<SeP>2025-03-03 22:48:00<SeP>2025-03-03 23:13:12<SeP>2025-03-03 23:38:24<SeP>2025-03-04 00:03:36<SeP>2025-03-04 00:28:48<SeP>2025-03-04 00:54:00<SeP>2025-03-04 01:19:12<SeP>2025-03-04 01:44:24<SeP>2025-03-04 02:09:36<SeP>2025-03-04 02:34:48<SeP>2025-03-04 03:00:00<SeP>2025-03-04 03:25:12<SeP>2025-03-04 03:50:24<SeP>2025-03-04 04:15:36<SeP>2025-03-04 04:40:48<SeP>2025-03-04 05:06:00<SeP>2025-03-04 05:31:12<SeP>2025-03-04 05:56:24<SeP>2025-03-04 06:21:36<SeP>2025-03-04 06:46:48<SeP>2025-03-04 07:12:00<SeP>2025-03-04 07:37:12<SeP>2025-03-04 08:02:24<SeP>2025-03-04 08:27:36<SeP>2025-03-04 08:52:48<SeP>2025-03-04 09:18:00<SeP>2025-03-04 09:43:12<SeP>2025-03-04 10:08:24<SeP>2025-03-04 10:33:36<SeP>2025-03-04 10:58:48<SeP>2025-03-04 11:24:00<SeP>2025-03-04 11:49:12<SeP>2025-03-04 12:14:24<SeP>2025-03-04 12:39:36<SeP>2025-03-04 13:04:48<SeP>2025-03-04 13:30:00<SeP>2025-03-04 13:55:12<SeP>2025-03-04 14:20:24<SeP>2025-03-04 14:45:36<SeP>2025-03-04 15:10:48<SeP>2025-03-04 15:36:00<SeP>2025-03-04 16:01:12<SeP>2025-03-04 16:26:24<SeP>2025-03-04 16:51:36<SeP>2025-03-04 17:16:48<SeP>2025-03-04 17:42:00<SeP>2025-03-04 18:07:12<SeP>2025-03-04 18:32:24<SeP>2025-03-04 18:57:36<SeP>2025-03-04 19:22:48<SeP>2025-03-04 19:48:00<SeP>2025-03-04 20:13:12<SeP>2025-03-04 20:38:24<SeP>2025-03-04 21:03:36<SeP>2025-03-04 21:28:48<SeP>2025-03-04 21:54:00<SeP>2025-03-04 22:19:12<SeP>2025-03-04 22:44:24<SeP>2025-03-04 23:09:36<SeP>2025-03-04 23:34:48";
  const item1Label       = "Scans";
  const item1Data        = "25<SeP>24<SeP>22<SeP>17<SeP>87<SeP>8<SeP>9<SeP>15<SeP>11<SeP>13<SeP>18<SeP>13<SeP>26<SeP>22<SeP>14<SeP>65<SeP>32<SeP>14<SeP>40<SeP>8<SeP>16<SeP>8<SeP>9<SeP>12<SeP>13<SeP>7<SeP>36<SeP>8<SeP>3<SeP>21<SeP>16<SeP>81<SeP>11<SeP>70<SeP>8<SeP>25<SeP>36<SeP>16<SeP>11<SeP>10<SeP>9<SeP>47<SeP>101<SeP>26<SeP>19<SeP>15<SeP>25<SeP>10<SeP>11<SeP>33<SeP>26<SeP>26<SeP>57<SeP>25<SeP>7<SeP>10<SeP>12<SeP>14<SeP>10<SeP>10<SeP>25<SeP>24<SeP>11<SeP>10<SeP>12<SeP>25<SeP>32<SeP>20<SeP>16<SeP>9<SeP>22<SeP>23<SeP>31<SeP>9<SeP>13<SeP>17<SeP>8<SeP>7<SeP>36<SeP>34<SeP>9<SeP>10<SeP>4<SeP>12<SeP>6<SeP>17<SeP>19<SeP>17<SeP>23<SeP>8<SeP>14<SeP>32<SeP>10<SeP>7<SeP>9<SeP>6<SeP>36<SeP>5<SeP>8<SeP>24<SeP>15<SeP>7<SeP>5<SeP>22<SeP>2<SeP>34<SeP>50<SeP>15<SeP>9<SeP>12<SeP>32<SeP>15<SeP>29<SeP>14<SeP>38<SeP>15<SeP>19<SeP>38<SeP>25<SeP>21<SeP>5<SeP>13<SeP>18<SeP>14<SeP>27<SeP>9<SeP>28<SeP>31<SeP>7<SeP>17<SeP>18<SeP>8<SeP>11<SeP>7<SeP>16<SeP>7<SeP>15<SeP>10<SeP>14<SeP>11<SeP>42<SeP>17<SeP>21<SeP>12<SeP>9<SeP>6<SeP>16<SeP>10<SeP>14<SeP>12<SeP>10<SeP>14<SeP>13<SeP>13<SeP>13<SeP>10<SeP>13<SeP>16<SeP>14<SeP>33<SeP>7<SeP>13<SeP>40<SeP>19<SeP>13<SeP>8<SeP>33<SeP>9<SeP>11<SeP>36<SeP>11<SeP>24<SeP>35<SeP>11<SeP>15<SeP>11<SeP>8<SeP>33<SeP>24<SeP>8<SeP>6<SeP>7<SeP>8<SeP>23<SeP>6<SeP>6<SeP>6<SeP>12<SeP>4<SeP>5<SeP>19<SeP>113<SeP>75<SeP>21<SeP>16<SeP>13<SeP>11<SeP>33<SeP>23<SeP>11<SeP>13<SeP>7<SeP>8<SeP>9<SeP>16<SeP>32<SeP>16<SeP>14<SeP>7<SeP>24<SeP>13<SeP>15<SeP>21<SeP>13<SeP>8<SeP>61<SeP>24<SeP>19<SeP>11<SeP>12<SeP>13<SeP>5<SeP>11<SeP>12<SeP>11<SeP>9<SeP>6<SeP>11<SeP>13<SeP>10<SeP>19<SeP>21<SeP>63<SeP>66<SeP>6<SeP>31<SeP>27<SeP>40<SeP>5<SeP>9<SeP>26<SeP>2<SeP>4<SeP>32<SeP>6<SeP>4<SeP>6<SeP>6<SeP>18<SeP>13<SeP>15<SeP>23<SeP>34<SeP>18<SeP>11<SeP>10<SeP>11<SeP>15<SeP>11<SeP>13<SeP>7<SeP>6<SeP>8<SeP>12<SeP>8<SeP>24<SeP>21<SeP>7<SeP>9<SeP>8<SeP>55<SeP>36<SeP>45<SeP>24<SeP>8<SeP>27<SeP>12<SeP>15<SeP>16<SeP>20<SeP>12<SeP>9<SeP>13<SeP>23<SeP>11<SeP>24<SeP>57<SeP>18<SeP>11<SeP>18<SeP>11<SeP>21<SeP>7<SeP>9<SeP>4<SeP>29<SeP>24<SeP>3<SeP>7<SeP>13<SeP>2<SeP>4<SeP>4<SeP>6<SeP>9<SeP>16<SeP>8<SeP>6<SeP>10<SeP>20<SeP>7<SeP>13<SeP>5<SeP>6<SeP>5<SeP>7<SeP>9<SeP>16<SeP>16<SeP>44<SeP>15<SeP>26<SeP>10<SeP>7<SeP>18<SeP>29<SeP>15<SeP>11<SeP>9<SeP>14<SeP>20<SeP>14<SeP>11<SeP>13<SeP>18<SeP>13<SeP>26<SeP>25<SeP>12<SeP>21<SeP>15<SeP>16<SeP>215<SeP>13<SeP>8<SeP>10<SeP>17<SeP>13<SeP>9<SeP>6<SeP>5<SeP>4<SeP>8<SeP>12<SeP>18<SeP>22<SeP>14<SeP>12<SeP>11<SeP>11<SeP>22<SeP>15<SeP>45<SeP>34<SeP>25<SeP>17<SeP>30<SeP>28<SeP>58<SeP>12<SeP>26<SeP>8<SeP>11<SeP>19<SeP>7<SeP>14<SeP>10<SeP>13<SeP>13<SeP>13<SeP>34<SeP>14<SeP>6<SeP>9<SeP>6<SeP>8<SeP>122<SeP>33<SeP>35<SeP>9<SeP>6<SeP>13<SeP>10<SeP>11<SeP>56<SeP>15<SeP>14<SeP>28<SeP>11<SeP>9";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "65<SeP>56<SeP>23<SeP>21<SeP>20<SeP>3<SeP>10<SeP>2<SeP>4<SeP>2<SeP>44<SeP>43<SeP>85<SeP>106<SeP>19<SeP>94<SeP>18<SeP>31<SeP>11<SeP>8<SeP>10<SeP>6<SeP>17<SeP>76<SeP>56<SeP>23<SeP>72<SeP>30<SeP>4<SeP>10<SeP>7<SeP>20<SeP>46<SeP>4<SeP>17<SeP>18<SeP>17<SeP>18<SeP>12<SeP>9<SeP>25<SeP>15<SeP>15<SeP>21<SeP>13<SeP>6<SeP>8<SeP>19<SeP>95<SeP>79<SeP>91<SeP>68<SeP>59<SeP>99<SeP>23<SeP>6<SeP>4<SeP>307<SeP>7<SeP>11<SeP>4<SeP>13<SeP>18<SeP>8<SeP>10<SeP>28<SeP>157<SeP>74<SeP>9<SeP>12<SeP>61<SeP>59<SeP>286<SeP>37<SeP>82<SeP>73<SeP>20<SeP>27<SeP>13<SeP>27<SeP>46<SeP>56<SeP>23<SeP>22<SeP>19<SeP>26<SeP>56<SeP>44<SeP>32<SeP>55<SeP>27<SeP>12<SeP>105<SeP>68<SeP>68<SeP>66<SeP>19<SeP>6<SeP>9<SeP>5<SeP>5<SeP>10<SeP>10<SeP>9<SeP>10<SeP>7<SeP>16<SeP>14<SeP>62<SeP>50<SeP>15<SeP>8<SeP>20<SeP>61<SeP>22<SeP>43<SeP>66<SeP>60<SeP>80<SeP>22<SeP>22<SeP>20<SeP>20<SeP>29<SeP>29<SeP>42<SeP>45<SeP>72<SeP>35<SeP>96<SeP>131<SeP>9<SeP>2<SeP>7<SeP>7<SeP>7<SeP>71<SeP>115<SeP>21<SeP>162<SeP>94<SeP>9<SeP>21<SeP>37<SeP>7<SeP>14<SeP>55<SeP>278<SeP>6<SeP>9<SeP>19<SeP>23<SeP>9<SeP>10<SeP>14<SeP>15<SeP>21<SeP>18<SeP>14<SeP>5<SeP>8<SeP>11<SeP>20<SeP>4<SeP>5<SeP>17<SeP>8<SeP>12<SeP>19<SeP>53<SeP>53<SeP>16<SeP>8<SeP>7<SeP>8<SeP>5<SeP>4<SeP>13<SeP>3<SeP>5<SeP>2<SeP>1<SeP>17<SeP>44<SeP>20<SeP>4<SeP>5<SeP>12<SeP>17<SeP>24<SeP>40<SeP>13<SeP>7<SeP>4<SeP>3<SeP>25<SeP>39<SeP>21<SeP>1<SeP>4<SeP>3<SeP>7<SeP>29<SeP>28<SeP>8<SeP>64<SeP>86<SeP>38<SeP>3<SeP>21<SeP>34<SeP>36<SeP>25<SeP>31<SeP>17<SeP>14<SeP>24<SeP>16<SeP>3<SeP>3<SeP>3<SeP>20<SeP>101<SeP>74<SeP>48<SeP>23<SeP>1<SeP>4<SeP>35<SeP>35<SeP>53<SeP>130<SeP>162<SeP>168<SeP>15<SeP>7<SeP>8<SeP>7<SeP>11<SeP>55<SeP>43<SeP>4<SeP>9<SeP>6<SeP>2<SeP>1<SeP>4<SeP>301<SeP>5<SeP>2<SeP>2<SeP>1<SeP>10<SeP>5<SeP>9<SeP>4<SeP>3<SeP>3<SeP>8<SeP>5<SeP>32<SeP>36<SeP>69<SeP>66<SeP>52<SeP>13<SeP>5<SeP>6<SeP>7<SeP>6<SeP>5<SeP>63<SeP>7<SeP>6<SeP>5<SeP>23<SeP>5<SeP>7<SeP>62<SeP>75<SeP>39<SeP>16<SeP>11<SeP>12<SeP>9<SeP>27<SeP>40<SeP>34<SeP>14<SeP>6<SeP>7<SeP>33<SeP>107<SeP>141<SeP>26<SeP>7<SeP>30<SeP>29<SeP>7<SeP>12<SeP>6<SeP>6<SeP>7<SeP>26<SeP>34<SeP>19<SeP>9<SeP>17<SeP>10<SeP>11<SeP>9<SeP>9<SeP>13<SeP>4<SeP>10<SeP>8<SeP>8<SeP>35<SeP>223<SeP>138<SeP>6<SeP>13<SeP>76<SeP>30<SeP>10<SeP>11<SeP>9<SeP>13<SeP>24<SeP>34<SeP>15<SeP>13<SeP>17<SeP>6<SeP>6<SeP>8<SeP>37<SeP>33<SeP>36<SeP>32<SeP>96<SeP>62<SeP>16<SeP>11<SeP>10<SeP>13<SeP>6<SeP>7<SeP>8<SeP>31<SeP>93<SeP>77<SeP>255<SeP>6<SeP>6<SeP>7<SeP>5<SeP>9<SeP>5<SeP>6<SeP>6<SeP>14<SeP>2<SeP>2<SeP>3<SeP>6<SeP>4<SeP>63<SeP>87<SeP>53<SeP>50<SeP>32<SeP>26<SeP>20<SeP>5<SeP>7<SeP>5<SeP>7<SeP>4<SeP>29<SeP>18<SeP>40<SeP>9<SeP>1<SeP>5<SeP>11<SeP>12<SeP>37<SeP>22<SeP>33<SeP>4<SeP>2<SeP>3<SeP>2<SeP>18<SeP>38<SeP>28<SeP>6<SeP>246<SeP>8";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-26 00:00:00<SeP>2025-02-26 00:25:12<SeP>2025-02-26 00:50:24<SeP>2025-02-26 01:15:36<SeP>2025-02-26 01:40:48<SeP>2025-02-26 02:06:00<SeP>2025-02-26 02:31:12<SeP>2025-02-26 02:56:24<SeP>2025-02-26 03:21:36<SeP>2025-02-26 03:46:48<SeP>2025-02-26 04:12:00<SeP>2025-02-26 04:37:12<SeP>2025-02-26 05:02:24<SeP>2025-02-26 05:27:36<SeP>2025-02-26 05:52:48<SeP>2025-02-26 06:18:00<SeP>2025-02-26 06:43:12<SeP>2025-02-26 07:08:24<SeP>2025-02-26 07:33:36<SeP>2025-02-26 07:58:48<SeP>2025-02-26 08:24:00<SeP>2025-02-26 08:49:12<SeP>2025-02-26 09:14:24<SeP>2025-02-26 09:39:36<SeP>2025-02-26 10:04:48<SeP>2025-02-26 10:30:00<SeP>2025-02-26 10:55:12<SeP>2025-02-26 11:20:24<SeP>2025-02-26 11:45:36<SeP>2025-02-26 12:10:48<SeP>2025-02-26 12:36:00<SeP>2025-02-26 13:01:12<SeP>2025-02-26 13:26:24<SeP>2025-02-26 13:51:36<SeP>2025-02-26 14:16:48<SeP>2025-02-26 14:42:00<SeP>2025-02-26 15:07:12<SeP>2025-02-26 15:32:24<SeP>2025-02-26 15:57:36<SeP>2025-02-26 16:22:48<SeP>2025-02-26 16:48:00<SeP>2025-02-26 17:13:12<SeP>2025-02-26 17:38:24<SeP>2025-02-26 18:03:36<SeP>2025-02-26 18:28:48<SeP>2025-02-26 18:54:00<SeP>2025-02-26 19:19:12<SeP>2025-02-26 19:44:24<SeP>2025-02-26 20:09:36<SeP>2025-02-26 20:34:48<SeP>2025-02-26 21:00:00<SeP>2025-02-26 21:25:12<SeP>2025-02-26 21:50:24<SeP>2025-02-26 22:15:36<SeP>2025-02-26 22:40:48<SeP>2025-02-26 23:06:00<SeP>2025-02-26 23:31:12<SeP>2025-02-26 23:56:24<SeP>2025-02-27 00:21:36<SeP>2025-02-27 00:46:48<SeP>2025-02-27 01:12:00<SeP>2025-02-27 01:37:12<SeP>2025-02-27 02:02:24<SeP>2025-02-27 02:27:36<SeP>2025-02-27 02:52:48<SeP>2025-02-27 03:18:00<SeP>2025-02-27 03:43:12<SeP>2025-02-27 04:08:24<SeP>2025-02-27 04:33:36<SeP>2025-02-27 04:58:48<SeP>2025-02-27 05:24:00<SeP>2025-02-27 05:49:12<SeP>2025-02-27 06:14:24<SeP>2025-02-27 06:39:36<SeP>2025-02-27 07:04:48<SeP>2025-02-27 07:30:00<SeP>2025-02-27 07:55:12<SeP>2025-02-27 08:20:24<SeP>2025-02-27 08:45:36<SeP>2025-02-27 09:10:48<SeP>2025-02-27 09:36:00<SeP>2025-02-27 10:01:12<SeP>2025-02-27 10:26:24<SeP>2025-02-27 10:51:36<SeP>2025-02-27 11:16:48<SeP>2025-02-27 11:42:00<SeP>2025-02-27 12:07:12<SeP>2025-02-27 12:32:24<SeP>2025-02-27 12:57:36<SeP>2025-02-27 13:22:48<SeP>2025-02-27 13:48:00<SeP>2025-02-27 14:13:12<SeP>2025-02-27 14:38:24<SeP>2025-02-27 15:03:36<SeP>2025-02-27 15:28:48<SeP>2025-02-27 15:54:00<SeP>2025-02-27 16:19:12<SeP>2025-02-27 16:44:24<SeP>2025-02-27 17:09:36<SeP>2025-02-27 17:34:48<SeP>2025-02-27 18:00:00<SeP>2025-02-27 18:25:12<SeP>2025-02-27 18:50:24<SeP>2025-02-27 19:15:36<SeP>2025-02-27 19:40:48<SeP>2025-02-27 20:06:00<SeP>2025-02-27 20:31:12<SeP>2025-02-27 20:56:24<SeP>2025-02-27 21:21:36<SeP>2025-02-27 21:46:48<SeP>2025-02-27 22:12:00<SeP>2025-02-27 22:37:12<SeP>2025-02-27 23:02:24<SeP>2025-02-27 23:27:36<SeP>2025-02-27 23:52:48<SeP>2025-02-28 00:18:00<SeP>2025-02-28 00:43:12<SeP>2025-02-28 01:08:24<SeP>2025-02-28 01:33:36<SeP>2025-02-28 01:58:48<SeP>2025-02-28 02:24:00<SeP>2025-02-28 02:49:12<SeP>2025-02-28 03:14:24<SeP>2025-02-28 03:39:36<SeP>2025-02-28 04:04:48<SeP>2025-02-28 04:30:00<SeP>2025-02-28 04:55:12<SeP>2025-02-28 05:20:24<SeP>2025-02-28 05:45:36<SeP>2025-02-28 06:10:48<SeP>2025-02-28 06:36:00<SeP>2025-02-28 07:01:12<SeP>2025-02-28 07:26:24<SeP>2025-02-28 07:51:36<SeP>2025-02-28 08:16:48<SeP>2025-02-28 08:42:00<SeP>2025-02-28 09:07:12<SeP>2025-02-28 09:32:24<SeP>2025-02-28 09:57:36<SeP>2025-02-28 10:22:48<SeP>2025-02-28 10:48:00<SeP>2025-02-28 11:13:12<SeP>2025-02-28 11:38:24<SeP>2025-02-28 12:03:36<SeP>2025-02-28 12:28:48<SeP>2025-02-28 12:54:00<SeP>2025-02-28 13:19:12<SeP>2025-02-28 13:44:24<SeP>2025-02-28 14:09:36<SeP>2025-02-28 14:34:48<SeP>2025-02-28 15:00:00<SeP>2025-02-28 15:25:12<SeP>2025-02-28 15:50:24<SeP>2025-02-28 16:15:36<SeP>2025-02-28 16:40:48<SeP>2025-02-28 17:06:00<SeP>2025-02-28 17:31:12<SeP>2025-02-28 17:56:24<SeP>2025-02-28 18:21:36<SeP>2025-02-28 18:46:48<SeP>2025-02-28 19:12:00<SeP>2025-02-28 19:37:12<SeP>2025-02-28 20:02:24<SeP>2025-02-28 20:27:36<SeP>2025-02-28 20:52:48<SeP>2025-02-28 21:18:00<SeP>2025-02-28 21:43:12<SeP>2025-02-28 22:08:24<SeP>2025-02-28 22:33:36<SeP>2025-02-28 22:58:48<SeP>2025-02-28 23:24:00<SeP>2025-02-28 23:49:12<SeP>2025-03-01 00:14:24<SeP>2025-03-01 00:39:36<SeP>2025-03-01 01:04:48<SeP>2025-03-01 01:30:00<SeP>2025-03-01 01:55:12<SeP>2025-03-01 02:20:24<SeP>2025-03-01 02:45:36<SeP>2025-03-01 03:10:48<SeP>2025-03-01 03:36:00<SeP>2025-03-01 04:01:12<SeP>2025-03-01 04:26:24<SeP>2025-03-01 04:51:36<SeP>2025-03-01 05:16:48<SeP>2025-03-01 05:42:00<SeP>2025-03-01 06:07:12<SeP>2025-03-01 06:32:24<SeP>2025-03-01 06:57:36<SeP>2025-03-01 07:22:48<SeP>2025-03-01 07:48:00<SeP>2025-03-01 08:13:12<SeP>2025-03-01 08:38:24<SeP>2025-03-01 09:03:36<SeP>2025-03-01 09:28:48<SeP>2025-03-01 09:54:00<SeP>2025-03-01 10:19:12<SeP>2025-03-01 10:44:24<SeP>2025-03-01 11:09:36<SeP>2025-03-01 11:34:48<SeP>2025-03-01 12:00:00<SeP>2025-03-01 12:25:12<SeP>2025-03-01 12:50:24<SeP>2025-03-01 13:15:36<SeP>2025-03-01 13:40:48<SeP>2025-03-01 14:06:00<SeP>2025-03-01 14:31:12<SeP>2025-03-01 14:56:24<SeP>2025-03-01 15:21:36<SeP>2025-03-01 15:46:48<SeP>2025-03-01 16:12:00<SeP>2025-03-01 16:37:12<SeP>2025-03-01 17:02:24<SeP>2025-03-01 17:27:36<SeP>2025-03-01 17:52:48<SeP>2025-03-01 18:18:00<SeP>2025-03-01 18:43:12<SeP>2025-03-01 19:08:24<SeP>2025-03-01 19:33:36<SeP>2025-03-01 19:58:48<SeP>2025-03-01 20:24:00<SeP>2025-03-01 20:49:12<SeP>2025-03-01 21:14:24<SeP>2025-03-01 21:39:36<SeP>2025-03-01 22:04:48<SeP>2025-03-01 22:30:00<SeP>2025-03-01 22:55:12<SeP>2025-03-01 23:20:24<SeP>2025-03-01 23:45:36<SeP>2025-03-02 00:10:48<SeP>2025-03-02 00:36:00<SeP>2025-03-02 01:01:12<SeP>2025-03-02 01:26:24<SeP>2025-03-02 01:51:36<SeP>2025-03-02 02:16:48<SeP>2025-03-02 02:42:00<SeP>2025-03-02 03:07:12<SeP>2025-03-02 03:32:24<SeP>2025-03-02 03:57:36<SeP>2025-03-02 04:22:48<SeP>2025-03-02 04:48:00<SeP>2025-03-02 05:13:12<SeP>2025-03-02 05:38:24<SeP>2025-03-02 06:03:36<SeP>2025-03-02 06:28:48<SeP>2025-03-02 06:54:00<SeP>2025-03-02 07:19:12<SeP>2025-03-02 07:44:24<SeP>2025-03-02 08:09:36<SeP>2025-03-02 08:34:48<SeP>2025-03-02 09:00:00<SeP>2025-03-02 09:25:12<SeP>2025-03-02 09:50:24<SeP>2025-03-02 10:15:36<SeP>2025-03-02 10:40:48<SeP>2025-03-02 11:06:00<SeP>2025-03-02 11:31:12<SeP>2025-03-02 11:56:24<SeP>2025-03-02 12:21:36<SeP>2025-03-02 12:46:48<SeP>2025-03-02 13:12:00<SeP>2025-03-02 13:37:12<SeP>2025-03-02 14:02:24<SeP>2025-03-02 14:27:36<SeP>2025-03-02 14:52:48<SeP>2025-03-02 15:18:00<SeP>2025-03-02 15:43:12<SeP>2025-03-02 16:08:24<SeP>2025-03-02 16:33:36<SeP>2025-03-02 16:58:48<SeP>2025-03-02 17:24:00<SeP>2025-03-02 17:49:12<SeP>2025-03-02 18:14:24<SeP>2025-03-02 18:39:36<SeP>2025-03-02 19:04:48<SeP>2025-03-02 19:30:00<SeP>2025-03-02 19:55:12<SeP>2025-03-02 20:20:24<SeP>2025-03-02 20:45:36<SeP>2025-03-02 21:10:48<SeP>2025-03-02 21:36:00<SeP>2025-03-02 22:01:12<SeP>2025-03-02 22:26:24<SeP>2025-03-02 22:51:36<SeP>2025-03-02 23:16:48<SeP>2025-03-02 23:42:00<SeP>2025-03-03 00:07:12<SeP>2025-03-03 00:32:24<SeP>2025-03-03 00:57:36<SeP>2025-03-03 01:22:48<SeP>2025-03-03 01:48:00<SeP>2025-03-03 02:13:12<SeP>2025-03-03 02:38:24<SeP>2025-03-03 03:03:36<SeP>2025-03-03 03:28:48<SeP>2025-03-03 03:54:00<SeP>2025-03-03 04:19:12<SeP>2025-03-03 04:44:24<SeP>2025-03-03 05:09:36<SeP>2025-03-03 05:34:48<SeP>2025-03-03 06:00:00<SeP>2025-03-03 06:25:12<SeP>2025-03-03 06:50:24<SeP>2025-03-03 07:15:36<SeP>2025-03-03 07:40:48<SeP>2025-03-03 08:06:00<SeP>2025-03-03 08:31:12<SeP>2025-03-03 08:56:24<SeP>2025-03-03 09:21:36<SeP>2025-03-03 09:46:48<SeP>2025-03-03 10:12:00<SeP>2025-03-03 10:37:12<SeP>2025-03-03 11:02:24<SeP>2025-03-03 11:27:36<SeP>2025-03-03 11:52:48<SeP>2025-03-03 12:18:00<SeP>2025-03-03 12:43:12<SeP>2025-03-03 13:08:24<SeP>2025-03-03 13:33:36<SeP>2025-03-03 13:58:48<SeP>2025-03-03 14:24:00<SeP>2025-03-03 14:49:12<SeP>2025-03-03 15:14:24<SeP>2025-03-03 15:39:36<SeP>2025-03-03 16:04:48<SeP>2025-03-03 16:30:00<SeP>2025-03-03 16:55:12<SeP>2025-03-03 17:20:24<SeP>2025-03-03 17:45:36<SeP>2025-03-03 18:10:48<SeP>2025-03-03 18:36:00<SeP>2025-03-03 19:01:12<SeP>2025-03-03 19:26:24<SeP>2025-03-03 19:51:36<SeP>2025-03-03 20:16:48<SeP>2025-03-03 20:42:00<SeP>2025-03-03 21:07:12<SeP>2025-03-03 21:32:24<SeP>2025-03-03 21:57:36<SeP>2025-03-03 22:22:48<SeP>2025-03-03 22:48:00<SeP>2025-03-03 23:13:12<SeP>2025-03-03 23:38:24<SeP>2025-03-04 00:03:36<SeP>2025-03-04 00:28:48<SeP>2025-03-04 00:54:00<SeP>2025-03-04 01:19:12<SeP>2025-03-04 01:44:24<SeP>2025-03-04 02:09:36<SeP>2025-03-04 02:34:48<SeP>2025-03-04 03:00:00<SeP>2025-03-04 03:25:12<SeP>2025-03-04 03:50:24<SeP>2025-03-04 04:15:36<SeP>2025-03-04 04:40:48<SeP>2025-03-04 05:06:00<SeP>2025-03-04 05:31:12<SeP>2025-03-04 05:56:24<SeP>2025-03-04 06:21:36<SeP>2025-03-04 06:46:48<SeP>2025-03-04 07:12:00<SeP>2025-03-04 07:37:12<SeP>2025-03-04 08:02:24<SeP>2025-03-04 08:27:36<SeP>2025-03-04 08:52:48<SeP>2025-03-04 09:18:00<SeP>2025-03-04 09:43:12<SeP>2025-03-04 10:08:24<SeP>2025-03-04 10:33:36<SeP>2025-03-04 10:58:48<SeP>2025-03-04 11:24:00<SeP>2025-03-04 11:49:12<SeP>2025-03-04 12:14:24<SeP>2025-03-04 12:39:36<SeP>2025-03-04 13:04:48<SeP>2025-03-04 13:30:00<SeP>2025-03-04 13:55:12<SeP>2025-03-04 14:20:24<SeP>2025-03-04 14:45:36<SeP>2025-03-04 15:10:48<SeP>2025-03-04 15:36:00<SeP>2025-03-04 16:01:12<SeP>2025-03-04 16:26:24<SeP>2025-03-04 16:51:36<SeP>2025-03-04 17:16:48<SeP>2025-03-04 17:42:00<SeP>2025-03-04 18:07:12<SeP>2025-03-04 18:32:24<SeP>2025-03-04 18:57:36<SeP>2025-03-04 19:22:48<SeP>2025-03-04 19:48:00<SeP>2025-03-04 20:13:12<SeP>2025-03-04 20:38:24<SeP>2025-03-04 21:03:36<SeP>2025-03-04 21:28:48<SeP>2025-03-04 21:54:00<SeP>2025-03-04 22:19:12<SeP>2025-03-04 22:44:24<SeP>2025-03-04 23:09:36<SeP>2025-03-04 23:34:48";
  const itemLabel       = "Scans";
  const itemData        = "25<SeP>24<SeP>22<SeP>17<SeP>87<SeP>8<SeP>9<SeP>15<SeP>11<SeP>13<SeP>18<SeP>13<SeP>26<SeP>22<SeP>14<SeP>65<SeP>32<SeP>14<SeP>40<SeP>8<SeP>16<SeP>8<SeP>9<SeP>12<SeP>13<SeP>7<SeP>36<SeP>8<SeP>3<SeP>21<SeP>16<SeP>81<SeP>11<SeP>70<SeP>8<SeP>25<SeP>36<SeP>16<SeP>11<SeP>10<SeP>9<SeP>47<SeP>101<SeP>26<SeP>19<SeP>15<SeP>25<SeP>10<SeP>11<SeP>33<SeP>26<SeP>26<SeP>57<SeP>25<SeP>7<SeP>10<SeP>12<SeP>14<SeP>10<SeP>10<SeP>25<SeP>24<SeP>11<SeP>10<SeP>12<SeP>25<SeP>32<SeP>20<SeP>16<SeP>9<SeP>22<SeP>23<SeP>31<SeP>9<SeP>13<SeP>17<SeP>8<SeP>7<SeP>36<SeP>34<SeP>9<SeP>10<SeP>4<SeP>12<SeP>6<SeP>17<SeP>19<SeP>17<SeP>23<SeP>8<SeP>14<SeP>32<SeP>10<SeP>7<SeP>9<SeP>6<SeP>36<SeP>5<SeP>8<SeP>24<SeP>15<SeP>7<SeP>5<SeP>22<SeP>2<SeP>34<SeP>50<SeP>15<SeP>9<SeP>12<SeP>32<SeP>15<SeP>29<SeP>14<SeP>38<SeP>15<SeP>19<SeP>38<SeP>25<SeP>21<SeP>5<SeP>13<SeP>18<SeP>14<SeP>27<SeP>9<SeP>28<SeP>31<SeP>7<SeP>17<SeP>18<SeP>8<SeP>11<SeP>7<SeP>16<SeP>7<SeP>15<SeP>10<SeP>14<SeP>11<SeP>42<SeP>17<SeP>21<SeP>12<SeP>9<SeP>6<SeP>16<SeP>10<SeP>14<SeP>12<SeP>10<SeP>14<SeP>13<SeP>13<SeP>13<SeP>10<SeP>13<SeP>16<SeP>14<SeP>33<SeP>7<SeP>13<SeP>40<SeP>19<SeP>13<SeP>8<SeP>33<SeP>9<SeP>11<SeP>36<SeP>11<SeP>24<SeP>35<SeP>11<SeP>15<SeP>11<SeP>8<SeP>33<SeP>24<SeP>8<SeP>6<SeP>7<SeP>8<SeP>23<SeP>6<SeP>6<SeP>6<SeP>12<SeP>4<SeP>5<SeP>19<SeP>113<SeP>75<SeP>21<SeP>16<SeP>13<SeP>11<SeP>33<SeP>23<SeP>11<SeP>13<SeP>7<SeP>8<SeP>9<SeP>16<SeP>32<SeP>16<SeP>14<SeP>7<SeP>24<SeP>13<SeP>15<SeP>21<SeP>13<SeP>8<SeP>61<SeP>24<SeP>19<SeP>11<SeP>12<SeP>13<SeP>5<SeP>11<SeP>12<SeP>11<SeP>9<SeP>6<SeP>11<SeP>13<SeP>10<SeP>19<SeP>21<SeP>63<SeP>66<SeP>6<SeP>31<SeP>27<SeP>40<SeP>5<SeP>9<SeP>26<SeP>2<SeP>4<SeP>32<SeP>6<SeP>4<SeP>6<SeP>6<SeP>18<SeP>13<SeP>15<SeP>23<SeP>34<SeP>18<SeP>11<SeP>10<SeP>11<SeP>15<SeP>11<SeP>13<SeP>7<SeP>6<SeP>8<SeP>12<SeP>8<SeP>24<SeP>21<SeP>7<SeP>9<SeP>8<SeP>55<SeP>36<SeP>45<SeP>24<SeP>8<SeP>27<SeP>12<SeP>15<SeP>16<SeP>20<SeP>12<SeP>9<SeP>13<SeP>23<SeP>11<SeP>24<SeP>57<SeP>18<SeP>11<SeP>18<SeP>11<SeP>21<SeP>7<SeP>9<SeP>4<SeP>29<SeP>24<SeP>3<SeP>7<SeP>13<SeP>2<SeP>4<SeP>4<SeP>6<SeP>9<SeP>16<SeP>8<SeP>6<SeP>10<SeP>20<SeP>7<SeP>13<SeP>5<SeP>6<SeP>5<SeP>7<SeP>9<SeP>16<SeP>16<SeP>44<SeP>15<SeP>26<SeP>10<SeP>7<SeP>18<SeP>29<SeP>15<SeP>11<SeP>9<SeP>14<SeP>20<SeP>14<SeP>11<SeP>13<SeP>18<SeP>13<SeP>26<SeP>25<SeP>12<SeP>21<SeP>15<SeP>16<SeP>215<SeP>13<SeP>8<SeP>10<SeP>17<SeP>13<SeP>9<SeP>6<SeP>5<SeP>4<SeP>8<SeP>12<SeP>18<SeP>22<SeP>14<SeP>12<SeP>11<SeP>11<SeP>22<SeP>15<SeP>45<SeP>34<SeP>25<SeP>17<SeP>30<SeP>28<SeP>58<SeP>12<SeP>26<SeP>8<SeP>11<SeP>19<SeP>7<SeP>14<SeP>10<SeP>13<SeP>13<SeP>13<SeP>34<SeP>14<SeP>6<SeP>9<SeP>6<SeP>8<SeP>122<SeP>33<SeP>35<SeP>9<SeP>6<SeP>13<SeP>10<SeP>11<SeP>56<SeP>15<SeP>14<SeP>28<SeP>11<SeP>9";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-26 00:00:00<SeP>2025-02-26 00:25:12<SeP>2025-02-26 00:50:24<SeP>2025-02-26 01:15:36<SeP>2025-02-26 01:40:48<SeP>2025-02-26 02:06:00<SeP>2025-02-26 02:31:12<SeP>2025-02-26 02:56:24<SeP>2025-02-26 03:21:36<SeP>2025-02-26 03:46:48<SeP>2025-02-26 04:12:00<SeP>2025-02-26 04:37:12<SeP>2025-02-26 05:02:24<SeP>2025-02-26 05:27:36<SeP>2025-02-26 05:52:48<SeP>2025-02-26 06:18:00<SeP>2025-02-26 06:43:12<SeP>2025-02-26 07:08:24<SeP>2025-02-26 07:33:36<SeP>2025-02-26 07:58:48<SeP>2025-02-26 08:24:00<SeP>2025-02-26 08:49:12<SeP>2025-02-26 09:14:24<SeP>2025-02-26 09:39:36<SeP>2025-02-26 10:04:48<SeP>2025-02-26 10:30:00<SeP>2025-02-26 10:55:12<SeP>2025-02-26 11:20:24<SeP>2025-02-26 11:45:36<SeP>2025-02-26 12:10:48<SeP>2025-02-26 12:36:00<SeP>2025-02-26 13:01:12<SeP>2025-02-26 13:26:24<SeP>2025-02-26 13:51:36<SeP>2025-02-26 14:16:48<SeP>2025-02-26 14:42:00<SeP>2025-02-26 15:07:12<SeP>2025-02-26 15:32:24<SeP>2025-02-26 15:57:36<SeP>2025-02-26 16:22:48<SeP>2025-02-26 16:48:00<SeP>2025-02-26 17:13:12<SeP>2025-02-26 17:38:24<SeP>2025-02-26 18:03:36<SeP>2025-02-26 18:28:48<SeP>2025-02-26 18:54:00<SeP>2025-02-26 19:19:12<SeP>2025-02-26 19:44:24<SeP>2025-02-26 20:09:36<SeP>2025-02-26 20:34:48<SeP>2025-02-26 21:00:00<SeP>2025-02-26 21:25:12<SeP>2025-02-26 21:50:24<SeP>2025-02-26 22:15:36<SeP>2025-02-26 22:40:48<SeP>2025-02-26 23:06:00<SeP>2025-02-26 23:31:12<SeP>2025-02-26 23:56:24<SeP>2025-02-27 00:21:36<SeP>2025-02-27 00:46:48<SeP>2025-02-27 01:12:00<SeP>2025-02-27 01:37:12<SeP>2025-02-27 02:02:24<SeP>2025-02-27 02:27:36<SeP>2025-02-27 02:52:48<SeP>2025-02-27 03:18:00<SeP>2025-02-27 03:43:12<SeP>2025-02-27 04:08:24<SeP>2025-02-27 04:33:36<SeP>2025-02-27 04:58:48<SeP>2025-02-27 05:24:00<SeP>2025-02-27 05:49:12<SeP>2025-02-27 06:14:24<SeP>2025-02-27 06:39:36<SeP>2025-02-27 07:04:48<SeP>2025-02-27 07:30:00<SeP>2025-02-27 07:55:12<SeP>2025-02-27 08:20:24<SeP>2025-02-27 08:45:36<SeP>2025-02-27 09:10:48<SeP>2025-02-27 09:36:00<SeP>2025-02-27 10:01:12<SeP>2025-02-27 10:26:24<SeP>2025-02-27 10:51:36<SeP>2025-02-27 11:16:48<SeP>2025-02-27 11:42:00<SeP>2025-02-27 12:07:12<SeP>2025-02-27 12:32:24<SeP>2025-02-27 12:57:36<SeP>2025-02-27 13:22:48<SeP>2025-02-27 13:48:00<SeP>2025-02-27 14:13:12<SeP>2025-02-27 14:38:24<SeP>2025-02-27 15:03:36<SeP>2025-02-27 15:28:48<SeP>2025-02-27 15:54:00<SeP>2025-02-27 16:19:12<SeP>2025-02-27 16:44:24<SeP>2025-02-27 17:09:36<SeP>2025-02-27 17:34:48<SeP>2025-02-27 18:00:00<SeP>2025-02-27 18:25:12<SeP>2025-02-27 18:50:24<SeP>2025-02-27 19:15:36<SeP>2025-02-27 19:40:48<SeP>2025-02-27 20:06:00<SeP>2025-02-27 20:31:12<SeP>2025-02-27 20:56:24<SeP>2025-02-27 21:21:36<SeP>2025-02-27 21:46:48<SeP>2025-02-27 22:12:00<SeP>2025-02-27 22:37:12<SeP>2025-02-27 23:02:24<SeP>2025-02-27 23:27:36<SeP>2025-02-27 23:52:48<SeP>2025-02-28 00:18:00<SeP>2025-02-28 00:43:12<SeP>2025-02-28 01:08:24<SeP>2025-02-28 01:33:36<SeP>2025-02-28 01:58:48<SeP>2025-02-28 02:24:00<SeP>2025-02-28 02:49:12<SeP>2025-02-28 03:14:24<SeP>2025-02-28 03:39:36<SeP>2025-02-28 04:04:48<SeP>2025-02-28 04:30:00<SeP>2025-02-28 04:55:12<SeP>2025-02-28 05:20:24<SeP>2025-02-28 05:45:36<SeP>2025-02-28 06:10:48<SeP>2025-02-28 06:36:00<SeP>2025-02-28 07:01:12<SeP>2025-02-28 07:26:24<SeP>2025-02-28 07:51:36<SeP>2025-02-28 08:16:48<SeP>2025-02-28 08:42:00<SeP>2025-02-28 09:07:12<SeP>2025-02-28 09:32:24<SeP>2025-02-28 09:57:36<SeP>2025-02-28 10:22:48<SeP>2025-02-28 10:48:00<SeP>2025-02-28 11:13:12<SeP>2025-02-28 11:38:24<SeP>2025-02-28 12:03:36<SeP>2025-02-28 12:28:48<SeP>2025-02-28 12:54:00<SeP>2025-02-28 13:19:12<SeP>2025-02-28 13:44:24<SeP>2025-02-28 14:09:36<SeP>2025-02-28 14:34:48<SeP>2025-02-28 15:00:00<SeP>2025-02-28 15:25:12<SeP>2025-02-28 15:50:24<SeP>2025-02-28 16:15:36<SeP>2025-02-28 16:40:48<SeP>2025-02-28 17:06:00<SeP>2025-02-28 17:31:12<SeP>2025-02-28 17:56:24<SeP>2025-02-28 18:21:36<SeP>2025-02-28 18:46:48<SeP>2025-02-28 19:12:00<SeP>2025-02-28 19:37:12<SeP>2025-02-28 20:02:24<SeP>2025-02-28 20:27:36<SeP>2025-02-28 20:52:48<SeP>2025-02-28 21:18:00<SeP>2025-02-28 21:43:12<SeP>2025-02-28 22:08:24<SeP>2025-02-28 22:33:36<SeP>2025-02-28 22:58:48<SeP>2025-02-28 23:24:00<SeP>2025-02-28 23:49:12<SeP>2025-03-01 00:14:24<SeP>2025-03-01 00:39:36<SeP>2025-03-01 01:04:48<SeP>2025-03-01 01:30:00<SeP>2025-03-01 01:55:12<SeP>2025-03-01 02:20:24<SeP>2025-03-01 02:45:36<SeP>2025-03-01 03:10:48<SeP>2025-03-01 03:36:00<SeP>2025-03-01 04:01:12<SeP>2025-03-01 04:26:24<SeP>2025-03-01 04:51:36<SeP>2025-03-01 05:16:48<SeP>2025-03-01 05:42:00<SeP>2025-03-01 06:07:12<SeP>2025-03-01 06:32:24<SeP>2025-03-01 06:57:36<SeP>2025-03-01 07:22:48<SeP>2025-03-01 07:48:00<SeP>2025-03-01 08:13:12<SeP>2025-03-01 08:38:24<SeP>2025-03-01 09:03:36<SeP>2025-03-01 09:28:48<SeP>2025-03-01 09:54:00<SeP>2025-03-01 10:19:12<SeP>2025-03-01 10:44:24<SeP>2025-03-01 11:09:36<SeP>2025-03-01 11:34:48<SeP>2025-03-01 12:00:00<SeP>2025-03-01 12:25:12<SeP>2025-03-01 12:50:24<SeP>2025-03-01 13:15:36<SeP>2025-03-01 13:40:48<SeP>2025-03-01 14:06:00<SeP>2025-03-01 14:31:12<SeP>2025-03-01 14:56:24<SeP>2025-03-01 15:21:36<SeP>2025-03-01 15:46:48<SeP>2025-03-01 16:12:00<SeP>2025-03-01 16:37:12<SeP>2025-03-01 17:02:24<SeP>2025-03-01 17:27:36<SeP>2025-03-01 17:52:48<SeP>2025-03-01 18:18:00<SeP>2025-03-01 18:43:12<SeP>2025-03-01 19:08:24<SeP>2025-03-01 19:33:36<SeP>2025-03-01 19:58:48<SeP>2025-03-01 20:24:00<SeP>2025-03-01 20:49:12<SeP>2025-03-01 21:14:24<SeP>2025-03-01 21:39:36<SeP>2025-03-01 22:04:48<SeP>2025-03-01 22:30:00<SeP>2025-03-01 22:55:12<SeP>2025-03-01 23:20:24<SeP>2025-03-01 23:45:36<SeP>2025-03-02 00:10:48<SeP>2025-03-02 00:36:00<SeP>2025-03-02 01:01:12<SeP>2025-03-02 01:26:24<SeP>2025-03-02 01:51:36<SeP>2025-03-02 02:16:48<SeP>2025-03-02 02:42:00<SeP>2025-03-02 03:07:12<SeP>2025-03-02 03:32:24<SeP>2025-03-02 03:57:36<SeP>2025-03-02 04:22:48<SeP>2025-03-02 04:48:00<SeP>2025-03-02 05:13:12<SeP>2025-03-02 05:38:24<SeP>2025-03-02 06:03:36<SeP>2025-03-02 06:28:48<SeP>2025-03-02 06:54:00<SeP>2025-03-02 07:19:12<SeP>2025-03-02 07:44:24<SeP>2025-03-02 08:09:36<SeP>2025-03-02 08:34:48<SeP>2025-03-02 09:00:00<SeP>2025-03-02 09:25:12<SeP>2025-03-02 09:50:24<SeP>2025-03-02 10:15:36<SeP>2025-03-02 10:40:48<SeP>2025-03-02 11:06:00<SeP>2025-03-02 11:31:12<SeP>2025-03-02 11:56:24<SeP>2025-03-02 12:21:36<SeP>2025-03-02 12:46:48<SeP>2025-03-02 13:12:00<SeP>2025-03-02 13:37:12<SeP>2025-03-02 14:02:24<SeP>2025-03-02 14:27:36<SeP>2025-03-02 14:52:48<SeP>2025-03-02 15:18:00<SeP>2025-03-02 15:43:12<SeP>2025-03-02 16:08:24<SeP>2025-03-02 16:33:36<SeP>2025-03-02 16:58:48<SeP>2025-03-02 17:24:00<SeP>2025-03-02 17:49:12<SeP>2025-03-02 18:14:24<SeP>2025-03-02 18:39:36<SeP>2025-03-02 19:04:48<SeP>2025-03-02 19:30:00<SeP>2025-03-02 19:55:12<SeP>2025-03-02 20:20:24<SeP>2025-03-02 20:45:36<SeP>2025-03-02 21:10:48<SeP>2025-03-02 21:36:00<SeP>2025-03-02 22:01:12<SeP>2025-03-02 22:26:24<SeP>2025-03-02 22:51:36<SeP>2025-03-02 23:16:48<SeP>2025-03-02 23:42:00<SeP>2025-03-03 00:07:12<SeP>2025-03-03 00:32:24<SeP>2025-03-03 00:57:36<SeP>2025-03-03 01:22:48<SeP>2025-03-03 01:48:00<SeP>2025-03-03 02:13:12<SeP>2025-03-03 02:38:24<SeP>2025-03-03 03:03:36<SeP>2025-03-03 03:28:48<SeP>2025-03-03 03:54:00<SeP>2025-03-03 04:19:12<SeP>2025-03-03 04:44:24<SeP>2025-03-03 05:09:36<SeP>2025-03-03 05:34:48<SeP>2025-03-03 06:00:00<SeP>2025-03-03 06:25:12<SeP>2025-03-03 06:50:24<SeP>2025-03-03 07:15:36<SeP>2025-03-03 07:40:48<SeP>2025-03-03 08:06:00<SeP>2025-03-03 08:31:12<SeP>2025-03-03 08:56:24<SeP>2025-03-03 09:21:36<SeP>2025-03-03 09:46:48<SeP>2025-03-03 10:12:00<SeP>2025-03-03 10:37:12<SeP>2025-03-03 11:02:24<SeP>2025-03-03 11:27:36<SeP>2025-03-03 11:52:48<SeP>2025-03-03 12:18:00<SeP>2025-03-03 12:43:12<SeP>2025-03-03 13:08:24<SeP>2025-03-03 13:33:36<SeP>2025-03-03 13:58:48<SeP>2025-03-03 14:24:00<SeP>2025-03-03 14:49:12<SeP>2025-03-03 15:14:24<SeP>2025-03-03 15:39:36<SeP>2025-03-03 16:04:48<SeP>2025-03-03 16:30:00<SeP>2025-03-03 16:55:12<SeP>2025-03-03 17:20:24<SeP>2025-03-03 17:45:36<SeP>2025-03-03 18:10:48<SeP>2025-03-03 18:36:00<SeP>2025-03-03 19:01:12<SeP>2025-03-03 19:26:24<SeP>2025-03-03 19:51:36<SeP>2025-03-03 20:16:48<SeP>2025-03-03 20:42:00<SeP>2025-03-03 21:07:12<SeP>2025-03-03 21:32:24<SeP>2025-03-03 21:57:36<SeP>2025-03-03 22:22:48<SeP>2025-03-03 22:48:00<SeP>2025-03-03 23:13:12<SeP>2025-03-03 23:38:24<SeP>2025-03-04 00:03:36<SeP>2025-03-04 00:28:48<SeP>2025-03-04 00:54:00<SeP>2025-03-04 01:19:12<SeP>2025-03-04 01:44:24<SeP>2025-03-04 02:09:36<SeP>2025-03-04 02:34:48<SeP>2025-03-04 03:00:00<SeP>2025-03-04 03:25:12<SeP>2025-03-04 03:50:24<SeP>2025-03-04 04:15:36<SeP>2025-03-04 04:40:48<SeP>2025-03-04 05:06:00<SeP>2025-03-04 05:31:12<SeP>2025-03-04 05:56:24<SeP>2025-03-04 06:21:36<SeP>2025-03-04 06:46:48<SeP>2025-03-04 07:12:00<SeP>2025-03-04 07:37:12<SeP>2025-03-04 08:02:24<SeP>2025-03-04 08:27:36<SeP>2025-03-04 08:52:48<SeP>2025-03-04 09:18:00<SeP>2025-03-04 09:43:12<SeP>2025-03-04 10:08:24<SeP>2025-03-04 10:33:36<SeP>2025-03-04 10:58:48<SeP>2025-03-04 11:24:00<SeP>2025-03-04 11:49:12<SeP>2025-03-04 12:14:24<SeP>2025-03-04 12:39:36<SeP>2025-03-04 13:04:48<SeP>2025-03-04 13:30:00<SeP>2025-03-04 13:55:12<SeP>2025-03-04 14:20:24<SeP>2025-03-04 14:45:36<SeP>2025-03-04 15:10:48<SeP>2025-03-04 15:36:00<SeP>2025-03-04 16:01:12<SeP>2025-03-04 16:26:24<SeP>2025-03-04 16:51:36<SeP>2025-03-04 17:16:48<SeP>2025-03-04 17:42:00<SeP>2025-03-04 18:07:12<SeP>2025-03-04 18:32:24<SeP>2025-03-04 18:57:36<SeP>2025-03-04 19:22:48<SeP>2025-03-04 19:48:00<SeP>2025-03-04 20:13:12<SeP>2025-03-04 20:38:24<SeP>2025-03-04 21:03:36<SeP>2025-03-04 21:28:48<SeP>2025-03-04 21:54:00<SeP>2025-03-04 22:19:12<SeP>2025-03-04 22:44:24<SeP>2025-03-04 23:09:36<SeP>2025-03-04 23:34:48";
  const itemLabel       = "Attacks";
  const itemData        = "65<SeP>56<SeP>23<SeP>21<SeP>20<SeP>3<SeP>10<SeP>2<SeP>4<SeP>2<SeP>44<SeP>43<SeP>85<SeP>106<SeP>19<SeP>94<SeP>18<SeP>31<SeP>11<SeP>8<SeP>10<SeP>6<SeP>17<SeP>76<SeP>56<SeP>23<SeP>72<SeP>30<SeP>4<SeP>10<SeP>7<SeP>20<SeP>46<SeP>4<SeP>17<SeP>18<SeP>17<SeP>18<SeP>12<SeP>9<SeP>25<SeP>15<SeP>15<SeP>21<SeP>13<SeP>6<SeP>8<SeP>19<SeP>95<SeP>79<SeP>91<SeP>68<SeP>59<SeP>99<SeP>23<SeP>6<SeP>4<SeP>307<SeP>7<SeP>11<SeP>4<SeP>13<SeP>18<SeP>8<SeP>10<SeP>28<SeP>157<SeP>74<SeP>9<SeP>12<SeP>61<SeP>59<SeP>286<SeP>37<SeP>82<SeP>73<SeP>20<SeP>27<SeP>13<SeP>27<SeP>46<SeP>56<SeP>23<SeP>22<SeP>19<SeP>26<SeP>56<SeP>44<SeP>32<SeP>55<SeP>27<SeP>12<SeP>105<SeP>68<SeP>68<SeP>66<SeP>19<SeP>6<SeP>9<SeP>5<SeP>5<SeP>10<SeP>10<SeP>9<SeP>10<SeP>7<SeP>16<SeP>14<SeP>62<SeP>50<SeP>15<SeP>8<SeP>20<SeP>61<SeP>22<SeP>43<SeP>66<SeP>60<SeP>80<SeP>22<SeP>22<SeP>20<SeP>20<SeP>29<SeP>29<SeP>42<SeP>45<SeP>72<SeP>35<SeP>96<SeP>131<SeP>9<SeP>2<SeP>7<SeP>7<SeP>7<SeP>71<SeP>115<SeP>21<SeP>162<SeP>94<SeP>9<SeP>21<SeP>37<SeP>7<SeP>14<SeP>55<SeP>278<SeP>6<SeP>9<SeP>19<SeP>23<SeP>9<SeP>10<SeP>14<SeP>15<SeP>21<SeP>18<SeP>14<SeP>5<SeP>8<SeP>11<SeP>20<SeP>4<SeP>5<SeP>17<SeP>8<SeP>12<SeP>19<SeP>53<SeP>53<SeP>16<SeP>8<SeP>7<SeP>8<SeP>5<SeP>4<SeP>13<SeP>3<SeP>5<SeP>2<SeP>1<SeP>17<SeP>44<SeP>20<SeP>4<SeP>5<SeP>12<SeP>17<SeP>24<SeP>40<SeP>13<SeP>7<SeP>4<SeP>3<SeP>25<SeP>39<SeP>21<SeP>1<SeP>4<SeP>3<SeP>7<SeP>29<SeP>28<SeP>8<SeP>64<SeP>86<SeP>38<SeP>3<SeP>21<SeP>34<SeP>36<SeP>25<SeP>31<SeP>17<SeP>14<SeP>24<SeP>16<SeP>3<SeP>3<SeP>3<SeP>20<SeP>101<SeP>74<SeP>48<SeP>23<SeP>1<SeP>4<SeP>35<SeP>35<SeP>53<SeP>130<SeP>162<SeP>168<SeP>15<SeP>7<SeP>8<SeP>7<SeP>11<SeP>55<SeP>43<SeP>4<SeP>9<SeP>6<SeP>2<SeP>1<SeP>4<SeP>301<SeP>5<SeP>2<SeP>2<SeP>1<SeP>10<SeP>5<SeP>9<SeP>4<SeP>3<SeP>3<SeP>8<SeP>5<SeP>32<SeP>36<SeP>69<SeP>66<SeP>52<SeP>13<SeP>5<SeP>6<SeP>7<SeP>6<SeP>5<SeP>63<SeP>7<SeP>6<SeP>5<SeP>23<SeP>5<SeP>7<SeP>62<SeP>75<SeP>39<SeP>16<SeP>11<SeP>12<SeP>9<SeP>27<SeP>40<SeP>34<SeP>14<SeP>6<SeP>7<SeP>33<SeP>107<SeP>141<SeP>26<SeP>7<SeP>30<SeP>29<SeP>7<SeP>12<SeP>6<SeP>6<SeP>7<SeP>26<SeP>34<SeP>19<SeP>9<SeP>17<SeP>10<SeP>11<SeP>9<SeP>9<SeP>13<SeP>4<SeP>10<SeP>8<SeP>8<SeP>35<SeP>223<SeP>138<SeP>6<SeP>13<SeP>76<SeP>30<SeP>10<SeP>11<SeP>9<SeP>13<SeP>24<SeP>34<SeP>15<SeP>13<SeP>17<SeP>6<SeP>6<SeP>8<SeP>37<SeP>33<SeP>36<SeP>32<SeP>96<SeP>62<SeP>16<SeP>11<SeP>10<SeP>13<SeP>6<SeP>7<SeP>8<SeP>31<SeP>93<SeP>77<SeP>255<SeP>6<SeP>6<SeP>7<SeP>5<SeP>9<SeP>5<SeP>6<SeP>6<SeP>14<SeP>2<SeP>2<SeP>3<SeP>6<SeP>4<SeP>63<SeP>87<SeP>53<SeP>50<SeP>32<SeP>26<SeP>20<SeP>5<SeP>7<SeP>5<SeP>7<SeP>4<SeP>29<SeP>18<SeP>40<SeP>9<SeP>1<SeP>5<SeP>11<SeP>12<SeP>37<SeP>22<SeP>33<SeP>4<SeP>2<SeP>3<SeP>2<SeP>18<SeP>38<SeP>28<SeP>6<SeP>246<SeP>8";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2025-02-26 00:00:00<SeP>2025-02-26 00:25:12<SeP>2025-02-26 00:50:24<SeP>2025-02-26 01:15:36<SeP>2025-02-26 01:40:48<SeP>2025-02-26 02:06:00<SeP>2025-02-26 02:31:12<SeP>2025-02-26 02:56:24<SeP>2025-02-26 03:21:36<SeP>2025-02-26 03:46:48<SeP>2025-02-26 04:12:00<SeP>2025-02-26 04:37:12<SeP>2025-02-26 05:02:24<SeP>2025-02-26 05:27:36<SeP>2025-02-26 05:52:48<SeP>2025-02-26 06:18:00<SeP>2025-02-26 06:43:12<SeP>2025-02-26 07:08:24<SeP>2025-02-26 07:33:36<SeP>2025-02-26 07:58:48<SeP>2025-02-26 08:24:00<SeP>2025-02-26 08:49:12<SeP>2025-02-26 09:14:24<SeP>2025-02-26 09:39:36<SeP>2025-02-26 10:04:48<SeP>2025-02-26 10:30:00<SeP>2025-02-26 10:55:12<SeP>2025-02-26 11:20:24<SeP>2025-02-26 11:45:36<SeP>2025-02-26 12:10:48<SeP>2025-02-26 12:36:00<SeP>2025-02-26 13:01:12<SeP>2025-02-26 13:26:24<SeP>2025-02-26 13:51:36<SeP>2025-02-26 14:16:48<SeP>2025-02-26 14:42:00<SeP>2025-02-26 15:07:12<SeP>2025-02-26 15:32:24<SeP>2025-02-26 15:57:36<SeP>2025-02-26 16:22:48<SeP>2025-02-26 16:48:00<SeP>2025-02-26 17:13:12<SeP>2025-02-26 17:38:24<SeP>2025-02-26 18:03:36<SeP>2025-02-26 18:28:48<SeP>2025-02-26 18:54:00<SeP>2025-02-26 19:19:12<SeP>2025-02-26 19:44:24<SeP>2025-02-26 20:09:36<SeP>2025-02-26 20:34:48<SeP>2025-02-26 21:00:00<SeP>2025-02-26 21:25:12<SeP>2025-02-26 21:50:24<SeP>2025-02-26 22:15:36<SeP>2025-02-26 22:40:48<SeP>2025-02-26 23:06:00<SeP>2025-02-26 23:31:12<SeP>2025-02-26 23:56:24<SeP>2025-02-27 00:21:36<SeP>2025-02-27 00:46:48<SeP>2025-02-27 01:12:00<SeP>2025-02-27 01:37:12<SeP>2025-02-27 02:02:24<SeP>2025-02-27 02:27:36<SeP>2025-02-27 02:52:48<SeP>2025-02-27 03:18:00<SeP>2025-02-27 03:43:12<SeP>2025-02-27 04:08:24<SeP>2025-02-27 04:33:36<SeP>2025-02-27 04:58:48<SeP>2025-02-27 05:24:00<SeP>2025-02-27 05:49:12<SeP>2025-02-27 06:14:24<SeP>2025-02-27 06:39:36<SeP>2025-02-27 07:04:48<SeP>2025-02-27 07:30:00<SeP>2025-02-27 07:55:12<SeP>2025-02-27 08:20:24<SeP>2025-02-27 08:45:36<SeP>2025-02-27 09:10:48<SeP>2025-02-27 09:36:00<SeP>2025-02-27 10:01:12<SeP>2025-02-27 10:26:24<SeP>2025-02-27 10:51:36<SeP>2025-02-27 11:16:48<SeP>2025-02-27 11:42:00<SeP>2025-02-27 12:07:12<SeP>2025-02-27 12:32:24<SeP>2025-02-27 12:57:36<SeP>2025-02-27 13:22:48<SeP>2025-02-27 13:48:00<SeP>2025-02-27 14:13:12<SeP>2025-02-27 14:38:24<SeP>2025-02-27 15:03:36<SeP>2025-02-27 15:28:48<SeP>2025-02-27 15:54:00<SeP>2025-02-27 16:19:12<SeP>2025-02-27 16:44:24<SeP>2025-02-27 17:09:36<SeP>2025-02-27 17:34:48<SeP>2025-02-27 18:00:00<SeP>2025-02-27 18:25:12<SeP>2025-02-27 18:50:24<SeP>2025-02-27 19:15:36<SeP>2025-02-27 19:40:48<SeP>2025-02-27 20:06:00<SeP>2025-02-27 20:31:12<SeP>2025-02-27 20:56:24<SeP>2025-02-27 21:21:36<SeP>2025-02-27 21:46:48<SeP>2025-02-27 22:12:00<SeP>2025-02-27 22:37:12<SeP>2025-02-27 23:02:24<SeP>2025-02-27 23:27:36<SeP>2025-02-27 23:52:48<SeP>2025-02-28 00:18:00<SeP>2025-02-28 00:43:12<SeP>2025-02-28 01:08:24<SeP>2025-02-28 01:33:36<SeP>2025-02-28 01:58:48<SeP>2025-02-28 02:24:00<SeP>2025-02-28 02:49:12<SeP>2025-02-28 03:14:24<SeP>2025-02-28 03:39:36<SeP>2025-02-28 04:04:48<SeP>2025-02-28 04:30:00<SeP>2025-02-28 04:55:12<SeP>2025-02-28 05:20:24<SeP>2025-02-28 05:45:36<SeP>2025-02-28 06:10:48<SeP>2025-02-28 06:36:00<SeP>2025-02-28 07:01:12<SeP>2025-02-28 07:26:24<SeP>2025-02-28 07:51:36<SeP>2025-02-28 08:16:48<SeP>2025-02-28 08:42:00<SeP>2025-02-28 09:07:12<SeP>2025-02-28 09:32:24<SeP>2025-02-28 09:57:36<SeP>2025-02-28 10:22:48<SeP>2025-02-28 10:48:00<SeP>2025-02-28 11:13:12<SeP>2025-02-28 11:38:24<SeP>2025-02-28 12:03:36<SeP>2025-02-28 12:28:48<SeP>2025-02-28 12:54:00<SeP>2025-02-28 13:19:12<SeP>2025-02-28 13:44:24<SeP>2025-02-28 14:09:36<SeP>2025-02-28 14:34:48<SeP>2025-02-28 15:00:00<SeP>2025-02-28 15:25:12<SeP>2025-02-28 15:50:24<SeP>2025-02-28 16:15:36<SeP>2025-02-28 16:40:48<SeP>2025-02-28 17:06:00<SeP>2025-02-28 17:31:12<SeP>2025-02-28 17:56:24<SeP>2025-02-28 18:21:36<SeP>2025-02-28 18:46:48<SeP>2025-02-28 19:12:00<SeP>2025-02-28 19:37:12<SeP>2025-02-28 20:02:24<SeP>2025-02-28 20:27:36<SeP>2025-02-28 20:52:48<SeP>2025-02-28 21:18:00<SeP>2025-02-28 21:43:12<SeP>2025-02-28 22:08:24<SeP>2025-02-28 22:33:36<SeP>2025-02-28 22:58:48<SeP>2025-02-28 23:24:00<SeP>2025-02-28 23:49:12<SeP>2025-03-01 00:14:24<SeP>2025-03-01 00:39:36<SeP>2025-03-01 01:04:48<SeP>2025-03-01 01:30:00<SeP>2025-03-01 01:55:12<SeP>2025-03-01 02:20:24<SeP>2025-03-01 02:45:36<SeP>2025-03-01 03:10:48<SeP>2025-03-01 03:36:00<SeP>2025-03-01 04:01:12<SeP>2025-03-01 04:26:24<SeP>2025-03-01 04:51:36<SeP>2025-03-01 05:16:48<SeP>2025-03-01 05:42:00<SeP>2025-03-01 06:07:12<SeP>2025-03-01 06:32:24<SeP>2025-03-01 06:57:36<SeP>2025-03-01 07:22:48<SeP>2025-03-01 07:48:00<SeP>2025-03-01 08:13:12<SeP>2025-03-01 08:38:24<SeP>2025-03-01 09:03:36<SeP>2025-03-01 09:28:48<SeP>2025-03-01 09:54:00<SeP>2025-03-01 10:19:12<SeP>2025-03-01 10:44:24<SeP>2025-03-01 11:09:36<SeP>2025-03-01 11:34:48<SeP>2025-03-01 12:00:00<SeP>2025-03-01 12:25:12<SeP>2025-03-01 12:50:24<SeP>2025-03-01 13:15:36<SeP>2025-03-01 13:40:48<SeP>2025-03-01 14:06:00<SeP>2025-03-01 14:31:12<SeP>2025-03-01 14:56:24<SeP>2025-03-01 15:21:36<SeP>2025-03-01 15:46:48<SeP>2025-03-01 16:12:00<SeP>2025-03-01 16:37:12<SeP>2025-03-01 17:02:24<SeP>2025-03-01 17:27:36<SeP>2025-03-01 17:52:48<SeP>2025-03-01 18:18:00<SeP>2025-03-01 18:43:12<SeP>2025-03-01 19:08:24<SeP>2025-03-01 19:33:36<SeP>2025-03-01 19:58:48<SeP>2025-03-01 20:24:00<SeP>2025-03-01 20:49:12<SeP>2025-03-01 21:14:24<SeP>2025-03-01 21:39:36<SeP>2025-03-01 22:04:48<SeP>2025-03-01 22:30:00<SeP>2025-03-01 22:55:12<SeP>2025-03-01 23:20:24<SeP>2025-03-01 23:45:36<SeP>2025-03-02 00:10:48<SeP>2025-03-02 00:36:00<SeP>2025-03-02 01:01:12<SeP>2025-03-02 01:26:24<SeP>2025-03-02 01:51:36<SeP>2025-03-02 02:16:48<SeP>2025-03-02 02:42:00<SeP>2025-03-02 03:07:12<SeP>2025-03-02 03:32:24<SeP>2025-03-02 03:57:36<SeP>2025-03-02 04:22:48<SeP>2025-03-02 04:48:00<SeP>2025-03-02 05:13:12<SeP>2025-03-02 05:38:24<SeP>2025-03-02 06:03:36<SeP>2025-03-02 06:28:48<SeP>2025-03-02 06:54:00<SeP>2025-03-02 07:19:12<SeP>2025-03-02 07:44:24<SeP>2025-03-02 08:09:36<SeP>2025-03-02 08:34:48<SeP>2025-03-02 09:00:00<SeP>2025-03-02 09:25:12<SeP>2025-03-02 09:50:24<SeP>2025-03-02 10:15:36<SeP>2025-03-02 10:40:48<SeP>2025-03-02 11:06:00<SeP>2025-03-02 11:31:12<SeP>2025-03-02 11:56:24<SeP>2025-03-02 12:21:36<SeP>2025-03-02 12:46:48<SeP>2025-03-02 13:12:00<SeP>2025-03-02 13:37:12<SeP>2025-03-02 14:02:24<SeP>2025-03-02 14:27:36<SeP>2025-03-02 14:52:48<SeP>2025-03-02 15:18:00<SeP>2025-03-02 15:43:12<SeP>2025-03-02 16:08:24<SeP>2025-03-02 16:33:36<SeP>2025-03-02 16:58:48<SeP>2025-03-02 17:24:00<SeP>2025-03-02 17:49:12<SeP>2025-03-02 18:14:24<SeP>2025-03-02 18:39:36<SeP>2025-03-02 19:04:48<SeP>2025-03-02 19:30:00<SeP>2025-03-02 19:55:12<SeP>2025-03-02 20:20:24<SeP>2025-03-02 20:45:36<SeP>2025-03-02 21:10:48<SeP>2025-03-02 21:36:00<SeP>2025-03-02 22:01:12<SeP>2025-03-02 22:26:24<SeP>2025-03-02 22:51:36<SeP>2025-03-02 23:16:48<SeP>2025-03-02 23:42:00<SeP>2025-03-03 00:07:12<SeP>2025-03-03 00:32:24<SeP>2025-03-03 00:57:36<SeP>2025-03-03 01:22:48<SeP>2025-03-03 01:48:00<SeP>2025-03-03 02:13:12<SeP>2025-03-03 02:38:24<SeP>2025-03-03 03:03:36<SeP>2025-03-03 03:28:48<SeP>2025-03-03 03:54:00<SeP>2025-03-03 04:19:12<SeP>2025-03-03 04:44:24<SeP>2025-03-03 05:09:36<SeP>2025-03-03 05:34:48<SeP>2025-03-03 06:00:00<SeP>2025-03-03 06:25:12<SeP>2025-03-03 06:50:24<SeP>2025-03-03 07:15:36<SeP>2025-03-03 07:40:48<SeP>2025-03-03 08:06:00<SeP>2025-03-03 08:31:12<SeP>2025-03-03 08:56:24<SeP>2025-03-03 09:21:36<SeP>2025-03-03 09:46:48<SeP>2025-03-03 10:12:00<SeP>2025-03-03 10:37:12<SeP>2025-03-03 11:02:24<SeP>2025-03-03 11:27:36<SeP>2025-03-03 11:52:48<SeP>2025-03-03 12:18:00<SeP>2025-03-03 12:43:12<SeP>2025-03-03 13:08:24<SeP>2025-03-03 13:33:36<SeP>2025-03-03 13:58:48<SeP>2025-03-03 14:24:00<SeP>2025-03-03 14:49:12<SeP>2025-03-03 15:14:24<SeP>2025-03-03 15:39:36<SeP>2025-03-03 16:04:48<SeP>2025-03-03 16:30:00<SeP>2025-03-03 16:55:12<SeP>2025-03-03 17:20:24<SeP>2025-03-03 17:45:36<SeP>2025-03-03 18:10:48<SeP>2025-03-03 18:36:00<SeP>2025-03-03 19:01:12<SeP>2025-03-03 19:26:24<SeP>2025-03-03 19:51:36<SeP>2025-03-03 20:16:48<SeP>2025-03-03 20:42:00<SeP>2025-03-03 21:07:12<SeP>2025-03-03 21:32:24<SeP>2025-03-03 21:57:36<SeP>2025-03-03 22:22:48<SeP>2025-03-03 22:48:00<SeP>2025-03-03 23:13:12<SeP>2025-03-03 23:38:24<SeP>2025-03-04 00:03:36<SeP>2025-03-04 00:28:48<SeP>2025-03-04 00:54:00<SeP>2025-03-04 01:19:12<SeP>2025-03-04 01:44:24<SeP>2025-03-04 02:09:36<SeP>2025-03-04 02:34:48<SeP>2025-03-04 03:00:00<SeP>2025-03-04 03:25:12<SeP>2025-03-04 03:50:24<SeP>2025-03-04 04:15:36<SeP>2025-03-04 04:40:48<SeP>2025-03-04 05:06:00<SeP>2025-03-04 05:31:12<SeP>2025-03-04 05:56:24<SeP>2025-03-04 06:21:36<SeP>2025-03-04 06:46:48<SeP>2025-03-04 07:12:00<SeP>2025-03-04 07:37:12<SeP>2025-03-04 08:02:24<SeP>2025-03-04 08:27:36<SeP>2025-03-04 08:52:48<SeP>2025-03-04 09:18:00<SeP>2025-03-04 09:43:12<SeP>2025-03-04 10:08:24<SeP>2025-03-04 10:33:36<SeP>2025-03-04 10:58:48<SeP>2025-03-04 11:24:00<SeP>2025-03-04 11:49:12<SeP>2025-03-04 12:14:24<SeP>2025-03-04 12:39:36<SeP>2025-03-04 13:04:48<SeP>2025-03-04 13:30:00<SeP>2025-03-04 13:55:12<SeP>2025-03-04 14:20:24<SeP>2025-03-04 14:45:36<SeP>2025-03-04 15:10:48<SeP>2025-03-04 15:36:00<SeP>2025-03-04 16:01:12<SeP>2025-03-04 16:26:24<SeP>2025-03-04 16:51:36<SeP>2025-03-04 17:16:48<SeP>2025-03-04 17:42:00<SeP>2025-03-04 18:07:12<SeP>2025-03-04 18:32:24<SeP>2025-03-04 18:57:36<SeP>2025-03-04 19:22:48<SeP>2025-03-04 19:48:00<SeP>2025-03-04 20:13:12<SeP>2025-03-04 20:38:24<SeP>2025-03-04 21:03:36<SeP>2025-03-04 21:28:48<SeP>2025-03-04 21:54:00<SeP>2025-03-04 22:19:12<SeP>2025-03-04 22:44:24<SeP>2025-03-04 23:09:36<SeP>2025-03-04 23:34:48";
  const item1Label       = "Escaneos";
  const item1Data        = "25<SeP>24<SeP>22<SeP>17<SeP>87<SeP>8<SeP>9<SeP>15<SeP>11<SeP>13<SeP>18<SeP>13<SeP>26<SeP>22<SeP>14<SeP>65<SeP>32<SeP>14<SeP>40<SeP>8<SeP>16<SeP>8<SeP>9<SeP>12<SeP>13<SeP>7<SeP>36<SeP>8<SeP>3<SeP>21<SeP>16<SeP>81<SeP>11<SeP>70<SeP>8<SeP>25<SeP>36<SeP>16<SeP>11<SeP>10<SeP>9<SeP>47<SeP>101<SeP>26<SeP>19<SeP>15<SeP>25<SeP>10<SeP>11<SeP>33<SeP>26<SeP>26<SeP>57<SeP>25<SeP>7<SeP>10<SeP>12<SeP>14<SeP>10<SeP>10<SeP>25<SeP>24<SeP>11<SeP>10<SeP>12<SeP>25<SeP>32<SeP>20<SeP>16<SeP>9<SeP>22<SeP>23<SeP>31<SeP>9<SeP>13<SeP>17<SeP>8<SeP>7<SeP>36<SeP>34<SeP>9<SeP>10<SeP>4<SeP>12<SeP>6<SeP>17<SeP>19<SeP>17<SeP>23<SeP>8<SeP>14<SeP>32<SeP>10<SeP>7<SeP>9<SeP>6<SeP>36<SeP>5<SeP>8<SeP>24<SeP>15<SeP>7<SeP>5<SeP>22<SeP>2<SeP>34<SeP>50<SeP>15<SeP>9<SeP>12<SeP>32<SeP>15<SeP>29<SeP>14<SeP>38<SeP>15<SeP>19<SeP>38<SeP>25<SeP>21<SeP>5<SeP>13<SeP>18<SeP>14<SeP>27<SeP>9<SeP>28<SeP>31<SeP>7<SeP>17<SeP>18<SeP>8<SeP>11<SeP>7<SeP>16<SeP>7<SeP>15<SeP>10<SeP>14<SeP>11<SeP>42<SeP>17<SeP>21<SeP>12<SeP>9<SeP>6<SeP>16<SeP>10<SeP>14<SeP>12<SeP>10<SeP>14<SeP>13<SeP>13<SeP>13<SeP>10<SeP>13<SeP>16<SeP>14<SeP>33<SeP>7<SeP>13<SeP>40<SeP>19<SeP>13<SeP>8<SeP>33<SeP>9<SeP>11<SeP>36<SeP>11<SeP>24<SeP>35<SeP>11<SeP>15<SeP>11<SeP>8<SeP>33<SeP>24<SeP>8<SeP>6<SeP>7<SeP>8<SeP>23<SeP>6<SeP>6<SeP>6<SeP>12<SeP>4<SeP>5<SeP>19<SeP>113<SeP>75<SeP>21<SeP>16<SeP>13<SeP>11<SeP>33<SeP>23<SeP>11<SeP>13<SeP>7<SeP>8<SeP>9<SeP>16<SeP>32<SeP>16<SeP>14<SeP>7<SeP>24<SeP>13<SeP>15<SeP>21<SeP>13<SeP>8<SeP>61<SeP>24<SeP>19<SeP>11<SeP>12<SeP>13<SeP>5<SeP>11<SeP>12<SeP>11<SeP>9<SeP>6<SeP>11<SeP>13<SeP>10<SeP>19<SeP>21<SeP>63<SeP>66<SeP>6<SeP>31<SeP>27<SeP>40<SeP>5<SeP>9<SeP>26<SeP>2<SeP>4<SeP>32<SeP>6<SeP>4<SeP>6<SeP>6<SeP>18<SeP>13<SeP>15<SeP>23<SeP>34<SeP>18<SeP>11<SeP>10<SeP>11<SeP>15<SeP>11<SeP>13<SeP>7<SeP>6<SeP>8<SeP>12<SeP>8<SeP>24<SeP>21<SeP>7<SeP>9<SeP>8<SeP>55<SeP>36<SeP>45<SeP>24<SeP>8<SeP>27<SeP>12<SeP>15<SeP>16<SeP>20<SeP>12<SeP>9<SeP>13<SeP>23<SeP>11<SeP>24<SeP>57<SeP>18<SeP>11<SeP>18<SeP>11<SeP>21<SeP>7<SeP>9<SeP>4<SeP>29<SeP>24<SeP>3<SeP>7<SeP>13<SeP>2<SeP>4<SeP>4<SeP>6<SeP>9<SeP>16<SeP>8<SeP>6<SeP>10<SeP>20<SeP>7<SeP>13<SeP>5<SeP>6<SeP>5<SeP>7<SeP>9<SeP>16<SeP>16<SeP>44<SeP>15<SeP>26<SeP>10<SeP>7<SeP>18<SeP>29<SeP>15<SeP>11<SeP>9<SeP>14<SeP>20<SeP>14<SeP>11<SeP>13<SeP>18<SeP>13<SeP>26<SeP>25<SeP>12<SeP>21<SeP>15<SeP>16<SeP>215<SeP>13<SeP>8<SeP>10<SeP>17<SeP>13<SeP>9<SeP>6<SeP>5<SeP>4<SeP>8<SeP>12<SeP>18<SeP>22<SeP>14<SeP>12<SeP>11<SeP>11<SeP>22<SeP>15<SeP>45<SeP>34<SeP>25<SeP>17<SeP>30<SeP>28<SeP>58<SeP>12<SeP>26<SeP>8<SeP>11<SeP>19<SeP>7<SeP>14<SeP>10<SeP>13<SeP>13<SeP>13<SeP>34<SeP>14<SeP>6<SeP>9<SeP>6<SeP>8<SeP>122<SeP>33<SeP>35<SeP>9<SeP>6<SeP>13<SeP>10<SeP>11<SeP>56<SeP>15<SeP>14<SeP>28<SeP>11<SeP>9";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "65<SeP>56<SeP>23<SeP>21<SeP>20<SeP>3<SeP>10<SeP>2<SeP>4<SeP>2<SeP>44<SeP>43<SeP>85<SeP>106<SeP>19<SeP>94<SeP>18<SeP>31<SeP>11<SeP>8<SeP>10<SeP>6<SeP>17<SeP>76<SeP>56<SeP>23<SeP>72<SeP>30<SeP>4<SeP>10<SeP>7<SeP>20<SeP>46<SeP>4<SeP>17<SeP>18<SeP>17<SeP>18<SeP>12<SeP>9<SeP>25<SeP>15<SeP>15<SeP>21<SeP>13<SeP>6<SeP>8<SeP>19<SeP>95<SeP>79<SeP>91<SeP>68<SeP>59<SeP>99<SeP>23<SeP>6<SeP>4<SeP>307<SeP>7<SeP>11<SeP>4<SeP>13<SeP>18<SeP>8<SeP>10<SeP>28<SeP>157<SeP>74<SeP>9<SeP>12<SeP>61<SeP>59<SeP>286<SeP>37<SeP>82<SeP>73<SeP>20<SeP>27<SeP>13<SeP>27<SeP>46<SeP>56<SeP>23<SeP>22<SeP>19<SeP>26<SeP>56<SeP>44<SeP>32<SeP>55<SeP>27<SeP>12<SeP>105<SeP>68<SeP>68<SeP>66<SeP>19<SeP>6<SeP>9<SeP>5<SeP>5<SeP>10<SeP>10<SeP>9<SeP>10<SeP>7<SeP>16<SeP>14<SeP>62<SeP>50<SeP>15<SeP>8<SeP>20<SeP>61<SeP>22<SeP>43<SeP>66<SeP>60<SeP>80<SeP>22<SeP>22<SeP>20<SeP>20<SeP>29<SeP>29<SeP>42<SeP>45<SeP>72<SeP>35<SeP>96<SeP>131<SeP>9<SeP>2<SeP>7<SeP>7<SeP>7<SeP>71<SeP>115<SeP>21<SeP>162<SeP>94<SeP>9<SeP>21<SeP>37<SeP>7<SeP>14<SeP>55<SeP>278<SeP>6<SeP>9<SeP>19<SeP>23<SeP>9<SeP>10<SeP>14<SeP>15<SeP>21<SeP>18<SeP>14<SeP>5<SeP>8<SeP>11<SeP>20<SeP>4<SeP>5<SeP>17<SeP>8<SeP>12<SeP>19<SeP>53<SeP>53<SeP>16<SeP>8<SeP>7<SeP>8<SeP>5<SeP>4<SeP>13<SeP>3<SeP>5<SeP>2<SeP>1<SeP>17<SeP>44<SeP>20<SeP>4<SeP>5<SeP>12<SeP>17<SeP>24<SeP>40<SeP>13<SeP>7<SeP>4<SeP>3<SeP>25<SeP>39<SeP>21<SeP>1<SeP>4<SeP>3<SeP>7<SeP>29<SeP>28<SeP>8<SeP>64<SeP>86<SeP>38<SeP>3<SeP>21<SeP>34<SeP>36<SeP>25<SeP>31<SeP>17<SeP>14<SeP>24<SeP>16<SeP>3<SeP>3<SeP>3<SeP>20<SeP>101<SeP>74<SeP>48<SeP>23<SeP>1<SeP>4<SeP>35<SeP>35<SeP>53<SeP>130<SeP>162<SeP>168<SeP>15<SeP>7<SeP>8<SeP>7<SeP>11<SeP>55<SeP>43<SeP>4<SeP>9<SeP>6<SeP>2<SeP>1<SeP>4<SeP>301<SeP>5<SeP>2<SeP>2<SeP>1<SeP>10<SeP>5<SeP>9<SeP>4<SeP>3<SeP>3<SeP>8<SeP>5<SeP>32<SeP>36<SeP>69<SeP>66<SeP>52<SeP>13<SeP>5<SeP>6<SeP>7<SeP>6<SeP>5<SeP>63<SeP>7<SeP>6<SeP>5<SeP>23<SeP>5<SeP>7<SeP>62<SeP>75<SeP>39<SeP>16<SeP>11<SeP>12<SeP>9<SeP>27<SeP>40<SeP>34<SeP>14<SeP>6<SeP>7<SeP>33<SeP>107<SeP>141<SeP>26<SeP>7<SeP>30<SeP>29<SeP>7<SeP>12<SeP>6<SeP>6<SeP>7<SeP>26<SeP>34<SeP>19<SeP>9<SeP>17<SeP>10<SeP>11<SeP>9<SeP>9<SeP>13<SeP>4<SeP>10<SeP>8<SeP>8<SeP>35<SeP>223<SeP>138<SeP>6<SeP>13<SeP>76<SeP>30<SeP>10<SeP>11<SeP>9<SeP>13<SeP>24<SeP>34<SeP>15<SeP>13<SeP>17<SeP>6<SeP>6<SeP>8<SeP>37<SeP>33<SeP>36<SeP>32<SeP>96<SeP>62<SeP>16<SeP>11<SeP>10<SeP>13<SeP>6<SeP>7<SeP>8<SeP>31<SeP>93<SeP>77<SeP>255<SeP>6<SeP>6<SeP>7<SeP>5<SeP>9<SeP>5<SeP>6<SeP>6<SeP>14<SeP>2<SeP>2<SeP>3<SeP>6<SeP>4<SeP>63<SeP>87<SeP>53<SeP>50<SeP>32<SeP>26<SeP>20<SeP>5<SeP>7<SeP>5<SeP>7<SeP>4<SeP>29<SeP>18<SeP>40<SeP>9<SeP>1<SeP>5<SeP>11<SeP>12<SeP>37<SeP>22<SeP>33<SeP>4<SeP>2<SeP>3<SeP>2<SeP>18<SeP>38<SeP>28<SeP>6<SeP>246<SeP>8";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-26 00:00:00<SeP>2025-02-26 00:25:12<SeP>2025-02-26 00:50:24<SeP>2025-02-26 01:15:36<SeP>2025-02-26 01:40:48<SeP>2025-02-26 02:06:00<SeP>2025-02-26 02:31:12<SeP>2025-02-26 02:56:24<SeP>2025-02-26 03:21:36<SeP>2025-02-26 03:46:48<SeP>2025-02-26 04:12:00<SeP>2025-02-26 04:37:12<SeP>2025-02-26 05:02:24<SeP>2025-02-26 05:27:36<SeP>2025-02-26 05:52:48<SeP>2025-02-26 06:18:00<SeP>2025-02-26 06:43:12<SeP>2025-02-26 07:08:24<SeP>2025-02-26 07:33:36<SeP>2025-02-26 07:58:48<SeP>2025-02-26 08:24:00<SeP>2025-02-26 08:49:12<SeP>2025-02-26 09:14:24<SeP>2025-02-26 09:39:36<SeP>2025-02-26 10:04:48<SeP>2025-02-26 10:30:00<SeP>2025-02-26 10:55:12<SeP>2025-02-26 11:20:24<SeP>2025-02-26 11:45:36<SeP>2025-02-26 12:10:48<SeP>2025-02-26 12:36:00<SeP>2025-02-26 13:01:12<SeP>2025-02-26 13:26:24<SeP>2025-02-26 13:51:36<SeP>2025-02-26 14:16:48<SeP>2025-02-26 14:42:00<SeP>2025-02-26 15:07:12<SeP>2025-02-26 15:32:24<SeP>2025-02-26 15:57:36<SeP>2025-02-26 16:22:48<SeP>2025-02-26 16:48:00<SeP>2025-02-26 17:13:12<SeP>2025-02-26 17:38:24<SeP>2025-02-26 18:03:36<SeP>2025-02-26 18:28:48<SeP>2025-02-26 18:54:00<SeP>2025-02-26 19:19:12<SeP>2025-02-26 19:44:24<SeP>2025-02-26 20:09:36<SeP>2025-02-26 20:34:48<SeP>2025-02-26 21:00:00<SeP>2025-02-26 21:25:12<SeP>2025-02-26 21:50:24<SeP>2025-02-26 22:15:36<SeP>2025-02-26 22:40:48<SeP>2025-02-26 23:06:00<SeP>2025-02-26 23:31:12<SeP>2025-02-26 23:56:24<SeP>2025-02-27 00:21:36<SeP>2025-02-27 00:46:48<SeP>2025-02-27 01:12:00<SeP>2025-02-27 01:37:12<SeP>2025-02-27 02:02:24<SeP>2025-02-27 02:27:36<SeP>2025-02-27 02:52:48<SeP>2025-02-27 03:18:00<SeP>2025-02-27 03:43:12<SeP>2025-02-27 04:08:24<SeP>2025-02-27 04:33:36<SeP>2025-02-27 04:58:48<SeP>2025-02-27 05:24:00<SeP>2025-02-27 05:49:12<SeP>2025-02-27 06:14:24<SeP>2025-02-27 06:39:36<SeP>2025-02-27 07:04:48<SeP>2025-02-27 07:30:00<SeP>2025-02-27 07:55:12<SeP>2025-02-27 08:20:24<SeP>2025-02-27 08:45:36<SeP>2025-02-27 09:10:48<SeP>2025-02-27 09:36:00<SeP>2025-02-27 10:01:12<SeP>2025-02-27 10:26:24<SeP>2025-02-27 10:51:36<SeP>2025-02-27 11:16:48<SeP>2025-02-27 11:42:00<SeP>2025-02-27 12:07:12<SeP>2025-02-27 12:32:24<SeP>2025-02-27 12:57:36<SeP>2025-02-27 13:22:48<SeP>2025-02-27 13:48:00<SeP>2025-02-27 14:13:12<SeP>2025-02-27 14:38:24<SeP>2025-02-27 15:03:36<SeP>2025-02-27 15:28:48<SeP>2025-02-27 15:54:00<SeP>2025-02-27 16:19:12<SeP>2025-02-27 16:44:24<SeP>2025-02-27 17:09:36<SeP>2025-02-27 17:34:48<SeP>2025-02-27 18:00:00<SeP>2025-02-27 18:25:12<SeP>2025-02-27 18:50:24<SeP>2025-02-27 19:15:36<SeP>2025-02-27 19:40:48<SeP>2025-02-27 20:06:00<SeP>2025-02-27 20:31:12<SeP>2025-02-27 20:56:24<SeP>2025-02-27 21:21:36<SeP>2025-02-27 21:46:48<SeP>2025-02-27 22:12:00<SeP>2025-02-27 22:37:12<SeP>2025-02-27 23:02:24<SeP>2025-02-27 23:27:36<SeP>2025-02-27 23:52:48<SeP>2025-02-28 00:18:00<SeP>2025-02-28 00:43:12<SeP>2025-02-28 01:08:24<SeP>2025-02-28 01:33:36<SeP>2025-02-28 01:58:48<SeP>2025-02-28 02:24:00<SeP>2025-02-28 02:49:12<SeP>2025-02-28 03:14:24<SeP>2025-02-28 03:39:36<SeP>2025-02-28 04:04:48<SeP>2025-02-28 04:30:00<SeP>2025-02-28 04:55:12<SeP>2025-02-28 05:20:24<SeP>2025-02-28 05:45:36<SeP>2025-02-28 06:10:48<SeP>2025-02-28 06:36:00<SeP>2025-02-28 07:01:12<SeP>2025-02-28 07:26:24<SeP>2025-02-28 07:51:36<SeP>2025-02-28 08:16:48<SeP>2025-02-28 08:42:00<SeP>2025-02-28 09:07:12<SeP>2025-02-28 09:32:24<SeP>2025-02-28 09:57:36<SeP>2025-02-28 10:22:48<SeP>2025-02-28 10:48:00<SeP>2025-02-28 11:13:12<SeP>2025-02-28 11:38:24<SeP>2025-02-28 12:03:36<SeP>2025-02-28 12:28:48<SeP>2025-02-28 12:54:00<SeP>2025-02-28 13:19:12<SeP>2025-02-28 13:44:24<SeP>2025-02-28 14:09:36<SeP>2025-02-28 14:34:48<SeP>2025-02-28 15:00:00<SeP>2025-02-28 15:25:12<SeP>2025-02-28 15:50:24<SeP>2025-02-28 16:15:36<SeP>2025-02-28 16:40:48<SeP>2025-02-28 17:06:00<SeP>2025-02-28 17:31:12<SeP>2025-02-28 17:56:24<SeP>2025-02-28 18:21:36<SeP>2025-02-28 18:46:48<SeP>2025-02-28 19:12:00<SeP>2025-02-28 19:37:12<SeP>2025-02-28 20:02:24<SeP>2025-02-28 20:27:36<SeP>2025-02-28 20:52:48<SeP>2025-02-28 21:18:00<SeP>2025-02-28 21:43:12<SeP>2025-02-28 22:08:24<SeP>2025-02-28 22:33:36<SeP>2025-02-28 22:58:48<SeP>2025-02-28 23:24:00<SeP>2025-02-28 23:49:12<SeP>2025-03-01 00:14:24<SeP>2025-03-01 00:39:36<SeP>2025-03-01 01:04:48<SeP>2025-03-01 01:30:00<SeP>2025-03-01 01:55:12<SeP>2025-03-01 02:20:24<SeP>2025-03-01 02:45:36<SeP>2025-03-01 03:10:48<SeP>2025-03-01 03:36:00<SeP>2025-03-01 04:01:12<SeP>2025-03-01 04:26:24<SeP>2025-03-01 04:51:36<SeP>2025-03-01 05:16:48<SeP>2025-03-01 05:42:00<SeP>2025-03-01 06:07:12<SeP>2025-03-01 06:32:24<SeP>2025-03-01 06:57:36<SeP>2025-03-01 07:22:48<SeP>2025-03-01 07:48:00<SeP>2025-03-01 08:13:12<SeP>2025-03-01 08:38:24<SeP>2025-03-01 09:03:36<SeP>2025-03-01 09:28:48<SeP>2025-03-01 09:54:00<SeP>2025-03-01 10:19:12<SeP>2025-03-01 10:44:24<SeP>2025-03-01 11:09:36<SeP>2025-03-01 11:34:48<SeP>2025-03-01 12:00:00<SeP>2025-03-01 12:25:12<SeP>2025-03-01 12:50:24<SeP>2025-03-01 13:15:36<SeP>2025-03-01 13:40:48<SeP>2025-03-01 14:06:00<SeP>2025-03-01 14:31:12<SeP>2025-03-01 14:56:24<SeP>2025-03-01 15:21:36<SeP>2025-03-01 15:46:48<SeP>2025-03-01 16:12:00<SeP>2025-03-01 16:37:12<SeP>2025-03-01 17:02:24<SeP>2025-03-01 17:27:36<SeP>2025-03-01 17:52:48<SeP>2025-03-01 18:18:00<SeP>2025-03-01 18:43:12<SeP>2025-03-01 19:08:24<SeP>2025-03-01 19:33:36<SeP>2025-03-01 19:58:48<SeP>2025-03-01 20:24:00<SeP>2025-03-01 20:49:12<SeP>2025-03-01 21:14:24<SeP>2025-03-01 21:39:36<SeP>2025-03-01 22:04:48<SeP>2025-03-01 22:30:00<SeP>2025-03-01 22:55:12<SeP>2025-03-01 23:20:24<SeP>2025-03-01 23:45:36<SeP>2025-03-02 00:10:48<SeP>2025-03-02 00:36:00<SeP>2025-03-02 01:01:12<SeP>2025-03-02 01:26:24<SeP>2025-03-02 01:51:36<SeP>2025-03-02 02:16:48<SeP>2025-03-02 02:42:00<SeP>2025-03-02 03:07:12<SeP>2025-03-02 03:32:24<SeP>2025-03-02 03:57:36<SeP>2025-03-02 04:22:48<SeP>2025-03-02 04:48:00<SeP>2025-03-02 05:13:12<SeP>2025-03-02 05:38:24<SeP>2025-03-02 06:03:36<SeP>2025-03-02 06:28:48<SeP>2025-03-02 06:54:00<SeP>2025-03-02 07:19:12<SeP>2025-03-02 07:44:24<SeP>2025-03-02 08:09:36<SeP>2025-03-02 08:34:48<SeP>2025-03-02 09:00:00<SeP>2025-03-02 09:25:12<SeP>2025-03-02 09:50:24<SeP>2025-03-02 10:15:36<SeP>2025-03-02 10:40:48<SeP>2025-03-02 11:06:00<SeP>2025-03-02 11:31:12<SeP>2025-03-02 11:56:24<SeP>2025-03-02 12:21:36<SeP>2025-03-02 12:46:48<SeP>2025-03-02 13:12:00<SeP>2025-03-02 13:37:12<SeP>2025-03-02 14:02:24<SeP>2025-03-02 14:27:36<SeP>2025-03-02 14:52:48<SeP>2025-03-02 15:18:00<SeP>2025-03-02 15:43:12<SeP>2025-03-02 16:08:24<SeP>2025-03-02 16:33:36<SeP>2025-03-02 16:58:48<SeP>2025-03-02 17:24:00<SeP>2025-03-02 17:49:12<SeP>2025-03-02 18:14:24<SeP>2025-03-02 18:39:36<SeP>2025-03-02 19:04:48<SeP>2025-03-02 19:30:00<SeP>2025-03-02 19:55:12<SeP>2025-03-02 20:20:24<SeP>2025-03-02 20:45:36<SeP>2025-03-02 21:10:48<SeP>2025-03-02 21:36:00<SeP>2025-03-02 22:01:12<SeP>2025-03-02 22:26:24<SeP>2025-03-02 22:51:36<SeP>2025-03-02 23:16:48<SeP>2025-03-02 23:42:00<SeP>2025-03-03 00:07:12<SeP>2025-03-03 00:32:24<SeP>2025-03-03 00:57:36<SeP>2025-03-03 01:22:48<SeP>2025-03-03 01:48:00<SeP>2025-03-03 02:13:12<SeP>2025-03-03 02:38:24<SeP>2025-03-03 03:03:36<SeP>2025-03-03 03:28:48<SeP>2025-03-03 03:54:00<SeP>2025-03-03 04:19:12<SeP>2025-03-03 04:44:24<SeP>2025-03-03 05:09:36<SeP>2025-03-03 05:34:48<SeP>2025-03-03 06:00:00<SeP>2025-03-03 06:25:12<SeP>2025-03-03 06:50:24<SeP>2025-03-03 07:15:36<SeP>2025-03-03 07:40:48<SeP>2025-03-03 08:06:00<SeP>2025-03-03 08:31:12<SeP>2025-03-03 08:56:24<SeP>2025-03-03 09:21:36<SeP>2025-03-03 09:46:48<SeP>2025-03-03 10:12:00<SeP>2025-03-03 10:37:12<SeP>2025-03-03 11:02:24<SeP>2025-03-03 11:27:36<SeP>2025-03-03 11:52:48<SeP>2025-03-03 12:18:00<SeP>2025-03-03 12:43:12<SeP>2025-03-03 13:08:24<SeP>2025-03-03 13:33:36<SeP>2025-03-03 13:58:48<SeP>2025-03-03 14:24:00<SeP>2025-03-03 14:49:12<SeP>2025-03-03 15:14:24<SeP>2025-03-03 15:39:36<SeP>2025-03-03 16:04:48<SeP>2025-03-03 16:30:00<SeP>2025-03-03 16:55:12<SeP>2025-03-03 17:20:24<SeP>2025-03-03 17:45:36<SeP>2025-03-03 18:10:48<SeP>2025-03-03 18:36:00<SeP>2025-03-03 19:01:12<SeP>2025-03-03 19:26:24<SeP>2025-03-03 19:51:36<SeP>2025-03-03 20:16:48<SeP>2025-03-03 20:42:00<SeP>2025-03-03 21:07:12<SeP>2025-03-03 21:32:24<SeP>2025-03-03 21:57:36<SeP>2025-03-03 22:22:48<SeP>2025-03-03 22:48:00<SeP>2025-03-03 23:13:12<SeP>2025-03-03 23:38:24<SeP>2025-03-04 00:03:36<SeP>2025-03-04 00:28:48<SeP>2025-03-04 00:54:00<SeP>2025-03-04 01:19:12<SeP>2025-03-04 01:44:24<SeP>2025-03-04 02:09:36<SeP>2025-03-04 02:34:48<SeP>2025-03-04 03:00:00<SeP>2025-03-04 03:25:12<SeP>2025-03-04 03:50:24<SeP>2025-03-04 04:15:36<SeP>2025-03-04 04:40:48<SeP>2025-03-04 05:06:00<SeP>2025-03-04 05:31:12<SeP>2025-03-04 05:56:24<SeP>2025-03-04 06:21:36<SeP>2025-03-04 06:46:48<SeP>2025-03-04 07:12:00<SeP>2025-03-04 07:37:12<SeP>2025-03-04 08:02:24<SeP>2025-03-04 08:27:36<SeP>2025-03-04 08:52:48<SeP>2025-03-04 09:18:00<SeP>2025-03-04 09:43:12<SeP>2025-03-04 10:08:24<SeP>2025-03-04 10:33:36<SeP>2025-03-04 10:58:48<SeP>2025-03-04 11:24:00<SeP>2025-03-04 11:49:12<SeP>2025-03-04 12:14:24<SeP>2025-03-04 12:39:36<SeP>2025-03-04 13:04:48<SeP>2025-03-04 13:30:00<SeP>2025-03-04 13:55:12<SeP>2025-03-04 14:20:24<SeP>2025-03-04 14:45:36<SeP>2025-03-04 15:10:48<SeP>2025-03-04 15:36:00<SeP>2025-03-04 16:01:12<SeP>2025-03-04 16:26:24<SeP>2025-03-04 16:51:36<SeP>2025-03-04 17:16:48<SeP>2025-03-04 17:42:00<SeP>2025-03-04 18:07:12<SeP>2025-03-04 18:32:24<SeP>2025-03-04 18:57:36<SeP>2025-03-04 19:22:48<SeP>2025-03-04 19:48:00<SeP>2025-03-04 20:13:12<SeP>2025-03-04 20:38:24<SeP>2025-03-04 21:03:36<SeP>2025-03-04 21:28:48<SeP>2025-03-04 21:54:00<SeP>2025-03-04 22:19:12<SeP>2025-03-04 22:44:24<SeP>2025-03-04 23:09:36<SeP>2025-03-04 23:34:48";
  const itemLabel       = "Escaneos";
  const itemData        = "25<SeP>24<SeP>22<SeP>17<SeP>87<SeP>8<SeP>9<SeP>15<SeP>11<SeP>13<SeP>18<SeP>13<SeP>26<SeP>22<SeP>14<SeP>65<SeP>32<SeP>14<SeP>40<SeP>8<SeP>16<SeP>8<SeP>9<SeP>12<SeP>13<SeP>7<SeP>36<SeP>8<SeP>3<SeP>21<SeP>16<SeP>81<SeP>11<SeP>70<SeP>8<SeP>25<SeP>36<SeP>16<SeP>11<SeP>10<SeP>9<SeP>47<SeP>101<SeP>26<SeP>19<SeP>15<SeP>25<SeP>10<SeP>11<SeP>33<SeP>26<SeP>26<SeP>57<SeP>25<SeP>7<SeP>10<SeP>12<SeP>14<SeP>10<SeP>10<SeP>25<SeP>24<SeP>11<SeP>10<SeP>12<SeP>25<SeP>32<SeP>20<SeP>16<SeP>9<SeP>22<SeP>23<SeP>31<SeP>9<SeP>13<SeP>17<SeP>8<SeP>7<SeP>36<SeP>34<SeP>9<SeP>10<SeP>4<SeP>12<SeP>6<SeP>17<SeP>19<SeP>17<SeP>23<SeP>8<SeP>14<SeP>32<SeP>10<SeP>7<SeP>9<SeP>6<SeP>36<SeP>5<SeP>8<SeP>24<SeP>15<SeP>7<SeP>5<SeP>22<SeP>2<SeP>34<SeP>50<SeP>15<SeP>9<SeP>12<SeP>32<SeP>15<SeP>29<SeP>14<SeP>38<SeP>15<SeP>19<SeP>38<SeP>25<SeP>21<SeP>5<SeP>13<SeP>18<SeP>14<SeP>27<SeP>9<SeP>28<SeP>31<SeP>7<SeP>17<SeP>18<SeP>8<SeP>11<SeP>7<SeP>16<SeP>7<SeP>15<SeP>10<SeP>14<SeP>11<SeP>42<SeP>17<SeP>21<SeP>12<SeP>9<SeP>6<SeP>16<SeP>10<SeP>14<SeP>12<SeP>10<SeP>14<SeP>13<SeP>13<SeP>13<SeP>10<SeP>13<SeP>16<SeP>14<SeP>33<SeP>7<SeP>13<SeP>40<SeP>19<SeP>13<SeP>8<SeP>33<SeP>9<SeP>11<SeP>36<SeP>11<SeP>24<SeP>35<SeP>11<SeP>15<SeP>11<SeP>8<SeP>33<SeP>24<SeP>8<SeP>6<SeP>7<SeP>8<SeP>23<SeP>6<SeP>6<SeP>6<SeP>12<SeP>4<SeP>5<SeP>19<SeP>113<SeP>75<SeP>21<SeP>16<SeP>13<SeP>11<SeP>33<SeP>23<SeP>11<SeP>13<SeP>7<SeP>8<SeP>9<SeP>16<SeP>32<SeP>16<SeP>14<SeP>7<SeP>24<SeP>13<SeP>15<SeP>21<SeP>13<SeP>8<SeP>61<SeP>24<SeP>19<SeP>11<SeP>12<SeP>13<SeP>5<SeP>11<SeP>12<SeP>11<SeP>9<SeP>6<SeP>11<SeP>13<SeP>10<SeP>19<SeP>21<SeP>63<SeP>66<SeP>6<SeP>31<SeP>27<SeP>40<SeP>5<SeP>9<SeP>26<SeP>2<SeP>4<SeP>32<SeP>6<SeP>4<SeP>6<SeP>6<SeP>18<SeP>13<SeP>15<SeP>23<SeP>34<SeP>18<SeP>11<SeP>10<SeP>11<SeP>15<SeP>11<SeP>13<SeP>7<SeP>6<SeP>8<SeP>12<SeP>8<SeP>24<SeP>21<SeP>7<SeP>9<SeP>8<SeP>55<SeP>36<SeP>45<SeP>24<SeP>8<SeP>27<SeP>12<SeP>15<SeP>16<SeP>20<SeP>12<SeP>9<SeP>13<SeP>23<SeP>11<SeP>24<SeP>57<SeP>18<SeP>11<SeP>18<SeP>11<SeP>21<SeP>7<SeP>9<SeP>4<SeP>29<SeP>24<SeP>3<SeP>7<SeP>13<SeP>2<SeP>4<SeP>4<SeP>6<SeP>9<SeP>16<SeP>8<SeP>6<SeP>10<SeP>20<SeP>7<SeP>13<SeP>5<SeP>6<SeP>5<SeP>7<SeP>9<SeP>16<SeP>16<SeP>44<SeP>15<SeP>26<SeP>10<SeP>7<SeP>18<SeP>29<SeP>15<SeP>11<SeP>9<SeP>14<SeP>20<SeP>14<SeP>11<SeP>13<SeP>18<SeP>13<SeP>26<SeP>25<SeP>12<SeP>21<SeP>15<SeP>16<SeP>215<SeP>13<SeP>8<SeP>10<SeP>17<SeP>13<SeP>9<SeP>6<SeP>5<SeP>4<SeP>8<SeP>12<SeP>18<SeP>22<SeP>14<SeP>12<SeP>11<SeP>11<SeP>22<SeP>15<SeP>45<SeP>34<SeP>25<SeP>17<SeP>30<SeP>28<SeP>58<SeP>12<SeP>26<SeP>8<SeP>11<SeP>19<SeP>7<SeP>14<SeP>10<SeP>13<SeP>13<SeP>13<SeP>34<SeP>14<SeP>6<SeP>9<SeP>6<SeP>8<SeP>122<SeP>33<SeP>35<SeP>9<SeP>6<SeP>13<SeP>10<SeP>11<SeP>56<SeP>15<SeP>14<SeP>28<SeP>11<SeP>9";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-26 00:00:00<SeP>2025-02-26 00:25:12<SeP>2025-02-26 00:50:24<SeP>2025-02-26 01:15:36<SeP>2025-02-26 01:40:48<SeP>2025-02-26 02:06:00<SeP>2025-02-26 02:31:12<SeP>2025-02-26 02:56:24<SeP>2025-02-26 03:21:36<SeP>2025-02-26 03:46:48<SeP>2025-02-26 04:12:00<SeP>2025-02-26 04:37:12<SeP>2025-02-26 05:02:24<SeP>2025-02-26 05:27:36<SeP>2025-02-26 05:52:48<SeP>2025-02-26 06:18:00<SeP>2025-02-26 06:43:12<SeP>2025-02-26 07:08:24<SeP>2025-02-26 07:33:36<SeP>2025-02-26 07:58:48<SeP>2025-02-26 08:24:00<SeP>2025-02-26 08:49:12<SeP>2025-02-26 09:14:24<SeP>2025-02-26 09:39:36<SeP>2025-02-26 10:04:48<SeP>2025-02-26 10:30:00<SeP>2025-02-26 10:55:12<SeP>2025-02-26 11:20:24<SeP>2025-02-26 11:45:36<SeP>2025-02-26 12:10:48<SeP>2025-02-26 12:36:00<SeP>2025-02-26 13:01:12<SeP>2025-02-26 13:26:24<SeP>2025-02-26 13:51:36<SeP>2025-02-26 14:16:48<SeP>2025-02-26 14:42:00<SeP>2025-02-26 15:07:12<SeP>2025-02-26 15:32:24<SeP>2025-02-26 15:57:36<SeP>2025-02-26 16:22:48<SeP>2025-02-26 16:48:00<SeP>2025-02-26 17:13:12<SeP>2025-02-26 17:38:24<SeP>2025-02-26 18:03:36<SeP>2025-02-26 18:28:48<SeP>2025-02-26 18:54:00<SeP>2025-02-26 19:19:12<SeP>2025-02-26 19:44:24<SeP>2025-02-26 20:09:36<SeP>2025-02-26 20:34:48<SeP>2025-02-26 21:00:00<SeP>2025-02-26 21:25:12<SeP>2025-02-26 21:50:24<SeP>2025-02-26 22:15:36<SeP>2025-02-26 22:40:48<SeP>2025-02-26 23:06:00<SeP>2025-02-26 23:31:12<SeP>2025-02-26 23:56:24<SeP>2025-02-27 00:21:36<SeP>2025-02-27 00:46:48<SeP>2025-02-27 01:12:00<SeP>2025-02-27 01:37:12<SeP>2025-02-27 02:02:24<SeP>2025-02-27 02:27:36<SeP>2025-02-27 02:52:48<SeP>2025-02-27 03:18:00<SeP>2025-02-27 03:43:12<SeP>2025-02-27 04:08:24<SeP>2025-02-27 04:33:36<SeP>2025-02-27 04:58:48<SeP>2025-02-27 05:24:00<SeP>2025-02-27 05:49:12<SeP>2025-02-27 06:14:24<SeP>2025-02-27 06:39:36<SeP>2025-02-27 07:04:48<SeP>2025-02-27 07:30:00<SeP>2025-02-27 07:55:12<SeP>2025-02-27 08:20:24<SeP>2025-02-27 08:45:36<SeP>2025-02-27 09:10:48<SeP>2025-02-27 09:36:00<SeP>2025-02-27 10:01:12<SeP>2025-02-27 10:26:24<SeP>2025-02-27 10:51:36<SeP>2025-02-27 11:16:48<SeP>2025-02-27 11:42:00<SeP>2025-02-27 12:07:12<SeP>2025-02-27 12:32:24<SeP>2025-02-27 12:57:36<SeP>2025-02-27 13:22:48<SeP>2025-02-27 13:48:00<SeP>2025-02-27 14:13:12<SeP>2025-02-27 14:38:24<SeP>2025-02-27 15:03:36<SeP>2025-02-27 15:28:48<SeP>2025-02-27 15:54:00<SeP>2025-02-27 16:19:12<SeP>2025-02-27 16:44:24<SeP>2025-02-27 17:09:36<SeP>2025-02-27 17:34:48<SeP>2025-02-27 18:00:00<SeP>2025-02-27 18:25:12<SeP>2025-02-27 18:50:24<SeP>2025-02-27 19:15:36<SeP>2025-02-27 19:40:48<SeP>2025-02-27 20:06:00<SeP>2025-02-27 20:31:12<SeP>2025-02-27 20:56:24<SeP>2025-02-27 21:21:36<SeP>2025-02-27 21:46:48<SeP>2025-02-27 22:12:00<SeP>2025-02-27 22:37:12<SeP>2025-02-27 23:02:24<SeP>2025-02-27 23:27:36<SeP>2025-02-27 23:52:48<SeP>2025-02-28 00:18:00<SeP>2025-02-28 00:43:12<SeP>2025-02-28 01:08:24<SeP>2025-02-28 01:33:36<SeP>2025-02-28 01:58:48<SeP>2025-02-28 02:24:00<SeP>2025-02-28 02:49:12<SeP>2025-02-28 03:14:24<SeP>2025-02-28 03:39:36<SeP>2025-02-28 04:04:48<SeP>2025-02-28 04:30:00<SeP>2025-02-28 04:55:12<SeP>2025-02-28 05:20:24<SeP>2025-02-28 05:45:36<SeP>2025-02-28 06:10:48<SeP>2025-02-28 06:36:00<SeP>2025-02-28 07:01:12<SeP>2025-02-28 07:26:24<SeP>2025-02-28 07:51:36<SeP>2025-02-28 08:16:48<SeP>2025-02-28 08:42:00<SeP>2025-02-28 09:07:12<SeP>2025-02-28 09:32:24<SeP>2025-02-28 09:57:36<SeP>2025-02-28 10:22:48<SeP>2025-02-28 10:48:00<SeP>2025-02-28 11:13:12<SeP>2025-02-28 11:38:24<SeP>2025-02-28 12:03:36<SeP>2025-02-28 12:28:48<SeP>2025-02-28 12:54:00<SeP>2025-02-28 13:19:12<SeP>2025-02-28 13:44:24<SeP>2025-02-28 14:09:36<SeP>2025-02-28 14:34:48<SeP>2025-02-28 15:00:00<SeP>2025-02-28 15:25:12<SeP>2025-02-28 15:50:24<SeP>2025-02-28 16:15:36<SeP>2025-02-28 16:40:48<SeP>2025-02-28 17:06:00<SeP>2025-02-28 17:31:12<SeP>2025-02-28 17:56:24<SeP>2025-02-28 18:21:36<SeP>2025-02-28 18:46:48<SeP>2025-02-28 19:12:00<SeP>2025-02-28 19:37:12<SeP>2025-02-28 20:02:24<SeP>2025-02-28 20:27:36<SeP>2025-02-28 20:52:48<SeP>2025-02-28 21:18:00<SeP>2025-02-28 21:43:12<SeP>2025-02-28 22:08:24<SeP>2025-02-28 22:33:36<SeP>2025-02-28 22:58:48<SeP>2025-02-28 23:24:00<SeP>2025-02-28 23:49:12<SeP>2025-03-01 00:14:24<SeP>2025-03-01 00:39:36<SeP>2025-03-01 01:04:48<SeP>2025-03-01 01:30:00<SeP>2025-03-01 01:55:12<SeP>2025-03-01 02:20:24<SeP>2025-03-01 02:45:36<SeP>2025-03-01 03:10:48<SeP>2025-03-01 03:36:00<SeP>2025-03-01 04:01:12<SeP>2025-03-01 04:26:24<SeP>2025-03-01 04:51:36<SeP>2025-03-01 05:16:48<SeP>2025-03-01 05:42:00<SeP>2025-03-01 06:07:12<SeP>2025-03-01 06:32:24<SeP>2025-03-01 06:57:36<SeP>2025-03-01 07:22:48<SeP>2025-03-01 07:48:00<SeP>2025-03-01 08:13:12<SeP>2025-03-01 08:38:24<SeP>2025-03-01 09:03:36<SeP>2025-03-01 09:28:48<SeP>2025-03-01 09:54:00<SeP>2025-03-01 10:19:12<SeP>2025-03-01 10:44:24<SeP>2025-03-01 11:09:36<SeP>2025-03-01 11:34:48<SeP>2025-03-01 12:00:00<SeP>2025-03-01 12:25:12<SeP>2025-03-01 12:50:24<SeP>2025-03-01 13:15:36<SeP>2025-03-01 13:40:48<SeP>2025-03-01 14:06:00<SeP>2025-03-01 14:31:12<SeP>2025-03-01 14:56:24<SeP>2025-03-01 15:21:36<SeP>2025-03-01 15:46:48<SeP>2025-03-01 16:12:00<SeP>2025-03-01 16:37:12<SeP>2025-03-01 17:02:24<SeP>2025-03-01 17:27:36<SeP>2025-03-01 17:52:48<SeP>2025-03-01 18:18:00<SeP>2025-03-01 18:43:12<SeP>2025-03-01 19:08:24<SeP>2025-03-01 19:33:36<SeP>2025-03-01 19:58:48<SeP>2025-03-01 20:24:00<SeP>2025-03-01 20:49:12<SeP>2025-03-01 21:14:24<SeP>2025-03-01 21:39:36<SeP>2025-03-01 22:04:48<SeP>2025-03-01 22:30:00<SeP>2025-03-01 22:55:12<SeP>2025-03-01 23:20:24<SeP>2025-03-01 23:45:36<SeP>2025-03-02 00:10:48<SeP>2025-03-02 00:36:00<SeP>2025-03-02 01:01:12<SeP>2025-03-02 01:26:24<SeP>2025-03-02 01:51:36<SeP>2025-03-02 02:16:48<SeP>2025-03-02 02:42:00<SeP>2025-03-02 03:07:12<SeP>2025-03-02 03:32:24<SeP>2025-03-02 03:57:36<SeP>2025-03-02 04:22:48<SeP>2025-03-02 04:48:00<SeP>2025-03-02 05:13:12<SeP>2025-03-02 05:38:24<SeP>2025-03-02 06:03:36<SeP>2025-03-02 06:28:48<SeP>2025-03-02 06:54:00<SeP>2025-03-02 07:19:12<SeP>2025-03-02 07:44:24<SeP>2025-03-02 08:09:36<SeP>2025-03-02 08:34:48<SeP>2025-03-02 09:00:00<SeP>2025-03-02 09:25:12<SeP>2025-03-02 09:50:24<SeP>2025-03-02 10:15:36<SeP>2025-03-02 10:40:48<SeP>2025-03-02 11:06:00<SeP>2025-03-02 11:31:12<SeP>2025-03-02 11:56:24<SeP>2025-03-02 12:21:36<SeP>2025-03-02 12:46:48<SeP>2025-03-02 13:12:00<SeP>2025-03-02 13:37:12<SeP>2025-03-02 14:02:24<SeP>2025-03-02 14:27:36<SeP>2025-03-02 14:52:48<SeP>2025-03-02 15:18:00<SeP>2025-03-02 15:43:12<SeP>2025-03-02 16:08:24<SeP>2025-03-02 16:33:36<SeP>2025-03-02 16:58:48<SeP>2025-03-02 17:24:00<SeP>2025-03-02 17:49:12<SeP>2025-03-02 18:14:24<SeP>2025-03-02 18:39:36<SeP>2025-03-02 19:04:48<SeP>2025-03-02 19:30:00<SeP>2025-03-02 19:55:12<SeP>2025-03-02 20:20:24<SeP>2025-03-02 20:45:36<SeP>2025-03-02 21:10:48<SeP>2025-03-02 21:36:00<SeP>2025-03-02 22:01:12<SeP>2025-03-02 22:26:24<SeP>2025-03-02 22:51:36<SeP>2025-03-02 23:16:48<SeP>2025-03-02 23:42:00<SeP>2025-03-03 00:07:12<SeP>2025-03-03 00:32:24<SeP>2025-03-03 00:57:36<SeP>2025-03-03 01:22:48<SeP>2025-03-03 01:48:00<SeP>2025-03-03 02:13:12<SeP>2025-03-03 02:38:24<SeP>2025-03-03 03:03:36<SeP>2025-03-03 03:28:48<SeP>2025-03-03 03:54:00<SeP>2025-03-03 04:19:12<SeP>2025-03-03 04:44:24<SeP>2025-03-03 05:09:36<SeP>2025-03-03 05:34:48<SeP>2025-03-03 06:00:00<SeP>2025-03-03 06:25:12<SeP>2025-03-03 06:50:24<SeP>2025-03-03 07:15:36<SeP>2025-03-03 07:40:48<SeP>2025-03-03 08:06:00<SeP>2025-03-03 08:31:12<SeP>2025-03-03 08:56:24<SeP>2025-03-03 09:21:36<SeP>2025-03-03 09:46:48<SeP>2025-03-03 10:12:00<SeP>2025-03-03 10:37:12<SeP>2025-03-03 11:02:24<SeP>2025-03-03 11:27:36<SeP>2025-03-03 11:52:48<SeP>2025-03-03 12:18:00<SeP>2025-03-03 12:43:12<SeP>2025-03-03 13:08:24<SeP>2025-03-03 13:33:36<SeP>2025-03-03 13:58:48<SeP>2025-03-03 14:24:00<SeP>2025-03-03 14:49:12<SeP>2025-03-03 15:14:24<SeP>2025-03-03 15:39:36<SeP>2025-03-03 16:04:48<SeP>2025-03-03 16:30:00<SeP>2025-03-03 16:55:12<SeP>2025-03-03 17:20:24<SeP>2025-03-03 17:45:36<SeP>2025-03-03 18:10:48<SeP>2025-03-03 18:36:00<SeP>2025-03-03 19:01:12<SeP>2025-03-03 19:26:24<SeP>2025-03-03 19:51:36<SeP>2025-03-03 20:16:48<SeP>2025-03-03 20:42:00<SeP>2025-03-03 21:07:12<SeP>2025-03-03 21:32:24<SeP>2025-03-03 21:57:36<SeP>2025-03-03 22:22:48<SeP>2025-03-03 22:48:00<SeP>2025-03-03 23:13:12<SeP>2025-03-03 23:38:24<SeP>2025-03-04 00:03:36<SeP>2025-03-04 00:28:48<SeP>2025-03-04 00:54:00<SeP>2025-03-04 01:19:12<SeP>2025-03-04 01:44:24<SeP>2025-03-04 02:09:36<SeP>2025-03-04 02:34:48<SeP>2025-03-04 03:00:00<SeP>2025-03-04 03:25:12<SeP>2025-03-04 03:50:24<SeP>2025-03-04 04:15:36<SeP>2025-03-04 04:40:48<SeP>2025-03-04 05:06:00<SeP>2025-03-04 05:31:12<SeP>2025-03-04 05:56:24<SeP>2025-03-04 06:21:36<SeP>2025-03-04 06:46:48<SeP>2025-03-04 07:12:00<SeP>2025-03-04 07:37:12<SeP>2025-03-04 08:02:24<SeP>2025-03-04 08:27:36<SeP>2025-03-04 08:52:48<SeP>2025-03-04 09:18:00<SeP>2025-03-04 09:43:12<SeP>2025-03-04 10:08:24<SeP>2025-03-04 10:33:36<SeP>2025-03-04 10:58:48<SeP>2025-03-04 11:24:00<SeP>2025-03-04 11:49:12<SeP>2025-03-04 12:14:24<SeP>2025-03-04 12:39:36<SeP>2025-03-04 13:04:48<SeP>2025-03-04 13:30:00<SeP>2025-03-04 13:55:12<SeP>2025-03-04 14:20:24<SeP>2025-03-04 14:45:36<SeP>2025-03-04 15:10:48<SeP>2025-03-04 15:36:00<SeP>2025-03-04 16:01:12<SeP>2025-03-04 16:26:24<SeP>2025-03-04 16:51:36<SeP>2025-03-04 17:16:48<SeP>2025-03-04 17:42:00<SeP>2025-03-04 18:07:12<SeP>2025-03-04 18:32:24<SeP>2025-03-04 18:57:36<SeP>2025-03-04 19:22:48<SeP>2025-03-04 19:48:00<SeP>2025-03-04 20:13:12<SeP>2025-03-04 20:38:24<SeP>2025-03-04 21:03:36<SeP>2025-03-04 21:28:48<SeP>2025-03-04 21:54:00<SeP>2025-03-04 22:19:12<SeP>2025-03-04 22:44:24<SeP>2025-03-04 23:09:36<SeP>2025-03-04 23:34:48";
  const itemLabel       = "Ataques";
  const itemData        = "65<SeP>56<SeP>23<SeP>21<SeP>20<SeP>3<SeP>10<SeP>2<SeP>4<SeP>2<SeP>44<SeP>43<SeP>85<SeP>106<SeP>19<SeP>94<SeP>18<SeP>31<SeP>11<SeP>8<SeP>10<SeP>6<SeP>17<SeP>76<SeP>56<SeP>23<SeP>72<SeP>30<SeP>4<SeP>10<SeP>7<SeP>20<SeP>46<SeP>4<SeP>17<SeP>18<SeP>17<SeP>18<SeP>12<SeP>9<SeP>25<SeP>15<SeP>15<SeP>21<SeP>13<SeP>6<SeP>8<SeP>19<SeP>95<SeP>79<SeP>91<SeP>68<SeP>59<SeP>99<SeP>23<SeP>6<SeP>4<SeP>307<SeP>7<SeP>11<SeP>4<SeP>13<SeP>18<SeP>8<SeP>10<SeP>28<SeP>157<SeP>74<SeP>9<SeP>12<SeP>61<SeP>59<SeP>286<SeP>37<SeP>82<SeP>73<SeP>20<SeP>27<SeP>13<SeP>27<SeP>46<SeP>56<SeP>23<SeP>22<SeP>19<SeP>26<SeP>56<SeP>44<SeP>32<SeP>55<SeP>27<SeP>12<SeP>105<SeP>68<SeP>68<SeP>66<SeP>19<SeP>6<SeP>9<SeP>5<SeP>5<SeP>10<SeP>10<SeP>9<SeP>10<SeP>7<SeP>16<SeP>14<SeP>62<SeP>50<SeP>15<SeP>8<SeP>20<SeP>61<SeP>22<SeP>43<SeP>66<SeP>60<SeP>80<SeP>22<SeP>22<SeP>20<SeP>20<SeP>29<SeP>29<SeP>42<SeP>45<SeP>72<SeP>35<SeP>96<SeP>131<SeP>9<SeP>2<SeP>7<SeP>7<SeP>7<SeP>71<SeP>115<SeP>21<SeP>162<SeP>94<SeP>9<SeP>21<SeP>37<SeP>7<SeP>14<SeP>55<SeP>278<SeP>6<SeP>9<SeP>19<SeP>23<SeP>9<SeP>10<SeP>14<SeP>15<SeP>21<SeP>18<SeP>14<SeP>5<SeP>8<SeP>11<SeP>20<SeP>4<SeP>5<SeP>17<SeP>8<SeP>12<SeP>19<SeP>53<SeP>53<SeP>16<SeP>8<SeP>7<SeP>8<SeP>5<SeP>4<SeP>13<SeP>3<SeP>5<SeP>2<SeP>1<SeP>17<SeP>44<SeP>20<SeP>4<SeP>5<SeP>12<SeP>17<SeP>24<SeP>40<SeP>13<SeP>7<SeP>4<SeP>3<SeP>25<SeP>39<SeP>21<SeP>1<SeP>4<SeP>3<SeP>7<SeP>29<SeP>28<SeP>8<SeP>64<SeP>86<SeP>38<SeP>3<SeP>21<SeP>34<SeP>36<SeP>25<SeP>31<SeP>17<SeP>14<SeP>24<SeP>16<SeP>3<SeP>3<SeP>3<SeP>20<SeP>101<SeP>74<SeP>48<SeP>23<SeP>1<SeP>4<SeP>35<SeP>35<SeP>53<SeP>130<SeP>162<SeP>168<SeP>15<SeP>7<SeP>8<SeP>7<SeP>11<SeP>55<SeP>43<SeP>4<SeP>9<SeP>6<SeP>2<SeP>1<SeP>4<SeP>301<SeP>5<SeP>2<SeP>2<SeP>1<SeP>10<SeP>5<SeP>9<SeP>4<SeP>3<SeP>3<SeP>8<SeP>5<SeP>32<SeP>36<SeP>69<SeP>66<SeP>52<SeP>13<SeP>5<SeP>6<SeP>7<SeP>6<SeP>5<SeP>63<SeP>7<SeP>6<SeP>5<SeP>23<SeP>5<SeP>7<SeP>62<SeP>75<SeP>39<SeP>16<SeP>11<SeP>12<SeP>9<SeP>27<SeP>40<SeP>34<SeP>14<SeP>6<SeP>7<SeP>33<SeP>107<SeP>141<SeP>26<SeP>7<SeP>30<SeP>29<SeP>7<SeP>12<SeP>6<SeP>6<SeP>7<SeP>26<SeP>34<SeP>19<SeP>9<SeP>17<SeP>10<SeP>11<SeP>9<SeP>9<SeP>13<SeP>4<SeP>10<SeP>8<SeP>8<SeP>35<SeP>223<SeP>138<SeP>6<SeP>13<SeP>76<SeP>30<SeP>10<SeP>11<SeP>9<SeP>13<SeP>24<SeP>34<SeP>15<SeP>13<SeP>17<SeP>6<SeP>6<SeP>8<SeP>37<SeP>33<SeP>36<SeP>32<SeP>96<SeP>62<SeP>16<SeP>11<SeP>10<SeP>13<SeP>6<SeP>7<SeP>8<SeP>31<SeP>93<SeP>77<SeP>255<SeP>6<SeP>6<SeP>7<SeP>5<SeP>9<SeP>5<SeP>6<SeP>6<SeP>14<SeP>2<SeP>2<SeP>3<SeP>6<SeP>4<SeP>63<SeP>87<SeP>53<SeP>50<SeP>32<SeP>26<SeP>20<SeP>5<SeP>7<SeP>5<SeP>7<SeP>4<SeP>29<SeP>18<SeP>40<SeP>9<SeP>1<SeP>5<SeP>11<SeP>12<SeP>37<SeP>22<SeP>33<SeP>4<SeP>2<SeP>3<SeP>2<SeP>18<SeP>38<SeP>28<SeP>6<SeP>246<SeP>8";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>India<SeP>Hong Kong<SeP>Romania<SeP>Russia<SeP>Singapore<SeP>France<SeP>Germany";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "4236<SeP>2770<SeP>1310<SeP>1097<SeP>1048<SeP>996<SeP>880<SeP>705<SeP>640<SeP>576";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>United States<SeP>Hong Kong<SeP>India<SeP>Russia<SeP>Taiwan<SeP>Germany<SeP>Singapore<SeP>Canada<SeP>South Korea";
  const itemLabel   = "Scans";
  const itemData    = "2744<SeP>830<SeP>696<SeP>526<SeP>332<SeP>233<SeP>190<SeP>162<SeP>160<SeP>156";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "United States<SeP>China<SeP>Taiwan<SeP>Romania<SeP>India<SeP>France<SeP>Russia<SeP>Singapore<SeP>Indonesia<SeP>Vietnam";
  const itemLabel   = "Attacks";
  const itemData    = "1940<SeP>1492<SeP>1077<SeP>889<SeP>571<SeP>565<SeP>548<SeP>543<SeP>542<SeP>421";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "4134<SeP>14061<SeP>3462<SeP>47890<SeP>4837<SeP>207566<SeP>16276<SeP>136052<SeP>9829<SeP>396982";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "1970<SeP>1208<SeP>1026<SeP>900<SeP>660<SeP>621<SeP>545<SeP>381<SeP>379<SeP>355";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>9269<SeP>701<SeP>207566<SeP>3462<SeP>14061<SeP>4773<SeP>50580";
  const itemLabel   = "Scans";
  const itemData    = "1649<SeP>554<SeP>370<SeP>311<SeP>311<SeP>283<SeP>202<SeP>130<SeP>128<SeP>122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>3462<SeP>47890<SeP>16276<SeP>136052<SeP>207566<SeP>4134<SeP>45102<SeP>25820<SeP>396982";
  const itemLabel   = "Atacks";
  const itemData    = "1078<SeP>824<SeP>782<SeP>511<SeP>380<SeP>338<SeP>321<SeP>312<SeP>302<SeP>298";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>India<SeP>Hong Kong<SeP>Romania<SeP>Russia<SeP>Singapore<SeP>France<SeP>Germany";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "4236<SeP>2770<SeP>1310<SeP>1097<SeP>1048<SeP>996<SeP>880<SeP>705<SeP>640<SeP>576";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>United States<SeP>Hong Kong<SeP>India<SeP>Russia<SeP>Taiwan<SeP>Germany<SeP>Singapore<SeP>Canada<SeP>South Korea";
  const itemLabel   = "Escaneos";
  const itemData    = "2744<SeP>830<SeP>696<SeP>526<SeP>332<SeP>233<SeP>190<SeP>162<SeP>160<SeP>156";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "United States<SeP>China<SeP>Taiwan<SeP>Romania<SeP>India<SeP>France<SeP>Russia<SeP>Singapore<SeP>Indonesia<SeP>Vietnam";
  const itemLabel   = "Ataques";
  const itemData    = "1940<SeP>1492<SeP>1077<SeP>889<SeP>571<SeP>565<SeP>548<SeP>543<SeP>542<SeP>421";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "4134<SeP>14061<SeP>3462<SeP>47890<SeP>4837<SeP>207566<SeP>16276<SeP>136052<SeP>9829<SeP>396982";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "1970<SeP>1208<SeP>1026<SeP>900<SeP>660<SeP>621<SeP>545<SeP>381<SeP>379<SeP>355";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>9269<SeP>701<SeP>207566<SeP>3462<SeP>14061<SeP>4773<SeP>50580";
  const itemLabel   = "Escaneos";
  const itemData    = "1649<SeP>554<SeP>370<SeP>311<SeP>311<SeP>283<SeP>202<SeP>130<SeP>128<SeP>122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>3462<SeP>47890<SeP>16276<SeP>136052<SeP>207566<SeP>4134<SeP>45102<SeP>25820<SeP>396982";
  const itemLabel   = "Ataques";
  const itemData    = "1078<SeP>824<SeP>782<SeP>511<SeP>380<SeP>338<SeP>321<SeP>312<SeP>302<SeP>298";
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
