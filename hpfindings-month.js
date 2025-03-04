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
  document.getElementById("last-updated").innerHTML = "2025-3-4";
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
  const metricData    = "150864";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "32623";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "118241";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8708";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "66470";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "51771";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4270";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "7338";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "44433";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3252";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "150864";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "32623";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "118241";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8708";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "66470";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "51771";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4270";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "7338";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "44433";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3252";
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
  const incomingData = "150864<SeP>32623<SeP>118241<SeP>8708";
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
  const incomingData = "118241<SeP>66470<SeP>51771<SeP>4270";
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
  const incomingData = "51771<SeP>7338<SeP>44433<SeP>3252";
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
  const incomingData = "7290<SeP>6597<SeP>693";
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
  const incomingData = "103<SeP>9<SeP>94<SeP>12";
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
  const incomingData = "150864<SeP>32623<SeP>118241<SeP>8708";
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
  const incomingData = "118241<SeP>66470<SeP>51771<SeP>4270";
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
  const incomingData = "51771<SeP>7338<SeP>44433<SeP>3252";
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
  const incomingData = "7290<SeP>6597<SeP>693";
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
  const incomingData = "103<SeP>9<SeP>94<SeP>12";
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
  const column1Data  = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>46.8.237.53</span>)<SeP>IP05 (<span class=blur>80.94.95.112</span>)<SeP>IP06 (<span class=blur>37.44.238.88</span>)<SeP>IP07 (<span class=blur>2.57.122.193</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>38.12.5.41</span>)<SeP>IP10 (<span class=blur>64.23.130.251</span>)";
  const column2Data  = "AS38264<SeP>AS44486<SeP>AS207566<SeP>AS56971<SeP>AS204428<SeP>AS34534<SeP>AS47890<SeP>AS207566<SeP>AS400619<SeP>AS14061";
  const column3Data  = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States";
  const column4Data  = "21294<SeP>6226<SeP>1318<SeP>877<SeP>867<SeP>819<SeP>799<SeP>652<SeP>604<SeP>528";
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
  const column1Data  = "IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP12 (<span class=blur>218.92.0.230</span>)<SeP>IP13 (<span class=blur>218.92.0.114</span>)<SeP>IP14 (<span class=blur>218.92.0.216</span>)<SeP>IP16 (<span class=blur>218.92.0.217</span>)<SeP>IP15 (<span class=blur>218.92.0.220</span>)<SeP>IP17 (<span class=blur>218.92.0.226</span>)<SeP>IP19 (<span class=blur>218.92.0.229</span>)<SeP>IP18 (<span class=blur>218.92.0.233</span>)";
  const column2Data  = "AS207566<SeP>AS207566<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data  = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "659<SeP>652<SeP>358<SeP>351<SeP>349<SeP>338<SeP>338<SeP>333<SeP>330<SeP>330";
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
  const column1Data  = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP05 (<span class=blur>80.94.95.112</span>)<SeP>IP04 (<span class=blur>46.8.237.53</span>)<SeP>IP06 (<span class=blur>37.44.238.88</span>)<SeP>IP07 (<span class=blur>2.57.122.193</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP09 (<span class=blur>38.12.5.41</span>)<SeP>IP10 (<span class=blur>64.23.130.251</span>)<SeP>IP11 (<span class=blur>95.182.115.45</span>)";
  const column2Data  = "AS38264<SeP>AS44486<SeP>AS204428<SeP>AS56971<SeP>AS34534<SeP>AS47890<SeP>AS207566<SeP>AS400619<SeP>AS14061<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  const column4Data  = "21293<SeP>6225<SeP>867<SeP>867<SeP>802<SeP>796<SeP>659<SeP>602<SeP>527<SeP>430";
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
  const column1Data   = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>46.8.237.53</span>)<SeP>IP05 (<span class=blur>80.94.95.112</span>)<SeP>IP06 (<span class=blur>37.44.238.88</span>)<SeP>IP07 (<span class=blur>2.57.122.193</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>38.12.5.41</span>)<SeP>IP10 (<span class=blur>64.23.130.251</span>)";
  const column2Data   = "AS38264<SeP>AS44486<SeP>AS207566<SeP>AS56971<SeP>AS204428<SeP>AS34534<SeP>AS47890<SeP>AS207566<SeP>AS400619<SeP>AS14061";
  const column3Data   = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "21294<SeP>6226<SeP>1318<SeP>877<SeP>867<SeP>819<SeP>799<SeP>652<SeP>604<SeP>528";
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
  const column1Data   = "IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP12 (<span class=blur>218.92.0.230</span>)<SeP>IP13 (<span class=blur>218.92.0.114</span>)<SeP>IP14 (<span class=blur>218.92.0.216</span>)<SeP>IP16 (<span class=blur>218.92.0.217</span>)<SeP>IP15 (<span class=blur>218.92.0.220</span>)<SeP>IP17 (<span class=blur>218.92.0.226</span>)<SeP>IP19 (<span class=blur>218.92.0.229</span>)<SeP>IP18 (<span class=blur>218.92.0.233</span>)";
  const column2Data   = "AS207566<SeP>AS207566<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data   = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "659<SeP>652<SeP>358<SeP>351<SeP>349<SeP>338<SeP>338<SeP>333<SeP>330<SeP>330";
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
  const column1Data   = "IP01 (<span class=blur>110.39.172.238</span>)<SeP>IP02 (<span class=blur>45.82.121.247</span>)<SeP>IP05 (<span class=blur>80.94.95.112</span>)<SeP>IP04 (<span class=blur>46.8.237.53</span>)<SeP>IP06 (<span class=blur>37.44.238.88</span>)<SeP>IP07 (<span class=blur>2.57.122.193</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP09 (<span class=blur>38.12.5.41</span>)<SeP>IP10 (<span class=blur>64.23.130.251</span>)<SeP>IP11 (<span class=blur>95.182.115.45</span>)";
  const column2Data   = "AS38264<SeP>AS44486<SeP>AS204428<SeP>AS56971<SeP>AS34534<SeP>AS47890<SeP>AS207566<SeP>AS400619<SeP>AS14061<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-pk\u0022></span>\u00a0Pakistan<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "21293<SeP>6225<SeP>867<SeP>867<SeP>802<SeP>796<SeP>659<SeP>602<SeP>527<SeP>430";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>admin 3245gs5662d34<SeP>root  <SeP>admin hp.com<SeP>root epon<SeP>admin adminHW<SeP>admin a1sev5y7c39k<SeP>root realtek";
  const column3Data   = "5327<SeP>4835<SeP>1158<SeP>457<SeP>273<SeP>219<SeP>215<SeP>212<SeP>208<SeP>198";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73";
  const column2Data  = "5539<SeP>822<SeP>197<SeP>26<SeP>26<SeP>15<SeP>15<SeP>15<SeP>15<SeP>13";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  const column4Data  = "malicious<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>malicious";
  const listLocale   = "en-US";

  column3Data = column3Data.replace(/redir/g, "redirection");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsEnglish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Malware Distribution Site";
  const column2Label = "Count";
  const column1Data  = "http://37.44.238.88<SeP>http://194.85.251.8<SeP>http://193.143.1.7<SeP>http://66.63.187.69<SeP>http://37.44.238.92<SeP>http://83.23.27.238<SeP>tftp://199.195.248.181<SeP>http://91.224.92.19<SeP>http://83.23.65.68<SeP>http://61.7.209.115";
  const column2Data  = "96<SeP>15<SeP>9<SeP>8<SeP>5<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "117099<SeP>33765";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>admin 3245gs5662d34<SeP>root  <SeP>admin hp.com<SeP>root epon<SeP>admin adminHW<SeP>admin a1sev5y7c39k<SeP>root realtek";
  const column3Data   = "5327<SeP>4835<SeP>1158<SeP>457<SeP>273<SeP>219<SeP>215<SeP>212<SeP>208<SeP>198";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73";
  const column2Data  = "5539<SeP>822<SeP>197<SeP>26<SeP>26<SeP>15<SeP>15<SeP>15<SeP>15<SeP>13";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  let   column4Data  = "malicious<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>malicious";
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
  const column1Data  = "http://37.44.238.88<SeP>http://194.85.251.8<SeP>http://193.143.1.7<SeP>http://66.63.187.69<SeP>http://37.44.238.92<SeP>http://83.23.27.238<SeP>tftp://199.195.248.181<SeP>http://91.224.92.19<SeP>http://83.23.65.68<SeP>http://61.7.209.115";
  const column2Data  = "96<SeP>15<SeP>9<SeP>8<SeP>5<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "117099<SeP>33765";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-4";

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
        "name": "traffic between 2025-02-02 and 2025-03-03"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          21294,50
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
        "name": "scans between 2025-02-02 and 2025-03-03"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          13287,32,
          21294,50
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
        "name": "attacks between 2025-02-02 and 2025-03-03"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          21293,50,
          21294,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-4";

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
        "name": "tráfico entre 2025-02-02 y 2025-03-03"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          21294,50
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
        "name": "escaneos entre 2025-02-02 y 2025-03-03"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          13287,32,
          21294,50
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
        "name": "ataques entre 2025-02-02 y 2025-03-03"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          21293,50,
          21294,50
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
  const labelsData       = "2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00<SeP>2025-02-17 00:00:00<SeP>2025-02-17 01:48:00<SeP>2025-02-17 03:36:00<SeP>2025-02-17 05:24:00<SeP>2025-02-17 07:12:00<SeP>2025-02-17 09:00:00<SeP>2025-02-17 10:48:00<SeP>2025-02-17 12:36:00<SeP>2025-02-17 14:24:00<SeP>2025-02-17 16:12:00<SeP>2025-02-17 18:00:00<SeP>2025-02-17 19:48:00<SeP>2025-02-17 21:36:00<SeP>2025-02-17 23:24:00<SeP>2025-02-18 01:12:00<SeP>2025-02-18 03:00:00<SeP>2025-02-18 04:48:00<SeP>2025-02-18 06:36:00<SeP>2025-02-18 08:24:00<SeP>2025-02-18 10:12:00<SeP>2025-02-18 12:00:00<SeP>2025-02-18 13:48:00<SeP>2025-02-18 15:36:00<SeP>2025-02-18 17:24:00<SeP>2025-02-18 19:12:00<SeP>2025-02-18 21:00:00<SeP>2025-02-18 22:48:00<SeP>2025-02-19 00:36:00<SeP>2025-02-19 02:24:00<SeP>2025-02-19 04:12:00<SeP>2025-02-19 06:00:00<SeP>2025-02-19 07:48:00<SeP>2025-02-19 09:36:00<SeP>2025-02-19 11:24:00<SeP>2025-02-19 13:12:00<SeP>2025-02-19 15:00:00<SeP>2025-02-19 16:48:00<SeP>2025-02-19 18:36:00<SeP>2025-02-19 20:24:00<SeP>2025-02-19 22:12:00<SeP>2025-02-20 00:00:00<SeP>2025-02-20 01:48:00<SeP>2025-02-20 03:36:00<SeP>2025-02-20 05:24:00<SeP>2025-02-20 07:12:00<SeP>2025-02-20 09:00:00<SeP>2025-02-20 10:48:00<SeP>2025-02-20 12:36:00<SeP>2025-02-20 14:24:00<SeP>2025-02-20 16:12:00<SeP>2025-02-20 18:00:00<SeP>2025-02-20 19:48:00<SeP>2025-02-20 21:36:00<SeP>2025-02-20 23:24:00<SeP>2025-02-21 01:12:00<SeP>2025-02-21 03:00:00<SeP>2025-02-21 04:48:00<SeP>2025-02-21 06:36:00<SeP>2025-02-21 08:24:00<SeP>2025-02-21 10:12:00<SeP>2025-02-21 12:00:00<SeP>2025-02-21 13:48:00<SeP>2025-02-21 15:36:00<SeP>2025-02-21 17:24:00<SeP>2025-02-21 19:12:00<SeP>2025-02-21 21:00:00<SeP>2025-02-21 22:48:00<SeP>2025-02-22 00:36:00<SeP>2025-02-22 02:24:00<SeP>2025-02-22 04:12:00<SeP>2025-02-22 06:00:00<SeP>2025-02-22 07:48:00<SeP>2025-02-22 09:36:00<SeP>2025-02-22 11:24:00<SeP>2025-02-22 13:12:00<SeP>2025-02-22 15:00:00<SeP>2025-02-22 16:48:00<SeP>2025-02-22 18:36:00<SeP>2025-02-22 20:24:00<SeP>2025-02-22 22:12:00<SeP>2025-02-23 00:00:00<SeP>2025-02-23 01:48:00<SeP>2025-02-23 03:36:00<SeP>2025-02-23 05:24:00<SeP>2025-02-23 07:12:00<SeP>2025-02-23 09:00:00<SeP>2025-02-23 10:48:00<SeP>2025-02-23 12:36:00<SeP>2025-02-23 14:24:00<SeP>2025-02-23 16:12:00<SeP>2025-02-23 18:00:00<SeP>2025-02-23 19:48:00<SeP>2025-02-23 21:36:00<SeP>2025-02-23 23:24:00<SeP>2025-02-24 01:12:00<SeP>2025-02-24 03:00:00<SeP>2025-02-24 04:48:00<SeP>2025-02-24 06:36:00<SeP>2025-02-24 08:24:00<SeP>2025-02-24 10:12:00<SeP>2025-02-24 12:00:00<SeP>2025-02-24 13:48:00<SeP>2025-02-24 15:36:00<SeP>2025-02-24 17:24:00<SeP>2025-02-24 19:12:00<SeP>2025-02-24 21:00:00<SeP>2025-02-24 22:48:00<SeP>2025-02-25 00:36:00<SeP>2025-02-25 02:24:00<SeP>2025-02-25 04:12:00<SeP>2025-02-25 06:00:00<SeP>2025-02-25 07:48:00<SeP>2025-02-25 09:36:00<SeP>2025-02-25 11:24:00<SeP>2025-02-25 13:12:00<SeP>2025-02-25 15:00:00<SeP>2025-02-25 16:48:00<SeP>2025-02-25 18:36:00<SeP>2025-02-25 20:24:00<SeP>2025-02-25 22:12:00<SeP>2025-02-26 00:00:00<SeP>2025-02-26 01:48:00<SeP>2025-02-26 03:36:00<SeP>2025-02-26 05:24:00<SeP>2025-02-26 07:12:00<SeP>2025-02-26 09:00:00<SeP>2025-02-26 10:48:00<SeP>2025-02-26 12:36:00<SeP>2025-02-26 14:24:00<SeP>2025-02-26 16:12:00<SeP>2025-02-26 18:00:00<SeP>2025-02-26 19:48:00<SeP>2025-02-26 21:36:00<SeP>2025-02-26 23:24:00<SeP>2025-02-27 01:12:00<SeP>2025-02-27 03:00:00<SeP>2025-02-27 04:48:00<SeP>2025-02-27 06:36:00<SeP>2025-02-27 08:24:00<SeP>2025-02-27 10:12:00<SeP>2025-02-27 12:00:00<SeP>2025-02-27 13:48:00<SeP>2025-02-27 15:36:00<SeP>2025-02-27 17:24:00<SeP>2025-02-27 19:12:00<SeP>2025-02-27 21:00:00<SeP>2025-02-27 22:48:00<SeP>2025-02-28 00:36:00<SeP>2025-02-28 02:24:00<SeP>2025-02-28 04:12:00<SeP>2025-02-28 06:00:00<SeP>2025-02-28 07:48:00<SeP>2025-02-28 09:36:00<SeP>2025-02-28 11:24:00<SeP>2025-02-28 13:12:00<SeP>2025-02-28 15:00:00<SeP>2025-02-28 16:48:00<SeP>2025-02-28 18:36:00<SeP>2025-02-28 20:24:00<SeP>2025-02-28 22:12:00<SeP>2025-03-01 00:00:00<SeP>2025-03-01 01:48:00<SeP>2025-03-01 03:36:00<SeP>2025-03-01 05:24:00<SeP>2025-03-01 07:12:00<SeP>2025-03-01 09:00:00<SeP>2025-03-01 10:48:00<SeP>2025-03-01 12:36:00<SeP>2025-03-01 14:24:00<SeP>2025-03-01 16:12:00<SeP>2025-03-01 18:00:00<SeP>2025-03-01 19:48:00<SeP>2025-03-01 21:36:00<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:12:00<SeP>2025-03-02 03:00:00<SeP>2025-03-02 04:48:00<SeP>2025-03-02 06:36:00<SeP>2025-03-02 08:24:00<SeP>2025-03-02 10:12:00<SeP>2025-03-02 12:00:00<SeP>2025-03-02 13:48:00<SeP>2025-03-02 15:36:00<SeP>2025-03-02 17:24:00<SeP>2025-03-02 19:12:00<SeP>2025-03-02 21:00:00<SeP>2025-03-02 22:48:00<SeP>2025-03-03 00:36:00<SeP>2025-03-03 02:24:00<SeP>2025-03-03 04:12:00<SeP>2025-03-03 06:00:00<SeP>2025-03-03 07:48:00<SeP>2025-03-03 09:36:00<SeP>2025-03-03 11:24:00<SeP>2025-03-03 13:12:00<SeP>2025-03-03 15:00:00<SeP>2025-03-03 16:48:00<SeP>2025-03-03 18:36:00<SeP>2025-03-03 20:24:00<SeP>2025-03-03 22:12:00";
  const item1Label       = "Scans";
  const item1Data        = "75<SeP>36<SeP>30<SeP>44<SeP>85<SeP>152<SeP>94<SeP>71<SeP>89<SeP>82<SeP>74<SeP>55<SeP>64<SeP>111<SeP>42<SeP>57<SeP>81<SeP>202<SeP>129<SeP>71<SeP>104<SeP>56<SeP>82<SeP>46<SeP>90<SeP>53<SeP>113<SeP>86<SeP>62<SeP>29<SeP>117<SeP>99<SeP>160<SeP>113<SeP>59<SeP>77<SeP>86<SeP>90<SeP>97<SeP>59<SeP>38<SeP>28<SeP>28<SeP>39<SeP>46<SeP>112<SeP>134<SeP>78<SeP>267<SeP>66<SeP>59<SeP>138<SeP>56<SeP>82<SeP>58<SeP>66<SeP>0<SeP>0<SeP>0<SeP>0<SeP>39<SeP>126<SeP>51<SeP>15<SeP>56<SeP>25<SeP>37<SeP>86<SeP>86<SeP>86<SeP>71<SeP>53<SeP>83<SeP>52<SeP>97<SeP>14<SeP>18<SeP>47<SeP>43<SeP>94<SeP>88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>95<SeP>82<SeP>28<SeP>60<SeP>64<SeP>46<SeP>82<SeP>46<SeP>149<SeP>215<SeP>114<SeP>85<SeP>151<SeP>68<SeP>96<SeP>95<SeP>136<SeP>165<SeP>87<SeP>98<SeP>60<SeP>68<SeP>105<SeP>84<SeP>68<SeP>99<SeP>78<SeP>87<SeP>71<SeP>85<SeP>68<SeP>79<SeP>143<SeP>68<SeP>39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>122<SeP>90<SeP>151<SeP>93<SeP>34<SeP>113<SeP>71<SeP>67<SeP>118<SeP>54<SeP>85<SeP>51<SeP>80<SeP>66<SeP>59<SeP>109<SeP>186<SeP>47<SeP>100<SeP>104<SeP>115<SeP>102<SeP>51<SeP>84<SeP>65<SeP>173<SeP>63<SeP>106<SeP>69<SeP>71<SeP>97<SeP>77<SeP>73<SeP>91<SeP>81<SeP>146<SeP>118<SeP>183<SeP>51<SeP>63<SeP>57<SeP>88<SeP>42<SeP>100<SeP>91<SeP>92<SeP>74<SeP>73<SeP>114<SeP>198<SeP>134<SeP>104<SeP>77<SeP>20<SeP>43<SeP>90<SeP>91<SeP>106<SeP>76<SeP>52<SeP>75<SeP>55<SeP>121<SeP>90<SeP>50<SeP>85<SeP>68<SeP>89<SeP>40<SeP>150<SeP>90<SeP>114<SeP>80<SeP>60<SeP>53<SeP>74<SeP>89<SeP>89<SeP>77<SeP>82<SeP>29<SeP>27<SeP>50<SeP>170<SeP>63<SeP>73<SeP>155<SeP>33<SeP>106<SeP>79<SeP>152<SeP>72<SeP>97<SeP>59<SeP>74<SeP>32<SeP>87<SeP>69<SeP>50<SeP>45<SeP>104<SeP>92<SeP>158<SeP>112<SeP>84<SeP>65<SeP>42<SeP>67<SeP>77<SeP>51<SeP>82<SeP>98<SeP>89<SeP>81<SeP>90<SeP>84<SeP>57<SeP>114<SeP>111<SeP>81<SeP>46<SeP>40<SeP>48<SeP>83<SeP>87<SeP>101<SeP>61<SeP>142<SeP>93<SeP>69<SeP>87<SeP>70<SeP>49<SeP>94<SeP>72<SeP>77<SeP>85<SeP>121<SeP>57<SeP>88<SeP>96<SeP>130<SeP>76<SeP>61<SeP>35<SeP>48<SeP>65<SeP>91<SeP>53<SeP>67<SeP>96<SeP>68<SeP>47<SeP>96<SeP>151<SeP>84<SeP>50<SeP>31<SeP>33<SeP>69<SeP>196<SeP>112<SeP>79<SeP>56<SeP>69<SeP>123<SeP>50<SeP>81<SeP>92<SeP>174<SeP>93<SeP>59<SeP>39<SeP>154<SeP>58<SeP>75<SeP>80<SeP>105<SeP>106<SeP>90<SeP>93<SeP>90<SeP>56<SeP>81<SeP>98<SeP>53<SeP>88<SeP>95<SeP>86<SeP>117<SeP>82<SeP>86<SeP>89<SeP>123<SeP>72<SeP>138<SeP>78<SeP>44<SeP>72<SeP>179<SeP>93<SeP>154<SeP>100<SeP>94<SeP>109<SeP>48<SeP>75<SeP>93<SeP>89<SeP>52<SeP>87<SeP>39<SeP>74<SeP>67<SeP>55<SeP>55<SeP>115<SeP>68<SeP>98<SeP>110<SeP>58<SeP>89<SeP>57<SeP>48<SeP>81<SeP>59<SeP>53<SeP>55<SeP>53<SeP>98<SeP>76<SeP>73<SeP>87<SeP>76<SeP>46<SeP>31<SeP>207<SeP>68<SeP>81<SeP>67<SeP>64<SeP>66<SeP>113<SeP>46<SeP>39<SeP>55<SeP>183<SeP>83<SeP>67<SeP>26<SeP>81<SeP>69<SeP>44<SeP>41<SeP>60<SeP>164<SeP>67<SeP>58<SeP>121<SeP>64<SeP>38<SeP>70<SeP>17<SeP>48<SeP>45<SeP>28<SeP>98<SeP>60<SeP>71<SeP>69<SeP>78<SeP>263";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "309<SeP>244<SeP>308<SeP>207<SeP>363<SeP>177<SeP>185<SeP>194<SeP>437<SeP>184<SeP>88<SeP>182<SeP>306<SeP>372<SeP>596<SeP>94<SeP>251<SeP>64<SeP>164<SeP>150<SeP>790<SeP>190<SeP>370<SeP>136<SeP>122<SeP>140<SeP>223<SeP>112<SeP>262<SeP>219<SeP>87<SeP>296<SeP>279<SeP>198<SeP>110<SeP>200<SeP>243<SeP>75<SeP>77<SeP>190<SeP>196<SeP>412<SeP>305<SeP>138<SeP>711<SeP>197<SeP>1070<SeP>2489<SeP>2717<SeP>2444<SeP>2263<SeP>2519<SeP>2680<SeP>2715<SeP>2548<SeP>2587<SeP>0<SeP>0<SeP>0<SeP>0<SeP>122<SeP>164<SeP>212<SeP>260<SeP>403<SeP>143<SeP>146<SeP>101<SeP>110<SeP>89<SeP>233<SeP>41<SeP>157<SeP>183<SeP>423<SeP>27<SeP>127<SeP>397<SeP>35<SeP>423<SeP>133<SeP>86<SeP>281<SeP>76<SeP>22<SeP>269<SeP>141<SeP>167<SeP>28<SeP>38<SeP>122<SeP>141<SeP>316<SeP>130<SeP>156<SeP>175<SeP>124<SeP>173<SeP>190<SeP>342<SeP>259<SeP>431<SeP>249<SeP>489<SeP>329<SeP>351<SeP>167<SeP>204<SeP>309<SeP>227<SeP>145<SeP>136<SeP>58<SeP>30<SeP>94<SeP>173<SeP>222<SeP>169<SeP>37<SeP>85<SeP>229<SeP>170<SeP>332<SeP>82<SeP>225<SeP>186<SeP>119<SeP>47<SeP>505<SeP>109<SeP>311<SeP>66<SeP>108<SeP>358<SeP>324<SeP>388<SeP>2824<SeP>3323<SeP>853<SeP>349<SeP>231<SeP>278<SeP>682<SeP>151<SeP>384<SeP>124<SeP>10<SeP>68<SeP>158<SeP>510<SeP>78<SeP>274<SeP>199<SeP>191<SeP>161<SeP>852<SeP>371<SeP>433<SeP>177<SeP>260<SeP>168<SeP>206<SeP>245<SeP>465<SeP>202<SeP>475<SeP>64<SeP>321<SeP>334<SeP>178<SeP>384<SeP>173<SeP>160<SeP>66<SeP>226<SeP>95<SeP>323<SeP>588<SeP>107<SeP>173<SeP>203<SeP>186<SeP>48<SeP>84<SeP>317<SeP>210<SeP>138<SeP>123<SeP>74<SeP>23<SeP>353<SeP>237<SeP>193<SeP>116<SeP>293<SeP>292<SeP>94<SeP>556<SeP>297<SeP>254<SeP>262<SeP>289<SeP>223<SeP>208<SeP>346<SeP>362<SeP>209<SeP>329<SeP>81<SeP>93<SeP>268<SeP>339<SeP>75<SeP>227<SeP>527<SeP>79<SeP>96<SeP>392<SeP>65<SeP>195<SeP>248<SeP>270<SeP>248<SeP>188<SeP>276<SeP>57<SeP>191<SeP>100<SeP>133<SeP>542<SeP>129<SeP>37<SeP>120<SeP>86<SeP>11<SeP>100<SeP>263<SeP>249<SeP>188<SeP>248<SeP>177<SeP>231<SeP>93<SeP>96<SeP>159<SeP>34<SeP>8<SeP>218<SeP>218<SeP>150<SeP>415<SeP>771<SeP>375<SeP>340<SeP>672<SeP>415<SeP>443<SeP>189<SeP>507<SeP>448<SeP>352<SeP>448<SeP>347<SeP>930<SeP>646<SeP>977<SeP>451<SeP>316<SeP>262<SeP>303<SeP>300<SeP>713<SeP>522<SeP>607<SeP>475<SeP>352<SeP>337<SeP>535<SeP>638<SeP>785<SeP>291<SeP>460<SeP>468<SeP>763<SeP>197<SeP>328<SeP>471<SeP>817<SeP>542<SeP>551<SeP>349<SeP>88<SeP>110<SeP>320<SeP>115<SeP>172<SeP>542<SeP>61<SeP>75<SeP>394<SeP>68<SeP>97<SeP>49<SeP>387<SeP>204<SeP>211<SeP>190<SeP>320<SeP>303<SeP>69<SeP>227<SeP>138<SeP>344<SeP>268<SeP>327<SeP>130<SeP>206<SeP>52<SeP>140<SeP>74<SeP>168<SeP>35<SeP>157<SeP>257<SeP>61<SeP>164<SeP>127<SeP>82<SeP>73<SeP>66<SeP>50<SeP>320<SeP>215<SeP>333<SeP>47<SeP>272<SeP>169<SeP>466<SeP>137<SeP>114<SeP>192<SeP>229<SeP>147<SeP>30<SeP>48<SeP>144<SeP>127<SeP>250<SeP>96<SeP>208<SeP>248<SeP>100<SeP>388<SeP>75<SeP>357<SeP>66<SeP>70<SeP>50<SeP>37<SeP>146<SeP>32<SeP>26<SeP>81<SeP>41<SeP>83<SeP>79<SeP>22<SeP>110<SeP>174<SeP>129<SeP>68<SeP>105<SeP>172<SeP>175<SeP>431<SeP>83<SeP>62<SeP>310<SeP>16<SeP>24<SeP>62<SeP>220<SeP>25<SeP>84<SeP>60<SeP>179<SeP>96<SeP>66<SeP>298<SeP>82<SeP>54<SeP>76<SeP>45<SeP>31<SeP>406<SeP>134<SeP>82<SeP>52<SeP>106<SeP>218";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00<SeP>2025-02-17 00:00:00<SeP>2025-02-17 01:48:00<SeP>2025-02-17 03:36:00<SeP>2025-02-17 05:24:00<SeP>2025-02-17 07:12:00<SeP>2025-02-17 09:00:00<SeP>2025-02-17 10:48:00<SeP>2025-02-17 12:36:00<SeP>2025-02-17 14:24:00<SeP>2025-02-17 16:12:00<SeP>2025-02-17 18:00:00<SeP>2025-02-17 19:48:00<SeP>2025-02-17 21:36:00<SeP>2025-02-17 23:24:00<SeP>2025-02-18 01:12:00<SeP>2025-02-18 03:00:00<SeP>2025-02-18 04:48:00<SeP>2025-02-18 06:36:00<SeP>2025-02-18 08:24:00<SeP>2025-02-18 10:12:00<SeP>2025-02-18 12:00:00<SeP>2025-02-18 13:48:00<SeP>2025-02-18 15:36:00<SeP>2025-02-18 17:24:00<SeP>2025-02-18 19:12:00<SeP>2025-02-18 21:00:00<SeP>2025-02-18 22:48:00<SeP>2025-02-19 00:36:00<SeP>2025-02-19 02:24:00<SeP>2025-02-19 04:12:00<SeP>2025-02-19 06:00:00<SeP>2025-02-19 07:48:00<SeP>2025-02-19 09:36:00<SeP>2025-02-19 11:24:00<SeP>2025-02-19 13:12:00<SeP>2025-02-19 15:00:00<SeP>2025-02-19 16:48:00<SeP>2025-02-19 18:36:00<SeP>2025-02-19 20:24:00<SeP>2025-02-19 22:12:00<SeP>2025-02-20 00:00:00<SeP>2025-02-20 01:48:00<SeP>2025-02-20 03:36:00<SeP>2025-02-20 05:24:00<SeP>2025-02-20 07:12:00<SeP>2025-02-20 09:00:00<SeP>2025-02-20 10:48:00<SeP>2025-02-20 12:36:00<SeP>2025-02-20 14:24:00<SeP>2025-02-20 16:12:00<SeP>2025-02-20 18:00:00<SeP>2025-02-20 19:48:00<SeP>2025-02-20 21:36:00<SeP>2025-02-20 23:24:00<SeP>2025-02-21 01:12:00<SeP>2025-02-21 03:00:00<SeP>2025-02-21 04:48:00<SeP>2025-02-21 06:36:00<SeP>2025-02-21 08:24:00<SeP>2025-02-21 10:12:00<SeP>2025-02-21 12:00:00<SeP>2025-02-21 13:48:00<SeP>2025-02-21 15:36:00<SeP>2025-02-21 17:24:00<SeP>2025-02-21 19:12:00<SeP>2025-02-21 21:00:00<SeP>2025-02-21 22:48:00<SeP>2025-02-22 00:36:00<SeP>2025-02-22 02:24:00<SeP>2025-02-22 04:12:00<SeP>2025-02-22 06:00:00<SeP>2025-02-22 07:48:00<SeP>2025-02-22 09:36:00<SeP>2025-02-22 11:24:00<SeP>2025-02-22 13:12:00<SeP>2025-02-22 15:00:00<SeP>2025-02-22 16:48:00<SeP>2025-02-22 18:36:00<SeP>2025-02-22 20:24:00<SeP>2025-02-22 22:12:00<SeP>2025-02-23 00:00:00<SeP>2025-02-23 01:48:00<SeP>2025-02-23 03:36:00<SeP>2025-02-23 05:24:00<SeP>2025-02-23 07:12:00<SeP>2025-02-23 09:00:00<SeP>2025-02-23 10:48:00<SeP>2025-02-23 12:36:00<SeP>2025-02-23 14:24:00<SeP>2025-02-23 16:12:00<SeP>2025-02-23 18:00:00<SeP>2025-02-23 19:48:00<SeP>2025-02-23 21:36:00<SeP>2025-02-23 23:24:00<SeP>2025-02-24 01:12:00<SeP>2025-02-24 03:00:00<SeP>2025-02-24 04:48:00<SeP>2025-02-24 06:36:00<SeP>2025-02-24 08:24:00<SeP>2025-02-24 10:12:00<SeP>2025-02-24 12:00:00<SeP>2025-02-24 13:48:00<SeP>2025-02-24 15:36:00<SeP>2025-02-24 17:24:00<SeP>2025-02-24 19:12:00<SeP>2025-02-24 21:00:00<SeP>2025-02-24 22:48:00<SeP>2025-02-25 00:36:00<SeP>2025-02-25 02:24:00<SeP>2025-02-25 04:12:00<SeP>2025-02-25 06:00:00<SeP>2025-02-25 07:48:00<SeP>2025-02-25 09:36:00<SeP>2025-02-25 11:24:00<SeP>2025-02-25 13:12:00<SeP>2025-02-25 15:00:00<SeP>2025-02-25 16:48:00<SeP>2025-02-25 18:36:00<SeP>2025-02-25 20:24:00<SeP>2025-02-25 22:12:00<SeP>2025-02-26 00:00:00<SeP>2025-02-26 01:48:00<SeP>2025-02-26 03:36:00<SeP>2025-02-26 05:24:00<SeP>2025-02-26 07:12:00<SeP>2025-02-26 09:00:00<SeP>2025-02-26 10:48:00<SeP>2025-02-26 12:36:00<SeP>2025-02-26 14:24:00<SeP>2025-02-26 16:12:00<SeP>2025-02-26 18:00:00<SeP>2025-02-26 19:48:00<SeP>2025-02-26 21:36:00<SeP>2025-02-26 23:24:00<SeP>2025-02-27 01:12:00<SeP>2025-02-27 03:00:00<SeP>2025-02-27 04:48:00<SeP>2025-02-27 06:36:00<SeP>2025-02-27 08:24:00<SeP>2025-02-27 10:12:00<SeP>2025-02-27 12:00:00<SeP>2025-02-27 13:48:00<SeP>2025-02-27 15:36:00<SeP>2025-02-27 17:24:00<SeP>2025-02-27 19:12:00<SeP>2025-02-27 21:00:00<SeP>2025-02-27 22:48:00<SeP>2025-02-28 00:36:00<SeP>2025-02-28 02:24:00<SeP>2025-02-28 04:12:00<SeP>2025-02-28 06:00:00<SeP>2025-02-28 07:48:00<SeP>2025-02-28 09:36:00<SeP>2025-02-28 11:24:00<SeP>2025-02-28 13:12:00<SeP>2025-02-28 15:00:00<SeP>2025-02-28 16:48:00<SeP>2025-02-28 18:36:00<SeP>2025-02-28 20:24:00<SeP>2025-02-28 22:12:00<SeP>2025-03-01 00:00:00<SeP>2025-03-01 01:48:00<SeP>2025-03-01 03:36:00<SeP>2025-03-01 05:24:00<SeP>2025-03-01 07:12:00<SeP>2025-03-01 09:00:00<SeP>2025-03-01 10:48:00<SeP>2025-03-01 12:36:00<SeP>2025-03-01 14:24:00<SeP>2025-03-01 16:12:00<SeP>2025-03-01 18:00:00<SeP>2025-03-01 19:48:00<SeP>2025-03-01 21:36:00<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:12:00<SeP>2025-03-02 03:00:00<SeP>2025-03-02 04:48:00<SeP>2025-03-02 06:36:00<SeP>2025-03-02 08:24:00<SeP>2025-03-02 10:12:00<SeP>2025-03-02 12:00:00<SeP>2025-03-02 13:48:00<SeP>2025-03-02 15:36:00<SeP>2025-03-02 17:24:00<SeP>2025-03-02 19:12:00<SeP>2025-03-02 21:00:00<SeP>2025-03-02 22:48:00<SeP>2025-03-03 00:36:00<SeP>2025-03-03 02:24:00<SeP>2025-03-03 04:12:00<SeP>2025-03-03 06:00:00<SeP>2025-03-03 07:48:00<SeP>2025-03-03 09:36:00<SeP>2025-03-03 11:24:00<SeP>2025-03-03 13:12:00<SeP>2025-03-03 15:00:00<SeP>2025-03-03 16:48:00<SeP>2025-03-03 18:36:00<SeP>2025-03-03 20:24:00<SeP>2025-03-03 22:12:00";
  const itemLabel       = "Scans";
  const itemData        = "75<SeP>36<SeP>30<SeP>44<SeP>85<SeP>152<SeP>94<SeP>71<SeP>89<SeP>82<SeP>74<SeP>55<SeP>64<SeP>111<SeP>42<SeP>57<SeP>81<SeP>202<SeP>129<SeP>71<SeP>104<SeP>56<SeP>82<SeP>46<SeP>90<SeP>53<SeP>113<SeP>86<SeP>62<SeP>29<SeP>117<SeP>99<SeP>160<SeP>113<SeP>59<SeP>77<SeP>86<SeP>90<SeP>97<SeP>59<SeP>38<SeP>28<SeP>28<SeP>39<SeP>46<SeP>112<SeP>134<SeP>78<SeP>267<SeP>66<SeP>59<SeP>138<SeP>56<SeP>82<SeP>58<SeP>66<SeP>0<SeP>0<SeP>0<SeP>0<SeP>39<SeP>126<SeP>51<SeP>15<SeP>56<SeP>25<SeP>37<SeP>86<SeP>86<SeP>86<SeP>71<SeP>53<SeP>83<SeP>52<SeP>97<SeP>14<SeP>18<SeP>47<SeP>43<SeP>94<SeP>88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>95<SeP>82<SeP>28<SeP>60<SeP>64<SeP>46<SeP>82<SeP>46<SeP>149<SeP>215<SeP>114<SeP>85<SeP>151<SeP>68<SeP>96<SeP>95<SeP>136<SeP>165<SeP>87<SeP>98<SeP>60<SeP>68<SeP>105<SeP>84<SeP>68<SeP>99<SeP>78<SeP>87<SeP>71<SeP>85<SeP>68<SeP>79<SeP>143<SeP>68<SeP>39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>122<SeP>90<SeP>151<SeP>93<SeP>34<SeP>113<SeP>71<SeP>67<SeP>118<SeP>54<SeP>85<SeP>51<SeP>80<SeP>66<SeP>59<SeP>109<SeP>186<SeP>47<SeP>100<SeP>104<SeP>115<SeP>102<SeP>51<SeP>84<SeP>65<SeP>173<SeP>63<SeP>106<SeP>69<SeP>71<SeP>97<SeP>77<SeP>73<SeP>91<SeP>81<SeP>146<SeP>118<SeP>183<SeP>51<SeP>63<SeP>57<SeP>88<SeP>42<SeP>100<SeP>91<SeP>92<SeP>74<SeP>73<SeP>114<SeP>198<SeP>134<SeP>104<SeP>77<SeP>20<SeP>43<SeP>90<SeP>91<SeP>106<SeP>76<SeP>52<SeP>75<SeP>55<SeP>121<SeP>90<SeP>50<SeP>85<SeP>68<SeP>89<SeP>40<SeP>150<SeP>90<SeP>114<SeP>80<SeP>60<SeP>53<SeP>74<SeP>89<SeP>89<SeP>77<SeP>82<SeP>29<SeP>27<SeP>50<SeP>170<SeP>63<SeP>73<SeP>155<SeP>33<SeP>106<SeP>79<SeP>152<SeP>72<SeP>97<SeP>59<SeP>74<SeP>32<SeP>87<SeP>69<SeP>50<SeP>45<SeP>104<SeP>92<SeP>158<SeP>112<SeP>84<SeP>65<SeP>42<SeP>67<SeP>77<SeP>51<SeP>82<SeP>98<SeP>89<SeP>81<SeP>90<SeP>84<SeP>57<SeP>114<SeP>111<SeP>81<SeP>46<SeP>40<SeP>48<SeP>83<SeP>87<SeP>101<SeP>61<SeP>142<SeP>93<SeP>69<SeP>87<SeP>70<SeP>49<SeP>94<SeP>72<SeP>77<SeP>85<SeP>121<SeP>57<SeP>88<SeP>96<SeP>130<SeP>76<SeP>61<SeP>35<SeP>48<SeP>65<SeP>91<SeP>53<SeP>67<SeP>96<SeP>68<SeP>47<SeP>96<SeP>151<SeP>84<SeP>50<SeP>31<SeP>33<SeP>69<SeP>196<SeP>112<SeP>79<SeP>56<SeP>69<SeP>123<SeP>50<SeP>81<SeP>92<SeP>174<SeP>93<SeP>59<SeP>39<SeP>154<SeP>58<SeP>75<SeP>80<SeP>105<SeP>106<SeP>90<SeP>93<SeP>90<SeP>56<SeP>81<SeP>98<SeP>53<SeP>88<SeP>95<SeP>86<SeP>117<SeP>82<SeP>86<SeP>89<SeP>123<SeP>72<SeP>138<SeP>78<SeP>44<SeP>72<SeP>179<SeP>93<SeP>154<SeP>100<SeP>94<SeP>109<SeP>48<SeP>75<SeP>93<SeP>89<SeP>52<SeP>87<SeP>39<SeP>74<SeP>67<SeP>55<SeP>55<SeP>115<SeP>68<SeP>98<SeP>110<SeP>58<SeP>89<SeP>57<SeP>48<SeP>81<SeP>59<SeP>53<SeP>55<SeP>53<SeP>98<SeP>76<SeP>73<SeP>87<SeP>76<SeP>46<SeP>31<SeP>207<SeP>68<SeP>81<SeP>67<SeP>64<SeP>66<SeP>113<SeP>46<SeP>39<SeP>55<SeP>183<SeP>83<SeP>67<SeP>26<SeP>81<SeP>69<SeP>44<SeP>41<SeP>60<SeP>164<SeP>67<SeP>58<SeP>121<SeP>64<SeP>38<SeP>70<SeP>17<SeP>48<SeP>45<SeP>28<SeP>98<SeP>60<SeP>71<SeP>69<SeP>78<SeP>263";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00<SeP>2025-02-17 00:00:00<SeP>2025-02-17 01:48:00<SeP>2025-02-17 03:36:00<SeP>2025-02-17 05:24:00<SeP>2025-02-17 07:12:00<SeP>2025-02-17 09:00:00<SeP>2025-02-17 10:48:00<SeP>2025-02-17 12:36:00<SeP>2025-02-17 14:24:00<SeP>2025-02-17 16:12:00<SeP>2025-02-17 18:00:00<SeP>2025-02-17 19:48:00<SeP>2025-02-17 21:36:00<SeP>2025-02-17 23:24:00<SeP>2025-02-18 01:12:00<SeP>2025-02-18 03:00:00<SeP>2025-02-18 04:48:00<SeP>2025-02-18 06:36:00<SeP>2025-02-18 08:24:00<SeP>2025-02-18 10:12:00<SeP>2025-02-18 12:00:00<SeP>2025-02-18 13:48:00<SeP>2025-02-18 15:36:00<SeP>2025-02-18 17:24:00<SeP>2025-02-18 19:12:00<SeP>2025-02-18 21:00:00<SeP>2025-02-18 22:48:00<SeP>2025-02-19 00:36:00<SeP>2025-02-19 02:24:00<SeP>2025-02-19 04:12:00<SeP>2025-02-19 06:00:00<SeP>2025-02-19 07:48:00<SeP>2025-02-19 09:36:00<SeP>2025-02-19 11:24:00<SeP>2025-02-19 13:12:00<SeP>2025-02-19 15:00:00<SeP>2025-02-19 16:48:00<SeP>2025-02-19 18:36:00<SeP>2025-02-19 20:24:00<SeP>2025-02-19 22:12:00<SeP>2025-02-20 00:00:00<SeP>2025-02-20 01:48:00<SeP>2025-02-20 03:36:00<SeP>2025-02-20 05:24:00<SeP>2025-02-20 07:12:00<SeP>2025-02-20 09:00:00<SeP>2025-02-20 10:48:00<SeP>2025-02-20 12:36:00<SeP>2025-02-20 14:24:00<SeP>2025-02-20 16:12:00<SeP>2025-02-20 18:00:00<SeP>2025-02-20 19:48:00<SeP>2025-02-20 21:36:00<SeP>2025-02-20 23:24:00<SeP>2025-02-21 01:12:00<SeP>2025-02-21 03:00:00<SeP>2025-02-21 04:48:00<SeP>2025-02-21 06:36:00<SeP>2025-02-21 08:24:00<SeP>2025-02-21 10:12:00<SeP>2025-02-21 12:00:00<SeP>2025-02-21 13:48:00<SeP>2025-02-21 15:36:00<SeP>2025-02-21 17:24:00<SeP>2025-02-21 19:12:00<SeP>2025-02-21 21:00:00<SeP>2025-02-21 22:48:00<SeP>2025-02-22 00:36:00<SeP>2025-02-22 02:24:00<SeP>2025-02-22 04:12:00<SeP>2025-02-22 06:00:00<SeP>2025-02-22 07:48:00<SeP>2025-02-22 09:36:00<SeP>2025-02-22 11:24:00<SeP>2025-02-22 13:12:00<SeP>2025-02-22 15:00:00<SeP>2025-02-22 16:48:00<SeP>2025-02-22 18:36:00<SeP>2025-02-22 20:24:00<SeP>2025-02-22 22:12:00<SeP>2025-02-23 00:00:00<SeP>2025-02-23 01:48:00<SeP>2025-02-23 03:36:00<SeP>2025-02-23 05:24:00<SeP>2025-02-23 07:12:00<SeP>2025-02-23 09:00:00<SeP>2025-02-23 10:48:00<SeP>2025-02-23 12:36:00<SeP>2025-02-23 14:24:00<SeP>2025-02-23 16:12:00<SeP>2025-02-23 18:00:00<SeP>2025-02-23 19:48:00<SeP>2025-02-23 21:36:00<SeP>2025-02-23 23:24:00<SeP>2025-02-24 01:12:00<SeP>2025-02-24 03:00:00<SeP>2025-02-24 04:48:00<SeP>2025-02-24 06:36:00<SeP>2025-02-24 08:24:00<SeP>2025-02-24 10:12:00<SeP>2025-02-24 12:00:00<SeP>2025-02-24 13:48:00<SeP>2025-02-24 15:36:00<SeP>2025-02-24 17:24:00<SeP>2025-02-24 19:12:00<SeP>2025-02-24 21:00:00<SeP>2025-02-24 22:48:00<SeP>2025-02-25 00:36:00<SeP>2025-02-25 02:24:00<SeP>2025-02-25 04:12:00<SeP>2025-02-25 06:00:00<SeP>2025-02-25 07:48:00<SeP>2025-02-25 09:36:00<SeP>2025-02-25 11:24:00<SeP>2025-02-25 13:12:00<SeP>2025-02-25 15:00:00<SeP>2025-02-25 16:48:00<SeP>2025-02-25 18:36:00<SeP>2025-02-25 20:24:00<SeP>2025-02-25 22:12:00<SeP>2025-02-26 00:00:00<SeP>2025-02-26 01:48:00<SeP>2025-02-26 03:36:00<SeP>2025-02-26 05:24:00<SeP>2025-02-26 07:12:00<SeP>2025-02-26 09:00:00<SeP>2025-02-26 10:48:00<SeP>2025-02-26 12:36:00<SeP>2025-02-26 14:24:00<SeP>2025-02-26 16:12:00<SeP>2025-02-26 18:00:00<SeP>2025-02-26 19:48:00<SeP>2025-02-26 21:36:00<SeP>2025-02-26 23:24:00<SeP>2025-02-27 01:12:00<SeP>2025-02-27 03:00:00<SeP>2025-02-27 04:48:00<SeP>2025-02-27 06:36:00<SeP>2025-02-27 08:24:00<SeP>2025-02-27 10:12:00<SeP>2025-02-27 12:00:00<SeP>2025-02-27 13:48:00<SeP>2025-02-27 15:36:00<SeP>2025-02-27 17:24:00<SeP>2025-02-27 19:12:00<SeP>2025-02-27 21:00:00<SeP>2025-02-27 22:48:00<SeP>2025-02-28 00:36:00<SeP>2025-02-28 02:24:00<SeP>2025-02-28 04:12:00<SeP>2025-02-28 06:00:00<SeP>2025-02-28 07:48:00<SeP>2025-02-28 09:36:00<SeP>2025-02-28 11:24:00<SeP>2025-02-28 13:12:00<SeP>2025-02-28 15:00:00<SeP>2025-02-28 16:48:00<SeP>2025-02-28 18:36:00<SeP>2025-02-28 20:24:00<SeP>2025-02-28 22:12:00<SeP>2025-03-01 00:00:00<SeP>2025-03-01 01:48:00<SeP>2025-03-01 03:36:00<SeP>2025-03-01 05:24:00<SeP>2025-03-01 07:12:00<SeP>2025-03-01 09:00:00<SeP>2025-03-01 10:48:00<SeP>2025-03-01 12:36:00<SeP>2025-03-01 14:24:00<SeP>2025-03-01 16:12:00<SeP>2025-03-01 18:00:00<SeP>2025-03-01 19:48:00<SeP>2025-03-01 21:36:00<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:12:00<SeP>2025-03-02 03:00:00<SeP>2025-03-02 04:48:00<SeP>2025-03-02 06:36:00<SeP>2025-03-02 08:24:00<SeP>2025-03-02 10:12:00<SeP>2025-03-02 12:00:00<SeP>2025-03-02 13:48:00<SeP>2025-03-02 15:36:00<SeP>2025-03-02 17:24:00<SeP>2025-03-02 19:12:00<SeP>2025-03-02 21:00:00<SeP>2025-03-02 22:48:00<SeP>2025-03-03 00:36:00<SeP>2025-03-03 02:24:00<SeP>2025-03-03 04:12:00<SeP>2025-03-03 06:00:00<SeP>2025-03-03 07:48:00<SeP>2025-03-03 09:36:00<SeP>2025-03-03 11:24:00<SeP>2025-03-03 13:12:00<SeP>2025-03-03 15:00:00<SeP>2025-03-03 16:48:00<SeP>2025-03-03 18:36:00<SeP>2025-03-03 20:24:00<SeP>2025-03-03 22:12:00";
  const itemLabel       = "Attacks";
  const itemData        = "309<SeP>244<SeP>308<SeP>207<SeP>363<SeP>177<SeP>185<SeP>194<SeP>437<SeP>184<SeP>88<SeP>182<SeP>306<SeP>372<SeP>596<SeP>94<SeP>251<SeP>64<SeP>164<SeP>150<SeP>790<SeP>190<SeP>370<SeP>136<SeP>122<SeP>140<SeP>223<SeP>112<SeP>262<SeP>219<SeP>87<SeP>296<SeP>279<SeP>198<SeP>110<SeP>200<SeP>243<SeP>75<SeP>77<SeP>190<SeP>196<SeP>412<SeP>305<SeP>138<SeP>711<SeP>197<SeP>1070<SeP>2489<SeP>2717<SeP>2444<SeP>2263<SeP>2519<SeP>2680<SeP>2715<SeP>2548<SeP>2587<SeP>0<SeP>0<SeP>0<SeP>0<SeP>122<SeP>164<SeP>212<SeP>260<SeP>403<SeP>143<SeP>146<SeP>101<SeP>110<SeP>89<SeP>233<SeP>41<SeP>157<SeP>183<SeP>423<SeP>27<SeP>127<SeP>397<SeP>35<SeP>423<SeP>133<SeP>86<SeP>281<SeP>76<SeP>22<SeP>269<SeP>141<SeP>167<SeP>28<SeP>38<SeP>122<SeP>141<SeP>316<SeP>130<SeP>156<SeP>175<SeP>124<SeP>173<SeP>190<SeP>342<SeP>259<SeP>431<SeP>249<SeP>489<SeP>329<SeP>351<SeP>167<SeP>204<SeP>309<SeP>227<SeP>145<SeP>136<SeP>58<SeP>30<SeP>94<SeP>173<SeP>222<SeP>169<SeP>37<SeP>85<SeP>229<SeP>170<SeP>332<SeP>82<SeP>225<SeP>186<SeP>119<SeP>47<SeP>505<SeP>109<SeP>311<SeP>66<SeP>108<SeP>358<SeP>324<SeP>388<SeP>2824<SeP>3323<SeP>853<SeP>349<SeP>231<SeP>278<SeP>682<SeP>151<SeP>384<SeP>124<SeP>10<SeP>68<SeP>158<SeP>510<SeP>78<SeP>274<SeP>199<SeP>191<SeP>161<SeP>852<SeP>371<SeP>433<SeP>177<SeP>260<SeP>168<SeP>206<SeP>245<SeP>465<SeP>202<SeP>475<SeP>64<SeP>321<SeP>334<SeP>178<SeP>384<SeP>173<SeP>160<SeP>66<SeP>226<SeP>95<SeP>323<SeP>588<SeP>107<SeP>173<SeP>203<SeP>186<SeP>48<SeP>84<SeP>317<SeP>210<SeP>138<SeP>123<SeP>74<SeP>23<SeP>353<SeP>237<SeP>193<SeP>116<SeP>293<SeP>292<SeP>94<SeP>556<SeP>297<SeP>254<SeP>262<SeP>289<SeP>223<SeP>208<SeP>346<SeP>362<SeP>209<SeP>329<SeP>81<SeP>93<SeP>268<SeP>339<SeP>75<SeP>227<SeP>527<SeP>79<SeP>96<SeP>392<SeP>65<SeP>195<SeP>248<SeP>270<SeP>248<SeP>188<SeP>276<SeP>57<SeP>191<SeP>100<SeP>133<SeP>542<SeP>129<SeP>37<SeP>120<SeP>86<SeP>11<SeP>100<SeP>263<SeP>249<SeP>188<SeP>248<SeP>177<SeP>231<SeP>93<SeP>96<SeP>159<SeP>34<SeP>8<SeP>218<SeP>218<SeP>150<SeP>415<SeP>771<SeP>375<SeP>340<SeP>672<SeP>415<SeP>443<SeP>189<SeP>507<SeP>448<SeP>352<SeP>448<SeP>347<SeP>930<SeP>646<SeP>977<SeP>451<SeP>316<SeP>262<SeP>303<SeP>300<SeP>713<SeP>522<SeP>607<SeP>475<SeP>352<SeP>337<SeP>535<SeP>638<SeP>785<SeP>291<SeP>460<SeP>468<SeP>763<SeP>197<SeP>328<SeP>471<SeP>817<SeP>542<SeP>551<SeP>349<SeP>88<SeP>110<SeP>320<SeP>115<SeP>172<SeP>542<SeP>61<SeP>75<SeP>394<SeP>68<SeP>97<SeP>49<SeP>387<SeP>204<SeP>211<SeP>190<SeP>320<SeP>303<SeP>69<SeP>227<SeP>138<SeP>344<SeP>268<SeP>327<SeP>130<SeP>206<SeP>52<SeP>140<SeP>74<SeP>168<SeP>35<SeP>157<SeP>257<SeP>61<SeP>164<SeP>127<SeP>82<SeP>73<SeP>66<SeP>50<SeP>320<SeP>215<SeP>333<SeP>47<SeP>272<SeP>169<SeP>466<SeP>137<SeP>114<SeP>192<SeP>229<SeP>147<SeP>30<SeP>48<SeP>144<SeP>127<SeP>250<SeP>96<SeP>208<SeP>248<SeP>100<SeP>388<SeP>75<SeP>357<SeP>66<SeP>70<SeP>50<SeP>37<SeP>146<SeP>32<SeP>26<SeP>81<SeP>41<SeP>83<SeP>79<SeP>22<SeP>110<SeP>174<SeP>129<SeP>68<SeP>105<SeP>172<SeP>175<SeP>431<SeP>83<SeP>62<SeP>310<SeP>16<SeP>24<SeP>62<SeP>220<SeP>25<SeP>84<SeP>60<SeP>179<SeP>96<SeP>66<SeP>298<SeP>82<SeP>54<SeP>76<SeP>45<SeP>31<SeP>406<SeP>134<SeP>82<SeP>52<SeP>106<SeP>218";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00<SeP>2025-02-17 00:00:00<SeP>2025-02-17 01:48:00<SeP>2025-02-17 03:36:00<SeP>2025-02-17 05:24:00<SeP>2025-02-17 07:12:00<SeP>2025-02-17 09:00:00<SeP>2025-02-17 10:48:00<SeP>2025-02-17 12:36:00<SeP>2025-02-17 14:24:00<SeP>2025-02-17 16:12:00<SeP>2025-02-17 18:00:00<SeP>2025-02-17 19:48:00<SeP>2025-02-17 21:36:00<SeP>2025-02-17 23:24:00<SeP>2025-02-18 01:12:00<SeP>2025-02-18 03:00:00<SeP>2025-02-18 04:48:00<SeP>2025-02-18 06:36:00<SeP>2025-02-18 08:24:00<SeP>2025-02-18 10:12:00<SeP>2025-02-18 12:00:00<SeP>2025-02-18 13:48:00<SeP>2025-02-18 15:36:00<SeP>2025-02-18 17:24:00<SeP>2025-02-18 19:12:00<SeP>2025-02-18 21:00:00<SeP>2025-02-18 22:48:00<SeP>2025-02-19 00:36:00<SeP>2025-02-19 02:24:00<SeP>2025-02-19 04:12:00<SeP>2025-02-19 06:00:00<SeP>2025-02-19 07:48:00<SeP>2025-02-19 09:36:00<SeP>2025-02-19 11:24:00<SeP>2025-02-19 13:12:00<SeP>2025-02-19 15:00:00<SeP>2025-02-19 16:48:00<SeP>2025-02-19 18:36:00<SeP>2025-02-19 20:24:00<SeP>2025-02-19 22:12:00<SeP>2025-02-20 00:00:00<SeP>2025-02-20 01:48:00<SeP>2025-02-20 03:36:00<SeP>2025-02-20 05:24:00<SeP>2025-02-20 07:12:00<SeP>2025-02-20 09:00:00<SeP>2025-02-20 10:48:00<SeP>2025-02-20 12:36:00<SeP>2025-02-20 14:24:00<SeP>2025-02-20 16:12:00<SeP>2025-02-20 18:00:00<SeP>2025-02-20 19:48:00<SeP>2025-02-20 21:36:00<SeP>2025-02-20 23:24:00<SeP>2025-02-21 01:12:00<SeP>2025-02-21 03:00:00<SeP>2025-02-21 04:48:00<SeP>2025-02-21 06:36:00<SeP>2025-02-21 08:24:00<SeP>2025-02-21 10:12:00<SeP>2025-02-21 12:00:00<SeP>2025-02-21 13:48:00<SeP>2025-02-21 15:36:00<SeP>2025-02-21 17:24:00<SeP>2025-02-21 19:12:00<SeP>2025-02-21 21:00:00<SeP>2025-02-21 22:48:00<SeP>2025-02-22 00:36:00<SeP>2025-02-22 02:24:00<SeP>2025-02-22 04:12:00<SeP>2025-02-22 06:00:00<SeP>2025-02-22 07:48:00<SeP>2025-02-22 09:36:00<SeP>2025-02-22 11:24:00<SeP>2025-02-22 13:12:00<SeP>2025-02-22 15:00:00<SeP>2025-02-22 16:48:00<SeP>2025-02-22 18:36:00<SeP>2025-02-22 20:24:00<SeP>2025-02-22 22:12:00<SeP>2025-02-23 00:00:00<SeP>2025-02-23 01:48:00<SeP>2025-02-23 03:36:00<SeP>2025-02-23 05:24:00<SeP>2025-02-23 07:12:00<SeP>2025-02-23 09:00:00<SeP>2025-02-23 10:48:00<SeP>2025-02-23 12:36:00<SeP>2025-02-23 14:24:00<SeP>2025-02-23 16:12:00<SeP>2025-02-23 18:00:00<SeP>2025-02-23 19:48:00<SeP>2025-02-23 21:36:00<SeP>2025-02-23 23:24:00<SeP>2025-02-24 01:12:00<SeP>2025-02-24 03:00:00<SeP>2025-02-24 04:48:00<SeP>2025-02-24 06:36:00<SeP>2025-02-24 08:24:00<SeP>2025-02-24 10:12:00<SeP>2025-02-24 12:00:00<SeP>2025-02-24 13:48:00<SeP>2025-02-24 15:36:00<SeP>2025-02-24 17:24:00<SeP>2025-02-24 19:12:00<SeP>2025-02-24 21:00:00<SeP>2025-02-24 22:48:00<SeP>2025-02-25 00:36:00<SeP>2025-02-25 02:24:00<SeP>2025-02-25 04:12:00<SeP>2025-02-25 06:00:00<SeP>2025-02-25 07:48:00<SeP>2025-02-25 09:36:00<SeP>2025-02-25 11:24:00<SeP>2025-02-25 13:12:00<SeP>2025-02-25 15:00:00<SeP>2025-02-25 16:48:00<SeP>2025-02-25 18:36:00<SeP>2025-02-25 20:24:00<SeP>2025-02-25 22:12:00<SeP>2025-02-26 00:00:00<SeP>2025-02-26 01:48:00<SeP>2025-02-26 03:36:00<SeP>2025-02-26 05:24:00<SeP>2025-02-26 07:12:00<SeP>2025-02-26 09:00:00<SeP>2025-02-26 10:48:00<SeP>2025-02-26 12:36:00<SeP>2025-02-26 14:24:00<SeP>2025-02-26 16:12:00<SeP>2025-02-26 18:00:00<SeP>2025-02-26 19:48:00<SeP>2025-02-26 21:36:00<SeP>2025-02-26 23:24:00<SeP>2025-02-27 01:12:00<SeP>2025-02-27 03:00:00<SeP>2025-02-27 04:48:00<SeP>2025-02-27 06:36:00<SeP>2025-02-27 08:24:00<SeP>2025-02-27 10:12:00<SeP>2025-02-27 12:00:00<SeP>2025-02-27 13:48:00<SeP>2025-02-27 15:36:00<SeP>2025-02-27 17:24:00<SeP>2025-02-27 19:12:00<SeP>2025-02-27 21:00:00<SeP>2025-02-27 22:48:00<SeP>2025-02-28 00:36:00<SeP>2025-02-28 02:24:00<SeP>2025-02-28 04:12:00<SeP>2025-02-28 06:00:00<SeP>2025-02-28 07:48:00<SeP>2025-02-28 09:36:00<SeP>2025-02-28 11:24:00<SeP>2025-02-28 13:12:00<SeP>2025-02-28 15:00:00<SeP>2025-02-28 16:48:00<SeP>2025-02-28 18:36:00<SeP>2025-02-28 20:24:00<SeP>2025-02-28 22:12:00<SeP>2025-03-01 00:00:00<SeP>2025-03-01 01:48:00<SeP>2025-03-01 03:36:00<SeP>2025-03-01 05:24:00<SeP>2025-03-01 07:12:00<SeP>2025-03-01 09:00:00<SeP>2025-03-01 10:48:00<SeP>2025-03-01 12:36:00<SeP>2025-03-01 14:24:00<SeP>2025-03-01 16:12:00<SeP>2025-03-01 18:00:00<SeP>2025-03-01 19:48:00<SeP>2025-03-01 21:36:00<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:12:00<SeP>2025-03-02 03:00:00<SeP>2025-03-02 04:48:00<SeP>2025-03-02 06:36:00<SeP>2025-03-02 08:24:00<SeP>2025-03-02 10:12:00<SeP>2025-03-02 12:00:00<SeP>2025-03-02 13:48:00<SeP>2025-03-02 15:36:00<SeP>2025-03-02 17:24:00<SeP>2025-03-02 19:12:00<SeP>2025-03-02 21:00:00<SeP>2025-03-02 22:48:00<SeP>2025-03-03 00:36:00<SeP>2025-03-03 02:24:00<SeP>2025-03-03 04:12:00<SeP>2025-03-03 06:00:00<SeP>2025-03-03 07:48:00<SeP>2025-03-03 09:36:00<SeP>2025-03-03 11:24:00<SeP>2025-03-03 13:12:00<SeP>2025-03-03 15:00:00<SeP>2025-03-03 16:48:00<SeP>2025-03-03 18:36:00<SeP>2025-03-03 20:24:00<SeP>2025-03-03 22:12:00";
  const item1Label       = "Escaneos";
  const item1Data        = "75<SeP>36<SeP>30<SeP>44<SeP>85<SeP>152<SeP>94<SeP>71<SeP>89<SeP>82<SeP>74<SeP>55<SeP>64<SeP>111<SeP>42<SeP>57<SeP>81<SeP>202<SeP>129<SeP>71<SeP>104<SeP>56<SeP>82<SeP>46<SeP>90<SeP>53<SeP>113<SeP>86<SeP>62<SeP>29<SeP>117<SeP>99<SeP>160<SeP>113<SeP>59<SeP>77<SeP>86<SeP>90<SeP>97<SeP>59<SeP>38<SeP>28<SeP>28<SeP>39<SeP>46<SeP>112<SeP>134<SeP>78<SeP>267<SeP>66<SeP>59<SeP>138<SeP>56<SeP>82<SeP>58<SeP>66<SeP>0<SeP>0<SeP>0<SeP>0<SeP>39<SeP>126<SeP>51<SeP>15<SeP>56<SeP>25<SeP>37<SeP>86<SeP>86<SeP>86<SeP>71<SeP>53<SeP>83<SeP>52<SeP>97<SeP>14<SeP>18<SeP>47<SeP>43<SeP>94<SeP>88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>95<SeP>82<SeP>28<SeP>60<SeP>64<SeP>46<SeP>82<SeP>46<SeP>149<SeP>215<SeP>114<SeP>85<SeP>151<SeP>68<SeP>96<SeP>95<SeP>136<SeP>165<SeP>87<SeP>98<SeP>60<SeP>68<SeP>105<SeP>84<SeP>68<SeP>99<SeP>78<SeP>87<SeP>71<SeP>85<SeP>68<SeP>79<SeP>143<SeP>68<SeP>39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>122<SeP>90<SeP>151<SeP>93<SeP>34<SeP>113<SeP>71<SeP>67<SeP>118<SeP>54<SeP>85<SeP>51<SeP>80<SeP>66<SeP>59<SeP>109<SeP>186<SeP>47<SeP>100<SeP>104<SeP>115<SeP>102<SeP>51<SeP>84<SeP>65<SeP>173<SeP>63<SeP>106<SeP>69<SeP>71<SeP>97<SeP>77<SeP>73<SeP>91<SeP>81<SeP>146<SeP>118<SeP>183<SeP>51<SeP>63<SeP>57<SeP>88<SeP>42<SeP>100<SeP>91<SeP>92<SeP>74<SeP>73<SeP>114<SeP>198<SeP>134<SeP>104<SeP>77<SeP>20<SeP>43<SeP>90<SeP>91<SeP>106<SeP>76<SeP>52<SeP>75<SeP>55<SeP>121<SeP>90<SeP>50<SeP>85<SeP>68<SeP>89<SeP>40<SeP>150<SeP>90<SeP>114<SeP>80<SeP>60<SeP>53<SeP>74<SeP>89<SeP>89<SeP>77<SeP>82<SeP>29<SeP>27<SeP>50<SeP>170<SeP>63<SeP>73<SeP>155<SeP>33<SeP>106<SeP>79<SeP>152<SeP>72<SeP>97<SeP>59<SeP>74<SeP>32<SeP>87<SeP>69<SeP>50<SeP>45<SeP>104<SeP>92<SeP>158<SeP>112<SeP>84<SeP>65<SeP>42<SeP>67<SeP>77<SeP>51<SeP>82<SeP>98<SeP>89<SeP>81<SeP>90<SeP>84<SeP>57<SeP>114<SeP>111<SeP>81<SeP>46<SeP>40<SeP>48<SeP>83<SeP>87<SeP>101<SeP>61<SeP>142<SeP>93<SeP>69<SeP>87<SeP>70<SeP>49<SeP>94<SeP>72<SeP>77<SeP>85<SeP>121<SeP>57<SeP>88<SeP>96<SeP>130<SeP>76<SeP>61<SeP>35<SeP>48<SeP>65<SeP>91<SeP>53<SeP>67<SeP>96<SeP>68<SeP>47<SeP>96<SeP>151<SeP>84<SeP>50<SeP>31<SeP>33<SeP>69<SeP>196<SeP>112<SeP>79<SeP>56<SeP>69<SeP>123<SeP>50<SeP>81<SeP>92<SeP>174<SeP>93<SeP>59<SeP>39<SeP>154<SeP>58<SeP>75<SeP>80<SeP>105<SeP>106<SeP>90<SeP>93<SeP>90<SeP>56<SeP>81<SeP>98<SeP>53<SeP>88<SeP>95<SeP>86<SeP>117<SeP>82<SeP>86<SeP>89<SeP>123<SeP>72<SeP>138<SeP>78<SeP>44<SeP>72<SeP>179<SeP>93<SeP>154<SeP>100<SeP>94<SeP>109<SeP>48<SeP>75<SeP>93<SeP>89<SeP>52<SeP>87<SeP>39<SeP>74<SeP>67<SeP>55<SeP>55<SeP>115<SeP>68<SeP>98<SeP>110<SeP>58<SeP>89<SeP>57<SeP>48<SeP>81<SeP>59<SeP>53<SeP>55<SeP>53<SeP>98<SeP>76<SeP>73<SeP>87<SeP>76<SeP>46<SeP>31<SeP>207<SeP>68<SeP>81<SeP>67<SeP>64<SeP>66<SeP>113<SeP>46<SeP>39<SeP>55<SeP>183<SeP>83<SeP>67<SeP>26<SeP>81<SeP>69<SeP>44<SeP>41<SeP>60<SeP>164<SeP>67<SeP>58<SeP>121<SeP>64<SeP>38<SeP>70<SeP>17<SeP>48<SeP>45<SeP>28<SeP>98<SeP>60<SeP>71<SeP>69<SeP>78<SeP>263";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "309<SeP>244<SeP>308<SeP>207<SeP>363<SeP>177<SeP>185<SeP>194<SeP>437<SeP>184<SeP>88<SeP>182<SeP>306<SeP>372<SeP>596<SeP>94<SeP>251<SeP>64<SeP>164<SeP>150<SeP>790<SeP>190<SeP>370<SeP>136<SeP>122<SeP>140<SeP>223<SeP>112<SeP>262<SeP>219<SeP>87<SeP>296<SeP>279<SeP>198<SeP>110<SeP>200<SeP>243<SeP>75<SeP>77<SeP>190<SeP>196<SeP>412<SeP>305<SeP>138<SeP>711<SeP>197<SeP>1070<SeP>2489<SeP>2717<SeP>2444<SeP>2263<SeP>2519<SeP>2680<SeP>2715<SeP>2548<SeP>2587<SeP>0<SeP>0<SeP>0<SeP>0<SeP>122<SeP>164<SeP>212<SeP>260<SeP>403<SeP>143<SeP>146<SeP>101<SeP>110<SeP>89<SeP>233<SeP>41<SeP>157<SeP>183<SeP>423<SeP>27<SeP>127<SeP>397<SeP>35<SeP>423<SeP>133<SeP>86<SeP>281<SeP>76<SeP>22<SeP>269<SeP>141<SeP>167<SeP>28<SeP>38<SeP>122<SeP>141<SeP>316<SeP>130<SeP>156<SeP>175<SeP>124<SeP>173<SeP>190<SeP>342<SeP>259<SeP>431<SeP>249<SeP>489<SeP>329<SeP>351<SeP>167<SeP>204<SeP>309<SeP>227<SeP>145<SeP>136<SeP>58<SeP>30<SeP>94<SeP>173<SeP>222<SeP>169<SeP>37<SeP>85<SeP>229<SeP>170<SeP>332<SeP>82<SeP>225<SeP>186<SeP>119<SeP>47<SeP>505<SeP>109<SeP>311<SeP>66<SeP>108<SeP>358<SeP>324<SeP>388<SeP>2824<SeP>3323<SeP>853<SeP>349<SeP>231<SeP>278<SeP>682<SeP>151<SeP>384<SeP>124<SeP>10<SeP>68<SeP>158<SeP>510<SeP>78<SeP>274<SeP>199<SeP>191<SeP>161<SeP>852<SeP>371<SeP>433<SeP>177<SeP>260<SeP>168<SeP>206<SeP>245<SeP>465<SeP>202<SeP>475<SeP>64<SeP>321<SeP>334<SeP>178<SeP>384<SeP>173<SeP>160<SeP>66<SeP>226<SeP>95<SeP>323<SeP>588<SeP>107<SeP>173<SeP>203<SeP>186<SeP>48<SeP>84<SeP>317<SeP>210<SeP>138<SeP>123<SeP>74<SeP>23<SeP>353<SeP>237<SeP>193<SeP>116<SeP>293<SeP>292<SeP>94<SeP>556<SeP>297<SeP>254<SeP>262<SeP>289<SeP>223<SeP>208<SeP>346<SeP>362<SeP>209<SeP>329<SeP>81<SeP>93<SeP>268<SeP>339<SeP>75<SeP>227<SeP>527<SeP>79<SeP>96<SeP>392<SeP>65<SeP>195<SeP>248<SeP>270<SeP>248<SeP>188<SeP>276<SeP>57<SeP>191<SeP>100<SeP>133<SeP>542<SeP>129<SeP>37<SeP>120<SeP>86<SeP>11<SeP>100<SeP>263<SeP>249<SeP>188<SeP>248<SeP>177<SeP>231<SeP>93<SeP>96<SeP>159<SeP>34<SeP>8<SeP>218<SeP>218<SeP>150<SeP>415<SeP>771<SeP>375<SeP>340<SeP>672<SeP>415<SeP>443<SeP>189<SeP>507<SeP>448<SeP>352<SeP>448<SeP>347<SeP>930<SeP>646<SeP>977<SeP>451<SeP>316<SeP>262<SeP>303<SeP>300<SeP>713<SeP>522<SeP>607<SeP>475<SeP>352<SeP>337<SeP>535<SeP>638<SeP>785<SeP>291<SeP>460<SeP>468<SeP>763<SeP>197<SeP>328<SeP>471<SeP>817<SeP>542<SeP>551<SeP>349<SeP>88<SeP>110<SeP>320<SeP>115<SeP>172<SeP>542<SeP>61<SeP>75<SeP>394<SeP>68<SeP>97<SeP>49<SeP>387<SeP>204<SeP>211<SeP>190<SeP>320<SeP>303<SeP>69<SeP>227<SeP>138<SeP>344<SeP>268<SeP>327<SeP>130<SeP>206<SeP>52<SeP>140<SeP>74<SeP>168<SeP>35<SeP>157<SeP>257<SeP>61<SeP>164<SeP>127<SeP>82<SeP>73<SeP>66<SeP>50<SeP>320<SeP>215<SeP>333<SeP>47<SeP>272<SeP>169<SeP>466<SeP>137<SeP>114<SeP>192<SeP>229<SeP>147<SeP>30<SeP>48<SeP>144<SeP>127<SeP>250<SeP>96<SeP>208<SeP>248<SeP>100<SeP>388<SeP>75<SeP>357<SeP>66<SeP>70<SeP>50<SeP>37<SeP>146<SeP>32<SeP>26<SeP>81<SeP>41<SeP>83<SeP>79<SeP>22<SeP>110<SeP>174<SeP>129<SeP>68<SeP>105<SeP>172<SeP>175<SeP>431<SeP>83<SeP>62<SeP>310<SeP>16<SeP>24<SeP>62<SeP>220<SeP>25<SeP>84<SeP>60<SeP>179<SeP>96<SeP>66<SeP>298<SeP>82<SeP>54<SeP>76<SeP>45<SeP>31<SeP>406<SeP>134<SeP>82<SeP>52<SeP>106<SeP>218";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00<SeP>2025-02-17 00:00:00<SeP>2025-02-17 01:48:00<SeP>2025-02-17 03:36:00<SeP>2025-02-17 05:24:00<SeP>2025-02-17 07:12:00<SeP>2025-02-17 09:00:00<SeP>2025-02-17 10:48:00<SeP>2025-02-17 12:36:00<SeP>2025-02-17 14:24:00<SeP>2025-02-17 16:12:00<SeP>2025-02-17 18:00:00<SeP>2025-02-17 19:48:00<SeP>2025-02-17 21:36:00<SeP>2025-02-17 23:24:00<SeP>2025-02-18 01:12:00<SeP>2025-02-18 03:00:00<SeP>2025-02-18 04:48:00<SeP>2025-02-18 06:36:00<SeP>2025-02-18 08:24:00<SeP>2025-02-18 10:12:00<SeP>2025-02-18 12:00:00<SeP>2025-02-18 13:48:00<SeP>2025-02-18 15:36:00<SeP>2025-02-18 17:24:00<SeP>2025-02-18 19:12:00<SeP>2025-02-18 21:00:00<SeP>2025-02-18 22:48:00<SeP>2025-02-19 00:36:00<SeP>2025-02-19 02:24:00<SeP>2025-02-19 04:12:00<SeP>2025-02-19 06:00:00<SeP>2025-02-19 07:48:00<SeP>2025-02-19 09:36:00<SeP>2025-02-19 11:24:00<SeP>2025-02-19 13:12:00<SeP>2025-02-19 15:00:00<SeP>2025-02-19 16:48:00<SeP>2025-02-19 18:36:00<SeP>2025-02-19 20:24:00<SeP>2025-02-19 22:12:00<SeP>2025-02-20 00:00:00<SeP>2025-02-20 01:48:00<SeP>2025-02-20 03:36:00<SeP>2025-02-20 05:24:00<SeP>2025-02-20 07:12:00<SeP>2025-02-20 09:00:00<SeP>2025-02-20 10:48:00<SeP>2025-02-20 12:36:00<SeP>2025-02-20 14:24:00<SeP>2025-02-20 16:12:00<SeP>2025-02-20 18:00:00<SeP>2025-02-20 19:48:00<SeP>2025-02-20 21:36:00<SeP>2025-02-20 23:24:00<SeP>2025-02-21 01:12:00<SeP>2025-02-21 03:00:00<SeP>2025-02-21 04:48:00<SeP>2025-02-21 06:36:00<SeP>2025-02-21 08:24:00<SeP>2025-02-21 10:12:00<SeP>2025-02-21 12:00:00<SeP>2025-02-21 13:48:00<SeP>2025-02-21 15:36:00<SeP>2025-02-21 17:24:00<SeP>2025-02-21 19:12:00<SeP>2025-02-21 21:00:00<SeP>2025-02-21 22:48:00<SeP>2025-02-22 00:36:00<SeP>2025-02-22 02:24:00<SeP>2025-02-22 04:12:00<SeP>2025-02-22 06:00:00<SeP>2025-02-22 07:48:00<SeP>2025-02-22 09:36:00<SeP>2025-02-22 11:24:00<SeP>2025-02-22 13:12:00<SeP>2025-02-22 15:00:00<SeP>2025-02-22 16:48:00<SeP>2025-02-22 18:36:00<SeP>2025-02-22 20:24:00<SeP>2025-02-22 22:12:00<SeP>2025-02-23 00:00:00<SeP>2025-02-23 01:48:00<SeP>2025-02-23 03:36:00<SeP>2025-02-23 05:24:00<SeP>2025-02-23 07:12:00<SeP>2025-02-23 09:00:00<SeP>2025-02-23 10:48:00<SeP>2025-02-23 12:36:00<SeP>2025-02-23 14:24:00<SeP>2025-02-23 16:12:00<SeP>2025-02-23 18:00:00<SeP>2025-02-23 19:48:00<SeP>2025-02-23 21:36:00<SeP>2025-02-23 23:24:00<SeP>2025-02-24 01:12:00<SeP>2025-02-24 03:00:00<SeP>2025-02-24 04:48:00<SeP>2025-02-24 06:36:00<SeP>2025-02-24 08:24:00<SeP>2025-02-24 10:12:00<SeP>2025-02-24 12:00:00<SeP>2025-02-24 13:48:00<SeP>2025-02-24 15:36:00<SeP>2025-02-24 17:24:00<SeP>2025-02-24 19:12:00<SeP>2025-02-24 21:00:00<SeP>2025-02-24 22:48:00<SeP>2025-02-25 00:36:00<SeP>2025-02-25 02:24:00<SeP>2025-02-25 04:12:00<SeP>2025-02-25 06:00:00<SeP>2025-02-25 07:48:00<SeP>2025-02-25 09:36:00<SeP>2025-02-25 11:24:00<SeP>2025-02-25 13:12:00<SeP>2025-02-25 15:00:00<SeP>2025-02-25 16:48:00<SeP>2025-02-25 18:36:00<SeP>2025-02-25 20:24:00<SeP>2025-02-25 22:12:00<SeP>2025-02-26 00:00:00<SeP>2025-02-26 01:48:00<SeP>2025-02-26 03:36:00<SeP>2025-02-26 05:24:00<SeP>2025-02-26 07:12:00<SeP>2025-02-26 09:00:00<SeP>2025-02-26 10:48:00<SeP>2025-02-26 12:36:00<SeP>2025-02-26 14:24:00<SeP>2025-02-26 16:12:00<SeP>2025-02-26 18:00:00<SeP>2025-02-26 19:48:00<SeP>2025-02-26 21:36:00<SeP>2025-02-26 23:24:00<SeP>2025-02-27 01:12:00<SeP>2025-02-27 03:00:00<SeP>2025-02-27 04:48:00<SeP>2025-02-27 06:36:00<SeP>2025-02-27 08:24:00<SeP>2025-02-27 10:12:00<SeP>2025-02-27 12:00:00<SeP>2025-02-27 13:48:00<SeP>2025-02-27 15:36:00<SeP>2025-02-27 17:24:00<SeP>2025-02-27 19:12:00<SeP>2025-02-27 21:00:00<SeP>2025-02-27 22:48:00<SeP>2025-02-28 00:36:00<SeP>2025-02-28 02:24:00<SeP>2025-02-28 04:12:00<SeP>2025-02-28 06:00:00<SeP>2025-02-28 07:48:00<SeP>2025-02-28 09:36:00<SeP>2025-02-28 11:24:00<SeP>2025-02-28 13:12:00<SeP>2025-02-28 15:00:00<SeP>2025-02-28 16:48:00<SeP>2025-02-28 18:36:00<SeP>2025-02-28 20:24:00<SeP>2025-02-28 22:12:00<SeP>2025-03-01 00:00:00<SeP>2025-03-01 01:48:00<SeP>2025-03-01 03:36:00<SeP>2025-03-01 05:24:00<SeP>2025-03-01 07:12:00<SeP>2025-03-01 09:00:00<SeP>2025-03-01 10:48:00<SeP>2025-03-01 12:36:00<SeP>2025-03-01 14:24:00<SeP>2025-03-01 16:12:00<SeP>2025-03-01 18:00:00<SeP>2025-03-01 19:48:00<SeP>2025-03-01 21:36:00<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:12:00<SeP>2025-03-02 03:00:00<SeP>2025-03-02 04:48:00<SeP>2025-03-02 06:36:00<SeP>2025-03-02 08:24:00<SeP>2025-03-02 10:12:00<SeP>2025-03-02 12:00:00<SeP>2025-03-02 13:48:00<SeP>2025-03-02 15:36:00<SeP>2025-03-02 17:24:00<SeP>2025-03-02 19:12:00<SeP>2025-03-02 21:00:00<SeP>2025-03-02 22:48:00<SeP>2025-03-03 00:36:00<SeP>2025-03-03 02:24:00<SeP>2025-03-03 04:12:00<SeP>2025-03-03 06:00:00<SeP>2025-03-03 07:48:00<SeP>2025-03-03 09:36:00<SeP>2025-03-03 11:24:00<SeP>2025-03-03 13:12:00<SeP>2025-03-03 15:00:00<SeP>2025-03-03 16:48:00<SeP>2025-03-03 18:36:00<SeP>2025-03-03 20:24:00<SeP>2025-03-03 22:12:00";
  const itemLabel       = "Escaneos";
  const itemData        = "75<SeP>36<SeP>30<SeP>44<SeP>85<SeP>152<SeP>94<SeP>71<SeP>89<SeP>82<SeP>74<SeP>55<SeP>64<SeP>111<SeP>42<SeP>57<SeP>81<SeP>202<SeP>129<SeP>71<SeP>104<SeP>56<SeP>82<SeP>46<SeP>90<SeP>53<SeP>113<SeP>86<SeP>62<SeP>29<SeP>117<SeP>99<SeP>160<SeP>113<SeP>59<SeP>77<SeP>86<SeP>90<SeP>97<SeP>59<SeP>38<SeP>28<SeP>28<SeP>39<SeP>46<SeP>112<SeP>134<SeP>78<SeP>267<SeP>66<SeP>59<SeP>138<SeP>56<SeP>82<SeP>58<SeP>66<SeP>0<SeP>0<SeP>0<SeP>0<SeP>39<SeP>126<SeP>51<SeP>15<SeP>56<SeP>25<SeP>37<SeP>86<SeP>86<SeP>86<SeP>71<SeP>53<SeP>83<SeP>52<SeP>97<SeP>14<SeP>18<SeP>47<SeP>43<SeP>94<SeP>88<SeP>19<SeP>35<SeP>43<SeP>67<SeP>72<SeP>95<SeP>82<SeP>28<SeP>60<SeP>64<SeP>46<SeP>82<SeP>46<SeP>149<SeP>215<SeP>114<SeP>85<SeP>151<SeP>68<SeP>96<SeP>95<SeP>136<SeP>165<SeP>87<SeP>98<SeP>60<SeP>68<SeP>105<SeP>84<SeP>68<SeP>99<SeP>78<SeP>87<SeP>71<SeP>85<SeP>68<SeP>79<SeP>143<SeP>68<SeP>39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>122<SeP>90<SeP>151<SeP>93<SeP>34<SeP>113<SeP>71<SeP>67<SeP>118<SeP>54<SeP>85<SeP>51<SeP>80<SeP>66<SeP>59<SeP>109<SeP>186<SeP>47<SeP>100<SeP>104<SeP>115<SeP>102<SeP>51<SeP>84<SeP>65<SeP>173<SeP>63<SeP>106<SeP>69<SeP>71<SeP>97<SeP>77<SeP>73<SeP>91<SeP>81<SeP>146<SeP>118<SeP>183<SeP>51<SeP>63<SeP>57<SeP>88<SeP>42<SeP>100<SeP>91<SeP>92<SeP>74<SeP>73<SeP>114<SeP>198<SeP>134<SeP>104<SeP>77<SeP>20<SeP>43<SeP>90<SeP>91<SeP>106<SeP>76<SeP>52<SeP>75<SeP>55<SeP>121<SeP>90<SeP>50<SeP>85<SeP>68<SeP>89<SeP>40<SeP>150<SeP>90<SeP>114<SeP>80<SeP>60<SeP>53<SeP>74<SeP>89<SeP>89<SeP>77<SeP>82<SeP>29<SeP>27<SeP>50<SeP>170<SeP>63<SeP>73<SeP>155<SeP>33<SeP>106<SeP>79<SeP>152<SeP>72<SeP>97<SeP>59<SeP>74<SeP>32<SeP>87<SeP>69<SeP>50<SeP>45<SeP>104<SeP>92<SeP>158<SeP>112<SeP>84<SeP>65<SeP>42<SeP>67<SeP>77<SeP>51<SeP>82<SeP>98<SeP>89<SeP>81<SeP>90<SeP>84<SeP>57<SeP>114<SeP>111<SeP>81<SeP>46<SeP>40<SeP>48<SeP>83<SeP>87<SeP>101<SeP>61<SeP>142<SeP>93<SeP>69<SeP>87<SeP>70<SeP>49<SeP>94<SeP>72<SeP>77<SeP>85<SeP>121<SeP>57<SeP>88<SeP>96<SeP>130<SeP>76<SeP>61<SeP>35<SeP>48<SeP>65<SeP>91<SeP>53<SeP>67<SeP>96<SeP>68<SeP>47<SeP>96<SeP>151<SeP>84<SeP>50<SeP>31<SeP>33<SeP>69<SeP>196<SeP>112<SeP>79<SeP>56<SeP>69<SeP>123<SeP>50<SeP>81<SeP>92<SeP>174<SeP>93<SeP>59<SeP>39<SeP>154<SeP>58<SeP>75<SeP>80<SeP>105<SeP>106<SeP>90<SeP>93<SeP>90<SeP>56<SeP>81<SeP>98<SeP>53<SeP>88<SeP>95<SeP>86<SeP>117<SeP>82<SeP>86<SeP>89<SeP>123<SeP>72<SeP>138<SeP>78<SeP>44<SeP>72<SeP>179<SeP>93<SeP>154<SeP>100<SeP>94<SeP>109<SeP>48<SeP>75<SeP>93<SeP>89<SeP>52<SeP>87<SeP>39<SeP>74<SeP>67<SeP>55<SeP>55<SeP>115<SeP>68<SeP>98<SeP>110<SeP>58<SeP>89<SeP>57<SeP>48<SeP>81<SeP>59<SeP>53<SeP>55<SeP>53<SeP>98<SeP>76<SeP>73<SeP>87<SeP>76<SeP>46<SeP>31<SeP>207<SeP>68<SeP>81<SeP>67<SeP>64<SeP>66<SeP>113<SeP>46<SeP>39<SeP>55<SeP>183<SeP>83<SeP>67<SeP>26<SeP>81<SeP>69<SeP>44<SeP>41<SeP>60<SeP>164<SeP>67<SeP>58<SeP>121<SeP>64<SeP>38<SeP>70<SeP>17<SeP>48<SeP>45<SeP>28<SeP>98<SeP>60<SeP>71<SeP>69<SeP>78<SeP>263";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-02 00:00:00<SeP>2025-02-02 01:48:00<SeP>2025-02-02 03:36:00<SeP>2025-02-02 05:24:00<SeP>2025-02-02 07:12:00<SeP>2025-02-02 09:00:00<SeP>2025-02-02 10:48:00<SeP>2025-02-02 12:36:00<SeP>2025-02-02 14:24:00<SeP>2025-02-02 16:12:00<SeP>2025-02-02 18:00:00<SeP>2025-02-02 19:48:00<SeP>2025-02-02 21:36:00<SeP>2025-02-02 23:24:00<SeP>2025-02-03 01:12:00<SeP>2025-02-03 03:00:00<SeP>2025-02-03 04:48:00<SeP>2025-02-03 06:36:00<SeP>2025-02-03 08:24:00<SeP>2025-02-03 10:12:00<SeP>2025-02-03 12:00:00<SeP>2025-02-03 13:48:00<SeP>2025-02-03 15:36:00<SeP>2025-02-03 17:24:00<SeP>2025-02-03 19:12:00<SeP>2025-02-03 21:00:00<SeP>2025-02-03 22:48:00<SeP>2025-02-04 00:36:00<SeP>2025-02-04 02:24:00<SeP>2025-02-04 04:12:00<SeP>2025-02-04 06:00:00<SeP>2025-02-04 07:48:00<SeP>2025-02-04 09:36:00<SeP>2025-02-04 11:24:00<SeP>2025-02-04 13:12:00<SeP>2025-02-04 15:00:00<SeP>2025-02-04 16:48:00<SeP>2025-02-04 18:36:00<SeP>2025-02-04 20:24:00<SeP>2025-02-04 22:12:00<SeP>2025-02-05 00:00:00<SeP>2025-02-05 01:48:00<SeP>2025-02-05 03:36:00<SeP>2025-02-05 05:24:00<SeP>2025-02-05 07:12:00<SeP>2025-02-05 09:00:00<SeP>2025-02-05 10:48:00<SeP>2025-02-05 12:36:00<SeP>2025-02-05 14:24:00<SeP>2025-02-05 16:12:00<SeP>2025-02-05 18:00:00<SeP>2025-02-05 19:48:00<SeP>2025-02-05 21:36:00<SeP>2025-02-05 23:24:00<SeP>2025-02-06 01:12:00<SeP>2025-02-06 03:00:00<SeP>2025-02-06 04:48:00<SeP>2025-02-06 06:36:00<SeP>2025-02-06 08:24:00<SeP>2025-02-06 10:12:00<SeP>2025-02-06 12:00:00<SeP>2025-02-06 13:48:00<SeP>2025-02-06 15:36:00<SeP>2025-02-06 17:24:00<SeP>2025-02-06 19:12:00<SeP>2025-02-06 21:00:00<SeP>2025-02-06 22:48:00<SeP>2025-02-07 00:36:00<SeP>2025-02-07 02:24:00<SeP>2025-02-07 04:12:00<SeP>2025-02-07 06:00:00<SeP>2025-02-07 07:48:00<SeP>2025-02-07 09:36:00<SeP>2025-02-07 11:24:00<SeP>2025-02-07 13:12:00<SeP>2025-02-07 15:00:00<SeP>2025-02-07 16:48:00<SeP>2025-02-07 18:36:00<SeP>2025-02-07 20:24:00<SeP>2025-02-07 22:12:00<SeP>2025-02-08 00:00:00<SeP>2025-02-08 01:48:00<SeP>2025-02-08 03:36:00<SeP>2025-02-08 05:24:00<SeP>2025-02-08 07:12:00<SeP>2025-02-08 09:00:00<SeP>2025-02-08 10:48:00<SeP>2025-02-08 12:36:00<SeP>2025-02-08 14:24:00<SeP>2025-02-08 16:12:00<SeP>2025-02-08 18:00:00<SeP>2025-02-08 19:48:00<SeP>2025-02-08 21:36:00<SeP>2025-02-08 23:24:00<SeP>2025-02-09 01:12:00<SeP>2025-02-09 03:00:00<SeP>2025-02-09 04:48:00<SeP>2025-02-09 06:36:00<SeP>2025-02-09 08:24:00<SeP>2025-02-09 10:12:00<SeP>2025-02-09 12:00:00<SeP>2025-02-09 13:48:00<SeP>2025-02-09 15:36:00<SeP>2025-02-09 17:24:00<SeP>2025-02-09 19:12:00<SeP>2025-02-09 21:00:00<SeP>2025-02-09 22:48:00<SeP>2025-02-10 00:36:00<SeP>2025-02-10 02:24:00<SeP>2025-02-10 04:12:00<SeP>2025-02-10 06:00:00<SeP>2025-02-10 07:48:00<SeP>2025-02-10 09:36:00<SeP>2025-02-10 11:24:00<SeP>2025-02-10 13:12:00<SeP>2025-02-10 15:00:00<SeP>2025-02-10 16:48:00<SeP>2025-02-10 18:36:00<SeP>2025-02-10 20:24:00<SeP>2025-02-10 22:12:00<SeP>2025-02-11 00:00:00<SeP>2025-02-11 01:48:00<SeP>2025-02-11 03:36:00<SeP>2025-02-11 05:24:00<SeP>2025-02-11 07:12:00<SeP>2025-02-11 09:00:00<SeP>2025-02-11 10:48:00<SeP>2025-02-11 12:36:00<SeP>2025-02-11 14:24:00<SeP>2025-02-11 16:12:00<SeP>2025-02-11 18:00:00<SeP>2025-02-11 19:48:00<SeP>2025-02-11 21:36:00<SeP>2025-02-11 23:24:00<SeP>2025-02-12 01:12:00<SeP>2025-02-12 03:00:00<SeP>2025-02-12 04:48:00<SeP>2025-02-12 06:36:00<SeP>2025-02-12 08:24:00<SeP>2025-02-12 10:12:00<SeP>2025-02-12 12:00:00<SeP>2025-02-12 13:48:00<SeP>2025-02-12 15:36:00<SeP>2025-02-12 17:24:00<SeP>2025-02-12 19:12:00<SeP>2025-02-12 21:00:00<SeP>2025-02-12 22:48:00<SeP>2025-02-13 00:36:00<SeP>2025-02-13 02:24:00<SeP>2025-02-13 04:12:00<SeP>2025-02-13 06:00:00<SeP>2025-02-13 07:48:00<SeP>2025-02-13 09:36:00<SeP>2025-02-13 11:24:00<SeP>2025-02-13 13:12:00<SeP>2025-02-13 15:00:00<SeP>2025-02-13 16:48:00<SeP>2025-02-13 18:36:00<SeP>2025-02-13 20:24:00<SeP>2025-02-13 22:12:00<SeP>2025-02-14 00:00:00<SeP>2025-02-14 01:48:00<SeP>2025-02-14 03:36:00<SeP>2025-02-14 05:24:00<SeP>2025-02-14 07:12:00<SeP>2025-02-14 09:00:00<SeP>2025-02-14 10:48:00<SeP>2025-02-14 12:36:00<SeP>2025-02-14 14:24:00<SeP>2025-02-14 16:12:00<SeP>2025-02-14 18:00:00<SeP>2025-02-14 19:48:00<SeP>2025-02-14 21:36:00<SeP>2025-02-14 23:24:00<SeP>2025-02-15 01:12:00<SeP>2025-02-15 03:00:00<SeP>2025-02-15 04:48:00<SeP>2025-02-15 06:36:00<SeP>2025-02-15 08:24:00<SeP>2025-02-15 10:12:00<SeP>2025-02-15 12:00:00<SeP>2025-02-15 13:48:00<SeP>2025-02-15 15:36:00<SeP>2025-02-15 17:24:00<SeP>2025-02-15 19:12:00<SeP>2025-02-15 21:00:00<SeP>2025-02-15 22:48:00<SeP>2025-02-16 00:36:00<SeP>2025-02-16 02:24:00<SeP>2025-02-16 04:12:00<SeP>2025-02-16 06:00:00<SeP>2025-02-16 07:48:00<SeP>2025-02-16 09:36:00<SeP>2025-02-16 11:24:00<SeP>2025-02-16 13:12:00<SeP>2025-02-16 15:00:00<SeP>2025-02-16 16:48:00<SeP>2025-02-16 18:36:00<SeP>2025-02-16 20:24:00<SeP>2025-02-16 22:12:00<SeP>2025-02-17 00:00:00<SeP>2025-02-17 01:48:00<SeP>2025-02-17 03:36:00<SeP>2025-02-17 05:24:00<SeP>2025-02-17 07:12:00<SeP>2025-02-17 09:00:00<SeP>2025-02-17 10:48:00<SeP>2025-02-17 12:36:00<SeP>2025-02-17 14:24:00<SeP>2025-02-17 16:12:00<SeP>2025-02-17 18:00:00<SeP>2025-02-17 19:48:00<SeP>2025-02-17 21:36:00<SeP>2025-02-17 23:24:00<SeP>2025-02-18 01:12:00<SeP>2025-02-18 03:00:00<SeP>2025-02-18 04:48:00<SeP>2025-02-18 06:36:00<SeP>2025-02-18 08:24:00<SeP>2025-02-18 10:12:00<SeP>2025-02-18 12:00:00<SeP>2025-02-18 13:48:00<SeP>2025-02-18 15:36:00<SeP>2025-02-18 17:24:00<SeP>2025-02-18 19:12:00<SeP>2025-02-18 21:00:00<SeP>2025-02-18 22:48:00<SeP>2025-02-19 00:36:00<SeP>2025-02-19 02:24:00<SeP>2025-02-19 04:12:00<SeP>2025-02-19 06:00:00<SeP>2025-02-19 07:48:00<SeP>2025-02-19 09:36:00<SeP>2025-02-19 11:24:00<SeP>2025-02-19 13:12:00<SeP>2025-02-19 15:00:00<SeP>2025-02-19 16:48:00<SeP>2025-02-19 18:36:00<SeP>2025-02-19 20:24:00<SeP>2025-02-19 22:12:00<SeP>2025-02-20 00:00:00<SeP>2025-02-20 01:48:00<SeP>2025-02-20 03:36:00<SeP>2025-02-20 05:24:00<SeP>2025-02-20 07:12:00<SeP>2025-02-20 09:00:00<SeP>2025-02-20 10:48:00<SeP>2025-02-20 12:36:00<SeP>2025-02-20 14:24:00<SeP>2025-02-20 16:12:00<SeP>2025-02-20 18:00:00<SeP>2025-02-20 19:48:00<SeP>2025-02-20 21:36:00<SeP>2025-02-20 23:24:00<SeP>2025-02-21 01:12:00<SeP>2025-02-21 03:00:00<SeP>2025-02-21 04:48:00<SeP>2025-02-21 06:36:00<SeP>2025-02-21 08:24:00<SeP>2025-02-21 10:12:00<SeP>2025-02-21 12:00:00<SeP>2025-02-21 13:48:00<SeP>2025-02-21 15:36:00<SeP>2025-02-21 17:24:00<SeP>2025-02-21 19:12:00<SeP>2025-02-21 21:00:00<SeP>2025-02-21 22:48:00<SeP>2025-02-22 00:36:00<SeP>2025-02-22 02:24:00<SeP>2025-02-22 04:12:00<SeP>2025-02-22 06:00:00<SeP>2025-02-22 07:48:00<SeP>2025-02-22 09:36:00<SeP>2025-02-22 11:24:00<SeP>2025-02-22 13:12:00<SeP>2025-02-22 15:00:00<SeP>2025-02-22 16:48:00<SeP>2025-02-22 18:36:00<SeP>2025-02-22 20:24:00<SeP>2025-02-22 22:12:00<SeP>2025-02-23 00:00:00<SeP>2025-02-23 01:48:00<SeP>2025-02-23 03:36:00<SeP>2025-02-23 05:24:00<SeP>2025-02-23 07:12:00<SeP>2025-02-23 09:00:00<SeP>2025-02-23 10:48:00<SeP>2025-02-23 12:36:00<SeP>2025-02-23 14:24:00<SeP>2025-02-23 16:12:00<SeP>2025-02-23 18:00:00<SeP>2025-02-23 19:48:00<SeP>2025-02-23 21:36:00<SeP>2025-02-23 23:24:00<SeP>2025-02-24 01:12:00<SeP>2025-02-24 03:00:00<SeP>2025-02-24 04:48:00<SeP>2025-02-24 06:36:00<SeP>2025-02-24 08:24:00<SeP>2025-02-24 10:12:00<SeP>2025-02-24 12:00:00<SeP>2025-02-24 13:48:00<SeP>2025-02-24 15:36:00<SeP>2025-02-24 17:24:00<SeP>2025-02-24 19:12:00<SeP>2025-02-24 21:00:00<SeP>2025-02-24 22:48:00<SeP>2025-02-25 00:36:00<SeP>2025-02-25 02:24:00<SeP>2025-02-25 04:12:00<SeP>2025-02-25 06:00:00<SeP>2025-02-25 07:48:00<SeP>2025-02-25 09:36:00<SeP>2025-02-25 11:24:00<SeP>2025-02-25 13:12:00<SeP>2025-02-25 15:00:00<SeP>2025-02-25 16:48:00<SeP>2025-02-25 18:36:00<SeP>2025-02-25 20:24:00<SeP>2025-02-25 22:12:00<SeP>2025-02-26 00:00:00<SeP>2025-02-26 01:48:00<SeP>2025-02-26 03:36:00<SeP>2025-02-26 05:24:00<SeP>2025-02-26 07:12:00<SeP>2025-02-26 09:00:00<SeP>2025-02-26 10:48:00<SeP>2025-02-26 12:36:00<SeP>2025-02-26 14:24:00<SeP>2025-02-26 16:12:00<SeP>2025-02-26 18:00:00<SeP>2025-02-26 19:48:00<SeP>2025-02-26 21:36:00<SeP>2025-02-26 23:24:00<SeP>2025-02-27 01:12:00<SeP>2025-02-27 03:00:00<SeP>2025-02-27 04:48:00<SeP>2025-02-27 06:36:00<SeP>2025-02-27 08:24:00<SeP>2025-02-27 10:12:00<SeP>2025-02-27 12:00:00<SeP>2025-02-27 13:48:00<SeP>2025-02-27 15:36:00<SeP>2025-02-27 17:24:00<SeP>2025-02-27 19:12:00<SeP>2025-02-27 21:00:00<SeP>2025-02-27 22:48:00<SeP>2025-02-28 00:36:00<SeP>2025-02-28 02:24:00<SeP>2025-02-28 04:12:00<SeP>2025-02-28 06:00:00<SeP>2025-02-28 07:48:00<SeP>2025-02-28 09:36:00<SeP>2025-02-28 11:24:00<SeP>2025-02-28 13:12:00<SeP>2025-02-28 15:00:00<SeP>2025-02-28 16:48:00<SeP>2025-02-28 18:36:00<SeP>2025-02-28 20:24:00<SeP>2025-02-28 22:12:00<SeP>2025-03-01 00:00:00<SeP>2025-03-01 01:48:00<SeP>2025-03-01 03:36:00<SeP>2025-03-01 05:24:00<SeP>2025-03-01 07:12:00<SeP>2025-03-01 09:00:00<SeP>2025-03-01 10:48:00<SeP>2025-03-01 12:36:00<SeP>2025-03-01 14:24:00<SeP>2025-03-01 16:12:00<SeP>2025-03-01 18:00:00<SeP>2025-03-01 19:48:00<SeP>2025-03-01 21:36:00<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:12:00<SeP>2025-03-02 03:00:00<SeP>2025-03-02 04:48:00<SeP>2025-03-02 06:36:00<SeP>2025-03-02 08:24:00<SeP>2025-03-02 10:12:00<SeP>2025-03-02 12:00:00<SeP>2025-03-02 13:48:00<SeP>2025-03-02 15:36:00<SeP>2025-03-02 17:24:00<SeP>2025-03-02 19:12:00<SeP>2025-03-02 21:00:00<SeP>2025-03-02 22:48:00<SeP>2025-03-03 00:36:00<SeP>2025-03-03 02:24:00<SeP>2025-03-03 04:12:00<SeP>2025-03-03 06:00:00<SeP>2025-03-03 07:48:00<SeP>2025-03-03 09:36:00<SeP>2025-03-03 11:24:00<SeP>2025-03-03 13:12:00<SeP>2025-03-03 15:00:00<SeP>2025-03-03 16:48:00<SeP>2025-03-03 18:36:00<SeP>2025-03-03 20:24:00<SeP>2025-03-03 22:12:00";
  const itemLabel       = "Ataques";
  const itemData        = "309<SeP>244<SeP>308<SeP>207<SeP>363<SeP>177<SeP>185<SeP>194<SeP>437<SeP>184<SeP>88<SeP>182<SeP>306<SeP>372<SeP>596<SeP>94<SeP>251<SeP>64<SeP>164<SeP>150<SeP>790<SeP>190<SeP>370<SeP>136<SeP>122<SeP>140<SeP>223<SeP>112<SeP>262<SeP>219<SeP>87<SeP>296<SeP>279<SeP>198<SeP>110<SeP>200<SeP>243<SeP>75<SeP>77<SeP>190<SeP>196<SeP>412<SeP>305<SeP>138<SeP>711<SeP>197<SeP>1070<SeP>2489<SeP>2717<SeP>2444<SeP>2263<SeP>2519<SeP>2680<SeP>2715<SeP>2548<SeP>2587<SeP>0<SeP>0<SeP>0<SeP>0<SeP>122<SeP>164<SeP>212<SeP>260<SeP>403<SeP>143<SeP>146<SeP>101<SeP>110<SeP>89<SeP>233<SeP>41<SeP>157<SeP>183<SeP>423<SeP>27<SeP>127<SeP>397<SeP>35<SeP>423<SeP>133<SeP>86<SeP>281<SeP>76<SeP>22<SeP>269<SeP>141<SeP>167<SeP>28<SeP>38<SeP>122<SeP>141<SeP>316<SeP>130<SeP>156<SeP>175<SeP>124<SeP>173<SeP>190<SeP>342<SeP>259<SeP>431<SeP>249<SeP>489<SeP>329<SeP>351<SeP>167<SeP>204<SeP>309<SeP>227<SeP>145<SeP>136<SeP>58<SeP>30<SeP>94<SeP>173<SeP>222<SeP>169<SeP>37<SeP>85<SeP>229<SeP>170<SeP>332<SeP>82<SeP>225<SeP>186<SeP>119<SeP>47<SeP>505<SeP>109<SeP>311<SeP>66<SeP>108<SeP>358<SeP>324<SeP>388<SeP>2824<SeP>3323<SeP>853<SeP>349<SeP>231<SeP>278<SeP>682<SeP>151<SeP>384<SeP>124<SeP>10<SeP>68<SeP>158<SeP>510<SeP>78<SeP>274<SeP>199<SeP>191<SeP>161<SeP>852<SeP>371<SeP>433<SeP>177<SeP>260<SeP>168<SeP>206<SeP>245<SeP>465<SeP>202<SeP>475<SeP>64<SeP>321<SeP>334<SeP>178<SeP>384<SeP>173<SeP>160<SeP>66<SeP>226<SeP>95<SeP>323<SeP>588<SeP>107<SeP>173<SeP>203<SeP>186<SeP>48<SeP>84<SeP>317<SeP>210<SeP>138<SeP>123<SeP>74<SeP>23<SeP>353<SeP>237<SeP>193<SeP>116<SeP>293<SeP>292<SeP>94<SeP>556<SeP>297<SeP>254<SeP>262<SeP>289<SeP>223<SeP>208<SeP>346<SeP>362<SeP>209<SeP>329<SeP>81<SeP>93<SeP>268<SeP>339<SeP>75<SeP>227<SeP>527<SeP>79<SeP>96<SeP>392<SeP>65<SeP>195<SeP>248<SeP>270<SeP>248<SeP>188<SeP>276<SeP>57<SeP>191<SeP>100<SeP>133<SeP>542<SeP>129<SeP>37<SeP>120<SeP>86<SeP>11<SeP>100<SeP>263<SeP>249<SeP>188<SeP>248<SeP>177<SeP>231<SeP>93<SeP>96<SeP>159<SeP>34<SeP>8<SeP>218<SeP>218<SeP>150<SeP>415<SeP>771<SeP>375<SeP>340<SeP>672<SeP>415<SeP>443<SeP>189<SeP>507<SeP>448<SeP>352<SeP>448<SeP>347<SeP>930<SeP>646<SeP>977<SeP>451<SeP>316<SeP>262<SeP>303<SeP>300<SeP>713<SeP>522<SeP>607<SeP>475<SeP>352<SeP>337<SeP>535<SeP>638<SeP>785<SeP>291<SeP>460<SeP>468<SeP>763<SeP>197<SeP>328<SeP>471<SeP>817<SeP>542<SeP>551<SeP>349<SeP>88<SeP>110<SeP>320<SeP>115<SeP>172<SeP>542<SeP>61<SeP>75<SeP>394<SeP>68<SeP>97<SeP>49<SeP>387<SeP>204<SeP>211<SeP>190<SeP>320<SeP>303<SeP>69<SeP>227<SeP>138<SeP>344<SeP>268<SeP>327<SeP>130<SeP>206<SeP>52<SeP>140<SeP>74<SeP>168<SeP>35<SeP>157<SeP>257<SeP>61<SeP>164<SeP>127<SeP>82<SeP>73<SeP>66<SeP>50<SeP>320<SeP>215<SeP>333<SeP>47<SeP>272<SeP>169<SeP>466<SeP>137<SeP>114<SeP>192<SeP>229<SeP>147<SeP>30<SeP>48<SeP>144<SeP>127<SeP>250<SeP>96<SeP>208<SeP>248<SeP>100<SeP>388<SeP>75<SeP>357<SeP>66<SeP>70<SeP>50<SeP>37<SeP>146<SeP>32<SeP>26<SeP>81<SeP>41<SeP>83<SeP>79<SeP>22<SeP>110<SeP>174<SeP>129<SeP>68<SeP>105<SeP>172<SeP>175<SeP>431<SeP>83<SeP>62<SeP>310<SeP>16<SeP>24<SeP>62<SeP>220<SeP>25<SeP>84<SeP>60<SeP>179<SeP>96<SeP>66<SeP>298<SeP>82<SeP>54<SeP>76<SeP>45<SeP>31<SeP>406<SeP>134<SeP>82<SeP>52<SeP>106<SeP>218";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>Pakistan<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Russia<SeP>Hong Kong";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "23609<SeP>21638<SeP>13892<SeP>13666<SeP>9065<SeP>6248<SeP>5503<SeP>4854<SeP>4802<SeP>4489";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Taiwan<SeP>South Korea<SeP>Germany<SeP>Singapore<SeP>Sweden";
  const itemLabel   = "Scans";
  const itemData    = "15663<SeP>2989<SeP>2315<SeP>2226<SeP>1393<SeP>1011<SeP>733<SeP>628<SeP>445<SeP>433";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Pakistan<SeP>Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Russia";
  const itemLabel   = "Attacks";
  const itemData    = "21382<SeP>12655<SeP>10903<SeP>8437<SeP>7946<SeP>4770<SeP>4756<SeP>4146<SeP>3933<SeP>3409";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "38264<SeP>3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>16276<SeP>136052<SeP>4837<SeP>47890";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "21324<SeP>12068<SeP>10719<SeP>8732<SeP>6226<SeP>4354<SeP>3862<SeP>3390<SeP>3251<SeP>2952";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>3462<SeP>4811<SeP>9269<SeP>4766<SeP>14061<SeP>4808";
  const itemLabel   = "Scans";
  const itemData    = "8752<SeP>2775<SeP>1894<SeP>1313<SeP>896<SeP>731<SeP>655<SeP>616<SeP>578<SeP>487";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "38264<SeP>3462<SeP>14061<SeP>44486<SeP>4766<SeP>16276<SeP>136052<SeP>47890<SeP>56971<SeP>4134";
  const itemLabel   = "Atacks";
  const itemData    = "21323<SeP>11172<SeP>8154<SeP>6225<SeP>3738<SeP>3702<SeP>3389<SeP>2679<SeP>2476<SeP>1967";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>Pakistan<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Russia<SeP>Hong Kong";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "23609<SeP>21638<SeP>13892<SeP>13666<SeP>9065<SeP>6248<SeP>5503<SeP>4854<SeP>4802<SeP>4489";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Taiwan<SeP>South Korea<SeP>Germany<SeP>Singapore<SeP>Sweden";
  const itemLabel   = "Escaneos";
  const itemData    = "15663<SeP>2989<SeP>2315<SeP>2226<SeP>1393<SeP>1011<SeP>733<SeP>628<SeP>445<SeP>433";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Pakistan<SeP>Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Russia";
  const itemLabel   = "Ataques";
  const itemData    = "21382<SeP>12655<SeP>10903<SeP>8437<SeP>7946<SeP>4770<SeP>4756<SeP>4146<SeP>3933<SeP>3409";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "38264<SeP>3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>16276<SeP>136052<SeP>4837<SeP>47890";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "21324<SeP>12068<SeP>10719<SeP>8732<SeP>6226<SeP>4354<SeP>3862<SeP>3390<SeP>3251<SeP>2952";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>3462<SeP>4811<SeP>9269<SeP>4766<SeP>14061<SeP>4808";
  const itemLabel   = "Escaneos";
  const itemData    = "8752<SeP>2775<SeP>1894<SeP>1313<SeP>896<SeP>731<SeP>655<SeP>616<SeP>578<SeP>487";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "38264<SeP>3462<SeP>14061<SeP>44486<SeP>4766<SeP>16276<SeP>136052<SeP>47890<SeP>56971<SeP>4134";
  const itemLabel   = "Ataques";
  const itemData    = "21323<SeP>11172<SeP>8154<SeP>6225<SeP>3738<SeP>3702<SeP>3389<SeP>2679<SeP>2476<SeP>1967";
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
