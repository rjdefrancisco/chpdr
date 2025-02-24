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
  document.getElementById("last-updated").innerHTML = "2025-2-24";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "34.7";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.7";
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
  const metricData    = "2811821";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "543103";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2268718";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "138052";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1425701";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "843017";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53308";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "246508";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "596509";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42723";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2811821";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "543103";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2268718";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "138052";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1425701";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "843017";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53308";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "246508";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "596509";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42723";
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
  const incomingData = "2811821<SeP>543103<SeP>2268718<SeP>138052";
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
  const incomingData = "2268718<SeP>1425701<SeP>843017<SeP>53308";
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
  const incomingData = "843017<SeP>246508<SeP>596509<SeP>42723";
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
  const incomingData = "2556573<SeP>253857<SeP>2302716";
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
  const incomingData = "388187<SeP>145<SeP>388042<SeP>225";
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
  const incomingData = "2811821<SeP>543103<SeP>2268718<SeP>138052";
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
  const incomingData = "2268718<SeP>1425701<SeP>843017<SeP>53308";
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
  const incomingData = "843017<SeP>246508<SeP>596509<SeP>42723";
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
  const incomingData = "2556573<SeP>253857<SeP>2302716";
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
  const incomingData = "388187<SeP>145<SeP>388042<SeP>225";
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
  const column3Data   = "218323<SeP>199879<SeP>12449<SeP>12209<SeP>9705<SeP>9402<SeP>6441<SeP>5593<SeP>4622<SeP>3467";
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
  const column2Data  = "209580<SeP>43020<SeP>485<SeP>446<SeP>427<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2384616<SeP>427205";
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
  const column3Data   = "218323<SeP>199879<SeP>12449<SeP>12209<SeP>9705<SeP>9402<SeP>6441<SeP>5593<SeP>4622<SeP>3467";
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
  const column2Data  = "209580<SeP>43020<SeP>485<SeP>446<SeP>427<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2384616<SeP>427205";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-24";

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
        "name": "traffic between 2023-07-26 and 2025-02-22"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          389763,50
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
        "name": "scans between 2023-07-26 and 2025-02-22"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          224222,30,
          389763,50
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
        "name": "attacks between 2023-07-26 and 2025-02-22"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165541,23,
          389763,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-24";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-22"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          389763,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-22"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          224222,30,
          389763,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-22"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165541,23,
          389763,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:44:33<SeP>2023-07-28 21:29:06<SeP>2023-07-30 08:13:39<SeP>2023-07-31 18:58:12<SeP>2023-08-02 05:42:45<SeP>2023-08-03 16:27:18<SeP>2023-08-05 03:11:51<SeP>2023-08-06 13:56:24<SeP>2023-08-08 00:40:57<SeP>2023-08-09 11:25:30<SeP>2023-08-10 22:10:03<SeP>2023-08-12 08:54:36<SeP>2023-08-13 19:39:09<SeP>2023-08-15 06:23:42<SeP>2023-08-16 17:08:15<SeP>2023-08-18 03:52:48<SeP>2023-08-19 14:37:21<SeP>2023-08-21 01:21:54<SeP>2023-08-22 12:06:27<SeP>2023-08-23 22:51:00<SeP>2023-08-25 09:35:33<SeP>2023-08-26 20:20:06<SeP>2023-08-28 07:04:39<SeP>2023-08-29 17:49:12<SeP>2023-08-31 04:33:45<SeP>2023-09-01 15:18:18<SeP>2023-09-03 02:02:51<SeP>2023-09-04 12:47:24<SeP>2023-09-05 23:31:57<SeP>2023-09-07 10:16:30<SeP>2023-09-08 21:01:03<SeP>2023-09-10 07:45:36<SeP>2023-09-11 18:30:09<SeP>2023-09-13 05:14:42<SeP>2023-09-14 15:59:15<SeP>2023-09-16 02:43:48<SeP>2023-09-17 13:28:21<SeP>2023-09-19 00:12:54<SeP>2023-09-20 10:57:27<SeP>2023-09-21 21:42:00<SeP>2023-09-23 08:26:33<SeP>2023-09-24 19:11:06<SeP>2023-09-26 05:55:39<SeP>2023-09-27 16:40:12<SeP>2023-09-29 03:24:45<SeP>2023-09-30 14:09:18<SeP>2023-10-02 00:53:51<SeP>2023-10-03 11:38:24<SeP>2023-10-04 22:22:57<SeP>2023-10-06 09:07:30<SeP>2023-10-07 19:52:03<SeP>2023-10-09 06:36:36<SeP>2023-10-10 17:21:09<SeP>2023-10-12 04:05:42<SeP>2023-10-13 14:50:15<SeP>2023-10-15 01:34:48<SeP>2023-10-16 12:19:21<SeP>2023-10-17 23:03:54<SeP>2023-10-19 09:48:27<SeP>2023-10-20 20:33:00<SeP>2023-10-22 07:17:33<SeP>2023-10-23 18:02:06<SeP>2023-10-25 04:46:39<SeP>2023-10-26 15:31:12<SeP>2023-10-28 02:15:45<SeP>2023-10-29 13:00:18<SeP>2023-10-30 23:44:51<SeP>2023-11-01 10:29:24<SeP>2023-11-02 21:13:57<SeP>2023-11-04 07:58:30<SeP>2023-11-05 17:43:03<SeP>2023-11-07 04:27:36<SeP>2023-11-08 15:12:09<SeP>2023-11-10 01:56:42<SeP>2023-11-11 12:41:15<SeP>2023-11-12 23:25:48<SeP>2023-11-14 10:10:21<SeP>2023-11-15 20:54:54<SeP>2023-11-17 07:39:27<SeP>2023-11-18 18:24:00<SeP>2023-11-20 05:08:33<SeP>2023-11-21 15:53:06<SeP>2023-11-23 02:37:39<SeP>2023-11-24 13:22:12<SeP>2023-11-26 00:06:45<SeP>2023-11-27 10:51:18<SeP>2023-11-28 21:35:51<SeP>2023-11-30 08:20:24<SeP>2023-12-01 19:04:57<SeP>2023-12-03 05:49:30<SeP>2023-12-04 16:34:03<SeP>2023-12-06 03:18:36<SeP>2023-12-07 14:03:09<SeP>2023-12-09 00:47:42<SeP>2023-12-10 11:32:15<SeP>2023-12-11 22:16:48<SeP>2023-12-13 09:01:21<SeP>2023-12-14 19:45:54<SeP>2023-12-16 06:30:27<SeP>2023-12-17 17:15:00<SeP>2023-12-19 03:59:33<SeP>2023-12-20 14:44:06<SeP>2023-12-22 01:28:39<SeP>2023-12-23 12:13:12<SeP>2023-12-24 22:57:45<SeP>2023-12-26 09:42:18<SeP>2023-12-27 20:26:51<SeP>2023-12-29 07:11:24<SeP>2023-12-30 17:55:57<SeP>2024-01-01 04:40:30<SeP>2024-01-02 15:25:03<SeP>2024-01-04 02:09:36<SeP>2024-01-05 12:54:09<SeP>2024-01-06 23:38:42<SeP>2024-01-08 10:23:15<SeP>2024-01-09 21:07:48<SeP>2024-01-11 07:52:21<SeP>2024-01-12 18:36:54<SeP>2024-01-14 05:21:27<SeP>2024-01-15 16:06:00<SeP>2024-01-17 02:50:33<SeP>2024-01-18 13:35:06<SeP>2024-01-20 00:19:39<SeP>2024-01-21 11:04:12<SeP>2024-01-22 21:48:45<SeP>2024-01-24 08:33:18<SeP>2024-01-25 19:17:51<SeP>2024-01-27 06:02:24<SeP>2024-01-28 16:46:57<SeP>2024-01-30 03:31:30<SeP>2024-01-31 14:16:03<SeP>2024-02-02 01:00:36<SeP>2024-02-03 11:45:09<SeP>2024-02-04 22:29:42<SeP>2024-02-06 09:14:15<SeP>2024-02-07 19:58:48<SeP>2024-02-09 06:43:21<SeP>2024-02-10 17:27:54<SeP>2024-02-12 04:12:27<SeP>2024-02-13 14:57:00<SeP>2024-02-15 01:41:33<SeP>2024-02-16 12:26:06<SeP>2024-02-17 23:10:39<SeP>2024-02-19 09:55:12<SeP>2024-02-20 20:39:45<SeP>2024-02-22 07:24:18<SeP>2024-02-23 18:08:51<SeP>2024-02-25 04:53:24<SeP>2024-02-26 15:37:57<SeP>2024-02-28 02:22:30<SeP>2024-02-29 13:07:03<SeP>2024-03-01 23:51:36<SeP>2024-03-03 10:36:09<SeP>2024-03-04 21:20:42<SeP>2024-03-06 08:05:15<SeP>2024-03-07 18:49:48<SeP>2024-03-09 05:34:21<SeP>2024-03-10 17:18:54<SeP>2024-03-12 04:03:27<SeP>2024-03-13 14:48:00<SeP>2024-03-15 01:32:33<SeP>2024-03-16 12:17:06<SeP>2024-03-17 23:01:39<SeP>2024-03-19 09:46:12<SeP>2024-03-20 20:30:45<SeP>2024-03-22 07:15:18<SeP>2024-03-23 17:59:51<SeP>2024-03-25 04:44:24<SeP>2024-03-26 15:28:57<SeP>2024-03-28 02:13:30<SeP>2024-03-29 12:58:03<SeP>2024-03-30 23:42:36<SeP>2024-04-01 10:27:09<SeP>2024-04-02 21:11:42<SeP>2024-04-04 07:56:15<SeP>2024-04-05 18:40:48<SeP>2024-04-07 05:25:21<SeP>2024-04-08 16:09:54<SeP>2024-04-10 02:54:27<SeP>2024-04-11 13:39:00<SeP>2024-04-13 00:23:33<SeP>2024-04-14 11:08:06<SeP>2024-04-15 21:52:39<SeP>2024-04-17 08:37:12<SeP>2024-04-18 19:21:45<SeP>2024-04-20 06:06:18<SeP>2024-04-21 16:50:51<SeP>2024-04-23 03:35:24<SeP>2024-04-24 14:19:57<SeP>2024-04-26 01:04:30<SeP>2024-04-27 11:49:03<SeP>2024-04-28 22:33:36<SeP>2024-04-30 09:18:09<SeP>2024-05-01 20:02:42<SeP>2024-05-03 06:47:15<SeP>2024-05-04 17:31:48<SeP>2024-05-06 04:16:21<SeP>2024-05-07 15:00:54<SeP>2024-05-09 01:45:27<SeP>2024-05-10 12:30:00<SeP>2024-05-11 23:14:33<SeP>2024-05-13 09:59:06<SeP>2024-05-14 20:43:39<SeP>2024-05-16 07:28:12<SeP>2024-05-17 18:12:45<SeP>2024-05-19 04:57:18<SeP>2024-05-20 15:41:51<SeP>2024-05-22 02:26:24<SeP>2024-05-23 13:10:57<SeP>2024-05-24 23:55:30<SeP>2024-05-26 10:40:03<SeP>2024-05-27 21:24:36<SeP>2024-05-29 08:09:09<SeP>2024-05-30 18:53:42<SeP>2024-06-01 05:38:15<SeP>2024-06-02 16:22:48<SeP>2024-06-04 03:07:21<SeP>2024-06-05 13:51:54<SeP>2024-06-07 00:36:27<SeP>2024-06-08 11:21:00<SeP>2024-06-09 22:05:33<SeP>2024-06-11 08:50:06<SeP>2024-06-12 19:34:39<SeP>2024-06-14 06:19:12<SeP>2024-06-15 17:03:45<SeP>2024-06-17 03:48:18<SeP>2024-06-18 14:32:51<SeP>2024-06-20 01:17:24<SeP>2024-06-21 12:01:57<SeP>2024-06-22 22:46:30<SeP>2024-06-24 09:31:03<SeP>2024-06-25 20:15:36<SeP>2024-06-27 07:00:09<SeP>2024-06-28 17:44:42<SeP>2024-06-30 04:29:15<SeP>2024-07-01 15:13:48<SeP>2024-07-03 01:58:21<SeP>2024-07-04 12:42:54<SeP>2024-07-05 23:27:27<SeP>2024-07-07 10:12:00<SeP>2024-07-08 20:56:33<SeP>2024-07-10 07:41:06<SeP>2024-07-11 18:25:39<SeP>2024-07-13 05:10:12<SeP>2024-07-14 15:54:45<SeP>2024-07-16 02:39:18<SeP>2024-07-17 13:23:51<SeP>2024-07-19 00:08:24<SeP>2024-07-20 10:52:57<SeP>2024-07-21 21:37:30<SeP>2024-07-23 08:22:03<SeP>2024-07-24 19:06:36<SeP>2024-07-26 05:51:09<SeP>2024-07-27 16:35:42<SeP>2024-07-29 03:20:15<SeP>2024-07-30 14:04:48<SeP>2024-08-01 00:49:21<SeP>2024-08-02 11:33:54<SeP>2024-08-03 22:18:27<SeP>2024-08-05 09:03:00<SeP>2024-08-06 19:47:33<SeP>2024-08-08 06:32:06<SeP>2024-08-09 17:16:39<SeP>2024-08-11 04:01:12<SeP>2024-08-12 14:45:45<SeP>2024-08-14 01:30:18<SeP>2024-08-15 12:14:51<SeP>2024-08-16 22:59:24<SeP>2024-08-18 09:43:57<SeP>2024-08-19 20:28:30<SeP>2024-08-21 07:13:03<SeP>2024-08-22 17:57:36<SeP>2024-08-24 04:42:09<SeP>2024-08-25 15:26:42<SeP>2024-08-27 02:11:15<SeP>2024-08-28 12:55:48<SeP>2024-08-29 23:40:21<SeP>2024-08-31 10:24:54<SeP>2024-09-01 21:09:27<SeP>2024-09-03 07:54:00<SeP>2024-09-04 18:38:33<SeP>2024-09-06 05:23:06<SeP>2024-09-07 16:07:39<SeP>2024-09-09 02:52:12<SeP>2024-09-10 13:36:45<SeP>2024-09-12 00:21:18<SeP>2024-09-13 11:05:51<SeP>2024-09-14 21:50:24<SeP>2024-09-16 08:34:57<SeP>2024-09-17 19:19:30<SeP>2024-09-19 06:04:03<SeP>2024-09-20 16:48:36<SeP>2024-09-22 03:33:09<SeP>2024-09-23 14:17:42<SeP>2024-09-25 01:02:15<SeP>2024-09-26 11:46:48<SeP>2024-09-27 22:31:21<SeP>2024-09-29 09:15:54<SeP>2024-09-30 20:00:27<SeP>2024-10-02 06:45:00<SeP>2024-10-03 17:29:33<SeP>2024-10-05 04:14:06<SeP>2024-10-06 14:58:39<SeP>2024-10-08 01:43:12<SeP>2024-10-09 12:27:45<SeP>2024-10-10 23:12:18<SeP>2024-10-12 09:56:51<SeP>2024-10-13 20:41:24<SeP>2024-10-15 07:25:57<SeP>2024-10-16 18:10:30<SeP>2024-10-18 04:55:03<SeP>2024-10-19 15:39:36<SeP>2024-10-21 02:24:09<SeP>2024-10-22 13:08:42<SeP>2024-10-23 23:53:15<SeP>2024-10-25 10:37:48<SeP>2024-10-26 21:22:21<SeP>2024-10-28 08:06:54<SeP>2024-10-29 18:51:27<SeP>2024-10-31 05:36:00<SeP>2024-11-01 16:20:33<SeP>2024-11-03 02:05:06<SeP>2024-11-04 12:49:39<SeP>2024-11-05 23:34:12<SeP>2024-11-07 10:18:45<SeP>2024-11-08 21:03:18<SeP>2024-11-10 07:47:51<SeP>2024-11-11 18:32:24<SeP>2024-11-13 05:16:57<SeP>2024-11-14 16:01:30<SeP>2024-11-16 02:46:03<SeP>2024-11-17 13:30:36<SeP>2024-11-19 00:15:09<SeP>2024-11-20 10:59:42<SeP>2024-11-21 21:44:15<SeP>2024-11-23 08:28:48<SeP>2024-11-24 19:13:21<SeP>2024-11-26 05:57:54<SeP>2024-11-27 16:42:27<SeP>2024-11-29 03:27:00<SeP>2024-11-30 14:11:33<SeP>2024-12-02 00:56:06<SeP>2024-12-03 11:40:39<SeP>2024-12-04 22:25:12<SeP>2024-12-06 09:09:45<SeP>2024-12-07 19:54:18<SeP>2024-12-09 06:38:51<SeP>2024-12-10 17:23:24<SeP>2024-12-12 04:07:57<SeP>2024-12-13 14:52:30<SeP>2024-12-15 01:37:03<SeP>2024-12-16 12:21:36<SeP>2024-12-17 23:06:09<SeP>2024-12-19 09:50:42<SeP>2024-12-20 20:35:15<SeP>2024-12-22 07:19:48<SeP>2024-12-23 18:04:21<SeP>2024-12-25 04:48:54<SeP>2024-12-26 15:33:27<SeP>2024-12-28 02:18:00<SeP>2024-12-29 13:02:33<SeP>2024-12-30 23:47:06<SeP>2025-01-01 10:31:39<SeP>2025-01-02 21:16:12<SeP>2025-01-04 08:00:45<SeP>2025-01-05 18:45:18<SeP>2025-01-07 05:29:51<SeP>2025-01-08 16:14:24<SeP>2025-01-10 02:58:57<SeP>2025-01-11 13:43:30<SeP>2025-01-13 00:28:03<SeP>2025-01-14 11:12:36<SeP>2025-01-15 21:57:09<SeP>2025-01-17 08:41:42<SeP>2025-01-18 19:26:15<SeP>2025-01-20 06:10:48<SeP>2025-01-21 16:55:21<SeP>2025-01-23 03:39:54<SeP>2025-01-24 14:24:27<SeP>2025-01-26 01:09:00<SeP>2025-01-27 11:53:33<SeP>2025-01-28 22:38:06<SeP>2025-01-30 09:22:39<SeP>2025-01-31 20:07:12<SeP>2025-02-02 06:51:45<SeP>2025-02-03 17:36:18<SeP>2025-02-05 04:20:51<SeP>2025-02-06 15:05:24<SeP>2025-02-08 01:49:57<SeP>2025-02-09 12:34:30<SeP>2025-02-10 23:19:03<SeP>2025-02-12 10:03:36<SeP>2025-02-13 20:48:09<SeP>2025-02-15 07:32:42<SeP>2025-02-16 18:17:15<SeP>2025-02-18 05:01:48<SeP>2025-02-19 15:46:21<SeP>2025-02-21 02:30:54<SeP>2025-02-22 13:15:27";
  const item1Label       = "Scans";
  const item1Data        = "761<SeP>1464<SeP>1380<SeP>1443<SeP>1253<SeP>1682<SeP>963<SeP>957<SeP>1121<SeP>3373<SeP>1708<SeP>2587<SeP>2129<SeP>2191<SeP>758<SeP>862<SeP>1415<SeP>2142<SeP>1788<SeP>1764<SeP>1356<SeP>935<SeP>850<SeP>1436<SeP>795<SeP>998<SeP>800<SeP>1202<SeP>3243<SeP>923<SeP>817<SeP>1450<SeP>1232<SeP>807<SeP>2780<SeP>1582<SeP>2736<SeP>1821<SeP>1827<SeP>1317<SeP>1283<SeP>1774<SeP>1761<SeP>2138<SeP>1565<SeP>1741<SeP>1540<SeP>1563<SeP>1775<SeP>1678<SeP>2128<SeP>1458<SeP>1671<SeP>1731<SeP>3032<SeP>1383<SeP>1913<SeP>1794<SeP>2362<SeP>1542<SeP>2005<SeP>3270<SeP>1431<SeP>1463<SeP>1461<SeP>1431<SeP>1946<SeP>1517<SeP>1192<SeP>1428<SeP>1304<SeP>2154<SeP>1341<SeP>1041<SeP>1241<SeP>1350<SeP>7760<SeP>1617<SeP>1372<SeP>1329<SeP>1666<SeP>1917<SeP>1106<SeP>6531<SeP>1627<SeP>1643<SeP>945<SeP>1127<SeP>3283<SeP>1350<SeP>881<SeP>1007<SeP>1055<SeP>1031<SeP>3019<SeP>1023<SeP>1342<SeP>3002<SeP>5334<SeP>2548<SeP>1014<SeP>888<SeP>909<SeP>961<SeP>1016<SeP>927<SeP>1059<SeP>3442<SeP>2480<SeP>1462<SeP>1654<SeP>708<SeP>797<SeP>1419<SeP>1267<SeP>1066<SeP>1004<SeP>2247<SeP>1113<SeP>1110<SeP>1032<SeP>1012<SeP>1038<SeP>740<SeP>872<SeP>864<SeP>733<SeP>1114<SeP>830<SeP>916<SeP>785<SeP>896<SeP>870<SeP>644<SeP>802<SeP>855<SeP>867<SeP>862<SeP>839<SeP>817<SeP>790<SeP>784<SeP>1029<SeP>871<SeP>768<SeP>926<SeP>994<SeP>809<SeP>1089<SeP>974<SeP>444<SeP>931<SeP>811<SeP>909<SeP>1235<SeP>955<SeP>1068<SeP>1232<SeP>1077<SeP>927<SeP>891<SeP>958<SeP>809<SeP>827<SeP>1038<SeP>919<SeP>881<SeP>939<SeP>1068<SeP>921<SeP>1103<SeP>936<SeP>1034<SeP>1119<SeP>852<SeP>906<SeP>2197<SeP>1179<SeP>1152<SeP>1056<SeP>957<SeP>1156<SeP>986<SeP>826<SeP>753<SeP>866<SeP>1016<SeP>1002<SeP>798<SeP>1076<SeP>1280<SeP>1099<SeP>1128<SeP>1303<SeP>1170<SeP>1273<SeP>1261<SeP>1283<SeP>1476<SeP>1669<SeP>1694<SeP>1372<SeP>732<SeP>850<SeP>1178<SeP>976<SeP>601<SeP>843<SeP>845<SeP>974<SeP>819<SeP>5327<SeP>3357<SeP>1969<SeP>1258<SeP>1123<SeP>871<SeP>1057<SeP>839<SeP>1018<SeP>962<SeP>1069<SeP>994<SeP>1167<SeP>2309<SeP>1065<SeP>1193<SeP>1114<SeP>1338<SeP>1059<SeP>1034<SeP>983<SeP>1169<SeP>1070<SeP>978<SeP>1156<SeP>1054<SeP>1120<SeP>904<SeP>976<SeP>1318<SeP>1114<SeP>1087<SeP>1188<SeP>1368<SeP>1219<SeP>1488<SeP>1243<SeP>1056<SeP>1166<SeP>1139<SeP>1960<SeP>1266<SeP>1848<SeP>1619<SeP>1378<SeP>2010<SeP>1713<SeP>1107<SeP>1213<SeP>1173<SeP>1142<SeP>1595<SeP>1345<SeP>1099<SeP>1479<SeP>1828<SeP>1361<SeP>1414<SeP>1362<SeP>1449<SeP>1164<SeP>1075<SeP>1342<SeP>1064<SeP>1181<SeP>1285<SeP>1301<SeP>1058<SeP>1636<SeP>1652<SeP>1296<SeP>1640<SeP>1429<SeP>1281<SeP>980<SeP>968<SeP>1009<SeP>1005<SeP>797<SeP>990<SeP>1741<SeP>1186<SeP>1035<SeP>1116<SeP>964<SeP>763<SeP>1093<SeP>1360<SeP>819<SeP>955<SeP>880<SeP>1280<SeP>1523<SeP>1512<SeP>1128<SeP>1118<SeP>892<SeP>1647<SeP>1320<SeP>1005<SeP>1200<SeP>903<SeP>1547<SeP>1040<SeP>969<SeP>1149<SeP>1108<SeP>871<SeP>852<SeP>1129<SeP>1358<SeP>1580<SeP>1371<SeP>1369<SeP>1353<SeP>956<SeP>1153<SeP>1181<SeP>1155<SeP>887<SeP>1229<SeP>974<SeP>1182<SeP>1269<SeP>1504<SeP>1190<SeP>1683<SeP>1293<SeP>1664<SeP>1328<SeP>1301<SeP>1455<SeP>1391<SeP>1335<SeP>1289<SeP>1743<SeP>1426<SeP>1410<SeP>1567<SeP>1251<SeP>1467<SeP>1215<SeP>1281<SeP>1263<SeP>1446<SeP>1633<SeP>1283<SeP>1294<SeP>1225<SeP>1417<SeP>1189<SeP>1259<SeP>1417<SeP>1752<SeP>1719<SeP>1233<SeP>679<SeP>1392<SeP>1843<SeP>1222<SeP>1418<SeP>1204<SeP>1074<SeP>1353<SeP>1398<SeP>1251<SeP>1471<SeP>1455<SeP>1627<SeP>1514<SeP>1482<SeP>1591<SeP>1399<SeP>1283<SeP>1717<SeP>1509<SeP>1323<SeP>1161<SeP>1559<SeP>1772<SeP>1847<SeP>1760<SeP>1722<SeP>1594<SeP>1563<SeP>1619<SeP>1489<SeP>1569<SeP>1594";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "152<SeP>614<SeP>975<SeP>718<SeP>535<SeP>226<SeP>6968<SeP>507<SeP>9184<SeP>969<SeP>377<SeP>1146<SeP>1131<SeP>383<SeP>162<SeP>461<SeP>112<SeP>763<SeP>277<SeP>4147<SeP>7216<SeP>7240<SeP>7203<SeP>7619<SeP>271<SeP>321<SeP>350<SeP>211<SeP>515<SeP>5762<SeP>75<SeP>381<SeP>300<SeP>381<SeP>2419<SeP>9433<SeP>8427<SeP>10293<SeP>9841<SeP>5338<SeP>5930<SeP>8617<SeP>7759<SeP>9340<SeP>7949<SeP>7399<SeP>9328<SeP>7425<SeP>8493<SeP>8601<SeP>6112<SeP>5635<SeP>12720<SeP>6251<SeP>7146<SeP>8201<SeP>10242<SeP>18180<SeP>15951<SeP>9158<SeP>10129<SeP>8216<SeP>7766<SeP>8619<SeP>7946<SeP>8438<SeP>8015<SeP>6146<SeP>6617<SeP>7303<SeP>5657<SeP>3088<SeP>6766<SeP>5455<SeP>6176<SeP>6572<SeP>7649<SeP>4168<SeP>5214<SeP>8023<SeP>4473<SeP>6392<SeP>5651<SeP>4324<SeP>7372<SeP>4666<SeP>5488<SeP>6008<SeP>7211<SeP>21881<SeP>16572<SeP>27610<SeP>8415<SeP>7090<SeP>7051<SeP>11208<SeP>7763<SeP>4299<SeP>6219<SeP>3402<SeP>5479<SeP>7080<SeP>4803<SeP>8892<SeP>6542<SeP>5132<SeP>4217<SeP>5964<SeP>9219<SeP>7888<SeP>7417<SeP>5477<SeP>4425<SeP>10785<SeP>8841<SeP>5382<SeP>3122<SeP>6298<SeP>9103<SeP>5594<SeP>5859<SeP>9764<SeP>5471<SeP>1367<SeP>2437<SeP>1021<SeP>2531<SeP>2060<SeP>1436<SeP>728<SeP>1037<SeP>1277<SeP>1834<SeP>567<SeP>1287<SeP>1159<SeP>1006<SeP>885<SeP>1025<SeP>1513<SeP>1234<SeP>1102<SeP>1691<SeP>2060<SeP>4239<SeP>11403<SeP>8350<SeP>7307<SeP>7501<SeP>9357<SeP>6169<SeP>8839<SeP>11044<SeP>9267<SeP>12928<SeP>9111<SeP>10635<SeP>9499<SeP>12144<SeP>10275<SeP>8000<SeP>3894<SeP>7630<SeP>13526<SeP>16902<SeP>6465<SeP>8096<SeP>10811<SeP>17287<SeP>6941<SeP>5880<SeP>6382<SeP>7507<SeP>25443<SeP>8051<SeP>8334<SeP>11655<SeP>4444<SeP>6992<SeP>4832<SeP>15948<SeP>5110<SeP>6375<SeP>14434<SeP>7114<SeP>8001<SeP>7061<SeP>5449<SeP>3533<SeP>7080<SeP>7512<SeP>4612<SeP>6495<SeP>8144<SeP>5704<SeP>19442<SeP>7873<SeP>6543<SeP>5882<SeP>8067<SeP>10425<SeP>7043<SeP>3286<SeP>4588<SeP>5061<SeP>3901<SeP>4342<SeP>3076<SeP>631<SeP>110<SeP>635<SeP>610<SeP>577<SeP>740<SeP>361<SeP>648<SeP>1237<SeP>1247<SeP>3146<SeP>22955<SeP>534<SeP>3481<SeP>3706<SeP>2840<SeP>7246<SeP>2983<SeP>4254<SeP>2437<SeP>3853<SeP>2787<SeP>2923<SeP>4398<SeP>2801<SeP>2350<SeP>3502<SeP>2045<SeP>1635<SeP>2146<SeP>1548<SeP>941<SeP>1368<SeP>1247<SeP>770<SeP>1700<SeP>26791<SeP>1767<SeP>4076<SeP>3899<SeP>2166<SeP>3669<SeP>2699<SeP>1665<SeP>3840<SeP>2148<SeP>3767<SeP>2368<SeP>2964<SeP>3555<SeP>4313<SeP>5407<SeP>4712<SeP>4432<SeP>2813<SeP>2695<SeP>4127<SeP>3882<SeP>6868<SeP>8208<SeP>3719<SeP>2270<SeP>3260<SeP>3375<SeP>4640<SeP>3143<SeP>2865<SeP>2374<SeP>4998<SeP>5052<SeP>3058<SeP>6055<SeP>4218<SeP>6156<SeP>4543<SeP>5378<SeP>5007<SeP>22110<SeP>5621<SeP>10669<SeP>1741<SeP>3241<SeP>3859<SeP>3646<SeP>5290<SeP>3421<SeP>4748<SeP>4581<SeP>4795<SeP>3107<SeP>3876<SeP>2163<SeP>1533<SeP>2060<SeP>3452<SeP>2210<SeP>3452<SeP>3357<SeP>4467<SeP>3345<SeP>3244<SeP>4502<SeP>3328<SeP>3103<SeP>4894<SeP>7674<SeP>6114<SeP>5485<SeP>5009<SeP>4764<SeP>3554<SeP>3545<SeP>4620<SeP>5503<SeP>5278<SeP>4389<SeP>4390<SeP>2066<SeP>669<SeP>2015<SeP>1664<SeP>822<SeP>1413<SeP>1740<SeP>1123<SeP>2016<SeP>4071<SeP>5262<SeP>5971<SeP>33986<SeP>4840<SeP>5811<SeP>22649<SeP>5276<SeP>5404<SeP>5834<SeP>4216<SeP>24577<SeP>4956<SeP>5189<SeP>4793<SeP>5477<SeP>7629<SeP>27562<SeP>4689<SeP>3526<SeP>4192<SeP>3947<SeP>6436<SeP>3507<SeP>3853<SeP>2931<SeP>4187<SeP>5555<SeP>4624<SeP>18071<SeP>5401<SeP>6305<SeP>5623<SeP>1344<SeP>3459<SeP>3982<SeP>4820<SeP>3408<SeP>3591<SeP>3113<SeP>3295<SeP>3501<SeP>3738<SeP>5745<SeP>8551<SeP>10144<SeP>8626<SeP>9055<SeP>7659<SeP>7214<SeP>4968<SeP>5218<SeP>3728<SeP>25409<SeP>3718<SeP>3134<SeP>3959<SeP>10568<SeP>5652<SeP>4883<SeP>3376<SeP>5046<SeP>3414<SeP>4882<SeP>9253<SeP>8763";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:44:33<SeP>2023-07-28 21:29:06<SeP>2023-07-30 08:13:39<SeP>2023-07-31 18:58:12<SeP>2023-08-02 05:42:45<SeP>2023-08-03 16:27:18<SeP>2023-08-05 03:11:51<SeP>2023-08-06 13:56:24<SeP>2023-08-08 00:40:57<SeP>2023-08-09 11:25:30<SeP>2023-08-10 22:10:03<SeP>2023-08-12 08:54:36<SeP>2023-08-13 19:39:09<SeP>2023-08-15 06:23:42<SeP>2023-08-16 17:08:15<SeP>2023-08-18 03:52:48<SeP>2023-08-19 14:37:21<SeP>2023-08-21 01:21:54<SeP>2023-08-22 12:06:27<SeP>2023-08-23 22:51:00<SeP>2023-08-25 09:35:33<SeP>2023-08-26 20:20:06<SeP>2023-08-28 07:04:39<SeP>2023-08-29 17:49:12<SeP>2023-08-31 04:33:45<SeP>2023-09-01 15:18:18<SeP>2023-09-03 02:02:51<SeP>2023-09-04 12:47:24<SeP>2023-09-05 23:31:57<SeP>2023-09-07 10:16:30<SeP>2023-09-08 21:01:03<SeP>2023-09-10 07:45:36<SeP>2023-09-11 18:30:09<SeP>2023-09-13 05:14:42<SeP>2023-09-14 15:59:15<SeP>2023-09-16 02:43:48<SeP>2023-09-17 13:28:21<SeP>2023-09-19 00:12:54<SeP>2023-09-20 10:57:27<SeP>2023-09-21 21:42:00<SeP>2023-09-23 08:26:33<SeP>2023-09-24 19:11:06<SeP>2023-09-26 05:55:39<SeP>2023-09-27 16:40:12<SeP>2023-09-29 03:24:45<SeP>2023-09-30 14:09:18<SeP>2023-10-02 00:53:51<SeP>2023-10-03 11:38:24<SeP>2023-10-04 22:22:57<SeP>2023-10-06 09:07:30<SeP>2023-10-07 19:52:03<SeP>2023-10-09 06:36:36<SeP>2023-10-10 17:21:09<SeP>2023-10-12 04:05:42<SeP>2023-10-13 14:50:15<SeP>2023-10-15 01:34:48<SeP>2023-10-16 12:19:21<SeP>2023-10-17 23:03:54<SeP>2023-10-19 09:48:27<SeP>2023-10-20 20:33:00<SeP>2023-10-22 07:17:33<SeP>2023-10-23 18:02:06<SeP>2023-10-25 04:46:39<SeP>2023-10-26 15:31:12<SeP>2023-10-28 02:15:45<SeP>2023-10-29 13:00:18<SeP>2023-10-30 23:44:51<SeP>2023-11-01 10:29:24<SeP>2023-11-02 21:13:57<SeP>2023-11-04 07:58:30<SeP>2023-11-05 17:43:03<SeP>2023-11-07 04:27:36<SeP>2023-11-08 15:12:09<SeP>2023-11-10 01:56:42<SeP>2023-11-11 12:41:15<SeP>2023-11-12 23:25:48<SeP>2023-11-14 10:10:21<SeP>2023-11-15 20:54:54<SeP>2023-11-17 07:39:27<SeP>2023-11-18 18:24:00<SeP>2023-11-20 05:08:33<SeP>2023-11-21 15:53:06<SeP>2023-11-23 02:37:39<SeP>2023-11-24 13:22:12<SeP>2023-11-26 00:06:45<SeP>2023-11-27 10:51:18<SeP>2023-11-28 21:35:51<SeP>2023-11-30 08:20:24<SeP>2023-12-01 19:04:57<SeP>2023-12-03 05:49:30<SeP>2023-12-04 16:34:03<SeP>2023-12-06 03:18:36<SeP>2023-12-07 14:03:09<SeP>2023-12-09 00:47:42<SeP>2023-12-10 11:32:15<SeP>2023-12-11 22:16:48<SeP>2023-12-13 09:01:21<SeP>2023-12-14 19:45:54<SeP>2023-12-16 06:30:27<SeP>2023-12-17 17:15:00<SeP>2023-12-19 03:59:33<SeP>2023-12-20 14:44:06<SeP>2023-12-22 01:28:39<SeP>2023-12-23 12:13:12<SeP>2023-12-24 22:57:45<SeP>2023-12-26 09:42:18<SeP>2023-12-27 20:26:51<SeP>2023-12-29 07:11:24<SeP>2023-12-30 17:55:57<SeP>2024-01-01 04:40:30<SeP>2024-01-02 15:25:03<SeP>2024-01-04 02:09:36<SeP>2024-01-05 12:54:09<SeP>2024-01-06 23:38:42<SeP>2024-01-08 10:23:15<SeP>2024-01-09 21:07:48<SeP>2024-01-11 07:52:21<SeP>2024-01-12 18:36:54<SeP>2024-01-14 05:21:27<SeP>2024-01-15 16:06:00<SeP>2024-01-17 02:50:33<SeP>2024-01-18 13:35:06<SeP>2024-01-20 00:19:39<SeP>2024-01-21 11:04:12<SeP>2024-01-22 21:48:45<SeP>2024-01-24 08:33:18<SeP>2024-01-25 19:17:51<SeP>2024-01-27 06:02:24<SeP>2024-01-28 16:46:57<SeP>2024-01-30 03:31:30<SeP>2024-01-31 14:16:03<SeP>2024-02-02 01:00:36<SeP>2024-02-03 11:45:09<SeP>2024-02-04 22:29:42<SeP>2024-02-06 09:14:15<SeP>2024-02-07 19:58:48<SeP>2024-02-09 06:43:21<SeP>2024-02-10 17:27:54<SeP>2024-02-12 04:12:27<SeP>2024-02-13 14:57:00<SeP>2024-02-15 01:41:33<SeP>2024-02-16 12:26:06<SeP>2024-02-17 23:10:39<SeP>2024-02-19 09:55:12<SeP>2024-02-20 20:39:45<SeP>2024-02-22 07:24:18<SeP>2024-02-23 18:08:51<SeP>2024-02-25 04:53:24<SeP>2024-02-26 15:37:57<SeP>2024-02-28 02:22:30<SeP>2024-02-29 13:07:03<SeP>2024-03-01 23:51:36<SeP>2024-03-03 10:36:09<SeP>2024-03-04 21:20:42<SeP>2024-03-06 08:05:15<SeP>2024-03-07 18:49:48<SeP>2024-03-09 05:34:21<SeP>2024-03-10 17:18:54<SeP>2024-03-12 04:03:27<SeP>2024-03-13 14:48:00<SeP>2024-03-15 01:32:33<SeP>2024-03-16 12:17:06<SeP>2024-03-17 23:01:39<SeP>2024-03-19 09:46:12<SeP>2024-03-20 20:30:45<SeP>2024-03-22 07:15:18<SeP>2024-03-23 17:59:51<SeP>2024-03-25 04:44:24<SeP>2024-03-26 15:28:57<SeP>2024-03-28 02:13:30<SeP>2024-03-29 12:58:03<SeP>2024-03-30 23:42:36<SeP>2024-04-01 10:27:09<SeP>2024-04-02 21:11:42<SeP>2024-04-04 07:56:15<SeP>2024-04-05 18:40:48<SeP>2024-04-07 05:25:21<SeP>2024-04-08 16:09:54<SeP>2024-04-10 02:54:27<SeP>2024-04-11 13:39:00<SeP>2024-04-13 00:23:33<SeP>2024-04-14 11:08:06<SeP>2024-04-15 21:52:39<SeP>2024-04-17 08:37:12<SeP>2024-04-18 19:21:45<SeP>2024-04-20 06:06:18<SeP>2024-04-21 16:50:51<SeP>2024-04-23 03:35:24<SeP>2024-04-24 14:19:57<SeP>2024-04-26 01:04:30<SeP>2024-04-27 11:49:03<SeP>2024-04-28 22:33:36<SeP>2024-04-30 09:18:09<SeP>2024-05-01 20:02:42<SeP>2024-05-03 06:47:15<SeP>2024-05-04 17:31:48<SeP>2024-05-06 04:16:21<SeP>2024-05-07 15:00:54<SeP>2024-05-09 01:45:27<SeP>2024-05-10 12:30:00<SeP>2024-05-11 23:14:33<SeP>2024-05-13 09:59:06<SeP>2024-05-14 20:43:39<SeP>2024-05-16 07:28:12<SeP>2024-05-17 18:12:45<SeP>2024-05-19 04:57:18<SeP>2024-05-20 15:41:51<SeP>2024-05-22 02:26:24<SeP>2024-05-23 13:10:57<SeP>2024-05-24 23:55:30<SeP>2024-05-26 10:40:03<SeP>2024-05-27 21:24:36<SeP>2024-05-29 08:09:09<SeP>2024-05-30 18:53:42<SeP>2024-06-01 05:38:15<SeP>2024-06-02 16:22:48<SeP>2024-06-04 03:07:21<SeP>2024-06-05 13:51:54<SeP>2024-06-07 00:36:27<SeP>2024-06-08 11:21:00<SeP>2024-06-09 22:05:33<SeP>2024-06-11 08:50:06<SeP>2024-06-12 19:34:39<SeP>2024-06-14 06:19:12<SeP>2024-06-15 17:03:45<SeP>2024-06-17 03:48:18<SeP>2024-06-18 14:32:51<SeP>2024-06-20 01:17:24<SeP>2024-06-21 12:01:57<SeP>2024-06-22 22:46:30<SeP>2024-06-24 09:31:03<SeP>2024-06-25 20:15:36<SeP>2024-06-27 07:00:09<SeP>2024-06-28 17:44:42<SeP>2024-06-30 04:29:15<SeP>2024-07-01 15:13:48<SeP>2024-07-03 01:58:21<SeP>2024-07-04 12:42:54<SeP>2024-07-05 23:27:27<SeP>2024-07-07 10:12:00<SeP>2024-07-08 20:56:33<SeP>2024-07-10 07:41:06<SeP>2024-07-11 18:25:39<SeP>2024-07-13 05:10:12<SeP>2024-07-14 15:54:45<SeP>2024-07-16 02:39:18<SeP>2024-07-17 13:23:51<SeP>2024-07-19 00:08:24<SeP>2024-07-20 10:52:57<SeP>2024-07-21 21:37:30<SeP>2024-07-23 08:22:03<SeP>2024-07-24 19:06:36<SeP>2024-07-26 05:51:09<SeP>2024-07-27 16:35:42<SeP>2024-07-29 03:20:15<SeP>2024-07-30 14:04:48<SeP>2024-08-01 00:49:21<SeP>2024-08-02 11:33:54<SeP>2024-08-03 22:18:27<SeP>2024-08-05 09:03:00<SeP>2024-08-06 19:47:33<SeP>2024-08-08 06:32:06<SeP>2024-08-09 17:16:39<SeP>2024-08-11 04:01:12<SeP>2024-08-12 14:45:45<SeP>2024-08-14 01:30:18<SeP>2024-08-15 12:14:51<SeP>2024-08-16 22:59:24<SeP>2024-08-18 09:43:57<SeP>2024-08-19 20:28:30<SeP>2024-08-21 07:13:03<SeP>2024-08-22 17:57:36<SeP>2024-08-24 04:42:09<SeP>2024-08-25 15:26:42<SeP>2024-08-27 02:11:15<SeP>2024-08-28 12:55:48<SeP>2024-08-29 23:40:21<SeP>2024-08-31 10:24:54<SeP>2024-09-01 21:09:27<SeP>2024-09-03 07:54:00<SeP>2024-09-04 18:38:33<SeP>2024-09-06 05:23:06<SeP>2024-09-07 16:07:39<SeP>2024-09-09 02:52:12<SeP>2024-09-10 13:36:45<SeP>2024-09-12 00:21:18<SeP>2024-09-13 11:05:51<SeP>2024-09-14 21:50:24<SeP>2024-09-16 08:34:57<SeP>2024-09-17 19:19:30<SeP>2024-09-19 06:04:03<SeP>2024-09-20 16:48:36<SeP>2024-09-22 03:33:09<SeP>2024-09-23 14:17:42<SeP>2024-09-25 01:02:15<SeP>2024-09-26 11:46:48<SeP>2024-09-27 22:31:21<SeP>2024-09-29 09:15:54<SeP>2024-09-30 20:00:27<SeP>2024-10-02 06:45:00<SeP>2024-10-03 17:29:33<SeP>2024-10-05 04:14:06<SeP>2024-10-06 14:58:39<SeP>2024-10-08 01:43:12<SeP>2024-10-09 12:27:45<SeP>2024-10-10 23:12:18<SeP>2024-10-12 09:56:51<SeP>2024-10-13 20:41:24<SeP>2024-10-15 07:25:57<SeP>2024-10-16 18:10:30<SeP>2024-10-18 04:55:03<SeP>2024-10-19 15:39:36<SeP>2024-10-21 02:24:09<SeP>2024-10-22 13:08:42<SeP>2024-10-23 23:53:15<SeP>2024-10-25 10:37:48<SeP>2024-10-26 21:22:21<SeP>2024-10-28 08:06:54<SeP>2024-10-29 18:51:27<SeP>2024-10-31 05:36:00<SeP>2024-11-01 16:20:33<SeP>2024-11-03 02:05:06<SeP>2024-11-04 12:49:39<SeP>2024-11-05 23:34:12<SeP>2024-11-07 10:18:45<SeP>2024-11-08 21:03:18<SeP>2024-11-10 07:47:51<SeP>2024-11-11 18:32:24<SeP>2024-11-13 05:16:57<SeP>2024-11-14 16:01:30<SeP>2024-11-16 02:46:03<SeP>2024-11-17 13:30:36<SeP>2024-11-19 00:15:09<SeP>2024-11-20 10:59:42<SeP>2024-11-21 21:44:15<SeP>2024-11-23 08:28:48<SeP>2024-11-24 19:13:21<SeP>2024-11-26 05:57:54<SeP>2024-11-27 16:42:27<SeP>2024-11-29 03:27:00<SeP>2024-11-30 14:11:33<SeP>2024-12-02 00:56:06<SeP>2024-12-03 11:40:39<SeP>2024-12-04 22:25:12<SeP>2024-12-06 09:09:45<SeP>2024-12-07 19:54:18<SeP>2024-12-09 06:38:51<SeP>2024-12-10 17:23:24<SeP>2024-12-12 04:07:57<SeP>2024-12-13 14:52:30<SeP>2024-12-15 01:37:03<SeP>2024-12-16 12:21:36<SeP>2024-12-17 23:06:09<SeP>2024-12-19 09:50:42<SeP>2024-12-20 20:35:15<SeP>2024-12-22 07:19:48<SeP>2024-12-23 18:04:21<SeP>2024-12-25 04:48:54<SeP>2024-12-26 15:33:27<SeP>2024-12-28 02:18:00<SeP>2024-12-29 13:02:33<SeP>2024-12-30 23:47:06<SeP>2025-01-01 10:31:39<SeP>2025-01-02 21:16:12<SeP>2025-01-04 08:00:45<SeP>2025-01-05 18:45:18<SeP>2025-01-07 05:29:51<SeP>2025-01-08 16:14:24<SeP>2025-01-10 02:58:57<SeP>2025-01-11 13:43:30<SeP>2025-01-13 00:28:03<SeP>2025-01-14 11:12:36<SeP>2025-01-15 21:57:09<SeP>2025-01-17 08:41:42<SeP>2025-01-18 19:26:15<SeP>2025-01-20 06:10:48<SeP>2025-01-21 16:55:21<SeP>2025-01-23 03:39:54<SeP>2025-01-24 14:24:27<SeP>2025-01-26 01:09:00<SeP>2025-01-27 11:53:33<SeP>2025-01-28 22:38:06<SeP>2025-01-30 09:22:39<SeP>2025-01-31 20:07:12<SeP>2025-02-02 06:51:45<SeP>2025-02-03 17:36:18<SeP>2025-02-05 04:20:51<SeP>2025-02-06 15:05:24<SeP>2025-02-08 01:49:57<SeP>2025-02-09 12:34:30<SeP>2025-02-10 23:19:03<SeP>2025-02-12 10:03:36<SeP>2025-02-13 20:48:09<SeP>2025-02-15 07:32:42<SeP>2025-02-16 18:17:15<SeP>2025-02-18 05:01:48<SeP>2025-02-19 15:46:21<SeP>2025-02-21 02:30:54<SeP>2025-02-22 13:15:27";
  const itemLabel       = "Scans";
  const itemData        = "761<SeP>1464<SeP>1380<SeP>1443<SeP>1253<SeP>1682<SeP>963<SeP>957<SeP>1121<SeP>3373<SeP>1708<SeP>2587<SeP>2129<SeP>2191<SeP>758<SeP>862<SeP>1415<SeP>2142<SeP>1788<SeP>1764<SeP>1356<SeP>935<SeP>850<SeP>1436<SeP>795<SeP>998<SeP>800<SeP>1202<SeP>3243<SeP>923<SeP>817<SeP>1450<SeP>1232<SeP>807<SeP>2780<SeP>1582<SeP>2736<SeP>1821<SeP>1827<SeP>1317<SeP>1283<SeP>1774<SeP>1761<SeP>2138<SeP>1565<SeP>1741<SeP>1540<SeP>1563<SeP>1775<SeP>1678<SeP>2128<SeP>1458<SeP>1671<SeP>1731<SeP>3032<SeP>1383<SeP>1913<SeP>1794<SeP>2362<SeP>1542<SeP>2005<SeP>3270<SeP>1431<SeP>1463<SeP>1461<SeP>1431<SeP>1946<SeP>1517<SeP>1192<SeP>1428<SeP>1304<SeP>2154<SeP>1341<SeP>1041<SeP>1241<SeP>1350<SeP>7760<SeP>1617<SeP>1372<SeP>1329<SeP>1666<SeP>1917<SeP>1106<SeP>6531<SeP>1627<SeP>1643<SeP>945<SeP>1127<SeP>3283<SeP>1350<SeP>881<SeP>1007<SeP>1055<SeP>1031<SeP>3019<SeP>1023<SeP>1342<SeP>3002<SeP>5334<SeP>2548<SeP>1014<SeP>888<SeP>909<SeP>961<SeP>1016<SeP>927<SeP>1059<SeP>3442<SeP>2480<SeP>1462<SeP>1654<SeP>708<SeP>797<SeP>1419<SeP>1267<SeP>1066<SeP>1004<SeP>2247<SeP>1113<SeP>1110<SeP>1032<SeP>1012<SeP>1038<SeP>740<SeP>872<SeP>864<SeP>733<SeP>1114<SeP>830<SeP>916<SeP>785<SeP>896<SeP>870<SeP>644<SeP>802<SeP>855<SeP>867<SeP>862<SeP>839<SeP>817<SeP>790<SeP>784<SeP>1029<SeP>871<SeP>768<SeP>926<SeP>994<SeP>809<SeP>1089<SeP>974<SeP>444<SeP>931<SeP>811<SeP>909<SeP>1235<SeP>955<SeP>1068<SeP>1232<SeP>1077<SeP>927<SeP>891<SeP>958<SeP>809<SeP>827<SeP>1038<SeP>919<SeP>881<SeP>939<SeP>1068<SeP>921<SeP>1103<SeP>936<SeP>1034<SeP>1119<SeP>852<SeP>906<SeP>2197<SeP>1179<SeP>1152<SeP>1056<SeP>957<SeP>1156<SeP>986<SeP>826<SeP>753<SeP>866<SeP>1016<SeP>1002<SeP>798<SeP>1076<SeP>1280<SeP>1099<SeP>1128<SeP>1303<SeP>1170<SeP>1273<SeP>1261<SeP>1283<SeP>1476<SeP>1669<SeP>1694<SeP>1372<SeP>732<SeP>850<SeP>1178<SeP>976<SeP>601<SeP>843<SeP>845<SeP>974<SeP>819<SeP>5327<SeP>3357<SeP>1969<SeP>1258<SeP>1123<SeP>871<SeP>1057<SeP>839<SeP>1018<SeP>962<SeP>1069<SeP>994<SeP>1167<SeP>2309<SeP>1065<SeP>1193<SeP>1114<SeP>1338<SeP>1059<SeP>1034<SeP>983<SeP>1169<SeP>1070<SeP>978<SeP>1156<SeP>1054<SeP>1120<SeP>904<SeP>976<SeP>1318<SeP>1114<SeP>1087<SeP>1188<SeP>1368<SeP>1219<SeP>1488<SeP>1243<SeP>1056<SeP>1166<SeP>1139<SeP>1960<SeP>1266<SeP>1848<SeP>1619<SeP>1378<SeP>2010<SeP>1713<SeP>1107<SeP>1213<SeP>1173<SeP>1142<SeP>1595<SeP>1345<SeP>1099<SeP>1479<SeP>1828<SeP>1361<SeP>1414<SeP>1362<SeP>1449<SeP>1164<SeP>1075<SeP>1342<SeP>1064<SeP>1181<SeP>1285<SeP>1301<SeP>1058<SeP>1636<SeP>1652<SeP>1296<SeP>1640<SeP>1429<SeP>1281<SeP>980<SeP>968<SeP>1009<SeP>1005<SeP>797<SeP>990<SeP>1741<SeP>1186<SeP>1035<SeP>1116<SeP>964<SeP>763<SeP>1093<SeP>1360<SeP>819<SeP>955<SeP>880<SeP>1280<SeP>1523<SeP>1512<SeP>1128<SeP>1118<SeP>892<SeP>1647<SeP>1320<SeP>1005<SeP>1200<SeP>903<SeP>1547<SeP>1040<SeP>969<SeP>1149<SeP>1108<SeP>871<SeP>852<SeP>1129<SeP>1358<SeP>1580<SeP>1371<SeP>1369<SeP>1353<SeP>956<SeP>1153<SeP>1181<SeP>1155<SeP>887<SeP>1229<SeP>974<SeP>1182<SeP>1269<SeP>1504<SeP>1190<SeP>1683<SeP>1293<SeP>1664<SeP>1328<SeP>1301<SeP>1455<SeP>1391<SeP>1335<SeP>1289<SeP>1743<SeP>1426<SeP>1410<SeP>1567<SeP>1251<SeP>1467<SeP>1215<SeP>1281<SeP>1263<SeP>1446<SeP>1633<SeP>1283<SeP>1294<SeP>1225<SeP>1417<SeP>1189<SeP>1259<SeP>1417<SeP>1752<SeP>1719<SeP>1233<SeP>679<SeP>1392<SeP>1843<SeP>1222<SeP>1418<SeP>1204<SeP>1074<SeP>1353<SeP>1398<SeP>1251<SeP>1471<SeP>1455<SeP>1627<SeP>1514<SeP>1482<SeP>1591<SeP>1399<SeP>1283<SeP>1717<SeP>1509<SeP>1323<SeP>1161<SeP>1559<SeP>1772<SeP>1847<SeP>1760<SeP>1722<SeP>1594<SeP>1563<SeP>1619<SeP>1489<SeP>1569<SeP>1594";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:44:33<SeP>2023-07-28 21:29:06<SeP>2023-07-30 08:13:39<SeP>2023-07-31 18:58:12<SeP>2023-08-02 05:42:45<SeP>2023-08-03 16:27:18<SeP>2023-08-05 03:11:51<SeP>2023-08-06 13:56:24<SeP>2023-08-08 00:40:57<SeP>2023-08-09 11:25:30<SeP>2023-08-10 22:10:03<SeP>2023-08-12 08:54:36<SeP>2023-08-13 19:39:09<SeP>2023-08-15 06:23:42<SeP>2023-08-16 17:08:15<SeP>2023-08-18 03:52:48<SeP>2023-08-19 14:37:21<SeP>2023-08-21 01:21:54<SeP>2023-08-22 12:06:27<SeP>2023-08-23 22:51:00<SeP>2023-08-25 09:35:33<SeP>2023-08-26 20:20:06<SeP>2023-08-28 07:04:39<SeP>2023-08-29 17:49:12<SeP>2023-08-31 04:33:45<SeP>2023-09-01 15:18:18<SeP>2023-09-03 02:02:51<SeP>2023-09-04 12:47:24<SeP>2023-09-05 23:31:57<SeP>2023-09-07 10:16:30<SeP>2023-09-08 21:01:03<SeP>2023-09-10 07:45:36<SeP>2023-09-11 18:30:09<SeP>2023-09-13 05:14:42<SeP>2023-09-14 15:59:15<SeP>2023-09-16 02:43:48<SeP>2023-09-17 13:28:21<SeP>2023-09-19 00:12:54<SeP>2023-09-20 10:57:27<SeP>2023-09-21 21:42:00<SeP>2023-09-23 08:26:33<SeP>2023-09-24 19:11:06<SeP>2023-09-26 05:55:39<SeP>2023-09-27 16:40:12<SeP>2023-09-29 03:24:45<SeP>2023-09-30 14:09:18<SeP>2023-10-02 00:53:51<SeP>2023-10-03 11:38:24<SeP>2023-10-04 22:22:57<SeP>2023-10-06 09:07:30<SeP>2023-10-07 19:52:03<SeP>2023-10-09 06:36:36<SeP>2023-10-10 17:21:09<SeP>2023-10-12 04:05:42<SeP>2023-10-13 14:50:15<SeP>2023-10-15 01:34:48<SeP>2023-10-16 12:19:21<SeP>2023-10-17 23:03:54<SeP>2023-10-19 09:48:27<SeP>2023-10-20 20:33:00<SeP>2023-10-22 07:17:33<SeP>2023-10-23 18:02:06<SeP>2023-10-25 04:46:39<SeP>2023-10-26 15:31:12<SeP>2023-10-28 02:15:45<SeP>2023-10-29 13:00:18<SeP>2023-10-30 23:44:51<SeP>2023-11-01 10:29:24<SeP>2023-11-02 21:13:57<SeP>2023-11-04 07:58:30<SeP>2023-11-05 17:43:03<SeP>2023-11-07 04:27:36<SeP>2023-11-08 15:12:09<SeP>2023-11-10 01:56:42<SeP>2023-11-11 12:41:15<SeP>2023-11-12 23:25:48<SeP>2023-11-14 10:10:21<SeP>2023-11-15 20:54:54<SeP>2023-11-17 07:39:27<SeP>2023-11-18 18:24:00<SeP>2023-11-20 05:08:33<SeP>2023-11-21 15:53:06<SeP>2023-11-23 02:37:39<SeP>2023-11-24 13:22:12<SeP>2023-11-26 00:06:45<SeP>2023-11-27 10:51:18<SeP>2023-11-28 21:35:51<SeP>2023-11-30 08:20:24<SeP>2023-12-01 19:04:57<SeP>2023-12-03 05:49:30<SeP>2023-12-04 16:34:03<SeP>2023-12-06 03:18:36<SeP>2023-12-07 14:03:09<SeP>2023-12-09 00:47:42<SeP>2023-12-10 11:32:15<SeP>2023-12-11 22:16:48<SeP>2023-12-13 09:01:21<SeP>2023-12-14 19:45:54<SeP>2023-12-16 06:30:27<SeP>2023-12-17 17:15:00<SeP>2023-12-19 03:59:33<SeP>2023-12-20 14:44:06<SeP>2023-12-22 01:28:39<SeP>2023-12-23 12:13:12<SeP>2023-12-24 22:57:45<SeP>2023-12-26 09:42:18<SeP>2023-12-27 20:26:51<SeP>2023-12-29 07:11:24<SeP>2023-12-30 17:55:57<SeP>2024-01-01 04:40:30<SeP>2024-01-02 15:25:03<SeP>2024-01-04 02:09:36<SeP>2024-01-05 12:54:09<SeP>2024-01-06 23:38:42<SeP>2024-01-08 10:23:15<SeP>2024-01-09 21:07:48<SeP>2024-01-11 07:52:21<SeP>2024-01-12 18:36:54<SeP>2024-01-14 05:21:27<SeP>2024-01-15 16:06:00<SeP>2024-01-17 02:50:33<SeP>2024-01-18 13:35:06<SeP>2024-01-20 00:19:39<SeP>2024-01-21 11:04:12<SeP>2024-01-22 21:48:45<SeP>2024-01-24 08:33:18<SeP>2024-01-25 19:17:51<SeP>2024-01-27 06:02:24<SeP>2024-01-28 16:46:57<SeP>2024-01-30 03:31:30<SeP>2024-01-31 14:16:03<SeP>2024-02-02 01:00:36<SeP>2024-02-03 11:45:09<SeP>2024-02-04 22:29:42<SeP>2024-02-06 09:14:15<SeP>2024-02-07 19:58:48<SeP>2024-02-09 06:43:21<SeP>2024-02-10 17:27:54<SeP>2024-02-12 04:12:27<SeP>2024-02-13 14:57:00<SeP>2024-02-15 01:41:33<SeP>2024-02-16 12:26:06<SeP>2024-02-17 23:10:39<SeP>2024-02-19 09:55:12<SeP>2024-02-20 20:39:45<SeP>2024-02-22 07:24:18<SeP>2024-02-23 18:08:51<SeP>2024-02-25 04:53:24<SeP>2024-02-26 15:37:57<SeP>2024-02-28 02:22:30<SeP>2024-02-29 13:07:03<SeP>2024-03-01 23:51:36<SeP>2024-03-03 10:36:09<SeP>2024-03-04 21:20:42<SeP>2024-03-06 08:05:15<SeP>2024-03-07 18:49:48<SeP>2024-03-09 05:34:21<SeP>2024-03-10 17:18:54<SeP>2024-03-12 04:03:27<SeP>2024-03-13 14:48:00<SeP>2024-03-15 01:32:33<SeP>2024-03-16 12:17:06<SeP>2024-03-17 23:01:39<SeP>2024-03-19 09:46:12<SeP>2024-03-20 20:30:45<SeP>2024-03-22 07:15:18<SeP>2024-03-23 17:59:51<SeP>2024-03-25 04:44:24<SeP>2024-03-26 15:28:57<SeP>2024-03-28 02:13:30<SeP>2024-03-29 12:58:03<SeP>2024-03-30 23:42:36<SeP>2024-04-01 10:27:09<SeP>2024-04-02 21:11:42<SeP>2024-04-04 07:56:15<SeP>2024-04-05 18:40:48<SeP>2024-04-07 05:25:21<SeP>2024-04-08 16:09:54<SeP>2024-04-10 02:54:27<SeP>2024-04-11 13:39:00<SeP>2024-04-13 00:23:33<SeP>2024-04-14 11:08:06<SeP>2024-04-15 21:52:39<SeP>2024-04-17 08:37:12<SeP>2024-04-18 19:21:45<SeP>2024-04-20 06:06:18<SeP>2024-04-21 16:50:51<SeP>2024-04-23 03:35:24<SeP>2024-04-24 14:19:57<SeP>2024-04-26 01:04:30<SeP>2024-04-27 11:49:03<SeP>2024-04-28 22:33:36<SeP>2024-04-30 09:18:09<SeP>2024-05-01 20:02:42<SeP>2024-05-03 06:47:15<SeP>2024-05-04 17:31:48<SeP>2024-05-06 04:16:21<SeP>2024-05-07 15:00:54<SeP>2024-05-09 01:45:27<SeP>2024-05-10 12:30:00<SeP>2024-05-11 23:14:33<SeP>2024-05-13 09:59:06<SeP>2024-05-14 20:43:39<SeP>2024-05-16 07:28:12<SeP>2024-05-17 18:12:45<SeP>2024-05-19 04:57:18<SeP>2024-05-20 15:41:51<SeP>2024-05-22 02:26:24<SeP>2024-05-23 13:10:57<SeP>2024-05-24 23:55:30<SeP>2024-05-26 10:40:03<SeP>2024-05-27 21:24:36<SeP>2024-05-29 08:09:09<SeP>2024-05-30 18:53:42<SeP>2024-06-01 05:38:15<SeP>2024-06-02 16:22:48<SeP>2024-06-04 03:07:21<SeP>2024-06-05 13:51:54<SeP>2024-06-07 00:36:27<SeP>2024-06-08 11:21:00<SeP>2024-06-09 22:05:33<SeP>2024-06-11 08:50:06<SeP>2024-06-12 19:34:39<SeP>2024-06-14 06:19:12<SeP>2024-06-15 17:03:45<SeP>2024-06-17 03:48:18<SeP>2024-06-18 14:32:51<SeP>2024-06-20 01:17:24<SeP>2024-06-21 12:01:57<SeP>2024-06-22 22:46:30<SeP>2024-06-24 09:31:03<SeP>2024-06-25 20:15:36<SeP>2024-06-27 07:00:09<SeP>2024-06-28 17:44:42<SeP>2024-06-30 04:29:15<SeP>2024-07-01 15:13:48<SeP>2024-07-03 01:58:21<SeP>2024-07-04 12:42:54<SeP>2024-07-05 23:27:27<SeP>2024-07-07 10:12:00<SeP>2024-07-08 20:56:33<SeP>2024-07-10 07:41:06<SeP>2024-07-11 18:25:39<SeP>2024-07-13 05:10:12<SeP>2024-07-14 15:54:45<SeP>2024-07-16 02:39:18<SeP>2024-07-17 13:23:51<SeP>2024-07-19 00:08:24<SeP>2024-07-20 10:52:57<SeP>2024-07-21 21:37:30<SeP>2024-07-23 08:22:03<SeP>2024-07-24 19:06:36<SeP>2024-07-26 05:51:09<SeP>2024-07-27 16:35:42<SeP>2024-07-29 03:20:15<SeP>2024-07-30 14:04:48<SeP>2024-08-01 00:49:21<SeP>2024-08-02 11:33:54<SeP>2024-08-03 22:18:27<SeP>2024-08-05 09:03:00<SeP>2024-08-06 19:47:33<SeP>2024-08-08 06:32:06<SeP>2024-08-09 17:16:39<SeP>2024-08-11 04:01:12<SeP>2024-08-12 14:45:45<SeP>2024-08-14 01:30:18<SeP>2024-08-15 12:14:51<SeP>2024-08-16 22:59:24<SeP>2024-08-18 09:43:57<SeP>2024-08-19 20:28:30<SeP>2024-08-21 07:13:03<SeP>2024-08-22 17:57:36<SeP>2024-08-24 04:42:09<SeP>2024-08-25 15:26:42<SeP>2024-08-27 02:11:15<SeP>2024-08-28 12:55:48<SeP>2024-08-29 23:40:21<SeP>2024-08-31 10:24:54<SeP>2024-09-01 21:09:27<SeP>2024-09-03 07:54:00<SeP>2024-09-04 18:38:33<SeP>2024-09-06 05:23:06<SeP>2024-09-07 16:07:39<SeP>2024-09-09 02:52:12<SeP>2024-09-10 13:36:45<SeP>2024-09-12 00:21:18<SeP>2024-09-13 11:05:51<SeP>2024-09-14 21:50:24<SeP>2024-09-16 08:34:57<SeP>2024-09-17 19:19:30<SeP>2024-09-19 06:04:03<SeP>2024-09-20 16:48:36<SeP>2024-09-22 03:33:09<SeP>2024-09-23 14:17:42<SeP>2024-09-25 01:02:15<SeP>2024-09-26 11:46:48<SeP>2024-09-27 22:31:21<SeP>2024-09-29 09:15:54<SeP>2024-09-30 20:00:27<SeP>2024-10-02 06:45:00<SeP>2024-10-03 17:29:33<SeP>2024-10-05 04:14:06<SeP>2024-10-06 14:58:39<SeP>2024-10-08 01:43:12<SeP>2024-10-09 12:27:45<SeP>2024-10-10 23:12:18<SeP>2024-10-12 09:56:51<SeP>2024-10-13 20:41:24<SeP>2024-10-15 07:25:57<SeP>2024-10-16 18:10:30<SeP>2024-10-18 04:55:03<SeP>2024-10-19 15:39:36<SeP>2024-10-21 02:24:09<SeP>2024-10-22 13:08:42<SeP>2024-10-23 23:53:15<SeP>2024-10-25 10:37:48<SeP>2024-10-26 21:22:21<SeP>2024-10-28 08:06:54<SeP>2024-10-29 18:51:27<SeP>2024-10-31 05:36:00<SeP>2024-11-01 16:20:33<SeP>2024-11-03 02:05:06<SeP>2024-11-04 12:49:39<SeP>2024-11-05 23:34:12<SeP>2024-11-07 10:18:45<SeP>2024-11-08 21:03:18<SeP>2024-11-10 07:47:51<SeP>2024-11-11 18:32:24<SeP>2024-11-13 05:16:57<SeP>2024-11-14 16:01:30<SeP>2024-11-16 02:46:03<SeP>2024-11-17 13:30:36<SeP>2024-11-19 00:15:09<SeP>2024-11-20 10:59:42<SeP>2024-11-21 21:44:15<SeP>2024-11-23 08:28:48<SeP>2024-11-24 19:13:21<SeP>2024-11-26 05:57:54<SeP>2024-11-27 16:42:27<SeP>2024-11-29 03:27:00<SeP>2024-11-30 14:11:33<SeP>2024-12-02 00:56:06<SeP>2024-12-03 11:40:39<SeP>2024-12-04 22:25:12<SeP>2024-12-06 09:09:45<SeP>2024-12-07 19:54:18<SeP>2024-12-09 06:38:51<SeP>2024-12-10 17:23:24<SeP>2024-12-12 04:07:57<SeP>2024-12-13 14:52:30<SeP>2024-12-15 01:37:03<SeP>2024-12-16 12:21:36<SeP>2024-12-17 23:06:09<SeP>2024-12-19 09:50:42<SeP>2024-12-20 20:35:15<SeP>2024-12-22 07:19:48<SeP>2024-12-23 18:04:21<SeP>2024-12-25 04:48:54<SeP>2024-12-26 15:33:27<SeP>2024-12-28 02:18:00<SeP>2024-12-29 13:02:33<SeP>2024-12-30 23:47:06<SeP>2025-01-01 10:31:39<SeP>2025-01-02 21:16:12<SeP>2025-01-04 08:00:45<SeP>2025-01-05 18:45:18<SeP>2025-01-07 05:29:51<SeP>2025-01-08 16:14:24<SeP>2025-01-10 02:58:57<SeP>2025-01-11 13:43:30<SeP>2025-01-13 00:28:03<SeP>2025-01-14 11:12:36<SeP>2025-01-15 21:57:09<SeP>2025-01-17 08:41:42<SeP>2025-01-18 19:26:15<SeP>2025-01-20 06:10:48<SeP>2025-01-21 16:55:21<SeP>2025-01-23 03:39:54<SeP>2025-01-24 14:24:27<SeP>2025-01-26 01:09:00<SeP>2025-01-27 11:53:33<SeP>2025-01-28 22:38:06<SeP>2025-01-30 09:22:39<SeP>2025-01-31 20:07:12<SeP>2025-02-02 06:51:45<SeP>2025-02-03 17:36:18<SeP>2025-02-05 04:20:51<SeP>2025-02-06 15:05:24<SeP>2025-02-08 01:49:57<SeP>2025-02-09 12:34:30<SeP>2025-02-10 23:19:03<SeP>2025-02-12 10:03:36<SeP>2025-02-13 20:48:09<SeP>2025-02-15 07:32:42<SeP>2025-02-16 18:17:15<SeP>2025-02-18 05:01:48<SeP>2025-02-19 15:46:21<SeP>2025-02-21 02:30:54<SeP>2025-02-22 13:15:27";
  const itemLabel       = "Attacks";
  const itemData        = "152<SeP>614<SeP>975<SeP>718<SeP>535<SeP>226<SeP>6968<SeP>507<SeP>9184<SeP>969<SeP>377<SeP>1146<SeP>1131<SeP>383<SeP>162<SeP>461<SeP>112<SeP>763<SeP>277<SeP>4147<SeP>7216<SeP>7240<SeP>7203<SeP>7619<SeP>271<SeP>321<SeP>350<SeP>211<SeP>515<SeP>5762<SeP>75<SeP>381<SeP>300<SeP>381<SeP>2419<SeP>9433<SeP>8427<SeP>10293<SeP>9841<SeP>5338<SeP>5930<SeP>8617<SeP>7759<SeP>9340<SeP>7949<SeP>7399<SeP>9328<SeP>7425<SeP>8493<SeP>8601<SeP>6112<SeP>5635<SeP>12720<SeP>6251<SeP>7146<SeP>8201<SeP>10242<SeP>18180<SeP>15951<SeP>9158<SeP>10129<SeP>8216<SeP>7766<SeP>8619<SeP>7946<SeP>8438<SeP>8015<SeP>6146<SeP>6617<SeP>7303<SeP>5657<SeP>3088<SeP>6766<SeP>5455<SeP>6176<SeP>6572<SeP>7649<SeP>4168<SeP>5214<SeP>8023<SeP>4473<SeP>6392<SeP>5651<SeP>4324<SeP>7372<SeP>4666<SeP>5488<SeP>6008<SeP>7211<SeP>21881<SeP>16572<SeP>27610<SeP>8415<SeP>7090<SeP>7051<SeP>11208<SeP>7763<SeP>4299<SeP>6219<SeP>3402<SeP>5479<SeP>7080<SeP>4803<SeP>8892<SeP>6542<SeP>5132<SeP>4217<SeP>5964<SeP>9219<SeP>7888<SeP>7417<SeP>5477<SeP>4425<SeP>10785<SeP>8841<SeP>5382<SeP>3122<SeP>6298<SeP>9103<SeP>5594<SeP>5859<SeP>9764<SeP>5471<SeP>1367<SeP>2437<SeP>1021<SeP>2531<SeP>2060<SeP>1436<SeP>728<SeP>1037<SeP>1277<SeP>1834<SeP>567<SeP>1287<SeP>1159<SeP>1006<SeP>885<SeP>1025<SeP>1513<SeP>1234<SeP>1102<SeP>1691<SeP>2060<SeP>4239<SeP>11403<SeP>8350<SeP>7307<SeP>7501<SeP>9357<SeP>6169<SeP>8839<SeP>11044<SeP>9267<SeP>12928<SeP>9111<SeP>10635<SeP>9499<SeP>12144<SeP>10275<SeP>8000<SeP>3894<SeP>7630<SeP>13526<SeP>16902<SeP>6465<SeP>8096<SeP>10811<SeP>17287<SeP>6941<SeP>5880<SeP>6382<SeP>7507<SeP>25443<SeP>8051<SeP>8334<SeP>11655<SeP>4444<SeP>6992<SeP>4832<SeP>15948<SeP>5110<SeP>6375<SeP>14434<SeP>7114<SeP>8001<SeP>7061<SeP>5449<SeP>3533<SeP>7080<SeP>7512<SeP>4612<SeP>6495<SeP>8144<SeP>5704<SeP>19442<SeP>7873<SeP>6543<SeP>5882<SeP>8067<SeP>10425<SeP>7043<SeP>3286<SeP>4588<SeP>5061<SeP>3901<SeP>4342<SeP>3076<SeP>631<SeP>110<SeP>635<SeP>610<SeP>577<SeP>740<SeP>361<SeP>648<SeP>1237<SeP>1247<SeP>3146<SeP>22955<SeP>534<SeP>3481<SeP>3706<SeP>2840<SeP>7246<SeP>2983<SeP>4254<SeP>2437<SeP>3853<SeP>2787<SeP>2923<SeP>4398<SeP>2801<SeP>2350<SeP>3502<SeP>2045<SeP>1635<SeP>2146<SeP>1548<SeP>941<SeP>1368<SeP>1247<SeP>770<SeP>1700<SeP>26791<SeP>1767<SeP>4076<SeP>3899<SeP>2166<SeP>3669<SeP>2699<SeP>1665<SeP>3840<SeP>2148<SeP>3767<SeP>2368<SeP>2964<SeP>3555<SeP>4313<SeP>5407<SeP>4712<SeP>4432<SeP>2813<SeP>2695<SeP>4127<SeP>3882<SeP>6868<SeP>8208<SeP>3719<SeP>2270<SeP>3260<SeP>3375<SeP>4640<SeP>3143<SeP>2865<SeP>2374<SeP>4998<SeP>5052<SeP>3058<SeP>6055<SeP>4218<SeP>6156<SeP>4543<SeP>5378<SeP>5007<SeP>22110<SeP>5621<SeP>10669<SeP>1741<SeP>3241<SeP>3859<SeP>3646<SeP>5290<SeP>3421<SeP>4748<SeP>4581<SeP>4795<SeP>3107<SeP>3876<SeP>2163<SeP>1533<SeP>2060<SeP>3452<SeP>2210<SeP>3452<SeP>3357<SeP>4467<SeP>3345<SeP>3244<SeP>4502<SeP>3328<SeP>3103<SeP>4894<SeP>7674<SeP>6114<SeP>5485<SeP>5009<SeP>4764<SeP>3554<SeP>3545<SeP>4620<SeP>5503<SeP>5278<SeP>4389<SeP>4390<SeP>2066<SeP>669<SeP>2015<SeP>1664<SeP>822<SeP>1413<SeP>1740<SeP>1123<SeP>2016<SeP>4071<SeP>5262<SeP>5971<SeP>33986<SeP>4840<SeP>5811<SeP>22649<SeP>5276<SeP>5404<SeP>5834<SeP>4216<SeP>24577<SeP>4956<SeP>5189<SeP>4793<SeP>5477<SeP>7629<SeP>27562<SeP>4689<SeP>3526<SeP>4192<SeP>3947<SeP>6436<SeP>3507<SeP>3853<SeP>2931<SeP>4187<SeP>5555<SeP>4624<SeP>18071<SeP>5401<SeP>6305<SeP>5623<SeP>1344<SeP>3459<SeP>3982<SeP>4820<SeP>3408<SeP>3591<SeP>3113<SeP>3295<SeP>3501<SeP>3738<SeP>5745<SeP>8551<SeP>10144<SeP>8626<SeP>9055<SeP>7659<SeP>7214<SeP>4968<SeP>5218<SeP>3728<SeP>25409<SeP>3718<SeP>3134<SeP>3959<SeP>10568<SeP>5652<SeP>4883<SeP>3376<SeP>5046<SeP>3414<SeP>4882<SeP>9253<SeP>8763";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:44:33<SeP>2023-07-28 21:29:06<SeP>2023-07-30 08:13:39<SeP>2023-07-31 18:58:12<SeP>2023-08-02 05:42:45<SeP>2023-08-03 16:27:18<SeP>2023-08-05 03:11:51<SeP>2023-08-06 13:56:24<SeP>2023-08-08 00:40:57<SeP>2023-08-09 11:25:30<SeP>2023-08-10 22:10:03<SeP>2023-08-12 08:54:36<SeP>2023-08-13 19:39:09<SeP>2023-08-15 06:23:42<SeP>2023-08-16 17:08:15<SeP>2023-08-18 03:52:48<SeP>2023-08-19 14:37:21<SeP>2023-08-21 01:21:54<SeP>2023-08-22 12:06:27<SeP>2023-08-23 22:51:00<SeP>2023-08-25 09:35:33<SeP>2023-08-26 20:20:06<SeP>2023-08-28 07:04:39<SeP>2023-08-29 17:49:12<SeP>2023-08-31 04:33:45<SeP>2023-09-01 15:18:18<SeP>2023-09-03 02:02:51<SeP>2023-09-04 12:47:24<SeP>2023-09-05 23:31:57<SeP>2023-09-07 10:16:30<SeP>2023-09-08 21:01:03<SeP>2023-09-10 07:45:36<SeP>2023-09-11 18:30:09<SeP>2023-09-13 05:14:42<SeP>2023-09-14 15:59:15<SeP>2023-09-16 02:43:48<SeP>2023-09-17 13:28:21<SeP>2023-09-19 00:12:54<SeP>2023-09-20 10:57:27<SeP>2023-09-21 21:42:00<SeP>2023-09-23 08:26:33<SeP>2023-09-24 19:11:06<SeP>2023-09-26 05:55:39<SeP>2023-09-27 16:40:12<SeP>2023-09-29 03:24:45<SeP>2023-09-30 14:09:18<SeP>2023-10-02 00:53:51<SeP>2023-10-03 11:38:24<SeP>2023-10-04 22:22:57<SeP>2023-10-06 09:07:30<SeP>2023-10-07 19:52:03<SeP>2023-10-09 06:36:36<SeP>2023-10-10 17:21:09<SeP>2023-10-12 04:05:42<SeP>2023-10-13 14:50:15<SeP>2023-10-15 01:34:48<SeP>2023-10-16 12:19:21<SeP>2023-10-17 23:03:54<SeP>2023-10-19 09:48:27<SeP>2023-10-20 20:33:00<SeP>2023-10-22 07:17:33<SeP>2023-10-23 18:02:06<SeP>2023-10-25 04:46:39<SeP>2023-10-26 15:31:12<SeP>2023-10-28 02:15:45<SeP>2023-10-29 13:00:18<SeP>2023-10-30 23:44:51<SeP>2023-11-01 10:29:24<SeP>2023-11-02 21:13:57<SeP>2023-11-04 07:58:30<SeP>2023-11-05 17:43:03<SeP>2023-11-07 04:27:36<SeP>2023-11-08 15:12:09<SeP>2023-11-10 01:56:42<SeP>2023-11-11 12:41:15<SeP>2023-11-12 23:25:48<SeP>2023-11-14 10:10:21<SeP>2023-11-15 20:54:54<SeP>2023-11-17 07:39:27<SeP>2023-11-18 18:24:00<SeP>2023-11-20 05:08:33<SeP>2023-11-21 15:53:06<SeP>2023-11-23 02:37:39<SeP>2023-11-24 13:22:12<SeP>2023-11-26 00:06:45<SeP>2023-11-27 10:51:18<SeP>2023-11-28 21:35:51<SeP>2023-11-30 08:20:24<SeP>2023-12-01 19:04:57<SeP>2023-12-03 05:49:30<SeP>2023-12-04 16:34:03<SeP>2023-12-06 03:18:36<SeP>2023-12-07 14:03:09<SeP>2023-12-09 00:47:42<SeP>2023-12-10 11:32:15<SeP>2023-12-11 22:16:48<SeP>2023-12-13 09:01:21<SeP>2023-12-14 19:45:54<SeP>2023-12-16 06:30:27<SeP>2023-12-17 17:15:00<SeP>2023-12-19 03:59:33<SeP>2023-12-20 14:44:06<SeP>2023-12-22 01:28:39<SeP>2023-12-23 12:13:12<SeP>2023-12-24 22:57:45<SeP>2023-12-26 09:42:18<SeP>2023-12-27 20:26:51<SeP>2023-12-29 07:11:24<SeP>2023-12-30 17:55:57<SeP>2024-01-01 04:40:30<SeP>2024-01-02 15:25:03<SeP>2024-01-04 02:09:36<SeP>2024-01-05 12:54:09<SeP>2024-01-06 23:38:42<SeP>2024-01-08 10:23:15<SeP>2024-01-09 21:07:48<SeP>2024-01-11 07:52:21<SeP>2024-01-12 18:36:54<SeP>2024-01-14 05:21:27<SeP>2024-01-15 16:06:00<SeP>2024-01-17 02:50:33<SeP>2024-01-18 13:35:06<SeP>2024-01-20 00:19:39<SeP>2024-01-21 11:04:12<SeP>2024-01-22 21:48:45<SeP>2024-01-24 08:33:18<SeP>2024-01-25 19:17:51<SeP>2024-01-27 06:02:24<SeP>2024-01-28 16:46:57<SeP>2024-01-30 03:31:30<SeP>2024-01-31 14:16:03<SeP>2024-02-02 01:00:36<SeP>2024-02-03 11:45:09<SeP>2024-02-04 22:29:42<SeP>2024-02-06 09:14:15<SeP>2024-02-07 19:58:48<SeP>2024-02-09 06:43:21<SeP>2024-02-10 17:27:54<SeP>2024-02-12 04:12:27<SeP>2024-02-13 14:57:00<SeP>2024-02-15 01:41:33<SeP>2024-02-16 12:26:06<SeP>2024-02-17 23:10:39<SeP>2024-02-19 09:55:12<SeP>2024-02-20 20:39:45<SeP>2024-02-22 07:24:18<SeP>2024-02-23 18:08:51<SeP>2024-02-25 04:53:24<SeP>2024-02-26 15:37:57<SeP>2024-02-28 02:22:30<SeP>2024-02-29 13:07:03<SeP>2024-03-01 23:51:36<SeP>2024-03-03 10:36:09<SeP>2024-03-04 21:20:42<SeP>2024-03-06 08:05:15<SeP>2024-03-07 18:49:48<SeP>2024-03-09 05:34:21<SeP>2024-03-10 17:18:54<SeP>2024-03-12 04:03:27<SeP>2024-03-13 14:48:00<SeP>2024-03-15 01:32:33<SeP>2024-03-16 12:17:06<SeP>2024-03-17 23:01:39<SeP>2024-03-19 09:46:12<SeP>2024-03-20 20:30:45<SeP>2024-03-22 07:15:18<SeP>2024-03-23 17:59:51<SeP>2024-03-25 04:44:24<SeP>2024-03-26 15:28:57<SeP>2024-03-28 02:13:30<SeP>2024-03-29 12:58:03<SeP>2024-03-30 23:42:36<SeP>2024-04-01 10:27:09<SeP>2024-04-02 21:11:42<SeP>2024-04-04 07:56:15<SeP>2024-04-05 18:40:48<SeP>2024-04-07 05:25:21<SeP>2024-04-08 16:09:54<SeP>2024-04-10 02:54:27<SeP>2024-04-11 13:39:00<SeP>2024-04-13 00:23:33<SeP>2024-04-14 11:08:06<SeP>2024-04-15 21:52:39<SeP>2024-04-17 08:37:12<SeP>2024-04-18 19:21:45<SeP>2024-04-20 06:06:18<SeP>2024-04-21 16:50:51<SeP>2024-04-23 03:35:24<SeP>2024-04-24 14:19:57<SeP>2024-04-26 01:04:30<SeP>2024-04-27 11:49:03<SeP>2024-04-28 22:33:36<SeP>2024-04-30 09:18:09<SeP>2024-05-01 20:02:42<SeP>2024-05-03 06:47:15<SeP>2024-05-04 17:31:48<SeP>2024-05-06 04:16:21<SeP>2024-05-07 15:00:54<SeP>2024-05-09 01:45:27<SeP>2024-05-10 12:30:00<SeP>2024-05-11 23:14:33<SeP>2024-05-13 09:59:06<SeP>2024-05-14 20:43:39<SeP>2024-05-16 07:28:12<SeP>2024-05-17 18:12:45<SeP>2024-05-19 04:57:18<SeP>2024-05-20 15:41:51<SeP>2024-05-22 02:26:24<SeP>2024-05-23 13:10:57<SeP>2024-05-24 23:55:30<SeP>2024-05-26 10:40:03<SeP>2024-05-27 21:24:36<SeP>2024-05-29 08:09:09<SeP>2024-05-30 18:53:42<SeP>2024-06-01 05:38:15<SeP>2024-06-02 16:22:48<SeP>2024-06-04 03:07:21<SeP>2024-06-05 13:51:54<SeP>2024-06-07 00:36:27<SeP>2024-06-08 11:21:00<SeP>2024-06-09 22:05:33<SeP>2024-06-11 08:50:06<SeP>2024-06-12 19:34:39<SeP>2024-06-14 06:19:12<SeP>2024-06-15 17:03:45<SeP>2024-06-17 03:48:18<SeP>2024-06-18 14:32:51<SeP>2024-06-20 01:17:24<SeP>2024-06-21 12:01:57<SeP>2024-06-22 22:46:30<SeP>2024-06-24 09:31:03<SeP>2024-06-25 20:15:36<SeP>2024-06-27 07:00:09<SeP>2024-06-28 17:44:42<SeP>2024-06-30 04:29:15<SeP>2024-07-01 15:13:48<SeP>2024-07-03 01:58:21<SeP>2024-07-04 12:42:54<SeP>2024-07-05 23:27:27<SeP>2024-07-07 10:12:00<SeP>2024-07-08 20:56:33<SeP>2024-07-10 07:41:06<SeP>2024-07-11 18:25:39<SeP>2024-07-13 05:10:12<SeP>2024-07-14 15:54:45<SeP>2024-07-16 02:39:18<SeP>2024-07-17 13:23:51<SeP>2024-07-19 00:08:24<SeP>2024-07-20 10:52:57<SeP>2024-07-21 21:37:30<SeP>2024-07-23 08:22:03<SeP>2024-07-24 19:06:36<SeP>2024-07-26 05:51:09<SeP>2024-07-27 16:35:42<SeP>2024-07-29 03:20:15<SeP>2024-07-30 14:04:48<SeP>2024-08-01 00:49:21<SeP>2024-08-02 11:33:54<SeP>2024-08-03 22:18:27<SeP>2024-08-05 09:03:00<SeP>2024-08-06 19:47:33<SeP>2024-08-08 06:32:06<SeP>2024-08-09 17:16:39<SeP>2024-08-11 04:01:12<SeP>2024-08-12 14:45:45<SeP>2024-08-14 01:30:18<SeP>2024-08-15 12:14:51<SeP>2024-08-16 22:59:24<SeP>2024-08-18 09:43:57<SeP>2024-08-19 20:28:30<SeP>2024-08-21 07:13:03<SeP>2024-08-22 17:57:36<SeP>2024-08-24 04:42:09<SeP>2024-08-25 15:26:42<SeP>2024-08-27 02:11:15<SeP>2024-08-28 12:55:48<SeP>2024-08-29 23:40:21<SeP>2024-08-31 10:24:54<SeP>2024-09-01 21:09:27<SeP>2024-09-03 07:54:00<SeP>2024-09-04 18:38:33<SeP>2024-09-06 05:23:06<SeP>2024-09-07 16:07:39<SeP>2024-09-09 02:52:12<SeP>2024-09-10 13:36:45<SeP>2024-09-12 00:21:18<SeP>2024-09-13 11:05:51<SeP>2024-09-14 21:50:24<SeP>2024-09-16 08:34:57<SeP>2024-09-17 19:19:30<SeP>2024-09-19 06:04:03<SeP>2024-09-20 16:48:36<SeP>2024-09-22 03:33:09<SeP>2024-09-23 14:17:42<SeP>2024-09-25 01:02:15<SeP>2024-09-26 11:46:48<SeP>2024-09-27 22:31:21<SeP>2024-09-29 09:15:54<SeP>2024-09-30 20:00:27<SeP>2024-10-02 06:45:00<SeP>2024-10-03 17:29:33<SeP>2024-10-05 04:14:06<SeP>2024-10-06 14:58:39<SeP>2024-10-08 01:43:12<SeP>2024-10-09 12:27:45<SeP>2024-10-10 23:12:18<SeP>2024-10-12 09:56:51<SeP>2024-10-13 20:41:24<SeP>2024-10-15 07:25:57<SeP>2024-10-16 18:10:30<SeP>2024-10-18 04:55:03<SeP>2024-10-19 15:39:36<SeP>2024-10-21 02:24:09<SeP>2024-10-22 13:08:42<SeP>2024-10-23 23:53:15<SeP>2024-10-25 10:37:48<SeP>2024-10-26 21:22:21<SeP>2024-10-28 08:06:54<SeP>2024-10-29 18:51:27<SeP>2024-10-31 05:36:00<SeP>2024-11-01 16:20:33<SeP>2024-11-03 02:05:06<SeP>2024-11-04 12:49:39<SeP>2024-11-05 23:34:12<SeP>2024-11-07 10:18:45<SeP>2024-11-08 21:03:18<SeP>2024-11-10 07:47:51<SeP>2024-11-11 18:32:24<SeP>2024-11-13 05:16:57<SeP>2024-11-14 16:01:30<SeP>2024-11-16 02:46:03<SeP>2024-11-17 13:30:36<SeP>2024-11-19 00:15:09<SeP>2024-11-20 10:59:42<SeP>2024-11-21 21:44:15<SeP>2024-11-23 08:28:48<SeP>2024-11-24 19:13:21<SeP>2024-11-26 05:57:54<SeP>2024-11-27 16:42:27<SeP>2024-11-29 03:27:00<SeP>2024-11-30 14:11:33<SeP>2024-12-02 00:56:06<SeP>2024-12-03 11:40:39<SeP>2024-12-04 22:25:12<SeP>2024-12-06 09:09:45<SeP>2024-12-07 19:54:18<SeP>2024-12-09 06:38:51<SeP>2024-12-10 17:23:24<SeP>2024-12-12 04:07:57<SeP>2024-12-13 14:52:30<SeP>2024-12-15 01:37:03<SeP>2024-12-16 12:21:36<SeP>2024-12-17 23:06:09<SeP>2024-12-19 09:50:42<SeP>2024-12-20 20:35:15<SeP>2024-12-22 07:19:48<SeP>2024-12-23 18:04:21<SeP>2024-12-25 04:48:54<SeP>2024-12-26 15:33:27<SeP>2024-12-28 02:18:00<SeP>2024-12-29 13:02:33<SeP>2024-12-30 23:47:06<SeP>2025-01-01 10:31:39<SeP>2025-01-02 21:16:12<SeP>2025-01-04 08:00:45<SeP>2025-01-05 18:45:18<SeP>2025-01-07 05:29:51<SeP>2025-01-08 16:14:24<SeP>2025-01-10 02:58:57<SeP>2025-01-11 13:43:30<SeP>2025-01-13 00:28:03<SeP>2025-01-14 11:12:36<SeP>2025-01-15 21:57:09<SeP>2025-01-17 08:41:42<SeP>2025-01-18 19:26:15<SeP>2025-01-20 06:10:48<SeP>2025-01-21 16:55:21<SeP>2025-01-23 03:39:54<SeP>2025-01-24 14:24:27<SeP>2025-01-26 01:09:00<SeP>2025-01-27 11:53:33<SeP>2025-01-28 22:38:06<SeP>2025-01-30 09:22:39<SeP>2025-01-31 20:07:12<SeP>2025-02-02 06:51:45<SeP>2025-02-03 17:36:18<SeP>2025-02-05 04:20:51<SeP>2025-02-06 15:05:24<SeP>2025-02-08 01:49:57<SeP>2025-02-09 12:34:30<SeP>2025-02-10 23:19:03<SeP>2025-02-12 10:03:36<SeP>2025-02-13 20:48:09<SeP>2025-02-15 07:32:42<SeP>2025-02-16 18:17:15<SeP>2025-02-18 05:01:48<SeP>2025-02-19 15:46:21<SeP>2025-02-21 02:30:54<SeP>2025-02-22 13:15:27";
  const item1Label       = "Escaneos";
  const item1Data        = "761<SeP>1464<SeP>1380<SeP>1443<SeP>1253<SeP>1682<SeP>963<SeP>957<SeP>1121<SeP>3373<SeP>1708<SeP>2587<SeP>2129<SeP>2191<SeP>758<SeP>862<SeP>1415<SeP>2142<SeP>1788<SeP>1764<SeP>1356<SeP>935<SeP>850<SeP>1436<SeP>795<SeP>998<SeP>800<SeP>1202<SeP>3243<SeP>923<SeP>817<SeP>1450<SeP>1232<SeP>807<SeP>2780<SeP>1582<SeP>2736<SeP>1821<SeP>1827<SeP>1317<SeP>1283<SeP>1774<SeP>1761<SeP>2138<SeP>1565<SeP>1741<SeP>1540<SeP>1563<SeP>1775<SeP>1678<SeP>2128<SeP>1458<SeP>1671<SeP>1731<SeP>3032<SeP>1383<SeP>1913<SeP>1794<SeP>2362<SeP>1542<SeP>2005<SeP>3270<SeP>1431<SeP>1463<SeP>1461<SeP>1431<SeP>1946<SeP>1517<SeP>1192<SeP>1428<SeP>1304<SeP>2154<SeP>1341<SeP>1041<SeP>1241<SeP>1350<SeP>7760<SeP>1617<SeP>1372<SeP>1329<SeP>1666<SeP>1917<SeP>1106<SeP>6531<SeP>1627<SeP>1643<SeP>945<SeP>1127<SeP>3283<SeP>1350<SeP>881<SeP>1007<SeP>1055<SeP>1031<SeP>3019<SeP>1023<SeP>1342<SeP>3002<SeP>5334<SeP>2548<SeP>1014<SeP>888<SeP>909<SeP>961<SeP>1016<SeP>927<SeP>1059<SeP>3442<SeP>2480<SeP>1462<SeP>1654<SeP>708<SeP>797<SeP>1419<SeP>1267<SeP>1066<SeP>1004<SeP>2247<SeP>1113<SeP>1110<SeP>1032<SeP>1012<SeP>1038<SeP>740<SeP>872<SeP>864<SeP>733<SeP>1114<SeP>830<SeP>916<SeP>785<SeP>896<SeP>870<SeP>644<SeP>802<SeP>855<SeP>867<SeP>862<SeP>839<SeP>817<SeP>790<SeP>784<SeP>1029<SeP>871<SeP>768<SeP>926<SeP>994<SeP>809<SeP>1089<SeP>974<SeP>444<SeP>931<SeP>811<SeP>909<SeP>1235<SeP>955<SeP>1068<SeP>1232<SeP>1077<SeP>927<SeP>891<SeP>958<SeP>809<SeP>827<SeP>1038<SeP>919<SeP>881<SeP>939<SeP>1068<SeP>921<SeP>1103<SeP>936<SeP>1034<SeP>1119<SeP>852<SeP>906<SeP>2197<SeP>1179<SeP>1152<SeP>1056<SeP>957<SeP>1156<SeP>986<SeP>826<SeP>753<SeP>866<SeP>1016<SeP>1002<SeP>798<SeP>1076<SeP>1280<SeP>1099<SeP>1128<SeP>1303<SeP>1170<SeP>1273<SeP>1261<SeP>1283<SeP>1476<SeP>1669<SeP>1694<SeP>1372<SeP>732<SeP>850<SeP>1178<SeP>976<SeP>601<SeP>843<SeP>845<SeP>974<SeP>819<SeP>5327<SeP>3357<SeP>1969<SeP>1258<SeP>1123<SeP>871<SeP>1057<SeP>839<SeP>1018<SeP>962<SeP>1069<SeP>994<SeP>1167<SeP>2309<SeP>1065<SeP>1193<SeP>1114<SeP>1338<SeP>1059<SeP>1034<SeP>983<SeP>1169<SeP>1070<SeP>978<SeP>1156<SeP>1054<SeP>1120<SeP>904<SeP>976<SeP>1318<SeP>1114<SeP>1087<SeP>1188<SeP>1368<SeP>1219<SeP>1488<SeP>1243<SeP>1056<SeP>1166<SeP>1139<SeP>1960<SeP>1266<SeP>1848<SeP>1619<SeP>1378<SeP>2010<SeP>1713<SeP>1107<SeP>1213<SeP>1173<SeP>1142<SeP>1595<SeP>1345<SeP>1099<SeP>1479<SeP>1828<SeP>1361<SeP>1414<SeP>1362<SeP>1449<SeP>1164<SeP>1075<SeP>1342<SeP>1064<SeP>1181<SeP>1285<SeP>1301<SeP>1058<SeP>1636<SeP>1652<SeP>1296<SeP>1640<SeP>1429<SeP>1281<SeP>980<SeP>968<SeP>1009<SeP>1005<SeP>797<SeP>990<SeP>1741<SeP>1186<SeP>1035<SeP>1116<SeP>964<SeP>763<SeP>1093<SeP>1360<SeP>819<SeP>955<SeP>880<SeP>1280<SeP>1523<SeP>1512<SeP>1128<SeP>1118<SeP>892<SeP>1647<SeP>1320<SeP>1005<SeP>1200<SeP>903<SeP>1547<SeP>1040<SeP>969<SeP>1149<SeP>1108<SeP>871<SeP>852<SeP>1129<SeP>1358<SeP>1580<SeP>1371<SeP>1369<SeP>1353<SeP>956<SeP>1153<SeP>1181<SeP>1155<SeP>887<SeP>1229<SeP>974<SeP>1182<SeP>1269<SeP>1504<SeP>1190<SeP>1683<SeP>1293<SeP>1664<SeP>1328<SeP>1301<SeP>1455<SeP>1391<SeP>1335<SeP>1289<SeP>1743<SeP>1426<SeP>1410<SeP>1567<SeP>1251<SeP>1467<SeP>1215<SeP>1281<SeP>1263<SeP>1446<SeP>1633<SeP>1283<SeP>1294<SeP>1225<SeP>1417<SeP>1189<SeP>1259<SeP>1417<SeP>1752<SeP>1719<SeP>1233<SeP>679<SeP>1392<SeP>1843<SeP>1222<SeP>1418<SeP>1204<SeP>1074<SeP>1353<SeP>1398<SeP>1251<SeP>1471<SeP>1455<SeP>1627<SeP>1514<SeP>1482<SeP>1591<SeP>1399<SeP>1283<SeP>1717<SeP>1509<SeP>1323<SeP>1161<SeP>1559<SeP>1772<SeP>1847<SeP>1760<SeP>1722<SeP>1594<SeP>1563<SeP>1619<SeP>1489<SeP>1569<SeP>1594";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "152<SeP>614<SeP>975<SeP>718<SeP>535<SeP>226<SeP>6968<SeP>507<SeP>9184<SeP>969<SeP>377<SeP>1146<SeP>1131<SeP>383<SeP>162<SeP>461<SeP>112<SeP>763<SeP>277<SeP>4147<SeP>7216<SeP>7240<SeP>7203<SeP>7619<SeP>271<SeP>321<SeP>350<SeP>211<SeP>515<SeP>5762<SeP>75<SeP>381<SeP>300<SeP>381<SeP>2419<SeP>9433<SeP>8427<SeP>10293<SeP>9841<SeP>5338<SeP>5930<SeP>8617<SeP>7759<SeP>9340<SeP>7949<SeP>7399<SeP>9328<SeP>7425<SeP>8493<SeP>8601<SeP>6112<SeP>5635<SeP>12720<SeP>6251<SeP>7146<SeP>8201<SeP>10242<SeP>18180<SeP>15951<SeP>9158<SeP>10129<SeP>8216<SeP>7766<SeP>8619<SeP>7946<SeP>8438<SeP>8015<SeP>6146<SeP>6617<SeP>7303<SeP>5657<SeP>3088<SeP>6766<SeP>5455<SeP>6176<SeP>6572<SeP>7649<SeP>4168<SeP>5214<SeP>8023<SeP>4473<SeP>6392<SeP>5651<SeP>4324<SeP>7372<SeP>4666<SeP>5488<SeP>6008<SeP>7211<SeP>21881<SeP>16572<SeP>27610<SeP>8415<SeP>7090<SeP>7051<SeP>11208<SeP>7763<SeP>4299<SeP>6219<SeP>3402<SeP>5479<SeP>7080<SeP>4803<SeP>8892<SeP>6542<SeP>5132<SeP>4217<SeP>5964<SeP>9219<SeP>7888<SeP>7417<SeP>5477<SeP>4425<SeP>10785<SeP>8841<SeP>5382<SeP>3122<SeP>6298<SeP>9103<SeP>5594<SeP>5859<SeP>9764<SeP>5471<SeP>1367<SeP>2437<SeP>1021<SeP>2531<SeP>2060<SeP>1436<SeP>728<SeP>1037<SeP>1277<SeP>1834<SeP>567<SeP>1287<SeP>1159<SeP>1006<SeP>885<SeP>1025<SeP>1513<SeP>1234<SeP>1102<SeP>1691<SeP>2060<SeP>4239<SeP>11403<SeP>8350<SeP>7307<SeP>7501<SeP>9357<SeP>6169<SeP>8839<SeP>11044<SeP>9267<SeP>12928<SeP>9111<SeP>10635<SeP>9499<SeP>12144<SeP>10275<SeP>8000<SeP>3894<SeP>7630<SeP>13526<SeP>16902<SeP>6465<SeP>8096<SeP>10811<SeP>17287<SeP>6941<SeP>5880<SeP>6382<SeP>7507<SeP>25443<SeP>8051<SeP>8334<SeP>11655<SeP>4444<SeP>6992<SeP>4832<SeP>15948<SeP>5110<SeP>6375<SeP>14434<SeP>7114<SeP>8001<SeP>7061<SeP>5449<SeP>3533<SeP>7080<SeP>7512<SeP>4612<SeP>6495<SeP>8144<SeP>5704<SeP>19442<SeP>7873<SeP>6543<SeP>5882<SeP>8067<SeP>10425<SeP>7043<SeP>3286<SeP>4588<SeP>5061<SeP>3901<SeP>4342<SeP>3076<SeP>631<SeP>110<SeP>635<SeP>610<SeP>577<SeP>740<SeP>361<SeP>648<SeP>1237<SeP>1247<SeP>3146<SeP>22955<SeP>534<SeP>3481<SeP>3706<SeP>2840<SeP>7246<SeP>2983<SeP>4254<SeP>2437<SeP>3853<SeP>2787<SeP>2923<SeP>4398<SeP>2801<SeP>2350<SeP>3502<SeP>2045<SeP>1635<SeP>2146<SeP>1548<SeP>941<SeP>1368<SeP>1247<SeP>770<SeP>1700<SeP>26791<SeP>1767<SeP>4076<SeP>3899<SeP>2166<SeP>3669<SeP>2699<SeP>1665<SeP>3840<SeP>2148<SeP>3767<SeP>2368<SeP>2964<SeP>3555<SeP>4313<SeP>5407<SeP>4712<SeP>4432<SeP>2813<SeP>2695<SeP>4127<SeP>3882<SeP>6868<SeP>8208<SeP>3719<SeP>2270<SeP>3260<SeP>3375<SeP>4640<SeP>3143<SeP>2865<SeP>2374<SeP>4998<SeP>5052<SeP>3058<SeP>6055<SeP>4218<SeP>6156<SeP>4543<SeP>5378<SeP>5007<SeP>22110<SeP>5621<SeP>10669<SeP>1741<SeP>3241<SeP>3859<SeP>3646<SeP>5290<SeP>3421<SeP>4748<SeP>4581<SeP>4795<SeP>3107<SeP>3876<SeP>2163<SeP>1533<SeP>2060<SeP>3452<SeP>2210<SeP>3452<SeP>3357<SeP>4467<SeP>3345<SeP>3244<SeP>4502<SeP>3328<SeP>3103<SeP>4894<SeP>7674<SeP>6114<SeP>5485<SeP>5009<SeP>4764<SeP>3554<SeP>3545<SeP>4620<SeP>5503<SeP>5278<SeP>4389<SeP>4390<SeP>2066<SeP>669<SeP>2015<SeP>1664<SeP>822<SeP>1413<SeP>1740<SeP>1123<SeP>2016<SeP>4071<SeP>5262<SeP>5971<SeP>33986<SeP>4840<SeP>5811<SeP>22649<SeP>5276<SeP>5404<SeP>5834<SeP>4216<SeP>24577<SeP>4956<SeP>5189<SeP>4793<SeP>5477<SeP>7629<SeP>27562<SeP>4689<SeP>3526<SeP>4192<SeP>3947<SeP>6436<SeP>3507<SeP>3853<SeP>2931<SeP>4187<SeP>5555<SeP>4624<SeP>18071<SeP>5401<SeP>6305<SeP>5623<SeP>1344<SeP>3459<SeP>3982<SeP>4820<SeP>3408<SeP>3591<SeP>3113<SeP>3295<SeP>3501<SeP>3738<SeP>5745<SeP>8551<SeP>10144<SeP>8626<SeP>9055<SeP>7659<SeP>7214<SeP>4968<SeP>5218<SeP>3728<SeP>25409<SeP>3718<SeP>3134<SeP>3959<SeP>10568<SeP>5652<SeP>4883<SeP>3376<SeP>5046<SeP>3414<SeP>4882<SeP>9253<SeP>8763";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:44:33<SeP>2023-07-28 21:29:06<SeP>2023-07-30 08:13:39<SeP>2023-07-31 18:58:12<SeP>2023-08-02 05:42:45<SeP>2023-08-03 16:27:18<SeP>2023-08-05 03:11:51<SeP>2023-08-06 13:56:24<SeP>2023-08-08 00:40:57<SeP>2023-08-09 11:25:30<SeP>2023-08-10 22:10:03<SeP>2023-08-12 08:54:36<SeP>2023-08-13 19:39:09<SeP>2023-08-15 06:23:42<SeP>2023-08-16 17:08:15<SeP>2023-08-18 03:52:48<SeP>2023-08-19 14:37:21<SeP>2023-08-21 01:21:54<SeP>2023-08-22 12:06:27<SeP>2023-08-23 22:51:00<SeP>2023-08-25 09:35:33<SeP>2023-08-26 20:20:06<SeP>2023-08-28 07:04:39<SeP>2023-08-29 17:49:12<SeP>2023-08-31 04:33:45<SeP>2023-09-01 15:18:18<SeP>2023-09-03 02:02:51<SeP>2023-09-04 12:47:24<SeP>2023-09-05 23:31:57<SeP>2023-09-07 10:16:30<SeP>2023-09-08 21:01:03<SeP>2023-09-10 07:45:36<SeP>2023-09-11 18:30:09<SeP>2023-09-13 05:14:42<SeP>2023-09-14 15:59:15<SeP>2023-09-16 02:43:48<SeP>2023-09-17 13:28:21<SeP>2023-09-19 00:12:54<SeP>2023-09-20 10:57:27<SeP>2023-09-21 21:42:00<SeP>2023-09-23 08:26:33<SeP>2023-09-24 19:11:06<SeP>2023-09-26 05:55:39<SeP>2023-09-27 16:40:12<SeP>2023-09-29 03:24:45<SeP>2023-09-30 14:09:18<SeP>2023-10-02 00:53:51<SeP>2023-10-03 11:38:24<SeP>2023-10-04 22:22:57<SeP>2023-10-06 09:07:30<SeP>2023-10-07 19:52:03<SeP>2023-10-09 06:36:36<SeP>2023-10-10 17:21:09<SeP>2023-10-12 04:05:42<SeP>2023-10-13 14:50:15<SeP>2023-10-15 01:34:48<SeP>2023-10-16 12:19:21<SeP>2023-10-17 23:03:54<SeP>2023-10-19 09:48:27<SeP>2023-10-20 20:33:00<SeP>2023-10-22 07:17:33<SeP>2023-10-23 18:02:06<SeP>2023-10-25 04:46:39<SeP>2023-10-26 15:31:12<SeP>2023-10-28 02:15:45<SeP>2023-10-29 13:00:18<SeP>2023-10-30 23:44:51<SeP>2023-11-01 10:29:24<SeP>2023-11-02 21:13:57<SeP>2023-11-04 07:58:30<SeP>2023-11-05 17:43:03<SeP>2023-11-07 04:27:36<SeP>2023-11-08 15:12:09<SeP>2023-11-10 01:56:42<SeP>2023-11-11 12:41:15<SeP>2023-11-12 23:25:48<SeP>2023-11-14 10:10:21<SeP>2023-11-15 20:54:54<SeP>2023-11-17 07:39:27<SeP>2023-11-18 18:24:00<SeP>2023-11-20 05:08:33<SeP>2023-11-21 15:53:06<SeP>2023-11-23 02:37:39<SeP>2023-11-24 13:22:12<SeP>2023-11-26 00:06:45<SeP>2023-11-27 10:51:18<SeP>2023-11-28 21:35:51<SeP>2023-11-30 08:20:24<SeP>2023-12-01 19:04:57<SeP>2023-12-03 05:49:30<SeP>2023-12-04 16:34:03<SeP>2023-12-06 03:18:36<SeP>2023-12-07 14:03:09<SeP>2023-12-09 00:47:42<SeP>2023-12-10 11:32:15<SeP>2023-12-11 22:16:48<SeP>2023-12-13 09:01:21<SeP>2023-12-14 19:45:54<SeP>2023-12-16 06:30:27<SeP>2023-12-17 17:15:00<SeP>2023-12-19 03:59:33<SeP>2023-12-20 14:44:06<SeP>2023-12-22 01:28:39<SeP>2023-12-23 12:13:12<SeP>2023-12-24 22:57:45<SeP>2023-12-26 09:42:18<SeP>2023-12-27 20:26:51<SeP>2023-12-29 07:11:24<SeP>2023-12-30 17:55:57<SeP>2024-01-01 04:40:30<SeP>2024-01-02 15:25:03<SeP>2024-01-04 02:09:36<SeP>2024-01-05 12:54:09<SeP>2024-01-06 23:38:42<SeP>2024-01-08 10:23:15<SeP>2024-01-09 21:07:48<SeP>2024-01-11 07:52:21<SeP>2024-01-12 18:36:54<SeP>2024-01-14 05:21:27<SeP>2024-01-15 16:06:00<SeP>2024-01-17 02:50:33<SeP>2024-01-18 13:35:06<SeP>2024-01-20 00:19:39<SeP>2024-01-21 11:04:12<SeP>2024-01-22 21:48:45<SeP>2024-01-24 08:33:18<SeP>2024-01-25 19:17:51<SeP>2024-01-27 06:02:24<SeP>2024-01-28 16:46:57<SeP>2024-01-30 03:31:30<SeP>2024-01-31 14:16:03<SeP>2024-02-02 01:00:36<SeP>2024-02-03 11:45:09<SeP>2024-02-04 22:29:42<SeP>2024-02-06 09:14:15<SeP>2024-02-07 19:58:48<SeP>2024-02-09 06:43:21<SeP>2024-02-10 17:27:54<SeP>2024-02-12 04:12:27<SeP>2024-02-13 14:57:00<SeP>2024-02-15 01:41:33<SeP>2024-02-16 12:26:06<SeP>2024-02-17 23:10:39<SeP>2024-02-19 09:55:12<SeP>2024-02-20 20:39:45<SeP>2024-02-22 07:24:18<SeP>2024-02-23 18:08:51<SeP>2024-02-25 04:53:24<SeP>2024-02-26 15:37:57<SeP>2024-02-28 02:22:30<SeP>2024-02-29 13:07:03<SeP>2024-03-01 23:51:36<SeP>2024-03-03 10:36:09<SeP>2024-03-04 21:20:42<SeP>2024-03-06 08:05:15<SeP>2024-03-07 18:49:48<SeP>2024-03-09 05:34:21<SeP>2024-03-10 17:18:54<SeP>2024-03-12 04:03:27<SeP>2024-03-13 14:48:00<SeP>2024-03-15 01:32:33<SeP>2024-03-16 12:17:06<SeP>2024-03-17 23:01:39<SeP>2024-03-19 09:46:12<SeP>2024-03-20 20:30:45<SeP>2024-03-22 07:15:18<SeP>2024-03-23 17:59:51<SeP>2024-03-25 04:44:24<SeP>2024-03-26 15:28:57<SeP>2024-03-28 02:13:30<SeP>2024-03-29 12:58:03<SeP>2024-03-30 23:42:36<SeP>2024-04-01 10:27:09<SeP>2024-04-02 21:11:42<SeP>2024-04-04 07:56:15<SeP>2024-04-05 18:40:48<SeP>2024-04-07 05:25:21<SeP>2024-04-08 16:09:54<SeP>2024-04-10 02:54:27<SeP>2024-04-11 13:39:00<SeP>2024-04-13 00:23:33<SeP>2024-04-14 11:08:06<SeP>2024-04-15 21:52:39<SeP>2024-04-17 08:37:12<SeP>2024-04-18 19:21:45<SeP>2024-04-20 06:06:18<SeP>2024-04-21 16:50:51<SeP>2024-04-23 03:35:24<SeP>2024-04-24 14:19:57<SeP>2024-04-26 01:04:30<SeP>2024-04-27 11:49:03<SeP>2024-04-28 22:33:36<SeP>2024-04-30 09:18:09<SeP>2024-05-01 20:02:42<SeP>2024-05-03 06:47:15<SeP>2024-05-04 17:31:48<SeP>2024-05-06 04:16:21<SeP>2024-05-07 15:00:54<SeP>2024-05-09 01:45:27<SeP>2024-05-10 12:30:00<SeP>2024-05-11 23:14:33<SeP>2024-05-13 09:59:06<SeP>2024-05-14 20:43:39<SeP>2024-05-16 07:28:12<SeP>2024-05-17 18:12:45<SeP>2024-05-19 04:57:18<SeP>2024-05-20 15:41:51<SeP>2024-05-22 02:26:24<SeP>2024-05-23 13:10:57<SeP>2024-05-24 23:55:30<SeP>2024-05-26 10:40:03<SeP>2024-05-27 21:24:36<SeP>2024-05-29 08:09:09<SeP>2024-05-30 18:53:42<SeP>2024-06-01 05:38:15<SeP>2024-06-02 16:22:48<SeP>2024-06-04 03:07:21<SeP>2024-06-05 13:51:54<SeP>2024-06-07 00:36:27<SeP>2024-06-08 11:21:00<SeP>2024-06-09 22:05:33<SeP>2024-06-11 08:50:06<SeP>2024-06-12 19:34:39<SeP>2024-06-14 06:19:12<SeP>2024-06-15 17:03:45<SeP>2024-06-17 03:48:18<SeP>2024-06-18 14:32:51<SeP>2024-06-20 01:17:24<SeP>2024-06-21 12:01:57<SeP>2024-06-22 22:46:30<SeP>2024-06-24 09:31:03<SeP>2024-06-25 20:15:36<SeP>2024-06-27 07:00:09<SeP>2024-06-28 17:44:42<SeP>2024-06-30 04:29:15<SeP>2024-07-01 15:13:48<SeP>2024-07-03 01:58:21<SeP>2024-07-04 12:42:54<SeP>2024-07-05 23:27:27<SeP>2024-07-07 10:12:00<SeP>2024-07-08 20:56:33<SeP>2024-07-10 07:41:06<SeP>2024-07-11 18:25:39<SeP>2024-07-13 05:10:12<SeP>2024-07-14 15:54:45<SeP>2024-07-16 02:39:18<SeP>2024-07-17 13:23:51<SeP>2024-07-19 00:08:24<SeP>2024-07-20 10:52:57<SeP>2024-07-21 21:37:30<SeP>2024-07-23 08:22:03<SeP>2024-07-24 19:06:36<SeP>2024-07-26 05:51:09<SeP>2024-07-27 16:35:42<SeP>2024-07-29 03:20:15<SeP>2024-07-30 14:04:48<SeP>2024-08-01 00:49:21<SeP>2024-08-02 11:33:54<SeP>2024-08-03 22:18:27<SeP>2024-08-05 09:03:00<SeP>2024-08-06 19:47:33<SeP>2024-08-08 06:32:06<SeP>2024-08-09 17:16:39<SeP>2024-08-11 04:01:12<SeP>2024-08-12 14:45:45<SeP>2024-08-14 01:30:18<SeP>2024-08-15 12:14:51<SeP>2024-08-16 22:59:24<SeP>2024-08-18 09:43:57<SeP>2024-08-19 20:28:30<SeP>2024-08-21 07:13:03<SeP>2024-08-22 17:57:36<SeP>2024-08-24 04:42:09<SeP>2024-08-25 15:26:42<SeP>2024-08-27 02:11:15<SeP>2024-08-28 12:55:48<SeP>2024-08-29 23:40:21<SeP>2024-08-31 10:24:54<SeP>2024-09-01 21:09:27<SeP>2024-09-03 07:54:00<SeP>2024-09-04 18:38:33<SeP>2024-09-06 05:23:06<SeP>2024-09-07 16:07:39<SeP>2024-09-09 02:52:12<SeP>2024-09-10 13:36:45<SeP>2024-09-12 00:21:18<SeP>2024-09-13 11:05:51<SeP>2024-09-14 21:50:24<SeP>2024-09-16 08:34:57<SeP>2024-09-17 19:19:30<SeP>2024-09-19 06:04:03<SeP>2024-09-20 16:48:36<SeP>2024-09-22 03:33:09<SeP>2024-09-23 14:17:42<SeP>2024-09-25 01:02:15<SeP>2024-09-26 11:46:48<SeP>2024-09-27 22:31:21<SeP>2024-09-29 09:15:54<SeP>2024-09-30 20:00:27<SeP>2024-10-02 06:45:00<SeP>2024-10-03 17:29:33<SeP>2024-10-05 04:14:06<SeP>2024-10-06 14:58:39<SeP>2024-10-08 01:43:12<SeP>2024-10-09 12:27:45<SeP>2024-10-10 23:12:18<SeP>2024-10-12 09:56:51<SeP>2024-10-13 20:41:24<SeP>2024-10-15 07:25:57<SeP>2024-10-16 18:10:30<SeP>2024-10-18 04:55:03<SeP>2024-10-19 15:39:36<SeP>2024-10-21 02:24:09<SeP>2024-10-22 13:08:42<SeP>2024-10-23 23:53:15<SeP>2024-10-25 10:37:48<SeP>2024-10-26 21:22:21<SeP>2024-10-28 08:06:54<SeP>2024-10-29 18:51:27<SeP>2024-10-31 05:36:00<SeP>2024-11-01 16:20:33<SeP>2024-11-03 02:05:06<SeP>2024-11-04 12:49:39<SeP>2024-11-05 23:34:12<SeP>2024-11-07 10:18:45<SeP>2024-11-08 21:03:18<SeP>2024-11-10 07:47:51<SeP>2024-11-11 18:32:24<SeP>2024-11-13 05:16:57<SeP>2024-11-14 16:01:30<SeP>2024-11-16 02:46:03<SeP>2024-11-17 13:30:36<SeP>2024-11-19 00:15:09<SeP>2024-11-20 10:59:42<SeP>2024-11-21 21:44:15<SeP>2024-11-23 08:28:48<SeP>2024-11-24 19:13:21<SeP>2024-11-26 05:57:54<SeP>2024-11-27 16:42:27<SeP>2024-11-29 03:27:00<SeP>2024-11-30 14:11:33<SeP>2024-12-02 00:56:06<SeP>2024-12-03 11:40:39<SeP>2024-12-04 22:25:12<SeP>2024-12-06 09:09:45<SeP>2024-12-07 19:54:18<SeP>2024-12-09 06:38:51<SeP>2024-12-10 17:23:24<SeP>2024-12-12 04:07:57<SeP>2024-12-13 14:52:30<SeP>2024-12-15 01:37:03<SeP>2024-12-16 12:21:36<SeP>2024-12-17 23:06:09<SeP>2024-12-19 09:50:42<SeP>2024-12-20 20:35:15<SeP>2024-12-22 07:19:48<SeP>2024-12-23 18:04:21<SeP>2024-12-25 04:48:54<SeP>2024-12-26 15:33:27<SeP>2024-12-28 02:18:00<SeP>2024-12-29 13:02:33<SeP>2024-12-30 23:47:06<SeP>2025-01-01 10:31:39<SeP>2025-01-02 21:16:12<SeP>2025-01-04 08:00:45<SeP>2025-01-05 18:45:18<SeP>2025-01-07 05:29:51<SeP>2025-01-08 16:14:24<SeP>2025-01-10 02:58:57<SeP>2025-01-11 13:43:30<SeP>2025-01-13 00:28:03<SeP>2025-01-14 11:12:36<SeP>2025-01-15 21:57:09<SeP>2025-01-17 08:41:42<SeP>2025-01-18 19:26:15<SeP>2025-01-20 06:10:48<SeP>2025-01-21 16:55:21<SeP>2025-01-23 03:39:54<SeP>2025-01-24 14:24:27<SeP>2025-01-26 01:09:00<SeP>2025-01-27 11:53:33<SeP>2025-01-28 22:38:06<SeP>2025-01-30 09:22:39<SeP>2025-01-31 20:07:12<SeP>2025-02-02 06:51:45<SeP>2025-02-03 17:36:18<SeP>2025-02-05 04:20:51<SeP>2025-02-06 15:05:24<SeP>2025-02-08 01:49:57<SeP>2025-02-09 12:34:30<SeP>2025-02-10 23:19:03<SeP>2025-02-12 10:03:36<SeP>2025-02-13 20:48:09<SeP>2025-02-15 07:32:42<SeP>2025-02-16 18:17:15<SeP>2025-02-18 05:01:48<SeP>2025-02-19 15:46:21<SeP>2025-02-21 02:30:54<SeP>2025-02-22 13:15:27";
  const itemLabel       = "Escaneos";
  const itemData        = "761<SeP>1464<SeP>1380<SeP>1443<SeP>1253<SeP>1682<SeP>963<SeP>957<SeP>1121<SeP>3373<SeP>1708<SeP>2587<SeP>2129<SeP>2191<SeP>758<SeP>862<SeP>1415<SeP>2142<SeP>1788<SeP>1764<SeP>1356<SeP>935<SeP>850<SeP>1436<SeP>795<SeP>998<SeP>800<SeP>1202<SeP>3243<SeP>923<SeP>817<SeP>1450<SeP>1232<SeP>807<SeP>2780<SeP>1582<SeP>2736<SeP>1821<SeP>1827<SeP>1317<SeP>1283<SeP>1774<SeP>1761<SeP>2138<SeP>1565<SeP>1741<SeP>1540<SeP>1563<SeP>1775<SeP>1678<SeP>2128<SeP>1458<SeP>1671<SeP>1731<SeP>3032<SeP>1383<SeP>1913<SeP>1794<SeP>2362<SeP>1542<SeP>2005<SeP>3270<SeP>1431<SeP>1463<SeP>1461<SeP>1431<SeP>1946<SeP>1517<SeP>1192<SeP>1428<SeP>1304<SeP>2154<SeP>1341<SeP>1041<SeP>1241<SeP>1350<SeP>7760<SeP>1617<SeP>1372<SeP>1329<SeP>1666<SeP>1917<SeP>1106<SeP>6531<SeP>1627<SeP>1643<SeP>945<SeP>1127<SeP>3283<SeP>1350<SeP>881<SeP>1007<SeP>1055<SeP>1031<SeP>3019<SeP>1023<SeP>1342<SeP>3002<SeP>5334<SeP>2548<SeP>1014<SeP>888<SeP>909<SeP>961<SeP>1016<SeP>927<SeP>1059<SeP>3442<SeP>2480<SeP>1462<SeP>1654<SeP>708<SeP>797<SeP>1419<SeP>1267<SeP>1066<SeP>1004<SeP>2247<SeP>1113<SeP>1110<SeP>1032<SeP>1012<SeP>1038<SeP>740<SeP>872<SeP>864<SeP>733<SeP>1114<SeP>830<SeP>916<SeP>785<SeP>896<SeP>870<SeP>644<SeP>802<SeP>855<SeP>867<SeP>862<SeP>839<SeP>817<SeP>790<SeP>784<SeP>1029<SeP>871<SeP>768<SeP>926<SeP>994<SeP>809<SeP>1089<SeP>974<SeP>444<SeP>931<SeP>811<SeP>909<SeP>1235<SeP>955<SeP>1068<SeP>1232<SeP>1077<SeP>927<SeP>891<SeP>958<SeP>809<SeP>827<SeP>1038<SeP>919<SeP>881<SeP>939<SeP>1068<SeP>921<SeP>1103<SeP>936<SeP>1034<SeP>1119<SeP>852<SeP>906<SeP>2197<SeP>1179<SeP>1152<SeP>1056<SeP>957<SeP>1156<SeP>986<SeP>826<SeP>753<SeP>866<SeP>1016<SeP>1002<SeP>798<SeP>1076<SeP>1280<SeP>1099<SeP>1128<SeP>1303<SeP>1170<SeP>1273<SeP>1261<SeP>1283<SeP>1476<SeP>1669<SeP>1694<SeP>1372<SeP>732<SeP>850<SeP>1178<SeP>976<SeP>601<SeP>843<SeP>845<SeP>974<SeP>819<SeP>5327<SeP>3357<SeP>1969<SeP>1258<SeP>1123<SeP>871<SeP>1057<SeP>839<SeP>1018<SeP>962<SeP>1069<SeP>994<SeP>1167<SeP>2309<SeP>1065<SeP>1193<SeP>1114<SeP>1338<SeP>1059<SeP>1034<SeP>983<SeP>1169<SeP>1070<SeP>978<SeP>1156<SeP>1054<SeP>1120<SeP>904<SeP>976<SeP>1318<SeP>1114<SeP>1087<SeP>1188<SeP>1368<SeP>1219<SeP>1488<SeP>1243<SeP>1056<SeP>1166<SeP>1139<SeP>1960<SeP>1266<SeP>1848<SeP>1619<SeP>1378<SeP>2010<SeP>1713<SeP>1107<SeP>1213<SeP>1173<SeP>1142<SeP>1595<SeP>1345<SeP>1099<SeP>1479<SeP>1828<SeP>1361<SeP>1414<SeP>1362<SeP>1449<SeP>1164<SeP>1075<SeP>1342<SeP>1064<SeP>1181<SeP>1285<SeP>1301<SeP>1058<SeP>1636<SeP>1652<SeP>1296<SeP>1640<SeP>1429<SeP>1281<SeP>980<SeP>968<SeP>1009<SeP>1005<SeP>797<SeP>990<SeP>1741<SeP>1186<SeP>1035<SeP>1116<SeP>964<SeP>763<SeP>1093<SeP>1360<SeP>819<SeP>955<SeP>880<SeP>1280<SeP>1523<SeP>1512<SeP>1128<SeP>1118<SeP>892<SeP>1647<SeP>1320<SeP>1005<SeP>1200<SeP>903<SeP>1547<SeP>1040<SeP>969<SeP>1149<SeP>1108<SeP>871<SeP>852<SeP>1129<SeP>1358<SeP>1580<SeP>1371<SeP>1369<SeP>1353<SeP>956<SeP>1153<SeP>1181<SeP>1155<SeP>887<SeP>1229<SeP>974<SeP>1182<SeP>1269<SeP>1504<SeP>1190<SeP>1683<SeP>1293<SeP>1664<SeP>1328<SeP>1301<SeP>1455<SeP>1391<SeP>1335<SeP>1289<SeP>1743<SeP>1426<SeP>1410<SeP>1567<SeP>1251<SeP>1467<SeP>1215<SeP>1281<SeP>1263<SeP>1446<SeP>1633<SeP>1283<SeP>1294<SeP>1225<SeP>1417<SeP>1189<SeP>1259<SeP>1417<SeP>1752<SeP>1719<SeP>1233<SeP>679<SeP>1392<SeP>1843<SeP>1222<SeP>1418<SeP>1204<SeP>1074<SeP>1353<SeP>1398<SeP>1251<SeP>1471<SeP>1455<SeP>1627<SeP>1514<SeP>1482<SeP>1591<SeP>1399<SeP>1283<SeP>1717<SeP>1509<SeP>1323<SeP>1161<SeP>1559<SeP>1772<SeP>1847<SeP>1760<SeP>1722<SeP>1594<SeP>1563<SeP>1619<SeP>1489<SeP>1569<SeP>1594";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:44:33<SeP>2023-07-28 21:29:06<SeP>2023-07-30 08:13:39<SeP>2023-07-31 18:58:12<SeP>2023-08-02 05:42:45<SeP>2023-08-03 16:27:18<SeP>2023-08-05 03:11:51<SeP>2023-08-06 13:56:24<SeP>2023-08-08 00:40:57<SeP>2023-08-09 11:25:30<SeP>2023-08-10 22:10:03<SeP>2023-08-12 08:54:36<SeP>2023-08-13 19:39:09<SeP>2023-08-15 06:23:42<SeP>2023-08-16 17:08:15<SeP>2023-08-18 03:52:48<SeP>2023-08-19 14:37:21<SeP>2023-08-21 01:21:54<SeP>2023-08-22 12:06:27<SeP>2023-08-23 22:51:00<SeP>2023-08-25 09:35:33<SeP>2023-08-26 20:20:06<SeP>2023-08-28 07:04:39<SeP>2023-08-29 17:49:12<SeP>2023-08-31 04:33:45<SeP>2023-09-01 15:18:18<SeP>2023-09-03 02:02:51<SeP>2023-09-04 12:47:24<SeP>2023-09-05 23:31:57<SeP>2023-09-07 10:16:30<SeP>2023-09-08 21:01:03<SeP>2023-09-10 07:45:36<SeP>2023-09-11 18:30:09<SeP>2023-09-13 05:14:42<SeP>2023-09-14 15:59:15<SeP>2023-09-16 02:43:48<SeP>2023-09-17 13:28:21<SeP>2023-09-19 00:12:54<SeP>2023-09-20 10:57:27<SeP>2023-09-21 21:42:00<SeP>2023-09-23 08:26:33<SeP>2023-09-24 19:11:06<SeP>2023-09-26 05:55:39<SeP>2023-09-27 16:40:12<SeP>2023-09-29 03:24:45<SeP>2023-09-30 14:09:18<SeP>2023-10-02 00:53:51<SeP>2023-10-03 11:38:24<SeP>2023-10-04 22:22:57<SeP>2023-10-06 09:07:30<SeP>2023-10-07 19:52:03<SeP>2023-10-09 06:36:36<SeP>2023-10-10 17:21:09<SeP>2023-10-12 04:05:42<SeP>2023-10-13 14:50:15<SeP>2023-10-15 01:34:48<SeP>2023-10-16 12:19:21<SeP>2023-10-17 23:03:54<SeP>2023-10-19 09:48:27<SeP>2023-10-20 20:33:00<SeP>2023-10-22 07:17:33<SeP>2023-10-23 18:02:06<SeP>2023-10-25 04:46:39<SeP>2023-10-26 15:31:12<SeP>2023-10-28 02:15:45<SeP>2023-10-29 13:00:18<SeP>2023-10-30 23:44:51<SeP>2023-11-01 10:29:24<SeP>2023-11-02 21:13:57<SeP>2023-11-04 07:58:30<SeP>2023-11-05 17:43:03<SeP>2023-11-07 04:27:36<SeP>2023-11-08 15:12:09<SeP>2023-11-10 01:56:42<SeP>2023-11-11 12:41:15<SeP>2023-11-12 23:25:48<SeP>2023-11-14 10:10:21<SeP>2023-11-15 20:54:54<SeP>2023-11-17 07:39:27<SeP>2023-11-18 18:24:00<SeP>2023-11-20 05:08:33<SeP>2023-11-21 15:53:06<SeP>2023-11-23 02:37:39<SeP>2023-11-24 13:22:12<SeP>2023-11-26 00:06:45<SeP>2023-11-27 10:51:18<SeP>2023-11-28 21:35:51<SeP>2023-11-30 08:20:24<SeP>2023-12-01 19:04:57<SeP>2023-12-03 05:49:30<SeP>2023-12-04 16:34:03<SeP>2023-12-06 03:18:36<SeP>2023-12-07 14:03:09<SeP>2023-12-09 00:47:42<SeP>2023-12-10 11:32:15<SeP>2023-12-11 22:16:48<SeP>2023-12-13 09:01:21<SeP>2023-12-14 19:45:54<SeP>2023-12-16 06:30:27<SeP>2023-12-17 17:15:00<SeP>2023-12-19 03:59:33<SeP>2023-12-20 14:44:06<SeP>2023-12-22 01:28:39<SeP>2023-12-23 12:13:12<SeP>2023-12-24 22:57:45<SeP>2023-12-26 09:42:18<SeP>2023-12-27 20:26:51<SeP>2023-12-29 07:11:24<SeP>2023-12-30 17:55:57<SeP>2024-01-01 04:40:30<SeP>2024-01-02 15:25:03<SeP>2024-01-04 02:09:36<SeP>2024-01-05 12:54:09<SeP>2024-01-06 23:38:42<SeP>2024-01-08 10:23:15<SeP>2024-01-09 21:07:48<SeP>2024-01-11 07:52:21<SeP>2024-01-12 18:36:54<SeP>2024-01-14 05:21:27<SeP>2024-01-15 16:06:00<SeP>2024-01-17 02:50:33<SeP>2024-01-18 13:35:06<SeP>2024-01-20 00:19:39<SeP>2024-01-21 11:04:12<SeP>2024-01-22 21:48:45<SeP>2024-01-24 08:33:18<SeP>2024-01-25 19:17:51<SeP>2024-01-27 06:02:24<SeP>2024-01-28 16:46:57<SeP>2024-01-30 03:31:30<SeP>2024-01-31 14:16:03<SeP>2024-02-02 01:00:36<SeP>2024-02-03 11:45:09<SeP>2024-02-04 22:29:42<SeP>2024-02-06 09:14:15<SeP>2024-02-07 19:58:48<SeP>2024-02-09 06:43:21<SeP>2024-02-10 17:27:54<SeP>2024-02-12 04:12:27<SeP>2024-02-13 14:57:00<SeP>2024-02-15 01:41:33<SeP>2024-02-16 12:26:06<SeP>2024-02-17 23:10:39<SeP>2024-02-19 09:55:12<SeP>2024-02-20 20:39:45<SeP>2024-02-22 07:24:18<SeP>2024-02-23 18:08:51<SeP>2024-02-25 04:53:24<SeP>2024-02-26 15:37:57<SeP>2024-02-28 02:22:30<SeP>2024-02-29 13:07:03<SeP>2024-03-01 23:51:36<SeP>2024-03-03 10:36:09<SeP>2024-03-04 21:20:42<SeP>2024-03-06 08:05:15<SeP>2024-03-07 18:49:48<SeP>2024-03-09 05:34:21<SeP>2024-03-10 17:18:54<SeP>2024-03-12 04:03:27<SeP>2024-03-13 14:48:00<SeP>2024-03-15 01:32:33<SeP>2024-03-16 12:17:06<SeP>2024-03-17 23:01:39<SeP>2024-03-19 09:46:12<SeP>2024-03-20 20:30:45<SeP>2024-03-22 07:15:18<SeP>2024-03-23 17:59:51<SeP>2024-03-25 04:44:24<SeP>2024-03-26 15:28:57<SeP>2024-03-28 02:13:30<SeP>2024-03-29 12:58:03<SeP>2024-03-30 23:42:36<SeP>2024-04-01 10:27:09<SeP>2024-04-02 21:11:42<SeP>2024-04-04 07:56:15<SeP>2024-04-05 18:40:48<SeP>2024-04-07 05:25:21<SeP>2024-04-08 16:09:54<SeP>2024-04-10 02:54:27<SeP>2024-04-11 13:39:00<SeP>2024-04-13 00:23:33<SeP>2024-04-14 11:08:06<SeP>2024-04-15 21:52:39<SeP>2024-04-17 08:37:12<SeP>2024-04-18 19:21:45<SeP>2024-04-20 06:06:18<SeP>2024-04-21 16:50:51<SeP>2024-04-23 03:35:24<SeP>2024-04-24 14:19:57<SeP>2024-04-26 01:04:30<SeP>2024-04-27 11:49:03<SeP>2024-04-28 22:33:36<SeP>2024-04-30 09:18:09<SeP>2024-05-01 20:02:42<SeP>2024-05-03 06:47:15<SeP>2024-05-04 17:31:48<SeP>2024-05-06 04:16:21<SeP>2024-05-07 15:00:54<SeP>2024-05-09 01:45:27<SeP>2024-05-10 12:30:00<SeP>2024-05-11 23:14:33<SeP>2024-05-13 09:59:06<SeP>2024-05-14 20:43:39<SeP>2024-05-16 07:28:12<SeP>2024-05-17 18:12:45<SeP>2024-05-19 04:57:18<SeP>2024-05-20 15:41:51<SeP>2024-05-22 02:26:24<SeP>2024-05-23 13:10:57<SeP>2024-05-24 23:55:30<SeP>2024-05-26 10:40:03<SeP>2024-05-27 21:24:36<SeP>2024-05-29 08:09:09<SeP>2024-05-30 18:53:42<SeP>2024-06-01 05:38:15<SeP>2024-06-02 16:22:48<SeP>2024-06-04 03:07:21<SeP>2024-06-05 13:51:54<SeP>2024-06-07 00:36:27<SeP>2024-06-08 11:21:00<SeP>2024-06-09 22:05:33<SeP>2024-06-11 08:50:06<SeP>2024-06-12 19:34:39<SeP>2024-06-14 06:19:12<SeP>2024-06-15 17:03:45<SeP>2024-06-17 03:48:18<SeP>2024-06-18 14:32:51<SeP>2024-06-20 01:17:24<SeP>2024-06-21 12:01:57<SeP>2024-06-22 22:46:30<SeP>2024-06-24 09:31:03<SeP>2024-06-25 20:15:36<SeP>2024-06-27 07:00:09<SeP>2024-06-28 17:44:42<SeP>2024-06-30 04:29:15<SeP>2024-07-01 15:13:48<SeP>2024-07-03 01:58:21<SeP>2024-07-04 12:42:54<SeP>2024-07-05 23:27:27<SeP>2024-07-07 10:12:00<SeP>2024-07-08 20:56:33<SeP>2024-07-10 07:41:06<SeP>2024-07-11 18:25:39<SeP>2024-07-13 05:10:12<SeP>2024-07-14 15:54:45<SeP>2024-07-16 02:39:18<SeP>2024-07-17 13:23:51<SeP>2024-07-19 00:08:24<SeP>2024-07-20 10:52:57<SeP>2024-07-21 21:37:30<SeP>2024-07-23 08:22:03<SeP>2024-07-24 19:06:36<SeP>2024-07-26 05:51:09<SeP>2024-07-27 16:35:42<SeP>2024-07-29 03:20:15<SeP>2024-07-30 14:04:48<SeP>2024-08-01 00:49:21<SeP>2024-08-02 11:33:54<SeP>2024-08-03 22:18:27<SeP>2024-08-05 09:03:00<SeP>2024-08-06 19:47:33<SeP>2024-08-08 06:32:06<SeP>2024-08-09 17:16:39<SeP>2024-08-11 04:01:12<SeP>2024-08-12 14:45:45<SeP>2024-08-14 01:30:18<SeP>2024-08-15 12:14:51<SeP>2024-08-16 22:59:24<SeP>2024-08-18 09:43:57<SeP>2024-08-19 20:28:30<SeP>2024-08-21 07:13:03<SeP>2024-08-22 17:57:36<SeP>2024-08-24 04:42:09<SeP>2024-08-25 15:26:42<SeP>2024-08-27 02:11:15<SeP>2024-08-28 12:55:48<SeP>2024-08-29 23:40:21<SeP>2024-08-31 10:24:54<SeP>2024-09-01 21:09:27<SeP>2024-09-03 07:54:00<SeP>2024-09-04 18:38:33<SeP>2024-09-06 05:23:06<SeP>2024-09-07 16:07:39<SeP>2024-09-09 02:52:12<SeP>2024-09-10 13:36:45<SeP>2024-09-12 00:21:18<SeP>2024-09-13 11:05:51<SeP>2024-09-14 21:50:24<SeP>2024-09-16 08:34:57<SeP>2024-09-17 19:19:30<SeP>2024-09-19 06:04:03<SeP>2024-09-20 16:48:36<SeP>2024-09-22 03:33:09<SeP>2024-09-23 14:17:42<SeP>2024-09-25 01:02:15<SeP>2024-09-26 11:46:48<SeP>2024-09-27 22:31:21<SeP>2024-09-29 09:15:54<SeP>2024-09-30 20:00:27<SeP>2024-10-02 06:45:00<SeP>2024-10-03 17:29:33<SeP>2024-10-05 04:14:06<SeP>2024-10-06 14:58:39<SeP>2024-10-08 01:43:12<SeP>2024-10-09 12:27:45<SeP>2024-10-10 23:12:18<SeP>2024-10-12 09:56:51<SeP>2024-10-13 20:41:24<SeP>2024-10-15 07:25:57<SeP>2024-10-16 18:10:30<SeP>2024-10-18 04:55:03<SeP>2024-10-19 15:39:36<SeP>2024-10-21 02:24:09<SeP>2024-10-22 13:08:42<SeP>2024-10-23 23:53:15<SeP>2024-10-25 10:37:48<SeP>2024-10-26 21:22:21<SeP>2024-10-28 08:06:54<SeP>2024-10-29 18:51:27<SeP>2024-10-31 05:36:00<SeP>2024-11-01 16:20:33<SeP>2024-11-03 02:05:06<SeP>2024-11-04 12:49:39<SeP>2024-11-05 23:34:12<SeP>2024-11-07 10:18:45<SeP>2024-11-08 21:03:18<SeP>2024-11-10 07:47:51<SeP>2024-11-11 18:32:24<SeP>2024-11-13 05:16:57<SeP>2024-11-14 16:01:30<SeP>2024-11-16 02:46:03<SeP>2024-11-17 13:30:36<SeP>2024-11-19 00:15:09<SeP>2024-11-20 10:59:42<SeP>2024-11-21 21:44:15<SeP>2024-11-23 08:28:48<SeP>2024-11-24 19:13:21<SeP>2024-11-26 05:57:54<SeP>2024-11-27 16:42:27<SeP>2024-11-29 03:27:00<SeP>2024-11-30 14:11:33<SeP>2024-12-02 00:56:06<SeP>2024-12-03 11:40:39<SeP>2024-12-04 22:25:12<SeP>2024-12-06 09:09:45<SeP>2024-12-07 19:54:18<SeP>2024-12-09 06:38:51<SeP>2024-12-10 17:23:24<SeP>2024-12-12 04:07:57<SeP>2024-12-13 14:52:30<SeP>2024-12-15 01:37:03<SeP>2024-12-16 12:21:36<SeP>2024-12-17 23:06:09<SeP>2024-12-19 09:50:42<SeP>2024-12-20 20:35:15<SeP>2024-12-22 07:19:48<SeP>2024-12-23 18:04:21<SeP>2024-12-25 04:48:54<SeP>2024-12-26 15:33:27<SeP>2024-12-28 02:18:00<SeP>2024-12-29 13:02:33<SeP>2024-12-30 23:47:06<SeP>2025-01-01 10:31:39<SeP>2025-01-02 21:16:12<SeP>2025-01-04 08:00:45<SeP>2025-01-05 18:45:18<SeP>2025-01-07 05:29:51<SeP>2025-01-08 16:14:24<SeP>2025-01-10 02:58:57<SeP>2025-01-11 13:43:30<SeP>2025-01-13 00:28:03<SeP>2025-01-14 11:12:36<SeP>2025-01-15 21:57:09<SeP>2025-01-17 08:41:42<SeP>2025-01-18 19:26:15<SeP>2025-01-20 06:10:48<SeP>2025-01-21 16:55:21<SeP>2025-01-23 03:39:54<SeP>2025-01-24 14:24:27<SeP>2025-01-26 01:09:00<SeP>2025-01-27 11:53:33<SeP>2025-01-28 22:38:06<SeP>2025-01-30 09:22:39<SeP>2025-01-31 20:07:12<SeP>2025-02-02 06:51:45<SeP>2025-02-03 17:36:18<SeP>2025-02-05 04:20:51<SeP>2025-02-06 15:05:24<SeP>2025-02-08 01:49:57<SeP>2025-02-09 12:34:30<SeP>2025-02-10 23:19:03<SeP>2025-02-12 10:03:36<SeP>2025-02-13 20:48:09<SeP>2025-02-15 07:32:42<SeP>2025-02-16 18:17:15<SeP>2025-02-18 05:01:48<SeP>2025-02-19 15:46:21<SeP>2025-02-21 02:30:54<SeP>2025-02-22 13:15:27";
  const itemLabel       = "Ataques";
  const itemData        = "152<SeP>614<SeP>975<SeP>718<SeP>535<SeP>226<SeP>6968<SeP>507<SeP>9184<SeP>969<SeP>377<SeP>1146<SeP>1131<SeP>383<SeP>162<SeP>461<SeP>112<SeP>763<SeP>277<SeP>4147<SeP>7216<SeP>7240<SeP>7203<SeP>7619<SeP>271<SeP>321<SeP>350<SeP>211<SeP>515<SeP>5762<SeP>75<SeP>381<SeP>300<SeP>381<SeP>2419<SeP>9433<SeP>8427<SeP>10293<SeP>9841<SeP>5338<SeP>5930<SeP>8617<SeP>7759<SeP>9340<SeP>7949<SeP>7399<SeP>9328<SeP>7425<SeP>8493<SeP>8601<SeP>6112<SeP>5635<SeP>12720<SeP>6251<SeP>7146<SeP>8201<SeP>10242<SeP>18180<SeP>15951<SeP>9158<SeP>10129<SeP>8216<SeP>7766<SeP>8619<SeP>7946<SeP>8438<SeP>8015<SeP>6146<SeP>6617<SeP>7303<SeP>5657<SeP>3088<SeP>6766<SeP>5455<SeP>6176<SeP>6572<SeP>7649<SeP>4168<SeP>5214<SeP>8023<SeP>4473<SeP>6392<SeP>5651<SeP>4324<SeP>7372<SeP>4666<SeP>5488<SeP>6008<SeP>7211<SeP>21881<SeP>16572<SeP>27610<SeP>8415<SeP>7090<SeP>7051<SeP>11208<SeP>7763<SeP>4299<SeP>6219<SeP>3402<SeP>5479<SeP>7080<SeP>4803<SeP>8892<SeP>6542<SeP>5132<SeP>4217<SeP>5964<SeP>9219<SeP>7888<SeP>7417<SeP>5477<SeP>4425<SeP>10785<SeP>8841<SeP>5382<SeP>3122<SeP>6298<SeP>9103<SeP>5594<SeP>5859<SeP>9764<SeP>5471<SeP>1367<SeP>2437<SeP>1021<SeP>2531<SeP>2060<SeP>1436<SeP>728<SeP>1037<SeP>1277<SeP>1834<SeP>567<SeP>1287<SeP>1159<SeP>1006<SeP>885<SeP>1025<SeP>1513<SeP>1234<SeP>1102<SeP>1691<SeP>2060<SeP>4239<SeP>11403<SeP>8350<SeP>7307<SeP>7501<SeP>9357<SeP>6169<SeP>8839<SeP>11044<SeP>9267<SeP>12928<SeP>9111<SeP>10635<SeP>9499<SeP>12144<SeP>10275<SeP>8000<SeP>3894<SeP>7630<SeP>13526<SeP>16902<SeP>6465<SeP>8096<SeP>10811<SeP>17287<SeP>6941<SeP>5880<SeP>6382<SeP>7507<SeP>25443<SeP>8051<SeP>8334<SeP>11655<SeP>4444<SeP>6992<SeP>4832<SeP>15948<SeP>5110<SeP>6375<SeP>14434<SeP>7114<SeP>8001<SeP>7061<SeP>5449<SeP>3533<SeP>7080<SeP>7512<SeP>4612<SeP>6495<SeP>8144<SeP>5704<SeP>19442<SeP>7873<SeP>6543<SeP>5882<SeP>8067<SeP>10425<SeP>7043<SeP>3286<SeP>4588<SeP>5061<SeP>3901<SeP>4342<SeP>3076<SeP>631<SeP>110<SeP>635<SeP>610<SeP>577<SeP>740<SeP>361<SeP>648<SeP>1237<SeP>1247<SeP>3146<SeP>22955<SeP>534<SeP>3481<SeP>3706<SeP>2840<SeP>7246<SeP>2983<SeP>4254<SeP>2437<SeP>3853<SeP>2787<SeP>2923<SeP>4398<SeP>2801<SeP>2350<SeP>3502<SeP>2045<SeP>1635<SeP>2146<SeP>1548<SeP>941<SeP>1368<SeP>1247<SeP>770<SeP>1700<SeP>26791<SeP>1767<SeP>4076<SeP>3899<SeP>2166<SeP>3669<SeP>2699<SeP>1665<SeP>3840<SeP>2148<SeP>3767<SeP>2368<SeP>2964<SeP>3555<SeP>4313<SeP>5407<SeP>4712<SeP>4432<SeP>2813<SeP>2695<SeP>4127<SeP>3882<SeP>6868<SeP>8208<SeP>3719<SeP>2270<SeP>3260<SeP>3375<SeP>4640<SeP>3143<SeP>2865<SeP>2374<SeP>4998<SeP>5052<SeP>3058<SeP>6055<SeP>4218<SeP>6156<SeP>4543<SeP>5378<SeP>5007<SeP>22110<SeP>5621<SeP>10669<SeP>1741<SeP>3241<SeP>3859<SeP>3646<SeP>5290<SeP>3421<SeP>4748<SeP>4581<SeP>4795<SeP>3107<SeP>3876<SeP>2163<SeP>1533<SeP>2060<SeP>3452<SeP>2210<SeP>3452<SeP>3357<SeP>4467<SeP>3345<SeP>3244<SeP>4502<SeP>3328<SeP>3103<SeP>4894<SeP>7674<SeP>6114<SeP>5485<SeP>5009<SeP>4764<SeP>3554<SeP>3545<SeP>4620<SeP>5503<SeP>5278<SeP>4389<SeP>4390<SeP>2066<SeP>669<SeP>2015<SeP>1664<SeP>822<SeP>1413<SeP>1740<SeP>1123<SeP>2016<SeP>4071<SeP>5262<SeP>5971<SeP>33986<SeP>4840<SeP>5811<SeP>22649<SeP>5276<SeP>5404<SeP>5834<SeP>4216<SeP>24577<SeP>4956<SeP>5189<SeP>4793<SeP>5477<SeP>7629<SeP>27562<SeP>4689<SeP>3526<SeP>4192<SeP>3947<SeP>6436<SeP>3507<SeP>3853<SeP>2931<SeP>4187<SeP>5555<SeP>4624<SeP>18071<SeP>5401<SeP>6305<SeP>5623<SeP>1344<SeP>3459<SeP>3982<SeP>4820<SeP>3408<SeP>3591<SeP>3113<SeP>3295<SeP>3501<SeP>3738<SeP>5745<SeP>8551<SeP>10144<SeP>8626<SeP>9055<SeP>7659<SeP>7214<SeP>4968<SeP>5218<SeP>3728<SeP>25409<SeP>3718<SeP>3134<SeP>3959<SeP>10568<SeP>5652<SeP>4883<SeP>3376<SeP>5046<SeP>3414<SeP>4882<SeP>9253<SeP>8763";
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
  const itemData    = "690188<SeP>361280<SeP>205700<SeP>178934<SeP>110117<SeP>87287<SeP>82775<SeP>80018<SeP>67770<SeP>65709";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "294287<SeP>41415<SeP>40012<SeP>34953<SeP>14385<SeP>10660<SeP>7598<SeP>7274<SeP>6975<SeP>6862";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Taiwan";
  const itemLabel   = "Attacks";
  const itemData    = "395901<SeP>326327<SeP>202836<SeP>138922<SeP>95732<SeP>80425<SeP>80190<SeP>69358<SeP>58151<SeP>58111";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "361135<SeP>259480<SeP>234576<SeP>143844<SeP>66529<SeP>59465<SeP>56023<SeP>51638<SeP>41612<SeP>35733";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "154760<SeP>52762<SeP>40491<SeP>32075<SeP>21903<SeP>12641<SeP>10721<SeP>9251<SeP>7614<SeP>7426";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "348494<SeP>258717<SeP>121941<SeP>79816<SeP>55061<SeP>48744<SeP>45892<SeP>30548<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "690188<SeP>361280<SeP>205700<SeP>178934<SeP>110117<SeP>87287<SeP>82775<SeP>80018<SeP>67770<SeP>65709";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "294287<SeP>41415<SeP>40012<SeP>34953<SeP>14385<SeP>10660<SeP>7598<SeP>7274<SeP>6975<SeP>6862";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Taiwan";
  const itemLabel   = "Ataques";
  const itemData    = "395901<SeP>326327<SeP>202836<SeP>138922<SeP>95732<SeP>80425<SeP>80190<SeP>69358<SeP>58151<SeP>58111";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "361135<SeP>259480<SeP>234576<SeP>143844<SeP>66529<SeP>59465<SeP>56023<SeP>51638<SeP>41612<SeP>35733";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "154760<SeP>52762<SeP>40491<SeP>32075<SeP>21903<SeP>12641<SeP>10721<SeP>9251<SeP>7614<SeP>7426";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "348494<SeP>258717<SeP>121941<SeP>79816<SeP>55061<SeP>48744<SeP>45892<SeP>30548<SeP>29324<SeP>26846";
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
