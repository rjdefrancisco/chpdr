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
  document.getElementById("last-updated").innerHTML = "2025-2-26";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "34.9";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.9";
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
  const metricData    = "2819416";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "545425";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2273991";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "138670";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1428665";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "845326";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53650";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "247298";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "598028";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42968";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2819416";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "545425";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2273991";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "138670";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1428665";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "845326";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53650";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "247298";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "598028";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42968";
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
  const incomingData = "2819416<SeP>545425<SeP>2273991<SeP>138670";
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
  const incomingData = "2273991<SeP>1428665<SeP>845326<SeP>53650";
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
  const incomingData = "845326<SeP>247298<SeP>598028<SeP>42968";
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
  const incomingData = "2557653<SeP>254862<SeP>2302791";
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
  const incomingData = "388192<SeP>146<SeP>388046<SeP>226";
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
  const incomingData = "2819416<SeP>545425<SeP>2273991<SeP>138670";
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
  const incomingData = "2273991<SeP>1428665<SeP>845326<SeP>53650";
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
  const incomingData = "845326<SeP>247298<SeP>598028<SeP>42968";
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
  const incomingData = "2557653<SeP>254862<SeP>2302791";
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
  const incomingData = "388192<SeP>146<SeP>388046<SeP>226";
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
  const column3Data   = "218971<SeP>200521<SeP>12451<SeP>12294<SeP>9716<SeP>9419<SeP>6443<SeP>5593<SeP>4624<SeP>3475";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4";
  const column2Data  = "210247<SeP>43044<SeP>485<SeP>447<SeP>428<SeP>376<SeP>340<SeP>281<SeP>245<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>redir<SeP>download<SeP>download<SeP>upload";
  const column4Data  = "malicious<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>NA<SeP>harmless<SeP>harmless<SeP>NA";
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
  const column2Data  = "2390178<SeP>429238";
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
  const column3Data   = "218971<SeP>200521<SeP>12451<SeP>12294<SeP>9716<SeP>9419<SeP>6443<SeP>5593<SeP>4624<SeP>3475";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4";
  const column2Data  = "210247<SeP>43044<SeP>485<SeP>447<SeP>428<SeP>376<SeP>340<SeP>281<SeP>245<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>redir<SeP>download<SeP>download<SeP>upload";
  let   column4Data  = "malicious<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>NA<SeP>harmless<SeP>harmless<SeP>NA";
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
  const column2Data  = "2390178<SeP>429238";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-26";

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
        "name": "traffic between 2023-07-26 and 2025-02-24"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          390845,50
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
        "name": "scans between 2023-07-26 and 2025-02-24"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225019,30,
          390845,50
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
        "name": "attacks between 2023-07-26 and 2025-02-24"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165826,23,
          390845,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-26";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-24"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          390845,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-24"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225019,30,
          390845,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-24"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165826,23,
          390845,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:51:45<SeP>2023-07-28 21:43:30<SeP>2023-07-30 08:35:15<SeP>2023-07-31 19:27:00<SeP>2023-08-02 06:18:45<SeP>2023-08-03 17:10:30<SeP>2023-08-05 04:02:15<SeP>2023-08-06 14:54:00<SeP>2023-08-08 01:45:45<SeP>2023-08-09 12:37:30<SeP>2023-08-10 23:29:15<SeP>2023-08-12 10:21:00<SeP>2023-08-13 21:12:45<SeP>2023-08-15 08:04:30<SeP>2023-08-16 18:56:15<SeP>2023-08-18 05:48:00<SeP>2023-08-19 16:39:45<SeP>2023-08-21 03:31:30<SeP>2023-08-22 14:23:15<SeP>2023-08-24 01:15:00<SeP>2023-08-25 12:06:45<SeP>2023-08-26 22:58:30<SeP>2023-08-28 09:50:15<SeP>2023-08-29 20:42:00<SeP>2023-08-31 07:33:45<SeP>2023-09-01 18:25:30<SeP>2023-09-03 05:17:15<SeP>2023-09-04 16:09:00<SeP>2023-09-06 03:00:45<SeP>2023-09-07 13:52:30<SeP>2023-09-09 00:44:15<SeP>2023-09-10 11:36:00<SeP>2023-09-11 22:27:45<SeP>2023-09-13 09:19:30<SeP>2023-09-14 20:11:15<SeP>2023-09-16 07:03:00<SeP>2023-09-17 17:54:45<SeP>2023-09-19 04:46:30<SeP>2023-09-20 15:38:15<SeP>2023-09-22 02:30:00<SeP>2023-09-23 13:21:45<SeP>2023-09-25 00:13:30<SeP>2023-09-26 11:05:15<SeP>2023-09-27 21:57:00<SeP>2023-09-29 08:48:45<SeP>2023-09-30 19:40:30<SeP>2023-10-02 06:32:15<SeP>2023-10-03 17:24:00<SeP>2023-10-05 04:15:45<SeP>2023-10-06 15:07:30<SeP>2023-10-08 01:59:15<SeP>2023-10-09 12:51:00<SeP>2023-10-10 23:42:45<SeP>2023-10-12 10:34:30<SeP>2023-10-13 21:26:15<SeP>2023-10-15 08:18:00<SeP>2023-10-16 19:09:45<SeP>2023-10-18 06:01:30<SeP>2023-10-19 16:53:15<SeP>2023-10-21 03:45:00<SeP>2023-10-22 14:36:45<SeP>2023-10-24 01:28:30<SeP>2023-10-25 12:20:15<SeP>2023-10-26 23:12:00<SeP>2023-10-28 10:03:45<SeP>2023-10-29 20:55:30<SeP>2023-10-31 07:47:15<SeP>2023-11-01 18:39:00<SeP>2023-11-03 05:30:45<SeP>2023-11-04 16:22:30<SeP>2023-11-06 02:14:15<SeP>2023-11-07 13:06:00<SeP>2023-11-08 23:57:45<SeP>2023-11-10 10:49:30<SeP>2023-11-11 21:41:15<SeP>2023-11-13 08:33:00<SeP>2023-11-14 19:24:45<SeP>2023-11-16 06:16:30<SeP>2023-11-17 17:08:15<SeP>2023-11-19 04:00:00<SeP>2023-11-20 14:51:45<SeP>2023-11-22 01:43:30<SeP>2023-11-23 12:35:15<SeP>2023-11-24 23:27:00<SeP>2023-11-26 10:18:45<SeP>2023-11-27 21:10:30<SeP>2023-11-29 08:02:15<SeP>2023-11-30 18:54:00<SeP>2023-12-02 05:45:45<SeP>2023-12-03 16:37:30<SeP>2023-12-05 03:29:15<SeP>2023-12-06 14:21:00<SeP>2023-12-08 01:12:45<SeP>2023-12-09 12:04:30<SeP>2023-12-10 22:56:15<SeP>2023-12-12 09:48:00<SeP>2023-12-13 20:39:45<SeP>2023-12-15 07:31:30<SeP>2023-12-16 18:23:15<SeP>2023-12-18 05:15:00<SeP>2023-12-19 16:06:45<SeP>2023-12-21 02:58:30<SeP>2023-12-22 13:50:15<SeP>2023-12-24 00:42:00<SeP>2023-12-25 11:33:45<SeP>2023-12-26 22:25:30<SeP>2023-12-28 09:17:15<SeP>2023-12-29 20:09:00<SeP>2023-12-31 07:00:45<SeP>2024-01-01 17:52:30<SeP>2024-01-03 04:44:15<SeP>2024-01-04 15:36:00<SeP>2024-01-06 02:27:45<SeP>2024-01-07 13:19:30<SeP>2024-01-09 00:11:15<SeP>2024-01-10 11:03:00<SeP>2024-01-11 21:54:45<SeP>2024-01-13 08:46:30<SeP>2024-01-14 19:38:15<SeP>2024-01-16 06:30:00<SeP>2024-01-17 17:21:45<SeP>2024-01-19 04:13:30<SeP>2024-01-20 15:05:15<SeP>2024-01-22 01:57:00<SeP>2024-01-23 12:48:45<SeP>2024-01-24 23:40:30<SeP>2024-01-26 10:32:15<SeP>2024-01-27 21:24:00<SeP>2024-01-29 08:15:45<SeP>2024-01-30 19:07:30<SeP>2024-02-01 05:59:15<SeP>2024-02-02 16:51:00<SeP>2024-02-04 03:42:45<SeP>2024-02-05 14:34:30<SeP>2024-02-07 01:26:15<SeP>2024-02-08 12:18:00<SeP>2024-02-09 23:09:45<SeP>2024-02-11 10:01:30<SeP>2024-02-12 20:53:15<SeP>2024-02-14 07:45:00<SeP>2024-02-15 18:36:45<SeP>2024-02-17 05:28:30<SeP>2024-02-18 16:20:15<SeP>2024-02-20 03:12:00<SeP>2024-02-21 14:03:45<SeP>2024-02-23 00:55:30<SeP>2024-02-24 11:47:15<SeP>2024-02-25 22:39:00<SeP>2024-02-27 09:30:45<SeP>2024-02-28 20:22:30<SeP>2024-03-01 07:14:15<SeP>2024-03-02 18:06:00<SeP>2024-03-04 04:57:45<SeP>2024-03-05 15:49:30<SeP>2024-03-07 02:41:15<SeP>2024-03-08 13:33:00<SeP>2024-03-10 00:24:45<SeP>2024-03-11 12:16:30<SeP>2024-03-12 23:08:15<SeP>2024-03-14 10:00:00<SeP>2024-03-15 20:51:45<SeP>2024-03-17 07:43:30<SeP>2024-03-18 18:35:15<SeP>2024-03-20 05:27:00<SeP>2024-03-21 16:18:45<SeP>2024-03-23 03:10:30<SeP>2024-03-24 14:02:15<SeP>2024-03-26 00:54:00<SeP>2024-03-27 11:45:45<SeP>2024-03-28 22:37:30<SeP>2024-03-30 09:29:15<SeP>2024-03-31 20:21:00<SeP>2024-04-02 07:12:45<SeP>2024-04-03 18:04:30<SeP>2024-04-05 04:56:15<SeP>2024-04-06 15:48:00<SeP>2024-04-08 02:39:45<SeP>2024-04-09 13:31:30<SeP>2024-04-11 00:23:15<SeP>2024-04-12 11:15:00<SeP>2024-04-13 22:06:45<SeP>2024-04-15 08:58:30<SeP>2024-04-16 19:50:15<SeP>2024-04-18 06:42:00<SeP>2024-04-19 17:33:45<SeP>2024-04-21 04:25:30<SeP>2024-04-22 15:17:15<SeP>2024-04-24 02:09:00<SeP>2024-04-25 13:00:45<SeP>2024-04-26 23:52:30<SeP>2024-04-28 10:44:15<SeP>2024-04-29 21:36:00<SeP>2024-05-01 08:27:45<SeP>2024-05-02 19:19:30<SeP>2024-05-04 06:11:15<SeP>2024-05-05 17:03:00<SeP>2024-05-07 03:54:45<SeP>2024-05-08 14:46:30<SeP>2024-05-10 01:38:15<SeP>2024-05-11 12:30:00<SeP>2024-05-12 23:21:45<SeP>2024-05-14 10:13:30<SeP>2024-05-15 21:05:15<SeP>2024-05-17 07:57:00<SeP>2024-05-18 18:48:45<SeP>2024-05-20 05:40:30<SeP>2024-05-21 16:32:15<SeP>2024-05-23 03:24:00<SeP>2024-05-24 14:15:45<SeP>2024-05-26 01:07:30<SeP>2024-05-27 11:59:15<SeP>2024-05-28 22:51:00<SeP>2024-05-30 09:42:45<SeP>2024-05-31 20:34:30<SeP>2024-06-02 07:26:15<SeP>2024-06-03 18:18:00<SeP>2024-06-05 05:09:45<SeP>2024-06-06 16:01:30<SeP>2024-06-08 02:53:15<SeP>2024-06-09 13:45:00<SeP>2024-06-11 00:36:45<SeP>2024-06-12 11:28:30<SeP>2024-06-13 22:20:15<SeP>2024-06-15 09:12:00<SeP>2024-06-16 20:03:45<SeP>2024-06-18 06:55:30<SeP>2024-06-19 17:47:15<SeP>2024-06-21 04:39:00<SeP>2024-06-22 15:30:45<SeP>2024-06-24 02:22:30<SeP>2024-06-25 13:14:15<SeP>2024-06-27 00:06:00<SeP>2024-06-28 10:57:45<SeP>2024-06-29 21:49:30<SeP>2024-07-01 08:41:15<SeP>2024-07-02 19:33:00<SeP>2024-07-04 06:24:45<SeP>2024-07-05 17:16:30<SeP>2024-07-07 04:08:15<SeP>2024-07-08 15:00:00<SeP>2024-07-10 01:51:45<SeP>2024-07-11 12:43:30<SeP>2024-07-12 23:35:15<SeP>2024-07-14 10:27:00<SeP>2024-07-15 21:18:45<SeP>2024-07-17 08:10:30<SeP>2024-07-18 19:02:15<SeP>2024-07-20 05:54:00<SeP>2024-07-21 16:45:45<SeP>2024-07-23 03:37:30<SeP>2024-07-24 14:29:15<SeP>2024-07-26 01:21:00<SeP>2024-07-27 12:12:45<SeP>2024-07-28 23:04:30<SeP>2024-07-30 09:56:15<SeP>2024-07-31 20:48:00<SeP>2024-08-02 07:39:45<SeP>2024-08-03 18:31:30<SeP>2024-08-05 05:23:15<SeP>2024-08-06 16:15:00<SeP>2024-08-08 03:06:45<SeP>2024-08-09 13:58:30<SeP>2024-08-11 00:50:15<SeP>2024-08-12 11:42:00<SeP>2024-08-13 22:33:45<SeP>2024-08-15 09:25:30<SeP>2024-08-16 20:17:15<SeP>2024-08-18 07:09:00<SeP>2024-08-19 18:00:45<SeP>2024-08-21 04:52:30<SeP>2024-08-22 15:44:15<SeP>2024-08-24 02:36:00<SeP>2024-08-25 13:27:45<SeP>2024-08-27 00:19:30<SeP>2024-08-28 11:11:15<SeP>2024-08-29 22:03:00<SeP>2024-08-31 08:54:45<SeP>2024-09-01 19:46:30<SeP>2024-09-03 06:38:15<SeP>2024-09-04 17:30:00<SeP>2024-09-06 04:21:45<SeP>2024-09-07 15:13:30<SeP>2024-09-09 02:05:15<SeP>2024-09-10 12:57:00<SeP>2024-09-11 23:48:45<SeP>2024-09-13 10:40:30<SeP>2024-09-14 21:32:15<SeP>2024-09-16 08:24:00<SeP>2024-09-17 19:15:45<SeP>2024-09-19 06:07:30<SeP>2024-09-20 16:59:15<SeP>2024-09-22 03:51:00<SeP>2024-09-23 14:42:45<SeP>2024-09-25 01:34:30<SeP>2024-09-26 12:26:15<SeP>2024-09-27 23:18:00<SeP>2024-09-29 10:09:45<SeP>2024-09-30 21:01:30<SeP>2024-10-02 07:53:15<SeP>2024-10-03 18:45:00<SeP>2024-10-05 05:36:45<SeP>2024-10-06 16:28:30<SeP>2024-10-08 03:20:15<SeP>2024-10-09 14:12:00<SeP>2024-10-11 01:03:45<SeP>2024-10-12 11:55:30<SeP>2024-10-13 22:47:15<SeP>2024-10-15 09:39:00<SeP>2024-10-16 20:30:45<SeP>2024-10-18 07:22:30<SeP>2024-10-19 18:14:15<SeP>2024-10-21 05:06:00<SeP>2024-10-22 15:57:45<SeP>2024-10-24 02:49:30<SeP>2024-10-25 13:41:15<SeP>2024-10-27 00:33:00<SeP>2024-10-28 11:24:45<SeP>2024-10-29 22:16:30<SeP>2024-10-31 09:08:15<SeP>2024-11-01 20:00:00<SeP>2024-11-03 05:51:45<SeP>2024-11-04 16:43:30<SeP>2024-11-06 03:35:15<SeP>2024-11-07 14:27:00<SeP>2024-11-09 01:18:45<SeP>2024-11-10 12:10:30<SeP>2024-11-11 23:02:15<SeP>2024-11-13 09:54:00<SeP>2024-11-14 20:45:45<SeP>2024-11-16 07:37:30<SeP>2024-11-17 18:29:15<SeP>2024-11-19 05:21:00<SeP>2024-11-20 16:12:45<SeP>2024-11-22 03:04:30<SeP>2024-11-23 13:56:15<SeP>2024-11-25 00:48:00<SeP>2024-11-26 11:39:45<SeP>2024-11-27 22:31:30<SeP>2024-11-29 09:23:15<SeP>2024-11-30 20:15:00<SeP>2024-12-02 07:06:45<SeP>2024-12-03 17:58:30<SeP>2024-12-05 04:50:15<SeP>2024-12-06 15:42:00<SeP>2024-12-08 02:33:45<SeP>2024-12-09 13:25:30<SeP>2024-12-11 00:17:15<SeP>2024-12-12 11:09:00<SeP>2024-12-13 22:00:45<SeP>2024-12-15 08:52:30<SeP>2024-12-16 19:44:15<SeP>2024-12-18 06:36:00<SeP>2024-12-19 17:27:45<SeP>2024-12-21 04:19:30<SeP>2024-12-22 15:11:15<SeP>2024-12-24 02:03:00<SeP>2024-12-25 12:54:45<SeP>2024-12-26 23:46:30<SeP>2024-12-28 10:38:15<SeP>2024-12-29 21:30:00<SeP>2024-12-31 08:21:45<SeP>2025-01-01 19:13:30<SeP>2025-01-03 06:05:15<SeP>2025-01-04 16:57:00<SeP>2025-01-06 03:48:45<SeP>2025-01-07 14:40:30<SeP>2025-01-09 01:32:15<SeP>2025-01-10 12:24:00<SeP>2025-01-11 23:15:45<SeP>2025-01-13 10:07:30<SeP>2025-01-14 20:59:15<SeP>2025-01-16 07:51:00<SeP>2025-01-17 18:42:45<SeP>2025-01-19 05:34:30<SeP>2025-01-20 16:26:15<SeP>2025-01-22 03:18:00<SeP>2025-01-23 14:09:45<SeP>2025-01-25 01:01:30<SeP>2025-01-26 11:53:15<SeP>2025-01-27 22:45:00<SeP>2025-01-29 09:36:45<SeP>2025-01-30 20:28:30<SeP>2025-02-01 07:20:15<SeP>2025-02-02 18:12:00<SeP>2025-02-04 05:03:45<SeP>2025-02-05 15:55:30<SeP>2025-02-07 02:47:15<SeP>2025-02-08 13:39:00<SeP>2025-02-10 00:30:45<SeP>2025-02-11 11:22:30<SeP>2025-02-12 22:14:15<SeP>2025-02-14 09:06:00<SeP>2025-02-15 19:57:45<SeP>2025-02-17 06:49:30<SeP>2025-02-18 17:41:15<SeP>2025-02-20 04:33:00<SeP>2025-02-21 15:24:45<SeP>2025-02-23 02:16:30<SeP>2025-02-24 13:08:15";
  const item1Label       = "Scans";
  const item1Data        = "762<SeP>1477<SeP>1378<SeP>1444<SeP>1256<SeP>1690<SeP>959<SeP>948<SeP>1184<SeP>3347<SeP>1920<SeP>2373<SeP>2373<SeP>1935<SeP>743<SeP>912<SeP>1399<SeP>2509<SeP>1410<SeP>1807<SeP>1336<SeP>913<SeP>902<SeP>1410<SeP>814<SeP>952<SeP>811<SeP>1828<SeP>2651<SeP>921<SeP>844<SeP>1405<SeP>1257<SeP>828<SeP>2887<SeP>1672<SeP>2607<SeP>1818<SeP>1807<SeP>1407<SeP>1259<SeP>1768<SeP>1753<SeP>2161<SeP>1586<SeP>1602<SeP>1645<SeP>1706<SeP>1683<SeP>1715<SeP>1962<SeP>1655<SeP>1612<SeP>2793<SeP>2115<SeP>1400<SeP>1725<SeP>1995<SeP>2319<SeP>1475<SeP>2732<SeP>2494<SeP>1429<SeP>1494<SeP>1404<SeP>1663<SeP>1715<SeP>1570<SeP>1185<SeP>1421<SeP>1175<SeP>2378<SeP>1209<SeP>1137<SeP>1248<SeP>2349<SeP>7208<SeP>1118<SeP>1316<SeP>1397<SeP>1620<SeP>1963<SeP>1076<SeP>6717<SeP>1513<SeP>1625<SeP>890<SeP>1807<SeP>2693<SeP>1206<SeP>973<SeP>1033<SeP>1156<SeP>1682<SeP>2300<SeP>1028<SeP>1589<SeP>2987<SeP>6331<SeP>1274<SeP>958<SeP>960<SeP>893<SeP>948<SeP>967<SeP>1009<SeP>1018<SeP>4274<SeP>1865<SeP>1371<SeP>1501<SeP>573<SeP>1060<SeP>1578<SeP>1135<SeP>999<SeP>985<SeP>2293<SeP>1311<SeP>1008<SeP>973<SeP>1082<SeP>788<SeP>849<SeP>867<SeP>814<SeP>874<SeP>1041<SeP>790<SeP>809<SeP>849<SeP>988<SeP>788<SeP>678<SeP>907<SeP>836<SeP>822<SeP>916<SeP>833<SeP>824<SeP>731<SeP>812<SeP>1093<SeP>776<SeP>844<SeP>963<SeP>864<SeP>1129<SeP>972<SeP>758<SeP>520<SeP>929<SeP>835<SeP>1262<SeP>869<SeP>974<SeP>1229<SeP>1258<SeP>855<SeP>965<SeP>846<SeP>961<SeP>729<SeP>1077<SeP>983<SeP>934<SeP>899<SeP>956<SeP>1014<SeP>1073<SeP>998<SeP>950<SeP>1097<SeP>901<SeP>873<SeP>1713<SeP>1607<SeP>1254<SeP>979<SeP>1040<SeP>1185<SeP>986<SeP>952<SeP>718<SeP>719<SeP>994<SeP>1075<SeP>856<SeP>998<SeP>1243<SeP>1168<SeP>1141<SeP>1274<SeP>1053<SeP>1372<SeP>1111<SeP>1486<SeP>1202<SeP>1520<SeP>2076<SeP>1309<SeP>809<SeP>944<SeP>1080<SeP>1024<SeP>794<SeP>705<SeP>866<SeP>952<SeP>831<SeP>4229<SeP>4216<SeP>1978<SeP>1488<SeP>1132<SeP>845<SeP>1047<SeP>915<SeP>940<SeP>1048<SeP>1048<SeP>1000<SeP>1035<SeP>2214<SeP>1255<SeP>1112<SeP>1176<SeP>1339<SeP>1130<SeP>1082<SeP>911<SeP>1097<SeP>1105<SeP>1054<SeP>1049<SeP>1143<SeP>1098<SeP>977<SeP>925<SeP>1271<SeP>1127<SeP>1122<SeP>1207<SeP>1349<SeP>1137<SeP>1639<SeP>1148<SeP>1123<SeP>1232<SeP>1052<SeP>1980<SeP>1198<SeP>1711<SeP>1771<SeP>1438<SeP>1994<SeP>1629<SeP>1211<SeP>1194<SeP>1235<SeP>1186<SeP>1454<SeP>1327<SeP>1260<SeP>1355<SeP>1855<SeP>1435<SeP>1443<SeP>1292<SeP>1493<SeP>1209<SeP>1042<SeP>1280<SeP>1117<SeP>1147<SeP>1253<SeP>1355<SeP>1095<SeP>1610<SeP>1698<SeP>1265<SeP>1501<SeP>1596<SeP>1292<SeP>981<SeP>972<SeP>1006<SeP>994<SeP>816<SeP>991<SeP>1741<SeP>1188<SeP>1040<SeP>1119<SeP>958<SeP>768<SeP>1106<SeP>1369<SeP>799<SeP>968<SeP>890<SeP>1292<SeP>1514<SeP>1538<SeP>1110<SeP>1125<SeP>908<SeP>1740<SeP>1208<SeP>1066<SeP>1136<SeP>903<SeP>1642<SeP>978<SeP>955<SeP>1208<SeP>1074<SeP>830<SeP>907<SeP>1129<SeP>1391<SeP>1561<SeP>1457<SeP>1378<SeP>1277<SeP>904<SeP>1175<SeP>1175<SeP>1202<SeP>1094<SeP>985<SeP>1071<SeP>1176<SeP>1319<SeP>1488<SeP>1268<SeP>1541<SeP>1353<SeP>1598<SeP>1360<SeP>1307<SeP>1462<SeP>1443<SeP>1387<SeP>1245<SeP>1702<SeP>1391<SeP>1610<SeP>1417<SeP>1346<SeP>1404<SeP>1255<SeP>1279<SeP>1376<SeP>1403<SeP>1625<SeP>1240<SeP>1289<SeP>1276<SeP>1326<SeP>1312<SeP>1076<SeP>1523<SeP>1887<SeP>1647<SeP>1180<SeP>580<SeP>1491<SeP>1871<SeP>1220<SeP>1367<SeP>1189<SeP>1142<SeP>1325<SeP>1390<SeP>1225<SeP>1554<SeP>1730<SeP>1360<SeP>1553<SeP>1709<SeP>1309<SeP>1417<SeP>1465<SeP>1593<SeP>1721<SeP>988<SeP>1198<SeP>1866<SeP>1741<SeP>1766<SeP>1822<SeP>1703<SeP>1589<SeP>1596<SeP>1510<SeP>1567<SeP>1488<SeP>1683<SeP>1702";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "153<SeP>614<SeP>992<SeP>705<SeP>563<SeP>206<SeP>6966<SeP>515<SeP>9169<SeP>968<SeP>390<SeP>1136<SeP>1229<SeP>291<SeP>156<SeP>459<SeP>113<SeP>761<SeP>283<SeP>4932<SeP>7428<SeP>6971<SeP>7804<SeP>6316<SeP>253<SeP>309<SeP>390<SeP>174<SeP>757<SeP>5517<SeP>73<SeP>386<SeP>349<SeP>366<SeP>3386<SeP>9617<SeP>8373<SeP>10403<SeP>9628<SeP>5713<SeP>6218<SeP>7872<SeP>7821<SeP>10102<SeP>7481<SeP>7186<SeP>9218<SeP>8879<SeP>7469<SeP>8314<SeP>5270<SeP>9649<SeP>9724<SeP>6064<SeP>8399<SeP>8107<SeP>8962<SeP>18614<SeP>15798<SeP>9789<SeP>11073<SeP>7065<SeP>7593<SeP>8586<SeP>9010<SeP>8285<SeP>7248<SeP>6351<SeP>6685<SeP>6568<SeP>4703<SeP>4725<SeP>6458<SeP>5478<SeP>6373<SeP>7289<SeP>5521<SeP>5354<SeP>5256<SeP>7165<SeP>4625<SeP>6711<SeP>5243<SeP>5613<SeP>6713<SeP>5374<SeP>5614<SeP>5246<SeP>9974<SeP>20957<SeP>33897<SeP>9579<SeP>9330<SeP>5710<SeP>7161<SeP>12008<SeP>7035<SeP>3985<SeP>5428<SeP>5057<SeP>4412<SeP>6432<SeP>6784<SeP>7559<SeP>6018<SeP>5982<SeP>4031<SeP>7757<SeP>8176<SeP>7569<SeP>8454<SeP>3596<SeP>7128<SeP>10781<SeP>7875<SeP>3337<SeP>3635<SeP>6933<SeP>8864<SeP>5570<SeP>7754<SeP>8186<SeP>3180<SeP>3034<SeP>1151<SeP>1656<SeP>1817<SeP>2494<SeP>830<SeP>1319<SeP>654<SeP>1631<SeP>1200<SeP>1170<SeP>1189<SeP>757<SeP>1135<SeP>723<SeP>1517<SeP>1463<SeP>1057<SeP>1638<SeP>2052<SeP>1453<SeP>10005<SeP>7024<SeP>10451<SeP>8301<SeP>6005<SeP>11163<SeP>6554<SeP>9358<SeP>9284<SeP>10299<SeP>11862<SeP>7319<SeP>13437<SeP>11370<SeP>7842<SeP>11349<SeP>5423<SeP>5292<SeP>7002<SeP>25436<SeP>6256<SeP>8299<SeP>7865<SeP>17075<SeP>8795<SeP>7761<SeP>6011<SeP>6687<SeP>7474<SeP>25633<SeP>7121<SeP>9678<SeP>9176<SeP>5688<SeP>5227<SeP>7406<SeP>15139<SeP>5762<SeP>13134<SeP>7043<SeP>7091<SeP>8427<SeP>6274<SeP>3883<SeP>6159<SeP>7077<SeP>5652<SeP>7065<SeP>7088<SeP>5203<SeP>21077<SeP>6671<SeP>6021<SeP>6267<SeP>8189<SeP>10544<SeP>7011<SeP>3897<SeP>4730<SeP>6334<SeP>2924<SeP>4614<SeP>4142<SeP>657<SeP>100<SeP>645<SeP>211<SeP>677<SeP>989<SeP>368<SeP>603<SeP>1003<SeP>1391<SeP>3183<SeP>22803<SeP>674<SeP>2650<SeP>3702<SeP>3568<SeP>3045<SeP>7075<SeP>3976<SeP>2549<SeP>3856<SeP>2921<SeP>2753<SeP>3452<SeP>4214<SeP>2224<SeP>3296<SeP>1272<SeP>2763<SeP>1094<SeP>1916<SeP>1595<SeP>1378<SeP>1001<SeP>1103<SeP>1611<SeP>26519<SeP>1691<SeP>4229<SeP>4040<SeP>1959<SeP>3344<SeP>3001<SeP>1885<SeP>3360<SeP>2630<SeP>3626<SeP>2566<SeP>2451<SeP>3288<SeP>3962<SeP>5982<SeP>5259<SeP>4318<SeP>2701<SeP>2957<SeP>3680<SeP>3730<SeP>6558<SeP>8695<SeP>4239<SeP>2160<SeP>3363<SeP>3363<SeP>4640<SeP>2956<SeP>3048<SeP>2380<SeP>4474<SeP>4986<SeP>3670<SeP>5826<SeP>4353<SeP>5960<SeP>4835<SeP>5375<SeP>4955<SeP>22132<SeP>5641<SeP>10680<SeP>1741<SeP>3241<SeP>3863<SeP>3656<SeP>5288<SeP>3562<SeP>4635<SeP>4546<SeP>4813<SeP>3099<SeP>4161<SeP>1944<SeP>1457<SeP>2201<SeP>3353<SeP>2528<SeP>3101<SeP>3379<SeP>4623<SeP>3361<SeP>3377<SeP>4372<SeP>3394<SeP>2902<SeP>5724<SeP>7899<SeP>6107<SeP>4600<SeP>5182<SeP>4643<SeP>3546<SeP>3543<SeP>4588<SeP>5707<SeP>5375<SeP>4852<SeP>3969<SeP>1778<SeP>394<SeP>2351<SeP>1442<SeP>744<SeP>1913<SeP>1547<SeP>829<SeP>2978<SeP>3738<SeP>6442<SeP>6027<SeP>32483<SeP>5427<SeP>8998<SeP>19400<SeP>5361<SeP>4964<SeP>6100<SeP>3957<SeP>24771<SeP>5379<SeP>4724<SeP>4875<SeP>5656<SeP>18291<SeP>17027<SeP>4351<SeP>3399<SeP>4428<SeP>5084<SeP>6065<SeP>3335<SeP>3123<SeP>3416<SeP>4686<SeP>5299<SeP>3999<SeP>18082<SeP>5820<SeP>6566<SeP>4553<SeP>1551<SeP>3815<SeP>4727<SeP>3809<SeP>4196<SeP>2657<SeP>3863<SeP>2574<SeP>3960<SeP>3615<SeP>7256<SeP>8811<SeP>9768<SeP>8765<SeP>8621<SeP>7460<SeP>6749<SeP>5097<SeP>4736<SeP>9652<SeP>19758<SeP>3217<SeP>4362<SeP>3204<SeP>11404<SeP>5070<SeP>4208<SeP>4474<SeP>4544<SeP>3325<SeP>6288<SeP>9867<SeP>6805<SeP>3769";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:51:45<SeP>2023-07-28 21:43:30<SeP>2023-07-30 08:35:15<SeP>2023-07-31 19:27:00<SeP>2023-08-02 06:18:45<SeP>2023-08-03 17:10:30<SeP>2023-08-05 04:02:15<SeP>2023-08-06 14:54:00<SeP>2023-08-08 01:45:45<SeP>2023-08-09 12:37:30<SeP>2023-08-10 23:29:15<SeP>2023-08-12 10:21:00<SeP>2023-08-13 21:12:45<SeP>2023-08-15 08:04:30<SeP>2023-08-16 18:56:15<SeP>2023-08-18 05:48:00<SeP>2023-08-19 16:39:45<SeP>2023-08-21 03:31:30<SeP>2023-08-22 14:23:15<SeP>2023-08-24 01:15:00<SeP>2023-08-25 12:06:45<SeP>2023-08-26 22:58:30<SeP>2023-08-28 09:50:15<SeP>2023-08-29 20:42:00<SeP>2023-08-31 07:33:45<SeP>2023-09-01 18:25:30<SeP>2023-09-03 05:17:15<SeP>2023-09-04 16:09:00<SeP>2023-09-06 03:00:45<SeP>2023-09-07 13:52:30<SeP>2023-09-09 00:44:15<SeP>2023-09-10 11:36:00<SeP>2023-09-11 22:27:45<SeP>2023-09-13 09:19:30<SeP>2023-09-14 20:11:15<SeP>2023-09-16 07:03:00<SeP>2023-09-17 17:54:45<SeP>2023-09-19 04:46:30<SeP>2023-09-20 15:38:15<SeP>2023-09-22 02:30:00<SeP>2023-09-23 13:21:45<SeP>2023-09-25 00:13:30<SeP>2023-09-26 11:05:15<SeP>2023-09-27 21:57:00<SeP>2023-09-29 08:48:45<SeP>2023-09-30 19:40:30<SeP>2023-10-02 06:32:15<SeP>2023-10-03 17:24:00<SeP>2023-10-05 04:15:45<SeP>2023-10-06 15:07:30<SeP>2023-10-08 01:59:15<SeP>2023-10-09 12:51:00<SeP>2023-10-10 23:42:45<SeP>2023-10-12 10:34:30<SeP>2023-10-13 21:26:15<SeP>2023-10-15 08:18:00<SeP>2023-10-16 19:09:45<SeP>2023-10-18 06:01:30<SeP>2023-10-19 16:53:15<SeP>2023-10-21 03:45:00<SeP>2023-10-22 14:36:45<SeP>2023-10-24 01:28:30<SeP>2023-10-25 12:20:15<SeP>2023-10-26 23:12:00<SeP>2023-10-28 10:03:45<SeP>2023-10-29 20:55:30<SeP>2023-10-31 07:47:15<SeP>2023-11-01 18:39:00<SeP>2023-11-03 05:30:45<SeP>2023-11-04 16:22:30<SeP>2023-11-06 02:14:15<SeP>2023-11-07 13:06:00<SeP>2023-11-08 23:57:45<SeP>2023-11-10 10:49:30<SeP>2023-11-11 21:41:15<SeP>2023-11-13 08:33:00<SeP>2023-11-14 19:24:45<SeP>2023-11-16 06:16:30<SeP>2023-11-17 17:08:15<SeP>2023-11-19 04:00:00<SeP>2023-11-20 14:51:45<SeP>2023-11-22 01:43:30<SeP>2023-11-23 12:35:15<SeP>2023-11-24 23:27:00<SeP>2023-11-26 10:18:45<SeP>2023-11-27 21:10:30<SeP>2023-11-29 08:02:15<SeP>2023-11-30 18:54:00<SeP>2023-12-02 05:45:45<SeP>2023-12-03 16:37:30<SeP>2023-12-05 03:29:15<SeP>2023-12-06 14:21:00<SeP>2023-12-08 01:12:45<SeP>2023-12-09 12:04:30<SeP>2023-12-10 22:56:15<SeP>2023-12-12 09:48:00<SeP>2023-12-13 20:39:45<SeP>2023-12-15 07:31:30<SeP>2023-12-16 18:23:15<SeP>2023-12-18 05:15:00<SeP>2023-12-19 16:06:45<SeP>2023-12-21 02:58:30<SeP>2023-12-22 13:50:15<SeP>2023-12-24 00:42:00<SeP>2023-12-25 11:33:45<SeP>2023-12-26 22:25:30<SeP>2023-12-28 09:17:15<SeP>2023-12-29 20:09:00<SeP>2023-12-31 07:00:45<SeP>2024-01-01 17:52:30<SeP>2024-01-03 04:44:15<SeP>2024-01-04 15:36:00<SeP>2024-01-06 02:27:45<SeP>2024-01-07 13:19:30<SeP>2024-01-09 00:11:15<SeP>2024-01-10 11:03:00<SeP>2024-01-11 21:54:45<SeP>2024-01-13 08:46:30<SeP>2024-01-14 19:38:15<SeP>2024-01-16 06:30:00<SeP>2024-01-17 17:21:45<SeP>2024-01-19 04:13:30<SeP>2024-01-20 15:05:15<SeP>2024-01-22 01:57:00<SeP>2024-01-23 12:48:45<SeP>2024-01-24 23:40:30<SeP>2024-01-26 10:32:15<SeP>2024-01-27 21:24:00<SeP>2024-01-29 08:15:45<SeP>2024-01-30 19:07:30<SeP>2024-02-01 05:59:15<SeP>2024-02-02 16:51:00<SeP>2024-02-04 03:42:45<SeP>2024-02-05 14:34:30<SeP>2024-02-07 01:26:15<SeP>2024-02-08 12:18:00<SeP>2024-02-09 23:09:45<SeP>2024-02-11 10:01:30<SeP>2024-02-12 20:53:15<SeP>2024-02-14 07:45:00<SeP>2024-02-15 18:36:45<SeP>2024-02-17 05:28:30<SeP>2024-02-18 16:20:15<SeP>2024-02-20 03:12:00<SeP>2024-02-21 14:03:45<SeP>2024-02-23 00:55:30<SeP>2024-02-24 11:47:15<SeP>2024-02-25 22:39:00<SeP>2024-02-27 09:30:45<SeP>2024-02-28 20:22:30<SeP>2024-03-01 07:14:15<SeP>2024-03-02 18:06:00<SeP>2024-03-04 04:57:45<SeP>2024-03-05 15:49:30<SeP>2024-03-07 02:41:15<SeP>2024-03-08 13:33:00<SeP>2024-03-10 00:24:45<SeP>2024-03-11 12:16:30<SeP>2024-03-12 23:08:15<SeP>2024-03-14 10:00:00<SeP>2024-03-15 20:51:45<SeP>2024-03-17 07:43:30<SeP>2024-03-18 18:35:15<SeP>2024-03-20 05:27:00<SeP>2024-03-21 16:18:45<SeP>2024-03-23 03:10:30<SeP>2024-03-24 14:02:15<SeP>2024-03-26 00:54:00<SeP>2024-03-27 11:45:45<SeP>2024-03-28 22:37:30<SeP>2024-03-30 09:29:15<SeP>2024-03-31 20:21:00<SeP>2024-04-02 07:12:45<SeP>2024-04-03 18:04:30<SeP>2024-04-05 04:56:15<SeP>2024-04-06 15:48:00<SeP>2024-04-08 02:39:45<SeP>2024-04-09 13:31:30<SeP>2024-04-11 00:23:15<SeP>2024-04-12 11:15:00<SeP>2024-04-13 22:06:45<SeP>2024-04-15 08:58:30<SeP>2024-04-16 19:50:15<SeP>2024-04-18 06:42:00<SeP>2024-04-19 17:33:45<SeP>2024-04-21 04:25:30<SeP>2024-04-22 15:17:15<SeP>2024-04-24 02:09:00<SeP>2024-04-25 13:00:45<SeP>2024-04-26 23:52:30<SeP>2024-04-28 10:44:15<SeP>2024-04-29 21:36:00<SeP>2024-05-01 08:27:45<SeP>2024-05-02 19:19:30<SeP>2024-05-04 06:11:15<SeP>2024-05-05 17:03:00<SeP>2024-05-07 03:54:45<SeP>2024-05-08 14:46:30<SeP>2024-05-10 01:38:15<SeP>2024-05-11 12:30:00<SeP>2024-05-12 23:21:45<SeP>2024-05-14 10:13:30<SeP>2024-05-15 21:05:15<SeP>2024-05-17 07:57:00<SeP>2024-05-18 18:48:45<SeP>2024-05-20 05:40:30<SeP>2024-05-21 16:32:15<SeP>2024-05-23 03:24:00<SeP>2024-05-24 14:15:45<SeP>2024-05-26 01:07:30<SeP>2024-05-27 11:59:15<SeP>2024-05-28 22:51:00<SeP>2024-05-30 09:42:45<SeP>2024-05-31 20:34:30<SeP>2024-06-02 07:26:15<SeP>2024-06-03 18:18:00<SeP>2024-06-05 05:09:45<SeP>2024-06-06 16:01:30<SeP>2024-06-08 02:53:15<SeP>2024-06-09 13:45:00<SeP>2024-06-11 00:36:45<SeP>2024-06-12 11:28:30<SeP>2024-06-13 22:20:15<SeP>2024-06-15 09:12:00<SeP>2024-06-16 20:03:45<SeP>2024-06-18 06:55:30<SeP>2024-06-19 17:47:15<SeP>2024-06-21 04:39:00<SeP>2024-06-22 15:30:45<SeP>2024-06-24 02:22:30<SeP>2024-06-25 13:14:15<SeP>2024-06-27 00:06:00<SeP>2024-06-28 10:57:45<SeP>2024-06-29 21:49:30<SeP>2024-07-01 08:41:15<SeP>2024-07-02 19:33:00<SeP>2024-07-04 06:24:45<SeP>2024-07-05 17:16:30<SeP>2024-07-07 04:08:15<SeP>2024-07-08 15:00:00<SeP>2024-07-10 01:51:45<SeP>2024-07-11 12:43:30<SeP>2024-07-12 23:35:15<SeP>2024-07-14 10:27:00<SeP>2024-07-15 21:18:45<SeP>2024-07-17 08:10:30<SeP>2024-07-18 19:02:15<SeP>2024-07-20 05:54:00<SeP>2024-07-21 16:45:45<SeP>2024-07-23 03:37:30<SeP>2024-07-24 14:29:15<SeP>2024-07-26 01:21:00<SeP>2024-07-27 12:12:45<SeP>2024-07-28 23:04:30<SeP>2024-07-30 09:56:15<SeP>2024-07-31 20:48:00<SeP>2024-08-02 07:39:45<SeP>2024-08-03 18:31:30<SeP>2024-08-05 05:23:15<SeP>2024-08-06 16:15:00<SeP>2024-08-08 03:06:45<SeP>2024-08-09 13:58:30<SeP>2024-08-11 00:50:15<SeP>2024-08-12 11:42:00<SeP>2024-08-13 22:33:45<SeP>2024-08-15 09:25:30<SeP>2024-08-16 20:17:15<SeP>2024-08-18 07:09:00<SeP>2024-08-19 18:00:45<SeP>2024-08-21 04:52:30<SeP>2024-08-22 15:44:15<SeP>2024-08-24 02:36:00<SeP>2024-08-25 13:27:45<SeP>2024-08-27 00:19:30<SeP>2024-08-28 11:11:15<SeP>2024-08-29 22:03:00<SeP>2024-08-31 08:54:45<SeP>2024-09-01 19:46:30<SeP>2024-09-03 06:38:15<SeP>2024-09-04 17:30:00<SeP>2024-09-06 04:21:45<SeP>2024-09-07 15:13:30<SeP>2024-09-09 02:05:15<SeP>2024-09-10 12:57:00<SeP>2024-09-11 23:48:45<SeP>2024-09-13 10:40:30<SeP>2024-09-14 21:32:15<SeP>2024-09-16 08:24:00<SeP>2024-09-17 19:15:45<SeP>2024-09-19 06:07:30<SeP>2024-09-20 16:59:15<SeP>2024-09-22 03:51:00<SeP>2024-09-23 14:42:45<SeP>2024-09-25 01:34:30<SeP>2024-09-26 12:26:15<SeP>2024-09-27 23:18:00<SeP>2024-09-29 10:09:45<SeP>2024-09-30 21:01:30<SeP>2024-10-02 07:53:15<SeP>2024-10-03 18:45:00<SeP>2024-10-05 05:36:45<SeP>2024-10-06 16:28:30<SeP>2024-10-08 03:20:15<SeP>2024-10-09 14:12:00<SeP>2024-10-11 01:03:45<SeP>2024-10-12 11:55:30<SeP>2024-10-13 22:47:15<SeP>2024-10-15 09:39:00<SeP>2024-10-16 20:30:45<SeP>2024-10-18 07:22:30<SeP>2024-10-19 18:14:15<SeP>2024-10-21 05:06:00<SeP>2024-10-22 15:57:45<SeP>2024-10-24 02:49:30<SeP>2024-10-25 13:41:15<SeP>2024-10-27 00:33:00<SeP>2024-10-28 11:24:45<SeP>2024-10-29 22:16:30<SeP>2024-10-31 09:08:15<SeP>2024-11-01 20:00:00<SeP>2024-11-03 05:51:45<SeP>2024-11-04 16:43:30<SeP>2024-11-06 03:35:15<SeP>2024-11-07 14:27:00<SeP>2024-11-09 01:18:45<SeP>2024-11-10 12:10:30<SeP>2024-11-11 23:02:15<SeP>2024-11-13 09:54:00<SeP>2024-11-14 20:45:45<SeP>2024-11-16 07:37:30<SeP>2024-11-17 18:29:15<SeP>2024-11-19 05:21:00<SeP>2024-11-20 16:12:45<SeP>2024-11-22 03:04:30<SeP>2024-11-23 13:56:15<SeP>2024-11-25 00:48:00<SeP>2024-11-26 11:39:45<SeP>2024-11-27 22:31:30<SeP>2024-11-29 09:23:15<SeP>2024-11-30 20:15:00<SeP>2024-12-02 07:06:45<SeP>2024-12-03 17:58:30<SeP>2024-12-05 04:50:15<SeP>2024-12-06 15:42:00<SeP>2024-12-08 02:33:45<SeP>2024-12-09 13:25:30<SeP>2024-12-11 00:17:15<SeP>2024-12-12 11:09:00<SeP>2024-12-13 22:00:45<SeP>2024-12-15 08:52:30<SeP>2024-12-16 19:44:15<SeP>2024-12-18 06:36:00<SeP>2024-12-19 17:27:45<SeP>2024-12-21 04:19:30<SeP>2024-12-22 15:11:15<SeP>2024-12-24 02:03:00<SeP>2024-12-25 12:54:45<SeP>2024-12-26 23:46:30<SeP>2024-12-28 10:38:15<SeP>2024-12-29 21:30:00<SeP>2024-12-31 08:21:45<SeP>2025-01-01 19:13:30<SeP>2025-01-03 06:05:15<SeP>2025-01-04 16:57:00<SeP>2025-01-06 03:48:45<SeP>2025-01-07 14:40:30<SeP>2025-01-09 01:32:15<SeP>2025-01-10 12:24:00<SeP>2025-01-11 23:15:45<SeP>2025-01-13 10:07:30<SeP>2025-01-14 20:59:15<SeP>2025-01-16 07:51:00<SeP>2025-01-17 18:42:45<SeP>2025-01-19 05:34:30<SeP>2025-01-20 16:26:15<SeP>2025-01-22 03:18:00<SeP>2025-01-23 14:09:45<SeP>2025-01-25 01:01:30<SeP>2025-01-26 11:53:15<SeP>2025-01-27 22:45:00<SeP>2025-01-29 09:36:45<SeP>2025-01-30 20:28:30<SeP>2025-02-01 07:20:15<SeP>2025-02-02 18:12:00<SeP>2025-02-04 05:03:45<SeP>2025-02-05 15:55:30<SeP>2025-02-07 02:47:15<SeP>2025-02-08 13:39:00<SeP>2025-02-10 00:30:45<SeP>2025-02-11 11:22:30<SeP>2025-02-12 22:14:15<SeP>2025-02-14 09:06:00<SeP>2025-02-15 19:57:45<SeP>2025-02-17 06:49:30<SeP>2025-02-18 17:41:15<SeP>2025-02-20 04:33:00<SeP>2025-02-21 15:24:45<SeP>2025-02-23 02:16:30<SeP>2025-02-24 13:08:15";
  const itemLabel       = "Scans";
  const itemData        = "762<SeP>1477<SeP>1378<SeP>1444<SeP>1256<SeP>1690<SeP>959<SeP>948<SeP>1184<SeP>3347<SeP>1920<SeP>2373<SeP>2373<SeP>1935<SeP>743<SeP>912<SeP>1399<SeP>2509<SeP>1410<SeP>1807<SeP>1336<SeP>913<SeP>902<SeP>1410<SeP>814<SeP>952<SeP>811<SeP>1828<SeP>2651<SeP>921<SeP>844<SeP>1405<SeP>1257<SeP>828<SeP>2887<SeP>1672<SeP>2607<SeP>1818<SeP>1807<SeP>1407<SeP>1259<SeP>1768<SeP>1753<SeP>2161<SeP>1586<SeP>1602<SeP>1645<SeP>1706<SeP>1683<SeP>1715<SeP>1962<SeP>1655<SeP>1612<SeP>2793<SeP>2115<SeP>1400<SeP>1725<SeP>1995<SeP>2319<SeP>1475<SeP>2732<SeP>2494<SeP>1429<SeP>1494<SeP>1404<SeP>1663<SeP>1715<SeP>1570<SeP>1185<SeP>1421<SeP>1175<SeP>2378<SeP>1209<SeP>1137<SeP>1248<SeP>2349<SeP>7208<SeP>1118<SeP>1316<SeP>1397<SeP>1620<SeP>1963<SeP>1076<SeP>6717<SeP>1513<SeP>1625<SeP>890<SeP>1807<SeP>2693<SeP>1206<SeP>973<SeP>1033<SeP>1156<SeP>1682<SeP>2300<SeP>1028<SeP>1589<SeP>2987<SeP>6331<SeP>1274<SeP>958<SeP>960<SeP>893<SeP>948<SeP>967<SeP>1009<SeP>1018<SeP>4274<SeP>1865<SeP>1371<SeP>1501<SeP>573<SeP>1060<SeP>1578<SeP>1135<SeP>999<SeP>985<SeP>2293<SeP>1311<SeP>1008<SeP>973<SeP>1082<SeP>788<SeP>849<SeP>867<SeP>814<SeP>874<SeP>1041<SeP>790<SeP>809<SeP>849<SeP>988<SeP>788<SeP>678<SeP>907<SeP>836<SeP>822<SeP>916<SeP>833<SeP>824<SeP>731<SeP>812<SeP>1093<SeP>776<SeP>844<SeP>963<SeP>864<SeP>1129<SeP>972<SeP>758<SeP>520<SeP>929<SeP>835<SeP>1262<SeP>869<SeP>974<SeP>1229<SeP>1258<SeP>855<SeP>965<SeP>846<SeP>961<SeP>729<SeP>1077<SeP>983<SeP>934<SeP>899<SeP>956<SeP>1014<SeP>1073<SeP>998<SeP>950<SeP>1097<SeP>901<SeP>873<SeP>1713<SeP>1607<SeP>1254<SeP>979<SeP>1040<SeP>1185<SeP>986<SeP>952<SeP>718<SeP>719<SeP>994<SeP>1075<SeP>856<SeP>998<SeP>1243<SeP>1168<SeP>1141<SeP>1274<SeP>1053<SeP>1372<SeP>1111<SeP>1486<SeP>1202<SeP>1520<SeP>2076<SeP>1309<SeP>809<SeP>944<SeP>1080<SeP>1024<SeP>794<SeP>705<SeP>866<SeP>952<SeP>831<SeP>4229<SeP>4216<SeP>1978<SeP>1488<SeP>1132<SeP>845<SeP>1047<SeP>915<SeP>940<SeP>1048<SeP>1048<SeP>1000<SeP>1035<SeP>2214<SeP>1255<SeP>1112<SeP>1176<SeP>1339<SeP>1130<SeP>1082<SeP>911<SeP>1097<SeP>1105<SeP>1054<SeP>1049<SeP>1143<SeP>1098<SeP>977<SeP>925<SeP>1271<SeP>1127<SeP>1122<SeP>1207<SeP>1349<SeP>1137<SeP>1639<SeP>1148<SeP>1123<SeP>1232<SeP>1052<SeP>1980<SeP>1198<SeP>1711<SeP>1771<SeP>1438<SeP>1994<SeP>1629<SeP>1211<SeP>1194<SeP>1235<SeP>1186<SeP>1454<SeP>1327<SeP>1260<SeP>1355<SeP>1855<SeP>1435<SeP>1443<SeP>1292<SeP>1493<SeP>1209<SeP>1042<SeP>1280<SeP>1117<SeP>1147<SeP>1253<SeP>1355<SeP>1095<SeP>1610<SeP>1698<SeP>1265<SeP>1501<SeP>1596<SeP>1292<SeP>981<SeP>972<SeP>1006<SeP>994<SeP>816<SeP>991<SeP>1741<SeP>1188<SeP>1040<SeP>1119<SeP>958<SeP>768<SeP>1106<SeP>1369<SeP>799<SeP>968<SeP>890<SeP>1292<SeP>1514<SeP>1538<SeP>1110<SeP>1125<SeP>908<SeP>1740<SeP>1208<SeP>1066<SeP>1136<SeP>903<SeP>1642<SeP>978<SeP>955<SeP>1208<SeP>1074<SeP>830<SeP>907<SeP>1129<SeP>1391<SeP>1561<SeP>1457<SeP>1378<SeP>1277<SeP>904<SeP>1175<SeP>1175<SeP>1202<SeP>1094<SeP>985<SeP>1071<SeP>1176<SeP>1319<SeP>1488<SeP>1268<SeP>1541<SeP>1353<SeP>1598<SeP>1360<SeP>1307<SeP>1462<SeP>1443<SeP>1387<SeP>1245<SeP>1702<SeP>1391<SeP>1610<SeP>1417<SeP>1346<SeP>1404<SeP>1255<SeP>1279<SeP>1376<SeP>1403<SeP>1625<SeP>1240<SeP>1289<SeP>1276<SeP>1326<SeP>1312<SeP>1076<SeP>1523<SeP>1887<SeP>1647<SeP>1180<SeP>580<SeP>1491<SeP>1871<SeP>1220<SeP>1367<SeP>1189<SeP>1142<SeP>1325<SeP>1390<SeP>1225<SeP>1554<SeP>1730<SeP>1360<SeP>1553<SeP>1709<SeP>1309<SeP>1417<SeP>1465<SeP>1593<SeP>1721<SeP>988<SeP>1198<SeP>1866<SeP>1741<SeP>1766<SeP>1822<SeP>1703<SeP>1589<SeP>1596<SeP>1510<SeP>1567<SeP>1488<SeP>1683<SeP>1702";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:51:45<SeP>2023-07-28 21:43:30<SeP>2023-07-30 08:35:15<SeP>2023-07-31 19:27:00<SeP>2023-08-02 06:18:45<SeP>2023-08-03 17:10:30<SeP>2023-08-05 04:02:15<SeP>2023-08-06 14:54:00<SeP>2023-08-08 01:45:45<SeP>2023-08-09 12:37:30<SeP>2023-08-10 23:29:15<SeP>2023-08-12 10:21:00<SeP>2023-08-13 21:12:45<SeP>2023-08-15 08:04:30<SeP>2023-08-16 18:56:15<SeP>2023-08-18 05:48:00<SeP>2023-08-19 16:39:45<SeP>2023-08-21 03:31:30<SeP>2023-08-22 14:23:15<SeP>2023-08-24 01:15:00<SeP>2023-08-25 12:06:45<SeP>2023-08-26 22:58:30<SeP>2023-08-28 09:50:15<SeP>2023-08-29 20:42:00<SeP>2023-08-31 07:33:45<SeP>2023-09-01 18:25:30<SeP>2023-09-03 05:17:15<SeP>2023-09-04 16:09:00<SeP>2023-09-06 03:00:45<SeP>2023-09-07 13:52:30<SeP>2023-09-09 00:44:15<SeP>2023-09-10 11:36:00<SeP>2023-09-11 22:27:45<SeP>2023-09-13 09:19:30<SeP>2023-09-14 20:11:15<SeP>2023-09-16 07:03:00<SeP>2023-09-17 17:54:45<SeP>2023-09-19 04:46:30<SeP>2023-09-20 15:38:15<SeP>2023-09-22 02:30:00<SeP>2023-09-23 13:21:45<SeP>2023-09-25 00:13:30<SeP>2023-09-26 11:05:15<SeP>2023-09-27 21:57:00<SeP>2023-09-29 08:48:45<SeP>2023-09-30 19:40:30<SeP>2023-10-02 06:32:15<SeP>2023-10-03 17:24:00<SeP>2023-10-05 04:15:45<SeP>2023-10-06 15:07:30<SeP>2023-10-08 01:59:15<SeP>2023-10-09 12:51:00<SeP>2023-10-10 23:42:45<SeP>2023-10-12 10:34:30<SeP>2023-10-13 21:26:15<SeP>2023-10-15 08:18:00<SeP>2023-10-16 19:09:45<SeP>2023-10-18 06:01:30<SeP>2023-10-19 16:53:15<SeP>2023-10-21 03:45:00<SeP>2023-10-22 14:36:45<SeP>2023-10-24 01:28:30<SeP>2023-10-25 12:20:15<SeP>2023-10-26 23:12:00<SeP>2023-10-28 10:03:45<SeP>2023-10-29 20:55:30<SeP>2023-10-31 07:47:15<SeP>2023-11-01 18:39:00<SeP>2023-11-03 05:30:45<SeP>2023-11-04 16:22:30<SeP>2023-11-06 02:14:15<SeP>2023-11-07 13:06:00<SeP>2023-11-08 23:57:45<SeP>2023-11-10 10:49:30<SeP>2023-11-11 21:41:15<SeP>2023-11-13 08:33:00<SeP>2023-11-14 19:24:45<SeP>2023-11-16 06:16:30<SeP>2023-11-17 17:08:15<SeP>2023-11-19 04:00:00<SeP>2023-11-20 14:51:45<SeP>2023-11-22 01:43:30<SeP>2023-11-23 12:35:15<SeP>2023-11-24 23:27:00<SeP>2023-11-26 10:18:45<SeP>2023-11-27 21:10:30<SeP>2023-11-29 08:02:15<SeP>2023-11-30 18:54:00<SeP>2023-12-02 05:45:45<SeP>2023-12-03 16:37:30<SeP>2023-12-05 03:29:15<SeP>2023-12-06 14:21:00<SeP>2023-12-08 01:12:45<SeP>2023-12-09 12:04:30<SeP>2023-12-10 22:56:15<SeP>2023-12-12 09:48:00<SeP>2023-12-13 20:39:45<SeP>2023-12-15 07:31:30<SeP>2023-12-16 18:23:15<SeP>2023-12-18 05:15:00<SeP>2023-12-19 16:06:45<SeP>2023-12-21 02:58:30<SeP>2023-12-22 13:50:15<SeP>2023-12-24 00:42:00<SeP>2023-12-25 11:33:45<SeP>2023-12-26 22:25:30<SeP>2023-12-28 09:17:15<SeP>2023-12-29 20:09:00<SeP>2023-12-31 07:00:45<SeP>2024-01-01 17:52:30<SeP>2024-01-03 04:44:15<SeP>2024-01-04 15:36:00<SeP>2024-01-06 02:27:45<SeP>2024-01-07 13:19:30<SeP>2024-01-09 00:11:15<SeP>2024-01-10 11:03:00<SeP>2024-01-11 21:54:45<SeP>2024-01-13 08:46:30<SeP>2024-01-14 19:38:15<SeP>2024-01-16 06:30:00<SeP>2024-01-17 17:21:45<SeP>2024-01-19 04:13:30<SeP>2024-01-20 15:05:15<SeP>2024-01-22 01:57:00<SeP>2024-01-23 12:48:45<SeP>2024-01-24 23:40:30<SeP>2024-01-26 10:32:15<SeP>2024-01-27 21:24:00<SeP>2024-01-29 08:15:45<SeP>2024-01-30 19:07:30<SeP>2024-02-01 05:59:15<SeP>2024-02-02 16:51:00<SeP>2024-02-04 03:42:45<SeP>2024-02-05 14:34:30<SeP>2024-02-07 01:26:15<SeP>2024-02-08 12:18:00<SeP>2024-02-09 23:09:45<SeP>2024-02-11 10:01:30<SeP>2024-02-12 20:53:15<SeP>2024-02-14 07:45:00<SeP>2024-02-15 18:36:45<SeP>2024-02-17 05:28:30<SeP>2024-02-18 16:20:15<SeP>2024-02-20 03:12:00<SeP>2024-02-21 14:03:45<SeP>2024-02-23 00:55:30<SeP>2024-02-24 11:47:15<SeP>2024-02-25 22:39:00<SeP>2024-02-27 09:30:45<SeP>2024-02-28 20:22:30<SeP>2024-03-01 07:14:15<SeP>2024-03-02 18:06:00<SeP>2024-03-04 04:57:45<SeP>2024-03-05 15:49:30<SeP>2024-03-07 02:41:15<SeP>2024-03-08 13:33:00<SeP>2024-03-10 00:24:45<SeP>2024-03-11 12:16:30<SeP>2024-03-12 23:08:15<SeP>2024-03-14 10:00:00<SeP>2024-03-15 20:51:45<SeP>2024-03-17 07:43:30<SeP>2024-03-18 18:35:15<SeP>2024-03-20 05:27:00<SeP>2024-03-21 16:18:45<SeP>2024-03-23 03:10:30<SeP>2024-03-24 14:02:15<SeP>2024-03-26 00:54:00<SeP>2024-03-27 11:45:45<SeP>2024-03-28 22:37:30<SeP>2024-03-30 09:29:15<SeP>2024-03-31 20:21:00<SeP>2024-04-02 07:12:45<SeP>2024-04-03 18:04:30<SeP>2024-04-05 04:56:15<SeP>2024-04-06 15:48:00<SeP>2024-04-08 02:39:45<SeP>2024-04-09 13:31:30<SeP>2024-04-11 00:23:15<SeP>2024-04-12 11:15:00<SeP>2024-04-13 22:06:45<SeP>2024-04-15 08:58:30<SeP>2024-04-16 19:50:15<SeP>2024-04-18 06:42:00<SeP>2024-04-19 17:33:45<SeP>2024-04-21 04:25:30<SeP>2024-04-22 15:17:15<SeP>2024-04-24 02:09:00<SeP>2024-04-25 13:00:45<SeP>2024-04-26 23:52:30<SeP>2024-04-28 10:44:15<SeP>2024-04-29 21:36:00<SeP>2024-05-01 08:27:45<SeP>2024-05-02 19:19:30<SeP>2024-05-04 06:11:15<SeP>2024-05-05 17:03:00<SeP>2024-05-07 03:54:45<SeP>2024-05-08 14:46:30<SeP>2024-05-10 01:38:15<SeP>2024-05-11 12:30:00<SeP>2024-05-12 23:21:45<SeP>2024-05-14 10:13:30<SeP>2024-05-15 21:05:15<SeP>2024-05-17 07:57:00<SeP>2024-05-18 18:48:45<SeP>2024-05-20 05:40:30<SeP>2024-05-21 16:32:15<SeP>2024-05-23 03:24:00<SeP>2024-05-24 14:15:45<SeP>2024-05-26 01:07:30<SeP>2024-05-27 11:59:15<SeP>2024-05-28 22:51:00<SeP>2024-05-30 09:42:45<SeP>2024-05-31 20:34:30<SeP>2024-06-02 07:26:15<SeP>2024-06-03 18:18:00<SeP>2024-06-05 05:09:45<SeP>2024-06-06 16:01:30<SeP>2024-06-08 02:53:15<SeP>2024-06-09 13:45:00<SeP>2024-06-11 00:36:45<SeP>2024-06-12 11:28:30<SeP>2024-06-13 22:20:15<SeP>2024-06-15 09:12:00<SeP>2024-06-16 20:03:45<SeP>2024-06-18 06:55:30<SeP>2024-06-19 17:47:15<SeP>2024-06-21 04:39:00<SeP>2024-06-22 15:30:45<SeP>2024-06-24 02:22:30<SeP>2024-06-25 13:14:15<SeP>2024-06-27 00:06:00<SeP>2024-06-28 10:57:45<SeP>2024-06-29 21:49:30<SeP>2024-07-01 08:41:15<SeP>2024-07-02 19:33:00<SeP>2024-07-04 06:24:45<SeP>2024-07-05 17:16:30<SeP>2024-07-07 04:08:15<SeP>2024-07-08 15:00:00<SeP>2024-07-10 01:51:45<SeP>2024-07-11 12:43:30<SeP>2024-07-12 23:35:15<SeP>2024-07-14 10:27:00<SeP>2024-07-15 21:18:45<SeP>2024-07-17 08:10:30<SeP>2024-07-18 19:02:15<SeP>2024-07-20 05:54:00<SeP>2024-07-21 16:45:45<SeP>2024-07-23 03:37:30<SeP>2024-07-24 14:29:15<SeP>2024-07-26 01:21:00<SeP>2024-07-27 12:12:45<SeP>2024-07-28 23:04:30<SeP>2024-07-30 09:56:15<SeP>2024-07-31 20:48:00<SeP>2024-08-02 07:39:45<SeP>2024-08-03 18:31:30<SeP>2024-08-05 05:23:15<SeP>2024-08-06 16:15:00<SeP>2024-08-08 03:06:45<SeP>2024-08-09 13:58:30<SeP>2024-08-11 00:50:15<SeP>2024-08-12 11:42:00<SeP>2024-08-13 22:33:45<SeP>2024-08-15 09:25:30<SeP>2024-08-16 20:17:15<SeP>2024-08-18 07:09:00<SeP>2024-08-19 18:00:45<SeP>2024-08-21 04:52:30<SeP>2024-08-22 15:44:15<SeP>2024-08-24 02:36:00<SeP>2024-08-25 13:27:45<SeP>2024-08-27 00:19:30<SeP>2024-08-28 11:11:15<SeP>2024-08-29 22:03:00<SeP>2024-08-31 08:54:45<SeP>2024-09-01 19:46:30<SeP>2024-09-03 06:38:15<SeP>2024-09-04 17:30:00<SeP>2024-09-06 04:21:45<SeP>2024-09-07 15:13:30<SeP>2024-09-09 02:05:15<SeP>2024-09-10 12:57:00<SeP>2024-09-11 23:48:45<SeP>2024-09-13 10:40:30<SeP>2024-09-14 21:32:15<SeP>2024-09-16 08:24:00<SeP>2024-09-17 19:15:45<SeP>2024-09-19 06:07:30<SeP>2024-09-20 16:59:15<SeP>2024-09-22 03:51:00<SeP>2024-09-23 14:42:45<SeP>2024-09-25 01:34:30<SeP>2024-09-26 12:26:15<SeP>2024-09-27 23:18:00<SeP>2024-09-29 10:09:45<SeP>2024-09-30 21:01:30<SeP>2024-10-02 07:53:15<SeP>2024-10-03 18:45:00<SeP>2024-10-05 05:36:45<SeP>2024-10-06 16:28:30<SeP>2024-10-08 03:20:15<SeP>2024-10-09 14:12:00<SeP>2024-10-11 01:03:45<SeP>2024-10-12 11:55:30<SeP>2024-10-13 22:47:15<SeP>2024-10-15 09:39:00<SeP>2024-10-16 20:30:45<SeP>2024-10-18 07:22:30<SeP>2024-10-19 18:14:15<SeP>2024-10-21 05:06:00<SeP>2024-10-22 15:57:45<SeP>2024-10-24 02:49:30<SeP>2024-10-25 13:41:15<SeP>2024-10-27 00:33:00<SeP>2024-10-28 11:24:45<SeP>2024-10-29 22:16:30<SeP>2024-10-31 09:08:15<SeP>2024-11-01 20:00:00<SeP>2024-11-03 05:51:45<SeP>2024-11-04 16:43:30<SeP>2024-11-06 03:35:15<SeP>2024-11-07 14:27:00<SeP>2024-11-09 01:18:45<SeP>2024-11-10 12:10:30<SeP>2024-11-11 23:02:15<SeP>2024-11-13 09:54:00<SeP>2024-11-14 20:45:45<SeP>2024-11-16 07:37:30<SeP>2024-11-17 18:29:15<SeP>2024-11-19 05:21:00<SeP>2024-11-20 16:12:45<SeP>2024-11-22 03:04:30<SeP>2024-11-23 13:56:15<SeP>2024-11-25 00:48:00<SeP>2024-11-26 11:39:45<SeP>2024-11-27 22:31:30<SeP>2024-11-29 09:23:15<SeP>2024-11-30 20:15:00<SeP>2024-12-02 07:06:45<SeP>2024-12-03 17:58:30<SeP>2024-12-05 04:50:15<SeP>2024-12-06 15:42:00<SeP>2024-12-08 02:33:45<SeP>2024-12-09 13:25:30<SeP>2024-12-11 00:17:15<SeP>2024-12-12 11:09:00<SeP>2024-12-13 22:00:45<SeP>2024-12-15 08:52:30<SeP>2024-12-16 19:44:15<SeP>2024-12-18 06:36:00<SeP>2024-12-19 17:27:45<SeP>2024-12-21 04:19:30<SeP>2024-12-22 15:11:15<SeP>2024-12-24 02:03:00<SeP>2024-12-25 12:54:45<SeP>2024-12-26 23:46:30<SeP>2024-12-28 10:38:15<SeP>2024-12-29 21:30:00<SeP>2024-12-31 08:21:45<SeP>2025-01-01 19:13:30<SeP>2025-01-03 06:05:15<SeP>2025-01-04 16:57:00<SeP>2025-01-06 03:48:45<SeP>2025-01-07 14:40:30<SeP>2025-01-09 01:32:15<SeP>2025-01-10 12:24:00<SeP>2025-01-11 23:15:45<SeP>2025-01-13 10:07:30<SeP>2025-01-14 20:59:15<SeP>2025-01-16 07:51:00<SeP>2025-01-17 18:42:45<SeP>2025-01-19 05:34:30<SeP>2025-01-20 16:26:15<SeP>2025-01-22 03:18:00<SeP>2025-01-23 14:09:45<SeP>2025-01-25 01:01:30<SeP>2025-01-26 11:53:15<SeP>2025-01-27 22:45:00<SeP>2025-01-29 09:36:45<SeP>2025-01-30 20:28:30<SeP>2025-02-01 07:20:15<SeP>2025-02-02 18:12:00<SeP>2025-02-04 05:03:45<SeP>2025-02-05 15:55:30<SeP>2025-02-07 02:47:15<SeP>2025-02-08 13:39:00<SeP>2025-02-10 00:30:45<SeP>2025-02-11 11:22:30<SeP>2025-02-12 22:14:15<SeP>2025-02-14 09:06:00<SeP>2025-02-15 19:57:45<SeP>2025-02-17 06:49:30<SeP>2025-02-18 17:41:15<SeP>2025-02-20 04:33:00<SeP>2025-02-21 15:24:45<SeP>2025-02-23 02:16:30<SeP>2025-02-24 13:08:15";
  const itemLabel       = "Attacks";
  const itemData        = "153<SeP>614<SeP>992<SeP>705<SeP>563<SeP>206<SeP>6966<SeP>515<SeP>9169<SeP>968<SeP>390<SeP>1136<SeP>1229<SeP>291<SeP>156<SeP>459<SeP>113<SeP>761<SeP>283<SeP>4932<SeP>7428<SeP>6971<SeP>7804<SeP>6316<SeP>253<SeP>309<SeP>390<SeP>174<SeP>757<SeP>5517<SeP>73<SeP>386<SeP>349<SeP>366<SeP>3386<SeP>9617<SeP>8373<SeP>10403<SeP>9628<SeP>5713<SeP>6218<SeP>7872<SeP>7821<SeP>10102<SeP>7481<SeP>7186<SeP>9218<SeP>8879<SeP>7469<SeP>8314<SeP>5270<SeP>9649<SeP>9724<SeP>6064<SeP>8399<SeP>8107<SeP>8962<SeP>18614<SeP>15798<SeP>9789<SeP>11073<SeP>7065<SeP>7593<SeP>8586<SeP>9010<SeP>8285<SeP>7248<SeP>6351<SeP>6685<SeP>6568<SeP>4703<SeP>4725<SeP>6458<SeP>5478<SeP>6373<SeP>7289<SeP>5521<SeP>5354<SeP>5256<SeP>7165<SeP>4625<SeP>6711<SeP>5243<SeP>5613<SeP>6713<SeP>5374<SeP>5614<SeP>5246<SeP>9974<SeP>20957<SeP>33897<SeP>9579<SeP>9330<SeP>5710<SeP>7161<SeP>12008<SeP>7035<SeP>3985<SeP>5428<SeP>5057<SeP>4412<SeP>6432<SeP>6784<SeP>7559<SeP>6018<SeP>5982<SeP>4031<SeP>7757<SeP>8176<SeP>7569<SeP>8454<SeP>3596<SeP>7128<SeP>10781<SeP>7875<SeP>3337<SeP>3635<SeP>6933<SeP>8864<SeP>5570<SeP>7754<SeP>8186<SeP>3180<SeP>3034<SeP>1151<SeP>1656<SeP>1817<SeP>2494<SeP>830<SeP>1319<SeP>654<SeP>1631<SeP>1200<SeP>1170<SeP>1189<SeP>757<SeP>1135<SeP>723<SeP>1517<SeP>1463<SeP>1057<SeP>1638<SeP>2052<SeP>1453<SeP>10005<SeP>7024<SeP>10451<SeP>8301<SeP>6005<SeP>11163<SeP>6554<SeP>9358<SeP>9284<SeP>10299<SeP>11862<SeP>7319<SeP>13437<SeP>11370<SeP>7842<SeP>11349<SeP>5423<SeP>5292<SeP>7002<SeP>25436<SeP>6256<SeP>8299<SeP>7865<SeP>17075<SeP>8795<SeP>7761<SeP>6011<SeP>6687<SeP>7474<SeP>25633<SeP>7121<SeP>9678<SeP>9176<SeP>5688<SeP>5227<SeP>7406<SeP>15139<SeP>5762<SeP>13134<SeP>7043<SeP>7091<SeP>8427<SeP>6274<SeP>3883<SeP>6159<SeP>7077<SeP>5652<SeP>7065<SeP>7088<SeP>5203<SeP>21077<SeP>6671<SeP>6021<SeP>6267<SeP>8189<SeP>10544<SeP>7011<SeP>3897<SeP>4730<SeP>6334<SeP>2924<SeP>4614<SeP>4142<SeP>657<SeP>100<SeP>645<SeP>211<SeP>677<SeP>989<SeP>368<SeP>603<SeP>1003<SeP>1391<SeP>3183<SeP>22803<SeP>674<SeP>2650<SeP>3702<SeP>3568<SeP>3045<SeP>7075<SeP>3976<SeP>2549<SeP>3856<SeP>2921<SeP>2753<SeP>3452<SeP>4214<SeP>2224<SeP>3296<SeP>1272<SeP>2763<SeP>1094<SeP>1916<SeP>1595<SeP>1378<SeP>1001<SeP>1103<SeP>1611<SeP>26519<SeP>1691<SeP>4229<SeP>4040<SeP>1959<SeP>3344<SeP>3001<SeP>1885<SeP>3360<SeP>2630<SeP>3626<SeP>2566<SeP>2451<SeP>3288<SeP>3962<SeP>5982<SeP>5259<SeP>4318<SeP>2701<SeP>2957<SeP>3680<SeP>3730<SeP>6558<SeP>8695<SeP>4239<SeP>2160<SeP>3363<SeP>3363<SeP>4640<SeP>2956<SeP>3048<SeP>2380<SeP>4474<SeP>4986<SeP>3670<SeP>5826<SeP>4353<SeP>5960<SeP>4835<SeP>5375<SeP>4955<SeP>22132<SeP>5641<SeP>10680<SeP>1741<SeP>3241<SeP>3863<SeP>3656<SeP>5288<SeP>3562<SeP>4635<SeP>4546<SeP>4813<SeP>3099<SeP>4161<SeP>1944<SeP>1457<SeP>2201<SeP>3353<SeP>2528<SeP>3101<SeP>3379<SeP>4623<SeP>3361<SeP>3377<SeP>4372<SeP>3394<SeP>2902<SeP>5724<SeP>7899<SeP>6107<SeP>4600<SeP>5182<SeP>4643<SeP>3546<SeP>3543<SeP>4588<SeP>5707<SeP>5375<SeP>4852<SeP>3969<SeP>1778<SeP>394<SeP>2351<SeP>1442<SeP>744<SeP>1913<SeP>1547<SeP>829<SeP>2978<SeP>3738<SeP>6442<SeP>6027<SeP>32483<SeP>5427<SeP>8998<SeP>19400<SeP>5361<SeP>4964<SeP>6100<SeP>3957<SeP>24771<SeP>5379<SeP>4724<SeP>4875<SeP>5656<SeP>18291<SeP>17027<SeP>4351<SeP>3399<SeP>4428<SeP>5084<SeP>6065<SeP>3335<SeP>3123<SeP>3416<SeP>4686<SeP>5299<SeP>3999<SeP>18082<SeP>5820<SeP>6566<SeP>4553<SeP>1551<SeP>3815<SeP>4727<SeP>3809<SeP>4196<SeP>2657<SeP>3863<SeP>2574<SeP>3960<SeP>3615<SeP>7256<SeP>8811<SeP>9768<SeP>8765<SeP>8621<SeP>7460<SeP>6749<SeP>5097<SeP>4736<SeP>9652<SeP>19758<SeP>3217<SeP>4362<SeP>3204<SeP>11404<SeP>5070<SeP>4208<SeP>4474<SeP>4544<SeP>3325<SeP>6288<SeP>9867<SeP>6805<SeP>3769";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:51:45<SeP>2023-07-28 21:43:30<SeP>2023-07-30 08:35:15<SeP>2023-07-31 19:27:00<SeP>2023-08-02 06:18:45<SeP>2023-08-03 17:10:30<SeP>2023-08-05 04:02:15<SeP>2023-08-06 14:54:00<SeP>2023-08-08 01:45:45<SeP>2023-08-09 12:37:30<SeP>2023-08-10 23:29:15<SeP>2023-08-12 10:21:00<SeP>2023-08-13 21:12:45<SeP>2023-08-15 08:04:30<SeP>2023-08-16 18:56:15<SeP>2023-08-18 05:48:00<SeP>2023-08-19 16:39:45<SeP>2023-08-21 03:31:30<SeP>2023-08-22 14:23:15<SeP>2023-08-24 01:15:00<SeP>2023-08-25 12:06:45<SeP>2023-08-26 22:58:30<SeP>2023-08-28 09:50:15<SeP>2023-08-29 20:42:00<SeP>2023-08-31 07:33:45<SeP>2023-09-01 18:25:30<SeP>2023-09-03 05:17:15<SeP>2023-09-04 16:09:00<SeP>2023-09-06 03:00:45<SeP>2023-09-07 13:52:30<SeP>2023-09-09 00:44:15<SeP>2023-09-10 11:36:00<SeP>2023-09-11 22:27:45<SeP>2023-09-13 09:19:30<SeP>2023-09-14 20:11:15<SeP>2023-09-16 07:03:00<SeP>2023-09-17 17:54:45<SeP>2023-09-19 04:46:30<SeP>2023-09-20 15:38:15<SeP>2023-09-22 02:30:00<SeP>2023-09-23 13:21:45<SeP>2023-09-25 00:13:30<SeP>2023-09-26 11:05:15<SeP>2023-09-27 21:57:00<SeP>2023-09-29 08:48:45<SeP>2023-09-30 19:40:30<SeP>2023-10-02 06:32:15<SeP>2023-10-03 17:24:00<SeP>2023-10-05 04:15:45<SeP>2023-10-06 15:07:30<SeP>2023-10-08 01:59:15<SeP>2023-10-09 12:51:00<SeP>2023-10-10 23:42:45<SeP>2023-10-12 10:34:30<SeP>2023-10-13 21:26:15<SeP>2023-10-15 08:18:00<SeP>2023-10-16 19:09:45<SeP>2023-10-18 06:01:30<SeP>2023-10-19 16:53:15<SeP>2023-10-21 03:45:00<SeP>2023-10-22 14:36:45<SeP>2023-10-24 01:28:30<SeP>2023-10-25 12:20:15<SeP>2023-10-26 23:12:00<SeP>2023-10-28 10:03:45<SeP>2023-10-29 20:55:30<SeP>2023-10-31 07:47:15<SeP>2023-11-01 18:39:00<SeP>2023-11-03 05:30:45<SeP>2023-11-04 16:22:30<SeP>2023-11-06 02:14:15<SeP>2023-11-07 13:06:00<SeP>2023-11-08 23:57:45<SeP>2023-11-10 10:49:30<SeP>2023-11-11 21:41:15<SeP>2023-11-13 08:33:00<SeP>2023-11-14 19:24:45<SeP>2023-11-16 06:16:30<SeP>2023-11-17 17:08:15<SeP>2023-11-19 04:00:00<SeP>2023-11-20 14:51:45<SeP>2023-11-22 01:43:30<SeP>2023-11-23 12:35:15<SeP>2023-11-24 23:27:00<SeP>2023-11-26 10:18:45<SeP>2023-11-27 21:10:30<SeP>2023-11-29 08:02:15<SeP>2023-11-30 18:54:00<SeP>2023-12-02 05:45:45<SeP>2023-12-03 16:37:30<SeP>2023-12-05 03:29:15<SeP>2023-12-06 14:21:00<SeP>2023-12-08 01:12:45<SeP>2023-12-09 12:04:30<SeP>2023-12-10 22:56:15<SeP>2023-12-12 09:48:00<SeP>2023-12-13 20:39:45<SeP>2023-12-15 07:31:30<SeP>2023-12-16 18:23:15<SeP>2023-12-18 05:15:00<SeP>2023-12-19 16:06:45<SeP>2023-12-21 02:58:30<SeP>2023-12-22 13:50:15<SeP>2023-12-24 00:42:00<SeP>2023-12-25 11:33:45<SeP>2023-12-26 22:25:30<SeP>2023-12-28 09:17:15<SeP>2023-12-29 20:09:00<SeP>2023-12-31 07:00:45<SeP>2024-01-01 17:52:30<SeP>2024-01-03 04:44:15<SeP>2024-01-04 15:36:00<SeP>2024-01-06 02:27:45<SeP>2024-01-07 13:19:30<SeP>2024-01-09 00:11:15<SeP>2024-01-10 11:03:00<SeP>2024-01-11 21:54:45<SeP>2024-01-13 08:46:30<SeP>2024-01-14 19:38:15<SeP>2024-01-16 06:30:00<SeP>2024-01-17 17:21:45<SeP>2024-01-19 04:13:30<SeP>2024-01-20 15:05:15<SeP>2024-01-22 01:57:00<SeP>2024-01-23 12:48:45<SeP>2024-01-24 23:40:30<SeP>2024-01-26 10:32:15<SeP>2024-01-27 21:24:00<SeP>2024-01-29 08:15:45<SeP>2024-01-30 19:07:30<SeP>2024-02-01 05:59:15<SeP>2024-02-02 16:51:00<SeP>2024-02-04 03:42:45<SeP>2024-02-05 14:34:30<SeP>2024-02-07 01:26:15<SeP>2024-02-08 12:18:00<SeP>2024-02-09 23:09:45<SeP>2024-02-11 10:01:30<SeP>2024-02-12 20:53:15<SeP>2024-02-14 07:45:00<SeP>2024-02-15 18:36:45<SeP>2024-02-17 05:28:30<SeP>2024-02-18 16:20:15<SeP>2024-02-20 03:12:00<SeP>2024-02-21 14:03:45<SeP>2024-02-23 00:55:30<SeP>2024-02-24 11:47:15<SeP>2024-02-25 22:39:00<SeP>2024-02-27 09:30:45<SeP>2024-02-28 20:22:30<SeP>2024-03-01 07:14:15<SeP>2024-03-02 18:06:00<SeP>2024-03-04 04:57:45<SeP>2024-03-05 15:49:30<SeP>2024-03-07 02:41:15<SeP>2024-03-08 13:33:00<SeP>2024-03-10 00:24:45<SeP>2024-03-11 12:16:30<SeP>2024-03-12 23:08:15<SeP>2024-03-14 10:00:00<SeP>2024-03-15 20:51:45<SeP>2024-03-17 07:43:30<SeP>2024-03-18 18:35:15<SeP>2024-03-20 05:27:00<SeP>2024-03-21 16:18:45<SeP>2024-03-23 03:10:30<SeP>2024-03-24 14:02:15<SeP>2024-03-26 00:54:00<SeP>2024-03-27 11:45:45<SeP>2024-03-28 22:37:30<SeP>2024-03-30 09:29:15<SeP>2024-03-31 20:21:00<SeP>2024-04-02 07:12:45<SeP>2024-04-03 18:04:30<SeP>2024-04-05 04:56:15<SeP>2024-04-06 15:48:00<SeP>2024-04-08 02:39:45<SeP>2024-04-09 13:31:30<SeP>2024-04-11 00:23:15<SeP>2024-04-12 11:15:00<SeP>2024-04-13 22:06:45<SeP>2024-04-15 08:58:30<SeP>2024-04-16 19:50:15<SeP>2024-04-18 06:42:00<SeP>2024-04-19 17:33:45<SeP>2024-04-21 04:25:30<SeP>2024-04-22 15:17:15<SeP>2024-04-24 02:09:00<SeP>2024-04-25 13:00:45<SeP>2024-04-26 23:52:30<SeP>2024-04-28 10:44:15<SeP>2024-04-29 21:36:00<SeP>2024-05-01 08:27:45<SeP>2024-05-02 19:19:30<SeP>2024-05-04 06:11:15<SeP>2024-05-05 17:03:00<SeP>2024-05-07 03:54:45<SeP>2024-05-08 14:46:30<SeP>2024-05-10 01:38:15<SeP>2024-05-11 12:30:00<SeP>2024-05-12 23:21:45<SeP>2024-05-14 10:13:30<SeP>2024-05-15 21:05:15<SeP>2024-05-17 07:57:00<SeP>2024-05-18 18:48:45<SeP>2024-05-20 05:40:30<SeP>2024-05-21 16:32:15<SeP>2024-05-23 03:24:00<SeP>2024-05-24 14:15:45<SeP>2024-05-26 01:07:30<SeP>2024-05-27 11:59:15<SeP>2024-05-28 22:51:00<SeP>2024-05-30 09:42:45<SeP>2024-05-31 20:34:30<SeP>2024-06-02 07:26:15<SeP>2024-06-03 18:18:00<SeP>2024-06-05 05:09:45<SeP>2024-06-06 16:01:30<SeP>2024-06-08 02:53:15<SeP>2024-06-09 13:45:00<SeP>2024-06-11 00:36:45<SeP>2024-06-12 11:28:30<SeP>2024-06-13 22:20:15<SeP>2024-06-15 09:12:00<SeP>2024-06-16 20:03:45<SeP>2024-06-18 06:55:30<SeP>2024-06-19 17:47:15<SeP>2024-06-21 04:39:00<SeP>2024-06-22 15:30:45<SeP>2024-06-24 02:22:30<SeP>2024-06-25 13:14:15<SeP>2024-06-27 00:06:00<SeP>2024-06-28 10:57:45<SeP>2024-06-29 21:49:30<SeP>2024-07-01 08:41:15<SeP>2024-07-02 19:33:00<SeP>2024-07-04 06:24:45<SeP>2024-07-05 17:16:30<SeP>2024-07-07 04:08:15<SeP>2024-07-08 15:00:00<SeP>2024-07-10 01:51:45<SeP>2024-07-11 12:43:30<SeP>2024-07-12 23:35:15<SeP>2024-07-14 10:27:00<SeP>2024-07-15 21:18:45<SeP>2024-07-17 08:10:30<SeP>2024-07-18 19:02:15<SeP>2024-07-20 05:54:00<SeP>2024-07-21 16:45:45<SeP>2024-07-23 03:37:30<SeP>2024-07-24 14:29:15<SeP>2024-07-26 01:21:00<SeP>2024-07-27 12:12:45<SeP>2024-07-28 23:04:30<SeP>2024-07-30 09:56:15<SeP>2024-07-31 20:48:00<SeP>2024-08-02 07:39:45<SeP>2024-08-03 18:31:30<SeP>2024-08-05 05:23:15<SeP>2024-08-06 16:15:00<SeP>2024-08-08 03:06:45<SeP>2024-08-09 13:58:30<SeP>2024-08-11 00:50:15<SeP>2024-08-12 11:42:00<SeP>2024-08-13 22:33:45<SeP>2024-08-15 09:25:30<SeP>2024-08-16 20:17:15<SeP>2024-08-18 07:09:00<SeP>2024-08-19 18:00:45<SeP>2024-08-21 04:52:30<SeP>2024-08-22 15:44:15<SeP>2024-08-24 02:36:00<SeP>2024-08-25 13:27:45<SeP>2024-08-27 00:19:30<SeP>2024-08-28 11:11:15<SeP>2024-08-29 22:03:00<SeP>2024-08-31 08:54:45<SeP>2024-09-01 19:46:30<SeP>2024-09-03 06:38:15<SeP>2024-09-04 17:30:00<SeP>2024-09-06 04:21:45<SeP>2024-09-07 15:13:30<SeP>2024-09-09 02:05:15<SeP>2024-09-10 12:57:00<SeP>2024-09-11 23:48:45<SeP>2024-09-13 10:40:30<SeP>2024-09-14 21:32:15<SeP>2024-09-16 08:24:00<SeP>2024-09-17 19:15:45<SeP>2024-09-19 06:07:30<SeP>2024-09-20 16:59:15<SeP>2024-09-22 03:51:00<SeP>2024-09-23 14:42:45<SeP>2024-09-25 01:34:30<SeP>2024-09-26 12:26:15<SeP>2024-09-27 23:18:00<SeP>2024-09-29 10:09:45<SeP>2024-09-30 21:01:30<SeP>2024-10-02 07:53:15<SeP>2024-10-03 18:45:00<SeP>2024-10-05 05:36:45<SeP>2024-10-06 16:28:30<SeP>2024-10-08 03:20:15<SeP>2024-10-09 14:12:00<SeP>2024-10-11 01:03:45<SeP>2024-10-12 11:55:30<SeP>2024-10-13 22:47:15<SeP>2024-10-15 09:39:00<SeP>2024-10-16 20:30:45<SeP>2024-10-18 07:22:30<SeP>2024-10-19 18:14:15<SeP>2024-10-21 05:06:00<SeP>2024-10-22 15:57:45<SeP>2024-10-24 02:49:30<SeP>2024-10-25 13:41:15<SeP>2024-10-27 00:33:00<SeP>2024-10-28 11:24:45<SeP>2024-10-29 22:16:30<SeP>2024-10-31 09:08:15<SeP>2024-11-01 20:00:00<SeP>2024-11-03 05:51:45<SeP>2024-11-04 16:43:30<SeP>2024-11-06 03:35:15<SeP>2024-11-07 14:27:00<SeP>2024-11-09 01:18:45<SeP>2024-11-10 12:10:30<SeP>2024-11-11 23:02:15<SeP>2024-11-13 09:54:00<SeP>2024-11-14 20:45:45<SeP>2024-11-16 07:37:30<SeP>2024-11-17 18:29:15<SeP>2024-11-19 05:21:00<SeP>2024-11-20 16:12:45<SeP>2024-11-22 03:04:30<SeP>2024-11-23 13:56:15<SeP>2024-11-25 00:48:00<SeP>2024-11-26 11:39:45<SeP>2024-11-27 22:31:30<SeP>2024-11-29 09:23:15<SeP>2024-11-30 20:15:00<SeP>2024-12-02 07:06:45<SeP>2024-12-03 17:58:30<SeP>2024-12-05 04:50:15<SeP>2024-12-06 15:42:00<SeP>2024-12-08 02:33:45<SeP>2024-12-09 13:25:30<SeP>2024-12-11 00:17:15<SeP>2024-12-12 11:09:00<SeP>2024-12-13 22:00:45<SeP>2024-12-15 08:52:30<SeP>2024-12-16 19:44:15<SeP>2024-12-18 06:36:00<SeP>2024-12-19 17:27:45<SeP>2024-12-21 04:19:30<SeP>2024-12-22 15:11:15<SeP>2024-12-24 02:03:00<SeP>2024-12-25 12:54:45<SeP>2024-12-26 23:46:30<SeP>2024-12-28 10:38:15<SeP>2024-12-29 21:30:00<SeP>2024-12-31 08:21:45<SeP>2025-01-01 19:13:30<SeP>2025-01-03 06:05:15<SeP>2025-01-04 16:57:00<SeP>2025-01-06 03:48:45<SeP>2025-01-07 14:40:30<SeP>2025-01-09 01:32:15<SeP>2025-01-10 12:24:00<SeP>2025-01-11 23:15:45<SeP>2025-01-13 10:07:30<SeP>2025-01-14 20:59:15<SeP>2025-01-16 07:51:00<SeP>2025-01-17 18:42:45<SeP>2025-01-19 05:34:30<SeP>2025-01-20 16:26:15<SeP>2025-01-22 03:18:00<SeP>2025-01-23 14:09:45<SeP>2025-01-25 01:01:30<SeP>2025-01-26 11:53:15<SeP>2025-01-27 22:45:00<SeP>2025-01-29 09:36:45<SeP>2025-01-30 20:28:30<SeP>2025-02-01 07:20:15<SeP>2025-02-02 18:12:00<SeP>2025-02-04 05:03:45<SeP>2025-02-05 15:55:30<SeP>2025-02-07 02:47:15<SeP>2025-02-08 13:39:00<SeP>2025-02-10 00:30:45<SeP>2025-02-11 11:22:30<SeP>2025-02-12 22:14:15<SeP>2025-02-14 09:06:00<SeP>2025-02-15 19:57:45<SeP>2025-02-17 06:49:30<SeP>2025-02-18 17:41:15<SeP>2025-02-20 04:33:00<SeP>2025-02-21 15:24:45<SeP>2025-02-23 02:16:30<SeP>2025-02-24 13:08:15";
  const item1Label       = "Escaneos";
  const item1Data        = "762<SeP>1477<SeP>1378<SeP>1444<SeP>1256<SeP>1690<SeP>959<SeP>948<SeP>1184<SeP>3347<SeP>1920<SeP>2373<SeP>2373<SeP>1935<SeP>743<SeP>912<SeP>1399<SeP>2509<SeP>1410<SeP>1807<SeP>1336<SeP>913<SeP>902<SeP>1410<SeP>814<SeP>952<SeP>811<SeP>1828<SeP>2651<SeP>921<SeP>844<SeP>1405<SeP>1257<SeP>828<SeP>2887<SeP>1672<SeP>2607<SeP>1818<SeP>1807<SeP>1407<SeP>1259<SeP>1768<SeP>1753<SeP>2161<SeP>1586<SeP>1602<SeP>1645<SeP>1706<SeP>1683<SeP>1715<SeP>1962<SeP>1655<SeP>1612<SeP>2793<SeP>2115<SeP>1400<SeP>1725<SeP>1995<SeP>2319<SeP>1475<SeP>2732<SeP>2494<SeP>1429<SeP>1494<SeP>1404<SeP>1663<SeP>1715<SeP>1570<SeP>1185<SeP>1421<SeP>1175<SeP>2378<SeP>1209<SeP>1137<SeP>1248<SeP>2349<SeP>7208<SeP>1118<SeP>1316<SeP>1397<SeP>1620<SeP>1963<SeP>1076<SeP>6717<SeP>1513<SeP>1625<SeP>890<SeP>1807<SeP>2693<SeP>1206<SeP>973<SeP>1033<SeP>1156<SeP>1682<SeP>2300<SeP>1028<SeP>1589<SeP>2987<SeP>6331<SeP>1274<SeP>958<SeP>960<SeP>893<SeP>948<SeP>967<SeP>1009<SeP>1018<SeP>4274<SeP>1865<SeP>1371<SeP>1501<SeP>573<SeP>1060<SeP>1578<SeP>1135<SeP>999<SeP>985<SeP>2293<SeP>1311<SeP>1008<SeP>973<SeP>1082<SeP>788<SeP>849<SeP>867<SeP>814<SeP>874<SeP>1041<SeP>790<SeP>809<SeP>849<SeP>988<SeP>788<SeP>678<SeP>907<SeP>836<SeP>822<SeP>916<SeP>833<SeP>824<SeP>731<SeP>812<SeP>1093<SeP>776<SeP>844<SeP>963<SeP>864<SeP>1129<SeP>972<SeP>758<SeP>520<SeP>929<SeP>835<SeP>1262<SeP>869<SeP>974<SeP>1229<SeP>1258<SeP>855<SeP>965<SeP>846<SeP>961<SeP>729<SeP>1077<SeP>983<SeP>934<SeP>899<SeP>956<SeP>1014<SeP>1073<SeP>998<SeP>950<SeP>1097<SeP>901<SeP>873<SeP>1713<SeP>1607<SeP>1254<SeP>979<SeP>1040<SeP>1185<SeP>986<SeP>952<SeP>718<SeP>719<SeP>994<SeP>1075<SeP>856<SeP>998<SeP>1243<SeP>1168<SeP>1141<SeP>1274<SeP>1053<SeP>1372<SeP>1111<SeP>1486<SeP>1202<SeP>1520<SeP>2076<SeP>1309<SeP>809<SeP>944<SeP>1080<SeP>1024<SeP>794<SeP>705<SeP>866<SeP>952<SeP>831<SeP>4229<SeP>4216<SeP>1978<SeP>1488<SeP>1132<SeP>845<SeP>1047<SeP>915<SeP>940<SeP>1048<SeP>1048<SeP>1000<SeP>1035<SeP>2214<SeP>1255<SeP>1112<SeP>1176<SeP>1339<SeP>1130<SeP>1082<SeP>911<SeP>1097<SeP>1105<SeP>1054<SeP>1049<SeP>1143<SeP>1098<SeP>977<SeP>925<SeP>1271<SeP>1127<SeP>1122<SeP>1207<SeP>1349<SeP>1137<SeP>1639<SeP>1148<SeP>1123<SeP>1232<SeP>1052<SeP>1980<SeP>1198<SeP>1711<SeP>1771<SeP>1438<SeP>1994<SeP>1629<SeP>1211<SeP>1194<SeP>1235<SeP>1186<SeP>1454<SeP>1327<SeP>1260<SeP>1355<SeP>1855<SeP>1435<SeP>1443<SeP>1292<SeP>1493<SeP>1209<SeP>1042<SeP>1280<SeP>1117<SeP>1147<SeP>1253<SeP>1355<SeP>1095<SeP>1610<SeP>1698<SeP>1265<SeP>1501<SeP>1596<SeP>1292<SeP>981<SeP>972<SeP>1006<SeP>994<SeP>816<SeP>991<SeP>1741<SeP>1188<SeP>1040<SeP>1119<SeP>958<SeP>768<SeP>1106<SeP>1369<SeP>799<SeP>968<SeP>890<SeP>1292<SeP>1514<SeP>1538<SeP>1110<SeP>1125<SeP>908<SeP>1740<SeP>1208<SeP>1066<SeP>1136<SeP>903<SeP>1642<SeP>978<SeP>955<SeP>1208<SeP>1074<SeP>830<SeP>907<SeP>1129<SeP>1391<SeP>1561<SeP>1457<SeP>1378<SeP>1277<SeP>904<SeP>1175<SeP>1175<SeP>1202<SeP>1094<SeP>985<SeP>1071<SeP>1176<SeP>1319<SeP>1488<SeP>1268<SeP>1541<SeP>1353<SeP>1598<SeP>1360<SeP>1307<SeP>1462<SeP>1443<SeP>1387<SeP>1245<SeP>1702<SeP>1391<SeP>1610<SeP>1417<SeP>1346<SeP>1404<SeP>1255<SeP>1279<SeP>1376<SeP>1403<SeP>1625<SeP>1240<SeP>1289<SeP>1276<SeP>1326<SeP>1312<SeP>1076<SeP>1523<SeP>1887<SeP>1647<SeP>1180<SeP>580<SeP>1491<SeP>1871<SeP>1220<SeP>1367<SeP>1189<SeP>1142<SeP>1325<SeP>1390<SeP>1225<SeP>1554<SeP>1730<SeP>1360<SeP>1553<SeP>1709<SeP>1309<SeP>1417<SeP>1465<SeP>1593<SeP>1721<SeP>988<SeP>1198<SeP>1866<SeP>1741<SeP>1766<SeP>1822<SeP>1703<SeP>1589<SeP>1596<SeP>1510<SeP>1567<SeP>1488<SeP>1683<SeP>1702";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "153<SeP>614<SeP>992<SeP>705<SeP>563<SeP>206<SeP>6966<SeP>515<SeP>9169<SeP>968<SeP>390<SeP>1136<SeP>1229<SeP>291<SeP>156<SeP>459<SeP>113<SeP>761<SeP>283<SeP>4932<SeP>7428<SeP>6971<SeP>7804<SeP>6316<SeP>253<SeP>309<SeP>390<SeP>174<SeP>757<SeP>5517<SeP>73<SeP>386<SeP>349<SeP>366<SeP>3386<SeP>9617<SeP>8373<SeP>10403<SeP>9628<SeP>5713<SeP>6218<SeP>7872<SeP>7821<SeP>10102<SeP>7481<SeP>7186<SeP>9218<SeP>8879<SeP>7469<SeP>8314<SeP>5270<SeP>9649<SeP>9724<SeP>6064<SeP>8399<SeP>8107<SeP>8962<SeP>18614<SeP>15798<SeP>9789<SeP>11073<SeP>7065<SeP>7593<SeP>8586<SeP>9010<SeP>8285<SeP>7248<SeP>6351<SeP>6685<SeP>6568<SeP>4703<SeP>4725<SeP>6458<SeP>5478<SeP>6373<SeP>7289<SeP>5521<SeP>5354<SeP>5256<SeP>7165<SeP>4625<SeP>6711<SeP>5243<SeP>5613<SeP>6713<SeP>5374<SeP>5614<SeP>5246<SeP>9974<SeP>20957<SeP>33897<SeP>9579<SeP>9330<SeP>5710<SeP>7161<SeP>12008<SeP>7035<SeP>3985<SeP>5428<SeP>5057<SeP>4412<SeP>6432<SeP>6784<SeP>7559<SeP>6018<SeP>5982<SeP>4031<SeP>7757<SeP>8176<SeP>7569<SeP>8454<SeP>3596<SeP>7128<SeP>10781<SeP>7875<SeP>3337<SeP>3635<SeP>6933<SeP>8864<SeP>5570<SeP>7754<SeP>8186<SeP>3180<SeP>3034<SeP>1151<SeP>1656<SeP>1817<SeP>2494<SeP>830<SeP>1319<SeP>654<SeP>1631<SeP>1200<SeP>1170<SeP>1189<SeP>757<SeP>1135<SeP>723<SeP>1517<SeP>1463<SeP>1057<SeP>1638<SeP>2052<SeP>1453<SeP>10005<SeP>7024<SeP>10451<SeP>8301<SeP>6005<SeP>11163<SeP>6554<SeP>9358<SeP>9284<SeP>10299<SeP>11862<SeP>7319<SeP>13437<SeP>11370<SeP>7842<SeP>11349<SeP>5423<SeP>5292<SeP>7002<SeP>25436<SeP>6256<SeP>8299<SeP>7865<SeP>17075<SeP>8795<SeP>7761<SeP>6011<SeP>6687<SeP>7474<SeP>25633<SeP>7121<SeP>9678<SeP>9176<SeP>5688<SeP>5227<SeP>7406<SeP>15139<SeP>5762<SeP>13134<SeP>7043<SeP>7091<SeP>8427<SeP>6274<SeP>3883<SeP>6159<SeP>7077<SeP>5652<SeP>7065<SeP>7088<SeP>5203<SeP>21077<SeP>6671<SeP>6021<SeP>6267<SeP>8189<SeP>10544<SeP>7011<SeP>3897<SeP>4730<SeP>6334<SeP>2924<SeP>4614<SeP>4142<SeP>657<SeP>100<SeP>645<SeP>211<SeP>677<SeP>989<SeP>368<SeP>603<SeP>1003<SeP>1391<SeP>3183<SeP>22803<SeP>674<SeP>2650<SeP>3702<SeP>3568<SeP>3045<SeP>7075<SeP>3976<SeP>2549<SeP>3856<SeP>2921<SeP>2753<SeP>3452<SeP>4214<SeP>2224<SeP>3296<SeP>1272<SeP>2763<SeP>1094<SeP>1916<SeP>1595<SeP>1378<SeP>1001<SeP>1103<SeP>1611<SeP>26519<SeP>1691<SeP>4229<SeP>4040<SeP>1959<SeP>3344<SeP>3001<SeP>1885<SeP>3360<SeP>2630<SeP>3626<SeP>2566<SeP>2451<SeP>3288<SeP>3962<SeP>5982<SeP>5259<SeP>4318<SeP>2701<SeP>2957<SeP>3680<SeP>3730<SeP>6558<SeP>8695<SeP>4239<SeP>2160<SeP>3363<SeP>3363<SeP>4640<SeP>2956<SeP>3048<SeP>2380<SeP>4474<SeP>4986<SeP>3670<SeP>5826<SeP>4353<SeP>5960<SeP>4835<SeP>5375<SeP>4955<SeP>22132<SeP>5641<SeP>10680<SeP>1741<SeP>3241<SeP>3863<SeP>3656<SeP>5288<SeP>3562<SeP>4635<SeP>4546<SeP>4813<SeP>3099<SeP>4161<SeP>1944<SeP>1457<SeP>2201<SeP>3353<SeP>2528<SeP>3101<SeP>3379<SeP>4623<SeP>3361<SeP>3377<SeP>4372<SeP>3394<SeP>2902<SeP>5724<SeP>7899<SeP>6107<SeP>4600<SeP>5182<SeP>4643<SeP>3546<SeP>3543<SeP>4588<SeP>5707<SeP>5375<SeP>4852<SeP>3969<SeP>1778<SeP>394<SeP>2351<SeP>1442<SeP>744<SeP>1913<SeP>1547<SeP>829<SeP>2978<SeP>3738<SeP>6442<SeP>6027<SeP>32483<SeP>5427<SeP>8998<SeP>19400<SeP>5361<SeP>4964<SeP>6100<SeP>3957<SeP>24771<SeP>5379<SeP>4724<SeP>4875<SeP>5656<SeP>18291<SeP>17027<SeP>4351<SeP>3399<SeP>4428<SeP>5084<SeP>6065<SeP>3335<SeP>3123<SeP>3416<SeP>4686<SeP>5299<SeP>3999<SeP>18082<SeP>5820<SeP>6566<SeP>4553<SeP>1551<SeP>3815<SeP>4727<SeP>3809<SeP>4196<SeP>2657<SeP>3863<SeP>2574<SeP>3960<SeP>3615<SeP>7256<SeP>8811<SeP>9768<SeP>8765<SeP>8621<SeP>7460<SeP>6749<SeP>5097<SeP>4736<SeP>9652<SeP>19758<SeP>3217<SeP>4362<SeP>3204<SeP>11404<SeP>5070<SeP>4208<SeP>4474<SeP>4544<SeP>3325<SeP>6288<SeP>9867<SeP>6805<SeP>3769";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:51:45<SeP>2023-07-28 21:43:30<SeP>2023-07-30 08:35:15<SeP>2023-07-31 19:27:00<SeP>2023-08-02 06:18:45<SeP>2023-08-03 17:10:30<SeP>2023-08-05 04:02:15<SeP>2023-08-06 14:54:00<SeP>2023-08-08 01:45:45<SeP>2023-08-09 12:37:30<SeP>2023-08-10 23:29:15<SeP>2023-08-12 10:21:00<SeP>2023-08-13 21:12:45<SeP>2023-08-15 08:04:30<SeP>2023-08-16 18:56:15<SeP>2023-08-18 05:48:00<SeP>2023-08-19 16:39:45<SeP>2023-08-21 03:31:30<SeP>2023-08-22 14:23:15<SeP>2023-08-24 01:15:00<SeP>2023-08-25 12:06:45<SeP>2023-08-26 22:58:30<SeP>2023-08-28 09:50:15<SeP>2023-08-29 20:42:00<SeP>2023-08-31 07:33:45<SeP>2023-09-01 18:25:30<SeP>2023-09-03 05:17:15<SeP>2023-09-04 16:09:00<SeP>2023-09-06 03:00:45<SeP>2023-09-07 13:52:30<SeP>2023-09-09 00:44:15<SeP>2023-09-10 11:36:00<SeP>2023-09-11 22:27:45<SeP>2023-09-13 09:19:30<SeP>2023-09-14 20:11:15<SeP>2023-09-16 07:03:00<SeP>2023-09-17 17:54:45<SeP>2023-09-19 04:46:30<SeP>2023-09-20 15:38:15<SeP>2023-09-22 02:30:00<SeP>2023-09-23 13:21:45<SeP>2023-09-25 00:13:30<SeP>2023-09-26 11:05:15<SeP>2023-09-27 21:57:00<SeP>2023-09-29 08:48:45<SeP>2023-09-30 19:40:30<SeP>2023-10-02 06:32:15<SeP>2023-10-03 17:24:00<SeP>2023-10-05 04:15:45<SeP>2023-10-06 15:07:30<SeP>2023-10-08 01:59:15<SeP>2023-10-09 12:51:00<SeP>2023-10-10 23:42:45<SeP>2023-10-12 10:34:30<SeP>2023-10-13 21:26:15<SeP>2023-10-15 08:18:00<SeP>2023-10-16 19:09:45<SeP>2023-10-18 06:01:30<SeP>2023-10-19 16:53:15<SeP>2023-10-21 03:45:00<SeP>2023-10-22 14:36:45<SeP>2023-10-24 01:28:30<SeP>2023-10-25 12:20:15<SeP>2023-10-26 23:12:00<SeP>2023-10-28 10:03:45<SeP>2023-10-29 20:55:30<SeP>2023-10-31 07:47:15<SeP>2023-11-01 18:39:00<SeP>2023-11-03 05:30:45<SeP>2023-11-04 16:22:30<SeP>2023-11-06 02:14:15<SeP>2023-11-07 13:06:00<SeP>2023-11-08 23:57:45<SeP>2023-11-10 10:49:30<SeP>2023-11-11 21:41:15<SeP>2023-11-13 08:33:00<SeP>2023-11-14 19:24:45<SeP>2023-11-16 06:16:30<SeP>2023-11-17 17:08:15<SeP>2023-11-19 04:00:00<SeP>2023-11-20 14:51:45<SeP>2023-11-22 01:43:30<SeP>2023-11-23 12:35:15<SeP>2023-11-24 23:27:00<SeP>2023-11-26 10:18:45<SeP>2023-11-27 21:10:30<SeP>2023-11-29 08:02:15<SeP>2023-11-30 18:54:00<SeP>2023-12-02 05:45:45<SeP>2023-12-03 16:37:30<SeP>2023-12-05 03:29:15<SeP>2023-12-06 14:21:00<SeP>2023-12-08 01:12:45<SeP>2023-12-09 12:04:30<SeP>2023-12-10 22:56:15<SeP>2023-12-12 09:48:00<SeP>2023-12-13 20:39:45<SeP>2023-12-15 07:31:30<SeP>2023-12-16 18:23:15<SeP>2023-12-18 05:15:00<SeP>2023-12-19 16:06:45<SeP>2023-12-21 02:58:30<SeP>2023-12-22 13:50:15<SeP>2023-12-24 00:42:00<SeP>2023-12-25 11:33:45<SeP>2023-12-26 22:25:30<SeP>2023-12-28 09:17:15<SeP>2023-12-29 20:09:00<SeP>2023-12-31 07:00:45<SeP>2024-01-01 17:52:30<SeP>2024-01-03 04:44:15<SeP>2024-01-04 15:36:00<SeP>2024-01-06 02:27:45<SeP>2024-01-07 13:19:30<SeP>2024-01-09 00:11:15<SeP>2024-01-10 11:03:00<SeP>2024-01-11 21:54:45<SeP>2024-01-13 08:46:30<SeP>2024-01-14 19:38:15<SeP>2024-01-16 06:30:00<SeP>2024-01-17 17:21:45<SeP>2024-01-19 04:13:30<SeP>2024-01-20 15:05:15<SeP>2024-01-22 01:57:00<SeP>2024-01-23 12:48:45<SeP>2024-01-24 23:40:30<SeP>2024-01-26 10:32:15<SeP>2024-01-27 21:24:00<SeP>2024-01-29 08:15:45<SeP>2024-01-30 19:07:30<SeP>2024-02-01 05:59:15<SeP>2024-02-02 16:51:00<SeP>2024-02-04 03:42:45<SeP>2024-02-05 14:34:30<SeP>2024-02-07 01:26:15<SeP>2024-02-08 12:18:00<SeP>2024-02-09 23:09:45<SeP>2024-02-11 10:01:30<SeP>2024-02-12 20:53:15<SeP>2024-02-14 07:45:00<SeP>2024-02-15 18:36:45<SeP>2024-02-17 05:28:30<SeP>2024-02-18 16:20:15<SeP>2024-02-20 03:12:00<SeP>2024-02-21 14:03:45<SeP>2024-02-23 00:55:30<SeP>2024-02-24 11:47:15<SeP>2024-02-25 22:39:00<SeP>2024-02-27 09:30:45<SeP>2024-02-28 20:22:30<SeP>2024-03-01 07:14:15<SeP>2024-03-02 18:06:00<SeP>2024-03-04 04:57:45<SeP>2024-03-05 15:49:30<SeP>2024-03-07 02:41:15<SeP>2024-03-08 13:33:00<SeP>2024-03-10 00:24:45<SeP>2024-03-11 12:16:30<SeP>2024-03-12 23:08:15<SeP>2024-03-14 10:00:00<SeP>2024-03-15 20:51:45<SeP>2024-03-17 07:43:30<SeP>2024-03-18 18:35:15<SeP>2024-03-20 05:27:00<SeP>2024-03-21 16:18:45<SeP>2024-03-23 03:10:30<SeP>2024-03-24 14:02:15<SeP>2024-03-26 00:54:00<SeP>2024-03-27 11:45:45<SeP>2024-03-28 22:37:30<SeP>2024-03-30 09:29:15<SeP>2024-03-31 20:21:00<SeP>2024-04-02 07:12:45<SeP>2024-04-03 18:04:30<SeP>2024-04-05 04:56:15<SeP>2024-04-06 15:48:00<SeP>2024-04-08 02:39:45<SeP>2024-04-09 13:31:30<SeP>2024-04-11 00:23:15<SeP>2024-04-12 11:15:00<SeP>2024-04-13 22:06:45<SeP>2024-04-15 08:58:30<SeP>2024-04-16 19:50:15<SeP>2024-04-18 06:42:00<SeP>2024-04-19 17:33:45<SeP>2024-04-21 04:25:30<SeP>2024-04-22 15:17:15<SeP>2024-04-24 02:09:00<SeP>2024-04-25 13:00:45<SeP>2024-04-26 23:52:30<SeP>2024-04-28 10:44:15<SeP>2024-04-29 21:36:00<SeP>2024-05-01 08:27:45<SeP>2024-05-02 19:19:30<SeP>2024-05-04 06:11:15<SeP>2024-05-05 17:03:00<SeP>2024-05-07 03:54:45<SeP>2024-05-08 14:46:30<SeP>2024-05-10 01:38:15<SeP>2024-05-11 12:30:00<SeP>2024-05-12 23:21:45<SeP>2024-05-14 10:13:30<SeP>2024-05-15 21:05:15<SeP>2024-05-17 07:57:00<SeP>2024-05-18 18:48:45<SeP>2024-05-20 05:40:30<SeP>2024-05-21 16:32:15<SeP>2024-05-23 03:24:00<SeP>2024-05-24 14:15:45<SeP>2024-05-26 01:07:30<SeP>2024-05-27 11:59:15<SeP>2024-05-28 22:51:00<SeP>2024-05-30 09:42:45<SeP>2024-05-31 20:34:30<SeP>2024-06-02 07:26:15<SeP>2024-06-03 18:18:00<SeP>2024-06-05 05:09:45<SeP>2024-06-06 16:01:30<SeP>2024-06-08 02:53:15<SeP>2024-06-09 13:45:00<SeP>2024-06-11 00:36:45<SeP>2024-06-12 11:28:30<SeP>2024-06-13 22:20:15<SeP>2024-06-15 09:12:00<SeP>2024-06-16 20:03:45<SeP>2024-06-18 06:55:30<SeP>2024-06-19 17:47:15<SeP>2024-06-21 04:39:00<SeP>2024-06-22 15:30:45<SeP>2024-06-24 02:22:30<SeP>2024-06-25 13:14:15<SeP>2024-06-27 00:06:00<SeP>2024-06-28 10:57:45<SeP>2024-06-29 21:49:30<SeP>2024-07-01 08:41:15<SeP>2024-07-02 19:33:00<SeP>2024-07-04 06:24:45<SeP>2024-07-05 17:16:30<SeP>2024-07-07 04:08:15<SeP>2024-07-08 15:00:00<SeP>2024-07-10 01:51:45<SeP>2024-07-11 12:43:30<SeP>2024-07-12 23:35:15<SeP>2024-07-14 10:27:00<SeP>2024-07-15 21:18:45<SeP>2024-07-17 08:10:30<SeP>2024-07-18 19:02:15<SeP>2024-07-20 05:54:00<SeP>2024-07-21 16:45:45<SeP>2024-07-23 03:37:30<SeP>2024-07-24 14:29:15<SeP>2024-07-26 01:21:00<SeP>2024-07-27 12:12:45<SeP>2024-07-28 23:04:30<SeP>2024-07-30 09:56:15<SeP>2024-07-31 20:48:00<SeP>2024-08-02 07:39:45<SeP>2024-08-03 18:31:30<SeP>2024-08-05 05:23:15<SeP>2024-08-06 16:15:00<SeP>2024-08-08 03:06:45<SeP>2024-08-09 13:58:30<SeP>2024-08-11 00:50:15<SeP>2024-08-12 11:42:00<SeP>2024-08-13 22:33:45<SeP>2024-08-15 09:25:30<SeP>2024-08-16 20:17:15<SeP>2024-08-18 07:09:00<SeP>2024-08-19 18:00:45<SeP>2024-08-21 04:52:30<SeP>2024-08-22 15:44:15<SeP>2024-08-24 02:36:00<SeP>2024-08-25 13:27:45<SeP>2024-08-27 00:19:30<SeP>2024-08-28 11:11:15<SeP>2024-08-29 22:03:00<SeP>2024-08-31 08:54:45<SeP>2024-09-01 19:46:30<SeP>2024-09-03 06:38:15<SeP>2024-09-04 17:30:00<SeP>2024-09-06 04:21:45<SeP>2024-09-07 15:13:30<SeP>2024-09-09 02:05:15<SeP>2024-09-10 12:57:00<SeP>2024-09-11 23:48:45<SeP>2024-09-13 10:40:30<SeP>2024-09-14 21:32:15<SeP>2024-09-16 08:24:00<SeP>2024-09-17 19:15:45<SeP>2024-09-19 06:07:30<SeP>2024-09-20 16:59:15<SeP>2024-09-22 03:51:00<SeP>2024-09-23 14:42:45<SeP>2024-09-25 01:34:30<SeP>2024-09-26 12:26:15<SeP>2024-09-27 23:18:00<SeP>2024-09-29 10:09:45<SeP>2024-09-30 21:01:30<SeP>2024-10-02 07:53:15<SeP>2024-10-03 18:45:00<SeP>2024-10-05 05:36:45<SeP>2024-10-06 16:28:30<SeP>2024-10-08 03:20:15<SeP>2024-10-09 14:12:00<SeP>2024-10-11 01:03:45<SeP>2024-10-12 11:55:30<SeP>2024-10-13 22:47:15<SeP>2024-10-15 09:39:00<SeP>2024-10-16 20:30:45<SeP>2024-10-18 07:22:30<SeP>2024-10-19 18:14:15<SeP>2024-10-21 05:06:00<SeP>2024-10-22 15:57:45<SeP>2024-10-24 02:49:30<SeP>2024-10-25 13:41:15<SeP>2024-10-27 00:33:00<SeP>2024-10-28 11:24:45<SeP>2024-10-29 22:16:30<SeP>2024-10-31 09:08:15<SeP>2024-11-01 20:00:00<SeP>2024-11-03 05:51:45<SeP>2024-11-04 16:43:30<SeP>2024-11-06 03:35:15<SeP>2024-11-07 14:27:00<SeP>2024-11-09 01:18:45<SeP>2024-11-10 12:10:30<SeP>2024-11-11 23:02:15<SeP>2024-11-13 09:54:00<SeP>2024-11-14 20:45:45<SeP>2024-11-16 07:37:30<SeP>2024-11-17 18:29:15<SeP>2024-11-19 05:21:00<SeP>2024-11-20 16:12:45<SeP>2024-11-22 03:04:30<SeP>2024-11-23 13:56:15<SeP>2024-11-25 00:48:00<SeP>2024-11-26 11:39:45<SeP>2024-11-27 22:31:30<SeP>2024-11-29 09:23:15<SeP>2024-11-30 20:15:00<SeP>2024-12-02 07:06:45<SeP>2024-12-03 17:58:30<SeP>2024-12-05 04:50:15<SeP>2024-12-06 15:42:00<SeP>2024-12-08 02:33:45<SeP>2024-12-09 13:25:30<SeP>2024-12-11 00:17:15<SeP>2024-12-12 11:09:00<SeP>2024-12-13 22:00:45<SeP>2024-12-15 08:52:30<SeP>2024-12-16 19:44:15<SeP>2024-12-18 06:36:00<SeP>2024-12-19 17:27:45<SeP>2024-12-21 04:19:30<SeP>2024-12-22 15:11:15<SeP>2024-12-24 02:03:00<SeP>2024-12-25 12:54:45<SeP>2024-12-26 23:46:30<SeP>2024-12-28 10:38:15<SeP>2024-12-29 21:30:00<SeP>2024-12-31 08:21:45<SeP>2025-01-01 19:13:30<SeP>2025-01-03 06:05:15<SeP>2025-01-04 16:57:00<SeP>2025-01-06 03:48:45<SeP>2025-01-07 14:40:30<SeP>2025-01-09 01:32:15<SeP>2025-01-10 12:24:00<SeP>2025-01-11 23:15:45<SeP>2025-01-13 10:07:30<SeP>2025-01-14 20:59:15<SeP>2025-01-16 07:51:00<SeP>2025-01-17 18:42:45<SeP>2025-01-19 05:34:30<SeP>2025-01-20 16:26:15<SeP>2025-01-22 03:18:00<SeP>2025-01-23 14:09:45<SeP>2025-01-25 01:01:30<SeP>2025-01-26 11:53:15<SeP>2025-01-27 22:45:00<SeP>2025-01-29 09:36:45<SeP>2025-01-30 20:28:30<SeP>2025-02-01 07:20:15<SeP>2025-02-02 18:12:00<SeP>2025-02-04 05:03:45<SeP>2025-02-05 15:55:30<SeP>2025-02-07 02:47:15<SeP>2025-02-08 13:39:00<SeP>2025-02-10 00:30:45<SeP>2025-02-11 11:22:30<SeP>2025-02-12 22:14:15<SeP>2025-02-14 09:06:00<SeP>2025-02-15 19:57:45<SeP>2025-02-17 06:49:30<SeP>2025-02-18 17:41:15<SeP>2025-02-20 04:33:00<SeP>2025-02-21 15:24:45<SeP>2025-02-23 02:16:30<SeP>2025-02-24 13:08:15";
  const itemLabel       = "Escaneos";
  const itemData        = "762<SeP>1477<SeP>1378<SeP>1444<SeP>1256<SeP>1690<SeP>959<SeP>948<SeP>1184<SeP>3347<SeP>1920<SeP>2373<SeP>2373<SeP>1935<SeP>743<SeP>912<SeP>1399<SeP>2509<SeP>1410<SeP>1807<SeP>1336<SeP>913<SeP>902<SeP>1410<SeP>814<SeP>952<SeP>811<SeP>1828<SeP>2651<SeP>921<SeP>844<SeP>1405<SeP>1257<SeP>828<SeP>2887<SeP>1672<SeP>2607<SeP>1818<SeP>1807<SeP>1407<SeP>1259<SeP>1768<SeP>1753<SeP>2161<SeP>1586<SeP>1602<SeP>1645<SeP>1706<SeP>1683<SeP>1715<SeP>1962<SeP>1655<SeP>1612<SeP>2793<SeP>2115<SeP>1400<SeP>1725<SeP>1995<SeP>2319<SeP>1475<SeP>2732<SeP>2494<SeP>1429<SeP>1494<SeP>1404<SeP>1663<SeP>1715<SeP>1570<SeP>1185<SeP>1421<SeP>1175<SeP>2378<SeP>1209<SeP>1137<SeP>1248<SeP>2349<SeP>7208<SeP>1118<SeP>1316<SeP>1397<SeP>1620<SeP>1963<SeP>1076<SeP>6717<SeP>1513<SeP>1625<SeP>890<SeP>1807<SeP>2693<SeP>1206<SeP>973<SeP>1033<SeP>1156<SeP>1682<SeP>2300<SeP>1028<SeP>1589<SeP>2987<SeP>6331<SeP>1274<SeP>958<SeP>960<SeP>893<SeP>948<SeP>967<SeP>1009<SeP>1018<SeP>4274<SeP>1865<SeP>1371<SeP>1501<SeP>573<SeP>1060<SeP>1578<SeP>1135<SeP>999<SeP>985<SeP>2293<SeP>1311<SeP>1008<SeP>973<SeP>1082<SeP>788<SeP>849<SeP>867<SeP>814<SeP>874<SeP>1041<SeP>790<SeP>809<SeP>849<SeP>988<SeP>788<SeP>678<SeP>907<SeP>836<SeP>822<SeP>916<SeP>833<SeP>824<SeP>731<SeP>812<SeP>1093<SeP>776<SeP>844<SeP>963<SeP>864<SeP>1129<SeP>972<SeP>758<SeP>520<SeP>929<SeP>835<SeP>1262<SeP>869<SeP>974<SeP>1229<SeP>1258<SeP>855<SeP>965<SeP>846<SeP>961<SeP>729<SeP>1077<SeP>983<SeP>934<SeP>899<SeP>956<SeP>1014<SeP>1073<SeP>998<SeP>950<SeP>1097<SeP>901<SeP>873<SeP>1713<SeP>1607<SeP>1254<SeP>979<SeP>1040<SeP>1185<SeP>986<SeP>952<SeP>718<SeP>719<SeP>994<SeP>1075<SeP>856<SeP>998<SeP>1243<SeP>1168<SeP>1141<SeP>1274<SeP>1053<SeP>1372<SeP>1111<SeP>1486<SeP>1202<SeP>1520<SeP>2076<SeP>1309<SeP>809<SeP>944<SeP>1080<SeP>1024<SeP>794<SeP>705<SeP>866<SeP>952<SeP>831<SeP>4229<SeP>4216<SeP>1978<SeP>1488<SeP>1132<SeP>845<SeP>1047<SeP>915<SeP>940<SeP>1048<SeP>1048<SeP>1000<SeP>1035<SeP>2214<SeP>1255<SeP>1112<SeP>1176<SeP>1339<SeP>1130<SeP>1082<SeP>911<SeP>1097<SeP>1105<SeP>1054<SeP>1049<SeP>1143<SeP>1098<SeP>977<SeP>925<SeP>1271<SeP>1127<SeP>1122<SeP>1207<SeP>1349<SeP>1137<SeP>1639<SeP>1148<SeP>1123<SeP>1232<SeP>1052<SeP>1980<SeP>1198<SeP>1711<SeP>1771<SeP>1438<SeP>1994<SeP>1629<SeP>1211<SeP>1194<SeP>1235<SeP>1186<SeP>1454<SeP>1327<SeP>1260<SeP>1355<SeP>1855<SeP>1435<SeP>1443<SeP>1292<SeP>1493<SeP>1209<SeP>1042<SeP>1280<SeP>1117<SeP>1147<SeP>1253<SeP>1355<SeP>1095<SeP>1610<SeP>1698<SeP>1265<SeP>1501<SeP>1596<SeP>1292<SeP>981<SeP>972<SeP>1006<SeP>994<SeP>816<SeP>991<SeP>1741<SeP>1188<SeP>1040<SeP>1119<SeP>958<SeP>768<SeP>1106<SeP>1369<SeP>799<SeP>968<SeP>890<SeP>1292<SeP>1514<SeP>1538<SeP>1110<SeP>1125<SeP>908<SeP>1740<SeP>1208<SeP>1066<SeP>1136<SeP>903<SeP>1642<SeP>978<SeP>955<SeP>1208<SeP>1074<SeP>830<SeP>907<SeP>1129<SeP>1391<SeP>1561<SeP>1457<SeP>1378<SeP>1277<SeP>904<SeP>1175<SeP>1175<SeP>1202<SeP>1094<SeP>985<SeP>1071<SeP>1176<SeP>1319<SeP>1488<SeP>1268<SeP>1541<SeP>1353<SeP>1598<SeP>1360<SeP>1307<SeP>1462<SeP>1443<SeP>1387<SeP>1245<SeP>1702<SeP>1391<SeP>1610<SeP>1417<SeP>1346<SeP>1404<SeP>1255<SeP>1279<SeP>1376<SeP>1403<SeP>1625<SeP>1240<SeP>1289<SeP>1276<SeP>1326<SeP>1312<SeP>1076<SeP>1523<SeP>1887<SeP>1647<SeP>1180<SeP>580<SeP>1491<SeP>1871<SeP>1220<SeP>1367<SeP>1189<SeP>1142<SeP>1325<SeP>1390<SeP>1225<SeP>1554<SeP>1730<SeP>1360<SeP>1553<SeP>1709<SeP>1309<SeP>1417<SeP>1465<SeP>1593<SeP>1721<SeP>988<SeP>1198<SeP>1866<SeP>1741<SeP>1766<SeP>1822<SeP>1703<SeP>1589<SeP>1596<SeP>1510<SeP>1567<SeP>1488<SeP>1683<SeP>1702";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:51:45<SeP>2023-07-28 21:43:30<SeP>2023-07-30 08:35:15<SeP>2023-07-31 19:27:00<SeP>2023-08-02 06:18:45<SeP>2023-08-03 17:10:30<SeP>2023-08-05 04:02:15<SeP>2023-08-06 14:54:00<SeP>2023-08-08 01:45:45<SeP>2023-08-09 12:37:30<SeP>2023-08-10 23:29:15<SeP>2023-08-12 10:21:00<SeP>2023-08-13 21:12:45<SeP>2023-08-15 08:04:30<SeP>2023-08-16 18:56:15<SeP>2023-08-18 05:48:00<SeP>2023-08-19 16:39:45<SeP>2023-08-21 03:31:30<SeP>2023-08-22 14:23:15<SeP>2023-08-24 01:15:00<SeP>2023-08-25 12:06:45<SeP>2023-08-26 22:58:30<SeP>2023-08-28 09:50:15<SeP>2023-08-29 20:42:00<SeP>2023-08-31 07:33:45<SeP>2023-09-01 18:25:30<SeP>2023-09-03 05:17:15<SeP>2023-09-04 16:09:00<SeP>2023-09-06 03:00:45<SeP>2023-09-07 13:52:30<SeP>2023-09-09 00:44:15<SeP>2023-09-10 11:36:00<SeP>2023-09-11 22:27:45<SeP>2023-09-13 09:19:30<SeP>2023-09-14 20:11:15<SeP>2023-09-16 07:03:00<SeP>2023-09-17 17:54:45<SeP>2023-09-19 04:46:30<SeP>2023-09-20 15:38:15<SeP>2023-09-22 02:30:00<SeP>2023-09-23 13:21:45<SeP>2023-09-25 00:13:30<SeP>2023-09-26 11:05:15<SeP>2023-09-27 21:57:00<SeP>2023-09-29 08:48:45<SeP>2023-09-30 19:40:30<SeP>2023-10-02 06:32:15<SeP>2023-10-03 17:24:00<SeP>2023-10-05 04:15:45<SeP>2023-10-06 15:07:30<SeP>2023-10-08 01:59:15<SeP>2023-10-09 12:51:00<SeP>2023-10-10 23:42:45<SeP>2023-10-12 10:34:30<SeP>2023-10-13 21:26:15<SeP>2023-10-15 08:18:00<SeP>2023-10-16 19:09:45<SeP>2023-10-18 06:01:30<SeP>2023-10-19 16:53:15<SeP>2023-10-21 03:45:00<SeP>2023-10-22 14:36:45<SeP>2023-10-24 01:28:30<SeP>2023-10-25 12:20:15<SeP>2023-10-26 23:12:00<SeP>2023-10-28 10:03:45<SeP>2023-10-29 20:55:30<SeP>2023-10-31 07:47:15<SeP>2023-11-01 18:39:00<SeP>2023-11-03 05:30:45<SeP>2023-11-04 16:22:30<SeP>2023-11-06 02:14:15<SeP>2023-11-07 13:06:00<SeP>2023-11-08 23:57:45<SeP>2023-11-10 10:49:30<SeP>2023-11-11 21:41:15<SeP>2023-11-13 08:33:00<SeP>2023-11-14 19:24:45<SeP>2023-11-16 06:16:30<SeP>2023-11-17 17:08:15<SeP>2023-11-19 04:00:00<SeP>2023-11-20 14:51:45<SeP>2023-11-22 01:43:30<SeP>2023-11-23 12:35:15<SeP>2023-11-24 23:27:00<SeP>2023-11-26 10:18:45<SeP>2023-11-27 21:10:30<SeP>2023-11-29 08:02:15<SeP>2023-11-30 18:54:00<SeP>2023-12-02 05:45:45<SeP>2023-12-03 16:37:30<SeP>2023-12-05 03:29:15<SeP>2023-12-06 14:21:00<SeP>2023-12-08 01:12:45<SeP>2023-12-09 12:04:30<SeP>2023-12-10 22:56:15<SeP>2023-12-12 09:48:00<SeP>2023-12-13 20:39:45<SeP>2023-12-15 07:31:30<SeP>2023-12-16 18:23:15<SeP>2023-12-18 05:15:00<SeP>2023-12-19 16:06:45<SeP>2023-12-21 02:58:30<SeP>2023-12-22 13:50:15<SeP>2023-12-24 00:42:00<SeP>2023-12-25 11:33:45<SeP>2023-12-26 22:25:30<SeP>2023-12-28 09:17:15<SeP>2023-12-29 20:09:00<SeP>2023-12-31 07:00:45<SeP>2024-01-01 17:52:30<SeP>2024-01-03 04:44:15<SeP>2024-01-04 15:36:00<SeP>2024-01-06 02:27:45<SeP>2024-01-07 13:19:30<SeP>2024-01-09 00:11:15<SeP>2024-01-10 11:03:00<SeP>2024-01-11 21:54:45<SeP>2024-01-13 08:46:30<SeP>2024-01-14 19:38:15<SeP>2024-01-16 06:30:00<SeP>2024-01-17 17:21:45<SeP>2024-01-19 04:13:30<SeP>2024-01-20 15:05:15<SeP>2024-01-22 01:57:00<SeP>2024-01-23 12:48:45<SeP>2024-01-24 23:40:30<SeP>2024-01-26 10:32:15<SeP>2024-01-27 21:24:00<SeP>2024-01-29 08:15:45<SeP>2024-01-30 19:07:30<SeP>2024-02-01 05:59:15<SeP>2024-02-02 16:51:00<SeP>2024-02-04 03:42:45<SeP>2024-02-05 14:34:30<SeP>2024-02-07 01:26:15<SeP>2024-02-08 12:18:00<SeP>2024-02-09 23:09:45<SeP>2024-02-11 10:01:30<SeP>2024-02-12 20:53:15<SeP>2024-02-14 07:45:00<SeP>2024-02-15 18:36:45<SeP>2024-02-17 05:28:30<SeP>2024-02-18 16:20:15<SeP>2024-02-20 03:12:00<SeP>2024-02-21 14:03:45<SeP>2024-02-23 00:55:30<SeP>2024-02-24 11:47:15<SeP>2024-02-25 22:39:00<SeP>2024-02-27 09:30:45<SeP>2024-02-28 20:22:30<SeP>2024-03-01 07:14:15<SeP>2024-03-02 18:06:00<SeP>2024-03-04 04:57:45<SeP>2024-03-05 15:49:30<SeP>2024-03-07 02:41:15<SeP>2024-03-08 13:33:00<SeP>2024-03-10 00:24:45<SeP>2024-03-11 12:16:30<SeP>2024-03-12 23:08:15<SeP>2024-03-14 10:00:00<SeP>2024-03-15 20:51:45<SeP>2024-03-17 07:43:30<SeP>2024-03-18 18:35:15<SeP>2024-03-20 05:27:00<SeP>2024-03-21 16:18:45<SeP>2024-03-23 03:10:30<SeP>2024-03-24 14:02:15<SeP>2024-03-26 00:54:00<SeP>2024-03-27 11:45:45<SeP>2024-03-28 22:37:30<SeP>2024-03-30 09:29:15<SeP>2024-03-31 20:21:00<SeP>2024-04-02 07:12:45<SeP>2024-04-03 18:04:30<SeP>2024-04-05 04:56:15<SeP>2024-04-06 15:48:00<SeP>2024-04-08 02:39:45<SeP>2024-04-09 13:31:30<SeP>2024-04-11 00:23:15<SeP>2024-04-12 11:15:00<SeP>2024-04-13 22:06:45<SeP>2024-04-15 08:58:30<SeP>2024-04-16 19:50:15<SeP>2024-04-18 06:42:00<SeP>2024-04-19 17:33:45<SeP>2024-04-21 04:25:30<SeP>2024-04-22 15:17:15<SeP>2024-04-24 02:09:00<SeP>2024-04-25 13:00:45<SeP>2024-04-26 23:52:30<SeP>2024-04-28 10:44:15<SeP>2024-04-29 21:36:00<SeP>2024-05-01 08:27:45<SeP>2024-05-02 19:19:30<SeP>2024-05-04 06:11:15<SeP>2024-05-05 17:03:00<SeP>2024-05-07 03:54:45<SeP>2024-05-08 14:46:30<SeP>2024-05-10 01:38:15<SeP>2024-05-11 12:30:00<SeP>2024-05-12 23:21:45<SeP>2024-05-14 10:13:30<SeP>2024-05-15 21:05:15<SeP>2024-05-17 07:57:00<SeP>2024-05-18 18:48:45<SeP>2024-05-20 05:40:30<SeP>2024-05-21 16:32:15<SeP>2024-05-23 03:24:00<SeP>2024-05-24 14:15:45<SeP>2024-05-26 01:07:30<SeP>2024-05-27 11:59:15<SeP>2024-05-28 22:51:00<SeP>2024-05-30 09:42:45<SeP>2024-05-31 20:34:30<SeP>2024-06-02 07:26:15<SeP>2024-06-03 18:18:00<SeP>2024-06-05 05:09:45<SeP>2024-06-06 16:01:30<SeP>2024-06-08 02:53:15<SeP>2024-06-09 13:45:00<SeP>2024-06-11 00:36:45<SeP>2024-06-12 11:28:30<SeP>2024-06-13 22:20:15<SeP>2024-06-15 09:12:00<SeP>2024-06-16 20:03:45<SeP>2024-06-18 06:55:30<SeP>2024-06-19 17:47:15<SeP>2024-06-21 04:39:00<SeP>2024-06-22 15:30:45<SeP>2024-06-24 02:22:30<SeP>2024-06-25 13:14:15<SeP>2024-06-27 00:06:00<SeP>2024-06-28 10:57:45<SeP>2024-06-29 21:49:30<SeP>2024-07-01 08:41:15<SeP>2024-07-02 19:33:00<SeP>2024-07-04 06:24:45<SeP>2024-07-05 17:16:30<SeP>2024-07-07 04:08:15<SeP>2024-07-08 15:00:00<SeP>2024-07-10 01:51:45<SeP>2024-07-11 12:43:30<SeP>2024-07-12 23:35:15<SeP>2024-07-14 10:27:00<SeP>2024-07-15 21:18:45<SeP>2024-07-17 08:10:30<SeP>2024-07-18 19:02:15<SeP>2024-07-20 05:54:00<SeP>2024-07-21 16:45:45<SeP>2024-07-23 03:37:30<SeP>2024-07-24 14:29:15<SeP>2024-07-26 01:21:00<SeP>2024-07-27 12:12:45<SeP>2024-07-28 23:04:30<SeP>2024-07-30 09:56:15<SeP>2024-07-31 20:48:00<SeP>2024-08-02 07:39:45<SeP>2024-08-03 18:31:30<SeP>2024-08-05 05:23:15<SeP>2024-08-06 16:15:00<SeP>2024-08-08 03:06:45<SeP>2024-08-09 13:58:30<SeP>2024-08-11 00:50:15<SeP>2024-08-12 11:42:00<SeP>2024-08-13 22:33:45<SeP>2024-08-15 09:25:30<SeP>2024-08-16 20:17:15<SeP>2024-08-18 07:09:00<SeP>2024-08-19 18:00:45<SeP>2024-08-21 04:52:30<SeP>2024-08-22 15:44:15<SeP>2024-08-24 02:36:00<SeP>2024-08-25 13:27:45<SeP>2024-08-27 00:19:30<SeP>2024-08-28 11:11:15<SeP>2024-08-29 22:03:00<SeP>2024-08-31 08:54:45<SeP>2024-09-01 19:46:30<SeP>2024-09-03 06:38:15<SeP>2024-09-04 17:30:00<SeP>2024-09-06 04:21:45<SeP>2024-09-07 15:13:30<SeP>2024-09-09 02:05:15<SeP>2024-09-10 12:57:00<SeP>2024-09-11 23:48:45<SeP>2024-09-13 10:40:30<SeP>2024-09-14 21:32:15<SeP>2024-09-16 08:24:00<SeP>2024-09-17 19:15:45<SeP>2024-09-19 06:07:30<SeP>2024-09-20 16:59:15<SeP>2024-09-22 03:51:00<SeP>2024-09-23 14:42:45<SeP>2024-09-25 01:34:30<SeP>2024-09-26 12:26:15<SeP>2024-09-27 23:18:00<SeP>2024-09-29 10:09:45<SeP>2024-09-30 21:01:30<SeP>2024-10-02 07:53:15<SeP>2024-10-03 18:45:00<SeP>2024-10-05 05:36:45<SeP>2024-10-06 16:28:30<SeP>2024-10-08 03:20:15<SeP>2024-10-09 14:12:00<SeP>2024-10-11 01:03:45<SeP>2024-10-12 11:55:30<SeP>2024-10-13 22:47:15<SeP>2024-10-15 09:39:00<SeP>2024-10-16 20:30:45<SeP>2024-10-18 07:22:30<SeP>2024-10-19 18:14:15<SeP>2024-10-21 05:06:00<SeP>2024-10-22 15:57:45<SeP>2024-10-24 02:49:30<SeP>2024-10-25 13:41:15<SeP>2024-10-27 00:33:00<SeP>2024-10-28 11:24:45<SeP>2024-10-29 22:16:30<SeP>2024-10-31 09:08:15<SeP>2024-11-01 20:00:00<SeP>2024-11-03 05:51:45<SeP>2024-11-04 16:43:30<SeP>2024-11-06 03:35:15<SeP>2024-11-07 14:27:00<SeP>2024-11-09 01:18:45<SeP>2024-11-10 12:10:30<SeP>2024-11-11 23:02:15<SeP>2024-11-13 09:54:00<SeP>2024-11-14 20:45:45<SeP>2024-11-16 07:37:30<SeP>2024-11-17 18:29:15<SeP>2024-11-19 05:21:00<SeP>2024-11-20 16:12:45<SeP>2024-11-22 03:04:30<SeP>2024-11-23 13:56:15<SeP>2024-11-25 00:48:00<SeP>2024-11-26 11:39:45<SeP>2024-11-27 22:31:30<SeP>2024-11-29 09:23:15<SeP>2024-11-30 20:15:00<SeP>2024-12-02 07:06:45<SeP>2024-12-03 17:58:30<SeP>2024-12-05 04:50:15<SeP>2024-12-06 15:42:00<SeP>2024-12-08 02:33:45<SeP>2024-12-09 13:25:30<SeP>2024-12-11 00:17:15<SeP>2024-12-12 11:09:00<SeP>2024-12-13 22:00:45<SeP>2024-12-15 08:52:30<SeP>2024-12-16 19:44:15<SeP>2024-12-18 06:36:00<SeP>2024-12-19 17:27:45<SeP>2024-12-21 04:19:30<SeP>2024-12-22 15:11:15<SeP>2024-12-24 02:03:00<SeP>2024-12-25 12:54:45<SeP>2024-12-26 23:46:30<SeP>2024-12-28 10:38:15<SeP>2024-12-29 21:30:00<SeP>2024-12-31 08:21:45<SeP>2025-01-01 19:13:30<SeP>2025-01-03 06:05:15<SeP>2025-01-04 16:57:00<SeP>2025-01-06 03:48:45<SeP>2025-01-07 14:40:30<SeP>2025-01-09 01:32:15<SeP>2025-01-10 12:24:00<SeP>2025-01-11 23:15:45<SeP>2025-01-13 10:07:30<SeP>2025-01-14 20:59:15<SeP>2025-01-16 07:51:00<SeP>2025-01-17 18:42:45<SeP>2025-01-19 05:34:30<SeP>2025-01-20 16:26:15<SeP>2025-01-22 03:18:00<SeP>2025-01-23 14:09:45<SeP>2025-01-25 01:01:30<SeP>2025-01-26 11:53:15<SeP>2025-01-27 22:45:00<SeP>2025-01-29 09:36:45<SeP>2025-01-30 20:28:30<SeP>2025-02-01 07:20:15<SeP>2025-02-02 18:12:00<SeP>2025-02-04 05:03:45<SeP>2025-02-05 15:55:30<SeP>2025-02-07 02:47:15<SeP>2025-02-08 13:39:00<SeP>2025-02-10 00:30:45<SeP>2025-02-11 11:22:30<SeP>2025-02-12 22:14:15<SeP>2025-02-14 09:06:00<SeP>2025-02-15 19:57:45<SeP>2025-02-17 06:49:30<SeP>2025-02-18 17:41:15<SeP>2025-02-20 04:33:00<SeP>2025-02-21 15:24:45<SeP>2025-02-23 02:16:30<SeP>2025-02-24 13:08:15";
  const itemLabel       = "Ataques";
  const itemData        = "153<SeP>614<SeP>992<SeP>705<SeP>563<SeP>206<SeP>6966<SeP>515<SeP>9169<SeP>968<SeP>390<SeP>1136<SeP>1229<SeP>291<SeP>156<SeP>459<SeP>113<SeP>761<SeP>283<SeP>4932<SeP>7428<SeP>6971<SeP>7804<SeP>6316<SeP>253<SeP>309<SeP>390<SeP>174<SeP>757<SeP>5517<SeP>73<SeP>386<SeP>349<SeP>366<SeP>3386<SeP>9617<SeP>8373<SeP>10403<SeP>9628<SeP>5713<SeP>6218<SeP>7872<SeP>7821<SeP>10102<SeP>7481<SeP>7186<SeP>9218<SeP>8879<SeP>7469<SeP>8314<SeP>5270<SeP>9649<SeP>9724<SeP>6064<SeP>8399<SeP>8107<SeP>8962<SeP>18614<SeP>15798<SeP>9789<SeP>11073<SeP>7065<SeP>7593<SeP>8586<SeP>9010<SeP>8285<SeP>7248<SeP>6351<SeP>6685<SeP>6568<SeP>4703<SeP>4725<SeP>6458<SeP>5478<SeP>6373<SeP>7289<SeP>5521<SeP>5354<SeP>5256<SeP>7165<SeP>4625<SeP>6711<SeP>5243<SeP>5613<SeP>6713<SeP>5374<SeP>5614<SeP>5246<SeP>9974<SeP>20957<SeP>33897<SeP>9579<SeP>9330<SeP>5710<SeP>7161<SeP>12008<SeP>7035<SeP>3985<SeP>5428<SeP>5057<SeP>4412<SeP>6432<SeP>6784<SeP>7559<SeP>6018<SeP>5982<SeP>4031<SeP>7757<SeP>8176<SeP>7569<SeP>8454<SeP>3596<SeP>7128<SeP>10781<SeP>7875<SeP>3337<SeP>3635<SeP>6933<SeP>8864<SeP>5570<SeP>7754<SeP>8186<SeP>3180<SeP>3034<SeP>1151<SeP>1656<SeP>1817<SeP>2494<SeP>830<SeP>1319<SeP>654<SeP>1631<SeP>1200<SeP>1170<SeP>1189<SeP>757<SeP>1135<SeP>723<SeP>1517<SeP>1463<SeP>1057<SeP>1638<SeP>2052<SeP>1453<SeP>10005<SeP>7024<SeP>10451<SeP>8301<SeP>6005<SeP>11163<SeP>6554<SeP>9358<SeP>9284<SeP>10299<SeP>11862<SeP>7319<SeP>13437<SeP>11370<SeP>7842<SeP>11349<SeP>5423<SeP>5292<SeP>7002<SeP>25436<SeP>6256<SeP>8299<SeP>7865<SeP>17075<SeP>8795<SeP>7761<SeP>6011<SeP>6687<SeP>7474<SeP>25633<SeP>7121<SeP>9678<SeP>9176<SeP>5688<SeP>5227<SeP>7406<SeP>15139<SeP>5762<SeP>13134<SeP>7043<SeP>7091<SeP>8427<SeP>6274<SeP>3883<SeP>6159<SeP>7077<SeP>5652<SeP>7065<SeP>7088<SeP>5203<SeP>21077<SeP>6671<SeP>6021<SeP>6267<SeP>8189<SeP>10544<SeP>7011<SeP>3897<SeP>4730<SeP>6334<SeP>2924<SeP>4614<SeP>4142<SeP>657<SeP>100<SeP>645<SeP>211<SeP>677<SeP>989<SeP>368<SeP>603<SeP>1003<SeP>1391<SeP>3183<SeP>22803<SeP>674<SeP>2650<SeP>3702<SeP>3568<SeP>3045<SeP>7075<SeP>3976<SeP>2549<SeP>3856<SeP>2921<SeP>2753<SeP>3452<SeP>4214<SeP>2224<SeP>3296<SeP>1272<SeP>2763<SeP>1094<SeP>1916<SeP>1595<SeP>1378<SeP>1001<SeP>1103<SeP>1611<SeP>26519<SeP>1691<SeP>4229<SeP>4040<SeP>1959<SeP>3344<SeP>3001<SeP>1885<SeP>3360<SeP>2630<SeP>3626<SeP>2566<SeP>2451<SeP>3288<SeP>3962<SeP>5982<SeP>5259<SeP>4318<SeP>2701<SeP>2957<SeP>3680<SeP>3730<SeP>6558<SeP>8695<SeP>4239<SeP>2160<SeP>3363<SeP>3363<SeP>4640<SeP>2956<SeP>3048<SeP>2380<SeP>4474<SeP>4986<SeP>3670<SeP>5826<SeP>4353<SeP>5960<SeP>4835<SeP>5375<SeP>4955<SeP>22132<SeP>5641<SeP>10680<SeP>1741<SeP>3241<SeP>3863<SeP>3656<SeP>5288<SeP>3562<SeP>4635<SeP>4546<SeP>4813<SeP>3099<SeP>4161<SeP>1944<SeP>1457<SeP>2201<SeP>3353<SeP>2528<SeP>3101<SeP>3379<SeP>4623<SeP>3361<SeP>3377<SeP>4372<SeP>3394<SeP>2902<SeP>5724<SeP>7899<SeP>6107<SeP>4600<SeP>5182<SeP>4643<SeP>3546<SeP>3543<SeP>4588<SeP>5707<SeP>5375<SeP>4852<SeP>3969<SeP>1778<SeP>394<SeP>2351<SeP>1442<SeP>744<SeP>1913<SeP>1547<SeP>829<SeP>2978<SeP>3738<SeP>6442<SeP>6027<SeP>32483<SeP>5427<SeP>8998<SeP>19400<SeP>5361<SeP>4964<SeP>6100<SeP>3957<SeP>24771<SeP>5379<SeP>4724<SeP>4875<SeP>5656<SeP>18291<SeP>17027<SeP>4351<SeP>3399<SeP>4428<SeP>5084<SeP>6065<SeP>3335<SeP>3123<SeP>3416<SeP>4686<SeP>5299<SeP>3999<SeP>18082<SeP>5820<SeP>6566<SeP>4553<SeP>1551<SeP>3815<SeP>4727<SeP>3809<SeP>4196<SeP>2657<SeP>3863<SeP>2574<SeP>3960<SeP>3615<SeP>7256<SeP>8811<SeP>9768<SeP>8765<SeP>8621<SeP>7460<SeP>6749<SeP>5097<SeP>4736<SeP>9652<SeP>19758<SeP>3217<SeP>4362<SeP>3204<SeP>11404<SeP>5070<SeP>4208<SeP>4474<SeP>4544<SeP>3325<SeP>6288<SeP>9867<SeP>6805<SeP>3769";
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
  const itemData    = "691566<SeP>362675<SeP>205876<SeP>179187<SeP>110178<SeP>87555<SeP>83245<SeP>80247<SeP>67845<SeP>66366";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "295246<SeP>41416<SeP>40151<SeP>35290<SeP>14400<SeP>10768<SeP>7738<SeP>7405<SeP>6993<SeP>6987";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "396320<SeP>327385<SeP>202998<SeP>139036<SeP>95778<SeP>80635<SeP>80562<SeP>69479<SeP>58628<SeP>58397";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "362126<SeP>259549<SeP>235179<SeP>143847<SeP>66766<SeP>59507<SeP>56210<SeP>52219<SeP>41613<SeP>35846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "155276<SeP>52993<SeP>40491<SeP>32188<SeP>21906<SeP>12704<SeP>10731<SeP>8981<SeP>7614<SeP>7431";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "349422<SeP>258785<SeP>121941<SeP>79903<SeP>55236<SeP>48776<SeP>46346<SeP>30550<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "691566<SeP>362675<SeP>205876<SeP>179187<SeP>110178<SeP>87555<SeP>83245<SeP>80247<SeP>67845<SeP>66366";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "295246<SeP>41416<SeP>40151<SeP>35290<SeP>14400<SeP>10768<SeP>7738<SeP>7405<SeP>6993<SeP>6987";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "396320<SeP>327385<SeP>202998<SeP>139036<SeP>95778<SeP>80635<SeP>80562<SeP>69479<SeP>58628<SeP>58397";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "362126<SeP>259549<SeP>235179<SeP>143847<SeP>66766<SeP>59507<SeP>56210<SeP>52219<SeP>41613<SeP>35846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "155276<SeP>52993<SeP>40491<SeP>32188<SeP>21906<SeP>12704<SeP>10731<SeP>8981<SeP>7614<SeP>7431";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "349422<SeP>258785<SeP>121941<SeP>79903<SeP>55236<SeP>48776<SeP>46346<SeP>30550<SeP>29324<SeP>26846";
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
