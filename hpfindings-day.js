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
  document.getElementById("trend-click").innerHTML = "0.1";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "0.1";
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
  const metricData    = "6800";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "1155";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "5645";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "535";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1821";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "3824";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "294";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "497";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "3327";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "277";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "6800";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "1155";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "5645";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "535";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1821";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "3824";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "294";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "497";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "3327";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "277";
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
  const incomingData = "6800<SeP>1155<SeP>5645<SeP>535";
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
  const incomingData = "5645<SeP>1821<SeP>3824<SeP>294";
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
  const incomingData = "3824<SeP>497<SeP>3327<SeP>277";
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
  const incomingData = "526<SeP>478<SeP>48";
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
  const incomingData = "16<SeP>4<SeP>12<SeP>2";
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
  const incomingData = "6800<SeP>1155<SeP>5645<SeP>535";
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
  const incomingData = "5645<SeP>1821<SeP>3824<SeP>294";
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
  const incomingData = "3824<SeP>497<SeP>3327<SeP>277";
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
  const incomingData = "526<SeP>478<SeP>48";
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
  const incomingData = "16<SeP>4<SeP>12<SeP>2";
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
  const column1Data  = "IP01 (<span class=blur>42.60.155.172</span>)<SeP>IP02 (<span class=blur>64.23.130.251</span>)<SeP>IP03 (<span class=blur>165.22.113.203</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>80.251.219.209</span>)<SeP>IP08 (<span class=blur>51.91.100.253</span>)<SeP>IP07 (<span class=blur>51.77.245.237</span>)<SeP>IP06 (<span class=blur>158.51.124.56</span>)<SeP>IP09 (<span class=blur>186.10.86.130</span>)<SeP>IP10 (<span class=blur>2.57.122.193</span>)";
  const column2Data  = "AS9506<SeP>AS14061<SeP>AS14061<SeP>AS34534<SeP>AS25820<SeP>AS16276<SeP>AS16276<SeP>AS399804<SeP>AS27651<SeP>AS47890";
  const column3Data  = "<span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-cl\u0022></span>\u00a0Chile<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania";
  const column4Data  = "130<SeP>129<SeP>126<SeP>79<SeP>71<SeP>70<SeP>70<SeP>70<SeP>69<SeP>68";
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
  const column1Data  = "IP01 (<span class=blur>42.60.155.172</span>)<SeP>IP12 (<span class=blur>175.165.107.161</span>)<SeP>IP13 (<span class=blur>176.65.137.13</span>)<SeP>IP14 (<span class=blur>185.7.214.180</span>)<SeP>IP15 (<span class=blur>117.244.232.72</span>)<SeP>IP16 (<span class=blur>204.76.203.83</span>)<SeP>IP18 (<span class=blur>189.7.17.61</span>)<SeP>IP17 (<span class=blur>222.142.236.168</span>)<SeP>IP20 (<span class=blur>218.92.0.226</span>)<SeP>IP19 (<span class=blur>14.103.112.14</span>)";
  const column2Data  = "AS9506<SeP>AS4837<SeP>AS50580<SeP>AS207566<SeP>AS9829<SeP>AS51396<SeP>AS28573<SeP>AS4837<SeP>AS4134<SeP>AS4811";
  const column3Data  = "<span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-in\u0022></span>\u00a0India<SeP><span class=\u0022fi fi-nl\u0022></span>\u00a0The Netherlands<SeP><span class=\u0022fi fi-br\u0022></span>\u00a0Brazil<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "130<SeP>63<SeP>56<SeP>29<SeP>25<SeP>21<SeP>20<SeP>20<SeP>19<SeP>19";
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
  const column1Data  = "IP02 (<span class=blur>64.23.130.251</span>)<SeP>IP03 (<span class=blur>165.22.113.203</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>80.251.219.209</span>)<SeP>IP08 (<span class=blur>51.91.100.253</span>)<SeP>IP07 (<span class=blur>51.77.245.237</span>)<SeP>IP06 (<span class=blur>158.51.124.56</span>)<SeP>IP09 (<span class=blur>186.10.86.130</span>)<SeP>IP10 (<span class=blur>2.57.122.193</span>)<SeP>IP11 (<span class=blur>51.75.24.236</span>)";
  const column2Data  = "AS14061<SeP>AS14061<SeP>AS34534<SeP>AS25820<SeP>AS16276<SeP>AS16276<SeP>AS399804<SeP>AS27651<SeP>AS47890<SeP>AS16276";
  const column3Data  = "<span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-cl\u0022></span>\u00a0Chile<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France";
  const column4Data  = "128<SeP>125<SeP>78<SeP>71<SeP>70<SeP>70<SeP>70<SeP>69<SeP>68<SeP>66";
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
  const column1Data   = "IP01 (<span class=blur>42.60.155.172</span>)<SeP>IP02 (<span class=blur>64.23.130.251</span>)<SeP>IP03 (<span class=blur>165.22.113.203</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>80.251.219.209</span>)<SeP>IP08 (<span class=blur>51.91.100.253</span>)<SeP>IP07 (<span class=blur>51.77.245.237</span>)<SeP>IP06 (<span class=blur>158.51.124.56</span>)<SeP>IP09 (<span class=blur>186.10.86.130</span>)<SeP>IP10 (<span class=blur>2.57.122.193</span>)";
  const column2Data   = "AS9506<SeP>AS14061<SeP>AS14061<SeP>AS34534<SeP>AS25820<SeP>AS16276<SeP>AS16276<SeP>AS399804<SeP>AS27651<SeP>AS47890";
  const column3Data   = "<span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-cl\u0022></span>\u00a0Chile<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "130<SeP>129<SeP>126<SeP>79<SeP>71<SeP>70<SeP>70<SeP>70<SeP>69<SeP>68";
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
  const column1Data   = "IP01 (<span class=blur>42.60.155.172</span>)<SeP>IP12 (<span class=blur>175.165.107.161</span>)<SeP>IP13 (<span class=blur>176.65.137.13</span>)<SeP>IP14 (<span class=blur>185.7.214.180</span>)<SeP>IP15 (<span class=blur>117.244.232.72</span>)<SeP>IP16 (<span class=blur>204.76.203.83</span>)<SeP>IP18 (<span class=blur>189.7.17.61</span>)<SeP>IP17 (<span class=blur>222.142.236.168</span>)<SeP>IP20 (<span class=blur>218.92.0.226</span>)<SeP>IP19 (<span class=blur>14.103.112.14</span>)";
  const column2Data   = "AS9506<SeP>AS4837<SeP>AS50580<SeP>AS207566<SeP>AS9829<SeP>AS51396<SeP>AS28573<SeP>AS4837<SeP>AS4134<SeP>AS4811";
  const column3Data   = "<span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-in\u0022></span>\u00a0India<SeP><span class=\u0022fi fi-nl\u0022></span>\u00a0The Netherlands<SeP><span class=\u0022fi fi-br\u0022></span>\u00a0Brazil<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "130<SeP>63<SeP>56<SeP>29<SeP>25<SeP>21<SeP>20<SeP>20<SeP>19<SeP>19";
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
  const column1Data   = "IP02 (<span class=blur>64.23.130.251</span>)<SeP>IP03 (<span class=blur>165.22.113.203</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>80.251.219.209</span>)<SeP>IP08 (<span class=blur>51.91.100.253</span>)<SeP>IP07 (<span class=blur>51.77.245.237</span>)<SeP>IP06 (<span class=blur>158.51.124.56</span>)<SeP>IP09 (<span class=blur>186.10.86.130</span>)<SeP>IP10 (<span class=blur>2.57.122.193</span>)<SeP>IP11 (<span class=blur>51.75.24.236</span>)";
  const column2Data   = "AS14061<SeP>AS14061<SeP>AS34534<SeP>AS25820<SeP>AS16276<SeP>AS16276<SeP>AS399804<SeP>AS27651<SeP>AS47890<SeP>AS16276";
  const column3Data   = "<span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-cl\u0022></span>\u00a0Chile<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "128<SeP>125<SeP>78<SeP>71<SeP>70<SeP>70<SeP>70<SeP>69<SeP>68<SeP>66";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root Hw8@cMcc<SeP>root icatch99<SeP>root xmhdipc<SeP>root antslq<SeP>root 2011vesta<SeP>root S2fGqNFs<SeP>root hichiphx<SeP>admin system";
  const column3Data   = "433<SeP>431<SeP>90<SeP>87<SeP>72<SeP>66<SeP>66<SeP>65<SeP>65<SeP>65";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>f1beff22a446ad4acaec395fa58acb9373beaaa5914e12361b8832a3829b9b36<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73<SeP>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>ad6d5200f186fde0d7d5607f4ef1c03512463bc058b2f323f04939a4728a0cac<SeP>94f2e4d8d4436874785cd14e6e6d403507b8750852f7f2040352069a75da4c00";
  const column2Data  = "440<SeP>31<SeP>11<SeP>6<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1";
  let   column3Data  = "redir<SeP>redir<SeP>download<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>download<SeP>upload";
  const column4Data  = "malicious<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>malicious<SeP>NA";
  const listLocale   = "en-US";

  column3Data = column3Data.replace(/redir/g, "redirection");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsEnglish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Malware Distribution Site";
  const column2Label = "Count";
  const column1Data  = "http://37.44.238.88<SeP>http://91.224.92.19";
  const column2Data  = "13<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "3384<SeP>3416";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root Hw8@cMcc<SeP>root icatch99<SeP>root xmhdipc<SeP>root antslq<SeP>root 2011vesta<SeP>root S2fGqNFs<SeP>root hichiphx<SeP>admin system";
  const column3Data   = "433<SeP>431<SeP>90<SeP>87<SeP>72<SeP>66<SeP>66<SeP>65<SeP>65<SeP>65";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>f1beff22a446ad4acaec395fa58acb9373beaaa5914e12361b8832a3829b9b36<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73<SeP>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>ad6d5200f186fde0d7d5607f4ef1c03512463bc058b2f323f04939a4728a0cac<SeP>94f2e4d8d4436874785cd14e6e6d403507b8750852f7f2040352069a75da4c00";
  const column2Data  = "440<SeP>31<SeP>11<SeP>6<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1";
  let   column3Data  = "redir<SeP>redir<SeP>download<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>download<SeP>upload";
  let   column4Data  = "malicious<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>malicious<SeP>NA";
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
  const column1Data  = "http://37.44.238.88<SeP>http://91.224.92.19";
  const column2Data  = "13<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "3384<SeP>3416";
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
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "traffic between 2025-02-23 and 2025-02-23"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          821,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "scans between 2025-02-23 and 2025-02-23"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          437,28,
          821,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "attacks between 2025-02-23 and 2025-02-23"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          797,49,
          821,50
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
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "tráfico entre 2025-02-23 y 2025-02-23"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          821,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "escaneos entre 2025-02-23 y 2025-02-23"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          437,28,
          821,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "ataques entre 2025-02-23 y 2025-02-23"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          797,49,
          821,50
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
  const labelsData       = "2025-02-23 00:00:00<SeP>2025-02-23 00:03:36<SeP>2025-02-23 00:07:12<SeP>2025-02-23 00:10:48<SeP>2025-02-23 00:14:24<SeP>2025-02-23 00:18:00<SeP>2025-02-23 00:21:36<SeP>2025-02-23 00:25:12<SeP>2025-02-23 00:28:48<SeP>2025-02-23 00:32:24<SeP>2025-02-23 00:36:00<SeP>2025-02-23 00:39:36<SeP>2025-02-23 00:43:12<SeP>2025-02-23 00:46:48<SeP>2025-02-23 00:50:24<SeP>2025-02-23 00:54:00<SeP>2025-02-23 00:57:36<SeP>2025-02-23 01:01:12<SeP>2025-02-23 01:04:48<SeP>2025-02-23 01:08:24<SeP>2025-02-23 01:12:00<SeP>2025-02-23 01:15:36<SeP>2025-02-23 01:19:12<SeP>2025-02-23 01:22:48<SeP>2025-02-23 01:26:24<SeP>2025-02-23 01:30:00<SeP>2025-02-23 01:33:36<SeP>2025-02-23 01:37:12<SeP>2025-02-23 01:40:48<SeP>2025-02-23 01:44:24<SeP>2025-02-23 01:48:00<SeP>2025-02-23 01:51:36<SeP>2025-02-23 01:55:12<SeP>2025-02-23 01:58:48<SeP>2025-02-23 02:02:24<SeP>2025-02-23 02:06:00<SeP>2025-02-23 02:09:36<SeP>2025-02-23 02:13:12<SeP>2025-02-23 02:16:48<SeP>2025-02-23 02:20:24<SeP>2025-02-23 02:24:00<SeP>2025-02-23 02:27:36<SeP>2025-02-23 02:31:12<SeP>2025-02-23 02:34:48<SeP>2025-02-23 02:38:24<SeP>2025-02-23 02:42:00<SeP>2025-02-23 02:45:36<SeP>2025-02-23 02:49:12<SeP>2025-02-23 02:52:48<SeP>2025-02-23 02:56:24<SeP>2025-02-23 03:00:00<SeP>2025-02-23 03:03:36<SeP>2025-02-23 03:07:12<SeP>2025-02-23 03:10:48<SeP>2025-02-23 03:14:24<SeP>2025-02-23 03:18:00<SeP>2025-02-23 03:21:36<SeP>2025-02-23 03:25:12<SeP>2025-02-23 03:28:48<SeP>2025-02-23 03:32:24<SeP>2025-02-23 03:36:00<SeP>2025-02-23 03:39:36<SeP>2025-02-23 03:43:12<SeP>2025-02-23 03:46:48<SeP>2025-02-23 03:50:24<SeP>2025-02-23 03:54:00<SeP>2025-02-23 03:57:36<SeP>2025-02-23 04:01:12<SeP>2025-02-23 04:04:48<SeP>2025-02-23 04:08:24<SeP>2025-02-23 04:12:00<SeP>2025-02-23 04:15:36<SeP>2025-02-23 04:19:12<SeP>2025-02-23 04:22:48<SeP>2025-02-23 04:26:24<SeP>2025-02-23 04:30:00<SeP>2025-02-23 04:33:36<SeP>2025-02-23 04:37:12<SeP>2025-02-23 04:40:48<SeP>2025-02-23 04:44:24<SeP>2025-02-23 04:48:00<SeP>2025-02-23 04:51:36<SeP>2025-02-23 04:55:12<SeP>2025-02-23 04:58:48<SeP>2025-02-23 05:02:24<SeP>2025-02-23 05:06:00<SeP>2025-02-23 05:09:36<SeP>2025-02-23 05:13:12<SeP>2025-02-23 05:16:48<SeP>2025-02-23 05:20:24<SeP>2025-02-23 05:24:00<SeP>2025-02-23 05:27:36<SeP>2025-02-23 05:31:12<SeP>2025-02-23 05:34:48<SeP>2025-02-23 05:38:24<SeP>2025-02-23 05:42:00<SeP>2025-02-23 05:45:36<SeP>2025-02-23 05:49:12<SeP>2025-02-23 05:52:48<SeP>2025-02-23 05:56:24<SeP>2025-02-23 06:00:00<SeP>2025-02-23 06:03:36<SeP>2025-02-23 06:07:12<SeP>2025-02-23 06:10:48<SeP>2025-02-23 06:14:24<SeP>2025-02-23 06:18:00<SeP>2025-02-23 06:21:36<SeP>2025-02-23 06:25:12<SeP>2025-02-23 06:28:48<SeP>2025-02-23 06:32:24<SeP>2025-02-23 06:36:00<SeP>2025-02-23 06:39:36<SeP>2025-02-23 06:43:12<SeP>2025-02-23 06:46:48<SeP>2025-02-23 06:50:24<SeP>2025-02-23 06:54:00<SeP>2025-02-23 06:57:36<SeP>2025-02-23 07:01:12<SeP>2025-02-23 07:04:48<SeP>2025-02-23 07:08:24<SeP>2025-02-23 07:12:00<SeP>2025-02-23 07:15:36<SeP>2025-02-23 07:19:12<SeP>2025-02-23 07:22:48<SeP>2025-02-23 07:26:24<SeP>2025-02-23 07:30:00<SeP>2025-02-23 07:33:36<SeP>2025-02-23 07:37:12<SeP>2025-02-23 07:40:48<SeP>2025-02-23 07:44:24<SeP>2025-02-23 07:48:00<SeP>2025-02-23 07:51:36<SeP>2025-02-23 07:55:12<SeP>2025-02-23 07:58:48<SeP>2025-02-23 08:02:24<SeP>2025-02-23 08:06:00<SeP>2025-02-23 08:09:36<SeP>2025-02-23 08:13:12<SeP>2025-02-23 08:16:48<SeP>2025-02-23 08:20:24<SeP>2025-02-23 08:24:00<SeP>2025-02-23 08:27:36<SeP>2025-02-23 08:31:12<SeP>2025-02-23 08:34:48<SeP>2025-02-23 08:38:24<SeP>2025-02-23 08:42:00<SeP>2025-02-23 08:45:36<SeP>2025-02-23 08:49:12<SeP>2025-02-23 08:52:48<SeP>2025-02-23 08:56:24<SeP>2025-02-23 09:00:00<SeP>2025-02-23 09:03:36<SeP>2025-02-23 09:07:12<SeP>2025-02-23 09:10:48<SeP>2025-02-23 09:14:24<SeP>2025-02-23 09:18:00<SeP>2025-02-23 09:21:36<SeP>2025-02-23 09:25:12<SeP>2025-02-23 09:28:48<SeP>2025-02-23 09:32:24<SeP>2025-02-23 09:36:00<SeP>2025-02-23 09:39:36<SeP>2025-02-23 09:43:12<SeP>2025-02-23 09:46:48<SeP>2025-02-23 09:50:24<SeP>2025-02-23 09:54:00<SeP>2025-02-23 09:57:36<SeP>2025-02-23 10:01:12<SeP>2025-02-23 10:04:48<SeP>2025-02-23 10:08:24<SeP>2025-02-23 10:12:00<SeP>2025-02-23 10:15:36<SeP>2025-02-23 10:19:12<SeP>2025-02-23 10:22:48<SeP>2025-02-23 10:26:24<SeP>2025-02-23 10:30:00<SeP>2025-02-23 10:33:36<SeP>2025-02-23 10:37:12<SeP>2025-02-23 10:40:48<SeP>2025-02-23 10:44:24<SeP>2025-02-23 10:48:00<SeP>2025-02-23 10:51:36<SeP>2025-02-23 10:55:12<SeP>2025-02-23 10:58:48<SeP>2025-02-23 11:02:24<SeP>2025-02-23 11:06:00<SeP>2025-02-23 11:09:36<SeP>2025-02-23 11:13:12<SeP>2025-02-23 11:16:48<SeP>2025-02-23 11:20:24<SeP>2025-02-23 11:24:00<SeP>2025-02-23 11:27:36<SeP>2025-02-23 11:31:12<SeP>2025-02-23 11:34:48<SeP>2025-02-23 11:38:24<SeP>2025-02-23 11:42:00<SeP>2025-02-23 11:45:36<SeP>2025-02-23 11:49:12<SeP>2025-02-23 11:52:48<SeP>2025-02-23 11:56:24<SeP>2025-02-23 12:00:00<SeP>2025-02-23 12:03:36<SeP>2025-02-23 12:07:12<SeP>2025-02-23 12:10:48<SeP>2025-02-23 12:14:24<SeP>2025-02-23 12:18:00<SeP>2025-02-23 12:21:36<SeP>2025-02-23 12:25:12<SeP>2025-02-23 12:28:48<SeP>2025-02-23 12:32:24<SeP>2025-02-23 12:36:00<SeP>2025-02-23 12:39:36<SeP>2025-02-23 12:43:12<SeP>2025-02-23 12:46:48<SeP>2025-02-23 12:50:24<SeP>2025-02-23 12:54:00<SeP>2025-02-23 12:57:36<SeP>2025-02-23 13:01:12<SeP>2025-02-23 13:04:48<SeP>2025-02-23 13:08:24<SeP>2025-02-23 13:12:00<SeP>2025-02-23 13:15:36<SeP>2025-02-23 13:19:12<SeP>2025-02-23 13:22:48<SeP>2025-02-23 13:26:24<SeP>2025-02-23 13:30:00<SeP>2025-02-23 13:33:36<SeP>2025-02-23 13:37:12<SeP>2025-02-23 13:40:48<SeP>2025-02-23 13:44:24<SeP>2025-02-23 13:48:00<SeP>2025-02-23 13:51:36<SeP>2025-02-23 13:55:12<SeP>2025-02-23 13:58:48<SeP>2025-02-23 14:02:24<SeP>2025-02-23 14:06:00<SeP>2025-02-23 14:09:36<SeP>2025-02-23 14:13:12<SeP>2025-02-23 14:16:48<SeP>2025-02-23 14:20:24<SeP>2025-02-23 14:24:00<SeP>2025-02-23 14:27:36<SeP>2025-02-23 14:31:12<SeP>2025-02-23 14:34:48<SeP>2025-02-23 14:38:24<SeP>2025-02-23 14:42:00<SeP>2025-02-23 14:45:36<SeP>2025-02-23 14:49:12<SeP>2025-02-23 14:52:48<SeP>2025-02-23 14:56:24<SeP>2025-02-23 15:00:00<SeP>2025-02-23 15:03:36<SeP>2025-02-23 15:07:12<SeP>2025-02-23 15:10:48<SeP>2025-02-23 15:14:24<SeP>2025-02-23 15:18:00<SeP>2025-02-23 15:21:36<SeP>2025-02-23 15:25:12<SeP>2025-02-23 15:28:48<SeP>2025-02-23 15:32:24<SeP>2025-02-23 15:36:00<SeP>2025-02-23 15:39:36<SeP>2025-02-23 15:43:12<SeP>2025-02-23 15:46:48<SeP>2025-02-23 15:50:24<SeP>2025-02-23 15:54:00<SeP>2025-02-23 15:57:36<SeP>2025-02-23 16:01:12<SeP>2025-02-23 16:04:48<SeP>2025-02-23 16:08:24<SeP>2025-02-23 16:12:00<SeP>2025-02-23 16:15:36<SeP>2025-02-23 16:19:12<SeP>2025-02-23 16:22:48<SeP>2025-02-23 16:26:24<SeP>2025-02-23 16:30:00<SeP>2025-02-23 16:33:36<SeP>2025-02-23 16:37:12<SeP>2025-02-23 16:40:48<SeP>2025-02-23 16:44:24<SeP>2025-02-23 16:48:00<SeP>2025-02-23 16:51:36<SeP>2025-02-23 16:55:12<SeP>2025-02-23 16:58:48<SeP>2025-02-23 17:02:24<SeP>2025-02-23 17:06:00<SeP>2025-02-23 17:09:36<SeP>2025-02-23 17:13:12<SeP>2025-02-23 17:16:48<SeP>2025-02-23 17:20:24<SeP>2025-02-23 17:24:00<SeP>2025-02-23 17:27:36<SeP>2025-02-23 17:31:12<SeP>2025-02-23 17:34:48<SeP>2025-02-23 17:38:24<SeP>2025-02-23 17:42:00<SeP>2025-02-23 17:45:36<SeP>2025-02-23 17:49:12<SeP>2025-02-23 17:52:48<SeP>2025-02-23 17:56:24<SeP>2025-02-23 18:00:00<SeP>2025-02-23 18:03:36<SeP>2025-02-23 18:07:12<SeP>2025-02-23 18:10:48<SeP>2025-02-23 18:14:24<SeP>2025-02-23 18:18:00<SeP>2025-02-23 18:21:36<SeP>2025-02-23 18:25:12<SeP>2025-02-23 18:28:48<SeP>2025-02-23 18:32:24<SeP>2025-02-23 18:36:00<SeP>2025-02-23 18:39:36<SeP>2025-02-23 18:43:12<SeP>2025-02-23 18:46:48<SeP>2025-02-23 18:50:24<SeP>2025-02-23 18:54:00<SeP>2025-02-23 18:57:36<SeP>2025-02-23 19:01:12<SeP>2025-02-23 19:04:48<SeP>2025-02-23 19:08:24<SeP>2025-02-23 19:12:00<SeP>2025-02-23 19:15:36<SeP>2025-02-23 19:19:12<SeP>2025-02-23 19:22:48<SeP>2025-02-23 19:26:24<SeP>2025-02-23 19:30:00<SeP>2025-02-23 19:33:36<SeP>2025-02-23 19:37:12<SeP>2025-02-23 19:40:48<SeP>2025-02-23 19:44:24<SeP>2025-02-23 19:48:00<SeP>2025-02-23 19:51:36<SeP>2025-02-23 19:55:12<SeP>2025-02-23 19:58:48<SeP>2025-02-23 20:02:24<SeP>2025-02-23 20:06:00<SeP>2025-02-23 20:09:36<SeP>2025-02-23 20:13:12<SeP>2025-02-23 20:16:48<SeP>2025-02-23 20:20:24<SeP>2025-02-23 20:24:00<SeP>2025-02-23 20:27:36<SeP>2025-02-23 20:31:12<SeP>2025-02-23 20:34:48<SeP>2025-02-23 20:38:24<SeP>2025-02-23 20:42:00<SeP>2025-02-23 20:45:36<SeP>2025-02-23 20:49:12<SeP>2025-02-23 20:52:48<SeP>2025-02-23 20:56:24<SeP>2025-02-23 21:00:00<SeP>2025-02-23 21:03:36<SeP>2025-02-23 21:07:12<SeP>2025-02-23 21:10:48<SeP>2025-02-23 21:14:24<SeP>2025-02-23 21:18:00<SeP>2025-02-23 21:21:36<SeP>2025-02-23 21:25:12<SeP>2025-02-23 21:28:48<SeP>2025-02-23 21:32:24<SeP>2025-02-23 21:36:00<SeP>2025-02-23 21:39:36<SeP>2025-02-23 21:43:12<SeP>2025-02-23 21:46:48<SeP>2025-02-23 21:50:24<SeP>2025-02-23 21:54:00<SeP>2025-02-23 21:57:36<SeP>2025-02-23 22:01:12<SeP>2025-02-23 22:04:48<SeP>2025-02-23 22:08:24<SeP>2025-02-23 22:12:00<SeP>2025-02-23 22:15:36<SeP>2025-02-23 22:19:12<SeP>2025-02-23 22:22:48<SeP>2025-02-23 22:26:24<SeP>2025-02-23 22:30:00<SeP>2025-02-23 22:33:36<SeP>2025-02-23 22:37:12<SeP>2025-02-23 22:40:48<SeP>2025-02-23 22:44:24<SeP>2025-02-23 22:48:00<SeP>2025-02-23 22:51:36<SeP>2025-02-23 22:55:12<SeP>2025-02-23 22:58:48<SeP>2025-02-23 23:02:24<SeP>2025-02-23 23:06:00<SeP>2025-02-23 23:09:36<SeP>2025-02-23 23:13:12<SeP>2025-02-23 23:16:48<SeP>2025-02-23 23:20:24<SeP>2025-02-23 23:24:00<SeP>2025-02-23 23:27:36<SeP>2025-02-23 23:31:12<SeP>2025-02-23 23:34:48<SeP>2025-02-23 23:38:24<SeP>2025-02-23 23:42:00<SeP>2025-02-23 23:45:36<SeP>2025-02-23 23:49:12<SeP>2025-02-23 23:52:48<SeP>2025-02-23 23:56:24";
  const item1Label       = "Scans";
  const item1Data        = "0<SeP>2<SeP>1<SeP>3<SeP>0<SeP>1<SeP>1<SeP>2<SeP>3<SeP>0<SeP>3<SeP>1<SeP>2<SeP>0<SeP>3<SeP>2<SeP>1<SeP>1<SeP>1<SeP>4<SeP>0<SeP>1<SeP>0<SeP>5<SeP>0<SeP>2<SeP>1<SeP>4<SeP>0<SeP>3<SeP>4<SeP>1<SeP>0<SeP>11<SeP>3<SeP>10<SeP>13<SeP>3<SeP>4<SeP>0<SeP>1<SeP>3<SeP>1<SeP>4<SeP>1<SeP>6<SeP>1<SeP>0<SeP>3<SeP>3<SeP>7<SeP>0<SeP>1<SeP>4<SeP>1<SeP>1<SeP>2<SeP>3<SeP>2<SeP>3<SeP>6<SeP>5<SeP>3<SeP>3<SeP>3<SeP>5<SeP>4<SeP>1<SeP>10<SeP>3<SeP>5<SeP>2<SeP>5<SeP>7<SeP>2<SeP>1<SeP>2<SeP>3<SeP>2<SeP>3<SeP>7<SeP>17<SeP>4<SeP>5<SeP>18<SeP>16<SeP>1<SeP>3<SeP>3<SeP>2<SeP>1<SeP>2<SeP>1<SeP>5<SeP>0<SeP>2<SeP>3<SeP>3<SeP>1<SeP>4<SeP>2<SeP>3<SeP>2<SeP>5<SeP>3<SeP>5<SeP>4<SeP>3<SeP>7<SeP>3<SeP>3<SeP>2<SeP>1<SeP>2<SeP>6<SeP>0<SeP>4<SeP>0<SeP>5<SeP>2<SeP>1<SeP>2<SeP>2<SeP>4<SeP>1<SeP>2<SeP>2<SeP>5<SeP>1<SeP>3<SeP>2<SeP>3<SeP>2<SeP>0<SeP>1<SeP>1<SeP>4<SeP>1<SeP>1<SeP>0<SeP>1<SeP>2<SeP>0<SeP>3<SeP>0<SeP>2<SeP>2<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>3<SeP>2<SeP>3<SeP>0<SeP>2<SeP>0<SeP>0<SeP>2<SeP>0<SeP>1<SeP>0<SeP>9<SeP>1<SeP>1<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>1<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>4<SeP>0<SeP>0<SeP>1<SeP>1<SeP>3<SeP>0<SeP>1<SeP>2<SeP>0<SeP>5<SeP>0<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>1<SeP>4<SeP>1<SeP>4<SeP>4<SeP>2<SeP>3<SeP>7<SeP>0<SeP>2<SeP>2<SeP>5<SeP>4<SeP>0<SeP>1<SeP>1<SeP>2<SeP>0<SeP>3<SeP>1<SeP>2<SeP>2<SeP>2<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>9<SeP>2<SeP>0<SeP>3<SeP>4<SeP>0<SeP>1<SeP>5<SeP>4<SeP>0<SeP>0<SeP>4<SeP>2<SeP>0<SeP>7<SeP>1<SeP>5<SeP>1<SeP>1<SeP>2<SeP>0<SeP>3<SeP>5<SeP>22<SeP>40<SeP>39<SeP>17<SeP>11<SeP>2<SeP>7<SeP>3<SeP>5<SeP>1<SeP>3<SeP>5<SeP>2<SeP>2<SeP>4<SeP>4<SeP>0<SeP>1<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>3<SeP>1<SeP>1<SeP>2<SeP>3<SeP>3<SeP>0<SeP>1<SeP>1<SeP>0<SeP>4<SeP>3<SeP>1<SeP>3<SeP>0<SeP>4<SeP>1<SeP>1<SeP>57<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>14<SeP>1<SeP>1<SeP>2<SeP>15<SeP>6<SeP>0<SeP>1<SeP>2<SeP>3<SeP>14<SeP>1<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>3<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>1<SeP>2<SeP>2<SeP>0<SeP>1<SeP>3<SeP>1<SeP>4<SeP>7<SeP>0<SeP>2<SeP>2<SeP>3<SeP>3<SeP>3<SeP>0<SeP>0<SeP>4<SeP>0<SeP>3<SeP>2<SeP>1<SeP>3<SeP>2<SeP>0<SeP>0<SeP>3<SeP>3<SeP>1<SeP>0<SeP>1<SeP>1<SeP>4<SeP>2<SeP>15<SeP>3<SeP>1<SeP>0<SeP>5<SeP>4<SeP>1<SeP>0<SeP>3<SeP>2<SeP>4<SeP>1<SeP>0<SeP>4<SeP>0<SeP>3<SeP>1<SeP>0<SeP>4<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>2<SeP>5<SeP>3<SeP>1<SeP>2<SeP>2<SeP>0<SeP>4<SeP>1<SeP>1<SeP>17<SeP>51";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "38<SeP>0<SeP>26<SeP>7<SeP>0<SeP>1<SeP>0<SeP>24<SeP>0<SeP>0<SeP>23<SeP>6<SeP>24<SeP>1<SeP>1<SeP>22<SeP>22<SeP>1<SeP>0<SeP>1<SeP>14<SeP>8<SeP>23<SeP>0<SeP>23<SeP>0<SeP>1<SeP>2<SeP>1<SeP>22<SeP>3<SeP>25<SeP>0<SeP>24<SeP>0<SeP>1<SeP>0<SeP>0<SeP>3<SeP>0<SeP>2<SeP>22<SeP>0<SeP>3<SeP>2<SeP>2<SeP>22<SeP>23<SeP>17<SeP>71<SeP>27<SeP>48<SeP>26<SeP>5<SeP>6<SeP>31<SeP>10<SeP>45<SeP>16<SeP>26<SeP>27<SeP>22<SeP>24<SeP>22<SeP>23<SeP>45<SeP>22<SeP>12<SeP>6<SeP>52<SeP>1<SeP>43<SeP>12<SeP>6<SeP>8<SeP>10<SeP>27<SeP>6<SeP>5<SeP>5<SeP>6<SeP>8<SeP>7<SeP>7<SeP>8<SeP>47<SeP>1<SeP>3<SeP>0<SeP>3<SeP>0<SeP>3<SeP>42<SeP>8<SeP>1<SeP>3<SeP>20<SeP>40<SeP>39<SeP>32<SeP>27<SeP>72<SeP>52<SeP>45<SeP>48<SeP>49<SeP>42<SeP>62<SeP>35<SeP>24<SeP>26<SeP>19<SeP>15<SeP>11<SeP>5<SeP>10<SeP>2<SeP>24<SeP>2<SeP>5<SeP>1<SeP>2<SeP>3<SeP>6<SeP>0<SeP>4<SeP>3<SeP>7<SeP>1<SeP>5<SeP>3<SeP>5<SeP>3<SeP>2<SeP>5<SeP>32<SeP>2<SeP>4<SeP>2<SeP>10<SeP>34<SeP>11<SeP>6<SeP>10<SeP>4<SeP>15<SeP>6<SeP>6<SeP>2<SeP>3<SeP>26<SeP>8<SeP>42<SeP>13<SeP>5<SeP>31<SeP>6<SeP>25<SeP>2<SeP>1<SeP>24<SeP>0<SeP>2<SeP>0<SeP>23<SeP>1<SeP>23<SeP>2<SeP>6<SeP>1<SeP>3<SeP>26<SeP>4<SeP>24<SeP>2<SeP>1<SeP>24<SeP>1<SeP>1<SeP>1<SeP>0<SeP>47<SeP>1<SeP>51<SeP>0<SeP>26<SeP>44<SeP>26<SeP>0<SeP>1<SeP>25<SeP>1<SeP>1<SeP>23<SeP>1<SeP>4<SeP>2<SeP>80<SeP>21<SeP>27<SeP>23<SeP>29<SeP>17<SeP>8<SeP>3<SeP>1<SeP>2<SeP>1<SeP>2<SeP>4<SeP>36<SeP>13<SeP>33<SeP>66<SeP>53<SeP>24<SeP>47<SeP>20<SeP>33<SeP>48<SeP>65<SeP>55<SeP>28<SeP>45<SeP>32<SeP>38<SeP>8<SeP>30<SeP>9<SeP>6<SeP>8<SeP>4<SeP>4<SeP>29<SeP>4<SeP>14<SeP>21<SeP>8<SeP>33<SeP>3<SeP>6<SeP>1<SeP>5<SeP>24<SeP>26<SeP>23<SeP>10<SeP>22<SeP>21<SeP>43<SeP>19<SeP>41<SeP>37<SeP>15<SeP>16<SeP>15<SeP>22<SeP>11<SeP>30<SeP>55<SeP>6<SeP>14<SeP>3<SeP>27<SeP>2<SeP>24<SeP>1<SeP>6<SeP>6<SeP>11<SeP>35<SeP>37<SeP>10<SeP>23<SeP>35<SeP>72<SeP>14<SeP>19<SeP>14<SeP>21<SeP>11<SeP>9<SeP>27<SeP>4<SeP>22<SeP>2<SeP>24<SeP>24<SeP>6<SeP>24<SeP>3<SeP>2<SeP>48<SeP>1<SeP>50<SeP>1<SeP>6<SeP>2<SeP>3<SeP>2<SeP>4<SeP>3<SeP>8<SeP>4<SeP>9<SeP>7<SeP>11<SeP>34<SeP>14<SeP>24<SeP>41<SeP>12<SeP>14<SeP>17<SeP>57<SeP>9<SeP>35<SeP>35<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>1<SeP>1<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>3<SeP>3<SeP>5<SeP>1<SeP>3<SeP>2<SeP>5<SeP>2<SeP>7<SeP>3<SeP>4<SeP>2<SeP>6<SeP>1<SeP>4<SeP>2<SeP>3<SeP>2<SeP>4<SeP>1<SeP>3<SeP>1<SeP>5<SeP>2<SeP>2<SeP>3<SeP>2<SeP>3<SeP>6<SeP>2<SeP>2<SeP>3<SeP>2<SeP>2<SeP>1<SeP>4<SeP>4<SeP>3<SeP>4<SeP>3<SeP>6<SeP>1<SeP>2<SeP>3<SeP>2<SeP>1<SeP>3<SeP>1<SeP>2<SeP>3<SeP>5<SeP>5<SeP>5<SeP>8<SeP>5<SeP>2<SeP>5<SeP>15<SeP>11<SeP>14<SeP>25<SeP>31<SeP>16<SeP>20<SeP>28<SeP>21<SeP>22<SeP>22";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-23 00:00:00<SeP>2025-02-23 00:03:36<SeP>2025-02-23 00:07:12<SeP>2025-02-23 00:10:48<SeP>2025-02-23 00:14:24<SeP>2025-02-23 00:18:00<SeP>2025-02-23 00:21:36<SeP>2025-02-23 00:25:12<SeP>2025-02-23 00:28:48<SeP>2025-02-23 00:32:24<SeP>2025-02-23 00:36:00<SeP>2025-02-23 00:39:36<SeP>2025-02-23 00:43:12<SeP>2025-02-23 00:46:48<SeP>2025-02-23 00:50:24<SeP>2025-02-23 00:54:00<SeP>2025-02-23 00:57:36<SeP>2025-02-23 01:01:12<SeP>2025-02-23 01:04:48<SeP>2025-02-23 01:08:24<SeP>2025-02-23 01:12:00<SeP>2025-02-23 01:15:36<SeP>2025-02-23 01:19:12<SeP>2025-02-23 01:22:48<SeP>2025-02-23 01:26:24<SeP>2025-02-23 01:30:00<SeP>2025-02-23 01:33:36<SeP>2025-02-23 01:37:12<SeP>2025-02-23 01:40:48<SeP>2025-02-23 01:44:24<SeP>2025-02-23 01:48:00<SeP>2025-02-23 01:51:36<SeP>2025-02-23 01:55:12<SeP>2025-02-23 01:58:48<SeP>2025-02-23 02:02:24<SeP>2025-02-23 02:06:00<SeP>2025-02-23 02:09:36<SeP>2025-02-23 02:13:12<SeP>2025-02-23 02:16:48<SeP>2025-02-23 02:20:24<SeP>2025-02-23 02:24:00<SeP>2025-02-23 02:27:36<SeP>2025-02-23 02:31:12<SeP>2025-02-23 02:34:48<SeP>2025-02-23 02:38:24<SeP>2025-02-23 02:42:00<SeP>2025-02-23 02:45:36<SeP>2025-02-23 02:49:12<SeP>2025-02-23 02:52:48<SeP>2025-02-23 02:56:24<SeP>2025-02-23 03:00:00<SeP>2025-02-23 03:03:36<SeP>2025-02-23 03:07:12<SeP>2025-02-23 03:10:48<SeP>2025-02-23 03:14:24<SeP>2025-02-23 03:18:00<SeP>2025-02-23 03:21:36<SeP>2025-02-23 03:25:12<SeP>2025-02-23 03:28:48<SeP>2025-02-23 03:32:24<SeP>2025-02-23 03:36:00<SeP>2025-02-23 03:39:36<SeP>2025-02-23 03:43:12<SeP>2025-02-23 03:46:48<SeP>2025-02-23 03:50:24<SeP>2025-02-23 03:54:00<SeP>2025-02-23 03:57:36<SeP>2025-02-23 04:01:12<SeP>2025-02-23 04:04:48<SeP>2025-02-23 04:08:24<SeP>2025-02-23 04:12:00<SeP>2025-02-23 04:15:36<SeP>2025-02-23 04:19:12<SeP>2025-02-23 04:22:48<SeP>2025-02-23 04:26:24<SeP>2025-02-23 04:30:00<SeP>2025-02-23 04:33:36<SeP>2025-02-23 04:37:12<SeP>2025-02-23 04:40:48<SeP>2025-02-23 04:44:24<SeP>2025-02-23 04:48:00<SeP>2025-02-23 04:51:36<SeP>2025-02-23 04:55:12<SeP>2025-02-23 04:58:48<SeP>2025-02-23 05:02:24<SeP>2025-02-23 05:06:00<SeP>2025-02-23 05:09:36<SeP>2025-02-23 05:13:12<SeP>2025-02-23 05:16:48<SeP>2025-02-23 05:20:24<SeP>2025-02-23 05:24:00<SeP>2025-02-23 05:27:36<SeP>2025-02-23 05:31:12<SeP>2025-02-23 05:34:48<SeP>2025-02-23 05:38:24<SeP>2025-02-23 05:42:00<SeP>2025-02-23 05:45:36<SeP>2025-02-23 05:49:12<SeP>2025-02-23 05:52:48<SeP>2025-02-23 05:56:24<SeP>2025-02-23 06:00:00<SeP>2025-02-23 06:03:36<SeP>2025-02-23 06:07:12<SeP>2025-02-23 06:10:48<SeP>2025-02-23 06:14:24<SeP>2025-02-23 06:18:00<SeP>2025-02-23 06:21:36<SeP>2025-02-23 06:25:12<SeP>2025-02-23 06:28:48<SeP>2025-02-23 06:32:24<SeP>2025-02-23 06:36:00<SeP>2025-02-23 06:39:36<SeP>2025-02-23 06:43:12<SeP>2025-02-23 06:46:48<SeP>2025-02-23 06:50:24<SeP>2025-02-23 06:54:00<SeP>2025-02-23 06:57:36<SeP>2025-02-23 07:01:12<SeP>2025-02-23 07:04:48<SeP>2025-02-23 07:08:24<SeP>2025-02-23 07:12:00<SeP>2025-02-23 07:15:36<SeP>2025-02-23 07:19:12<SeP>2025-02-23 07:22:48<SeP>2025-02-23 07:26:24<SeP>2025-02-23 07:30:00<SeP>2025-02-23 07:33:36<SeP>2025-02-23 07:37:12<SeP>2025-02-23 07:40:48<SeP>2025-02-23 07:44:24<SeP>2025-02-23 07:48:00<SeP>2025-02-23 07:51:36<SeP>2025-02-23 07:55:12<SeP>2025-02-23 07:58:48<SeP>2025-02-23 08:02:24<SeP>2025-02-23 08:06:00<SeP>2025-02-23 08:09:36<SeP>2025-02-23 08:13:12<SeP>2025-02-23 08:16:48<SeP>2025-02-23 08:20:24<SeP>2025-02-23 08:24:00<SeP>2025-02-23 08:27:36<SeP>2025-02-23 08:31:12<SeP>2025-02-23 08:34:48<SeP>2025-02-23 08:38:24<SeP>2025-02-23 08:42:00<SeP>2025-02-23 08:45:36<SeP>2025-02-23 08:49:12<SeP>2025-02-23 08:52:48<SeP>2025-02-23 08:56:24<SeP>2025-02-23 09:00:00<SeP>2025-02-23 09:03:36<SeP>2025-02-23 09:07:12<SeP>2025-02-23 09:10:48<SeP>2025-02-23 09:14:24<SeP>2025-02-23 09:18:00<SeP>2025-02-23 09:21:36<SeP>2025-02-23 09:25:12<SeP>2025-02-23 09:28:48<SeP>2025-02-23 09:32:24<SeP>2025-02-23 09:36:00<SeP>2025-02-23 09:39:36<SeP>2025-02-23 09:43:12<SeP>2025-02-23 09:46:48<SeP>2025-02-23 09:50:24<SeP>2025-02-23 09:54:00<SeP>2025-02-23 09:57:36<SeP>2025-02-23 10:01:12<SeP>2025-02-23 10:04:48<SeP>2025-02-23 10:08:24<SeP>2025-02-23 10:12:00<SeP>2025-02-23 10:15:36<SeP>2025-02-23 10:19:12<SeP>2025-02-23 10:22:48<SeP>2025-02-23 10:26:24<SeP>2025-02-23 10:30:00<SeP>2025-02-23 10:33:36<SeP>2025-02-23 10:37:12<SeP>2025-02-23 10:40:48<SeP>2025-02-23 10:44:24<SeP>2025-02-23 10:48:00<SeP>2025-02-23 10:51:36<SeP>2025-02-23 10:55:12<SeP>2025-02-23 10:58:48<SeP>2025-02-23 11:02:24<SeP>2025-02-23 11:06:00<SeP>2025-02-23 11:09:36<SeP>2025-02-23 11:13:12<SeP>2025-02-23 11:16:48<SeP>2025-02-23 11:20:24<SeP>2025-02-23 11:24:00<SeP>2025-02-23 11:27:36<SeP>2025-02-23 11:31:12<SeP>2025-02-23 11:34:48<SeP>2025-02-23 11:38:24<SeP>2025-02-23 11:42:00<SeP>2025-02-23 11:45:36<SeP>2025-02-23 11:49:12<SeP>2025-02-23 11:52:48<SeP>2025-02-23 11:56:24<SeP>2025-02-23 12:00:00<SeP>2025-02-23 12:03:36<SeP>2025-02-23 12:07:12<SeP>2025-02-23 12:10:48<SeP>2025-02-23 12:14:24<SeP>2025-02-23 12:18:00<SeP>2025-02-23 12:21:36<SeP>2025-02-23 12:25:12<SeP>2025-02-23 12:28:48<SeP>2025-02-23 12:32:24<SeP>2025-02-23 12:36:00<SeP>2025-02-23 12:39:36<SeP>2025-02-23 12:43:12<SeP>2025-02-23 12:46:48<SeP>2025-02-23 12:50:24<SeP>2025-02-23 12:54:00<SeP>2025-02-23 12:57:36<SeP>2025-02-23 13:01:12<SeP>2025-02-23 13:04:48<SeP>2025-02-23 13:08:24<SeP>2025-02-23 13:12:00<SeP>2025-02-23 13:15:36<SeP>2025-02-23 13:19:12<SeP>2025-02-23 13:22:48<SeP>2025-02-23 13:26:24<SeP>2025-02-23 13:30:00<SeP>2025-02-23 13:33:36<SeP>2025-02-23 13:37:12<SeP>2025-02-23 13:40:48<SeP>2025-02-23 13:44:24<SeP>2025-02-23 13:48:00<SeP>2025-02-23 13:51:36<SeP>2025-02-23 13:55:12<SeP>2025-02-23 13:58:48<SeP>2025-02-23 14:02:24<SeP>2025-02-23 14:06:00<SeP>2025-02-23 14:09:36<SeP>2025-02-23 14:13:12<SeP>2025-02-23 14:16:48<SeP>2025-02-23 14:20:24<SeP>2025-02-23 14:24:00<SeP>2025-02-23 14:27:36<SeP>2025-02-23 14:31:12<SeP>2025-02-23 14:34:48<SeP>2025-02-23 14:38:24<SeP>2025-02-23 14:42:00<SeP>2025-02-23 14:45:36<SeP>2025-02-23 14:49:12<SeP>2025-02-23 14:52:48<SeP>2025-02-23 14:56:24<SeP>2025-02-23 15:00:00<SeP>2025-02-23 15:03:36<SeP>2025-02-23 15:07:12<SeP>2025-02-23 15:10:48<SeP>2025-02-23 15:14:24<SeP>2025-02-23 15:18:00<SeP>2025-02-23 15:21:36<SeP>2025-02-23 15:25:12<SeP>2025-02-23 15:28:48<SeP>2025-02-23 15:32:24<SeP>2025-02-23 15:36:00<SeP>2025-02-23 15:39:36<SeP>2025-02-23 15:43:12<SeP>2025-02-23 15:46:48<SeP>2025-02-23 15:50:24<SeP>2025-02-23 15:54:00<SeP>2025-02-23 15:57:36<SeP>2025-02-23 16:01:12<SeP>2025-02-23 16:04:48<SeP>2025-02-23 16:08:24<SeP>2025-02-23 16:12:00<SeP>2025-02-23 16:15:36<SeP>2025-02-23 16:19:12<SeP>2025-02-23 16:22:48<SeP>2025-02-23 16:26:24<SeP>2025-02-23 16:30:00<SeP>2025-02-23 16:33:36<SeP>2025-02-23 16:37:12<SeP>2025-02-23 16:40:48<SeP>2025-02-23 16:44:24<SeP>2025-02-23 16:48:00<SeP>2025-02-23 16:51:36<SeP>2025-02-23 16:55:12<SeP>2025-02-23 16:58:48<SeP>2025-02-23 17:02:24<SeP>2025-02-23 17:06:00<SeP>2025-02-23 17:09:36<SeP>2025-02-23 17:13:12<SeP>2025-02-23 17:16:48<SeP>2025-02-23 17:20:24<SeP>2025-02-23 17:24:00<SeP>2025-02-23 17:27:36<SeP>2025-02-23 17:31:12<SeP>2025-02-23 17:34:48<SeP>2025-02-23 17:38:24<SeP>2025-02-23 17:42:00<SeP>2025-02-23 17:45:36<SeP>2025-02-23 17:49:12<SeP>2025-02-23 17:52:48<SeP>2025-02-23 17:56:24<SeP>2025-02-23 18:00:00<SeP>2025-02-23 18:03:36<SeP>2025-02-23 18:07:12<SeP>2025-02-23 18:10:48<SeP>2025-02-23 18:14:24<SeP>2025-02-23 18:18:00<SeP>2025-02-23 18:21:36<SeP>2025-02-23 18:25:12<SeP>2025-02-23 18:28:48<SeP>2025-02-23 18:32:24<SeP>2025-02-23 18:36:00<SeP>2025-02-23 18:39:36<SeP>2025-02-23 18:43:12<SeP>2025-02-23 18:46:48<SeP>2025-02-23 18:50:24<SeP>2025-02-23 18:54:00<SeP>2025-02-23 18:57:36<SeP>2025-02-23 19:01:12<SeP>2025-02-23 19:04:48<SeP>2025-02-23 19:08:24<SeP>2025-02-23 19:12:00<SeP>2025-02-23 19:15:36<SeP>2025-02-23 19:19:12<SeP>2025-02-23 19:22:48<SeP>2025-02-23 19:26:24<SeP>2025-02-23 19:30:00<SeP>2025-02-23 19:33:36<SeP>2025-02-23 19:37:12<SeP>2025-02-23 19:40:48<SeP>2025-02-23 19:44:24<SeP>2025-02-23 19:48:00<SeP>2025-02-23 19:51:36<SeP>2025-02-23 19:55:12<SeP>2025-02-23 19:58:48<SeP>2025-02-23 20:02:24<SeP>2025-02-23 20:06:00<SeP>2025-02-23 20:09:36<SeP>2025-02-23 20:13:12<SeP>2025-02-23 20:16:48<SeP>2025-02-23 20:20:24<SeP>2025-02-23 20:24:00<SeP>2025-02-23 20:27:36<SeP>2025-02-23 20:31:12<SeP>2025-02-23 20:34:48<SeP>2025-02-23 20:38:24<SeP>2025-02-23 20:42:00<SeP>2025-02-23 20:45:36<SeP>2025-02-23 20:49:12<SeP>2025-02-23 20:52:48<SeP>2025-02-23 20:56:24<SeP>2025-02-23 21:00:00<SeP>2025-02-23 21:03:36<SeP>2025-02-23 21:07:12<SeP>2025-02-23 21:10:48<SeP>2025-02-23 21:14:24<SeP>2025-02-23 21:18:00<SeP>2025-02-23 21:21:36<SeP>2025-02-23 21:25:12<SeP>2025-02-23 21:28:48<SeP>2025-02-23 21:32:24<SeP>2025-02-23 21:36:00<SeP>2025-02-23 21:39:36<SeP>2025-02-23 21:43:12<SeP>2025-02-23 21:46:48<SeP>2025-02-23 21:50:24<SeP>2025-02-23 21:54:00<SeP>2025-02-23 21:57:36<SeP>2025-02-23 22:01:12<SeP>2025-02-23 22:04:48<SeP>2025-02-23 22:08:24<SeP>2025-02-23 22:12:00<SeP>2025-02-23 22:15:36<SeP>2025-02-23 22:19:12<SeP>2025-02-23 22:22:48<SeP>2025-02-23 22:26:24<SeP>2025-02-23 22:30:00<SeP>2025-02-23 22:33:36<SeP>2025-02-23 22:37:12<SeP>2025-02-23 22:40:48<SeP>2025-02-23 22:44:24<SeP>2025-02-23 22:48:00<SeP>2025-02-23 22:51:36<SeP>2025-02-23 22:55:12<SeP>2025-02-23 22:58:48<SeP>2025-02-23 23:02:24<SeP>2025-02-23 23:06:00<SeP>2025-02-23 23:09:36<SeP>2025-02-23 23:13:12<SeP>2025-02-23 23:16:48<SeP>2025-02-23 23:20:24<SeP>2025-02-23 23:24:00<SeP>2025-02-23 23:27:36<SeP>2025-02-23 23:31:12<SeP>2025-02-23 23:34:48<SeP>2025-02-23 23:38:24<SeP>2025-02-23 23:42:00<SeP>2025-02-23 23:45:36<SeP>2025-02-23 23:49:12<SeP>2025-02-23 23:52:48<SeP>2025-02-23 23:56:24";
  const itemLabel       = "Scans";
  const itemData        = "0<SeP>2<SeP>1<SeP>3<SeP>0<SeP>1<SeP>1<SeP>2<SeP>3<SeP>0<SeP>3<SeP>1<SeP>2<SeP>0<SeP>3<SeP>2<SeP>1<SeP>1<SeP>1<SeP>4<SeP>0<SeP>1<SeP>0<SeP>5<SeP>0<SeP>2<SeP>1<SeP>4<SeP>0<SeP>3<SeP>4<SeP>1<SeP>0<SeP>11<SeP>3<SeP>10<SeP>13<SeP>3<SeP>4<SeP>0<SeP>1<SeP>3<SeP>1<SeP>4<SeP>1<SeP>6<SeP>1<SeP>0<SeP>3<SeP>3<SeP>7<SeP>0<SeP>1<SeP>4<SeP>1<SeP>1<SeP>2<SeP>3<SeP>2<SeP>3<SeP>6<SeP>5<SeP>3<SeP>3<SeP>3<SeP>5<SeP>4<SeP>1<SeP>10<SeP>3<SeP>5<SeP>2<SeP>5<SeP>7<SeP>2<SeP>1<SeP>2<SeP>3<SeP>2<SeP>3<SeP>7<SeP>17<SeP>4<SeP>5<SeP>18<SeP>16<SeP>1<SeP>3<SeP>3<SeP>2<SeP>1<SeP>2<SeP>1<SeP>5<SeP>0<SeP>2<SeP>3<SeP>3<SeP>1<SeP>4<SeP>2<SeP>3<SeP>2<SeP>5<SeP>3<SeP>5<SeP>4<SeP>3<SeP>7<SeP>3<SeP>3<SeP>2<SeP>1<SeP>2<SeP>6<SeP>0<SeP>4<SeP>0<SeP>5<SeP>2<SeP>1<SeP>2<SeP>2<SeP>4<SeP>1<SeP>2<SeP>2<SeP>5<SeP>1<SeP>3<SeP>2<SeP>3<SeP>2<SeP>0<SeP>1<SeP>1<SeP>4<SeP>1<SeP>1<SeP>0<SeP>1<SeP>2<SeP>0<SeP>3<SeP>0<SeP>2<SeP>2<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>3<SeP>2<SeP>3<SeP>0<SeP>2<SeP>0<SeP>0<SeP>2<SeP>0<SeP>1<SeP>0<SeP>9<SeP>1<SeP>1<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>1<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>4<SeP>0<SeP>0<SeP>1<SeP>1<SeP>3<SeP>0<SeP>1<SeP>2<SeP>0<SeP>5<SeP>0<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>1<SeP>4<SeP>1<SeP>4<SeP>4<SeP>2<SeP>3<SeP>7<SeP>0<SeP>2<SeP>2<SeP>5<SeP>4<SeP>0<SeP>1<SeP>1<SeP>2<SeP>0<SeP>3<SeP>1<SeP>2<SeP>2<SeP>2<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>9<SeP>2<SeP>0<SeP>3<SeP>4<SeP>0<SeP>1<SeP>5<SeP>4<SeP>0<SeP>0<SeP>4<SeP>2<SeP>0<SeP>7<SeP>1<SeP>5<SeP>1<SeP>1<SeP>2<SeP>0<SeP>3<SeP>5<SeP>22<SeP>40<SeP>39<SeP>17<SeP>11<SeP>2<SeP>7<SeP>3<SeP>5<SeP>1<SeP>3<SeP>5<SeP>2<SeP>2<SeP>4<SeP>4<SeP>0<SeP>1<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>3<SeP>1<SeP>1<SeP>2<SeP>3<SeP>3<SeP>0<SeP>1<SeP>1<SeP>0<SeP>4<SeP>3<SeP>1<SeP>3<SeP>0<SeP>4<SeP>1<SeP>1<SeP>57<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>14<SeP>1<SeP>1<SeP>2<SeP>15<SeP>6<SeP>0<SeP>1<SeP>2<SeP>3<SeP>14<SeP>1<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>3<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>1<SeP>2<SeP>2<SeP>0<SeP>1<SeP>3<SeP>1<SeP>4<SeP>7<SeP>0<SeP>2<SeP>2<SeP>3<SeP>3<SeP>3<SeP>0<SeP>0<SeP>4<SeP>0<SeP>3<SeP>2<SeP>1<SeP>3<SeP>2<SeP>0<SeP>0<SeP>3<SeP>3<SeP>1<SeP>0<SeP>1<SeP>1<SeP>4<SeP>2<SeP>15<SeP>3<SeP>1<SeP>0<SeP>5<SeP>4<SeP>1<SeP>0<SeP>3<SeP>2<SeP>4<SeP>1<SeP>0<SeP>4<SeP>0<SeP>3<SeP>1<SeP>0<SeP>4<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>2<SeP>5<SeP>3<SeP>1<SeP>2<SeP>2<SeP>0<SeP>4<SeP>1<SeP>1<SeP>17<SeP>51";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-23 00:00:00<SeP>2025-02-23 00:03:36<SeP>2025-02-23 00:07:12<SeP>2025-02-23 00:10:48<SeP>2025-02-23 00:14:24<SeP>2025-02-23 00:18:00<SeP>2025-02-23 00:21:36<SeP>2025-02-23 00:25:12<SeP>2025-02-23 00:28:48<SeP>2025-02-23 00:32:24<SeP>2025-02-23 00:36:00<SeP>2025-02-23 00:39:36<SeP>2025-02-23 00:43:12<SeP>2025-02-23 00:46:48<SeP>2025-02-23 00:50:24<SeP>2025-02-23 00:54:00<SeP>2025-02-23 00:57:36<SeP>2025-02-23 01:01:12<SeP>2025-02-23 01:04:48<SeP>2025-02-23 01:08:24<SeP>2025-02-23 01:12:00<SeP>2025-02-23 01:15:36<SeP>2025-02-23 01:19:12<SeP>2025-02-23 01:22:48<SeP>2025-02-23 01:26:24<SeP>2025-02-23 01:30:00<SeP>2025-02-23 01:33:36<SeP>2025-02-23 01:37:12<SeP>2025-02-23 01:40:48<SeP>2025-02-23 01:44:24<SeP>2025-02-23 01:48:00<SeP>2025-02-23 01:51:36<SeP>2025-02-23 01:55:12<SeP>2025-02-23 01:58:48<SeP>2025-02-23 02:02:24<SeP>2025-02-23 02:06:00<SeP>2025-02-23 02:09:36<SeP>2025-02-23 02:13:12<SeP>2025-02-23 02:16:48<SeP>2025-02-23 02:20:24<SeP>2025-02-23 02:24:00<SeP>2025-02-23 02:27:36<SeP>2025-02-23 02:31:12<SeP>2025-02-23 02:34:48<SeP>2025-02-23 02:38:24<SeP>2025-02-23 02:42:00<SeP>2025-02-23 02:45:36<SeP>2025-02-23 02:49:12<SeP>2025-02-23 02:52:48<SeP>2025-02-23 02:56:24<SeP>2025-02-23 03:00:00<SeP>2025-02-23 03:03:36<SeP>2025-02-23 03:07:12<SeP>2025-02-23 03:10:48<SeP>2025-02-23 03:14:24<SeP>2025-02-23 03:18:00<SeP>2025-02-23 03:21:36<SeP>2025-02-23 03:25:12<SeP>2025-02-23 03:28:48<SeP>2025-02-23 03:32:24<SeP>2025-02-23 03:36:00<SeP>2025-02-23 03:39:36<SeP>2025-02-23 03:43:12<SeP>2025-02-23 03:46:48<SeP>2025-02-23 03:50:24<SeP>2025-02-23 03:54:00<SeP>2025-02-23 03:57:36<SeP>2025-02-23 04:01:12<SeP>2025-02-23 04:04:48<SeP>2025-02-23 04:08:24<SeP>2025-02-23 04:12:00<SeP>2025-02-23 04:15:36<SeP>2025-02-23 04:19:12<SeP>2025-02-23 04:22:48<SeP>2025-02-23 04:26:24<SeP>2025-02-23 04:30:00<SeP>2025-02-23 04:33:36<SeP>2025-02-23 04:37:12<SeP>2025-02-23 04:40:48<SeP>2025-02-23 04:44:24<SeP>2025-02-23 04:48:00<SeP>2025-02-23 04:51:36<SeP>2025-02-23 04:55:12<SeP>2025-02-23 04:58:48<SeP>2025-02-23 05:02:24<SeP>2025-02-23 05:06:00<SeP>2025-02-23 05:09:36<SeP>2025-02-23 05:13:12<SeP>2025-02-23 05:16:48<SeP>2025-02-23 05:20:24<SeP>2025-02-23 05:24:00<SeP>2025-02-23 05:27:36<SeP>2025-02-23 05:31:12<SeP>2025-02-23 05:34:48<SeP>2025-02-23 05:38:24<SeP>2025-02-23 05:42:00<SeP>2025-02-23 05:45:36<SeP>2025-02-23 05:49:12<SeP>2025-02-23 05:52:48<SeP>2025-02-23 05:56:24<SeP>2025-02-23 06:00:00<SeP>2025-02-23 06:03:36<SeP>2025-02-23 06:07:12<SeP>2025-02-23 06:10:48<SeP>2025-02-23 06:14:24<SeP>2025-02-23 06:18:00<SeP>2025-02-23 06:21:36<SeP>2025-02-23 06:25:12<SeP>2025-02-23 06:28:48<SeP>2025-02-23 06:32:24<SeP>2025-02-23 06:36:00<SeP>2025-02-23 06:39:36<SeP>2025-02-23 06:43:12<SeP>2025-02-23 06:46:48<SeP>2025-02-23 06:50:24<SeP>2025-02-23 06:54:00<SeP>2025-02-23 06:57:36<SeP>2025-02-23 07:01:12<SeP>2025-02-23 07:04:48<SeP>2025-02-23 07:08:24<SeP>2025-02-23 07:12:00<SeP>2025-02-23 07:15:36<SeP>2025-02-23 07:19:12<SeP>2025-02-23 07:22:48<SeP>2025-02-23 07:26:24<SeP>2025-02-23 07:30:00<SeP>2025-02-23 07:33:36<SeP>2025-02-23 07:37:12<SeP>2025-02-23 07:40:48<SeP>2025-02-23 07:44:24<SeP>2025-02-23 07:48:00<SeP>2025-02-23 07:51:36<SeP>2025-02-23 07:55:12<SeP>2025-02-23 07:58:48<SeP>2025-02-23 08:02:24<SeP>2025-02-23 08:06:00<SeP>2025-02-23 08:09:36<SeP>2025-02-23 08:13:12<SeP>2025-02-23 08:16:48<SeP>2025-02-23 08:20:24<SeP>2025-02-23 08:24:00<SeP>2025-02-23 08:27:36<SeP>2025-02-23 08:31:12<SeP>2025-02-23 08:34:48<SeP>2025-02-23 08:38:24<SeP>2025-02-23 08:42:00<SeP>2025-02-23 08:45:36<SeP>2025-02-23 08:49:12<SeP>2025-02-23 08:52:48<SeP>2025-02-23 08:56:24<SeP>2025-02-23 09:00:00<SeP>2025-02-23 09:03:36<SeP>2025-02-23 09:07:12<SeP>2025-02-23 09:10:48<SeP>2025-02-23 09:14:24<SeP>2025-02-23 09:18:00<SeP>2025-02-23 09:21:36<SeP>2025-02-23 09:25:12<SeP>2025-02-23 09:28:48<SeP>2025-02-23 09:32:24<SeP>2025-02-23 09:36:00<SeP>2025-02-23 09:39:36<SeP>2025-02-23 09:43:12<SeP>2025-02-23 09:46:48<SeP>2025-02-23 09:50:24<SeP>2025-02-23 09:54:00<SeP>2025-02-23 09:57:36<SeP>2025-02-23 10:01:12<SeP>2025-02-23 10:04:48<SeP>2025-02-23 10:08:24<SeP>2025-02-23 10:12:00<SeP>2025-02-23 10:15:36<SeP>2025-02-23 10:19:12<SeP>2025-02-23 10:22:48<SeP>2025-02-23 10:26:24<SeP>2025-02-23 10:30:00<SeP>2025-02-23 10:33:36<SeP>2025-02-23 10:37:12<SeP>2025-02-23 10:40:48<SeP>2025-02-23 10:44:24<SeP>2025-02-23 10:48:00<SeP>2025-02-23 10:51:36<SeP>2025-02-23 10:55:12<SeP>2025-02-23 10:58:48<SeP>2025-02-23 11:02:24<SeP>2025-02-23 11:06:00<SeP>2025-02-23 11:09:36<SeP>2025-02-23 11:13:12<SeP>2025-02-23 11:16:48<SeP>2025-02-23 11:20:24<SeP>2025-02-23 11:24:00<SeP>2025-02-23 11:27:36<SeP>2025-02-23 11:31:12<SeP>2025-02-23 11:34:48<SeP>2025-02-23 11:38:24<SeP>2025-02-23 11:42:00<SeP>2025-02-23 11:45:36<SeP>2025-02-23 11:49:12<SeP>2025-02-23 11:52:48<SeP>2025-02-23 11:56:24<SeP>2025-02-23 12:00:00<SeP>2025-02-23 12:03:36<SeP>2025-02-23 12:07:12<SeP>2025-02-23 12:10:48<SeP>2025-02-23 12:14:24<SeP>2025-02-23 12:18:00<SeP>2025-02-23 12:21:36<SeP>2025-02-23 12:25:12<SeP>2025-02-23 12:28:48<SeP>2025-02-23 12:32:24<SeP>2025-02-23 12:36:00<SeP>2025-02-23 12:39:36<SeP>2025-02-23 12:43:12<SeP>2025-02-23 12:46:48<SeP>2025-02-23 12:50:24<SeP>2025-02-23 12:54:00<SeP>2025-02-23 12:57:36<SeP>2025-02-23 13:01:12<SeP>2025-02-23 13:04:48<SeP>2025-02-23 13:08:24<SeP>2025-02-23 13:12:00<SeP>2025-02-23 13:15:36<SeP>2025-02-23 13:19:12<SeP>2025-02-23 13:22:48<SeP>2025-02-23 13:26:24<SeP>2025-02-23 13:30:00<SeP>2025-02-23 13:33:36<SeP>2025-02-23 13:37:12<SeP>2025-02-23 13:40:48<SeP>2025-02-23 13:44:24<SeP>2025-02-23 13:48:00<SeP>2025-02-23 13:51:36<SeP>2025-02-23 13:55:12<SeP>2025-02-23 13:58:48<SeP>2025-02-23 14:02:24<SeP>2025-02-23 14:06:00<SeP>2025-02-23 14:09:36<SeP>2025-02-23 14:13:12<SeP>2025-02-23 14:16:48<SeP>2025-02-23 14:20:24<SeP>2025-02-23 14:24:00<SeP>2025-02-23 14:27:36<SeP>2025-02-23 14:31:12<SeP>2025-02-23 14:34:48<SeP>2025-02-23 14:38:24<SeP>2025-02-23 14:42:00<SeP>2025-02-23 14:45:36<SeP>2025-02-23 14:49:12<SeP>2025-02-23 14:52:48<SeP>2025-02-23 14:56:24<SeP>2025-02-23 15:00:00<SeP>2025-02-23 15:03:36<SeP>2025-02-23 15:07:12<SeP>2025-02-23 15:10:48<SeP>2025-02-23 15:14:24<SeP>2025-02-23 15:18:00<SeP>2025-02-23 15:21:36<SeP>2025-02-23 15:25:12<SeP>2025-02-23 15:28:48<SeP>2025-02-23 15:32:24<SeP>2025-02-23 15:36:00<SeP>2025-02-23 15:39:36<SeP>2025-02-23 15:43:12<SeP>2025-02-23 15:46:48<SeP>2025-02-23 15:50:24<SeP>2025-02-23 15:54:00<SeP>2025-02-23 15:57:36<SeP>2025-02-23 16:01:12<SeP>2025-02-23 16:04:48<SeP>2025-02-23 16:08:24<SeP>2025-02-23 16:12:00<SeP>2025-02-23 16:15:36<SeP>2025-02-23 16:19:12<SeP>2025-02-23 16:22:48<SeP>2025-02-23 16:26:24<SeP>2025-02-23 16:30:00<SeP>2025-02-23 16:33:36<SeP>2025-02-23 16:37:12<SeP>2025-02-23 16:40:48<SeP>2025-02-23 16:44:24<SeP>2025-02-23 16:48:00<SeP>2025-02-23 16:51:36<SeP>2025-02-23 16:55:12<SeP>2025-02-23 16:58:48<SeP>2025-02-23 17:02:24<SeP>2025-02-23 17:06:00<SeP>2025-02-23 17:09:36<SeP>2025-02-23 17:13:12<SeP>2025-02-23 17:16:48<SeP>2025-02-23 17:20:24<SeP>2025-02-23 17:24:00<SeP>2025-02-23 17:27:36<SeP>2025-02-23 17:31:12<SeP>2025-02-23 17:34:48<SeP>2025-02-23 17:38:24<SeP>2025-02-23 17:42:00<SeP>2025-02-23 17:45:36<SeP>2025-02-23 17:49:12<SeP>2025-02-23 17:52:48<SeP>2025-02-23 17:56:24<SeP>2025-02-23 18:00:00<SeP>2025-02-23 18:03:36<SeP>2025-02-23 18:07:12<SeP>2025-02-23 18:10:48<SeP>2025-02-23 18:14:24<SeP>2025-02-23 18:18:00<SeP>2025-02-23 18:21:36<SeP>2025-02-23 18:25:12<SeP>2025-02-23 18:28:48<SeP>2025-02-23 18:32:24<SeP>2025-02-23 18:36:00<SeP>2025-02-23 18:39:36<SeP>2025-02-23 18:43:12<SeP>2025-02-23 18:46:48<SeP>2025-02-23 18:50:24<SeP>2025-02-23 18:54:00<SeP>2025-02-23 18:57:36<SeP>2025-02-23 19:01:12<SeP>2025-02-23 19:04:48<SeP>2025-02-23 19:08:24<SeP>2025-02-23 19:12:00<SeP>2025-02-23 19:15:36<SeP>2025-02-23 19:19:12<SeP>2025-02-23 19:22:48<SeP>2025-02-23 19:26:24<SeP>2025-02-23 19:30:00<SeP>2025-02-23 19:33:36<SeP>2025-02-23 19:37:12<SeP>2025-02-23 19:40:48<SeP>2025-02-23 19:44:24<SeP>2025-02-23 19:48:00<SeP>2025-02-23 19:51:36<SeP>2025-02-23 19:55:12<SeP>2025-02-23 19:58:48<SeP>2025-02-23 20:02:24<SeP>2025-02-23 20:06:00<SeP>2025-02-23 20:09:36<SeP>2025-02-23 20:13:12<SeP>2025-02-23 20:16:48<SeP>2025-02-23 20:20:24<SeP>2025-02-23 20:24:00<SeP>2025-02-23 20:27:36<SeP>2025-02-23 20:31:12<SeP>2025-02-23 20:34:48<SeP>2025-02-23 20:38:24<SeP>2025-02-23 20:42:00<SeP>2025-02-23 20:45:36<SeP>2025-02-23 20:49:12<SeP>2025-02-23 20:52:48<SeP>2025-02-23 20:56:24<SeP>2025-02-23 21:00:00<SeP>2025-02-23 21:03:36<SeP>2025-02-23 21:07:12<SeP>2025-02-23 21:10:48<SeP>2025-02-23 21:14:24<SeP>2025-02-23 21:18:00<SeP>2025-02-23 21:21:36<SeP>2025-02-23 21:25:12<SeP>2025-02-23 21:28:48<SeP>2025-02-23 21:32:24<SeP>2025-02-23 21:36:00<SeP>2025-02-23 21:39:36<SeP>2025-02-23 21:43:12<SeP>2025-02-23 21:46:48<SeP>2025-02-23 21:50:24<SeP>2025-02-23 21:54:00<SeP>2025-02-23 21:57:36<SeP>2025-02-23 22:01:12<SeP>2025-02-23 22:04:48<SeP>2025-02-23 22:08:24<SeP>2025-02-23 22:12:00<SeP>2025-02-23 22:15:36<SeP>2025-02-23 22:19:12<SeP>2025-02-23 22:22:48<SeP>2025-02-23 22:26:24<SeP>2025-02-23 22:30:00<SeP>2025-02-23 22:33:36<SeP>2025-02-23 22:37:12<SeP>2025-02-23 22:40:48<SeP>2025-02-23 22:44:24<SeP>2025-02-23 22:48:00<SeP>2025-02-23 22:51:36<SeP>2025-02-23 22:55:12<SeP>2025-02-23 22:58:48<SeP>2025-02-23 23:02:24<SeP>2025-02-23 23:06:00<SeP>2025-02-23 23:09:36<SeP>2025-02-23 23:13:12<SeP>2025-02-23 23:16:48<SeP>2025-02-23 23:20:24<SeP>2025-02-23 23:24:00<SeP>2025-02-23 23:27:36<SeP>2025-02-23 23:31:12<SeP>2025-02-23 23:34:48<SeP>2025-02-23 23:38:24<SeP>2025-02-23 23:42:00<SeP>2025-02-23 23:45:36<SeP>2025-02-23 23:49:12<SeP>2025-02-23 23:52:48<SeP>2025-02-23 23:56:24";
  const itemLabel       = "Attacks";
  const itemData        = "38<SeP>0<SeP>26<SeP>7<SeP>0<SeP>1<SeP>0<SeP>24<SeP>0<SeP>0<SeP>23<SeP>6<SeP>24<SeP>1<SeP>1<SeP>22<SeP>22<SeP>1<SeP>0<SeP>1<SeP>14<SeP>8<SeP>23<SeP>0<SeP>23<SeP>0<SeP>1<SeP>2<SeP>1<SeP>22<SeP>3<SeP>25<SeP>0<SeP>24<SeP>0<SeP>1<SeP>0<SeP>0<SeP>3<SeP>0<SeP>2<SeP>22<SeP>0<SeP>3<SeP>2<SeP>2<SeP>22<SeP>23<SeP>17<SeP>71<SeP>27<SeP>48<SeP>26<SeP>5<SeP>6<SeP>31<SeP>10<SeP>45<SeP>16<SeP>26<SeP>27<SeP>22<SeP>24<SeP>22<SeP>23<SeP>45<SeP>22<SeP>12<SeP>6<SeP>52<SeP>1<SeP>43<SeP>12<SeP>6<SeP>8<SeP>10<SeP>27<SeP>6<SeP>5<SeP>5<SeP>6<SeP>8<SeP>7<SeP>7<SeP>8<SeP>47<SeP>1<SeP>3<SeP>0<SeP>3<SeP>0<SeP>3<SeP>42<SeP>8<SeP>1<SeP>3<SeP>20<SeP>40<SeP>39<SeP>32<SeP>27<SeP>72<SeP>52<SeP>45<SeP>48<SeP>49<SeP>42<SeP>62<SeP>35<SeP>24<SeP>26<SeP>19<SeP>15<SeP>11<SeP>5<SeP>10<SeP>2<SeP>24<SeP>2<SeP>5<SeP>1<SeP>2<SeP>3<SeP>6<SeP>0<SeP>4<SeP>3<SeP>7<SeP>1<SeP>5<SeP>3<SeP>5<SeP>3<SeP>2<SeP>5<SeP>32<SeP>2<SeP>4<SeP>2<SeP>10<SeP>34<SeP>11<SeP>6<SeP>10<SeP>4<SeP>15<SeP>6<SeP>6<SeP>2<SeP>3<SeP>26<SeP>8<SeP>42<SeP>13<SeP>5<SeP>31<SeP>6<SeP>25<SeP>2<SeP>1<SeP>24<SeP>0<SeP>2<SeP>0<SeP>23<SeP>1<SeP>23<SeP>2<SeP>6<SeP>1<SeP>3<SeP>26<SeP>4<SeP>24<SeP>2<SeP>1<SeP>24<SeP>1<SeP>1<SeP>1<SeP>0<SeP>47<SeP>1<SeP>51<SeP>0<SeP>26<SeP>44<SeP>26<SeP>0<SeP>1<SeP>25<SeP>1<SeP>1<SeP>23<SeP>1<SeP>4<SeP>2<SeP>80<SeP>21<SeP>27<SeP>23<SeP>29<SeP>17<SeP>8<SeP>3<SeP>1<SeP>2<SeP>1<SeP>2<SeP>4<SeP>36<SeP>13<SeP>33<SeP>66<SeP>53<SeP>24<SeP>47<SeP>20<SeP>33<SeP>48<SeP>65<SeP>55<SeP>28<SeP>45<SeP>32<SeP>38<SeP>8<SeP>30<SeP>9<SeP>6<SeP>8<SeP>4<SeP>4<SeP>29<SeP>4<SeP>14<SeP>21<SeP>8<SeP>33<SeP>3<SeP>6<SeP>1<SeP>5<SeP>24<SeP>26<SeP>23<SeP>10<SeP>22<SeP>21<SeP>43<SeP>19<SeP>41<SeP>37<SeP>15<SeP>16<SeP>15<SeP>22<SeP>11<SeP>30<SeP>55<SeP>6<SeP>14<SeP>3<SeP>27<SeP>2<SeP>24<SeP>1<SeP>6<SeP>6<SeP>11<SeP>35<SeP>37<SeP>10<SeP>23<SeP>35<SeP>72<SeP>14<SeP>19<SeP>14<SeP>21<SeP>11<SeP>9<SeP>27<SeP>4<SeP>22<SeP>2<SeP>24<SeP>24<SeP>6<SeP>24<SeP>3<SeP>2<SeP>48<SeP>1<SeP>50<SeP>1<SeP>6<SeP>2<SeP>3<SeP>2<SeP>4<SeP>3<SeP>8<SeP>4<SeP>9<SeP>7<SeP>11<SeP>34<SeP>14<SeP>24<SeP>41<SeP>12<SeP>14<SeP>17<SeP>57<SeP>9<SeP>35<SeP>35<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>1<SeP>1<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>3<SeP>3<SeP>5<SeP>1<SeP>3<SeP>2<SeP>5<SeP>2<SeP>7<SeP>3<SeP>4<SeP>2<SeP>6<SeP>1<SeP>4<SeP>2<SeP>3<SeP>2<SeP>4<SeP>1<SeP>3<SeP>1<SeP>5<SeP>2<SeP>2<SeP>3<SeP>2<SeP>3<SeP>6<SeP>2<SeP>2<SeP>3<SeP>2<SeP>2<SeP>1<SeP>4<SeP>4<SeP>3<SeP>4<SeP>3<SeP>6<SeP>1<SeP>2<SeP>3<SeP>2<SeP>1<SeP>3<SeP>1<SeP>2<SeP>3<SeP>5<SeP>5<SeP>5<SeP>8<SeP>5<SeP>2<SeP>5<SeP>15<SeP>11<SeP>14<SeP>25<SeP>31<SeP>16<SeP>20<SeP>28<SeP>21<SeP>22<SeP>22";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2025-02-23 00:00:00<SeP>2025-02-23 00:03:36<SeP>2025-02-23 00:07:12<SeP>2025-02-23 00:10:48<SeP>2025-02-23 00:14:24<SeP>2025-02-23 00:18:00<SeP>2025-02-23 00:21:36<SeP>2025-02-23 00:25:12<SeP>2025-02-23 00:28:48<SeP>2025-02-23 00:32:24<SeP>2025-02-23 00:36:00<SeP>2025-02-23 00:39:36<SeP>2025-02-23 00:43:12<SeP>2025-02-23 00:46:48<SeP>2025-02-23 00:50:24<SeP>2025-02-23 00:54:00<SeP>2025-02-23 00:57:36<SeP>2025-02-23 01:01:12<SeP>2025-02-23 01:04:48<SeP>2025-02-23 01:08:24<SeP>2025-02-23 01:12:00<SeP>2025-02-23 01:15:36<SeP>2025-02-23 01:19:12<SeP>2025-02-23 01:22:48<SeP>2025-02-23 01:26:24<SeP>2025-02-23 01:30:00<SeP>2025-02-23 01:33:36<SeP>2025-02-23 01:37:12<SeP>2025-02-23 01:40:48<SeP>2025-02-23 01:44:24<SeP>2025-02-23 01:48:00<SeP>2025-02-23 01:51:36<SeP>2025-02-23 01:55:12<SeP>2025-02-23 01:58:48<SeP>2025-02-23 02:02:24<SeP>2025-02-23 02:06:00<SeP>2025-02-23 02:09:36<SeP>2025-02-23 02:13:12<SeP>2025-02-23 02:16:48<SeP>2025-02-23 02:20:24<SeP>2025-02-23 02:24:00<SeP>2025-02-23 02:27:36<SeP>2025-02-23 02:31:12<SeP>2025-02-23 02:34:48<SeP>2025-02-23 02:38:24<SeP>2025-02-23 02:42:00<SeP>2025-02-23 02:45:36<SeP>2025-02-23 02:49:12<SeP>2025-02-23 02:52:48<SeP>2025-02-23 02:56:24<SeP>2025-02-23 03:00:00<SeP>2025-02-23 03:03:36<SeP>2025-02-23 03:07:12<SeP>2025-02-23 03:10:48<SeP>2025-02-23 03:14:24<SeP>2025-02-23 03:18:00<SeP>2025-02-23 03:21:36<SeP>2025-02-23 03:25:12<SeP>2025-02-23 03:28:48<SeP>2025-02-23 03:32:24<SeP>2025-02-23 03:36:00<SeP>2025-02-23 03:39:36<SeP>2025-02-23 03:43:12<SeP>2025-02-23 03:46:48<SeP>2025-02-23 03:50:24<SeP>2025-02-23 03:54:00<SeP>2025-02-23 03:57:36<SeP>2025-02-23 04:01:12<SeP>2025-02-23 04:04:48<SeP>2025-02-23 04:08:24<SeP>2025-02-23 04:12:00<SeP>2025-02-23 04:15:36<SeP>2025-02-23 04:19:12<SeP>2025-02-23 04:22:48<SeP>2025-02-23 04:26:24<SeP>2025-02-23 04:30:00<SeP>2025-02-23 04:33:36<SeP>2025-02-23 04:37:12<SeP>2025-02-23 04:40:48<SeP>2025-02-23 04:44:24<SeP>2025-02-23 04:48:00<SeP>2025-02-23 04:51:36<SeP>2025-02-23 04:55:12<SeP>2025-02-23 04:58:48<SeP>2025-02-23 05:02:24<SeP>2025-02-23 05:06:00<SeP>2025-02-23 05:09:36<SeP>2025-02-23 05:13:12<SeP>2025-02-23 05:16:48<SeP>2025-02-23 05:20:24<SeP>2025-02-23 05:24:00<SeP>2025-02-23 05:27:36<SeP>2025-02-23 05:31:12<SeP>2025-02-23 05:34:48<SeP>2025-02-23 05:38:24<SeP>2025-02-23 05:42:00<SeP>2025-02-23 05:45:36<SeP>2025-02-23 05:49:12<SeP>2025-02-23 05:52:48<SeP>2025-02-23 05:56:24<SeP>2025-02-23 06:00:00<SeP>2025-02-23 06:03:36<SeP>2025-02-23 06:07:12<SeP>2025-02-23 06:10:48<SeP>2025-02-23 06:14:24<SeP>2025-02-23 06:18:00<SeP>2025-02-23 06:21:36<SeP>2025-02-23 06:25:12<SeP>2025-02-23 06:28:48<SeP>2025-02-23 06:32:24<SeP>2025-02-23 06:36:00<SeP>2025-02-23 06:39:36<SeP>2025-02-23 06:43:12<SeP>2025-02-23 06:46:48<SeP>2025-02-23 06:50:24<SeP>2025-02-23 06:54:00<SeP>2025-02-23 06:57:36<SeP>2025-02-23 07:01:12<SeP>2025-02-23 07:04:48<SeP>2025-02-23 07:08:24<SeP>2025-02-23 07:12:00<SeP>2025-02-23 07:15:36<SeP>2025-02-23 07:19:12<SeP>2025-02-23 07:22:48<SeP>2025-02-23 07:26:24<SeP>2025-02-23 07:30:00<SeP>2025-02-23 07:33:36<SeP>2025-02-23 07:37:12<SeP>2025-02-23 07:40:48<SeP>2025-02-23 07:44:24<SeP>2025-02-23 07:48:00<SeP>2025-02-23 07:51:36<SeP>2025-02-23 07:55:12<SeP>2025-02-23 07:58:48<SeP>2025-02-23 08:02:24<SeP>2025-02-23 08:06:00<SeP>2025-02-23 08:09:36<SeP>2025-02-23 08:13:12<SeP>2025-02-23 08:16:48<SeP>2025-02-23 08:20:24<SeP>2025-02-23 08:24:00<SeP>2025-02-23 08:27:36<SeP>2025-02-23 08:31:12<SeP>2025-02-23 08:34:48<SeP>2025-02-23 08:38:24<SeP>2025-02-23 08:42:00<SeP>2025-02-23 08:45:36<SeP>2025-02-23 08:49:12<SeP>2025-02-23 08:52:48<SeP>2025-02-23 08:56:24<SeP>2025-02-23 09:00:00<SeP>2025-02-23 09:03:36<SeP>2025-02-23 09:07:12<SeP>2025-02-23 09:10:48<SeP>2025-02-23 09:14:24<SeP>2025-02-23 09:18:00<SeP>2025-02-23 09:21:36<SeP>2025-02-23 09:25:12<SeP>2025-02-23 09:28:48<SeP>2025-02-23 09:32:24<SeP>2025-02-23 09:36:00<SeP>2025-02-23 09:39:36<SeP>2025-02-23 09:43:12<SeP>2025-02-23 09:46:48<SeP>2025-02-23 09:50:24<SeP>2025-02-23 09:54:00<SeP>2025-02-23 09:57:36<SeP>2025-02-23 10:01:12<SeP>2025-02-23 10:04:48<SeP>2025-02-23 10:08:24<SeP>2025-02-23 10:12:00<SeP>2025-02-23 10:15:36<SeP>2025-02-23 10:19:12<SeP>2025-02-23 10:22:48<SeP>2025-02-23 10:26:24<SeP>2025-02-23 10:30:00<SeP>2025-02-23 10:33:36<SeP>2025-02-23 10:37:12<SeP>2025-02-23 10:40:48<SeP>2025-02-23 10:44:24<SeP>2025-02-23 10:48:00<SeP>2025-02-23 10:51:36<SeP>2025-02-23 10:55:12<SeP>2025-02-23 10:58:48<SeP>2025-02-23 11:02:24<SeP>2025-02-23 11:06:00<SeP>2025-02-23 11:09:36<SeP>2025-02-23 11:13:12<SeP>2025-02-23 11:16:48<SeP>2025-02-23 11:20:24<SeP>2025-02-23 11:24:00<SeP>2025-02-23 11:27:36<SeP>2025-02-23 11:31:12<SeP>2025-02-23 11:34:48<SeP>2025-02-23 11:38:24<SeP>2025-02-23 11:42:00<SeP>2025-02-23 11:45:36<SeP>2025-02-23 11:49:12<SeP>2025-02-23 11:52:48<SeP>2025-02-23 11:56:24<SeP>2025-02-23 12:00:00<SeP>2025-02-23 12:03:36<SeP>2025-02-23 12:07:12<SeP>2025-02-23 12:10:48<SeP>2025-02-23 12:14:24<SeP>2025-02-23 12:18:00<SeP>2025-02-23 12:21:36<SeP>2025-02-23 12:25:12<SeP>2025-02-23 12:28:48<SeP>2025-02-23 12:32:24<SeP>2025-02-23 12:36:00<SeP>2025-02-23 12:39:36<SeP>2025-02-23 12:43:12<SeP>2025-02-23 12:46:48<SeP>2025-02-23 12:50:24<SeP>2025-02-23 12:54:00<SeP>2025-02-23 12:57:36<SeP>2025-02-23 13:01:12<SeP>2025-02-23 13:04:48<SeP>2025-02-23 13:08:24<SeP>2025-02-23 13:12:00<SeP>2025-02-23 13:15:36<SeP>2025-02-23 13:19:12<SeP>2025-02-23 13:22:48<SeP>2025-02-23 13:26:24<SeP>2025-02-23 13:30:00<SeP>2025-02-23 13:33:36<SeP>2025-02-23 13:37:12<SeP>2025-02-23 13:40:48<SeP>2025-02-23 13:44:24<SeP>2025-02-23 13:48:00<SeP>2025-02-23 13:51:36<SeP>2025-02-23 13:55:12<SeP>2025-02-23 13:58:48<SeP>2025-02-23 14:02:24<SeP>2025-02-23 14:06:00<SeP>2025-02-23 14:09:36<SeP>2025-02-23 14:13:12<SeP>2025-02-23 14:16:48<SeP>2025-02-23 14:20:24<SeP>2025-02-23 14:24:00<SeP>2025-02-23 14:27:36<SeP>2025-02-23 14:31:12<SeP>2025-02-23 14:34:48<SeP>2025-02-23 14:38:24<SeP>2025-02-23 14:42:00<SeP>2025-02-23 14:45:36<SeP>2025-02-23 14:49:12<SeP>2025-02-23 14:52:48<SeP>2025-02-23 14:56:24<SeP>2025-02-23 15:00:00<SeP>2025-02-23 15:03:36<SeP>2025-02-23 15:07:12<SeP>2025-02-23 15:10:48<SeP>2025-02-23 15:14:24<SeP>2025-02-23 15:18:00<SeP>2025-02-23 15:21:36<SeP>2025-02-23 15:25:12<SeP>2025-02-23 15:28:48<SeP>2025-02-23 15:32:24<SeP>2025-02-23 15:36:00<SeP>2025-02-23 15:39:36<SeP>2025-02-23 15:43:12<SeP>2025-02-23 15:46:48<SeP>2025-02-23 15:50:24<SeP>2025-02-23 15:54:00<SeP>2025-02-23 15:57:36<SeP>2025-02-23 16:01:12<SeP>2025-02-23 16:04:48<SeP>2025-02-23 16:08:24<SeP>2025-02-23 16:12:00<SeP>2025-02-23 16:15:36<SeP>2025-02-23 16:19:12<SeP>2025-02-23 16:22:48<SeP>2025-02-23 16:26:24<SeP>2025-02-23 16:30:00<SeP>2025-02-23 16:33:36<SeP>2025-02-23 16:37:12<SeP>2025-02-23 16:40:48<SeP>2025-02-23 16:44:24<SeP>2025-02-23 16:48:00<SeP>2025-02-23 16:51:36<SeP>2025-02-23 16:55:12<SeP>2025-02-23 16:58:48<SeP>2025-02-23 17:02:24<SeP>2025-02-23 17:06:00<SeP>2025-02-23 17:09:36<SeP>2025-02-23 17:13:12<SeP>2025-02-23 17:16:48<SeP>2025-02-23 17:20:24<SeP>2025-02-23 17:24:00<SeP>2025-02-23 17:27:36<SeP>2025-02-23 17:31:12<SeP>2025-02-23 17:34:48<SeP>2025-02-23 17:38:24<SeP>2025-02-23 17:42:00<SeP>2025-02-23 17:45:36<SeP>2025-02-23 17:49:12<SeP>2025-02-23 17:52:48<SeP>2025-02-23 17:56:24<SeP>2025-02-23 18:00:00<SeP>2025-02-23 18:03:36<SeP>2025-02-23 18:07:12<SeP>2025-02-23 18:10:48<SeP>2025-02-23 18:14:24<SeP>2025-02-23 18:18:00<SeP>2025-02-23 18:21:36<SeP>2025-02-23 18:25:12<SeP>2025-02-23 18:28:48<SeP>2025-02-23 18:32:24<SeP>2025-02-23 18:36:00<SeP>2025-02-23 18:39:36<SeP>2025-02-23 18:43:12<SeP>2025-02-23 18:46:48<SeP>2025-02-23 18:50:24<SeP>2025-02-23 18:54:00<SeP>2025-02-23 18:57:36<SeP>2025-02-23 19:01:12<SeP>2025-02-23 19:04:48<SeP>2025-02-23 19:08:24<SeP>2025-02-23 19:12:00<SeP>2025-02-23 19:15:36<SeP>2025-02-23 19:19:12<SeP>2025-02-23 19:22:48<SeP>2025-02-23 19:26:24<SeP>2025-02-23 19:30:00<SeP>2025-02-23 19:33:36<SeP>2025-02-23 19:37:12<SeP>2025-02-23 19:40:48<SeP>2025-02-23 19:44:24<SeP>2025-02-23 19:48:00<SeP>2025-02-23 19:51:36<SeP>2025-02-23 19:55:12<SeP>2025-02-23 19:58:48<SeP>2025-02-23 20:02:24<SeP>2025-02-23 20:06:00<SeP>2025-02-23 20:09:36<SeP>2025-02-23 20:13:12<SeP>2025-02-23 20:16:48<SeP>2025-02-23 20:20:24<SeP>2025-02-23 20:24:00<SeP>2025-02-23 20:27:36<SeP>2025-02-23 20:31:12<SeP>2025-02-23 20:34:48<SeP>2025-02-23 20:38:24<SeP>2025-02-23 20:42:00<SeP>2025-02-23 20:45:36<SeP>2025-02-23 20:49:12<SeP>2025-02-23 20:52:48<SeP>2025-02-23 20:56:24<SeP>2025-02-23 21:00:00<SeP>2025-02-23 21:03:36<SeP>2025-02-23 21:07:12<SeP>2025-02-23 21:10:48<SeP>2025-02-23 21:14:24<SeP>2025-02-23 21:18:00<SeP>2025-02-23 21:21:36<SeP>2025-02-23 21:25:12<SeP>2025-02-23 21:28:48<SeP>2025-02-23 21:32:24<SeP>2025-02-23 21:36:00<SeP>2025-02-23 21:39:36<SeP>2025-02-23 21:43:12<SeP>2025-02-23 21:46:48<SeP>2025-02-23 21:50:24<SeP>2025-02-23 21:54:00<SeP>2025-02-23 21:57:36<SeP>2025-02-23 22:01:12<SeP>2025-02-23 22:04:48<SeP>2025-02-23 22:08:24<SeP>2025-02-23 22:12:00<SeP>2025-02-23 22:15:36<SeP>2025-02-23 22:19:12<SeP>2025-02-23 22:22:48<SeP>2025-02-23 22:26:24<SeP>2025-02-23 22:30:00<SeP>2025-02-23 22:33:36<SeP>2025-02-23 22:37:12<SeP>2025-02-23 22:40:48<SeP>2025-02-23 22:44:24<SeP>2025-02-23 22:48:00<SeP>2025-02-23 22:51:36<SeP>2025-02-23 22:55:12<SeP>2025-02-23 22:58:48<SeP>2025-02-23 23:02:24<SeP>2025-02-23 23:06:00<SeP>2025-02-23 23:09:36<SeP>2025-02-23 23:13:12<SeP>2025-02-23 23:16:48<SeP>2025-02-23 23:20:24<SeP>2025-02-23 23:24:00<SeP>2025-02-23 23:27:36<SeP>2025-02-23 23:31:12<SeP>2025-02-23 23:34:48<SeP>2025-02-23 23:38:24<SeP>2025-02-23 23:42:00<SeP>2025-02-23 23:45:36<SeP>2025-02-23 23:49:12<SeP>2025-02-23 23:52:48<SeP>2025-02-23 23:56:24";
  const item1Label       = "Escaneos";
  const item1Data        = "0<SeP>2<SeP>1<SeP>3<SeP>0<SeP>1<SeP>1<SeP>2<SeP>3<SeP>0<SeP>3<SeP>1<SeP>2<SeP>0<SeP>3<SeP>2<SeP>1<SeP>1<SeP>1<SeP>4<SeP>0<SeP>1<SeP>0<SeP>5<SeP>0<SeP>2<SeP>1<SeP>4<SeP>0<SeP>3<SeP>4<SeP>1<SeP>0<SeP>11<SeP>3<SeP>10<SeP>13<SeP>3<SeP>4<SeP>0<SeP>1<SeP>3<SeP>1<SeP>4<SeP>1<SeP>6<SeP>1<SeP>0<SeP>3<SeP>3<SeP>7<SeP>0<SeP>1<SeP>4<SeP>1<SeP>1<SeP>2<SeP>3<SeP>2<SeP>3<SeP>6<SeP>5<SeP>3<SeP>3<SeP>3<SeP>5<SeP>4<SeP>1<SeP>10<SeP>3<SeP>5<SeP>2<SeP>5<SeP>7<SeP>2<SeP>1<SeP>2<SeP>3<SeP>2<SeP>3<SeP>7<SeP>17<SeP>4<SeP>5<SeP>18<SeP>16<SeP>1<SeP>3<SeP>3<SeP>2<SeP>1<SeP>2<SeP>1<SeP>5<SeP>0<SeP>2<SeP>3<SeP>3<SeP>1<SeP>4<SeP>2<SeP>3<SeP>2<SeP>5<SeP>3<SeP>5<SeP>4<SeP>3<SeP>7<SeP>3<SeP>3<SeP>2<SeP>1<SeP>2<SeP>6<SeP>0<SeP>4<SeP>0<SeP>5<SeP>2<SeP>1<SeP>2<SeP>2<SeP>4<SeP>1<SeP>2<SeP>2<SeP>5<SeP>1<SeP>3<SeP>2<SeP>3<SeP>2<SeP>0<SeP>1<SeP>1<SeP>4<SeP>1<SeP>1<SeP>0<SeP>1<SeP>2<SeP>0<SeP>3<SeP>0<SeP>2<SeP>2<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>3<SeP>2<SeP>3<SeP>0<SeP>2<SeP>0<SeP>0<SeP>2<SeP>0<SeP>1<SeP>0<SeP>9<SeP>1<SeP>1<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>1<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>4<SeP>0<SeP>0<SeP>1<SeP>1<SeP>3<SeP>0<SeP>1<SeP>2<SeP>0<SeP>5<SeP>0<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>1<SeP>4<SeP>1<SeP>4<SeP>4<SeP>2<SeP>3<SeP>7<SeP>0<SeP>2<SeP>2<SeP>5<SeP>4<SeP>0<SeP>1<SeP>1<SeP>2<SeP>0<SeP>3<SeP>1<SeP>2<SeP>2<SeP>2<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>9<SeP>2<SeP>0<SeP>3<SeP>4<SeP>0<SeP>1<SeP>5<SeP>4<SeP>0<SeP>0<SeP>4<SeP>2<SeP>0<SeP>7<SeP>1<SeP>5<SeP>1<SeP>1<SeP>2<SeP>0<SeP>3<SeP>5<SeP>22<SeP>40<SeP>39<SeP>17<SeP>11<SeP>2<SeP>7<SeP>3<SeP>5<SeP>1<SeP>3<SeP>5<SeP>2<SeP>2<SeP>4<SeP>4<SeP>0<SeP>1<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>3<SeP>1<SeP>1<SeP>2<SeP>3<SeP>3<SeP>0<SeP>1<SeP>1<SeP>0<SeP>4<SeP>3<SeP>1<SeP>3<SeP>0<SeP>4<SeP>1<SeP>1<SeP>57<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>14<SeP>1<SeP>1<SeP>2<SeP>15<SeP>6<SeP>0<SeP>1<SeP>2<SeP>3<SeP>14<SeP>1<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>3<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>1<SeP>2<SeP>2<SeP>0<SeP>1<SeP>3<SeP>1<SeP>4<SeP>7<SeP>0<SeP>2<SeP>2<SeP>3<SeP>3<SeP>3<SeP>0<SeP>0<SeP>4<SeP>0<SeP>3<SeP>2<SeP>1<SeP>3<SeP>2<SeP>0<SeP>0<SeP>3<SeP>3<SeP>1<SeP>0<SeP>1<SeP>1<SeP>4<SeP>2<SeP>15<SeP>3<SeP>1<SeP>0<SeP>5<SeP>4<SeP>1<SeP>0<SeP>3<SeP>2<SeP>4<SeP>1<SeP>0<SeP>4<SeP>0<SeP>3<SeP>1<SeP>0<SeP>4<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>2<SeP>5<SeP>3<SeP>1<SeP>2<SeP>2<SeP>0<SeP>4<SeP>1<SeP>1<SeP>17<SeP>51";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "38<SeP>0<SeP>26<SeP>7<SeP>0<SeP>1<SeP>0<SeP>24<SeP>0<SeP>0<SeP>23<SeP>6<SeP>24<SeP>1<SeP>1<SeP>22<SeP>22<SeP>1<SeP>0<SeP>1<SeP>14<SeP>8<SeP>23<SeP>0<SeP>23<SeP>0<SeP>1<SeP>2<SeP>1<SeP>22<SeP>3<SeP>25<SeP>0<SeP>24<SeP>0<SeP>1<SeP>0<SeP>0<SeP>3<SeP>0<SeP>2<SeP>22<SeP>0<SeP>3<SeP>2<SeP>2<SeP>22<SeP>23<SeP>17<SeP>71<SeP>27<SeP>48<SeP>26<SeP>5<SeP>6<SeP>31<SeP>10<SeP>45<SeP>16<SeP>26<SeP>27<SeP>22<SeP>24<SeP>22<SeP>23<SeP>45<SeP>22<SeP>12<SeP>6<SeP>52<SeP>1<SeP>43<SeP>12<SeP>6<SeP>8<SeP>10<SeP>27<SeP>6<SeP>5<SeP>5<SeP>6<SeP>8<SeP>7<SeP>7<SeP>8<SeP>47<SeP>1<SeP>3<SeP>0<SeP>3<SeP>0<SeP>3<SeP>42<SeP>8<SeP>1<SeP>3<SeP>20<SeP>40<SeP>39<SeP>32<SeP>27<SeP>72<SeP>52<SeP>45<SeP>48<SeP>49<SeP>42<SeP>62<SeP>35<SeP>24<SeP>26<SeP>19<SeP>15<SeP>11<SeP>5<SeP>10<SeP>2<SeP>24<SeP>2<SeP>5<SeP>1<SeP>2<SeP>3<SeP>6<SeP>0<SeP>4<SeP>3<SeP>7<SeP>1<SeP>5<SeP>3<SeP>5<SeP>3<SeP>2<SeP>5<SeP>32<SeP>2<SeP>4<SeP>2<SeP>10<SeP>34<SeP>11<SeP>6<SeP>10<SeP>4<SeP>15<SeP>6<SeP>6<SeP>2<SeP>3<SeP>26<SeP>8<SeP>42<SeP>13<SeP>5<SeP>31<SeP>6<SeP>25<SeP>2<SeP>1<SeP>24<SeP>0<SeP>2<SeP>0<SeP>23<SeP>1<SeP>23<SeP>2<SeP>6<SeP>1<SeP>3<SeP>26<SeP>4<SeP>24<SeP>2<SeP>1<SeP>24<SeP>1<SeP>1<SeP>1<SeP>0<SeP>47<SeP>1<SeP>51<SeP>0<SeP>26<SeP>44<SeP>26<SeP>0<SeP>1<SeP>25<SeP>1<SeP>1<SeP>23<SeP>1<SeP>4<SeP>2<SeP>80<SeP>21<SeP>27<SeP>23<SeP>29<SeP>17<SeP>8<SeP>3<SeP>1<SeP>2<SeP>1<SeP>2<SeP>4<SeP>36<SeP>13<SeP>33<SeP>66<SeP>53<SeP>24<SeP>47<SeP>20<SeP>33<SeP>48<SeP>65<SeP>55<SeP>28<SeP>45<SeP>32<SeP>38<SeP>8<SeP>30<SeP>9<SeP>6<SeP>8<SeP>4<SeP>4<SeP>29<SeP>4<SeP>14<SeP>21<SeP>8<SeP>33<SeP>3<SeP>6<SeP>1<SeP>5<SeP>24<SeP>26<SeP>23<SeP>10<SeP>22<SeP>21<SeP>43<SeP>19<SeP>41<SeP>37<SeP>15<SeP>16<SeP>15<SeP>22<SeP>11<SeP>30<SeP>55<SeP>6<SeP>14<SeP>3<SeP>27<SeP>2<SeP>24<SeP>1<SeP>6<SeP>6<SeP>11<SeP>35<SeP>37<SeP>10<SeP>23<SeP>35<SeP>72<SeP>14<SeP>19<SeP>14<SeP>21<SeP>11<SeP>9<SeP>27<SeP>4<SeP>22<SeP>2<SeP>24<SeP>24<SeP>6<SeP>24<SeP>3<SeP>2<SeP>48<SeP>1<SeP>50<SeP>1<SeP>6<SeP>2<SeP>3<SeP>2<SeP>4<SeP>3<SeP>8<SeP>4<SeP>9<SeP>7<SeP>11<SeP>34<SeP>14<SeP>24<SeP>41<SeP>12<SeP>14<SeP>17<SeP>57<SeP>9<SeP>35<SeP>35<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>1<SeP>1<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>3<SeP>3<SeP>5<SeP>1<SeP>3<SeP>2<SeP>5<SeP>2<SeP>7<SeP>3<SeP>4<SeP>2<SeP>6<SeP>1<SeP>4<SeP>2<SeP>3<SeP>2<SeP>4<SeP>1<SeP>3<SeP>1<SeP>5<SeP>2<SeP>2<SeP>3<SeP>2<SeP>3<SeP>6<SeP>2<SeP>2<SeP>3<SeP>2<SeP>2<SeP>1<SeP>4<SeP>4<SeP>3<SeP>4<SeP>3<SeP>6<SeP>1<SeP>2<SeP>3<SeP>2<SeP>1<SeP>3<SeP>1<SeP>2<SeP>3<SeP>5<SeP>5<SeP>5<SeP>8<SeP>5<SeP>2<SeP>5<SeP>15<SeP>11<SeP>14<SeP>25<SeP>31<SeP>16<SeP>20<SeP>28<SeP>21<SeP>22<SeP>22";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-23 00:00:00<SeP>2025-02-23 00:03:36<SeP>2025-02-23 00:07:12<SeP>2025-02-23 00:10:48<SeP>2025-02-23 00:14:24<SeP>2025-02-23 00:18:00<SeP>2025-02-23 00:21:36<SeP>2025-02-23 00:25:12<SeP>2025-02-23 00:28:48<SeP>2025-02-23 00:32:24<SeP>2025-02-23 00:36:00<SeP>2025-02-23 00:39:36<SeP>2025-02-23 00:43:12<SeP>2025-02-23 00:46:48<SeP>2025-02-23 00:50:24<SeP>2025-02-23 00:54:00<SeP>2025-02-23 00:57:36<SeP>2025-02-23 01:01:12<SeP>2025-02-23 01:04:48<SeP>2025-02-23 01:08:24<SeP>2025-02-23 01:12:00<SeP>2025-02-23 01:15:36<SeP>2025-02-23 01:19:12<SeP>2025-02-23 01:22:48<SeP>2025-02-23 01:26:24<SeP>2025-02-23 01:30:00<SeP>2025-02-23 01:33:36<SeP>2025-02-23 01:37:12<SeP>2025-02-23 01:40:48<SeP>2025-02-23 01:44:24<SeP>2025-02-23 01:48:00<SeP>2025-02-23 01:51:36<SeP>2025-02-23 01:55:12<SeP>2025-02-23 01:58:48<SeP>2025-02-23 02:02:24<SeP>2025-02-23 02:06:00<SeP>2025-02-23 02:09:36<SeP>2025-02-23 02:13:12<SeP>2025-02-23 02:16:48<SeP>2025-02-23 02:20:24<SeP>2025-02-23 02:24:00<SeP>2025-02-23 02:27:36<SeP>2025-02-23 02:31:12<SeP>2025-02-23 02:34:48<SeP>2025-02-23 02:38:24<SeP>2025-02-23 02:42:00<SeP>2025-02-23 02:45:36<SeP>2025-02-23 02:49:12<SeP>2025-02-23 02:52:48<SeP>2025-02-23 02:56:24<SeP>2025-02-23 03:00:00<SeP>2025-02-23 03:03:36<SeP>2025-02-23 03:07:12<SeP>2025-02-23 03:10:48<SeP>2025-02-23 03:14:24<SeP>2025-02-23 03:18:00<SeP>2025-02-23 03:21:36<SeP>2025-02-23 03:25:12<SeP>2025-02-23 03:28:48<SeP>2025-02-23 03:32:24<SeP>2025-02-23 03:36:00<SeP>2025-02-23 03:39:36<SeP>2025-02-23 03:43:12<SeP>2025-02-23 03:46:48<SeP>2025-02-23 03:50:24<SeP>2025-02-23 03:54:00<SeP>2025-02-23 03:57:36<SeP>2025-02-23 04:01:12<SeP>2025-02-23 04:04:48<SeP>2025-02-23 04:08:24<SeP>2025-02-23 04:12:00<SeP>2025-02-23 04:15:36<SeP>2025-02-23 04:19:12<SeP>2025-02-23 04:22:48<SeP>2025-02-23 04:26:24<SeP>2025-02-23 04:30:00<SeP>2025-02-23 04:33:36<SeP>2025-02-23 04:37:12<SeP>2025-02-23 04:40:48<SeP>2025-02-23 04:44:24<SeP>2025-02-23 04:48:00<SeP>2025-02-23 04:51:36<SeP>2025-02-23 04:55:12<SeP>2025-02-23 04:58:48<SeP>2025-02-23 05:02:24<SeP>2025-02-23 05:06:00<SeP>2025-02-23 05:09:36<SeP>2025-02-23 05:13:12<SeP>2025-02-23 05:16:48<SeP>2025-02-23 05:20:24<SeP>2025-02-23 05:24:00<SeP>2025-02-23 05:27:36<SeP>2025-02-23 05:31:12<SeP>2025-02-23 05:34:48<SeP>2025-02-23 05:38:24<SeP>2025-02-23 05:42:00<SeP>2025-02-23 05:45:36<SeP>2025-02-23 05:49:12<SeP>2025-02-23 05:52:48<SeP>2025-02-23 05:56:24<SeP>2025-02-23 06:00:00<SeP>2025-02-23 06:03:36<SeP>2025-02-23 06:07:12<SeP>2025-02-23 06:10:48<SeP>2025-02-23 06:14:24<SeP>2025-02-23 06:18:00<SeP>2025-02-23 06:21:36<SeP>2025-02-23 06:25:12<SeP>2025-02-23 06:28:48<SeP>2025-02-23 06:32:24<SeP>2025-02-23 06:36:00<SeP>2025-02-23 06:39:36<SeP>2025-02-23 06:43:12<SeP>2025-02-23 06:46:48<SeP>2025-02-23 06:50:24<SeP>2025-02-23 06:54:00<SeP>2025-02-23 06:57:36<SeP>2025-02-23 07:01:12<SeP>2025-02-23 07:04:48<SeP>2025-02-23 07:08:24<SeP>2025-02-23 07:12:00<SeP>2025-02-23 07:15:36<SeP>2025-02-23 07:19:12<SeP>2025-02-23 07:22:48<SeP>2025-02-23 07:26:24<SeP>2025-02-23 07:30:00<SeP>2025-02-23 07:33:36<SeP>2025-02-23 07:37:12<SeP>2025-02-23 07:40:48<SeP>2025-02-23 07:44:24<SeP>2025-02-23 07:48:00<SeP>2025-02-23 07:51:36<SeP>2025-02-23 07:55:12<SeP>2025-02-23 07:58:48<SeP>2025-02-23 08:02:24<SeP>2025-02-23 08:06:00<SeP>2025-02-23 08:09:36<SeP>2025-02-23 08:13:12<SeP>2025-02-23 08:16:48<SeP>2025-02-23 08:20:24<SeP>2025-02-23 08:24:00<SeP>2025-02-23 08:27:36<SeP>2025-02-23 08:31:12<SeP>2025-02-23 08:34:48<SeP>2025-02-23 08:38:24<SeP>2025-02-23 08:42:00<SeP>2025-02-23 08:45:36<SeP>2025-02-23 08:49:12<SeP>2025-02-23 08:52:48<SeP>2025-02-23 08:56:24<SeP>2025-02-23 09:00:00<SeP>2025-02-23 09:03:36<SeP>2025-02-23 09:07:12<SeP>2025-02-23 09:10:48<SeP>2025-02-23 09:14:24<SeP>2025-02-23 09:18:00<SeP>2025-02-23 09:21:36<SeP>2025-02-23 09:25:12<SeP>2025-02-23 09:28:48<SeP>2025-02-23 09:32:24<SeP>2025-02-23 09:36:00<SeP>2025-02-23 09:39:36<SeP>2025-02-23 09:43:12<SeP>2025-02-23 09:46:48<SeP>2025-02-23 09:50:24<SeP>2025-02-23 09:54:00<SeP>2025-02-23 09:57:36<SeP>2025-02-23 10:01:12<SeP>2025-02-23 10:04:48<SeP>2025-02-23 10:08:24<SeP>2025-02-23 10:12:00<SeP>2025-02-23 10:15:36<SeP>2025-02-23 10:19:12<SeP>2025-02-23 10:22:48<SeP>2025-02-23 10:26:24<SeP>2025-02-23 10:30:00<SeP>2025-02-23 10:33:36<SeP>2025-02-23 10:37:12<SeP>2025-02-23 10:40:48<SeP>2025-02-23 10:44:24<SeP>2025-02-23 10:48:00<SeP>2025-02-23 10:51:36<SeP>2025-02-23 10:55:12<SeP>2025-02-23 10:58:48<SeP>2025-02-23 11:02:24<SeP>2025-02-23 11:06:00<SeP>2025-02-23 11:09:36<SeP>2025-02-23 11:13:12<SeP>2025-02-23 11:16:48<SeP>2025-02-23 11:20:24<SeP>2025-02-23 11:24:00<SeP>2025-02-23 11:27:36<SeP>2025-02-23 11:31:12<SeP>2025-02-23 11:34:48<SeP>2025-02-23 11:38:24<SeP>2025-02-23 11:42:00<SeP>2025-02-23 11:45:36<SeP>2025-02-23 11:49:12<SeP>2025-02-23 11:52:48<SeP>2025-02-23 11:56:24<SeP>2025-02-23 12:00:00<SeP>2025-02-23 12:03:36<SeP>2025-02-23 12:07:12<SeP>2025-02-23 12:10:48<SeP>2025-02-23 12:14:24<SeP>2025-02-23 12:18:00<SeP>2025-02-23 12:21:36<SeP>2025-02-23 12:25:12<SeP>2025-02-23 12:28:48<SeP>2025-02-23 12:32:24<SeP>2025-02-23 12:36:00<SeP>2025-02-23 12:39:36<SeP>2025-02-23 12:43:12<SeP>2025-02-23 12:46:48<SeP>2025-02-23 12:50:24<SeP>2025-02-23 12:54:00<SeP>2025-02-23 12:57:36<SeP>2025-02-23 13:01:12<SeP>2025-02-23 13:04:48<SeP>2025-02-23 13:08:24<SeP>2025-02-23 13:12:00<SeP>2025-02-23 13:15:36<SeP>2025-02-23 13:19:12<SeP>2025-02-23 13:22:48<SeP>2025-02-23 13:26:24<SeP>2025-02-23 13:30:00<SeP>2025-02-23 13:33:36<SeP>2025-02-23 13:37:12<SeP>2025-02-23 13:40:48<SeP>2025-02-23 13:44:24<SeP>2025-02-23 13:48:00<SeP>2025-02-23 13:51:36<SeP>2025-02-23 13:55:12<SeP>2025-02-23 13:58:48<SeP>2025-02-23 14:02:24<SeP>2025-02-23 14:06:00<SeP>2025-02-23 14:09:36<SeP>2025-02-23 14:13:12<SeP>2025-02-23 14:16:48<SeP>2025-02-23 14:20:24<SeP>2025-02-23 14:24:00<SeP>2025-02-23 14:27:36<SeP>2025-02-23 14:31:12<SeP>2025-02-23 14:34:48<SeP>2025-02-23 14:38:24<SeP>2025-02-23 14:42:00<SeP>2025-02-23 14:45:36<SeP>2025-02-23 14:49:12<SeP>2025-02-23 14:52:48<SeP>2025-02-23 14:56:24<SeP>2025-02-23 15:00:00<SeP>2025-02-23 15:03:36<SeP>2025-02-23 15:07:12<SeP>2025-02-23 15:10:48<SeP>2025-02-23 15:14:24<SeP>2025-02-23 15:18:00<SeP>2025-02-23 15:21:36<SeP>2025-02-23 15:25:12<SeP>2025-02-23 15:28:48<SeP>2025-02-23 15:32:24<SeP>2025-02-23 15:36:00<SeP>2025-02-23 15:39:36<SeP>2025-02-23 15:43:12<SeP>2025-02-23 15:46:48<SeP>2025-02-23 15:50:24<SeP>2025-02-23 15:54:00<SeP>2025-02-23 15:57:36<SeP>2025-02-23 16:01:12<SeP>2025-02-23 16:04:48<SeP>2025-02-23 16:08:24<SeP>2025-02-23 16:12:00<SeP>2025-02-23 16:15:36<SeP>2025-02-23 16:19:12<SeP>2025-02-23 16:22:48<SeP>2025-02-23 16:26:24<SeP>2025-02-23 16:30:00<SeP>2025-02-23 16:33:36<SeP>2025-02-23 16:37:12<SeP>2025-02-23 16:40:48<SeP>2025-02-23 16:44:24<SeP>2025-02-23 16:48:00<SeP>2025-02-23 16:51:36<SeP>2025-02-23 16:55:12<SeP>2025-02-23 16:58:48<SeP>2025-02-23 17:02:24<SeP>2025-02-23 17:06:00<SeP>2025-02-23 17:09:36<SeP>2025-02-23 17:13:12<SeP>2025-02-23 17:16:48<SeP>2025-02-23 17:20:24<SeP>2025-02-23 17:24:00<SeP>2025-02-23 17:27:36<SeP>2025-02-23 17:31:12<SeP>2025-02-23 17:34:48<SeP>2025-02-23 17:38:24<SeP>2025-02-23 17:42:00<SeP>2025-02-23 17:45:36<SeP>2025-02-23 17:49:12<SeP>2025-02-23 17:52:48<SeP>2025-02-23 17:56:24<SeP>2025-02-23 18:00:00<SeP>2025-02-23 18:03:36<SeP>2025-02-23 18:07:12<SeP>2025-02-23 18:10:48<SeP>2025-02-23 18:14:24<SeP>2025-02-23 18:18:00<SeP>2025-02-23 18:21:36<SeP>2025-02-23 18:25:12<SeP>2025-02-23 18:28:48<SeP>2025-02-23 18:32:24<SeP>2025-02-23 18:36:00<SeP>2025-02-23 18:39:36<SeP>2025-02-23 18:43:12<SeP>2025-02-23 18:46:48<SeP>2025-02-23 18:50:24<SeP>2025-02-23 18:54:00<SeP>2025-02-23 18:57:36<SeP>2025-02-23 19:01:12<SeP>2025-02-23 19:04:48<SeP>2025-02-23 19:08:24<SeP>2025-02-23 19:12:00<SeP>2025-02-23 19:15:36<SeP>2025-02-23 19:19:12<SeP>2025-02-23 19:22:48<SeP>2025-02-23 19:26:24<SeP>2025-02-23 19:30:00<SeP>2025-02-23 19:33:36<SeP>2025-02-23 19:37:12<SeP>2025-02-23 19:40:48<SeP>2025-02-23 19:44:24<SeP>2025-02-23 19:48:00<SeP>2025-02-23 19:51:36<SeP>2025-02-23 19:55:12<SeP>2025-02-23 19:58:48<SeP>2025-02-23 20:02:24<SeP>2025-02-23 20:06:00<SeP>2025-02-23 20:09:36<SeP>2025-02-23 20:13:12<SeP>2025-02-23 20:16:48<SeP>2025-02-23 20:20:24<SeP>2025-02-23 20:24:00<SeP>2025-02-23 20:27:36<SeP>2025-02-23 20:31:12<SeP>2025-02-23 20:34:48<SeP>2025-02-23 20:38:24<SeP>2025-02-23 20:42:00<SeP>2025-02-23 20:45:36<SeP>2025-02-23 20:49:12<SeP>2025-02-23 20:52:48<SeP>2025-02-23 20:56:24<SeP>2025-02-23 21:00:00<SeP>2025-02-23 21:03:36<SeP>2025-02-23 21:07:12<SeP>2025-02-23 21:10:48<SeP>2025-02-23 21:14:24<SeP>2025-02-23 21:18:00<SeP>2025-02-23 21:21:36<SeP>2025-02-23 21:25:12<SeP>2025-02-23 21:28:48<SeP>2025-02-23 21:32:24<SeP>2025-02-23 21:36:00<SeP>2025-02-23 21:39:36<SeP>2025-02-23 21:43:12<SeP>2025-02-23 21:46:48<SeP>2025-02-23 21:50:24<SeP>2025-02-23 21:54:00<SeP>2025-02-23 21:57:36<SeP>2025-02-23 22:01:12<SeP>2025-02-23 22:04:48<SeP>2025-02-23 22:08:24<SeP>2025-02-23 22:12:00<SeP>2025-02-23 22:15:36<SeP>2025-02-23 22:19:12<SeP>2025-02-23 22:22:48<SeP>2025-02-23 22:26:24<SeP>2025-02-23 22:30:00<SeP>2025-02-23 22:33:36<SeP>2025-02-23 22:37:12<SeP>2025-02-23 22:40:48<SeP>2025-02-23 22:44:24<SeP>2025-02-23 22:48:00<SeP>2025-02-23 22:51:36<SeP>2025-02-23 22:55:12<SeP>2025-02-23 22:58:48<SeP>2025-02-23 23:02:24<SeP>2025-02-23 23:06:00<SeP>2025-02-23 23:09:36<SeP>2025-02-23 23:13:12<SeP>2025-02-23 23:16:48<SeP>2025-02-23 23:20:24<SeP>2025-02-23 23:24:00<SeP>2025-02-23 23:27:36<SeP>2025-02-23 23:31:12<SeP>2025-02-23 23:34:48<SeP>2025-02-23 23:38:24<SeP>2025-02-23 23:42:00<SeP>2025-02-23 23:45:36<SeP>2025-02-23 23:49:12<SeP>2025-02-23 23:52:48<SeP>2025-02-23 23:56:24";
  const itemLabel       = "Escaneos";
  const itemData        = "0<SeP>2<SeP>1<SeP>3<SeP>0<SeP>1<SeP>1<SeP>2<SeP>3<SeP>0<SeP>3<SeP>1<SeP>2<SeP>0<SeP>3<SeP>2<SeP>1<SeP>1<SeP>1<SeP>4<SeP>0<SeP>1<SeP>0<SeP>5<SeP>0<SeP>2<SeP>1<SeP>4<SeP>0<SeP>3<SeP>4<SeP>1<SeP>0<SeP>11<SeP>3<SeP>10<SeP>13<SeP>3<SeP>4<SeP>0<SeP>1<SeP>3<SeP>1<SeP>4<SeP>1<SeP>6<SeP>1<SeP>0<SeP>3<SeP>3<SeP>7<SeP>0<SeP>1<SeP>4<SeP>1<SeP>1<SeP>2<SeP>3<SeP>2<SeP>3<SeP>6<SeP>5<SeP>3<SeP>3<SeP>3<SeP>5<SeP>4<SeP>1<SeP>10<SeP>3<SeP>5<SeP>2<SeP>5<SeP>7<SeP>2<SeP>1<SeP>2<SeP>3<SeP>2<SeP>3<SeP>7<SeP>17<SeP>4<SeP>5<SeP>18<SeP>16<SeP>1<SeP>3<SeP>3<SeP>2<SeP>1<SeP>2<SeP>1<SeP>5<SeP>0<SeP>2<SeP>3<SeP>3<SeP>1<SeP>4<SeP>2<SeP>3<SeP>2<SeP>5<SeP>3<SeP>5<SeP>4<SeP>3<SeP>7<SeP>3<SeP>3<SeP>2<SeP>1<SeP>2<SeP>6<SeP>0<SeP>4<SeP>0<SeP>5<SeP>2<SeP>1<SeP>2<SeP>2<SeP>4<SeP>1<SeP>2<SeP>2<SeP>5<SeP>1<SeP>3<SeP>2<SeP>3<SeP>2<SeP>0<SeP>1<SeP>1<SeP>4<SeP>1<SeP>1<SeP>0<SeP>1<SeP>2<SeP>0<SeP>3<SeP>0<SeP>2<SeP>2<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>3<SeP>2<SeP>3<SeP>0<SeP>2<SeP>0<SeP>0<SeP>2<SeP>0<SeP>1<SeP>0<SeP>9<SeP>1<SeP>1<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>1<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>4<SeP>0<SeP>0<SeP>1<SeP>1<SeP>3<SeP>0<SeP>1<SeP>2<SeP>0<SeP>5<SeP>0<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>1<SeP>4<SeP>1<SeP>4<SeP>4<SeP>2<SeP>3<SeP>7<SeP>0<SeP>2<SeP>2<SeP>5<SeP>4<SeP>0<SeP>1<SeP>1<SeP>2<SeP>0<SeP>3<SeP>1<SeP>2<SeP>2<SeP>2<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>9<SeP>2<SeP>0<SeP>3<SeP>4<SeP>0<SeP>1<SeP>5<SeP>4<SeP>0<SeP>0<SeP>4<SeP>2<SeP>0<SeP>7<SeP>1<SeP>5<SeP>1<SeP>1<SeP>2<SeP>0<SeP>3<SeP>5<SeP>22<SeP>40<SeP>39<SeP>17<SeP>11<SeP>2<SeP>7<SeP>3<SeP>5<SeP>1<SeP>3<SeP>5<SeP>2<SeP>2<SeP>4<SeP>4<SeP>0<SeP>1<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>3<SeP>1<SeP>1<SeP>2<SeP>3<SeP>3<SeP>0<SeP>1<SeP>1<SeP>0<SeP>4<SeP>3<SeP>1<SeP>3<SeP>0<SeP>4<SeP>1<SeP>1<SeP>57<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>14<SeP>1<SeP>1<SeP>2<SeP>15<SeP>6<SeP>0<SeP>1<SeP>2<SeP>3<SeP>14<SeP>1<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>3<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>1<SeP>2<SeP>2<SeP>0<SeP>1<SeP>3<SeP>1<SeP>4<SeP>7<SeP>0<SeP>2<SeP>2<SeP>3<SeP>3<SeP>3<SeP>0<SeP>0<SeP>4<SeP>0<SeP>3<SeP>2<SeP>1<SeP>3<SeP>2<SeP>0<SeP>0<SeP>3<SeP>3<SeP>1<SeP>0<SeP>1<SeP>1<SeP>4<SeP>2<SeP>15<SeP>3<SeP>1<SeP>0<SeP>5<SeP>4<SeP>1<SeP>0<SeP>3<SeP>2<SeP>4<SeP>1<SeP>0<SeP>4<SeP>0<SeP>3<SeP>1<SeP>0<SeP>4<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>2<SeP>5<SeP>3<SeP>1<SeP>2<SeP>2<SeP>0<SeP>4<SeP>1<SeP>1<SeP>17<SeP>51";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-23 00:00:00<SeP>2025-02-23 00:03:36<SeP>2025-02-23 00:07:12<SeP>2025-02-23 00:10:48<SeP>2025-02-23 00:14:24<SeP>2025-02-23 00:18:00<SeP>2025-02-23 00:21:36<SeP>2025-02-23 00:25:12<SeP>2025-02-23 00:28:48<SeP>2025-02-23 00:32:24<SeP>2025-02-23 00:36:00<SeP>2025-02-23 00:39:36<SeP>2025-02-23 00:43:12<SeP>2025-02-23 00:46:48<SeP>2025-02-23 00:50:24<SeP>2025-02-23 00:54:00<SeP>2025-02-23 00:57:36<SeP>2025-02-23 01:01:12<SeP>2025-02-23 01:04:48<SeP>2025-02-23 01:08:24<SeP>2025-02-23 01:12:00<SeP>2025-02-23 01:15:36<SeP>2025-02-23 01:19:12<SeP>2025-02-23 01:22:48<SeP>2025-02-23 01:26:24<SeP>2025-02-23 01:30:00<SeP>2025-02-23 01:33:36<SeP>2025-02-23 01:37:12<SeP>2025-02-23 01:40:48<SeP>2025-02-23 01:44:24<SeP>2025-02-23 01:48:00<SeP>2025-02-23 01:51:36<SeP>2025-02-23 01:55:12<SeP>2025-02-23 01:58:48<SeP>2025-02-23 02:02:24<SeP>2025-02-23 02:06:00<SeP>2025-02-23 02:09:36<SeP>2025-02-23 02:13:12<SeP>2025-02-23 02:16:48<SeP>2025-02-23 02:20:24<SeP>2025-02-23 02:24:00<SeP>2025-02-23 02:27:36<SeP>2025-02-23 02:31:12<SeP>2025-02-23 02:34:48<SeP>2025-02-23 02:38:24<SeP>2025-02-23 02:42:00<SeP>2025-02-23 02:45:36<SeP>2025-02-23 02:49:12<SeP>2025-02-23 02:52:48<SeP>2025-02-23 02:56:24<SeP>2025-02-23 03:00:00<SeP>2025-02-23 03:03:36<SeP>2025-02-23 03:07:12<SeP>2025-02-23 03:10:48<SeP>2025-02-23 03:14:24<SeP>2025-02-23 03:18:00<SeP>2025-02-23 03:21:36<SeP>2025-02-23 03:25:12<SeP>2025-02-23 03:28:48<SeP>2025-02-23 03:32:24<SeP>2025-02-23 03:36:00<SeP>2025-02-23 03:39:36<SeP>2025-02-23 03:43:12<SeP>2025-02-23 03:46:48<SeP>2025-02-23 03:50:24<SeP>2025-02-23 03:54:00<SeP>2025-02-23 03:57:36<SeP>2025-02-23 04:01:12<SeP>2025-02-23 04:04:48<SeP>2025-02-23 04:08:24<SeP>2025-02-23 04:12:00<SeP>2025-02-23 04:15:36<SeP>2025-02-23 04:19:12<SeP>2025-02-23 04:22:48<SeP>2025-02-23 04:26:24<SeP>2025-02-23 04:30:00<SeP>2025-02-23 04:33:36<SeP>2025-02-23 04:37:12<SeP>2025-02-23 04:40:48<SeP>2025-02-23 04:44:24<SeP>2025-02-23 04:48:00<SeP>2025-02-23 04:51:36<SeP>2025-02-23 04:55:12<SeP>2025-02-23 04:58:48<SeP>2025-02-23 05:02:24<SeP>2025-02-23 05:06:00<SeP>2025-02-23 05:09:36<SeP>2025-02-23 05:13:12<SeP>2025-02-23 05:16:48<SeP>2025-02-23 05:20:24<SeP>2025-02-23 05:24:00<SeP>2025-02-23 05:27:36<SeP>2025-02-23 05:31:12<SeP>2025-02-23 05:34:48<SeP>2025-02-23 05:38:24<SeP>2025-02-23 05:42:00<SeP>2025-02-23 05:45:36<SeP>2025-02-23 05:49:12<SeP>2025-02-23 05:52:48<SeP>2025-02-23 05:56:24<SeP>2025-02-23 06:00:00<SeP>2025-02-23 06:03:36<SeP>2025-02-23 06:07:12<SeP>2025-02-23 06:10:48<SeP>2025-02-23 06:14:24<SeP>2025-02-23 06:18:00<SeP>2025-02-23 06:21:36<SeP>2025-02-23 06:25:12<SeP>2025-02-23 06:28:48<SeP>2025-02-23 06:32:24<SeP>2025-02-23 06:36:00<SeP>2025-02-23 06:39:36<SeP>2025-02-23 06:43:12<SeP>2025-02-23 06:46:48<SeP>2025-02-23 06:50:24<SeP>2025-02-23 06:54:00<SeP>2025-02-23 06:57:36<SeP>2025-02-23 07:01:12<SeP>2025-02-23 07:04:48<SeP>2025-02-23 07:08:24<SeP>2025-02-23 07:12:00<SeP>2025-02-23 07:15:36<SeP>2025-02-23 07:19:12<SeP>2025-02-23 07:22:48<SeP>2025-02-23 07:26:24<SeP>2025-02-23 07:30:00<SeP>2025-02-23 07:33:36<SeP>2025-02-23 07:37:12<SeP>2025-02-23 07:40:48<SeP>2025-02-23 07:44:24<SeP>2025-02-23 07:48:00<SeP>2025-02-23 07:51:36<SeP>2025-02-23 07:55:12<SeP>2025-02-23 07:58:48<SeP>2025-02-23 08:02:24<SeP>2025-02-23 08:06:00<SeP>2025-02-23 08:09:36<SeP>2025-02-23 08:13:12<SeP>2025-02-23 08:16:48<SeP>2025-02-23 08:20:24<SeP>2025-02-23 08:24:00<SeP>2025-02-23 08:27:36<SeP>2025-02-23 08:31:12<SeP>2025-02-23 08:34:48<SeP>2025-02-23 08:38:24<SeP>2025-02-23 08:42:00<SeP>2025-02-23 08:45:36<SeP>2025-02-23 08:49:12<SeP>2025-02-23 08:52:48<SeP>2025-02-23 08:56:24<SeP>2025-02-23 09:00:00<SeP>2025-02-23 09:03:36<SeP>2025-02-23 09:07:12<SeP>2025-02-23 09:10:48<SeP>2025-02-23 09:14:24<SeP>2025-02-23 09:18:00<SeP>2025-02-23 09:21:36<SeP>2025-02-23 09:25:12<SeP>2025-02-23 09:28:48<SeP>2025-02-23 09:32:24<SeP>2025-02-23 09:36:00<SeP>2025-02-23 09:39:36<SeP>2025-02-23 09:43:12<SeP>2025-02-23 09:46:48<SeP>2025-02-23 09:50:24<SeP>2025-02-23 09:54:00<SeP>2025-02-23 09:57:36<SeP>2025-02-23 10:01:12<SeP>2025-02-23 10:04:48<SeP>2025-02-23 10:08:24<SeP>2025-02-23 10:12:00<SeP>2025-02-23 10:15:36<SeP>2025-02-23 10:19:12<SeP>2025-02-23 10:22:48<SeP>2025-02-23 10:26:24<SeP>2025-02-23 10:30:00<SeP>2025-02-23 10:33:36<SeP>2025-02-23 10:37:12<SeP>2025-02-23 10:40:48<SeP>2025-02-23 10:44:24<SeP>2025-02-23 10:48:00<SeP>2025-02-23 10:51:36<SeP>2025-02-23 10:55:12<SeP>2025-02-23 10:58:48<SeP>2025-02-23 11:02:24<SeP>2025-02-23 11:06:00<SeP>2025-02-23 11:09:36<SeP>2025-02-23 11:13:12<SeP>2025-02-23 11:16:48<SeP>2025-02-23 11:20:24<SeP>2025-02-23 11:24:00<SeP>2025-02-23 11:27:36<SeP>2025-02-23 11:31:12<SeP>2025-02-23 11:34:48<SeP>2025-02-23 11:38:24<SeP>2025-02-23 11:42:00<SeP>2025-02-23 11:45:36<SeP>2025-02-23 11:49:12<SeP>2025-02-23 11:52:48<SeP>2025-02-23 11:56:24<SeP>2025-02-23 12:00:00<SeP>2025-02-23 12:03:36<SeP>2025-02-23 12:07:12<SeP>2025-02-23 12:10:48<SeP>2025-02-23 12:14:24<SeP>2025-02-23 12:18:00<SeP>2025-02-23 12:21:36<SeP>2025-02-23 12:25:12<SeP>2025-02-23 12:28:48<SeP>2025-02-23 12:32:24<SeP>2025-02-23 12:36:00<SeP>2025-02-23 12:39:36<SeP>2025-02-23 12:43:12<SeP>2025-02-23 12:46:48<SeP>2025-02-23 12:50:24<SeP>2025-02-23 12:54:00<SeP>2025-02-23 12:57:36<SeP>2025-02-23 13:01:12<SeP>2025-02-23 13:04:48<SeP>2025-02-23 13:08:24<SeP>2025-02-23 13:12:00<SeP>2025-02-23 13:15:36<SeP>2025-02-23 13:19:12<SeP>2025-02-23 13:22:48<SeP>2025-02-23 13:26:24<SeP>2025-02-23 13:30:00<SeP>2025-02-23 13:33:36<SeP>2025-02-23 13:37:12<SeP>2025-02-23 13:40:48<SeP>2025-02-23 13:44:24<SeP>2025-02-23 13:48:00<SeP>2025-02-23 13:51:36<SeP>2025-02-23 13:55:12<SeP>2025-02-23 13:58:48<SeP>2025-02-23 14:02:24<SeP>2025-02-23 14:06:00<SeP>2025-02-23 14:09:36<SeP>2025-02-23 14:13:12<SeP>2025-02-23 14:16:48<SeP>2025-02-23 14:20:24<SeP>2025-02-23 14:24:00<SeP>2025-02-23 14:27:36<SeP>2025-02-23 14:31:12<SeP>2025-02-23 14:34:48<SeP>2025-02-23 14:38:24<SeP>2025-02-23 14:42:00<SeP>2025-02-23 14:45:36<SeP>2025-02-23 14:49:12<SeP>2025-02-23 14:52:48<SeP>2025-02-23 14:56:24<SeP>2025-02-23 15:00:00<SeP>2025-02-23 15:03:36<SeP>2025-02-23 15:07:12<SeP>2025-02-23 15:10:48<SeP>2025-02-23 15:14:24<SeP>2025-02-23 15:18:00<SeP>2025-02-23 15:21:36<SeP>2025-02-23 15:25:12<SeP>2025-02-23 15:28:48<SeP>2025-02-23 15:32:24<SeP>2025-02-23 15:36:00<SeP>2025-02-23 15:39:36<SeP>2025-02-23 15:43:12<SeP>2025-02-23 15:46:48<SeP>2025-02-23 15:50:24<SeP>2025-02-23 15:54:00<SeP>2025-02-23 15:57:36<SeP>2025-02-23 16:01:12<SeP>2025-02-23 16:04:48<SeP>2025-02-23 16:08:24<SeP>2025-02-23 16:12:00<SeP>2025-02-23 16:15:36<SeP>2025-02-23 16:19:12<SeP>2025-02-23 16:22:48<SeP>2025-02-23 16:26:24<SeP>2025-02-23 16:30:00<SeP>2025-02-23 16:33:36<SeP>2025-02-23 16:37:12<SeP>2025-02-23 16:40:48<SeP>2025-02-23 16:44:24<SeP>2025-02-23 16:48:00<SeP>2025-02-23 16:51:36<SeP>2025-02-23 16:55:12<SeP>2025-02-23 16:58:48<SeP>2025-02-23 17:02:24<SeP>2025-02-23 17:06:00<SeP>2025-02-23 17:09:36<SeP>2025-02-23 17:13:12<SeP>2025-02-23 17:16:48<SeP>2025-02-23 17:20:24<SeP>2025-02-23 17:24:00<SeP>2025-02-23 17:27:36<SeP>2025-02-23 17:31:12<SeP>2025-02-23 17:34:48<SeP>2025-02-23 17:38:24<SeP>2025-02-23 17:42:00<SeP>2025-02-23 17:45:36<SeP>2025-02-23 17:49:12<SeP>2025-02-23 17:52:48<SeP>2025-02-23 17:56:24<SeP>2025-02-23 18:00:00<SeP>2025-02-23 18:03:36<SeP>2025-02-23 18:07:12<SeP>2025-02-23 18:10:48<SeP>2025-02-23 18:14:24<SeP>2025-02-23 18:18:00<SeP>2025-02-23 18:21:36<SeP>2025-02-23 18:25:12<SeP>2025-02-23 18:28:48<SeP>2025-02-23 18:32:24<SeP>2025-02-23 18:36:00<SeP>2025-02-23 18:39:36<SeP>2025-02-23 18:43:12<SeP>2025-02-23 18:46:48<SeP>2025-02-23 18:50:24<SeP>2025-02-23 18:54:00<SeP>2025-02-23 18:57:36<SeP>2025-02-23 19:01:12<SeP>2025-02-23 19:04:48<SeP>2025-02-23 19:08:24<SeP>2025-02-23 19:12:00<SeP>2025-02-23 19:15:36<SeP>2025-02-23 19:19:12<SeP>2025-02-23 19:22:48<SeP>2025-02-23 19:26:24<SeP>2025-02-23 19:30:00<SeP>2025-02-23 19:33:36<SeP>2025-02-23 19:37:12<SeP>2025-02-23 19:40:48<SeP>2025-02-23 19:44:24<SeP>2025-02-23 19:48:00<SeP>2025-02-23 19:51:36<SeP>2025-02-23 19:55:12<SeP>2025-02-23 19:58:48<SeP>2025-02-23 20:02:24<SeP>2025-02-23 20:06:00<SeP>2025-02-23 20:09:36<SeP>2025-02-23 20:13:12<SeP>2025-02-23 20:16:48<SeP>2025-02-23 20:20:24<SeP>2025-02-23 20:24:00<SeP>2025-02-23 20:27:36<SeP>2025-02-23 20:31:12<SeP>2025-02-23 20:34:48<SeP>2025-02-23 20:38:24<SeP>2025-02-23 20:42:00<SeP>2025-02-23 20:45:36<SeP>2025-02-23 20:49:12<SeP>2025-02-23 20:52:48<SeP>2025-02-23 20:56:24<SeP>2025-02-23 21:00:00<SeP>2025-02-23 21:03:36<SeP>2025-02-23 21:07:12<SeP>2025-02-23 21:10:48<SeP>2025-02-23 21:14:24<SeP>2025-02-23 21:18:00<SeP>2025-02-23 21:21:36<SeP>2025-02-23 21:25:12<SeP>2025-02-23 21:28:48<SeP>2025-02-23 21:32:24<SeP>2025-02-23 21:36:00<SeP>2025-02-23 21:39:36<SeP>2025-02-23 21:43:12<SeP>2025-02-23 21:46:48<SeP>2025-02-23 21:50:24<SeP>2025-02-23 21:54:00<SeP>2025-02-23 21:57:36<SeP>2025-02-23 22:01:12<SeP>2025-02-23 22:04:48<SeP>2025-02-23 22:08:24<SeP>2025-02-23 22:12:00<SeP>2025-02-23 22:15:36<SeP>2025-02-23 22:19:12<SeP>2025-02-23 22:22:48<SeP>2025-02-23 22:26:24<SeP>2025-02-23 22:30:00<SeP>2025-02-23 22:33:36<SeP>2025-02-23 22:37:12<SeP>2025-02-23 22:40:48<SeP>2025-02-23 22:44:24<SeP>2025-02-23 22:48:00<SeP>2025-02-23 22:51:36<SeP>2025-02-23 22:55:12<SeP>2025-02-23 22:58:48<SeP>2025-02-23 23:02:24<SeP>2025-02-23 23:06:00<SeP>2025-02-23 23:09:36<SeP>2025-02-23 23:13:12<SeP>2025-02-23 23:16:48<SeP>2025-02-23 23:20:24<SeP>2025-02-23 23:24:00<SeP>2025-02-23 23:27:36<SeP>2025-02-23 23:31:12<SeP>2025-02-23 23:34:48<SeP>2025-02-23 23:38:24<SeP>2025-02-23 23:42:00<SeP>2025-02-23 23:45:36<SeP>2025-02-23 23:49:12<SeP>2025-02-23 23:52:48<SeP>2025-02-23 23:56:24";
  const itemLabel       = "Ataques";
  const itemData        = "38<SeP>0<SeP>26<SeP>7<SeP>0<SeP>1<SeP>0<SeP>24<SeP>0<SeP>0<SeP>23<SeP>6<SeP>24<SeP>1<SeP>1<SeP>22<SeP>22<SeP>1<SeP>0<SeP>1<SeP>14<SeP>8<SeP>23<SeP>0<SeP>23<SeP>0<SeP>1<SeP>2<SeP>1<SeP>22<SeP>3<SeP>25<SeP>0<SeP>24<SeP>0<SeP>1<SeP>0<SeP>0<SeP>3<SeP>0<SeP>2<SeP>22<SeP>0<SeP>3<SeP>2<SeP>2<SeP>22<SeP>23<SeP>17<SeP>71<SeP>27<SeP>48<SeP>26<SeP>5<SeP>6<SeP>31<SeP>10<SeP>45<SeP>16<SeP>26<SeP>27<SeP>22<SeP>24<SeP>22<SeP>23<SeP>45<SeP>22<SeP>12<SeP>6<SeP>52<SeP>1<SeP>43<SeP>12<SeP>6<SeP>8<SeP>10<SeP>27<SeP>6<SeP>5<SeP>5<SeP>6<SeP>8<SeP>7<SeP>7<SeP>8<SeP>47<SeP>1<SeP>3<SeP>0<SeP>3<SeP>0<SeP>3<SeP>42<SeP>8<SeP>1<SeP>3<SeP>20<SeP>40<SeP>39<SeP>32<SeP>27<SeP>72<SeP>52<SeP>45<SeP>48<SeP>49<SeP>42<SeP>62<SeP>35<SeP>24<SeP>26<SeP>19<SeP>15<SeP>11<SeP>5<SeP>10<SeP>2<SeP>24<SeP>2<SeP>5<SeP>1<SeP>2<SeP>3<SeP>6<SeP>0<SeP>4<SeP>3<SeP>7<SeP>1<SeP>5<SeP>3<SeP>5<SeP>3<SeP>2<SeP>5<SeP>32<SeP>2<SeP>4<SeP>2<SeP>10<SeP>34<SeP>11<SeP>6<SeP>10<SeP>4<SeP>15<SeP>6<SeP>6<SeP>2<SeP>3<SeP>26<SeP>8<SeP>42<SeP>13<SeP>5<SeP>31<SeP>6<SeP>25<SeP>2<SeP>1<SeP>24<SeP>0<SeP>2<SeP>0<SeP>23<SeP>1<SeP>23<SeP>2<SeP>6<SeP>1<SeP>3<SeP>26<SeP>4<SeP>24<SeP>2<SeP>1<SeP>24<SeP>1<SeP>1<SeP>1<SeP>0<SeP>47<SeP>1<SeP>51<SeP>0<SeP>26<SeP>44<SeP>26<SeP>0<SeP>1<SeP>25<SeP>1<SeP>1<SeP>23<SeP>1<SeP>4<SeP>2<SeP>80<SeP>21<SeP>27<SeP>23<SeP>29<SeP>17<SeP>8<SeP>3<SeP>1<SeP>2<SeP>1<SeP>2<SeP>4<SeP>36<SeP>13<SeP>33<SeP>66<SeP>53<SeP>24<SeP>47<SeP>20<SeP>33<SeP>48<SeP>65<SeP>55<SeP>28<SeP>45<SeP>32<SeP>38<SeP>8<SeP>30<SeP>9<SeP>6<SeP>8<SeP>4<SeP>4<SeP>29<SeP>4<SeP>14<SeP>21<SeP>8<SeP>33<SeP>3<SeP>6<SeP>1<SeP>5<SeP>24<SeP>26<SeP>23<SeP>10<SeP>22<SeP>21<SeP>43<SeP>19<SeP>41<SeP>37<SeP>15<SeP>16<SeP>15<SeP>22<SeP>11<SeP>30<SeP>55<SeP>6<SeP>14<SeP>3<SeP>27<SeP>2<SeP>24<SeP>1<SeP>6<SeP>6<SeP>11<SeP>35<SeP>37<SeP>10<SeP>23<SeP>35<SeP>72<SeP>14<SeP>19<SeP>14<SeP>21<SeP>11<SeP>9<SeP>27<SeP>4<SeP>22<SeP>2<SeP>24<SeP>24<SeP>6<SeP>24<SeP>3<SeP>2<SeP>48<SeP>1<SeP>50<SeP>1<SeP>6<SeP>2<SeP>3<SeP>2<SeP>4<SeP>3<SeP>8<SeP>4<SeP>9<SeP>7<SeP>11<SeP>34<SeP>14<SeP>24<SeP>41<SeP>12<SeP>14<SeP>17<SeP>57<SeP>9<SeP>35<SeP>35<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>1<SeP>1<SeP>2<SeP>3<SeP>1<SeP>3<SeP>1<SeP>3<SeP>3<SeP>5<SeP>1<SeP>3<SeP>2<SeP>5<SeP>2<SeP>7<SeP>3<SeP>4<SeP>2<SeP>6<SeP>1<SeP>4<SeP>2<SeP>3<SeP>2<SeP>4<SeP>1<SeP>3<SeP>1<SeP>5<SeP>2<SeP>2<SeP>3<SeP>2<SeP>3<SeP>6<SeP>2<SeP>2<SeP>3<SeP>2<SeP>2<SeP>1<SeP>4<SeP>4<SeP>3<SeP>4<SeP>3<SeP>6<SeP>1<SeP>2<SeP>3<SeP>2<SeP>1<SeP>3<SeP>1<SeP>2<SeP>3<SeP>5<SeP>5<SeP>5<SeP>8<SeP>5<SeP>2<SeP>5<SeP>15<SeP>11<SeP>14<SeP>25<SeP>31<SeP>16<SeP>20<SeP>28<SeP>21<SeP>22<SeP>22";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "Taiwan<SeP>United States<SeP>China<SeP>South Korea<SeP>France<SeP>Singapore<SeP>India<SeP>Türkiye<SeP>United Kingdom<SeP>Vietnam";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "2280<SeP>803<SeP>589<SeP>427<SeP>423<SeP>367<SeP>224<SeP>155<SeP>151<SeP>125";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Singapore<SeP>India<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>The Netherlands<SeP>Russia<SeP>South Korea<SeP>Hong Kong";
  const itemLabel   = "Scans";
  const itemData    = "449<SeP>136<SeP>94<SeP>77<SeP>75<SeP>59<SeP>40<SeP>35<SeP>33<SeP>29";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Taiwan<SeP>United States<SeP>France<SeP>South Korea<SeP>Singapore<SeP>Türkiye<SeP>United Kingdom<SeP>China<SeP>India<SeP>Vietnam";
  const itemLabel   = "Attacks";
  const itemData    = "2205<SeP>726<SeP>414<SeP>394<SeP>231<SeP>152<SeP>148<SeP>140<SeP>130<SeP>122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "3462<SeP>14061<SeP>4766<SeP>4134<SeP>16276<SeP>396982<SeP>9506<SeP>9829<SeP>47890<SeP>4837";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "1956<SeP>798<SeP>395<SeP>305<SeP>262<SeP>133<SeP>130<SeP>103<SeP>91<SeP>88";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>9506<SeP>4837<SeP>9829<SeP>50580<SeP>3462<SeP>4811<SeP>207566<SeP>4766<SeP>14061";
  const itemLabel   = "Scans";
  const itemData    = "280<SeP>130<SeP>87<SeP>79<SeP>56<SeP>55<SeP>51<SeP>47<SeP>30<SeP>30";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "3462<SeP>14061<SeP>4766<SeP>16276<SeP>396982<SeP>47890<SeP>34534<SeP>25820<SeP>399804<SeP>27651";
  const itemLabel   = "Atacks";
  const itemData    = "1901<SeP>768<SeP>365<SeP>258<SeP>114<SeP>82<SeP>78<SeP>71<SeP>70<SeP>69";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "Taiwan<SeP>United States<SeP>China<SeP>South Korea<SeP>France<SeP>Singapore<SeP>India<SeP>Türkiye<SeP>United Kingdom<SeP>Vietnam";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "2280<SeP>803<SeP>589<SeP>427<SeP>423<SeP>367<SeP>224<SeP>155<SeP>151<SeP>125";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Singapore<SeP>India<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>The Netherlands<SeP>Russia<SeP>South Korea<SeP>Hong Kong";
  const itemLabel   = "Escaneos";
  const itemData    = "449<SeP>136<SeP>94<SeP>77<SeP>75<SeP>59<SeP>40<SeP>35<SeP>33<SeP>29";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Taiwan<SeP>United States<SeP>France<SeP>South Korea<SeP>Singapore<SeP>Türkiye<SeP>United Kingdom<SeP>China<SeP>India<SeP>Vietnam";
  const itemLabel   = "Ataques";
  const itemData    = "2205<SeP>726<SeP>414<SeP>394<SeP>231<SeP>152<SeP>148<SeP>140<SeP>130<SeP>122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "3462<SeP>14061<SeP>4766<SeP>4134<SeP>16276<SeP>396982<SeP>9506<SeP>9829<SeP>47890<SeP>4837";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "1956<SeP>798<SeP>395<SeP>305<SeP>262<SeP>133<SeP>130<SeP>103<SeP>91<SeP>88";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>9506<SeP>4837<SeP>9829<SeP>50580<SeP>3462<SeP>4811<SeP>207566<SeP>4766<SeP>14061";
  const itemLabel   = "Escaneos";
  const itemData    = "280<SeP>130<SeP>87<SeP>79<SeP>56<SeP>55<SeP>51<SeP>47<SeP>30<SeP>30";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "3462<SeP>14061<SeP>4766<SeP>16276<SeP>396982<SeP>47890<SeP>34534<SeP>25820<SeP>399804<SeP>27651";
  const itemLabel   = "Ataques";
  const itemData    = "1901<SeP>768<SeP>365<SeP>258<SeP>114<SeP>82<SeP>78<SeP>71<SeP>70<SeP>69";
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
