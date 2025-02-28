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
  document.getElementById("last-updated").innerHTML = "2025-2-28";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.0";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.0";
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
  const metricData    = "2825951";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "547760";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2278191";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139137";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1430711";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "847480";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53876";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "248008";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "599472";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43199";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2825951";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "547760";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2278191";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139137";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1430711";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "847480";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53876";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "248008";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "599472";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43199";
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
  const incomingData = "2825951<SeP>547760<SeP>2278191<SeP>139137";
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
  const incomingData = "2278191<SeP>1430711<SeP>847480<SeP>53876";
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
  const incomingData = "847480<SeP>248008<SeP>599472<SeP>43199";
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
  const incomingData = "2558626<SeP>255801<SeP>2302825";
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
  const incomingData = "388195<SeP>149<SeP>388046<SeP>226";
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
  const incomingData = "2825951<SeP>547760<SeP>2278191<SeP>139137";
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
  const incomingData = "2278191<SeP>1430711<SeP>847480<SeP>53876";
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
  const incomingData = "847480<SeP>248008<SeP>599472<SeP>43199";
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
  const incomingData = "2558626<SeP>255801<SeP>2302825";
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
  const incomingData = "388195<SeP>149<SeP>388046<SeP>226";
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
  const column3Data   = "219575<SeP>201118<SeP>12453<SeP>12368<SeP>9731<SeP>9430<SeP>6445<SeP>5593<SeP>4628<SeP>3493";
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
  const column2Data  = "210879<SeP>43080<SeP>599<SeP>485<SeP>452<SeP>433<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2394676<SeP>431275";
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
  const column3Data   = "219575<SeP>201118<SeP>12453<SeP>12368<SeP>9731<SeP>9430<SeP>6445<SeP>5593<SeP>4628<SeP>3493";
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
  const column2Data  = "210879<SeP>43080<SeP>599<SeP>485<SeP>452<SeP>433<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2394676<SeP>431275";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-28";

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
        "name": "traffic between 2023-07-26 and 2025-02-26"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          363781,50
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
        "name": "scans between 2023-07-26 and 2025-02-26"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225303,32,
          363781,50
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
        "name": "attacks between 2023-07-26 and 2025-02-26"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138478,21,
          363781,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-28";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-26"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          363781,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-26"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225303,32,
          363781,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-26"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138478,21,
          363781,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:58:57<SeP>2023-07-28 21:57:54<SeP>2023-07-30 08:56:51<SeP>2023-07-31 19:55:48<SeP>2023-08-02 06:54:45<SeP>2023-08-03 17:53:42<SeP>2023-08-05 04:52:39<SeP>2023-08-06 15:51:36<SeP>2023-08-08 02:50:33<SeP>2023-08-09 13:49:30<SeP>2023-08-11 00:48:27<SeP>2023-08-12 11:47:24<SeP>2023-08-13 22:46:21<SeP>2023-08-15 09:45:18<SeP>2023-08-16 20:44:15<SeP>2023-08-18 07:43:12<SeP>2023-08-19 18:42:09<SeP>2023-08-21 05:41:06<SeP>2023-08-22 16:40:03<SeP>2023-08-24 03:39:00<SeP>2023-08-25 14:37:57<SeP>2023-08-27 01:36:54<SeP>2023-08-28 12:35:51<SeP>2023-08-29 23:34:48<SeP>2023-08-31 10:33:45<SeP>2023-09-01 21:32:42<SeP>2023-09-03 08:31:39<SeP>2023-09-04 19:30:36<SeP>2023-09-06 06:29:33<SeP>2023-09-07 17:28:30<SeP>2023-09-09 04:27:27<SeP>2023-09-10 15:26:24<SeP>2023-09-12 02:25:21<SeP>2023-09-13 13:24:18<SeP>2023-09-15 00:23:15<SeP>2023-09-16 11:22:12<SeP>2023-09-17 22:21:09<SeP>2023-09-19 09:20:06<SeP>2023-09-20 20:19:03<SeP>2023-09-22 07:18:00<SeP>2023-09-23 18:16:57<SeP>2023-09-25 05:15:54<SeP>2023-09-26 16:14:51<SeP>2023-09-28 03:13:48<SeP>2023-09-29 14:12:45<SeP>2023-10-01 01:11:42<SeP>2023-10-02 12:10:39<SeP>2023-10-03 23:09:36<SeP>2023-10-05 10:08:33<SeP>2023-10-06 21:07:30<SeP>2023-10-08 08:06:27<SeP>2023-10-09 19:05:24<SeP>2023-10-11 06:04:21<SeP>2023-10-12 17:03:18<SeP>2023-10-14 04:02:15<SeP>2023-10-15 15:01:12<SeP>2023-10-17 02:00:09<SeP>2023-10-18 12:59:06<SeP>2023-10-19 23:58:03<SeP>2023-10-21 10:57:00<SeP>2023-10-22 21:55:57<SeP>2023-10-24 08:54:54<SeP>2023-10-25 19:53:51<SeP>2023-10-27 06:52:48<SeP>2023-10-28 17:51:45<SeP>2023-10-30 04:50:42<SeP>2023-10-31 15:49:39<SeP>2023-11-02 02:48:36<SeP>2023-11-03 13:47:33<SeP>2023-11-05 00:46:30<SeP>2023-11-06 10:45:27<SeP>2023-11-07 21:44:24<SeP>2023-11-09 08:43:21<SeP>2023-11-10 19:42:18<SeP>2023-11-12 06:41:15<SeP>2023-11-13 17:40:12<SeP>2023-11-15 04:39:09<SeP>2023-11-16 15:38:06<SeP>2023-11-18 02:37:03<SeP>2023-11-19 13:36:00<SeP>2023-11-21 00:34:57<SeP>2023-11-22 11:33:54<SeP>2023-11-23 22:32:51<SeP>2023-11-25 09:31:48<SeP>2023-11-26 20:30:45<SeP>2023-11-28 07:29:42<SeP>2023-11-29 18:28:39<SeP>2023-12-01 05:27:36<SeP>2023-12-02 16:26:33<SeP>2023-12-04 03:25:30<SeP>2023-12-05 14:24:27<SeP>2023-12-07 01:23:24<SeP>2023-12-08 12:22:21<SeP>2023-12-09 23:21:18<SeP>2023-12-11 10:20:15<SeP>2023-12-12 21:19:12<SeP>2023-12-14 08:18:09<SeP>2023-12-15 19:17:06<SeP>2023-12-17 06:16:03<SeP>2023-12-18 17:15:00<SeP>2023-12-20 04:13:57<SeP>2023-12-21 15:12:54<SeP>2023-12-23 02:11:51<SeP>2023-12-24 13:10:48<SeP>2023-12-26 00:09:45<SeP>2023-12-27 11:08:42<SeP>2023-12-28 22:07:39<SeP>2023-12-30 09:06:36<SeP>2023-12-31 20:05:33<SeP>2024-01-02 07:04:30<SeP>2024-01-03 18:03:27<SeP>2024-01-05 05:02:24<SeP>2024-01-06 16:01:21<SeP>2024-01-08 03:00:18<SeP>2024-01-09 13:59:15<SeP>2024-01-11 00:58:12<SeP>2024-01-12 11:57:09<SeP>2024-01-13 22:56:06<SeP>2024-01-15 09:55:03<SeP>2024-01-16 20:54:00<SeP>2024-01-18 07:52:57<SeP>2024-01-19 18:51:54<SeP>2024-01-21 05:50:51<SeP>2024-01-22 16:49:48<SeP>2024-01-24 03:48:45<SeP>2024-01-25 14:47:42<SeP>2024-01-27 01:46:39<SeP>2024-01-28 12:45:36<SeP>2024-01-29 23:44:33<SeP>2024-01-31 10:43:30<SeP>2024-02-01 21:42:27<SeP>2024-02-03 08:41:24<SeP>2024-02-04 19:40:21<SeP>2024-02-06 06:39:18<SeP>2024-02-07 17:38:15<SeP>2024-02-09 04:37:12<SeP>2024-02-10 15:36:09<SeP>2024-02-12 02:35:06<SeP>2024-02-13 13:34:03<SeP>2024-02-15 00:33:00<SeP>2024-02-16 11:31:57<SeP>2024-02-17 22:30:54<SeP>2024-02-19 09:29:51<SeP>2024-02-20 20:28:48<SeP>2024-02-22 07:27:45<SeP>2024-02-23 18:26:42<SeP>2024-02-25 05:25:39<SeP>2024-02-26 16:24:36<SeP>2024-02-28 03:23:33<SeP>2024-02-29 14:22:30<SeP>2024-03-02 01:21:27<SeP>2024-03-03 12:20:24<SeP>2024-03-04 23:19:21<SeP>2024-03-06 10:18:18<SeP>2024-03-07 21:17:15<SeP>2024-03-09 08:16:12<SeP>2024-03-10 20:15:09<SeP>2024-03-12 07:14:06<SeP>2024-03-13 18:13:03<SeP>2024-03-15 05:12:00<SeP>2024-03-16 16:10:57<SeP>2024-03-18 03:09:54<SeP>2024-03-19 14:08:51<SeP>2024-03-21 01:07:48<SeP>2024-03-22 12:06:45<SeP>2024-03-23 23:05:42<SeP>2024-03-25 10:04:39<SeP>2024-03-26 21:03:36<SeP>2024-03-28 08:02:33<SeP>2024-03-29 19:01:30<SeP>2024-03-31 06:00:27<SeP>2024-04-01 16:59:24<SeP>2024-04-03 03:58:21<SeP>2024-04-04 14:57:18<SeP>2024-04-06 01:56:15<SeP>2024-04-07 12:55:12<SeP>2024-04-08 23:54:09<SeP>2024-04-10 10:53:06<SeP>2024-04-11 21:52:03<SeP>2024-04-13 08:51:00<SeP>2024-04-14 19:49:57<SeP>2024-04-16 06:48:54<SeP>2024-04-17 17:47:51<SeP>2024-04-19 04:46:48<SeP>2024-04-20 15:45:45<SeP>2024-04-22 02:44:42<SeP>2024-04-23 13:43:39<SeP>2024-04-25 00:42:36<SeP>2024-04-26 11:41:33<SeP>2024-04-27 22:40:30<SeP>2024-04-29 09:39:27<SeP>2024-04-30 20:38:24<SeP>2024-05-02 07:37:21<SeP>2024-05-03 18:36:18<SeP>2024-05-05 05:35:15<SeP>2024-05-06 16:34:12<SeP>2024-05-08 03:33:09<SeP>2024-05-09 14:32:06<SeP>2024-05-11 01:31:03<SeP>2024-05-12 12:30:00<SeP>2024-05-13 23:28:57<SeP>2024-05-15 10:27:54<SeP>2024-05-16 21:26:51<SeP>2024-05-18 08:25:48<SeP>2024-05-19 19:24:45<SeP>2024-05-21 06:23:42<SeP>2024-05-22 17:22:39<SeP>2024-05-24 04:21:36<SeP>2024-05-25 15:20:33<SeP>2024-05-27 02:19:30<SeP>2024-05-28 13:18:27<SeP>2024-05-30 00:17:24<SeP>2024-05-31 11:16:21<SeP>2024-06-01 22:15:18<SeP>2024-06-03 09:14:15<SeP>2024-06-04 20:13:12<SeP>2024-06-06 07:12:09<SeP>2024-06-07 18:11:06<SeP>2024-06-09 05:10:03<SeP>2024-06-10 16:09:00<SeP>2024-06-12 03:07:57<SeP>2024-06-13 14:06:54<SeP>2024-06-15 01:05:51<SeP>2024-06-16 12:04:48<SeP>2024-06-17 23:03:45<SeP>2024-06-19 10:02:42<SeP>2024-06-20 21:01:39<SeP>2024-06-22 08:00:36<SeP>2024-06-23 18:59:33<SeP>2024-06-25 05:58:30<SeP>2024-06-26 16:57:27<SeP>2024-06-28 03:56:24<SeP>2024-06-29 14:55:21<SeP>2024-07-01 01:54:18<SeP>2024-07-02 12:53:15<SeP>2024-07-03 23:52:12<SeP>2024-07-05 10:51:09<SeP>2024-07-06 21:50:06<SeP>2024-07-08 08:49:03<SeP>2024-07-09 19:48:00<SeP>2024-07-11 06:46:57<SeP>2024-07-12 17:45:54<SeP>2024-07-14 04:44:51<SeP>2024-07-15 15:43:48<SeP>2024-07-17 02:42:45<SeP>2024-07-18 13:41:42<SeP>2024-07-20 00:40:39<SeP>2024-07-21 11:39:36<SeP>2024-07-22 22:38:33<SeP>2024-07-24 09:37:30<SeP>2024-07-25 20:36:27<SeP>2024-07-27 07:35:24<SeP>2024-07-28 18:34:21<SeP>2024-07-30 05:33:18<SeP>2024-07-31 16:32:15<SeP>2024-08-02 03:31:12<SeP>2024-08-03 14:30:09<SeP>2024-08-05 01:29:06<SeP>2024-08-06 12:28:03<SeP>2024-08-07 23:27:00<SeP>2024-08-09 10:25:57<SeP>2024-08-10 21:24:54<SeP>2024-08-12 08:23:51<SeP>2024-08-13 19:22:48<SeP>2024-08-15 06:21:45<SeP>2024-08-16 17:20:42<SeP>2024-08-18 04:19:39<SeP>2024-08-19 15:18:36<SeP>2024-08-21 02:17:33<SeP>2024-08-22 13:16:30<SeP>2024-08-24 00:15:27<SeP>2024-08-25 11:14:24<SeP>2024-08-26 22:13:21<SeP>2024-08-28 09:12:18<SeP>2024-08-29 20:11:15<SeP>2024-08-31 07:10:12<SeP>2024-09-01 18:09:09<SeP>2024-09-03 05:08:06<SeP>2024-09-04 16:07:03<SeP>2024-09-06 03:06:00<SeP>2024-09-07 14:04:57<SeP>2024-09-09 01:03:54<SeP>2024-09-10 12:02:51<SeP>2024-09-11 23:01:48<SeP>2024-09-13 10:00:45<SeP>2024-09-14 20:59:42<SeP>2024-09-16 07:58:39<SeP>2024-09-17 18:57:36<SeP>2024-09-19 05:56:33<SeP>2024-09-20 16:55:30<SeP>2024-09-22 03:54:27<SeP>2024-09-23 14:53:24<SeP>2024-09-25 01:52:21<SeP>2024-09-26 12:51:18<SeP>2024-09-27 23:50:15<SeP>2024-09-29 10:49:12<SeP>2024-09-30 21:48:09<SeP>2024-10-02 08:47:06<SeP>2024-10-03 19:46:03<SeP>2024-10-05 06:45:00<SeP>2024-10-06 17:43:57<SeP>2024-10-08 04:42:54<SeP>2024-10-09 15:41:51<SeP>2024-10-11 02:40:48<SeP>2024-10-12 13:39:45<SeP>2024-10-14 00:38:42<SeP>2024-10-15 11:37:39<SeP>2024-10-16 22:36:36<SeP>2024-10-18 09:35:33<SeP>2024-10-19 20:34:30<SeP>2024-10-21 07:33:27<SeP>2024-10-22 18:32:24<SeP>2024-10-24 05:31:21<SeP>2024-10-25 16:30:18<SeP>2024-10-27 03:29:15<SeP>2024-10-28 14:28:12<SeP>2024-10-30 01:27:09<SeP>2024-10-31 12:26:06<SeP>2024-11-01 23:25:03<SeP>2024-11-03 09:24:00<SeP>2024-11-04 20:22:57<SeP>2024-11-06 07:21:54<SeP>2024-11-07 18:20:51<SeP>2024-11-09 05:19:48<SeP>2024-11-10 16:18:45<SeP>2024-11-12 03:17:42<SeP>2024-11-13 14:16:39<SeP>2024-11-15 01:15:36<SeP>2024-11-16 12:14:33<SeP>2024-11-17 23:13:30<SeP>2024-11-19 10:12:27<SeP>2024-11-20 21:11:24<SeP>2024-11-22 08:10:21<SeP>2024-11-23 19:09:18<SeP>2024-11-25 06:08:15<SeP>2024-11-26 17:07:12<SeP>2024-11-28 04:06:09<SeP>2024-11-29 15:05:06<SeP>2024-12-01 02:04:03<SeP>2024-12-02 13:03:00<SeP>2024-12-04 00:01:57<SeP>2024-12-05 11:00:54<SeP>2024-12-06 21:59:51<SeP>2024-12-08 08:58:48<SeP>2024-12-09 19:57:45<SeP>2024-12-11 06:56:42<SeP>2024-12-12 17:55:39<SeP>2024-12-14 04:54:36<SeP>2024-12-15 15:53:33<SeP>2024-12-17 02:52:30<SeP>2024-12-18 13:51:27<SeP>2024-12-20 00:50:24<SeP>2024-12-21 11:49:21<SeP>2024-12-22 22:48:18<SeP>2024-12-24 09:47:15<SeP>2024-12-25 20:46:12<SeP>2024-12-27 07:45:09<SeP>2024-12-28 18:44:06<SeP>2024-12-30 05:43:03<SeP>2024-12-31 16:42:00<SeP>2025-01-02 03:40:57<SeP>2025-01-03 14:39:54<SeP>2025-01-05 01:38:51<SeP>2025-01-06 12:37:48<SeP>2025-01-07 23:36:45<SeP>2025-01-09 10:35:42<SeP>2025-01-10 21:34:39<SeP>2025-01-12 08:33:36<SeP>2025-01-13 19:32:33<SeP>2025-01-15 06:31:30<SeP>2025-01-16 17:30:27<SeP>2025-01-18 04:29:24<SeP>2025-01-19 15:28:21<SeP>2025-01-21 02:27:18<SeP>2025-01-22 13:26:15<SeP>2025-01-24 00:25:12<SeP>2025-01-25 11:24:09<SeP>2025-01-26 22:23:06<SeP>2025-01-28 09:22:03<SeP>2025-01-29 20:21:00<SeP>2025-01-31 07:19:57<SeP>2025-02-01 18:18:54<SeP>2025-02-03 05:17:51<SeP>2025-02-04 16:16:48<SeP>2025-02-06 03:15:45<SeP>2025-02-07 14:14:42<SeP>2025-02-09 01:13:39<SeP>2025-02-10 12:12:36<SeP>2025-02-11 23:11:33<SeP>2025-02-13 10:10:30<SeP>2025-02-14 21:09:27<SeP>2025-02-16 08:08:24<SeP>2025-02-17 19:07:21<SeP>2025-02-19 06:06:18<SeP>2025-02-20 17:05:15<SeP>2025-02-22 04:04:12<SeP>2025-02-23 15:03:09<SeP>2025-02-25 02:02:06<SeP>2025-02-26 13:01:03";
  const item1Label       = "Scans";
  const item1Data        = "765<SeP>1485<SeP>1382<SeP>1441<SeP>1256<SeP>1700<SeP>957<SeP>948<SeP>1196<SeP>3371<SeP>2122<SeP>2151<SeP>2664<SeP>1645<SeP>719<SeP>961<SeP>1376<SeP>2906<SeP>1029<SeP>1803<SeP>1338<SeP>921<SeP>944<SeP>1390<SeP>819<SeP>930<SeP>806<SeP>2474<SeP>1975<SeP>997<SeP>822<SeP>1364<SeP>1253<SeP>846<SeP>3031<SeP>1877<SeP>2451<SeP>1910<SeP>1563<SeP>1431<SeP>1305<SeP>1919<SeP>1776<SeP>2115<SeP>1578<SeP>1561<SeP>1597<SeP>1734<SeP>1802<SeP>1738<SeP>1788<SeP>1732<SeP>1589<SeP>3132<SeP>1778<SeP>1354<SeP>1839<SeP>2104<SeP>2278<SeP>1409<SeP>3739<SeP>1468<SeP>1447<SeP>1590<SeP>1221<SeP>1876<SeP>1583<SeP>1447<SeP>1280<SeP>1467<SeP>1133<SeP>2377<SeP>1250<SeP>1048<SeP>1344<SeP>2475<SeP>7007<SeP>1307<SeP>1342<SeP>1326<SeP>2230<SeP>1241<SeP>2281<SeP>5546<SeP>1531<SeP>1632<SeP>889<SeP>3341<SeP>1222<SeP>1024<SeP>1066<SeP>1111<SeP>1014<SeP>3082<SeP>915<SeP>1070<SeP>2159<SeP>4457<SeP>4610<SeP>950<SeP>935<SeP>970<SeP>960<SeP>1007<SeP>832<SeP>1133<SeP>2604<SeP>3123<SeP>1618<SeP>1771<SeP>768<SeP>651<SeP>1438<SeP>1302<SeP>1107<SeP>965<SeP>2288<SeP>1054<SeP>1196<SeP>1089<SeP>894<SeP>1189<SeP>643<SeP>912<SeP>841<SeP>800<SeP>1121<SeP>824<SeP>915<SeP>749<SeP>918<SeP>830<SeP>695<SeP>832<SeP>835<SeP>917<SeP>828<SeP>874<SeP>808<SeP>803<SeP>771<SeP>1009<SeP>904<SeP>768<SeP>933<SeP>1005<SeP>803<SeP>1093<SeP>991<SeP>430<SeP>965<SeP>830<SeP>904<SeP>1243<SeP>954<SeP>1098<SeP>1268<SeP>996<SeP>968<SeP>919<SeP>895<SeP>822<SeP>924<SeP>1071<SeP>956<SeP>775<SeP>972<SeP>1071<SeP>879<SeP>1090<SeP>1004<SeP>1040<SeP>1060<SeP>952<SeP>952<SeP>2175<SeP>1248<SeP>1079<SeP>1062<SeP>1047<SeP>1050<SeP>975<SeP>845<SeP>674<SeP>913<SeP>1147<SeP>913<SeP>921<SeP>1056<SeP>1333<SeP>1039<SeP>1158<SeP>1282<SeP>1210<SeP>1337<SeP>1251<SeP>1280<SeP>1538<SeP>1916<SeP>1428<SeP>1241<SeP>710<SeP>1059<SeP>910<SeP>1179<SeP>415<SeP>885<SeP>933<SeP>919<SeP>2543<SeP>5206<SeP>2159<SeP>1974<SeP>1132<SeP>886<SeP>1024<SeP>864<SeP>975<SeP>920<SeP>1133<SeP>1057<SeP>1034<SeP>1997<SeP>1498<SeP>1033<SeP>1277<SeP>1178<SeP>1259<SeP>1073<SeP>976<SeP>1038<SeP>1084<SeP>1096<SeP>1047<SeP>1095<SeP>986<SeP>1134<SeP>805<SeP>1367<SeP>1143<SeP>1135<SeP>1172<SeP>1245<SeP>1331<SeP>1560<SeP>1142<SeP>1177<SeP>1111<SeP>1156<SeP>2017<SeP>1212<SeP>1585<SeP>1847<SeP>1430<SeP>1919<SeP>1734<SeP>1281<SeP>1181<SeP>1080<SeP>1341<SeP>1446<SeP>1276<SeP>1304<SeP>1354<SeP>1839<SeP>1386<SeP>1501<SeP>1339<SeP>1478<SeP>1235<SeP>995<SeP>1173<SeP>1236<SeP>1174<SeP>1249<SeP>1403<SeP>1090<SeP>1571<SeP>1728<SeP>1260<SeP>1433<SeP>1664<SeP>1320<SeP>956<SeP>994<SeP>1019<SeP>993<SeP>818<SeP>993<SeP>1742<SeP>1191<SeP>1043<SeP>1118<SeP>958<SeP>772<SeP>1133<SeP>1351<SeP>791<SeP>973<SeP>904<SeP>1309<SeP>1514<SeP>1536<SeP>1102<SeP>1131<SeP>907<SeP>1822<SeP>1134<SeP>1088<SeP>1119<SeP>949<SeP>1610<SeP>978<SeP>958<SeP>1199<SeP>1111<SeP>824<SeP>917<SeP>1095<SeP>1448<SeP>1549<SeP>1474<SeP>1367<SeP>1257<SeP>903<SeP>1139<SeP>1258<SeP>1154<SeP>1136<SeP>999<SeP>1049<SeP>1130<SeP>1467<SeP>1338<SeP>1466<SeP>1419<SeP>1429<SeP>1494<SeP>1469<SeP>1248<SeP>1479<SeP>1491<SeP>1438<SeP>1361<SeP>1472<SeP>1673<SeP>1480<SeP>1329<SeP>1355<SeP>1404<SeP>1327<SeP>1224<SeP>1378<SeP>1561<SeP>1510<SeP>1191<SeP>1310<SeP>1204<SeP>1445<SeP>1282<SeP>1154<SeP>1549<SeP>1946<SeP>1434<SeP>1179<SeP>757<SeP>1466<SeP>1784<SeP>1286<SeP>1307<SeP>1220<SeP>1149<SeP>1393<SeP>1474<SeP>1302<SeP>1438<SeP>1731<SeP>1285<SeP>1593<SeP>1729<SeP>1264<SeP>1526<SeP>1361<SeP>1777<SeP>1592<SeP>1009<SeP>1063<SeP>2055<SeP>1869<SeP>1684<SeP>1764<SeP>1755<SeP>1445<SeP>1622<SeP>1617<SeP>1586<SeP>1379<SeP>1853<SeP>1671<SeP>1703";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "153<SeP>614<SeP>1068<SeP>636<SeP>566<SeP>207<SeP>6967<SeP>527<SeP>9545<SeP>571<SeP>396<SeP>1130<SeP>1244<SeP>287<SeP>147<SeP>462<SeP>111<SeP>761<SeP>282<SeP>5491<SeP>7466<SeP>6580<SeP>8269<SeP>5671<SeP>261<SeP>283<SeP>428<SeP>128<SeP>4350<SeP>1926<SeP>167<SeP>291<SeP>398<SeP>358<SeP>4111<SeP>10560<SeP>8402<SeP>10398<SeP>8498<SeP>5748<SeP>7471<SeP>6863<SeP>8876<SeP>8925<SeP>7879<SeP>7023<SeP>9495<SeP>8766<SeP>7685<SeP>7703<SeP>5193<SeP>10841<SeP>8673<SeP>6753<SeP>8033<SeP>8329<SeP>9240<SeP>18346<SeP>16444<SeP>9103<SeP>11606<SeP>6648<SeP>8070<SeP>8235<SeP>9217<SeP>8773<SeP>5866<SeP>7167<SeP>7009<SeP>6081<SeP>3373<SeP>6238<SeP>5484<SeP>6530<SeP>6422<SeP>7976<SeP>3415<SeP>6273<SeP>5933<SeP>6413<SeP>4831<SeP>7134<SeP>4206<SeP>6355<SeP>6431<SeP>5599<SeP>5717<SeP>5328<SeP>20445<SeP>12030<SeP>35921<SeP>6967<SeP>8793<SeP>5789<SeP>6235<SeP>12564<SeP>6213<SeP>6266<SeP>3934<SeP>4772<SeP>6017<SeP>5118<SeP>8808<SeP>5434<SeP>6860<SeP>4776<SeP>4743<SeP>8482<SeP>8569<SeP>7569<SeP>6502<SeP>3810<SeP>9466<SeP>10110<SeP>6190<SeP>3169<SeP>5847<SeP>8282<SeP>5635<SeP>6909<SeP>8939<SeP>6916<SeP>1242<SeP>2622<SeP>1081<SeP>2265<SeP>2222<SeP>1525<SeP>688<SeP>1103<SeP>1206<SeP>1849<SeP>544<SeP>1296<SeP>1159<SeP>1001<SeP>963<SeP>1022<SeP>1461<SeP>1244<SeP>1147<SeP>1661<SeP>2096<SeP>4234<SeP>11416<SeP>8382<SeP>7414<SeP>7532<SeP>11441<SeP>3991<SeP>8829<SeP>11936<SeP>9580<SeP>12245<SeP>9109<SeP>11391<SeP>10773<SeP>9535<SeP>12915<SeP>6262<SeP>3926<SeP>7338<SeP>20857<SeP>10972<SeP>6008<SeP>7688<SeP>11579<SeP>15757<SeP>8800<SeP>4082<SeP>7650<SeP>6967<SeP>25968<SeP>7833<SeP>9004<SeP>10551<SeP>4861<SeP>6312<SeP>6079<SeP>16175<SeP>4763<SeP>12792<SeP>7904<SeP>6974<SeP>8383<SeP>7759<SeP>3027<SeP>5557<SeP>6152<SeP>7080<SeP>6392<SeP>6090<SeP>7333<SeP>18669<SeP>7148<SeP>8404<SeP>5168<SeP>7656<SeP>9149<SeP>8787<SeP>5849<SeP>2679<SeP>7111<SeP>3283<SeP>5546<SeP>3726<SeP>1035<SeP>121<SeP>626<SeP>195<SeP>541<SeP>1067<SeP>372<SeP>454<SeP>900<SeP>1560<SeP>3185<SeP>1023<SeP>22510<SeP>1563<SeP>4764<SeP>2830<SeP>3562<SeP>6387<SeP>3906<SeP>3293<SeP>3559<SeP>2827<SeP>3053<SeP>3170<SeP>4653<SeP>1655<SeP>3514<SeP>1869<SeP>2592<SeP>1284<SeP>1847<SeP>1160<SeP>1913<SeP>839<SeP>1283<SeP>1592<SeP>26516<SeP>1475<SeP>4059<SeP>3242<SeP>3064<SeP>3186<SeP>3042<SeP>1932<SeP>3302<SeP>2658<SeP>3414<SeP>2518<SeP>2666<SeP>3274<SeP>3049<SeP>6775<SeP>4782<SeP>4473<SeP>3376<SeP>2925<SeP>3657<SeP>3443<SeP>6208<SeP>8573<SeP>5072<SeP>2003<SeP>3307<SeP>2763<SeP>5264<SeP>2899<SeP>3020<SeP>2646<SeP>4355<SeP>4921<SeP>3625<SeP>5841<SeP>4159<SeP>6376<SeP>4801<SeP>5413<SeP>4963<SeP>22089<SeP>5480<SeP>10873<SeP>1747<SeP>3130<SeP>3986<SeP>3652<SeP>5292<SeP>3718<SeP>4601<SeP>4424<SeP>4824<SeP>3095<SeP>4227<SeP>1958<SeP>1373<SeP>2213<SeP>3486<SeP>2673<SeP>2975<SeP>3486<SeP>4494<SeP>3394<SeP>3271<SeP>4696<SeP>3411<SeP>2599<SeP>6038<SeP>7824<SeP>6291<SeP>4652<SeP>4988<SeP>4616<SeP>3489<SeP>3785<SeP>4495<SeP>5818<SeP>5538<SeP>4529<SeP>3915<SeP>1467<SeP>469<SeP>2311<SeP>1552<SeP>645<SeP>1848<SeP>1794<SeP>581<SeP>3222<SeP>4258<SeP>6377<SeP>15036<SeP>23716<SeP>5510<SeP>11369<SeP>16549<SeP>5419<SeP>5534<SeP>5453<SeP>8599<SeP>20232<SeP>5825<SeP>4743<SeP>4444<SeP>5988<SeP>19032<SeP>16291<SeP>4535<SeP>2983<SeP>4517<SeP>5364<SeP>5698<SeP>2914<SeP>3198<SeP>4123<SeP>5147<SeP>4983<SeP>6436<SeP>15977<SeP>5723<SeP>6561<SeP>3400<SeP>2484<SeP>3486<SeP>4298<SeP>3981<SeP>4349<SeP>2417<SeP>4224<SeP>1962<SeP>4604<SeP>4091<SeP>7995<SeP>10819<SeP>7914<SeP>8709<SeP>9323<SeP>7028<SeP>5810<SeP>5108<SeP>4247<SeP>24465<SeP>4831<SeP>3072<SeP>4514<SeP>3281<SeP>11402<SeP>5772<SeP>3657<SeP>4873<SeP>4285<SeP>2729<SeP>9386<SeP>9562<SeP>4578<SeP>3323<SeP>3224";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:58:57<SeP>2023-07-28 21:57:54<SeP>2023-07-30 08:56:51<SeP>2023-07-31 19:55:48<SeP>2023-08-02 06:54:45<SeP>2023-08-03 17:53:42<SeP>2023-08-05 04:52:39<SeP>2023-08-06 15:51:36<SeP>2023-08-08 02:50:33<SeP>2023-08-09 13:49:30<SeP>2023-08-11 00:48:27<SeP>2023-08-12 11:47:24<SeP>2023-08-13 22:46:21<SeP>2023-08-15 09:45:18<SeP>2023-08-16 20:44:15<SeP>2023-08-18 07:43:12<SeP>2023-08-19 18:42:09<SeP>2023-08-21 05:41:06<SeP>2023-08-22 16:40:03<SeP>2023-08-24 03:39:00<SeP>2023-08-25 14:37:57<SeP>2023-08-27 01:36:54<SeP>2023-08-28 12:35:51<SeP>2023-08-29 23:34:48<SeP>2023-08-31 10:33:45<SeP>2023-09-01 21:32:42<SeP>2023-09-03 08:31:39<SeP>2023-09-04 19:30:36<SeP>2023-09-06 06:29:33<SeP>2023-09-07 17:28:30<SeP>2023-09-09 04:27:27<SeP>2023-09-10 15:26:24<SeP>2023-09-12 02:25:21<SeP>2023-09-13 13:24:18<SeP>2023-09-15 00:23:15<SeP>2023-09-16 11:22:12<SeP>2023-09-17 22:21:09<SeP>2023-09-19 09:20:06<SeP>2023-09-20 20:19:03<SeP>2023-09-22 07:18:00<SeP>2023-09-23 18:16:57<SeP>2023-09-25 05:15:54<SeP>2023-09-26 16:14:51<SeP>2023-09-28 03:13:48<SeP>2023-09-29 14:12:45<SeP>2023-10-01 01:11:42<SeP>2023-10-02 12:10:39<SeP>2023-10-03 23:09:36<SeP>2023-10-05 10:08:33<SeP>2023-10-06 21:07:30<SeP>2023-10-08 08:06:27<SeP>2023-10-09 19:05:24<SeP>2023-10-11 06:04:21<SeP>2023-10-12 17:03:18<SeP>2023-10-14 04:02:15<SeP>2023-10-15 15:01:12<SeP>2023-10-17 02:00:09<SeP>2023-10-18 12:59:06<SeP>2023-10-19 23:58:03<SeP>2023-10-21 10:57:00<SeP>2023-10-22 21:55:57<SeP>2023-10-24 08:54:54<SeP>2023-10-25 19:53:51<SeP>2023-10-27 06:52:48<SeP>2023-10-28 17:51:45<SeP>2023-10-30 04:50:42<SeP>2023-10-31 15:49:39<SeP>2023-11-02 02:48:36<SeP>2023-11-03 13:47:33<SeP>2023-11-05 00:46:30<SeP>2023-11-06 10:45:27<SeP>2023-11-07 21:44:24<SeP>2023-11-09 08:43:21<SeP>2023-11-10 19:42:18<SeP>2023-11-12 06:41:15<SeP>2023-11-13 17:40:12<SeP>2023-11-15 04:39:09<SeP>2023-11-16 15:38:06<SeP>2023-11-18 02:37:03<SeP>2023-11-19 13:36:00<SeP>2023-11-21 00:34:57<SeP>2023-11-22 11:33:54<SeP>2023-11-23 22:32:51<SeP>2023-11-25 09:31:48<SeP>2023-11-26 20:30:45<SeP>2023-11-28 07:29:42<SeP>2023-11-29 18:28:39<SeP>2023-12-01 05:27:36<SeP>2023-12-02 16:26:33<SeP>2023-12-04 03:25:30<SeP>2023-12-05 14:24:27<SeP>2023-12-07 01:23:24<SeP>2023-12-08 12:22:21<SeP>2023-12-09 23:21:18<SeP>2023-12-11 10:20:15<SeP>2023-12-12 21:19:12<SeP>2023-12-14 08:18:09<SeP>2023-12-15 19:17:06<SeP>2023-12-17 06:16:03<SeP>2023-12-18 17:15:00<SeP>2023-12-20 04:13:57<SeP>2023-12-21 15:12:54<SeP>2023-12-23 02:11:51<SeP>2023-12-24 13:10:48<SeP>2023-12-26 00:09:45<SeP>2023-12-27 11:08:42<SeP>2023-12-28 22:07:39<SeP>2023-12-30 09:06:36<SeP>2023-12-31 20:05:33<SeP>2024-01-02 07:04:30<SeP>2024-01-03 18:03:27<SeP>2024-01-05 05:02:24<SeP>2024-01-06 16:01:21<SeP>2024-01-08 03:00:18<SeP>2024-01-09 13:59:15<SeP>2024-01-11 00:58:12<SeP>2024-01-12 11:57:09<SeP>2024-01-13 22:56:06<SeP>2024-01-15 09:55:03<SeP>2024-01-16 20:54:00<SeP>2024-01-18 07:52:57<SeP>2024-01-19 18:51:54<SeP>2024-01-21 05:50:51<SeP>2024-01-22 16:49:48<SeP>2024-01-24 03:48:45<SeP>2024-01-25 14:47:42<SeP>2024-01-27 01:46:39<SeP>2024-01-28 12:45:36<SeP>2024-01-29 23:44:33<SeP>2024-01-31 10:43:30<SeP>2024-02-01 21:42:27<SeP>2024-02-03 08:41:24<SeP>2024-02-04 19:40:21<SeP>2024-02-06 06:39:18<SeP>2024-02-07 17:38:15<SeP>2024-02-09 04:37:12<SeP>2024-02-10 15:36:09<SeP>2024-02-12 02:35:06<SeP>2024-02-13 13:34:03<SeP>2024-02-15 00:33:00<SeP>2024-02-16 11:31:57<SeP>2024-02-17 22:30:54<SeP>2024-02-19 09:29:51<SeP>2024-02-20 20:28:48<SeP>2024-02-22 07:27:45<SeP>2024-02-23 18:26:42<SeP>2024-02-25 05:25:39<SeP>2024-02-26 16:24:36<SeP>2024-02-28 03:23:33<SeP>2024-02-29 14:22:30<SeP>2024-03-02 01:21:27<SeP>2024-03-03 12:20:24<SeP>2024-03-04 23:19:21<SeP>2024-03-06 10:18:18<SeP>2024-03-07 21:17:15<SeP>2024-03-09 08:16:12<SeP>2024-03-10 20:15:09<SeP>2024-03-12 07:14:06<SeP>2024-03-13 18:13:03<SeP>2024-03-15 05:12:00<SeP>2024-03-16 16:10:57<SeP>2024-03-18 03:09:54<SeP>2024-03-19 14:08:51<SeP>2024-03-21 01:07:48<SeP>2024-03-22 12:06:45<SeP>2024-03-23 23:05:42<SeP>2024-03-25 10:04:39<SeP>2024-03-26 21:03:36<SeP>2024-03-28 08:02:33<SeP>2024-03-29 19:01:30<SeP>2024-03-31 06:00:27<SeP>2024-04-01 16:59:24<SeP>2024-04-03 03:58:21<SeP>2024-04-04 14:57:18<SeP>2024-04-06 01:56:15<SeP>2024-04-07 12:55:12<SeP>2024-04-08 23:54:09<SeP>2024-04-10 10:53:06<SeP>2024-04-11 21:52:03<SeP>2024-04-13 08:51:00<SeP>2024-04-14 19:49:57<SeP>2024-04-16 06:48:54<SeP>2024-04-17 17:47:51<SeP>2024-04-19 04:46:48<SeP>2024-04-20 15:45:45<SeP>2024-04-22 02:44:42<SeP>2024-04-23 13:43:39<SeP>2024-04-25 00:42:36<SeP>2024-04-26 11:41:33<SeP>2024-04-27 22:40:30<SeP>2024-04-29 09:39:27<SeP>2024-04-30 20:38:24<SeP>2024-05-02 07:37:21<SeP>2024-05-03 18:36:18<SeP>2024-05-05 05:35:15<SeP>2024-05-06 16:34:12<SeP>2024-05-08 03:33:09<SeP>2024-05-09 14:32:06<SeP>2024-05-11 01:31:03<SeP>2024-05-12 12:30:00<SeP>2024-05-13 23:28:57<SeP>2024-05-15 10:27:54<SeP>2024-05-16 21:26:51<SeP>2024-05-18 08:25:48<SeP>2024-05-19 19:24:45<SeP>2024-05-21 06:23:42<SeP>2024-05-22 17:22:39<SeP>2024-05-24 04:21:36<SeP>2024-05-25 15:20:33<SeP>2024-05-27 02:19:30<SeP>2024-05-28 13:18:27<SeP>2024-05-30 00:17:24<SeP>2024-05-31 11:16:21<SeP>2024-06-01 22:15:18<SeP>2024-06-03 09:14:15<SeP>2024-06-04 20:13:12<SeP>2024-06-06 07:12:09<SeP>2024-06-07 18:11:06<SeP>2024-06-09 05:10:03<SeP>2024-06-10 16:09:00<SeP>2024-06-12 03:07:57<SeP>2024-06-13 14:06:54<SeP>2024-06-15 01:05:51<SeP>2024-06-16 12:04:48<SeP>2024-06-17 23:03:45<SeP>2024-06-19 10:02:42<SeP>2024-06-20 21:01:39<SeP>2024-06-22 08:00:36<SeP>2024-06-23 18:59:33<SeP>2024-06-25 05:58:30<SeP>2024-06-26 16:57:27<SeP>2024-06-28 03:56:24<SeP>2024-06-29 14:55:21<SeP>2024-07-01 01:54:18<SeP>2024-07-02 12:53:15<SeP>2024-07-03 23:52:12<SeP>2024-07-05 10:51:09<SeP>2024-07-06 21:50:06<SeP>2024-07-08 08:49:03<SeP>2024-07-09 19:48:00<SeP>2024-07-11 06:46:57<SeP>2024-07-12 17:45:54<SeP>2024-07-14 04:44:51<SeP>2024-07-15 15:43:48<SeP>2024-07-17 02:42:45<SeP>2024-07-18 13:41:42<SeP>2024-07-20 00:40:39<SeP>2024-07-21 11:39:36<SeP>2024-07-22 22:38:33<SeP>2024-07-24 09:37:30<SeP>2024-07-25 20:36:27<SeP>2024-07-27 07:35:24<SeP>2024-07-28 18:34:21<SeP>2024-07-30 05:33:18<SeP>2024-07-31 16:32:15<SeP>2024-08-02 03:31:12<SeP>2024-08-03 14:30:09<SeP>2024-08-05 01:29:06<SeP>2024-08-06 12:28:03<SeP>2024-08-07 23:27:00<SeP>2024-08-09 10:25:57<SeP>2024-08-10 21:24:54<SeP>2024-08-12 08:23:51<SeP>2024-08-13 19:22:48<SeP>2024-08-15 06:21:45<SeP>2024-08-16 17:20:42<SeP>2024-08-18 04:19:39<SeP>2024-08-19 15:18:36<SeP>2024-08-21 02:17:33<SeP>2024-08-22 13:16:30<SeP>2024-08-24 00:15:27<SeP>2024-08-25 11:14:24<SeP>2024-08-26 22:13:21<SeP>2024-08-28 09:12:18<SeP>2024-08-29 20:11:15<SeP>2024-08-31 07:10:12<SeP>2024-09-01 18:09:09<SeP>2024-09-03 05:08:06<SeP>2024-09-04 16:07:03<SeP>2024-09-06 03:06:00<SeP>2024-09-07 14:04:57<SeP>2024-09-09 01:03:54<SeP>2024-09-10 12:02:51<SeP>2024-09-11 23:01:48<SeP>2024-09-13 10:00:45<SeP>2024-09-14 20:59:42<SeP>2024-09-16 07:58:39<SeP>2024-09-17 18:57:36<SeP>2024-09-19 05:56:33<SeP>2024-09-20 16:55:30<SeP>2024-09-22 03:54:27<SeP>2024-09-23 14:53:24<SeP>2024-09-25 01:52:21<SeP>2024-09-26 12:51:18<SeP>2024-09-27 23:50:15<SeP>2024-09-29 10:49:12<SeP>2024-09-30 21:48:09<SeP>2024-10-02 08:47:06<SeP>2024-10-03 19:46:03<SeP>2024-10-05 06:45:00<SeP>2024-10-06 17:43:57<SeP>2024-10-08 04:42:54<SeP>2024-10-09 15:41:51<SeP>2024-10-11 02:40:48<SeP>2024-10-12 13:39:45<SeP>2024-10-14 00:38:42<SeP>2024-10-15 11:37:39<SeP>2024-10-16 22:36:36<SeP>2024-10-18 09:35:33<SeP>2024-10-19 20:34:30<SeP>2024-10-21 07:33:27<SeP>2024-10-22 18:32:24<SeP>2024-10-24 05:31:21<SeP>2024-10-25 16:30:18<SeP>2024-10-27 03:29:15<SeP>2024-10-28 14:28:12<SeP>2024-10-30 01:27:09<SeP>2024-10-31 12:26:06<SeP>2024-11-01 23:25:03<SeP>2024-11-03 09:24:00<SeP>2024-11-04 20:22:57<SeP>2024-11-06 07:21:54<SeP>2024-11-07 18:20:51<SeP>2024-11-09 05:19:48<SeP>2024-11-10 16:18:45<SeP>2024-11-12 03:17:42<SeP>2024-11-13 14:16:39<SeP>2024-11-15 01:15:36<SeP>2024-11-16 12:14:33<SeP>2024-11-17 23:13:30<SeP>2024-11-19 10:12:27<SeP>2024-11-20 21:11:24<SeP>2024-11-22 08:10:21<SeP>2024-11-23 19:09:18<SeP>2024-11-25 06:08:15<SeP>2024-11-26 17:07:12<SeP>2024-11-28 04:06:09<SeP>2024-11-29 15:05:06<SeP>2024-12-01 02:04:03<SeP>2024-12-02 13:03:00<SeP>2024-12-04 00:01:57<SeP>2024-12-05 11:00:54<SeP>2024-12-06 21:59:51<SeP>2024-12-08 08:58:48<SeP>2024-12-09 19:57:45<SeP>2024-12-11 06:56:42<SeP>2024-12-12 17:55:39<SeP>2024-12-14 04:54:36<SeP>2024-12-15 15:53:33<SeP>2024-12-17 02:52:30<SeP>2024-12-18 13:51:27<SeP>2024-12-20 00:50:24<SeP>2024-12-21 11:49:21<SeP>2024-12-22 22:48:18<SeP>2024-12-24 09:47:15<SeP>2024-12-25 20:46:12<SeP>2024-12-27 07:45:09<SeP>2024-12-28 18:44:06<SeP>2024-12-30 05:43:03<SeP>2024-12-31 16:42:00<SeP>2025-01-02 03:40:57<SeP>2025-01-03 14:39:54<SeP>2025-01-05 01:38:51<SeP>2025-01-06 12:37:48<SeP>2025-01-07 23:36:45<SeP>2025-01-09 10:35:42<SeP>2025-01-10 21:34:39<SeP>2025-01-12 08:33:36<SeP>2025-01-13 19:32:33<SeP>2025-01-15 06:31:30<SeP>2025-01-16 17:30:27<SeP>2025-01-18 04:29:24<SeP>2025-01-19 15:28:21<SeP>2025-01-21 02:27:18<SeP>2025-01-22 13:26:15<SeP>2025-01-24 00:25:12<SeP>2025-01-25 11:24:09<SeP>2025-01-26 22:23:06<SeP>2025-01-28 09:22:03<SeP>2025-01-29 20:21:00<SeP>2025-01-31 07:19:57<SeP>2025-02-01 18:18:54<SeP>2025-02-03 05:17:51<SeP>2025-02-04 16:16:48<SeP>2025-02-06 03:15:45<SeP>2025-02-07 14:14:42<SeP>2025-02-09 01:13:39<SeP>2025-02-10 12:12:36<SeP>2025-02-11 23:11:33<SeP>2025-02-13 10:10:30<SeP>2025-02-14 21:09:27<SeP>2025-02-16 08:08:24<SeP>2025-02-17 19:07:21<SeP>2025-02-19 06:06:18<SeP>2025-02-20 17:05:15<SeP>2025-02-22 04:04:12<SeP>2025-02-23 15:03:09<SeP>2025-02-25 02:02:06<SeP>2025-02-26 13:01:03";
  const itemLabel       = "Scans";
  const itemData        = "765<SeP>1485<SeP>1382<SeP>1441<SeP>1256<SeP>1700<SeP>957<SeP>948<SeP>1196<SeP>3371<SeP>2122<SeP>2151<SeP>2664<SeP>1645<SeP>719<SeP>961<SeP>1376<SeP>2906<SeP>1029<SeP>1803<SeP>1338<SeP>921<SeP>944<SeP>1390<SeP>819<SeP>930<SeP>806<SeP>2474<SeP>1975<SeP>997<SeP>822<SeP>1364<SeP>1253<SeP>846<SeP>3031<SeP>1877<SeP>2451<SeP>1910<SeP>1563<SeP>1431<SeP>1305<SeP>1919<SeP>1776<SeP>2115<SeP>1578<SeP>1561<SeP>1597<SeP>1734<SeP>1802<SeP>1738<SeP>1788<SeP>1732<SeP>1589<SeP>3132<SeP>1778<SeP>1354<SeP>1839<SeP>2104<SeP>2278<SeP>1409<SeP>3739<SeP>1468<SeP>1447<SeP>1590<SeP>1221<SeP>1876<SeP>1583<SeP>1447<SeP>1280<SeP>1467<SeP>1133<SeP>2377<SeP>1250<SeP>1048<SeP>1344<SeP>2475<SeP>7007<SeP>1307<SeP>1342<SeP>1326<SeP>2230<SeP>1241<SeP>2281<SeP>5546<SeP>1531<SeP>1632<SeP>889<SeP>3341<SeP>1222<SeP>1024<SeP>1066<SeP>1111<SeP>1014<SeP>3082<SeP>915<SeP>1070<SeP>2159<SeP>4457<SeP>4610<SeP>950<SeP>935<SeP>970<SeP>960<SeP>1007<SeP>832<SeP>1133<SeP>2604<SeP>3123<SeP>1618<SeP>1771<SeP>768<SeP>651<SeP>1438<SeP>1302<SeP>1107<SeP>965<SeP>2288<SeP>1054<SeP>1196<SeP>1089<SeP>894<SeP>1189<SeP>643<SeP>912<SeP>841<SeP>800<SeP>1121<SeP>824<SeP>915<SeP>749<SeP>918<SeP>830<SeP>695<SeP>832<SeP>835<SeP>917<SeP>828<SeP>874<SeP>808<SeP>803<SeP>771<SeP>1009<SeP>904<SeP>768<SeP>933<SeP>1005<SeP>803<SeP>1093<SeP>991<SeP>430<SeP>965<SeP>830<SeP>904<SeP>1243<SeP>954<SeP>1098<SeP>1268<SeP>996<SeP>968<SeP>919<SeP>895<SeP>822<SeP>924<SeP>1071<SeP>956<SeP>775<SeP>972<SeP>1071<SeP>879<SeP>1090<SeP>1004<SeP>1040<SeP>1060<SeP>952<SeP>952<SeP>2175<SeP>1248<SeP>1079<SeP>1062<SeP>1047<SeP>1050<SeP>975<SeP>845<SeP>674<SeP>913<SeP>1147<SeP>913<SeP>921<SeP>1056<SeP>1333<SeP>1039<SeP>1158<SeP>1282<SeP>1210<SeP>1337<SeP>1251<SeP>1280<SeP>1538<SeP>1916<SeP>1428<SeP>1241<SeP>710<SeP>1059<SeP>910<SeP>1179<SeP>415<SeP>885<SeP>933<SeP>919<SeP>2543<SeP>5206<SeP>2159<SeP>1974<SeP>1132<SeP>886<SeP>1024<SeP>864<SeP>975<SeP>920<SeP>1133<SeP>1057<SeP>1034<SeP>1997<SeP>1498<SeP>1033<SeP>1277<SeP>1178<SeP>1259<SeP>1073<SeP>976<SeP>1038<SeP>1084<SeP>1096<SeP>1047<SeP>1095<SeP>986<SeP>1134<SeP>805<SeP>1367<SeP>1143<SeP>1135<SeP>1172<SeP>1245<SeP>1331<SeP>1560<SeP>1142<SeP>1177<SeP>1111<SeP>1156<SeP>2017<SeP>1212<SeP>1585<SeP>1847<SeP>1430<SeP>1919<SeP>1734<SeP>1281<SeP>1181<SeP>1080<SeP>1341<SeP>1446<SeP>1276<SeP>1304<SeP>1354<SeP>1839<SeP>1386<SeP>1501<SeP>1339<SeP>1478<SeP>1235<SeP>995<SeP>1173<SeP>1236<SeP>1174<SeP>1249<SeP>1403<SeP>1090<SeP>1571<SeP>1728<SeP>1260<SeP>1433<SeP>1664<SeP>1320<SeP>956<SeP>994<SeP>1019<SeP>993<SeP>818<SeP>993<SeP>1742<SeP>1191<SeP>1043<SeP>1118<SeP>958<SeP>772<SeP>1133<SeP>1351<SeP>791<SeP>973<SeP>904<SeP>1309<SeP>1514<SeP>1536<SeP>1102<SeP>1131<SeP>907<SeP>1822<SeP>1134<SeP>1088<SeP>1119<SeP>949<SeP>1610<SeP>978<SeP>958<SeP>1199<SeP>1111<SeP>824<SeP>917<SeP>1095<SeP>1448<SeP>1549<SeP>1474<SeP>1367<SeP>1257<SeP>903<SeP>1139<SeP>1258<SeP>1154<SeP>1136<SeP>999<SeP>1049<SeP>1130<SeP>1467<SeP>1338<SeP>1466<SeP>1419<SeP>1429<SeP>1494<SeP>1469<SeP>1248<SeP>1479<SeP>1491<SeP>1438<SeP>1361<SeP>1472<SeP>1673<SeP>1480<SeP>1329<SeP>1355<SeP>1404<SeP>1327<SeP>1224<SeP>1378<SeP>1561<SeP>1510<SeP>1191<SeP>1310<SeP>1204<SeP>1445<SeP>1282<SeP>1154<SeP>1549<SeP>1946<SeP>1434<SeP>1179<SeP>757<SeP>1466<SeP>1784<SeP>1286<SeP>1307<SeP>1220<SeP>1149<SeP>1393<SeP>1474<SeP>1302<SeP>1438<SeP>1731<SeP>1285<SeP>1593<SeP>1729<SeP>1264<SeP>1526<SeP>1361<SeP>1777<SeP>1592<SeP>1009<SeP>1063<SeP>2055<SeP>1869<SeP>1684<SeP>1764<SeP>1755<SeP>1445<SeP>1622<SeP>1617<SeP>1586<SeP>1379<SeP>1853<SeP>1671<SeP>1703";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:58:57<SeP>2023-07-28 21:57:54<SeP>2023-07-30 08:56:51<SeP>2023-07-31 19:55:48<SeP>2023-08-02 06:54:45<SeP>2023-08-03 17:53:42<SeP>2023-08-05 04:52:39<SeP>2023-08-06 15:51:36<SeP>2023-08-08 02:50:33<SeP>2023-08-09 13:49:30<SeP>2023-08-11 00:48:27<SeP>2023-08-12 11:47:24<SeP>2023-08-13 22:46:21<SeP>2023-08-15 09:45:18<SeP>2023-08-16 20:44:15<SeP>2023-08-18 07:43:12<SeP>2023-08-19 18:42:09<SeP>2023-08-21 05:41:06<SeP>2023-08-22 16:40:03<SeP>2023-08-24 03:39:00<SeP>2023-08-25 14:37:57<SeP>2023-08-27 01:36:54<SeP>2023-08-28 12:35:51<SeP>2023-08-29 23:34:48<SeP>2023-08-31 10:33:45<SeP>2023-09-01 21:32:42<SeP>2023-09-03 08:31:39<SeP>2023-09-04 19:30:36<SeP>2023-09-06 06:29:33<SeP>2023-09-07 17:28:30<SeP>2023-09-09 04:27:27<SeP>2023-09-10 15:26:24<SeP>2023-09-12 02:25:21<SeP>2023-09-13 13:24:18<SeP>2023-09-15 00:23:15<SeP>2023-09-16 11:22:12<SeP>2023-09-17 22:21:09<SeP>2023-09-19 09:20:06<SeP>2023-09-20 20:19:03<SeP>2023-09-22 07:18:00<SeP>2023-09-23 18:16:57<SeP>2023-09-25 05:15:54<SeP>2023-09-26 16:14:51<SeP>2023-09-28 03:13:48<SeP>2023-09-29 14:12:45<SeP>2023-10-01 01:11:42<SeP>2023-10-02 12:10:39<SeP>2023-10-03 23:09:36<SeP>2023-10-05 10:08:33<SeP>2023-10-06 21:07:30<SeP>2023-10-08 08:06:27<SeP>2023-10-09 19:05:24<SeP>2023-10-11 06:04:21<SeP>2023-10-12 17:03:18<SeP>2023-10-14 04:02:15<SeP>2023-10-15 15:01:12<SeP>2023-10-17 02:00:09<SeP>2023-10-18 12:59:06<SeP>2023-10-19 23:58:03<SeP>2023-10-21 10:57:00<SeP>2023-10-22 21:55:57<SeP>2023-10-24 08:54:54<SeP>2023-10-25 19:53:51<SeP>2023-10-27 06:52:48<SeP>2023-10-28 17:51:45<SeP>2023-10-30 04:50:42<SeP>2023-10-31 15:49:39<SeP>2023-11-02 02:48:36<SeP>2023-11-03 13:47:33<SeP>2023-11-05 00:46:30<SeP>2023-11-06 10:45:27<SeP>2023-11-07 21:44:24<SeP>2023-11-09 08:43:21<SeP>2023-11-10 19:42:18<SeP>2023-11-12 06:41:15<SeP>2023-11-13 17:40:12<SeP>2023-11-15 04:39:09<SeP>2023-11-16 15:38:06<SeP>2023-11-18 02:37:03<SeP>2023-11-19 13:36:00<SeP>2023-11-21 00:34:57<SeP>2023-11-22 11:33:54<SeP>2023-11-23 22:32:51<SeP>2023-11-25 09:31:48<SeP>2023-11-26 20:30:45<SeP>2023-11-28 07:29:42<SeP>2023-11-29 18:28:39<SeP>2023-12-01 05:27:36<SeP>2023-12-02 16:26:33<SeP>2023-12-04 03:25:30<SeP>2023-12-05 14:24:27<SeP>2023-12-07 01:23:24<SeP>2023-12-08 12:22:21<SeP>2023-12-09 23:21:18<SeP>2023-12-11 10:20:15<SeP>2023-12-12 21:19:12<SeP>2023-12-14 08:18:09<SeP>2023-12-15 19:17:06<SeP>2023-12-17 06:16:03<SeP>2023-12-18 17:15:00<SeP>2023-12-20 04:13:57<SeP>2023-12-21 15:12:54<SeP>2023-12-23 02:11:51<SeP>2023-12-24 13:10:48<SeP>2023-12-26 00:09:45<SeP>2023-12-27 11:08:42<SeP>2023-12-28 22:07:39<SeP>2023-12-30 09:06:36<SeP>2023-12-31 20:05:33<SeP>2024-01-02 07:04:30<SeP>2024-01-03 18:03:27<SeP>2024-01-05 05:02:24<SeP>2024-01-06 16:01:21<SeP>2024-01-08 03:00:18<SeP>2024-01-09 13:59:15<SeP>2024-01-11 00:58:12<SeP>2024-01-12 11:57:09<SeP>2024-01-13 22:56:06<SeP>2024-01-15 09:55:03<SeP>2024-01-16 20:54:00<SeP>2024-01-18 07:52:57<SeP>2024-01-19 18:51:54<SeP>2024-01-21 05:50:51<SeP>2024-01-22 16:49:48<SeP>2024-01-24 03:48:45<SeP>2024-01-25 14:47:42<SeP>2024-01-27 01:46:39<SeP>2024-01-28 12:45:36<SeP>2024-01-29 23:44:33<SeP>2024-01-31 10:43:30<SeP>2024-02-01 21:42:27<SeP>2024-02-03 08:41:24<SeP>2024-02-04 19:40:21<SeP>2024-02-06 06:39:18<SeP>2024-02-07 17:38:15<SeP>2024-02-09 04:37:12<SeP>2024-02-10 15:36:09<SeP>2024-02-12 02:35:06<SeP>2024-02-13 13:34:03<SeP>2024-02-15 00:33:00<SeP>2024-02-16 11:31:57<SeP>2024-02-17 22:30:54<SeP>2024-02-19 09:29:51<SeP>2024-02-20 20:28:48<SeP>2024-02-22 07:27:45<SeP>2024-02-23 18:26:42<SeP>2024-02-25 05:25:39<SeP>2024-02-26 16:24:36<SeP>2024-02-28 03:23:33<SeP>2024-02-29 14:22:30<SeP>2024-03-02 01:21:27<SeP>2024-03-03 12:20:24<SeP>2024-03-04 23:19:21<SeP>2024-03-06 10:18:18<SeP>2024-03-07 21:17:15<SeP>2024-03-09 08:16:12<SeP>2024-03-10 20:15:09<SeP>2024-03-12 07:14:06<SeP>2024-03-13 18:13:03<SeP>2024-03-15 05:12:00<SeP>2024-03-16 16:10:57<SeP>2024-03-18 03:09:54<SeP>2024-03-19 14:08:51<SeP>2024-03-21 01:07:48<SeP>2024-03-22 12:06:45<SeP>2024-03-23 23:05:42<SeP>2024-03-25 10:04:39<SeP>2024-03-26 21:03:36<SeP>2024-03-28 08:02:33<SeP>2024-03-29 19:01:30<SeP>2024-03-31 06:00:27<SeP>2024-04-01 16:59:24<SeP>2024-04-03 03:58:21<SeP>2024-04-04 14:57:18<SeP>2024-04-06 01:56:15<SeP>2024-04-07 12:55:12<SeP>2024-04-08 23:54:09<SeP>2024-04-10 10:53:06<SeP>2024-04-11 21:52:03<SeP>2024-04-13 08:51:00<SeP>2024-04-14 19:49:57<SeP>2024-04-16 06:48:54<SeP>2024-04-17 17:47:51<SeP>2024-04-19 04:46:48<SeP>2024-04-20 15:45:45<SeP>2024-04-22 02:44:42<SeP>2024-04-23 13:43:39<SeP>2024-04-25 00:42:36<SeP>2024-04-26 11:41:33<SeP>2024-04-27 22:40:30<SeP>2024-04-29 09:39:27<SeP>2024-04-30 20:38:24<SeP>2024-05-02 07:37:21<SeP>2024-05-03 18:36:18<SeP>2024-05-05 05:35:15<SeP>2024-05-06 16:34:12<SeP>2024-05-08 03:33:09<SeP>2024-05-09 14:32:06<SeP>2024-05-11 01:31:03<SeP>2024-05-12 12:30:00<SeP>2024-05-13 23:28:57<SeP>2024-05-15 10:27:54<SeP>2024-05-16 21:26:51<SeP>2024-05-18 08:25:48<SeP>2024-05-19 19:24:45<SeP>2024-05-21 06:23:42<SeP>2024-05-22 17:22:39<SeP>2024-05-24 04:21:36<SeP>2024-05-25 15:20:33<SeP>2024-05-27 02:19:30<SeP>2024-05-28 13:18:27<SeP>2024-05-30 00:17:24<SeP>2024-05-31 11:16:21<SeP>2024-06-01 22:15:18<SeP>2024-06-03 09:14:15<SeP>2024-06-04 20:13:12<SeP>2024-06-06 07:12:09<SeP>2024-06-07 18:11:06<SeP>2024-06-09 05:10:03<SeP>2024-06-10 16:09:00<SeP>2024-06-12 03:07:57<SeP>2024-06-13 14:06:54<SeP>2024-06-15 01:05:51<SeP>2024-06-16 12:04:48<SeP>2024-06-17 23:03:45<SeP>2024-06-19 10:02:42<SeP>2024-06-20 21:01:39<SeP>2024-06-22 08:00:36<SeP>2024-06-23 18:59:33<SeP>2024-06-25 05:58:30<SeP>2024-06-26 16:57:27<SeP>2024-06-28 03:56:24<SeP>2024-06-29 14:55:21<SeP>2024-07-01 01:54:18<SeP>2024-07-02 12:53:15<SeP>2024-07-03 23:52:12<SeP>2024-07-05 10:51:09<SeP>2024-07-06 21:50:06<SeP>2024-07-08 08:49:03<SeP>2024-07-09 19:48:00<SeP>2024-07-11 06:46:57<SeP>2024-07-12 17:45:54<SeP>2024-07-14 04:44:51<SeP>2024-07-15 15:43:48<SeP>2024-07-17 02:42:45<SeP>2024-07-18 13:41:42<SeP>2024-07-20 00:40:39<SeP>2024-07-21 11:39:36<SeP>2024-07-22 22:38:33<SeP>2024-07-24 09:37:30<SeP>2024-07-25 20:36:27<SeP>2024-07-27 07:35:24<SeP>2024-07-28 18:34:21<SeP>2024-07-30 05:33:18<SeP>2024-07-31 16:32:15<SeP>2024-08-02 03:31:12<SeP>2024-08-03 14:30:09<SeP>2024-08-05 01:29:06<SeP>2024-08-06 12:28:03<SeP>2024-08-07 23:27:00<SeP>2024-08-09 10:25:57<SeP>2024-08-10 21:24:54<SeP>2024-08-12 08:23:51<SeP>2024-08-13 19:22:48<SeP>2024-08-15 06:21:45<SeP>2024-08-16 17:20:42<SeP>2024-08-18 04:19:39<SeP>2024-08-19 15:18:36<SeP>2024-08-21 02:17:33<SeP>2024-08-22 13:16:30<SeP>2024-08-24 00:15:27<SeP>2024-08-25 11:14:24<SeP>2024-08-26 22:13:21<SeP>2024-08-28 09:12:18<SeP>2024-08-29 20:11:15<SeP>2024-08-31 07:10:12<SeP>2024-09-01 18:09:09<SeP>2024-09-03 05:08:06<SeP>2024-09-04 16:07:03<SeP>2024-09-06 03:06:00<SeP>2024-09-07 14:04:57<SeP>2024-09-09 01:03:54<SeP>2024-09-10 12:02:51<SeP>2024-09-11 23:01:48<SeP>2024-09-13 10:00:45<SeP>2024-09-14 20:59:42<SeP>2024-09-16 07:58:39<SeP>2024-09-17 18:57:36<SeP>2024-09-19 05:56:33<SeP>2024-09-20 16:55:30<SeP>2024-09-22 03:54:27<SeP>2024-09-23 14:53:24<SeP>2024-09-25 01:52:21<SeP>2024-09-26 12:51:18<SeP>2024-09-27 23:50:15<SeP>2024-09-29 10:49:12<SeP>2024-09-30 21:48:09<SeP>2024-10-02 08:47:06<SeP>2024-10-03 19:46:03<SeP>2024-10-05 06:45:00<SeP>2024-10-06 17:43:57<SeP>2024-10-08 04:42:54<SeP>2024-10-09 15:41:51<SeP>2024-10-11 02:40:48<SeP>2024-10-12 13:39:45<SeP>2024-10-14 00:38:42<SeP>2024-10-15 11:37:39<SeP>2024-10-16 22:36:36<SeP>2024-10-18 09:35:33<SeP>2024-10-19 20:34:30<SeP>2024-10-21 07:33:27<SeP>2024-10-22 18:32:24<SeP>2024-10-24 05:31:21<SeP>2024-10-25 16:30:18<SeP>2024-10-27 03:29:15<SeP>2024-10-28 14:28:12<SeP>2024-10-30 01:27:09<SeP>2024-10-31 12:26:06<SeP>2024-11-01 23:25:03<SeP>2024-11-03 09:24:00<SeP>2024-11-04 20:22:57<SeP>2024-11-06 07:21:54<SeP>2024-11-07 18:20:51<SeP>2024-11-09 05:19:48<SeP>2024-11-10 16:18:45<SeP>2024-11-12 03:17:42<SeP>2024-11-13 14:16:39<SeP>2024-11-15 01:15:36<SeP>2024-11-16 12:14:33<SeP>2024-11-17 23:13:30<SeP>2024-11-19 10:12:27<SeP>2024-11-20 21:11:24<SeP>2024-11-22 08:10:21<SeP>2024-11-23 19:09:18<SeP>2024-11-25 06:08:15<SeP>2024-11-26 17:07:12<SeP>2024-11-28 04:06:09<SeP>2024-11-29 15:05:06<SeP>2024-12-01 02:04:03<SeP>2024-12-02 13:03:00<SeP>2024-12-04 00:01:57<SeP>2024-12-05 11:00:54<SeP>2024-12-06 21:59:51<SeP>2024-12-08 08:58:48<SeP>2024-12-09 19:57:45<SeP>2024-12-11 06:56:42<SeP>2024-12-12 17:55:39<SeP>2024-12-14 04:54:36<SeP>2024-12-15 15:53:33<SeP>2024-12-17 02:52:30<SeP>2024-12-18 13:51:27<SeP>2024-12-20 00:50:24<SeP>2024-12-21 11:49:21<SeP>2024-12-22 22:48:18<SeP>2024-12-24 09:47:15<SeP>2024-12-25 20:46:12<SeP>2024-12-27 07:45:09<SeP>2024-12-28 18:44:06<SeP>2024-12-30 05:43:03<SeP>2024-12-31 16:42:00<SeP>2025-01-02 03:40:57<SeP>2025-01-03 14:39:54<SeP>2025-01-05 01:38:51<SeP>2025-01-06 12:37:48<SeP>2025-01-07 23:36:45<SeP>2025-01-09 10:35:42<SeP>2025-01-10 21:34:39<SeP>2025-01-12 08:33:36<SeP>2025-01-13 19:32:33<SeP>2025-01-15 06:31:30<SeP>2025-01-16 17:30:27<SeP>2025-01-18 04:29:24<SeP>2025-01-19 15:28:21<SeP>2025-01-21 02:27:18<SeP>2025-01-22 13:26:15<SeP>2025-01-24 00:25:12<SeP>2025-01-25 11:24:09<SeP>2025-01-26 22:23:06<SeP>2025-01-28 09:22:03<SeP>2025-01-29 20:21:00<SeP>2025-01-31 07:19:57<SeP>2025-02-01 18:18:54<SeP>2025-02-03 05:17:51<SeP>2025-02-04 16:16:48<SeP>2025-02-06 03:15:45<SeP>2025-02-07 14:14:42<SeP>2025-02-09 01:13:39<SeP>2025-02-10 12:12:36<SeP>2025-02-11 23:11:33<SeP>2025-02-13 10:10:30<SeP>2025-02-14 21:09:27<SeP>2025-02-16 08:08:24<SeP>2025-02-17 19:07:21<SeP>2025-02-19 06:06:18<SeP>2025-02-20 17:05:15<SeP>2025-02-22 04:04:12<SeP>2025-02-23 15:03:09<SeP>2025-02-25 02:02:06<SeP>2025-02-26 13:01:03";
  const itemLabel       = "Attacks";
  const itemData        = "153<SeP>614<SeP>1068<SeP>636<SeP>566<SeP>207<SeP>6967<SeP>527<SeP>9545<SeP>571<SeP>396<SeP>1130<SeP>1244<SeP>287<SeP>147<SeP>462<SeP>111<SeP>761<SeP>282<SeP>5491<SeP>7466<SeP>6580<SeP>8269<SeP>5671<SeP>261<SeP>283<SeP>428<SeP>128<SeP>4350<SeP>1926<SeP>167<SeP>291<SeP>398<SeP>358<SeP>4111<SeP>10560<SeP>8402<SeP>10398<SeP>8498<SeP>5748<SeP>7471<SeP>6863<SeP>8876<SeP>8925<SeP>7879<SeP>7023<SeP>9495<SeP>8766<SeP>7685<SeP>7703<SeP>5193<SeP>10841<SeP>8673<SeP>6753<SeP>8033<SeP>8329<SeP>9240<SeP>18346<SeP>16444<SeP>9103<SeP>11606<SeP>6648<SeP>8070<SeP>8235<SeP>9217<SeP>8773<SeP>5866<SeP>7167<SeP>7009<SeP>6081<SeP>3373<SeP>6238<SeP>5484<SeP>6530<SeP>6422<SeP>7976<SeP>3415<SeP>6273<SeP>5933<SeP>6413<SeP>4831<SeP>7134<SeP>4206<SeP>6355<SeP>6431<SeP>5599<SeP>5717<SeP>5328<SeP>20445<SeP>12030<SeP>35921<SeP>6967<SeP>8793<SeP>5789<SeP>6235<SeP>12564<SeP>6213<SeP>6266<SeP>3934<SeP>4772<SeP>6017<SeP>5118<SeP>8808<SeP>5434<SeP>6860<SeP>4776<SeP>4743<SeP>8482<SeP>8569<SeP>7569<SeP>6502<SeP>3810<SeP>9466<SeP>10110<SeP>6190<SeP>3169<SeP>5847<SeP>8282<SeP>5635<SeP>6909<SeP>8939<SeP>6916<SeP>1242<SeP>2622<SeP>1081<SeP>2265<SeP>2222<SeP>1525<SeP>688<SeP>1103<SeP>1206<SeP>1849<SeP>544<SeP>1296<SeP>1159<SeP>1001<SeP>963<SeP>1022<SeP>1461<SeP>1244<SeP>1147<SeP>1661<SeP>2096<SeP>4234<SeP>11416<SeP>8382<SeP>7414<SeP>7532<SeP>11441<SeP>3991<SeP>8829<SeP>11936<SeP>9580<SeP>12245<SeP>9109<SeP>11391<SeP>10773<SeP>9535<SeP>12915<SeP>6262<SeP>3926<SeP>7338<SeP>20857<SeP>10972<SeP>6008<SeP>7688<SeP>11579<SeP>15757<SeP>8800<SeP>4082<SeP>7650<SeP>6967<SeP>25968<SeP>7833<SeP>9004<SeP>10551<SeP>4861<SeP>6312<SeP>6079<SeP>16175<SeP>4763<SeP>12792<SeP>7904<SeP>6974<SeP>8383<SeP>7759<SeP>3027<SeP>5557<SeP>6152<SeP>7080<SeP>6392<SeP>6090<SeP>7333<SeP>18669<SeP>7148<SeP>8404<SeP>5168<SeP>7656<SeP>9149<SeP>8787<SeP>5849<SeP>2679<SeP>7111<SeP>3283<SeP>5546<SeP>3726<SeP>1035<SeP>121<SeP>626<SeP>195<SeP>541<SeP>1067<SeP>372<SeP>454<SeP>900<SeP>1560<SeP>3185<SeP>1023<SeP>22510<SeP>1563<SeP>4764<SeP>2830<SeP>3562<SeP>6387<SeP>3906<SeP>3293<SeP>3559<SeP>2827<SeP>3053<SeP>3170<SeP>4653<SeP>1655<SeP>3514<SeP>1869<SeP>2592<SeP>1284<SeP>1847<SeP>1160<SeP>1913<SeP>839<SeP>1283<SeP>1592<SeP>26516<SeP>1475<SeP>4059<SeP>3242<SeP>3064<SeP>3186<SeP>3042<SeP>1932<SeP>3302<SeP>2658<SeP>3414<SeP>2518<SeP>2666<SeP>3274<SeP>3049<SeP>6775<SeP>4782<SeP>4473<SeP>3376<SeP>2925<SeP>3657<SeP>3443<SeP>6208<SeP>8573<SeP>5072<SeP>2003<SeP>3307<SeP>2763<SeP>5264<SeP>2899<SeP>3020<SeP>2646<SeP>4355<SeP>4921<SeP>3625<SeP>5841<SeP>4159<SeP>6376<SeP>4801<SeP>5413<SeP>4963<SeP>22089<SeP>5480<SeP>10873<SeP>1747<SeP>3130<SeP>3986<SeP>3652<SeP>5292<SeP>3718<SeP>4601<SeP>4424<SeP>4824<SeP>3095<SeP>4227<SeP>1958<SeP>1373<SeP>2213<SeP>3486<SeP>2673<SeP>2975<SeP>3486<SeP>4494<SeP>3394<SeP>3271<SeP>4696<SeP>3411<SeP>2599<SeP>6038<SeP>7824<SeP>6291<SeP>4652<SeP>4988<SeP>4616<SeP>3489<SeP>3785<SeP>4495<SeP>5818<SeP>5538<SeP>4529<SeP>3915<SeP>1467<SeP>469<SeP>2311<SeP>1552<SeP>645<SeP>1848<SeP>1794<SeP>581<SeP>3222<SeP>4258<SeP>6377<SeP>15036<SeP>23716<SeP>5510<SeP>11369<SeP>16549<SeP>5419<SeP>5534<SeP>5453<SeP>8599<SeP>20232<SeP>5825<SeP>4743<SeP>4444<SeP>5988<SeP>19032<SeP>16291<SeP>4535<SeP>2983<SeP>4517<SeP>5364<SeP>5698<SeP>2914<SeP>3198<SeP>4123<SeP>5147<SeP>4983<SeP>6436<SeP>15977<SeP>5723<SeP>6561<SeP>3400<SeP>2484<SeP>3486<SeP>4298<SeP>3981<SeP>4349<SeP>2417<SeP>4224<SeP>1962<SeP>4604<SeP>4091<SeP>7995<SeP>10819<SeP>7914<SeP>8709<SeP>9323<SeP>7028<SeP>5810<SeP>5108<SeP>4247<SeP>24465<SeP>4831<SeP>3072<SeP>4514<SeP>3281<SeP>11402<SeP>5772<SeP>3657<SeP>4873<SeP>4285<SeP>2729<SeP>9386<SeP>9562<SeP>4578<SeP>3323<SeP>3224";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:58:57<SeP>2023-07-28 21:57:54<SeP>2023-07-30 08:56:51<SeP>2023-07-31 19:55:48<SeP>2023-08-02 06:54:45<SeP>2023-08-03 17:53:42<SeP>2023-08-05 04:52:39<SeP>2023-08-06 15:51:36<SeP>2023-08-08 02:50:33<SeP>2023-08-09 13:49:30<SeP>2023-08-11 00:48:27<SeP>2023-08-12 11:47:24<SeP>2023-08-13 22:46:21<SeP>2023-08-15 09:45:18<SeP>2023-08-16 20:44:15<SeP>2023-08-18 07:43:12<SeP>2023-08-19 18:42:09<SeP>2023-08-21 05:41:06<SeP>2023-08-22 16:40:03<SeP>2023-08-24 03:39:00<SeP>2023-08-25 14:37:57<SeP>2023-08-27 01:36:54<SeP>2023-08-28 12:35:51<SeP>2023-08-29 23:34:48<SeP>2023-08-31 10:33:45<SeP>2023-09-01 21:32:42<SeP>2023-09-03 08:31:39<SeP>2023-09-04 19:30:36<SeP>2023-09-06 06:29:33<SeP>2023-09-07 17:28:30<SeP>2023-09-09 04:27:27<SeP>2023-09-10 15:26:24<SeP>2023-09-12 02:25:21<SeP>2023-09-13 13:24:18<SeP>2023-09-15 00:23:15<SeP>2023-09-16 11:22:12<SeP>2023-09-17 22:21:09<SeP>2023-09-19 09:20:06<SeP>2023-09-20 20:19:03<SeP>2023-09-22 07:18:00<SeP>2023-09-23 18:16:57<SeP>2023-09-25 05:15:54<SeP>2023-09-26 16:14:51<SeP>2023-09-28 03:13:48<SeP>2023-09-29 14:12:45<SeP>2023-10-01 01:11:42<SeP>2023-10-02 12:10:39<SeP>2023-10-03 23:09:36<SeP>2023-10-05 10:08:33<SeP>2023-10-06 21:07:30<SeP>2023-10-08 08:06:27<SeP>2023-10-09 19:05:24<SeP>2023-10-11 06:04:21<SeP>2023-10-12 17:03:18<SeP>2023-10-14 04:02:15<SeP>2023-10-15 15:01:12<SeP>2023-10-17 02:00:09<SeP>2023-10-18 12:59:06<SeP>2023-10-19 23:58:03<SeP>2023-10-21 10:57:00<SeP>2023-10-22 21:55:57<SeP>2023-10-24 08:54:54<SeP>2023-10-25 19:53:51<SeP>2023-10-27 06:52:48<SeP>2023-10-28 17:51:45<SeP>2023-10-30 04:50:42<SeP>2023-10-31 15:49:39<SeP>2023-11-02 02:48:36<SeP>2023-11-03 13:47:33<SeP>2023-11-05 00:46:30<SeP>2023-11-06 10:45:27<SeP>2023-11-07 21:44:24<SeP>2023-11-09 08:43:21<SeP>2023-11-10 19:42:18<SeP>2023-11-12 06:41:15<SeP>2023-11-13 17:40:12<SeP>2023-11-15 04:39:09<SeP>2023-11-16 15:38:06<SeP>2023-11-18 02:37:03<SeP>2023-11-19 13:36:00<SeP>2023-11-21 00:34:57<SeP>2023-11-22 11:33:54<SeP>2023-11-23 22:32:51<SeP>2023-11-25 09:31:48<SeP>2023-11-26 20:30:45<SeP>2023-11-28 07:29:42<SeP>2023-11-29 18:28:39<SeP>2023-12-01 05:27:36<SeP>2023-12-02 16:26:33<SeP>2023-12-04 03:25:30<SeP>2023-12-05 14:24:27<SeP>2023-12-07 01:23:24<SeP>2023-12-08 12:22:21<SeP>2023-12-09 23:21:18<SeP>2023-12-11 10:20:15<SeP>2023-12-12 21:19:12<SeP>2023-12-14 08:18:09<SeP>2023-12-15 19:17:06<SeP>2023-12-17 06:16:03<SeP>2023-12-18 17:15:00<SeP>2023-12-20 04:13:57<SeP>2023-12-21 15:12:54<SeP>2023-12-23 02:11:51<SeP>2023-12-24 13:10:48<SeP>2023-12-26 00:09:45<SeP>2023-12-27 11:08:42<SeP>2023-12-28 22:07:39<SeP>2023-12-30 09:06:36<SeP>2023-12-31 20:05:33<SeP>2024-01-02 07:04:30<SeP>2024-01-03 18:03:27<SeP>2024-01-05 05:02:24<SeP>2024-01-06 16:01:21<SeP>2024-01-08 03:00:18<SeP>2024-01-09 13:59:15<SeP>2024-01-11 00:58:12<SeP>2024-01-12 11:57:09<SeP>2024-01-13 22:56:06<SeP>2024-01-15 09:55:03<SeP>2024-01-16 20:54:00<SeP>2024-01-18 07:52:57<SeP>2024-01-19 18:51:54<SeP>2024-01-21 05:50:51<SeP>2024-01-22 16:49:48<SeP>2024-01-24 03:48:45<SeP>2024-01-25 14:47:42<SeP>2024-01-27 01:46:39<SeP>2024-01-28 12:45:36<SeP>2024-01-29 23:44:33<SeP>2024-01-31 10:43:30<SeP>2024-02-01 21:42:27<SeP>2024-02-03 08:41:24<SeP>2024-02-04 19:40:21<SeP>2024-02-06 06:39:18<SeP>2024-02-07 17:38:15<SeP>2024-02-09 04:37:12<SeP>2024-02-10 15:36:09<SeP>2024-02-12 02:35:06<SeP>2024-02-13 13:34:03<SeP>2024-02-15 00:33:00<SeP>2024-02-16 11:31:57<SeP>2024-02-17 22:30:54<SeP>2024-02-19 09:29:51<SeP>2024-02-20 20:28:48<SeP>2024-02-22 07:27:45<SeP>2024-02-23 18:26:42<SeP>2024-02-25 05:25:39<SeP>2024-02-26 16:24:36<SeP>2024-02-28 03:23:33<SeP>2024-02-29 14:22:30<SeP>2024-03-02 01:21:27<SeP>2024-03-03 12:20:24<SeP>2024-03-04 23:19:21<SeP>2024-03-06 10:18:18<SeP>2024-03-07 21:17:15<SeP>2024-03-09 08:16:12<SeP>2024-03-10 20:15:09<SeP>2024-03-12 07:14:06<SeP>2024-03-13 18:13:03<SeP>2024-03-15 05:12:00<SeP>2024-03-16 16:10:57<SeP>2024-03-18 03:09:54<SeP>2024-03-19 14:08:51<SeP>2024-03-21 01:07:48<SeP>2024-03-22 12:06:45<SeP>2024-03-23 23:05:42<SeP>2024-03-25 10:04:39<SeP>2024-03-26 21:03:36<SeP>2024-03-28 08:02:33<SeP>2024-03-29 19:01:30<SeP>2024-03-31 06:00:27<SeP>2024-04-01 16:59:24<SeP>2024-04-03 03:58:21<SeP>2024-04-04 14:57:18<SeP>2024-04-06 01:56:15<SeP>2024-04-07 12:55:12<SeP>2024-04-08 23:54:09<SeP>2024-04-10 10:53:06<SeP>2024-04-11 21:52:03<SeP>2024-04-13 08:51:00<SeP>2024-04-14 19:49:57<SeP>2024-04-16 06:48:54<SeP>2024-04-17 17:47:51<SeP>2024-04-19 04:46:48<SeP>2024-04-20 15:45:45<SeP>2024-04-22 02:44:42<SeP>2024-04-23 13:43:39<SeP>2024-04-25 00:42:36<SeP>2024-04-26 11:41:33<SeP>2024-04-27 22:40:30<SeP>2024-04-29 09:39:27<SeP>2024-04-30 20:38:24<SeP>2024-05-02 07:37:21<SeP>2024-05-03 18:36:18<SeP>2024-05-05 05:35:15<SeP>2024-05-06 16:34:12<SeP>2024-05-08 03:33:09<SeP>2024-05-09 14:32:06<SeP>2024-05-11 01:31:03<SeP>2024-05-12 12:30:00<SeP>2024-05-13 23:28:57<SeP>2024-05-15 10:27:54<SeP>2024-05-16 21:26:51<SeP>2024-05-18 08:25:48<SeP>2024-05-19 19:24:45<SeP>2024-05-21 06:23:42<SeP>2024-05-22 17:22:39<SeP>2024-05-24 04:21:36<SeP>2024-05-25 15:20:33<SeP>2024-05-27 02:19:30<SeP>2024-05-28 13:18:27<SeP>2024-05-30 00:17:24<SeP>2024-05-31 11:16:21<SeP>2024-06-01 22:15:18<SeP>2024-06-03 09:14:15<SeP>2024-06-04 20:13:12<SeP>2024-06-06 07:12:09<SeP>2024-06-07 18:11:06<SeP>2024-06-09 05:10:03<SeP>2024-06-10 16:09:00<SeP>2024-06-12 03:07:57<SeP>2024-06-13 14:06:54<SeP>2024-06-15 01:05:51<SeP>2024-06-16 12:04:48<SeP>2024-06-17 23:03:45<SeP>2024-06-19 10:02:42<SeP>2024-06-20 21:01:39<SeP>2024-06-22 08:00:36<SeP>2024-06-23 18:59:33<SeP>2024-06-25 05:58:30<SeP>2024-06-26 16:57:27<SeP>2024-06-28 03:56:24<SeP>2024-06-29 14:55:21<SeP>2024-07-01 01:54:18<SeP>2024-07-02 12:53:15<SeP>2024-07-03 23:52:12<SeP>2024-07-05 10:51:09<SeP>2024-07-06 21:50:06<SeP>2024-07-08 08:49:03<SeP>2024-07-09 19:48:00<SeP>2024-07-11 06:46:57<SeP>2024-07-12 17:45:54<SeP>2024-07-14 04:44:51<SeP>2024-07-15 15:43:48<SeP>2024-07-17 02:42:45<SeP>2024-07-18 13:41:42<SeP>2024-07-20 00:40:39<SeP>2024-07-21 11:39:36<SeP>2024-07-22 22:38:33<SeP>2024-07-24 09:37:30<SeP>2024-07-25 20:36:27<SeP>2024-07-27 07:35:24<SeP>2024-07-28 18:34:21<SeP>2024-07-30 05:33:18<SeP>2024-07-31 16:32:15<SeP>2024-08-02 03:31:12<SeP>2024-08-03 14:30:09<SeP>2024-08-05 01:29:06<SeP>2024-08-06 12:28:03<SeP>2024-08-07 23:27:00<SeP>2024-08-09 10:25:57<SeP>2024-08-10 21:24:54<SeP>2024-08-12 08:23:51<SeP>2024-08-13 19:22:48<SeP>2024-08-15 06:21:45<SeP>2024-08-16 17:20:42<SeP>2024-08-18 04:19:39<SeP>2024-08-19 15:18:36<SeP>2024-08-21 02:17:33<SeP>2024-08-22 13:16:30<SeP>2024-08-24 00:15:27<SeP>2024-08-25 11:14:24<SeP>2024-08-26 22:13:21<SeP>2024-08-28 09:12:18<SeP>2024-08-29 20:11:15<SeP>2024-08-31 07:10:12<SeP>2024-09-01 18:09:09<SeP>2024-09-03 05:08:06<SeP>2024-09-04 16:07:03<SeP>2024-09-06 03:06:00<SeP>2024-09-07 14:04:57<SeP>2024-09-09 01:03:54<SeP>2024-09-10 12:02:51<SeP>2024-09-11 23:01:48<SeP>2024-09-13 10:00:45<SeP>2024-09-14 20:59:42<SeP>2024-09-16 07:58:39<SeP>2024-09-17 18:57:36<SeP>2024-09-19 05:56:33<SeP>2024-09-20 16:55:30<SeP>2024-09-22 03:54:27<SeP>2024-09-23 14:53:24<SeP>2024-09-25 01:52:21<SeP>2024-09-26 12:51:18<SeP>2024-09-27 23:50:15<SeP>2024-09-29 10:49:12<SeP>2024-09-30 21:48:09<SeP>2024-10-02 08:47:06<SeP>2024-10-03 19:46:03<SeP>2024-10-05 06:45:00<SeP>2024-10-06 17:43:57<SeP>2024-10-08 04:42:54<SeP>2024-10-09 15:41:51<SeP>2024-10-11 02:40:48<SeP>2024-10-12 13:39:45<SeP>2024-10-14 00:38:42<SeP>2024-10-15 11:37:39<SeP>2024-10-16 22:36:36<SeP>2024-10-18 09:35:33<SeP>2024-10-19 20:34:30<SeP>2024-10-21 07:33:27<SeP>2024-10-22 18:32:24<SeP>2024-10-24 05:31:21<SeP>2024-10-25 16:30:18<SeP>2024-10-27 03:29:15<SeP>2024-10-28 14:28:12<SeP>2024-10-30 01:27:09<SeP>2024-10-31 12:26:06<SeP>2024-11-01 23:25:03<SeP>2024-11-03 09:24:00<SeP>2024-11-04 20:22:57<SeP>2024-11-06 07:21:54<SeP>2024-11-07 18:20:51<SeP>2024-11-09 05:19:48<SeP>2024-11-10 16:18:45<SeP>2024-11-12 03:17:42<SeP>2024-11-13 14:16:39<SeP>2024-11-15 01:15:36<SeP>2024-11-16 12:14:33<SeP>2024-11-17 23:13:30<SeP>2024-11-19 10:12:27<SeP>2024-11-20 21:11:24<SeP>2024-11-22 08:10:21<SeP>2024-11-23 19:09:18<SeP>2024-11-25 06:08:15<SeP>2024-11-26 17:07:12<SeP>2024-11-28 04:06:09<SeP>2024-11-29 15:05:06<SeP>2024-12-01 02:04:03<SeP>2024-12-02 13:03:00<SeP>2024-12-04 00:01:57<SeP>2024-12-05 11:00:54<SeP>2024-12-06 21:59:51<SeP>2024-12-08 08:58:48<SeP>2024-12-09 19:57:45<SeP>2024-12-11 06:56:42<SeP>2024-12-12 17:55:39<SeP>2024-12-14 04:54:36<SeP>2024-12-15 15:53:33<SeP>2024-12-17 02:52:30<SeP>2024-12-18 13:51:27<SeP>2024-12-20 00:50:24<SeP>2024-12-21 11:49:21<SeP>2024-12-22 22:48:18<SeP>2024-12-24 09:47:15<SeP>2024-12-25 20:46:12<SeP>2024-12-27 07:45:09<SeP>2024-12-28 18:44:06<SeP>2024-12-30 05:43:03<SeP>2024-12-31 16:42:00<SeP>2025-01-02 03:40:57<SeP>2025-01-03 14:39:54<SeP>2025-01-05 01:38:51<SeP>2025-01-06 12:37:48<SeP>2025-01-07 23:36:45<SeP>2025-01-09 10:35:42<SeP>2025-01-10 21:34:39<SeP>2025-01-12 08:33:36<SeP>2025-01-13 19:32:33<SeP>2025-01-15 06:31:30<SeP>2025-01-16 17:30:27<SeP>2025-01-18 04:29:24<SeP>2025-01-19 15:28:21<SeP>2025-01-21 02:27:18<SeP>2025-01-22 13:26:15<SeP>2025-01-24 00:25:12<SeP>2025-01-25 11:24:09<SeP>2025-01-26 22:23:06<SeP>2025-01-28 09:22:03<SeP>2025-01-29 20:21:00<SeP>2025-01-31 07:19:57<SeP>2025-02-01 18:18:54<SeP>2025-02-03 05:17:51<SeP>2025-02-04 16:16:48<SeP>2025-02-06 03:15:45<SeP>2025-02-07 14:14:42<SeP>2025-02-09 01:13:39<SeP>2025-02-10 12:12:36<SeP>2025-02-11 23:11:33<SeP>2025-02-13 10:10:30<SeP>2025-02-14 21:09:27<SeP>2025-02-16 08:08:24<SeP>2025-02-17 19:07:21<SeP>2025-02-19 06:06:18<SeP>2025-02-20 17:05:15<SeP>2025-02-22 04:04:12<SeP>2025-02-23 15:03:09<SeP>2025-02-25 02:02:06<SeP>2025-02-26 13:01:03";
  const item1Label       = "Escaneos";
  const item1Data        = "765<SeP>1485<SeP>1382<SeP>1441<SeP>1256<SeP>1700<SeP>957<SeP>948<SeP>1196<SeP>3371<SeP>2122<SeP>2151<SeP>2664<SeP>1645<SeP>719<SeP>961<SeP>1376<SeP>2906<SeP>1029<SeP>1803<SeP>1338<SeP>921<SeP>944<SeP>1390<SeP>819<SeP>930<SeP>806<SeP>2474<SeP>1975<SeP>997<SeP>822<SeP>1364<SeP>1253<SeP>846<SeP>3031<SeP>1877<SeP>2451<SeP>1910<SeP>1563<SeP>1431<SeP>1305<SeP>1919<SeP>1776<SeP>2115<SeP>1578<SeP>1561<SeP>1597<SeP>1734<SeP>1802<SeP>1738<SeP>1788<SeP>1732<SeP>1589<SeP>3132<SeP>1778<SeP>1354<SeP>1839<SeP>2104<SeP>2278<SeP>1409<SeP>3739<SeP>1468<SeP>1447<SeP>1590<SeP>1221<SeP>1876<SeP>1583<SeP>1447<SeP>1280<SeP>1467<SeP>1133<SeP>2377<SeP>1250<SeP>1048<SeP>1344<SeP>2475<SeP>7007<SeP>1307<SeP>1342<SeP>1326<SeP>2230<SeP>1241<SeP>2281<SeP>5546<SeP>1531<SeP>1632<SeP>889<SeP>3341<SeP>1222<SeP>1024<SeP>1066<SeP>1111<SeP>1014<SeP>3082<SeP>915<SeP>1070<SeP>2159<SeP>4457<SeP>4610<SeP>950<SeP>935<SeP>970<SeP>960<SeP>1007<SeP>832<SeP>1133<SeP>2604<SeP>3123<SeP>1618<SeP>1771<SeP>768<SeP>651<SeP>1438<SeP>1302<SeP>1107<SeP>965<SeP>2288<SeP>1054<SeP>1196<SeP>1089<SeP>894<SeP>1189<SeP>643<SeP>912<SeP>841<SeP>800<SeP>1121<SeP>824<SeP>915<SeP>749<SeP>918<SeP>830<SeP>695<SeP>832<SeP>835<SeP>917<SeP>828<SeP>874<SeP>808<SeP>803<SeP>771<SeP>1009<SeP>904<SeP>768<SeP>933<SeP>1005<SeP>803<SeP>1093<SeP>991<SeP>430<SeP>965<SeP>830<SeP>904<SeP>1243<SeP>954<SeP>1098<SeP>1268<SeP>996<SeP>968<SeP>919<SeP>895<SeP>822<SeP>924<SeP>1071<SeP>956<SeP>775<SeP>972<SeP>1071<SeP>879<SeP>1090<SeP>1004<SeP>1040<SeP>1060<SeP>952<SeP>952<SeP>2175<SeP>1248<SeP>1079<SeP>1062<SeP>1047<SeP>1050<SeP>975<SeP>845<SeP>674<SeP>913<SeP>1147<SeP>913<SeP>921<SeP>1056<SeP>1333<SeP>1039<SeP>1158<SeP>1282<SeP>1210<SeP>1337<SeP>1251<SeP>1280<SeP>1538<SeP>1916<SeP>1428<SeP>1241<SeP>710<SeP>1059<SeP>910<SeP>1179<SeP>415<SeP>885<SeP>933<SeP>919<SeP>2543<SeP>5206<SeP>2159<SeP>1974<SeP>1132<SeP>886<SeP>1024<SeP>864<SeP>975<SeP>920<SeP>1133<SeP>1057<SeP>1034<SeP>1997<SeP>1498<SeP>1033<SeP>1277<SeP>1178<SeP>1259<SeP>1073<SeP>976<SeP>1038<SeP>1084<SeP>1096<SeP>1047<SeP>1095<SeP>986<SeP>1134<SeP>805<SeP>1367<SeP>1143<SeP>1135<SeP>1172<SeP>1245<SeP>1331<SeP>1560<SeP>1142<SeP>1177<SeP>1111<SeP>1156<SeP>2017<SeP>1212<SeP>1585<SeP>1847<SeP>1430<SeP>1919<SeP>1734<SeP>1281<SeP>1181<SeP>1080<SeP>1341<SeP>1446<SeP>1276<SeP>1304<SeP>1354<SeP>1839<SeP>1386<SeP>1501<SeP>1339<SeP>1478<SeP>1235<SeP>995<SeP>1173<SeP>1236<SeP>1174<SeP>1249<SeP>1403<SeP>1090<SeP>1571<SeP>1728<SeP>1260<SeP>1433<SeP>1664<SeP>1320<SeP>956<SeP>994<SeP>1019<SeP>993<SeP>818<SeP>993<SeP>1742<SeP>1191<SeP>1043<SeP>1118<SeP>958<SeP>772<SeP>1133<SeP>1351<SeP>791<SeP>973<SeP>904<SeP>1309<SeP>1514<SeP>1536<SeP>1102<SeP>1131<SeP>907<SeP>1822<SeP>1134<SeP>1088<SeP>1119<SeP>949<SeP>1610<SeP>978<SeP>958<SeP>1199<SeP>1111<SeP>824<SeP>917<SeP>1095<SeP>1448<SeP>1549<SeP>1474<SeP>1367<SeP>1257<SeP>903<SeP>1139<SeP>1258<SeP>1154<SeP>1136<SeP>999<SeP>1049<SeP>1130<SeP>1467<SeP>1338<SeP>1466<SeP>1419<SeP>1429<SeP>1494<SeP>1469<SeP>1248<SeP>1479<SeP>1491<SeP>1438<SeP>1361<SeP>1472<SeP>1673<SeP>1480<SeP>1329<SeP>1355<SeP>1404<SeP>1327<SeP>1224<SeP>1378<SeP>1561<SeP>1510<SeP>1191<SeP>1310<SeP>1204<SeP>1445<SeP>1282<SeP>1154<SeP>1549<SeP>1946<SeP>1434<SeP>1179<SeP>757<SeP>1466<SeP>1784<SeP>1286<SeP>1307<SeP>1220<SeP>1149<SeP>1393<SeP>1474<SeP>1302<SeP>1438<SeP>1731<SeP>1285<SeP>1593<SeP>1729<SeP>1264<SeP>1526<SeP>1361<SeP>1777<SeP>1592<SeP>1009<SeP>1063<SeP>2055<SeP>1869<SeP>1684<SeP>1764<SeP>1755<SeP>1445<SeP>1622<SeP>1617<SeP>1586<SeP>1379<SeP>1853<SeP>1671<SeP>1703";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "153<SeP>614<SeP>1068<SeP>636<SeP>566<SeP>207<SeP>6967<SeP>527<SeP>9545<SeP>571<SeP>396<SeP>1130<SeP>1244<SeP>287<SeP>147<SeP>462<SeP>111<SeP>761<SeP>282<SeP>5491<SeP>7466<SeP>6580<SeP>8269<SeP>5671<SeP>261<SeP>283<SeP>428<SeP>128<SeP>4350<SeP>1926<SeP>167<SeP>291<SeP>398<SeP>358<SeP>4111<SeP>10560<SeP>8402<SeP>10398<SeP>8498<SeP>5748<SeP>7471<SeP>6863<SeP>8876<SeP>8925<SeP>7879<SeP>7023<SeP>9495<SeP>8766<SeP>7685<SeP>7703<SeP>5193<SeP>10841<SeP>8673<SeP>6753<SeP>8033<SeP>8329<SeP>9240<SeP>18346<SeP>16444<SeP>9103<SeP>11606<SeP>6648<SeP>8070<SeP>8235<SeP>9217<SeP>8773<SeP>5866<SeP>7167<SeP>7009<SeP>6081<SeP>3373<SeP>6238<SeP>5484<SeP>6530<SeP>6422<SeP>7976<SeP>3415<SeP>6273<SeP>5933<SeP>6413<SeP>4831<SeP>7134<SeP>4206<SeP>6355<SeP>6431<SeP>5599<SeP>5717<SeP>5328<SeP>20445<SeP>12030<SeP>35921<SeP>6967<SeP>8793<SeP>5789<SeP>6235<SeP>12564<SeP>6213<SeP>6266<SeP>3934<SeP>4772<SeP>6017<SeP>5118<SeP>8808<SeP>5434<SeP>6860<SeP>4776<SeP>4743<SeP>8482<SeP>8569<SeP>7569<SeP>6502<SeP>3810<SeP>9466<SeP>10110<SeP>6190<SeP>3169<SeP>5847<SeP>8282<SeP>5635<SeP>6909<SeP>8939<SeP>6916<SeP>1242<SeP>2622<SeP>1081<SeP>2265<SeP>2222<SeP>1525<SeP>688<SeP>1103<SeP>1206<SeP>1849<SeP>544<SeP>1296<SeP>1159<SeP>1001<SeP>963<SeP>1022<SeP>1461<SeP>1244<SeP>1147<SeP>1661<SeP>2096<SeP>4234<SeP>11416<SeP>8382<SeP>7414<SeP>7532<SeP>11441<SeP>3991<SeP>8829<SeP>11936<SeP>9580<SeP>12245<SeP>9109<SeP>11391<SeP>10773<SeP>9535<SeP>12915<SeP>6262<SeP>3926<SeP>7338<SeP>20857<SeP>10972<SeP>6008<SeP>7688<SeP>11579<SeP>15757<SeP>8800<SeP>4082<SeP>7650<SeP>6967<SeP>25968<SeP>7833<SeP>9004<SeP>10551<SeP>4861<SeP>6312<SeP>6079<SeP>16175<SeP>4763<SeP>12792<SeP>7904<SeP>6974<SeP>8383<SeP>7759<SeP>3027<SeP>5557<SeP>6152<SeP>7080<SeP>6392<SeP>6090<SeP>7333<SeP>18669<SeP>7148<SeP>8404<SeP>5168<SeP>7656<SeP>9149<SeP>8787<SeP>5849<SeP>2679<SeP>7111<SeP>3283<SeP>5546<SeP>3726<SeP>1035<SeP>121<SeP>626<SeP>195<SeP>541<SeP>1067<SeP>372<SeP>454<SeP>900<SeP>1560<SeP>3185<SeP>1023<SeP>22510<SeP>1563<SeP>4764<SeP>2830<SeP>3562<SeP>6387<SeP>3906<SeP>3293<SeP>3559<SeP>2827<SeP>3053<SeP>3170<SeP>4653<SeP>1655<SeP>3514<SeP>1869<SeP>2592<SeP>1284<SeP>1847<SeP>1160<SeP>1913<SeP>839<SeP>1283<SeP>1592<SeP>26516<SeP>1475<SeP>4059<SeP>3242<SeP>3064<SeP>3186<SeP>3042<SeP>1932<SeP>3302<SeP>2658<SeP>3414<SeP>2518<SeP>2666<SeP>3274<SeP>3049<SeP>6775<SeP>4782<SeP>4473<SeP>3376<SeP>2925<SeP>3657<SeP>3443<SeP>6208<SeP>8573<SeP>5072<SeP>2003<SeP>3307<SeP>2763<SeP>5264<SeP>2899<SeP>3020<SeP>2646<SeP>4355<SeP>4921<SeP>3625<SeP>5841<SeP>4159<SeP>6376<SeP>4801<SeP>5413<SeP>4963<SeP>22089<SeP>5480<SeP>10873<SeP>1747<SeP>3130<SeP>3986<SeP>3652<SeP>5292<SeP>3718<SeP>4601<SeP>4424<SeP>4824<SeP>3095<SeP>4227<SeP>1958<SeP>1373<SeP>2213<SeP>3486<SeP>2673<SeP>2975<SeP>3486<SeP>4494<SeP>3394<SeP>3271<SeP>4696<SeP>3411<SeP>2599<SeP>6038<SeP>7824<SeP>6291<SeP>4652<SeP>4988<SeP>4616<SeP>3489<SeP>3785<SeP>4495<SeP>5818<SeP>5538<SeP>4529<SeP>3915<SeP>1467<SeP>469<SeP>2311<SeP>1552<SeP>645<SeP>1848<SeP>1794<SeP>581<SeP>3222<SeP>4258<SeP>6377<SeP>15036<SeP>23716<SeP>5510<SeP>11369<SeP>16549<SeP>5419<SeP>5534<SeP>5453<SeP>8599<SeP>20232<SeP>5825<SeP>4743<SeP>4444<SeP>5988<SeP>19032<SeP>16291<SeP>4535<SeP>2983<SeP>4517<SeP>5364<SeP>5698<SeP>2914<SeP>3198<SeP>4123<SeP>5147<SeP>4983<SeP>6436<SeP>15977<SeP>5723<SeP>6561<SeP>3400<SeP>2484<SeP>3486<SeP>4298<SeP>3981<SeP>4349<SeP>2417<SeP>4224<SeP>1962<SeP>4604<SeP>4091<SeP>7995<SeP>10819<SeP>7914<SeP>8709<SeP>9323<SeP>7028<SeP>5810<SeP>5108<SeP>4247<SeP>24465<SeP>4831<SeP>3072<SeP>4514<SeP>3281<SeP>11402<SeP>5772<SeP>3657<SeP>4873<SeP>4285<SeP>2729<SeP>9386<SeP>9562<SeP>4578<SeP>3323<SeP>3224";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:58:57<SeP>2023-07-28 21:57:54<SeP>2023-07-30 08:56:51<SeP>2023-07-31 19:55:48<SeP>2023-08-02 06:54:45<SeP>2023-08-03 17:53:42<SeP>2023-08-05 04:52:39<SeP>2023-08-06 15:51:36<SeP>2023-08-08 02:50:33<SeP>2023-08-09 13:49:30<SeP>2023-08-11 00:48:27<SeP>2023-08-12 11:47:24<SeP>2023-08-13 22:46:21<SeP>2023-08-15 09:45:18<SeP>2023-08-16 20:44:15<SeP>2023-08-18 07:43:12<SeP>2023-08-19 18:42:09<SeP>2023-08-21 05:41:06<SeP>2023-08-22 16:40:03<SeP>2023-08-24 03:39:00<SeP>2023-08-25 14:37:57<SeP>2023-08-27 01:36:54<SeP>2023-08-28 12:35:51<SeP>2023-08-29 23:34:48<SeP>2023-08-31 10:33:45<SeP>2023-09-01 21:32:42<SeP>2023-09-03 08:31:39<SeP>2023-09-04 19:30:36<SeP>2023-09-06 06:29:33<SeP>2023-09-07 17:28:30<SeP>2023-09-09 04:27:27<SeP>2023-09-10 15:26:24<SeP>2023-09-12 02:25:21<SeP>2023-09-13 13:24:18<SeP>2023-09-15 00:23:15<SeP>2023-09-16 11:22:12<SeP>2023-09-17 22:21:09<SeP>2023-09-19 09:20:06<SeP>2023-09-20 20:19:03<SeP>2023-09-22 07:18:00<SeP>2023-09-23 18:16:57<SeP>2023-09-25 05:15:54<SeP>2023-09-26 16:14:51<SeP>2023-09-28 03:13:48<SeP>2023-09-29 14:12:45<SeP>2023-10-01 01:11:42<SeP>2023-10-02 12:10:39<SeP>2023-10-03 23:09:36<SeP>2023-10-05 10:08:33<SeP>2023-10-06 21:07:30<SeP>2023-10-08 08:06:27<SeP>2023-10-09 19:05:24<SeP>2023-10-11 06:04:21<SeP>2023-10-12 17:03:18<SeP>2023-10-14 04:02:15<SeP>2023-10-15 15:01:12<SeP>2023-10-17 02:00:09<SeP>2023-10-18 12:59:06<SeP>2023-10-19 23:58:03<SeP>2023-10-21 10:57:00<SeP>2023-10-22 21:55:57<SeP>2023-10-24 08:54:54<SeP>2023-10-25 19:53:51<SeP>2023-10-27 06:52:48<SeP>2023-10-28 17:51:45<SeP>2023-10-30 04:50:42<SeP>2023-10-31 15:49:39<SeP>2023-11-02 02:48:36<SeP>2023-11-03 13:47:33<SeP>2023-11-05 00:46:30<SeP>2023-11-06 10:45:27<SeP>2023-11-07 21:44:24<SeP>2023-11-09 08:43:21<SeP>2023-11-10 19:42:18<SeP>2023-11-12 06:41:15<SeP>2023-11-13 17:40:12<SeP>2023-11-15 04:39:09<SeP>2023-11-16 15:38:06<SeP>2023-11-18 02:37:03<SeP>2023-11-19 13:36:00<SeP>2023-11-21 00:34:57<SeP>2023-11-22 11:33:54<SeP>2023-11-23 22:32:51<SeP>2023-11-25 09:31:48<SeP>2023-11-26 20:30:45<SeP>2023-11-28 07:29:42<SeP>2023-11-29 18:28:39<SeP>2023-12-01 05:27:36<SeP>2023-12-02 16:26:33<SeP>2023-12-04 03:25:30<SeP>2023-12-05 14:24:27<SeP>2023-12-07 01:23:24<SeP>2023-12-08 12:22:21<SeP>2023-12-09 23:21:18<SeP>2023-12-11 10:20:15<SeP>2023-12-12 21:19:12<SeP>2023-12-14 08:18:09<SeP>2023-12-15 19:17:06<SeP>2023-12-17 06:16:03<SeP>2023-12-18 17:15:00<SeP>2023-12-20 04:13:57<SeP>2023-12-21 15:12:54<SeP>2023-12-23 02:11:51<SeP>2023-12-24 13:10:48<SeP>2023-12-26 00:09:45<SeP>2023-12-27 11:08:42<SeP>2023-12-28 22:07:39<SeP>2023-12-30 09:06:36<SeP>2023-12-31 20:05:33<SeP>2024-01-02 07:04:30<SeP>2024-01-03 18:03:27<SeP>2024-01-05 05:02:24<SeP>2024-01-06 16:01:21<SeP>2024-01-08 03:00:18<SeP>2024-01-09 13:59:15<SeP>2024-01-11 00:58:12<SeP>2024-01-12 11:57:09<SeP>2024-01-13 22:56:06<SeP>2024-01-15 09:55:03<SeP>2024-01-16 20:54:00<SeP>2024-01-18 07:52:57<SeP>2024-01-19 18:51:54<SeP>2024-01-21 05:50:51<SeP>2024-01-22 16:49:48<SeP>2024-01-24 03:48:45<SeP>2024-01-25 14:47:42<SeP>2024-01-27 01:46:39<SeP>2024-01-28 12:45:36<SeP>2024-01-29 23:44:33<SeP>2024-01-31 10:43:30<SeP>2024-02-01 21:42:27<SeP>2024-02-03 08:41:24<SeP>2024-02-04 19:40:21<SeP>2024-02-06 06:39:18<SeP>2024-02-07 17:38:15<SeP>2024-02-09 04:37:12<SeP>2024-02-10 15:36:09<SeP>2024-02-12 02:35:06<SeP>2024-02-13 13:34:03<SeP>2024-02-15 00:33:00<SeP>2024-02-16 11:31:57<SeP>2024-02-17 22:30:54<SeP>2024-02-19 09:29:51<SeP>2024-02-20 20:28:48<SeP>2024-02-22 07:27:45<SeP>2024-02-23 18:26:42<SeP>2024-02-25 05:25:39<SeP>2024-02-26 16:24:36<SeP>2024-02-28 03:23:33<SeP>2024-02-29 14:22:30<SeP>2024-03-02 01:21:27<SeP>2024-03-03 12:20:24<SeP>2024-03-04 23:19:21<SeP>2024-03-06 10:18:18<SeP>2024-03-07 21:17:15<SeP>2024-03-09 08:16:12<SeP>2024-03-10 20:15:09<SeP>2024-03-12 07:14:06<SeP>2024-03-13 18:13:03<SeP>2024-03-15 05:12:00<SeP>2024-03-16 16:10:57<SeP>2024-03-18 03:09:54<SeP>2024-03-19 14:08:51<SeP>2024-03-21 01:07:48<SeP>2024-03-22 12:06:45<SeP>2024-03-23 23:05:42<SeP>2024-03-25 10:04:39<SeP>2024-03-26 21:03:36<SeP>2024-03-28 08:02:33<SeP>2024-03-29 19:01:30<SeP>2024-03-31 06:00:27<SeP>2024-04-01 16:59:24<SeP>2024-04-03 03:58:21<SeP>2024-04-04 14:57:18<SeP>2024-04-06 01:56:15<SeP>2024-04-07 12:55:12<SeP>2024-04-08 23:54:09<SeP>2024-04-10 10:53:06<SeP>2024-04-11 21:52:03<SeP>2024-04-13 08:51:00<SeP>2024-04-14 19:49:57<SeP>2024-04-16 06:48:54<SeP>2024-04-17 17:47:51<SeP>2024-04-19 04:46:48<SeP>2024-04-20 15:45:45<SeP>2024-04-22 02:44:42<SeP>2024-04-23 13:43:39<SeP>2024-04-25 00:42:36<SeP>2024-04-26 11:41:33<SeP>2024-04-27 22:40:30<SeP>2024-04-29 09:39:27<SeP>2024-04-30 20:38:24<SeP>2024-05-02 07:37:21<SeP>2024-05-03 18:36:18<SeP>2024-05-05 05:35:15<SeP>2024-05-06 16:34:12<SeP>2024-05-08 03:33:09<SeP>2024-05-09 14:32:06<SeP>2024-05-11 01:31:03<SeP>2024-05-12 12:30:00<SeP>2024-05-13 23:28:57<SeP>2024-05-15 10:27:54<SeP>2024-05-16 21:26:51<SeP>2024-05-18 08:25:48<SeP>2024-05-19 19:24:45<SeP>2024-05-21 06:23:42<SeP>2024-05-22 17:22:39<SeP>2024-05-24 04:21:36<SeP>2024-05-25 15:20:33<SeP>2024-05-27 02:19:30<SeP>2024-05-28 13:18:27<SeP>2024-05-30 00:17:24<SeP>2024-05-31 11:16:21<SeP>2024-06-01 22:15:18<SeP>2024-06-03 09:14:15<SeP>2024-06-04 20:13:12<SeP>2024-06-06 07:12:09<SeP>2024-06-07 18:11:06<SeP>2024-06-09 05:10:03<SeP>2024-06-10 16:09:00<SeP>2024-06-12 03:07:57<SeP>2024-06-13 14:06:54<SeP>2024-06-15 01:05:51<SeP>2024-06-16 12:04:48<SeP>2024-06-17 23:03:45<SeP>2024-06-19 10:02:42<SeP>2024-06-20 21:01:39<SeP>2024-06-22 08:00:36<SeP>2024-06-23 18:59:33<SeP>2024-06-25 05:58:30<SeP>2024-06-26 16:57:27<SeP>2024-06-28 03:56:24<SeP>2024-06-29 14:55:21<SeP>2024-07-01 01:54:18<SeP>2024-07-02 12:53:15<SeP>2024-07-03 23:52:12<SeP>2024-07-05 10:51:09<SeP>2024-07-06 21:50:06<SeP>2024-07-08 08:49:03<SeP>2024-07-09 19:48:00<SeP>2024-07-11 06:46:57<SeP>2024-07-12 17:45:54<SeP>2024-07-14 04:44:51<SeP>2024-07-15 15:43:48<SeP>2024-07-17 02:42:45<SeP>2024-07-18 13:41:42<SeP>2024-07-20 00:40:39<SeP>2024-07-21 11:39:36<SeP>2024-07-22 22:38:33<SeP>2024-07-24 09:37:30<SeP>2024-07-25 20:36:27<SeP>2024-07-27 07:35:24<SeP>2024-07-28 18:34:21<SeP>2024-07-30 05:33:18<SeP>2024-07-31 16:32:15<SeP>2024-08-02 03:31:12<SeP>2024-08-03 14:30:09<SeP>2024-08-05 01:29:06<SeP>2024-08-06 12:28:03<SeP>2024-08-07 23:27:00<SeP>2024-08-09 10:25:57<SeP>2024-08-10 21:24:54<SeP>2024-08-12 08:23:51<SeP>2024-08-13 19:22:48<SeP>2024-08-15 06:21:45<SeP>2024-08-16 17:20:42<SeP>2024-08-18 04:19:39<SeP>2024-08-19 15:18:36<SeP>2024-08-21 02:17:33<SeP>2024-08-22 13:16:30<SeP>2024-08-24 00:15:27<SeP>2024-08-25 11:14:24<SeP>2024-08-26 22:13:21<SeP>2024-08-28 09:12:18<SeP>2024-08-29 20:11:15<SeP>2024-08-31 07:10:12<SeP>2024-09-01 18:09:09<SeP>2024-09-03 05:08:06<SeP>2024-09-04 16:07:03<SeP>2024-09-06 03:06:00<SeP>2024-09-07 14:04:57<SeP>2024-09-09 01:03:54<SeP>2024-09-10 12:02:51<SeP>2024-09-11 23:01:48<SeP>2024-09-13 10:00:45<SeP>2024-09-14 20:59:42<SeP>2024-09-16 07:58:39<SeP>2024-09-17 18:57:36<SeP>2024-09-19 05:56:33<SeP>2024-09-20 16:55:30<SeP>2024-09-22 03:54:27<SeP>2024-09-23 14:53:24<SeP>2024-09-25 01:52:21<SeP>2024-09-26 12:51:18<SeP>2024-09-27 23:50:15<SeP>2024-09-29 10:49:12<SeP>2024-09-30 21:48:09<SeP>2024-10-02 08:47:06<SeP>2024-10-03 19:46:03<SeP>2024-10-05 06:45:00<SeP>2024-10-06 17:43:57<SeP>2024-10-08 04:42:54<SeP>2024-10-09 15:41:51<SeP>2024-10-11 02:40:48<SeP>2024-10-12 13:39:45<SeP>2024-10-14 00:38:42<SeP>2024-10-15 11:37:39<SeP>2024-10-16 22:36:36<SeP>2024-10-18 09:35:33<SeP>2024-10-19 20:34:30<SeP>2024-10-21 07:33:27<SeP>2024-10-22 18:32:24<SeP>2024-10-24 05:31:21<SeP>2024-10-25 16:30:18<SeP>2024-10-27 03:29:15<SeP>2024-10-28 14:28:12<SeP>2024-10-30 01:27:09<SeP>2024-10-31 12:26:06<SeP>2024-11-01 23:25:03<SeP>2024-11-03 09:24:00<SeP>2024-11-04 20:22:57<SeP>2024-11-06 07:21:54<SeP>2024-11-07 18:20:51<SeP>2024-11-09 05:19:48<SeP>2024-11-10 16:18:45<SeP>2024-11-12 03:17:42<SeP>2024-11-13 14:16:39<SeP>2024-11-15 01:15:36<SeP>2024-11-16 12:14:33<SeP>2024-11-17 23:13:30<SeP>2024-11-19 10:12:27<SeP>2024-11-20 21:11:24<SeP>2024-11-22 08:10:21<SeP>2024-11-23 19:09:18<SeP>2024-11-25 06:08:15<SeP>2024-11-26 17:07:12<SeP>2024-11-28 04:06:09<SeP>2024-11-29 15:05:06<SeP>2024-12-01 02:04:03<SeP>2024-12-02 13:03:00<SeP>2024-12-04 00:01:57<SeP>2024-12-05 11:00:54<SeP>2024-12-06 21:59:51<SeP>2024-12-08 08:58:48<SeP>2024-12-09 19:57:45<SeP>2024-12-11 06:56:42<SeP>2024-12-12 17:55:39<SeP>2024-12-14 04:54:36<SeP>2024-12-15 15:53:33<SeP>2024-12-17 02:52:30<SeP>2024-12-18 13:51:27<SeP>2024-12-20 00:50:24<SeP>2024-12-21 11:49:21<SeP>2024-12-22 22:48:18<SeP>2024-12-24 09:47:15<SeP>2024-12-25 20:46:12<SeP>2024-12-27 07:45:09<SeP>2024-12-28 18:44:06<SeP>2024-12-30 05:43:03<SeP>2024-12-31 16:42:00<SeP>2025-01-02 03:40:57<SeP>2025-01-03 14:39:54<SeP>2025-01-05 01:38:51<SeP>2025-01-06 12:37:48<SeP>2025-01-07 23:36:45<SeP>2025-01-09 10:35:42<SeP>2025-01-10 21:34:39<SeP>2025-01-12 08:33:36<SeP>2025-01-13 19:32:33<SeP>2025-01-15 06:31:30<SeP>2025-01-16 17:30:27<SeP>2025-01-18 04:29:24<SeP>2025-01-19 15:28:21<SeP>2025-01-21 02:27:18<SeP>2025-01-22 13:26:15<SeP>2025-01-24 00:25:12<SeP>2025-01-25 11:24:09<SeP>2025-01-26 22:23:06<SeP>2025-01-28 09:22:03<SeP>2025-01-29 20:21:00<SeP>2025-01-31 07:19:57<SeP>2025-02-01 18:18:54<SeP>2025-02-03 05:17:51<SeP>2025-02-04 16:16:48<SeP>2025-02-06 03:15:45<SeP>2025-02-07 14:14:42<SeP>2025-02-09 01:13:39<SeP>2025-02-10 12:12:36<SeP>2025-02-11 23:11:33<SeP>2025-02-13 10:10:30<SeP>2025-02-14 21:09:27<SeP>2025-02-16 08:08:24<SeP>2025-02-17 19:07:21<SeP>2025-02-19 06:06:18<SeP>2025-02-20 17:05:15<SeP>2025-02-22 04:04:12<SeP>2025-02-23 15:03:09<SeP>2025-02-25 02:02:06<SeP>2025-02-26 13:01:03";
  const itemLabel       = "Escaneos";
  const itemData        = "765<SeP>1485<SeP>1382<SeP>1441<SeP>1256<SeP>1700<SeP>957<SeP>948<SeP>1196<SeP>3371<SeP>2122<SeP>2151<SeP>2664<SeP>1645<SeP>719<SeP>961<SeP>1376<SeP>2906<SeP>1029<SeP>1803<SeP>1338<SeP>921<SeP>944<SeP>1390<SeP>819<SeP>930<SeP>806<SeP>2474<SeP>1975<SeP>997<SeP>822<SeP>1364<SeP>1253<SeP>846<SeP>3031<SeP>1877<SeP>2451<SeP>1910<SeP>1563<SeP>1431<SeP>1305<SeP>1919<SeP>1776<SeP>2115<SeP>1578<SeP>1561<SeP>1597<SeP>1734<SeP>1802<SeP>1738<SeP>1788<SeP>1732<SeP>1589<SeP>3132<SeP>1778<SeP>1354<SeP>1839<SeP>2104<SeP>2278<SeP>1409<SeP>3739<SeP>1468<SeP>1447<SeP>1590<SeP>1221<SeP>1876<SeP>1583<SeP>1447<SeP>1280<SeP>1467<SeP>1133<SeP>2377<SeP>1250<SeP>1048<SeP>1344<SeP>2475<SeP>7007<SeP>1307<SeP>1342<SeP>1326<SeP>2230<SeP>1241<SeP>2281<SeP>5546<SeP>1531<SeP>1632<SeP>889<SeP>3341<SeP>1222<SeP>1024<SeP>1066<SeP>1111<SeP>1014<SeP>3082<SeP>915<SeP>1070<SeP>2159<SeP>4457<SeP>4610<SeP>950<SeP>935<SeP>970<SeP>960<SeP>1007<SeP>832<SeP>1133<SeP>2604<SeP>3123<SeP>1618<SeP>1771<SeP>768<SeP>651<SeP>1438<SeP>1302<SeP>1107<SeP>965<SeP>2288<SeP>1054<SeP>1196<SeP>1089<SeP>894<SeP>1189<SeP>643<SeP>912<SeP>841<SeP>800<SeP>1121<SeP>824<SeP>915<SeP>749<SeP>918<SeP>830<SeP>695<SeP>832<SeP>835<SeP>917<SeP>828<SeP>874<SeP>808<SeP>803<SeP>771<SeP>1009<SeP>904<SeP>768<SeP>933<SeP>1005<SeP>803<SeP>1093<SeP>991<SeP>430<SeP>965<SeP>830<SeP>904<SeP>1243<SeP>954<SeP>1098<SeP>1268<SeP>996<SeP>968<SeP>919<SeP>895<SeP>822<SeP>924<SeP>1071<SeP>956<SeP>775<SeP>972<SeP>1071<SeP>879<SeP>1090<SeP>1004<SeP>1040<SeP>1060<SeP>952<SeP>952<SeP>2175<SeP>1248<SeP>1079<SeP>1062<SeP>1047<SeP>1050<SeP>975<SeP>845<SeP>674<SeP>913<SeP>1147<SeP>913<SeP>921<SeP>1056<SeP>1333<SeP>1039<SeP>1158<SeP>1282<SeP>1210<SeP>1337<SeP>1251<SeP>1280<SeP>1538<SeP>1916<SeP>1428<SeP>1241<SeP>710<SeP>1059<SeP>910<SeP>1179<SeP>415<SeP>885<SeP>933<SeP>919<SeP>2543<SeP>5206<SeP>2159<SeP>1974<SeP>1132<SeP>886<SeP>1024<SeP>864<SeP>975<SeP>920<SeP>1133<SeP>1057<SeP>1034<SeP>1997<SeP>1498<SeP>1033<SeP>1277<SeP>1178<SeP>1259<SeP>1073<SeP>976<SeP>1038<SeP>1084<SeP>1096<SeP>1047<SeP>1095<SeP>986<SeP>1134<SeP>805<SeP>1367<SeP>1143<SeP>1135<SeP>1172<SeP>1245<SeP>1331<SeP>1560<SeP>1142<SeP>1177<SeP>1111<SeP>1156<SeP>2017<SeP>1212<SeP>1585<SeP>1847<SeP>1430<SeP>1919<SeP>1734<SeP>1281<SeP>1181<SeP>1080<SeP>1341<SeP>1446<SeP>1276<SeP>1304<SeP>1354<SeP>1839<SeP>1386<SeP>1501<SeP>1339<SeP>1478<SeP>1235<SeP>995<SeP>1173<SeP>1236<SeP>1174<SeP>1249<SeP>1403<SeP>1090<SeP>1571<SeP>1728<SeP>1260<SeP>1433<SeP>1664<SeP>1320<SeP>956<SeP>994<SeP>1019<SeP>993<SeP>818<SeP>993<SeP>1742<SeP>1191<SeP>1043<SeP>1118<SeP>958<SeP>772<SeP>1133<SeP>1351<SeP>791<SeP>973<SeP>904<SeP>1309<SeP>1514<SeP>1536<SeP>1102<SeP>1131<SeP>907<SeP>1822<SeP>1134<SeP>1088<SeP>1119<SeP>949<SeP>1610<SeP>978<SeP>958<SeP>1199<SeP>1111<SeP>824<SeP>917<SeP>1095<SeP>1448<SeP>1549<SeP>1474<SeP>1367<SeP>1257<SeP>903<SeP>1139<SeP>1258<SeP>1154<SeP>1136<SeP>999<SeP>1049<SeP>1130<SeP>1467<SeP>1338<SeP>1466<SeP>1419<SeP>1429<SeP>1494<SeP>1469<SeP>1248<SeP>1479<SeP>1491<SeP>1438<SeP>1361<SeP>1472<SeP>1673<SeP>1480<SeP>1329<SeP>1355<SeP>1404<SeP>1327<SeP>1224<SeP>1378<SeP>1561<SeP>1510<SeP>1191<SeP>1310<SeP>1204<SeP>1445<SeP>1282<SeP>1154<SeP>1549<SeP>1946<SeP>1434<SeP>1179<SeP>757<SeP>1466<SeP>1784<SeP>1286<SeP>1307<SeP>1220<SeP>1149<SeP>1393<SeP>1474<SeP>1302<SeP>1438<SeP>1731<SeP>1285<SeP>1593<SeP>1729<SeP>1264<SeP>1526<SeP>1361<SeP>1777<SeP>1592<SeP>1009<SeP>1063<SeP>2055<SeP>1869<SeP>1684<SeP>1764<SeP>1755<SeP>1445<SeP>1622<SeP>1617<SeP>1586<SeP>1379<SeP>1853<SeP>1671<SeP>1703";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:58:57<SeP>2023-07-28 21:57:54<SeP>2023-07-30 08:56:51<SeP>2023-07-31 19:55:48<SeP>2023-08-02 06:54:45<SeP>2023-08-03 17:53:42<SeP>2023-08-05 04:52:39<SeP>2023-08-06 15:51:36<SeP>2023-08-08 02:50:33<SeP>2023-08-09 13:49:30<SeP>2023-08-11 00:48:27<SeP>2023-08-12 11:47:24<SeP>2023-08-13 22:46:21<SeP>2023-08-15 09:45:18<SeP>2023-08-16 20:44:15<SeP>2023-08-18 07:43:12<SeP>2023-08-19 18:42:09<SeP>2023-08-21 05:41:06<SeP>2023-08-22 16:40:03<SeP>2023-08-24 03:39:00<SeP>2023-08-25 14:37:57<SeP>2023-08-27 01:36:54<SeP>2023-08-28 12:35:51<SeP>2023-08-29 23:34:48<SeP>2023-08-31 10:33:45<SeP>2023-09-01 21:32:42<SeP>2023-09-03 08:31:39<SeP>2023-09-04 19:30:36<SeP>2023-09-06 06:29:33<SeP>2023-09-07 17:28:30<SeP>2023-09-09 04:27:27<SeP>2023-09-10 15:26:24<SeP>2023-09-12 02:25:21<SeP>2023-09-13 13:24:18<SeP>2023-09-15 00:23:15<SeP>2023-09-16 11:22:12<SeP>2023-09-17 22:21:09<SeP>2023-09-19 09:20:06<SeP>2023-09-20 20:19:03<SeP>2023-09-22 07:18:00<SeP>2023-09-23 18:16:57<SeP>2023-09-25 05:15:54<SeP>2023-09-26 16:14:51<SeP>2023-09-28 03:13:48<SeP>2023-09-29 14:12:45<SeP>2023-10-01 01:11:42<SeP>2023-10-02 12:10:39<SeP>2023-10-03 23:09:36<SeP>2023-10-05 10:08:33<SeP>2023-10-06 21:07:30<SeP>2023-10-08 08:06:27<SeP>2023-10-09 19:05:24<SeP>2023-10-11 06:04:21<SeP>2023-10-12 17:03:18<SeP>2023-10-14 04:02:15<SeP>2023-10-15 15:01:12<SeP>2023-10-17 02:00:09<SeP>2023-10-18 12:59:06<SeP>2023-10-19 23:58:03<SeP>2023-10-21 10:57:00<SeP>2023-10-22 21:55:57<SeP>2023-10-24 08:54:54<SeP>2023-10-25 19:53:51<SeP>2023-10-27 06:52:48<SeP>2023-10-28 17:51:45<SeP>2023-10-30 04:50:42<SeP>2023-10-31 15:49:39<SeP>2023-11-02 02:48:36<SeP>2023-11-03 13:47:33<SeP>2023-11-05 00:46:30<SeP>2023-11-06 10:45:27<SeP>2023-11-07 21:44:24<SeP>2023-11-09 08:43:21<SeP>2023-11-10 19:42:18<SeP>2023-11-12 06:41:15<SeP>2023-11-13 17:40:12<SeP>2023-11-15 04:39:09<SeP>2023-11-16 15:38:06<SeP>2023-11-18 02:37:03<SeP>2023-11-19 13:36:00<SeP>2023-11-21 00:34:57<SeP>2023-11-22 11:33:54<SeP>2023-11-23 22:32:51<SeP>2023-11-25 09:31:48<SeP>2023-11-26 20:30:45<SeP>2023-11-28 07:29:42<SeP>2023-11-29 18:28:39<SeP>2023-12-01 05:27:36<SeP>2023-12-02 16:26:33<SeP>2023-12-04 03:25:30<SeP>2023-12-05 14:24:27<SeP>2023-12-07 01:23:24<SeP>2023-12-08 12:22:21<SeP>2023-12-09 23:21:18<SeP>2023-12-11 10:20:15<SeP>2023-12-12 21:19:12<SeP>2023-12-14 08:18:09<SeP>2023-12-15 19:17:06<SeP>2023-12-17 06:16:03<SeP>2023-12-18 17:15:00<SeP>2023-12-20 04:13:57<SeP>2023-12-21 15:12:54<SeP>2023-12-23 02:11:51<SeP>2023-12-24 13:10:48<SeP>2023-12-26 00:09:45<SeP>2023-12-27 11:08:42<SeP>2023-12-28 22:07:39<SeP>2023-12-30 09:06:36<SeP>2023-12-31 20:05:33<SeP>2024-01-02 07:04:30<SeP>2024-01-03 18:03:27<SeP>2024-01-05 05:02:24<SeP>2024-01-06 16:01:21<SeP>2024-01-08 03:00:18<SeP>2024-01-09 13:59:15<SeP>2024-01-11 00:58:12<SeP>2024-01-12 11:57:09<SeP>2024-01-13 22:56:06<SeP>2024-01-15 09:55:03<SeP>2024-01-16 20:54:00<SeP>2024-01-18 07:52:57<SeP>2024-01-19 18:51:54<SeP>2024-01-21 05:50:51<SeP>2024-01-22 16:49:48<SeP>2024-01-24 03:48:45<SeP>2024-01-25 14:47:42<SeP>2024-01-27 01:46:39<SeP>2024-01-28 12:45:36<SeP>2024-01-29 23:44:33<SeP>2024-01-31 10:43:30<SeP>2024-02-01 21:42:27<SeP>2024-02-03 08:41:24<SeP>2024-02-04 19:40:21<SeP>2024-02-06 06:39:18<SeP>2024-02-07 17:38:15<SeP>2024-02-09 04:37:12<SeP>2024-02-10 15:36:09<SeP>2024-02-12 02:35:06<SeP>2024-02-13 13:34:03<SeP>2024-02-15 00:33:00<SeP>2024-02-16 11:31:57<SeP>2024-02-17 22:30:54<SeP>2024-02-19 09:29:51<SeP>2024-02-20 20:28:48<SeP>2024-02-22 07:27:45<SeP>2024-02-23 18:26:42<SeP>2024-02-25 05:25:39<SeP>2024-02-26 16:24:36<SeP>2024-02-28 03:23:33<SeP>2024-02-29 14:22:30<SeP>2024-03-02 01:21:27<SeP>2024-03-03 12:20:24<SeP>2024-03-04 23:19:21<SeP>2024-03-06 10:18:18<SeP>2024-03-07 21:17:15<SeP>2024-03-09 08:16:12<SeP>2024-03-10 20:15:09<SeP>2024-03-12 07:14:06<SeP>2024-03-13 18:13:03<SeP>2024-03-15 05:12:00<SeP>2024-03-16 16:10:57<SeP>2024-03-18 03:09:54<SeP>2024-03-19 14:08:51<SeP>2024-03-21 01:07:48<SeP>2024-03-22 12:06:45<SeP>2024-03-23 23:05:42<SeP>2024-03-25 10:04:39<SeP>2024-03-26 21:03:36<SeP>2024-03-28 08:02:33<SeP>2024-03-29 19:01:30<SeP>2024-03-31 06:00:27<SeP>2024-04-01 16:59:24<SeP>2024-04-03 03:58:21<SeP>2024-04-04 14:57:18<SeP>2024-04-06 01:56:15<SeP>2024-04-07 12:55:12<SeP>2024-04-08 23:54:09<SeP>2024-04-10 10:53:06<SeP>2024-04-11 21:52:03<SeP>2024-04-13 08:51:00<SeP>2024-04-14 19:49:57<SeP>2024-04-16 06:48:54<SeP>2024-04-17 17:47:51<SeP>2024-04-19 04:46:48<SeP>2024-04-20 15:45:45<SeP>2024-04-22 02:44:42<SeP>2024-04-23 13:43:39<SeP>2024-04-25 00:42:36<SeP>2024-04-26 11:41:33<SeP>2024-04-27 22:40:30<SeP>2024-04-29 09:39:27<SeP>2024-04-30 20:38:24<SeP>2024-05-02 07:37:21<SeP>2024-05-03 18:36:18<SeP>2024-05-05 05:35:15<SeP>2024-05-06 16:34:12<SeP>2024-05-08 03:33:09<SeP>2024-05-09 14:32:06<SeP>2024-05-11 01:31:03<SeP>2024-05-12 12:30:00<SeP>2024-05-13 23:28:57<SeP>2024-05-15 10:27:54<SeP>2024-05-16 21:26:51<SeP>2024-05-18 08:25:48<SeP>2024-05-19 19:24:45<SeP>2024-05-21 06:23:42<SeP>2024-05-22 17:22:39<SeP>2024-05-24 04:21:36<SeP>2024-05-25 15:20:33<SeP>2024-05-27 02:19:30<SeP>2024-05-28 13:18:27<SeP>2024-05-30 00:17:24<SeP>2024-05-31 11:16:21<SeP>2024-06-01 22:15:18<SeP>2024-06-03 09:14:15<SeP>2024-06-04 20:13:12<SeP>2024-06-06 07:12:09<SeP>2024-06-07 18:11:06<SeP>2024-06-09 05:10:03<SeP>2024-06-10 16:09:00<SeP>2024-06-12 03:07:57<SeP>2024-06-13 14:06:54<SeP>2024-06-15 01:05:51<SeP>2024-06-16 12:04:48<SeP>2024-06-17 23:03:45<SeP>2024-06-19 10:02:42<SeP>2024-06-20 21:01:39<SeP>2024-06-22 08:00:36<SeP>2024-06-23 18:59:33<SeP>2024-06-25 05:58:30<SeP>2024-06-26 16:57:27<SeP>2024-06-28 03:56:24<SeP>2024-06-29 14:55:21<SeP>2024-07-01 01:54:18<SeP>2024-07-02 12:53:15<SeP>2024-07-03 23:52:12<SeP>2024-07-05 10:51:09<SeP>2024-07-06 21:50:06<SeP>2024-07-08 08:49:03<SeP>2024-07-09 19:48:00<SeP>2024-07-11 06:46:57<SeP>2024-07-12 17:45:54<SeP>2024-07-14 04:44:51<SeP>2024-07-15 15:43:48<SeP>2024-07-17 02:42:45<SeP>2024-07-18 13:41:42<SeP>2024-07-20 00:40:39<SeP>2024-07-21 11:39:36<SeP>2024-07-22 22:38:33<SeP>2024-07-24 09:37:30<SeP>2024-07-25 20:36:27<SeP>2024-07-27 07:35:24<SeP>2024-07-28 18:34:21<SeP>2024-07-30 05:33:18<SeP>2024-07-31 16:32:15<SeP>2024-08-02 03:31:12<SeP>2024-08-03 14:30:09<SeP>2024-08-05 01:29:06<SeP>2024-08-06 12:28:03<SeP>2024-08-07 23:27:00<SeP>2024-08-09 10:25:57<SeP>2024-08-10 21:24:54<SeP>2024-08-12 08:23:51<SeP>2024-08-13 19:22:48<SeP>2024-08-15 06:21:45<SeP>2024-08-16 17:20:42<SeP>2024-08-18 04:19:39<SeP>2024-08-19 15:18:36<SeP>2024-08-21 02:17:33<SeP>2024-08-22 13:16:30<SeP>2024-08-24 00:15:27<SeP>2024-08-25 11:14:24<SeP>2024-08-26 22:13:21<SeP>2024-08-28 09:12:18<SeP>2024-08-29 20:11:15<SeP>2024-08-31 07:10:12<SeP>2024-09-01 18:09:09<SeP>2024-09-03 05:08:06<SeP>2024-09-04 16:07:03<SeP>2024-09-06 03:06:00<SeP>2024-09-07 14:04:57<SeP>2024-09-09 01:03:54<SeP>2024-09-10 12:02:51<SeP>2024-09-11 23:01:48<SeP>2024-09-13 10:00:45<SeP>2024-09-14 20:59:42<SeP>2024-09-16 07:58:39<SeP>2024-09-17 18:57:36<SeP>2024-09-19 05:56:33<SeP>2024-09-20 16:55:30<SeP>2024-09-22 03:54:27<SeP>2024-09-23 14:53:24<SeP>2024-09-25 01:52:21<SeP>2024-09-26 12:51:18<SeP>2024-09-27 23:50:15<SeP>2024-09-29 10:49:12<SeP>2024-09-30 21:48:09<SeP>2024-10-02 08:47:06<SeP>2024-10-03 19:46:03<SeP>2024-10-05 06:45:00<SeP>2024-10-06 17:43:57<SeP>2024-10-08 04:42:54<SeP>2024-10-09 15:41:51<SeP>2024-10-11 02:40:48<SeP>2024-10-12 13:39:45<SeP>2024-10-14 00:38:42<SeP>2024-10-15 11:37:39<SeP>2024-10-16 22:36:36<SeP>2024-10-18 09:35:33<SeP>2024-10-19 20:34:30<SeP>2024-10-21 07:33:27<SeP>2024-10-22 18:32:24<SeP>2024-10-24 05:31:21<SeP>2024-10-25 16:30:18<SeP>2024-10-27 03:29:15<SeP>2024-10-28 14:28:12<SeP>2024-10-30 01:27:09<SeP>2024-10-31 12:26:06<SeP>2024-11-01 23:25:03<SeP>2024-11-03 09:24:00<SeP>2024-11-04 20:22:57<SeP>2024-11-06 07:21:54<SeP>2024-11-07 18:20:51<SeP>2024-11-09 05:19:48<SeP>2024-11-10 16:18:45<SeP>2024-11-12 03:17:42<SeP>2024-11-13 14:16:39<SeP>2024-11-15 01:15:36<SeP>2024-11-16 12:14:33<SeP>2024-11-17 23:13:30<SeP>2024-11-19 10:12:27<SeP>2024-11-20 21:11:24<SeP>2024-11-22 08:10:21<SeP>2024-11-23 19:09:18<SeP>2024-11-25 06:08:15<SeP>2024-11-26 17:07:12<SeP>2024-11-28 04:06:09<SeP>2024-11-29 15:05:06<SeP>2024-12-01 02:04:03<SeP>2024-12-02 13:03:00<SeP>2024-12-04 00:01:57<SeP>2024-12-05 11:00:54<SeP>2024-12-06 21:59:51<SeP>2024-12-08 08:58:48<SeP>2024-12-09 19:57:45<SeP>2024-12-11 06:56:42<SeP>2024-12-12 17:55:39<SeP>2024-12-14 04:54:36<SeP>2024-12-15 15:53:33<SeP>2024-12-17 02:52:30<SeP>2024-12-18 13:51:27<SeP>2024-12-20 00:50:24<SeP>2024-12-21 11:49:21<SeP>2024-12-22 22:48:18<SeP>2024-12-24 09:47:15<SeP>2024-12-25 20:46:12<SeP>2024-12-27 07:45:09<SeP>2024-12-28 18:44:06<SeP>2024-12-30 05:43:03<SeP>2024-12-31 16:42:00<SeP>2025-01-02 03:40:57<SeP>2025-01-03 14:39:54<SeP>2025-01-05 01:38:51<SeP>2025-01-06 12:37:48<SeP>2025-01-07 23:36:45<SeP>2025-01-09 10:35:42<SeP>2025-01-10 21:34:39<SeP>2025-01-12 08:33:36<SeP>2025-01-13 19:32:33<SeP>2025-01-15 06:31:30<SeP>2025-01-16 17:30:27<SeP>2025-01-18 04:29:24<SeP>2025-01-19 15:28:21<SeP>2025-01-21 02:27:18<SeP>2025-01-22 13:26:15<SeP>2025-01-24 00:25:12<SeP>2025-01-25 11:24:09<SeP>2025-01-26 22:23:06<SeP>2025-01-28 09:22:03<SeP>2025-01-29 20:21:00<SeP>2025-01-31 07:19:57<SeP>2025-02-01 18:18:54<SeP>2025-02-03 05:17:51<SeP>2025-02-04 16:16:48<SeP>2025-02-06 03:15:45<SeP>2025-02-07 14:14:42<SeP>2025-02-09 01:13:39<SeP>2025-02-10 12:12:36<SeP>2025-02-11 23:11:33<SeP>2025-02-13 10:10:30<SeP>2025-02-14 21:09:27<SeP>2025-02-16 08:08:24<SeP>2025-02-17 19:07:21<SeP>2025-02-19 06:06:18<SeP>2025-02-20 17:05:15<SeP>2025-02-22 04:04:12<SeP>2025-02-23 15:03:09<SeP>2025-02-25 02:02:06<SeP>2025-02-26 13:01:03";
  const itemLabel       = "Ataques";
  const itemData        = "153<SeP>614<SeP>1068<SeP>636<SeP>566<SeP>207<SeP>6967<SeP>527<SeP>9545<SeP>571<SeP>396<SeP>1130<SeP>1244<SeP>287<SeP>147<SeP>462<SeP>111<SeP>761<SeP>282<SeP>5491<SeP>7466<SeP>6580<SeP>8269<SeP>5671<SeP>261<SeP>283<SeP>428<SeP>128<SeP>4350<SeP>1926<SeP>167<SeP>291<SeP>398<SeP>358<SeP>4111<SeP>10560<SeP>8402<SeP>10398<SeP>8498<SeP>5748<SeP>7471<SeP>6863<SeP>8876<SeP>8925<SeP>7879<SeP>7023<SeP>9495<SeP>8766<SeP>7685<SeP>7703<SeP>5193<SeP>10841<SeP>8673<SeP>6753<SeP>8033<SeP>8329<SeP>9240<SeP>18346<SeP>16444<SeP>9103<SeP>11606<SeP>6648<SeP>8070<SeP>8235<SeP>9217<SeP>8773<SeP>5866<SeP>7167<SeP>7009<SeP>6081<SeP>3373<SeP>6238<SeP>5484<SeP>6530<SeP>6422<SeP>7976<SeP>3415<SeP>6273<SeP>5933<SeP>6413<SeP>4831<SeP>7134<SeP>4206<SeP>6355<SeP>6431<SeP>5599<SeP>5717<SeP>5328<SeP>20445<SeP>12030<SeP>35921<SeP>6967<SeP>8793<SeP>5789<SeP>6235<SeP>12564<SeP>6213<SeP>6266<SeP>3934<SeP>4772<SeP>6017<SeP>5118<SeP>8808<SeP>5434<SeP>6860<SeP>4776<SeP>4743<SeP>8482<SeP>8569<SeP>7569<SeP>6502<SeP>3810<SeP>9466<SeP>10110<SeP>6190<SeP>3169<SeP>5847<SeP>8282<SeP>5635<SeP>6909<SeP>8939<SeP>6916<SeP>1242<SeP>2622<SeP>1081<SeP>2265<SeP>2222<SeP>1525<SeP>688<SeP>1103<SeP>1206<SeP>1849<SeP>544<SeP>1296<SeP>1159<SeP>1001<SeP>963<SeP>1022<SeP>1461<SeP>1244<SeP>1147<SeP>1661<SeP>2096<SeP>4234<SeP>11416<SeP>8382<SeP>7414<SeP>7532<SeP>11441<SeP>3991<SeP>8829<SeP>11936<SeP>9580<SeP>12245<SeP>9109<SeP>11391<SeP>10773<SeP>9535<SeP>12915<SeP>6262<SeP>3926<SeP>7338<SeP>20857<SeP>10972<SeP>6008<SeP>7688<SeP>11579<SeP>15757<SeP>8800<SeP>4082<SeP>7650<SeP>6967<SeP>25968<SeP>7833<SeP>9004<SeP>10551<SeP>4861<SeP>6312<SeP>6079<SeP>16175<SeP>4763<SeP>12792<SeP>7904<SeP>6974<SeP>8383<SeP>7759<SeP>3027<SeP>5557<SeP>6152<SeP>7080<SeP>6392<SeP>6090<SeP>7333<SeP>18669<SeP>7148<SeP>8404<SeP>5168<SeP>7656<SeP>9149<SeP>8787<SeP>5849<SeP>2679<SeP>7111<SeP>3283<SeP>5546<SeP>3726<SeP>1035<SeP>121<SeP>626<SeP>195<SeP>541<SeP>1067<SeP>372<SeP>454<SeP>900<SeP>1560<SeP>3185<SeP>1023<SeP>22510<SeP>1563<SeP>4764<SeP>2830<SeP>3562<SeP>6387<SeP>3906<SeP>3293<SeP>3559<SeP>2827<SeP>3053<SeP>3170<SeP>4653<SeP>1655<SeP>3514<SeP>1869<SeP>2592<SeP>1284<SeP>1847<SeP>1160<SeP>1913<SeP>839<SeP>1283<SeP>1592<SeP>26516<SeP>1475<SeP>4059<SeP>3242<SeP>3064<SeP>3186<SeP>3042<SeP>1932<SeP>3302<SeP>2658<SeP>3414<SeP>2518<SeP>2666<SeP>3274<SeP>3049<SeP>6775<SeP>4782<SeP>4473<SeP>3376<SeP>2925<SeP>3657<SeP>3443<SeP>6208<SeP>8573<SeP>5072<SeP>2003<SeP>3307<SeP>2763<SeP>5264<SeP>2899<SeP>3020<SeP>2646<SeP>4355<SeP>4921<SeP>3625<SeP>5841<SeP>4159<SeP>6376<SeP>4801<SeP>5413<SeP>4963<SeP>22089<SeP>5480<SeP>10873<SeP>1747<SeP>3130<SeP>3986<SeP>3652<SeP>5292<SeP>3718<SeP>4601<SeP>4424<SeP>4824<SeP>3095<SeP>4227<SeP>1958<SeP>1373<SeP>2213<SeP>3486<SeP>2673<SeP>2975<SeP>3486<SeP>4494<SeP>3394<SeP>3271<SeP>4696<SeP>3411<SeP>2599<SeP>6038<SeP>7824<SeP>6291<SeP>4652<SeP>4988<SeP>4616<SeP>3489<SeP>3785<SeP>4495<SeP>5818<SeP>5538<SeP>4529<SeP>3915<SeP>1467<SeP>469<SeP>2311<SeP>1552<SeP>645<SeP>1848<SeP>1794<SeP>581<SeP>3222<SeP>4258<SeP>6377<SeP>15036<SeP>23716<SeP>5510<SeP>11369<SeP>16549<SeP>5419<SeP>5534<SeP>5453<SeP>8599<SeP>20232<SeP>5825<SeP>4743<SeP>4444<SeP>5988<SeP>19032<SeP>16291<SeP>4535<SeP>2983<SeP>4517<SeP>5364<SeP>5698<SeP>2914<SeP>3198<SeP>4123<SeP>5147<SeP>4983<SeP>6436<SeP>15977<SeP>5723<SeP>6561<SeP>3400<SeP>2484<SeP>3486<SeP>4298<SeP>3981<SeP>4349<SeP>2417<SeP>4224<SeP>1962<SeP>4604<SeP>4091<SeP>7995<SeP>10819<SeP>7914<SeP>8709<SeP>9323<SeP>7028<SeP>5810<SeP>5108<SeP>4247<SeP>24465<SeP>4831<SeP>3072<SeP>4514<SeP>3281<SeP>11402<SeP>5772<SeP>3657<SeP>4873<SeP>4285<SeP>2729<SeP>9386<SeP>9562<SeP>4578<SeP>3323<SeP>3224";
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
  const itemData    = "692971<SeP>363721<SeP>206078<SeP>179470<SeP>110237<SeP>87811<SeP>83302<SeP>80511<SeP>68069<SeP>66828";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "296161<SeP>41421<SeP>40267<SeP>35550<SeP>14421<SeP>10916<SeP>7837<SeP>7562<SeP>7130<SeP>7007";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "396810<SeP>328171<SeP>203067<SeP>139203<SeP>95816<SeP>80692<SeP>80681<SeP>69595<SeP>58991<SeP>58574";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "362909<SeP>259550<SeP>235862<SeP>143850<SeP>67005<SeP>59530<SeP>56497<SeP>52714<SeP>41617<SeP>35955";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "155758<SeP>53231<SeP>40495<SeP>32294<SeP>21909<SeP>12760<SeP>10747<SeP>8995<SeP>7614<SeP>7445";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "350149<SeP>258785<SeP>121941<SeP>80104<SeP>55518<SeP>48783<SeP>46759<SeP>30550<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "692971<SeP>363721<SeP>206078<SeP>179470<SeP>110237<SeP>87811<SeP>83302<SeP>80511<SeP>68069<SeP>66828";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "296161<SeP>41421<SeP>40267<SeP>35550<SeP>14421<SeP>10916<SeP>7837<SeP>7562<SeP>7130<SeP>7007";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "396810<SeP>328171<SeP>203067<SeP>139203<SeP>95816<SeP>80692<SeP>80681<SeP>69595<SeP>58991<SeP>58574";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "362909<SeP>259550<SeP>235862<SeP>143850<SeP>67005<SeP>59530<SeP>56497<SeP>52714<SeP>41617<SeP>35955";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "155758<SeP>53231<SeP>40495<SeP>32294<SeP>21909<SeP>12760<SeP>10747<SeP>8995<SeP>7614<SeP>7445";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "350149<SeP>258785<SeP>121941<SeP>80104<SeP>55518<SeP>48783<SeP>46759<SeP>30550<SeP>29324<SeP>26846";
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
