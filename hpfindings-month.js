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
  const metricData    = "120491";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "33812";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "86679";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8783";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "50715";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "35964";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4306";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "8024";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "27940";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3445";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "120491";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "33812";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "86679";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8783";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "50715";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "35964";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4306";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "8024";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "27940";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3445";
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
  const incomingData = "120491<SeP>33812<SeP>86679<SeP>8783";
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
  const incomingData = "86679<SeP>50715<SeP>35964<SeP>4306";
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
  const incomingData = "35964<SeP>8024<SeP>27940<SeP>3445";
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
  const incomingData = "8346<SeP>7571<SeP>775";
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
  const incomingData = "91<SeP>10<SeP>81<SeP>18";
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
  const incomingData = "120491<SeP>33812<SeP>86679<SeP>8783";
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
  const incomingData = "86679<SeP>50715<SeP>35964<SeP>4306";
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
  const incomingData = "35964<SeP>8024<SeP>27940<SeP>3445";
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
  const incomingData = "8346<SeP>7571<SeP>775";
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
  const incomingData = "91<SeP>10<SeP>81<SeP>18";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>122.100.182.168</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>92.255.57.132</span>)";
  const column2Data  = "AS44486<SeP>AS207566<SeP>AS47890<SeP>AS34534<SeP>AS4609<SeP>AS204428<SeP>AS400619<SeP>AS207566<SeP>AS14061<SeP>AS207566";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong";
  const column4Data  = "6226<SeP>1404<SeP>1140<SeP>796<SeP>758<SeP>657<SeP>604<SeP>588<SeP>528<SeP>459";
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
  const column1Data  = "IP05 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP14 (<span class=blur>126.62.95.172</span>)<SeP>IP13 (<span class=blur>218.92.0.226</span>)<SeP>IP15 (<span class=blur>218.92.0.216</span>)<SeP>IP16 (<span class=blur>218.92.0.230</span>)<SeP>IP17 (<span class=blur>218.92.0.237</span>)<SeP>IP18 (<span class=blur>218.92.0.217</span>)<SeP>IP19 (<span class=blur>218.92.0.233</span>)";
  const column2Data  = "AS4609<SeP>AS207566<SeP>AS207566<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data  = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "758<SeP>702<SeP>588<SeP>337<SeP>337<SeP>331<SeP>330<SeP>326<SeP>325<SeP>321";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>92.255.57.132</span>)<SeP>IP11 (<span class=blur>95.182.115.45</span>)<SeP>IP12 (<span class=blur>104.252.127.63</span>)";
  const column2Data  = "AS44486<SeP>AS47890<SeP>AS34534<SeP>AS207566<SeP>AS204428<SeP>AS400619<SeP>AS14061<SeP>AS207566<SeP>AS56971<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  const column4Data  = "6225<SeP>1136<SeP>782<SeP>702<SeP>657<SeP>602<SeP>527<SeP>458<SeP>430<SeP>382";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>122.100.182.168</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>92.255.57.132</span>)";
  const column2Data   = "AS44486<SeP>AS207566<SeP>AS47890<SeP>AS34534<SeP>AS4609<SeP>AS204428<SeP>AS400619<SeP>AS207566<SeP>AS14061<SeP>AS207566";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6226<SeP>1404<SeP>1140<SeP>796<SeP>758<SeP>657<SeP>604<SeP>588<SeP>528<SeP>459";
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
  const column1Data   = "IP05 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP14 (<span class=blur>126.62.95.172</span>)<SeP>IP13 (<span class=blur>218.92.0.226</span>)<SeP>IP15 (<span class=blur>218.92.0.216</span>)<SeP>IP16 (<span class=blur>218.92.0.230</span>)<SeP>IP17 (<span class=blur>218.92.0.237</span>)<SeP>IP18 (<span class=blur>218.92.0.217</span>)<SeP>IP19 (<span class=blur>218.92.0.233</span>)";
  const column2Data   = "AS4609<SeP>AS207566<SeP>AS207566<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data   = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "758<SeP>702<SeP>588<SeP>337<SeP>337<SeP>331<SeP>330<SeP>326<SeP>325<SeP>321";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>92.255.57.132</span>)<SeP>IP11 (<span class=blur>95.182.115.45</span>)<SeP>IP12 (<span class=blur>104.252.127.63</span>)";
  const column2Data   = "AS44486<SeP>AS47890<SeP>AS34534<SeP>AS207566<SeP>AS204428<SeP>AS400619<SeP>AS14061<SeP>AS207566<SeP>AS56971<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6225<SeP>1136<SeP>782<SeP>702<SeP>657<SeP>602<SeP>527<SeP>458<SeP>430<SeP>382";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>admin adminHW<SeP>admin hp.com<SeP>root root<SeP>root realtek<SeP>root epon<SeP>root Zxic521 ";
  const column3Data   = "5965<SeP>5882<SeP>1249<SeP>251<SeP>218<SeP>216<SeP>202<SeP>201<SeP>195<SeP>186";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b";
  const column2Data  = "6221<SeP>972<SeP>257<SeP>87<SeP>40<SeP>39<SeP>34<SeP>34<SeP>34<SeP>33";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  const column4Data  = "malicious<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA";
  const listLocale   = "en-US";

  column3Data = column3Data.replace(/redir/g, "redirection");
  listColumns4(listElement, column1Label, column1Data, column2Label, column2Data, column3Label, column3Data, column4Label, column4Data, listLocale);
}

