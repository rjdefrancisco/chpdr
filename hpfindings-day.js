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
function lastUpdated(varElement) {
  document.getElementById(varElement).innerHTML = "2025-3-13";
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
  const metricData    = "3146";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "1222";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "1924";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "481";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1055";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "869";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "248";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "256";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "613";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "216";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "3146";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "1222";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "1924";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "481";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1055";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "869";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "248";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "256";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "613";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "216";
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
  const incomingData = "3146<SeP>1222<SeP>1924<SeP>481";
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
  const incomingData = "1924<SeP>1055<SeP>869<SeP>248";
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
  const incomingData = "869<SeP>256<SeP>613<SeP>216";
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
  const incomingData = "299<SeP>285<SeP>14";
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
  const incomingData = "14<SeP>3<SeP>11<SeP>3";
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
  const incomingData = "3146<SeP>1222<SeP>1924<SeP>481";
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
  const incomingData = "1924<SeP>1055<SeP>869<SeP>248";
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
  const incomingData = "869<SeP>256<SeP>613<SeP>216";
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
  const incomingData = "299<SeP>285<SeP>14";
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
  const incomingData = "14<SeP>3<SeP>11<SeP>3";
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
  const column1Data  = "IP01 (<span class=blur>58.177.95.4</span>)<SeP>IP02 (<span class=blur>156.232.100.210</span>)<SeP>IP03 (<span class=blur>68.33.32.77</span>)<SeP>IP04 (<span class=blur>143.198.188.61</span>)<SeP>IP05 (<span class=blur>134.209.20.127</span>)<SeP>IP06 (<span class=blur>165.22.78.34</span>)<SeP>IP07 (<span class=blur>165.22.237.166</span>)<SeP>IP08 (<span class=blur>47.180.114.229</span>)<SeP>IP09 (<span class=blur>91.205.219.185</span>)<SeP>IP10 (<span class=blur>154.211.15.218</span>)";
  const column2Data  = "AS9269<SeP>AS135377<SeP>AS7922<SeP>AS14061<SeP>AS14061<SeP>AS14061<SeP>AS14061<SeP>AS5650<SeP>AS48004<SeP>AS138152";
  const column3Data  = "<span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ca\u0022></span>\u00a0Canada<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong";
  const column4Data  = "147<SeP>143<SeP>124<SeP>119<SeP>109<SeP>102<SeP>99<SeP>84<SeP>67<SeP>64";
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
  const column1Data  = "IP01 (<span class=blur>58.177.95.4</span>)<SeP>IP03 (<span class=blur>68.33.32.77</span>)<SeP>IP13 (<span class=blur>118.109.180.83</span>)<SeP>IP14 (<span class=blur>60.18.101.182</span>)<SeP>IP15 (<span class=blur>42.100.34.254</span>)<SeP>IP17 (<span class=blur>182.119.227.234</span>)<SeP>IP16 (<span class=blur>202.66.165.184</span>)<SeP>IP20 (<span class=blur>42.230.204.8</span>)<SeP>IP19 (<span class=blur>193.106.77.157</span>)<SeP>IP18 (<span class=blur>119.167.28.41</span>)";
  const column2Data  = "AS9269<SeP>AS7922<SeP>AS2518<SeP>AS4837<SeP>AS137698<SeP>AS4837<SeP>AS134337<SeP>AS4837<SeP>AS21021<SeP>AS4837";
  const column3Data  = "<span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-in\u0022></span>\u00a0India<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-pl\u0022></span>\u00a0Poland<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "147<SeP>124<SeP>51<SeP>45<SeP>32<SeP>25<SeP>25<SeP>23<SeP>23<SeP>23";
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
  const column1Data  = "IP02 (<span class=blur>156.232.100.210</span>)<SeP>IP04 (<span class=blur>143.198.188.61</span>)<SeP>IP05 (<span class=blur>134.209.20.127</span>)<SeP>IP06 (<span class=blur>165.22.78.34</span>)<SeP>IP07 (<span class=blur>165.22.237.166</span>)<SeP>IP08 (<span class=blur>47.180.114.229</span>)<SeP>IP09 (<span class=blur>91.205.219.185</span>)<SeP>IP10 (<span class=blur>154.211.15.218</span>)<SeP>IP11 (<span class=blur>34.81.214.64</span>)<SeP>IP12 (<span class=blur>101.47.31.92</span>)";
  const column2Data  = "AS135377<SeP>AS14061<SeP>AS14061<SeP>AS14061<SeP>AS14061<SeP>AS5650<SeP>AS48004<SeP>AS138152<SeP>AS396982<SeP>AS150436";
  const column3Data  = "<span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ca\u0022></span>\u00a0Canada<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore";
  const column4Data  = "140<SeP>118<SeP>108<SeP>101<SeP>98<SeP>84<SeP>67<SeP>64<SeP>55<SeP>54";
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
  const column1Data   = "IP01 (<span class=blur>58.177.95.4</span>)<SeP>IP02 (<span class=blur>156.232.100.210</span>)<SeP>IP03 (<span class=blur>68.33.32.77</span>)<SeP>IP04 (<span class=blur>143.198.188.61</span>)<SeP>IP05 (<span class=blur>134.209.20.127</span>)<SeP>IP06 (<span class=blur>165.22.78.34</span>)<SeP>IP07 (<span class=blur>165.22.237.166</span>)<SeP>IP08 (<span class=blur>47.180.114.229</span>)<SeP>IP09 (<span class=blur>91.205.219.185</span>)<SeP>IP10 (<span class=blur>154.211.15.218</span>)";
  const column2Data   = "AS9269<SeP>AS135377<SeP>AS7922<SeP>AS14061<SeP>AS14061<SeP>AS14061<SeP>AS14061<SeP>AS5650<SeP>AS48004<SeP>AS138152";
  const column3Data   = "<span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ca\u0022></span>\u00a0Canada<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "147<SeP>143<SeP>124<SeP>119<SeP>109<SeP>102<SeP>99<SeP>84<SeP>67<SeP>64";
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
  const column1Data   = "IP01 (<span class=blur>58.177.95.4</span>)<SeP>IP03 (<span class=blur>68.33.32.77</span>)<SeP>IP13 (<span class=blur>118.109.180.83</span>)<SeP>IP14 (<span class=blur>60.18.101.182</span>)<SeP>IP15 (<span class=blur>42.100.34.254</span>)<SeP>IP17 (<span class=blur>182.119.227.234</span>)<SeP>IP16 (<span class=blur>202.66.165.184</span>)<SeP>IP20 (<span class=blur>42.230.204.8</span>)<SeP>IP19 (<span class=blur>193.106.77.157</span>)<SeP>IP18 (<span class=blur>119.167.28.41</span>)";
  const column2Data   = "AS9269<SeP>AS7922<SeP>AS2518<SeP>AS4837<SeP>AS137698<SeP>AS4837<SeP>AS134337<SeP>AS4837<SeP>AS21021<SeP>AS4837";
  const column3Data   = "<span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-in\u0022></span>\u00a0India<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-pl\u0022></span>\u00a0Poland<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "147<SeP>124<SeP>51<SeP>45<SeP>32<SeP>25<SeP>25<SeP>23<SeP>23<SeP>23";
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
  const column1Data   = "IP02 (<span class=blur>156.232.100.210</span>)<SeP>IP04 (<span class=blur>143.198.188.61</span>)<SeP>IP05 (<span class=blur>134.209.20.127</span>)<SeP>IP06 (<span class=blur>165.22.78.34</span>)<SeP>IP07 (<span class=blur>165.22.237.166</span>)<SeP>IP08 (<span class=blur>47.180.114.229</span>)<SeP>IP09 (<span class=blur>91.205.219.185</span>)<SeP>IP10 (<span class=blur>154.211.15.218</span>)<SeP>IP11 (<span class=blur>34.81.214.64</span>)<SeP>IP12 (<span class=blur>101.47.31.92</span>)";
  const column2Data   = "AS135377<SeP>AS14061<SeP>AS14061<SeP>AS14061<SeP>AS14061<SeP>AS5650<SeP>AS48004<SeP>AS138152<SeP>AS396982<SeP>AS150436";
  const column3Data   = "<span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-gb\u0022></span>\u00a0United Kingdom<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ca\u0022></span>\u00a0Canada<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "140<SeP>118<SeP>108<SeP>101<SeP>98<SeP>84<SeP>67<SeP>64<SeP>55<SeP>54";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>User-Agent: Go-http-client/1.1 Connection: close<SeP>root  <SeP>admin admin<SeP>root !QAZ@WSX<SeP>ts2 1<SeP>testuser 1<SeP>system system@123";
  const column3Data   = "193<SeP>189<SeP>33<SeP>30<SeP>11<SeP>11<SeP>10<SeP>9<SeP>8<SeP>8";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73<SeP>ba57e6fe483b23f5251bffb55a51e3ac63f44acd3967e8b199a0b5ad473a22c0<SeP>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>a9e619dd276f0eb049a277db38b284da5aef9f393cab2dacf5de46e9e677183c<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f";
  const column2Data  = "206<SeP>66<SeP>13<SeP>2<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>download<SeP>upload<SeP>upload<SeP>upload<SeP>download<SeP>upload";
  const column4Data  = "NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>NA";
  const listLocale   = "en-US";

  column3Data = column3Data.replace(/redir/g, "redirection");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsEnglish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Malware Distribution Site";
  const column2Label = "Count";
  const column1Data  = "http://141.98.10.122<SeP>tftp://156.253.227.112<SeP>http://45.134.39.193";
  const column2Data  = "2<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "2178<SeP>968";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>User-Agent: Go-http-client/1.1 Connection: close<SeP>root  <SeP>admin admin<SeP>root !QAZ@WSX<SeP>ts2 1<SeP>testuser 1<SeP>system system@123";
  const column3Data   = "193<SeP>189<SeP>33<SeP>30<SeP>11<SeP>11<SeP>10<SeP>9<SeP>8<SeP>8";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>ea40ecec0b30982fbb1662e67f97f0e9d6f43d2d587f2f588525fae683abea73<SeP>ba57e6fe483b23f5251bffb55a51e3ac63f44acd3967e8b199a0b5ad473a22c0<SeP>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>a9e619dd276f0eb049a277db38b284da5aef9f393cab2dacf5de46e9e677183c<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f";
  const column2Data  = "206<SeP>66<SeP>13<SeP>2<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>download<SeP>upload<SeP>upload<SeP>upload<SeP>download<SeP>upload";
  let   column4Data  = "NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>NA";
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
  const column1Data  = "http://141.98.10.122<SeP>tftp://156.253.227.112<SeP>http://45.134.39.193";
  const column2Data  = "2<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "2178<SeP>968";
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
  let mapa = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-attacks.geojson" + "?v=" + String(Date.now()); // Map of origin of attacks
  let maps = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-scans.geojson" + "?v=" + String(Date.now());   // Map of origin of scans
  let mapt = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-traffic.geojson" + "?v=" + String(Date.now()); // Map of origin of traffic
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
        "name": "traffic between 2025-03-12 and 2025-03-12"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          465,50
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
        "name": "scans between 2025-03-12 and 2025-03-12"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          394,43,
          465,50
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
        "name": "attacks between 2025-03-12 and 2025-03-12"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          162,19,
          465,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#FF0000" // Red
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
  });

  // setTimeout(function() {
  //   map.resize();
  // }, 500); // This timeout should the a bit longer than the  timeout of the page loader
}

