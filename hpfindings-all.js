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
  const metricData    = "2836665";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "551754";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2284911";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139866";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1434130";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "850781";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54202";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "249348";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "601433";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43497";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2836665";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "551754";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2284911";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139866";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1434130";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "850781";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54202";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "249348";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "601433";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43497";
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
  const incomingData = "2836665<SeP>551754<SeP>2284911<SeP>139866";
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
  const incomingData = "2284911<SeP>1434130<SeP>850781<SeP>54202";
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
  const incomingData = "850781<SeP>249348<SeP>601433<SeP>43497";
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
  const incomingData = "2560089<SeP>257181<SeP>2302908";
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
  const incomingData = "388199<SeP>149<SeP>388050<SeP>227";
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
  const incomingData = "2836665<SeP>551754<SeP>2284911<SeP>139866";
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
  const incomingData = "2284911<SeP>1434130<SeP>850781<SeP>54202";
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
  const incomingData = "850781<SeP>249348<SeP>601433<SeP>43497";
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
  const incomingData = "2560089<SeP>257181<SeP>2302908";
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
  const incomingData = "388199<SeP>149<SeP>388050<SeP>227";
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
  const column3Data   = "220637<SeP>202164<SeP>12514<SeP>12464<SeP>9756<SeP>9444<SeP>6447<SeP>5593<SeP>4631<SeP>3498";
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
  const column2Data  = "211988<SeP>43126<SeP>822<SeP>485<SeP>460<SeP>441<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2402409<SeP>434256";
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
  const column3Data   = "220637<SeP>202164<SeP>12514<SeP>12464<SeP>9756<SeP>9444<SeP>6447<SeP>5593<SeP>4631<SeP>3498";
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
  const column2Data  = "211988<SeP>43126<SeP>822<SeP>485<SeP>460<SeP>441<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2402409<SeP>434256";
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
        "name": "traffic between 2023-07-26 and 2025-03-02"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          365477,50
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
        "name": "scans between 2023-07-26 and 2025-03-02"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          226598,32,
          365477,50
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
        "name": "attacks between 2023-07-26 and 2025-03-02"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138879,21,
          365477,50
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
        "name": "tráfico entre 2023-07-26 y 2025-03-02"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          365477,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-02"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          226598,32,
          365477,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-02"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138879,21,
          365477,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:13:21<SeP>2023-07-28 22:26:42<SeP>2023-07-30 09:40:03<SeP>2023-07-31 20:53:24<SeP>2023-08-02 08:06:45<SeP>2023-08-03 19:20:06<SeP>2023-08-05 06:33:27<SeP>2023-08-06 17:46:48<SeP>2023-08-08 05:00:09<SeP>2023-08-09 16:13:30<SeP>2023-08-11 03:26:51<SeP>2023-08-12 14:40:12<SeP>2023-08-14 01:53:33<SeP>2023-08-15 13:06:54<SeP>2023-08-17 00:20:15<SeP>2023-08-18 11:33:36<SeP>2023-08-19 22:46:57<SeP>2023-08-21 10:00:18<SeP>2023-08-22 21:13:39<SeP>2023-08-24 08:27:00<SeP>2023-08-25 19:40:21<SeP>2023-08-27 06:53:42<SeP>2023-08-28 18:07:03<SeP>2023-08-30 05:20:24<SeP>2023-08-31 16:33:45<SeP>2023-09-02 03:47:06<SeP>2023-09-03 15:00:27<SeP>2023-09-05 02:13:48<SeP>2023-09-06 13:27:09<SeP>2023-09-08 00:40:30<SeP>2023-09-09 11:53:51<SeP>2023-09-10 23:07:12<SeP>2023-09-12 10:20:33<SeP>2023-09-13 21:33:54<SeP>2023-09-15 08:47:15<SeP>2023-09-16 20:00:36<SeP>2023-09-18 07:13:57<SeP>2023-09-19 18:27:18<SeP>2023-09-21 05:40:39<SeP>2023-09-22 16:54:00<SeP>2023-09-24 04:07:21<SeP>2023-09-25 15:20:42<SeP>2023-09-27 02:34:03<SeP>2023-09-28 13:47:24<SeP>2023-09-30 01:00:45<SeP>2023-10-01 12:14:06<SeP>2023-10-02 23:27:27<SeP>2023-10-04 10:40:48<SeP>2023-10-05 21:54:09<SeP>2023-10-07 09:07:30<SeP>2023-10-08 20:20:51<SeP>2023-10-10 07:34:12<SeP>2023-10-11 18:47:33<SeP>2023-10-13 06:00:54<SeP>2023-10-14 17:14:15<SeP>2023-10-16 04:27:36<SeP>2023-10-17 15:40:57<SeP>2023-10-19 02:54:18<SeP>2023-10-20 14:07:39<SeP>2023-10-22 01:21:00<SeP>2023-10-23 12:34:21<SeP>2023-10-24 23:47:42<SeP>2023-10-26 11:01:03<SeP>2023-10-27 22:14:24<SeP>2023-10-29 09:27:45<SeP>2023-10-30 20:41:06<SeP>2023-11-01 07:54:27<SeP>2023-11-02 19:07:48<SeP>2023-11-04 06:21:09<SeP>2023-11-05 16:34:30<SeP>2023-11-07 03:47:51<SeP>2023-11-08 15:01:12<SeP>2023-11-10 02:14:33<SeP>2023-11-11 13:27:54<SeP>2023-11-13 00:41:15<SeP>2023-11-14 11:54:36<SeP>2023-11-15 23:07:57<SeP>2023-11-17 10:21:18<SeP>2023-11-18 21:34:39<SeP>2023-11-20 08:48:00<SeP>2023-11-21 20:01:21<SeP>2023-11-23 07:14:42<SeP>2023-11-24 18:28:03<SeP>2023-11-26 05:41:24<SeP>2023-11-27 16:54:45<SeP>2023-11-29 04:08:06<SeP>2023-11-30 15:21:27<SeP>2023-12-02 02:34:48<SeP>2023-12-03 13:48:09<SeP>2023-12-05 01:01:30<SeP>2023-12-06 12:14:51<SeP>2023-12-07 23:28:12<SeP>2023-12-09 10:41:33<SeP>2023-12-10 21:54:54<SeP>2023-12-12 09:08:15<SeP>2023-12-13 20:21:36<SeP>2023-12-15 07:34:57<SeP>2023-12-16 18:48:18<SeP>2023-12-18 06:01:39<SeP>2023-12-19 17:15:00<SeP>2023-12-21 04:28:21<SeP>2023-12-22 15:41:42<SeP>2023-12-24 02:55:03<SeP>2023-12-25 14:08:24<SeP>2023-12-27 01:21:45<SeP>2023-12-28 12:35:06<SeP>2023-12-29 23:48:27<SeP>2023-12-31 11:01:48<SeP>2024-01-01 22:15:09<SeP>2024-01-03 09:28:30<SeP>2024-01-04 20:41:51<SeP>2024-01-06 07:55:12<SeP>2024-01-07 19:08:33<SeP>2024-01-09 06:21:54<SeP>2024-01-10 17:35:15<SeP>2024-01-12 04:48:36<SeP>2024-01-13 16:01:57<SeP>2024-01-15 03:15:18<SeP>2024-01-16 14:28:39<SeP>2024-01-18 01:42:00<SeP>2024-01-19 12:55:21<SeP>2024-01-21 00:08:42<SeP>2024-01-22 11:22:03<SeP>2024-01-23 22:35:24<SeP>2024-01-25 09:48:45<SeP>2024-01-26 21:02:06<SeP>2024-01-28 08:15:27<SeP>2024-01-29 19:28:48<SeP>2024-01-31 06:42:09<SeP>2024-02-01 17:55:30<SeP>2024-02-03 05:08:51<SeP>2024-02-04 16:22:12<SeP>2024-02-06 03:35:33<SeP>2024-02-07 14:48:54<SeP>2024-02-09 02:02:15<SeP>2024-02-10 13:15:36<SeP>2024-02-12 00:28:57<SeP>2024-02-13 11:42:18<SeP>2024-02-14 22:55:39<SeP>2024-02-16 10:09:00<SeP>2024-02-17 21:22:21<SeP>2024-02-19 08:35:42<SeP>2024-02-20 19:49:03<SeP>2024-02-22 07:02:24<SeP>2024-02-23 18:15:45<SeP>2024-02-25 05:29:06<SeP>2024-02-26 16:42:27<SeP>2024-02-28 03:55:48<SeP>2024-02-29 15:09:09<SeP>2024-03-02 02:22:30<SeP>2024-03-03 13:35:51<SeP>2024-03-05 00:49:12<SeP>2024-03-06 12:02:33<SeP>2024-03-07 23:15:54<SeP>2024-03-09 10:29:15<SeP>2024-03-10 22:42:36<SeP>2024-03-12 09:55:57<SeP>2024-03-13 21:09:18<SeP>2024-03-15 08:22:39<SeP>2024-03-16 19:36:00<SeP>2024-03-18 06:49:21<SeP>2024-03-19 18:02:42<SeP>2024-03-21 05:16:03<SeP>2024-03-22 16:29:24<SeP>2024-03-24 03:42:45<SeP>2024-03-25 14:56:06<SeP>2024-03-27 02:09:27<SeP>2024-03-28 13:22:48<SeP>2024-03-30 00:36:09<SeP>2024-03-31 11:49:30<SeP>2024-04-01 23:02:51<SeP>2024-04-03 10:16:12<SeP>2024-04-04 21:29:33<SeP>2024-04-06 08:42:54<SeP>2024-04-07 19:56:15<SeP>2024-04-09 07:09:36<SeP>2024-04-10 18:22:57<SeP>2024-04-12 05:36:18<SeP>2024-04-13 16:49:39<SeP>2024-04-15 04:03:00<SeP>2024-04-16 15:16:21<SeP>2024-04-18 02:29:42<SeP>2024-04-19 13:43:03<SeP>2024-04-21 00:56:24<SeP>2024-04-22 12:09:45<SeP>2024-04-23 23:23:06<SeP>2024-04-25 10:36:27<SeP>2024-04-26 21:49:48<SeP>2024-04-28 09:03:09<SeP>2024-04-29 20:16:30<SeP>2024-05-01 07:29:51<SeP>2024-05-02 18:43:12<SeP>2024-05-04 05:56:33<SeP>2024-05-05 17:09:54<SeP>2024-05-07 04:23:15<SeP>2024-05-08 15:36:36<SeP>2024-05-10 02:49:57<SeP>2024-05-11 14:03:18<SeP>2024-05-13 01:16:39<SeP>2024-05-14 12:30:00<SeP>2024-05-15 23:43:21<SeP>2024-05-17 10:56:42<SeP>2024-05-18 22:10:03<SeP>2024-05-20 09:23:24<SeP>2024-05-21 20:36:45<SeP>2024-05-23 07:50:06<SeP>2024-05-24 19:03:27<SeP>2024-05-26 06:16:48<SeP>2024-05-27 17:30:09<SeP>2024-05-29 04:43:30<SeP>2024-05-30 15:56:51<SeP>2024-06-01 03:10:12<SeP>2024-06-02 14:23:33<SeP>2024-06-04 01:36:54<SeP>2024-06-05 12:50:15<SeP>2024-06-07 00:03:36<SeP>2024-06-08 11:16:57<SeP>2024-06-09 22:30:18<SeP>2024-06-11 09:43:39<SeP>2024-06-12 20:57:00<SeP>2024-06-14 08:10:21<SeP>2024-06-15 19:23:42<SeP>2024-06-17 06:37:03<SeP>2024-06-18 17:50:24<SeP>2024-06-20 05:03:45<SeP>2024-06-21 16:17:06<SeP>2024-06-23 03:30:27<SeP>2024-06-24 14:43:48<SeP>2024-06-26 01:57:09<SeP>2024-06-27 13:10:30<SeP>2024-06-29 00:23:51<SeP>2024-06-30 11:37:12<SeP>2024-07-01 22:50:33<SeP>2024-07-03 10:03:54<SeP>2024-07-04 21:17:15<SeP>2024-07-06 08:30:36<SeP>2024-07-07 19:43:57<SeP>2024-07-09 06:57:18<SeP>2024-07-10 18:10:39<SeP>2024-07-12 05:24:00<SeP>2024-07-13 16:37:21<SeP>2024-07-15 03:50:42<SeP>2024-07-16 15:04:03<SeP>2024-07-18 02:17:24<SeP>2024-07-19 13:30:45<SeP>2024-07-21 00:44:06<SeP>2024-07-22 11:57:27<SeP>2024-07-23 23:10:48<SeP>2024-07-25 10:24:09<SeP>2024-07-26 21:37:30<SeP>2024-07-28 08:50:51<SeP>2024-07-29 20:04:12<SeP>2024-07-31 07:17:33<SeP>2024-08-01 18:30:54<SeP>2024-08-03 05:44:15<SeP>2024-08-04 16:57:36<SeP>2024-08-06 04:10:57<SeP>2024-08-07 15:24:18<SeP>2024-08-09 02:37:39<SeP>2024-08-10 13:51:00<SeP>2024-08-12 01:04:21<SeP>2024-08-13 12:17:42<SeP>2024-08-14 23:31:03<SeP>2024-08-16 10:44:24<SeP>2024-08-17 21:57:45<SeP>2024-08-19 09:11:06<SeP>2024-08-20 20:24:27<SeP>2024-08-22 07:37:48<SeP>2024-08-23 18:51:09<SeP>2024-08-25 06:04:30<SeP>2024-08-26 17:17:51<SeP>2024-08-28 04:31:12<SeP>2024-08-29 15:44:33<SeP>2024-08-31 02:57:54<SeP>2024-09-01 14:11:15<SeP>2024-09-03 01:24:36<SeP>2024-09-04 12:37:57<SeP>2024-09-05 23:51:18<SeP>2024-09-07 11:04:39<SeP>2024-09-08 22:18:00<SeP>2024-09-10 09:31:21<SeP>2024-09-11 20:44:42<SeP>2024-09-13 07:58:03<SeP>2024-09-14 19:11:24<SeP>2024-09-16 06:24:45<SeP>2024-09-17 17:38:06<SeP>2024-09-19 04:51:27<SeP>2024-09-20 16:04:48<SeP>2024-09-22 03:18:09<SeP>2024-09-23 14:31:30<SeP>2024-09-25 01:44:51<SeP>2024-09-26 12:58:12<SeP>2024-09-28 00:11:33<SeP>2024-09-29 11:24:54<SeP>2024-09-30 22:38:15<SeP>2024-10-02 09:51:36<SeP>2024-10-03 21:04:57<SeP>2024-10-05 08:18:18<SeP>2024-10-06 19:31:39<SeP>2024-10-08 06:45:00<SeP>2024-10-09 17:58:21<SeP>2024-10-11 05:11:42<SeP>2024-10-12 16:25:03<SeP>2024-10-14 03:38:24<SeP>2024-10-15 14:51:45<SeP>2024-10-17 02:05:06<SeP>2024-10-18 13:18:27<SeP>2024-10-20 00:31:48<SeP>2024-10-21 11:45:09<SeP>2024-10-22 22:58:30<SeP>2024-10-24 10:11:51<SeP>2024-10-25 21:25:12<SeP>2024-10-27 08:38:33<SeP>2024-10-28 19:51:54<SeP>2024-10-30 07:05:15<SeP>2024-10-31 18:18:36<SeP>2024-11-02 05:31:57<SeP>2024-11-03 15:45:18<SeP>2024-11-05 02:58:39<SeP>2024-11-06 14:12:00<SeP>2024-11-08 01:25:21<SeP>2024-11-09 12:38:42<SeP>2024-11-10 23:52:03<SeP>2024-11-12 11:05:24<SeP>2024-11-13 22:18:45<SeP>2024-11-15 09:32:06<SeP>2024-11-16 20:45:27<SeP>2024-11-18 07:58:48<SeP>2024-11-19 19:12:09<SeP>2024-11-21 06:25:30<SeP>2024-11-22 17:38:51<SeP>2024-11-24 04:52:12<SeP>2024-11-25 16:05:33<SeP>2024-11-27 03:18:54<SeP>2024-11-28 14:32:15<SeP>2024-11-30 01:45:36<SeP>2024-12-01 12:58:57<SeP>2024-12-03 00:12:18<SeP>2024-12-04 11:25:39<SeP>2024-12-05 22:39:00<SeP>2024-12-07 09:52:21<SeP>2024-12-08 21:05:42<SeP>2024-12-10 08:19:03<SeP>2024-12-11 19:32:24<SeP>2024-12-13 06:45:45<SeP>2024-12-14 17:59:06<SeP>2024-12-16 05:12:27<SeP>2024-12-17 16:25:48<SeP>2024-12-19 03:39:09<SeP>2024-12-20 14:52:30<SeP>2024-12-22 02:05:51<SeP>2024-12-23 13:19:12<SeP>2024-12-25 00:32:33<SeP>2024-12-26 11:45:54<SeP>2024-12-27 22:59:15<SeP>2024-12-29 10:12:36<SeP>2024-12-30 21:25:57<SeP>2025-01-01 08:39:18<SeP>2025-01-02 19:52:39<SeP>2025-01-04 07:06:00<SeP>2025-01-05 18:19:21<SeP>2025-01-07 05:32:42<SeP>2025-01-08 16:46:03<SeP>2025-01-10 03:59:24<SeP>2025-01-11 15:12:45<SeP>2025-01-13 02:26:06<SeP>2025-01-14 13:39:27<SeP>2025-01-16 00:52:48<SeP>2025-01-17 12:06:09<SeP>2025-01-18 23:19:30<SeP>2025-01-20 10:32:51<SeP>2025-01-21 21:46:12<SeP>2025-01-23 08:59:33<SeP>2025-01-24 20:12:54<SeP>2025-01-26 07:26:15<SeP>2025-01-27 18:39:36<SeP>2025-01-29 05:52:57<SeP>2025-01-30 17:06:18<SeP>2025-02-01 04:19:39<SeP>2025-02-02 15:33:00<SeP>2025-02-04 02:46:21<SeP>2025-02-05 13:59:42<SeP>2025-02-07 01:13:03<SeP>2025-02-08 12:26:24<SeP>2025-02-09 23:39:45<SeP>2025-02-11 10:53:06<SeP>2025-02-12 22:06:27<SeP>2025-02-14 09:19:48<SeP>2025-02-15 20:33:09<SeP>2025-02-17 07:46:30<SeP>2025-02-18 18:59:51<SeP>2025-02-20 06:13:12<SeP>2025-02-21 17:26:33<SeP>2025-02-23 04:39:54<SeP>2025-02-24 15:53:15<SeP>2025-02-26 03:06:36<SeP>2025-02-27 14:19:57<SeP>2025-03-01 01:33:18<SeP>2025-03-02 12:46:39";
  const item1Label       = "Scans";
  const item1Data        = "770<SeP>1512<SeP>1368<SeP>1453<SeP>1250<SeP>1722<SeP>951<SeP>966<SeP>1178<SeP>3404<SeP>2581<SeP>1707<SeP>3169<SeP>1118<SeP>742<SeP>943<SeP>1406<SeP>2921<SeP>1557<SeP>1368<SeP>1274<SeP>934<SeP>1033<SeP>1283<SeP>888<SeP>872<SeP>784<SeP>3752<SeP>729<SeP>1021<SeP>859<SeP>1726<SeP>899<SeP>840<SeP>3063<SeP>2256<SeP>2363<SeP>1704<SeP>1645<SeP>1295<SeP>1519<SeP>1841<SeP>1936<SeP>2009<SeP>1621<SeP>1608<SeP>1692<SeP>1717<SeP>1586<SeP>1875<SeP>1817<SeP>1790<SeP>1582<SeP>3251<SeP>1365<SeP>1669<SeP>2124<SeP>1902<SeP>2126<SeP>1899<SeP>3328<SeP>1414<SeP>1473<SeP>1517<SeP>1469<SeP>1945<SeP>1514<SeP>1217<SeP>1415<SeP>1367<SeP>2058<SeP>1464<SeP>1063<SeP>1246<SeP>1478<SeP>8137<SeP>1189<SeP>1389<SeP>1274<SeP>1726<SeP>1948<SeP>1110<SeP>6539<SeP>1718<SeP>1592<SeP>985<SeP>1189<SeP>3289<SeP>1182<SeP>990<SeP>1063<SeP>1164<SeP>1487<SeP>2539<SeP>1026<SeP>1581<SeP>3023<SeP>6329<SeP>1281<SeP>963<SeP>953<SeP>902<SeP>965<SeP>974<SeP>1029<SeP>1233<SeP>4293<SeP>1691<SeP>1377<SeP>1501<SeP>512<SeP>1413<SeP>1327<SeP>1201<SeP>873<SeP>2039<SeP>1358<SeP>1260<SeP>1034<SeP>968<SeP>1162<SeP>700<SeP>857<SeP>852<SeP>808<SeP>1112<SeP>889<SeP>928<SeP>697<SeP>881<SeP>871<SeP>799<SeP>735<SeP>857<SeP>960<SeP>840<SeP>866<SeP>832<SeP>782<SeP>776<SeP>1003<SeP>915<SeP>782<SeP>911<SeP>1033<SeP>810<SeP>1095<SeP>992<SeP>446<SeP>964<SeP>876<SeP>927<SeP>1184<SeP>1000<SeP>1118<SeP>1248<SeP>962<SeP>952<SeP>957<SeP>992<SeP>749<SeP>966<SeP>1092<SeP>901<SeP>879<SeP>897<SeP>1041<SeP>1000<SeP>1039<SeP>1011<SeP>1165<SeP>919<SeP>929<SeP>1173<SeP>2030<SeP>1295<SeP>1013<SeP>1019<SeP>1208<SeP>973<SeP>1015<SeP>773<SeP>610<SeP>984<SeP>1159<SeP>888<SeP>954<SeP>1259<SeP>1183<SeP>1153<SeP>1285<SeP>1087<SeP>1376<SeP>1117<SeP>1497<SeP>1214<SeP>1566<SeP>2099<SeP>1319<SeP>811<SeP>901<SeP>1083<SeP>1041<SeP>723<SeP>808<SeP>863<SeP>983<SeP>818<SeP>4960<SeP>3640<SeP>2003<SeP>1349<SeP>1127<SeP>875<SeP>1095<SeP>858<SeP>1025<SeP>982<SeP>1110<SeP>964<SeP>1206<SeP>2368<SeP>1004<SeP>1180<SeP>1218<SeP>1328<SeP>1066<SeP>1134<SeP>946<SeP>1123<SeP>1112<SeP>968<SeP>1120<SeP>1022<SeP>1217<SeP>859<SeP>1405<SeP>1037<SeP>1129<SeP>1079<SeP>1343<SeP>1275<SeP>1145<SeP>1638<SeP>1117<SeP>1143<SeP>1090<SeP>1688<SeP>1631<SeP>1324<SeP>2102<SeP>1556<SeP>1484<SeP>1939<SeP>1434<SeP>1206<SeP>1129<SeP>1297<SeP>1326<SeP>1470<SeP>1149<SeP>1351<SeP>1676<SeP>1665<SeP>1337<SeP>1527<SeP>1493<SeP>1211<SeP>1011<SeP>1141<SeP>1380<SeP>1082<SeP>1261<SeP>1494<SeP>1027<SeP>1527<SeP>1820<SeP>1295<SeP>1378<SeP>1627<SeP>1392<SeP>967<SeP>1014<SeP>984<SeP>1029<SeP>829<SeP>1023<SeP>1747<SeP>1169<SeP>1057<SeP>1129<SeP>960<SeP>776<SeP>1163<SeP>1330<SeP>848<SeP>923<SeP>929<SeP>1327<SeP>1575<SeP>1499<SeP>1059<SeP>1138<SeP>990<SeP>1853<SeP>1085<SeP>1082<SeP>1054<SeP>1222<SeP>1425<SeP>1008<SeP>920<SeP>1287<SeP>1035<SeP>856<SeP>892<SeP>1145<SeP>1538<SeP>1441<SeP>1636<SeP>1369<SeP>1078<SeP>1049<SeP>1083<SeP>1217<SeP>1161<SeP>1173<SeP>1003<SeP>958<SeP>1317<SeP>1450<SeP>1382<SeP>1570<SeP>1482<SeP>1254<SeP>1550<SeP>1451<SeP>1340<SeP>1468<SeP>1535<SeP>1245<SeP>1743<SeP>1254<SeP>1558<SeP>1582<SeP>1349<SeP>1453<SeP>1360<SeP>1125<SeP>1338<SeP>1403<SeP>1695<SeP>1322<SeP>1320<SeP>1231<SeP>1424<SeP>1176<SeP>1322<SeP>1416<SeP>1751<SeP>1732<SeP>1269<SeP>693<SeP>1397<SeP>1895<SeP>1202<SeP>1460<SeP>1183<SeP>1180<SeP>1298<SeP>1464<SeP>1176<SeP>1548<SeP>1522<SeP>1666<SeP>1479<SeP>1593<SeP>1510<SeP>1425<SeP>1433<SeP>1637<SeP>1534<SeP>1174<SeP>1211<SeP>1915<SeP>1739<SeP>1774<SeP>1892<SeP>1673<SeP>1585<SeP>1592<SeP>1597<SeP>1540<SeP>1523<SeP>1742<SeP>1720<SeP>1724<SeP>1430<SeP>1496<SeP>1482";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "155<SeP>614<SeP>1218<SeP>826<SeP>225<SeP>230<SeP>6980<SeP>548<SeP>9497<SeP>568<SeP>398<SeP>1129<SeP>1276<SeP>257<SeP>164<SeP>449<SeP>109<SeP>762<SeP>309<SeP>6700<SeP>7081<SeP>6791<SeP>8468<SeP>4498<SeP>272<SeP>218<SeP>394<SeP>373<SeP>5707<SeP>319<SeP>169<SeP>315<SeP>490<SeP>312<SeP>6239<SeP>10075<SeP>9426<SeP>10550<SeP>7588<SeP>4956<SeP>8699<SeP>6659<SeP>9375<SeP>9139<SeP>7521<SeP>8322<SeP>8766<SeP>8429<SeP>8485<SeP>6325<SeP>5798<SeP>11655<SeP>7107<SeP>8106<SeP>7474<SeP>10054<SeP>15084<SeP>20023<SeP>8409<SeP>9195<SeP>10191<SeP>7432<SeP>8469<SeP>7645<SeP>9175<SeP>8429<SeP>6133<SeP>6701<SeP>7024<SeP>6175<SeP>3115<SeP>6758<SeP>5498<SeP>6421<SeP>6659<SeP>7395<SeP>4126<SeP>5400<SeP>7992<SeP>4695<SeP>6385<SeP>5630<SeP>4486<SeP>7635<SeP>5353<SeP>5348<SeP>5657<SeP>9368<SeP>21186<SeP>30128<SeP>13576<SeP>9719<SeP>5463<SeP>7630<SeP>12003<SeP>6805<SeP>4235<SeP>5510<SeP>5008<SeP>4622<SeP>6422<SeP>7214<SeP>7439<SeP>5817<SeP>5866<SeP>4772<SeP>7291<SeP>8683<SeP>7571<SeP>7830<SeP>3919<SeP>8225<SeP>10277<SeP>7586<SeP>2781<SeP>5298<SeP>7363<SeP>7476<SeP>5714<SeP>8550<SeP>7962<SeP>1954<SeP>2770<SeP>907<SeP>1721<SeP>3014<SeP>1275<SeP>897<SeP>1161<SeP>1144<SeP>1774<SeP>663<SeP>1291<SeP>1173<SeP>945<SeP>1049<SeP>1009<SeP>1382<SeP>1306<SeP>986<SeP>1834<SeP>2124<SeP>4221<SeP>11390<SeP>8410<SeP>7451<SeP>7577<SeP>12578<SeP>2847<SeP>8845<SeP>12288<SeP>9722<SeP>12053<SeP>9606<SeP>10663<SeP>11802<SeP>8622<SeP>13329<SeP>5839<SeP>4562<SeP>7342<SeP>23604<SeP>7546<SeP>7865<SeP>8387<SeP>13523<SeP>11929<SeP>8202<SeP>4807<SeP>7407<SeP>8766<SeP>24540<SeP>7405<SeP>9939<SeP>10351<SeP>4724<SeP>6039<SeP>6408<SeP>15961<SeP>4680<SeP>13828<SeP>7321<SeP>6265<SeP>9282<SeP>6708<SeP>3637<SeP>6401<SeP>6242<SeP>6494<SeP>7067<SeP>6664<SeP>5637<SeP>21080<SeP>6671<SeP>6028<SeP>6274<SeP>8272<SeP>11452<SeP>6833<SeP>4572<SeP>3291<SeP>6280<SeP>3294<SeP>4244<SeP>4170<SeP>640<SeP>97<SeP>644<SeP>544<SeP>651<SeP>719<SeP>366<SeP>641<SeP>1244<SeP>1245<SeP>3163<SeP>22961<SeP>539<SeP>4369<SeP>2831<SeP>2986<SeP>7201<SeP>3133<SeP>4226<SeP>2645<SeP>3814<SeP>2782<SeP>3419<SeP>4137<SeP>2544<SeP>2302<SeP>3439<SeP>1868<SeP>2067<SeP>2029<SeP>1186<SeP>1422<SeP>1386<SeP>866<SeP>1845<SeP>13074<SeP>15037<SeP>2058<SeP>4126<SeP>3654<SeP>2236<SeP>3887<SeP>1895<SeP>3214<SeP>2972<SeP>3368<SeP>2471<SeP>3126<SeP>2788<SeP>3265<SeP>6667<SeP>4901<SeP>3624<SeP>4029<SeP>2843<SeP>3073<SeP>4363<SeP>6092<SeP>7956<SeP>5343<SeP>2288<SeP>3407<SeP>2619<SeP>4818<SeP>3210<SeP>3661<SeP>2602<SeP>3877<SeP>4948<SeP>4026<SeP>5905<SeP>4112<SeP>6510<SeP>4856<SeP>5142<SeP>4969<SeP>21824<SeP>5879<SeP>10986<SeP>1787<SeP>2993<SeP>4143<SeP>3654<SeP>5299<SeP>3455<SeP>4816<SeP>4481<SeP>4830<SeP>3098<SeP>4245<SeP>1971<SeP>1427<SeP>2141<SeP>3934<SeP>2346<SeP>2848<SeP>3626<SeP>4591<SeP>3628<SeP>3451<SeP>4224<SeP>3401<SeP>3136<SeP>6153<SeP>7947<SeP>6158<SeP>4392<SeP>4880<SeP>4674<SeP>3526<SeP>4078<SeP>4149<SeP>6591<SeP>5624<SeP>4161<SeP>3498<SeP>935<SeP>1116<SeP>1943<SeP>1345<SeP>1231<SeP>1696<SeP>1554<SeP>1330<SeP>3270<SeP>4059<SeP>6434<SeP>31920<SeP>7233<SeP>5238<SeP>17739<SeP>10987<SeP>5499<SeP>6051<SeP>4729<SeP>24222<SeP>4874<SeP>5284<SeP>4550<SeP>5125<SeP>6354<SeP>29721<SeP>5047<SeP>3891<SeP>4050<SeP>3773<SeP>5936<SeP>4462<SeP>3795<SeP>2636<SeP>4566<SeP>5719<SeP>4553<SeP>18127<SeP>5429<SeP>6228<SeP>5712<SeP>1354<SeP>3940<SeP>3670<SeP>4758<SeP>3596<SeP>3582<SeP>3096<SeP>3444<SeP>3468<SeP>3511<SeP>6780<SeP>8840<SeP>10249<SeP>8306<SeP>9187<SeP>7568<SeP>6926<SeP>5132<SeP>4758<SeP>7179<SeP>22466<SeP>3317<SeP>4347<SeP>3186<SeP>11455<SeP>5262<SeP>4199<SeP>4439<SeP>4526<SeP>3335<SeP>6568<SeP>10243<SeP>6170<SeP>3831<SeP>3335<SeP>2815<SeP>2204<SeP>2366";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:13:21<SeP>2023-07-28 22:26:42<SeP>2023-07-30 09:40:03<SeP>2023-07-31 20:53:24<SeP>2023-08-02 08:06:45<SeP>2023-08-03 19:20:06<SeP>2023-08-05 06:33:27<SeP>2023-08-06 17:46:48<SeP>2023-08-08 05:00:09<SeP>2023-08-09 16:13:30<SeP>2023-08-11 03:26:51<SeP>2023-08-12 14:40:12<SeP>2023-08-14 01:53:33<SeP>2023-08-15 13:06:54<SeP>2023-08-17 00:20:15<SeP>2023-08-18 11:33:36<SeP>2023-08-19 22:46:57<SeP>2023-08-21 10:00:18<SeP>2023-08-22 21:13:39<SeP>2023-08-24 08:27:00<SeP>2023-08-25 19:40:21<SeP>2023-08-27 06:53:42<SeP>2023-08-28 18:07:03<SeP>2023-08-30 05:20:24<SeP>2023-08-31 16:33:45<SeP>2023-09-02 03:47:06<SeP>2023-09-03 15:00:27<SeP>2023-09-05 02:13:48<SeP>2023-09-06 13:27:09<SeP>2023-09-08 00:40:30<SeP>2023-09-09 11:53:51<SeP>2023-09-10 23:07:12<SeP>2023-09-12 10:20:33<SeP>2023-09-13 21:33:54<SeP>2023-09-15 08:47:15<SeP>2023-09-16 20:00:36<SeP>2023-09-18 07:13:57<SeP>2023-09-19 18:27:18<SeP>2023-09-21 05:40:39<SeP>2023-09-22 16:54:00<SeP>2023-09-24 04:07:21<SeP>2023-09-25 15:20:42<SeP>2023-09-27 02:34:03<SeP>2023-09-28 13:47:24<SeP>2023-09-30 01:00:45<SeP>2023-10-01 12:14:06<SeP>2023-10-02 23:27:27<SeP>2023-10-04 10:40:48<SeP>2023-10-05 21:54:09<SeP>2023-10-07 09:07:30<SeP>2023-10-08 20:20:51<SeP>2023-10-10 07:34:12<SeP>2023-10-11 18:47:33<SeP>2023-10-13 06:00:54<SeP>2023-10-14 17:14:15<SeP>2023-10-16 04:27:36<SeP>2023-10-17 15:40:57<SeP>2023-10-19 02:54:18<SeP>2023-10-20 14:07:39<SeP>2023-10-22 01:21:00<SeP>2023-10-23 12:34:21<SeP>2023-10-24 23:47:42<SeP>2023-10-26 11:01:03<SeP>2023-10-27 22:14:24<SeP>2023-10-29 09:27:45<SeP>2023-10-30 20:41:06<SeP>2023-11-01 07:54:27<SeP>2023-11-02 19:07:48<SeP>2023-11-04 06:21:09<SeP>2023-11-05 16:34:30<SeP>2023-11-07 03:47:51<SeP>2023-11-08 15:01:12<SeP>2023-11-10 02:14:33<SeP>2023-11-11 13:27:54<SeP>2023-11-13 00:41:15<SeP>2023-11-14 11:54:36<SeP>2023-11-15 23:07:57<SeP>2023-11-17 10:21:18<SeP>2023-11-18 21:34:39<SeP>2023-11-20 08:48:00<SeP>2023-11-21 20:01:21<SeP>2023-11-23 07:14:42<SeP>2023-11-24 18:28:03<SeP>2023-11-26 05:41:24<SeP>2023-11-27 16:54:45<SeP>2023-11-29 04:08:06<SeP>2023-11-30 15:21:27<SeP>2023-12-02 02:34:48<SeP>2023-12-03 13:48:09<SeP>2023-12-05 01:01:30<SeP>2023-12-06 12:14:51<SeP>2023-12-07 23:28:12<SeP>2023-12-09 10:41:33<SeP>2023-12-10 21:54:54<SeP>2023-12-12 09:08:15<SeP>2023-12-13 20:21:36<SeP>2023-12-15 07:34:57<SeP>2023-12-16 18:48:18<SeP>2023-12-18 06:01:39<SeP>2023-12-19 17:15:00<SeP>2023-12-21 04:28:21<SeP>2023-12-22 15:41:42<SeP>2023-12-24 02:55:03<SeP>2023-12-25 14:08:24<SeP>2023-12-27 01:21:45<SeP>2023-12-28 12:35:06<SeP>2023-12-29 23:48:27<SeP>2023-12-31 11:01:48<SeP>2024-01-01 22:15:09<SeP>2024-01-03 09:28:30<SeP>2024-01-04 20:41:51<SeP>2024-01-06 07:55:12<SeP>2024-01-07 19:08:33<SeP>2024-01-09 06:21:54<SeP>2024-01-10 17:35:15<SeP>2024-01-12 04:48:36<SeP>2024-01-13 16:01:57<SeP>2024-01-15 03:15:18<SeP>2024-01-16 14:28:39<SeP>2024-01-18 01:42:00<SeP>2024-01-19 12:55:21<SeP>2024-01-21 00:08:42<SeP>2024-01-22 11:22:03<SeP>2024-01-23 22:35:24<SeP>2024-01-25 09:48:45<SeP>2024-01-26 21:02:06<SeP>2024-01-28 08:15:27<SeP>2024-01-29 19:28:48<SeP>2024-01-31 06:42:09<SeP>2024-02-01 17:55:30<SeP>2024-02-03 05:08:51<SeP>2024-02-04 16:22:12<SeP>2024-02-06 03:35:33<SeP>2024-02-07 14:48:54<SeP>2024-02-09 02:02:15<SeP>2024-02-10 13:15:36<SeP>2024-02-12 00:28:57<SeP>2024-02-13 11:42:18<SeP>2024-02-14 22:55:39<SeP>2024-02-16 10:09:00<SeP>2024-02-17 21:22:21<SeP>2024-02-19 08:35:42<SeP>2024-02-20 19:49:03<SeP>2024-02-22 07:02:24<SeP>2024-02-23 18:15:45<SeP>2024-02-25 05:29:06<SeP>2024-02-26 16:42:27<SeP>2024-02-28 03:55:48<SeP>2024-02-29 15:09:09<SeP>2024-03-02 02:22:30<SeP>2024-03-03 13:35:51<SeP>2024-03-05 00:49:12<SeP>2024-03-06 12:02:33<SeP>2024-03-07 23:15:54<SeP>2024-03-09 10:29:15<SeP>2024-03-10 22:42:36<SeP>2024-03-12 09:55:57<SeP>2024-03-13 21:09:18<SeP>2024-03-15 08:22:39<SeP>2024-03-16 19:36:00<SeP>2024-03-18 06:49:21<SeP>2024-03-19 18:02:42<SeP>2024-03-21 05:16:03<SeP>2024-03-22 16:29:24<SeP>2024-03-24 03:42:45<SeP>2024-03-25 14:56:06<SeP>2024-03-27 02:09:27<SeP>2024-03-28 13:22:48<SeP>2024-03-30 00:36:09<SeP>2024-03-31 11:49:30<SeP>2024-04-01 23:02:51<SeP>2024-04-03 10:16:12<SeP>2024-04-04 21:29:33<SeP>2024-04-06 08:42:54<SeP>2024-04-07 19:56:15<SeP>2024-04-09 07:09:36<SeP>2024-04-10 18:22:57<SeP>2024-04-12 05:36:18<SeP>2024-04-13 16:49:39<SeP>2024-04-15 04:03:00<SeP>2024-04-16 15:16:21<SeP>2024-04-18 02:29:42<SeP>2024-04-19 13:43:03<SeP>2024-04-21 00:56:24<SeP>2024-04-22 12:09:45<SeP>2024-04-23 23:23:06<SeP>2024-04-25 10:36:27<SeP>2024-04-26 21:49:48<SeP>2024-04-28 09:03:09<SeP>2024-04-29 20:16:30<SeP>2024-05-01 07:29:51<SeP>2024-05-02 18:43:12<SeP>2024-05-04 05:56:33<SeP>2024-05-05 17:09:54<SeP>2024-05-07 04:23:15<SeP>2024-05-08 15:36:36<SeP>2024-05-10 02:49:57<SeP>2024-05-11 14:03:18<SeP>2024-05-13 01:16:39<SeP>2024-05-14 12:30:00<SeP>2024-05-15 23:43:21<SeP>2024-05-17 10:56:42<SeP>2024-05-18 22:10:03<SeP>2024-05-20 09:23:24<SeP>2024-05-21 20:36:45<SeP>2024-05-23 07:50:06<SeP>2024-05-24 19:03:27<SeP>2024-05-26 06:16:48<SeP>2024-05-27 17:30:09<SeP>2024-05-29 04:43:30<SeP>2024-05-30 15:56:51<SeP>2024-06-01 03:10:12<SeP>2024-06-02 14:23:33<SeP>2024-06-04 01:36:54<SeP>2024-06-05 12:50:15<SeP>2024-06-07 00:03:36<SeP>2024-06-08 11:16:57<SeP>2024-06-09 22:30:18<SeP>2024-06-11 09:43:39<SeP>2024-06-12 20:57:00<SeP>2024-06-14 08:10:21<SeP>2024-06-15 19:23:42<SeP>2024-06-17 06:37:03<SeP>2024-06-18 17:50:24<SeP>2024-06-20 05:03:45<SeP>2024-06-21 16:17:06<SeP>2024-06-23 03:30:27<SeP>2024-06-24 14:43:48<SeP>2024-06-26 01:57:09<SeP>2024-06-27 13:10:30<SeP>2024-06-29 00:23:51<SeP>2024-06-30 11:37:12<SeP>2024-07-01 22:50:33<SeP>2024-07-03 10:03:54<SeP>2024-07-04 21:17:15<SeP>2024-07-06 08:30:36<SeP>2024-07-07 19:43:57<SeP>2024-07-09 06:57:18<SeP>2024-07-10 18:10:39<SeP>2024-07-12 05:24:00<SeP>2024-07-13 16:37:21<SeP>2024-07-15 03:50:42<SeP>2024-07-16 15:04:03<SeP>2024-07-18 02:17:24<SeP>2024-07-19 13:30:45<SeP>2024-07-21 00:44:06<SeP>2024-07-22 11:57:27<SeP>2024-07-23 23:10:48<SeP>2024-07-25 10:24:09<SeP>2024-07-26 21:37:30<SeP>2024-07-28 08:50:51<SeP>2024-07-29 20:04:12<SeP>2024-07-31 07:17:33<SeP>2024-08-01 18:30:54<SeP>2024-08-03 05:44:15<SeP>2024-08-04 16:57:36<SeP>2024-08-06 04:10:57<SeP>2024-08-07 15:24:18<SeP>2024-08-09 02:37:39<SeP>2024-08-10 13:51:00<SeP>2024-08-12 01:04:21<SeP>2024-08-13 12:17:42<SeP>2024-08-14 23:31:03<SeP>2024-08-16 10:44:24<SeP>2024-08-17 21:57:45<SeP>2024-08-19 09:11:06<SeP>2024-08-20 20:24:27<SeP>2024-08-22 07:37:48<SeP>2024-08-23 18:51:09<SeP>2024-08-25 06:04:30<SeP>2024-08-26 17:17:51<SeP>2024-08-28 04:31:12<SeP>2024-08-29 15:44:33<SeP>2024-08-31 02:57:54<SeP>2024-09-01 14:11:15<SeP>2024-09-03 01:24:36<SeP>2024-09-04 12:37:57<SeP>2024-09-05 23:51:18<SeP>2024-09-07 11:04:39<SeP>2024-09-08 22:18:00<SeP>2024-09-10 09:31:21<SeP>2024-09-11 20:44:42<SeP>2024-09-13 07:58:03<SeP>2024-09-14 19:11:24<SeP>2024-09-16 06:24:45<SeP>2024-09-17 17:38:06<SeP>2024-09-19 04:51:27<SeP>2024-09-20 16:04:48<SeP>2024-09-22 03:18:09<SeP>2024-09-23 14:31:30<SeP>2024-09-25 01:44:51<SeP>2024-09-26 12:58:12<SeP>2024-09-28 00:11:33<SeP>2024-09-29 11:24:54<SeP>2024-09-30 22:38:15<SeP>2024-10-02 09:51:36<SeP>2024-10-03 21:04:57<SeP>2024-10-05 08:18:18<SeP>2024-10-06 19:31:39<SeP>2024-10-08 06:45:00<SeP>2024-10-09 17:58:21<SeP>2024-10-11 05:11:42<SeP>2024-10-12 16:25:03<SeP>2024-10-14 03:38:24<SeP>2024-10-15 14:51:45<SeP>2024-10-17 02:05:06<SeP>2024-10-18 13:18:27<SeP>2024-10-20 00:31:48<SeP>2024-10-21 11:45:09<SeP>2024-10-22 22:58:30<SeP>2024-10-24 10:11:51<SeP>2024-10-25 21:25:12<SeP>2024-10-27 08:38:33<SeP>2024-10-28 19:51:54<SeP>2024-10-30 07:05:15<SeP>2024-10-31 18:18:36<SeP>2024-11-02 05:31:57<SeP>2024-11-03 15:45:18<SeP>2024-11-05 02:58:39<SeP>2024-11-06 14:12:00<SeP>2024-11-08 01:25:21<SeP>2024-11-09 12:38:42<SeP>2024-11-10 23:52:03<SeP>2024-11-12 11:05:24<SeP>2024-11-13 22:18:45<SeP>2024-11-15 09:32:06<SeP>2024-11-16 20:45:27<SeP>2024-11-18 07:58:48<SeP>2024-11-19 19:12:09<SeP>2024-11-21 06:25:30<SeP>2024-11-22 17:38:51<SeP>2024-11-24 04:52:12<SeP>2024-11-25 16:05:33<SeP>2024-11-27 03:18:54<SeP>2024-11-28 14:32:15<SeP>2024-11-30 01:45:36<SeP>2024-12-01 12:58:57<SeP>2024-12-03 00:12:18<SeP>2024-12-04 11:25:39<SeP>2024-12-05 22:39:00<SeP>2024-12-07 09:52:21<SeP>2024-12-08 21:05:42<SeP>2024-12-10 08:19:03<SeP>2024-12-11 19:32:24<SeP>2024-12-13 06:45:45<SeP>2024-12-14 17:59:06<SeP>2024-12-16 05:12:27<SeP>2024-12-17 16:25:48<SeP>2024-12-19 03:39:09<SeP>2024-12-20 14:52:30<SeP>2024-12-22 02:05:51<SeP>2024-12-23 13:19:12<SeP>2024-12-25 00:32:33<SeP>2024-12-26 11:45:54<SeP>2024-12-27 22:59:15<SeP>2024-12-29 10:12:36<SeP>2024-12-30 21:25:57<SeP>2025-01-01 08:39:18<SeP>2025-01-02 19:52:39<SeP>2025-01-04 07:06:00<SeP>2025-01-05 18:19:21<SeP>2025-01-07 05:32:42<SeP>2025-01-08 16:46:03<SeP>2025-01-10 03:59:24<SeP>2025-01-11 15:12:45<SeP>2025-01-13 02:26:06<SeP>2025-01-14 13:39:27<SeP>2025-01-16 00:52:48<SeP>2025-01-17 12:06:09<SeP>2025-01-18 23:19:30<SeP>2025-01-20 10:32:51<SeP>2025-01-21 21:46:12<SeP>2025-01-23 08:59:33<SeP>2025-01-24 20:12:54<SeP>2025-01-26 07:26:15<SeP>2025-01-27 18:39:36<SeP>2025-01-29 05:52:57<SeP>2025-01-30 17:06:18<SeP>2025-02-01 04:19:39<SeP>2025-02-02 15:33:00<SeP>2025-02-04 02:46:21<SeP>2025-02-05 13:59:42<SeP>2025-02-07 01:13:03<SeP>2025-02-08 12:26:24<SeP>2025-02-09 23:39:45<SeP>2025-02-11 10:53:06<SeP>2025-02-12 22:06:27<SeP>2025-02-14 09:19:48<SeP>2025-02-15 20:33:09<SeP>2025-02-17 07:46:30<SeP>2025-02-18 18:59:51<SeP>2025-02-20 06:13:12<SeP>2025-02-21 17:26:33<SeP>2025-02-23 04:39:54<SeP>2025-02-24 15:53:15<SeP>2025-02-26 03:06:36<SeP>2025-02-27 14:19:57<SeP>2025-03-01 01:33:18<SeP>2025-03-02 12:46:39";
  const itemLabel       = "Scans";
  const itemData        = "770<SeP>1512<SeP>1368<SeP>1453<SeP>1250<SeP>1722<SeP>951<SeP>966<SeP>1178<SeP>3404<SeP>2581<SeP>1707<SeP>3169<SeP>1118<SeP>742<SeP>943<SeP>1406<SeP>2921<SeP>1557<SeP>1368<SeP>1274<SeP>934<SeP>1033<SeP>1283<SeP>888<SeP>872<SeP>784<SeP>3752<SeP>729<SeP>1021<SeP>859<SeP>1726<SeP>899<SeP>840<SeP>3063<SeP>2256<SeP>2363<SeP>1704<SeP>1645<SeP>1295<SeP>1519<SeP>1841<SeP>1936<SeP>2009<SeP>1621<SeP>1608<SeP>1692<SeP>1717<SeP>1586<SeP>1875<SeP>1817<SeP>1790<SeP>1582<SeP>3251<SeP>1365<SeP>1669<SeP>2124<SeP>1902<SeP>2126<SeP>1899<SeP>3328<SeP>1414<SeP>1473<SeP>1517<SeP>1469<SeP>1945<SeP>1514<SeP>1217<SeP>1415<SeP>1367<SeP>2058<SeP>1464<SeP>1063<SeP>1246<SeP>1478<SeP>8137<SeP>1189<SeP>1389<SeP>1274<SeP>1726<SeP>1948<SeP>1110<SeP>6539<SeP>1718<SeP>1592<SeP>985<SeP>1189<SeP>3289<SeP>1182<SeP>990<SeP>1063<SeP>1164<SeP>1487<SeP>2539<SeP>1026<SeP>1581<SeP>3023<SeP>6329<SeP>1281<SeP>963<SeP>953<SeP>902<SeP>965<SeP>974<SeP>1029<SeP>1233<SeP>4293<SeP>1691<SeP>1377<SeP>1501<SeP>512<SeP>1413<SeP>1327<SeP>1201<SeP>873<SeP>2039<SeP>1358<SeP>1260<SeP>1034<SeP>968<SeP>1162<SeP>700<SeP>857<SeP>852<SeP>808<SeP>1112<SeP>889<SeP>928<SeP>697<SeP>881<SeP>871<SeP>799<SeP>735<SeP>857<SeP>960<SeP>840<SeP>866<SeP>832<SeP>782<SeP>776<SeP>1003<SeP>915<SeP>782<SeP>911<SeP>1033<SeP>810<SeP>1095<SeP>992<SeP>446<SeP>964<SeP>876<SeP>927<SeP>1184<SeP>1000<SeP>1118<SeP>1248<SeP>962<SeP>952<SeP>957<SeP>992<SeP>749<SeP>966<SeP>1092<SeP>901<SeP>879<SeP>897<SeP>1041<SeP>1000<SeP>1039<SeP>1011<SeP>1165<SeP>919<SeP>929<SeP>1173<SeP>2030<SeP>1295<SeP>1013<SeP>1019<SeP>1208<SeP>973<SeP>1015<SeP>773<SeP>610<SeP>984<SeP>1159<SeP>888<SeP>954<SeP>1259<SeP>1183<SeP>1153<SeP>1285<SeP>1087<SeP>1376<SeP>1117<SeP>1497<SeP>1214<SeP>1566<SeP>2099<SeP>1319<SeP>811<SeP>901<SeP>1083<SeP>1041<SeP>723<SeP>808<SeP>863<SeP>983<SeP>818<SeP>4960<SeP>3640<SeP>2003<SeP>1349<SeP>1127<SeP>875<SeP>1095<SeP>858<SeP>1025<SeP>982<SeP>1110<SeP>964<SeP>1206<SeP>2368<SeP>1004<SeP>1180<SeP>1218<SeP>1328<SeP>1066<SeP>1134<SeP>946<SeP>1123<SeP>1112<SeP>968<SeP>1120<SeP>1022<SeP>1217<SeP>859<SeP>1405<SeP>1037<SeP>1129<SeP>1079<SeP>1343<SeP>1275<SeP>1145<SeP>1638<SeP>1117<SeP>1143<SeP>1090<SeP>1688<SeP>1631<SeP>1324<SeP>2102<SeP>1556<SeP>1484<SeP>1939<SeP>1434<SeP>1206<SeP>1129<SeP>1297<SeP>1326<SeP>1470<SeP>1149<SeP>1351<SeP>1676<SeP>1665<SeP>1337<SeP>1527<SeP>1493<SeP>1211<SeP>1011<SeP>1141<SeP>1380<SeP>1082<SeP>1261<SeP>1494<SeP>1027<SeP>1527<SeP>1820<SeP>1295<SeP>1378<SeP>1627<SeP>1392<SeP>967<SeP>1014<SeP>984<SeP>1029<SeP>829<SeP>1023<SeP>1747<SeP>1169<SeP>1057<SeP>1129<SeP>960<SeP>776<SeP>1163<SeP>1330<SeP>848<SeP>923<SeP>929<SeP>1327<SeP>1575<SeP>1499<SeP>1059<SeP>1138<SeP>990<SeP>1853<SeP>1085<SeP>1082<SeP>1054<SeP>1222<SeP>1425<SeP>1008<SeP>920<SeP>1287<SeP>1035<SeP>856<SeP>892<SeP>1145<SeP>1538<SeP>1441<SeP>1636<SeP>1369<SeP>1078<SeP>1049<SeP>1083<SeP>1217<SeP>1161<SeP>1173<SeP>1003<SeP>958<SeP>1317<SeP>1450<SeP>1382<SeP>1570<SeP>1482<SeP>1254<SeP>1550<SeP>1451<SeP>1340<SeP>1468<SeP>1535<SeP>1245<SeP>1743<SeP>1254<SeP>1558<SeP>1582<SeP>1349<SeP>1453<SeP>1360<SeP>1125<SeP>1338<SeP>1403<SeP>1695<SeP>1322<SeP>1320<SeP>1231<SeP>1424<SeP>1176<SeP>1322<SeP>1416<SeP>1751<SeP>1732<SeP>1269<SeP>693<SeP>1397<SeP>1895<SeP>1202<SeP>1460<SeP>1183<SeP>1180<SeP>1298<SeP>1464<SeP>1176<SeP>1548<SeP>1522<SeP>1666<SeP>1479<SeP>1593<SeP>1510<SeP>1425<SeP>1433<SeP>1637<SeP>1534<SeP>1174<SeP>1211<SeP>1915<SeP>1739<SeP>1774<SeP>1892<SeP>1673<SeP>1585<SeP>1592<SeP>1597<SeP>1540<SeP>1523<SeP>1742<SeP>1720<SeP>1724<SeP>1430<SeP>1496<SeP>1482";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:13:21<SeP>2023-07-28 22:26:42<SeP>2023-07-30 09:40:03<SeP>2023-07-31 20:53:24<SeP>2023-08-02 08:06:45<SeP>2023-08-03 19:20:06<SeP>2023-08-05 06:33:27<SeP>2023-08-06 17:46:48<SeP>2023-08-08 05:00:09<SeP>2023-08-09 16:13:30<SeP>2023-08-11 03:26:51<SeP>2023-08-12 14:40:12<SeP>2023-08-14 01:53:33<SeP>2023-08-15 13:06:54<SeP>2023-08-17 00:20:15<SeP>2023-08-18 11:33:36<SeP>2023-08-19 22:46:57<SeP>2023-08-21 10:00:18<SeP>2023-08-22 21:13:39<SeP>2023-08-24 08:27:00<SeP>2023-08-25 19:40:21<SeP>2023-08-27 06:53:42<SeP>2023-08-28 18:07:03<SeP>2023-08-30 05:20:24<SeP>2023-08-31 16:33:45<SeP>2023-09-02 03:47:06<SeP>2023-09-03 15:00:27<SeP>2023-09-05 02:13:48<SeP>2023-09-06 13:27:09<SeP>2023-09-08 00:40:30<SeP>2023-09-09 11:53:51<SeP>2023-09-10 23:07:12<SeP>2023-09-12 10:20:33<SeP>2023-09-13 21:33:54<SeP>2023-09-15 08:47:15<SeP>2023-09-16 20:00:36<SeP>2023-09-18 07:13:57<SeP>2023-09-19 18:27:18<SeP>2023-09-21 05:40:39<SeP>2023-09-22 16:54:00<SeP>2023-09-24 04:07:21<SeP>2023-09-25 15:20:42<SeP>2023-09-27 02:34:03<SeP>2023-09-28 13:47:24<SeP>2023-09-30 01:00:45<SeP>2023-10-01 12:14:06<SeP>2023-10-02 23:27:27<SeP>2023-10-04 10:40:48<SeP>2023-10-05 21:54:09<SeP>2023-10-07 09:07:30<SeP>2023-10-08 20:20:51<SeP>2023-10-10 07:34:12<SeP>2023-10-11 18:47:33<SeP>2023-10-13 06:00:54<SeP>2023-10-14 17:14:15<SeP>2023-10-16 04:27:36<SeP>2023-10-17 15:40:57<SeP>2023-10-19 02:54:18<SeP>2023-10-20 14:07:39<SeP>2023-10-22 01:21:00<SeP>2023-10-23 12:34:21<SeP>2023-10-24 23:47:42<SeP>2023-10-26 11:01:03<SeP>2023-10-27 22:14:24<SeP>2023-10-29 09:27:45<SeP>2023-10-30 20:41:06<SeP>2023-11-01 07:54:27<SeP>2023-11-02 19:07:48<SeP>2023-11-04 06:21:09<SeP>2023-11-05 16:34:30<SeP>2023-11-07 03:47:51<SeP>2023-11-08 15:01:12<SeP>2023-11-10 02:14:33<SeP>2023-11-11 13:27:54<SeP>2023-11-13 00:41:15<SeP>2023-11-14 11:54:36<SeP>2023-11-15 23:07:57<SeP>2023-11-17 10:21:18<SeP>2023-11-18 21:34:39<SeP>2023-11-20 08:48:00<SeP>2023-11-21 20:01:21<SeP>2023-11-23 07:14:42<SeP>2023-11-24 18:28:03<SeP>2023-11-26 05:41:24<SeP>2023-11-27 16:54:45<SeP>2023-11-29 04:08:06<SeP>2023-11-30 15:21:27<SeP>2023-12-02 02:34:48<SeP>2023-12-03 13:48:09<SeP>2023-12-05 01:01:30<SeP>2023-12-06 12:14:51<SeP>2023-12-07 23:28:12<SeP>2023-12-09 10:41:33<SeP>2023-12-10 21:54:54<SeP>2023-12-12 09:08:15<SeP>2023-12-13 20:21:36<SeP>2023-12-15 07:34:57<SeP>2023-12-16 18:48:18<SeP>2023-12-18 06:01:39<SeP>2023-12-19 17:15:00<SeP>2023-12-21 04:28:21<SeP>2023-12-22 15:41:42<SeP>2023-12-24 02:55:03<SeP>2023-12-25 14:08:24<SeP>2023-12-27 01:21:45<SeP>2023-12-28 12:35:06<SeP>2023-12-29 23:48:27<SeP>2023-12-31 11:01:48<SeP>2024-01-01 22:15:09<SeP>2024-01-03 09:28:30<SeP>2024-01-04 20:41:51<SeP>2024-01-06 07:55:12<SeP>2024-01-07 19:08:33<SeP>2024-01-09 06:21:54<SeP>2024-01-10 17:35:15<SeP>2024-01-12 04:48:36<SeP>2024-01-13 16:01:57<SeP>2024-01-15 03:15:18<SeP>2024-01-16 14:28:39<SeP>2024-01-18 01:42:00<SeP>2024-01-19 12:55:21<SeP>2024-01-21 00:08:42<SeP>2024-01-22 11:22:03<SeP>2024-01-23 22:35:24<SeP>2024-01-25 09:48:45<SeP>2024-01-26 21:02:06<SeP>2024-01-28 08:15:27<SeP>2024-01-29 19:28:48<SeP>2024-01-31 06:42:09<SeP>2024-02-01 17:55:30<SeP>2024-02-03 05:08:51<SeP>2024-02-04 16:22:12<SeP>2024-02-06 03:35:33<SeP>2024-02-07 14:48:54<SeP>2024-02-09 02:02:15<SeP>2024-02-10 13:15:36<SeP>2024-02-12 00:28:57<SeP>2024-02-13 11:42:18<SeP>2024-02-14 22:55:39<SeP>2024-02-16 10:09:00<SeP>2024-02-17 21:22:21<SeP>2024-02-19 08:35:42<SeP>2024-02-20 19:49:03<SeP>2024-02-22 07:02:24<SeP>2024-02-23 18:15:45<SeP>2024-02-25 05:29:06<SeP>2024-02-26 16:42:27<SeP>2024-02-28 03:55:48<SeP>2024-02-29 15:09:09<SeP>2024-03-02 02:22:30<SeP>2024-03-03 13:35:51<SeP>2024-03-05 00:49:12<SeP>2024-03-06 12:02:33<SeP>2024-03-07 23:15:54<SeP>2024-03-09 10:29:15<SeP>2024-03-10 22:42:36<SeP>2024-03-12 09:55:57<SeP>2024-03-13 21:09:18<SeP>2024-03-15 08:22:39<SeP>2024-03-16 19:36:00<SeP>2024-03-18 06:49:21<SeP>2024-03-19 18:02:42<SeP>2024-03-21 05:16:03<SeP>2024-03-22 16:29:24<SeP>2024-03-24 03:42:45<SeP>2024-03-25 14:56:06<SeP>2024-03-27 02:09:27<SeP>2024-03-28 13:22:48<SeP>2024-03-30 00:36:09<SeP>2024-03-31 11:49:30<SeP>2024-04-01 23:02:51<SeP>2024-04-03 10:16:12<SeP>2024-04-04 21:29:33<SeP>2024-04-06 08:42:54<SeP>2024-04-07 19:56:15<SeP>2024-04-09 07:09:36<SeP>2024-04-10 18:22:57<SeP>2024-04-12 05:36:18<SeP>2024-04-13 16:49:39<SeP>2024-04-15 04:03:00<SeP>2024-04-16 15:16:21<SeP>2024-04-18 02:29:42<SeP>2024-04-19 13:43:03<SeP>2024-04-21 00:56:24<SeP>2024-04-22 12:09:45<SeP>2024-04-23 23:23:06<SeP>2024-04-25 10:36:27<SeP>2024-04-26 21:49:48<SeP>2024-04-28 09:03:09<SeP>2024-04-29 20:16:30<SeP>2024-05-01 07:29:51<SeP>2024-05-02 18:43:12<SeP>2024-05-04 05:56:33<SeP>2024-05-05 17:09:54<SeP>2024-05-07 04:23:15<SeP>2024-05-08 15:36:36<SeP>2024-05-10 02:49:57<SeP>2024-05-11 14:03:18<SeP>2024-05-13 01:16:39<SeP>2024-05-14 12:30:00<SeP>2024-05-15 23:43:21<SeP>2024-05-17 10:56:42<SeP>2024-05-18 22:10:03<SeP>2024-05-20 09:23:24<SeP>2024-05-21 20:36:45<SeP>2024-05-23 07:50:06<SeP>2024-05-24 19:03:27<SeP>2024-05-26 06:16:48<SeP>2024-05-27 17:30:09<SeP>2024-05-29 04:43:30<SeP>2024-05-30 15:56:51<SeP>2024-06-01 03:10:12<SeP>2024-06-02 14:23:33<SeP>2024-06-04 01:36:54<SeP>2024-06-05 12:50:15<SeP>2024-06-07 00:03:36<SeP>2024-06-08 11:16:57<SeP>2024-06-09 22:30:18<SeP>2024-06-11 09:43:39<SeP>2024-06-12 20:57:00<SeP>2024-06-14 08:10:21<SeP>2024-06-15 19:23:42<SeP>2024-06-17 06:37:03<SeP>2024-06-18 17:50:24<SeP>2024-06-20 05:03:45<SeP>2024-06-21 16:17:06<SeP>2024-06-23 03:30:27<SeP>2024-06-24 14:43:48<SeP>2024-06-26 01:57:09<SeP>2024-06-27 13:10:30<SeP>2024-06-29 00:23:51<SeP>2024-06-30 11:37:12<SeP>2024-07-01 22:50:33<SeP>2024-07-03 10:03:54<SeP>2024-07-04 21:17:15<SeP>2024-07-06 08:30:36<SeP>2024-07-07 19:43:57<SeP>2024-07-09 06:57:18<SeP>2024-07-10 18:10:39<SeP>2024-07-12 05:24:00<SeP>2024-07-13 16:37:21<SeP>2024-07-15 03:50:42<SeP>2024-07-16 15:04:03<SeP>2024-07-18 02:17:24<SeP>2024-07-19 13:30:45<SeP>2024-07-21 00:44:06<SeP>2024-07-22 11:57:27<SeP>2024-07-23 23:10:48<SeP>2024-07-25 10:24:09<SeP>2024-07-26 21:37:30<SeP>2024-07-28 08:50:51<SeP>2024-07-29 20:04:12<SeP>2024-07-31 07:17:33<SeP>2024-08-01 18:30:54<SeP>2024-08-03 05:44:15<SeP>2024-08-04 16:57:36<SeP>2024-08-06 04:10:57<SeP>2024-08-07 15:24:18<SeP>2024-08-09 02:37:39<SeP>2024-08-10 13:51:00<SeP>2024-08-12 01:04:21<SeP>2024-08-13 12:17:42<SeP>2024-08-14 23:31:03<SeP>2024-08-16 10:44:24<SeP>2024-08-17 21:57:45<SeP>2024-08-19 09:11:06<SeP>2024-08-20 20:24:27<SeP>2024-08-22 07:37:48<SeP>2024-08-23 18:51:09<SeP>2024-08-25 06:04:30<SeP>2024-08-26 17:17:51<SeP>2024-08-28 04:31:12<SeP>2024-08-29 15:44:33<SeP>2024-08-31 02:57:54<SeP>2024-09-01 14:11:15<SeP>2024-09-03 01:24:36<SeP>2024-09-04 12:37:57<SeP>2024-09-05 23:51:18<SeP>2024-09-07 11:04:39<SeP>2024-09-08 22:18:00<SeP>2024-09-10 09:31:21<SeP>2024-09-11 20:44:42<SeP>2024-09-13 07:58:03<SeP>2024-09-14 19:11:24<SeP>2024-09-16 06:24:45<SeP>2024-09-17 17:38:06<SeP>2024-09-19 04:51:27<SeP>2024-09-20 16:04:48<SeP>2024-09-22 03:18:09<SeP>2024-09-23 14:31:30<SeP>2024-09-25 01:44:51<SeP>2024-09-26 12:58:12<SeP>2024-09-28 00:11:33<SeP>2024-09-29 11:24:54<SeP>2024-09-30 22:38:15<SeP>2024-10-02 09:51:36<SeP>2024-10-03 21:04:57<SeP>2024-10-05 08:18:18<SeP>2024-10-06 19:31:39<SeP>2024-10-08 06:45:00<SeP>2024-10-09 17:58:21<SeP>2024-10-11 05:11:42<SeP>2024-10-12 16:25:03<SeP>2024-10-14 03:38:24<SeP>2024-10-15 14:51:45<SeP>2024-10-17 02:05:06<SeP>2024-10-18 13:18:27<SeP>2024-10-20 00:31:48<SeP>2024-10-21 11:45:09<SeP>2024-10-22 22:58:30<SeP>2024-10-24 10:11:51<SeP>2024-10-25 21:25:12<SeP>2024-10-27 08:38:33<SeP>2024-10-28 19:51:54<SeP>2024-10-30 07:05:15<SeP>2024-10-31 18:18:36<SeP>2024-11-02 05:31:57<SeP>2024-11-03 15:45:18<SeP>2024-11-05 02:58:39<SeP>2024-11-06 14:12:00<SeP>2024-11-08 01:25:21<SeP>2024-11-09 12:38:42<SeP>2024-11-10 23:52:03<SeP>2024-11-12 11:05:24<SeP>2024-11-13 22:18:45<SeP>2024-11-15 09:32:06<SeP>2024-11-16 20:45:27<SeP>2024-11-18 07:58:48<SeP>2024-11-19 19:12:09<SeP>2024-11-21 06:25:30<SeP>2024-11-22 17:38:51<SeP>2024-11-24 04:52:12<SeP>2024-11-25 16:05:33<SeP>2024-11-27 03:18:54<SeP>2024-11-28 14:32:15<SeP>2024-11-30 01:45:36<SeP>2024-12-01 12:58:57<SeP>2024-12-03 00:12:18<SeP>2024-12-04 11:25:39<SeP>2024-12-05 22:39:00<SeP>2024-12-07 09:52:21<SeP>2024-12-08 21:05:42<SeP>2024-12-10 08:19:03<SeP>2024-12-11 19:32:24<SeP>2024-12-13 06:45:45<SeP>2024-12-14 17:59:06<SeP>2024-12-16 05:12:27<SeP>2024-12-17 16:25:48<SeP>2024-12-19 03:39:09<SeP>2024-12-20 14:52:30<SeP>2024-12-22 02:05:51<SeP>2024-12-23 13:19:12<SeP>2024-12-25 00:32:33<SeP>2024-12-26 11:45:54<SeP>2024-12-27 22:59:15<SeP>2024-12-29 10:12:36<SeP>2024-12-30 21:25:57<SeP>2025-01-01 08:39:18<SeP>2025-01-02 19:52:39<SeP>2025-01-04 07:06:00<SeP>2025-01-05 18:19:21<SeP>2025-01-07 05:32:42<SeP>2025-01-08 16:46:03<SeP>2025-01-10 03:59:24<SeP>2025-01-11 15:12:45<SeP>2025-01-13 02:26:06<SeP>2025-01-14 13:39:27<SeP>2025-01-16 00:52:48<SeP>2025-01-17 12:06:09<SeP>2025-01-18 23:19:30<SeP>2025-01-20 10:32:51<SeP>2025-01-21 21:46:12<SeP>2025-01-23 08:59:33<SeP>2025-01-24 20:12:54<SeP>2025-01-26 07:26:15<SeP>2025-01-27 18:39:36<SeP>2025-01-29 05:52:57<SeP>2025-01-30 17:06:18<SeP>2025-02-01 04:19:39<SeP>2025-02-02 15:33:00<SeP>2025-02-04 02:46:21<SeP>2025-02-05 13:59:42<SeP>2025-02-07 01:13:03<SeP>2025-02-08 12:26:24<SeP>2025-02-09 23:39:45<SeP>2025-02-11 10:53:06<SeP>2025-02-12 22:06:27<SeP>2025-02-14 09:19:48<SeP>2025-02-15 20:33:09<SeP>2025-02-17 07:46:30<SeP>2025-02-18 18:59:51<SeP>2025-02-20 06:13:12<SeP>2025-02-21 17:26:33<SeP>2025-02-23 04:39:54<SeP>2025-02-24 15:53:15<SeP>2025-02-26 03:06:36<SeP>2025-02-27 14:19:57<SeP>2025-03-01 01:33:18<SeP>2025-03-02 12:46:39";
  const itemLabel       = "Attacks";
  const itemData        = "155<SeP>614<SeP>1218<SeP>826<SeP>225<SeP>230<SeP>6980<SeP>548<SeP>9497<SeP>568<SeP>398<SeP>1129<SeP>1276<SeP>257<SeP>164<SeP>449<SeP>109<SeP>762<SeP>309<SeP>6700<SeP>7081<SeP>6791<SeP>8468<SeP>4498<SeP>272<SeP>218<SeP>394<SeP>373<SeP>5707<SeP>319<SeP>169<SeP>315<SeP>490<SeP>312<SeP>6239<SeP>10075<SeP>9426<SeP>10550<SeP>7588<SeP>4956<SeP>8699<SeP>6659<SeP>9375<SeP>9139<SeP>7521<SeP>8322<SeP>8766<SeP>8429<SeP>8485<SeP>6325<SeP>5798<SeP>11655<SeP>7107<SeP>8106<SeP>7474<SeP>10054<SeP>15084<SeP>20023<SeP>8409<SeP>9195<SeP>10191<SeP>7432<SeP>8469<SeP>7645<SeP>9175<SeP>8429<SeP>6133<SeP>6701<SeP>7024<SeP>6175<SeP>3115<SeP>6758<SeP>5498<SeP>6421<SeP>6659<SeP>7395<SeP>4126<SeP>5400<SeP>7992<SeP>4695<SeP>6385<SeP>5630<SeP>4486<SeP>7635<SeP>5353<SeP>5348<SeP>5657<SeP>9368<SeP>21186<SeP>30128<SeP>13576<SeP>9719<SeP>5463<SeP>7630<SeP>12003<SeP>6805<SeP>4235<SeP>5510<SeP>5008<SeP>4622<SeP>6422<SeP>7214<SeP>7439<SeP>5817<SeP>5866<SeP>4772<SeP>7291<SeP>8683<SeP>7571<SeP>7830<SeP>3919<SeP>8225<SeP>10277<SeP>7586<SeP>2781<SeP>5298<SeP>7363<SeP>7476<SeP>5714<SeP>8550<SeP>7962<SeP>1954<SeP>2770<SeP>907<SeP>1721<SeP>3014<SeP>1275<SeP>897<SeP>1161<SeP>1144<SeP>1774<SeP>663<SeP>1291<SeP>1173<SeP>945<SeP>1049<SeP>1009<SeP>1382<SeP>1306<SeP>986<SeP>1834<SeP>2124<SeP>4221<SeP>11390<SeP>8410<SeP>7451<SeP>7577<SeP>12578<SeP>2847<SeP>8845<SeP>12288<SeP>9722<SeP>12053<SeP>9606<SeP>10663<SeP>11802<SeP>8622<SeP>13329<SeP>5839<SeP>4562<SeP>7342<SeP>23604<SeP>7546<SeP>7865<SeP>8387<SeP>13523<SeP>11929<SeP>8202<SeP>4807<SeP>7407<SeP>8766<SeP>24540<SeP>7405<SeP>9939<SeP>10351<SeP>4724<SeP>6039<SeP>6408<SeP>15961<SeP>4680<SeP>13828<SeP>7321<SeP>6265<SeP>9282<SeP>6708<SeP>3637<SeP>6401<SeP>6242<SeP>6494<SeP>7067<SeP>6664<SeP>5637<SeP>21080<SeP>6671<SeP>6028<SeP>6274<SeP>8272<SeP>11452<SeP>6833<SeP>4572<SeP>3291<SeP>6280<SeP>3294<SeP>4244<SeP>4170<SeP>640<SeP>97<SeP>644<SeP>544<SeP>651<SeP>719<SeP>366<SeP>641<SeP>1244<SeP>1245<SeP>3163<SeP>22961<SeP>539<SeP>4369<SeP>2831<SeP>2986<SeP>7201<SeP>3133<SeP>4226<SeP>2645<SeP>3814<SeP>2782<SeP>3419<SeP>4137<SeP>2544<SeP>2302<SeP>3439<SeP>1868<SeP>2067<SeP>2029<SeP>1186<SeP>1422<SeP>1386<SeP>866<SeP>1845<SeP>13074<SeP>15037<SeP>2058<SeP>4126<SeP>3654<SeP>2236<SeP>3887<SeP>1895<SeP>3214<SeP>2972<SeP>3368<SeP>2471<SeP>3126<SeP>2788<SeP>3265<SeP>6667<SeP>4901<SeP>3624<SeP>4029<SeP>2843<SeP>3073<SeP>4363<SeP>6092<SeP>7956<SeP>5343<SeP>2288<SeP>3407<SeP>2619<SeP>4818<SeP>3210<SeP>3661<SeP>2602<SeP>3877<SeP>4948<SeP>4026<SeP>5905<SeP>4112<SeP>6510<SeP>4856<SeP>5142<SeP>4969<SeP>21824<SeP>5879<SeP>10986<SeP>1787<SeP>2993<SeP>4143<SeP>3654<SeP>5299<SeP>3455<SeP>4816<SeP>4481<SeP>4830<SeP>3098<SeP>4245<SeP>1971<SeP>1427<SeP>2141<SeP>3934<SeP>2346<SeP>2848<SeP>3626<SeP>4591<SeP>3628<SeP>3451<SeP>4224<SeP>3401<SeP>3136<SeP>6153<SeP>7947<SeP>6158<SeP>4392<SeP>4880<SeP>4674<SeP>3526<SeP>4078<SeP>4149<SeP>6591<SeP>5624<SeP>4161<SeP>3498<SeP>935<SeP>1116<SeP>1943<SeP>1345<SeP>1231<SeP>1696<SeP>1554<SeP>1330<SeP>3270<SeP>4059<SeP>6434<SeP>31920<SeP>7233<SeP>5238<SeP>17739<SeP>10987<SeP>5499<SeP>6051<SeP>4729<SeP>24222<SeP>4874<SeP>5284<SeP>4550<SeP>5125<SeP>6354<SeP>29721<SeP>5047<SeP>3891<SeP>4050<SeP>3773<SeP>5936<SeP>4462<SeP>3795<SeP>2636<SeP>4566<SeP>5719<SeP>4553<SeP>18127<SeP>5429<SeP>6228<SeP>5712<SeP>1354<SeP>3940<SeP>3670<SeP>4758<SeP>3596<SeP>3582<SeP>3096<SeP>3444<SeP>3468<SeP>3511<SeP>6780<SeP>8840<SeP>10249<SeP>8306<SeP>9187<SeP>7568<SeP>6926<SeP>5132<SeP>4758<SeP>7179<SeP>22466<SeP>3317<SeP>4347<SeP>3186<SeP>11455<SeP>5262<SeP>4199<SeP>4439<SeP>4526<SeP>3335<SeP>6568<SeP>10243<SeP>6170<SeP>3831<SeP>3335<SeP>2815<SeP>2204<SeP>2366";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:13:21<SeP>2023-07-28 22:26:42<SeP>2023-07-30 09:40:03<SeP>2023-07-31 20:53:24<SeP>2023-08-02 08:06:45<SeP>2023-08-03 19:20:06<SeP>2023-08-05 06:33:27<SeP>2023-08-06 17:46:48<SeP>2023-08-08 05:00:09<SeP>2023-08-09 16:13:30<SeP>2023-08-11 03:26:51<SeP>2023-08-12 14:40:12<SeP>2023-08-14 01:53:33<SeP>2023-08-15 13:06:54<SeP>2023-08-17 00:20:15<SeP>2023-08-18 11:33:36<SeP>2023-08-19 22:46:57<SeP>2023-08-21 10:00:18<SeP>2023-08-22 21:13:39<SeP>2023-08-24 08:27:00<SeP>2023-08-25 19:40:21<SeP>2023-08-27 06:53:42<SeP>2023-08-28 18:07:03<SeP>2023-08-30 05:20:24<SeP>2023-08-31 16:33:45<SeP>2023-09-02 03:47:06<SeP>2023-09-03 15:00:27<SeP>2023-09-05 02:13:48<SeP>2023-09-06 13:27:09<SeP>2023-09-08 00:40:30<SeP>2023-09-09 11:53:51<SeP>2023-09-10 23:07:12<SeP>2023-09-12 10:20:33<SeP>2023-09-13 21:33:54<SeP>2023-09-15 08:47:15<SeP>2023-09-16 20:00:36<SeP>2023-09-18 07:13:57<SeP>2023-09-19 18:27:18<SeP>2023-09-21 05:40:39<SeP>2023-09-22 16:54:00<SeP>2023-09-24 04:07:21<SeP>2023-09-25 15:20:42<SeP>2023-09-27 02:34:03<SeP>2023-09-28 13:47:24<SeP>2023-09-30 01:00:45<SeP>2023-10-01 12:14:06<SeP>2023-10-02 23:27:27<SeP>2023-10-04 10:40:48<SeP>2023-10-05 21:54:09<SeP>2023-10-07 09:07:30<SeP>2023-10-08 20:20:51<SeP>2023-10-10 07:34:12<SeP>2023-10-11 18:47:33<SeP>2023-10-13 06:00:54<SeP>2023-10-14 17:14:15<SeP>2023-10-16 04:27:36<SeP>2023-10-17 15:40:57<SeP>2023-10-19 02:54:18<SeP>2023-10-20 14:07:39<SeP>2023-10-22 01:21:00<SeP>2023-10-23 12:34:21<SeP>2023-10-24 23:47:42<SeP>2023-10-26 11:01:03<SeP>2023-10-27 22:14:24<SeP>2023-10-29 09:27:45<SeP>2023-10-30 20:41:06<SeP>2023-11-01 07:54:27<SeP>2023-11-02 19:07:48<SeP>2023-11-04 06:21:09<SeP>2023-11-05 16:34:30<SeP>2023-11-07 03:47:51<SeP>2023-11-08 15:01:12<SeP>2023-11-10 02:14:33<SeP>2023-11-11 13:27:54<SeP>2023-11-13 00:41:15<SeP>2023-11-14 11:54:36<SeP>2023-11-15 23:07:57<SeP>2023-11-17 10:21:18<SeP>2023-11-18 21:34:39<SeP>2023-11-20 08:48:00<SeP>2023-11-21 20:01:21<SeP>2023-11-23 07:14:42<SeP>2023-11-24 18:28:03<SeP>2023-11-26 05:41:24<SeP>2023-11-27 16:54:45<SeP>2023-11-29 04:08:06<SeP>2023-11-30 15:21:27<SeP>2023-12-02 02:34:48<SeP>2023-12-03 13:48:09<SeP>2023-12-05 01:01:30<SeP>2023-12-06 12:14:51<SeP>2023-12-07 23:28:12<SeP>2023-12-09 10:41:33<SeP>2023-12-10 21:54:54<SeP>2023-12-12 09:08:15<SeP>2023-12-13 20:21:36<SeP>2023-12-15 07:34:57<SeP>2023-12-16 18:48:18<SeP>2023-12-18 06:01:39<SeP>2023-12-19 17:15:00<SeP>2023-12-21 04:28:21<SeP>2023-12-22 15:41:42<SeP>2023-12-24 02:55:03<SeP>2023-12-25 14:08:24<SeP>2023-12-27 01:21:45<SeP>2023-12-28 12:35:06<SeP>2023-12-29 23:48:27<SeP>2023-12-31 11:01:48<SeP>2024-01-01 22:15:09<SeP>2024-01-03 09:28:30<SeP>2024-01-04 20:41:51<SeP>2024-01-06 07:55:12<SeP>2024-01-07 19:08:33<SeP>2024-01-09 06:21:54<SeP>2024-01-10 17:35:15<SeP>2024-01-12 04:48:36<SeP>2024-01-13 16:01:57<SeP>2024-01-15 03:15:18<SeP>2024-01-16 14:28:39<SeP>2024-01-18 01:42:00<SeP>2024-01-19 12:55:21<SeP>2024-01-21 00:08:42<SeP>2024-01-22 11:22:03<SeP>2024-01-23 22:35:24<SeP>2024-01-25 09:48:45<SeP>2024-01-26 21:02:06<SeP>2024-01-28 08:15:27<SeP>2024-01-29 19:28:48<SeP>2024-01-31 06:42:09<SeP>2024-02-01 17:55:30<SeP>2024-02-03 05:08:51<SeP>2024-02-04 16:22:12<SeP>2024-02-06 03:35:33<SeP>2024-02-07 14:48:54<SeP>2024-02-09 02:02:15<SeP>2024-02-10 13:15:36<SeP>2024-02-12 00:28:57<SeP>2024-02-13 11:42:18<SeP>2024-02-14 22:55:39<SeP>2024-02-16 10:09:00<SeP>2024-02-17 21:22:21<SeP>2024-02-19 08:35:42<SeP>2024-02-20 19:49:03<SeP>2024-02-22 07:02:24<SeP>2024-02-23 18:15:45<SeP>2024-02-25 05:29:06<SeP>2024-02-26 16:42:27<SeP>2024-02-28 03:55:48<SeP>2024-02-29 15:09:09<SeP>2024-03-02 02:22:30<SeP>2024-03-03 13:35:51<SeP>2024-03-05 00:49:12<SeP>2024-03-06 12:02:33<SeP>2024-03-07 23:15:54<SeP>2024-03-09 10:29:15<SeP>2024-03-10 22:42:36<SeP>2024-03-12 09:55:57<SeP>2024-03-13 21:09:18<SeP>2024-03-15 08:22:39<SeP>2024-03-16 19:36:00<SeP>2024-03-18 06:49:21<SeP>2024-03-19 18:02:42<SeP>2024-03-21 05:16:03<SeP>2024-03-22 16:29:24<SeP>2024-03-24 03:42:45<SeP>2024-03-25 14:56:06<SeP>2024-03-27 02:09:27<SeP>2024-03-28 13:22:48<SeP>2024-03-30 00:36:09<SeP>2024-03-31 11:49:30<SeP>2024-04-01 23:02:51<SeP>2024-04-03 10:16:12<SeP>2024-04-04 21:29:33<SeP>2024-04-06 08:42:54<SeP>2024-04-07 19:56:15<SeP>2024-04-09 07:09:36<SeP>2024-04-10 18:22:57<SeP>2024-04-12 05:36:18<SeP>2024-04-13 16:49:39<SeP>2024-04-15 04:03:00<SeP>2024-04-16 15:16:21<SeP>2024-04-18 02:29:42<SeP>2024-04-19 13:43:03<SeP>2024-04-21 00:56:24<SeP>2024-04-22 12:09:45<SeP>2024-04-23 23:23:06<SeP>2024-04-25 10:36:27<SeP>2024-04-26 21:49:48<SeP>2024-04-28 09:03:09<SeP>2024-04-29 20:16:30<SeP>2024-05-01 07:29:51<SeP>2024-05-02 18:43:12<SeP>2024-05-04 05:56:33<SeP>2024-05-05 17:09:54<SeP>2024-05-07 04:23:15<SeP>2024-05-08 15:36:36<SeP>2024-05-10 02:49:57<SeP>2024-05-11 14:03:18<SeP>2024-05-13 01:16:39<SeP>2024-05-14 12:30:00<SeP>2024-05-15 23:43:21<SeP>2024-05-17 10:56:42<SeP>2024-05-18 22:10:03<SeP>2024-05-20 09:23:24<SeP>2024-05-21 20:36:45<SeP>2024-05-23 07:50:06<SeP>2024-05-24 19:03:27<SeP>2024-05-26 06:16:48<SeP>2024-05-27 17:30:09<SeP>2024-05-29 04:43:30<SeP>2024-05-30 15:56:51<SeP>2024-06-01 03:10:12<SeP>2024-06-02 14:23:33<SeP>2024-06-04 01:36:54<SeP>2024-06-05 12:50:15<SeP>2024-06-07 00:03:36<SeP>2024-06-08 11:16:57<SeP>2024-06-09 22:30:18<SeP>2024-06-11 09:43:39<SeP>2024-06-12 20:57:00<SeP>2024-06-14 08:10:21<SeP>2024-06-15 19:23:42<SeP>2024-06-17 06:37:03<SeP>2024-06-18 17:50:24<SeP>2024-06-20 05:03:45<SeP>2024-06-21 16:17:06<SeP>2024-06-23 03:30:27<SeP>2024-06-24 14:43:48<SeP>2024-06-26 01:57:09<SeP>2024-06-27 13:10:30<SeP>2024-06-29 00:23:51<SeP>2024-06-30 11:37:12<SeP>2024-07-01 22:50:33<SeP>2024-07-03 10:03:54<SeP>2024-07-04 21:17:15<SeP>2024-07-06 08:30:36<SeP>2024-07-07 19:43:57<SeP>2024-07-09 06:57:18<SeP>2024-07-10 18:10:39<SeP>2024-07-12 05:24:00<SeP>2024-07-13 16:37:21<SeP>2024-07-15 03:50:42<SeP>2024-07-16 15:04:03<SeP>2024-07-18 02:17:24<SeP>2024-07-19 13:30:45<SeP>2024-07-21 00:44:06<SeP>2024-07-22 11:57:27<SeP>2024-07-23 23:10:48<SeP>2024-07-25 10:24:09<SeP>2024-07-26 21:37:30<SeP>2024-07-28 08:50:51<SeP>2024-07-29 20:04:12<SeP>2024-07-31 07:17:33<SeP>2024-08-01 18:30:54<SeP>2024-08-03 05:44:15<SeP>2024-08-04 16:57:36<SeP>2024-08-06 04:10:57<SeP>2024-08-07 15:24:18<SeP>2024-08-09 02:37:39<SeP>2024-08-10 13:51:00<SeP>2024-08-12 01:04:21<SeP>2024-08-13 12:17:42<SeP>2024-08-14 23:31:03<SeP>2024-08-16 10:44:24<SeP>2024-08-17 21:57:45<SeP>2024-08-19 09:11:06<SeP>2024-08-20 20:24:27<SeP>2024-08-22 07:37:48<SeP>2024-08-23 18:51:09<SeP>2024-08-25 06:04:30<SeP>2024-08-26 17:17:51<SeP>2024-08-28 04:31:12<SeP>2024-08-29 15:44:33<SeP>2024-08-31 02:57:54<SeP>2024-09-01 14:11:15<SeP>2024-09-03 01:24:36<SeP>2024-09-04 12:37:57<SeP>2024-09-05 23:51:18<SeP>2024-09-07 11:04:39<SeP>2024-09-08 22:18:00<SeP>2024-09-10 09:31:21<SeP>2024-09-11 20:44:42<SeP>2024-09-13 07:58:03<SeP>2024-09-14 19:11:24<SeP>2024-09-16 06:24:45<SeP>2024-09-17 17:38:06<SeP>2024-09-19 04:51:27<SeP>2024-09-20 16:04:48<SeP>2024-09-22 03:18:09<SeP>2024-09-23 14:31:30<SeP>2024-09-25 01:44:51<SeP>2024-09-26 12:58:12<SeP>2024-09-28 00:11:33<SeP>2024-09-29 11:24:54<SeP>2024-09-30 22:38:15<SeP>2024-10-02 09:51:36<SeP>2024-10-03 21:04:57<SeP>2024-10-05 08:18:18<SeP>2024-10-06 19:31:39<SeP>2024-10-08 06:45:00<SeP>2024-10-09 17:58:21<SeP>2024-10-11 05:11:42<SeP>2024-10-12 16:25:03<SeP>2024-10-14 03:38:24<SeP>2024-10-15 14:51:45<SeP>2024-10-17 02:05:06<SeP>2024-10-18 13:18:27<SeP>2024-10-20 00:31:48<SeP>2024-10-21 11:45:09<SeP>2024-10-22 22:58:30<SeP>2024-10-24 10:11:51<SeP>2024-10-25 21:25:12<SeP>2024-10-27 08:38:33<SeP>2024-10-28 19:51:54<SeP>2024-10-30 07:05:15<SeP>2024-10-31 18:18:36<SeP>2024-11-02 05:31:57<SeP>2024-11-03 15:45:18<SeP>2024-11-05 02:58:39<SeP>2024-11-06 14:12:00<SeP>2024-11-08 01:25:21<SeP>2024-11-09 12:38:42<SeP>2024-11-10 23:52:03<SeP>2024-11-12 11:05:24<SeP>2024-11-13 22:18:45<SeP>2024-11-15 09:32:06<SeP>2024-11-16 20:45:27<SeP>2024-11-18 07:58:48<SeP>2024-11-19 19:12:09<SeP>2024-11-21 06:25:30<SeP>2024-11-22 17:38:51<SeP>2024-11-24 04:52:12<SeP>2024-11-25 16:05:33<SeP>2024-11-27 03:18:54<SeP>2024-11-28 14:32:15<SeP>2024-11-30 01:45:36<SeP>2024-12-01 12:58:57<SeP>2024-12-03 00:12:18<SeP>2024-12-04 11:25:39<SeP>2024-12-05 22:39:00<SeP>2024-12-07 09:52:21<SeP>2024-12-08 21:05:42<SeP>2024-12-10 08:19:03<SeP>2024-12-11 19:32:24<SeP>2024-12-13 06:45:45<SeP>2024-12-14 17:59:06<SeP>2024-12-16 05:12:27<SeP>2024-12-17 16:25:48<SeP>2024-12-19 03:39:09<SeP>2024-12-20 14:52:30<SeP>2024-12-22 02:05:51<SeP>2024-12-23 13:19:12<SeP>2024-12-25 00:32:33<SeP>2024-12-26 11:45:54<SeP>2024-12-27 22:59:15<SeP>2024-12-29 10:12:36<SeP>2024-12-30 21:25:57<SeP>2025-01-01 08:39:18<SeP>2025-01-02 19:52:39<SeP>2025-01-04 07:06:00<SeP>2025-01-05 18:19:21<SeP>2025-01-07 05:32:42<SeP>2025-01-08 16:46:03<SeP>2025-01-10 03:59:24<SeP>2025-01-11 15:12:45<SeP>2025-01-13 02:26:06<SeP>2025-01-14 13:39:27<SeP>2025-01-16 00:52:48<SeP>2025-01-17 12:06:09<SeP>2025-01-18 23:19:30<SeP>2025-01-20 10:32:51<SeP>2025-01-21 21:46:12<SeP>2025-01-23 08:59:33<SeP>2025-01-24 20:12:54<SeP>2025-01-26 07:26:15<SeP>2025-01-27 18:39:36<SeP>2025-01-29 05:52:57<SeP>2025-01-30 17:06:18<SeP>2025-02-01 04:19:39<SeP>2025-02-02 15:33:00<SeP>2025-02-04 02:46:21<SeP>2025-02-05 13:59:42<SeP>2025-02-07 01:13:03<SeP>2025-02-08 12:26:24<SeP>2025-02-09 23:39:45<SeP>2025-02-11 10:53:06<SeP>2025-02-12 22:06:27<SeP>2025-02-14 09:19:48<SeP>2025-02-15 20:33:09<SeP>2025-02-17 07:46:30<SeP>2025-02-18 18:59:51<SeP>2025-02-20 06:13:12<SeP>2025-02-21 17:26:33<SeP>2025-02-23 04:39:54<SeP>2025-02-24 15:53:15<SeP>2025-02-26 03:06:36<SeP>2025-02-27 14:19:57<SeP>2025-03-01 01:33:18<SeP>2025-03-02 12:46:39";
  const item1Label       = "Escaneos";
  const item1Data        = "770<SeP>1512<SeP>1368<SeP>1453<SeP>1250<SeP>1722<SeP>951<SeP>966<SeP>1178<SeP>3404<SeP>2581<SeP>1707<SeP>3169<SeP>1118<SeP>742<SeP>943<SeP>1406<SeP>2921<SeP>1557<SeP>1368<SeP>1274<SeP>934<SeP>1033<SeP>1283<SeP>888<SeP>872<SeP>784<SeP>3752<SeP>729<SeP>1021<SeP>859<SeP>1726<SeP>899<SeP>840<SeP>3063<SeP>2256<SeP>2363<SeP>1704<SeP>1645<SeP>1295<SeP>1519<SeP>1841<SeP>1936<SeP>2009<SeP>1621<SeP>1608<SeP>1692<SeP>1717<SeP>1586<SeP>1875<SeP>1817<SeP>1790<SeP>1582<SeP>3251<SeP>1365<SeP>1669<SeP>2124<SeP>1902<SeP>2126<SeP>1899<SeP>3328<SeP>1414<SeP>1473<SeP>1517<SeP>1469<SeP>1945<SeP>1514<SeP>1217<SeP>1415<SeP>1367<SeP>2058<SeP>1464<SeP>1063<SeP>1246<SeP>1478<SeP>8137<SeP>1189<SeP>1389<SeP>1274<SeP>1726<SeP>1948<SeP>1110<SeP>6539<SeP>1718<SeP>1592<SeP>985<SeP>1189<SeP>3289<SeP>1182<SeP>990<SeP>1063<SeP>1164<SeP>1487<SeP>2539<SeP>1026<SeP>1581<SeP>3023<SeP>6329<SeP>1281<SeP>963<SeP>953<SeP>902<SeP>965<SeP>974<SeP>1029<SeP>1233<SeP>4293<SeP>1691<SeP>1377<SeP>1501<SeP>512<SeP>1413<SeP>1327<SeP>1201<SeP>873<SeP>2039<SeP>1358<SeP>1260<SeP>1034<SeP>968<SeP>1162<SeP>700<SeP>857<SeP>852<SeP>808<SeP>1112<SeP>889<SeP>928<SeP>697<SeP>881<SeP>871<SeP>799<SeP>735<SeP>857<SeP>960<SeP>840<SeP>866<SeP>832<SeP>782<SeP>776<SeP>1003<SeP>915<SeP>782<SeP>911<SeP>1033<SeP>810<SeP>1095<SeP>992<SeP>446<SeP>964<SeP>876<SeP>927<SeP>1184<SeP>1000<SeP>1118<SeP>1248<SeP>962<SeP>952<SeP>957<SeP>992<SeP>749<SeP>966<SeP>1092<SeP>901<SeP>879<SeP>897<SeP>1041<SeP>1000<SeP>1039<SeP>1011<SeP>1165<SeP>919<SeP>929<SeP>1173<SeP>2030<SeP>1295<SeP>1013<SeP>1019<SeP>1208<SeP>973<SeP>1015<SeP>773<SeP>610<SeP>984<SeP>1159<SeP>888<SeP>954<SeP>1259<SeP>1183<SeP>1153<SeP>1285<SeP>1087<SeP>1376<SeP>1117<SeP>1497<SeP>1214<SeP>1566<SeP>2099<SeP>1319<SeP>811<SeP>901<SeP>1083<SeP>1041<SeP>723<SeP>808<SeP>863<SeP>983<SeP>818<SeP>4960<SeP>3640<SeP>2003<SeP>1349<SeP>1127<SeP>875<SeP>1095<SeP>858<SeP>1025<SeP>982<SeP>1110<SeP>964<SeP>1206<SeP>2368<SeP>1004<SeP>1180<SeP>1218<SeP>1328<SeP>1066<SeP>1134<SeP>946<SeP>1123<SeP>1112<SeP>968<SeP>1120<SeP>1022<SeP>1217<SeP>859<SeP>1405<SeP>1037<SeP>1129<SeP>1079<SeP>1343<SeP>1275<SeP>1145<SeP>1638<SeP>1117<SeP>1143<SeP>1090<SeP>1688<SeP>1631<SeP>1324<SeP>2102<SeP>1556<SeP>1484<SeP>1939<SeP>1434<SeP>1206<SeP>1129<SeP>1297<SeP>1326<SeP>1470<SeP>1149<SeP>1351<SeP>1676<SeP>1665<SeP>1337<SeP>1527<SeP>1493<SeP>1211<SeP>1011<SeP>1141<SeP>1380<SeP>1082<SeP>1261<SeP>1494<SeP>1027<SeP>1527<SeP>1820<SeP>1295<SeP>1378<SeP>1627<SeP>1392<SeP>967<SeP>1014<SeP>984<SeP>1029<SeP>829<SeP>1023<SeP>1747<SeP>1169<SeP>1057<SeP>1129<SeP>960<SeP>776<SeP>1163<SeP>1330<SeP>848<SeP>923<SeP>929<SeP>1327<SeP>1575<SeP>1499<SeP>1059<SeP>1138<SeP>990<SeP>1853<SeP>1085<SeP>1082<SeP>1054<SeP>1222<SeP>1425<SeP>1008<SeP>920<SeP>1287<SeP>1035<SeP>856<SeP>892<SeP>1145<SeP>1538<SeP>1441<SeP>1636<SeP>1369<SeP>1078<SeP>1049<SeP>1083<SeP>1217<SeP>1161<SeP>1173<SeP>1003<SeP>958<SeP>1317<SeP>1450<SeP>1382<SeP>1570<SeP>1482<SeP>1254<SeP>1550<SeP>1451<SeP>1340<SeP>1468<SeP>1535<SeP>1245<SeP>1743<SeP>1254<SeP>1558<SeP>1582<SeP>1349<SeP>1453<SeP>1360<SeP>1125<SeP>1338<SeP>1403<SeP>1695<SeP>1322<SeP>1320<SeP>1231<SeP>1424<SeP>1176<SeP>1322<SeP>1416<SeP>1751<SeP>1732<SeP>1269<SeP>693<SeP>1397<SeP>1895<SeP>1202<SeP>1460<SeP>1183<SeP>1180<SeP>1298<SeP>1464<SeP>1176<SeP>1548<SeP>1522<SeP>1666<SeP>1479<SeP>1593<SeP>1510<SeP>1425<SeP>1433<SeP>1637<SeP>1534<SeP>1174<SeP>1211<SeP>1915<SeP>1739<SeP>1774<SeP>1892<SeP>1673<SeP>1585<SeP>1592<SeP>1597<SeP>1540<SeP>1523<SeP>1742<SeP>1720<SeP>1724<SeP>1430<SeP>1496<SeP>1482";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "155<SeP>614<SeP>1218<SeP>826<SeP>225<SeP>230<SeP>6980<SeP>548<SeP>9497<SeP>568<SeP>398<SeP>1129<SeP>1276<SeP>257<SeP>164<SeP>449<SeP>109<SeP>762<SeP>309<SeP>6700<SeP>7081<SeP>6791<SeP>8468<SeP>4498<SeP>272<SeP>218<SeP>394<SeP>373<SeP>5707<SeP>319<SeP>169<SeP>315<SeP>490<SeP>312<SeP>6239<SeP>10075<SeP>9426<SeP>10550<SeP>7588<SeP>4956<SeP>8699<SeP>6659<SeP>9375<SeP>9139<SeP>7521<SeP>8322<SeP>8766<SeP>8429<SeP>8485<SeP>6325<SeP>5798<SeP>11655<SeP>7107<SeP>8106<SeP>7474<SeP>10054<SeP>15084<SeP>20023<SeP>8409<SeP>9195<SeP>10191<SeP>7432<SeP>8469<SeP>7645<SeP>9175<SeP>8429<SeP>6133<SeP>6701<SeP>7024<SeP>6175<SeP>3115<SeP>6758<SeP>5498<SeP>6421<SeP>6659<SeP>7395<SeP>4126<SeP>5400<SeP>7992<SeP>4695<SeP>6385<SeP>5630<SeP>4486<SeP>7635<SeP>5353<SeP>5348<SeP>5657<SeP>9368<SeP>21186<SeP>30128<SeP>13576<SeP>9719<SeP>5463<SeP>7630<SeP>12003<SeP>6805<SeP>4235<SeP>5510<SeP>5008<SeP>4622<SeP>6422<SeP>7214<SeP>7439<SeP>5817<SeP>5866<SeP>4772<SeP>7291<SeP>8683<SeP>7571<SeP>7830<SeP>3919<SeP>8225<SeP>10277<SeP>7586<SeP>2781<SeP>5298<SeP>7363<SeP>7476<SeP>5714<SeP>8550<SeP>7962<SeP>1954<SeP>2770<SeP>907<SeP>1721<SeP>3014<SeP>1275<SeP>897<SeP>1161<SeP>1144<SeP>1774<SeP>663<SeP>1291<SeP>1173<SeP>945<SeP>1049<SeP>1009<SeP>1382<SeP>1306<SeP>986<SeP>1834<SeP>2124<SeP>4221<SeP>11390<SeP>8410<SeP>7451<SeP>7577<SeP>12578<SeP>2847<SeP>8845<SeP>12288<SeP>9722<SeP>12053<SeP>9606<SeP>10663<SeP>11802<SeP>8622<SeP>13329<SeP>5839<SeP>4562<SeP>7342<SeP>23604<SeP>7546<SeP>7865<SeP>8387<SeP>13523<SeP>11929<SeP>8202<SeP>4807<SeP>7407<SeP>8766<SeP>24540<SeP>7405<SeP>9939<SeP>10351<SeP>4724<SeP>6039<SeP>6408<SeP>15961<SeP>4680<SeP>13828<SeP>7321<SeP>6265<SeP>9282<SeP>6708<SeP>3637<SeP>6401<SeP>6242<SeP>6494<SeP>7067<SeP>6664<SeP>5637<SeP>21080<SeP>6671<SeP>6028<SeP>6274<SeP>8272<SeP>11452<SeP>6833<SeP>4572<SeP>3291<SeP>6280<SeP>3294<SeP>4244<SeP>4170<SeP>640<SeP>97<SeP>644<SeP>544<SeP>651<SeP>719<SeP>366<SeP>641<SeP>1244<SeP>1245<SeP>3163<SeP>22961<SeP>539<SeP>4369<SeP>2831<SeP>2986<SeP>7201<SeP>3133<SeP>4226<SeP>2645<SeP>3814<SeP>2782<SeP>3419<SeP>4137<SeP>2544<SeP>2302<SeP>3439<SeP>1868<SeP>2067<SeP>2029<SeP>1186<SeP>1422<SeP>1386<SeP>866<SeP>1845<SeP>13074<SeP>15037<SeP>2058<SeP>4126<SeP>3654<SeP>2236<SeP>3887<SeP>1895<SeP>3214<SeP>2972<SeP>3368<SeP>2471<SeP>3126<SeP>2788<SeP>3265<SeP>6667<SeP>4901<SeP>3624<SeP>4029<SeP>2843<SeP>3073<SeP>4363<SeP>6092<SeP>7956<SeP>5343<SeP>2288<SeP>3407<SeP>2619<SeP>4818<SeP>3210<SeP>3661<SeP>2602<SeP>3877<SeP>4948<SeP>4026<SeP>5905<SeP>4112<SeP>6510<SeP>4856<SeP>5142<SeP>4969<SeP>21824<SeP>5879<SeP>10986<SeP>1787<SeP>2993<SeP>4143<SeP>3654<SeP>5299<SeP>3455<SeP>4816<SeP>4481<SeP>4830<SeP>3098<SeP>4245<SeP>1971<SeP>1427<SeP>2141<SeP>3934<SeP>2346<SeP>2848<SeP>3626<SeP>4591<SeP>3628<SeP>3451<SeP>4224<SeP>3401<SeP>3136<SeP>6153<SeP>7947<SeP>6158<SeP>4392<SeP>4880<SeP>4674<SeP>3526<SeP>4078<SeP>4149<SeP>6591<SeP>5624<SeP>4161<SeP>3498<SeP>935<SeP>1116<SeP>1943<SeP>1345<SeP>1231<SeP>1696<SeP>1554<SeP>1330<SeP>3270<SeP>4059<SeP>6434<SeP>31920<SeP>7233<SeP>5238<SeP>17739<SeP>10987<SeP>5499<SeP>6051<SeP>4729<SeP>24222<SeP>4874<SeP>5284<SeP>4550<SeP>5125<SeP>6354<SeP>29721<SeP>5047<SeP>3891<SeP>4050<SeP>3773<SeP>5936<SeP>4462<SeP>3795<SeP>2636<SeP>4566<SeP>5719<SeP>4553<SeP>18127<SeP>5429<SeP>6228<SeP>5712<SeP>1354<SeP>3940<SeP>3670<SeP>4758<SeP>3596<SeP>3582<SeP>3096<SeP>3444<SeP>3468<SeP>3511<SeP>6780<SeP>8840<SeP>10249<SeP>8306<SeP>9187<SeP>7568<SeP>6926<SeP>5132<SeP>4758<SeP>7179<SeP>22466<SeP>3317<SeP>4347<SeP>3186<SeP>11455<SeP>5262<SeP>4199<SeP>4439<SeP>4526<SeP>3335<SeP>6568<SeP>10243<SeP>6170<SeP>3831<SeP>3335<SeP>2815<SeP>2204<SeP>2366";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:13:21<SeP>2023-07-28 22:26:42<SeP>2023-07-30 09:40:03<SeP>2023-07-31 20:53:24<SeP>2023-08-02 08:06:45<SeP>2023-08-03 19:20:06<SeP>2023-08-05 06:33:27<SeP>2023-08-06 17:46:48<SeP>2023-08-08 05:00:09<SeP>2023-08-09 16:13:30<SeP>2023-08-11 03:26:51<SeP>2023-08-12 14:40:12<SeP>2023-08-14 01:53:33<SeP>2023-08-15 13:06:54<SeP>2023-08-17 00:20:15<SeP>2023-08-18 11:33:36<SeP>2023-08-19 22:46:57<SeP>2023-08-21 10:00:18<SeP>2023-08-22 21:13:39<SeP>2023-08-24 08:27:00<SeP>2023-08-25 19:40:21<SeP>2023-08-27 06:53:42<SeP>2023-08-28 18:07:03<SeP>2023-08-30 05:20:24<SeP>2023-08-31 16:33:45<SeP>2023-09-02 03:47:06<SeP>2023-09-03 15:00:27<SeP>2023-09-05 02:13:48<SeP>2023-09-06 13:27:09<SeP>2023-09-08 00:40:30<SeP>2023-09-09 11:53:51<SeP>2023-09-10 23:07:12<SeP>2023-09-12 10:20:33<SeP>2023-09-13 21:33:54<SeP>2023-09-15 08:47:15<SeP>2023-09-16 20:00:36<SeP>2023-09-18 07:13:57<SeP>2023-09-19 18:27:18<SeP>2023-09-21 05:40:39<SeP>2023-09-22 16:54:00<SeP>2023-09-24 04:07:21<SeP>2023-09-25 15:20:42<SeP>2023-09-27 02:34:03<SeP>2023-09-28 13:47:24<SeP>2023-09-30 01:00:45<SeP>2023-10-01 12:14:06<SeP>2023-10-02 23:27:27<SeP>2023-10-04 10:40:48<SeP>2023-10-05 21:54:09<SeP>2023-10-07 09:07:30<SeP>2023-10-08 20:20:51<SeP>2023-10-10 07:34:12<SeP>2023-10-11 18:47:33<SeP>2023-10-13 06:00:54<SeP>2023-10-14 17:14:15<SeP>2023-10-16 04:27:36<SeP>2023-10-17 15:40:57<SeP>2023-10-19 02:54:18<SeP>2023-10-20 14:07:39<SeP>2023-10-22 01:21:00<SeP>2023-10-23 12:34:21<SeP>2023-10-24 23:47:42<SeP>2023-10-26 11:01:03<SeP>2023-10-27 22:14:24<SeP>2023-10-29 09:27:45<SeP>2023-10-30 20:41:06<SeP>2023-11-01 07:54:27<SeP>2023-11-02 19:07:48<SeP>2023-11-04 06:21:09<SeP>2023-11-05 16:34:30<SeP>2023-11-07 03:47:51<SeP>2023-11-08 15:01:12<SeP>2023-11-10 02:14:33<SeP>2023-11-11 13:27:54<SeP>2023-11-13 00:41:15<SeP>2023-11-14 11:54:36<SeP>2023-11-15 23:07:57<SeP>2023-11-17 10:21:18<SeP>2023-11-18 21:34:39<SeP>2023-11-20 08:48:00<SeP>2023-11-21 20:01:21<SeP>2023-11-23 07:14:42<SeP>2023-11-24 18:28:03<SeP>2023-11-26 05:41:24<SeP>2023-11-27 16:54:45<SeP>2023-11-29 04:08:06<SeP>2023-11-30 15:21:27<SeP>2023-12-02 02:34:48<SeP>2023-12-03 13:48:09<SeP>2023-12-05 01:01:30<SeP>2023-12-06 12:14:51<SeP>2023-12-07 23:28:12<SeP>2023-12-09 10:41:33<SeP>2023-12-10 21:54:54<SeP>2023-12-12 09:08:15<SeP>2023-12-13 20:21:36<SeP>2023-12-15 07:34:57<SeP>2023-12-16 18:48:18<SeP>2023-12-18 06:01:39<SeP>2023-12-19 17:15:00<SeP>2023-12-21 04:28:21<SeP>2023-12-22 15:41:42<SeP>2023-12-24 02:55:03<SeP>2023-12-25 14:08:24<SeP>2023-12-27 01:21:45<SeP>2023-12-28 12:35:06<SeP>2023-12-29 23:48:27<SeP>2023-12-31 11:01:48<SeP>2024-01-01 22:15:09<SeP>2024-01-03 09:28:30<SeP>2024-01-04 20:41:51<SeP>2024-01-06 07:55:12<SeP>2024-01-07 19:08:33<SeP>2024-01-09 06:21:54<SeP>2024-01-10 17:35:15<SeP>2024-01-12 04:48:36<SeP>2024-01-13 16:01:57<SeP>2024-01-15 03:15:18<SeP>2024-01-16 14:28:39<SeP>2024-01-18 01:42:00<SeP>2024-01-19 12:55:21<SeP>2024-01-21 00:08:42<SeP>2024-01-22 11:22:03<SeP>2024-01-23 22:35:24<SeP>2024-01-25 09:48:45<SeP>2024-01-26 21:02:06<SeP>2024-01-28 08:15:27<SeP>2024-01-29 19:28:48<SeP>2024-01-31 06:42:09<SeP>2024-02-01 17:55:30<SeP>2024-02-03 05:08:51<SeP>2024-02-04 16:22:12<SeP>2024-02-06 03:35:33<SeP>2024-02-07 14:48:54<SeP>2024-02-09 02:02:15<SeP>2024-02-10 13:15:36<SeP>2024-02-12 00:28:57<SeP>2024-02-13 11:42:18<SeP>2024-02-14 22:55:39<SeP>2024-02-16 10:09:00<SeP>2024-02-17 21:22:21<SeP>2024-02-19 08:35:42<SeP>2024-02-20 19:49:03<SeP>2024-02-22 07:02:24<SeP>2024-02-23 18:15:45<SeP>2024-02-25 05:29:06<SeP>2024-02-26 16:42:27<SeP>2024-02-28 03:55:48<SeP>2024-02-29 15:09:09<SeP>2024-03-02 02:22:30<SeP>2024-03-03 13:35:51<SeP>2024-03-05 00:49:12<SeP>2024-03-06 12:02:33<SeP>2024-03-07 23:15:54<SeP>2024-03-09 10:29:15<SeP>2024-03-10 22:42:36<SeP>2024-03-12 09:55:57<SeP>2024-03-13 21:09:18<SeP>2024-03-15 08:22:39<SeP>2024-03-16 19:36:00<SeP>2024-03-18 06:49:21<SeP>2024-03-19 18:02:42<SeP>2024-03-21 05:16:03<SeP>2024-03-22 16:29:24<SeP>2024-03-24 03:42:45<SeP>2024-03-25 14:56:06<SeP>2024-03-27 02:09:27<SeP>2024-03-28 13:22:48<SeP>2024-03-30 00:36:09<SeP>2024-03-31 11:49:30<SeP>2024-04-01 23:02:51<SeP>2024-04-03 10:16:12<SeP>2024-04-04 21:29:33<SeP>2024-04-06 08:42:54<SeP>2024-04-07 19:56:15<SeP>2024-04-09 07:09:36<SeP>2024-04-10 18:22:57<SeP>2024-04-12 05:36:18<SeP>2024-04-13 16:49:39<SeP>2024-04-15 04:03:00<SeP>2024-04-16 15:16:21<SeP>2024-04-18 02:29:42<SeP>2024-04-19 13:43:03<SeP>2024-04-21 00:56:24<SeP>2024-04-22 12:09:45<SeP>2024-04-23 23:23:06<SeP>2024-04-25 10:36:27<SeP>2024-04-26 21:49:48<SeP>2024-04-28 09:03:09<SeP>2024-04-29 20:16:30<SeP>2024-05-01 07:29:51<SeP>2024-05-02 18:43:12<SeP>2024-05-04 05:56:33<SeP>2024-05-05 17:09:54<SeP>2024-05-07 04:23:15<SeP>2024-05-08 15:36:36<SeP>2024-05-10 02:49:57<SeP>2024-05-11 14:03:18<SeP>2024-05-13 01:16:39<SeP>2024-05-14 12:30:00<SeP>2024-05-15 23:43:21<SeP>2024-05-17 10:56:42<SeP>2024-05-18 22:10:03<SeP>2024-05-20 09:23:24<SeP>2024-05-21 20:36:45<SeP>2024-05-23 07:50:06<SeP>2024-05-24 19:03:27<SeP>2024-05-26 06:16:48<SeP>2024-05-27 17:30:09<SeP>2024-05-29 04:43:30<SeP>2024-05-30 15:56:51<SeP>2024-06-01 03:10:12<SeP>2024-06-02 14:23:33<SeP>2024-06-04 01:36:54<SeP>2024-06-05 12:50:15<SeP>2024-06-07 00:03:36<SeP>2024-06-08 11:16:57<SeP>2024-06-09 22:30:18<SeP>2024-06-11 09:43:39<SeP>2024-06-12 20:57:00<SeP>2024-06-14 08:10:21<SeP>2024-06-15 19:23:42<SeP>2024-06-17 06:37:03<SeP>2024-06-18 17:50:24<SeP>2024-06-20 05:03:45<SeP>2024-06-21 16:17:06<SeP>2024-06-23 03:30:27<SeP>2024-06-24 14:43:48<SeP>2024-06-26 01:57:09<SeP>2024-06-27 13:10:30<SeP>2024-06-29 00:23:51<SeP>2024-06-30 11:37:12<SeP>2024-07-01 22:50:33<SeP>2024-07-03 10:03:54<SeP>2024-07-04 21:17:15<SeP>2024-07-06 08:30:36<SeP>2024-07-07 19:43:57<SeP>2024-07-09 06:57:18<SeP>2024-07-10 18:10:39<SeP>2024-07-12 05:24:00<SeP>2024-07-13 16:37:21<SeP>2024-07-15 03:50:42<SeP>2024-07-16 15:04:03<SeP>2024-07-18 02:17:24<SeP>2024-07-19 13:30:45<SeP>2024-07-21 00:44:06<SeP>2024-07-22 11:57:27<SeP>2024-07-23 23:10:48<SeP>2024-07-25 10:24:09<SeP>2024-07-26 21:37:30<SeP>2024-07-28 08:50:51<SeP>2024-07-29 20:04:12<SeP>2024-07-31 07:17:33<SeP>2024-08-01 18:30:54<SeP>2024-08-03 05:44:15<SeP>2024-08-04 16:57:36<SeP>2024-08-06 04:10:57<SeP>2024-08-07 15:24:18<SeP>2024-08-09 02:37:39<SeP>2024-08-10 13:51:00<SeP>2024-08-12 01:04:21<SeP>2024-08-13 12:17:42<SeP>2024-08-14 23:31:03<SeP>2024-08-16 10:44:24<SeP>2024-08-17 21:57:45<SeP>2024-08-19 09:11:06<SeP>2024-08-20 20:24:27<SeP>2024-08-22 07:37:48<SeP>2024-08-23 18:51:09<SeP>2024-08-25 06:04:30<SeP>2024-08-26 17:17:51<SeP>2024-08-28 04:31:12<SeP>2024-08-29 15:44:33<SeP>2024-08-31 02:57:54<SeP>2024-09-01 14:11:15<SeP>2024-09-03 01:24:36<SeP>2024-09-04 12:37:57<SeP>2024-09-05 23:51:18<SeP>2024-09-07 11:04:39<SeP>2024-09-08 22:18:00<SeP>2024-09-10 09:31:21<SeP>2024-09-11 20:44:42<SeP>2024-09-13 07:58:03<SeP>2024-09-14 19:11:24<SeP>2024-09-16 06:24:45<SeP>2024-09-17 17:38:06<SeP>2024-09-19 04:51:27<SeP>2024-09-20 16:04:48<SeP>2024-09-22 03:18:09<SeP>2024-09-23 14:31:30<SeP>2024-09-25 01:44:51<SeP>2024-09-26 12:58:12<SeP>2024-09-28 00:11:33<SeP>2024-09-29 11:24:54<SeP>2024-09-30 22:38:15<SeP>2024-10-02 09:51:36<SeP>2024-10-03 21:04:57<SeP>2024-10-05 08:18:18<SeP>2024-10-06 19:31:39<SeP>2024-10-08 06:45:00<SeP>2024-10-09 17:58:21<SeP>2024-10-11 05:11:42<SeP>2024-10-12 16:25:03<SeP>2024-10-14 03:38:24<SeP>2024-10-15 14:51:45<SeP>2024-10-17 02:05:06<SeP>2024-10-18 13:18:27<SeP>2024-10-20 00:31:48<SeP>2024-10-21 11:45:09<SeP>2024-10-22 22:58:30<SeP>2024-10-24 10:11:51<SeP>2024-10-25 21:25:12<SeP>2024-10-27 08:38:33<SeP>2024-10-28 19:51:54<SeP>2024-10-30 07:05:15<SeP>2024-10-31 18:18:36<SeP>2024-11-02 05:31:57<SeP>2024-11-03 15:45:18<SeP>2024-11-05 02:58:39<SeP>2024-11-06 14:12:00<SeP>2024-11-08 01:25:21<SeP>2024-11-09 12:38:42<SeP>2024-11-10 23:52:03<SeP>2024-11-12 11:05:24<SeP>2024-11-13 22:18:45<SeP>2024-11-15 09:32:06<SeP>2024-11-16 20:45:27<SeP>2024-11-18 07:58:48<SeP>2024-11-19 19:12:09<SeP>2024-11-21 06:25:30<SeP>2024-11-22 17:38:51<SeP>2024-11-24 04:52:12<SeP>2024-11-25 16:05:33<SeP>2024-11-27 03:18:54<SeP>2024-11-28 14:32:15<SeP>2024-11-30 01:45:36<SeP>2024-12-01 12:58:57<SeP>2024-12-03 00:12:18<SeP>2024-12-04 11:25:39<SeP>2024-12-05 22:39:00<SeP>2024-12-07 09:52:21<SeP>2024-12-08 21:05:42<SeP>2024-12-10 08:19:03<SeP>2024-12-11 19:32:24<SeP>2024-12-13 06:45:45<SeP>2024-12-14 17:59:06<SeP>2024-12-16 05:12:27<SeP>2024-12-17 16:25:48<SeP>2024-12-19 03:39:09<SeP>2024-12-20 14:52:30<SeP>2024-12-22 02:05:51<SeP>2024-12-23 13:19:12<SeP>2024-12-25 00:32:33<SeP>2024-12-26 11:45:54<SeP>2024-12-27 22:59:15<SeP>2024-12-29 10:12:36<SeP>2024-12-30 21:25:57<SeP>2025-01-01 08:39:18<SeP>2025-01-02 19:52:39<SeP>2025-01-04 07:06:00<SeP>2025-01-05 18:19:21<SeP>2025-01-07 05:32:42<SeP>2025-01-08 16:46:03<SeP>2025-01-10 03:59:24<SeP>2025-01-11 15:12:45<SeP>2025-01-13 02:26:06<SeP>2025-01-14 13:39:27<SeP>2025-01-16 00:52:48<SeP>2025-01-17 12:06:09<SeP>2025-01-18 23:19:30<SeP>2025-01-20 10:32:51<SeP>2025-01-21 21:46:12<SeP>2025-01-23 08:59:33<SeP>2025-01-24 20:12:54<SeP>2025-01-26 07:26:15<SeP>2025-01-27 18:39:36<SeP>2025-01-29 05:52:57<SeP>2025-01-30 17:06:18<SeP>2025-02-01 04:19:39<SeP>2025-02-02 15:33:00<SeP>2025-02-04 02:46:21<SeP>2025-02-05 13:59:42<SeP>2025-02-07 01:13:03<SeP>2025-02-08 12:26:24<SeP>2025-02-09 23:39:45<SeP>2025-02-11 10:53:06<SeP>2025-02-12 22:06:27<SeP>2025-02-14 09:19:48<SeP>2025-02-15 20:33:09<SeP>2025-02-17 07:46:30<SeP>2025-02-18 18:59:51<SeP>2025-02-20 06:13:12<SeP>2025-02-21 17:26:33<SeP>2025-02-23 04:39:54<SeP>2025-02-24 15:53:15<SeP>2025-02-26 03:06:36<SeP>2025-02-27 14:19:57<SeP>2025-03-01 01:33:18<SeP>2025-03-02 12:46:39";
  const itemLabel       = "Escaneos";
  const itemData        = "770<SeP>1512<SeP>1368<SeP>1453<SeP>1250<SeP>1722<SeP>951<SeP>966<SeP>1178<SeP>3404<SeP>2581<SeP>1707<SeP>3169<SeP>1118<SeP>742<SeP>943<SeP>1406<SeP>2921<SeP>1557<SeP>1368<SeP>1274<SeP>934<SeP>1033<SeP>1283<SeP>888<SeP>872<SeP>784<SeP>3752<SeP>729<SeP>1021<SeP>859<SeP>1726<SeP>899<SeP>840<SeP>3063<SeP>2256<SeP>2363<SeP>1704<SeP>1645<SeP>1295<SeP>1519<SeP>1841<SeP>1936<SeP>2009<SeP>1621<SeP>1608<SeP>1692<SeP>1717<SeP>1586<SeP>1875<SeP>1817<SeP>1790<SeP>1582<SeP>3251<SeP>1365<SeP>1669<SeP>2124<SeP>1902<SeP>2126<SeP>1899<SeP>3328<SeP>1414<SeP>1473<SeP>1517<SeP>1469<SeP>1945<SeP>1514<SeP>1217<SeP>1415<SeP>1367<SeP>2058<SeP>1464<SeP>1063<SeP>1246<SeP>1478<SeP>8137<SeP>1189<SeP>1389<SeP>1274<SeP>1726<SeP>1948<SeP>1110<SeP>6539<SeP>1718<SeP>1592<SeP>985<SeP>1189<SeP>3289<SeP>1182<SeP>990<SeP>1063<SeP>1164<SeP>1487<SeP>2539<SeP>1026<SeP>1581<SeP>3023<SeP>6329<SeP>1281<SeP>963<SeP>953<SeP>902<SeP>965<SeP>974<SeP>1029<SeP>1233<SeP>4293<SeP>1691<SeP>1377<SeP>1501<SeP>512<SeP>1413<SeP>1327<SeP>1201<SeP>873<SeP>2039<SeP>1358<SeP>1260<SeP>1034<SeP>968<SeP>1162<SeP>700<SeP>857<SeP>852<SeP>808<SeP>1112<SeP>889<SeP>928<SeP>697<SeP>881<SeP>871<SeP>799<SeP>735<SeP>857<SeP>960<SeP>840<SeP>866<SeP>832<SeP>782<SeP>776<SeP>1003<SeP>915<SeP>782<SeP>911<SeP>1033<SeP>810<SeP>1095<SeP>992<SeP>446<SeP>964<SeP>876<SeP>927<SeP>1184<SeP>1000<SeP>1118<SeP>1248<SeP>962<SeP>952<SeP>957<SeP>992<SeP>749<SeP>966<SeP>1092<SeP>901<SeP>879<SeP>897<SeP>1041<SeP>1000<SeP>1039<SeP>1011<SeP>1165<SeP>919<SeP>929<SeP>1173<SeP>2030<SeP>1295<SeP>1013<SeP>1019<SeP>1208<SeP>973<SeP>1015<SeP>773<SeP>610<SeP>984<SeP>1159<SeP>888<SeP>954<SeP>1259<SeP>1183<SeP>1153<SeP>1285<SeP>1087<SeP>1376<SeP>1117<SeP>1497<SeP>1214<SeP>1566<SeP>2099<SeP>1319<SeP>811<SeP>901<SeP>1083<SeP>1041<SeP>723<SeP>808<SeP>863<SeP>983<SeP>818<SeP>4960<SeP>3640<SeP>2003<SeP>1349<SeP>1127<SeP>875<SeP>1095<SeP>858<SeP>1025<SeP>982<SeP>1110<SeP>964<SeP>1206<SeP>2368<SeP>1004<SeP>1180<SeP>1218<SeP>1328<SeP>1066<SeP>1134<SeP>946<SeP>1123<SeP>1112<SeP>968<SeP>1120<SeP>1022<SeP>1217<SeP>859<SeP>1405<SeP>1037<SeP>1129<SeP>1079<SeP>1343<SeP>1275<SeP>1145<SeP>1638<SeP>1117<SeP>1143<SeP>1090<SeP>1688<SeP>1631<SeP>1324<SeP>2102<SeP>1556<SeP>1484<SeP>1939<SeP>1434<SeP>1206<SeP>1129<SeP>1297<SeP>1326<SeP>1470<SeP>1149<SeP>1351<SeP>1676<SeP>1665<SeP>1337<SeP>1527<SeP>1493<SeP>1211<SeP>1011<SeP>1141<SeP>1380<SeP>1082<SeP>1261<SeP>1494<SeP>1027<SeP>1527<SeP>1820<SeP>1295<SeP>1378<SeP>1627<SeP>1392<SeP>967<SeP>1014<SeP>984<SeP>1029<SeP>829<SeP>1023<SeP>1747<SeP>1169<SeP>1057<SeP>1129<SeP>960<SeP>776<SeP>1163<SeP>1330<SeP>848<SeP>923<SeP>929<SeP>1327<SeP>1575<SeP>1499<SeP>1059<SeP>1138<SeP>990<SeP>1853<SeP>1085<SeP>1082<SeP>1054<SeP>1222<SeP>1425<SeP>1008<SeP>920<SeP>1287<SeP>1035<SeP>856<SeP>892<SeP>1145<SeP>1538<SeP>1441<SeP>1636<SeP>1369<SeP>1078<SeP>1049<SeP>1083<SeP>1217<SeP>1161<SeP>1173<SeP>1003<SeP>958<SeP>1317<SeP>1450<SeP>1382<SeP>1570<SeP>1482<SeP>1254<SeP>1550<SeP>1451<SeP>1340<SeP>1468<SeP>1535<SeP>1245<SeP>1743<SeP>1254<SeP>1558<SeP>1582<SeP>1349<SeP>1453<SeP>1360<SeP>1125<SeP>1338<SeP>1403<SeP>1695<SeP>1322<SeP>1320<SeP>1231<SeP>1424<SeP>1176<SeP>1322<SeP>1416<SeP>1751<SeP>1732<SeP>1269<SeP>693<SeP>1397<SeP>1895<SeP>1202<SeP>1460<SeP>1183<SeP>1180<SeP>1298<SeP>1464<SeP>1176<SeP>1548<SeP>1522<SeP>1666<SeP>1479<SeP>1593<SeP>1510<SeP>1425<SeP>1433<SeP>1637<SeP>1534<SeP>1174<SeP>1211<SeP>1915<SeP>1739<SeP>1774<SeP>1892<SeP>1673<SeP>1585<SeP>1592<SeP>1597<SeP>1540<SeP>1523<SeP>1742<SeP>1720<SeP>1724<SeP>1430<SeP>1496<SeP>1482";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:13:21<SeP>2023-07-28 22:26:42<SeP>2023-07-30 09:40:03<SeP>2023-07-31 20:53:24<SeP>2023-08-02 08:06:45<SeP>2023-08-03 19:20:06<SeP>2023-08-05 06:33:27<SeP>2023-08-06 17:46:48<SeP>2023-08-08 05:00:09<SeP>2023-08-09 16:13:30<SeP>2023-08-11 03:26:51<SeP>2023-08-12 14:40:12<SeP>2023-08-14 01:53:33<SeP>2023-08-15 13:06:54<SeP>2023-08-17 00:20:15<SeP>2023-08-18 11:33:36<SeP>2023-08-19 22:46:57<SeP>2023-08-21 10:00:18<SeP>2023-08-22 21:13:39<SeP>2023-08-24 08:27:00<SeP>2023-08-25 19:40:21<SeP>2023-08-27 06:53:42<SeP>2023-08-28 18:07:03<SeP>2023-08-30 05:20:24<SeP>2023-08-31 16:33:45<SeP>2023-09-02 03:47:06<SeP>2023-09-03 15:00:27<SeP>2023-09-05 02:13:48<SeP>2023-09-06 13:27:09<SeP>2023-09-08 00:40:30<SeP>2023-09-09 11:53:51<SeP>2023-09-10 23:07:12<SeP>2023-09-12 10:20:33<SeP>2023-09-13 21:33:54<SeP>2023-09-15 08:47:15<SeP>2023-09-16 20:00:36<SeP>2023-09-18 07:13:57<SeP>2023-09-19 18:27:18<SeP>2023-09-21 05:40:39<SeP>2023-09-22 16:54:00<SeP>2023-09-24 04:07:21<SeP>2023-09-25 15:20:42<SeP>2023-09-27 02:34:03<SeP>2023-09-28 13:47:24<SeP>2023-09-30 01:00:45<SeP>2023-10-01 12:14:06<SeP>2023-10-02 23:27:27<SeP>2023-10-04 10:40:48<SeP>2023-10-05 21:54:09<SeP>2023-10-07 09:07:30<SeP>2023-10-08 20:20:51<SeP>2023-10-10 07:34:12<SeP>2023-10-11 18:47:33<SeP>2023-10-13 06:00:54<SeP>2023-10-14 17:14:15<SeP>2023-10-16 04:27:36<SeP>2023-10-17 15:40:57<SeP>2023-10-19 02:54:18<SeP>2023-10-20 14:07:39<SeP>2023-10-22 01:21:00<SeP>2023-10-23 12:34:21<SeP>2023-10-24 23:47:42<SeP>2023-10-26 11:01:03<SeP>2023-10-27 22:14:24<SeP>2023-10-29 09:27:45<SeP>2023-10-30 20:41:06<SeP>2023-11-01 07:54:27<SeP>2023-11-02 19:07:48<SeP>2023-11-04 06:21:09<SeP>2023-11-05 16:34:30<SeP>2023-11-07 03:47:51<SeP>2023-11-08 15:01:12<SeP>2023-11-10 02:14:33<SeP>2023-11-11 13:27:54<SeP>2023-11-13 00:41:15<SeP>2023-11-14 11:54:36<SeP>2023-11-15 23:07:57<SeP>2023-11-17 10:21:18<SeP>2023-11-18 21:34:39<SeP>2023-11-20 08:48:00<SeP>2023-11-21 20:01:21<SeP>2023-11-23 07:14:42<SeP>2023-11-24 18:28:03<SeP>2023-11-26 05:41:24<SeP>2023-11-27 16:54:45<SeP>2023-11-29 04:08:06<SeP>2023-11-30 15:21:27<SeP>2023-12-02 02:34:48<SeP>2023-12-03 13:48:09<SeP>2023-12-05 01:01:30<SeP>2023-12-06 12:14:51<SeP>2023-12-07 23:28:12<SeP>2023-12-09 10:41:33<SeP>2023-12-10 21:54:54<SeP>2023-12-12 09:08:15<SeP>2023-12-13 20:21:36<SeP>2023-12-15 07:34:57<SeP>2023-12-16 18:48:18<SeP>2023-12-18 06:01:39<SeP>2023-12-19 17:15:00<SeP>2023-12-21 04:28:21<SeP>2023-12-22 15:41:42<SeP>2023-12-24 02:55:03<SeP>2023-12-25 14:08:24<SeP>2023-12-27 01:21:45<SeP>2023-12-28 12:35:06<SeP>2023-12-29 23:48:27<SeP>2023-12-31 11:01:48<SeP>2024-01-01 22:15:09<SeP>2024-01-03 09:28:30<SeP>2024-01-04 20:41:51<SeP>2024-01-06 07:55:12<SeP>2024-01-07 19:08:33<SeP>2024-01-09 06:21:54<SeP>2024-01-10 17:35:15<SeP>2024-01-12 04:48:36<SeP>2024-01-13 16:01:57<SeP>2024-01-15 03:15:18<SeP>2024-01-16 14:28:39<SeP>2024-01-18 01:42:00<SeP>2024-01-19 12:55:21<SeP>2024-01-21 00:08:42<SeP>2024-01-22 11:22:03<SeP>2024-01-23 22:35:24<SeP>2024-01-25 09:48:45<SeP>2024-01-26 21:02:06<SeP>2024-01-28 08:15:27<SeP>2024-01-29 19:28:48<SeP>2024-01-31 06:42:09<SeP>2024-02-01 17:55:30<SeP>2024-02-03 05:08:51<SeP>2024-02-04 16:22:12<SeP>2024-02-06 03:35:33<SeP>2024-02-07 14:48:54<SeP>2024-02-09 02:02:15<SeP>2024-02-10 13:15:36<SeP>2024-02-12 00:28:57<SeP>2024-02-13 11:42:18<SeP>2024-02-14 22:55:39<SeP>2024-02-16 10:09:00<SeP>2024-02-17 21:22:21<SeP>2024-02-19 08:35:42<SeP>2024-02-20 19:49:03<SeP>2024-02-22 07:02:24<SeP>2024-02-23 18:15:45<SeP>2024-02-25 05:29:06<SeP>2024-02-26 16:42:27<SeP>2024-02-28 03:55:48<SeP>2024-02-29 15:09:09<SeP>2024-03-02 02:22:30<SeP>2024-03-03 13:35:51<SeP>2024-03-05 00:49:12<SeP>2024-03-06 12:02:33<SeP>2024-03-07 23:15:54<SeP>2024-03-09 10:29:15<SeP>2024-03-10 22:42:36<SeP>2024-03-12 09:55:57<SeP>2024-03-13 21:09:18<SeP>2024-03-15 08:22:39<SeP>2024-03-16 19:36:00<SeP>2024-03-18 06:49:21<SeP>2024-03-19 18:02:42<SeP>2024-03-21 05:16:03<SeP>2024-03-22 16:29:24<SeP>2024-03-24 03:42:45<SeP>2024-03-25 14:56:06<SeP>2024-03-27 02:09:27<SeP>2024-03-28 13:22:48<SeP>2024-03-30 00:36:09<SeP>2024-03-31 11:49:30<SeP>2024-04-01 23:02:51<SeP>2024-04-03 10:16:12<SeP>2024-04-04 21:29:33<SeP>2024-04-06 08:42:54<SeP>2024-04-07 19:56:15<SeP>2024-04-09 07:09:36<SeP>2024-04-10 18:22:57<SeP>2024-04-12 05:36:18<SeP>2024-04-13 16:49:39<SeP>2024-04-15 04:03:00<SeP>2024-04-16 15:16:21<SeP>2024-04-18 02:29:42<SeP>2024-04-19 13:43:03<SeP>2024-04-21 00:56:24<SeP>2024-04-22 12:09:45<SeP>2024-04-23 23:23:06<SeP>2024-04-25 10:36:27<SeP>2024-04-26 21:49:48<SeP>2024-04-28 09:03:09<SeP>2024-04-29 20:16:30<SeP>2024-05-01 07:29:51<SeP>2024-05-02 18:43:12<SeP>2024-05-04 05:56:33<SeP>2024-05-05 17:09:54<SeP>2024-05-07 04:23:15<SeP>2024-05-08 15:36:36<SeP>2024-05-10 02:49:57<SeP>2024-05-11 14:03:18<SeP>2024-05-13 01:16:39<SeP>2024-05-14 12:30:00<SeP>2024-05-15 23:43:21<SeP>2024-05-17 10:56:42<SeP>2024-05-18 22:10:03<SeP>2024-05-20 09:23:24<SeP>2024-05-21 20:36:45<SeP>2024-05-23 07:50:06<SeP>2024-05-24 19:03:27<SeP>2024-05-26 06:16:48<SeP>2024-05-27 17:30:09<SeP>2024-05-29 04:43:30<SeP>2024-05-30 15:56:51<SeP>2024-06-01 03:10:12<SeP>2024-06-02 14:23:33<SeP>2024-06-04 01:36:54<SeP>2024-06-05 12:50:15<SeP>2024-06-07 00:03:36<SeP>2024-06-08 11:16:57<SeP>2024-06-09 22:30:18<SeP>2024-06-11 09:43:39<SeP>2024-06-12 20:57:00<SeP>2024-06-14 08:10:21<SeP>2024-06-15 19:23:42<SeP>2024-06-17 06:37:03<SeP>2024-06-18 17:50:24<SeP>2024-06-20 05:03:45<SeP>2024-06-21 16:17:06<SeP>2024-06-23 03:30:27<SeP>2024-06-24 14:43:48<SeP>2024-06-26 01:57:09<SeP>2024-06-27 13:10:30<SeP>2024-06-29 00:23:51<SeP>2024-06-30 11:37:12<SeP>2024-07-01 22:50:33<SeP>2024-07-03 10:03:54<SeP>2024-07-04 21:17:15<SeP>2024-07-06 08:30:36<SeP>2024-07-07 19:43:57<SeP>2024-07-09 06:57:18<SeP>2024-07-10 18:10:39<SeP>2024-07-12 05:24:00<SeP>2024-07-13 16:37:21<SeP>2024-07-15 03:50:42<SeP>2024-07-16 15:04:03<SeP>2024-07-18 02:17:24<SeP>2024-07-19 13:30:45<SeP>2024-07-21 00:44:06<SeP>2024-07-22 11:57:27<SeP>2024-07-23 23:10:48<SeP>2024-07-25 10:24:09<SeP>2024-07-26 21:37:30<SeP>2024-07-28 08:50:51<SeP>2024-07-29 20:04:12<SeP>2024-07-31 07:17:33<SeP>2024-08-01 18:30:54<SeP>2024-08-03 05:44:15<SeP>2024-08-04 16:57:36<SeP>2024-08-06 04:10:57<SeP>2024-08-07 15:24:18<SeP>2024-08-09 02:37:39<SeP>2024-08-10 13:51:00<SeP>2024-08-12 01:04:21<SeP>2024-08-13 12:17:42<SeP>2024-08-14 23:31:03<SeP>2024-08-16 10:44:24<SeP>2024-08-17 21:57:45<SeP>2024-08-19 09:11:06<SeP>2024-08-20 20:24:27<SeP>2024-08-22 07:37:48<SeP>2024-08-23 18:51:09<SeP>2024-08-25 06:04:30<SeP>2024-08-26 17:17:51<SeP>2024-08-28 04:31:12<SeP>2024-08-29 15:44:33<SeP>2024-08-31 02:57:54<SeP>2024-09-01 14:11:15<SeP>2024-09-03 01:24:36<SeP>2024-09-04 12:37:57<SeP>2024-09-05 23:51:18<SeP>2024-09-07 11:04:39<SeP>2024-09-08 22:18:00<SeP>2024-09-10 09:31:21<SeP>2024-09-11 20:44:42<SeP>2024-09-13 07:58:03<SeP>2024-09-14 19:11:24<SeP>2024-09-16 06:24:45<SeP>2024-09-17 17:38:06<SeP>2024-09-19 04:51:27<SeP>2024-09-20 16:04:48<SeP>2024-09-22 03:18:09<SeP>2024-09-23 14:31:30<SeP>2024-09-25 01:44:51<SeP>2024-09-26 12:58:12<SeP>2024-09-28 00:11:33<SeP>2024-09-29 11:24:54<SeP>2024-09-30 22:38:15<SeP>2024-10-02 09:51:36<SeP>2024-10-03 21:04:57<SeP>2024-10-05 08:18:18<SeP>2024-10-06 19:31:39<SeP>2024-10-08 06:45:00<SeP>2024-10-09 17:58:21<SeP>2024-10-11 05:11:42<SeP>2024-10-12 16:25:03<SeP>2024-10-14 03:38:24<SeP>2024-10-15 14:51:45<SeP>2024-10-17 02:05:06<SeP>2024-10-18 13:18:27<SeP>2024-10-20 00:31:48<SeP>2024-10-21 11:45:09<SeP>2024-10-22 22:58:30<SeP>2024-10-24 10:11:51<SeP>2024-10-25 21:25:12<SeP>2024-10-27 08:38:33<SeP>2024-10-28 19:51:54<SeP>2024-10-30 07:05:15<SeP>2024-10-31 18:18:36<SeP>2024-11-02 05:31:57<SeP>2024-11-03 15:45:18<SeP>2024-11-05 02:58:39<SeP>2024-11-06 14:12:00<SeP>2024-11-08 01:25:21<SeP>2024-11-09 12:38:42<SeP>2024-11-10 23:52:03<SeP>2024-11-12 11:05:24<SeP>2024-11-13 22:18:45<SeP>2024-11-15 09:32:06<SeP>2024-11-16 20:45:27<SeP>2024-11-18 07:58:48<SeP>2024-11-19 19:12:09<SeP>2024-11-21 06:25:30<SeP>2024-11-22 17:38:51<SeP>2024-11-24 04:52:12<SeP>2024-11-25 16:05:33<SeP>2024-11-27 03:18:54<SeP>2024-11-28 14:32:15<SeP>2024-11-30 01:45:36<SeP>2024-12-01 12:58:57<SeP>2024-12-03 00:12:18<SeP>2024-12-04 11:25:39<SeP>2024-12-05 22:39:00<SeP>2024-12-07 09:52:21<SeP>2024-12-08 21:05:42<SeP>2024-12-10 08:19:03<SeP>2024-12-11 19:32:24<SeP>2024-12-13 06:45:45<SeP>2024-12-14 17:59:06<SeP>2024-12-16 05:12:27<SeP>2024-12-17 16:25:48<SeP>2024-12-19 03:39:09<SeP>2024-12-20 14:52:30<SeP>2024-12-22 02:05:51<SeP>2024-12-23 13:19:12<SeP>2024-12-25 00:32:33<SeP>2024-12-26 11:45:54<SeP>2024-12-27 22:59:15<SeP>2024-12-29 10:12:36<SeP>2024-12-30 21:25:57<SeP>2025-01-01 08:39:18<SeP>2025-01-02 19:52:39<SeP>2025-01-04 07:06:00<SeP>2025-01-05 18:19:21<SeP>2025-01-07 05:32:42<SeP>2025-01-08 16:46:03<SeP>2025-01-10 03:59:24<SeP>2025-01-11 15:12:45<SeP>2025-01-13 02:26:06<SeP>2025-01-14 13:39:27<SeP>2025-01-16 00:52:48<SeP>2025-01-17 12:06:09<SeP>2025-01-18 23:19:30<SeP>2025-01-20 10:32:51<SeP>2025-01-21 21:46:12<SeP>2025-01-23 08:59:33<SeP>2025-01-24 20:12:54<SeP>2025-01-26 07:26:15<SeP>2025-01-27 18:39:36<SeP>2025-01-29 05:52:57<SeP>2025-01-30 17:06:18<SeP>2025-02-01 04:19:39<SeP>2025-02-02 15:33:00<SeP>2025-02-04 02:46:21<SeP>2025-02-05 13:59:42<SeP>2025-02-07 01:13:03<SeP>2025-02-08 12:26:24<SeP>2025-02-09 23:39:45<SeP>2025-02-11 10:53:06<SeP>2025-02-12 22:06:27<SeP>2025-02-14 09:19:48<SeP>2025-02-15 20:33:09<SeP>2025-02-17 07:46:30<SeP>2025-02-18 18:59:51<SeP>2025-02-20 06:13:12<SeP>2025-02-21 17:26:33<SeP>2025-02-23 04:39:54<SeP>2025-02-24 15:53:15<SeP>2025-02-26 03:06:36<SeP>2025-02-27 14:19:57<SeP>2025-03-01 01:33:18<SeP>2025-03-02 12:46:39";
  const itemLabel       = "Ataques";
  const itemData        = "155<SeP>614<SeP>1218<SeP>826<SeP>225<SeP>230<SeP>6980<SeP>548<SeP>9497<SeP>568<SeP>398<SeP>1129<SeP>1276<SeP>257<SeP>164<SeP>449<SeP>109<SeP>762<SeP>309<SeP>6700<SeP>7081<SeP>6791<SeP>8468<SeP>4498<SeP>272<SeP>218<SeP>394<SeP>373<SeP>5707<SeP>319<SeP>169<SeP>315<SeP>490<SeP>312<SeP>6239<SeP>10075<SeP>9426<SeP>10550<SeP>7588<SeP>4956<SeP>8699<SeP>6659<SeP>9375<SeP>9139<SeP>7521<SeP>8322<SeP>8766<SeP>8429<SeP>8485<SeP>6325<SeP>5798<SeP>11655<SeP>7107<SeP>8106<SeP>7474<SeP>10054<SeP>15084<SeP>20023<SeP>8409<SeP>9195<SeP>10191<SeP>7432<SeP>8469<SeP>7645<SeP>9175<SeP>8429<SeP>6133<SeP>6701<SeP>7024<SeP>6175<SeP>3115<SeP>6758<SeP>5498<SeP>6421<SeP>6659<SeP>7395<SeP>4126<SeP>5400<SeP>7992<SeP>4695<SeP>6385<SeP>5630<SeP>4486<SeP>7635<SeP>5353<SeP>5348<SeP>5657<SeP>9368<SeP>21186<SeP>30128<SeP>13576<SeP>9719<SeP>5463<SeP>7630<SeP>12003<SeP>6805<SeP>4235<SeP>5510<SeP>5008<SeP>4622<SeP>6422<SeP>7214<SeP>7439<SeP>5817<SeP>5866<SeP>4772<SeP>7291<SeP>8683<SeP>7571<SeP>7830<SeP>3919<SeP>8225<SeP>10277<SeP>7586<SeP>2781<SeP>5298<SeP>7363<SeP>7476<SeP>5714<SeP>8550<SeP>7962<SeP>1954<SeP>2770<SeP>907<SeP>1721<SeP>3014<SeP>1275<SeP>897<SeP>1161<SeP>1144<SeP>1774<SeP>663<SeP>1291<SeP>1173<SeP>945<SeP>1049<SeP>1009<SeP>1382<SeP>1306<SeP>986<SeP>1834<SeP>2124<SeP>4221<SeP>11390<SeP>8410<SeP>7451<SeP>7577<SeP>12578<SeP>2847<SeP>8845<SeP>12288<SeP>9722<SeP>12053<SeP>9606<SeP>10663<SeP>11802<SeP>8622<SeP>13329<SeP>5839<SeP>4562<SeP>7342<SeP>23604<SeP>7546<SeP>7865<SeP>8387<SeP>13523<SeP>11929<SeP>8202<SeP>4807<SeP>7407<SeP>8766<SeP>24540<SeP>7405<SeP>9939<SeP>10351<SeP>4724<SeP>6039<SeP>6408<SeP>15961<SeP>4680<SeP>13828<SeP>7321<SeP>6265<SeP>9282<SeP>6708<SeP>3637<SeP>6401<SeP>6242<SeP>6494<SeP>7067<SeP>6664<SeP>5637<SeP>21080<SeP>6671<SeP>6028<SeP>6274<SeP>8272<SeP>11452<SeP>6833<SeP>4572<SeP>3291<SeP>6280<SeP>3294<SeP>4244<SeP>4170<SeP>640<SeP>97<SeP>644<SeP>544<SeP>651<SeP>719<SeP>366<SeP>641<SeP>1244<SeP>1245<SeP>3163<SeP>22961<SeP>539<SeP>4369<SeP>2831<SeP>2986<SeP>7201<SeP>3133<SeP>4226<SeP>2645<SeP>3814<SeP>2782<SeP>3419<SeP>4137<SeP>2544<SeP>2302<SeP>3439<SeP>1868<SeP>2067<SeP>2029<SeP>1186<SeP>1422<SeP>1386<SeP>866<SeP>1845<SeP>13074<SeP>15037<SeP>2058<SeP>4126<SeP>3654<SeP>2236<SeP>3887<SeP>1895<SeP>3214<SeP>2972<SeP>3368<SeP>2471<SeP>3126<SeP>2788<SeP>3265<SeP>6667<SeP>4901<SeP>3624<SeP>4029<SeP>2843<SeP>3073<SeP>4363<SeP>6092<SeP>7956<SeP>5343<SeP>2288<SeP>3407<SeP>2619<SeP>4818<SeP>3210<SeP>3661<SeP>2602<SeP>3877<SeP>4948<SeP>4026<SeP>5905<SeP>4112<SeP>6510<SeP>4856<SeP>5142<SeP>4969<SeP>21824<SeP>5879<SeP>10986<SeP>1787<SeP>2993<SeP>4143<SeP>3654<SeP>5299<SeP>3455<SeP>4816<SeP>4481<SeP>4830<SeP>3098<SeP>4245<SeP>1971<SeP>1427<SeP>2141<SeP>3934<SeP>2346<SeP>2848<SeP>3626<SeP>4591<SeP>3628<SeP>3451<SeP>4224<SeP>3401<SeP>3136<SeP>6153<SeP>7947<SeP>6158<SeP>4392<SeP>4880<SeP>4674<SeP>3526<SeP>4078<SeP>4149<SeP>6591<SeP>5624<SeP>4161<SeP>3498<SeP>935<SeP>1116<SeP>1943<SeP>1345<SeP>1231<SeP>1696<SeP>1554<SeP>1330<SeP>3270<SeP>4059<SeP>6434<SeP>31920<SeP>7233<SeP>5238<SeP>17739<SeP>10987<SeP>5499<SeP>6051<SeP>4729<SeP>24222<SeP>4874<SeP>5284<SeP>4550<SeP>5125<SeP>6354<SeP>29721<SeP>5047<SeP>3891<SeP>4050<SeP>3773<SeP>5936<SeP>4462<SeP>3795<SeP>2636<SeP>4566<SeP>5719<SeP>4553<SeP>18127<SeP>5429<SeP>6228<SeP>5712<SeP>1354<SeP>3940<SeP>3670<SeP>4758<SeP>3596<SeP>3582<SeP>3096<SeP>3444<SeP>3468<SeP>3511<SeP>6780<SeP>8840<SeP>10249<SeP>8306<SeP>9187<SeP>7568<SeP>6926<SeP>5132<SeP>4758<SeP>7179<SeP>22466<SeP>3317<SeP>4347<SeP>3186<SeP>11455<SeP>5262<SeP>4199<SeP>4439<SeP>4526<SeP>3335<SeP>6568<SeP>10243<SeP>6170<SeP>3831<SeP>3335<SeP>2815<SeP>2204<SeP>2366";
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
  const itemData    = "695191<SeP>365170<SeP>206576<SeP>180157<SeP>110475<SeP>88101<SeP>83672<SeP>81074<SeP>68104<SeP>67450";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "297678<SeP>41425<SeP>40609<SeP>36065<SeP>14501<SeP>11074<SeP>8043<SeP>7954<SeP>7181<SeP>7029";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "397513<SeP>329105<SeP>203539<SeP>139548<SeP>95974<SeP>81034<SeP>80920<SeP>70000<SeP>59496<SeP>58712";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "363290<SeP>259556<SeP>236909<SeP>143854<SeP>67372<SeP>59725<SeP>56746<SeP>53190<SeP>41619<SeP>36211";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "156690<SeP>53497<SeP>40497<SeP>32544<SeP>21912<SeP>12828<SeP>10797<SeP>8097<SeP>7614<SeP>7459";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "350462<SeP>258789<SeP>121942<SeP>80219<SeP>55744<SeP>48928<SeP>47131<SeP>30610<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "695191<SeP>365170<SeP>206576<SeP>180157<SeP>110475<SeP>88101<SeP>83672<SeP>81074<SeP>68104<SeP>67450";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "297678<SeP>41425<SeP>40609<SeP>36065<SeP>14501<SeP>11074<SeP>8043<SeP>7954<SeP>7181<SeP>7029";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "397513<SeP>329105<SeP>203539<SeP>139548<SeP>95974<SeP>81034<SeP>80920<SeP>70000<SeP>59496<SeP>58712";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "363290<SeP>259556<SeP>236909<SeP>143854<SeP>67372<SeP>59725<SeP>56746<SeP>53190<SeP>41619<SeP>36211";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "156690<SeP>53497<SeP>40497<SeP>32544<SeP>21912<SeP>12828<SeP>10797<SeP>8097<SeP>7614<SeP>7459";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "350462<SeP>258789<SeP>121942<SeP>80219<SeP>55744<SeP>48928<SeP>47131<SeP>30610<SeP>29324<SeP>26846";
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
