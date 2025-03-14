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
  document.getElementById(varElement).innerHTML = "2025-3-14";
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
  const metricData    = "20851";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "8357";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "12494";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "2056";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "7031";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "5463";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "952";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "2029";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "3434";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "879";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "20851";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "8357";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "12494";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "2056";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "7031";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "5463";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "952";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "2029";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "3434";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "879";
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
  const incomingData = "20851<SeP>8357<SeP>12494<SeP>2056";
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
  const incomingData = "12494<SeP>7031<SeP>5463<SeP>952";
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
  const incomingData = "5463<SeP>2029<SeP>3434<SeP>879";
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
  const incomingData = "2108<SeP>1936<SeP>172";
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
  const incomingData = "28<SeP>6<SeP>22<SeP>9";
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
  const incomingData = "20851<SeP>8357<SeP>12494<SeP>2056";
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
  const incomingData = "12494<SeP>7031<SeP>5463<SeP>952";
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
  const incomingData = "5463<SeP>2029<SeP>3434<SeP>879";
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
  const incomingData = "2108<SeP>1936<SeP>172";
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
  const incomingData = "28<SeP>6<SeP>22<SeP>9";
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
  const column1Data  = "IP01 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>1.14.61.167</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>126.62.95.172</span>)<SeP>IP05 (<span class=blur>220.158.49.7</span>)<SeP>IP06 (<span class=blur>68.33.32.77</span>)<SeP>IP07 (<span class=blur>58.177.95.4</span>)<SeP>IP10 (<span class=blur>49.212.172.13</span>)<SeP>IP09 (<span class=blur>206.189.33.165</span>)<SeP>IP08 (<span class=blur>51.254.138.254</span>)";
  const column2Data  = "AS4609<SeP>AS45090<SeP>AS207566<SeP>AS17676<SeP>AS2519<SeP>AS7922<SeP>AS9269<SeP>AS9371<SeP>AS14061<SeP>AS16276";
  const column3Data  = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France";
  const column4Data  = "758<SeP>326<SeP>318<SeP>308<SeP>288<SeP>264<SeP>260<SeP>248<SeP>248<SeP>248";
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
  const column1Data  = "IP01 (<span class=blur>122.100.182.168</span>)<SeP>IP04 (<span class=blur>126.62.95.172</span>)<SeP>IP05 (<span class=blur>220.158.49.7</span>)<SeP>IP06 (<span class=blur>68.33.32.77</span>)<SeP>IP07 (<span class=blur>58.177.95.4</span>)<SeP>IP17 (<span class=blur>93.127.125.22</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP18 (<span class=blur>27.109.169.15</span>)<SeP>IP19 (<span class=blur>92.255.85.35</span>)<SeP>IP20 (<span class=blur>141.98.11.205</span>)";
  const column2Data  = "AS4609<SeP>AS17676<SeP>AS2519<SeP>AS7922<SeP>AS9269<SeP>AS21497<SeP>AS207566<SeP>AS4609<SeP>AS207566<SeP>AS209605";
  const column3Data  = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-lt\u0022></span>\u00a0Lithuania";
  const column4Data  = "758<SeP>308<SeP>288<SeP>264<SeP>260<SeP>196<SeP>159<SeP>136<SeP>126<SeP>116";
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
  const column1Data  = "IP02 (<span class=blur>1.14.61.167</span>)<SeP>IP12 (<span class=blur>189.152.64.220</span>)<SeP>IP11 (<span class=blur>165.154.241.160</span>)<SeP>IP10 (<span class=blur>49.212.172.13</span>)<SeP>IP09 (<span class=blur>206.189.33.165</span>)<SeP>IP08 (<span class=blur>51.254.138.254</span>)<SeP>IP13 (<span class=blur>143.47.106.2</span>)<SeP>IP14 (<span class=blur>143.198.188.61</span>)<SeP>IP15 (<span class=blur>165.22.78.34</span>)<SeP>IP16 (<span class=blur>128.14.227.10</span>)";
  const column2Data  = "AS45090<SeP>AS8151<SeP>AS142002<SeP>AS9371<SeP>AS14061<SeP>AS16276<SeP>AS31898<SeP>AS14061<SeP>AS14061<SeP>AS135377";
  const column3Data  = "<span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-mx\u0022></span>\u00a0Mexico<SeP><span class=\u0022fi fi-ae\u0022></span>\u00a0United Arab Emirates<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan";
  const column4Data  = "308<SeP>247<SeP>247<SeP>247<SeP>247<SeP>247<SeP>234<SeP>230<SeP>216<SeP>215";
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
  const column1Data   = "IP01 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>1.14.61.167</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP04 (<span class=blur>126.62.95.172</span>)<SeP>IP05 (<span class=blur>220.158.49.7</span>)<SeP>IP06 (<span class=blur>68.33.32.77</span>)<SeP>IP07 (<span class=blur>58.177.95.4</span>)<SeP>IP10 (<span class=blur>49.212.172.13</span>)<SeP>IP09 (<span class=blur>206.189.33.165</span>)<SeP>IP08 (<span class=blur>51.254.138.254</span>)";
  const column2Data   = "AS4609<SeP>AS45090<SeP>AS207566<SeP>AS17676<SeP>AS2519<SeP>AS7922<SeP>AS9269<SeP>AS9371<SeP>AS14061<SeP>AS16276";
  const column3Data   = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "758<SeP>326<SeP>318<SeP>308<SeP>288<SeP>264<SeP>260<SeP>248<SeP>248<SeP>248";
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
  const column1Data   = "IP01 (<span class=blur>122.100.182.168</span>)<SeP>IP04 (<span class=blur>126.62.95.172</span>)<SeP>IP05 (<span class=blur>220.158.49.7</span>)<SeP>IP06 (<span class=blur>68.33.32.77</span>)<SeP>IP07 (<span class=blur>58.177.95.4</span>)<SeP>IP17 (<span class=blur>93.127.125.22</span>)<SeP>IP03 (<span class=blur>185.7.214.180</span>)<SeP>IP18 (<span class=blur>27.109.169.15</span>)<SeP>IP19 (<span class=blur>92.255.85.35</span>)<SeP>IP20 (<span class=blur>141.98.11.205</span>)";
  const column2Data   = "AS4609<SeP>AS17676<SeP>AS2519<SeP>AS7922<SeP>AS9269<SeP>AS21497<SeP>AS207566<SeP>AS4609<SeP>AS207566<SeP>AS209605";
  const column3Data   = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-lt\u0022></span>\u00a0Lithuania";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "758<SeP>308<SeP>288<SeP>264<SeP>260<SeP>196<SeP>159<SeP>136<SeP>126<SeP>116";
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
  const column1Data   = "IP02 (<span class=blur>1.14.61.167</span>)<SeP>IP12 (<span class=blur>189.152.64.220</span>)<SeP>IP11 (<span class=blur>165.154.241.160</span>)<SeP>IP10 (<span class=blur>49.212.172.13</span>)<SeP>IP09 (<span class=blur>206.189.33.165</span>)<SeP>IP08 (<span class=blur>51.254.138.254</span>)<SeP>IP13 (<span class=blur>143.47.106.2</span>)<SeP>IP14 (<span class=blur>143.198.188.61</span>)<SeP>IP15 (<span class=blur>165.22.78.34</span>)<SeP>IP16 (<span class=blur>128.14.227.10</span>)";
  const column2Data   = "AS45090<SeP>AS8151<SeP>AS142002<SeP>AS9371<SeP>AS14061<SeP>AS16276<SeP>AS31898<SeP>AS14061<SeP>AS14061<SeP>AS135377";
  const column3Data   = "<span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-mx\u0022></span>\u00a0Mexico<SeP><span class=\u0022fi fi-ae\u0022></span>\u00a0United Arab Emirates<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-sg\u0022></span>\u00a0Singapore<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-tw\u0022></span>\u00a0Taiwan";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "308<SeP>247<SeP>247<SeP>247<SeP>247<SeP>247<SeP>234<SeP>230<SeP>216<SeP>215";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root !QAZ@WSX<SeP>system system@123<SeP>teamspeak 1<SeP>testuser 1<SeP>test 1<SeP>teamspeak3 1<SeP>ts2 1";
  const column3Data   = "1532<SeP>1527<SeP>302<SeP>71<SeP>60<SeP>57<SeP>55<SeP>55<SeP>55<SeP>53";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>4e0b27339e784ecfec59332890bec0c7cd664b60416f61c9fef79d936e12d173";
  const column2Data  = "1616<SeP>161<SeP>78<SeP>77<SeP>16<SeP>16<SeP>16<SeP>16<SeP>15<SeP>15";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>download";
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
  const column1Data  = "http://37.44.238.92<SeP>tftp://156.253.227.112<SeP>http://61.215.151.173<SeP>http://193.143.1.7<SeP>http://141.98.10.122<SeP>https://eth0.me<SeP>http://87.106.100.210<SeP>http://45.134.39.193<SeP>http://141.98.10.50";
  const column2Data  = "15<SeP>2<SeP>2<SeP>2<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "14643<SeP>6208";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root !QAZ@WSX<SeP>system system@123<SeP>teamspeak 1<SeP>testuser 1<SeP>test 1<SeP>teamspeak3 1<SeP>ts2 1";
  const column3Data   = "1532<SeP>1527<SeP>302<SeP>71<SeP>60<SeP>57<SeP>55<SeP>55<SeP>55<SeP>53";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>4e0b27339e784ecfec59332890bec0c7cd664b60416f61c9fef79d936e12d173";
  const column2Data  = "1616<SeP>161<SeP>78<SeP>77<SeP>16<SeP>16<SeP>16<SeP>16<SeP>15<SeP>15";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>download";
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
  const column1Data  = "http://37.44.238.92<SeP>tftp://156.253.227.112<SeP>http://61.215.151.173<SeP>http://193.143.1.7<SeP>http://141.98.10.122<SeP>https://eth0.me<SeP>http://87.106.100.210<SeP>http://45.134.39.193<SeP>http://141.98.10.50";
  const column2Data  = "15<SeP>2<SeP>2<SeP>2<SeP>2<SeP>1<SeP>1<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "14643<SeP>6208";
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
        "name": "traffic between 2025-03-07 and 2025-03-13"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2830,50
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
        "name": "scans between 2025-03-07 and 2025-03-13"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2115,38,
          2830,50
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
        "name": "attacks between 2025-03-07 and 2025-03-13"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          715,15,
          2830,50
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
        "name": "tráfico entre 2025-03-07 y 2025-03-13"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2830,50
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
        "name": "escaneos entre 2025-03-07 y 2025-03-13"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          2115,38,
          2830,50
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
        "name": "ataques entre 2025-03-07 y 2025-03-13"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          715,15,
          2830,50
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
  const labelsData       = "2025-03-07 00:00:00<SeP>2025-03-07 00:25:03<SeP>2025-03-07 00:50:06<SeP>2025-03-07 01:15:09<SeP>2025-03-07 01:40:12<SeP>2025-03-07 02:05:15<SeP>2025-03-07 02:30:18<SeP>2025-03-07 02:55:21<SeP>2025-03-07 03:20:24<SeP>2025-03-07 03:45:27<SeP>2025-03-07 04:10:30<SeP>2025-03-07 04:35:33<SeP>2025-03-07 05:00:36<SeP>2025-03-07 05:25:39<SeP>2025-03-07 05:50:42<SeP>2025-03-07 06:15:45<SeP>2025-03-07 06:40:48<SeP>2025-03-07 07:05:51<SeP>2025-03-07 07:30:54<SeP>2025-03-07 07:55:57<SeP>2025-03-07 08:21:00<SeP>2025-03-07 08:46:03<SeP>2025-03-07 09:11:06<SeP>2025-03-07 09:36:09<SeP>2025-03-07 10:01:12<SeP>2025-03-07 10:26:15<SeP>2025-03-07 10:51:18<SeP>2025-03-07 11:16:21<SeP>2025-03-07 11:41:24<SeP>2025-03-07 12:06:27<SeP>2025-03-07 12:31:30<SeP>2025-03-07 12:56:33<SeP>2025-03-07 13:21:36<SeP>2025-03-07 13:46:39<SeP>2025-03-07 14:11:42<SeP>2025-03-07 14:36:45<SeP>2025-03-07 15:01:48<SeP>2025-03-07 15:26:51<SeP>2025-03-07 15:51:54<SeP>2025-03-07 16:16:57<SeP>2025-03-07 16:42:00<SeP>2025-03-07 17:07:03<SeP>2025-03-07 17:32:06<SeP>2025-03-07 17:57:09<SeP>2025-03-07 18:22:12<SeP>2025-03-07 18:47:15<SeP>2025-03-07 19:12:18<SeP>2025-03-07 19:37:21<SeP>2025-03-07 20:02:24<SeP>2025-03-07 20:27:27<SeP>2025-03-07 20:52:30<SeP>2025-03-07 21:17:33<SeP>2025-03-07 21:42:36<SeP>2025-03-07 22:07:39<SeP>2025-03-07 22:32:42<SeP>2025-03-07 22:57:45<SeP>2025-03-07 23:22:48<SeP>2025-03-07 23:47:51<SeP>2025-03-08 00:12:54<SeP>2025-03-08 00:37:57<SeP>2025-03-08 01:03:00<SeP>2025-03-08 01:28:03<SeP>2025-03-08 01:53:06<SeP>2025-03-08 02:18:09<SeP>2025-03-08 02:43:12<SeP>2025-03-08 03:08:15<SeP>2025-03-08 03:33:18<SeP>2025-03-08 03:58:21<SeP>2025-03-08 04:23:24<SeP>2025-03-08 04:48:27<SeP>2025-03-08 05:13:30<SeP>2025-03-08 05:38:33<SeP>2025-03-08 06:03:36<SeP>2025-03-08 06:28:39<SeP>2025-03-08 06:53:42<SeP>2025-03-08 07:18:45<SeP>2025-03-08 07:43:48<SeP>2025-03-08 08:08:51<SeP>2025-03-08 08:33:54<SeP>2025-03-08 08:58:57<SeP>2025-03-08 09:24:00<SeP>2025-03-08 09:49:03<SeP>2025-03-08 10:14:06<SeP>2025-03-08 10:39:09<SeP>2025-03-08 11:04:12<SeP>2025-03-08 11:29:15<SeP>2025-03-08 11:54:18<SeP>2025-03-08 12:19:21<SeP>2025-03-08 12:44:24<SeP>2025-03-08 13:09:27<SeP>2025-03-08 13:34:30<SeP>2025-03-08 13:59:33<SeP>2025-03-08 14:24:36<SeP>2025-03-08 14:49:39<SeP>2025-03-08 15:14:42<SeP>2025-03-08 15:39:45<SeP>2025-03-08 16:04:48<SeP>2025-03-08 16:29:51<SeP>2025-03-08 16:54:54<SeP>2025-03-08 17:19:57<SeP>2025-03-08 17:45:00<SeP>2025-03-08 18:10:03<SeP>2025-03-08 18:35:06<SeP>2025-03-08 19:00:09<SeP>2025-03-08 19:25:12<SeP>2025-03-08 19:50:15<SeP>2025-03-08 20:15:18<SeP>2025-03-08 20:40:21<SeP>2025-03-08 21:05:24<SeP>2025-03-08 21:30:27<SeP>2025-03-08 21:55:30<SeP>2025-03-08 22:20:33<SeP>2025-03-08 22:45:36<SeP>2025-03-08 23:10:39<SeP>2025-03-08 23:35:42<SeP>2025-03-09 00:00:45<SeP>2025-03-09 00:25:48<SeP>2025-03-09 00:50:51<SeP>2025-03-09 01:15:54<SeP>2025-03-09 01:40:57<SeP>2025-03-09 03:06:00<SeP>2025-03-09 03:31:03<SeP>2025-03-09 03:56:06<SeP>2025-03-09 04:21:09<SeP>2025-03-09 04:46:12<SeP>2025-03-09 05:11:15<SeP>2025-03-09 05:36:18<SeP>2025-03-09 06:01:21<SeP>2025-03-09 06:26:24<SeP>2025-03-09 06:51:27<SeP>2025-03-09 07:16:30<SeP>2025-03-09 07:41:33<SeP>2025-03-09 08:06:36<SeP>2025-03-09 08:31:39<SeP>2025-03-09 08:56:42<SeP>2025-03-09 09:21:45<SeP>2025-03-09 09:46:48<SeP>2025-03-09 10:11:51<SeP>2025-03-09 10:36:54<SeP>2025-03-09 11:01:57<SeP>2025-03-09 11:27:00<SeP>2025-03-09 11:52:03<SeP>2025-03-09 12:17:06<SeP>2025-03-09 12:42:09<SeP>2025-03-09 13:07:12<SeP>2025-03-09 13:32:15<SeP>2025-03-09 13:57:18<SeP>2025-03-09 14:22:21<SeP>2025-03-09 14:47:24<SeP>2025-03-09 15:12:27<SeP>2025-03-09 15:37:30<SeP>2025-03-09 16:02:33<SeP>2025-03-09 16:27:36<SeP>2025-03-09 16:52:39<SeP>2025-03-09 17:17:42<SeP>2025-03-09 17:42:45<SeP>2025-03-09 18:07:48<SeP>2025-03-09 18:32:51<SeP>2025-03-09 18:57:54<SeP>2025-03-09 19:22:57<SeP>2025-03-09 19:48:00<SeP>2025-03-09 20:13:03<SeP>2025-03-09 20:38:06<SeP>2025-03-09 21:03:09<SeP>2025-03-09 21:28:12<SeP>2025-03-09 21:53:15<SeP>2025-03-09 22:18:18<SeP>2025-03-09 22:43:21<SeP>2025-03-09 23:08:24<SeP>2025-03-09 23:33:27<SeP>2025-03-09 23:58:30<SeP>2025-03-10 00:23:33<SeP>2025-03-10 00:48:36<SeP>2025-03-10 01:13:39<SeP>2025-03-10 01:38:42<SeP>2025-03-10 02:03:45<SeP>2025-03-10 02:28:48<SeP>2025-03-10 02:53:51<SeP>2025-03-10 03:18:54<SeP>2025-03-10 03:43:57<SeP>2025-03-10 04:09:00<SeP>2025-03-10 04:34:03<SeP>2025-03-10 04:59:06<SeP>2025-03-10 05:24:09<SeP>2025-03-10 05:49:12<SeP>2025-03-10 06:14:15<SeP>2025-03-10 06:39:18<SeP>2025-03-10 07:04:21<SeP>2025-03-10 07:29:24<SeP>2025-03-10 07:54:27<SeP>2025-03-10 08:19:30<SeP>2025-03-10 08:44:33<SeP>2025-03-10 09:09:36<SeP>2025-03-10 09:34:39<SeP>2025-03-10 09:59:42<SeP>2025-03-10 10:24:45<SeP>2025-03-10 10:49:48<SeP>2025-03-10 11:14:51<SeP>2025-03-10 11:39:54<SeP>2025-03-10 12:04:57<SeP>2025-03-10 12:30:00<SeP>2025-03-10 12:55:03<SeP>2025-03-10 13:20:06<SeP>2025-03-10 13:45:09<SeP>2025-03-10 14:10:12<SeP>2025-03-10 14:35:15<SeP>2025-03-10 15:00:18<SeP>2025-03-10 15:25:21<SeP>2025-03-10 15:50:24<SeP>2025-03-10 16:15:27<SeP>2025-03-10 16:40:30<SeP>2025-03-10 17:05:33<SeP>2025-03-10 17:30:36<SeP>2025-03-10 17:55:39<SeP>2025-03-10 18:20:42<SeP>2025-03-10 18:45:45<SeP>2025-03-10 19:10:48<SeP>2025-03-10 19:35:51<SeP>2025-03-10 20:00:54<SeP>2025-03-10 20:25:57<SeP>2025-03-10 20:51:00<SeP>2025-03-10 21:16:03<SeP>2025-03-10 21:41:06<SeP>2025-03-10 22:06:09<SeP>2025-03-10 22:31:12<SeP>2025-03-10 22:56:15<SeP>2025-03-10 23:21:18<SeP>2025-03-10 23:46:21<SeP>2025-03-11 00:11:24<SeP>2025-03-11 00:36:27<SeP>2025-03-11 01:01:30<SeP>2025-03-11 01:26:33<SeP>2025-03-11 01:51:36<SeP>2025-03-11 02:16:39<SeP>2025-03-11 02:41:42<SeP>2025-03-11 03:06:45<SeP>2025-03-11 03:31:48<SeP>2025-03-11 03:56:51<SeP>2025-03-11 04:21:54<SeP>2025-03-11 04:46:57<SeP>2025-03-11 05:12:00<SeP>2025-03-11 05:37:03<SeP>2025-03-11 06:02:06<SeP>2025-03-11 06:27:09<SeP>2025-03-11 06:52:12<SeP>2025-03-11 07:17:15<SeP>2025-03-11 07:42:18<SeP>2025-03-11 08:07:21<SeP>2025-03-11 08:32:24<SeP>2025-03-11 08:57:27<SeP>2025-03-11 09:22:30<SeP>2025-03-11 09:47:33<SeP>2025-03-11 10:12:36<SeP>2025-03-11 10:37:39<SeP>2025-03-11 11:02:42<SeP>2025-03-11 11:27:45<SeP>2025-03-11 11:52:48<SeP>2025-03-11 12:17:51<SeP>2025-03-11 12:42:54<SeP>2025-03-11 13:07:57<SeP>2025-03-11 13:33:00<SeP>2025-03-11 13:58:03<SeP>2025-03-11 14:23:06<SeP>2025-03-11 14:48:09<SeP>2025-03-11 15:13:12<SeP>2025-03-11 15:38:15<SeP>2025-03-11 16:03:18<SeP>2025-03-11 16:28:21<SeP>2025-03-11 16:53:24<SeP>2025-03-11 17:18:27<SeP>2025-03-11 17:43:30<SeP>2025-03-11 18:08:33<SeP>2025-03-11 18:33:36<SeP>2025-03-11 18:58:39<SeP>2025-03-11 19:23:42<SeP>2025-03-11 19:48:45<SeP>2025-03-11 20:13:48<SeP>2025-03-11 20:38:51<SeP>2025-03-11 21:03:54<SeP>2025-03-11 21:28:57<SeP>2025-03-11 21:54:00<SeP>2025-03-11 22:19:03<SeP>2025-03-11 22:44:06<SeP>2025-03-11 23:09:09<SeP>2025-03-11 23:34:12<SeP>2025-03-11 23:59:15<SeP>2025-03-12 00:24:18<SeP>2025-03-12 00:49:21<SeP>2025-03-12 01:14:24<SeP>2025-03-12 01:39:27<SeP>2025-03-12 02:04:30<SeP>2025-03-12 02:29:33<SeP>2025-03-12 02:54:36<SeP>2025-03-12 03:19:39<SeP>2025-03-12 03:44:42<SeP>2025-03-12 04:09:45<SeP>2025-03-12 04:34:48<SeP>2025-03-12 04:59:51<SeP>2025-03-12 05:24:54<SeP>2025-03-12 05:49:57<SeP>2025-03-12 06:15:00<SeP>2025-03-12 06:40:03<SeP>2025-03-12 07:05:06<SeP>2025-03-12 07:30:09<SeP>2025-03-12 07:55:12<SeP>2025-03-12 08:20:15<SeP>2025-03-12 08:45:18<SeP>2025-03-12 09:10:21<SeP>2025-03-12 09:35:24<SeP>2025-03-12 10:00:27<SeP>2025-03-12 10:25:30<SeP>2025-03-12 10:50:33<SeP>2025-03-12 11:15:36<SeP>2025-03-12 11:40:39<SeP>2025-03-12 12:05:42<SeP>2025-03-12 12:30:45<SeP>2025-03-12 12:55:48<SeP>2025-03-12 13:20:51<SeP>2025-03-12 13:45:54<SeP>2025-03-12 14:10:57<SeP>2025-03-12 14:36:00<SeP>2025-03-12 15:01:03<SeP>2025-03-12 15:26:06<SeP>2025-03-12 15:51:09<SeP>2025-03-12 16:16:12<SeP>2025-03-12 16:41:15<SeP>2025-03-12 17:06:18<SeP>2025-03-12 17:31:21<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:21:27<SeP>2025-03-12 18:46:30<SeP>2025-03-12 19:11:33<SeP>2025-03-12 19:36:36<SeP>2025-03-12 20:01:39<SeP>2025-03-12 20:26:42<SeP>2025-03-12 20:51:45<SeP>2025-03-12 21:16:48<SeP>2025-03-12 21:41:51<SeP>2025-03-12 22:06:54<SeP>2025-03-12 22:31:57<SeP>2025-03-12 22:57:00<SeP>2025-03-12 23:22:03<SeP>2025-03-12 23:47:06<SeP>2025-03-13 00:12:09<SeP>2025-03-13 00:37:12<SeP>2025-03-13 01:02:15<SeP>2025-03-13 01:27:18<SeP>2025-03-13 01:52:21<SeP>2025-03-13 02:17:24<SeP>2025-03-13 02:42:27<SeP>2025-03-13 03:07:30<SeP>2025-03-13 03:32:33<SeP>2025-03-13 03:57:36<SeP>2025-03-13 04:22:39<SeP>2025-03-13 04:47:42<SeP>2025-03-13 05:12:45<SeP>2025-03-13 05:37:48<SeP>2025-03-13 06:02:51<SeP>2025-03-13 06:27:54<SeP>2025-03-13 06:52:57<SeP>2025-03-13 07:18:00<SeP>2025-03-13 07:43:03<SeP>2025-03-13 08:08:06<SeP>2025-03-13 08:33:09<SeP>2025-03-13 08:58:12<SeP>2025-03-13 09:23:15<SeP>2025-03-13 09:48:18<SeP>2025-03-13 10:13:21<SeP>2025-03-13 10:38:24<SeP>2025-03-13 11:03:27<SeP>2025-03-13 11:28:30<SeP>2025-03-13 11:53:33<SeP>2025-03-13 12:18:36<SeP>2025-03-13 12:43:39<SeP>2025-03-13 13:08:42<SeP>2025-03-13 13:33:45<SeP>2025-03-13 13:58:48<SeP>2025-03-13 14:23:51<SeP>2025-03-13 14:48:54<SeP>2025-03-13 15:13:57<SeP>2025-03-13 15:39:00<SeP>2025-03-13 16:04:03<SeP>2025-03-13 16:29:06<SeP>2025-03-13 16:54:09<SeP>2025-03-13 17:19:12<SeP>2025-03-13 17:44:15<SeP>2025-03-13 18:09:18<SeP>2025-03-13 18:34:21<SeP>2025-03-13 18:59:24<SeP>2025-03-13 19:24:27<SeP>2025-03-13 19:49:30<SeP>2025-03-13 20:14:33<SeP>2025-03-13 20:39:36<SeP>2025-03-13 21:04:39<SeP>2025-03-13 21:29:42<SeP>2025-03-13 21:54:45<SeP>2025-03-13 22:19:48<SeP>2025-03-13 22:44:51<SeP>2025-03-13 23:09:54<SeP>2025-03-13 23:34:57";
  const item1Label       = "Scans";
  const item1Data        = "51<SeP>212<SeP>116<SeP>25<SeP>14<SeP>9<SeP>8<SeP>9<SeP>6<SeP>4<SeP>3<SeP>25<SeP>10<SeP>7<SeP>4<SeP>7<SeP>1<SeP>4<SeP>5<SeP>6<SeP>10<SeP>20<SeP>11<SeP>8<SeP>8<SeP>12<SeP>8<SeP>9<SeP>16<SeP>11<SeP>9<SeP>31<SeP>10<SeP>8<SeP>8<SeP>46<SeP>15<SeP>8<SeP>43<SeP>7<SeP>9<SeP>20<SeP>51<SeP>88<SeP>24<SeP>21<SeP>21<SeP>13<SeP>20<SeP>19<SeP>15<SeP>11<SeP>11<SeP>29<SeP>83<SeP>124<SeP>121<SeP>12<SeP>28<SeP>9<SeP>9<SeP>15<SeP>12<SeP>14<SeP>21<SeP>26<SeP>36<SeP>11<SeP>121<SeP>104<SeP>11<SeP>27<SeP>57<SeP>43<SeP>8<SeP>24<SeP>14<SeP>124<SeP>36<SeP>11<SeP>13<SeP>7<SeP>14<SeP>17<SeP>11<SeP>15<SeP>5<SeP>6<SeP>29<SeP>9<SeP>11<SeP>32<SeP>10<SeP>5<SeP>14<SeP>9<SeP>9<SeP>12<SeP>34<SeP>8<SeP>11<SeP>14<SeP>8<SeP>9<SeP>10<SeP>16<SeP>14<SeP>13<SeP>10<SeP>10<SeP>6<SeP>34<SeP>7<SeP>3<SeP>7<SeP>3<SeP>4<SeP>6<SeP>3<SeP>5<SeP>22<SeP>16<SeP>26<SeP>25<SeP>14<SeP>8<SeP>6<SeP>17<SeP>6<SeP>57<SeP>14<SeP>7<SeP>13<SeP>14<SeP>12<SeP>19<SeP>14<SeP>13<SeP>33<SeP>7<SeP>11<SeP>6<SeP>12<SeP>10<SeP>30<SeP>11<SeP>5<SeP>11<SeP>8<SeP>3<SeP>38<SeP>0<SeP>13<SeP>10<SeP>4<SeP>5<SeP>8<SeP>8<SeP>5<SeP>1<SeP>17<SeP>2<SeP>10<SeP>4<SeP>13<SeP>5<SeP>3<SeP>88<SeP>17<SeP>8<SeP>7<SeP>3<SeP>8<SeP>6<SeP>9<SeP>5<SeP>14<SeP>13<SeP>757<SeP>11<SeP>12<SeP>27<SeP>8<SeP>7<SeP>13<SeP>37<SeP>19<SeP>17<SeP>24<SeP>22<SeP>17<SeP>21<SeP>8<SeP>54<SeP>26<SeP>17<SeP>49<SeP>12<SeP>13<SeP>51<SeP>18<SeP>18<SeP>14<SeP>14<SeP>38<SeP>11<SeP>11<SeP>5<SeP>0<SeP>8<SeP>9<SeP>6<SeP>2<SeP>3<SeP>0<SeP>24<SeP>7<SeP>0<SeP>18<SeP>7<SeP>29<SeP>78<SeP>47<SeP>24<SeP>10<SeP>23<SeP>34<SeP>7<SeP>12<SeP>12<SeP>36<SeP>28<SeP>14<SeP>10<SeP>41<SeP>7<SeP>3<SeP>23<SeP>13<SeP>3<SeP>4<SeP>55<SeP>45<SeP>5<SeP>3<SeP>8<SeP>3<SeP>3<SeP>1<SeP>9<SeP>11<SeP>12<SeP>14<SeP>9<SeP>15<SeP>11<SeP>55<SeP>30<SeP>12<SeP>8<SeP>62<SeP>38<SeP>18<SeP>26<SeP>2<SeP>17<SeP>5<SeP>6<SeP>26<SeP>6<SeP>10<SeP>6<SeP>15<SeP>4<SeP>25<SeP>23<SeP>7<SeP>3<SeP>29<SeP>7<SeP>11<SeP>13<SeP>7<SeP>9<SeP>15<SeP>67<SeP>15<SeP>13<SeP>10<SeP>9<SeP>6<SeP>7<SeP>12<SeP>14<SeP>21<SeP>49<SeP>14<SeP>17<SeP>12<SeP>14<SeP>19<SeP>16<SeP>32<SeP>17<SeP>8<SeP>12<SeP>20<SeP>34<SeP>11<SeP>5<SeP>13<SeP>6<SeP>20<SeP>19<SeP>43<SeP>39<SeP>8<SeP>4<SeP>4<SeP>16<SeP>18<SeP>8<SeP>29<SeP>24<SeP>45<SeP>10<SeP>12<SeP>64<SeP>65<SeP>20<SeP>16<SeP>15<SeP>15<SeP>34<SeP>11<SeP>16<SeP>44<SeP>20<SeP>45<SeP>22<SeP>21<SeP>25<SeP>21<SeP>20<SeP>23<SeP>19<SeP>15<SeP>15<SeP>16<SeP>12<SeP>49<SeP>9<SeP>3<SeP>10<SeP>4<SeP>8<SeP>17<SeP>13<SeP>18<SeP>29<SeP>5<SeP>21<SeP>15<SeP>8<SeP>20<SeP>15<SeP>22<SeP>20<SeP>42<SeP>51<SeP>31<SeP>13<SeP>25<SeP>13<SeP>26<SeP>39<SeP>18<SeP>11<SeP>10<SeP>35<SeP>3<SeP>12<SeP>10<SeP>16<SeP>14<SeP>12<SeP>21<SeP>22<SeP>20<SeP>25<SeP>7<SeP>17<SeP>8<SeP>22<SeP>13<SeP>16<SeP>16<SeP>22<SeP>10<SeP>19";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "7<SeP>5<SeP>26<SeP>76<SeP>66<SeP>6<SeP>5<SeP>16<SeP>10<SeP>10<SeP>21<SeP>66<SeP>51<SeP>94<SeP>173<SeP>153<SeP>135<SeP>42<SeP>45<SeP>28<SeP>12<SeP>26<SeP>11<SeP>9<SeP>29<SeP>35<SeP>33<SeP>33<SeP>23<SeP>8<SeP>114<SeP>10<SeP>9<SeP>7<SeP>8<SeP>10<SeP>9<SeP>10<SeP>8<SeP>9<SeP>12<SeP>15<SeP>7<SeP>35<SeP>58<SeP>18<SeP>4<SeP>6<SeP>32<SeP>6<SeP>9<SeP>27<SeP>29<SeP>28<SeP>8<SeP>31<SeP>43<SeP>19<SeP>6<SeP>18<SeP>20<SeP>39<SeP>91<SeP>84<SeP>18<SeP>12<SeP>19<SeP>7<SeP>6<SeP>4<SeP>4<SeP>3<SeP>4<SeP>4<SeP>1<SeP>4<SeP>3<SeP>1<SeP>22<SeP>65<SeP>57<SeP>40<SeP>59<SeP>21<SeP>19<SeP>10<SeP>11<SeP>5<SeP>8<SeP>6<SeP>38<SeP>25<SeP>6<SeP>0<SeP>3<SeP>3<SeP>2<SeP>15<SeP>4<SeP>3<SeP>2<SeP>8<SeP>3<SeP>4<SeP>6<SeP>5<SeP>56<SeP>12<SeP>57<SeP>156<SeP>49<SeP>25<SeP>17<SeP>17<SeP>8<SeP>5<SeP>6<SeP>10<SeP>9<SeP>68<SeP>73<SeP>8<SeP>9<SeP>64<SeP>33<SeP>4<SeP>2<SeP>3<SeP>5<SeP>1<SeP>3<SeP>4<SeP>3<SeP>4<SeP>11<SeP>4<SeP>9<SeP>4<SeP>23<SeP>35<SeP>20<SeP>23<SeP>7<SeP>6<SeP>4<SeP>5<SeP>10<SeP>32<SeP>5<SeP>7<SeP>221<SeP>28<SeP>24<SeP>23<SeP>16<SeP>7<SeP>10<SeP>3<SeP>6<SeP>6<SeP>2<SeP>1<SeP>2<SeP>18<SeP>12<SeP>3<SeP>7<SeP>4<SeP>253<SeP>236<SeP>7<SeP>7<SeP>50<SeP>44<SeP>42<SeP>254<SeP>17<SeP>252<SeP>15<SeP>12<SeP>12<SeP>305<SeP>11<SeP>6<SeP>5<SeP>7<SeP>7<SeP>21<SeP>7<SeP>8<SeP>25<SeP>40<SeP>37<SeP>18<SeP>8<SeP>6<SeP>6<SeP>10<SeP>14<SeP>13<SeP>9<SeP>43<SeP>35<SeP>40<SeP>17<SeP>9<SeP>17<SeP>4<SeP>6<SeP>26<SeP>39<SeP>41<SeP>11<SeP>8<SeP>7<SeP>6<SeP>7<SeP>6<SeP>7<SeP>13<SeP>97<SeP>178<SeP>69<SeP>58<SeP>47<SeP>29<SeP>9<SeP>59<SeP>167<SeP>68<SeP>6<SeP>15<SeP>5<SeP>2<SeP>22<SeP>27<SeP>36<SeP>42<SeP>1<SeP>2<SeP>3<SeP>16<SeP>6<SeP>4<SeP>84<SeP>114<SeP>18<SeP>8<SeP>8<SeP>6<SeP>5<SeP>17<SeP>5<SeP>2<SeP>5<SeP>7<SeP>47<SeP>102<SeP>25<SeP>2<SeP>1<SeP>31<SeP>67<SeP>90<SeP>95<SeP>300<SeP>40<SeP>20<SeP>26<SeP>34<SeP>15<SeP>7<SeP>4<SeP>15<SeP>3<SeP>13<SeP>10<SeP>9<SeP>16<SeP>15<SeP>6<SeP>3<SeP>60<SeP>94<SeP>33<SeP>15<SeP>13<SeP>16<SeP>18<SeP>51<SeP>93<SeP>21<SeP>14<SeP>5<SeP>7<SeP>5<SeP>1<SeP>3<SeP>3<SeP>8<SeP>5<SeP>43<SeP>43<SeP>11<SeP>5<SeP>7<SeP>38<SeP>57<SeP>60<SeP>21<SeP>12<SeP>23<SeP>32<SeP>45<SeP>44<SeP>72<SeP>35<SeP>25<SeP>20<SeP>40<SeP>32<SeP>34<SeP>34<SeP>27<SeP>60<SeP>102<SeP>165<SeP>44<SeP>27<SeP>24<SeP>24<SeP>28<SeP>42<SeP>61<SeP>40<SeP>28<SeP>26<SeP>38<SeP>36<SeP>66<SeP>27<SeP>35<SeP>27<SeP>28<SeP>65<SeP>44<SeP>59<SeP>75<SeP>31<SeP>30<SeP>24<SeP>47<SeP>20<SeP>36<SeP>57<SeP>41<SeP>41<SeP>17<SeP>28<SeP>30<SeP>34<SeP>32<SeP>21<SeP>23<SeP>20<SeP>24<SeP>28<SeP>23<SeP>21<SeP>66<SeP>69<SeP>22<SeP>19<SeP>95<SeP>12<SeP>18<SeP>25<SeP>63<SeP>285<SeP>15<SeP>7<SeP>48<SeP>71<SeP>28<SeP>7<SeP>43<SeP>57<SeP>10<SeP>13<SeP>81<SeP>28<SeP>2<SeP>7<SeP>5<SeP>13<SeP>7<SeP>28<SeP>9<SeP>6<SeP>20";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-03-07 00:00:00<SeP>2025-03-07 00:25:03<SeP>2025-03-07 00:50:06<SeP>2025-03-07 01:15:09<SeP>2025-03-07 01:40:12<SeP>2025-03-07 02:05:15<SeP>2025-03-07 02:30:18<SeP>2025-03-07 02:55:21<SeP>2025-03-07 03:20:24<SeP>2025-03-07 03:45:27<SeP>2025-03-07 04:10:30<SeP>2025-03-07 04:35:33<SeP>2025-03-07 05:00:36<SeP>2025-03-07 05:25:39<SeP>2025-03-07 05:50:42<SeP>2025-03-07 06:15:45<SeP>2025-03-07 06:40:48<SeP>2025-03-07 07:05:51<SeP>2025-03-07 07:30:54<SeP>2025-03-07 07:55:57<SeP>2025-03-07 08:21:00<SeP>2025-03-07 08:46:03<SeP>2025-03-07 09:11:06<SeP>2025-03-07 09:36:09<SeP>2025-03-07 10:01:12<SeP>2025-03-07 10:26:15<SeP>2025-03-07 10:51:18<SeP>2025-03-07 11:16:21<SeP>2025-03-07 11:41:24<SeP>2025-03-07 12:06:27<SeP>2025-03-07 12:31:30<SeP>2025-03-07 12:56:33<SeP>2025-03-07 13:21:36<SeP>2025-03-07 13:46:39<SeP>2025-03-07 14:11:42<SeP>2025-03-07 14:36:45<SeP>2025-03-07 15:01:48<SeP>2025-03-07 15:26:51<SeP>2025-03-07 15:51:54<SeP>2025-03-07 16:16:57<SeP>2025-03-07 16:42:00<SeP>2025-03-07 17:07:03<SeP>2025-03-07 17:32:06<SeP>2025-03-07 17:57:09<SeP>2025-03-07 18:22:12<SeP>2025-03-07 18:47:15<SeP>2025-03-07 19:12:18<SeP>2025-03-07 19:37:21<SeP>2025-03-07 20:02:24<SeP>2025-03-07 20:27:27<SeP>2025-03-07 20:52:30<SeP>2025-03-07 21:17:33<SeP>2025-03-07 21:42:36<SeP>2025-03-07 22:07:39<SeP>2025-03-07 22:32:42<SeP>2025-03-07 22:57:45<SeP>2025-03-07 23:22:48<SeP>2025-03-07 23:47:51<SeP>2025-03-08 00:12:54<SeP>2025-03-08 00:37:57<SeP>2025-03-08 01:03:00<SeP>2025-03-08 01:28:03<SeP>2025-03-08 01:53:06<SeP>2025-03-08 02:18:09<SeP>2025-03-08 02:43:12<SeP>2025-03-08 03:08:15<SeP>2025-03-08 03:33:18<SeP>2025-03-08 03:58:21<SeP>2025-03-08 04:23:24<SeP>2025-03-08 04:48:27<SeP>2025-03-08 05:13:30<SeP>2025-03-08 05:38:33<SeP>2025-03-08 06:03:36<SeP>2025-03-08 06:28:39<SeP>2025-03-08 06:53:42<SeP>2025-03-08 07:18:45<SeP>2025-03-08 07:43:48<SeP>2025-03-08 08:08:51<SeP>2025-03-08 08:33:54<SeP>2025-03-08 08:58:57<SeP>2025-03-08 09:24:00<SeP>2025-03-08 09:49:03<SeP>2025-03-08 10:14:06<SeP>2025-03-08 10:39:09<SeP>2025-03-08 11:04:12<SeP>2025-03-08 11:29:15<SeP>2025-03-08 11:54:18<SeP>2025-03-08 12:19:21<SeP>2025-03-08 12:44:24<SeP>2025-03-08 13:09:27<SeP>2025-03-08 13:34:30<SeP>2025-03-08 13:59:33<SeP>2025-03-08 14:24:36<SeP>2025-03-08 14:49:39<SeP>2025-03-08 15:14:42<SeP>2025-03-08 15:39:45<SeP>2025-03-08 16:04:48<SeP>2025-03-08 16:29:51<SeP>2025-03-08 16:54:54<SeP>2025-03-08 17:19:57<SeP>2025-03-08 17:45:00<SeP>2025-03-08 18:10:03<SeP>2025-03-08 18:35:06<SeP>2025-03-08 19:00:09<SeP>2025-03-08 19:25:12<SeP>2025-03-08 19:50:15<SeP>2025-03-08 20:15:18<SeP>2025-03-08 20:40:21<SeP>2025-03-08 21:05:24<SeP>2025-03-08 21:30:27<SeP>2025-03-08 21:55:30<SeP>2025-03-08 22:20:33<SeP>2025-03-08 22:45:36<SeP>2025-03-08 23:10:39<SeP>2025-03-08 23:35:42<SeP>2025-03-09 00:00:45<SeP>2025-03-09 00:25:48<SeP>2025-03-09 00:50:51<SeP>2025-03-09 01:15:54<SeP>2025-03-09 01:40:57<SeP>2025-03-09 03:06:00<SeP>2025-03-09 03:31:03<SeP>2025-03-09 03:56:06<SeP>2025-03-09 04:21:09<SeP>2025-03-09 04:46:12<SeP>2025-03-09 05:11:15<SeP>2025-03-09 05:36:18<SeP>2025-03-09 06:01:21<SeP>2025-03-09 06:26:24<SeP>2025-03-09 06:51:27<SeP>2025-03-09 07:16:30<SeP>2025-03-09 07:41:33<SeP>2025-03-09 08:06:36<SeP>2025-03-09 08:31:39<SeP>2025-03-09 08:56:42<SeP>2025-03-09 09:21:45<SeP>2025-03-09 09:46:48<SeP>2025-03-09 10:11:51<SeP>2025-03-09 10:36:54<SeP>2025-03-09 11:01:57<SeP>2025-03-09 11:27:00<SeP>2025-03-09 11:52:03<SeP>2025-03-09 12:17:06<SeP>2025-03-09 12:42:09<SeP>2025-03-09 13:07:12<SeP>2025-03-09 13:32:15<SeP>2025-03-09 13:57:18<SeP>2025-03-09 14:22:21<SeP>2025-03-09 14:47:24<SeP>2025-03-09 15:12:27<SeP>2025-03-09 15:37:30<SeP>2025-03-09 16:02:33<SeP>2025-03-09 16:27:36<SeP>2025-03-09 16:52:39<SeP>2025-03-09 17:17:42<SeP>2025-03-09 17:42:45<SeP>2025-03-09 18:07:48<SeP>2025-03-09 18:32:51<SeP>2025-03-09 18:57:54<SeP>2025-03-09 19:22:57<SeP>2025-03-09 19:48:00<SeP>2025-03-09 20:13:03<SeP>2025-03-09 20:38:06<SeP>2025-03-09 21:03:09<SeP>2025-03-09 21:28:12<SeP>2025-03-09 21:53:15<SeP>2025-03-09 22:18:18<SeP>2025-03-09 22:43:21<SeP>2025-03-09 23:08:24<SeP>2025-03-09 23:33:27<SeP>2025-03-09 23:58:30<SeP>2025-03-10 00:23:33<SeP>2025-03-10 00:48:36<SeP>2025-03-10 01:13:39<SeP>2025-03-10 01:38:42<SeP>2025-03-10 02:03:45<SeP>2025-03-10 02:28:48<SeP>2025-03-10 02:53:51<SeP>2025-03-10 03:18:54<SeP>2025-03-10 03:43:57<SeP>2025-03-10 04:09:00<SeP>2025-03-10 04:34:03<SeP>2025-03-10 04:59:06<SeP>2025-03-10 05:24:09<SeP>2025-03-10 05:49:12<SeP>2025-03-10 06:14:15<SeP>2025-03-10 06:39:18<SeP>2025-03-10 07:04:21<SeP>2025-03-10 07:29:24<SeP>2025-03-10 07:54:27<SeP>2025-03-10 08:19:30<SeP>2025-03-10 08:44:33<SeP>2025-03-10 09:09:36<SeP>2025-03-10 09:34:39<SeP>2025-03-10 09:59:42<SeP>2025-03-10 10:24:45<SeP>2025-03-10 10:49:48<SeP>2025-03-10 11:14:51<SeP>2025-03-10 11:39:54<SeP>2025-03-10 12:04:57<SeP>2025-03-10 12:30:00<SeP>2025-03-10 12:55:03<SeP>2025-03-10 13:20:06<SeP>2025-03-10 13:45:09<SeP>2025-03-10 14:10:12<SeP>2025-03-10 14:35:15<SeP>2025-03-10 15:00:18<SeP>2025-03-10 15:25:21<SeP>2025-03-10 15:50:24<SeP>2025-03-10 16:15:27<SeP>2025-03-10 16:40:30<SeP>2025-03-10 17:05:33<SeP>2025-03-10 17:30:36<SeP>2025-03-10 17:55:39<SeP>2025-03-10 18:20:42<SeP>2025-03-10 18:45:45<SeP>2025-03-10 19:10:48<SeP>2025-03-10 19:35:51<SeP>2025-03-10 20:00:54<SeP>2025-03-10 20:25:57<SeP>2025-03-10 20:51:00<SeP>2025-03-10 21:16:03<SeP>2025-03-10 21:41:06<SeP>2025-03-10 22:06:09<SeP>2025-03-10 22:31:12<SeP>2025-03-10 22:56:15<SeP>2025-03-10 23:21:18<SeP>2025-03-10 23:46:21<SeP>2025-03-11 00:11:24<SeP>2025-03-11 00:36:27<SeP>2025-03-11 01:01:30<SeP>2025-03-11 01:26:33<SeP>2025-03-11 01:51:36<SeP>2025-03-11 02:16:39<SeP>2025-03-11 02:41:42<SeP>2025-03-11 03:06:45<SeP>2025-03-11 03:31:48<SeP>2025-03-11 03:56:51<SeP>2025-03-11 04:21:54<SeP>2025-03-11 04:46:57<SeP>2025-03-11 05:12:00<SeP>2025-03-11 05:37:03<SeP>2025-03-11 06:02:06<SeP>2025-03-11 06:27:09<SeP>2025-03-11 06:52:12<SeP>2025-03-11 07:17:15<SeP>2025-03-11 07:42:18<SeP>2025-03-11 08:07:21<SeP>2025-03-11 08:32:24<SeP>2025-03-11 08:57:27<SeP>2025-03-11 09:22:30<SeP>2025-03-11 09:47:33<SeP>2025-03-11 10:12:36<SeP>2025-03-11 10:37:39<SeP>2025-03-11 11:02:42<SeP>2025-03-11 11:27:45<SeP>2025-03-11 11:52:48<SeP>2025-03-11 12:17:51<SeP>2025-03-11 12:42:54<SeP>2025-03-11 13:07:57<SeP>2025-03-11 13:33:00<SeP>2025-03-11 13:58:03<SeP>2025-03-11 14:23:06<SeP>2025-03-11 14:48:09<SeP>2025-03-11 15:13:12<SeP>2025-03-11 15:38:15<SeP>2025-03-11 16:03:18<SeP>2025-03-11 16:28:21<SeP>2025-03-11 16:53:24<SeP>2025-03-11 17:18:27<SeP>2025-03-11 17:43:30<SeP>2025-03-11 18:08:33<SeP>2025-03-11 18:33:36<SeP>2025-03-11 18:58:39<SeP>2025-03-11 19:23:42<SeP>2025-03-11 19:48:45<SeP>2025-03-11 20:13:48<SeP>2025-03-11 20:38:51<SeP>2025-03-11 21:03:54<SeP>2025-03-11 21:28:57<SeP>2025-03-11 21:54:00<SeP>2025-03-11 22:19:03<SeP>2025-03-11 22:44:06<SeP>2025-03-11 23:09:09<SeP>2025-03-11 23:34:12<SeP>2025-03-11 23:59:15<SeP>2025-03-12 00:24:18<SeP>2025-03-12 00:49:21<SeP>2025-03-12 01:14:24<SeP>2025-03-12 01:39:27<SeP>2025-03-12 02:04:30<SeP>2025-03-12 02:29:33<SeP>2025-03-12 02:54:36<SeP>2025-03-12 03:19:39<SeP>2025-03-12 03:44:42<SeP>2025-03-12 04:09:45<SeP>2025-03-12 04:34:48<SeP>2025-03-12 04:59:51<SeP>2025-03-12 05:24:54<SeP>2025-03-12 05:49:57<SeP>2025-03-12 06:15:00<SeP>2025-03-12 06:40:03<SeP>2025-03-12 07:05:06<SeP>2025-03-12 07:30:09<SeP>2025-03-12 07:55:12<SeP>2025-03-12 08:20:15<SeP>2025-03-12 08:45:18<SeP>2025-03-12 09:10:21<SeP>2025-03-12 09:35:24<SeP>2025-03-12 10:00:27<SeP>2025-03-12 10:25:30<SeP>2025-03-12 10:50:33<SeP>2025-03-12 11:15:36<SeP>2025-03-12 11:40:39<SeP>2025-03-12 12:05:42<SeP>2025-03-12 12:30:45<SeP>2025-03-12 12:55:48<SeP>2025-03-12 13:20:51<SeP>2025-03-12 13:45:54<SeP>2025-03-12 14:10:57<SeP>2025-03-12 14:36:00<SeP>2025-03-12 15:01:03<SeP>2025-03-12 15:26:06<SeP>2025-03-12 15:51:09<SeP>2025-03-12 16:16:12<SeP>2025-03-12 16:41:15<SeP>2025-03-12 17:06:18<SeP>2025-03-12 17:31:21<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:21:27<SeP>2025-03-12 18:46:30<SeP>2025-03-12 19:11:33<SeP>2025-03-12 19:36:36<SeP>2025-03-12 20:01:39<SeP>2025-03-12 20:26:42<SeP>2025-03-12 20:51:45<SeP>2025-03-12 21:16:48<SeP>2025-03-12 21:41:51<SeP>2025-03-12 22:06:54<SeP>2025-03-12 22:31:57<SeP>2025-03-12 22:57:00<SeP>2025-03-12 23:22:03<SeP>2025-03-12 23:47:06<SeP>2025-03-13 00:12:09<SeP>2025-03-13 00:37:12<SeP>2025-03-13 01:02:15<SeP>2025-03-13 01:27:18<SeP>2025-03-13 01:52:21<SeP>2025-03-13 02:17:24<SeP>2025-03-13 02:42:27<SeP>2025-03-13 03:07:30<SeP>2025-03-13 03:32:33<SeP>2025-03-13 03:57:36<SeP>2025-03-13 04:22:39<SeP>2025-03-13 04:47:42<SeP>2025-03-13 05:12:45<SeP>2025-03-13 05:37:48<SeP>2025-03-13 06:02:51<SeP>2025-03-13 06:27:54<SeP>2025-03-13 06:52:57<SeP>2025-03-13 07:18:00<SeP>2025-03-13 07:43:03<SeP>2025-03-13 08:08:06<SeP>2025-03-13 08:33:09<SeP>2025-03-13 08:58:12<SeP>2025-03-13 09:23:15<SeP>2025-03-13 09:48:18<SeP>2025-03-13 10:13:21<SeP>2025-03-13 10:38:24<SeP>2025-03-13 11:03:27<SeP>2025-03-13 11:28:30<SeP>2025-03-13 11:53:33<SeP>2025-03-13 12:18:36<SeP>2025-03-13 12:43:39<SeP>2025-03-13 13:08:42<SeP>2025-03-13 13:33:45<SeP>2025-03-13 13:58:48<SeP>2025-03-13 14:23:51<SeP>2025-03-13 14:48:54<SeP>2025-03-13 15:13:57<SeP>2025-03-13 15:39:00<SeP>2025-03-13 16:04:03<SeP>2025-03-13 16:29:06<SeP>2025-03-13 16:54:09<SeP>2025-03-13 17:19:12<SeP>2025-03-13 17:44:15<SeP>2025-03-13 18:09:18<SeP>2025-03-13 18:34:21<SeP>2025-03-13 18:59:24<SeP>2025-03-13 19:24:27<SeP>2025-03-13 19:49:30<SeP>2025-03-13 20:14:33<SeP>2025-03-13 20:39:36<SeP>2025-03-13 21:04:39<SeP>2025-03-13 21:29:42<SeP>2025-03-13 21:54:45<SeP>2025-03-13 22:19:48<SeP>2025-03-13 22:44:51<SeP>2025-03-13 23:09:54<SeP>2025-03-13 23:34:57";
  const itemLabel       = "Scans";
  const itemData        = "51<SeP>212<SeP>116<SeP>25<SeP>14<SeP>9<SeP>8<SeP>9<SeP>6<SeP>4<SeP>3<SeP>25<SeP>10<SeP>7<SeP>4<SeP>7<SeP>1<SeP>4<SeP>5<SeP>6<SeP>10<SeP>20<SeP>11<SeP>8<SeP>8<SeP>12<SeP>8<SeP>9<SeP>16<SeP>11<SeP>9<SeP>31<SeP>10<SeP>8<SeP>8<SeP>46<SeP>15<SeP>8<SeP>43<SeP>7<SeP>9<SeP>20<SeP>51<SeP>88<SeP>24<SeP>21<SeP>21<SeP>13<SeP>20<SeP>19<SeP>15<SeP>11<SeP>11<SeP>29<SeP>83<SeP>124<SeP>121<SeP>12<SeP>28<SeP>9<SeP>9<SeP>15<SeP>12<SeP>14<SeP>21<SeP>26<SeP>36<SeP>11<SeP>121<SeP>104<SeP>11<SeP>27<SeP>57<SeP>43<SeP>8<SeP>24<SeP>14<SeP>124<SeP>36<SeP>11<SeP>13<SeP>7<SeP>14<SeP>17<SeP>11<SeP>15<SeP>5<SeP>6<SeP>29<SeP>9<SeP>11<SeP>32<SeP>10<SeP>5<SeP>14<SeP>9<SeP>9<SeP>12<SeP>34<SeP>8<SeP>11<SeP>14<SeP>8<SeP>9<SeP>10<SeP>16<SeP>14<SeP>13<SeP>10<SeP>10<SeP>6<SeP>34<SeP>7<SeP>3<SeP>7<SeP>3<SeP>4<SeP>6<SeP>3<SeP>5<SeP>22<SeP>16<SeP>26<SeP>25<SeP>14<SeP>8<SeP>6<SeP>17<SeP>6<SeP>57<SeP>14<SeP>7<SeP>13<SeP>14<SeP>12<SeP>19<SeP>14<SeP>13<SeP>33<SeP>7<SeP>11<SeP>6<SeP>12<SeP>10<SeP>30<SeP>11<SeP>5<SeP>11<SeP>8<SeP>3<SeP>38<SeP>0<SeP>13<SeP>10<SeP>4<SeP>5<SeP>8<SeP>8<SeP>5<SeP>1<SeP>17<SeP>2<SeP>10<SeP>4<SeP>13<SeP>5<SeP>3<SeP>88<SeP>17<SeP>8<SeP>7<SeP>3<SeP>8<SeP>6<SeP>9<SeP>5<SeP>14<SeP>13<SeP>757<SeP>11<SeP>12<SeP>27<SeP>8<SeP>7<SeP>13<SeP>37<SeP>19<SeP>17<SeP>24<SeP>22<SeP>17<SeP>21<SeP>8<SeP>54<SeP>26<SeP>17<SeP>49<SeP>12<SeP>13<SeP>51<SeP>18<SeP>18<SeP>14<SeP>14<SeP>38<SeP>11<SeP>11<SeP>5<SeP>0<SeP>8<SeP>9<SeP>6<SeP>2<SeP>3<SeP>0<SeP>24<SeP>7<SeP>0<SeP>18<SeP>7<SeP>29<SeP>78<SeP>47<SeP>24<SeP>10<SeP>23<SeP>34<SeP>7<SeP>12<SeP>12<SeP>36<SeP>28<SeP>14<SeP>10<SeP>41<SeP>7<SeP>3<SeP>23<SeP>13<SeP>3<SeP>4<SeP>55<SeP>45<SeP>5<SeP>3<SeP>8<SeP>3<SeP>3<SeP>1<SeP>9<SeP>11<SeP>12<SeP>14<SeP>9<SeP>15<SeP>11<SeP>55<SeP>30<SeP>12<SeP>8<SeP>62<SeP>38<SeP>18<SeP>26<SeP>2<SeP>17<SeP>5<SeP>6<SeP>26<SeP>6<SeP>10<SeP>6<SeP>15<SeP>4<SeP>25<SeP>23<SeP>7<SeP>3<SeP>29<SeP>7<SeP>11<SeP>13<SeP>7<SeP>9<SeP>15<SeP>67<SeP>15<SeP>13<SeP>10<SeP>9<SeP>6<SeP>7<SeP>12<SeP>14<SeP>21<SeP>49<SeP>14<SeP>17<SeP>12<SeP>14<SeP>19<SeP>16<SeP>32<SeP>17<SeP>8<SeP>12<SeP>20<SeP>34<SeP>11<SeP>5<SeP>13<SeP>6<SeP>20<SeP>19<SeP>43<SeP>39<SeP>8<SeP>4<SeP>4<SeP>16<SeP>18<SeP>8<SeP>29<SeP>24<SeP>45<SeP>10<SeP>12<SeP>64<SeP>65<SeP>20<SeP>16<SeP>15<SeP>15<SeP>34<SeP>11<SeP>16<SeP>44<SeP>20<SeP>45<SeP>22<SeP>21<SeP>25<SeP>21<SeP>20<SeP>23<SeP>19<SeP>15<SeP>15<SeP>16<SeP>12<SeP>49<SeP>9<SeP>3<SeP>10<SeP>4<SeP>8<SeP>17<SeP>13<SeP>18<SeP>29<SeP>5<SeP>21<SeP>15<SeP>8<SeP>20<SeP>15<SeP>22<SeP>20<SeP>42<SeP>51<SeP>31<SeP>13<SeP>25<SeP>13<SeP>26<SeP>39<SeP>18<SeP>11<SeP>10<SeP>35<SeP>3<SeP>12<SeP>10<SeP>16<SeP>14<SeP>12<SeP>21<SeP>22<SeP>20<SeP>25<SeP>7<SeP>17<SeP>8<SeP>22<SeP>13<SeP>16<SeP>16<SeP>22<SeP>10<SeP>19";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-03-07 00:00:00<SeP>2025-03-07 00:25:03<SeP>2025-03-07 00:50:06<SeP>2025-03-07 01:15:09<SeP>2025-03-07 01:40:12<SeP>2025-03-07 02:05:15<SeP>2025-03-07 02:30:18<SeP>2025-03-07 02:55:21<SeP>2025-03-07 03:20:24<SeP>2025-03-07 03:45:27<SeP>2025-03-07 04:10:30<SeP>2025-03-07 04:35:33<SeP>2025-03-07 05:00:36<SeP>2025-03-07 05:25:39<SeP>2025-03-07 05:50:42<SeP>2025-03-07 06:15:45<SeP>2025-03-07 06:40:48<SeP>2025-03-07 07:05:51<SeP>2025-03-07 07:30:54<SeP>2025-03-07 07:55:57<SeP>2025-03-07 08:21:00<SeP>2025-03-07 08:46:03<SeP>2025-03-07 09:11:06<SeP>2025-03-07 09:36:09<SeP>2025-03-07 10:01:12<SeP>2025-03-07 10:26:15<SeP>2025-03-07 10:51:18<SeP>2025-03-07 11:16:21<SeP>2025-03-07 11:41:24<SeP>2025-03-07 12:06:27<SeP>2025-03-07 12:31:30<SeP>2025-03-07 12:56:33<SeP>2025-03-07 13:21:36<SeP>2025-03-07 13:46:39<SeP>2025-03-07 14:11:42<SeP>2025-03-07 14:36:45<SeP>2025-03-07 15:01:48<SeP>2025-03-07 15:26:51<SeP>2025-03-07 15:51:54<SeP>2025-03-07 16:16:57<SeP>2025-03-07 16:42:00<SeP>2025-03-07 17:07:03<SeP>2025-03-07 17:32:06<SeP>2025-03-07 17:57:09<SeP>2025-03-07 18:22:12<SeP>2025-03-07 18:47:15<SeP>2025-03-07 19:12:18<SeP>2025-03-07 19:37:21<SeP>2025-03-07 20:02:24<SeP>2025-03-07 20:27:27<SeP>2025-03-07 20:52:30<SeP>2025-03-07 21:17:33<SeP>2025-03-07 21:42:36<SeP>2025-03-07 22:07:39<SeP>2025-03-07 22:32:42<SeP>2025-03-07 22:57:45<SeP>2025-03-07 23:22:48<SeP>2025-03-07 23:47:51<SeP>2025-03-08 00:12:54<SeP>2025-03-08 00:37:57<SeP>2025-03-08 01:03:00<SeP>2025-03-08 01:28:03<SeP>2025-03-08 01:53:06<SeP>2025-03-08 02:18:09<SeP>2025-03-08 02:43:12<SeP>2025-03-08 03:08:15<SeP>2025-03-08 03:33:18<SeP>2025-03-08 03:58:21<SeP>2025-03-08 04:23:24<SeP>2025-03-08 04:48:27<SeP>2025-03-08 05:13:30<SeP>2025-03-08 05:38:33<SeP>2025-03-08 06:03:36<SeP>2025-03-08 06:28:39<SeP>2025-03-08 06:53:42<SeP>2025-03-08 07:18:45<SeP>2025-03-08 07:43:48<SeP>2025-03-08 08:08:51<SeP>2025-03-08 08:33:54<SeP>2025-03-08 08:58:57<SeP>2025-03-08 09:24:00<SeP>2025-03-08 09:49:03<SeP>2025-03-08 10:14:06<SeP>2025-03-08 10:39:09<SeP>2025-03-08 11:04:12<SeP>2025-03-08 11:29:15<SeP>2025-03-08 11:54:18<SeP>2025-03-08 12:19:21<SeP>2025-03-08 12:44:24<SeP>2025-03-08 13:09:27<SeP>2025-03-08 13:34:30<SeP>2025-03-08 13:59:33<SeP>2025-03-08 14:24:36<SeP>2025-03-08 14:49:39<SeP>2025-03-08 15:14:42<SeP>2025-03-08 15:39:45<SeP>2025-03-08 16:04:48<SeP>2025-03-08 16:29:51<SeP>2025-03-08 16:54:54<SeP>2025-03-08 17:19:57<SeP>2025-03-08 17:45:00<SeP>2025-03-08 18:10:03<SeP>2025-03-08 18:35:06<SeP>2025-03-08 19:00:09<SeP>2025-03-08 19:25:12<SeP>2025-03-08 19:50:15<SeP>2025-03-08 20:15:18<SeP>2025-03-08 20:40:21<SeP>2025-03-08 21:05:24<SeP>2025-03-08 21:30:27<SeP>2025-03-08 21:55:30<SeP>2025-03-08 22:20:33<SeP>2025-03-08 22:45:36<SeP>2025-03-08 23:10:39<SeP>2025-03-08 23:35:42<SeP>2025-03-09 00:00:45<SeP>2025-03-09 00:25:48<SeP>2025-03-09 00:50:51<SeP>2025-03-09 01:15:54<SeP>2025-03-09 01:40:57<SeP>2025-03-09 03:06:00<SeP>2025-03-09 03:31:03<SeP>2025-03-09 03:56:06<SeP>2025-03-09 04:21:09<SeP>2025-03-09 04:46:12<SeP>2025-03-09 05:11:15<SeP>2025-03-09 05:36:18<SeP>2025-03-09 06:01:21<SeP>2025-03-09 06:26:24<SeP>2025-03-09 06:51:27<SeP>2025-03-09 07:16:30<SeP>2025-03-09 07:41:33<SeP>2025-03-09 08:06:36<SeP>2025-03-09 08:31:39<SeP>2025-03-09 08:56:42<SeP>2025-03-09 09:21:45<SeP>2025-03-09 09:46:48<SeP>2025-03-09 10:11:51<SeP>2025-03-09 10:36:54<SeP>2025-03-09 11:01:57<SeP>2025-03-09 11:27:00<SeP>2025-03-09 11:52:03<SeP>2025-03-09 12:17:06<SeP>2025-03-09 12:42:09<SeP>2025-03-09 13:07:12<SeP>2025-03-09 13:32:15<SeP>2025-03-09 13:57:18<SeP>2025-03-09 14:22:21<SeP>2025-03-09 14:47:24<SeP>2025-03-09 15:12:27<SeP>2025-03-09 15:37:30<SeP>2025-03-09 16:02:33<SeP>2025-03-09 16:27:36<SeP>2025-03-09 16:52:39<SeP>2025-03-09 17:17:42<SeP>2025-03-09 17:42:45<SeP>2025-03-09 18:07:48<SeP>2025-03-09 18:32:51<SeP>2025-03-09 18:57:54<SeP>2025-03-09 19:22:57<SeP>2025-03-09 19:48:00<SeP>2025-03-09 20:13:03<SeP>2025-03-09 20:38:06<SeP>2025-03-09 21:03:09<SeP>2025-03-09 21:28:12<SeP>2025-03-09 21:53:15<SeP>2025-03-09 22:18:18<SeP>2025-03-09 22:43:21<SeP>2025-03-09 23:08:24<SeP>2025-03-09 23:33:27<SeP>2025-03-09 23:58:30<SeP>2025-03-10 00:23:33<SeP>2025-03-10 00:48:36<SeP>2025-03-10 01:13:39<SeP>2025-03-10 01:38:42<SeP>2025-03-10 02:03:45<SeP>2025-03-10 02:28:48<SeP>2025-03-10 02:53:51<SeP>2025-03-10 03:18:54<SeP>2025-03-10 03:43:57<SeP>2025-03-10 04:09:00<SeP>2025-03-10 04:34:03<SeP>2025-03-10 04:59:06<SeP>2025-03-10 05:24:09<SeP>2025-03-10 05:49:12<SeP>2025-03-10 06:14:15<SeP>2025-03-10 06:39:18<SeP>2025-03-10 07:04:21<SeP>2025-03-10 07:29:24<SeP>2025-03-10 07:54:27<SeP>2025-03-10 08:19:30<SeP>2025-03-10 08:44:33<SeP>2025-03-10 09:09:36<SeP>2025-03-10 09:34:39<SeP>2025-03-10 09:59:42<SeP>2025-03-10 10:24:45<SeP>2025-03-10 10:49:48<SeP>2025-03-10 11:14:51<SeP>2025-03-10 11:39:54<SeP>2025-03-10 12:04:57<SeP>2025-03-10 12:30:00<SeP>2025-03-10 12:55:03<SeP>2025-03-10 13:20:06<SeP>2025-03-10 13:45:09<SeP>2025-03-10 14:10:12<SeP>2025-03-10 14:35:15<SeP>2025-03-10 15:00:18<SeP>2025-03-10 15:25:21<SeP>2025-03-10 15:50:24<SeP>2025-03-10 16:15:27<SeP>2025-03-10 16:40:30<SeP>2025-03-10 17:05:33<SeP>2025-03-10 17:30:36<SeP>2025-03-10 17:55:39<SeP>2025-03-10 18:20:42<SeP>2025-03-10 18:45:45<SeP>2025-03-10 19:10:48<SeP>2025-03-10 19:35:51<SeP>2025-03-10 20:00:54<SeP>2025-03-10 20:25:57<SeP>2025-03-10 20:51:00<SeP>2025-03-10 21:16:03<SeP>2025-03-10 21:41:06<SeP>2025-03-10 22:06:09<SeP>2025-03-10 22:31:12<SeP>2025-03-10 22:56:15<SeP>2025-03-10 23:21:18<SeP>2025-03-10 23:46:21<SeP>2025-03-11 00:11:24<SeP>2025-03-11 00:36:27<SeP>2025-03-11 01:01:30<SeP>2025-03-11 01:26:33<SeP>2025-03-11 01:51:36<SeP>2025-03-11 02:16:39<SeP>2025-03-11 02:41:42<SeP>2025-03-11 03:06:45<SeP>2025-03-11 03:31:48<SeP>2025-03-11 03:56:51<SeP>2025-03-11 04:21:54<SeP>2025-03-11 04:46:57<SeP>2025-03-11 05:12:00<SeP>2025-03-11 05:37:03<SeP>2025-03-11 06:02:06<SeP>2025-03-11 06:27:09<SeP>2025-03-11 06:52:12<SeP>2025-03-11 07:17:15<SeP>2025-03-11 07:42:18<SeP>2025-03-11 08:07:21<SeP>2025-03-11 08:32:24<SeP>2025-03-11 08:57:27<SeP>2025-03-11 09:22:30<SeP>2025-03-11 09:47:33<SeP>2025-03-11 10:12:36<SeP>2025-03-11 10:37:39<SeP>2025-03-11 11:02:42<SeP>2025-03-11 11:27:45<SeP>2025-03-11 11:52:48<SeP>2025-03-11 12:17:51<SeP>2025-03-11 12:42:54<SeP>2025-03-11 13:07:57<SeP>2025-03-11 13:33:00<SeP>2025-03-11 13:58:03<SeP>2025-03-11 14:23:06<SeP>2025-03-11 14:48:09<SeP>2025-03-11 15:13:12<SeP>2025-03-11 15:38:15<SeP>2025-03-11 16:03:18<SeP>2025-03-11 16:28:21<SeP>2025-03-11 16:53:24<SeP>2025-03-11 17:18:27<SeP>2025-03-11 17:43:30<SeP>2025-03-11 18:08:33<SeP>2025-03-11 18:33:36<SeP>2025-03-11 18:58:39<SeP>2025-03-11 19:23:42<SeP>2025-03-11 19:48:45<SeP>2025-03-11 20:13:48<SeP>2025-03-11 20:38:51<SeP>2025-03-11 21:03:54<SeP>2025-03-11 21:28:57<SeP>2025-03-11 21:54:00<SeP>2025-03-11 22:19:03<SeP>2025-03-11 22:44:06<SeP>2025-03-11 23:09:09<SeP>2025-03-11 23:34:12<SeP>2025-03-11 23:59:15<SeP>2025-03-12 00:24:18<SeP>2025-03-12 00:49:21<SeP>2025-03-12 01:14:24<SeP>2025-03-12 01:39:27<SeP>2025-03-12 02:04:30<SeP>2025-03-12 02:29:33<SeP>2025-03-12 02:54:36<SeP>2025-03-12 03:19:39<SeP>2025-03-12 03:44:42<SeP>2025-03-12 04:09:45<SeP>2025-03-12 04:34:48<SeP>2025-03-12 04:59:51<SeP>2025-03-12 05:24:54<SeP>2025-03-12 05:49:57<SeP>2025-03-12 06:15:00<SeP>2025-03-12 06:40:03<SeP>2025-03-12 07:05:06<SeP>2025-03-12 07:30:09<SeP>2025-03-12 07:55:12<SeP>2025-03-12 08:20:15<SeP>2025-03-12 08:45:18<SeP>2025-03-12 09:10:21<SeP>2025-03-12 09:35:24<SeP>2025-03-12 10:00:27<SeP>2025-03-12 10:25:30<SeP>2025-03-12 10:50:33<SeP>2025-03-12 11:15:36<SeP>2025-03-12 11:40:39<SeP>2025-03-12 12:05:42<SeP>2025-03-12 12:30:45<SeP>2025-03-12 12:55:48<SeP>2025-03-12 13:20:51<SeP>2025-03-12 13:45:54<SeP>2025-03-12 14:10:57<SeP>2025-03-12 14:36:00<SeP>2025-03-12 15:01:03<SeP>2025-03-12 15:26:06<SeP>2025-03-12 15:51:09<SeP>2025-03-12 16:16:12<SeP>2025-03-12 16:41:15<SeP>2025-03-12 17:06:18<SeP>2025-03-12 17:31:21<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:21:27<SeP>2025-03-12 18:46:30<SeP>2025-03-12 19:11:33<SeP>2025-03-12 19:36:36<SeP>2025-03-12 20:01:39<SeP>2025-03-12 20:26:42<SeP>2025-03-12 20:51:45<SeP>2025-03-12 21:16:48<SeP>2025-03-12 21:41:51<SeP>2025-03-12 22:06:54<SeP>2025-03-12 22:31:57<SeP>2025-03-12 22:57:00<SeP>2025-03-12 23:22:03<SeP>2025-03-12 23:47:06<SeP>2025-03-13 00:12:09<SeP>2025-03-13 00:37:12<SeP>2025-03-13 01:02:15<SeP>2025-03-13 01:27:18<SeP>2025-03-13 01:52:21<SeP>2025-03-13 02:17:24<SeP>2025-03-13 02:42:27<SeP>2025-03-13 03:07:30<SeP>2025-03-13 03:32:33<SeP>2025-03-13 03:57:36<SeP>2025-03-13 04:22:39<SeP>2025-03-13 04:47:42<SeP>2025-03-13 05:12:45<SeP>2025-03-13 05:37:48<SeP>2025-03-13 06:02:51<SeP>2025-03-13 06:27:54<SeP>2025-03-13 06:52:57<SeP>2025-03-13 07:18:00<SeP>2025-03-13 07:43:03<SeP>2025-03-13 08:08:06<SeP>2025-03-13 08:33:09<SeP>2025-03-13 08:58:12<SeP>2025-03-13 09:23:15<SeP>2025-03-13 09:48:18<SeP>2025-03-13 10:13:21<SeP>2025-03-13 10:38:24<SeP>2025-03-13 11:03:27<SeP>2025-03-13 11:28:30<SeP>2025-03-13 11:53:33<SeP>2025-03-13 12:18:36<SeP>2025-03-13 12:43:39<SeP>2025-03-13 13:08:42<SeP>2025-03-13 13:33:45<SeP>2025-03-13 13:58:48<SeP>2025-03-13 14:23:51<SeP>2025-03-13 14:48:54<SeP>2025-03-13 15:13:57<SeP>2025-03-13 15:39:00<SeP>2025-03-13 16:04:03<SeP>2025-03-13 16:29:06<SeP>2025-03-13 16:54:09<SeP>2025-03-13 17:19:12<SeP>2025-03-13 17:44:15<SeP>2025-03-13 18:09:18<SeP>2025-03-13 18:34:21<SeP>2025-03-13 18:59:24<SeP>2025-03-13 19:24:27<SeP>2025-03-13 19:49:30<SeP>2025-03-13 20:14:33<SeP>2025-03-13 20:39:36<SeP>2025-03-13 21:04:39<SeP>2025-03-13 21:29:42<SeP>2025-03-13 21:54:45<SeP>2025-03-13 22:19:48<SeP>2025-03-13 22:44:51<SeP>2025-03-13 23:09:54<SeP>2025-03-13 23:34:57";
  const itemLabel       = "Attacks";
  const itemData        = "7<SeP>5<SeP>26<SeP>76<SeP>66<SeP>6<SeP>5<SeP>16<SeP>10<SeP>10<SeP>21<SeP>66<SeP>51<SeP>94<SeP>173<SeP>153<SeP>135<SeP>42<SeP>45<SeP>28<SeP>12<SeP>26<SeP>11<SeP>9<SeP>29<SeP>35<SeP>33<SeP>33<SeP>23<SeP>8<SeP>114<SeP>10<SeP>9<SeP>7<SeP>8<SeP>10<SeP>9<SeP>10<SeP>8<SeP>9<SeP>12<SeP>15<SeP>7<SeP>35<SeP>58<SeP>18<SeP>4<SeP>6<SeP>32<SeP>6<SeP>9<SeP>27<SeP>29<SeP>28<SeP>8<SeP>31<SeP>43<SeP>19<SeP>6<SeP>18<SeP>20<SeP>39<SeP>91<SeP>84<SeP>18<SeP>12<SeP>19<SeP>7<SeP>6<SeP>4<SeP>4<SeP>3<SeP>4<SeP>4<SeP>1<SeP>4<SeP>3<SeP>1<SeP>22<SeP>65<SeP>57<SeP>40<SeP>59<SeP>21<SeP>19<SeP>10<SeP>11<SeP>5<SeP>8<SeP>6<SeP>38<SeP>25<SeP>6<SeP>0<SeP>3<SeP>3<SeP>2<SeP>15<SeP>4<SeP>3<SeP>2<SeP>8<SeP>3<SeP>4<SeP>6<SeP>5<SeP>56<SeP>12<SeP>57<SeP>156<SeP>49<SeP>25<SeP>17<SeP>17<SeP>8<SeP>5<SeP>6<SeP>10<SeP>9<SeP>68<SeP>73<SeP>8<SeP>9<SeP>64<SeP>33<SeP>4<SeP>2<SeP>3<SeP>5<SeP>1<SeP>3<SeP>4<SeP>3<SeP>4<SeP>11<SeP>4<SeP>9<SeP>4<SeP>23<SeP>35<SeP>20<SeP>23<SeP>7<SeP>6<SeP>4<SeP>5<SeP>10<SeP>32<SeP>5<SeP>7<SeP>221<SeP>28<SeP>24<SeP>23<SeP>16<SeP>7<SeP>10<SeP>3<SeP>6<SeP>6<SeP>2<SeP>1<SeP>2<SeP>18<SeP>12<SeP>3<SeP>7<SeP>4<SeP>253<SeP>236<SeP>7<SeP>7<SeP>50<SeP>44<SeP>42<SeP>254<SeP>17<SeP>252<SeP>15<SeP>12<SeP>12<SeP>305<SeP>11<SeP>6<SeP>5<SeP>7<SeP>7<SeP>21<SeP>7<SeP>8<SeP>25<SeP>40<SeP>37<SeP>18<SeP>8<SeP>6<SeP>6<SeP>10<SeP>14<SeP>13<SeP>9<SeP>43<SeP>35<SeP>40<SeP>17<SeP>9<SeP>17<SeP>4<SeP>6<SeP>26<SeP>39<SeP>41<SeP>11<SeP>8<SeP>7<SeP>6<SeP>7<SeP>6<SeP>7<SeP>13<SeP>97<SeP>178<SeP>69<SeP>58<SeP>47<SeP>29<SeP>9<SeP>59<SeP>167<SeP>68<SeP>6<SeP>15<SeP>5<SeP>2<SeP>22<SeP>27<SeP>36<SeP>42<SeP>1<SeP>2<SeP>3<SeP>16<SeP>6<SeP>4<SeP>84<SeP>114<SeP>18<SeP>8<SeP>8<SeP>6<SeP>5<SeP>17<SeP>5<SeP>2<SeP>5<SeP>7<SeP>47<SeP>102<SeP>25<SeP>2<SeP>1<SeP>31<SeP>67<SeP>90<SeP>95<SeP>300<SeP>40<SeP>20<SeP>26<SeP>34<SeP>15<SeP>7<SeP>4<SeP>15<SeP>3<SeP>13<SeP>10<SeP>9<SeP>16<SeP>15<SeP>6<SeP>3<SeP>60<SeP>94<SeP>33<SeP>15<SeP>13<SeP>16<SeP>18<SeP>51<SeP>93<SeP>21<SeP>14<SeP>5<SeP>7<SeP>5<SeP>1<SeP>3<SeP>3<SeP>8<SeP>5<SeP>43<SeP>43<SeP>11<SeP>5<SeP>7<SeP>38<SeP>57<SeP>60<SeP>21<SeP>12<SeP>23<SeP>32<SeP>45<SeP>44<SeP>72<SeP>35<SeP>25<SeP>20<SeP>40<SeP>32<SeP>34<SeP>34<SeP>27<SeP>60<SeP>102<SeP>165<SeP>44<SeP>27<SeP>24<SeP>24<SeP>28<SeP>42<SeP>61<SeP>40<SeP>28<SeP>26<SeP>38<SeP>36<SeP>66<SeP>27<SeP>35<SeP>27<SeP>28<SeP>65<SeP>44<SeP>59<SeP>75<SeP>31<SeP>30<SeP>24<SeP>47<SeP>20<SeP>36<SeP>57<SeP>41<SeP>41<SeP>17<SeP>28<SeP>30<SeP>34<SeP>32<SeP>21<SeP>23<SeP>20<SeP>24<SeP>28<SeP>23<SeP>21<SeP>66<SeP>69<SeP>22<SeP>19<SeP>95<SeP>12<SeP>18<SeP>25<SeP>63<SeP>285<SeP>15<SeP>7<SeP>48<SeP>71<SeP>28<SeP>7<SeP>43<SeP>57<SeP>10<SeP>13<SeP>81<SeP>28<SeP>2<SeP>7<SeP>5<SeP>13<SeP>7<SeP>28<SeP>9<SeP>6<SeP>20";
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
  const labelsData       = "2025-03-07 00:00:00<SeP>2025-03-07 00:25:03<SeP>2025-03-07 00:50:06<SeP>2025-03-07 01:15:09<SeP>2025-03-07 01:40:12<SeP>2025-03-07 02:05:15<SeP>2025-03-07 02:30:18<SeP>2025-03-07 02:55:21<SeP>2025-03-07 03:20:24<SeP>2025-03-07 03:45:27<SeP>2025-03-07 04:10:30<SeP>2025-03-07 04:35:33<SeP>2025-03-07 05:00:36<SeP>2025-03-07 05:25:39<SeP>2025-03-07 05:50:42<SeP>2025-03-07 06:15:45<SeP>2025-03-07 06:40:48<SeP>2025-03-07 07:05:51<SeP>2025-03-07 07:30:54<SeP>2025-03-07 07:55:57<SeP>2025-03-07 08:21:00<SeP>2025-03-07 08:46:03<SeP>2025-03-07 09:11:06<SeP>2025-03-07 09:36:09<SeP>2025-03-07 10:01:12<SeP>2025-03-07 10:26:15<SeP>2025-03-07 10:51:18<SeP>2025-03-07 11:16:21<SeP>2025-03-07 11:41:24<SeP>2025-03-07 12:06:27<SeP>2025-03-07 12:31:30<SeP>2025-03-07 12:56:33<SeP>2025-03-07 13:21:36<SeP>2025-03-07 13:46:39<SeP>2025-03-07 14:11:42<SeP>2025-03-07 14:36:45<SeP>2025-03-07 15:01:48<SeP>2025-03-07 15:26:51<SeP>2025-03-07 15:51:54<SeP>2025-03-07 16:16:57<SeP>2025-03-07 16:42:00<SeP>2025-03-07 17:07:03<SeP>2025-03-07 17:32:06<SeP>2025-03-07 17:57:09<SeP>2025-03-07 18:22:12<SeP>2025-03-07 18:47:15<SeP>2025-03-07 19:12:18<SeP>2025-03-07 19:37:21<SeP>2025-03-07 20:02:24<SeP>2025-03-07 20:27:27<SeP>2025-03-07 20:52:30<SeP>2025-03-07 21:17:33<SeP>2025-03-07 21:42:36<SeP>2025-03-07 22:07:39<SeP>2025-03-07 22:32:42<SeP>2025-03-07 22:57:45<SeP>2025-03-07 23:22:48<SeP>2025-03-07 23:47:51<SeP>2025-03-08 00:12:54<SeP>2025-03-08 00:37:57<SeP>2025-03-08 01:03:00<SeP>2025-03-08 01:28:03<SeP>2025-03-08 01:53:06<SeP>2025-03-08 02:18:09<SeP>2025-03-08 02:43:12<SeP>2025-03-08 03:08:15<SeP>2025-03-08 03:33:18<SeP>2025-03-08 03:58:21<SeP>2025-03-08 04:23:24<SeP>2025-03-08 04:48:27<SeP>2025-03-08 05:13:30<SeP>2025-03-08 05:38:33<SeP>2025-03-08 06:03:36<SeP>2025-03-08 06:28:39<SeP>2025-03-08 06:53:42<SeP>2025-03-08 07:18:45<SeP>2025-03-08 07:43:48<SeP>2025-03-08 08:08:51<SeP>2025-03-08 08:33:54<SeP>2025-03-08 08:58:57<SeP>2025-03-08 09:24:00<SeP>2025-03-08 09:49:03<SeP>2025-03-08 10:14:06<SeP>2025-03-08 10:39:09<SeP>2025-03-08 11:04:12<SeP>2025-03-08 11:29:15<SeP>2025-03-08 11:54:18<SeP>2025-03-08 12:19:21<SeP>2025-03-08 12:44:24<SeP>2025-03-08 13:09:27<SeP>2025-03-08 13:34:30<SeP>2025-03-08 13:59:33<SeP>2025-03-08 14:24:36<SeP>2025-03-08 14:49:39<SeP>2025-03-08 15:14:42<SeP>2025-03-08 15:39:45<SeP>2025-03-08 16:04:48<SeP>2025-03-08 16:29:51<SeP>2025-03-08 16:54:54<SeP>2025-03-08 17:19:57<SeP>2025-03-08 17:45:00<SeP>2025-03-08 18:10:03<SeP>2025-03-08 18:35:06<SeP>2025-03-08 19:00:09<SeP>2025-03-08 19:25:12<SeP>2025-03-08 19:50:15<SeP>2025-03-08 20:15:18<SeP>2025-03-08 20:40:21<SeP>2025-03-08 21:05:24<SeP>2025-03-08 21:30:27<SeP>2025-03-08 21:55:30<SeP>2025-03-08 22:20:33<SeP>2025-03-08 22:45:36<SeP>2025-03-08 23:10:39<SeP>2025-03-08 23:35:42<SeP>2025-03-09 00:00:45<SeP>2025-03-09 00:25:48<SeP>2025-03-09 00:50:51<SeP>2025-03-09 01:15:54<SeP>2025-03-09 01:40:57<SeP>2025-03-09 03:06:00<SeP>2025-03-09 03:31:03<SeP>2025-03-09 03:56:06<SeP>2025-03-09 04:21:09<SeP>2025-03-09 04:46:12<SeP>2025-03-09 05:11:15<SeP>2025-03-09 05:36:18<SeP>2025-03-09 06:01:21<SeP>2025-03-09 06:26:24<SeP>2025-03-09 06:51:27<SeP>2025-03-09 07:16:30<SeP>2025-03-09 07:41:33<SeP>2025-03-09 08:06:36<SeP>2025-03-09 08:31:39<SeP>2025-03-09 08:56:42<SeP>2025-03-09 09:21:45<SeP>2025-03-09 09:46:48<SeP>2025-03-09 10:11:51<SeP>2025-03-09 10:36:54<SeP>2025-03-09 11:01:57<SeP>2025-03-09 11:27:00<SeP>2025-03-09 11:52:03<SeP>2025-03-09 12:17:06<SeP>2025-03-09 12:42:09<SeP>2025-03-09 13:07:12<SeP>2025-03-09 13:32:15<SeP>2025-03-09 13:57:18<SeP>2025-03-09 14:22:21<SeP>2025-03-09 14:47:24<SeP>2025-03-09 15:12:27<SeP>2025-03-09 15:37:30<SeP>2025-03-09 16:02:33<SeP>2025-03-09 16:27:36<SeP>2025-03-09 16:52:39<SeP>2025-03-09 17:17:42<SeP>2025-03-09 17:42:45<SeP>2025-03-09 18:07:48<SeP>2025-03-09 18:32:51<SeP>2025-03-09 18:57:54<SeP>2025-03-09 19:22:57<SeP>2025-03-09 19:48:00<SeP>2025-03-09 20:13:03<SeP>2025-03-09 20:38:06<SeP>2025-03-09 21:03:09<SeP>2025-03-09 21:28:12<SeP>2025-03-09 21:53:15<SeP>2025-03-09 22:18:18<SeP>2025-03-09 22:43:21<SeP>2025-03-09 23:08:24<SeP>2025-03-09 23:33:27<SeP>2025-03-09 23:58:30<SeP>2025-03-10 00:23:33<SeP>2025-03-10 00:48:36<SeP>2025-03-10 01:13:39<SeP>2025-03-10 01:38:42<SeP>2025-03-10 02:03:45<SeP>2025-03-10 02:28:48<SeP>2025-03-10 02:53:51<SeP>2025-03-10 03:18:54<SeP>2025-03-10 03:43:57<SeP>2025-03-10 04:09:00<SeP>2025-03-10 04:34:03<SeP>2025-03-10 04:59:06<SeP>2025-03-10 05:24:09<SeP>2025-03-10 05:49:12<SeP>2025-03-10 06:14:15<SeP>2025-03-10 06:39:18<SeP>2025-03-10 07:04:21<SeP>2025-03-10 07:29:24<SeP>2025-03-10 07:54:27<SeP>2025-03-10 08:19:30<SeP>2025-03-10 08:44:33<SeP>2025-03-10 09:09:36<SeP>2025-03-10 09:34:39<SeP>2025-03-10 09:59:42<SeP>2025-03-10 10:24:45<SeP>2025-03-10 10:49:48<SeP>2025-03-10 11:14:51<SeP>2025-03-10 11:39:54<SeP>2025-03-10 12:04:57<SeP>2025-03-10 12:30:00<SeP>2025-03-10 12:55:03<SeP>2025-03-10 13:20:06<SeP>2025-03-10 13:45:09<SeP>2025-03-10 14:10:12<SeP>2025-03-10 14:35:15<SeP>2025-03-10 15:00:18<SeP>2025-03-10 15:25:21<SeP>2025-03-10 15:50:24<SeP>2025-03-10 16:15:27<SeP>2025-03-10 16:40:30<SeP>2025-03-10 17:05:33<SeP>2025-03-10 17:30:36<SeP>2025-03-10 17:55:39<SeP>2025-03-10 18:20:42<SeP>2025-03-10 18:45:45<SeP>2025-03-10 19:10:48<SeP>2025-03-10 19:35:51<SeP>2025-03-10 20:00:54<SeP>2025-03-10 20:25:57<SeP>2025-03-10 20:51:00<SeP>2025-03-10 21:16:03<SeP>2025-03-10 21:41:06<SeP>2025-03-10 22:06:09<SeP>2025-03-10 22:31:12<SeP>2025-03-10 22:56:15<SeP>2025-03-10 23:21:18<SeP>2025-03-10 23:46:21<SeP>2025-03-11 00:11:24<SeP>2025-03-11 00:36:27<SeP>2025-03-11 01:01:30<SeP>2025-03-11 01:26:33<SeP>2025-03-11 01:51:36<SeP>2025-03-11 02:16:39<SeP>2025-03-11 02:41:42<SeP>2025-03-11 03:06:45<SeP>2025-03-11 03:31:48<SeP>2025-03-11 03:56:51<SeP>2025-03-11 04:21:54<SeP>2025-03-11 04:46:57<SeP>2025-03-11 05:12:00<SeP>2025-03-11 05:37:03<SeP>2025-03-11 06:02:06<SeP>2025-03-11 06:27:09<SeP>2025-03-11 06:52:12<SeP>2025-03-11 07:17:15<SeP>2025-03-11 07:42:18<SeP>2025-03-11 08:07:21<SeP>2025-03-11 08:32:24<SeP>2025-03-11 08:57:27<SeP>2025-03-11 09:22:30<SeP>2025-03-11 09:47:33<SeP>2025-03-11 10:12:36<SeP>2025-03-11 10:37:39<SeP>2025-03-11 11:02:42<SeP>2025-03-11 11:27:45<SeP>2025-03-11 11:52:48<SeP>2025-03-11 12:17:51<SeP>2025-03-11 12:42:54<SeP>2025-03-11 13:07:57<SeP>2025-03-11 13:33:00<SeP>2025-03-11 13:58:03<SeP>2025-03-11 14:23:06<SeP>2025-03-11 14:48:09<SeP>2025-03-11 15:13:12<SeP>2025-03-11 15:38:15<SeP>2025-03-11 16:03:18<SeP>2025-03-11 16:28:21<SeP>2025-03-11 16:53:24<SeP>2025-03-11 17:18:27<SeP>2025-03-11 17:43:30<SeP>2025-03-11 18:08:33<SeP>2025-03-11 18:33:36<SeP>2025-03-11 18:58:39<SeP>2025-03-11 19:23:42<SeP>2025-03-11 19:48:45<SeP>2025-03-11 20:13:48<SeP>2025-03-11 20:38:51<SeP>2025-03-11 21:03:54<SeP>2025-03-11 21:28:57<SeP>2025-03-11 21:54:00<SeP>2025-03-11 22:19:03<SeP>2025-03-11 22:44:06<SeP>2025-03-11 23:09:09<SeP>2025-03-11 23:34:12<SeP>2025-03-11 23:59:15<SeP>2025-03-12 00:24:18<SeP>2025-03-12 00:49:21<SeP>2025-03-12 01:14:24<SeP>2025-03-12 01:39:27<SeP>2025-03-12 02:04:30<SeP>2025-03-12 02:29:33<SeP>2025-03-12 02:54:36<SeP>2025-03-12 03:19:39<SeP>2025-03-12 03:44:42<SeP>2025-03-12 04:09:45<SeP>2025-03-12 04:34:48<SeP>2025-03-12 04:59:51<SeP>2025-03-12 05:24:54<SeP>2025-03-12 05:49:57<SeP>2025-03-12 06:15:00<SeP>2025-03-12 06:40:03<SeP>2025-03-12 07:05:06<SeP>2025-03-12 07:30:09<SeP>2025-03-12 07:55:12<SeP>2025-03-12 08:20:15<SeP>2025-03-12 08:45:18<SeP>2025-03-12 09:10:21<SeP>2025-03-12 09:35:24<SeP>2025-03-12 10:00:27<SeP>2025-03-12 10:25:30<SeP>2025-03-12 10:50:33<SeP>2025-03-12 11:15:36<SeP>2025-03-12 11:40:39<SeP>2025-03-12 12:05:42<SeP>2025-03-12 12:30:45<SeP>2025-03-12 12:55:48<SeP>2025-03-12 13:20:51<SeP>2025-03-12 13:45:54<SeP>2025-03-12 14:10:57<SeP>2025-03-12 14:36:00<SeP>2025-03-12 15:01:03<SeP>2025-03-12 15:26:06<SeP>2025-03-12 15:51:09<SeP>2025-03-12 16:16:12<SeP>2025-03-12 16:41:15<SeP>2025-03-12 17:06:18<SeP>2025-03-12 17:31:21<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:21:27<SeP>2025-03-12 18:46:30<SeP>2025-03-12 19:11:33<SeP>2025-03-12 19:36:36<SeP>2025-03-12 20:01:39<SeP>2025-03-12 20:26:42<SeP>2025-03-12 20:51:45<SeP>2025-03-12 21:16:48<SeP>2025-03-12 21:41:51<SeP>2025-03-12 22:06:54<SeP>2025-03-12 22:31:57<SeP>2025-03-12 22:57:00<SeP>2025-03-12 23:22:03<SeP>2025-03-12 23:47:06<SeP>2025-03-13 00:12:09<SeP>2025-03-13 00:37:12<SeP>2025-03-13 01:02:15<SeP>2025-03-13 01:27:18<SeP>2025-03-13 01:52:21<SeP>2025-03-13 02:17:24<SeP>2025-03-13 02:42:27<SeP>2025-03-13 03:07:30<SeP>2025-03-13 03:32:33<SeP>2025-03-13 03:57:36<SeP>2025-03-13 04:22:39<SeP>2025-03-13 04:47:42<SeP>2025-03-13 05:12:45<SeP>2025-03-13 05:37:48<SeP>2025-03-13 06:02:51<SeP>2025-03-13 06:27:54<SeP>2025-03-13 06:52:57<SeP>2025-03-13 07:18:00<SeP>2025-03-13 07:43:03<SeP>2025-03-13 08:08:06<SeP>2025-03-13 08:33:09<SeP>2025-03-13 08:58:12<SeP>2025-03-13 09:23:15<SeP>2025-03-13 09:48:18<SeP>2025-03-13 10:13:21<SeP>2025-03-13 10:38:24<SeP>2025-03-13 11:03:27<SeP>2025-03-13 11:28:30<SeP>2025-03-13 11:53:33<SeP>2025-03-13 12:18:36<SeP>2025-03-13 12:43:39<SeP>2025-03-13 13:08:42<SeP>2025-03-13 13:33:45<SeP>2025-03-13 13:58:48<SeP>2025-03-13 14:23:51<SeP>2025-03-13 14:48:54<SeP>2025-03-13 15:13:57<SeP>2025-03-13 15:39:00<SeP>2025-03-13 16:04:03<SeP>2025-03-13 16:29:06<SeP>2025-03-13 16:54:09<SeP>2025-03-13 17:19:12<SeP>2025-03-13 17:44:15<SeP>2025-03-13 18:09:18<SeP>2025-03-13 18:34:21<SeP>2025-03-13 18:59:24<SeP>2025-03-13 19:24:27<SeP>2025-03-13 19:49:30<SeP>2025-03-13 20:14:33<SeP>2025-03-13 20:39:36<SeP>2025-03-13 21:04:39<SeP>2025-03-13 21:29:42<SeP>2025-03-13 21:54:45<SeP>2025-03-13 22:19:48<SeP>2025-03-13 22:44:51<SeP>2025-03-13 23:09:54<SeP>2025-03-13 23:34:57";
  const item1Label       = "Escaneos";
  const item1Data        = "51<SeP>212<SeP>116<SeP>25<SeP>14<SeP>9<SeP>8<SeP>9<SeP>6<SeP>4<SeP>3<SeP>25<SeP>10<SeP>7<SeP>4<SeP>7<SeP>1<SeP>4<SeP>5<SeP>6<SeP>10<SeP>20<SeP>11<SeP>8<SeP>8<SeP>12<SeP>8<SeP>9<SeP>16<SeP>11<SeP>9<SeP>31<SeP>10<SeP>8<SeP>8<SeP>46<SeP>15<SeP>8<SeP>43<SeP>7<SeP>9<SeP>20<SeP>51<SeP>88<SeP>24<SeP>21<SeP>21<SeP>13<SeP>20<SeP>19<SeP>15<SeP>11<SeP>11<SeP>29<SeP>83<SeP>124<SeP>121<SeP>12<SeP>28<SeP>9<SeP>9<SeP>15<SeP>12<SeP>14<SeP>21<SeP>26<SeP>36<SeP>11<SeP>121<SeP>104<SeP>11<SeP>27<SeP>57<SeP>43<SeP>8<SeP>24<SeP>14<SeP>124<SeP>36<SeP>11<SeP>13<SeP>7<SeP>14<SeP>17<SeP>11<SeP>15<SeP>5<SeP>6<SeP>29<SeP>9<SeP>11<SeP>32<SeP>10<SeP>5<SeP>14<SeP>9<SeP>9<SeP>12<SeP>34<SeP>8<SeP>11<SeP>14<SeP>8<SeP>9<SeP>10<SeP>16<SeP>14<SeP>13<SeP>10<SeP>10<SeP>6<SeP>34<SeP>7<SeP>3<SeP>7<SeP>3<SeP>4<SeP>6<SeP>3<SeP>5<SeP>22<SeP>16<SeP>26<SeP>25<SeP>14<SeP>8<SeP>6<SeP>17<SeP>6<SeP>57<SeP>14<SeP>7<SeP>13<SeP>14<SeP>12<SeP>19<SeP>14<SeP>13<SeP>33<SeP>7<SeP>11<SeP>6<SeP>12<SeP>10<SeP>30<SeP>11<SeP>5<SeP>11<SeP>8<SeP>3<SeP>38<SeP>0<SeP>13<SeP>10<SeP>4<SeP>5<SeP>8<SeP>8<SeP>5<SeP>1<SeP>17<SeP>2<SeP>10<SeP>4<SeP>13<SeP>5<SeP>3<SeP>88<SeP>17<SeP>8<SeP>7<SeP>3<SeP>8<SeP>6<SeP>9<SeP>5<SeP>14<SeP>13<SeP>757<SeP>11<SeP>12<SeP>27<SeP>8<SeP>7<SeP>13<SeP>37<SeP>19<SeP>17<SeP>24<SeP>22<SeP>17<SeP>21<SeP>8<SeP>54<SeP>26<SeP>17<SeP>49<SeP>12<SeP>13<SeP>51<SeP>18<SeP>18<SeP>14<SeP>14<SeP>38<SeP>11<SeP>11<SeP>5<SeP>0<SeP>8<SeP>9<SeP>6<SeP>2<SeP>3<SeP>0<SeP>24<SeP>7<SeP>0<SeP>18<SeP>7<SeP>29<SeP>78<SeP>47<SeP>24<SeP>10<SeP>23<SeP>34<SeP>7<SeP>12<SeP>12<SeP>36<SeP>28<SeP>14<SeP>10<SeP>41<SeP>7<SeP>3<SeP>23<SeP>13<SeP>3<SeP>4<SeP>55<SeP>45<SeP>5<SeP>3<SeP>8<SeP>3<SeP>3<SeP>1<SeP>9<SeP>11<SeP>12<SeP>14<SeP>9<SeP>15<SeP>11<SeP>55<SeP>30<SeP>12<SeP>8<SeP>62<SeP>38<SeP>18<SeP>26<SeP>2<SeP>17<SeP>5<SeP>6<SeP>26<SeP>6<SeP>10<SeP>6<SeP>15<SeP>4<SeP>25<SeP>23<SeP>7<SeP>3<SeP>29<SeP>7<SeP>11<SeP>13<SeP>7<SeP>9<SeP>15<SeP>67<SeP>15<SeP>13<SeP>10<SeP>9<SeP>6<SeP>7<SeP>12<SeP>14<SeP>21<SeP>49<SeP>14<SeP>17<SeP>12<SeP>14<SeP>19<SeP>16<SeP>32<SeP>17<SeP>8<SeP>12<SeP>20<SeP>34<SeP>11<SeP>5<SeP>13<SeP>6<SeP>20<SeP>19<SeP>43<SeP>39<SeP>8<SeP>4<SeP>4<SeP>16<SeP>18<SeP>8<SeP>29<SeP>24<SeP>45<SeP>10<SeP>12<SeP>64<SeP>65<SeP>20<SeP>16<SeP>15<SeP>15<SeP>34<SeP>11<SeP>16<SeP>44<SeP>20<SeP>45<SeP>22<SeP>21<SeP>25<SeP>21<SeP>20<SeP>23<SeP>19<SeP>15<SeP>15<SeP>16<SeP>12<SeP>49<SeP>9<SeP>3<SeP>10<SeP>4<SeP>8<SeP>17<SeP>13<SeP>18<SeP>29<SeP>5<SeP>21<SeP>15<SeP>8<SeP>20<SeP>15<SeP>22<SeP>20<SeP>42<SeP>51<SeP>31<SeP>13<SeP>25<SeP>13<SeP>26<SeP>39<SeP>18<SeP>11<SeP>10<SeP>35<SeP>3<SeP>12<SeP>10<SeP>16<SeP>14<SeP>12<SeP>21<SeP>22<SeP>20<SeP>25<SeP>7<SeP>17<SeP>8<SeP>22<SeP>13<SeP>16<SeP>16<SeP>22<SeP>10<SeP>19";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "7<SeP>5<SeP>26<SeP>76<SeP>66<SeP>6<SeP>5<SeP>16<SeP>10<SeP>10<SeP>21<SeP>66<SeP>51<SeP>94<SeP>173<SeP>153<SeP>135<SeP>42<SeP>45<SeP>28<SeP>12<SeP>26<SeP>11<SeP>9<SeP>29<SeP>35<SeP>33<SeP>33<SeP>23<SeP>8<SeP>114<SeP>10<SeP>9<SeP>7<SeP>8<SeP>10<SeP>9<SeP>10<SeP>8<SeP>9<SeP>12<SeP>15<SeP>7<SeP>35<SeP>58<SeP>18<SeP>4<SeP>6<SeP>32<SeP>6<SeP>9<SeP>27<SeP>29<SeP>28<SeP>8<SeP>31<SeP>43<SeP>19<SeP>6<SeP>18<SeP>20<SeP>39<SeP>91<SeP>84<SeP>18<SeP>12<SeP>19<SeP>7<SeP>6<SeP>4<SeP>4<SeP>3<SeP>4<SeP>4<SeP>1<SeP>4<SeP>3<SeP>1<SeP>22<SeP>65<SeP>57<SeP>40<SeP>59<SeP>21<SeP>19<SeP>10<SeP>11<SeP>5<SeP>8<SeP>6<SeP>38<SeP>25<SeP>6<SeP>0<SeP>3<SeP>3<SeP>2<SeP>15<SeP>4<SeP>3<SeP>2<SeP>8<SeP>3<SeP>4<SeP>6<SeP>5<SeP>56<SeP>12<SeP>57<SeP>156<SeP>49<SeP>25<SeP>17<SeP>17<SeP>8<SeP>5<SeP>6<SeP>10<SeP>9<SeP>68<SeP>73<SeP>8<SeP>9<SeP>64<SeP>33<SeP>4<SeP>2<SeP>3<SeP>5<SeP>1<SeP>3<SeP>4<SeP>3<SeP>4<SeP>11<SeP>4<SeP>9<SeP>4<SeP>23<SeP>35<SeP>20<SeP>23<SeP>7<SeP>6<SeP>4<SeP>5<SeP>10<SeP>32<SeP>5<SeP>7<SeP>221<SeP>28<SeP>24<SeP>23<SeP>16<SeP>7<SeP>10<SeP>3<SeP>6<SeP>6<SeP>2<SeP>1<SeP>2<SeP>18<SeP>12<SeP>3<SeP>7<SeP>4<SeP>253<SeP>236<SeP>7<SeP>7<SeP>50<SeP>44<SeP>42<SeP>254<SeP>17<SeP>252<SeP>15<SeP>12<SeP>12<SeP>305<SeP>11<SeP>6<SeP>5<SeP>7<SeP>7<SeP>21<SeP>7<SeP>8<SeP>25<SeP>40<SeP>37<SeP>18<SeP>8<SeP>6<SeP>6<SeP>10<SeP>14<SeP>13<SeP>9<SeP>43<SeP>35<SeP>40<SeP>17<SeP>9<SeP>17<SeP>4<SeP>6<SeP>26<SeP>39<SeP>41<SeP>11<SeP>8<SeP>7<SeP>6<SeP>7<SeP>6<SeP>7<SeP>13<SeP>97<SeP>178<SeP>69<SeP>58<SeP>47<SeP>29<SeP>9<SeP>59<SeP>167<SeP>68<SeP>6<SeP>15<SeP>5<SeP>2<SeP>22<SeP>27<SeP>36<SeP>42<SeP>1<SeP>2<SeP>3<SeP>16<SeP>6<SeP>4<SeP>84<SeP>114<SeP>18<SeP>8<SeP>8<SeP>6<SeP>5<SeP>17<SeP>5<SeP>2<SeP>5<SeP>7<SeP>47<SeP>102<SeP>25<SeP>2<SeP>1<SeP>31<SeP>67<SeP>90<SeP>95<SeP>300<SeP>40<SeP>20<SeP>26<SeP>34<SeP>15<SeP>7<SeP>4<SeP>15<SeP>3<SeP>13<SeP>10<SeP>9<SeP>16<SeP>15<SeP>6<SeP>3<SeP>60<SeP>94<SeP>33<SeP>15<SeP>13<SeP>16<SeP>18<SeP>51<SeP>93<SeP>21<SeP>14<SeP>5<SeP>7<SeP>5<SeP>1<SeP>3<SeP>3<SeP>8<SeP>5<SeP>43<SeP>43<SeP>11<SeP>5<SeP>7<SeP>38<SeP>57<SeP>60<SeP>21<SeP>12<SeP>23<SeP>32<SeP>45<SeP>44<SeP>72<SeP>35<SeP>25<SeP>20<SeP>40<SeP>32<SeP>34<SeP>34<SeP>27<SeP>60<SeP>102<SeP>165<SeP>44<SeP>27<SeP>24<SeP>24<SeP>28<SeP>42<SeP>61<SeP>40<SeP>28<SeP>26<SeP>38<SeP>36<SeP>66<SeP>27<SeP>35<SeP>27<SeP>28<SeP>65<SeP>44<SeP>59<SeP>75<SeP>31<SeP>30<SeP>24<SeP>47<SeP>20<SeP>36<SeP>57<SeP>41<SeP>41<SeP>17<SeP>28<SeP>30<SeP>34<SeP>32<SeP>21<SeP>23<SeP>20<SeP>24<SeP>28<SeP>23<SeP>21<SeP>66<SeP>69<SeP>22<SeP>19<SeP>95<SeP>12<SeP>18<SeP>25<SeP>63<SeP>285<SeP>15<SeP>7<SeP>48<SeP>71<SeP>28<SeP>7<SeP>43<SeP>57<SeP>10<SeP>13<SeP>81<SeP>28<SeP>2<SeP>7<SeP>5<SeP>13<SeP>7<SeP>28<SeP>9<SeP>6<SeP>20";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-03-07 00:00:00<SeP>2025-03-07 00:25:03<SeP>2025-03-07 00:50:06<SeP>2025-03-07 01:15:09<SeP>2025-03-07 01:40:12<SeP>2025-03-07 02:05:15<SeP>2025-03-07 02:30:18<SeP>2025-03-07 02:55:21<SeP>2025-03-07 03:20:24<SeP>2025-03-07 03:45:27<SeP>2025-03-07 04:10:30<SeP>2025-03-07 04:35:33<SeP>2025-03-07 05:00:36<SeP>2025-03-07 05:25:39<SeP>2025-03-07 05:50:42<SeP>2025-03-07 06:15:45<SeP>2025-03-07 06:40:48<SeP>2025-03-07 07:05:51<SeP>2025-03-07 07:30:54<SeP>2025-03-07 07:55:57<SeP>2025-03-07 08:21:00<SeP>2025-03-07 08:46:03<SeP>2025-03-07 09:11:06<SeP>2025-03-07 09:36:09<SeP>2025-03-07 10:01:12<SeP>2025-03-07 10:26:15<SeP>2025-03-07 10:51:18<SeP>2025-03-07 11:16:21<SeP>2025-03-07 11:41:24<SeP>2025-03-07 12:06:27<SeP>2025-03-07 12:31:30<SeP>2025-03-07 12:56:33<SeP>2025-03-07 13:21:36<SeP>2025-03-07 13:46:39<SeP>2025-03-07 14:11:42<SeP>2025-03-07 14:36:45<SeP>2025-03-07 15:01:48<SeP>2025-03-07 15:26:51<SeP>2025-03-07 15:51:54<SeP>2025-03-07 16:16:57<SeP>2025-03-07 16:42:00<SeP>2025-03-07 17:07:03<SeP>2025-03-07 17:32:06<SeP>2025-03-07 17:57:09<SeP>2025-03-07 18:22:12<SeP>2025-03-07 18:47:15<SeP>2025-03-07 19:12:18<SeP>2025-03-07 19:37:21<SeP>2025-03-07 20:02:24<SeP>2025-03-07 20:27:27<SeP>2025-03-07 20:52:30<SeP>2025-03-07 21:17:33<SeP>2025-03-07 21:42:36<SeP>2025-03-07 22:07:39<SeP>2025-03-07 22:32:42<SeP>2025-03-07 22:57:45<SeP>2025-03-07 23:22:48<SeP>2025-03-07 23:47:51<SeP>2025-03-08 00:12:54<SeP>2025-03-08 00:37:57<SeP>2025-03-08 01:03:00<SeP>2025-03-08 01:28:03<SeP>2025-03-08 01:53:06<SeP>2025-03-08 02:18:09<SeP>2025-03-08 02:43:12<SeP>2025-03-08 03:08:15<SeP>2025-03-08 03:33:18<SeP>2025-03-08 03:58:21<SeP>2025-03-08 04:23:24<SeP>2025-03-08 04:48:27<SeP>2025-03-08 05:13:30<SeP>2025-03-08 05:38:33<SeP>2025-03-08 06:03:36<SeP>2025-03-08 06:28:39<SeP>2025-03-08 06:53:42<SeP>2025-03-08 07:18:45<SeP>2025-03-08 07:43:48<SeP>2025-03-08 08:08:51<SeP>2025-03-08 08:33:54<SeP>2025-03-08 08:58:57<SeP>2025-03-08 09:24:00<SeP>2025-03-08 09:49:03<SeP>2025-03-08 10:14:06<SeP>2025-03-08 10:39:09<SeP>2025-03-08 11:04:12<SeP>2025-03-08 11:29:15<SeP>2025-03-08 11:54:18<SeP>2025-03-08 12:19:21<SeP>2025-03-08 12:44:24<SeP>2025-03-08 13:09:27<SeP>2025-03-08 13:34:30<SeP>2025-03-08 13:59:33<SeP>2025-03-08 14:24:36<SeP>2025-03-08 14:49:39<SeP>2025-03-08 15:14:42<SeP>2025-03-08 15:39:45<SeP>2025-03-08 16:04:48<SeP>2025-03-08 16:29:51<SeP>2025-03-08 16:54:54<SeP>2025-03-08 17:19:57<SeP>2025-03-08 17:45:00<SeP>2025-03-08 18:10:03<SeP>2025-03-08 18:35:06<SeP>2025-03-08 19:00:09<SeP>2025-03-08 19:25:12<SeP>2025-03-08 19:50:15<SeP>2025-03-08 20:15:18<SeP>2025-03-08 20:40:21<SeP>2025-03-08 21:05:24<SeP>2025-03-08 21:30:27<SeP>2025-03-08 21:55:30<SeP>2025-03-08 22:20:33<SeP>2025-03-08 22:45:36<SeP>2025-03-08 23:10:39<SeP>2025-03-08 23:35:42<SeP>2025-03-09 00:00:45<SeP>2025-03-09 00:25:48<SeP>2025-03-09 00:50:51<SeP>2025-03-09 01:15:54<SeP>2025-03-09 01:40:57<SeP>2025-03-09 03:06:00<SeP>2025-03-09 03:31:03<SeP>2025-03-09 03:56:06<SeP>2025-03-09 04:21:09<SeP>2025-03-09 04:46:12<SeP>2025-03-09 05:11:15<SeP>2025-03-09 05:36:18<SeP>2025-03-09 06:01:21<SeP>2025-03-09 06:26:24<SeP>2025-03-09 06:51:27<SeP>2025-03-09 07:16:30<SeP>2025-03-09 07:41:33<SeP>2025-03-09 08:06:36<SeP>2025-03-09 08:31:39<SeP>2025-03-09 08:56:42<SeP>2025-03-09 09:21:45<SeP>2025-03-09 09:46:48<SeP>2025-03-09 10:11:51<SeP>2025-03-09 10:36:54<SeP>2025-03-09 11:01:57<SeP>2025-03-09 11:27:00<SeP>2025-03-09 11:52:03<SeP>2025-03-09 12:17:06<SeP>2025-03-09 12:42:09<SeP>2025-03-09 13:07:12<SeP>2025-03-09 13:32:15<SeP>2025-03-09 13:57:18<SeP>2025-03-09 14:22:21<SeP>2025-03-09 14:47:24<SeP>2025-03-09 15:12:27<SeP>2025-03-09 15:37:30<SeP>2025-03-09 16:02:33<SeP>2025-03-09 16:27:36<SeP>2025-03-09 16:52:39<SeP>2025-03-09 17:17:42<SeP>2025-03-09 17:42:45<SeP>2025-03-09 18:07:48<SeP>2025-03-09 18:32:51<SeP>2025-03-09 18:57:54<SeP>2025-03-09 19:22:57<SeP>2025-03-09 19:48:00<SeP>2025-03-09 20:13:03<SeP>2025-03-09 20:38:06<SeP>2025-03-09 21:03:09<SeP>2025-03-09 21:28:12<SeP>2025-03-09 21:53:15<SeP>2025-03-09 22:18:18<SeP>2025-03-09 22:43:21<SeP>2025-03-09 23:08:24<SeP>2025-03-09 23:33:27<SeP>2025-03-09 23:58:30<SeP>2025-03-10 00:23:33<SeP>2025-03-10 00:48:36<SeP>2025-03-10 01:13:39<SeP>2025-03-10 01:38:42<SeP>2025-03-10 02:03:45<SeP>2025-03-10 02:28:48<SeP>2025-03-10 02:53:51<SeP>2025-03-10 03:18:54<SeP>2025-03-10 03:43:57<SeP>2025-03-10 04:09:00<SeP>2025-03-10 04:34:03<SeP>2025-03-10 04:59:06<SeP>2025-03-10 05:24:09<SeP>2025-03-10 05:49:12<SeP>2025-03-10 06:14:15<SeP>2025-03-10 06:39:18<SeP>2025-03-10 07:04:21<SeP>2025-03-10 07:29:24<SeP>2025-03-10 07:54:27<SeP>2025-03-10 08:19:30<SeP>2025-03-10 08:44:33<SeP>2025-03-10 09:09:36<SeP>2025-03-10 09:34:39<SeP>2025-03-10 09:59:42<SeP>2025-03-10 10:24:45<SeP>2025-03-10 10:49:48<SeP>2025-03-10 11:14:51<SeP>2025-03-10 11:39:54<SeP>2025-03-10 12:04:57<SeP>2025-03-10 12:30:00<SeP>2025-03-10 12:55:03<SeP>2025-03-10 13:20:06<SeP>2025-03-10 13:45:09<SeP>2025-03-10 14:10:12<SeP>2025-03-10 14:35:15<SeP>2025-03-10 15:00:18<SeP>2025-03-10 15:25:21<SeP>2025-03-10 15:50:24<SeP>2025-03-10 16:15:27<SeP>2025-03-10 16:40:30<SeP>2025-03-10 17:05:33<SeP>2025-03-10 17:30:36<SeP>2025-03-10 17:55:39<SeP>2025-03-10 18:20:42<SeP>2025-03-10 18:45:45<SeP>2025-03-10 19:10:48<SeP>2025-03-10 19:35:51<SeP>2025-03-10 20:00:54<SeP>2025-03-10 20:25:57<SeP>2025-03-10 20:51:00<SeP>2025-03-10 21:16:03<SeP>2025-03-10 21:41:06<SeP>2025-03-10 22:06:09<SeP>2025-03-10 22:31:12<SeP>2025-03-10 22:56:15<SeP>2025-03-10 23:21:18<SeP>2025-03-10 23:46:21<SeP>2025-03-11 00:11:24<SeP>2025-03-11 00:36:27<SeP>2025-03-11 01:01:30<SeP>2025-03-11 01:26:33<SeP>2025-03-11 01:51:36<SeP>2025-03-11 02:16:39<SeP>2025-03-11 02:41:42<SeP>2025-03-11 03:06:45<SeP>2025-03-11 03:31:48<SeP>2025-03-11 03:56:51<SeP>2025-03-11 04:21:54<SeP>2025-03-11 04:46:57<SeP>2025-03-11 05:12:00<SeP>2025-03-11 05:37:03<SeP>2025-03-11 06:02:06<SeP>2025-03-11 06:27:09<SeP>2025-03-11 06:52:12<SeP>2025-03-11 07:17:15<SeP>2025-03-11 07:42:18<SeP>2025-03-11 08:07:21<SeP>2025-03-11 08:32:24<SeP>2025-03-11 08:57:27<SeP>2025-03-11 09:22:30<SeP>2025-03-11 09:47:33<SeP>2025-03-11 10:12:36<SeP>2025-03-11 10:37:39<SeP>2025-03-11 11:02:42<SeP>2025-03-11 11:27:45<SeP>2025-03-11 11:52:48<SeP>2025-03-11 12:17:51<SeP>2025-03-11 12:42:54<SeP>2025-03-11 13:07:57<SeP>2025-03-11 13:33:00<SeP>2025-03-11 13:58:03<SeP>2025-03-11 14:23:06<SeP>2025-03-11 14:48:09<SeP>2025-03-11 15:13:12<SeP>2025-03-11 15:38:15<SeP>2025-03-11 16:03:18<SeP>2025-03-11 16:28:21<SeP>2025-03-11 16:53:24<SeP>2025-03-11 17:18:27<SeP>2025-03-11 17:43:30<SeP>2025-03-11 18:08:33<SeP>2025-03-11 18:33:36<SeP>2025-03-11 18:58:39<SeP>2025-03-11 19:23:42<SeP>2025-03-11 19:48:45<SeP>2025-03-11 20:13:48<SeP>2025-03-11 20:38:51<SeP>2025-03-11 21:03:54<SeP>2025-03-11 21:28:57<SeP>2025-03-11 21:54:00<SeP>2025-03-11 22:19:03<SeP>2025-03-11 22:44:06<SeP>2025-03-11 23:09:09<SeP>2025-03-11 23:34:12<SeP>2025-03-11 23:59:15<SeP>2025-03-12 00:24:18<SeP>2025-03-12 00:49:21<SeP>2025-03-12 01:14:24<SeP>2025-03-12 01:39:27<SeP>2025-03-12 02:04:30<SeP>2025-03-12 02:29:33<SeP>2025-03-12 02:54:36<SeP>2025-03-12 03:19:39<SeP>2025-03-12 03:44:42<SeP>2025-03-12 04:09:45<SeP>2025-03-12 04:34:48<SeP>2025-03-12 04:59:51<SeP>2025-03-12 05:24:54<SeP>2025-03-12 05:49:57<SeP>2025-03-12 06:15:00<SeP>2025-03-12 06:40:03<SeP>2025-03-12 07:05:06<SeP>2025-03-12 07:30:09<SeP>2025-03-12 07:55:12<SeP>2025-03-12 08:20:15<SeP>2025-03-12 08:45:18<SeP>2025-03-12 09:10:21<SeP>2025-03-12 09:35:24<SeP>2025-03-12 10:00:27<SeP>2025-03-12 10:25:30<SeP>2025-03-12 10:50:33<SeP>2025-03-12 11:15:36<SeP>2025-03-12 11:40:39<SeP>2025-03-12 12:05:42<SeP>2025-03-12 12:30:45<SeP>2025-03-12 12:55:48<SeP>2025-03-12 13:20:51<SeP>2025-03-12 13:45:54<SeP>2025-03-12 14:10:57<SeP>2025-03-12 14:36:00<SeP>2025-03-12 15:01:03<SeP>2025-03-12 15:26:06<SeP>2025-03-12 15:51:09<SeP>2025-03-12 16:16:12<SeP>2025-03-12 16:41:15<SeP>2025-03-12 17:06:18<SeP>2025-03-12 17:31:21<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:21:27<SeP>2025-03-12 18:46:30<SeP>2025-03-12 19:11:33<SeP>2025-03-12 19:36:36<SeP>2025-03-12 20:01:39<SeP>2025-03-12 20:26:42<SeP>2025-03-12 20:51:45<SeP>2025-03-12 21:16:48<SeP>2025-03-12 21:41:51<SeP>2025-03-12 22:06:54<SeP>2025-03-12 22:31:57<SeP>2025-03-12 22:57:00<SeP>2025-03-12 23:22:03<SeP>2025-03-12 23:47:06<SeP>2025-03-13 00:12:09<SeP>2025-03-13 00:37:12<SeP>2025-03-13 01:02:15<SeP>2025-03-13 01:27:18<SeP>2025-03-13 01:52:21<SeP>2025-03-13 02:17:24<SeP>2025-03-13 02:42:27<SeP>2025-03-13 03:07:30<SeP>2025-03-13 03:32:33<SeP>2025-03-13 03:57:36<SeP>2025-03-13 04:22:39<SeP>2025-03-13 04:47:42<SeP>2025-03-13 05:12:45<SeP>2025-03-13 05:37:48<SeP>2025-03-13 06:02:51<SeP>2025-03-13 06:27:54<SeP>2025-03-13 06:52:57<SeP>2025-03-13 07:18:00<SeP>2025-03-13 07:43:03<SeP>2025-03-13 08:08:06<SeP>2025-03-13 08:33:09<SeP>2025-03-13 08:58:12<SeP>2025-03-13 09:23:15<SeP>2025-03-13 09:48:18<SeP>2025-03-13 10:13:21<SeP>2025-03-13 10:38:24<SeP>2025-03-13 11:03:27<SeP>2025-03-13 11:28:30<SeP>2025-03-13 11:53:33<SeP>2025-03-13 12:18:36<SeP>2025-03-13 12:43:39<SeP>2025-03-13 13:08:42<SeP>2025-03-13 13:33:45<SeP>2025-03-13 13:58:48<SeP>2025-03-13 14:23:51<SeP>2025-03-13 14:48:54<SeP>2025-03-13 15:13:57<SeP>2025-03-13 15:39:00<SeP>2025-03-13 16:04:03<SeP>2025-03-13 16:29:06<SeP>2025-03-13 16:54:09<SeP>2025-03-13 17:19:12<SeP>2025-03-13 17:44:15<SeP>2025-03-13 18:09:18<SeP>2025-03-13 18:34:21<SeP>2025-03-13 18:59:24<SeP>2025-03-13 19:24:27<SeP>2025-03-13 19:49:30<SeP>2025-03-13 20:14:33<SeP>2025-03-13 20:39:36<SeP>2025-03-13 21:04:39<SeP>2025-03-13 21:29:42<SeP>2025-03-13 21:54:45<SeP>2025-03-13 22:19:48<SeP>2025-03-13 22:44:51<SeP>2025-03-13 23:09:54<SeP>2025-03-13 23:34:57";
  const itemLabel       = "Escaneos";
  const itemData        = "51<SeP>212<SeP>116<SeP>25<SeP>14<SeP>9<SeP>8<SeP>9<SeP>6<SeP>4<SeP>3<SeP>25<SeP>10<SeP>7<SeP>4<SeP>7<SeP>1<SeP>4<SeP>5<SeP>6<SeP>10<SeP>20<SeP>11<SeP>8<SeP>8<SeP>12<SeP>8<SeP>9<SeP>16<SeP>11<SeP>9<SeP>31<SeP>10<SeP>8<SeP>8<SeP>46<SeP>15<SeP>8<SeP>43<SeP>7<SeP>9<SeP>20<SeP>51<SeP>88<SeP>24<SeP>21<SeP>21<SeP>13<SeP>20<SeP>19<SeP>15<SeP>11<SeP>11<SeP>29<SeP>83<SeP>124<SeP>121<SeP>12<SeP>28<SeP>9<SeP>9<SeP>15<SeP>12<SeP>14<SeP>21<SeP>26<SeP>36<SeP>11<SeP>121<SeP>104<SeP>11<SeP>27<SeP>57<SeP>43<SeP>8<SeP>24<SeP>14<SeP>124<SeP>36<SeP>11<SeP>13<SeP>7<SeP>14<SeP>17<SeP>11<SeP>15<SeP>5<SeP>6<SeP>29<SeP>9<SeP>11<SeP>32<SeP>10<SeP>5<SeP>14<SeP>9<SeP>9<SeP>12<SeP>34<SeP>8<SeP>11<SeP>14<SeP>8<SeP>9<SeP>10<SeP>16<SeP>14<SeP>13<SeP>10<SeP>10<SeP>6<SeP>34<SeP>7<SeP>3<SeP>7<SeP>3<SeP>4<SeP>6<SeP>3<SeP>5<SeP>22<SeP>16<SeP>26<SeP>25<SeP>14<SeP>8<SeP>6<SeP>17<SeP>6<SeP>57<SeP>14<SeP>7<SeP>13<SeP>14<SeP>12<SeP>19<SeP>14<SeP>13<SeP>33<SeP>7<SeP>11<SeP>6<SeP>12<SeP>10<SeP>30<SeP>11<SeP>5<SeP>11<SeP>8<SeP>3<SeP>38<SeP>0<SeP>13<SeP>10<SeP>4<SeP>5<SeP>8<SeP>8<SeP>5<SeP>1<SeP>17<SeP>2<SeP>10<SeP>4<SeP>13<SeP>5<SeP>3<SeP>88<SeP>17<SeP>8<SeP>7<SeP>3<SeP>8<SeP>6<SeP>9<SeP>5<SeP>14<SeP>13<SeP>757<SeP>11<SeP>12<SeP>27<SeP>8<SeP>7<SeP>13<SeP>37<SeP>19<SeP>17<SeP>24<SeP>22<SeP>17<SeP>21<SeP>8<SeP>54<SeP>26<SeP>17<SeP>49<SeP>12<SeP>13<SeP>51<SeP>18<SeP>18<SeP>14<SeP>14<SeP>38<SeP>11<SeP>11<SeP>5<SeP>0<SeP>8<SeP>9<SeP>6<SeP>2<SeP>3<SeP>0<SeP>24<SeP>7<SeP>0<SeP>18<SeP>7<SeP>29<SeP>78<SeP>47<SeP>24<SeP>10<SeP>23<SeP>34<SeP>7<SeP>12<SeP>12<SeP>36<SeP>28<SeP>14<SeP>10<SeP>41<SeP>7<SeP>3<SeP>23<SeP>13<SeP>3<SeP>4<SeP>55<SeP>45<SeP>5<SeP>3<SeP>8<SeP>3<SeP>3<SeP>1<SeP>9<SeP>11<SeP>12<SeP>14<SeP>9<SeP>15<SeP>11<SeP>55<SeP>30<SeP>12<SeP>8<SeP>62<SeP>38<SeP>18<SeP>26<SeP>2<SeP>17<SeP>5<SeP>6<SeP>26<SeP>6<SeP>10<SeP>6<SeP>15<SeP>4<SeP>25<SeP>23<SeP>7<SeP>3<SeP>29<SeP>7<SeP>11<SeP>13<SeP>7<SeP>9<SeP>15<SeP>67<SeP>15<SeP>13<SeP>10<SeP>9<SeP>6<SeP>7<SeP>12<SeP>14<SeP>21<SeP>49<SeP>14<SeP>17<SeP>12<SeP>14<SeP>19<SeP>16<SeP>32<SeP>17<SeP>8<SeP>12<SeP>20<SeP>34<SeP>11<SeP>5<SeP>13<SeP>6<SeP>20<SeP>19<SeP>43<SeP>39<SeP>8<SeP>4<SeP>4<SeP>16<SeP>18<SeP>8<SeP>29<SeP>24<SeP>45<SeP>10<SeP>12<SeP>64<SeP>65<SeP>20<SeP>16<SeP>15<SeP>15<SeP>34<SeP>11<SeP>16<SeP>44<SeP>20<SeP>45<SeP>22<SeP>21<SeP>25<SeP>21<SeP>20<SeP>23<SeP>19<SeP>15<SeP>15<SeP>16<SeP>12<SeP>49<SeP>9<SeP>3<SeP>10<SeP>4<SeP>8<SeP>17<SeP>13<SeP>18<SeP>29<SeP>5<SeP>21<SeP>15<SeP>8<SeP>20<SeP>15<SeP>22<SeP>20<SeP>42<SeP>51<SeP>31<SeP>13<SeP>25<SeP>13<SeP>26<SeP>39<SeP>18<SeP>11<SeP>10<SeP>35<SeP>3<SeP>12<SeP>10<SeP>16<SeP>14<SeP>12<SeP>21<SeP>22<SeP>20<SeP>25<SeP>7<SeP>17<SeP>8<SeP>22<SeP>13<SeP>16<SeP>16<SeP>22<SeP>10<SeP>19";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-03-07 00:00:00<SeP>2025-03-07 00:25:03<SeP>2025-03-07 00:50:06<SeP>2025-03-07 01:15:09<SeP>2025-03-07 01:40:12<SeP>2025-03-07 02:05:15<SeP>2025-03-07 02:30:18<SeP>2025-03-07 02:55:21<SeP>2025-03-07 03:20:24<SeP>2025-03-07 03:45:27<SeP>2025-03-07 04:10:30<SeP>2025-03-07 04:35:33<SeP>2025-03-07 05:00:36<SeP>2025-03-07 05:25:39<SeP>2025-03-07 05:50:42<SeP>2025-03-07 06:15:45<SeP>2025-03-07 06:40:48<SeP>2025-03-07 07:05:51<SeP>2025-03-07 07:30:54<SeP>2025-03-07 07:55:57<SeP>2025-03-07 08:21:00<SeP>2025-03-07 08:46:03<SeP>2025-03-07 09:11:06<SeP>2025-03-07 09:36:09<SeP>2025-03-07 10:01:12<SeP>2025-03-07 10:26:15<SeP>2025-03-07 10:51:18<SeP>2025-03-07 11:16:21<SeP>2025-03-07 11:41:24<SeP>2025-03-07 12:06:27<SeP>2025-03-07 12:31:30<SeP>2025-03-07 12:56:33<SeP>2025-03-07 13:21:36<SeP>2025-03-07 13:46:39<SeP>2025-03-07 14:11:42<SeP>2025-03-07 14:36:45<SeP>2025-03-07 15:01:48<SeP>2025-03-07 15:26:51<SeP>2025-03-07 15:51:54<SeP>2025-03-07 16:16:57<SeP>2025-03-07 16:42:00<SeP>2025-03-07 17:07:03<SeP>2025-03-07 17:32:06<SeP>2025-03-07 17:57:09<SeP>2025-03-07 18:22:12<SeP>2025-03-07 18:47:15<SeP>2025-03-07 19:12:18<SeP>2025-03-07 19:37:21<SeP>2025-03-07 20:02:24<SeP>2025-03-07 20:27:27<SeP>2025-03-07 20:52:30<SeP>2025-03-07 21:17:33<SeP>2025-03-07 21:42:36<SeP>2025-03-07 22:07:39<SeP>2025-03-07 22:32:42<SeP>2025-03-07 22:57:45<SeP>2025-03-07 23:22:48<SeP>2025-03-07 23:47:51<SeP>2025-03-08 00:12:54<SeP>2025-03-08 00:37:57<SeP>2025-03-08 01:03:00<SeP>2025-03-08 01:28:03<SeP>2025-03-08 01:53:06<SeP>2025-03-08 02:18:09<SeP>2025-03-08 02:43:12<SeP>2025-03-08 03:08:15<SeP>2025-03-08 03:33:18<SeP>2025-03-08 03:58:21<SeP>2025-03-08 04:23:24<SeP>2025-03-08 04:48:27<SeP>2025-03-08 05:13:30<SeP>2025-03-08 05:38:33<SeP>2025-03-08 06:03:36<SeP>2025-03-08 06:28:39<SeP>2025-03-08 06:53:42<SeP>2025-03-08 07:18:45<SeP>2025-03-08 07:43:48<SeP>2025-03-08 08:08:51<SeP>2025-03-08 08:33:54<SeP>2025-03-08 08:58:57<SeP>2025-03-08 09:24:00<SeP>2025-03-08 09:49:03<SeP>2025-03-08 10:14:06<SeP>2025-03-08 10:39:09<SeP>2025-03-08 11:04:12<SeP>2025-03-08 11:29:15<SeP>2025-03-08 11:54:18<SeP>2025-03-08 12:19:21<SeP>2025-03-08 12:44:24<SeP>2025-03-08 13:09:27<SeP>2025-03-08 13:34:30<SeP>2025-03-08 13:59:33<SeP>2025-03-08 14:24:36<SeP>2025-03-08 14:49:39<SeP>2025-03-08 15:14:42<SeP>2025-03-08 15:39:45<SeP>2025-03-08 16:04:48<SeP>2025-03-08 16:29:51<SeP>2025-03-08 16:54:54<SeP>2025-03-08 17:19:57<SeP>2025-03-08 17:45:00<SeP>2025-03-08 18:10:03<SeP>2025-03-08 18:35:06<SeP>2025-03-08 19:00:09<SeP>2025-03-08 19:25:12<SeP>2025-03-08 19:50:15<SeP>2025-03-08 20:15:18<SeP>2025-03-08 20:40:21<SeP>2025-03-08 21:05:24<SeP>2025-03-08 21:30:27<SeP>2025-03-08 21:55:30<SeP>2025-03-08 22:20:33<SeP>2025-03-08 22:45:36<SeP>2025-03-08 23:10:39<SeP>2025-03-08 23:35:42<SeP>2025-03-09 00:00:45<SeP>2025-03-09 00:25:48<SeP>2025-03-09 00:50:51<SeP>2025-03-09 01:15:54<SeP>2025-03-09 01:40:57<SeP>2025-03-09 03:06:00<SeP>2025-03-09 03:31:03<SeP>2025-03-09 03:56:06<SeP>2025-03-09 04:21:09<SeP>2025-03-09 04:46:12<SeP>2025-03-09 05:11:15<SeP>2025-03-09 05:36:18<SeP>2025-03-09 06:01:21<SeP>2025-03-09 06:26:24<SeP>2025-03-09 06:51:27<SeP>2025-03-09 07:16:30<SeP>2025-03-09 07:41:33<SeP>2025-03-09 08:06:36<SeP>2025-03-09 08:31:39<SeP>2025-03-09 08:56:42<SeP>2025-03-09 09:21:45<SeP>2025-03-09 09:46:48<SeP>2025-03-09 10:11:51<SeP>2025-03-09 10:36:54<SeP>2025-03-09 11:01:57<SeP>2025-03-09 11:27:00<SeP>2025-03-09 11:52:03<SeP>2025-03-09 12:17:06<SeP>2025-03-09 12:42:09<SeP>2025-03-09 13:07:12<SeP>2025-03-09 13:32:15<SeP>2025-03-09 13:57:18<SeP>2025-03-09 14:22:21<SeP>2025-03-09 14:47:24<SeP>2025-03-09 15:12:27<SeP>2025-03-09 15:37:30<SeP>2025-03-09 16:02:33<SeP>2025-03-09 16:27:36<SeP>2025-03-09 16:52:39<SeP>2025-03-09 17:17:42<SeP>2025-03-09 17:42:45<SeP>2025-03-09 18:07:48<SeP>2025-03-09 18:32:51<SeP>2025-03-09 18:57:54<SeP>2025-03-09 19:22:57<SeP>2025-03-09 19:48:00<SeP>2025-03-09 20:13:03<SeP>2025-03-09 20:38:06<SeP>2025-03-09 21:03:09<SeP>2025-03-09 21:28:12<SeP>2025-03-09 21:53:15<SeP>2025-03-09 22:18:18<SeP>2025-03-09 22:43:21<SeP>2025-03-09 23:08:24<SeP>2025-03-09 23:33:27<SeP>2025-03-09 23:58:30<SeP>2025-03-10 00:23:33<SeP>2025-03-10 00:48:36<SeP>2025-03-10 01:13:39<SeP>2025-03-10 01:38:42<SeP>2025-03-10 02:03:45<SeP>2025-03-10 02:28:48<SeP>2025-03-10 02:53:51<SeP>2025-03-10 03:18:54<SeP>2025-03-10 03:43:57<SeP>2025-03-10 04:09:00<SeP>2025-03-10 04:34:03<SeP>2025-03-10 04:59:06<SeP>2025-03-10 05:24:09<SeP>2025-03-10 05:49:12<SeP>2025-03-10 06:14:15<SeP>2025-03-10 06:39:18<SeP>2025-03-10 07:04:21<SeP>2025-03-10 07:29:24<SeP>2025-03-10 07:54:27<SeP>2025-03-10 08:19:30<SeP>2025-03-10 08:44:33<SeP>2025-03-10 09:09:36<SeP>2025-03-10 09:34:39<SeP>2025-03-10 09:59:42<SeP>2025-03-10 10:24:45<SeP>2025-03-10 10:49:48<SeP>2025-03-10 11:14:51<SeP>2025-03-10 11:39:54<SeP>2025-03-10 12:04:57<SeP>2025-03-10 12:30:00<SeP>2025-03-10 12:55:03<SeP>2025-03-10 13:20:06<SeP>2025-03-10 13:45:09<SeP>2025-03-10 14:10:12<SeP>2025-03-10 14:35:15<SeP>2025-03-10 15:00:18<SeP>2025-03-10 15:25:21<SeP>2025-03-10 15:50:24<SeP>2025-03-10 16:15:27<SeP>2025-03-10 16:40:30<SeP>2025-03-10 17:05:33<SeP>2025-03-10 17:30:36<SeP>2025-03-10 17:55:39<SeP>2025-03-10 18:20:42<SeP>2025-03-10 18:45:45<SeP>2025-03-10 19:10:48<SeP>2025-03-10 19:35:51<SeP>2025-03-10 20:00:54<SeP>2025-03-10 20:25:57<SeP>2025-03-10 20:51:00<SeP>2025-03-10 21:16:03<SeP>2025-03-10 21:41:06<SeP>2025-03-10 22:06:09<SeP>2025-03-10 22:31:12<SeP>2025-03-10 22:56:15<SeP>2025-03-10 23:21:18<SeP>2025-03-10 23:46:21<SeP>2025-03-11 00:11:24<SeP>2025-03-11 00:36:27<SeP>2025-03-11 01:01:30<SeP>2025-03-11 01:26:33<SeP>2025-03-11 01:51:36<SeP>2025-03-11 02:16:39<SeP>2025-03-11 02:41:42<SeP>2025-03-11 03:06:45<SeP>2025-03-11 03:31:48<SeP>2025-03-11 03:56:51<SeP>2025-03-11 04:21:54<SeP>2025-03-11 04:46:57<SeP>2025-03-11 05:12:00<SeP>2025-03-11 05:37:03<SeP>2025-03-11 06:02:06<SeP>2025-03-11 06:27:09<SeP>2025-03-11 06:52:12<SeP>2025-03-11 07:17:15<SeP>2025-03-11 07:42:18<SeP>2025-03-11 08:07:21<SeP>2025-03-11 08:32:24<SeP>2025-03-11 08:57:27<SeP>2025-03-11 09:22:30<SeP>2025-03-11 09:47:33<SeP>2025-03-11 10:12:36<SeP>2025-03-11 10:37:39<SeP>2025-03-11 11:02:42<SeP>2025-03-11 11:27:45<SeP>2025-03-11 11:52:48<SeP>2025-03-11 12:17:51<SeP>2025-03-11 12:42:54<SeP>2025-03-11 13:07:57<SeP>2025-03-11 13:33:00<SeP>2025-03-11 13:58:03<SeP>2025-03-11 14:23:06<SeP>2025-03-11 14:48:09<SeP>2025-03-11 15:13:12<SeP>2025-03-11 15:38:15<SeP>2025-03-11 16:03:18<SeP>2025-03-11 16:28:21<SeP>2025-03-11 16:53:24<SeP>2025-03-11 17:18:27<SeP>2025-03-11 17:43:30<SeP>2025-03-11 18:08:33<SeP>2025-03-11 18:33:36<SeP>2025-03-11 18:58:39<SeP>2025-03-11 19:23:42<SeP>2025-03-11 19:48:45<SeP>2025-03-11 20:13:48<SeP>2025-03-11 20:38:51<SeP>2025-03-11 21:03:54<SeP>2025-03-11 21:28:57<SeP>2025-03-11 21:54:00<SeP>2025-03-11 22:19:03<SeP>2025-03-11 22:44:06<SeP>2025-03-11 23:09:09<SeP>2025-03-11 23:34:12<SeP>2025-03-11 23:59:15<SeP>2025-03-12 00:24:18<SeP>2025-03-12 00:49:21<SeP>2025-03-12 01:14:24<SeP>2025-03-12 01:39:27<SeP>2025-03-12 02:04:30<SeP>2025-03-12 02:29:33<SeP>2025-03-12 02:54:36<SeP>2025-03-12 03:19:39<SeP>2025-03-12 03:44:42<SeP>2025-03-12 04:09:45<SeP>2025-03-12 04:34:48<SeP>2025-03-12 04:59:51<SeP>2025-03-12 05:24:54<SeP>2025-03-12 05:49:57<SeP>2025-03-12 06:15:00<SeP>2025-03-12 06:40:03<SeP>2025-03-12 07:05:06<SeP>2025-03-12 07:30:09<SeP>2025-03-12 07:55:12<SeP>2025-03-12 08:20:15<SeP>2025-03-12 08:45:18<SeP>2025-03-12 09:10:21<SeP>2025-03-12 09:35:24<SeP>2025-03-12 10:00:27<SeP>2025-03-12 10:25:30<SeP>2025-03-12 10:50:33<SeP>2025-03-12 11:15:36<SeP>2025-03-12 11:40:39<SeP>2025-03-12 12:05:42<SeP>2025-03-12 12:30:45<SeP>2025-03-12 12:55:48<SeP>2025-03-12 13:20:51<SeP>2025-03-12 13:45:54<SeP>2025-03-12 14:10:57<SeP>2025-03-12 14:36:00<SeP>2025-03-12 15:01:03<SeP>2025-03-12 15:26:06<SeP>2025-03-12 15:51:09<SeP>2025-03-12 16:16:12<SeP>2025-03-12 16:41:15<SeP>2025-03-12 17:06:18<SeP>2025-03-12 17:31:21<SeP>2025-03-12 17:56:24<SeP>2025-03-12 18:21:27<SeP>2025-03-12 18:46:30<SeP>2025-03-12 19:11:33<SeP>2025-03-12 19:36:36<SeP>2025-03-12 20:01:39<SeP>2025-03-12 20:26:42<SeP>2025-03-12 20:51:45<SeP>2025-03-12 21:16:48<SeP>2025-03-12 21:41:51<SeP>2025-03-12 22:06:54<SeP>2025-03-12 22:31:57<SeP>2025-03-12 22:57:00<SeP>2025-03-12 23:22:03<SeP>2025-03-12 23:47:06<SeP>2025-03-13 00:12:09<SeP>2025-03-13 00:37:12<SeP>2025-03-13 01:02:15<SeP>2025-03-13 01:27:18<SeP>2025-03-13 01:52:21<SeP>2025-03-13 02:17:24<SeP>2025-03-13 02:42:27<SeP>2025-03-13 03:07:30<SeP>2025-03-13 03:32:33<SeP>2025-03-13 03:57:36<SeP>2025-03-13 04:22:39<SeP>2025-03-13 04:47:42<SeP>2025-03-13 05:12:45<SeP>2025-03-13 05:37:48<SeP>2025-03-13 06:02:51<SeP>2025-03-13 06:27:54<SeP>2025-03-13 06:52:57<SeP>2025-03-13 07:18:00<SeP>2025-03-13 07:43:03<SeP>2025-03-13 08:08:06<SeP>2025-03-13 08:33:09<SeP>2025-03-13 08:58:12<SeP>2025-03-13 09:23:15<SeP>2025-03-13 09:48:18<SeP>2025-03-13 10:13:21<SeP>2025-03-13 10:38:24<SeP>2025-03-13 11:03:27<SeP>2025-03-13 11:28:30<SeP>2025-03-13 11:53:33<SeP>2025-03-13 12:18:36<SeP>2025-03-13 12:43:39<SeP>2025-03-13 13:08:42<SeP>2025-03-13 13:33:45<SeP>2025-03-13 13:58:48<SeP>2025-03-13 14:23:51<SeP>2025-03-13 14:48:54<SeP>2025-03-13 15:13:57<SeP>2025-03-13 15:39:00<SeP>2025-03-13 16:04:03<SeP>2025-03-13 16:29:06<SeP>2025-03-13 16:54:09<SeP>2025-03-13 17:19:12<SeP>2025-03-13 17:44:15<SeP>2025-03-13 18:09:18<SeP>2025-03-13 18:34:21<SeP>2025-03-13 18:59:24<SeP>2025-03-13 19:24:27<SeP>2025-03-13 19:49:30<SeP>2025-03-13 20:14:33<SeP>2025-03-13 20:39:36<SeP>2025-03-13 21:04:39<SeP>2025-03-13 21:29:42<SeP>2025-03-13 21:54:45<SeP>2025-03-13 22:19:48<SeP>2025-03-13 22:44:51<SeP>2025-03-13 23:09:54<SeP>2025-03-13 23:34:57";
  const itemLabel       = "Ataques";
  const itemData        = "7<SeP>5<SeP>26<SeP>76<SeP>66<SeP>6<SeP>5<SeP>16<SeP>10<SeP>10<SeP>21<SeP>66<SeP>51<SeP>94<SeP>173<SeP>153<SeP>135<SeP>42<SeP>45<SeP>28<SeP>12<SeP>26<SeP>11<SeP>9<SeP>29<SeP>35<SeP>33<SeP>33<SeP>23<SeP>8<SeP>114<SeP>10<SeP>9<SeP>7<SeP>8<SeP>10<SeP>9<SeP>10<SeP>8<SeP>9<SeP>12<SeP>15<SeP>7<SeP>35<SeP>58<SeP>18<SeP>4<SeP>6<SeP>32<SeP>6<SeP>9<SeP>27<SeP>29<SeP>28<SeP>8<SeP>31<SeP>43<SeP>19<SeP>6<SeP>18<SeP>20<SeP>39<SeP>91<SeP>84<SeP>18<SeP>12<SeP>19<SeP>7<SeP>6<SeP>4<SeP>4<SeP>3<SeP>4<SeP>4<SeP>1<SeP>4<SeP>3<SeP>1<SeP>22<SeP>65<SeP>57<SeP>40<SeP>59<SeP>21<SeP>19<SeP>10<SeP>11<SeP>5<SeP>8<SeP>6<SeP>38<SeP>25<SeP>6<SeP>0<SeP>3<SeP>3<SeP>2<SeP>15<SeP>4<SeP>3<SeP>2<SeP>8<SeP>3<SeP>4<SeP>6<SeP>5<SeP>56<SeP>12<SeP>57<SeP>156<SeP>49<SeP>25<SeP>17<SeP>17<SeP>8<SeP>5<SeP>6<SeP>10<SeP>9<SeP>68<SeP>73<SeP>8<SeP>9<SeP>64<SeP>33<SeP>4<SeP>2<SeP>3<SeP>5<SeP>1<SeP>3<SeP>4<SeP>3<SeP>4<SeP>11<SeP>4<SeP>9<SeP>4<SeP>23<SeP>35<SeP>20<SeP>23<SeP>7<SeP>6<SeP>4<SeP>5<SeP>10<SeP>32<SeP>5<SeP>7<SeP>221<SeP>28<SeP>24<SeP>23<SeP>16<SeP>7<SeP>10<SeP>3<SeP>6<SeP>6<SeP>2<SeP>1<SeP>2<SeP>18<SeP>12<SeP>3<SeP>7<SeP>4<SeP>253<SeP>236<SeP>7<SeP>7<SeP>50<SeP>44<SeP>42<SeP>254<SeP>17<SeP>252<SeP>15<SeP>12<SeP>12<SeP>305<SeP>11<SeP>6<SeP>5<SeP>7<SeP>7<SeP>21<SeP>7<SeP>8<SeP>25<SeP>40<SeP>37<SeP>18<SeP>8<SeP>6<SeP>6<SeP>10<SeP>14<SeP>13<SeP>9<SeP>43<SeP>35<SeP>40<SeP>17<SeP>9<SeP>17<SeP>4<SeP>6<SeP>26<SeP>39<SeP>41<SeP>11<SeP>8<SeP>7<SeP>6<SeP>7<SeP>6<SeP>7<SeP>13<SeP>97<SeP>178<SeP>69<SeP>58<SeP>47<SeP>29<SeP>9<SeP>59<SeP>167<SeP>68<SeP>6<SeP>15<SeP>5<SeP>2<SeP>22<SeP>27<SeP>36<SeP>42<SeP>1<SeP>2<SeP>3<SeP>16<SeP>6<SeP>4<SeP>84<SeP>114<SeP>18<SeP>8<SeP>8<SeP>6<SeP>5<SeP>17<SeP>5<SeP>2<SeP>5<SeP>7<SeP>47<SeP>102<SeP>25<SeP>2<SeP>1<SeP>31<SeP>67<SeP>90<SeP>95<SeP>300<SeP>40<SeP>20<SeP>26<SeP>34<SeP>15<SeP>7<SeP>4<SeP>15<SeP>3<SeP>13<SeP>10<SeP>9<SeP>16<SeP>15<SeP>6<SeP>3<SeP>60<SeP>94<SeP>33<SeP>15<SeP>13<SeP>16<SeP>18<SeP>51<SeP>93<SeP>21<SeP>14<SeP>5<SeP>7<SeP>5<SeP>1<SeP>3<SeP>3<SeP>8<SeP>5<SeP>43<SeP>43<SeP>11<SeP>5<SeP>7<SeP>38<SeP>57<SeP>60<SeP>21<SeP>12<SeP>23<SeP>32<SeP>45<SeP>44<SeP>72<SeP>35<SeP>25<SeP>20<SeP>40<SeP>32<SeP>34<SeP>34<SeP>27<SeP>60<SeP>102<SeP>165<SeP>44<SeP>27<SeP>24<SeP>24<SeP>28<SeP>42<SeP>61<SeP>40<SeP>28<SeP>26<SeP>38<SeP>36<SeP>66<SeP>27<SeP>35<SeP>27<SeP>28<SeP>65<SeP>44<SeP>59<SeP>75<SeP>31<SeP>30<SeP>24<SeP>47<SeP>20<SeP>36<SeP>57<SeP>41<SeP>41<SeP>17<SeP>28<SeP>30<SeP>34<SeP>32<SeP>21<SeP>23<SeP>20<SeP>24<SeP>28<SeP>23<SeP>21<SeP>66<SeP>69<SeP>22<SeP>19<SeP>95<SeP>12<SeP>18<SeP>25<SeP>63<SeP>285<SeP>15<SeP>7<SeP>48<SeP>71<SeP>28<SeP>7<SeP>43<SeP>57<SeP>10<SeP>13<SeP>81<SeP>28<SeP>2<SeP>7<SeP>5<SeP>13<SeP>7<SeP>28<SeP>9<SeP>6<SeP>20";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Japan<SeP>Macao<SeP>Taiwan<SeP>Singapore<SeP>Romania<SeP>Indonesia";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "3846<SeP>2789<SeP>1300<SeP>1066<SeP>1051<SeP>898<SeP>888<SeP>752<SeP>704<SeP>637";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Macao<SeP>United States<SeP>Japan<SeP>Hong Kong<SeP>India<SeP>Ukraine<SeP>Russia<SeP>South Korea<SeP>Taiwan";
  const itemLabel   = "Scans";
  const itemData    = "2519<SeP>898<SeP>828<SeP>697<SeP>608<SeP>518<SeP>248<SeP>243<SeP>182<SeP>157";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "United States<SeP>China<SeP>India<SeP>Taiwan<SeP>Singapore<SeP>Romania<SeP>Indonesia<SeP>Germany<SeP>Hong Kong<SeP>France";
  const itemLabel   = "Attacks";
  const itemData    = "1961<SeP>1327<SeP>782<SeP>731<SeP>647<SeP>614<SeP>593<SeP>526<SeP>458<SeP>453";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>4134<SeP>47890<SeP>4609<SeP>207566<SeP>4837<SeP>135377<SeP>7922<SeP>3462<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "2709<SeP>1525<SeP>922<SeP>898<SeP>686<SeP>532<SeP>508<SeP>411<SeP>401<SeP>399";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4609<SeP>4837<SeP>9829<SeP>9269<SeP>7922<SeP>17676<SeP>2519<SeP>207566<SeP>21497";
  const itemLabel   = "Scans";
  const itemData    = "1416<SeP>898<SeP>510<SeP>398<SeP>358<SeP>315<SeP>311<SeP>289<SeP>286<SeP>196";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>47890<SeP>135377<SeP>207566<SeP>16276<SeP>45090<SeP>3462<SeP>8075<SeP>136052<SeP>8151";
  const itemLabel   = "Atacks";
  const itemData    = "2567<SeP>800<SeP>440<SeP>400<SeP>341<SeP>308<SeP>292<SeP>255<SeP>254<SeP>253";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Japan<SeP>Macao<SeP>Taiwan<SeP>Singapore<SeP>Romania<SeP>Indonesia";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "3846<SeP>2789<SeP>1300<SeP>1066<SeP>1051<SeP>898<SeP>888<SeP>752<SeP>704<SeP>637";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Macao<SeP>United States<SeP>Japan<SeP>Hong Kong<SeP>India<SeP>Ukraine<SeP>Russia<SeP>South Korea<SeP>Taiwan";
  const itemLabel   = "Escaneos";
  const itemData    = "2519<SeP>898<SeP>828<SeP>697<SeP>608<SeP>518<SeP>248<SeP>243<SeP>182<SeP>157";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "United States<SeP>China<SeP>India<SeP>Taiwan<SeP>Singapore<SeP>Romania<SeP>Indonesia<SeP>Germany<SeP>Hong Kong<SeP>France";
  const itemLabel   = "Ataques";
  const itemData    = "1961<SeP>1327<SeP>782<SeP>731<SeP>647<SeP>614<SeP>593<SeP>526<SeP>458<SeP>453";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>4134<SeP>47890<SeP>4609<SeP>207566<SeP>4837<SeP>135377<SeP>7922<SeP>3462<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "2709<SeP>1525<SeP>922<SeP>898<SeP>686<SeP>532<SeP>508<SeP>411<SeP>401<SeP>399";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4609<SeP>4837<SeP>9829<SeP>9269<SeP>7922<SeP>17676<SeP>2519<SeP>207566<SeP>21497";
  const itemLabel   = "Escaneos";
  const itemData    = "1416<SeP>898<SeP>510<SeP>398<SeP>358<SeP>315<SeP>311<SeP>289<SeP>286<SeP>196";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>47890<SeP>135377<SeP>207566<SeP>16276<SeP>45090<SeP>3462<SeP>8075<SeP>136052<SeP>8151";
  const itemLabel   = "Ataques";
  const itemData    = "2567<SeP>800<SeP>440<SeP>400<SeP>341<SeP>308<SeP>292<SeP>255<SeP>254<SeP>253";
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
