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
  document.getElementById("last-updated").innerHTML = "2025-2-17";
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
  const metricData    = "35860";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "8379";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "27481";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "1971";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "22140";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "5341";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "904";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "624";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "4717";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "312";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "35860";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "8379";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "27481";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "1971";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "22140";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "5341";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "904";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "624";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "4717";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "312";
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
  const incomingData = "35860<SeP>8379<SeP>27481<SeP>1971";
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
  const incomingData = "27481<SeP>22140<SeP>5341<SeP>904";
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
  const incomingData = "5341<SeP>624<SeP>4717<SeP>312";
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
  const incomingData = "418<SeP>158<SeP>260";
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
  const incomingData = "36<SeP>4<SeP>32<SeP>8";
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
  const incomingData = "35860<SeP>8379<SeP>27481<SeP>1971";
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
  const incomingData = "27481<SeP>22140<SeP>5341<SeP>904";
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
  const incomingData = "5341<SeP>624<SeP>4717<SeP>312";
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
  const incomingData = "418<SeP>158<SeP>260";
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
  const incomingData = "36<SeP>4<SeP>32<SeP>8";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>95.182.115.45</span>)<SeP>IP03 (<span class=blur>37.44.238.88</span>)<SeP>IP04 (<span class=blur>104.252.127.63</span>)<SeP>IP06 (<span class=blur>109.206.236.140</span>)<SeP>IP05 (<span class=blur>46.8.228.164</span>)<SeP>IP07 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>2.57.122.193</span>)<SeP>IP10 (<span class=blur>47.76.34.233</span>)<SeP>IP09 (<span class=blur>8.219.98.110</span>)";
  const column2Data  = "AS44486<SeP>AS56971<SeP>AS34534<SeP>AS56971<SeP>AS56971<SeP>AS56971<SeP>AS207566<SeP>AS47890<SeP>AS45102<SeP>AS45102";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore";
  const column4Data  = "6226<SeP>431<SeP>384<SeP>383<SeP>382<SeP>382<SeP>362<SeP>285<SeP>248<SeP>248";
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
  const column1Data  = "IP07 (<span class=blur>185.7.214.180</span>)<SeP>IP12 (<span class=blur>92.255.85.35</span>)<SeP>IP13 (<span class=blur>68.104.35.104</span>)<SeP>IP15 (<span class=blur>218.92.0.233</span>)<SeP>IP14 (<span class=blur>218.92.0.217</span>)<SeP>IP16 (<span class=blur>218.92.0.230</span>)<SeP>IP17 (<span class=blur>218.92.0.114</span>)<SeP>IP18 (<span class=blur>218.92.0.221</span>)<SeP>IP19 (<span class=blur>218.92.0.220</span>)<SeP>IP20 (<span class=blur>218.92.0.227</span>)";
  const column2Data  = "AS207566<SeP>AS207566<SeP>AS22773<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data  = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "181<SeP>172<SeP>118<SeP>116<SeP>116<SeP>112<SeP>110<SeP>102<SeP>101<SeP>100";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>95.182.115.45</span>)<SeP>IP04 (<span class=blur>104.252.127.63</span>)<SeP>IP06 (<span class=blur>109.206.236.140</span>)<SeP>IP05 (<span class=blur>46.8.228.164</span>)<SeP>IP03 (<span class=blur>37.44.238.88</span>)<SeP>IP08 (<span class=blur>2.57.122.193</span>)<SeP>IP10 (<span class=blur>47.76.34.233</span>)<SeP>IP09 (<span class=blur>8.219.98.110</span>)<SeP>IP11 (<span class=blur>80.94.95.112</span>)";
  const column2Data  = "AS44486<SeP>AS56971<SeP>AS56971<SeP>AS56971<SeP>AS56971<SeP>AS34534<SeP>AS47890<SeP>AS45102<SeP>AS45102<SeP>AS204428";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania";
  const column4Data  = "6225<SeP>430<SeP>382<SeP>381<SeP>381<SeP>380<SeP>284<SeP>247<SeP>247<SeP>191";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>95.182.115.45</span>)<SeP>IP03 (<span class=blur>37.44.238.88</span>)<SeP>IP04 (<span class=blur>104.252.127.63</span>)<SeP>IP06 (<span class=blur>109.206.236.140</span>)<SeP>IP05 (<span class=blur>46.8.228.164</span>)<SeP>IP07 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>2.57.122.193</span>)<SeP>IP10 (<span class=blur>47.76.34.233</span>)<SeP>IP09 (<span class=blur>8.219.98.110</span>)";
  const column2Data   = "AS44486<SeP>AS56971<SeP>AS34534<SeP>AS56971<SeP>AS56971<SeP>AS56971<SeP>AS207566<SeP>AS47890<SeP>AS45102<SeP>AS45102";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6226<SeP>431<SeP>384<SeP>383<SeP>382<SeP>382<SeP>362<SeP>285<SeP>248<SeP>248";
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
  const column1Data   = "IP07 (<span class=blur>185.7.214.180</span>)<SeP>IP12 (<span class=blur>92.255.85.35</span>)<SeP>IP13 (<span class=blur>68.104.35.104</span>)<SeP>IP15 (<span class=blur>218.92.0.233</span>)<SeP>IP14 (<span class=blur>218.92.0.217</span>)<SeP>IP16 (<span class=blur>218.92.0.230</span>)<SeP>IP17 (<span class=blur>218.92.0.114</span>)<SeP>IP18 (<span class=blur>218.92.0.221</span>)<SeP>IP19 (<span class=blur>218.92.0.220</span>)<SeP>IP20 (<span class=blur>218.92.0.227</span>)";
  const column2Data   = "AS207566<SeP>AS207566<SeP>AS22773<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data   = "<span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "181<SeP>172<SeP>118<SeP>116<SeP>116<SeP>112<SeP>110<SeP>102<SeP>101<SeP>100";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>95.182.115.45</span>)<SeP>IP04 (<span class=blur>104.252.127.63</span>)<SeP>IP06 (<span class=blur>109.206.236.140</span>)<SeP>IP05 (<span class=blur>46.8.228.164</span>)<SeP>IP03 (<span class=blur>37.44.238.88</span>)<SeP>IP08 (<span class=blur>2.57.122.193</span>)<SeP>IP10 (<span class=blur>47.76.34.233</span>)<SeP>IP09 (<span class=blur>8.219.98.110</span>)<SeP>IP11 (<span class=blur>80.94.95.112</span>)";
  const column2Data   = "AS44486<SeP>AS56971<SeP>AS56971<SeP>AS56971<SeP>AS56971<SeP>AS34534<SeP>AS47890<SeP>AS45102<SeP>AS45102<SeP>AS204428";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-fi\u0022></span>\u00a0Finland<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6225<SeP>430<SeP>382<SeP>381<SeP>381<SeP>380<SeP>284<SeP>247<SeP>247<SeP>191";
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
  const column12Data  = "root admin<SeP>345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>admin CenturyL1nk<SeP>root  <SeP>admin hp.com<SeP>root root<SeP>root smcadmin<SeP>admin admin1<SeP>root helpme";
  const column3Data   = "237<SeP>147<SeP>116<SeP>66<SeP>65<SeP>64<SeP>45<SeP>44<SeP>44<SeP>43";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>765009220fa2537e6ad968bafb8ba8d36ae215c701f474265d289920852b441d<SeP>240977ca19e7257419d648492ce6f39f381fe39c83d0b1d7e2a0ec69d28b1030<SeP>e4395c3b2181ada6b5ec154bcdf6cbe7e80dd4f6538acf4a371c3a4f103d588e<SeP>bfe0e38c968bb01865e9c410847bf1d9634e5c66afba9138b5bbd35755df9463<SeP>e0229362bbabffbe21a57ecc4f66d6f01dd934cc00081ec713072b46eb081cc9<SeP>c5345f6764c0236a13a263cb0d06bafa9bd25e3011d1c65fa2112f86b8afd97e<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73<SeP>4399d2ee79ecb5deba7f77bb2b21aa5f302115624d0ac0ae2a52543ab183c82b<SeP>09dffb2efb486de759580a10025d308216623b3a3588cc10f6d128416f8f5884";
  const column2Data  = "151<SeP>10<SeP>10<SeP>9<SeP>8<SeP>5<SeP>5<SeP>4<SeP>4<SeP>4";
  let   column3Data  = "redir<SeP>download<SeP>download<SeP>download<SeP>download<SeP>download<SeP>download<SeP>upload<SeP>download<SeP>download";
  const column4Data  = "NA<SeP>malicious<SeP>malicious<SeP>malicious<SeP>malicious<SeP>malicious<SeP>NA<SeP>NA<SeP>harmless<SeP>NA";
  const listLocale   = "en-US";

  column3Data = column3Data.replace(/redir/g, "redirection");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsEnglish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Malware Distribution Site";
  const column2Label = "Count";
  const column1Data  = "http://37.44.238.88<SeP>http://194.85.251.8<SeP>http://66.63.187.69<SeP>tftp://199.195.248.181<SeP>http://83.23.65.68<SeP>http://45.149.241.217<SeP>http://199.195.248.181<SeP>http://193.143.1.7";
  const column2Data  = "47<SeP>12<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "30711<SeP>5149";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "root admin<SeP>345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>admin CenturyL1nk<SeP>root  <SeP>admin hp.com<SeP>root root<SeP>root smcadmin<SeP>admin admin1<SeP>root helpme";
  const column3Data   = "237<SeP>147<SeP>116<SeP>66<SeP>65<SeP>64<SeP>45<SeP>44<SeP>44<SeP>43";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>765009220fa2537e6ad968bafb8ba8d36ae215c701f474265d289920852b441d<SeP>240977ca19e7257419d648492ce6f39f381fe39c83d0b1d7e2a0ec69d28b1030<SeP>e4395c3b2181ada6b5ec154bcdf6cbe7e80dd4f6538acf4a371c3a4f103d588e<SeP>bfe0e38c968bb01865e9c410847bf1d9634e5c66afba9138b5bbd35755df9463<SeP>e0229362bbabffbe21a57ecc4f66d6f01dd934cc00081ec713072b46eb081cc9<SeP>c5345f6764c0236a13a263cb0d06bafa9bd25e3011d1c65fa2112f86b8afd97e<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73<SeP>4399d2ee79ecb5deba7f77bb2b21aa5f302115624d0ac0ae2a52543ab183c82b<SeP>09dffb2efb486de759580a10025d308216623b3a3588cc10f6d128416f8f5884";
  const column2Data  = "151<SeP>10<SeP>10<SeP>9<SeP>8<SeP>5<SeP>5<SeP>4<SeP>4<SeP>4";
  let   column3Data  = "redir<SeP>download<SeP>download<SeP>download<SeP>download<SeP>download<SeP>download<SeP>upload<SeP>download<SeP>download";
  let   column4Data  = "NA<SeP>malicious<SeP>malicious<SeP>malicious<SeP>malicious<SeP>malicious<SeP>NA<SeP>NA<SeP>harmless<SeP>NA";
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
  const column1Data  = "http://37.44.238.88<SeP>http://194.85.251.8<SeP>http://66.63.187.69<SeP>tftp://199.195.248.181<SeP>http://83.23.65.68<SeP>http://45.149.241.217<SeP>http://199.195.248.181<SeP>http://193.143.1.7";
  const column2Data  = "47<SeP>12<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "30711<SeP>5149";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-17";

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
      data: "/scripts/hpdata/map-week-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "traffic between 2025-02-10 and 2025-02-16"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6309,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "/scripts/hpdata/map-week-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "scans between 2025-02-10 and 2025-02-16"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          3875,32,
          6309,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "/scripts/hpdata/map-week-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "attacks between 2025-02-10 and 2025-02-16"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6253,50,
          6309,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-17";

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
      data: "/scripts/hpdata/map-week-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "tráfico entre 2025-02-10 y 2025-02-16"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6309,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "/scripts/hpdata/map-week-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "escaneos entre 2025-02-10 y 2025-02-16"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          3875,32,
          6309,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "/scripts/hpdata/map-week-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "ataques entre 2025-02-10 y 2025-02-16"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6253,50,
          6309,50
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
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 00:25:12<SeP>2025-02-10 00:50:24<SeP>2025-02-10 01:15:36<SeP>2025-02-10 01:40:48<SeP>2025-02-10 02:06:00<SeP>2025-02-10 02:31:12<SeP>2025-02-10 02:56:24<SeP>2025-02-10 03:21:36<SeP>2025-02-10 03:46:48<SeP>2025-02-10 04:12:00<SeP>2025-02-10 04:37:12<SeP>2025-02-10 05:02:24<SeP>2025-02-10 05:27:36<SeP>2025-02-10 05:52:48<SeP>2025-02-10 06:18:00<SeP>2025-02-10 06:43:12<SeP>2025-02-10 07:08:24<SeP>2025-02-10 07:33:36<SeP>2025-02-10 07:58:48<SeP>2025-02-10 08:24:00<SeP>2025-02-10 08:49:12<SeP>2025-02-10 09:14:24<SeP>2025-02-10 09:39:36<SeP>2025-02-10 10:04:48<SeP>2025-02-10 10:30:00<SeP>2025-02-10 10:55:12<SeP>2025-02-10 11:20:24<SeP>2025-02-10 11:45:36<SeP>2025-02-10 12:10:48<SeP>2025-02-10 12:36:00<SeP>2025-02-10 13:01:12<SeP>2025-02-10 13:26:24<SeP>2025-02-10 13:51:36<SeP>2025-02-10 14:16:48<SeP>2025-02-10 14:42:00<SeP>2025-02-10 15:07:12<SeP>2025-02-10 15:32:24<SeP>2025-02-10 15:57:36<SeP>2025-02-10 16:22:48<SeP>2025-02-10 16:48:00<SeP>2025-02-10 17:13:12<SeP>2025-02-10 17:38:24<SeP>2025-02-10 18:03:36<SeP>2025-02-10 18:28:48<SeP>2025-02-10 18:54:00<SeP>2025-02-10 19:19:12<SeP>2025-02-10 19:44:24<SeP>2025-02-10 20:09:36<SeP>2025-02-10 20:34:48<SeP>2025-02-10 21:00:00<SeP>2025-02-10 21:25:12<SeP>2025-02-10 21:50:24<SeP>2025-02-10 22:15:36<SeP>2025-02-10 22:40:48<SeP>2025-02-10 23:06:00<SeP>2025-02-10 23:31:12<SeP>2025-02-10 23:56:24<SeP>2025-02-11 00:21:36<SeP>2025-02-11 00:46:48<SeP>2025-02-11 01:12:00<SeP>2025-02-11 01:37:12<SeP>2025-02-11 02:02:24<SeP>2025-02-11 02:27:36<SeP>2025-02-11 02:52:48<SeP>2025-02-11 03:18:00<SeP>2025-02-11 03:43:12<SeP>2025-02-11 04:08:24<SeP>2025-02-11 04:33:36<SeP>2025-02-11 04:58:48<SeP>2025-02-11 05:24:00<SeP>2025-02-11 05:49:12<SeP>2025-02-11 06:14:24<SeP>2025-02-11 06:39:36<SeP>2025-02-11 07:04:48<SeP>2025-02-11 07:30:00<SeP>2025-02-11 07:55:12<SeP>2025-02-11 08:20:24<SeP>2025-02-11 08:45:36<SeP>2025-02-11 09:10:48<SeP>2025-02-11 09:36:00<SeP>2025-02-11 10:01:12<SeP>2025-02-11 10:26:24<SeP>2025-02-11 10:51:36<SeP>2025-02-11 11:16:48<SeP>2025-02-11 11:42:00<SeP>2025-02-11 12:07:12<SeP>2025-02-11 12:32:24<SeP>2025-02-11 12:57:36<SeP>2025-02-11 13:22:48<SeP>2025-02-11 13:48:00<SeP>2025-02-11 14:13:12<SeP>2025-02-11 14:38:24<SeP>2025-02-11 15:03:36<SeP>2025-02-11 15:28:48<SeP>2025-02-11 15:54:00<SeP>2025-02-11 16:19:12<SeP>2025-02-11 16:44:24<SeP>2025-02-11 17:09:36<SeP>2025-02-11 17:34:48<SeP>2025-02-11 18:00:00<SeP>2025-02-11 18:25:12<SeP>2025-02-11 18:50:24<SeP>2025-02-11 19:15:36<SeP>2025-02-11 19:40:48<SeP>2025-02-11 20:06:00<SeP>2025-02-11 20:31:12<SeP>2025-02-11 20:56:24<SeP>2025-02-11 21:21:36<SeP>2025-02-11 21:46:48<SeP>2025-02-11 22:12:00<SeP>2025-02-11 22:37:12<SeP>2025-02-11 23:02:24<SeP>2025-02-11 23:27:36<SeP>2025-02-11 23:52:48<SeP>2025-02-12 00:18:00<SeP>2025-02-12 00:43:12<SeP>2025-02-12 01:08:24<SeP>2025-02-12 01:33:36<SeP>2025-02-12 01:58:48<SeP>2025-02-12 02:24:00<SeP>2025-02-12 02:49:12<SeP>2025-02-12 03:14:24<SeP>2025-02-12 03:39:36<SeP>2025-02-12 04:04:48<SeP>2025-02-12 04:30:00<SeP>2025-02-12 04:55:12<SeP>2025-02-12 05:20:24<SeP>2025-02-12 05:45:36<SeP>2025-02-12 06:10:48<SeP>2025-02-12 06:36:00<SeP>2025-02-12 07:01:12<SeP>2025-02-12 07:26:24<SeP>2025-02-12 07:51:36<SeP>2025-02-12 08:16:48<SeP>2025-02-12 08:42:00<SeP>2025-02-12 09:07:12<SeP>2025-02-12 09:32:24<SeP>2025-02-12 09:57:36<SeP>2025-02-12 10:22:48<SeP>2025-02-12 10:48:00<SeP>2025-02-12 11:13:12<SeP>2025-02-12 11:38:24<SeP>2025-02-12 12:03:36<SeP>2025-02-12 12:28:48<SeP>2025-02-12 12:54:00<SeP>2025-02-12 13:19:12<SeP>2025-02-12 13:44:24<SeP>2025-02-12 14:09:36<SeP>2025-02-12 14:34:48<SeP>2025-02-12 15:00:00<SeP>2025-02-12 15:25:12<SeP>2025-02-12 15:50:24<SeP>2025-02-12 16:15:36<SeP>2025-02-12 16:40:48<SeP>2025-02-12 17:06:00<SeP>2025-02-12 17:31:12<SeP>2025-02-12 17:56:24<SeP>2025-02-12 18:21:36<SeP>2025-02-12 18:46:48<SeP>2025-02-12 19:12:00<SeP>2025-02-12 19:37:12<SeP>2025-02-12 20:02:24<SeP>2025-02-12 20:27:36<SeP>2025-02-12 20:52:48<SeP>2025-02-12 21:18:00<SeP>2025-02-12 21:43:12<SeP>2025-02-12 22:08:24<SeP>2025-02-12 22:33:36<SeP>2025-02-12 22:58:48<SeP>2025-02-12 23:24:00<SeP>2025-02-12 23:49:12<SeP>2025-02-13 00:14:24<SeP>2025-02-13 00:39:36<SeP>2025-02-13 01:04:48<SeP>2025-02-13 01:30:00<SeP>2025-02-13 01:55:12<SeP>2025-02-13 02:20:24<SeP>2025-02-13 02:45:36<SeP>2025-02-13 03:10:48<SeP>2025-02-13 03:36:00<SeP>2025-02-13 04:01:12<SeP>2025-02-13 04:26:24<SeP>2025-02-13 04:51:36<SeP>2025-02-13 05:16:48<SeP>2025-02-13 05:42:00<SeP>2025-02-13 06:07:12<SeP>2025-02-13 06:32:24<SeP>2025-02-13 06:57:36<SeP>2025-02-13 07:22:48<SeP>2025-02-13 07:48:00<SeP>2025-02-13 08:13:12<SeP>2025-02-13 08:38:24<SeP>2025-02-13 09:03:36<SeP>2025-02-13 09:28:48<SeP>2025-02-13 09:54:00<SeP>2025-02-13 10:19:12<SeP>2025-02-13 10:44:24<SeP>2025-02-13 11:09:36<SeP>2025-02-13 11:34:48<SeP>2025-02-13 12:00:00<SeP>2025-02-13 12:25:12<SeP>2025-02-13 12:50:24<SeP>2025-02-13 13:15:36<SeP>2025-02-13 13:40:48<SeP>2025-02-13 14:06:00<SeP>2025-02-13 14:31:12<SeP>2025-02-13 14:56:24<SeP>2025-02-13 15:21:36<SeP>2025-02-13 15:46:48<SeP>2025-02-13 16:12:00<SeP>2025-02-13 16:37:12<SeP>2025-02-13 17:02:24<SeP>2025-02-13 17:27:36<SeP>2025-02-13 17:52:48<SeP>2025-02-13 18:18:00<SeP>2025-02-13 18:43:12<SeP>2025-02-13 19:08:24<SeP>2025-02-13 19:33:36<SeP>2025-02-13 19:58:48<SeP>2025-02-13 20:24:00<SeP>2025-02-13 20:49:12<SeP>2025-02-13 21:14:24<SeP>2025-02-13 21:39:36<SeP>2025-02-13 22:04:48<SeP>2025-02-13 22:30:00<SeP>2025-02-13 22:55:12<SeP>2025-02-13 23:20:24<SeP>2025-02-13 23:45:36<SeP>2025-02-14 00:10:48<SeP>2025-02-14 00:36:00<SeP>2025-02-14 01:01:12<SeP>2025-02-14 01:26:24<SeP>2025-02-14 01:51:36<SeP>2025-02-14 02:16:48<SeP>2025-02-14 02:42:00<SeP>2025-02-14 03:07:12<SeP>2025-02-14 03:32:24<SeP>2025-02-14 03:57:36<SeP>2025-02-14 04:22:48<SeP>2025-02-14 04:48:00<SeP>2025-02-14 05:13:12<SeP>2025-02-14 05:38:24<SeP>2025-02-14 06:03:36<SeP>2025-02-14 06:28:48<SeP>2025-02-14 06:54:00<SeP>2025-02-14 07:19:12<SeP>2025-02-14 07:44:24<SeP>2025-02-14 08:09:36<SeP>2025-02-14 08:34:48<SeP>2025-02-14 09:00:00<SeP>2025-02-14 09:25:12<SeP>2025-02-14 09:50:24<SeP>2025-02-14 10:15:36<SeP>2025-02-14 10:40:48<SeP>2025-02-14 11:06:00<SeP>2025-02-14 11:31:12<SeP>2025-02-14 11:56:24<SeP>2025-02-14 12:21:36<SeP>2025-02-14 12:46:48<SeP>2025-02-14 13:12:00<SeP>2025-02-14 13:37:12<SeP>2025-02-14 14:02:24<SeP>2025-02-14 14:27:36<SeP>2025-02-14 14:52:48<SeP>2025-02-14 15:18:00<SeP>2025-02-14 15:43:12<SeP>2025-02-14 16:08:24<SeP>2025-02-14 16:33:36<SeP>2025-02-14 16:58:48<SeP>2025-02-14 17:24:00<SeP>2025-02-14 17:49:12<SeP>2025-02-14 18:14:24<SeP>2025-02-14 18:39:36<SeP>2025-02-14 19:04:48<SeP>2025-02-14 19:30:00<SeP>2025-02-14 19:55:12<SeP>2025-02-14 20:20:24<SeP>2025-02-14 20:45:36<SeP>2025-02-14 21:10:48<SeP>2025-02-14 21:36:00<SeP>2025-02-14 22:01:12<SeP>2025-02-14 22:26:24<SeP>2025-02-14 22:51:36<SeP>2025-02-14 23:16:48<SeP>2025-02-14 23:42:00<SeP>2025-02-15 00:07:12<SeP>2025-02-15 00:32:24<SeP>2025-02-15 00:57:36<SeP>2025-02-15 01:22:48<SeP>2025-02-15 01:48:00<SeP>2025-02-15 02:13:12<SeP>2025-02-15 02:38:24<SeP>2025-02-15 03:03:36<SeP>2025-02-15 03:28:48<SeP>2025-02-15 03:54:00<SeP>2025-02-15 04:19:12<SeP>2025-02-15 04:44:24<SeP>2025-02-15 05:09:36<SeP>2025-02-15 05:34:48<SeP>2025-02-15 06:00:00<SeP>2025-02-15 06:25:12<SeP>2025-02-15 06:50:24<SeP>2025-02-15 07:15:36<SeP>2025-02-15 07:40:48<SeP>2025-02-15 08:06:00<SeP>2025-02-15 08:31:12<SeP>2025-02-15 08:56:24<SeP>2025-02-15 09:21:36<SeP>2025-02-15 09:46:48<SeP>2025-02-15 10:12:00<SeP>2025-02-15 10:37:12<SeP>2025-02-15 11:02:24<SeP>2025-02-15 11:27:36<SeP>2025-02-15 11:52:48<SeP>2025-02-15 12:18:00<SeP>2025-02-15 12:43:12<SeP>2025-02-15 13:08:24<SeP>2025-02-15 13:33:36<SeP>2025-02-15 13:58:48<SeP>2025-02-15 14:24:00<SeP>2025-02-15 14:49:12<SeP>2025-02-15 15:14:24<SeP>2025-02-15 15:39:36<SeP>2025-02-15 16:04:48<SeP>2025-02-15 16:30:00<SeP>2025-02-15 16:55:12<SeP>2025-02-15 17:20:24<SeP>2025-02-15 17:45:36<SeP>2025-02-15 18:10:48<SeP>2025-02-15 18:36:00<SeP>2025-02-15 19:01:12<SeP>2025-02-15 19:26:24<SeP>2025-02-15 19:51:36<SeP>2025-02-15 20:16:48<SeP>2025-02-15 20:42:00<SeP>2025-02-15 21:07:12<SeP>2025-02-15 21:32:24<SeP>2025-02-15 21:57:36<SeP>2025-02-15 22:22:48<SeP>2025-02-15 22:48:00<SeP>2025-02-15 23:13:12<SeP>2025-02-15 23:38:24<SeP>2025-02-16 00:03:36<SeP>2025-02-16 00:28:48<SeP>2025-02-16 00:54:00<SeP>2025-02-16 01:19:12<SeP>2025-02-16 01:44:24<SeP>2025-02-16 02:09:36<SeP>2025-02-16 02:34:48<SeP>2025-02-16 03:00:00<SeP>2025-02-16 03:25:12<SeP>2025-02-16 03:50:24<SeP>2025-02-16 04:15:36<SeP>2025-02-16 04:40:48<SeP>2025-02-16 05:06:00<SeP>2025-02-16 05:31:12<SeP>2025-02-16 05:56:24<SeP>2025-02-16 06:21:36<SeP>2025-02-16 06:46:48<SeP>2025-02-16 07:12:00<SeP>2025-02-16 07:37:12<SeP>2025-02-16 08:02:24<SeP>2025-02-16 08:27:36<SeP>2025-02-16 08:52:48<SeP>2025-02-16 09:18:00<SeP>2025-02-16 09:43:12<SeP>2025-02-16 10:08:24<SeP>2025-02-16 10:33:36<SeP>2025-02-16 10:58:48<SeP>2025-02-16 11:24:00<SeP>2025-02-16 11:49:12<SeP>2025-02-16 12:14:24<SeP>2025-02-16 12:39:36<SeP>2025-02-16 13:04:48<SeP>2025-02-16 13:30:00<SeP>2025-02-16 13:55:12<SeP>2025-02-16 14:20:24<SeP>2025-02-16 14:45:36<SeP>2025-02-16 15:10:48<SeP>2025-02-16 15:36:00<SeP>2025-02-16 16:01:12<SeP>2025-02-16 16:26:24<SeP>2025-02-16 16:51:36<SeP>2025-02-16 17:16:48<SeP>2025-02-16 17:42:00<SeP>2025-02-16 18:07:12<SeP>2025-02-16 18:32:24<SeP>2025-02-16 18:57:36<SeP>2025-02-16 19:22:48<SeP>2025-02-16 19:48:00<SeP>2025-02-16 20:13:12<SeP>2025-02-16 20:38:24<SeP>2025-02-16 21:03:36<SeP>2025-02-16 21:28:48<SeP>2025-02-16 21:54:00<SeP>2025-02-16 22:19:12<SeP>2025-02-16 22:44:24<SeP>2025-02-16 23:09:36<SeP>2025-02-16 23:34:48";
  const item1Label       = "Scans";
  const item1Data        = "10<SeP>25<SeP>5<SeP>2<SeP>21<SeP>37<SeP>35<SeP>27<SeP>23<SeP>13<SeP>12<SeP>21<SeP>12<SeP>35<SeP>10<SeP>13<SeP>9<SeP>20<SeP>41<SeP>6<SeP>41<SeP>19<SeP>13<SeP>38<SeP>14<SeP>10<SeP>11<SeP>22<SeP>18<SeP>20<SeP>15<SeP>27<SeP>6<SeP>31<SeP>13<SeP>12<SeP>14<SeP>35<SeP>18<SeP>16<SeP>20<SeP>13<SeP>9<SeP>22<SeP>10<SeP>20<SeP>35<SeP>13<SeP>11<SeP>7<SeP>110<SeP>15<SeP>6<SeP>29<SeP>4<SeP>8<SeP>21<SeP>15<SeP>4<SeP>17<SeP>8<SeP>4<SeP>32<SeP>13<SeP>28<SeP>15<SeP>27<SeP>30<SeP>15<SeP>11<SeP>19<SeP>31<SeP>33<SeP>24<SeP>25<SeP>93<SeP>17<SeP>57<SeP>16<SeP>25<SeP>11<SeP>14<SeP>28<SeP>11<SeP>23<SeP>16<SeP>73<SeP>8<SeP>13<SeP>47<SeP>18<SeP>14<SeP>22<SeP>43<SeP>29<SeP>25<SeP>24<SeP>15<SeP>22<SeP>25<SeP>17<SeP>13<SeP>36<SeP>71<SeP>55<SeP>11<SeP>11<SeP>29<SeP>3<SeP>6<SeP>3<SeP>12<SeP>14<SeP>47<SeP>42<SeP>10<SeP>11<SeP>11<SeP>4<SeP>12<SeP>34<SeP>27<SeP>15<SeP>16<SeP>11<SeP>12<SeP>12<SeP>16<SeP>41<SeP>45<SeP>13<SeP>10<SeP>11<SeP>17<SeP>36<SeP>13<SeP>17<SeP>13<SeP>14<SeP>12<SeP>10<SeP>14<SeP>13<SeP>13<SeP>22<SeP>14<SeP>25<SeP>33<SeP>2<SeP>15<SeP>13<SeP>17<SeP>12<SeP>11<SeP>14<SeP>16<SeP>33<SeP>41<SeP>15<SeP>15<SeP>17<SeP>37<SeP>125<SeP>7<SeP>1<SeP>6<SeP>5<SeP>22<SeP>18<SeP>23<SeP>22<SeP>37<SeP>13<SeP>49<SeP>33<SeP>11<SeP>7<SeP>44<SeP>29<SeP>15<SeP>16<SeP>38<SeP>46<SeP>15<SeP>13<SeP>8<SeP>7<SeP>10<SeP>11<SeP>20<SeP>18<SeP>15<SeP>13<SeP>32<SeP>13<SeP>22<SeP>13<SeP>15<SeP>21<SeP>49<SeP>41<SeP>58<SeP>14<SeP>20<SeP>13<SeP>13<SeP>15<SeP>43<SeP>56<SeP>6<SeP>0<SeP>8<SeP>4<SeP>10<SeP>10<SeP>50<SeP>1<SeP>1<SeP>47<SeP>10<SeP>56<SeP>18<SeP>10<SeP>12<SeP>10<SeP>13<SeP>9<SeP>39<SeP>11<SeP>13<SeP>14<SeP>11<SeP>36<SeP>16<SeP>10<SeP>36<SeP>21<SeP>13<SeP>13<SeP>23<SeP>20<SeP>34<SeP>31<SeP>39<SeP>39<SeP>20<SeP>40<SeP>12<SeP>24<SeP>40<SeP>72<SeP>40<SeP>21<SeP>45<SeP>16<SeP>13<SeP>13<SeP>10<SeP>9<SeP>11<SeP>13<SeP>25<SeP>9<SeP>1<SeP>8<SeP>25<SeP>22<SeP>3<SeP>12<SeP>45<SeP>26<SeP>4<SeP>3<SeP>2<SeP>22<SeP>17<SeP>31<SeP>14<SeP>16<SeP>36<SeP>36<SeP>17<SeP>10<SeP>21<SeP>29<SeP>42<SeP>12<SeP>10<SeP>11<SeP>14<SeP>34<SeP>14<SeP>12<SeP>18<SeP>21<SeP>16<SeP>11<SeP>12<SeP>12<SeP>41<SeP>34<SeP>49<SeP>24<SeP>12<SeP>79<SeP>54<SeP>18<SeP>11<SeP>38<SeP>64<SeP>9<SeP>11<SeP>19<SeP>62<SeP>9<SeP>11<SeP>14<SeP>14<SeP>42<SeP>6<SeP>2<SeP>2<SeP>2<SeP>23<SeP>6<SeP>6<SeP>6<SeP>27<SeP>35<SeP>8<SeP>18<SeP>4<SeP>6<SeP>14<SeP>51<SeP>25<SeP>30<SeP>21<SeP>36<SeP>12<SeP>7<SeP>37<SeP>12<SeP>17<SeP>16<SeP>8<SeP>15<SeP>7<SeP>13<SeP>13<SeP>14<SeP>32<SeP>13<SeP>17<SeP>10<SeP>18<SeP>8<SeP>17<SeP>12<SeP>16<SeP>70<SeP>36<SeP>14<SeP>19<SeP>14<SeP>18<SeP>13<SeP>9<SeP>12<SeP>12<SeP>42<SeP>9<SeP>17<SeP>15<SeP>18<SeP>20<SeP>27<SeP>3<SeP>8<SeP>14<SeP>11<SeP>29<SeP>29<SeP>17<SeP>2<SeP>11<SeP>9<SeP>40<SeP>7<SeP>15<SeP>21<SeP>77<SeP>18<SeP>14<SeP>24<SeP>28<SeP>40<SeP>10<SeP>34<SeP>27";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "42<SeP>13<SeP>14<SeP>11<SeP>105<SeP>91<SeP>34<SeP>66<SeP>86<SeP>99<SeP>16<SeP>35<SeP>76<SeP>70<SeP>84<SeP>38<SeP>16<SeP>2<SeP>64<SeP>28<SeP>1<SeP>44<SeP>36<SeP>9<SeP>9<SeP>27<SeP>10<SeP>2<SeP>3<SeP>1<SeP>24<SeP>1<SeP>1<SeP>2<SeP>42<SeP>61<SeP>47<SeP>60<SeP>36<SeP>18<SeP>81<SeP>73<SeP>1<SeP>52<SeP>36<SeP>34<SeP>55<SeP>39<SeP>31<SeP>1<SeP>8<SeP>14<SeP>3<SeP>8<SeP>23<SeP>10<SeP>30<SeP>151<SeP>13<SeP>29<SeP>27<SeP>112<SeP>50<SeP>13<SeP>12<SeP>7<SeP>26<SeP>22<SeP>171<SeP>112<SeP>13<SeP>7<SeP>14<SeP>39<SeP>21<SeP>34<SeP>58<SeP>85<SeP>57<SeP>47<SeP>47<SeP>6<SeP>75<SeP>72<SeP>23<SeP>12<SeP>2<SeP>1<SeP>1<SeP>34<SeP>10<SeP>29<SeP>121<SeP>158<SeP>131<SeP>105<SeP>7<SeP>25<SeP>36<SeP>3<SeP>17<SeP>4<SeP>83<SeP>160<SeP>67<SeP>5<SeP>8<SeP>29<SeP>5<SeP>13<SeP>53<SeP>25<SeP>25<SeP>122<SeP>127<SeP>92<SeP>8<SeP>6<SeP>8<SeP>74<SeP>176<SeP>89<SeP>122<SeP>176<SeP>51<SeP>12<SeP>533<SeP>784<SeP>772<SeP>733<SeP>724<SeP>733<SeP>764<SeP>857<SeP>636<SeP>90<SeP>146<SeP>159<SeP>109<SeP>72<SeP>88<SeP>109<SeP>39<SeP>65<SeP>40<SeP>31<SeP>84<SeP>121<SeP>74<SeP>91<SeP>1<SeP>38<SeP>83<SeP>28<SeP>342<SeP>209<SeP>67<SeP>9<SeP>15<SeP>43<SeP>159<SeP>68<SeP>78<SeP>71<SeP>8<SeP>1<SeP>65<SeP>53<SeP>5<SeP>3<SeP>1<SeP>4<SeP>3<SeP>24<SeP>14<SeP>22<SeP>5<SeP>8<SeP>4<SeP>22<SeP>41<SeP>264<SeP>265<SeP>46<SeP>19<SeP>1<SeP>1<SeP>3<SeP>24<SeP>50<SeP>122<SeP>78<SeP>68<SeP>4<SeP>3<SeP>40<SeP>49<SeP>21<SeP>155<SeP>79<SeP>4<SeP>27<SeP>21<SeP>45<SeP>41<SeP>45<SeP>23<SeP>81<SeP>197<SeP>273<SeP>230<SeP>148<SeP>137<SeP>67<SeP>65<SeP>30<SeP>22<SeP>2<SeP>264<SeP>140<SeP>115<SeP>51<SeP>3<SeP>6<SeP>30<SeP>109<SeP>84<SeP>11<SeP>31<SeP>8<SeP>10<SeP>92<SeP>56<SeP>70<SeP>53<SeP>17<SeP>56<SeP>49<SeP>25<SeP>60<SeP>87<SeP>310<SeP>32<SeP>36<SeP>63<SeP>79<SeP>80<SeP>47<SeP>38<SeP>15<SeP>172<SeP>1<SeP>74<SeP>188<SeP>89<SeP>9<SeP>4<SeP>2<SeP>13<SeP>19<SeP>41<SeP>189<SeP>60<SeP>2<SeP>40<SeP>129<SeP>132<SeP>57<SeP>40<SeP>55<SeP>52<SeP>14<SeP>27<SeP>16<SeP>172<SeP>175<SeP>12<SeP>33<SeP>47<SeP>65<SeP>53<SeP>11<SeP>3<SeP>63<SeP>73<SeP>14<SeP>3<SeP>5<SeP>3<SeP>32<SeP>68<SeP>36<SeP>97<SeP>31<SeP>34<SeP>16<SeP>4<SeP>5<SeP>12<SeP>111<SeP>114<SeP>187<SeP>218<SeP>201<SeP>61<SeP>5<SeP>5<SeP>4<SeP>12<SeP>84<SeP>43<SeP>30<SeP>47<SeP>41<SeP>50<SeP>29<SeP>34<SeP>25<SeP>132<SeP>40<SeP>11<SeP>44<SeP>39<SeP>4<SeP>7<SeP>28<SeP>6<SeP>3<SeP>4<SeP>4<SeP>71<SeP>10<SeP>8<SeP>72<SeP>142<SeP>117<SeP>89<SeP>60<SeP>21<SeP>10<SeP>5<SeP>72<SeP>29<SeP>21<SeP>78<SeP>37<SeP>10<SeP>4<SeP>28<SeP>7<SeP>18<SeP>21<SeP>5<SeP>7<SeP>4<SeP>6<SeP>6<SeP>6<SeP>25<SeP>177<SeP>115<SeP>96<SeP>107<SeP>33<SeP>12<SeP>34<SeP>65<SeP>58<SeP>31<SeP>24<SeP>78<SeP>25<SeP>8<SeP>3<SeP>12<SeP>32<SeP>138<SeP>95<SeP>66<SeP>109<SeP>30<SeP>38<SeP>70<SeP>32<SeP>27<SeP>29<SeP>3<SeP>91<SeP>112<SeP>133<SeP>156<SeP>151<SeP>71<SeP>114<SeP>23<SeP>4<SeP>62<SeP>12<SeP>61<SeP>117";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 00:25:12<SeP>2025-02-10 00:50:24<SeP>2025-02-10 01:15:36<SeP>2025-02-10 01:40:48<SeP>2025-02-10 02:06:00<SeP>2025-02-10 02:31:12<SeP>2025-02-10 02:56:24<SeP>2025-02-10 03:21:36<SeP>2025-02-10 03:46:48<SeP>2025-02-10 04:12:00<SeP>2025-02-10 04:37:12<SeP>2025-02-10 05:02:24<SeP>2025-02-10 05:27:36<SeP>2025-02-10 05:52:48<SeP>2025-02-10 06:18:00<SeP>2025-02-10 06:43:12<SeP>2025-02-10 07:08:24<SeP>2025-02-10 07:33:36<SeP>2025-02-10 07:58:48<SeP>2025-02-10 08:24:00<SeP>2025-02-10 08:49:12<SeP>2025-02-10 09:14:24<SeP>2025-02-10 09:39:36<SeP>2025-02-10 10:04:48<SeP>2025-02-10 10:30:00<SeP>2025-02-10 10:55:12<SeP>2025-02-10 11:20:24<SeP>2025-02-10 11:45:36<SeP>2025-02-10 12:10:48<SeP>2025-02-10 12:36:00<SeP>2025-02-10 13:01:12<SeP>2025-02-10 13:26:24<SeP>2025-02-10 13:51:36<SeP>2025-02-10 14:16:48<SeP>2025-02-10 14:42:00<SeP>2025-02-10 15:07:12<SeP>2025-02-10 15:32:24<SeP>2025-02-10 15:57:36<SeP>2025-02-10 16:22:48<SeP>2025-02-10 16:48:00<SeP>2025-02-10 17:13:12<SeP>2025-02-10 17:38:24<SeP>2025-02-10 18:03:36<SeP>2025-02-10 18:28:48<SeP>2025-02-10 18:54:00<SeP>2025-02-10 19:19:12<SeP>2025-02-10 19:44:24<SeP>2025-02-10 20:09:36<SeP>2025-02-10 20:34:48<SeP>2025-02-10 21:00:00<SeP>2025-02-10 21:25:12<SeP>2025-02-10 21:50:24<SeP>2025-02-10 22:15:36<SeP>2025-02-10 22:40:48<SeP>2025-02-10 23:06:00<SeP>2025-02-10 23:31:12<SeP>2025-02-10 23:56:24<SeP>2025-02-11 00:21:36<SeP>2025-02-11 00:46:48<SeP>2025-02-11 01:12:00<SeP>2025-02-11 01:37:12<SeP>2025-02-11 02:02:24<SeP>2025-02-11 02:27:36<SeP>2025-02-11 02:52:48<SeP>2025-02-11 03:18:00<SeP>2025-02-11 03:43:12<SeP>2025-02-11 04:08:24<SeP>2025-02-11 04:33:36<SeP>2025-02-11 04:58:48<SeP>2025-02-11 05:24:00<SeP>2025-02-11 05:49:12<SeP>2025-02-11 06:14:24<SeP>2025-02-11 06:39:36<SeP>2025-02-11 07:04:48<SeP>2025-02-11 07:30:00<SeP>2025-02-11 07:55:12<SeP>2025-02-11 08:20:24<SeP>2025-02-11 08:45:36<SeP>2025-02-11 09:10:48<SeP>2025-02-11 09:36:00<SeP>2025-02-11 10:01:12<SeP>2025-02-11 10:26:24<SeP>2025-02-11 10:51:36<SeP>2025-02-11 11:16:48<SeP>2025-02-11 11:42:00<SeP>2025-02-11 12:07:12<SeP>2025-02-11 12:32:24<SeP>2025-02-11 12:57:36<SeP>2025-02-11 13:22:48<SeP>2025-02-11 13:48:00<SeP>2025-02-11 14:13:12<SeP>2025-02-11 14:38:24<SeP>2025-02-11 15:03:36<SeP>2025-02-11 15:28:48<SeP>2025-02-11 15:54:00<SeP>2025-02-11 16:19:12<SeP>2025-02-11 16:44:24<SeP>2025-02-11 17:09:36<SeP>2025-02-11 17:34:48<SeP>2025-02-11 18:00:00<SeP>2025-02-11 18:25:12<SeP>2025-02-11 18:50:24<SeP>2025-02-11 19:15:36<SeP>2025-02-11 19:40:48<SeP>2025-02-11 20:06:00<SeP>2025-02-11 20:31:12<SeP>2025-02-11 20:56:24<SeP>2025-02-11 21:21:36<SeP>2025-02-11 21:46:48<SeP>2025-02-11 22:12:00<SeP>2025-02-11 22:37:12<SeP>2025-02-11 23:02:24<SeP>2025-02-11 23:27:36<SeP>2025-02-11 23:52:48<SeP>2025-02-12 00:18:00<SeP>2025-02-12 00:43:12<SeP>2025-02-12 01:08:24<SeP>2025-02-12 01:33:36<SeP>2025-02-12 01:58:48<SeP>2025-02-12 02:24:00<SeP>2025-02-12 02:49:12<SeP>2025-02-12 03:14:24<SeP>2025-02-12 03:39:36<SeP>2025-02-12 04:04:48<SeP>2025-02-12 04:30:00<SeP>2025-02-12 04:55:12<SeP>2025-02-12 05:20:24<SeP>2025-02-12 05:45:36<SeP>2025-02-12 06:10:48<SeP>2025-02-12 06:36:00<SeP>2025-02-12 07:01:12<SeP>2025-02-12 07:26:24<SeP>2025-02-12 07:51:36<SeP>2025-02-12 08:16:48<SeP>2025-02-12 08:42:00<SeP>2025-02-12 09:07:12<SeP>2025-02-12 09:32:24<SeP>2025-02-12 09:57:36<SeP>2025-02-12 10:22:48<SeP>2025-02-12 10:48:00<SeP>2025-02-12 11:13:12<SeP>2025-02-12 11:38:24<SeP>2025-02-12 12:03:36<SeP>2025-02-12 12:28:48<SeP>2025-02-12 12:54:00<SeP>2025-02-12 13:19:12<SeP>2025-02-12 13:44:24<SeP>2025-02-12 14:09:36<SeP>2025-02-12 14:34:48<SeP>2025-02-12 15:00:00<SeP>2025-02-12 15:25:12<SeP>2025-02-12 15:50:24<SeP>2025-02-12 16:15:36<SeP>2025-02-12 16:40:48<SeP>2025-02-12 17:06:00<SeP>2025-02-12 17:31:12<SeP>2025-02-12 17:56:24<SeP>2025-02-12 18:21:36<SeP>2025-02-12 18:46:48<SeP>2025-02-12 19:12:00<SeP>2025-02-12 19:37:12<SeP>2025-02-12 20:02:24<SeP>2025-02-12 20:27:36<SeP>2025-02-12 20:52:48<SeP>2025-02-12 21:18:00<SeP>2025-02-12 21:43:12<SeP>2025-02-12 22:08:24<SeP>2025-02-12 22:33:36<SeP>2025-02-12 22:58:48<SeP>2025-02-12 23:24:00<SeP>2025-02-12 23:49:12<SeP>2025-02-13 00:14:24<SeP>2025-02-13 00:39:36<SeP>2025-02-13 01:04:48<SeP>2025-02-13 01:30:00<SeP>2025-02-13 01:55:12<SeP>2025-02-13 02:20:24<SeP>2025-02-13 02:45:36<SeP>2025-02-13 03:10:48<SeP>2025-02-13 03:36:00<SeP>2025-02-13 04:01:12<SeP>2025-02-13 04:26:24<SeP>2025-02-13 04:51:36<SeP>2025-02-13 05:16:48<SeP>2025-02-13 05:42:00<SeP>2025-02-13 06:07:12<SeP>2025-02-13 06:32:24<SeP>2025-02-13 06:57:36<SeP>2025-02-13 07:22:48<SeP>2025-02-13 07:48:00<SeP>2025-02-13 08:13:12<SeP>2025-02-13 08:38:24<SeP>2025-02-13 09:03:36<SeP>2025-02-13 09:28:48<SeP>2025-02-13 09:54:00<SeP>2025-02-13 10:19:12<SeP>2025-02-13 10:44:24<SeP>2025-02-13 11:09:36<SeP>2025-02-13 11:34:48<SeP>2025-02-13 12:00:00<SeP>2025-02-13 12:25:12<SeP>2025-02-13 12:50:24<SeP>2025-02-13 13:15:36<SeP>2025-02-13 13:40:48<SeP>2025-02-13 14:06:00<SeP>2025-02-13 14:31:12<SeP>2025-02-13 14:56:24<SeP>2025-02-13 15:21:36<SeP>2025-02-13 15:46:48<SeP>2025-02-13 16:12:00<SeP>2025-02-13 16:37:12<SeP>2025-02-13 17:02:24<SeP>2025-02-13 17:27:36<SeP>2025-02-13 17:52:48<SeP>2025-02-13 18:18:00<SeP>2025-02-13 18:43:12<SeP>2025-02-13 19:08:24<SeP>2025-02-13 19:33:36<SeP>2025-02-13 19:58:48<SeP>2025-02-13 20:24:00<SeP>2025-02-13 20:49:12<SeP>2025-02-13 21:14:24<SeP>2025-02-13 21:39:36<SeP>2025-02-13 22:04:48<SeP>2025-02-13 22:30:00<SeP>2025-02-13 22:55:12<SeP>2025-02-13 23:20:24<SeP>2025-02-13 23:45:36<SeP>2025-02-14 00:10:48<SeP>2025-02-14 00:36:00<SeP>2025-02-14 01:01:12<SeP>2025-02-14 01:26:24<SeP>2025-02-14 01:51:36<SeP>2025-02-14 02:16:48<SeP>2025-02-14 02:42:00<SeP>2025-02-14 03:07:12<SeP>2025-02-14 03:32:24<SeP>2025-02-14 03:57:36<SeP>2025-02-14 04:22:48<SeP>2025-02-14 04:48:00<SeP>2025-02-14 05:13:12<SeP>2025-02-14 05:38:24<SeP>2025-02-14 06:03:36<SeP>2025-02-14 06:28:48<SeP>2025-02-14 06:54:00<SeP>2025-02-14 07:19:12<SeP>2025-02-14 07:44:24<SeP>2025-02-14 08:09:36<SeP>2025-02-14 08:34:48<SeP>2025-02-14 09:00:00<SeP>2025-02-14 09:25:12<SeP>2025-02-14 09:50:24<SeP>2025-02-14 10:15:36<SeP>2025-02-14 10:40:48<SeP>2025-02-14 11:06:00<SeP>2025-02-14 11:31:12<SeP>2025-02-14 11:56:24<SeP>2025-02-14 12:21:36<SeP>2025-02-14 12:46:48<SeP>2025-02-14 13:12:00<SeP>2025-02-14 13:37:12<SeP>2025-02-14 14:02:24<SeP>2025-02-14 14:27:36<SeP>2025-02-14 14:52:48<SeP>2025-02-14 15:18:00<SeP>2025-02-14 15:43:12<SeP>2025-02-14 16:08:24<SeP>2025-02-14 16:33:36<SeP>2025-02-14 16:58:48<SeP>2025-02-14 17:24:00<SeP>2025-02-14 17:49:12<SeP>2025-02-14 18:14:24<SeP>2025-02-14 18:39:36<SeP>2025-02-14 19:04:48<SeP>2025-02-14 19:30:00<SeP>2025-02-14 19:55:12<SeP>2025-02-14 20:20:24<SeP>2025-02-14 20:45:36<SeP>2025-02-14 21:10:48<SeP>2025-02-14 21:36:00<SeP>2025-02-14 22:01:12<SeP>2025-02-14 22:26:24<SeP>2025-02-14 22:51:36<SeP>2025-02-14 23:16:48<SeP>2025-02-14 23:42:00<SeP>2025-02-15 00:07:12<SeP>2025-02-15 00:32:24<SeP>2025-02-15 00:57:36<SeP>2025-02-15 01:22:48<SeP>2025-02-15 01:48:00<SeP>2025-02-15 02:13:12<SeP>2025-02-15 02:38:24<SeP>2025-02-15 03:03:36<SeP>2025-02-15 03:28:48<SeP>2025-02-15 03:54:00<SeP>2025-02-15 04:19:12<SeP>2025-02-15 04:44:24<SeP>2025-02-15 05:09:36<SeP>2025-02-15 05:34:48<SeP>2025-02-15 06:00:00<SeP>2025-02-15 06:25:12<SeP>2025-02-15 06:50:24<SeP>2025-02-15 07:15:36<SeP>2025-02-15 07:40:48<SeP>2025-02-15 08:06:00<SeP>2025-02-15 08:31:12<SeP>2025-02-15 08:56:24<SeP>2025-02-15 09:21:36<SeP>2025-02-15 09:46:48<SeP>2025-02-15 10:12:00<SeP>2025-02-15 10:37:12<SeP>2025-02-15 11:02:24<SeP>2025-02-15 11:27:36<SeP>2025-02-15 11:52:48<SeP>2025-02-15 12:18:00<SeP>2025-02-15 12:43:12<SeP>2025-02-15 13:08:24<SeP>2025-02-15 13:33:36<SeP>2025-02-15 13:58:48<SeP>2025-02-15 14:24:00<SeP>2025-02-15 14:49:12<SeP>2025-02-15 15:14:24<SeP>2025-02-15 15:39:36<SeP>2025-02-15 16:04:48<SeP>2025-02-15 16:30:00<SeP>2025-02-15 16:55:12<SeP>2025-02-15 17:20:24<SeP>2025-02-15 17:45:36<SeP>2025-02-15 18:10:48<SeP>2025-02-15 18:36:00<SeP>2025-02-15 19:01:12<SeP>2025-02-15 19:26:24<SeP>2025-02-15 19:51:36<SeP>2025-02-15 20:16:48<SeP>2025-02-15 20:42:00<SeP>2025-02-15 21:07:12<SeP>2025-02-15 21:32:24<SeP>2025-02-15 21:57:36<SeP>2025-02-15 22:22:48<SeP>2025-02-15 22:48:00<SeP>2025-02-15 23:13:12<SeP>2025-02-15 23:38:24<SeP>2025-02-16 00:03:36<SeP>2025-02-16 00:28:48<SeP>2025-02-16 00:54:00<SeP>2025-02-16 01:19:12<SeP>2025-02-16 01:44:24<SeP>2025-02-16 02:09:36<SeP>2025-02-16 02:34:48<SeP>2025-02-16 03:00:00<SeP>2025-02-16 03:25:12<SeP>2025-02-16 03:50:24<SeP>2025-02-16 04:15:36<SeP>2025-02-16 04:40:48<SeP>2025-02-16 05:06:00<SeP>2025-02-16 05:31:12<SeP>2025-02-16 05:56:24<SeP>2025-02-16 06:21:36<SeP>2025-02-16 06:46:48<SeP>2025-02-16 07:12:00<SeP>2025-02-16 07:37:12<SeP>2025-02-16 08:02:24<SeP>2025-02-16 08:27:36<SeP>2025-02-16 08:52:48<SeP>2025-02-16 09:18:00<SeP>2025-02-16 09:43:12<SeP>2025-02-16 10:08:24<SeP>2025-02-16 10:33:36<SeP>2025-02-16 10:58:48<SeP>2025-02-16 11:24:00<SeP>2025-02-16 11:49:12<SeP>2025-02-16 12:14:24<SeP>2025-02-16 12:39:36<SeP>2025-02-16 13:04:48<SeP>2025-02-16 13:30:00<SeP>2025-02-16 13:55:12<SeP>2025-02-16 14:20:24<SeP>2025-02-16 14:45:36<SeP>2025-02-16 15:10:48<SeP>2025-02-16 15:36:00<SeP>2025-02-16 16:01:12<SeP>2025-02-16 16:26:24<SeP>2025-02-16 16:51:36<SeP>2025-02-16 17:16:48<SeP>2025-02-16 17:42:00<SeP>2025-02-16 18:07:12<SeP>2025-02-16 18:32:24<SeP>2025-02-16 18:57:36<SeP>2025-02-16 19:22:48<SeP>2025-02-16 19:48:00<SeP>2025-02-16 20:13:12<SeP>2025-02-16 20:38:24<SeP>2025-02-16 21:03:36<SeP>2025-02-16 21:28:48<SeP>2025-02-16 21:54:00<SeP>2025-02-16 22:19:12<SeP>2025-02-16 22:44:24<SeP>2025-02-16 23:09:36<SeP>2025-02-16 23:34:48";
  const itemLabel       = "Scans";
  const itemData        = "10<SeP>25<SeP>5<SeP>2<SeP>21<SeP>37<SeP>35<SeP>27<SeP>23<SeP>13<SeP>12<SeP>21<SeP>12<SeP>35<SeP>10<SeP>13<SeP>9<SeP>20<SeP>41<SeP>6<SeP>41<SeP>19<SeP>13<SeP>38<SeP>14<SeP>10<SeP>11<SeP>22<SeP>18<SeP>20<SeP>15<SeP>27<SeP>6<SeP>31<SeP>13<SeP>12<SeP>14<SeP>35<SeP>18<SeP>16<SeP>20<SeP>13<SeP>9<SeP>22<SeP>10<SeP>20<SeP>35<SeP>13<SeP>11<SeP>7<SeP>110<SeP>15<SeP>6<SeP>29<SeP>4<SeP>8<SeP>21<SeP>15<SeP>4<SeP>17<SeP>8<SeP>4<SeP>32<SeP>13<SeP>28<SeP>15<SeP>27<SeP>30<SeP>15<SeP>11<SeP>19<SeP>31<SeP>33<SeP>24<SeP>25<SeP>93<SeP>17<SeP>57<SeP>16<SeP>25<SeP>11<SeP>14<SeP>28<SeP>11<SeP>23<SeP>16<SeP>73<SeP>8<SeP>13<SeP>47<SeP>18<SeP>14<SeP>22<SeP>43<SeP>29<SeP>25<SeP>24<SeP>15<SeP>22<SeP>25<SeP>17<SeP>13<SeP>36<SeP>71<SeP>55<SeP>11<SeP>11<SeP>29<SeP>3<SeP>6<SeP>3<SeP>12<SeP>14<SeP>47<SeP>42<SeP>10<SeP>11<SeP>11<SeP>4<SeP>12<SeP>34<SeP>27<SeP>15<SeP>16<SeP>11<SeP>12<SeP>12<SeP>16<SeP>41<SeP>45<SeP>13<SeP>10<SeP>11<SeP>17<SeP>36<SeP>13<SeP>17<SeP>13<SeP>14<SeP>12<SeP>10<SeP>14<SeP>13<SeP>13<SeP>22<SeP>14<SeP>25<SeP>33<SeP>2<SeP>15<SeP>13<SeP>17<SeP>12<SeP>11<SeP>14<SeP>16<SeP>33<SeP>41<SeP>15<SeP>15<SeP>17<SeP>37<SeP>125<SeP>7<SeP>1<SeP>6<SeP>5<SeP>22<SeP>18<SeP>23<SeP>22<SeP>37<SeP>13<SeP>49<SeP>33<SeP>11<SeP>7<SeP>44<SeP>29<SeP>15<SeP>16<SeP>38<SeP>46<SeP>15<SeP>13<SeP>8<SeP>7<SeP>10<SeP>11<SeP>20<SeP>18<SeP>15<SeP>13<SeP>32<SeP>13<SeP>22<SeP>13<SeP>15<SeP>21<SeP>49<SeP>41<SeP>58<SeP>14<SeP>20<SeP>13<SeP>13<SeP>15<SeP>43<SeP>56<SeP>6<SeP>0<SeP>8<SeP>4<SeP>10<SeP>10<SeP>50<SeP>1<SeP>1<SeP>47<SeP>10<SeP>56<SeP>18<SeP>10<SeP>12<SeP>10<SeP>13<SeP>9<SeP>39<SeP>11<SeP>13<SeP>14<SeP>11<SeP>36<SeP>16<SeP>10<SeP>36<SeP>21<SeP>13<SeP>13<SeP>23<SeP>20<SeP>34<SeP>31<SeP>39<SeP>39<SeP>20<SeP>40<SeP>12<SeP>24<SeP>40<SeP>72<SeP>40<SeP>21<SeP>45<SeP>16<SeP>13<SeP>13<SeP>10<SeP>9<SeP>11<SeP>13<SeP>25<SeP>9<SeP>1<SeP>8<SeP>25<SeP>22<SeP>3<SeP>12<SeP>45<SeP>26<SeP>4<SeP>3<SeP>2<SeP>22<SeP>17<SeP>31<SeP>14<SeP>16<SeP>36<SeP>36<SeP>17<SeP>10<SeP>21<SeP>29<SeP>42<SeP>12<SeP>10<SeP>11<SeP>14<SeP>34<SeP>14<SeP>12<SeP>18<SeP>21<SeP>16<SeP>11<SeP>12<SeP>12<SeP>41<SeP>34<SeP>49<SeP>24<SeP>12<SeP>79<SeP>54<SeP>18<SeP>11<SeP>38<SeP>64<SeP>9<SeP>11<SeP>19<SeP>62<SeP>9<SeP>11<SeP>14<SeP>14<SeP>42<SeP>6<SeP>2<SeP>2<SeP>2<SeP>23<SeP>6<SeP>6<SeP>6<SeP>27<SeP>35<SeP>8<SeP>18<SeP>4<SeP>6<SeP>14<SeP>51<SeP>25<SeP>30<SeP>21<SeP>36<SeP>12<SeP>7<SeP>37<SeP>12<SeP>17<SeP>16<SeP>8<SeP>15<SeP>7<SeP>13<SeP>13<SeP>14<SeP>32<SeP>13<SeP>17<SeP>10<SeP>18<SeP>8<SeP>17<SeP>12<SeP>16<SeP>70<SeP>36<SeP>14<SeP>19<SeP>14<SeP>18<SeP>13<SeP>9<SeP>12<SeP>12<SeP>42<SeP>9<SeP>17<SeP>15<SeP>18<SeP>20<SeP>27<SeP>3<SeP>8<SeP>14<SeP>11<SeP>29<SeP>29<SeP>17<SeP>2<SeP>11<SeP>9<SeP>40<SeP>7<SeP>15<SeP>21<SeP>77<SeP>18<SeP>14<SeP>24<SeP>28<SeP>40<SeP>10<SeP>34<SeP>27";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 00:25:12<SeP>2025-02-10 00:50:24<SeP>2025-02-10 01:15:36<SeP>2025-02-10 01:40:48<SeP>2025-02-10 02:06:00<SeP>2025-02-10 02:31:12<SeP>2025-02-10 02:56:24<SeP>2025-02-10 03:21:36<SeP>2025-02-10 03:46:48<SeP>2025-02-10 04:12:00<SeP>2025-02-10 04:37:12<SeP>2025-02-10 05:02:24<SeP>2025-02-10 05:27:36<SeP>2025-02-10 05:52:48<SeP>2025-02-10 06:18:00<SeP>2025-02-10 06:43:12<SeP>2025-02-10 07:08:24<SeP>2025-02-10 07:33:36<SeP>2025-02-10 07:58:48<SeP>2025-02-10 08:24:00<SeP>2025-02-10 08:49:12<SeP>2025-02-10 09:14:24<SeP>2025-02-10 09:39:36<SeP>2025-02-10 10:04:48<SeP>2025-02-10 10:30:00<SeP>2025-02-10 10:55:12<SeP>2025-02-10 11:20:24<SeP>2025-02-10 11:45:36<SeP>2025-02-10 12:10:48<SeP>2025-02-10 12:36:00<SeP>2025-02-10 13:01:12<SeP>2025-02-10 13:26:24<SeP>2025-02-10 13:51:36<SeP>2025-02-10 14:16:48<SeP>2025-02-10 14:42:00<SeP>2025-02-10 15:07:12<SeP>2025-02-10 15:32:24<SeP>2025-02-10 15:57:36<SeP>2025-02-10 16:22:48<SeP>2025-02-10 16:48:00<SeP>2025-02-10 17:13:12<SeP>2025-02-10 17:38:24<SeP>2025-02-10 18:03:36<SeP>2025-02-10 18:28:48<SeP>2025-02-10 18:54:00<SeP>2025-02-10 19:19:12<SeP>2025-02-10 19:44:24<SeP>2025-02-10 20:09:36<SeP>2025-02-10 20:34:48<SeP>2025-02-10 21:00:00<SeP>2025-02-10 21:25:12<SeP>2025-02-10 21:50:24<SeP>2025-02-10 22:15:36<SeP>2025-02-10 22:40:48<SeP>2025-02-10 23:06:00<SeP>2025-02-10 23:31:12<SeP>2025-02-10 23:56:24<SeP>2025-02-11 00:21:36<SeP>2025-02-11 00:46:48<SeP>2025-02-11 01:12:00<SeP>2025-02-11 01:37:12<SeP>2025-02-11 02:02:24<SeP>2025-02-11 02:27:36<SeP>2025-02-11 02:52:48<SeP>2025-02-11 03:18:00<SeP>2025-02-11 03:43:12<SeP>2025-02-11 04:08:24<SeP>2025-02-11 04:33:36<SeP>2025-02-11 04:58:48<SeP>2025-02-11 05:24:00<SeP>2025-02-11 05:49:12<SeP>2025-02-11 06:14:24<SeP>2025-02-11 06:39:36<SeP>2025-02-11 07:04:48<SeP>2025-02-11 07:30:00<SeP>2025-02-11 07:55:12<SeP>2025-02-11 08:20:24<SeP>2025-02-11 08:45:36<SeP>2025-02-11 09:10:48<SeP>2025-02-11 09:36:00<SeP>2025-02-11 10:01:12<SeP>2025-02-11 10:26:24<SeP>2025-02-11 10:51:36<SeP>2025-02-11 11:16:48<SeP>2025-02-11 11:42:00<SeP>2025-02-11 12:07:12<SeP>2025-02-11 12:32:24<SeP>2025-02-11 12:57:36<SeP>2025-02-11 13:22:48<SeP>2025-02-11 13:48:00<SeP>2025-02-11 14:13:12<SeP>2025-02-11 14:38:24<SeP>2025-02-11 15:03:36<SeP>2025-02-11 15:28:48<SeP>2025-02-11 15:54:00<SeP>2025-02-11 16:19:12<SeP>2025-02-11 16:44:24<SeP>2025-02-11 17:09:36<SeP>2025-02-11 17:34:48<SeP>2025-02-11 18:00:00<SeP>2025-02-11 18:25:12<SeP>2025-02-11 18:50:24<SeP>2025-02-11 19:15:36<SeP>2025-02-11 19:40:48<SeP>2025-02-11 20:06:00<SeP>2025-02-11 20:31:12<SeP>2025-02-11 20:56:24<SeP>2025-02-11 21:21:36<SeP>2025-02-11 21:46:48<SeP>2025-02-11 22:12:00<SeP>2025-02-11 22:37:12<SeP>2025-02-11 23:02:24<SeP>2025-02-11 23:27:36<SeP>2025-02-11 23:52:48<SeP>2025-02-12 00:18:00<SeP>2025-02-12 00:43:12<SeP>2025-02-12 01:08:24<SeP>2025-02-12 01:33:36<SeP>2025-02-12 01:58:48<SeP>2025-02-12 02:24:00<SeP>2025-02-12 02:49:12<SeP>2025-02-12 03:14:24<SeP>2025-02-12 03:39:36<SeP>2025-02-12 04:04:48<SeP>2025-02-12 04:30:00<SeP>2025-02-12 04:55:12<SeP>2025-02-12 05:20:24<SeP>2025-02-12 05:45:36<SeP>2025-02-12 06:10:48<SeP>2025-02-12 06:36:00<SeP>2025-02-12 07:01:12<SeP>2025-02-12 07:26:24<SeP>2025-02-12 07:51:36<SeP>2025-02-12 08:16:48<SeP>2025-02-12 08:42:00<SeP>2025-02-12 09:07:12<SeP>2025-02-12 09:32:24<SeP>2025-02-12 09:57:36<SeP>2025-02-12 10:22:48<SeP>2025-02-12 10:48:00<SeP>2025-02-12 11:13:12<SeP>2025-02-12 11:38:24<SeP>2025-02-12 12:03:36<SeP>2025-02-12 12:28:48<SeP>2025-02-12 12:54:00<SeP>2025-02-12 13:19:12<SeP>2025-02-12 13:44:24<SeP>2025-02-12 14:09:36<SeP>2025-02-12 14:34:48<SeP>2025-02-12 15:00:00<SeP>2025-02-12 15:25:12<SeP>2025-02-12 15:50:24<SeP>2025-02-12 16:15:36<SeP>2025-02-12 16:40:48<SeP>2025-02-12 17:06:00<SeP>2025-02-12 17:31:12<SeP>2025-02-12 17:56:24<SeP>2025-02-12 18:21:36<SeP>2025-02-12 18:46:48<SeP>2025-02-12 19:12:00<SeP>2025-02-12 19:37:12<SeP>2025-02-12 20:02:24<SeP>2025-02-12 20:27:36<SeP>2025-02-12 20:52:48<SeP>2025-02-12 21:18:00<SeP>2025-02-12 21:43:12<SeP>2025-02-12 22:08:24<SeP>2025-02-12 22:33:36<SeP>2025-02-12 22:58:48<SeP>2025-02-12 23:24:00<SeP>2025-02-12 23:49:12<SeP>2025-02-13 00:14:24<SeP>2025-02-13 00:39:36<SeP>2025-02-13 01:04:48<SeP>2025-02-13 01:30:00<SeP>2025-02-13 01:55:12<SeP>2025-02-13 02:20:24<SeP>2025-02-13 02:45:36<SeP>2025-02-13 03:10:48<SeP>2025-02-13 03:36:00<SeP>2025-02-13 04:01:12<SeP>2025-02-13 04:26:24<SeP>2025-02-13 04:51:36<SeP>2025-02-13 05:16:48<SeP>2025-02-13 05:42:00<SeP>2025-02-13 06:07:12<SeP>2025-02-13 06:32:24<SeP>2025-02-13 06:57:36<SeP>2025-02-13 07:22:48<SeP>2025-02-13 07:48:00<SeP>2025-02-13 08:13:12<SeP>2025-02-13 08:38:24<SeP>2025-02-13 09:03:36<SeP>2025-02-13 09:28:48<SeP>2025-02-13 09:54:00<SeP>2025-02-13 10:19:12<SeP>2025-02-13 10:44:24<SeP>2025-02-13 11:09:36<SeP>2025-02-13 11:34:48<SeP>2025-02-13 12:00:00<SeP>2025-02-13 12:25:12<SeP>2025-02-13 12:50:24<SeP>2025-02-13 13:15:36<SeP>2025-02-13 13:40:48<SeP>2025-02-13 14:06:00<SeP>2025-02-13 14:31:12<SeP>2025-02-13 14:56:24<SeP>2025-02-13 15:21:36<SeP>2025-02-13 15:46:48<SeP>2025-02-13 16:12:00<SeP>2025-02-13 16:37:12<SeP>2025-02-13 17:02:24<SeP>2025-02-13 17:27:36<SeP>2025-02-13 17:52:48<SeP>2025-02-13 18:18:00<SeP>2025-02-13 18:43:12<SeP>2025-02-13 19:08:24<SeP>2025-02-13 19:33:36<SeP>2025-02-13 19:58:48<SeP>2025-02-13 20:24:00<SeP>2025-02-13 20:49:12<SeP>2025-02-13 21:14:24<SeP>2025-02-13 21:39:36<SeP>2025-02-13 22:04:48<SeP>2025-02-13 22:30:00<SeP>2025-02-13 22:55:12<SeP>2025-02-13 23:20:24<SeP>2025-02-13 23:45:36<SeP>2025-02-14 00:10:48<SeP>2025-02-14 00:36:00<SeP>2025-02-14 01:01:12<SeP>2025-02-14 01:26:24<SeP>2025-02-14 01:51:36<SeP>2025-02-14 02:16:48<SeP>2025-02-14 02:42:00<SeP>2025-02-14 03:07:12<SeP>2025-02-14 03:32:24<SeP>2025-02-14 03:57:36<SeP>2025-02-14 04:22:48<SeP>2025-02-14 04:48:00<SeP>2025-02-14 05:13:12<SeP>2025-02-14 05:38:24<SeP>2025-02-14 06:03:36<SeP>2025-02-14 06:28:48<SeP>2025-02-14 06:54:00<SeP>2025-02-14 07:19:12<SeP>2025-02-14 07:44:24<SeP>2025-02-14 08:09:36<SeP>2025-02-14 08:34:48<SeP>2025-02-14 09:00:00<SeP>2025-02-14 09:25:12<SeP>2025-02-14 09:50:24<SeP>2025-02-14 10:15:36<SeP>2025-02-14 10:40:48<SeP>2025-02-14 11:06:00<SeP>2025-02-14 11:31:12<SeP>2025-02-14 11:56:24<SeP>2025-02-14 12:21:36<SeP>2025-02-14 12:46:48<SeP>2025-02-14 13:12:00<SeP>2025-02-14 13:37:12<SeP>2025-02-14 14:02:24<SeP>2025-02-14 14:27:36<SeP>2025-02-14 14:52:48<SeP>2025-02-14 15:18:00<SeP>2025-02-14 15:43:12<SeP>2025-02-14 16:08:24<SeP>2025-02-14 16:33:36<SeP>2025-02-14 16:58:48<SeP>2025-02-14 17:24:00<SeP>2025-02-14 17:49:12<SeP>2025-02-14 18:14:24<SeP>2025-02-14 18:39:36<SeP>2025-02-14 19:04:48<SeP>2025-02-14 19:30:00<SeP>2025-02-14 19:55:12<SeP>2025-02-14 20:20:24<SeP>2025-02-14 20:45:36<SeP>2025-02-14 21:10:48<SeP>2025-02-14 21:36:00<SeP>2025-02-14 22:01:12<SeP>2025-02-14 22:26:24<SeP>2025-02-14 22:51:36<SeP>2025-02-14 23:16:48<SeP>2025-02-14 23:42:00<SeP>2025-02-15 00:07:12<SeP>2025-02-15 00:32:24<SeP>2025-02-15 00:57:36<SeP>2025-02-15 01:22:48<SeP>2025-02-15 01:48:00<SeP>2025-02-15 02:13:12<SeP>2025-02-15 02:38:24<SeP>2025-02-15 03:03:36<SeP>2025-02-15 03:28:48<SeP>2025-02-15 03:54:00<SeP>2025-02-15 04:19:12<SeP>2025-02-15 04:44:24<SeP>2025-02-15 05:09:36<SeP>2025-02-15 05:34:48<SeP>2025-02-15 06:00:00<SeP>2025-02-15 06:25:12<SeP>2025-02-15 06:50:24<SeP>2025-02-15 07:15:36<SeP>2025-02-15 07:40:48<SeP>2025-02-15 08:06:00<SeP>2025-02-15 08:31:12<SeP>2025-02-15 08:56:24<SeP>2025-02-15 09:21:36<SeP>2025-02-15 09:46:48<SeP>2025-02-15 10:12:00<SeP>2025-02-15 10:37:12<SeP>2025-02-15 11:02:24<SeP>2025-02-15 11:27:36<SeP>2025-02-15 11:52:48<SeP>2025-02-15 12:18:00<SeP>2025-02-15 12:43:12<SeP>2025-02-15 13:08:24<SeP>2025-02-15 13:33:36<SeP>2025-02-15 13:58:48<SeP>2025-02-15 14:24:00<SeP>2025-02-15 14:49:12<SeP>2025-02-15 15:14:24<SeP>2025-02-15 15:39:36<SeP>2025-02-15 16:04:48<SeP>2025-02-15 16:30:00<SeP>2025-02-15 16:55:12<SeP>2025-02-15 17:20:24<SeP>2025-02-15 17:45:36<SeP>2025-02-15 18:10:48<SeP>2025-02-15 18:36:00<SeP>2025-02-15 19:01:12<SeP>2025-02-15 19:26:24<SeP>2025-02-15 19:51:36<SeP>2025-02-15 20:16:48<SeP>2025-02-15 20:42:00<SeP>2025-02-15 21:07:12<SeP>2025-02-15 21:32:24<SeP>2025-02-15 21:57:36<SeP>2025-02-15 22:22:48<SeP>2025-02-15 22:48:00<SeP>2025-02-15 23:13:12<SeP>2025-02-15 23:38:24<SeP>2025-02-16 00:03:36<SeP>2025-02-16 00:28:48<SeP>2025-02-16 00:54:00<SeP>2025-02-16 01:19:12<SeP>2025-02-16 01:44:24<SeP>2025-02-16 02:09:36<SeP>2025-02-16 02:34:48<SeP>2025-02-16 03:00:00<SeP>2025-02-16 03:25:12<SeP>2025-02-16 03:50:24<SeP>2025-02-16 04:15:36<SeP>2025-02-16 04:40:48<SeP>2025-02-16 05:06:00<SeP>2025-02-16 05:31:12<SeP>2025-02-16 05:56:24<SeP>2025-02-16 06:21:36<SeP>2025-02-16 06:46:48<SeP>2025-02-16 07:12:00<SeP>2025-02-16 07:37:12<SeP>2025-02-16 08:02:24<SeP>2025-02-16 08:27:36<SeP>2025-02-16 08:52:48<SeP>2025-02-16 09:18:00<SeP>2025-02-16 09:43:12<SeP>2025-02-16 10:08:24<SeP>2025-02-16 10:33:36<SeP>2025-02-16 10:58:48<SeP>2025-02-16 11:24:00<SeP>2025-02-16 11:49:12<SeP>2025-02-16 12:14:24<SeP>2025-02-16 12:39:36<SeP>2025-02-16 13:04:48<SeP>2025-02-16 13:30:00<SeP>2025-02-16 13:55:12<SeP>2025-02-16 14:20:24<SeP>2025-02-16 14:45:36<SeP>2025-02-16 15:10:48<SeP>2025-02-16 15:36:00<SeP>2025-02-16 16:01:12<SeP>2025-02-16 16:26:24<SeP>2025-02-16 16:51:36<SeP>2025-02-16 17:16:48<SeP>2025-02-16 17:42:00<SeP>2025-02-16 18:07:12<SeP>2025-02-16 18:32:24<SeP>2025-02-16 18:57:36<SeP>2025-02-16 19:22:48<SeP>2025-02-16 19:48:00<SeP>2025-02-16 20:13:12<SeP>2025-02-16 20:38:24<SeP>2025-02-16 21:03:36<SeP>2025-02-16 21:28:48<SeP>2025-02-16 21:54:00<SeP>2025-02-16 22:19:12<SeP>2025-02-16 22:44:24<SeP>2025-02-16 23:09:36<SeP>2025-02-16 23:34:48";
  const itemLabel       = "Attacks";
  const itemData        = "42<SeP>13<SeP>14<SeP>11<SeP>105<SeP>91<SeP>34<SeP>66<SeP>86<SeP>99<SeP>16<SeP>35<SeP>76<SeP>70<SeP>84<SeP>38<SeP>16<SeP>2<SeP>64<SeP>28<SeP>1<SeP>44<SeP>36<SeP>9<SeP>9<SeP>27<SeP>10<SeP>2<SeP>3<SeP>1<SeP>24<SeP>1<SeP>1<SeP>2<SeP>42<SeP>61<SeP>47<SeP>60<SeP>36<SeP>18<SeP>81<SeP>73<SeP>1<SeP>52<SeP>36<SeP>34<SeP>55<SeP>39<SeP>31<SeP>1<SeP>8<SeP>14<SeP>3<SeP>8<SeP>23<SeP>10<SeP>30<SeP>151<SeP>13<SeP>29<SeP>27<SeP>112<SeP>50<SeP>13<SeP>12<SeP>7<SeP>26<SeP>22<SeP>171<SeP>112<SeP>13<SeP>7<SeP>14<SeP>39<SeP>21<SeP>34<SeP>58<SeP>85<SeP>57<SeP>47<SeP>47<SeP>6<SeP>75<SeP>72<SeP>23<SeP>12<SeP>2<SeP>1<SeP>1<SeP>34<SeP>10<SeP>29<SeP>121<SeP>158<SeP>131<SeP>105<SeP>7<SeP>25<SeP>36<SeP>3<SeP>17<SeP>4<SeP>83<SeP>160<SeP>67<SeP>5<SeP>8<SeP>29<SeP>5<SeP>13<SeP>53<SeP>25<SeP>25<SeP>122<SeP>127<SeP>92<SeP>8<SeP>6<SeP>8<SeP>74<SeP>176<SeP>89<SeP>122<SeP>176<SeP>51<SeP>12<SeP>533<SeP>784<SeP>772<SeP>733<SeP>724<SeP>733<SeP>764<SeP>857<SeP>636<SeP>90<SeP>146<SeP>159<SeP>109<SeP>72<SeP>88<SeP>109<SeP>39<SeP>65<SeP>40<SeP>31<SeP>84<SeP>121<SeP>74<SeP>91<SeP>1<SeP>38<SeP>83<SeP>28<SeP>342<SeP>209<SeP>67<SeP>9<SeP>15<SeP>43<SeP>159<SeP>68<SeP>78<SeP>71<SeP>8<SeP>1<SeP>65<SeP>53<SeP>5<SeP>3<SeP>1<SeP>4<SeP>3<SeP>24<SeP>14<SeP>22<SeP>5<SeP>8<SeP>4<SeP>22<SeP>41<SeP>264<SeP>265<SeP>46<SeP>19<SeP>1<SeP>1<SeP>3<SeP>24<SeP>50<SeP>122<SeP>78<SeP>68<SeP>4<SeP>3<SeP>40<SeP>49<SeP>21<SeP>155<SeP>79<SeP>4<SeP>27<SeP>21<SeP>45<SeP>41<SeP>45<SeP>23<SeP>81<SeP>197<SeP>273<SeP>230<SeP>148<SeP>137<SeP>67<SeP>65<SeP>30<SeP>22<SeP>2<SeP>264<SeP>140<SeP>115<SeP>51<SeP>3<SeP>6<SeP>30<SeP>109<SeP>84<SeP>11<SeP>31<SeP>8<SeP>10<SeP>92<SeP>56<SeP>70<SeP>53<SeP>17<SeP>56<SeP>49<SeP>25<SeP>60<SeP>87<SeP>310<SeP>32<SeP>36<SeP>63<SeP>79<SeP>80<SeP>47<SeP>38<SeP>15<SeP>172<SeP>1<SeP>74<SeP>188<SeP>89<SeP>9<SeP>4<SeP>2<SeP>13<SeP>19<SeP>41<SeP>189<SeP>60<SeP>2<SeP>40<SeP>129<SeP>132<SeP>57<SeP>40<SeP>55<SeP>52<SeP>14<SeP>27<SeP>16<SeP>172<SeP>175<SeP>12<SeP>33<SeP>47<SeP>65<SeP>53<SeP>11<SeP>3<SeP>63<SeP>73<SeP>14<SeP>3<SeP>5<SeP>3<SeP>32<SeP>68<SeP>36<SeP>97<SeP>31<SeP>34<SeP>16<SeP>4<SeP>5<SeP>12<SeP>111<SeP>114<SeP>187<SeP>218<SeP>201<SeP>61<SeP>5<SeP>5<SeP>4<SeP>12<SeP>84<SeP>43<SeP>30<SeP>47<SeP>41<SeP>50<SeP>29<SeP>34<SeP>25<SeP>132<SeP>40<SeP>11<SeP>44<SeP>39<SeP>4<SeP>7<SeP>28<SeP>6<SeP>3<SeP>4<SeP>4<SeP>71<SeP>10<SeP>8<SeP>72<SeP>142<SeP>117<SeP>89<SeP>60<SeP>21<SeP>10<SeP>5<SeP>72<SeP>29<SeP>21<SeP>78<SeP>37<SeP>10<SeP>4<SeP>28<SeP>7<SeP>18<SeP>21<SeP>5<SeP>7<SeP>4<SeP>6<SeP>6<SeP>6<SeP>25<SeP>177<SeP>115<SeP>96<SeP>107<SeP>33<SeP>12<SeP>34<SeP>65<SeP>58<SeP>31<SeP>24<SeP>78<SeP>25<SeP>8<SeP>3<SeP>12<SeP>32<SeP>138<SeP>95<SeP>66<SeP>109<SeP>30<SeP>38<SeP>70<SeP>32<SeP>27<SeP>29<SeP>3<SeP>91<SeP>112<SeP>133<SeP>156<SeP>151<SeP>71<SeP>114<SeP>23<SeP>4<SeP>62<SeP>12<SeP>61<SeP>117";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 00:25:12<SeP>2025-02-10 00:50:24<SeP>2025-02-10 01:15:36<SeP>2025-02-10 01:40:48<SeP>2025-02-10 02:06:00<SeP>2025-02-10 02:31:12<SeP>2025-02-10 02:56:24<SeP>2025-02-10 03:21:36<SeP>2025-02-10 03:46:48<SeP>2025-02-10 04:12:00<SeP>2025-02-10 04:37:12<SeP>2025-02-10 05:02:24<SeP>2025-02-10 05:27:36<SeP>2025-02-10 05:52:48<SeP>2025-02-10 06:18:00<SeP>2025-02-10 06:43:12<SeP>2025-02-10 07:08:24<SeP>2025-02-10 07:33:36<SeP>2025-02-10 07:58:48<SeP>2025-02-10 08:24:00<SeP>2025-02-10 08:49:12<SeP>2025-02-10 09:14:24<SeP>2025-02-10 09:39:36<SeP>2025-02-10 10:04:48<SeP>2025-02-10 10:30:00<SeP>2025-02-10 10:55:12<SeP>2025-02-10 11:20:24<SeP>2025-02-10 11:45:36<SeP>2025-02-10 12:10:48<SeP>2025-02-10 12:36:00<SeP>2025-02-10 13:01:12<SeP>2025-02-10 13:26:24<SeP>2025-02-10 13:51:36<SeP>2025-02-10 14:16:48<SeP>2025-02-10 14:42:00<SeP>2025-02-10 15:07:12<SeP>2025-02-10 15:32:24<SeP>2025-02-10 15:57:36<SeP>2025-02-10 16:22:48<SeP>2025-02-10 16:48:00<SeP>2025-02-10 17:13:12<SeP>2025-02-10 17:38:24<SeP>2025-02-10 18:03:36<SeP>2025-02-10 18:28:48<SeP>2025-02-10 18:54:00<SeP>2025-02-10 19:19:12<SeP>2025-02-10 19:44:24<SeP>2025-02-10 20:09:36<SeP>2025-02-10 20:34:48<SeP>2025-02-10 21:00:00<SeP>2025-02-10 21:25:12<SeP>2025-02-10 21:50:24<SeP>2025-02-10 22:15:36<SeP>2025-02-10 22:40:48<SeP>2025-02-10 23:06:00<SeP>2025-02-10 23:31:12<SeP>2025-02-10 23:56:24<SeP>2025-02-11 00:21:36<SeP>2025-02-11 00:46:48<SeP>2025-02-11 01:12:00<SeP>2025-02-11 01:37:12<SeP>2025-02-11 02:02:24<SeP>2025-02-11 02:27:36<SeP>2025-02-11 02:52:48<SeP>2025-02-11 03:18:00<SeP>2025-02-11 03:43:12<SeP>2025-02-11 04:08:24<SeP>2025-02-11 04:33:36<SeP>2025-02-11 04:58:48<SeP>2025-02-11 05:24:00<SeP>2025-02-11 05:49:12<SeP>2025-02-11 06:14:24<SeP>2025-02-11 06:39:36<SeP>2025-02-11 07:04:48<SeP>2025-02-11 07:30:00<SeP>2025-02-11 07:55:12<SeP>2025-02-11 08:20:24<SeP>2025-02-11 08:45:36<SeP>2025-02-11 09:10:48<SeP>2025-02-11 09:36:00<SeP>2025-02-11 10:01:12<SeP>2025-02-11 10:26:24<SeP>2025-02-11 10:51:36<SeP>2025-02-11 11:16:48<SeP>2025-02-11 11:42:00<SeP>2025-02-11 12:07:12<SeP>2025-02-11 12:32:24<SeP>2025-02-11 12:57:36<SeP>2025-02-11 13:22:48<SeP>2025-02-11 13:48:00<SeP>2025-02-11 14:13:12<SeP>2025-02-11 14:38:24<SeP>2025-02-11 15:03:36<SeP>2025-02-11 15:28:48<SeP>2025-02-11 15:54:00<SeP>2025-02-11 16:19:12<SeP>2025-02-11 16:44:24<SeP>2025-02-11 17:09:36<SeP>2025-02-11 17:34:48<SeP>2025-02-11 18:00:00<SeP>2025-02-11 18:25:12<SeP>2025-02-11 18:50:24<SeP>2025-02-11 19:15:36<SeP>2025-02-11 19:40:48<SeP>2025-02-11 20:06:00<SeP>2025-02-11 20:31:12<SeP>2025-02-11 20:56:24<SeP>2025-02-11 21:21:36<SeP>2025-02-11 21:46:48<SeP>2025-02-11 22:12:00<SeP>2025-02-11 22:37:12<SeP>2025-02-11 23:02:24<SeP>2025-02-11 23:27:36<SeP>2025-02-11 23:52:48<SeP>2025-02-12 00:18:00<SeP>2025-02-12 00:43:12<SeP>2025-02-12 01:08:24<SeP>2025-02-12 01:33:36<SeP>2025-02-12 01:58:48<SeP>2025-02-12 02:24:00<SeP>2025-02-12 02:49:12<SeP>2025-02-12 03:14:24<SeP>2025-02-12 03:39:36<SeP>2025-02-12 04:04:48<SeP>2025-02-12 04:30:00<SeP>2025-02-12 04:55:12<SeP>2025-02-12 05:20:24<SeP>2025-02-12 05:45:36<SeP>2025-02-12 06:10:48<SeP>2025-02-12 06:36:00<SeP>2025-02-12 07:01:12<SeP>2025-02-12 07:26:24<SeP>2025-02-12 07:51:36<SeP>2025-02-12 08:16:48<SeP>2025-02-12 08:42:00<SeP>2025-02-12 09:07:12<SeP>2025-02-12 09:32:24<SeP>2025-02-12 09:57:36<SeP>2025-02-12 10:22:48<SeP>2025-02-12 10:48:00<SeP>2025-02-12 11:13:12<SeP>2025-02-12 11:38:24<SeP>2025-02-12 12:03:36<SeP>2025-02-12 12:28:48<SeP>2025-02-12 12:54:00<SeP>2025-02-12 13:19:12<SeP>2025-02-12 13:44:24<SeP>2025-02-12 14:09:36<SeP>2025-02-12 14:34:48<SeP>2025-02-12 15:00:00<SeP>2025-02-12 15:25:12<SeP>2025-02-12 15:50:24<SeP>2025-02-12 16:15:36<SeP>2025-02-12 16:40:48<SeP>2025-02-12 17:06:00<SeP>2025-02-12 17:31:12<SeP>2025-02-12 17:56:24<SeP>2025-02-12 18:21:36<SeP>2025-02-12 18:46:48<SeP>2025-02-12 19:12:00<SeP>2025-02-12 19:37:12<SeP>2025-02-12 20:02:24<SeP>2025-02-12 20:27:36<SeP>2025-02-12 20:52:48<SeP>2025-02-12 21:18:00<SeP>2025-02-12 21:43:12<SeP>2025-02-12 22:08:24<SeP>2025-02-12 22:33:36<SeP>2025-02-12 22:58:48<SeP>2025-02-12 23:24:00<SeP>2025-02-12 23:49:12<SeP>2025-02-13 00:14:24<SeP>2025-02-13 00:39:36<SeP>2025-02-13 01:04:48<SeP>2025-02-13 01:30:00<SeP>2025-02-13 01:55:12<SeP>2025-02-13 02:20:24<SeP>2025-02-13 02:45:36<SeP>2025-02-13 03:10:48<SeP>2025-02-13 03:36:00<SeP>2025-02-13 04:01:12<SeP>2025-02-13 04:26:24<SeP>2025-02-13 04:51:36<SeP>2025-02-13 05:16:48<SeP>2025-02-13 05:42:00<SeP>2025-02-13 06:07:12<SeP>2025-02-13 06:32:24<SeP>2025-02-13 06:57:36<SeP>2025-02-13 07:22:48<SeP>2025-02-13 07:48:00<SeP>2025-02-13 08:13:12<SeP>2025-02-13 08:38:24<SeP>2025-02-13 09:03:36<SeP>2025-02-13 09:28:48<SeP>2025-02-13 09:54:00<SeP>2025-02-13 10:19:12<SeP>2025-02-13 10:44:24<SeP>2025-02-13 11:09:36<SeP>2025-02-13 11:34:48<SeP>2025-02-13 12:00:00<SeP>2025-02-13 12:25:12<SeP>2025-02-13 12:50:24<SeP>2025-02-13 13:15:36<SeP>2025-02-13 13:40:48<SeP>2025-02-13 14:06:00<SeP>2025-02-13 14:31:12<SeP>2025-02-13 14:56:24<SeP>2025-02-13 15:21:36<SeP>2025-02-13 15:46:48<SeP>2025-02-13 16:12:00<SeP>2025-02-13 16:37:12<SeP>2025-02-13 17:02:24<SeP>2025-02-13 17:27:36<SeP>2025-02-13 17:52:48<SeP>2025-02-13 18:18:00<SeP>2025-02-13 18:43:12<SeP>2025-02-13 19:08:24<SeP>2025-02-13 19:33:36<SeP>2025-02-13 19:58:48<SeP>2025-02-13 20:24:00<SeP>2025-02-13 20:49:12<SeP>2025-02-13 21:14:24<SeP>2025-02-13 21:39:36<SeP>2025-02-13 22:04:48<SeP>2025-02-13 22:30:00<SeP>2025-02-13 22:55:12<SeP>2025-02-13 23:20:24<SeP>2025-02-13 23:45:36<SeP>2025-02-14 00:10:48<SeP>2025-02-14 00:36:00<SeP>2025-02-14 01:01:12<SeP>2025-02-14 01:26:24<SeP>2025-02-14 01:51:36<SeP>2025-02-14 02:16:48<SeP>2025-02-14 02:42:00<SeP>2025-02-14 03:07:12<SeP>2025-02-14 03:32:24<SeP>2025-02-14 03:57:36<SeP>2025-02-14 04:22:48<SeP>2025-02-14 04:48:00<SeP>2025-02-14 05:13:12<SeP>2025-02-14 05:38:24<SeP>2025-02-14 06:03:36<SeP>2025-02-14 06:28:48<SeP>2025-02-14 06:54:00<SeP>2025-02-14 07:19:12<SeP>2025-02-14 07:44:24<SeP>2025-02-14 08:09:36<SeP>2025-02-14 08:34:48<SeP>2025-02-14 09:00:00<SeP>2025-02-14 09:25:12<SeP>2025-02-14 09:50:24<SeP>2025-02-14 10:15:36<SeP>2025-02-14 10:40:48<SeP>2025-02-14 11:06:00<SeP>2025-02-14 11:31:12<SeP>2025-02-14 11:56:24<SeP>2025-02-14 12:21:36<SeP>2025-02-14 12:46:48<SeP>2025-02-14 13:12:00<SeP>2025-02-14 13:37:12<SeP>2025-02-14 14:02:24<SeP>2025-02-14 14:27:36<SeP>2025-02-14 14:52:48<SeP>2025-02-14 15:18:00<SeP>2025-02-14 15:43:12<SeP>2025-02-14 16:08:24<SeP>2025-02-14 16:33:36<SeP>2025-02-14 16:58:48<SeP>2025-02-14 17:24:00<SeP>2025-02-14 17:49:12<SeP>2025-02-14 18:14:24<SeP>2025-02-14 18:39:36<SeP>2025-02-14 19:04:48<SeP>2025-02-14 19:30:00<SeP>2025-02-14 19:55:12<SeP>2025-02-14 20:20:24<SeP>2025-02-14 20:45:36<SeP>2025-02-14 21:10:48<SeP>2025-02-14 21:36:00<SeP>2025-02-14 22:01:12<SeP>2025-02-14 22:26:24<SeP>2025-02-14 22:51:36<SeP>2025-02-14 23:16:48<SeP>2025-02-14 23:42:00<SeP>2025-02-15 00:07:12<SeP>2025-02-15 00:32:24<SeP>2025-02-15 00:57:36<SeP>2025-02-15 01:22:48<SeP>2025-02-15 01:48:00<SeP>2025-02-15 02:13:12<SeP>2025-02-15 02:38:24<SeP>2025-02-15 03:03:36<SeP>2025-02-15 03:28:48<SeP>2025-02-15 03:54:00<SeP>2025-02-15 04:19:12<SeP>2025-02-15 04:44:24<SeP>2025-02-15 05:09:36<SeP>2025-02-15 05:34:48<SeP>2025-02-15 06:00:00<SeP>2025-02-15 06:25:12<SeP>2025-02-15 06:50:24<SeP>2025-02-15 07:15:36<SeP>2025-02-15 07:40:48<SeP>2025-02-15 08:06:00<SeP>2025-02-15 08:31:12<SeP>2025-02-15 08:56:24<SeP>2025-02-15 09:21:36<SeP>2025-02-15 09:46:48<SeP>2025-02-15 10:12:00<SeP>2025-02-15 10:37:12<SeP>2025-02-15 11:02:24<SeP>2025-02-15 11:27:36<SeP>2025-02-15 11:52:48<SeP>2025-02-15 12:18:00<SeP>2025-02-15 12:43:12<SeP>2025-02-15 13:08:24<SeP>2025-02-15 13:33:36<SeP>2025-02-15 13:58:48<SeP>2025-02-15 14:24:00<SeP>2025-02-15 14:49:12<SeP>2025-02-15 15:14:24<SeP>2025-02-15 15:39:36<SeP>2025-02-15 16:04:48<SeP>2025-02-15 16:30:00<SeP>2025-02-15 16:55:12<SeP>2025-02-15 17:20:24<SeP>2025-02-15 17:45:36<SeP>2025-02-15 18:10:48<SeP>2025-02-15 18:36:00<SeP>2025-02-15 19:01:12<SeP>2025-02-15 19:26:24<SeP>2025-02-15 19:51:36<SeP>2025-02-15 20:16:48<SeP>2025-02-15 20:42:00<SeP>2025-02-15 21:07:12<SeP>2025-02-15 21:32:24<SeP>2025-02-15 21:57:36<SeP>2025-02-15 22:22:48<SeP>2025-02-15 22:48:00<SeP>2025-02-15 23:13:12<SeP>2025-02-15 23:38:24<SeP>2025-02-16 00:03:36<SeP>2025-02-16 00:28:48<SeP>2025-02-16 00:54:00<SeP>2025-02-16 01:19:12<SeP>2025-02-16 01:44:24<SeP>2025-02-16 02:09:36<SeP>2025-02-16 02:34:48<SeP>2025-02-16 03:00:00<SeP>2025-02-16 03:25:12<SeP>2025-02-16 03:50:24<SeP>2025-02-16 04:15:36<SeP>2025-02-16 04:40:48<SeP>2025-02-16 05:06:00<SeP>2025-02-16 05:31:12<SeP>2025-02-16 05:56:24<SeP>2025-02-16 06:21:36<SeP>2025-02-16 06:46:48<SeP>2025-02-16 07:12:00<SeP>2025-02-16 07:37:12<SeP>2025-02-16 08:02:24<SeP>2025-02-16 08:27:36<SeP>2025-02-16 08:52:48<SeP>2025-02-16 09:18:00<SeP>2025-02-16 09:43:12<SeP>2025-02-16 10:08:24<SeP>2025-02-16 10:33:36<SeP>2025-02-16 10:58:48<SeP>2025-02-16 11:24:00<SeP>2025-02-16 11:49:12<SeP>2025-02-16 12:14:24<SeP>2025-02-16 12:39:36<SeP>2025-02-16 13:04:48<SeP>2025-02-16 13:30:00<SeP>2025-02-16 13:55:12<SeP>2025-02-16 14:20:24<SeP>2025-02-16 14:45:36<SeP>2025-02-16 15:10:48<SeP>2025-02-16 15:36:00<SeP>2025-02-16 16:01:12<SeP>2025-02-16 16:26:24<SeP>2025-02-16 16:51:36<SeP>2025-02-16 17:16:48<SeP>2025-02-16 17:42:00<SeP>2025-02-16 18:07:12<SeP>2025-02-16 18:32:24<SeP>2025-02-16 18:57:36<SeP>2025-02-16 19:22:48<SeP>2025-02-16 19:48:00<SeP>2025-02-16 20:13:12<SeP>2025-02-16 20:38:24<SeP>2025-02-16 21:03:36<SeP>2025-02-16 21:28:48<SeP>2025-02-16 21:54:00<SeP>2025-02-16 22:19:12<SeP>2025-02-16 22:44:24<SeP>2025-02-16 23:09:36<SeP>2025-02-16 23:34:48";
  const item1Label       = "Escaneos";
  const item1Data        = "10<SeP>25<SeP>5<SeP>2<SeP>21<SeP>37<SeP>35<SeP>27<SeP>23<SeP>13<SeP>12<SeP>21<SeP>12<SeP>35<SeP>10<SeP>13<SeP>9<SeP>20<SeP>41<SeP>6<SeP>41<SeP>19<SeP>13<SeP>38<SeP>14<SeP>10<SeP>11<SeP>22<SeP>18<SeP>20<SeP>15<SeP>27<SeP>6<SeP>31<SeP>13<SeP>12<SeP>14<SeP>35<SeP>18<SeP>16<SeP>20<SeP>13<SeP>9<SeP>22<SeP>10<SeP>20<SeP>35<SeP>13<SeP>11<SeP>7<SeP>110<SeP>15<SeP>6<SeP>29<SeP>4<SeP>8<SeP>21<SeP>15<SeP>4<SeP>17<SeP>8<SeP>4<SeP>32<SeP>13<SeP>28<SeP>15<SeP>27<SeP>30<SeP>15<SeP>11<SeP>19<SeP>31<SeP>33<SeP>24<SeP>25<SeP>93<SeP>17<SeP>57<SeP>16<SeP>25<SeP>11<SeP>14<SeP>28<SeP>11<SeP>23<SeP>16<SeP>73<SeP>8<SeP>13<SeP>47<SeP>18<SeP>14<SeP>22<SeP>43<SeP>29<SeP>25<SeP>24<SeP>15<SeP>22<SeP>25<SeP>17<SeP>13<SeP>36<SeP>71<SeP>55<SeP>11<SeP>11<SeP>29<SeP>3<SeP>6<SeP>3<SeP>12<SeP>14<SeP>47<SeP>42<SeP>10<SeP>11<SeP>11<SeP>4<SeP>12<SeP>34<SeP>27<SeP>15<SeP>16<SeP>11<SeP>12<SeP>12<SeP>16<SeP>41<SeP>45<SeP>13<SeP>10<SeP>11<SeP>17<SeP>36<SeP>13<SeP>17<SeP>13<SeP>14<SeP>12<SeP>10<SeP>14<SeP>13<SeP>13<SeP>22<SeP>14<SeP>25<SeP>33<SeP>2<SeP>15<SeP>13<SeP>17<SeP>12<SeP>11<SeP>14<SeP>16<SeP>33<SeP>41<SeP>15<SeP>15<SeP>17<SeP>37<SeP>125<SeP>7<SeP>1<SeP>6<SeP>5<SeP>22<SeP>18<SeP>23<SeP>22<SeP>37<SeP>13<SeP>49<SeP>33<SeP>11<SeP>7<SeP>44<SeP>29<SeP>15<SeP>16<SeP>38<SeP>46<SeP>15<SeP>13<SeP>8<SeP>7<SeP>10<SeP>11<SeP>20<SeP>18<SeP>15<SeP>13<SeP>32<SeP>13<SeP>22<SeP>13<SeP>15<SeP>21<SeP>49<SeP>41<SeP>58<SeP>14<SeP>20<SeP>13<SeP>13<SeP>15<SeP>43<SeP>56<SeP>6<SeP>0<SeP>8<SeP>4<SeP>10<SeP>10<SeP>50<SeP>1<SeP>1<SeP>47<SeP>10<SeP>56<SeP>18<SeP>10<SeP>12<SeP>10<SeP>13<SeP>9<SeP>39<SeP>11<SeP>13<SeP>14<SeP>11<SeP>36<SeP>16<SeP>10<SeP>36<SeP>21<SeP>13<SeP>13<SeP>23<SeP>20<SeP>34<SeP>31<SeP>39<SeP>39<SeP>20<SeP>40<SeP>12<SeP>24<SeP>40<SeP>72<SeP>40<SeP>21<SeP>45<SeP>16<SeP>13<SeP>13<SeP>10<SeP>9<SeP>11<SeP>13<SeP>25<SeP>9<SeP>1<SeP>8<SeP>25<SeP>22<SeP>3<SeP>12<SeP>45<SeP>26<SeP>4<SeP>3<SeP>2<SeP>22<SeP>17<SeP>31<SeP>14<SeP>16<SeP>36<SeP>36<SeP>17<SeP>10<SeP>21<SeP>29<SeP>42<SeP>12<SeP>10<SeP>11<SeP>14<SeP>34<SeP>14<SeP>12<SeP>18<SeP>21<SeP>16<SeP>11<SeP>12<SeP>12<SeP>41<SeP>34<SeP>49<SeP>24<SeP>12<SeP>79<SeP>54<SeP>18<SeP>11<SeP>38<SeP>64<SeP>9<SeP>11<SeP>19<SeP>62<SeP>9<SeP>11<SeP>14<SeP>14<SeP>42<SeP>6<SeP>2<SeP>2<SeP>2<SeP>23<SeP>6<SeP>6<SeP>6<SeP>27<SeP>35<SeP>8<SeP>18<SeP>4<SeP>6<SeP>14<SeP>51<SeP>25<SeP>30<SeP>21<SeP>36<SeP>12<SeP>7<SeP>37<SeP>12<SeP>17<SeP>16<SeP>8<SeP>15<SeP>7<SeP>13<SeP>13<SeP>14<SeP>32<SeP>13<SeP>17<SeP>10<SeP>18<SeP>8<SeP>17<SeP>12<SeP>16<SeP>70<SeP>36<SeP>14<SeP>19<SeP>14<SeP>18<SeP>13<SeP>9<SeP>12<SeP>12<SeP>42<SeP>9<SeP>17<SeP>15<SeP>18<SeP>20<SeP>27<SeP>3<SeP>8<SeP>14<SeP>11<SeP>29<SeP>29<SeP>17<SeP>2<SeP>11<SeP>9<SeP>40<SeP>7<SeP>15<SeP>21<SeP>77<SeP>18<SeP>14<SeP>24<SeP>28<SeP>40<SeP>10<SeP>34<SeP>27";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "42<SeP>13<SeP>14<SeP>11<SeP>105<SeP>91<SeP>34<SeP>66<SeP>86<SeP>99<SeP>16<SeP>35<SeP>76<SeP>70<SeP>84<SeP>38<SeP>16<SeP>2<SeP>64<SeP>28<SeP>1<SeP>44<SeP>36<SeP>9<SeP>9<SeP>27<SeP>10<SeP>2<SeP>3<SeP>1<SeP>24<SeP>1<SeP>1<SeP>2<SeP>42<SeP>61<SeP>47<SeP>60<SeP>36<SeP>18<SeP>81<SeP>73<SeP>1<SeP>52<SeP>36<SeP>34<SeP>55<SeP>39<SeP>31<SeP>1<SeP>8<SeP>14<SeP>3<SeP>8<SeP>23<SeP>10<SeP>30<SeP>151<SeP>13<SeP>29<SeP>27<SeP>112<SeP>50<SeP>13<SeP>12<SeP>7<SeP>26<SeP>22<SeP>171<SeP>112<SeP>13<SeP>7<SeP>14<SeP>39<SeP>21<SeP>34<SeP>58<SeP>85<SeP>57<SeP>47<SeP>47<SeP>6<SeP>75<SeP>72<SeP>23<SeP>12<SeP>2<SeP>1<SeP>1<SeP>34<SeP>10<SeP>29<SeP>121<SeP>158<SeP>131<SeP>105<SeP>7<SeP>25<SeP>36<SeP>3<SeP>17<SeP>4<SeP>83<SeP>160<SeP>67<SeP>5<SeP>8<SeP>29<SeP>5<SeP>13<SeP>53<SeP>25<SeP>25<SeP>122<SeP>127<SeP>92<SeP>8<SeP>6<SeP>8<SeP>74<SeP>176<SeP>89<SeP>122<SeP>176<SeP>51<SeP>12<SeP>533<SeP>784<SeP>772<SeP>733<SeP>724<SeP>733<SeP>764<SeP>857<SeP>636<SeP>90<SeP>146<SeP>159<SeP>109<SeP>72<SeP>88<SeP>109<SeP>39<SeP>65<SeP>40<SeP>31<SeP>84<SeP>121<SeP>74<SeP>91<SeP>1<SeP>38<SeP>83<SeP>28<SeP>342<SeP>209<SeP>67<SeP>9<SeP>15<SeP>43<SeP>159<SeP>68<SeP>78<SeP>71<SeP>8<SeP>1<SeP>65<SeP>53<SeP>5<SeP>3<SeP>1<SeP>4<SeP>3<SeP>24<SeP>14<SeP>22<SeP>5<SeP>8<SeP>4<SeP>22<SeP>41<SeP>264<SeP>265<SeP>46<SeP>19<SeP>1<SeP>1<SeP>3<SeP>24<SeP>50<SeP>122<SeP>78<SeP>68<SeP>4<SeP>3<SeP>40<SeP>49<SeP>21<SeP>155<SeP>79<SeP>4<SeP>27<SeP>21<SeP>45<SeP>41<SeP>45<SeP>23<SeP>81<SeP>197<SeP>273<SeP>230<SeP>148<SeP>137<SeP>67<SeP>65<SeP>30<SeP>22<SeP>2<SeP>264<SeP>140<SeP>115<SeP>51<SeP>3<SeP>6<SeP>30<SeP>109<SeP>84<SeP>11<SeP>31<SeP>8<SeP>10<SeP>92<SeP>56<SeP>70<SeP>53<SeP>17<SeP>56<SeP>49<SeP>25<SeP>60<SeP>87<SeP>310<SeP>32<SeP>36<SeP>63<SeP>79<SeP>80<SeP>47<SeP>38<SeP>15<SeP>172<SeP>1<SeP>74<SeP>188<SeP>89<SeP>9<SeP>4<SeP>2<SeP>13<SeP>19<SeP>41<SeP>189<SeP>60<SeP>2<SeP>40<SeP>129<SeP>132<SeP>57<SeP>40<SeP>55<SeP>52<SeP>14<SeP>27<SeP>16<SeP>172<SeP>175<SeP>12<SeP>33<SeP>47<SeP>65<SeP>53<SeP>11<SeP>3<SeP>63<SeP>73<SeP>14<SeP>3<SeP>5<SeP>3<SeP>32<SeP>68<SeP>36<SeP>97<SeP>31<SeP>34<SeP>16<SeP>4<SeP>5<SeP>12<SeP>111<SeP>114<SeP>187<SeP>218<SeP>201<SeP>61<SeP>5<SeP>5<SeP>4<SeP>12<SeP>84<SeP>43<SeP>30<SeP>47<SeP>41<SeP>50<SeP>29<SeP>34<SeP>25<SeP>132<SeP>40<SeP>11<SeP>44<SeP>39<SeP>4<SeP>7<SeP>28<SeP>6<SeP>3<SeP>4<SeP>4<SeP>71<SeP>10<SeP>8<SeP>72<SeP>142<SeP>117<SeP>89<SeP>60<SeP>21<SeP>10<SeP>5<SeP>72<SeP>29<SeP>21<SeP>78<SeP>37<SeP>10<SeP>4<SeP>28<SeP>7<SeP>18<SeP>21<SeP>5<SeP>7<SeP>4<SeP>6<SeP>6<SeP>6<SeP>25<SeP>177<SeP>115<SeP>96<SeP>107<SeP>33<SeP>12<SeP>34<SeP>65<SeP>58<SeP>31<SeP>24<SeP>78<SeP>25<SeP>8<SeP>3<SeP>12<SeP>32<SeP>138<SeP>95<SeP>66<SeP>109<SeP>30<SeP>38<SeP>70<SeP>32<SeP>27<SeP>29<SeP>3<SeP>91<SeP>112<SeP>133<SeP>156<SeP>151<SeP>71<SeP>114<SeP>23<SeP>4<SeP>62<SeP>12<SeP>61<SeP>117";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 00:25:12<SeP>2025-02-10 00:50:24<SeP>2025-02-10 01:15:36<SeP>2025-02-10 01:40:48<SeP>2025-02-10 02:06:00<SeP>2025-02-10 02:31:12<SeP>2025-02-10 02:56:24<SeP>2025-02-10 03:21:36<SeP>2025-02-10 03:46:48<SeP>2025-02-10 04:12:00<SeP>2025-02-10 04:37:12<SeP>2025-02-10 05:02:24<SeP>2025-02-10 05:27:36<SeP>2025-02-10 05:52:48<SeP>2025-02-10 06:18:00<SeP>2025-02-10 06:43:12<SeP>2025-02-10 07:08:24<SeP>2025-02-10 07:33:36<SeP>2025-02-10 07:58:48<SeP>2025-02-10 08:24:00<SeP>2025-02-10 08:49:12<SeP>2025-02-10 09:14:24<SeP>2025-02-10 09:39:36<SeP>2025-02-10 10:04:48<SeP>2025-02-10 10:30:00<SeP>2025-02-10 10:55:12<SeP>2025-02-10 11:20:24<SeP>2025-02-10 11:45:36<SeP>2025-02-10 12:10:48<SeP>2025-02-10 12:36:00<SeP>2025-02-10 13:01:12<SeP>2025-02-10 13:26:24<SeP>2025-02-10 13:51:36<SeP>2025-02-10 14:16:48<SeP>2025-02-10 14:42:00<SeP>2025-02-10 15:07:12<SeP>2025-02-10 15:32:24<SeP>2025-02-10 15:57:36<SeP>2025-02-10 16:22:48<SeP>2025-02-10 16:48:00<SeP>2025-02-10 17:13:12<SeP>2025-02-10 17:38:24<SeP>2025-02-10 18:03:36<SeP>2025-02-10 18:28:48<SeP>2025-02-10 18:54:00<SeP>2025-02-10 19:19:12<SeP>2025-02-10 19:44:24<SeP>2025-02-10 20:09:36<SeP>2025-02-10 20:34:48<SeP>2025-02-10 21:00:00<SeP>2025-02-10 21:25:12<SeP>2025-02-10 21:50:24<SeP>2025-02-10 22:15:36<SeP>2025-02-10 22:40:48<SeP>2025-02-10 23:06:00<SeP>2025-02-10 23:31:12<SeP>2025-02-10 23:56:24<SeP>2025-02-11 00:21:36<SeP>2025-02-11 00:46:48<SeP>2025-02-11 01:12:00<SeP>2025-02-11 01:37:12<SeP>2025-02-11 02:02:24<SeP>2025-02-11 02:27:36<SeP>2025-02-11 02:52:48<SeP>2025-02-11 03:18:00<SeP>2025-02-11 03:43:12<SeP>2025-02-11 04:08:24<SeP>2025-02-11 04:33:36<SeP>2025-02-11 04:58:48<SeP>2025-02-11 05:24:00<SeP>2025-02-11 05:49:12<SeP>2025-02-11 06:14:24<SeP>2025-02-11 06:39:36<SeP>2025-02-11 07:04:48<SeP>2025-02-11 07:30:00<SeP>2025-02-11 07:55:12<SeP>2025-02-11 08:20:24<SeP>2025-02-11 08:45:36<SeP>2025-02-11 09:10:48<SeP>2025-02-11 09:36:00<SeP>2025-02-11 10:01:12<SeP>2025-02-11 10:26:24<SeP>2025-02-11 10:51:36<SeP>2025-02-11 11:16:48<SeP>2025-02-11 11:42:00<SeP>2025-02-11 12:07:12<SeP>2025-02-11 12:32:24<SeP>2025-02-11 12:57:36<SeP>2025-02-11 13:22:48<SeP>2025-02-11 13:48:00<SeP>2025-02-11 14:13:12<SeP>2025-02-11 14:38:24<SeP>2025-02-11 15:03:36<SeP>2025-02-11 15:28:48<SeP>2025-02-11 15:54:00<SeP>2025-02-11 16:19:12<SeP>2025-02-11 16:44:24<SeP>2025-02-11 17:09:36<SeP>2025-02-11 17:34:48<SeP>2025-02-11 18:00:00<SeP>2025-02-11 18:25:12<SeP>2025-02-11 18:50:24<SeP>2025-02-11 19:15:36<SeP>2025-02-11 19:40:48<SeP>2025-02-11 20:06:00<SeP>2025-02-11 20:31:12<SeP>2025-02-11 20:56:24<SeP>2025-02-11 21:21:36<SeP>2025-02-11 21:46:48<SeP>2025-02-11 22:12:00<SeP>2025-02-11 22:37:12<SeP>2025-02-11 23:02:24<SeP>2025-02-11 23:27:36<SeP>2025-02-11 23:52:48<SeP>2025-02-12 00:18:00<SeP>2025-02-12 00:43:12<SeP>2025-02-12 01:08:24<SeP>2025-02-12 01:33:36<SeP>2025-02-12 01:58:48<SeP>2025-02-12 02:24:00<SeP>2025-02-12 02:49:12<SeP>2025-02-12 03:14:24<SeP>2025-02-12 03:39:36<SeP>2025-02-12 04:04:48<SeP>2025-02-12 04:30:00<SeP>2025-02-12 04:55:12<SeP>2025-02-12 05:20:24<SeP>2025-02-12 05:45:36<SeP>2025-02-12 06:10:48<SeP>2025-02-12 06:36:00<SeP>2025-02-12 07:01:12<SeP>2025-02-12 07:26:24<SeP>2025-02-12 07:51:36<SeP>2025-02-12 08:16:48<SeP>2025-02-12 08:42:00<SeP>2025-02-12 09:07:12<SeP>2025-02-12 09:32:24<SeP>2025-02-12 09:57:36<SeP>2025-02-12 10:22:48<SeP>2025-02-12 10:48:00<SeP>2025-02-12 11:13:12<SeP>2025-02-12 11:38:24<SeP>2025-02-12 12:03:36<SeP>2025-02-12 12:28:48<SeP>2025-02-12 12:54:00<SeP>2025-02-12 13:19:12<SeP>2025-02-12 13:44:24<SeP>2025-02-12 14:09:36<SeP>2025-02-12 14:34:48<SeP>2025-02-12 15:00:00<SeP>2025-02-12 15:25:12<SeP>2025-02-12 15:50:24<SeP>2025-02-12 16:15:36<SeP>2025-02-12 16:40:48<SeP>2025-02-12 17:06:00<SeP>2025-02-12 17:31:12<SeP>2025-02-12 17:56:24<SeP>2025-02-12 18:21:36<SeP>2025-02-12 18:46:48<SeP>2025-02-12 19:12:00<SeP>2025-02-12 19:37:12<SeP>2025-02-12 20:02:24<SeP>2025-02-12 20:27:36<SeP>2025-02-12 20:52:48<SeP>2025-02-12 21:18:00<SeP>2025-02-12 21:43:12<SeP>2025-02-12 22:08:24<SeP>2025-02-12 22:33:36<SeP>2025-02-12 22:58:48<SeP>2025-02-12 23:24:00<SeP>2025-02-12 23:49:12<SeP>2025-02-13 00:14:24<SeP>2025-02-13 00:39:36<SeP>2025-02-13 01:04:48<SeP>2025-02-13 01:30:00<SeP>2025-02-13 01:55:12<SeP>2025-02-13 02:20:24<SeP>2025-02-13 02:45:36<SeP>2025-02-13 03:10:48<SeP>2025-02-13 03:36:00<SeP>2025-02-13 04:01:12<SeP>2025-02-13 04:26:24<SeP>2025-02-13 04:51:36<SeP>2025-02-13 05:16:48<SeP>2025-02-13 05:42:00<SeP>2025-02-13 06:07:12<SeP>2025-02-13 06:32:24<SeP>2025-02-13 06:57:36<SeP>2025-02-13 07:22:48<SeP>2025-02-13 07:48:00<SeP>2025-02-13 08:13:12<SeP>2025-02-13 08:38:24<SeP>2025-02-13 09:03:36<SeP>2025-02-13 09:28:48<SeP>2025-02-13 09:54:00<SeP>2025-02-13 10:19:12<SeP>2025-02-13 10:44:24<SeP>2025-02-13 11:09:36<SeP>2025-02-13 11:34:48<SeP>2025-02-13 12:00:00<SeP>2025-02-13 12:25:12<SeP>2025-02-13 12:50:24<SeP>2025-02-13 13:15:36<SeP>2025-02-13 13:40:48<SeP>2025-02-13 14:06:00<SeP>2025-02-13 14:31:12<SeP>2025-02-13 14:56:24<SeP>2025-02-13 15:21:36<SeP>2025-02-13 15:46:48<SeP>2025-02-13 16:12:00<SeP>2025-02-13 16:37:12<SeP>2025-02-13 17:02:24<SeP>2025-02-13 17:27:36<SeP>2025-02-13 17:52:48<SeP>2025-02-13 18:18:00<SeP>2025-02-13 18:43:12<SeP>2025-02-13 19:08:24<SeP>2025-02-13 19:33:36<SeP>2025-02-13 19:58:48<SeP>2025-02-13 20:24:00<SeP>2025-02-13 20:49:12<SeP>2025-02-13 21:14:24<SeP>2025-02-13 21:39:36<SeP>2025-02-13 22:04:48<SeP>2025-02-13 22:30:00<SeP>2025-02-13 22:55:12<SeP>2025-02-13 23:20:24<SeP>2025-02-13 23:45:36<SeP>2025-02-14 00:10:48<SeP>2025-02-14 00:36:00<SeP>2025-02-14 01:01:12<SeP>2025-02-14 01:26:24<SeP>2025-02-14 01:51:36<SeP>2025-02-14 02:16:48<SeP>2025-02-14 02:42:00<SeP>2025-02-14 03:07:12<SeP>2025-02-14 03:32:24<SeP>2025-02-14 03:57:36<SeP>2025-02-14 04:22:48<SeP>2025-02-14 04:48:00<SeP>2025-02-14 05:13:12<SeP>2025-02-14 05:38:24<SeP>2025-02-14 06:03:36<SeP>2025-02-14 06:28:48<SeP>2025-02-14 06:54:00<SeP>2025-02-14 07:19:12<SeP>2025-02-14 07:44:24<SeP>2025-02-14 08:09:36<SeP>2025-02-14 08:34:48<SeP>2025-02-14 09:00:00<SeP>2025-02-14 09:25:12<SeP>2025-02-14 09:50:24<SeP>2025-02-14 10:15:36<SeP>2025-02-14 10:40:48<SeP>2025-02-14 11:06:00<SeP>2025-02-14 11:31:12<SeP>2025-02-14 11:56:24<SeP>2025-02-14 12:21:36<SeP>2025-02-14 12:46:48<SeP>2025-02-14 13:12:00<SeP>2025-02-14 13:37:12<SeP>2025-02-14 14:02:24<SeP>2025-02-14 14:27:36<SeP>2025-02-14 14:52:48<SeP>2025-02-14 15:18:00<SeP>2025-02-14 15:43:12<SeP>2025-02-14 16:08:24<SeP>2025-02-14 16:33:36<SeP>2025-02-14 16:58:48<SeP>2025-02-14 17:24:00<SeP>2025-02-14 17:49:12<SeP>2025-02-14 18:14:24<SeP>2025-02-14 18:39:36<SeP>2025-02-14 19:04:48<SeP>2025-02-14 19:30:00<SeP>2025-02-14 19:55:12<SeP>2025-02-14 20:20:24<SeP>2025-02-14 20:45:36<SeP>2025-02-14 21:10:48<SeP>2025-02-14 21:36:00<SeP>2025-02-14 22:01:12<SeP>2025-02-14 22:26:24<SeP>2025-02-14 22:51:36<SeP>2025-02-14 23:16:48<SeP>2025-02-14 23:42:00<SeP>2025-02-15 00:07:12<SeP>2025-02-15 00:32:24<SeP>2025-02-15 00:57:36<SeP>2025-02-15 01:22:48<SeP>2025-02-15 01:48:00<SeP>2025-02-15 02:13:12<SeP>2025-02-15 02:38:24<SeP>2025-02-15 03:03:36<SeP>2025-02-15 03:28:48<SeP>2025-02-15 03:54:00<SeP>2025-02-15 04:19:12<SeP>2025-02-15 04:44:24<SeP>2025-02-15 05:09:36<SeP>2025-02-15 05:34:48<SeP>2025-02-15 06:00:00<SeP>2025-02-15 06:25:12<SeP>2025-02-15 06:50:24<SeP>2025-02-15 07:15:36<SeP>2025-02-15 07:40:48<SeP>2025-02-15 08:06:00<SeP>2025-02-15 08:31:12<SeP>2025-02-15 08:56:24<SeP>2025-02-15 09:21:36<SeP>2025-02-15 09:46:48<SeP>2025-02-15 10:12:00<SeP>2025-02-15 10:37:12<SeP>2025-02-15 11:02:24<SeP>2025-02-15 11:27:36<SeP>2025-02-15 11:52:48<SeP>2025-02-15 12:18:00<SeP>2025-02-15 12:43:12<SeP>2025-02-15 13:08:24<SeP>2025-02-15 13:33:36<SeP>2025-02-15 13:58:48<SeP>2025-02-15 14:24:00<SeP>2025-02-15 14:49:12<SeP>2025-02-15 15:14:24<SeP>2025-02-15 15:39:36<SeP>2025-02-15 16:04:48<SeP>2025-02-15 16:30:00<SeP>2025-02-15 16:55:12<SeP>2025-02-15 17:20:24<SeP>2025-02-15 17:45:36<SeP>2025-02-15 18:10:48<SeP>2025-02-15 18:36:00<SeP>2025-02-15 19:01:12<SeP>2025-02-15 19:26:24<SeP>2025-02-15 19:51:36<SeP>2025-02-15 20:16:48<SeP>2025-02-15 20:42:00<SeP>2025-02-15 21:07:12<SeP>2025-02-15 21:32:24<SeP>2025-02-15 21:57:36<SeP>2025-02-15 22:22:48<SeP>2025-02-15 22:48:00<SeP>2025-02-15 23:13:12<SeP>2025-02-15 23:38:24<SeP>2025-02-16 00:03:36<SeP>2025-02-16 00:28:48<SeP>2025-02-16 00:54:00<SeP>2025-02-16 01:19:12<SeP>2025-02-16 01:44:24<SeP>2025-02-16 02:09:36<SeP>2025-02-16 02:34:48<SeP>2025-02-16 03:00:00<SeP>2025-02-16 03:25:12<SeP>2025-02-16 03:50:24<SeP>2025-02-16 04:15:36<SeP>2025-02-16 04:40:48<SeP>2025-02-16 05:06:00<SeP>2025-02-16 05:31:12<SeP>2025-02-16 05:56:24<SeP>2025-02-16 06:21:36<SeP>2025-02-16 06:46:48<SeP>2025-02-16 07:12:00<SeP>2025-02-16 07:37:12<SeP>2025-02-16 08:02:24<SeP>2025-02-16 08:27:36<SeP>2025-02-16 08:52:48<SeP>2025-02-16 09:18:00<SeP>2025-02-16 09:43:12<SeP>2025-02-16 10:08:24<SeP>2025-02-16 10:33:36<SeP>2025-02-16 10:58:48<SeP>2025-02-16 11:24:00<SeP>2025-02-16 11:49:12<SeP>2025-02-16 12:14:24<SeP>2025-02-16 12:39:36<SeP>2025-02-16 13:04:48<SeP>2025-02-16 13:30:00<SeP>2025-02-16 13:55:12<SeP>2025-02-16 14:20:24<SeP>2025-02-16 14:45:36<SeP>2025-02-16 15:10:48<SeP>2025-02-16 15:36:00<SeP>2025-02-16 16:01:12<SeP>2025-02-16 16:26:24<SeP>2025-02-16 16:51:36<SeP>2025-02-16 17:16:48<SeP>2025-02-16 17:42:00<SeP>2025-02-16 18:07:12<SeP>2025-02-16 18:32:24<SeP>2025-02-16 18:57:36<SeP>2025-02-16 19:22:48<SeP>2025-02-16 19:48:00<SeP>2025-02-16 20:13:12<SeP>2025-02-16 20:38:24<SeP>2025-02-16 21:03:36<SeP>2025-02-16 21:28:48<SeP>2025-02-16 21:54:00<SeP>2025-02-16 22:19:12<SeP>2025-02-16 22:44:24<SeP>2025-02-16 23:09:36<SeP>2025-02-16 23:34:48";
  const itemLabel       = "Escaneos";
  const itemData        = "10<SeP>25<SeP>5<SeP>2<SeP>21<SeP>37<SeP>35<SeP>27<SeP>23<SeP>13<SeP>12<SeP>21<SeP>12<SeP>35<SeP>10<SeP>13<SeP>9<SeP>20<SeP>41<SeP>6<SeP>41<SeP>19<SeP>13<SeP>38<SeP>14<SeP>10<SeP>11<SeP>22<SeP>18<SeP>20<SeP>15<SeP>27<SeP>6<SeP>31<SeP>13<SeP>12<SeP>14<SeP>35<SeP>18<SeP>16<SeP>20<SeP>13<SeP>9<SeP>22<SeP>10<SeP>20<SeP>35<SeP>13<SeP>11<SeP>7<SeP>110<SeP>15<SeP>6<SeP>29<SeP>4<SeP>8<SeP>21<SeP>15<SeP>4<SeP>17<SeP>8<SeP>4<SeP>32<SeP>13<SeP>28<SeP>15<SeP>27<SeP>30<SeP>15<SeP>11<SeP>19<SeP>31<SeP>33<SeP>24<SeP>25<SeP>93<SeP>17<SeP>57<SeP>16<SeP>25<SeP>11<SeP>14<SeP>28<SeP>11<SeP>23<SeP>16<SeP>73<SeP>8<SeP>13<SeP>47<SeP>18<SeP>14<SeP>22<SeP>43<SeP>29<SeP>25<SeP>24<SeP>15<SeP>22<SeP>25<SeP>17<SeP>13<SeP>36<SeP>71<SeP>55<SeP>11<SeP>11<SeP>29<SeP>3<SeP>6<SeP>3<SeP>12<SeP>14<SeP>47<SeP>42<SeP>10<SeP>11<SeP>11<SeP>4<SeP>12<SeP>34<SeP>27<SeP>15<SeP>16<SeP>11<SeP>12<SeP>12<SeP>16<SeP>41<SeP>45<SeP>13<SeP>10<SeP>11<SeP>17<SeP>36<SeP>13<SeP>17<SeP>13<SeP>14<SeP>12<SeP>10<SeP>14<SeP>13<SeP>13<SeP>22<SeP>14<SeP>25<SeP>33<SeP>2<SeP>15<SeP>13<SeP>17<SeP>12<SeP>11<SeP>14<SeP>16<SeP>33<SeP>41<SeP>15<SeP>15<SeP>17<SeP>37<SeP>125<SeP>7<SeP>1<SeP>6<SeP>5<SeP>22<SeP>18<SeP>23<SeP>22<SeP>37<SeP>13<SeP>49<SeP>33<SeP>11<SeP>7<SeP>44<SeP>29<SeP>15<SeP>16<SeP>38<SeP>46<SeP>15<SeP>13<SeP>8<SeP>7<SeP>10<SeP>11<SeP>20<SeP>18<SeP>15<SeP>13<SeP>32<SeP>13<SeP>22<SeP>13<SeP>15<SeP>21<SeP>49<SeP>41<SeP>58<SeP>14<SeP>20<SeP>13<SeP>13<SeP>15<SeP>43<SeP>56<SeP>6<SeP>0<SeP>8<SeP>4<SeP>10<SeP>10<SeP>50<SeP>1<SeP>1<SeP>47<SeP>10<SeP>56<SeP>18<SeP>10<SeP>12<SeP>10<SeP>13<SeP>9<SeP>39<SeP>11<SeP>13<SeP>14<SeP>11<SeP>36<SeP>16<SeP>10<SeP>36<SeP>21<SeP>13<SeP>13<SeP>23<SeP>20<SeP>34<SeP>31<SeP>39<SeP>39<SeP>20<SeP>40<SeP>12<SeP>24<SeP>40<SeP>72<SeP>40<SeP>21<SeP>45<SeP>16<SeP>13<SeP>13<SeP>10<SeP>9<SeP>11<SeP>13<SeP>25<SeP>9<SeP>1<SeP>8<SeP>25<SeP>22<SeP>3<SeP>12<SeP>45<SeP>26<SeP>4<SeP>3<SeP>2<SeP>22<SeP>17<SeP>31<SeP>14<SeP>16<SeP>36<SeP>36<SeP>17<SeP>10<SeP>21<SeP>29<SeP>42<SeP>12<SeP>10<SeP>11<SeP>14<SeP>34<SeP>14<SeP>12<SeP>18<SeP>21<SeP>16<SeP>11<SeP>12<SeP>12<SeP>41<SeP>34<SeP>49<SeP>24<SeP>12<SeP>79<SeP>54<SeP>18<SeP>11<SeP>38<SeP>64<SeP>9<SeP>11<SeP>19<SeP>62<SeP>9<SeP>11<SeP>14<SeP>14<SeP>42<SeP>6<SeP>2<SeP>2<SeP>2<SeP>23<SeP>6<SeP>6<SeP>6<SeP>27<SeP>35<SeP>8<SeP>18<SeP>4<SeP>6<SeP>14<SeP>51<SeP>25<SeP>30<SeP>21<SeP>36<SeP>12<SeP>7<SeP>37<SeP>12<SeP>17<SeP>16<SeP>8<SeP>15<SeP>7<SeP>13<SeP>13<SeP>14<SeP>32<SeP>13<SeP>17<SeP>10<SeP>18<SeP>8<SeP>17<SeP>12<SeP>16<SeP>70<SeP>36<SeP>14<SeP>19<SeP>14<SeP>18<SeP>13<SeP>9<SeP>12<SeP>12<SeP>42<SeP>9<SeP>17<SeP>15<SeP>18<SeP>20<SeP>27<SeP>3<SeP>8<SeP>14<SeP>11<SeP>29<SeP>29<SeP>17<SeP>2<SeP>11<SeP>9<SeP>40<SeP>7<SeP>15<SeP>21<SeP>77<SeP>18<SeP>14<SeP>24<SeP>28<SeP>40<SeP>10<SeP>34<SeP>27";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 00:25:12<SeP>2025-02-10 00:50:24<SeP>2025-02-10 01:15:36<SeP>2025-02-10 01:40:48<SeP>2025-02-10 02:06:00<SeP>2025-02-10 02:31:12<SeP>2025-02-10 02:56:24<SeP>2025-02-10 03:21:36<SeP>2025-02-10 03:46:48<SeP>2025-02-10 04:12:00<SeP>2025-02-10 04:37:12<SeP>2025-02-10 05:02:24<SeP>2025-02-10 05:27:36<SeP>2025-02-10 05:52:48<SeP>2025-02-10 06:18:00<SeP>2025-02-10 06:43:12<SeP>2025-02-10 07:08:24<SeP>2025-02-10 07:33:36<SeP>2025-02-10 07:58:48<SeP>2025-02-10 08:24:00<SeP>2025-02-10 08:49:12<SeP>2025-02-10 09:14:24<SeP>2025-02-10 09:39:36<SeP>2025-02-10 10:04:48<SeP>2025-02-10 10:30:00<SeP>2025-02-10 10:55:12<SeP>2025-02-10 11:20:24<SeP>2025-02-10 11:45:36<SeP>2025-02-10 12:10:48<SeP>2025-02-10 12:36:00<SeP>2025-02-10 13:01:12<SeP>2025-02-10 13:26:24<SeP>2025-02-10 13:51:36<SeP>2025-02-10 14:16:48<SeP>2025-02-10 14:42:00<SeP>2025-02-10 15:07:12<SeP>2025-02-10 15:32:24<SeP>2025-02-10 15:57:36<SeP>2025-02-10 16:22:48<SeP>2025-02-10 16:48:00<SeP>2025-02-10 17:13:12<SeP>2025-02-10 17:38:24<SeP>2025-02-10 18:03:36<SeP>2025-02-10 18:28:48<SeP>2025-02-10 18:54:00<SeP>2025-02-10 19:19:12<SeP>2025-02-10 19:44:24<SeP>2025-02-10 20:09:36<SeP>2025-02-10 20:34:48<SeP>2025-02-10 21:00:00<SeP>2025-02-10 21:25:12<SeP>2025-02-10 21:50:24<SeP>2025-02-10 22:15:36<SeP>2025-02-10 22:40:48<SeP>2025-02-10 23:06:00<SeP>2025-02-10 23:31:12<SeP>2025-02-10 23:56:24<SeP>2025-02-11 00:21:36<SeP>2025-02-11 00:46:48<SeP>2025-02-11 01:12:00<SeP>2025-02-11 01:37:12<SeP>2025-02-11 02:02:24<SeP>2025-02-11 02:27:36<SeP>2025-02-11 02:52:48<SeP>2025-02-11 03:18:00<SeP>2025-02-11 03:43:12<SeP>2025-02-11 04:08:24<SeP>2025-02-11 04:33:36<SeP>2025-02-11 04:58:48<SeP>2025-02-11 05:24:00<SeP>2025-02-11 05:49:12<SeP>2025-02-11 06:14:24<SeP>2025-02-11 06:39:36<SeP>2025-02-11 07:04:48<SeP>2025-02-11 07:30:00<SeP>2025-02-11 07:55:12<SeP>2025-02-11 08:20:24<SeP>2025-02-11 08:45:36<SeP>2025-02-11 09:10:48<SeP>2025-02-11 09:36:00<SeP>2025-02-11 10:01:12<SeP>2025-02-11 10:26:24<SeP>2025-02-11 10:51:36<SeP>2025-02-11 11:16:48<SeP>2025-02-11 11:42:00<SeP>2025-02-11 12:07:12<SeP>2025-02-11 12:32:24<SeP>2025-02-11 12:57:36<SeP>2025-02-11 13:22:48<SeP>2025-02-11 13:48:00<SeP>2025-02-11 14:13:12<SeP>2025-02-11 14:38:24<SeP>2025-02-11 15:03:36<SeP>2025-02-11 15:28:48<SeP>2025-02-11 15:54:00<SeP>2025-02-11 16:19:12<SeP>2025-02-11 16:44:24<SeP>2025-02-11 17:09:36<SeP>2025-02-11 17:34:48<SeP>2025-02-11 18:00:00<SeP>2025-02-11 18:25:12<SeP>2025-02-11 18:50:24<SeP>2025-02-11 19:15:36<SeP>2025-02-11 19:40:48<SeP>2025-02-11 20:06:00<SeP>2025-02-11 20:31:12<SeP>2025-02-11 20:56:24<SeP>2025-02-11 21:21:36<SeP>2025-02-11 21:46:48<SeP>2025-02-11 22:12:00<SeP>2025-02-11 22:37:12<SeP>2025-02-11 23:02:24<SeP>2025-02-11 23:27:36<SeP>2025-02-11 23:52:48<SeP>2025-02-12 00:18:00<SeP>2025-02-12 00:43:12<SeP>2025-02-12 01:08:24<SeP>2025-02-12 01:33:36<SeP>2025-02-12 01:58:48<SeP>2025-02-12 02:24:00<SeP>2025-02-12 02:49:12<SeP>2025-02-12 03:14:24<SeP>2025-02-12 03:39:36<SeP>2025-02-12 04:04:48<SeP>2025-02-12 04:30:00<SeP>2025-02-12 04:55:12<SeP>2025-02-12 05:20:24<SeP>2025-02-12 05:45:36<SeP>2025-02-12 06:10:48<SeP>2025-02-12 06:36:00<SeP>2025-02-12 07:01:12<SeP>2025-02-12 07:26:24<SeP>2025-02-12 07:51:36<SeP>2025-02-12 08:16:48<SeP>2025-02-12 08:42:00<SeP>2025-02-12 09:07:12<SeP>2025-02-12 09:32:24<SeP>2025-02-12 09:57:36<SeP>2025-02-12 10:22:48<SeP>2025-02-12 10:48:00<SeP>2025-02-12 11:13:12<SeP>2025-02-12 11:38:24<SeP>2025-02-12 12:03:36<SeP>2025-02-12 12:28:48<SeP>2025-02-12 12:54:00<SeP>2025-02-12 13:19:12<SeP>2025-02-12 13:44:24<SeP>2025-02-12 14:09:36<SeP>2025-02-12 14:34:48<SeP>2025-02-12 15:00:00<SeP>2025-02-12 15:25:12<SeP>2025-02-12 15:50:24<SeP>2025-02-12 16:15:36<SeP>2025-02-12 16:40:48<SeP>2025-02-12 17:06:00<SeP>2025-02-12 17:31:12<SeP>2025-02-12 17:56:24<SeP>2025-02-12 18:21:36<SeP>2025-02-12 18:46:48<SeP>2025-02-12 19:12:00<SeP>2025-02-12 19:37:12<SeP>2025-02-12 20:02:24<SeP>2025-02-12 20:27:36<SeP>2025-02-12 20:52:48<SeP>2025-02-12 21:18:00<SeP>2025-02-12 21:43:12<SeP>2025-02-12 22:08:24<SeP>2025-02-12 22:33:36<SeP>2025-02-12 22:58:48<SeP>2025-02-12 23:24:00<SeP>2025-02-12 23:49:12<SeP>2025-02-13 00:14:24<SeP>2025-02-13 00:39:36<SeP>2025-02-13 01:04:48<SeP>2025-02-13 01:30:00<SeP>2025-02-13 01:55:12<SeP>2025-02-13 02:20:24<SeP>2025-02-13 02:45:36<SeP>2025-02-13 03:10:48<SeP>2025-02-13 03:36:00<SeP>2025-02-13 04:01:12<SeP>2025-02-13 04:26:24<SeP>2025-02-13 04:51:36<SeP>2025-02-13 05:16:48<SeP>2025-02-13 05:42:00<SeP>2025-02-13 06:07:12<SeP>2025-02-13 06:32:24<SeP>2025-02-13 06:57:36<SeP>2025-02-13 07:22:48<SeP>2025-02-13 07:48:00<SeP>2025-02-13 08:13:12<SeP>2025-02-13 08:38:24<SeP>2025-02-13 09:03:36<SeP>2025-02-13 09:28:48<SeP>2025-02-13 09:54:00<SeP>2025-02-13 10:19:12<SeP>2025-02-13 10:44:24<SeP>2025-02-13 11:09:36<SeP>2025-02-13 11:34:48<SeP>2025-02-13 12:00:00<SeP>2025-02-13 12:25:12<SeP>2025-02-13 12:50:24<SeP>2025-02-13 13:15:36<SeP>2025-02-13 13:40:48<SeP>2025-02-13 14:06:00<SeP>2025-02-13 14:31:12<SeP>2025-02-13 14:56:24<SeP>2025-02-13 15:21:36<SeP>2025-02-13 15:46:48<SeP>2025-02-13 16:12:00<SeP>2025-02-13 16:37:12<SeP>2025-02-13 17:02:24<SeP>2025-02-13 17:27:36<SeP>2025-02-13 17:52:48<SeP>2025-02-13 18:18:00<SeP>2025-02-13 18:43:12<SeP>2025-02-13 19:08:24<SeP>2025-02-13 19:33:36<SeP>2025-02-13 19:58:48<SeP>2025-02-13 20:24:00<SeP>2025-02-13 20:49:12<SeP>2025-02-13 21:14:24<SeP>2025-02-13 21:39:36<SeP>2025-02-13 22:04:48<SeP>2025-02-13 22:30:00<SeP>2025-02-13 22:55:12<SeP>2025-02-13 23:20:24<SeP>2025-02-13 23:45:36<SeP>2025-02-14 00:10:48<SeP>2025-02-14 00:36:00<SeP>2025-02-14 01:01:12<SeP>2025-02-14 01:26:24<SeP>2025-02-14 01:51:36<SeP>2025-02-14 02:16:48<SeP>2025-02-14 02:42:00<SeP>2025-02-14 03:07:12<SeP>2025-02-14 03:32:24<SeP>2025-02-14 03:57:36<SeP>2025-02-14 04:22:48<SeP>2025-02-14 04:48:00<SeP>2025-02-14 05:13:12<SeP>2025-02-14 05:38:24<SeP>2025-02-14 06:03:36<SeP>2025-02-14 06:28:48<SeP>2025-02-14 06:54:00<SeP>2025-02-14 07:19:12<SeP>2025-02-14 07:44:24<SeP>2025-02-14 08:09:36<SeP>2025-02-14 08:34:48<SeP>2025-02-14 09:00:00<SeP>2025-02-14 09:25:12<SeP>2025-02-14 09:50:24<SeP>2025-02-14 10:15:36<SeP>2025-02-14 10:40:48<SeP>2025-02-14 11:06:00<SeP>2025-02-14 11:31:12<SeP>2025-02-14 11:56:24<SeP>2025-02-14 12:21:36<SeP>2025-02-14 12:46:48<SeP>2025-02-14 13:12:00<SeP>2025-02-14 13:37:12<SeP>2025-02-14 14:02:24<SeP>2025-02-14 14:27:36<SeP>2025-02-14 14:52:48<SeP>2025-02-14 15:18:00<SeP>2025-02-14 15:43:12<SeP>2025-02-14 16:08:24<SeP>2025-02-14 16:33:36<SeP>2025-02-14 16:58:48<SeP>2025-02-14 17:24:00<SeP>2025-02-14 17:49:12<SeP>2025-02-14 18:14:24<SeP>2025-02-14 18:39:36<SeP>2025-02-14 19:04:48<SeP>2025-02-14 19:30:00<SeP>2025-02-14 19:55:12<SeP>2025-02-14 20:20:24<SeP>2025-02-14 20:45:36<SeP>2025-02-14 21:10:48<SeP>2025-02-14 21:36:00<SeP>2025-02-14 22:01:12<SeP>2025-02-14 22:26:24<SeP>2025-02-14 22:51:36<SeP>2025-02-14 23:16:48<SeP>2025-02-14 23:42:00<SeP>2025-02-15 00:07:12<SeP>2025-02-15 00:32:24<SeP>2025-02-15 00:57:36<SeP>2025-02-15 01:22:48<SeP>2025-02-15 01:48:00<SeP>2025-02-15 02:13:12<SeP>2025-02-15 02:38:24<SeP>2025-02-15 03:03:36<SeP>2025-02-15 03:28:48<SeP>2025-02-15 03:54:00<SeP>2025-02-15 04:19:12<SeP>2025-02-15 04:44:24<SeP>2025-02-15 05:09:36<SeP>2025-02-15 05:34:48<SeP>2025-02-15 06:00:00<SeP>2025-02-15 06:25:12<SeP>2025-02-15 06:50:24<SeP>2025-02-15 07:15:36<SeP>2025-02-15 07:40:48<SeP>2025-02-15 08:06:00<SeP>2025-02-15 08:31:12<SeP>2025-02-15 08:56:24<SeP>2025-02-15 09:21:36<SeP>2025-02-15 09:46:48<SeP>2025-02-15 10:12:00<SeP>2025-02-15 10:37:12<SeP>2025-02-15 11:02:24<SeP>2025-02-15 11:27:36<SeP>2025-02-15 11:52:48<SeP>2025-02-15 12:18:00<SeP>2025-02-15 12:43:12<SeP>2025-02-15 13:08:24<SeP>2025-02-15 13:33:36<SeP>2025-02-15 13:58:48<SeP>2025-02-15 14:24:00<SeP>2025-02-15 14:49:12<SeP>2025-02-15 15:14:24<SeP>2025-02-15 15:39:36<SeP>2025-02-15 16:04:48<SeP>2025-02-15 16:30:00<SeP>2025-02-15 16:55:12<SeP>2025-02-15 17:20:24<SeP>2025-02-15 17:45:36<SeP>2025-02-15 18:10:48<SeP>2025-02-15 18:36:00<SeP>2025-02-15 19:01:12<SeP>2025-02-15 19:26:24<SeP>2025-02-15 19:51:36<SeP>2025-02-15 20:16:48<SeP>2025-02-15 20:42:00<SeP>2025-02-15 21:07:12<SeP>2025-02-15 21:32:24<SeP>2025-02-15 21:57:36<SeP>2025-02-15 22:22:48<SeP>2025-02-15 22:48:00<SeP>2025-02-15 23:13:12<SeP>2025-02-15 23:38:24<SeP>2025-02-16 00:03:36<SeP>2025-02-16 00:28:48<SeP>2025-02-16 00:54:00<SeP>2025-02-16 01:19:12<SeP>2025-02-16 01:44:24<SeP>2025-02-16 02:09:36<SeP>2025-02-16 02:34:48<SeP>2025-02-16 03:00:00<SeP>2025-02-16 03:25:12<SeP>2025-02-16 03:50:24<SeP>2025-02-16 04:15:36<SeP>2025-02-16 04:40:48<SeP>2025-02-16 05:06:00<SeP>2025-02-16 05:31:12<SeP>2025-02-16 05:56:24<SeP>2025-02-16 06:21:36<SeP>2025-02-16 06:46:48<SeP>2025-02-16 07:12:00<SeP>2025-02-16 07:37:12<SeP>2025-02-16 08:02:24<SeP>2025-02-16 08:27:36<SeP>2025-02-16 08:52:48<SeP>2025-02-16 09:18:00<SeP>2025-02-16 09:43:12<SeP>2025-02-16 10:08:24<SeP>2025-02-16 10:33:36<SeP>2025-02-16 10:58:48<SeP>2025-02-16 11:24:00<SeP>2025-02-16 11:49:12<SeP>2025-02-16 12:14:24<SeP>2025-02-16 12:39:36<SeP>2025-02-16 13:04:48<SeP>2025-02-16 13:30:00<SeP>2025-02-16 13:55:12<SeP>2025-02-16 14:20:24<SeP>2025-02-16 14:45:36<SeP>2025-02-16 15:10:48<SeP>2025-02-16 15:36:00<SeP>2025-02-16 16:01:12<SeP>2025-02-16 16:26:24<SeP>2025-02-16 16:51:36<SeP>2025-02-16 17:16:48<SeP>2025-02-16 17:42:00<SeP>2025-02-16 18:07:12<SeP>2025-02-16 18:32:24<SeP>2025-02-16 18:57:36<SeP>2025-02-16 19:22:48<SeP>2025-02-16 19:48:00<SeP>2025-02-16 20:13:12<SeP>2025-02-16 20:38:24<SeP>2025-02-16 21:03:36<SeP>2025-02-16 21:28:48<SeP>2025-02-16 21:54:00<SeP>2025-02-16 22:19:12<SeP>2025-02-16 22:44:24<SeP>2025-02-16 23:09:36<SeP>2025-02-16 23:34:48";
  const itemLabel       = "Ataques";
  const itemData        = "42<SeP>13<SeP>14<SeP>11<SeP>105<SeP>91<SeP>34<SeP>66<SeP>86<SeP>99<SeP>16<SeP>35<SeP>76<SeP>70<SeP>84<SeP>38<SeP>16<SeP>2<SeP>64<SeP>28<SeP>1<SeP>44<SeP>36<SeP>9<SeP>9<SeP>27<SeP>10<SeP>2<SeP>3<SeP>1<SeP>24<SeP>1<SeP>1<SeP>2<SeP>42<SeP>61<SeP>47<SeP>60<SeP>36<SeP>18<SeP>81<SeP>73<SeP>1<SeP>52<SeP>36<SeP>34<SeP>55<SeP>39<SeP>31<SeP>1<SeP>8<SeP>14<SeP>3<SeP>8<SeP>23<SeP>10<SeP>30<SeP>151<SeP>13<SeP>29<SeP>27<SeP>112<SeP>50<SeP>13<SeP>12<SeP>7<SeP>26<SeP>22<SeP>171<SeP>112<SeP>13<SeP>7<SeP>14<SeP>39<SeP>21<SeP>34<SeP>58<SeP>85<SeP>57<SeP>47<SeP>47<SeP>6<SeP>75<SeP>72<SeP>23<SeP>12<SeP>2<SeP>1<SeP>1<SeP>34<SeP>10<SeP>29<SeP>121<SeP>158<SeP>131<SeP>105<SeP>7<SeP>25<SeP>36<SeP>3<SeP>17<SeP>4<SeP>83<SeP>160<SeP>67<SeP>5<SeP>8<SeP>29<SeP>5<SeP>13<SeP>53<SeP>25<SeP>25<SeP>122<SeP>127<SeP>92<SeP>8<SeP>6<SeP>8<SeP>74<SeP>176<SeP>89<SeP>122<SeP>176<SeP>51<SeP>12<SeP>533<SeP>784<SeP>772<SeP>733<SeP>724<SeP>733<SeP>764<SeP>857<SeP>636<SeP>90<SeP>146<SeP>159<SeP>109<SeP>72<SeP>88<SeP>109<SeP>39<SeP>65<SeP>40<SeP>31<SeP>84<SeP>121<SeP>74<SeP>91<SeP>1<SeP>38<SeP>83<SeP>28<SeP>342<SeP>209<SeP>67<SeP>9<SeP>15<SeP>43<SeP>159<SeP>68<SeP>78<SeP>71<SeP>8<SeP>1<SeP>65<SeP>53<SeP>5<SeP>3<SeP>1<SeP>4<SeP>3<SeP>24<SeP>14<SeP>22<SeP>5<SeP>8<SeP>4<SeP>22<SeP>41<SeP>264<SeP>265<SeP>46<SeP>19<SeP>1<SeP>1<SeP>3<SeP>24<SeP>50<SeP>122<SeP>78<SeP>68<SeP>4<SeP>3<SeP>40<SeP>49<SeP>21<SeP>155<SeP>79<SeP>4<SeP>27<SeP>21<SeP>45<SeP>41<SeP>45<SeP>23<SeP>81<SeP>197<SeP>273<SeP>230<SeP>148<SeP>137<SeP>67<SeP>65<SeP>30<SeP>22<SeP>2<SeP>264<SeP>140<SeP>115<SeP>51<SeP>3<SeP>6<SeP>30<SeP>109<SeP>84<SeP>11<SeP>31<SeP>8<SeP>10<SeP>92<SeP>56<SeP>70<SeP>53<SeP>17<SeP>56<SeP>49<SeP>25<SeP>60<SeP>87<SeP>310<SeP>32<SeP>36<SeP>63<SeP>79<SeP>80<SeP>47<SeP>38<SeP>15<SeP>172<SeP>1<SeP>74<SeP>188<SeP>89<SeP>9<SeP>4<SeP>2<SeP>13<SeP>19<SeP>41<SeP>189<SeP>60<SeP>2<SeP>40<SeP>129<SeP>132<SeP>57<SeP>40<SeP>55<SeP>52<SeP>14<SeP>27<SeP>16<SeP>172<SeP>175<SeP>12<SeP>33<SeP>47<SeP>65<SeP>53<SeP>11<SeP>3<SeP>63<SeP>73<SeP>14<SeP>3<SeP>5<SeP>3<SeP>32<SeP>68<SeP>36<SeP>97<SeP>31<SeP>34<SeP>16<SeP>4<SeP>5<SeP>12<SeP>111<SeP>114<SeP>187<SeP>218<SeP>201<SeP>61<SeP>5<SeP>5<SeP>4<SeP>12<SeP>84<SeP>43<SeP>30<SeP>47<SeP>41<SeP>50<SeP>29<SeP>34<SeP>25<SeP>132<SeP>40<SeP>11<SeP>44<SeP>39<SeP>4<SeP>7<SeP>28<SeP>6<SeP>3<SeP>4<SeP>4<SeP>71<SeP>10<SeP>8<SeP>72<SeP>142<SeP>117<SeP>89<SeP>60<SeP>21<SeP>10<SeP>5<SeP>72<SeP>29<SeP>21<SeP>78<SeP>37<SeP>10<SeP>4<SeP>28<SeP>7<SeP>18<SeP>21<SeP>5<SeP>7<SeP>4<SeP>6<SeP>6<SeP>6<SeP>25<SeP>177<SeP>115<SeP>96<SeP>107<SeP>33<SeP>12<SeP>34<SeP>65<SeP>58<SeP>31<SeP>24<SeP>78<SeP>25<SeP>8<SeP>3<SeP>12<SeP>32<SeP>138<SeP>95<SeP>66<SeP>109<SeP>30<SeP>38<SeP>70<SeP>32<SeP>27<SeP>29<SeP>3<SeP>91<SeP>112<SeP>133<SeP>156<SeP>151<SeP>71<SeP>114<SeP>23<SeP>4<SeP>62<SeP>12<SeP>61<SeP>117";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "Germany<SeP>China<SeP>United States<SeP>India<SeP>Russia<SeP>Hong Kong<SeP>France<SeP>Taiwan<SeP>Indonesia<SeP>South Korea";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "6776<SeP>6278<SeP>2934<SeP>1941<SeP>1539<SeP>1320<SeP>1252<SeP>1140<SeP>1106<SeP>1023";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>India<SeP>United States<SeP>Hong Kong<SeP>Russia<SeP>South Korea<SeP>Sweden<SeP>Germany<SeP>Taiwan<SeP>Colombia";
  const itemLabel   = "Scans";
  const itemData    = "4446<SeP>805<SeP>778<SeP>522<SeP>362<SeP>213<SeP>181<SeP>114<SeP>99<SeP>92";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Germany<SeP>United States<SeP>China<SeP>France<SeP>Russia<SeP>India<SeP>Indonesia<SeP>Taiwan<SeP>Romania<SeP>Singapore";
  const itemLabel   = "Attacks";
  const itemData    = "6662<SeP>2156<SeP>1832<SeP>1222<SeP>1177<SeP>1136<SeP>1097<SeP>1041<SeP>963<SeP>814";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "44486<SeP>4134<SeP>14061<SeP>56971<SeP>3462<SeP>47890<SeP>16276<SeP>4837<SeP>9829<SeP>136052";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "6226<SeP>2838<SeP>1900<SeP>1579<SeP>1039<SeP>994<SeP>986<SeP>966<SeP>803<SeP>788";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4811<SeP>4766<SeP>22773<SeP>4808<SeP>9269<SeP>14061";
  const itemLabel   = "Scans";
  const itemData    = "2499<SeP>803<SeP>696<SeP>353<SeP>260<SeP>192<SeP>146<SeP>141<SeP>135<SeP>125";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "44486<SeP>14061<SeP>56971<SeP>3462<SeP>47890<SeP>16276<SeP>136052<SeP>45102<SeP>4766<SeP>8075";
  const itemLabel   = "Atacks";
  const itemData    = "6225<SeP>1775<SeP>1574<SeP>962<SeP>959<SeP>918<SeP>788<SeP>537<SeP>522<SeP>475";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "Germany<SeP>China<SeP>United States<SeP>India<SeP>Russia<SeP>Hong Kong<SeP>France<SeP>Taiwan<SeP>Indonesia<SeP>South Korea";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "6776<SeP>6278<SeP>2934<SeP>1941<SeP>1539<SeP>1320<SeP>1252<SeP>1140<SeP>1106<SeP>1023";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>India<SeP>United States<SeP>Hong Kong<SeP>Russia<SeP>South Korea<SeP>Sweden<SeP>Germany<SeP>Taiwan<SeP>Colombia";
  const itemLabel   = "Escaneos";
  const itemData    = "4446<SeP>805<SeP>778<SeP>522<SeP>362<SeP>213<SeP>181<SeP>114<SeP>99<SeP>92";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Germany<SeP>United States<SeP>China<SeP>France<SeP>Russia<SeP>India<SeP>Indonesia<SeP>Taiwan<SeP>Romania<SeP>Singapore";
  const itemLabel   = "Ataques";
  const itemData    = "6662<SeP>2156<SeP>1832<SeP>1222<SeP>1177<SeP>1136<SeP>1097<SeP>1041<SeP>963<SeP>814";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "44486<SeP>4134<SeP>14061<SeP>56971<SeP>3462<SeP>47890<SeP>16276<SeP>4837<SeP>9829<SeP>136052";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "6226<SeP>2838<SeP>1900<SeP>1579<SeP>1039<SeP>994<SeP>986<SeP>966<SeP>803<SeP>788";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4811<SeP>4766<SeP>22773<SeP>4808<SeP>9269<SeP>14061";
  const itemLabel   = "Escaneos";
  const itemData    = "2499<SeP>803<SeP>696<SeP>353<SeP>260<SeP>192<SeP>146<SeP>141<SeP>135<SeP>125";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "44486<SeP>14061<SeP>56971<SeP>3462<SeP>47890<SeP>16276<SeP>136052<SeP>45102<SeP>4766<SeP>8075";
  const itemLabel   = "Ataques";
  const itemData    = "6225<SeP>1775<SeP>1574<SeP>962<SeP>959<SeP>918<SeP>788<SeP>537<SeP>522<SeP>475";
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
