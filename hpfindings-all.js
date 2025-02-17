///////////////////////
//                   //
// Global le section //
//                   //
///////////////////////

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
  document.getElementById("trend-click").innerHTML = "34.3";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.3";
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
  const metricData    = "2774096";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "535627";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2238469";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "136499";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1412317";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "826152";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52539";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "244351";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "581801";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42051";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2774096";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "535627";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2238469";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "136499";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1412317";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "826152";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52539";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "244351";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "581801";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42051";
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
  const incomingData = "2774096<SeP>535627<SeP>2238469<SeP>136499";
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
  const incomingData = "2238469<SeP>1412317<SeP>826152<SeP>52539";
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
  const incomingData = "826152<SeP>244351<SeP>581801<SeP>42051";
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
  const incomingData = "2554570<SeP>252001<SeP>2302569";
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
  const incomingData = "388164<SeP>144<SeP>388020<SeP>223";
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
  const incomingData = "2774096<SeP>535627<SeP>2238469<SeP>136499";
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
  const incomingData = "2238469<SeP>1412317<SeP>826152<SeP>52539";
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
  const incomingData = "826152<SeP>244351<SeP>581801<SeP>42051";
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
  const incomingData = "2554570<SeP>252001<SeP>2302569";
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
  const incomingData = "388164<SeP>144<SeP>388020<SeP>223";
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
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>admin 3245gs5662d34<SeP>root admin<SeP>root root<SeP>admin admin<SeP>root qwerty<SeP>root broadguam1<SeP>oracle 3245gs5662d34<SeP>root 123456";
  const column3Data   = "216639<SeP>198210<SeP>12440<SeP>11848<SeP>9663<SeP>9349<SeP>6435<SeP>5593<SeP>4618<SeP>3441";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4<SeP>992cb5a753697ee2642aa390f09326fcdb7fd59119053d6b1bdd35d47e62f472";
  const column2Data  = "207828<SeP>42956<SeP>480<SeP>441<SeP>422<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>upload<SeP>upload";
  const column4Data  = "malicious<SeP>harmless<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>harmless<SeP>harmless<SeP>NA<SeP>NA";
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
  const column2Data  = "2362697<SeP>411399";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listCredentialsSpanish()
{
  const listElement   = "list-credentials";
  const column1Label  = "Nombre de usuario";
  const column2Label  = "Contrase\u00f1a";
  const column3Label  = "N\u00famero";
  const column12Data  = "345gs5662d34 345gs5662d34<SeP>root 3245gs5662d34<SeP>admin 3245gs5662d34<SeP>root admin<SeP>root root<SeP>admin admin<SeP>root qwerty<SeP>root broadguam1<SeP>oracle 3245gs5662d34<SeP>root 123456";
  const column3Data   = "216639<SeP>198210<SeP>12440<SeP>11848<SeP>9663<SeP>9349<SeP>6435<SeP>5593<SeP>4618<SeP>3441";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>d4635f0f5ab84af5e5194453dbf60eaebf6ec47d3675cb5044e5746fb48bd4b4<SeP>992cb5a753697ee2642aa390f09326fcdb7fd59119053d6b1bdd35d47e62f472";
  const column2Data  = "207828<SeP>42956<SeP>480<SeP>441<SeP>422<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>upload<SeP>upload";
  let   column4Data  = "malicious<SeP>harmless<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>harmless<SeP>harmless<SeP>NA<SeP>NA";
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
  const column2Data  = "2362697<SeP>411399";
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
      data: "/scripts/hpdata/map-all-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "traffic between 2023-07-26 and 2025-02-15"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          357731,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "/scripts/hpdata/map-all-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "scans between 2023-07-26 and 2025-02-15"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          220901,32,
          357731,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "/scripts/hpdata/map-all-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "attacks between 2023-07-26 and 2025-02-15"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          136830,21,
          357731,50
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
      data: "/scripts/hpdata/map-all-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "tráfico entre 2023-07-26 y 2025-02-15"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          357731,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "/scripts/hpdata/map-all-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "escaneos entre 2023-07-26 y 2025-02-15"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          220901,32,
          357731,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "/scripts/hpdata/map-all-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "ataques entre 2023-07-26 y 2025-02-15"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          136830,21,
          357731,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:19:21<SeP>2023-07-28 20:38:42<SeP>2023-07-30 06:58:03<SeP>2023-07-31 17:17:24<SeP>2023-08-02 03:36:45<SeP>2023-08-03 13:56:06<SeP>2023-08-05 00:15:27<SeP>2023-08-06 10:34:48<SeP>2023-08-07 20:54:09<SeP>2023-08-09 07:13:30<SeP>2023-08-10 17:32:51<SeP>2023-08-12 03:52:12<SeP>2023-08-13 14:11:33<SeP>2023-08-15 00:30:54<SeP>2023-08-16 10:50:15<SeP>2023-08-17 21:09:36<SeP>2023-08-19 07:28:57<SeP>2023-08-20 17:48:18<SeP>2023-08-22 04:07:39<SeP>2023-08-23 14:27:00<SeP>2023-08-25 00:46:21<SeP>2023-08-26 11:05:42<SeP>2023-08-27 21:25:03<SeP>2023-08-29 07:44:24<SeP>2023-08-30 18:03:45<SeP>2023-09-01 04:23:06<SeP>2023-09-02 14:42:27<SeP>2023-09-04 01:01:48<SeP>2023-09-05 11:21:09<SeP>2023-09-06 21:40:30<SeP>2023-09-08 07:59:51<SeP>2023-09-09 18:19:12<SeP>2023-09-11 04:38:33<SeP>2023-09-12 14:57:54<SeP>2023-09-14 01:17:15<SeP>2023-09-15 11:36:36<SeP>2023-09-16 21:55:57<SeP>2023-09-18 08:15:18<SeP>2023-09-19 18:34:39<SeP>2023-09-21 04:54:00<SeP>2023-09-22 15:13:21<SeP>2023-09-24 01:32:42<SeP>2023-09-25 11:52:03<SeP>2023-09-26 22:11:24<SeP>2023-09-28 08:30:45<SeP>2023-09-29 18:50:06<SeP>2023-10-01 05:09:27<SeP>2023-10-02 15:28:48<SeP>2023-10-04 01:48:09<SeP>2023-10-05 12:07:30<SeP>2023-10-06 22:26:51<SeP>2023-10-08 08:46:12<SeP>2023-10-09 19:05:33<SeP>2023-10-11 05:24:54<SeP>2023-10-12 15:44:15<SeP>2023-10-14 02:03:36<SeP>2023-10-15 12:22:57<SeP>2023-10-16 22:42:18<SeP>2023-10-18 09:01:39<SeP>2023-10-19 19:21:00<SeP>2023-10-21 05:40:21<SeP>2023-10-22 15:59:42<SeP>2023-10-24 02:19:03<SeP>2023-10-25 12:38:24<SeP>2023-10-26 22:57:45<SeP>2023-10-28 09:17:06<SeP>2023-10-29 19:36:27<SeP>2023-10-31 05:55:48<SeP>2023-11-01 16:15:09<SeP>2023-11-03 02:34:30<SeP>2023-11-04 12:53:51<SeP>2023-11-05 22:13:12<SeP>2023-11-07 08:32:33<SeP>2023-11-08 18:51:54<SeP>2023-11-10 05:11:15<SeP>2023-11-11 15:30:36<SeP>2023-11-13 01:49:57<SeP>2023-11-14 12:09:18<SeP>2023-11-15 22:28:39<SeP>2023-11-17 08:48:00<SeP>2023-11-18 19:07:21<SeP>2023-11-20 05:26:42<SeP>2023-11-21 15:46:03<SeP>2023-11-23 02:05:24<SeP>2023-11-24 12:24:45<SeP>2023-11-25 22:44:06<SeP>2023-11-27 09:03:27<SeP>2023-11-28 19:22:48<SeP>2023-11-30 05:42:09<SeP>2023-12-01 16:01:30<SeP>2023-12-03 02:20:51<SeP>2023-12-04 12:40:12<SeP>2023-12-05 22:59:33<SeP>2023-12-07 09:18:54<SeP>2023-12-08 19:38:15<SeP>2023-12-10 05:57:36<SeP>2023-12-11 16:16:57<SeP>2023-12-13 02:36:18<SeP>2023-12-14 12:55:39<SeP>2023-12-15 23:15:00<SeP>2023-12-17 09:34:21<SeP>2023-12-18 19:53:42<SeP>2023-12-20 06:13:03<SeP>2023-12-21 16:32:24<SeP>2023-12-23 02:51:45<SeP>2023-12-24 13:11:06<SeP>2023-12-25 23:30:27<SeP>2023-12-27 09:49:48<SeP>2023-12-28 20:09:09<SeP>2023-12-30 06:28:30<SeP>2023-12-31 16:47:51<SeP>2024-01-02 03:07:12<SeP>2024-01-03 13:26:33<SeP>2024-01-04 23:45:54<SeP>2024-01-06 10:05:15<SeP>2024-01-07 20:24:36<SeP>2024-01-09 06:43:57<SeP>2024-01-10 17:03:18<SeP>2024-01-12 03:22:39<SeP>2024-01-13 13:42:00<SeP>2024-01-15 00:01:21<SeP>2024-01-16 10:20:42<SeP>2024-01-17 20:40:03<SeP>2024-01-19 06:59:24<SeP>2024-01-20 17:18:45<SeP>2024-01-22 03:38:06<SeP>2024-01-23 13:57:27<SeP>2024-01-25 00:16:48<SeP>2024-01-26 10:36:09<SeP>2024-01-27 20:55:30<SeP>2024-01-29 07:14:51<SeP>2024-01-30 17:34:12<SeP>2024-02-01 03:53:33<SeP>2024-02-02 14:12:54<SeP>2024-02-04 00:32:15<SeP>2024-02-05 10:51:36<SeP>2024-02-06 21:10:57<SeP>2024-02-08 07:30:18<SeP>2024-02-09 17:49:39<SeP>2024-02-11 04:09:00<SeP>2024-02-12 14:28:21<SeP>2024-02-14 00:47:42<SeP>2024-02-15 11:07:03<SeP>2024-02-16 21:26:24<SeP>2024-02-18 07:45:45<SeP>2024-02-19 18:05:06<SeP>2024-02-21 04:24:27<SeP>2024-02-22 14:43:48<SeP>2024-02-24 01:03:09<SeP>2024-02-25 11:22:30<SeP>2024-02-26 21:41:51<SeP>2024-02-28 08:01:12<SeP>2024-02-29 18:20:33<SeP>2024-03-02 04:39:54<SeP>2024-03-03 14:59:15<SeP>2024-03-05 01:18:36<SeP>2024-03-06 11:37:57<SeP>2024-03-07 21:57:18<SeP>2024-03-09 08:16:39<SeP>2024-03-10 19:36:00<SeP>2024-03-12 05:55:21<SeP>2024-03-13 16:14:42<SeP>2024-03-15 02:34:03<SeP>2024-03-16 12:53:24<SeP>2024-03-17 23:12:45<SeP>2024-03-19 09:32:06<SeP>2024-03-20 19:51:27<SeP>2024-03-22 06:10:48<SeP>2024-03-23 16:30:09<SeP>2024-03-25 02:49:30<SeP>2024-03-26 13:08:51<SeP>2024-03-27 23:28:12<SeP>2024-03-29 09:47:33<SeP>2024-03-30 20:06:54<SeP>2024-04-01 06:26:15<SeP>2024-04-02 16:45:36<SeP>2024-04-04 03:04:57<SeP>2024-04-05 13:24:18<SeP>2024-04-06 23:43:39<SeP>2024-04-08 10:03:00<SeP>2024-04-09 20:22:21<SeP>2024-04-11 06:41:42<SeP>2024-04-12 17:01:03<SeP>2024-04-14 03:20:24<SeP>2024-04-15 13:39:45<SeP>2024-04-16 23:59:06<SeP>2024-04-18 10:18:27<SeP>2024-04-19 20:37:48<SeP>2024-04-21 06:57:09<SeP>2024-04-22 17:16:30<SeP>2024-04-24 03:35:51<SeP>2024-04-25 13:55:12<SeP>2024-04-27 00:14:33<SeP>2024-04-28 10:33:54<SeP>2024-04-29 20:53:15<SeP>2024-05-01 07:12:36<SeP>2024-05-02 17:31:57<SeP>2024-05-04 03:51:18<SeP>2024-05-05 14:10:39<SeP>2024-05-07 00:30:00<SeP>2024-05-08 10:49:21<SeP>2024-05-09 21:08:42<SeP>2024-05-11 07:28:03<SeP>2024-05-12 17:47:24<SeP>2024-05-14 04:06:45<SeP>2024-05-15 14:26:06<SeP>2024-05-17 00:45:27<SeP>2024-05-18 11:04:48<SeP>2024-05-19 21:24:09<SeP>2024-05-21 07:43:30<SeP>2024-05-22 18:02:51<SeP>2024-05-24 04:22:12<SeP>2024-05-25 14:41:33<SeP>2024-05-27 01:00:54<SeP>2024-05-28 11:20:15<SeP>2024-05-29 21:39:36<SeP>2024-05-31 07:58:57<SeP>2024-06-01 18:18:18<SeP>2024-06-03 04:37:39<SeP>2024-06-04 14:57:00<SeP>2024-06-06 01:16:21<SeP>2024-06-07 11:35:42<SeP>2024-06-08 21:55:03<SeP>2024-06-10 08:14:24<SeP>2024-06-11 18:33:45<SeP>2024-06-13 04:53:06<SeP>2024-06-14 15:12:27<SeP>2024-06-16 01:31:48<SeP>2024-06-17 11:51:09<SeP>2024-06-18 22:10:30<SeP>2024-06-20 08:29:51<SeP>2024-06-21 18:49:12<SeP>2024-06-23 05:08:33<SeP>2024-06-24 15:27:54<SeP>2024-06-26 01:47:15<SeP>2024-06-27 12:06:36<SeP>2024-06-28 22:25:57<SeP>2024-06-30 08:45:18<SeP>2024-07-01 19:04:39<SeP>2024-07-03 05:24:00<SeP>2024-07-04 15:43:21<SeP>2024-07-06 02:02:42<SeP>2024-07-07 12:22:03<SeP>2024-07-08 22:41:24<SeP>2024-07-10 09:00:45<SeP>2024-07-11 19:20:06<SeP>2024-07-13 05:39:27<SeP>2024-07-14 15:58:48<SeP>2024-07-16 02:18:09<SeP>2024-07-17 12:37:30<SeP>2024-07-18 22:56:51<SeP>2024-07-20 09:16:12<SeP>2024-07-21 19:35:33<SeP>2024-07-23 05:54:54<SeP>2024-07-24 16:14:15<SeP>2024-07-26 02:33:36<SeP>2024-07-27 12:52:57<SeP>2024-07-28 23:12:18<SeP>2024-07-30 09:31:39<SeP>2024-07-31 19:51:00<SeP>2024-08-02 06:10:21<SeP>2024-08-03 16:29:42<SeP>2024-08-05 02:49:03<SeP>2024-08-06 13:08:24<SeP>2024-08-07 23:27:45<SeP>2024-08-09 09:47:06<SeP>2024-08-10 20:06:27<SeP>2024-08-12 06:25:48<SeP>2024-08-13 16:45:09<SeP>2024-08-15 03:04:30<SeP>2024-08-16 13:23:51<SeP>2024-08-17 23:43:12<SeP>2024-08-19 10:02:33<SeP>2024-08-20 20:21:54<SeP>2024-08-22 06:41:15<SeP>2024-08-23 17:00:36<SeP>2024-08-25 03:19:57<SeP>2024-08-26 13:39:18<SeP>2024-08-27 23:58:39<SeP>2024-08-29 10:18:00<SeP>2024-08-30 20:37:21<SeP>2024-09-01 06:56:42<SeP>2024-09-02 17:16:03<SeP>2024-09-04 03:35:24<SeP>2024-09-05 13:54:45<SeP>2024-09-07 00:14:06<SeP>2024-09-08 10:33:27<SeP>2024-09-09 20:52:48<SeP>2024-09-11 07:12:09<SeP>2024-09-12 17:31:30<SeP>2024-09-14 03:50:51<SeP>2024-09-15 14:10:12<SeP>2024-09-17 00:29:33<SeP>2024-09-18 10:48:54<SeP>2024-09-19 21:08:15<SeP>2024-09-21 07:27:36<SeP>2024-09-22 17:46:57<SeP>2024-09-24 04:06:18<SeP>2024-09-25 14:25:39<SeP>2024-09-27 00:45:00<SeP>2024-09-28 11:04:21<SeP>2024-09-29 21:23:42<SeP>2024-10-01 07:43:03<SeP>2024-10-02 18:02:24<SeP>2024-10-04 04:21:45<SeP>2024-10-05 14:41:06<SeP>2024-10-07 01:00:27<SeP>2024-10-08 11:19:48<SeP>2024-10-09 21:39:09<SeP>2024-10-11 07:58:30<SeP>2024-10-12 18:17:51<SeP>2024-10-14 04:37:12<SeP>2024-10-15 14:56:33<SeP>2024-10-17 01:15:54<SeP>2024-10-18 11:35:15<SeP>2024-10-19 21:54:36<SeP>2024-10-21 08:13:57<SeP>2024-10-22 18:33:18<SeP>2024-10-24 04:52:39<SeP>2024-10-25 15:12:00<SeP>2024-10-27 01:31:21<SeP>2024-10-28 11:50:42<SeP>2024-10-29 22:10:03<SeP>2024-10-31 08:29:24<SeP>2024-11-01 18:48:45<SeP>2024-11-03 04:08:06<SeP>2024-11-04 14:27:27<SeP>2024-11-06 00:46:48<SeP>2024-11-07 11:06:09<SeP>2024-11-08 21:25:30<SeP>2024-11-10 07:44:51<SeP>2024-11-11 18:04:12<SeP>2024-11-13 04:23:33<SeP>2024-11-14 14:42:54<SeP>2024-11-16 01:02:15<SeP>2024-11-17 11:21:36<SeP>2024-11-18 21:40:57<SeP>2024-11-20 08:00:18<SeP>2024-11-21 18:19:39<SeP>2024-11-23 04:39:00<SeP>2024-11-24 14:58:21<SeP>2024-11-26 01:17:42<SeP>2024-11-27 11:37:03<SeP>2024-11-28 21:56:24<SeP>2024-11-30 08:15:45<SeP>2024-12-01 18:35:06<SeP>2024-12-03 04:54:27<SeP>2024-12-04 15:13:48<SeP>2024-12-06 01:33:09<SeP>2024-12-07 11:52:30<SeP>2024-12-08 22:11:51<SeP>2024-12-10 08:31:12<SeP>2024-12-11 18:50:33<SeP>2024-12-13 05:09:54<SeP>2024-12-14 15:29:15<SeP>2024-12-16 01:48:36<SeP>2024-12-17 12:07:57<SeP>2024-12-18 22:27:18<SeP>2024-12-20 08:46:39<SeP>2024-12-21 19:06:00<SeP>2024-12-23 05:25:21<SeP>2024-12-24 15:44:42<SeP>2024-12-26 02:04:03<SeP>2024-12-27 12:23:24<SeP>2024-12-28 22:42:45<SeP>2024-12-30 09:02:06<SeP>2024-12-31 19:21:27<SeP>2025-01-02 05:40:48<SeP>2025-01-03 16:00:09<SeP>2025-01-05 02:19:30<SeP>2025-01-06 12:38:51<SeP>2025-01-07 22:58:12<SeP>2025-01-09 09:17:33<SeP>2025-01-10 19:36:54<SeP>2025-01-12 05:56:15<SeP>2025-01-13 16:15:36<SeP>2025-01-15 02:34:57<SeP>2025-01-16 12:54:18<SeP>2025-01-17 23:13:39<SeP>2025-01-19 09:33:00<SeP>2025-01-20 19:52:21<SeP>2025-01-22 06:11:42<SeP>2025-01-23 16:31:03<SeP>2025-01-25 02:50:24<SeP>2025-01-26 13:09:45<SeP>2025-01-27 23:29:06<SeP>2025-01-29 09:48:27<SeP>2025-01-30 20:07:48<SeP>2025-02-01 06:27:09<SeP>2025-02-02 16:46:30<SeP>2025-02-04 03:05:51<SeP>2025-02-05 13:25:12<SeP>2025-02-06 23:44:33<SeP>2025-02-08 10:03:54<SeP>2025-02-09 20:23:15<SeP>2025-02-11 06:42:36<SeP>2025-02-12 17:01:57<SeP>2025-02-14 03:21:18<SeP>2025-02-15 13:40:39";
  const item1Label       = "Scans";
  const item1Data        = "752<SeP>1442<SeP>1365<SeP>1425<SeP>1187<SeP>1610<SeP>1105<SeP>960<SeP>1069<SeP>3294<SeP>1497<SeP>2860<SeP>1755<SeP>2583<SeP>724<SeP>816<SeP>1384<SeP>898<SeP>3130<SeP>1445<SeP>1460<SeP>1019<SeP>911<SeP>1061<SeP>1178<SeP>932<SeP>666<SeP>943<SeP>3676<SeP>866<SeP>810<SeP>1105<SeP>1469<SeP>883<SeP>793<SeP>3118<SeP>2462<SeP>2056<SeP>1658<SeP>1608<SeP>1282<SeP>1438<SeP>1870<SeP>1885<SeP>1991<SeP>1471<SeP>1580<SeP>1506<SeP>1776<SeP>1712<SeP>1718<SeP>1766<SeP>1694<SeP>1566<SeP>3112<SeP>1703<SeP>1406<SeP>1718<SeP>2056<SeP>2257<SeP>1432<SeP>2953<SeP>2216<SeP>1403<SeP>1479<SeP>1385<SeP>1588<SeP>1745<SeP>1533<SeP>1235<SeP>1408<SeP>1189<SeP>2316<SeP>1182<SeP>1079<SeP>1190<SeP>1971<SeP>7570<SeP>1148<SeP>1343<SeP>1303<SeP>1660<SeP>1903<SeP>1106<SeP>6516<SeP>1611<SeP>1627<SeP>933<SeP>1102<SeP>3256<SeP>1236<SeP>1044<SeP>941<SeP>1093<SeP>1003<SeP>3051<SeP>891<SeP>1150<SeP>2810<SeP>4380<SeP>3964<SeP>893<SeP>921<SeP>943<SeP>944<SeP>989<SeP>823<SeP>1110<SeP>2347<SeP>3273<SeP>1647<SeP>1225<SeP>1342<SeP>560<SeP>1408<SeP>1272<SeP>1172<SeP>857<SeP>1764<SeP>1568<SeP>1273<SeP>994<SeP>923<SeP>1093<SeP>768<SeP>839<SeP>871<SeP>773<SeP>864<SeP>1035<SeP>782<SeP>808<SeP>810<SeP>921<SeP>818<SeP>669<SeP>875<SeP>842<SeP>895<SeP>834<SeP>750<SeP>860<SeP>725<SeP>805<SeP>1045<SeP>755<SeP>864<SeP>860<SeP>921<SeP>866<SeP>1066<SeP>934<SeP>486<SeP>920<SeP>855<SeP>910<SeP>1161<SeP>960<SeP>1070<SeP>1252<SeP>1001<SeP>951<SeP>903<SeP>884<SeP>813<SeP>800<SeP>1046<SeP>884<SeP>896<SeP>922<SeP>1080<SeP>886<SeP>1078<SeP>968<SeP>1012<SeP>1064<SeP>919<SeP>868<SeP>1996<SeP>1261<SeP>1193<SeP>1034<SeP>917<SeP>1131<SeP>989<SeP>943<SeP>771<SeP>723<SeP>935<SeP>1076<SeP>818<SeP>1058<SeP>1183<SeP>1111<SeP>1145<SeP>1250<SeP>1087<SeP>1302<SeP>1104<SeP>1509<SeP>1166<SeP>1468<SeP>2040<SeP>1241<SeP>1054<SeP>808<SeP>1084<SeP>882<SeP>1084<SeP>478<SeP>839<SeP>917<SeP>897<SeP>2268<SeP>5315<SeP>2188<SeP>1924<SeP>1222<SeP>871<SeP>972<SeP>913<SeP>924<SeP>931<SeP>1094<SeP>1007<SeP>1065<SeP>1382<SeP>1959<SeP>1015<SeP>1207<SeP>1219<SeP>1245<SeP>1104<SeP>1037<SeP>920<SeP>1096<SeP>1096<SeP>960<SeP>1085<SeP>1040<SeP>1117<SeP>897<SeP>974<SeP>1346<SeP>1096<SeP>1052<SeP>1198<SeP>1334<SeP>1209<SeP>1487<SeP>1232<SeP>1047<SeP>1157<SeP>1100<SeP>1971<SeP>1186<SeP>1663<SeP>1753<SeP>1428<SeP>1948<SeP>1623<SeP>1228<SeP>1161<SeP>1077<SeP>1327<SeP>1403<SeP>1277<SeP>1254<SeP>1260<SeP>1669<SeP>1559<SeP>1344<SeP>1502<SeP>1457<SeP>1175<SeP>980<SeP>1114<SeP>1361<SeP>1051<SeP>1206<SeP>1299<SeP>1136<SeP>1459<SeP>1866<SeP>1302<SeP>1234<SeP>1577<SeP>1431<SeP>1063<SeP>1083<SeP>900<SeP>847<SeP>872<SeP>1029<SeP>976<SeP>1777<SeP>1073<SeP>1111<SeP>1061<SeP>796<SeP>1084<SeP>807<SeP>1402<SeP>876<SeP>799<SeP>1077<SeP>1259<SeP>1535<SeP>1410<SeP>1074<SeP>1079<SeP>969<SeP>1816<SeP>1038<SeP>1055<SeP>1094<SeP>951<SeP>1595<SeP>967<SeP>936<SeP>1203<SeP>1059<SeP>810<SeP>902<SeP>1113<SeP>1380<SeP>1540<SeP>1347<SeP>1388<SeP>1316<SeP>935<SeP>1149<SeP>1168<SeP>1111<SeP>872<SeP>1258<SeP>1000<SeP>995<SeP>1309<SeP>1515<SeP>1272<SeP>1560<SeP>1308<SeP>1319<SeP>1513<SeP>1396<SeP>1494<SeP>1294<SeP>1447<SeP>1196<SeP>1762<SeP>1203<SeP>1518<SeP>1519<SeP>1315<SeP>1407<SeP>1355<SeP>1124<SeP>1261<SeP>1405<SeP>1600<SeP>1494<SeP>1229<SeP>1120<SeP>1273<SeP>1351<SeP>1279<SeP>1106<SeP>1597<SeP>1872<SeP>1410<SeP>1179<SeP>700<SeP>1434<SeP>1770<SeP>1291<SeP>1226<SeP>1289<SeP>1019<SeP>1469<SeP>1262<SeP>1267<SeP>1465<SeP>1710<SeP>1324<SeP>1560<SeP>1668<SeP>1297<SeP>1387<SeP>1451<SeP>1590<SeP>1481<SeP>1156<SeP>1162<SeP>1870<SeP>1575<SeP>1766<SeP>1784<SeP>1870<SeP>1533";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "152<SeP>612<SeP>965<SeP>703<SeP>559<SeP>213<SeP>6947<SeP>481<SeP>9230<SeP>970<SeP>231<SeP>1272<SeP>441<SeP>1087<SeP>142<SeP>427<SeP>167<SeP>361<SeP>660<SeP>2528<SeP>7122<SeP>7893<SeP>6203<SeP>9476<SeP>455<SeP>293<SeP>403<SeP>173<SeP>380<SeP>5905<SeP>104<SeP>365<SeP>132<SeP>493<SeP>317<SeP>7188<SeP>9578<SeP>9240<SeP>10277<SeP>7310<SeP>5079<SeP>7932<SeP>6305<SeP>9724<SeP>8856<SeP>7685<SeP>7820<SeP>8196<SeP>8454<SeP>7840<SeP>6958<SeP>5281<SeP>10594<SeP>8662<SeP>6391<SeP>7595<SeP>8386<SeP>9213<SeP>17970<SeP>16500<SeP>9044<SeP>11315<SeP>6655<SeP>7642<SeP>8476<SeP>9019<SeP>7881<SeP>7238<SeP>6317<SeP>6581<SeP>6826<SeP>4971<SeP>3400<SeP>6813<SeP>5773<SeP>6449<SeP>6054<SeP>7167<SeP>4093<SeP>5194<SeP>8032<SeP>4445<SeP>6385<SeP>5524<SeP>4321<SeP>7051<SeP>4982<SeP>5405<SeP>5707<SeP>6577<SeP>21512<SeP>11277<SeP>33831<SeP>7630<SeP>7747<SeP>7336<SeP>11118<SeP>6727<SeP>4992<SeP>6344<SeP>3906<SeP>4822<SeP>6090<SeP>5072<SeP>8752<SeP>5347<SeP>6515<SeP>4920<SeP>4424<SeP>8286<SeP>8606<SeP>7591<SeP>6670<SeP>3830<SeP>8334<SeP>10198<SeP>7291<SeP>2734<SeP>4774<SeP>7453<SeP>7829<SeP>5696<SeP>7287<SeP>8026<SeP>2624<SeP>3032<SeP>1171<SeP>1628<SeP>1812<SeP>2491<SeP>825<SeP>1311<SeP>613<SeP>1662<SeP>1199<SeP>1136<SeP>1032<SeP>897<SeP>1047<SeP>752<SeP>1434<SeP>1367<SeP>1211<SeP>814<SeP>2239<SeP>2020<SeP>6042<SeP>10554<SeP>7575<SeP>8608<SeP>6659<SeP>12939<SeP>2171<SeP>8913<SeP>11793<SeP>9587<SeP>11779<SeP>9138<SeP>11137<SeP>10742<SeP>9557<SeP>11363<SeP>7342<SeP>3457<SeP>7692<SeP>12930<SeP>17410<SeP>6410<SeP>8078<SeP>10823<SeP>17301<SeP>6169<SeP>6335<SeP>6664<SeP>6425<SeP>19980<SeP>13894<SeP>7615<SeP>10873<SeP>4984<SeP>6932<SeP>5526<SeP>6417<SeP>14593<SeP>5920<SeP>13464<SeP>8249<SeP>6798<SeP>7495<SeP>5718<SeP>4185<SeP>5933<SeP>7684<SeP>4944<SeP>7065<SeP>6650<SeP>5636<SeP>20735<SeP>5363<SeP>7568<SeP>6204<SeP>8140<SeP>10017<SeP>6558<SeP>5084<SeP>3493<SeP>7079<SeP>2747<SeP>5300<SeP>4089<SeP>676<SeP>117<SeP>623<SeP>194<SeP>540<SeP>637<SeP>770<SeP>413<SeP>907<SeP>1049<SeP>1356<SeP>3289<SeP>22569<SeP>629<SeP>4442<SeP>3814<SeP>1900<SeP>7880<SeP>2740<SeP>4073<SeP>3041<SeP>3209<SeP>2914<SeP>3245<SeP>4046<SeP>2547<SeP>2159<SeP>3561<SeP>1864<SeP>2006<SeP>1846<SeP>1429<SeP>956<SeP>1689<SeP>921<SeP>1330<SeP>1120<SeP>26790<SeP>1766<SeP>3914<SeP>3896<SeP>2185<SeP>3548<SeP>2626<SeP>1821<SeP>3560<SeP>2431<SeP>3621<SeP>2491<SeP>2517<SeP>3056<SeP>3430<SeP>6632<SeP>4637<SeP>4350<SeP>3356<SeP>2866<SeP>3299<SeP>3761<SeP>5949<SeP>7988<SeP>5411<SeP>2018<SeP>3366<SeP>2546<SeP>4030<SeP>3758<SeP>3719<SeP>2687<SeP>2605<SeP>5988<SeP>3262<SeP>6143<SeP>3567<SeP>5398<SeP>5708<SeP>5580<SeP>3688<SeP>17700<SeP>10240<SeP>12486<SeP>1726<SeP>2272<SeP>4742<SeP>3323<SeP>3754<SeP>4132<SeP>4995<SeP>3608<SeP>4444<SeP>4627<SeP>3137<SeP>3721<SeP>1412<SeP>1592<SeP>2124<SeP>3832<SeP>2295<SeP>3002<SeP>3526<SeP>4499<SeP>3534<SeP>3327<SeP>4147<SeP>3416<SeP>2564<SeP>6001<SeP>7766<SeP>6231<SeP>4219<SeP>5326<SeP>4482<SeP>3468<SeP>3455<SeP>4602<SeP>5677<SeP>5210<SeP>4215<SeP>4292<SeP>2064<SeP>667<SeP>2015<SeP>1650<SeP>827<SeP>1309<SeP>1844<SeP>1113<SeP>1725<SeP>4050<SeP>4707<SeP>6352<SeP>34234<SeP>4459<SeP>4279<SeP>22075<SeP>7213<SeP>5069<SeP>6071<SeP>4369<SeP>24112<SeP>4877<SeP>5135<SeP>4459<SeP>4571<SeP>6230<SeP>26328<SeP>8710<SeP>4047<SeP>3558<SeP>3911<SeP>5518<SeP>5084<SeP>2759<SeP>3445<SeP>3966<SeP>5194<SeP>4959<SeP>13069<SeP>9184<SeP>5599<SeP>6562<SeP>3391<SeP>2435<SeP>3315<SeP>4369<SeP>4041<SeP>3828<SeP>2850<SeP>3890<SeP>2231<SeP>4125<SeP>3884<SeP>7117<SeP>9401<SeP>9044<SeP>8500<SeP>8629<SeP>7390<SeP>6655<SeP>5106<SeP>4494<SeP>6323<SeP>23205<SeP>3261<SeP>3912<SeP>3302<SeP>11078<SeP>4995<SeP>4775<SeP>3926";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:19:21<SeP>2023-07-28 20:38:42<SeP>2023-07-30 06:58:03<SeP>2023-07-31 17:17:24<SeP>2023-08-02 03:36:45<SeP>2023-08-03 13:56:06<SeP>2023-08-05 00:15:27<SeP>2023-08-06 10:34:48<SeP>2023-08-07 20:54:09<SeP>2023-08-09 07:13:30<SeP>2023-08-10 17:32:51<SeP>2023-08-12 03:52:12<SeP>2023-08-13 14:11:33<SeP>2023-08-15 00:30:54<SeP>2023-08-16 10:50:15<SeP>2023-08-17 21:09:36<SeP>2023-08-19 07:28:57<SeP>2023-08-20 17:48:18<SeP>2023-08-22 04:07:39<SeP>2023-08-23 14:27:00<SeP>2023-08-25 00:46:21<SeP>2023-08-26 11:05:42<SeP>2023-08-27 21:25:03<SeP>2023-08-29 07:44:24<SeP>2023-08-30 18:03:45<SeP>2023-09-01 04:23:06<SeP>2023-09-02 14:42:27<SeP>2023-09-04 01:01:48<SeP>2023-09-05 11:21:09<SeP>2023-09-06 21:40:30<SeP>2023-09-08 07:59:51<SeP>2023-09-09 18:19:12<SeP>2023-09-11 04:38:33<SeP>2023-09-12 14:57:54<SeP>2023-09-14 01:17:15<SeP>2023-09-15 11:36:36<SeP>2023-09-16 21:55:57<SeP>2023-09-18 08:15:18<SeP>2023-09-19 18:34:39<SeP>2023-09-21 04:54:00<SeP>2023-09-22 15:13:21<SeP>2023-09-24 01:32:42<SeP>2023-09-25 11:52:03<SeP>2023-09-26 22:11:24<SeP>2023-09-28 08:30:45<SeP>2023-09-29 18:50:06<SeP>2023-10-01 05:09:27<SeP>2023-10-02 15:28:48<SeP>2023-10-04 01:48:09<SeP>2023-10-05 12:07:30<SeP>2023-10-06 22:26:51<SeP>2023-10-08 08:46:12<SeP>2023-10-09 19:05:33<SeP>2023-10-11 05:24:54<SeP>2023-10-12 15:44:15<SeP>2023-10-14 02:03:36<SeP>2023-10-15 12:22:57<SeP>2023-10-16 22:42:18<SeP>2023-10-18 09:01:39<SeP>2023-10-19 19:21:00<SeP>2023-10-21 05:40:21<SeP>2023-10-22 15:59:42<SeP>2023-10-24 02:19:03<SeP>2023-10-25 12:38:24<SeP>2023-10-26 22:57:45<SeP>2023-10-28 09:17:06<SeP>2023-10-29 19:36:27<SeP>2023-10-31 05:55:48<SeP>2023-11-01 16:15:09<SeP>2023-11-03 02:34:30<SeP>2023-11-04 12:53:51<SeP>2023-11-05 22:13:12<SeP>2023-11-07 08:32:33<SeP>2023-11-08 18:51:54<SeP>2023-11-10 05:11:15<SeP>2023-11-11 15:30:36<SeP>2023-11-13 01:49:57<SeP>2023-11-14 12:09:18<SeP>2023-11-15 22:28:39<SeP>2023-11-17 08:48:00<SeP>2023-11-18 19:07:21<SeP>2023-11-20 05:26:42<SeP>2023-11-21 15:46:03<SeP>2023-11-23 02:05:24<SeP>2023-11-24 12:24:45<SeP>2023-11-25 22:44:06<SeP>2023-11-27 09:03:27<SeP>2023-11-28 19:22:48<SeP>2023-11-30 05:42:09<SeP>2023-12-01 16:01:30<SeP>2023-12-03 02:20:51<SeP>2023-12-04 12:40:12<SeP>2023-12-05 22:59:33<SeP>2023-12-07 09:18:54<SeP>2023-12-08 19:38:15<SeP>2023-12-10 05:57:36<SeP>2023-12-11 16:16:57<SeP>2023-12-13 02:36:18<SeP>2023-12-14 12:55:39<SeP>2023-12-15 23:15:00<SeP>2023-12-17 09:34:21<SeP>2023-12-18 19:53:42<SeP>2023-12-20 06:13:03<SeP>2023-12-21 16:32:24<SeP>2023-12-23 02:51:45<SeP>2023-12-24 13:11:06<SeP>2023-12-25 23:30:27<SeP>2023-12-27 09:49:48<SeP>2023-12-28 20:09:09<SeP>2023-12-30 06:28:30<SeP>2023-12-31 16:47:51<SeP>2024-01-02 03:07:12<SeP>2024-01-03 13:26:33<SeP>2024-01-04 23:45:54<SeP>2024-01-06 10:05:15<SeP>2024-01-07 20:24:36<SeP>2024-01-09 06:43:57<SeP>2024-01-10 17:03:18<SeP>2024-01-12 03:22:39<SeP>2024-01-13 13:42:00<SeP>2024-01-15 00:01:21<SeP>2024-01-16 10:20:42<SeP>2024-01-17 20:40:03<SeP>2024-01-19 06:59:24<SeP>2024-01-20 17:18:45<SeP>2024-01-22 03:38:06<SeP>2024-01-23 13:57:27<SeP>2024-01-25 00:16:48<SeP>2024-01-26 10:36:09<SeP>2024-01-27 20:55:30<SeP>2024-01-29 07:14:51<SeP>2024-01-30 17:34:12<SeP>2024-02-01 03:53:33<SeP>2024-02-02 14:12:54<SeP>2024-02-04 00:32:15<SeP>2024-02-05 10:51:36<SeP>2024-02-06 21:10:57<SeP>2024-02-08 07:30:18<SeP>2024-02-09 17:49:39<SeP>2024-02-11 04:09:00<SeP>2024-02-12 14:28:21<SeP>2024-02-14 00:47:42<SeP>2024-02-15 11:07:03<SeP>2024-02-16 21:26:24<SeP>2024-02-18 07:45:45<SeP>2024-02-19 18:05:06<SeP>2024-02-21 04:24:27<SeP>2024-02-22 14:43:48<SeP>2024-02-24 01:03:09<SeP>2024-02-25 11:22:30<SeP>2024-02-26 21:41:51<SeP>2024-02-28 08:01:12<SeP>2024-02-29 18:20:33<SeP>2024-03-02 04:39:54<SeP>2024-03-03 14:59:15<SeP>2024-03-05 01:18:36<SeP>2024-03-06 11:37:57<SeP>2024-03-07 21:57:18<SeP>2024-03-09 08:16:39<SeP>2024-03-10 19:36:00<SeP>2024-03-12 05:55:21<SeP>2024-03-13 16:14:42<SeP>2024-03-15 02:34:03<SeP>2024-03-16 12:53:24<SeP>2024-03-17 23:12:45<SeP>2024-03-19 09:32:06<SeP>2024-03-20 19:51:27<SeP>2024-03-22 06:10:48<SeP>2024-03-23 16:30:09<SeP>2024-03-25 02:49:30<SeP>2024-03-26 13:08:51<SeP>2024-03-27 23:28:12<SeP>2024-03-29 09:47:33<SeP>2024-03-30 20:06:54<SeP>2024-04-01 06:26:15<SeP>2024-04-02 16:45:36<SeP>2024-04-04 03:04:57<SeP>2024-04-05 13:24:18<SeP>2024-04-06 23:43:39<SeP>2024-04-08 10:03:00<SeP>2024-04-09 20:22:21<SeP>2024-04-11 06:41:42<SeP>2024-04-12 17:01:03<SeP>2024-04-14 03:20:24<SeP>2024-04-15 13:39:45<SeP>2024-04-16 23:59:06<SeP>2024-04-18 10:18:27<SeP>2024-04-19 20:37:48<SeP>2024-04-21 06:57:09<SeP>2024-04-22 17:16:30<SeP>2024-04-24 03:35:51<SeP>2024-04-25 13:55:12<SeP>2024-04-27 00:14:33<SeP>2024-04-28 10:33:54<SeP>2024-04-29 20:53:15<SeP>2024-05-01 07:12:36<SeP>2024-05-02 17:31:57<SeP>2024-05-04 03:51:18<SeP>2024-05-05 14:10:39<SeP>2024-05-07 00:30:00<SeP>2024-05-08 10:49:21<SeP>2024-05-09 21:08:42<SeP>2024-05-11 07:28:03<SeP>2024-05-12 17:47:24<SeP>2024-05-14 04:06:45<SeP>2024-05-15 14:26:06<SeP>2024-05-17 00:45:27<SeP>2024-05-18 11:04:48<SeP>2024-05-19 21:24:09<SeP>2024-05-21 07:43:30<SeP>2024-05-22 18:02:51<SeP>2024-05-24 04:22:12<SeP>2024-05-25 14:41:33<SeP>2024-05-27 01:00:54<SeP>2024-05-28 11:20:15<SeP>2024-05-29 21:39:36<SeP>2024-05-31 07:58:57<SeP>2024-06-01 18:18:18<SeP>2024-06-03 04:37:39<SeP>2024-06-04 14:57:00<SeP>2024-06-06 01:16:21<SeP>2024-06-07 11:35:42<SeP>2024-06-08 21:55:03<SeP>2024-06-10 08:14:24<SeP>2024-06-11 18:33:45<SeP>2024-06-13 04:53:06<SeP>2024-06-14 15:12:27<SeP>2024-06-16 01:31:48<SeP>2024-06-17 11:51:09<SeP>2024-06-18 22:10:30<SeP>2024-06-20 08:29:51<SeP>2024-06-21 18:49:12<SeP>2024-06-23 05:08:33<SeP>2024-06-24 15:27:54<SeP>2024-06-26 01:47:15<SeP>2024-06-27 12:06:36<SeP>2024-06-28 22:25:57<SeP>2024-06-30 08:45:18<SeP>2024-07-01 19:04:39<SeP>2024-07-03 05:24:00<SeP>2024-07-04 15:43:21<SeP>2024-07-06 02:02:42<SeP>2024-07-07 12:22:03<SeP>2024-07-08 22:41:24<SeP>2024-07-10 09:00:45<SeP>2024-07-11 19:20:06<SeP>2024-07-13 05:39:27<SeP>2024-07-14 15:58:48<SeP>2024-07-16 02:18:09<SeP>2024-07-17 12:37:30<SeP>2024-07-18 22:56:51<SeP>2024-07-20 09:16:12<SeP>2024-07-21 19:35:33<SeP>2024-07-23 05:54:54<SeP>2024-07-24 16:14:15<SeP>2024-07-26 02:33:36<SeP>2024-07-27 12:52:57<SeP>2024-07-28 23:12:18<SeP>2024-07-30 09:31:39<SeP>2024-07-31 19:51:00<SeP>2024-08-02 06:10:21<SeP>2024-08-03 16:29:42<SeP>2024-08-05 02:49:03<SeP>2024-08-06 13:08:24<SeP>2024-08-07 23:27:45<SeP>2024-08-09 09:47:06<SeP>2024-08-10 20:06:27<SeP>2024-08-12 06:25:48<SeP>2024-08-13 16:45:09<SeP>2024-08-15 03:04:30<SeP>2024-08-16 13:23:51<SeP>2024-08-17 23:43:12<SeP>2024-08-19 10:02:33<SeP>2024-08-20 20:21:54<SeP>2024-08-22 06:41:15<SeP>2024-08-23 17:00:36<SeP>2024-08-25 03:19:57<SeP>2024-08-26 13:39:18<SeP>2024-08-27 23:58:39<SeP>2024-08-29 10:18:00<SeP>2024-08-30 20:37:21<SeP>2024-09-01 06:56:42<SeP>2024-09-02 17:16:03<SeP>2024-09-04 03:35:24<SeP>2024-09-05 13:54:45<SeP>2024-09-07 00:14:06<SeP>2024-09-08 10:33:27<SeP>2024-09-09 20:52:48<SeP>2024-09-11 07:12:09<SeP>2024-09-12 17:31:30<SeP>2024-09-14 03:50:51<SeP>2024-09-15 14:10:12<SeP>2024-09-17 00:29:33<SeP>2024-09-18 10:48:54<SeP>2024-09-19 21:08:15<SeP>2024-09-21 07:27:36<SeP>2024-09-22 17:46:57<SeP>2024-09-24 04:06:18<SeP>2024-09-25 14:25:39<SeP>2024-09-27 00:45:00<SeP>2024-09-28 11:04:21<SeP>2024-09-29 21:23:42<SeP>2024-10-01 07:43:03<SeP>2024-10-02 18:02:24<SeP>2024-10-04 04:21:45<SeP>2024-10-05 14:41:06<SeP>2024-10-07 01:00:27<SeP>2024-10-08 11:19:48<SeP>2024-10-09 21:39:09<SeP>2024-10-11 07:58:30<SeP>2024-10-12 18:17:51<SeP>2024-10-14 04:37:12<SeP>2024-10-15 14:56:33<SeP>2024-10-17 01:15:54<SeP>2024-10-18 11:35:15<SeP>2024-10-19 21:54:36<SeP>2024-10-21 08:13:57<SeP>2024-10-22 18:33:18<SeP>2024-10-24 04:52:39<SeP>2024-10-25 15:12:00<SeP>2024-10-27 01:31:21<SeP>2024-10-28 11:50:42<SeP>2024-10-29 22:10:03<SeP>2024-10-31 08:29:24<SeP>2024-11-01 18:48:45<SeP>2024-11-03 04:08:06<SeP>2024-11-04 14:27:27<SeP>2024-11-06 00:46:48<SeP>2024-11-07 11:06:09<SeP>2024-11-08 21:25:30<SeP>2024-11-10 07:44:51<SeP>2024-11-11 18:04:12<SeP>2024-11-13 04:23:33<SeP>2024-11-14 14:42:54<SeP>2024-11-16 01:02:15<SeP>2024-11-17 11:21:36<SeP>2024-11-18 21:40:57<SeP>2024-11-20 08:00:18<SeP>2024-11-21 18:19:39<SeP>2024-11-23 04:39:00<SeP>2024-11-24 14:58:21<SeP>2024-11-26 01:17:42<SeP>2024-11-27 11:37:03<SeP>2024-11-28 21:56:24<SeP>2024-11-30 08:15:45<SeP>2024-12-01 18:35:06<SeP>2024-12-03 04:54:27<SeP>2024-12-04 15:13:48<SeP>2024-12-06 01:33:09<SeP>2024-12-07 11:52:30<SeP>2024-12-08 22:11:51<SeP>2024-12-10 08:31:12<SeP>2024-12-11 18:50:33<SeP>2024-12-13 05:09:54<SeP>2024-12-14 15:29:15<SeP>2024-12-16 01:48:36<SeP>2024-12-17 12:07:57<SeP>2024-12-18 22:27:18<SeP>2024-12-20 08:46:39<SeP>2024-12-21 19:06:00<SeP>2024-12-23 05:25:21<SeP>2024-12-24 15:44:42<SeP>2024-12-26 02:04:03<SeP>2024-12-27 12:23:24<SeP>2024-12-28 22:42:45<SeP>2024-12-30 09:02:06<SeP>2024-12-31 19:21:27<SeP>2025-01-02 05:40:48<SeP>2025-01-03 16:00:09<SeP>2025-01-05 02:19:30<SeP>2025-01-06 12:38:51<SeP>2025-01-07 22:58:12<SeP>2025-01-09 09:17:33<SeP>2025-01-10 19:36:54<SeP>2025-01-12 05:56:15<SeP>2025-01-13 16:15:36<SeP>2025-01-15 02:34:57<SeP>2025-01-16 12:54:18<SeP>2025-01-17 23:13:39<SeP>2025-01-19 09:33:00<SeP>2025-01-20 19:52:21<SeP>2025-01-22 06:11:42<SeP>2025-01-23 16:31:03<SeP>2025-01-25 02:50:24<SeP>2025-01-26 13:09:45<SeP>2025-01-27 23:29:06<SeP>2025-01-29 09:48:27<SeP>2025-01-30 20:07:48<SeP>2025-02-01 06:27:09<SeP>2025-02-02 16:46:30<SeP>2025-02-04 03:05:51<SeP>2025-02-05 13:25:12<SeP>2025-02-06 23:44:33<SeP>2025-02-08 10:03:54<SeP>2025-02-09 20:23:15<SeP>2025-02-11 06:42:36<SeP>2025-02-12 17:01:57<SeP>2025-02-14 03:21:18<SeP>2025-02-15 13:40:39";
  const itemLabel       = "Scans";
  const itemData        = "752<SeP>1442<SeP>1365<SeP>1425<SeP>1187<SeP>1610<SeP>1105<SeP>960<SeP>1069<SeP>3294<SeP>1497<SeP>2860<SeP>1755<SeP>2583<SeP>724<SeP>816<SeP>1384<SeP>898<SeP>3130<SeP>1445<SeP>1460<SeP>1019<SeP>911<SeP>1061<SeP>1178<SeP>932<SeP>666<SeP>943<SeP>3676<SeP>866<SeP>810<SeP>1105<SeP>1469<SeP>883<SeP>793<SeP>3118<SeP>2462<SeP>2056<SeP>1658<SeP>1608<SeP>1282<SeP>1438<SeP>1870<SeP>1885<SeP>1991<SeP>1471<SeP>1580<SeP>1506<SeP>1776<SeP>1712<SeP>1718<SeP>1766<SeP>1694<SeP>1566<SeP>3112<SeP>1703<SeP>1406<SeP>1718<SeP>2056<SeP>2257<SeP>1432<SeP>2953<SeP>2216<SeP>1403<SeP>1479<SeP>1385<SeP>1588<SeP>1745<SeP>1533<SeP>1235<SeP>1408<SeP>1189<SeP>2316<SeP>1182<SeP>1079<SeP>1190<SeP>1971<SeP>7570<SeP>1148<SeP>1343<SeP>1303<SeP>1660<SeP>1903<SeP>1106<SeP>6516<SeP>1611<SeP>1627<SeP>933<SeP>1102<SeP>3256<SeP>1236<SeP>1044<SeP>941<SeP>1093<SeP>1003<SeP>3051<SeP>891<SeP>1150<SeP>2810<SeP>4380<SeP>3964<SeP>893<SeP>921<SeP>943<SeP>944<SeP>989<SeP>823<SeP>1110<SeP>2347<SeP>3273<SeP>1647<SeP>1225<SeP>1342<SeP>560<SeP>1408<SeP>1272<SeP>1172<SeP>857<SeP>1764<SeP>1568<SeP>1273<SeP>994<SeP>923<SeP>1093<SeP>768<SeP>839<SeP>871<SeP>773<SeP>864<SeP>1035<SeP>782<SeP>808<SeP>810<SeP>921<SeP>818<SeP>669<SeP>875<SeP>842<SeP>895<SeP>834<SeP>750<SeP>860<SeP>725<SeP>805<SeP>1045<SeP>755<SeP>864<SeP>860<SeP>921<SeP>866<SeP>1066<SeP>934<SeP>486<SeP>920<SeP>855<SeP>910<SeP>1161<SeP>960<SeP>1070<SeP>1252<SeP>1001<SeP>951<SeP>903<SeP>884<SeP>813<SeP>800<SeP>1046<SeP>884<SeP>896<SeP>922<SeP>1080<SeP>886<SeP>1078<SeP>968<SeP>1012<SeP>1064<SeP>919<SeP>868<SeP>1996<SeP>1261<SeP>1193<SeP>1034<SeP>917<SeP>1131<SeP>989<SeP>943<SeP>771<SeP>723<SeP>935<SeP>1076<SeP>818<SeP>1058<SeP>1183<SeP>1111<SeP>1145<SeP>1250<SeP>1087<SeP>1302<SeP>1104<SeP>1509<SeP>1166<SeP>1468<SeP>2040<SeP>1241<SeP>1054<SeP>808<SeP>1084<SeP>882<SeP>1084<SeP>478<SeP>839<SeP>917<SeP>897<SeP>2268<SeP>5315<SeP>2188<SeP>1924<SeP>1222<SeP>871<SeP>972<SeP>913<SeP>924<SeP>931<SeP>1094<SeP>1007<SeP>1065<SeP>1382<SeP>1959<SeP>1015<SeP>1207<SeP>1219<SeP>1245<SeP>1104<SeP>1037<SeP>920<SeP>1096<SeP>1096<SeP>960<SeP>1085<SeP>1040<SeP>1117<SeP>897<SeP>974<SeP>1346<SeP>1096<SeP>1052<SeP>1198<SeP>1334<SeP>1209<SeP>1487<SeP>1232<SeP>1047<SeP>1157<SeP>1100<SeP>1971<SeP>1186<SeP>1663<SeP>1753<SeP>1428<SeP>1948<SeP>1623<SeP>1228<SeP>1161<SeP>1077<SeP>1327<SeP>1403<SeP>1277<SeP>1254<SeP>1260<SeP>1669<SeP>1559<SeP>1344<SeP>1502<SeP>1457<SeP>1175<SeP>980<SeP>1114<SeP>1361<SeP>1051<SeP>1206<SeP>1299<SeP>1136<SeP>1459<SeP>1866<SeP>1302<SeP>1234<SeP>1577<SeP>1431<SeP>1063<SeP>1083<SeP>900<SeP>847<SeP>872<SeP>1029<SeP>976<SeP>1777<SeP>1073<SeP>1111<SeP>1061<SeP>796<SeP>1084<SeP>807<SeP>1402<SeP>876<SeP>799<SeP>1077<SeP>1259<SeP>1535<SeP>1410<SeP>1074<SeP>1079<SeP>969<SeP>1816<SeP>1038<SeP>1055<SeP>1094<SeP>951<SeP>1595<SeP>967<SeP>936<SeP>1203<SeP>1059<SeP>810<SeP>902<SeP>1113<SeP>1380<SeP>1540<SeP>1347<SeP>1388<SeP>1316<SeP>935<SeP>1149<SeP>1168<SeP>1111<SeP>872<SeP>1258<SeP>1000<SeP>995<SeP>1309<SeP>1515<SeP>1272<SeP>1560<SeP>1308<SeP>1319<SeP>1513<SeP>1396<SeP>1494<SeP>1294<SeP>1447<SeP>1196<SeP>1762<SeP>1203<SeP>1518<SeP>1519<SeP>1315<SeP>1407<SeP>1355<SeP>1124<SeP>1261<SeP>1405<SeP>1600<SeP>1494<SeP>1229<SeP>1120<SeP>1273<SeP>1351<SeP>1279<SeP>1106<SeP>1597<SeP>1872<SeP>1410<SeP>1179<SeP>700<SeP>1434<SeP>1770<SeP>1291<SeP>1226<SeP>1289<SeP>1019<SeP>1469<SeP>1262<SeP>1267<SeP>1465<SeP>1710<SeP>1324<SeP>1560<SeP>1668<SeP>1297<SeP>1387<SeP>1451<SeP>1590<SeP>1481<SeP>1156<SeP>1162<SeP>1870<SeP>1575<SeP>1766<SeP>1784<SeP>1870<SeP>1533";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:19:21<SeP>2023-07-28 20:38:42<SeP>2023-07-30 06:58:03<SeP>2023-07-31 17:17:24<SeP>2023-08-02 03:36:45<SeP>2023-08-03 13:56:06<SeP>2023-08-05 00:15:27<SeP>2023-08-06 10:34:48<SeP>2023-08-07 20:54:09<SeP>2023-08-09 07:13:30<SeP>2023-08-10 17:32:51<SeP>2023-08-12 03:52:12<SeP>2023-08-13 14:11:33<SeP>2023-08-15 00:30:54<SeP>2023-08-16 10:50:15<SeP>2023-08-17 21:09:36<SeP>2023-08-19 07:28:57<SeP>2023-08-20 17:48:18<SeP>2023-08-22 04:07:39<SeP>2023-08-23 14:27:00<SeP>2023-08-25 00:46:21<SeP>2023-08-26 11:05:42<SeP>2023-08-27 21:25:03<SeP>2023-08-29 07:44:24<SeP>2023-08-30 18:03:45<SeP>2023-09-01 04:23:06<SeP>2023-09-02 14:42:27<SeP>2023-09-04 01:01:48<SeP>2023-09-05 11:21:09<SeP>2023-09-06 21:40:30<SeP>2023-09-08 07:59:51<SeP>2023-09-09 18:19:12<SeP>2023-09-11 04:38:33<SeP>2023-09-12 14:57:54<SeP>2023-09-14 01:17:15<SeP>2023-09-15 11:36:36<SeP>2023-09-16 21:55:57<SeP>2023-09-18 08:15:18<SeP>2023-09-19 18:34:39<SeP>2023-09-21 04:54:00<SeP>2023-09-22 15:13:21<SeP>2023-09-24 01:32:42<SeP>2023-09-25 11:52:03<SeP>2023-09-26 22:11:24<SeP>2023-09-28 08:30:45<SeP>2023-09-29 18:50:06<SeP>2023-10-01 05:09:27<SeP>2023-10-02 15:28:48<SeP>2023-10-04 01:48:09<SeP>2023-10-05 12:07:30<SeP>2023-10-06 22:26:51<SeP>2023-10-08 08:46:12<SeP>2023-10-09 19:05:33<SeP>2023-10-11 05:24:54<SeP>2023-10-12 15:44:15<SeP>2023-10-14 02:03:36<SeP>2023-10-15 12:22:57<SeP>2023-10-16 22:42:18<SeP>2023-10-18 09:01:39<SeP>2023-10-19 19:21:00<SeP>2023-10-21 05:40:21<SeP>2023-10-22 15:59:42<SeP>2023-10-24 02:19:03<SeP>2023-10-25 12:38:24<SeP>2023-10-26 22:57:45<SeP>2023-10-28 09:17:06<SeP>2023-10-29 19:36:27<SeP>2023-10-31 05:55:48<SeP>2023-11-01 16:15:09<SeP>2023-11-03 02:34:30<SeP>2023-11-04 12:53:51<SeP>2023-11-05 22:13:12<SeP>2023-11-07 08:32:33<SeP>2023-11-08 18:51:54<SeP>2023-11-10 05:11:15<SeP>2023-11-11 15:30:36<SeP>2023-11-13 01:49:57<SeP>2023-11-14 12:09:18<SeP>2023-11-15 22:28:39<SeP>2023-11-17 08:48:00<SeP>2023-11-18 19:07:21<SeP>2023-11-20 05:26:42<SeP>2023-11-21 15:46:03<SeP>2023-11-23 02:05:24<SeP>2023-11-24 12:24:45<SeP>2023-11-25 22:44:06<SeP>2023-11-27 09:03:27<SeP>2023-11-28 19:22:48<SeP>2023-11-30 05:42:09<SeP>2023-12-01 16:01:30<SeP>2023-12-03 02:20:51<SeP>2023-12-04 12:40:12<SeP>2023-12-05 22:59:33<SeP>2023-12-07 09:18:54<SeP>2023-12-08 19:38:15<SeP>2023-12-10 05:57:36<SeP>2023-12-11 16:16:57<SeP>2023-12-13 02:36:18<SeP>2023-12-14 12:55:39<SeP>2023-12-15 23:15:00<SeP>2023-12-17 09:34:21<SeP>2023-12-18 19:53:42<SeP>2023-12-20 06:13:03<SeP>2023-12-21 16:32:24<SeP>2023-12-23 02:51:45<SeP>2023-12-24 13:11:06<SeP>2023-12-25 23:30:27<SeP>2023-12-27 09:49:48<SeP>2023-12-28 20:09:09<SeP>2023-12-30 06:28:30<SeP>2023-12-31 16:47:51<SeP>2024-01-02 03:07:12<SeP>2024-01-03 13:26:33<SeP>2024-01-04 23:45:54<SeP>2024-01-06 10:05:15<SeP>2024-01-07 20:24:36<SeP>2024-01-09 06:43:57<SeP>2024-01-10 17:03:18<SeP>2024-01-12 03:22:39<SeP>2024-01-13 13:42:00<SeP>2024-01-15 00:01:21<SeP>2024-01-16 10:20:42<SeP>2024-01-17 20:40:03<SeP>2024-01-19 06:59:24<SeP>2024-01-20 17:18:45<SeP>2024-01-22 03:38:06<SeP>2024-01-23 13:57:27<SeP>2024-01-25 00:16:48<SeP>2024-01-26 10:36:09<SeP>2024-01-27 20:55:30<SeP>2024-01-29 07:14:51<SeP>2024-01-30 17:34:12<SeP>2024-02-01 03:53:33<SeP>2024-02-02 14:12:54<SeP>2024-02-04 00:32:15<SeP>2024-02-05 10:51:36<SeP>2024-02-06 21:10:57<SeP>2024-02-08 07:30:18<SeP>2024-02-09 17:49:39<SeP>2024-02-11 04:09:00<SeP>2024-02-12 14:28:21<SeP>2024-02-14 00:47:42<SeP>2024-02-15 11:07:03<SeP>2024-02-16 21:26:24<SeP>2024-02-18 07:45:45<SeP>2024-02-19 18:05:06<SeP>2024-02-21 04:24:27<SeP>2024-02-22 14:43:48<SeP>2024-02-24 01:03:09<SeP>2024-02-25 11:22:30<SeP>2024-02-26 21:41:51<SeP>2024-02-28 08:01:12<SeP>2024-02-29 18:20:33<SeP>2024-03-02 04:39:54<SeP>2024-03-03 14:59:15<SeP>2024-03-05 01:18:36<SeP>2024-03-06 11:37:57<SeP>2024-03-07 21:57:18<SeP>2024-03-09 08:16:39<SeP>2024-03-10 19:36:00<SeP>2024-03-12 05:55:21<SeP>2024-03-13 16:14:42<SeP>2024-03-15 02:34:03<SeP>2024-03-16 12:53:24<SeP>2024-03-17 23:12:45<SeP>2024-03-19 09:32:06<SeP>2024-03-20 19:51:27<SeP>2024-03-22 06:10:48<SeP>2024-03-23 16:30:09<SeP>2024-03-25 02:49:30<SeP>2024-03-26 13:08:51<SeP>2024-03-27 23:28:12<SeP>2024-03-29 09:47:33<SeP>2024-03-30 20:06:54<SeP>2024-04-01 06:26:15<SeP>2024-04-02 16:45:36<SeP>2024-04-04 03:04:57<SeP>2024-04-05 13:24:18<SeP>2024-04-06 23:43:39<SeP>2024-04-08 10:03:00<SeP>2024-04-09 20:22:21<SeP>2024-04-11 06:41:42<SeP>2024-04-12 17:01:03<SeP>2024-04-14 03:20:24<SeP>2024-04-15 13:39:45<SeP>2024-04-16 23:59:06<SeP>2024-04-18 10:18:27<SeP>2024-04-19 20:37:48<SeP>2024-04-21 06:57:09<SeP>2024-04-22 17:16:30<SeP>2024-04-24 03:35:51<SeP>2024-04-25 13:55:12<SeP>2024-04-27 00:14:33<SeP>2024-04-28 10:33:54<SeP>2024-04-29 20:53:15<SeP>2024-05-01 07:12:36<SeP>2024-05-02 17:31:57<SeP>2024-05-04 03:51:18<SeP>2024-05-05 14:10:39<SeP>2024-05-07 00:30:00<SeP>2024-05-08 10:49:21<SeP>2024-05-09 21:08:42<SeP>2024-05-11 07:28:03<SeP>2024-05-12 17:47:24<SeP>2024-05-14 04:06:45<SeP>2024-05-15 14:26:06<SeP>2024-05-17 00:45:27<SeP>2024-05-18 11:04:48<SeP>2024-05-19 21:24:09<SeP>2024-05-21 07:43:30<SeP>2024-05-22 18:02:51<SeP>2024-05-24 04:22:12<SeP>2024-05-25 14:41:33<SeP>2024-05-27 01:00:54<SeP>2024-05-28 11:20:15<SeP>2024-05-29 21:39:36<SeP>2024-05-31 07:58:57<SeP>2024-06-01 18:18:18<SeP>2024-06-03 04:37:39<SeP>2024-06-04 14:57:00<SeP>2024-06-06 01:16:21<SeP>2024-06-07 11:35:42<SeP>2024-06-08 21:55:03<SeP>2024-06-10 08:14:24<SeP>2024-06-11 18:33:45<SeP>2024-06-13 04:53:06<SeP>2024-06-14 15:12:27<SeP>2024-06-16 01:31:48<SeP>2024-06-17 11:51:09<SeP>2024-06-18 22:10:30<SeP>2024-06-20 08:29:51<SeP>2024-06-21 18:49:12<SeP>2024-06-23 05:08:33<SeP>2024-06-24 15:27:54<SeP>2024-06-26 01:47:15<SeP>2024-06-27 12:06:36<SeP>2024-06-28 22:25:57<SeP>2024-06-30 08:45:18<SeP>2024-07-01 19:04:39<SeP>2024-07-03 05:24:00<SeP>2024-07-04 15:43:21<SeP>2024-07-06 02:02:42<SeP>2024-07-07 12:22:03<SeP>2024-07-08 22:41:24<SeP>2024-07-10 09:00:45<SeP>2024-07-11 19:20:06<SeP>2024-07-13 05:39:27<SeP>2024-07-14 15:58:48<SeP>2024-07-16 02:18:09<SeP>2024-07-17 12:37:30<SeP>2024-07-18 22:56:51<SeP>2024-07-20 09:16:12<SeP>2024-07-21 19:35:33<SeP>2024-07-23 05:54:54<SeP>2024-07-24 16:14:15<SeP>2024-07-26 02:33:36<SeP>2024-07-27 12:52:57<SeP>2024-07-28 23:12:18<SeP>2024-07-30 09:31:39<SeP>2024-07-31 19:51:00<SeP>2024-08-02 06:10:21<SeP>2024-08-03 16:29:42<SeP>2024-08-05 02:49:03<SeP>2024-08-06 13:08:24<SeP>2024-08-07 23:27:45<SeP>2024-08-09 09:47:06<SeP>2024-08-10 20:06:27<SeP>2024-08-12 06:25:48<SeP>2024-08-13 16:45:09<SeP>2024-08-15 03:04:30<SeP>2024-08-16 13:23:51<SeP>2024-08-17 23:43:12<SeP>2024-08-19 10:02:33<SeP>2024-08-20 20:21:54<SeP>2024-08-22 06:41:15<SeP>2024-08-23 17:00:36<SeP>2024-08-25 03:19:57<SeP>2024-08-26 13:39:18<SeP>2024-08-27 23:58:39<SeP>2024-08-29 10:18:00<SeP>2024-08-30 20:37:21<SeP>2024-09-01 06:56:42<SeP>2024-09-02 17:16:03<SeP>2024-09-04 03:35:24<SeP>2024-09-05 13:54:45<SeP>2024-09-07 00:14:06<SeP>2024-09-08 10:33:27<SeP>2024-09-09 20:52:48<SeP>2024-09-11 07:12:09<SeP>2024-09-12 17:31:30<SeP>2024-09-14 03:50:51<SeP>2024-09-15 14:10:12<SeP>2024-09-17 00:29:33<SeP>2024-09-18 10:48:54<SeP>2024-09-19 21:08:15<SeP>2024-09-21 07:27:36<SeP>2024-09-22 17:46:57<SeP>2024-09-24 04:06:18<SeP>2024-09-25 14:25:39<SeP>2024-09-27 00:45:00<SeP>2024-09-28 11:04:21<SeP>2024-09-29 21:23:42<SeP>2024-10-01 07:43:03<SeP>2024-10-02 18:02:24<SeP>2024-10-04 04:21:45<SeP>2024-10-05 14:41:06<SeP>2024-10-07 01:00:27<SeP>2024-10-08 11:19:48<SeP>2024-10-09 21:39:09<SeP>2024-10-11 07:58:30<SeP>2024-10-12 18:17:51<SeP>2024-10-14 04:37:12<SeP>2024-10-15 14:56:33<SeP>2024-10-17 01:15:54<SeP>2024-10-18 11:35:15<SeP>2024-10-19 21:54:36<SeP>2024-10-21 08:13:57<SeP>2024-10-22 18:33:18<SeP>2024-10-24 04:52:39<SeP>2024-10-25 15:12:00<SeP>2024-10-27 01:31:21<SeP>2024-10-28 11:50:42<SeP>2024-10-29 22:10:03<SeP>2024-10-31 08:29:24<SeP>2024-11-01 18:48:45<SeP>2024-11-03 04:08:06<SeP>2024-11-04 14:27:27<SeP>2024-11-06 00:46:48<SeP>2024-11-07 11:06:09<SeP>2024-11-08 21:25:30<SeP>2024-11-10 07:44:51<SeP>2024-11-11 18:04:12<SeP>2024-11-13 04:23:33<SeP>2024-11-14 14:42:54<SeP>2024-11-16 01:02:15<SeP>2024-11-17 11:21:36<SeP>2024-11-18 21:40:57<SeP>2024-11-20 08:00:18<SeP>2024-11-21 18:19:39<SeP>2024-11-23 04:39:00<SeP>2024-11-24 14:58:21<SeP>2024-11-26 01:17:42<SeP>2024-11-27 11:37:03<SeP>2024-11-28 21:56:24<SeP>2024-11-30 08:15:45<SeP>2024-12-01 18:35:06<SeP>2024-12-03 04:54:27<SeP>2024-12-04 15:13:48<SeP>2024-12-06 01:33:09<SeP>2024-12-07 11:52:30<SeP>2024-12-08 22:11:51<SeP>2024-12-10 08:31:12<SeP>2024-12-11 18:50:33<SeP>2024-12-13 05:09:54<SeP>2024-12-14 15:29:15<SeP>2024-12-16 01:48:36<SeP>2024-12-17 12:07:57<SeP>2024-12-18 22:27:18<SeP>2024-12-20 08:46:39<SeP>2024-12-21 19:06:00<SeP>2024-12-23 05:25:21<SeP>2024-12-24 15:44:42<SeP>2024-12-26 02:04:03<SeP>2024-12-27 12:23:24<SeP>2024-12-28 22:42:45<SeP>2024-12-30 09:02:06<SeP>2024-12-31 19:21:27<SeP>2025-01-02 05:40:48<SeP>2025-01-03 16:00:09<SeP>2025-01-05 02:19:30<SeP>2025-01-06 12:38:51<SeP>2025-01-07 22:58:12<SeP>2025-01-09 09:17:33<SeP>2025-01-10 19:36:54<SeP>2025-01-12 05:56:15<SeP>2025-01-13 16:15:36<SeP>2025-01-15 02:34:57<SeP>2025-01-16 12:54:18<SeP>2025-01-17 23:13:39<SeP>2025-01-19 09:33:00<SeP>2025-01-20 19:52:21<SeP>2025-01-22 06:11:42<SeP>2025-01-23 16:31:03<SeP>2025-01-25 02:50:24<SeP>2025-01-26 13:09:45<SeP>2025-01-27 23:29:06<SeP>2025-01-29 09:48:27<SeP>2025-01-30 20:07:48<SeP>2025-02-01 06:27:09<SeP>2025-02-02 16:46:30<SeP>2025-02-04 03:05:51<SeP>2025-02-05 13:25:12<SeP>2025-02-06 23:44:33<SeP>2025-02-08 10:03:54<SeP>2025-02-09 20:23:15<SeP>2025-02-11 06:42:36<SeP>2025-02-12 17:01:57<SeP>2025-02-14 03:21:18<SeP>2025-02-15 13:40:39";
  const itemLabel       = "Attacks";
  const itemData        = "152<SeP>612<SeP>965<SeP>703<SeP>559<SeP>213<SeP>6947<SeP>481<SeP>9230<SeP>970<SeP>231<SeP>1272<SeP>441<SeP>1087<SeP>142<SeP>427<SeP>167<SeP>361<SeP>660<SeP>2528<SeP>7122<SeP>7893<SeP>6203<SeP>9476<SeP>455<SeP>293<SeP>403<SeP>173<SeP>380<SeP>5905<SeP>104<SeP>365<SeP>132<SeP>493<SeP>317<SeP>7188<SeP>9578<SeP>9240<SeP>10277<SeP>7310<SeP>5079<SeP>7932<SeP>6305<SeP>9724<SeP>8856<SeP>7685<SeP>7820<SeP>8196<SeP>8454<SeP>7840<SeP>6958<SeP>5281<SeP>10594<SeP>8662<SeP>6391<SeP>7595<SeP>8386<SeP>9213<SeP>17970<SeP>16500<SeP>9044<SeP>11315<SeP>6655<SeP>7642<SeP>8476<SeP>9019<SeP>7881<SeP>7238<SeP>6317<SeP>6581<SeP>6826<SeP>4971<SeP>3400<SeP>6813<SeP>5773<SeP>6449<SeP>6054<SeP>7167<SeP>4093<SeP>5194<SeP>8032<SeP>4445<SeP>6385<SeP>5524<SeP>4321<SeP>7051<SeP>4982<SeP>5405<SeP>5707<SeP>6577<SeP>21512<SeP>11277<SeP>33831<SeP>7630<SeP>7747<SeP>7336<SeP>11118<SeP>6727<SeP>4992<SeP>6344<SeP>3906<SeP>4822<SeP>6090<SeP>5072<SeP>8752<SeP>5347<SeP>6515<SeP>4920<SeP>4424<SeP>8286<SeP>8606<SeP>7591<SeP>6670<SeP>3830<SeP>8334<SeP>10198<SeP>7291<SeP>2734<SeP>4774<SeP>7453<SeP>7829<SeP>5696<SeP>7287<SeP>8026<SeP>2624<SeP>3032<SeP>1171<SeP>1628<SeP>1812<SeP>2491<SeP>825<SeP>1311<SeP>613<SeP>1662<SeP>1199<SeP>1136<SeP>1032<SeP>897<SeP>1047<SeP>752<SeP>1434<SeP>1367<SeP>1211<SeP>814<SeP>2239<SeP>2020<SeP>6042<SeP>10554<SeP>7575<SeP>8608<SeP>6659<SeP>12939<SeP>2171<SeP>8913<SeP>11793<SeP>9587<SeP>11779<SeP>9138<SeP>11137<SeP>10742<SeP>9557<SeP>11363<SeP>7342<SeP>3457<SeP>7692<SeP>12930<SeP>17410<SeP>6410<SeP>8078<SeP>10823<SeP>17301<SeP>6169<SeP>6335<SeP>6664<SeP>6425<SeP>19980<SeP>13894<SeP>7615<SeP>10873<SeP>4984<SeP>6932<SeP>5526<SeP>6417<SeP>14593<SeP>5920<SeP>13464<SeP>8249<SeP>6798<SeP>7495<SeP>5718<SeP>4185<SeP>5933<SeP>7684<SeP>4944<SeP>7065<SeP>6650<SeP>5636<SeP>20735<SeP>5363<SeP>7568<SeP>6204<SeP>8140<SeP>10017<SeP>6558<SeP>5084<SeP>3493<SeP>7079<SeP>2747<SeP>5300<SeP>4089<SeP>676<SeP>117<SeP>623<SeP>194<SeP>540<SeP>637<SeP>770<SeP>413<SeP>907<SeP>1049<SeP>1356<SeP>3289<SeP>22569<SeP>629<SeP>4442<SeP>3814<SeP>1900<SeP>7880<SeP>2740<SeP>4073<SeP>3041<SeP>3209<SeP>2914<SeP>3245<SeP>4046<SeP>2547<SeP>2159<SeP>3561<SeP>1864<SeP>2006<SeP>1846<SeP>1429<SeP>956<SeP>1689<SeP>921<SeP>1330<SeP>1120<SeP>26790<SeP>1766<SeP>3914<SeP>3896<SeP>2185<SeP>3548<SeP>2626<SeP>1821<SeP>3560<SeP>2431<SeP>3621<SeP>2491<SeP>2517<SeP>3056<SeP>3430<SeP>6632<SeP>4637<SeP>4350<SeP>3356<SeP>2866<SeP>3299<SeP>3761<SeP>5949<SeP>7988<SeP>5411<SeP>2018<SeP>3366<SeP>2546<SeP>4030<SeP>3758<SeP>3719<SeP>2687<SeP>2605<SeP>5988<SeP>3262<SeP>6143<SeP>3567<SeP>5398<SeP>5708<SeP>5580<SeP>3688<SeP>17700<SeP>10240<SeP>12486<SeP>1726<SeP>2272<SeP>4742<SeP>3323<SeP>3754<SeP>4132<SeP>4995<SeP>3608<SeP>4444<SeP>4627<SeP>3137<SeP>3721<SeP>1412<SeP>1592<SeP>2124<SeP>3832<SeP>2295<SeP>3002<SeP>3526<SeP>4499<SeP>3534<SeP>3327<SeP>4147<SeP>3416<SeP>2564<SeP>6001<SeP>7766<SeP>6231<SeP>4219<SeP>5326<SeP>4482<SeP>3468<SeP>3455<SeP>4602<SeP>5677<SeP>5210<SeP>4215<SeP>4292<SeP>2064<SeP>667<SeP>2015<SeP>1650<SeP>827<SeP>1309<SeP>1844<SeP>1113<SeP>1725<SeP>4050<SeP>4707<SeP>6352<SeP>34234<SeP>4459<SeP>4279<SeP>22075<SeP>7213<SeP>5069<SeP>6071<SeP>4369<SeP>24112<SeP>4877<SeP>5135<SeP>4459<SeP>4571<SeP>6230<SeP>26328<SeP>8710<SeP>4047<SeP>3558<SeP>3911<SeP>5518<SeP>5084<SeP>2759<SeP>3445<SeP>3966<SeP>5194<SeP>4959<SeP>13069<SeP>9184<SeP>5599<SeP>6562<SeP>3391<SeP>2435<SeP>3315<SeP>4369<SeP>4041<SeP>3828<SeP>2850<SeP>3890<SeP>2231<SeP>4125<SeP>3884<SeP>7117<SeP>9401<SeP>9044<SeP>8500<SeP>8629<SeP>7390<SeP>6655<SeP>5106<SeP>4494<SeP>6323<SeP>23205<SeP>3261<SeP>3912<SeP>3302<SeP>11078<SeP>4995<SeP>4775<SeP>3926";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:19:21<SeP>2023-07-28 20:38:42<SeP>2023-07-30 06:58:03<SeP>2023-07-31 17:17:24<SeP>2023-08-02 03:36:45<SeP>2023-08-03 13:56:06<SeP>2023-08-05 00:15:27<SeP>2023-08-06 10:34:48<SeP>2023-08-07 20:54:09<SeP>2023-08-09 07:13:30<SeP>2023-08-10 17:32:51<SeP>2023-08-12 03:52:12<SeP>2023-08-13 14:11:33<SeP>2023-08-15 00:30:54<SeP>2023-08-16 10:50:15<SeP>2023-08-17 21:09:36<SeP>2023-08-19 07:28:57<SeP>2023-08-20 17:48:18<SeP>2023-08-22 04:07:39<SeP>2023-08-23 14:27:00<SeP>2023-08-25 00:46:21<SeP>2023-08-26 11:05:42<SeP>2023-08-27 21:25:03<SeP>2023-08-29 07:44:24<SeP>2023-08-30 18:03:45<SeP>2023-09-01 04:23:06<SeP>2023-09-02 14:42:27<SeP>2023-09-04 01:01:48<SeP>2023-09-05 11:21:09<SeP>2023-09-06 21:40:30<SeP>2023-09-08 07:59:51<SeP>2023-09-09 18:19:12<SeP>2023-09-11 04:38:33<SeP>2023-09-12 14:57:54<SeP>2023-09-14 01:17:15<SeP>2023-09-15 11:36:36<SeP>2023-09-16 21:55:57<SeP>2023-09-18 08:15:18<SeP>2023-09-19 18:34:39<SeP>2023-09-21 04:54:00<SeP>2023-09-22 15:13:21<SeP>2023-09-24 01:32:42<SeP>2023-09-25 11:52:03<SeP>2023-09-26 22:11:24<SeP>2023-09-28 08:30:45<SeP>2023-09-29 18:50:06<SeP>2023-10-01 05:09:27<SeP>2023-10-02 15:28:48<SeP>2023-10-04 01:48:09<SeP>2023-10-05 12:07:30<SeP>2023-10-06 22:26:51<SeP>2023-10-08 08:46:12<SeP>2023-10-09 19:05:33<SeP>2023-10-11 05:24:54<SeP>2023-10-12 15:44:15<SeP>2023-10-14 02:03:36<SeP>2023-10-15 12:22:57<SeP>2023-10-16 22:42:18<SeP>2023-10-18 09:01:39<SeP>2023-10-19 19:21:00<SeP>2023-10-21 05:40:21<SeP>2023-10-22 15:59:42<SeP>2023-10-24 02:19:03<SeP>2023-10-25 12:38:24<SeP>2023-10-26 22:57:45<SeP>2023-10-28 09:17:06<SeP>2023-10-29 19:36:27<SeP>2023-10-31 05:55:48<SeP>2023-11-01 16:15:09<SeP>2023-11-03 02:34:30<SeP>2023-11-04 12:53:51<SeP>2023-11-05 22:13:12<SeP>2023-11-07 08:32:33<SeP>2023-11-08 18:51:54<SeP>2023-11-10 05:11:15<SeP>2023-11-11 15:30:36<SeP>2023-11-13 01:49:57<SeP>2023-11-14 12:09:18<SeP>2023-11-15 22:28:39<SeP>2023-11-17 08:48:00<SeP>2023-11-18 19:07:21<SeP>2023-11-20 05:26:42<SeP>2023-11-21 15:46:03<SeP>2023-11-23 02:05:24<SeP>2023-11-24 12:24:45<SeP>2023-11-25 22:44:06<SeP>2023-11-27 09:03:27<SeP>2023-11-28 19:22:48<SeP>2023-11-30 05:42:09<SeP>2023-12-01 16:01:30<SeP>2023-12-03 02:20:51<SeP>2023-12-04 12:40:12<SeP>2023-12-05 22:59:33<SeP>2023-12-07 09:18:54<SeP>2023-12-08 19:38:15<SeP>2023-12-10 05:57:36<SeP>2023-12-11 16:16:57<SeP>2023-12-13 02:36:18<SeP>2023-12-14 12:55:39<SeP>2023-12-15 23:15:00<SeP>2023-12-17 09:34:21<SeP>2023-12-18 19:53:42<SeP>2023-12-20 06:13:03<SeP>2023-12-21 16:32:24<SeP>2023-12-23 02:51:45<SeP>2023-12-24 13:11:06<SeP>2023-12-25 23:30:27<SeP>2023-12-27 09:49:48<SeP>2023-12-28 20:09:09<SeP>2023-12-30 06:28:30<SeP>2023-12-31 16:47:51<SeP>2024-01-02 03:07:12<SeP>2024-01-03 13:26:33<SeP>2024-01-04 23:45:54<SeP>2024-01-06 10:05:15<SeP>2024-01-07 20:24:36<SeP>2024-01-09 06:43:57<SeP>2024-01-10 17:03:18<SeP>2024-01-12 03:22:39<SeP>2024-01-13 13:42:00<SeP>2024-01-15 00:01:21<SeP>2024-01-16 10:20:42<SeP>2024-01-17 20:40:03<SeP>2024-01-19 06:59:24<SeP>2024-01-20 17:18:45<SeP>2024-01-22 03:38:06<SeP>2024-01-23 13:57:27<SeP>2024-01-25 00:16:48<SeP>2024-01-26 10:36:09<SeP>2024-01-27 20:55:30<SeP>2024-01-29 07:14:51<SeP>2024-01-30 17:34:12<SeP>2024-02-01 03:53:33<SeP>2024-02-02 14:12:54<SeP>2024-02-04 00:32:15<SeP>2024-02-05 10:51:36<SeP>2024-02-06 21:10:57<SeP>2024-02-08 07:30:18<SeP>2024-02-09 17:49:39<SeP>2024-02-11 04:09:00<SeP>2024-02-12 14:28:21<SeP>2024-02-14 00:47:42<SeP>2024-02-15 11:07:03<SeP>2024-02-16 21:26:24<SeP>2024-02-18 07:45:45<SeP>2024-02-19 18:05:06<SeP>2024-02-21 04:24:27<SeP>2024-02-22 14:43:48<SeP>2024-02-24 01:03:09<SeP>2024-02-25 11:22:30<SeP>2024-02-26 21:41:51<SeP>2024-02-28 08:01:12<SeP>2024-02-29 18:20:33<SeP>2024-03-02 04:39:54<SeP>2024-03-03 14:59:15<SeP>2024-03-05 01:18:36<SeP>2024-03-06 11:37:57<SeP>2024-03-07 21:57:18<SeP>2024-03-09 08:16:39<SeP>2024-03-10 19:36:00<SeP>2024-03-12 05:55:21<SeP>2024-03-13 16:14:42<SeP>2024-03-15 02:34:03<SeP>2024-03-16 12:53:24<SeP>2024-03-17 23:12:45<SeP>2024-03-19 09:32:06<SeP>2024-03-20 19:51:27<SeP>2024-03-22 06:10:48<SeP>2024-03-23 16:30:09<SeP>2024-03-25 02:49:30<SeP>2024-03-26 13:08:51<SeP>2024-03-27 23:28:12<SeP>2024-03-29 09:47:33<SeP>2024-03-30 20:06:54<SeP>2024-04-01 06:26:15<SeP>2024-04-02 16:45:36<SeP>2024-04-04 03:04:57<SeP>2024-04-05 13:24:18<SeP>2024-04-06 23:43:39<SeP>2024-04-08 10:03:00<SeP>2024-04-09 20:22:21<SeP>2024-04-11 06:41:42<SeP>2024-04-12 17:01:03<SeP>2024-04-14 03:20:24<SeP>2024-04-15 13:39:45<SeP>2024-04-16 23:59:06<SeP>2024-04-18 10:18:27<SeP>2024-04-19 20:37:48<SeP>2024-04-21 06:57:09<SeP>2024-04-22 17:16:30<SeP>2024-04-24 03:35:51<SeP>2024-04-25 13:55:12<SeP>2024-04-27 00:14:33<SeP>2024-04-28 10:33:54<SeP>2024-04-29 20:53:15<SeP>2024-05-01 07:12:36<SeP>2024-05-02 17:31:57<SeP>2024-05-04 03:51:18<SeP>2024-05-05 14:10:39<SeP>2024-05-07 00:30:00<SeP>2024-05-08 10:49:21<SeP>2024-05-09 21:08:42<SeP>2024-05-11 07:28:03<SeP>2024-05-12 17:47:24<SeP>2024-05-14 04:06:45<SeP>2024-05-15 14:26:06<SeP>2024-05-17 00:45:27<SeP>2024-05-18 11:04:48<SeP>2024-05-19 21:24:09<SeP>2024-05-21 07:43:30<SeP>2024-05-22 18:02:51<SeP>2024-05-24 04:22:12<SeP>2024-05-25 14:41:33<SeP>2024-05-27 01:00:54<SeP>2024-05-28 11:20:15<SeP>2024-05-29 21:39:36<SeP>2024-05-31 07:58:57<SeP>2024-06-01 18:18:18<SeP>2024-06-03 04:37:39<SeP>2024-06-04 14:57:00<SeP>2024-06-06 01:16:21<SeP>2024-06-07 11:35:42<SeP>2024-06-08 21:55:03<SeP>2024-06-10 08:14:24<SeP>2024-06-11 18:33:45<SeP>2024-06-13 04:53:06<SeP>2024-06-14 15:12:27<SeP>2024-06-16 01:31:48<SeP>2024-06-17 11:51:09<SeP>2024-06-18 22:10:30<SeP>2024-06-20 08:29:51<SeP>2024-06-21 18:49:12<SeP>2024-06-23 05:08:33<SeP>2024-06-24 15:27:54<SeP>2024-06-26 01:47:15<SeP>2024-06-27 12:06:36<SeP>2024-06-28 22:25:57<SeP>2024-06-30 08:45:18<SeP>2024-07-01 19:04:39<SeP>2024-07-03 05:24:00<SeP>2024-07-04 15:43:21<SeP>2024-07-06 02:02:42<SeP>2024-07-07 12:22:03<SeP>2024-07-08 22:41:24<SeP>2024-07-10 09:00:45<SeP>2024-07-11 19:20:06<SeP>2024-07-13 05:39:27<SeP>2024-07-14 15:58:48<SeP>2024-07-16 02:18:09<SeP>2024-07-17 12:37:30<SeP>2024-07-18 22:56:51<SeP>2024-07-20 09:16:12<SeP>2024-07-21 19:35:33<SeP>2024-07-23 05:54:54<SeP>2024-07-24 16:14:15<SeP>2024-07-26 02:33:36<SeP>2024-07-27 12:52:57<SeP>2024-07-28 23:12:18<SeP>2024-07-30 09:31:39<SeP>2024-07-31 19:51:00<SeP>2024-08-02 06:10:21<SeP>2024-08-03 16:29:42<SeP>2024-08-05 02:49:03<SeP>2024-08-06 13:08:24<SeP>2024-08-07 23:27:45<SeP>2024-08-09 09:47:06<SeP>2024-08-10 20:06:27<SeP>2024-08-12 06:25:48<SeP>2024-08-13 16:45:09<SeP>2024-08-15 03:04:30<SeP>2024-08-16 13:23:51<SeP>2024-08-17 23:43:12<SeP>2024-08-19 10:02:33<SeP>2024-08-20 20:21:54<SeP>2024-08-22 06:41:15<SeP>2024-08-23 17:00:36<SeP>2024-08-25 03:19:57<SeP>2024-08-26 13:39:18<SeP>2024-08-27 23:58:39<SeP>2024-08-29 10:18:00<SeP>2024-08-30 20:37:21<SeP>2024-09-01 06:56:42<SeP>2024-09-02 17:16:03<SeP>2024-09-04 03:35:24<SeP>2024-09-05 13:54:45<SeP>2024-09-07 00:14:06<SeP>2024-09-08 10:33:27<SeP>2024-09-09 20:52:48<SeP>2024-09-11 07:12:09<SeP>2024-09-12 17:31:30<SeP>2024-09-14 03:50:51<SeP>2024-09-15 14:10:12<SeP>2024-09-17 00:29:33<SeP>2024-09-18 10:48:54<SeP>2024-09-19 21:08:15<SeP>2024-09-21 07:27:36<SeP>2024-09-22 17:46:57<SeP>2024-09-24 04:06:18<SeP>2024-09-25 14:25:39<SeP>2024-09-27 00:45:00<SeP>2024-09-28 11:04:21<SeP>2024-09-29 21:23:42<SeP>2024-10-01 07:43:03<SeP>2024-10-02 18:02:24<SeP>2024-10-04 04:21:45<SeP>2024-10-05 14:41:06<SeP>2024-10-07 01:00:27<SeP>2024-10-08 11:19:48<SeP>2024-10-09 21:39:09<SeP>2024-10-11 07:58:30<SeP>2024-10-12 18:17:51<SeP>2024-10-14 04:37:12<SeP>2024-10-15 14:56:33<SeP>2024-10-17 01:15:54<SeP>2024-10-18 11:35:15<SeP>2024-10-19 21:54:36<SeP>2024-10-21 08:13:57<SeP>2024-10-22 18:33:18<SeP>2024-10-24 04:52:39<SeP>2024-10-25 15:12:00<SeP>2024-10-27 01:31:21<SeP>2024-10-28 11:50:42<SeP>2024-10-29 22:10:03<SeP>2024-10-31 08:29:24<SeP>2024-11-01 18:48:45<SeP>2024-11-03 04:08:06<SeP>2024-11-04 14:27:27<SeP>2024-11-06 00:46:48<SeP>2024-11-07 11:06:09<SeP>2024-11-08 21:25:30<SeP>2024-11-10 07:44:51<SeP>2024-11-11 18:04:12<SeP>2024-11-13 04:23:33<SeP>2024-11-14 14:42:54<SeP>2024-11-16 01:02:15<SeP>2024-11-17 11:21:36<SeP>2024-11-18 21:40:57<SeP>2024-11-20 08:00:18<SeP>2024-11-21 18:19:39<SeP>2024-11-23 04:39:00<SeP>2024-11-24 14:58:21<SeP>2024-11-26 01:17:42<SeP>2024-11-27 11:37:03<SeP>2024-11-28 21:56:24<SeP>2024-11-30 08:15:45<SeP>2024-12-01 18:35:06<SeP>2024-12-03 04:54:27<SeP>2024-12-04 15:13:48<SeP>2024-12-06 01:33:09<SeP>2024-12-07 11:52:30<SeP>2024-12-08 22:11:51<SeP>2024-12-10 08:31:12<SeP>2024-12-11 18:50:33<SeP>2024-12-13 05:09:54<SeP>2024-12-14 15:29:15<SeP>2024-12-16 01:48:36<SeP>2024-12-17 12:07:57<SeP>2024-12-18 22:27:18<SeP>2024-12-20 08:46:39<SeP>2024-12-21 19:06:00<SeP>2024-12-23 05:25:21<SeP>2024-12-24 15:44:42<SeP>2024-12-26 02:04:03<SeP>2024-12-27 12:23:24<SeP>2024-12-28 22:42:45<SeP>2024-12-30 09:02:06<SeP>2024-12-31 19:21:27<SeP>2025-01-02 05:40:48<SeP>2025-01-03 16:00:09<SeP>2025-01-05 02:19:30<SeP>2025-01-06 12:38:51<SeP>2025-01-07 22:58:12<SeP>2025-01-09 09:17:33<SeP>2025-01-10 19:36:54<SeP>2025-01-12 05:56:15<SeP>2025-01-13 16:15:36<SeP>2025-01-15 02:34:57<SeP>2025-01-16 12:54:18<SeP>2025-01-17 23:13:39<SeP>2025-01-19 09:33:00<SeP>2025-01-20 19:52:21<SeP>2025-01-22 06:11:42<SeP>2025-01-23 16:31:03<SeP>2025-01-25 02:50:24<SeP>2025-01-26 13:09:45<SeP>2025-01-27 23:29:06<SeP>2025-01-29 09:48:27<SeP>2025-01-30 20:07:48<SeP>2025-02-01 06:27:09<SeP>2025-02-02 16:46:30<SeP>2025-02-04 03:05:51<SeP>2025-02-05 13:25:12<SeP>2025-02-06 23:44:33<SeP>2025-02-08 10:03:54<SeP>2025-02-09 20:23:15<SeP>2025-02-11 06:42:36<SeP>2025-02-12 17:01:57<SeP>2025-02-14 03:21:18<SeP>2025-02-15 13:40:39";
  const item1Label       = "Escaneos";
  const item1Data        = "752<SeP>1442<SeP>1365<SeP>1425<SeP>1187<SeP>1610<SeP>1105<SeP>960<SeP>1069<SeP>3294<SeP>1497<SeP>2860<SeP>1755<SeP>2583<SeP>724<SeP>816<SeP>1384<SeP>898<SeP>3130<SeP>1445<SeP>1460<SeP>1019<SeP>911<SeP>1061<SeP>1178<SeP>932<SeP>666<SeP>943<SeP>3676<SeP>866<SeP>810<SeP>1105<SeP>1469<SeP>883<SeP>793<SeP>3118<SeP>2462<SeP>2056<SeP>1658<SeP>1608<SeP>1282<SeP>1438<SeP>1870<SeP>1885<SeP>1991<SeP>1471<SeP>1580<SeP>1506<SeP>1776<SeP>1712<SeP>1718<SeP>1766<SeP>1694<SeP>1566<SeP>3112<SeP>1703<SeP>1406<SeP>1718<SeP>2056<SeP>2257<SeP>1432<SeP>2953<SeP>2216<SeP>1403<SeP>1479<SeP>1385<SeP>1588<SeP>1745<SeP>1533<SeP>1235<SeP>1408<SeP>1189<SeP>2316<SeP>1182<SeP>1079<SeP>1190<SeP>1971<SeP>7570<SeP>1148<SeP>1343<SeP>1303<SeP>1660<SeP>1903<SeP>1106<SeP>6516<SeP>1611<SeP>1627<SeP>933<SeP>1102<SeP>3256<SeP>1236<SeP>1044<SeP>941<SeP>1093<SeP>1003<SeP>3051<SeP>891<SeP>1150<SeP>2810<SeP>4380<SeP>3964<SeP>893<SeP>921<SeP>943<SeP>944<SeP>989<SeP>823<SeP>1110<SeP>2347<SeP>3273<SeP>1647<SeP>1225<SeP>1342<SeP>560<SeP>1408<SeP>1272<SeP>1172<SeP>857<SeP>1764<SeP>1568<SeP>1273<SeP>994<SeP>923<SeP>1093<SeP>768<SeP>839<SeP>871<SeP>773<SeP>864<SeP>1035<SeP>782<SeP>808<SeP>810<SeP>921<SeP>818<SeP>669<SeP>875<SeP>842<SeP>895<SeP>834<SeP>750<SeP>860<SeP>725<SeP>805<SeP>1045<SeP>755<SeP>864<SeP>860<SeP>921<SeP>866<SeP>1066<SeP>934<SeP>486<SeP>920<SeP>855<SeP>910<SeP>1161<SeP>960<SeP>1070<SeP>1252<SeP>1001<SeP>951<SeP>903<SeP>884<SeP>813<SeP>800<SeP>1046<SeP>884<SeP>896<SeP>922<SeP>1080<SeP>886<SeP>1078<SeP>968<SeP>1012<SeP>1064<SeP>919<SeP>868<SeP>1996<SeP>1261<SeP>1193<SeP>1034<SeP>917<SeP>1131<SeP>989<SeP>943<SeP>771<SeP>723<SeP>935<SeP>1076<SeP>818<SeP>1058<SeP>1183<SeP>1111<SeP>1145<SeP>1250<SeP>1087<SeP>1302<SeP>1104<SeP>1509<SeP>1166<SeP>1468<SeP>2040<SeP>1241<SeP>1054<SeP>808<SeP>1084<SeP>882<SeP>1084<SeP>478<SeP>839<SeP>917<SeP>897<SeP>2268<SeP>5315<SeP>2188<SeP>1924<SeP>1222<SeP>871<SeP>972<SeP>913<SeP>924<SeP>931<SeP>1094<SeP>1007<SeP>1065<SeP>1382<SeP>1959<SeP>1015<SeP>1207<SeP>1219<SeP>1245<SeP>1104<SeP>1037<SeP>920<SeP>1096<SeP>1096<SeP>960<SeP>1085<SeP>1040<SeP>1117<SeP>897<SeP>974<SeP>1346<SeP>1096<SeP>1052<SeP>1198<SeP>1334<SeP>1209<SeP>1487<SeP>1232<SeP>1047<SeP>1157<SeP>1100<SeP>1971<SeP>1186<SeP>1663<SeP>1753<SeP>1428<SeP>1948<SeP>1623<SeP>1228<SeP>1161<SeP>1077<SeP>1327<SeP>1403<SeP>1277<SeP>1254<SeP>1260<SeP>1669<SeP>1559<SeP>1344<SeP>1502<SeP>1457<SeP>1175<SeP>980<SeP>1114<SeP>1361<SeP>1051<SeP>1206<SeP>1299<SeP>1136<SeP>1459<SeP>1866<SeP>1302<SeP>1234<SeP>1577<SeP>1431<SeP>1063<SeP>1083<SeP>900<SeP>847<SeP>872<SeP>1029<SeP>976<SeP>1777<SeP>1073<SeP>1111<SeP>1061<SeP>796<SeP>1084<SeP>807<SeP>1402<SeP>876<SeP>799<SeP>1077<SeP>1259<SeP>1535<SeP>1410<SeP>1074<SeP>1079<SeP>969<SeP>1816<SeP>1038<SeP>1055<SeP>1094<SeP>951<SeP>1595<SeP>967<SeP>936<SeP>1203<SeP>1059<SeP>810<SeP>902<SeP>1113<SeP>1380<SeP>1540<SeP>1347<SeP>1388<SeP>1316<SeP>935<SeP>1149<SeP>1168<SeP>1111<SeP>872<SeP>1258<SeP>1000<SeP>995<SeP>1309<SeP>1515<SeP>1272<SeP>1560<SeP>1308<SeP>1319<SeP>1513<SeP>1396<SeP>1494<SeP>1294<SeP>1447<SeP>1196<SeP>1762<SeP>1203<SeP>1518<SeP>1519<SeP>1315<SeP>1407<SeP>1355<SeP>1124<SeP>1261<SeP>1405<SeP>1600<SeP>1494<SeP>1229<SeP>1120<SeP>1273<SeP>1351<SeP>1279<SeP>1106<SeP>1597<SeP>1872<SeP>1410<SeP>1179<SeP>700<SeP>1434<SeP>1770<SeP>1291<SeP>1226<SeP>1289<SeP>1019<SeP>1469<SeP>1262<SeP>1267<SeP>1465<SeP>1710<SeP>1324<SeP>1560<SeP>1668<SeP>1297<SeP>1387<SeP>1451<SeP>1590<SeP>1481<SeP>1156<SeP>1162<SeP>1870<SeP>1575<SeP>1766<SeP>1784<SeP>1870<SeP>1533";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "152<SeP>612<SeP>965<SeP>703<SeP>559<SeP>213<SeP>6947<SeP>481<SeP>9230<SeP>970<SeP>231<SeP>1272<SeP>441<SeP>1087<SeP>142<SeP>427<SeP>167<SeP>361<SeP>660<SeP>2528<SeP>7122<SeP>7893<SeP>6203<SeP>9476<SeP>455<SeP>293<SeP>403<SeP>173<SeP>380<SeP>5905<SeP>104<SeP>365<SeP>132<SeP>493<SeP>317<SeP>7188<SeP>9578<SeP>9240<SeP>10277<SeP>7310<SeP>5079<SeP>7932<SeP>6305<SeP>9724<SeP>8856<SeP>7685<SeP>7820<SeP>8196<SeP>8454<SeP>7840<SeP>6958<SeP>5281<SeP>10594<SeP>8662<SeP>6391<SeP>7595<SeP>8386<SeP>9213<SeP>17970<SeP>16500<SeP>9044<SeP>11315<SeP>6655<SeP>7642<SeP>8476<SeP>9019<SeP>7881<SeP>7238<SeP>6317<SeP>6581<SeP>6826<SeP>4971<SeP>3400<SeP>6813<SeP>5773<SeP>6449<SeP>6054<SeP>7167<SeP>4093<SeP>5194<SeP>8032<SeP>4445<SeP>6385<SeP>5524<SeP>4321<SeP>7051<SeP>4982<SeP>5405<SeP>5707<SeP>6577<SeP>21512<SeP>11277<SeP>33831<SeP>7630<SeP>7747<SeP>7336<SeP>11118<SeP>6727<SeP>4992<SeP>6344<SeP>3906<SeP>4822<SeP>6090<SeP>5072<SeP>8752<SeP>5347<SeP>6515<SeP>4920<SeP>4424<SeP>8286<SeP>8606<SeP>7591<SeP>6670<SeP>3830<SeP>8334<SeP>10198<SeP>7291<SeP>2734<SeP>4774<SeP>7453<SeP>7829<SeP>5696<SeP>7287<SeP>8026<SeP>2624<SeP>3032<SeP>1171<SeP>1628<SeP>1812<SeP>2491<SeP>825<SeP>1311<SeP>613<SeP>1662<SeP>1199<SeP>1136<SeP>1032<SeP>897<SeP>1047<SeP>752<SeP>1434<SeP>1367<SeP>1211<SeP>814<SeP>2239<SeP>2020<SeP>6042<SeP>10554<SeP>7575<SeP>8608<SeP>6659<SeP>12939<SeP>2171<SeP>8913<SeP>11793<SeP>9587<SeP>11779<SeP>9138<SeP>11137<SeP>10742<SeP>9557<SeP>11363<SeP>7342<SeP>3457<SeP>7692<SeP>12930<SeP>17410<SeP>6410<SeP>8078<SeP>10823<SeP>17301<SeP>6169<SeP>6335<SeP>6664<SeP>6425<SeP>19980<SeP>13894<SeP>7615<SeP>10873<SeP>4984<SeP>6932<SeP>5526<SeP>6417<SeP>14593<SeP>5920<SeP>13464<SeP>8249<SeP>6798<SeP>7495<SeP>5718<SeP>4185<SeP>5933<SeP>7684<SeP>4944<SeP>7065<SeP>6650<SeP>5636<SeP>20735<SeP>5363<SeP>7568<SeP>6204<SeP>8140<SeP>10017<SeP>6558<SeP>5084<SeP>3493<SeP>7079<SeP>2747<SeP>5300<SeP>4089<SeP>676<SeP>117<SeP>623<SeP>194<SeP>540<SeP>637<SeP>770<SeP>413<SeP>907<SeP>1049<SeP>1356<SeP>3289<SeP>22569<SeP>629<SeP>4442<SeP>3814<SeP>1900<SeP>7880<SeP>2740<SeP>4073<SeP>3041<SeP>3209<SeP>2914<SeP>3245<SeP>4046<SeP>2547<SeP>2159<SeP>3561<SeP>1864<SeP>2006<SeP>1846<SeP>1429<SeP>956<SeP>1689<SeP>921<SeP>1330<SeP>1120<SeP>26790<SeP>1766<SeP>3914<SeP>3896<SeP>2185<SeP>3548<SeP>2626<SeP>1821<SeP>3560<SeP>2431<SeP>3621<SeP>2491<SeP>2517<SeP>3056<SeP>3430<SeP>6632<SeP>4637<SeP>4350<SeP>3356<SeP>2866<SeP>3299<SeP>3761<SeP>5949<SeP>7988<SeP>5411<SeP>2018<SeP>3366<SeP>2546<SeP>4030<SeP>3758<SeP>3719<SeP>2687<SeP>2605<SeP>5988<SeP>3262<SeP>6143<SeP>3567<SeP>5398<SeP>5708<SeP>5580<SeP>3688<SeP>17700<SeP>10240<SeP>12486<SeP>1726<SeP>2272<SeP>4742<SeP>3323<SeP>3754<SeP>4132<SeP>4995<SeP>3608<SeP>4444<SeP>4627<SeP>3137<SeP>3721<SeP>1412<SeP>1592<SeP>2124<SeP>3832<SeP>2295<SeP>3002<SeP>3526<SeP>4499<SeP>3534<SeP>3327<SeP>4147<SeP>3416<SeP>2564<SeP>6001<SeP>7766<SeP>6231<SeP>4219<SeP>5326<SeP>4482<SeP>3468<SeP>3455<SeP>4602<SeP>5677<SeP>5210<SeP>4215<SeP>4292<SeP>2064<SeP>667<SeP>2015<SeP>1650<SeP>827<SeP>1309<SeP>1844<SeP>1113<SeP>1725<SeP>4050<SeP>4707<SeP>6352<SeP>34234<SeP>4459<SeP>4279<SeP>22075<SeP>7213<SeP>5069<SeP>6071<SeP>4369<SeP>24112<SeP>4877<SeP>5135<SeP>4459<SeP>4571<SeP>6230<SeP>26328<SeP>8710<SeP>4047<SeP>3558<SeP>3911<SeP>5518<SeP>5084<SeP>2759<SeP>3445<SeP>3966<SeP>5194<SeP>4959<SeP>13069<SeP>9184<SeP>5599<SeP>6562<SeP>3391<SeP>2435<SeP>3315<SeP>4369<SeP>4041<SeP>3828<SeP>2850<SeP>3890<SeP>2231<SeP>4125<SeP>3884<SeP>7117<SeP>9401<SeP>9044<SeP>8500<SeP>8629<SeP>7390<SeP>6655<SeP>5106<SeP>4494<SeP>6323<SeP>23205<SeP>3261<SeP>3912<SeP>3302<SeP>11078<SeP>4995<SeP>4775<SeP>3926";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:19:21<SeP>2023-07-28 20:38:42<SeP>2023-07-30 06:58:03<SeP>2023-07-31 17:17:24<SeP>2023-08-02 03:36:45<SeP>2023-08-03 13:56:06<SeP>2023-08-05 00:15:27<SeP>2023-08-06 10:34:48<SeP>2023-08-07 20:54:09<SeP>2023-08-09 07:13:30<SeP>2023-08-10 17:32:51<SeP>2023-08-12 03:52:12<SeP>2023-08-13 14:11:33<SeP>2023-08-15 00:30:54<SeP>2023-08-16 10:50:15<SeP>2023-08-17 21:09:36<SeP>2023-08-19 07:28:57<SeP>2023-08-20 17:48:18<SeP>2023-08-22 04:07:39<SeP>2023-08-23 14:27:00<SeP>2023-08-25 00:46:21<SeP>2023-08-26 11:05:42<SeP>2023-08-27 21:25:03<SeP>2023-08-29 07:44:24<SeP>2023-08-30 18:03:45<SeP>2023-09-01 04:23:06<SeP>2023-09-02 14:42:27<SeP>2023-09-04 01:01:48<SeP>2023-09-05 11:21:09<SeP>2023-09-06 21:40:30<SeP>2023-09-08 07:59:51<SeP>2023-09-09 18:19:12<SeP>2023-09-11 04:38:33<SeP>2023-09-12 14:57:54<SeP>2023-09-14 01:17:15<SeP>2023-09-15 11:36:36<SeP>2023-09-16 21:55:57<SeP>2023-09-18 08:15:18<SeP>2023-09-19 18:34:39<SeP>2023-09-21 04:54:00<SeP>2023-09-22 15:13:21<SeP>2023-09-24 01:32:42<SeP>2023-09-25 11:52:03<SeP>2023-09-26 22:11:24<SeP>2023-09-28 08:30:45<SeP>2023-09-29 18:50:06<SeP>2023-10-01 05:09:27<SeP>2023-10-02 15:28:48<SeP>2023-10-04 01:48:09<SeP>2023-10-05 12:07:30<SeP>2023-10-06 22:26:51<SeP>2023-10-08 08:46:12<SeP>2023-10-09 19:05:33<SeP>2023-10-11 05:24:54<SeP>2023-10-12 15:44:15<SeP>2023-10-14 02:03:36<SeP>2023-10-15 12:22:57<SeP>2023-10-16 22:42:18<SeP>2023-10-18 09:01:39<SeP>2023-10-19 19:21:00<SeP>2023-10-21 05:40:21<SeP>2023-10-22 15:59:42<SeP>2023-10-24 02:19:03<SeP>2023-10-25 12:38:24<SeP>2023-10-26 22:57:45<SeP>2023-10-28 09:17:06<SeP>2023-10-29 19:36:27<SeP>2023-10-31 05:55:48<SeP>2023-11-01 16:15:09<SeP>2023-11-03 02:34:30<SeP>2023-11-04 12:53:51<SeP>2023-11-05 22:13:12<SeP>2023-11-07 08:32:33<SeP>2023-11-08 18:51:54<SeP>2023-11-10 05:11:15<SeP>2023-11-11 15:30:36<SeP>2023-11-13 01:49:57<SeP>2023-11-14 12:09:18<SeP>2023-11-15 22:28:39<SeP>2023-11-17 08:48:00<SeP>2023-11-18 19:07:21<SeP>2023-11-20 05:26:42<SeP>2023-11-21 15:46:03<SeP>2023-11-23 02:05:24<SeP>2023-11-24 12:24:45<SeP>2023-11-25 22:44:06<SeP>2023-11-27 09:03:27<SeP>2023-11-28 19:22:48<SeP>2023-11-30 05:42:09<SeP>2023-12-01 16:01:30<SeP>2023-12-03 02:20:51<SeP>2023-12-04 12:40:12<SeP>2023-12-05 22:59:33<SeP>2023-12-07 09:18:54<SeP>2023-12-08 19:38:15<SeP>2023-12-10 05:57:36<SeP>2023-12-11 16:16:57<SeP>2023-12-13 02:36:18<SeP>2023-12-14 12:55:39<SeP>2023-12-15 23:15:00<SeP>2023-12-17 09:34:21<SeP>2023-12-18 19:53:42<SeP>2023-12-20 06:13:03<SeP>2023-12-21 16:32:24<SeP>2023-12-23 02:51:45<SeP>2023-12-24 13:11:06<SeP>2023-12-25 23:30:27<SeP>2023-12-27 09:49:48<SeP>2023-12-28 20:09:09<SeP>2023-12-30 06:28:30<SeP>2023-12-31 16:47:51<SeP>2024-01-02 03:07:12<SeP>2024-01-03 13:26:33<SeP>2024-01-04 23:45:54<SeP>2024-01-06 10:05:15<SeP>2024-01-07 20:24:36<SeP>2024-01-09 06:43:57<SeP>2024-01-10 17:03:18<SeP>2024-01-12 03:22:39<SeP>2024-01-13 13:42:00<SeP>2024-01-15 00:01:21<SeP>2024-01-16 10:20:42<SeP>2024-01-17 20:40:03<SeP>2024-01-19 06:59:24<SeP>2024-01-20 17:18:45<SeP>2024-01-22 03:38:06<SeP>2024-01-23 13:57:27<SeP>2024-01-25 00:16:48<SeP>2024-01-26 10:36:09<SeP>2024-01-27 20:55:30<SeP>2024-01-29 07:14:51<SeP>2024-01-30 17:34:12<SeP>2024-02-01 03:53:33<SeP>2024-02-02 14:12:54<SeP>2024-02-04 00:32:15<SeP>2024-02-05 10:51:36<SeP>2024-02-06 21:10:57<SeP>2024-02-08 07:30:18<SeP>2024-02-09 17:49:39<SeP>2024-02-11 04:09:00<SeP>2024-02-12 14:28:21<SeP>2024-02-14 00:47:42<SeP>2024-02-15 11:07:03<SeP>2024-02-16 21:26:24<SeP>2024-02-18 07:45:45<SeP>2024-02-19 18:05:06<SeP>2024-02-21 04:24:27<SeP>2024-02-22 14:43:48<SeP>2024-02-24 01:03:09<SeP>2024-02-25 11:22:30<SeP>2024-02-26 21:41:51<SeP>2024-02-28 08:01:12<SeP>2024-02-29 18:20:33<SeP>2024-03-02 04:39:54<SeP>2024-03-03 14:59:15<SeP>2024-03-05 01:18:36<SeP>2024-03-06 11:37:57<SeP>2024-03-07 21:57:18<SeP>2024-03-09 08:16:39<SeP>2024-03-10 19:36:00<SeP>2024-03-12 05:55:21<SeP>2024-03-13 16:14:42<SeP>2024-03-15 02:34:03<SeP>2024-03-16 12:53:24<SeP>2024-03-17 23:12:45<SeP>2024-03-19 09:32:06<SeP>2024-03-20 19:51:27<SeP>2024-03-22 06:10:48<SeP>2024-03-23 16:30:09<SeP>2024-03-25 02:49:30<SeP>2024-03-26 13:08:51<SeP>2024-03-27 23:28:12<SeP>2024-03-29 09:47:33<SeP>2024-03-30 20:06:54<SeP>2024-04-01 06:26:15<SeP>2024-04-02 16:45:36<SeP>2024-04-04 03:04:57<SeP>2024-04-05 13:24:18<SeP>2024-04-06 23:43:39<SeP>2024-04-08 10:03:00<SeP>2024-04-09 20:22:21<SeP>2024-04-11 06:41:42<SeP>2024-04-12 17:01:03<SeP>2024-04-14 03:20:24<SeP>2024-04-15 13:39:45<SeP>2024-04-16 23:59:06<SeP>2024-04-18 10:18:27<SeP>2024-04-19 20:37:48<SeP>2024-04-21 06:57:09<SeP>2024-04-22 17:16:30<SeP>2024-04-24 03:35:51<SeP>2024-04-25 13:55:12<SeP>2024-04-27 00:14:33<SeP>2024-04-28 10:33:54<SeP>2024-04-29 20:53:15<SeP>2024-05-01 07:12:36<SeP>2024-05-02 17:31:57<SeP>2024-05-04 03:51:18<SeP>2024-05-05 14:10:39<SeP>2024-05-07 00:30:00<SeP>2024-05-08 10:49:21<SeP>2024-05-09 21:08:42<SeP>2024-05-11 07:28:03<SeP>2024-05-12 17:47:24<SeP>2024-05-14 04:06:45<SeP>2024-05-15 14:26:06<SeP>2024-05-17 00:45:27<SeP>2024-05-18 11:04:48<SeP>2024-05-19 21:24:09<SeP>2024-05-21 07:43:30<SeP>2024-05-22 18:02:51<SeP>2024-05-24 04:22:12<SeP>2024-05-25 14:41:33<SeP>2024-05-27 01:00:54<SeP>2024-05-28 11:20:15<SeP>2024-05-29 21:39:36<SeP>2024-05-31 07:58:57<SeP>2024-06-01 18:18:18<SeP>2024-06-03 04:37:39<SeP>2024-06-04 14:57:00<SeP>2024-06-06 01:16:21<SeP>2024-06-07 11:35:42<SeP>2024-06-08 21:55:03<SeP>2024-06-10 08:14:24<SeP>2024-06-11 18:33:45<SeP>2024-06-13 04:53:06<SeP>2024-06-14 15:12:27<SeP>2024-06-16 01:31:48<SeP>2024-06-17 11:51:09<SeP>2024-06-18 22:10:30<SeP>2024-06-20 08:29:51<SeP>2024-06-21 18:49:12<SeP>2024-06-23 05:08:33<SeP>2024-06-24 15:27:54<SeP>2024-06-26 01:47:15<SeP>2024-06-27 12:06:36<SeP>2024-06-28 22:25:57<SeP>2024-06-30 08:45:18<SeP>2024-07-01 19:04:39<SeP>2024-07-03 05:24:00<SeP>2024-07-04 15:43:21<SeP>2024-07-06 02:02:42<SeP>2024-07-07 12:22:03<SeP>2024-07-08 22:41:24<SeP>2024-07-10 09:00:45<SeP>2024-07-11 19:20:06<SeP>2024-07-13 05:39:27<SeP>2024-07-14 15:58:48<SeP>2024-07-16 02:18:09<SeP>2024-07-17 12:37:30<SeP>2024-07-18 22:56:51<SeP>2024-07-20 09:16:12<SeP>2024-07-21 19:35:33<SeP>2024-07-23 05:54:54<SeP>2024-07-24 16:14:15<SeP>2024-07-26 02:33:36<SeP>2024-07-27 12:52:57<SeP>2024-07-28 23:12:18<SeP>2024-07-30 09:31:39<SeP>2024-07-31 19:51:00<SeP>2024-08-02 06:10:21<SeP>2024-08-03 16:29:42<SeP>2024-08-05 02:49:03<SeP>2024-08-06 13:08:24<SeP>2024-08-07 23:27:45<SeP>2024-08-09 09:47:06<SeP>2024-08-10 20:06:27<SeP>2024-08-12 06:25:48<SeP>2024-08-13 16:45:09<SeP>2024-08-15 03:04:30<SeP>2024-08-16 13:23:51<SeP>2024-08-17 23:43:12<SeP>2024-08-19 10:02:33<SeP>2024-08-20 20:21:54<SeP>2024-08-22 06:41:15<SeP>2024-08-23 17:00:36<SeP>2024-08-25 03:19:57<SeP>2024-08-26 13:39:18<SeP>2024-08-27 23:58:39<SeP>2024-08-29 10:18:00<SeP>2024-08-30 20:37:21<SeP>2024-09-01 06:56:42<SeP>2024-09-02 17:16:03<SeP>2024-09-04 03:35:24<SeP>2024-09-05 13:54:45<SeP>2024-09-07 00:14:06<SeP>2024-09-08 10:33:27<SeP>2024-09-09 20:52:48<SeP>2024-09-11 07:12:09<SeP>2024-09-12 17:31:30<SeP>2024-09-14 03:50:51<SeP>2024-09-15 14:10:12<SeP>2024-09-17 00:29:33<SeP>2024-09-18 10:48:54<SeP>2024-09-19 21:08:15<SeP>2024-09-21 07:27:36<SeP>2024-09-22 17:46:57<SeP>2024-09-24 04:06:18<SeP>2024-09-25 14:25:39<SeP>2024-09-27 00:45:00<SeP>2024-09-28 11:04:21<SeP>2024-09-29 21:23:42<SeP>2024-10-01 07:43:03<SeP>2024-10-02 18:02:24<SeP>2024-10-04 04:21:45<SeP>2024-10-05 14:41:06<SeP>2024-10-07 01:00:27<SeP>2024-10-08 11:19:48<SeP>2024-10-09 21:39:09<SeP>2024-10-11 07:58:30<SeP>2024-10-12 18:17:51<SeP>2024-10-14 04:37:12<SeP>2024-10-15 14:56:33<SeP>2024-10-17 01:15:54<SeP>2024-10-18 11:35:15<SeP>2024-10-19 21:54:36<SeP>2024-10-21 08:13:57<SeP>2024-10-22 18:33:18<SeP>2024-10-24 04:52:39<SeP>2024-10-25 15:12:00<SeP>2024-10-27 01:31:21<SeP>2024-10-28 11:50:42<SeP>2024-10-29 22:10:03<SeP>2024-10-31 08:29:24<SeP>2024-11-01 18:48:45<SeP>2024-11-03 04:08:06<SeP>2024-11-04 14:27:27<SeP>2024-11-06 00:46:48<SeP>2024-11-07 11:06:09<SeP>2024-11-08 21:25:30<SeP>2024-11-10 07:44:51<SeP>2024-11-11 18:04:12<SeP>2024-11-13 04:23:33<SeP>2024-11-14 14:42:54<SeP>2024-11-16 01:02:15<SeP>2024-11-17 11:21:36<SeP>2024-11-18 21:40:57<SeP>2024-11-20 08:00:18<SeP>2024-11-21 18:19:39<SeP>2024-11-23 04:39:00<SeP>2024-11-24 14:58:21<SeP>2024-11-26 01:17:42<SeP>2024-11-27 11:37:03<SeP>2024-11-28 21:56:24<SeP>2024-11-30 08:15:45<SeP>2024-12-01 18:35:06<SeP>2024-12-03 04:54:27<SeP>2024-12-04 15:13:48<SeP>2024-12-06 01:33:09<SeP>2024-12-07 11:52:30<SeP>2024-12-08 22:11:51<SeP>2024-12-10 08:31:12<SeP>2024-12-11 18:50:33<SeP>2024-12-13 05:09:54<SeP>2024-12-14 15:29:15<SeP>2024-12-16 01:48:36<SeP>2024-12-17 12:07:57<SeP>2024-12-18 22:27:18<SeP>2024-12-20 08:46:39<SeP>2024-12-21 19:06:00<SeP>2024-12-23 05:25:21<SeP>2024-12-24 15:44:42<SeP>2024-12-26 02:04:03<SeP>2024-12-27 12:23:24<SeP>2024-12-28 22:42:45<SeP>2024-12-30 09:02:06<SeP>2024-12-31 19:21:27<SeP>2025-01-02 05:40:48<SeP>2025-01-03 16:00:09<SeP>2025-01-05 02:19:30<SeP>2025-01-06 12:38:51<SeP>2025-01-07 22:58:12<SeP>2025-01-09 09:17:33<SeP>2025-01-10 19:36:54<SeP>2025-01-12 05:56:15<SeP>2025-01-13 16:15:36<SeP>2025-01-15 02:34:57<SeP>2025-01-16 12:54:18<SeP>2025-01-17 23:13:39<SeP>2025-01-19 09:33:00<SeP>2025-01-20 19:52:21<SeP>2025-01-22 06:11:42<SeP>2025-01-23 16:31:03<SeP>2025-01-25 02:50:24<SeP>2025-01-26 13:09:45<SeP>2025-01-27 23:29:06<SeP>2025-01-29 09:48:27<SeP>2025-01-30 20:07:48<SeP>2025-02-01 06:27:09<SeP>2025-02-02 16:46:30<SeP>2025-02-04 03:05:51<SeP>2025-02-05 13:25:12<SeP>2025-02-06 23:44:33<SeP>2025-02-08 10:03:54<SeP>2025-02-09 20:23:15<SeP>2025-02-11 06:42:36<SeP>2025-02-12 17:01:57<SeP>2025-02-14 03:21:18<SeP>2025-02-15 13:40:39";
  const itemLabel       = "Escaneos";
  const itemData        = "752<SeP>1442<SeP>1365<SeP>1425<SeP>1187<SeP>1610<SeP>1105<SeP>960<SeP>1069<SeP>3294<SeP>1497<SeP>2860<SeP>1755<SeP>2583<SeP>724<SeP>816<SeP>1384<SeP>898<SeP>3130<SeP>1445<SeP>1460<SeP>1019<SeP>911<SeP>1061<SeP>1178<SeP>932<SeP>666<SeP>943<SeP>3676<SeP>866<SeP>810<SeP>1105<SeP>1469<SeP>883<SeP>793<SeP>3118<SeP>2462<SeP>2056<SeP>1658<SeP>1608<SeP>1282<SeP>1438<SeP>1870<SeP>1885<SeP>1991<SeP>1471<SeP>1580<SeP>1506<SeP>1776<SeP>1712<SeP>1718<SeP>1766<SeP>1694<SeP>1566<SeP>3112<SeP>1703<SeP>1406<SeP>1718<SeP>2056<SeP>2257<SeP>1432<SeP>2953<SeP>2216<SeP>1403<SeP>1479<SeP>1385<SeP>1588<SeP>1745<SeP>1533<SeP>1235<SeP>1408<SeP>1189<SeP>2316<SeP>1182<SeP>1079<SeP>1190<SeP>1971<SeP>7570<SeP>1148<SeP>1343<SeP>1303<SeP>1660<SeP>1903<SeP>1106<SeP>6516<SeP>1611<SeP>1627<SeP>933<SeP>1102<SeP>3256<SeP>1236<SeP>1044<SeP>941<SeP>1093<SeP>1003<SeP>3051<SeP>891<SeP>1150<SeP>2810<SeP>4380<SeP>3964<SeP>893<SeP>921<SeP>943<SeP>944<SeP>989<SeP>823<SeP>1110<SeP>2347<SeP>3273<SeP>1647<SeP>1225<SeP>1342<SeP>560<SeP>1408<SeP>1272<SeP>1172<SeP>857<SeP>1764<SeP>1568<SeP>1273<SeP>994<SeP>923<SeP>1093<SeP>768<SeP>839<SeP>871<SeP>773<SeP>864<SeP>1035<SeP>782<SeP>808<SeP>810<SeP>921<SeP>818<SeP>669<SeP>875<SeP>842<SeP>895<SeP>834<SeP>750<SeP>860<SeP>725<SeP>805<SeP>1045<SeP>755<SeP>864<SeP>860<SeP>921<SeP>866<SeP>1066<SeP>934<SeP>486<SeP>920<SeP>855<SeP>910<SeP>1161<SeP>960<SeP>1070<SeP>1252<SeP>1001<SeP>951<SeP>903<SeP>884<SeP>813<SeP>800<SeP>1046<SeP>884<SeP>896<SeP>922<SeP>1080<SeP>886<SeP>1078<SeP>968<SeP>1012<SeP>1064<SeP>919<SeP>868<SeP>1996<SeP>1261<SeP>1193<SeP>1034<SeP>917<SeP>1131<SeP>989<SeP>943<SeP>771<SeP>723<SeP>935<SeP>1076<SeP>818<SeP>1058<SeP>1183<SeP>1111<SeP>1145<SeP>1250<SeP>1087<SeP>1302<SeP>1104<SeP>1509<SeP>1166<SeP>1468<SeP>2040<SeP>1241<SeP>1054<SeP>808<SeP>1084<SeP>882<SeP>1084<SeP>478<SeP>839<SeP>917<SeP>897<SeP>2268<SeP>5315<SeP>2188<SeP>1924<SeP>1222<SeP>871<SeP>972<SeP>913<SeP>924<SeP>931<SeP>1094<SeP>1007<SeP>1065<SeP>1382<SeP>1959<SeP>1015<SeP>1207<SeP>1219<SeP>1245<SeP>1104<SeP>1037<SeP>920<SeP>1096<SeP>1096<SeP>960<SeP>1085<SeP>1040<SeP>1117<SeP>897<SeP>974<SeP>1346<SeP>1096<SeP>1052<SeP>1198<SeP>1334<SeP>1209<SeP>1487<SeP>1232<SeP>1047<SeP>1157<SeP>1100<SeP>1971<SeP>1186<SeP>1663<SeP>1753<SeP>1428<SeP>1948<SeP>1623<SeP>1228<SeP>1161<SeP>1077<SeP>1327<SeP>1403<SeP>1277<SeP>1254<SeP>1260<SeP>1669<SeP>1559<SeP>1344<SeP>1502<SeP>1457<SeP>1175<SeP>980<SeP>1114<SeP>1361<SeP>1051<SeP>1206<SeP>1299<SeP>1136<SeP>1459<SeP>1866<SeP>1302<SeP>1234<SeP>1577<SeP>1431<SeP>1063<SeP>1083<SeP>900<SeP>847<SeP>872<SeP>1029<SeP>976<SeP>1777<SeP>1073<SeP>1111<SeP>1061<SeP>796<SeP>1084<SeP>807<SeP>1402<SeP>876<SeP>799<SeP>1077<SeP>1259<SeP>1535<SeP>1410<SeP>1074<SeP>1079<SeP>969<SeP>1816<SeP>1038<SeP>1055<SeP>1094<SeP>951<SeP>1595<SeP>967<SeP>936<SeP>1203<SeP>1059<SeP>810<SeP>902<SeP>1113<SeP>1380<SeP>1540<SeP>1347<SeP>1388<SeP>1316<SeP>935<SeP>1149<SeP>1168<SeP>1111<SeP>872<SeP>1258<SeP>1000<SeP>995<SeP>1309<SeP>1515<SeP>1272<SeP>1560<SeP>1308<SeP>1319<SeP>1513<SeP>1396<SeP>1494<SeP>1294<SeP>1447<SeP>1196<SeP>1762<SeP>1203<SeP>1518<SeP>1519<SeP>1315<SeP>1407<SeP>1355<SeP>1124<SeP>1261<SeP>1405<SeP>1600<SeP>1494<SeP>1229<SeP>1120<SeP>1273<SeP>1351<SeP>1279<SeP>1106<SeP>1597<SeP>1872<SeP>1410<SeP>1179<SeP>700<SeP>1434<SeP>1770<SeP>1291<SeP>1226<SeP>1289<SeP>1019<SeP>1469<SeP>1262<SeP>1267<SeP>1465<SeP>1710<SeP>1324<SeP>1560<SeP>1668<SeP>1297<SeP>1387<SeP>1451<SeP>1590<SeP>1481<SeP>1156<SeP>1162<SeP>1870<SeP>1575<SeP>1766<SeP>1784<SeP>1870<SeP>1533";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:19:21<SeP>2023-07-28 20:38:42<SeP>2023-07-30 06:58:03<SeP>2023-07-31 17:17:24<SeP>2023-08-02 03:36:45<SeP>2023-08-03 13:56:06<SeP>2023-08-05 00:15:27<SeP>2023-08-06 10:34:48<SeP>2023-08-07 20:54:09<SeP>2023-08-09 07:13:30<SeP>2023-08-10 17:32:51<SeP>2023-08-12 03:52:12<SeP>2023-08-13 14:11:33<SeP>2023-08-15 00:30:54<SeP>2023-08-16 10:50:15<SeP>2023-08-17 21:09:36<SeP>2023-08-19 07:28:57<SeP>2023-08-20 17:48:18<SeP>2023-08-22 04:07:39<SeP>2023-08-23 14:27:00<SeP>2023-08-25 00:46:21<SeP>2023-08-26 11:05:42<SeP>2023-08-27 21:25:03<SeP>2023-08-29 07:44:24<SeP>2023-08-30 18:03:45<SeP>2023-09-01 04:23:06<SeP>2023-09-02 14:42:27<SeP>2023-09-04 01:01:48<SeP>2023-09-05 11:21:09<SeP>2023-09-06 21:40:30<SeP>2023-09-08 07:59:51<SeP>2023-09-09 18:19:12<SeP>2023-09-11 04:38:33<SeP>2023-09-12 14:57:54<SeP>2023-09-14 01:17:15<SeP>2023-09-15 11:36:36<SeP>2023-09-16 21:55:57<SeP>2023-09-18 08:15:18<SeP>2023-09-19 18:34:39<SeP>2023-09-21 04:54:00<SeP>2023-09-22 15:13:21<SeP>2023-09-24 01:32:42<SeP>2023-09-25 11:52:03<SeP>2023-09-26 22:11:24<SeP>2023-09-28 08:30:45<SeP>2023-09-29 18:50:06<SeP>2023-10-01 05:09:27<SeP>2023-10-02 15:28:48<SeP>2023-10-04 01:48:09<SeP>2023-10-05 12:07:30<SeP>2023-10-06 22:26:51<SeP>2023-10-08 08:46:12<SeP>2023-10-09 19:05:33<SeP>2023-10-11 05:24:54<SeP>2023-10-12 15:44:15<SeP>2023-10-14 02:03:36<SeP>2023-10-15 12:22:57<SeP>2023-10-16 22:42:18<SeP>2023-10-18 09:01:39<SeP>2023-10-19 19:21:00<SeP>2023-10-21 05:40:21<SeP>2023-10-22 15:59:42<SeP>2023-10-24 02:19:03<SeP>2023-10-25 12:38:24<SeP>2023-10-26 22:57:45<SeP>2023-10-28 09:17:06<SeP>2023-10-29 19:36:27<SeP>2023-10-31 05:55:48<SeP>2023-11-01 16:15:09<SeP>2023-11-03 02:34:30<SeP>2023-11-04 12:53:51<SeP>2023-11-05 22:13:12<SeP>2023-11-07 08:32:33<SeP>2023-11-08 18:51:54<SeP>2023-11-10 05:11:15<SeP>2023-11-11 15:30:36<SeP>2023-11-13 01:49:57<SeP>2023-11-14 12:09:18<SeP>2023-11-15 22:28:39<SeP>2023-11-17 08:48:00<SeP>2023-11-18 19:07:21<SeP>2023-11-20 05:26:42<SeP>2023-11-21 15:46:03<SeP>2023-11-23 02:05:24<SeP>2023-11-24 12:24:45<SeP>2023-11-25 22:44:06<SeP>2023-11-27 09:03:27<SeP>2023-11-28 19:22:48<SeP>2023-11-30 05:42:09<SeP>2023-12-01 16:01:30<SeP>2023-12-03 02:20:51<SeP>2023-12-04 12:40:12<SeP>2023-12-05 22:59:33<SeP>2023-12-07 09:18:54<SeP>2023-12-08 19:38:15<SeP>2023-12-10 05:57:36<SeP>2023-12-11 16:16:57<SeP>2023-12-13 02:36:18<SeP>2023-12-14 12:55:39<SeP>2023-12-15 23:15:00<SeP>2023-12-17 09:34:21<SeP>2023-12-18 19:53:42<SeP>2023-12-20 06:13:03<SeP>2023-12-21 16:32:24<SeP>2023-12-23 02:51:45<SeP>2023-12-24 13:11:06<SeP>2023-12-25 23:30:27<SeP>2023-12-27 09:49:48<SeP>2023-12-28 20:09:09<SeP>2023-12-30 06:28:30<SeP>2023-12-31 16:47:51<SeP>2024-01-02 03:07:12<SeP>2024-01-03 13:26:33<SeP>2024-01-04 23:45:54<SeP>2024-01-06 10:05:15<SeP>2024-01-07 20:24:36<SeP>2024-01-09 06:43:57<SeP>2024-01-10 17:03:18<SeP>2024-01-12 03:22:39<SeP>2024-01-13 13:42:00<SeP>2024-01-15 00:01:21<SeP>2024-01-16 10:20:42<SeP>2024-01-17 20:40:03<SeP>2024-01-19 06:59:24<SeP>2024-01-20 17:18:45<SeP>2024-01-22 03:38:06<SeP>2024-01-23 13:57:27<SeP>2024-01-25 00:16:48<SeP>2024-01-26 10:36:09<SeP>2024-01-27 20:55:30<SeP>2024-01-29 07:14:51<SeP>2024-01-30 17:34:12<SeP>2024-02-01 03:53:33<SeP>2024-02-02 14:12:54<SeP>2024-02-04 00:32:15<SeP>2024-02-05 10:51:36<SeP>2024-02-06 21:10:57<SeP>2024-02-08 07:30:18<SeP>2024-02-09 17:49:39<SeP>2024-02-11 04:09:00<SeP>2024-02-12 14:28:21<SeP>2024-02-14 00:47:42<SeP>2024-02-15 11:07:03<SeP>2024-02-16 21:26:24<SeP>2024-02-18 07:45:45<SeP>2024-02-19 18:05:06<SeP>2024-02-21 04:24:27<SeP>2024-02-22 14:43:48<SeP>2024-02-24 01:03:09<SeP>2024-02-25 11:22:30<SeP>2024-02-26 21:41:51<SeP>2024-02-28 08:01:12<SeP>2024-02-29 18:20:33<SeP>2024-03-02 04:39:54<SeP>2024-03-03 14:59:15<SeP>2024-03-05 01:18:36<SeP>2024-03-06 11:37:57<SeP>2024-03-07 21:57:18<SeP>2024-03-09 08:16:39<SeP>2024-03-10 19:36:00<SeP>2024-03-12 05:55:21<SeP>2024-03-13 16:14:42<SeP>2024-03-15 02:34:03<SeP>2024-03-16 12:53:24<SeP>2024-03-17 23:12:45<SeP>2024-03-19 09:32:06<SeP>2024-03-20 19:51:27<SeP>2024-03-22 06:10:48<SeP>2024-03-23 16:30:09<SeP>2024-03-25 02:49:30<SeP>2024-03-26 13:08:51<SeP>2024-03-27 23:28:12<SeP>2024-03-29 09:47:33<SeP>2024-03-30 20:06:54<SeP>2024-04-01 06:26:15<SeP>2024-04-02 16:45:36<SeP>2024-04-04 03:04:57<SeP>2024-04-05 13:24:18<SeP>2024-04-06 23:43:39<SeP>2024-04-08 10:03:00<SeP>2024-04-09 20:22:21<SeP>2024-04-11 06:41:42<SeP>2024-04-12 17:01:03<SeP>2024-04-14 03:20:24<SeP>2024-04-15 13:39:45<SeP>2024-04-16 23:59:06<SeP>2024-04-18 10:18:27<SeP>2024-04-19 20:37:48<SeP>2024-04-21 06:57:09<SeP>2024-04-22 17:16:30<SeP>2024-04-24 03:35:51<SeP>2024-04-25 13:55:12<SeP>2024-04-27 00:14:33<SeP>2024-04-28 10:33:54<SeP>2024-04-29 20:53:15<SeP>2024-05-01 07:12:36<SeP>2024-05-02 17:31:57<SeP>2024-05-04 03:51:18<SeP>2024-05-05 14:10:39<SeP>2024-05-07 00:30:00<SeP>2024-05-08 10:49:21<SeP>2024-05-09 21:08:42<SeP>2024-05-11 07:28:03<SeP>2024-05-12 17:47:24<SeP>2024-05-14 04:06:45<SeP>2024-05-15 14:26:06<SeP>2024-05-17 00:45:27<SeP>2024-05-18 11:04:48<SeP>2024-05-19 21:24:09<SeP>2024-05-21 07:43:30<SeP>2024-05-22 18:02:51<SeP>2024-05-24 04:22:12<SeP>2024-05-25 14:41:33<SeP>2024-05-27 01:00:54<SeP>2024-05-28 11:20:15<SeP>2024-05-29 21:39:36<SeP>2024-05-31 07:58:57<SeP>2024-06-01 18:18:18<SeP>2024-06-03 04:37:39<SeP>2024-06-04 14:57:00<SeP>2024-06-06 01:16:21<SeP>2024-06-07 11:35:42<SeP>2024-06-08 21:55:03<SeP>2024-06-10 08:14:24<SeP>2024-06-11 18:33:45<SeP>2024-06-13 04:53:06<SeP>2024-06-14 15:12:27<SeP>2024-06-16 01:31:48<SeP>2024-06-17 11:51:09<SeP>2024-06-18 22:10:30<SeP>2024-06-20 08:29:51<SeP>2024-06-21 18:49:12<SeP>2024-06-23 05:08:33<SeP>2024-06-24 15:27:54<SeP>2024-06-26 01:47:15<SeP>2024-06-27 12:06:36<SeP>2024-06-28 22:25:57<SeP>2024-06-30 08:45:18<SeP>2024-07-01 19:04:39<SeP>2024-07-03 05:24:00<SeP>2024-07-04 15:43:21<SeP>2024-07-06 02:02:42<SeP>2024-07-07 12:22:03<SeP>2024-07-08 22:41:24<SeP>2024-07-10 09:00:45<SeP>2024-07-11 19:20:06<SeP>2024-07-13 05:39:27<SeP>2024-07-14 15:58:48<SeP>2024-07-16 02:18:09<SeP>2024-07-17 12:37:30<SeP>2024-07-18 22:56:51<SeP>2024-07-20 09:16:12<SeP>2024-07-21 19:35:33<SeP>2024-07-23 05:54:54<SeP>2024-07-24 16:14:15<SeP>2024-07-26 02:33:36<SeP>2024-07-27 12:52:57<SeP>2024-07-28 23:12:18<SeP>2024-07-30 09:31:39<SeP>2024-07-31 19:51:00<SeP>2024-08-02 06:10:21<SeP>2024-08-03 16:29:42<SeP>2024-08-05 02:49:03<SeP>2024-08-06 13:08:24<SeP>2024-08-07 23:27:45<SeP>2024-08-09 09:47:06<SeP>2024-08-10 20:06:27<SeP>2024-08-12 06:25:48<SeP>2024-08-13 16:45:09<SeP>2024-08-15 03:04:30<SeP>2024-08-16 13:23:51<SeP>2024-08-17 23:43:12<SeP>2024-08-19 10:02:33<SeP>2024-08-20 20:21:54<SeP>2024-08-22 06:41:15<SeP>2024-08-23 17:00:36<SeP>2024-08-25 03:19:57<SeP>2024-08-26 13:39:18<SeP>2024-08-27 23:58:39<SeP>2024-08-29 10:18:00<SeP>2024-08-30 20:37:21<SeP>2024-09-01 06:56:42<SeP>2024-09-02 17:16:03<SeP>2024-09-04 03:35:24<SeP>2024-09-05 13:54:45<SeP>2024-09-07 00:14:06<SeP>2024-09-08 10:33:27<SeP>2024-09-09 20:52:48<SeP>2024-09-11 07:12:09<SeP>2024-09-12 17:31:30<SeP>2024-09-14 03:50:51<SeP>2024-09-15 14:10:12<SeP>2024-09-17 00:29:33<SeP>2024-09-18 10:48:54<SeP>2024-09-19 21:08:15<SeP>2024-09-21 07:27:36<SeP>2024-09-22 17:46:57<SeP>2024-09-24 04:06:18<SeP>2024-09-25 14:25:39<SeP>2024-09-27 00:45:00<SeP>2024-09-28 11:04:21<SeP>2024-09-29 21:23:42<SeP>2024-10-01 07:43:03<SeP>2024-10-02 18:02:24<SeP>2024-10-04 04:21:45<SeP>2024-10-05 14:41:06<SeP>2024-10-07 01:00:27<SeP>2024-10-08 11:19:48<SeP>2024-10-09 21:39:09<SeP>2024-10-11 07:58:30<SeP>2024-10-12 18:17:51<SeP>2024-10-14 04:37:12<SeP>2024-10-15 14:56:33<SeP>2024-10-17 01:15:54<SeP>2024-10-18 11:35:15<SeP>2024-10-19 21:54:36<SeP>2024-10-21 08:13:57<SeP>2024-10-22 18:33:18<SeP>2024-10-24 04:52:39<SeP>2024-10-25 15:12:00<SeP>2024-10-27 01:31:21<SeP>2024-10-28 11:50:42<SeP>2024-10-29 22:10:03<SeP>2024-10-31 08:29:24<SeP>2024-11-01 18:48:45<SeP>2024-11-03 04:08:06<SeP>2024-11-04 14:27:27<SeP>2024-11-06 00:46:48<SeP>2024-11-07 11:06:09<SeP>2024-11-08 21:25:30<SeP>2024-11-10 07:44:51<SeP>2024-11-11 18:04:12<SeP>2024-11-13 04:23:33<SeP>2024-11-14 14:42:54<SeP>2024-11-16 01:02:15<SeP>2024-11-17 11:21:36<SeP>2024-11-18 21:40:57<SeP>2024-11-20 08:00:18<SeP>2024-11-21 18:19:39<SeP>2024-11-23 04:39:00<SeP>2024-11-24 14:58:21<SeP>2024-11-26 01:17:42<SeP>2024-11-27 11:37:03<SeP>2024-11-28 21:56:24<SeP>2024-11-30 08:15:45<SeP>2024-12-01 18:35:06<SeP>2024-12-03 04:54:27<SeP>2024-12-04 15:13:48<SeP>2024-12-06 01:33:09<SeP>2024-12-07 11:52:30<SeP>2024-12-08 22:11:51<SeP>2024-12-10 08:31:12<SeP>2024-12-11 18:50:33<SeP>2024-12-13 05:09:54<SeP>2024-12-14 15:29:15<SeP>2024-12-16 01:48:36<SeP>2024-12-17 12:07:57<SeP>2024-12-18 22:27:18<SeP>2024-12-20 08:46:39<SeP>2024-12-21 19:06:00<SeP>2024-12-23 05:25:21<SeP>2024-12-24 15:44:42<SeP>2024-12-26 02:04:03<SeP>2024-12-27 12:23:24<SeP>2024-12-28 22:42:45<SeP>2024-12-30 09:02:06<SeP>2024-12-31 19:21:27<SeP>2025-01-02 05:40:48<SeP>2025-01-03 16:00:09<SeP>2025-01-05 02:19:30<SeP>2025-01-06 12:38:51<SeP>2025-01-07 22:58:12<SeP>2025-01-09 09:17:33<SeP>2025-01-10 19:36:54<SeP>2025-01-12 05:56:15<SeP>2025-01-13 16:15:36<SeP>2025-01-15 02:34:57<SeP>2025-01-16 12:54:18<SeP>2025-01-17 23:13:39<SeP>2025-01-19 09:33:00<SeP>2025-01-20 19:52:21<SeP>2025-01-22 06:11:42<SeP>2025-01-23 16:31:03<SeP>2025-01-25 02:50:24<SeP>2025-01-26 13:09:45<SeP>2025-01-27 23:29:06<SeP>2025-01-29 09:48:27<SeP>2025-01-30 20:07:48<SeP>2025-02-01 06:27:09<SeP>2025-02-02 16:46:30<SeP>2025-02-04 03:05:51<SeP>2025-02-05 13:25:12<SeP>2025-02-06 23:44:33<SeP>2025-02-08 10:03:54<SeP>2025-02-09 20:23:15<SeP>2025-02-11 06:42:36<SeP>2025-02-12 17:01:57<SeP>2025-02-14 03:21:18<SeP>2025-02-15 13:40:39";
  const itemLabel       = "Ataques";
  const itemData        = "152<SeP>612<SeP>965<SeP>703<SeP>559<SeP>213<SeP>6947<SeP>481<SeP>9230<SeP>970<SeP>231<SeP>1272<SeP>441<SeP>1087<SeP>142<SeP>427<SeP>167<SeP>361<SeP>660<SeP>2528<SeP>7122<SeP>7893<SeP>6203<SeP>9476<SeP>455<SeP>293<SeP>403<SeP>173<SeP>380<SeP>5905<SeP>104<SeP>365<SeP>132<SeP>493<SeP>317<SeP>7188<SeP>9578<SeP>9240<SeP>10277<SeP>7310<SeP>5079<SeP>7932<SeP>6305<SeP>9724<SeP>8856<SeP>7685<SeP>7820<SeP>8196<SeP>8454<SeP>7840<SeP>6958<SeP>5281<SeP>10594<SeP>8662<SeP>6391<SeP>7595<SeP>8386<SeP>9213<SeP>17970<SeP>16500<SeP>9044<SeP>11315<SeP>6655<SeP>7642<SeP>8476<SeP>9019<SeP>7881<SeP>7238<SeP>6317<SeP>6581<SeP>6826<SeP>4971<SeP>3400<SeP>6813<SeP>5773<SeP>6449<SeP>6054<SeP>7167<SeP>4093<SeP>5194<SeP>8032<SeP>4445<SeP>6385<SeP>5524<SeP>4321<SeP>7051<SeP>4982<SeP>5405<SeP>5707<SeP>6577<SeP>21512<SeP>11277<SeP>33831<SeP>7630<SeP>7747<SeP>7336<SeP>11118<SeP>6727<SeP>4992<SeP>6344<SeP>3906<SeP>4822<SeP>6090<SeP>5072<SeP>8752<SeP>5347<SeP>6515<SeP>4920<SeP>4424<SeP>8286<SeP>8606<SeP>7591<SeP>6670<SeP>3830<SeP>8334<SeP>10198<SeP>7291<SeP>2734<SeP>4774<SeP>7453<SeP>7829<SeP>5696<SeP>7287<SeP>8026<SeP>2624<SeP>3032<SeP>1171<SeP>1628<SeP>1812<SeP>2491<SeP>825<SeP>1311<SeP>613<SeP>1662<SeP>1199<SeP>1136<SeP>1032<SeP>897<SeP>1047<SeP>752<SeP>1434<SeP>1367<SeP>1211<SeP>814<SeP>2239<SeP>2020<SeP>6042<SeP>10554<SeP>7575<SeP>8608<SeP>6659<SeP>12939<SeP>2171<SeP>8913<SeP>11793<SeP>9587<SeP>11779<SeP>9138<SeP>11137<SeP>10742<SeP>9557<SeP>11363<SeP>7342<SeP>3457<SeP>7692<SeP>12930<SeP>17410<SeP>6410<SeP>8078<SeP>10823<SeP>17301<SeP>6169<SeP>6335<SeP>6664<SeP>6425<SeP>19980<SeP>13894<SeP>7615<SeP>10873<SeP>4984<SeP>6932<SeP>5526<SeP>6417<SeP>14593<SeP>5920<SeP>13464<SeP>8249<SeP>6798<SeP>7495<SeP>5718<SeP>4185<SeP>5933<SeP>7684<SeP>4944<SeP>7065<SeP>6650<SeP>5636<SeP>20735<SeP>5363<SeP>7568<SeP>6204<SeP>8140<SeP>10017<SeP>6558<SeP>5084<SeP>3493<SeP>7079<SeP>2747<SeP>5300<SeP>4089<SeP>676<SeP>117<SeP>623<SeP>194<SeP>540<SeP>637<SeP>770<SeP>413<SeP>907<SeP>1049<SeP>1356<SeP>3289<SeP>22569<SeP>629<SeP>4442<SeP>3814<SeP>1900<SeP>7880<SeP>2740<SeP>4073<SeP>3041<SeP>3209<SeP>2914<SeP>3245<SeP>4046<SeP>2547<SeP>2159<SeP>3561<SeP>1864<SeP>2006<SeP>1846<SeP>1429<SeP>956<SeP>1689<SeP>921<SeP>1330<SeP>1120<SeP>26790<SeP>1766<SeP>3914<SeP>3896<SeP>2185<SeP>3548<SeP>2626<SeP>1821<SeP>3560<SeP>2431<SeP>3621<SeP>2491<SeP>2517<SeP>3056<SeP>3430<SeP>6632<SeP>4637<SeP>4350<SeP>3356<SeP>2866<SeP>3299<SeP>3761<SeP>5949<SeP>7988<SeP>5411<SeP>2018<SeP>3366<SeP>2546<SeP>4030<SeP>3758<SeP>3719<SeP>2687<SeP>2605<SeP>5988<SeP>3262<SeP>6143<SeP>3567<SeP>5398<SeP>5708<SeP>5580<SeP>3688<SeP>17700<SeP>10240<SeP>12486<SeP>1726<SeP>2272<SeP>4742<SeP>3323<SeP>3754<SeP>4132<SeP>4995<SeP>3608<SeP>4444<SeP>4627<SeP>3137<SeP>3721<SeP>1412<SeP>1592<SeP>2124<SeP>3832<SeP>2295<SeP>3002<SeP>3526<SeP>4499<SeP>3534<SeP>3327<SeP>4147<SeP>3416<SeP>2564<SeP>6001<SeP>7766<SeP>6231<SeP>4219<SeP>5326<SeP>4482<SeP>3468<SeP>3455<SeP>4602<SeP>5677<SeP>5210<SeP>4215<SeP>4292<SeP>2064<SeP>667<SeP>2015<SeP>1650<SeP>827<SeP>1309<SeP>1844<SeP>1113<SeP>1725<SeP>4050<SeP>4707<SeP>6352<SeP>34234<SeP>4459<SeP>4279<SeP>22075<SeP>7213<SeP>5069<SeP>6071<SeP>4369<SeP>24112<SeP>4877<SeP>5135<SeP>4459<SeP>4571<SeP>6230<SeP>26328<SeP>8710<SeP>4047<SeP>3558<SeP>3911<SeP>5518<SeP>5084<SeP>2759<SeP>3445<SeP>3966<SeP>5194<SeP>4959<SeP>13069<SeP>9184<SeP>5599<SeP>6562<SeP>3391<SeP>2435<SeP>3315<SeP>4369<SeP>4041<SeP>3828<SeP>2850<SeP>3890<SeP>2231<SeP>4125<SeP>3884<SeP>7117<SeP>9401<SeP>9044<SeP>8500<SeP>8629<SeP>7390<SeP>6655<SeP>5106<SeP>4494<SeP>6323<SeP>23205<SeP>3261<SeP>3912<SeP>3302<SeP>11078<SeP>4995<SeP>4775<SeP>3926";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Hong Kong";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "684832<SeP>356789<SeP>205064<SeP>177389<SeP>106856<SeP>86634<SeP>81572<SeP>78953<SeP>67266<SeP>64819";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "290588<SeP>41400<SeP>39488<SeP>34497<SeP>14151<SeP>10341<SeP>7279<SeP>6989<SeP>6883<SeP>6749";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Attacks";
  const itemData    = "394244<SeP>322292<SeP>202375<SeP>137901<SeP>92705<SeP>79885<SeP>78994<SeP>68612<SeP>57830<SeP>56086";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "359053<SeP>259475<SeP>231863<SeP>143803<SeP>65925<SeP>56625<SeP>55153<SeP>44224<SeP>41606<SeP>35314";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "152493<SeP>52237<SeP>40486<SeP>31701<SeP>21865<SeP>12516<SeP>10511<SeP>9189<SeP>7614<SeP>7361";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "346537<SeP>258713<SeP>121938<SeP>79370<SeP>54213<SeP>46114<SeP>38754<SeP>30354<SeP>29324<SeP>26816";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Hong Kong";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "684832<SeP>356789<SeP>205064<SeP>177389<SeP>106856<SeP>86634<SeP>81572<SeP>78953<SeP>67266<SeP>64819";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "290588<SeP>41400<SeP>39488<SeP>34497<SeP>14151<SeP>10341<SeP>7279<SeP>6989<SeP>6883<SeP>6749";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Ataques";
  const itemData    = "394244<SeP>322292<SeP>202375<SeP>137901<SeP>92705<SeP>79885<SeP>78994<SeP>68612<SeP>57830<SeP>56086";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "359053<SeP>259475<SeP>231863<SeP>143803<SeP>65925<SeP>56625<SeP>55153<SeP>44224<SeP>41606<SeP>35314";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "152493<SeP>52237<SeP>40486<SeP>31701<SeP>21865<SeP>12516<SeP>10511<SeP>9189<SeP>7614<SeP>7361";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "346537<SeP>258713<SeP>121938<SeP>79370<SeP>54213<SeP>46114<SeP>38754<SeP>30354<SeP>29324<SeP>26816";
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
