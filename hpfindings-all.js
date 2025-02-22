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
  document.getElementById("last-updated").innerHTML = "2025-2-22";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "34.6";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.6";
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
  const metricData    = "2797800";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "540956";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2256844";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "137513";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1422205";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "834639";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52996";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "245618";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "589021";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42416";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2797800";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "540956";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2256844";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "137513";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1422205";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "834639";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52996";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "245618";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "589021";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42416";
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
  const incomingData = "2797800<SeP>540956<SeP>2256844<SeP>137513";
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
  const incomingData = "2256844<SeP>1422205<SeP>834639<SeP>52996";
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
  const incomingData = "834639<SeP>245618<SeP>589021<SeP>42416";
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
  const incomingData = "2555686<SeP>253026<SeP>2302660";
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
  const incomingData = "388178<SeP>144<SeP>388034<SeP>224";
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
  const incomingData = "2797800<SeP>540956<SeP>2256844<SeP>137513";
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
  const incomingData = "2256844<SeP>1422205<SeP>834639<SeP>52996";
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
  const incomingData = "834639<SeP>245618<SeP>589021<SeP>42416";
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
  const incomingData = "2555686<SeP>253026<SeP>2302660";
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
  const incomingData = "388178<SeP>144<SeP>388034<SeP>224";
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
  const column3Data   = "217553<SeP>199122<SeP>12445<SeP>12123<SeP>9689<SeP>9386<SeP>6439<SeP>5593<SeP>4619<SeP>3457";
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
  const column2Data  = "208798<SeP>43004<SeP>483<SeP>444<SeP>425<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2378144<SeP>419656";
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
  const column3Data   = "217553<SeP>199122<SeP>12445<SeP>12123<SeP>9689<SeP>9386<SeP>6439<SeP>5593<SeP>4619<SeP>3457";
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
  const column2Data  = "208798<SeP>43004<SeP>483<SeP>444<SeP>425<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2378144<SeP>419656";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-22";

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
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "traffic between 2023-07-26 and 2025-02-20"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          388724,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "scans between 2023-07-26 and 2025-02-20"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          223357,30,
          388724,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "attacks between 2023-07-26 and 2025-02-20"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165367,23,
          388724,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-22";

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
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-traffic.geojson"
    });
    map.addLayer({
      "id": "all-traffic",
      "metadata": {
        "name": "tráfico entre 2023-07-26 y 2025-02-20"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          388724,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#800080" // Purple
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-scans", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-scans.geojson"
    });
    map.addLayer({
      "id": "all-scans",
      "metadata": {
        "name": "escaneos entre 2023-07-26 y 2025-02-20"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          223357,30,
          388724,50
        ],
        "circle-opacity": 0.8,
        "circle-color": "#0000FF" // Blue
      },
      "filter": ["==", "$type", "Point"]
    });
    ///////////////////////////////////////////////////////////////////////
    map.addSource("all-attacks", {
      type: "geojson",
      data: "https://cdn.jsdelivr.net/gh/rjdefrancisco/chpdr@latest/map-all-attacks.geojson"
    });
    map.addLayer({
      "id": "all-attacks",
      "metadata": {
        "name": "ataques entre 2023-07-26 y 2025-02-20"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165367,23,
          388724,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:37:21<SeP>2023-07-28 21:14:42<SeP>2023-07-30 07:52:03<SeP>2023-07-31 18:29:24<SeP>2023-08-02 05:06:45<SeP>2023-08-03 15:44:06<SeP>2023-08-05 02:21:27<SeP>2023-08-06 12:58:48<SeP>2023-08-07 23:36:09<SeP>2023-08-09 10:13:30<SeP>2023-08-10 20:50:51<SeP>2023-08-12 07:28:12<SeP>2023-08-13 18:05:33<SeP>2023-08-15 04:42:54<SeP>2023-08-16 15:20:15<SeP>2023-08-18 01:57:36<SeP>2023-08-19 12:34:57<SeP>2023-08-20 23:12:18<SeP>2023-08-22 09:49:39<SeP>2023-08-23 20:27:00<SeP>2023-08-25 07:04:21<SeP>2023-08-26 17:41:42<SeP>2023-08-28 04:19:03<SeP>2023-08-29 14:56:24<SeP>2023-08-31 01:33:45<SeP>2023-09-01 12:11:06<SeP>2023-09-02 22:48:27<SeP>2023-09-04 09:25:48<SeP>2023-09-05 20:03:09<SeP>2023-09-07 06:40:30<SeP>2023-09-08 17:17:51<SeP>2023-09-10 03:55:12<SeP>2023-09-11 14:32:33<SeP>2023-09-13 01:09:54<SeP>2023-09-14 11:47:15<SeP>2023-09-15 22:24:36<SeP>2023-09-17 09:01:57<SeP>2023-09-18 19:39:18<SeP>2023-09-20 06:16:39<SeP>2023-09-21 16:54:00<SeP>2023-09-23 03:31:21<SeP>2023-09-24 14:08:42<SeP>2023-09-26 00:46:03<SeP>2023-09-27 11:23:24<SeP>2023-09-28 22:00:45<SeP>2023-09-30 08:38:06<SeP>2023-10-01 19:15:27<SeP>2023-10-03 05:52:48<SeP>2023-10-04 16:30:09<SeP>2023-10-06 03:07:30<SeP>2023-10-07 13:44:51<SeP>2023-10-09 00:22:12<SeP>2023-10-10 10:59:33<SeP>2023-10-11 21:36:54<SeP>2023-10-13 08:14:15<SeP>2023-10-14 18:51:36<SeP>2023-10-16 05:28:57<SeP>2023-10-17 16:06:18<SeP>2023-10-19 02:43:39<SeP>2023-10-20 13:21:00<SeP>2023-10-21 23:58:21<SeP>2023-10-23 10:35:42<SeP>2023-10-24 21:13:03<SeP>2023-10-26 07:50:24<SeP>2023-10-27 18:27:45<SeP>2023-10-29 05:05:06<SeP>2023-10-30 15:42:27<SeP>2023-11-01 02:19:48<SeP>2023-11-02 12:57:09<SeP>2023-11-03 23:34:30<SeP>2023-11-05 09:11:51<SeP>2023-11-06 19:49:12<SeP>2023-11-08 06:26:33<SeP>2023-11-09 17:03:54<SeP>2023-11-11 03:41:15<SeP>2023-11-12 14:18:36<SeP>2023-11-14 00:55:57<SeP>2023-11-15 11:33:18<SeP>2023-11-16 22:10:39<SeP>2023-11-18 08:48:00<SeP>2023-11-19 19:25:21<SeP>2023-11-21 06:02:42<SeP>2023-11-22 16:40:03<SeP>2023-11-24 03:17:24<SeP>2023-11-25 13:54:45<SeP>2023-11-27 00:32:06<SeP>2023-11-28 11:09:27<SeP>2023-11-29 21:46:48<SeP>2023-12-01 08:24:09<SeP>2023-12-02 19:01:30<SeP>2023-12-04 05:38:51<SeP>2023-12-05 16:16:12<SeP>2023-12-07 02:53:33<SeP>2023-12-08 13:30:54<SeP>2023-12-10 00:08:15<SeP>2023-12-11 10:45:36<SeP>2023-12-12 21:22:57<SeP>2023-12-14 08:00:18<SeP>2023-12-15 18:37:39<SeP>2023-12-17 05:15:00<SeP>2023-12-18 15:52:21<SeP>2023-12-20 02:29:42<SeP>2023-12-21 13:07:03<SeP>2023-12-22 23:44:24<SeP>2023-12-24 10:21:45<SeP>2023-12-25 20:59:06<SeP>2023-12-27 07:36:27<SeP>2023-12-28 18:13:48<SeP>2023-12-30 04:51:09<SeP>2023-12-31 15:28:30<SeP>2024-01-02 02:05:51<SeP>2024-01-03 12:43:12<SeP>2024-01-04 23:20:33<SeP>2024-01-06 09:57:54<SeP>2024-01-07 20:35:15<SeP>2024-01-09 07:12:36<SeP>2024-01-10 17:49:57<SeP>2024-01-12 04:27:18<SeP>2024-01-13 15:04:39<SeP>2024-01-15 01:42:00<SeP>2024-01-16 12:19:21<SeP>2024-01-17 22:56:42<SeP>2024-01-19 09:34:03<SeP>2024-01-20 20:11:24<SeP>2024-01-22 06:48:45<SeP>2024-01-23 17:26:06<SeP>2024-01-25 04:03:27<SeP>2024-01-26 14:40:48<SeP>2024-01-28 01:18:09<SeP>2024-01-29 11:55:30<SeP>2024-01-30 22:32:51<SeP>2024-02-01 09:10:12<SeP>2024-02-02 19:47:33<SeP>2024-02-04 06:24:54<SeP>2024-02-05 17:02:15<SeP>2024-02-07 03:39:36<SeP>2024-02-08 14:16:57<SeP>2024-02-10 00:54:18<SeP>2024-02-11 11:31:39<SeP>2024-02-12 22:09:00<SeP>2024-02-14 08:46:21<SeP>2024-02-15 19:23:42<SeP>2024-02-17 06:01:03<SeP>2024-02-18 16:38:24<SeP>2024-02-20 03:15:45<SeP>2024-02-21 13:53:06<SeP>2024-02-23 00:30:27<SeP>2024-02-24 11:07:48<SeP>2024-02-25 21:45:09<SeP>2024-02-27 08:22:30<SeP>2024-02-28 18:59:51<SeP>2024-03-01 05:37:12<SeP>2024-03-02 16:14:33<SeP>2024-03-04 02:51:54<SeP>2024-03-05 13:29:15<SeP>2024-03-07 00:06:36<SeP>2024-03-08 10:43:57<SeP>2024-03-09 21:21:18<SeP>2024-03-11 08:58:39<SeP>2024-03-12 19:36:00<SeP>2024-03-14 06:13:21<SeP>2024-03-15 16:50:42<SeP>2024-03-17 03:28:03<SeP>2024-03-18 14:05:24<SeP>2024-03-20 00:42:45<SeP>2024-03-21 11:20:06<SeP>2024-03-22 21:57:27<SeP>2024-03-24 08:34:48<SeP>2024-03-25 19:12:09<SeP>2024-03-27 05:49:30<SeP>2024-03-28 16:26:51<SeP>2024-03-30 03:04:12<SeP>2024-03-31 13:41:33<SeP>2024-04-02 00:18:54<SeP>2024-04-03 10:56:15<SeP>2024-04-04 21:33:36<SeP>2024-04-06 08:10:57<SeP>2024-04-07 18:48:18<SeP>2024-04-09 05:25:39<SeP>2024-04-10 16:03:00<SeP>2024-04-12 02:40:21<SeP>2024-04-13 13:17:42<SeP>2024-04-14 23:55:03<SeP>2024-04-16 10:32:24<SeP>2024-04-17 21:09:45<SeP>2024-04-19 07:47:06<SeP>2024-04-20 18:24:27<SeP>2024-04-22 05:01:48<SeP>2024-04-23 15:39:09<SeP>2024-04-25 02:16:30<SeP>2024-04-26 12:53:51<SeP>2024-04-27 23:31:12<SeP>2024-04-29 10:08:33<SeP>2024-04-30 20:45:54<SeP>2024-05-02 07:23:15<SeP>2024-05-03 18:00:36<SeP>2024-05-05 04:37:57<SeP>2024-05-06 15:15:18<SeP>2024-05-08 01:52:39<SeP>2024-05-09 12:30:00<SeP>2024-05-10 23:07:21<SeP>2024-05-12 09:44:42<SeP>2024-05-13 20:22:03<SeP>2024-05-15 06:59:24<SeP>2024-05-16 17:36:45<SeP>2024-05-18 04:14:06<SeP>2024-05-19 14:51:27<SeP>2024-05-21 01:28:48<SeP>2024-05-22 12:06:09<SeP>2024-05-23 22:43:30<SeP>2024-05-25 09:20:51<SeP>2024-05-26 19:58:12<SeP>2024-05-28 06:35:33<SeP>2024-05-29 17:12:54<SeP>2024-05-31 03:50:15<SeP>2024-06-01 14:27:36<SeP>2024-06-03 01:04:57<SeP>2024-06-04 11:42:18<SeP>2024-06-05 22:19:39<SeP>2024-06-07 08:57:00<SeP>2024-06-08 19:34:21<SeP>2024-06-10 06:11:42<SeP>2024-06-11 16:49:03<SeP>2024-06-13 03:26:24<SeP>2024-06-14 14:03:45<SeP>2024-06-16 00:41:06<SeP>2024-06-17 11:18:27<SeP>2024-06-18 21:55:48<SeP>2024-06-20 08:33:09<SeP>2024-06-21 19:10:30<SeP>2024-06-23 05:47:51<SeP>2024-06-24 16:25:12<SeP>2024-06-26 03:02:33<SeP>2024-06-27 13:39:54<SeP>2024-06-29 00:17:15<SeP>2024-06-30 10:54:36<SeP>2024-07-01 21:31:57<SeP>2024-07-03 08:09:18<SeP>2024-07-04 18:46:39<SeP>2024-07-06 05:24:00<SeP>2024-07-07 16:01:21<SeP>2024-07-09 02:38:42<SeP>2024-07-10 13:16:03<SeP>2024-07-11 23:53:24<SeP>2024-07-13 10:30:45<SeP>2024-07-14 21:08:06<SeP>2024-07-16 07:45:27<SeP>2024-07-17 18:22:48<SeP>2024-07-19 05:00:09<SeP>2024-07-20 15:37:30<SeP>2024-07-22 02:14:51<SeP>2024-07-23 12:52:12<SeP>2024-07-24 23:29:33<SeP>2024-07-26 10:06:54<SeP>2024-07-27 20:44:15<SeP>2024-07-29 07:21:36<SeP>2024-07-30 17:58:57<SeP>2024-08-01 04:36:18<SeP>2024-08-02 15:13:39<SeP>2024-08-04 01:51:00<SeP>2024-08-05 12:28:21<SeP>2024-08-06 23:05:42<SeP>2024-08-08 09:43:03<SeP>2024-08-09 20:20:24<SeP>2024-08-11 06:57:45<SeP>2024-08-12 17:35:06<SeP>2024-08-14 04:12:27<SeP>2024-08-15 14:49:48<SeP>2024-08-17 01:27:09<SeP>2024-08-18 12:04:30<SeP>2024-08-19 22:41:51<SeP>2024-08-21 09:19:12<SeP>2024-08-22 19:56:33<SeP>2024-08-24 06:33:54<SeP>2024-08-25 17:11:15<SeP>2024-08-27 03:48:36<SeP>2024-08-28 14:25:57<SeP>2024-08-30 01:03:18<SeP>2024-08-31 11:40:39<SeP>2024-09-01 22:18:00<SeP>2024-09-03 08:55:21<SeP>2024-09-04 19:32:42<SeP>2024-09-06 06:10:03<SeP>2024-09-07 16:47:24<SeP>2024-09-09 03:24:45<SeP>2024-09-10 14:02:06<SeP>2024-09-12 00:39:27<SeP>2024-09-13 11:16:48<SeP>2024-09-14 21:54:09<SeP>2024-09-16 08:31:30<SeP>2024-09-17 19:08:51<SeP>2024-09-19 05:46:12<SeP>2024-09-20 16:23:33<SeP>2024-09-22 03:00:54<SeP>2024-09-23 13:38:15<SeP>2024-09-25 00:15:36<SeP>2024-09-26 10:52:57<SeP>2024-09-27 21:30:18<SeP>2024-09-29 08:07:39<SeP>2024-09-30 18:45:00<SeP>2024-10-02 05:22:21<SeP>2024-10-03 15:59:42<SeP>2024-10-05 02:37:03<SeP>2024-10-06 13:14:24<SeP>2024-10-07 23:51:45<SeP>2024-10-09 10:29:06<SeP>2024-10-10 21:06:27<SeP>2024-10-12 07:43:48<SeP>2024-10-13 18:21:09<SeP>2024-10-15 04:58:30<SeP>2024-10-16 15:35:51<SeP>2024-10-18 02:13:12<SeP>2024-10-19 12:50:33<SeP>2024-10-20 23:27:54<SeP>2024-10-22 10:05:15<SeP>2024-10-23 20:42:36<SeP>2024-10-25 07:19:57<SeP>2024-10-26 17:57:18<SeP>2024-10-28 04:34:39<SeP>2024-10-29 15:12:00<SeP>2024-10-31 01:49:21<SeP>2024-11-01 12:26:42<SeP>2024-11-02 23:04:03<SeP>2024-11-04 08:41:24<SeP>2024-11-05 19:18:45<SeP>2024-11-07 05:56:06<SeP>2024-11-08 16:33:27<SeP>2024-11-10 03:10:48<SeP>2024-11-11 13:48:09<SeP>2024-11-13 00:25:30<SeP>2024-11-14 11:02:51<SeP>2024-11-15 21:40:12<SeP>2024-11-17 08:17:33<SeP>2024-11-18 18:54:54<SeP>2024-11-20 05:32:15<SeP>2024-11-21 16:09:36<SeP>2024-11-23 02:46:57<SeP>2024-11-24 13:24:18<SeP>2024-11-26 00:01:39<SeP>2024-11-27 10:39:00<SeP>2024-11-28 21:16:21<SeP>2024-11-30 07:53:42<SeP>2024-12-01 18:31:03<SeP>2024-12-03 05:08:24<SeP>2024-12-04 15:45:45<SeP>2024-12-06 02:23:06<SeP>2024-12-07 13:00:27<SeP>2024-12-08 23:37:48<SeP>2024-12-10 10:15:09<SeP>2024-12-11 20:52:30<SeP>2024-12-13 07:29:51<SeP>2024-12-14 18:07:12<SeP>2024-12-16 04:44:33<SeP>2024-12-17 15:21:54<SeP>2024-12-19 01:59:15<SeP>2024-12-20 12:36:36<SeP>2024-12-21 23:13:57<SeP>2024-12-23 09:51:18<SeP>2024-12-24 20:28:39<SeP>2024-12-26 07:06:00<SeP>2024-12-27 17:43:21<SeP>2024-12-29 04:20:42<SeP>2024-12-30 14:58:03<SeP>2025-01-01 01:35:24<SeP>2025-01-02 12:12:45<SeP>2025-01-03 22:50:06<SeP>2025-01-05 09:27:27<SeP>2025-01-06 20:04:48<SeP>2025-01-08 06:42:09<SeP>2025-01-09 17:19:30<SeP>2025-01-11 03:56:51<SeP>2025-01-12 14:34:12<SeP>2025-01-14 01:11:33<SeP>2025-01-15 11:48:54<SeP>2025-01-16 22:26:15<SeP>2025-01-18 09:03:36<SeP>2025-01-19 19:40:57<SeP>2025-01-21 06:18:18<SeP>2025-01-22 16:55:39<SeP>2025-01-24 03:33:00<SeP>2025-01-25 14:10:21<SeP>2025-01-27 00:47:42<SeP>2025-01-28 11:25:03<SeP>2025-01-29 22:02:24<SeP>2025-01-31 08:39:45<SeP>2025-02-01 19:17:06<SeP>2025-02-03 05:54:27<SeP>2025-02-04 16:31:48<SeP>2025-02-06 03:09:09<SeP>2025-02-07 13:46:30<SeP>2025-02-09 00:23:51<SeP>2025-02-10 11:01:12<SeP>2025-02-11 21:38:33<SeP>2025-02-13 08:15:54<SeP>2025-02-14 18:53:15<SeP>2025-02-16 05:30:36<SeP>2025-02-17 16:07:57<SeP>2025-02-19 02:45:18<SeP>2025-02-20 13:22:39";
  const item1Label       = "Scans";
  const item1Data        = "759<SeP>1458<SeP>1376<SeP>1425<SeP>1261<SeP>1660<SeP>981<SeP>978<SeP>1100<SeP>3344<SeP>1492<SeP>2816<SeP>1867<SeP>2484<SeP>749<SeP>828<SeP>1415<SeP>1770<SeP>2160<SeP>1531<SeP>1586<SeP>929<SeP>846<SeP>1440<SeP>817<SeP>949<SeP>728<SeP>902<SeP>3619<SeP>956<SeP>827<SeP>1364<SeP>1223<SeP>833<SeP>2172<SeP>2028<SeP>2900<SeP>1737<SeP>1560<SeP>1598<SeP>1291<SeP>1620<SeP>1914<SeP>2041<SeP>1603<SeP>1686<SeP>1577<SeP>1628<SeP>1677<SeP>1743<SeP>1684<SeP>1788<SeP>1772<SeP>1583<SeP>3172<SeP>1343<SeP>1726<SeP>2009<SeP>1879<SeP>2108<SeP>1844<SeP>3339<SeP>1267<SeP>1575<SeP>1493<SeP>1299<SeP>1875<SeP>1662<SeP>1216<SeP>1373<SeP>1381<SeP>1141<SeP>2275<SeP>1190<SeP>1146<SeP>1309<SeP>4694<SeP>4663<SeP>1365<SeP>1306<SeP>1545<SeP>2072<SeP>1117<SeP>3466<SeP>4415<SeP>1574<SeP>1492<SeP>953<SeP>3260<SeP>1209<SeP>1063<SeP>1038<SeP>1084<SeP>1013<SeP>3064<SeP>920<SeP>1061<SeP>2103<SeP>4392<SeP>4653<SeP>978<SeP>926<SeP>955<SeP>966<SeP>926<SeP>928<SeP>1091<SeP>2129<SeP>3475<SeP>1699<SeP>1215<SeP>1366<SeP>560<SeP>1409<SeP>1290<SeP>1180<SeP>853<SeP>1962<SeP>1403<SeP>1243<SeP>1025<SeP>943<SeP>1126<SeP>761<SeP>820<SeP>833<SeP>817<SeP>863<SeP>1075<SeP>776<SeP>792<SeP>876<SeP>943<SeP>901<SeP>563<SeP>889<SeP>853<SeP>805<SeP>916<SeP>821<SeP>805<SeP>740<SeP>834<SeP>1068<SeP>760<SeP>838<SeP>959<SeP>857<SeP>1130<SeP>953<SeP>791<SeP>486<SeP>919<SeP>817<SeP>1264<SeP>877<SeP>934<SeP>1202<SeP>1299<SeP>871<SeP>916<SeP>887<SeP>976<SeP>689<SeP>1017<SeP>1027<SeP>949<SeP>846<SeP>894<SeP>1058<SeP>997<SeP>1000<SeP>1002<SeP>1147<SeP>887<SeP>911<SeP>1125<SeP>2053<SeP>1289<SeP>1001<SeP>1006<SeP>1138<SeP>966<SeP>993<SeP>855<SeP>606<SeP>916<SeP>1158<SeP>905<SeP>920<SeP>1021<SeP>1335<SeP>1024<SeP>1146<SeP>1274<SeP>1198<SeP>1253<SeP>1306<SeP>1239<SeP>1575<SeP>1840<SeP>1510<SeP>1201<SeP>731<SeP>938<SeP>1042<SeP>1111<SeP>488<SeP>777<SeP>830<SeP>984<SeP>1422<SeP>5811<SeP>2559<SeP>1949<SeP>1215<SeP>943<SeP>919<SeP>943<SeP>942<SeP>958<SeP>1063<SeP>1056<SeP>1002<SeP>1376<SeP>2046<SeP>991<SeP>1227<SeP>1230<SeP>1246<SeP>1117<SeP>1044<SeP>943<SeP>1095<SeP>1100<SeP>965<SeP>1102<SeP>1001<SeP>1186<SeP>859<SeP>1022<SeP>1363<SeP>1140<SeP>995<SeP>1323<SeP>1261<SeP>1167<SeP>1525<SeP>1200<SeP>1081<SeP>1180<SeP>1151<SeP>1941<SeP>1263<SeP>1819<SeP>1714<SeP>1369<SeP>1991<SeP>1633<SeP>1172<SeP>1164<SeP>1134<SeP>1174<SeP>1668<SeP>1206<SeP>1198<SeP>1463<SeP>1843<SeP>1279<SeP>1463<SeP>1387<SeP>1374<SeP>1138<SeP>1106<SeP>1289<SeP>1110<SeP>1206<SeP>1273<SeP>1261<SeP>1071<SeP>2029<SeP>1284<SeP>1253<SeP>1666<SeP>1395<SeP>1275<SeP>977<SeP>968<SeP>1006<SeP>1002<SeP>799<SeP>990<SeP>1738<SeP>1157<SeP>1057<SeP>1114<SeP>961<SeP>768<SeP>1048<SeP>1377<SeP>840<SeP>917<SeP>873<SeP>1277<SeP>1495<SeP>1506<SeP>1159<SeP>1095<SeP>932<SeP>1594<SeP>1274<SeP>1058<SeP>1122<SeP>1012<SeP>1554<SeP>1027<SeP>885<SeP>1198<SeP>1066<SeP>908<SeP>884<SeP>1025<SeP>1404<SeP>1474<SeP>1437<SeP>1402<SeP>1381<SeP>927<SeP>1118<SeP>1261<SeP>1044<SeP>983<SeP>1207<SeP>1008<SeP>991<SeP>1266<SeP>1604<SeP>1269<SeP>1553<SeP>1353<SeP>1298<SeP>1522<SeP>1412<SeP>1509<SeP>1301<SeP>1445<SeP>1209<SeP>1800<SeP>1243<SeP>1467<SeP>1604<SeP>1301<SeP>1433<SeP>1320<SeP>1133<SeP>1300<SeP>1386<SeP>1661<SeP>1338<SeP>1329<SeP>1141<SeP>1468<SeP>1123<SeP>1396<SeP>1132<SeP>1652<SeP>1873<SeP>1325<SeP>924<SeP>981<SeP>1758<SeP>1466<SeP>1268<SeP>1383<SeP>1039<SeP>1287<SeP>1268<SeP>1529<SeP>1289<SeP>1462<SeP>1623<SeP>1364<SeP>1504<SeP>1722<SeP>1258<SeP>1534<SeP>1342<SeP>1779<SeP>1575<SeP>999<SeP>1048<SeP>2036<SeP>1891<SeP>1633<SeP>1739<SeP>1692<SeP>1540<SeP>1506<SeP>1665<SeP>1525";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "152<SeP>614<SeP>970<SeP>717<SeP>541<SeP>214<SeP>6968<SeP>505<SeP>9188<SeP>977<SeP>313<SeP>1205<SeP>807<SeP>707<SeP>149<SeP>463<SeP>122<SeP>764<SeP>280<SeP>3700<SeP>7213<SeP>7489<SeP>6918<SeP>7956<SeP>419<SeP>319<SeP>341<SeP>218<SeP>385<SeP>5882<SeP>75<SeP>385<SeP>230<SeP>444<SeP>885<SeP>9876<SeP>9009<SeP>9967<SeP>9818<SeP>5607<SeP>6090<SeP>8051<SeP>7651<SeP>8903<SeP>8543<SeP>7378<SeP>8400<SeP>8779<SeP>7719<SeP>9203<SeP>5464<SeP>5565<SeP>12847<SeP>6610<SeP>7292<SeP>7515<SeP>10162<SeP>15118<SeP>19569<SeP>8280<SeP>9224<SeP>10054<SeP>6349<SeP>9029<SeP>7871<SeP>8727<SeP>9040<SeP>5817<SeP>6232<SeP>7020<SeP>7037<SeP>2198<SeP>6110<SeP>5172<SeP>6707<SeP>6746<SeP>8134<SeP>2404<SeP>6257<SeP>6397<SeP>6110<SeP>5316<SeP>6578<SeP>4562<SeP>6552<SeP>5815<SeP>5606<SeP>5454<SeP>5589<SeP>21821<SeP>10838<SeP>35425<SeP>7097<SeP>8369<SeP>5901<SeP>6234<SeP>12451<SeP>6212<SeP>6227<SeP>3803<SeP>4755<SeP>6122<SeP>5117<SeP>8590<SeP>5317<SeP>6504<SeP>5002<SeP>4627<SeP>8387<SeP>8285<SeP>7591<SeP>6992<SeP>3846<SeP>8261<SeP>10325<SeP>7286<SeP>2735<SeP>5059<SeP>7446<SeP>7549<SeP>5703<SeP>7628<SeP>8370<SeP>2525<SeP>2632<SeP>1007<SeP>1624<SeP>2409<SeP>1913<SeP>825<SeP>1307<SeP>830<SeP>1463<SeP>1299<SeP>1091<SeP>1144<SeP>840<SeP>1056<SeP>928<SeP>1313<SeP>1471<SeP>1032<SeP>1650<SeP>2026<SeP>1453<SeP>9876<SeP>7076<SeP>10052<SeP>8674<SeP>6062<SeP>11207<SeP>5531<SeP>10217<SeP>9081<SeP>9835<SeP>11462<SeP>8134<SeP>13034<SeP>12183<SeP>6631<SeP>12434<SeP>5042<SeP>5775<SeP>6258<SeP>23696<SeP>7776<SeP>7764<SeP>8364<SeP>16660<SeP>9662<SeP>7446<SeP>4521<SeP>7194<SeP>9040<SeP>24312<SeP>7273<SeP>9554<SeP>10638<SeP>4735<SeP>6088<SeP>5918<SeP>16231<SeP>4226<SeP>13061<SeP>8011<SeP>6340<SeP>8495<SeP>7591<SeP>2997<SeP>6038<SeP>5690<SeP>7076<SeP>6421<SeP>6103<SeP>7267<SeP>18643<SeP>6711<SeP>8858<SeP>5063<SeP>7577<SeP>8164<SeP>9869<SeP>5591<SeP>2505<SeP>7376<SeP>3481<SeP>4404<SeP>3939<SeP>1499<SeP>616<SeP>639<SeP>201<SeP>541<SeP>582<SeP>797<SeP>335<SeP>931<SeP>1071<SeP>1387<SeP>2977<SeP>22890<SeP>599<SeP>4472<SeP>3205<SeP>2499<SeP>7877<SeP>2738<SeP>4114<SeP>3051<SeP>3218<SeP>2961<SeP>3242<SeP>4065<SeP>2483<SeP>2301<SeP>3432<SeP>1867<SeP>2045<SeP>1892<SeP>1326<SeP>1395<SeP>1412<SeP>822<SeP>1904<SeP>2036<SeP>25888<SeP>1795<SeP>4062<SeP>3308<SeP>2430<SeP>3583<SeP>2757<SeP>1749<SeP>3666<SeP>1981<SeP>4118<SeP>2011<SeP>2977<SeP>3911<SeP>4466<SeP>4870<SeP>5201<SeP>4497<SeP>2401<SeP>2746<SeP>4569<SeP>3510<SeP>10046<SeP>4738<SeP>3717<SeP>2528<SeP>3047<SeP>3686<SeP>4300<SeP>3119<SeP>3350<SeP>2258<SeP>5026<SeP>4771<SeP>2945<SeP>6149<SeP>4147<SeP>6133<SeP>4538<SeP>5380<SeP>5009<SeP>22112<SeP>5617<SeP>10666<SeP>1740<SeP>3229<SeP>3872<SeP>3637<SeP>5298<SeP>3304<SeP>4855<SeP>4494<SeP>4495<SeP>3398<SeP>3889<SeP>2204<SeP>1340<SeP>2219<SeP>3534<SeP>2211<SeP>2888<SeP>3723<SeP>4410<SeP>3504<SeP>3294<SeP>4258<SeP>3411<SeP>3112<SeP>4020<SeP>8340<SeP>6067<SeP>5314<SeP>4852<SeP>4903<SeP>3811<SeP>3633<SeP>4640<SeP>4935<SeP>5411<SeP>4747<SeP>4740<SeP>1994<SeP>741<SeP>1589<SeP>1757<SeP>1115<SeP>1074<SeP>2082<SeP>1089<SeP>1629<SeP>3660<SeP>5042<SeP>6441<SeP>33972<SeP>4773<SeP>4272<SeP>21861<SeP>7494<SeP>5109<SeP>6072<SeP>4472<SeP>24261<SeP>4765<SeP>5117<SeP>4676<SeP>5025<SeP>6221<SeP>29615<SeP>4957<SeP>3989<SeP>3726<SeP>3693<SeP>5715<SeP>4949<SeP>2925<SeP>3140<SeP>4374<SeP>5205<SeP>5258<SeP>17909<SeP>4903<SeP>5922<SeP>5652<SeP>2537<SeP>2786<SeP>3552<SeP>4782<SeP>4040<SeP>3804<SeP>2675<SeP>3682<SeP>2505<SeP>4361<SeP>4490<SeP>8185<SeP>10501<SeP>7958<SeP>8618<SeP>9119<SeP>6819<SeP>5756<SeP>5106<SeP>4126<SeP>24267<SeP>4874<SeP>3115<SeP>4599<SeP>3198<SeP>11338<SeP>5488<SeP>3645<SeP>4998<SeP>3969<SeP>2877<SeP>9223";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:37:21<SeP>2023-07-28 21:14:42<SeP>2023-07-30 07:52:03<SeP>2023-07-31 18:29:24<SeP>2023-08-02 05:06:45<SeP>2023-08-03 15:44:06<SeP>2023-08-05 02:21:27<SeP>2023-08-06 12:58:48<SeP>2023-08-07 23:36:09<SeP>2023-08-09 10:13:30<SeP>2023-08-10 20:50:51<SeP>2023-08-12 07:28:12<SeP>2023-08-13 18:05:33<SeP>2023-08-15 04:42:54<SeP>2023-08-16 15:20:15<SeP>2023-08-18 01:57:36<SeP>2023-08-19 12:34:57<SeP>2023-08-20 23:12:18<SeP>2023-08-22 09:49:39<SeP>2023-08-23 20:27:00<SeP>2023-08-25 07:04:21<SeP>2023-08-26 17:41:42<SeP>2023-08-28 04:19:03<SeP>2023-08-29 14:56:24<SeP>2023-08-31 01:33:45<SeP>2023-09-01 12:11:06<SeP>2023-09-02 22:48:27<SeP>2023-09-04 09:25:48<SeP>2023-09-05 20:03:09<SeP>2023-09-07 06:40:30<SeP>2023-09-08 17:17:51<SeP>2023-09-10 03:55:12<SeP>2023-09-11 14:32:33<SeP>2023-09-13 01:09:54<SeP>2023-09-14 11:47:15<SeP>2023-09-15 22:24:36<SeP>2023-09-17 09:01:57<SeP>2023-09-18 19:39:18<SeP>2023-09-20 06:16:39<SeP>2023-09-21 16:54:00<SeP>2023-09-23 03:31:21<SeP>2023-09-24 14:08:42<SeP>2023-09-26 00:46:03<SeP>2023-09-27 11:23:24<SeP>2023-09-28 22:00:45<SeP>2023-09-30 08:38:06<SeP>2023-10-01 19:15:27<SeP>2023-10-03 05:52:48<SeP>2023-10-04 16:30:09<SeP>2023-10-06 03:07:30<SeP>2023-10-07 13:44:51<SeP>2023-10-09 00:22:12<SeP>2023-10-10 10:59:33<SeP>2023-10-11 21:36:54<SeP>2023-10-13 08:14:15<SeP>2023-10-14 18:51:36<SeP>2023-10-16 05:28:57<SeP>2023-10-17 16:06:18<SeP>2023-10-19 02:43:39<SeP>2023-10-20 13:21:00<SeP>2023-10-21 23:58:21<SeP>2023-10-23 10:35:42<SeP>2023-10-24 21:13:03<SeP>2023-10-26 07:50:24<SeP>2023-10-27 18:27:45<SeP>2023-10-29 05:05:06<SeP>2023-10-30 15:42:27<SeP>2023-11-01 02:19:48<SeP>2023-11-02 12:57:09<SeP>2023-11-03 23:34:30<SeP>2023-11-05 09:11:51<SeP>2023-11-06 19:49:12<SeP>2023-11-08 06:26:33<SeP>2023-11-09 17:03:54<SeP>2023-11-11 03:41:15<SeP>2023-11-12 14:18:36<SeP>2023-11-14 00:55:57<SeP>2023-11-15 11:33:18<SeP>2023-11-16 22:10:39<SeP>2023-11-18 08:48:00<SeP>2023-11-19 19:25:21<SeP>2023-11-21 06:02:42<SeP>2023-11-22 16:40:03<SeP>2023-11-24 03:17:24<SeP>2023-11-25 13:54:45<SeP>2023-11-27 00:32:06<SeP>2023-11-28 11:09:27<SeP>2023-11-29 21:46:48<SeP>2023-12-01 08:24:09<SeP>2023-12-02 19:01:30<SeP>2023-12-04 05:38:51<SeP>2023-12-05 16:16:12<SeP>2023-12-07 02:53:33<SeP>2023-12-08 13:30:54<SeP>2023-12-10 00:08:15<SeP>2023-12-11 10:45:36<SeP>2023-12-12 21:22:57<SeP>2023-12-14 08:00:18<SeP>2023-12-15 18:37:39<SeP>2023-12-17 05:15:00<SeP>2023-12-18 15:52:21<SeP>2023-12-20 02:29:42<SeP>2023-12-21 13:07:03<SeP>2023-12-22 23:44:24<SeP>2023-12-24 10:21:45<SeP>2023-12-25 20:59:06<SeP>2023-12-27 07:36:27<SeP>2023-12-28 18:13:48<SeP>2023-12-30 04:51:09<SeP>2023-12-31 15:28:30<SeP>2024-01-02 02:05:51<SeP>2024-01-03 12:43:12<SeP>2024-01-04 23:20:33<SeP>2024-01-06 09:57:54<SeP>2024-01-07 20:35:15<SeP>2024-01-09 07:12:36<SeP>2024-01-10 17:49:57<SeP>2024-01-12 04:27:18<SeP>2024-01-13 15:04:39<SeP>2024-01-15 01:42:00<SeP>2024-01-16 12:19:21<SeP>2024-01-17 22:56:42<SeP>2024-01-19 09:34:03<SeP>2024-01-20 20:11:24<SeP>2024-01-22 06:48:45<SeP>2024-01-23 17:26:06<SeP>2024-01-25 04:03:27<SeP>2024-01-26 14:40:48<SeP>2024-01-28 01:18:09<SeP>2024-01-29 11:55:30<SeP>2024-01-30 22:32:51<SeP>2024-02-01 09:10:12<SeP>2024-02-02 19:47:33<SeP>2024-02-04 06:24:54<SeP>2024-02-05 17:02:15<SeP>2024-02-07 03:39:36<SeP>2024-02-08 14:16:57<SeP>2024-02-10 00:54:18<SeP>2024-02-11 11:31:39<SeP>2024-02-12 22:09:00<SeP>2024-02-14 08:46:21<SeP>2024-02-15 19:23:42<SeP>2024-02-17 06:01:03<SeP>2024-02-18 16:38:24<SeP>2024-02-20 03:15:45<SeP>2024-02-21 13:53:06<SeP>2024-02-23 00:30:27<SeP>2024-02-24 11:07:48<SeP>2024-02-25 21:45:09<SeP>2024-02-27 08:22:30<SeP>2024-02-28 18:59:51<SeP>2024-03-01 05:37:12<SeP>2024-03-02 16:14:33<SeP>2024-03-04 02:51:54<SeP>2024-03-05 13:29:15<SeP>2024-03-07 00:06:36<SeP>2024-03-08 10:43:57<SeP>2024-03-09 21:21:18<SeP>2024-03-11 08:58:39<SeP>2024-03-12 19:36:00<SeP>2024-03-14 06:13:21<SeP>2024-03-15 16:50:42<SeP>2024-03-17 03:28:03<SeP>2024-03-18 14:05:24<SeP>2024-03-20 00:42:45<SeP>2024-03-21 11:20:06<SeP>2024-03-22 21:57:27<SeP>2024-03-24 08:34:48<SeP>2024-03-25 19:12:09<SeP>2024-03-27 05:49:30<SeP>2024-03-28 16:26:51<SeP>2024-03-30 03:04:12<SeP>2024-03-31 13:41:33<SeP>2024-04-02 00:18:54<SeP>2024-04-03 10:56:15<SeP>2024-04-04 21:33:36<SeP>2024-04-06 08:10:57<SeP>2024-04-07 18:48:18<SeP>2024-04-09 05:25:39<SeP>2024-04-10 16:03:00<SeP>2024-04-12 02:40:21<SeP>2024-04-13 13:17:42<SeP>2024-04-14 23:55:03<SeP>2024-04-16 10:32:24<SeP>2024-04-17 21:09:45<SeP>2024-04-19 07:47:06<SeP>2024-04-20 18:24:27<SeP>2024-04-22 05:01:48<SeP>2024-04-23 15:39:09<SeP>2024-04-25 02:16:30<SeP>2024-04-26 12:53:51<SeP>2024-04-27 23:31:12<SeP>2024-04-29 10:08:33<SeP>2024-04-30 20:45:54<SeP>2024-05-02 07:23:15<SeP>2024-05-03 18:00:36<SeP>2024-05-05 04:37:57<SeP>2024-05-06 15:15:18<SeP>2024-05-08 01:52:39<SeP>2024-05-09 12:30:00<SeP>2024-05-10 23:07:21<SeP>2024-05-12 09:44:42<SeP>2024-05-13 20:22:03<SeP>2024-05-15 06:59:24<SeP>2024-05-16 17:36:45<SeP>2024-05-18 04:14:06<SeP>2024-05-19 14:51:27<SeP>2024-05-21 01:28:48<SeP>2024-05-22 12:06:09<SeP>2024-05-23 22:43:30<SeP>2024-05-25 09:20:51<SeP>2024-05-26 19:58:12<SeP>2024-05-28 06:35:33<SeP>2024-05-29 17:12:54<SeP>2024-05-31 03:50:15<SeP>2024-06-01 14:27:36<SeP>2024-06-03 01:04:57<SeP>2024-06-04 11:42:18<SeP>2024-06-05 22:19:39<SeP>2024-06-07 08:57:00<SeP>2024-06-08 19:34:21<SeP>2024-06-10 06:11:42<SeP>2024-06-11 16:49:03<SeP>2024-06-13 03:26:24<SeP>2024-06-14 14:03:45<SeP>2024-06-16 00:41:06<SeP>2024-06-17 11:18:27<SeP>2024-06-18 21:55:48<SeP>2024-06-20 08:33:09<SeP>2024-06-21 19:10:30<SeP>2024-06-23 05:47:51<SeP>2024-06-24 16:25:12<SeP>2024-06-26 03:02:33<SeP>2024-06-27 13:39:54<SeP>2024-06-29 00:17:15<SeP>2024-06-30 10:54:36<SeP>2024-07-01 21:31:57<SeP>2024-07-03 08:09:18<SeP>2024-07-04 18:46:39<SeP>2024-07-06 05:24:00<SeP>2024-07-07 16:01:21<SeP>2024-07-09 02:38:42<SeP>2024-07-10 13:16:03<SeP>2024-07-11 23:53:24<SeP>2024-07-13 10:30:45<SeP>2024-07-14 21:08:06<SeP>2024-07-16 07:45:27<SeP>2024-07-17 18:22:48<SeP>2024-07-19 05:00:09<SeP>2024-07-20 15:37:30<SeP>2024-07-22 02:14:51<SeP>2024-07-23 12:52:12<SeP>2024-07-24 23:29:33<SeP>2024-07-26 10:06:54<SeP>2024-07-27 20:44:15<SeP>2024-07-29 07:21:36<SeP>2024-07-30 17:58:57<SeP>2024-08-01 04:36:18<SeP>2024-08-02 15:13:39<SeP>2024-08-04 01:51:00<SeP>2024-08-05 12:28:21<SeP>2024-08-06 23:05:42<SeP>2024-08-08 09:43:03<SeP>2024-08-09 20:20:24<SeP>2024-08-11 06:57:45<SeP>2024-08-12 17:35:06<SeP>2024-08-14 04:12:27<SeP>2024-08-15 14:49:48<SeP>2024-08-17 01:27:09<SeP>2024-08-18 12:04:30<SeP>2024-08-19 22:41:51<SeP>2024-08-21 09:19:12<SeP>2024-08-22 19:56:33<SeP>2024-08-24 06:33:54<SeP>2024-08-25 17:11:15<SeP>2024-08-27 03:48:36<SeP>2024-08-28 14:25:57<SeP>2024-08-30 01:03:18<SeP>2024-08-31 11:40:39<SeP>2024-09-01 22:18:00<SeP>2024-09-03 08:55:21<SeP>2024-09-04 19:32:42<SeP>2024-09-06 06:10:03<SeP>2024-09-07 16:47:24<SeP>2024-09-09 03:24:45<SeP>2024-09-10 14:02:06<SeP>2024-09-12 00:39:27<SeP>2024-09-13 11:16:48<SeP>2024-09-14 21:54:09<SeP>2024-09-16 08:31:30<SeP>2024-09-17 19:08:51<SeP>2024-09-19 05:46:12<SeP>2024-09-20 16:23:33<SeP>2024-09-22 03:00:54<SeP>2024-09-23 13:38:15<SeP>2024-09-25 00:15:36<SeP>2024-09-26 10:52:57<SeP>2024-09-27 21:30:18<SeP>2024-09-29 08:07:39<SeP>2024-09-30 18:45:00<SeP>2024-10-02 05:22:21<SeP>2024-10-03 15:59:42<SeP>2024-10-05 02:37:03<SeP>2024-10-06 13:14:24<SeP>2024-10-07 23:51:45<SeP>2024-10-09 10:29:06<SeP>2024-10-10 21:06:27<SeP>2024-10-12 07:43:48<SeP>2024-10-13 18:21:09<SeP>2024-10-15 04:58:30<SeP>2024-10-16 15:35:51<SeP>2024-10-18 02:13:12<SeP>2024-10-19 12:50:33<SeP>2024-10-20 23:27:54<SeP>2024-10-22 10:05:15<SeP>2024-10-23 20:42:36<SeP>2024-10-25 07:19:57<SeP>2024-10-26 17:57:18<SeP>2024-10-28 04:34:39<SeP>2024-10-29 15:12:00<SeP>2024-10-31 01:49:21<SeP>2024-11-01 12:26:42<SeP>2024-11-02 23:04:03<SeP>2024-11-04 08:41:24<SeP>2024-11-05 19:18:45<SeP>2024-11-07 05:56:06<SeP>2024-11-08 16:33:27<SeP>2024-11-10 03:10:48<SeP>2024-11-11 13:48:09<SeP>2024-11-13 00:25:30<SeP>2024-11-14 11:02:51<SeP>2024-11-15 21:40:12<SeP>2024-11-17 08:17:33<SeP>2024-11-18 18:54:54<SeP>2024-11-20 05:32:15<SeP>2024-11-21 16:09:36<SeP>2024-11-23 02:46:57<SeP>2024-11-24 13:24:18<SeP>2024-11-26 00:01:39<SeP>2024-11-27 10:39:00<SeP>2024-11-28 21:16:21<SeP>2024-11-30 07:53:42<SeP>2024-12-01 18:31:03<SeP>2024-12-03 05:08:24<SeP>2024-12-04 15:45:45<SeP>2024-12-06 02:23:06<SeP>2024-12-07 13:00:27<SeP>2024-12-08 23:37:48<SeP>2024-12-10 10:15:09<SeP>2024-12-11 20:52:30<SeP>2024-12-13 07:29:51<SeP>2024-12-14 18:07:12<SeP>2024-12-16 04:44:33<SeP>2024-12-17 15:21:54<SeP>2024-12-19 01:59:15<SeP>2024-12-20 12:36:36<SeP>2024-12-21 23:13:57<SeP>2024-12-23 09:51:18<SeP>2024-12-24 20:28:39<SeP>2024-12-26 07:06:00<SeP>2024-12-27 17:43:21<SeP>2024-12-29 04:20:42<SeP>2024-12-30 14:58:03<SeP>2025-01-01 01:35:24<SeP>2025-01-02 12:12:45<SeP>2025-01-03 22:50:06<SeP>2025-01-05 09:27:27<SeP>2025-01-06 20:04:48<SeP>2025-01-08 06:42:09<SeP>2025-01-09 17:19:30<SeP>2025-01-11 03:56:51<SeP>2025-01-12 14:34:12<SeP>2025-01-14 01:11:33<SeP>2025-01-15 11:48:54<SeP>2025-01-16 22:26:15<SeP>2025-01-18 09:03:36<SeP>2025-01-19 19:40:57<SeP>2025-01-21 06:18:18<SeP>2025-01-22 16:55:39<SeP>2025-01-24 03:33:00<SeP>2025-01-25 14:10:21<SeP>2025-01-27 00:47:42<SeP>2025-01-28 11:25:03<SeP>2025-01-29 22:02:24<SeP>2025-01-31 08:39:45<SeP>2025-02-01 19:17:06<SeP>2025-02-03 05:54:27<SeP>2025-02-04 16:31:48<SeP>2025-02-06 03:09:09<SeP>2025-02-07 13:46:30<SeP>2025-02-09 00:23:51<SeP>2025-02-10 11:01:12<SeP>2025-02-11 21:38:33<SeP>2025-02-13 08:15:54<SeP>2025-02-14 18:53:15<SeP>2025-02-16 05:30:36<SeP>2025-02-17 16:07:57<SeP>2025-02-19 02:45:18<SeP>2025-02-20 13:22:39";
  const itemLabel       = "Scans";
  const itemData        = "759<SeP>1458<SeP>1376<SeP>1425<SeP>1261<SeP>1660<SeP>981<SeP>978<SeP>1100<SeP>3344<SeP>1492<SeP>2816<SeP>1867<SeP>2484<SeP>749<SeP>828<SeP>1415<SeP>1770<SeP>2160<SeP>1531<SeP>1586<SeP>929<SeP>846<SeP>1440<SeP>817<SeP>949<SeP>728<SeP>902<SeP>3619<SeP>956<SeP>827<SeP>1364<SeP>1223<SeP>833<SeP>2172<SeP>2028<SeP>2900<SeP>1737<SeP>1560<SeP>1598<SeP>1291<SeP>1620<SeP>1914<SeP>2041<SeP>1603<SeP>1686<SeP>1577<SeP>1628<SeP>1677<SeP>1743<SeP>1684<SeP>1788<SeP>1772<SeP>1583<SeP>3172<SeP>1343<SeP>1726<SeP>2009<SeP>1879<SeP>2108<SeP>1844<SeP>3339<SeP>1267<SeP>1575<SeP>1493<SeP>1299<SeP>1875<SeP>1662<SeP>1216<SeP>1373<SeP>1381<SeP>1141<SeP>2275<SeP>1190<SeP>1146<SeP>1309<SeP>4694<SeP>4663<SeP>1365<SeP>1306<SeP>1545<SeP>2072<SeP>1117<SeP>3466<SeP>4415<SeP>1574<SeP>1492<SeP>953<SeP>3260<SeP>1209<SeP>1063<SeP>1038<SeP>1084<SeP>1013<SeP>3064<SeP>920<SeP>1061<SeP>2103<SeP>4392<SeP>4653<SeP>978<SeP>926<SeP>955<SeP>966<SeP>926<SeP>928<SeP>1091<SeP>2129<SeP>3475<SeP>1699<SeP>1215<SeP>1366<SeP>560<SeP>1409<SeP>1290<SeP>1180<SeP>853<SeP>1962<SeP>1403<SeP>1243<SeP>1025<SeP>943<SeP>1126<SeP>761<SeP>820<SeP>833<SeP>817<SeP>863<SeP>1075<SeP>776<SeP>792<SeP>876<SeP>943<SeP>901<SeP>563<SeP>889<SeP>853<SeP>805<SeP>916<SeP>821<SeP>805<SeP>740<SeP>834<SeP>1068<SeP>760<SeP>838<SeP>959<SeP>857<SeP>1130<SeP>953<SeP>791<SeP>486<SeP>919<SeP>817<SeP>1264<SeP>877<SeP>934<SeP>1202<SeP>1299<SeP>871<SeP>916<SeP>887<SeP>976<SeP>689<SeP>1017<SeP>1027<SeP>949<SeP>846<SeP>894<SeP>1058<SeP>997<SeP>1000<SeP>1002<SeP>1147<SeP>887<SeP>911<SeP>1125<SeP>2053<SeP>1289<SeP>1001<SeP>1006<SeP>1138<SeP>966<SeP>993<SeP>855<SeP>606<SeP>916<SeP>1158<SeP>905<SeP>920<SeP>1021<SeP>1335<SeP>1024<SeP>1146<SeP>1274<SeP>1198<SeP>1253<SeP>1306<SeP>1239<SeP>1575<SeP>1840<SeP>1510<SeP>1201<SeP>731<SeP>938<SeP>1042<SeP>1111<SeP>488<SeP>777<SeP>830<SeP>984<SeP>1422<SeP>5811<SeP>2559<SeP>1949<SeP>1215<SeP>943<SeP>919<SeP>943<SeP>942<SeP>958<SeP>1063<SeP>1056<SeP>1002<SeP>1376<SeP>2046<SeP>991<SeP>1227<SeP>1230<SeP>1246<SeP>1117<SeP>1044<SeP>943<SeP>1095<SeP>1100<SeP>965<SeP>1102<SeP>1001<SeP>1186<SeP>859<SeP>1022<SeP>1363<SeP>1140<SeP>995<SeP>1323<SeP>1261<SeP>1167<SeP>1525<SeP>1200<SeP>1081<SeP>1180<SeP>1151<SeP>1941<SeP>1263<SeP>1819<SeP>1714<SeP>1369<SeP>1991<SeP>1633<SeP>1172<SeP>1164<SeP>1134<SeP>1174<SeP>1668<SeP>1206<SeP>1198<SeP>1463<SeP>1843<SeP>1279<SeP>1463<SeP>1387<SeP>1374<SeP>1138<SeP>1106<SeP>1289<SeP>1110<SeP>1206<SeP>1273<SeP>1261<SeP>1071<SeP>2029<SeP>1284<SeP>1253<SeP>1666<SeP>1395<SeP>1275<SeP>977<SeP>968<SeP>1006<SeP>1002<SeP>799<SeP>990<SeP>1738<SeP>1157<SeP>1057<SeP>1114<SeP>961<SeP>768<SeP>1048<SeP>1377<SeP>840<SeP>917<SeP>873<SeP>1277<SeP>1495<SeP>1506<SeP>1159<SeP>1095<SeP>932<SeP>1594<SeP>1274<SeP>1058<SeP>1122<SeP>1012<SeP>1554<SeP>1027<SeP>885<SeP>1198<SeP>1066<SeP>908<SeP>884<SeP>1025<SeP>1404<SeP>1474<SeP>1437<SeP>1402<SeP>1381<SeP>927<SeP>1118<SeP>1261<SeP>1044<SeP>983<SeP>1207<SeP>1008<SeP>991<SeP>1266<SeP>1604<SeP>1269<SeP>1553<SeP>1353<SeP>1298<SeP>1522<SeP>1412<SeP>1509<SeP>1301<SeP>1445<SeP>1209<SeP>1800<SeP>1243<SeP>1467<SeP>1604<SeP>1301<SeP>1433<SeP>1320<SeP>1133<SeP>1300<SeP>1386<SeP>1661<SeP>1338<SeP>1329<SeP>1141<SeP>1468<SeP>1123<SeP>1396<SeP>1132<SeP>1652<SeP>1873<SeP>1325<SeP>924<SeP>981<SeP>1758<SeP>1466<SeP>1268<SeP>1383<SeP>1039<SeP>1287<SeP>1268<SeP>1529<SeP>1289<SeP>1462<SeP>1623<SeP>1364<SeP>1504<SeP>1722<SeP>1258<SeP>1534<SeP>1342<SeP>1779<SeP>1575<SeP>999<SeP>1048<SeP>2036<SeP>1891<SeP>1633<SeP>1739<SeP>1692<SeP>1540<SeP>1506<SeP>1665<SeP>1525";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:37:21<SeP>2023-07-28 21:14:42<SeP>2023-07-30 07:52:03<SeP>2023-07-31 18:29:24<SeP>2023-08-02 05:06:45<SeP>2023-08-03 15:44:06<SeP>2023-08-05 02:21:27<SeP>2023-08-06 12:58:48<SeP>2023-08-07 23:36:09<SeP>2023-08-09 10:13:30<SeP>2023-08-10 20:50:51<SeP>2023-08-12 07:28:12<SeP>2023-08-13 18:05:33<SeP>2023-08-15 04:42:54<SeP>2023-08-16 15:20:15<SeP>2023-08-18 01:57:36<SeP>2023-08-19 12:34:57<SeP>2023-08-20 23:12:18<SeP>2023-08-22 09:49:39<SeP>2023-08-23 20:27:00<SeP>2023-08-25 07:04:21<SeP>2023-08-26 17:41:42<SeP>2023-08-28 04:19:03<SeP>2023-08-29 14:56:24<SeP>2023-08-31 01:33:45<SeP>2023-09-01 12:11:06<SeP>2023-09-02 22:48:27<SeP>2023-09-04 09:25:48<SeP>2023-09-05 20:03:09<SeP>2023-09-07 06:40:30<SeP>2023-09-08 17:17:51<SeP>2023-09-10 03:55:12<SeP>2023-09-11 14:32:33<SeP>2023-09-13 01:09:54<SeP>2023-09-14 11:47:15<SeP>2023-09-15 22:24:36<SeP>2023-09-17 09:01:57<SeP>2023-09-18 19:39:18<SeP>2023-09-20 06:16:39<SeP>2023-09-21 16:54:00<SeP>2023-09-23 03:31:21<SeP>2023-09-24 14:08:42<SeP>2023-09-26 00:46:03<SeP>2023-09-27 11:23:24<SeP>2023-09-28 22:00:45<SeP>2023-09-30 08:38:06<SeP>2023-10-01 19:15:27<SeP>2023-10-03 05:52:48<SeP>2023-10-04 16:30:09<SeP>2023-10-06 03:07:30<SeP>2023-10-07 13:44:51<SeP>2023-10-09 00:22:12<SeP>2023-10-10 10:59:33<SeP>2023-10-11 21:36:54<SeP>2023-10-13 08:14:15<SeP>2023-10-14 18:51:36<SeP>2023-10-16 05:28:57<SeP>2023-10-17 16:06:18<SeP>2023-10-19 02:43:39<SeP>2023-10-20 13:21:00<SeP>2023-10-21 23:58:21<SeP>2023-10-23 10:35:42<SeP>2023-10-24 21:13:03<SeP>2023-10-26 07:50:24<SeP>2023-10-27 18:27:45<SeP>2023-10-29 05:05:06<SeP>2023-10-30 15:42:27<SeP>2023-11-01 02:19:48<SeP>2023-11-02 12:57:09<SeP>2023-11-03 23:34:30<SeP>2023-11-05 09:11:51<SeP>2023-11-06 19:49:12<SeP>2023-11-08 06:26:33<SeP>2023-11-09 17:03:54<SeP>2023-11-11 03:41:15<SeP>2023-11-12 14:18:36<SeP>2023-11-14 00:55:57<SeP>2023-11-15 11:33:18<SeP>2023-11-16 22:10:39<SeP>2023-11-18 08:48:00<SeP>2023-11-19 19:25:21<SeP>2023-11-21 06:02:42<SeP>2023-11-22 16:40:03<SeP>2023-11-24 03:17:24<SeP>2023-11-25 13:54:45<SeP>2023-11-27 00:32:06<SeP>2023-11-28 11:09:27<SeP>2023-11-29 21:46:48<SeP>2023-12-01 08:24:09<SeP>2023-12-02 19:01:30<SeP>2023-12-04 05:38:51<SeP>2023-12-05 16:16:12<SeP>2023-12-07 02:53:33<SeP>2023-12-08 13:30:54<SeP>2023-12-10 00:08:15<SeP>2023-12-11 10:45:36<SeP>2023-12-12 21:22:57<SeP>2023-12-14 08:00:18<SeP>2023-12-15 18:37:39<SeP>2023-12-17 05:15:00<SeP>2023-12-18 15:52:21<SeP>2023-12-20 02:29:42<SeP>2023-12-21 13:07:03<SeP>2023-12-22 23:44:24<SeP>2023-12-24 10:21:45<SeP>2023-12-25 20:59:06<SeP>2023-12-27 07:36:27<SeP>2023-12-28 18:13:48<SeP>2023-12-30 04:51:09<SeP>2023-12-31 15:28:30<SeP>2024-01-02 02:05:51<SeP>2024-01-03 12:43:12<SeP>2024-01-04 23:20:33<SeP>2024-01-06 09:57:54<SeP>2024-01-07 20:35:15<SeP>2024-01-09 07:12:36<SeP>2024-01-10 17:49:57<SeP>2024-01-12 04:27:18<SeP>2024-01-13 15:04:39<SeP>2024-01-15 01:42:00<SeP>2024-01-16 12:19:21<SeP>2024-01-17 22:56:42<SeP>2024-01-19 09:34:03<SeP>2024-01-20 20:11:24<SeP>2024-01-22 06:48:45<SeP>2024-01-23 17:26:06<SeP>2024-01-25 04:03:27<SeP>2024-01-26 14:40:48<SeP>2024-01-28 01:18:09<SeP>2024-01-29 11:55:30<SeP>2024-01-30 22:32:51<SeP>2024-02-01 09:10:12<SeP>2024-02-02 19:47:33<SeP>2024-02-04 06:24:54<SeP>2024-02-05 17:02:15<SeP>2024-02-07 03:39:36<SeP>2024-02-08 14:16:57<SeP>2024-02-10 00:54:18<SeP>2024-02-11 11:31:39<SeP>2024-02-12 22:09:00<SeP>2024-02-14 08:46:21<SeP>2024-02-15 19:23:42<SeP>2024-02-17 06:01:03<SeP>2024-02-18 16:38:24<SeP>2024-02-20 03:15:45<SeP>2024-02-21 13:53:06<SeP>2024-02-23 00:30:27<SeP>2024-02-24 11:07:48<SeP>2024-02-25 21:45:09<SeP>2024-02-27 08:22:30<SeP>2024-02-28 18:59:51<SeP>2024-03-01 05:37:12<SeP>2024-03-02 16:14:33<SeP>2024-03-04 02:51:54<SeP>2024-03-05 13:29:15<SeP>2024-03-07 00:06:36<SeP>2024-03-08 10:43:57<SeP>2024-03-09 21:21:18<SeP>2024-03-11 08:58:39<SeP>2024-03-12 19:36:00<SeP>2024-03-14 06:13:21<SeP>2024-03-15 16:50:42<SeP>2024-03-17 03:28:03<SeP>2024-03-18 14:05:24<SeP>2024-03-20 00:42:45<SeP>2024-03-21 11:20:06<SeP>2024-03-22 21:57:27<SeP>2024-03-24 08:34:48<SeP>2024-03-25 19:12:09<SeP>2024-03-27 05:49:30<SeP>2024-03-28 16:26:51<SeP>2024-03-30 03:04:12<SeP>2024-03-31 13:41:33<SeP>2024-04-02 00:18:54<SeP>2024-04-03 10:56:15<SeP>2024-04-04 21:33:36<SeP>2024-04-06 08:10:57<SeP>2024-04-07 18:48:18<SeP>2024-04-09 05:25:39<SeP>2024-04-10 16:03:00<SeP>2024-04-12 02:40:21<SeP>2024-04-13 13:17:42<SeP>2024-04-14 23:55:03<SeP>2024-04-16 10:32:24<SeP>2024-04-17 21:09:45<SeP>2024-04-19 07:47:06<SeP>2024-04-20 18:24:27<SeP>2024-04-22 05:01:48<SeP>2024-04-23 15:39:09<SeP>2024-04-25 02:16:30<SeP>2024-04-26 12:53:51<SeP>2024-04-27 23:31:12<SeP>2024-04-29 10:08:33<SeP>2024-04-30 20:45:54<SeP>2024-05-02 07:23:15<SeP>2024-05-03 18:00:36<SeP>2024-05-05 04:37:57<SeP>2024-05-06 15:15:18<SeP>2024-05-08 01:52:39<SeP>2024-05-09 12:30:00<SeP>2024-05-10 23:07:21<SeP>2024-05-12 09:44:42<SeP>2024-05-13 20:22:03<SeP>2024-05-15 06:59:24<SeP>2024-05-16 17:36:45<SeP>2024-05-18 04:14:06<SeP>2024-05-19 14:51:27<SeP>2024-05-21 01:28:48<SeP>2024-05-22 12:06:09<SeP>2024-05-23 22:43:30<SeP>2024-05-25 09:20:51<SeP>2024-05-26 19:58:12<SeP>2024-05-28 06:35:33<SeP>2024-05-29 17:12:54<SeP>2024-05-31 03:50:15<SeP>2024-06-01 14:27:36<SeP>2024-06-03 01:04:57<SeP>2024-06-04 11:42:18<SeP>2024-06-05 22:19:39<SeP>2024-06-07 08:57:00<SeP>2024-06-08 19:34:21<SeP>2024-06-10 06:11:42<SeP>2024-06-11 16:49:03<SeP>2024-06-13 03:26:24<SeP>2024-06-14 14:03:45<SeP>2024-06-16 00:41:06<SeP>2024-06-17 11:18:27<SeP>2024-06-18 21:55:48<SeP>2024-06-20 08:33:09<SeP>2024-06-21 19:10:30<SeP>2024-06-23 05:47:51<SeP>2024-06-24 16:25:12<SeP>2024-06-26 03:02:33<SeP>2024-06-27 13:39:54<SeP>2024-06-29 00:17:15<SeP>2024-06-30 10:54:36<SeP>2024-07-01 21:31:57<SeP>2024-07-03 08:09:18<SeP>2024-07-04 18:46:39<SeP>2024-07-06 05:24:00<SeP>2024-07-07 16:01:21<SeP>2024-07-09 02:38:42<SeP>2024-07-10 13:16:03<SeP>2024-07-11 23:53:24<SeP>2024-07-13 10:30:45<SeP>2024-07-14 21:08:06<SeP>2024-07-16 07:45:27<SeP>2024-07-17 18:22:48<SeP>2024-07-19 05:00:09<SeP>2024-07-20 15:37:30<SeP>2024-07-22 02:14:51<SeP>2024-07-23 12:52:12<SeP>2024-07-24 23:29:33<SeP>2024-07-26 10:06:54<SeP>2024-07-27 20:44:15<SeP>2024-07-29 07:21:36<SeP>2024-07-30 17:58:57<SeP>2024-08-01 04:36:18<SeP>2024-08-02 15:13:39<SeP>2024-08-04 01:51:00<SeP>2024-08-05 12:28:21<SeP>2024-08-06 23:05:42<SeP>2024-08-08 09:43:03<SeP>2024-08-09 20:20:24<SeP>2024-08-11 06:57:45<SeP>2024-08-12 17:35:06<SeP>2024-08-14 04:12:27<SeP>2024-08-15 14:49:48<SeP>2024-08-17 01:27:09<SeP>2024-08-18 12:04:30<SeP>2024-08-19 22:41:51<SeP>2024-08-21 09:19:12<SeP>2024-08-22 19:56:33<SeP>2024-08-24 06:33:54<SeP>2024-08-25 17:11:15<SeP>2024-08-27 03:48:36<SeP>2024-08-28 14:25:57<SeP>2024-08-30 01:03:18<SeP>2024-08-31 11:40:39<SeP>2024-09-01 22:18:00<SeP>2024-09-03 08:55:21<SeP>2024-09-04 19:32:42<SeP>2024-09-06 06:10:03<SeP>2024-09-07 16:47:24<SeP>2024-09-09 03:24:45<SeP>2024-09-10 14:02:06<SeP>2024-09-12 00:39:27<SeP>2024-09-13 11:16:48<SeP>2024-09-14 21:54:09<SeP>2024-09-16 08:31:30<SeP>2024-09-17 19:08:51<SeP>2024-09-19 05:46:12<SeP>2024-09-20 16:23:33<SeP>2024-09-22 03:00:54<SeP>2024-09-23 13:38:15<SeP>2024-09-25 00:15:36<SeP>2024-09-26 10:52:57<SeP>2024-09-27 21:30:18<SeP>2024-09-29 08:07:39<SeP>2024-09-30 18:45:00<SeP>2024-10-02 05:22:21<SeP>2024-10-03 15:59:42<SeP>2024-10-05 02:37:03<SeP>2024-10-06 13:14:24<SeP>2024-10-07 23:51:45<SeP>2024-10-09 10:29:06<SeP>2024-10-10 21:06:27<SeP>2024-10-12 07:43:48<SeP>2024-10-13 18:21:09<SeP>2024-10-15 04:58:30<SeP>2024-10-16 15:35:51<SeP>2024-10-18 02:13:12<SeP>2024-10-19 12:50:33<SeP>2024-10-20 23:27:54<SeP>2024-10-22 10:05:15<SeP>2024-10-23 20:42:36<SeP>2024-10-25 07:19:57<SeP>2024-10-26 17:57:18<SeP>2024-10-28 04:34:39<SeP>2024-10-29 15:12:00<SeP>2024-10-31 01:49:21<SeP>2024-11-01 12:26:42<SeP>2024-11-02 23:04:03<SeP>2024-11-04 08:41:24<SeP>2024-11-05 19:18:45<SeP>2024-11-07 05:56:06<SeP>2024-11-08 16:33:27<SeP>2024-11-10 03:10:48<SeP>2024-11-11 13:48:09<SeP>2024-11-13 00:25:30<SeP>2024-11-14 11:02:51<SeP>2024-11-15 21:40:12<SeP>2024-11-17 08:17:33<SeP>2024-11-18 18:54:54<SeP>2024-11-20 05:32:15<SeP>2024-11-21 16:09:36<SeP>2024-11-23 02:46:57<SeP>2024-11-24 13:24:18<SeP>2024-11-26 00:01:39<SeP>2024-11-27 10:39:00<SeP>2024-11-28 21:16:21<SeP>2024-11-30 07:53:42<SeP>2024-12-01 18:31:03<SeP>2024-12-03 05:08:24<SeP>2024-12-04 15:45:45<SeP>2024-12-06 02:23:06<SeP>2024-12-07 13:00:27<SeP>2024-12-08 23:37:48<SeP>2024-12-10 10:15:09<SeP>2024-12-11 20:52:30<SeP>2024-12-13 07:29:51<SeP>2024-12-14 18:07:12<SeP>2024-12-16 04:44:33<SeP>2024-12-17 15:21:54<SeP>2024-12-19 01:59:15<SeP>2024-12-20 12:36:36<SeP>2024-12-21 23:13:57<SeP>2024-12-23 09:51:18<SeP>2024-12-24 20:28:39<SeP>2024-12-26 07:06:00<SeP>2024-12-27 17:43:21<SeP>2024-12-29 04:20:42<SeP>2024-12-30 14:58:03<SeP>2025-01-01 01:35:24<SeP>2025-01-02 12:12:45<SeP>2025-01-03 22:50:06<SeP>2025-01-05 09:27:27<SeP>2025-01-06 20:04:48<SeP>2025-01-08 06:42:09<SeP>2025-01-09 17:19:30<SeP>2025-01-11 03:56:51<SeP>2025-01-12 14:34:12<SeP>2025-01-14 01:11:33<SeP>2025-01-15 11:48:54<SeP>2025-01-16 22:26:15<SeP>2025-01-18 09:03:36<SeP>2025-01-19 19:40:57<SeP>2025-01-21 06:18:18<SeP>2025-01-22 16:55:39<SeP>2025-01-24 03:33:00<SeP>2025-01-25 14:10:21<SeP>2025-01-27 00:47:42<SeP>2025-01-28 11:25:03<SeP>2025-01-29 22:02:24<SeP>2025-01-31 08:39:45<SeP>2025-02-01 19:17:06<SeP>2025-02-03 05:54:27<SeP>2025-02-04 16:31:48<SeP>2025-02-06 03:09:09<SeP>2025-02-07 13:46:30<SeP>2025-02-09 00:23:51<SeP>2025-02-10 11:01:12<SeP>2025-02-11 21:38:33<SeP>2025-02-13 08:15:54<SeP>2025-02-14 18:53:15<SeP>2025-02-16 05:30:36<SeP>2025-02-17 16:07:57<SeP>2025-02-19 02:45:18<SeP>2025-02-20 13:22:39";
  const itemLabel       = "Attacks";
  const itemData        = "152<SeP>614<SeP>970<SeP>717<SeP>541<SeP>214<SeP>6968<SeP>505<SeP>9188<SeP>977<SeP>313<SeP>1205<SeP>807<SeP>707<SeP>149<SeP>463<SeP>122<SeP>764<SeP>280<SeP>3700<SeP>7213<SeP>7489<SeP>6918<SeP>7956<SeP>419<SeP>319<SeP>341<SeP>218<SeP>385<SeP>5882<SeP>75<SeP>385<SeP>230<SeP>444<SeP>885<SeP>9876<SeP>9009<SeP>9967<SeP>9818<SeP>5607<SeP>6090<SeP>8051<SeP>7651<SeP>8903<SeP>8543<SeP>7378<SeP>8400<SeP>8779<SeP>7719<SeP>9203<SeP>5464<SeP>5565<SeP>12847<SeP>6610<SeP>7292<SeP>7515<SeP>10162<SeP>15118<SeP>19569<SeP>8280<SeP>9224<SeP>10054<SeP>6349<SeP>9029<SeP>7871<SeP>8727<SeP>9040<SeP>5817<SeP>6232<SeP>7020<SeP>7037<SeP>2198<SeP>6110<SeP>5172<SeP>6707<SeP>6746<SeP>8134<SeP>2404<SeP>6257<SeP>6397<SeP>6110<SeP>5316<SeP>6578<SeP>4562<SeP>6552<SeP>5815<SeP>5606<SeP>5454<SeP>5589<SeP>21821<SeP>10838<SeP>35425<SeP>7097<SeP>8369<SeP>5901<SeP>6234<SeP>12451<SeP>6212<SeP>6227<SeP>3803<SeP>4755<SeP>6122<SeP>5117<SeP>8590<SeP>5317<SeP>6504<SeP>5002<SeP>4627<SeP>8387<SeP>8285<SeP>7591<SeP>6992<SeP>3846<SeP>8261<SeP>10325<SeP>7286<SeP>2735<SeP>5059<SeP>7446<SeP>7549<SeP>5703<SeP>7628<SeP>8370<SeP>2525<SeP>2632<SeP>1007<SeP>1624<SeP>2409<SeP>1913<SeP>825<SeP>1307<SeP>830<SeP>1463<SeP>1299<SeP>1091<SeP>1144<SeP>840<SeP>1056<SeP>928<SeP>1313<SeP>1471<SeP>1032<SeP>1650<SeP>2026<SeP>1453<SeP>9876<SeP>7076<SeP>10052<SeP>8674<SeP>6062<SeP>11207<SeP>5531<SeP>10217<SeP>9081<SeP>9835<SeP>11462<SeP>8134<SeP>13034<SeP>12183<SeP>6631<SeP>12434<SeP>5042<SeP>5775<SeP>6258<SeP>23696<SeP>7776<SeP>7764<SeP>8364<SeP>16660<SeP>9662<SeP>7446<SeP>4521<SeP>7194<SeP>9040<SeP>24312<SeP>7273<SeP>9554<SeP>10638<SeP>4735<SeP>6088<SeP>5918<SeP>16231<SeP>4226<SeP>13061<SeP>8011<SeP>6340<SeP>8495<SeP>7591<SeP>2997<SeP>6038<SeP>5690<SeP>7076<SeP>6421<SeP>6103<SeP>7267<SeP>18643<SeP>6711<SeP>8858<SeP>5063<SeP>7577<SeP>8164<SeP>9869<SeP>5591<SeP>2505<SeP>7376<SeP>3481<SeP>4404<SeP>3939<SeP>1499<SeP>616<SeP>639<SeP>201<SeP>541<SeP>582<SeP>797<SeP>335<SeP>931<SeP>1071<SeP>1387<SeP>2977<SeP>22890<SeP>599<SeP>4472<SeP>3205<SeP>2499<SeP>7877<SeP>2738<SeP>4114<SeP>3051<SeP>3218<SeP>2961<SeP>3242<SeP>4065<SeP>2483<SeP>2301<SeP>3432<SeP>1867<SeP>2045<SeP>1892<SeP>1326<SeP>1395<SeP>1412<SeP>822<SeP>1904<SeP>2036<SeP>25888<SeP>1795<SeP>4062<SeP>3308<SeP>2430<SeP>3583<SeP>2757<SeP>1749<SeP>3666<SeP>1981<SeP>4118<SeP>2011<SeP>2977<SeP>3911<SeP>4466<SeP>4870<SeP>5201<SeP>4497<SeP>2401<SeP>2746<SeP>4569<SeP>3510<SeP>10046<SeP>4738<SeP>3717<SeP>2528<SeP>3047<SeP>3686<SeP>4300<SeP>3119<SeP>3350<SeP>2258<SeP>5026<SeP>4771<SeP>2945<SeP>6149<SeP>4147<SeP>6133<SeP>4538<SeP>5380<SeP>5009<SeP>22112<SeP>5617<SeP>10666<SeP>1740<SeP>3229<SeP>3872<SeP>3637<SeP>5298<SeP>3304<SeP>4855<SeP>4494<SeP>4495<SeP>3398<SeP>3889<SeP>2204<SeP>1340<SeP>2219<SeP>3534<SeP>2211<SeP>2888<SeP>3723<SeP>4410<SeP>3504<SeP>3294<SeP>4258<SeP>3411<SeP>3112<SeP>4020<SeP>8340<SeP>6067<SeP>5314<SeP>4852<SeP>4903<SeP>3811<SeP>3633<SeP>4640<SeP>4935<SeP>5411<SeP>4747<SeP>4740<SeP>1994<SeP>741<SeP>1589<SeP>1757<SeP>1115<SeP>1074<SeP>2082<SeP>1089<SeP>1629<SeP>3660<SeP>5042<SeP>6441<SeP>33972<SeP>4773<SeP>4272<SeP>21861<SeP>7494<SeP>5109<SeP>6072<SeP>4472<SeP>24261<SeP>4765<SeP>5117<SeP>4676<SeP>5025<SeP>6221<SeP>29615<SeP>4957<SeP>3989<SeP>3726<SeP>3693<SeP>5715<SeP>4949<SeP>2925<SeP>3140<SeP>4374<SeP>5205<SeP>5258<SeP>17909<SeP>4903<SeP>5922<SeP>5652<SeP>2537<SeP>2786<SeP>3552<SeP>4782<SeP>4040<SeP>3804<SeP>2675<SeP>3682<SeP>2505<SeP>4361<SeP>4490<SeP>8185<SeP>10501<SeP>7958<SeP>8618<SeP>9119<SeP>6819<SeP>5756<SeP>5106<SeP>4126<SeP>24267<SeP>4874<SeP>3115<SeP>4599<SeP>3198<SeP>11338<SeP>5488<SeP>3645<SeP>4998<SeP>3969<SeP>2877<SeP>9223";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:37:21<SeP>2023-07-28 21:14:42<SeP>2023-07-30 07:52:03<SeP>2023-07-31 18:29:24<SeP>2023-08-02 05:06:45<SeP>2023-08-03 15:44:06<SeP>2023-08-05 02:21:27<SeP>2023-08-06 12:58:48<SeP>2023-08-07 23:36:09<SeP>2023-08-09 10:13:30<SeP>2023-08-10 20:50:51<SeP>2023-08-12 07:28:12<SeP>2023-08-13 18:05:33<SeP>2023-08-15 04:42:54<SeP>2023-08-16 15:20:15<SeP>2023-08-18 01:57:36<SeP>2023-08-19 12:34:57<SeP>2023-08-20 23:12:18<SeP>2023-08-22 09:49:39<SeP>2023-08-23 20:27:00<SeP>2023-08-25 07:04:21<SeP>2023-08-26 17:41:42<SeP>2023-08-28 04:19:03<SeP>2023-08-29 14:56:24<SeP>2023-08-31 01:33:45<SeP>2023-09-01 12:11:06<SeP>2023-09-02 22:48:27<SeP>2023-09-04 09:25:48<SeP>2023-09-05 20:03:09<SeP>2023-09-07 06:40:30<SeP>2023-09-08 17:17:51<SeP>2023-09-10 03:55:12<SeP>2023-09-11 14:32:33<SeP>2023-09-13 01:09:54<SeP>2023-09-14 11:47:15<SeP>2023-09-15 22:24:36<SeP>2023-09-17 09:01:57<SeP>2023-09-18 19:39:18<SeP>2023-09-20 06:16:39<SeP>2023-09-21 16:54:00<SeP>2023-09-23 03:31:21<SeP>2023-09-24 14:08:42<SeP>2023-09-26 00:46:03<SeP>2023-09-27 11:23:24<SeP>2023-09-28 22:00:45<SeP>2023-09-30 08:38:06<SeP>2023-10-01 19:15:27<SeP>2023-10-03 05:52:48<SeP>2023-10-04 16:30:09<SeP>2023-10-06 03:07:30<SeP>2023-10-07 13:44:51<SeP>2023-10-09 00:22:12<SeP>2023-10-10 10:59:33<SeP>2023-10-11 21:36:54<SeP>2023-10-13 08:14:15<SeP>2023-10-14 18:51:36<SeP>2023-10-16 05:28:57<SeP>2023-10-17 16:06:18<SeP>2023-10-19 02:43:39<SeP>2023-10-20 13:21:00<SeP>2023-10-21 23:58:21<SeP>2023-10-23 10:35:42<SeP>2023-10-24 21:13:03<SeP>2023-10-26 07:50:24<SeP>2023-10-27 18:27:45<SeP>2023-10-29 05:05:06<SeP>2023-10-30 15:42:27<SeP>2023-11-01 02:19:48<SeP>2023-11-02 12:57:09<SeP>2023-11-03 23:34:30<SeP>2023-11-05 09:11:51<SeP>2023-11-06 19:49:12<SeP>2023-11-08 06:26:33<SeP>2023-11-09 17:03:54<SeP>2023-11-11 03:41:15<SeP>2023-11-12 14:18:36<SeP>2023-11-14 00:55:57<SeP>2023-11-15 11:33:18<SeP>2023-11-16 22:10:39<SeP>2023-11-18 08:48:00<SeP>2023-11-19 19:25:21<SeP>2023-11-21 06:02:42<SeP>2023-11-22 16:40:03<SeP>2023-11-24 03:17:24<SeP>2023-11-25 13:54:45<SeP>2023-11-27 00:32:06<SeP>2023-11-28 11:09:27<SeP>2023-11-29 21:46:48<SeP>2023-12-01 08:24:09<SeP>2023-12-02 19:01:30<SeP>2023-12-04 05:38:51<SeP>2023-12-05 16:16:12<SeP>2023-12-07 02:53:33<SeP>2023-12-08 13:30:54<SeP>2023-12-10 00:08:15<SeP>2023-12-11 10:45:36<SeP>2023-12-12 21:22:57<SeP>2023-12-14 08:00:18<SeP>2023-12-15 18:37:39<SeP>2023-12-17 05:15:00<SeP>2023-12-18 15:52:21<SeP>2023-12-20 02:29:42<SeP>2023-12-21 13:07:03<SeP>2023-12-22 23:44:24<SeP>2023-12-24 10:21:45<SeP>2023-12-25 20:59:06<SeP>2023-12-27 07:36:27<SeP>2023-12-28 18:13:48<SeP>2023-12-30 04:51:09<SeP>2023-12-31 15:28:30<SeP>2024-01-02 02:05:51<SeP>2024-01-03 12:43:12<SeP>2024-01-04 23:20:33<SeP>2024-01-06 09:57:54<SeP>2024-01-07 20:35:15<SeP>2024-01-09 07:12:36<SeP>2024-01-10 17:49:57<SeP>2024-01-12 04:27:18<SeP>2024-01-13 15:04:39<SeP>2024-01-15 01:42:00<SeP>2024-01-16 12:19:21<SeP>2024-01-17 22:56:42<SeP>2024-01-19 09:34:03<SeP>2024-01-20 20:11:24<SeP>2024-01-22 06:48:45<SeP>2024-01-23 17:26:06<SeP>2024-01-25 04:03:27<SeP>2024-01-26 14:40:48<SeP>2024-01-28 01:18:09<SeP>2024-01-29 11:55:30<SeP>2024-01-30 22:32:51<SeP>2024-02-01 09:10:12<SeP>2024-02-02 19:47:33<SeP>2024-02-04 06:24:54<SeP>2024-02-05 17:02:15<SeP>2024-02-07 03:39:36<SeP>2024-02-08 14:16:57<SeP>2024-02-10 00:54:18<SeP>2024-02-11 11:31:39<SeP>2024-02-12 22:09:00<SeP>2024-02-14 08:46:21<SeP>2024-02-15 19:23:42<SeP>2024-02-17 06:01:03<SeP>2024-02-18 16:38:24<SeP>2024-02-20 03:15:45<SeP>2024-02-21 13:53:06<SeP>2024-02-23 00:30:27<SeP>2024-02-24 11:07:48<SeP>2024-02-25 21:45:09<SeP>2024-02-27 08:22:30<SeP>2024-02-28 18:59:51<SeP>2024-03-01 05:37:12<SeP>2024-03-02 16:14:33<SeP>2024-03-04 02:51:54<SeP>2024-03-05 13:29:15<SeP>2024-03-07 00:06:36<SeP>2024-03-08 10:43:57<SeP>2024-03-09 21:21:18<SeP>2024-03-11 08:58:39<SeP>2024-03-12 19:36:00<SeP>2024-03-14 06:13:21<SeP>2024-03-15 16:50:42<SeP>2024-03-17 03:28:03<SeP>2024-03-18 14:05:24<SeP>2024-03-20 00:42:45<SeP>2024-03-21 11:20:06<SeP>2024-03-22 21:57:27<SeP>2024-03-24 08:34:48<SeP>2024-03-25 19:12:09<SeP>2024-03-27 05:49:30<SeP>2024-03-28 16:26:51<SeP>2024-03-30 03:04:12<SeP>2024-03-31 13:41:33<SeP>2024-04-02 00:18:54<SeP>2024-04-03 10:56:15<SeP>2024-04-04 21:33:36<SeP>2024-04-06 08:10:57<SeP>2024-04-07 18:48:18<SeP>2024-04-09 05:25:39<SeP>2024-04-10 16:03:00<SeP>2024-04-12 02:40:21<SeP>2024-04-13 13:17:42<SeP>2024-04-14 23:55:03<SeP>2024-04-16 10:32:24<SeP>2024-04-17 21:09:45<SeP>2024-04-19 07:47:06<SeP>2024-04-20 18:24:27<SeP>2024-04-22 05:01:48<SeP>2024-04-23 15:39:09<SeP>2024-04-25 02:16:30<SeP>2024-04-26 12:53:51<SeP>2024-04-27 23:31:12<SeP>2024-04-29 10:08:33<SeP>2024-04-30 20:45:54<SeP>2024-05-02 07:23:15<SeP>2024-05-03 18:00:36<SeP>2024-05-05 04:37:57<SeP>2024-05-06 15:15:18<SeP>2024-05-08 01:52:39<SeP>2024-05-09 12:30:00<SeP>2024-05-10 23:07:21<SeP>2024-05-12 09:44:42<SeP>2024-05-13 20:22:03<SeP>2024-05-15 06:59:24<SeP>2024-05-16 17:36:45<SeP>2024-05-18 04:14:06<SeP>2024-05-19 14:51:27<SeP>2024-05-21 01:28:48<SeP>2024-05-22 12:06:09<SeP>2024-05-23 22:43:30<SeP>2024-05-25 09:20:51<SeP>2024-05-26 19:58:12<SeP>2024-05-28 06:35:33<SeP>2024-05-29 17:12:54<SeP>2024-05-31 03:50:15<SeP>2024-06-01 14:27:36<SeP>2024-06-03 01:04:57<SeP>2024-06-04 11:42:18<SeP>2024-06-05 22:19:39<SeP>2024-06-07 08:57:00<SeP>2024-06-08 19:34:21<SeP>2024-06-10 06:11:42<SeP>2024-06-11 16:49:03<SeP>2024-06-13 03:26:24<SeP>2024-06-14 14:03:45<SeP>2024-06-16 00:41:06<SeP>2024-06-17 11:18:27<SeP>2024-06-18 21:55:48<SeP>2024-06-20 08:33:09<SeP>2024-06-21 19:10:30<SeP>2024-06-23 05:47:51<SeP>2024-06-24 16:25:12<SeP>2024-06-26 03:02:33<SeP>2024-06-27 13:39:54<SeP>2024-06-29 00:17:15<SeP>2024-06-30 10:54:36<SeP>2024-07-01 21:31:57<SeP>2024-07-03 08:09:18<SeP>2024-07-04 18:46:39<SeP>2024-07-06 05:24:00<SeP>2024-07-07 16:01:21<SeP>2024-07-09 02:38:42<SeP>2024-07-10 13:16:03<SeP>2024-07-11 23:53:24<SeP>2024-07-13 10:30:45<SeP>2024-07-14 21:08:06<SeP>2024-07-16 07:45:27<SeP>2024-07-17 18:22:48<SeP>2024-07-19 05:00:09<SeP>2024-07-20 15:37:30<SeP>2024-07-22 02:14:51<SeP>2024-07-23 12:52:12<SeP>2024-07-24 23:29:33<SeP>2024-07-26 10:06:54<SeP>2024-07-27 20:44:15<SeP>2024-07-29 07:21:36<SeP>2024-07-30 17:58:57<SeP>2024-08-01 04:36:18<SeP>2024-08-02 15:13:39<SeP>2024-08-04 01:51:00<SeP>2024-08-05 12:28:21<SeP>2024-08-06 23:05:42<SeP>2024-08-08 09:43:03<SeP>2024-08-09 20:20:24<SeP>2024-08-11 06:57:45<SeP>2024-08-12 17:35:06<SeP>2024-08-14 04:12:27<SeP>2024-08-15 14:49:48<SeP>2024-08-17 01:27:09<SeP>2024-08-18 12:04:30<SeP>2024-08-19 22:41:51<SeP>2024-08-21 09:19:12<SeP>2024-08-22 19:56:33<SeP>2024-08-24 06:33:54<SeP>2024-08-25 17:11:15<SeP>2024-08-27 03:48:36<SeP>2024-08-28 14:25:57<SeP>2024-08-30 01:03:18<SeP>2024-08-31 11:40:39<SeP>2024-09-01 22:18:00<SeP>2024-09-03 08:55:21<SeP>2024-09-04 19:32:42<SeP>2024-09-06 06:10:03<SeP>2024-09-07 16:47:24<SeP>2024-09-09 03:24:45<SeP>2024-09-10 14:02:06<SeP>2024-09-12 00:39:27<SeP>2024-09-13 11:16:48<SeP>2024-09-14 21:54:09<SeP>2024-09-16 08:31:30<SeP>2024-09-17 19:08:51<SeP>2024-09-19 05:46:12<SeP>2024-09-20 16:23:33<SeP>2024-09-22 03:00:54<SeP>2024-09-23 13:38:15<SeP>2024-09-25 00:15:36<SeP>2024-09-26 10:52:57<SeP>2024-09-27 21:30:18<SeP>2024-09-29 08:07:39<SeP>2024-09-30 18:45:00<SeP>2024-10-02 05:22:21<SeP>2024-10-03 15:59:42<SeP>2024-10-05 02:37:03<SeP>2024-10-06 13:14:24<SeP>2024-10-07 23:51:45<SeP>2024-10-09 10:29:06<SeP>2024-10-10 21:06:27<SeP>2024-10-12 07:43:48<SeP>2024-10-13 18:21:09<SeP>2024-10-15 04:58:30<SeP>2024-10-16 15:35:51<SeP>2024-10-18 02:13:12<SeP>2024-10-19 12:50:33<SeP>2024-10-20 23:27:54<SeP>2024-10-22 10:05:15<SeP>2024-10-23 20:42:36<SeP>2024-10-25 07:19:57<SeP>2024-10-26 17:57:18<SeP>2024-10-28 04:34:39<SeP>2024-10-29 15:12:00<SeP>2024-10-31 01:49:21<SeP>2024-11-01 12:26:42<SeP>2024-11-02 23:04:03<SeP>2024-11-04 08:41:24<SeP>2024-11-05 19:18:45<SeP>2024-11-07 05:56:06<SeP>2024-11-08 16:33:27<SeP>2024-11-10 03:10:48<SeP>2024-11-11 13:48:09<SeP>2024-11-13 00:25:30<SeP>2024-11-14 11:02:51<SeP>2024-11-15 21:40:12<SeP>2024-11-17 08:17:33<SeP>2024-11-18 18:54:54<SeP>2024-11-20 05:32:15<SeP>2024-11-21 16:09:36<SeP>2024-11-23 02:46:57<SeP>2024-11-24 13:24:18<SeP>2024-11-26 00:01:39<SeP>2024-11-27 10:39:00<SeP>2024-11-28 21:16:21<SeP>2024-11-30 07:53:42<SeP>2024-12-01 18:31:03<SeP>2024-12-03 05:08:24<SeP>2024-12-04 15:45:45<SeP>2024-12-06 02:23:06<SeP>2024-12-07 13:00:27<SeP>2024-12-08 23:37:48<SeP>2024-12-10 10:15:09<SeP>2024-12-11 20:52:30<SeP>2024-12-13 07:29:51<SeP>2024-12-14 18:07:12<SeP>2024-12-16 04:44:33<SeP>2024-12-17 15:21:54<SeP>2024-12-19 01:59:15<SeP>2024-12-20 12:36:36<SeP>2024-12-21 23:13:57<SeP>2024-12-23 09:51:18<SeP>2024-12-24 20:28:39<SeP>2024-12-26 07:06:00<SeP>2024-12-27 17:43:21<SeP>2024-12-29 04:20:42<SeP>2024-12-30 14:58:03<SeP>2025-01-01 01:35:24<SeP>2025-01-02 12:12:45<SeP>2025-01-03 22:50:06<SeP>2025-01-05 09:27:27<SeP>2025-01-06 20:04:48<SeP>2025-01-08 06:42:09<SeP>2025-01-09 17:19:30<SeP>2025-01-11 03:56:51<SeP>2025-01-12 14:34:12<SeP>2025-01-14 01:11:33<SeP>2025-01-15 11:48:54<SeP>2025-01-16 22:26:15<SeP>2025-01-18 09:03:36<SeP>2025-01-19 19:40:57<SeP>2025-01-21 06:18:18<SeP>2025-01-22 16:55:39<SeP>2025-01-24 03:33:00<SeP>2025-01-25 14:10:21<SeP>2025-01-27 00:47:42<SeP>2025-01-28 11:25:03<SeP>2025-01-29 22:02:24<SeP>2025-01-31 08:39:45<SeP>2025-02-01 19:17:06<SeP>2025-02-03 05:54:27<SeP>2025-02-04 16:31:48<SeP>2025-02-06 03:09:09<SeP>2025-02-07 13:46:30<SeP>2025-02-09 00:23:51<SeP>2025-02-10 11:01:12<SeP>2025-02-11 21:38:33<SeP>2025-02-13 08:15:54<SeP>2025-02-14 18:53:15<SeP>2025-02-16 05:30:36<SeP>2025-02-17 16:07:57<SeP>2025-02-19 02:45:18<SeP>2025-02-20 13:22:39";
  const item1Label       = "Escaneos";
  const item1Data        = "759<SeP>1458<SeP>1376<SeP>1425<SeP>1261<SeP>1660<SeP>981<SeP>978<SeP>1100<SeP>3344<SeP>1492<SeP>2816<SeP>1867<SeP>2484<SeP>749<SeP>828<SeP>1415<SeP>1770<SeP>2160<SeP>1531<SeP>1586<SeP>929<SeP>846<SeP>1440<SeP>817<SeP>949<SeP>728<SeP>902<SeP>3619<SeP>956<SeP>827<SeP>1364<SeP>1223<SeP>833<SeP>2172<SeP>2028<SeP>2900<SeP>1737<SeP>1560<SeP>1598<SeP>1291<SeP>1620<SeP>1914<SeP>2041<SeP>1603<SeP>1686<SeP>1577<SeP>1628<SeP>1677<SeP>1743<SeP>1684<SeP>1788<SeP>1772<SeP>1583<SeP>3172<SeP>1343<SeP>1726<SeP>2009<SeP>1879<SeP>2108<SeP>1844<SeP>3339<SeP>1267<SeP>1575<SeP>1493<SeP>1299<SeP>1875<SeP>1662<SeP>1216<SeP>1373<SeP>1381<SeP>1141<SeP>2275<SeP>1190<SeP>1146<SeP>1309<SeP>4694<SeP>4663<SeP>1365<SeP>1306<SeP>1545<SeP>2072<SeP>1117<SeP>3466<SeP>4415<SeP>1574<SeP>1492<SeP>953<SeP>3260<SeP>1209<SeP>1063<SeP>1038<SeP>1084<SeP>1013<SeP>3064<SeP>920<SeP>1061<SeP>2103<SeP>4392<SeP>4653<SeP>978<SeP>926<SeP>955<SeP>966<SeP>926<SeP>928<SeP>1091<SeP>2129<SeP>3475<SeP>1699<SeP>1215<SeP>1366<SeP>560<SeP>1409<SeP>1290<SeP>1180<SeP>853<SeP>1962<SeP>1403<SeP>1243<SeP>1025<SeP>943<SeP>1126<SeP>761<SeP>820<SeP>833<SeP>817<SeP>863<SeP>1075<SeP>776<SeP>792<SeP>876<SeP>943<SeP>901<SeP>563<SeP>889<SeP>853<SeP>805<SeP>916<SeP>821<SeP>805<SeP>740<SeP>834<SeP>1068<SeP>760<SeP>838<SeP>959<SeP>857<SeP>1130<SeP>953<SeP>791<SeP>486<SeP>919<SeP>817<SeP>1264<SeP>877<SeP>934<SeP>1202<SeP>1299<SeP>871<SeP>916<SeP>887<SeP>976<SeP>689<SeP>1017<SeP>1027<SeP>949<SeP>846<SeP>894<SeP>1058<SeP>997<SeP>1000<SeP>1002<SeP>1147<SeP>887<SeP>911<SeP>1125<SeP>2053<SeP>1289<SeP>1001<SeP>1006<SeP>1138<SeP>966<SeP>993<SeP>855<SeP>606<SeP>916<SeP>1158<SeP>905<SeP>920<SeP>1021<SeP>1335<SeP>1024<SeP>1146<SeP>1274<SeP>1198<SeP>1253<SeP>1306<SeP>1239<SeP>1575<SeP>1840<SeP>1510<SeP>1201<SeP>731<SeP>938<SeP>1042<SeP>1111<SeP>488<SeP>777<SeP>830<SeP>984<SeP>1422<SeP>5811<SeP>2559<SeP>1949<SeP>1215<SeP>943<SeP>919<SeP>943<SeP>942<SeP>958<SeP>1063<SeP>1056<SeP>1002<SeP>1376<SeP>2046<SeP>991<SeP>1227<SeP>1230<SeP>1246<SeP>1117<SeP>1044<SeP>943<SeP>1095<SeP>1100<SeP>965<SeP>1102<SeP>1001<SeP>1186<SeP>859<SeP>1022<SeP>1363<SeP>1140<SeP>995<SeP>1323<SeP>1261<SeP>1167<SeP>1525<SeP>1200<SeP>1081<SeP>1180<SeP>1151<SeP>1941<SeP>1263<SeP>1819<SeP>1714<SeP>1369<SeP>1991<SeP>1633<SeP>1172<SeP>1164<SeP>1134<SeP>1174<SeP>1668<SeP>1206<SeP>1198<SeP>1463<SeP>1843<SeP>1279<SeP>1463<SeP>1387<SeP>1374<SeP>1138<SeP>1106<SeP>1289<SeP>1110<SeP>1206<SeP>1273<SeP>1261<SeP>1071<SeP>2029<SeP>1284<SeP>1253<SeP>1666<SeP>1395<SeP>1275<SeP>977<SeP>968<SeP>1006<SeP>1002<SeP>799<SeP>990<SeP>1738<SeP>1157<SeP>1057<SeP>1114<SeP>961<SeP>768<SeP>1048<SeP>1377<SeP>840<SeP>917<SeP>873<SeP>1277<SeP>1495<SeP>1506<SeP>1159<SeP>1095<SeP>932<SeP>1594<SeP>1274<SeP>1058<SeP>1122<SeP>1012<SeP>1554<SeP>1027<SeP>885<SeP>1198<SeP>1066<SeP>908<SeP>884<SeP>1025<SeP>1404<SeP>1474<SeP>1437<SeP>1402<SeP>1381<SeP>927<SeP>1118<SeP>1261<SeP>1044<SeP>983<SeP>1207<SeP>1008<SeP>991<SeP>1266<SeP>1604<SeP>1269<SeP>1553<SeP>1353<SeP>1298<SeP>1522<SeP>1412<SeP>1509<SeP>1301<SeP>1445<SeP>1209<SeP>1800<SeP>1243<SeP>1467<SeP>1604<SeP>1301<SeP>1433<SeP>1320<SeP>1133<SeP>1300<SeP>1386<SeP>1661<SeP>1338<SeP>1329<SeP>1141<SeP>1468<SeP>1123<SeP>1396<SeP>1132<SeP>1652<SeP>1873<SeP>1325<SeP>924<SeP>981<SeP>1758<SeP>1466<SeP>1268<SeP>1383<SeP>1039<SeP>1287<SeP>1268<SeP>1529<SeP>1289<SeP>1462<SeP>1623<SeP>1364<SeP>1504<SeP>1722<SeP>1258<SeP>1534<SeP>1342<SeP>1779<SeP>1575<SeP>999<SeP>1048<SeP>2036<SeP>1891<SeP>1633<SeP>1739<SeP>1692<SeP>1540<SeP>1506<SeP>1665<SeP>1525";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "152<SeP>614<SeP>970<SeP>717<SeP>541<SeP>214<SeP>6968<SeP>505<SeP>9188<SeP>977<SeP>313<SeP>1205<SeP>807<SeP>707<SeP>149<SeP>463<SeP>122<SeP>764<SeP>280<SeP>3700<SeP>7213<SeP>7489<SeP>6918<SeP>7956<SeP>419<SeP>319<SeP>341<SeP>218<SeP>385<SeP>5882<SeP>75<SeP>385<SeP>230<SeP>444<SeP>885<SeP>9876<SeP>9009<SeP>9967<SeP>9818<SeP>5607<SeP>6090<SeP>8051<SeP>7651<SeP>8903<SeP>8543<SeP>7378<SeP>8400<SeP>8779<SeP>7719<SeP>9203<SeP>5464<SeP>5565<SeP>12847<SeP>6610<SeP>7292<SeP>7515<SeP>10162<SeP>15118<SeP>19569<SeP>8280<SeP>9224<SeP>10054<SeP>6349<SeP>9029<SeP>7871<SeP>8727<SeP>9040<SeP>5817<SeP>6232<SeP>7020<SeP>7037<SeP>2198<SeP>6110<SeP>5172<SeP>6707<SeP>6746<SeP>8134<SeP>2404<SeP>6257<SeP>6397<SeP>6110<SeP>5316<SeP>6578<SeP>4562<SeP>6552<SeP>5815<SeP>5606<SeP>5454<SeP>5589<SeP>21821<SeP>10838<SeP>35425<SeP>7097<SeP>8369<SeP>5901<SeP>6234<SeP>12451<SeP>6212<SeP>6227<SeP>3803<SeP>4755<SeP>6122<SeP>5117<SeP>8590<SeP>5317<SeP>6504<SeP>5002<SeP>4627<SeP>8387<SeP>8285<SeP>7591<SeP>6992<SeP>3846<SeP>8261<SeP>10325<SeP>7286<SeP>2735<SeP>5059<SeP>7446<SeP>7549<SeP>5703<SeP>7628<SeP>8370<SeP>2525<SeP>2632<SeP>1007<SeP>1624<SeP>2409<SeP>1913<SeP>825<SeP>1307<SeP>830<SeP>1463<SeP>1299<SeP>1091<SeP>1144<SeP>840<SeP>1056<SeP>928<SeP>1313<SeP>1471<SeP>1032<SeP>1650<SeP>2026<SeP>1453<SeP>9876<SeP>7076<SeP>10052<SeP>8674<SeP>6062<SeP>11207<SeP>5531<SeP>10217<SeP>9081<SeP>9835<SeP>11462<SeP>8134<SeP>13034<SeP>12183<SeP>6631<SeP>12434<SeP>5042<SeP>5775<SeP>6258<SeP>23696<SeP>7776<SeP>7764<SeP>8364<SeP>16660<SeP>9662<SeP>7446<SeP>4521<SeP>7194<SeP>9040<SeP>24312<SeP>7273<SeP>9554<SeP>10638<SeP>4735<SeP>6088<SeP>5918<SeP>16231<SeP>4226<SeP>13061<SeP>8011<SeP>6340<SeP>8495<SeP>7591<SeP>2997<SeP>6038<SeP>5690<SeP>7076<SeP>6421<SeP>6103<SeP>7267<SeP>18643<SeP>6711<SeP>8858<SeP>5063<SeP>7577<SeP>8164<SeP>9869<SeP>5591<SeP>2505<SeP>7376<SeP>3481<SeP>4404<SeP>3939<SeP>1499<SeP>616<SeP>639<SeP>201<SeP>541<SeP>582<SeP>797<SeP>335<SeP>931<SeP>1071<SeP>1387<SeP>2977<SeP>22890<SeP>599<SeP>4472<SeP>3205<SeP>2499<SeP>7877<SeP>2738<SeP>4114<SeP>3051<SeP>3218<SeP>2961<SeP>3242<SeP>4065<SeP>2483<SeP>2301<SeP>3432<SeP>1867<SeP>2045<SeP>1892<SeP>1326<SeP>1395<SeP>1412<SeP>822<SeP>1904<SeP>2036<SeP>25888<SeP>1795<SeP>4062<SeP>3308<SeP>2430<SeP>3583<SeP>2757<SeP>1749<SeP>3666<SeP>1981<SeP>4118<SeP>2011<SeP>2977<SeP>3911<SeP>4466<SeP>4870<SeP>5201<SeP>4497<SeP>2401<SeP>2746<SeP>4569<SeP>3510<SeP>10046<SeP>4738<SeP>3717<SeP>2528<SeP>3047<SeP>3686<SeP>4300<SeP>3119<SeP>3350<SeP>2258<SeP>5026<SeP>4771<SeP>2945<SeP>6149<SeP>4147<SeP>6133<SeP>4538<SeP>5380<SeP>5009<SeP>22112<SeP>5617<SeP>10666<SeP>1740<SeP>3229<SeP>3872<SeP>3637<SeP>5298<SeP>3304<SeP>4855<SeP>4494<SeP>4495<SeP>3398<SeP>3889<SeP>2204<SeP>1340<SeP>2219<SeP>3534<SeP>2211<SeP>2888<SeP>3723<SeP>4410<SeP>3504<SeP>3294<SeP>4258<SeP>3411<SeP>3112<SeP>4020<SeP>8340<SeP>6067<SeP>5314<SeP>4852<SeP>4903<SeP>3811<SeP>3633<SeP>4640<SeP>4935<SeP>5411<SeP>4747<SeP>4740<SeP>1994<SeP>741<SeP>1589<SeP>1757<SeP>1115<SeP>1074<SeP>2082<SeP>1089<SeP>1629<SeP>3660<SeP>5042<SeP>6441<SeP>33972<SeP>4773<SeP>4272<SeP>21861<SeP>7494<SeP>5109<SeP>6072<SeP>4472<SeP>24261<SeP>4765<SeP>5117<SeP>4676<SeP>5025<SeP>6221<SeP>29615<SeP>4957<SeP>3989<SeP>3726<SeP>3693<SeP>5715<SeP>4949<SeP>2925<SeP>3140<SeP>4374<SeP>5205<SeP>5258<SeP>17909<SeP>4903<SeP>5922<SeP>5652<SeP>2537<SeP>2786<SeP>3552<SeP>4782<SeP>4040<SeP>3804<SeP>2675<SeP>3682<SeP>2505<SeP>4361<SeP>4490<SeP>8185<SeP>10501<SeP>7958<SeP>8618<SeP>9119<SeP>6819<SeP>5756<SeP>5106<SeP>4126<SeP>24267<SeP>4874<SeP>3115<SeP>4599<SeP>3198<SeP>11338<SeP>5488<SeP>3645<SeP>4998<SeP>3969<SeP>2877<SeP>9223";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:37:21<SeP>2023-07-28 21:14:42<SeP>2023-07-30 07:52:03<SeP>2023-07-31 18:29:24<SeP>2023-08-02 05:06:45<SeP>2023-08-03 15:44:06<SeP>2023-08-05 02:21:27<SeP>2023-08-06 12:58:48<SeP>2023-08-07 23:36:09<SeP>2023-08-09 10:13:30<SeP>2023-08-10 20:50:51<SeP>2023-08-12 07:28:12<SeP>2023-08-13 18:05:33<SeP>2023-08-15 04:42:54<SeP>2023-08-16 15:20:15<SeP>2023-08-18 01:57:36<SeP>2023-08-19 12:34:57<SeP>2023-08-20 23:12:18<SeP>2023-08-22 09:49:39<SeP>2023-08-23 20:27:00<SeP>2023-08-25 07:04:21<SeP>2023-08-26 17:41:42<SeP>2023-08-28 04:19:03<SeP>2023-08-29 14:56:24<SeP>2023-08-31 01:33:45<SeP>2023-09-01 12:11:06<SeP>2023-09-02 22:48:27<SeP>2023-09-04 09:25:48<SeP>2023-09-05 20:03:09<SeP>2023-09-07 06:40:30<SeP>2023-09-08 17:17:51<SeP>2023-09-10 03:55:12<SeP>2023-09-11 14:32:33<SeP>2023-09-13 01:09:54<SeP>2023-09-14 11:47:15<SeP>2023-09-15 22:24:36<SeP>2023-09-17 09:01:57<SeP>2023-09-18 19:39:18<SeP>2023-09-20 06:16:39<SeP>2023-09-21 16:54:00<SeP>2023-09-23 03:31:21<SeP>2023-09-24 14:08:42<SeP>2023-09-26 00:46:03<SeP>2023-09-27 11:23:24<SeP>2023-09-28 22:00:45<SeP>2023-09-30 08:38:06<SeP>2023-10-01 19:15:27<SeP>2023-10-03 05:52:48<SeP>2023-10-04 16:30:09<SeP>2023-10-06 03:07:30<SeP>2023-10-07 13:44:51<SeP>2023-10-09 00:22:12<SeP>2023-10-10 10:59:33<SeP>2023-10-11 21:36:54<SeP>2023-10-13 08:14:15<SeP>2023-10-14 18:51:36<SeP>2023-10-16 05:28:57<SeP>2023-10-17 16:06:18<SeP>2023-10-19 02:43:39<SeP>2023-10-20 13:21:00<SeP>2023-10-21 23:58:21<SeP>2023-10-23 10:35:42<SeP>2023-10-24 21:13:03<SeP>2023-10-26 07:50:24<SeP>2023-10-27 18:27:45<SeP>2023-10-29 05:05:06<SeP>2023-10-30 15:42:27<SeP>2023-11-01 02:19:48<SeP>2023-11-02 12:57:09<SeP>2023-11-03 23:34:30<SeP>2023-11-05 09:11:51<SeP>2023-11-06 19:49:12<SeP>2023-11-08 06:26:33<SeP>2023-11-09 17:03:54<SeP>2023-11-11 03:41:15<SeP>2023-11-12 14:18:36<SeP>2023-11-14 00:55:57<SeP>2023-11-15 11:33:18<SeP>2023-11-16 22:10:39<SeP>2023-11-18 08:48:00<SeP>2023-11-19 19:25:21<SeP>2023-11-21 06:02:42<SeP>2023-11-22 16:40:03<SeP>2023-11-24 03:17:24<SeP>2023-11-25 13:54:45<SeP>2023-11-27 00:32:06<SeP>2023-11-28 11:09:27<SeP>2023-11-29 21:46:48<SeP>2023-12-01 08:24:09<SeP>2023-12-02 19:01:30<SeP>2023-12-04 05:38:51<SeP>2023-12-05 16:16:12<SeP>2023-12-07 02:53:33<SeP>2023-12-08 13:30:54<SeP>2023-12-10 00:08:15<SeP>2023-12-11 10:45:36<SeP>2023-12-12 21:22:57<SeP>2023-12-14 08:00:18<SeP>2023-12-15 18:37:39<SeP>2023-12-17 05:15:00<SeP>2023-12-18 15:52:21<SeP>2023-12-20 02:29:42<SeP>2023-12-21 13:07:03<SeP>2023-12-22 23:44:24<SeP>2023-12-24 10:21:45<SeP>2023-12-25 20:59:06<SeP>2023-12-27 07:36:27<SeP>2023-12-28 18:13:48<SeP>2023-12-30 04:51:09<SeP>2023-12-31 15:28:30<SeP>2024-01-02 02:05:51<SeP>2024-01-03 12:43:12<SeP>2024-01-04 23:20:33<SeP>2024-01-06 09:57:54<SeP>2024-01-07 20:35:15<SeP>2024-01-09 07:12:36<SeP>2024-01-10 17:49:57<SeP>2024-01-12 04:27:18<SeP>2024-01-13 15:04:39<SeP>2024-01-15 01:42:00<SeP>2024-01-16 12:19:21<SeP>2024-01-17 22:56:42<SeP>2024-01-19 09:34:03<SeP>2024-01-20 20:11:24<SeP>2024-01-22 06:48:45<SeP>2024-01-23 17:26:06<SeP>2024-01-25 04:03:27<SeP>2024-01-26 14:40:48<SeP>2024-01-28 01:18:09<SeP>2024-01-29 11:55:30<SeP>2024-01-30 22:32:51<SeP>2024-02-01 09:10:12<SeP>2024-02-02 19:47:33<SeP>2024-02-04 06:24:54<SeP>2024-02-05 17:02:15<SeP>2024-02-07 03:39:36<SeP>2024-02-08 14:16:57<SeP>2024-02-10 00:54:18<SeP>2024-02-11 11:31:39<SeP>2024-02-12 22:09:00<SeP>2024-02-14 08:46:21<SeP>2024-02-15 19:23:42<SeP>2024-02-17 06:01:03<SeP>2024-02-18 16:38:24<SeP>2024-02-20 03:15:45<SeP>2024-02-21 13:53:06<SeP>2024-02-23 00:30:27<SeP>2024-02-24 11:07:48<SeP>2024-02-25 21:45:09<SeP>2024-02-27 08:22:30<SeP>2024-02-28 18:59:51<SeP>2024-03-01 05:37:12<SeP>2024-03-02 16:14:33<SeP>2024-03-04 02:51:54<SeP>2024-03-05 13:29:15<SeP>2024-03-07 00:06:36<SeP>2024-03-08 10:43:57<SeP>2024-03-09 21:21:18<SeP>2024-03-11 08:58:39<SeP>2024-03-12 19:36:00<SeP>2024-03-14 06:13:21<SeP>2024-03-15 16:50:42<SeP>2024-03-17 03:28:03<SeP>2024-03-18 14:05:24<SeP>2024-03-20 00:42:45<SeP>2024-03-21 11:20:06<SeP>2024-03-22 21:57:27<SeP>2024-03-24 08:34:48<SeP>2024-03-25 19:12:09<SeP>2024-03-27 05:49:30<SeP>2024-03-28 16:26:51<SeP>2024-03-30 03:04:12<SeP>2024-03-31 13:41:33<SeP>2024-04-02 00:18:54<SeP>2024-04-03 10:56:15<SeP>2024-04-04 21:33:36<SeP>2024-04-06 08:10:57<SeP>2024-04-07 18:48:18<SeP>2024-04-09 05:25:39<SeP>2024-04-10 16:03:00<SeP>2024-04-12 02:40:21<SeP>2024-04-13 13:17:42<SeP>2024-04-14 23:55:03<SeP>2024-04-16 10:32:24<SeP>2024-04-17 21:09:45<SeP>2024-04-19 07:47:06<SeP>2024-04-20 18:24:27<SeP>2024-04-22 05:01:48<SeP>2024-04-23 15:39:09<SeP>2024-04-25 02:16:30<SeP>2024-04-26 12:53:51<SeP>2024-04-27 23:31:12<SeP>2024-04-29 10:08:33<SeP>2024-04-30 20:45:54<SeP>2024-05-02 07:23:15<SeP>2024-05-03 18:00:36<SeP>2024-05-05 04:37:57<SeP>2024-05-06 15:15:18<SeP>2024-05-08 01:52:39<SeP>2024-05-09 12:30:00<SeP>2024-05-10 23:07:21<SeP>2024-05-12 09:44:42<SeP>2024-05-13 20:22:03<SeP>2024-05-15 06:59:24<SeP>2024-05-16 17:36:45<SeP>2024-05-18 04:14:06<SeP>2024-05-19 14:51:27<SeP>2024-05-21 01:28:48<SeP>2024-05-22 12:06:09<SeP>2024-05-23 22:43:30<SeP>2024-05-25 09:20:51<SeP>2024-05-26 19:58:12<SeP>2024-05-28 06:35:33<SeP>2024-05-29 17:12:54<SeP>2024-05-31 03:50:15<SeP>2024-06-01 14:27:36<SeP>2024-06-03 01:04:57<SeP>2024-06-04 11:42:18<SeP>2024-06-05 22:19:39<SeP>2024-06-07 08:57:00<SeP>2024-06-08 19:34:21<SeP>2024-06-10 06:11:42<SeP>2024-06-11 16:49:03<SeP>2024-06-13 03:26:24<SeP>2024-06-14 14:03:45<SeP>2024-06-16 00:41:06<SeP>2024-06-17 11:18:27<SeP>2024-06-18 21:55:48<SeP>2024-06-20 08:33:09<SeP>2024-06-21 19:10:30<SeP>2024-06-23 05:47:51<SeP>2024-06-24 16:25:12<SeP>2024-06-26 03:02:33<SeP>2024-06-27 13:39:54<SeP>2024-06-29 00:17:15<SeP>2024-06-30 10:54:36<SeP>2024-07-01 21:31:57<SeP>2024-07-03 08:09:18<SeP>2024-07-04 18:46:39<SeP>2024-07-06 05:24:00<SeP>2024-07-07 16:01:21<SeP>2024-07-09 02:38:42<SeP>2024-07-10 13:16:03<SeP>2024-07-11 23:53:24<SeP>2024-07-13 10:30:45<SeP>2024-07-14 21:08:06<SeP>2024-07-16 07:45:27<SeP>2024-07-17 18:22:48<SeP>2024-07-19 05:00:09<SeP>2024-07-20 15:37:30<SeP>2024-07-22 02:14:51<SeP>2024-07-23 12:52:12<SeP>2024-07-24 23:29:33<SeP>2024-07-26 10:06:54<SeP>2024-07-27 20:44:15<SeP>2024-07-29 07:21:36<SeP>2024-07-30 17:58:57<SeP>2024-08-01 04:36:18<SeP>2024-08-02 15:13:39<SeP>2024-08-04 01:51:00<SeP>2024-08-05 12:28:21<SeP>2024-08-06 23:05:42<SeP>2024-08-08 09:43:03<SeP>2024-08-09 20:20:24<SeP>2024-08-11 06:57:45<SeP>2024-08-12 17:35:06<SeP>2024-08-14 04:12:27<SeP>2024-08-15 14:49:48<SeP>2024-08-17 01:27:09<SeP>2024-08-18 12:04:30<SeP>2024-08-19 22:41:51<SeP>2024-08-21 09:19:12<SeP>2024-08-22 19:56:33<SeP>2024-08-24 06:33:54<SeP>2024-08-25 17:11:15<SeP>2024-08-27 03:48:36<SeP>2024-08-28 14:25:57<SeP>2024-08-30 01:03:18<SeP>2024-08-31 11:40:39<SeP>2024-09-01 22:18:00<SeP>2024-09-03 08:55:21<SeP>2024-09-04 19:32:42<SeP>2024-09-06 06:10:03<SeP>2024-09-07 16:47:24<SeP>2024-09-09 03:24:45<SeP>2024-09-10 14:02:06<SeP>2024-09-12 00:39:27<SeP>2024-09-13 11:16:48<SeP>2024-09-14 21:54:09<SeP>2024-09-16 08:31:30<SeP>2024-09-17 19:08:51<SeP>2024-09-19 05:46:12<SeP>2024-09-20 16:23:33<SeP>2024-09-22 03:00:54<SeP>2024-09-23 13:38:15<SeP>2024-09-25 00:15:36<SeP>2024-09-26 10:52:57<SeP>2024-09-27 21:30:18<SeP>2024-09-29 08:07:39<SeP>2024-09-30 18:45:00<SeP>2024-10-02 05:22:21<SeP>2024-10-03 15:59:42<SeP>2024-10-05 02:37:03<SeP>2024-10-06 13:14:24<SeP>2024-10-07 23:51:45<SeP>2024-10-09 10:29:06<SeP>2024-10-10 21:06:27<SeP>2024-10-12 07:43:48<SeP>2024-10-13 18:21:09<SeP>2024-10-15 04:58:30<SeP>2024-10-16 15:35:51<SeP>2024-10-18 02:13:12<SeP>2024-10-19 12:50:33<SeP>2024-10-20 23:27:54<SeP>2024-10-22 10:05:15<SeP>2024-10-23 20:42:36<SeP>2024-10-25 07:19:57<SeP>2024-10-26 17:57:18<SeP>2024-10-28 04:34:39<SeP>2024-10-29 15:12:00<SeP>2024-10-31 01:49:21<SeP>2024-11-01 12:26:42<SeP>2024-11-02 23:04:03<SeP>2024-11-04 08:41:24<SeP>2024-11-05 19:18:45<SeP>2024-11-07 05:56:06<SeP>2024-11-08 16:33:27<SeP>2024-11-10 03:10:48<SeP>2024-11-11 13:48:09<SeP>2024-11-13 00:25:30<SeP>2024-11-14 11:02:51<SeP>2024-11-15 21:40:12<SeP>2024-11-17 08:17:33<SeP>2024-11-18 18:54:54<SeP>2024-11-20 05:32:15<SeP>2024-11-21 16:09:36<SeP>2024-11-23 02:46:57<SeP>2024-11-24 13:24:18<SeP>2024-11-26 00:01:39<SeP>2024-11-27 10:39:00<SeP>2024-11-28 21:16:21<SeP>2024-11-30 07:53:42<SeP>2024-12-01 18:31:03<SeP>2024-12-03 05:08:24<SeP>2024-12-04 15:45:45<SeP>2024-12-06 02:23:06<SeP>2024-12-07 13:00:27<SeP>2024-12-08 23:37:48<SeP>2024-12-10 10:15:09<SeP>2024-12-11 20:52:30<SeP>2024-12-13 07:29:51<SeP>2024-12-14 18:07:12<SeP>2024-12-16 04:44:33<SeP>2024-12-17 15:21:54<SeP>2024-12-19 01:59:15<SeP>2024-12-20 12:36:36<SeP>2024-12-21 23:13:57<SeP>2024-12-23 09:51:18<SeP>2024-12-24 20:28:39<SeP>2024-12-26 07:06:00<SeP>2024-12-27 17:43:21<SeP>2024-12-29 04:20:42<SeP>2024-12-30 14:58:03<SeP>2025-01-01 01:35:24<SeP>2025-01-02 12:12:45<SeP>2025-01-03 22:50:06<SeP>2025-01-05 09:27:27<SeP>2025-01-06 20:04:48<SeP>2025-01-08 06:42:09<SeP>2025-01-09 17:19:30<SeP>2025-01-11 03:56:51<SeP>2025-01-12 14:34:12<SeP>2025-01-14 01:11:33<SeP>2025-01-15 11:48:54<SeP>2025-01-16 22:26:15<SeP>2025-01-18 09:03:36<SeP>2025-01-19 19:40:57<SeP>2025-01-21 06:18:18<SeP>2025-01-22 16:55:39<SeP>2025-01-24 03:33:00<SeP>2025-01-25 14:10:21<SeP>2025-01-27 00:47:42<SeP>2025-01-28 11:25:03<SeP>2025-01-29 22:02:24<SeP>2025-01-31 08:39:45<SeP>2025-02-01 19:17:06<SeP>2025-02-03 05:54:27<SeP>2025-02-04 16:31:48<SeP>2025-02-06 03:09:09<SeP>2025-02-07 13:46:30<SeP>2025-02-09 00:23:51<SeP>2025-02-10 11:01:12<SeP>2025-02-11 21:38:33<SeP>2025-02-13 08:15:54<SeP>2025-02-14 18:53:15<SeP>2025-02-16 05:30:36<SeP>2025-02-17 16:07:57<SeP>2025-02-19 02:45:18<SeP>2025-02-20 13:22:39";
  const itemLabel       = "Escaneos";
  const itemData        = "759<SeP>1458<SeP>1376<SeP>1425<SeP>1261<SeP>1660<SeP>981<SeP>978<SeP>1100<SeP>3344<SeP>1492<SeP>2816<SeP>1867<SeP>2484<SeP>749<SeP>828<SeP>1415<SeP>1770<SeP>2160<SeP>1531<SeP>1586<SeP>929<SeP>846<SeP>1440<SeP>817<SeP>949<SeP>728<SeP>902<SeP>3619<SeP>956<SeP>827<SeP>1364<SeP>1223<SeP>833<SeP>2172<SeP>2028<SeP>2900<SeP>1737<SeP>1560<SeP>1598<SeP>1291<SeP>1620<SeP>1914<SeP>2041<SeP>1603<SeP>1686<SeP>1577<SeP>1628<SeP>1677<SeP>1743<SeP>1684<SeP>1788<SeP>1772<SeP>1583<SeP>3172<SeP>1343<SeP>1726<SeP>2009<SeP>1879<SeP>2108<SeP>1844<SeP>3339<SeP>1267<SeP>1575<SeP>1493<SeP>1299<SeP>1875<SeP>1662<SeP>1216<SeP>1373<SeP>1381<SeP>1141<SeP>2275<SeP>1190<SeP>1146<SeP>1309<SeP>4694<SeP>4663<SeP>1365<SeP>1306<SeP>1545<SeP>2072<SeP>1117<SeP>3466<SeP>4415<SeP>1574<SeP>1492<SeP>953<SeP>3260<SeP>1209<SeP>1063<SeP>1038<SeP>1084<SeP>1013<SeP>3064<SeP>920<SeP>1061<SeP>2103<SeP>4392<SeP>4653<SeP>978<SeP>926<SeP>955<SeP>966<SeP>926<SeP>928<SeP>1091<SeP>2129<SeP>3475<SeP>1699<SeP>1215<SeP>1366<SeP>560<SeP>1409<SeP>1290<SeP>1180<SeP>853<SeP>1962<SeP>1403<SeP>1243<SeP>1025<SeP>943<SeP>1126<SeP>761<SeP>820<SeP>833<SeP>817<SeP>863<SeP>1075<SeP>776<SeP>792<SeP>876<SeP>943<SeP>901<SeP>563<SeP>889<SeP>853<SeP>805<SeP>916<SeP>821<SeP>805<SeP>740<SeP>834<SeP>1068<SeP>760<SeP>838<SeP>959<SeP>857<SeP>1130<SeP>953<SeP>791<SeP>486<SeP>919<SeP>817<SeP>1264<SeP>877<SeP>934<SeP>1202<SeP>1299<SeP>871<SeP>916<SeP>887<SeP>976<SeP>689<SeP>1017<SeP>1027<SeP>949<SeP>846<SeP>894<SeP>1058<SeP>997<SeP>1000<SeP>1002<SeP>1147<SeP>887<SeP>911<SeP>1125<SeP>2053<SeP>1289<SeP>1001<SeP>1006<SeP>1138<SeP>966<SeP>993<SeP>855<SeP>606<SeP>916<SeP>1158<SeP>905<SeP>920<SeP>1021<SeP>1335<SeP>1024<SeP>1146<SeP>1274<SeP>1198<SeP>1253<SeP>1306<SeP>1239<SeP>1575<SeP>1840<SeP>1510<SeP>1201<SeP>731<SeP>938<SeP>1042<SeP>1111<SeP>488<SeP>777<SeP>830<SeP>984<SeP>1422<SeP>5811<SeP>2559<SeP>1949<SeP>1215<SeP>943<SeP>919<SeP>943<SeP>942<SeP>958<SeP>1063<SeP>1056<SeP>1002<SeP>1376<SeP>2046<SeP>991<SeP>1227<SeP>1230<SeP>1246<SeP>1117<SeP>1044<SeP>943<SeP>1095<SeP>1100<SeP>965<SeP>1102<SeP>1001<SeP>1186<SeP>859<SeP>1022<SeP>1363<SeP>1140<SeP>995<SeP>1323<SeP>1261<SeP>1167<SeP>1525<SeP>1200<SeP>1081<SeP>1180<SeP>1151<SeP>1941<SeP>1263<SeP>1819<SeP>1714<SeP>1369<SeP>1991<SeP>1633<SeP>1172<SeP>1164<SeP>1134<SeP>1174<SeP>1668<SeP>1206<SeP>1198<SeP>1463<SeP>1843<SeP>1279<SeP>1463<SeP>1387<SeP>1374<SeP>1138<SeP>1106<SeP>1289<SeP>1110<SeP>1206<SeP>1273<SeP>1261<SeP>1071<SeP>2029<SeP>1284<SeP>1253<SeP>1666<SeP>1395<SeP>1275<SeP>977<SeP>968<SeP>1006<SeP>1002<SeP>799<SeP>990<SeP>1738<SeP>1157<SeP>1057<SeP>1114<SeP>961<SeP>768<SeP>1048<SeP>1377<SeP>840<SeP>917<SeP>873<SeP>1277<SeP>1495<SeP>1506<SeP>1159<SeP>1095<SeP>932<SeP>1594<SeP>1274<SeP>1058<SeP>1122<SeP>1012<SeP>1554<SeP>1027<SeP>885<SeP>1198<SeP>1066<SeP>908<SeP>884<SeP>1025<SeP>1404<SeP>1474<SeP>1437<SeP>1402<SeP>1381<SeP>927<SeP>1118<SeP>1261<SeP>1044<SeP>983<SeP>1207<SeP>1008<SeP>991<SeP>1266<SeP>1604<SeP>1269<SeP>1553<SeP>1353<SeP>1298<SeP>1522<SeP>1412<SeP>1509<SeP>1301<SeP>1445<SeP>1209<SeP>1800<SeP>1243<SeP>1467<SeP>1604<SeP>1301<SeP>1433<SeP>1320<SeP>1133<SeP>1300<SeP>1386<SeP>1661<SeP>1338<SeP>1329<SeP>1141<SeP>1468<SeP>1123<SeP>1396<SeP>1132<SeP>1652<SeP>1873<SeP>1325<SeP>924<SeP>981<SeP>1758<SeP>1466<SeP>1268<SeP>1383<SeP>1039<SeP>1287<SeP>1268<SeP>1529<SeP>1289<SeP>1462<SeP>1623<SeP>1364<SeP>1504<SeP>1722<SeP>1258<SeP>1534<SeP>1342<SeP>1779<SeP>1575<SeP>999<SeP>1048<SeP>2036<SeP>1891<SeP>1633<SeP>1739<SeP>1692<SeP>1540<SeP>1506<SeP>1665<SeP>1525";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:37:21<SeP>2023-07-28 21:14:42<SeP>2023-07-30 07:52:03<SeP>2023-07-31 18:29:24<SeP>2023-08-02 05:06:45<SeP>2023-08-03 15:44:06<SeP>2023-08-05 02:21:27<SeP>2023-08-06 12:58:48<SeP>2023-08-07 23:36:09<SeP>2023-08-09 10:13:30<SeP>2023-08-10 20:50:51<SeP>2023-08-12 07:28:12<SeP>2023-08-13 18:05:33<SeP>2023-08-15 04:42:54<SeP>2023-08-16 15:20:15<SeP>2023-08-18 01:57:36<SeP>2023-08-19 12:34:57<SeP>2023-08-20 23:12:18<SeP>2023-08-22 09:49:39<SeP>2023-08-23 20:27:00<SeP>2023-08-25 07:04:21<SeP>2023-08-26 17:41:42<SeP>2023-08-28 04:19:03<SeP>2023-08-29 14:56:24<SeP>2023-08-31 01:33:45<SeP>2023-09-01 12:11:06<SeP>2023-09-02 22:48:27<SeP>2023-09-04 09:25:48<SeP>2023-09-05 20:03:09<SeP>2023-09-07 06:40:30<SeP>2023-09-08 17:17:51<SeP>2023-09-10 03:55:12<SeP>2023-09-11 14:32:33<SeP>2023-09-13 01:09:54<SeP>2023-09-14 11:47:15<SeP>2023-09-15 22:24:36<SeP>2023-09-17 09:01:57<SeP>2023-09-18 19:39:18<SeP>2023-09-20 06:16:39<SeP>2023-09-21 16:54:00<SeP>2023-09-23 03:31:21<SeP>2023-09-24 14:08:42<SeP>2023-09-26 00:46:03<SeP>2023-09-27 11:23:24<SeP>2023-09-28 22:00:45<SeP>2023-09-30 08:38:06<SeP>2023-10-01 19:15:27<SeP>2023-10-03 05:52:48<SeP>2023-10-04 16:30:09<SeP>2023-10-06 03:07:30<SeP>2023-10-07 13:44:51<SeP>2023-10-09 00:22:12<SeP>2023-10-10 10:59:33<SeP>2023-10-11 21:36:54<SeP>2023-10-13 08:14:15<SeP>2023-10-14 18:51:36<SeP>2023-10-16 05:28:57<SeP>2023-10-17 16:06:18<SeP>2023-10-19 02:43:39<SeP>2023-10-20 13:21:00<SeP>2023-10-21 23:58:21<SeP>2023-10-23 10:35:42<SeP>2023-10-24 21:13:03<SeP>2023-10-26 07:50:24<SeP>2023-10-27 18:27:45<SeP>2023-10-29 05:05:06<SeP>2023-10-30 15:42:27<SeP>2023-11-01 02:19:48<SeP>2023-11-02 12:57:09<SeP>2023-11-03 23:34:30<SeP>2023-11-05 09:11:51<SeP>2023-11-06 19:49:12<SeP>2023-11-08 06:26:33<SeP>2023-11-09 17:03:54<SeP>2023-11-11 03:41:15<SeP>2023-11-12 14:18:36<SeP>2023-11-14 00:55:57<SeP>2023-11-15 11:33:18<SeP>2023-11-16 22:10:39<SeP>2023-11-18 08:48:00<SeP>2023-11-19 19:25:21<SeP>2023-11-21 06:02:42<SeP>2023-11-22 16:40:03<SeP>2023-11-24 03:17:24<SeP>2023-11-25 13:54:45<SeP>2023-11-27 00:32:06<SeP>2023-11-28 11:09:27<SeP>2023-11-29 21:46:48<SeP>2023-12-01 08:24:09<SeP>2023-12-02 19:01:30<SeP>2023-12-04 05:38:51<SeP>2023-12-05 16:16:12<SeP>2023-12-07 02:53:33<SeP>2023-12-08 13:30:54<SeP>2023-12-10 00:08:15<SeP>2023-12-11 10:45:36<SeP>2023-12-12 21:22:57<SeP>2023-12-14 08:00:18<SeP>2023-12-15 18:37:39<SeP>2023-12-17 05:15:00<SeP>2023-12-18 15:52:21<SeP>2023-12-20 02:29:42<SeP>2023-12-21 13:07:03<SeP>2023-12-22 23:44:24<SeP>2023-12-24 10:21:45<SeP>2023-12-25 20:59:06<SeP>2023-12-27 07:36:27<SeP>2023-12-28 18:13:48<SeP>2023-12-30 04:51:09<SeP>2023-12-31 15:28:30<SeP>2024-01-02 02:05:51<SeP>2024-01-03 12:43:12<SeP>2024-01-04 23:20:33<SeP>2024-01-06 09:57:54<SeP>2024-01-07 20:35:15<SeP>2024-01-09 07:12:36<SeP>2024-01-10 17:49:57<SeP>2024-01-12 04:27:18<SeP>2024-01-13 15:04:39<SeP>2024-01-15 01:42:00<SeP>2024-01-16 12:19:21<SeP>2024-01-17 22:56:42<SeP>2024-01-19 09:34:03<SeP>2024-01-20 20:11:24<SeP>2024-01-22 06:48:45<SeP>2024-01-23 17:26:06<SeP>2024-01-25 04:03:27<SeP>2024-01-26 14:40:48<SeP>2024-01-28 01:18:09<SeP>2024-01-29 11:55:30<SeP>2024-01-30 22:32:51<SeP>2024-02-01 09:10:12<SeP>2024-02-02 19:47:33<SeP>2024-02-04 06:24:54<SeP>2024-02-05 17:02:15<SeP>2024-02-07 03:39:36<SeP>2024-02-08 14:16:57<SeP>2024-02-10 00:54:18<SeP>2024-02-11 11:31:39<SeP>2024-02-12 22:09:00<SeP>2024-02-14 08:46:21<SeP>2024-02-15 19:23:42<SeP>2024-02-17 06:01:03<SeP>2024-02-18 16:38:24<SeP>2024-02-20 03:15:45<SeP>2024-02-21 13:53:06<SeP>2024-02-23 00:30:27<SeP>2024-02-24 11:07:48<SeP>2024-02-25 21:45:09<SeP>2024-02-27 08:22:30<SeP>2024-02-28 18:59:51<SeP>2024-03-01 05:37:12<SeP>2024-03-02 16:14:33<SeP>2024-03-04 02:51:54<SeP>2024-03-05 13:29:15<SeP>2024-03-07 00:06:36<SeP>2024-03-08 10:43:57<SeP>2024-03-09 21:21:18<SeP>2024-03-11 08:58:39<SeP>2024-03-12 19:36:00<SeP>2024-03-14 06:13:21<SeP>2024-03-15 16:50:42<SeP>2024-03-17 03:28:03<SeP>2024-03-18 14:05:24<SeP>2024-03-20 00:42:45<SeP>2024-03-21 11:20:06<SeP>2024-03-22 21:57:27<SeP>2024-03-24 08:34:48<SeP>2024-03-25 19:12:09<SeP>2024-03-27 05:49:30<SeP>2024-03-28 16:26:51<SeP>2024-03-30 03:04:12<SeP>2024-03-31 13:41:33<SeP>2024-04-02 00:18:54<SeP>2024-04-03 10:56:15<SeP>2024-04-04 21:33:36<SeP>2024-04-06 08:10:57<SeP>2024-04-07 18:48:18<SeP>2024-04-09 05:25:39<SeP>2024-04-10 16:03:00<SeP>2024-04-12 02:40:21<SeP>2024-04-13 13:17:42<SeP>2024-04-14 23:55:03<SeP>2024-04-16 10:32:24<SeP>2024-04-17 21:09:45<SeP>2024-04-19 07:47:06<SeP>2024-04-20 18:24:27<SeP>2024-04-22 05:01:48<SeP>2024-04-23 15:39:09<SeP>2024-04-25 02:16:30<SeP>2024-04-26 12:53:51<SeP>2024-04-27 23:31:12<SeP>2024-04-29 10:08:33<SeP>2024-04-30 20:45:54<SeP>2024-05-02 07:23:15<SeP>2024-05-03 18:00:36<SeP>2024-05-05 04:37:57<SeP>2024-05-06 15:15:18<SeP>2024-05-08 01:52:39<SeP>2024-05-09 12:30:00<SeP>2024-05-10 23:07:21<SeP>2024-05-12 09:44:42<SeP>2024-05-13 20:22:03<SeP>2024-05-15 06:59:24<SeP>2024-05-16 17:36:45<SeP>2024-05-18 04:14:06<SeP>2024-05-19 14:51:27<SeP>2024-05-21 01:28:48<SeP>2024-05-22 12:06:09<SeP>2024-05-23 22:43:30<SeP>2024-05-25 09:20:51<SeP>2024-05-26 19:58:12<SeP>2024-05-28 06:35:33<SeP>2024-05-29 17:12:54<SeP>2024-05-31 03:50:15<SeP>2024-06-01 14:27:36<SeP>2024-06-03 01:04:57<SeP>2024-06-04 11:42:18<SeP>2024-06-05 22:19:39<SeP>2024-06-07 08:57:00<SeP>2024-06-08 19:34:21<SeP>2024-06-10 06:11:42<SeP>2024-06-11 16:49:03<SeP>2024-06-13 03:26:24<SeP>2024-06-14 14:03:45<SeP>2024-06-16 00:41:06<SeP>2024-06-17 11:18:27<SeP>2024-06-18 21:55:48<SeP>2024-06-20 08:33:09<SeP>2024-06-21 19:10:30<SeP>2024-06-23 05:47:51<SeP>2024-06-24 16:25:12<SeP>2024-06-26 03:02:33<SeP>2024-06-27 13:39:54<SeP>2024-06-29 00:17:15<SeP>2024-06-30 10:54:36<SeP>2024-07-01 21:31:57<SeP>2024-07-03 08:09:18<SeP>2024-07-04 18:46:39<SeP>2024-07-06 05:24:00<SeP>2024-07-07 16:01:21<SeP>2024-07-09 02:38:42<SeP>2024-07-10 13:16:03<SeP>2024-07-11 23:53:24<SeP>2024-07-13 10:30:45<SeP>2024-07-14 21:08:06<SeP>2024-07-16 07:45:27<SeP>2024-07-17 18:22:48<SeP>2024-07-19 05:00:09<SeP>2024-07-20 15:37:30<SeP>2024-07-22 02:14:51<SeP>2024-07-23 12:52:12<SeP>2024-07-24 23:29:33<SeP>2024-07-26 10:06:54<SeP>2024-07-27 20:44:15<SeP>2024-07-29 07:21:36<SeP>2024-07-30 17:58:57<SeP>2024-08-01 04:36:18<SeP>2024-08-02 15:13:39<SeP>2024-08-04 01:51:00<SeP>2024-08-05 12:28:21<SeP>2024-08-06 23:05:42<SeP>2024-08-08 09:43:03<SeP>2024-08-09 20:20:24<SeP>2024-08-11 06:57:45<SeP>2024-08-12 17:35:06<SeP>2024-08-14 04:12:27<SeP>2024-08-15 14:49:48<SeP>2024-08-17 01:27:09<SeP>2024-08-18 12:04:30<SeP>2024-08-19 22:41:51<SeP>2024-08-21 09:19:12<SeP>2024-08-22 19:56:33<SeP>2024-08-24 06:33:54<SeP>2024-08-25 17:11:15<SeP>2024-08-27 03:48:36<SeP>2024-08-28 14:25:57<SeP>2024-08-30 01:03:18<SeP>2024-08-31 11:40:39<SeP>2024-09-01 22:18:00<SeP>2024-09-03 08:55:21<SeP>2024-09-04 19:32:42<SeP>2024-09-06 06:10:03<SeP>2024-09-07 16:47:24<SeP>2024-09-09 03:24:45<SeP>2024-09-10 14:02:06<SeP>2024-09-12 00:39:27<SeP>2024-09-13 11:16:48<SeP>2024-09-14 21:54:09<SeP>2024-09-16 08:31:30<SeP>2024-09-17 19:08:51<SeP>2024-09-19 05:46:12<SeP>2024-09-20 16:23:33<SeP>2024-09-22 03:00:54<SeP>2024-09-23 13:38:15<SeP>2024-09-25 00:15:36<SeP>2024-09-26 10:52:57<SeP>2024-09-27 21:30:18<SeP>2024-09-29 08:07:39<SeP>2024-09-30 18:45:00<SeP>2024-10-02 05:22:21<SeP>2024-10-03 15:59:42<SeP>2024-10-05 02:37:03<SeP>2024-10-06 13:14:24<SeP>2024-10-07 23:51:45<SeP>2024-10-09 10:29:06<SeP>2024-10-10 21:06:27<SeP>2024-10-12 07:43:48<SeP>2024-10-13 18:21:09<SeP>2024-10-15 04:58:30<SeP>2024-10-16 15:35:51<SeP>2024-10-18 02:13:12<SeP>2024-10-19 12:50:33<SeP>2024-10-20 23:27:54<SeP>2024-10-22 10:05:15<SeP>2024-10-23 20:42:36<SeP>2024-10-25 07:19:57<SeP>2024-10-26 17:57:18<SeP>2024-10-28 04:34:39<SeP>2024-10-29 15:12:00<SeP>2024-10-31 01:49:21<SeP>2024-11-01 12:26:42<SeP>2024-11-02 23:04:03<SeP>2024-11-04 08:41:24<SeP>2024-11-05 19:18:45<SeP>2024-11-07 05:56:06<SeP>2024-11-08 16:33:27<SeP>2024-11-10 03:10:48<SeP>2024-11-11 13:48:09<SeP>2024-11-13 00:25:30<SeP>2024-11-14 11:02:51<SeP>2024-11-15 21:40:12<SeP>2024-11-17 08:17:33<SeP>2024-11-18 18:54:54<SeP>2024-11-20 05:32:15<SeP>2024-11-21 16:09:36<SeP>2024-11-23 02:46:57<SeP>2024-11-24 13:24:18<SeP>2024-11-26 00:01:39<SeP>2024-11-27 10:39:00<SeP>2024-11-28 21:16:21<SeP>2024-11-30 07:53:42<SeP>2024-12-01 18:31:03<SeP>2024-12-03 05:08:24<SeP>2024-12-04 15:45:45<SeP>2024-12-06 02:23:06<SeP>2024-12-07 13:00:27<SeP>2024-12-08 23:37:48<SeP>2024-12-10 10:15:09<SeP>2024-12-11 20:52:30<SeP>2024-12-13 07:29:51<SeP>2024-12-14 18:07:12<SeP>2024-12-16 04:44:33<SeP>2024-12-17 15:21:54<SeP>2024-12-19 01:59:15<SeP>2024-12-20 12:36:36<SeP>2024-12-21 23:13:57<SeP>2024-12-23 09:51:18<SeP>2024-12-24 20:28:39<SeP>2024-12-26 07:06:00<SeP>2024-12-27 17:43:21<SeP>2024-12-29 04:20:42<SeP>2024-12-30 14:58:03<SeP>2025-01-01 01:35:24<SeP>2025-01-02 12:12:45<SeP>2025-01-03 22:50:06<SeP>2025-01-05 09:27:27<SeP>2025-01-06 20:04:48<SeP>2025-01-08 06:42:09<SeP>2025-01-09 17:19:30<SeP>2025-01-11 03:56:51<SeP>2025-01-12 14:34:12<SeP>2025-01-14 01:11:33<SeP>2025-01-15 11:48:54<SeP>2025-01-16 22:26:15<SeP>2025-01-18 09:03:36<SeP>2025-01-19 19:40:57<SeP>2025-01-21 06:18:18<SeP>2025-01-22 16:55:39<SeP>2025-01-24 03:33:00<SeP>2025-01-25 14:10:21<SeP>2025-01-27 00:47:42<SeP>2025-01-28 11:25:03<SeP>2025-01-29 22:02:24<SeP>2025-01-31 08:39:45<SeP>2025-02-01 19:17:06<SeP>2025-02-03 05:54:27<SeP>2025-02-04 16:31:48<SeP>2025-02-06 03:09:09<SeP>2025-02-07 13:46:30<SeP>2025-02-09 00:23:51<SeP>2025-02-10 11:01:12<SeP>2025-02-11 21:38:33<SeP>2025-02-13 08:15:54<SeP>2025-02-14 18:53:15<SeP>2025-02-16 05:30:36<SeP>2025-02-17 16:07:57<SeP>2025-02-19 02:45:18<SeP>2025-02-20 13:22:39";
  const itemLabel       = "Ataques";
  const itemData        = "152<SeP>614<SeP>970<SeP>717<SeP>541<SeP>214<SeP>6968<SeP>505<SeP>9188<SeP>977<SeP>313<SeP>1205<SeP>807<SeP>707<SeP>149<SeP>463<SeP>122<SeP>764<SeP>280<SeP>3700<SeP>7213<SeP>7489<SeP>6918<SeP>7956<SeP>419<SeP>319<SeP>341<SeP>218<SeP>385<SeP>5882<SeP>75<SeP>385<SeP>230<SeP>444<SeP>885<SeP>9876<SeP>9009<SeP>9967<SeP>9818<SeP>5607<SeP>6090<SeP>8051<SeP>7651<SeP>8903<SeP>8543<SeP>7378<SeP>8400<SeP>8779<SeP>7719<SeP>9203<SeP>5464<SeP>5565<SeP>12847<SeP>6610<SeP>7292<SeP>7515<SeP>10162<SeP>15118<SeP>19569<SeP>8280<SeP>9224<SeP>10054<SeP>6349<SeP>9029<SeP>7871<SeP>8727<SeP>9040<SeP>5817<SeP>6232<SeP>7020<SeP>7037<SeP>2198<SeP>6110<SeP>5172<SeP>6707<SeP>6746<SeP>8134<SeP>2404<SeP>6257<SeP>6397<SeP>6110<SeP>5316<SeP>6578<SeP>4562<SeP>6552<SeP>5815<SeP>5606<SeP>5454<SeP>5589<SeP>21821<SeP>10838<SeP>35425<SeP>7097<SeP>8369<SeP>5901<SeP>6234<SeP>12451<SeP>6212<SeP>6227<SeP>3803<SeP>4755<SeP>6122<SeP>5117<SeP>8590<SeP>5317<SeP>6504<SeP>5002<SeP>4627<SeP>8387<SeP>8285<SeP>7591<SeP>6992<SeP>3846<SeP>8261<SeP>10325<SeP>7286<SeP>2735<SeP>5059<SeP>7446<SeP>7549<SeP>5703<SeP>7628<SeP>8370<SeP>2525<SeP>2632<SeP>1007<SeP>1624<SeP>2409<SeP>1913<SeP>825<SeP>1307<SeP>830<SeP>1463<SeP>1299<SeP>1091<SeP>1144<SeP>840<SeP>1056<SeP>928<SeP>1313<SeP>1471<SeP>1032<SeP>1650<SeP>2026<SeP>1453<SeP>9876<SeP>7076<SeP>10052<SeP>8674<SeP>6062<SeP>11207<SeP>5531<SeP>10217<SeP>9081<SeP>9835<SeP>11462<SeP>8134<SeP>13034<SeP>12183<SeP>6631<SeP>12434<SeP>5042<SeP>5775<SeP>6258<SeP>23696<SeP>7776<SeP>7764<SeP>8364<SeP>16660<SeP>9662<SeP>7446<SeP>4521<SeP>7194<SeP>9040<SeP>24312<SeP>7273<SeP>9554<SeP>10638<SeP>4735<SeP>6088<SeP>5918<SeP>16231<SeP>4226<SeP>13061<SeP>8011<SeP>6340<SeP>8495<SeP>7591<SeP>2997<SeP>6038<SeP>5690<SeP>7076<SeP>6421<SeP>6103<SeP>7267<SeP>18643<SeP>6711<SeP>8858<SeP>5063<SeP>7577<SeP>8164<SeP>9869<SeP>5591<SeP>2505<SeP>7376<SeP>3481<SeP>4404<SeP>3939<SeP>1499<SeP>616<SeP>639<SeP>201<SeP>541<SeP>582<SeP>797<SeP>335<SeP>931<SeP>1071<SeP>1387<SeP>2977<SeP>22890<SeP>599<SeP>4472<SeP>3205<SeP>2499<SeP>7877<SeP>2738<SeP>4114<SeP>3051<SeP>3218<SeP>2961<SeP>3242<SeP>4065<SeP>2483<SeP>2301<SeP>3432<SeP>1867<SeP>2045<SeP>1892<SeP>1326<SeP>1395<SeP>1412<SeP>822<SeP>1904<SeP>2036<SeP>25888<SeP>1795<SeP>4062<SeP>3308<SeP>2430<SeP>3583<SeP>2757<SeP>1749<SeP>3666<SeP>1981<SeP>4118<SeP>2011<SeP>2977<SeP>3911<SeP>4466<SeP>4870<SeP>5201<SeP>4497<SeP>2401<SeP>2746<SeP>4569<SeP>3510<SeP>10046<SeP>4738<SeP>3717<SeP>2528<SeP>3047<SeP>3686<SeP>4300<SeP>3119<SeP>3350<SeP>2258<SeP>5026<SeP>4771<SeP>2945<SeP>6149<SeP>4147<SeP>6133<SeP>4538<SeP>5380<SeP>5009<SeP>22112<SeP>5617<SeP>10666<SeP>1740<SeP>3229<SeP>3872<SeP>3637<SeP>5298<SeP>3304<SeP>4855<SeP>4494<SeP>4495<SeP>3398<SeP>3889<SeP>2204<SeP>1340<SeP>2219<SeP>3534<SeP>2211<SeP>2888<SeP>3723<SeP>4410<SeP>3504<SeP>3294<SeP>4258<SeP>3411<SeP>3112<SeP>4020<SeP>8340<SeP>6067<SeP>5314<SeP>4852<SeP>4903<SeP>3811<SeP>3633<SeP>4640<SeP>4935<SeP>5411<SeP>4747<SeP>4740<SeP>1994<SeP>741<SeP>1589<SeP>1757<SeP>1115<SeP>1074<SeP>2082<SeP>1089<SeP>1629<SeP>3660<SeP>5042<SeP>6441<SeP>33972<SeP>4773<SeP>4272<SeP>21861<SeP>7494<SeP>5109<SeP>6072<SeP>4472<SeP>24261<SeP>4765<SeP>5117<SeP>4676<SeP>5025<SeP>6221<SeP>29615<SeP>4957<SeP>3989<SeP>3726<SeP>3693<SeP>5715<SeP>4949<SeP>2925<SeP>3140<SeP>4374<SeP>5205<SeP>5258<SeP>17909<SeP>4903<SeP>5922<SeP>5652<SeP>2537<SeP>2786<SeP>3552<SeP>4782<SeP>4040<SeP>3804<SeP>2675<SeP>3682<SeP>2505<SeP>4361<SeP>4490<SeP>8185<SeP>10501<SeP>7958<SeP>8618<SeP>9119<SeP>6819<SeP>5756<SeP>5106<SeP>4126<SeP>24267<SeP>4874<SeP>3115<SeP>4599<SeP>3198<SeP>11338<SeP>5488<SeP>3645<SeP>4998<SeP>3969<SeP>2877<SeP>9223";
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
  const itemData    = "688952<SeP>359497<SeP>205275<SeP>178368<SeP>108900<SeP>87169<SeP>82485<SeP>79793<SeP>67642<SeP>65240";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "293379<SeP>41413<SeP>39835<SeP>34819<SeP>14332<SeP>10587<SeP>7430<SeP>7212<SeP>6943<SeP>6797";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Attacks";
  const itemData    = "395573<SeP>324678<SeP>202571<SeP>138533<SeP>94568<SeP>80372<SeP>79900<SeP>69206<SeP>58028<SeP>56188";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "360143<SeP>259476<SeP>233824<SeP>143825<SeP>66389<SeP>58203<SeP>55708<SeP>47344<SeP>41611<SeP>35535";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "154127<SeP>52635<SeP>40490<SeP>31918<SeP>21885<SeP>12594<SeP>10675<SeP>9272<SeP>7614<SeP>7425";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "347549<SeP>258713<SeP>121940<SeP>79697<SeP>54754<SeP>47528<SeP>41741<SeP>30532<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Hong Kong";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "688952<SeP>359497<SeP>205275<SeP>178368<SeP>108900<SeP>87169<SeP>82485<SeP>79793<SeP>67642<SeP>65240";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "293379<SeP>41413<SeP>39835<SeP>34819<SeP>14332<SeP>10587<SeP>7430<SeP>7212<SeP>6943<SeP>6797";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Ataques";
  const itemData    = "395573<SeP>324678<SeP>202571<SeP>138533<SeP>94568<SeP>80372<SeP>79900<SeP>69206<SeP>58028<SeP>56188";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "360143<SeP>259476<SeP>233824<SeP>143825<SeP>66389<SeP>58203<SeP>55708<SeP>47344<SeP>41611<SeP>35535";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "154127<SeP>52635<SeP>40490<SeP>31918<SeP>21885<SeP>12594<SeP>10675<SeP>9272<SeP>7614<SeP>7425";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "347549<SeP>258713<SeP>121940<SeP>79697<SeP>54754<SeP>47528<SeP>41741<SeP>30532<SeP>29324<SeP>26846";
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
