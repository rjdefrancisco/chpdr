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
  document.getElementById("last-updated").innerHTML = "2025-02-20";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "34.5";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.5";
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
  const metricData    = "2785603";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "538785";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2246818";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "137043";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1418472";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "828346";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52757";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "244559";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "583787";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42184";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2785603";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "538785";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2246818";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "137043";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1418472";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "828346";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52757";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "244559";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "583787";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42184";
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
  const incomingData = "2785603<SeP>538785<SeP>2246818<SeP>137043";
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
  const incomingData = "2246818<SeP>1418472<SeP>828346<SeP>52757";
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
  const incomingData = "828346<SeP>244559<SeP>583787<SeP>42184";
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
  const incomingData = "2554653<SeP>252013<SeP>2302640";
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
  const incomingData = "388176<SeP>144<SeP>388032<SeP>224";
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
  const incomingData = "2785603<SeP>538785<SeP>2246818<SeP>137043";
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
  const incomingData = "2246818<SeP>1418472<SeP>828346<SeP>52757";
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
  const incomingData = "828346<SeP>244559<SeP>583787<SeP>42184";
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
  const incomingData = "2554653<SeP>252013<SeP>2302640";
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
  const incomingData = "388176<SeP>144<SeP>388032<SeP>224";
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
  const column3Data   = "216647<SeP>198210<SeP>12444<SeP>11951<SeP>9677<SeP>9368<SeP>6436<SeP>5593<SeP>4618<SeP>3446";
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
  const column2Data  = "207836<SeP>42956<SeP>482<SeP>443<SeP>424<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2370895<SeP>414708";
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
  const column3Data   = "216647<SeP>198210<SeP>12444<SeP>11951<SeP>9677<SeP>9368<SeP>6436<SeP>5593<SeP>4618<SeP>3446";
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
  const column2Data  = "207836<SeP>42956<SeP>482<SeP>443<SeP>424<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2370895<SeP>414708";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-02-20";

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
        "name": "traffic between 2023-07-26 and 2025-02-18"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          387345,50
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
        "name": "scans between 2023-07-26 and 2025-02-18"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          222308,30,
          387345,50
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
        "name": "attacks between 2023-07-26 and 2025-02-18"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165037,23,
          387345,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-02-20";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-18"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          387345,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-18"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          222308,30,
          387345,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-18"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165037,23,
          387345,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:30:09<SeP>2023-07-28 21:00:18<SeP>2023-07-30 07:30:27<SeP>2023-07-31 18:00:36<SeP>2023-08-02 04:30:45<SeP>2023-08-03 15:00:54<SeP>2023-08-05 01:31:03<SeP>2023-08-06 12:01:12<SeP>2023-08-07 22:31:21<SeP>2023-08-09 09:01:30<SeP>2023-08-10 19:31:39<SeP>2023-08-12 06:01:48<SeP>2023-08-13 16:31:57<SeP>2023-08-15 03:02:06<SeP>2023-08-16 13:32:15<SeP>2023-08-18 00:02:24<SeP>2023-08-19 10:32:33<SeP>2023-08-20 21:02:42<SeP>2023-08-22 07:32:51<SeP>2023-08-23 18:03:00<SeP>2023-08-25 04:33:09<SeP>2023-08-26 15:03:18<SeP>2023-08-28 01:33:27<SeP>2023-08-29 12:03:36<SeP>2023-08-30 22:33:45<SeP>2023-09-01 09:03:54<SeP>2023-09-02 19:34:03<SeP>2023-09-04 06:04:12<SeP>2023-09-05 16:34:21<SeP>2023-09-07 03:04:30<SeP>2023-09-08 13:34:39<SeP>2023-09-10 00:04:48<SeP>2023-09-11 10:34:57<SeP>2023-09-12 21:05:06<SeP>2023-09-14 07:35:15<SeP>2023-09-15 18:05:24<SeP>2023-09-17 04:35:33<SeP>2023-09-18 15:05:42<SeP>2023-09-20 01:35:51<SeP>2023-09-21 12:06:00<SeP>2023-09-22 22:36:09<SeP>2023-09-24 09:06:18<SeP>2023-09-25 19:36:27<SeP>2023-09-27 06:06:36<SeP>2023-09-28 16:36:45<SeP>2023-09-30 03:06:54<SeP>2023-10-01 13:37:03<SeP>2023-10-03 00:07:12<SeP>2023-10-04 10:37:21<SeP>2023-10-05 21:07:30<SeP>2023-10-07 07:37:39<SeP>2023-10-08 18:07:48<SeP>2023-10-10 04:37:57<SeP>2023-10-11 15:08:06<SeP>2023-10-13 01:38:15<SeP>2023-10-14 12:08:24<SeP>2023-10-15 22:38:33<SeP>2023-10-17 09:08:42<SeP>2023-10-18 19:38:51<SeP>2023-10-20 06:09:00<SeP>2023-10-21 16:39:09<SeP>2023-10-23 03:09:18<SeP>2023-10-24 13:39:27<SeP>2023-10-26 00:09:36<SeP>2023-10-27 10:39:45<SeP>2023-10-28 21:09:54<SeP>2023-10-30 07:40:03<SeP>2023-10-31 18:10:12<SeP>2023-11-02 04:40:21<SeP>2023-11-03 15:10:30<SeP>2023-11-05 01:40:39<SeP>2023-11-06 11:10:48<SeP>2023-11-07 21:40:57<SeP>2023-11-09 08:11:06<SeP>2023-11-10 18:41:15<SeP>2023-11-12 05:11:24<SeP>2023-11-13 15:41:33<SeP>2023-11-15 02:11:42<SeP>2023-11-16 12:41:51<SeP>2023-11-17 23:12:00<SeP>2023-11-19 09:42:09<SeP>2023-11-20 20:12:18<SeP>2023-11-22 06:42:27<SeP>2023-11-23 17:12:36<SeP>2023-11-25 03:42:45<SeP>2023-11-26 14:12:54<SeP>2023-11-28 00:43:03<SeP>2023-11-29 11:13:12<SeP>2023-11-30 21:43:21<SeP>2023-12-02 08:13:30<SeP>2023-12-03 18:43:39<SeP>2023-12-05 05:13:48<SeP>2023-12-06 15:43:57<SeP>2023-12-08 02:14:06<SeP>2023-12-09 12:44:15<SeP>2023-12-10 23:14:24<SeP>2023-12-12 09:44:33<SeP>2023-12-13 20:14:42<SeP>2023-12-15 06:44:51<SeP>2023-12-16 17:15:00<SeP>2023-12-18 03:45:09<SeP>2023-12-19 14:15:18<SeP>2023-12-21 00:45:27<SeP>2023-12-22 11:15:36<SeP>2023-12-23 21:45:45<SeP>2023-12-25 08:15:54<SeP>2023-12-26 18:46:03<SeP>2023-12-28 05:16:12<SeP>2023-12-29 15:46:21<SeP>2023-12-31 02:16:30<SeP>2024-01-01 12:46:39<SeP>2024-01-02 23:16:48<SeP>2024-01-04 09:46:57<SeP>2024-01-05 20:17:06<SeP>2024-01-07 06:47:15<SeP>2024-01-08 17:17:24<SeP>2024-01-10 03:47:33<SeP>2024-01-11 14:17:42<SeP>2024-01-13 00:47:51<SeP>2024-01-14 11:18:00<SeP>2024-01-15 21:48:09<SeP>2024-01-17 08:18:18<SeP>2024-01-18 18:48:27<SeP>2024-01-20 05:18:36<SeP>2024-01-21 15:48:45<SeP>2024-01-23 02:18:54<SeP>2024-01-24 12:49:03<SeP>2024-01-25 23:19:12<SeP>2024-01-27 09:49:21<SeP>2024-01-28 20:19:30<SeP>2024-01-30 06:49:39<SeP>2024-01-31 17:19:48<SeP>2024-02-02 03:49:57<SeP>2024-02-03 14:20:06<SeP>2024-02-05 00:50:15<SeP>2024-02-06 11:20:24<SeP>2024-02-07 21:50:33<SeP>2024-02-09 08:20:42<SeP>2024-02-10 18:50:51<SeP>2024-02-12 05:21:00<SeP>2024-02-13 15:51:09<SeP>2024-02-15 02:21:18<SeP>2024-02-16 12:51:27<SeP>2024-02-17 23:21:36<SeP>2024-02-19 09:51:45<SeP>2024-02-20 20:21:54<SeP>2024-02-22 06:52:03<SeP>2024-02-23 17:22:12<SeP>2024-02-25 03:52:21<SeP>2024-02-26 14:22:30<SeP>2024-02-28 00:52:39<SeP>2024-02-29 11:22:48<SeP>2024-03-01 21:52:57<SeP>2024-03-03 08:23:06<SeP>2024-03-04 18:53:15<SeP>2024-03-06 05:23:24<SeP>2024-03-07 15:53:33<SeP>2024-03-09 02:23:42<SeP>2024-03-10 13:53:51<SeP>2024-03-12 00:24:00<SeP>2024-03-13 10:54:09<SeP>2024-03-14 21:24:18<SeP>2024-03-16 07:54:27<SeP>2024-03-17 18:24:36<SeP>2024-03-19 04:54:45<SeP>2024-03-20 15:24:54<SeP>2024-03-22 01:55:03<SeP>2024-03-23 12:25:12<SeP>2024-03-24 22:55:21<SeP>2024-03-26 09:25:30<SeP>2024-03-27 19:55:39<SeP>2024-03-29 06:25:48<SeP>2024-03-30 16:55:57<SeP>2024-04-01 03:26:06<SeP>2024-04-02 13:56:15<SeP>2024-04-04 00:26:24<SeP>2024-04-05 10:56:33<SeP>2024-04-06 21:26:42<SeP>2024-04-08 07:56:51<SeP>2024-04-09 18:27:00<SeP>2024-04-11 04:57:09<SeP>2024-04-12 15:27:18<SeP>2024-04-14 01:57:27<SeP>2024-04-15 12:27:36<SeP>2024-04-16 22:57:45<SeP>2024-04-18 09:27:54<SeP>2024-04-19 19:58:03<SeP>2024-04-21 06:28:12<SeP>2024-04-22 16:58:21<SeP>2024-04-24 03:28:30<SeP>2024-04-25 13:58:39<SeP>2024-04-27 00:28:48<SeP>2024-04-28 10:58:57<SeP>2024-04-29 21:29:06<SeP>2024-05-01 07:59:15<SeP>2024-05-02 18:29:24<SeP>2024-05-04 04:59:33<SeP>2024-05-05 15:29:42<SeP>2024-05-07 01:59:51<SeP>2024-05-08 12:30:00<SeP>2024-05-09 23:00:09<SeP>2024-05-11 09:30:18<SeP>2024-05-12 20:00:27<SeP>2024-05-14 06:30:36<SeP>2024-05-15 17:00:45<SeP>2024-05-17 03:30:54<SeP>2024-05-18 14:01:03<SeP>2024-05-20 00:31:12<SeP>2024-05-21 11:01:21<SeP>2024-05-22 21:31:30<SeP>2024-05-24 08:01:39<SeP>2024-05-25 18:31:48<SeP>2024-05-27 05:01:57<SeP>2024-05-28 15:32:06<SeP>2024-05-30 02:02:15<SeP>2024-05-31 12:32:24<SeP>2024-06-01 23:02:33<SeP>2024-06-03 09:32:42<SeP>2024-06-04 20:02:51<SeP>2024-06-06 06:33:00<SeP>2024-06-07 17:03:09<SeP>2024-06-09 03:33:18<SeP>2024-06-10 14:03:27<SeP>2024-06-12 00:33:36<SeP>2024-06-13 11:03:45<SeP>2024-06-14 21:33:54<SeP>2024-06-16 08:04:03<SeP>2024-06-17 18:34:12<SeP>2024-06-19 05:04:21<SeP>2024-06-20 15:34:30<SeP>2024-06-22 02:04:39<SeP>2024-06-23 12:34:48<SeP>2024-06-24 23:04:57<SeP>2024-06-26 09:35:06<SeP>2024-06-27 20:05:15<SeP>2024-06-29 06:35:24<SeP>2024-06-30 17:05:33<SeP>2024-07-02 03:35:42<SeP>2024-07-03 14:05:51<SeP>2024-07-05 00:36:00<SeP>2024-07-06 11:06:09<SeP>2024-07-07 21:36:18<SeP>2024-07-09 08:06:27<SeP>2024-07-10 18:36:36<SeP>2024-07-12 05:06:45<SeP>2024-07-13 15:36:54<SeP>2024-07-15 02:07:03<SeP>2024-07-16 12:37:12<SeP>2024-07-17 23:07:21<SeP>2024-07-19 09:37:30<SeP>2024-07-20 20:07:39<SeP>2024-07-22 06:37:48<SeP>2024-07-23 17:07:57<SeP>2024-07-25 03:38:06<SeP>2024-07-26 14:08:15<SeP>2024-07-28 00:38:24<SeP>2024-07-29 11:08:33<SeP>2024-07-30 21:38:42<SeP>2024-08-01 08:08:51<SeP>2024-08-02 18:39:00<SeP>2024-08-04 05:09:09<SeP>2024-08-05 15:39:18<SeP>2024-08-07 02:09:27<SeP>2024-08-08 12:39:36<SeP>2024-08-09 23:09:45<SeP>2024-08-11 09:39:54<SeP>2024-08-12 20:10:03<SeP>2024-08-14 06:40:12<SeP>2024-08-15 17:10:21<SeP>2024-08-17 03:40:30<SeP>2024-08-18 14:10:39<SeP>2024-08-20 00:40:48<SeP>2024-08-21 11:10:57<SeP>2024-08-22 21:41:06<SeP>2024-08-24 08:11:15<SeP>2024-08-25 18:41:24<SeP>2024-08-27 05:11:33<SeP>2024-08-28 15:41:42<SeP>2024-08-30 02:11:51<SeP>2024-08-31 12:42:00<SeP>2024-09-01 23:12:09<SeP>2024-09-03 09:42:18<SeP>2024-09-04 20:12:27<SeP>2024-09-06 06:42:36<SeP>2024-09-07 17:12:45<SeP>2024-09-09 03:42:54<SeP>2024-09-10 14:13:03<SeP>2024-09-12 00:43:12<SeP>2024-09-13 11:13:21<SeP>2024-09-14 21:43:30<SeP>2024-09-16 08:13:39<SeP>2024-09-17 18:43:48<SeP>2024-09-19 05:13:57<SeP>2024-09-20 15:44:06<SeP>2024-09-22 02:14:15<SeP>2024-09-23 12:44:24<SeP>2024-09-24 23:14:33<SeP>2024-09-26 09:44:42<SeP>2024-09-27 20:14:51<SeP>2024-09-29 06:45:00<SeP>2024-09-30 17:15:09<SeP>2024-10-02 03:45:18<SeP>2024-10-03 14:15:27<SeP>2024-10-05 00:45:36<SeP>2024-10-06 11:15:45<SeP>2024-10-07 21:45:54<SeP>2024-10-09 08:16:03<SeP>2024-10-10 18:46:12<SeP>2024-10-12 05:16:21<SeP>2024-10-13 15:46:30<SeP>2024-10-15 02:16:39<SeP>2024-10-16 12:46:48<SeP>2024-10-17 23:16:57<SeP>2024-10-19 09:47:06<SeP>2024-10-20 20:17:15<SeP>2024-10-22 06:47:24<SeP>2024-10-23 17:17:33<SeP>2024-10-25 03:47:42<SeP>2024-10-26 14:17:51<SeP>2024-10-28 00:48:00<SeP>2024-10-29 11:18:09<SeP>2024-10-30 21:48:18<SeP>2024-11-01 08:18:27<SeP>2024-11-02 18:48:36<SeP>2024-11-04 04:18:45<SeP>2024-11-05 14:48:54<SeP>2024-11-07 01:19:03<SeP>2024-11-08 11:49:12<SeP>2024-11-09 22:19:21<SeP>2024-11-11 08:49:30<SeP>2024-11-12 19:19:39<SeP>2024-11-14 05:49:48<SeP>2024-11-15 16:19:57<SeP>2024-11-17 02:50:06<SeP>2024-11-18 13:20:15<SeP>2024-11-19 23:50:24<SeP>2024-11-21 10:20:33<SeP>2024-11-22 20:50:42<SeP>2024-11-24 07:20:51<SeP>2024-11-25 17:51:00<SeP>2024-11-27 04:21:09<SeP>2024-11-28 14:51:18<SeP>2024-11-30 01:21:27<SeP>2024-12-01 11:51:36<SeP>2024-12-02 22:21:45<SeP>2024-12-04 08:51:54<SeP>2024-12-05 19:22:03<SeP>2024-12-07 05:52:12<SeP>2024-12-08 16:22:21<SeP>2024-12-10 02:52:30<SeP>2024-12-11 13:22:39<SeP>2024-12-12 23:52:48<SeP>2024-12-14 10:22:57<SeP>2024-12-15 20:53:06<SeP>2024-12-17 07:23:15<SeP>2024-12-18 17:53:24<SeP>2024-12-20 04:23:33<SeP>2024-12-21 14:53:42<SeP>2024-12-23 01:23:51<SeP>2024-12-24 11:54:00<SeP>2024-12-25 22:24:09<SeP>2024-12-27 08:54:18<SeP>2024-12-28 19:24:27<SeP>2024-12-30 05:54:36<SeP>2024-12-31 16:24:45<SeP>2025-01-02 02:54:54<SeP>2025-01-03 13:25:03<SeP>2025-01-04 23:55:12<SeP>2025-01-06 10:25:21<SeP>2025-01-07 20:55:30<SeP>2025-01-09 07:25:39<SeP>2025-01-10 17:55:48<SeP>2025-01-12 04:25:57<SeP>2025-01-13 14:56:06<SeP>2025-01-15 01:26:15<SeP>2025-01-16 11:56:24<SeP>2025-01-17 22:26:33<SeP>2025-01-19 08:56:42<SeP>2025-01-20 19:26:51<SeP>2025-01-22 05:57:00<SeP>2025-01-23 16:27:09<SeP>2025-01-25 02:57:18<SeP>2025-01-26 13:27:27<SeP>2025-01-27 23:57:36<SeP>2025-01-29 10:27:45<SeP>2025-01-30 20:57:54<SeP>2025-02-01 07:28:03<SeP>2025-02-02 17:58:12<SeP>2025-02-04 04:28:21<SeP>2025-02-05 14:58:30<SeP>2025-02-07 01:28:39<SeP>2025-02-08 11:58:48<SeP>2025-02-09 22:28:57<SeP>2025-02-11 08:59:06<SeP>2025-02-12 19:29:15<SeP>2025-02-14 05:59:24<SeP>2025-02-15 16:29:33<SeP>2025-02-17 02:59:42<SeP>2025-02-18 13:29:51";
  const item1Label       = "Scans";
  const item1Data        = "755<SeP>1452<SeP>1375<SeP>1422<SeP>1198<SeP>1706<SeP>996<SeP>986<SeP>1076<SeP>3323<SeP>1465<SeP>2857<SeP>1825<SeP>2545<SeP>735<SeP>814<SeP>1414<SeP>1384<SeP>2558<SeP>1500<SeP>1509<SeP>982<SeP>884<SeP>1085<SeP>1181<SeP>913<SeP>727<SeP>905<SeP>3621<SeP>1000<SeP>783<SeP>1339<SeP>1205<SeP>849<SeP>1347<SeP>2761<SeP>2866<SeP>1755<SeP>1457<SeP>1790<SeP>1219<SeP>1591<SeP>1841<SeP>1882<SeP>1843<SeP>1622<SeP>1619<SeP>1598<SeP>1686<SeP>1533<SeP>1838<SeP>1820<SeP>1766<SeP>1482<SeP>3185<SeP>1515<SeP>1510<SeP>2105<SeP>1848<SeP>2191<SeP>1248<SeP>3816<SeP>1378<SeP>1483<SeP>1615<SeP>1123<SeP>1889<SeP>1584<SeP>1398<SeP>1262<SeP>1462<SeP>1110<SeP>2368<SeP>1247<SeP>1028<SeP>1299<SeP>2488<SeP>6966<SeP>1278<SeP>1254<SeP>1377<SeP>2262<SeP>1231<SeP>1375<SeP>6424<SeP>1460<SeP>1594<SeP>935<SeP>2272<SeP>2191<SeP>1167<SeP>1005<SeP>967<SeP>1164<SeP>1785<SeP>2181<SeP>1024<SeP>1568<SeP>2834<SeP>6487<SeP>1242<SeP>947<SeP>925<SeP>889<SeP>994<SeP>973<SeP>956<SeP>993<SeP>3947<SeP>2087<SeP>1390<SeP>1627<SeP>595<SeP>949<SeP>1571<SeP>1077<SeP>1048<SeP>949<SeP>2231<SeP>1203<SeP>1065<SeP>1024<SeP>1098<SeP>837<SeP>815<SeP>838<SeP>831<SeP>765<SeP>1115<SeP>814<SeP>894<SeP>800<SeP>857<SeP>906<SeP>637<SeP>760<SeP>852<SeP>873<SeP>855<SeP>844<SeP>811<SeP>775<SeP>799<SeP>1011<SeP>867<SeP>761<SeP>891<SeP>998<SeP>836<SeP>1093<SeP>951<SeP>455<SeP>926<SeP>753<SeP>910<SeP>1248<SeP>898<SeP>1078<SeP>1137<SeP>1172<SeP>918<SeP>834<SeP>1041<SeP>792<SeP>857<SeP>1066<SeP>792<SeP>971<SeP>884<SeP>1032<SeP>944<SeP>1065<SeP>986<SeP>1003<SeP>1082<SeP>883<SeP>923<SeP>1871<SeP>1349<SeP>1228<SeP>1079<SeP>892<SeP>1157<SeP>988<SeP>946<SeP>774<SeP>691<SeP>960<SeP>1087<SeP>819<SeP>1063<SeP>1198<SeP>1127<SeP>1124<SeP>1268<SeP>1062<SeP>1353<SeP>1103<SeP>1484<SeP>1176<SeP>1510<SeP>2029<SeP>1228<SeP>997<SeP>855<SeP>1111<SeP>983<SeP>909<SeP>612<SeP>772<SeP>980<SeP>836<SeP>3059<SeP>4820<SeP>2160<SeP>1826<SeP>1128<SeP>875<SeP>1007<SeP>860<SeP>963<SeP>904<SeP>1100<SeP>1045<SeP>1028<SeP>1750<SeP>1707<SeP>979<SeP>1259<SeP>1222<SeP>1159<SeP>1147<SeP>1007<SeP>986<SeP>1007<SeP>1110<SeP>972<SeP>1113<SeP>990<SeP>1203<SeP>817<SeP>1406<SeP>994<SeP>1117<SeP>1059<SeP>1304<SeP>1231<SeP>1150<SeP>1526<SeP>1248<SeP>1084<SeP>1087<SeP>1191<SeP>1944<SeP>1229<SeP>1972<SeP>1584<SeP>1488<SeP>1972<SeP>1557<SeP>1170<SeP>1076<SeP>1354<SeP>1031<SeP>1709<SeP>1123<SeP>1224<SeP>1452<SeP>1876<SeP>1229<SeP>1487<SeP>1349<SeP>1350<SeP>1148<SeP>1099<SeP>1286<SeP>1135<SeP>1181<SeP>1247<SeP>1267<SeP>1074<SeP>2009<SeP>1280<SeP>1288<SeP>1639<SeP>1385<SeP>1273<SeP>977<SeP>964<SeP>1007<SeP>986<SeP>808<SeP>995<SeP>1741<SeP>1150<SeP>1046<SeP>1095<SeP>962<SeP>767<SeP>1070<SeP>1216<SeP>953<SeP>933<SeP>877<SeP>1247<SeP>1441<SeP>1553<SeP>1186<SeP>1031<SeP>970<SeP>1342<SeP>1545<SeP>968<SeP>1187<SeP>1003<SeP>1457<SeP>1160<SeP>832<SeP>1208<SeP>1053<SeP>954<SeP>861<SeP>978<SeP>1388<SeP>1204<SeP>1685<SeP>1573<SeP>1248<SeP>944<SeP>1107<SeP>1107<SeP>1087<SeP>1129<SeP>1126<SeP>1051<SeP>999<SeP>1198<SeP>1405<SeP>1402<SeP>1532<SeP>1453<SeP>1221<SeP>1541<SeP>1404<SeP>1340<SeP>1397<SeP>1524<SeP>1282<SeP>1404<SeP>1513<SeP>1550<SeP>1482<SeP>1344<SeP>1418<SeP>1310<SeP>1220<SeP>1212<SeP>1403<SeP>1569<SeP>1475<SeP>1232<SeP>1211<SeP>1255<SeP>1385<SeP>1267<SeP>1149<SeP>1500<SeP>1910<SeP>1453<SeP>1195<SeP>699<SeP>1412<SeP>1805<SeP>1259<SeP>1291<SeP>1260<SeP>1042<SeP>1448<SeP>1272<SeP>1296<SeP>1469<SeP>1713<SeP>1327<SeP>1568<SeP>1669<SeP>1304<SeP>1404<SeP>1457<SeP>1587<SeP>1529<SeP>1123<SeP>1160<SeP>1909<SeP>1701<SeP>1681<SeP>1785<SeP>1814<SeP>1568<SeP>1561<SeP>1483";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "152<SeP>613<SeP>966<SeP>716<SeP>546<SeP>211<SeP>6960<SeP>498<SeP>9205<SeP>976<SeP>283<SeP>1234<SeP>790<SeP>725<SeP>143<SeP>442<SeP>148<SeP>364<SeP>670<SeP>3333<SeP>6689<SeP>8017<SeP>6554<SeP>8664<SeP>403<SeP>306<SeP>401<SeP>173<SeP>373<SeP>5930<SeP>78<SeP>387<SeP>152<SeP>506<SeP>334<SeP>9250<SeP>9122<SeP>10163<SeP>9471<SeP>6644<SeP>5132<SeP>8673<SeP>7132<SeP>8817<SeP>8695<SeP>7213<SeP>8282<SeP>8723<SeP>8301<SeP>8309<SeP>5857<SeP>6103<SeP>11260<SeP>7281<SeP>7690<SeP>7107<SeP>9724<SeP>11302<SeP>20467<SeP>12079<SeP>8584<SeP>10344<SeP>6529<SeP>8315<SeP>8540<SeP>8417<SeP>8725<SeP>5581<SeP>7127<SeP>7234<SeP>5850<SeP>3217<SeP>6180<SeP>5468<SeP>6295<SeP>5971<SeP>8628<SeP>3375<SeP>6060<SeP>5414<SeP>6330<SeP>4836<SeP>7128<SeP>4601<SeP>5775<SeP>6414<SeP>5795<SeP>5837<SeP>5187<SeP>10108<SeP>20597<SeP>35989<SeP>7121<SeP>9242<SeP>5623<SeP>7109<SeP>11998<SeP>6780<SeP>3986<SeP>5642<SeP>4607<SeP>4126<SeP>6934<SeP>6509<SeP>6860<SeP>6886<SeP>5705<SeP>4024<SeP>6673<SeP>8458<SeP>8123<SeP>8303<SeP>4084<SeP>6448<SeP>9418<SeP>8524<SeP>4608<SeP>3095<SeP>6407<SeP>9121<SeP>5166<SeP>7055<SeP>9598<SeP>4322<SeP>2186<SeP>1559<SeP>1726<SeP>2012<SeP>2298<SeP>1050<SeP>739<SeP>1143<SeP>1305<SeP>1656<SeP>604<SeP>1283<SeP>1094<SeP>1025<SeP>870<SeP>1057<SeP>1488<SeP>1240<SeP>1092<SeP>1681<SeP>2055<SeP>4220<SeP>11362<SeP>8251<SeP>7130<SeP>7653<SeP>6044<SeP>9649<SeP>8774<SeP>9785<SeP>8643<SeP>13728<SeP>8210<SeP>9910<SeP>10011<SeP>13706<SeP>8936<SeP>8796<SeP>3986<SeP>6650<SeP>8985<SeP>23209<SeP>6286<SeP>8037<SeP>10473<SeP>16677<SeP>6954<SeP>6770<SeP>6906<SeP>5938<SeP>14502<SeP>19417<SeP>7567<SeP>10245<SeP>6066<SeP>6926<SeP>5537<SeP>6184<SeP>14885<SeP>5921<SeP>13444<SeP>8272<SeP>6350<SeP>7944<SeP>5719<SeP>4187<SeP>5952<SeP>7841<SeP>4773<SeP>7064<SeP>6777<SeP>5510<SeP>20909<SeP>6820<SeP>6009<SeP>6225<SeP>8109<SeP>10322<SeP>6294<SeP>4976<SeP>3890<SeP>6777<SeP>3100<SeP>4852<SeP>4107<SeP>658<SeP>122<SeP>633<SeP>190<SeP>564<SeP>1092<SeP>328<SeP>461<SeP>886<SeP>1554<SeP>3179<SeP>1014<SeP>22505<SeP>1331<SeP>4701<SeP>3035<SeP>3427<SeP>6471<SeP>2607<SeP>4206<SeP>3592<SeP>2837<SeP>2989<SeP>3091<SeP>4686<SeP>1752<SeP>2921<SeP>2598<SeP>1983<SeP>1927<SeP>2069<SeP>1204<SeP>1802<SeP>900<SeP>867<SeP>1841<SeP>11288<SeP>16658<SeP>2088<SeP>4116<SeP>3483<SeP>2050<SeP>4203<SeP>2025<SeP>2270<SeP>3423<SeP>2745<SeP>3448<SeP>2016<SeP>2993<SeP>3493<SeP>5015<SeP>4748<SeP>4875<SeP>4683<SeP>2667<SeP>2169<SeP>4968<SeP>3362<SeP>9928<SeP>5390<SeP>3222<SeP>2449<SeP>2865<SeP>4017<SeP>3950<SeP>3106<SeP>3339<SeP>2444<SeP>4950<SeP>4715<SeP>2891<SeP>6151<SeP>4145<SeP>6141<SeP>4531<SeP>5377<SeP>5011<SeP>22112<SeP>5614<SeP>10667<SeP>1731<SeP>2968<SeP>4132<SeP>3645<SeP>5053<SeP>3083<SeP>5253<SeP>4498<SeP>4488<SeP>3436<SeP>3907<SeP>2202<SeP>1332<SeP>1893<SeP>3762<SeP>2178<SeP>2768<SeP>3784<SeP>4172<SeP>3803<SeP>3236<SeP>4287<SeP>3417<SeP>3094<SeP>3963<SeP>7933<SeP>6295<SeP>5376<SeP>4673<SeP>5080<SeP>3934<SeP>3586<SeP>4476<SeP>4006<SeP>6178<SeP>4686<SeP>5404<SeP>1994<SeP>749<SeP>1489<SeP>1478<SeP>1221<SeP>1228<SeP>1693<SeP>1555<SeP>1421<SeP>3338<SeP>4557<SeP>6195<SeP>34247<SeP>4494<SeP>5199<SeP>17447<SeP>11037<SeP>5293<SeP>6057<SeP>4706<SeP>22385<SeP>6346<SeP>5237<SeP>4453<SeP>4732<SeP>6265<SeP>19359<SeP>15743<SeP>4186<SeP>3122<SeP>4467<SeP>5197<SeP>5538<SeP>2878<SeP>3193<SeP>4139<SeP>5104<SeP>4950<SeP>4100<SeP>18059<SeP>5806<SeP>6674<SeP>3444<SeP>2297<SeP>3396<SeP>4390<SeP>4044<SeP>3851<SeP>2841<SeP>3649<SeP>2503<SeP>4122<SeP>3892<SeP>7096<SeP>9450<SeP>9054<SeP>8537<SeP>8708<SeP>7311<SeP>6699<SeP>5067<SeP>4685<SeP>8258<SeP>21093<SeP>3241<SeP>4243<SeP>3163<SeP>11330<SeP>5054<SeP>4436<SeP>4095<SeP>4494<SeP>3448";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:30:09<SeP>2023-07-28 21:00:18<SeP>2023-07-30 07:30:27<SeP>2023-07-31 18:00:36<SeP>2023-08-02 04:30:45<SeP>2023-08-03 15:00:54<SeP>2023-08-05 01:31:03<SeP>2023-08-06 12:01:12<SeP>2023-08-07 22:31:21<SeP>2023-08-09 09:01:30<SeP>2023-08-10 19:31:39<SeP>2023-08-12 06:01:48<SeP>2023-08-13 16:31:57<SeP>2023-08-15 03:02:06<SeP>2023-08-16 13:32:15<SeP>2023-08-18 00:02:24<SeP>2023-08-19 10:32:33<SeP>2023-08-20 21:02:42<SeP>2023-08-22 07:32:51<SeP>2023-08-23 18:03:00<SeP>2023-08-25 04:33:09<SeP>2023-08-26 15:03:18<SeP>2023-08-28 01:33:27<SeP>2023-08-29 12:03:36<SeP>2023-08-30 22:33:45<SeP>2023-09-01 09:03:54<SeP>2023-09-02 19:34:03<SeP>2023-09-04 06:04:12<SeP>2023-09-05 16:34:21<SeP>2023-09-07 03:04:30<SeP>2023-09-08 13:34:39<SeP>2023-09-10 00:04:48<SeP>2023-09-11 10:34:57<SeP>2023-09-12 21:05:06<SeP>2023-09-14 07:35:15<SeP>2023-09-15 18:05:24<SeP>2023-09-17 04:35:33<SeP>2023-09-18 15:05:42<SeP>2023-09-20 01:35:51<SeP>2023-09-21 12:06:00<SeP>2023-09-22 22:36:09<SeP>2023-09-24 09:06:18<SeP>2023-09-25 19:36:27<SeP>2023-09-27 06:06:36<SeP>2023-09-28 16:36:45<SeP>2023-09-30 03:06:54<SeP>2023-10-01 13:37:03<SeP>2023-10-03 00:07:12<SeP>2023-10-04 10:37:21<SeP>2023-10-05 21:07:30<SeP>2023-10-07 07:37:39<SeP>2023-10-08 18:07:48<SeP>2023-10-10 04:37:57<SeP>2023-10-11 15:08:06<SeP>2023-10-13 01:38:15<SeP>2023-10-14 12:08:24<SeP>2023-10-15 22:38:33<SeP>2023-10-17 09:08:42<SeP>2023-10-18 19:38:51<SeP>2023-10-20 06:09:00<SeP>2023-10-21 16:39:09<SeP>2023-10-23 03:09:18<SeP>2023-10-24 13:39:27<SeP>2023-10-26 00:09:36<SeP>2023-10-27 10:39:45<SeP>2023-10-28 21:09:54<SeP>2023-10-30 07:40:03<SeP>2023-10-31 18:10:12<SeP>2023-11-02 04:40:21<SeP>2023-11-03 15:10:30<SeP>2023-11-05 01:40:39<SeP>2023-11-06 11:10:48<SeP>2023-11-07 21:40:57<SeP>2023-11-09 08:11:06<SeP>2023-11-10 18:41:15<SeP>2023-11-12 05:11:24<SeP>2023-11-13 15:41:33<SeP>2023-11-15 02:11:42<SeP>2023-11-16 12:41:51<SeP>2023-11-17 23:12:00<SeP>2023-11-19 09:42:09<SeP>2023-11-20 20:12:18<SeP>2023-11-22 06:42:27<SeP>2023-11-23 17:12:36<SeP>2023-11-25 03:42:45<SeP>2023-11-26 14:12:54<SeP>2023-11-28 00:43:03<SeP>2023-11-29 11:13:12<SeP>2023-11-30 21:43:21<SeP>2023-12-02 08:13:30<SeP>2023-12-03 18:43:39<SeP>2023-12-05 05:13:48<SeP>2023-12-06 15:43:57<SeP>2023-12-08 02:14:06<SeP>2023-12-09 12:44:15<SeP>2023-12-10 23:14:24<SeP>2023-12-12 09:44:33<SeP>2023-12-13 20:14:42<SeP>2023-12-15 06:44:51<SeP>2023-12-16 17:15:00<SeP>2023-12-18 03:45:09<SeP>2023-12-19 14:15:18<SeP>2023-12-21 00:45:27<SeP>2023-12-22 11:15:36<SeP>2023-12-23 21:45:45<SeP>2023-12-25 08:15:54<SeP>2023-12-26 18:46:03<SeP>2023-12-28 05:16:12<SeP>2023-12-29 15:46:21<SeP>2023-12-31 02:16:30<SeP>2024-01-01 12:46:39<SeP>2024-01-02 23:16:48<SeP>2024-01-04 09:46:57<SeP>2024-01-05 20:17:06<SeP>2024-01-07 06:47:15<SeP>2024-01-08 17:17:24<SeP>2024-01-10 03:47:33<SeP>2024-01-11 14:17:42<SeP>2024-01-13 00:47:51<SeP>2024-01-14 11:18:00<SeP>2024-01-15 21:48:09<SeP>2024-01-17 08:18:18<SeP>2024-01-18 18:48:27<SeP>2024-01-20 05:18:36<SeP>2024-01-21 15:48:45<SeP>2024-01-23 02:18:54<SeP>2024-01-24 12:49:03<SeP>2024-01-25 23:19:12<SeP>2024-01-27 09:49:21<SeP>2024-01-28 20:19:30<SeP>2024-01-30 06:49:39<SeP>2024-01-31 17:19:48<SeP>2024-02-02 03:49:57<SeP>2024-02-03 14:20:06<SeP>2024-02-05 00:50:15<SeP>2024-02-06 11:20:24<SeP>2024-02-07 21:50:33<SeP>2024-02-09 08:20:42<SeP>2024-02-10 18:50:51<SeP>2024-02-12 05:21:00<SeP>2024-02-13 15:51:09<SeP>2024-02-15 02:21:18<SeP>2024-02-16 12:51:27<SeP>2024-02-17 23:21:36<SeP>2024-02-19 09:51:45<SeP>2024-02-20 20:21:54<SeP>2024-02-22 06:52:03<SeP>2024-02-23 17:22:12<SeP>2024-02-25 03:52:21<SeP>2024-02-26 14:22:30<SeP>2024-02-28 00:52:39<SeP>2024-02-29 11:22:48<SeP>2024-03-01 21:52:57<SeP>2024-03-03 08:23:06<SeP>2024-03-04 18:53:15<SeP>2024-03-06 05:23:24<SeP>2024-03-07 15:53:33<SeP>2024-03-09 02:23:42<SeP>2024-03-10 13:53:51<SeP>2024-03-12 00:24:00<SeP>2024-03-13 10:54:09<SeP>2024-03-14 21:24:18<SeP>2024-03-16 07:54:27<SeP>2024-03-17 18:24:36<SeP>2024-03-19 04:54:45<SeP>2024-03-20 15:24:54<SeP>2024-03-22 01:55:03<SeP>2024-03-23 12:25:12<SeP>2024-03-24 22:55:21<SeP>2024-03-26 09:25:30<SeP>2024-03-27 19:55:39<SeP>2024-03-29 06:25:48<SeP>2024-03-30 16:55:57<SeP>2024-04-01 03:26:06<SeP>2024-04-02 13:56:15<SeP>2024-04-04 00:26:24<SeP>2024-04-05 10:56:33<SeP>2024-04-06 21:26:42<SeP>2024-04-08 07:56:51<SeP>2024-04-09 18:27:00<SeP>2024-04-11 04:57:09<SeP>2024-04-12 15:27:18<SeP>2024-04-14 01:57:27<SeP>2024-04-15 12:27:36<SeP>2024-04-16 22:57:45<SeP>2024-04-18 09:27:54<SeP>2024-04-19 19:58:03<SeP>2024-04-21 06:28:12<SeP>2024-04-22 16:58:21<SeP>2024-04-24 03:28:30<SeP>2024-04-25 13:58:39<SeP>2024-04-27 00:28:48<SeP>2024-04-28 10:58:57<SeP>2024-04-29 21:29:06<SeP>2024-05-01 07:59:15<SeP>2024-05-02 18:29:24<SeP>2024-05-04 04:59:33<SeP>2024-05-05 15:29:42<SeP>2024-05-07 01:59:51<SeP>2024-05-08 12:30:00<SeP>2024-05-09 23:00:09<SeP>2024-05-11 09:30:18<SeP>2024-05-12 20:00:27<SeP>2024-05-14 06:30:36<SeP>2024-05-15 17:00:45<SeP>2024-05-17 03:30:54<SeP>2024-05-18 14:01:03<SeP>2024-05-20 00:31:12<SeP>2024-05-21 11:01:21<SeP>2024-05-22 21:31:30<SeP>2024-05-24 08:01:39<SeP>2024-05-25 18:31:48<SeP>2024-05-27 05:01:57<SeP>2024-05-28 15:32:06<SeP>2024-05-30 02:02:15<SeP>2024-05-31 12:32:24<SeP>2024-06-01 23:02:33<SeP>2024-06-03 09:32:42<SeP>2024-06-04 20:02:51<SeP>2024-06-06 06:33:00<SeP>2024-06-07 17:03:09<SeP>2024-06-09 03:33:18<SeP>2024-06-10 14:03:27<SeP>2024-06-12 00:33:36<SeP>2024-06-13 11:03:45<SeP>2024-06-14 21:33:54<SeP>2024-06-16 08:04:03<SeP>2024-06-17 18:34:12<SeP>2024-06-19 05:04:21<SeP>2024-06-20 15:34:30<SeP>2024-06-22 02:04:39<SeP>2024-06-23 12:34:48<SeP>2024-06-24 23:04:57<SeP>2024-06-26 09:35:06<SeP>2024-06-27 20:05:15<SeP>2024-06-29 06:35:24<SeP>2024-06-30 17:05:33<SeP>2024-07-02 03:35:42<SeP>2024-07-03 14:05:51<SeP>2024-07-05 00:36:00<SeP>2024-07-06 11:06:09<SeP>2024-07-07 21:36:18<SeP>2024-07-09 08:06:27<SeP>2024-07-10 18:36:36<SeP>2024-07-12 05:06:45<SeP>2024-07-13 15:36:54<SeP>2024-07-15 02:07:03<SeP>2024-07-16 12:37:12<SeP>2024-07-17 23:07:21<SeP>2024-07-19 09:37:30<SeP>2024-07-20 20:07:39<SeP>2024-07-22 06:37:48<SeP>2024-07-23 17:07:57<SeP>2024-07-25 03:38:06<SeP>2024-07-26 14:08:15<SeP>2024-07-28 00:38:24<SeP>2024-07-29 11:08:33<SeP>2024-07-30 21:38:42<SeP>2024-08-01 08:08:51<SeP>2024-08-02 18:39:00<SeP>2024-08-04 05:09:09<SeP>2024-08-05 15:39:18<SeP>2024-08-07 02:09:27<SeP>2024-08-08 12:39:36<SeP>2024-08-09 23:09:45<SeP>2024-08-11 09:39:54<SeP>2024-08-12 20:10:03<SeP>2024-08-14 06:40:12<SeP>2024-08-15 17:10:21<SeP>2024-08-17 03:40:30<SeP>2024-08-18 14:10:39<SeP>2024-08-20 00:40:48<SeP>2024-08-21 11:10:57<SeP>2024-08-22 21:41:06<SeP>2024-08-24 08:11:15<SeP>2024-08-25 18:41:24<SeP>2024-08-27 05:11:33<SeP>2024-08-28 15:41:42<SeP>2024-08-30 02:11:51<SeP>2024-08-31 12:42:00<SeP>2024-09-01 23:12:09<SeP>2024-09-03 09:42:18<SeP>2024-09-04 20:12:27<SeP>2024-09-06 06:42:36<SeP>2024-09-07 17:12:45<SeP>2024-09-09 03:42:54<SeP>2024-09-10 14:13:03<SeP>2024-09-12 00:43:12<SeP>2024-09-13 11:13:21<SeP>2024-09-14 21:43:30<SeP>2024-09-16 08:13:39<SeP>2024-09-17 18:43:48<SeP>2024-09-19 05:13:57<SeP>2024-09-20 15:44:06<SeP>2024-09-22 02:14:15<SeP>2024-09-23 12:44:24<SeP>2024-09-24 23:14:33<SeP>2024-09-26 09:44:42<SeP>2024-09-27 20:14:51<SeP>2024-09-29 06:45:00<SeP>2024-09-30 17:15:09<SeP>2024-10-02 03:45:18<SeP>2024-10-03 14:15:27<SeP>2024-10-05 00:45:36<SeP>2024-10-06 11:15:45<SeP>2024-10-07 21:45:54<SeP>2024-10-09 08:16:03<SeP>2024-10-10 18:46:12<SeP>2024-10-12 05:16:21<SeP>2024-10-13 15:46:30<SeP>2024-10-15 02:16:39<SeP>2024-10-16 12:46:48<SeP>2024-10-17 23:16:57<SeP>2024-10-19 09:47:06<SeP>2024-10-20 20:17:15<SeP>2024-10-22 06:47:24<SeP>2024-10-23 17:17:33<SeP>2024-10-25 03:47:42<SeP>2024-10-26 14:17:51<SeP>2024-10-28 00:48:00<SeP>2024-10-29 11:18:09<SeP>2024-10-30 21:48:18<SeP>2024-11-01 08:18:27<SeP>2024-11-02 18:48:36<SeP>2024-11-04 04:18:45<SeP>2024-11-05 14:48:54<SeP>2024-11-07 01:19:03<SeP>2024-11-08 11:49:12<SeP>2024-11-09 22:19:21<SeP>2024-11-11 08:49:30<SeP>2024-11-12 19:19:39<SeP>2024-11-14 05:49:48<SeP>2024-11-15 16:19:57<SeP>2024-11-17 02:50:06<SeP>2024-11-18 13:20:15<SeP>2024-11-19 23:50:24<SeP>2024-11-21 10:20:33<SeP>2024-11-22 20:50:42<SeP>2024-11-24 07:20:51<SeP>2024-11-25 17:51:00<SeP>2024-11-27 04:21:09<SeP>2024-11-28 14:51:18<SeP>2024-11-30 01:21:27<SeP>2024-12-01 11:51:36<SeP>2024-12-02 22:21:45<SeP>2024-12-04 08:51:54<SeP>2024-12-05 19:22:03<SeP>2024-12-07 05:52:12<SeP>2024-12-08 16:22:21<SeP>2024-12-10 02:52:30<SeP>2024-12-11 13:22:39<SeP>2024-12-12 23:52:48<SeP>2024-12-14 10:22:57<SeP>2024-12-15 20:53:06<SeP>2024-12-17 07:23:15<SeP>2024-12-18 17:53:24<SeP>2024-12-20 04:23:33<SeP>2024-12-21 14:53:42<SeP>2024-12-23 01:23:51<SeP>2024-12-24 11:54:00<SeP>2024-12-25 22:24:09<SeP>2024-12-27 08:54:18<SeP>2024-12-28 19:24:27<SeP>2024-12-30 05:54:36<SeP>2024-12-31 16:24:45<SeP>2025-01-02 02:54:54<SeP>2025-01-03 13:25:03<SeP>2025-01-04 23:55:12<SeP>2025-01-06 10:25:21<SeP>2025-01-07 20:55:30<SeP>2025-01-09 07:25:39<SeP>2025-01-10 17:55:48<SeP>2025-01-12 04:25:57<SeP>2025-01-13 14:56:06<SeP>2025-01-15 01:26:15<SeP>2025-01-16 11:56:24<SeP>2025-01-17 22:26:33<SeP>2025-01-19 08:56:42<SeP>2025-01-20 19:26:51<SeP>2025-01-22 05:57:00<SeP>2025-01-23 16:27:09<SeP>2025-01-25 02:57:18<SeP>2025-01-26 13:27:27<SeP>2025-01-27 23:57:36<SeP>2025-01-29 10:27:45<SeP>2025-01-30 20:57:54<SeP>2025-02-01 07:28:03<SeP>2025-02-02 17:58:12<SeP>2025-02-04 04:28:21<SeP>2025-02-05 14:58:30<SeP>2025-02-07 01:28:39<SeP>2025-02-08 11:58:48<SeP>2025-02-09 22:28:57<SeP>2025-02-11 08:59:06<SeP>2025-02-12 19:29:15<SeP>2025-02-14 05:59:24<SeP>2025-02-15 16:29:33<SeP>2025-02-17 02:59:42<SeP>2025-02-18 13:29:51";
  const itemLabel       = "Scans";
  const itemData        = "755<SeP>1452<SeP>1375<SeP>1422<SeP>1198<SeP>1706<SeP>996<SeP>986<SeP>1076<SeP>3323<SeP>1465<SeP>2857<SeP>1825<SeP>2545<SeP>735<SeP>814<SeP>1414<SeP>1384<SeP>2558<SeP>1500<SeP>1509<SeP>982<SeP>884<SeP>1085<SeP>1181<SeP>913<SeP>727<SeP>905<SeP>3621<SeP>1000<SeP>783<SeP>1339<SeP>1205<SeP>849<SeP>1347<SeP>2761<SeP>2866<SeP>1755<SeP>1457<SeP>1790<SeP>1219<SeP>1591<SeP>1841<SeP>1882<SeP>1843<SeP>1622<SeP>1619<SeP>1598<SeP>1686<SeP>1533<SeP>1838<SeP>1820<SeP>1766<SeP>1482<SeP>3185<SeP>1515<SeP>1510<SeP>2105<SeP>1848<SeP>2191<SeP>1248<SeP>3816<SeP>1378<SeP>1483<SeP>1615<SeP>1123<SeP>1889<SeP>1584<SeP>1398<SeP>1262<SeP>1462<SeP>1110<SeP>2368<SeP>1247<SeP>1028<SeP>1299<SeP>2488<SeP>6966<SeP>1278<SeP>1254<SeP>1377<SeP>2262<SeP>1231<SeP>1375<SeP>6424<SeP>1460<SeP>1594<SeP>935<SeP>2272<SeP>2191<SeP>1167<SeP>1005<SeP>967<SeP>1164<SeP>1785<SeP>2181<SeP>1024<SeP>1568<SeP>2834<SeP>6487<SeP>1242<SeP>947<SeP>925<SeP>889<SeP>994<SeP>973<SeP>956<SeP>993<SeP>3947<SeP>2087<SeP>1390<SeP>1627<SeP>595<SeP>949<SeP>1571<SeP>1077<SeP>1048<SeP>949<SeP>2231<SeP>1203<SeP>1065<SeP>1024<SeP>1098<SeP>837<SeP>815<SeP>838<SeP>831<SeP>765<SeP>1115<SeP>814<SeP>894<SeP>800<SeP>857<SeP>906<SeP>637<SeP>760<SeP>852<SeP>873<SeP>855<SeP>844<SeP>811<SeP>775<SeP>799<SeP>1011<SeP>867<SeP>761<SeP>891<SeP>998<SeP>836<SeP>1093<SeP>951<SeP>455<SeP>926<SeP>753<SeP>910<SeP>1248<SeP>898<SeP>1078<SeP>1137<SeP>1172<SeP>918<SeP>834<SeP>1041<SeP>792<SeP>857<SeP>1066<SeP>792<SeP>971<SeP>884<SeP>1032<SeP>944<SeP>1065<SeP>986<SeP>1003<SeP>1082<SeP>883<SeP>923<SeP>1871<SeP>1349<SeP>1228<SeP>1079<SeP>892<SeP>1157<SeP>988<SeP>946<SeP>774<SeP>691<SeP>960<SeP>1087<SeP>819<SeP>1063<SeP>1198<SeP>1127<SeP>1124<SeP>1268<SeP>1062<SeP>1353<SeP>1103<SeP>1484<SeP>1176<SeP>1510<SeP>2029<SeP>1228<SeP>997<SeP>855<SeP>1111<SeP>983<SeP>909<SeP>612<SeP>772<SeP>980<SeP>836<SeP>3059<SeP>4820<SeP>2160<SeP>1826<SeP>1128<SeP>875<SeP>1007<SeP>860<SeP>963<SeP>904<SeP>1100<SeP>1045<SeP>1028<SeP>1750<SeP>1707<SeP>979<SeP>1259<SeP>1222<SeP>1159<SeP>1147<SeP>1007<SeP>986<SeP>1007<SeP>1110<SeP>972<SeP>1113<SeP>990<SeP>1203<SeP>817<SeP>1406<SeP>994<SeP>1117<SeP>1059<SeP>1304<SeP>1231<SeP>1150<SeP>1526<SeP>1248<SeP>1084<SeP>1087<SeP>1191<SeP>1944<SeP>1229<SeP>1972<SeP>1584<SeP>1488<SeP>1972<SeP>1557<SeP>1170<SeP>1076<SeP>1354<SeP>1031<SeP>1709<SeP>1123<SeP>1224<SeP>1452<SeP>1876<SeP>1229<SeP>1487<SeP>1349<SeP>1350<SeP>1148<SeP>1099<SeP>1286<SeP>1135<SeP>1181<SeP>1247<SeP>1267<SeP>1074<SeP>2009<SeP>1280<SeP>1288<SeP>1639<SeP>1385<SeP>1273<SeP>977<SeP>964<SeP>1007<SeP>986<SeP>808<SeP>995<SeP>1741<SeP>1150<SeP>1046<SeP>1095<SeP>962<SeP>767<SeP>1070<SeP>1216<SeP>953<SeP>933<SeP>877<SeP>1247<SeP>1441<SeP>1553<SeP>1186<SeP>1031<SeP>970<SeP>1342<SeP>1545<SeP>968<SeP>1187<SeP>1003<SeP>1457<SeP>1160<SeP>832<SeP>1208<SeP>1053<SeP>954<SeP>861<SeP>978<SeP>1388<SeP>1204<SeP>1685<SeP>1573<SeP>1248<SeP>944<SeP>1107<SeP>1107<SeP>1087<SeP>1129<SeP>1126<SeP>1051<SeP>999<SeP>1198<SeP>1405<SeP>1402<SeP>1532<SeP>1453<SeP>1221<SeP>1541<SeP>1404<SeP>1340<SeP>1397<SeP>1524<SeP>1282<SeP>1404<SeP>1513<SeP>1550<SeP>1482<SeP>1344<SeP>1418<SeP>1310<SeP>1220<SeP>1212<SeP>1403<SeP>1569<SeP>1475<SeP>1232<SeP>1211<SeP>1255<SeP>1385<SeP>1267<SeP>1149<SeP>1500<SeP>1910<SeP>1453<SeP>1195<SeP>699<SeP>1412<SeP>1805<SeP>1259<SeP>1291<SeP>1260<SeP>1042<SeP>1448<SeP>1272<SeP>1296<SeP>1469<SeP>1713<SeP>1327<SeP>1568<SeP>1669<SeP>1304<SeP>1404<SeP>1457<SeP>1587<SeP>1529<SeP>1123<SeP>1160<SeP>1909<SeP>1701<SeP>1681<SeP>1785<SeP>1814<SeP>1568<SeP>1561<SeP>1483";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:30:09<SeP>2023-07-28 21:00:18<SeP>2023-07-30 07:30:27<SeP>2023-07-31 18:00:36<SeP>2023-08-02 04:30:45<SeP>2023-08-03 15:00:54<SeP>2023-08-05 01:31:03<SeP>2023-08-06 12:01:12<SeP>2023-08-07 22:31:21<SeP>2023-08-09 09:01:30<SeP>2023-08-10 19:31:39<SeP>2023-08-12 06:01:48<SeP>2023-08-13 16:31:57<SeP>2023-08-15 03:02:06<SeP>2023-08-16 13:32:15<SeP>2023-08-18 00:02:24<SeP>2023-08-19 10:32:33<SeP>2023-08-20 21:02:42<SeP>2023-08-22 07:32:51<SeP>2023-08-23 18:03:00<SeP>2023-08-25 04:33:09<SeP>2023-08-26 15:03:18<SeP>2023-08-28 01:33:27<SeP>2023-08-29 12:03:36<SeP>2023-08-30 22:33:45<SeP>2023-09-01 09:03:54<SeP>2023-09-02 19:34:03<SeP>2023-09-04 06:04:12<SeP>2023-09-05 16:34:21<SeP>2023-09-07 03:04:30<SeP>2023-09-08 13:34:39<SeP>2023-09-10 00:04:48<SeP>2023-09-11 10:34:57<SeP>2023-09-12 21:05:06<SeP>2023-09-14 07:35:15<SeP>2023-09-15 18:05:24<SeP>2023-09-17 04:35:33<SeP>2023-09-18 15:05:42<SeP>2023-09-20 01:35:51<SeP>2023-09-21 12:06:00<SeP>2023-09-22 22:36:09<SeP>2023-09-24 09:06:18<SeP>2023-09-25 19:36:27<SeP>2023-09-27 06:06:36<SeP>2023-09-28 16:36:45<SeP>2023-09-30 03:06:54<SeP>2023-10-01 13:37:03<SeP>2023-10-03 00:07:12<SeP>2023-10-04 10:37:21<SeP>2023-10-05 21:07:30<SeP>2023-10-07 07:37:39<SeP>2023-10-08 18:07:48<SeP>2023-10-10 04:37:57<SeP>2023-10-11 15:08:06<SeP>2023-10-13 01:38:15<SeP>2023-10-14 12:08:24<SeP>2023-10-15 22:38:33<SeP>2023-10-17 09:08:42<SeP>2023-10-18 19:38:51<SeP>2023-10-20 06:09:00<SeP>2023-10-21 16:39:09<SeP>2023-10-23 03:09:18<SeP>2023-10-24 13:39:27<SeP>2023-10-26 00:09:36<SeP>2023-10-27 10:39:45<SeP>2023-10-28 21:09:54<SeP>2023-10-30 07:40:03<SeP>2023-10-31 18:10:12<SeP>2023-11-02 04:40:21<SeP>2023-11-03 15:10:30<SeP>2023-11-05 01:40:39<SeP>2023-11-06 11:10:48<SeP>2023-11-07 21:40:57<SeP>2023-11-09 08:11:06<SeP>2023-11-10 18:41:15<SeP>2023-11-12 05:11:24<SeP>2023-11-13 15:41:33<SeP>2023-11-15 02:11:42<SeP>2023-11-16 12:41:51<SeP>2023-11-17 23:12:00<SeP>2023-11-19 09:42:09<SeP>2023-11-20 20:12:18<SeP>2023-11-22 06:42:27<SeP>2023-11-23 17:12:36<SeP>2023-11-25 03:42:45<SeP>2023-11-26 14:12:54<SeP>2023-11-28 00:43:03<SeP>2023-11-29 11:13:12<SeP>2023-11-30 21:43:21<SeP>2023-12-02 08:13:30<SeP>2023-12-03 18:43:39<SeP>2023-12-05 05:13:48<SeP>2023-12-06 15:43:57<SeP>2023-12-08 02:14:06<SeP>2023-12-09 12:44:15<SeP>2023-12-10 23:14:24<SeP>2023-12-12 09:44:33<SeP>2023-12-13 20:14:42<SeP>2023-12-15 06:44:51<SeP>2023-12-16 17:15:00<SeP>2023-12-18 03:45:09<SeP>2023-12-19 14:15:18<SeP>2023-12-21 00:45:27<SeP>2023-12-22 11:15:36<SeP>2023-12-23 21:45:45<SeP>2023-12-25 08:15:54<SeP>2023-12-26 18:46:03<SeP>2023-12-28 05:16:12<SeP>2023-12-29 15:46:21<SeP>2023-12-31 02:16:30<SeP>2024-01-01 12:46:39<SeP>2024-01-02 23:16:48<SeP>2024-01-04 09:46:57<SeP>2024-01-05 20:17:06<SeP>2024-01-07 06:47:15<SeP>2024-01-08 17:17:24<SeP>2024-01-10 03:47:33<SeP>2024-01-11 14:17:42<SeP>2024-01-13 00:47:51<SeP>2024-01-14 11:18:00<SeP>2024-01-15 21:48:09<SeP>2024-01-17 08:18:18<SeP>2024-01-18 18:48:27<SeP>2024-01-20 05:18:36<SeP>2024-01-21 15:48:45<SeP>2024-01-23 02:18:54<SeP>2024-01-24 12:49:03<SeP>2024-01-25 23:19:12<SeP>2024-01-27 09:49:21<SeP>2024-01-28 20:19:30<SeP>2024-01-30 06:49:39<SeP>2024-01-31 17:19:48<SeP>2024-02-02 03:49:57<SeP>2024-02-03 14:20:06<SeP>2024-02-05 00:50:15<SeP>2024-02-06 11:20:24<SeP>2024-02-07 21:50:33<SeP>2024-02-09 08:20:42<SeP>2024-02-10 18:50:51<SeP>2024-02-12 05:21:00<SeP>2024-02-13 15:51:09<SeP>2024-02-15 02:21:18<SeP>2024-02-16 12:51:27<SeP>2024-02-17 23:21:36<SeP>2024-02-19 09:51:45<SeP>2024-02-20 20:21:54<SeP>2024-02-22 06:52:03<SeP>2024-02-23 17:22:12<SeP>2024-02-25 03:52:21<SeP>2024-02-26 14:22:30<SeP>2024-02-28 00:52:39<SeP>2024-02-29 11:22:48<SeP>2024-03-01 21:52:57<SeP>2024-03-03 08:23:06<SeP>2024-03-04 18:53:15<SeP>2024-03-06 05:23:24<SeP>2024-03-07 15:53:33<SeP>2024-03-09 02:23:42<SeP>2024-03-10 13:53:51<SeP>2024-03-12 00:24:00<SeP>2024-03-13 10:54:09<SeP>2024-03-14 21:24:18<SeP>2024-03-16 07:54:27<SeP>2024-03-17 18:24:36<SeP>2024-03-19 04:54:45<SeP>2024-03-20 15:24:54<SeP>2024-03-22 01:55:03<SeP>2024-03-23 12:25:12<SeP>2024-03-24 22:55:21<SeP>2024-03-26 09:25:30<SeP>2024-03-27 19:55:39<SeP>2024-03-29 06:25:48<SeP>2024-03-30 16:55:57<SeP>2024-04-01 03:26:06<SeP>2024-04-02 13:56:15<SeP>2024-04-04 00:26:24<SeP>2024-04-05 10:56:33<SeP>2024-04-06 21:26:42<SeP>2024-04-08 07:56:51<SeP>2024-04-09 18:27:00<SeP>2024-04-11 04:57:09<SeP>2024-04-12 15:27:18<SeP>2024-04-14 01:57:27<SeP>2024-04-15 12:27:36<SeP>2024-04-16 22:57:45<SeP>2024-04-18 09:27:54<SeP>2024-04-19 19:58:03<SeP>2024-04-21 06:28:12<SeP>2024-04-22 16:58:21<SeP>2024-04-24 03:28:30<SeP>2024-04-25 13:58:39<SeP>2024-04-27 00:28:48<SeP>2024-04-28 10:58:57<SeP>2024-04-29 21:29:06<SeP>2024-05-01 07:59:15<SeP>2024-05-02 18:29:24<SeP>2024-05-04 04:59:33<SeP>2024-05-05 15:29:42<SeP>2024-05-07 01:59:51<SeP>2024-05-08 12:30:00<SeP>2024-05-09 23:00:09<SeP>2024-05-11 09:30:18<SeP>2024-05-12 20:00:27<SeP>2024-05-14 06:30:36<SeP>2024-05-15 17:00:45<SeP>2024-05-17 03:30:54<SeP>2024-05-18 14:01:03<SeP>2024-05-20 00:31:12<SeP>2024-05-21 11:01:21<SeP>2024-05-22 21:31:30<SeP>2024-05-24 08:01:39<SeP>2024-05-25 18:31:48<SeP>2024-05-27 05:01:57<SeP>2024-05-28 15:32:06<SeP>2024-05-30 02:02:15<SeP>2024-05-31 12:32:24<SeP>2024-06-01 23:02:33<SeP>2024-06-03 09:32:42<SeP>2024-06-04 20:02:51<SeP>2024-06-06 06:33:00<SeP>2024-06-07 17:03:09<SeP>2024-06-09 03:33:18<SeP>2024-06-10 14:03:27<SeP>2024-06-12 00:33:36<SeP>2024-06-13 11:03:45<SeP>2024-06-14 21:33:54<SeP>2024-06-16 08:04:03<SeP>2024-06-17 18:34:12<SeP>2024-06-19 05:04:21<SeP>2024-06-20 15:34:30<SeP>2024-06-22 02:04:39<SeP>2024-06-23 12:34:48<SeP>2024-06-24 23:04:57<SeP>2024-06-26 09:35:06<SeP>2024-06-27 20:05:15<SeP>2024-06-29 06:35:24<SeP>2024-06-30 17:05:33<SeP>2024-07-02 03:35:42<SeP>2024-07-03 14:05:51<SeP>2024-07-05 00:36:00<SeP>2024-07-06 11:06:09<SeP>2024-07-07 21:36:18<SeP>2024-07-09 08:06:27<SeP>2024-07-10 18:36:36<SeP>2024-07-12 05:06:45<SeP>2024-07-13 15:36:54<SeP>2024-07-15 02:07:03<SeP>2024-07-16 12:37:12<SeP>2024-07-17 23:07:21<SeP>2024-07-19 09:37:30<SeP>2024-07-20 20:07:39<SeP>2024-07-22 06:37:48<SeP>2024-07-23 17:07:57<SeP>2024-07-25 03:38:06<SeP>2024-07-26 14:08:15<SeP>2024-07-28 00:38:24<SeP>2024-07-29 11:08:33<SeP>2024-07-30 21:38:42<SeP>2024-08-01 08:08:51<SeP>2024-08-02 18:39:00<SeP>2024-08-04 05:09:09<SeP>2024-08-05 15:39:18<SeP>2024-08-07 02:09:27<SeP>2024-08-08 12:39:36<SeP>2024-08-09 23:09:45<SeP>2024-08-11 09:39:54<SeP>2024-08-12 20:10:03<SeP>2024-08-14 06:40:12<SeP>2024-08-15 17:10:21<SeP>2024-08-17 03:40:30<SeP>2024-08-18 14:10:39<SeP>2024-08-20 00:40:48<SeP>2024-08-21 11:10:57<SeP>2024-08-22 21:41:06<SeP>2024-08-24 08:11:15<SeP>2024-08-25 18:41:24<SeP>2024-08-27 05:11:33<SeP>2024-08-28 15:41:42<SeP>2024-08-30 02:11:51<SeP>2024-08-31 12:42:00<SeP>2024-09-01 23:12:09<SeP>2024-09-03 09:42:18<SeP>2024-09-04 20:12:27<SeP>2024-09-06 06:42:36<SeP>2024-09-07 17:12:45<SeP>2024-09-09 03:42:54<SeP>2024-09-10 14:13:03<SeP>2024-09-12 00:43:12<SeP>2024-09-13 11:13:21<SeP>2024-09-14 21:43:30<SeP>2024-09-16 08:13:39<SeP>2024-09-17 18:43:48<SeP>2024-09-19 05:13:57<SeP>2024-09-20 15:44:06<SeP>2024-09-22 02:14:15<SeP>2024-09-23 12:44:24<SeP>2024-09-24 23:14:33<SeP>2024-09-26 09:44:42<SeP>2024-09-27 20:14:51<SeP>2024-09-29 06:45:00<SeP>2024-09-30 17:15:09<SeP>2024-10-02 03:45:18<SeP>2024-10-03 14:15:27<SeP>2024-10-05 00:45:36<SeP>2024-10-06 11:15:45<SeP>2024-10-07 21:45:54<SeP>2024-10-09 08:16:03<SeP>2024-10-10 18:46:12<SeP>2024-10-12 05:16:21<SeP>2024-10-13 15:46:30<SeP>2024-10-15 02:16:39<SeP>2024-10-16 12:46:48<SeP>2024-10-17 23:16:57<SeP>2024-10-19 09:47:06<SeP>2024-10-20 20:17:15<SeP>2024-10-22 06:47:24<SeP>2024-10-23 17:17:33<SeP>2024-10-25 03:47:42<SeP>2024-10-26 14:17:51<SeP>2024-10-28 00:48:00<SeP>2024-10-29 11:18:09<SeP>2024-10-30 21:48:18<SeP>2024-11-01 08:18:27<SeP>2024-11-02 18:48:36<SeP>2024-11-04 04:18:45<SeP>2024-11-05 14:48:54<SeP>2024-11-07 01:19:03<SeP>2024-11-08 11:49:12<SeP>2024-11-09 22:19:21<SeP>2024-11-11 08:49:30<SeP>2024-11-12 19:19:39<SeP>2024-11-14 05:49:48<SeP>2024-11-15 16:19:57<SeP>2024-11-17 02:50:06<SeP>2024-11-18 13:20:15<SeP>2024-11-19 23:50:24<SeP>2024-11-21 10:20:33<SeP>2024-11-22 20:50:42<SeP>2024-11-24 07:20:51<SeP>2024-11-25 17:51:00<SeP>2024-11-27 04:21:09<SeP>2024-11-28 14:51:18<SeP>2024-11-30 01:21:27<SeP>2024-12-01 11:51:36<SeP>2024-12-02 22:21:45<SeP>2024-12-04 08:51:54<SeP>2024-12-05 19:22:03<SeP>2024-12-07 05:52:12<SeP>2024-12-08 16:22:21<SeP>2024-12-10 02:52:30<SeP>2024-12-11 13:22:39<SeP>2024-12-12 23:52:48<SeP>2024-12-14 10:22:57<SeP>2024-12-15 20:53:06<SeP>2024-12-17 07:23:15<SeP>2024-12-18 17:53:24<SeP>2024-12-20 04:23:33<SeP>2024-12-21 14:53:42<SeP>2024-12-23 01:23:51<SeP>2024-12-24 11:54:00<SeP>2024-12-25 22:24:09<SeP>2024-12-27 08:54:18<SeP>2024-12-28 19:24:27<SeP>2024-12-30 05:54:36<SeP>2024-12-31 16:24:45<SeP>2025-01-02 02:54:54<SeP>2025-01-03 13:25:03<SeP>2025-01-04 23:55:12<SeP>2025-01-06 10:25:21<SeP>2025-01-07 20:55:30<SeP>2025-01-09 07:25:39<SeP>2025-01-10 17:55:48<SeP>2025-01-12 04:25:57<SeP>2025-01-13 14:56:06<SeP>2025-01-15 01:26:15<SeP>2025-01-16 11:56:24<SeP>2025-01-17 22:26:33<SeP>2025-01-19 08:56:42<SeP>2025-01-20 19:26:51<SeP>2025-01-22 05:57:00<SeP>2025-01-23 16:27:09<SeP>2025-01-25 02:57:18<SeP>2025-01-26 13:27:27<SeP>2025-01-27 23:57:36<SeP>2025-01-29 10:27:45<SeP>2025-01-30 20:57:54<SeP>2025-02-01 07:28:03<SeP>2025-02-02 17:58:12<SeP>2025-02-04 04:28:21<SeP>2025-02-05 14:58:30<SeP>2025-02-07 01:28:39<SeP>2025-02-08 11:58:48<SeP>2025-02-09 22:28:57<SeP>2025-02-11 08:59:06<SeP>2025-02-12 19:29:15<SeP>2025-02-14 05:59:24<SeP>2025-02-15 16:29:33<SeP>2025-02-17 02:59:42<SeP>2025-02-18 13:29:51";
  const itemLabel       = "Attacks";
  const itemData        = "152<SeP>613<SeP>966<SeP>716<SeP>546<SeP>211<SeP>6960<SeP>498<SeP>9205<SeP>976<SeP>283<SeP>1234<SeP>790<SeP>725<SeP>143<SeP>442<SeP>148<SeP>364<SeP>670<SeP>3333<SeP>6689<SeP>8017<SeP>6554<SeP>8664<SeP>403<SeP>306<SeP>401<SeP>173<SeP>373<SeP>5930<SeP>78<SeP>387<SeP>152<SeP>506<SeP>334<SeP>9250<SeP>9122<SeP>10163<SeP>9471<SeP>6644<SeP>5132<SeP>8673<SeP>7132<SeP>8817<SeP>8695<SeP>7213<SeP>8282<SeP>8723<SeP>8301<SeP>8309<SeP>5857<SeP>6103<SeP>11260<SeP>7281<SeP>7690<SeP>7107<SeP>9724<SeP>11302<SeP>20467<SeP>12079<SeP>8584<SeP>10344<SeP>6529<SeP>8315<SeP>8540<SeP>8417<SeP>8725<SeP>5581<SeP>7127<SeP>7234<SeP>5850<SeP>3217<SeP>6180<SeP>5468<SeP>6295<SeP>5971<SeP>8628<SeP>3375<SeP>6060<SeP>5414<SeP>6330<SeP>4836<SeP>7128<SeP>4601<SeP>5775<SeP>6414<SeP>5795<SeP>5837<SeP>5187<SeP>10108<SeP>20597<SeP>35989<SeP>7121<SeP>9242<SeP>5623<SeP>7109<SeP>11998<SeP>6780<SeP>3986<SeP>5642<SeP>4607<SeP>4126<SeP>6934<SeP>6509<SeP>6860<SeP>6886<SeP>5705<SeP>4024<SeP>6673<SeP>8458<SeP>8123<SeP>8303<SeP>4084<SeP>6448<SeP>9418<SeP>8524<SeP>4608<SeP>3095<SeP>6407<SeP>9121<SeP>5166<SeP>7055<SeP>9598<SeP>4322<SeP>2186<SeP>1559<SeP>1726<SeP>2012<SeP>2298<SeP>1050<SeP>739<SeP>1143<SeP>1305<SeP>1656<SeP>604<SeP>1283<SeP>1094<SeP>1025<SeP>870<SeP>1057<SeP>1488<SeP>1240<SeP>1092<SeP>1681<SeP>2055<SeP>4220<SeP>11362<SeP>8251<SeP>7130<SeP>7653<SeP>6044<SeP>9649<SeP>8774<SeP>9785<SeP>8643<SeP>13728<SeP>8210<SeP>9910<SeP>10011<SeP>13706<SeP>8936<SeP>8796<SeP>3986<SeP>6650<SeP>8985<SeP>23209<SeP>6286<SeP>8037<SeP>10473<SeP>16677<SeP>6954<SeP>6770<SeP>6906<SeP>5938<SeP>14502<SeP>19417<SeP>7567<SeP>10245<SeP>6066<SeP>6926<SeP>5537<SeP>6184<SeP>14885<SeP>5921<SeP>13444<SeP>8272<SeP>6350<SeP>7944<SeP>5719<SeP>4187<SeP>5952<SeP>7841<SeP>4773<SeP>7064<SeP>6777<SeP>5510<SeP>20909<SeP>6820<SeP>6009<SeP>6225<SeP>8109<SeP>10322<SeP>6294<SeP>4976<SeP>3890<SeP>6777<SeP>3100<SeP>4852<SeP>4107<SeP>658<SeP>122<SeP>633<SeP>190<SeP>564<SeP>1092<SeP>328<SeP>461<SeP>886<SeP>1554<SeP>3179<SeP>1014<SeP>22505<SeP>1331<SeP>4701<SeP>3035<SeP>3427<SeP>6471<SeP>2607<SeP>4206<SeP>3592<SeP>2837<SeP>2989<SeP>3091<SeP>4686<SeP>1752<SeP>2921<SeP>2598<SeP>1983<SeP>1927<SeP>2069<SeP>1204<SeP>1802<SeP>900<SeP>867<SeP>1841<SeP>11288<SeP>16658<SeP>2088<SeP>4116<SeP>3483<SeP>2050<SeP>4203<SeP>2025<SeP>2270<SeP>3423<SeP>2745<SeP>3448<SeP>2016<SeP>2993<SeP>3493<SeP>5015<SeP>4748<SeP>4875<SeP>4683<SeP>2667<SeP>2169<SeP>4968<SeP>3362<SeP>9928<SeP>5390<SeP>3222<SeP>2449<SeP>2865<SeP>4017<SeP>3950<SeP>3106<SeP>3339<SeP>2444<SeP>4950<SeP>4715<SeP>2891<SeP>6151<SeP>4145<SeP>6141<SeP>4531<SeP>5377<SeP>5011<SeP>22112<SeP>5614<SeP>10667<SeP>1731<SeP>2968<SeP>4132<SeP>3645<SeP>5053<SeP>3083<SeP>5253<SeP>4498<SeP>4488<SeP>3436<SeP>3907<SeP>2202<SeP>1332<SeP>1893<SeP>3762<SeP>2178<SeP>2768<SeP>3784<SeP>4172<SeP>3803<SeP>3236<SeP>4287<SeP>3417<SeP>3094<SeP>3963<SeP>7933<SeP>6295<SeP>5376<SeP>4673<SeP>5080<SeP>3934<SeP>3586<SeP>4476<SeP>4006<SeP>6178<SeP>4686<SeP>5404<SeP>1994<SeP>749<SeP>1489<SeP>1478<SeP>1221<SeP>1228<SeP>1693<SeP>1555<SeP>1421<SeP>3338<SeP>4557<SeP>6195<SeP>34247<SeP>4494<SeP>5199<SeP>17447<SeP>11037<SeP>5293<SeP>6057<SeP>4706<SeP>22385<SeP>6346<SeP>5237<SeP>4453<SeP>4732<SeP>6265<SeP>19359<SeP>15743<SeP>4186<SeP>3122<SeP>4467<SeP>5197<SeP>5538<SeP>2878<SeP>3193<SeP>4139<SeP>5104<SeP>4950<SeP>4100<SeP>18059<SeP>5806<SeP>6674<SeP>3444<SeP>2297<SeP>3396<SeP>4390<SeP>4044<SeP>3851<SeP>2841<SeP>3649<SeP>2503<SeP>4122<SeP>3892<SeP>7096<SeP>9450<SeP>9054<SeP>8537<SeP>8708<SeP>7311<SeP>6699<SeP>5067<SeP>4685<SeP>8258<SeP>21093<SeP>3241<SeP>4243<SeP>3163<SeP>11330<SeP>5054<SeP>4436<SeP>4095<SeP>4494<SeP>3448";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:30:09<SeP>2023-07-28 21:00:18<SeP>2023-07-30 07:30:27<SeP>2023-07-31 18:00:36<SeP>2023-08-02 04:30:45<SeP>2023-08-03 15:00:54<SeP>2023-08-05 01:31:03<SeP>2023-08-06 12:01:12<SeP>2023-08-07 22:31:21<SeP>2023-08-09 09:01:30<SeP>2023-08-10 19:31:39<SeP>2023-08-12 06:01:48<SeP>2023-08-13 16:31:57<SeP>2023-08-15 03:02:06<SeP>2023-08-16 13:32:15<SeP>2023-08-18 00:02:24<SeP>2023-08-19 10:32:33<SeP>2023-08-20 21:02:42<SeP>2023-08-22 07:32:51<SeP>2023-08-23 18:03:00<SeP>2023-08-25 04:33:09<SeP>2023-08-26 15:03:18<SeP>2023-08-28 01:33:27<SeP>2023-08-29 12:03:36<SeP>2023-08-30 22:33:45<SeP>2023-09-01 09:03:54<SeP>2023-09-02 19:34:03<SeP>2023-09-04 06:04:12<SeP>2023-09-05 16:34:21<SeP>2023-09-07 03:04:30<SeP>2023-09-08 13:34:39<SeP>2023-09-10 00:04:48<SeP>2023-09-11 10:34:57<SeP>2023-09-12 21:05:06<SeP>2023-09-14 07:35:15<SeP>2023-09-15 18:05:24<SeP>2023-09-17 04:35:33<SeP>2023-09-18 15:05:42<SeP>2023-09-20 01:35:51<SeP>2023-09-21 12:06:00<SeP>2023-09-22 22:36:09<SeP>2023-09-24 09:06:18<SeP>2023-09-25 19:36:27<SeP>2023-09-27 06:06:36<SeP>2023-09-28 16:36:45<SeP>2023-09-30 03:06:54<SeP>2023-10-01 13:37:03<SeP>2023-10-03 00:07:12<SeP>2023-10-04 10:37:21<SeP>2023-10-05 21:07:30<SeP>2023-10-07 07:37:39<SeP>2023-10-08 18:07:48<SeP>2023-10-10 04:37:57<SeP>2023-10-11 15:08:06<SeP>2023-10-13 01:38:15<SeP>2023-10-14 12:08:24<SeP>2023-10-15 22:38:33<SeP>2023-10-17 09:08:42<SeP>2023-10-18 19:38:51<SeP>2023-10-20 06:09:00<SeP>2023-10-21 16:39:09<SeP>2023-10-23 03:09:18<SeP>2023-10-24 13:39:27<SeP>2023-10-26 00:09:36<SeP>2023-10-27 10:39:45<SeP>2023-10-28 21:09:54<SeP>2023-10-30 07:40:03<SeP>2023-10-31 18:10:12<SeP>2023-11-02 04:40:21<SeP>2023-11-03 15:10:30<SeP>2023-11-05 01:40:39<SeP>2023-11-06 11:10:48<SeP>2023-11-07 21:40:57<SeP>2023-11-09 08:11:06<SeP>2023-11-10 18:41:15<SeP>2023-11-12 05:11:24<SeP>2023-11-13 15:41:33<SeP>2023-11-15 02:11:42<SeP>2023-11-16 12:41:51<SeP>2023-11-17 23:12:00<SeP>2023-11-19 09:42:09<SeP>2023-11-20 20:12:18<SeP>2023-11-22 06:42:27<SeP>2023-11-23 17:12:36<SeP>2023-11-25 03:42:45<SeP>2023-11-26 14:12:54<SeP>2023-11-28 00:43:03<SeP>2023-11-29 11:13:12<SeP>2023-11-30 21:43:21<SeP>2023-12-02 08:13:30<SeP>2023-12-03 18:43:39<SeP>2023-12-05 05:13:48<SeP>2023-12-06 15:43:57<SeP>2023-12-08 02:14:06<SeP>2023-12-09 12:44:15<SeP>2023-12-10 23:14:24<SeP>2023-12-12 09:44:33<SeP>2023-12-13 20:14:42<SeP>2023-12-15 06:44:51<SeP>2023-12-16 17:15:00<SeP>2023-12-18 03:45:09<SeP>2023-12-19 14:15:18<SeP>2023-12-21 00:45:27<SeP>2023-12-22 11:15:36<SeP>2023-12-23 21:45:45<SeP>2023-12-25 08:15:54<SeP>2023-12-26 18:46:03<SeP>2023-12-28 05:16:12<SeP>2023-12-29 15:46:21<SeP>2023-12-31 02:16:30<SeP>2024-01-01 12:46:39<SeP>2024-01-02 23:16:48<SeP>2024-01-04 09:46:57<SeP>2024-01-05 20:17:06<SeP>2024-01-07 06:47:15<SeP>2024-01-08 17:17:24<SeP>2024-01-10 03:47:33<SeP>2024-01-11 14:17:42<SeP>2024-01-13 00:47:51<SeP>2024-01-14 11:18:00<SeP>2024-01-15 21:48:09<SeP>2024-01-17 08:18:18<SeP>2024-01-18 18:48:27<SeP>2024-01-20 05:18:36<SeP>2024-01-21 15:48:45<SeP>2024-01-23 02:18:54<SeP>2024-01-24 12:49:03<SeP>2024-01-25 23:19:12<SeP>2024-01-27 09:49:21<SeP>2024-01-28 20:19:30<SeP>2024-01-30 06:49:39<SeP>2024-01-31 17:19:48<SeP>2024-02-02 03:49:57<SeP>2024-02-03 14:20:06<SeP>2024-02-05 00:50:15<SeP>2024-02-06 11:20:24<SeP>2024-02-07 21:50:33<SeP>2024-02-09 08:20:42<SeP>2024-02-10 18:50:51<SeP>2024-02-12 05:21:00<SeP>2024-02-13 15:51:09<SeP>2024-02-15 02:21:18<SeP>2024-02-16 12:51:27<SeP>2024-02-17 23:21:36<SeP>2024-02-19 09:51:45<SeP>2024-02-20 20:21:54<SeP>2024-02-22 06:52:03<SeP>2024-02-23 17:22:12<SeP>2024-02-25 03:52:21<SeP>2024-02-26 14:22:30<SeP>2024-02-28 00:52:39<SeP>2024-02-29 11:22:48<SeP>2024-03-01 21:52:57<SeP>2024-03-03 08:23:06<SeP>2024-03-04 18:53:15<SeP>2024-03-06 05:23:24<SeP>2024-03-07 15:53:33<SeP>2024-03-09 02:23:42<SeP>2024-03-10 13:53:51<SeP>2024-03-12 00:24:00<SeP>2024-03-13 10:54:09<SeP>2024-03-14 21:24:18<SeP>2024-03-16 07:54:27<SeP>2024-03-17 18:24:36<SeP>2024-03-19 04:54:45<SeP>2024-03-20 15:24:54<SeP>2024-03-22 01:55:03<SeP>2024-03-23 12:25:12<SeP>2024-03-24 22:55:21<SeP>2024-03-26 09:25:30<SeP>2024-03-27 19:55:39<SeP>2024-03-29 06:25:48<SeP>2024-03-30 16:55:57<SeP>2024-04-01 03:26:06<SeP>2024-04-02 13:56:15<SeP>2024-04-04 00:26:24<SeP>2024-04-05 10:56:33<SeP>2024-04-06 21:26:42<SeP>2024-04-08 07:56:51<SeP>2024-04-09 18:27:00<SeP>2024-04-11 04:57:09<SeP>2024-04-12 15:27:18<SeP>2024-04-14 01:57:27<SeP>2024-04-15 12:27:36<SeP>2024-04-16 22:57:45<SeP>2024-04-18 09:27:54<SeP>2024-04-19 19:58:03<SeP>2024-04-21 06:28:12<SeP>2024-04-22 16:58:21<SeP>2024-04-24 03:28:30<SeP>2024-04-25 13:58:39<SeP>2024-04-27 00:28:48<SeP>2024-04-28 10:58:57<SeP>2024-04-29 21:29:06<SeP>2024-05-01 07:59:15<SeP>2024-05-02 18:29:24<SeP>2024-05-04 04:59:33<SeP>2024-05-05 15:29:42<SeP>2024-05-07 01:59:51<SeP>2024-05-08 12:30:00<SeP>2024-05-09 23:00:09<SeP>2024-05-11 09:30:18<SeP>2024-05-12 20:00:27<SeP>2024-05-14 06:30:36<SeP>2024-05-15 17:00:45<SeP>2024-05-17 03:30:54<SeP>2024-05-18 14:01:03<SeP>2024-05-20 00:31:12<SeP>2024-05-21 11:01:21<SeP>2024-05-22 21:31:30<SeP>2024-05-24 08:01:39<SeP>2024-05-25 18:31:48<SeP>2024-05-27 05:01:57<SeP>2024-05-28 15:32:06<SeP>2024-05-30 02:02:15<SeP>2024-05-31 12:32:24<SeP>2024-06-01 23:02:33<SeP>2024-06-03 09:32:42<SeP>2024-06-04 20:02:51<SeP>2024-06-06 06:33:00<SeP>2024-06-07 17:03:09<SeP>2024-06-09 03:33:18<SeP>2024-06-10 14:03:27<SeP>2024-06-12 00:33:36<SeP>2024-06-13 11:03:45<SeP>2024-06-14 21:33:54<SeP>2024-06-16 08:04:03<SeP>2024-06-17 18:34:12<SeP>2024-06-19 05:04:21<SeP>2024-06-20 15:34:30<SeP>2024-06-22 02:04:39<SeP>2024-06-23 12:34:48<SeP>2024-06-24 23:04:57<SeP>2024-06-26 09:35:06<SeP>2024-06-27 20:05:15<SeP>2024-06-29 06:35:24<SeP>2024-06-30 17:05:33<SeP>2024-07-02 03:35:42<SeP>2024-07-03 14:05:51<SeP>2024-07-05 00:36:00<SeP>2024-07-06 11:06:09<SeP>2024-07-07 21:36:18<SeP>2024-07-09 08:06:27<SeP>2024-07-10 18:36:36<SeP>2024-07-12 05:06:45<SeP>2024-07-13 15:36:54<SeP>2024-07-15 02:07:03<SeP>2024-07-16 12:37:12<SeP>2024-07-17 23:07:21<SeP>2024-07-19 09:37:30<SeP>2024-07-20 20:07:39<SeP>2024-07-22 06:37:48<SeP>2024-07-23 17:07:57<SeP>2024-07-25 03:38:06<SeP>2024-07-26 14:08:15<SeP>2024-07-28 00:38:24<SeP>2024-07-29 11:08:33<SeP>2024-07-30 21:38:42<SeP>2024-08-01 08:08:51<SeP>2024-08-02 18:39:00<SeP>2024-08-04 05:09:09<SeP>2024-08-05 15:39:18<SeP>2024-08-07 02:09:27<SeP>2024-08-08 12:39:36<SeP>2024-08-09 23:09:45<SeP>2024-08-11 09:39:54<SeP>2024-08-12 20:10:03<SeP>2024-08-14 06:40:12<SeP>2024-08-15 17:10:21<SeP>2024-08-17 03:40:30<SeP>2024-08-18 14:10:39<SeP>2024-08-20 00:40:48<SeP>2024-08-21 11:10:57<SeP>2024-08-22 21:41:06<SeP>2024-08-24 08:11:15<SeP>2024-08-25 18:41:24<SeP>2024-08-27 05:11:33<SeP>2024-08-28 15:41:42<SeP>2024-08-30 02:11:51<SeP>2024-08-31 12:42:00<SeP>2024-09-01 23:12:09<SeP>2024-09-03 09:42:18<SeP>2024-09-04 20:12:27<SeP>2024-09-06 06:42:36<SeP>2024-09-07 17:12:45<SeP>2024-09-09 03:42:54<SeP>2024-09-10 14:13:03<SeP>2024-09-12 00:43:12<SeP>2024-09-13 11:13:21<SeP>2024-09-14 21:43:30<SeP>2024-09-16 08:13:39<SeP>2024-09-17 18:43:48<SeP>2024-09-19 05:13:57<SeP>2024-09-20 15:44:06<SeP>2024-09-22 02:14:15<SeP>2024-09-23 12:44:24<SeP>2024-09-24 23:14:33<SeP>2024-09-26 09:44:42<SeP>2024-09-27 20:14:51<SeP>2024-09-29 06:45:00<SeP>2024-09-30 17:15:09<SeP>2024-10-02 03:45:18<SeP>2024-10-03 14:15:27<SeP>2024-10-05 00:45:36<SeP>2024-10-06 11:15:45<SeP>2024-10-07 21:45:54<SeP>2024-10-09 08:16:03<SeP>2024-10-10 18:46:12<SeP>2024-10-12 05:16:21<SeP>2024-10-13 15:46:30<SeP>2024-10-15 02:16:39<SeP>2024-10-16 12:46:48<SeP>2024-10-17 23:16:57<SeP>2024-10-19 09:47:06<SeP>2024-10-20 20:17:15<SeP>2024-10-22 06:47:24<SeP>2024-10-23 17:17:33<SeP>2024-10-25 03:47:42<SeP>2024-10-26 14:17:51<SeP>2024-10-28 00:48:00<SeP>2024-10-29 11:18:09<SeP>2024-10-30 21:48:18<SeP>2024-11-01 08:18:27<SeP>2024-11-02 18:48:36<SeP>2024-11-04 04:18:45<SeP>2024-11-05 14:48:54<SeP>2024-11-07 01:19:03<SeP>2024-11-08 11:49:12<SeP>2024-11-09 22:19:21<SeP>2024-11-11 08:49:30<SeP>2024-11-12 19:19:39<SeP>2024-11-14 05:49:48<SeP>2024-11-15 16:19:57<SeP>2024-11-17 02:50:06<SeP>2024-11-18 13:20:15<SeP>2024-11-19 23:50:24<SeP>2024-11-21 10:20:33<SeP>2024-11-22 20:50:42<SeP>2024-11-24 07:20:51<SeP>2024-11-25 17:51:00<SeP>2024-11-27 04:21:09<SeP>2024-11-28 14:51:18<SeP>2024-11-30 01:21:27<SeP>2024-12-01 11:51:36<SeP>2024-12-02 22:21:45<SeP>2024-12-04 08:51:54<SeP>2024-12-05 19:22:03<SeP>2024-12-07 05:52:12<SeP>2024-12-08 16:22:21<SeP>2024-12-10 02:52:30<SeP>2024-12-11 13:22:39<SeP>2024-12-12 23:52:48<SeP>2024-12-14 10:22:57<SeP>2024-12-15 20:53:06<SeP>2024-12-17 07:23:15<SeP>2024-12-18 17:53:24<SeP>2024-12-20 04:23:33<SeP>2024-12-21 14:53:42<SeP>2024-12-23 01:23:51<SeP>2024-12-24 11:54:00<SeP>2024-12-25 22:24:09<SeP>2024-12-27 08:54:18<SeP>2024-12-28 19:24:27<SeP>2024-12-30 05:54:36<SeP>2024-12-31 16:24:45<SeP>2025-01-02 02:54:54<SeP>2025-01-03 13:25:03<SeP>2025-01-04 23:55:12<SeP>2025-01-06 10:25:21<SeP>2025-01-07 20:55:30<SeP>2025-01-09 07:25:39<SeP>2025-01-10 17:55:48<SeP>2025-01-12 04:25:57<SeP>2025-01-13 14:56:06<SeP>2025-01-15 01:26:15<SeP>2025-01-16 11:56:24<SeP>2025-01-17 22:26:33<SeP>2025-01-19 08:56:42<SeP>2025-01-20 19:26:51<SeP>2025-01-22 05:57:00<SeP>2025-01-23 16:27:09<SeP>2025-01-25 02:57:18<SeP>2025-01-26 13:27:27<SeP>2025-01-27 23:57:36<SeP>2025-01-29 10:27:45<SeP>2025-01-30 20:57:54<SeP>2025-02-01 07:28:03<SeP>2025-02-02 17:58:12<SeP>2025-02-04 04:28:21<SeP>2025-02-05 14:58:30<SeP>2025-02-07 01:28:39<SeP>2025-02-08 11:58:48<SeP>2025-02-09 22:28:57<SeP>2025-02-11 08:59:06<SeP>2025-02-12 19:29:15<SeP>2025-02-14 05:59:24<SeP>2025-02-15 16:29:33<SeP>2025-02-17 02:59:42<SeP>2025-02-18 13:29:51";
  const item1Label       = "Escaneos";
  const item1Data        = "755<SeP>1452<SeP>1375<SeP>1422<SeP>1198<SeP>1706<SeP>996<SeP>986<SeP>1076<SeP>3323<SeP>1465<SeP>2857<SeP>1825<SeP>2545<SeP>735<SeP>814<SeP>1414<SeP>1384<SeP>2558<SeP>1500<SeP>1509<SeP>982<SeP>884<SeP>1085<SeP>1181<SeP>913<SeP>727<SeP>905<SeP>3621<SeP>1000<SeP>783<SeP>1339<SeP>1205<SeP>849<SeP>1347<SeP>2761<SeP>2866<SeP>1755<SeP>1457<SeP>1790<SeP>1219<SeP>1591<SeP>1841<SeP>1882<SeP>1843<SeP>1622<SeP>1619<SeP>1598<SeP>1686<SeP>1533<SeP>1838<SeP>1820<SeP>1766<SeP>1482<SeP>3185<SeP>1515<SeP>1510<SeP>2105<SeP>1848<SeP>2191<SeP>1248<SeP>3816<SeP>1378<SeP>1483<SeP>1615<SeP>1123<SeP>1889<SeP>1584<SeP>1398<SeP>1262<SeP>1462<SeP>1110<SeP>2368<SeP>1247<SeP>1028<SeP>1299<SeP>2488<SeP>6966<SeP>1278<SeP>1254<SeP>1377<SeP>2262<SeP>1231<SeP>1375<SeP>6424<SeP>1460<SeP>1594<SeP>935<SeP>2272<SeP>2191<SeP>1167<SeP>1005<SeP>967<SeP>1164<SeP>1785<SeP>2181<SeP>1024<SeP>1568<SeP>2834<SeP>6487<SeP>1242<SeP>947<SeP>925<SeP>889<SeP>994<SeP>973<SeP>956<SeP>993<SeP>3947<SeP>2087<SeP>1390<SeP>1627<SeP>595<SeP>949<SeP>1571<SeP>1077<SeP>1048<SeP>949<SeP>2231<SeP>1203<SeP>1065<SeP>1024<SeP>1098<SeP>837<SeP>815<SeP>838<SeP>831<SeP>765<SeP>1115<SeP>814<SeP>894<SeP>800<SeP>857<SeP>906<SeP>637<SeP>760<SeP>852<SeP>873<SeP>855<SeP>844<SeP>811<SeP>775<SeP>799<SeP>1011<SeP>867<SeP>761<SeP>891<SeP>998<SeP>836<SeP>1093<SeP>951<SeP>455<SeP>926<SeP>753<SeP>910<SeP>1248<SeP>898<SeP>1078<SeP>1137<SeP>1172<SeP>918<SeP>834<SeP>1041<SeP>792<SeP>857<SeP>1066<SeP>792<SeP>971<SeP>884<SeP>1032<SeP>944<SeP>1065<SeP>986<SeP>1003<SeP>1082<SeP>883<SeP>923<SeP>1871<SeP>1349<SeP>1228<SeP>1079<SeP>892<SeP>1157<SeP>988<SeP>946<SeP>774<SeP>691<SeP>960<SeP>1087<SeP>819<SeP>1063<SeP>1198<SeP>1127<SeP>1124<SeP>1268<SeP>1062<SeP>1353<SeP>1103<SeP>1484<SeP>1176<SeP>1510<SeP>2029<SeP>1228<SeP>997<SeP>855<SeP>1111<SeP>983<SeP>909<SeP>612<SeP>772<SeP>980<SeP>836<SeP>3059<SeP>4820<SeP>2160<SeP>1826<SeP>1128<SeP>875<SeP>1007<SeP>860<SeP>963<SeP>904<SeP>1100<SeP>1045<SeP>1028<SeP>1750<SeP>1707<SeP>979<SeP>1259<SeP>1222<SeP>1159<SeP>1147<SeP>1007<SeP>986<SeP>1007<SeP>1110<SeP>972<SeP>1113<SeP>990<SeP>1203<SeP>817<SeP>1406<SeP>994<SeP>1117<SeP>1059<SeP>1304<SeP>1231<SeP>1150<SeP>1526<SeP>1248<SeP>1084<SeP>1087<SeP>1191<SeP>1944<SeP>1229<SeP>1972<SeP>1584<SeP>1488<SeP>1972<SeP>1557<SeP>1170<SeP>1076<SeP>1354<SeP>1031<SeP>1709<SeP>1123<SeP>1224<SeP>1452<SeP>1876<SeP>1229<SeP>1487<SeP>1349<SeP>1350<SeP>1148<SeP>1099<SeP>1286<SeP>1135<SeP>1181<SeP>1247<SeP>1267<SeP>1074<SeP>2009<SeP>1280<SeP>1288<SeP>1639<SeP>1385<SeP>1273<SeP>977<SeP>964<SeP>1007<SeP>986<SeP>808<SeP>995<SeP>1741<SeP>1150<SeP>1046<SeP>1095<SeP>962<SeP>767<SeP>1070<SeP>1216<SeP>953<SeP>933<SeP>877<SeP>1247<SeP>1441<SeP>1553<SeP>1186<SeP>1031<SeP>970<SeP>1342<SeP>1545<SeP>968<SeP>1187<SeP>1003<SeP>1457<SeP>1160<SeP>832<SeP>1208<SeP>1053<SeP>954<SeP>861<SeP>978<SeP>1388<SeP>1204<SeP>1685<SeP>1573<SeP>1248<SeP>944<SeP>1107<SeP>1107<SeP>1087<SeP>1129<SeP>1126<SeP>1051<SeP>999<SeP>1198<SeP>1405<SeP>1402<SeP>1532<SeP>1453<SeP>1221<SeP>1541<SeP>1404<SeP>1340<SeP>1397<SeP>1524<SeP>1282<SeP>1404<SeP>1513<SeP>1550<SeP>1482<SeP>1344<SeP>1418<SeP>1310<SeP>1220<SeP>1212<SeP>1403<SeP>1569<SeP>1475<SeP>1232<SeP>1211<SeP>1255<SeP>1385<SeP>1267<SeP>1149<SeP>1500<SeP>1910<SeP>1453<SeP>1195<SeP>699<SeP>1412<SeP>1805<SeP>1259<SeP>1291<SeP>1260<SeP>1042<SeP>1448<SeP>1272<SeP>1296<SeP>1469<SeP>1713<SeP>1327<SeP>1568<SeP>1669<SeP>1304<SeP>1404<SeP>1457<SeP>1587<SeP>1529<SeP>1123<SeP>1160<SeP>1909<SeP>1701<SeP>1681<SeP>1785<SeP>1814<SeP>1568<SeP>1561<SeP>1483";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "152<SeP>613<SeP>966<SeP>716<SeP>546<SeP>211<SeP>6960<SeP>498<SeP>9205<SeP>976<SeP>283<SeP>1234<SeP>790<SeP>725<SeP>143<SeP>442<SeP>148<SeP>364<SeP>670<SeP>3333<SeP>6689<SeP>8017<SeP>6554<SeP>8664<SeP>403<SeP>306<SeP>401<SeP>173<SeP>373<SeP>5930<SeP>78<SeP>387<SeP>152<SeP>506<SeP>334<SeP>9250<SeP>9122<SeP>10163<SeP>9471<SeP>6644<SeP>5132<SeP>8673<SeP>7132<SeP>8817<SeP>8695<SeP>7213<SeP>8282<SeP>8723<SeP>8301<SeP>8309<SeP>5857<SeP>6103<SeP>11260<SeP>7281<SeP>7690<SeP>7107<SeP>9724<SeP>11302<SeP>20467<SeP>12079<SeP>8584<SeP>10344<SeP>6529<SeP>8315<SeP>8540<SeP>8417<SeP>8725<SeP>5581<SeP>7127<SeP>7234<SeP>5850<SeP>3217<SeP>6180<SeP>5468<SeP>6295<SeP>5971<SeP>8628<SeP>3375<SeP>6060<SeP>5414<SeP>6330<SeP>4836<SeP>7128<SeP>4601<SeP>5775<SeP>6414<SeP>5795<SeP>5837<SeP>5187<SeP>10108<SeP>20597<SeP>35989<SeP>7121<SeP>9242<SeP>5623<SeP>7109<SeP>11998<SeP>6780<SeP>3986<SeP>5642<SeP>4607<SeP>4126<SeP>6934<SeP>6509<SeP>6860<SeP>6886<SeP>5705<SeP>4024<SeP>6673<SeP>8458<SeP>8123<SeP>8303<SeP>4084<SeP>6448<SeP>9418<SeP>8524<SeP>4608<SeP>3095<SeP>6407<SeP>9121<SeP>5166<SeP>7055<SeP>9598<SeP>4322<SeP>2186<SeP>1559<SeP>1726<SeP>2012<SeP>2298<SeP>1050<SeP>739<SeP>1143<SeP>1305<SeP>1656<SeP>604<SeP>1283<SeP>1094<SeP>1025<SeP>870<SeP>1057<SeP>1488<SeP>1240<SeP>1092<SeP>1681<SeP>2055<SeP>4220<SeP>11362<SeP>8251<SeP>7130<SeP>7653<SeP>6044<SeP>9649<SeP>8774<SeP>9785<SeP>8643<SeP>13728<SeP>8210<SeP>9910<SeP>10011<SeP>13706<SeP>8936<SeP>8796<SeP>3986<SeP>6650<SeP>8985<SeP>23209<SeP>6286<SeP>8037<SeP>10473<SeP>16677<SeP>6954<SeP>6770<SeP>6906<SeP>5938<SeP>14502<SeP>19417<SeP>7567<SeP>10245<SeP>6066<SeP>6926<SeP>5537<SeP>6184<SeP>14885<SeP>5921<SeP>13444<SeP>8272<SeP>6350<SeP>7944<SeP>5719<SeP>4187<SeP>5952<SeP>7841<SeP>4773<SeP>7064<SeP>6777<SeP>5510<SeP>20909<SeP>6820<SeP>6009<SeP>6225<SeP>8109<SeP>10322<SeP>6294<SeP>4976<SeP>3890<SeP>6777<SeP>3100<SeP>4852<SeP>4107<SeP>658<SeP>122<SeP>633<SeP>190<SeP>564<SeP>1092<SeP>328<SeP>461<SeP>886<SeP>1554<SeP>3179<SeP>1014<SeP>22505<SeP>1331<SeP>4701<SeP>3035<SeP>3427<SeP>6471<SeP>2607<SeP>4206<SeP>3592<SeP>2837<SeP>2989<SeP>3091<SeP>4686<SeP>1752<SeP>2921<SeP>2598<SeP>1983<SeP>1927<SeP>2069<SeP>1204<SeP>1802<SeP>900<SeP>867<SeP>1841<SeP>11288<SeP>16658<SeP>2088<SeP>4116<SeP>3483<SeP>2050<SeP>4203<SeP>2025<SeP>2270<SeP>3423<SeP>2745<SeP>3448<SeP>2016<SeP>2993<SeP>3493<SeP>5015<SeP>4748<SeP>4875<SeP>4683<SeP>2667<SeP>2169<SeP>4968<SeP>3362<SeP>9928<SeP>5390<SeP>3222<SeP>2449<SeP>2865<SeP>4017<SeP>3950<SeP>3106<SeP>3339<SeP>2444<SeP>4950<SeP>4715<SeP>2891<SeP>6151<SeP>4145<SeP>6141<SeP>4531<SeP>5377<SeP>5011<SeP>22112<SeP>5614<SeP>10667<SeP>1731<SeP>2968<SeP>4132<SeP>3645<SeP>5053<SeP>3083<SeP>5253<SeP>4498<SeP>4488<SeP>3436<SeP>3907<SeP>2202<SeP>1332<SeP>1893<SeP>3762<SeP>2178<SeP>2768<SeP>3784<SeP>4172<SeP>3803<SeP>3236<SeP>4287<SeP>3417<SeP>3094<SeP>3963<SeP>7933<SeP>6295<SeP>5376<SeP>4673<SeP>5080<SeP>3934<SeP>3586<SeP>4476<SeP>4006<SeP>6178<SeP>4686<SeP>5404<SeP>1994<SeP>749<SeP>1489<SeP>1478<SeP>1221<SeP>1228<SeP>1693<SeP>1555<SeP>1421<SeP>3338<SeP>4557<SeP>6195<SeP>34247<SeP>4494<SeP>5199<SeP>17447<SeP>11037<SeP>5293<SeP>6057<SeP>4706<SeP>22385<SeP>6346<SeP>5237<SeP>4453<SeP>4732<SeP>6265<SeP>19359<SeP>15743<SeP>4186<SeP>3122<SeP>4467<SeP>5197<SeP>5538<SeP>2878<SeP>3193<SeP>4139<SeP>5104<SeP>4950<SeP>4100<SeP>18059<SeP>5806<SeP>6674<SeP>3444<SeP>2297<SeP>3396<SeP>4390<SeP>4044<SeP>3851<SeP>2841<SeP>3649<SeP>2503<SeP>4122<SeP>3892<SeP>7096<SeP>9450<SeP>9054<SeP>8537<SeP>8708<SeP>7311<SeP>6699<SeP>5067<SeP>4685<SeP>8258<SeP>21093<SeP>3241<SeP>4243<SeP>3163<SeP>11330<SeP>5054<SeP>4436<SeP>4095<SeP>4494<SeP>3448";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:30:09<SeP>2023-07-28 21:00:18<SeP>2023-07-30 07:30:27<SeP>2023-07-31 18:00:36<SeP>2023-08-02 04:30:45<SeP>2023-08-03 15:00:54<SeP>2023-08-05 01:31:03<SeP>2023-08-06 12:01:12<SeP>2023-08-07 22:31:21<SeP>2023-08-09 09:01:30<SeP>2023-08-10 19:31:39<SeP>2023-08-12 06:01:48<SeP>2023-08-13 16:31:57<SeP>2023-08-15 03:02:06<SeP>2023-08-16 13:32:15<SeP>2023-08-18 00:02:24<SeP>2023-08-19 10:32:33<SeP>2023-08-20 21:02:42<SeP>2023-08-22 07:32:51<SeP>2023-08-23 18:03:00<SeP>2023-08-25 04:33:09<SeP>2023-08-26 15:03:18<SeP>2023-08-28 01:33:27<SeP>2023-08-29 12:03:36<SeP>2023-08-30 22:33:45<SeP>2023-09-01 09:03:54<SeP>2023-09-02 19:34:03<SeP>2023-09-04 06:04:12<SeP>2023-09-05 16:34:21<SeP>2023-09-07 03:04:30<SeP>2023-09-08 13:34:39<SeP>2023-09-10 00:04:48<SeP>2023-09-11 10:34:57<SeP>2023-09-12 21:05:06<SeP>2023-09-14 07:35:15<SeP>2023-09-15 18:05:24<SeP>2023-09-17 04:35:33<SeP>2023-09-18 15:05:42<SeP>2023-09-20 01:35:51<SeP>2023-09-21 12:06:00<SeP>2023-09-22 22:36:09<SeP>2023-09-24 09:06:18<SeP>2023-09-25 19:36:27<SeP>2023-09-27 06:06:36<SeP>2023-09-28 16:36:45<SeP>2023-09-30 03:06:54<SeP>2023-10-01 13:37:03<SeP>2023-10-03 00:07:12<SeP>2023-10-04 10:37:21<SeP>2023-10-05 21:07:30<SeP>2023-10-07 07:37:39<SeP>2023-10-08 18:07:48<SeP>2023-10-10 04:37:57<SeP>2023-10-11 15:08:06<SeP>2023-10-13 01:38:15<SeP>2023-10-14 12:08:24<SeP>2023-10-15 22:38:33<SeP>2023-10-17 09:08:42<SeP>2023-10-18 19:38:51<SeP>2023-10-20 06:09:00<SeP>2023-10-21 16:39:09<SeP>2023-10-23 03:09:18<SeP>2023-10-24 13:39:27<SeP>2023-10-26 00:09:36<SeP>2023-10-27 10:39:45<SeP>2023-10-28 21:09:54<SeP>2023-10-30 07:40:03<SeP>2023-10-31 18:10:12<SeP>2023-11-02 04:40:21<SeP>2023-11-03 15:10:30<SeP>2023-11-05 01:40:39<SeP>2023-11-06 11:10:48<SeP>2023-11-07 21:40:57<SeP>2023-11-09 08:11:06<SeP>2023-11-10 18:41:15<SeP>2023-11-12 05:11:24<SeP>2023-11-13 15:41:33<SeP>2023-11-15 02:11:42<SeP>2023-11-16 12:41:51<SeP>2023-11-17 23:12:00<SeP>2023-11-19 09:42:09<SeP>2023-11-20 20:12:18<SeP>2023-11-22 06:42:27<SeP>2023-11-23 17:12:36<SeP>2023-11-25 03:42:45<SeP>2023-11-26 14:12:54<SeP>2023-11-28 00:43:03<SeP>2023-11-29 11:13:12<SeP>2023-11-30 21:43:21<SeP>2023-12-02 08:13:30<SeP>2023-12-03 18:43:39<SeP>2023-12-05 05:13:48<SeP>2023-12-06 15:43:57<SeP>2023-12-08 02:14:06<SeP>2023-12-09 12:44:15<SeP>2023-12-10 23:14:24<SeP>2023-12-12 09:44:33<SeP>2023-12-13 20:14:42<SeP>2023-12-15 06:44:51<SeP>2023-12-16 17:15:00<SeP>2023-12-18 03:45:09<SeP>2023-12-19 14:15:18<SeP>2023-12-21 00:45:27<SeP>2023-12-22 11:15:36<SeP>2023-12-23 21:45:45<SeP>2023-12-25 08:15:54<SeP>2023-12-26 18:46:03<SeP>2023-12-28 05:16:12<SeP>2023-12-29 15:46:21<SeP>2023-12-31 02:16:30<SeP>2024-01-01 12:46:39<SeP>2024-01-02 23:16:48<SeP>2024-01-04 09:46:57<SeP>2024-01-05 20:17:06<SeP>2024-01-07 06:47:15<SeP>2024-01-08 17:17:24<SeP>2024-01-10 03:47:33<SeP>2024-01-11 14:17:42<SeP>2024-01-13 00:47:51<SeP>2024-01-14 11:18:00<SeP>2024-01-15 21:48:09<SeP>2024-01-17 08:18:18<SeP>2024-01-18 18:48:27<SeP>2024-01-20 05:18:36<SeP>2024-01-21 15:48:45<SeP>2024-01-23 02:18:54<SeP>2024-01-24 12:49:03<SeP>2024-01-25 23:19:12<SeP>2024-01-27 09:49:21<SeP>2024-01-28 20:19:30<SeP>2024-01-30 06:49:39<SeP>2024-01-31 17:19:48<SeP>2024-02-02 03:49:57<SeP>2024-02-03 14:20:06<SeP>2024-02-05 00:50:15<SeP>2024-02-06 11:20:24<SeP>2024-02-07 21:50:33<SeP>2024-02-09 08:20:42<SeP>2024-02-10 18:50:51<SeP>2024-02-12 05:21:00<SeP>2024-02-13 15:51:09<SeP>2024-02-15 02:21:18<SeP>2024-02-16 12:51:27<SeP>2024-02-17 23:21:36<SeP>2024-02-19 09:51:45<SeP>2024-02-20 20:21:54<SeP>2024-02-22 06:52:03<SeP>2024-02-23 17:22:12<SeP>2024-02-25 03:52:21<SeP>2024-02-26 14:22:30<SeP>2024-02-28 00:52:39<SeP>2024-02-29 11:22:48<SeP>2024-03-01 21:52:57<SeP>2024-03-03 08:23:06<SeP>2024-03-04 18:53:15<SeP>2024-03-06 05:23:24<SeP>2024-03-07 15:53:33<SeP>2024-03-09 02:23:42<SeP>2024-03-10 13:53:51<SeP>2024-03-12 00:24:00<SeP>2024-03-13 10:54:09<SeP>2024-03-14 21:24:18<SeP>2024-03-16 07:54:27<SeP>2024-03-17 18:24:36<SeP>2024-03-19 04:54:45<SeP>2024-03-20 15:24:54<SeP>2024-03-22 01:55:03<SeP>2024-03-23 12:25:12<SeP>2024-03-24 22:55:21<SeP>2024-03-26 09:25:30<SeP>2024-03-27 19:55:39<SeP>2024-03-29 06:25:48<SeP>2024-03-30 16:55:57<SeP>2024-04-01 03:26:06<SeP>2024-04-02 13:56:15<SeP>2024-04-04 00:26:24<SeP>2024-04-05 10:56:33<SeP>2024-04-06 21:26:42<SeP>2024-04-08 07:56:51<SeP>2024-04-09 18:27:00<SeP>2024-04-11 04:57:09<SeP>2024-04-12 15:27:18<SeP>2024-04-14 01:57:27<SeP>2024-04-15 12:27:36<SeP>2024-04-16 22:57:45<SeP>2024-04-18 09:27:54<SeP>2024-04-19 19:58:03<SeP>2024-04-21 06:28:12<SeP>2024-04-22 16:58:21<SeP>2024-04-24 03:28:30<SeP>2024-04-25 13:58:39<SeP>2024-04-27 00:28:48<SeP>2024-04-28 10:58:57<SeP>2024-04-29 21:29:06<SeP>2024-05-01 07:59:15<SeP>2024-05-02 18:29:24<SeP>2024-05-04 04:59:33<SeP>2024-05-05 15:29:42<SeP>2024-05-07 01:59:51<SeP>2024-05-08 12:30:00<SeP>2024-05-09 23:00:09<SeP>2024-05-11 09:30:18<SeP>2024-05-12 20:00:27<SeP>2024-05-14 06:30:36<SeP>2024-05-15 17:00:45<SeP>2024-05-17 03:30:54<SeP>2024-05-18 14:01:03<SeP>2024-05-20 00:31:12<SeP>2024-05-21 11:01:21<SeP>2024-05-22 21:31:30<SeP>2024-05-24 08:01:39<SeP>2024-05-25 18:31:48<SeP>2024-05-27 05:01:57<SeP>2024-05-28 15:32:06<SeP>2024-05-30 02:02:15<SeP>2024-05-31 12:32:24<SeP>2024-06-01 23:02:33<SeP>2024-06-03 09:32:42<SeP>2024-06-04 20:02:51<SeP>2024-06-06 06:33:00<SeP>2024-06-07 17:03:09<SeP>2024-06-09 03:33:18<SeP>2024-06-10 14:03:27<SeP>2024-06-12 00:33:36<SeP>2024-06-13 11:03:45<SeP>2024-06-14 21:33:54<SeP>2024-06-16 08:04:03<SeP>2024-06-17 18:34:12<SeP>2024-06-19 05:04:21<SeP>2024-06-20 15:34:30<SeP>2024-06-22 02:04:39<SeP>2024-06-23 12:34:48<SeP>2024-06-24 23:04:57<SeP>2024-06-26 09:35:06<SeP>2024-06-27 20:05:15<SeP>2024-06-29 06:35:24<SeP>2024-06-30 17:05:33<SeP>2024-07-02 03:35:42<SeP>2024-07-03 14:05:51<SeP>2024-07-05 00:36:00<SeP>2024-07-06 11:06:09<SeP>2024-07-07 21:36:18<SeP>2024-07-09 08:06:27<SeP>2024-07-10 18:36:36<SeP>2024-07-12 05:06:45<SeP>2024-07-13 15:36:54<SeP>2024-07-15 02:07:03<SeP>2024-07-16 12:37:12<SeP>2024-07-17 23:07:21<SeP>2024-07-19 09:37:30<SeP>2024-07-20 20:07:39<SeP>2024-07-22 06:37:48<SeP>2024-07-23 17:07:57<SeP>2024-07-25 03:38:06<SeP>2024-07-26 14:08:15<SeP>2024-07-28 00:38:24<SeP>2024-07-29 11:08:33<SeP>2024-07-30 21:38:42<SeP>2024-08-01 08:08:51<SeP>2024-08-02 18:39:00<SeP>2024-08-04 05:09:09<SeP>2024-08-05 15:39:18<SeP>2024-08-07 02:09:27<SeP>2024-08-08 12:39:36<SeP>2024-08-09 23:09:45<SeP>2024-08-11 09:39:54<SeP>2024-08-12 20:10:03<SeP>2024-08-14 06:40:12<SeP>2024-08-15 17:10:21<SeP>2024-08-17 03:40:30<SeP>2024-08-18 14:10:39<SeP>2024-08-20 00:40:48<SeP>2024-08-21 11:10:57<SeP>2024-08-22 21:41:06<SeP>2024-08-24 08:11:15<SeP>2024-08-25 18:41:24<SeP>2024-08-27 05:11:33<SeP>2024-08-28 15:41:42<SeP>2024-08-30 02:11:51<SeP>2024-08-31 12:42:00<SeP>2024-09-01 23:12:09<SeP>2024-09-03 09:42:18<SeP>2024-09-04 20:12:27<SeP>2024-09-06 06:42:36<SeP>2024-09-07 17:12:45<SeP>2024-09-09 03:42:54<SeP>2024-09-10 14:13:03<SeP>2024-09-12 00:43:12<SeP>2024-09-13 11:13:21<SeP>2024-09-14 21:43:30<SeP>2024-09-16 08:13:39<SeP>2024-09-17 18:43:48<SeP>2024-09-19 05:13:57<SeP>2024-09-20 15:44:06<SeP>2024-09-22 02:14:15<SeP>2024-09-23 12:44:24<SeP>2024-09-24 23:14:33<SeP>2024-09-26 09:44:42<SeP>2024-09-27 20:14:51<SeP>2024-09-29 06:45:00<SeP>2024-09-30 17:15:09<SeP>2024-10-02 03:45:18<SeP>2024-10-03 14:15:27<SeP>2024-10-05 00:45:36<SeP>2024-10-06 11:15:45<SeP>2024-10-07 21:45:54<SeP>2024-10-09 08:16:03<SeP>2024-10-10 18:46:12<SeP>2024-10-12 05:16:21<SeP>2024-10-13 15:46:30<SeP>2024-10-15 02:16:39<SeP>2024-10-16 12:46:48<SeP>2024-10-17 23:16:57<SeP>2024-10-19 09:47:06<SeP>2024-10-20 20:17:15<SeP>2024-10-22 06:47:24<SeP>2024-10-23 17:17:33<SeP>2024-10-25 03:47:42<SeP>2024-10-26 14:17:51<SeP>2024-10-28 00:48:00<SeP>2024-10-29 11:18:09<SeP>2024-10-30 21:48:18<SeP>2024-11-01 08:18:27<SeP>2024-11-02 18:48:36<SeP>2024-11-04 04:18:45<SeP>2024-11-05 14:48:54<SeP>2024-11-07 01:19:03<SeP>2024-11-08 11:49:12<SeP>2024-11-09 22:19:21<SeP>2024-11-11 08:49:30<SeP>2024-11-12 19:19:39<SeP>2024-11-14 05:49:48<SeP>2024-11-15 16:19:57<SeP>2024-11-17 02:50:06<SeP>2024-11-18 13:20:15<SeP>2024-11-19 23:50:24<SeP>2024-11-21 10:20:33<SeP>2024-11-22 20:50:42<SeP>2024-11-24 07:20:51<SeP>2024-11-25 17:51:00<SeP>2024-11-27 04:21:09<SeP>2024-11-28 14:51:18<SeP>2024-11-30 01:21:27<SeP>2024-12-01 11:51:36<SeP>2024-12-02 22:21:45<SeP>2024-12-04 08:51:54<SeP>2024-12-05 19:22:03<SeP>2024-12-07 05:52:12<SeP>2024-12-08 16:22:21<SeP>2024-12-10 02:52:30<SeP>2024-12-11 13:22:39<SeP>2024-12-12 23:52:48<SeP>2024-12-14 10:22:57<SeP>2024-12-15 20:53:06<SeP>2024-12-17 07:23:15<SeP>2024-12-18 17:53:24<SeP>2024-12-20 04:23:33<SeP>2024-12-21 14:53:42<SeP>2024-12-23 01:23:51<SeP>2024-12-24 11:54:00<SeP>2024-12-25 22:24:09<SeP>2024-12-27 08:54:18<SeP>2024-12-28 19:24:27<SeP>2024-12-30 05:54:36<SeP>2024-12-31 16:24:45<SeP>2025-01-02 02:54:54<SeP>2025-01-03 13:25:03<SeP>2025-01-04 23:55:12<SeP>2025-01-06 10:25:21<SeP>2025-01-07 20:55:30<SeP>2025-01-09 07:25:39<SeP>2025-01-10 17:55:48<SeP>2025-01-12 04:25:57<SeP>2025-01-13 14:56:06<SeP>2025-01-15 01:26:15<SeP>2025-01-16 11:56:24<SeP>2025-01-17 22:26:33<SeP>2025-01-19 08:56:42<SeP>2025-01-20 19:26:51<SeP>2025-01-22 05:57:00<SeP>2025-01-23 16:27:09<SeP>2025-01-25 02:57:18<SeP>2025-01-26 13:27:27<SeP>2025-01-27 23:57:36<SeP>2025-01-29 10:27:45<SeP>2025-01-30 20:57:54<SeP>2025-02-01 07:28:03<SeP>2025-02-02 17:58:12<SeP>2025-02-04 04:28:21<SeP>2025-02-05 14:58:30<SeP>2025-02-07 01:28:39<SeP>2025-02-08 11:58:48<SeP>2025-02-09 22:28:57<SeP>2025-02-11 08:59:06<SeP>2025-02-12 19:29:15<SeP>2025-02-14 05:59:24<SeP>2025-02-15 16:29:33<SeP>2025-02-17 02:59:42<SeP>2025-02-18 13:29:51";
  const itemLabel       = "Escaneos";
  const itemData        = "755<SeP>1452<SeP>1375<SeP>1422<SeP>1198<SeP>1706<SeP>996<SeP>986<SeP>1076<SeP>3323<SeP>1465<SeP>2857<SeP>1825<SeP>2545<SeP>735<SeP>814<SeP>1414<SeP>1384<SeP>2558<SeP>1500<SeP>1509<SeP>982<SeP>884<SeP>1085<SeP>1181<SeP>913<SeP>727<SeP>905<SeP>3621<SeP>1000<SeP>783<SeP>1339<SeP>1205<SeP>849<SeP>1347<SeP>2761<SeP>2866<SeP>1755<SeP>1457<SeP>1790<SeP>1219<SeP>1591<SeP>1841<SeP>1882<SeP>1843<SeP>1622<SeP>1619<SeP>1598<SeP>1686<SeP>1533<SeP>1838<SeP>1820<SeP>1766<SeP>1482<SeP>3185<SeP>1515<SeP>1510<SeP>2105<SeP>1848<SeP>2191<SeP>1248<SeP>3816<SeP>1378<SeP>1483<SeP>1615<SeP>1123<SeP>1889<SeP>1584<SeP>1398<SeP>1262<SeP>1462<SeP>1110<SeP>2368<SeP>1247<SeP>1028<SeP>1299<SeP>2488<SeP>6966<SeP>1278<SeP>1254<SeP>1377<SeP>2262<SeP>1231<SeP>1375<SeP>6424<SeP>1460<SeP>1594<SeP>935<SeP>2272<SeP>2191<SeP>1167<SeP>1005<SeP>967<SeP>1164<SeP>1785<SeP>2181<SeP>1024<SeP>1568<SeP>2834<SeP>6487<SeP>1242<SeP>947<SeP>925<SeP>889<SeP>994<SeP>973<SeP>956<SeP>993<SeP>3947<SeP>2087<SeP>1390<SeP>1627<SeP>595<SeP>949<SeP>1571<SeP>1077<SeP>1048<SeP>949<SeP>2231<SeP>1203<SeP>1065<SeP>1024<SeP>1098<SeP>837<SeP>815<SeP>838<SeP>831<SeP>765<SeP>1115<SeP>814<SeP>894<SeP>800<SeP>857<SeP>906<SeP>637<SeP>760<SeP>852<SeP>873<SeP>855<SeP>844<SeP>811<SeP>775<SeP>799<SeP>1011<SeP>867<SeP>761<SeP>891<SeP>998<SeP>836<SeP>1093<SeP>951<SeP>455<SeP>926<SeP>753<SeP>910<SeP>1248<SeP>898<SeP>1078<SeP>1137<SeP>1172<SeP>918<SeP>834<SeP>1041<SeP>792<SeP>857<SeP>1066<SeP>792<SeP>971<SeP>884<SeP>1032<SeP>944<SeP>1065<SeP>986<SeP>1003<SeP>1082<SeP>883<SeP>923<SeP>1871<SeP>1349<SeP>1228<SeP>1079<SeP>892<SeP>1157<SeP>988<SeP>946<SeP>774<SeP>691<SeP>960<SeP>1087<SeP>819<SeP>1063<SeP>1198<SeP>1127<SeP>1124<SeP>1268<SeP>1062<SeP>1353<SeP>1103<SeP>1484<SeP>1176<SeP>1510<SeP>2029<SeP>1228<SeP>997<SeP>855<SeP>1111<SeP>983<SeP>909<SeP>612<SeP>772<SeP>980<SeP>836<SeP>3059<SeP>4820<SeP>2160<SeP>1826<SeP>1128<SeP>875<SeP>1007<SeP>860<SeP>963<SeP>904<SeP>1100<SeP>1045<SeP>1028<SeP>1750<SeP>1707<SeP>979<SeP>1259<SeP>1222<SeP>1159<SeP>1147<SeP>1007<SeP>986<SeP>1007<SeP>1110<SeP>972<SeP>1113<SeP>990<SeP>1203<SeP>817<SeP>1406<SeP>994<SeP>1117<SeP>1059<SeP>1304<SeP>1231<SeP>1150<SeP>1526<SeP>1248<SeP>1084<SeP>1087<SeP>1191<SeP>1944<SeP>1229<SeP>1972<SeP>1584<SeP>1488<SeP>1972<SeP>1557<SeP>1170<SeP>1076<SeP>1354<SeP>1031<SeP>1709<SeP>1123<SeP>1224<SeP>1452<SeP>1876<SeP>1229<SeP>1487<SeP>1349<SeP>1350<SeP>1148<SeP>1099<SeP>1286<SeP>1135<SeP>1181<SeP>1247<SeP>1267<SeP>1074<SeP>2009<SeP>1280<SeP>1288<SeP>1639<SeP>1385<SeP>1273<SeP>977<SeP>964<SeP>1007<SeP>986<SeP>808<SeP>995<SeP>1741<SeP>1150<SeP>1046<SeP>1095<SeP>962<SeP>767<SeP>1070<SeP>1216<SeP>953<SeP>933<SeP>877<SeP>1247<SeP>1441<SeP>1553<SeP>1186<SeP>1031<SeP>970<SeP>1342<SeP>1545<SeP>968<SeP>1187<SeP>1003<SeP>1457<SeP>1160<SeP>832<SeP>1208<SeP>1053<SeP>954<SeP>861<SeP>978<SeP>1388<SeP>1204<SeP>1685<SeP>1573<SeP>1248<SeP>944<SeP>1107<SeP>1107<SeP>1087<SeP>1129<SeP>1126<SeP>1051<SeP>999<SeP>1198<SeP>1405<SeP>1402<SeP>1532<SeP>1453<SeP>1221<SeP>1541<SeP>1404<SeP>1340<SeP>1397<SeP>1524<SeP>1282<SeP>1404<SeP>1513<SeP>1550<SeP>1482<SeP>1344<SeP>1418<SeP>1310<SeP>1220<SeP>1212<SeP>1403<SeP>1569<SeP>1475<SeP>1232<SeP>1211<SeP>1255<SeP>1385<SeP>1267<SeP>1149<SeP>1500<SeP>1910<SeP>1453<SeP>1195<SeP>699<SeP>1412<SeP>1805<SeP>1259<SeP>1291<SeP>1260<SeP>1042<SeP>1448<SeP>1272<SeP>1296<SeP>1469<SeP>1713<SeP>1327<SeP>1568<SeP>1669<SeP>1304<SeP>1404<SeP>1457<SeP>1587<SeP>1529<SeP>1123<SeP>1160<SeP>1909<SeP>1701<SeP>1681<SeP>1785<SeP>1814<SeP>1568<SeP>1561<SeP>1483";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:30:09<SeP>2023-07-28 21:00:18<SeP>2023-07-30 07:30:27<SeP>2023-07-31 18:00:36<SeP>2023-08-02 04:30:45<SeP>2023-08-03 15:00:54<SeP>2023-08-05 01:31:03<SeP>2023-08-06 12:01:12<SeP>2023-08-07 22:31:21<SeP>2023-08-09 09:01:30<SeP>2023-08-10 19:31:39<SeP>2023-08-12 06:01:48<SeP>2023-08-13 16:31:57<SeP>2023-08-15 03:02:06<SeP>2023-08-16 13:32:15<SeP>2023-08-18 00:02:24<SeP>2023-08-19 10:32:33<SeP>2023-08-20 21:02:42<SeP>2023-08-22 07:32:51<SeP>2023-08-23 18:03:00<SeP>2023-08-25 04:33:09<SeP>2023-08-26 15:03:18<SeP>2023-08-28 01:33:27<SeP>2023-08-29 12:03:36<SeP>2023-08-30 22:33:45<SeP>2023-09-01 09:03:54<SeP>2023-09-02 19:34:03<SeP>2023-09-04 06:04:12<SeP>2023-09-05 16:34:21<SeP>2023-09-07 03:04:30<SeP>2023-09-08 13:34:39<SeP>2023-09-10 00:04:48<SeP>2023-09-11 10:34:57<SeP>2023-09-12 21:05:06<SeP>2023-09-14 07:35:15<SeP>2023-09-15 18:05:24<SeP>2023-09-17 04:35:33<SeP>2023-09-18 15:05:42<SeP>2023-09-20 01:35:51<SeP>2023-09-21 12:06:00<SeP>2023-09-22 22:36:09<SeP>2023-09-24 09:06:18<SeP>2023-09-25 19:36:27<SeP>2023-09-27 06:06:36<SeP>2023-09-28 16:36:45<SeP>2023-09-30 03:06:54<SeP>2023-10-01 13:37:03<SeP>2023-10-03 00:07:12<SeP>2023-10-04 10:37:21<SeP>2023-10-05 21:07:30<SeP>2023-10-07 07:37:39<SeP>2023-10-08 18:07:48<SeP>2023-10-10 04:37:57<SeP>2023-10-11 15:08:06<SeP>2023-10-13 01:38:15<SeP>2023-10-14 12:08:24<SeP>2023-10-15 22:38:33<SeP>2023-10-17 09:08:42<SeP>2023-10-18 19:38:51<SeP>2023-10-20 06:09:00<SeP>2023-10-21 16:39:09<SeP>2023-10-23 03:09:18<SeP>2023-10-24 13:39:27<SeP>2023-10-26 00:09:36<SeP>2023-10-27 10:39:45<SeP>2023-10-28 21:09:54<SeP>2023-10-30 07:40:03<SeP>2023-10-31 18:10:12<SeP>2023-11-02 04:40:21<SeP>2023-11-03 15:10:30<SeP>2023-11-05 01:40:39<SeP>2023-11-06 11:10:48<SeP>2023-11-07 21:40:57<SeP>2023-11-09 08:11:06<SeP>2023-11-10 18:41:15<SeP>2023-11-12 05:11:24<SeP>2023-11-13 15:41:33<SeP>2023-11-15 02:11:42<SeP>2023-11-16 12:41:51<SeP>2023-11-17 23:12:00<SeP>2023-11-19 09:42:09<SeP>2023-11-20 20:12:18<SeP>2023-11-22 06:42:27<SeP>2023-11-23 17:12:36<SeP>2023-11-25 03:42:45<SeP>2023-11-26 14:12:54<SeP>2023-11-28 00:43:03<SeP>2023-11-29 11:13:12<SeP>2023-11-30 21:43:21<SeP>2023-12-02 08:13:30<SeP>2023-12-03 18:43:39<SeP>2023-12-05 05:13:48<SeP>2023-12-06 15:43:57<SeP>2023-12-08 02:14:06<SeP>2023-12-09 12:44:15<SeP>2023-12-10 23:14:24<SeP>2023-12-12 09:44:33<SeP>2023-12-13 20:14:42<SeP>2023-12-15 06:44:51<SeP>2023-12-16 17:15:00<SeP>2023-12-18 03:45:09<SeP>2023-12-19 14:15:18<SeP>2023-12-21 00:45:27<SeP>2023-12-22 11:15:36<SeP>2023-12-23 21:45:45<SeP>2023-12-25 08:15:54<SeP>2023-12-26 18:46:03<SeP>2023-12-28 05:16:12<SeP>2023-12-29 15:46:21<SeP>2023-12-31 02:16:30<SeP>2024-01-01 12:46:39<SeP>2024-01-02 23:16:48<SeP>2024-01-04 09:46:57<SeP>2024-01-05 20:17:06<SeP>2024-01-07 06:47:15<SeP>2024-01-08 17:17:24<SeP>2024-01-10 03:47:33<SeP>2024-01-11 14:17:42<SeP>2024-01-13 00:47:51<SeP>2024-01-14 11:18:00<SeP>2024-01-15 21:48:09<SeP>2024-01-17 08:18:18<SeP>2024-01-18 18:48:27<SeP>2024-01-20 05:18:36<SeP>2024-01-21 15:48:45<SeP>2024-01-23 02:18:54<SeP>2024-01-24 12:49:03<SeP>2024-01-25 23:19:12<SeP>2024-01-27 09:49:21<SeP>2024-01-28 20:19:30<SeP>2024-01-30 06:49:39<SeP>2024-01-31 17:19:48<SeP>2024-02-02 03:49:57<SeP>2024-02-03 14:20:06<SeP>2024-02-05 00:50:15<SeP>2024-02-06 11:20:24<SeP>2024-02-07 21:50:33<SeP>2024-02-09 08:20:42<SeP>2024-02-10 18:50:51<SeP>2024-02-12 05:21:00<SeP>2024-02-13 15:51:09<SeP>2024-02-15 02:21:18<SeP>2024-02-16 12:51:27<SeP>2024-02-17 23:21:36<SeP>2024-02-19 09:51:45<SeP>2024-02-20 20:21:54<SeP>2024-02-22 06:52:03<SeP>2024-02-23 17:22:12<SeP>2024-02-25 03:52:21<SeP>2024-02-26 14:22:30<SeP>2024-02-28 00:52:39<SeP>2024-02-29 11:22:48<SeP>2024-03-01 21:52:57<SeP>2024-03-03 08:23:06<SeP>2024-03-04 18:53:15<SeP>2024-03-06 05:23:24<SeP>2024-03-07 15:53:33<SeP>2024-03-09 02:23:42<SeP>2024-03-10 13:53:51<SeP>2024-03-12 00:24:00<SeP>2024-03-13 10:54:09<SeP>2024-03-14 21:24:18<SeP>2024-03-16 07:54:27<SeP>2024-03-17 18:24:36<SeP>2024-03-19 04:54:45<SeP>2024-03-20 15:24:54<SeP>2024-03-22 01:55:03<SeP>2024-03-23 12:25:12<SeP>2024-03-24 22:55:21<SeP>2024-03-26 09:25:30<SeP>2024-03-27 19:55:39<SeP>2024-03-29 06:25:48<SeP>2024-03-30 16:55:57<SeP>2024-04-01 03:26:06<SeP>2024-04-02 13:56:15<SeP>2024-04-04 00:26:24<SeP>2024-04-05 10:56:33<SeP>2024-04-06 21:26:42<SeP>2024-04-08 07:56:51<SeP>2024-04-09 18:27:00<SeP>2024-04-11 04:57:09<SeP>2024-04-12 15:27:18<SeP>2024-04-14 01:57:27<SeP>2024-04-15 12:27:36<SeP>2024-04-16 22:57:45<SeP>2024-04-18 09:27:54<SeP>2024-04-19 19:58:03<SeP>2024-04-21 06:28:12<SeP>2024-04-22 16:58:21<SeP>2024-04-24 03:28:30<SeP>2024-04-25 13:58:39<SeP>2024-04-27 00:28:48<SeP>2024-04-28 10:58:57<SeP>2024-04-29 21:29:06<SeP>2024-05-01 07:59:15<SeP>2024-05-02 18:29:24<SeP>2024-05-04 04:59:33<SeP>2024-05-05 15:29:42<SeP>2024-05-07 01:59:51<SeP>2024-05-08 12:30:00<SeP>2024-05-09 23:00:09<SeP>2024-05-11 09:30:18<SeP>2024-05-12 20:00:27<SeP>2024-05-14 06:30:36<SeP>2024-05-15 17:00:45<SeP>2024-05-17 03:30:54<SeP>2024-05-18 14:01:03<SeP>2024-05-20 00:31:12<SeP>2024-05-21 11:01:21<SeP>2024-05-22 21:31:30<SeP>2024-05-24 08:01:39<SeP>2024-05-25 18:31:48<SeP>2024-05-27 05:01:57<SeP>2024-05-28 15:32:06<SeP>2024-05-30 02:02:15<SeP>2024-05-31 12:32:24<SeP>2024-06-01 23:02:33<SeP>2024-06-03 09:32:42<SeP>2024-06-04 20:02:51<SeP>2024-06-06 06:33:00<SeP>2024-06-07 17:03:09<SeP>2024-06-09 03:33:18<SeP>2024-06-10 14:03:27<SeP>2024-06-12 00:33:36<SeP>2024-06-13 11:03:45<SeP>2024-06-14 21:33:54<SeP>2024-06-16 08:04:03<SeP>2024-06-17 18:34:12<SeP>2024-06-19 05:04:21<SeP>2024-06-20 15:34:30<SeP>2024-06-22 02:04:39<SeP>2024-06-23 12:34:48<SeP>2024-06-24 23:04:57<SeP>2024-06-26 09:35:06<SeP>2024-06-27 20:05:15<SeP>2024-06-29 06:35:24<SeP>2024-06-30 17:05:33<SeP>2024-07-02 03:35:42<SeP>2024-07-03 14:05:51<SeP>2024-07-05 00:36:00<SeP>2024-07-06 11:06:09<SeP>2024-07-07 21:36:18<SeP>2024-07-09 08:06:27<SeP>2024-07-10 18:36:36<SeP>2024-07-12 05:06:45<SeP>2024-07-13 15:36:54<SeP>2024-07-15 02:07:03<SeP>2024-07-16 12:37:12<SeP>2024-07-17 23:07:21<SeP>2024-07-19 09:37:30<SeP>2024-07-20 20:07:39<SeP>2024-07-22 06:37:48<SeP>2024-07-23 17:07:57<SeP>2024-07-25 03:38:06<SeP>2024-07-26 14:08:15<SeP>2024-07-28 00:38:24<SeP>2024-07-29 11:08:33<SeP>2024-07-30 21:38:42<SeP>2024-08-01 08:08:51<SeP>2024-08-02 18:39:00<SeP>2024-08-04 05:09:09<SeP>2024-08-05 15:39:18<SeP>2024-08-07 02:09:27<SeP>2024-08-08 12:39:36<SeP>2024-08-09 23:09:45<SeP>2024-08-11 09:39:54<SeP>2024-08-12 20:10:03<SeP>2024-08-14 06:40:12<SeP>2024-08-15 17:10:21<SeP>2024-08-17 03:40:30<SeP>2024-08-18 14:10:39<SeP>2024-08-20 00:40:48<SeP>2024-08-21 11:10:57<SeP>2024-08-22 21:41:06<SeP>2024-08-24 08:11:15<SeP>2024-08-25 18:41:24<SeP>2024-08-27 05:11:33<SeP>2024-08-28 15:41:42<SeP>2024-08-30 02:11:51<SeP>2024-08-31 12:42:00<SeP>2024-09-01 23:12:09<SeP>2024-09-03 09:42:18<SeP>2024-09-04 20:12:27<SeP>2024-09-06 06:42:36<SeP>2024-09-07 17:12:45<SeP>2024-09-09 03:42:54<SeP>2024-09-10 14:13:03<SeP>2024-09-12 00:43:12<SeP>2024-09-13 11:13:21<SeP>2024-09-14 21:43:30<SeP>2024-09-16 08:13:39<SeP>2024-09-17 18:43:48<SeP>2024-09-19 05:13:57<SeP>2024-09-20 15:44:06<SeP>2024-09-22 02:14:15<SeP>2024-09-23 12:44:24<SeP>2024-09-24 23:14:33<SeP>2024-09-26 09:44:42<SeP>2024-09-27 20:14:51<SeP>2024-09-29 06:45:00<SeP>2024-09-30 17:15:09<SeP>2024-10-02 03:45:18<SeP>2024-10-03 14:15:27<SeP>2024-10-05 00:45:36<SeP>2024-10-06 11:15:45<SeP>2024-10-07 21:45:54<SeP>2024-10-09 08:16:03<SeP>2024-10-10 18:46:12<SeP>2024-10-12 05:16:21<SeP>2024-10-13 15:46:30<SeP>2024-10-15 02:16:39<SeP>2024-10-16 12:46:48<SeP>2024-10-17 23:16:57<SeP>2024-10-19 09:47:06<SeP>2024-10-20 20:17:15<SeP>2024-10-22 06:47:24<SeP>2024-10-23 17:17:33<SeP>2024-10-25 03:47:42<SeP>2024-10-26 14:17:51<SeP>2024-10-28 00:48:00<SeP>2024-10-29 11:18:09<SeP>2024-10-30 21:48:18<SeP>2024-11-01 08:18:27<SeP>2024-11-02 18:48:36<SeP>2024-11-04 04:18:45<SeP>2024-11-05 14:48:54<SeP>2024-11-07 01:19:03<SeP>2024-11-08 11:49:12<SeP>2024-11-09 22:19:21<SeP>2024-11-11 08:49:30<SeP>2024-11-12 19:19:39<SeP>2024-11-14 05:49:48<SeP>2024-11-15 16:19:57<SeP>2024-11-17 02:50:06<SeP>2024-11-18 13:20:15<SeP>2024-11-19 23:50:24<SeP>2024-11-21 10:20:33<SeP>2024-11-22 20:50:42<SeP>2024-11-24 07:20:51<SeP>2024-11-25 17:51:00<SeP>2024-11-27 04:21:09<SeP>2024-11-28 14:51:18<SeP>2024-11-30 01:21:27<SeP>2024-12-01 11:51:36<SeP>2024-12-02 22:21:45<SeP>2024-12-04 08:51:54<SeP>2024-12-05 19:22:03<SeP>2024-12-07 05:52:12<SeP>2024-12-08 16:22:21<SeP>2024-12-10 02:52:30<SeP>2024-12-11 13:22:39<SeP>2024-12-12 23:52:48<SeP>2024-12-14 10:22:57<SeP>2024-12-15 20:53:06<SeP>2024-12-17 07:23:15<SeP>2024-12-18 17:53:24<SeP>2024-12-20 04:23:33<SeP>2024-12-21 14:53:42<SeP>2024-12-23 01:23:51<SeP>2024-12-24 11:54:00<SeP>2024-12-25 22:24:09<SeP>2024-12-27 08:54:18<SeP>2024-12-28 19:24:27<SeP>2024-12-30 05:54:36<SeP>2024-12-31 16:24:45<SeP>2025-01-02 02:54:54<SeP>2025-01-03 13:25:03<SeP>2025-01-04 23:55:12<SeP>2025-01-06 10:25:21<SeP>2025-01-07 20:55:30<SeP>2025-01-09 07:25:39<SeP>2025-01-10 17:55:48<SeP>2025-01-12 04:25:57<SeP>2025-01-13 14:56:06<SeP>2025-01-15 01:26:15<SeP>2025-01-16 11:56:24<SeP>2025-01-17 22:26:33<SeP>2025-01-19 08:56:42<SeP>2025-01-20 19:26:51<SeP>2025-01-22 05:57:00<SeP>2025-01-23 16:27:09<SeP>2025-01-25 02:57:18<SeP>2025-01-26 13:27:27<SeP>2025-01-27 23:57:36<SeP>2025-01-29 10:27:45<SeP>2025-01-30 20:57:54<SeP>2025-02-01 07:28:03<SeP>2025-02-02 17:58:12<SeP>2025-02-04 04:28:21<SeP>2025-02-05 14:58:30<SeP>2025-02-07 01:28:39<SeP>2025-02-08 11:58:48<SeP>2025-02-09 22:28:57<SeP>2025-02-11 08:59:06<SeP>2025-02-12 19:29:15<SeP>2025-02-14 05:59:24<SeP>2025-02-15 16:29:33<SeP>2025-02-17 02:59:42<SeP>2025-02-18 13:29:51";
  const itemLabel       = "Ataques";
  const itemData        = "152<SeP>613<SeP>966<SeP>716<SeP>546<SeP>211<SeP>6960<SeP>498<SeP>9205<SeP>976<SeP>283<SeP>1234<SeP>790<SeP>725<SeP>143<SeP>442<SeP>148<SeP>364<SeP>670<SeP>3333<SeP>6689<SeP>8017<SeP>6554<SeP>8664<SeP>403<SeP>306<SeP>401<SeP>173<SeP>373<SeP>5930<SeP>78<SeP>387<SeP>152<SeP>506<SeP>334<SeP>9250<SeP>9122<SeP>10163<SeP>9471<SeP>6644<SeP>5132<SeP>8673<SeP>7132<SeP>8817<SeP>8695<SeP>7213<SeP>8282<SeP>8723<SeP>8301<SeP>8309<SeP>5857<SeP>6103<SeP>11260<SeP>7281<SeP>7690<SeP>7107<SeP>9724<SeP>11302<SeP>20467<SeP>12079<SeP>8584<SeP>10344<SeP>6529<SeP>8315<SeP>8540<SeP>8417<SeP>8725<SeP>5581<SeP>7127<SeP>7234<SeP>5850<SeP>3217<SeP>6180<SeP>5468<SeP>6295<SeP>5971<SeP>8628<SeP>3375<SeP>6060<SeP>5414<SeP>6330<SeP>4836<SeP>7128<SeP>4601<SeP>5775<SeP>6414<SeP>5795<SeP>5837<SeP>5187<SeP>10108<SeP>20597<SeP>35989<SeP>7121<SeP>9242<SeP>5623<SeP>7109<SeP>11998<SeP>6780<SeP>3986<SeP>5642<SeP>4607<SeP>4126<SeP>6934<SeP>6509<SeP>6860<SeP>6886<SeP>5705<SeP>4024<SeP>6673<SeP>8458<SeP>8123<SeP>8303<SeP>4084<SeP>6448<SeP>9418<SeP>8524<SeP>4608<SeP>3095<SeP>6407<SeP>9121<SeP>5166<SeP>7055<SeP>9598<SeP>4322<SeP>2186<SeP>1559<SeP>1726<SeP>2012<SeP>2298<SeP>1050<SeP>739<SeP>1143<SeP>1305<SeP>1656<SeP>604<SeP>1283<SeP>1094<SeP>1025<SeP>870<SeP>1057<SeP>1488<SeP>1240<SeP>1092<SeP>1681<SeP>2055<SeP>4220<SeP>11362<SeP>8251<SeP>7130<SeP>7653<SeP>6044<SeP>9649<SeP>8774<SeP>9785<SeP>8643<SeP>13728<SeP>8210<SeP>9910<SeP>10011<SeP>13706<SeP>8936<SeP>8796<SeP>3986<SeP>6650<SeP>8985<SeP>23209<SeP>6286<SeP>8037<SeP>10473<SeP>16677<SeP>6954<SeP>6770<SeP>6906<SeP>5938<SeP>14502<SeP>19417<SeP>7567<SeP>10245<SeP>6066<SeP>6926<SeP>5537<SeP>6184<SeP>14885<SeP>5921<SeP>13444<SeP>8272<SeP>6350<SeP>7944<SeP>5719<SeP>4187<SeP>5952<SeP>7841<SeP>4773<SeP>7064<SeP>6777<SeP>5510<SeP>20909<SeP>6820<SeP>6009<SeP>6225<SeP>8109<SeP>10322<SeP>6294<SeP>4976<SeP>3890<SeP>6777<SeP>3100<SeP>4852<SeP>4107<SeP>658<SeP>122<SeP>633<SeP>190<SeP>564<SeP>1092<SeP>328<SeP>461<SeP>886<SeP>1554<SeP>3179<SeP>1014<SeP>22505<SeP>1331<SeP>4701<SeP>3035<SeP>3427<SeP>6471<SeP>2607<SeP>4206<SeP>3592<SeP>2837<SeP>2989<SeP>3091<SeP>4686<SeP>1752<SeP>2921<SeP>2598<SeP>1983<SeP>1927<SeP>2069<SeP>1204<SeP>1802<SeP>900<SeP>867<SeP>1841<SeP>11288<SeP>16658<SeP>2088<SeP>4116<SeP>3483<SeP>2050<SeP>4203<SeP>2025<SeP>2270<SeP>3423<SeP>2745<SeP>3448<SeP>2016<SeP>2993<SeP>3493<SeP>5015<SeP>4748<SeP>4875<SeP>4683<SeP>2667<SeP>2169<SeP>4968<SeP>3362<SeP>9928<SeP>5390<SeP>3222<SeP>2449<SeP>2865<SeP>4017<SeP>3950<SeP>3106<SeP>3339<SeP>2444<SeP>4950<SeP>4715<SeP>2891<SeP>6151<SeP>4145<SeP>6141<SeP>4531<SeP>5377<SeP>5011<SeP>22112<SeP>5614<SeP>10667<SeP>1731<SeP>2968<SeP>4132<SeP>3645<SeP>5053<SeP>3083<SeP>5253<SeP>4498<SeP>4488<SeP>3436<SeP>3907<SeP>2202<SeP>1332<SeP>1893<SeP>3762<SeP>2178<SeP>2768<SeP>3784<SeP>4172<SeP>3803<SeP>3236<SeP>4287<SeP>3417<SeP>3094<SeP>3963<SeP>7933<SeP>6295<SeP>5376<SeP>4673<SeP>5080<SeP>3934<SeP>3586<SeP>4476<SeP>4006<SeP>6178<SeP>4686<SeP>5404<SeP>1994<SeP>749<SeP>1489<SeP>1478<SeP>1221<SeP>1228<SeP>1693<SeP>1555<SeP>1421<SeP>3338<SeP>4557<SeP>6195<SeP>34247<SeP>4494<SeP>5199<SeP>17447<SeP>11037<SeP>5293<SeP>6057<SeP>4706<SeP>22385<SeP>6346<SeP>5237<SeP>4453<SeP>4732<SeP>6265<SeP>19359<SeP>15743<SeP>4186<SeP>3122<SeP>4467<SeP>5197<SeP>5538<SeP>2878<SeP>3193<SeP>4139<SeP>5104<SeP>4950<SeP>4100<SeP>18059<SeP>5806<SeP>6674<SeP>3444<SeP>2297<SeP>3396<SeP>4390<SeP>4044<SeP>3851<SeP>2841<SeP>3649<SeP>2503<SeP>4122<SeP>3892<SeP>7096<SeP>9450<SeP>9054<SeP>8537<SeP>8708<SeP>7311<SeP>6699<SeP>5067<SeP>4685<SeP>8258<SeP>21093<SeP>3241<SeP>4243<SeP>3163<SeP>11330<SeP>5054<SeP>4436<SeP>4095<SeP>4494<SeP>3448";
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
  const itemData    = "687257<SeP>357923<SeP>205171<SeP>177986<SeP>107631<SeP>86850<SeP>81998<SeP>79544<SeP>67533<SeP>65012";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "292167<SeP>41412<SeP>39706<SeP>34689<SeP>14270<SeP>10467<SeP>7340<SeP>7147<SeP>6924<SeP>6772";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Attacks";
  const itemData    = "395090<SeP>323234<SeP>202472<SeP>138280<SeP>93361<SeP>80078<SeP>79417<SeP>69077<SeP>57865<SeP>56122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "359647<SeP>259475<SeP>233050<SeP>143805<SeP>66221<SeP>57095<SeP>55555<SeP>45054<SeP>41609<SeP>35438";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "153447<SeP>52495<SeP>40489<SeP>31821<SeP>21867<SeP>12562<SeP>10623<SeP>9258<SeP>7614<SeP>7391";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "347085<SeP>258713<SeP>121938<SeP>79603<SeP>54604<SeP>46472<SeP>39533<SeP>30467<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Hong Kong";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "687257<SeP>357923<SeP>205171<SeP>177986<SeP>107631<SeP>86850<SeP>81998<SeP>79544<SeP>67533<SeP>65012";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "292167<SeP>41412<SeP>39706<SeP>34689<SeP>14270<SeP>10467<SeP>7340<SeP>7147<SeP>6924<SeP>6772";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Ataques";
  const itemData    = "395090<SeP>323234<SeP>202472<SeP>138280<SeP>93361<SeP>80078<SeP>79417<SeP>69077<SeP>57865<SeP>56122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "359647<SeP>259475<SeP>233050<SeP>143805<SeP>66221<SeP>57095<SeP>55555<SeP>45054<SeP>41609<SeP>35438";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "153447<SeP>52495<SeP>40489<SeP>31821<SeP>21867<SeP>12562<SeP>10623<SeP>9258<SeP>7614<SeP>7391";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "347085<SeP>258713<SeP>121938<SeP>79603<SeP>54604<SeP>46472<SeP>39533<SeP>30467<SeP>29324<SeP>26846";
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
