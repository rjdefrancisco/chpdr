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
  document.getElementById("last-updated").innerHTML = "2025-3-9";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.5";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.5";
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
  const metricData    = "2849811";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "557579";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2292232";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140617";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1438151";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "854081";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54474";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "250791";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "603290";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43755";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2849811";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "557579";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2292232";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140617";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1438151";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "854081";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54474";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "250791";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "603290";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43755";
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
  const incomingData = "2849811<SeP>557579<SeP>2292232<SeP>140617";
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
  const incomingData = "2292232<SeP>1438151<SeP>854081<SeP>54474";
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
  const incomingData = "854081<SeP>250791<SeP>603290<SeP>43755";
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
  const incomingData = "2561470<SeP>258450<SeP>2303020";
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
  const incomingData = "388205<SeP>149<SeP>388056<SeP>229";
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
  const incomingData = "2849811<SeP>557579<SeP>2292232<SeP>140617";
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
  const incomingData = "2292232<SeP>1438151<SeP>854081<SeP>54474";
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
  const incomingData = "854081<SeP>250791<SeP>603290<SeP>43755";
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
  const incomingData = "2561470<SeP>258450<SeP>2303020";
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
  const incomingData = "388205<SeP>149<SeP>388056<SeP>229";
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
  const column3Data   = "221714<SeP>203236<SeP>12760<SeP>12464<SeP>9793<SeP>9456<SeP>6449<SeP>5593<SeP>4633<SeP>3504";
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
  const column2Data  = "213101<SeP>43164<SeP>939<SeP>485<SeP>465<SeP>447<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2411258<SeP>438553";
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
  const column3Data   = "221714<SeP>203236<SeP>12760<SeP>12464<SeP>9793<SeP>9456<SeP>6449<SeP>5593<SeP>4633<SeP>3504";
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
  const column2Data  = "213101<SeP>43164<SeP>939<SeP>485<SeP>465<SeP>447<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2411258<SeP>438553";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-9";

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
        "name": "traffic between 2023-07-26 and 2025-03-07"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          397963,50
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
        "name": "scans between 2023-07-26 and 2025-03-07"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          229285,30,
          397963,50
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
        "name": "attacks between 2023-07-26 and 2025-03-07"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168678,23,
          397963,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-9";

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
        "name": "tráfico entre 2023-07-26 y 2025-03-07"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          397963,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-07"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          229285,30,
          397963,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-07"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168678,23,
          397963,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:31:21<SeP>2023-07-28 23:02:42<SeP>2023-07-30 10:34:03<SeP>2023-07-31 22:05:24<SeP>2023-08-02 09:36:45<SeP>2023-08-03 21:08:06<SeP>2023-08-05 08:39:27<SeP>2023-08-06 20:10:48<SeP>2023-08-08 07:42:09<SeP>2023-08-09 19:13:30<SeP>2023-08-11 06:44:51<SeP>2023-08-12 18:16:12<SeP>2023-08-14 05:47:33<SeP>2023-08-15 17:18:54<SeP>2023-08-17 04:50:15<SeP>2023-08-18 16:21:36<SeP>2023-08-20 03:52:57<SeP>2023-08-21 15:24:18<SeP>2023-08-23 02:55:39<SeP>2023-08-24 14:27:00<SeP>2023-08-26 01:58:21<SeP>2023-08-27 13:29:42<SeP>2023-08-29 01:01:03<SeP>2023-08-30 12:32:24<SeP>2023-09-01 00:03:45<SeP>2023-09-02 11:35:06<SeP>2023-09-03 23:06:27<SeP>2023-09-05 10:37:48<SeP>2023-09-06 22:09:09<SeP>2023-09-08 09:40:30<SeP>2023-09-09 21:11:51<SeP>2023-09-11 08:43:12<SeP>2023-09-12 20:14:33<SeP>2023-09-14 07:45:54<SeP>2023-09-15 19:17:15<SeP>2023-09-17 06:48:36<SeP>2023-09-18 18:19:57<SeP>2023-09-20 05:51:18<SeP>2023-09-21 17:22:39<SeP>2023-09-23 04:54:00<SeP>2023-09-24 16:25:21<SeP>2023-09-26 03:56:42<SeP>2023-09-27 15:28:03<SeP>2023-09-29 02:59:24<SeP>2023-09-30 14:30:45<SeP>2023-10-02 02:02:06<SeP>2023-10-03 13:33:27<SeP>2023-10-05 01:04:48<SeP>2023-10-06 12:36:09<SeP>2023-10-08 00:07:30<SeP>2023-10-09 11:38:51<SeP>2023-10-10 23:10:12<SeP>2023-10-12 10:41:33<SeP>2023-10-13 22:12:54<SeP>2023-10-15 09:44:15<SeP>2023-10-16 21:15:36<SeP>2023-10-18 08:46:57<SeP>2023-10-19 20:18:18<SeP>2023-10-21 07:49:39<SeP>2023-10-22 19:21:00<SeP>2023-10-24 06:52:21<SeP>2023-10-25 18:23:42<SeP>2023-10-27 05:55:03<SeP>2023-10-28 17:26:24<SeP>2023-10-30 04:57:45<SeP>2023-10-31 16:29:06<SeP>2023-11-02 04:00:27<SeP>2023-11-03 15:31:48<SeP>2023-11-05 02:03:09<SeP>2023-11-06 13:34:30<SeP>2023-11-08 01:05:51<SeP>2023-11-09 12:37:12<SeP>2023-11-11 00:08:33<SeP>2023-11-12 11:39:54<SeP>2023-11-13 23:11:15<SeP>2023-11-15 10:42:36<SeP>2023-11-16 22:13:57<SeP>2023-11-18 09:45:18<SeP>2023-11-19 21:16:39<SeP>2023-11-21 08:48:00<SeP>2023-11-22 20:19:21<SeP>2023-11-24 07:50:42<SeP>2023-11-25 19:22:03<SeP>2023-11-27 06:53:24<SeP>2023-11-28 18:24:45<SeP>2023-11-30 05:56:06<SeP>2023-12-01 17:27:27<SeP>2023-12-03 04:58:48<SeP>2023-12-04 16:30:09<SeP>2023-12-06 04:01:30<SeP>2023-12-07 15:32:51<SeP>2023-12-09 03:04:12<SeP>2023-12-10 14:35:33<SeP>2023-12-12 02:06:54<SeP>2023-12-13 13:38:15<SeP>2023-12-15 01:09:36<SeP>2023-12-16 12:40:57<SeP>2023-12-18 00:12:18<SeP>2023-12-19 11:43:39<SeP>2023-12-20 23:15:00<SeP>2023-12-22 10:46:21<SeP>2023-12-23 22:17:42<SeP>2023-12-25 09:49:03<SeP>2023-12-26 21:20:24<SeP>2023-12-28 08:51:45<SeP>2023-12-29 20:23:06<SeP>2023-12-31 07:54:27<SeP>2024-01-01 19:25:48<SeP>2024-01-03 06:57:09<SeP>2024-01-04 18:28:30<SeP>2024-01-06 05:59:51<SeP>2024-01-07 17:31:12<SeP>2024-01-09 05:02:33<SeP>2024-01-10 16:33:54<SeP>2024-01-12 04:05:15<SeP>2024-01-13 15:36:36<SeP>2024-01-15 03:07:57<SeP>2024-01-16 14:39:18<SeP>2024-01-18 02:10:39<SeP>2024-01-19 13:42:00<SeP>2024-01-21 01:13:21<SeP>2024-01-22 12:44:42<SeP>2024-01-24 00:16:03<SeP>2024-01-25 11:47:24<SeP>2024-01-26 23:18:45<SeP>2024-01-28 10:50:06<SeP>2024-01-29 22:21:27<SeP>2024-01-31 09:52:48<SeP>2024-02-01 21:24:09<SeP>2024-02-03 08:55:30<SeP>2024-02-04 20:26:51<SeP>2024-02-06 07:58:12<SeP>2024-02-07 19:29:33<SeP>2024-02-09 07:00:54<SeP>2024-02-10 18:32:15<SeP>2024-02-12 06:03:36<SeP>2024-02-13 17:34:57<SeP>2024-02-15 05:06:18<SeP>2024-02-16 16:37:39<SeP>2024-02-18 04:09:00<SeP>2024-02-19 15:40:21<SeP>2024-02-21 03:11:42<SeP>2024-02-22 14:43:03<SeP>2024-02-24 02:14:24<SeP>2024-02-25 13:45:45<SeP>2024-02-27 01:17:06<SeP>2024-02-28 12:48:27<SeP>2024-03-01 00:19:48<SeP>2024-03-02 11:51:09<SeP>2024-03-03 23:22:30<SeP>2024-03-05 10:53:51<SeP>2024-03-06 22:25:12<SeP>2024-03-08 09:56:33<SeP>2024-03-09 21:27:54<SeP>2024-03-11 09:59:15<SeP>2024-03-12 21:30:36<SeP>2024-03-14 09:01:57<SeP>2024-03-15 20:33:18<SeP>2024-03-17 08:04:39<SeP>2024-03-18 19:36:00<SeP>2024-03-20 07:07:21<SeP>2024-03-21 18:38:42<SeP>2024-03-23 06:10:03<SeP>2024-03-24 17:41:24<SeP>2024-03-26 05:12:45<SeP>2024-03-27 16:44:06<SeP>2024-03-29 04:15:27<SeP>2024-03-30 15:46:48<SeP>2024-04-01 03:18:09<SeP>2024-04-02 14:49:30<SeP>2024-04-04 02:20:51<SeP>2024-04-05 13:52:12<SeP>2024-04-07 01:23:33<SeP>2024-04-08 12:54:54<SeP>2024-04-10 00:26:15<SeP>2024-04-11 11:57:36<SeP>2024-04-12 23:28:57<SeP>2024-04-14 11:00:18<SeP>2024-04-15 22:31:39<SeP>2024-04-17 10:03:00<SeP>2024-04-18 21:34:21<SeP>2024-04-20 09:05:42<SeP>2024-04-21 20:37:03<SeP>2024-04-23 08:08:24<SeP>2024-04-24 19:39:45<SeP>2024-04-26 07:11:06<SeP>2024-04-27 18:42:27<SeP>2024-04-29 06:13:48<SeP>2024-04-30 17:45:09<SeP>2024-05-02 05:16:30<SeP>2024-05-03 16:47:51<SeP>2024-05-05 04:19:12<SeP>2024-05-06 15:50:33<SeP>2024-05-08 03:21:54<SeP>2024-05-09 14:53:15<SeP>2024-05-11 02:24:36<SeP>2024-05-12 13:55:57<SeP>2024-05-14 01:27:18<SeP>2024-05-15 12:58:39<SeP>2024-05-17 00:30:00<SeP>2024-05-18 12:01:21<SeP>2024-05-19 23:32:42<SeP>2024-05-21 11:04:03<SeP>2024-05-22 22:35:24<SeP>2024-05-24 10:06:45<SeP>2024-05-25 21:38:06<SeP>2024-05-27 09:09:27<SeP>2024-05-28 20:40:48<SeP>2024-05-30 08:12:09<SeP>2024-05-31 19:43:30<SeP>2024-06-02 07:14:51<SeP>2024-06-03 18:46:12<SeP>2024-06-05 06:17:33<SeP>2024-06-06 17:48:54<SeP>2024-06-08 05:20:15<SeP>2024-06-09 16:51:36<SeP>2024-06-11 04:22:57<SeP>2024-06-12 15:54:18<SeP>2024-06-14 03:25:39<SeP>2024-06-15 14:57:00<SeP>2024-06-17 02:28:21<SeP>2024-06-18 13:59:42<SeP>2024-06-20 01:31:03<SeP>2024-06-21 13:02:24<SeP>2024-06-23 00:33:45<SeP>2024-06-24 12:05:06<SeP>2024-06-25 23:36:27<SeP>2024-06-27 11:07:48<SeP>2024-06-28 22:39:09<SeP>2024-06-30 10:10:30<SeP>2024-07-01 21:41:51<SeP>2024-07-03 09:13:12<SeP>2024-07-04 20:44:33<SeP>2024-07-06 08:15:54<SeP>2024-07-07 19:47:15<SeP>2024-07-09 07:18:36<SeP>2024-07-10 18:49:57<SeP>2024-07-12 06:21:18<SeP>2024-07-13 17:52:39<SeP>2024-07-15 05:24:00<SeP>2024-07-16 16:55:21<SeP>2024-07-18 04:26:42<SeP>2024-07-19 15:58:03<SeP>2024-07-21 03:29:24<SeP>2024-07-22 15:00:45<SeP>2024-07-24 02:32:06<SeP>2024-07-25 14:03:27<SeP>2024-07-27 01:34:48<SeP>2024-07-28 13:06:09<SeP>2024-07-30 00:37:30<SeP>2024-07-31 12:08:51<SeP>2024-08-01 23:40:12<SeP>2024-08-03 11:11:33<SeP>2024-08-04 22:42:54<SeP>2024-08-06 10:14:15<SeP>2024-08-07 21:45:36<SeP>2024-08-09 09:16:57<SeP>2024-08-10 20:48:18<SeP>2024-08-12 08:19:39<SeP>2024-08-13 19:51:00<SeP>2024-08-15 07:22:21<SeP>2024-08-16 18:53:42<SeP>2024-08-18 06:25:03<SeP>2024-08-19 17:56:24<SeP>2024-08-21 05:27:45<SeP>2024-08-22 16:59:06<SeP>2024-08-24 04:30:27<SeP>2024-08-25 16:01:48<SeP>2024-08-27 03:33:09<SeP>2024-08-28 15:04:30<SeP>2024-08-30 02:35:51<SeP>2024-08-31 14:07:12<SeP>2024-09-02 01:38:33<SeP>2024-09-03 13:09:54<SeP>2024-09-05 00:41:15<SeP>2024-09-06 12:12:36<SeP>2024-09-07 23:43:57<SeP>2024-09-09 11:15:18<SeP>2024-09-10 22:46:39<SeP>2024-09-12 10:18:00<SeP>2024-09-13 21:49:21<SeP>2024-09-15 09:20:42<SeP>2024-09-16 20:52:03<SeP>2024-09-18 08:23:24<SeP>2024-09-19 19:54:45<SeP>2024-09-21 07:26:06<SeP>2024-09-22 18:57:27<SeP>2024-09-24 06:28:48<SeP>2024-09-25 18:00:09<SeP>2024-09-27 05:31:30<SeP>2024-09-28 17:02:51<SeP>2024-09-30 04:34:12<SeP>2024-10-01 16:05:33<SeP>2024-10-03 03:36:54<SeP>2024-10-04 15:08:15<SeP>2024-10-06 02:39:36<SeP>2024-10-07 14:10:57<SeP>2024-10-09 01:42:18<SeP>2024-10-10 13:13:39<SeP>2024-10-12 00:45:00<SeP>2024-10-13 12:16:21<SeP>2024-10-14 23:47:42<SeP>2024-10-16 11:19:03<SeP>2024-10-17 22:50:24<SeP>2024-10-19 10:21:45<SeP>2024-10-20 21:53:06<SeP>2024-10-22 09:24:27<SeP>2024-10-23 20:55:48<SeP>2024-10-25 08:27:09<SeP>2024-10-26 19:58:30<SeP>2024-10-28 07:29:51<SeP>2024-10-29 19:01:12<SeP>2024-10-31 06:32:33<SeP>2024-11-01 18:03:54<SeP>2024-11-03 04:35:15<SeP>2024-11-04 16:06:36<SeP>2024-11-06 03:37:57<SeP>2024-11-07 15:09:18<SeP>2024-11-09 02:40:39<SeP>2024-11-10 14:12:00<SeP>2024-11-12 01:43:21<SeP>2024-11-13 13:14:42<SeP>2024-11-15 00:46:03<SeP>2024-11-16 12:17:24<SeP>2024-11-17 23:48:45<SeP>2024-11-19 11:20:06<SeP>2024-11-20 22:51:27<SeP>2024-11-22 10:22:48<SeP>2024-11-23 21:54:09<SeP>2024-11-25 09:25:30<SeP>2024-11-26 20:56:51<SeP>2024-11-28 08:28:12<SeP>2024-11-29 19:59:33<SeP>2024-12-01 07:30:54<SeP>2024-12-02 19:02:15<SeP>2024-12-04 06:33:36<SeP>2024-12-05 18:04:57<SeP>2024-12-07 05:36:18<SeP>2024-12-08 17:07:39<SeP>2024-12-10 04:39:00<SeP>2024-12-11 16:10:21<SeP>2024-12-13 03:41:42<SeP>2024-12-14 15:13:03<SeP>2024-12-16 02:44:24<SeP>2024-12-17 14:15:45<SeP>2024-12-19 01:47:06<SeP>2024-12-20 13:18:27<SeP>2024-12-22 00:49:48<SeP>2024-12-23 12:21:09<SeP>2024-12-24 23:52:30<SeP>2024-12-26 11:23:51<SeP>2024-12-27 22:55:12<SeP>2024-12-29 10:26:33<SeP>2024-12-30 21:57:54<SeP>2025-01-01 09:29:15<SeP>2025-01-02 21:00:36<SeP>2025-01-04 08:31:57<SeP>2025-01-05 20:03:18<SeP>2025-01-07 07:34:39<SeP>2025-01-08 19:06:00<SeP>2025-01-10 06:37:21<SeP>2025-01-11 18:08:42<SeP>2025-01-13 05:40:03<SeP>2025-01-14 17:11:24<SeP>2025-01-16 04:42:45<SeP>2025-01-17 16:14:06<SeP>2025-01-19 03:45:27<SeP>2025-01-20 15:16:48<SeP>2025-01-22 02:48:09<SeP>2025-01-23 14:19:30<SeP>2025-01-25 01:50:51<SeP>2025-01-26 13:22:12<SeP>2025-01-28 00:53:33<SeP>2025-01-29 12:24:54<SeP>2025-01-30 23:56:15<SeP>2025-02-01 11:27:36<SeP>2025-02-02 22:58:57<SeP>2025-02-04 10:30:18<SeP>2025-02-05 22:01:39<SeP>2025-02-07 09:33:00<SeP>2025-02-08 21:04:21<SeP>2025-02-10 08:35:42<SeP>2025-02-11 20:07:03<SeP>2025-02-13 07:38:24<SeP>2025-02-14 19:09:45<SeP>2025-02-16 06:41:06<SeP>2025-02-17 18:12:27<SeP>2025-02-19 05:43:48<SeP>2025-02-20 17:15:09<SeP>2025-02-22 04:46:30<SeP>2025-02-23 16:17:51<SeP>2025-02-25 03:49:12<SeP>2025-02-26 15:20:33<SeP>2025-02-28 02:51:54<SeP>2025-03-01 14:23:15<SeP>2025-03-03 01:54:36<SeP>2025-03-04 13:25:57<SeP>2025-03-06 00:57:18<SeP>2025-03-07 12:28:39";
  const item1Label       = "Scans";
  const item1Data        = "774<SeP>1518<SeP>1377<SeP>1500<SeP>1220<SeP>1757<SeP>937<SeP>998<SeP>1135<SeP>3402<SeP>3138<SeP>1301<SeP>3305<SeP>883<SeP>774<SeP>893<SeP>1428<SeP>2934<SeP>1799<SeP>1313<SeP>1184<SeP>899<SeP>1075<SeP>1249<SeP>903<SeP>796<SeP>964<SeP>3679<SeP>900<SeP>830<SeP>1289<SeP>1330<SeP>865<SeP>1397<SeP>2784<SeP>2937<SeP>1804<SeP>1506<SeP>1706<SeP>1321<SeP>1736<SeP>1878<SeP>2138<SeP>1595<SeP>1768<SeP>1590<SeP>1639<SeP>1783<SeP>1677<SeP>2081<SeP>1628<SeP>1661<SeP>2841<SeP>2124<SeP>1414<SeP>1750<SeP>2109<SeP>2327<SeP>1481<SeP>3594<SeP>1674<SeP>1423<SeP>1636<SeP>1258<SeP>1882<SeP>1611<SeP>1443<SeP>1310<SeP>1494<SeP>1148<SeP>2364<SeP>1241<SeP>1119<SeP>1368<SeP>4145<SeP>5306<SeP>1381<SeP>1344<SeP>1595<SeP>2089<SeP>1139<SeP>5632<SeP>2588<SeP>1709<SeP>976<SeP>1123<SeP>3304<SeP>1337<SeP>952<SeP>1028<SeP>1080<SeP>1073<SeP>2985<SeP>1248<SeP>1391<SeP>2871<SeP>6620<SeP>1256<SeP>1008<SeP>937<SeP>921<SeP>1014<SeP>980<SeP>1014<SeP>1033<SeP>4298<SeP>1888<SeP>1385<SeP>1557<SeP>515<SeP>1380<SeP>1345<SeP>1185<SeP>920<SeP>1912<SeP>1496<SeP>1264<SeP>1047<SeP>971<SeP>1172<SeP>692<SeP>879<SeP>858<SeP>821<SeP>1132<SeP>845<SeP>943<SeP>747<SeP>936<SeP>852<SeP>684<SeP>861<SeP>850<SeP>883<SeP>879<SeP>851<SeP>860<SeP>775<SeP>849<SeP>1055<SeP>836<SeP>860<SeP>885<SeP>979<SeP>968<SeP>999<SeP>968<SeP>549<SeP>916<SeP>863<SeP>1217<SeP>911<SeP>981<SeP>1223<SeP>1316<SeP>886<SeP>979<SeP>851<SeP>972<SeP>747<SeP>1114<SeP>984<SeP>978<SeP>901<SeP>987<SeP>1037<SeP>1049<SeP>1026<SeP>1026<SeP>1111<SeP>960<SeP>884<SeP>2139<SeP>1188<SeP>1242<SeP>1081<SeP>979<SeP>1164<SeP>1025<SeP>848<SeP>739<SeP>904<SeP>1083<SeP>952<SeP>876<SeP>1172<SeP>1311<SeP>1081<SeP>1144<SeP>1307<SeP>1221<SeP>1271<SeP>1346<SeP>1295<SeP>1555<SeP>1941<SeP>1429<SeP>1206<SeP>771<SeP>1117<SeP>904<SeP>1066<SeP>615<SeP>789<SeP>1027<SeP>831<SeP>3784<SeP>4535<SeP>2117<SeP>1556<SeP>1141<SeP>860<SeP>1065<SeP>929<SeP>990<SeP>1051<SeP>1063<SeP>1012<SeP>1062<SeP>2399<SeP>1093<SeP>1237<SeP>1136<SeP>1384<SeP>1051<SeP>1163<SeP>929<SeP>1160<SeP>1128<SeP>1008<SeP>1110<SeP>1009<SeP>1243<SeP>861<SeP>1410<SeP>1042<SeP>1134<SeP>1115<SeP>1352<SeP>1275<SeP>1143<SeP>1624<SeP>1169<SeP>1120<SeP>1196<SeP>1784<SeP>1489<SeP>1466<SeP>1989<SeP>1509<SeP>1588<SeP>2016<SeP>1335<SeP>1222<SeP>1079<SeP>1358<SeP>1409<SeP>1343<SeP>1321<SeP>1367<SeP>1858<SeP>1495<SeP>1469<SeP>1300<SeP>1511<SeP>1204<SeP>1064<SeP>1369<SeP>1103<SeP>1243<SeP>1265<SeP>1298<SeP>1143<SeP>1956<SeP>1369<SeP>1373<SeP>1643<SeP>1455<SeP>1227<SeP>1127<SeP>893<SeP>920<SeP>932<SeP>952<SeP>1080<SeP>1822<SeP>1099<SeP>1124<SeP>1177<SeP>810<SeP>1016<SeP>1001<SeP>1323<SeP>877<SeP>913<SeP>1158<SeP>1387<SeP>1645<SeP>1270<SeP>1088<SeP>1039<SeP>1142<SeP>1796<SeP>967<SeP>1212<SeP>1036<SeP>1563<SeP>1084<SeP>935<SeP>1228<SeP>1119<SeP>881<SeP>870<SeP>1146<SeP>1435<SeP>1565<SeP>1478<SeP>1432<SeP>1238<SeP>940<SeP>1157<SeP>1213<SeP>1194<SeP>1173<SeP>1026<SeP>1042<SeP>1148<SeP>1552<SeP>1306<SeP>1527<SeP>1364<SeP>1478<SeP>1569<SeP>1501<SeP>1234<SeP>1533<SeP>1528<SeP>1345<SeP>1430<SeP>1534<SeP>1595<SeP>1539<SeP>1350<SeP>1492<SeP>1377<SeP>1158<SeP>1325<SeP>1421<SeP>1711<SeP>1346<SeP>1318<SeP>1241<SeP>1452<SeP>1168<SeP>1340<SeP>1411<SeP>1780<SeP>1778<SeP>1261<SeP>641<SeP>1423<SeP>1954<SeP>1176<SeP>1463<SeP>1195<SeP>1194<SeP>1298<SeP>1463<SeP>1223<SeP>1583<SeP>1766<SeP>1351<SeP>1629<SeP>1671<SeP>1395<SeP>1390<SeP>1502<SeP>1671<SeP>1758<SeP>981<SeP>1126<SeP>2030<SeP>1973<SeP>1649<SeP>1777<SeP>1721<SeP>1551<SeP>1637<SeP>1627<SeP>1616<SeP>1524<SeP>1756<SeP>1809<SeP>1628<SeP>1457<SeP>1494<SeP>1461<SeP>1513<SeP>1671<SeP>2082";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "171<SeP>598<SeP>1399<SeP>657<SeP>222<SeP>236<SeP>7018<SeP>582<SeP>9419<SeP>564<SeP>402<SeP>1133<SeP>1295<SeP>241<SeP>307<SeP>307<SeP>150<SeP>747<SeP>348<SeP>7909<SeP>6867<SeP>6836<SeP>9188<SeP>2689<SeP>287<SeP>416<SeP>173<SeP>382<SeP>5915<SeP>99<SeP>384<SeP>135<SeP>527<SeP>341<SeP>9645<SeP>9593<SeP>9930<SeP>9888<SeP>5795<SeP>6260<SeP>8578<SeP>7727<SeP>9657<SeP>7852<SeP>7529<SeP>9504<SeP>7914<SeP>8258<SeP>8596<SeP>5893<SeP>9653<SeP>9703<SeP>6170<SeP>8484<SeP>8113<SeP>9277<SeP>18429<SeP>16786<SeP>9274<SeP>11479<SeP>6710<SeP>8162<SeP>8664<SeP>9362<SeP>8869<SeP>5885<SeP>7271<SeP>7356<SeP>5845<SeP>3411<SeP>6288<SeP>5432<SeP>6526<SeP>7305<SeP>8352<SeP>2325<SeP>6366<SeP>6493<SeP>6252<SeP>5724<SeP>6470<SeP>4494<SeP>7408<SeP>5275<SeP>5590<SeP>5992<SeP>7175<SeP>21744<SeP>17028<SeP>27817<SeP>8721<SeP>6963<SeP>7075<SeP>12323<SeP>7918<SeP>3228<SeP>6859<SeP>3772<SeP>4620<SeP>7242<SeP>6604<SeP>6897<SeP>7142<SeP>5819<SeP>4236<SeP>7855<SeP>8401<SeP>7474<SeP>8587<SeP>3574<SeP>8405<SeP>9963<SeP>7917<SeP>3007<SeP>4926<SeP>7761<SeP>7452<SeP>5784<SeP>8763<SeP>7911<SeP>1773<SeP>2786<SeP>976<SeP>1927<SeP>2707<SeP>1327<SeP>900<SeP>1137<SeP>1204<SeP>1854<SeP>601<SeP>1293<SeP>1166<SeP>1029<SeP>893<SeP>1144<SeP>1486<SeP>1322<SeP>969<SeP>2163<SeP>1682<SeP>6001<SeP>11052<SeP>7864<SeP>8400<SeP>7165<SeP>12699<SeP>2903<SeP>11671<SeP>9948<SeP>9423<SeP>12528<SeP>8138<SeP>13154<SeP>12170<SeP>6969<SeP>12190<SeP>5385<SeP>5368<SeP>7024<SeP>25462<SeP>6609<SeP>8327<SeP>9104<SeP>17433<SeP>8437<SeP>7148<SeP>7011<SeP>5941<SeP>16774<SeP>17584<SeP>7672<SeP>11484<SeP>5351<SeP>6992<SeP>5399<SeP>16149<SeP>5084<SeP>7389<SeP>14042<SeP>6732<SeP>8546<SeP>7522<SeP>4321<SeP>4334<SeP>6877<SeP>7396<SeP>6107<SeP>5926<SeP>8097<SeP>18457<SeP>6843<SeP>9057<SeP>5069<SeP>7906<SeP>9341<SeP>8466<SeP>5833<SeP>2911<SeP>7656<SeP>2786<SeP>5266<SeP>4107<SeP>672<SeP>115<SeP>641<SeP>214<SeP>649<SeP>1013<SeP>372<SeP>607<SeP>1010<SeP>1410<SeP>3228<SeP>22838<SeP>667<SeP>3449<SeP>3563<SeP>3036<SeP>7202<SeP>3028<SeP>4278<SeP>2522<SeP>3899<SeP>2809<SeP>2924<SeP>4774<SeP>2679<SeP>2173<SeP>3565<SeP>1877<SeP>2058<SeP>1926<SeP>1306<SeP>1422<SeP>1387<SeP>872<SeP>1863<SeP>15333<SeP>12764<SeP>2378<SeP>3825<SeP>3648<SeP>2587<SeP>3853<SeP>1727<SeP>3396<SeP>2902<SeP>3295<SeP>2522<SeP>2952<SeP>3195<SeP>3288<SeP>6768<SeP>4769<SeP>4029<SeP>3743<SeP>3028<SeP>3658<SeP>3456<SeP>6674<SeP>8535<SeP>4647<SeP>2161<SeP>3366<SeP>3377<SeP>4650<SeP>3149<SeP>3350<SeP>2419<SeP>5056<SeP>4663<SeP>3407<SeP>5633<SeP>5059<SeP>5389<SeP>4895<SeP>5415<SeP>9375<SeP>18211<SeP>11929<SeP>4020<SeP>1841<SeP>5130<SeP>3413<SeP>3753<SeP>4255<SeP>5028<SeP>3972<SeP>4566<SeP>4252<SeP>3556<SeP>3315<SeP>1270<SeP>2118<SeP>3120<SeP>2860<SeP>2900<SeP>3258<SeP>4369<SeP>4150<SeP>3102<SeP>4613<SeP>3443<SeP>3167<SeP>4152<SeP>8216<SeP>6235<SeP>5539<SeP>5188<SeP>4821<SeP>3711<SeP>3613<SeP>4670<SeP>5806<SeP>5241<SeP>5003<SeP>3962<SeP>1797<SeP>489<SeP>2307<SeP>1514<SeP>682<SeP>1856<SeP>1800<SeP>1074<SeP>2878<SeP>4327<SeP>6346<SeP>20771<SeP>18135<SeP>5636<SeP>13531<SeP>14730<SeP>5436<SeP>6336<SeP>4708<SeP>22339<SeP>6862<SeP>5545<SeP>4530<SeP>4786<SeP>6391<SeP>28123<SeP>7276<SeP>4046<SeP>3953<SeP>3818<SeP>5738<SeP>4751<SeP>3808<SeP>2635<SeP>4572<SeP>5721<SeP>4629<SeP>18077<SeP>5464<SeP>6424<SeP>5534<SeP>1390<SeP>3932<SeP>4122<SeP>4224<SeP>4532<SeP>2899<SeP>3567<SeP>2908<SeP>3918<SeP>3629<SeP>7409<SeP>9196<SeP>9613<SeP>8659<SeP>8856<SeP>8199<SeP>5984<SeP>5136<SeP>4819<SeP>17364<SeP>11936<SeP>3240<SeP>4860<SeP>3281<SeP>11210<SeP>5676<SeP>3655<SeP>5112<SeP>4469<SeP>2736<SeP>9505<SeP>9834<SeP>4552<SeP>3068<SeP>3417<SeP>2292<SeP>2525<SeP>2528<SeP>2060<SeP>2557<SeP>1776";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:31:21<SeP>2023-07-28 23:02:42<SeP>2023-07-30 10:34:03<SeP>2023-07-31 22:05:24<SeP>2023-08-02 09:36:45<SeP>2023-08-03 21:08:06<SeP>2023-08-05 08:39:27<SeP>2023-08-06 20:10:48<SeP>2023-08-08 07:42:09<SeP>2023-08-09 19:13:30<SeP>2023-08-11 06:44:51<SeP>2023-08-12 18:16:12<SeP>2023-08-14 05:47:33<SeP>2023-08-15 17:18:54<SeP>2023-08-17 04:50:15<SeP>2023-08-18 16:21:36<SeP>2023-08-20 03:52:57<SeP>2023-08-21 15:24:18<SeP>2023-08-23 02:55:39<SeP>2023-08-24 14:27:00<SeP>2023-08-26 01:58:21<SeP>2023-08-27 13:29:42<SeP>2023-08-29 01:01:03<SeP>2023-08-30 12:32:24<SeP>2023-09-01 00:03:45<SeP>2023-09-02 11:35:06<SeP>2023-09-03 23:06:27<SeP>2023-09-05 10:37:48<SeP>2023-09-06 22:09:09<SeP>2023-09-08 09:40:30<SeP>2023-09-09 21:11:51<SeP>2023-09-11 08:43:12<SeP>2023-09-12 20:14:33<SeP>2023-09-14 07:45:54<SeP>2023-09-15 19:17:15<SeP>2023-09-17 06:48:36<SeP>2023-09-18 18:19:57<SeP>2023-09-20 05:51:18<SeP>2023-09-21 17:22:39<SeP>2023-09-23 04:54:00<SeP>2023-09-24 16:25:21<SeP>2023-09-26 03:56:42<SeP>2023-09-27 15:28:03<SeP>2023-09-29 02:59:24<SeP>2023-09-30 14:30:45<SeP>2023-10-02 02:02:06<SeP>2023-10-03 13:33:27<SeP>2023-10-05 01:04:48<SeP>2023-10-06 12:36:09<SeP>2023-10-08 00:07:30<SeP>2023-10-09 11:38:51<SeP>2023-10-10 23:10:12<SeP>2023-10-12 10:41:33<SeP>2023-10-13 22:12:54<SeP>2023-10-15 09:44:15<SeP>2023-10-16 21:15:36<SeP>2023-10-18 08:46:57<SeP>2023-10-19 20:18:18<SeP>2023-10-21 07:49:39<SeP>2023-10-22 19:21:00<SeP>2023-10-24 06:52:21<SeP>2023-10-25 18:23:42<SeP>2023-10-27 05:55:03<SeP>2023-10-28 17:26:24<SeP>2023-10-30 04:57:45<SeP>2023-10-31 16:29:06<SeP>2023-11-02 04:00:27<SeP>2023-11-03 15:31:48<SeP>2023-11-05 02:03:09<SeP>2023-11-06 13:34:30<SeP>2023-11-08 01:05:51<SeP>2023-11-09 12:37:12<SeP>2023-11-11 00:08:33<SeP>2023-11-12 11:39:54<SeP>2023-11-13 23:11:15<SeP>2023-11-15 10:42:36<SeP>2023-11-16 22:13:57<SeP>2023-11-18 09:45:18<SeP>2023-11-19 21:16:39<SeP>2023-11-21 08:48:00<SeP>2023-11-22 20:19:21<SeP>2023-11-24 07:50:42<SeP>2023-11-25 19:22:03<SeP>2023-11-27 06:53:24<SeP>2023-11-28 18:24:45<SeP>2023-11-30 05:56:06<SeP>2023-12-01 17:27:27<SeP>2023-12-03 04:58:48<SeP>2023-12-04 16:30:09<SeP>2023-12-06 04:01:30<SeP>2023-12-07 15:32:51<SeP>2023-12-09 03:04:12<SeP>2023-12-10 14:35:33<SeP>2023-12-12 02:06:54<SeP>2023-12-13 13:38:15<SeP>2023-12-15 01:09:36<SeP>2023-12-16 12:40:57<SeP>2023-12-18 00:12:18<SeP>2023-12-19 11:43:39<SeP>2023-12-20 23:15:00<SeP>2023-12-22 10:46:21<SeP>2023-12-23 22:17:42<SeP>2023-12-25 09:49:03<SeP>2023-12-26 21:20:24<SeP>2023-12-28 08:51:45<SeP>2023-12-29 20:23:06<SeP>2023-12-31 07:54:27<SeP>2024-01-01 19:25:48<SeP>2024-01-03 06:57:09<SeP>2024-01-04 18:28:30<SeP>2024-01-06 05:59:51<SeP>2024-01-07 17:31:12<SeP>2024-01-09 05:02:33<SeP>2024-01-10 16:33:54<SeP>2024-01-12 04:05:15<SeP>2024-01-13 15:36:36<SeP>2024-01-15 03:07:57<SeP>2024-01-16 14:39:18<SeP>2024-01-18 02:10:39<SeP>2024-01-19 13:42:00<SeP>2024-01-21 01:13:21<SeP>2024-01-22 12:44:42<SeP>2024-01-24 00:16:03<SeP>2024-01-25 11:47:24<SeP>2024-01-26 23:18:45<SeP>2024-01-28 10:50:06<SeP>2024-01-29 22:21:27<SeP>2024-01-31 09:52:48<SeP>2024-02-01 21:24:09<SeP>2024-02-03 08:55:30<SeP>2024-02-04 20:26:51<SeP>2024-02-06 07:58:12<SeP>2024-02-07 19:29:33<SeP>2024-02-09 07:00:54<SeP>2024-02-10 18:32:15<SeP>2024-02-12 06:03:36<SeP>2024-02-13 17:34:57<SeP>2024-02-15 05:06:18<SeP>2024-02-16 16:37:39<SeP>2024-02-18 04:09:00<SeP>2024-02-19 15:40:21<SeP>2024-02-21 03:11:42<SeP>2024-02-22 14:43:03<SeP>2024-02-24 02:14:24<SeP>2024-02-25 13:45:45<SeP>2024-02-27 01:17:06<SeP>2024-02-28 12:48:27<SeP>2024-03-01 00:19:48<SeP>2024-03-02 11:51:09<SeP>2024-03-03 23:22:30<SeP>2024-03-05 10:53:51<SeP>2024-03-06 22:25:12<SeP>2024-03-08 09:56:33<SeP>2024-03-09 21:27:54<SeP>2024-03-11 09:59:15<SeP>2024-03-12 21:30:36<SeP>2024-03-14 09:01:57<SeP>2024-03-15 20:33:18<SeP>2024-03-17 08:04:39<SeP>2024-03-18 19:36:00<SeP>2024-03-20 07:07:21<SeP>2024-03-21 18:38:42<SeP>2024-03-23 06:10:03<SeP>2024-03-24 17:41:24<SeP>2024-03-26 05:12:45<SeP>2024-03-27 16:44:06<SeP>2024-03-29 04:15:27<SeP>2024-03-30 15:46:48<SeP>2024-04-01 03:18:09<SeP>2024-04-02 14:49:30<SeP>2024-04-04 02:20:51<SeP>2024-04-05 13:52:12<SeP>2024-04-07 01:23:33<SeP>2024-04-08 12:54:54<SeP>2024-04-10 00:26:15<SeP>2024-04-11 11:57:36<SeP>2024-04-12 23:28:57<SeP>2024-04-14 11:00:18<SeP>2024-04-15 22:31:39<SeP>2024-04-17 10:03:00<SeP>2024-04-18 21:34:21<SeP>2024-04-20 09:05:42<SeP>2024-04-21 20:37:03<SeP>2024-04-23 08:08:24<SeP>2024-04-24 19:39:45<SeP>2024-04-26 07:11:06<SeP>2024-04-27 18:42:27<SeP>2024-04-29 06:13:48<SeP>2024-04-30 17:45:09<SeP>2024-05-02 05:16:30<SeP>2024-05-03 16:47:51<SeP>2024-05-05 04:19:12<SeP>2024-05-06 15:50:33<SeP>2024-05-08 03:21:54<SeP>2024-05-09 14:53:15<SeP>2024-05-11 02:24:36<SeP>2024-05-12 13:55:57<SeP>2024-05-14 01:27:18<SeP>2024-05-15 12:58:39<SeP>2024-05-17 00:30:00<SeP>2024-05-18 12:01:21<SeP>2024-05-19 23:32:42<SeP>2024-05-21 11:04:03<SeP>2024-05-22 22:35:24<SeP>2024-05-24 10:06:45<SeP>2024-05-25 21:38:06<SeP>2024-05-27 09:09:27<SeP>2024-05-28 20:40:48<SeP>2024-05-30 08:12:09<SeP>2024-05-31 19:43:30<SeP>2024-06-02 07:14:51<SeP>2024-06-03 18:46:12<SeP>2024-06-05 06:17:33<SeP>2024-06-06 17:48:54<SeP>2024-06-08 05:20:15<SeP>2024-06-09 16:51:36<SeP>2024-06-11 04:22:57<SeP>2024-06-12 15:54:18<SeP>2024-06-14 03:25:39<SeP>2024-06-15 14:57:00<SeP>2024-06-17 02:28:21<SeP>2024-06-18 13:59:42<SeP>2024-06-20 01:31:03<SeP>2024-06-21 13:02:24<SeP>2024-06-23 00:33:45<SeP>2024-06-24 12:05:06<SeP>2024-06-25 23:36:27<SeP>2024-06-27 11:07:48<SeP>2024-06-28 22:39:09<SeP>2024-06-30 10:10:30<SeP>2024-07-01 21:41:51<SeP>2024-07-03 09:13:12<SeP>2024-07-04 20:44:33<SeP>2024-07-06 08:15:54<SeP>2024-07-07 19:47:15<SeP>2024-07-09 07:18:36<SeP>2024-07-10 18:49:57<SeP>2024-07-12 06:21:18<SeP>2024-07-13 17:52:39<SeP>2024-07-15 05:24:00<SeP>2024-07-16 16:55:21<SeP>2024-07-18 04:26:42<SeP>2024-07-19 15:58:03<SeP>2024-07-21 03:29:24<SeP>2024-07-22 15:00:45<SeP>2024-07-24 02:32:06<SeP>2024-07-25 14:03:27<SeP>2024-07-27 01:34:48<SeP>2024-07-28 13:06:09<SeP>2024-07-30 00:37:30<SeP>2024-07-31 12:08:51<SeP>2024-08-01 23:40:12<SeP>2024-08-03 11:11:33<SeP>2024-08-04 22:42:54<SeP>2024-08-06 10:14:15<SeP>2024-08-07 21:45:36<SeP>2024-08-09 09:16:57<SeP>2024-08-10 20:48:18<SeP>2024-08-12 08:19:39<SeP>2024-08-13 19:51:00<SeP>2024-08-15 07:22:21<SeP>2024-08-16 18:53:42<SeP>2024-08-18 06:25:03<SeP>2024-08-19 17:56:24<SeP>2024-08-21 05:27:45<SeP>2024-08-22 16:59:06<SeP>2024-08-24 04:30:27<SeP>2024-08-25 16:01:48<SeP>2024-08-27 03:33:09<SeP>2024-08-28 15:04:30<SeP>2024-08-30 02:35:51<SeP>2024-08-31 14:07:12<SeP>2024-09-02 01:38:33<SeP>2024-09-03 13:09:54<SeP>2024-09-05 00:41:15<SeP>2024-09-06 12:12:36<SeP>2024-09-07 23:43:57<SeP>2024-09-09 11:15:18<SeP>2024-09-10 22:46:39<SeP>2024-09-12 10:18:00<SeP>2024-09-13 21:49:21<SeP>2024-09-15 09:20:42<SeP>2024-09-16 20:52:03<SeP>2024-09-18 08:23:24<SeP>2024-09-19 19:54:45<SeP>2024-09-21 07:26:06<SeP>2024-09-22 18:57:27<SeP>2024-09-24 06:28:48<SeP>2024-09-25 18:00:09<SeP>2024-09-27 05:31:30<SeP>2024-09-28 17:02:51<SeP>2024-09-30 04:34:12<SeP>2024-10-01 16:05:33<SeP>2024-10-03 03:36:54<SeP>2024-10-04 15:08:15<SeP>2024-10-06 02:39:36<SeP>2024-10-07 14:10:57<SeP>2024-10-09 01:42:18<SeP>2024-10-10 13:13:39<SeP>2024-10-12 00:45:00<SeP>2024-10-13 12:16:21<SeP>2024-10-14 23:47:42<SeP>2024-10-16 11:19:03<SeP>2024-10-17 22:50:24<SeP>2024-10-19 10:21:45<SeP>2024-10-20 21:53:06<SeP>2024-10-22 09:24:27<SeP>2024-10-23 20:55:48<SeP>2024-10-25 08:27:09<SeP>2024-10-26 19:58:30<SeP>2024-10-28 07:29:51<SeP>2024-10-29 19:01:12<SeP>2024-10-31 06:32:33<SeP>2024-11-01 18:03:54<SeP>2024-11-03 04:35:15<SeP>2024-11-04 16:06:36<SeP>2024-11-06 03:37:57<SeP>2024-11-07 15:09:18<SeP>2024-11-09 02:40:39<SeP>2024-11-10 14:12:00<SeP>2024-11-12 01:43:21<SeP>2024-11-13 13:14:42<SeP>2024-11-15 00:46:03<SeP>2024-11-16 12:17:24<SeP>2024-11-17 23:48:45<SeP>2024-11-19 11:20:06<SeP>2024-11-20 22:51:27<SeP>2024-11-22 10:22:48<SeP>2024-11-23 21:54:09<SeP>2024-11-25 09:25:30<SeP>2024-11-26 20:56:51<SeP>2024-11-28 08:28:12<SeP>2024-11-29 19:59:33<SeP>2024-12-01 07:30:54<SeP>2024-12-02 19:02:15<SeP>2024-12-04 06:33:36<SeP>2024-12-05 18:04:57<SeP>2024-12-07 05:36:18<SeP>2024-12-08 17:07:39<SeP>2024-12-10 04:39:00<SeP>2024-12-11 16:10:21<SeP>2024-12-13 03:41:42<SeP>2024-12-14 15:13:03<SeP>2024-12-16 02:44:24<SeP>2024-12-17 14:15:45<SeP>2024-12-19 01:47:06<SeP>2024-12-20 13:18:27<SeP>2024-12-22 00:49:48<SeP>2024-12-23 12:21:09<SeP>2024-12-24 23:52:30<SeP>2024-12-26 11:23:51<SeP>2024-12-27 22:55:12<SeP>2024-12-29 10:26:33<SeP>2024-12-30 21:57:54<SeP>2025-01-01 09:29:15<SeP>2025-01-02 21:00:36<SeP>2025-01-04 08:31:57<SeP>2025-01-05 20:03:18<SeP>2025-01-07 07:34:39<SeP>2025-01-08 19:06:00<SeP>2025-01-10 06:37:21<SeP>2025-01-11 18:08:42<SeP>2025-01-13 05:40:03<SeP>2025-01-14 17:11:24<SeP>2025-01-16 04:42:45<SeP>2025-01-17 16:14:06<SeP>2025-01-19 03:45:27<SeP>2025-01-20 15:16:48<SeP>2025-01-22 02:48:09<SeP>2025-01-23 14:19:30<SeP>2025-01-25 01:50:51<SeP>2025-01-26 13:22:12<SeP>2025-01-28 00:53:33<SeP>2025-01-29 12:24:54<SeP>2025-01-30 23:56:15<SeP>2025-02-01 11:27:36<SeP>2025-02-02 22:58:57<SeP>2025-02-04 10:30:18<SeP>2025-02-05 22:01:39<SeP>2025-02-07 09:33:00<SeP>2025-02-08 21:04:21<SeP>2025-02-10 08:35:42<SeP>2025-02-11 20:07:03<SeP>2025-02-13 07:38:24<SeP>2025-02-14 19:09:45<SeP>2025-02-16 06:41:06<SeP>2025-02-17 18:12:27<SeP>2025-02-19 05:43:48<SeP>2025-02-20 17:15:09<SeP>2025-02-22 04:46:30<SeP>2025-02-23 16:17:51<SeP>2025-02-25 03:49:12<SeP>2025-02-26 15:20:33<SeP>2025-02-28 02:51:54<SeP>2025-03-01 14:23:15<SeP>2025-03-03 01:54:36<SeP>2025-03-04 13:25:57<SeP>2025-03-06 00:57:18<SeP>2025-03-07 12:28:39";
  const itemLabel       = "Scans";
  const itemData        = "774<SeP>1518<SeP>1377<SeP>1500<SeP>1220<SeP>1757<SeP>937<SeP>998<SeP>1135<SeP>3402<SeP>3138<SeP>1301<SeP>3305<SeP>883<SeP>774<SeP>893<SeP>1428<SeP>2934<SeP>1799<SeP>1313<SeP>1184<SeP>899<SeP>1075<SeP>1249<SeP>903<SeP>796<SeP>964<SeP>3679<SeP>900<SeP>830<SeP>1289<SeP>1330<SeP>865<SeP>1397<SeP>2784<SeP>2937<SeP>1804<SeP>1506<SeP>1706<SeP>1321<SeP>1736<SeP>1878<SeP>2138<SeP>1595<SeP>1768<SeP>1590<SeP>1639<SeP>1783<SeP>1677<SeP>2081<SeP>1628<SeP>1661<SeP>2841<SeP>2124<SeP>1414<SeP>1750<SeP>2109<SeP>2327<SeP>1481<SeP>3594<SeP>1674<SeP>1423<SeP>1636<SeP>1258<SeP>1882<SeP>1611<SeP>1443<SeP>1310<SeP>1494<SeP>1148<SeP>2364<SeP>1241<SeP>1119<SeP>1368<SeP>4145<SeP>5306<SeP>1381<SeP>1344<SeP>1595<SeP>2089<SeP>1139<SeP>5632<SeP>2588<SeP>1709<SeP>976<SeP>1123<SeP>3304<SeP>1337<SeP>952<SeP>1028<SeP>1080<SeP>1073<SeP>2985<SeP>1248<SeP>1391<SeP>2871<SeP>6620<SeP>1256<SeP>1008<SeP>937<SeP>921<SeP>1014<SeP>980<SeP>1014<SeP>1033<SeP>4298<SeP>1888<SeP>1385<SeP>1557<SeP>515<SeP>1380<SeP>1345<SeP>1185<SeP>920<SeP>1912<SeP>1496<SeP>1264<SeP>1047<SeP>971<SeP>1172<SeP>692<SeP>879<SeP>858<SeP>821<SeP>1132<SeP>845<SeP>943<SeP>747<SeP>936<SeP>852<SeP>684<SeP>861<SeP>850<SeP>883<SeP>879<SeP>851<SeP>860<SeP>775<SeP>849<SeP>1055<SeP>836<SeP>860<SeP>885<SeP>979<SeP>968<SeP>999<SeP>968<SeP>549<SeP>916<SeP>863<SeP>1217<SeP>911<SeP>981<SeP>1223<SeP>1316<SeP>886<SeP>979<SeP>851<SeP>972<SeP>747<SeP>1114<SeP>984<SeP>978<SeP>901<SeP>987<SeP>1037<SeP>1049<SeP>1026<SeP>1026<SeP>1111<SeP>960<SeP>884<SeP>2139<SeP>1188<SeP>1242<SeP>1081<SeP>979<SeP>1164<SeP>1025<SeP>848<SeP>739<SeP>904<SeP>1083<SeP>952<SeP>876<SeP>1172<SeP>1311<SeP>1081<SeP>1144<SeP>1307<SeP>1221<SeP>1271<SeP>1346<SeP>1295<SeP>1555<SeP>1941<SeP>1429<SeP>1206<SeP>771<SeP>1117<SeP>904<SeP>1066<SeP>615<SeP>789<SeP>1027<SeP>831<SeP>3784<SeP>4535<SeP>2117<SeP>1556<SeP>1141<SeP>860<SeP>1065<SeP>929<SeP>990<SeP>1051<SeP>1063<SeP>1012<SeP>1062<SeP>2399<SeP>1093<SeP>1237<SeP>1136<SeP>1384<SeP>1051<SeP>1163<SeP>929<SeP>1160<SeP>1128<SeP>1008<SeP>1110<SeP>1009<SeP>1243<SeP>861<SeP>1410<SeP>1042<SeP>1134<SeP>1115<SeP>1352<SeP>1275<SeP>1143<SeP>1624<SeP>1169<SeP>1120<SeP>1196<SeP>1784<SeP>1489<SeP>1466<SeP>1989<SeP>1509<SeP>1588<SeP>2016<SeP>1335<SeP>1222<SeP>1079<SeP>1358<SeP>1409<SeP>1343<SeP>1321<SeP>1367<SeP>1858<SeP>1495<SeP>1469<SeP>1300<SeP>1511<SeP>1204<SeP>1064<SeP>1369<SeP>1103<SeP>1243<SeP>1265<SeP>1298<SeP>1143<SeP>1956<SeP>1369<SeP>1373<SeP>1643<SeP>1455<SeP>1227<SeP>1127<SeP>893<SeP>920<SeP>932<SeP>952<SeP>1080<SeP>1822<SeP>1099<SeP>1124<SeP>1177<SeP>810<SeP>1016<SeP>1001<SeP>1323<SeP>877<SeP>913<SeP>1158<SeP>1387<SeP>1645<SeP>1270<SeP>1088<SeP>1039<SeP>1142<SeP>1796<SeP>967<SeP>1212<SeP>1036<SeP>1563<SeP>1084<SeP>935<SeP>1228<SeP>1119<SeP>881<SeP>870<SeP>1146<SeP>1435<SeP>1565<SeP>1478<SeP>1432<SeP>1238<SeP>940<SeP>1157<SeP>1213<SeP>1194<SeP>1173<SeP>1026<SeP>1042<SeP>1148<SeP>1552<SeP>1306<SeP>1527<SeP>1364<SeP>1478<SeP>1569<SeP>1501<SeP>1234<SeP>1533<SeP>1528<SeP>1345<SeP>1430<SeP>1534<SeP>1595<SeP>1539<SeP>1350<SeP>1492<SeP>1377<SeP>1158<SeP>1325<SeP>1421<SeP>1711<SeP>1346<SeP>1318<SeP>1241<SeP>1452<SeP>1168<SeP>1340<SeP>1411<SeP>1780<SeP>1778<SeP>1261<SeP>641<SeP>1423<SeP>1954<SeP>1176<SeP>1463<SeP>1195<SeP>1194<SeP>1298<SeP>1463<SeP>1223<SeP>1583<SeP>1766<SeP>1351<SeP>1629<SeP>1671<SeP>1395<SeP>1390<SeP>1502<SeP>1671<SeP>1758<SeP>981<SeP>1126<SeP>2030<SeP>1973<SeP>1649<SeP>1777<SeP>1721<SeP>1551<SeP>1637<SeP>1627<SeP>1616<SeP>1524<SeP>1756<SeP>1809<SeP>1628<SeP>1457<SeP>1494<SeP>1461<SeP>1513<SeP>1671<SeP>2082";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:31:21<SeP>2023-07-28 23:02:42<SeP>2023-07-30 10:34:03<SeP>2023-07-31 22:05:24<SeP>2023-08-02 09:36:45<SeP>2023-08-03 21:08:06<SeP>2023-08-05 08:39:27<SeP>2023-08-06 20:10:48<SeP>2023-08-08 07:42:09<SeP>2023-08-09 19:13:30<SeP>2023-08-11 06:44:51<SeP>2023-08-12 18:16:12<SeP>2023-08-14 05:47:33<SeP>2023-08-15 17:18:54<SeP>2023-08-17 04:50:15<SeP>2023-08-18 16:21:36<SeP>2023-08-20 03:52:57<SeP>2023-08-21 15:24:18<SeP>2023-08-23 02:55:39<SeP>2023-08-24 14:27:00<SeP>2023-08-26 01:58:21<SeP>2023-08-27 13:29:42<SeP>2023-08-29 01:01:03<SeP>2023-08-30 12:32:24<SeP>2023-09-01 00:03:45<SeP>2023-09-02 11:35:06<SeP>2023-09-03 23:06:27<SeP>2023-09-05 10:37:48<SeP>2023-09-06 22:09:09<SeP>2023-09-08 09:40:30<SeP>2023-09-09 21:11:51<SeP>2023-09-11 08:43:12<SeP>2023-09-12 20:14:33<SeP>2023-09-14 07:45:54<SeP>2023-09-15 19:17:15<SeP>2023-09-17 06:48:36<SeP>2023-09-18 18:19:57<SeP>2023-09-20 05:51:18<SeP>2023-09-21 17:22:39<SeP>2023-09-23 04:54:00<SeP>2023-09-24 16:25:21<SeP>2023-09-26 03:56:42<SeP>2023-09-27 15:28:03<SeP>2023-09-29 02:59:24<SeP>2023-09-30 14:30:45<SeP>2023-10-02 02:02:06<SeP>2023-10-03 13:33:27<SeP>2023-10-05 01:04:48<SeP>2023-10-06 12:36:09<SeP>2023-10-08 00:07:30<SeP>2023-10-09 11:38:51<SeP>2023-10-10 23:10:12<SeP>2023-10-12 10:41:33<SeP>2023-10-13 22:12:54<SeP>2023-10-15 09:44:15<SeP>2023-10-16 21:15:36<SeP>2023-10-18 08:46:57<SeP>2023-10-19 20:18:18<SeP>2023-10-21 07:49:39<SeP>2023-10-22 19:21:00<SeP>2023-10-24 06:52:21<SeP>2023-10-25 18:23:42<SeP>2023-10-27 05:55:03<SeP>2023-10-28 17:26:24<SeP>2023-10-30 04:57:45<SeP>2023-10-31 16:29:06<SeP>2023-11-02 04:00:27<SeP>2023-11-03 15:31:48<SeP>2023-11-05 02:03:09<SeP>2023-11-06 13:34:30<SeP>2023-11-08 01:05:51<SeP>2023-11-09 12:37:12<SeP>2023-11-11 00:08:33<SeP>2023-11-12 11:39:54<SeP>2023-11-13 23:11:15<SeP>2023-11-15 10:42:36<SeP>2023-11-16 22:13:57<SeP>2023-11-18 09:45:18<SeP>2023-11-19 21:16:39<SeP>2023-11-21 08:48:00<SeP>2023-11-22 20:19:21<SeP>2023-11-24 07:50:42<SeP>2023-11-25 19:22:03<SeP>2023-11-27 06:53:24<SeP>2023-11-28 18:24:45<SeP>2023-11-30 05:56:06<SeP>2023-12-01 17:27:27<SeP>2023-12-03 04:58:48<SeP>2023-12-04 16:30:09<SeP>2023-12-06 04:01:30<SeP>2023-12-07 15:32:51<SeP>2023-12-09 03:04:12<SeP>2023-12-10 14:35:33<SeP>2023-12-12 02:06:54<SeP>2023-12-13 13:38:15<SeP>2023-12-15 01:09:36<SeP>2023-12-16 12:40:57<SeP>2023-12-18 00:12:18<SeP>2023-12-19 11:43:39<SeP>2023-12-20 23:15:00<SeP>2023-12-22 10:46:21<SeP>2023-12-23 22:17:42<SeP>2023-12-25 09:49:03<SeP>2023-12-26 21:20:24<SeP>2023-12-28 08:51:45<SeP>2023-12-29 20:23:06<SeP>2023-12-31 07:54:27<SeP>2024-01-01 19:25:48<SeP>2024-01-03 06:57:09<SeP>2024-01-04 18:28:30<SeP>2024-01-06 05:59:51<SeP>2024-01-07 17:31:12<SeP>2024-01-09 05:02:33<SeP>2024-01-10 16:33:54<SeP>2024-01-12 04:05:15<SeP>2024-01-13 15:36:36<SeP>2024-01-15 03:07:57<SeP>2024-01-16 14:39:18<SeP>2024-01-18 02:10:39<SeP>2024-01-19 13:42:00<SeP>2024-01-21 01:13:21<SeP>2024-01-22 12:44:42<SeP>2024-01-24 00:16:03<SeP>2024-01-25 11:47:24<SeP>2024-01-26 23:18:45<SeP>2024-01-28 10:50:06<SeP>2024-01-29 22:21:27<SeP>2024-01-31 09:52:48<SeP>2024-02-01 21:24:09<SeP>2024-02-03 08:55:30<SeP>2024-02-04 20:26:51<SeP>2024-02-06 07:58:12<SeP>2024-02-07 19:29:33<SeP>2024-02-09 07:00:54<SeP>2024-02-10 18:32:15<SeP>2024-02-12 06:03:36<SeP>2024-02-13 17:34:57<SeP>2024-02-15 05:06:18<SeP>2024-02-16 16:37:39<SeP>2024-02-18 04:09:00<SeP>2024-02-19 15:40:21<SeP>2024-02-21 03:11:42<SeP>2024-02-22 14:43:03<SeP>2024-02-24 02:14:24<SeP>2024-02-25 13:45:45<SeP>2024-02-27 01:17:06<SeP>2024-02-28 12:48:27<SeP>2024-03-01 00:19:48<SeP>2024-03-02 11:51:09<SeP>2024-03-03 23:22:30<SeP>2024-03-05 10:53:51<SeP>2024-03-06 22:25:12<SeP>2024-03-08 09:56:33<SeP>2024-03-09 21:27:54<SeP>2024-03-11 09:59:15<SeP>2024-03-12 21:30:36<SeP>2024-03-14 09:01:57<SeP>2024-03-15 20:33:18<SeP>2024-03-17 08:04:39<SeP>2024-03-18 19:36:00<SeP>2024-03-20 07:07:21<SeP>2024-03-21 18:38:42<SeP>2024-03-23 06:10:03<SeP>2024-03-24 17:41:24<SeP>2024-03-26 05:12:45<SeP>2024-03-27 16:44:06<SeP>2024-03-29 04:15:27<SeP>2024-03-30 15:46:48<SeP>2024-04-01 03:18:09<SeP>2024-04-02 14:49:30<SeP>2024-04-04 02:20:51<SeP>2024-04-05 13:52:12<SeP>2024-04-07 01:23:33<SeP>2024-04-08 12:54:54<SeP>2024-04-10 00:26:15<SeP>2024-04-11 11:57:36<SeP>2024-04-12 23:28:57<SeP>2024-04-14 11:00:18<SeP>2024-04-15 22:31:39<SeP>2024-04-17 10:03:00<SeP>2024-04-18 21:34:21<SeP>2024-04-20 09:05:42<SeP>2024-04-21 20:37:03<SeP>2024-04-23 08:08:24<SeP>2024-04-24 19:39:45<SeP>2024-04-26 07:11:06<SeP>2024-04-27 18:42:27<SeP>2024-04-29 06:13:48<SeP>2024-04-30 17:45:09<SeP>2024-05-02 05:16:30<SeP>2024-05-03 16:47:51<SeP>2024-05-05 04:19:12<SeP>2024-05-06 15:50:33<SeP>2024-05-08 03:21:54<SeP>2024-05-09 14:53:15<SeP>2024-05-11 02:24:36<SeP>2024-05-12 13:55:57<SeP>2024-05-14 01:27:18<SeP>2024-05-15 12:58:39<SeP>2024-05-17 00:30:00<SeP>2024-05-18 12:01:21<SeP>2024-05-19 23:32:42<SeP>2024-05-21 11:04:03<SeP>2024-05-22 22:35:24<SeP>2024-05-24 10:06:45<SeP>2024-05-25 21:38:06<SeP>2024-05-27 09:09:27<SeP>2024-05-28 20:40:48<SeP>2024-05-30 08:12:09<SeP>2024-05-31 19:43:30<SeP>2024-06-02 07:14:51<SeP>2024-06-03 18:46:12<SeP>2024-06-05 06:17:33<SeP>2024-06-06 17:48:54<SeP>2024-06-08 05:20:15<SeP>2024-06-09 16:51:36<SeP>2024-06-11 04:22:57<SeP>2024-06-12 15:54:18<SeP>2024-06-14 03:25:39<SeP>2024-06-15 14:57:00<SeP>2024-06-17 02:28:21<SeP>2024-06-18 13:59:42<SeP>2024-06-20 01:31:03<SeP>2024-06-21 13:02:24<SeP>2024-06-23 00:33:45<SeP>2024-06-24 12:05:06<SeP>2024-06-25 23:36:27<SeP>2024-06-27 11:07:48<SeP>2024-06-28 22:39:09<SeP>2024-06-30 10:10:30<SeP>2024-07-01 21:41:51<SeP>2024-07-03 09:13:12<SeP>2024-07-04 20:44:33<SeP>2024-07-06 08:15:54<SeP>2024-07-07 19:47:15<SeP>2024-07-09 07:18:36<SeP>2024-07-10 18:49:57<SeP>2024-07-12 06:21:18<SeP>2024-07-13 17:52:39<SeP>2024-07-15 05:24:00<SeP>2024-07-16 16:55:21<SeP>2024-07-18 04:26:42<SeP>2024-07-19 15:58:03<SeP>2024-07-21 03:29:24<SeP>2024-07-22 15:00:45<SeP>2024-07-24 02:32:06<SeP>2024-07-25 14:03:27<SeP>2024-07-27 01:34:48<SeP>2024-07-28 13:06:09<SeP>2024-07-30 00:37:30<SeP>2024-07-31 12:08:51<SeP>2024-08-01 23:40:12<SeP>2024-08-03 11:11:33<SeP>2024-08-04 22:42:54<SeP>2024-08-06 10:14:15<SeP>2024-08-07 21:45:36<SeP>2024-08-09 09:16:57<SeP>2024-08-10 20:48:18<SeP>2024-08-12 08:19:39<SeP>2024-08-13 19:51:00<SeP>2024-08-15 07:22:21<SeP>2024-08-16 18:53:42<SeP>2024-08-18 06:25:03<SeP>2024-08-19 17:56:24<SeP>2024-08-21 05:27:45<SeP>2024-08-22 16:59:06<SeP>2024-08-24 04:30:27<SeP>2024-08-25 16:01:48<SeP>2024-08-27 03:33:09<SeP>2024-08-28 15:04:30<SeP>2024-08-30 02:35:51<SeP>2024-08-31 14:07:12<SeP>2024-09-02 01:38:33<SeP>2024-09-03 13:09:54<SeP>2024-09-05 00:41:15<SeP>2024-09-06 12:12:36<SeP>2024-09-07 23:43:57<SeP>2024-09-09 11:15:18<SeP>2024-09-10 22:46:39<SeP>2024-09-12 10:18:00<SeP>2024-09-13 21:49:21<SeP>2024-09-15 09:20:42<SeP>2024-09-16 20:52:03<SeP>2024-09-18 08:23:24<SeP>2024-09-19 19:54:45<SeP>2024-09-21 07:26:06<SeP>2024-09-22 18:57:27<SeP>2024-09-24 06:28:48<SeP>2024-09-25 18:00:09<SeP>2024-09-27 05:31:30<SeP>2024-09-28 17:02:51<SeP>2024-09-30 04:34:12<SeP>2024-10-01 16:05:33<SeP>2024-10-03 03:36:54<SeP>2024-10-04 15:08:15<SeP>2024-10-06 02:39:36<SeP>2024-10-07 14:10:57<SeP>2024-10-09 01:42:18<SeP>2024-10-10 13:13:39<SeP>2024-10-12 00:45:00<SeP>2024-10-13 12:16:21<SeP>2024-10-14 23:47:42<SeP>2024-10-16 11:19:03<SeP>2024-10-17 22:50:24<SeP>2024-10-19 10:21:45<SeP>2024-10-20 21:53:06<SeP>2024-10-22 09:24:27<SeP>2024-10-23 20:55:48<SeP>2024-10-25 08:27:09<SeP>2024-10-26 19:58:30<SeP>2024-10-28 07:29:51<SeP>2024-10-29 19:01:12<SeP>2024-10-31 06:32:33<SeP>2024-11-01 18:03:54<SeP>2024-11-03 04:35:15<SeP>2024-11-04 16:06:36<SeP>2024-11-06 03:37:57<SeP>2024-11-07 15:09:18<SeP>2024-11-09 02:40:39<SeP>2024-11-10 14:12:00<SeP>2024-11-12 01:43:21<SeP>2024-11-13 13:14:42<SeP>2024-11-15 00:46:03<SeP>2024-11-16 12:17:24<SeP>2024-11-17 23:48:45<SeP>2024-11-19 11:20:06<SeP>2024-11-20 22:51:27<SeP>2024-11-22 10:22:48<SeP>2024-11-23 21:54:09<SeP>2024-11-25 09:25:30<SeP>2024-11-26 20:56:51<SeP>2024-11-28 08:28:12<SeP>2024-11-29 19:59:33<SeP>2024-12-01 07:30:54<SeP>2024-12-02 19:02:15<SeP>2024-12-04 06:33:36<SeP>2024-12-05 18:04:57<SeP>2024-12-07 05:36:18<SeP>2024-12-08 17:07:39<SeP>2024-12-10 04:39:00<SeP>2024-12-11 16:10:21<SeP>2024-12-13 03:41:42<SeP>2024-12-14 15:13:03<SeP>2024-12-16 02:44:24<SeP>2024-12-17 14:15:45<SeP>2024-12-19 01:47:06<SeP>2024-12-20 13:18:27<SeP>2024-12-22 00:49:48<SeP>2024-12-23 12:21:09<SeP>2024-12-24 23:52:30<SeP>2024-12-26 11:23:51<SeP>2024-12-27 22:55:12<SeP>2024-12-29 10:26:33<SeP>2024-12-30 21:57:54<SeP>2025-01-01 09:29:15<SeP>2025-01-02 21:00:36<SeP>2025-01-04 08:31:57<SeP>2025-01-05 20:03:18<SeP>2025-01-07 07:34:39<SeP>2025-01-08 19:06:00<SeP>2025-01-10 06:37:21<SeP>2025-01-11 18:08:42<SeP>2025-01-13 05:40:03<SeP>2025-01-14 17:11:24<SeP>2025-01-16 04:42:45<SeP>2025-01-17 16:14:06<SeP>2025-01-19 03:45:27<SeP>2025-01-20 15:16:48<SeP>2025-01-22 02:48:09<SeP>2025-01-23 14:19:30<SeP>2025-01-25 01:50:51<SeP>2025-01-26 13:22:12<SeP>2025-01-28 00:53:33<SeP>2025-01-29 12:24:54<SeP>2025-01-30 23:56:15<SeP>2025-02-01 11:27:36<SeP>2025-02-02 22:58:57<SeP>2025-02-04 10:30:18<SeP>2025-02-05 22:01:39<SeP>2025-02-07 09:33:00<SeP>2025-02-08 21:04:21<SeP>2025-02-10 08:35:42<SeP>2025-02-11 20:07:03<SeP>2025-02-13 07:38:24<SeP>2025-02-14 19:09:45<SeP>2025-02-16 06:41:06<SeP>2025-02-17 18:12:27<SeP>2025-02-19 05:43:48<SeP>2025-02-20 17:15:09<SeP>2025-02-22 04:46:30<SeP>2025-02-23 16:17:51<SeP>2025-02-25 03:49:12<SeP>2025-02-26 15:20:33<SeP>2025-02-28 02:51:54<SeP>2025-03-01 14:23:15<SeP>2025-03-03 01:54:36<SeP>2025-03-04 13:25:57<SeP>2025-03-06 00:57:18<SeP>2025-03-07 12:28:39";
  const itemLabel       = "Attacks";
  const itemData        = "171<SeP>598<SeP>1399<SeP>657<SeP>222<SeP>236<SeP>7018<SeP>582<SeP>9419<SeP>564<SeP>402<SeP>1133<SeP>1295<SeP>241<SeP>307<SeP>307<SeP>150<SeP>747<SeP>348<SeP>7909<SeP>6867<SeP>6836<SeP>9188<SeP>2689<SeP>287<SeP>416<SeP>173<SeP>382<SeP>5915<SeP>99<SeP>384<SeP>135<SeP>527<SeP>341<SeP>9645<SeP>9593<SeP>9930<SeP>9888<SeP>5795<SeP>6260<SeP>8578<SeP>7727<SeP>9657<SeP>7852<SeP>7529<SeP>9504<SeP>7914<SeP>8258<SeP>8596<SeP>5893<SeP>9653<SeP>9703<SeP>6170<SeP>8484<SeP>8113<SeP>9277<SeP>18429<SeP>16786<SeP>9274<SeP>11479<SeP>6710<SeP>8162<SeP>8664<SeP>9362<SeP>8869<SeP>5885<SeP>7271<SeP>7356<SeP>5845<SeP>3411<SeP>6288<SeP>5432<SeP>6526<SeP>7305<SeP>8352<SeP>2325<SeP>6366<SeP>6493<SeP>6252<SeP>5724<SeP>6470<SeP>4494<SeP>7408<SeP>5275<SeP>5590<SeP>5992<SeP>7175<SeP>21744<SeP>17028<SeP>27817<SeP>8721<SeP>6963<SeP>7075<SeP>12323<SeP>7918<SeP>3228<SeP>6859<SeP>3772<SeP>4620<SeP>7242<SeP>6604<SeP>6897<SeP>7142<SeP>5819<SeP>4236<SeP>7855<SeP>8401<SeP>7474<SeP>8587<SeP>3574<SeP>8405<SeP>9963<SeP>7917<SeP>3007<SeP>4926<SeP>7761<SeP>7452<SeP>5784<SeP>8763<SeP>7911<SeP>1773<SeP>2786<SeP>976<SeP>1927<SeP>2707<SeP>1327<SeP>900<SeP>1137<SeP>1204<SeP>1854<SeP>601<SeP>1293<SeP>1166<SeP>1029<SeP>893<SeP>1144<SeP>1486<SeP>1322<SeP>969<SeP>2163<SeP>1682<SeP>6001<SeP>11052<SeP>7864<SeP>8400<SeP>7165<SeP>12699<SeP>2903<SeP>11671<SeP>9948<SeP>9423<SeP>12528<SeP>8138<SeP>13154<SeP>12170<SeP>6969<SeP>12190<SeP>5385<SeP>5368<SeP>7024<SeP>25462<SeP>6609<SeP>8327<SeP>9104<SeP>17433<SeP>8437<SeP>7148<SeP>7011<SeP>5941<SeP>16774<SeP>17584<SeP>7672<SeP>11484<SeP>5351<SeP>6992<SeP>5399<SeP>16149<SeP>5084<SeP>7389<SeP>14042<SeP>6732<SeP>8546<SeP>7522<SeP>4321<SeP>4334<SeP>6877<SeP>7396<SeP>6107<SeP>5926<SeP>8097<SeP>18457<SeP>6843<SeP>9057<SeP>5069<SeP>7906<SeP>9341<SeP>8466<SeP>5833<SeP>2911<SeP>7656<SeP>2786<SeP>5266<SeP>4107<SeP>672<SeP>115<SeP>641<SeP>214<SeP>649<SeP>1013<SeP>372<SeP>607<SeP>1010<SeP>1410<SeP>3228<SeP>22838<SeP>667<SeP>3449<SeP>3563<SeP>3036<SeP>7202<SeP>3028<SeP>4278<SeP>2522<SeP>3899<SeP>2809<SeP>2924<SeP>4774<SeP>2679<SeP>2173<SeP>3565<SeP>1877<SeP>2058<SeP>1926<SeP>1306<SeP>1422<SeP>1387<SeP>872<SeP>1863<SeP>15333<SeP>12764<SeP>2378<SeP>3825<SeP>3648<SeP>2587<SeP>3853<SeP>1727<SeP>3396<SeP>2902<SeP>3295<SeP>2522<SeP>2952<SeP>3195<SeP>3288<SeP>6768<SeP>4769<SeP>4029<SeP>3743<SeP>3028<SeP>3658<SeP>3456<SeP>6674<SeP>8535<SeP>4647<SeP>2161<SeP>3366<SeP>3377<SeP>4650<SeP>3149<SeP>3350<SeP>2419<SeP>5056<SeP>4663<SeP>3407<SeP>5633<SeP>5059<SeP>5389<SeP>4895<SeP>5415<SeP>9375<SeP>18211<SeP>11929<SeP>4020<SeP>1841<SeP>5130<SeP>3413<SeP>3753<SeP>4255<SeP>5028<SeP>3972<SeP>4566<SeP>4252<SeP>3556<SeP>3315<SeP>1270<SeP>2118<SeP>3120<SeP>2860<SeP>2900<SeP>3258<SeP>4369<SeP>4150<SeP>3102<SeP>4613<SeP>3443<SeP>3167<SeP>4152<SeP>8216<SeP>6235<SeP>5539<SeP>5188<SeP>4821<SeP>3711<SeP>3613<SeP>4670<SeP>5806<SeP>5241<SeP>5003<SeP>3962<SeP>1797<SeP>489<SeP>2307<SeP>1514<SeP>682<SeP>1856<SeP>1800<SeP>1074<SeP>2878<SeP>4327<SeP>6346<SeP>20771<SeP>18135<SeP>5636<SeP>13531<SeP>14730<SeP>5436<SeP>6336<SeP>4708<SeP>22339<SeP>6862<SeP>5545<SeP>4530<SeP>4786<SeP>6391<SeP>28123<SeP>7276<SeP>4046<SeP>3953<SeP>3818<SeP>5738<SeP>4751<SeP>3808<SeP>2635<SeP>4572<SeP>5721<SeP>4629<SeP>18077<SeP>5464<SeP>6424<SeP>5534<SeP>1390<SeP>3932<SeP>4122<SeP>4224<SeP>4532<SeP>2899<SeP>3567<SeP>2908<SeP>3918<SeP>3629<SeP>7409<SeP>9196<SeP>9613<SeP>8659<SeP>8856<SeP>8199<SeP>5984<SeP>5136<SeP>4819<SeP>17364<SeP>11936<SeP>3240<SeP>4860<SeP>3281<SeP>11210<SeP>5676<SeP>3655<SeP>5112<SeP>4469<SeP>2736<SeP>9505<SeP>9834<SeP>4552<SeP>3068<SeP>3417<SeP>2292<SeP>2525<SeP>2528<SeP>2060<SeP>2557<SeP>1776";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:31:21<SeP>2023-07-28 23:02:42<SeP>2023-07-30 10:34:03<SeP>2023-07-31 22:05:24<SeP>2023-08-02 09:36:45<SeP>2023-08-03 21:08:06<SeP>2023-08-05 08:39:27<SeP>2023-08-06 20:10:48<SeP>2023-08-08 07:42:09<SeP>2023-08-09 19:13:30<SeP>2023-08-11 06:44:51<SeP>2023-08-12 18:16:12<SeP>2023-08-14 05:47:33<SeP>2023-08-15 17:18:54<SeP>2023-08-17 04:50:15<SeP>2023-08-18 16:21:36<SeP>2023-08-20 03:52:57<SeP>2023-08-21 15:24:18<SeP>2023-08-23 02:55:39<SeP>2023-08-24 14:27:00<SeP>2023-08-26 01:58:21<SeP>2023-08-27 13:29:42<SeP>2023-08-29 01:01:03<SeP>2023-08-30 12:32:24<SeP>2023-09-01 00:03:45<SeP>2023-09-02 11:35:06<SeP>2023-09-03 23:06:27<SeP>2023-09-05 10:37:48<SeP>2023-09-06 22:09:09<SeP>2023-09-08 09:40:30<SeP>2023-09-09 21:11:51<SeP>2023-09-11 08:43:12<SeP>2023-09-12 20:14:33<SeP>2023-09-14 07:45:54<SeP>2023-09-15 19:17:15<SeP>2023-09-17 06:48:36<SeP>2023-09-18 18:19:57<SeP>2023-09-20 05:51:18<SeP>2023-09-21 17:22:39<SeP>2023-09-23 04:54:00<SeP>2023-09-24 16:25:21<SeP>2023-09-26 03:56:42<SeP>2023-09-27 15:28:03<SeP>2023-09-29 02:59:24<SeP>2023-09-30 14:30:45<SeP>2023-10-02 02:02:06<SeP>2023-10-03 13:33:27<SeP>2023-10-05 01:04:48<SeP>2023-10-06 12:36:09<SeP>2023-10-08 00:07:30<SeP>2023-10-09 11:38:51<SeP>2023-10-10 23:10:12<SeP>2023-10-12 10:41:33<SeP>2023-10-13 22:12:54<SeP>2023-10-15 09:44:15<SeP>2023-10-16 21:15:36<SeP>2023-10-18 08:46:57<SeP>2023-10-19 20:18:18<SeP>2023-10-21 07:49:39<SeP>2023-10-22 19:21:00<SeP>2023-10-24 06:52:21<SeP>2023-10-25 18:23:42<SeP>2023-10-27 05:55:03<SeP>2023-10-28 17:26:24<SeP>2023-10-30 04:57:45<SeP>2023-10-31 16:29:06<SeP>2023-11-02 04:00:27<SeP>2023-11-03 15:31:48<SeP>2023-11-05 02:03:09<SeP>2023-11-06 13:34:30<SeP>2023-11-08 01:05:51<SeP>2023-11-09 12:37:12<SeP>2023-11-11 00:08:33<SeP>2023-11-12 11:39:54<SeP>2023-11-13 23:11:15<SeP>2023-11-15 10:42:36<SeP>2023-11-16 22:13:57<SeP>2023-11-18 09:45:18<SeP>2023-11-19 21:16:39<SeP>2023-11-21 08:48:00<SeP>2023-11-22 20:19:21<SeP>2023-11-24 07:50:42<SeP>2023-11-25 19:22:03<SeP>2023-11-27 06:53:24<SeP>2023-11-28 18:24:45<SeP>2023-11-30 05:56:06<SeP>2023-12-01 17:27:27<SeP>2023-12-03 04:58:48<SeP>2023-12-04 16:30:09<SeP>2023-12-06 04:01:30<SeP>2023-12-07 15:32:51<SeP>2023-12-09 03:04:12<SeP>2023-12-10 14:35:33<SeP>2023-12-12 02:06:54<SeP>2023-12-13 13:38:15<SeP>2023-12-15 01:09:36<SeP>2023-12-16 12:40:57<SeP>2023-12-18 00:12:18<SeP>2023-12-19 11:43:39<SeP>2023-12-20 23:15:00<SeP>2023-12-22 10:46:21<SeP>2023-12-23 22:17:42<SeP>2023-12-25 09:49:03<SeP>2023-12-26 21:20:24<SeP>2023-12-28 08:51:45<SeP>2023-12-29 20:23:06<SeP>2023-12-31 07:54:27<SeP>2024-01-01 19:25:48<SeP>2024-01-03 06:57:09<SeP>2024-01-04 18:28:30<SeP>2024-01-06 05:59:51<SeP>2024-01-07 17:31:12<SeP>2024-01-09 05:02:33<SeP>2024-01-10 16:33:54<SeP>2024-01-12 04:05:15<SeP>2024-01-13 15:36:36<SeP>2024-01-15 03:07:57<SeP>2024-01-16 14:39:18<SeP>2024-01-18 02:10:39<SeP>2024-01-19 13:42:00<SeP>2024-01-21 01:13:21<SeP>2024-01-22 12:44:42<SeP>2024-01-24 00:16:03<SeP>2024-01-25 11:47:24<SeP>2024-01-26 23:18:45<SeP>2024-01-28 10:50:06<SeP>2024-01-29 22:21:27<SeP>2024-01-31 09:52:48<SeP>2024-02-01 21:24:09<SeP>2024-02-03 08:55:30<SeP>2024-02-04 20:26:51<SeP>2024-02-06 07:58:12<SeP>2024-02-07 19:29:33<SeP>2024-02-09 07:00:54<SeP>2024-02-10 18:32:15<SeP>2024-02-12 06:03:36<SeP>2024-02-13 17:34:57<SeP>2024-02-15 05:06:18<SeP>2024-02-16 16:37:39<SeP>2024-02-18 04:09:00<SeP>2024-02-19 15:40:21<SeP>2024-02-21 03:11:42<SeP>2024-02-22 14:43:03<SeP>2024-02-24 02:14:24<SeP>2024-02-25 13:45:45<SeP>2024-02-27 01:17:06<SeP>2024-02-28 12:48:27<SeP>2024-03-01 00:19:48<SeP>2024-03-02 11:51:09<SeP>2024-03-03 23:22:30<SeP>2024-03-05 10:53:51<SeP>2024-03-06 22:25:12<SeP>2024-03-08 09:56:33<SeP>2024-03-09 21:27:54<SeP>2024-03-11 09:59:15<SeP>2024-03-12 21:30:36<SeP>2024-03-14 09:01:57<SeP>2024-03-15 20:33:18<SeP>2024-03-17 08:04:39<SeP>2024-03-18 19:36:00<SeP>2024-03-20 07:07:21<SeP>2024-03-21 18:38:42<SeP>2024-03-23 06:10:03<SeP>2024-03-24 17:41:24<SeP>2024-03-26 05:12:45<SeP>2024-03-27 16:44:06<SeP>2024-03-29 04:15:27<SeP>2024-03-30 15:46:48<SeP>2024-04-01 03:18:09<SeP>2024-04-02 14:49:30<SeP>2024-04-04 02:20:51<SeP>2024-04-05 13:52:12<SeP>2024-04-07 01:23:33<SeP>2024-04-08 12:54:54<SeP>2024-04-10 00:26:15<SeP>2024-04-11 11:57:36<SeP>2024-04-12 23:28:57<SeP>2024-04-14 11:00:18<SeP>2024-04-15 22:31:39<SeP>2024-04-17 10:03:00<SeP>2024-04-18 21:34:21<SeP>2024-04-20 09:05:42<SeP>2024-04-21 20:37:03<SeP>2024-04-23 08:08:24<SeP>2024-04-24 19:39:45<SeP>2024-04-26 07:11:06<SeP>2024-04-27 18:42:27<SeP>2024-04-29 06:13:48<SeP>2024-04-30 17:45:09<SeP>2024-05-02 05:16:30<SeP>2024-05-03 16:47:51<SeP>2024-05-05 04:19:12<SeP>2024-05-06 15:50:33<SeP>2024-05-08 03:21:54<SeP>2024-05-09 14:53:15<SeP>2024-05-11 02:24:36<SeP>2024-05-12 13:55:57<SeP>2024-05-14 01:27:18<SeP>2024-05-15 12:58:39<SeP>2024-05-17 00:30:00<SeP>2024-05-18 12:01:21<SeP>2024-05-19 23:32:42<SeP>2024-05-21 11:04:03<SeP>2024-05-22 22:35:24<SeP>2024-05-24 10:06:45<SeP>2024-05-25 21:38:06<SeP>2024-05-27 09:09:27<SeP>2024-05-28 20:40:48<SeP>2024-05-30 08:12:09<SeP>2024-05-31 19:43:30<SeP>2024-06-02 07:14:51<SeP>2024-06-03 18:46:12<SeP>2024-06-05 06:17:33<SeP>2024-06-06 17:48:54<SeP>2024-06-08 05:20:15<SeP>2024-06-09 16:51:36<SeP>2024-06-11 04:22:57<SeP>2024-06-12 15:54:18<SeP>2024-06-14 03:25:39<SeP>2024-06-15 14:57:00<SeP>2024-06-17 02:28:21<SeP>2024-06-18 13:59:42<SeP>2024-06-20 01:31:03<SeP>2024-06-21 13:02:24<SeP>2024-06-23 00:33:45<SeP>2024-06-24 12:05:06<SeP>2024-06-25 23:36:27<SeP>2024-06-27 11:07:48<SeP>2024-06-28 22:39:09<SeP>2024-06-30 10:10:30<SeP>2024-07-01 21:41:51<SeP>2024-07-03 09:13:12<SeP>2024-07-04 20:44:33<SeP>2024-07-06 08:15:54<SeP>2024-07-07 19:47:15<SeP>2024-07-09 07:18:36<SeP>2024-07-10 18:49:57<SeP>2024-07-12 06:21:18<SeP>2024-07-13 17:52:39<SeP>2024-07-15 05:24:00<SeP>2024-07-16 16:55:21<SeP>2024-07-18 04:26:42<SeP>2024-07-19 15:58:03<SeP>2024-07-21 03:29:24<SeP>2024-07-22 15:00:45<SeP>2024-07-24 02:32:06<SeP>2024-07-25 14:03:27<SeP>2024-07-27 01:34:48<SeP>2024-07-28 13:06:09<SeP>2024-07-30 00:37:30<SeP>2024-07-31 12:08:51<SeP>2024-08-01 23:40:12<SeP>2024-08-03 11:11:33<SeP>2024-08-04 22:42:54<SeP>2024-08-06 10:14:15<SeP>2024-08-07 21:45:36<SeP>2024-08-09 09:16:57<SeP>2024-08-10 20:48:18<SeP>2024-08-12 08:19:39<SeP>2024-08-13 19:51:00<SeP>2024-08-15 07:22:21<SeP>2024-08-16 18:53:42<SeP>2024-08-18 06:25:03<SeP>2024-08-19 17:56:24<SeP>2024-08-21 05:27:45<SeP>2024-08-22 16:59:06<SeP>2024-08-24 04:30:27<SeP>2024-08-25 16:01:48<SeP>2024-08-27 03:33:09<SeP>2024-08-28 15:04:30<SeP>2024-08-30 02:35:51<SeP>2024-08-31 14:07:12<SeP>2024-09-02 01:38:33<SeP>2024-09-03 13:09:54<SeP>2024-09-05 00:41:15<SeP>2024-09-06 12:12:36<SeP>2024-09-07 23:43:57<SeP>2024-09-09 11:15:18<SeP>2024-09-10 22:46:39<SeP>2024-09-12 10:18:00<SeP>2024-09-13 21:49:21<SeP>2024-09-15 09:20:42<SeP>2024-09-16 20:52:03<SeP>2024-09-18 08:23:24<SeP>2024-09-19 19:54:45<SeP>2024-09-21 07:26:06<SeP>2024-09-22 18:57:27<SeP>2024-09-24 06:28:48<SeP>2024-09-25 18:00:09<SeP>2024-09-27 05:31:30<SeP>2024-09-28 17:02:51<SeP>2024-09-30 04:34:12<SeP>2024-10-01 16:05:33<SeP>2024-10-03 03:36:54<SeP>2024-10-04 15:08:15<SeP>2024-10-06 02:39:36<SeP>2024-10-07 14:10:57<SeP>2024-10-09 01:42:18<SeP>2024-10-10 13:13:39<SeP>2024-10-12 00:45:00<SeP>2024-10-13 12:16:21<SeP>2024-10-14 23:47:42<SeP>2024-10-16 11:19:03<SeP>2024-10-17 22:50:24<SeP>2024-10-19 10:21:45<SeP>2024-10-20 21:53:06<SeP>2024-10-22 09:24:27<SeP>2024-10-23 20:55:48<SeP>2024-10-25 08:27:09<SeP>2024-10-26 19:58:30<SeP>2024-10-28 07:29:51<SeP>2024-10-29 19:01:12<SeP>2024-10-31 06:32:33<SeP>2024-11-01 18:03:54<SeP>2024-11-03 04:35:15<SeP>2024-11-04 16:06:36<SeP>2024-11-06 03:37:57<SeP>2024-11-07 15:09:18<SeP>2024-11-09 02:40:39<SeP>2024-11-10 14:12:00<SeP>2024-11-12 01:43:21<SeP>2024-11-13 13:14:42<SeP>2024-11-15 00:46:03<SeP>2024-11-16 12:17:24<SeP>2024-11-17 23:48:45<SeP>2024-11-19 11:20:06<SeP>2024-11-20 22:51:27<SeP>2024-11-22 10:22:48<SeP>2024-11-23 21:54:09<SeP>2024-11-25 09:25:30<SeP>2024-11-26 20:56:51<SeP>2024-11-28 08:28:12<SeP>2024-11-29 19:59:33<SeP>2024-12-01 07:30:54<SeP>2024-12-02 19:02:15<SeP>2024-12-04 06:33:36<SeP>2024-12-05 18:04:57<SeP>2024-12-07 05:36:18<SeP>2024-12-08 17:07:39<SeP>2024-12-10 04:39:00<SeP>2024-12-11 16:10:21<SeP>2024-12-13 03:41:42<SeP>2024-12-14 15:13:03<SeP>2024-12-16 02:44:24<SeP>2024-12-17 14:15:45<SeP>2024-12-19 01:47:06<SeP>2024-12-20 13:18:27<SeP>2024-12-22 00:49:48<SeP>2024-12-23 12:21:09<SeP>2024-12-24 23:52:30<SeP>2024-12-26 11:23:51<SeP>2024-12-27 22:55:12<SeP>2024-12-29 10:26:33<SeP>2024-12-30 21:57:54<SeP>2025-01-01 09:29:15<SeP>2025-01-02 21:00:36<SeP>2025-01-04 08:31:57<SeP>2025-01-05 20:03:18<SeP>2025-01-07 07:34:39<SeP>2025-01-08 19:06:00<SeP>2025-01-10 06:37:21<SeP>2025-01-11 18:08:42<SeP>2025-01-13 05:40:03<SeP>2025-01-14 17:11:24<SeP>2025-01-16 04:42:45<SeP>2025-01-17 16:14:06<SeP>2025-01-19 03:45:27<SeP>2025-01-20 15:16:48<SeP>2025-01-22 02:48:09<SeP>2025-01-23 14:19:30<SeP>2025-01-25 01:50:51<SeP>2025-01-26 13:22:12<SeP>2025-01-28 00:53:33<SeP>2025-01-29 12:24:54<SeP>2025-01-30 23:56:15<SeP>2025-02-01 11:27:36<SeP>2025-02-02 22:58:57<SeP>2025-02-04 10:30:18<SeP>2025-02-05 22:01:39<SeP>2025-02-07 09:33:00<SeP>2025-02-08 21:04:21<SeP>2025-02-10 08:35:42<SeP>2025-02-11 20:07:03<SeP>2025-02-13 07:38:24<SeP>2025-02-14 19:09:45<SeP>2025-02-16 06:41:06<SeP>2025-02-17 18:12:27<SeP>2025-02-19 05:43:48<SeP>2025-02-20 17:15:09<SeP>2025-02-22 04:46:30<SeP>2025-02-23 16:17:51<SeP>2025-02-25 03:49:12<SeP>2025-02-26 15:20:33<SeP>2025-02-28 02:51:54<SeP>2025-03-01 14:23:15<SeP>2025-03-03 01:54:36<SeP>2025-03-04 13:25:57<SeP>2025-03-06 00:57:18<SeP>2025-03-07 12:28:39";
  const item1Label       = "Escaneos";
  const item1Data        = "774<SeP>1518<SeP>1377<SeP>1500<SeP>1220<SeP>1757<SeP>937<SeP>998<SeP>1135<SeP>3402<SeP>3138<SeP>1301<SeP>3305<SeP>883<SeP>774<SeP>893<SeP>1428<SeP>2934<SeP>1799<SeP>1313<SeP>1184<SeP>899<SeP>1075<SeP>1249<SeP>903<SeP>796<SeP>964<SeP>3679<SeP>900<SeP>830<SeP>1289<SeP>1330<SeP>865<SeP>1397<SeP>2784<SeP>2937<SeP>1804<SeP>1506<SeP>1706<SeP>1321<SeP>1736<SeP>1878<SeP>2138<SeP>1595<SeP>1768<SeP>1590<SeP>1639<SeP>1783<SeP>1677<SeP>2081<SeP>1628<SeP>1661<SeP>2841<SeP>2124<SeP>1414<SeP>1750<SeP>2109<SeP>2327<SeP>1481<SeP>3594<SeP>1674<SeP>1423<SeP>1636<SeP>1258<SeP>1882<SeP>1611<SeP>1443<SeP>1310<SeP>1494<SeP>1148<SeP>2364<SeP>1241<SeP>1119<SeP>1368<SeP>4145<SeP>5306<SeP>1381<SeP>1344<SeP>1595<SeP>2089<SeP>1139<SeP>5632<SeP>2588<SeP>1709<SeP>976<SeP>1123<SeP>3304<SeP>1337<SeP>952<SeP>1028<SeP>1080<SeP>1073<SeP>2985<SeP>1248<SeP>1391<SeP>2871<SeP>6620<SeP>1256<SeP>1008<SeP>937<SeP>921<SeP>1014<SeP>980<SeP>1014<SeP>1033<SeP>4298<SeP>1888<SeP>1385<SeP>1557<SeP>515<SeP>1380<SeP>1345<SeP>1185<SeP>920<SeP>1912<SeP>1496<SeP>1264<SeP>1047<SeP>971<SeP>1172<SeP>692<SeP>879<SeP>858<SeP>821<SeP>1132<SeP>845<SeP>943<SeP>747<SeP>936<SeP>852<SeP>684<SeP>861<SeP>850<SeP>883<SeP>879<SeP>851<SeP>860<SeP>775<SeP>849<SeP>1055<SeP>836<SeP>860<SeP>885<SeP>979<SeP>968<SeP>999<SeP>968<SeP>549<SeP>916<SeP>863<SeP>1217<SeP>911<SeP>981<SeP>1223<SeP>1316<SeP>886<SeP>979<SeP>851<SeP>972<SeP>747<SeP>1114<SeP>984<SeP>978<SeP>901<SeP>987<SeP>1037<SeP>1049<SeP>1026<SeP>1026<SeP>1111<SeP>960<SeP>884<SeP>2139<SeP>1188<SeP>1242<SeP>1081<SeP>979<SeP>1164<SeP>1025<SeP>848<SeP>739<SeP>904<SeP>1083<SeP>952<SeP>876<SeP>1172<SeP>1311<SeP>1081<SeP>1144<SeP>1307<SeP>1221<SeP>1271<SeP>1346<SeP>1295<SeP>1555<SeP>1941<SeP>1429<SeP>1206<SeP>771<SeP>1117<SeP>904<SeP>1066<SeP>615<SeP>789<SeP>1027<SeP>831<SeP>3784<SeP>4535<SeP>2117<SeP>1556<SeP>1141<SeP>860<SeP>1065<SeP>929<SeP>990<SeP>1051<SeP>1063<SeP>1012<SeP>1062<SeP>2399<SeP>1093<SeP>1237<SeP>1136<SeP>1384<SeP>1051<SeP>1163<SeP>929<SeP>1160<SeP>1128<SeP>1008<SeP>1110<SeP>1009<SeP>1243<SeP>861<SeP>1410<SeP>1042<SeP>1134<SeP>1115<SeP>1352<SeP>1275<SeP>1143<SeP>1624<SeP>1169<SeP>1120<SeP>1196<SeP>1784<SeP>1489<SeP>1466<SeP>1989<SeP>1509<SeP>1588<SeP>2016<SeP>1335<SeP>1222<SeP>1079<SeP>1358<SeP>1409<SeP>1343<SeP>1321<SeP>1367<SeP>1858<SeP>1495<SeP>1469<SeP>1300<SeP>1511<SeP>1204<SeP>1064<SeP>1369<SeP>1103<SeP>1243<SeP>1265<SeP>1298<SeP>1143<SeP>1956<SeP>1369<SeP>1373<SeP>1643<SeP>1455<SeP>1227<SeP>1127<SeP>893<SeP>920<SeP>932<SeP>952<SeP>1080<SeP>1822<SeP>1099<SeP>1124<SeP>1177<SeP>810<SeP>1016<SeP>1001<SeP>1323<SeP>877<SeP>913<SeP>1158<SeP>1387<SeP>1645<SeP>1270<SeP>1088<SeP>1039<SeP>1142<SeP>1796<SeP>967<SeP>1212<SeP>1036<SeP>1563<SeP>1084<SeP>935<SeP>1228<SeP>1119<SeP>881<SeP>870<SeP>1146<SeP>1435<SeP>1565<SeP>1478<SeP>1432<SeP>1238<SeP>940<SeP>1157<SeP>1213<SeP>1194<SeP>1173<SeP>1026<SeP>1042<SeP>1148<SeP>1552<SeP>1306<SeP>1527<SeP>1364<SeP>1478<SeP>1569<SeP>1501<SeP>1234<SeP>1533<SeP>1528<SeP>1345<SeP>1430<SeP>1534<SeP>1595<SeP>1539<SeP>1350<SeP>1492<SeP>1377<SeP>1158<SeP>1325<SeP>1421<SeP>1711<SeP>1346<SeP>1318<SeP>1241<SeP>1452<SeP>1168<SeP>1340<SeP>1411<SeP>1780<SeP>1778<SeP>1261<SeP>641<SeP>1423<SeP>1954<SeP>1176<SeP>1463<SeP>1195<SeP>1194<SeP>1298<SeP>1463<SeP>1223<SeP>1583<SeP>1766<SeP>1351<SeP>1629<SeP>1671<SeP>1395<SeP>1390<SeP>1502<SeP>1671<SeP>1758<SeP>981<SeP>1126<SeP>2030<SeP>1973<SeP>1649<SeP>1777<SeP>1721<SeP>1551<SeP>1637<SeP>1627<SeP>1616<SeP>1524<SeP>1756<SeP>1809<SeP>1628<SeP>1457<SeP>1494<SeP>1461<SeP>1513<SeP>1671<SeP>2082";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "171<SeP>598<SeP>1399<SeP>657<SeP>222<SeP>236<SeP>7018<SeP>582<SeP>9419<SeP>564<SeP>402<SeP>1133<SeP>1295<SeP>241<SeP>307<SeP>307<SeP>150<SeP>747<SeP>348<SeP>7909<SeP>6867<SeP>6836<SeP>9188<SeP>2689<SeP>287<SeP>416<SeP>173<SeP>382<SeP>5915<SeP>99<SeP>384<SeP>135<SeP>527<SeP>341<SeP>9645<SeP>9593<SeP>9930<SeP>9888<SeP>5795<SeP>6260<SeP>8578<SeP>7727<SeP>9657<SeP>7852<SeP>7529<SeP>9504<SeP>7914<SeP>8258<SeP>8596<SeP>5893<SeP>9653<SeP>9703<SeP>6170<SeP>8484<SeP>8113<SeP>9277<SeP>18429<SeP>16786<SeP>9274<SeP>11479<SeP>6710<SeP>8162<SeP>8664<SeP>9362<SeP>8869<SeP>5885<SeP>7271<SeP>7356<SeP>5845<SeP>3411<SeP>6288<SeP>5432<SeP>6526<SeP>7305<SeP>8352<SeP>2325<SeP>6366<SeP>6493<SeP>6252<SeP>5724<SeP>6470<SeP>4494<SeP>7408<SeP>5275<SeP>5590<SeP>5992<SeP>7175<SeP>21744<SeP>17028<SeP>27817<SeP>8721<SeP>6963<SeP>7075<SeP>12323<SeP>7918<SeP>3228<SeP>6859<SeP>3772<SeP>4620<SeP>7242<SeP>6604<SeP>6897<SeP>7142<SeP>5819<SeP>4236<SeP>7855<SeP>8401<SeP>7474<SeP>8587<SeP>3574<SeP>8405<SeP>9963<SeP>7917<SeP>3007<SeP>4926<SeP>7761<SeP>7452<SeP>5784<SeP>8763<SeP>7911<SeP>1773<SeP>2786<SeP>976<SeP>1927<SeP>2707<SeP>1327<SeP>900<SeP>1137<SeP>1204<SeP>1854<SeP>601<SeP>1293<SeP>1166<SeP>1029<SeP>893<SeP>1144<SeP>1486<SeP>1322<SeP>969<SeP>2163<SeP>1682<SeP>6001<SeP>11052<SeP>7864<SeP>8400<SeP>7165<SeP>12699<SeP>2903<SeP>11671<SeP>9948<SeP>9423<SeP>12528<SeP>8138<SeP>13154<SeP>12170<SeP>6969<SeP>12190<SeP>5385<SeP>5368<SeP>7024<SeP>25462<SeP>6609<SeP>8327<SeP>9104<SeP>17433<SeP>8437<SeP>7148<SeP>7011<SeP>5941<SeP>16774<SeP>17584<SeP>7672<SeP>11484<SeP>5351<SeP>6992<SeP>5399<SeP>16149<SeP>5084<SeP>7389<SeP>14042<SeP>6732<SeP>8546<SeP>7522<SeP>4321<SeP>4334<SeP>6877<SeP>7396<SeP>6107<SeP>5926<SeP>8097<SeP>18457<SeP>6843<SeP>9057<SeP>5069<SeP>7906<SeP>9341<SeP>8466<SeP>5833<SeP>2911<SeP>7656<SeP>2786<SeP>5266<SeP>4107<SeP>672<SeP>115<SeP>641<SeP>214<SeP>649<SeP>1013<SeP>372<SeP>607<SeP>1010<SeP>1410<SeP>3228<SeP>22838<SeP>667<SeP>3449<SeP>3563<SeP>3036<SeP>7202<SeP>3028<SeP>4278<SeP>2522<SeP>3899<SeP>2809<SeP>2924<SeP>4774<SeP>2679<SeP>2173<SeP>3565<SeP>1877<SeP>2058<SeP>1926<SeP>1306<SeP>1422<SeP>1387<SeP>872<SeP>1863<SeP>15333<SeP>12764<SeP>2378<SeP>3825<SeP>3648<SeP>2587<SeP>3853<SeP>1727<SeP>3396<SeP>2902<SeP>3295<SeP>2522<SeP>2952<SeP>3195<SeP>3288<SeP>6768<SeP>4769<SeP>4029<SeP>3743<SeP>3028<SeP>3658<SeP>3456<SeP>6674<SeP>8535<SeP>4647<SeP>2161<SeP>3366<SeP>3377<SeP>4650<SeP>3149<SeP>3350<SeP>2419<SeP>5056<SeP>4663<SeP>3407<SeP>5633<SeP>5059<SeP>5389<SeP>4895<SeP>5415<SeP>9375<SeP>18211<SeP>11929<SeP>4020<SeP>1841<SeP>5130<SeP>3413<SeP>3753<SeP>4255<SeP>5028<SeP>3972<SeP>4566<SeP>4252<SeP>3556<SeP>3315<SeP>1270<SeP>2118<SeP>3120<SeP>2860<SeP>2900<SeP>3258<SeP>4369<SeP>4150<SeP>3102<SeP>4613<SeP>3443<SeP>3167<SeP>4152<SeP>8216<SeP>6235<SeP>5539<SeP>5188<SeP>4821<SeP>3711<SeP>3613<SeP>4670<SeP>5806<SeP>5241<SeP>5003<SeP>3962<SeP>1797<SeP>489<SeP>2307<SeP>1514<SeP>682<SeP>1856<SeP>1800<SeP>1074<SeP>2878<SeP>4327<SeP>6346<SeP>20771<SeP>18135<SeP>5636<SeP>13531<SeP>14730<SeP>5436<SeP>6336<SeP>4708<SeP>22339<SeP>6862<SeP>5545<SeP>4530<SeP>4786<SeP>6391<SeP>28123<SeP>7276<SeP>4046<SeP>3953<SeP>3818<SeP>5738<SeP>4751<SeP>3808<SeP>2635<SeP>4572<SeP>5721<SeP>4629<SeP>18077<SeP>5464<SeP>6424<SeP>5534<SeP>1390<SeP>3932<SeP>4122<SeP>4224<SeP>4532<SeP>2899<SeP>3567<SeP>2908<SeP>3918<SeP>3629<SeP>7409<SeP>9196<SeP>9613<SeP>8659<SeP>8856<SeP>8199<SeP>5984<SeP>5136<SeP>4819<SeP>17364<SeP>11936<SeP>3240<SeP>4860<SeP>3281<SeP>11210<SeP>5676<SeP>3655<SeP>5112<SeP>4469<SeP>2736<SeP>9505<SeP>9834<SeP>4552<SeP>3068<SeP>3417<SeP>2292<SeP>2525<SeP>2528<SeP>2060<SeP>2557<SeP>1776";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:31:21<SeP>2023-07-28 23:02:42<SeP>2023-07-30 10:34:03<SeP>2023-07-31 22:05:24<SeP>2023-08-02 09:36:45<SeP>2023-08-03 21:08:06<SeP>2023-08-05 08:39:27<SeP>2023-08-06 20:10:48<SeP>2023-08-08 07:42:09<SeP>2023-08-09 19:13:30<SeP>2023-08-11 06:44:51<SeP>2023-08-12 18:16:12<SeP>2023-08-14 05:47:33<SeP>2023-08-15 17:18:54<SeP>2023-08-17 04:50:15<SeP>2023-08-18 16:21:36<SeP>2023-08-20 03:52:57<SeP>2023-08-21 15:24:18<SeP>2023-08-23 02:55:39<SeP>2023-08-24 14:27:00<SeP>2023-08-26 01:58:21<SeP>2023-08-27 13:29:42<SeP>2023-08-29 01:01:03<SeP>2023-08-30 12:32:24<SeP>2023-09-01 00:03:45<SeP>2023-09-02 11:35:06<SeP>2023-09-03 23:06:27<SeP>2023-09-05 10:37:48<SeP>2023-09-06 22:09:09<SeP>2023-09-08 09:40:30<SeP>2023-09-09 21:11:51<SeP>2023-09-11 08:43:12<SeP>2023-09-12 20:14:33<SeP>2023-09-14 07:45:54<SeP>2023-09-15 19:17:15<SeP>2023-09-17 06:48:36<SeP>2023-09-18 18:19:57<SeP>2023-09-20 05:51:18<SeP>2023-09-21 17:22:39<SeP>2023-09-23 04:54:00<SeP>2023-09-24 16:25:21<SeP>2023-09-26 03:56:42<SeP>2023-09-27 15:28:03<SeP>2023-09-29 02:59:24<SeP>2023-09-30 14:30:45<SeP>2023-10-02 02:02:06<SeP>2023-10-03 13:33:27<SeP>2023-10-05 01:04:48<SeP>2023-10-06 12:36:09<SeP>2023-10-08 00:07:30<SeP>2023-10-09 11:38:51<SeP>2023-10-10 23:10:12<SeP>2023-10-12 10:41:33<SeP>2023-10-13 22:12:54<SeP>2023-10-15 09:44:15<SeP>2023-10-16 21:15:36<SeP>2023-10-18 08:46:57<SeP>2023-10-19 20:18:18<SeP>2023-10-21 07:49:39<SeP>2023-10-22 19:21:00<SeP>2023-10-24 06:52:21<SeP>2023-10-25 18:23:42<SeP>2023-10-27 05:55:03<SeP>2023-10-28 17:26:24<SeP>2023-10-30 04:57:45<SeP>2023-10-31 16:29:06<SeP>2023-11-02 04:00:27<SeP>2023-11-03 15:31:48<SeP>2023-11-05 02:03:09<SeP>2023-11-06 13:34:30<SeP>2023-11-08 01:05:51<SeP>2023-11-09 12:37:12<SeP>2023-11-11 00:08:33<SeP>2023-11-12 11:39:54<SeP>2023-11-13 23:11:15<SeP>2023-11-15 10:42:36<SeP>2023-11-16 22:13:57<SeP>2023-11-18 09:45:18<SeP>2023-11-19 21:16:39<SeP>2023-11-21 08:48:00<SeP>2023-11-22 20:19:21<SeP>2023-11-24 07:50:42<SeP>2023-11-25 19:22:03<SeP>2023-11-27 06:53:24<SeP>2023-11-28 18:24:45<SeP>2023-11-30 05:56:06<SeP>2023-12-01 17:27:27<SeP>2023-12-03 04:58:48<SeP>2023-12-04 16:30:09<SeP>2023-12-06 04:01:30<SeP>2023-12-07 15:32:51<SeP>2023-12-09 03:04:12<SeP>2023-12-10 14:35:33<SeP>2023-12-12 02:06:54<SeP>2023-12-13 13:38:15<SeP>2023-12-15 01:09:36<SeP>2023-12-16 12:40:57<SeP>2023-12-18 00:12:18<SeP>2023-12-19 11:43:39<SeP>2023-12-20 23:15:00<SeP>2023-12-22 10:46:21<SeP>2023-12-23 22:17:42<SeP>2023-12-25 09:49:03<SeP>2023-12-26 21:20:24<SeP>2023-12-28 08:51:45<SeP>2023-12-29 20:23:06<SeP>2023-12-31 07:54:27<SeP>2024-01-01 19:25:48<SeP>2024-01-03 06:57:09<SeP>2024-01-04 18:28:30<SeP>2024-01-06 05:59:51<SeP>2024-01-07 17:31:12<SeP>2024-01-09 05:02:33<SeP>2024-01-10 16:33:54<SeP>2024-01-12 04:05:15<SeP>2024-01-13 15:36:36<SeP>2024-01-15 03:07:57<SeP>2024-01-16 14:39:18<SeP>2024-01-18 02:10:39<SeP>2024-01-19 13:42:00<SeP>2024-01-21 01:13:21<SeP>2024-01-22 12:44:42<SeP>2024-01-24 00:16:03<SeP>2024-01-25 11:47:24<SeP>2024-01-26 23:18:45<SeP>2024-01-28 10:50:06<SeP>2024-01-29 22:21:27<SeP>2024-01-31 09:52:48<SeP>2024-02-01 21:24:09<SeP>2024-02-03 08:55:30<SeP>2024-02-04 20:26:51<SeP>2024-02-06 07:58:12<SeP>2024-02-07 19:29:33<SeP>2024-02-09 07:00:54<SeP>2024-02-10 18:32:15<SeP>2024-02-12 06:03:36<SeP>2024-02-13 17:34:57<SeP>2024-02-15 05:06:18<SeP>2024-02-16 16:37:39<SeP>2024-02-18 04:09:00<SeP>2024-02-19 15:40:21<SeP>2024-02-21 03:11:42<SeP>2024-02-22 14:43:03<SeP>2024-02-24 02:14:24<SeP>2024-02-25 13:45:45<SeP>2024-02-27 01:17:06<SeP>2024-02-28 12:48:27<SeP>2024-03-01 00:19:48<SeP>2024-03-02 11:51:09<SeP>2024-03-03 23:22:30<SeP>2024-03-05 10:53:51<SeP>2024-03-06 22:25:12<SeP>2024-03-08 09:56:33<SeP>2024-03-09 21:27:54<SeP>2024-03-11 09:59:15<SeP>2024-03-12 21:30:36<SeP>2024-03-14 09:01:57<SeP>2024-03-15 20:33:18<SeP>2024-03-17 08:04:39<SeP>2024-03-18 19:36:00<SeP>2024-03-20 07:07:21<SeP>2024-03-21 18:38:42<SeP>2024-03-23 06:10:03<SeP>2024-03-24 17:41:24<SeP>2024-03-26 05:12:45<SeP>2024-03-27 16:44:06<SeP>2024-03-29 04:15:27<SeP>2024-03-30 15:46:48<SeP>2024-04-01 03:18:09<SeP>2024-04-02 14:49:30<SeP>2024-04-04 02:20:51<SeP>2024-04-05 13:52:12<SeP>2024-04-07 01:23:33<SeP>2024-04-08 12:54:54<SeP>2024-04-10 00:26:15<SeP>2024-04-11 11:57:36<SeP>2024-04-12 23:28:57<SeP>2024-04-14 11:00:18<SeP>2024-04-15 22:31:39<SeP>2024-04-17 10:03:00<SeP>2024-04-18 21:34:21<SeP>2024-04-20 09:05:42<SeP>2024-04-21 20:37:03<SeP>2024-04-23 08:08:24<SeP>2024-04-24 19:39:45<SeP>2024-04-26 07:11:06<SeP>2024-04-27 18:42:27<SeP>2024-04-29 06:13:48<SeP>2024-04-30 17:45:09<SeP>2024-05-02 05:16:30<SeP>2024-05-03 16:47:51<SeP>2024-05-05 04:19:12<SeP>2024-05-06 15:50:33<SeP>2024-05-08 03:21:54<SeP>2024-05-09 14:53:15<SeP>2024-05-11 02:24:36<SeP>2024-05-12 13:55:57<SeP>2024-05-14 01:27:18<SeP>2024-05-15 12:58:39<SeP>2024-05-17 00:30:00<SeP>2024-05-18 12:01:21<SeP>2024-05-19 23:32:42<SeP>2024-05-21 11:04:03<SeP>2024-05-22 22:35:24<SeP>2024-05-24 10:06:45<SeP>2024-05-25 21:38:06<SeP>2024-05-27 09:09:27<SeP>2024-05-28 20:40:48<SeP>2024-05-30 08:12:09<SeP>2024-05-31 19:43:30<SeP>2024-06-02 07:14:51<SeP>2024-06-03 18:46:12<SeP>2024-06-05 06:17:33<SeP>2024-06-06 17:48:54<SeP>2024-06-08 05:20:15<SeP>2024-06-09 16:51:36<SeP>2024-06-11 04:22:57<SeP>2024-06-12 15:54:18<SeP>2024-06-14 03:25:39<SeP>2024-06-15 14:57:00<SeP>2024-06-17 02:28:21<SeP>2024-06-18 13:59:42<SeP>2024-06-20 01:31:03<SeP>2024-06-21 13:02:24<SeP>2024-06-23 00:33:45<SeP>2024-06-24 12:05:06<SeP>2024-06-25 23:36:27<SeP>2024-06-27 11:07:48<SeP>2024-06-28 22:39:09<SeP>2024-06-30 10:10:30<SeP>2024-07-01 21:41:51<SeP>2024-07-03 09:13:12<SeP>2024-07-04 20:44:33<SeP>2024-07-06 08:15:54<SeP>2024-07-07 19:47:15<SeP>2024-07-09 07:18:36<SeP>2024-07-10 18:49:57<SeP>2024-07-12 06:21:18<SeP>2024-07-13 17:52:39<SeP>2024-07-15 05:24:00<SeP>2024-07-16 16:55:21<SeP>2024-07-18 04:26:42<SeP>2024-07-19 15:58:03<SeP>2024-07-21 03:29:24<SeP>2024-07-22 15:00:45<SeP>2024-07-24 02:32:06<SeP>2024-07-25 14:03:27<SeP>2024-07-27 01:34:48<SeP>2024-07-28 13:06:09<SeP>2024-07-30 00:37:30<SeP>2024-07-31 12:08:51<SeP>2024-08-01 23:40:12<SeP>2024-08-03 11:11:33<SeP>2024-08-04 22:42:54<SeP>2024-08-06 10:14:15<SeP>2024-08-07 21:45:36<SeP>2024-08-09 09:16:57<SeP>2024-08-10 20:48:18<SeP>2024-08-12 08:19:39<SeP>2024-08-13 19:51:00<SeP>2024-08-15 07:22:21<SeP>2024-08-16 18:53:42<SeP>2024-08-18 06:25:03<SeP>2024-08-19 17:56:24<SeP>2024-08-21 05:27:45<SeP>2024-08-22 16:59:06<SeP>2024-08-24 04:30:27<SeP>2024-08-25 16:01:48<SeP>2024-08-27 03:33:09<SeP>2024-08-28 15:04:30<SeP>2024-08-30 02:35:51<SeP>2024-08-31 14:07:12<SeP>2024-09-02 01:38:33<SeP>2024-09-03 13:09:54<SeP>2024-09-05 00:41:15<SeP>2024-09-06 12:12:36<SeP>2024-09-07 23:43:57<SeP>2024-09-09 11:15:18<SeP>2024-09-10 22:46:39<SeP>2024-09-12 10:18:00<SeP>2024-09-13 21:49:21<SeP>2024-09-15 09:20:42<SeP>2024-09-16 20:52:03<SeP>2024-09-18 08:23:24<SeP>2024-09-19 19:54:45<SeP>2024-09-21 07:26:06<SeP>2024-09-22 18:57:27<SeP>2024-09-24 06:28:48<SeP>2024-09-25 18:00:09<SeP>2024-09-27 05:31:30<SeP>2024-09-28 17:02:51<SeP>2024-09-30 04:34:12<SeP>2024-10-01 16:05:33<SeP>2024-10-03 03:36:54<SeP>2024-10-04 15:08:15<SeP>2024-10-06 02:39:36<SeP>2024-10-07 14:10:57<SeP>2024-10-09 01:42:18<SeP>2024-10-10 13:13:39<SeP>2024-10-12 00:45:00<SeP>2024-10-13 12:16:21<SeP>2024-10-14 23:47:42<SeP>2024-10-16 11:19:03<SeP>2024-10-17 22:50:24<SeP>2024-10-19 10:21:45<SeP>2024-10-20 21:53:06<SeP>2024-10-22 09:24:27<SeP>2024-10-23 20:55:48<SeP>2024-10-25 08:27:09<SeP>2024-10-26 19:58:30<SeP>2024-10-28 07:29:51<SeP>2024-10-29 19:01:12<SeP>2024-10-31 06:32:33<SeP>2024-11-01 18:03:54<SeP>2024-11-03 04:35:15<SeP>2024-11-04 16:06:36<SeP>2024-11-06 03:37:57<SeP>2024-11-07 15:09:18<SeP>2024-11-09 02:40:39<SeP>2024-11-10 14:12:00<SeP>2024-11-12 01:43:21<SeP>2024-11-13 13:14:42<SeP>2024-11-15 00:46:03<SeP>2024-11-16 12:17:24<SeP>2024-11-17 23:48:45<SeP>2024-11-19 11:20:06<SeP>2024-11-20 22:51:27<SeP>2024-11-22 10:22:48<SeP>2024-11-23 21:54:09<SeP>2024-11-25 09:25:30<SeP>2024-11-26 20:56:51<SeP>2024-11-28 08:28:12<SeP>2024-11-29 19:59:33<SeP>2024-12-01 07:30:54<SeP>2024-12-02 19:02:15<SeP>2024-12-04 06:33:36<SeP>2024-12-05 18:04:57<SeP>2024-12-07 05:36:18<SeP>2024-12-08 17:07:39<SeP>2024-12-10 04:39:00<SeP>2024-12-11 16:10:21<SeP>2024-12-13 03:41:42<SeP>2024-12-14 15:13:03<SeP>2024-12-16 02:44:24<SeP>2024-12-17 14:15:45<SeP>2024-12-19 01:47:06<SeP>2024-12-20 13:18:27<SeP>2024-12-22 00:49:48<SeP>2024-12-23 12:21:09<SeP>2024-12-24 23:52:30<SeP>2024-12-26 11:23:51<SeP>2024-12-27 22:55:12<SeP>2024-12-29 10:26:33<SeP>2024-12-30 21:57:54<SeP>2025-01-01 09:29:15<SeP>2025-01-02 21:00:36<SeP>2025-01-04 08:31:57<SeP>2025-01-05 20:03:18<SeP>2025-01-07 07:34:39<SeP>2025-01-08 19:06:00<SeP>2025-01-10 06:37:21<SeP>2025-01-11 18:08:42<SeP>2025-01-13 05:40:03<SeP>2025-01-14 17:11:24<SeP>2025-01-16 04:42:45<SeP>2025-01-17 16:14:06<SeP>2025-01-19 03:45:27<SeP>2025-01-20 15:16:48<SeP>2025-01-22 02:48:09<SeP>2025-01-23 14:19:30<SeP>2025-01-25 01:50:51<SeP>2025-01-26 13:22:12<SeP>2025-01-28 00:53:33<SeP>2025-01-29 12:24:54<SeP>2025-01-30 23:56:15<SeP>2025-02-01 11:27:36<SeP>2025-02-02 22:58:57<SeP>2025-02-04 10:30:18<SeP>2025-02-05 22:01:39<SeP>2025-02-07 09:33:00<SeP>2025-02-08 21:04:21<SeP>2025-02-10 08:35:42<SeP>2025-02-11 20:07:03<SeP>2025-02-13 07:38:24<SeP>2025-02-14 19:09:45<SeP>2025-02-16 06:41:06<SeP>2025-02-17 18:12:27<SeP>2025-02-19 05:43:48<SeP>2025-02-20 17:15:09<SeP>2025-02-22 04:46:30<SeP>2025-02-23 16:17:51<SeP>2025-02-25 03:49:12<SeP>2025-02-26 15:20:33<SeP>2025-02-28 02:51:54<SeP>2025-03-01 14:23:15<SeP>2025-03-03 01:54:36<SeP>2025-03-04 13:25:57<SeP>2025-03-06 00:57:18<SeP>2025-03-07 12:28:39";
  const itemLabel       = "Escaneos";
  const itemData        = "774<SeP>1518<SeP>1377<SeP>1500<SeP>1220<SeP>1757<SeP>937<SeP>998<SeP>1135<SeP>3402<SeP>3138<SeP>1301<SeP>3305<SeP>883<SeP>774<SeP>893<SeP>1428<SeP>2934<SeP>1799<SeP>1313<SeP>1184<SeP>899<SeP>1075<SeP>1249<SeP>903<SeP>796<SeP>964<SeP>3679<SeP>900<SeP>830<SeP>1289<SeP>1330<SeP>865<SeP>1397<SeP>2784<SeP>2937<SeP>1804<SeP>1506<SeP>1706<SeP>1321<SeP>1736<SeP>1878<SeP>2138<SeP>1595<SeP>1768<SeP>1590<SeP>1639<SeP>1783<SeP>1677<SeP>2081<SeP>1628<SeP>1661<SeP>2841<SeP>2124<SeP>1414<SeP>1750<SeP>2109<SeP>2327<SeP>1481<SeP>3594<SeP>1674<SeP>1423<SeP>1636<SeP>1258<SeP>1882<SeP>1611<SeP>1443<SeP>1310<SeP>1494<SeP>1148<SeP>2364<SeP>1241<SeP>1119<SeP>1368<SeP>4145<SeP>5306<SeP>1381<SeP>1344<SeP>1595<SeP>2089<SeP>1139<SeP>5632<SeP>2588<SeP>1709<SeP>976<SeP>1123<SeP>3304<SeP>1337<SeP>952<SeP>1028<SeP>1080<SeP>1073<SeP>2985<SeP>1248<SeP>1391<SeP>2871<SeP>6620<SeP>1256<SeP>1008<SeP>937<SeP>921<SeP>1014<SeP>980<SeP>1014<SeP>1033<SeP>4298<SeP>1888<SeP>1385<SeP>1557<SeP>515<SeP>1380<SeP>1345<SeP>1185<SeP>920<SeP>1912<SeP>1496<SeP>1264<SeP>1047<SeP>971<SeP>1172<SeP>692<SeP>879<SeP>858<SeP>821<SeP>1132<SeP>845<SeP>943<SeP>747<SeP>936<SeP>852<SeP>684<SeP>861<SeP>850<SeP>883<SeP>879<SeP>851<SeP>860<SeP>775<SeP>849<SeP>1055<SeP>836<SeP>860<SeP>885<SeP>979<SeP>968<SeP>999<SeP>968<SeP>549<SeP>916<SeP>863<SeP>1217<SeP>911<SeP>981<SeP>1223<SeP>1316<SeP>886<SeP>979<SeP>851<SeP>972<SeP>747<SeP>1114<SeP>984<SeP>978<SeP>901<SeP>987<SeP>1037<SeP>1049<SeP>1026<SeP>1026<SeP>1111<SeP>960<SeP>884<SeP>2139<SeP>1188<SeP>1242<SeP>1081<SeP>979<SeP>1164<SeP>1025<SeP>848<SeP>739<SeP>904<SeP>1083<SeP>952<SeP>876<SeP>1172<SeP>1311<SeP>1081<SeP>1144<SeP>1307<SeP>1221<SeP>1271<SeP>1346<SeP>1295<SeP>1555<SeP>1941<SeP>1429<SeP>1206<SeP>771<SeP>1117<SeP>904<SeP>1066<SeP>615<SeP>789<SeP>1027<SeP>831<SeP>3784<SeP>4535<SeP>2117<SeP>1556<SeP>1141<SeP>860<SeP>1065<SeP>929<SeP>990<SeP>1051<SeP>1063<SeP>1012<SeP>1062<SeP>2399<SeP>1093<SeP>1237<SeP>1136<SeP>1384<SeP>1051<SeP>1163<SeP>929<SeP>1160<SeP>1128<SeP>1008<SeP>1110<SeP>1009<SeP>1243<SeP>861<SeP>1410<SeP>1042<SeP>1134<SeP>1115<SeP>1352<SeP>1275<SeP>1143<SeP>1624<SeP>1169<SeP>1120<SeP>1196<SeP>1784<SeP>1489<SeP>1466<SeP>1989<SeP>1509<SeP>1588<SeP>2016<SeP>1335<SeP>1222<SeP>1079<SeP>1358<SeP>1409<SeP>1343<SeP>1321<SeP>1367<SeP>1858<SeP>1495<SeP>1469<SeP>1300<SeP>1511<SeP>1204<SeP>1064<SeP>1369<SeP>1103<SeP>1243<SeP>1265<SeP>1298<SeP>1143<SeP>1956<SeP>1369<SeP>1373<SeP>1643<SeP>1455<SeP>1227<SeP>1127<SeP>893<SeP>920<SeP>932<SeP>952<SeP>1080<SeP>1822<SeP>1099<SeP>1124<SeP>1177<SeP>810<SeP>1016<SeP>1001<SeP>1323<SeP>877<SeP>913<SeP>1158<SeP>1387<SeP>1645<SeP>1270<SeP>1088<SeP>1039<SeP>1142<SeP>1796<SeP>967<SeP>1212<SeP>1036<SeP>1563<SeP>1084<SeP>935<SeP>1228<SeP>1119<SeP>881<SeP>870<SeP>1146<SeP>1435<SeP>1565<SeP>1478<SeP>1432<SeP>1238<SeP>940<SeP>1157<SeP>1213<SeP>1194<SeP>1173<SeP>1026<SeP>1042<SeP>1148<SeP>1552<SeP>1306<SeP>1527<SeP>1364<SeP>1478<SeP>1569<SeP>1501<SeP>1234<SeP>1533<SeP>1528<SeP>1345<SeP>1430<SeP>1534<SeP>1595<SeP>1539<SeP>1350<SeP>1492<SeP>1377<SeP>1158<SeP>1325<SeP>1421<SeP>1711<SeP>1346<SeP>1318<SeP>1241<SeP>1452<SeP>1168<SeP>1340<SeP>1411<SeP>1780<SeP>1778<SeP>1261<SeP>641<SeP>1423<SeP>1954<SeP>1176<SeP>1463<SeP>1195<SeP>1194<SeP>1298<SeP>1463<SeP>1223<SeP>1583<SeP>1766<SeP>1351<SeP>1629<SeP>1671<SeP>1395<SeP>1390<SeP>1502<SeP>1671<SeP>1758<SeP>981<SeP>1126<SeP>2030<SeP>1973<SeP>1649<SeP>1777<SeP>1721<SeP>1551<SeP>1637<SeP>1627<SeP>1616<SeP>1524<SeP>1756<SeP>1809<SeP>1628<SeP>1457<SeP>1494<SeP>1461<SeP>1513<SeP>1671<SeP>2082";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:31:21<SeP>2023-07-28 23:02:42<SeP>2023-07-30 10:34:03<SeP>2023-07-31 22:05:24<SeP>2023-08-02 09:36:45<SeP>2023-08-03 21:08:06<SeP>2023-08-05 08:39:27<SeP>2023-08-06 20:10:48<SeP>2023-08-08 07:42:09<SeP>2023-08-09 19:13:30<SeP>2023-08-11 06:44:51<SeP>2023-08-12 18:16:12<SeP>2023-08-14 05:47:33<SeP>2023-08-15 17:18:54<SeP>2023-08-17 04:50:15<SeP>2023-08-18 16:21:36<SeP>2023-08-20 03:52:57<SeP>2023-08-21 15:24:18<SeP>2023-08-23 02:55:39<SeP>2023-08-24 14:27:00<SeP>2023-08-26 01:58:21<SeP>2023-08-27 13:29:42<SeP>2023-08-29 01:01:03<SeP>2023-08-30 12:32:24<SeP>2023-09-01 00:03:45<SeP>2023-09-02 11:35:06<SeP>2023-09-03 23:06:27<SeP>2023-09-05 10:37:48<SeP>2023-09-06 22:09:09<SeP>2023-09-08 09:40:30<SeP>2023-09-09 21:11:51<SeP>2023-09-11 08:43:12<SeP>2023-09-12 20:14:33<SeP>2023-09-14 07:45:54<SeP>2023-09-15 19:17:15<SeP>2023-09-17 06:48:36<SeP>2023-09-18 18:19:57<SeP>2023-09-20 05:51:18<SeP>2023-09-21 17:22:39<SeP>2023-09-23 04:54:00<SeP>2023-09-24 16:25:21<SeP>2023-09-26 03:56:42<SeP>2023-09-27 15:28:03<SeP>2023-09-29 02:59:24<SeP>2023-09-30 14:30:45<SeP>2023-10-02 02:02:06<SeP>2023-10-03 13:33:27<SeP>2023-10-05 01:04:48<SeP>2023-10-06 12:36:09<SeP>2023-10-08 00:07:30<SeP>2023-10-09 11:38:51<SeP>2023-10-10 23:10:12<SeP>2023-10-12 10:41:33<SeP>2023-10-13 22:12:54<SeP>2023-10-15 09:44:15<SeP>2023-10-16 21:15:36<SeP>2023-10-18 08:46:57<SeP>2023-10-19 20:18:18<SeP>2023-10-21 07:49:39<SeP>2023-10-22 19:21:00<SeP>2023-10-24 06:52:21<SeP>2023-10-25 18:23:42<SeP>2023-10-27 05:55:03<SeP>2023-10-28 17:26:24<SeP>2023-10-30 04:57:45<SeP>2023-10-31 16:29:06<SeP>2023-11-02 04:00:27<SeP>2023-11-03 15:31:48<SeP>2023-11-05 02:03:09<SeP>2023-11-06 13:34:30<SeP>2023-11-08 01:05:51<SeP>2023-11-09 12:37:12<SeP>2023-11-11 00:08:33<SeP>2023-11-12 11:39:54<SeP>2023-11-13 23:11:15<SeP>2023-11-15 10:42:36<SeP>2023-11-16 22:13:57<SeP>2023-11-18 09:45:18<SeP>2023-11-19 21:16:39<SeP>2023-11-21 08:48:00<SeP>2023-11-22 20:19:21<SeP>2023-11-24 07:50:42<SeP>2023-11-25 19:22:03<SeP>2023-11-27 06:53:24<SeP>2023-11-28 18:24:45<SeP>2023-11-30 05:56:06<SeP>2023-12-01 17:27:27<SeP>2023-12-03 04:58:48<SeP>2023-12-04 16:30:09<SeP>2023-12-06 04:01:30<SeP>2023-12-07 15:32:51<SeP>2023-12-09 03:04:12<SeP>2023-12-10 14:35:33<SeP>2023-12-12 02:06:54<SeP>2023-12-13 13:38:15<SeP>2023-12-15 01:09:36<SeP>2023-12-16 12:40:57<SeP>2023-12-18 00:12:18<SeP>2023-12-19 11:43:39<SeP>2023-12-20 23:15:00<SeP>2023-12-22 10:46:21<SeP>2023-12-23 22:17:42<SeP>2023-12-25 09:49:03<SeP>2023-12-26 21:20:24<SeP>2023-12-28 08:51:45<SeP>2023-12-29 20:23:06<SeP>2023-12-31 07:54:27<SeP>2024-01-01 19:25:48<SeP>2024-01-03 06:57:09<SeP>2024-01-04 18:28:30<SeP>2024-01-06 05:59:51<SeP>2024-01-07 17:31:12<SeP>2024-01-09 05:02:33<SeP>2024-01-10 16:33:54<SeP>2024-01-12 04:05:15<SeP>2024-01-13 15:36:36<SeP>2024-01-15 03:07:57<SeP>2024-01-16 14:39:18<SeP>2024-01-18 02:10:39<SeP>2024-01-19 13:42:00<SeP>2024-01-21 01:13:21<SeP>2024-01-22 12:44:42<SeP>2024-01-24 00:16:03<SeP>2024-01-25 11:47:24<SeP>2024-01-26 23:18:45<SeP>2024-01-28 10:50:06<SeP>2024-01-29 22:21:27<SeP>2024-01-31 09:52:48<SeP>2024-02-01 21:24:09<SeP>2024-02-03 08:55:30<SeP>2024-02-04 20:26:51<SeP>2024-02-06 07:58:12<SeP>2024-02-07 19:29:33<SeP>2024-02-09 07:00:54<SeP>2024-02-10 18:32:15<SeP>2024-02-12 06:03:36<SeP>2024-02-13 17:34:57<SeP>2024-02-15 05:06:18<SeP>2024-02-16 16:37:39<SeP>2024-02-18 04:09:00<SeP>2024-02-19 15:40:21<SeP>2024-02-21 03:11:42<SeP>2024-02-22 14:43:03<SeP>2024-02-24 02:14:24<SeP>2024-02-25 13:45:45<SeP>2024-02-27 01:17:06<SeP>2024-02-28 12:48:27<SeP>2024-03-01 00:19:48<SeP>2024-03-02 11:51:09<SeP>2024-03-03 23:22:30<SeP>2024-03-05 10:53:51<SeP>2024-03-06 22:25:12<SeP>2024-03-08 09:56:33<SeP>2024-03-09 21:27:54<SeP>2024-03-11 09:59:15<SeP>2024-03-12 21:30:36<SeP>2024-03-14 09:01:57<SeP>2024-03-15 20:33:18<SeP>2024-03-17 08:04:39<SeP>2024-03-18 19:36:00<SeP>2024-03-20 07:07:21<SeP>2024-03-21 18:38:42<SeP>2024-03-23 06:10:03<SeP>2024-03-24 17:41:24<SeP>2024-03-26 05:12:45<SeP>2024-03-27 16:44:06<SeP>2024-03-29 04:15:27<SeP>2024-03-30 15:46:48<SeP>2024-04-01 03:18:09<SeP>2024-04-02 14:49:30<SeP>2024-04-04 02:20:51<SeP>2024-04-05 13:52:12<SeP>2024-04-07 01:23:33<SeP>2024-04-08 12:54:54<SeP>2024-04-10 00:26:15<SeP>2024-04-11 11:57:36<SeP>2024-04-12 23:28:57<SeP>2024-04-14 11:00:18<SeP>2024-04-15 22:31:39<SeP>2024-04-17 10:03:00<SeP>2024-04-18 21:34:21<SeP>2024-04-20 09:05:42<SeP>2024-04-21 20:37:03<SeP>2024-04-23 08:08:24<SeP>2024-04-24 19:39:45<SeP>2024-04-26 07:11:06<SeP>2024-04-27 18:42:27<SeP>2024-04-29 06:13:48<SeP>2024-04-30 17:45:09<SeP>2024-05-02 05:16:30<SeP>2024-05-03 16:47:51<SeP>2024-05-05 04:19:12<SeP>2024-05-06 15:50:33<SeP>2024-05-08 03:21:54<SeP>2024-05-09 14:53:15<SeP>2024-05-11 02:24:36<SeP>2024-05-12 13:55:57<SeP>2024-05-14 01:27:18<SeP>2024-05-15 12:58:39<SeP>2024-05-17 00:30:00<SeP>2024-05-18 12:01:21<SeP>2024-05-19 23:32:42<SeP>2024-05-21 11:04:03<SeP>2024-05-22 22:35:24<SeP>2024-05-24 10:06:45<SeP>2024-05-25 21:38:06<SeP>2024-05-27 09:09:27<SeP>2024-05-28 20:40:48<SeP>2024-05-30 08:12:09<SeP>2024-05-31 19:43:30<SeP>2024-06-02 07:14:51<SeP>2024-06-03 18:46:12<SeP>2024-06-05 06:17:33<SeP>2024-06-06 17:48:54<SeP>2024-06-08 05:20:15<SeP>2024-06-09 16:51:36<SeP>2024-06-11 04:22:57<SeP>2024-06-12 15:54:18<SeP>2024-06-14 03:25:39<SeP>2024-06-15 14:57:00<SeP>2024-06-17 02:28:21<SeP>2024-06-18 13:59:42<SeP>2024-06-20 01:31:03<SeP>2024-06-21 13:02:24<SeP>2024-06-23 00:33:45<SeP>2024-06-24 12:05:06<SeP>2024-06-25 23:36:27<SeP>2024-06-27 11:07:48<SeP>2024-06-28 22:39:09<SeP>2024-06-30 10:10:30<SeP>2024-07-01 21:41:51<SeP>2024-07-03 09:13:12<SeP>2024-07-04 20:44:33<SeP>2024-07-06 08:15:54<SeP>2024-07-07 19:47:15<SeP>2024-07-09 07:18:36<SeP>2024-07-10 18:49:57<SeP>2024-07-12 06:21:18<SeP>2024-07-13 17:52:39<SeP>2024-07-15 05:24:00<SeP>2024-07-16 16:55:21<SeP>2024-07-18 04:26:42<SeP>2024-07-19 15:58:03<SeP>2024-07-21 03:29:24<SeP>2024-07-22 15:00:45<SeP>2024-07-24 02:32:06<SeP>2024-07-25 14:03:27<SeP>2024-07-27 01:34:48<SeP>2024-07-28 13:06:09<SeP>2024-07-30 00:37:30<SeP>2024-07-31 12:08:51<SeP>2024-08-01 23:40:12<SeP>2024-08-03 11:11:33<SeP>2024-08-04 22:42:54<SeP>2024-08-06 10:14:15<SeP>2024-08-07 21:45:36<SeP>2024-08-09 09:16:57<SeP>2024-08-10 20:48:18<SeP>2024-08-12 08:19:39<SeP>2024-08-13 19:51:00<SeP>2024-08-15 07:22:21<SeP>2024-08-16 18:53:42<SeP>2024-08-18 06:25:03<SeP>2024-08-19 17:56:24<SeP>2024-08-21 05:27:45<SeP>2024-08-22 16:59:06<SeP>2024-08-24 04:30:27<SeP>2024-08-25 16:01:48<SeP>2024-08-27 03:33:09<SeP>2024-08-28 15:04:30<SeP>2024-08-30 02:35:51<SeP>2024-08-31 14:07:12<SeP>2024-09-02 01:38:33<SeP>2024-09-03 13:09:54<SeP>2024-09-05 00:41:15<SeP>2024-09-06 12:12:36<SeP>2024-09-07 23:43:57<SeP>2024-09-09 11:15:18<SeP>2024-09-10 22:46:39<SeP>2024-09-12 10:18:00<SeP>2024-09-13 21:49:21<SeP>2024-09-15 09:20:42<SeP>2024-09-16 20:52:03<SeP>2024-09-18 08:23:24<SeP>2024-09-19 19:54:45<SeP>2024-09-21 07:26:06<SeP>2024-09-22 18:57:27<SeP>2024-09-24 06:28:48<SeP>2024-09-25 18:00:09<SeP>2024-09-27 05:31:30<SeP>2024-09-28 17:02:51<SeP>2024-09-30 04:34:12<SeP>2024-10-01 16:05:33<SeP>2024-10-03 03:36:54<SeP>2024-10-04 15:08:15<SeP>2024-10-06 02:39:36<SeP>2024-10-07 14:10:57<SeP>2024-10-09 01:42:18<SeP>2024-10-10 13:13:39<SeP>2024-10-12 00:45:00<SeP>2024-10-13 12:16:21<SeP>2024-10-14 23:47:42<SeP>2024-10-16 11:19:03<SeP>2024-10-17 22:50:24<SeP>2024-10-19 10:21:45<SeP>2024-10-20 21:53:06<SeP>2024-10-22 09:24:27<SeP>2024-10-23 20:55:48<SeP>2024-10-25 08:27:09<SeP>2024-10-26 19:58:30<SeP>2024-10-28 07:29:51<SeP>2024-10-29 19:01:12<SeP>2024-10-31 06:32:33<SeP>2024-11-01 18:03:54<SeP>2024-11-03 04:35:15<SeP>2024-11-04 16:06:36<SeP>2024-11-06 03:37:57<SeP>2024-11-07 15:09:18<SeP>2024-11-09 02:40:39<SeP>2024-11-10 14:12:00<SeP>2024-11-12 01:43:21<SeP>2024-11-13 13:14:42<SeP>2024-11-15 00:46:03<SeP>2024-11-16 12:17:24<SeP>2024-11-17 23:48:45<SeP>2024-11-19 11:20:06<SeP>2024-11-20 22:51:27<SeP>2024-11-22 10:22:48<SeP>2024-11-23 21:54:09<SeP>2024-11-25 09:25:30<SeP>2024-11-26 20:56:51<SeP>2024-11-28 08:28:12<SeP>2024-11-29 19:59:33<SeP>2024-12-01 07:30:54<SeP>2024-12-02 19:02:15<SeP>2024-12-04 06:33:36<SeP>2024-12-05 18:04:57<SeP>2024-12-07 05:36:18<SeP>2024-12-08 17:07:39<SeP>2024-12-10 04:39:00<SeP>2024-12-11 16:10:21<SeP>2024-12-13 03:41:42<SeP>2024-12-14 15:13:03<SeP>2024-12-16 02:44:24<SeP>2024-12-17 14:15:45<SeP>2024-12-19 01:47:06<SeP>2024-12-20 13:18:27<SeP>2024-12-22 00:49:48<SeP>2024-12-23 12:21:09<SeP>2024-12-24 23:52:30<SeP>2024-12-26 11:23:51<SeP>2024-12-27 22:55:12<SeP>2024-12-29 10:26:33<SeP>2024-12-30 21:57:54<SeP>2025-01-01 09:29:15<SeP>2025-01-02 21:00:36<SeP>2025-01-04 08:31:57<SeP>2025-01-05 20:03:18<SeP>2025-01-07 07:34:39<SeP>2025-01-08 19:06:00<SeP>2025-01-10 06:37:21<SeP>2025-01-11 18:08:42<SeP>2025-01-13 05:40:03<SeP>2025-01-14 17:11:24<SeP>2025-01-16 04:42:45<SeP>2025-01-17 16:14:06<SeP>2025-01-19 03:45:27<SeP>2025-01-20 15:16:48<SeP>2025-01-22 02:48:09<SeP>2025-01-23 14:19:30<SeP>2025-01-25 01:50:51<SeP>2025-01-26 13:22:12<SeP>2025-01-28 00:53:33<SeP>2025-01-29 12:24:54<SeP>2025-01-30 23:56:15<SeP>2025-02-01 11:27:36<SeP>2025-02-02 22:58:57<SeP>2025-02-04 10:30:18<SeP>2025-02-05 22:01:39<SeP>2025-02-07 09:33:00<SeP>2025-02-08 21:04:21<SeP>2025-02-10 08:35:42<SeP>2025-02-11 20:07:03<SeP>2025-02-13 07:38:24<SeP>2025-02-14 19:09:45<SeP>2025-02-16 06:41:06<SeP>2025-02-17 18:12:27<SeP>2025-02-19 05:43:48<SeP>2025-02-20 17:15:09<SeP>2025-02-22 04:46:30<SeP>2025-02-23 16:17:51<SeP>2025-02-25 03:49:12<SeP>2025-02-26 15:20:33<SeP>2025-02-28 02:51:54<SeP>2025-03-01 14:23:15<SeP>2025-03-03 01:54:36<SeP>2025-03-04 13:25:57<SeP>2025-03-06 00:57:18<SeP>2025-03-07 12:28:39";
  const itemLabel       = "Ataques";
  const itemData        = "171<SeP>598<SeP>1399<SeP>657<SeP>222<SeP>236<SeP>7018<SeP>582<SeP>9419<SeP>564<SeP>402<SeP>1133<SeP>1295<SeP>241<SeP>307<SeP>307<SeP>150<SeP>747<SeP>348<SeP>7909<SeP>6867<SeP>6836<SeP>9188<SeP>2689<SeP>287<SeP>416<SeP>173<SeP>382<SeP>5915<SeP>99<SeP>384<SeP>135<SeP>527<SeP>341<SeP>9645<SeP>9593<SeP>9930<SeP>9888<SeP>5795<SeP>6260<SeP>8578<SeP>7727<SeP>9657<SeP>7852<SeP>7529<SeP>9504<SeP>7914<SeP>8258<SeP>8596<SeP>5893<SeP>9653<SeP>9703<SeP>6170<SeP>8484<SeP>8113<SeP>9277<SeP>18429<SeP>16786<SeP>9274<SeP>11479<SeP>6710<SeP>8162<SeP>8664<SeP>9362<SeP>8869<SeP>5885<SeP>7271<SeP>7356<SeP>5845<SeP>3411<SeP>6288<SeP>5432<SeP>6526<SeP>7305<SeP>8352<SeP>2325<SeP>6366<SeP>6493<SeP>6252<SeP>5724<SeP>6470<SeP>4494<SeP>7408<SeP>5275<SeP>5590<SeP>5992<SeP>7175<SeP>21744<SeP>17028<SeP>27817<SeP>8721<SeP>6963<SeP>7075<SeP>12323<SeP>7918<SeP>3228<SeP>6859<SeP>3772<SeP>4620<SeP>7242<SeP>6604<SeP>6897<SeP>7142<SeP>5819<SeP>4236<SeP>7855<SeP>8401<SeP>7474<SeP>8587<SeP>3574<SeP>8405<SeP>9963<SeP>7917<SeP>3007<SeP>4926<SeP>7761<SeP>7452<SeP>5784<SeP>8763<SeP>7911<SeP>1773<SeP>2786<SeP>976<SeP>1927<SeP>2707<SeP>1327<SeP>900<SeP>1137<SeP>1204<SeP>1854<SeP>601<SeP>1293<SeP>1166<SeP>1029<SeP>893<SeP>1144<SeP>1486<SeP>1322<SeP>969<SeP>2163<SeP>1682<SeP>6001<SeP>11052<SeP>7864<SeP>8400<SeP>7165<SeP>12699<SeP>2903<SeP>11671<SeP>9948<SeP>9423<SeP>12528<SeP>8138<SeP>13154<SeP>12170<SeP>6969<SeP>12190<SeP>5385<SeP>5368<SeP>7024<SeP>25462<SeP>6609<SeP>8327<SeP>9104<SeP>17433<SeP>8437<SeP>7148<SeP>7011<SeP>5941<SeP>16774<SeP>17584<SeP>7672<SeP>11484<SeP>5351<SeP>6992<SeP>5399<SeP>16149<SeP>5084<SeP>7389<SeP>14042<SeP>6732<SeP>8546<SeP>7522<SeP>4321<SeP>4334<SeP>6877<SeP>7396<SeP>6107<SeP>5926<SeP>8097<SeP>18457<SeP>6843<SeP>9057<SeP>5069<SeP>7906<SeP>9341<SeP>8466<SeP>5833<SeP>2911<SeP>7656<SeP>2786<SeP>5266<SeP>4107<SeP>672<SeP>115<SeP>641<SeP>214<SeP>649<SeP>1013<SeP>372<SeP>607<SeP>1010<SeP>1410<SeP>3228<SeP>22838<SeP>667<SeP>3449<SeP>3563<SeP>3036<SeP>7202<SeP>3028<SeP>4278<SeP>2522<SeP>3899<SeP>2809<SeP>2924<SeP>4774<SeP>2679<SeP>2173<SeP>3565<SeP>1877<SeP>2058<SeP>1926<SeP>1306<SeP>1422<SeP>1387<SeP>872<SeP>1863<SeP>15333<SeP>12764<SeP>2378<SeP>3825<SeP>3648<SeP>2587<SeP>3853<SeP>1727<SeP>3396<SeP>2902<SeP>3295<SeP>2522<SeP>2952<SeP>3195<SeP>3288<SeP>6768<SeP>4769<SeP>4029<SeP>3743<SeP>3028<SeP>3658<SeP>3456<SeP>6674<SeP>8535<SeP>4647<SeP>2161<SeP>3366<SeP>3377<SeP>4650<SeP>3149<SeP>3350<SeP>2419<SeP>5056<SeP>4663<SeP>3407<SeP>5633<SeP>5059<SeP>5389<SeP>4895<SeP>5415<SeP>9375<SeP>18211<SeP>11929<SeP>4020<SeP>1841<SeP>5130<SeP>3413<SeP>3753<SeP>4255<SeP>5028<SeP>3972<SeP>4566<SeP>4252<SeP>3556<SeP>3315<SeP>1270<SeP>2118<SeP>3120<SeP>2860<SeP>2900<SeP>3258<SeP>4369<SeP>4150<SeP>3102<SeP>4613<SeP>3443<SeP>3167<SeP>4152<SeP>8216<SeP>6235<SeP>5539<SeP>5188<SeP>4821<SeP>3711<SeP>3613<SeP>4670<SeP>5806<SeP>5241<SeP>5003<SeP>3962<SeP>1797<SeP>489<SeP>2307<SeP>1514<SeP>682<SeP>1856<SeP>1800<SeP>1074<SeP>2878<SeP>4327<SeP>6346<SeP>20771<SeP>18135<SeP>5636<SeP>13531<SeP>14730<SeP>5436<SeP>6336<SeP>4708<SeP>22339<SeP>6862<SeP>5545<SeP>4530<SeP>4786<SeP>6391<SeP>28123<SeP>7276<SeP>4046<SeP>3953<SeP>3818<SeP>5738<SeP>4751<SeP>3808<SeP>2635<SeP>4572<SeP>5721<SeP>4629<SeP>18077<SeP>5464<SeP>6424<SeP>5534<SeP>1390<SeP>3932<SeP>4122<SeP>4224<SeP>4532<SeP>2899<SeP>3567<SeP>2908<SeP>3918<SeP>3629<SeP>7409<SeP>9196<SeP>9613<SeP>8659<SeP>8856<SeP>8199<SeP>5984<SeP>5136<SeP>4819<SeP>17364<SeP>11936<SeP>3240<SeP>4860<SeP>3281<SeP>11210<SeP>5676<SeP>3655<SeP>5112<SeP>4469<SeP>2736<SeP>9505<SeP>9834<SeP>4552<SeP>3068<SeP>3417<SeP>2292<SeP>2525<SeP>2528<SeP>2060<SeP>2557<SeP>1776";
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
  const itemData    = "697715<SeP>367350<SeP>206761<SeP>180833<SeP>110888<SeP>88456<SeP>84126<SeP>81438<SeP>68353<SeP>67957";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "299346<SeP>41433<SeP>41016<SeP>36569<SeP>14660<SeP>11227<SeP>8356<SeP>8013<SeP>7241<SeP>7234";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "398369<SeP>330781<SeP>203648<SeP>139817<SeP>96228<SeP>81419<SeP>81222<SeP>70211<SeP>59944<SeP>58922";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "364309<SeP>259557<SeP>238176<SeP>143866<SeP>67621<SeP>60014<SeP>56916<SeP>53442<SeP>37112<SeP>36526";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>0<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "157816<SeP>53729<SeP>36000<SeP>32859<SeP>21924<SeP>12901<SeP>12461<SeP>10939<SeP>7614<SeP>7509";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "351408<SeP>258790<SeP>121942<SeP>80360<SeP>55900<SeP>49075<SeP>47331<SeP>30684<SeP>29324<SeP>26849";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "697715<SeP>367350<SeP>206761<SeP>180833<SeP>110888<SeP>88456<SeP>84126<SeP>81438<SeP>68353<SeP>67957";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "299346<SeP>41433<SeP>41016<SeP>36569<SeP>14660<SeP>11227<SeP>8356<SeP>8013<SeP>7241<SeP>7234";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "398369<SeP>330781<SeP>203648<SeP>139817<SeP>96228<SeP>81419<SeP>81222<SeP>70211<SeP>59944<SeP>58922";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "364309<SeP>259557<SeP>238176<SeP>143866<SeP>67621<SeP>60014<SeP>56916<SeP>53442<SeP>37112<SeP>36526";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>0<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "157816<SeP>53729<SeP>36000<SeP>32859<SeP>21924<SeP>12901<SeP>12461<SeP>10939<SeP>7614<SeP>7509";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "351408<SeP>258790<SeP>121942<SeP>80360<SeP>55900<SeP>49075<SeP>47331<SeP>30684<SeP>29324<SeP>26849";
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
