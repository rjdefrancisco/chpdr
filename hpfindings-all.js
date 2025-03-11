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
  document.getElementById("last-updated").innerHTML = "2025-3-11";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.6";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.6";
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
  const metricData    = "2855815";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "560059";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2295756";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140866";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1440275";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "855481";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54549";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "251285";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "604196";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43832";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2855815";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "560059";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2295756";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140866";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1440275";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "855481";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54549";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "251285";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "604196";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43832";
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
  const incomingData = "2855815<SeP>560059<SeP>2295756<SeP>140866";
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
  const incomingData = "2295756<SeP>1440275<SeP>855481<SeP>54549";
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
  const incomingData = "855481<SeP>251285<SeP>604196<SeP>43832";
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
  const incomingData = "2561965<SeP>258883<SeP>2303082";
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
  const incomingData = "2855815<SeP>560059<SeP>2295756<SeP>140866";
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
  const incomingData = "2295756<SeP>1440275<SeP>855481<SeP>54549";
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
  const incomingData = "855481<SeP>251285<SeP>604196<SeP>43832";
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
  const incomingData = "2561965<SeP>258883<SeP>2303082";
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
  const column3Data   = "222067<SeP>203586<SeP>12829<SeP>12476<SeP>9815<SeP>9470<SeP>6455<SeP>5593<SeP>4635<SeP>3516";
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
  const column2Data  = "213481<SeP>43189<SeP>965<SeP>485<SeP>473<SeP>455<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2415518<SeP>440297";
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
  const column3Data   = "222067<SeP>203586<SeP>12829<SeP>12476<SeP>9815<SeP>9470<SeP>6455<SeP>5593<SeP>4635<SeP>3516";
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
  const column2Data  = "213481<SeP>43189<SeP>965<SeP>485<SeP>473<SeP>455<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2415518<SeP>440297";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-11";

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
        "name": "traffic between 2023-07-26 and 2025-03-09"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          398816,50
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
        "name": "scans between 2023-07-26 and 2025-03-09"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          229887,30,
          398816,50
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
        "name": "attacks between 2023-07-26 and 2025-03-09"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168929,23,
          398816,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-11";

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
        "name": "tráfico entre 2023-07-26 y 2025-03-09"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          398816,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-09"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          229887,30,
          398816,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-09"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168929,23,
          398816,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:38:24<SeP>2023-07-28 23:16:48<SeP>2023-07-30 10:55:12<SeP>2023-07-31 22:33:36<SeP>2023-08-02 10:12:00<SeP>2023-08-03 21:50:24<SeP>2023-08-05 09:28:48<SeP>2023-08-06 21:07:12<SeP>2023-08-08 08:45:36<SeP>2023-08-09 20:24:00<SeP>2023-08-11 08:02:24<SeP>2023-08-12 19:40:48<SeP>2023-08-14 07:19:12<SeP>2023-08-15 18:57:36<SeP>2023-08-17 06:36:00<SeP>2023-08-18 18:14:24<SeP>2023-08-20 05:52:48<SeP>2023-08-21 17:31:12<SeP>2023-08-23 05:09:36<SeP>2023-08-24 16:48:00<SeP>2023-08-26 04:26:24<SeP>2023-08-27 16:04:48<SeP>2023-08-29 03:43:12<SeP>2023-08-30 15:21:36<SeP>2023-09-01 03:00:00<SeP>2023-09-02 14:38:24<SeP>2023-09-04 02:16:48<SeP>2023-09-05 13:55:12<SeP>2023-09-07 01:33:36<SeP>2023-09-08 13:12:00<SeP>2023-09-10 00:50:24<SeP>2023-09-11 12:28:48<SeP>2023-09-13 00:07:12<SeP>2023-09-14 11:45:36<SeP>2023-09-15 23:24:00<SeP>2023-09-17 11:02:24<SeP>2023-09-18 22:40:48<SeP>2023-09-20 10:19:12<SeP>2023-09-21 21:57:36<SeP>2023-09-23 09:36:00<SeP>2023-09-24 21:14:24<SeP>2023-09-26 08:52:48<SeP>2023-09-27 20:31:12<SeP>2023-09-29 08:09:36<SeP>2023-09-30 19:48:00<SeP>2023-10-02 07:26:24<SeP>2023-10-03 19:04:48<SeP>2023-10-05 06:43:12<SeP>2023-10-06 18:21:36<SeP>2023-10-08 06:00:00<SeP>2023-10-09 17:38:24<SeP>2023-10-11 05:16:48<SeP>2023-10-12 16:55:12<SeP>2023-10-14 04:33:36<SeP>2023-10-15 16:12:00<SeP>2023-10-17 03:50:24<SeP>2023-10-18 15:28:48<SeP>2023-10-20 03:07:12<SeP>2023-10-21 14:45:36<SeP>2023-10-23 02:24:00<SeP>2023-10-24 14:02:24<SeP>2023-10-26 01:40:48<SeP>2023-10-27 13:19:12<SeP>2023-10-29 00:57:36<SeP>2023-10-30 12:36:00<SeP>2023-11-01 00:14:24<SeP>2023-11-02 11:52:48<SeP>2023-11-03 23:31:12<SeP>2023-11-05 10:09:36<SeP>2023-11-06 21:48:00<SeP>2023-11-08 09:26:24<SeP>2023-11-09 21:04:48<SeP>2023-11-11 08:43:12<SeP>2023-11-12 20:21:36<SeP>2023-11-14 08:00:00<SeP>2023-11-15 19:38:24<SeP>2023-11-17 07:16:48<SeP>2023-11-18 18:55:12<SeP>2023-11-20 06:33:36<SeP>2023-11-21 18:12:00<SeP>2023-11-23 05:50:24<SeP>2023-11-24 17:28:48<SeP>2023-11-26 05:07:12<SeP>2023-11-27 16:45:36<SeP>2023-11-29 04:24:00<SeP>2023-11-30 16:02:24<SeP>2023-12-02 03:40:48<SeP>2023-12-03 15:19:12<SeP>2023-12-05 02:57:36<SeP>2023-12-06 14:36:00<SeP>2023-12-08 02:14:24<SeP>2023-12-09 13:52:48<SeP>2023-12-11 01:31:12<SeP>2023-12-12 13:09:36<SeP>2023-12-14 00:48:00<SeP>2023-12-15 12:26:24<SeP>2023-12-17 00:04:48<SeP>2023-12-18 11:43:12<SeP>2023-12-19 23:21:36<SeP>2023-12-21 11:00:00<SeP>2023-12-22 22:38:24<SeP>2023-12-24 10:16:48<SeP>2023-12-25 21:55:12<SeP>2023-12-27 09:33:36<SeP>2023-12-28 21:12:00<SeP>2023-12-30 08:50:24<SeP>2023-12-31 20:28:48<SeP>2024-01-02 08:07:12<SeP>2024-01-03 19:45:36<SeP>2024-01-05 07:24:00<SeP>2024-01-06 19:02:24<SeP>2024-01-08 06:40:48<SeP>2024-01-09 18:19:12<SeP>2024-01-11 05:57:36<SeP>2024-01-12 17:36:00<SeP>2024-01-14 05:14:24<SeP>2024-01-15 16:52:48<SeP>2024-01-17 04:31:12<SeP>2024-01-18 16:09:36<SeP>2024-01-20 03:48:00<SeP>2024-01-21 15:26:24<SeP>2024-01-23 03:04:48<SeP>2024-01-24 14:43:12<SeP>2024-01-26 02:21:36<SeP>2024-01-27 14:00:00<SeP>2024-01-29 01:38:24<SeP>2024-01-30 13:16:48<SeP>2024-02-01 00:55:12<SeP>2024-02-02 12:33:36<SeP>2024-02-04 00:12:00<SeP>2024-02-05 11:50:24<SeP>2024-02-06 23:28:48<SeP>2024-02-08 11:07:12<SeP>2024-02-09 22:45:36<SeP>2024-02-11 10:24:00<SeP>2024-02-12 22:02:24<SeP>2024-02-14 09:40:48<SeP>2024-02-15 21:19:12<SeP>2024-02-17 08:57:36<SeP>2024-02-18 20:36:00<SeP>2024-02-20 08:14:24<SeP>2024-02-21 19:52:48<SeP>2024-02-23 07:31:12<SeP>2024-02-24 19:09:36<SeP>2024-02-26 06:48:00<SeP>2024-02-27 18:26:24<SeP>2024-02-29 06:04:48<SeP>2024-03-01 17:43:12<SeP>2024-03-03 05:21:36<SeP>2024-03-04 17:00:00<SeP>2024-03-06 04:38:24<SeP>2024-03-07 16:16:48<SeP>2024-03-09 03:55:12<SeP>2024-03-10 16:33:36<SeP>2024-03-12 04:12:00<SeP>2024-03-13 15:50:24<SeP>2024-03-15 03:28:48<SeP>2024-03-16 15:07:12<SeP>2024-03-18 02:45:36<SeP>2024-03-19 14:24:00<SeP>2024-03-21 02:02:24<SeP>2024-03-22 13:40:48<SeP>2024-03-24 01:19:12<SeP>2024-03-25 12:57:36<SeP>2024-03-27 00:36:00<SeP>2024-03-28 12:14:24<SeP>2024-03-29 23:52:48<SeP>2024-03-31 11:31:12<SeP>2024-04-01 23:09:36<SeP>2024-04-03 10:48:00<SeP>2024-04-04 22:26:24<SeP>2024-04-06 10:04:48<SeP>2024-04-07 21:43:12<SeP>2024-04-09 09:21:36<SeP>2024-04-10 21:00:00<SeP>2024-04-12 08:38:24<SeP>2024-04-13 20:16:48<SeP>2024-04-15 07:55:12<SeP>2024-04-16 19:33:36<SeP>2024-04-18 07:12:00<SeP>2024-04-19 18:50:24<SeP>2024-04-21 06:28:48<SeP>2024-04-22 18:07:12<SeP>2024-04-24 05:45:36<SeP>2024-04-25 17:24:00<SeP>2024-04-27 05:02:24<SeP>2024-04-28 16:40:48<SeP>2024-04-30 04:19:12<SeP>2024-05-01 15:57:36<SeP>2024-05-03 03:36:00<SeP>2024-05-04 15:14:24<SeP>2024-05-06 02:52:48<SeP>2024-05-07 14:31:12<SeP>2024-05-09 02:09:36<SeP>2024-05-10 13:48:00<SeP>2024-05-12 01:26:24<SeP>2024-05-13 13:04:48<SeP>2024-05-15 00:43:12<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:00:00<SeP>2024-05-19 11:38:24<SeP>2024-05-20 23:16:48<SeP>2024-05-22 10:55:12<SeP>2024-05-23 22:33:36<SeP>2024-05-25 10:12:00<SeP>2024-05-26 21:50:24<SeP>2024-05-28 09:28:48<SeP>2024-05-29 21:07:12<SeP>2024-05-31 08:45:36<SeP>2024-06-01 20:24:00<SeP>2024-06-03 08:02:24<SeP>2024-06-04 19:40:48<SeP>2024-06-06 07:19:12<SeP>2024-06-07 18:57:36<SeP>2024-06-09 06:36:00<SeP>2024-06-10 18:14:24<SeP>2024-06-12 05:52:48<SeP>2024-06-13 17:31:12<SeP>2024-06-15 05:09:36<SeP>2024-06-16 16:48:00<SeP>2024-06-18 04:26:24<SeP>2024-06-19 16:04:48<SeP>2024-06-21 03:43:12<SeP>2024-06-22 15:21:36<SeP>2024-06-24 03:00:00<SeP>2024-06-25 14:38:24<SeP>2024-06-27 02:16:48<SeP>2024-06-28 13:55:12<SeP>2024-06-30 01:33:36<SeP>2024-07-01 13:12:00<SeP>2024-07-03 00:50:24<SeP>2024-07-04 12:28:48<SeP>2024-07-06 00:07:12<SeP>2024-07-07 11:45:36<SeP>2024-07-08 23:24:00<SeP>2024-07-10 11:02:24<SeP>2024-07-11 22:40:48<SeP>2024-07-13 10:19:12<SeP>2024-07-14 21:57:36<SeP>2024-07-16 09:36:00<SeP>2024-07-17 21:14:24<SeP>2024-07-19 08:52:48<SeP>2024-07-20 20:31:12<SeP>2024-07-22 08:09:36<SeP>2024-07-23 19:48:00<SeP>2024-07-25 07:26:24<SeP>2024-07-26 19:04:48<SeP>2024-07-28 06:43:12<SeP>2024-07-29 18:21:36<SeP>2024-07-31 06:00:00<SeP>2024-08-01 17:38:24<SeP>2024-08-03 05:16:48<SeP>2024-08-04 16:55:12<SeP>2024-08-06 04:33:36<SeP>2024-08-07 16:12:00<SeP>2024-08-09 03:50:24<SeP>2024-08-10 15:28:48<SeP>2024-08-12 03:07:12<SeP>2024-08-13 14:45:36<SeP>2024-08-15 02:24:00<SeP>2024-08-16 14:02:24<SeP>2024-08-18 01:40:48<SeP>2024-08-19 13:19:12<SeP>2024-08-21 00:57:36<SeP>2024-08-22 12:36:00<SeP>2024-08-24 00:14:24<SeP>2024-08-25 11:52:48<SeP>2024-08-26 23:31:12<SeP>2024-08-28 11:09:36<SeP>2024-08-29 22:48:00<SeP>2024-08-31 10:26:24<SeP>2024-09-01 22:04:48<SeP>2024-09-03 09:43:12<SeP>2024-09-04 21:21:36<SeP>2024-09-06 09:00:00<SeP>2024-09-07 20:38:24<SeP>2024-09-09 08:16:48<SeP>2024-09-10 19:55:12<SeP>2024-09-12 07:33:36<SeP>2024-09-13 19:12:00<SeP>2024-09-15 06:50:24<SeP>2024-09-16 18:28:48<SeP>2024-09-18 06:07:12<SeP>2024-09-19 17:45:36<SeP>2024-09-21 05:24:00<SeP>2024-09-22 17:02:24<SeP>2024-09-24 04:40:48<SeP>2024-09-25 16:19:12<SeP>2024-09-27 03:57:36<SeP>2024-09-28 15:36:00<SeP>2024-09-30 03:14:24<SeP>2024-10-01 14:52:48<SeP>2024-10-03 02:31:12<SeP>2024-10-04 14:09:36<SeP>2024-10-06 01:48:00<SeP>2024-10-07 13:26:24<SeP>2024-10-09 01:04:48<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:00:00<SeP>2024-10-14 23:38:24<SeP>2024-10-16 11:16:48<SeP>2024-10-17 22:55:12<SeP>2024-10-19 10:33:36<SeP>2024-10-20 22:12:00<SeP>2024-10-22 09:50:24<SeP>2024-10-23 21:28:48<SeP>2024-10-25 09:07:12<SeP>2024-10-26 20:45:36<SeP>2024-10-28 08:24:00<SeP>2024-10-29 20:02:24<SeP>2024-10-31 07:40:48<SeP>2024-11-01 19:19:12<SeP>2024-11-03 05:57:36<SeP>2024-11-04 17:36:00<SeP>2024-11-06 05:14:24<SeP>2024-11-07 16:52:48<SeP>2024-11-09 04:31:12<SeP>2024-11-10 16:09:36<SeP>2024-11-12 03:48:00<SeP>2024-11-13 15:26:24<SeP>2024-11-15 03:04:48<SeP>2024-11-16 14:43:12<SeP>2024-11-18 02:21:36<SeP>2024-11-19 14:00:00<SeP>2024-11-21 01:38:24<SeP>2024-11-22 13:16:48<SeP>2024-11-24 00:55:12<SeP>2024-11-25 12:33:36<SeP>2024-11-27 00:12:00<SeP>2024-11-28 11:50:24<SeP>2024-11-29 23:28:48<SeP>2024-12-01 11:07:12<SeP>2024-12-02 22:45:36<SeP>2024-12-04 10:24:00<SeP>2024-12-05 22:02:24<SeP>2024-12-07 09:40:48<SeP>2024-12-08 21:19:12<SeP>2024-12-10 08:57:36<SeP>2024-12-11 20:36:00<SeP>2024-12-13 08:14:24<SeP>2024-12-14 19:52:48<SeP>2024-12-16 07:31:12<SeP>2024-12-17 19:09:36<SeP>2024-12-19 06:48:00<SeP>2024-12-20 18:26:24<SeP>2024-12-22 06:04:48<SeP>2024-12-23 17:43:12<SeP>2024-12-25 05:21:36<SeP>2024-12-26 17:00:00<SeP>2024-12-28 04:38:24<SeP>2024-12-29 16:16:48<SeP>2024-12-31 03:55:12<SeP>2025-01-01 15:33:36<SeP>2025-01-03 03:12:00<SeP>2025-01-04 14:50:24<SeP>2025-01-06 02:28:48<SeP>2025-01-07 14:07:12<SeP>2025-01-09 01:45:36<SeP>2025-01-10 13:24:00<SeP>2025-01-12 01:02:24<SeP>2025-01-13 12:40:48<SeP>2025-01-15 00:19:12<SeP>2025-01-16 11:57:36<SeP>2025-01-17 23:36:00<SeP>2025-01-19 11:14:24<SeP>2025-01-20 22:52:48<SeP>2025-01-22 10:31:12<SeP>2025-01-23 22:09:36<SeP>2025-01-25 09:48:00<SeP>2025-01-26 21:26:24<SeP>2025-01-28 09:04:48<SeP>2025-01-29 20:43:12<SeP>2025-01-31 08:21:36<SeP>2025-02-01 20:00:00<SeP>2025-02-03 07:38:24<SeP>2025-02-04 19:16:48<SeP>2025-02-06 06:55:12<SeP>2025-02-07 18:33:36<SeP>2025-02-09 06:12:00<SeP>2025-02-10 17:50:24<SeP>2025-02-12 05:28:48<SeP>2025-02-13 17:07:12<SeP>2025-02-15 04:45:36<SeP>2025-02-16 16:24:00<SeP>2025-02-18 04:02:24<SeP>2025-02-19 15:40:48<SeP>2025-02-21 03:19:12<SeP>2025-02-22 14:57:36<SeP>2025-02-24 02:36:00<SeP>2025-02-25 14:14:24<SeP>2025-02-27 01:52:48<SeP>2025-02-28 13:31:12<SeP>2025-03-02 01:09:36<SeP>2025-03-03 12:48:00<SeP>2025-03-05 00:26:24<SeP>2025-03-06 12:04:48<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:21:36";
  const item1Label       = "Scans";
  const item1Data        = "781<SeP>1521<SeP>1370<SeP>1514<SeP>1255<SeP>1740<SeP>919<SeP>997<SeP>1157<SeP>3391<SeP>3354<SeP>1090<SeP>3320<SeP>877<SeP>785<SeP>883<SeP>1435<SeP>3233<SeP>1470<SeP>1401<SeP>1130<SeP>904<SeP>1120<SeP>1229<SeP>961<SeP>691<SeP>958<SeP>3678<SeP>984<SeP>816<SeP>1372<SeP>1235<SeP>883<SeP>2185<SeP>2060<SeP>2897<SeP>1879<SeP>1836<SeP>1347<SeP>1330<SeP>1809<SeP>1782<SeP>2206<SeP>1616<SeP>1624<SeP>1669<SeP>1736<SeP>1790<SeP>1826<SeP>1818<SeP>1746<SeP>1614<SeP>3158<SeP>1788<SeP>1396<SeP>2203<SeP>1845<SeP>2249<SeP>1344<SeP>3877<SeP>1402<SeP>1557<SeP>1618<SeP>1294<SeP>1897<SeP>1722<SeP>1246<SeP>1435<SeP>1418<SeP>1196<SeP>2311<SeP>1184<SeP>1245<SeP>1291<SeP>7118<SeP>2344<SeP>1429<SeP>1353<SeP>1695<SeP>1962<SeP>1141<SeP>6547<SeP>1730<SeP>1601<SeP>1002<SeP>1304<SeP>3183<SeP>1234<SeP>998<SeP>1047<SeP>1171<SeP>1989<SeP>1997<SeP>1143<SeP>1633<SeP>3814<SeP>5516<SeP>1259<SeP>938<SeP>966<SeP>991<SeP>963<SeP>946<SeP>1133<SeP>2516<SeP>3233<SeP>1639<SeP>1792<SeP>778<SeP>707<SeP>1443<SeP>1322<SeP>1091<SeP>1010<SeP>2297<SeP>1128<SeP>1128<SeP>1090<SeP>1060<SeP>953<SeP>820<SeP>878<SeP>840<SeP>915<SeP>1058<SeP>862<SeP>851<SeP>815<SeP>878<SeP>900<SeP>705<SeP>900<SeP>890<SeP>838<SeP>925<SeP>858<SeP>820<SeP>804<SeP>886<SeP>1009<SeP>816<SeP>859<SeP>900<SeP>957<SeP>1131<SeP>988<SeP>569<SeP>842<SeP>847<SeP>892<SeP>1296<SeP>927<SeP>1137<SeP>1248<SeP>1104<SeP>984<SeP>936<SeP>892<SeP>835<SeP>939<SeP>1082<SeP>986<SeP>834<SeP>950<SeP>1042<SeP>1002<SeP>1052<SeP>1027<SeP>1173<SeP>928<SeP>942<SeP>1206<SeP>2052<SeP>1262<SeP>1021<SeP>1058<SeP>1225<SeP>968<SeP>1007<SeP>732<SeP>748<SeP>1007<SeP>1107<SeP>852<SeP>1118<SeP>1260<SeP>1085<SeP>1203<SeP>1303<SeP>1150<SeP>1353<SeP>1194<SeP>1424<SeP>1493<SeP>1742<SeP>1731<SeP>1380<SeP>765<SeP>836<SeP>1130<SeP>1110<SeP>616<SeP>734<SeP>869<SeP>1008<SeP>1749<SeP>5817<SeP>2331<SeP>2022<SeP>1220<SeP>912<SeP>1030<SeP>884<SeP>988<SeP>980<SeP>1138<SeP>1057<SeP>1035<SeP>2226<SeP>1334<SeP>1079<SeP>1202<SeP>1325<SeP>1192<SeP>1111<SeP>931<SeP>1170<SeP>1062<SeP>1070<SeP>1142<SeP>1094<SeP>1171<SeP>911<SeP>1002<SeP>1380<SeP>1136<SeP>1087<SeP>1343<SeP>1280<SeP>1196<SeP>1550<SeP>1294<SeP>1102<SeP>1098<SeP>1403<SeP>1870<SeP>1375<SeP>1979<SeP>1682<SeP>1550<SeP>1938<SeP>1467<SeP>1212<SeP>1133<SeP>1331<SeP>1355<SeP>1474<SeP>1137<SeP>1391<SeP>1707<SeP>1592<SeP>1562<SeP>1399<SeP>1487<SeP>1275<SeP>1005<SeP>1298<SeP>1190<SeP>1165<SeP>1360<SeP>1324<SeP>1088<SeP>2045<SeP>1298<SeP>1379<SeP>1662<SeP>1385<SeP>1359<SeP>1122<SeP>845<SeP>945<SeP>959<SeP>914<SeP>1086<SeP>1775<SeP>1153<SeP>1154<SeP>1093<SeP>888<SeP>1030<SeP>1003<SeP>1319<SeP>879<SeP>922<SeP>1142<SeP>1392<SeP>1654<SeP>1271<SeP>1090<SeP>1043<SeP>1136<SeP>1806<SeP>970<SeP>1214<SeP>1039<SeP>1576<SeP>1079<SeP>951<SeP>1217<SeP>1113<SeP>882<SeP>916<SeP>1143<SeP>1410<SeP>1588<SeP>1463<SeP>1432<SeP>1270<SeP>915<SeP>1151<SeP>1307<SeP>1127<SeP>1160<SeP>1029<SeP>1047<SeP>1165<SeP>1586<SeP>1321<SeP>1581<SeP>1315<SeP>1440<SeP>1595<SeP>1486<SeP>1353<SeP>1481<SeP>1543<SeP>1256<SeP>1783<SeP>1273<SeP>1524<SeP>1646<SeP>1348<SeP>1437<SeP>1348<SeP>1209<SeP>1333<SeP>1466<SeP>1646<SeP>1327<SeP>1322<SeP>1295<SeP>1388<SeP>1255<SeP>1219<SeP>1572<SeP>1801<SeP>1781<SeP>1185<SeP>619<SeP>1491<SeP>1915<SeP>1265<SeP>1338<SeP>1308<SeP>1072<SeP>1517<SeP>1417<SeP>1369<SeP>1387<SeP>1792<SeP>1344<SeP>1612<SeP>1747<SeP>1270<SeP>1560<SeP>1521<SeP>1742<SeP>1482<SeP>993<SeP>1462<SeP>1852<SeP>1905<SeP>1806<SeP>1728<SeP>1686<SeP>1626<SeP>1645<SeP>1516<SeP>1605<SeP>1607<SeP>1744<SeP>1940<SeP>1433<SeP>1444<SeP>1366<SeP>1730<SeP>1433<SeP>2092<SeP>1602<SeP>2096";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "195<SeP>575<SeP>1401<SeP>654<SeP>225<SeP>234<SeP>7036<SeP>603<SeP>9384<SeP>563<SeP>402<SeP>1130<SeP>1298<SeP>244<SeP>308<SeP>306<SeP>174<SeP>749<SeP>341<SeP>8279<SeP>6882<SeP>6780<SeP>10039<SeP>1488<SeP>289<SeP>414<SeP>173<SeP>383<SeP>5931<SeP>82<SeP>391<SeP>184<SeP>491<SeP>886<SeP>10074<SeP>8930<SeP>10278<SeP>10244<SeP>5382<SeP>6282<SeP>8492<SeP>8012<SeP>10234<SeP>7624<SeP>7448<SeP>9240<SeP>9043<SeP>8150<SeP>7799<SeP>5370<SeP>10272<SeP>9450<SeP>6764<SeP>8045<SeP>9238<SeP>8747<SeP>18870<SeP>16966<SeP>8869<SeP>11260<SeP>6632<SeP>8910<SeP>8021<SeP>8898<SeP>9312<SeP>6189<SeP>6538<SeP>7182<SeP>7142<SeP>2387<SeP>6141<SeP>5789<SeP>7084<SeP>6402<SeP>8102<SeP>3971<SeP>5474<SeP>8058<SeP>4468<SeP>6463<SeP>5663<SeP>4783<SeP>7630<SeP>5354<SeP>5380<SeP>5677<SeP>9866<SeP>21097<SeP>33185<SeP>10774<SeP>9385<SeP>5739<SeP>7293<SeP>13036<SeP>6012<SeP>4497<SeP>5293<SeP>4881<SeP>6379<SeP>5455<SeP>8636<SeP>5502<SeP>6551<SeP>5281<SeP>4539<SeP>8858<SeP>8760<SeP>7614<SeP>6633<SeP>4155<SeP>10335<SeP>9354<SeP>5845<SeP>3193<SeP>6233<SeP>9321<SeP>5643<SeP>6781<SeP>9679<SeP>4690<SeP>2183<SeP>1579<SeP>1967<SeP>1816<SeP>2278<SeP>1088<SeP>1421<SeP>515<SeP>1476<SeP>1503<SeP>1153<SeP>1136<SeP>823<SeP>1162<SeP>733<SeP>1543<SeP>1475<SeP>1048<SeP>1735<SeP>2071<SeP>1635<SeP>12033<SeP>5843<SeP>11160<SeP>7310<SeP>5588<SeP>10682<SeP>9113<SeP>9320<SeP>8570<SeP>14131<SeP>8728<SeP>10813<SeP>11126<SeP>12206<SeP>11198<SeP>7837<SeP>3985<SeP>7369<SeP>21225<SeP>10682<SeP>7471<SeP>7556<SeP>13174<SeP>13045<SeP>8836<SeP>4815<SeP>7413<SeP>8891<SeP>24522<SeP>7478<SeP>10089<SeP>10034<SeP>5155<SeP>5612<SeP>7306<SeP>15383<SeP>5236<SeP>13557<SeP>7198<SeP>7343<SeP>8732<SeP>5732<SeP>4233<SeP>7228<SeP>7032<SeP>5427<SeP>6746<SeP>8054<SeP>3617<SeP>21532<SeP>7798<SeP>7086<SeP>6032<SeP>8610<SeP>10432<SeP>7369<SeP>2502<SeP>5980<SeP>4267<SeP>4683<SeP>4477<SeP>1496<SeP>619<SeP>642<SeP>203<SeP>540<SeP>641<SeP>782<SeP>446<SeP>924<SeP>1564<SeP>3197<SeP>1033<SeP>22516<SeP>1929<SeP>4420<SeP>2906<SeP>3656<SeP>6936<SeP>4182<SeP>2582<SeP>3829<SeP>3001<SeP>2784<SeP>3965<SeP>3699<SeP>2252<SeP>3675<SeP>1250<SeP>2418<SeP>2196<SeP>1552<SeP>959<SeP>1695<SeP>953<SeP>1627<SeP>1984<SeP>26269<SeP>1816<SeP>4349<SeP>3543<SeP>2088<SeP>4186<SeP>2033<SeP>2700<SeP>3336<SeP>3067<SeP>2919<SeP>3155<SeP>2775<SeP>3281<SeP>6635<SeP>5006<SeP>3558<SeP>4035<SeP>3048<SeP>3212<SeP>4294<SeP>5820<SeP>8186<SeP>5669<SeP>2322<SeP>3303<SeP>2446<SeP>5607<SeP>2929<SeP>3233<SeP>2436<SeP>4484<SeP>5592<SeP>3064<SeP>6153<SeP>4278<SeP>6181<SeP>4576<SeP>5718<SeP>6470<SeP>20826<SeP>5047<SeP>11058<SeP>1949<SeP>3868<SeP>4632<SeP>3564<SeP>4242<SeP>5184<SeP>3684<SeP>4995<SeP>4252<SeP>3533<SeP>3324<SeP>1267<SeP>1965<SeP>3268<SeP>2878<SeP>2830<SeP>3329<SeP>4340<SeP>4156<SeP>3092<SeP>4653<SeP>3455<SeP>3202<SeP>4116<SeP>8343<SeP>6119<SeP>5682<SeP>5199<SeP>4817<SeP>3619<SeP>3614<SeP>4630<SeP>5777<SeP>5623<SeP>4735<SeP>4093<SeP>1560<SeP>472<SeP>2559<SeP>1332<SeP>628<SeP>2349<SeP>1544<SeP>837<SeP>3300<SeP>4236<SeP>6496<SeP>25967<SeP>12880<SeP>5589<SeP>15731<SeP>12976<SeP>5370<SeP>6350<SeP>4651<SeP>24363<SeP>4946<SeP>5274<SeP>4741<SeP>5343<SeP>6764<SeP>29201<SeP>4753<SeP>4032<SeP>4234<SeP>3728<SeP>6720<SeP>3599<SeP>3881<SeP>3290<SeP>4243<SeP>5916<SeP>4514<SeP>17735<SeP>5823<SeP>6704<SeP>4899<SeP>1570<SeP>3826<SeP>4993<SeP>3589<SeP>4351<SeP>2862<SeP>3937<SeP>2391<SeP>4079<SeP>4225<SeP>7974<SeP>10580<SeP>8490<SeP>8744<SeP>9606<SeP>7027<SeP>5789<SeP>5186<SeP>4355<SeP>26282<SeP>2939<SeP>3255<SeP>4518<SeP>4710<SeP>11017<SeP>4892<SeP>4010<SeP>5144<SeP>3471<SeP>5013<SeP>9584<SeP>8461<SeP>4434<SeP>2813<SeP>3506<SeP>1974<SeP>2310<SeP>2548<SeP>2097<SeP>2461<SeP>1664<SeP>3080";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:38:24<SeP>2023-07-28 23:16:48<SeP>2023-07-30 10:55:12<SeP>2023-07-31 22:33:36<SeP>2023-08-02 10:12:00<SeP>2023-08-03 21:50:24<SeP>2023-08-05 09:28:48<SeP>2023-08-06 21:07:12<SeP>2023-08-08 08:45:36<SeP>2023-08-09 20:24:00<SeP>2023-08-11 08:02:24<SeP>2023-08-12 19:40:48<SeP>2023-08-14 07:19:12<SeP>2023-08-15 18:57:36<SeP>2023-08-17 06:36:00<SeP>2023-08-18 18:14:24<SeP>2023-08-20 05:52:48<SeP>2023-08-21 17:31:12<SeP>2023-08-23 05:09:36<SeP>2023-08-24 16:48:00<SeP>2023-08-26 04:26:24<SeP>2023-08-27 16:04:48<SeP>2023-08-29 03:43:12<SeP>2023-08-30 15:21:36<SeP>2023-09-01 03:00:00<SeP>2023-09-02 14:38:24<SeP>2023-09-04 02:16:48<SeP>2023-09-05 13:55:12<SeP>2023-09-07 01:33:36<SeP>2023-09-08 13:12:00<SeP>2023-09-10 00:50:24<SeP>2023-09-11 12:28:48<SeP>2023-09-13 00:07:12<SeP>2023-09-14 11:45:36<SeP>2023-09-15 23:24:00<SeP>2023-09-17 11:02:24<SeP>2023-09-18 22:40:48<SeP>2023-09-20 10:19:12<SeP>2023-09-21 21:57:36<SeP>2023-09-23 09:36:00<SeP>2023-09-24 21:14:24<SeP>2023-09-26 08:52:48<SeP>2023-09-27 20:31:12<SeP>2023-09-29 08:09:36<SeP>2023-09-30 19:48:00<SeP>2023-10-02 07:26:24<SeP>2023-10-03 19:04:48<SeP>2023-10-05 06:43:12<SeP>2023-10-06 18:21:36<SeP>2023-10-08 06:00:00<SeP>2023-10-09 17:38:24<SeP>2023-10-11 05:16:48<SeP>2023-10-12 16:55:12<SeP>2023-10-14 04:33:36<SeP>2023-10-15 16:12:00<SeP>2023-10-17 03:50:24<SeP>2023-10-18 15:28:48<SeP>2023-10-20 03:07:12<SeP>2023-10-21 14:45:36<SeP>2023-10-23 02:24:00<SeP>2023-10-24 14:02:24<SeP>2023-10-26 01:40:48<SeP>2023-10-27 13:19:12<SeP>2023-10-29 00:57:36<SeP>2023-10-30 12:36:00<SeP>2023-11-01 00:14:24<SeP>2023-11-02 11:52:48<SeP>2023-11-03 23:31:12<SeP>2023-11-05 10:09:36<SeP>2023-11-06 21:48:00<SeP>2023-11-08 09:26:24<SeP>2023-11-09 21:04:48<SeP>2023-11-11 08:43:12<SeP>2023-11-12 20:21:36<SeP>2023-11-14 08:00:00<SeP>2023-11-15 19:38:24<SeP>2023-11-17 07:16:48<SeP>2023-11-18 18:55:12<SeP>2023-11-20 06:33:36<SeP>2023-11-21 18:12:00<SeP>2023-11-23 05:50:24<SeP>2023-11-24 17:28:48<SeP>2023-11-26 05:07:12<SeP>2023-11-27 16:45:36<SeP>2023-11-29 04:24:00<SeP>2023-11-30 16:02:24<SeP>2023-12-02 03:40:48<SeP>2023-12-03 15:19:12<SeP>2023-12-05 02:57:36<SeP>2023-12-06 14:36:00<SeP>2023-12-08 02:14:24<SeP>2023-12-09 13:52:48<SeP>2023-12-11 01:31:12<SeP>2023-12-12 13:09:36<SeP>2023-12-14 00:48:00<SeP>2023-12-15 12:26:24<SeP>2023-12-17 00:04:48<SeP>2023-12-18 11:43:12<SeP>2023-12-19 23:21:36<SeP>2023-12-21 11:00:00<SeP>2023-12-22 22:38:24<SeP>2023-12-24 10:16:48<SeP>2023-12-25 21:55:12<SeP>2023-12-27 09:33:36<SeP>2023-12-28 21:12:00<SeP>2023-12-30 08:50:24<SeP>2023-12-31 20:28:48<SeP>2024-01-02 08:07:12<SeP>2024-01-03 19:45:36<SeP>2024-01-05 07:24:00<SeP>2024-01-06 19:02:24<SeP>2024-01-08 06:40:48<SeP>2024-01-09 18:19:12<SeP>2024-01-11 05:57:36<SeP>2024-01-12 17:36:00<SeP>2024-01-14 05:14:24<SeP>2024-01-15 16:52:48<SeP>2024-01-17 04:31:12<SeP>2024-01-18 16:09:36<SeP>2024-01-20 03:48:00<SeP>2024-01-21 15:26:24<SeP>2024-01-23 03:04:48<SeP>2024-01-24 14:43:12<SeP>2024-01-26 02:21:36<SeP>2024-01-27 14:00:00<SeP>2024-01-29 01:38:24<SeP>2024-01-30 13:16:48<SeP>2024-02-01 00:55:12<SeP>2024-02-02 12:33:36<SeP>2024-02-04 00:12:00<SeP>2024-02-05 11:50:24<SeP>2024-02-06 23:28:48<SeP>2024-02-08 11:07:12<SeP>2024-02-09 22:45:36<SeP>2024-02-11 10:24:00<SeP>2024-02-12 22:02:24<SeP>2024-02-14 09:40:48<SeP>2024-02-15 21:19:12<SeP>2024-02-17 08:57:36<SeP>2024-02-18 20:36:00<SeP>2024-02-20 08:14:24<SeP>2024-02-21 19:52:48<SeP>2024-02-23 07:31:12<SeP>2024-02-24 19:09:36<SeP>2024-02-26 06:48:00<SeP>2024-02-27 18:26:24<SeP>2024-02-29 06:04:48<SeP>2024-03-01 17:43:12<SeP>2024-03-03 05:21:36<SeP>2024-03-04 17:00:00<SeP>2024-03-06 04:38:24<SeP>2024-03-07 16:16:48<SeP>2024-03-09 03:55:12<SeP>2024-03-10 16:33:36<SeP>2024-03-12 04:12:00<SeP>2024-03-13 15:50:24<SeP>2024-03-15 03:28:48<SeP>2024-03-16 15:07:12<SeP>2024-03-18 02:45:36<SeP>2024-03-19 14:24:00<SeP>2024-03-21 02:02:24<SeP>2024-03-22 13:40:48<SeP>2024-03-24 01:19:12<SeP>2024-03-25 12:57:36<SeP>2024-03-27 00:36:00<SeP>2024-03-28 12:14:24<SeP>2024-03-29 23:52:48<SeP>2024-03-31 11:31:12<SeP>2024-04-01 23:09:36<SeP>2024-04-03 10:48:00<SeP>2024-04-04 22:26:24<SeP>2024-04-06 10:04:48<SeP>2024-04-07 21:43:12<SeP>2024-04-09 09:21:36<SeP>2024-04-10 21:00:00<SeP>2024-04-12 08:38:24<SeP>2024-04-13 20:16:48<SeP>2024-04-15 07:55:12<SeP>2024-04-16 19:33:36<SeP>2024-04-18 07:12:00<SeP>2024-04-19 18:50:24<SeP>2024-04-21 06:28:48<SeP>2024-04-22 18:07:12<SeP>2024-04-24 05:45:36<SeP>2024-04-25 17:24:00<SeP>2024-04-27 05:02:24<SeP>2024-04-28 16:40:48<SeP>2024-04-30 04:19:12<SeP>2024-05-01 15:57:36<SeP>2024-05-03 03:36:00<SeP>2024-05-04 15:14:24<SeP>2024-05-06 02:52:48<SeP>2024-05-07 14:31:12<SeP>2024-05-09 02:09:36<SeP>2024-05-10 13:48:00<SeP>2024-05-12 01:26:24<SeP>2024-05-13 13:04:48<SeP>2024-05-15 00:43:12<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:00:00<SeP>2024-05-19 11:38:24<SeP>2024-05-20 23:16:48<SeP>2024-05-22 10:55:12<SeP>2024-05-23 22:33:36<SeP>2024-05-25 10:12:00<SeP>2024-05-26 21:50:24<SeP>2024-05-28 09:28:48<SeP>2024-05-29 21:07:12<SeP>2024-05-31 08:45:36<SeP>2024-06-01 20:24:00<SeP>2024-06-03 08:02:24<SeP>2024-06-04 19:40:48<SeP>2024-06-06 07:19:12<SeP>2024-06-07 18:57:36<SeP>2024-06-09 06:36:00<SeP>2024-06-10 18:14:24<SeP>2024-06-12 05:52:48<SeP>2024-06-13 17:31:12<SeP>2024-06-15 05:09:36<SeP>2024-06-16 16:48:00<SeP>2024-06-18 04:26:24<SeP>2024-06-19 16:04:48<SeP>2024-06-21 03:43:12<SeP>2024-06-22 15:21:36<SeP>2024-06-24 03:00:00<SeP>2024-06-25 14:38:24<SeP>2024-06-27 02:16:48<SeP>2024-06-28 13:55:12<SeP>2024-06-30 01:33:36<SeP>2024-07-01 13:12:00<SeP>2024-07-03 00:50:24<SeP>2024-07-04 12:28:48<SeP>2024-07-06 00:07:12<SeP>2024-07-07 11:45:36<SeP>2024-07-08 23:24:00<SeP>2024-07-10 11:02:24<SeP>2024-07-11 22:40:48<SeP>2024-07-13 10:19:12<SeP>2024-07-14 21:57:36<SeP>2024-07-16 09:36:00<SeP>2024-07-17 21:14:24<SeP>2024-07-19 08:52:48<SeP>2024-07-20 20:31:12<SeP>2024-07-22 08:09:36<SeP>2024-07-23 19:48:00<SeP>2024-07-25 07:26:24<SeP>2024-07-26 19:04:48<SeP>2024-07-28 06:43:12<SeP>2024-07-29 18:21:36<SeP>2024-07-31 06:00:00<SeP>2024-08-01 17:38:24<SeP>2024-08-03 05:16:48<SeP>2024-08-04 16:55:12<SeP>2024-08-06 04:33:36<SeP>2024-08-07 16:12:00<SeP>2024-08-09 03:50:24<SeP>2024-08-10 15:28:48<SeP>2024-08-12 03:07:12<SeP>2024-08-13 14:45:36<SeP>2024-08-15 02:24:00<SeP>2024-08-16 14:02:24<SeP>2024-08-18 01:40:48<SeP>2024-08-19 13:19:12<SeP>2024-08-21 00:57:36<SeP>2024-08-22 12:36:00<SeP>2024-08-24 00:14:24<SeP>2024-08-25 11:52:48<SeP>2024-08-26 23:31:12<SeP>2024-08-28 11:09:36<SeP>2024-08-29 22:48:00<SeP>2024-08-31 10:26:24<SeP>2024-09-01 22:04:48<SeP>2024-09-03 09:43:12<SeP>2024-09-04 21:21:36<SeP>2024-09-06 09:00:00<SeP>2024-09-07 20:38:24<SeP>2024-09-09 08:16:48<SeP>2024-09-10 19:55:12<SeP>2024-09-12 07:33:36<SeP>2024-09-13 19:12:00<SeP>2024-09-15 06:50:24<SeP>2024-09-16 18:28:48<SeP>2024-09-18 06:07:12<SeP>2024-09-19 17:45:36<SeP>2024-09-21 05:24:00<SeP>2024-09-22 17:02:24<SeP>2024-09-24 04:40:48<SeP>2024-09-25 16:19:12<SeP>2024-09-27 03:57:36<SeP>2024-09-28 15:36:00<SeP>2024-09-30 03:14:24<SeP>2024-10-01 14:52:48<SeP>2024-10-03 02:31:12<SeP>2024-10-04 14:09:36<SeP>2024-10-06 01:48:00<SeP>2024-10-07 13:26:24<SeP>2024-10-09 01:04:48<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:00:00<SeP>2024-10-14 23:38:24<SeP>2024-10-16 11:16:48<SeP>2024-10-17 22:55:12<SeP>2024-10-19 10:33:36<SeP>2024-10-20 22:12:00<SeP>2024-10-22 09:50:24<SeP>2024-10-23 21:28:48<SeP>2024-10-25 09:07:12<SeP>2024-10-26 20:45:36<SeP>2024-10-28 08:24:00<SeP>2024-10-29 20:02:24<SeP>2024-10-31 07:40:48<SeP>2024-11-01 19:19:12<SeP>2024-11-03 05:57:36<SeP>2024-11-04 17:36:00<SeP>2024-11-06 05:14:24<SeP>2024-11-07 16:52:48<SeP>2024-11-09 04:31:12<SeP>2024-11-10 16:09:36<SeP>2024-11-12 03:48:00<SeP>2024-11-13 15:26:24<SeP>2024-11-15 03:04:48<SeP>2024-11-16 14:43:12<SeP>2024-11-18 02:21:36<SeP>2024-11-19 14:00:00<SeP>2024-11-21 01:38:24<SeP>2024-11-22 13:16:48<SeP>2024-11-24 00:55:12<SeP>2024-11-25 12:33:36<SeP>2024-11-27 00:12:00<SeP>2024-11-28 11:50:24<SeP>2024-11-29 23:28:48<SeP>2024-12-01 11:07:12<SeP>2024-12-02 22:45:36<SeP>2024-12-04 10:24:00<SeP>2024-12-05 22:02:24<SeP>2024-12-07 09:40:48<SeP>2024-12-08 21:19:12<SeP>2024-12-10 08:57:36<SeP>2024-12-11 20:36:00<SeP>2024-12-13 08:14:24<SeP>2024-12-14 19:52:48<SeP>2024-12-16 07:31:12<SeP>2024-12-17 19:09:36<SeP>2024-12-19 06:48:00<SeP>2024-12-20 18:26:24<SeP>2024-12-22 06:04:48<SeP>2024-12-23 17:43:12<SeP>2024-12-25 05:21:36<SeP>2024-12-26 17:00:00<SeP>2024-12-28 04:38:24<SeP>2024-12-29 16:16:48<SeP>2024-12-31 03:55:12<SeP>2025-01-01 15:33:36<SeP>2025-01-03 03:12:00<SeP>2025-01-04 14:50:24<SeP>2025-01-06 02:28:48<SeP>2025-01-07 14:07:12<SeP>2025-01-09 01:45:36<SeP>2025-01-10 13:24:00<SeP>2025-01-12 01:02:24<SeP>2025-01-13 12:40:48<SeP>2025-01-15 00:19:12<SeP>2025-01-16 11:57:36<SeP>2025-01-17 23:36:00<SeP>2025-01-19 11:14:24<SeP>2025-01-20 22:52:48<SeP>2025-01-22 10:31:12<SeP>2025-01-23 22:09:36<SeP>2025-01-25 09:48:00<SeP>2025-01-26 21:26:24<SeP>2025-01-28 09:04:48<SeP>2025-01-29 20:43:12<SeP>2025-01-31 08:21:36<SeP>2025-02-01 20:00:00<SeP>2025-02-03 07:38:24<SeP>2025-02-04 19:16:48<SeP>2025-02-06 06:55:12<SeP>2025-02-07 18:33:36<SeP>2025-02-09 06:12:00<SeP>2025-02-10 17:50:24<SeP>2025-02-12 05:28:48<SeP>2025-02-13 17:07:12<SeP>2025-02-15 04:45:36<SeP>2025-02-16 16:24:00<SeP>2025-02-18 04:02:24<SeP>2025-02-19 15:40:48<SeP>2025-02-21 03:19:12<SeP>2025-02-22 14:57:36<SeP>2025-02-24 02:36:00<SeP>2025-02-25 14:14:24<SeP>2025-02-27 01:52:48<SeP>2025-02-28 13:31:12<SeP>2025-03-02 01:09:36<SeP>2025-03-03 12:48:00<SeP>2025-03-05 00:26:24<SeP>2025-03-06 12:04:48<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:21:36";
  const itemLabel       = "Scans";
  const itemData        = "781<SeP>1521<SeP>1370<SeP>1514<SeP>1255<SeP>1740<SeP>919<SeP>997<SeP>1157<SeP>3391<SeP>3354<SeP>1090<SeP>3320<SeP>877<SeP>785<SeP>883<SeP>1435<SeP>3233<SeP>1470<SeP>1401<SeP>1130<SeP>904<SeP>1120<SeP>1229<SeP>961<SeP>691<SeP>958<SeP>3678<SeP>984<SeP>816<SeP>1372<SeP>1235<SeP>883<SeP>2185<SeP>2060<SeP>2897<SeP>1879<SeP>1836<SeP>1347<SeP>1330<SeP>1809<SeP>1782<SeP>2206<SeP>1616<SeP>1624<SeP>1669<SeP>1736<SeP>1790<SeP>1826<SeP>1818<SeP>1746<SeP>1614<SeP>3158<SeP>1788<SeP>1396<SeP>2203<SeP>1845<SeP>2249<SeP>1344<SeP>3877<SeP>1402<SeP>1557<SeP>1618<SeP>1294<SeP>1897<SeP>1722<SeP>1246<SeP>1435<SeP>1418<SeP>1196<SeP>2311<SeP>1184<SeP>1245<SeP>1291<SeP>7118<SeP>2344<SeP>1429<SeP>1353<SeP>1695<SeP>1962<SeP>1141<SeP>6547<SeP>1730<SeP>1601<SeP>1002<SeP>1304<SeP>3183<SeP>1234<SeP>998<SeP>1047<SeP>1171<SeP>1989<SeP>1997<SeP>1143<SeP>1633<SeP>3814<SeP>5516<SeP>1259<SeP>938<SeP>966<SeP>991<SeP>963<SeP>946<SeP>1133<SeP>2516<SeP>3233<SeP>1639<SeP>1792<SeP>778<SeP>707<SeP>1443<SeP>1322<SeP>1091<SeP>1010<SeP>2297<SeP>1128<SeP>1128<SeP>1090<SeP>1060<SeP>953<SeP>820<SeP>878<SeP>840<SeP>915<SeP>1058<SeP>862<SeP>851<SeP>815<SeP>878<SeP>900<SeP>705<SeP>900<SeP>890<SeP>838<SeP>925<SeP>858<SeP>820<SeP>804<SeP>886<SeP>1009<SeP>816<SeP>859<SeP>900<SeP>957<SeP>1131<SeP>988<SeP>569<SeP>842<SeP>847<SeP>892<SeP>1296<SeP>927<SeP>1137<SeP>1248<SeP>1104<SeP>984<SeP>936<SeP>892<SeP>835<SeP>939<SeP>1082<SeP>986<SeP>834<SeP>950<SeP>1042<SeP>1002<SeP>1052<SeP>1027<SeP>1173<SeP>928<SeP>942<SeP>1206<SeP>2052<SeP>1262<SeP>1021<SeP>1058<SeP>1225<SeP>968<SeP>1007<SeP>732<SeP>748<SeP>1007<SeP>1107<SeP>852<SeP>1118<SeP>1260<SeP>1085<SeP>1203<SeP>1303<SeP>1150<SeP>1353<SeP>1194<SeP>1424<SeP>1493<SeP>1742<SeP>1731<SeP>1380<SeP>765<SeP>836<SeP>1130<SeP>1110<SeP>616<SeP>734<SeP>869<SeP>1008<SeP>1749<SeP>5817<SeP>2331<SeP>2022<SeP>1220<SeP>912<SeP>1030<SeP>884<SeP>988<SeP>980<SeP>1138<SeP>1057<SeP>1035<SeP>2226<SeP>1334<SeP>1079<SeP>1202<SeP>1325<SeP>1192<SeP>1111<SeP>931<SeP>1170<SeP>1062<SeP>1070<SeP>1142<SeP>1094<SeP>1171<SeP>911<SeP>1002<SeP>1380<SeP>1136<SeP>1087<SeP>1343<SeP>1280<SeP>1196<SeP>1550<SeP>1294<SeP>1102<SeP>1098<SeP>1403<SeP>1870<SeP>1375<SeP>1979<SeP>1682<SeP>1550<SeP>1938<SeP>1467<SeP>1212<SeP>1133<SeP>1331<SeP>1355<SeP>1474<SeP>1137<SeP>1391<SeP>1707<SeP>1592<SeP>1562<SeP>1399<SeP>1487<SeP>1275<SeP>1005<SeP>1298<SeP>1190<SeP>1165<SeP>1360<SeP>1324<SeP>1088<SeP>2045<SeP>1298<SeP>1379<SeP>1662<SeP>1385<SeP>1359<SeP>1122<SeP>845<SeP>945<SeP>959<SeP>914<SeP>1086<SeP>1775<SeP>1153<SeP>1154<SeP>1093<SeP>888<SeP>1030<SeP>1003<SeP>1319<SeP>879<SeP>922<SeP>1142<SeP>1392<SeP>1654<SeP>1271<SeP>1090<SeP>1043<SeP>1136<SeP>1806<SeP>970<SeP>1214<SeP>1039<SeP>1576<SeP>1079<SeP>951<SeP>1217<SeP>1113<SeP>882<SeP>916<SeP>1143<SeP>1410<SeP>1588<SeP>1463<SeP>1432<SeP>1270<SeP>915<SeP>1151<SeP>1307<SeP>1127<SeP>1160<SeP>1029<SeP>1047<SeP>1165<SeP>1586<SeP>1321<SeP>1581<SeP>1315<SeP>1440<SeP>1595<SeP>1486<SeP>1353<SeP>1481<SeP>1543<SeP>1256<SeP>1783<SeP>1273<SeP>1524<SeP>1646<SeP>1348<SeP>1437<SeP>1348<SeP>1209<SeP>1333<SeP>1466<SeP>1646<SeP>1327<SeP>1322<SeP>1295<SeP>1388<SeP>1255<SeP>1219<SeP>1572<SeP>1801<SeP>1781<SeP>1185<SeP>619<SeP>1491<SeP>1915<SeP>1265<SeP>1338<SeP>1308<SeP>1072<SeP>1517<SeP>1417<SeP>1369<SeP>1387<SeP>1792<SeP>1344<SeP>1612<SeP>1747<SeP>1270<SeP>1560<SeP>1521<SeP>1742<SeP>1482<SeP>993<SeP>1462<SeP>1852<SeP>1905<SeP>1806<SeP>1728<SeP>1686<SeP>1626<SeP>1645<SeP>1516<SeP>1605<SeP>1607<SeP>1744<SeP>1940<SeP>1433<SeP>1444<SeP>1366<SeP>1730<SeP>1433<SeP>2092<SeP>1602<SeP>2096";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:38:24<SeP>2023-07-28 23:16:48<SeP>2023-07-30 10:55:12<SeP>2023-07-31 22:33:36<SeP>2023-08-02 10:12:00<SeP>2023-08-03 21:50:24<SeP>2023-08-05 09:28:48<SeP>2023-08-06 21:07:12<SeP>2023-08-08 08:45:36<SeP>2023-08-09 20:24:00<SeP>2023-08-11 08:02:24<SeP>2023-08-12 19:40:48<SeP>2023-08-14 07:19:12<SeP>2023-08-15 18:57:36<SeP>2023-08-17 06:36:00<SeP>2023-08-18 18:14:24<SeP>2023-08-20 05:52:48<SeP>2023-08-21 17:31:12<SeP>2023-08-23 05:09:36<SeP>2023-08-24 16:48:00<SeP>2023-08-26 04:26:24<SeP>2023-08-27 16:04:48<SeP>2023-08-29 03:43:12<SeP>2023-08-30 15:21:36<SeP>2023-09-01 03:00:00<SeP>2023-09-02 14:38:24<SeP>2023-09-04 02:16:48<SeP>2023-09-05 13:55:12<SeP>2023-09-07 01:33:36<SeP>2023-09-08 13:12:00<SeP>2023-09-10 00:50:24<SeP>2023-09-11 12:28:48<SeP>2023-09-13 00:07:12<SeP>2023-09-14 11:45:36<SeP>2023-09-15 23:24:00<SeP>2023-09-17 11:02:24<SeP>2023-09-18 22:40:48<SeP>2023-09-20 10:19:12<SeP>2023-09-21 21:57:36<SeP>2023-09-23 09:36:00<SeP>2023-09-24 21:14:24<SeP>2023-09-26 08:52:48<SeP>2023-09-27 20:31:12<SeP>2023-09-29 08:09:36<SeP>2023-09-30 19:48:00<SeP>2023-10-02 07:26:24<SeP>2023-10-03 19:04:48<SeP>2023-10-05 06:43:12<SeP>2023-10-06 18:21:36<SeP>2023-10-08 06:00:00<SeP>2023-10-09 17:38:24<SeP>2023-10-11 05:16:48<SeP>2023-10-12 16:55:12<SeP>2023-10-14 04:33:36<SeP>2023-10-15 16:12:00<SeP>2023-10-17 03:50:24<SeP>2023-10-18 15:28:48<SeP>2023-10-20 03:07:12<SeP>2023-10-21 14:45:36<SeP>2023-10-23 02:24:00<SeP>2023-10-24 14:02:24<SeP>2023-10-26 01:40:48<SeP>2023-10-27 13:19:12<SeP>2023-10-29 00:57:36<SeP>2023-10-30 12:36:00<SeP>2023-11-01 00:14:24<SeP>2023-11-02 11:52:48<SeP>2023-11-03 23:31:12<SeP>2023-11-05 10:09:36<SeP>2023-11-06 21:48:00<SeP>2023-11-08 09:26:24<SeP>2023-11-09 21:04:48<SeP>2023-11-11 08:43:12<SeP>2023-11-12 20:21:36<SeP>2023-11-14 08:00:00<SeP>2023-11-15 19:38:24<SeP>2023-11-17 07:16:48<SeP>2023-11-18 18:55:12<SeP>2023-11-20 06:33:36<SeP>2023-11-21 18:12:00<SeP>2023-11-23 05:50:24<SeP>2023-11-24 17:28:48<SeP>2023-11-26 05:07:12<SeP>2023-11-27 16:45:36<SeP>2023-11-29 04:24:00<SeP>2023-11-30 16:02:24<SeP>2023-12-02 03:40:48<SeP>2023-12-03 15:19:12<SeP>2023-12-05 02:57:36<SeP>2023-12-06 14:36:00<SeP>2023-12-08 02:14:24<SeP>2023-12-09 13:52:48<SeP>2023-12-11 01:31:12<SeP>2023-12-12 13:09:36<SeP>2023-12-14 00:48:00<SeP>2023-12-15 12:26:24<SeP>2023-12-17 00:04:48<SeP>2023-12-18 11:43:12<SeP>2023-12-19 23:21:36<SeP>2023-12-21 11:00:00<SeP>2023-12-22 22:38:24<SeP>2023-12-24 10:16:48<SeP>2023-12-25 21:55:12<SeP>2023-12-27 09:33:36<SeP>2023-12-28 21:12:00<SeP>2023-12-30 08:50:24<SeP>2023-12-31 20:28:48<SeP>2024-01-02 08:07:12<SeP>2024-01-03 19:45:36<SeP>2024-01-05 07:24:00<SeP>2024-01-06 19:02:24<SeP>2024-01-08 06:40:48<SeP>2024-01-09 18:19:12<SeP>2024-01-11 05:57:36<SeP>2024-01-12 17:36:00<SeP>2024-01-14 05:14:24<SeP>2024-01-15 16:52:48<SeP>2024-01-17 04:31:12<SeP>2024-01-18 16:09:36<SeP>2024-01-20 03:48:00<SeP>2024-01-21 15:26:24<SeP>2024-01-23 03:04:48<SeP>2024-01-24 14:43:12<SeP>2024-01-26 02:21:36<SeP>2024-01-27 14:00:00<SeP>2024-01-29 01:38:24<SeP>2024-01-30 13:16:48<SeP>2024-02-01 00:55:12<SeP>2024-02-02 12:33:36<SeP>2024-02-04 00:12:00<SeP>2024-02-05 11:50:24<SeP>2024-02-06 23:28:48<SeP>2024-02-08 11:07:12<SeP>2024-02-09 22:45:36<SeP>2024-02-11 10:24:00<SeP>2024-02-12 22:02:24<SeP>2024-02-14 09:40:48<SeP>2024-02-15 21:19:12<SeP>2024-02-17 08:57:36<SeP>2024-02-18 20:36:00<SeP>2024-02-20 08:14:24<SeP>2024-02-21 19:52:48<SeP>2024-02-23 07:31:12<SeP>2024-02-24 19:09:36<SeP>2024-02-26 06:48:00<SeP>2024-02-27 18:26:24<SeP>2024-02-29 06:04:48<SeP>2024-03-01 17:43:12<SeP>2024-03-03 05:21:36<SeP>2024-03-04 17:00:00<SeP>2024-03-06 04:38:24<SeP>2024-03-07 16:16:48<SeP>2024-03-09 03:55:12<SeP>2024-03-10 16:33:36<SeP>2024-03-12 04:12:00<SeP>2024-03-13 15:50:24<SeP>2024-03-15 03:28:48<SeP>2024-03-16 15:07:12<SeP>2024-03-18 02:45:36<SeP>2024-03-19 14:24:00<SeP>2024-03-21 02:02:24<SeP>2024-03-22 13:40:48<SeP>2024-03-24 01:19:12<SeP>2024-03-25 12:57:36<SeP>2024-03-27 00:36:00<SeP>2024-03-28 12:14:24<SeP>2024-03-29 23:52:48<SeP>2024-03-31 11:31:12<SeP>2024-04-01 23:09:36<SeP>2024-04-03 10:48:00<SeP>2024-04-04 22:26:24<SeP>2024-04-06 10:04:48<SeP>2024-04-07 21:43:12<SeP>2024-04-09 09:21:36<SeP>2024-04-10 21:00:00<SeP>2024-04-12 08:38:24<SeP>2024-04-13 20:16:48<SeP>2024-04-15 07:55:12<SeP>2024-04-16 19:33:36<SeP>2024-04-18 07:12:00<SeP>2024-04-19 18:50:24<SeP>2024-04-21 06:28:48<SeP>2024-04-22 18:07:12<SeP>2024-04-24 05:45:36<SeP>2024-04-25 17:24:00<SeP>2024-04-27 05:02:24<SeP>2024-04-28 16:40:48<SeP>2024-04-30 04:19:12<SeP>2024-05-01 15:57:36<SeP>2024-05-03 03:36:00<SeP>2024-05-04 15:14:24<SeP>2024-05-06 02:52:48<SeP>2024-05-07 14:31:12<SeP>2024-05-09 02:09:36<SeP>2024-05-10 13:48:00<SeP>2024-05-12 01:26:24<SeP>2024-05-13 13:04:48<SeP>2024-05-15 00:43:12<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:00:00<SeP>2024-05-19 11:38:24<SeP>2024-05-20 23:16:48<SeP>2024-05-22 10:55:12<SeP>2024-05-23 22:33:36<SeP>2024-05-25 10:12:00<SeP>2024-05-26 21:50:24<SeP>2024-05-28 09:28:48<SeP>2024-05-29 21:07:12<SeP>2024-05-31 08:45:36<SeP>2024-06-01 20:24:00<SeP>2024-06-03 08:02:24<SeP>2024-06-04 19:40:48<SeP>2024-06-06 07:19:12<SeP>2024-06-07 18:57:36<SeP>2024-06-09 06:36:00<SeP>2024-06-10 18:14:24<SeP>2024-06-12 05:52:48<SeP>2024-06-13 17:31:12<SeP>2024-06-15 05:09:36<SeP>2024-06-16 16:48:00<SeP>2024-06-18 04:26:24<SeP>2024-06-19 16:04:48<SeP>2024-06-21 03:43:12<SeP>2024-06-22 15:21:36<SeP>2024-06-24 03:00:00<SeP>2024-06-25 14:38:24<SeP>2024-06-27 02:16:48<SeP>2024-06-28 13:55:12<SeP>2024-06-30 01:33:36<SeP>2024-07-01 13:12:00<SeP>2024-07-03 00:50:24<SeP>2024-07-04 12:28:48<SeP>2024-07-06 00:07:12<SeP>2024-07-07 11:45:36<SeP>2024-07-08 23:24:00<SeP>2024-07-10 11:02:24<SeP>2024-07-11 22:40:48<SeP>2024-07-13 10:19:12<SeP>2024-07-14 21:57:36<SeP>2024-07-16 09:36:00<SeP>2024-07-17 21:14:24<SeP>2024-07-19 08:52:48<SeP>2024-07-20 20:31:12<SeP>2024-07-22 08:09:36<SeP>2024-07-23 19:48:00<SeP>2024-07-25 07:26:24<SeP>2024-07-26 19:04:48<SeP>2024-07-28 06:43:12<SeP>2024-07-29 18:21:36<SeP>2024-07-31 06:00:00<SeP>2024-08-01 17:38:24<SeP>2024-08-03 05:16:48<SeP>2024-08-04 16:55:12<SeP>2024-08-06 04:33:36<SeP>2024-08-07 16:12:00<SeP>2024-08-09 03:50:24<SeP>2024-08-10 15:28:48<SeP>2024-08-12 03:07:12<SeP>2024-08-13 14:45:36<SeP>2024-08-15 02:24:00<SeP>2024-08-16 14:02:24<SeP>2024-08-18 01:40:48<SeP>2024-08-19 13:19:12<SeP>2024-08-21 00:57:36<SeP>2024-08-22 12:36:00<SeP>2024-08-24 00:14:24<SeP>2024-08-25 11:52:48<SeP>2024-08-26 23:31:12<SeP>2024-08-28 11:09:36<SeP>2024-08-29 22:48:00<SeP>2024-08-31 10:26:24<SeP>2024-09-01 22:04:48<SeP>2024-09-03 09:43:12<SeP>2024-09-04 21:21:36<SeP>2024-09-06 09:00:00<SeP>2024-09-07 20:38:24<SeP>2024-09-09 08:16:48<SeP>2024-09-10 19:55:12<SeP>2024-09-12 07:33:36<SeP>2024-09-13 19:12:00<SeP>2024-09-15 06:50:24<SeP>2024-09-16 18:28:48<SeP>2024-09-18 06:07:12<SeP>2024-09-19 17:45:36<SeP>2024-09-21 05:24:00<SeP>2024-09-22 17:02:24<SeP>2024-09-24 04:40:48<SeP>2024-09-25 16:19:12<SeP>2024-09-27 03:57:36<SeP>2024-09-28 15:36:00<SeP>2024-09-30 03:14:24<SeP>2024-10-01 14:52:48<SeP>2024-10-03 02:31:12<SeP>2024-10-04 14:09:36<SeP>2024-10-06 01:48:00<SeP>2024-10-07 13:26:24<SeP>2024-10-09 01:04:48<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:00:00<SeP>2024-10-14 23:38:24<SeP>2024-10-16 11:16:48<SeP>2024-10-17 22:55:12<SeP>2024-10-19 10:33:36<SeP>2024-10-20 22:12:00<SeP>2024-10-22 09:50:24<SeP>2024-10-23 21:28:48<SeP>2024-10-25 09:07:12<SeP>2024-10-26 20:45:36<SeP>2024-10-28 08:24:00<SeP>2024-10-29 20:02:24<SeP>2024-10-31 07:40:48<SeP>2024-11-01 19:19:12<SeP>2024-11-03 05:57:36<SeP>2024-11-04 17:36:00<SeP>2024-11-06 05:14:24<SeP>2024-11-07 16:52:48<SeP>2024-11-09 04:31:12<SeP>2024-11-10 16:09:36<SeP>2024-11-12 03:48:00<SeP>2024-11-13 15:26:24<SeP>2024-11-15 03:04:48<SeP>2024-11-16 14:43:12<SeP>2024-11-18 02:21:36<SeP>2024-11-19 14:00:00<SeP>2024-11-21 01:38:24<SeP>2024-11-22 13:16:48<SeP>2024-11-24 00:55:12<SeP>2024-11-25 12:33:36<SeP>2024-11-27 00:12:00<SeP>2024-11-28 11:50:24<SeP>2024-11-29 23:28:48<SeP>2024-12-01 11:07:12<SeP>2024-12-02 22:45:36<SeP>2024-12-04 10:24:00<SeP>2024-12-05 22:02:24<SeP>2024-12-07 09:40:48<SeP>2024-12-08 21:19:12<SeP>2024-12-10 08:57:36<SeP>2024-12-11 20:36:00<SeP>2024-12-13 08:14:24<SeP>2024-12-14 19:52:48<SeP>2024-12-16 07:31:12<SeP>2024-12-17 19:09:36<SeP>2024-12-19 06:48:00<SeP>2024-12-20 18:26:24<SeP>2024-12-22 06:04:48<SeP>2024-12-23 17:43:12<SeP>2024-12-25 05:21:36<SeP>2024-12-26 17:00:00<SeP>2024-12-28 04:38:24<SeP>2024-12-29 16:16:48<SeP>2024-12-31 03:55:12<SeP>2025-01-01 15:33:36<SeP>2025-01-03 03:12:00<SeP>2025-01-04 14:50:24<SeP>2025-01-06 02:28:48<SeP>2025-01-07 14:07:12<SeP>2025-01-09 01:45:36<SeP>2025-01-10 13:24:00<SeP>2025-01-12 01:02:24<SeP>2025-01-13 12:40:48<SeP>2025-01-15 00:19:12<SeP>2025-01-16 11:57:36<SeP>2025-01-17 23:36:00<SeP>2025-01-19 11:14:24<SeP>2025-01-20 22:52:48<SeP>2025-01-22 10:31:12<SeP>2025-01-23 22:09:36<SeP>2025-01-25 09:48:00<SeP>2025-01-26 21:26:24<SeP>2025-01-28 09:04:48<SeP>2025-01-29 20:43:12<SeP>2025-01-31 08:21:36<SeP>2025-02-01 20:00:00<SeP>2025-02-03 07:38:24<SeP>2025-02-04 19:16:48<SeP>2025-02-06 06:55:12<SeP>2025-02-07 18:33:36<SeP>2025-02-09 06:12:00<SeP>2025-02-10 17:50:24<SeP>2025-02-12 05:28:48<SeP>2025-02-13 17:07:12<SeP>2025-02-15 04:45:36<SeP>2025-02-16 16:24:00<SeP>2025-02-18 04:02:24<SeP>2025-02-19 15:40:48<SeP>2025-02-21 03:19:12<SeP>2025-02-22 14:57:36<SeP>2025-02-24 02:36:00<SeP>2025-02-25 14:14:24<SeP>2025-02-27 01:52:48<SeP>2025-02-28 13:31:12<SeP>2025-03-02 01:09:36<SeP>2025-03-03 12:48:00<SeP>2025-03-05 00:26:24<SeP>2025-03-06 12:04:48<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:21:36";
  const itemLabel       = "Attacks";
  const itemData        = "195<SeP>575<SeP>1401<SeP>654<SeP>225<SeP>234<SeP>7036<SeP>603<SeP>9384<SeP>563<SeP>402<SeP>1130<SeP>1298<SeP>244<SeP>308<SeP>306<SeP>174<SeP>749<SeP>341<SeP>8279<SeP>6882<SeP>6780<SeP>10039<SeP>1488<SeP>289<SeP>414<SeP>173<SeP>383<SeP>5931<SeP>82<SeP>391<SeP>184<SeP>491<SeP>886<SeP>10074<SeP>8930<SeP>10278<SeP>10244<SeP>5382<SeP>6282<SeP>8492<SeP>8012<SeP>10234<SeP>7624<SeP>7448<SeP>9240<SeP>9043<SeP>8150<SeP>7799<SeP>5370<SeP>10272<SeP>9450<SeP>6764<SeP>8045<SeP>9238<SeP>8747<SeP>18870<SeP>16966<SeP>8869<SeP>11260<SeP>6632<SeP>8910<SeP>8021<SeP>8898<SeP>9312<SeP>6189<SeP>6538<SeP>7182<SeP>7142<SeP>2387<SeP>6141<SeP>5789<SeP>7084<SeP>6402<SeP>8102<SeP>3971<SeP>5474<SeP>8058<SeP>4468<SeP>6463<SeP>5663<SeP>4783<SeP>7630<SeP>5354<SeP>5380<SeP>5677<SeP>9866<SeP>21097<SeP>33185<SeP>10774<SeP>9385<SeP>5739<SeP>7293<SeP>13036<SeP>6012<SeP>4497<SeP>5293<SeP>4881<SeP>6379<SeP>5455<SeP>8636<SeP>5502<SeP>6551<SeP>5281<SeP>4539<SeP>8858<SeP>8760<SeP>7614<SeP>6633<SeP>4155<SeP>10335<SeP>9354<SeP>5845<SeP>3193<SeP>6233<SeP>9321<SeP>5643<SeP>6781<SeP>9679<SeP>4690<SeP>2183<SeP>1579<SeP>1967<SeP>1816<SeP>2278<SeP>1088<SeP>1421<SeP>515<SeP>1476<SeP>1503<SeP>1153<SeP>1136<SeP>823<SeP>1162<SeP>733<SeP>1543<SeP>1475<SeP>1048<SeP>1735<SeP>2071<SeP>1635<SeP>12033<SeP>5843<SeP>11160<SeP>7310<SeP>5588<SeP>10682<SeP>9113<SeP>9320<SeP>8570<SeP>14131<SeP>8728<SeP>10813<SeP>11126<SeP>12206<SeP>11198<SeP>7837<SeP>3985<SeP>7369<SeP>21225<SeP>10682<SeP>7471<SeP>7556<SeP>13174<SeP>13045<SeP>8836<SeP>4815<SeP>7413<SeP>8891<SeP>24522<SeP>7478<SeP>10089<SeP>10034<SeP>5155<SeP>5612<SeP>7306<SeP>15383<SeP>5236<SeP>13557<SeP>7198<SeP>7343<SeP>8732<SeP>5732<SeP>4233<SeP>7228<SeP>7032<SeP>5427<SeP>6746<SeP>8054<SeP>3617<SeP>21532<SeP>7798<SeP>7086<SeP>6032<SeP>8610<SeP>10432<SeP>7369<SeP>2502<SeP>5980<SeP>4267<SeP>4683<SeP>4477<SeP>1496<SeP>619<SeP>642<SeP>203<SeP>540<SeP>641<SeP>782<SeP>446<SeP>924<SeP>1564<SeP>3197<SeP>1033<SeP>22516<SeP>1929<SeP>4420<SeP>2906<SeP>3656<SeP>6936<SeP>4182<SeP>2582<SeP>3829<SeP>3001<SeP>2784<SeP>3965<SeP>3699<SeP>2252<SeP>3675<SeP>1250<SeP>2418<SeP>2196<SeP>1552<SeP>959<SeP>1695<SeP>953<SeP>1627<SeP>1984<SeP>26269<SeP>1816<SeP>4349<SeP>3543<SeP>2088<SeP>4186<SeP>2033<SeP>2700<SeP>3336<SeP>3067<SeP>2919<SeP>3155<SeP>2775<SeP>3281<SeP>6635<SeP>5006<SeP>3558<SeP>4035<SeP>3048<SeP>3212<SeP>4294<SeP>5820<SeP>8186<SeP>5669<SeP>2322<SeP>3303<SeP>2446<SeP>5607<SeP>2929<SeP>3233<SeP>2436<SeP>4484<SeP>5592<SeP>3064<SeP>6153<SeP>4278<SeP>6181<SeP>4576<SeP>5718<SeP>6470<SeP>20826<SeP>5047<SeP>11058<SeP>1949<SeP>3868<SeP>4632<SeP>3564<SeP>4242<SeP>5184<SeP>3684<SeP>4995<SeP>4252<SeP>3533<SeP>3324<SeP>1267<SeP>1965<SeP>3268<SeP>2878<SeP>2830<SeP>3329<SeP>4340<SeP>4156<SeP>3092<SeP>4653<SeP>3455<SeP>3202<SeP>4116<SeP>8343<SeP>6119<SeP>5682<SeP>5199<SeP>4817<SeP>3619<SeP>3614<SeP>4630<SeP>5777<SeP>5623<SeP>4735<SeP>4093<SeP>1560<SeP>472<SeP>2559<SeP>1332<SeP>628<SeP>2349<SeP>1544<SeP>837<SeP>3300<SeP>4236<SeP>6496<SeP>25967<SeP>12880<SeP>5589<SeP>15731<SeP>12976<SeP>5370<SeP>6350<SeP>4651<SeP>24363<SeP>4946<SeP>5274<SeP>4741<SeP>5343<SeP>6764<SeP>29201<SeP>4753<SeP>4032<SeP>4234<SeP>3728<SeP>6720<SeP>3599<SeP>3881<SeP>3290<SeP>4243<SeP>5916<SeP>4514<SeP>17735<SeP>5823<SeP>6704<SeP>4899<SeP>1570<SeP>3826<SeP>4993<SeP>3589<SeP>4351<SeP>2862<SeP>3937<SeP>2391<SeP>4079<SeP>4225<SeP>7974<SeP>10580<SeP>8490<SeP>8744<SeP>9606<SeP>7027<SeP>5789<SeP>5186<SeP>4355<SeP>26282<SeP>2939<SeP>3255<SeP>4518<SeP>4710<SeP>11017<SeP>4892<SeP>4010<SeP>5144<SeP>3471<SeP>5013<SeP>9584<SeP>8461<SeP>4434<SeP>2813<SeP>3506<SeP>1974<SeP>2310<SeP>2548<SeP>2097<SeP>2461<SeP>1664<SeP>3080";
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:38:24<SeP>2023-07-28 23:16:48<SeP>2023-07-30 10:55:12<SeP>2023-07-31 22:33:36<SeP>2023-08-02 10:12:00<SeP>2023-08-03 21:50:24<SeP>2023-08-05 09:28:48<SeP>2023-08-06 21:07:12<SeP>2023-08-08 08:45:36<SeP>2023-08-09 20:24:00<SeP>2023-08-11 08:02:24<SeP>2023-08-12 19:40:48<SeP>2023-08-14 07:19:12<SeP>2023-08-15 18:57:36<SeP>2023-08-17 06:36:00<SeP>2023-08-18 18:14:24<SeP>2023-08-20 05:52:48<SeP>2023-08-21 17:31:12<SeP>2023-08-23 05:09:36<SeP>2023-08-24 16:48:00<SeP>2023-08-26 04:26:24<SeP>2023-08-27 16:04:48<SeP>2023-08-29 03:43:12<SeP>2023-08-30 15:21:36<SeP>2023-09-01 03:00:00<SeP>2023-09-02 14:38:24<SeP>2023-09-04 02:16:48<SeP>2023-09-05 13:55:12<SeP>2023-09-07 01:33:36<SeP>2023-09-08 13:12:00<SeP>2023-09-10 00:50:24<SeP>2023-09-11 12:28:48<SeP>2023-09-13 00:07:12<SeP>2023-09-14 11:45:36<SeP>2023-09-15 23:24:00<SeP>2023-09-17 11:02:24<SeP>2023-09-18 22:40:48<SeP>2023-09-20 10:19:12<SeP>2023-09-21 21:57:36<SeP>2023-09-23 09:36:00<SeP>2023-09-24 21:14:24<SeP>2023-09-26 08:52:48<SeP>2023-09-27 20:31:12<SeP>2023-09-29 08:09:36<SeP>2023-09-30 19:48:00<SeP>2023-10-02 07:26:24<SeP>2023-10-03 19:04:48<SeP>2023-10-05 06:43:12<SeP>2023-10-06 18:21:36<SeP>2023-10-08 06:00:00<SeP>2023-10-09 17:38:24<SeP>2023-10-11 05:16:48<SeP>2023-10-12 16:55:12<SeP>2023-10-14 04:33:36<SeP>2023-10-15 16:12:00<SeP>2023-10-17 03:50:24<SeP>2023-10-18 15:28:48<SeP>2023-10-20 03:07:12<SeP>2023-10-21 14:45:36<SeP>2023-10-23 02:24:00<SeP>2023-10-24 14:02:24<SeP>2023-10-26 01:40:48<SeP>2023-10-27 13:19:12<SeP>2023-10-29 00:57:36<SeP>2023-10-30 12:36:00<SeP>2023-11-01 00:14:24<SeP>2023-11-02 11:52:48<SeP>2023-11-03 23:31:12<SeP>2023-11-05 10:09:36<SeP>2023-11-06 21:48:00<SeP>2023-11-08 09:26:24<SeP>2023-11-09 21:04:48<SeP>2023-11-11 08:43:12<SeP>2023-11-12 20:21:36<SeP>2023-11-14 08:00:00<SeP>2023-11-15 19:38:24<SeP>2023-11-17 07:16:48<SeP>2023-11-18 18:55:12<SeP>2023-11-20 06:33:36<SeP>2023-11-21 18:12:00<SeP>2023-11-23 05:50:24<SeP>2023-11-24 17:28:48<SeP>2023-11-26 05:07:12<SeP>2023-11-27 16:45:36<SeP>2023-11-29 04:24:00<SeP>2023-11-30 16:02:24<SeP>2023-12-02 03:40:48<SeP>2023-12-03 15:19:12<SeP>2023-12-05 02:57:36<SeP>2023-12-06 14:36:00<SeP>2023-12-08 02:14:24<SeP>2023-12-09 13:52:48<SeP>2023-12-11 01:31:12<SeP>2023-12-12 13:09:36<SeP>2023-12-14 00:48:00<SeP>2023-12-15 12:26:24<SeP>2023-12-17 00:04:48<SeP>2023-12-18 11:43:12<SeP>2023-12-19 23:21:36<SeP>2023-12-21 11:00:00<SeP>2023-12-22 22:38:24<SeP>2023-12-24 10:16:48<SeP>2023-12-25 21:55:12<SeP>2023-12-27 09:33:36<SeP>2023-12-28 21:12:00<SeP>2023-12-30 08:50:24<SeP>2023-12-31 20:28:48<SeP>2024-01-02 08:07:12<SeP>2024-01-03 19:45:36<SeP>2024-01-05 07:24:00<SeP>2024-01-06 19:02:24<SeP>2024-01-08 06:40:48<SeP>2024-01-09 18:19:12<SeP>2024-01-11 05:57:36<SeP>2024-01-12 17:36:00<SeP>2024-01-14 05:14:24<SeP>2024-01-15 16:52:48<SeP>2024-01-17 04:31:12<SeP>2024-01-18 16:09:36<SeP>2024-01-20 03:48:00<SeP>2024-01-21 15:26:24<SeP>2024-01-23 03:04:48<SeP>2024-01-24 14:43:12<SeP>2024-01-26 02:21:36<SeP>2024-01-27 14:00:00<SeP>2024-01-29 01:38:24<SeP>2024-01-30 13:16:48<SeP>2024-02-01 00:55:12<SeP>2024-02-02 12:33:36<SeP>2024-02-04 00:12:00<SeP>2024-02-05 11:50:24<SeP>2024-02-06 23:28:48<SeP>2024-02-08 11:07:12<SeP>2024-02-09 22:45:36<SeP>2024-02-11 10:24:00<SeP>2024-02-12 22:02:24<SeP>2024-02-14 09:40:48<SeP>2024-02-15 21:19:12<SeP>2024-02-17 08:57:36<SeP>2024-02-18 20:36:00<SeP>2024-02-20 08:14:24<SeP>2024-02-21 19:52:48<SeP>2024-02-23 07:31:12<SeP>2024-02-24 19:09:36<SeP>2024-02-26 06:48:00<SeP>2024-02-27 18:26:24<SeP>2024-02-29 06:04:48<SeP>2024-03-01 17:43:12<SeP>2024-03-03 05:21:36<SeP>2024-03-04 17:00:00<SeP>2024-03-06 04:38:24<SeP>2024-03-07 16:16:48<SeP>2024-03-09 03:55:12<SeP>2024-03-10 16:33:36<SeP>2024-03-12 04:12:00<SeP>2024-03-13 15:50:24<SeP>2024-03-15 03:28:48<SeP>2024-03-16 15:07:12<SeP>2024-03-18 02:45:36<SeP>2024-03-19 14:24:00<SeP>2024-03-21 02:02:24<SeP>2024-03-22 13:40:48<SeP>2024-03-24 01:19:12<SeP>2024-03-25 12:57:36<SeP>2024-03-27 00:36:00<SeP>2024-03-28 12:14:24<SeP>2024-03-29 23:52:48<SeP>2024-03-31 11:31:12<SeP>2024-04-01 23:09:36<SeP>2024-04-03 10:48:00<SeP>2024-04-04 22:26:24<SeP>2024-04-06 10:04:48<SeP>2024-04-07 21:43:12<SeP>2024-04-09 09:21:36<SeP>2024-04-10 21:00:00<SeP>2024-04-12 08:38:24<SeP>2024-04-13 20:16:48<SeP>2024-04-15 07:55:12<SeP>2024-04-16 19:33:36<SeP>2024-04-18 07:12:00<SeP>2024-04-19 18:50:24<SeP>2024-04-21 06:28:48<SeP>2024-04-22 18:07:12<SeP>2024-04-24 05:45:36<SeP>2024-04-25 17:24:00<SeP>2024-04-27 05:02:24<SeP>2024-04-28 16:40:48<SeP>2024-04-30 04:19:12<SeP>2024-05-01 15:57:36<SeP>2024-05-03 03:36:00<SeP>2024-05-04 15:14:24<SeP>2024-05-06 02:52:48<SeP>2024-05-07 14:31:12<SeP>2024-05-09 02:09:36<SeP>2024-05-10 13:48:00<SeP>2024-05-12 01:26:24<SeP>2024-05-13 13:04:48<SeP>2024-05-15 00:43:12<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:00:00<SeP>2024-05-19 11:38:24<SeP>2024-05-20 23:16:48<SeP>2024-05-22 10:55:12<SeP>2024-05-23 22:33:36<SeP>2024-05-25 10:12:00<SeP>2024-05-26 21:50:24<SeP>2024-05-28 09:28:48<SeP>2024-05-29 21:07:12<SeP>2024-05-31 08:45:36<SeP>2024-06-01 20:24:00<SeP>2024-06-03 08:02:24<SeP>2024-06-04 19:40:48<SeP>2024-06-06 07:19:12<SeP>2024-06-07 18:57:36<SeP>2024-06-09 06:36:00<SeP>2024-06-10 18:14:24<SeP>2024-06-12 05:52:48<SeP>2024-06-13 17:31:12<SeP>2024-06-15 05:09:36<SeP>2024-06-16 16:48:00<SeP>2024-06-18 04:26:24<SeP>2024-06-19 16:04:48<SeP>2024-06-21 03:43:12<SeP>2024-06-22 15:21:36<SeP>2024-06-24 03:00:00<SeP>2024-06-25 14:38:24<SeP>2024-06-27 02:16:48<SeP>2024-06-28 13:55:12<SeP>2024-06-30 01:33:36<SeP>2024-07-01 13:12:00<SeP>2024-07-03 00:50:24<SeP>2024-07-04 12:28:48<SeP>2024-07-06 00:07:12<SeP>2024-07-07 11:45:36<SeP>2024-07-08 23:24:00<SeP>2024-07-10 11:02:24<SeP>2024-07-11 22:40:48<SeP>2024-07-13 10:19:12<SeP>2024-07-14 21:57:36<SeP>2024-07-16 09:36:00<SeP>2024-07-17 21:14:24<SeP>2024-07-19 08:52:48<SeP>2024-07-20 20:31:12<SeP>2024-07-22 08:09:36<SeP>2024-07-23 19:48:00<SeP>2024-07-25 07:26:24<SeP>2024-07-26 19:04:48<SeP>2024-07-28 06:43:12<SeP>2024-07-29 18:21:36<SeP>2024-07-31 06:00:00<SeP>2024-08-01 17:38:24<SeP>2024-08-03 05:16:48<SeP>2024-08-04 16:55:12<SeP>2024-08-06 04:33:36<SeP>2024-08-07 16:12:00<SeP>2024-08-09 03:50:24<SeP>2024-08-10 15:28:48<SeP>2024-08-12 03:07:12<SeP>2024-08-13 14:45:36<SeP>2024-08-15 02:24:00<SeP>2024-08-16 14:02:24<SeP>2024-08-18 01:40:48<SeP>2024-08-19 13:19:12<SeP>2024-08-21 00:57:36<SeP>2024-08-22 12:36:00<SeP>2024-08-24 00:14:24<SeP>2024-08-25 11:52:48<SeP>2024-08-26 23:31:12<SeP>2024-08-28 11:09:36<SeP>2024-08-29 22:48:00<SeP>2024-08-31 10:26:24<SeP>2024-09-01 22:04:48<SeP>2024-09-03 09:43:12<SeP>2024-09-04 21:21:36<SeP>2024-09-06 09:00:00<SeP>2024-09-07 20:38:24<SeP>2024-09-09 08:16:48<SeP>2024-09-10 19:55:12<SeP>2024-09-12 07:33:36<SeP>2024-09-13 19:12:00<SeP>2024-09-15 06:50:24<SeP>2024-09-16 18:28:48<SeP>2024-09-18 06:07:12<SeP>2024-09-19 17:45:36<SeP>2024-09-21 05:24:00<SeP>2024-09-22 17:02:24<SeP>2024-09-24 04:40:48<SeP>2024-09-25 16:19:12<SeP>2024-09-27 03:57:36<SeP>2024-09-28 15:36:00<SeP>2024-09-30 03:14:24<SeP>2024-10-01 14:52:48<SeP>2024-10-03 02:31:12<SeP>2024-10-04 14:09:36<SeP>2024-10-06 01:48:00<SeP>2024-10-07 13:26:24<SeP>2024-10-09 01:04:48<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:00:00<SeP>2024-10-14 23:38:24<SeP>2024-10-16 11:16:48<SeP>2024-10-17 22:55:12<SeP>2024-10-19 10:33:36<SeP>2024-10-20 22:12:00<SeP>2024-10-22 09:50:24<SeP>2024-10-23 21:28:48<SeP>2024-10-25 09:07:12<SeP>2024-10-26 20:45:36<SeP>2024-10-28 08:24:00<SeP>2024-10-29 20:02:24<SeP>2024-10-31 07:40:48<SeP>2024-11-01 19:19:12<SeP>2024-11-03 05:57:36<SeP>2024-11-04 17:36:00<SeP>2024-11-06 05:14:24<SeP>2024-11-07 16:52:48<SeP>2024-11-09 04:31:12<SeP>2024-11-10 16:09:36<SeP>2024-11-12 03:48:00<SeP>2024-11-13 15:26:24<SeP>2024-11-15 03:04:48<SeP>2024-11-16 14:43:12<SeP>2024-11-18 02:21:36<SeP>2024-11-19 14:00:00<SeP>2024-11-21 01:38:24<SeP>2024-11-22 13:16:48<SeP>2024-11-24 00:55:12<SeP>2024-11-25 12:33:36<SeP>2024-11-27 00:12:00<SeP>2024-11-28 11:50:24<SeP>2024-11-29 23:28:48<SeP>2024-12-01 11:07:12<SeP>2024-12-02 22:45:36<SeP>2024-12-04 10:24:00<SeP>2024-12-05 22:02:24<SeP>2024-12-07 09:40:48<SeP>2024-12-08 21:19:12<SeP>2024-12-10 08:57:36<SeP>2024-12-11 20:36:00<SeP>2024-12-13 08:14:24<SeP>2024-12-14 19:52:48<SeP>2024-12-16 07:31:12<SeP>2024-12-17 19:09:36<SeP>2024-12-19 06:48:00<SeP>2024-12-20 18:26:24<SeP>2024-12-22 06:04:48<SeP>2024-12-23 17:43:12<SeP>2024-12-25 05:21:36<SeP>2024-12-26 17:00:00<SeP>2024-12-28 04:38:24<SeP>2024-12-29 16:16:48<SeP>2024-12-31 03:55:12<SeP>2025-01-01 15:33:36<SeP>2025-01-03 03:12:00<SeP>2025-01-04 14:50:24<SeP>2025-01-06 02:28:48<SeP>2025-01-07 14:07:12<SeP>2025-01-09 01:45:36<SeP>2025-01-10 13:24:00<SeP>2025-01-12 01:02:24<SeP>2025-01-13 12:40:48<SeP>2025-01-15 00:19:12<SeP>2025-01-16 11:57:36<SeP>2025-01-17 23:36:00<SeP>2025-01-19 11:14:24<SeP>2025-01-20 22:52:48<SeP>2025-01-22 10:31:12<SeP>2025-01-23 22:09:36<SeP>2025-01-25 09:48:00<SeP>2025-01-26 21:26:24<SeP>2025-01-28 09:04:48<SeP>2025-01-29 20:43:12<SeP>2025-01-31 08:21:36<SeP>2025-02-01 20:00:00<SeP>2025-02-03 07:38:24<SeP>2025-02-04 19:16:48<SeP>2025-02-06 06:55:12<SeP>2025-02-07 18:33:36<SeP>2025-02-09 06:12:00<SeP>2025-02-10 17:50:24<SeP>2025-02-12 05:28:48<SeP>2025-02-13 17:07:12<SeP>2025-02-15 04:45:36<SeP>2025-02-16 16:24:00<SeP>2025-02-18 04:02:24<SeP>2025-02-19 15:40:48<SeP>2025-02-21 03:19:12<SeP>2025-02-22 14:57:36<SeP>2025-02-24 02:36:00<SeP>2025-02-25 14:14:24<SeP>2025-02-27 01:52:48<SeP>2025-02-28 13:31:12<SeP>2025-03-02 01:09:36<SeP>2025-03-03 12:48:00<SeP>2025-03-05 00:26:24<SeP>2025-03-06 12:04:48<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:21:36";
  const item1Label       = "Escaneos";
  const item1Data        = "781<SeP>1521<SeP>1370<SeP>1514<SeP>1255<SeP>1740<SeP>919<SeP>997<SeP>1157<SeP>3391<SeP>3354<SeP>1090<SeP>3320<SeP>877<SeP>785<SeP>883<SeP>1435<SeP>3233<SeP>1470<SeP>1401<SeP>1130<SeP>904<SeP>1120<SeP>1229<SeP>961<SeP>691<SeP>958<SeP>3678<SeP>984<SeP>816<SeP>1372<SeP>1235<SeP>883<SeP>2185<SeP>2060<SeP>2897<SeP>1879<SeP>1836<SeP>1347<SeP>1330<SeP>1809<SeP>1782<SeP>2206<SeP>1616<SeP>1624<SeP>1669<SeP>1736<SeP>1790<SeP>1826<SeP>1818<SeP>1746<SeP>1614<SeP>3158<SeP>1788<SeP>1396<SeP>2203<SeP>1845<SeP>2249<SeP>1344<SeP>3877<SeP>1402<SeP>1557<SeP>1618<SeP>1294<SeP>1897<SeP>1722<SeP>1246<SeP>1435<SeP>1418<SeP>1196<SeP>2311<SeP>1184<SeP>1245<SeP>1291<SeP>7118<SeP>2344<SeP>1429<SeP>1353<SeP>1695<SeP>1962<SeP>1141<SeP>6547<SeP>1730<SeP>1601<SeP>1002<SeP>1304<SeP>3183<SeP>1234<SeP>998<SeP>1047<SeP>1171<SeP>1989<SeP>1997<SeP>1143<SeP>1633<SeP>3814<SeP>5516<SeP>1259<SeP>938<SeP>966<SeP>991<SeP>963<SeP>946<SeP>1133<SeP>2516<SeP>3233<SeP>1639<SeP>1792<SeP>778<SeP>707<SeP>1443<SeP>1322<SeP>1091<SeP>1010<SeP>2297<SeP>1128<SeP>1128<SeP>1090<SeP>1060<SeP>953<SeP>820<SeP>878<SeP>840<SeP>915<SeP>1058<SeP>862<SeP>851<SeP>815<SeP>878<SeP>900<SeP>705<SeP>900<SeP>890<SeP>838<SeP>925<SeP>858<SeP>820<SeP>804<SeP>886<SeP>1009<SeP>816<SeP>859<SeP>900<SeP>957<SeP>1131<SeP>988<SeP>569<SeP>842<SeP>847<SeP>892<SeP>1296<SeP>927<SeP>1137<SeP>1248<SeP>1104<SeP>984<SeP>936<SeP>892<SeP>835<SeP>939<SeP>1082<SeP>986<SeP>834<SeP>950<SeP>1042<SeP>1002<SeP>1052<SeP>1027<SeP>1173<SeP>928<SeP>942<SeP>1206<SeP>2052<SeP>1262<SeP>1021<SeP>1058<SeP>1225<SeP>968<SeP>1007<SeP>732<SeP>748<SeP>1007<SeP>1107<SeP>852<SeP>1118<SeP>1260<SeP>1085<SeP>1203<SeP>1303<SeP>1150<SeP>1353<SeP>1194<SeP>1424<SeP>1493<SeP>1742<SeP>1731<SeP>1380<SeP>765<SeP>836<SeP>1130<SeP>1110<SeP>616<SeP>734<SeP>869<SeP>1008<SeP>1749<SeP>5817<SeP>2331<SeP>2022<SeP>1220<SeP>912<SeP>1030<SeP>884<SeP>988<SeP>980<SeP>1138<SeP>1057<SeP>1035<SeP>2226<SeP>1334<SeP>1079<SeP>1202<SeP>1325<SeP>1192<SeP>1111<SeP>931<SeP>1170<SeP>1062<SeP>1070<SeP>1142<SeP>1094<SeP>1171<SeP>911<SeP>1002<SeP>1380<SeP>1136<SeP>1087<SeP>1343<SeP>1280<SeP>1196<SeP>1550<SeP>1294<SeP>1102<SeP>1098<SeP>1403<SeP>1870<SeP>1375<SeP>1979<SeP>1682<SeP>1550<SeP>1938<SeP>1467<SeP>1212<SeP>1133<SeP>1331<SeP>1355<SeP>1474<SeP>1137<SeP>1391<SeP>1707<SeP>1592<SeP>1562<SeP>1399<SeP>1487<SeP>1275<SeP>1005<SeP>1298<SeP>1190<SeP>1165<SeP>1360<SeP>1324<SeP>1088<SeP>2045<SeP>1298<SeP>1379<SeP>1662<SeP>1385<SeP>1359<SeP>1122<SeP>845<SeP>945<SeP>959<SeP>914<SeP>1086<SeP>1775<SeP>1153<SeP>1154<SeP>1093<SeP>888<SeP>1030<SeP>1003<SeP>1319<SeP>879<SeP>922<SeP>1142<SeP>1392<SeP>1654<SeP>1271<SeP>1090<SeP>1043<SeP>1136<SeP>1806<SeP>970<SeP>1214<SeP>1039<SeP>1576<SeP>1079<SeP>951<SeP>1217<SeP>1113<SeP>882<SeP>916<SeP>1143<SeP>1410<SeP>1588<SeP>1463<SeP>1432<SeP>1270<SeP>915<SeP>1151<SeP>1307<SeP>1127<SeP>1160<SeP>1029<SeP>1047<SeP>1165<SeP>1586<SeP>1321<SeP>1581<SeP>1315<SeP>1440<SeP>1595<SeP>1486<SeP>1353<SeP>1481<SeP>1543<SeP>1256<SeP>1783<SeP>1273<SeP>1524<SeP>1646<SeP>1348<SeP>1437<SeP>1348<SeP>1209<SeP>1333<SeP>1466<SeP>1646<SeP>1327<SeP>1322<SeP>1295<SeP>1388<SeP>1255<SeP>1219<SeP>1572<SeP>1801<SeP>1781<SeP>1185<SeP>619<SeP>1491<SeP>1915<SeP>1265<SeP>1338<SeP>1308<SeP>1072<SeP>1517<SeP>1417<SeP>1369<SeP>1387<SeP>1792<SeP>1344<SeP>1612<SeP>1747<SeP>1270<SeP>1560<SeP>1521<SeP>1742<SeP>1482<SeP>993<SeP>1462<SeP>1852<SeP>1905<SeP>1806<SeP>1728<SeP>1686<SeP>1626<SeP>1645<SeP>1516<SeP>1605<SeP>1607<SeP>1744<SeP>1940<SeP>1433<SeP>1444<SeP>1366<SeP>1730<SeP>1433<SeP>2092<SeP>1602<SeP>2096";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "195<SeP>575<SeP>1401<SeP>654<SeP>225<SeP>234<SeP>7036<SeP>603<SeP>9384<SeP>563<SeP>402<SeP>1130<SeP>1298<SeP>244<SeP>308<SeP>306<SeP>174<SeP>749<SeP>341<SeP>8279<SeP>6882<SeP>6780<SeP>10039<SeP>1488<SeP>289<SeP>414<SeP>173<SeP>383<SeP>5931<SeP>82<SeP>391<SeP>184<SeP>491<SeP>886<SeP>10074<SeP>8930<SeP>10278<SeP>10244<SeP>5382<SeP>6282<SeP>8492<SeP>8012<SeP>10234<SeP>7624<SeP>7448<SeP>9240<SeP>9043<SeP>8150<SeP>7799<SeP>5370<SeP>10272<SeP>9450<SeP>6764<SeP>8045<SeP>9238<SeP>8747<SeP>18870<SeP>16966<SeP>8869<SeP>11260<SeP>6632<SeP>8910<SeP>8021<SeP>8898<SeP>9312<SeP>6189<SeP>6538<SeP>7182<SeP>7142<SeP>2387<SeP>6141<SeP>5789<SeP>7084<SeP>6402<SeP>8102<SeP>3971<SeP>5474<SeP>8058<SeP>4468<SeP>6463<SeP>5663<SeP>4783<SeP>7630<SeP>5354<SeP>5380<SeP>5677<SeP>9866<SeP>21097<SeP>33185<SeP>10774<SeP>9385<SeP>5739<SeP>7293<SeP>13036<SeP>6012<SeP>4497<SeP>5293<SeP>4881<SeP>6379<SeP>5455<SeP>8636<SeP>5502<SeP>6551<SeP>5281<SeP>4539<SeP>8858<SeP>8760<SeP>7614<SeP>6633<SeP>4155<SeP>10335<SeP>9354<SeP>5845<SeP>3193<SeP>6233<SeP>9321<SeP>5643<SeP>6781<SeP>9679<SeP>4690<SeP>2183<SeP>1579<SeP>1967<SeP>1816<SeP>2278<SeP>1088<SeP>1421<SeP>515<SeP>1476<SeP>1503<SeP>1153<SeP>1136<SeP>823<SeP>1162<SeP>733<SeP>1543<SeP>1475<SeP>1048<SeP>1735<SeP>2071<SeP>1635<SeP>12033<SeP>5843<SeP>11160<SeP>7310<SeP>5588<SeP>10682<SeP>9113<SeP>9320<SeP>8570<SeP>14131<SeP>8728<SeP>10813<SeP>11126<SeP>12206<SeP>11198<SeP>7837<SeP>3985<SeP>7369<SeP>21225<SeP>10682<SeP>7471<SeP>7556<SeP>13174<SeP>13045<SeP>8836<SeP>4815<SeP>7413<SeP>8891<SeP>24522<SeP>7478<SeP>10089<SeP>10034<SeP>5155<SeP>5612<SeP>7306<SeP>15383<SeP>5236<SeP>13557<SeP>7198<SeP>7343<SeP>8732<SeP>5732<SeP>4233<SeP>7228<SeP>7032<SeP>5427<SeP>6746<SeP>8054<SeP>3617<SeP>21532<SeP>7798<SeP>7086<SeP>6032<SeP>8610<SeP>10432<SeP>7369<SeP>2502<SeP>5980<SeP>4267<SeP>4683<SeP>4477<SeP>1496<SeP>619<SeP>642<SeP>203<SeP>540<SeP>641<SeP>782<SeP>446<SeP>924<SeP>1564<SeP>3197<SeP>1033<SeP>22516<SeP>1929<SeP>4420<SeP>2906<SeP>3656<SeP>6936<SeP>4182<SeP>2582<SeP>3829<SeP>3001<SeP>2784<SeP>3965<SeP>3699<SeP>2252<SeP>3675<SeP>1250<SeP>2418<SeP>2196<SeP>1552<SeP>959<SeP>1695<SeP>953<SeP>1627<SeP>1984<SeP>26269<SeP>1816<SeP>4349<SeP>3543<SeP>2088<SeP>4186<SeP>2033<SeP>2700<SeP>3336<SeP>3067<SeP>2919<SeP>3155<SeP>2775<SeP>3281<SeP>6635<SeP>5006<SeP>3558<SeP>4035<SeP>3048<SeP>3212<SeP>4294<SeP>5820<SeP>8186<SeP>5669<SeP>2322<SeP>3303<SeP>2446<SeP>5607<SeP>2929<SeP>3233<SeP>2436<SeP>4484<SeP>5592<SeP>3064<SeP>6153<SeP>4278<SeP>6181<SeP>4576<SeP>5718<SeP>6470<SeP>20826<SeP>5047<SeP>11058<SeP>1949<SeP>3868<SeP>4632<SeP>3564<SeP>4242<SeP>5184<SeP>3684<SeP>4995<SeP>4252<SeP>3533<SeP>3324<SeP>1267<SeP>1965<SeP>3268<SeP>2878<SeP>2830<SeP>3329<SeP>4340<SeP>4156<SeP>3092<SeP>4653<SeP>3455<SeP>3202<SeP>4116<SeP>8343<SeP>6119<SeP>5682<SeP>5199<SeP>4817<SeP>3619<SeP>3614<SeP>4630<SeP>5777<SeP>5623<SeP>4735<SeP>4093<SeP>1560<SeP>472<SeP>2559<SeP>1332<SeP>628<SeP>2349<SeP>1544<SeP>837<SeP>3300<SeP>4236<SeP>6496<SeP>25967<SeP>12880<SeP>5589<SeP>15731<SeP>12976<SeP>5370<SeP>6350<SeP>4651<SeP>24363<SeP>4946<SeP>5274<SeP>4741<SeP>5343<SeP>6764<SeP>29201<SeP>4753<SeP>4032<SeP>4234<SeP>3728<SeP>6720<SeP>3599<SeP>3881<SeP>3290<SeP>4243<SeP>5916<SeP>4514<SeP>17735<SeP>5823<SeP>6704<SeP>4899<SeP>1570<SeP>3826<SeP>4993<SeP>3589<SeP>4351<SeP>2862<SeP>3937<SeP>2391<SeP>4079<SeP>4225<SeP>7974<SeP>10580<SeP>8490<SeP>8744<SeP>9606<SeP>7027<SeP>5789<SeP>5186<SeP>4355<SeP>26282<SeP>2939<SeP>3255<SeP>4518<SeP>4710<SeP>11017<SeP>4892<SeP>4010<SeP>5144<SeP>3471<SeP>5013<SeP>9584<SeP>8461<SeP>4434<SeP>2813<SeP>3506<SeP>1974<SeP>2310<SeP>2548<SeP>2097<SeP>2461<SeP>1664<SeP>3080";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:38:24<SeP>2023-07-28 23:16:48<SeP>2023-07-30 10:55:12<SeP>2023-07-31 22:33:36<SeP>2023-08-02 10:12:00<SeP>2023-08-03 21:50:24<SeP>2023-08-05 09:28:48<SeP>2023-08-06 21:07:12<SeP>2023-08-08 08:45:36<SeP>2023-08-09 20:24:00<SeP>2023-08-11 08:02:24<SeP>2023-08-12 19:40:48<SeP>2023-08-14 07:19:12<SeP>2023-08-15 18:57:36<SeP>2023-08-17 06:36:00<SeP>2023-08-18 18:14:24<SeP>2023-08-20 05:52:48<SeP>2023-08-21 17:31:12<SeP>2023-08-23 05:09:36<SeP>2023-08-24 16:48:00<SeP>2023-08-26 04:26:24<SeP>2023-08-27 16:04:48<SeP>2023-08-29 03:43:12<SeP>2023-08-30 15:21:36<SeP>2023-09-01 03:00:00<SeP>2023-09-02 14:38:24<SeP>2023-09-04 02:16:48<SeP>2023-09-05 13:55:12<SeP>2023-09-07 01:33:36<SeP>2023-09-08 13:12:00<SeP>2023-09-10 00:50:24<SeP>2023-09-11 12:28:48<SeP>2023-09-13 00:07:12<SeP>2023-09-14 11:45:36<SeP>2023-09-15 23:24:00<SeP>2023-09-17 11:02:24<SeP>2023-09-18 22:40:48<SeP>2023-09-20 10:19:12<SeP>2023-09-21 21:57:36<SeP>2023-09-23 09:36:00<SeP>2023-09-24 21:14:24<SeP>2023-09-26 08:52:48<SeP>2023-09-27 20:31:12<SeP>2023-09-29 08:09:36<SeP>2023-09-30 19:48:00<SeP>2023-10-02 07:26:24<SeP>2023-10-03 19:04:48<SeP>2023-10-05 06:43:12<SeP>2023-10-06 18:21:36<SeP>2023-10-08 06:00:00<SeP>2023-10-09 17:38:24<SeP>2023-10-11 05:16:48<SeP>2023-10-12 16:55:12<SeP>2023-10-14 04:33:36<SeP>2023-10-15 16:12:00<SeP>2023-10-17 03:50:24<SeP>2023-10-18 15:28:48<SeP>2023-10-20 03:07:12<SeP>2023-10-21 14:45:36<SeP>2023-10-23 02:24:00<SeP>2023-10-24 14:02:24<SeP>2023-10-26 01:40:48<SeP>2023-10-27 13:19:12<SeP>2023-10-29 00:57:36<SeP>2023-10-30 12:36:00<SeP>2023-11-01 00:14:24<SeP>2023-11-02 11:52:48<SeP>2023-11-03 23:31:12<SeP>2023-11-05 10:09:36<SeP>2023-11-06 21:48:00<SeP>2023-11-08 09:26:24<SeP>2023-11-09 21:04:48<SeP>2023-11-11 08:43:12<SeP>2023-11-12 20:21:36<SeP>2023-11-14 08:00:00<SeP>2023-11-15 19:38:24<SeP>2023-11-17 07:16:48<SeP>2023-11-18 18:55:12<SeP>2023-11-20 06:33:36<SeP>2023-11-21 18:12:00<SeP>2023-11-23 05:50:24<SeP>2023-11-24 17:28:48<SeP>2023-11-26 05:07:12<SeP>2023-11-27 16:45:36<SeP>2023-11-29 04:24:00<SeP>2023-11-30 16:02:24<SeP>2023-12-02 03:40:48<SeP>2023-12-03 15:19:12<SeP>2023-12-05 02:57:36<SeP>2023-12-06 14:36:00<SeP>2023-12-08 02:14:24<SeP>2023-12-09 13:52:48<SeP>2023-12-11 01:31:12<SeP>2023-12-12 13:09:36<SeP>2023-12-14 00:48:00<SeP>2023-12-15 12:26:24<SeP>2023-12-17 00:04:48<SeP>2023-12-18 11:43:12<SeP>2023-12-19 23:21:36<SeP>2023-12-21 11:00:00<SeP>2023-12-22 22:38:24<SeP>2023-12-24 10:16:48<SeP>2023-12-25 21:55:12<SeP>2023-12-27 09:33:36<SeP>2023-12-28 21:12:00<SeP>2023-12-30 08:50:24<SeP>2023-12-31 20:28:48<SeP>2024-01-02 08:07:12<SeP>2024-01-03 19:45:36<SeP>2024-01-05 07:24:00<SeP>2024-01-06 19:02:24<SeP>2024-01-08 06:40:48<SeP>2024-01-09 18:19:12<SeP>2024-01-11 05:57:36<SeP>2024-01-12 17:36:00<SeP>2024-01-14 05:14:24<SeP>2024-01-15 16:52:48<SeP>2024-01-17 04:31:12<SeP>2024-01-18 16:09:36<SeP>2024-01-20 03:48:00<SeP>2024-01-21 15:26:24<SeP>2024-01-23 03:04:48<SeP>2024-01-24 14:43:12<SeP>2024-01-26 02:21:36<SeP>2024-01-27 14:00:00<SeP>2024-01-29 01:38:24<SeP>2024-01-30 13:16:48<SeP>2024-02-01 00:55:12<SeP>2024-02-02 12:33:36<SeP>2024-02-04 00:12:00<SeP>2024-02-05 11:50:24<SeP>2024-02-06 23:28:48<SeP>2024-02-08 11:07:12<SeP>2024-02-09 22:45:36<SeP>2024-02-11 10:24:00<SeP>2024-02-12 22:02:24<SeP>2024-02-14 09:40:48<SeP>2024-02-15 21:19:12<SeP>2024-02-17 08:57:36<SeP>2024-02-18 20:36:00<SeP>2024-02-20 08:14:24<SeP>2024-02-21 19:52:48<SeP>2024-02-23 07:31:12<SeP>2024-02-24 19:09:36<SeP>2024-02-26 06:48:00<SeP>2024-02-27 18:26:24<SeP>2024-02-29 06:04:48<SeP>2024-03-01 17:43:12<SeP>2024-03-03 05:21:36<SeP>2024-03-04 17:00:00<SeP>2024-03-06 04:38:24<SeP>2024-03-07 16:16:48<SeP>2024-03-09 03:55:12<SeP>2024-03-10 16:33:36<SeP>2024-03-12 04:12:00<SeP>2024-03-13 15:50:24<SeP>2024-03-15 03:28:48<SeP>2024-03-16 15:07:12<SeP>2024-03-18 02:45:36<SeP>2024-03-19 14:24:00<SeP>2024-03-21 02:02:24<SeP>2024-03-22 13:40:48<SeP>2024-03-24 01:19:12<SeP>2024-03-25 12:57:36<SeP>2024-03-27 00:36:00<SeP>2024-03-28 12:14:24<SeP>2024-03-29 23:52:48<SeP>2024-03-31 11:31:12<SeP>2024-04-01 23:09:36<SeP>2024-04-03 10:48:00<SeP>2024-04-04 22:26:24<SeP>2024-04-06 10:04:48<SeP>2024-04-07 21:43:12<SeP>2024-04-09 09:21:36<SeP>2024-04-10 21:00:00<SeP>2024-04-12 08:38:24<SeP>2024-04-13 20:16:48<SeP>2024-04-15 07:55:12<SeP>2024-04-16 19:33:36<SeP>2024-04-18 07:12:00<SeP>2024-04-19 18:50:24<SeP>2024-04-21 06:28:48<SeP>2024-04-22 18:07:12<SeP>2024-04-24 05:45:36<SeP>2024-04-25 17:24:00<SeP>2024-04-27 05:02:24<SeP>2024-04-28 16:40:48<SeP>2024-04-30 04:19:12<SeP>2024-05-01 15:57:36<SeP>2024-05-03 03:36:00<SeP>2024-05-04 15:14:24<SeP>2024-05-06 02:52:48<SeP>2024-05-07 14:31:12<SeP>2024-05-09 02:09:36<SeP>2024-05-10 13:48:00<SeP>2024-05-12 01:26:24<SeP>2024-05-13 13:04:48<SeP>2024-05-15 00:43:12<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:00:00<SeP>2024-05-19 11:38:24<SeP>2024-05-20 23:16:48<SeP>2024-05-22 10:55:12<SeP>2024-05-23 22:33:36<SeP>2024-05-25 10:12:00<SeP>2024-05-26 21:50:24<SeP>2024-05-28 09:28:48<SeP>2024-05-29 21:07:12<SeP>2024-05-31 08:45:36<SeP>2024-06-01 20:24:00<SeP>2024-06-03 08:02:24<SeP>2024-06-04 19:40:48<SeP>2024-06-06 07:19:12<SeP>2024-06-07 18:57:36<SeP>2024-06-09 06:36:00<SeP>2024-06-10 18:14:24<SeP>2024-06-12 05:52:48<SeP>2024-06-13 17:31:12<SeP>2024-06-15 05:09:36<SeP>2024-06-16 16:48:00<SeP>2024-06-18 04:26:24<SeP>2024-06-19 16:04:48<SeP>2024-06-21 03:43:12<SeP>2024-06-22 15:21:36<SeP>2024-06-24 03:00:00<SeP>2024-06-25 14:38:24<SeP>2024-06-27 02:16:48<SeP>2024-06-28 13:55:12<SeP>2024-06-30 01:33:36<SeP>2024-07-01 13:12:00<SeP>2024-07-03 00:50:24<SeP>2024-07-04 12:28:48<SeP>2024-07-06 00:07:12<SeP>2024-07-07 11:45:36<SeP>2024-07-08 23:24:00<SeP>2024-07-10 11:02:24<SeP>2024-07-11 22:40:48<SeP>2024-07-13 10:19:12<SeP>2024-07-14 21:57:36<SeP>2024-07-16 09:36:00<SeP>2024-07-17 21:14:24<SeP>2024-07-19 08:52:48<SeP>2024-07-20 20:31:12<SeP>2024-07-22 08:09:36<SeP>2024-07-23 19:48:00<SeP>2024-07-25 07:26:24<SeP>2024-07-26 19:04:48<SeP>2024-07-28 06:43:12<SeP>2024-07-29 18:21:36<SeP>2024-07-31 06:00:00<SeP>2024-08-01 17:38:24<SeP>2024-08-03 05:16:48<SeP>2024-08-04 16:55:12<SeP>2024-08-06 04:33:36<SeP>2024-08-07 16:12:00<SeP>2024-08-09 03:50:24<SeP>2024-08-10 15:28:48<SeP>2024-08-12 03:07:12<SeP>2024-08-13 14:45:36<SeP>2024-08-15 02:24:00<SeP>2024-08-16 14:02:24<SeP>2024-08-18 01:40:48<SeP>2024-08-19 13:19:12<SeP>2024-08-21 00:57:36<SeP>2024-08-22 12:36:00<SeP>2024-08-24 00:14:24<SeP>2024-08-25 11:52:48<SeP>2024-08-26 23:31:12<SeP>2024-08-28 11:09:36<SeP>2024-08-29 22:48:00<SeP>2024-08-31 10:26:24<SeP>2024-09-01 22:04:48<SeP>2024-09-03 09:43:12<SeP>2024-09-04 21:21:36<SeP>2024-09-06 09:00:00<SeP>2024-09-07 20:38:24<SeP>2024-09-09 08:16:48<SeP>2024-09-10 19:55:12<SeP>2024-09-12 07:33:36<SeP>2024-09-13 19:12:00<SeP>2024-09-15 06:50:24<SeP>2024-09-16 18:28:48<SeP>2024-09-18 06:07:12<SeP>2024-09-19 17:45:36<SeP>2024-09-21 05:24:00<SeP>2024-09-22 17:02:24<SeP>2024-09-24 04:40:48<SeP>2024-09-25 16:19:12<SeP>2024-09-27 03:57:36<SeP>2024-09-28 15:36:00<SeP>2024-09-30 03:14:24<SeP>2024-10-01 14:52:48<SeP>2024-10-03 02:31:12<SeP>2024-10-04 14:09:36<SeP>2024-10-06 01:48:00<SeP>2024-10-07 13:26:24<SeP>2024-10-09 01:04:48<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:00:00<SeP>2024-10-14 23:38:24<SeP>2024-10-16 11:16:48<SeP>2024-10-17 22:55:12<SeP>2024-10-19 10:33:36<SeP>2024-10-20 22:12:00<SeP>2024-10-22 09:50:24<SeP>2024-10-23 21:28:48<SeP>2024-10-25 09:07:12<SeP>2024-10-26 20:45:36<SeP>2024-10-28 08:24:00<SeP>2024-10-29 20:02:24<SeP>2024-10-31 07:40:48<SeP>2024-11-01 19:19:12<SeP>2024-11-03 05:57:36<SeP>2024-11-04 17:36:00<SeP>2024-11-06 05:14:24<SeP>2024-11-07 16:52:48<SeP>2024-11-09 04:31:12<SeP>2024-11-10 16:09:36<SeP>2024-11-12 03:48:00<SeP>2024-11-13 15:26:24<SeP>2024-11-15 03:04:48<SeP>2024-11-16 14:43:12<SeP>2024-11-18 02:21:36<SeP>2024-11-19 14:00:00<SeP>2024-11-21 01:38:24<SeP>2024-11-22 13:16:48<SeP>2024-11-24 00:55:12<SeP>2024-11-25 12:33:36<SeP>2024-11-27 00:12:00<SeP>2024-11-28 11:50:24<SeP>2024-11-29 23:28:48<SeP>2024-12-01 11:07:12<SeP>2024-12-02 22:45:36<SeP>2024-12-04 10:24:00<SeP>2024-12-05 22:02:24<SeP>2024-12-07 09:40:48<SeP>2024-12-08 21:19:12<SeP>2024-12-10 08:57:36<SeP>2024-12-11 20:36:00<SeP>2024-12-13 08:14:24<SeP>2024-12-14 19:52:48<SeP>2024-12-16 07:31:12<SeP>2024-12-17 19:09:36<SeP>2024-12-19 06:48:00<SeP>2024-12-20 18:26:24<SeP>2024-12-22 06:04:48<SeP>2024-12-23 17:43:12<SeP>2024-12-25 05:21:36<SeP>2024-12-26 17:00:00<SeP>2024-12-28 04:38:24<SeP>2024-12-29 16:16:48<SeP>2024-12-31 03:55:12<SeP>2025-01-01 15:33:36<SeP>2025-01-03 03:12:00<SeP>2025-01-04 14:50:24<SeP>2025-01-06 02:28:48<SeP>2025-01-07 14:07:12<SeP>2025-01-09 01:45:36<SeP>2025-01-10 13:24:00<SeP>2025-01-12 01:02:24<SeP>2025-01-13 12:40:48<SeP>2025-01-15 00:19:12<SeP>2025-01-16 11:57:36<SeP>2025-01-17 23:36:00<SeP>2025-01-19 11:14:24<SeP>2025-01-20 22:52:48<SeP>2025-01-22 10:31:12<SeP>2025-01-23 22:09:36<SeP>2025-01-25 09:48:00<SeP>2025-01-26 21:26:24<SeP>2025-01-28 09:04:48<SeP>2025-01-29 20:43:12<SeP>2025-01-31 08:21:36<SeP>2025-02-01 20:00:00<SeP>2025-02-03 07:38:24<SeP>2025-02-04 19:16:48<SeP>2025-02-06 06:55:12<SeP>2025-02-07 18:33:36<SeP>2025-02-09 06:12:00<SeP>2025-02-10 17:50:24<SeP>2025-02-12 05:28:48<SeP>2025-02-13 17:07:12<SeP>2025-02-15 04:45:36<SeP>2025-02-16 16:24:00<SeP>2025-02-18 04:02:24<SeP>2025-02-19 15:40:48<SeP>2025-02-21 03:19:12<SeP>2025-02-22 14:57:36<SeP>2025-02-24 02:36:00<SeP>2025-02-25 14:14:24<SeP>2025-02-27 01:52:48<SeP>2025-02-28 13:31:12<SeP>2025-03-02 01:09:36<SeP>2025-03-03 12:48:00<SeP>2025-03-05 00:26:24<SeP>2025-03-06 12:04:48<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:21:36";
  const itemLabel       = "Escaneos";
  const itemData        = "781<SeP>1521<SeP>1370<SeP>1514<SeP>1255<SeP>1740<SeP>919<SeP>997<SeP>1157<SeP>3391<SeP>3354<SeP>1090<SeP>3320<SeP>877<SeP>785<SeP>883<SeP>1435<SeP>3233<SeP>1470<SeP>1401<SeP>1130<SeP>904<SeP>1120<SeP>1229<SeP>961<SeP>691<SeP>958<SeP>3678<SeP>984<SeP>816<SeP>1372<SeP>1235<SeP>883<SeP>2185<SeP>2060<SeP>2897<SeP>1879<SeP>1836<SeP>1347<SeP>1330<SeP>1809<SeP>1782<SeP>2206<SeP>1616<SeP>1624<SeP>1669<SeP>1736<SeP>1790<SeP>1826<SeP>1818<SeP>1746<SeP>1614<SeP>3158<SeP>1788<SeP>1396<SeP>2203<SeP>1845<SeP>2249<SeP>1344<SeP>3877<SeP>1402<SeP>1557<SeP>1618<SeP>1294<SeP>1897<SeP>1722<SeP>1246<SeP>1435<SeP>1418<SeP>1196<SeP>2311<SeP>1184<SeP>1245<SeP>1291<SeP>7118<SeP>2344<SeP>1429<SeP>1353<SeP>1695<SeP>1962<SeP>1141<SeP>6547<SeP>1730<SeP>1601<SeP>1002<SeP>1304<SeP>3183<SeP>1234<SeP>998<SeP>1047<SeP>1171<SeP>1989<SeP>1997<SeP>1143<SeP>1633<SeP>3814<SeP>5516<SeP>1259<SeP>938<SeP>966<SeP>991<SeP>963<SeP>946<SeP>1133<SeP>2516<SeP>3233<SeP>1639<SeP>1792<SeP>778<SeP>707<SeP>1443<SeP>1322<SeP>1091<SeP>1010<SeP>2297<SeP>1128<SeP>1128<SeP>1090<SeP>1060<SeP>953<SeP>820<SeP>878<SeP>840<SeP>915<SeP>1058<SeP>862<SeP>851<SeP>815<SeP>878<SeP>900<SeP>705<SeP>900<SeP>890<SeP>838<SeP>925<SeP>858<SeP>820<SeP>804<SeP>886<SeP>1009<SeP>816<SeP>859<SeP>900<SeP>957<SeP>1131<SeP>988<SeP>569<SeP>842<SeP>847<SeP>892<SeP>1296<SeP>927<SeP>1137<SeP>1248<SeP>1104<SeP>984<SeP>936<SeP>892<SeP>835<SeP>939<SeP>1082<SeP>986<SeP>834<SeP>950<SeP>1042<SeP>1002<SeP>1052<SeP>1027<SeP>1173<SeP>928<SeP>942<SeP>1206<SeP>2052<SeP>1262<SeP>1021<SeP>1058<SeP>1225<SeP>968<SeP>1007<SeP>732<SeP>748<SeP>1007<SeP>1107<SeP>852<SeP>1118<SeP>1260<SeP>1085<SeP>1203<SeP>1303<SeP>1150<SeP>1353<SeP>1194<SeP>1424<SeP>1493<SeP>1742<SeP>1731<SeP>1380<SeP>765<SeP>836<SeP>1130<SeP>1110<SeP>616<SeP>734<SeP>869<SeP>1008<SeP>1749<SeP>5817<SeP>2331<SeP>2022<SeP>1220<SeP>912<SeP>1030<SeP>884<SeP>988<SeP>980<SeP>1138<SeP>1057<SeP>1035<SeP>2226<SeP>1334<SeP>1079<SeP>1202<SeP>1325<SeP>1192<SeP>1111<SeP>931<SeP>1170<SeP>1062<SeP>1070<SeP>1142<SeP>1094<SeP>1171<SeP>911<SeP>1002<SeP>1380<SeP>1136<SeP>1087<SeP>1343<SeP>1280<SeP>1196<SeP>1550<SeP>1294<SeP>1102<SeP>1098<SeP>1403<SeP>1870<SeP>1375<SeP>1979<SeP>1682<SeP>1550<SeP>1938<SeP>1467<SeP>1212<SeP>1133<SeP>1331<SeP>1355<SeP>1474<SeP>1137<SeP>1391<SeP>1707<SeP>1592<SeP>1562<SeP>1399<SeP>1487<SeP>1275<SeP>1005<SeP>1298<SeP>1190<SeP>1165<SeP>1360<SeP>1324<SeP>1088<SeP>2045<SeP>1298<SeP>1379<SeP>1662<SeP>1385<SeP>1359<SeP>1122<SeP>845<SeP>945<SeP>959<SeP>914<SeP>1086<SeP>1775<SeP>1153<SeP>1154<SeP>1093<SeP>888<SeP>1030<SeP>1003<SeP>1319<SeP>879<SeP>922<SeP>1142<SeP>1392<SeP>1654<SeP>1271<SeP>1090<SeP>1043<SeP>1136<SeP>1806<SeP>970<SeP>1214<SeP>1039<SeP>1576<SeP>1079<SeP>951<SeP>1217<SeP>1113<SeP>882<SeP>916<SeP>1143<SeP>1410<SeP>1588<SeP>1463<SeP>1432<SeP>1270<SeP>915<SeP>1151<SeP>1307<SeP>1127<SeP>1160<SeP>1029<SeP>1047<SeP>1165<SeP>1586<SeP>1321<SeP>1581<SeP>1315<SeP>1440<SeP>1595<SeP>1486<SeP>1353<SeP>1481<SeP>1543<SeP>1256<SeP>1783<SeP>1273<SeP>1524<SeP>1646<SeP>1348<SeP>1437<SeP>1348<SeP>1209<SeP>1333<SeP>1466<SeP>1646<SeP>1327<SeP>1322<SeP>1295<SeP>1388<SeP>1255<SeP>1219<SeP>1572<SeP>1801<SeP>1781<SeP>1185<SeP>619<SeP>1491<SeP>1915<SeP>1265<SeP>1338<SeP>1308<SeP>1072<SeP>1517<SeP>1417<SeP>1369<SeP>1387<SeP>1792<SeP>1344<SeP>1612<SeP>1747<SeP>1270<SeP>1560<SeP>1521<SeP>1742<SeP>1482<SeP>993<SeP>1462<SeP>1852<SeP>1905<SeP>1806<SeP>1728<SeP>1686<SeP>1626<SeP>1645<SeP>1516<SeP>1605<SeP>1607<SeP>1744<SeP>1940<SeP>1433<SeP>1444<SeP>1366<SeP>1730<SeP>1433<SeP>2092<SeP>1602<SeP>2096";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:38:24<SeP>2023-07-28 23:16:48<SeP>2023-07-30 10:55:12<SeP>2023-07-31 22:33:36<SeP>2023-08-02 10:12:00<SeP>2023-08-03 21:50:24<SeP>2023-08-05 09:28:48<SeP>2023-08-06 21:07:12<SeP>2023-08-08 08:45:36<SeP>2023-08-09 20:24:00<SeP>2023-08-11 08:02:24<SeP>2023-08-12 19:40:48<SeP>2023-08-14 07:19:12<SeP>2023-08-15 18:57:36<SeP>2023-08-17 06:36:00<SeP>2023-08-18 18:14:24<SeP>2023-08-20 05:52:48<SeP>2023-08-21 17:31:12<SeP>2023-08-23 05:09:36<SeP>2023-08-24 16:48:00<SeP>2023-08-26 04:26:24<SeP>2023-08-27 16:04:48<SeP>2023-08-29 03:43:12<SeP>2023-08-30 15:21:36<SeP>2023-09-01 03:00:00<SeP>2023-09-02 14:38:24<SeP>2023-09-04 02:16:48<SeP>2023-09-05 13:55:12<SeP>2023-09-07 01:33:36<SeP>2023-09-08 13:12:00<SeP>2023-09-10 00:50:24<SeP>2023-09-11 12:28:48<SeP>2023-09-13 00:07:12<SeP>2023-09-14 11:45:36<SeP>2023-09-15 23:24:00<SeP>2023-09-17 11:02:24<SeP>2023-09-18 22:40:48<SeP>2023-09-20 10:19:12<SeP>2023-09-21 21:57:36<SeP>2023-09-23 09:36:00<SeP>2023-09-24 21:14:24<SeP>2023-09-26 08:52:48<SeP>2023-09-27 20:31:12<SeP>2023-09-29 08:09:36<SeP>2023-09-30 19:48:00<SeP>2023-10-02 07:26:24<SeP>2023-10-03 19:04:48<SeP>2023-10-05 06:43:12<SeP>2023-10-06 18:21:36<SeP>2023-10-08 06:00:00<SeP>2023-10-09 17:38:24<SeP>2023-10-11 05:16:48<SeP>2023-10-12 16:55:12<SeP>2023-10-14 04:33:36<SeP>2023-10-15 16:12:00<SeP>2023-10-17 03:50:24<SeP>2023-10-18 15:28:48<SeP>2023-10-20 03:07:12<SeP>2023-10-21 14:45:36<SeP>2023-10-23 02:24:00<SeP>2023-10-24 14:02:24<SeP>2023-10-26 01:40:48<SeP>2023-10-27 13:19:12<SeP>2023-10-29 00:57:36<SeP>2023-10-30 12:36:00<SeP>2023-11-01 00:14:24<SeP>2023-11-02 11:52:48<SeP>2023-11-03 23:31:12<SeP>2023-11-05 10:09:36<SeP>2023-11-06 21:48:00<SeP>2023-11-08 09:26:24<SeP>2023-11-09 21:04:48<SeP>2023-11-11 08:43:12<SeP>2023-11-12 20:21:36<SeP>2023-11-14 08:00:00<SeP>2023-11-15 19:38:24<SeP>2023-11-17 07:16:48<SeP>2023-11-18 18:55:12<SeP>2023-11-20 06:33:36<SeP>2023-11-21 18:12:00<SeP>2023-11-23 05:50:24<SeP>2023-11-24 17:28:48<SeP>2023-11-26 05:07:12<SeP>2023-11-27 16:45:36<SeP>2023-11-29 04:24:00<SeP>2023-11-30 16:02:24<SeP>2023-12-02 03:40:48<SeP>2023-12-03 15:19:12<SeP>2023-12-05 02:57:36<SeP>2023-12-06 14:36:00<SeP>2023-12-08 02:14:24<SeP>2023-12-09 13:52:48<SeP>2023-12-11 01:31:12<SeP>2023-12-12 13:09:36<SeP>2023-12-14 00:48:00<SeP>2023-12-15 12:26:24<SeP>2023-12-17 00:04:48<SeP>2023-12-18 11:43:12<SeP>2023-12-19 23:21:36<SeP>2023-12-21 11:00:00<SeP>2023-12-22 22:38:24<SeP>2023-12-24 10:16:48<SeP>2023-12-25 21:55:12<SeP>2023-12-27 09:33:36<SeP>2023-12-28 21:12:00<SeP>2023-12-30 08:50:24<SeP>2023-12-31 20:28:48<SeP>2024-01-02 08:07:12<SeP>2024-01-03 19:45:36<SeP>2024-01-05 07:24:00<SeP>2024-01-06 19:02:24<SeP>2024-01-08 06:40:48<SeP>2024-01-09 18:19:12<SeP>2024-01-11 05:57:36<SeP>2024-01-12 17:36:00<SeP>2024-01-14 05:14:24<SeP>2024-01-15 16:52:48<SeP>2024-01-17 04:31:12<SeP>2024-01-18 16:09:36<SeP>2024-01-20 03:48:00<SeP>2024-01-21 15:26:24<SeP>2024-01-23 03:04:48<SeP>2024-01-24 14:43:12<SeP>2024-01-26 02:21:36<SeP>2024-01-27 14:00:00<SeP>2024-01-29 01:38:24<SeP>2024-01-30 13:16:48<SeP>2024-02-01 00:55:12<SeP>2024-02-02 12:33:36<SeP>2024-02-04 00:12:00<SeP>2024-02-05 11:50:24<SeP>2024-02-06 23:28:48<SeP>2024-02-08 11:07:12<SeP>2024-02-09 22:45:36<SeP>2024-02-11 10:24:00<SeP>2024-02-12 22:02:24<SeP>2024-02-14 09:40:48<SeP>2024-02-15 21:19:12<SeP>2024-02-17 08:57:36<SeP>2024-02-18 20:36:00<SeP>2024-02-20 08:14:24<SeP>2024-02-21 19:52:48<SeP>2024-02-23 07:31:12<SeP>2024-02-24 19:09:36<SeP>2024-02-26 06:48:00<SeP>2024-02-27 18:26:24<SeP>2024-02-29 06:04:48<SeP>2024-03-01 17:43:12<SeP>2024-03-03 05:21:36<SeP>2024-03-04 17:00:00<SeP>2024-03-06 04:38:24<SeP>2024-03-07 16:16:48<SeP>2024-03-09 03:55:12<SeP>2024-03-10 16:33:36<SeP>2024-03-12 04:12:00<SeP>2024-03-13 15:50:24<SeP>2024-03-15 03:28:48<SeP>2024-03-16 15:07:12<SeP>2024-03-18 02:45:36<SeP>2024-03-19 14:24:00<SeP>2024-03-21 02:02:24<SeP>2024-03-22 13:40:48<SeP>2024-03-24 01:19:12<SeP>2024-03-25 12:57:36<SeP>2024-03-27 00:36:00<SeP>2024-03-28 12:14:24<SeP>2024-03-29 23:52:48<SeP>2024-03-31 11:31:12<SeP>2024-04-01 23:09:36<SeP>2024-04-03 10:48:00<SeP>2024-04-04 22:26:24<SeP>2024-04-06 10:04:48<SeP>2024-04-07 21:43:12<SeP>2024-04-09 09:21:36<SeP>2024-04-10 21:00:00<SeP>2024-04-12 08:38:24<SeP>2024-04-13 20:16:48<SeP>2024-04-15 07:55:12<SeP>2024-04-16 19:33:36<SeP>2024-04-18 07:12:00<SeP>2024-04-19 18:50:24<SeP>2024-04-21 06:28:48<SeP>2024-04-22 18:07:12<SeP>2024-04-24 05:45:36<SeP>2024-04-25 17:24:00<SeP>2024-04-27 05:02:24<SeP>2024-04-28 16:40:48<SeP>2024-04-30 04:19:12<SeP>2024-05-01 15:57:36<SeP>2024-05-03 03:36:00<SeP>2024-05-04 15:14:24<SeP>2024-05-06 02:52:48<SeP>2024-05-07 14:31:12<SeP>2024-05-09 02:09:36<SeP>2024-05-10 13:48:00<SeP>2024-05-12 01:26:24<SeP>2024-05-13 13:04:48<SeP>2024-05-15 00:43:12<SeP>2024-05-16 12:21:36<SeP>2024-05-18 00:00:00<SeP>2024-05-19 11:38:24<SeP>2024-05-20 23:16:48<SeP>2024-05-22 10:55:12<SeP>2024-05-23 22:33:36<SeP>2024-05-25 10:12:00<SeP>2024-05-26 21:50:24<SeP>2024-05-28 09:28:48<SeP>2024-05-29 21:07:12<SeP>2024-05-31 08:45:36<SeP>2024-06-01 20:24:00<SeP>2024-06-03 08:02:24<SeP>2024-06-04 19:40:48<SeP>2024-06-06 07:19:12<SeP>2024-06-07 18:57:36<SeP>2024-06-09 06:36:00<SeP>2024-06-10 18:14:24<SeP>2024-06-12 05:52:48<SeP>2024-06-13 17:31:12<SeP>2024-06-15 05:09:36<SeP>2024-06-16 16:48:00<SeP>2024-06-18 04:26:24<SeP>2024-06-19 16:04:48<SeP>2024-06-21 03:43:12<SeP>2024-06-22 15:21:36<SeP>2024-06-24 03:00:00<SeP>2024-06-25 14:38:24<SeP>2024-06-27 02:16:48<SeP>2024-06-28 13:55:12<SeP>2024-06-30 01:33:36<SeP>2024-07-01 13:12:00<SeP>2024-07-03 00:50:24<SeP>2024-07-04 12:28:48<SeP>2024-07-06 00:07:12<SeP>2024-07-07 11:45:36<SeP>2024-07-08 23:24:00<SeP>2024-07-10 11:02:24<SeP>2024-07-11 22:40:48<SeP>2024-07-13 10:19:12<SeP>2024-07-14 21:57:36<SeP>2024-07-16 09:36:00<SeP>2024-07-17 21:14:24<SeP>2024-07-19 08:52:48<SeP>2024-07-20 20:31:12<SeP>2024-07-22 08:09:36<SeP>2024-07-23 19:48:00<SeP>2024-07-25 07:26:24<SeP>2024-07-26 19:04:48<SeP>2024-07-28 06:43:12<SeP>2024-07-29 18:21:36<SeP>2024-07-31 06:00:00<SeP>2024-08-01 17:38:24<SeP>2024-08-03 05:16:48<SeP>2024-08-04 16:55:12<SeP>2024-08-06 04:33:36<SeP>2024-08-07 16:12:00<SeP>2024-08-09 03:50:24<SeP>2024-08-10 15:28:48<SeP>2024-08-12 03:07:12<SeP>2024-08-13 14:45:36<SeP>2024-08-15 02:24:00<SeP>2024-08-16 14:02:24<SeP>2024-08-18 01:40:48<SeP>2024-08-19 13:19:12<SeP>2024-08-21 00:57:36<SeP>2024-08-22 12:36:00<SeP>2024-08-24 00:14:24<SeP>2024-08-25 11:52:48<SeP>2024-08-26 23:31:12<SeP>2024-08-28 11:09:36<SeP>2024-08-29 22:48:00<SeP>2024-08-31 10:26:24<SeP>2024-09-01 22:04:48<SeP>2024-09-03 09:43:12<SeP>2024-09-04 21:21:36<SeP>2024-09-06 09:00:00<SeP>2024-09-07 20:38:24<SeP>2024-09-09 08:16:48<SeP>2024-09-10 19:55:12<SeP>2024-09-12 07:33:36<SeP>2024-09-13 19:12:00<SeP>2024-09-15 06:50:24<SeP>2024-09-16 18:28:48<SeP>2024-09-18 06:07:12<SeP>2024-09-19 17:45:36<SeP>2024-09-21 05:24:00<SeP>2024-09-22 17:02:24<SeP>2024-09-24 04:40:48<SeP>2024-09-25 16:19:12<SeP>2024-09-27 03:57:36<SeP>2024-09-28 15:36:00<SeP>2024-09-30 03:14:24<SeP>2024-10-01 14:52:48<SeP>2024-10-03 02:31:12<SeP>2024-10-04 14:09:36<SeP>2024-10-06 01:48:00<SeP>2024-10-07 13:26:24<SeP>2024-10-09 01:04:48<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:00:00<SeP>2024-10-14 23:38:24<SeP>2024-10-16 11:16:48<SeP>2024-10-17 22:55:12<SeP>2024-10-19 10:33:36<SeP>2024-10-20 22:12:00<SeP>2024-10-22 09:50:24<SeP>2024-10-23 21:28:48<SeP>2024-10-25 09:07:12<SeP>2024-10-26 20:45:36<SeP>2024-10-28 08:24:00<SeP>2024-10-29 20:02:24<SeP>2024-10-31 07:40:48<SeP>2024-11-01 19:19:12<SeP>2024-11-03 05:57:36<SeP>2024-11-04 17:36:00<SeP>2024-11-06 05:14:24<SeP>2024-11-07 16:52:48<SeP>2024-11-09 04:31:12<SeP>2024-11-10 16:09:36<SeP>2024-11-12 03:48:00<SeP>2024-11-13 15:26:24<SeP>2024-11-15 03:04:48<SeP>2024-11-16 14:43:12<SeP>2024-11-18 02:21:36<SeP>2024-11-19 14:00:00<SeP>2024-11-21 01:38:24<SeP>2024-11-22 13:16:48<SeP>2024-11-24 00:55:12<SeP>2024-11-25 12:33:36<SeP>2024-11-27 00:12:00<SeP>2024-11-28 11:50:24<SeP>2024-11-29 23:28:48<SeP>2024-12-01 11:07:12<SeP>2024-12-02 22:45:36<SeP>2024-12-04 10:24:00<SeP>2024-12-05 22:02:24<SeP>2024-12-07 09:40:48<SeP>2024-12-08 21:19:12<SeP>2024-12-10 08:57:36<SeP>2024-12-11 20:36:00<SeP>2024-12-13 08:14:24<SeP>2024-12-14 19:52:48<SeP>2024-12-16 07:31:12<SeP>2024-12-17 19:09:36<SeP>2024-12-19 06:48:00<SeP>2024-12-20 18:26:24<SeP>2024-12-22 06:04:48<SeP>2024-12-23 17:43:12<SeP>2024-12-25 05:21:36<SeP>2024-12-26 17:00:00<SeP>2024-12-28 04:38:24<SeP>2024-12-29 16:16:48<SeP>2024-12-31 03:55:12<SeP>2025-01-01 15:33:36<SeP>2025-01-03 03:12:00<SeP>2025-01-04 14:50:24<SeP>2025-01-06 02:28:48<SeP>2025-01-07 14:07:12<SeP>2025-01-09 01:45:36<SeP>2025-01-10 13:24:00<SeP>2025-01-12 01:02:24<SeP>2025-01-13 12:40:48<SeP>2025-01-15 00:19:12<SeP>2025-01-16 11:57:36<SeP>2025-01-17 23:36:00<SeP>2025-01-19 11:14:24<SeP>2025-01-20 22:52:48<SeP>2025-01-22 10:31:12<SeP>2025-01-23 22:09:36<SeP>2025-01-25 09:48:00<SeP>2025-01-26 21:26:24<SeP>2025-01-28 09:04:48<SeP>2025-01-29 20:43:12<SeP>2025-01-31 08:21:36<SeP>2025-02-01 20:00:00<SeP>2025-02-03 07:38:24<SeP>2025-02-04 19:16:48<SeP>2025-02-06 06:55:12<SeP>2025-02-07 18:33:36<SeP>2025-02-09 06:12:00<SeP>2025-02-10 17:50:24<SeP>2025-02-12 05:28:48<SeP>2025-02-13 17:07:12<SeP>2025-02-15 04:45:36<SeP>2025-02-16 16:24:00<SeP>2025-02-18 04:02:24<SeP>2025-02-19 15:40:48<SeP>2025-02-21 03:19:12<SeP>2025-02-22 14:57:36<SeP>2025-02-24 02:36:00<SeP>2025-02-25 14:14:24<SeP>2025-02-27 01:52:48<SeP>2025-02-28 13:31:12<SeP>2025-03-02 01:09:36<SeP>2025-03-03 12:48:00<SeP>2025-03-05 00:26:24<SeP>2025-03-06 12:04:48<SeP>2025-03-07 23:43:12<SeP>2025-03-09 12:21:36";
  const itemLabel       = "Ataques";
  const itemData        = "195<SeP>575<SeP>1401<SeP>654<SeP>225<SeP>234<SeP>7036<SeP>603<SeP>9384<SeP>563<SeP>402<SeP>1130<SeP>1298<SeP>244<SeP>308<SeP>306<SeP>174<SeP>749<SeP>341<SeP>8279<SeP>6882<SeP>6780<SeP>10039<SeP>1488<SeP>289<SeP>414<SeP>173<SeP>383<SeP>5931<SeP>82<SeP>391<SeP>184<SeP>491<SeP>886<SeP>10074<SeP>8930<SeP>10278<SeP>10244<SeP>5382<SeP>6282<SeP>8492<SeP>8012<SeP>10234<SeP>7624<SeP>7448<SeP>9240<SeP>9043<SeP>8150<SeP>7799<SeP>5370<SeP>10272<SeP>9450<SeP>6764<SeP>8045<SeP>9238<SeP>8747<SeP>18870<SeP>16966<SeP>8869<SeP>11260<SeP>6632<SeP>8910<SeP>8021<SeP>8898<SeP>9312<SeP>6189<SeP>6538<SeP>7182<SeP>7142<SeP>2387<SeP>6141<SeP>5789<SeP>7084<SeP>6402<SeP>8102<SeP>3971<SeP>5474<SeP>8058<SeP>4468<SeP>6463<SeP>5663<SeP>4783<SeP>7630<SeP>5354<SeP>5380<SeP>5677<SeP>9866<SeP>21097<SeP>33185<SeP>10774<SeP>9385<SeP>5739<SeP>7293<SeP>13036<SeP>6012<SeP>4497<SeP>5293<SeP>4881<SeP>6379<SeP>5455<SeP>8636<SeP>5502<SeP>6551<SeP>5281<SeP>4539<SeP>8858<SeP>8760<SeP>7614<SeP>6633<SeP>4155<SeP>10335<SeP>9354<SeP>5845<SeP>3193<SeP>6233<SeP>9321<SeP>5643<SeP>6781<SeP>9679<SeP>4690<SeP>2183<SeP>1579<SeP>1967<SeP>1816<SeP>2278<SeP>1088<SeP>1421<SeP>515<SeP>1476<SeP>1503<SeP>1153<SeP>1136<SeP>823<SeP>1162<SeP>733<SeP>1543<SeP>1475<SeP>1048<SeP>1735<SeP>2071<SeP>1635<SeP>12033<SeP>5843<SeP>11160<SeP>7310<SeP>5588<SeP>10682<SeP>9113<SeP>9320<SeP>8570<SeP>14131<SeP>8728<SeP>10813<SeP>11126<SeP>12206<SeP>11198<SeP>7837<SeP>3985<SeP>7369<SeP>21225<SeP>10682<SeP>7471<SeP>7556<SeP>13174<SeP>13045<SeP>8836<SeP>4815<SeP>7413<SeP>8891<SeP>24522<SeP>7478<SeP>10089<SeP>10034<SeP>5155<SeP>5612<SeP>7306<SeP>15383<SeP>5236<SeP>13557<SeP>7198<SeP>7343<SeP>8732<SeP>5732<SeP>4233<SeP>7228<SeP>7032<SeP>5427<SeP>6746<SeP>8054<SeP>3617<SeP>21532<SeP>7798<SeP>7086<SeP>6032<SeP>8610<SeP>10432<SeP>7369<SeP>2502<SeP>5980<SeP>4267<SeP>4683<SeP>4477<SeP>1496<SeP>619<SeP>642<SeP>203<SeP>540<SeP>641<SeP>782<SeP>446<SeP>924<SeP>1564<SeP>3197<SeP>1033<SeP>22516<SeP>1929<SeP>4420<SeP>2906<SeP>3656<SeP>6936<SeP>4182<SeP>2582<SeP>3829<SeP>3001<SeP>2784<SeP>3965<SeP>3699<SeP>2252<SeP>3675<SeP>1250<SeP>2418<SeP>2196<SeP>1552<SeP>959<SeP>1695<SeP>953<SeP>1627<SeP>1984<SeP>26269<SeP>1816<SeP>4349<SeP>3543<SeP>2088<SeP>4186<SeP>2033<SeP>2700<SeP>3336<SeP>3067<SeP>2919<SeP>3155<SeP>2775<SeP>3281<SeP>6635<SeP>5006<SeP>3558<SeP>4035<SeP>3048<SeP>3212<SeP>4294<SeP>5820<SeP>8186<SeP>5669<SeP>2322<SeP>3303<SeP>2446<SeP>5607<SeP>2929<SeP>3233<SeP>2436<SeP>4484<SeP>5592<SeP>3064<SeP>6153<SeP>4278<SeP>6181<SeP>4576<SeP>5718<SeP>6470<SeP>20826<SeP>5047<SeP>11058<SeP>1949<SeP>3868<SeP>4632<SeP>3564<SeP>4242<SeP>5184<SeP>3684<SeP>4995<SeP>4252<SeP>3533<SeP>3324<SeP>1267<SeP>1965<SeP>3268<SeP>2878<SeP>2830<SeP>3329<SeP>4340<SeP>4156<SeP>3092<SeP>4653<SeP>3455<SeP>3202<SeP>4116<SeP>8343<SeP>6119<SeP>5682<SeP>5199<SeP>4817<SeP>3619<SeP>3614<SeP>4630<SeP>5777<SeP>5623<SeP>4735<SeP>4093<SeP>1560<SeP>472<SeP>2559<SeP>1332<SeP>628<SeP>2349<SeP>1544<SeP>837<SeP>3300<SeP>4236<SeP>6496<SeP>25967<SeP>12880<SeP>5589<SeP>15731<SeP>12976<SeP>5370<SeP>6350<SeP>4651<SeP>24363<SeP>4946<SeP>5274<SeP>4741<SeP>5343<SeP>6764<SeP>29201<SeP>4753<SeP>4032<SeP>4234<SeP>3728<SeP>6720<SeP>3599<SeP>3881<SeP>3290<SeP>4243<SeP>5916<SeP>4514<SeP>17735<SeP>5823<SeP>6704<SeP>4899<SeP>1570<SeP>3826<SeP>4993<SeP>3589<SeP>4351<SeP>2862<SeP>3937<SeP>2391<SeP>4079<SeP>4225<SeP>7974<SeP>10580<SeP>8490<SeP>8744<SeP>9606<SeP>7027<SeP>5789<SeP>5186<SeP>4355<SeP>26282<SeP>2939<SeP>3255<SeP>4518<SeP>4710<SeP>11017<SeP>4892<SeP>4010<SeP>5144<SeP>3471<SeP>5013<SeP>9584<SeP>8461<SeP>4434<SeP>2813<SeP>3506<SeP>1974<SeP>2310<SeP>2548<SeP>2097<SeP>2461<SeP>1664<SeP>3080";
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
  const itemData    = "699137<SeP>368014<SeP>207082<SeP>181026<SeP>111073<SeP>88547<SeP>84299<SeP>81564<SeP>68371<SeP>68308";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "300063<SeP>41437<SeP>41123<SeP>36799<SeP>14685<SeP>11293<SeP>8505<SeP>8095<SeP>7249<SeP>7247";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "399074<SeP>331215<SeP>203958<SeP>139903<SeP>96388<SeP>81577<SeP>81298<SeP>70271<SeP>60213<SeP>59015";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "364889<SeP>259557<SeP>238597<SeP>144194<SeP>67730<SeP>60133<SeP>57248<SeP>53530<SeP>37116<SeP>36619";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>0<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "158223<SeP>53838<SeP>36003<SeP>32952<SeP>21944<SeP>12917<SeP>12240<SeP>10959<SeP>7614<SeP>7515";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Atacks";
  const itemData    = "351972<SeP>258790<SeP>122250<SeP>80374<SeP>56222<SeP>49174<SeP>47376<SeP>30688<SeP>29324<SeP>26886";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "699137<SeP>368014<SeP>207082<SeP>181026<SeP>111073<SeP>88547<SeP>84299<SeP>81564<SeP>68371<SeP>68308";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "300063<SeP>41437<SeP>41123<SeP>36799<SeP>14685<SeP>11293<SeP>8505<SeP>8095<SeP>7249<SeP>7247";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "399074<SeP>331215<SeP>203958<SeP>139903<SeP>96388<SeP>81577<SeP>81298<SeP>70271<SeP>60213<SeP>59015";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "364889<SeP>259557<SeP>238597<SeP>144194<SeP>67730<SeP>60133<SeP>57248<SeP>53530<SeP>37116<SeP>36619";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>0<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "158223<SeP>53838<SeP>36003<SeP>32952<SeP>21944<SeP>12917<SeP>12240<SeP>10959<SeP>7614<SeP>7515";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Ataques";
  const itemData    = "351972<SeP>258790<SeP>122250<SeP>80374<SeP>56222<SeP>49174<SeP>47376<SeP>30688<SeP>29324<SeP>26886";
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