function loadMapSpanish() {
  // Process URL parameters
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let mapa = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-attacks.geojson" + "?v=" + String(Date.now()); // Map of origin of attacks
  let maps = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-scans.geojson" + "?v=" + String(Date.now());   // Map of origin of scans
  let mapt = "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-day-traffic.geojson" + "?v=" + String(Date.now()); // Map of origin of traffic
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
        "name": "tráfico entre 2025-03-12 y 2025-03-12"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          465,50
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
        "name": "escaneos entre 2025-03-12 y 2025-03-12"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          394,43,
          465,50
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
        "name": "ataques entre 2025-03-12 y 2025-03-12"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          162,19,
          465,50
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
  const labelsData       = "2025-03-12 00:00:00<SeP>2025-03-12 00:03:36<SeP>2025-03-12 00:07:12<SeP>2025-03-12 00:10:48<SeP>2025-03-12 00:14:24<SeP>2025-03-12 00:18:00<SeP>2025-03-12 00:21:36<SeP>2025-03-12 00:25:12<SeP>2025-03-12 00:28:48<SeP>2025-03-12 00:32:24<SeP>2025-03-12 00:36:00<SeP>2025-03-12 00:39:36<SeP>2025-03-12 00:43:12<SeP>2025-03-12 00:46:48<SeP>2025-03-12 00:50:24<SeP>2025-03-12 00:54:00<SeP>2025-03-12 00:57:36<SeP>2025-03-12 01:01:12<SeP>2025-03-12 01:04:48<SeP>2025-03-12 01:08:24<SeP>2025-03-12 01:12:00<SeP>2025-03-12 01:15:36<SeP>2025-03-12 01:19:12<SeP>2025-03-12 01:22:48<SeP>2025-03-12 01:26:24<SeP>2025-03-12 01:30:00<SeP>2025-03-12 01:33:36<SeP>2025-03-12 01:37:12<SeP>2025-03-12 01:40:48<SeP>2025-03-12 01:44:24<SeP>2025-03-12 01:48:00<SeP>2025-03-12 01:51:36<SeP>2025-03-12 01:55:12<SeP>2025-03-12 01:58:48<SeP>2025-03-12 02:02:24<SeP>2025-03-12 02:06:00<SeP>2025-03-12 02:09:36<SeP>2025-03-12 02:13:12<SeP>2025-03-12 02:16:48<SeP>2025-03-12 02:20:24<SeP>2025-03-12 02:24:00<SeP>2025-03-12 02:27:36<SeP>2025-03-12 02:31:12<SeP>2025-03-12 02:34:48<SeP>2025-03-12 02:38:24<SeP>2025-03-12 02:42:00<SeP>2025-03-12 02:45:36<SeP>2025-03-12 02:49:12<SeP>2025-03-12 02:52:48<SeP>2025-03-12 02:56:24<SeP>2025-03-12 03:00:00<SeP>2025-03-12 03:03:36<SeP>2025-03-12 03:07:12<SeP>2025-03-12 03:10:48<SeP>2025-03-12 03:14:24<SeP>2025-03-12 03:18:00<SeP>2025-03-12 03:21:36<SeP>2025-03-12 03:25:12<SeP>2025-03-12 03:28:48<SeP>2025-03-12 03:32:24<SeP>2025-03-12 03:36:00<SeP>2025-03-12 03:39:36<SeP>2025-03-12 03:43:12<SeP>2025-03-12 03:46:48<SeP>2025-03-12 03:50:24<SeP>2025-03-12 03:54:00<SeP>2025-03-12 03:57:36<SeP>2025-03-12 04:01:12<SeP>2025-03-12 04:04:48<SeP>2025-03-12 04:08:24<SeP>2025-03-12 04:12:00<SeP>2025-03-12 04:15:36<SeP>2025-03-12 04:19:12<SeP>2025-03-12 04:22:48<SeP>2025-03-12 04:26:24<SeP>2025-03-12 04:30:00<SeP>2025-03-12 04:33:36<SeP>2025-03-12 04:37:12<SeP>2025-03-12 04:40:48<SeP>2025-03-12 04:44:24<SeP>2025-03-12 04:48:00<SeP>2025-03-12 04:51:36<SeP>2025-03-12 04:55:12<SeP>2025-03-12 04:58:48<SeP>2025-03-12 05:02:24<SeP>2025-03-12 05:06:00<SeP>2025-03-12 05:09:36<SeP>2025-03-12 05:13:12<SeP>2025-03-12 05:16:48<SeP>2025-03-12 05:20:24<SeP>2025-03-12 05:24:00<SeP>2025-03-12 05:27:36<SeP>2025-03-12 05:31:12<SeP>2025-03-12 05:34:48<SeP>2025-03-12 05:38:24<SeP>2025-03-12 05:42:00<SeP>2025-03-12 05:45:36<SeP>2025-03-12 05:49:12<SeP>2025-03-12 05:52:48<SeP>2025-03-12 05:56:24<SeP>2025-03-12 06:00:00<SeP>2025-03-12 06:03:36<SeP>2025-03-12 06:07:12<SeP>2025-03-12 06:10:48<SeP>2025-03-12 06:14:24<SeP>2025-03-12 06:18:00<SeP>2025-03-12 06:21:36<SeP>2025-03-12 06:25:12<SeP>2025-03-12 06:28:48<SeP>2025-03-12 06:32:24<SeP>2025-03-12 06:36:00<SeP>2025-03-12 06:39:36<SeP>2025-03-12 06:43:12<SeP>2025-03-12 06:46:48<SeP>2025-03-12 06:50:24<SeP>2025-03-12 06:54:00<SeP>2025-03-12 06:57:36<SeP>2025-03-12 07:01:12<SeP>2025-03-12 07:04:48<SeP>2025-03-12 07:08:24<SeP>2025-03-12 07:12:00<SeP>2025-03-12 07:15:36<SeP>2025-03-12 07:19:12<SeP>2025-03-12 07:22:48<SeP>2025-03-12 07:26:24<SeP>2025-03-12 07:30:00<SeP>2025-03-12 07:33:36<SeP>2025-03-12 07:37:12<SeP>2025-03-12 07:40:48<SeP>2025-03-12 07:44:24<SeP>2025-03-12 07:48:00<SeP>2025-03-12 07:51:36<SeP>2025-03-12 07:55:12<SeP>2025-03-12 07:58:48<SeP>2025-03-12 08:02:24<SeP>2025-03-12 08:06:00<SeP>2025-03-12 08:09:36<SeP>2025-03-12 08:13:12<SeP>2025-03-12 08:16:48<SeP>2025-03-12 08:20:24<SeP>2025-03-12 08:24:00<SeP>2025-03-12 08:27:36<SeP>2025-03-12 08:31:12<SeP>2025-03-12 08:34:48<SeP>2025-03-12 08:38:24<SeP>2025-03-12 08:42:00<SeP>2025-03-12 08:45:36<SeP>2025-03-12 08:49:12<SeP>2025-03-12 08:52:48<SeP>2025-03-12 08:56:24<SeP>2025-03-12 09:00:00<SeP>2025-03-12 09:03:36<SeP>2025-03-12 09:07:12<SeP>2025-03-12 09:10:48<SeP>2025-03-12 09:14:24<SeP>2025-03-12 09:18:00<SeP>2025-03-12 09:21:36<SeP>2025-03-12 09:25:12<SeP>2025-03-12 09:28:48<SeP>2025-03-12 09:32:24<SeP>2025-03-12 09:36:00<SeP>2025-03-12 09:39:36<SeP>2025-03-12 09:43:12<SeP>2025-03-12 09:46:48<SeP>2025-03-12 09:50:24<SeP>2025-03-12 09:54:00<SeP>2025-03-12 09:57:36<SeP>2025-03-12 10:01:12<SeP>2025-03-12 10:04:48<SeP>2025-03-12 10:08:24<SeP>2025-03-12 10:12:00<SeP>2025-03-12 10:15:36<SeP>2025-03-12 10:19:12<SeP>2025-03-12 10:22:48<SeP>2025-03-12 10:26:24<SeP>2025-03-12 10:30:00<SeP>2025-03-12 10:33:36<SeP>2025-03-12 10:37:12<SeP>2025-03-12 10:40:48<SeP>2025-03-12 10:44:24<SeP>2025-03-12 10:48:00<SeP>2025-03-12 10:51:36<SeP>2025-03-12 10:55:12<SeP>2025-03-12 10:58:48<SeP>2025-03-12 11:02:24<SeP>2025-03-12 11:06:00<SeP>2025-03-12 11:09:36<SeP>2025-03-12 11:13:12<SeP>2025-03-12 11:16:48<SeP>2025-03-12 11:20:24<SeP>2025-03-12 11:24:00<SeP>2025-03-12 11:27:36<SeP>2025-03-12 11:31:12<SeP>2025-03-12 11:34:48<SeP>2025-03-12 11:38:24<SeP>2025-03-12 11:42:00<SeP>2025-03-12 11:45:36<SeP>2025-03-12 11:49:12<SeP>2025-03-12 11:52:48<SeP>2025-03-12 11:56:24<SeP>2025-03-12 12:00:00<SeP>2025-03-12 12:03:36<SeP>2025-03-12 12:07:12<SeP>2025-03-12 12:10:48<SeP>2025-03-12 12:14:24<SeP>2025-03-12 12:18:00<SeP>2025-03-12 12:21:36<SeP>2025-03-12 12:25:12<SeP>2025-03-12 12:28:48<SeP>2025-03-12 12:32:24<SeP>2025-03-12 12:36:00<SeP>2025-03-12 12:39:36<SeP>2025-03-12 12:43:12<SeP>2025-03-12 12:46:48<SeP>2025-03-12 12:50:24<SeP>2025-03-12 12:54:00<SeP>2025-03-12 12:57:36<SeP>2025-03-12 13:01:12<SeP>2025-03-12 13:04:48<SeP>2025-03-12 13:08:24<SeP>2025-03-12 13:12:00<SeP>2025-03-12 13:15:36<SeP>2025-03-12 13:19:12<SeP>2025-03-12 13:22:48<SeP>2025-03-12 13:26:24<SeP>2025-03-12 13:30:00<SeP>2025-03-12 13:33:36<SeP>2025-03-12 13:37:12<SeP>2025-03-12 13:40:48<SeP>2025-03-12 13:44:24<SeP>2025-03-12 13:48:00<SeP>2025-03-12 13:51:36<SeP>2025-03-12 13:55:12<SeP>2025-03-12 13:58:48<SeP>2025-03-12 14:02:24<SeP>2025-03-12 14:06:00<SeP>2025-03-12 14:09:36<SeP>2025-03-12 14:13:12<SeP>2025-03-12 14:16:48<SeP>2025-03-12 14:20:24<SeP>2025-03-12 14:24:00<SeP>2025-03-12 14:27:36<SeP>2025-03-12 14:31:12<SeP>2025-03-12 14:34:48<SeP>2025-03-12 14:38:24<SeP>2025-03-12 14:42:00<SeP>2025-03-12 14:45:36<SeP>2025-03-12 14:49:12<SeP>2025-03-12 14:52:48<SeP>2025-03-12 14:56:24<SeP>2025-03-12 15:00:00<SeP>2025-03-12 15:03:36<SeP>2025-03-12 15:07:12<SeP>2025-03-12 15:10:48<SeP>2025-03-12 15:14:24<SeP>2025-03-12 15:18:00<SeP>2025-03-12 15:21:36<SeP>2025-03-12 15:25:12<SeP>2025-03-12 15:28:48<SeP>2025-03-12 15:32:24<SeP>2025-03-12 15:36:00<SeP>2025-03-12 15:39:36<SeP>2025-03-12 15:43:12<SeP>2025-03-12 15:46:48<SeP>2025-03-12 15:50:24<SeP>2025-03-12 15:54:00<SeP>2025-03-12 15:57:36<SeP>2025-03-12 16:01:12<SeP>2025-03-12 16:04:48<SeP>2025-03-12 16:08:24<SeP>2025-03-12 16:12:00<SeP>2025-03-12 16:15:36<SeP>2025-03-12 16:19:12<SeP>2025-03-12 16:22:48<SeP>2025-03-12 16:26:24<SeP>2025-03-12 16:30:00<SeP>2025-03-12 16:33:36<SeP>2025-03-12 16:37:12<SeP>2025-03-12 16:40:48<SeP>2025-03-12 16:44:24<SeP>2025-03-12 16:48:00<SeP>2025-03-12 16:51:36<SeP>2025-03-12 16:55:12<SeP>2025-03-12 16:58:48<SeP>2025-03-12 17:02:24<SeP>2025-03-12 17:06:00<SeP>2025-03-12 17:09:36<SeP>2025-03-12 17:13:12<SeP>2025-03-12 17:16:48<SeP>2025-03-12 17:20:24<SeP>2025-03-12 17:24:00<SeP>2025-03-12 17:27:36<SeP>2025-03-12 17:31:12<SeP>2025-03-12 17:34:48<SeP>2025-03-12 17:38:24<SeP>2025-03-12 17:42:00<SeP>2025-03-12 17:45:36<SeP>2025-03-12 17:49:12<SeP>2025-03-12 17:52:48<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:00:00<SeP>2025-03-12 18:03:36<SeP>2025-03-12 18:07:12<SeP>2025-03-12 18:10:48<SeP>2025-03-12 18:14:24<SeP>2025-03-12 18:18:00<SeP>2025-03-12 18:21:36<SeP>2025-03-12 18:25:12<SeP>2025-03-12 18:28:48<SeP>2025-03-12 18:32:24<SeP>2025-03-12 18:36:00<SeP>2025-03-12 18:39:36<SeP>2025-03-12 18:43:12<SeP>2025-03-12 18:46:48<SeP>2025-03-12 18:50:24<SeP>2025-03-12 18:54:00<SeP>2025-03-12 18:57:36<SeP>2025-03-12 19:01:12<SeP>2025-03-12 19:04:48<SeP>2025-03-12 19:08:24<SeP>2025-03-12 19:12:00<SeP>2025-03-12 19:15:36<SeP>2025-03-12 19:19:12<SeP>2025-03-12 19:22:48<SeP>2025-03-12 19:26:24<SeP>2025-03-12 19:30:00<SeP>2025-03-12 19:33:36<SeP>2025-03-12 19:37:12<SeP>2025-03-12 19:40:48<SeP>2025-03-12 19:44:24<SeP>2025-03-12 19:48:00<SeP>2025-03-12 19:51:36<SeP>2025-03-12 19:55:12<SeP>2025-03-12 19:58:48<SeP>2025-03-12 20:02:24<SeP>2025-03-12 20:06:00<SeP>2025-03-12 20:09:36<SeP>2025-03-12 20:13:12<SeP>2025-03-12 20:16:48<SeP>2025-03-12 20:20:24<SeP>2025-03-12 20:24:00<SeP>2025-03-12 20:27:36<SeP>2025-03-12 20:31:12<SeP>2025-03-12 20:34:48<SeP>2025-03-12 20:38:24<SeP>2025-03-12 20:42:00<SeP>2025-03-12 20:45:36<SeP>2025-03-12 20:49:12<SeP>2025-03-12 20:52:48<SeP>2025-03-12 20:56:24<SeP>2025-03-12 21:00:00<SeP>2025-03-12 21:03:36<SeP>2025-03-12 21:07:12<SeP>2025-03-12 21:10:48<SeP>2025-03-12 21:14:24<SeP>2025-03-12 21:18:00<SeP>2025-03-12 21:21:36<SeP>2025-03-12 21:25:12<SeP>2025-03-12 21:28:48<SeP>2025-03-12 21:32:24<SeP>2025-03-12 21:36:00<SeP>2025-03-12 21:39:36<SeP>2025-03-12 21:43:12<SeP>2025-03-12 21:46:48<SeP>2025-03-12 21:50:24<SeP>2025-03-12 21:54:00<SeP>2025-03-12 21:57:36<SeP>2025-03-12 22:01:12<SeP>2025-03-12 22:04:48<SeP>2025-03-12 22:08:24<SeP>2025-03-12 22:12:00<SeP>2025-03-12 22:15:36<SeP>2025-03-12 22:19:12<SeP>2025-03-12 22:22:48<SeP>2025-03-12 22:26:24<SeP>2025-03-12 22:30:00<SeP>2025-03-12 22:33:36<SeP>2025-03-12 22:37:12<SeP>2025-03-12 22:40:48<SeP>2025-03-12 22:44:24<SeP>2025-03-12 22:48:00<SeP>2025-03-12 22:51:36<SeP>2025-03-12 22:55:12<SeP>2025-03-12 22:58:48<SeP>2025-03-12 23:02:24<SeP>2025-03-12 23:06:00<SeP>2025-03-12 23:09:36<SeP>2025-03-12 23:13:12<SeP>2025-03-12 23:16:48<SeP>2025-03-12 23:20:24<SeP>2025-03-12 23:24:00<SeP>2025-03-12 23:27:36<SeP>2025-03-12 23:31:12<SeP>2025-03-12 23:34:48<SeP>2025-03-12 23:38:24<SeP>2025-03-12 23:42:00<SeP>2025-03-12 23:45:36<SeP>2025-03-12 23:49:12<SeP>2025-03-12 23:52:48<SeP>2025-03-12 23:56:24";
  const item1Label       = "Scans";
  const item1Data        = "8<SeP>15<SeP>20<SeP>15<SeP>2<SeP>2<SeP>5<SeP>4<SeP>1<SeP>1<SeP>0<SeP>7<SeP>2<SeP>0<SeP>2<SeP>1<SeP>2<SeP>4<SeP>1<SeP>3<SeP>0<SeP>2<SeP>3<SeP>1<SeP>1<SeP>1<SeP>2<SeP>1<SeP>0<SeP>1<SeP>1<SeP>0<SeP>4<SeP>1<SeP>1<SeP>2<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>1<SeP>0<SeP>4<SeP>2<SeP>1<SeP>4<SeP>0<SeP>0<SeP>2<SeP>3<SeP>1<SeP>4<SeP>2<SeP>2<SeP>10<SeP>0<SeP>4<SeP>3<SeP>3<SeP>1<SeP>10<SeP>9<SeP>4<SeP>8<SeP>13<SeP>1<SeP>1<SeP>6<SeP>0<SeP>1<SeP>2<SeP>2<SeP>4<SeP>2<SeP>1<SeP>0<SeP>3<SeP>4<SeP>3<SeP>0<SeP>5<SeP>2<SeP>1<SeP>1<SeP>6<SeP>1<SeP>0<SeP>1<SeP>3<SeP>5<SeP>1<SeP>2<SeP>0<SeP>2<SeP>1<SeP>2<SeP>0<SeP>2<SeP>2<SeP>0<SeP>11<SeP>3<SeP>1<SeP>1<SeP>3<SeP>4<SeP>4<SeP>2<SeP>1<SeP>0<SeP>0<SeP>6<SeP>4<SeP>1<SeP>1<SeP>19<SeP>10<SeP>1<SeP>2<SeP>1<SeP>0<SeP>3<SeP>1<SeP>1<SeP>0<SeP>2<SeP>2<SeP>2<SeP>1<SeP>0<SeP>3<SeP>1<SeP>2<SeP>2<SeP>1<SeP>2<SeP>1<SeP>0<SeP>2<SeP>3<SeP>0<SeP>14<SeP>1<SeP>1<SeP>3<SeP>1<SeP>1<SeP>5<SeP>1<SeP>8<SeP>17<SeP>3<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>3<SeP>0<SeP>2<SeP>0<SeP>2<SeP>3<SeP>5<SeP>2<SeP>1<SeP>2<SeP>0<SeP>1<SeP>0<SeP>1<SeP>1<SeP>2<SeP>2<SeP>12<SeP>0<SeP>1<SeP>0<SeP>3<SeP>1<SeP>0<SeP>2<SeP>4<SeP>5<SeP>6<SeP>1<SeP>7<SeP>1<SeP>9<SeP>4<SeP>7<SeP>12<SeP>5<SeP>3<SeP>10<SeP>4<SeP>3<SeP>1<SeP>14<SeP>2<SeP>0<SeP>2<SeP>2<SeP>2<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>2<SeP>0<SeP>0<SeP>1<SeP>1<SeP>0<SeP>0<SeP>1<SeP>0<SeP>1<SeP>5<SeP>0<SeP>2<SeP>3<SeP>2<SeP>2<SeP>3<SeP>5<SeP>8<SeP>1<SeP>1<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>0<SeP>2<SeP>3<SeP>5<SeP>0<SeP>1<SeP>1<SeP>3<SeP>14<SeP>12<SeP>1<SeP>1<SeP>2<SeP>9<SeP>2<SeP>0<SeP>7<SeP>13<SeP>19<SeP>2<SeP>0<SeP>2<SeP>2<SeP>0<SeP>0<SeP>0<SeP>5<SeP>2<SeP>1<SeP>1<SeP>2<SeP>1<SeP>4<SeP>1<SeP>2<SeP>2<SeP>1<SeP>12<SeP>35<SeP>6<SeP>1<SeP>1<SeP>4<SeP>5<SeP>3<SeP>3<SeP>2<SeP>6<SeP>4<SeP>30<SeP>17<SeP>3<SeP>3<SeP>1<SeP>10<SeP>1<SeP>1<SeP>1<SeP>3<SeP>0<SeP>1<SeP>0<SeP>9<SeP>2<SeP>1<SeP>2<SeP>4<SeP>3<SeP>1<SeP>1<SeP>3<SeP>1<SeP>2<SeP>7<SeP>1<SeP>1<SeP>1<SeP>2<SeP>5<SeP>17<SeP>8<SeP>1<SeP>4<SeP>0<SeP>0<SeP>1<SeP>4<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>1<SeP>4<SeP>3<SeP>2<SeP>1<SeP>3<SeP>2<SeP>7<SeP>5<SeP>18<SeP>5<SeP>7<SeP>2<SeP>0<SeP>1<SeP>1<SeP>3<SeP>8<SeP>6<SeP>0<SeP>3<SeP>5<SeP>0<SeP>10<SeP>20<SeP>6<SeP>2<SeP>0<SeP>5<SeP>5<SeP>0<SeP>1<SeP>6<SeP>3<SeP>2<SeP>4<SeP>9<SeP>1<SeP>3<SeP>0<SeP>1<SeP>4<SeP>4<SeP>9<SeP>2<SeP>0<SeP>6<SeP>3<SeP>0<SeP>1<SeP>3<SeP>13";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "5<SeP>2<SeP>0<SeP>1<SeP>2<SeP>2<SeP>3<SeP>1<SeP>1<SeP>1<SeP>3<SeP>3<SeP>1<SeP>4<SeP>2<SeP>2<SeP>3<SeP>1<SeP>1<SeP>0<SeP>9<SeP>12<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>4<SeP>6<SeP>12<SeP>17<SeP>17<SeP>14<SeP>16<SeP>18<SeP>11<SeP>13<SeP>12<SeP>3<SeP>4<SeP>4<SeP>5<SeP>2<SeP>4<SeP>1<SeP>0<SeP>0<SeP>3<SeP>4<SeP>4<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>4<SeP>3<SeP>1<SeP>0<SeP>0<SeP>0<SeP>2<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>1<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>0<SeP>1<SeP>4<SeP>2<SeP>1<SeP>0<SeP>2<SeP>0<SeP>0<SeP>2<SeP>0<SeP>0<SeP>0<SeP>2<SeP>0<SeP>5<SeP>16<SeP>20<SeP>9<SeP>10<SeP>7<SeP>8<SeP>9<SeP>0<SeP>0<SeP>3<SeP>0<SeP>2<SeP>3<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>0<SeP>0<SeP>2<SeP>0<SeP>1<SeP>1<SeP>3<SeP>0<SeP>0<SeP>0<SeP>0<SeP>3<SeP>14<SeP>0<SeP>1<SeP>0<SeP>19<SeP>2<SeP>2<SeP>2<SeP>8<SeP>5<SeP>10<SeP>10<SeP>9<SeP>13<SeP>11<SeP>9<SeP>10<SeP>9<SeP>6<SeP>11<SeP>7<SeP>2<SeP>4<SeP>5<SeP>6<SeP>1<SeP>0<SeP>0<SeP>4<SeP>0<SeP>3<SeP>0<SeP>1<SeP>2<SeP>2<SeP>2<SeP>7<SeP>7<SeP>2<SeP>2<SeP>1<SeP>3<SeP>1<SeP>8<SeP>8<SeP>6<SeP>5<SeP>2<SeP>3<SeP>4<SeP>3<SeP>9<SeP>17<SeP>2<SeP>7<SeP>1<SeP>9<SeP>5<SeP>7<SeP>4<SeP>8<SeP>7<SeP>6<SeP>9<SeP>9<SeP>10<SeP>3<SeP>6<SeP>31<SeP>8<SeP>3<SeP>7<SeP>6<SeP>6<SeP>3<SeP>3<SeP>3<SeP>3<SeP>3<SeP>5<SeP>3<SeP>4<SeP>4<SeP>1<SeP>5<SeP>1<SeP>4<SeP>3<SeP>3<SeP>4<SeP>3<SeP>3<SeP>15<SeP>8<SeP>4<SeP>2<SeP>4<SeP>4<SeP>6<SeP>4<SeP>6<SeP>3<SeP>5<SeP>4<SeP>6<SeP>3<SeP>6<SeP>5<SeP>4<SeP>4<SeP>3<SeP>6<SeP>7<SeP>5<SeP>4<SeP>5<SeP>3<SeP>7<SeP>4<SeP>7<SeP>2<SeP>3<SeP>4<SeP>3<SeP>4<SeP>3<SeP>5<SeP>4<SeP>10<SeP>13<SeP>17<SeP>9<SeP>14<SeP>16<SeP>14<SeP>13<SeP>18<SeP>14<SeP>12<SeP>4<SeP>3<SeP>147<SeP>1<SeP>5<SeP>1<SeP>5<SeP>2<SeP>4<SeP>4<SeP>5<SeP>3<SeP>10<SeP>16<SeP>2<SeP>6<SeP>3<SeP>4<SeP>4<SeP>5<SeP>3<SeP>4<SeP>5<SeP>4<SeP>3<SeP>4<SeP>3<SeP>1<SeP>6<SeP>1<SeP>6<SeP>1<SeP>4<SeP>2<SeP>4<SeP>2<SeP>6<SeP>7<SeP>4<SeP>4<SeP>5<SeP>1<SeP>5<SeP>2<SeP>3<SeP>8<SeP>10<SeP>7<SeP>8<SeP>9<SeP>10<SeP>13<SeP>3<SeP>9<SeP>7<SeP>10<SeP>6<SeP>10<SeP>6<SeP>8<SeP>3<SeP>3<SeP>4<SeP>1<SeP>4<SeP>1<SeP>5<SeP>1<SeP>9<SeP>6<SeP>3<SeP>3<SeP>4<SeP>3<SeP>4<SeP>4<SeP>4<SeP>5<SeP>2<SeP>7<SeP>9<SeP>10<SeP>4<SeP>5<SeP>3<SeP>3<SeP>4<SeP>2<SeP>5<SeP>12<SeP>3<SeP>7<SeP>5<SeP>4<SeP>22<SeP>18<SeP>7<SeP>4<SeP>3<SeP>3<SeP>3<SeP>5<SeP>2<SeP>6<SeP>9<SeP>7<SeP>4<SeP>3<SeP>5<SeP>6<SeP>5<SeP>2<SeP>5<SeP>3<SeP>3";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-03-12 00:00:00<SeP>2025-03-12 00:03:36<SeP>2025-03-12 00:07:12<SeP>2025-03-12 00:10:48<SeP>2025-03-12 00:14:24<SeP>2025-03-12 00:18:00<SeP>2025-03-12 00:21:36<SeP>2025-03-12 00:25:12<SeP>2025-03-12 00:28:48<SeP>2025-03-12 00:32:24<SeP>2025-03-12 00:36:00<SeP>2025-03-12 00:39:36<SeP>2025-03-12 00:43:12<SeP>2025-03-12 00:46:48<SeP>2025-03-12 00:50:24<SeP>2025-03-12 00:54:00<SeP>2025-03-12 00:57:36<SeP>2025-03-12 01:01:12<SeP>2025-03-12 01:04:48<SeP>2025-03-12 01:08:24<SeP>2025-03-12 01:12:00<SeP>2025-03-12 01:15:36<SeP>2025-03-12 01:19:12<SeP>2025-03-12 01:22:48<SeP>2025-03-12 01:26:24<SeP>2025-03-12 01:30:00<SeP>2025-03-12 01:33:36<SeP>2025-03-12 01:37:12<SeP>2025-03-12 01:40:48<SeP>2025-03-12 01:44:24<SeP>2025-03-12 01:48:00<SeP>2025-03-12 01:51:36<SeP>2025-03-12 01:55:12<SeP>2025-03-12 01:58:48<SeP>2025-03-12 02:02:24<SeP>2025-03-12 02:06:00<SeP>2025-03-12 02:09:36<SeP>2025-03-12 02:13:12<SeP>2025-03-12 02:16:48<SeP>2025-03-12 02:20:24<SeP>2025-03-12 02:24:00<SeP>2025-03-12 02:27:36<SeP>2025-03-12 02:31:12<SeP>2025-03-12 02:34:48<SeP>2025-03-12 02:38:24<SeP>2025-03-12 02:42:00<SeP>2025-03-12 02:45:36<SeP>2025-03-12 02:49:12<SeP>2025-03-12 02:52:48<SeP>2025-03-12 02:56:24<SeP>2025-03-12 03:00:00<SeP>2025-03-12 03:03:36<SeP>2025-03-12 03:07:12<SeP>2025-03-12 03:10:48<SeP>2025-03-12 03:14:24<SeP>2025-03-12 03:18:00<SeP>2025-03-12 03:21:36<SeP>2025-03-12 03:25:12<SeP>2025-03-12 03:28:48<SeP>2025-03-12 03:32:24<SeP>2025-03-12 03:36:00<SeP>2025-03-12 03:39:36<SeP>2025-03-12 03:43:12<SeP>2025-03-12 03:46:48<SeP>2025-03-12 03:50:24<SeP>2025-03-12 03:54:00<SeP>2025-03-12 03:57:36<SeP>2025-03-12 04:01:12<SeP>2025-03-12 04:04:48<SeP>2025-03-12 04:08:24<SeP>2025-03-12 04:12:00<SeP>2025-03-12 04:15:36<SeP>2025-03-12 04:19:12<SeP>2025-03-12 04:22:48<SeP>2025-03-12 04:26:24<SeP>2025-03-12 04:30:00<SeP>2025-03-12 04:33:36<SeP>2025-03-12 04:37:12<SeP>2025-03-12 04:40:48<SeP>2025-03-12 04:44:24<SeP>2025-03-12 04:48:00<SeP>2025-03-12 04:51:36<SeP>2025-03-12 04:55:12<SeP>2025-03-12 04:58:48<SeP>2025-03-12 05:02:24<SeP>2025-03-12 05:06:00<SeP>2025-03-12 05:09:36<SeP>2025-03-12 05:13:12<SeP>2025-03-12 05:16:48<SeP>2025-03-12 05:20:24<SeP>2025-03-12 05:24:00<SeP>2025-03-12 05:27:36<SeP>2025-03-12 05:31:12<SeP>2025-03-12 05:34:48<SeP>2025-03-12 05:38:24<SeP>2025-03-12 05:42:00<SeP>2025-03-12 05:45:36<SeP>2025-03-12 05:49:12<SeP>2025-03-12 05:52:48<SeP>2025-03-12 05:56:24<SeP>2025-03-12 06:00:00<SeP>2025-03-12 06:03:36<SeP>2025-03-12 06:07:12<SeP>2025-03-12 06:10:48<SeP>2025-03-12 06:14:24<SeP>2025-03-12 06:18:00<SeP>2025-03-12 06:21:36<SeP>2025-03-12 06:25:12<SeP>2025-03-12 06:28:48<SeP>2025-03-12 06:32:24<SeP>2025-03-12 06:36:00<SeP>2025-03-12 06:39:36<SeP>2025-03-12 06:43:12<SeP>2025-03-12 06:46:48<SeP>2025-03-12 06:50:24<SeP>2025-03-12 06:54:00<SeP>2025-03-12 06:57:36<SeP>2025-03-12 07:01:12<SeP>2025-03-12 07:04:48<SeP>2025-03-12 07:08:24<SeP>2025-03-12 07:12:00<SeP>2025-03-12 07:15:36<SeP>2025-03-12 07:19:12<SeP>2025-03-12 07:22:48<SeP>2025-03-12 07:26:24<SeP>2025-03-12 07:30:00<SeP>2025-03-12 07:33:36<SeP>2025-03-12 07:37:12<SeP>2025-03-12 07:40:48<SeP>2025-03-12 07:44:24<SeP>2025-03-12 07:48:00<SeP>2025-03-12 07:51:36<SeP>2025-03-12 07:55:12<SeP>2025-03-12 07:58:48<SeP>2025-03-12 08:02:24<SeP>2025-03-12 08:06:00<SeP>2025-03-12 08:09:36<SeP>2025-03-12 08:13:12<SeP>2025-03-12 08:16:48<SeP>2025-03-12 08:20:24<SeP>2025-03-12 08:24:00<SeP>2025-03-12 08:27:36<SeP>2025-03-12 08:31:12<SeP>2025-03-12 08:34:48<SeP>2025-03-12 08:38:24<SeP>2025-03-12 08:42:00<SeP>2025-03-12 08:45:36<SeP>2025-03-12 08:49:12<SeP>2025-03-12 08:52:48<SeP>2025-03-12 08:56:24<SeP>2025-03-12 09:00:00<SeP>2025-03-12 09:03:36<SeP>2025-03-12 09:07:12<SeP>2025-03-12 09:10:48<SeP>2025-03-12 09:14:24<SeP>2025-03-12 09:18:00<SeP>2025-03-12 09:21:36<SeP>2025-03-12 09:25:12<SeP>2025-03-12 09:28:48<SeP>2025-03-12 09:32:24<SeP>2025-03-12 09:36:00<SeP>2025-03-12 09:39:36<SeP>2025-03-12 09:43:12<SeP>2025-03-12 09:46:48<SeP>2025-03-12 09:50:24<SeP>2025-03-12 09:54:00<SeP>2025-03-12 09:57:36<SeP>2025-03-12 10:01:12<SeP>2025-03-12 10:04:48<SeP>2025-03-12 10:08:24<SeP>2025-03-12 10:12:00<SeP>2025-03-12 10:15:36<SeP>2025-03-12 10:19:12<SeP>2025-03-12 10:22:48<SeP>2025-03-12 10:26:24<SeP>2025-03-12 10:30:00<SeP>2025-03-12 10:33:36<SeP>2025-03-12 10:37:12<SeP>2025-03-12 10:40:48<SeP>2025-03-12 10:44:24<SeP>2025-03-12 10:48:00<SeP>2025-03-12 10:51:36<SeP>2025-03-12 10:55:12<SeP>2025-03-12 10:58:48<SeP>2025-03-12 11:02:24<SeP>2025-03-12 11:06:00<SeP>2025-03-12 11:09:36<SeP>2025-03-12 11:13:12<SeP>2025-03-12 11:16:48<SeP>2025-03-12 11:20:24<SeP>2025-03-12 11:24:00<SeP>2025-03-12 11:27:36<SeP>2025-03-12 11:31:12<SeP>2025-03-12 11:34:48<SeP>2025-03-12 11:38:24<SeP>2025-03-12 11:42:00<SeP>2025-03-12 11:45:36<SeP>2025-03-12 11:49:12<SeP>2025-03-12 11:52:48<SeP>2025-03-12 11:56:24<SeP>2025-03-12 12:00:00<SeP>2025-03-12 12:03:36<SeP>2025-03-12 12:07:12<SeP>2025-03-12 12:10:48<SeP>2025-03-12 12:14:24<SeP>2025-03-12 12:18:00<SeP>2025-03-12 12:21:36<SeP>2025-03-12 12:25:12<SeP>2025-03-12 12:28:48<SeP>2025-03-12 12:32:24<SeP>2025-03-12 12:36:00<SeP>2025-03-12 12:39:36<SeP>2025-03-12 12:43:12<SeP>2025-03-12 12:46:48<SeP>2025-03-12 12:50:24<SeP>2025-03-12 12:54:00<SeP>2025-03-12 12:57:36<SeP>2025-03-12 13:01:12<SeP>2025-03-12 13:04:48<SeP>2025-03-12 13:08:24<SeP>2025-03-12 13:12:00<SeP>2025-03-12 13:15:36<SeP>2025-03-12 13:19:12<SeP>2025-03-12 13:22:48<SeP>2025-03-12 13:26:24<SeP>2025-03-12 13:30:00<SeP>2025-03-12 13:33:36<SeP>2025-03-12 13:37:12<SeP>2025-03-12 13:40:48<SeP>2025-03-12 13:44:24<SeP>2025-03-12 13:48:00<SeP>2025-03-12 13:51:36<SeP>2025-03-12 13:55:12<SeP>2025-03-12 13:58:48<SeP>2025-03-12 14:02:24<SeP>2025-03-12 14:06:00<SeP>2025-03-12 14:09:36<SeP>2025-03-12 14:13:12<SeP>2025-03-12 14:16:48<SeP>2025-03-12 14:20:24<SeP>2025-03-12 14:24:00<SeP>2025-03-12 14:27:36<SeP>2025-03-12 14:31:12<SeP>2025-03-12 14:34:48<SeP>2025-03-12 14:38:24<SeP>2025-03-12 14:42:00<SeP>2025-03-12 14:45:36<SeP>2025-03-12 14:49:12<SeP>2025-03-12 14:52:48<SeP>2025-03-12 14:56:24<SeP>2025-03-12 15:00:00<SeP>2025-03-12 15:03:36<SeP>2025-03-12 15:07:12<SeP>2025-03-12 15:10:48<SeP>2025-03-12 15:14:24<SeP>2025-03-12 15:18:00<SeP>2025-03-12 15:21:36<SeP>2025-03-12 15:25:12<SeP>2025-03-12 15:28:48<SeP>2025-03-12 15:32:24<SeP>2025-03-12 15:36:00<SeP>2025-03-12 15:39:36<SeP>2025-03-12 15:43:12<SeP>2025-03-12 15:46:48<SeP>2025-03-12 15:50:24<SeP>2025-03-12 15:54:00<SeP>2025-03-12 15:57:36<SeP>2025-03-12 16:01:12<SeP>2025-03-12 16:04:48<SeP>2025-03-12 16:08:24<SeP>2025-03-12 16:12:00<SeP>2025-03-12 16:15:36<SeP>2025-03-12 16:19:12<SeP>2025-03-12 16:22:48<SeP>2025-03-12 16:26:24<SeP>2025-03-12 16:30:00<SeP>2025-03-12 16:33:36<SeP>2025-03-12 16:37:12<SeP>2025-03-12 16:40:48<SeP>2025-03-12 16:44:24<SeP>2025-03-12 16:48:00<SeP>2025-03-12 16:51:36<SeP>2025-03-12 16:55:12<SeP>2025-03-12 16:58:48<SeP>2025-03-12 17:02:24<SeP>2025-03-12 17:06:00<SeP>2025-03-12 17:09:36<SeP>2025-03-12 17:13:12<SeP>2025-03-12 17:16:48<SeP>2025-03-12 17:20:24<SeP>2025-03-12 17:24:00<SeP>2025-03-12 17:27:36<SeP>2025-03-12 17:31:12<SeP>2025-03-12 17:34:48<SeP>2025-03-12 17:38:24<SeP>2025-03-12 17:42:00<SeP>2025-03-12 17:45:36<SeP>2025-03-12 17:49:12<SeP>2025-03-12 17:52:48<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:00:00<SeP>2025-03-12 18:03:36<SeP>2025-03-12 18:07:12<SeP>2025-03-12 18:10:48<SeP>2025-03-12 18:14:24<SeP>2025-03-12 18:18:00<SeP>2025-03-12 18:21:36<SeP>2025-03-12 18:25:12<SeP>2025-03-12 18:28:48<SeP>2025-03-12 18:32:24<SeP>2025-03-12 18:36:00<SeP>2025-03-12 18:39:36<SeP>2025-03-12 18:43:12<SeP>2025-03-12 18:46:48<SeP>2025-03-12 18:50:24<SeP>2025-03-12 18:54:00<SeP>2025-03-12 18:57:36<SeP>2025-03-12 19:01:12<SeP>2025-03-12 19:04:48<SeP>2025-03-12 19:08:24<SeP>2025-03-12 19:12:00<SeP>2025-03-12 19:15:36<SeP>2025-03-12 19:19:12<SeP>2025-03-12 19:22:48<SeP>2025-03-12 19:26:24<SeP>2025-03-12 19:30:00<SeP>2025-03-12 19:33:36<SeP>2025-03-12 19:37:12<SeP>2025-03-12 19:40:48<SeP>2025-03-12 19:44:24<SeP>2025-03-12 19:48:00<SeP>2025-03-12 19:51:36<SeP>2025-03-12 19:55:12<SeP>2025-03-12 19:58:48<SeP>2025-03-12 20:02:24<SeP>2025-03-12 20:06:00<SeP>2025-03-12 20:09:36<SeP>2025-03-12 20:13:12<SeP>2025-03-12 20:16:48<SeP>2025-03-12 20:20:24<SeP>2025-03-12 20:24:00<SeP>2025-03-12 20:27:36<SeP>2025-03-12 20:31:12<SeP>2025-03-12 20:34:48<SeP>2025-03-12 20:38:24<SeP>2025-03-12 20:42:00<SeP>2025-03-12 20:45:36<SeP>2025-03-12 20:49:12<SeP>2025-03-12 20:52:48<SeP>2025-03-12 20:56:24<SeP>2025-03-12 21:00:00<SeP>2025-03-12 21:03:36<SeP>2025-03-12 21:07:12<SeP>2025-03-12 21:10:48<SeP>2025-03-12 21:14:24<SeP>2025-03-12 21:18:00<SeP>2025-03-12 21:21:36<SeP>2025-03-12 21:25:12<SeP>2025-03-12 21:28:48<SeP>2025-03-12 21:32:24<SeP>2025-03-12 21:36:00<SeP>2025-03-12 21:39:36<SeP>2025-03-12 21:43:12<SeP>2025-03-12 21:46:48<SeP>2025-03-12 21:50:24<SeP>2025-03-12 21:54:00<SeP>2025-03-12 21:57:36<SeP>2025-03-12 22:01:12<SeP>2025-03-12 22:04:48<SeP>2025-03-12 22:08:24<SeP>2025-03-12 22:12:00<SeP>2025-03-12 22:15:36<SeP>2025-03-12 22:19:12<SeP>2025-03-12 22:22:48<SeP>2025-03-12 22:26:24<SeP>2025-03-12 22:30:00<SeP>2025-03-12 22:33:36<SeP>2025-03-12 22:37:12<SeP>2025-03-12 22:40:48<SeP>2025-03-12 22:44:24<SeP>2025-03-12 22:48:00<SeP>2025-03-12 22:51:36<SeP>2025-03-12 22:55:12<SeP>2025-03-12 22:58:48<SeP>2025-03-12 23:02:24<SeP>2025-03-12 23:06:00<SeP>2025-03-12 23:09:36<SeP>2025-03-12 23:13:12<SeP>2025-03-12 23:16:48<SeP>2025-03-12 23:20:24<SeP>2025-03-12 23:24:00<SeP>2025-03-12 23:27:36<SeP>2025-03-12 23:31:12<SeP>2025-03-12 23:34:48<SeP>2025-03-12 23:38:24<SeP>2025-03-12 23:42:00<SeP>2025-03-12 23:45:36<SeP>2025-03-12 23:49:12<SeP>2025-03-12 23:52:48<SeP>2025-03-12 23:56:24";
  const itemLabel       = "Scans";
  const itemData        = "8<SeP>15<SeP>20<SeP>15<SeP>2<SeP>2<SeP>5<SeP>4<SeP>1<SeP>1<SeP>0<SeP>7<SeP>2<SeP>0<SeP>2<SeP>1<SeP>2<SeP>4<SeP>1<SeP>3<SeP>0<SeP>2<SeP>3<SeP>1<SeP>1<SeP>1<SeP>2<SeP>1<SeP>0<SeP>1<SeP>1<SeP>0<SeP>4<SeP>1<SeP>1<SeP>2<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>1<SeP>0<SeP>4<SeP>2<SeP>1<SeP>4<SeP>0<SeP>0<SeP>2<SeP>3<SeP>1<SeP>4<SeP>2<SeP>2<SeP>10<SeP>0<SeP>4<SeP>3<SeP>3<SeP>1<SeP>10<SeP>9<SeP>4<SeP>8<SeP>13<SeP>1<SeP>1<SeP>6<SeP>0<SeP>1<SeP>2<SeP>2<SeP>4<SeP>2<SeP>1<SeP>0<SeP>3<SeP>4<SeP>3<SeP>0<SeP>5<SeP>2<SeP>1<SeP>1<SeP>6<SeP>1<SeP>0<SeP>1<SeP>3<SeP>5<SeP>1<SeP>2<SeP>0<SeP>2<SeP>1<SeP>2<SeP>0<SeP>2<SeP>2<SeP>0<SeP>11<SeP>3<SeP>1<SeP>1<SeP>3<SeP>4<SeP>4<SeP>2<SeP>1<SeP>0<SeP>0<SeP>6<SeP>4<SeP>1<SeP>1<SeP>19<SeP>10<SeP>1<SeP>2<SeP>1<SeP>0<SeP>3<SeP>1<SeP>1<SeP>0<SeP>2<SeP>2<SeP>2<SeP>1<SeP>0<SeP>3<SeP>1<SeP>2<SeP>2<SeP>1<SeP>2<SeP>1<SeP>0<SeP>2<SeP>3<SeP>0<SeP>14<SeP>1<SeP>1<SeP>3<SeP>1<SeP>1<SeP>5<SeP>1<SeP>8<SeP>17<SeP>3<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>3<SeP>0<SeP>2<SeP>0<SeP>2<SeP>3<SeP>5<SeP>2<SeP>1<SeP>2<SeP>0<SeP>1<SeP>0<SeP>1<SeP>1<SeP>2<SeP>2<SeP>12<SeP>0<SeP>1<SeP>0<SeP>3<SeP>1<SeP>0<SeP>2<SeP>4<SeP>5<SeP>6<SeP>1<SeP>7<SeP>1<SeP>9<SeP>4<SeP>7<SeP>12<SeP>5<SeP>3<SeP>10<SeP>4<SeP>3<SeP>1<SeP>14<SeP>2<SeP>0<SeP>2<SeP>2<SeP>2<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>2<SeP>0<SeP>0<SeP>1<SeP>1<SeP>0<SeP>0<SeP>1<SeP>0<SeP>1<SeP>5<SeP>0<SeP>2<SeP>3<SeP>2<SeP>2<SeP>3<SeP>5<SeP>8<SeP>1<SeP>1<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>0<SeP>2<SeP>3<SeP>5<SeP>0<SeP>1<SeP>1<SeP>3<SeP>14<SeP>12<SeP>1<SeP>1<SeP>2<SeP>9<SeP>2<SeP>0<SeP>7<SeP>13<SeP>19<SeP>2<SeP>0<SeP>2<SeP>2<SeP>0<SeP>0<SeP>0<SeP>5<SeP>2<SeP>1<SeP>1<SeP>2<SeP>1<SeP>4<SeP>1<SeP>2<SeP>2<SeP>1<SeP>12<SeP>35<SeP>6<SeP>1<SeP>1<SeP>4<SeP>5<SeP>3<SeP>3<SeP>2<SeP>6<SeP>4<SeP>30<SeP>17<SeP>3<SeP>3<SeP>1<SeP>10<SeP>1<SeP>1<SeP>1<SeP>3<SeP>0<SeP>1<SeP>0<SeP>9<SeP>2<SeP>1<SeP>2<SeP>4<SeP>3<SeP>1<SeP>1<SeP>3<SeP>1<SeP>2<SeP>7<SeP>1<SeP>1<SeP>1<SeP>2<SeP>5<SeP>17<SeP>8<SeP>1<SeP>4<SeP>0<SeP>0<SeP>1<SeP>4<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>1<SeP>4<SeP>3<SeP>2<SeP>1<SeP>3<SeP>2<SeP>7<SeP>5<SeP>18<SeP>5<SeP>7<SeP>2<SeP>0<SeP>1<SeP>1<SeP>3<SeP>8<SeP>6<SeP>0<SeP>3<SeP>5<SeP>0<SeP>10<SeP>20<SeP>6<SeP>2<SeP>0<SeP>5<SeP>5<SeP>0<SeP>1<SeP>6<SeP>3<SeP>2<SeP>4<SeP>9<SeP>1<SeP>3<SeP>0<SeP>1<SeP>4<SeP>4<SeP>9<SeP>2<SeP>0<SeP>6<SeP>3<SeP>0<SeP>1<SeP>3<SeP>13";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-03-12 00:00:00<SeP>2025-03-12 00:03:36<SeP>2025-03-12 00:07:12<SeP>2025-03-12 00:10:48<SeP>2025-03-12 00:14:24<SeP>2025-03-12 00:18:00<SeP>2025-03-12 00:21:36<SeP>2025-03-12 00:25:12<SeP>2025-03-12 00:28:48<SeP>2025-03-12 00:32:24<SeP>2025-03-12 00:36:00<SeP>2025-03-12 00:39:36<SeP>2025-03-12 00:43:12<SeP>2025-03-12 00:46:48<SeP>2025-03-12 00:50:24<SeP>2025-03-12 00:54:00<SeP>2025-03-12 00:57:36<SeP>2025-03-12 01:01:12<SeP>2025-03-12 01:04:48<SeP>2025-03-12 01:08:24<SeP>2025-03-12 01:12:00<SeP>2025-03-12 01:15:36<SeP>2025-03-12 01:19:12<SeP>2025-03-12 01:22:48<SeP>2025-03-12 01:26:24<SeP>2025-03-12 01:30:00<SeP>2025-03-12 01:33:36<SeP>2025-03-12 01:37:12<SeP>2025-03-12 01:40:48<SeP>2025-03-12 01:44:24<SeP>2025-03-12 01:48:00<SeP>2025-03-12 01:51:36<SeP>2025-03-12 01:55:12<SeP>2025-03-12 01:58:48<SeP>2025-03-12 02:02:24<SeP>2025-03-12 02:06:00<SeP>2025-03-12 02:09:36<SeP>2025-03-12 02:13:12<SeP>2025-03-12 02:16:48<SeP>2025-03-12 02:20:24<SeP>2025-03-12 02:24:00<SeP>2025-03-12 02:27:36<SeP>2025-03-12 02:31:12<SeP>2025-03-12 02:34:48<SeP>2025-03-12 02:38:24<SeP>2025-03-12 02:42:00<SeP>2025-03-12 02:45:36<SeP>2025-03-12 02:49:12<SeP>2025-03-12 02:52:48<SeP>2025-03-12 02:56:24<SeP>2025-03-12 03:00:00<SeP>2025-03-12 03:03:36<SeP>2025-03-12 03:07:12<SeP>2025-03-12 03:10:48<SeP>2025-03-12 03:14:24<SeP>2025-03-12 03:18:00<SeP>2025-03-12 03:21:36<SeP>2025-03-12 03:25:12<SeP>2025-03-12 03:28:48<SeP>2025-03-12 03:32:24<SeP>2025-03-12 03:36:00<SeP>2025-03-12 03:39:36<SeP>2025-03-12 03:43:12<SeP>2025-03-12 03:46:48<SeP>2025-03-12 03:50:24<SeP>2025-03-12 03:54:00<SeP>2025-03-12 03:57:36<SeP>2025-03-12 04:01:12<SeP>2025-03-12 04:04:48<SeP>2025-03-12 04:08:24<SeP>2025-03-12 04:12:00<SeP>2025-03-12 04:15:36<SeP>2025-03-12 04:19:12<SeP>2025-03-12 04:22:48<SeP>2025-03-12 04:26:24<SeP>2025-03-12 04:30:00<SeP>2025-03-12 04:33:36<SeP>2025-03-12 04:37:12<SeP>2025-03-12 04:40:48<SeP>2025-03-12 04:44:24<SeP>2025-03-12 04:48:00<SeP>2025-03-12 04:51:36<SeP>2025-03-12 04:55:12<SeP>2025-03-12 04:58:48<SeP>2025-03-12 05:02:24<SeP>2025-03-12 05:06:00<SeP>2025-03-12 05:09:36<SeP>2025-03-12 05:13:12<SeP>2025-03-12 05:16:48<SeP>2025-03-12 05:20:24<SeP>2025-03-12 05:24:00<SeP>2025-03-12 05:27:36<SeP>2025-03-12 05:31:12<SeP>2025-03-12 05:34:48<SeP>2025-03-12 05:38:24<SeP>2025-03-12 05:42:00<SeP>2025-03-12 05:45:36<SeP>2025-03-12 05:49:12<SeP>2025-03-12 05:52:48<SeP>2025-03-12 05:56:24<SeP>2025-03-12 06:00:00<SeP>2025-03-12 06:03:36<SeP>2025-03-12 06:07:12<SeP>2025-03-12 06:10:48<SeP>2025-03-12 06:14:24<SeP>2025-03-12 06:18:00<SeP>2025-03-12 06:21:36<SeP>2025-03-12 06:25:12<SeP>2025-03-12 06:28:48<SeP>2025-03-12 06:32:24<SeP>2025-03-12 06:36:00<SeP>2025-03-12 06:39:36<SeP>2025-03-12 06:43:12<SeP>2025-03-12 06:46:48<SeP>2025-03-12 06:50:24<SeP>2025-03-12 06:54:00<SeP>2025-03-12 06:57:36<SeP>2025-03-12 07:01:12<SeP>2025-03-12 07:04:48<SeP>2025-03-12 07:08:24<SeP>2025-03-12 07:12:00<SeP>2025-03-12 07:15:36<SeP>2025-03-12 07:19:12<SeP>2025-03-12 07:22:48<SeP>2025-03-12 07:26:24<SeP>2025-03-12 07:30:00<SeP>2025-03-12 07:33:36<SeP>2025-03-12 07:37:12<SeP>2025-03-12 07:40:48<SeP>2025-03-12 07:44:24<SeP>2025-03-12 07:48:00<SeP>2025-03-12 07:51:36<SeP>2025-03-12 07:55:12<SeP>2025-03-12 07:58:48<SeP>2025-03-12 08:02:24<SeP>2025-03-12 08:06:00<SeP>2025-03-12 08:09:36<SeP>2025-03-12 08:13:12<SeP>2025-03-12 08:16:48<SeP>2025-03-12 08:20:24<SeP>2025-03-12 08:24:00<SeP>2025-03-12 08:27:36<SeP>2025-03-12 08:31:12<SeP>2025-03-12 08:34:48<SeP>2025-03-12 08:38:24<SeP>2025-03-12 08:42:00<SeP>2025-03-12 08:45:36<SeP>2025-03-12 08:49:12<SeP>2025-03-12 08:52:48<SeP>2025-03-12 08:56:24<SeP>2025-03-12 09:00:00<SeP>2025-03-12 09:03:36<SeP>2025-03-12 09:07:12<SeP>2025-03-12 09:10:48<SeP>2025-03-12 09:14:24<SeP>2025-03-12 09:18:00<SeP>2025-03-12 09:21:36<SeP>2025-03-12 09:25:12<SeP>2025-03-12 09:28:48<SeP>2025-03-12 09:32:24<SeP>2025-03-12 09:36:00<SeP>2025-03-12 09:39:36<SeP>2025-03-12 09:43:12<SeP>2025-03-12 09:46:48<SeP>2025-03-12 09:50:24<SeP>2025-03-12 09:54:00<SeP>2025-03-12 09:57:36<SeP>2025-03-12 10:01:12<SeP>2025-03-12 10:04:48<SeP>2025-03-12 10:08:24<SeP>2025-03-12 10:12:00<SeP>2025-03-12 10:15:36<SeP>2025-03-12 10:19:12<SeP>2025-03-12 10:22:48<SeP>2025-03-12 10:26:24<SeP>2025-03-12 10:30:00<SeP>2025-03-12 10:33:36<SeP>2025-03-12 10:37:12<SeP>2025-03-12 10:40:48<SeP>2025-03-12 10:44:24<SeP>2025-03-12 10:48:00<SeP>2025-03-12 10:51:36<SeP>2025-03-12 10:55:12<SeP>2025-03-12 10:58:48<SeP>2025-03-12 11:02:24<SeP>2025-03-12 11:06:00<SeP>2025-03-12 11:09:36<SeP>2025-03-12 11:13:12<SeP>2025-03-12 11:16:48<SeP>2025-03-12 11:20:24<SeP>2025-03-12 11:24:00<SeP>2025-03-12 11:27:36<SeP>2025-03-12 11:31:12<SeP>2025-03-12 11:34:48<SeP>2025-03-12 11:38:24<SeP>2025-03-12 11:42:00<SeP>2025-03-12 11:45:36<SeP>2025-03-12 11:49:12<SeP>2025-03-12 11:52:48<SeP>2025-03-12 11:56:24<SeP>2025-03-12 12:00:00<SeP>2025-03-12 12:03:36<SeP>2025-03-12 12:07:12<SeP>2025-03-12 12:10:48<SeP>2025-03-12 12:14:24<SeP>2025-03-12 12:18:00<SeP>2025-03-12 12:21:36<SeP>2025-03-12 12:25:12<SeP>2025-03-12 12:28:48<SeP>2025-03-12 12:32:24<SeP>2025-03-12 12:36:00<SeP>2025-03-12 12:39:36<SeP>2025-03-12 12:43:12<SeP>2025-03-12 12:46:48<SeP>2025-03-12 12:50:24<SeP>2025-03-12 12:54:00<SeP>2025-03-12 12:57:36<SeP>2025-03-12 13:01:12<SeP>2025-03-12 13:04:48<SeP>2025-03-12 13:08:24<SeP>2025-03-12 13:12:00<SeP>2025-03-12 13:15:36<SeP>2025-03-12 13:19:12<SeP>2025-03-12 13:22:48<SeP>2025-03-12 13:26:24<SeP>2025-03-12 13:30:00<SeP>2025-03-12 13:33:36<SeP>2025-03-12 13:37:12<SeP>2025-03-12 13:40:48<SeP>2025-03-12 13:44:24<SeP>2025-03-12 13:48:00<SeP>2025-03-12 13:51:36<SeP>2025-03-12 13:55:12<SeP>2025-03-12 13:58:48<SeP>2025-03-12 14:02:24<SeP>2025-03-12 14:06:00<SeP>2025-03-12 14:09:36<SeP>2025-03-12 14:13:12<SeP>2025-03-12 14:16:48<SeP>2025-03-12 14:20:24<SeP>2025-03-12 14:24:00<SeP>2025-03-12 14:27:36<SeP>2025-03-12 14:31:12<SeP>2025-03-12 14:34:48<SeP>2025-03-12 14:38:24<SeP>2025-03-12 14:42:00<SeP>2025-03-12 14:45:36<SeP>2025-03-12 14:49:12<SeP>2025-03-12 14:52:48<SeP>2025-03-12 14:56:24<SeP>2025-03-12 15:00:00<SeP>2025-03-12 15:03:36<SeP>2025-03-12 15:07:12<SeP>2025-03-12 15:10:48<SeP>2025-03-12 15:14:24<SeP>2025-03-12 15:18:00<SeP>2025-03-12 15:21:36<SeP>2025-03-12 15:25:12<SeP>2025-03-12 15:28:48<SeP>2025-03-12 15:32:24<SeP>2025-03-12 15:36:00<SeP>2025-03-12 15:39:36<SeP>2025-03-12 15:43:12<SeP>2025-03-12 15:46:48<SeP>2025-03-12 15:50:24<SeP>2025-03-12 15:54:00<SeP>2025-03-12 15:57:36<SeP>2025-03-12 16:01:12<SeP>2025-03-12 16:04:48<SeP>2025-03-12 16:08:24<SeP>2025-03-12 16:12:00<SeP>2025-03-12 16:15:36<SeP>2025-03-12 16:19:12<SeP>2025-03-12 16:22:48<SeP>2025-03-12 16:26:24<SeP>2025-03-12 16:30:00<SeP>2025-03-12 16:33:36<SeP>2025-03-12 16:37:12<SeP>2025-03-12 16:40:48<SeP>2025-03-12 16:44:24<SeP>2025-03-12 16:48:00<SeP>2025-03-12 16:51:36<SeP>2025-03-12 16:55:12<SeP>2025-03-12 16:58:48<SeP>2025-03-12 17:02:24<SeP>2025-03-12 17:06:00<SeP>2025-03-12 17:09:36<SeP>2025-03-12 17:13:12<SeP>2025-03-12 17:16:48<SeP>2025-03-12 17:20:24<SeP>2025-03-12 17:24:00<SeP>2025-03-12 17:27:36<SeP>2025-03-12 17:31:12<SeP>2025-03-12 17:34:48<SeP>2025-03-12 17:38:24<SeP>2025-03-12 17:42:00<SeP>2025-03-12 17:45:36<SeP>2025-03-12 17:49:12<SeP>2025-03-12 17:52:48<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:00:00<SeP>2025-03-12 18:03:36<SeP>2025-03-12 18:07:12<SeP>2025-03-12 18:10:48<SeP>2025-03-12 18:14:24<SeP>2025-03-12 18:18:00<SeP>2025-03-12 18:21:36<SeP>2025-03-12 18:25:12<SeP>2025-03-12 18:28:48<SeP>2025-03-12 18:32:24<SeP>2025-03-12 18:36:00<SeP>2025-03-12 18:39:36<SeP>2025-03-12 18:43:12<SeP>2025-03-12 18:46:48<SeP>2025-03-12 18:50:24<SeP>2025-03-12 18:54:00<SeP>2025-03-12 18:57:36<SeP>2025-03-12 19:01:12<SeP>2025-03-12 19:04:48<SeP>2025-03-12 19:08:24<SeP>2025-03-12 19:12:00<SeP>2025-03-12 19:15:36<SeP>2025-03-12 19:19:12<SeP>2025-03-12 19:22:48<SeP>2025-03-12 19:26:24<SeP>2025-03-12 19:30:00<SeP>2025-03-12 19:33:36<SeP>2025-03-12 19:37:12<SeP>2025-03-12 19:40:48<SeP>2025-03-12 19:44:24<SeP>2025-03-12 19:48:00<SeP>2025-03-12 19:51:36<SeP>2025-03-12 19:55:12<SeP>2025-03-12 19:58:48<SeP>2025-03-12 20:02:24<SeP>2025-03-12 20:06:00<SeP>2025-03-12 20:09:36<SeP>2025-03-12 20:13:12<SeP>2025-03-12 20:16:48<SeP>2025-03-12 20:20:24<SeP>2025-03-12 20:24:00<SeP>2025-03-12 20:27:36<SeP>2025-03-12 20:31:12<SeP>2025-03-12 20:34:48<SeP>2025-03-12 20:38:24<SeP>2025-03-12 20:42:00<SeP>2025-03-12 20:45:36<SeP>2025-03-12 20:49:12<SeP>2025-03-12 20:52:48<SeP>2025-03-12 20:56:24<SeP>2025-03-12 21:00:00<SeP>2025-03-12 21:03:36<SeP>2025-03-12 21:07:12<SeP>2025-03-12 21:10:48<SeP>2025-03-12 21:14:24<SeP>2025-03-12 21:18:00<SeP>2025-03-12 21:21:36<SeP>2025-03-12 21:25:12<SeP>2025-03-12 21:28:48<SeP>2025-03-12 21:32:24<SeP>2025-03-12 21:36:00<SeP>2025-03-12 21:39:36<SeP>2025-03-12 21:43:12<SeP>2025-03-12 21:46:48<SeP>2025-03-12 21:50:24<SeP>2025-03-12 21:54:00<SeP>2025-03-12 21:57:36<SeP>2025-03-12 22:01:12<SeP>2025-03-12 22:04:48<SeP>2025-03-12 22:08:24<SeP>2025-03-12 22:12:00<SeP>2025-03-12 22:15:36<SeP>2025-03-12 22:19:12<SeP>2025-03-12 22:22:48<SeP>2025-03-12 22:26:24<SeP>2025-03-12 22:30:00<SeP>2025-03-12 22:33:36<SeP>2025-03-12 22:37:12<SeP>2025-03-12 22:40:48<SeP>2025-03-12 22:44:24<SeP>2025-03-12 22:48:00<SeP>2025-03-12 22:51:36<SeP>2025-03-12 22:55:12<SeP>2025-03-12 22:58:48<SeP>2025-03-12 23:02:24<SeP>2025-03-12 23:06:00<SeP>2025-03-12 23:09:36<SeP>2025-03-12 23:13:12<SeP>2025-03-12 23:16:48<SeP>2025-03-12 23:20:24<SeP>2025-03-12 23:24:00<SeP>2025-03-12 23:27:36<SeP>2025-03-12 23:31:12<SeP>2025-03-12 23:34:48<SeP>2025-03-12 23:38:24<SeP>2025-03-12 23:42:00<SeP>2025-03-12 23:45:36<SeP>2025-03-12 23:49:12<SeP>2025-03-12 23:52:48<SeP>2025-03-12 23:56:24";
  const itemLabel       = "Attacks";
  const itemData        = "5<SeP>2<SeP>0<SeP>1<SeP>2<SeP>2<SeP>3<SeP>1<SeP>1<SeP>1<SeP>3<SeP>3<SeP>1<SeP>4<SeP>2<SeP>2<SeP>3<SeP>1<SeP>1<SeP>0<SeP>9<SeP>12<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>4<SeP>6<SeP>12<SeP>17<SeP>17<SeP>14<SeP>16<SeP>18<SeP>11<SeP>13<SeP>12<SeP>3<SeP>4<SeP>4<SeP>5<SeP>2<SeP>4<SeP>1<SeP>0<SeP>0<SeP>3<SeP>4<SeP>4<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>4<SeP>3<SeP>1<SeP>0<SeP>0<SeP>0<SeP>2<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>1<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>0<SeP>1<SeP>4<SeP>2<SeP>1<SeP>0<SeP>2<SeP>0<SeP>0<SeP>2<SeP>0<SeP>0<SeP>0<SeP>2<SeP>0<SeP>5<SeP>16<SeP>20<SeP>9<SeP>10<SeP>7<SeP>8<SeP>9<SeP>0<SeP>0<SeP>3<SeP>0<SeP>2<SeP>3<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>0<SeP>0<SeP>2<SeP>0<SeP>1<SeP>1<SeP>3<SeP>0<SeP>0<SeP>0<SeP>0<SeP>3<SeP>14<SeP>0<SeP>1<SeP>0<SeP>19<SeP>2<SeP>2<SeP>2<SeP>8<SeP>5<SeP>10<SeP>10<SeP>9<SeP>13<SeP>11<SeP>9<SeP>10<SeP>9<SeP>6<SeP>11<SeP>7<SeP>2<SeP>4<SeP>5<SeP>6<SeP>1<SeP>0<SeP>0<SeP>4<SeP>0<SeP>3<SeP>0<SeP>1<SeP>2<SeP>2<SeP>2<SeP>7<SeP>7<SeP>2<SeP>2<SeP>1<SeP>3<SeP>1<SeP>8<SeP>8<SeP>6<SeP>5<SeP>2<SeP>3<SeP>4<SeP>3<SeP>9<SeP>17<SeP>2<SeP>7<SeP>1<SeP>9<SeP>5<SeP>7<SeP>4<SeP>8<SeP>7<SeP>6<SeP>9<SeP>9<SeP>10<SeP>3<SeP>6<SeP>31<SeP>8<SeP>3<SeP>7<SeP>6<SeP>6<SeP>3<SeP>3<SeP>3<SeP>3<SeP>3<SeP>5<SeP>3<SeP>4<SeP>4<SeP>1<SeP>5<SeP>1<SeP>4<SeP>3<SeP>3<SeP>4<SeP>3<SeP>3<SeP>15<SeP>8<SeP>4<SeP>2<SeP>4<SeP>4<SeP>6<SeP>4<SeP>6<SeP>3<SeP>5<SeP>4<SeP>6<SeP>3<SeP>6<SeP>5<SeP>4<SeP>4<SeP>3<SeP>6<SeP>7<SeP>5<SeP>4<SeP>5<SeP>3<SeP>7<SeP>4<SeP>7<SeP>2<SeP>3<SeP>4<SeP>3<SeP>4<SeP>3<SeP>5<SeP>4<SeP>10<SeP>13<SeP>17<SeP>9<SeP>14<SeP>16<SeP>14<SeP>13<SeP>18<SeP>14<SeP>12<SeP>4<SeP>3<SeP>147<SeP>1<SeP>5<SeP>1<SeP>5<SeP>2<SeP>4<SeP>4<SeP>5<SeP>3<SeP>10<SeP>16<SeP>2<SeP>6<SeP>3<SeP>4<SeP>4<SeP>5<SeP>3<SeP>4<SeP>5<SeP>4<SeP>3<SeP>4<SeP>3<SeP>1<SeP>6<SeP>1<SeP>6<SeP>1<SeP>4<SeP>2<SeP>4<SeP>2<SeP>6<SeP>7<SeP>4<SeP>4<SeP>5<SeP>1<SeP>5<SeP>2<SeP>3<SeP>8<SeP>10<SeP>7<SeP>8<SeP>9<SeP>10<SeP>13<SeP>3<SeP>9<SeP>7<SeP>10<SeP>6<SeP>10<SeP>6<SeP>8<SeP>3<SeP>3<SeP>4<SeP>1<SeP>4<SeP>1<SeP>5<SeP>1<SeP>9<SeP>6<SeP>3<SeP>3<SeP>4<SeP>3<SeP>4<SeP>4<SeP>4<SeP>5<SeP>2<SeP>7<SeP>9<SeP>10<SeP>4<SeP>5<SeP>3<SeP>3<SeP>4<SeP>2<SeP>5<SeP>12<SeP>3<SeP>7<SeP>5<SeP>4<SeP>22<SeP>18<SeP>7<SeP>4<SeP>3<SeP>3<SeP>3<SeP>5<SeP>2<SeP>6<SeP>9<SeP>7<SeP>4<SeP>3<SeP>5<SeP>6<SeP>5<SeP>2<SeP>5<SeP>3<SeP>3";
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
  const labelsData       = "2025-03-12 00:00:00<SeP>2025-03-12 00:03:36<SeP>2025-03-12 00:07:12<SeP>2025-03-12 00:10:48<SeP>2025-03-12 00:14:24<SeP>2025-03-12 00:18:00<SeP>2025-03-12 00:21:36<SeP>2025-03-12 00:25:12<SeP>2025-03-12 00:28:48<SeP>2025-03-12 00:32:24<SeP>2025-03-12 00:36:00<SeP>2025-03-12 00:39:36<SeP>2025-03-12 00:43:12<SeP>2025-03-12 00:46:48<SeP>2025-03-12 00:50:24<SeP>2025-03-12 00:54:00<SeP>2025-03-12 00:57:36<SeP>2025-03-12 01:01:12<SeP>2025-03-12 01:04:48<SeP>2025-03-12 01:08:24<SeP>2025-03-12 01:12:00<SeP>2025-03-12 01:15:36<SeP>2025-03-12 01:19:12<SeP>2025-03-12 01:22:48<SeP>2025-03-12 01:26:24<SeP>2025-03-12 01:30:00<SeP>2025-03-12 01:33:36<SeP>2025-03-12 01:37:12<SeP>2025-03-12 01:40:48<SeP>2025-03-12 01:44:24<SeP>2025-03-12 01:48:00<SeP>2025-03-12 01:51:36<SeP>2025-03-12 01:55:12<SeP>2025-03-12 01:58:48<SeP>2025-03-12 02:02:24<SeP>2025-03-12 02:06:00<SeP>2025-03-12 02:09:36<SeP>2025-03-12 02:13:12<SeP>2025-03-12 02:16:48<SeP>2025-03-12 02:20:24<SeP>2025-03-12 02:24:00<SeP>2025-03-12 02:27:36<SeP>2025-03-12 02:31:12<SeP>2025-03-12 02:34:48<SeP>2025-03-12 02:38:24<SeP>2025-03-12 02:42:00<SeP>2025-03-12 02:45:36<SeP>2025-03-12 02:49:12<SeP>2025-03-12 02:52:48<SeP>2025-03-12 02:56:24<SeP>2025-03-12 03:00:00<SeP>2025-03-12 03:03:36<SeP>2025-03-12 03:07:12<SeP>2025-03-12 03:10:48<SeP>2025-03-12 03:14:24<SeP>2025-03-12 03:18:00<SeP>2025-03-12 03:21:36<SeP>2025-03-12 03:25:12<SeP>2025-03-12 03:28:48<SeP>2025-03-12 03:32:24<SeP>2025-03-12 03:36:00<SeP>2025-03-12 03:39:36<SeP>2025-03-12 03:43:12<SeP>2025-03-12 03:46:48<SeP>2025-03-12 03:50:24<SeP>2025-03-12 03:54:00<SeP>2025-03-12 03:57:36<SeP>2025-03-12 04:01:12<SeP>2025-03-12 04:04:48<SeP>2025-03-12 04:08:24<SeP>2025-03-12 04:12:00<SeP>2025-03-12 04:15:36<SeP>2025-03-12 04:19:12<SeP>2025-03-12 04:22:48<SeP>2025-03-12 04:26:24<SeP>2025-03-12 04:30:00<SeP>2025-03-12 04:33:36<SeP>2025-03-12 04:37:12<SeP>2025-03-12 04:40:48<SeP>2025-03-12 04:44:24<SeP>2025-03-12 04:48:00<SeP>2025-03-12 04:51:36<SeP>2025-03-12 04:55:12<SeP>2025-03-12 04:58:48<SeP>2025-03-12 05:02:24<SeP>2025-03-12 05:06:00<SeP>2025-03-12 05:09:36<SeP>2025-03-12 05:13:12<SeP>2025-03-12 05:16:48<SeP>2025-03-12 05:20:24<SeP>2025-03-12 05:24:00<SeP>2025-03-12 05:27:36<SeP>2025-03-12 05:31:12<SeP>2025-03-12 05:34:48<SeP>2025-03-12 05:38:24<SeP>2025-03-12 05:42:00<SeP>2025-03-12 05:45:36<SeP>2025-03-12 05:49:12<SeP>2025-03-12 05:52:48<SeP>2025-03-12 05:56:24<SeP>2025-03-12 06:00:00<SeP>2025-03-12 06:03:36<SeP>2025-03-12 06:07:12<SeP>2025-03-12 06:10:48<SeP>2025-03-12 06:14:24<SeP>2025-03-12 06:18:00<SeP>2025-03-12 06:21:36<SeP>2025-03-12 06:25:12<SeP>2025-03-12 06:28:48<SeP>2025-03-12 06:32:24<SeP>2025-03-12 06:36:00<SeP>2025-03-12 06:39:36<SeP>2025-03-12 06:43:12<SeP>2025-03-12 06:46:48<SeP>2025-03-12 06:50:24<SeP>2025-03-12 06:54:00<SeP>2025-03-12 06:57:36<SeP>2025-03-12 07:01:12<SeP>2025-03-12 07:04:48<SeP>2025-03-12 07:08:24<SeP>2025-03-12 07:12:00<SeP>2025-03-12 07:15:36<SeP>2025-03-12 07:19:12<SeP>2025-03-12 07:22:48<SeP>2025-03-12 07:26:24<SeP>2025-03-12 07:30:00<SeP>2025-03-12 07:33:36<SeP>2025-03-12 07:37:12<SeP>2025-03-12 07:40:48<SeP>2025-03-12 07:44:24<SeP>2025-03-12 07:48:00<SeP>2025-03-12 07:51:36<SeP>2025-03-12 07:55:12<SeP>2025-03-12 07:58:48<SeP>2025-03-12 08:02:24<SeP>2025-03-12 08:06:00<SeP>2025-03-12 08:09:36<SeP>2025-03-12 08:13:12<SeP>2025-03-12 08:16:48<SeP>2025-03-12 08:20:24<SeP>2025-03-12 08:24:00<SeP>2025-03-12 08:27:36<SeP>2025-03-12 08:31:12<SeP>2025-03-12 08:34:48<SeP>2025-03-12 08:38:24<SeP>2025-03-12 08:42:00<SeP>2025-03-12 08:45:36<SeP>2025-03-12 08:49:12<SeP>2025-03-12 08:52:48<SeP>2025-03-12 08:56:24<SeP>2025-03-12 09:00:00<SeP>2025-03-12 09:03:36<SeP>2025-03-12 09:07:12<SeP>2025-03-12 09:10:48<SeP>2025-03-12 09:14:24<SeP>2025-03-12 09:18:00<SeP>2025-03-12 09:21:36<SeP>2025-03-12 09:25:12<SeP>2025-03-12 09:28:48<SeP>2025-03-12 09:32:24<SeP>2025-03-12 09:36:00<SeP>2025-03-12 09:39:36<SeP>2025-03-12 09:43:12<SeP>2025-03-12 09:46:48<SeP>2025-03-12 09:50:24<SeP>2025-03-12 09:54:00<SeP>2025-03-12 09:57:36<SeP>2025-03-12 10:01:12<SeP>2025-03-12 10:04:48<SeP>2025-03-12 10:08:24<SeP>2025-03-12 10:12:00<SeP>2025-03-12 10:15:36<SeP>2025-03-12 10:19:12<SeP>2025-03-12 10:22:48<SeP>2025-03-12 10:26:24<SeP>2025-03-12 10:30:00<SeP>2025-03-12 10:33:36<SeP>2025-03-12 10:37:12<SeP>2025-03-12 10:40:48<SeP>2025-03-12 10:44:24<SeP>2025-03-12 10:48:00<SeP>2025-03-12 10:51:36<SeP>2025-03-12 10:55:12<SeP>2025-03-12 10:58:48<SeP>2025-03-12 11:02:24<SeP>2025-03-12 11:06:00<SeP>2025-03-12 11:09:36<SeP>2025-03-12 11:13:12<SeP>2025-03-12 11:16:48<SeP>2025-03-12 11:20:24<SeP>2025-03-12 11:24:00<SeP>2025-03-12 11:27:36<SeP>2025-03-12 11:31:12<SeP>2025-03-12 11:34:48<SeP>2025-03-12 11:38:24<SeP>2025-03-12 11:42:00<SeP>2025-03-12 11:45:36<SeP>2025-03-12 11:49:12<SeP>2025-03-12 11:52:48<SeP>2025-03-12 11:56:24<SeP>2025-03-12 12:00:00<SeP>2025-03-12 12:03:36<SeP>2025-03-12 12:07:12<SeP>2025-03-12 12:10:48<SeP>2025-03-12 12:14:24<SeP>2025-03-12 12:18:00<SeP>2025-03-12 12:21:36<SeP>2025-03-12 12:25:12<SeP>2025-03-12 12:28:48<SeP>2025-03-12 12:32:24<SeP>2025-03-12 12:36:00<SeP>2025-03-12 12:39:36<SeP>2025-03-12 12:43:12<SeP>2025-03-12 12:46:48<SeP>2025-03-12 12:50:24<SeP>2025-03-12 12:54:00<SeP>2025-03-12 12:57:36<SeP>2025-03-12 13:01:12<SeP>2025-03-12 13:04:48<SeP>2025-03-12 13:08:24<SeP>2025-03-12 13:12:00<SeP>2025-03-12 13:15:36<SeP>2025-03-12 13:19:12<SeP>2025-03-12 13:22:48<SeP>2025-03-12 13:26:24<SeP>2025-03-12 13:30:00<SeP>2025-03-12 13:33:36<SeP>2025-03-12 13:37:12<SeP>2025-03-12 13:40:48<SeP>2025-03-12 13:44:24<SeP>2025-03-12 13:48:00<SeP>2025-03-12 13:51:36<SeP>2025-03-12 13:55:12<SeP>2025-03-12 13:58:48<SeP>2025-03-12 14:02:24<SeP>2025-03-12 14:06:00<SeP>2025-03-12 14:09:36<SeP>2025-03-12 14:13:12<SeP>2025-03-12 14:16:48<SeP>2025-03-12 14:20:24<SeP>2025-03-12 14:24:00<SeP>2025-03-12 14:27:36<SeP>2025-03-12 14:31:12<SeP>2025-03-12 14:34:48<SeP>2025-03-12 14:38:24<SeP>2025-03-12 14:42:00<SeP>2025-03-12 14:45:36<SeP>2025-03-12 14:49:12<SeP>2025-03-12 14:52:48<SeP>2025-03-12 14:56:24<SeP>2025-03-12 15:00:00<SeP>2025-03-12 15:03:36<SeP>2025-03-12 15:07:12<SeP>2025-03-12 15:10:48<SeP>2025-03-12 15:14:24<SeP>2025-03-12 15:18:00<SeP>2025-03-12 15:21:36<SeP>2025-03-12 15:25:12<SeP>2025-03-12 15:28:48<SeP>2025-03-12 15:32:24<SeP>2025-03-12 15:36:00<SeP>2025-03-12 15:39:36<SeP>2025-03-12 15:43:12<SeP>2025-03-12 15:46:48<SeP>2025-03-12 15:50:24<SeP>2025-03-12 15:54:00<SeP>2025-03-12 15:57:36<SeP>2025-03-12 16:01:12<SeP>2025-03-12 16:04:48<SeP>2025-03-12 16:08:24<SeP>2025-03-12 16:12:00<SeP>2025-03-12 16:15:36<SeP>2025-03-12 16:19:12<SeP>2025-03-12 16:22:48<SeP>2025-03-12 16:26:24<SeP>2025-03-12 16:30:00<SeP>2025-03-12 16:33:36<SeP>2025-03-12 16:37:12<SeP>2025-03-12 16:40:48<SeP>2025-03-12 16:44:24<SeP>2025-03-12 16:48:00<SeP>2025-03-12 16:51:36<SeP>2025-03-12 16:55:12<SeP>2025-03-12 16:58:48<SeP>2025-03-12 17:02:24<SeP>2025-03-12 17:06:00<SeP>2025-03-12 17:09:36<SeP>2025-03-12 17:13:12<SeP>2025-03-12 17:16:48<SeP>2025-03-12 17:20:24<SeP>2025-03-12 17:24:00<SeP>2025-03-12 17:27:36<SeP>2025-03-12 17:31:12<SeP>2025-03-12 17:34:48<SeP>2025-03-12 17:38:24<SeP>2025-03-12 17:42:00<SeP>2025-03-12 17:45:36<SeP>2025-03-12 17:49:12<SeP>2025-03-12 17:52:48<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:00:00<SeP>2025-03-12 18:03:36<SeP>2025-03-12 18:07:12<SeP>2025-03-12 18:10:48<SeP>2025-03-12 18:14:24<SeP>2025-03-12 18:18:00<SeP>2025-03-12 18:21:36<SeP>2025-03-12 18:25:12<SeP>2025-03-12 18:28:48<SeP>2025-03-12 18:32:24<SeP>2025-03-12 18:36:00<SeP>2025-03-12 18:39:36<SeP>2025-03-12 18:43:12<SeP>2025-03-12 18:46:48<SeP>2025-03-12 18:50:24<SeP>2025-03-12 18:54:00<SeP>2025-03-12 18:57:36<SeP>2025-03-12 19:01:12<SeP>2025-03-12 19:04:48<SeP>2025-03-12 19:08:24<SeP>2025-03-12 19:12:00<SeP>2025-03-12 19:15:36<SeP>2025-03-12 19:19:12<SeP>2025-03-12 19:22:48<SeP>2025-03-12 19:26:24<SeP>2025-03-12 19:30:00<SeP>2025-03-12 19:33:36<SeP>2025-03-12 19:37:12<SeP>2025-03-12 19:40:48<SeP>2025-03-12 19:44:24<SeP>2025-03-12 19:48:00<SeP>2025-03-12 19:51:36<SeP>2025-03-12 19:55:12<SeP>2025-03-12 19:58:48<SeP>2025-03-12 20:02:24<SeP>2025-03-12 20:06:00<SeP>2025-03-12 20:09:36<SeP>2025-03-12 20:13:12<SeP>2025-03-12 20:16:48<SeP>2025-03-12 20:20:24<SeP>2025-03-12 20:24:00<SeP>2025-03-12 20:27:36<SeP>2025-03-12 20:31:12<SeP>2025-03-12 20:34:48<SeP>2025-03-12 20:38:24<SeP>2025-03-12 20:42:00<SeP>2025-03-12 20:45:36<SeP>2025-03-12 20:49:12<SeP>2025-03-12 20:52:48<SeP>2025-03-12 20:56:24<SeP>2025-03-12 21:00:00<SeP>2025-03-12 21:03:36<SeP>2025-03-12 21:07:12<SeP>2025-03-12 21:10:48<SeP>2025-03-12 21:14:24<SeP>2025-03-12 21:18:00<SeP>2025-03-12 21:21:36<SeP>2025-03-12 21:25:12<SeP>2025-03-12 21:28:48<SeP>2025-03-12 21:32:24<SeP>2025-03-12 21:36:00<SeP>2025-03-12 21:39:36<SeP>2025-03-12 21:43:12<SeP>2025-03-12 21:46:48<SeP>2025-03-12 21:50:24<SeP>2025-03-12 21:54:00<SeP>2025-03-12 21:57:36<SeP>2025-03-12 22:01:12<SeP>2025-03-12 22:04:48<SeP>2025-03-12 22:08:24<SeP>2025-03-12 22:12:00<SeP>2025-03-12 22:15:36<SeP>2025-03-12 22:19:12<SeP>2025-03-12 22:22:48<SeP>2025-03-12 22:26:24<SeP>2025-03-12 22:30:00<SeP>2025-03-12 22:33:36<SeP>2025-03-12 22:37:12<SeP>2025-03-12 22:40:48<SeP>2025-03-12 22:44:24<SeP>2025-03-12 22:48:00<SeP>2025-03-12 22:51:36<SeP>2025-03-12 22:55:12<SeP>2025-03-12 22:58:48<SeP>2025-03-12 23:02:24<SeP>2025-03-12 23:06:00<SeP>2025-03-12 23:09:36<SeP>2025-03-12 23:13:12<SeP>2025-03-12 23:16:48<SeP>2025-03-12 23:20:24<SeP>2025-03-12 23:24:00<SeP>2025-03-12 23:27:36<SeP>2025-03-12 23:31:12<SeP>2025-03-12 23:34:48<SeP>2025-03-12 23:38:24<SeP>2025-03-12 23:42:00<SeP>2025-03-12 23:45:36<SeP>2025-03-12 23:49:12<SeP>2025-03-12 23:52:48<SeP>2025-03-12 23:56:24";
  const item1Label       = "Escaneos";
  const item1Data        = "8<SeP>15<SeP>20<SeP>15<SeP>2<SeP>2<SeP>5<SeP>4<SeP>1<SeP>1<SeP>0<SeP>7<SeP>2<SeP>0<SeP>2<SeP>1<SeP>2<SeP>4<SeP>1<SeP>3<SeP>0<SeP>2<SeP>3<SeP>1<SeP>1<SeP>1<SeP>2<SeP>1<SeP>0<SeP>1<SeP>1<SeP>0<SeP>4<SeP>1<SeP>1<SeP>2<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>1<SeP>0<SeP>4<SeP>2<SeP>1<SeP>4<SeP>0<SeP>0<SeP>2<SeP>3<SeP>1<SeP>4<SeP>2<SeP>2<SeP>10<SeP>0<SeP>4<SeP>3<SeP>3<SeP>1<SeP>10<SeP>9<SeP>4<SeP>8<SeP>13<SeP>1<SeP>1<SeP>6<SeP>0<SeP>1<SeP>2<SeP>2<SeP>4<SeP>2<SeP>1<SeP>0<SeP>3<SeP>4<SeP>3<SeP>0<SeP>5<SeP>2<SeP>1<SeP>1<SeP>6<SeP>1<SeP>0<SeP>1<SeP>3<SeP>5<SeP>1<SeP>2<SeP>0<SeP>2<SeP>1<SeP>2<SeP>0<SeP>2<SeP>2<SeP>0<SeP>11<SeP>3<SeP>1<SeP>1<SeP>3<SeP>4<SeP>4<SeP>2<SeP>1<SeP>0<SeP>0<SeP>6<SeP>4<SeP>1<SeP>1<SeP>19<SeP>10<SeP>1<SeP>2<SeP>1<SeP>0<SeP>3<SeP>1<SeP>1<SeP>0<SeP>2<SeP>2<SeP>2<SeP>1<SeP>0<SeP>3<SeP>1<SeP>2<SeP>2<SeP>1<SeP>2<SeP>1<SeP>0<SeP>2<SeP>3<SeP>0<SeP>14<SeP>1<SeP>1<SeP>3<SeP>1<SeP>1<SeP>5<SeP>1<SeP>8<SeP>17<SeP>3<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>3<SeP>0<SeP>2<SeP>0<SeP>2<SeP>3<SeP>5<SeP>2<SeP>1<SeP>2<SeP>0<SeP>1<SeP>0<SeP>1<SeP>1<SeP>2<SeP>2<SeP>12<SeP>0<SeP>1<SeP>0<SeP>3<SeP>1<SeP>0<SeP>2<SeP>4<SeP>5<SeP>6<SeP>1<SeP>7<SeP>1<SeP>9<SeP>4<SeP>7<SeP>12<SeP>5<SeP>3<SeP>10<SeP>4<SeP>3<SeP>1<SeP>14<SeP>2<SeP>0<SeP>2<SeP>2<SeP>2<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>2<SeP>0<SeP>0<SeP>1<SeP>1<SeP>0<SeP>0<SeP>1<SeP>0<SeP>1<SeP>5<SeP>0<SeP>2<SeP>3<SeP>2<SeP>2<SeP>3<SeP>5<SeP>8<SeP>1<SeP>1<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>0<SeP>2<SeP>3<SeP>5<SeP>0<SeP>1<SeP>1<SeP>3<SeP>14<SeP>12<SeP>1<SeP>1<SeP>2<SeP>9<SeP>2<SeP>0<SeP>7<SeP>13<SeP>19<SeP>2<SeP>0<SeP>2<SeP>2<SeP>0<SeP>0<SeP>0<SeP>5<SeP>2<SeP>1<SeP>1<SeP>2<SeP>1<SeP>4<SeP>1<SeP>2<SeP>2<SeP>1<SeP>12<SeP>35<SeP>6<SeP>1<SeP>1<SeP>4<SeP>5<SeP>3<SeP>3<SeP>2<SeP>6<SeP>4<SeP>30<SeP>17<SeP>3<SeP>3<SeP>1<SeP>10<SeP>1<SeP>1<SeP>1<SeP>3<SeP>0<SeP>1<SeP>0<SeP>9<SeP>2<SeP>1<SeP>2<SeP>4<SeP>3<SeP>1<SeP>1<SeP>3<SeP>1<SeP>2<SeP>7<SeP>1<SeP>1<SeP>1<SeP>2<SeP>5<SeP>17<SeP>8<SeP>1<SeP>4<SeP>0<SeP>0<SeP>1<SeP>4<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>1<SeP>4<SeP>3<SeP>2<SeP>1<SeP>3<SeP>2<SeP>7<SeP>5<SeP>18<SeP>5<SeP>7<SeP>2<SeP>0<SeP>1<SeP>1<SeP>3<SeP>8<SeP>6<SeP>0<SeP>3<SeP>5<SeP>0<SeP>10<SeP>20<SeP>6<SeP>2<SeP>0<SeP>5<SeP>5<SeP>0<SeP>1<SeP>6<SeP>3<SeP>2<SeP>4<SeP>9<SeP>1<SeP>3<SeP>0<SeP>1<SeP>4<SeP>4<SeP>9<SeP>2<SeP>0<SeP>6<SeP>3<SeP>0<SeP>1<SeP>3<SeP>13";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "5<SeP>2<SeP>0<SeP>1<SeP>2<SeP>2<SeP>3<SeP>1<SeP>1<SeP>1<SeP>3<SeP>3<SeP>1<SeP>4<SeP>2<SeP>2<SeP>3<SeP>1<SeP>1<SeP>0<SeP>9<SeP>12<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>4<SeP>6<SeP>12<SeP>17<SeP>17<SeP>14<SeP>16<SeP>18<SeP>11<SeP>13<SeP>12<SeP>3<SeP>4<SeP>4<SeP>5<SeP>2<SeP>4<SeP>1<SeP>0<SeP>0<SeP>3<SeP>4<SeP>4<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>4<SeP>3<SeP>1<SeP>0<SeP>0<SeP>0<SeP>2<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>1<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>0<SeP>1<SeP>4<SeP>2<SeP>1<SeP>0<SeP>2<SeP>0<SeP>0<SeP>2<SeP>0<SeP>0<SeP>0<SeP>2<SeP>0<SeP>5<SeP>16<SeP>20<SeP>9<SeP>10<SeP>7<SeP>8<SeP>9<SeP>0<SeP>0<SeP>3<SeP>0<SeP>2<SeP>3<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>0<SeP>0<SeP>2<SeP>0<SeP>1<SeP>1<SeP>3<SeP>0<SeP>0<SeP>0<SeP>0<SeP>3<SeP>14<SeP>0<SeP>1<SeP>0<SeP>19<SeP>2<SeP>2<SeP>2<SeP>8<SeP>5<SeP>10<SeP>10<SeP>9<SeP>13<SeP>11<SeP>9<SeP>10<SeP>9<SeP>6<SeP>11<SeP>7<SeP>2<SeP>4<SeP>5<SeP>6<SeP>1<SeP>0<SeP>0<SeP>4<SeP>0<SeP>3<SeP>0<SeP>1<SeP>2<SeP>2<SeP>2<SeP>7<SeP>7<SeP>2<SeP>2<SeP>1<SeP>3<SeP>1<SeP>8<SeP>8<SeP>6<SeP>5<SeP>2<SeP>3<SeP>4<SeP>3<SeP>9<SeP>17<SeP>2<SeP>7<SeP>1<SeP>9<SeP>5<SeP>7<SeP>4<SeP>8<SeP>7<SeP>6<SeP>9<SeP>9<SeP>10<SeP>3<SeP>6<SeP>31<SeP>8<SeP>3<SeP>7<SeP>6<SeP>6<SeP>3<SeP>3<SeP>3<SeP>3<SeP>3<SeP>5<SeP>3<SeP>4<SeP>4<SeP>1<SeP>5<SeP>1<SeP>4<SeP>3<SeP>3<SeP>4<SeP>3<SeP>3<SeP>15<SeP>8<SeP>4<SeP>2<SeP>4<SeP>4<SeP>6<SeP>4<SeP>6<SeP>3<SeP>5<SeP>4<SeP>6<SeP>3<SeP>6<SeP>5<SeP>4<SeP>4<SeP>3<SeP>6<SeP>7<SeP>5<SeP>4<SeP>5<SeP>3<SeP>7<SeP>4<SeP>7<SeP>2<SeP>3<SeP>4<SeP>3<SeP>4<SeP>3<SeP>5<SeP>4<SeP>10<SeP>13<SeP>17<SeP>9<SeP>14<SeP>16<SeP>14<SeP>13<SeP>18<SeP>14<SeP>12<SeP>4<SeP>3<SeP>147<SeP>1<SeP>5<SeP>1<SeP>5<SeP>2<SeP>4<SeP>4<SeP>5<SeP>3<SeP>10<SeP>16<SeP>2<SeP>6<SeP>3<SeP>4<SeP>4<SeP>5<SeP>3<SeP>4<SeP>5<SeP>4<SeP>3<SeP>4<SeP>3<SeP>1<SeP>6<SeP>1<SeP>6<SeP>1<SeP>4<SeP>2<SeP>4<SeP>2<SeP>6<SeP>7<SeP>4<SeP>4<SeP>5<SeP>1<SeP>5<SeP>2<SeP>3<SeP>8<SeP>10<SeP>7<SeP>8<SeP>9<SeP>10<SeP>13<SeP>3<SeP>9<SeP>7<SeP>10<SeP>6<SeP>10<SeP>6<SeP>8<SeP>3<SeP>3<SeP>4<SeP>1<SeP>4<SeP>1<SeP>5<SeP>1<SeP>9<SeP>6<SeP>3<SeP>3<SeP>4<SeP>3<SeP>4<SeP>4<SeP>4<SeP>5<SeP>2<SeP>7<SeP>9<SeP>10<SeP>4<SeP>5<SeP>3<SeP>3<SeP>4<SeP>2<SeP>5<SeP>12<SeP>3<SeP>7<SeP>5<SeP>4<SeP>22<SeP>18<SeP>7<SeP>4<SeP>3<SeP>3<SeP>3<SeP>5<SeP>2<SeP>6<SeP>9<SeP>7<SeP>4<SeP>3<SeP>5<SeP>6<SeP>5<SeP>2<SeP>5<SeP>3<SeP>3";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-03-12 00:00:00<SeP>2025-03-12 00:03:36<SeP>2025-03-12 00:07:12<SeP>2025-03-12 00:10:48<SeP>2025-03-12 00:14:24<SeP>2025-03-12 00:18:00<SeP>2025-03-12 00:21:36<SeP>2025-03-12 00:25:12<SeP>2025-03-12 00:28:48<SeP>2025-03-12 00:32:24<SeP>2025-03-12 00:36:00<SeP>2025-03-12 00:39:36<SeP>2025-03-12 00:43:12<SeP>2025-03-12 00:46:48<SeP>2025-03-12 00:50:24<SeP>2025-03-12 00:54:00<SeP>2025-03-12 00:57:36<SeP>2025-03-12 01:01:12<SeP>2025-03-12 01:04:48<SeP>2025-03-12 01:08:24<SeP>2025-03-12 01:12:00<SeP>2025-03-12 01:15:36<SeP>2025-03-12 01:19:12<SeP>2025-03-12 01:22:48<SeP>2025-03-12 01:26:24<SeP>2025-03-12 01:30:00<SeP>2025-03-12 01:33:36<SeP>2025-03-12 01:37:12<SeP>2025-03-12 01:40:48<SeP>2025-03-12 01:44:24<SeP>2025-03-12 01:48:00<SeP>2025-03-12 01:51:36<SeP>2025-03-12 01:55:12<SeP>2025-03-12 01:58:48<SeP>2025-03-12 02:02:24<SeP>2025-03-12 02:06:00<SeP>2025-03-12 02:09:36<SeP>2025-03-12 02:13:12<SeP>2025-03-12 02:16:48<SeP>2025-03-12 02:20:24<SeP>2025-03-12 02:24:00<SeP>2025-03-12 02:27:36<SeP>2025-03-12 02:31:12<SeP>2025-03-12 02:34:48<SeP>2025-03-12 02:38:24<SeP>2025-03-12 02:42:00<SeP>2025-03-12 02:45:36<SeP>2025-03-12 02:49:12<SeP>2025-03-12 02:52:48<SeP>2025-03-12 02:56:24<SeP>2025-03-12 03:00:00<SeP>2025-03-12 03:03:36<SeP>2025-03-12 03:07:12<SeP>2025-03-12 03:10:48<SeP>2025-03-12 03:14:24<SeP>2025-03-12 03:18:00<SeP>2025-03-12 03:21:36<SeP>2025-03-12 03:25:12<SeP>2025-03-12 03:28:48<SeP>2025-03-12 03:32:24<SeP>2025-03-12 03:36:00<SeP>2025-03-12 03:39:36<SeP>2025-03-12 03:43:12<SeP>2025-03-12 03:46:48<SeP>2025-03-12 03:50:24<SeP>2025-03-12 03:54:00<SeP>2025-03-12 03:57:36<SeP>2025-03-12 04:01:12<SeP>2025-03-12 04:04:48<SeP>2025-03-12 04:08:24<SeP>2025-03-12 04:12:00<SeP>2025-03-12 04:15:36<SeP>2025-03-12 04:19:12<SeP>2025-03-12 04:22:48<SeP>2025-03-12 04:26:24<SeP>2025-03-12 04:30:00<SeP>2025-03-12 04:33:36<SeP>2025-03-12 04:37:12<SeP>2025-03-12 04:40:48<SeP>2025-03-12 04:44:24<SeP>2025-03-12 04:48:00<SeP>2025-03-12 04:51:36<SeP>2025-03-12 04:55:12<SeP>2025-03-12 04:58:48<SeP>2025-03-12 05:02:24<SeP>2025-03-12 05:06:00<SeP>2025-03-12 05:09:36<SeP>2025-03-12 05:13:12<SeP>2025-03-12 05:16:48<SeP>2025-03-12 05:20:24<SeP>2025-03-12 05:24:00<SeP>2025-03-12 05:27:36<SeP>2025-03-12 05:31:12<SeP>2025-03-12 05:34:48<SeP>2025-03-12 05:38:24<SeP>2025-03-12 05:42:00<SeP>2025-03-12 05:45:36<SeP>2025-03-12 05:49:12<SeP>2025-03-12 05:52:48<SeP>2025-03-12 05:56:24<SeP>2025-03-12 06:00:00<SeP>2025-03-12 06:03:36<SeP>2025-03-12 06:07:12<SeP>2025-03-12 06:10:48<SeP>2025-03-12 06:14:24<SeP>2025-03-12 06:18:00<SeP>2025-03-12 06:21:36<SeP>2025-03-12 06:25:12<SeP>2025-03-12 06:28:48<SeP>2025-03-12 06:32:24<SeP>2025-03-12 06:36:00<SeP>2025-03-12 06:39:36<SeP>2025-03-12 06:43:12<SeP>2025-03-12 06:46:48<SeP>2025-03-12 06:50:24<SeP>2025-03-12 06:54:00<SeP>2025-03-12 06:57:36<SeP>2025-03-12 07:01:12<SeP>2025-03-12 07:04:48<SeP>2025-03-12 07:08:24<SeP>2025-03-12 07:12:00<SeP>2025-03-12 07:15:36<SeP>2025-03-12 07:19:12<SeP>2025-03-12 07:22:48<SeP>2025-03-12 07:26:24<SeP>2025-03-12 07:30:00<SeP>2025-03-12 07:33:36<SeP>2025-03-12 07:37:12<SeP>2025-03-12 07:40:48<SeP>2025-03-12 07:44:24<SeP>2025-03-12 07:48:00<SeP>2025-03-12 07:51:36<SeP>2025-03-12 07:55:12<SeP>2025-03-12 07:58:48<SeP>2025-03-12 08:02:24<SeP>2025-03-12 08:06:00<SeP>2025-03-12 08:09:36<SeP>2025-03-12 08:13:12<SeP>2025-03-12 08:16:48<SeP>2025-03-12 08:20:24<SeP>2025-03-12 08:24:00<SeP>2025-03-12 08:27:36<SeP>2025-03-12 08:31:12<SeP>2025-03-12 08:34:48<SeP>2025-03-12 08:38:24<SeP>2025-03-12 08:42:00<SeP>2025-03-12 08:45:36<SeP>2025-03-12 08:49:12<SeP>2025-03-12 08:52:48<SeP>2025-03-12 08:56:24<SeP>2025-03-12 09:00:00<SeP>2025-03-12 09:03:36<SeP>2025-03-12 09:07:12<SeP>2025-03-12 09:10:48<SeP>2025-03-12 09:14:24<SeP>2025-03-12 09:18:00<SeP>2025-03-12 09:21:36<SeP>2025-03-12 09:25:12<SeP>2025-03-12 09:28:48<SeP>2025-03-12 09:32:24<SeP>2025-03-12 09:36:00<SeP>2025-03-12 09:39:36<SeP>2025-03-12 09:43:12<SeP>2025-03-12 09:46:48<SeP>2025-03-12 09:50:24<SeP>2025-03-12 09:54:00<SeP>2025-03-12 09:57:36<SeP>2025-03-12 10:01:12<SeP>2025-03-12 10:04:48<SeP>2025-03-12 10:08:24<SeP>2025-03-12 10:12:00<SeP>2025-03-12 10:15:36<SeP>2025-03-12 10:19:12<SeP>2025-03-12 10:22:48<SeP>2025-03-12 10:26:24<SeP>2025-03-12 10:30:00<SeP>2025-03-12 10:33:36<SeP>2025-03-12 10:37:12<SeP>2025-03-12 10:40:48<SeP>2025-03-12 10:44:24<SeP>2025-03-12 10:48:00<SeP>2025-03-12 10:51:36<SeP>2025-03-12 10:55:12<SeP>2025-03-12 10:58:48<SeP>2025-03-12 11:02:24<SeP>2025-03-12 11:06:00<SeP>2025-03-12 11:09:36<SeP>2025-03-12 11:13:12<SeP>2025-03-12 11:16:48<SeP>2025-03-12 11:20:24<SeP>2025-03-12 11:24:00<SeP>2025-03-12 11:27:36<SeP>2025-03-12 11:31:12<SeP>2025-03-12 11:34:48<SeP>2025-03-12 11:38:24<SeP>2025-03-12 11:42:00<SeP>2025-03-12 11:45:36<SeP>2025-03-12 11:49:12<SeP>2025-03-12 11:52:48<SeP>2025-03-12 11:56:24<SeP>2025-03-12 12:00:00<SeP>2025-03-12 12:03:36<SeP>2025-03-12 12:07:12<SeP>2025-03-12 12:10:48<SeP>2025-03-12 12:14:24<SeP>2025-03-12 12:18:00<SeP>2025-03-12 12:21:36<SeP>2025-03-12 12:25:12<SeP>2025-03-12 12:28:48<SeP>2025-03-12 12:32:24<SeP>2025-03-12 12:36:00<SeP>2025-03-12 12:39:36<SeP>2025-03-12 12:43:12<SeP>2025-03-12 12:46:48<SeP>2025-03-12 12:50:24<SeP>2025-03-12 12:54:00<SeP>2025-03-12 12:57:36<SeP>2025-03-12 13:01:12<SeP>2025-03-12 13:04:48<SeP>2025-03-12 13:08:24<SeP>2025-03-12 13:12:00<SeP>2025-03-12 13:15:36<SeP>2025-03-12 13:19:12<SeP>2025-03-12 13:22:48<SeP>2025-03-12 13:26:24<SeP>2025-03-12 13:30:00<SeP>2025-03-12 13:33:36<SeP>2025-03-12 13:37:12<SeP>2025-03-12 13:40:48<SeP>2025-03-12 13:44:24<SeP>2025-03-12 13:48:00<SeP>2025-03-12 13:51:36<SeP>2025-03-12 13:55:12<SeP>2025-03-12 13:58:48<SeP>2025-03-12 14:02:24<SeP>2025-03-12 14:06:00<SeP>2025-03-12 14:09:36<SeP>2025-03-12 14:13:12<SeP>2025-03-12 14:16:48<SeP>2025-03-12 14:20:24<SeP>2025-03-12 14:24:00<SeP>2025-03-12 14:27:36<SeP>2025-03-12 14:31:12<SeP>2025-03-12 14:34:48<SeP>2025-03-12 14:38:24<SeP>2025-03-12 14:42:00<SeP>2025-03-12 14:45:36<SeP>2025-03-12 14:49:12<SeP>2025-03-12 14:52:48<SeP>2025-03-12 14:56:24<SeP>2025-03-12 15:00:00<SeP>2025-03-12 15:03:36<SeP>2025-03-12 15:07:12<SeP>2025-03-12 15:10:48<SeP>2025-03-12 15:14:24<SeP>2025-03-12 15:18:00<SeP>2025-03-12 15:21:36<SeP>2025-03-12 15:25:12<SeP>2025-03-12 15:28:48<SeP>2025-03-12 15:32:24<SeP>2025-03-12 15:36:00<SeP>2025-03-12 15:39:36<SeP>2025-03-12 15:43:12<SeP>2025-03-12 15:46:48<SeP>2025-03-12 15:50:24<SeP>2025-03-12 15:54:00<SeP>2025-03-12 15:57:36<SeP>2025-03-12 16:01:12<SeP>2025-03-12 16:04:48<SeP>2025-03-12 16:08:24<SeP>2025-03-12 16:12:00<SeP>2025-03-12 16:15:36<SeP>2025-03-12 16:19:12<SeP>2025-03-12 16:22:48<SeP>2025-03-12 16:26:24<SeP>2025-03-12 16:30:00<SeP>2025-03-12 16:33:36<SeP>2025-03-12 16:37:12<SeP>2025-03-12 16:40:48<SeP>2025-03-12 16:44:24<SeP>2025-03-12 16:48:00<SeP>2025-03-12 16:51:36<SeP>2025-03-12 16:55:12<SeP>2025-03-12 16:58:48<SeP>2025-03-12 17:02:24<SeP>2025-03-12 17:06:00<SeP>2025-03-12 17:09:36<SeP>2025-03-12 17:13:12<SeP>2025-03-12 17:16:48<SeP>2025-03-12 17:20:24<SeP>2025-03-12 17:24:00<SeP>2025-03-12 17:27:36<SeP>2025-03-12 17:31:12<SeP>2025-03-12 17:34:48<SeP>2025-03-12 17:38:24<SeP>2025-03-12 17:42:00<SeP>2025-03-12 17:45:36<SeP>2025-03-12 17:49:12<SeP>2025-03-12 17:52:48<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:00:00<SeP>2025-03-12 18:03:36<SeP>2025-03-12 18:07:12<SeP>2025-03-12 18:10:48<SeP>2025-03-12 18:14:24<SeP>2025-03-12 18:18:00<SeP>2025-03-12 18:21:36<SeP>2025-03-12 18:25:12<SeP>2025-03-12 18:28:48<SeP>2025-03-12 18:32:24<SeP>2025-03-12 18:36:00<SeP>2025-03-12 18:39:36<SeP>2025-03-12 18:43:12<SeP>2025-03-12 18:46:48<SeP>2025-03-12 18:50:24<SeP>2025-03-12 18:54:00<SeP>2025-03-12 18:57:36<SeP>2025-03-12 19:01:12<SeP>2025-03-12 19:04:48<SeP>2025-03-12 19:08:24<SeP>2025-03-12 19:12:00<SeP>2025-03-12 19:15:36<SeP>2025-03-12 19:19:12<SeP>2025-03-12 19:22:48<SeP>2025-03-12 19:26:24<SeP>2025-03-12 19:30:00<SeP>2025-03-12 19:33:36<SeP>2025-03-12 19:37:12<SeP>2025-03-12 19:40:48<SeP>2025-03-12 19:44:24<SeP>2025-03-12 19:48:00<SeP>2025-03-12 19:51:36<SeP>2025-03-12 19:55:12<SeP>2025-03-12 19:58:48<SeP>2025-03-12 20:02:24<SeP>2025-03-12 20:06:00<SeP>2025-03-12 20:09:36<SeP>2025-03-12 20:13:12<SeP>2025-03-12 20:16:48<SeP>2025-03-12 20:20:24<SeP>2025-03-12 20:24:00<SeP>2025-03-12 20:27:36<SeP>2025-03-12 20:31:12<SeP>2025-03-12 20:34:48<SeP>2025-03-12 20:38:24<SeP>2025-03-12 20:42:00<SeP>2025-03-12 20:45:36<SeP>2025-03-12 20:49:12<SeP>2025-03-12 20:52:48<SeP>2025-03-12 20:56:24<SeP>2025-03-12 21:00:00<SeP>2025-03-12 21:03:36<SeP>2025-03-12 21:07:12<SeP>2025-03-12 21:10:48<SeP>2025-03-12 21:14:24<SeP>2025-03-12 21:18:00<SeP>2025-03-12 21:21:36<SeP>2025-03-12 21:25:12<SeP>2025-03-12 21:28:48<SeP>2025-03-12 21:32:24<SeP>2025-03-12 21:36:00<SeP>2025-03-12 21:39:36<SeP>2025-03-12 21:43:12<SeP>2025-03-12 21:46:48<SeP>2025-03-12 21:50:24<SeP>2025-03-12 21:54:00<SeP>2025-03-12 21:57:36<SeP>2025-03-12 22:01:12<SeP>2025-03-12 22:04:48<SeP>2025-03-12 22:08:24<SeP>2025-03-12 22:12:00<SeP>2025-03-12 22:15:36<SeP>2025-03-12 22:19:12<SeP>2025-03-12 22:22:48<SeP>2025-03-12 22:26:24<SeP>2025-03-12 22:30:00<SeP>2025-03-12 22:33:36<SeP>2025-03-12 22:37:12<SeP>2025-03-12 22:40:48<SeP>2025-03-12 22:44:24<SeP>2025-03-12 22:48:00<SeP>2025-03-12 22:51:36<SeP>2025-03-12 22:55:12<SeP>2025-03-12 22:58:48<SeP>2025-03-12 23:02:24<SeP>2025-03-12 23:06:00<SeP>2025-03-12 23:09:36<SeP>2025-03-12 23:13:12<SeP>2025-03-12 23:16:48<SeP>2025-03-12 23:20:24<SeP>2025-03-12 23:24:00<SeP>2025-03-12 23:27:36<SeP>2025-03-12 23:31:12<SeP>2025-03-12 23:34:48<SeP>2025-03-12 23:38:24<SeP>2025-03-12 23:42:00<SeP>2025-03-12 23:45:36<SeP>2025-03-12 23:49:12<SeP>2025-03-12 23:52:48<SeP>2025-03-12 23:56:24";
  const itemLabel       = "Escaneos";
  const itemData        = "8<SeP>15<SeP>20<SeP>15<SeP>2<SeP>2<SeP>5<SeP>4<SeP>1<SeP>1<SeP>0<SeP>7<SeP>2<SeP>0<SeP>2<SeP>1<SeP>2<SeP>4<SeP>1<SeP>3<SeP>0<SeP>2<SeP>3<SeP>1<SeP>1<SeP>1<SeP>2<SeP>1<SeP>0<SeP>1<SeP>1<SeP>0<SeP>4<SeP>1<SeP>1<SeP>2<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>1<SeP>0<SeP>4<SeP>2<SeP>1<SeP>4<SeP>0<SeP>0<SeP>2<SeP>3<SeP>1<SeP>4<SeP>2<SeP>2<SeP>10<SeP>0<SeP>4<SeP>3<SeP>3<SeP>1<SeP>10<SeP>9<SeP>4<SeP>8<SeP>13<SeP>1<SeP>1<SeP>6<SeP>0<SeP>1<SeP>2<SeP>2<SeP>4<SeP>2<SeP>1<SeP>0<SeP>3<SeP>4<SeP>3<SeP>0<SeP>5<SeP>2<SeP>1<SeP>1<SeP>6<SeP>1<SeP>0<SeP>1<SeP>3<SeP>5<SeP>1<SeP>2<SeP>0<SeP>2<SeP>1<SeP>2<SeP>0<SeP>2<SeP>2<SeP>0<SeP>11<SeP>3<SeP>1<SeP>1<SeP>3<SeP>4<SeP>4<SeP>2<SeP>1<SeP>0<SeP>0<SeP>6<SeP>4<SeP>1<SeP>1<SeP>19<SeP>10<SeP>1<SeP>2<SeP>1<SeP>0<SeP>3<SeP>1<SeP>1<SeP>0<SeP>2<SeP>2<SeP>2<SeP>1<SeP>0<SeP>3<SeP>1<SeP>2<SeP>2<SeP>1<SeP>2<SeP>1<SeP>0<SeP>2<SeP>3<SeP>0<SeP>14<SeP>1<SeP>1<SeP>3<SeP>1<SeP>1<SeP>5<SeP>1<SeP>8<SeP>17<SeP>3<SeP>1<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>3<SeP>0<SeP>2<SeP>0<SeP>2<SeP>3<SeP>5<SeP>2<SeP>1<SeP>2<SeP>0<SeP>1<SeP>0<SeP>1<SeP>1<SeP>2<SeP>2<SeP>12<SeP>0<SeP>1<SeP>0<SeP>3<SeP>1<SeP>0<SeP>2<SeP>4<SeP>5<SeP>6<SeP>1<SeP>7<SeP>1<SeP>9<SeP>4<SeP>7<SeP>12<SeP>5<SeP>3<SeP>10<SeP>4<SeP>3<SeP>1<SeP>14<SeP>2<SeP>0<SeP>2<SeP>2<SeP>2<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>2<SeP>0<SeP>0<SeP>1<SeP>1<SeP>0<SeP>0<SeP>1<SeP>0<SeP>1<SeP>5<SeP>0<SeP>2<SeP>3<SeP>2<SeP>2<SeP>3<SeP>5<SeP>8<SeP>1<SeP>1<SeP>0<SeP>2<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>0<SeP>2<SeP>3<SeP>5<SeP>0<SeP>1<SeP>1<SeP>3<SeP>14<SeP>12<SeP>1<SeP>1<SeP>2<SeP>9<SeP>2<SeP>0<SeP>7<SeP>13<SeP>19<SeP>2<SeP>0<SeP>2<SeP>2<SeP>0<SeP>0<SeP>0<SeP>5<SeP>2<SeP>1<SeP>1<SeP>2<SeP>1<SeP>4<SeP>1<SeP>2<SeP>2<SeP>1<SeP>12<SeP>35<SeP>6<SeP>1<SeP>1<SeP>4<SeP>5<SeP>3<SeP>3<SeP>2<SeP>6<SeP>4<SeP>30<SeP>17<SeP>3<SeP>3<SeP>1<SeP>10<SeP>1<SeP>1<SeP>1<SeP>3<SeP>0<SeP>1<SeP>0<SeP>9<SeP>2<SeP>1<SeP>2<SeP>4<SeP>3<SeP>1<SeP>1<SeP>3<SeP>1<SeP>2<SeP>7<SeP>1<SeP>1<SeP>1<SeP>2<SeP>5<SeP>17<SeP>8<SeP>1<SeP>4<SeP>0<SeP>0<SeP>1<SeP>4<SeP>1<SeP>0<SeP>1<SeP>3<SeP>1<SeP>0<SeP>1<SeP>4<SeP>3<SeP>2<SeP>1<SeP>3<SeP>2<SeP>7<SeP>5<SeP>18<SeP>5<SeP>7<SeP>2<SeP>0<SeP>1<SeP>1<SeP>3<SeP>8<SeP>6<SeP>0<SeP>3<SeP>5<SeP>0<SeP>10<SeP>20<SeP>6<SeP>2<SeP>0<SeP>5<SeP>5<SeP>0<SeP>1<SeP>6<SeP>3<SeP>2<SeP>4<SeP>9<SeP>1<SeP>3<SeP>0<SeP>1<SeP>4<SeP>4<SeP>9<SeP>2<SeP>0<SeP>6<SeP>3<SeP>0<SeP>1<SeP>3<SeP>13";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-03-12 00:00:00<SeP>2025-03-12 00:03:36<SeP>2025-03-12 00:07:12<SeP>2025-03-12 00:10:48<SeP>2025-03-12 00:14:24<SeP>2025-03-12 00:18:00<SeP>2025-03-12 00:21:36<SeP>2025-03-12 00:25:12<SeP>2025-03-12 00:28:48<SeP>2025-03-12 00:32:24<SeP>2025-03-12 00:36:00<SeP>2025-03-12 00:39:36<SeP>2025-03-12 00:43:12<SeP>2025-03-12 00:46:48<SeP>2025-03-12 00:50:24<SeP>2025-03-12 00:54:00<SeP>2025-03-12 00:57:36<SeP>2025-03-12 01:01:12<SeP>2025-03-12 01:04:48<SeP>2025-03-12 01:08:24<SeP>2025-03-12 01:12:00<SeP>2025-03-12 01:15:36<SeP>2025-03-12 01:19:12<SeP>2025-03-12 01:22:48<SeP>2025-03-12 01:26:24<SeP>2025-03-12 01:30:00<SeP>2025-03-12 01:33:36<SeP>2025-03-12 01:37:12<SeP>2025-03-12 01:40:48<SeP>2025-03-12 01:44:24<SeP>2025-03-12 01:48:00<SeP>2025-03-12 01:51:36<SeP>2025-03-12 01:55:12<SeP>2025-03-12 01:58:48<SeP>2025-03-12 02:02:24<SeP>2025-03-12 02:06:00<SeP>2025-03-12 02:09:36<SeP>2025-03-12 02:13:12<SeP>2025-03-12 02:16:48<SeP>2025-03-12 02:20:24<SeP>2025-03-12 02:24:00<SeP>2025-03-12 02:27:36<SeP>2025-03-12 02:31:12<SeP>2025-03-12 02:34:48<SeP>2025-03-12 02:38:24<SeP>2025-03-12 02:42:00<SeP>2025-03-12 02:45:36<SeP>2025-03-12 02:49:12<SeP>2025-03-12 02:52:48<SeP>2025-03-12 02:56:24<SeP>2025-03-12 03:00:00<SeP>2025-03-12 03:03:36<SeP>2025-03-12 03:07:12<SeP>2025-03-12 03:10:48<SeP>2025-03-12 03:14:24<SeP>2025-03-12 03:18:00<SeP>2025-03-12 03:21:36<SeP>2025-03-12 03:25:12<SeP>2025-03-12 03:28:48<SeP>2025-03-12 03:32:24<SeP>2025-03-12 03:36:00<SeP>2025-03-12 03:39:36<SeP>2025-03-12 03:43:12<SeP>2025-03-12 03:46:48<SeP>2025-03-12 03:50:24<SeP>2025-03-12 03:54:00<SeP>2025-03-12 03:57:36<SeP>2025-03-12 04:01:12<SeP>2025-03-12 04:04:48<SeP>2025-03-12 04:08:24<SeP>2025-03-12 04:12:00<SeP>2025-03-12 04:15:36<SeP>2025-03-12 04:19:12<SeP>2025-03-12 04:22:48<SeP>2025-03-12 04:26:24<SeP>2025-03-12 04:30:00<SeP>2025-03-12 04:33:36<SeP>2025-03-12 04:37:12<SeP>2025-03-12 04:40:48<SeP>2025-03-12 04:44:24<SeP>2025-03-12 04:48:00<SeP>2025-03-12 04:51:36<SeP>2025-03-12 04:55:12<SeP>2025-03-12 04:58:48<SeP>2025-03-12 05:02:24<SeP>2025-03-12 05:06:00<SeP>2025-03-12 05:09:36<SeP>2025-03-12 05:13:12<SeP>2025-03-12 05:16:48<SeP>2025-03-12 05:20:24<SeP>2025-03-12 05:24:00<SeP>2025-03-12 05:27:36<SeP>2025-03-12 05:31:12<SeP>2025-03-12 05:34:48<SeP>2025-03-12 05:38:24<SeP>2025-03-12 05:42:00<SeP>2025-03-12 05:45:36<SeP>2025-03-12 05:49:12<SeP>2025-03-12 05:52:48<SeP>2025-03-12 05:56:24<SeP>2025-03-12 06:00:00<SeP>2025-03-12 06:03:36<SeP>2025-03-12 06:07:12<SeP>2025-03-12 06:10:48<SeP>2025-03-12 06:14:24<SeP>2025-03-12 06:18:00<SeP>2025-03-12 06:21:36<SeP>2025-03-12 06:25:12<SeP>2025-03-12 06:28:48<SeP>2025-03-12 06:32:24<SeP>2025-03-12 06:36:00<SeP>2025-03-12 06:39:36<SeP>2025-03-12 06:43:12<SeP>2025-03-12 06:46:48<SeP>2025-03-12 06:50:24<SeP>2025-03-12 06:54:00<SeP>2025-03-12 06:57:36<SeP>2025-03-12 07:01:12<SeP>2025-03-12 07:04:48<SeP>2025-03-12 07:08:24<SeP>2025-03-12 07:12:00<SeP>2025-03-12 07:15:36<SeP>2025-03-12 07:19:12<SeP>2025-03-12 07:22:48<SeP>2025-03-12 07:26:24<SeP>2025-03-12 07:30:00<SeP>2025-03-12 07:33:36<SeP>2025-03-12 07:37:12<SeP>2025-03-12 07:40:48<SeP>2025-03-12 07:44:24<SeP>2025-03-12 07:48:00<SeP>2025-03-12 07:51:36<SeP>2025-03-12 07:55:12<SeP>2025-03-12 07:58:48<SeP>2025-03-12 08:02:24<SeP>2025-03-12 08:06:00<SeP>2025-03-12 08:09:36<SeP>2025-03-12 08:13:12<SeP>2025-03-12 08:16:48<SeP>2025-03-12 08:20:24<SeP>2025-03-12 08:24:00<SeP>2025-03-12 08:27:36<SeP>2025-03-12 08:31:12<SeP>2025-03-12 08:34:48<SeP>2025-03-12 08:38:24<SeP>2025-03-12 08:42:00<SeP>2025-03-12 08:45:36<SeP>2025-03-12 08:49:12<SeP>2025-03-12 08:52:48<SeP>2025-03-12 08:56:24<SeP>2025-03-12 09:00:00<SeP>2025-03-12 09:03:36<SeP>2025-03-12 09:07:12<SeP>2025-03-12 09:10:48<SeP>2025-03-12 09:14:24<SeP>2025-03-12 09:18:00<SeP>2025-03-12 09:21:36<SeP>2025-03-12 09:25:12<SeP>2025-03-12 09:28:48<SeP>2025-03-12 09:32:24<SeP>2025-03-12 09:36:00<SeP>2025-03-12 09:39:36<SeP>2025-03-12 09:43:12<SeP>2025-03-12 09:46:48<SeP>2025-03-12 09:50:24<SeP>2025-03-12 09:54:00<SeP>2025-03-12 09:57:36<SeP>2025-03-12 10:01:12<SeP>2025-03-12 10:04:48<SeP>2025-03-12 10:08:24<SeP>2025-03-12 10:12:00<SeP>2025-03-12 10:15:36<SeP>2025-03-12 10:19:12<SeP>2025-03-12 10:22:48<SeP>2025-03-12 10:26:24<SeP>2025-03-12 10:30:00<SeP>2025-03-12 10:33:36<SeP>2025-03-12 10:37:12<SeP>2025-03-12 10:40:48<SeP>2025-03-12 10:44:24<SeP>2025-03-12 10:48:00<SeP>2025-03-12 10:51:36<SeP>2025-03-12 10:55:12<SeP>2025-03-12 10:58:48<SeP>2025-03-12 11:02:24<SeP>2025-03-12 11:06:00<SeP>2025-03-12 11:09:36<SeP>2025-03-12 11:13:12<SeP>2025-03-12 11:16:48<SeP>2025-03-12 11:20:24<SeP>2025-03-12 11:24:00<SeP>2025-03-12 11:27:36<SeP>2025-03-12 11:31:12<SeP>2025-03-12 11:34:48<SeP>2025-03-12 11:38:24<SeP>2025-03-12 11:42:00<SeP>2025-03-12 11:45:36<SeP>2025-03-12 11:49:12<SeP>2025-03-12 11:52:48<SeP>2025-03-12 11:56:24<SeP>2025-03-12 12:00:00<SeP>2025-03-12 12:03:36<SeP>2025-03-12 12:07:12<SeP>2025-03-12 12:10:48<SeP>2025-03-12 12:14:24<SeP>2025-03-12 12:18:00<SeP>2025-03-12 12:21:36<SeP>2025-03-12 12:25:12<SeP>2025-03-12 12:28:48<SeP>2025-03-12 12:32:24<SeP>2025-03-12 12:36:00<SeP>2025-03-12 12:39:36<SeP>2025-03-12 12:43:12<SeP>2025-03-12 12:46:48<SeP>2025-03-12 12:50:24<SeP>2025-03-12 12:54:00<SeP>2025-03-12 12:57:36<SeP>2025-03-12 13:01:12<SeP>2025-03-12 13:04:48<SeP>2025-03-12 13:08:24<SeP>2025-03-12 13:12:00<SeP>2025-03-12 13:15:36<SeP>2025-03-12 13:19:12<SeP>2025-03-12 13:22:48<SeP>2025-03-12 13:26:24<SeP>2025-03-12 13:30:00<SeP>2025-03-12 13:33:36<SeP>2025-03-12 13:37:12<SeP>2025-03-12 13:40:48<SeP>2025-03-12 13:44:24<SeP>2025-03-12 13:48:00<SeP>2025-03-12 13:51:36<SeP>2025-03-12 13:55:12<SeP>2025-03-12 13:58:48<SeP>2025-03-12 14:02:24<SeP>2025-03-12 14:06:00<SeP>2025-03-12 14:09:36<SeP>2025-03-12 14:13:12<SeP>2025-03-12 14:16:48<SeP>2025-03-12 14:20:24<SeP>2025-03-12 14:24:00<SeP>2025-03-12 14:27:36<SeP>2025-03-12 14:31:12<SeP>2025-03-12 14:34:48<SeP>2025-03-12 14:38:24<SeP>2025-03-12 14:42:00<SeP>2025-03-12 14:45:36<SeP>2025-03-12 14:49:12<SeP>2025-03-12 14:52:48<SeP>2025-03-12 14:56:24<SeP>2025-03-12 15:00:00<SeP>2025-03-12 15:03:36<SeP>2025-03-12 15:07:12<SeP>2025-03-12 15:10:48<SeP>2025-03-12 15:14:24<SeP>2025-03-12 15:18:00<SeP>2025-03-12 15:21:36<SeP>2025-03-12 15:25:12<SeP>2025-03-12 15:28:48<SeP>2025-03-12 15:32:24<SeP>2025-03-12 15:36:00<SeP>2025-03-12 15:39:36<SeP>2025-03-12 15:43:12<SeP>2025-03-12 15:46:48<SeP>2025-03-12 15:50:24<SeP>2025-03-12 15:54:00<SeP>2025-03-12 15:57:36<SeP>2025-03-12 16:01:12<SeP>2025-03-12 16:04:48<SeP>2025-03-12 16:08:24<SeP>2025-03-12 16:12:00<SeP>2025-03-12 16:15:36<SeP>2025-03-12 16:19:12<SeP>2025-03-12 16:22:48<SeP>2025-03-12 16:26:24<SeP>2025-03-12 16:30:00<SeP>2025-03-12 16:33:36<SeP>2025-03-12 16:37:12<SeP>2025-03-12 16:40:48<SeP>2025-03-12 16:44:24<SeP>2025-03-12 16:48:00<SeP>2025-03-12 16:51:36<SeP>2025-03-12 16:55:12<SeP>2025-03-12 16:58:48<SeP>2025-03-12 17:02:24<SeP>2025-03-12 17:06:00<SeP>2025-03-12 17:09:36<SeP>2025-03-12 17:13:12<SeP>2025-03-12 17:16:48<SeP>2025-03-12 17:20:24<SeP>2025-03-12 17:24:00<SeP>2025-03-12 17:27:36<SeP>2025-03-12 17:31:12<SeP>2025-03-12 17:34:48<SeP>2025-03-12 17:38:24<SeP>2025-03-12 17:42:00<SeP>2025-03-12 17:45:36<SeP>2025-03-12 17:49:12<SeP>2025-03-12 17:52:48<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:00:00<SeP>2025-03-12 18:03:36<SeP>2025-03-12 18:07:12<SeP>2025-03-12 18:10:48<SeP>2025-03-12 18:14:24<SeP>2025-03-12 18:18:00<SeP>2025-03-12 18:21:36<SeP>2025-03-12 18:25:12<SeP>2025-03-12 18:28:48<SeP>2025-03-12 18:32:24<SeP>2025-03-12 18:36:00<SeP>2025-03-12 18:39:36<SeP>2025-03-12 18:43:12<SeP>2025-03-12 18:46:48<SeP>2025-03-12 18:50:24<SeP>2025-03-12 18:54:00<SeP>2025-03-12 18:57:36<SeP>2025-03-12 19:01:12<SeP>2025-03-12 19:04:48<SeP>2025-03-12 19:08:24<SeP>2025-03-12 19:12:00<SeP>2025-03-12 19:15:36<SeP>2025-03-12 19:19:12<SeP>2025-03-12 19:22:48<SeP>2025-03-12 19:26:24<SeP>2025-03-12 19:30:00<SeP>2025-03-12 19:33:36<SeP>2025-03-12 19:37:12<SeP>2025-03-12 19:40:48<SeP>2025-03-12 19:44:24<SeP>2025-03-12 19:48:00<SeP>2025-03-12 19:51:36<SeP>2025-03-12 19:55:12<SeP>2025-03-12 19:58:48<SeP>2025-03-12 20:02:24<SeP>2025-03-12 20:06:00<SeP>2025-03-12 20:09:36<SeP>2025-03-12 20:13:12<SeP>2025-03-12 20:16:48<SeP>2025-03-12 20:20:24<SeP>2025-03-12 20:24:00<SeP>2025-03-12 20:27:36<SeP>2025-03-12 20:31:12<SeP>2025-03-12 20:34:48<SeP>2025-03-12 20:38:24<SeP>2025-03-12 20:42:00<SeP>2025-03-12 20:45:36<SeP>2025-03-12 20:49:12<SeP>2025-03-12 20:52:48<SeP>2025-03-12 20:56:24<SeP>2025-03-12 21:00:00<SeP>2025-03-12 21:03:36<SeP>2025-03-12 21:07:12<SeP>2025-03-12 21:10:48<SeP>2025-03-12 21:14:24<SeP>2025-03-12 21:18:00<SeP>2025-03-12 21:21:36<SeP>2025-03-12 21:25:12<SeP>2025-03-12 21:28:48<SeP>2025-03-12 21:32:24<SeP>2025-03-12 21:36:00<SeP>2025-03-12 21:39:36<SeP>2025-03-12 21:43:12<SeP>2025-03-12 21:46:48<SeP>2025-03-12 21:50:24<SeP>2025-03-12 21:54:00<SeP>2025-03-12 21:57:36<SeP>2025-03-12 22:01:12<SeP>2025-03-12 22:04:48<SeP>2025-03-12 22:08:24<SeP>2025-03-12 22:12:00<SeP>2025-03-12 22:15:36<SeP>2025-03-12 22:19:12<SeP>2025-03-12 22:22:48<SeP>2025-03-12 22:26:24<SeP>2025-03-12 22:30:00<SeP>2025-03-12 22:33:36<SeP>2025-03-12 22:37:12<SeP>2025-03-12 22:40:48<SeP>2025-03-12 22:44:24<SeP>2025-03-12 22:48:00<SeP>2025-03-12 22:51:36<SeP>2025-03-12 22:55:12<SeP>2025-03-12 22:58:48<SeP>2025-03-12 23:02:24<SeP>2025-03-12 23:06:00<SeP>2025-03-12 23:09:36<SeP>2025-03-12 23:13:12<SeP>2025-03-12 23:16:48<SeP>2025-03-12 23:20:24<SeP>2025-03-12 23:24:00<SeP>2025-03-12 23:27:36<SeP>2025-03-12 23:31:12<SeP>2025-03-12 23:34:48<SeP>2025-03-12 23:38:24<SeP>2025-03-12 23:42:00<SeP>2025-03-12 23:45:36<SeP>2025-03-12 23:49:12<SeP>2025-03-12 23:52:48<SeP>2025-03-12 23:56:24";
  const itemLabel       = "Ataques";
  const itemData        = "5<SeP>2<SeP>0<SeP>1<SeP>2<SeP>2<SeP>3<SeP>1<SeP>1<SeP>1<SeP>3<SeP>3<SeP>1<SeP>4<SeP>2<SeP>2<SeP>3<SeP>1<SeP>1<SeP>0<SeP>9<SeP>12<SeP>1<SeP>0<SeP>0<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>4<SeP>6<SeP>12<SeP>17<SeP>17<SeP>14<SeP>16<SeP>18<SeP>11<SeP>13<SeP>12<SeP>3<SeP>4<SeP>4<SeP>5<SeP>2<SeP>4<SeP>1<SeP>0<SeP>0<SeP>3<SeP>4<SeP>4<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>4<SeP>3<SeP>1<SeP>0<SeP>0<SeP>0<SeP>2<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>0<SeP>1<SeP>2<SeP>0<SeP>0<SeP>0<SeP>1<SeP>1<SeP>0<SeP>0<SeP>0<SeP>1<SeP>0<SeP>0<SeP>1<SeP>0<SeP>1<SeP>4<SeP>2<SeP>1<SeP>0<SeP>2<SeP>0<SeP>0<SeP>2<SeP>0<SeP>0<SeP>0<SeP>2<SeP>0<SeP>5<SeP>16<SeP>20<SeP>9<SeP>10<SeP>7<SeP>8<SeP>9<SeP>0<SeP>0<SeP>3<SeP>0<SeP>2<SeP>3<SeP>0<SeP>2<SeP>1<SeP>1<SeP>1<SeP>0<SeP>0<SeP>2<SeP>0<SeP>1<SeP>1<SeP>3<SeP>0<SeP>0<SeP>0<SeP>0<SeP>3<SeP>14<SeP>0<SeP>1<SeP>0<SeP>19<SeP>2<SeP>2<SeP>2<SeP>8<SeP>5<SeP>10<SeP>10<SeP>9<SeP>13<SeP>11<SeP>9<SeP>10<SeP>9<SeP>6<SeP>11<SeP>7<SeP>2<SeP>4<SeP>5<SeP>6<SeP>1<SeP>0<SeP>0<SeP>4<SeP>0<SeP>3<SeP>0<SeP>1<SeP>2<SeP>2<SeP>2<SeP>7<SeP>7<SeP>2<SeP>2<SeP>1<SeP>3<SeP>1<SeP>8<SeP>8<SeP>6<SeP>5<SeP>2<SeP>3<SeP>4<SeP>3<SeP>9<SeP>17<SeP>2<SeP>7<SeP>1<SeP>9<SeP>5<SeP>7<SeP>4<SeP>8<SeP>7<SeP>6<SeP>9<SeP>9<SeP>10<SeP>3<SeP>6<SeP>31<SeP>8<SeP>3<SeP>7<SeP>6<SeP>6<SeP>3<SeP>3<SeP>3<SeP>3<SeP>3<SeP>5<SeP>3<SeP>4<SeP>4<SeP>1<SeP>5<SeP>1<SeP>4<SeP>3<SeP>3<SeP>4<SeP>3<SeP>3<SeP>15<SeP>8<SeP>4<SeP>2<SeP>4<SeP>4<SeP>6<SeP>4<SeP>6<SeP>3<SeP>5<SeP>4<SeP>6<SeP>3<SeP>6<SeP>5<SeP>4<SeP>4<SeP>3<SeP>6<SeP>7<SeP>5<SeP>4<SeP>5<SeP>3<SeP>7<SeP>4<SeP>7<SeP>2<SeP>3<SeP>4<SeP>3<SeP>4<SeP>3<SeP>5<SeP>4<SeP>10<SeP>13<SeP>17<SeP>9<SeP>14<SeP>16<SeP>14<SeP>13<SeP>18<SeP>14<SeP>12<SeP>4<SeP>3<SeP>147<SeP>1<SeP>5<SeP>1<SeP>5<SeP>2<SeP>4<SeP>4<SeP>5<SeP>3<SeP>10<SeP>16<SeP>2<SeP>6<SeP>3<SeP>4<SeP>4<SeP>5<SeP>3<SeP>4<SeP>5<SeP>4<SeP>3<SeP>4<SeP>3<SeP>1<SeP>6<SeP>1<SeP>6<SeP>1<SeP>4<SeP>2<SeP>4<SeP>2<SeP>6<SeP>7<SeP>4<SeP>4<SeP>5<SeP>1<SeP>5<SeP>2<SeP>3<SeP>8<SeP>10<SeP>7<SeP>8<SeP>9<SeP>10<SeP>13<SeP>3<SeP>9<SeP>7<SeP>10<SeP>6<SeP>10<SeP>6<SeP>8<SeP>3<SeP>3<SeP>4<SeP>1<SeP>4<SeP>1<SeP>5<SeP>1<SeP>9<SeP>6<SeP>3<SeP>3<SeP>4<SeP>3<SeP>4<SeP>4<SeP>4<SeP>5<SeP>2<SeP>7<SeP>9<SeP>10<SeP>4<SeP>5<SeP>3<SeP>3<SeP>4<SeP>2<SeP>5<SeP>12<SeP>3<SeP>7<SeP>5<SeP>4<SeP>22<SeP>18<SeP>7<SeP>4<SeP>3<SeP>3<SeP>3<SeP>5<SeP>2<SeP>6<SeP>9<SeP>7<SeP>4<SeP>3<SeP>5<SeP>6<SeP>5<SeP>2<SeP>5<SeP>3<SeP>3";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "United States<SeP>China<SeP>Hong Kong<SeP>Germany<SeP>Singapore<SeP>Canada<SeP>Taiwan<SeP>United Kingdom<SeP>India<SeP>Japan";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "647<SeP>614<SeP>316<SeP>208<SeP>187<SeP>170<SeP>150<SeP>122<SeP>97<SeP>84";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Hong Kong<SeP>United States<SeP>Japan<SeP>Russia<SeP>Germany<SeP>India<SeP>Poland<SeP>Taiwan<SeP>Romania";
  const itemLabel   = "Scans";
  const itemData    = "500<SeP>187<SeP>185<SeP>59<SeP>38<SeP>33<SeP>29<SeP>23<SeP>18<SeP>16";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "United States<SeP>Germany<SeP>Singapore<SeP>Canada<SeP>Taiwan<SeP>Hong Kong<SeP>United Kingdom<SeP>China<SeP>Indonesia<SeP>India";
  const itemLabel   = "Attacks";
  const itemData    = "462<SeP>175<SeP>172<SeP>156<SeP>132<SeP>129<SeP>116<SeP>114<SeP>73<SeP>68";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>4134<SeP>4837<SeP>135377<SeP>9269<SeP>7922<SeP>207566<SeP>138608<SeP>5650<SeP>3462";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "790<SeP>263<SeP>187<SeP>153<SeP>152<SeP>134<SeP>103<SeP>96<SeP>84<SeP>84";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9269<SeP>7922<SeP>14061<SeP>2518<SeP>207566<SeP>137698<SeP>47890<SeP>134337";
  const itemLabel   = "Scans";
  const itemData    = "227<SeP>184<SeP>150<SeP>128<SeP>64<SeP>51<SeP>35<SeP>32<SeP>25<SeP>25";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>135377<SeP>138608<SeP>5650<SeP>3462<SeP>207566<SeP>48004<SeP>138152<SeP>396982<SeP>150436";
  const itemLabel   = "Atacks";
  const itemData    = "726<SeP>150<SeP>96<SeP>84<SeP>68<SeP>68<SeP>67<SeP>64<SeP>58<SeP>54";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "United States<SeP>China<SeP>Hong Kong<SeP>Germany<SeP>Singapore<SeP>Canada<SeP>Taiwan<SeP>United Kingdom<SeP>India<SeP>Japan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "647<SeP>614<SeP>316<SeP>208<SeP>187<SeP>170<SeP>150<SeP>122<SeP>97<SeP>84";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Hong Kong<SeP>United States<SeP>Japan<SeP>Russia<SeP>Germany<SeP>India<SeP>Poland<SeP>Taiwan<SeP>Romania";
  const itemLabel   = "Escaneos";
  const itemData    = "500<SeP>187<SeP>185<SeP>59<SeP>38<SeP>33<SeP>29<SeP>23<SeP>18<SeP>16";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "United States<SeP>Germany<SeP>Singapore<SeP>Canada<SeP>Taiwan<SeP>Hong Kong<SeP>United Kingdom<SeP>China<SeP>Indonesia<SeP>India";
  const itemLabel   = "Ataques";
  const itemData    = "462<SeP>175<SeP>172<SeP>156<SeP>132<SeP>129<SeP>116<SeP>114<SeP>73<SeP>68";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>4134<SeP>4837<SeP>135377<SeP>9269<SeP>7922<SeP>207566<SeP>138608<SeP>5650<SeP>3462";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "790<SeP>263<SeP>187<SeP>153<SeP>152<SeP>134<SeP>103<SeP>96<SeP>84<SeP>84";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9269<SeP>7922<SeP>14061<SeP>2518<SeP>207566<SeP>137698<SeP>47890<SeP>134337";
  const itemLabel   = "Escaneos";
  const itemData    = "227<SeP>184<SeP>150<SeP>128<SeP>64<SeP>51<SeP>35<SeP>32<SeP>25<SeP>25";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>135377<SeP>138608<SeP>5650<SeP>3462<SeP>207566<SeP>48004<SeP>138152<SeP>396982<SeP>150436";
  const itemLabel   = "Ataques";
  const itemData    = "726<SeP>150<SeP>96<SeP>84<SeP>68<SeP>68<SeP>67<SeP>64<SeP>58<SeP>54";
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
