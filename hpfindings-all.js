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
  document.getElementById("last-updated").innerHTML = "2025-3-3";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.2";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.2";
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
  const metricData    = "2833940";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "550740";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2283200";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139693";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1433244";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "849956";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54142";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "248969";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "600987";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43440";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2833940";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "550740";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2283200";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139693";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1433244";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "849956";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54142";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "248969";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "600987";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43440";
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
  const incomingData = "2833940<SeP>550740<SeP>2283200<SeP>139693";
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
  const incomingData = "2283200<SeP>1433244<SeP>849956<SeP>54142";
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
  const incomingData = "849956<SeP>248969<SeP>600987<SeP>43440";
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
  const incomingData = "2559719<SeP>256831<SeP>2302888";
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
  const incomingData = "388198<SeP>149<SeP>388049<SeP>227";
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
  const incomingData = "2833940<SeP>550740<SeP>2283200<SeP>139693";
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
  const incomingData = "2283200<SeP>1433244<SeP>849956<SeP>54142";
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
  const incomingData = "849956<SeP>248969<SeP>600987<SeP>43440";
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
  const incomingData = "2559719<SeP>256831<SeP>2302888";
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
  const incomingData = "388198<SeP>149<SeP>388049<SeP>227";
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
  const column3Data   = "220333<SeP>201863<SeP>12472<SeP>12462<SeP>9751<SeP>9442<SeP>6447<SeP>5593<SeP>4631<SeP>3497";
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
  const column2Data  = "211676<SeP>43117<SeP>794<SeP>485<SeP>457<SeP>438<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2400409<SeP>433531";
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
  const column3Data   = "220333<SeP>201863<SeP>12472<SeP>12462<SeP>9751<SeP>9442<SeP>6447<SeP>5593<SeP>4631<SeP>3497";
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
  const column2Data  = "211676<SeP>43117<SeP>794<SeP>485<SeP>457<SeP>438<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2400409<SeP>433531";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-3";

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
        "name": "traffic between 2023-07-26 and 2025-03-01"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          365176,50
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
        "name": "scans between 2023-07-26 and 2025-03-01"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          226362,32,
          365176,50
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
        "name": "attacks between 2023-07-26 and 2025-03-01"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138814,21,
          365176,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-3";

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
        "name": "tráfico entre 2023-07-26 y 2025-03-01"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          365176,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-01"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          226362,32,
          365176,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-01"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138814,21,
          365176,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:09:45<SeP>2023-07-28 22:19:30<SeP>2023-07-30 09:29:15<SeP>2023-07-31 20:39:00<SeP>2023-08-02 07:48:45<SeP>2023-08-03 18:58:30<SeP>2023-08-05 06:08:15<SeP>2023-08-06 17:18:00<SeP>2023-08-08 04:27:45<SeP>2023-08-09 15:37:30<SeP>2023-08-11 02:47:15<SeP>2023-08-12 13:57:00<SeP>2023-08-14 01:06:45<SeP>2023-08-15 12:16:30<SeP>2023-08-16 23:26:15<SeP>2023-08-18 10:36:00<SeP>2023-08-19 21:45:45<SeP>2023-08-21 08:55:30<SeP>2023-08-22 20:05:15<SeP>2023-08-24 07:15:00<SeP>2023-08-25 18:24:45<SeP>2023-08-27 05:34:30<SeP>2023-08-28 16:44:15<SeP>2023-08-30 03:54:00<SeP>2023-08-31 15:03:45<SeP>2023-09-02 02:13:30<SeP>2023-09-03 13:23:15<SeP>2023-09-05 00:33:00<SeP>2023-09-06 11:42:45<SeP>2023-09-07 22:52:30<SeP>2023-09-09 10:02:15<SeP>2023-09-10 21:12:00<SeP>2023-09-12 08:21:45<SeP>2023-09-13 19:31:30<SeP>2023-09-15 06:41:15<SeP>2023-09-16 17:51:00<SeP>2023-09-18 05:00:45<SeP>2023-09-19 16:10:30<SeP>2023-09-21 03:20:15<SeP>2023-09-22 14:30:00<SeP>2023-09-24 01:39:45<SeP>2023-09-25 12:49:30<SeP>2023-09-26 23:59:15<SeP>2023-09-28 11:09:00<SeP>2023-09-29 22:18:45<SeP>2023-10-01 09:28:30<SeP>2023-10-02 20:38:15<SeP>2023-10-04 07:48:00<SeP>2023-10-05 18:57:45<SeP>2023-10-07 06:07:30<SeP>2023-10-08 17:17:15<SeP>2023-10-10 04:27:00<SeP>2023-10-11 15:36:45<SeP>2023-10-13 02:46:30<SeP>2023-10-14 13:56:15<SeP>2023-10-16 01:06:00<SeP>2023-10-17 12:15:45<SeP>2023-10-18 23:25:30<SeP>2023-10-20 10:35:15<SeP>2023-10-21 21:45:00<SeP>2023-10-23 08:54:45<SeP>2023-10-24 20:04:30<SeP>2023-10-26 07:14:15<SeP>2023-10-27 18:24:00<SeP>2023-10-29 05:33:45<SeP>2023-10-30 16:43:30<SeP>2023-11-01 03:53:15<SeP>2023-11-02 15:03:00<SeP>2023-11-04 02:12:45<SeP>2023-11-05 12:22:30<SeP>2023-11-06 23:32:15<SeP>2023-11-08 10:42:00<SeP>2023-11-09 21:51:45<SeP>2023-11-11 09:01:30<SeP>2023-11-12 20:11:15<SeP>2023-11-14 07:21:00<SeP>2023-11-15 18:30:45<SeP>2023-11-17 05:40:30<SeP>2023-11-18 16:50:15<SeP>2023-11-20 04:00:00<SeP>2023-11-21 15:09:45<SeP>2023-11-23 02:19:30<SeP>2023-11-24 13:29:15<SeP>2023-11-26 00:39:00<SeP>2023-11-27 11:48:45<SeP>2023-11-28 22:58:30<SeP>2023-11-30 10:08:15<SeP>2023-12-01 21:18:00<SeP>2023-12-03 08:27:45<SeP>2023-12-04 19:37:30<SeP>2023-12-06 06:47:15<SeP>2023-12-07 17:57:00<SeP>2023-12-09 05:06:45<SeP>2023-12-10 16:16:30<SeP>2023-12-12 03:26:15<SeP>2023-12-13 14:36:00<SeP>2023-12-15 01:45:45<SeP>2023-12-16 12:55:30<SeP>2023-12-18 00:05:15<SeP>2023-12-19 11:15:00<SeP>2023-12-20 22:24:45<SeP>2023-12-22 09:34:30<SeP>2023-12-23 20:44:15<SeP>2023-12-25 07:54:00<SeP>2023-12-26 19:03:45<SeP>2023-12-28 06:13:30<SeP>2023-12-29 17:23:15<SeP>2023-12-31 04:33:00<SeP>2024-01-01 15:42:45<SeP>2024-01-03 02:52:30<SeP>2024-01-04 14:02:15<SeP>2024-01-06 01:12:00<SeP>2024-01-07 12:21:45<SeP>2024-01-08 23:31:30<SeP>2024-01-10 10:41:15<SeP>2024-01-11 21:51:00<SeP>2024-01-13 09:00:45<SeP>2024-01-14 20:10:30<SeP>2024-01-16 07:20:15<SeP>2024-01-17 18:30:00<SeP>2024-01-19 05:39:45<SeP>2024-01-20 16:49:30<SeP>2024-01-22 03:59:15<SeP>2024-01-23 15:09:00<SeP>2024-01-25 02:18:45<SeP>2024-01-26 13:28:30<SeP>2024-01-28 00:38:15<SeP>2024-01-29 11:48:00<SeP>2024-01-30 22:57:45<SeP>2024-02-01 10:07:30<SeP>2024-02-02 21:17:15<SeP>2024-02-04 08:27:00<SeP>2024-02-05 19:36:45<SeP>2024-02-07 06:46:30<SeP>2024-02-08 17:56:15<SeP>2024-02-10 05:06:00<SeP>2024-02-11 16:15:45<SeP>2024-02-13 03:25:30<SeP>2024-02-14 14:35:15<SeP>2024-02-16 01:45:00<SeP>2024-02-17 12:54:45<SeP>2024-02-19 00:04:30<SeP>2024-02-20 11:14:15<SeP>2024-02-21 22:24:00<SeP>2024-02-23 09:33:45<SeP>2024-02-24 20:43:30<SeP>2024-02-26 07:53:15<SeP>2024-02-27 19:03:00<SeP>2024-02-29 06:12:45<SeP>2024-03-01 17:22:30<SeP>2024-03-03 04:32:15<SeP>2024-03-04 15:42:00<SeP>2024-03-06 02:51:45<SeP>2024-03-07 14:01:30<SeP>2024-03-09 01:11:15<SeP>2024-03-10 13:21:00<SeP>2024-03-12 00:30:45<SeP>2024-03-13 11:40:30<SeP>2024-03-14 22:50:15<SeP>2024-03-16 10:00:00<SeP>2024-03-17 21:09:45<SeP>2024-03-19 08:19:30<SeP>2024-03-20 19:29:15<SeP>2024-03-22 06:39:00<SeP>2024-03-23 17:48:45<SeP>2024-03-25 04:58:30<SeP>2024-03-26 16:08:15<SeP>2024-03-28 03:18:00<SeP>2024-03-29 14:27:45<SeP>2024-03-31 01:37:30<SeP>2024-04-01 12:47:15<SeP>2024-04-02 23:57:00<SeP>2024-04-04 11:06:45<SeP>2024-04-05 22:16:30<SeP>2024-04-07 09:26:15<SeP>2024-04-08 20:36:00<SeP>2024-04-10 07:45:45<SeP>2024-04-11 18:55:30<SeP>2024-04-13 06:05:15<SeP>2024-04-14 17:15:00<SeP>2024-04-16 04:24:45<SeP>2024-04-17 15:34:30<SeP>2024-04-19 02:44:15<SeP>2024-04-20 13:54:00<SeP>2024-04-22 01:03:45<SeP>2024-04-23 12:13:30<SeP>2024-04-24 23:23:15<SeP>2024-04-26 10:33:00<SeP>2024-04-27 21:42:45<SeP>2024-04-29 08:52:30<SeP>2024-04-30 20:02:15<SeP>2024-05-02 07:12:00<SeP>2024-05-03 18:21:45<SeP>2024-05-05 05:31:30<SeP>2024-05-06 16:41:15<SeP>2024-05-08 03:51:00<SeP>2024-05-09 15:00:45<SeP>2024-05-11 02:10:30<SeP>2024-05-12 13:20:15<SeP>2024-05-14 00:30:00<SeP>2024-05-15 11:39:45<SeP>2024-05-16 22:49:30<SeP>2024-05-18 09:59:15<SeP>2024-05-19 21:09:00<SeP>2024-05-21 08:18:45<SeP>2024-05-22 19:28:30<SeP>2024-05-24 06:38:15<SeP>2024-05-25 17:48:00<SeP>2024-05-27 04:57:45<SeP>2024-05-28 16:07:30<SeP>2024-05-30 03:17:15<SeP>2024-05-31 14:27:00<SeP>2024-06-02 01:36:45<SeP>2024-06-03 12:46:30<SeP>2024-06-04 23:56:15<SeP>2024-06-06 11:06:00<SeP>2024-06-07 22:15:45<SeP>2024-06-09 09:25:30<SeP>2024-06-10 20:35:15<SeP>2024-06-12 07:45:00<SeP>2024-06-13 18:54:45<SeP>2024-06-15 06:04:30<SeP>2024-06-16 17:14:15<SeP>2024-06-18 04:24:00<SeP>2024-06-19 15:33:45<SeP>2024-06-21 02:43:30<SeP>2024-06-22 13:53:15<SeP>2024-06-24 01:03:00<SeP>2024-06-25 12:12:45<SeP>2024-06-26 23:22:30<SeP>2024-06-28 10:32:15<SeP>2024-06-29 21:42:00<SeP>2024-07-01 08:51:45<SeP>2024-07-02 20:01:30<SeP>2024-07-04 07:11:15<SeP>2024-07-05 18:21:00<SeP>2024-07-07 05:30:45<SeP>2024-07-08 16:40:30<SeP>2024-07-10 03:50:15<SeP>2024-07-11 15:00:00<SeP>2024-07-13 02:09:45<SeP>2024-07-14 13:19:30<SeP>2024-07-16 00:29:15<SeP>2024-07-17 11:39:00<SeP>2024-07-18 22:48:45<SeP>2024-07-20 09:58:30<SeP>2024-07-21 21:08:15<SeP>2024-07-23 08:18:00<SeP>2024-07-24 19:27:45<SeP>2024-07-26 06:37:30<SeP>2024-07-27 17:47:15<SeP>2024-07-29 04:57:00<SeP>2024-07-30 16:06:45<SeP>2024-08-01 03:16:30<SeP>2024-08-02 14:26:15<SeP>2024-08-04 01:36:00<SeP>2024-08-05 12:45:45<SeP>2024-08-06 23:55:30<SeP>2024-08-08 11:05:15<SeP>2024-08-09 22:15:00<SeP>2024-08-11 09:24:45<SeP>2024-08-12 20:34:30<SeP>2024-08-14 07:44:15<SeP>2024-08-15 18:54:00<SeP>2024-08-17 06:03:45<SeP>2024-08-18 17:13:30<SeP>2024-08-20 04:23:15<SeP>2024-08-21 15:33:00<SeP>2024-08-23 02:42:45<SeP>2024-08-24 13:52:30<SeP>2024-08-26 01:02:15<SeP>2024-08-27 12:12:00<SeP>2024-08-28 23:21:45<SeP>2024-08-30 10:31:30<SeP>2024-08-31 21:41:15<SeP>2024-09-02 08:51:00<SeP>2024-09-03 20:00:45<SeP>2024-09-05 07:10:30<SeP>2024-09-06 18:20:15<SeP>2024-09-08 05:30:00<SeP>2024-09-09 16:39:45<SeP>2024-09-11 03:49:30<SeP>2024-09-12 14:59:15<SeP>2024-09-14 02:09:00<SeP>2024-09-15 13:18:45<SeP>2024-09-17 00:28:30<SeP>2024-09-18 11:38:15<SeP>2024-09-19 22:48:00<SeP>2024-09-21 09:57:45<SeP>2024-09-22 21:07:30<SeP>2024-09-24 08:17:15<SeP>2024-09-25 19:27:00<SeP>2024-09-27 06:36:45<SeP>2024-09-28 17:46:30<SeP>2024-09-30 04:56:15<SeP>2024-10-01 16:06:00<SeP>2024-10-03 03:15:45<SeP>2024-10-04 14:25:30<SeP>2024-10-06 01:35:15<SeP>2024-10-07 12:45:00<SeP>2024-10-08 23:54:45<SeP>2024-10-10 11:04:30<SeP>2024-10-11 22:14:15<SeP>2024-10-13 09:24:00<SeP>2024-10-14 20:33:45<SeP>2024-10-16 07:43:30<SeP>2024-10-17 18:53:15<SeP>2024-10-19 06:03:00<SeP>2024-10-20 17:12:45<SeP>2024-10-22 04:22:30<SeP>2024-10-23 15:32:15<SeP>2024-10-25 02:42:00<SeP>2024-10-26 13:51:45<SeP>2024-10-28 01:01:30<SeP>2024-10-29 12:11:15<SeP>2024-10-30 23:21:00<SeP>2024-11-01 10:30:45<SeP>2024-11-02 21:40:30<SeP>2024-11-04 07:50:15<SeP>2024-11-05 19:00:00<SeP>2024-11-07 06:09:45<SeP>2024-11-08 17:19:30<SeP>2024-11-10 04:29:15<SeP>2024-11-11 15:39:00<SeP>2024-11-13 02:48:45<SeP>2024-11-14 13:58:30<SeP>2024-11-16 01:08:15<SeP>2024-11-17 12:18:00<SeP>2024-11-18 23:27:45<SeP>2024-11-20 10:37:30<SeP>2024-11-21 21:47:15<SeP>2024-11-23 08:57:00<SeP>2024-11-24 20:06:45<SeP>2024-11-26 07:16:30<SeP>2024-11-27 18:26:15<SeP>2024-11-29 05:36:00<SeP>2024-11-30 16:45:45<SeP>2024-12-02 03:55:30<SeP>2024-12-03 15:05:15<SeP>2024-12-05 02:15:00<SeP>2024-12-06 13:24:45<SeP>2024-12-08 00:34:30<SeP>2024-12-09 11:44:15<SeP>2024-12-10 22:54:00<SeP>2024-12-12 10:03:45<SeP>2024-12-13 21:13:30<SeP>2024-12-15 08:23:15<SeP>2024-12-16 19:33:00<SeP>2024-12-18 06:42:45<SeP>2024-12-19 17:52:30<SeP>2024-12-21 05:02:15<SeP>2024-12-22 16:12:00<SeP>2024-12-24 03:21:45<SeP>2024-12-25 14:31:30<SeP>2024-12-27 01:41:15<SeP>2024-12-28 12:51:00<SeP>2024-12-30 00:00:45<SeP>2024-12-31 11:10:30<SeP>2025-01-01 22:20:15<SeP>2025-01-03 09:30:00<SeP>2025-01-04 20:39:45<SeP>2025-01-06 07:49:30<SeP>2025-01-07 18:59:15<SeP>2025-01-09 06:09:00<SeP>2025-01-10 17:18:45<SeP>2025-01-12 04:28:30<SeP>2025-01-13 15:38:15<SeP>2025-01-15 02:48:00<SeP>2025-01-16 13:57:45<SeP>2025-01-18 01:07:30<SeP>2025-01-19 12:17:15<SeP>2025-01-20 23:27:00<SeP>2025-01-22 10:36:45<SeP>2025-01-23 21:46:30<SeP>2025-01-25 08:56:15<SeP>2025-01-26 20:06:00<SeP>2025-01-28 07:15:45<SeP>2025-01-29 18:25:30<SeP>2025-01-31 05:35:15<SeP>2025-02-01 16:45:00<SeP>2025-02-03 03:54:45<SeP>2025-02-04 15:04:30<SeP>2025-02-06 02:14:15<SeP>2025-02-07 13:24:00<SeP>2025-02-09 00:33:45<SeP>2025-02-10 11:43:30<SeP>2025-02-11 22:53:15<SeP>2025-02-13 10:03:00<SeP>2025-02-14 21:12:45<SeP>2025-02-16 08:22:30<SeP>2025-02-17 19:32:15<SeP>2025-02-19 06:42:00<SeP>2025-02-20 17:51:45<SeP>2025-02-22 05:01:30<SeP>2025-02-23 16:11:15<SeP>2025-02-25 03:21:00<SeP>2025-02-26 14:30:45<SeP>2025-02-28 01:40:30<SeP>2025-03-01 12:50:15";
  const item1Label       = "Scans";
  const item1Data        = "767<SeP>1497<SeP>1383<SeP>1450<SeP>1252<SeP>1715<SeP>957<SeP>964<SeP>1177<SeP>3408<SeP>2459<SeP>1791<SeP>3061<SeP>1255<SeP>738<SeP>951<SeP>1398<SeP>2923<SeP>1355<SeP>1544<SeP>1282<SeP>924<SeP>1043<SeP>1297<SeP>893<SeP>855<SeP>779<SeP>3499<SeP>956<SeP>1056<SeP>842<SeP>1516<SeP>1093<SeP>804<SeP>3091<SeP>2033<SeP>2576<SeP>1723<SeP>1580<SeP>1353<SeP>1460<SeP>1895<SeP>1893<SeP>2068<SeP>1552<SeP>1566<SeP>1585<SeP>1767<SeP>1659<SeP>1868<SeP>1857<SeP>1781<SeP>1527<SeP>3212<SeP>1493<SeP>1566<SeP>2125<SeP>1894<SeP>2212<SeP>1860<SeP>3309<SeP>1309<SeP>1617<SeP>1513<SeP>1320<SeP>1953<SeP>1613<SeP>1222<SeP>1360<SeP>1468<SeP>1325<SeP>2135<SeP>1151<SeP>1238<SeP>1275<SeP>6897<SeP>2520<SeP>1442<SeP>1303<SeP>1701<SeP>1953<SeP>1117<SeP>6535<SeP>1626<SeP>1665<SeP>995<SeP>1156<SeP>3260<SeP>1347<SeP>836<SeP>1038<SeP>1098<SeP>1062<SeP>2981<SeP>1243<SeP>1391<SeP>2864<SeP>6597<SeP>1242<SeP>999<SeP>923<SeP>921<SeP>1011<SeP>990<SeP>970<SeP>1009<SeP>4038<SeP>2081<SeP>1404<SeP>1555<SeP>587<SeP>1009<SeP>1577<SeP>1196<SeP>1005<SeP>990<SeP>2324<SeP>1300<SeP>1033<SeP>947<SeP>1096<SeP>804<SeP>857<SeP>876<SeP>804<SeP>875<SeP>1092<SeP>781<SeP>801<SeP>898<SeP>929<SeP>936<SeP>600<SeP>831<SeP>867<SeP>851<SeP>910<SeP>866<SeP>785<SeP>815<SeP>941<SeP>884<SeP>810<SeP>896<SeP>895<SeP>933<SeP>1118<SeP>976<SeP>553<SeP>834<SeP>851<SeP>852<SeP>1302<SeP>861<SeP>1126<SeP>1154<SeP>1196<SeP>934<SeP>875<SeP>1049<SeP>807<SeP>814<SeP>1072<SeP>910<SeP>900<SeP>947<SeP>1077<SeP>952<SeP>1126<SeP>890<SeP>1088<SeP>1093<SeP>935<SeP>900<SeP>2212<SeP>1229<SeP>1107<SeP>1079<SeP>1007<SeP>1129<SeP>971<SeP>846<SeP>687<SeP>910<SeP>1104<SeP>939<SeP>933<SeP>1090<SeP>1330<SeP>1025<SeP>1179<SeP>1276<SeP>1213<SeP>1346<SeP>1254<SeP>1296<SeP>1530<SeP>1931<SeP>1427<SeP>1216<SeP>746<SeP>1088<SeP>918<SeP>1106<SeP>511<SeP>819<SeP>1016<SeP>845<SeP>3054<SeP>4887<SeP>2181<SeP>1807<SeP>1144<SeP>872<SeP>1027<SeP>896<SeP>930<SeP>1031<SeP>1110<SeP>1023<SeP>1022<SeP>2228<SeP>1300<SeP>1075<SeP>1193<SeP>1293<SeP>1200<SeP>1083<SeP>935<SeP>1083<SeP>1098<SeP>1085<SeP>1055<SeP>1158<SeP>1129<SeP>957<SeP>922<SeP>1284<SeP>1116<SeP>1139<SeP>1245<SeP>1354<SeP>1256<SeP>1530<SeP>1239<SeP>1063<SeP>1167<SeP>1152<SeP>1971<SeP>1277<SeP>1863<SeP>1709<SeP>1375<SeP>1993<SeP>1686<SeP>1177<SeP>1181<SeP>1173<SeP>1183<SeP>1702<SeP>1176<SeP>1264<SeP>1472<SeP>1864<SeP>1364<SeP>1571<SeP>1250<SeP>1282<SeP>1250<SeP>1188<SeP>1190<SeP>1164<SeP>1211<SeP>1265<SeP>1256<SeP>1417<SeP>1801<SeP>1392<SeP>1213<SeP>1600<SeP>1527<SeP>1166<SeP>1114<SeP>912<SeP>891<SeP>878<SeP>1038<SeP>1007<SeP>1818<SeP>1055<SeP>1138<SeP>1162<SeP>784<SeP>1013<SeP>1001<SeP>1316<SeP>868<SeP>912<SeP>1135<SeP>1355<SeP>1621<SeP>1307<SeP>1073<SeP>1056<SeP>1103<SeP>1798<SeP>951<SeP>1239<SeP>1005<SeP>1490<SeP>1157<SeP>859<SeP>1208<SeP>1076<SeP>960<SeP>873<SeP>1025<SeP>1417<SeP>1487<SeP>1455<SeP>1423<SeP>1390<SeP>946<SeP>1130<SeP>1246<SeP>1149<SeP>894<SeP>1273<SeP>1001<SeP>1149<SeP>1307<SeP>1517<SeP>1212<SeP>1687<SeP>1308<SeP>1666<SeP>1375<SeP>1290<SeP>1477<SeP>1441<SeP>1387<SeP>1267<SeP>1724<SeP>1422<SeP>1548<SeP>1494<SeP>1330<SeP>1404<SeP>1283<SeP>1289<SeP>1384<SeP>1421<SeP>1614<SeP>1236<SeP>1311<SeP>1276<SeP>1369<SeP>1325<SeP>1177<SeP>1410<SeP>1926<SeP>1602<SeP>1239<SeP>713<SeP>1429<SeP>1826<SeP>1317<SeP>1256<SeP>1331<SeP>1061<SeP>1463<SeP>1409<SeP>1355<SeP>1368<SeP>1773<SeP>1303<SeP>1604<SeP>1755<SeP>1279<SeP>1502<SeP>1359<SeP>1804<SeP>1629<SeP>954<SeP>1104<SeP>2057<SeP>1885<SeP>1689<SeP>1769<SeP>1762<SeP>1441<SeP>1634<SeP>1609<SeP>1623<SeP>1501<SeP>1742<SeP>1780<SeP>1632<SeP>1440<SeP>1444";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "155<SeP>614<SeP>1182<SeP>781<SeP>306<SeP>225<SeP>6975<SeP>544<SeP>9508<SeP>571<SeP>397<SeP>1124<SeP>1274<SeP>263<SeP>159<SeP>451<SeP>110<SeP>763<SeP>297<SeP>6248<SeP>7059<SeP>6967<SeP>8611<SeP>4654<SeP>186<SeP>296<SeP>410<SeP>379<SeP>5676<SeP>348<SeP>170<SeP>307<SeP>475<SeP>314<SeP>5671<SeP>10284<SeP>9260<SeP>10579<SeP>7598<SeP>5339<SeP>7987<SeP>6672<SeP>9456<SeP>9441<SeP>7329<SeP>8329<SeP>8308<SeP>9025<SeP>8283<SeP>5957<SeP>6211<SeP>11495<SeP>7598<SeP>7885<SeP>6905<SeP>10755<SeP>12409<SeP>21963<SeP>9073<SeP>9228<SeP>10059<SeP>6351<SeP>9294<SeP>7888<SeP>8899<SeP>9045<SeP>5785<SeP>6275<SeP>7271<SeP>6801<SeP>2367<SeP>6184<SeP>5985<SeP>6811<SeP>6333<SeP>8070<SeP>3427<SeP>5928<SeP>5809<SeP>6825<SeP>6250<SeP>5759<SeP>4399<SeP>7370<SeP>5057<SeP>5562<SeP>6009<SeP>7698<SeP>21902<SeP>21469<SeP>21944<SeP>9624<SeP>6298<SeP>6786<SeP>12484<SeP>7687<SeP>3480<SeP>6586<SeP>3705<SeP>4655<SeP>7180<SeP>6556<SeP>6976<SeP>6890<SeP>5750<SeP>4082<SeP>7008<SeP>8684<SeP>8112<SeP>8408<SeP>3874<SeP>6824<SeP>10360<SeP>8621<SeP>3391<SeP>3632<SeP>6983<SeP>9148<SeP>5750<SeP>7390<SeP>8146<SeP>3087<SeP>3036<SeP>1185<SeP>1635<SeP>1837<SeP>2486<SeP>845<SeP>1309<SeP>856<SeP>1440<SeP>1345<SeP>1085<SeP>1158<SeP>820<SeP>1172<SeP>1052<SeP>1204<SeP>1383<SeP>1108<SeP>1685<SeP>2125<SeP>1567<SeP>12493<SeP>6335<SeP>10180<SeP>7428<SeP>5450<SeP>10657<SeP>9097<SeP>9116<SeP>8608<SeP>13351<SeP>8434<SeP>9851<SeP>10943<SeP>13958<SeP>8979<SeP>9019<SeP>4110<SeP>8024<SeP>11460<SeP>19246<SeP>6461<SeP>8116<SeP>10843<SeP>17294<SeP>7208<SeP>5960<SeP>6256<SeP>7851<SeP>25858<SeP>7697<SeP>8497<SeP>11683<SeP>4601<SeP>6382<SeP>5722<SeP>16731<SeP>4731<SeP>12306<SeP>8259<SeP>7041<SeP>8292<SeP>7704<SeP>3259<SeP>5580<SeP>6239<SeP>7218<SeP>6388<SeP>6091<SeP>7340<SeP>18651<SeP>7143<SeP>8429<SeP>5661<SeP>7310<SeP>9334<SeP>8464<SeP>5840<SeP>2865<SeP>7186<SeP>3028<SeP>5540<SeP>4091<SeP>674<SeP>120<SeP>633<SeP>192<SeP>572<SeP>1089<SeP>343<SeP>533<SeP>817<SeP>1611<SeP>3202<SeP>10730<SeP>12779<SeP>1982<SeP>4384<SeP>2853<SeP>3664<SeP>6929<SeP>4165<SeP>2569<SeP>3776<SeP>2741<SeP>2913<SeP>3587<SeP>4250<SeP>2211<SeP>3317<SeP>1273<SeP>2790<SeP>1069<SeP>1915<SeP>1599<SeP>1383<SeP>1253<SeP>852<SeP>1615<SeP>26891<SeP>1768<SeP>3911<SeP>3910<SeP>2331<SeP>3624<SeP>2736<SeP>1674<SeP>3886<SeP>2114<SeP>4105<SeP>2042<SeP>2989<SeP>3852<SeP>4546<SeP>5008<SeP>5070<SeP>4801<SeP>2669<SeP>2183<SeP>5034<SeP>3387<SeP>9905<SeP>5386<SeP>3336<SeP>2778<SeP>2394<SeP>4681<SeP>3530<SeP>3563<SeP>3009<SeP>2831<SeP>5427<SeP>3935<SeP>5649<SeP>3718<SeP>5646<SeP>4519<SeP>5169<SeP>5857<SeP>13764<SeP>14241<SeP>12517<SeP>1835<SeP>2278<SeP>4794<SeP>3334<SeP>4061<SeP>3960<SeP>5021<SeP>3987<SeP>4485<SeP>4250<SeP>3564<SeP>3301<SeP>1268<SeP>1955<SeP>3259<SeP>2854<SeP>2190<SeP>3968<SeP>4228<SeP>4062<SeP>3211<SeP>4048<SeP>3347<SeP>3668<SeP>3283<SeP>8615<SeP>6354<SeP>5433<SeP>4612<SeP>5332<SeP>3903<SeP>3750<SeP>4694<SeP>4797<SeP>5498<SeP>4790<SeP>4812<SeP>1994<SeP>745<SeP>2012<SeP>1391<SeP>1086<SeP>1405<SeP>1760<SeP>1123<SeP>1997<SeP>4096<SeP>5351<SeP>5951<SeP>34033<SeP>5212<SeP>6819<SeP>21604<SeP>5141<SeP>5287<SeP>6254<SeP>4012<SeP>24640<SeP>5412<SeP>4917<SeP>4820<SeP>5734<SeP>17569<SeP>17817<SeP>4367<SeP>3397<SeP>4505<SeP>5021<SeP>6152<SeP>3264<SeP>3167<SeP>3796<SeP>4631<SeP>5328<SeP>4076<SeP>17735<SeP>6216<SeP>6478<SeP>4193<SeP>2468<SeP>3348<SeP>4514<SeP>4062<SeP>3862<SeP>2932<SeP>3857<SeP>2359<SeP>4096<SeP>4201<SeP>7935<SeP>10283<SeP>8344<SeP>8868<SeP>9049<SeP>7251<SeP>6208<SeP>5107<SeP>4227<SeP>22949<SeP>6242<SeP>3226<SeP>4604<SeP>3280<SeP>11391<SeP>5789<SeP>3725<SeP>4832<SeP>4314<SeP>2730<SeP>9450<SeP>9778<SeP>4536<SeP>3107<SeP>3337<SeP>2298<SeP>2517";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:09:45<SeP>2023-07-28 22:19:30<SeP>2023-07-30 09:29:15<SeP>2023-07-31 20:39:00<SeP>2023-08-02 07:48:45<SeP>2023-08-03 18:58:30<SeP>2023-08-05 06:08:15<SeP>2023-08-06 17:18:00<SeP>2023-08-08 04:27:45<SeP>2023-08-09 15:37:30<SeP>2023-08-11 02:47:15<SeP>2023-08-12 13:57:00<SeP>2023-08-14 01:06:45<SeP>2023-08-15 12:16:30<SeP>2023-08-16 23:26:15<SeP>2023-08-18 10:36:00<SeP>2023-08-19 21:45:45<SeP>2023-08-21 08:55:30<SeP>2023-08-22 20:05:15<SeP>2023-08-24 07:15:00<SeP>2023-08-25 18:24:45<SeP>2023-08-27 05:34:30<SeP>2023-08-28 16:44:15<SeP>2023-08-30 03:54:00<SeP>2023-08-31 15:03:45<SeP>2023-09-02 02:13:30<SeP>2023-09-03 13:23:15<SeP>2023-09-05 00:33:00<SeP>2023-09-06 11:42:45<SeP>2023-09-07 22:52:30<SeP>2023-09-09 10:02:15<SeP>2023-09-10 21:12:00<SeP>2023-09-12 08:21:45<SeP>2023-09-13 19:31:30<SeP>2023-09-15 06:41:15<SeP>2023-09-16 17:51:00<SeP>2023-09-18 05:00:45<SeP>2023-09-19 16:10:30<SeP>2023-09-21 03:20:15<SeP>2023-09-22 14:30:00<SeP>2023-09-24 01:39:45<SeP>2023-09-25 12:49:30<SeP>2023-09-26 23:59:15<SeP>2023-09-28 11:09:00<SeP>2023-09-29 22:18:45<SeP>2023-10-01 09:28:30<SeP>2023-10-02 20:38:15<SeP>2023-10-04 07:48:00<SeP>2023-10-05 18:57:45<SeP>2023-10-07 06:07:30<SeP>2023-10-08 17:17:15<SeP>2023-10-10 04:27:00<SeP>2023-10-11 15:36:45<SeP>2023-10-13 02:46:30<SeP>2023-10-14 13:56:15<SeP>2023-10-16 01:06:00<SeP>2023-10-17 12:15:45<SeP>2023-10-18 23:25:30<SeP>2023-10-20 10:35:15<SeP>2023-10-21 21:45:00<SeP>2023-10-23 08:54:45<SeP>2023-10-24 20:04:30<SeP>2023-10-26 07:14:15<SeP>2023-10-27 18:24:00<SeP>2023-10-29 05:33:45<SeP>2023-10-30 16:43:30<SeP>2023-11-01 03:53:15<SeP>2023-11-02 15:03:00<SeP>2023-11-04 02:12:45<SeP>2023-11-05 12:22:30<SeP>2023-11-06 23:32:15<SeP>2023-11-08 10:42:00<SeP>2023-11-09 21:51:45<SeP>2023-11-11 09:01:30<SeP>2023-11-12 20:11:15<SeP>2023-11-14 07:21:00<SeP>2023-11-15 18:30:45<SeP>2023-11-17 05:40:30<SeP>2023-11-18 16:50:15<SeP>2023-11-20 04:00:00<SeP>2023-11-21 15:09:45<SeP>2023-11-23 02:19:30<SeP>2023-11-24 13:29:15<SeP>2023-11-26 00:39:00<SeP>2023-11-27 11:48:45<SeP>2023-11-28 22:58:30<SeP>2023-11-30 10:08:15<SeP>2023-12-01 21:18:00<SeP>2023-12-03 08:27:45<SeP>2023-12-04 19:37:30<SeP>2023-12-06 06:47:15<SeP>2023-12-07 17:57:00<SeP>2023-12-09 05:06:45<SeP>2023-12-10 16:16:30<SeP>2023-12-12 03:26:15<SeP>2023-12-13 14:36:00<SeP>2023-12-15 01:45:45<SeP>2023-12-16 12:55:30<SeP>2023-12-18 00:05:15<SeP>2023-12-19 11:15:00<SeP>2023-12-20 22:24:45<SeP>2023-12-22 09:34:30<SeP>2023-12-23 20:44:15<SeP>2023-12-25 07:54:00<SeP>2023-12-26 19:03:45<SeP>2023-12-28 06:13:30<SeP>2023-12-29 17:23:15<SeP>2023-12-31 04:33:00<SeP>2024-01-01 15:42:45<SeP>2024-01-03 02:52:30<SeP>2024-01-04 14:02:15<SeP>2024-01-06 01:12:00<SeP>2024-01-07 12:21:45<SeP>2024-01-08 23:31:30<SeP>2024-01-10 10:41:15<SeP>2024-01-11 21:51:00<SeP>2024-01-13 09:00:45<SeP>2024-01-14 20:10:30<SeP>2024-01-16 07:20:15<SeP>2024-01-17 18:30:00<SeP>2024-01-19 05:39:45<SeP>2024-01-20 16:49:30<SeP>2024-01-22 03:59:15<SeP>2024-01-23 15:09:00<SeP>2024-01-25 02:18:45<SeP>2024-01-26 13:28:30<SeP>2024-01-28 00:38:15<SeP>2024-01-29 11:48:00<SeP>2024-01-30 22:57:45<SeP>2024-02-01 10:07:30<SeP>2024-02-02 21:17:15<SeP>2024-02-04 08:27:00<SeP>2024-02-05 19:36:45<SeP>2024-02-07 06:46:30<SeP>2024-02-08 17:56:15<SeP>2024-02-10 05:06:00<SeP>2024-02-11 16:15:45<SeP>2024-02-13 03:25:30<SeP>2024-02-14 14:35:15<SeP>2024-02-16 01:45:00<SeP>2024-02-17 12:54:45<SeP>2024-02-19 00:04:30<SeP>2024-02-20 11:14:15<SeP>2024-02-21 22:24:00<SeP>2024-02-23 09:33:45<SeP>2024-02-24 20:43:30<SeP>2024-02-26 07:53:15<SeP>2024-02-27 19:03:00<SeP>2024-02-29 06:12:45<SeP>2024-03-01 17:22:30<SeP>2024-03-03 04:32:15<SeP>2024-03-04 15:42:00<SeP>2024-03-06 02:51:45<SeP>2024-03-07 14:01:30<SeP>2024-03-09 01:11:15<SeP>2024-03-10 13:21:00<SeP>2024-03-12 00:30:45<SeP>2024-03-13 11:40:30<SeP>2024-03-14 22:50:15<SeP>2024-03-16 10:00:00<SeP>2024-03-17 21:09:45<SeP>2024-03-19 08:19:30<SeP>2024-03-20 19:29:15<SeP>2024-03-22 06:39:00<SeP>2024-03-23 17:48:45<SeP>2024-03-25 04:58:30<SeP>2024-03-26 16:08:15<SeP>2024-03-28 03:18:00<SeP>2024-03-29 14:27:45<SeP>2024-03-31 01:37:30<SeP>2024-04-01 12:47:15<SeP>2024-04-02 23:57:00<SeP>2024-04-04 11:06:45<SeP>2024-04-05 22:16:30<SeP>2024-04-07 09:26:15<SeP>2024-04-08 20:36:00<SeP>2024-04-10 07:45:45<SeP>2024-04-11 18:55:30<SeP>2024-04-13 06:05:15<SeP>2024-04-14 17:15:00<SeP>2024-04-16 04:24:45<SeP>2024-04-17 15:34:30<SeP>2024-04-19 02:44:15<SeP>2024-04-20 13:54:00<SeP>2024-04-22 01:03:45<SeP>2024-04-23 12:13:30<SeP>2024-04-24 23:23:15<SeP>2024-04-26 10:33:00<SeP>2024-04-27 21:42:45<SeP>2024-04-29 08:52:30<SeP>2024-04-30 20:02:15<SeP>2024-05-02 07:12:00<SeP>2024-05-03 18:21:45<SeP>2024-05-05 05:31:30<SeP>2024-05-06 16:41:15<SeP>2024-05-08 03:51:00<SeP>2024-05-09 15:00:45<SeP>2024-05-11 02:10:30<SeP>2024-05-12 13:20:15<SeP>2024-05-14 00:30:00<SeP>2024-05-15 11:39:45<SeP>2024-05-16 22:49:30<SeP>2024-05-18 09:59:15<SeP>2024-05-19 21:09:00<SeP>2024-05-21 08:18:45<SeP>2024-05-22 19:28:30<SeP>2024-05-24 06:38:15<SeP>2024-05-25 17:48:00<SeP>2024-05-27 04:57:45<SeP>2024-05-28 16:07:30<SeP>2024-05-30 03:17:15<SeP>2024-05-31 14:27:00<SeP>2024-06-02 01:36:45<SeP>2024-06-03 12:46:30<SeP>2024-06-04 23:56:15<SeP>2024-06-06 11:06:00<SeP>2024-06-07 22:15:45<SeP>2024-06-09 09:25:30<SeP>2024-06-10 20:35:15<SeP>2024-06-12 07:45:00<SeP>2024-06-13 18:54:45<SeP>2024-06-15 06:04:30<SeP>2024-06-16 17:14:15<SeP>2024-06-18 04:24:00<SeP>2024-06-19 15:33:45<SeP>2024-06-21 02:43:30<SeP>2024-06-22 13:53:15<SeP>2024-06-24 01:03:00<SeP>2024-06-25 12:12:45<SeP>2024-06-26 23:22:30<SeP>2024-06-28 10:32:15<SeP>2024-06-29 21:42:00<SeP>2024-07-01 08:51:45<SeP>2024-07-02 20:01:30<SeP>2024-07-04 07:11:15<SeP>2024-07-05 18:21:00<SeP>2024-07-07 05:30:45<SeP>2024-07-08 16:40:30<SeP>2024-07-10 03:50:15<SeP>2024-07-11 15:00:00<SeP>2024-07-13 02:09:45<SeP>2024-07-14 13:19:30<SeP>2024-07-16 00:29:15<SeP>2024-07-17 11:39:00<SeP>2024-07-18 22:48:45<SeP>2024-07-20 09:58:30<SeP>2024-07-21 21:08:15<SeP>2024-07-23 08:18:00<SeP>2024-07-24 19:27:45<SeP>2024-07-26 06:37:30<SeP>2024-07-27 17:47:15<SeP>2024-07-29 04:57:00<SeP>2024-07-30 16:06:45<SeP>2024-08-01 03:16:30<SeP>2024-08-02 14:26:15<SeP>2024-08-04 01:36:00<SeP>2024-08-05 12:45:45<SeP>2024-08-06 23:55:30<SeP>2024-08-08 11:05:15<SeP>2024-08-09 22:15:00<SeP>2024-08-11 09:24:45<SeP>2024-08-12 20:34:30<SeP>2024-08-14 07:44:15<SeP>2024-08-15 18:54:00<SeP>2024-08-17 06:03:45<SeP>2024-08-18 17:13:30<SeP>2024-08-20 04:23:15<SeP>2024-08-21 15:33:00<SeP>2024-08-23 02:42:45<SeP>2024-08-24 13:52:30<SeP>2024-08-26 01:02:15<SeP>2024-08-27 12:12:00<SeP>2024-08-28 23:21:45<SeP>2024-08-30 10:31:30<SeP>2024-08-31 21:41:15<SeP>2024-09-02 08:51:00<SeP>2024-09-03 20:00:45<SeP>2024-09-05 07:10:30<SeP>2024-09-06 18:20:15<SeP>2024-09-08 05:30:00<SeP>2024-09-09 16:39:45<SeP>2024-09-11 03:49:30<SeP>2024-09-12 14:59:15<SeP>2024-09-14 02:09:00<SeP>2024-09-15 13:18:45<SeP>2024-09-17 00:28:30<SeP>2024-09-18 11:38:15<SeP>2024-09-19 22:48:00<SeP>2024-09-21 09:57:45<SeP>2024-09-22 21:07:30<SeP>2024-09-24 08:17:15<SeP>2024-09-25 19:27:00<SeP>2024-09-27 06:36:45<SeP>2024-09-28 17:46:30<SeP>2024-09-30 04:56:15<SeP>2024-10-01 16:06:00<SeP>2024-10-03 03:15:45<SeP>2024-10-04 14:25:30<SeP>2024-10-06 01:35:15<SeP>2024-10-07 12:45:00<SeP>2024-10-08 23:54:45<SeP>2024-10-10 11:04:30<SeP>2024-10-11 22:14:15<SeP>2024-10-13 09:24:00<SeP>2024-10-14 20:33:45<SeP>2024-10-16 07:43:30<SeP>2024-10-17 18:53:15<SeP>2024-10-19 06:03:00<SeP>2024-10-20 17:12:45<SeP>2024-10-22 04:22:30<SeP>2024-10-23 15:32:15<SeP>2024-10-25 02:42:00<SeP>2024-10-26 13:51:45<SeP>2024-10-28 01:01:30<SeP>2024-10-29 12:11:15<SeP>2024-10-30 23:21:00<SeP>2024-11-01 10:30:45<SeP>2024-11-02 21:40:30<SeP>2024-11-04 07:50:15<SeP>2024-11-05 19:00:00<SeP>2024-11-07 06:09:45<SeP>2024-11-08 17:19:30<SeP>2024-11-10 04:29:15<SeP>2024-11-11 15:39:00<SeP>2024-11-13 02:48:45<SeP>2024-11-14 13:58:30<SeP>2024-11-16 01:08:15<SeP>2024-11-17 12:18:00<SeP>2024-11-18 23:27:45<SeP>2024-11-20 10:37:30<SeP>2024-11-21 21:47:15<SeP>2024-11-23 08:57:00<SeP>2024-11-24 20:06:45<SeP>2024-11-26 07:16:30<SeP>2024-11-27 18:26:15<SeP>2024-11-29 05:36:00<SeP>2024-11-30 16:45:45<SeP>2024-12-02 03:55:30<SeP>2024-12-03 15:05:15<SeP>2024-12-05 02:15:00<SeP>2024-12-06 13:24:45<SeP>2024-12-08 00:34:30<SeP>2024-12-09 11:44:15<SeP>2024-12-10 22:54:00<SeP>2024-12-12 10:03:45<SeP>2024-12-13 21:13:30<SeP>2024-12-15 08:23:15<SeP>2024-12-16 19:33:00<SeP>2024-12-18 06:42:45<SeP>2024-12-19 17:52:30<SeP>2024-12-21 05:02:15<SeP>2024-12-22 16:12:00<SeP>2024-12-24 03:21:45<SeP>2024-12-25 14:31:30<SeP>2024-12-27 01:41:15<SeP>2024-12-28 12:51:00<SeP>2024-12-30 00:00:45<SeP>2024-12-31 11:10:30<SeP>2025-01-01 22:20:15<SeP>2025-01-03 09:30:00<SeP>2025-01-04 20:39:45<SeP>2025-01-06 07:49:30<SeP>2025-01-07 18:59:15<SeP>2025-01-09 06:09:00<SeP>2025-01-10 17:18:45<SeP>2025-01-12 04:28:30<SeP>2025-01-13 15:38:15<SeP>2025-01-15 02:48:00<SeP>2025-01-16 13:57:45<SeP>2025-01-18 01:07:30<SeP>2025-01-19 12:17:15<SeP>2025-01-20 23:27:00<SeP>2025-01-22 10:36:45<SeP>2025-01-23 21:46:30<SeP>2025-01-25 08:56:15<SeP>2025-01-26 20:06:00<SeP>2025-01-28 07:15:45<SeP>2025-01-29 18:25:30<SeP>2025-01-31 05:35:15<SeP>2025-02-01 16:45:00<SeP>2025-02-03 03:54:45<SeP>2025-02-04 15:04:30<SeP>2025-02-06 02:14:15<SeP>2025-02-07 13:24:00<SeP>2025-02-09 00:33:45<SeP>2025-02-10 11:43:30<SeP>2025-02-11 22:53:15<SeP>2025-02-13 10:03:00<SeP>2025-02-14 21:12:45<SeP>2025-02-16 08:22:30<SeP>2025-02-17 19:32:15<SeP>2025-02-19 06:42:00<SeP>2025-02-20 17:51:45<SeP>2025-02-22 05:01:30<SeP>2025-02-23 16:11:15<SeP>2025-02-25 03:21:00<SeP>2025-02-26 14:30:45<SeP>2025-02-28 01:40:30<SeP>2025-03-01 12:50:15";
  const itemLabel       = "Scans";
  const itemData        = "767<SeP>1497<SeP>1383<SeP>1450<SeP>1252<SeP>1715<SeP>957<SeP>964<SeP>1177<SeP>3408<SeP>2459<SeP>1791<SeP>3061<SeP>1255<SeP>738<SeP>951<SeP>1398<SeP>2923<SeP>1355<SeP>1544<SeP>1282<SeP>924<SeP>1043<SeP>1297<SeP>893<SeP>855<SeP>779<SeP>3499<SeP>956<SeP>1056<SeP>842<SeP>1516<SeP>1093<SeP>804<SeP>3091<SeP>2033<SeP>2576<SeP>1723<SeP>1580<SeP>1353<SeP>1460<SeP>1895<SeP>1893<SeP>2068<SeP>1552<SeP>1566<SeP>1585<SeP>1767<SeP>1659<SeP>1868<SeP>1857<SeP>1781<SeP>1527<SeP>3212<SeP>1493<SeP>1566<SeP>2125<SeP>1894<SeP>2212<SeP>1860<SeP>3309<SeP>1309<SeP>1617<SeP>1513<SeP>1320<SeP>1953<SeP>1613<SeP>1222<SeP>1360<SeP>1468<SeP>1325<SeP>2135<SeP>1151<SeP>1238<SeP>1275<SeP>6897<SeP>2520<SeP>1442<SeP>1303<SeP>1701<SeP>1953<SeP>1117<SeP>6535<SeP>1626<SeP>1665<SeP>995<SeP>1156<SeP>3260<SeP>1347<SeP>836<SeP>1038<SeP>1098<SeP>1062<SeP>2981<SeP>1243<SeP>1391<SeP>2864<SeP>6597<SeP>1242<SeP>999<SeP>923<SeP>921<SeP>1011<SeP>990<SeP>970<SeP>1009<SeP>4038<SeP>2081<SeP>1404<SeP>1555<SeP>587<SeP>1009<SeP>1577<SeP>1196<SeP>1005<SeP>990<SeP>2324<SeP>1300<SeP>1033<SeP>947<SeP>1096<SeP>804<SeP>857<SeP>876<SeP>804<SeP>875<SeP>1092<SeP>781<SeP>801<SeP>898<SeP>929<SeP>936<SeP>600<SeP>831<SeP>867<SeP>851<SeP>910<SeP>866<SeP>785<SeP>815<SeP>941<SeP>884<SeP>810<SeP>896<SeP>895<SeP>933<SeP>1118<SeP>976<SeP>553<SeP>834<SeP>851<SeP>852<SeP>1302<SeP>861<SeP>1126<SeP>1154<SeP>1196<SeP>934<SeP>875<SeP>1049<SeP>807<SeP>814<SeP>1072<SeP>910<SeP>900<SeP>947<SeP>1077<SeP>952<SeP>1126<SeP>890<SeP>1088<SeP>1093<SeP>935<SeP>900<SeP>2212<SeP>1229<SeP>1107<SeP>1079<SeP>1007<SeP>1129<SeP>971<SeP>846<SeP>687<SeP>910<SeP>1104<SeP>939<SeP>933<SeP>1090<SeP>1330<SeP>1025<SeP>1179<SeP>1276<SeP>1213<SeP>1346<SeP>1254<SeP>1296<SeP>1530<SeP>1931<SeP>1427<SeP>1216<SeP>746<SeP>1088<SeP>918<SeP>1106<SeP>511<SeP>819<SeP>1016<SeP>845<SeP>3054<SeP>4887<SeP>2181<SeP>1807<SeP>1144<SeP>872<SeP>1027<SeP>896<SeP>930<SeP>1031<SeP>1110<SeP>1023<SeP>1022<SeP>2228<SeP>1300<SeP>1075<SeP>1193<SeP>1293<SeP>1200<SeP>1083<SeP>935<SeP>1083<SeP>1098<SeP>1085<SeP>1055<SeP>1158<SeP>1129<SeP>957<SeP>922<SeP>1284<SeP>1116<SeP>1139<SeP>1245<SeP>1354<SeP>1256<SeP>1530<SeP>1239<SeP>1063<SeP>1167<SeP>1152<SeP>1971<SeP>1277<SeP>1863<SeP>1709<SeP>1375<SeP>1993<SeP>1686<SeP>1177<SeP>1181<SeP>1173<SeP>1183<SeP>1702<SeP>1176<SeP>1264<SeP>1472<SeP>1864<SeP>1364<SeP>1571<SeP>1250<SeP>1282<SeP>1250<SeP>1188<SeP>1190<SeP>1164<SeP>1211<SeP>1265<SeP>1256<SeP>1417<SeP>1801<SeP>1392<SeP>1213<SeP>1600<SeP>1527<SeP>1166<SeP>1114<SeP>912<SeP>891<SeP>878<SeP>1038<SeP>1007<SeP>1818<SeP>1055<SeP>1138<SeP>1162<SeP>784<SeP>1013<SeP>1001<SeP>1316<SeP>868<SeP>912<SeP>1135<SeP>1355<SeP>1621<SeP>1307<SeP>1073<SeP>1056<SeP>1103<SeP>1798<SeP>951<SeP>1239<SeP>1005<SeP>1490<SeP>1157<SeP>859<SeP>1208<SeP>1076<SeP>960<SeP>873<SeP>1025<SeP>1417<SeP>1487<SeP>1455<SeP>1423<SeP>1390<SeP>946<SeP>1130<SeP>1246<SeP>1149<SeP>894<SeP>1273<SeP>1001<SeP>1149<SeP>1307<SeP>1517<SeP>1212<SeP>1687<SeP>1308<SeP>1666<SeP>1375<SeP>1290<SeP>1477<SeP>1441<SeP>1387<SeP>1267<SeP>1724<SeP>1422<SeP>1548<SeP>1494<SeP>1330<SeP>1404<SeP>1283<SeP>1289<SeP>1384<SeP>1421<SeP>1614<SeP>1236<SeP>1311<SeP>1276<SeP>1369<SeP>1325<SeP>1177<SeP>1410<SeP>1926<SeP>1602<SeP>1239<SeP>713<SeP>1429<SeP>1826<SeP>1317<SeP>1256<SeP>1331<SeP>1061<SeP>1463<SeP>1409<SeP>1355<SeP>1368<SeP>1773<SeP>1303<SeP>1604<SeP>1755<SeP>1279<SeP>1502<SeP>1359<SeP>1804<SeP>1629<SeP>954<SeP>1104<SeP>2057<SeP>1885<SeP>1689<SeP>1769<SeP>1762<SeP>1441<SeP>1634<SeP>1609<SeP>1623<SeP>1501<SeP>1742<SeP>1780<SeP>1632<SeP>1440<SeP>1444";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:09:45<SeP>2023-07-28 22:19:30<SeP>2023-07-30 09:29:15<SeP>2023-07-31 20:39:00<SeP>2023-08-02 07:48:45<SeP>2023-08-03 18:58:30<SeP>2023-08-05 06:08:15<SeP>2023-08-06 17:18:00<SeP>2023-08-08 04:27:45<SeP>2023-08-09 15:37:30<SeP>2023-08-11 02:47:15<SeP>2023-08-12 13:57:00<SeP>2023-08-14 01:06:45<SeP>2023-08-15 12:16:30<SeP>2023-08-16 23:26:15<SeP>2023-08-18 10:36:00<SeP>2023-08-19 21:45:45<SeP>2023-08-21 08:55:30<SeP>2023-08-22 20:05:15<SeP>2023-08-24 07:15:00<SeP>2023-08-25 18:24:45<SeP>2023-08-27 05:34:30<SeP>2023-08-28 16:44:15<SeP>2023-08-30 03:54:00<SeP>2023-08-31 15:03:45<SeP>2023-09-02 02:13:30<SeP>2023-09-03 13:23:15<SeP>2023-09-05 00:33:00<SeP>2023-09-06 11:42:45<SeP>2023-09-07 22:52:30<SeP>2023-09-09 10:02:15<SeP>2023-09-10 21:12:00<SeP>2023-09-12 08:21:45<SeP>2023-09-13 19:31:30<SeP>2023-09-15 06:41:15<SeP>2023-09-16 17:51:00<SeP>2023-09-18 05:00:45<SeP>2023-09-19 16:10:30<SeP>2023-09-21 03:20:15<SeP>2023-09-22 14:30:00<SeP>2023-09-24 01:39:45<SeP>2023-09-25 12:49:30<SeP>2023-09-26 23:59:15<SeP>2023-09-28 11:09:00<SeP>2023-09-29 22:18:45<SeP>2023-10-01 09:28:30<SeP>2023-10-02 20:38:15<SeP>2023-10-04 07:48:00<SeP>2023-10-05 18:57:45<SeP>2023-10-07 06:07:30<SeP>2023-10-08 17:17:15<SeP>2023-10-10 04:27:00<SeP>2023-10-11 15:36:45<SeP>2023-10-13 02:46:30<SeP>2023-10-14 13:56:15<SeP>2023-10-16 01:06:00<SeP>2023-10-17 12:15:45<SeP>2023-10-18 23:25:30<SeP>2023-10-20 10:35:15<SeP>2023-10-21 21:45:00<SeP>2023-10-23 08:54:45<SeP>2023-10-24 20:04:30<SeP>2023-10-26 07:14:15<SeP>2023-10-27 18:24:00<SeP>2023-10-29 05:33:45<SeP>2023-10-30 16:43:30<SeP>2023-11-01 03:53:15<SeP>2023-11-02 15:03:00<SeP>2023-11-04 02:12:45<SeP>2023-11-05 12:22:30<SeP>2023-11-06 23:32:15<SeP>2023-11-08 10:42:00<SeP>2023-11-09 21:51:45<SeP>2023-11-11 09:01:30<SeP>2023-11-12 20:11:15<SeP>2023-11-14 07:21:00<SeP>2023-11-15 18:30:45<SeP>2023-11-17 05:40:30<SeP>2023-11-18 16:50:15<SeP>2023-11-20 04:00:00<SeP>2023-11-21 15:09:45<SeP>2023-11-23 02:19:30<SeP>2023-11-24 13:29:15<SeP>2023-11-26 00:39:00<SeP>2023-11-27 11:48:45<SeP>2023-11-28 22:58:30<SeP>2023-11-30 10:08:15<SeP>2023-12-01 21:18:00<SeP>2023-12-03 08:27:45<SeP>2023-12-04 19:37:30<SeP>2023-12-06 06:47:15<SeP>2023-12-07 17:57:00<SeP>2023-12-09 05:06:45<SeP>2023-12-10 16:16:30<SeP>2023-12-12 03:26:15<SeP>2023-12-13 14:36:00<SeP>2023-12-15 01:45:45<SeP>2023-12-16 12:55:30<SeP>2023-12-18 00:05:15<SeP>2023-12-19 11:15:00<SeP>2023-12-20 22:24:45<SeP>2023-12-22 09:34:30<SeP>2023-12-23 20:44:15<SeP>2023-12-25 07:54:00<SeP>2023-12-26 19:03:45<SeP>2023-12-28 06:13:30<SeP>2023-12-29 17:23:15<SeP>2023-12-31 04:33:00<SeP>2024-01-01 15:42:45<SeP>2024-01-03 02:52:30<SeP>2024-01-04 14:02:15<SeP>2024-01-06 01:12:00<SeP>2024-01-07 12:21:45<SeP>2024-01-08 23:31:30<SeP>2024-01-10 10:41:15<SeP>2024-01-11 21:51:00<SeP>2024-01-13 09:00:45<SeP>2024-01-14 20:10:30<SeP>2024-01-16 07:20:15<SeP>2024-01-17 18:30:00<SeP>2024-01-19 05:39:45<SeP>2024-01-20 16:49:30<SeP>2024-01-22 03:59:15<SeP>2024-01-23 15:09:00<SeP>2024-01-25 02:18:45<SeP>2024-01-26 13:28:30<SeP>2024-01-28 00:38:15<SeP>2024-01-29 11:48:00<SeP>2024-01-30 22:57:45<SeP>2024-02-01 10:07:30<SeP>2024-02-02 21:17:15<SeP>2024-02-04 08:27:00<SeP>2024-02-05 19:36:45<SeP>2024-02-07 06:46:30<SeP>2024-02-08 17:56:15<SeP>2024-02-10 05:06:00<SeP>2024-02-11 16:15:45<SeP>2024-02-13 03:25:30<SeP>2024-02-14 14:35:15<SeP>2024-02-16 01:45:00<SeP>2024-02-17 12:54:45<SeP>2024-02-19 00:04:30<SeP>2024-02-20 11:14:15<SeP>2024-02-21 22:24:00<SeP>2024-02-23 09:33:45<SeP>2024-02-24 20:43:30<SeP>2024-02-26 07:53:15<SeP>2024-02-27 19:03:00<SeP>2024-02-29 06:12:45<SeP>2024-03-01 17:22:30<SeP>2024-03-03 04:32:15<SeP>2024-03-04 15:42:00<SeP>2024-03-06 02:51:45<SeP>2024-03-07 14:01:30<SeP>2024-03-09 01:11:15<SeP>2024-03-10 13:21:00<SeP>2024-03-12 00:30:45<SeP>2024-03-13 11:40:30<SeP>2024-03-14 22:50:15<SeP>2024-03-16 10:00:00<SeP>2024-03-17 21:09:45<SeP>2024-03-19 08:19:30<SeP>2024-03-20 19:29:15<SeP>2024-03-22 06:39:00<SeP>2024-03-23 17:48:45<SeP>2024-03-25 04:58:30<SeP>2024-03-26 16:08:15<SeP>2024-03-28 03:18:00<SeP>2024-03-29 14:27:45<SeP>2024-03-31 01:37:30<SeP>2024-04-01 12:47:15<SeP>2024-04-02 23:57:00<SeP>2024-04-04 11:06:45<SeP>2024-04-05 22:16:30<SeP>2024-04-07 09:26:15<SeP>2024-04-08 20:36:00<SeP>2024-04-10 07:45:45<SeP>2024-04-11 18:55:30<SeP>2024-04-13 06:05:15<SeP>2024-04-14 17:15:00<SeP>2024-04-16 04:24:45<SeP>2024-04-17 15:34:30<SeP>2024-04-19 02:44:15<SeP>2024-04-20 13:54:00<SeP>2024-04-22 01:03:45<SeP>2024-04-23 12:13:30<SeP>2024-04-24 23:23:15<SeP>2024-04-26 10:33:00<SeP>2024-04-27 21:42:45<SeP>2024-04-29 08:52:30<SeP>2024-04-30 20:02:15<SeP>2024-05-02 07:12:00<SeP>2024-05-03 18:21:45<SeP>2024-05-05 05:31:30<SeP>2024-05-06 16:41:15<SeP>2024-05-08 03:51:00<SeP>2024-05-09 15:00:45<SeP>2024-05-11 02:10:30<SeP>2024-05-12 13:20:15<SeP>2024-05-14 00:30:00<SeP>2024-05-15 11:39:45<SeP>2024-05-16 22:49:30<SeP>2024-05-18 09:59:15<SeP>2024-05-19 21:09:00<SeP>2024-05-21 08:18:45<SeP>2024-05-22 19:28:30<SeP>2024-05-24 06:38:15<SeP>2024-05-25 17:48:00<SeP>2024-05-27 04:57:45<SeP>2024-05-28 16:07:30<SeP>2024-05-30 03:17:15<SeP>2024-05-31 14:27:00<SeP>2024-06-02 01:36:45<SeP>2024-06-03 12:46:30<SeP>2024-06-04 23:56:15<SeP>2024-06-06 11:06:00<SeP>2024-06-07 22:15:45<SeP>2024-06-09 09:25:30<SeP>2024-06-10 20:35:15<SeP>2024-06-12 07:45:00<SeP>2024-06-13 18:54:45<SeP>2024-06-15 06:04:30<SeP>2024-06-16 17:14:15<SeP>2024-06-18 04:24:00<SeP>2024-06-19 15:33:45<SeP>2024-06-21 02:43:30<SeP>2024-06-22 13:53:15<SeP>2024-06-24 01:03:00<SeP>2024-06-25 12:12:45<SeP>2024-06-26 23:22:30<SeP>2024-06-28 10:32:15<SeP>2024-06-29 21:42:00<SeP>2024-07-01 08:51:45<SeP>2024-07-02 20:01:30<SeP>2024-07-04 07:11:15<SeP>2024-07-05 18:21:00<SeP>2024-07-07 05:30:45<SeP>2024-07-08 16:40:30<SeP>2024-07-10 03:50:15<SeP>2024-07-11 15:00:00<SeP>2024-07-13 02:09:45<SeP>2024-07-14 13:19:30<SeP>2024-07-16 00:29:15<SeP>2024-07-17 11:39:00<SeP>2024-07-18 22:48:45<SeP>2024-07-20 09:58:30<SeP>2024-07-21 21:08:15<SeP>2024-07-23 08:18:00<SeP>2024-07-24 19:27:45<SeP>2024-07-26 06:37:30<SeP>2024-07-27 17:47:15<SeP>2024-07-29 04:57:00<SeP>2024-07-30 16:06:45<SeP>2024-08-01 03:16:30<SeP>2024-08-02 14:26:15<SeP>2024-08-04 01:36:00<SeP>2024-08-05 12:45:45<SeP>2024-08-06 23:55:30<SeP>2024-08-08 11:05:15<SeP>2024-08-09 22:15:00<SeP>2024-08-11 09:24:45<SeP>2024-08-12 20:34:30<SeP>2024-08-14 07:44:15<SeP>2024-08-15 18:54:00<SeP>2024-08-17 06:03:45<SeP>2024-08-18 17:13:30<SeP>2024-08-20 04:23:15<SeP>2024-08-21 15:33:00<SeP>2024-08-23 02:42:45<SeP>2024-08-24 13:52:30<SeP>2024-08-26 01:02:15<SeP>2024-08-27 12:12:00<SeP>2024-08-28 23:21:45<SeP>2024-08-30 10:31:30<SeP>2024-08-31 21:41:15<SeP>2024-09-02 08:51:00<SeP>2024-09-03 20:00:45<SeP>2024-09-05 07:10:30<SeP>2024-09-06 18:20:15<SeP>2024-09-08 05:30:00<SeP>2024-09-09 16:39:45<SeP>2024-09-11 03:49:30<SeP>2024-09-12 14:59:15<SeP>2024-09-14 02:09:00<SeP>2024-09-15 13:18:45<SeP>2024-09-17 00:28:30<SeP>2024-09-18 11:38:15<SeP>2024-09-19 22:48:00<SeP>2024-09-21 09:57:45<SeP>2024-09-22 21:07:30<SeP>2024-09-24 08:17:15<SeP>2024-09-25 19:27:00<SeP>2024-09-27 06:36:45<SeP>2024-09-28 17:46:30<SeP>2024-09-30 04:56:15<SeP>2024-10-01 16:06:00<SeP>2024-10-03 03:15:45<SeP>2024-10-04 14:25:30<SeP>2024-10-06 01:35:15<SeP>2024-10-07 12:45:00<SeP>2024-10-08 23:54:45<SeP>2024-10-10 11:04:30<SeP>2024-10-11 22:14:15<SeP>2024-10-13 09:24:00<SeP>2024-10-14 20:33:45<SeP>2024-10-16 07:43:30<SeP>2024-10-17 18:53:15<SeP>2024-10-19 06:03:00<SeP>2024-10-20 17:12:45<SeP>2024-10-22 04:22:30<SeP>2024-10-23 15:32:15<SeP>2024-10-25 02:42:00<SeP>2024-10-26 13:51:45<SeP>2024-10-28 01:01:30<SeP>2024-10-29 12:11:15<SeP>2024-10-30 23:21:00<SeP>2024-11-01 10:30:45<SeP>2024-11-02 21:40:30<SeP>2024-11-04 07:50:15<SeP>2024-11-05 19:00:00<SeP>2024-11-07 06:09:45<SeP>2024-11-08 17:19:30<SeP>2024-11-10 04:29:15<SeP>2024-11-11 15:39:00<SeP>2024-11-13 02:48:45<SeP>2024-11-14 13:58:30<SeP>2024-11-16 01:08:15<SeP>2024-11-17 12:18:00<SeP>2024-11-18 23:27:45<SeP>2024-11-20 10:37:30<SeP>2024-11-21 21:47:15<SeP>2024-11-23 08:57:00<SeP>2024-11-24 20:06:45<SeP>2024-11-26 07:16:30<SeP>2024-11-27 18:26:15<SeP>2024-11-29 05:36:00<SeP>2024-11-30 16:45:45<SeP>2024-12-02 03:55:30<SeP>2024-12-03 15:05:15<SeP>2024-12-05 02:15:00<SeP>2024-12-06 13:24:45<SeP>2024-12-08 00:34:30<SeP>2024-12-09 11:44:15<SeP>2024-12-10 22:54:00<SeP>2024-12-12 10:03:45<SeP>2024-12-13 21:13:30<SeP>2024-12-15 08:23:15<SeP>2024-12-16 19:33:00<SeP>2024-12-18 06:42:45<SeP>2024-12-19 17:52:30<SeP>2024-12-21 05:02:15<SeP>2024-12-22 16:12:00<SeP>2024-12-24 03:21:45<SeP>2024-12-25 14:31:30<SeP>2024-12-27 01:41:15<SeP>2024-12-28 12:51:00<SeP>2024-12-30 00:00:45<SeP>2024-12-31 11:10:30<SeP>2025-01-01 22:20:15<SeP>2025-01-03 09:30:00<SeP>2025-01-04 20:39:45<SeP>2025-01-06 07:49:30<SeP>2025-01-07 18:59:15<SeP>2025-01-09 06:09:00<SeP>2025-01-10 17:18:45<SeP>2025-01-12 04:28:30<SeP>2025-01-13 15:38:15<SeP>2025-01-15 02:48:00<SeP>2025-01-16 13:57:45<SeP>2025-01-18 01:07:30<SeP>2025-01-19 12:17:15<SeP>2025-01-20 23:27:00<SeP>2025-01-22 10:36:45<SeP>2025-01-23 21:46:30<SeP>2025-01-25 08:56:15<SeP>2025-01-26 20:06:00<SeP>2025-01-28 07:15:45<SeP>2025-01-29 18:25:30<SeP>2025-01-31 05:35:15<SeP>2025-02-01 16:45:00<SeP>2025-02-03 03:54:45<SeP>2025-02-04 15:04:30<SeP>2025-02-06 02:14:15<SeP>2025-02-07 13:24:00<SeP>2025-02-09 00:33:45<SeP>2025-02-10 11:43:30<SeP>2025-02-11 22:53:15<SeP>2025-02-13 10:03:00<SeP>2025-02-14 21:12:45<SeP>2025-02-16 08:22:30<SeP>2025-02-17 19:32:15<SeP>2025-02-19 06:42:00<SeP>2025-02-20 17:51:45<SeP>2025-02-22 05:01:30<SeP>2025-02-23 16:11:15<SeP>2025-02-25 03:21:00<SeP>2025-02-26 14:30:45<SeP>2025-02-28 01:40:30<SeP>2025-03-01 12:50:15";
  const itemLabel       = "Attacks";
  const itemData        = "155<SeP>614<SeP>1182<SeP>781<SeP>306<SeP>225<SeP>6975<SeP>544<SeP>9508<SeP>571<SeP>397<SeP>1124<SeP>1274<SeP>263<SeP>159<SeP>451<SeP>110<SeP>763<SeP>297<SeP>6248<SeP>7059<SeP>6967<SeP>8611<SeP>4654<SeP>186<SeP>296<SeP>410<SeP>379<SeP>5676<SeP>348<SeP>170<SeP>307<SeP>475<SeP>314<SeP>5671<SeP>10284<SeP>9260<SeP>10579<SeP>7598<SeP>5339<SeP>7987<SeP>6672<SeP>9456<SeP>9441<SeP>7329<SeP>8329<SeP>8308<SeP>9025<SeP>8283<SeP>5957<SeP>6211<SeP>11495<SeP>7598<SeP>7885<SeP>6905<SeP>10755<SeP>12409<SeP>21963<SeP>9073<SeP>9228<SeP>10059<SeP>6351<SeP>9294<SeP>7888<SeP>8899<SeP>9045<SeP>5785<SeP>6275<SeP>7271<SeP>6801<SeP>2367<SeP>6184<SeP>5985<SeP>6811<SeP>6333<SeP>8070<SeP>3427<SeP>5928<SeP>5809<SeP>6825<SeP>6250<SeP>5759<SeP>4399<SeP>7370<SeP>5057<SeP>5562<SeP>6009<SeP>7698<SeP>21902<SeP>21469<SeP>21944<SeP>9624<SeP>6298<SeP>6786<SeP>12484<SeP>7687<SeP>3480<SeP>6586<SeP>3705<SeP>4655<SeP>7180<SeP>6556<SeP>6976<SeP>6890<SeP>5750<SeP>4082<SeP>7008<SeP>8684<SeP>8112<SeP>8408<SeP>3874<SeP>6824<SeP>10360<SeP>8621<SeP>3391<SeP>3632<SeP>6983<SeP>9148<SeP>5750<SeP>7390<SeP>8146<SeP>3087<SeP>3036<SeP>1185<SeP>1635<SeP>1837<SeP>2486<SeP>845<SeP>1309<SeP>856<SeP>1440<SeP>1345<SeP>1085<SeP>1158<SeP>820<SeP>1172<SeP>1052<SeP>1204<SeP>1383<SeP>1108<SeP>1685<SeP>2125<SeP>1567<SeP>12493<SeP>6335<SeP>10180<SeP>7428<SeP>5450<SeP>10657<SeP>9097<SeP>9116<SeP>8608<SeP>13351<SeP>8434<SeP>9851<SeP>10943<SeP>13958<SeP>8979<SeP>9019<SeP>4110<SeP>8024<SeP>11460<SeP>19246<SeP>6461<SeP>8116<SeP>10843<SeP>17294<SeP>7208<SeP>5960<SeP>6256<SeP>7851<SeP>25858<SeP>7697<SeP>8497<SeP>11683<SeP>4601<SeP>6382<SeP>5722<SeP>16731<SeP>4731<SeP>12306<SeP>8259<SeP>7041<SeP>8292<SeP>7704<SeP>3259<SeP>5580<SeP>6239<SeP>7218<SeP>6388<SeP>6091<SeP>7340<SeP>18651<SeP>7143<SeP>8429<SeP>5661<SeP>7310<SeP>9334<SeP>8464<SeP>5840<SeP>2865<SeP>7186<SeP>3028<SeP>5540<SeP>4091<SeP>674<SeP>120<SeP>633<SeP>192<SeP>572<SeP>1089<SeP>343<SeP>533<SeP>817<SeP>1611<SeP>3202<SeP>10730<SeP>12779<SeP>1982<SeP>4384<SeP>2853<SeP>3664<SeP>6929<SeP>4165<SeP>2569<SeP>3776<SeP>2741<SeP>2913<SeP>3587<SeP>4250<SeP>2211<SeP>3317<SeP>1273<SeP>2790<SeP>1069<SeP>1915<SeP>1599<SeP>1383<SeP>1253<SeP>852<SeP>1615<SeP>26891<SeP>1768<SeP>3911<SeP>3910<SeP>2331<SeP>3624<SeP>2736<SeP>1674<SeP>3886<SeP>2114<SeP>4105<SeP>2042<SeP>2989<SeP>3852<SeP>4546<SeP>5008<SeP>5070<SeP>4801<SeP>2669<SeP>2183<SeP>5034<SeP>3387<SeP>9905<SeP>5386<SeP>3336<SeP>2778<SeP>2394<SeP>4681<SeP>3530<SeP>3563<SeP>3009<SeP>2831<SeP>5427<SeP>3935<SeP>5649<SeP>3718<SeP>5646<SeP>4519<SeP>5169<SeP>5857<SeP>13764<SeP>14241<SeP>12517<SeP>1835<SeP>2278<SeP>4794<SeP>3334<SeP>4061<SeP>3960<SeP>5021<SeP>3987<SeP>4485<SeP>4250<SeP>3564<SeP>3301<SeP>1268<SeP>1955<SeP>3259<SeP>2854<SeP>2190<SeP>3968<SeP>4228<SeP>4062<SeP>3211<SeP>4048<SeP>3347<SeP>3668<SeP>3283<SeP>8615<SeP>6354<SeP>5433<SeP>4612<SeP>5332<SeP>3903<SeP>3750<SeP>4694<SeP>4797<SeP>5498<SeP>4790<SeP>4812<SeP>1994<SeP>745<SeP>2012<SeP>1391<SeP>1086<SeP>1405<SeP>1760<SeP>1123<SeP>1997<SeP>4096<SeP>5351<SeP>5951<SeP>34033<SeP>5212<SeP>6819<SeP>21604<SeP>5141<SeP>5287<SeP>6254<SeP>4012<SeP>24640<SeP>5412<SeP>4917<SeP>4820<SeP>5734<SeP>17569<SeP>17817<SeP>4367<SeP>3397<SeP>4505<SeP>5021<SeP>6152<SeP>3264<SeP>3167<SeP>3796<SeP>4631<SeP>5328<SeP>4076<SeP>17735<SeP>6216<SeP>6478<SeP>4193<SeP>2468<SeP>3348<SeP>4514<SeP>4062<SeP>3862<SeP>2932<SeP>3857<SeP>2359<SeP>4096<SeP>4201<SeP>7935<SeP>10283<SeP>8344<SeP>8868<SeP>9049<SeP>7251<SeP>6208<SeP>5107<SeP>4227<SeP>22949<SeP>6242<SeP>3226<SeP>4604<SeP>3280<SeP>11391<SeP>5789<SeP>3725<SeP>4832<SeP>4314<SeP>2730<SeP>9450<SeP>9778<SeP>4536<SeP>3107<SeP>3337<SeP>2298<SeP>2517";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:09:45<SeP>2023-07-28 22:19:30<SeP>2023-07-30 09:29:15<SeP>2023-07-31 20:39:00<SeP>2023-08-02 07:48:45<SeP>2023-08-03 18:58:30<SeP>2023-08-05 06:08:15<SeP>2023-08-06 17:18:00<SeP>2023-08-08 04:27:45<SeP>2023-08-09 15:37:30<SeP>2023-08-11 02:47:15<SeP>2023-08-12 13:57:00<SeP>2023-08-14 01:06:45<SeP>2023-08-15 12:16:30<SeP>2023-08-16 23:26:15<SeP>2023-08-18 10:36:00<SeP>2023-08-19 21:45:45<SeP>2023-08-21 08:55:30<SeP>2023-08-22 20:05:15<SeP>2023-08-24 07:15:00<SeP>2023-08-25 18:24:45<SeP>2023-08-27 05:34:30<SeP>2023-08-28 16:44:15<SeP>2023-08-30 03:54:00<SeP>2023-08-31 15:03:45<SeP>2023-09-02 02:13:30<SeP>2023-09-03 13:23:15<SeP>2023-09-05 00:33:00<SeP>2023-09-06 11:42:45<SeP>2023-09-07 22:52:30<SeP>2023-09-09 10:02:15<SeP>2023-09-10 21:12:00<SeP>2023-09-12 08:21:45<SeP>2023-09-13 19:31:30<SeP>2023-09-15 06:41:15<SeP>2023-09-16 17:51:00<SeP>2023-09-18 05:00:45<SeP>2023-09-19 16:10:30<SeP>2023-09-21 03:20:15<SeP>2023-09-22 14:30:00<SeP>2023-09-24 01:39:45<SeP>2023-09-25 12:49:30<SeP>2023-09-26 23:59:15<SeP>2023-09-28 11:09:00<SeP>2023-09-29 22:18:45<SeP>2023-10-01 09:28:30<SeP>2023-10-02 20:38:15<SeP>2023-10-04 07:48:00<SeP>2023-10-05 18:57:45<SeP>2023-10-07 06:07:30<SeP>2023-10-08 17:17:15<SeP>2023-10-10 04:27:00<SeP>2023-10-11 15:36:45<SeP>2023-10-13 02:46:30<SeP>2023-10-14 13:56:15<SeP>2023-10-16 01:06:00<SeP>2023-10-17 12:15:45<SeP>2023-10-18 23:25:30<SeP>2023-10-20 10:35:15<SeP>2023-10-21 21:45:00<SeP>2023-10-23 08:54:45<SeP>2023-10-24 20:04:30<SeP>2023-10-26 07:14:15<SeP>2023-10-27 18:24:00<SeP>2023-10-29 05:33:45<SeP>2023-10-30 16:43:30<SeP>2023-11-01 03:53:15<SeP>2023-11-02 15:03:00<SeP>2023-11-04 02:12:45<SeP>2023-11-05 12:22:30<SeP>2023-11-06 23:32:15<SeP>2023-11-08 10:42:00<SeP>2023-11-09 21:51:45<SeP>2023-11-11 09:01:30<SeP>2023-11-12 20:11:15<SeP>2023-11-14 07:21:00<SeP>2023-11-15 18:30:45<SeP>2023-11-17 05:40:30<SeP>2023-11-18 16:50:15<SeP>2023-11-20 04:00:00<SeP>2023-11-21 15:09:45<SeP>2023-11-23 02:19:30<SeP>2023-11-24 13:29:15<SeP>2023-11-26 00:39:00<SeP>2023-11-27 11:48:45<SeP>2023-11-28 22:58:30<SeP>2023-11-30 10:08:15<SeP>2023-12-01 21:18:00<SeP>2023-12-03 08:27:45<SeP>2023-12-04 19:37:30<SeP>2023-12-06 06:47:15<SeP>2023-12-07 17:57:00<SeP>2023-12-09 05:06:45<SeP>2023-12-10 16:16:30<SeP>2023-12-12 03:26:15<SeP>2023-12-13 14:36:00<SeP>2023-12-15 01:45:45<SeP>2023-12-16 12:55:30<SeP>2023-12-18 00:05:15<SeP>2023-12-19 11:15:00<SeP>2023-12-20 22:24:45<SeP>2023-12-22 09:34:30<SeP>2023-12-23 20:44:15<SeP>2023-12-25 07:54:00<SeP>2023-12-26 19:03:45<SeP>2023-12-28 06:13:30<SeP>2023-12-29 17:23:15<SeP>2023-12-31 04:33:00<SeP>2024-01-01 15:42:45<SeP>2024-01-03 02:52:30<SeP>2024-01-04 14:02:15<SeP>2024-01-06 01:12:00<SeP>2024-01-07 12:21:45<SeP>2024-01-08 23:31:30<SeP>2024-01-10 10:41:15<SeP>2024-01-11 21:51:00<SeP>2024-01-13 09:00:45<SeP>2024-01-14 20:10:30<SeP>2024-01-16 07:20:15<SeP>2024-01-17 18:30:00<SeP>2024-01-19 05:39:45<SeP>2024-01-20 16:49:30<SeP>2024-01-22 03:59:15<SeP>2024-01-23 15:09:00<SeP>2024-01-25 02:18:45<SeP>2024-01-26 13:28:30<SeP>2024-01-28 00:38:15<SeP>2024-01-29 11:48:00<SeP>2024-01-30 22:57:45<SeP>2024-02-01 10:07:30<SeP>2024-02-02 21:17:15<SeP>2024-02-04 08:27:00<SeP>2024-02-05 19:36:45<SeP>2024-02-07 06:46:30<SeP>2024-02-08 17:56:15<SeP>2024-02-10 05:06:00<SeP>2024-02-11 16:15:45<SeP>2024-02-13 03:25:30<SeP>2024-02-14 14:35:15<SeP>2024-02-16 01:45:00<SeP>2024-02-17 12:54:45<SeP>2024-02-19 00:04:30<SeP>2024-02-20 11:14:15<SeP>2024-02-21 22:24:00<SeP>2024-02-23 09:33:45<SeP>2024-02-24 20:43:30<SeP>2024-02-26 07:53:15<SeP>2024-02-27 19:03:00<SeP>2024-02-29 06:12:45<SeP>2024-03-01 17:22:30<SeP>2024-03-03 04:32:15<SeP>2024-03-04 15:42:00<SeP>2024-03-06 02:51:45<SeP>2024-03-07 14:01:30<SeP>2024-03-09 01:11:15<SeP>2024-03-10 13:21:00<SeP>2024-03-12 00:30:45<SeP>2024-03-13 11:40:30<SeP>2024-03-14 22:50:15<SeP>2024-03-16 10:00:00<SeP>2024-03-17 21:09:45<SeP>2024-03-19 08:19:30<SeP>2024-03-20 19:29:15<SeP>2024-03-22 06:39:00<SeP>2024-03-23 17:48:45<SeP>2024-03-25 04:58:30<SeP>2024-03-26 16:08:15<SeP>2024-03-28 03:18:00<SeP>2024-03-29 14:27:45<SeP>2024-03-31 01:37:30<SeP>2024-04-01 12:47:15<SeP>2024-04-02 23:57:00<SeP>2024-04-04 11:06:45<SeP>2024-04-05 22:16:30<SeP>2024-04-07 09:26:15<SeP>2024-04-08 20:36:00<SeP>2024-04-10 07:45:45<SeP>2024-04-11 18:55:30<SeP>2024-04-13 06:05:15<SeP>2024-04-14 17:15:00<SeP>2024-04-16 04:24:45<SeP>2024-04-17 15:34:30<SeP>2024-04-19 02:44:15<SeP>2024-04-20 13:54:00<SeP>2024-04-22 01:03:45<SeP>2024-04-23 12:13:30<SeP>2024-04-24 23:23:15<SeP>2024-04-26 10:33:00<SeP>2024-04-27 21:42:45<SeP>2024-04-29 08:52:30<SeP>2024-04-30 20:02:15<SeP>2024-05-02 07:12:00<SeP>2024-05-03 18:21:45<SeP>2024-05-05 05:31:30<SeP>2024-05-06 16:41:15<SeP>2024-05-08 03:51:00<SeP>2024-05-09 15:00:45<SeP>2024-05-11 02:10:30<SeP>2024-05-12 13:20:15<SeP>2024-05-14 00:30:00<SeP>2024-05-15 11:39:45<SeP>2024-05-16 22:49:30<SeP>2024-05-18 09:59:15<SeP>2024-05-19 21:09:00<SeP>2024-05-21 08:18:45<SeP>2024-05-22 19:28:30<SeP>2024-05-24 06:38:15<SeP>2024-05-25 17:48:00<SeP>2024-05-27 04:57:45<SeP>2024-05-28 16:07:30<SeP>2024-05-30 03:17:15<SeP>2024-05-31 14:27:00<SeP>2024-06-02 01:36:45<SeP>2024-06-03 12:46:30<SeP>2024-06-04 23:56:15<SeP>2024-06-06 11:06:00<SeP>2024-06-07 22:15:45<SeP>2024-06-09 09:25:30<SeP>2024-06-10 20:35:15<SeP>2024-06-12 07:45:00<SeP>2024-06-13 18:54:45<SeP>2024-06-15 06:04:30<SeP>2024-06-16 17:14:15<SeP>2024-06-18 04:24:00<SeP>2024-06-19 15:33:45<SeP>2024-06-21 02:43:30<SeP>2024-06-22 13:53:15<SeP>2024-06-24 01:03:00<SeP>2024-06-25 12:12:45<SeP>2024-06-26 23:22:30<SeP>2024-06-28 10:32:15<SeP>2024-06-29 21:42:00<SeP>2024-07-01 08:51:45<SeP>2024-07-02 20:01:30<SeP>2024-07-04 07:11:15<SeP>2024-07-05 18:21:00<SeP>2024-07-07 05:30:45<SeP>2024-07-08 16:40:30<SeP>2024-07-10 03:50:15<SeP>2024-07-11 15:00:00<SeP>2024-07-13 02:09:45<SeP>2024-07-14 13:19:30<SeP>2024-07-16 00:29:15<SeP>2024-07-17 11:39:00<SeP>2024-07-18 22:48:45<SeP>2024-07-20 09:58:30<SeP>2024-07-21 21:08:15<SeP>2024-07-23 08:18:00<SeP>2024-07-24 19:27:45<SeP>2024-07-26 06:37:30<SeP>2024-07-27 17:47:15<SeP>2024-07-29 04:57:00<SeP>2024-07-30 16:06:45<SeP>2024-08-01 03:16:30<SeP>2024-08-02 14:26:15<SeP>2024-08-04 01:36:00<SeP>2024-08-05 12:45:45<SeP>2024-08-06 23:55:30<SeP>2024-08-08 11:05:15<SeP>2024-08-09 22:15:00<SeP>2024-08-11 09:24:45<SeP>2024-08-12 20:34:30<SeP>2024-08-14 07:44:15<SeP>2024-08-15 18:54:00<SeP>2024-08-17 06:03:45<SeP>2024-08-18 17:13:30<SeP>2024-08-20 04:23:15<SeP>2024-08-21 15:33:00<SeP>2024-08-23 02:42:45<SeP>2024-08-24 13:52:30<SeP>2024-08-26 01:02:15<SeP>2024-08-27 12:12:00<SeP>2024-08-28 23:21:45<SeP>2024-08-30 10:31:30<SeP>2024-08-31 21:41:15<SeP>2024-09-02 08:51:00<SeP>2024-09-03 20:00:45<SeP>2024-09-05 07:10:30<SeP>2024-09-06 18:20:15<SeP>2024-09-08 05:30:00<SeP>2024-09-09 16:39:45<SeP>2024-09-11 03:49:30<SeP>2024-09-12 14:59:15<SeP>2024-09-14 02:09:00<SeP>2024-09-15 13:18:45<SeP>2024-09-17 00:28:30<SeP>2024-09-18 11:38:15<SeP>2024-09-19 22:48:00<SeP>2024-09-21 09:57:45<SeP>2024-09-22 21:07:30<SeP>2024-09-24 08:17:15<SeP>2024-09-25 19:27:00<SeP>2024-09-27 06:36:45<SeP>2024-09-28 17:46:30<SeP>2024-09-30 04:56:15<SeP>2024-10-01 16:06:00<SeP>2024-10-03 03:15:45<SeP>2024-10-04 14:25:30<SeP>2024-10-06 01:35:15<SeP>2024-10-07 12:45:00<SeP>2024-10-08 23:54:45<SeP>2024-10-10 11:04:30<SeP>2024-10-11 22:14:15<SeP>2024-10-13 09:24:00<SeP>2024-10-14 20:33:45<SeP>2024-10-16 07:43:30<SeP>2024-10-17 18:53:15<SeP>2024-10-19 06:03:00<SeP>2024-10-20 17:12:45<SeP>2024-10-22 04:22:30<SeP>2024-10-23 15:32:15<SeP>2024-10-25 02:42:00<SeP>2024-10-26 13:51:45<SeP>2024-10-28 01:01:30<SeP>2024-10-29 12:11:15<SeP>2024-10-30 23:21:00<SeP>2024-11-01 10:30:45<SeP>2024-11-02 21:40:30<SeP>2024-11-04 07:50:15<SeP>2024-11-05 19:00:00<SeP>2024-11-07 06:09:45<SeP>2024-11-08 17:19:30<SeP>2024-11-10 04:29:15<SeP>2024-11-11 15:39:00<SeP>2024-11-13 02:48:45<SeP>2024-11-14 13:58:30<SeP>2024-11-16 01:08:15<SeP>2024-11-17 12:18:00<SeP>2024-11-18 23:27:45<SeP>2024-11-20 10:37:30<SeP>2024-11-21 21:47:15<SeP>2024-11-23 08:57:00<SeP>2024-11-24 20:06:45<SeP>2024-11-26 07:16:30<SeP>2024-11-27 18:26:15<SeP>2024-11-29 05:36:00<SeP>2024-11-30 16:45:45<SeP>2024-12-02 03:55:30<SeP>2024-12-03 15:05:15<SeP>2024-12-05 02:15:00<SeP>2024-12-06 13:24:45<SeP>2024-12-08 00:34:30<SeP>2024-12-09 11:44:15<SeP>2024-12-10 22:54:00<SeP>2024-12-12 10:03:45<SeP>2024-12-13 21:13:30<SeP>2024-12-15 08:23:15<SeP>2024-12-16 19:33:00<SeP>2024-12-18 06:42:45<SeP>2024-12-19 17:52:30<SeP>2024-12-21 05:02:15<SeP>2024-12-22 16:12:00<SeP>2024-12-24 03:21:45<SeP>2024-12-25 14:31:30<SeP>2024-12-27 01:41:15<SeP>2024-12-28 12:51:00<SeP>2024-12-30 00:00:45<SeP>2024-12-31 11:10:30<SeP>2025-01-01 22:20:15<SeP>2025-01-03 09:30:00<SeP>2025-01-04 20:39:45<SeP>2025-01-06 07:49:30<SeP>2025-01-07 18:59:15<SeP>2025-01-09 06:09:00<SeP>2025-01-10 17:18:45<SeP>2025-01-12 04:28:30<SeP>2025-01-13 15:38:15<SeP>2025-01-15 02:48:00<SeP>2025-01-16 13:57:45<SeP>2025-01-18 01:07:30<SeP>2025-01-19 12:17:15<SeP>2025-01-20 23:27:00<SeP>2025-01-22 10:36:45<SeP>2025-01-23 21:46:30<SeP>2025-01-25 08:56:15<SeP>2025-01-26 20:06:00<SeP>2025-01-28 07:15:45<SeP>2025-01-29 18:25:30<SeP>2025-01-31 05:35:15<SeP>2025-02-01 16:45:00<SeP>2025-02-03 03:54:45<SeP>2025-02-04 15:04:30<SeP>2025-02-06 02:14:15<SeP>2025-02-07 13:24:00<SeP>2025-02-09 00:33:45<SeP>2025-02-10 11:43:30<SeP>2025-02-11 22:53:15<SeP>2025-02-13 10:03:00<SeP>2025-02-14 21:12:45<SeP>2025-02-16 08:22:30<SeP>2025-02-17 19:32:15<SeP>2025-02-19 06:42:00<SeP>2025-02-20 17:51:45<SeP>2025-02-22 05:01:30<SeP>2025-02-23 16:11:15<SeP>2025-02-25 03:21:00<SeP>2025-02-26 14:30:45<SeP>2025-02-28 01:40:30<SeP>2025-03-01 12:50:15";
  const item1Label       = "Escaneos";
  const item1Data        = "767<SeP>1497<SeP>1383<SeP>1450<SeP>1252<SeP>1715<SeP>957<SeP>964<SeP>1177<SeP>3408<SeP>2459<SeP>1791<SeP>3061<SeP>1255<SeP>738<SeP>951<SeP>1398<SeP>2923<SeP>1355<SeP>1544<SeP>1282<SeP>924<SeP>1043<SeP>1297<SeP>893<SeP>855<SeP>779<SeP>3499<SeP>956<SeP>1056<SeP>842<SeP>1516<SeP>1093<SeP>804<SeP>3091<SeP>2033<SeP>2576<SeP>1723<SeP>1580<SeP>1353<SeP>1460<SeP>1895<SeP>1893<SeP>2068<SeP>1552<SeP>1566<SeP>1585<SeP>1767<SeP>1659<SeP>1868<SeP>1857<SeP>1781<SeP>1527<SeP>3212<SeP>1493<SeP>1566<SeP>2125<SeP>1894<SeP>2212<SeP>1860<SeP>3309<SeP>1309<SeP>1617<SeP>1513<SeP>1320<SeP>1953<SeP>1613<SeP>1222<SeP>1360<SeP>1468<SeP>1325<SeP>2135<SeP>1151<SeP>1238<SeP>1275<SeP>6897<SeP>2520<SeP>1442<SeP>1303<SeP>1701<SeP>1953<SeP>1117<SeP>6535<SeP>1626<SeP>1665<SeP>995<SeP>1156<SeP>3260<SeP>1347<SeP>836<SeP>1038<SeP>1098<SeP>1062<SeP>2981<SeP>1243<SeP>1391<SeP>2864<SeP>6597<SeP>1242<SeP>999<SeP>923<SeP>921<SeP>1011<SeP>990<SeP>970<SeP>1009<SeP>4038<SeP>2081<SeP>1404<SeP>1555<SeP>587<SeP>1009<SeP>1577<SeP>1196<SeP>1005<SeP>990<SeP>2324<SeP>1300<SeP>1033<SeP>947<SeP>1096<SeP>804<SeP>857<SeP>876<SeP>804<SeP>875<SeP>1092<SeP>781<SeP>801<SeP>898<SeP>929<SeP>936<SeP>600<SeP>831<SeP>867<SeP>851<SeP>910<SeP>866<SeP>785<SeP>815<SeP>941<SeP>884<SeP>810<SeP>896<SeP>895<SeP>933<SeP>1118<SeP>976<SeP>553<SeP>834<SeP>851<SeP>852<SeP>1302<SeP>861<SeP>1126<SeP>1154<SeP>1196<SeP>934<SeP>875<SeP>1049<SeP>807<SeP>814<SeP>1072<SeP>910<SeP>900<SeP>947<SeP>1077<SeP>952<SeP>1126<SeP>890<SeP>1088<SeP>1093<SeP>935<SeP>900<SeP>2212<SeP>1229<SeP>1107<SeP>1079<SeP>1007<SeP>1129<SeP>971<SeP>846<SeP>687<SeP>910<SeP>1104<SeP>939<SeP>933<SeP>1090<SeP>1330<SeP>1025<SeP>1179<SeP>1276<SeP>1213<SeP>1346<SeP>1254<SeP>1296<SeP>1530<SeP>1931<SeP>1427<SeP>1216<SeP>746<SeP>1088<SeP>918<SeP>1106<SeP>511<SeP>819<SeP>1016<SeP>845<SeP>3054<SeP>4887<SeP>2181<SeP>1807<SeP>1144<SeP>872<SeP>1027<SeP>896<SeP>930<SeP>1031<SeP>1110<SeP>1023<SeP>1022<SeP>2228<SeP>1300<SeP>1075<SeP>1193<SeP>1293<SeP>1200<SeP>1083<SeP>935<SeP>1083<SeP>1098<SeP>1085<SeP>1055<SeP>1158<SeP>1129<SeP>957<SeP>922<SeP>1284<SeP>1116<SeP>1139<SeP>1245<SeP>1354<SeP>1256<SeP>1530<SeP>1239<SeP>1063<SeP>1167<SeP>1152<SeP>1971<SeP>1277<SeP>1863<SeP>1709<SeP>1375<SeP>1993<SeP>1686<SeP>1177<SeP>1181<SeP>1173<SeP>1183<SeP>1702<SeP>1176<SeP>1264<SeP>1472<SeP>1864<SeP>1364<SeP>1571<SeP>1250<SeP>1282<SeP>1250<SeP>1188<SeP>1190<SeP>1164<SeP>1211<SeP>1265<SeP>1256<SeP>1417<SeP>1801<SeP>1392<SeP>1213<SeP>1600<SeP>1527<SeP>1166<SeP>1114<SeP>912<SeP>891<SeP>878<SeP>1038<SeP>1007<SeP>1818<SeP>1055<SeP>1138<SeP>1162<SeP>784<SeP>1013<SeP>1001<SeP>1316<SeP>868<SeP>912<SeP>1135<SeP>1355<SeP>1621<SeP>1307<SeP>1073<SeP>1056<SeP>1103<SeP>1798<SeP>951<SeP>1239<SeP>1005<SeP>1490<SeP>1157<SeP>859<SeP>1208<SeP>1076<SeP>960<SeP>873<SeP>1025<SeP>1417<SeP>1487<SeP>1455<SeP>1423<SeP>1390<SeP>946<SeP>1130<SeP>1246<SeP>1149<SeP>894<SeP>1273<SeP>1001<SeP>1149<SeP>1307<SeP>1517<SeP>1212<SeP>1687<SeP>1308<SeP>1666<SeP>1375<SeP>1290<SeP>1477<SeP>1441<SeP>1387<SeP>1267<SeP>1724<SeP>1422<SeP>1548<SeP>1494<SeP>1330<SeP>1404<SeP>1283<SeP>1289<SeP>1384<SeP>1421<SeP>1614<SeP>1236<SeP>1311<SeP>1276<SeP>1369<SeP>1325<SeP>1177<SeP>1410<SeP>1926<SeP>1602<SeP>1239<SeP>713<SeP>1429<SeP>1826<SeP>1317<SeP>1256<SeP>1331<SeP>1061<SeP>1463<SeP>1409<SeP>1355<SeP>1368<SeP>1773<SeP>1303<SeP>1604<SeP>1755<SeP>1279<SeP>1502<SeP>1359<SeP>1804<SeP>1629<SeP>954<SeP>1104<SeP>2057<SeP>1885<SeP>1689<SeP>1769<SeP>1762<SeP>1441<SeP>1634<SeP>1609<SeP>1623<SeP>1501<SeP>1742<SeP>1780<SeP>1632<SeP>1440<SeP>1444";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "155<SeP>614<SeP>1182<SeP>781<SeP>306<SeP>225<SeP>6975<SeP>544<SeP>9508<SeP>571<SeP>397<SeP>1124<SeP>1274<SeP>263<SeP>159<SeP>451<SeP>110<SeP>763<SeP>297<SeP>6248<SeP>7059<SeP>6967<SeP>8611<SeP>4654<SeP>186<SeP>296<SeP>410<SeP>379<SeP>5676<SeP>348<SeP>170<SeP>307<SeP>475<SeP>314<SeP>5671<SeP>10284<SeP>9260<SeP>10579<SeP>7598<SeP>5339<SeP>7987<SeP>6672<SeP>9456<SeP>9441<SeP>7329<SeP>8329<SeP>8308<SeP>9025<SeP>8283<SeP>5957<SeP>6211<SeP>11495<SeP>7598<SeP>7885<SeP>6905<SeP>10755<SeP>12409<SeP>21963<SeP>9073<SeP>9228<SeP>10059<SeP>6351<SeP>9294<SeP>7888<SeP>8899<SeP>9045<SeP>5785<SeP>6275<SeP>7271<SeP>6801<SeP>2367<SeP>6184<SeP>5985<SeP>6811<SeP>6333<SeP>8070<SeP>3427<SeP>5928<SeP>5809<SeP>6825<SeP>6250<SeP>5759<SeP>4399<SeP>7370<SeP>5057<SeP>5562<SeP>6009<SeP>7698<SeP>21902<SeP>21469<SeP>21944<SeP>9624<SeP>6298<SeP>6786<SeP>12484<SeP>7687<SeP>3480<SeP>6586<SeP>3705<SeP>4655<SeP>7180<SeP>6556<SeP>6976<SeP>6890<SeP>5750<SeP>4082<SeP>7008<SeP>8684<SeP>8112<SeP>8408<SeP>3874<SeP>6824<SeP>10360<SeP>8621<SeP>3391<SeP>3632<SeP>6983<SeP>9148<SeP>5750<SeP>7390<SeP>8146<SeP>3087<SeP>3036<SeP>1185<SeP>1635<SeP>1837<SeP>2486<SeP>845<SeP>1309<SeP>856<SeP>1440<SeP>1345<SeP>1085<SeP>1158<SeP>820<SeP>1172<SeP>1052<SeP>1204<SeP>1383<SeP>1108<SeP>1685<SeP>2125<SeP>1567<SeP>12493<SeP>6335<SeP>10180<SeP>7428<SeP>5450<SeP>10657<SeP>9097<SeP>9116<SeP>8608<SeP>13351<SeP>8434<SeP>9851<SeP>10943<SeP>13958<SeP>8979<SeP>9019<SeP>4110<SeP>8024<SeP>11460<SeP>19246<SeP>6461<SeP>8116<SeP>10843<SeP>17294<SeP>7208<SeP>5960<SeP>6256<SeP>7851<SeP>25858<SeP>7697<SeP>8497<SeP>11683<SeP>4601<SeP>6382<SeP>5722<SeP>16731<SeP>4731<SeP>12306<SeP>8259<SeP>7041<SeP>8292<SeP>7704<SeP>3259<SeP>5580<SeP>6239<SeP>7218<SeP>6388<SeP>6091<SeP>7340<SeP>18651<SeP>7143<SeP>8429<SeP>5661<SeP>7310<SeP>9334<SeP>8464<SeP>5840<SeP>2865<SeP>7186<SeP>3028<SeP>5540<SeP>4091<SeP>674<SeP>120<SeP>633<SeP>192<SeP>572<SeP>1089<SeP>343<SeP>533<SeP>817<SeP>1611<SeP>3202<SeP>10730<SeP>12779<SeP>1982<SeP>4384<SeP>2853<SeP>3664<SeP>6929<SeP>4165<SeP>2569<SeP>3776<SeP>2741<SeP>2913<SeP>3587<SeP>4250<SeP>2211<SeP>3317<SeP>1273<SeP>2790<SeP>1069<SeP>1915<SeP>1599<SeP>1383<SeP>1253<SeP>852<SeP>1615<SeP>26891<SeP>1768<SeP>3911<SeP>3910<SeP>2331<SeP>3624<SeP>2736<SeP>1674<SeP>3886<SeP>2114<SeP>4105<SeP>2042<SeP>2989<SeP>3852<SeP>4546<SeP>5008<SeP>5070<SeP>4801<SeP>2669<SeP>2183<SeP>5034<SeP>3387<SeP>9905<SeP>5386<SeP>3336<SeP>2778<SeP>2394<SeP>4681<SeP>3530<SeP>3563<SeP>3009<SeP>2831<SeP>5427<SeP>3935<SeP>5649<SeP>3718<SeP>5646<SeP>4519<SeP>5169<SeP>5857<SeP>13764<SeP>14241<SeP>12517<SeP>1835<SeP>2278<SeP>4794<SeP>3334<SeP>4061<SeP>3960<SeP>5021<SeP>3987<SeP>4485<SeP>4250<SeP>3564<SeP>3301<SeP>1268<SeP>1955<SeP>3259<SeP>2854<SeP>2190<SeP>3968<SeP>4228<SeP>4062<SeP>3211<SeP>4048<SeP>3347<SeP>3668<SeP>3283<SeP>8615<SeP>6354<SeP>5433<SeP>4612<SeP>5332<SeP>3903<SeP>3750<SeP>4694<SeP>4797<SeP>5498<SeP>4790<SeP>4812<SeP>1994<SeP>745<SeP>2012<SeP>1391<SeP>1086<SeP>1405<SeP>1760<SeP>1123<SeP>1997<SeP>4096<SeP>5351<SeP>5951<SeP>34033<SeP>5212<SeP>6819<SeP>21604<SeP>5141<SeP>5287<SeP>6254<SeP>4012<SeP>24640<SeP>5412<SeP>4917<SeP>4820<SeP>5734<SeP>17569<SeP>17817<SeP>4367<SeP>3397<SeP>4505<SeP>5021<SeP>6152<SeP>3264<SeP>3167<SeP>3796<SeP>4631<SeP>5328<SeP>4076<SeP>17735<SeP>6216<SeP>6478<SeP>4193<SeP>2468<SeP>3348<SeP>4514<SeP>4062<SeP>3862<SeP>2932<SeP>3857<SeP>2359<SeP>4096<SeP>4201<SeP>7935<SeP>10283<SeP>8344<SeP>8868<SeP>9049<SeP>7251<SeP>6208<SeP>5107<SeP>4227<SeP>22949<SeP>6242<SeP>3226<SeP>4604<SeP>3280<SeP>11391<SeP>5789<SeP>3725<SeP>4832<SeP>4314<SeP>2730<SeP>9450<SeP>9778<SeP>4536<SeP>3107<SeP>3337<SeP>2298<SeP>2517";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:09:45<SeP>2023-07-28 22:19:30<SeP>2023-07-30 09:29:15<SeP>2023-07-31 20:39:00<SeP>2023-08-02 07:48:45<SeP>2023-08-03 18:58:30<SeP>2023-08-05 06:08:15<SeP>2023-08-06 17:18:00<SeP>2023-08-08 04:27:45<SeP>2023-08-09 15:37:30<SeP>2023-08-11 02:47:15<SeP>2023-08-12 13:57:00<SeP>2023-08-14 01:06:45<SeP>2023-08-15 12:16:30<SeP>2023-08-16 23:26:15<SeP>2023-08-18 10:36:00<SeP>2023-08-19 21:45:45<SeP>2023-08-21 08:55:30<SeP>2023-08-22 20:05:15<SeP>2023-08-24 07:15:00<SeP>2023-08-25 18:24:45<SeP>2023-08-27 05:34:30<SeP>2023-08-28 16:44:15<SeP>2023-08-30 03:54:00<SeP>2023-08-31 15:03:45<SeP>2023-09-02 02:13:30<SeP>2023-09-03 13:23:15<SeP>2023-09-05 00:33:00<SeP>2023-09-06 11:42:45<SeP>2023-09-07 22:52:30<SeP>2023-09-09 10:02:15<SeP>2023-09-10 21:12:00<SeP>2023-09-12 08:21:45<SeP>2023-09-13 19:31:30<SeP>2023-09-15 06:41:15<SeP>2023-09-16 17:51:00<SeP>2023-09-18 05:00:45<SeP>2023-09-19 16:10:30<SeP>2023-09-21 03:20:15<SeP>2023-09-22 14:30:00<SeP>2023-09-24 01:39:45<SeP>2023-09-25 12:49:30<SeP>2023-09-26 23:59:15<SeP>2023-09-28 11:09:00<SeP>2023-09-29 22:18:45<SeP>2023-10-01 09:28:30<SeP>2023-10-02 20:38:15<SeP>2023-10-04 07:48:00<SeP>2023-10-05 18:57:45<SeP>2023-10-07 06:07:30<SeP>2023-10-08 17:17:15<SeP>2023-10-10 04:27:00<SeP>2023-10-11 15:36:45<SeP>2023-10-13 02:46:30<SeP>2023-10-14 13:56:15<SeP>2023-10-16 01:06:00<SeP>2023-10-17 12:15:45<SeP>2023-10-18 23:25:30<SeP>2023-10-20 10:35:15<SeP>2023-10-21 21:45:00<SeP>2023-10-23 08:54:45<SeP>2023-10-24 20:04:30<SeP>2023-10-26 07:14:15<SeP>2023-10-27 18:24:00<SeP>2023-10-29 05:33:45<SeP>2023-10-30 16:43:30<SeP>2023-11-01 03:53:15<SeP>2023-11-02 15:03:00<SeP>2023-11-04 02:12:45<SeP>2023-11-05 12:22:30<SeP>2023-11-06 23:32:15<SeP>2023-11-08 10:42:00<SeP>2023-11-09 21:51:45<SeP>2023-11-11 09:01:30<SeP>2023-11-12 20:11:15<SeP>2023-11-14 07:21:00<SeP>2023-11-15 18:30:45<SeP>2023-11-17 05:40:30<SeP>2023-11-18 16:50:15<SeP>2023-11-20 04:00:00<SeP>2023-11-21 15:09:45<SeP>2023-11-23 02:19:30<SeP>2023-11-24 13:29:15<SeP>2023-11-26 00:39:00<SeP>2023-11-27 11:48:45<SeP>2023-11-28 22:58:30<SeP>2023-11-30 10:08:15<SeP>2023-12-01 21:18:00<SeP>2023-12-03 08:27:45<SeP>2023-12-04 19:37:30<SeP>2023-12-06 06:47:15<SeP>2023-12-07 17:57:00<SeP>2023-12-09 05:06:45<SeP>2023-12-10 16:16:30<SeP>2023-12-12 03:26:15<SeP>2023-12-13 14:36:00<SeP>2023-12-15 01:45:45<SeP>2023-12-16 12:55:30<SeP>2023-12-18 00:05:15<SeP>2023-12-19 11:15:00<SeP>2023-12-20 22:24:45<SeP>2023-12-22 09:34:30<SeP>2023-12-23 20:44:15<SeP>2023-12-25 07:54:00<SeP>2023-12-26 19:03:45<SeP>2023-12-28 06:13:30<SeP>2023-12-29 17:23:15<SeP>2023-12-31 04:33:00<SeP>2024-01-01 15:42:45<SeP>2024-01-03 02:52:30<SeP>2024-01-04 14:02:15<SeP>2024-01-06 01:12:00<SeP>2024-01-07 12:21:45<SeP>2024-01-08 23:31:30<SeP>2024-01-10 10:41:15<SeP>2024-01-11 21:51:00<SeP>2024-01-13 09:00:45<SeP>2024-01-14 20:10:30<SeP>2024-01-16 07:20:15<SeP>2024-01-17 18:30:00<SeP>2024-01-19 05:39:45<SeP>2024-01-20 16:49:30<SeP>2024-01-22 03:59:15<SeP>2024-01-23 15:09:00<SeP>2024-01-25 02:18:45<SeP>2024-01-26 13:28:30<SeP>2024-01-28 00:38:15<SeP>2024-01-29 11:48:00<SeP>2024-01-30 22:57:45<SeP>2024-02-01 10:07:30<SeP>2024-02-02 21:17:15<SeP>2024-02-04 08:27:00<SeP>2024-02-05 19:36:45<SeP>2024-02-07 06:46:30<SeP>2024-02-08 17:56:15<SeP>2024-02-10 05:06:00<SeP>2024-02-11 16:15:45<SeP>2024-02-13 03:25:30<SeP>2024-02-14 14:35:15<SeP>2024-02-16 01:45:00<SeP>2024-02-17 12:54:45<SeP>2024-02-19 00:04:30<SeP>2024-02-20 11:14:15<SeP>2024-02-21 22:24:00<SeP>2024-02-23 09:33:45<SeP>2024-02-24 20:43:30<SeP>2024-02-26 07:53:15<SeP>2024-02-27 19:03:00<SeP>2024-02-29 06:12:45<SeP>2024-03-01 17:22:30<SeP>2024-03-03 04:32:15<SeP>2024-03-04 15:42:00<SeP>2024-03-06 02:51:45<SeP>2024-03-07 14:01:30<SeP>2024-03-09 01:11:15<SeP>2024-03-10 13:21:00<SeP>2024-03-12 00:30:45<SeP>2024-03-13 11:40:30<SeP>2024-03-14 22:50:15<SeP>2024-03-16 10:00:00<SeP>2024-03-17 21:09:45<SeP>2024-03-19 08:19:30<SeP>2024-03-20 19:29:15<SeP>2024-03-22 06:39:00<SeP>2024-03-23 17:48:45<SeP>2024-03-25 04:58:30<SeP>2024-03-26 16:08:15<SeP>2024-03-28 03:18:00<SeP>2024-03-29 14:27:45<SeP>2024-03-31 01:37:30<SeP>2024-04-01 12:47:15<SeP>2024-04-02 23:57:00<SeP>2024-04-04 11:06:45<SeP>2024-04-05 22:16:30<SeP>2024-04-07 09:26:15<SeP>2024-04-08 20:36:00<SeP>2024-04-10 07:45:45<SeP>2024-04-11 18:55:30<SeP>2024-04-13 06:05:15<SeP>2024-04-14 17:15:00<SeP>2024-04-16 04:24:45<SeP>2024-04-17 15:34:30<SeP>2024-04-19 02:44:15<SeP>2024-04-20 13:54:00<SeP>2024-04-22 01:03:45<SeP>2024-04-23 12:13:30<SeP>2024-04-24 23:23:15<SeP>2024-04-26 10:33:00<SeP>2024-04-27 21:42:45<SeP>2024-04-29 08:52:30<SeP>2024-04-30 20:02:15<SeP>2024-05-02 07:12:00<SeP>2024-05-03 18:21:45<SeP>2024-05-05 05:31:30<SeP>2024-05-06 16:41:15<SeP>2024-05-08 03:51:00<SeP>2024-05-09 15:00:45<SeP>2024-05-11 02:10:30<SeP>2024-05-12 13:20:15<SeP>2024-05-14 00:30:00<SeP>2024-05-15 11:39:45<SeP>2024-05-16 22:49:30<SeP>2024-05-18 09:59:15<SeP>2024-05-19 21:09:00<SeP>2024-05-21 08:18:45<SeP>2024-05-22 19:28:30<SeP>2024-05-24 06:38:15<SeP>2024-05-25 17:48:00<SeP>2024-05-27 04:57:45<SeP>2024-05-28 16:07:30<SeP>2024-05-30 03:17:15<SeP>2024-05-31 14:27:00<SeP>2024-06-02 01:36:45<SeP>2024-06-03 12:46:30<SeP>2024-06-04 23:56:15<SeP>2024-06-06 11:06:00<SeP>2024-06-07 22:15:45<SeP>2024-06-09 09:25:30<SeP>2024-06-10 20:35:15<SeP>2024-06-12 07:45:00<SeP>2024-06-13 18:54:45<SeP>2024-06-15 06:04:30<SeP>2024-06-16 17:14:15<SeP>2024-06-18 04:24:00<SeP>2024-06-19 15:33:45<SeP>2024-06-21 02:43:30<SeP>2024-06-22 13:53:15<SeP>2024-06-24 01:03:00<SeP>2024-06-25 12:12:45<SeP>2024-06-26 23:22:30<SeP>2024-06-28 10:32:15<SeP>2024-06-29 21:42:00<SeP>2024-07-01 08:51:45<SeP>2024-07-02 20:01:30<SeP>2024-07-04 07:11:15<SeP>2024-07-05 18:21:00<SeP>2024-07-07 05:30:45<SeP>2024-07-08 16:40:30<SeP>2024-07-10 03:50:15<SeP>2024-07-11 15:00:00<SeP>2024-07-13 02:09:45<SeP>2024-07-14 13:19:30<SeP>2024-07-16 00:29:15<SeP>2024-07-17 11:39:00<SeP>2024-07-18 22:48:45<SeP>2024-07-20 09:58:30<SeP>2024-07-21 21:08:15<SeP>2024-07-23 08:18:00<SeP>2024-07-24 19:27:45<SeP>2024-07-26 06:37:30<SeP>2024-07-27 17:47:15<SeP>2024-07-29 04:57:00<SeP>2024-07-30 16:06:45<SeP>2024-08-01 03:16:30<SeP>2024-08-02 14:26:15<SeP>2024-08-04 01:36:00<SeP>2024-08-05 12:45:45<SeP>2024-08-06 23:55:30<SeP>2024-08-08 11:05:15<SeP>2024-08-09 22:15:00<SeP>2024-08-11 09:24:45<SeP>2024-08-12 20:34:30<SeP>2024-08-14 07:44:15<SeP>2024-08-15 18:54:00<SeP>2024-08-17 06:03:45<SeP>2024-08-18 17:13:30<SeP>2024-08-20 04:23:15<SeP>2024-08-21 15:33:00<SeP>2024-08-23 02:42:45<SeP>2024-08-24 13:52:30<SeP>2024-08-26 01:02:15<SeP>2024-08-27 12:12:00<SeP>2024-08-28 23:21:45<SeP>2024-08-30 10:31:30<SeP>2024-08-31 21:41:15<SeP>2024-09-02 08:51:00<SeP>2024-09-03 20:00:45<SeP>2024-09-05 07:10:30<SeP>2024-09-06 18:20:15<SeP>2024-09-08 05:30:00<SeP>2024-09-09 16:39:45<SeP>2024-09-11 03:49:30<SeP>2024-09-12 14:59:15<SeP>2024-09-14 02:09:00<SeP>2024-09-15 13:18:45<SeP>2024-09-17 00:28:30<SeP>2024-09-18 11:38:15<SeP>2024-09-19 22:48:00<SeP>2024-09-21 09:57:45<SeP>2024-09-22 21:07:30<SeP>2024-09-24 08:17:15<SeP>2024-09-25 19:27:00<SeP>2024-09-27 06:36:45<SeP>2024-09-28 17:46:30<SeP>2024-09-30 04:56:15<SeP>2024-10-01 16:06:00<SeP>2024-10-03 03:15:45<SeP>2024-10-04 14:25:30<SeP>2024-10-06 01:35:15<SeP>2024-10-07 12:45:00<SeP>2024-10-08 23:54:45<SeP>2024-10-10 11:04:30<SeP>2024-10-11 22:14:15<SeP>2024-10-13 09:24:00<SeP>2024-10-14 20:33:45<SeP>2024-10-16 07:43:30<SeP>2024-10-17 18:53:15<SeP>2024-10-19 06:03:00<SeP>2024-10-20 17:12:45<SeP>2024-10-22 04:22:30<SeP>2024-10-23 15:32:15<SeP>2024-10-25 02:42:00<SeP>2024-10-26 13:51:45<SeP>2024-10-28 01:01:30<SeP>2024-10-29 12:11:15<SeP>2024-10-30 23:21:00<SeP>2024-11-01 10:30:45<SeP>2024-11-02 21:40:30<SeP>2024-11-04 07:50:15<SeP>2024-11-05 19:00:00<SeP>2024-11-07 06:09:45<SeP>2024-11-08 17:19:30<SeP>2024-11-10 04:29:15<SeP>2024-11-11 15:39:00<SeP>2024-11-13 02:48:45<SeP>2024-11-14 13:58:30<SeP>2024-11-16 01:08:15<SeP>2024-11-17 12:18:00<SeP>2024-11-18 23:27:45<SeP>2024-11-20 10:37:30<SeP>2024-11-21 21:47:15<SeP>2024-11-23 08:57:00<SeP>2024-11-24 20:06:45<SeP>2024-11-26 07:16:30<SeP>2024-11-27 18:26:15<SeP>2024-11-29 05:36:00<SeP>2024-11-30 16:45:45<SeP>2024-12-02 03:55:30<SeP>2024-12-03 15:05:15<SeP>2024-12-05 02:15:00<SeP>2024-12-06 13:24:45<SeP>2024-12-08 00:34:30<SeP>2024-12-09 11:44:15<SeP>2024-12-10 22:54:00<SeP>2024-12-12 10:03:45<SeP>2024-12-13 21:13:30<SeP>2024-12-15 08:23:15<SeP>2024-12-16 19:33:00<SeP>2024-12-18 06:42:45<SeP>2024-12-19 17:52:30<SeP>2024-12-21 05:02:15<SeP>2024-12-22 16:12:00<SeP>2024-12-24 03:21:45<SeP>2024-12-25 14:31:30<SeP>2024-12-27 01:41:15<SeP>2024-12-28 12:51:00<SeP>2024-12-30 00:00:45<SeP>2024-12-31 11:10:30<SeP>2025-01-01 22:20:15<SeP>2025-01-03 09:30:00<SeP>2025-01-04 20:39:45<SeP>2025-01-06 07:49:30<SeP>2025-01-07 18:59:15<SeP>2025-01-09 06:09:00<SeP>2025-01-10 17:18:45<SeP>2025-01-12 04:28:30<SeP>2025-01-13 15:38:15<SeP>2025-01-15 02:48:00<SeP>2025-01-16 13:57:45<SeP>2025-01-18 01:07:30<SeP>2025-01-19 12:17:15<SeP>2025-01-20 23:27:00<SeP>2025-01-22 10:36:45<SeP>2025-01-23 21:46:30<SeP>2025-01-25 08:56:15<SeP>2025-01-26 20:06:00<SeP>2025-01-28 07:15:45<SeP>2025-01-29 18:25:30<SeP>2025-01-31 05:35:15<SeP>2025-02-01 16:45:00<SeP>2025-02-03 03:54:45<SeP>2025-02-04 15:04:30<SeP>2025-02-06 02:14:15<SeP>2025-02-07 13:24:00<SeP>2025-02-09 00:33:45<SeP>2025-02-10 11:43:30<SeP>2025-02-11 22:53:15<SeP>2025-02-13 10:03:00<SeP>2025-02-14 21:12:45<SeP>2025-02-16 08:22:30<SeP>2025-02-17 19:32:15<SeP>2025-02-19 06:42:00<SeP>2025-02-20 17:51:45<SeP>2025-02-22 05:01:30<SeP>2025-02-23 16:11:15<SeP>2025-02-25 03:21:00<SeP>2025-02-26 14:30:45<SeP>2025-02-28 01:40:30<SeP>2025-03-01 12:50:15";
  const itemLabel       = "Escaneos";
  const itemData        = "767<SeP>1497<SeP>1383<SeP>1450<SeP>1252<SeP>1715<SeP>957<SeP>964<SeP>1177<SeP>3408<SeP>2459<SeP>1791<SeP>3061<SeP>1255<SeP>738<SeP>951<SeP>1398<SeP>2923<SeP>1355<SeP>1544<SeP>1282<SeP>924<SeP>1043<SeP>1297<SeP>893<SeP>855<SeP>779<SeP>3499<SeP>956<SeP>1056<SeP>842<SeP>1516<SeP>1093<SeP>804<SeP>3091<SeP>2033<SeP>2576<SeP>1723<SeP>1580<SeP>1353<SeP>1460<SeP>1895<SeP>1893<SeP>2068<SeP>1552<SeP>1566<SeP>1585<SeP>1767<SeP>1659<SeP>1868<SeP>1857<SeP>1781<SeP>1527<SeP>3212<SeP>1493<SeP>1566<SeP>2125<SeP>1894<SeP>2212<SeP>1860<SeP>3309<SeP>1309<SeP>1617<SeP>1513<SeP>1320<SeP>1953<SeP>1613<SeP>1222<SeP>1360<SeP>1468<SeP>1325<SeP>2135<SeP>1151<SeP>1238<SeP>1275<SeP>6897<SeP>2520<SeP>1442<SeP>1303<SeP>1701<SeP>1953<SeP>1117<SeP>6535<SeP>1626<SeP>1665<SeP>995<SeP>1156<SeP>3260<SeP>1347<SeP>836<SeP>1038<SeP>1098<SeP>1062<SeP>2981<SeP>1243<SeP>1391<SeP>2864<SeP>6597<SeP>1242<SeP>999<SeP>923<SeP>921<SeP>1011<SeP>990<SeP>970<SeP>1009<SeP>4038<SeP>2081<SeP>1404<SeP>1555<SeP>587<SeP>1009<SeP>1577<SeP>1196<SeP>1005<SeP>990<SeP>2324<SeP>1300<SeP>1033<SeP>947<SeP>1096<SeP>804<SeP>857<SeP>876<SeP>804<SeP>875<SeP>1092<SeP>781<SeP>801<SeP>898<SeP>929<SeP>936<SeP>600<SeP>831<SeP>867<SeP>851<SeP>910<SeP>866<SeP>785<SeP>815<SeP>941<SeP>884<SeP>810<SeP>896<SeP>895<SeP>933<SeP>1118<SeP>976<SeP>553<SeP>834<SeP>851<SeP>852<SeP>1302<SeP>861<SeP>1126<SeP>1154<SeP>1196<SeP>934<SeP>875<SeP>1049<SeP>807<SeP>814<SeP>1072<SeP>910<SeP>900<SeP>947<SeP>1077<SeP>952<SeP>1126<SeP>890<SeP>1088<SeP>1093<SeP>935<SeP>900<SeP>2212<SeP>1229<SeP>1107<SeP>1079<SeP>1007<SeP>1129<SeP>971<SeP>846<SeP>687<SeP>910<SeP>1104<SeP>939<SeP>933<SeP>1090<SeP>1330<SeP>1025<SeP>1179<SeP>1276<SeP>1213<SeP>1346<SeP>1254<SeP>1296<SeP>1530<SeP>1931<SeP>1427<SeP>1216<SeP>746<SeP>1088<SeP>918<SeP>1106<SeP>511<SeP>819<SeP>1016<SeP>845<SeP>3054<SeP>4887<SeP>2181<SeP>1807<SeP>1144<SeP>872<SeP>1027<SeP>896<SeP>930<SeP>1031<SeP>1110<SeP>1023<SeP>1022<SeP>2228<SeP>1300<SeP>1075<SeP>1193<SeP>1293<SeP>1200<SeP>1083<SeP>935<SeP>1083<SeP>1098<SeP>1085<SeP>1055<SeP>1158<SeP>1129<SeP>957<SeP>922<SeP>1284<SeP>1116<SeP>1139<SeP>1245<SeP>1354<SeP>1256<SeP>1530<SeP>1239<SeP>1063<SeP>1167<SeP>1152<SeP>1971<SeP>1277<SeP>1863<SeP>1709<SeP>1375<SeP>1993<SeP>1686<SeP>1177<SeP>1181<SeP>1173<SeP>1183<SeP>1702<SeP>1176<SeP>1264<SeP>1472<SeP>1864<SeP>1364<SeP>1571<SeP>1250<SeP>1282<SeP>1250<SeP>1188<SeP>1190<SeP>1164<SeP>1211<SeP>1265<SeP>1256<SeP>1417<SeP>1801<SeP>1392<SeP>1213<SeP>1600<SeP>1527<SeP>1166<SeP>1114<SeP>912<SeP>891<SeP>878<SeP>1038<SeP>1007<SeP>1818<SeP>1055<SeP>1138<SeP>1162<SeP>784<SeP>1013<SeP>1001<SeP>1316<SeP>868<SeP>912<SeP>1135<SeP>1355<SeP>1621<SeP>1307<SeP>1073<SeP>1056<SeP>1103<SeP>1798<SeP>951<SeP>1239<SeP>1005<SeP>1490<SeP>1157<SeP>859<SeP>1208<SeP>1076<SeP>960<SeP>873<SeP>1025<SeP>1417<SeP>1487<SeP>1455<SeP>1423<SeP>1390<SeP>946<SeP>1130<SeP>1246<SeP>1149<SeP>894<SeP>1273<SeP>1001<SeP>1149<SeP>1307<SeP>1517<SeP>1212<SeP>1687<SeP>1308<SeP>1666<SeP>1375<SeP>1290<SeP>1477<SeP>1441<SeP>1387<SeP>1267<SeP>1724<SeP>1422<SeP>1548<SeP>1494<SeP>1330<SeP>1404<SeP>1283<SeP>1289<SeP>1384<SeP>1421<SeP>1614<SeP>1236<SeP>1311<SeP>1276<SeP>1369<SeP>1325<SeP>1177<SeP>1410<SeP>1926<SeP>1602<SeP>1239<SeP>713<SeP>1429<SeP>1826<SeP>1317<SeP>1256<SeP>1331<SeP>1061<SeP>1463<SeP>1409<SeP>1355<SeP>1368<SeP>1773<SeP>1303<SeP>1604<SeP>1755<SeP>1279<SeP>1502<SeP>1359<SeP>1804<SeP>1629<SeP>954<SeP>1104<SeP>2057<SeP>1885<SeP>1689<SeP>1769<SeP>1762<SeP>1441<SeP>1634<SeP>1609<SeP>1623<SeP>1501<SeP>1742<SeP>1780<SeP>1632<SeP>1440<SeP>1444";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:09:45<SeP>2023-07-28 22:19:30<SeP>2023-07-30 09:29:15<SeP>2023-07-31 20:39:00<SeP>2023-08-02 07:48:45<SeP>2023-08-03 18:58:30<SeP>2023-08-05 06:08:15<SeP>2023-08-06 17:18:00<SeP>2023-08-08 04:27:45<SeP>2023-08-09 15:37:30<SeP>2023-08-11 02:47:15<SeP>2023-08-12 13:57:00<SeP>2023-08-14 01:06:45<SeP>2023-08-15 12:16:30<SeP>2023-08-16 23:26:15<SeP>2023-08-18 10:36:00<SeP>2023-08-19 21:45:45<SeP>2023-08-21 08:55:30<SeP>2023-08-22 20:05:15<SeP>2023-08-24 07:15:00<SeP>2023-08-25 18:24:45<SeP>2023-08-27 05:34:30<SeP>2023-08-28 16:44:15<SeP>2023-08-30 03:54:00<SeP>2023-08-31 15:03:45<SeP>2023-09-02 02:13:30<SeP>2023-09-03 13:23:15<SeP>2023-09-05 00:33:00<SeP>2023-09-06 11:42:45<SeP>2023-09-07 22:52:30<SeP>2023-09-09 10:02:15<SeP>2023-09-10 21:12:00<SeP>2023-09-12 08:21:45<SeP>2023-09-13 19:31:30<SeP>2023-09-15 06:41:15<SeP>2023-09-16 17:51:00<SeP>2023-09-18 05:00:45<SeP>2023-09-19 16:10:30<SeP>2023-09-21 03:20:15<SeP>2023-09-22 14:30:00<SeP>2023-09-24 01:39:45<SeP>2023-09-25 12:49:30<SeP>2023-09-26 23:59:15<SeP>2023-09-28 11:09:00<SeP>2023-09-29 22:18:45<SeP>2023-10-01 09:28:30<SeP>2023-10-02 20:38:15<SeP>2023-10-04 07:48:00<SeP>2023-10-05 18:57:45<SeP>2023-10-07 06:07:30<SeP>2023-10-08 17:17:15<SeP>2023-10-10 04:27:00<SeP>2023-10-11 15:36:45<SeP>2023-10-13 02:46:30<SeP>2023-10-14 13:56:15<SeP>2023-10-16 01:06:00<SeP>2023-10-17 12:15:45<SeP>2023-10-18 23:25:30<SeP>2023-10-20 10:35:15<SeP>2023-10-21 21:45:00<SeP>2023-10-23 08:54:45<SeP>2023-10-24 20:04:30<SeP>2023-10-26 07:14:15<SeP>2023-10-27 18:24:00<SeP>2023-10-29 05:33:45<SeP>2023-10-30 16:43:30<SeP>2023-11-01 03:53:15<SeP>2023-11-02 15:03:00<SeP>2023-11-04 02:12:45<SeP>2023-11-05 12:22:30<SeP>2023-11-06 23:32:15<SeP>2023-11-08 10:42:00<SeP>2023-11-09 21:51:45<SeP>2023-11-11 09:01:30<SeP>2023-11-12 20:11:15<SeP>2023-11-14 07:21:00<SeP>2023-11-15 18:30:45<SeP>2023-11-17 05:40:30<SeP>2023-11-18 16:50:15<SeP>2023-11-20 04:00:00<SeP>2023-11-21 15:09:45<SeP>2023-11-23 02:19:30<SeP>2023-11-24 13:29:15<SeP>2023-11-26 00:39:00<SeP>2023-11-27 11:48:45<SeP>2023-11-28 22:58:30<SeP>2023-11-30 10:08:15<SeP>2023-12-01 21:18:00<SeP>2023-12-03 08:27:45<SeP>2023-12-04 19:37:30<SeP>2023-12-06 06:47:15<SeP>2023-12-07 17:57:00<SeP>2023-12-09 05:06:45<SeP>2023-12-10 16:16:30<SeP>2023-12-12 03:26:15<SeP>2023-12-13 14:36:00<SeP>2023-12-15 01:45:45<SeP>2023-12-16 12:55:30<SeP>2023-12-18 00:05:15<SeP>2023-12-19 11:15:00<SeP>2023-12-20 22:24:45<SeP>2023-12-22 09:34:30<SeP>2023-12-23 20:44:15<SeP>2023-12-25 07:54:00<SeP>2023-12-26 19:03:45<SeP>2023-12-28 06:13:30<SeP>2023-12-29 17:23:15<SeP>2023-12-31 04:33:00<SeP>2024-01-01 15:42:45<SeP>2024-01-03 02:52:30<SeP>2024-01-04 14:02:15<SeP>2024-01-06 01:12:00<SeP>2024-01-07 12:21:45<SeP>2024-01-08 23:31:30<SeP>2024-01-10 10:41:15<SeP>2024-01-11 21:51:00<SeP>2024-01-13 09:00:45<SeP>2024-01-14 20:10:30<SeP>2024-01-16 07:20:15<SeP>2024-01-17 18:30:00<SeP>2024-01-19 05:39:45<SeP>2024-01-20 16:49:30<SeP>2024-01-22 03:59:15<SeP>2024-01-23 15:09:00<SeP>2024-01-25 02:18:45<SeP>2024-01-26 13:28:30<SeP>2024-01-28 00:38:15<SeP>2024-01-29 11:48:00<SeP>2024-01-30 22:57:45<SeP>2024-02-01 10:07:30<SeP>2024-02-02 21:17:15<SeP>2024-02-04 08:27:00<SeP>2024-02-05 19:36:45<SeP>2024-02-07 06:46:30<SeP>2024-02-08 17:56:15<SeP>2024-02-10 05:06:00<SeP>2024-02-11 16:15:45<SeP>2024-02-13 03:25:30<SeP>2024-02-14 14:35:15<SeP>2024-02-16 01:45:00<SeP>2024-02-17 12:54:45<SeP>2024-02-19 00:04:30<SeP>2024-02-20 11:14:15<SeP>2024-02-21 22:24:00<SeP>2024-02-23 09:33:45<SeP>2024-02-24 20:43:30<SeP>2024-02-26 07:53:15<SeP>2024-02-27 19:03:00<SeP>2024-02-29 06:12:45<SeP>2024-03-01 17:22:30<SeP>2024-03-03 04:32:15<SeP>2024-03-04 15:42:00<SeP>2024-03-06 02:51:45<SeP>2024-03-07 14:01:30<SeP>2024-03-09 01:11:15<SeP>2024-03-10 13:21:00<SeP>2024-03-12 00:30:45<SeP>2024-03-13 11:40:30<SeP>2024-03-14 22:50:15<SeP>2024-03-16 10:00:00<SeP>2024-03-17 21:09:45<SeP>2024-03-19 08:19:30<SeP>2024-03-20 19:29:15<SeP>2024-03-22 06:39:00<SeP>2024-03-23 17:48:45<SeP>2024-03-25 04:58:30<SeP>2024-03-26 16:08:15<SeP>2024-03-28 03:18:00<SeP>2024-03-29 14:27:45<SeP>2024-03-31 01:37:30<SeP>2024-04-01 12:47:15<SeP>2024-04-02 23:57:00<SeP>2024-04-04 11:06:45<SeP>2024-04-05 22:16:30<SeP>2024-04-07 09:26:15<SeP>2024-04-08 20:36:00<SeP>2024-04-10 07:45:45<SeP>2024-04-11 18:55:30<SeP>2024-04-13 06:05:15<SeP>2024-04-14 17:15:00<SeP>2024-04-16 04:24:45<SeP>2024-04-17 15:34:30<SeP>2024-04-19 02:44:15<SeP>2024-04-20 13:54:00<SeP>2024-04-22 01:03:45<SeP>2024-04-23 12:13:30<SeP>2024-04-24 23:23:15<SeP>2024-04-26 10:33:00<SeP>2024-04-27 21:42:45<SeP>2024-04-29 08:52:30<SeP>2024-04-30 20:02:15<SeP>2024-05-02 07:12:00<SeP>2024-05-03 18:21:45<SeP>2024-05-05 05:31:30<SeP>2024-05-06 16:41:15<SeP>2024-05-08 03:51:00<SeP>2024-05-09 15:00:45<SeP>2024-05-11 02:10:30<SeP>2024-05-12 13:20:15<SeP>2024-05-14 00:30:00<SeP>2024-05-15 11:39:45<SeP>2024-05-16 22:49:30<SeP>2024-05-18 09:59:15<SeP>2024-05-19 21:09:00<SeP>2024-05-21 08:18:45<SeP>2024-05-22 19:28:30<SeP>2024-05-24 06:38:15<SeP>2024-05-25 17:48:00<SeP>2024-05-27 04:57:45<SeP>2024-05-28 16:07:30<SeP>2024-05-30 03:17:15<SeP>2024-05-31 14:27:00<SeP>2024-06-02 01:36:45<SeP>2024-06-03 12:46:30<SeP>2024-06-04 23:56:15<SeP>2024-06-06 11:06:00<SeP>2024-06-07 22:15:45<SeP>2024-06-09 09:25:30<SeP>2024-06-10 20:35:15<SeP>2024-06-12 07:45:00<SeP>2024-06-13 18:54:45<SeP>2024-06-15 06:04:30<SeP>2024-06-16 17:14:15<SeP>2024-06-18 04:24:00<SeP>2024-06-19 15:33:45<SeP>2024-06-21 02:43:30<SeP>2024-06-22 13:53:15<SeP>2024-06-24 01:03:00<SeP>2024-06-25 12:12:45<SeP>2024-06-26 23:22:30<SeP>2024-06-28 10:32:15<SeP>2024-06-29 21:42:00<SeP>2024-07-01 08:51:45<SeP>2024-07-02 20:01:30<SeP>2024-07-04 07:11:15<SeP>2024-07-05 18:21:00<SeP>2024-07-07 05:30:45<SeP>2024-07-08 16:40:30<SeP>2024-07-10 03:50:15<SeP>2024-07-11 15:00:00<SeP>2024-07-13 02:09:45<SeP>2024-07-14 13:19:30<SeP>2024-07-16 00:29:15<SeP>2024-07-17 11:39:00<SeP>2024-07-18 22:48:45<SeP>2024-07-20 09:58:30<SeP>2024-07-21 21:08:15<SeP>2024-07-23 08:18:00<SeP>2024-07-24 19:27:45<SeP>2024-07-26 06:37:30<SeP>2024-07-27 17:47:15<SeP>2024-07-29 04:57:00<SeP>2024-07-30 16:06:45<SeP>2024-08-01 03:16:30<SeP>2024-08-02 14:26:15<SeP>2024-08-04 01:36:00<SeP>2024-08-05 12:45:45<SeP>2024-08-06 23:55:30<SeP>2024-08-08 11:05:15<SeP>2024-08-09 22:15:00<SeP>2024-08-11 09:24:45<SeP>2024-08-12 20:34:30<SeP>2024-08-14 07:44:15<SeP>2024-08-15 18:54:00<SeP>2024-08-17 06:03:45<SeP>2024-08-18 17:13:30<SeP>2024-08-20 04:23:15<SeP>2024-08-21 15:33:00<SeP>2024-08-23 02:42:45<SeP>2024-08-24 13:52:30<SeP>2024-08-26 01:02:15<SeP>2024-08-27 12:12:00<SeP>2024-08-28 23:21:45<SeP>2024-08-30 10:31:30<SeP>2024-08-31 21:41:15<SeP>2024-09-02 08:51:00<SeP>2024-09-03 20:00:45<SeP>2024-09-05 07:10:30<SeP>2024-09-06 18:20:15<SeP>2024-09-08 05:30:00<SeP>2024-09-09 16:39:45<SeP>2024-09-11 03:49:30<SeP>2024-09-12 14:59:15<SeP>2024-09-14 02:09:00<SeP>2024-09-15 13:18:45<SeP>2024-09-17 00:28:30<SeP>2024-09-18 11:38:15<SeP>2024-09-19 22:48:00<SeP>2024-09-21 09:57:45<SeP>2024-09-22 21:07:30<SeP>2024-09-24 08:17:15<SeP>2024-09-25 19:27:00<SeP>2024-09-27 06:36:45<SeP>2024-09-28 17:46:30<SeP>2024-09-30 04:56:15<SeP>2024-10-01 16:06:00<SeP>2024-10-03 03:15:45<SeP>2024-10-04 14:25:30<SeP>2024-10-06 01:35:15<SeP>2024-10-07 12:45:00<SeP>2024-10-08 23:54:45<SeP>2024-10-10 11:04:30<SeP>2024-10-11 22:14:15<SeP>2024-10-13 09:24:00<SeP>2024-10-14 20:33:45<SeP>2024-10-16 07:43:30<SeP>2024-10-17 18:53:15<SeP>2024-10-19 06:03:00<SeP>2024-10-20 17:12:45<SeP>2024-10-22 04:22:30<SeP>2024-10-23 15:32:15<SeP>2024-10-25 02:42:00<SeP>2024-10-26 13:51:45<SeP>2024-10-28 01:01:30<SeP>2024-10-29 12:11:15<SeP>2024-10-30 23:21:00<SeP>2024-11-01 10:30:45<SeP>2024-11-02 21:40:30<SeP>2024-11-04 07:50:15<SeP>2024-11-05 19:00:00<SeP>2024-11-07 06:09:45<SeP>2024-11-08 17:19:30<SeP>2024-11-10 04:29:15<SeP>2024-11-11 15:39:00<SeP>2024-11-13 02:48:45<SeP>2024-11-14 13:58:30<SeP>2024-11-16 01:08:15<SeP>2024-11-17 12:18:00<SeP>2024-11-18 23:27:45<SeP>2024-11-20 10:37:30<SeP>2024-11-21 21:47:15<SeP>2024-11-23 08:57:00<SeP>2024-11-24 20:06:45<SeP>2024-11-26 07:16:30<SeP>2024-11-27 18:26:15<SeP>2024-11-29 05:36:00<SeP>2024-11-30 16:45:45<SeP>2024-12-02 03:55:30<SeP>2024-12-03 15:05:15<SeP>2024-12-05 02:15:00<SeP>2024-12-06 13:24:45<SeP>2024-12-08 00:34:30<SeP>2024-12-09 11:44:15<SeP>2024-12-10 22:54:00<SeP>2024-12-12 10:03:45<SeP>2024-12-13 21:13:30<SeP>2024-12-15 08:23:15<SeP>2024-12-16 19:33:00<SeP>2024-12-18 06:42:45<SeP>2024-12-19 17:52:30<SeP>2024-12-21 05:02:15<SeP>2024-12-22 16:12:00<SeP>2024-12-24 03:21:45<SeP>2024-12-25 14:31:30<SeP>2024-12-27 01:41:15<SeP>2024-12-28 12:51:00<SeP>2024-12-30 00:00:45<SeP>2024-12-31 11:10:30<SeP>2025-01-01 22:20:15<SeP>2025-01-03 09:30:00<SeP>2025-01-04 20:39:45<SeP>2025-01-06 07:49:30<SeP>2025-01-07 18:59:15<SeP>2025-01-09 06:09:00<SeP>2025-01-10 17:18:45<SeP>2025-01-12 04:28:30<SeP>2025-01-13 15:38:15<SeP>2025-01-15 02:48:00<SeP>2025-01-16 13:57:45<SeP>2025-01-18 01:07:30<SeP>2025-01-19 12:17:15<SeP>2025-01-20 23:27:00<SeP>2025-01-22 10:36:45<SeP>2025-01-23 21:46:30<SeP>2025-01-25 08:56:15<SeP>2025-01-26 20:06:00<SeP>2025-01-28 07:15:45<SeP>2025-01-29 18:25:30<SeP>2025-01-31 05:35:15<SeP>2025-02-01 16:45:00<SeP>2025-02-03 03:54:45<SeP>2025-02-04 15:04:30<SeP>2025-02-06 02:14:15<SeP>2025-02-07 13:24:00<SeP>2025-02-09 00:33:45<SeP>2025-02-10 11:43:30<SeP>2025-02-11 22:53:15<SeP>2025-02-13 10:03:00<SeP>2025-02-14 21:12:45<SeP>2025-02-16 08:22:30<SeP>2025-02-17 19:32:15<SeP>2025-02-19 06:42:00<SeP>2025-02-20 17:51:45<SeP>2025-02-22 05:01:30<SeP>2025-02-23 16:11:15<SeP>2025-02-25 03:21:00<SeP>2025-02-26 14:30:45<SeP>2025-02-28 01:40:30<SeP>2025-03-01 12:50:15";
  const itemLabel       = "Ataques";
  const itemData        = "155<SeP>614<SeP>1182<SeP>781<SeP>306<SeP>225<SeP>6975<SeP>544<SeP>9508<SeP>571<SeP>397<SeP>1124<SeP>1274<SeP>263<SeP>159<SeP>451<SeP>110<SeP>763<SeP>297<SeP>6248<SeP>7059<SeP>6967<SeP>8611<SeP>4654<SeP>186<SeP>296<SeP>410<SeP>379<SeP>5676<SeP>348<SeP>170<SeP>307<SeP>475<SeP>314<SeP>5671<SeP>10284<SeP>9260<SeP>10579<SeP>7598<SeP>5339<SeP>7987<SeP>6672<SeP>9456<SeP>9441<SeP>7329<SeP>8329<SeP>8308<SeP>9025<SeP>8283<SeP>5957<SeP>6211<SeP>11495<SeP>7598<SeP>7885<SeP>6905<SeP>10755<SeP>12409<SeP>21963<SeP>9073<SeP>9228<SeP>10059<SeP>6351<SeP>9294<SeP>7888<SeP>8899<SeP>9045<SeP>5785<SeP>6275<SeP>7271<SeP>6801<SeP>2367<SeP>6184<SeP>5985<SeP>6811<SeP>6333<SeP>8070<SeP>3427<SeP>5928<SeP>5809<SeP>6825<SeP>6250<SeP>5759<SeP>4399<SeP>7370<SeP>5057<SeP>5562<SeP>6009<SeP>7698<SeP>21902<SeP>21469<SeP>21944<SeP>9624<SeP>6298<SeP>6786<SeP>12484<SeP>7687<SeP>3480<SeP>6586<SeP>3705<SeP>4655<SeP>7180<SeP>6556<SeP>6976<SeP>6890<SeP>5750<SeP>4082<SeP>7008<SeP>8684<SeP>8112<SeP>8408<SeP>3874<SeP>6824<SeP>10360<SeP>8621<SeP>3391<SeP>3632<SeP>6983<SeP>9148<SeP>5750<SeP>7390<SeP>8146<SeP>3087<SeP>3036<SeP>1185<SeP>1635<SeP>1837<SeP>2486<SeP>845<SeP>1309<SeP>856<SeP>1440<SeP>1345<SeP>1085<SeP>1158<SeP>820<SeP>1172<SeP>1052<SeP>1204<SeP>1383<SeP>1108<SeP>1685<SeP>2125<SeP>1567<SeP>12493<SeP>6335<SeP>10180<SeP>7428<SeP>5450<SeP>10657<SeP>9097<SeP>9116<SeP>8608<SeP>13351<SeP>8434<SeP>9851<SeP>10943<SeP>13958<SeP>8979<SeP>9019<SeP>4110<SeP>8024<SeP>11460<SeP>19246<SeP>6461<SeP>8116<SeP>10843<SeP>17294<SeP>7208<SeP>5960<SeP>6256<SeP>7851<SeP>25858<SeP>7697<SeP>8497<SeP>11683<SeP>4601<SeP>6382<SeP>5722<SeP>16731<SeP>4731<SeP>12306<SeP>8259<SeP>7041<SeP>8292<SeP>7704<SeP>3259<SeP>5580<SeP>6239<SeP>7218<SeP>6388<SeP>6091<SeP>7340<SeP>18651<SeP>7143<SeP>8429<SeP>5661<SeP>7310<SeP>9334<SeP>8464<SeP>5840<SeP>2865<SeP>7186<SeP>3028<SeP>5540<SeP>4091<SeP>674<SeP>120<SeP>633<SeP>192<SeP>572<SeP>1089<SeP>343<SeP>533<SeP>817<SeP>1611<SeP>3202<SeP>10730<SeP>12779<SeP>1982<SeP>4384<SeP>2853<SeP>3664<SeP>6929<SeP>4165<SeP>2569<SeP>3776<SeP>2741<SeP>2913<SeP>3587<SeP>4250<SeP>2211<SeP>3317<SeP>1273<SeP>2790<SeP>1069<SeP>1915<SeP>1599<SeP>1383<SeP>1253<SeP>852<SeP>1615<SeP>26891<SeP>1768<SeP>3911<SeP>3910<SeP>2331<SeP>3624<SeP>2736<SeP>1674<SeP>3886<SeP>2114<SeP>4105<SeP>2042<SeP>2989<SeP>3852<SeP>4546<SeP>5008<SeP>5070<SeP>4801<SeP>2669<SeP>2183<SeP>5034<SeP>3387<SeP>9905<SeP>5386<SeP>3336<SeP>2778<SeP>2394<SeP>4681<SeP>3530<SeP>3563<SeP>3009<SeP>2831<SeP>5427<SeP>3935<SeP>5649<SeP>3718<SeP>5646<SeP>4519<SeP>5169<SeP>5857<SeP>13764<SeP>14241<SeP>12517<SeP>1835<SeP>2278<SeP>4794<SeP>3334<SeP>4061<SeP>3960<SeP>5021<SeP>3987<SeP>4485<SeP>4250<SeP>3564<SeP>3301<SeP>1268<SeP>1955<SeP>3259<SeP>2854<SeP>2190<SeP>3968<SeP>4228<SeP>4062<SeP>3211<SeP>4048<SeP>3347<SeP>3668<SeP>3283<SeP>8615<SeP>6354<SeP>5433<SeP>4612<SeP>5332<SeP>3903<SeP>3750<SeP>4694<SeP>4797<SeP>5498<SeP>4790<SeP>4812<SeP>1994<SeP>745<SeP>2012<SeP>1391<SeP>1086<SeP>1405<SeP>1760<SeP>1123<SeP>1997<SeP>4096<SeP>5351<SeP>5951<SeP>34033<SeP>5212<SeP>6819<SeP>21604<SeP>5141<SeP>5287<SeP>6254<SeP>4012<SeP>24640<SeP>5412<SeP>4917<SeP>4820<SeP>5734<SeP>17569<SeP>17817<SeP>4367<SeP>3397<SeP>4505<SeP>5021<SeP>6152<SeP>3264<SeP>3167<SeP>3796<SeP>4631<SeP>5328<SeP>4076<SeP>17735<SeP>6216<SeP>6478<SeP>4193<SeP>2468<SeP>3348<SeP>4514<SeP>4062<SeP>3862<SeP>2932<SeP>3857<SeP>2359<SeP>4096<SeP>4201<SeP>7935<SeP>10283<SeP>8344<SeP>8868<SeP>9049<SeP>7251<SeP>6208<SeP>5107<SeP>4227<SeP>22949<SeP>6242<SeP>3226<SeP>4604<SeP>3280<SeP>11391<SeP>5789<SeP>3725<SeP>4832<SeP>4314<SeP>2730<SeP>9450<SeP>9778<SeP>4536<SeP>3107<SeP>3337<SeP>2298<SeP>2517";
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
  const itemData    = "694709<SeP>364727<SeP>206482<SeP>180055<SeP>110423<SeP>88076<SeP>83413<SeP>80941<SeP>68088<SeP>67378";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "297385<SeP>41422<SeP>40564<SeP>35823<SeP>14457<SeP>11014<SeP>7945<SeP>7943<SeP>7176<SeP>7026";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "397324<SeP>328904<SeP>203455<SeP>139491<SeP>95966<SeP>80900<SeP>80776<SeP>69927<SeP>59435<SeP>58677";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "363083<SeP>259554<SeP>236743<SeP>143852<SeP>67243<SeP>59704<SeP>56647<SeP>53121<SeP>41617<SeP>36167";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "156536<SeP>53411<SeP>40495<SeP>32500<SeP>21911<SeP>12816<SeP>10778<SeP>8091<SeP>7614<SeP>7457";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "350267<SeP>258788<SeP>121941<SeP>80207<SeP>55661<SeP>48926<SeP>47072<SeP>30555<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "694709<SeP>364727<SeP>206482<SeP>180055<SeP>110423<SeP>88076<SeP>83413<SeP>80941<SeP>68088<SeP>67378";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "297385<SeP>41422<SeP>40564<SeP>35823<SeP>14457<SeP>11014<SeP>7945<SeP>7943<SeP>7176<SeP>7026";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "397324<SeP>328904<SeP>203455<SeP>139491<SeP>95966<SeP>80900<SeP>80776<SeP>69927<SeP>59435<SeP>58677";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "363083<SeP>259554<SeP>236743<SeP>143852<SeP>67243<SeP>59704<SeP>56647<SeP>53121<SeP>41617<SeP>36167";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "156536<SeP>53411<SeP>40495<SeP>32500<SeP>21911<SeP>12816<SeP>10778<SeP>8091<SeP>7614<SeP>7457";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "350267<SeP>258788<SeP>121941<SeP>80207<SeP>55661<SeP>48926<SeP>47072<SeP>30555<SeP>29324<SeP>26846";
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