function listMalwareURLsEnglish()
{
  const listElement  = "list-malware-urls";
  const column1Label = "Malware Distribution Site";
  const column2Label = "Count";
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://194.85.251.8<SeP>http://193.143.1.7<SeP>http://61.215.151.173<SeP>http://66.63.187.69<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>http://141.98.10.122<SeP>tftp://199.195.248.181";
  const column2Data  = "84<SeP>20<SeP>9<SeP>8<SeP>5<SeP>4<SeP>2<SeP>2<SeP>2<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "85496<SeP>34995";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>root admin<SeP>root  <SeP>admin adminHW<SeP>admin hp.com<SeP>root root<SeP>root realtek<SeP>root epon<SeP>root Zxic521 ";
  const column3Data   = "5965<SeP>5882<SeP>1249<SeP>251<SeP>218<SeP>216<SeP>202<SeP>201<SeP>195<SeP>186";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b";
  const column2Data  = "6221<SeP>972<SeP>257<SeP>87<SeP>40<SeP>39<SeP>34<SeP>34<SeP>34<SeP>33";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
  let   column4Data  = "malicious<SeP>NA<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA<SeP>NA";
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
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://194.85.251.8<SeP>http://193.143.1.7<SeP>http://61.215.151.173<SeP>http://66.63.187.69<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>http://141.98.10.122<SeP>tftp://199.195.248.181";
  const column2Data  = "84<SeP>20<SeP>9<SeP>8<SeP>5<SeP>4<SeP>2<SeP>2<SeP>2<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "85496<SeP>34995";
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
        "name": "traffic between 2025-02-11 and 2025-03-12"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          16633,50
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
        "name": "scans between 2025-02-11 and 2025-03-12"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12292,38,
          16633,50
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
        "name": "attacks between 2025-02-11 and 2025-03-12"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6616,22,
          16633,50
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
        "name": "tráfico entre 2025-02-11 y 2025-03-12"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          16633,50
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
        "name": "escaneos entre 2025-02-11 y 2025-03-12"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12292,38,
          16633,50
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
        "name": "ataques entre 2025-02-11 y 2025-03-12"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6616,22,
          16633,50
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
  const labelsData       = "2025-02-11 00:00:00<SeP>2025-02-11 01:47:51<SeP>2025-02-11 03:35:42<SeP>2025-02-11 05:23:33<SeP>2025-02-11 07:11:24<SeP>2025-02-11 08:59:15<SeP>2025-02-11 10:47:06<SeP>2025-02-11 12:34:57<SeP>2025-02-11 14:22:48<SeP>2025-02-11 16:10:39<SeP>2025-02-11 17:58:30<SeP>2025-02-11 19:46:21<SeP>2025-02-11 21:34:12<SeP>2025-02-11 23:22:03<SeP>2025-02-12 01:09:54<SeP>2025-02-12 02:57:45<SeP>2025-02-12 04:45:36<SeP>2025-02-12 06:33:27<SeP>2025-02-12 08:21:18<SeP>2025-02-12 10:09:09<SeP>2025-02-12 11:57:00<SeP>2025-02-12 13:44:51<SeP>2025-02-12 15:32:42<SeP>2025-02-12 17:20:33<SeP>2025-02-12 19:08:24<SeP>2025-02-12 20:56:15<SeP>2025-02-12 22:44:06<SeP>2025-02-13 00:31:57<SeP>2025-02-13 02:19:48<SeP>2025-02-13 04:07:39<SeP>2025-02-13 05:55:30<SeP>2025-02-13 07:43:21<SeP>2025-02-13 09:31:12<SeP>2025-02-13 11:19:03<SeP>2025-02-13 13:06:54<SeP>2025-02-13 14:54:45<SeP>2025-02-13 16:42:36<SeP>2025-02-13 18:30:27<SeP>2025-02-13 20:18:18<SeP>2025-02-13 22:06:09<SeP>2025-02-13 23:54:00<SeP>2025-02-14 01:41:51<SeP>2025-02-14 03:29:42<SeP>2025-02-14 05:17:33<SeP>2025-02-14 07:05:24<SeP>2025-02-14 08:53:15<SeP>2025-02-14 10:41:06<SeP>2025-02-14 12:28:57<SeP>2025-02-14 14:16:48<SeP>2025-02-14 16:04:39<SeP>2025-02-14 17:52:30<SeP>2025-02-14 19:40:21<SeP>2025-02-14 21:28:12<SeP>2025-02-14 23:16:03<SeP>2025-02-15 01:03:54<SeP>2025-02-15 02:51:45<SeP>2025-02-15 04:39:36<SeP>2025-02-15 06:27:27<SeP>2025-02-15 08:15:18<SeP>2025-02-15 10:03:09<SeP>2025-02-15 11:51:00<SeP>2025-02-15 13:38:51<SeP>2025-02-15 15:26:42<SeP>2025-02-15 17:14:33<SeP>2025-02-15 19:02:24<SeP>2025-02-15 20:50:15<SeP>2025-02-15 22:38:06<SeP>2025-02-16 00:25:57<SeP>2025-02-16 02:13:48<SeP>2025-02-16 04:01:39<SeP>2025-02-16 05:49:30<SeP>2025-02-16 07:37:21<SeP>2025-02-16 09:25:12<SeP>2025-02-16 11:13:03<SeP>2025-02-16 13:00:54<SeP>2025-02-16 14:48:45<SeP>2025-02-16 16:36:36<SeP>2025-02-16 18:24:27<SeP>2025-02-16 20:12:18<SeP>2025-02-16 22:00:09<SeP>2025-02-16 23:48:00<SeP>2025-02-17 01:35:51<SeP>2025-02-17 03:23:42<SeP>2025-02-17 05:11:33<SeP>2025-02-17 06:59:24<SeP>2025-02-17 08:47:15<SeP>2025-02-17 10:35:06<SeP>2025-02-17 12:22:57<SeP>2025-02-17 14:10:48<SeP>2025-02-17 15:58:39<SeP>2025-02-17 17:46:30<SeP>2025-02-17 19:34:21<SeP>2025-02-17 21:22:12<SeP>2025-02-17 23:10:03<SeP>2025-02-18 00:57:54<SeP>2025-02-18 02:45:45<SeP>2025-02-18 04:33:36<SeP>2025-02-18 06:21:27<SeP>2025-02-18 08:09:18<SeP>2025-02-18 09:57:09<SeP>2025-02-18 11:45:00<SeP>2025-02-18 13:32:51<SeP>2025-02-18 15:20:42<SeP>2025-02-18 17:08:33<SeP>2025-02-18 18:56:24<SeP>2025-02-18 20:44:15<SeP>2025-02-18 22:32:06<SeP>2025-02-19 00:19:57<SeP>2025-02-19 02:07:48<SeP>2025-02-19 03:55:39<SeP>2025-02-19 05:43:30<SeP>2025-02-19 07:31:21<SeP>2025-02-19 09:19:12<SeP>2025-02-19 11:07:03<SeP>2025-02-19 12:54:54<SeP>2025-02-19 14:42:45<SeP>2025-02-19 16:30:36<SeP>2025-02-19 18:18:27<SeP>2025-02-19 20:06:18<SeP>2025-02-19 21:54:09<SeP>2025-02-19 23:42:00<SeP>2025-02-20 01:29:51<SeP>2025-02-20 03:17:42<SeP>2025-02-20 05:05:33<SeP>2025-02-20 06:53:24<SeP>2025-02-20 08:41:15<SeP>2025-02-20 10:29:06<SeP>2025-02-20 12:16:57<SeP>2025-02-20 14:04:48<SeP>2025-02-20 15:52:39<SeP>2025-02-20 17:40:30<SeP>2025-02-20 19:28:21<SeP>2025-02-20 21:16:12<SeP>2025-02-20 23:04:03<SeP>2025-02-21 00:51:54<SeP>2025-02-21 02:39:45<SeP>2025-02-21 04:27:36<SeP>2025-02-21 06:15:27<SeP>2025-02-21 08:03:18<SeP>2025-02-21 09:51:09<SeP>2025-02-21 11:39:00<SeP>2025-02-21 13:26:51<SeP>2025-02-21 15:14:42<SeP>2025-02-21 17:02:33<SeP>2025-02-21 18:50:24<SeP>2025-02-21 20:38:15<SeP>2025-02-21 22:26:06<SeP>2025-02-22 00:13:57<SeP>2025-02-22 02:01:48<SeP>2025-02-22 03:49:39<SeP>2025-02-22 05:37:30<SeP>2025-02-22 07:25:21<SeP>2025-02-22 09:13:12<SeP>2025-02-22 11:01:03<SeP>2025-02-22 12:48:54<SeP>2025-02-22 14:36:45<SeP>2025-02-22 16:24:36<SeP>2025-02-22 18:12:27<SeP>2025-02-22 20:00:18<SeP>2025-02-22 21:48:09<SeP>2025-02-22 23:36:00<SeP>2025-02-23 01:23:51<SeP>2025-02-23 03:11:42<SeP>2025-02-23 04:59:33<SeP>2025-02-23 06:47:24<SeP>2025-02-23 08:35:15<SeP>2025-02-23 10:23:06<SeP>2025-02-23 12:10:57<SeP>2025-02-23 13:58:48<SeP>2025-02-23 15:46:39<SeP>2025-02-23 17:34:30<SeP>2025-02-23 19:22:21<SeP>2025-02-23 21:10:12<SeP>2025-02-23 22:58:03<SeP>2025-02-24 00:45:54<SeP>2025-02-24 02:33:45<SeP>2025-02-24 04:21:36<SeP>2025-02-24 06:09:27<SeP>2025-02-24 07:57:18<SeP>2025-02-24 09:45:09<SeP>2025-02-24 11:33:00<SeP>2025-02-24 13:20:51<SeP>2025-02-24 15:08:42<SeP>2025-02-24 16:56:33<SeP>2025-02-24 18:44:24<SeP>2025-02-24 20:32:15<SeP>2025-02-24 22:20:06<SeP>2025-02-25 00:07:57<SeP>2025-02-25 01:55:48<SeP>2025-02-25 03:43:39<SeP>2025-02-25 05:31:30<SeP>2025-02-25 07:19:21<SeP>2025-02-25 09:07:12<SeP>2025-02-25 10:55:03<SeP>2025-02-25 12:42:54<SeP>2025-02-25 14:30:45<SeP>2025-02-25 16:18:36<SeP>2025-02-25 18:06:27<SeP>2025-02-25 19:54:18<SeP>2025-02-25 21:42:09<SeP>2025-02-25 23:30:00<SeP>2025-02-26 01:17:51<SeP>2025-02-26 03:05:42<SeP>2025-02-26 04:53:33<SeP>2025-02-26 06:41:24<SeP>2025-02-26 08:29:15<SeP>2025-02-26 10:17:06<SeP>2025-02-26 12:04:57<SeP>2025-02-26 13:52:48<SeP>2025-02-26 15:40:39<SeP>2025-02-26 17:28:30<SeP>2025-02-26 19:16:21<SeP>2025-02-26 21:04:12<SeP>2025-02-26 22:52:03<SeP>2025-02-27 00:39:54<SeP>2025-02-27 02:27:45<SeP>2025-02-27 04:15:36<SeP>2025-02-27 06:03:27<SeP>2025-02-27 07:51:18<SeP>2025-02-27 09:39:09<SeP>2025-02-27 11:27:00<SeP>2025-02-27 13:14:51<SeP>2025-02-27 15:02:42<SeP>2025-02-27 16:50:33<SeP>2025-02-27 18:38:24<SeP>2025-02-27 20:26:15<SeP>2025-02-27 22:14:06<SeP>2025-02-28 00:01:57<SeP>2025-02-28 01:49:48<SeP>2025-02-28 03:37:39<SeP>2025-02-28 05:25:30<SeP>2025-02-28 07:13:21<SeP>2025-02-28 09:01:12<SeP>2025-02-28 10:49:03<SeP>2025-02-28 12:36:54<SeP>2025-02-28 14:24:45<SeP>2025-02-28 16:12:36<SeP>2025-02-28 18:00:27<SeP>2025-02-28 19:48:18<SeP>2025-02-28 21:36:09<SeP>2025-02-28 23:24:00<SeP>2025-03-01 01:11:51<SeP>2025-03-01 02:59:42<SeP>2025-03-01 04:47:33<SeP>2025-03-01 06:35:24<SeP>2025-03-01 08:23:15<SeP>2025-03-01 10:11:06<SeP>2025-03-01 11:58:57<SeP>2025-03-01 13:46:48<SeP>2025-03-01 15:34:39<SeP>2025-03-01 17:22:30<SeP>2025-03-01 19:10:21<SeP>2025-03-01 20:58:12<SeP>2025-03-01 22:46:03<SeP>2025-03-02 00:33:54<SeP>2025-03-02 02:21:45<SeP>2025-03-02 04:09:36<SeP>2025-03-02 05:57:27<SeP>2025-03-02 07:45:18<SeP>2025-03-02 09:33:09<SeP>2025-03-02 11:21:00<SeP>2025-03-02 13:08:51<SeP>2025-03-02 14:56:42<SeP>2025-03-02 16:44:33<SeP>2025-03-02 18:32:24<SeP>2025-03-02 20:20:15<SeP>2025-03-02 22:08:06<SeP>2025-03-02 23:55:57<SeP>2025-03-03 01:43:48<SeP>2025-03-03 03:31:39<SeP>2025-03-03 05:19:30<SeP>2025-03-03 07:07:21<SeP>2025-03-03 08:55:12<SeP>2025-03-03 10:43:03<SeP>2025-03-03 12:30:54<SeP>2025-03-03 14:18:45<SeP>2025-03-03 16:06:36<SeP>2025-03-03 17:54:27<SeP>2025-03-03 19:42:18<SeP>2025-03-03 21:30:09<SeP>2025-03-03 23:18:00<SeP>2025-03-04 01:05:51<SeP>2025-03-04 02:53:42<SeP>2025-03-04 04:41:33<SeP>2025-03-04 06:29:24<SeP>2025-03-04 08:17:15<SeP>2025-03-04 10:05:06<SeP>2025-03-04 11:52:57<SeP>2025-03-04 13:40:48<SeP>2025-03-04 15:28:39<SeP>2025-03-04 17:16:30<SeP>2025-03-04 19:04:21<SeP>2025-03-04 20:52:12<SeP>2025-03-04 22:40:03<SeP>2025-03-05 00:27:54<SeP>2025-03-05 02:15:45<SeP>2025-03-05 04:03:36<SeP>2025-03-05 05:51:27<SeP>2025-03-05 07:39:18<SeP>2025-03-05 09:27:09<SeP>2025-03-05 11:15:00<SeP>2025-03-05 13:02:51<SeP>2025-03-05 14:50:42<SeP>2025-03-05 16:38:33<SeP>2025-03-05 18:26:24<SeP>2025-03-05 20:14:15<SeP>2025-03-05 22:02:06<SeP>2025-03-05 23:49:57<SeP>2025-03-06 01:37:48<SeP>2025-03-06 03:25:39<SeP>2025-03-06 05:13:30<SeP>2025-03-06 07:01:21<SeP>2025-03-06 08:49:12<SeP>2025-03-06 10:37:03<SeP>2025-03-06 12:24:54<SeP>2025-03-06 14:12:45<SeP>2025-03-06 16:00:36<SeP>2025-03-06 17:48:27<SeP>2025-03-06 19:36:18<SeP>2025-03-06 21:24:09<SeP>2025-03-06 23:12:00<SeP>2025-03-07 00:59:51<SeP>2025-03-07 02:47:42<SeP>2025-03-07 04:35:33<SeP>2025-03-07 06:23:24<SeP>2025-03-07 08:11:15<SeP>2025-03-07 09:59:06<SeP>2025-03-07 11:46:57<SeP>2025-03-07 13:34:48<SeP>2025-03-07 15:22:39<SeP>2025-03-07 17:10:30<SeP>2025-03-07 18:58:21<SeP>2025-03-07 20:46:12<SeP>2025-03-07 22:34:03<SeP>2025-03-08 00:21:54<SeP>2025-03-08 02:09:45<SeP>2025-03-08 03:57:36<SeP>2025-03-08 05:45:27<SeP>2025-03-08 07:33:18<SeP>2025-03-08 09:21:09<SeP>2025-03-08 11:09:00<SeP>2025-03-08 12:56:51<SeP>2025-03-08 14:44:42<SeP>2025-03-08 16:32:33<SeP>2025-03-08 18:20:24<SeP>2025-03-08 20:08:15<SeP>2025-03-08 21:56:06<SeP>2025-03-08 23:43:57<SeP>2025-03-09 01:31:48<SeP>2025-03-09 04:19:39<SeP>2025-03-09 06:07:30<SeP>2025-03-09 07:55:21<SeP>2025-03-09 09:43:12<SeP>2025-03-09 11:31:03<SeP>2025-03-09 13:18:54<SeP>2025-03-09 15:06:45<SeP>2025-03-09 16:54:36<SeP>2025-03-09 18:42:27<SeP>2025-03-09 20:30:18<SeP>2025-03-09 22:18:09<SeP>2025-03-10 00:06:00<SeP>2025-03-10 01:53:51<SeP>2025-03-10 03:41:42<SeP>2025-03-10 05:29:33<SeP>2025-03-10 07:17:24<SeP>2025-03-10 09:05:15<SeP>2025-03-10 10:53:06<SeP>2025-03-10 12:40:57<SeP>2025-03-10 14:28:48<SeP>2025-03-10 16:16:39<SeP>2025-03-10 18:04:30<SeP>2025-03-10 19:52:21<SeP>2025-03-10 21:40:12<SeP>2025-03-10 23:28:03<SeP>2025-03-11 01:15:54<SeP>2025-03-11 03:03:45<SeP>2025-03-11 04:51:36<SeP>2025-03-11 06:39:27<SeP>2025-03-11 08:27:18<SeP>2025-03-11 10:15:09<SeP>2025-03-11 12:03:00<SeP>2025-03-11 13:50:51<SeP>2025-03-11 15:38:42<SeP>2025-03-11 17:26:33<SeP>2025-03-11 19:14:24<SeP>2025-03-11 21:02:15<SeP>2025-03-11 22:50:06<SeP>2025-03-12 00:37:57<SeP>2025-03-12 02:25:48<SeP>2025-03-12 04:13:39<SeP>2025-03-12 06:01:30<SeP>2025-03-12 07:49:21<SeP>2025-03-12 09:37:12<SeP>2025-03-12 11:25:03<SeP>2025-03-12 13:12:54<SeP>2025-03-12 15:00:45<SeP>2025-03-12 16:48:36<SeP>2025-03-12 18:36:27<SeP>2025-03-12 20:24:18<SeP>2025-03-12 22:12:09";
  const item1Label       = "Scans";
  const item1Data        = "39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>120<SeP>92<SeP>150<SeP>94<SeP>31<SeP>116<SeP>66<SeP>72<SeP>114<SeP>58<SeP>84<SeP>51<SeP>78<SeP>67<SeP>58<SeP>110<SeP>188<SeP>45<SeP>99<SeP>103<SeP>113<SeP>107<SeP>49<SeP>82<SeP>68<SeP>171<SeP>67<SeP>106<SeP>61<SeP>76<SeP>99<SeP>73<SeP>78<SeP>86<SeP>76<SeP>151<SeP>95<SeP>206<SeP>54<SeP>61<SeP>58<SeP>88<SeP>42<SeP>97<SeP>90<SeP>93<SeP>80<SeP>68<SeP>108<SeP>159<SeP>175<SeP>103<SeP>58<SeP>49<SeP>42<SeP>89<SeP>84<SeP>111<SeP>73<SeP>53<SeP>74<SeP>59<SeP>117<SeP>88<SeP>54<SeP>86<SeP>71<SeP>83<SeP>44<SeP>82<SeP>153<SeP>116<SeP>74<SeP>59<SeP>62<SeP>70<SeP>82<SeP>93<SeP>81<SeP>82<SeP>36<SeP>17<SeP>58<SeP>86<SeP>137<SeP>75<SeP>148<SeP>38<SeP>117<SeP>71<SeP>152<SeP>77<SeP>68<SeP>89<SeP>77<SeP>29<SeP>76<SeP>78<SeP>45<SeP>50<SeP>97<SeP>96<SeP>159<SeP>113<SeP>79<SeP>67<SeP>48<SeP>69<SeP>70<SeP>44<SeP>86<SeP>91<SeP>98<SeP>83<SeP>75<SeP>98<SeP>56<SeP>95<SeP>132<SeP>71<SeP>43<SeP>58<SeP>43<SeP>79<SeP>83<SeP>97<SeP>66<SeP>106<SeP>131<SeP>59<SeP>106<SeP>67<SeP>48<SeP>73<SeP>89<SeP>69<SeP>72<SeP>136<SeP>65<SeP>85<SeP>93<SeP>128<SeP>80<SeP>62<SeP>42<SeP>46<SeP>58<SeP>91<SeP>52<SeP>61<SeP>105<SeP>66<SeP>46<SeP>97<SeP>118<SeP>113<SeP>59<SeP>40<SeP>23<SeP>60<SeP>189<SeP>71<SeP>132<SeP>61<SeP>66<SeP>120<SeP>50<SeP>62<SeP>117<SeP>62<SeP>196<SeP>65<SeP>44<SeP>135<SeP>72<SeP>76<SeP>68<SeP>90<SeP>119<SeP>96<SeP>81<SeP>107<SeP>52<SeP>94<SeP>79<SeP>64<SeP>85<SeP>56<SeP>127<SeP>111<SeP>87<SeP>85<SeP>87<SeP>126<SeP>62<SeP>127<SeP>99<SeP>48<SeP>60<SeP>131<SeP>144<SeP>72<SeP>176<SeP>87<SeP>130<SeP>46<SeP>76<SeP>81<SeP>73<SeP>82<SeP>86<SeP>39<SeP>73<SeP>68<SeP>61<SeP>56<SeP>64<SeP>86<SeP>120<SeP>94<SeP>65<SeP>97<SeP>60<SeP>45<SeP>51<SeP>94<SeP>46<SeP>52<SeP>53<SeP>74<SeP>87<SeP>91<SeP>84<SeP>65<SeP>52<SeP>41<SeP>81<SeP>192<SeP>82<SeP>44<SeP>76<SeP>73<SeP>109<SeP>59<SeP>39<SeP>45<SeP>170<SeP>103<SeP>46<SeP>48<SeP>56<SeP>87<SeP>52<SeP>38<SeP>61<SeP>144<SeP>75<SeP>68<SeP>69<SeP>105<SeP>56<SeP>61<SeP>28<SeP>38<SeP>48<SeP>27<SeP>81<SeP>68<SeP>74<SeP>65<SeP>71<SeP>79<SeP>253<SeP>47<SeP>30<SeP>68<SeP>75<SeP>127<SeP>131<SeP>50<SeP>53<SeP>67<SeP>194<SeP>44<SeP>97<SeP>62<SeP>107<SeP>19<SeP>116<SeP>20<SeP>49<SeP>54<SeP>70<SeP>40<SeP>99<SeP>93<SeP>128<SeP>101<SeP>44<SeP>80<SeP>39<SeP>54<SeP>116<SeP>119<SeP>49<SeP>72<SeP>121<SeP>123<SeP>35<SeP>79<SeP>50<SeP>66<SeP>398<SeP>117<SeP>23<SeP>48<SeP>17<SeP>53<SeP>38<SeP>71<SeP>78<SeP>73<SeP>193<SeP>73<SeP>77<SeP>360<SeP>47<SeP>100<SeP>269<SeP>133<SeP>190<SeP>53<SeP>61<SeP>64<SeP>39<SeP>69<SeP>46<SeP>53<SeP>56<SeP>17<SeP>68<SeP>67<SeP>85<SeP>61<SeP>69<SeP>44<SeP>57<SeP>55<SeP>28<SeP>31<SeP>33<SeP>119<SeP>28<SeP>791<SeP>58<SeP>83<SeP>91<SeP>115<SeP>125<SeP>92<SeP>30<SeP>26<SeP>33<SeP>130<SeP>122<SeP>56<SeP>122<SeP>46<SeP>108<SeP>20<SeP>35<SeP>53<SeP>158<SeP>88<SeP>55<SeP>40<SeP>58<SeP>60<SeP>104<SeP>45<SeP>74<SeP>83<SeP>86<SeP>81<SeP>40<SeP>119<SeP>43<SeP>106<SeP>168<SeP>83<SeP>98<SeP>123";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "229<SeP>170<SeP>332<SeP>81<SeP>224<SeP>170<SeP>137<SeP>47<SeP>501<SeP>113<SeP>307<SeP>69<SeP>104<SeP>363<SeP>314<SeP>397<SeP>2752<SeP>3303<SeP>935<SeP>358<SeP>224<SeP>286<SeP>673<SeP>138<SeP>404<SeP>127<SeP>10<SeP>66<SeP>116<SeP>554<SeP>57<SeP>294<SeP>167<SeP>217<SeP>168<SeP>814<SeP>404<SeP>401<SeP>212<SeP>260<SeP>163<SeP>200<SeP>238<SeP>456<SeP>231<SeP>435<SeP>104<SeP>321<SeP>271<SeP>238<SeP>321<SeP>213<SeP>155<SeP>96<SeP>194<SeP>125<SeP>262<SeP>651<SeP>60<SeP>205<SeP>170<SeP>231<SeP>51<SeP>83<SeP>272<SeP>253<SeP>127<SeP>137<SeP>72<SeP>24<SeP>325<SeP>254<SeP>190<SeP>129<SeP>284<SeP>273<SeP>124<SeP>488<SeP>365<SeP>215<SeP>300<SeP>229<SeP>282<SeP>198<SeP>356<SeP>340<SeP>169<SeP>380<SeP>92<SeP>47<SeP>311<SeP>343<SeP>53<SeP>214<SeP>475<SeP>141<SeP>78<SeP>435<SeP>64<SeP>192<SeP>243<SeP>260<SeP>241<SeP>169<SeP>299<SeP>79<SeP>123<SeP>170<SeP>125<SeP>544<SeP>131<SeP>39<SeP>109<SeP>99<SeP>8<SeP>101<SeP>174<SeP>319<SeP>177<SeP>261<SeP>84<SeP>283<SeP>124<SeP>116<SeP>117<SeP>83<SeP>9<SeP>139<SeP>237<SeP>153<SeP>377<SeP>786<SeP>424<SeP>273<SeP>745<SeP>274<SeP>582<SeP>189<SeP>468<SeP>494<SeP>244<SeP>519<SeP>315<SeP>683<SeP>807<SeP>981<SeP>570<SeP>317<SeP>306<SeP>250<SeP>292<SeP>406<SeP>816<SeP>643<SeP>345<SeP>483<SeP>273<SeP>550<SeP>704<SeP>614<SeP>441<SeP>374<SeP>535<SeP>772<SeP>211<SeP>319<SeP>508<SeP>722<SeP>577<SeP>563<SeP>403<SeP>81<SeP>83<SeP>343<SeP>63<SeP>202<SeP>419<SeP>215<SeP>66<SeP>350<SeP>117<SeP>59<SeP>86<SeP>299<SeP>201<SeP>229<SeP>257<SeP>244<SeP>394<SeP>59<SeP>126<SeP>240<SeP>174<SeP>401<SeP>352<SeP>103<SeP>182<SeP>129<SeP>111<SeP>65<SeP>198<SeP>44<SeP>74<SeP>322<SeP>71<SeP>135<SeP>156<SeP>84<SeP>62<SeP>66<SeP>62<SeP>212<SeP>329<SeP>323<SeP>47<SeP>250<SeP>155<SeP>490<SeP>92<SeP>152<SeP>158<SeP>206<SeP>224<SeP>31<SeP>38<SeP>144<SeP>121<SeP>226<SeP>112<SeP>158<SeP>329<SeP>21<SeP>379<SeP>157<SeP>353<SeP>61<SeP>64<SeP>48<SeP>49<SeP>96<SeP>85<SeP>31<SeP>19<SeP>80<SeP>103<SeP>32<SeP>75<SeP>71<SeP>193<SeP>114<SeP>93<SeP>24<SeP>263<SeP>73<SeP>527<SeP>29<SeP>117<SeP>15<SeP>310<SeP>28<SeP>20<SeP>213<SeP>67<SeP>86<SeP>40<SeP>192<SeP>45<SeP>115<SeP>297<SeP>85<SeP>33<SeP>91<SeP>49<SeP>36<SeP>393<SeP>142<SeP>51<SeP>84<SeP>64<SeP>211<SeP>97<SeP>41<SeP>447<SeP>29<SeP>29<SeP>16<SeP>259<SeP>82<SeP>38<SeP>78<SeP>65<SeP>63<SeP>87<SeP>280<SeP>134<SeP>143<SeP>79<SeP>57<SeP>83<SeP>34<SeP>32<SeP>38<SeP>307<SeP>51<SeP>140<SeP>146<SeP>123<SeP>91<SeP>19<SeP>134<SeP>135<SeP>172<SeP>82<SeP>114<SeP>89<SeP>38<SeP>120<SeP>83<SeP>118<SeP>152<SeP>50<SeP>172<SeP>59<SeP>424<SeP>352<SeP>68<SeP>140<SeP>153<SeP>35<SeP>41<SeP>130<SeP>46<SeP>97<SeP>102<SeP>126<SeP>177<SeP>25<SeP>13<SeP>83<SeP>189<SeP>48<SeP>78<SeP>8<SeP>28<SeP>21<SeP>285<SeP>110<SeP>27<SeP>160<SeP>109<SeP>11<SeP>25<SeP>80<SeP>49<SeP>53<SeP>281<SeP>57<SeP>17<SeP>35<SeP>502<SeP>126<SeP>558<SeP>343<SeP>43<SeP>75<SeP>76<SeP>48<SeP>137<SeP>38<SeP>121<SeP>28<SeP>293<SeP>211<SeP>304<SeP>44<SeP>108<SeP>26<SeP>226<SeP>39<SeP>19<SeP>176<SeP>283<SeP>398<SeP>57<SeP>39<SeP>42<SeP>206<SeP>180<SeP>57<SeP>10<SeP>106<SeP>116<SeP>120<SeP>212<SeP>122<SeP>190<SeP>321<SeP>154<SeP>147<SeP>170";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-11 00:00:00<SeP>2025-02-11 01:47:51<SeP>2025-02-11 03:35:42<SeP>2025-02-11 05:23:33<SeP>2025-02-11 07:11:24<SeP>2025-02-11 08:59:15<SeP>2025-02-11 10:47:06<SeP>2025-02-11 12:34:57<SeP>2025-02-11 14:22:48<SeP>2025-02-11 16:10:39<SeP>2025-02-11 17:58:30<SeP>2025-02-11 19:46:21<SeP>2025-02-11 21:34:12<SeP>2025-02-11 23:22:03<SeP>2025-02-12 01:09:54<SeP>2025-02-12 02:57:45<SeP>2025-02-12 04:45:36<SeP>2025-02-12 06:33:27<SeP>2025-02-12 08:21:18<SeP>2025-02-12 10:09:09<SeP>2025-02-12 11:57:00<SeP>2025-02-12 13:44:51<SeP>2025-02-12 15:32:42<SeP>2025-02-12 17:20:33<SeP>2025-02-12 19:08:24<SeP>2025-02-12 20:56:15<SeP>2025-02-12 22:44:06<SeP>2025-02-13 00:31:57<SeP>2025-02-13 02:19:48<SeP>2025-02-13 04:07:39<SeP>2025-02-13 05:55:30<SeP>2025-02-13 07:43:21<SeP>2025-02-13 09:31:12<SeP>2025-02-13 11:19:03<SeP>2025-02-13 13:06:54<SeP>2025-02-13 14:54:45<SeP>2025-02-13 16:42:36<SeP>2025-02-13 18:30:27<SeP>2025-02-13 20:18:18<SeP>2025-02-13 22:06:09<SeP>2025-02-13 23:54:00<SeP>2025-02-14 01:41:51<SeP>2025-02-14 03:29:42<SeP>2025-02-14 05:17:33<SeP>2025-02-14 07:05:24<SeP>2025-02-14 08:53:15<SeP>2025-02-14 10:41:06<SeP>2025-02-14 12:28:57<SeP>2025-02-14 14:16:48<SeP>2025-02-14 16:04:39<SeP>2025-02-14 17:52:30<SeP>2025-02-14 19:40:21<SeP>2025-02-14 21:28:12<SeP>2025-02-14 23:16:03<SeP>2025-02-15 01:03:54<SeP>2025-02-15 02:51:45<SeP>2025-02-15 04:39:36<SeP>2025-02-15 06:27:27<SeP>2025-02-15 08:15:18<SeP>2025-02-15 10:03:09<SeP>2025-02-15 11:51:00<SeP>2025-02-15 13:38:51<SeP>2025-02-15 15:26:42<SeP>2025-02-15 17:14:33<SeP>2025-02-15 19:02:24<SeP>2025-02-15 20:50:15<SeP>2025-02-15 22:38:06<SeP>2025-02-16 00:25:57<SeP>2025-02-16 02:13:48<SeP>2025-02-16 04:01:39<SeP>2025-02-16 05:49:30<SeP>2025-02-16 07:37:21<SeP>2025-02-16 09:25:12<SeP>2025-02-16 11:13:03<SeP>2025-02-16 13:00:54<SeP>2025-02-16 14:48:45<SeP>2025-02-16 16:36:36<SeP>2025-02-16 18:24:27<SeP>2025-02-16 20:12:18<SeP>2025-02-16 22:00:09<SeP>2025-02-16 23:48:00<SeP>2025-02-17 01:35:51<SeP>2025-02-17 03:23:42<SeP>2025-02-17 05:11:33<SeP>2025-02-17 06:59:24<SeP>2025-02-17 08:47:15<SeP>2025-02-17 10:35:06<SeP>2025-02-17 12:22:57<SeP>2025-02-17 14:10:48<SeP>2025-02-17 15:58:39<SeP>2025-02-17 17:46:30<SeP>2025-02-17 19:34:21<SeP>2025-02-17 21:22:12<SeP>2025-02-17 23:10:03<SeP>2025-02-18 00:57:54<SeP>2025-02-18 02:45:45<SeP>2025-02-18 04:33:36<SeP>2025-02-18 06:21:27<SeP>2025-02-18 08:09:18<SeP>2025-02-18 09:57:09<SeP>2025-02-18 11:45:00<SeP>2025-02-18 13:32:51<SeP>2025-02-18 15:20:42<SeP>2025-02-18 17:08:33<SeP>2025-02-18 18:56:24<SeP>2025-02-18 20:44:15<SeP>2025-02-18 22:32:06<SeP>2025-02-19 00:19:57<SeP>2025-02-19 02:07:48<SeP>2025-02-19 03:55:39<SeP>2025-02-19 05:43:30<SeP>2025-02-19 07:31:21<SeP>2025-02-19 09:19:12<SeP>2025-02-19 11:07:03<SeP>2025-02-19 12:54:54<SeP>2025-02-19 14:42:45<SeP>2025-02-19 16:30:36<SeP>2025-02-19 18:18:27<SeP>2025-02-19 20:06:18<SeP>2025-02-19 21:54:09<SeP>2025-02-19 23:42:00<SeP>2025-02-20 01:29:51<SeP>2025-02-20 03:17:42<SeP>2025-02-20 05:05:33<SeP>2025-02-20 06:53:24<SeP>2025-02-20 08:41:15<SeP>2025-02-20 10:29:06<SeP>2025-02-20 12:16:57<SeP>2025-02-20 14:04:48<SeP>2025-02-20 15:52:39<SeP>2025-02-20 17:40:30<SeP>2025-02-20 19:28:21<SeP>2025-02-20 21:16:12<SeP>2025-02-20 23:04:03<SeP>2025-02-21 00:51:54<SeP>2025-02-21 02:39:45<SeP>2025-02-21 04:27:36<SeP>2025-02-21 06:15:27<SeP>2025-02-21 08:03:18<SeP>2025-02-21 09:51:09<SeP>2025-02-21 11:39:00<SeP>2025-02-21 13:26:51<SeP>2025-02-21 15:14:42<SeP>2025-02-21 17:02:33<SeP>2025-02-21 18:50:24<SeP>2025-02-21 20:38:15<SeP>2025-02-21 22:26:06<SeP>2025-02-22 00:13:57<SeP>2025-02-22 02:01:48<SeP>2025-02-22 03:49:39<SeP>2025-02-22 05:37:30<SeP>2025-02-22 07:25:21<SeP>2025-02-22 09:13:12<SeP>2025-02-22 11:01:03<SeP>2025-02-22 12:48:54<SeP>2025-02-22 14:36:45<SeP>2025-02-22 16:24:36<SeP>2025-02-22 18:12:27<SeP>2025-02-22 20:00:18<SeP>2025-02-22 21:48:09<SeP>2025-02-22 23:36:00<SeP>2025-02-23 01:23:51<SeP>2025-02-23 03:11:42<SeP>2025-02-23 04:59:33<SeP>2025-02-23 06:47:24<SeP>2025-02-23 08:35:15<SeP>2025-02-23 10:23:06<SeP>2025-02-23 12:10:57<SeP>2025-02-23 13:58:48<SeP>2025-02-23 15:46:39<SeP>2025-02-23 17:34:30<SeP>2025-02-23 19:22:21<SeP>2025-02-23 21:10:12<SeP>2025-02-23 22:58:03<SeP>2025-02-24 00:45:54<SeP>2025-02-24 02:33:45<SeP>2025-02-24 04:21:36<SeP>2025-02-24 06:09:27<SeP>2025-02-24 07:57:18<SeP>2025-02-24 09:45:09<SeP>2025-02-24 11:33:00<SeP>2025-02-24 13:20:51<SeP>2025-02-24 15:08:42<SeP>2025-02-24 16:56:33<SeP>2025-02-24 18:44:24<SeP>2025-02-24 20:32:15<SeP>2025-02-24 22:20:06<SeP>2025-02-25 00:07:57<SeP>2025-02-25 01:55:48<SeP>2025-02-25 03:43:39<SeP>2025-02-25 05:31:30<SeP>2025-02-25 07:19:21<SeP>2025-02-25 09:07:12<SeP>2025-02-25 10:55:03<SeP>2025-02-25 12:42:54<SeP>2025-02-25 14:30:45<SeP>2025-02-25 16:18:36<SeP>2025-02-25 18:06:27<SeP>2025-02-25 19:54:18<SeP>2025-02-25 21:42:09<SeP>2025-02-25 23:30:00<SeP>2025-02-26 01:17:51<SeP>2025-02-26 03:05:42<SeP>2025-02-26 04:53:33<SeP>2025-02-26 06:41:24<SeP>2025-02-26 08:29:15<SeP>2025-02-26 10:17:06<SeP>2025-02-26 12:04:57<SeP>2025-02-26 13:52:48<SeP>2025-02-26 15:40:39<SeP>2025-02-26 17:28:30<SeP>2025-02-26 19:16:21<SeP>2025-02-26 21:04:12<SeP>2025-02-26 22:52:03<SeP>2025-02-27 00:39:54<SeP>2025-02-27 02:27:45<SeP>2025-02-27 04:15:36<SeP>2025-02-27 06:03:27<SeP>2025-02-27 07:51:18<SeP>2025-02-27 09:39:09<SeP>2025-02-27 11:27:00<SeP>2025-02-27 13:14:51<SeP>2025-02-27 15:02:42<SeP>2025-02-27 16:50:33<SeP>2025-02-27 18:38:24<SeP>2025-02-27 20:26:15<SeP>2025-02-27 22:14:06<SeP>2025-02-28 00:01:57<SeP>2025-02-28 01:49:48<SeP>2025-02-28 03:37:39<SeP>2025-02-28 05:25:30<SeP>2025-02-28 07:13:21<SeP>2025-02-28 09:01:12<SeP>2025-02-28 10:49:03<SeP>2025-02-28 12:36:54<SeP>2025-02-28 14:24:45<SeP>2025-02-28 16:12:36<SeP>2025-02-28 18:00:27<SeP>2025-02-28 19:48:18<SeP>2025-02-28 21:36:09<SeP>2025-02-28 23:24:00<SeP>2025-03-01 01:11:51<SeP>2025-03-01 02:59:42<SeP>2025-03-01 04:47:33<SeP>2025-03-01 06:35:24<SeP>2025-03-01 08:23:15<SeP>2025-03-01 10:11:06<SeP>2025-03-01 11:58:57<SeP>2025-03-01 13:46:48<SeP>2025-03-01 15:34:39<SeP>2025-03-01 17:22:30<SeP>2025-03-01 19:10:21<SeP>2025-03-01 20:58:12<SeP>2025-03-01 22:46:03<SeP>2025-03-02 00:33:54<SeP>2025-03-02 02:21:45<SeP>2025-03-02 04:09:36<SeP>2025-03-02 05:57:27<SeP>2025-03-02 07:45:18<SeP>2025-03-02 09:33:09<SeP>2025-03-02 11:21:00<SeP>2025-03-02 13:08:51<SeP>2025-03-02 14:56:42<SeP>2025-03-02 16:44:33<SeP>2025-03-02 18:32:24<SeP>2025-03-02 20:20:15<SeP>2025-03-02 22:08:06<SeP>2025-03-02 23:55:57<SeP>2025-03-03 01:43:48<SeP>2025-03-03 03:31:39<SeP>2025-03-03 05:19:30<SeP>2025-03-03 07:07:21<SeP>2025-03-03 08:55:12<SeP>2025-03-03 10:43:03<SeP>2025-03-03 12:30:54<SeP>2025-03-03 14:18:45<SeP>2025-03-03 16:06:36<SeP>2025-03-03 17:54:27<SeP>2025-03-03 19:42:18<SeP>2025-03-03 21:30:09<SeP>2025-03-03 23:18:00<SeP>2025-03-04 01:05:51<SeP>2025-03-04 02:53:42<SeP>2025-03-04 04:41:33<SeP>2025-03-04 06:29:24<SeP>2025-03-04 08:17:15<SeP>2025-03-04 10:05:06<SeP>2025-03-04 11:52:57<SeP>2025-03-04 13:40:48<SeP>2025-03-04 15:28:39<SeP>2025-03-04 17:16:30<SeP>2025-03-04 19:04:21<SeP>2025-03-04 20:52:12<SeP>2025-03-04 22:40:03<SeP>2025-03-05 00:27:54<SeP>2025-03-05 02:15:45<SeP>2025-03-05 04:03:36<SeP>2025-03-05 05:51:27<SeP>2025-03-05 07:39:18<SeP>2025-03-05 09:27:09<SeP>2025-03-05 11:15:00<SeP>2025-03-05 13:02:51<SeP>2025-03-05 14:50:42<SeP>2025-03-05 16:38:33<SeP>2025-03-05 18:26:24<SeP>2025-03-05 20:14:15<SeP>2025-03-05 22:02:06<SeP>2025-03-05 23:49:57<SeP>2025-03-06 01:37:48<SeP>2025-03-06 03:25:39<SeP>2025-03-06 05:13:30<SeP>2025-03-06 07:01:21<SeP>2025-03-06 08:49:12<SeP>2025-03-06 10:37:03<SeP>2025-03-06 12:24:54<SeP>2025-03-06 14:12:45<SeP>2025-03-06 16:00:36<SeP>2025-03-06 17:48:27<SeP>2025-03-06 19:36:18<SeP>2025-03-06 21:24:09<SeP>2025-03-06 23:12:00<SeP>2025-03-07 00:59:51<SeP>2025-03-07 02:47:42<SeP>2025-03-07 04:35:33<SeP>2025-03-07 06:23:24<SeP>2025-03-07 08:11:15<SeP>2025-03-07 09:59:06<SeP>2025-03-07 11:46:57<SeP>2025-03-07 13:34:48<SeP>2025-03-07 15:22:39<SeP>2025-03-07 17:10:30<SeP>2025-03-07 18:58:21<SeP>2025-03-07 20:46:12<SeP>2025-03-07 22:34:03<SeP>2025-03-08 00:21:54<SeP>2025-03-08 02:09:45<SeP>2025-03-08 03:57:36<SeP>2025-03-08 05:45:27<SeP>2025-03-08 07:33:18<SeP>2025-03-08 09:21:09<SeP>2025-03-08 11:09:00<SeP>2025-03-08 12:56:51<SeP>2025-03-08 14:44:42<SeP>2025-03-08 16:32:33<SeP>2025-03-08 18:20:24<SeP>2025-03-08 20:08:15<SeP>2025-03-08 21:56:06<SeP>2025-03-08 23:43:57<SeP>2025-03-09 01:31:48<SeP>2025-03-09 04:19:39<SeP>2025-03-09 06:07:30<SeP>2025-03-09 07:55:21<SeP>2025-03-09 09:43:12<SeP>2025-03-09 11:31:03<SeP>2025-03-09 13:18:54<SeP>2025-03-09 15:06:45<SeP>2025-03-09 16:54:36<SeP>2025-03-09 18:42:27<SeP>2025-03-09 20:30:18<SeP>2025-03-09 22:18:09<SeP>2025-03-10 00:06:00<SeP>2025-03-10 01:53:51<SeP>2025-03-10 03:41:42<SeP>2025-03-10 05:29:33<SeP>2025-03-10 07:17:24<SeP>2025-03-10 09:05:15<SeP>2025-03-10 10:53:06<SeP>2025-03-10 12:40:57<SeP>2025-03-10 14:28:48<SeP>2025-03-10 16:16:39<SeP>2025-03-10 18:04:30<SeP>2025-03-10 19:52:21<SeP>2025-03-10 21:40:12<SeP>2025-03-10 23:28:03<SeP>2025-03-11 01:15:54<SeP>2025-03-11 03:03:45<SeP>2025-03-11 04:51:36<SeP>2025-03-11 06:39:27<SeP>2025-03-11 08:27:18<SeP>2025-03-11 10:15:09<SeP>2025-03-11 12:03:00<SeP>2025-03-11 13:50:51<SeP>2025-03-11 15:38:42<SeP>2025-03-11 17:26:33<SeP>2025-03-11 19:14:24<SeP>2025-03-11 21:02:15<SeP>2025-03-11 22:50:06<SeP>2025-03-12 00:37:57<SeP>2025-03-12 02:25:48<SeP>2025-03-12 04:13:39<SeP>2025-03-12 06:01:30<SeP>2025-03-12 07:49:21<SeP>2025-03-12 09:37:12<SeP>2025-03-12 11:25:03<SeP>2025-03-12 13:12:54<SeP>2025-03-12 15:00:45<SeP>2025-03-12 16:48:36<SeP>2025-03-12 18:36:27<SeP>2025-03-12 20:24:18<SeP>2025-03-12 22:12:09";
  const itemLabel       = "Scans";
  const itemData        = "39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>120<SeP>92<SeP>150<SeP>94<SeP>31<SeP>116<SeP>66<SeP>72<SeP>114<SeP>58<SeP>84<SeP>51<SeP>78<SeP>67<SeP>58<SeP>110<SeP>188<SeP>45<SeP>99<SeP>103<SeP>113<SeP>107<SeP>49<SeP>82<SeP>68<SeP>171<SeP>67<SeP>106<SeP>61<SeP>76<SeP>99<SeP>73<SeP>78<SeP>86<SeP>76<SeP>151<SeP>95<SeP>206<SeP>54<SeP>61<SeP>58<SeP>88<SeP>42<SeP>97<SeP>90<SeP>93<SeP>80<SeP>68<SeP>108<SeP>159<SeP>175<SeP>103<SeP>58<SeP>49<SeP>42<SeP>89<SeP>84<SeP>111<SeP>73<SeP>53<SeP>74<SeP>59<SeP>117<SeP>88<SeP>54<SeP>86<SeP>71<SeP>83<SeP>44<SeP>82<SeP>153<SeP>116<SeP>74<SeP>59<SeP>62<SeP>70<SeP>82<SeP>93<SeP>81<SeP>82<SeP>36<SeP>17<SeP>58<SeP>86<SeP>137<SeP>75<SeP>148<SeP>38<SeP>117<SeP>71<SeP>152<SeP>77<SeP>68<SeP>89<SeP>77<SeP>29<SeP>76<SeP>78<SeP>45<SeP>50<SeP>97<SeP>96<SeP>159<SeP>113<SeP>79<SeP>67<SeP>48<SeP>69<SeP>70<SeP>44<SeP>86<SeP>91<SeP>98<SeP>83<SeP>75<SeP>98<SeP>56<SeP>95<SeP>132<SeP>71<SeP>43<SeP>58<SeP>43<SeP>79<SeP>83<SeP>97<SeP>66<SeP>106<SeP>131<SeP>59<SeP>106<SeP>67<SeP>48<SeP>73<SeP>89<SeP>69<SeP>72<SeP>136<SeP>65<SeP>85<SeP>93<SeP>128<SeP>80<SeP>62<SeP>42<SeP>46<SeP>58<SeP>91<SeP>52<SeP>61<SeP>105<SeP>66<SeP>46<SeP>97<SeP>118<SeP>113<SeP>59<SeP>40<SeP>23<SeP>60<SeP>189<SeP>71<SeP>132<SeP>61<SeP>66<SeP>120<SeP>50<SeP>62<SeP>117<SeP>62<SeP>196<SeP>65<SeP>44<SeP>135<SeP>72<SeP>76<SeP>68<SeP>90<SeP>119<SeP>96<SeP>81<SeP>107<SeP>52<SeP>94<SeP>79<SeP>64<SeP>85<SeP>56<SeP>127<SeP>111<SeP>87<SeP>85<SeP>87<SeP>126<SeP>62<SeP>127<SeP>99<SeP>48<SeP>60<SeP>131<SeP>144<SeP>72<SeP>176<SeP>87<SeP>130<SeP>46<SeP>76<SeP>81<SeP>73<SeP>82<SeP>86<SeP>39<SeP>73<SeP>68<SeP>61<SeP>56<SeP>64<SeP>86<SeP>120<SeP>94<SeP>65<SeP>97<SeP>60<SeP>45<SeP>51<SeP>94<SeP>46<SeP>52<SeP>53<SeP>74<SeP>87<SeP>91<SeP>84<SeP>65<SeP>52<SeP>41<SeP>81<SeP>192<SeP>82<SeP>44<SeP>76<SeP>73<SeP>109<SeP>59<SeP>39<SeP>45<SeP>170<SeP>103<SeP>46<SeP>48<SeP>56<SeP>87<SeP>52<SeP>38<SeP>61<SeP>144<SeP>75<SeP>68<SeP>69<SeP>105<SeP>56<SeP>61<SeP>28<SeP>38<SeP>48<SeP>27<SeP>81<SeP>68<SeP>74<SeP>65<SeP>71<SeP>79<SeP>253<SeP>47<SeP>30<SeP>68<SeP>75<SeP>127<SeP>131<SeP>50<SeP>53<SeP>67<SeP>194<SeP>44<SeP>97<SeP>62<SeP>107<SeP>19<SeP>116<SeP>20<SeP>49<SeP>54<SeP>70<SeP>40<SeP>99<SeP>93<SeP>128<SeP>101<SeP>44<SeP>80<SeP>39<SeP>54<SeP>116<SeP>119<SeP>49<SeP>72<SeP>121<SeP>123<SeP>35<SeP>79<SeP>50<SeP>66<SeP>398<SeP>117<SeP>23<SeP>48<SeP>17<SeP>53<SeP>38<SeP>71<SeP>78<SeP>73<SeP>193<SeP>73<SeP>77<SeP>360<SeP>47<SeP>100<SeP>269<SeP>133<SeP>190<SeP>53<SeP>61<SeP>64<SeP>39<SeP>69<SeP>46<SeP>53<SeP>56<SeP>17<SeP>68<SeP>67<SeP>85<SeP>61<SeP>69<SeP>44<SeP>57<SeP>55<SeP>28<SeP>31<SeP>33<SeP>119<SeP>28<SeP>791<SeP>58<SeP>83<SeP>91<SeP>115<SeP>125<SeP>92<SeP>30<SeP>26<SeP>33<SeP>130<SeP>122<SeP>56<SeP>122<SeP>46<SeP>108<SeP>20<SeP>35<SeP>53<SeP>158<SeP>88<SeP>55<SeP>40<SeP>58<SeP>60<SeP>104<SeP>45<SeP>74<SeP>83<SeP>86<SeP>81<SeP>40<SeP>119<SeP>43<SeP>106<SeP>168<SeP>83<SeP>98<SeP>123";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-11 00:00:00<SeP>2025-02-11 01:47:51<SeP>2025-02-11 03:35:42<SeP>2025-02-11 05:23:33<SeP>2025-02-11 07:11:24<SeP>2025-02-11 08:59:15<SeP>2025-02-11 10:47:06<SeP>2025-02-11 12:34:57<SeP>2025-02-11 14:22:48<SeP>2025-02-11 16:10:39<SeP>2025-02-11 17:58:30<SeP>2025-02-11 19:46:21<SeP>2025-02-11 21:34:12<SeP>2025-02-11 23:22:03<SeP>2025-02-12 01:09:54<SeP>2025-02-12 02:57:45<SeP>2025-02-12 04:45:36<SeP>2025-02-12 06:33:27<SeP>2025-02-12 08:21:18<SeP>2025-02-12 10:09:09<SeP>2025-02-12 11:57:00<SeP>2025-02-12 13:44:51<SeP>2025-02-12 15:32:42<SeP>2025-02-12 17:20:33<SeP>2025-02-12 19:08:24<SeP>2025-02-12 20:56:15<SeP>2025-02-12 22:44:06<SeP>2025-02-13 00:31:57<SeP>2025-02-13 02:19:48<SeP>2025-02-13 04:07:39<SeP>2025-02-13 05:55:30<SeP>2025-02-13 07:43:21<SeP>2025-02-13 09:31:12<SeP>2025-02-13 11:19:03<SeP>2025-02-13 13:06:54<SeP>2025-02-13 14:54:45<SeP>2025-02-13 16:42:36<SeP>2025-02-13 18:30:27<SeP>2025-02-13 20:18:18<SeP>2025-02-13 22:06:09<SeP>2025-02-13 23:54:00<SeP>2025-02-14 01:41:51<SeP>2025-02-14 03:29:42<SeP>2025-02-14 05:17:33<SeP>2025-02-14 07:05:24<SeP>2025-02-14 08:53:15<SeP>2025-02-14 10:41:06<SeP>2025-02-14 12:28:57<SeP>2025-02-14 14:16:48<SeP>2025-02-14 16:04:39<SeP>2025-02-14 17:52:30<SeP>2025-02-14 19:40:21<SeP>2025-02-14 21:28:12<SeP>2025-02-14 23:16:03<SeP>2025-02-15 01:03:54<SeP>2025-02-15 02:51:45<SeP>2025-02-15 04:39:36<SeP>2025-02-15 06:27:27<SeP>2025-02-15 08:15:18<SeP>2025-02-15 10:03:09<SeP>2025-02-15 11:51:00<SeP>2025-02-15 13:38:51<SeP>2025-02-15 15:26:42<SeP>2025-02-15 17:14:33<SeP>2025-02-15 19:02:24<SeP>2025-02-15 20:50:15<SeP>2025-02-15 22:38:06<SeP>2025-02-16 00:25:57<SeP>2025-02-16 02:13:48<SeP>2025-02-16 04:01:39<SeP>2025-02-16 05:49:30<SeP>2025-02-16 07:37:21<SeP>2025-02-16 09:25:12<SeP>2025-02-16 11:13:03<SeP>2025-02-16 13:00:54<SeP>2025-02-16 14:48:45<SeP>2025-02-16 16:36:36<SeP>2025-02-16 18:24:27<SeP>2025-02-16 20:12:18<SeP>2025-02-16 22:00:09<SeP>2025-02-16 23:48:00<SeP>2025-02-17 01:35:51<SeP>2025-02-17 03:23:42<SeP>2025-02-17 05:11:33<SeP>2025-02-17 06:59:24<SeP>2025-02-17 08:47:15<SeP>2025-02-17 10:35:06<SeP>2025-02-17 12:22:57<SeP>2025-02-17 14:10:48<SeP>2025-02-17 15:58:39<SeP>2025-02-17 17:46:30<SeP>2025-02-17 19:34:21<SeP>2025-02-17 21:22:12<SeP>2025-02-17 23:10:03<SeP>2025-02-18 00:57:54<SeP>2025-02-18 02:45:45<SeP>2025-02-18 04:33:36<SeP>2025-02-18 06:21:27<SeP>2025-02-18 08:09:18<SeP>2025-02-18 09:57:09<SeP>2025-02-18 11:45:00<SeP>2025-02-18 13:32:51<SeP>2025-02-18 15:20:42<SeP>2025-02-18 17:08:33<SeP>2025-02-18 18:56:24<SeP>2025-02-18 20:44:15<SeP>2025-02-18 22:32:06<SeP>2025-02-19 00:19:57<SeP>2025-02-19 02:07:48<SeP>2025-02-19 03:55:39<SeP>2025-02-19 05:43:30<SeP>2025-02-19 07:31:21<SeP>2025-02-19 09:19:12<SeP>2025-02-19 11:07:03<SeP>2025-02-19 12:54:54<SeP>2025-02-19 14:42:45<SeP>2025-02-19 16:30:36<SeP>2025-02-19 18:18:27<SeP>2025-02-19 20:06:18<SeP>2025-02-19 21:54:09<SeP>2025-02-19 23:42:00<SeP>2025-02-20 01:29:51<SeP>2025-02-20 03:17:42<SeP>2025-02-20 05:05:33<SeP>2025-02-20 06:53:24<SeP>2025-02-20 08:41:15<SeP>2025-02-20 10:29:06<SeP>2025-02-20 12:16:57<SeP>2025-02-20 14:04:48<SeP>2025-02-20 15:52:39<SeP>2025-02-20 17:40:30<SeP>2025-02-20 19:28:21<SeP>2025-02-20 21:16:12<SeP>2025-02-20 23:04:03<SeP>2025-02-21 00:51:54<SeP>2025-02-21 02:39:45<SeP>2025-02-21 04:27:36<SeP>2025-02-21 06:15:27<SeP>2025-02-21 08:03:18<SeP>2025-02-21 09:51:09<SeP>2025-02-21 11:39:00<SeP>2025-02-21 13:26:51<SeP>2025-02-21 15:14:42<SeP>2025-02-21 17:02:33<SeP>2025-02-21 18:50:24<SeP>2025-02-21 20:38:15<SeP>2025-02-21 22:26:06<SeP>2025-02-22 00:13:57<SeP>2025-02-22 02:01:48<SeP>2025-02-22 03:49:39<SeP>2025-02-22 05:37:30<SeP>2025-02-22 07:25:21<SeP>2025-02-22 09:13:12<SeP>2025-02-22 11:01:03<SeP>2025-02-22 12:48:54<SeP>2025-02-22 14:36:45<SeP>2025-02-22 16:24:36<SeP>2025-02-22 18:12:27<SeP>2025-02-22 20:00:18<SeP>2025-02-22 21:48:09<SeP>2025-02-22 23:36:00<SeP>2025-02-23 01:23:51<SeP>2025-02-23 03:11:42<SeP>2025-02-23 04:59:33<SeP>2025-02-23 06:47:24<SeP>2025-02-23 08:35:15<SeP>2025-02-23 10:23:06<SeP>2025-02-23 12:10:57<SeP>2025-02-23 13:58:48<SeP>2025-02-23 15:46:39<SeP>2025-02-23 17:34:30<SeP>2025-02-23 19:22:21<SeP>2025-02-23 21:10:12<SeP>2025-02-23 22:58:03<SeP>2025-02-24 00:45:54<SeP>2025-02-24 02:33:45<SeP>2025-02-24 04:21:36<SeP>2025-02-24 06:09:27<SeP>2025-02-24 07:57:18<SeP>2025-02-24 09:45:09<SeP>2025-02-24 11:33:00<SeP>2025-02-24 13:20:51<SeP>2025-02-24 15:08:42<SeP>2025-02-24 16:56:33<SeP>2025-02-24 18:44:24<SeP>2025-02-24 20:32:15<SeP>2025-02-24 22:20:06<SeP>2025-02-25 00:07:57<SeP>2025-02-25 01:55:48<SeP>2025-02-25 03:43:39<SeP>2025-02-25 05:31:30<SeP>2025-02-25 07:19:21<SeP>2025-02-25 09:07:12<SeP>2025-02-25 10:55:03<SeP>2025-02-25 12:42:54<SeP>2025-02-25 14:30:45<SeP>2025-02-25 16:18:36<SeP>2025-02-25 18:06:27<SeP>2025-02-25 19:54:18<SeP>2025-02-25 21:42:09<SeP>2025-02-25 23:30:00<SeP>2025-02-26 01:17:51<SeP>2025-02-26 03:05:42<SeP>2025-02-26 04:53:33<SeP>2025-02-26 06:41:24<SeP>2025-02-26 08:29:15<SeP>2025-02-26 10:17:06<SeP>2025-02-26 12:04:57<SeP>2025-02-26 13:52:48<SeP>2025-02-26 15:40:39<SeP>2025-02-26 17:28:30<SeP>2025-02-26 19:16:21<SeP>2025-02-26 21:04:12<SeP>2025-02-26 22:52:03<SeP>2025-02-27 00:39:54<SeP>2025-02-27 02:27:45<SeP>2025-02-27 04:15:36<SeP>2025-02-27 06:03:27<SeP>2025-02-27 07:51:18<SeP>2025-02-27 09:39:09<SeP>2025-02-27 11:27:00<SeP>2025-02-27 13:14:51<SeP>2025-02-27 15:02:42<SeP>2025-02-27 16:50:33<SeP>2025-02-27 18:38:24<SeP>2025-02-27 20:26:15<SeP>2025-02-27 22:14:06<SeP>2025-02-28 00:01:57<SeP>2025-02-28 01:49:48<SeP>2025-02-28 03:37:39<SeP>2025-02-28 05:25:30<SeP>2025-02-28 07:13:21<SeP>2025-02-28 09:01:12<SeP>2025-02-28 10:49:03<SeP>2025-02-28 12:36:54<SeP>2025-02-28 14:24:45<SeP>2025-02-28 16:12:36<SeP>2025-02-28 18:00:27<SeP>2025-02-28 19:48:18<SeP>2025-02-28 21:36:09<SeP>2025-02-28 23:24:00<SeP>2025-03-01 01:11:51<SeP>2025-03-01 02:59:42<SeP>2025-03-01 04:47:33<SeP>2025-03-01 06:35:24<SeP>2025-03-01 08:23:15<SeP>2025-03-01 10:11:06<SeP>2025-03-01 11:58:57<SeP>2025-03-01 13:46:48<SeP>2025-03-01 15:34:39<SeP>2025-03-01 17:22:30<SeP>2025-03-01 19:10:21<SeP>2025-03-01 20:58:12<SeP>2025-03-01 22:46:03<SeP>2025-03-02 00:33:54<SeP>2025-03-02 02:21:45<SeP>2025-03-02 04:09:36<SeP>2025-03-02 05:57:27<SeP>2025-03-02 07:45:18<SeP>2025-03-02 09:33:09<SeP>2025-03-02 11:21:00<SeP>2025-03-02 13:08:51<SeP>2025-03-02 14:56:42<SeP>2025-03-02 16:44:33<SeP>2025-03-02 18:32:24<SeP>2025-03-02 20:20:15<SeP>2025-03-02 22:08:06<SeP>2025-03-02 23:55:57<SeP>2025-03-03 01:43:48<SeP>2025-03-03 03:31:39<SeP>2025-03-03 05:19:30<SeP>2025-03-03 07:07:21<SeP>2025-03-03 08:55:12<SeP>2025-03-03 10:43:03<SeP>2025-03-03 12:30:54<SeP>2025-03-03 14:18:45<SeP>2025-03-03 16:06:36<SeP>2025-03-03 17:54:27<SeP>2025-03-03 19:42:18<SeP>2025-03-03 21:30:09<SeP>2025-03-03 23:18:00<SeP>2025-03-04 01:05:51<SeP>2025-03-04 02:53:42<SeP>2025-03-04 04:41:33<SeP>2025-03-04 06:29:24<SeP>2025-03-04 08:17:15<SeP>2025-03-04 10:05:06<SeP>2025-03-04 11:52:57<SeP>2025-03-04 13:40:48<SeP>2025-03-04 15:28:39<SeP>2025-03-04 17:16:30<SeP>2025-03-04 19:04:21<SeP>2025-03-04 20:52:12<SeP>2025-03-04 22:40:03<SeP>2025-03-05 00:27:54<SeP>2025-03-05 02:15:45<SeP>2025-03-05 04:03:36<SeP>2025-03-05 05:51:27<SeP>2025-03-05 07:39:18<SeP>2025-03-05 09:27:09<SeP>2025-03-05 11:15:00<SeP>2025-03-05 13:02:51<SeP>2025-03-05 14:50:42<SeP>2025-03-05 16:38:33<SeP>2025-03-05 18:26:24<SeP>2025-03-05 20:14:15<SeP>2025-03-05 22:02:06<SeP>2025-03-05 23:49:57<SeP>2025-03-06 01:37:48<SeP>2025-03-06 03:25:39<SeP>2025-03-06 05:13:30<SeP>2025-03-06 07:01:21<SeP>2025-03-06 08:49:12<SeP>2025-03-06 10:37:03<SeP>2025-03-06 12:24:54<SeP>2025-03-06 14:12:45<SeP>2025-03-06 16:00:36<SeP>2025-03-06 17:48:27<SeP>2025-03-06 19:36:18<SeP>2025-03-06 21:24:09<SeP>2025-03-06 23:12:00<SeP>2025-03-07 00:59:51<SeP>2025-03-07 02:47:42<SeP>2025-03-07 04:35:33<SeP>2025-03-07 06:23:24<SeP>2025-03-07 08:11:15<SeP>2025-03-07 09:59:06<SeP>2025-03-07 11:46:57<SeP>2025-03-07 13:34:48<SeP>2025-03-07 15:22:39<SeP>2025-03-07 17:10:30<SeP>2025-03-07 18:58:21<SeP>2025-03-07 20:46:12<SeP>2025-03-07 22:34:03<SeP>2025-03-08 00:21:54<SeP>2025-03-08 02:09:45<SeP>2025-03-08 03:57:36<SeP>2025-03-08 05:45:27<SeP>2025-03-08 07:33:18<SeP>2025-03-08 09:21:09<SeP>2025-03-08 11:09:00<SeP>2025-03-08 12:56:51<SeP>2025-03-08 14:44:42<SeP>2025-03-08 16:32:33<SeP>2025-03-08 18:20:24<SeP>2025-03-08 20:08:15<SeP>2025-03-08 21:56:06<SeP>2025-03-08 23:43:57<SeP>2025-03-09 01:31:48<SeP>2025-03-09 04:19:39<SeP>2025-03-09 06:07:30<SeP>2025-03-09 07:55:21<SeP>2025-03-09 09:43:12<SeP>2025-03-09 11:31:03<SeP>2025-03-09 13:18:54<SeP>2025-03-09 15:06:45<SeP>2025-03-09 16:54:36<SeP>2025-03-09 18:42:27<SeP>2025-03-09 20:30:18<SeP>2025-03-09 22:18:09<SeP>2025-03-10 00:06:00<SeP>2025-03-10 01:53:51<SeP>2025-03-10 03:41:42<SeP>2025-03-10 05:29:33<SeP>2025-03-10 07:17:24<SeP>2025-03-10 09:05:15<SeP>2025-03-10 10:53:06<SeP>2025-03-10 12:40:57<SeP>2025-03-10 14:28:48<SeP>2025-03-10 16:16:39<SeP>2025-03-10 18:04:30<SeP>2025-03-10 19:52:21<SeP>2025-03-10 21:40:12<SeP>2025-03-10 23:28:03<SeP>2025-03-11 01:15:54<SeP>2025-03-11 03:03:45<SeP>2025-03-11 04:51:36<SeP>2025-03-11 06:39:27<SeP>2025-03-11 08:27:18<SeP>2025-03-11 10:15:09<SeP>2025-03-11 12:03:00<SeP>2025-03-11 13:50:51<SeP>2025-03-11 15:38:42<SeP>2025-03-11 17:26:33<SeP>2025-03-11 19:14:24<SeP>2025-03-11 21:02:15<SeP>2025-03-11 22:50:06<SeP>2025-03-12 00:37:57<SeP>2025-03-12 02:25:48<SeP>2025-03-12 04:13:39<SeP>2025-03-12 06:01:30<SeP>2025-03-12 07:49:21<SeP>2025-03-12 09:37:12<SeP>2025-03-12 11:25:03<SeP>2025-03-12 13:12:54<SeP>2025-03-12 15:00:45<SeP>2025-03-12 16:48:36<SeP>2025-03-12 18:36:27<SeP>2025-03-12 20:24:18<SeP>2025-03-12 22:12:09";
  const itemLabel       = "Attacks";
  const itemData        = "229<SeP>170<SeP>332<SeP>81<SeP>224<SeP>170<SeP>137<SeP>47<SeP>501<SeP>113<SeP>307<SeP>69<SeP>104<SeP>363<SeP>314<SeP>397<SeP>2752<SeP>3303<SeP>935<SeP>358<SeP>224<SeP>286<SeP>673<SeP>138<SeP>404<SeP>127<SeP>10<SeP>66<SeP>116<SeP>554<SeP>57<SeP>294<SeP>167<SeP>217<SeP>168<SeP>814<SeP>404<SeP>401<SeP>212<SeP>260<SeP>163<SeP>200<SeP>238<SeP>456<SeP>231<SeP>435<SeP>104<SeP>321<SeP>271<SeP>238<SeP>321<SeP>213<SeP>155<SeP>96<SeP>194<SeP>125<SeP>262<SeP>651<SeP>60<SeP>205<SeP>170<SeP>231<SeP>51<SeP>83<SeP>272<SeP>253<SeP>127<SeP>137<SeP>72<SeP>24<SeP>325<SeP>254<SeP>190<SeP>129<SeP>284<SeP>273<SeP>124<SeP>488<SeP>365<SeP>215<SeP>300<SeP>229<SeP>282<SeP>198<SeP>356<SeP>340<SeP>169<SeP>380<SeP>92<SeP>47<SeP>311<SeP>343<SeP>53<SeP>214<SeP>475<SeP>141<SeP>78<SeP>435<SeP>64<SeP>192<SeP>243<SeP>260<SeP>241<SeP>169<SeP>299<SeP>79<SeP>123<SeP>170<SeP>125<SeP>544<SeP>131<SeP>39<SeP>109<SeP>99<SeP>8<SeP>101<SeP>174<SeP>319<SeP>177<SeP>261<SeP>84<SeP>283<SeP>124<SeP>116<SeP>117<SeP>83<SeP>9<SeP>139<SeP>237<SeP>153<SeP>377<SeP>786<SeP>424<SeP>273<SeP>745<SeP>274<SeP>582<SeP>189<SeP>468<SeP>494<SeP>244<SeP>519<SeP>315<SeP>683<SeP>807<SeP>981<SeP>570<SeP>317<SeP>306<SeP>250<SeP>292<SeP>406<SeP>816<SeP>643<SeP>345<SeP>483<SeP>273<SeP>550<SeP>704<SeP>614<SeP>441<SeP>374<SeP>535<SeP>772<SeP>211<SeP>319<SeP>508<SeP>722<SeP>577<SeP>563<SeP>403<SeP>81<SeP>83<SeP>343<SeP>63<SeP>202<SeP>419<SeP>215<SeP>66<SeP>350<SeP>117<SeP>59<SeP>86<SeP>299<SeP>201<SeP>229<SeP>257<SeP>244<SeP>394<SeP>59<SeP>126<SeP>240<SeP>174<SeP>401<SeP>352<SeP>103<SeP>182<SeP>129<SeP>111<SeP>65<SeP>198<SeP>44<SeP>74<SeP>322<SeP>71<SeP>135<SeP>156<SeP>84<SeP>62<SeP>66<SeP>62<SeP>212<SeP>329<SeP>323<SeP>47<SeP>250<SeP>155<SeP>490<SeP>92<SeP>152<SeP>158<SeP>206<SeP>224<SeP>31<SeP>38<SeP>144<SeP>121<SeP>226<SeP>112<SeP>158<SeP>329<SeP>21<SeP>379<SeP>157<SeP>353<SeP>61<SeP>64<SeP>48<SeP>49<SeP>96<SeP>85<SeP>31<SeP>19<SeP>80<SeP>103<SeP>32<SeP>75<SeP>71<SeP>193<SeP>114<SeP>93<SeP>24<SeP>263<SeP>73<SeP>527<SeP>29<SeP>117<SeP>15<SeP>310<SeP>28<SeP>20<SeP>213<SeP>67<SeP>86<SeP>40<SeP>192<SeP>45<SeP>115<SeP>297<SeP>85<SeP>33<SeP>91<SeP>49<SeP>36<SeP>393<SeP>142<SeP>51<SeP>84<SeP>64<SeP>211<SeP>97<SeP>41<SeP>447<SeP>29<SeP>29<SeP>16<SeP>259<SeP>82<SeP>38<SeP>78<SeP>65<SeP>63<SeP>87<SeP>280<SeP>134<SeP>143<SeP>79<SeP>57<SeP>83<SeP>34<SeP>32<SeP>38<SeP>307<SeP>51<SeP>140<SeP>146<SeP>123<SeP>91<SeP>19<SeP>134<SeP>135<SeP>172<SeP>82<SeP>114<SeP>89<SeP>38<SeP>120<SeP>83<SeP>118<SeP>152<SeP>50<SeP>172<SeP>59<SeP>424<SeP>352<SeP>68<SeP>140<SeP>153<SeP>35<SeP>41<SeP>130<SeP>46<SeP>97<SeP>102<SeP>126<SeP>177<SeP>25<SeP>13<SeP>83<SeP>189<SeP>48<SeP>78<SeP>8<SeP>28<SeP>21<SeP>285<SeP>110<SeP>27<SeP>160<SeP>109<SeP>11<SeP>25<SeP>80<SeP>49<SeP>53<SeP>281<SeP>57<SeP>17<SeP>35<SeP>502<SeP>126<SeP>558<SeP>343<SeP>43<SeP>75<SeP>76<SeP>48<SeP>137<SeP>38<SeP>121<SeP>28<SeP>293<SeP>211<SeP>304<SeP>44<SeP>108<SeP>26<SeP>226<SeP>39<SeP>19<SeP>176<SeP>283<SeP>398<SeP>57<SeP>39<SeP>42<SeP>206<SeP>180<SeP>57<SeP>10<SeP>106<SeP>116<SeP>120<SeP>212<SeP>122<SeP>190<SeP>321<SeP>154<SeP>147<SeP>170";
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
  const labelsData       = "2025-02-11 00:00:00<SeP>2025-02-11 01:47:51<SeP>2025-02-11 03:35:42<SeP>2025-02-11 05:23:33<SeP>2025-02-11 07:11:24<SeP>2025-02-11 08:59:15<SeP>2025-02-11 10:47:06<SeP>2025-02-11 12:34:57<SeP>2025-02-11 14:22:48<SeP>2025-02-11 16:10:39<SeP>2025-02-11 17:58:30<SeP>2025-02-11 19:46:21<SeP>2025-02-11 21:34:12<SeP>2025-02-11 23:22:03<SeP>2025-02-12 01:09:54<SeP>2025-02-12 02:57:45<SeP>2025-02-12 04:45:36<SeP>2025-02-12 06:33:27<SeP>2025-02-12 08:21:18<SeP>2025-02-12 10:09:09<SeP>2025-02-12 11:57:00<SeP>2025-02-12 13:44:51<SeP>2025-02-12 15:32:42<SeP>2025-02-12 17:20:33<SeP>2025-02-12 19:08:24<SeP>2025-02-12 20:56:15<SeP>2025-02-12 22:44:06<SeP>2025-02-13 00:31:57<SeP>2025-02-13 02:19:48<SeP>2025-02-13 04:07:39<SeP>2025-02-13 05:55:30<SeP>2025-02-13 07:43:21<SeP>2025-02-13 09:31:12<SeP>2025-02-13 11:19:03<SeP>2025-02-13 13:06:54<SeP>2025-02-13 14:54:45<SeP>2025-02-13 16:42:36<SeP>2025-02-13 18:30:27<SeP>2025-02-13 20:18:18<SeP>2025-02-13 22:06:09<SeP>2025-02-13 23:54:00<SeP>2025-02-14 01:41:51<SeP>2025-02-14 03:29:42<SeP>2025-02-14 05:17:33<SeP>2025-02-14 07:05:24<SeP>2025-02-14 08:53:15<SeP>2025-02-14 10:41:06<SeP>2025-02-14 12:28:57<SeP>2025-02-14 14:16:48<SeP>2025-02-14 16:04:39<SeP>2025-02-14 17:52:30<SeP>2025-02-14 19:40:21<SeP>2025-02-14 21:28:12<SeP>2025-02-14 23:16:03<SeP>2025-02-15 01:03:54<SeP>2025-02-15 02:51:45<SeP>2025-02-15 04:39:36<SeP>2025-02-15 06:27:27<SeP>2025-02-15 08:15:18<SeP>2025-02-15 10:03:09<SeP>2025-02-15 11:51:00<SeP>2025-02-15 13:38:51<SeP>2025-02-15 15:26:42<SeP>2025-02-15 17:14:33<SeP>2025-02-15 19:02:24<SeP>2025-02-15 20:50:15<SeP>2025-02-15 22:38:06<SeP>2025-02-16 00:25:57<SeP>2025-02-16 02:13:48<SeP>2025-02-16 04:01:39<SeP>2025-02-16 05:49:30<SeP>2025-02-16 07:37:21<SeP>2025-02-16 09:25:12<SeP>2025-02-16 11:13:03<SeP>2025-02-16 13:00:54<SeP>2025-02-16 14:48:45<SeP>2025-02-16 16:36:36<SeP>2025-02-16 18:24:27<SeP>2025-02-16 20:12:18<SeP>2025-02-16 22:00:09<SeP>2025-02-16 23:48:00<SeP>2025-02-17 01:35:51<SeP>2025-02-17 03:23:42<SeP>2025-02-17 05:11:33<SeP>2025-02-17 06:59:24<SeP>2025-02-17 08:47:15<SeP>2025-02-17 10:35:06<SeP>2025-02-17 12:22:57<SeP>2025-02-17 14:10:48<SeP>2025-02-17 15:58:39<SeP>2025-02-17 17:46:30<SeP>2025-02-17 19:34:21<SeP>2025-02-17 21:22:12<SeP>2025-02-17 23:10:03<SeP>2025-02-18 00:57:54<SeP>2025-02-18 02:45:45<SeP>2025-02-18 04:33:36<SeP>2025-02-18 06:21:27<SeP>2025-02-18 08:09:18<SeP>2025-02-18 09:57:09<SeP>2025-02-18 11:45:00<SeP>2025-02-18 13:32:51<SeP>2025-02-18 15:20:42<SeP>2025-02-18 17:08:33<SeP>2025-02-18 18:56:24<SeP>2025-02-18 20:44:15<SeP>2025-02-18 22:32:06<SeP>2025-02-19 00:19:57<SeP>2025-02-19 02:07:48<SeP>2025-02-19 03:55:39<SeP>2025-02-19 05:43:30<SeP>2025-02-19 07:31:21<SeP>2025-02-19 09:19:12<SeP>2025-02-19 11:07:03<SeP>2025-02-19 12:54:54<SeP>2025-02-19 14:42:45<SeP>2025-02-19 16:30:36<SeP>2025-02-19 18:18:27<SeP>2025-02-19 20:06:18<SeP>2025-02-19 21:54:09<SeP>2025-02-19 23:42:00<SeP>2025-02-20 01:29:51<SeP>2025-02-20 03:17:42<SeP>2025-02-20 05:05:33<SeP>2025-02-20 06:53:24<SeP>2025-02-20 08:41:15<SeP>2025-02-20 10:29:06<SeP>2025-02-20 12:16:57<SeP>2025-02-20 14:04:48<SeP>2025-02-20 15:52:39<SeP>2025-02-20 17:40:30<SeP>2025-02-20 19:28:21<SeP>2025-02-20 21:16:12<SeP>2025-02-20 23:04:03<SeP>2025-02-21 00:51:54<SeP>2025-02-21 02:39:45<SeP>2025-02-21 04:27:36<SeP>2025-02-21 06:15:27<SeP>2025-02-21 08:03:18<SeP>2025-02-21 09:51:09<SeP>2025-02-21 11:39:00<SeP>2025-02-21 13:26:51<SeP>2025-02-21 15:14:42<SeP>2025-02-21 17:02:33<SeP>2025-02-21 18:50:24<SeP>2025-02-21 20:38:15<SeP>2025-02-21 22:26:06<SeP>2025-02-22 00:13:57<SeP>2025-02-22 02:01:48<SeP>2025-02-22 03:49:39<SeP>2025-02-22 05:37:30<SeP>2025-02-22 07:25:21<SeP>2025-02-22 09:13:12<SeP>2025-02-22 11:01:03<SeP>2025-02-22 12:48:54<SeP>2025-02-22 14:36:45<SeP>2025-02-22 16:24:36<SeP>2025-02-22 18:12:27<SeP>2025-02-22 20:00:18<SeP>2025-02-22 21:48:09<SeP>2025-02-22 23:36:00<SeP>2025-02-23 01:23:51<SeP>2025-02-23 03:11:42<SeP>2025-02-23 04:59:33<SeP>2025-02-23 06:47:24<SeP>2025-02-23 08:35:15<SeP>2025-02-23 10:23:06<SeP>2025-02-23 12:10:57<SeP>2025-02-23 13:58:48<SeP>2025-02-23 15:46:39<SeP>2025-02-23 17:34:30<SeP>2025-02-23 19:22:21<SeP>2025-02-23 21:10:12<SeP>2025-02-23 22:58:03<SeP>2025-02-24 00:45:54<SeP>2025-02-24 02:33:45<SeP>2025-02-24 04:21:36<SeP>2025-02-24 06:09:27<SeP>2025-02-24 07:57:18<SeP>2025-02-24 09:45:09<SeP>2025-02-24 11:33:00<SeP>2025-02-24 13:20:51<SeP>2025-02-24 15:08:42<SeP>2025-02-24 16:56:33<SeP>2025-02-24 18:44:24<SeP>2025-02-24 20:32:15<SeP>2025-02-24 22:20:06<SeP>2025-02-25 00:07:57<SeP>2025-02-25 01:55:48<SeP>2025-02-25 03:43:39<SeP>2025-02-25 05:31:30<SeP>2025-02-25 07:19:21<SeP>2025-02-25 09:07:12<SeP>2025-02-25 10:55:03<SeP>2025-02-25 12:42:54<SeP>2025-02-25 14:30:45<SeP>2025-02-25 16:18:36<SeP>2025-02-25 18:06:27<SeP>2025-02-25 19:54:18<SeP>2025-02-25 21:42:09<SeP>2025-02-25 23:30:00<SeP>2025-02-26 01:17:51<SeP>2025-02-26 03:05:42<SeP>2025-02-26 04:53:33<SeP>2025-02-26 06:41:24<SeP>2025-02-26 08:29:15<SeP>2025-02-26 10:17:06<SeP>2025-02-26 12:04:57<SeP>2025-02-26 13:52:48<SeP>2025-02-26 15:40:39<SeP>2025-02-26 17:28:30<SeP>2025-02-26 19:16:21<SeP>2025-02-26 21:04:12<SeP>2025-02-26 22:52:03<SeP>2025-02-27 00:39:54<SeP>2025-02-27 02:27:45<SeP>2025-02-27 04:15:36<SeP>2025-02-27 06:03:27<SeP>2025-02-27 07:51:18<SeP>2025-02-27 09:39:09<SeP>2025-02-27 11:27:00<SeP>2025-02-27 13:14:51<SeP>2025-02-27 15:02:42<SeP>2025-02-27 16:50:33<SeP>2025-02-27 18:38:24<SeP>2025-02-27 20:26:15<SeP>2025-02-27 22:14:06<SeP>2025-02-28 00:01:57<SeP>2025-02-28 01:49:48<SeP>2025-02-28 03:37:39<SeP>2025-02-28 05:25:30<SeP>2025-02-28 07:13:21<SeP>2025-02-28 09:01:12<SeP>2025-02-28 10:49:03<SeP>2025-02-28 12:36:54<SeP>2025-02-28 14:24:45<SeP>2025-02-28 16:12:36<SeP>2025-02-28 18:00:27<SeP>2025-02-28 19:48:18<SeP>2025-02-28 21:36:09<SeP>2025-02-28 23:24:00<SeP>2025-03-01 01:11:51<SeP>2025-03-01 02:59:42<SeP>2025-03-01 04:47:33<SeP>2025-03-01 06:35:24<SeP>2025-03-01 08:23:15<SeP>2025-03-01 10:11:06<SeP>2025-03-01 11:58:57<SeP>2025-03-01 13:46:48<SeP>2025-03-01 15:34:39<SeP>2025-03-01 17:22:30<SeP>2025-03-01 19:10:21<SeP>2025-03-01 20:58:12<SeP>2025-03-01 22:46:03<SeP>2025-03-02 00:33:54<SeP>2025-03-02 02:21:45<SeP>2025-03-02 04:09:36<SeP>2025-03-02 05:57:27<SeP>2025-03-02 07:45:18<SeP>2025-03-02 09:33:09<SeP>2025-03-02 11:21:00<SeP>2025-03-02 13:08:51<SeP>2025-03-02 14:56:42<SeP>2025-03-02 16:44:33<SeP>2025-03-02 18:32:24<SeP>2025-03-02 20:20:15<SeP>2025-03-02 22:08:06<SeP>2025-03-02 23:55:57<SeP>2025-03-03 01:43:48<SeP>2025-03-03 03:31:39<SeP>2025-03-03 05:19:30<SeP>2025-03-03 07:07:21<SeP>2025-03-03 08:55:12<SeP>2025-03-03 10:43:03<SeP>2025-03-03 12:30:54<SeP>2025-03-03 14:18:45<SeP>2025-03-03 16:06:36<SeP>2025-03-03 17:54:27<SeP>2025-03-03 19:42:18<SeP>2025-03-03 21:30:09<SeP>2025-03-03 23:18:00<SeP>2025-03-04 01:05:51<SeP>2025-03-04 02:53:42<SeP>2025-03-04 04:41:33<SeP>2025-03-04 06:29:24<SeP>2025-03-04 08:17:15<SeP>2025-03-04 10:05:06<SeP>2025-03-04 11:52:57<SeP>2025-03-04 13:40:48<SeP>2025-03-04 15:28:39<SeP>2025-03-04 17:16:30<SeP>2025-03-04 19:04:21<SeP>2025-03-04 20:52:12<SeP>2025-03-04 22:40:03<SeP>2025-03-05 00:27:54<SeP>2025-03-05 02:15:45<SeP>2025-03-05 04:03:36<SeP>2025-03-05 05:51:27<SeP>2025-03-05 07:39:18<SeP>2025-03-05 09:27:09<SeP>2025-03-05 11:15:00<SeP>2025-03-05 13:02:51<SeP>2025-03-05 14:50:42<SeP>2025-03-05 16:38:33<SeP>2025-03-05 18:26:24<SeP>2025-03-05 20:14:15<SeP>2025-03-05 22:02:06<SeP>2025-03-05 23:49:57<SeP>2025-03-06 01:37:48<SeP>2025-03-06 03:25:39<SeP>2025-03-06 05:13:30<SeP>2025-03-06 07:01:21<SeP>2025-03-06 08:49:12<SeP>2025-03-06 10:37:03<SeP>2025-03-06 12:24:54<SeP>2025-03-06 14:12:45<SeP>2025-03-06 16:00:36<SeP>2025-03-06 17:48:27<SeP>2025-03-06 19:36:18<SeP>2025-03-06 21:24:09<SeP>2025-03-06 23:12:00<SeP>2025-03-07 00:59:51<SeP>2025-03-07 02:47:42<SeP>2025-03-07 04:35:33<SeP>2025-03-07 06:23:24<SeP>2025-03-07 08:11:15<SeP>2025-03-07 09:59:06<SeP>2025-03-07 11:46:57<SeP>2025-03-07 13:34:48<SeP>2025-03-07 15:22:39<SeP>2025-03-07 17:10:30<SeP>2025-03-07 18:58:21<SeP>2025-03-07 20:46:12<SeP>2025-03-07 22:34:03<SeP>2025-03-08 00:21:54<SeP>2025-03-08 02:09:45<SeP>2025-03-08 03:57:36<SeP>2025-03-08 05:45:27<SeP>2025-03-08 07:33:18<SeP>2025-03-08 09:21:09<SeP>2025-03-08 11:09:00<SeP>2025-03-08 12:56:51<SeP>2025-03-08 14:44:42<SeP>2025-03-08 16:32:33<SeP>2025-03-08 18:20:24<SeP>2025-03-08 20:08:15<SeP>2025-03-08 21:56:06<SeP>2025-03-08 23:43:57<SeP>2025-03-09 01:31:48<SeP>2025-03-09 04:19:39<SeP>2025-03-09 06:07:30<SeP>2025-03-09 07:55:21<SeP>2025-03-09 09:43:12<SeP>2025-03-09 11:31:03<SeP>2025-03-09 13:18:54<SeP>2025-03-09 15:06:45<SeP>2025-03-09 16:54:36<SeP>2025-03-09 18:42:27<SeP>2025-03-09 20:30:18<SeP>2025-03-09 22:18:09<SeP>2025-03-10 00:06:00<SeP>2025-03-10 01:53:51<SeP>2025-03-10 03:41:42<SeP>2025-03-10 05:29:33<SeP>2025-03-10 07:17:24<SeP>2025-03-10 09:05:15<SeP>2025-03-10 10:53:06<SeP>2025-03-10 12:40:57<SeP>2025-03-10 14:28:48<SeP>2025-03-10 16:16:39<SeP>2025-03-10 18:04:30<SeP>2025-03-10 19:52:21<SeP>2025-03-10 21:40:12<SeP>2025-03-10 23:28:03<SeP>2025-03-11 01:15:54<SeP>2025-03-11 03:03:45<SeP>2025-03-11 04:51:36<SeP>2025-03-11 06:39:27<SeP>2025-03-11 08:27:18<SeP>2025-03-11 10:15:09<SeP>2025-03-11 12:03:00<SeP>2025-03-11 13:50:51<SeP>2025-03-11 15:38:42<SeP>2025-03-11 17:26:33<SeP>2025-03-11 19:14:24<SeP>2025-03-11 21:02:15<SeP>2025-03-11 22:50:06<SeP>2025-03-12 00:37:57<SeP>2025-03-12 02:25:48<SeP>2025-03-12 04:13:39<SeP>2025-03-12 06:01:30<SeP>2025-03-12 07:49:21<SeP>2025-03-12 09:37:12<SeP>2025-03-12 11:25:03<SeP>2025-03-12 13:12:54<SeP>2025-03-12 15:00:45<SeP>2025-03-12 16:48:36<SeP>2025-03-12 18:36:27<SeP>2025-03-12 20:24:18<SeP>2025-03-12 22:12:09";
  const item1Label       = "Escaneos";
  const item1Data        = "39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>120<SeP>92<SeP>150<SeP>94<SeP>31<SeP>116<SeP>66<SeP>72<SeP>114<SeP>58<SeP>84<SeP>51<SeP>78<SeP>67<SeP>58<SeP>110<SeP>188<SeP>45<SeP>99<SeP>103<SeP>113<SeP>107<SeP>49<SeP>82<SeP>68<SeP>171<SeP>67<SeP>106<SeP>61<SeP>76<SeP>99<SeP>73<SeP>78<SeP>86<SeP>76<SeP>151<SeP>95<SeP>206<SeP>54<SeP>61<SeP>58<SeP>88<SeP>42<SeP>97<SeP>90<SeP>93<SeP>80<SeP>68<SeP>108<SeP>159<SeP>175<SeP>103<SeP>58<SeP>49<SeP>42<SeP>89<SeP>84<SeP>111<SeP>73<SeP>53<SeP>74<SeP>59<SeP>117<SeP>88<SeP>54<SeP>86<SeP>71<SeP>83<SeP>44<SeP>82<SeP>153<SeP>116<SeP>74<SeP>59<SeP>62<SeP>70<SeP>82<SeP>93<SeP>81<SeP>82<SeP>36<SeP>17<SeP>58<SeP>86<SeP>137<SeP>75<SeP>148<SeP>38<SeP>117<SeP>71<SeP>152<SeP>77<SeP>68<SeP>89<SeP>77<SeP>29<SeP>76<SeP>78<SeP>45<SeP>50<SeP>97<SeP>96<SeP>159<SeP>113<SeP>79<SeP>67<SeP>48<SeP>69<SeP>70<SeP>44<SeP>86<SeP>91<SeP>98<SeP>83<SeP>75<SeP>98<SeP>56<SeP>95<SeP>132<SeP>71<SeP>43<SeP>58<SeP>43<SeP>79<SeP>83<SeP>97<SeP>66<SeP>106<SeP>131<SeP>59<SeP>106<SeP>67<SeP>48<SeP>73<SeP>89<SeP>69<SeP>72<SeP>136<SeP>65<SeP>85<SeP>93<SeP>128<SeP>80<SeP>62<SeP>42<SeP>46<SeP>58<SeP>91<SeP>52<SeP>61<SeP>105<SeP>66<SeP>46<SeP>97<SeP>118<SeP>113<SeP>59<SeP>40<SeP>23<SeP>60<SeP>189<SeP>71<SeP>132<SeP>61<SeP>66<SeP>120<SeP>50<SeP>62<SeP>117<SeP>62<SeP>196<SeP>65<SeP>44<SeP>135<SeP>72<SeP>76<SeP>68<SeP>90<SeP>119<SeP>96<SeP>81<SeP>107<SeP>52<SeP>94<SeP>79<SeP>64<SeP>85<SeP>56<SeP>127<SeP>111<SeP>87<SeP>85<SeP>87<SeP>126<SeP>62<SeP>127<SeP>99<SeP>48<SeP>60<SeP>131<SeP>144<SeP>72<SeP>176<SeP>87<SeP>130<SeP>46<SeP>76<SeP>81<SeP>73<SeP>82<SeP>86<SeP>39<SeP>73<SeP>68<SeP>61<SeP>56<SeP>64<SeP>86<SeP>120<SeP>94<SeP>65<SeP>97<SeP>60<SeP>45<SeP>51<SeP>94<SeP>46<SeP>52<SeP>53<SeP>74<SeP>87<SeP>91<SeP>84<SeP>65<SeP>52<SeP>41<SeP>81<SeP>192<SeP>82<SeP>44<SeP>76<SeP>73<SeP>109<SeP>59<SeP>39<SeP>45<SeP>170<SeP>103<SeP>46<SeP>48<SeP>56<SeP>87<SeP>52<SeP>38<SeP>61<SeP>144<SeP>75<SeP>68<SeP>69<SeP>105<SeP>56<SeP>61<SeP>28<SeP>38<SeP>48<SeP>27<SeP>81<SeP>68<SeP>74<SeP>65<SeP>71<SeP>79<SeP>253<SeP>47<SeP>30<SeP>68<SeP>75<SeP>127<SeP>131<SeP>50<SeP>53<SeP>67<SeP>194<SeP>44<SeP>97<SeP>62<SeP>107<SeP>19<SeP>116<SeP>20<SeP>49<SeP>54<SeP>70<SeP>40<SeP>99<SeP>93<SeP>128<SeP>101<SeP>44<SeP>80<SeP>39<SeP>54<SeP>116<SeP>119<SeP>49<SeP>72<SeP>121<SeP>123<SeP>35<SeP>79<SeP>50<SeP>66<SeP>398<SeP>117<SeP>23<SeP>48<SeP>17<SeP>53<SeP>38<SeP>71<SeP>78<SeP>73<SeP>193<SeP>73<SeP>77<SeP>360<SeP>47<SeP>100<SeP>269<SeP>133<SeP>190<SeP>53<SeP>61<SeP>64<SeP>39<SeP>69<SeP>46<SeP>53<SeP>56<SeP>17<SeP>68<SeP>67<SeP>85<SeP>61<SeP>69<SeP>44<SeP>57<SeP>55<SeP>28<SeP>31<SeP>33<SeP>119<SeP>28<SeP>791<SeP>58<SeP>83<SeP>91<SeP>115<SeP>125<SeP>92<SeP>30<SeP>26<SeP>33<SeP>130<SeP>122<SeP>56<SeP>122<SeP>46<SeP>108<SeP>20<SeP>35<SeP>53<SeP>158<SeP>88<SeP>55<SeP>40<SeP>58<SeP>60<SeP>104<SeP>45<SeP>74<SeP>83<SeP>86<SeP>81<SeP>40<SeP>119<SeP>43<SeP>106<SeP>168<SeP>83<SeP>98<SeP>123";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "229<SeP>170<SeP>332<SeP>81<SeP>224<SeP>170<SeP>137<SeP>47<SeP>501<SeP>113<SeP>307<SeP>69<SeP>104<SeP>363<SeP>314<SeP>397<SeP>2752<SeP>3303<SeP>935<SeP>358<SeP>224<SeP>286<SeP>673<SeP>138<SeP>404<SeP>127<SeP>10<SeP>66<SeP>116<SeP>554<SeP>57<SeP>294<SeP>167<SeP>217<SeP>168<SeP>814<SeP>404<SeP>401<SeP>212<SeP>260<SeP>163<SeP>200<SeP>238<SeP>456<SeP>231<SeP>435<SeP>104<SeP>321<SeP>271<SeP>238<SeP>321<SeP>213<SeP>155<SeP>96<SeP>194<SeP>125<SeP>262<SeP>651<SeP>60<SeP>205<SeP>170<SeP>231<SeP>51<SeP>83<SeP>272<SeP>253<SeP>127<SeP>137<SeP>72<SeP>24<SeP>325<SeP>254<SeP>190<SeP>129<SeP>284<SeP>273<SeP>124<SeP>488<SeP>365<SeP>215<SeP>300<SeP>229<SeP>282<SeP>198<SeP>356<SeP>340<SeP>169<SeP>380<SeP>92<SeP>47<SeP>311<SeP>343<SeP>53<SeP>214<SeP>475<SeP>141<SeP>78<SeP>435<SeP>64<SeP>192<SeP>243<SeP>260<SeP>241<SeP>169<SeP>299<SeP>79<SeP>123<SeP>170<SeP>125<SeP>544<SeP>131<SeP>39<SeP>109<SeP>99<SeP>8<SeP>101<SeP>174<SeP>319<SeP>177<SeP>261<SeP>84<SeP>283<SeP>124<SeP>116<SeP>117<SeP>83<SeP>9<SeP>139<SeP>237<SeP>153<SeP>377<SeP>786<SeP>424<SeP>273<SeP>745<SeP>274<SeP>582<SeP>189<SeP>468<SeP>494<SeP>244<SeP>519<SeP>315<SeP>683<SeP>807<SeP>981<SeP>570<SeP>317<SeP>306<SeP>250<SeP>292<SeP>406<SeP>816<SeP>643<SeP>345<SeP>483<SeP>273<SeP>550<SeP>704<SeP>614<SeP>441<SeP>374<SeP>535<SeP>772<SeP>211<SeP>319<SeP>508<SeP>722<SeP>577<SeP>563<SeP>403<SeP>81<SeP>83<SeP>343<SeP>63<SeP>202<SeP>419<SeP>215<SeP>66<SeP>350<SeP>117<SeP>59<SeP>86<SeP>299<SeP>201<SeP>229<SeP>257<SeP>244<SeP>394<SeP>59<SeP>126<SeP>240<SeP>174<SeP>401<SeP>352<SeP>103<SeP>182<SeP>129<SeP>111<SeP>65<SeP>198<SeP>44<SeP>74<SeP>322<SeP>71<SeP>135<SeP>156<SeP>84<SeP>62<SeP>66<SeP>62<SeP>212<SeP>329<SeP>323<SeP>47<SeP>250<SeP>155<SeP>490<SeP>92<SeP>152<SeP>158<SeP>206<SeP>224<SeP>31<SeP>38<SeP>144<SeP>121<SeP>226<SeP>112<SeP>158<SeP>329<SeP>21<SeP>379<SeP>157<SeP>353<SeP>61<SeP>64<SeP>48<SeP>49<SeP>96<SeP>85<SeP>31<SeP>19<SeP>80<SeP>103<SeP>32<SeP>75<SeP>71<SeP>193<SeP>114<SeP>93<SeP>24<SeP>263<SeP>73<SeP>527<SeP>29<SeP>117<SeP>15<SeP>310<SeP>28<SeP>20<SeP>213<SeP>67<SeP>86<SeP>40<SeP>192<SeP>45<SeP>115<SeP>297<SeP>85<SeP>33<SeP>91<SeP>49<SeP>36<SeP>393<SeP>142<SeP>51<SeP>84<SeP>64<SeP>211<SeP>97<SeP>41<SeP>447<SeP>29<SeP>29<SeP>16<SeP>259<SeP>82<SeP>38<SeP>78<SeP>65<SeP>63<SeP>87<SeP>280<SeP>134<SeP>143<SeP>79<SeP>57<SeP>83<SeP>34<SeP>32<SeP>38<SeP>307<SeP>51<SeP>140<SeP>146<SeP>123<SeP>91<SeP>19<SeP>134<SeP>135<SeP>172<SeP>82<SeP>114<SeP>89<SeP>38<SeP>120<SeP>83<SeP>118<SeP>152<SeP>50<SeP>172<SeP>59<SeP>424<SeP>352<SeP>68<SeP>140<SeP>153<SeP>35<SeP>41<SeP>130<SeP>46<SeP>97<SeP>102<SeP>126<SeP>177<SeP>25<SeP>13<SeP>83<SeP>189<SeP>48<SeP>78<SeP>8<SeP>28<SeP>21<SeP>285<SeP>110<SeP>27<SeP>160<SeP>109<SeP>11<SeP>25<SeP>80<SeP>49<SeP>53<SeP>281<SeP>57<SeP>17<SeP>35<SeP>502<SeP>126<SeP>558<SeP>343<SeP>43<SeP>75<SeP>76<SeP>48<SeP>137<SeP>38<SeP>121<SeP>28<SeP>293<SeP>211<SeP>304<SeP>44<SeP>108<SeP>26<SeP>226<SeP>39<SeP>19<SeP>176<SeP>283<SeP>398<SeP>57<SeP>39<SeP>42<SeP>206<SeP>180<SeP>57<SeP>10<SeP>106<SeP>116<SeP>120<SeP>212<SeP>122<SeP>190<SeP>321<SeP>154<SeP>147<SeP>170";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-11 00:00:00<SeP>2025-02-11 01:47:51<SeP>2025-02-11 03:35:42<SeP>2025-02-11 05:23:33<SeP>2025-02-11 07:11:24<SeP>2025-02-11 08:59:15<SeP>2025-02-11 10:47:06<SeP>2025-02-11 12:34:57<SeP>2025-02-11 14:22:48<SeP>2025-02-11 16:10:39<SeP>2025-02-11 17:58:30<SeP>2025-02-11 19:46:21<SeP>2025-02-11 21:34:12<SeP>2025-02-11 23:22:03<SeP>2025-02-12 01:09:54<SeP>2025-02-12 02:57:45<SeP>2025-02-12 04:45:36<SeP>2025-02-12 06:33:27<SeP>2025-02-12 08:21:18<SeP>2025-02-12 10:09:09<SeP>2025-02-12 11:57:00<SeP>2025-02-12 13:44:51<SeP>2025-02-12 15:32:42<SeP>2025-02-12 17:20:33<SeP>2025-02-12 19:08:24<SeP>2025-02-12 20:56:15<SeP>2025-02-12 22:44:06<SeP>2025-02-13 00:31:57<SeP>2025-02-13 02:19:48<SeP>2025-02-13 04:07:39<SeP>2025-02-13 05:55:30<SeP>2025-02-13 07:43:21<SeP>2025-02-13 09:31:12<SeP>2025-02-13 11:19:03<SeP>2025-02-13 13:06:54<SeP>2025-02-13 14:54:45<SeP>2025-02-13 16:42:36<SeP>2025-02-13 18:30:27<SeP>2025-02-13 20:18:18<SeP>2025-02-13 22:06:09<SeP>2025-02-13 23:54:00<SeP>2025-02-14 01:41:51<SeP>2025-02-14 03:29:42<SeP>2025-02-14 05:17:33<SeP>2025-02-14 07:05:24<SeP>2025-02-14 08:53:15<SeP>2025-02-14 10:41:06<SeP>2025-02-14 12:28:57<SeP>2025-02-14 14:16:48<SeP>2025-02-14 16:04:39<SeP>2025-02-14 17:52:30<SeP>2025-02-14 19:40:21<SeP>2025-02-14 21:28:12<SeP>2025-02-14 23:16:03<SeP>2025-02-15 01:03:54<SeP>2025-02-15 02:51:45<SeP>2025-02-15 04:39:36<SeP>2025-02-15 06:27:27<SeP>2025-02-15 08:15:18<SeP>2025-02-15 10:03:09<SeP>2025-02-15 11:51:00<SeP>2025-02-15 13:38:51<SeP>2025-02-15 15:26:42<SeP>2025-02-15 17:14:33<SeP>2025-02-15 19:02:24<SeP>2025-02-15 20:50:15<SeP>2025-02-15 22:38:06<SeP>2025-02-16 00:25:57<SeP>2025-02-16 02:13:48<SeP>2025-02-16 04:01:39<SeP>2025-02-16 05:49:30<SeP>2025-02-16 07:37:21<SeP>2025-02-16 09:25:12<SeP>2025-02-16 11:13:03<SeP>2025-02-16 13:00:54<SeP>2025-02-16 14:48:45<SeP>2025-02-16 16:36:36<SeP>2025-02-16 18:24:27<SeP>2025-02-16 20:12:18<SeP>2025-02-16 22:00:09<SeP>2025-02-16 23:48:00<SeP>2025-02-17 01:35:51<SeP>2025-02-17 03:23:42<SeP>2025-02-17 05:11:33<SeP>2025-02-17 06:59:24<SeP>2025-02-17 08:47:15<SeP>2025-02-17 10:35:06<SeP>2025-02-17 12:22:57<SeP>2025-02-17 14:10:48<SeP>2025-02-17 15:58:39<SeP>2025-02-17 17:46:30<SeP>2025-02-17 19:34:21<SeP>2025-02-17 21:22:12<SeP>2025-02-17 23:10:03<SeP>2025-02-18 00:57:54<SeP>2025-02-18 02:45:45<SeP>2025-02-18 04:33:36<SeP>2025-02-18 06:21:27<SeP>2025-02-18 08:09:18<SeP>2025-02-18 09:57:09<SeP>2025-02-18 11:45:00<SeP>2025-02-18 13:32:51<SeP>2025-02-18 15:20:42<SeP>2025-02-18 17:08:33<SeP>2025-02-18 18:56:24<SeP>2025-02-18 20:44:15<SeP>2025-02-18 22:32:06<SeP>2025-02-19 00:19:57<SeP>2025-02-19 02:07:48<SeP>2025-02-19 03:55:39<SeP>2025-02-19 05:43:30<SeP>2025-02-19 07:31:21<SeP>2025-02-19 09:19:12<SeP>2025-02-19 11:07:03<SeP>2025-02-19 12:54:54<SeP>2025-02-19 14:42:45<SeP>2025-02-19 16:30:36<SeP>2025-02-19 18:18:27<SeP>2025-02-19 20:06:18<SeP>2025-02-19 21:54:09<SeP>2025-02-19 23:42:00<SeP>2025-02-20 01:29:51<SeP>2025-02-20 03:17:42<SeP>2025-02-20 05:05:33<SeP>2025-02-20 06:53:24<SeP>2025-02-20 08:41:15<SeP>2025-02-20 10:29:06<SeP>2025-02-20 12:16:57<SeP>2025-02-20 14:04:48<SeP>2025-02-20 15:52:39<SeP>2025-02-20 17:40:30<SeP>2025-02-20 19:28:21<SeP>2025-02-20 21:16:12<SeP>2025-02-20 23:04:03<SeP>2025-02-21 00:51:54<SeP>2025-02-21 02:39:45<SeP>2025-02-21 04:27:36<SeP>2025-02-21 06:15:27<SeP>2025-02-21 08:03:18<SeP>2025-02-21 09:51:09<SeP>2025-02-21 11:39:00<SeP>2025-02-21 13:26:51<SeP>2025-02-21 15:14:42<SeP>2025-02-21 17:02:33<SeP>2025-02-21 18:50:24<SeP>2025-02-21 20:38:15<SeP>2025-02-21 22:26:06<SeP>2025-02-22 00:13:57<SeP>2025-02-22 02:01:48<SeP>2025-02-22 03:49:39<SeP>2025-02-22 05:37:30<SeP>2025-02-22 07:25:21<SeP>2025-02-22 09:13:12<SeP>2025-02-22 11:01:03<SeP>2025-02-22 12:48:54<SeP>2025-02-22 14:36:45<SeP>2025-02-22 16:24:36<SeP>2025-02-22 18:12:27<SeP>2025-02-22 20:00:18<SeP>2025-02-22 21:48:09<SeP>2025-02-22 23:36:00<SeP>2025-02-23 01:23:51<SeP>2025-02-23 03:11:42<SeP>2025-02-23 04:59:33<SeP>2025-02-23 06:47:24<SeP>2025-02-23 08:35:15<SeP>2025-02-23 10:23:06<SeP>2025-02-23 12:10:57<SeP>2025-02-23 13:58:48<SeP>2025-02-23 15:46:39<SeP>2025-02-23 17:34:30<SeP>2025-02-23 19:22:21<SeP>2025-02-23 21:10:12<SeP>2025-02-23 22:58:03<SeP>2025-02-24 00:45:54<SeP>2025-02-24 02:33:45<SeP>2025-02-24 04:21:36<SeP>2025-02-24 06:09:27<SeP>2025-02-24 07:57:18<SeP>2025-02-24 09:45:09<SeP>2025-02-24 11:33:00<SeP>2025-02-24 13:20:51<SeP>2025-02-24 15:08:42<SeP>2025-02-24 16:56:33<SeP>2025-02-24 18:44:24<SeP>2025-02-24 20:32:15<SeP>2025-02-24 22:20:06<SeP>2025-02-25 00:07:57<SeP>2025-02-25 01:55:48<SeP>2025-02-25 03:43:39<SeP>2025-02-25 05:31:30<SeP>2025-02-25 07:19:21<SeP>2025-02-25 09:07:12<SeP>2025-02-25 10:55:03<SeP>2025-02-25 12:42:54<SeP>2025-02-25 14:30:45<SeP>2025-02-25 16:18:36<SeP>2025-02-25 18:06:27<SeP>2025-02-25 19:54:18<SeP>2025-02-25 21:42:09<SeP>2025-02-25 23:30:00<SeP>2025-02-26 01:17:51<SeP>2025-02-26 03:05:42<SeP>2025-02-26 04:53:33<SeP>2025-02-26 06:41:24<SeP>2025-02-26 08:29:15<SeP>2025-02-26 10:17:06<SeP>2025-02-26 12:04:57<SeP>2025-02-26 13:52:48<SeP>2025-02-26 15:40:39<SeP>2025-02-26 17:28:30<SeP>2025-02-26 19:16:21<SeP>2025-02-26 21:04:12<SeP>2025-02-26 22:52:03<SeP>2025-02-27 00:39:54<SeP>2025-02-27 02:27:45<SeP>2025-02-27 04:15:36<SeP>2025-02-27 06:03:27<SeP>2025-02-27 07:51:18<SeP>2025-02-27 09:39:09<SeP>2025-02-27 11:27:00<SeP>2025-02-27 13:14:51<SeP>2025-02-27 15:02:42<SeP>2025-02-27 16:50:33<SeP>2025-02-27 18:38:24<SeP>2025-02-27 20:26:15<SeP>2025-02-27 22:14:06<SeP>2025-02-28 00:01:57<SeP>2025-02-28 01:49:48<SeP>2025-02-28 03:37:39<SeP>2025-02-28 05:25:30<SeP>2025-02-28 07:13:21<SeP>2025-02-28 09:01:12<SeP>2025-02-28 10:49:03<SeP>2025-02-28 12:36:54<SeP>2025-02-28 14:24:45<SeP>2025-02-28 16:12:36<SeP>2025-02-28 18:00:27<SeP>2025-02-28 19:48:18<SeP>2025-02-28 21:36:09<SeP>2025-02-28 23:24:00<SeP>2025-03-01 01:11:51<SeP>2025-03-01 02:59:42<SeP>2025-03-01 04:47:33<SeP>2025-03-01 06:35:24<SeP>2025-03-01 08:23:15<SeP>2025-03-01 10:11:06<SeP>2025-03-01 11:58:57<SeP>2025-03-01 13:46:48<SeP>2025-03-01 15:34:39<SeP>2025-03-01 17:22:30<SeP>2025-03-01 19:10:21<SeP>2025-03-01 20:58:12<SeP>2025-03-01 22:46:03<SeP>2025-03-02 00:33:54<SeP>2025-03-02 02:21:45<SeP>2025-03-02 04:09:36<SeP>2025-03-02 05:57:27<SeP>2025-03-02 07:45:18<SeP>2025-03-02 09:33:09<SeP>2025-03-02 11:21:00<SeP>2025-03-02 13:08:51<SeP>2025-03-02 14:56:42<SeP>2025-03-02 16:44:33<SeP>2025-03-02 18:32:24<SeP>2025-03-02 20:20:15<SeP>2025-03-02 22:08:06<SeP>2025-03-02 23:55:57<SeP>2025-03-03 01:43:48<SeP>2025-03-03 03:31:39<SeP>2025-03-03 05:19:30<SeP>2025-03-03 07:07:21<SeP>2025-03-03 08:55:12<SeP>2025-03-03 10:43:03<SeP>2025-03-03 12:30:54<SeP>2025-03-03 14:18:45<SeP>2025-03-03 16:06:36<SeP>2025-03-03 17:54:27<SeP>2025-03-03 19:42:18<SeP>2025-03-03 21:30:09<SeP>2025-03-03 23:18:00<SeP>2025-03-04 01:05:51<SeP>2025-03-04 02:53:42<SeP>2025-03-04 04:41:33<SeP>2025-03-04 06:29:24<SeP>2025-03-04 08:17:15<SeP>2025-03-04 10:05:06<SeP>2025-03-04 11:52:57<SeP>2025-03-04 13:40:48<SeP>2025-03-04 15:28:39<SeP>2025-03-04 17:16:30<SeP>2025-03-04 19:04:21<SeP>2025-03-04 20:52:12<SeP>2025-03-04 22:40:03<SeP>2025-03-05 00:27:54<SeP>2025-03-05 02:15:45<SeP>2025-03-05 04:03:36<SeP>2025-03-05 05:51:27<SeP>2025-03-05 07:39:18<SeP>2025-03-05 09:27:09<SeP>2025-03-05 11:15:00<SeP>2025-03-05 13:02:51<SeP>2025-03-05 14:50:42<SeP>2025-03-05 16:38:33<SeP>2025-03-05 18:26:24<SeP>2025-03-05 20:14:15<SeP>2025-03-05 22:02:06<SeP>2025-03-05 23:49:57<SeP>2025-03-06 01:37:48<SeP>2025-03-06 03:25:39<SeP>2025-03-06 05:13:30<SeP>2025-03-06 07:01:21<SeP>2025-03-06 08:49:12<SeP>2025-03-06 10:37:03<SeP>2025-03-06 12:24:54<SeP>2025-03-06 14:12:45<SeP>2025-03-06 16:00:36<SeP>2025-03-06 17:48:27<SeP>2025-03-06 19:36:18<SeP>2025-03-06 21:24:09<SeP>2025-03-06 23:12:00<SeP>2025-03-07 00:59:51<SeP>2025-03-07 02:47:42<SeP>2025-03-07 04:35:33<SeP>2025-03-07 06:23:24<SeP>2025-03-07 08:11:15<SeP>2025-03-07 09:59:06<SeP>2025-03-07 11:46:57<SeP>2025-03-07 13:34:48<SeP>2025-03-07 15:22:39<SeP>2025-03-07 17:10:30<SeP>2025-03-07 18:58:21<SeP>2025-03-07 20:46:12<SeP>2025-03-07 22:34:03<SeP>2025-03-08 00:21:54<SeP>2025-03-08 02:09:45<SeP>2025-03-08 03:57:36<SeP>2025-03-08 05:45:27<SeP>2025-03-08 07:33:18<SeP>2025-03-08 09:21:09<SeP>2025-03-08 11:09:00<SeP>2025-03-08 12:56:51<SeP>2025-03-08 14:44:42<SeP>2025-03-08 16:32:33<SeP>2025-03-08 18:20:24<SeP>2025-03-08 20:08:15<SeP>2025-03-08 21:56:06<SeP>2025-03-08 23:43:57<SeP>2025-03-09 01:31:48<SeP>2025-03-09 04:19:39<SeP>2025-03-09 06:07:30<SeP>2025-03-09 07:55:21<SeP>2025-03-09 09:43:12<SeP>2025-03-09 11:31:03<SeP>2025-03-09 13:18:54<SeP>2025-03-09 15:06:45<SeP>2025-03-09 16:54:36<SeP>2025-03-09 18:42:27<SeP>2025-03-09 20:30:18<SeP>2025-03-09 22:18:09<SeP>2025-03-10 00:06:00<SeP>2025-03-10 01:53:51<SeP>2025-03-10 03:41:42<SeP>2025-03-10 05:29:33<SeP>2025-03-10 07:17:24<SeP>2025-03-10 09:05:15<SeP>2025-03-10 10:53:06<SeP>2025-03-10 12:40:57<SeP>2025-03-10 14:28:48<SeP>2025-03-10 16:16:39<SeP>2025-03-10 18:04:30<SeP>2025-03-10 19:52:21<SeP>2025-03-10 21:40:12<SeP>2025-03-10 23:28:03<SeP>2025-03-11 01:15:54<SeP>2025-03-11 03:03:45<SeP>2025-03-11 04:51:36<SeP>2025-03-11 06:39:27<SeP>2025-03-11 08:27:18<SeP>2025-03-11 10:15:09<SeP>2025-03-11 12:03:00<SeP>2025-03-11 13:50:51<SeP>2025-03-11 15:38:42<SeP>2025-03-11 17:26:33<SeP>2025-03-11 19:14:24<SeP>2025-03-11 21:02:15<SeP>2025-03-11 22:50:06<SeP>2025-03-12 00:37:57<SeP>2025-03-12 02:25:48<SeP>2025-03-12 04:13:39<SeP>2025-03-12 06:01:30<SeP>2025-03-12 07:49:21<SeP>2025-03-12 09:37:12<SeP>2025-03-12 11:25:03<SeP>2025-03-12 13:12:54<SeP>2025-03-12 15:00:45<SeP>2025-03-12 16:48:36<SeP>2025-03-12 18:36:27<SeP>2025-03-12 20:24:18<SeP>2025-03-12 22:12:09";
  const itemLabel       = "Escaneos";
  const itemData        = "39<SeP>89<SeP>86<SeP>112<SeP>191<SeP>85<SeP>128<SeP>93<SeP>120<SeP>92<SeP>150<SeP>94<SeP>31<SeP>116<SeP>66<SeP>72<SeP>114<SeP>58<SeP>84<SeP>51<SeP>78<SeP>67<SeP>58<SeP>110<SeP>188<SeP>45<SeP>99<SeP>103<SeP>113<SeP>107<SeP>49<SeP>82<SeP>68<SeP>171<SeP>67<SeP>106<SeP>61<SeP>76<SeP>99<SeP>73<SeP>78<SeP>86<SeP>76<SeP>151<SeP>95<SeP>206<SeP>54<SeP>61<SeP>58<SeP>88<SeP>42<SeP>97<SeP>90<SeP>93<SeP>80<SeP>68<SeP>108<SeP>159<SeP>175<SeP>103<SeP>58<SeP>49<SeP>42<SeP>89<SeP>84<SeP>111<SeP>73<SeP>53<SeP>74<SeP>59<SeP>117<SeP>88<SeP>54<SeP>86<SeP>71<SeP>83<SeP>44<SeP>82<SeP>153<SeP>116<SeP>74<SeP>59<SeP>62<SeP>70<SeP>82<SeP>93<SeP>81<SeP>82<SeP>36<SeP>17<SeP>58<SeP>86<SeP>137<SeP>75<SeP>148<SeP>38<SeP>117<SeP>71<SeP>152<SeP>77<SeP>68<SeP>89<SeP>77<SeP>29<SeP>76<SeP>78<SeP>45<SeP>50<SeP>97<SeP>96<SeP>159<SeP>113<SeP>79<SeP>67<SeP>48<SeP>69<SeP>70<SeP>44<SeP>86<SeP>91<SeP>98<SeP>83<SeP>75<SeP>98<SeP>56<SeP>95<SeP>132<SeP>71<SeP>43<SeP>58<SeP>43<SeP>79<SeP>83<SeP>97<SeP>66<SeP>106<SeP>131<SeP>59<SeP>106<SeP>67<SeP>48<SeP>73<SeP>89<SeP>69<SeP>72<SeP>136<SeP>65<SeP>85<SeP>93<SeP>128<SeP>80<SeP>62<SeP>42<SeP>46<SeP>58<SeP>91<SeP>52<SeP>61<SeP>105<SeP>66<SeP>46<SeP>97<SeP>118<SeP>113<SeP>59<SeP>40<SeP>23<SeP>60<SeP>189<SeP>71<SeP>132<SeP>61<SeP>66<SeP>120<SeP>50<SeP>62<SeP>117<SeP>62<SeP>196<SeP>65<SeP>44<SeP>135<SeP>72<SeP>76<SeP>68<SeP>90<SeP>119<SeP>96<SeP>81<SeP>107<SeP>52<SeP>94<SeP>79<SeP>64<SeP>85<SeP>56<SeP>127<SeP>111<SeP>87<SeP>85<SeP>87<SeP>126<SeP>62<SeP>127<SeP>99<SeP>48<SeP>60<SeP>131<SeP>144<SeP>72<SeP>176<SeP>87<SeP>130<SeP>46<SeP>76<SeP>81<SeP>73<SeP>82<SeP>86<SeP>39<SeP>73<SeP>68<SeP>61<SeP>56<SeP>64<SeP>86<SeP>120<SeP>94<SeP>65<SeP>97<SeP>60<SeP>45<SeP>51<SeP>94<SeP>46<SeP>52<SeP>53<SeP>74<SeP>87<SeP>91<SeP>84<SeP>65<SeP>52<SeP>41<SeP>81<SeP>192<SeP>82<SeP>44<SeP>76<SeP>73<SeP>109<SeP>59<SeP>39<SeP>45<SeP>170<SeP>103<SeP>46<SeP>48<SeP>56<SeP>87<SeP>52<SeP>38<SeP>61<SeP>144<SeP>75<SeP>68<SeP>69<SeP>105<SeP>56<SeP>61<SeP>28<SeP>38<SeP>48<SeP>27<SeP>81<SeP>68<SeP>74<SeP>65<SeP>71<SeP>79<SeP>253<SeP>47<SeP>30<SeP>68<SeP>75<SeP>127<SeP>131<SeP>50<SeP>53<SeP>67<SeP>194<SeP>44<SeP>97<SeP>62<SeP>107<SeP>19<SeP>116<SeP>20<SeP>49<SeP>54<SeP>70<SeP>40<SeP>99<SeP>93<SeP>128<SeP>101<SeP>44<SeP>80<SeP>39<SeP>54<SeP>116<SeP>119<SeP>49<SeP>72<SeP>121<SeP>123<SeP>35<SeP>79<SeP>50<SeP>66<SeP>398<SeP>117<SeP>23<SeP>48<SeP>17<SeP>53<SeP>38<SeP>71<SeP>78<SeP>73<SeP>193<SeP>73<SeP>77<SeP>360<SeP>47<SeP>100<SeP>269<SeP>133<SeP>190<SeP>53<SeP>61<SeP>64<SeP>39<SeP>69<SeP>46<SeP>53<SeP>56<SeP>17<SeP>68<SeP>67<SeP>85<SeP>61<SeP>69<SeP>44<SeP>57<SeP>55<SeP>28<SeP>31<SeP>33<SeP>119<SeP>28<SeP>791<SeP>58<SeP>83<SeP>91<SeP>115<SeP>125<SeP>92<SeP>30<SeP>26<SeP>33<SeP>130<SeP>122<SeP>56<SeP>122<SeP>46<SeP>108<SeP>20<SeP>35<SeP>53<SeP>158<SeP>88<SeP>55<SeP>40<SeP>58<SeP>60<SeP>104<SeP>45<SeP>74<SeP>83<SeP>86<SeP>81<SeP>40<SeP>119<SeP>43<SeP>106<SeP>168<SeP>83<SeP>98<SeP>123";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-11 00:00:00<SeP>2025-02-11 01:47:51<SeP>2025-02-11 03:35:42<SeP>2025-02-11 05:23:33<SeP>2025-02-11 07:11:24<SeP>2025-02-11 08:59:15<SeP>2025-02-11 10:47:06<SeP>2025-02-11 12:34:57<SeP>2025-02-11 14:22:48<SeP>2025-02-11 16:10:39<SeP>2025-02-11 17:58:30<SeP>2025-02-11 19:46:21<SeP>2025-02-11 21:34:12<SeP>2025-02-11 23:22:03<SeP>2025-02-12 01:09:54<SeP>2025-02-12 02:57:45<SeP>2025-02-12 04:45:36<SeP>2025-02-12 06:33:27<SeP>2025-02-12 08:21:18<SeP>2025-02-12 10:09:09<SeP>2025-02-12 11:57:00<SeP>2025-02-12 13:44:51<SeP>2025-02-12 15:32:42<SeP>2025-02-12 17:20:33<SeP>2025-02-12 19:08:24<SeP>2025-02-12 20:56:15<SeP>2025-02-12 22:44:06<SeP>2025-02-13 00:31:57<SeP>2025-02-13 02:19:48<SeP>2025-02-13 04:07:39<SeP>2025-02-13 05:55:30<SeP>2025-02-13 07:43:21<SeP>2025-02-13 09:31:12<SeP>2025-02-13 11:19:03<SeP>2025-02-13 13:06:54<SeP>2025-02-13 14:54:45<SeP>2025-02-13 16:42:36<SeP>2025-02-13 18:30:27<SeP>2025-02-13 20:18:18<SeP>2025-02-13 22:06:09<SeP>2025-02-13 23:54:00<SeP>2025-02-14 01:41:51<SeP>2025-02-14 03:29:42<SeP>2025-02-14 05:17:33<SeP>2025-02-14 07:05:24<SeP>2025-02-14 08:53:15<SeP>2025-02-14 10:41:06<SeP>2025-02-14 12:28:57<SeP>2025-02-14 14:16:48<SeP>2025-02-14 16:04:39<SeP>2025-02-14 17:52:30<SeP>2025-02-14 19:40:21<SeP>2025-02-14 21:28:12<SeP>2025-02-14 23:16:03<SeP>2025-02-15 01:03:54<SeP>2025-02-15 02:51:45<SeP>2025-02-15 04:39:36<SeP>2025-02-15 06:27:27<SeP>2025-02-15 08:15:18<SeP>2025-02-15 10:03:09<SeP>2025-02-15 11:51:00<SeP>2025-02-15 13:38:51<SeP>2025-02-15 15:26:42<SeP>2025-02-15 17:14:33<SeP>2025-02-15 19:02:24<SeP>2025-02-15 20:50:15<SeP>2025-02-15 22:38:06<SeP>2025-02-16 00:25:57<SeP>2025-02-16 02:13:48<SeP>2025-02-16 04:01:39<SeP>2025-02-16 05:49:30<SeP>2025-02-16 07:37:21<SeP>2025-02-16 09:25:12<SeP>2025-02-16 11:13:03<SeP>2025-02-16 13:00:54<SeP>2025-02-16 14:48:45<SeP>2025-02-16 16:36:36<SeP>2025-02-16 18:24:27<SeP>2025-02-16 20:12:18<SeP>2025-02-16 22:00:09<SeP>2025-02-16 23:48:00<SeP>2025-02-17 01:35:51<SeP>2025-02-17 03:23:42<SeP>2025-02-17 05:11:33<SeP>2025-02-17 06:59:24<SeP>2025-02-17 08:47:15<SeP>2025-02-17 10:35:06<SeP>2025-02-17 12:22:57<SeP>2025-02-17 14:10:48<SeP>2025-02-17 15:58:39<SeP>2025-02-17 17:46:30<SeP>2025-02-17 19:34:21<SeP>2025-02-17 21:22:12<SeP>2025-02-17 23:10:03<SeP>2025-02-18 00:57:54<SeP>2025-02-18 02:45:45<SeP>2025-02-18 04:33:36<SeP>2025-02-18 06:21:27<SeP>2025-02-18 08:09:18<SeP>2025-02-18 09:57:09<SeP>2025-02-18 11:45:00<SeP>2025-02-18 13:32:51<SeP>2025-02-18 15:20:42<SeP>2025-02-18 17:08:33<SeP>2025-02-18 18:56:24<SeP>2025-02-18 20:44:15<SeP>2025-02-18 22:32:06<SeP>2025-02-19 00:19:57<SeP>2025-02-19 02:07:48<SeP>2025-02-19 03:55:39<SeP>2025-02-19 05:43:30<SeP>2025-02-19 07:31:21<SeP>2025-02-19 09:19:12<SeP>2025-02-19 11:07:03<SeP>2025-02-19 12:54:54<SeP>2025-02-19 14:42:45<SeP>2025-02-19 16:30:36<SeP>2025-02-19 18:18:27<SeP>2025-02-19 20:06:18<SeP>2025-02-19 21:54:09<SeP>2025-02-19 23:42:00<SeP>2025-02-20 01:29:51<SeP>2025-02-20 03:17:42<SeP>2025-02-20 05:05:33<SeP>2025-02-20 06:53:24<SeP>2025-02-20 08:41:15<SeP>2025-02-20 10:29:06<SeP>2025-02-20 12:16:57<SeP>2025-02-20 14:04:48<SeP>2025-02-20 15:52:39<SeP>2025-02-20 17:40:30<SeP>2025-02-20 19:28:21<SeP>2025-02-20 21:16:12<SeP>2025-02-20 23:04:03<SeP>2025-02-21 00:51:54<SeP>2025-02-21 02:39:45<SeP>2025-02-21 04:27:36<SeP>2025-02-21 06:15:27<SeP>2025-02-21 08:03:18<SeP>2025-02-21 09:51:09<SeP>2025-02-21 11:39:00<SeP>2025-02-21 13:26:51<SeP>2025-02-21 15:14:42<SeP>2025-02-21 17:02:33<SeP>2025-02-21 18:50:24<SeP>2025-02-21 20:38:15<SeP>2025-02-21 22:26:06<SeP>2025-02-22 00:13:57<SeP>2025-02-22 02:01:48<SeP>2025-02-22 03:49:39<SeP>2025-02-22 05:37:30<SeP>2025-02-22 07:25:21<SeP>2025-02-22 09:13:12<SeP>2025-02-22 11:01:03<SeP>2025-02-22 12:48:54<SeP>2025-02-22 14:36:45<SeP>2025-02-22 16:24:36<SeP>2025-02-22 18:12:27<SeP>2025-02-22 20:00:18<SeP>2025-02-22 21:48:09<SeP>2025-02-22 23:36:00<SeP>2025-02-23 01:23:51<SeP>2025-02-23 03:11:42<SeP>2025-02-23 04:59:33<SeP>2025-02-23 06:47:24<SeP>2025-02-23 08:35:15<SeP>2025-02-23 10:23:06<SeP>2025-02-23 12:10:57<SeP>2025-02-23 13:58:48<SeP>2025-02-23 15:46:39<SeP>2025-02-23 17:34:30<SeP>2025-02-23 19:22:21<SeP>2025-02-23 21:10:12<SeP>2025-02-23 22:58:03<SeP>2025-02-24 00:45:54<SeP>2025-02-24 02:33:45<SeP>2025-02-24 04:21:36<SeP>2025-02-24 06:09:27<SeP>2025-02-24 07:57:18<SeP>2025-02-24 09:45:09<SeP>2025-02-24 11:33:00<SeP>2025-02-24 13:20:51<SeP>2025-02-24 15:08:42<SeP>2025-02-24 16:56:33<SeP>2025-02-24 18:44:24<SeP>2025-02-24 20:32:15<SeP>2025-02-24 22:20:06<SeP>2025-02-25 00:07:57<SeP>2025-02-25 01:55:48<SeP>2025-02-25 03:43:39<SeP>2025-02-25 05:31:30<SeP>2025-02-25 07:19:21<SeP>2025-02-25 09:07:12<SeP>2025-02-25 10:55:03<SeP>2025-02-25 12:42:54<SeP>2025-02-25 14:30:45<SeP>2025-02-25 16:18:36<SeP>2025-02-25 18:06:27<SeP>2025-02-25 19:54:18<SeP>2025-02-25 21:42:09<SeP>2025-02-25 23:30:00<SeP>2025-02-26 01:17:51<SeP>2025-02-26 03:05:42<SeP>2025-02-26 04:53:33<SeP>2025-02-26 06:41:24<SeP>2025-02-26 08:29:15<SeP>2025-02-26 10:17:06<SeP>2025-02-26 12:04:57<SeP>2025-02-26 13:52:48<SeP>2025-02-26 15:40:39<SeP>2025-02-26 17:28:30<SeP>2025-02-26 19:16:21<SeP>2025-02-26 21:04:12<SeP>2025-02-26 22:52:03<SeP>2025-02-27 00:39:54<SeP>2025-02-27 02:27:45<SeP>2025-02-27 04:15:36<SeP>2025-02-27 06:03:27<SeP>2025-02-27 07:51:18<SeP>2025-02-27 09:39:09<SeP>2025-02-27 11:27:00<SeP>2025-02-27 13:14:51<SeP>2025-02-27 15:02:42<SeP>2025-02-27 16:50:33<SeP>2025-02-27 18:38:24<SeP>2025-02-27 20:26:15<SeP>2025-02-27 22:14:06<SeP>2025-02-28 00:01:57<SeP>2025-02-28 01:49:48<SeP>2025-02-28 03:37:39<SeP>2025-02-28 05:25:30<SeP>2025-02-28 07:13:21<SeP>2025-02-28 09:01:12<SeP>2025-02-28 10:49:03<SeP>2025-02-28 12:36:54<SeP>2025-02-28 14:24:45<SeP>2025-02-28 16:12:36<SeP>2025-02-28 18:00:27<SeP>2025-02-28 19:48:18<SeP>2025-02-28 21:36:09<SeP>2025-02-28 23:24:00<SeP>2025-03-01 01:11:51<SeP>2025-03-01 02:59:42<SeP>2025-03-01 04:47:33<SeP>2025-03-01 06:35:24<SeP>2025-03-01 08:23:15<SeP>2025-03-01 10:11:06<SeP>2025-03-01 11:58:57<SeP>2025-03-01 13:46:48<SeP>2025-03-01 15:34:39<SeP>2025-03-01 17:22:30<SeP>2025-03-01 19:10:21<SeP>2025-03-01 20:58:12<SeP>2025-03-01 22:46:03<SeP>2025-03-02 00:33:54<SeP>2025-03-02 02:21:45<SeP>2025-03-02 04:09:36<SeP>2025-03-02 05:57:27<SeP>2025-03-02 07:45:18<SeP>2025-03-02 09:33:09<SeP>2025-03-02 11:21:00<SeP>2025-03-02 13:08:51<SeP>2025-03-02 14:56:42<SeP>2025-03-02 16:44:33<SeP>2025-03-02 18:32:24<SeP>2025-03-02 20:20:15<SeP>2025-03-02 22:08:06<SeP>2025-03-02 23:55:57<SeP>2025-03-03 01:43:48<SeP>2025-03-03 03:31:39<SeP>2025-03-03 05:19:30<SeP>2025-03-03 07:07:21<SeP>2025-03-03 08:55:12<SeP>2025-03-03 10:43:03<SeP>2025-03-03 12:30:54<SeP>2025-03-03 14:18:45<SeP>2025-03-03 16:06:36<SeP>2025-03-03 17:54:27<SeP>2025-03-03 19:42:18<SeP>2025-03-03 21:30:09<SeP>2025-03-03 23:18:00<SeP>2025-03-04 01:05:51<SeP>2025-03-04 02:53:42<SeP>2025-03-04 04:41:33<SeP>2025-03-04 06:29:24<SeP>2025-03-04 08:17:15<SeP>2025-03-04 10:05:06<SeP>2025-03-04 11:52:57<SeP>2025-03-04 13:40:48<SeP>2025-03-04 15:28:39<SeP>2025-03-04 17:16:30<SeP>2025-03-04 19:04:21<SeP>2025-03-04 20:52:12<SeP>2025-03-04 22:40:03<SeP>2025-03-05 00:27:54<SeP>2025-03-05 02:15:45<SeP>2025-03-05 04:03:36<SeP>2025-03-05 05:51:27<SeP>2025-03-05 07:39:18<SeP>2025-03-05 09:27:09<SeP>2025-03-05 11:15:00<SeP>2025-03-05 13:02:51<SeP>2025-03-05 14:50:42<SeP>2025-03-05 16:38:33<SeP>2025-03-05 18:26:24<SeP>2025-03-05 20:14:15<SeP>2025-03-05 22:02:06<SeP>2025-03-05 23:49:57<SeP>2025-03-06 01:37:48<SeP>2025-03-06 03:25:39<SeP>2025-03-06 05:13:30<SeP>2025-03-06 07:01:21<SeP>2025-03-06 08:49:12<SeP>2025-03-06 10:37:03<SeP>2025-03-06 12:24:54<SeP>2025-03-06 14:12:45<SeP>2025-03-06 16:00:36<SeP>2025-03-06 17:48:27<SeP>2025-03-06 19:36:18<SeP>2025-03-06 21:24:09<SeP>2025-03-06 23:12:00<SeP>2025-03-07 00:59:51<SeP>2025-03-07 02:47:42<SeP>2025-03-07 04:35:33<SeP>2025-03-07 06:23:24<SeP>2025-03-07 08:11:15<SeP>2025-03-07 09:59:06<SeP>2025-03-07 11:46:57<SeP>2025-03-07 13:34:48<SeP>2025-03-07 15:22:39<SeP>2025-03-07 17:10:30<SeP>2025-03-07 18:58:21<SeP>2025-03-07 20:46:12<SeP>2025-03-07 22:34:03<SeP>2025-03-08 00:21:54<SeP>2025-03-08 02:09:45<SeP>2025-03-08 03:57:36<SeP>2025-03-08 05:45:27<SeP>2025-03-08 07:33:18<SeP>2025-03-08 09:21:09<SeP>2025-03-08 11:09:00<SeP>2025-03-08 12:56:51<SeP>2025-03-08 14:44:42<SeP>2025-03-08 16:32:33<SeP>2025-03-08 18:20:24<SeP>2025-03-08 20:08:15<SeP>2025-03-08 21:56:06<SeP>2025-03-08 23:43:57<SeP>2025-03-09 01:31:48<SeP>2025-03-09 04:19:39<SeP>2025-03-09 06:07:30<SeP>2025-03-09 07:55:21<SeP>2025-03-09 09:43:12<SeP>2025-03-09 11:31:03<SeP>2025-03-09 13:18:54<SeP>2025-03-09 15:06:45<SeP>2025-03-09 16:54:36<SeP>2025-03-09 18:42:27<SeP>2025-03-09 20:30:18<SeP>2025-03-09 22:18:09<SeP>2025-03-10 00:06:00<SeP>2025-03-10 01:53:51<SeP>2025-03-10 03:41:42<SeP>2025-03-10 05:29:33<SeP>2025-03-10 07:17:24<SeP>2025-03-10 09:05:15<SeP>2025-03-10 10:53:06<SeP>2025-03-10 12:40:57<SeP>2025-03-10 14:28:48<SeP>2025-03-10 16:16:39<SeP>2025-03-10 18:04:30<SeP>2025-03-10 19:52:21<SeP>2025-03-10 21:40:12<SeP>2025-03-10 23:28:03<SeP>2025-03-11 01:15:54<SeP>2025-03-11 03:03:45<SeP>2025-03-11 04:51:36<SeP>2025-03-11 06:39:27<SeP>2025-03-11 08:27:18<SeP>2025-03-11 10:15:09<SeP>2025-03-11 12:03:00<SeP>2025-03-11 13:50:51<SeP>2025-03-11 15:38:42<SeP>2025-03-11 17:26:33<SeP>2025-03-11 19:14:24<SeP>2025-03-11 21:02:15<SeP>2025-03-11 22:50:06<SeP>2025-03-12 00:37:57<SeP>2025-03-12 02:25:48<SeP>2025-03-12 04:13:39<SeP>2025-03-12 06:01:30<SeP>2025-03-12 07:49:21<SeP>2025-03-12 09:37:12<SeP>2025-03-12 11:25:03<SeP>2025-03-12 13:12:54<SeP>2025-03-12 15:00:45<SeP>2025-03-12 16:48:36<SeP>2025-03-12 18:36:27<SeP>2025-03-12 20:24:18<SeP>2025-03-12 22:12:09";
  const itemLabel       = "Ataques";
  const itemData        = "229<SeP>170<SeP>332<SeP>81<SeP>224<SeP>170<SeP>137<SeP>47<SeP>501<SeP>113<SeP>307<SeP>69<SeP>104<SeP>363<SeP>314<SeP>397<SeP>2752<SeP>3303<SeP>935<SeP>358<SeP>224<SeP>286<SeP>673<SeP>138<SeP>404<SeP>127<SeP>10<SeP>66<SeP>116<SeP>554<SeP>57<SeP>294<SeP>167<SeP>217<SeP>168<SeP>814<SeP>404<SeP>401<SeP>212<SeP>260<SeP>163<SeP>200<SeP>238<SeP>456<SeP>231<SeP>435<SeP>104<SeP>321<SeP>271<SeP>238<SeP>321<SeP>213<SeP>155<SeP>96<SeP>194<SeP>125<SeP>262<SeP>651<SeP>60<SeP>205<SeP>170<SeP>231<SeP>51<SeP>83<SeP>272<SeP>253<SeP>127<SeP>137<SeP>72<SeP>24<SeP>325<SeP>254<SeP>190<SeP>129<SeP>284<SeP>273<SeP>124<SeP>488<SeP>365<SeP>215<SeP>300<SeP>229<SeP>282<SeP>198<SeP>356<SeP>340<SeP>169<SeP>380<SeP>92<SeP>47<SeP>311<SeP>343<SeP>53<SeP>214<SeP>475<SeP>141<SeP>78<SeP>435<SeP>64<SeP>192<SeP>243<SeP>260<SeP>241<SeP>169<SeP>299<SeP>79<SeP>123<SeP>170<SeP>125<SeP>544<SeP>131<SeP>39<SeP>109<SeP>99<SeP>8<SeP>101<SeP>174<SeP>319<SeP>177<SeP>261<SeP>84<SeP>283<SeP>124<SeP>116<SeP>117<SeP>83<SeP>9<SeP>139<SeP>237<SeP>153<SeP>377<SeP>786<SeP>424<SeP>273<SeP>745<SeP>274<SeP>582<SeP>189<SeP>468<SeP>494<SeP>244<SeP>519<SeP>315<SeP>683<SeP>807<SeP>981<SeP>570<SeP>317<SeP>306<SeP>250<SeP>292<SeP>406<SeP>816<SeP>643<SeP>345<SeP>483<SeP>273<SeP>550<SeP>704<SeP>614<SeP>441<SeP>374<SeP>535<SeP>772<SeP>211<SeP>319<SeP>508<SeP>722<SeP>577<SeP>563<SeP>403<SeP>81<SeP>83<SeP>343<SeP>63<SeP>202<SeP>419<SeP>215<SeP>66<SeP>350<SeP>117<SeP>59<SeP>86<SeP>299<SeP>201<SeP>229<SeP>257<SeP>244<SeP>394<SeP>59<SeP>126<SeP>240<SeP>174<SeP>401<SeP>352<SeP>103<SeP>182<SeP>129<SeP>111<SeP>65<SeP>198<SeP>44<SeP>74<SeP>322<SeP>71<SeP>135<SeP>156<SeP>84<SeP>62<SeP>66<SeP>62<SeP>212<SeP>329<SeP>323<SeP>47<SeP>250<SeP>155<SeP>490<SeP>92<SeP>152<SeP>158<SeP>206<SeP>224<SeP>31<SeP>38<SeP>144<SeP>121<SeP>226<SeP>112<SeP>158<SeP>329<SeP>21<SeP>379<SeP>157<SeP>353<SeP>61<SeP>64<SeP>48<SeP>49<SeP>96<SeP>85<SeP>31<SeP>19<SeP>80<SeP>103<SeP>32<SeP>75<SeP>71<SeP>193<SeP>114<SeP>93<SeP>24<SeP>263<SeP>73<SeP>527<SeP>29<SeP>117<SeP>15<SeP>310<SeP>28<SeP>20<SeP>213<SeP>67<SeP>86<SeP>40<SeP>192<SeP>45<SeP>115<SeP>297<SeP>85<SeP>33<SeP>91<SeP>49<SeP>36<SeP>393<SeP>142<SeP>51<SeP>84<SeP>64<SeP>211<SeP>97<SeP>41<SeP>447<SeP>29<SeP>29<SeP>16<SeP>259<SeP>82<SeP>38<SeP>78<SeP>65<SeP>63<SeP>87<SeP>280<SeP>134<SeP>143<SeP>79<SeP>57<SeP>83<SeP>34<SeP>32<SeP>38<SeP>307<SeP>51<SeP>140<SeP>146<SeP>123<SeP>91<SeP>19<SeP>134<SeP>135<SeP>172<SeP>82<SeP>114<SeP>89<SeP>38<SeP>120<SeP>83<SeP>118<SeP>152<SeP>50<SeP>172<SeP>59<SeP>424<SeP>352<SeP>68<SeP>140<SeP>153<SeP>35<SeP>41<SeP>130<SeP>46<SeP>97<SeP>102<SeP>126<SeP>177<SeP>25<SeP>13<SeP>83<SeP>189<SeP>48<SeP>78<SeP>8<SeP>28<SeP>21<SeP>285<SeP>110<SeP>27<SeP>160<SeP>109<SeP>11<SeP>25<SeP>80<SeP>49<SeP>53<SeP>281<SeP>57<SeP>17<SeP>35<SeP>502<SeP>126<SeP>558<SeP>343<SeP>43<SeP>75<SeP>76<SeP>48<SeP>137<SeP>38<SeP>121<SeP>28<SeP>293<SeP>211<SeP>304<SeP>44<SeP>108<SeP>26<SeP>226<SeP>39<SeP>19<SeP>176<SeP>283<SeP>398<SeP>57<SeP>39<SeP>42<SeP>206<SeP>180<SeP>57<SeP>10<SeP>106<SeP>116<SeP>120<SeP>212<SeP>122<SeP>190<SeP>321<SeP>154<SeP>147<SeP>170";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>India<SeP>South Korea<SeP>Hong Kong<SeP>Russia<SeP>Indonesia<SeP>France";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "21030<SeP>13990<SeP>12230<SeP>8797<SeP>5876<SeP>5414<SeP>4542<SeP>4168<SeP>3879<SeP>3814";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Macao<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "14249<SeP>3287<SeP>2378<SeP>2248<SeP>1310<SeP>1172<SeP>930<SeP>911<SeP>796<SeP>629";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Romania<SeP>Russia";
  const itemLabel   = "Attacks";
  const itemData    = "11300<SeP>10703<SeP>8168<SeP>6781<SeP>4618<SeP>3722<SeP>3623<SeP>3498<SeP>3322<SeP>2858";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>4837<SeP>207566<SeP>136052";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "10357<SeP>9660<SeP>8679<SeP>6226<SeP>4293<SeP>3592<SeP>2984<SeP>2942<SeP>2573<SeP>2404";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4609<SeP>3462<SeP>9269<SeP>4766<SeP>14061<SeP>4811";
  const itemLabel   = "Scans";
  const itemData    = "8274<SeP>2596<SeP>1853<SeP>1291<SeP>1172<SeP>780<SeP>771<SeP>685<SeP>591<SeP>534";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "3462<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>136052<SeP>56971<SeP>4134<SeP>396982";
  const itemLabel   = "Atacks";
  const itemData    = "9577<SeP>8088<SeP>6225<SeP>3608<SeP>3206<SeP>2848<SeP>2403<SeP>1577<SeP>1386<SeP>1282";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>India<SeP>South Korea<SeP>Hong Kong<SeP>Russia<SeP>Indonesia<SeP>France";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "21030<SeP>13990<SeP>12230<SeP>8797<SeP>5876<SeP>5414<SeP>4542<SeP>4168<SeP>3879<SeP>3814";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Macao<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "14249<SeP>3287<SeP>2378<SeP>2248<SeP>1310<SeP>1172<SeP>930<SeP>911<SeP>796<SeP>629";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Romania<SeP>Russia";
  const itemLabel   = "Ataques";
  const itemData    = "11300<SeP>10703<SeP>8168<SeP>6781<SeP>4618<SeP>3722<SeP>3623<SeP>3498<SeP>3322<SeP>2858";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>4837<SeP>207566<SeP>136052";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "10357<SeP>9660<SeP>8679<SeP>6226<SeP>4293<SeP>3592<SeP>2984<SeP>2942<SeP>2573<SeP>2404";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4609<SeP>3462<SeP>9269<SeP>4766<SeP>14061<SeP>4811";
  const itemLabel   = "Escaneos";
  const itemData    = "8274<SeP>2596<SeP>1853<SeP>1291<SeP>1172<SeP>780<SeP>771<SeP>685<SeP>591<SeP>534";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "3462<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>136052<SeP>56971<SeP>4134<SeP>396982";
  const itemLabel   = "Ataques";
  const itemData    = "9577<SeP>8088<SeP>6225<SeP>3608<SeP>3206<SeP>2848<SeP>2403<SeP>1577<SeP>1386<SeP>1282";
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
