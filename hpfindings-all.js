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
  document.getElementById("last-updated").innerHTML = "2025-3-12";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.7";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.7";
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
  const metricData    = "2858646";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "560966";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2297680";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "141028";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1441325";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "856355";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54611";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "251674";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "604681";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43891";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2858646";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "560966";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2297680";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "141028";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1441325";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "856355";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54611";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "251674";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "604681";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43891";
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
  const incomingData = "2858646<SeP>560966<SeP>2297680<SeP>141028";
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
  const incomingData = "2297680<SeP>1441325<SeP>856355<SeP>54611";
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
  const incomingData = "856355<SeP>251674<SeP>604681<SeP>43891";
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
  const incomingData = "2562362<SeP>259252<SeP>2303110";
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
  const incomingData = "388207<SeP>150<SeP>388057<SeP>230";
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
  const incomingData = "2858646<SeP>560966<SeP>2297680<SeP>141028";
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
  const incomingData = "2297680<SeP>1441325<SeP>856355<SeP>54611";
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
  const incomingData = "856355<SeP>251674<SeP>604681<SeP>43891";
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
  const incomingData = "2562362<SeP>259252<SeP>2303110";
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
  const incomingData = "388207<SeP>150<SeP>388057<SeP>230";
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
  const column3Data   = "222380<SeP>203903<SeP>12858<SeP>12478<SeP>9820<SeP>9474<SeP>6456<SeP>5593<SeP>4637<SeP>3519";
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
  const column2Data  = "213811<SeP>43200<SeP>972<SeP>485<SeP>477<SeP>459<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2417736<SeP>440910";
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
  const column3Data   = "222380<SeP>203903<SeP>12858<SeP>12478<SeP>9820<SeP>9474<SeP>6456<SeP>5593<SeP>4637<SeP>3519";
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
  const column2Data  = "213811<SeP>43200<SeP>972<SeP>485<SeP>477<SeP>459<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2417736<SeP>440910";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-12";

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
        "name": "traffic between 2023-07-26 and 2025-03-10"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          400969,50
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
        "name": "scans between 2023-07-26 and 2025-03-10"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          231000,30,
          400969,50
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
        "name": "attacks between 2023-07-26 and 2025-03-10"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          169969,23,
          400969,50
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
  }, 500); // This timeout should the a bit longer than the  timeout of the page loader
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-12";

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
        "name": "tráfico entre 2023-07-26 y 2025-03-10"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          400969,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-10"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          231000,30,
          400969,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-10"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          169969,23,
          400969,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:42:00<SeP>2023-07-28 23:24:00<SeP>2023-07-30 11:06:00<SeP>2023-07-31 22:48:00<SeP>2023-08-02 10:30:00<SeP>2023-08-03 22:12:00<SeP>2023-08-05 09:54:00<SeP>2023-08-06 21:36:00<SeP>2023-08-08 09:18:00<SeP>2023-08-09 21:00:00<SeP>2023-08-11 08:42:00<SeP>2023-08-12 20:24:00<SeP>2023-08-14 08:06:00<SeP>2023-08-15 19:48:00<SeP>2023-08-17 07:30:00<SeP>2023-08-18 19:12:00<SeP>2023-08-20 06:54:00<SeP>2023-08-21 18:36:00<SeP>2023-08-23 06:18:00<SeP>2023-08-24 18:00:00<SeP>2023-08-26 05:42:00<SeP>2023-08-27 17:24:00<SeP>2023-08-29 05:06:00<SeP>2023-08-30 16:48:00<SeP>2023-09-01 04:30:00<SeP>2023-09-02 16:12:00<SeP>2023-09-04 03:54:00<SeP>2023-09-05 15:36:00<SeP>2023-09-07 03:18:00<SeP>2023-09-08 15:00:00<SeP>2023-09-10 02:42:00<SeP>2023-09-11 14:24:00<SeP>2023-09-13 02:06:00<SeP>2023-09-14 13:48:00<SeP>2023-09-16 01:30:00<SeP>2023-09-17 13:12:00<SeP>2023-09-19 00:54:00<SeP>2023-09-20 12:36:00<SeP>2023-09-22 00:18:00<SeP>2023-09-23 12:00:00<SeP>2023-09-24 23:42:00<SeP>2023-09-26 11:24:00<SeP>2023-09-27 23:06:00<SeP>2023-09-29 10:48:00<SeP>2023-09-30 22:30:00<SeP>2023-10-02 10:12:00<SeP>2023-10-03 21:54:00<SeP>2023-10-05 09:36:00<SeP>2023-10-06 21:18:00<SeP>2023-10-08 09:00:00<SeP>2023-10-09 20:42:00<SeP>2023-10-11 08:24:00<SeP>2023-10-12 20:06:00<SeP>2023-10-14 07:48:00<SeP>2023-10-15 19:30:00<SeP>2023-10-17 07:12:00<SeP>2023-10-18 18:54:00<SeP>2023-10-20 06:36:00<SeP>2023-10-21 18:18:00<SeP>2023-10-23 06:00:00<SeP>2023-10-24 17:42:00<SeP>2023-10-26 05:24:00<SeP>2023-10-27 17:06:00<SeP>2023-10-29 04:48:00<SeP>2023-10-30 16:30:00<SeP>2023-11-01 04:12:00<SeP>2023-11-02 15:54:00<SeP>2023-11-04 03:36:00<SeP>2023-11-05 14:18:00<SeP>2023-11-07 02:00:00<SeP>2023-11-08 13:42:00<SeP>2023-11-10 01:24:00<SeP>2023-11-11 13:06:00<SeP>2023-11-13 00:48:00<SeP>2023-11-14 12:30:00<SeP>2023-11-16 00:12:00<SeP>2023-11-17 11:54:00<SeP>2023-11-18 23:36:00<SeP>2023-11-20 11:18:00<SeP>2023-11-21 23:00:00<SeP>2023-11-23 10:42:00<SeP>2023-11-24 22:24:00<SeP>2023-11-26 10:06:00<SeP>2023-11-27 21:48:00<SeP>2023-11-29 09:30:00<SeP>2023-11-30 21:12:00<SeP>2023-12-02 08:54:00<SeP>2023-12-03 20:36:00<SeP>2023-12-05 08:18:00<SeP>2023-12-06 20:00:00<SeP>2023-12-08 07:42:00<SeP>2023-12-09 19:24:00<SeP>2023-12-11 07:06:00<SeP>2023-12-12 18:48:00<SeP>2023-12-14 06:30:00<SeP>2023-12-15 18:12:00<SeP>2023-12-17 05:54:00<SeP>2023-12-18 17:36:00<SeP>2023-12-20 05:18:00<SeP>2023-12-21 17:00:00<SeP>2023-12-23 04:42:00<SeP>2023-12-24 16:24:00<SeP>2023-12-26 04:06:00<SeP>2023-12-27 15:48:00<SeP>2023-12-29 03:30:00<SeP>2023-12-30 15:12:00<SeP>2024-01-01 02:54:00<SeP>2024-01-02 14:36:00<SeP>2024-01-04 02:18:00<SeP>2024-01-05 14:00:00<SeP>2024-01-07 01:42:00<SeP>2024-01-08 13:24:00<SeP>2024-01-10 01:06:00<SeP>2024-01-11 12:48:00<SeP>2024-01-13 00:30:00<SeP>2024-01-14 12:12:00<SeP>2024-01-15 23:54:00<SeP>2024-01-17 11:36:00<SeP>2024-01-18 23:18:00<SeP>2024-01-20 11:00:00<SeP>2024-01-21 22:42:00<SeP>2024-01-23 10:24:00<SeP>2024-01-24 22:06:00<SeP>2024-01-26 09:48:00<SeP>2024-01-27 21:30:00<SeP>2024-01-29 09:12:00<SeP>2024-01-30 20:54:00<SeP>2024-02-01 08:36:00<SeP>2024-02-02 20:18:00<SeP>2024-02-04 08:00:00<SeP>2024-02-05 19:42:00<SeP>2024-02-07 07:24:00<SeP>2024-02-08 19:06:00<SeP>2024-02-10 06:48:00<SeP>2024-02-11 18:30:00<SeP>2024-02-13 06:12:00<SeP>2024-02-14 17:54:00<SeP>2024-02-16 05:36:00<SeP>2024-02-17 17:18:00<SeP>2024-02-19 05:00:00<SeP>2024-02-20 16:42:00<SeP>2024-02-22 04:24:00<SeP>2024-02-23 16:06:00<SeP>2024-02-25 03:48:00<SeP>2024-02-26 15:30:00<SeP>2024-02-28 03:12:00<SeP>2024-02-29 14:54:00<SeP>2024-03-02 02:36:00<SeP>2024-03-03 14:18:00<SeP>2024-03-05 02:00:00<SeP>2024-03-06 13:42:00<SeP>2024-03-08 01:24:00<SeP>2024-03-09 13:06:00<SeP>2024-03-11 01:48:00<SeP>2024-03-12 13:30:00<SeP>2024-03-14 01:12:00<SeP>2024-03-15 12:54:00<SeP>2024-03-17 00:36:00<SeP>2024-03-18 12:18:00<SeP>2024-03-20 00:00:00<SeP>2024-03-21 11:42:00<SeP>2024-03-22 23:24:00<SeP>2024-03-24 11:06:00<SeP>2024-03-25 22:48:00<SeP>2024-03-27 10:30:00<SeP>2024-03-28 22:12:00<SeP>2024-03-30 09:54:00<SeP>2024-03-31 21:36:00<SeP>2024-04-02 09:18:00<SeP>2024-04-03 21:00:00<SeP>2024-04-05 08:42:00<SeP>2024-04-06 20:24:00<SeP>2024-04-08 08:06:00<SeP>2024-04-09 19:48:00<SeP>2024-04-11 07:30:00<SeP>2024-04-12 19:12:00<SeP>2024-04-14 06:54:00<SeP>2024-04-15 18:36:00<SeP>2024-04-17 06:18:00<SeP>2024-04-18 18:00:00<SeP>2024-04-20 05:42:00<SeP>2024-04-21 17:24:00<SeP>2024-04-23 05:06:00<SeP>2024-04-24 16:48:00<SeP>2024-04-26 04:30:00<SeP>2024-04-27 16:12:00<SeP>2024-04-29 03:54:00<SeP>2024-04-30 15:36:00<SeP>2024-05-02 03:18:00<SeP>2024-05-03 15:00:00<SeP>2024-05-05 02:42:00<SeP>2024-05-06 14:24:00<SeP>2024-05-08 02:06:00<SeP>2024-05-09 13:48:00<SeP>2024-05-11 01:30:00<SeP>2024-05-12 13:12:00<SeP>2024-05-14 00:54:00<SeP>2024-05-15 12:36:00<SeP>2024-05-17 00:18:00<SeP>2024-05-18 12:00:00<SeP>2024-05-19 23:42:00<SeP>2024-05-21 11:24:00<SeP>2024-05-22 23:06:00<SeP>2024-05-24 10:48:00<SeP>2024-05-25 22:30:00<SeP>2024-05-27 10:12:00<SeP>2024-05-28 21:54:00<SeP>2024-05-30 09:36:00<SeP>2024-05-31 21:18:00<SeP>2024-06-02 09:00:00<SeP>2024-06-03 20:42:00<SeP>2024-06-05 08:24:00<SeP>2024-06-06 20:06:00<SeP>2024-06-08 07:48:00<SeP>2024-06-09 19:30:00<SeP>2024-06-11 07:12:00<SeP>2024-06-12 18:54:00<SeP>2024-06-14 06:36:00<SeP>2024-06-15 18:18:00<SeP>2024-06-17 06:00:00<SeP>2024-06-18 17:42:00<SeP>2024-06-20 05:24:00<SeP>2024-06-21 17:06:00<SeP>2024-06-23 04:48:00<SeP>2024-06-24 16:30:00<SeP>2024-06-26 04:12:00<SeP>2024-06-27 15:54:00<SeP>2024-06-29 03:36:00<SeP>2024-06-30 15:18:00<SeP>2024-07-02 03:00:00<SeP>2024-07-03 14:42:00<SeP>2024-07-05 02:24:00<SeP>2024-07-06 14:06:00<SeP>2024-07-08 01:48:00<SeP>2024-07-09 13:30:00<SeP>2024-07-11 01:12:00<SeP>2024-07-12 12:54:00<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:18:00<SeP>2024-07-17 00:00:00<SeP>2024-07-18 11:42:00<SeP>2024-07-19 23:24:00<SeP>2024-07-21 11:06:00<SeP>2024-07-22 22:48:00<SeP>2024-07-24 10:30:00<SeP>2024-07-25 22:12:00<SeP>2024-07-27 09:54:00<SeP>2024-07-28 21:36:00<SeP>2024-07-30 09:18:00<SeP>2024-07-31 21:00:00<SeP>2024-08-02 08:42:00<SeP>2024-08-03 20:24:00<SeP>2024-08-05 08:06:00<SeP>2024-08-06 19:48:00<SeP>2024-08-08 07:30:00<SeP>2024-08-09 19:12:00<SeP>2024-08-11 06:54:00<SeP>2024-08-12 18:36:00<SeP>2024-08-14 06:18:00<SeP>2024-08-15 18:00:00<SeP>2024-08-17 05:42:00<SeP>2024-08-18 17:24:00<SeP>2024-08-20 05:06:00<SeP>2024-08-21 16:48:00<SeP>2024-08-23 04:30:00<SeP>2024-08-24 16:12:00<SeP>2024-08-26 03:54:00<SeP>2024-08-27 15:36:00<SeP>2024-08-29 03:18:00<SeP>2024-08-30 15:00:00<SeP>2024-09-01 02:42:00<SeP>2024-09-02 14:24:00<SeP>2024-09-04 02:06:00<SeP>2024-09-05 13:48:00<SeP>2024-09-07 01:30:00<SeP>2024-09-08 13:12:00<SeP>2024-09-10 00:54:00<SeP>2024-09-11 12:36:00<SeP>2024-09-13 00:18:00<SeP>2024-09-14 12:00:00<SeP>2024-09-15 23:42:00<SeP>2024-09-17 11:24:00<SeP>2024-09-18 23:06:00<SeP>2024-09-20 10:48:00<SeP>2024-09-21 22:30:00<SeP>2024-09-23 10:12:00<SeP>2024-09-24 21:54:00<SeP>2024-09-26 09:36:00<SeP>2024-09-27 21:18:00<SeP>2024-09-29 09:00:00<SeP>2024-09-30 20:42:00<SeP>2024-10-02 08:24:00<SeP>2024-10-03 20:06:00<SeP>2024-10-05 07:48:00<SeP>2024-10-06 19:30:00<SeP>2024-10-08 07:12:00<SeP>2024-10-09 18:54:00<SeP>2024-10-11 06:36:00<SeP>2024-10-12 18:18:00<SeP>2024-10-14 06:00:00<SeP>2024-10-15 17:42:00<SeP>2024-10-17 05:24:00<SeP>2024-10-18 17:06:00<SeP>2024-10-20 04:48:00<SeP>2024-10-21 16:30:00<SeP>2024-10-23 04:12:00<SeP>2024-10-24 15:54:00<SeP>2024-10-26 03:36:00<SeP>2024-10-27 15:18:00<SeP>2024-10-29 03:00:00<SeP>2024-10-30 14:42:00<SeP>2024-11-01 02:24:00<SeP>2024-11-02 14:06:00<SeP>2024-11-04 00:48:00<SeP>2024-11-05 12:30:00<SeP>2024-11-07 00:12:00<SeP>2024-11-08 11:54:00<SeP>2024-11-09 23:36:00<SeP>2024-11-11 11:18:00<SeP>2024-11-12 23:00:00<SeP>2024-11-14 10:42:00<SeP>2024-11-15 22:24:00<SeP>2024-11-17 10:06:00<SeP>2024-11-18 21:48:00<SeP>2024-11-20 09:30:00<SeP>2024-11-21 21:12:00<SeP>2024-11-23 08:54:00<SeP>2024-11-24 20:36:00<SeP>2024-11-26 08:18:00<SeP>2024-11-27 20:00:00<SeP>2024-11-29 07:42:00<SeP>2024-11-30 19:24:00<SeP>2024-12-02 07:06:00<SeP>2024-12-03 18:48:00<SeP>2024-12-05 06:30:00<SeP>2024-12-06 18:12:00<SeP>2024-12-08 05:54:00<SeP>2024-12-09 17:36:00<SeP>2024-12-11 05:18:00<SeP>2024-12-12 17:00:00<SeP>2024-12-14 04:42:00<SeP>2024-12-15 16:24:00<SeP>2024-12-17 04:06:00<SeP>2024-12-18 15:48:00<SeP>2024-12-20 03:30:00<SeP>2024-12-21 15:12:00<SeP>2024-12-23 02:54:00<SeP>2024-12-24 14:36:00<SeP>2024-12-26 02:18:00<SeP>2024-12-27 14:00:00<SeP>2024-12-29 01:42:00<SeP>2024-12-30 13:24:00<SeP>2025-01-01 01:06:00<SeP>2025-01-02 12:48:00<SeP>2025-01-04 00:30:00<SeP>2025-01-05 12:12:00<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:36:00<SeP>2025-01-09 23:18:00<SeP>2025-01-11 11:00:00<SeP>2025-01-12 22:42:00<SeP>2025-01-14 10:24:00<SeP>2025-01-15 22:06:00<SeP>2025-01-17 09:48:00<SeP>2025-01-18 21:30:00<SeP>2025-01-20 09:12:00<SeP>2025-01-21 20:54:00<SeP>2025-01-23 08:36:00<SeP>2025-01-24 20:18:00<SeP>2025-01-26 08:00:00<SeP>2025-01-27 19:42:00<SeP>2025-01-29 07:24:00<SeP>2025-01-30 19:06:00<SeP>2025-02-01 06:48:00<SeP>2025-02-02 18:30:00<SeP>2025-02-04 06:12:00<SeP>2025-02-05 17:54:00<SeP>2025-02-07 05:36:00<SeP>2025-02-08 17:18:00<SeP>2025-02-10 05:00:00<SeP>2025-02-11 16:42:00<SeP>2025-02-13 04:24:00<SeP>2025-02-14 16:06:00<SeP>2025-02-16 03:48:00<SeP>2025-02-17 15:30:00<SeP>2025-02-19 03:12:00<SeP>2025-02-20 14:54:00<SeP>2025-02-22 02:36:00<SeP>2025-02-23 14:18:00<SeP>2025-02-25 02:00:00<SeP>2025-02-26 13:42:00<SeP>2025-02-28 01:24:00<SeP>2025-03-01 13:06:00<SeP>2025-03-03 00:48:00<SeP>2025-03-04 12:30:00<SeP>2025-03-06 00:12:00<SeP>2025-03-07 11:54:00<SeP>2025-03-08 23:36:00<SeP>2025-03-10 12:18:00";
  const item1Label       = "Scans";
  const item1Data        = "785<SeP>1522<SeP>1371<SeP>1513<SeP>1254<SeP>1749<SeP>922<SeP>997<SeP>1157<SeP>3380<SeP>3429<SeP>1027<SeP>3321<SeP>878<SeP>791<SeP>881<SeP>1430<SeP>3245<SeP>1462<SeP>1428<SeP>1104<SeP>921<SeP>1136<SeP>1203<SeP>963<SeP>697<SeP>957<SeP>3665<SeP>1007<SeP>831<SeP>1357<SeP>1256<SeP>863<SeP>2657<SeP>1655<SeP>2855<SeP>1905<SeP>1812<SeP>1429<SeP>1290<SeP>1801<SeP>1791<SeP>2264<SeP>1535<SeP>1676<SeP>1604<SeP>1782<SeP>1809<SeP>1786<SeP>1850<SeP>1750<SeP>1568<SeP>3235<SeP>1654<SeP>1594<SeP>2109<SeP>1902<SeP>2244<SeP>1801<SeP>3408<SeP>1345<SeP>1626<SeP>1552<SeP>1320<SeP>1974<SeP>1640<SeP>1288<SeP>1322<SeP>1486<SeP>1746<SeP>1797<SeP>1092<SeP>1259<SeP>1527<SeP>8136<SeP>1189<SeP>1393<SeP>1281<SeP>1731<SeP>1993<SeP>1087<SeP>6700<SeP>1598<SeP>1658<SeP>927<SeP>2227<SeP>2325<SeP>1171<SeP>1035<SeP>1071<SeP>1083<SeP>3042<SeP>1024<SeP>1105<SeP>1853<SeP>4618<SeP>4744<SeP>1028<SeP>957<SeP>980<SeP>970<SeP>1031<SeP>847<SeP>1165<SeP>3126<SeP>2839<SeP>1517<SeP>1676<SeP>722<SeP>824<SeP>1474<SeP>1283<SeP>1097<SeP>1002<SeP>2253<SeP>1257<SeP>1141<SeP>1014<SeP>1069<SeP>864<SeP>850<SeP>906<SeP>842<SeP>906<SeP>1052<SeP>822<SeP>817<SeP>893<SeP>975<SeP>941<SeP>607<SeP>833<SeP>868<SeP>880<SeP>920<SeP>889<SeP>803<SeP>773<SeP>984<SeP>884<SeP>838<SeP>909<SeP>1018<SeP>881<SeP>1101<SeP>997<SeP>445<SeP>976<SeP>888<SeP>956<SeP>1156<SeP>1065<SeP>1129<SeP>1198<SeP>1024<SeP>976<SeP>942<SeP>1003<SeP>701<SeP>1010<SeP>1063<SeP>983<SeP>890<SeP>923<SeP>1088<SeP>1082<SeP>1021<SeP>1017<SeP>1047<SeP>947<SeP>1023<SeP>1882<SeP>1385<SeP>1266<SeP>1090<SeP>938<SeP>1181<SeP>992<SeP>961<SeP>740<SeP>885<SeP>1062<SeP>1010<SeP>814<SeP>1220<SeP>1281<SeP>1106<SeP>1118<SeP>1350<SeP>1236<SeP>1229<SeP>1386<SeP>1286<SeP>1583<SeP>1936<SeP>1451<SeP>1218<SeP>767<SeP>1120<SeP>904<SeP>1067<SeP>628<SeP>813<SeP>1005<SeP>837<SeP>3974<SeP>4486<SeP>2027<SeP>1511<SeP>1136<SeP>882<SeP>1102<SeP>912<SeP>1030<SeP>990<SeP>1059<SeP>1037<SeP>1184<SeP>2339<SeP>1088<SeP>1187<SeP>1232<SeP>1337<SeP>1147<SeP>1074<SeP>975<SeP>1134<SeP>1109<SeP>984<SeP>1159<SeP>1025<SeP>1225<SeP>812<SeP>1428<SeP>1072<SeP>1180<SeP>1180<SeP>1289<SeP>1362<SeP>1532<SeP>1190<SeP>1204<SeP>1106<SeP>1199<SeP>2043<SeP>1243<SeP>1592<SeP>1894<SeP>1461<SeP>2034<SeP>1720<SeP>1148<SeP>1264<SeP>1221<SeP>1170<SeP>1654<SeP>1297<SeP>1237<SeP>1504<SeP>1911<SeP>1356<SeP>1593<SeP>1247<SeP>1320<SeP>1270<SeP>1193<SeP>1177<SeP>1160<SeP>1377<SeP>1182<SeP>1288<SeP>1513<SeP>1875<SeP>1349<SeP>1276<SeP>1713<SeP>1387<SeP>1017<SeP>1093<SeP>1042<SeP>965<SeP>812<SeP>1064<SeP>1798<SeP>1180<SeP>1053<SeP>1156<SeP>986<SeP>805<SeP>1100<SeP>1393<SeP>805<SeP>986<SeP>933<SeP>1336<SeP>1620<SeP>1495<SeP>1058<SeP>1159<SeP>1001<SeP>1872<SeP>1090<SeP>1177<SeP>1066<SeP>1307<SeP>1324<SeP>953<SeP>1017<SeP>1263<SeP>1030<SeP>917<SeP>847<SeP>1384<SeP>1321<SeP>1729<SeP>1590<SeP>1313<SeP>990<SeP>1134<SeP>1307<SeP>1051<SeP>996<SeP>1264<SeP>1030<SeP>1036<SeP>1425<SeP>1524<SeP>1234<SeP>1690<SeP>1332<SeP>1708<SeP>1361<SeP>1329<SeP>1479<SeP>1473<SeP>1484<SeP>1342<SeP>1588<SeP>1529<SeP>1659<SeP>1344<SeP>1406<SeP>1401<SeP>1346<SeP>1223<SeP>1425<SeP>1633<SeP>1566<SeP>1279<SeP>1134<SeP>1401<SeP>1306<SeP>1403<SeP>1188<SeP>1751<SeP>1875<SeP>1365<SeP>757<SeP>1291<SeP>1750<SeP>1418<SeP>1474<SeP>1225<SeP>1102<SeP>1395<SeP>1448<SeP>1244<SeP>1525<SeP>1558<SeP>1692<SeP>1489<SeP>1669<SeP>1431<SeP>1462<SeP>1501<SeP>1580<SeP>1784<SeP>1052<SeP>1144<SeP>1994<SeP>1870<SeP>1784<SeP>1800<SeP>1730<SeP>1589<SeP>1529<SeP>1725<SeP>1562<SeP>1437<SeP>1878<SeP>1764<SeP>1694<SeP>1459<SeP>1511<SeP>1473<SeP>1503<SeP>1690<SeP>2095<SeP>1995<SeP>1399";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "208<SeP>562<SeP>1404<SeP>651<SeP>225<SeP>236<SeP>7043<SeP>616<SeP>9364<SeP>563<SeP>403<SeP>1175<SeP>1253<SeP>242<SeP>316<SeP>302<SeP>198<SeP>732<SeP>334<SeP>8316<SeP>7409<SeP>6831<SeP>10056<SeP>855<SeP>297<SeP>405<SeP>174<SeP>383<SeP>5934<SeP>77<SeP>390<SeP>229<SeP>453<SeP>1376<SeP>10036<SeP>8774<SeP>10840<SeP>9598<SeP>6095<SeP>6252<SeP>8241<SeP>7913<SeP>10146<SeP>7893<SeP>7239<SeP>9092<SeP>9518<SeP>7669<SeP>7830<SeP>5522<SeP>11136<SeP>8249<SeP>7481<SeP>7469<SeP>10101<SeP>10647<SeP>20300<SeP>13730<SeP>9423<SeP>10291<SeP>6130<SeP>9521<SeP>7385<SeP>9554<SeP>9250<SeP>5826<SeP>6427<SeP>7399<SeP>6577<SeP>2913<SeP>6448<SeP>6035<SeP>6316<SeP>6851<SeP>7403<SeP>4348<SeP>5623<SeP>7579<SeP>4745<SeP>6834<SeP>5311<SeP>5300<SeP>7125<SeP>5498<SeP>5934<SeP>5645<SeP>10524<SeP>20687<SeP>35943<SeP>8017<SeP>9397<SeP>5390<SeP>6922<SeP>12791<SeP>6211<SeP>6197<SeP>3991<SeP>4849<SeP>6039<SeP>5247<SeP>9308<SeP>5087<SeP>6824<SeP>5026<SeP>5429<SeP>9508<SeP>7462<SeP>8030<SeP>5658<SeP>4674<SeP>11089<SeP>9011<SeP>4893<SeP>3292<SeP>6483<SeP>9397<SeP>5054<SeP>7504<SeP>9204<SeP>4167<SeP>3059<SeP>1061<SeP>1728<SeP>1822<SeP>2515<SeP>832<SeP>1317<SeP>848<SeP>1488<SeP>1346<SeP>1086<SeP>1198<SeP>797<SeP>1175<SeP>1106<SeP>1201<SeP>1457<SeP>1053<SeP>1823<SeP>2126<SeP>4178<SeP>11023<SeP>8340<SeP>7488<SeP>7836<SeP>11211<SeP>4464<SeP>8889<SeP>12419<SeP>9852<SeP>12577<SeP>9113<SeP>11452<SeP>11336<SeP>8728<SeP>13381<SeP>5143<SeP>4956<SeP>6971<SeP>23832<SeP>7797<SeP>8395<SeP>7960<SeP>17689<SeP>8930<SeP>7561<SeP>6312<SeP>7455<SeP>6798<SeP>26507<SeP>8245<SeP>10656<SeP>6074<SeP>6999<SeP>5580<SeP>10301<SeP>11255<SeP>5753<SeP>14861<SeP>7524<SeP>8370<SeP>7096<SeP>5432<SeP>3585<SeP>7619<SeP>7279<SeP>6018<SeP>5054<SeP>9238<SeP>17859<SeP>6932<SeP>9572<SeP>5067<SeP>7611<SeP>9294<SeP>8809<SeP>5841<SeP>2910<SeP>7655<SeP>2788<SeP>5266<SeP>4109<SeP>672<SeP>113<SeP>642<SeP>218<SeP>667<SeP>1000<SeP>376<SeP>617<SeP>1279<SeP>1201<SeP>3177<SeP>22938<SeP>579<SeP>3496<SeP>3720<SeP>2924<SeP>7225<SeP>3189<SeP>4228<SeP>2882<SeP>3596<SeP>3010<SeP>3318<SeP>4159<SeP>2416<SeP>2338<SeP>3429<SeP>1917<SeP>2022<SeP>2065<SeP>1238<SeP>1913<SeP>797<SeP>927<SeP>1779<SeP>26749<SeP>1485<SeP>3876<SeP>3223<SeP>3095<SeP>3263<SeP>3173<SeP>1964<SeP>3269<SeP>2801<SeP>3364<SeP>2715<SeP>2608<SeP>3720<SeP>3871<SeP>5883<SeP>5160<SeP>4600<SeP>2687<SeP>2887<SeP>4646<SeP>3701<SeP>9940<SeP>5404<SeP>3378<SeP>2784<SeP>2403<SeP>5027<SeP>3488<SeP>3301<SeP>3085<SeP>2968<SeP>5953<SeP>3428<SeP>6181<SeP>3671<SeP>5648<SeP>5815<SeP>5549<SeP>4811<SeP>22547<SeP>4523<SeP>12472<SeP>1931<SeP>2615<SeP>4688<SeP>3664<SeP>4931<SeP>3134<SeP>5224<SeP>4802<SeP>4568<SeP>3479<SeP>4029<SeP>2129<SeP>1450<SeP>2225<SeP>3944<SeP>2346<SeP>3132<SeP>3399<SeP>4761<SeP>3681<SeP>3526<SeP>4150<SeP>3570<SeP>3223<SeP>6373<SeP>8032<SeP>5916<SeP>4731<SeP>4802<SeP>4581<SeP>3827<SeP>4004<SeP>4181<SeP>6722<SeP>5086<SeP>5305<SeP>2184<SeP>753<SeP>1563<SeP>1774<SeP>1130<SeP>1087<SeP>2095<SeP>1129<SeP>1897<SeP>4175<SeP>5370<SeP>6019<SeP>34024<SeP>5310<SeP>8175<SeP>20488<SeP>5484<SeP>5003<SeP>6180<SeP>3992<SeP>24903<SeP>5849<SeP>4731<SeP>4705<SeP>6034<SeP>19188<SeP>16419<SeP>4424<SeP>3226<SeP>4577<SeP>5740<SeP>5152<SeP>2837<SeP>3467<SeP>4384<SeP>5231<SeP>5358<SeP>17933<SeP>5034<SeP>6240<SeP>5953<SeP>1765<SeP>3125<SeP>4322<SeP>4827<SeP>3841<SeP>3607<SeP>3214<SeP>3373<SeP>3570<SeP>3655<SeP>6720<SeP>8932<SeP>10429<SeP>8604<SeP>8813<SeP>7671<SeP>7095<SeP>5128<SeP>4859<SeP>12240<SeP>17181<SeP>3272<SeP>4730<SeP>3269<SeP>11199<SeP>5800<SeP>3891<SeP>5014<SeP>4032<SeP>3068<SeP>9421<SeP>9548<SeP>4793<SeP>3393<SeP>3308<SeP>2366<SeP>2578<SeP>2529<SeP>2029<SeP>2607<SeP>1783<SeP>2668<SeP>2788";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:42:00<SeP>2023-07-28 23:24:00<SeP>2023-07-30 11:06:00<SeP>2023-07-31 22:48:00<SeP>2023-08-02 10:30:00<SeP>2023-08-03 22:12:00<SeP>2023-08-05 09:54:00<SeP>2023-08-06 21:36:00<SeP>2023-08-08 09:18:00<SeP>2023-08-09 21:00:00<SeP>2023-08-11 08:42:00<SeP>2023-08-12 20:24:00<SeP>2023-08-14 08:06:00<SeP>2023-08-15 19:48:00<SeP>2023-08-17 07:30:00<SeP>2023-08-18 19:12:00<SeP>2023-08-20 06:54:00<SeP>2023-08-21 18:36:00<SeP>2023-08-23 06:18:00<SeP>2023-08-24 18:00:00<SeP>2023-08-26 05:42:00<SeP>2023-08-27 17:24:00<SeP>2023-08-29 05:06:00<SeP>2023-08-30 16:48:00<SeP>2023-09-01 04:30:00<SeP>2023-09-02 16:12:00<SeP>2023-09-04 03:54:00<SeP>2023-09-05 15:36:00<SeP>2023-09-07 03:18:00<SeP>2023-09-08 15:00:00<SeP>2023-09-10 02:42:00<SeP>2023-09-11 14:24:00<SeP>2023-09-13 02:06:00<SeP>2023-09-14 13:48:00<SeP>2023-09-16 01:30:00<SeP>2023-09-17 13:12:00<SeP>2023-09-19 00:54:00<SeP>2023-09-20 12:36:00<SeP>2023-09-22 00:18:00<SeP>2023-09-23 12:00:00<SeP>2023-09-24 23:42:00<SeP>2023-09-26 11:24:00<SeP>2023-09-27 23:06:00<SeP>2023-09-29 10:48:00<SeP>2023-09-30 22:30:00<SeP>2023-10-02 10:12:00<SeP>2023-10-03 21:54:00<SeP>2023-10-05 09:36:00<SeP>2023-10-06 21:18:00<SeP>2023-10-08 09:00:00<SeP>2023-10-09 20:42:00<SeP>2023-10-11 08:24:00<SeP>2023-10-12 20:06:00<SeP>2023-10-14 07:48:00<SeP>2023-10-15 19:30:00<SeP>2023-10-17 07:12:00<SeP>2023-10-18 18:54:00<SeP>2023-10-20 06:36:00<SeP>2023-10-21 18:18:00<SeP>2023-10-23 06:00:00<SeP>2023-10-24 17:42:00<SeP>2023-10-26 05:24:00<SeP>2023-10-27 17:06:00<SeP>2023-10-29 04:48:00<SeP>2023-10-30 16:30:00<SeP>2023-11-01 04:12:00<SeP>2023-11-02 15:54:00<SeP>2023-11-04 03:36:00<SeP>2023-11-05 14:18:00<SeP>2023-11-07 02:00:00<SeP>2023-11-08 13:42:00<SeP>2023-11-10 01:24:00<SeP>2023-11-11 13:06:00<SeP>2023-11-13 00:48:00<SeP>2023-11-14 12:30:00<SeP>2023-11-16 00:12:00<SeP>2023-11-17 11:54:00<SeP>2023-11-18 23:36:00<SeP>2023-11-20 11:18:00<SeP>2023-11-21 23:00:00<SeP>2023-11-23 10:42:00<SeP>2023-11-24 22:24:00<SeP>2023-11-26 10:06:00<SeP>2023-11-27 21:48:00<SeP>2023-11-29 09:30:00<SeP>2023-11-30 21:12:00<SeP>2023-12-02 08:54:00<SeP>2023-12-03 20:36:00<SeP>2023-12-05 08:18:00<SeP>2023-12-06 20:00:00<SeP>2023-12-08 07:42:00<SeP>2023-12-09 19:24:00<SeP>2023-12-11 07:06:00<SeP>2023-12-12 18:48:00<SeP>2023-12-14 06:30:00<SeP>2023-12-15 18:12:00<SeP>2023-12-17 05:54:00<SeP>2023-12-18 17:36:00<SeP>2023-12-20 05:18:00<SeP>2023-12-21 17:00:00<SeP>2023-12-23 04:42:00<SeP>2023-12-24 16:24:00<SeP>2023-12-26 04:06:00<SeP>2023-12-27 15:48:00<SeP>2023-12-29 03:30:00<SeP>2023-12-30 15:12:00<SeP>2024-01-01 02:54:00<SeP>2024-01-02 14:36:00<SeP>2024-01-04 02:18:00<SeP>2024-01-05 14:00:00<SeP>2024-01-07 01:42:00<SeP>2024-01-08 13:24:00<SeP>2024-01-10 01:06:00<SeP>2024-01-11 12:48:00<SeP>2024-01-13 00:30:00<SeP>2024-01-14 12:12:00<SeP>2024-01-15 23:54:00<SeP>2024-01-17 11:36:00<SeP>2024-01-18 23:18:00<SeP>2024-01-20 11:00:00<SeP>2024-01-21 22:42:00<SeP>2024-01-23 10:24:00<SeP>2024-01-24 22:06:00<SeP>2024-01-26 09:48:00<SeP>2024-01-27 21:30:00<SeP>2024-01-29 09:12:00<SeP>2024-01-30 20:54:00<SeP>2024-02-01 08:36:00<SeP>2024-02-02 20:18:00<SeP>2024-02-04 08:00:00<SeP>2024-02-05 19:42:00<SeP>2024-02-07 07:24:00<SeP>2024-02-08 19:06:00<SeP>2024-02-10 06:48:00<SeP>2024-02-11 18:30:00<SeP>2024-02-13 06:12:00<SeP>2024-02-14 17:54:00<SeP>2024-02-16 05:36:00<SeP>2024-02-17 17:18:00<SeP>2024-02-19 05:00:00<SeP>2024-02-20 16:42:00<SeP>2024-02-22 04:24:00<SeP>2024-02-23 16:06:00<SeP>2024-02-25 03:48:00<SeP>2024-02-26 15:30:00<SeP>2024-02-28 03:12:00<SeP>2024-02-29 14:54:00<SeP>2024-03-02 02:36:00<SeP>2024-03-03 14:18:00<SeP>2024-03-05 02:00:00<SeP>2024-03-06 13:42:00<SeP>2024-03-08 01:24:00<SeP>2024-03-09 13:06:00<SeP>2024-03-11 01:48:00<SeP>2024-03-12 13:30:00<SeP>2024-03-14 01:12:00<SeP>2024-03-15 12:54:00<SeP>2024-03-17 00:36:00<SeP>2024-03-18 12:18:00<SeP>2024-03-20 00:00:00<SeP>2024-03-21 11:42:00<SeP>2024-03-22 23:24:00<SeP>2024-03-24 11:06:00<SeP>2024-03-25 22:48:00<SeP>2024-03-27 10:30:00<SeP>2024-03-28 22:12:00<SeP>2024-03-30 09:54:00<SeP>2024-03-31 21:36:00<SeP>2024-04-02 09:18:00<SeP>2024-04-03 21:00:00<SeP>2024-04-05 08:42:00<SeP>2024-04-06 20:24:00<SeP>2024-04-08 08:06:00<SeP>2024-04-09 19:48:00<SeP>2024-04-11 07:30:00<SeP>2024-04-12 19:12:00<SeP>2024-04-14 06:54:00<SeP>2024-04-15 18:36:00<SeP>2024-04-17 06:18:00<SeP>2024-04-18 18:00:00<SeP>2024-04-20 05:42:00<SeP>2024-04-21 17:24:00<SeP>2024-04-23 05:06:00<SeP>2024-04-24 16:48:00<SeP>2024-04-26 04:30:00<SeP>2024-04-27 16:12:00<SeP>2024-04-29 03:54:00<SeP>2024-04-30 15:36:00<SeP>2024-05-02 03:18:00<SeP>2024-05-03 15:00:00<SeP>2024-05-05 02:42:00<SeP>2024-05-06 14:24:00<SeP>2024-05-08 02:06:00<SeP>2024-05-09 13:48:00<SeP>2024-05-11 01:30:00<SeP>2024-05-12 13:12:00<SeP>2024-05-14 00:54:00<SeP>2024-05-15 12:36:00<SeP>2024-05-17 00:18:00<SeP>2024-05-18 12:00:00<SeP>2024-05-19 23:42:00<SeP>2024-05-21 11:24:00<SeP>2024-05-22 23:06:00<SeP>2024-05-24 10:48:00<SeP>2024-05-25 22:30:00<SeP>2024-05-27 10:12:00<SeP>2024-05-28 21:54:00<SeP>2024-05-30 09:36:00<SeP>2024-05-31 21:18:00<SeP>2024-06-02 09:00:00<SeP>2024-06-03 20:42:00<SeP>2024-06-05 08:24:00<SeP>2024-06-06 20:06:00<SeP>2024-06-08 07:48:00<SeP>2024-06-09 19:30:00<SeP>2024-06-11 07:12:00<SeP>2024-06-12 18:54:00<SeP>2024-06-14 06:36:00<SeP>2024-06-15 18:18:00<SeP>2024-06-17 06:00:00<SeP>2024-06-18 17:42:00<SeP>2024-06-20 05:24:00<SeP>2024-06-21 17:06:00<SeP>2024-06-23 04:48:00<SeP>2024-06-24 16:30:00<SeP>2024-06-26 04:12:00<SeP>2024-06-27 15:54:00<SeP>2024-06-29 03:36:00<SeP>2024-06-30 15:18:00<SeP>2024-07-02 03:00:00<SeP>2024-07-03 14:42:00<SeP>2024-07-05 02:24:00<SeP>2024-07-06 14:06:00<SeP>2024-07-08 01:48:00<SeP>2024-07-09 13:30:00<SeP>2024-07-11 01:12:00<SeP>2024-07-12 12:54:00<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:18:00<SeP>2024-07-17 00:00:00<SeP>2024-07-18 11:42:00<SeP>2024-07-19 23:24:00<SeP>2024-07-21 11:06:00<SeP>2024-07-22 22:48:00<SeP>2024-07-24 10:30:00<SeP>2024-07-25 22:12:00<SeP>2024-07-27 09:54:00<SeP>2024-07-28 21:36:00<SeP>2024-07-30 09:18:00<SeP>2024-07-31 21:00:00<SeP>2024-08-02 08:42:00<SeP>2024-08-03 20:24:00<SeP>2024-08-05 08:06:00<SeP>2024-08-06 19:48:00<SeP>2024-08-08 07:30:00<SeP>2024-08-09 19:12:00<SeP>2024-08-11 06:54:00<SeP>2024-08-12 18:36:00<SeP>2024-08-14 06:18:00<SeP>2024-08-15 18:00:00<SeP>2024-08-17 05:42:00<SeP>2024-08-18 17:24:00<SeP>2024-08-20 05:06:00<SeP>2024-08-21 16:48:00<SeP>2024-08-23 04:30:00<SeP>2024-08-24 16:12:00<SeP>2024-08-26 03:54:00<SeP>2024-08-27 15:36:00<SeP>2024-08-29 03:18:00<SeP>2024-08-30 15:00:00<SeP>2024-09-01 02:42:00<SeP>2024-09-02 14:24:00<SeP>2024-09-04 02:06:00<SeP>2024-09-05 13:48:00<SeP>2024-09-07 01:30:00<SeP>2024-09-08 13:12:00<SeP>2024-09-10 00:54:00<SeP>2024-09-11 12:36:00<SeP>2024-09-13 00:18:00<SeP>2024-09-14 12:00:00<SeP>2024-09-15 23:42:00<SeP>2024-09-17 11:24:00<SeP>2024-09-18 23:06:00<SeP>2024-09-20 10:48:00<SeP>2024-09-21 22:30:00<SeP>2024-09-23 10:12:00<SeP>2024-09-24 21:54:00<SeP>2024-09-26 09:36:00<SeP>2024-09-27 21:18:00<SeP>2024-09-29 09:00:00<SeP>2024-09-30 20:42:00<SeP>2024-10-02 08:24:00<SeP>2024-10-03 20:06:00<SeP>2024-10-05 07:48:00<SeP>2024-10-06 19:30:00<SeP>2024-10-08 07:12:00<SeP>2024-10-09 18:54:00<SeP>2024-10-11 06:36:00<SeP>2024-10-12 18:18:00<SeP>2024-10-14 06:00:00<SeP>2024-10-15 17:42:00<SeP>2024-10-17 05:24:00<SeP>2024-10-18 17:06:00<SeP>2024-10-20 04:48:00<SeP>2024-10-21 16:30:00<SeP>2024-10-23 04:12:00<SeP>2024-10-24 15:54:00<SeP>2024-10-26 03:36:00<SeP>2024-10-27 15:18:00<SeP>2024-10-29 03:00:00<SeP>2024-10-30 14:42:00<SeP>2024-11-01 02:24:00<SeP>2024-11-02 14:06:00<SeP>2024-11-04 00:48:00<SeP>2024-11-05 12:30:00<SeP>2024-11-07 00:12:00<SeP>2024-11-08 11:54:00<SeP>2024-11-09 23:36:00<SeP>2024-11-11 11:18:00<SeP>2024-11-12 23:00:00<SeP>2024-11-14 10:42:00<SeP>2024-11-15 22:24:00<SeP>2024-11-17 10:06:00<SeP>2024-11-18 21:48:00<SeP>2024-11-20 09:30:00<SeP>2024-11-21 21:12:00<SeP>2024-11-23 08:54:00<SeP>2024-11-24 20:36:00<SeP>2024-11-26 08:18:00<SeP>2024-11-27 20:00:00<SeP>2024-11-29 07:42:00<SeP>2024-11-30 19:24:00<SeP>2024-12-02 07:06:00<SeP>2024-12-03 18:48:00<SeP>2024-12-05 06:30:00<SeP>2024-12-06 18:12:00<SeP>2024-12-08 05:54:00<SeP>2024-12-09 17:36:00<SeP>2024-12-11 05:18:00<SeP>2024-12-12 17:00:00<SeP>2024-12-14 04:42:00<SeP>2024-12-15 16:24:00<SeP>2024-12-17 04:06:00<SeP>2024-12-18 15:48:00<SeP>2024-12-20 03:30:00<SeP>2024-12-21 15:12:00<SeP>2024-12-23 02:54:00<SeP>2024-12-24 14:36:00<SeP>2024-12-26 02:18:00<SeP>2024-12-27 14:00:00<SeP>2024-12-29 01:42:00<SeP>2024-12-30 13:24:00<SeP>2025-01-01 01:06:00<SeP>2025-01-02 12:48:00<SeP>2025-01-04 00:30:00<SeP>2025-01-05 12:12:00<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:36:00<SeP>2025-01-09 23:18:00<SeP>2025-01-11 11:00:00<SeP>2025-01-12 22:42:00<SeP>2025-01-14 10:24:00<SeP>2025-01-15 22:06:00<SeP>2025-01-17 09:48:00<SeP>2025-01-18 21:30:00<SeP>2025-01-20 09:12:00<SeP>2025-01-21 20:54:00<SeP>2025-01-23 08:36:00<SeP>2025-01-24 20:18:00<SeP>2025-01-26 08:00:00<SeP>2025-01-27 19:42:00<SeP>2025-01-29 07:24:00<SeP>2025-01-30 19:06:00<SeP>2025-02-01 06:48:00<SeP>2025-02-02 18:30:00<SeP>2025-02-04 06:12:00<SeP>2025-02-05 17:54:00<SeP>2025-02-07 05:36:00<SeP>2025-02-08 17:18:00<SeP>2025-02-10 05:00:00<SeP>2025-02-11 16:42:00<SeP>2025-02-13 04:24:00<SeP>2025-02-14 16:06:00<SeP>2025-02-16 03:48:00<SeP>2025-02-17 15:30:00<SeP>2025-02-19 03:12:00<SeP>2025-02-20 14:54:00<SeP>2025-02-22 02:36:00<SeP>2025-02-23 14:18:00<SeP>2025-02-25 02:00:00<SeP>2025-02-26 13:42:00<SeP>2025-02-28 01:24:00<SeP>2025-03-01 13:06:00<SeP>2025-03-03 00:48:00<SeP>2025-03-04 12:30:00<SeP>2025-03-06 00:12:00<SeP>2025-03-07 11:54:00<SeP>2025-03-08 23:36:00<SeP>2025-03-10 12:18:00";
  const itemLabel       = "Scans";
  const itemData        = "785<SeP>1522<SeP>1371<SeP>1513<SeP>1254<SeP>1749<SeP>922<SeP>997<SeP>1157<SeP>3380<SeP>3429<SeP>1027<SeP>3321<SeP>878<SeP>791<SeP>881<SeP>1430<SeP>3245<SeP>1462<SeP>1428<SeP>1104<SeP>921<SeP>1136<SeP>1203<SeP>963<SeP>697<SeP>957<SeP>3665<SeP>1007<SeP>831<SeP>1357<SeP>1256<SeP>863<SeP>2657<SeP>1655<SeP>2855<SeP>1905<SeP>1812<SeP>1429<SeP>1290<SeP>1801<SeP>1791<SeP>2264<SeP>1535<SeP>1676<SeP>1604<SeP>1782<SeP>1809<SeP>1786<SeP>1850<SeP>1750<SeP>1568<SeP>3235<SeP>1654<SeP>1594<SeP>2109<SeP>1902<SeP>2244<SeP>1801<SeP>3408<SeP>1345<SeP>1626<SeP>1552<SeP>1320<SeP>1974<SeP>1640<SeP>1288<SeP>1322<SeP>1486<SeP>1746<SeP>1797<SeP>1092<SeP>1259<SeP>1527<SeP>8136<SeP>1189<SeP>1393<SeP>1281<SeP>1731<SeP>1993<SeP>1087<SeP>6700<SeP>1598<SeP>1658<SeP>927<SeP>2227<SeP>2325<SeP>1171<SeP>1035<SeP>1071<SeP>1083<SeP>3042<SeP>1024<SeP>1105<SeP>1853<SeP>4618<SeP>4744<SeP>1028<SeP>957<SeP>980<SeP>970<SeP>1031<SeP>847<SeP>1165<SeP>3126<SeP>2839<SeP>1517<SeP>1676<SeP>722<SeP>824<SeP>1474<SeP>1283<SeP>1097<SeP>1002<SeP>2253<SeP>1257<SeP>1141<SeP>1014<SeP>1069<SeP>864<SeP>850<SeP>906<SeP>842<SeP>906<SeP>1052<SeP>822<SeP>817<SeP>893<SeP>975<SeP>941<SeP>607<SeP>833<SeP>868<SeP>880<SeP>920<SeP>889<SeP>803<SeP>773<SeP>984<SeP>884<SeP>838<SeP>909<SeP>1018<SeP>881<SeP>1101<SeP>997<SeP>445<SeP>976<SeP>888<SeP>956<SeP>1156<SeP>1065<SeP>1129<SeP>1198<SeP>1024<SeP>976<SeP>942<SeP>1003<SeP>701<SeP>1010<SeP>1063<SeP>983<SeP>890<SeP>923<SeP>1088<SeP>1082<SeP>1021<SeP>1017<SeP>1047<SeP>947<SeP>1023<SeP>1882<SeP>1385<SeP>1266<SeP>1090<SeP>938<SeP>1181<SeP>992<SeP>961<SeP>740<SeP>885<SeP>1062<SeP>1010<SeP>814<SeP>1220<SeP>1281<SeP>1106<SeP>1118<SeP>1350<SeP>1236<SeP>1229<SeP>1386<SeP>1286<SeP>1583<SeP>1936<SeP>1451<SeP>1218<SeP>767<SeP>1120<SeP>904<SeP>1067<SeP>628<SeP>813<SeP>1005<SeP>837<SeP>3974<SeP>4486<SeP>2027<SeP>1511<SeP>1136<SeP>882<SeP>1102<SeP>912<SeP>1030<SeP>990<SeP>1059<SeP>1037<SeP>1184<SeP>2339<SeP>1088<SeP>1187<SeP>1232<SeP>1337<SeP>1147<SeP>1074<SeP>975<SeP>1134<SeP>1109<SeP>984<SeP>1159<SeP>1025<SeP>1225<SeP>812<SeP>1428<SeP>1072<SeP>1180<SeP>1180<SeP>1289<SeP>1362<SeP>1532<SeP>1190<SeP>1204<SeP>1106<SeP>1199<SeP>2043<SeP>1243<SeP>1592<SeP>1894<SeP>1461<SeP>2034<SeP>1720<SeP>1148<SeP>1264<SeP>1221<SeP>1170<SeP>1654<SeP>1297<SeP>1237<SeP>1504<SeP>1911<SeP>1356<SeP>1593<SeP>1247<SeP>1320<SeP>1270<SeP>1193<SeP>1177<SeP>1160<SeP>1377<SeP>1182<SeP>1288<SeP>1513<SeP>1875<SeP>1349<SeP>1276<SeP>1713<SeP>1387<SeP>1017<SeP>1093<SeP>1042<SeP>965<SeP>812<SeP>1064<SeP>1798<SeP>1180<SeP>1053<SeP>1156<SeP>986<SeP>805<SeP>1100<SeP>1393<SeP>805<SeP>986<SeP>933<SeP>1336<SeP>1620<SeP>1495<SeP>1058<SeP>1159<SeP>1001<SeP>1872<SeP>1090<SeP>1177<SeP>1066<SeP>1307<SeP>1324<SeP>953<SeP>1017<SeP>1263<SeP>1030<SeP>917<SeP>847<SeP>1384<SeP>1321<SeP>1729<SeP>1590<SeP>1313<SeP>990<SeP>1134<SeP>1307<SeP>1051<SeP>996<SeP>1264<SeP>1030<SeP>1036<SeP>1425<SeP>1524<SeP>1234<SeP>1690<SeP>1332<SeP>1708<SeP>1361<SeP>1329<SeP>1479<SeP>1473<SeP>1484<SeP>1342<SeP>1588<SeP>1529<SeP>1659<SeP>1344<SeP>1406<SeP>1401<SeP>1346<SeP>1223<SeP>1425<SeP>1633<SeP>1566<SeP>1279<SeP>1134<SeP>1401<SeP>1306<SeP>1403<SeP>1188<SeP>1751<SeP>1875<SeP>1365<SeP>757<SeP>1291<SeP>1750<SeP>1418<SeP>1474<SeP>1225<SeP>1102<SeP>1395<SeP>1448<SeP>1244<SeP>1525<SeP>1558<SeP>1692<SeP>1489<SeP>1669<SeP>1431<SeP>1462<SeP>1501<SeP>1580<SeP>1784<SeP>1052<SeP>1144<SeP>1994<SeP>1870<SeP>1784<SeP>1800<SeP>1730<SeP>1589<SeP>1529<SeP>1725<SeP>1562<SeP>1437<SeP>1878<SeP>1764<SeP>1694<SeP>1459<SeP>1511<SeP>1473<SeP>1503<SeP>1690<SeP>2095<SeP>1995<SeP>1399";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:42:00<SeP>2023-07-28 23:24:00<SeP>2023-07-30 11:06:00<SeP>2023-07-31 22:48:00<SeP>2023-08-02 10:30:00<SeP>2023-08-03 22:12:00<SeP>2023-08-05 09:54:00<SeP>2023-08-06 21:36:00<SeP>2023-08-08 09:18:00<SeP>2023-08-09 21:00:00<SeP>2023-08-11 08:42:00<SeP>2023-08-12 20:24:00<SeP>2023-08-14 08:06:00<SeP>2023-08-15 19:48:00<SeP>2023-08-17 07:30:00<SeP>2023-08-18 19:12:00<SeP>2023-08-20 06:54:00<SeP>2023-08-21 18:36:00<SeP>2023-08-23 06:18:00<SeP>2023-08-24 18:00:00<SeP>2023-08-26 05:42:00<SeP>2023-08-27 17:24:00<SeP>2023-08-29 05:06:00<SeP>2023-08-30 16:48:00<SeP>2023-09-01 04:30:00<SeP>2023-09-02 16:12:00<SeP>2023-09-04 03:54:00<SeP>2023-09-05 15:36:00<SeP>2023-09-07 03:18:00<SeP>2023-09-08 15:00:00<SeP>2023-09-10 02:42:00<SeP>2023-09-11 14:24:00<SeP>2023-09-13 02:06:00<SeP>2023-09-14 13:48:00<SeP>2023-09-16 01:30:00<SeP>2023-09-17 13:12:00<SeP>2023-09-19 00:54:00<SeP>2023-09-20 12:36:00<SeP>2023-09-22 00:18:00<SeP>2023-09-23 12:00:00<SeP>2023-09-24 23:42:00<SeP>2023-09-26 11:24:00<SeP>2023-09-27 23:06:00<SeP>2023-09-29 10:48:00<SeP>2023-09-30 22:30:00<SeP>2023-10-02 10:12:00<SeP>2023-10-03 21:54:00<SeP>2023-10-05 09:36:00<SeP>2023-10-06 21:18:00<SeP>2023-10-08 09:00:00<SeP>2023-10-09 20:42:00<SeP>2023-10-11 08:24:00<SeP>2023-10-12 20:06:00<SeP>2023-10-14 07:48:00<SeP>2023-10-15 19:30:00<SeP>2023-10-17 07:12:00<SeP>2023-10-18 18:54:00<SeP>2023-10-20 06:36:00<SeP>2023-10-21 18:18:00<SeP>2023-10-23 06:00:00<SeP>2023-10-24 17:42:00<SeP>2023-10-26 05:24:00<SeP>2023-10-27 17:06:00<SeP>2023-10-29 04:48:00<SeP>2023-10-30 16:30:00<SeP>2023-11-01 04:12:00<SeP>2023-11-02 15:54:00<SeP>2023-11-04 03:36:00<SeP>2023-11-05 14:18:00<SeP>2023-11-07 02:00:00<SeP>2023-11-08 13:42:00<SeP>2023-11-10 01:24:00<SeP>2023-11-11 13:06:00<SeP>2023-11-13 00:48:00<SeP>2023-11-14 12:30:00<SeP>2023-11-16 00:12:00<SeP>2023-11-17 11:54:00<SeP>2023-11-18 23:36:00<SeP>2023-11-20 11:18:00<SeP>2023-11-21 23:00:00<SeP>2023-11-23 10:42:00<SeP>2023-11-24 22:24:00<SeP>2023-11-26 10:06:00<SeP>2023-11-27 21:48:00<SeP>2023-11-29 09:30:00<SeP>2023-11-30 21:12:00<SeP>2023-12-02 08:54:00<SeP>2023-12-03 20:36:00<SeP>2023-12-05 08:18:00<SeP>2023-12-06 20:00:00<SeP>2023-12-08 07:42:00<SeP>2023-12-09 19:24:00<SeP>2023-12-11 07:06:00<SeP>2023-12-12 18:48:00<SeP>2023-12-14 06:30:00<SeP>2023-12-15 18:12:00<SeP>2023-12-17 05:54:00<SeP>2023-12-18 17:36:00<SeP>2023-12-20 05:18:00<SeP>2023-12-21 17:00:00<SeP>2023-12-23 04:42:00<SeP>2023-12-24 16:24:00<SeP>2023-12-26 04:06:00<SeP>2023-12-27 15:48:00<SeP>2023-12-29 03:30:00<SeP>2023-12-30 15:12:00<SeP>2024-01-01 02:54:00<SeP>2024-01-02 14:36:00<SeP>2024-01-04 02:18:00<SeP>2024-01-05 14:00:00<SeP>2024-01-07 01:42:00<SeP>2024-01-08 13:24:00<SeP>2024-01-10 01:06:00<SeP>2024-01-11 12:48:00<SeP>2024-01-13 00:30:00<SeP>2024-01-14 12:12:00<SeP>2024-01-15 23:54:00<SeP>2024-01-17 11:36:00<SeP>2024-01-18 23:18:00<SeP>2024-01-20 11:00:00<SeP>2024-01-21 22:42:00<SeP>2024-01-23 10:24:00<SeP>2024-01-24 22:06:00<SeP>2024-01-26 09:48:00<SeP>2024-01-27 21:30:00<SeP>2024-01-29 09:12:00<SeP>2024-01-30 20:54:00<SeP>2024-02-01 08:36:00<SeP>2024-02-02 20:18:00<SeP>2024-02-04 08:00:00<SeP>2024-02-05 19:42:00<SeP>2024-02-07 07:24:00<SeP>2024-02-08 19:06:00<SeP>2024-02-10 06:48:00<SeP>2024-02-11 18:30:00<SeP>2024-02-13 06:12:00<SeP>2024-02-14 17:54:00<SeP>2024-02-16 05:36:00<SeP>2024-02-17 17:18:00<SeP>2024-02-19 05:00:00<SeP>2024-02-20 16:42:00<SeP>2024-02-22 04:24:00<SeP>2024-02-23 16:06:00<SeP>2024-02-25 03:48:00<SeP>2024-02-26 15:30:00<SeP>2024-02-28 03:12:00<SeP>2024-02-29 14:54:00<SeP>2024-03-02 02:36:00<SeP>2024-03-03 14:18:00<SeP>2024-03-05 02:00:00<SeP>2024-03-06 13:42:00<SeP>2024-03-08 01:24:00<SeP>2024-03-09 13:06:00<SeP>2024-03-11 01:48:00<SeP>2024-03-12 13:30:00<SeP>2024-03-14 01:12:00<SeP>2024-03-15 12:54:00<SeP>2024-03-17 00:36:00<SeP>2024-03-18 12:18:00<SeP>2024-03-20 00:00:00<SeP>2024-03-21 11:42:00<SeP>2024-03-22 23:24:00<SeP>2024-03-24 11:06:00<SeP>2024-03-25 22:48:00<SeP>2024-03-27 10:30:00<SeP>2024-03-28 22:12:00<SeP>2024-03-30 09:54:00<SeP>2024-03-31 21:36:00<SeP>2024-04-02 09:18:00<SeP>2024-04-03 21:00:00<SeP>2024-04-05 08:42:00<SeP>2024-04-06 20:24:00<SeP>2024-04-08 08:06:00<SeP>2024-04-09 19:48:00<SeP>2024-04-11 07:30:00<SeP>2024-04-12 19:12:00<SeP>2024-04-14 06:54:00<SeP>2024-04-15 18:36:00<SeP>2024-04-17 06:18:00<SeP>2024-04-18 18:00:00<SeP>2024-04-20 05:42:00<SeP>2024-04-21 17:24:00<SeP>2024-04-23 05:06:00<SeP>2024-04-24 16:48:00<SeP>2024-04-26 04:30:00<SeP>2024-04-27 16:12:00<SeP>2024-04-29 03:54:00<SeP>2024-04-30 15:36:00<SeP>2024-05-02 03:18:00<SeP>2024-05-03 15:00:00<SeP>2024-05-05 02:42:00<SeP>2024-05-06 14:24:00<SeP>2024-05-08 02:06:00<SeP>2024-05-09 13:48:00<SeP>2024-05-11 01:30:00<SeP>2024-05-12 13:12:00<SeP>2024-05-14 00:54:00<SeP>2024-05-15 12:36:00<SeP>2024-05-17 00:18:00<SeP>2024-05-18 12:00:00<SeP>2024-05-19 23:42:00<SeP>2024-05-21 11:24:00<SeP>2024-05-22 23:06:00<SeP>2024-05-24 10:48:00<SeP>2024-05-25 22:30:00<SeP>2024-05-27 10:12:00<SeP>2024-05-28 21:54:00<SeP>2024-05-30 09:36:00<SeP>2024-05-31 21:18:00<SeP>2024-06-02 09:00:00<SeP>2024-06-03 20:42:00<SeP>2024-06-05 08:24:00<SeP>2024-06-06 20:06:00<SeP>2024-06-08 07:48:00<SeP>2024-06-09 19:30:00<SeP>2024-06-11 07:12:00<SeP>2024-06-12 18:54:00<SeP>2024-06-14 06:36:00<SeP>2024-06-15 18:18:00<SeP>2024-06-17 06:00:00<SeP>2024-06-18 17:42:00<SeP>2024-06-20 05:24:00<SeP>2024-06-21 17:06:00<SeP>2024-06-23 04:48:00<SeP>2024-06-24 16:30:00<SeP>2024-06-26 04:12:00<SeP>2024-06-27 15:54:00<SeP>2024-06-29 03:36:00<SeP>2024-06-30 15:18:00<SeP>2024-07-02 03:00:00<SeP>2024-07-03 14:42:00<SeP>2024-07-05 02:24:00<SeP>2024-07-06 14:06:00<SeP>2024-07-08 01:48:00<SeP>2024-07-09 13:30:00<SeP>2024-07-11 01:12:00<SeP>2024-07-12 12:54:00<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:18:00<SeP>2024-07-17 00:00:00<SeP>2024-07-18 11:42:00<SeP>2024-07-19 23:24:00<SeP>2024-07-21 11:06:00<SeP>2024-07-22 22:48:00<SeP>2024-07-24 10:30:00<SeP>2024-07-25 22:12:00<SeP>2024-07-27 09:54:00<SeP>2024-07-28 21:36:00<SeP>2024-07-30 09:18:00<SeP>2024-07-31 21:00:00<SeP>2024-08-02 08:42:00<SeP>2024-08-03 20:24:00<SeP>2024-08-05 08:06:00<SeP>2024-08-06 19:48:00<SeP>2024-08-08 07:30:00<SeP>2024-08-09 19:12:00<SeP>2024-08-11 06:54:00<SeP>2024-08-12 18:36:00<SeP>2024-08-14 06:18:00<SeP>2024-08-15 18:00:00<SeP>2024-08-17 05:42:00<SeP>2024-08-18 17:24:00<SeP>2024-08-20 05:06:00<SeP>2024-08-21 16:48:00<SeP>2024-08-23 04:30:00<SeP>2024-08-24 16:12:00<SeP>2024-08-26 03:54:00<SeP>2024-08-27 15:36:00<SeP>2024-08-29 03:18:00<SeP>2024-08-30 15:00:00<SeP>2024-09-01 02:42:00<SeP>2024-09-02 14:24:00<SeP>2024-09-04 02:06:00<SeP>2024-09-05 13:48:00<SeP>2024-09-07 01:30:00<SeP>2024-09-08 13:12:00<SeP>2024-09-10 00:54:00<SeP>2024-09-11 12:36:00<SeP>2024-09-13 00:18:00<SeP>2024-09-14 12:00:00<SeP>2024-09-15 23:42:00<SeP>2024-09-17 11:24:00<SeP>2024-09-18 23:06:00<SeP>2024-09-20 10:48:00<SeP>2024-09-21 22:30:00<SeP>2024-09-23 10:12:00<SeP>2024-09-24 21:54:00<SeP>2024-09-26 09:36:00<SeP>2024-09-27 21:18:00<SeP>2024-09-29 09:00:00<SeP>2024-09-30 20:42:00<SeP>2024-10-02 08:24:00<SeP>2024-10-03 20:06:00<SeP>2024-10-05 07:48:00<SeP>2024-10-06 19:30:00<SeP>2024-10-08 07:12:00<SeP>2024-10-09 18:54:00<SeP>2024-10-11 06:36:00<SeP>2024-10-12 18:18:00<SeP>2024-10-14 06:00:00<SeP>2024-10-15 17:42:00<SeP>2024-10-17 05:24:00<SeP>2024-10-18 17:06:00<SeP>2024-10-20 04:48:00<SeP>2024-10-21 16:30:00<SeP>2024-10-23 04:12:00<SeP>2024-10-24 15:54:00<SeP>2024-10-26 03:36:00<SeP>2024-10-27 15:18:00<SeP>2024-10-29 03:00:00<SeP>2024-10-30 14:42:00<SeP>2024-11-01 02:24:00<SeP>2024-11-02 14:06:00<SeP>2024-11-04 00:48:00<SeP>2024-11-05 12:30:00<SeP>2024-11-07 00:12:00<SeP>2024-11-08 11:54:00<SeP>2024-11-09 23:36:00<SeP>2024-11-11 11:18:00<SeP>2024-11-12 23:00:00<SeP>2024-11-14 10:42:00<SeP>2024-11-15 22:24:00<SeP>2024-11-17 10:06:00<SeP>2024-11-18 21:48:00<SeP>2024-11-20 09:30:00<SeP>2024-11-21 21:12:00<SeP>2024-11-23 08:54:00<SeP>2024-11-24 20:36:00<SeP>2024-11-26 08:18:00<SeP>2024-11-27 20:00:00<SeP>2024-11-29 07:42:00<SeP>2024-11-30 19:24:00<SeP>2024-12-02 07:06:00<SeP>2024-12-03 18:48:00<SeP>2024-12-05 06:30:00<SeP>2024-12-06 18:12:00<SeP>2024-12-08 05:54:00<SeP>2024-12-09 17:36:00<SeP>2024-12-11 05:18:00<SeP>2024-12-12 17:00:00<SeP>2024-12-14 04:42:00<SeP>2024-12-15 16:24:00<SeP>2024-12-17 04:06:00<SeP>2024-12-18 15:48:00<SeP>2024-12-20 03:30:00<SeP>2024-12-21 15:12:00<SeP>2024-12-23 02:54:00<SeP>2024-12-24 14:36:00<SeP>2024-12-26 02:18:00<SeP>2024-12-27 14:00:00<SeP>2024-12-29 01:42:00<SeP>2024-12-30 13:24:00<SeP>2025-01-01 01:06:00<SeP>2025-01-02 12:48:00<SeP>2025-01-04 00:30:00<SeP>2025-01-05 12:12:00<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:36:00<SeP>2025-01-09 23:18:00<SeP>2025-01-11 11:00:00<SeP>2025-01-12 22:42:00<SeP>2025-01-14 10:24:00<SeP>2025-01-15 22:06:00<SeP>2025-01-17 09:48:00<SeP>2025-01-18 21:30:00<SeP>2025-01-20 09:12:00<SeP>2025-01-21 20:54:00<SeP>2025-01-23 08:36:00<SeP>2025-01-24 20:18:00<SeP>2025-01-26 08:00:00<SeP>2025-01-27 19:42:00<SeP>2025-01-29 07:24:00<SeP>2025-01-30 19:06:00<SeP>2025-02-01 06:48:00<SeP>2025-02-02 18:30:00<SeP>2025-02-04 06:12:00<SeP>2025-02-05 17:54:00<SeP>2025-02-07 05:36:00<SeP>2025-02-08 17:18:00<SeP>2025-02-10 05:00:00<SeP>2025-02-11 16:42:00<SeP>2025-02-13 04:24:00<SeP>2025-02-14 16:06:00<SeP>2025-02-16 03:48:00<SeP>2025-02-17 15:30:00<SeP>2025-02-19 03:12:00<SeP>2025-02-20 14:54:00<SeP>2025-02-22 02:36:00<SeP>2025-02-23 14:18:00<SeP>2025-02-25 02:00:00<SeP>2025-02-26 13:42:00<SeP>2025-02-28 01:24:00<SeP>2025-03-01 13:06:00<SeP>2025-03-03 00:48:00<SeP>2025-03-04 12:30:00<SeP>2025-03-06 00:12:00<SeP>2025-03-07 11:54:00<SeP>2025-03-08 23:36:00<SeP>2025-03-10 12:18:00";
  const itemLabel       = "Attacks";
  const itemData        = "208<SeP>562<SeP>1404<SeP>651<SeP>225<SeP>236<SeP>7043<SeP>616<SeP>9364<SeP>563<SeP>403<SeP>1175<SeP>1253<SeP>242<SeP>316<SeP>302<SeP>198<SeP>732<SeP>334<SeP>8316<SeP>7409<SeP>6831<SeP>10056<SeP>855<SeP>297<SeP>405<SeP>174<SeP>383<SeP>5934<SeP>77<SeP>390<SeP>229<SeP>453<SeP>1376<SeP>10036<SeP>8774<SeP>10840<SeP>9598<SeP>6095<SeP>6252<SeP>8241<SeP>7913<SeP>10146<SeP>7893<SeP>7239<SeP>9092<SeP>9518<SeP>7669<SeP>7830<SeP>5522<SeP>11136<SeP>8249<SeP>7481<SeP>7469<SeP>10101<SeP>10647<SeP>20300<SeP>13730<SeP>9423<SeP>10291<SeP>6130<SeP>9521<SeP>7385<SeP>9554<SeP>9250<SeP>5826<SeP>6427<SeP>7399<SeP>6577<SeP>2913<SeP>6448<SeP>6035<SeP>6316<SeP>6851<SeP>7403<SeP>4348<SeP>5623<SeP>7579<SeP>4745<SeP>6834<SeP>5311<SeP>5300<SeP>7125<SeP>5498<SeP>5934<SeP>5645<SeP>10524<SeP>20687<SeP>35943<SeP>8017<SeP>9397<SeP>5390<SeP>6922<SeP>12791<SeP>6211<SeP>6197<SeP>3991<SeP>4849<SeP>6039<SeP>5247<SeP>9308<SeP>5087<SeP>6824<SeP>5026<SeP>5429<SeP>9508<SeP>7462<SeP>8030<SeP>5658<SeP>4674<SeP>11089<SeP>9011<SeP>4893<SeP>3292<SeP>6483<SeP>9397<SeP>5054<SeP>7504<SeP>9204<SeP>4167<SeP>3059<SeP>1061<SeP>1728<SeP>1822<SeP>2515<SeP>832<SeP>1317<SeP>848<SeP>1488<SeP>1346<SeP>1086<SeP>1198<SeP>797<SeP>1175<SeP>1106<SeP>1201<SeP>1457<SeP>1053<SeP>1823<SeP>2126<SeP>4178<SeP>11023<SeP>8340<SeP>7488<SeP>7836<SeP>11211<SeP>4464<SeP>8889<SeP>12419<SeP>9852<SeP>12577<SeP>9113<SeP>11452<SeP>11336<SeP>8728<SeP>13381<SeP>5143<SeP>4956<SeP>6971<SeP>23832<SeP>7797<SeP>8395<SeP>7960<SeP>17689<SeP>8930<SeP>7561<SeP>6312<SeP>7455<SeP>6798<SeP>26507<SeP>8245<SeP>10656<SeP>6074<SeP>6999<SeP>5580<SeP>10301<SeP>11255<SeP>5753<SeP>14861<SeP>7524<SeP>8370<SeP>7096<SeP>5432<SeP>3585<SeP>7619<SeP>7279<SeP>6018<SeP>5054<SeP>9238<SeP>17859<SeP>6932<SeP>9572<SeP>5067<SeP>7611<SeP>9294<SeP>8809<SeP>5841<SeP>2910<SeP>7655<SeP>2788<SeP>5266<SeP>4109<SeP>672<SeP>113<SeP>642<SeP>218<SeP>667<SeP>1000<SeP>376<SeP>617<SeP>1279<SeP>1201<SeP>3177<SeP>22938<SeP>579<SeP>3496<SeP>3720<SeP>2924<SeP>7225<SeP>3189<SeP>4228<SeP>2882<SeP>3596<SeP>3010<SeP>3318<SeP>4159<SeP>2416<SeP>2338<SeP>3429<SeP>1917<SeP>2022<SeP>2065<SeP>1238<SeP>1913<SeP>797<SeP>927<SeP>1779<SeP>26749<SeP>1485<SeP>3876<SeP>3223<SeP>3095<SeP>3263<SeP>3173<SeP>1964<SeP>3269<SeP>2801<SeP>3364<SeP>2715<SeP>2608<SeP>3720<SeP>3871<SeP>5883<SeP>5160<SeP>4600<SeP>2687<SeP>2887<SeP>4646<SeP>3701<SeP>9940<SeP>5404<SeP>3378<SeP>2784<SeP>2403<SeP>5027<SeP>3488<SeP>3301<SeP>3085<SeP>2968<SeP>5953<SeP>3428<SeP>6181<SeP>3671<SeP>5648<SeP>5815<SeP>5549<SeP>4811<SeP>22547<SeP>4523<SeP>12472<SeP>1931<SeP>2615<SeP>4688<SeP>3664<SeP>4931<SeP>3134<SeP>5224<SeP>4802<SeP>4568<SeP>3479<SeP>4029<SeP>2129<SeP>1450<SeP>2225<SeP>3944<SeP>2346<SeP>3132<SeP>3399<SeP>4761<SeP>3681<SeP>3526<SeP>4150<SeP>3570<SeP>3223<SeP>6373<SeP>8032<SeP>5916<SeP>4731<SeP>4802<SeP>4581<SeP>3827<SeP>4004<SeP>4181<SeP>6722<SeP>5086<SeP>5305<SeP>2184<SeP>753<SeP>1563<SeP>1774<SeP>1130<SeP>1087<SeP>2095<SeP>1129<SeP>1897<SeP>4175<SeP>5370<SeP>6019<SeP>34024<SeP>5310<SeP>8175<SeP>20488<SeP>5484<SeP>5003<SeP>6180<SeP>3992<SeP>24903<SeP>5849<SeP>4731<SeP>4705<SeP>6034<SeP>19188<SeP>16419<SeP>4424<SeP>3226<SeP>4577<SeP>5740<SeP>5152<SeP>2837<SeP>3467<SeP>4384<SeP>5231<SeP>5358<SeP>17933<SeP>5034<SeP>6240<SeP>5953<SeP>1765<SeP>3125<SeP>4322<SeP>4827<SeP>3841<SeP>3607<SeP>3214<SeP>3373<SeP>3570<SeP>3655<SeP>6720<SeP>8932<SeP>10429<SeP>8604<SeP>8813<SeP>7671<SeP>7095<SeP>5128<SeP>4859<SeP>12240<SeP>17181<SeP>3272<SeP>4730<SeP>3269<SeP>11199<SeP>5800<SeP>3891<SeP>5014<SeP>4032<SeP>3068<SeP>9421<SeP>9548<SeP>4793<SeP>3393<SeP>3308<SeP>2366<SeP>2578<SeP>2529<SeP>2029<SeP>2607<SeP>1783<SeP>2668<SeP>2788";
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:42:00<SeP>2023-07-28 23:24:00<SeP>2023-07-30 11:06:00<SeP>2023-07-31 22:48:00<SeP>2023-08-02 10:30:00<SeP>2023-08-03 22:12:00<SeP>2023-08-05 09:54:00<SeP>2023-08-06 21:36:00<SeP>2023-08-08 09:18:00<SeP>2023-08-09 21:00:00<SeP>2023-08-11 08:42:00<SeP>2023-08-12 20:24:00<SeP>2023-08-14 08:06:00<SeP>2023-08-15 19:48:00<SeP>2023-08-17 07:30:00<SeP>2023-08-18 19:12:00<SeP>2023-08-20 06:54:00<SeP>2023-08-21 18:36:00<SeP>2023-08-23 06:18:00<SeP>2023-08-24 18:00:00<SeP>2023-08-26 05:42:00<SeP>2023-08-27 17:24:00<SeP>2023-08-29 05:06:00<SeP>2023-08-30 16:48:00<SeP>2023-09-01 04:30:00<SeP>2023-09-02 16:12:00<SeP>2023-09-04 03:54:00<SeP>2023-09-05 15:36:00<SeP>2023-09-07 03:18:00<SeP>2023-09-08 15:00:00<SeP>2023-09-10 02:42:00<SeP>2023-09-11 14:24:00<SeP>2023-09-13 02:06:00<SeP>2023-09-14 13:48:00<SeP>2023-09-16 01:30:00<SeP>2023-09-17 13:12:00<SeP>2023-09-19 00:54:00<SeP>2023-09-20 12:36:00<SeP>2023-09-22 00:18:00<SeP>2023-09-23 12:00:00<SeP>2023-09-24 23:42:00<SeP>2023-09-26 11:24:00<SeP>2023-09-27 23:06:00<SeP>2023-09-29 10:48:00<SeP>2023-09-30 22:30:00<SeP>2023-10-02 10:12:00<SeP>2023-10-03 21:54:00<SeP>2023-10-05 09:36:00<SeP>2023-10-06 21:18:00<SeP>2023-10-08 09:00:00<SeP>2023-10-09 20:42:00<SeP>2023-10-11 08:24:00<SeP>2023-10-12 20:06:00<SeP>2023-10-14 07:48:00<SeP>2023-10-15 19:30:00<SeP>2023-10-17 07:12:00<SeP>2023-10-18 18:54:00<SeP>2023-10-20 06:36:00<SeP>2023-10-21 18:18:00<SeP>2023-10-23 06:00:00<SeP>2023-10-24 17:42:00<SeP>2023-10-26 05:24:00<SeP>2023-10-27 17:06:00<SeP>2023-10-29 04:48:00<SeP>2023-10-30 16:30:00<SeP>2023-11-01 04:12:00<SeP>2023-11-02 15:54:00<SeP>2023-11-04 03:36:00<SeP>2023-11-05 14:18:00<SeP>2023-11-07 02:00:00<SeP>2023-11-08 13:42:00<SeP>2023-11-10 01:24:00<SeP>2023-11-11 13:06:00<SeP>2023-11-13 00:48:00<SeP>2023-11-14 12:30:00<SeP>2023-11-16 00:12:00<SeP>2023-11-17 11:54:00<SeP>2023-11-18 23:36:00<SeP>2023-11-20 11:18:00<SeP>2023-11-21 23:00:00<SeP>2023-11-23 10:42:00<SeP>2023-11-24 22:24:00<SeP>2023-11-26 10:06:00<SeP>2023-11-27 21:48:00<SeP>2023-11-29 09:30:00<SeP>2023-11-30 21:12:00<SeP>2023-12-02 08:54:00<SeP>2023-12-03 20:36:00<SeP>2023-12-05 08:18:00<SeP>2023-12-06 20:00:00<SeP>2023-12-08 07:42:00<SeP>2023-12-09 19:24:00<SeP>2023-12-11 07:06:00<SeP>2023-12-12 18:48:00<SeP>2023-12-14 06:30:00<SeP>2023-12-15 18:12:00<SeP>2023-12-17 05:54:00<SeP>2023-12-18 17:36:00<SeP>2023-12-20 05:18:00<SeP>2023-12-21 17:00:00<SeP>2023-12-23 04:42:00<SeP>2023-12-24 16:24:00<SeP>2023-12-26 04:06:00<SeP>2023-12-27 15:48:00<SeP>2023-12-29 03:30:00<SeP>2023-12-30 15:12:00<SeP>2024-01-01 02:54:00<SeP>2024-01-02 14:36:00<SeP>2024-01-04 02:18:00<SeP>2024-01-05 14:00:00<SeP>2024-01-07 01:42:00<SeP>2024-01-08 13:24:00<SeP>2024-01-10 01:06:00<SeP>2024-01-11 12:48:00<SeP>2024-01-13 00:30:00<SeP>2024-01-14 12:12:00<SeP>2024-01-15 23:54:00<SeP>2024-01-17 11:36:00<SeP>2024-01-18 23:18:00<SeP>2024-01-20 11:00:00<SeP>2024-01-21 22:42:00<SeP>2024-01-23 10:24:00<SeP>2024-01-24 22:06:00<SeP>2024-01-26 09:48:00<SeP>2024-01-27 21:30:00<SeP>2024-01-29 09:12:00<SeP>2024-01-30 20:54:00<SeP>2024-02-01 08:36:00<SeP>2024-02-02 20:18:00<SeP>2024-02-04 08:00:00<SeP>2024-02-05 19:42:00<SeP>2024-02-07 07:24:00<SeP>2024-02-08 19:06:00<SeP>2024-02-10 06:48:00<SeP>2024-02-11 18:30:00<SeP>2024-02-13 06:12:00<SeP>2024-02-14 17:54:00<SeP>2024-02-16 05:36:00<SeP>2024-02-17 17:18:00<SeP>2024-02-19 05:00:00<SeP>2024-02-20 16:42:00<SeP>2024-02-22 04:24:00<SeP>2024-02-23 16:06:00<SeP>2024-02-25 03:48:00<SeP>2024-02-26 15:30:00<SeP>2024-02-28 03:12:00<SeP>2024-02-29 14:54:00<SeP>2024-03-02 02:36:00<SeP>2024-03-03 14:18:00<SeP>2024-03-05 02:00:00<SeP>2024-03-06 13:42:00<SeP>2024-03-08 01:24:00<SeP>2024-03-09 13:06:00<SeP>2024-03-11 01:48:00<SeP>2024-03-12 13:30:00<SeP>2024-03-14 01:12:00<SeP>2024-03-15 12:54:00<SeP>2024-03-17 00:36:00<SeP>2024-03-18 12:18:00<SeP>2024-03-20 00:00:00<SeP>2024-03-21 11:42:00<SeP>2024-03-22 23:24:00<SeP>2024-03-24 11:06:00<SeP>2024-03-25 22:48:00<SeP>2024-03-27 10:30:00<SeP>2024-03-28 22:12:00<SeP>2024-03-30 09:54:00<SeP>2024-03-31 21:36:00<SeP>2024-04-02 09:18:00<SeP>2024-04-03 21:00:00<SeP>2024-04-05 08:42:00<SeP>2024-04-06 20:24:00<SeP>2024-04-08 08:06:00<SeP>2024-04-09 19:48:00<SeP>2024-04-11 07:30:00<SeP>2024-04-12 19:12:00<SeP>2024-04-14 06:54:00<SeP>2024-04-15 18:36:00<SeP>2024-04-17 06:18:00<SeP>2024-04-18 18:00:00<SeP>2024-04-20 05:42:00<SeP>2024-04-21 17:24:00<SeP>2024-04-23 05:06:00<SeP>2024-04-24 16:48:00<SeP>2024-04-26 04:30:00<SeP>2024-04-27 16:12:00<SeP>2024-04-29 03:54:00<SeP>2024-04-30 15:36:00<SeP>2024-05-02 03:18:00<SeP>2024-05-03 15:00:00<SeP>2024-05-05 02:42:00<SeP>2024-05-06 14:24:00<SeP>2024-05-08 02:06:00<SeP>2024-05-09 13:48:00<SeP>2024-05-11 01:30:00<SeP>2024-05-12 13:12:00<SeP>2024-05-14 00:54:00<SeP>2024-05-15 12:36:00<SeP>2024-05-17 00:18:00<SeP>2024-05-18 12:00:00<SeP>2024-05-19 23:42:00<SeP>2024-05-21 11:24:00<SeP>2024-05-22 23:06:00<SeP>2024-05-24 10:48:00<SeP>2024-05-25 22:30:00<SeP>2024-05-27 10:12:00<SeP>2024-05-28 21:54:00<SeP>2024-05-30 09:36:00<SeP>2024-05-31 21:18:00<SeP>2024-06-02 09:00:00<SeP>2024-06-03 20:42:00<SeP>2024-06-05 08:24:00<SeP>2024-06-06 20:06:00<SeP>2024-06-08 07:48:00<SeP>2024-06-09 19:30:00<SeP>2024-06-11 07:12:00<SeP>2024-06-12 18:54:00<SeP>2024-06-14 06:36:00<SeP>2024-06-15 18:18:00<SeP>2024-06-17 06:00:00<SeP>2024-06-18 17:42:00<SeP>2024-06-20 05:24:00<SeP>2024-06-21 17:06:00<SeP>2024-06-23 04:48:00<SeP>2024-06-24 16:30:00<SeP>2024-06-26 04:12:00<SeP>2024-06-27 15:54:00<SeP>2024-06-29 03:36:00<SeP>2024-06-30 15:18:00<SeP>2024-07-02 03:00:00<SeP>2024-07-03 14:42:00<SeP>2024-07-05 02:24:00<SeP>2024-07-06 14:06:00<SeP>2024-07-08 01:48:00<SeP>2024-07-09 13:30:00<SeP>2024-07-11 01:12:00<SeP>2024-07-12 12:54:00<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:18:00<SeP>2024-07-17 00:00:00<SeP>2024-07-18 11:42:00<SeP>2024-07-19 23:24:00<SeP>2024-07-21 11:06:00<SeP>2024-07-22 22:48:00<SeP>2024-07-24 10:30:00<SeP>2024-07-25 22:12:00<SeP>2024-07-27 09:54:00<SeP>2024-07-28 21:36:00<SeP>2024-07-30 09:18:00<SeP>2024-07-31 21:00:00<SeP>2024-08-02 08:42:00<SeP>2024-08-03 20:24:00<SeP>2024-08-05 08:06:00<SeP>2024-08-06 19:48:00<SeP>2024-08-08 07:30:00<SeP>2024-08-09 19:12:00<SeP>2024-08-11 06:54:00<SeP>2024-08-12 18:36:00<SeP>2024-08-14 06:18:00<SeP>2024-08-15 18:00:00<SeP>2024-08-17 05:42:00<SeP>2024-08-18 17:24:00<SeP>2024-08-20 05:06:00<SeP>2024-08-21 16:48:00<SeP>2024-08-23 04:30:00<SeP>2024-08-24 16:12:00<SeP>2024-08-26 03:54:00<SeP>2024-08-27 15:36:00<SeP>2024-08-29 03:18:00<SeP>2024-08-30 15:00:00<SeP>2024-09-01 02:42:00<SeP>2024-09-02 14:24:00<SeP>2024-09-04 02:06:00<SeP>2024-09-05 13:48:00<SeP>2024-09-07 01:30:00<SeP>2024-09-08 13:12:00<SeP>2024-09-10 00:54:00<SeP>2024-09-11 12:36:00<SeP>2024-09-13 00:18:00<SeP>2024-09-14 12:00:00<SeP>2024-09-15 23:42:00<SeP>2024-09-17 11:24:00<SeP>2024-09-18 23:06:00<SeP>2024-09-20 10:48:00<SeP>2024-09-21 22:30:00<SeP>2024-09-23 10:12:00<SeP>2024-09-24 21:54:00<SeP>2024-09-26 09:36:00<SeP>2024-09-27 21:18:00<SeP>2024-09-29 09:00:00<SeP>2024-09-30 20:42:00<SeP>2024-10-02 08:24:00<SeP>2024-10-03 20:06:00<SeP>2024-10-05 07:48:00<SeP>2024-10-06 19:30:00<SeP>2024-10-08 07:12:00<SeP>2024-10-09 18:54:00<SeP>2024-10-11 06:36:00<SeP>2024-10-12 18:18:00<SeP>2024-10-14 06:00:00<SeP>2024-10-15 17:42:00<SeP>2024-10-17 05:24:00<SeP>2024-10-18 17:06:00<SeP>2024-10-20 04:48:00<SeP>2024-10-21 16:30:00<SeP>2024-10-23 04:12:00<SeP>2024-10-24 15:54:00<SeP>2024-10-26 03:36:00<SeP>2024-10-27 15:18:00<SeP>2024-10-29 03:00:00<SeP>2024-10-30 14:42:00<SeP>2024-11-01 02:24:00<SeP>2024-11-02 14:06:00<SeP>2024-11-04 00:48:00<SeP>2024-11-05 12:30:00<SeP>2024-11-07 00:12:00<SeP>2024-11-08 11:54:00<SeP>2024-11-09 23:36:00<SeP>2024-11-11 11:18:00<SeP>2024-11-12 23:00:00<SeP>2024-11-14 10:42:00<SeP>2024-11-15 22:24:00<SeP>2024-11-17 10:06:00<SeP>2024-11-18 21:48:00<SeP>2024-11-20 09:30:00<SeP>2024-11-21 21:12:00<SeP>2024-11-23 08:54:00<SeP>2024-11-24 20:36:00<SeP>2024-11-26 08:18:00<SeP>2024-11-27 20:00:00<SeP>2024-11-29 07:42:00<SeP>2024-11-30 19:24:00<SeP>2024-12-02 07:06:00<SeP>2024-12-03 18:48:00<SeP>2024-12-05 06:30:00<SeP>2024-12-06 18:12:00<SeP>2024-12-08 05:54:00<SeP>2024-12-09 17:36:00<SeP>2024-12-11 05:18:00<SeP>2024-12-12 17:00:00<SeP>2024-12-14 04:42:00<SeP>2024-12-15 16:24:00<SeP>2024-12-17 04:06:00<SeP>2024-12-18 15:48:00<SeP>2024-12-20 03:30:00<SeP>2024-12-21 15:12:00<SeP>2024-12-23 02:54:00<SeP>2024-12-24 14:36:00<SeP>2024-12-26 02:18:00<SeP>2024-12-27 14:00:00<SeP>2024-12-29 01:42:00<SeP>2024-12-30 13:24:00<SeP>2025-01-01 01:06:00<SeP>2025-01-02 12:48:00<SeP>2025-01-04 00:30:00<SeP>2025-01-05 12:12:00<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:36:00<SeP>2025-01-09 23:18:00<SeP>2025-01-11 11:00:00<SeP>2025-01-12 22:42:00<SeP>2025-01-14 10:24:00<SeP>2025-01-15 22:06:00<SeP>2025-01-17 09:48:00<SeP>2025-01-18 21:30:00<SeP>2025-01-20 09:12:00<SeP>2025-01-21 20:54:00<SeP>2025-01-23 08:36:00<SeP>2025-01-24 20:18:00<SeP>2025-01-26 08:00:00<SeP>2025-01-27 19:42:00<SeP>2025-01-29 07:24:00<SeP>2025-01-30 19:06:00<SeP>2025-02-01 06:48:00<SeP>2025-02-02 18:30:00<SeP>2025-02-04 06:12:00<SeP>2025-02-05 17:54:00<SeP>2025-02-07 05:36:00<SeP>2025-02-08 17:18:00<SeP>2025-02-10 05:00:00<SeP>2025-02-11 16:42:00<SeP>2025-02-13 04:24:00<SeP>2025-02-14 16:06:00<SeP>2025-02-16 03:48:00<SeP>2025-02-17 15:30:00<SeP>2025-02-19 03:12:00<SeP>2025-02-20 14:54:00<SeP>2025-02-22 02:36:00<SeP>2025-02-23 14:18:00<SeP>2025-02-25 02:00:00<SeP>2025-02-26 13:42:00<SeP>2025-02-28 01:24:00<SeP>2025-03-01 13:06:00<SeP>2025-03-03 00:48:00<SeP>2025-03-04 12:30:00<SeP>2025-03-06 00:12:00<SeP>2025-03-07 11:54:00<SeP>2025-03-08 23:36:00<SeP>2025-03-10 12:18:00";
  const item1Label       = "Escaneos";
  const item1Data        = "785<SeP>1522<SeP>1371<SeP>1513<SeP>1254<SeP>1749<SeP>922<SeP>997<SeP>1157<SeP>3380<SeP>3429<SeP>1027<SeP>3321<SeP>878<SeP>791<SeP>881<SeP>1430<SeP>3245<SeP>1462<SeP>1428<SeP>1104<SeP>921<SeP>1136<SeP>1203<SeP>963<SeP>697<SeP>957<SeP>3665<SeP>1007<SeP>831<SeP>1357<SeP>1256<SeP>863<SeP>2657<SeP>1655<SeP>2855<SeP>1905<SeP>1812<SeP>1429<SeP>1290<SeP>1801<SeP>1791<SeP>2264<SeP>1535<SeP>1676<SeP>1604<SeP>1782<SeP>1809<SeP>1786<SeP>1850<SeP>1750<SeP>1568<SeP>3235<SeP>1654<SeP>1594<SeP>2109<SeP>1902<SeP>2244<SeP>1801<SeP>3408<SeP>1345<SeP>1626<SeP>1552<SeP>1320<SeP>1974<SeP>1640<SeP>1288<SeP>1322<SeP>1486<SeP>1746<SeP>1797<SeP>1092<SeP>1259<SeP>1527<SeP>8136<SeP>1189<SeP>1393<SeP>1281<SeP>1731<SeP>1993<SeP>1087<SeP>6700<SeP>1598<SeP>1658<SeP>927<SeP>2227<SeP>2325<SeP>1171<SeP>1035<SeP>1071<SeP>1083<SeP>3042<SeP>1024<SeP>1105<SeP>1853<SeP>4618<SeP>4744<SeP>1028<SeP>957<SeP>980<SeP>970<SeP>1031<SeP>847<SeP>1165<SeP>3126<SeP>2839<SeP>1517<SeP>1676<SeP>722<SeP>824<SeP>1474<SeP>1283<SeP>1097<SeP>1002<SeP>2253<SeP>1257<SeP>1141<SeP>1014<SeP>1069<SeP>864<SeP>850<SeP>906<SeP>842<SeP>906<SeP>1052<SeP>822<SeP>817<SeP>893<SeP>975<SeP>941<SeP>607<SeP>833<SeP>868<SeP>880<SeP>920<SeP>889<SeP>803<SeP>773<SeP>984<SeP>884<SeP>838<SeP>909<SeP>1018<SeP>881<SeP>1101<SeP>997<SeP>445<SeP>976<SeP>888<SeP>956<SeP>1156<SeP>1065<SeP>1129<SeP>1198<SeP>1024<SeP>976<SeP>942<SeP>1003<SeP>701<SeP>1010<SeP>1063<SeP>983<SeP>890<SeP>923<SeP>1088<SeP>1082<SeP>1021<SeP>1017<SeP>1047<SeP>947<SeP>1023<SeP>1882<SeP>1385<SeP>1266<SeP>1090<SeP>938<SeP>1181<SeP>992<SeP>961<SeP>740<SeP>885<SeP>1062<SeP>1010<SeP>814<SeP>1220<SeP>1281<SeP>1106<SeP>1118<SeP>1350<SeP>1236<SeP>1229<SeP>1386<SeP>1286<SeP>1583<SeP>1936<SeP>1451<SeP>1218<SeP>767<SeP>1120<SeP>904<SeP>1067<SeP>628<SeP>813<SeP>1005<SeP>837<SeP>3974<SeP>4486<SeP>2027<SeP>1511<SeP>1136<SeP>882<SeP>1102<SeP>912<SeP>1030<SeP>990<SeP>1059<SeP>1037<SeP>1184<SeP>2339<SeP>1088<SeP>1187<SeP>1232<SeP>1337<SeP>1147<SeP>1074<SeP>975<SeP>1134<SeP>1109<SeP>984<SeP>1159<SeP>1025<SeP>1225<SeP>812<SeP>1428<SeP>1072<SeP>1180<SeP>1180<SeP>1289<SeP>1362<SeP>1532<SeP>1190<SeP>1204<SeP>1106<SeP>1199<SeP>2043<SeP>1243<SeP>1592<SeP>1894<SeP>1461<SeP>2034<SeP>1720<SeP>1148<SeP>1264<SeP>1221<SeP>1170<SeP>1654<SeP>1297<SeP>1237<SeP>1504<SeP>1911<SeP>1356<SeP>1593<SeP>1247<SeP>1320<SeP>1270<SeP>1193<SeP>1177<SeP>1160<SeP>1377<SeP>1182<SeP>1288<SeP>1513<SeP>1875<SeP>1349<SeP>1276<SeP>1713<SeP>1387<SeP>1017<SeP>1093<SeP>1042<SeP>965<SeP>812<SeP>1064<SeP>1798<SeP>1180<SeP>1053<SeP>1156<SeP>986<SeP>805<SeP>1100<SeP>1393<SeP>805<SeP>986<SeP>933<SeP>1336<SeP>1620<SeP>1495<SeP>1058<SeP>1159<SeP>1001<SeP>1872<SeP>1090<SeP>1177<SeP>1066<SeP>1307<SeP>1324<SeP>953<SeP>1017<SeP>1263<SeP>1030<SeP>917<SeP>847<SeP>1384<SeP>1321<SeP>1729<SeP>1590<SeP>1313<SeP>990<SeP>1134<SeP>1307<SeP>1051<SeP>996<SeP>1264<SeP>1030<SeP>1036<SeP>1425<SeP>1524<SeP>1234<SeP>1690<SeP>1332<SeP>1708<SeP>1361<SeP>1329<SeP>1479<SeP>1473<SeP>1484<SeP>1342<SeP>1588<SeP>1529<SeP>1659<SeP>1344<SeP>1406<SeP>1401<SeP>1346<SeP>1223<SeP>1425<SeP>1633<SeP>1566<SeP>1279<SeP>1134<SeP>1401<SeP>1306<SeP>1403<SeP>1188<SeP>1751<SeP>1875<SeP>1365<SeP>757<SeP>1291<SeP>1750<SeP>1418<SeP>1474<SeP>1225<SeP>1102<SeP>1395<SeP>1448<SeP>1244<SeP>1525<SeP>1558<SeP>1692<SeP>1489<SeP>1669<SeP>1431<SeP>1462<SeP>1501<SeP>1580<SeP>1784<SeP>1052<SeP>1144<SeP>1994<SeP>1870<SeP>1784<SeP>1800<SeP>1730<SeP>1589<SeP>1529<SeP>1725<SeP>1562<SeP>1437<SeP>1878<SeP>1764<SeP>1694<SeP>1459<SeP>1511<SeP>1473<SeP>1503<SeP>1690<SeP>2095<SeP>1995<SeP>1399";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "208<SeP>562<SeP>1404<SeP>651<SeP>225<SeP>236<SeP>7043<SeP>616<SeP>9364<SeP>563<SeP>403<SeP>1175<SeP>1253<SeP>242<SeP>316<SeP>302<SeP>198<SeP>732<SeP>334<SeP>8316<SeP>7409<SeP>6831<SeP>10056<SeP>855<SeP>297<SeP>405<SeP>174<SeP>383<SeP>5934<SeP>77<SeP>390<SeP>229<SeP>453<SeP>1376<SeP>10036<SeP>8774<SeP>10840<SeP>9598<SeP>6095<SeP>6252<SeP>8241<SeP>7913<SeP>10146<SeP>7893<SeP>7239<SeP>9092<SeP>9518<SeP>7669<SeP>7830<SeP>5522<SeP>11136<SeP>8249<SeP>7481<SeP>7469<SeP>10101<SeP>10647<SeP>20300<SeP>13730<SeP>9423<SeP>10291<SeP>6130<SeP>9521<SeP>7385<SeP>9554<SeP>9250<SeP>5826<SeP>6427<SeP>7399<SeP>6577<SeP>2913<SeP>6448<SeP>6035<SeP>6316<SeP>6851<SeP>7403<SeP>4348<SeP>5623<SeP>7579<SeP>4745<SeP>6834<SeP>5311<SeP>5300<SeP>7125<SeP>5498<SeP>5934<SeP>5645<SeP>10524<SeP>20687<SeP>35943<SeP>8017<SeP>9397<SeP>5390<SeP>6922<SeP>12791<SeP>6211<SeP>6197<SeP>3991<SeP>4849<SeP>6039<SeP>5247<SeP>9308<SeP>5087<SeP>6824<SeP>5026<SeP>5429<SeP>9508<SeP>7462<SeP>8030<SeP>5658<SeP>4674<SeP>11089<SeP>9011<SeP>4893<SeP>3292<SeP>6483<SeP>9397<SeP>5054<SeP>7504<SeP>9204<SeP>4167<SeP>3059<SeP>1061<SeP>1728<SeP>1822<SeP>2515<SeP>832<SeP>1317<SeP>848<SeP>1488<SeP>1346<SeP>1086<SeP>1198<SeP>797<SeP>1175<SeP>1106<SeP>1201<SeP>1457<SeP>1053<SeP>1823<SeP>2126<SeP>4178<SeP>11023<SeP>8340<SeP>7488<SeP>7836<SeP>11211<SeP>4464<SeP>8889<SeP>12419<SeP>9852<SeP>12577<SeP>9113<SeP>11452<SeP>11336<SeP>8728<SeP>13381<SeP>5143<SeP>4956<SeP>6971<SeP>23832<SeP>7797<SeP>8395<SeP>7960<SeP>17689<SeP>8930<SeP>7561<SeP>6312<SeP>7455<SeP>6798<SeP>26507<SeP>8245<SeP>10656<SeP>6074<SeP>6999<SeP>5580<SeP>10301<SeP>11255<SeP>5753<SeP>14861<SeP>7524<SeP>8370<SeP>7096<SeP>5432<SeP>3585<SeP>7619<SeP>7279<SeP>6018<SeP>5054<SeP>9238<SeP>17859<SeP>6932<SeP>9572<SeP>5067<SeP>7611<SeP>9294<SeP>8809<SeP>5841<SeP>2910<SeP>7655<SeP>2788<SeP>5266<SeP>4109<SeP>672<SeP>113<SeP>642<SeP>218<SeP>667<SeP>1000<SeP>376<SeP>617<SeP>1279<SeP>1201<SeP>3177<SeP>22938<SeP>579<SeP>3496<SeP>3720<SeP>2924<SeP>7225<SeP>3189<SeP>4228<SeP>2882<SeP>3596<SeP>3010<SeP>3318<SeP>4159<SeP>2416<SeP>2338<SeP>3429<SeP>1917<SeP>2022<SeP>2065<SeP>1238<SeP>1913<SeP>797<SeP>927<SeP>1779<SeP>26749<SeP>1485<SeP>3876<SeP>3223<SeP>3095<SeP>3263<SeP>3173<SeP>1964<SeP>3269<SeP>2801<SeP>3364<SeP>2715<SeP>2608<SeP>3720<SeP>3871<SeP>5883<SeP>5160<SeP>4600<SeP>2687<SeP>2887<SeP>4646<SeP>3701<SeP>9940<SeP>5404<SeP>3378<SeP>2784<SeP>2403<SeP>5027<SeP>3488<SeP>3301<SeP>3085<SeP>2968<SeP>5953<SeP>3428<SeP>6181<SeP>3671<SeP>5648<SeP>5815<SeP>5549<SeP>4811<SeP>22547<SeP>4523<SeP>12472<SeP>1931<SeP>2615<SeP>4688<SeP>3664<SeP>4931<SeP>3134<SeP>5224<SeP>4802<SeP>4568<SeP>3479<SeP>4029<SeP>2129<SeP>1450<SeP>2225<SeP>3944<SeP>2346<SeP>3132<SeP>3399<SeP>4761<SeP>3681<SeP>3526<SeP>4150<SeP>3570<SeP>3223<SeP>6373<SeP>8032<SeP>5916<SeP>4731<SeP>4802<SeP>4581<SeP>3827<SeP>4004<SeP>4181<SeP>6722<SeP>5086<SeP>5305<SeP>2184<SeP>753<SeP>1563<SeP>1774<SeP>1130<SeP>1087<SeP>2095<SeP>1129<SeP>1897<SeP>4175<SeP>5370<SeP>6019<SeP>34024<SeP>5310<SeP>8175<SeP>20488<SeP>5484<SeP>5003<SeP>6180<SeP>3992<SeP>24903<SeP>5849<SeP>4731<SeP>4705<SeP>6034<SeP>19188<SeP>16419<SeP>4424<SeP>3226<SeP>4577<SeP>5740<SeP>5152<SeP>2837<SeP>3467<SeP>4384<SeP>5231<SeP>5358<SeP>17933<SeP>5034<SeP>6240<SeP>5953<SeP>1765<SeP>3125<SeP>4322<SeP>4827<SeP>3841<SeP>3607<SeP>3214<SeP>3373<SeP>3570<SeP>3655<SeP>6720<SeP>8932<SeP>10429<SeP>8604<SeP>8813<SeP>7671<SeP>7095<SeP>5128<SeP>4859<SeP>12240<SeP>17181<SeP>3272<SeP>4730<SeP>3269<SeP>11199<SeP>5800<SeP>3891<SeP>5014<SeP>4032<SeP>3068<SeP>9421<SeP>9548<SeP>4793<SeP>3393<SeP>3308<SeP>2366<SeP>2578<SeP>2529<SeP>2029<SeP>2607<SeP>1783<SeP>2668<SeP>2788";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:42:00<SeP>2023-07-28 23:24:00<SeP>2023-07-30 11:06:00<SeP>2023-07-31 22:48:00<SeP>2023-08-02 10:30:00<SeP>2023-08-03 22:12:00<SeP>2023-08-05 09:54:00<SeP>2023-08-06 21:36:00<SeP>2023-08-08 09:18:00<SeP>2023-08-09 21:00:00<SeP>2023-08-11 08:42:00<SeP>2023-08-12 20:24:00<SeP>2023-08-14 08:06:00<SeP>2023-08-15 19:48:00<SeP>2023-08-17 07:30:00<SeP>2023-08-18 19:12:00<SeP>2023-08-20 06:54:00<SeP>2023-08-21 18:36:00<SeP>2023-08-23 06:18:00<SeP>2023-08-24 18:00:00<SeP>2023-08-26 05:42:00<SeP>2023-08-27 17:24:00<SeP>2023-08-29 05:06:00<SeP>2023-08-30 16:48:00<SeP>2023-09-01 04:30:00<SeP>2023-09-02 16:12:00<SeP>2023-09-04 03:54:00<SeP>2023-09-05 15:36:00<SeP>2023-09-07 03:18:00<SeP>2023-09-08 15:00:00<SeP>2023-09-10 02:42:00<SeP>2023-09-11 14:24:00<SeP>2023-09-13 02:06:00<SeP>2023-09-14 13:48:00<SeP>2023-09-16 01:30:00<SeP>2023-09-17 13:12:00<SeP>2023-09-19 00:54:00<SeP>2023-09-20 12:36:00<SeP>2023-09-22 00:18:00<SeP>2023-09-23 12:00:00<SeP>2023-09-24 23:42:00<SeP>2023-09-26 11:24:00<SeP>2023-09-27 23:06:00<SeP>2023-09-29 10:48:00<SeP>2023-09-30 22:30:00<SeP>2023-10-02 10:12:00<SeP>2023-10-03 21:54:00<SeP>2023-10-05 09:36:00<SeP>2023-10-06 21:18:00<SeP>2023-10-08 09:00:00<SeP>2023-10-09 20:42:00<SeP>2023-10-11 08:24:00<SeP>2023-10-12 20:06:00<SeP>2023-10-14 07:48:00<SeP>2023-10-15 19:30:00<SeP>2023-10-17 07:12:00<SeP>2023-10-18 18:54:00<SeP>2023-10-20 06:36:00<SeP>2023-10-21 18:18:00<SeP>2023-10-23 06:00:00<SeP>2023-10-24 17:42:00<SeP>2023-10-26 05:24:00<SeP>2023-10-27 17:06:00<SeP>2023-10-29 04:48:00<SeP>2023-10-30 16:30:00<SeP>2023-11-01 04:12:00<SeP>2023-11-02 15:54:00<SeP>2023-11-04 03:36:00<SeP>2023-11-05 14:18:00<SeP>2023-11-07 02:00:00<SeP>2023-11-08 13:42:00<SeP>2023-11-10 01:24:00<SeP>2023-11-11 13:06:00<SeP>2023-11-13 00:48:00<SeP>2023-11-14 12:30:00<SeP>2023-11-16 00:12:00<SeP>2023-11-17 11:54:00<SeP>2023-11-18 23:36:00<SeP>2023-11-20 11:18:00<SeP>2023-11-21 23:00:00<SeP>2023-11-23 10:42:00<SeP>2023-11-24 22:24:00<SeP>2023-11-26 10:06:00<SeP>2023-11-27 21:48:00<SeP>2023-11-29 09:30:00<SeP>2023-11-30 21:12:00<SeP>2023-12-02 08:54:00<SeP>2023-12-03 20:36:00<SeP>2023-12-05 08:18:00<SeP>2023-12-06 20:00:00<SeP>2023-12-08 07:42:00<SeP>2023-12-09 19:24:00<SeP>2023-12-11 07:06:00<SeP>2023-12-12 18:48:00<SeP>2023-12-14 06:30:00<SeP>2023-12-15 18:12:00<SeP>2023-12-17 05:54:00<SeP>2023-12-18 17:36:00<SeP>2023-12-20 05:18:00<SeP>2023-12-21 17:00:00<SeP>2023-12-23 04:42:00<SeP>2023-12-24 16:24:00<SeP>2023-12-26 04:06:00<SeP>2023-12-27 15:48:00<SeP>2023-12-29 03:30:00<SeP>2023-12-30 15:12:00<SeP>2024-01-01 02:54:00<SeP>2024-01-02 14:36:00<SeP>2024-01-04 02:18:00<SeP>2024-01-05 14:00:00<SeP>2024-01-07 01:42:00<SeP>2024-01-08 13:24:00<SeP>2024-01-10 01:06:00<SeP>2024-01-11 12:48:00<SeP>2024-01-13 00:30:00<SeP>2024-01-14 12:12:00<SeP>2024-01-15 23:54:00<SeP>2024-01-17 11:36:00<SeP>2024-01-18 23:18:00<SeP>2024-01-20 11:00:00<SeP>2024-01-21 22:42:00<SeP>2024-01-23 10:24:00<SeP>2024-01-24 22:06:00<SeP>2024-01-26 09:48:00<SeP>2024-01-27 21:30:00<SeP>2024-01-29 09:12:00<SeP>2024-01-30 20:54:00<SeP>2024-02-01 08:36:00<SeP>2024-02-02 20:18:00<SeP>2024-02-04 08:00:00<SeP>2024-02-05 19:42:00<SeP>2024-02-07 07:24:00<SeP>2024-02-08 19:06:00<SeP>2024-02-10 06:48:00<SeP>2024-02-11 18:30:00<SeP>2024-02-13 06:12:00<SeP>2024-02-14 17:54:00<SeP>2024-02-16 05:36:00<SeP>2024-02-17 17:18:00<SeP>2024-02-19 05:00:00<SeP>2024-02-20 16:42:00<SeP>2024-02-22 04:24:00<SeP>2024-02-23 16:06:00<SeP>2024-02-25 03:48:00<SeP>2024-02-26 15:30:00<SeP>2024-02-28 03:12:00<SeP>2024-02-29 14:54:00<SeP>2024-03-02 02:36:00<SeP>2024-03-03 14:18:00<SeP>2024-03-05 02:00:00<SeP>2024-03-06 13:42:00<SeP>2024-03-08 01:24:00<SeP>2024-03-09 13:06:00<SeP>2024-03-11 01:48:00<SeP>2024-03-12 13:30:00<SeP>2024-03-14 01:12:00<SeP>2024-03-15 12:54:00<SeP>2024-03-17 00:36:00<SeP>2024-03-18 12:18:00<SeP>2024-03-20 00:00:00<SeP>2024-03-21 11:42:00<SeP>2024-03-22 23:24:00<SeP>2024-03-24 11:06:00<SeP>2024-03-25 22:48:00<SeP>2024-03-27 10:30:00<SeP>2024-03-28 22:12:00<SeP>2024-03-30 09:54:00<SeP>2024-03-31 21:36:00<SeP>2024-04-02 09:18:00<SeP>2024-04-03 21:00:00<SeP>2024-04-05 08:42:00<SeP>2024-04-06 20:24:00<SeP>2024-04-08 08:06:00<SeP>2024-04-09 19:48:00<SeP>2024-04-11 07:30:00<SeP>2024-04-12 19:12:00<SeP>2024-04-14 06:54:00<SeP>2024-04-15 18:36:00<SeP>2024-04-17 06:18:00<SeP>2024-04-18 18:00:00<SeP>2024-04-20 05:42:00<SeP>2024-04-21 17:24:00<SeP>2024-04-23 05:06:00<SeP>2024-04-24 16:48:00<SeP>2024-04-26 04:30:00<SeP>2024-04-27 16:12:00<SeP>2024-04-29 03:54:00<SeP>2024-04-30 15:36:00<SeP>2024-05-02 03:18:00<SeP>2024-05-03 15:00:00<SeP>2024-05-05 02:42:00<SeP>2024-05-06 14:24:00<SeP>2024-05-08 02:06:00<SeP>2024-05-09 13:48:00<SeP>2024-05-11 01:30:00<SeP>2024-05-12 13:12:00<SeP>2024-05-14 00:54:00<SeP>2024-05-15 12:36:00<SeP>2024-05-17 00:18:00<SeP>2024-05-18 12:00:00<SeP>2024-05-19 23:42:00<SeP>2024-05-21 11:24:00<SeP>2024-05-22 23:06:00<SeP>2024-05-24 10:48:00<SeP>2024-05-25 22:30:00<SeP>2024-05-27 10:12:00<SeP>2024-05-28 21:54:00<SeP>2024-05-30 09:36:00<SeP>2024-05-31 21:18:00<SeP>2024-06-02 09:00:00<SeP>2024-06-03 20:42:00<SeP>2024-06-05 08:24:00<SeP>2024-06-06 20:06:00<SeP>2024-06-08 07:48:00<SeP>2024-06-09 19:30:00<SeP>2024-06-11 07:12:00<SeP>2024-06-12 18:54:00<SeP>2024-06-14 06:36:00<SeP>2024-06-15 18:18:00<SeP>2024-06-17 06:00:00<SeP>2024-06-18 17:42:00<SeP>2024-06-20 05:24:00<SeP>2024-06-21 17:06:00<SeP>2024-06-23 04:48:00<SeP>2024-06-24 16:30:00<SeP>2024-06-26 04:12:00<SeP>2024-06-27 15:54:00<SeP>2024-06-29 03:36:00<SeP>2024-06-30 15:18:00<SeP>2024-07-02 03:00:00<SeP>2024-07-03 14:42:00<SeP>2024-07-05 02:24:00<SeP>2024-07-06 14:06:00<SeP>2024-07-08 01:48:00<SeP>2024-07-09 13:30:00<SeP>2024-07-11 01:12:00<SeP>2024-07-12 12:54:00<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:18:00<SeP>2024-07-17 00:00:00<SeP>2024-07-18 11:42:00<SeP>2024-07-19 23:24:00<SeP>2024-07-21 11:06:00<SeP>2024-07-22 22:48:00<SeP>2024-07-24 10:30:00<SeP>2024-07-25 22:12:00<SeP>2024-07-27 09:54:00<SeP>2024-07-28 21:36:00<SeP>2024-07-30 09:18:00<SeP>2024-07-31 21:00:00<SeP>2024-08-02 08:42:00<SeP>2024-08-03 20:24:00<SeP>2024-08-05 08:06:00<SeP>2024-08-06 19:48:00<SeP>2024-08-08 07:30:00<SeP>2024-08-09 19:12:00<SeP>2024-08-11 06:54:00<SeP>2024-08-12 18:36:00<SeP>2024-08-14 06:18:00<SeP>2024-08-15 18:00:00<SeP>2024-08-17 05:42:00<SeP>2024-08-18 17:24:00<SeP>2024-08-20 05:06:00<SeP>2024-08-21 16:48:00<SeP>2024-08-23 04:30:00<SeP>2024-08-24 16:12:00<SeP>2024-08-26 03:54:00<SeP>2024-08-27 15:36:00<SeP>2024-08-29 03:18:00<SeP>2024-08-30 15:00:00<SeP>2024-09-01 02:42:00<SeP>2024-09-02 14:24:00<SeP>2024-09-04 02:06:00<SeP>2024-09-05 13:48:00<SeP>2024-09-07 01:30:00<SeP>2024-09-08 13:12:00<SeP>2024-09-10 00:54:00<SeP>2024-09-11 12:36:00<SeP>2024-09-13 00:18:00<SeP>2024-09-14 12:00:00<SeP>2024-09-15 23:42:00<SeP>2024-09-17 11:24:00<SeP>2024-09-18 23:06:00<SeP>2024-09-20 10:48:00<SeP>2024-09-21 22:30:00<SeP>2024-09-23 10:12:00<SeP>2024-09-24 21:54:00<SeP>2024-09-26 09:36:00<SeP>2024-09-27 21:18:00<SeP>2024-09-29 09:00:00<SeP>2024-09-30 20:42:00<SeP>2024-10-02 08:24:00<SeP>2024-10-03 20:06:00<SeP>2024-10-05 07:48:00<SeP>2024-10-06 19:30:00<SeP>2024-10-08 07:12:00<SeP>2024-10-09 18:54:00<SeP>2024-10-11 06:36:00<SeP>2024-10-12 18:18:00<SeP>2024-10-14 06:00:00<SeP>2024-10-15 17:42:00<SeP>2024-10-17 05:24:00<SeP>2024-10-18 17:06:00<SeP>2024-10-20 04:48:00<SeP>2024-10-21 16:30:00<SeP>2024-10-23 04:12:00<SeP>2024-10-24 15:54:00<SeP>2024-10-26 03:36:00<SeP>2024-10-27 15:18:00<SeP>2024-10-29 03:00:00<SeP>2024-10-30 14:42:00<SeP>2024-11-01 02:24:00<SeP>2024-11-02 14:06:00<SeP>2024-11-04 00:48:00<SeP>2024-11-05 12:30:00<SeP>2024-11-07 00:12:00<SeP>2024-11-08 11:54:00<SeP>2024-11-09 23:36:00<SeP>2024-11-11 11:18:00<SeP>2024-11-12 23:00:00<SeP>2024-11-14 10:42:00<SeP>2024-11-15 22:24:00<SeP>2024-11-17 10:06:00<SeP>2024-11-18 21:48:00<SeP>2024-11-20 09:30:00<SeP>2024-11-21 21:12:00<SeP>2024-11-23 08:54:00<SeP>2024-11-24 20:36:00<SeP>2024-11-26 08:18:00<SeP>2024-11-27 20:00:00<SeP>2024-11-29 07:42:00<SeP>2024-11-30 19:24:00<SeP>2024-12-02 07:06:00<SeP>2024-12-03 18:48:00<SeP>2024-12-05 06:30:00<SeP>2024-12-06 18:12:00<SeP>2024-12-08 05:54:00<SeP>2024-12-09 17:36:00<SeP>2024-12-11 05:18:00<SeP>2024-12-12 17:00:00<SeP>2024-12-14 04:42:00<SeP>2024-12-15 16:24:00<SeP>2024-12-17 04:06:00<SeP>2024-12-18 15:48:00<SeP>2024-12-20 03:30:00<SeP>2024-12-21 15:12:00<SeP>2024-12-23 02:54:00<SeP>2024-12-24 14:36:00<SeP>2024-12-26 02:18:00<SeP>2024-12-27 14:00:00<SeP>2024-12-29 01:42:00<SeP>2024-12-30 13:24:00<SeP>2025-01-01 01:06:00<SeP>2025-01-02 12:48:00<SeP>2025-01-04 00:30:00<SeP>2025-01-05 12:12:00<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:36:00<SeP>2025-01-09 23:18:00<SeP>2025-01-11 11:00:00<SeP>2025-01-12 22:42:00<SeP>2025-01-14 10:24:00<SeP>2025-01-15 22:06:00<SeP>2025-01-17 09:48:00<SeP>2025-01-18 21:30:00<SeP>2025-01-20 09:12:00<SeP>2025-01-21 20:54:00<SeP>2025-01-23 08:36:00<SeP>2025-01-24 20:18:00<SeP>2025-01-26 08:00:00<SeP>2025-01-27 19:42:00<SeP>2025-01-29 07:24:00<SeP>2025-01-30 19:06:00<SeP>2025-02-01 06:48:00<SeP>2025-02-02 18:30:00<SeP>2025-02-04 06:12:00<SeP>2025-02-05 17:54:00<SeP>2025-02-07 05:36:00<SeP>2025-02-08 17:18:00<SeP>2025-02-10 05:00:00<SeP>2025-02-11 16:42:00<SeP>2025-02-13 04:24:00<SeP>2025-02-14 16:06:00<SeP>2025-02-16 03:48:00<SeP>2025-02-17 15:30:00<SeP>2025-02-19 03:12:00<SeP>2025-02-20 14:54:00<SeP>2025-02-22 02:36:00<SeP>2025-02-23 14:18:00<SeP>2025-02-25 02:00:00<SeP>2025-02-26 13:42:00<SeP>2025-02-28 01:24:00<SeP>2025-03-01 13:06:00<SeP>2025-03-03 00:48:00<SeP>2025-03-04 12:30:00<SeP>2025-03-06 00:12:00<SeP>2025-03-07 11:54:00<SeP>2025-03-08 23:36:00<SeP>2025-03-10 12:18:00";
  const itemLabel       = "Escaneos";
  const itemData        = "785<SeP>1522<SeP>1371<SeP>1513<SeP>1254<SeP>1749<SeP>922<SeP>997<SeP>1157<SeP>3380<SeP>3429<SeP>1027<SeP>3321<SeP>878<SeP>791<SeP>881<SeP>1430<SeP>3245<SeP>1462<SeP>1428<SeP>1104<SeP>921<SeP>1136<SeP>1203<SeP>963<SeP>697<SeP>957<SeP>3665<SeP>1007<SeP>831<SeP>1357<SeP>1256<SeP>863<SeP>2657<SeP>1655<SeP>2855<SeP>1905<SeP>1812<SeP>1429<SeP>1290<SeP>1801<SeP>1791<SeP>2264<SeP>1535<SeP>1676<SeP>1604<SeP>1782<SeP>1809<SeP>1786<SeP>1850<SeP>1750<SeP>1568<SeP>3235<SeP>1654<SeP>1594<SeP>2109<SeP>1902<SeP>2244<SeP>1801<SeP>3408<SeP>1345<SeP>1626<SeP>1552<SeP>1320<SeP>1974<SeP>1640<SeP>1288<SeP>1322<SeP>1486<SeP>1746<SeP>1797<SeP>1092<SeP>1259<SeP>1527<SeP>8136<SeP>1189<SeP>1393<SeP>1281<SeP>1731<SeP>1993<SeP>1087<SeP>6700<SeP>1598<SeP>1658<SeP>927<SeP>2227<SeP>2325<SeP>1171<SeP>1035<SeP>1071<SeP>1083<SeP>3042<SeP>1024<SeP>1105<SeP>1853<SeP>4618<SeP>4744<SeP>1028<SeP>957<SeP>980<SeP>970<SeP>1031<SeP>847<SeP>1165<SeP>3126<SeP>2839<SeP>1517<SeP>1676<SeP>722<SeP>824<SeP>1474<SeP>1283<SeP>1097<SeP>1002<SeP>2253<SeP>1257<SeP>1141<SeP>1014<SeP>1069<SeP>864<SeP>850<SeP>906<SeP>842<SeP>906<SeP>1052<SeP>822<SeP>817<SeP>893<SeP>975<SeP>941<SeP>607<SeP>833<SeP>868<SeP>880<SeP>920<SeP>889<SeP>803<SeP>773<SeP>984<SeP>884<SeP>838<SeP>909<SeP>1018<SeP>881<SeP>1101<SeP>997<SeP>445<SeP>976<SeP>888<SeP>956<SeP>1156<SeP>1065<SeP>1129<SeP>1198<SeP>1024<SeP>976<SeP>942<SeP>1003<SeP>701<SeP>1010<SeP>1063<SeP>983<SeP>890<SeP>923<SeP>1088<SeP>1082<SeP>1021<SeP>1017<SeP>1047<SeP>947<SeP>1023<SeP>1882<SeP>1385<SeP>1266<SeP>1090<SeP>938<SeP>1181<SeP>992<SeP>961<SeP>740<SeP>885<SeP>1062<SeP>1010<SeP>814<SeP>1220<SeP>1281<SeP>1106<SeP>1118<SeP>1350<SeP>1236<SeP>1229<SeP>1386<SeP>1286<SeP>1583<SeP>1936<SeP>1451<SeP>1218<SeP>767<SeP>1120<SeP>904<SeP>1067<SeP>628<SeP>813<SeP>1005<SeP>837<SeP>3974<SeP>4486<SeP>2027<SeP>1511<SeP>1136<SeP>882<SeP>1102<SeP>912<SeP>1030<SeP>990<SeP>1059<SeP>1037<SeP>1184<SeP>2339<SeP>1088<SeP>1187<SeP>1232<SeP>1337<SeP>1147<SeP>1074<SeP>975<SeP>1134<SeP>1109<SeP>984<SeP>1159<SeP>1025<SeP>1225<SeP>812<SeP>1428<SeP>1072<SeP>1180<SeP>1180<SeP>1289<SeP>1362<SeP>1532<SeP>1190<SeP>1204<SeP>1106<SeP>1199<SeP>2043<SeP>1243<SeP>1592<SeP>1894<SeP>1461<SeP>2034<SeP>1720<SeP>1148<SeP>1264<SeP>1221<SeP>1170<SeP>1654<SeP>1297<SeP>1237<SeP>1504<SeP>1911<SeP>1356<SeP>1593<SeP>1247<SeP>1320<SeP>1270<SeP>1193<SeP>1177<SeP>1160<SeP>1377<SeP>1182<SeP>1288<SeP>1513<SeP>1875<SeP>1349<SeP>1276<SeP>1713<SeP>1387<SeP>1017<SeP>1093<SeP>1042<SeP>965<SeP>812<SeP>1064<SeP>1798<SeP>1180<SeP>1053<SeP>1156<SeP>986<SeP>805<SeP>1100<SeP>1393<SeP>805<SeP>986<SeP>933<SeP>1336<SeP>1620<SeP>1495<SeP>1058<SeP>1159<SeP>1001<SeP>1872<SeP>1090<SeP>1177<SeP>1066<SeP>1307<SeP>1324<SeP>953<SeP>1017<SeP>1263<SeP>1030<SeP>917<SeP>847<SeP>1384<SeP>1321<SeP>1729<SeP>1590<SeP>1313<SeP>990<SeP>1134<SeP>1307<SeP>1051<SeP>996<SeP>1264<SeP>1030<SeP>1036<SeP>1425<SeP>1524<SeP>1234<SeP>1690<SeP>1332<SeP>1708<SeP>1361<SeP>1329<SeP>1479<SeP>1473<SeP>1484<SeP>1342<SeP>1588<SeP>1529<SeP>1659<SeP>1344<SeP>1406<SeP>1401<SeP>1346<SeP>1223<SeP>1425<SeP>1633<SeP>1566<SeP>1279<SeP>1134<SeP>1401<SeP>1306<SeP>1403<SeP>1188<SeP>1751<SeP>1875<SeP>1365<SeP>757<SeP>1291<SeP>1750<SeP>1418<SeP>1474<SeP>1225<SeP>1102<SeP>1395<SeP>1448<SeP>1244<SeP>1525<SeP>1558<SeP>1692<SeP>1489<SeP>1669<SeP>1431<SeP>1462<SeP>1501<SeP>1580<SeP>1784<SeP>1052<SeP>1144<SeP>1994<SeP>1870<SeP>1784<SeP>1800<SeP>1730<SeP>1589<SeP>1529<SeP>1725<SeP>1562<SeP>1437<SeP>1878<SeP>1764<SeP>1694<SeP>1459<SeP>1511<SeP>1473<SeP>1503<SeP>1690<SeP>2095<SeP>1995<SeP>1399";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:42:00<SeP>2023-07-28 23:24:00<SeP>2023-07-30 11:06:00<SeP>2023-07-31 22:48:00<SeP>2023-08-02 10:30:00<SeP>2023-08-03 22:12:00<SeP>2023-08-05 09:54:00<SeP>2023-08-06 21:36:00<SeP>2023-08-08 09:18:00<SeP>2023-08-09 21:00:00<SeP>2023-08-11 08:42:00<SeP>2023-08-12 20:24:00<SeP>2023-08-14 08:06:00<SeP>2023-08-15 19:48:00<SeP>2023-08-17 07:30:00<SeP>2023-08-18 19:12:00<SeP>2023-08-20 06:54:00<SeP>2023-08-21 18:36:00<SeP>2023-08-23 06:18:00<SeP>2023-08-24 18:00:00<SeP>2023-08-26 05:42:00<SeP>2023-08-27 17:24:00<SeP>2023-08-29 05:06:00<SeP>2023-08-30 16:48:00<SeP>2023-09-01 04:30:00<SeP>2023-09-02 16:12:00<SeP>2023-09-04 03:54:00<SeP>2023-09-05 15:36:00<SeP>2023-09-07 03:18:00<SeP>2023-09-08 15:00:00<SeP>2023-09-10 02:42:00<SeP>2023-09-11 14:24:00<SeP>2023-09-13 02:06:00<SeP>2023-09-14 13:48:00<SeP>2023-09-16 01:30:00<SeP>2023-09-17 13:12:00<SeP>2023-09-19 00:54:00<SeP>2023-09-20 12:36:00<SeP>2023-09-22 00:18:00<SeP>2023-09-23 12:00:00<SeP>2023-09-24 23:42:00<SeP>2023-09-26 11:24:00<SeP>2023-09-27 23:06:00<SeP>2023-09-29 10:48:00<SeP>2023-09-30 22:30:00<SeP>2023-10-02 10:12:00<SeP>2023-10-03 21:54:00<SeP>2023-10-05 09:36:00<SeP>2023-10-06 21:18:00<SeP>2023-10-08 09:00:00<SeP>2023-10-09 20:42:00<SeP>2023-10-11 08:24:00<SeP>2023-10-12 20:06:00<SeP>2023-10-14 07:48:00<SeP>2023-10-15 19:30:00<SeP>2023-10-17 07:12:00<SeP>2023-10-18 18:54:00<SeP>2023-10-20 06:36:00<SeP>2023-10-21 18:18:00<SeP>2023-10-23 06:00:00<SeP>2023-10-24 17:42:00<SeP>2023-10-26 05:24:00<SeP>2023-10-27 17:06:00<SeP>2023-10-29 04:48:00<SeP>2023-10-30 16:30:00<SeP>2023-11-01 04:12:00<SeP>2023-11-02 15:54:00<SeP>2023-11-04 03:36:00<SeP>2023-11-05 14:18:00<SeP>2023-11-07 02:00:00<SeP>2023-11-08 13:42:00<SeP>2023-11-10 01:24:00<SeP>2023-11-11 13:06:00<SeP>2023-11-13 00:48:00<SeP>2023-11-14 12:30:00<SeP>2023-11-16 00:12:00<SeP>2023-11-17 11:54:00<SeP>2023-11-18 23:36:00<SeP>2023-11-20 11:18:00<SeP>2023-11-21 23:00:00<SeP>2023-11-23 10:42:00<SeP>2023-11-24 22:24:00<SeP>2023-11-26 10:06:00<SeP>2023-11-27 21:48:00<SeP>2023-11-29 09:30:00<SeP>2023-11-30 21:12:00<SeP>2023-12-02 08:54:00<SeP>2023-12-03 20:36:00<SeP>2023-12-05 08:18:00<SeP>2023-12-06 20:00:00<SeP>2023-12-08 07:42:00<SeP>2023-12-09 19:24:00<SeP>2023-12-11 07:06:00<SeP>2023-12-12 18:48:00<SeP>2023-12-14 06:30:00<SeP>2023-12-15 18:12:00<SeP>2023-12-17 05:54:00<SeP>2023-12-18 17:36:00<SeP>2023-12-20 05:18:00<SeP>2023-12-21 17:00:00<SeP>2023-12-23 04:42:00<SeP>2023-12-24 16:24:00<SeP>2023-12-26 04:06:00<SeP>2023-12-27 15:48:00<SeP>2023-12-29 03:30:00<SeP>2023-12-30 15:12:00<SeP>2024-01-01 02:54:00<SeP>2024-01-02 14:36:00<SeP>2024-01-04 02:18:00<SeP>2024-01-05 14:00:00<SeP>2024-01-07 01:42:00<SeP>2024-01-08 13:24:00<SeP>2024-01-10 01:06:00<SeP>2024-01-11 12:48:00<SeP>2024-01-13 00:30:00<SeP>2024-01-14 12:12:00<SeP>2024-01-15 23:54:00<SeP>2024-01-17 11:36:00<SeP>2024-01-18 23:18:00<SeP>2024-01-20 11:00:00<SeP>2024-01-21 22:42:00<SeP>2024-01-23 10:24:00<SeP>2024-01-24 22:06:00<SeP>2024-01-26 09:48:00<SeP>2024-01-27 21:30:00<SeP>2024-01-29 09:12:00<SeP>2024-01-30 20:54:00<SeP>2024-02-01 08:36:00<SeP>2024-02-02 20:18:00<SeP>2024-02-04 08:00:00<SeP>2024-02-05 19:42:00<SeP>2024-02-07 07:24:00<SeP>2024-02-08 19:06:00<SeP>2024-02-10 06:48:00<SeP>2024-02-11 18:30:00<SeP>2024-02-13 06:12:00<SeP>2024-02-14 17:54:00<SeP>2024-02-16 05:36:00<SeP>2024-02-17 17:18:00<SeP>2024-02-19 05:00:00<SeP>2024-02-20 16:42:00<SeP>2024-02-22 04:24:00<SeP>2024-02-23 16:06:00<SeP>2024-02-25 03:48:00<SeP>2024-02-26 15:30:00<SeP>2024-02-28 03:12:00<SeP>2024-02-29 14:54:00<SeP>2024-03-02 02:36:00<SeP>2024-03-03 14:18:00<SeP>2024-03-05 02:00:00<SeP>2024-03-06 13:42:00<SeP>2024-03-08 01:24:00<SeP>2024-03-09 13:06:00<SeP>2024-03-11 01:48:00<SeP>2024-03-12 13:30:00<SeP>2024-03-14 01:12:00<SeP>2024-03-15 12:54:00<SeP>2024-03-17 00:36:00<SeP>2024-03-18 12:18:00<SeP>2024-03-20 00:00:00<SeP>2024-03-21 11:42:00<SeP>2024-03-22 23:24:00<SeP>2024-03-24 11:06:00<SeP>2024-03-25 22:48:00<SeP>2024-03-27 10:30:00<SeP>2024-03-28 22:12:00<SeP>2024-03-30 09:54:00<SeP>2024-03-31 21:36:00<SeP>2024-04-02 09:18:00<SeP>2024-04-03 21:00:00<SeP>2024-04-05 08:42:00<SeP>2024-04-06 20:24:00<SeP>2024-04-08 08:06:00<SeP>2024-04-09 19:48:00<SeP>2024-04-11 07:30:00<SeP>2024-04-12 19:12:00<SeP>2024-04-14 06:54:00<SeP>2024-04-15 18:36:00<SeP>2024-04-17 06:18:00<SeP>2024-04-18 18:00:00<SeP>2024-04-20 05:42:00<SeP>2024-04-21 17:24:00<SeP>2024-04-23 05:06:00<SeP>2024-04-24 16:48:00<SeP>2024-04-26 04:30:00<SeP>2024-04-27 16:12:00<SeP>2024-04-29 03:54:00<SeP>2024-04-30 15:36:00<SeP>2024-05-02 03:18:00<SeP>2024-05-03 15:00:00<SeP>2024-05-05 02:42:00<SeP>2024-05-06 14:24:00<SeP>2024-05-08 02:06:00<SeP>2024-05-09 13:48:00<SeP>2024-05-11 01:30:00<SeP>2024-05-12 13:12:00<SeP>2024-05-14 00:54:00<SeP>2024-05-15 12:36:00<SeP>2024-05-17 00:18:00<SeP>2024-05-18 12:00:00<SeP>2024-05-19 23:42:00<SeP>2024-05-21 11:24:00<SeP>2024-05-22 23:06:00<SeP>2024-05-24 10:48:00<SeP>2024-05-25 22:30:00<SeP>2024-05-27 10:12:00<SeP>2024-05-28 21:54:00<SeP>2024-05-30 09:36:00<SeP>2024-05-31 21:18:00<SeP>2024-06-02 09:00:00<SeP>2024-06-03 20:42:00<SeP>2024-06-05 08:24:00<SeP>2024-06-06 20:06:00<SeP>2024-06-08 07:48:00<SeP>2024-06-09 19:30:00<SeP>2024-06-11 07:12:00<SeP>2024-06-12 18:54:00<SeP>2024-06-14 06:36:00<SeP>2024-06-15 18:18:00<SeP>2024-06-17 06:00:00<SeP>2024-06-18 17:42:00<SeP>2024-06-20 05:24:00<SeP>2024-06-21 17:06:00<SeP>2024-06-23 04:48:00<SeP>2024-06-24 16:30:00<SeP>2024-06-26 04:12:00<SeP>2024-06-27 15:54:00<SeP>2024-06-29 03:36:00<SeP>2024-06-30 15:18:00<SeP>2024-07-02 03:00:00<SeP>2024-07-03 14:42:00<SeP>2024-07-05 02:24:00<SeP>2024-07-06 14:06:00<SeP>2024-07-08 01:48:00<SeP>2024-07-09 13:30:00<SeP>2024-07-11 01:12:00<SeP>2024-07-12 12:54:00<SeP>2024-07-14 00:36:00<SeP>2024-07-15 12:18:00<SeP>2024-07-17 00:00:00<SeP>2024-07-18 11:42:00<SeP>2024-07-19 23:24:00<SeP>2024-07-21 11:06:00<SeP>2024-07-22 22:48:00<SeP>2024-07-24 10:30:00<SeP>2024-07-25 22:12:00<SeP>2024-07-27 09:54:00<SeP>2024-07-28 21:36:00<SeP>2024-07-30 09:18:00<SeP>2024-07-31 21:00:00<SeP>2024-08-02 08:42:00<SeP>2024-08-03 20:24:00<SeP>2024-08-05 08:06:00<SeP>2024-08-06 19:48:00<SeP>2024-08-08 07:30:00<SeP>2024-08-09 19:12:00<SeP>2024-08-11 06:54:00<SeP>2024-08-12 18:36:00<SeP>2024-08-14 06:18:00<SeP>2024-08-15 18:00:00<SeP>2024-08-17 05:42:00<SeP>2024-08-18 17:24:00<SeP>2024-08-20 05:06:00<SeP>2024-08-21 16:48:00<SeP>2024-08-23 04:30:00<SeP>2024-08-24 16:12:00<SeP>2024-08-26 03:54:00<SeP>2024-08-27 15:36:00<SeP>2024-08-29 03:18:00<SeP>2024-08-30 15:00:00<SeP>2024-09-01 02:42:00<SeP>2024-09-02 14:24:00<SeP>2024-09-04 02:06:00<SeP>2024-09-05 13:48:00<SeP>2024-09-07 01:30:00<SeP>2024-09-08 13:12:00<SeP>2024-09-10 00:54:00<SeP>2024-09-11 12:36:00<SeP>2024-09-13 00:18:00<SeP>2024-09-14 12:00:00<SeP>2024-09-15 23:42:00<SeP>2024-09-17 11:24:00<SeP>2024-09-18 23:06:00<SeP>2024-09-20 10:48:00<SeP>2024-09-21 22:30:00<SeP>2024-09-23 10:12:00<SeP>2024-09-24 21:54:00<SeP>2024-09-26 09:36:00<SeP>2024-09-27 21:18:00<SeP>2024-09-29 09:00:00<SeP>2024-09-30 20:42:00<SeP>2024-10-02 08:24:00<SeP>2024-10-03 20:06:00<SeP>2024-10-05 07:48:00<SeP>2024-10-06 19:30:00<SeP>2024-10-08 07:12:00<SeP>2024-10-09 18:54:00<SeP>2024-10-11 06:36:00<SeP>2024-10-12 18:18:00<SeP>2024-10-14 06:00:00<SeP>2024-10-15 17:42:00<SeP>2024-10-17 05:24:00<SeP>2024-10-18 17:06:00<SeP>2024-10-20 04:48:00<SeP>2024-10-21 16:30:00<SeP>2024-10-23 04:12:00<SeP>2024-10-24 15:54:00<SeP>2024-10-26 03:36:00<SeP>2024-10-27 15:18:00<SeP>2024-10-29 03:00:00<SeP>2024-10-30 14:42:00<SeP>2024-11-01 02:24:00<SeP>2024-11-02 14:06:00<SeP>2024-11-04 00:48:00<SeP>2024-11-05 12:30:00<SeP>2024-11-07 00:12:00<SeP>2024-11-08 11:54:00<SeP>2024-11-09 23:36:00<SeP>2024-11-11 11:18:00<SeP>2024-11-12 23:00:00<SeP>2024-11-14 10:42:00<SeP>2024-11-15 22:24:00<SeP>2024-11-17 10:06:00<SeP>2024-11-18 21:48:00<SeP>2024-11-20 09:30:00<SeP>2024-11-21 21:12:00<SeP>2024-11-23 08:54:00<SeP>2024-11-24 20:36:00<SeP>2024-11-26 08:18:00<SeP>2024-11-27 20:00:00<SeP>2024-11-29 07:42:00<SeP>2024-11-30 19:24:00<SeP>2024-12-02 07:06:00<SeP>2024-12-03 18:48:00<SeP>2024-12-05 06:30:00<SeP>2024-12-06 18:12:00<SeP>2024-12-08 05:54:00<SeP>2024-12-09 17:36:00<SeP>2024-12-11 05:18:00<SeP>2024-12-12 17:00:00<SeP>2024-12-14 04:42:00<SeP>2024-12-15 16:24:00<SeP>2024-12-17 04:06:00<SeP>2024-12-18 15:48:00<SeP>2024-12-20 03:30:00<SeP>2024-12-21 15:12:00<SeP>2024-12-23 02:54:00<SeP>2024-12-24 14:36:00<SeP>2024-12-26 02:18:00<SeP>2024-12-27 14:00:00<SeP>2024-12-29 01:42:00<SeP>2024-12-30 13:24:00<SeP>2025-01-01 01:06:00<SeP>2025-01-02 12:48:00<SeP>2025-01-04 00:30:00<SeP>2025-01-05 12:12:00<SeP>2025-01-06 23:54:00<SeP>2025-01-08 11:36:00<SeP>2025-01-09 23:18:00<SeP>2025-01-11 11:00:00<SeP>2025-01-12 22:42:00<SeP>2025-01-14 10:24:00<SeP>2025-01-15 22:06:00<SeP>2025-01-17 09:48:00<SeP>2025-01-18 21:30:00<SeP>2025-01-20 09:12:00<SeP>2025-01-21 20:54:00<SeP>2025-01-23 08:36:00<SeP>2025-01-24 20:18:00<SeP>2025-01-26 08:00:00<SeP>2025-01-27 19:42:00<SeP>2025-01-29 07:24:00<SeP>2025-01-30 19:06:00<SeP>2025-02-01 06:48:00<SeP>2025-02-02 18:30:00<SeP>2025-02-04 06:12:00<SeP>2025-02-05 17:54:00<SeP>2025-02-07 05:36:00<SeP>2025-02-08 17:18:00<SeP>2025-02-10 05:00:00<SeP>2025-02-11 16:42:00<SeP>2025-02-13 04:24:00<SeP>2025-02-14 16:06:00<SeP>2025-02-16 03:48:00<SeP>2025-02-17 15:30:00<SeP>2025-02-19 03:12:00<SeP>2025-02-20 14:54:00<SeP>2025-02-22 02:36:00<SeP>2025-02-23 14:18:00<SeP>2025-02-25 02:00:00<SeP>2025-02-26 13:42:00<SeP>2025-02-28 01:24:00<SeP>2025-03-01 13:06:00<SeP>2025-03-03 00:48:00<SeP>2025-03-04 12:30:00<SeP>2025-03-06 00:12:00<SeP>2025-03-07 11:54:00<SeP>2025-03-08 23:36:00<SeP>2025-03-10 12:18:00";
  const itemLabel       = "Ataques";
  const itemData        = "208<SeP>562<SeP>1404<SeP>651<SeP>225<SeP>236<SeP>7043<SeP>616<SeP>9364<SeP>563<SeP>403<SeP>1175<SeP>1253<SeP>242<SeP>316<SeP>302<SeP>198<SeP>732<SeP>334<SeP>8316<SeP>7409<SeP>6831<SeP>10056<SeP>855<SeP>297<SeP>405<SeP>174<SeP>383<SeP>5934<SeP>77<SeP>390<SeP>229<SeP>453<SeP>1376<SeP>10036<SeP>8774<SeP>10840<SeP>9598<SeP>6095<SeP>6252<SeP>8241<SeP>7913<SeP>10146<SeP>7893<SeP>7239<SeP>9092<SeP>9518<SeP>7669<SeP>7830<SeP>5522<SeP>11136<SeP>8249<SeP>7481<SeP>7469<SeP>10101<SeP>10647<SeP>20300<SeP>13730<SeP>9423<SeP>10291<SeP>6130<SeP>9521<SeP>7385<SeP>9554<SeP>9250<SeP>5826<SeP>6427<SeP>7399<SeP>6577<SeP>2913<SeP>6448<SeP>6035<SeP>6316<SeP>6851<SeP>7403<SeP>4348<SeP>5623<SeP>7579<SeP>4745<SeP>6834<SeP>5311<SeP>5300<SeP>7125<SeP>5498<SeP>5934<SeP>5645<SeP>10524<SeP>20687<SeP>35943<SeP>8017<SeP>9397<SeP>5390<SeP>6922<SeP>12791<SeP>6211<SeP>6197<SeP>3991<SeP>4849<SeP>6039<SeP>5247<SeP>9308<SeP>5087<SeP>6824<SeP>5026<SeP>5429<SeP>9508<SeP>7462<SeP>8030<SeP>5658<SeP>4674<SeP>11089<SeP>9011<SeP>4893<SeP>3292<SeP>6483<SeP>9397<SeP>5054<SeP>7504<SeP>9204<SeP>4167<SeP>3059<SeP>1061<SeP>1728<SeP>1822<SeP>2515<SeP>832<SeP>1317<SeP>848<SeP>1488<SeP>1346<SeP>1086<SeP>1198<SeP>797<SeP>1175<SeP>1106<SeP>1201<SeP>1457<SeP>1053<SeP>1823<SeP>2126<SeP>4178<SeP>11023<SeP>8340<SeP>7488<SeP>7836<SeP>11211<SeP>4464<SeP>8889<SeP>12419<SeP>9852<SeP>12577<SeP>9113<SeP>11452<SeP>11336<SeP>8728<SeP>13381<SeP>5143<SeP>4956<SeP>6971<SeP>23832<SeP>7797<SeP>8395<SeP>7960<SeP>17689<SeP>8930<SeP>7561<SeP>6312<SeP>7455<SeP>6798<SeP>26507<SeP>8245<SeP>10656<SeP>6074<SeP>6999<SeP>5580<SeP>10301<SeP>11255<SeP>5753<SeP>14861<SeP>7524<SeP>8370<SeP>7096<SeP>5432<SeP>3585<SeP>7619<SeP>7279<SeP>6018<SeP>5054<SeP>9238<SeP>17859<SeP>6932<SeP>9572<SeP>5067<SeP>7611<SeP>9294<SeP>8809<SeP>5841<SeP>2910<SeP>7655<SeP>2788<SeP>5266<SeP>4109<SeP>672<SeP>113<SeP>642<SeP>218<SeP>667<SeP>1000<SeP>376<SeP>617<SeP>1279<SeP>1201<SeP>3177<SeP>22938<SeP>579<SeP>3496<SeP>3720<SeP>2924<SeP>7225<SeP>3189<SeP>4228<SeP>2882<SeP>3596<SeP>3010<SeP>3318<SeP>4159<SeP>2416<SeP>2338<SeP>3429<SeP>1917<SeP>2022<SeP>2065<SeP>1238<SeP>1913<SeP>797<SeP>927<SeP>1779<SeP>26749<SeP>1485<SeP>3876<SeP>3223<SeP>3095<SeP>3263<SeP>3173<SeP>1964<SeP>3269<SeP>2801<SeP>3364<SeP>2715<SeP>2608<SeP>3720<SeP>3871<SeP>5883<SeP>5160<SeP>4600<SeP>2687<SeP>2887<SeP>4646<SeP>3701<SeP>9940<SeP>5404<SeP>3378<SeP>2784<SeP>2403<SeP>5027<SeP>3488<SeP>3301<SeP>3085<SeP>2968<SeP>5953<SeP>3428<SeP>6181<SeP>3671<SeP>5648<SeP>5815<SeP>5549<SeP>4811<SeP>22547<SeP>4523<SeP>12472<SeP>1931<SeP>2615<SeP>4688<SeP>3664<SeP>4931<SeP>3134<SeP>5224<SeP>4802<SeP>4568<SeP>3479<SeP>4029<SeP>2129<SeP>1450<SeP>2225<SeP>3944<SeP>2346<SeP>3132<SeP>3399<SeP>4761<SeP>3681<SeP>3526<SeP>4150<SeP>3570<SeP>3223<SeP>6373<SeP>8032<SeP>5916<SeP>4731<SeP>4802<SeP>4581<SeP>3827<SeP>4004<SeP>4181<SeP>6722<SeP>5086<SeP>5305<SeP>2184<SeP>753<SeP>1563<SeP>1774<SeP>1130<SeP>1087<SeP>2095<SeP>1129<SeP>1897<SeP>4175<SeP>5370<SeP>6019<SeP>34024<SeP>5310<SeP>8175<SeP>20488<SeP>5484<SeP>5003<SeP>6180<SeP>3992<SeP>24903<SeP>5849<SeP>4731<SeP>4705<SeP>6034<SeP>19188<SeP>16419<SeP>4424<SeP>3226<SeP>4577<SeP>5740<SeP>5152<SeP>2837<SeP>3467<SeP>4384<SeP>5231<SeP>5358<SeP>17933<SeP>5034<SeP>6240<SeP>5953<SeP>1765<SeP>3125<SeP>4322<SeP>4827<SeP>3841<SeP>3607<SeP>3214<SeP>3373<SeP>3570<SeP>3655<SeP>6720<SeP>8932<SeP>10429<SeP>8604<SeP>8813<SeP>7671<SeP>7095<SeP>5128<SeP>4859<SeP>12240<SeP>17181<SeP>3272<SeP>4730<SeP>3269<SeP>11199<SeP>5800<SeP>3891<SeP>5014<SeP>4032<SeP>3068<SeP>9421<SeP>9548<SeP>4793<SeP>3393<SeP>3308<SeP>2366<SeP>2578<SeP>2529<SeP>2029<SeP>2607<SeP>1783<SeP>2668<SeP>2788";
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
  const itemData    = "699667<SeP>368430<SeP>207326<SeP>181428<SeP>111147<SeP>88581<SeP>84284<SeP>81630<SeP>68398<SeP>68354";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "300443<SeP>41451<SeP>41193<SeP>36895<SeP>14731<SeP>11335<SeP>8568<SeP>8106<SeP>7253<SeP>7252";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "399224<SeP>331535<SeP>204190<SeP>140235<SeP>96416<SeP>81565<SeP>81329<SeP>70295<SeP>60248<SeP>59075";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>9829<SeP>58224";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "365164<SeP>259557<SeP>238758<SeP>144195<SeP>67832<SeP>60197<SeP>57259<SeP>53570<SeP>36664<SeP>36157";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>0<SeP>14061<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "158371<SeP>53934<SeP>35054<SeP>32996<SeP>21945<SeP>13579<SeP>12921<SeP>11004<SeP>7614<SeP>7518";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Atacks";
  const itemData    = "352243<SeP>258790<SeP>122250<SeP>80387<SeP>56231<SeP>49193<SeP>47405<SeP>30691<SeP>29324<SeP>26887";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "699667<SeP>368430<SeP>207326<SeP>181428<SeP>111147<SeP>88581<SeP>84284<SeP>81630<SeP>68398<SeP>68354";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "300443<SeP>41451<SeP>41193<SeP>36895<SeP>14731<SeP>11335<SeP>8568<SeP>8106<SeP>7253<SeP>7252";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "399224<SeP>331535<SeP>204190<SeP>140235<SeP>96416<SeP>81565<SeP>81329<SeP>70295<SeP>60248<SeP>59075";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>9829<SeP>58224";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "365164<SeP>259557<SeP>238758<SeP>144195<SeP>67832<SeP>60197<SeP>57259<SeP>53570<SeP>36664<SeP>36157";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>0<SeP>14061<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "158371<SeP>53934<SeP>35054<SeP>32996<SeP>21945<SeP>13579<SeP>12921<SeP>11004<SeP>7614<SeP>7518";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Ataques";
  const itemData    = "352243<SeP>258790<SeP>122250<SeP>80387<SeP>56231<SeP>49193<SeP>47405<SeP>30691<SeP>29324<SeP>26887";
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
