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
  document.getElementById(varElement).innerHTML = "2025-3-15";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.9";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.9";
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
  const metricData    = "2868414";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "564524";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2303890";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "141594";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1444939";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "858951";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54881";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "252503";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "606448";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "44130";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2868414";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "564524";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2303890";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "141594";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1444939";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "858951";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54881";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "252503";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "606448";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "44130";
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
  const incomingData = "2868414<SeP>564524<SeP>2303890<SeP>141594";
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
  const incomingData = "2303890<SeP>1444939<SeP>858951<SeP>54881";
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
  const incomingData = "858951<SeP>252503<SeP>606448<SeP>44130";
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
  const incomingData = "2563209<SeP>260070<SeP>2303139";
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
  const incomingData = "388214<SeP>150<SeP>388064<SeP>235";
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
  const incomingData = "2868414<SeP>564524<SeP>2303890<SeP>141594";
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
  const incomingData = "2303890<SeP>1444939<SeP>858951<SeP>54881";
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
  const incomingData = "858951<SeP>252503<SeP>606448<SeP>44130";
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
  const incomingData = "2563209<SeP>260070<SeP>2303139";
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
  const incomingData = "388214<SeP>150<SeP>388064<SeP>235";
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
  const column3Data   = "222919<SeP>204438<SeP>13013<SeP>12478<SeP>9839<SeP>9497<SeP>6459<SeP>5593<SeP>4638<SeP>3530";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5";
  const column2Data  = "214387<SeP>43235<SeP>972<SeP>485<SeP>479<SeP>461<SeP>376<SeP>281<SeP>245<SeP>227";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>redir";
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
  const column2Data  = "2425130<SeP>443284";
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
  const column3Data   = "222919<SeP>204438<SeP>13013<SeP>12478<SeP>9839<SeP>9497<SeP>6459<SeP>5593<SeP>4638<SeP>3530";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>8a68d1c08ea31250063f70b1ccb5051db1f7ab6e17d46e9dd3cc292b9849878b<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>83317c7479e8564a8ea736747b9e0b26f2630ae14c104c427eb9bed5cbdfc2bd<SeP>81d85058989eb31b2f17e5fa935646a750e1c611f037021178660566c1655184<SeP>76478b17bcbcfac7a7137d534cf5fb8ce7d0d81290eeabe0d25b5f514e25b44c<SeP>db02b17aa673418d5a02d1172c502e9f6acf05a4de7d62b756dbee47b685adf5";
  const column2Data  = "214387<SeP>43235<SeP>972<SeP>485<SeP>479<SeP>461<SeP>376<SeP>281<SeP>245<SeP>227";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>redir";
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
  const column2Data  = "2425130<SeP>443284";
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
        "name": "traffic between 2023-07-26 and 2025-03-13"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          401634,50
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
        "name": "scans between 2023-07-26 and 2025-03-13"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          231343,30,
          401634,50
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
        "name": "attacks between 2023-07-26 and 2025-03-13"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          170291,23,
          401634,50
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
        "name": "tráfico entre 2023-07-26 y 2025-03-13"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          401634,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-13"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          231343,30,
          401634,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-13"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          170291,23,
          401634,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:52:48<SeP>2023-07-28 23:45:36<SeP>2023-07-30 11:38:24<SeP>2023-07-31 23:31:12<SeP>2023-08-02 11:24:00<SeP>2023-08-03 23:16:48<SeP>2023-08-05 11:09:36<SeP>2023-08-06 23:02:24<SeP>2023-08-08 10:55:12<SeP>2023-08-09 22:48:00<SeP>2023-08-11 10:40:48<SeP>2023-08-12 22:33:36<SeP>2023-08-14 10:26:24<SeP>2023-08-15 22:19:12<SeP>2023-08-17 10:12:00<SeP>2023-08-18 22:04:48<SeP>2023-08-20 09:57:36<SeP>2023-08-21 21:50:24<SeP>2023-08-23 09:43:12<SeP>2023-08-24 21:36:00<SeP>2023-08-26 09:28:48<SeP>2023-08-27 21:21:36<SeP>2023-08-29 09:14:24<SeP>2023-08-30 21:07:12<SeP>2023-09-01 09:00:00<SeP>2023-09-02 20:52:48<SeP>2023-09-04 08:45:36<SeP>2023-09-05 20:38:24<SeP>2023-09-07 08:31:12<SeP>2023-09-08 20:24:00<SeP>2023-09-10 08:16:48<SeP>2023-09-11 20:09:36<SeP>2023-09-13 08:02:24<SeP>2023-09-14 19:55:12<SeP>2023-09-16 07:48:00<SeP>2023-09-17 19:40:48<SeP>2023-09-19 07:33:36<SeP>2023-09-20 19:26:24<SeP>2023-09-22 07:19:12<SeP>2023-09-23 19:12:00<SeP>2023-09-25 07:04:48<SeP>2023-09-26 18:57:36<SeP>2023-09-28 06:50:24<SeP>2023-09-29 18:43:12<SeP>2023-10-01 06:36:00<SeP>2023-10-02 18:28:48<SeP>2023-10-04 06:21:36<SeP>2023-10-05 18:14:24<SeP>2023-10-07 06:07:12<SeP>2023-10-08 18:00:00<SeP>2023-10-10 05:52:48<SeP>2023-10-11 17:45:36<SeP>2023-10-13 05:38:24<SeP>2023-10-14 17:31:12<SeP>2023-10-16 05:24:00<SeP>2023-10-17 17:16:48<SeP>2023-10-19 05:09:36<SeP>2023-10-20 17:02:24<SeP>2023-10-22 04:55:12<SeP>2023-10-23 16:48:00<SeP>2023-10-25 04:40:48<SeP>2023-10-26 16:33:36<SeP>2023-10-28 04:26:24<SeP>2023-10-29 16:19:12<SeP>2023-10-31 04:12:00<SeP>2023-11-01 16:04:48<SeP>2023-11-03 03:57:36<SeP>2023-11-04 15:50:24<SeP>2023-11-06 02:43:12<SeP>2023-11-07 14:36:00<SeP>2023-11-09 02:28:48<SeP>2023-11-10 14:21:36<SeP>2023-11-12 02:14:24<SeP>2023-11-13 14:07:12<SeP>2023-11-15 02:00:00<SeP>2023-11-16 13:52:48<SeP>2023-11-18 01:45:36<SeP>2023-11-19 13:38:24<SeP>2023-11-21 01:31:12<SeP>2023-11-22 13:24:00<SeP>2023-11-24 01:16:48<SeP>2023-11-25 13:09:36<SeP>2023-11-27 01:02:24<SeP>2023-11-28 12:55:12<SeP>2023-11-30 00:48:00<SeP>2023-12-01 12:40:48<SeP>2023-12-03 00:33:36<SeP>2023-12-04 12:26:24<SeP>2023-12-06 00:19:12<SeP>2023-12-07 12:12:00<SeP>2023-12-09 00:04:48<SeP>2023-12-10 11:57:36<SeP>2023-12-11 23:50:24<SeP>2023-12-13 11:43:12<SeP>2023-12-14 23:36:00<SeP>2023-12-16 11:28:48<SeP>2023-12-17 23:21:36<SeP>2023-12-19 11:14:24<SeP>2023-12-20 23:07:12<SeP>2023-12-22 11:00:00<SeP>2023-12-23 22:52:48<SeP>2023-12-25 10:45:36<SeP>2023-12-26 22:38:24<SeP>2023-12-28 10:31:12<SeP>2023-12-29 22:24:00<SeP>2023-12-31 10:16:48<SeP>2024-01-01 22:09:36<SeP>2024-01-03 10:02:24<SeP>2024-01-04 21:55:12<SeP>2024-01-06 09:48:00<SeP>2024-01-07 21:40:48<SeP>2024-01-09 09:33:36<SeP>2024-01-10 21:26:24<SeP>2024-01-12 09:19:12<SeP>2024-01-13 21:12:00<SeP>2024-01-15 09:04:48<SeP>2024-01-16 20:57:36<SeP>2024-01-18 08:50:24<SeP>2024-01-19 20:43:12<SeP>2024-01-21 08:36:00<SeP>2024-01-22 20:28:48<SeP>2024-01-24 08:21:36<SeP>2024-01-25 20:14:24<SeP>2024-01-27 08:07:12<SeP>2024-01-28 20:00:00<SeP>2024-01-30 07:52:48<SeP>2024-01-31 19:45:36<SeP>2024-02-02 07:38:24<SeP>2024-02-03 19:31:12<SeP>2024-02-05 07:24:00<SeP>2024-02-06 19:16:48<SeP>2024-02-08 07:09:36<SeP>2024-02-09 19:02:24<SeP>2024-02-11 06:55:12<SeP>2024-02-12 18:48:00<SeP>2024-02-14 06:40:48<SeP>2024-02-15 18:33:36<SeP>2024-02-17 06:26:24<SeP>2024-02-18 18:19:12<SeP>2024-02-20 06:12:00<SeP>2024-02-21 18:04:48<SeP>2024-02-23 05:57:36<SeP>2024-02-24 17:50:24<SeP>2024-02-26 05:43:12<SeP>2024-02-27 17:36:00<SeP>2024-02-29 05:28:48<SeP>2024-03-01 17:21:36<SeP>2024-03-03 05:14:24<SeP>2024-03-04 17:07:12<SeP>2024-03-06 05:00:00<SeP>2024-03-07 16:52:48<SeP>2024-03-09 04:45:36<SeP>2024-03-10 17:38:24<SeP>2024-03-12 05:31:12<SeP>2024-03-13 17:24:00<SeP>2024-03-15 05:16:48<SeP>2024-03-16 17:09:36<SeP>2024-03-18 05:02:24<SeP>2024-03-19 16:55:12<SeP>2024-03-21 04:48:00<SeP>2024-03-22 16:40:48<SeP>2024-03-24 04:33:36<SeP>2024-03-25 16:26:24<SeP>2024-03-27 04:19:12<SeP>2024-03-28 16:12:00<SeP>2024-03-30 04:04:48<SeP>2024-03-31 15:57:36<SeP>2024-04-02 03:50:24<SeP>2024-04-03 15:43:12<SeP>2024-04-05 03:36:00<SeP>2024-04-06 15:28:48<SeP>2024-04-08 03:21:36<SeP>2024-04-09 15:14:24<SeP>2024-04-11 03:07:12<SeP>2024-04-12 15:00:00<SeP>2024-04-14 02:52:48<SeP>2024-04-15 14:45:36<SeP>2024-04-17 02:38:24<SeP>2024-04-18 14:31:12<SeP>2024-04-20 02:24:00<SeP>2024-04-21 14:16:48<SeP>2024-04-23 02:09:36<SeP>2024-04-24 14:02:24<SeP>2024-04-26 01:55:12<SeP>2024-04-27 13:48:00<SeP>2024-04-29 01:40:48<SeP>2024-04-30 13:33:36<SeP>2024-05-02 01:26:24<SeP>2024-05-03 13:19:12<SeP>2024-05-05 01:12:00<SeP>2024-05-06 13:04:48<SeP>2024-05-08 00:57:36<SeP>2024-05-09 12:50:24<SeP>2024-05-11 00:43:12<SeP>2024-05-12 12:36:00<SeP>2024-05-14 00:28:48<SeP>2024-05-15 12:21:36<SeP>2024-05-17 00:14:24<SeP>2024-05-18 12:07:12<SeP>2024-05-20 00:00:00<SeP>2024-05-21 11:52:48<SeP>2024-05-22 23:45:36<SeP>2024-05-24 11:38:24<SeP>2024-05-25 23:31:12<SeP>2024-05-27 11:24:00<SeP>2024-05-28 23:16:48<SeP>2024-05-30 11:09:36<SeP>2024-05-31 23:02:24<SeP>2024-06-02 10:55:12<SeP>2024-06-03 22:48:00<SeP>2024-06-05 10:40:48<SeP>2024-06-06 22:33:36<SeP>2024-06-08 10:26:24<SeP>2024-06-09 22:19:12<SeP>2024-06-11 10:12:00<SeP>2024-06-12 22:04:48<SeP>2024-06-14 09:57:36<SeP>2024-06-15 21:50:24<SeP>2024-06-17 09:43:12<SeP>2024-06-18 21:36:00<SeP>2024-06-20 09:28:48<SeP>2024-06-21 21:21:36<SeP>2024-06-23 09:14:24<SeP>2024-06-24 21:07:12<SeP>2024-06-26 09:00:00<SeP>2024-06-27 20:52:48<SeP>2024-06-29 08:45:36<SeP>2024-06-30 20:38:24<SeP>2024-07-02 08:31:12<SeP>2024-07-03 20:24:00<SeP>2024-07-05 08:16:48<SeP>2024-07-06 20:09:36<SeP>2024-07-08 08:02:24<SeP>2024-07-09 19:55:12<SeP>2024-07-11 07:48:00<SeP>2024-07-12 19:40:48<SeP>2024-07-14 07:33:36<SeP>2024-07-15 19:26:24<SeP>2024-07-17 07:19:12<SeP>2024-07-18 19:12:00<SeP>2024-07-20 07:04:48<SeP>2024-07-21 18:57:36<SeP>2024-07-23 06:50:24<SeP>2024-07-24 18:43:12<SeP>2024-07-26 06:36:00<SeP>2024-07-27 18:28:48<SeP>2024-07-29 06:21:36<SeP>2024-07-30 18:14:24<SeP>2024-08-01 06:07:12<SeP>2024-08-02 18:00:00<SeP>2024-08-04 05:52:48<SeP>2024-08-05 17:45:36<SeP>2024-08-07 05:38:24<SeP>2024-08-08 17:31:12<SeP>2024-08-10 05:24:00<SeP>2024-08-11 17:16:48<SeP>2024-08-13 05:09:36<SeP>2024-08-14 17:02:24<SeP>2024-08-16 04:55:12<SeP>2024-08-17 16:48:00<SeP>2024-08-19 04:40:48<SeP>2024-08-20 16:33:36<SeP>2024-08-22 04:26:24<SeP>2024-08-23 16:19:12<SeP>2024-08-25 04:12:00<SeP>2024-08-26 16:04:48<SeP>2024-08-28 03:57:36<SeP>2024-08-29 15:50:24<SeP>2024-08-31 03:43:12<SeP>2024-09-01 15:36:00<SeP>2024-09-03 03:28:48<SeP>2024-09-04 15:21:36<SeP>2024-09-06 03:14:24<SeP>2024-09-07 15:07:12<SeP>2024-09-09 03:00:00<SeP>2024-09-10 14:52:48<SeP>2024-09-12 02:45:36<SeP>2024-09-13 14:38:24<SeP>2024-09-15 02:31:12<SeP>2024-09-16 14:24:00<SeP>2024-09-18 02:16:48<SeP>2024-09-19 14:09:36<SeP>2024-09-21 02:02:24<SeP>2024-09-22 13:55:12<SeP>2024-09-24 01:48:00<SeP>2024-09-25 13:40:48<SeP>2024-09-27 01:33:36<SeP>2024-09-28 13:26:24<SeP>2024-09-30 01:19:12<SeP>2024-10-01 13:12:00<SeP>2024-10-03 01:04:48<SeP>2024-10-04 12:57:36<SeP>2024-10-06 00:50:24<SeP>2024-10-07 12:43:12<SeP>2024-10-09 00:36:00<SeP>2024-10-10 12:28:48<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:07:12<SeP>2024-10-16 12:00:00<SeP>2024-10-17 23:52:48<SeP>2024-10-19 11:45:36<SeP>2024-10-20 23:38:24<SeP>2024-10-22 11:31:12<SeP>2024-10-23 23:24:00<SeP>2024-10-25 11:16:48<SeP>2024-10-26 23:09:36<SeP>2024-10-28 11:02:24<SeP>2024-10-29 22:55:12<SeP>2024-10-31 10:48:00<SeP>2024-11-01 22:40:48<SeP>2024-11-03 09:33:36<SeP>2024-11-04 21:26:24<SeP>2024-11-06 09:19:12<SeP>2024-11-07 21:12:00<SeP>2024-11-09 09:04:48<SeP>2024-11-10 20:57:36<SeP>2024-11-12 08:50:24<SeP>2024-11-13 20:43:12<SeP>2024-11-15 08:36:00<SeP>2024-11-16 20:28:48<SeP>2024-11-18 08:21:36<SeP>2024-11-19 20:14:24<SeP>2024-11-21 08:07:12<SeP>2024-11-22 20:00:00<SeP>2024-11-24 07:52:48<SeP>2024-11-25 19:45:36<SeP>2024-11-27 07:38:24<SeP>2024-11-28 19:31:12<SeP>2024-11-30 07:24:00<SeP>2024-12-01 19:16:48<SeP>2024-12-03 07:09:36<SeP>2024-12-04 19:02:24<SeP>2024-12-06 06:55:12<SeP>2024-12-07 18:48:00<SeP>2024-12-09 06:40:48<SeP>2024-12-10 18:33:36<SeP>2024-12-12 06:26:24<SeP>2024-12-13 18:19:12<SeP>2024-12-15 06:12:00<SeP>2024-12-16 18:04:48<SeP>2024-12-18 05:57:36<SeP>2024-12-19 17:50:24<SeP>2024-12-21 05:43:12<SeP>2024-12-22 17:36:00<SeP>2024-12-24 05:28:48<SeP>2024-12-25 17:21:36<SeP>2024-12-27 05:14:24<SeP>2024-12-28 17:07:12<SeP>2024-12-30 05:00:00<SeP>2024-12-31 16:52:48<SeP>2025-01-02 04:45:36<SeP>2025-01-03 16:38:24<SeP>2025-01-05 04:31:12<SeP>2025-01-06 16:24:00<SeP>2025-01-08 04:16:48<SeP>2025-01-09 16:09:36<SeP>2025-01-11 04:02:24<SeP>2025-01-12 15:55:12<SeP>2025-01-14 03:48:00<SeP>2025-01-15 15:40:48<SeP>2025-01-17 03:33:36<SeP>2025-01-18 15:26:24<SeP>2025-01-20 03:19:12<SeP>2025-01-21 15:12:00<SeP>2025-01-23 03:04:48<SeP>2025-01-24 14:57:36<SeP>2025-01-26 02:50:24<SeP>2025-01-27 14:43:12<SeP>2025-01-29 02:36:00<SeP>2025-01-30 14:28:48<SeP>2025-02-01 02:21:36<SeP>2025-02-02 14:14:24<SeP>2025-02-04 02:07:12<SeP>2025-02-05 14:00:00<SeP>2025-02-07 01:52:48<SeP>2025-02-08 13:45:36<SeP>2025-02-10 01:38:24<SeP>2025-02-11 13:31:12<SeP>2025-02-13 01:24:00<SeP>2025-02-14 13:16:48<SeP>2025-02-16 01:09:36<SeP>2025-02-17 13:02:24<SeP>2025-02-19 00:55:12<SeP>2025-02-20 12:48:00<SeP>2025-02-22 00:40:48<SeP>2025-02-23 12:33:36<SeP>2025-02-25 00:26:24<SeP>2025-02-26 12:19:12<SeP>2025-02-28 00:12:00<SeP>2025-03-01 12:04:48<SeP>2025-03-02 23:57:36<SeP>2025-03-04 11:50:24<SeP>2025-03-05 23:43:12<SeP>2025-03-07 11:36:00<SeP>2025-03-08 23:28:48<SeP>2025-03-10 12:21:36<SeP>2025-03-12 00:14:24<SeP>2025-03-13 12:07:12";
  const item1Label       = "Scans";
  const item1Data        = "788<SeP>1529<SeP>1387<SeP>1495<SeP>1283<SeP>1749<SeP>949<SeP>966<SeP>1172<SeP>3419<SeP>3383<SeP>1025<SeP>3323<SeP>896<SeP>781<SeP>891<SeP>1455<SeP>3231<SeP>1462<SeP>1486<SeP>1063<SeP>957<SeP>1100<SeP>1217<SeP>933<SeP>762<SeP>934<SeP>3645<SeP>959<SeP>852<SeP>1464<SeP>1280<SeP>830<SeP>2902<SeP>1772<SeP>2654<SeP>1916<SeP>1642<SeP>1467<SeP>1332<SeP>1951<SeP>1953<SeP>2063<SeP>1587<SeP>1676<SeP>1569<SeP>1798<SeP>1718<SeP>1887<SeP>1880<SeP>1854<SeP>1561<SeP>3286<SeP>1402<SeP>1770<SeP>2062<SeP>1894<SeP>2139<SeP>1981<SeP>3330<SeP>1472<SeP>1491<SeP>1492<SeP>1552<SeP>1885<SeP>1608<SeP>1269<SeP>1435<SeP>1208<SeP>2397<SeP>1266<SeP>1138<SeP>1343<SeP>2465<SeP>7067<SeP>1340<SeP>1328<SeP>1408<SeP>2239<SeP>1263<SeP>2832<SeP>5091<SeP>1624<SeP>1513<SeP>1025<SeP>3292<SeP>1267<SeP>1117<SeP>996<SeP>1106<SeP>1060<SeP>3026<SeP>1252<SeP>1300<SeP>2931<SeP>6537<SeP>1392<SeP>1017<SeP>945<SeP>931<SeP>1027<SeP>982<SeP>1031<SeP>1058<SeP>4376<SeP>1822<SeP>1405<SeP>1508<SeP>544<SeP>1444<SeP>1337<SeP>1201<SeP>887<SeP>2396<SeP>1072<SeP>1225<SeP>1109<SeP>929<SeP>1199<SeP>665<SeP>933<SeP>887<SeP>752<SeP>1127<SeP>881<SeP>925<SeP>844<SeP>851<SeP>893<SeP>717<SeP>863<SeP>912<SeP>914<SeP>919<SeP>841<SeP>846<SeP>740<SeP>879<SeP>1080<SeP>799<SeP>856<SeP>938<SeP>958<SeP>1119<SeP>998<SeP>585<SeP>834<SeP>855<SeP>896<SeP>1297<SeP>951<SeP>1131<SeP>1259<SeP>1084<SeP>996<SeP>928<SeP>922<SeP>842<SeP>980<SeP>1113<SeP>905<SeP>886<SeP>916<SeP>1104<SeP>1020<SeP>1061<SeP>1012<SeP>1185<SeP>885<SeP>893<SeP>1706<SeP>1665<SeP>1283<SeP>1018<SeP>1028<SeP>1174<SeP>1020<SeP>974<SeP>782<SeP>893<SeP>954<SeP>1090<SeP>819<SeP>1122<SeP>1291<SeP>1181<SeP>1121<SeP>1364<SeP>1243<SeP>1225<SeP>1393<SeP>1271<SeP>1613<SeP>1908<SeP>1478<SeP>1240<SeP>759<SeP>1128<SeP>907<SeP>1064<SeP>636<SeP>836<SeP>1000<SeP>837<SeP>4160<SeP>4340<SeP>2034<SeP>1480<SeP>1146<SeP>885<SeP>1115<SeP>877<SeP>1058<SeP>983<SeP>1141<SeP>994<SeP>1314<SeP>2276<SeP>996<SeP>1263<SeP>1260<SeP>1268<SeP>1196<SeP>1078<SeP>1011<SeP>1025<SeP>1156<SeP>1092<SeP>1190<SeP>918<SeP>1153<SeP>865<SeP>1401<SeP>1164<SeP>1157<SeP>1198<SeP>1352<SeP>1252<SeP>1620<SeP>1220<SeP>1181<SeP>1201<SeP>1136<SeP>2003<SeP>1292<SeP>1887<SeP>1745<SeP>1421<SeP>2017<SeP>1699<SeP>1198<SeP>1129<SeP>1457<SeP>1091<SeP>1586<SeP>1281<SeP>1269<SeP>1724<SeP>1714<SeP>1450<SeP>1442<SeP>1491<SeP>1282<SeP>1027<SeP>1155<SeP>1425<SeP>1069<SeP>1297<SeP>1507<SeP>1083<SeP>1585<SeP>1768<SeP>1289<SeP>1460<SeP>1696<SeP>1299<SeP>1137<SeP>932<SeP>966<SeP>974<SeP>876<SeP>1108<SeP>1675<SeP>1204<SeP>1189<SeP>1130<SeP>827<SeP>1108<SeP>917<SeP>1418<SeP>874<SeP>905<SeP>1153<SeP>1384<SeP>1656<SeP>1313<SeP>1092<SeP>1050<SeP>1182<SeP>1762<SeP>1014<SeP>1224<SeP>1029<SeP>1587<SeP>1050<SeP>998<SeP>1196<SeP>1137<SeP>855<SeP>937<SeP>1137<SeP>1457<SeP>1587<SeP>1484<SeP>1500<SeP>1171<SeP>945<SeP>1153<SeP>1289<SeP>1166<SeP>1194<SeP>1014<SeP>1009<SeP>1308<SeP>1462<SeP>1440<SeP>1581<SeP>1506<SeP>1315<SeP>1552<SeP>1475<SeP>1570<SeP>1311<SeP>1447<SeP>1293<SeP>1799<SeP>1454<SeP>1536<SeP>1557<SeP>1293<SeP>1491<SeP>1290<SeP>1325<SeP>1406<SeP>1466<SeP>1673<SeP>1217<SeP>1331<SeP>1268<SeP>1477<SeP>1308<SeP>1167<SeP>1676<SeP>1925<SeP>1457<SeP>1032<SeP>949<SeP>1792<SeP>1498<SeP>1334<SeP>1433<SeP>1018<SeP>1483<SeP>1329<SeP>1376<SeP>1472<SeP>1496<SeP>1670<SeP>1509<SeP>1602<SeP>1605<SeP>1481<SeP>1417<SeP>1669<SeP>1561<SeP>1198<SeP>1257<SeP>1889<SeP>1853<SeP>1832<SeP>1859<SeP>1733<SeP>1602<SeP>1548<SeP>1700<SeP>1562<SeP>1461<SeP>1868<SeP>1715<SeP>1752<SeP>1504<SeP>1459<SeP>1531<SeP>1505<SeP>1697<SeP>2102<SeP>1997<SeP>1455<SeP>1706<SeP>1794";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "247<SeP>526<SeP>1408<SeP>645<SeP>229<SeP>231<SeP>7053<SeP>790<SeP>9312<SeP>437<SeP>405<SeP>1349<SeP>1079<SeP>246<SeP>356<SeP>258<SeP>274<SeP>692<SeP>1389<SeP>8127<SeP>7773<SeP>6530<SeP>9507<SeP>439<SeP>306<SeP>401<SeP>217<SeP>393<SeP>5886<SeP>85<SeP>382<SeP>322<SeP>386<SeP>3362<SeP>9879<SeP>9301<SeP>10507<SeP>8694<SeP>6036<SeP>7518<SeP>7121<SeP>9532<SeP>9078<SeP>8320<SeP>7941<SeP>8637<SeP>9215<SeP>8458<SeP>6035<SeP>6502<SeP>11656<SeP>7406<SeP>8094<SeP>7632<SeP>10324<SeP>16024<SeP>19302<SeP>8642<SeP>9595<SeP>9513<SeP>7933<SeP>8864<SeP>8731<SeP>8980<SeP>7023<SeP>6840<SeP>6813<SeP>6976<SeP>4753<SeP>5251<SeP>6308<SeP>6361<SeP>5920<SeP>8358<SeP>4000<SeP>6096<SeP>5831<SeP>6787<SeP>5004<SeP>7245<SeP>4710<SeP>6563<SeP>6108<SeP>5672<SeP>5927<SeP>6231<SeP>21859<SeP>11873<SeP>34172<SeP>7826<SeP>7921<SeP>7165<SeP>11415<SeP>8041<SeP>4033<SeP>6821<SeP>3780<SeP>4775<SeP>7266<SeP>6616<SeP>7187<SeP>6910<SeP>6050<SeP>4220<SeP>7756<SeP>8826<SeP>7666<SeP>8020<SeP>3960<SeP>8305<SeP>10464<SeP>7265<SeP>2895<SeP>6007<SeP>7881<SeP>6463<SeP>6945<SeP>9136<SeP>6842<SeP>1345<SeP>2459<SeP>1023<SeP>2590<SeP>2403<SeP>1104<SeP>958<SeP>968<SeP>1370<SeP>1578<SeP>1216<SeP>865<SeP>1104<SeP>1070<SeP>806<SeP>1468<SeP>1520<SeP>1107<SeP>1693<SeP>2061<SeP>1671<SeP>11567<SeP>6176<SeP>11302<SeP>7343<SeP>5567<SeP>10714<SeP>9097<SeP>9302<SeP>8620<SeP>14282<SeP>8927<SeP>11450<SeP>10340<SeP>11993<SeP>12286<SeP>6896<SeP>3949<SeP>8149<SeP>23653<SeP>7547<SeP>7933<SeP>8340<SeP>14696<SeP>11943<SeP>7558<SeP>5038<SeP>7224<SeP>8763<SeP>25344<SeP>6990<SeP>10160<SeP>9180<SeP>6007<SeP>5916<SeP>6734<SeP>14906<SeP>5993<SeP>14289<SeP>8354<SeP>8342<SeP>6496<SeP>6136<SeP>3541<SeP>7091<SeP>7531<SeP>6261<SeP>4865<SeP>9372<SeP>15012<SeP>9663<SeP>9805<SeP>5103<SeP>7592<SeP>9107<SeP>9012<SeP>5848<SeP>2909<SeP>7654<SeP>2790<SeP>5266<SeP>4110<SeP>674<SeP>111<SeP>645<SeP>215<SeP>683<SeP>996<SeP>374<SeP>633<SeP>1267<SeP>1219<SeP>3177<SeP>22980<SeP>545<SeP>4491<SeP>2729<SeP>3011<SeP>7533<SeP>3130<SeP>4174<SeP>3141<SeP>3252<SeP>3072<SeP>3282<SeP>4779<SeP>1803<SeP>2923<SeP>2646<SeP>2179<SeP>1983<SeP>1879<SeP>1153<SeP>1918<SeP>850<SeP>1282<SeP>1601<SeP>26518<SeP>1688<SeP>4089<SeP>4204<SeP>1978<SeP>3745<SeP>2751<SeP>1907<SeP>3882<SeP>2120<SeP>4119<SeP>2063<SeP>2978<SeP>3940<SeP>5032<SeP>4951<SeP>5252<SeP>4376<SeP>2582<SeP>2731<SeP>4925<SeP>4082<SeP>10360<SeP>5169<SeP>2481<SeP>3273<SeP>2397<SeP>4375<SeP>3837<SeP>3939<SeP>2595<SeP>3919<SeP>4935<SeP>4060<SeP>6045<SeP>3966<SeP>6588<SeP>4852<SeP>5381<SeP>5093<SeP>22456<SeP>5312<SeP>10807<SeP>1983<SeP>3464<SeP>4232<SeP>4189<SeP>3746<SeP>5628<SeP>3764<SeP>4806<SeP>4613<SeP>3739<SeP>3312<SeP>1292<SeP>1981<SeP>3265<SeP>2860<SeP>2499<SeP>3682<SeP>4343<SeP>4181<SeP>3417<SeP>4330<SeP>3462<SeP>3236<SeP>4086<SeP>8578<SeP>6239<SeP>5585<SeP>5219<SeP>4730<SeP>3619<SeP>3583<SeP>4861<SeP>5942<SeP>5746<SeP>4508<SeP>4237<SeP>949<SeP>1047<SeP>1989<SeP>1386<SeP>1232<SeP>1699<SeP>1560<SeP>1349<SeP>3399<SeP>4536<SeP>6372<SeP>34445<SeP>5123<SeP>4492<SeP>21573<SeP>8030<SeP>5198<SeP>6240<SeP>4583<SeP>24576<SeP>5135<SeP>5264<SeP>4943<SeP>5874<SeP>14081<SeP>21381<SeP>4426<SeP>3577<SeP>4639<SeP>5099<SeP>6301<SeP>3159<SeP>3145<SeP>3938<SeP>5441<SeP>5011<SeP>10651<SeP>12232<SeP>5879<SeP>6520<SeP>2811<SeP>2772<SeP>3567<SeP>5150<SeP>4073<SeP>3796<SeP>2609<SeP>3676<SeP>3172<SeP>4505<SeP>5694<SeP>8873<SeP>10257<SeP>8689<SeP>9118<SeP>7965<SeP>7145<SeP>5198<SeP>4927<SeP>7279<SeP>22479<SeP>3350<SeP>4385<SeP>3214<SeP>11447<SeP>5554<SeP>4373<SeP>4829<SeP>4139<SeP>2993<SeP>9335<SeP>9097<SeP>5337<SeP>3567<SeP>3248<SeP>2474<SeP>2523<SeP>2563<SeP>2062<SeP>2593<SeP>1805<SeP>2675<SeP>2793<SeP>2975<SeP>3227";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:52:48<SeP>2023-07-28 23:45:36<SeP>2023-07-30 11:38:24<SeP>2023-07-31 23:31:12<SeP>2023-08-02 11:24:00<SeP>2023-08-03 23:16:48<SeP>2023-08-05 11:09:36<SeP>2023-08-06 23:02:24<SeP>2023-08-08 10:55:12<SeP>2023-08-09 22:48:00<SeP>2023-08-11 10:40:48<SeP>2023-08-12 22:33:36<SeP>2023-08-14 10:26:24<SeP>2023-08-15 22:19:12<SeP>2023-08-17 10:12:00<SeP>2023-08-18 22:04:48<SeP>2023-08-20 09:57:36<SeP>2023-08-21 21:50:24<SeP>2023-08-23 09:43:12<SeP>2023-08-24 21:36:00<SeP>2023-08-26 09:28:48<SeP>2023-08-27 21:21:36<SeP>2023-08-29 09:14:24<SeP>2023-08-30 21:07:12<SeP>2023-09-01 09:00:00<SeP>2023-09-02 20:52:48<SeP>2023-09-04 08:45:36<SeP>2023-09-05 20:38:24<SeP>2023-09-07 08:31:12<SeP>2023-09-08 20:24:00<SeP>2023-09-10 08:16:48<SeP>2023-09-11 20:09:36<SeP>2023-09-13 08:02:24<SeP>2023-09-14 19:55:12<SeP>2023-09-16 07:48:00<SeP>2023-09-17 19:40:48<SeP>2023-09-19 07:33:36<SeP>2023-09-20 19:26:24<SeP>2023-09-22 07:19:12<SeP>2023-09-23 19:12:00<SeP>2023-09-25 07:04:48<SeP>2023-09-26 18:57:36<SeP>2023-09-28 06:50:24<SeP>2023-09-29 18:43:12<SeP>2023-10-01 06:36:00<SeP>2023-10-02 18:28:48<SeP>2023-10-04 06:21:36<SeP>2023-10-05 18:14:24<SeP>2023-10-07 06:07:12<SeP>2023-10-08 18:00:00<SeP>2023-10-10 05:52:48<SeP>2023-10-11 17:45:36<SeP>2023-10-13 05:38:24<SeP>2023-10-14 17:31:12<SeP>2023-10-16 05:24:00<SeP>2023-10-17 17:16:48<SeP>2023-10-19 05:09:36<SeP>2023-10-20 17:02:24<SeP>2023-10-22 04:55:12<SeP>2023-10-23 16:48:00<SeP>2023-10-25 04:40:48<SeP>2023-10-26 16:33:36<SeP>2023-10-28 04:26:24<SeP>2023-10-29 16:19:12<SeP>2023-10-31 04:12:00<SeP>2023-11-01 16:04:48<SeP>2023-11-03 03:57:36<SeP>2023-11-04 15:50:24<SeP>2023-11-06 02:43:12<SeP>2023-11-07 14:36:00<SeP>2023-11-09 02:28:48<SeP>2023-11-10 14:21:36<SeP>2023-11-12 02:14:24<SeP>2023-11-13 14:07:12<SeP>2023-11-15 02:00:00<SeP>2023-11-16 13:52:48<SeP>2023-11-18 01:45:36<SeP>2023-11-19 13:38:24<SeP>2023-11-21 01:31:12<SeP>2023-11-22 13:24:00<SeP>2023-11-24 01:16:48<SeP>2023-11-25 13:09:36<SeP>2023-11-27 01:02:24<SeP>2023-11-28 12:55:12<SeP>2023-11-30 00:48:00<SeP>2023-12-01 12:40:48<SeP>2023-12-03 00:33:36<SeP>2023-12-04 12:26:24<SeP>2023-12-06 00:19:12<SeP>2023-12-07 12:12:00<SeP>2023-12-09 00:04:48<SeP>2023-12-10 11:57:36<SeP>2023-12-11 23:50:24<SeP>2023-12-13 11:43:12<SeP>2023-12-14 23:36:00<SeP>2023-12-16 11:28:48<SeP>2023-12-17 23:21:36<SeP>2023-12-19 11:14:24<SeP>2023-12-20 23:07:12<SeP>2023-12-22 11:00:00<SeP>2023-12-23 22:52:48<SeP>2023-12-25 10:45:36<SeP>2023-12-26 22:38:24<SeP>2023-12-28 10:31:12<SeP>2023-12-29 22:24:00<SeP>2023-12-31 10:16:48<SeP>2024-01-01 22:09:36<SeP>2024-01-03 10:02:24<SeP>2024-01-04 21:55:12<SeP>2024-01-06 09:48:00<SeP>2024-01-07 21:40:48<SeP>2024-01-09 09:33:36<SeP>2024-01-10 21:26:24<SeP>2024-01-12 09:19:12<SeP>2024-01-13 21:12:00<SeP>2024-01-15 09:04:48<SeP>2024-01-16 20:57:36<SeP>2024-01-18 08:50:24<SeP>2024-01-19 20:43:12<SeP>2024-01-21 08:36:00<SeP>2024-01-22 20:28:48<SeP>2024-01-24 08:21:36<SeP>2024-01-25 20:14:24<SeP>2024-01-27 08:07:12<SeP>2024-01-28 20:00:00<SeP>2024-01-30 07:52:48<SeP>2024-01-31 19:45:36<SeP>2024-02-02 07:38:24<SeP>2024-02-03 19:31:12<SeP>2024-02-05 07:24:00<SeP>2024-02-06 19:16:48<SeP>2024-02-08 07:09:36<SeP>2024-02-09 19:02:24<SeP>2024-02-11 06:55:12<SeP>2024-02-12 18:48:00<SeP>2024-02-14 06:40:48<SeP>2024-02-15 18:33:36<SeP>2024-02-17 06:26:24<SeP>2024-02-18 18:19:12<SeP>2024-02-20 06:12:00<SeP>2024-02-21 18:04:48<SeP>2024-02-23 05:57:36<SeP>2024-02-24 17:50:24<SeP>2024-02-26 05:43:12<SeP>2024-02-27 17:36:00<SeP>2024-02-29 05:28:48<SeP>2024-03-01 17:21:36<SeP>2024-03-03 05:14:24<SeP>2024-03-04 17:07:12<SeP>2024-03-06 05:00:00<SeP>2024-03-07 16:52:48<SeP>2024-03-09 04:45:36<SeP>2024-03-10 17:38:24<SeP>2024-03-12 05:31:12<SeP>2024-03-13 17:24:00<SeP>2024-03-15 05:16:48<SeP>2024-03-16 17:09:36<SeP>2024-03-18 05:02:24<SeP>2024-03-19 16:55:12<SeP>2024-03-21 04:48:00<SeP>2024-03-22 16:40:48<SeP>2024-03-24 04:33:36<SeP>2024-03-25 16:26:24<SeP>2024-03-27 04:19:12<SeP>2024-03-28 16:12:00<SeP>2024-03-30 04:04:48<SeP>2024-03-31 15:57:36<SeP>2024-04-02 03:50:24<SeP>2024-04-03 15:43:12<SeP>2024-04-05 03:36:00<SeP>2024-04-06 15:28:48<SeP>2024-04-08 03:21:36<SeP>2024-04-09 15:14:24<SeP>2024-04-11 03:07:12<SeP>2024-04-12 15:00:00<SeP>2024-04-14 02:52:48<SeP>2024-04-15 14:45:36<SeP>2024-04-17 02:38:24<SeP>2024-04-18 14:31:12<SeP>2024-04-20 02:24:00<SeP>2024-04-21 14:16:48<SeP>2024-04-23 02:09:36<SeP>2024-04-24 14:02:24<SeP>2024-04-26 01:55:12<SeP>2024-04-27 13:48:00<SeP>2024-04-29 01:40:48<SeP>2024-04-30 13:33:36<SeP>2024-05-02 01:26:24<SeP>2024-05-03 13:19:12<SeP>2024-05-05 01:12:00<SeP>2024-05-06 13:04:48<SeP>2024-05-08 00:57:36<SeP>2024-05-09 12:50:24<SeP>2024-05-11 00:43:12<SeP>2024-05-12 12:36:00<SeP>2024-05-14 00:28:48<SeP>2024-05-15 12:21:36<SeP>2024-05-17 00:14:24<SeP>2024-05-18 12:07:12<SeP>2024-05-20 00:00:00<SeP>2024-05-21 11:52:48<SeP>2024-05-22 23:45:36<SeP>2024-05-24 11:38:24<SeP>2024-05-25 23:31:12<SeP>2024-05-27 11:24:00<SeP>2024-05-28 23:16:48<SeP>2024-05-30 11:09:36<SeP>2024-05-31 23:02:24<SeP>2024-06-02 10:55:12<SeP>2024-06-03 22:48:00<SeP>2024-06-05 10:40:48<SeP>2024-06-06 22:33:36<SeP>2024-06-08 10:26:24<SeP>2024-06-09 22:19:12<SeP>2024-06-11 10:12:00<SeP>2024-06-12 22:04:48<SeP>2024-06-14 09:57:36<SeP>2024-06-15 21:50:24<SeP>2024-06-17 09:43:12<SeP>2024-06-18 21:36:00<SeP>2024-06-20 09:28:48<SeP>2024-06-21 21:21:36<SeP>2024-06-23 09:14:24<SeP>2024-06-24 21:07:12<SeP>2024-06-26 09:00:00<SeP>2024-06-27 20:52:48<SeP>2024-06-29 08:45:36<SeP>2024-06-30 20:38:24<SeP>2024-07-02 08:31:12<SeP>2024-07-03 20:24:00<SeP>2024-07-05 08:16:48<SeP>2024-07-06 20:09:36<SeP>2024-07-08 08:02:24<SeP>2024-07-09 19:55:12<SeP>2024-07-11 07:48:00<SeP>2024-07-12 19:40:48<SeP>2024-07-14 07:33:36<SeP>2024-07-15 19:26:24<SeP>2024-07-17 07:19:12<SeP>2024-07-18 19:12:00<SeP>2024-07-20 07:04:48<SeP>2024-07-21 18:57:36<SeP>2024-07-23 06:50:24<SeP>2024-07-24 18:43:12<SeP>2024-07-26 06:36:00<SeP>2024-07-27 18:28:48<SeP>2024-07-29 06:21:36<SeP>2024-07-30 18:14:24<SeP>2024-08-01 06:07:12<SeP>2024-08-02 18:00:00<SeP>2024-08-04 05:52:48<SeP>2024-08-05 17:45:36<SeP>2024-08-07 05:38:24<SeP>2024-08-08 17:31:12<SeP>2024-08-10 05:24:00<SeP>2024-08-11 17:16:48<SeP>2024-08-13 05:09:36<SeP>2024-08-14 17:02:24<SeP>2024-08-16 04:55:12<SeP>2024-08-17 16:48:00<SeP>2024-08-19 04:40:48<SeP>2024-08-20 16:33:36<SeP>2024-08-22 04:26:24<SeP>2024-08-23 16:19:12<SeP>2024-08-25 04:12:00<SeP>2024-08-26 16:04:48<SeP>2024-08-28 03:57:36<SeP>2024-08-29 15:50:24<SeP>2024-08-31 03:43:12<SeP>2024-09-01 15:36:00<SeP>2024-09-03 03:28:48<SeP>2024-09-04 15:21:36<SeP>2024-09-06 03:14:24<SeP>2024-09-07 15:07:12<SeP>2024-09-09 03:00:00<SeP>2024-09-10 14:52:48<SeP>2024-09-12 02:45:36<SeP>2024-09-13 14:38:24<SeP>2024-09-15 02:31:12<SeP>2024-09-16 14:24:00<SeP>2024-09-18 02:16:48<SeP>2024-09-19 14:09:36<SeP>2024-09-21 02:02:24<SeP>2024-09-22 13:55:12<SeP>2024-09-24 01:48:00<SeP>2024-09-25 13:40:48<SeP>2024-09-27 01:33:36<SeP>2024-09-28 13:26:24<SeP>2024-09-30 01:19:12<SeP>2024-10-01 13:12:00<SeP>2024-10-03 01:04:48<SeP>2024-10-04 12:57:36<SeP>2024-10-06 00:50:24<SeP>2024-10-07 12:43:12<SeP>2024-10-09 00:36:00<SeP>2024-10-10 12:28:48<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:07:12<SeP>2024-10-16 12:00:00<SeP>2024-10-17 23:52:48<SeP>2024-10-19 11:45:36<SeP>2024-10-20 23:38:24<SeP>2024-10-22 11:31:12<SeP>2024-10-23 23:24:00<SeP>2024-10-25 11:16:48<SeP>2024-10-26 23:09:36<SeP>2024-10-28 11:02:24<SeP>2024-10-29 22:55:12<SeP>2024-10-31 10:48:00<SeP>2024-11-01 22:40:48<SeP>2024-11-03 09:33:36<SeP>2024-11-04 21:26:24<SeP>2024-11-06 09:19:12<SeP>2024-11-07 21:12:00<SeP>2024-11-09 09:04:48<SeP>2024-11-10 20:57:36<SeP>2024-11-12 08:50:24<SeP>2024-11-13 20:43:12<SeP>2024-11-15 08:36:00<SeP>2024-11-16 20:28:48<SeP>2024-11-18 08:21:36<SeP>2024-11-19 20:14:24<SeP>2024-11-21 08:07:12<SeP>2024-11-22 20:00:00<SeP>2024-11-24 07:52:48<SeP>2024-11-25 19:45:36<SeP>2024-11-27 07:38:24<SeP>2024-11-28 19:31:12<SeP>2024-11-30 07:24:00<SeP>2024-12-01 19:16:48<SeP>2024-12-03 07:09:36<SeP>2024-12-04 19:02:24<SeP>2024-12-06 06:55:12<SeP>2024-12-07 18:48:00<SeP>2024-12-09 06:40:48<SeP>2024-12-10 18:33:36<SeP>2024-12-12 06:26:24<SeP>2024-12-13 18:19:12<SeP>2024-12-15 06:12:00<SeP>2024-12-16 18:04:48<SeP>2024-12-18 05:57:36<SeP>2024-12-19 17:50:24<SeP>2024-12-21 05:43:12<SeP>2024-12-22 17:36:00<SeP>2024-12-24 05:28:48<SeP>2024-12-25 17:21:36<SeP>2024-12-27 05:14:24<SeP>2024-12-28 17:07:12<SeP>2024-12-30 05:00:00<SeP>2024-12-31 16:52:48<SeP>2025-01-02 04:45:36<SeP>2025-01-03 16:38:24<SeP>2025-01-05 04:31:12<SeP>2025-01-06 16:24:00<SeP>2025-01-08 04:16:48<SeP>2025-01-09 16:09:36<SeP>2025-01-11 04:02:24<SeP>2025-01-12 15:55:12<SeP>2025-01-14 03:48:00<SeP>2025-01-15 15:40:48<SeP>2025-01-17 03:33:36<SeP>2025-01-18 15:26:24<SeP>2025-01-20 03:19:12<SeP>2025-01-21 15:12:00<SeP>2025-01-23 03:04:48<SeP>2025-01-24 14:57:36<SeP>2025-01-26 02:50:24<SeP>2025-01-27 14:43:12<SeP>2025-01-29 02:36:00<SeP>2025-01-30 14:28:48<SeP>2025-02-01 02:21:36<SeP>2025-02-02 14:14:24<SeP>2025-02-04 02:07:12<SeP>2025-02-05 14:00:00<SeP>2025-02-07 01:52:48<SeP>2025-02-08 13:45:36<SeP>2025-02-10 01:38:24<SeP>2025-02-11 13:31:12<SeP>2025-02-13 01:24:00<SeP>2025-02-14 13:16:48<SeP>2025-02-16 01:09:36<SeP>2025-02-17 13:02:24<SeP>2025-02-19 00:55:12<SeP>2025-02-20 12:48:00<SeP>2025-02-22 00:40:48<SeP>2025-02-23 12:33:36<SeP>2025-02-25 00:26:24<SeP>2025-02-26 12:19:12<SeP>2025-02-28 00:12:00<SeP>2025-03-01 12:04:48<SeP>2025-03-02 23:57:36<SeP>2025-03-04 11:50:24<SeP>2025-03-05 23:43:12<SeP>2025-03-07 11:36:00<SeP>2025-03-08 23:28:48<SeP>2025-03-10 12:21:36<SeP>2025-03-12 00:14:24<SeP>2025-03-13 12:07:12";
  const itemLabel       = "Scans";
  const itemData        = "788<SeP>1529<SeP>1387<SeP>1495<SeP>1283<SeP>1749<SeP>949<SeP>966<SeP>1172<SeP>3419<SeP>3383<SeP>1025<SeP>3323<SeP>896<SeP>781<SeP>891<SeP>1455<SeP>3231<SeP>1462<SeP>1486<SeP>1063<SeP>957<SeP>1100<SeP>1217<SeP>933<SeP>762<SeP>934<SeP>3645<SeP>959<SeP>852<SeP>1464<SeP>1280<SeP>830<SeP>2902<SeP>1772<SeP>2654<SeP>1916<SeP>1642<SeP>1467<SeP>1332<SeP>1951<SeP>1953<SeP>2063<SeP>1587<SeP>1676<SeP>1569<SeP>1798<SeP>1718<SeP>1887<SeP>1880<SeP>1854<SeP>1561<SeP>3286<SeP>1402<SeP>1770<SeP>2062<SeP>1894<SeP>2139<SeP>1981<SeP>3330<SeP>1472<SeP>1491<SeP>1492<SeP>1552<SeP>1885<SeP>1608<SeP>1269<SeP>1435<SeP>1208<SeP>2397<SeP>1266<SeP>1138<SeP>1343<SeP>2465<SeP>7067<SeP>1340<SeP>1328<SeP>1408<SeP>2239<SeP>1263<SeP>2832<SeP>5091<SeP>1624<SeP>1513<SeP>1025<SeP>3292<SeP>1267<SeP>1117<SeP>996<SeP>1106<SeP>1060<SeP>3026<SeP>1252<SeP>1300<SeP>2931<SeP>6537<SeP>1392<SeP>1017<SeP>945<SeP>931<SeP>1027<SeP>982<SeP>1031<SeP>1058<SeP>4376<SeP>1822<SeP>1405<SeP>1508<SeP>544<SeP>1444<SeP>1337<SeP>1201<SeP>887<SeP>2396<SeP>1072<SeP>1225<SeP>1109<SeP>929<SeP>1199<SeP>665<SeP>933<SeP>887<SeP>752<SeP>1127<SeP>881<SeP>925<SeP>844<SeP>851<SeP>893<SeP>717<SeP>863<SeP>912<SeP>914<SeP>919<SeP>841<SeP>846<SeP>740<SeP>879<SeP>1080<SeP>799<SeP>856<SeP>938<SeP>958<SeP>1119<SeP>998<SeP>585<SeP>834<SeP>855<SeP>896<SeP>1297<SeP>951<SeP>1131<SeP>1259<SeP>1084<SeP>996<SeP>928<SeP>922<SeP>842<SeP>980<SeP>1113<SeP>905<SeP>886<SeP>916<SeP>1104<SeP>1020<SeP>1061<SeP>1012<SeP>1185<SeP>885<SeP>893<SeP>1706<SeP>1665<SeP>1283<SeP>1018<SeP>1028<SeP>1174<SeP>1020<SeP>974<SeP>782<SeP>893<SeP>954<SeP>1090<SeP>819<SeP>1122<SeP>1291<SeP>1181<SeP>1121<SeP>1364<SeP>1243<SeP>1225<SeP>1393<SeP>1271<SeP>1613<SeP>1908<SeP>1478<SeP>1240<SeP>759<SeP>1128<SeP>907<SeP>1064<SeP>636<SeP>836<SeP>1000<SeP>837<SeP>4160<SeP>4340<SeP>2034<SeP>1480<SeP>1146<SeP>885<SeP>1115<SeP>877<SeP>1058<SeP>983<SeP>1141<SeP>994<SeP>1314<SeP>2276<SeP>996<SeP>1263<SeP>1260<SeP>1268<SeP>1196<SeP>1078<SeP>1011<SeP>1025<SeP>1156<SeP>1092<SeP>1190<SeP>918<SeP>1153<SeP>865<SeP>1401<SeP>1164<SeP>1157<SeP>1198<SeP>1352<SeP>1252<SeP>1620<SeP>1220<SeP>1181<SeP>1201<SeP>1136<SeP>2003<SeP>1292<SeP>1887<SeP>1745<SeP>1421<SeP>2017<SeP>1699<SeP>1198<SeP>1129<SeP>1457<SeP>1091<SeP>1586<SeP>1281<SeP>1269<SeP>1724<SeP>1714<SeP>1450<SeP>1442<SeP>1491<SeP>1282<SeP>1027<SeP>1155<SeP>1425<SeP>1069<SeP>1297<SeP>1507<SeP>1083<SeP>1585<SeP>1768<SeP>1289<SeP>1460<SeP>1696<SeP>1299<SeP>1137<SeP>932<SeP>966<SeP>974<SeP>876<SeP>1108<SeP>1675<SeP>1204<SeP>1189<SeP>1130<SeP>827<SeP>1108<SeP>917<SeP>1418<SeP>874<SeP>905<SeP>1153<SeP>1384<SeP>1656<SeP>1313<SeP>1092<SeP>1050<SeP>1182<SeP>1762<SeP>1014<SeP>1224<SeP>1029<SeP>1587<SeP>1050<SeP>998<SeP>1196<SeP>1137<SeP>855<SeP>937<SeP>1137<SeP>1457<SeP>1587<SeP>1484<SeP>1500<SeP>1171<SeP>945<SeP>1153<SeP>1289<SeP>1166<SeP>1194<SeP>1014<SeP>1009<SeP>1308<SeP>1462<SeP>1440<SeP>1581<SeP>1506<SeP>1315<SeP>1552<SeP>1475<SeP>1570<SeP>1311<SeP>1447<SeP>1293<SeP>1799<SeP>1454<SeP>1536<SeP>1557<SeP>1293<SeP>1491<SeP>1290<SeP>1325<SeP>1406<SeP>1466<SeP>1673<SeP>1217<SeP>1331<SeP>1268<SeP>1477<SeP>1308<SeP>1167<SeP>1676<SeP>1925<SeP>1457<SeP>1032<SeP>949<SeP>1792<SeP>1498<SeP>1334<SeP>1433<SeP>1018<SeP>1483<SeP>1329<SeP>1376<SeP>1472<SeP>1496<SeP>1670<SeP>1509<SeP>1602<SeP>1605<SeP>1481<SeP>1417<SeP>1669<SeP>1561<SeP>1198<SeP>1257<SeP>1889<SeP>1853<SeP>1832<SeP>1859<SeP>1733<SeP>1602<SeP>1548<SeP>1700<SeP>1562<SeP>1461<SeP>1868<SeP>1715<SeP>1752<SeP>1504<SeP>1459<SeP>1531<SeP>1505<SeP>1697<SeP>2102<SeP>1997<SeP>1455<SeP>1706<SeP>1794";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:52:48<SeP>2023-07-28 23:45:36<SeP>2023-07-30 11:38:24<SeP>2023-07-31 23:31:12<SeP>2023-08-02 11:24:00<SeP>2023-08-03 23:16:48<SeP>2023-08-05 11:09:36<SeP>2023-08-06 23:02:24<SeP>2023-08-08 10:55:12<SeP>2023-08-09 22:48:00<SeP>2023-08-11 10:40:48<SeP>2023-08-12 22:33:36<SeP>2023-08-14 10:26:24<SeP>2023-08-15 22:19:12<SeP>2023-08-17 10:12:00<SeP>2023-08-18 22:04:48<SeP>2023-08-20 09:57:36<SeP>2023-08-21 21:50:24<SeP>2023-08-23 09:43:12<SeP>2023-08-24 21:36:00<SeP>2023-08-26 09:28:48<SeP>2023-08-27 21:21:36<SeP>2023-08-29 09:14:24<SeP>2023-08-30 21:07:12<SeP>2023-09-01 09:00:00<SeP>2023-09-02 20:52:48<SeP>2023-09-04 08:45:36<SeP>2023-09-05 20:38:24<SeP>2023-09-07 08:31:12<SeP>2023-09-08 20:24:00<SeP>2023-09-10 08:16:48<SeP>2023-09-11 20:09:36<SeP>2023-09-13 08:02:24<SeP>2023-09-14 19:55:12<SeP>2023-09-16 07:48:00<SeP>2023-09-17 19:40:48<SeP>2023-09-19 07:33:36<SeP>2023-09-20 19:26:24<SeP>2023-09-22 07:19:12<SeP>2023-09-23 19:12:00<SeP>2023-09-25 07:04:48<SeP>2023-09-26 18:57:36<SeP>2023-09-28 06:50:24<SeP>2023-09-29 18:43:12<SeP>2023-10-01 06:36:00<SeP>2023-10-02 18:28:48<SeP>2023-10-04 06:21:36<SeP>2023-10-05 18:14:24<SeP>2023-10-07 06:07:12<SeP>2023-10-08 18:00:00<SeP>2023-10-10 05:52:48<SeP>2023-10-11 17:45:36<SeP>2023-10-13 05:38:24<SeP>2023-10-14 17:31:12<SeP>2023-10-16 05:24:00<SeP>2023-10-17 17:16:48<SeP>2023-10-19 05:09:36<SeP>2023-10-20 17:02:24<SeP>2023-10-22 04:55:12<SeP>2023-10-23 16:48:00<SeP>2023-10-25 04:40:48<SeP>2023-10-26 16:33:36<SeP>2023-10-28 04:26:24<SeP>2023-10-29 16:19:12<SeP>2023-10-31 04:12:00<SeP>2023-11-01 16:04:48<SeP>2023-11-03 03:57:36<SeP>2023-11-04 15:50:24<SeP>2023-11-06 02:43:12<SeP>2023-11-07 14:36:00<SeP>2023-11-09 02:28:48<SeP>2023-11-10 14:21:36<SeP>2023-11-12 02:14:24<SeP>2023-11-13 14:07:12<SeP>2023-11-15 02:00:00<SeP>2023-11-16 13:52:48<SeP>2023-11-18 01:45:36<SeP>2023-11-19 13:38:24<SeP>2023-11-21 01:31:12<SeP>2023-11-22 13:24:00<SeP>2023-11-24 01:16:48<SeP>2023-11-25 13:09:36<SeP>2023-11-27 01:02:24<SeP>2023-11-28 12:55:12<SeP>2023-11-30 00:48:00<SeP>2023-12-01 12:40:48<SeP>2023-12-03 00:33:36<SeP>2023-12-04 12:26:24<SeP>2023-12-06 00:19:12<SeP>2023-12-07 12:12:00<SeP>2023-12-09 00:04:48<SeP>2023-12-10 11:57:36<SeP>2023-12-11 23:50:24<SeP>2023-12-13 11:43:12<SeP>2023-12-14 23:36:00<SeP>2023-12-16 11:28:48<SeP>2023-12-17 23:21:36<SeP>2023-12-19 11:14:24<SeP>2023-12-20 23:07:12<SeP>2023-12-22 11:00:00<SeP>2023-12-23 22:52:48<SeP>2023-12-25 10:45:36<SeP>2023-12-26 22:38:24<SeP>2023-12-28 10:31:12<SeP>2023-12-29 22:24:00<SeP>2023-12-31 10:16:48<SeP>2024-01-01 22:09:36<SeP>2024-01-03 10:02:24<SeP>2024-01-04 21:55:12<SeP>2024-01-06 09:48:00<SeP>2024-01-07 21:40:48<SeP>2024-01-09 09:33:36<SeP>2024-01-10 21:26:24<SeP>2024-01-12 09:19:12<SeP>2024-01-13 21:12:00<SeP>2024-01-15 09:04:48<SeP>2024-01-16 20:57:36<SeP>2024-01-18 08:50:24<SeP>2024-01-19 20:43:12<SeP>2024-01-21 08:36:00<SeP>2024-01-22 20:28:48<SeP>2024-01-24 08:21:36<SeP>2024-01-25 20:14:24<SeP>2024-01-27 08:07:12<SeP>2024-01-28 20:00:00<SeP>2024-01-30 07:52:48<SeP>2024-01-31 19:45:36<SeP>2024-02-02 07:38:24<SeP>2024-02-03 19:31:12<SeP>2024-02-05 07:24:00<SeP>2024-02-06 19:16:48<SeP>2024-02-08 07:09:36<SeP>2024-02-09 19:02:24<SeP>2024-02-11 06:55:12<SeP>2024-02-12 18:48:00<SeP>2024-02-14 06:40:48<SeP>2024-02-15 18:33:36<SeP>2024-02-17 06:26:24<SeP>2024-02-18 18:19:12<SeP>2024-02-20 06:12:00<SeP>2024-02-21 18:04:48<SeP>2024-02-23 05:57:36<SeP>2024-02-24 17:50:24<SeP>2024-02-26 05:43:12<SeP>2024-02-27 17:36:00<SeP>2024-02-29 05:28:48<SeP>2024-03-01 17:21:36<SeP>2024-03-03 05:14:24<SeP>2024-03-04 17:07:12<SeP>2024-03-06 05:00:00<SeP>2024-03-07 16:52:48<SeP>2024-03-09 04:45:36<SeP>2024-03-10 17:38:24<SeP>2024-03-12 05:31:12<SeP>2024-03-13 17:24:00<SeP>2024-03-15 05:16:48<SeP>2024-03-16 17:09:36<SeP>2024-03-18 05:02:24<SeP>2024-03-19 16:55:12<SeP>2024-03-21 04:48:00<SeP>2024-03-22 16:40:48<SeP>2024-03-24 04:33:36<SeP>2024-03-25 16:26:24<SeP>2024-03-27 04:19:12<SeP>2024-03-28 16:12:00<SeP>2024-03-30 04:04:48<SeP>2024-03-31 15:57:36<SeP>2024-04-02 03:50:24<SeP>2024-04-03 15:43:12<SeP>2024-04-05 03:36:00<SeP>2024-04-06 15:28:48<SeP>2024-04-08 03:21:36<SeP>2024-04-09 15:14:24<SeP>2024-04-11 03:07:12<SeP>2024-04-12 15:00:00<SeP>2024-04-14 02:52:48<SeP>2024-04-15 14:45:36<SeP>2024-04-17 02:38:24<SeP>2024-04-18 14:31:12<SeP>2024-04-20 02:24:00<SeP>2024-04-21 14:16:48<SeP>2024-04-23 02:09:36<SeP>2024-04-24 14:02:24<SeP>2024-04-26 01:55:12<SeP>2024-04-27 13:48:00<SeP>2024-04-29 01:40:48<SeP>2024-04-30 13:33:36<SeP>2024-05-02 01:26:24<SeP>2024-05-03 13:19:12<SeP>2024-05-05 01:12:00<SeP>2024-05-06 13:04:48<SeP>2024-05-08 00:57:36<SeP>2024-05-09 12:50:24<SeP>2024-05-11 00:43:12<SeP>2024-05-12 12:36:00<SeP>2024-05-14 00:28:48<SeP>2024-05-15 12:21:36<SeP>2024-05-17 00:14:24<SeP>2024-05-18 12:07:12<SeP>2024-05-20 00:00:00<SeP>2024-05-21 11:52:48<SeP>2024-05-22 23:45:36<SeP>2024-05-24 11:38:24<SeP>2024-05-25 23:31:12<SeP>2024-05-27 11:24:00<SeP>2024-05-28 23:16:48<SeP>2024-05-30 11:09:36<SeP>2024-05-31 23:02:24<SeP>2024-06-02 10:55:12<SeP>2024-06-03 22:48:00<SeP>2024-06-05 10:40:48<SeP>2024-06-06 22:33:36<SeP>2024-06-08 10:26:24<SeP>2024-06-09 22:19:12<SeP>2024-06-11 10:12:00<SeP>2024-06-12 22:04:48<SeP>2024-06-14 09:57:36<SeP>2024-06-15 21:50:24<SeP>2024-06-17 09:43:12<SeP>2024-06-18 21:36:00<SeP>2024-06-20 09:28:48<SeP>2024-06-21 21:21:36<SeP>2024-06-23 09:14:24<SeP>2024-06-24 21:07:12<SeP>2024-06-26 09:00:00<SeP>2024-06-27 20:52:48<SeP>2024-06-29 08:45:36<SeP>2024-06-30 20:38:24<SeP>2024-07-02 08:31:12<SeP>2024-07-03 20:24:00<SeP>2024-07-05 08:16:48<SeP>2024-07-06 20:09:36<SeP>2024-07-08 08:02:24<SeP>2024-07-09 19:55:12<SeP>2024-07-11 07:48:00<SeP>2024-07-12 19:40:48<SeP>2024-07-14 07:33:36<SeP>2024-07-15 19:26:24<SeP>2024-07-17 07:19:12<SeP>2024-07-18 19:12:00<SeP>2024-07-20 07:04:48<SeP>2024-07-21 18:57:36<SeP>2024-07-23 06:50:24<SeP>2024-07-24 18:43:12<SeP>2024-07-26 06:36:00<SeP>2024-07-27 18:28:48<SeP>2024-07-29 06:21:36<SeP>2024-07-30 18:14:24<SeP>2024-08-01 06:07:12<SeP>2024-08-02 18:00:00<SeP>2024-08-04 05:52:48<SeP>2024-08-05 17:45:36<SeP>2024-08-07 05:38:24<SeP>2024-08-08 17:31:12<SeP>2024-08-10 05:24:00<SeP>2024-08-11 17:16:48<SeP>2024-08-13 05:09:36<SeP>2024-08-14 17:02:24<SeP>2024-08-16 04:55:12<SeP>2024-08-17 16:48:00<SeP>2024-08-19 04:40:48<SeP>2024-08-20 16:33:36<SeP>2024-08-22 04:26:24<SeP>2024-08-23 16:19:12<SeP>2024-08-25 04:12:00<SeP>2024-08-26 16:04:48<SeP>2024-08-28 03:57:36<SeP>2024-08-29 15:50:24<SeP>2024-08-31 03:43:12<SeP>2024-09-01 15:36:00<SeP>2024-09-03 03:28:48<SeP>2024-09-04 15:21:36<SeP>2024-09-06 03:14:24<SeP>2024-09-07 15:07:12<SeP>2024-09-09 03:00:00<SeP>2024-09-10 14:52:48<SeP>2024-09-12 02:45:36<SeP>2024-09-13 14:38:24<SeP>2024-09-15 02:31:12<SeP>2024-09-16 14:24:00<SeP>2024-09-18 02:16:48<SeP>2024-09-19 14:09:36<SeP>2024-09-21 02:02:24<SeP>2024-09-22 13:55:12<SeP>2024-09-24 01:48:00<SeP>2024-09-25 13:40:48<SeP>2024-09-27 01:33:36<SeP>2024-09-28 13:26:24<SeP>2024-09-30 01:19:12<SeP>2024-10-01 13:12:00<SeP>2024-10-03 01:04:48<SeP>2024-10-04 12:57:36<SeP>2024-10-06 00:50:24<SeP>2024-10-07 12:43:12<SeP>2024-10-09 00:36:00<SeP>2024-10-10 12:28:48<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:07:12<SeP>2024-10-16 12:00:00<SeP>2024-10-17 23:52:48<SeP>2024-10-19 11:45:36<SeP>2024-10-20 23:38:24<SeP>2024-10-22 11:31:12<SeP>2024-10-23 23:24:00<SeP>2024-10-25 11:16:48<SeP>2024-10-26 23:09:36<SeP>2024-10-28 11:02:24<SeP>2024-10-29 22:55:12<SeP>2024-10-31 10:48:00<SeP>2024-11-01 22:40:48<SeP>2024-11-03 09:33:36<SeP>2024-11-04 21:26:24<SeP>2024-11-06 09:19:12<SeP>2024-11-07 21:12:00<SeP>2024-11-09 09:04:48<SeP>2024-11-10 20:57:36<SeP>2024-11-12 08:50:24<SeP>2024-11-13 20:43:12<SeP>2024-11-15 08:36:00<SeP>2024-11-16 20:28:48<SeP>2024-11-18 08:21:36<SeP>2024-11-19 20:14:24<SeP>2024-11-21 08:07:12<SeP>2024-11-22 20:00:00<SeP>2024-11-24 07:52:48<SeP>2024-11-25 19:45:36<SeP>2024-11-27 07:38:24<SeP>2024-11-28 19:31:12<SeP>2024-11-30 07:24:00<SeP>2024-12-01 19:16:48<SeP>2024-12-03 07:09:36<SeP>2024-12-04 19:02:24<SeP>2024-12-06 06:55:12<SeP>2024-12-07 18:48:00<SeP>2024-12-09 06:40:48<SeP>2024-12-10 18:33:36<SeP>2024-12-12 06:26:24<SeP>2024-12-13 18:19:12<SeP>2024-12-15 06:12:00<SeP>2024-12-16 18:04:48<SeP>2024-12-18 05:57:36<SeP>2024-12-19 17:50:24<SeP>2024-12-21 05:43:12<SeP>2024-12-22 17:36:00<SeP>2024-12-24 05:28:48<SeP>2024-12-25 17:21:36<SeP>2024-12-27 05:14:24<SeP>2024-12-28 17:07:12<SeP>2024-12-30 05:00:00<SeP>2024-12-31 16:52:48<SeP>2025-01-02 04:45:36<SeP>2025-01-03 16:38:24<SeP>2025-01-05 04:31:12<SeP>2025-01-06 16:24:00<SeP>2025-01-08 04:16:48<SeP>2025-01-09 16:09:36<SeP>2025-01-11 04:02:24<SeP>2025-01-12 15:55:12<SeP>2025-01-14 03:48:00<SeP>2025-01-15 15:40:48<SeP>2025-01-17 03:33:36<SeP>2025-01-18 15:26:24<SeP>2025-01-20 03:19:12<SeP>2025-01-21 15:12:00<SeP>2025-01-23 03:04:48<SeP>2025-01-24 14:57:36<SeP>2025-01-26 02:50:24<SeP>2025-01-27 14:43:12<SeP>2025-01-29 02:36:00<SeP>2025-01-30 14:28:48<SeP>2025-02-01 02:21:36<SeP>2025-02-02 14:14:24<SeP>2025-02-04 02:07:12<SeP>2025-02-05 14:00:00<SeP>2025-02-07 01:52:48<SeP>2025-02-08 13:45:36<SeP>2025-02-10 01:38:24<SeP>2025-02-11 13:31:12<SeP>2025-02-13 01:24:00<SeP>2025-02-14 13:16:48<SeP>2025-02-16 01:09:36<SeP>2025-02-17 13:02:24<SeP>2025-02-19 00:55:12<SeP>2025-02-20 12:48:00<SeP>2025-02-22 00:40:48<SeP>2025-02-23 12:33:36<SeP>2025-02-25 00:26:24<SeP>2025-02-26 12:19:12<SeP>2025-02-28 00:12:00<SeP>2025-03-01 12:04:48<SeP>2025-03-02 23:57:36<SeP>2025-03-04 11:50:24<SeP>2025-03-05 23:43:12<SeP>2025-03-07 11:36:00<SeP>2025-03-08 23:28:48<SeP>2025-03-10 12:21:36<SeP>2025-03-12 00:14:24<SeP>2025-03-13 12:07:12";
  const itemLabel       = "Attacks";
  const itemData        = "247<SeP>526<SeP>1408<SeP>645<SeP>229<SeP>231<SeP>7053<SeP>790<SeP>9312<SeP>437<SeP>405<SeP>1349<SeP>1079<SeP>246<SeP>356<SeP>258<SeP>274<SeP>692<SeP>1389<SeP>8127<SeP>7773<SeP>6530<SeP>9507<SeP>439<SeP>306<SeP>401<SeP>217<SeP>393<SeP>5886<SeP>85<SeP>382<SeP>322<SeP>386<SeP>3362<SeP>9879<SeP>9301<SeP>10507<SeP>8694<SeP>6036<SeP>7518<SeP>7121<SeP>9532<SeP>9078<SeP>8320<SeP>7941<SeP>8637<SeP>9215<SeP>8458<SeP>6035<SeP>6502<SeP>11656<SeP>7406<SeP>8094<SeP>7632<SeP>10324<SeP>16024<SeP>19302<SeP>8642<SeP>9595<SeP>9513<SeP>7933<SeP>8864<SeP>8731<SeP>8980<SeP>7023<SeP>6840<SeP>6813<SeP>6976<SeP>4753<SeP>5251<SeP>6308<SeP>6361<SeP>5920<SeP>8358<SeP>4000<SeP>6096<SeP>5831<SeP>6787<SeP>5004<SeP>7245<SeP>4710<SeP>6563<SeP>6108<SeP>5672<SeP>5927<SeP>6231<SeP>21859<SeP>11873<SeP>34172<SeP>7826<SeP>7921<SeP>7165<SeP>11415<SeP>8041<SeP>4033<SeP>6821<SeP>3780<SeP>4775<SeP>7266<SeP>6616<SeP>7187<SeP>6910<SeP>6050<SeP>4220<SeP>7756<SeP>8826<SeP>7666<SeP>8020<SeP>3960<SeP>8305<SeP>10464<SeP>7265<SeP>2895<SeP>6007<SeP>7881<SeP>6463<SeP>6945<SeP>9136<SeP>6842<SeP>1345<SeP>2459<SeP>1023<SeP>2590<SeP>2403<SeP>1104<SeP>958<SeP>968<SeP>1370<SeP>1578<SeP>1216<SeP>865<SeP>1104<SeP>1070<SeP>806<SeP>1468<SeP>1520<SeP>1107<SeP>1693<SeP>2061<SeP>1671<SeP>11567<SeP>6176<SeP>11302<SeP>7343<SeP>5567<SeP>10714<SeP>9097<SeP>9302<SeP>8620<SeP>14282<SeP>8927<SeP>11450<SeP>10340<SeP>11993<SeP>12286<SeP>6896<SeP>3949<SeP>8149<SeP>23653<SeP>7547<SeP>7933<SeP>8340<SeP>14696<SeP>11943<SeP>7558<SeP>5038<SeP>7224<SeP>8763<SeP>25344<SeP>6990<SeP>10160<SeP>9180<SeP>6007<SeP>5916<SeP>6734<SeP>14906<SeP>5993<SeP>14289<SeP>8354<SeP>8342<SeP>6496<SeP>6136<SeP>3541<SeP>7091<SeP>7531<SeP>6261<SeP>4865<SeP>9372<SeP>15012<SeP>9663<SeP>9805<SeP>5103<SeP>7592<SeP>9107<SeP>9012<SeP>5848<SeP>2909<SeP>7654<SeP>2790<SeP>5266<SeP>4110<SeP>674<SeP>111<SeP>645<SeP>215<SeP>683<SeP>996<SeP>374<SeP>633<SeP>1267<SeP>1219<SeP>3177<SeP>22980<SeP>545<SeP>4491<SeP>2729<SeP>3011<SeP>7533<SeP>3130<SeP>4174<SeP>3141<SeP>3252<SeP>3072<SeP>3282<SeP>4779<SeP>1803<SeP>2923<SeP>2646<SeP>2179<SeP>1983<SeP>1879<SeP>1153<SeP>1918<SeP>850<SeP>1282<SeP>1601<SeP>26518<SeP>1688<SeP>4089<SeP>4204<SeP>1978<SeP>3745<SeP>2751<SeP>1907<SeP>3882<SeP>2120<SeP>4119<SeP>2063<SeP>2978<SeP>3940<SeP>5032<SeP>4951<SeP>5252<SeP>4376<SeP>2582<SeP>2731<SeP>4925<SeP>4082<SeP>10360<SeP>5169<SeP>2481<SeP>3273<SeP>2397<SeP>4375<SeP>3837<SeP>3939<SeP>2595<SeP>3919<SeP>4935<SeP>4060<SeP>6045<SeP>3966<SeP>6588<SeP>4852<SeP>5381<SeP>5093<SeP>22456<SeP>5312<SeP>10807<SeP>1983<SeP>3464<SeP>4232<SeP>4189<SeP>3746<SeP>5628<SeP>3764<SeP>4806<SeP>4613<SeP>3739<SeP>3312<SeP>1292<SeP>1981<SeP>3265<SeP>2860<SeP>2499<SeP>3682<SeP>4343<SeP>4181<SeP>3417<SeP>4330<SeP>3462<SeP>3236<SeP>4086<SeP>8578<SeP>6239<SeP>5585<SeP>5219<SeP>4730<SeP>3619<SeP>3583<SeP>4861<SeP>5942<SeP>5746<SeP>4508<SeP>4237<SeP>949<SeP>1047<SeP>1989<SeP>1386<SeP>1232<SeP>1699<SeP>1560<SeP>1349<SeP>3399<SeP>4536<SeP>6372<SeP>34445<SeP>5123<SeP>4492<SeP>21573<SeP>8030<SeP>5198<SeP>6240<SeP>4583<SeP>24576<SeP>5135<SeP>5264<SeP>4943<SeP>5874<SeP>14081<SeP>21381<SeP>4426<SeP>3577<SeP>4639<SeP>5099<SeP>6301<SeP>3159<SeP>3145<SeP>3938<SeP>5441<SeP>5011<SeP>10651<SeP>12232<SeP>5879<SeP>6520<SeP>2811<SeP>2772<SeP>3567<SeP>5150<SeP>4073<SeP>3796<SeP>2609<SeP>3676<SeP>3172<SeP>4505<SeP>5694<SeP>8873<SeP>10257<SeP>8689<SeP>9118<SeP>7965<SeP>7145<SeP>5198<SeP>4927<SeP>7279<SeP>22479<SeP>3350<SeP>4385<SeP>3214<SeP>11447<SeP>5554<SeP>4373<SeP>4829<SeP>4139<SeP>2993<SeP>9335<SeP>9097<SeP>5337<SeP>3567<SeP>3248<SeP>2474<SeP>2523<SeP>2563<SeP>2062<SeP>2593<SeP>1805<SeP>2675<SeP>2793<SeP>2975<SeP>3227";
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:52:48<SeP>2023-07-28 23:45:36<SeP>2023-07-30 11:38:24<SeP>2023-07-31 23:31:12<SeP>2023-08-02 11:24:00<SeP>2023-08-03 23:16:48<SeP>2023-08-05 11:09:36<SeP>2023-08-06 23:02:24<SeP>2023-08-08 10:55:12<SeP>2023-08-09 22:48:00<SeP>2023-08-11 10:40:48<SeP>2023-08-12 22:33:36<SeP>2023-08-14 10:26:24<SeP>2023-08-15 22:19:12<SeP>2023-08-17 10:12:00<SeP>2023-08-18 22:04:48<SeP>2023-08-20 09:57:36<SeP>2023-08-21 21:50:24<SeP>2023-08-23 09:43:12<SeP>2023-08-24 21:36:00<SeP>2023-08-26 09:28:48<SeP>2023-08-27 21:21:36<SeP>2023-08-29 09:14:24<SeP>2023-08-30 21:07:12<SeP>2023-09-01 09:00:00<SeP>2023-09-02 20:52:48<SeP>2023-09-04 08:45:36<SeP>2023-09-05 20:38:24<SeP>2023-09-07 08:31:12<SeP>2023-09-08 20:24:00<SeP>2023-09-10 08:16:48<SeP>2023-09-11 20:09:36<SeP>2023-09-13 08:02:24<SeP>2023-09-14 19:55:12<SeP>2023-09-16 07:48:00<SeP>2023-09-17 19:40:48<SeP>2023-09-19 07:33:36<SeP>2023-09-20 19:26:24<SeP>2023-09-22 07:19:12<SeP>2023-09-23 19:12:00<SeP>2023-09-25 07:04:48<SeP>2023-09-26 18:57:36<SeP>2023-09-28 06:50:24<SeP>2023-09-29 18:43:12<SeP>2023-10-01 06:36:00<SeP>2023-10-02 18:28:48<SeP>2023-10-04 06:21:36<SeP>2023-10-05 18:14:24<SeP>2023-10-07 06:07:12<SeP>2023-10-08 18:00:00<SeP>2023-10-10 05:52:48<SeP>2023-10-11 17:45:36<SeP>2023-10-13 05:38:24<SeP>2023-10-14 17:31:12<SeP>2023-10-16 05:24:00<SeP>2023-10-17 17:16:48<SeP>2023-10-19 05:09:36<SeP>2023-10-20 17:02:24<SeP>2023-10-22 04:55:12<SeP>2023-10-23 16:48:00<SeP>2023-10-25 04:40:48<SeP>2023-10-26 16:33:36<SeP>2023-10-28 04:26:24<SeP>2023-10-29 16:19:12<SeP>2023-10-31 04:12:00<SeP>2023-11-01 16:04:48<SeP>2023-11-03 03:57:36<SeP>2023-11-04 15:50:24<SeP>2023-11-06 02:43:12<SeP>2023-11-07 14:36:00<SeP>2023-11-09 02:28:48<SeP>2023-11-10 14:21:36<SeP>2023-11-12 02:14:24<SeP>2023-11-13 14:07:12<SeP>2023-11-15 02:00:00<SeP>2023-11-16 13:52:48<SeP>2023-11-18 01:45:36<SeP>2023-11-19 13:38:24<SeP>2023-11-21 01:31:12<SeP>2023-11-22 13:24:00<SeP>2023-11-24 01:16:48<SeP>2023-11-25 13:09:36<SeP>2023-11-27 01:02:24<SeP>2023-11-28 12:55:12<SeP>2023-11-30 00:48:00<SeP>2023-12-01 12:40:48<SeP>2023-12-03 00:33:36<SeP>2023-12-04 12:26:24<SeP>2023-12-06 00:19:12<SeP>2023-12-07 12:12:00<SeP>2023-12-09 00:04:48<SeP>2023-12-10 11:57:36<SeP>2023-12-11 23:50:24<SeP>2023-12-13 11:43:12<SeP>2023-12-14 23:36:00<SeP>2023-12-16 11:28:48<SeP>2023-12-17 23:21:36<SeP>2023-12-19 11:14:24<SeP>2023-12-20 23:07:12<SeP>2023-12-22 11:00:00<SeP>2023-12-23 22:52:48<SeP>2023-12-25 10:45:36<SeP>2023-12-26 22:38:24<SeP>2023-12-28 10:31:12<SeP>2023-12-29 22:24:00<SeP>2023-12-31 10:16:48<SeP>2024-01-01 22:09:36<SeP>2024-01-03 10:02:24<SeP>2024-01-04 21:55:12<SeP>2024-01-06 09:48:00<SeP>2024-01-07 21:40:48<SeP>2024-01-09 09:33:36<SeP>2024-01-10 21:26:24<SeP>2024-01-12 09:19:12<SeP>2024-01-13 21:12:00<SeP>2024-01-15 09:04:48<SeP>2024-01-16 20:57:36<SeP>2024-01-18 08:50:24<SeP>2024-01-19 20:43:12<SeP>2024-01-21 08:36:00<SeP>2024-01-22 20:28:48<SeP>2024-01-24 08:21:36<SeP>2024-01-25 20:14:24<SeP>2024-01-27 08:07:12<SeP>2024-01-28 20:00:00<SeP>2024-01-30 07:52:48<SeP>2024-01-31 19:45:36<SeP>2024-02-02 07:38:24<SeP>2024-02-03 19:31:12<SeP>2024-02-05 07:24:00<SeP>2024-02-06 19:16:48<SeP>2024-02-08 07:09:36<SeP>2024-02-09 19:02:24<SeP>2024-02-11 06:55:12<SeP>2024-02-12 18:48:00<SeP>2024-02-14 06:40:48<SeP>2024-02-15 18:33:36<SeP>2024-02-17 06:26:24<SeP>2024-02-18 18:19:12<SeP>2024-02-20 06:12:00<SeP>2024-02-21 18:04:48<SeP>2024-02-23 05:57:36<SeP>2024-02-24 17:50:24<SeP>2024-02-26 05:43:12<SeP>2024-02-27 17:36:00<SeP>2024-02-29 05:28:48<SeP>2024-03-01 17:21:36<SeP>2024-03-03 05:14:24<SeP>2024-03-04 17:07:12<SeP>2024-03-06 05:00:00<SeP>2024-03-07 16:52:48<SeP>2024-03-09 04:45:36<SeP>2024-03-10 17:38:24<SeP>2024-03-12 05:31:12<SeP>2024-03-13 17:24:00<SeP>2024-03-15 05:16:48<SeP>2024-03-16 17:09:36<SeP>2024-03-18 05:02:24<SeP>2024-03-19 16:55:12<SeP>2024-03-21 04:48:00<SeP>2024-03-22 16:40:48<SeP>2024-03-24 04:33:36<SeP>2024-03-25 16:26:24<SeP>2024-03-27 04:19:12<SeP>2024-03-28 16:12:00<SeP>2024-03-30 04:04:48<SeP>2024-03-31 15:57:36<SeP>2024-04-02 03:50:24<SeP>2024-04-03 15:43:12<SeP>2024-04-05 03:36:00<SeP>2024-04-06 15:28:48<SeP>2024-04-08 03:21:36<SeP>2024-04-09 15:14:24<SeP>2024-04-11 03:07:12<SeP>2024-04-12 15:00:00<SeP>2024-04-14 02:52:48<SeP>2024-04-15 14:45:36<SeP>2024-04-17 02:38:24<SeP>2024-04-18 14:31:12<SeP>2024-04-20 02:24:00<SeP>2024-04-21 14:16:48<SeP>2024-04-23 02:09:36<SeP>2024-04-24 14:02:24<SeP>2024-04-26 01:55:12<SeP>2024-04-27 13:48:00<SeP>2024-04-29 01:40:48<SeP>2024-04-30 13:33:36<SeP>2024-05-02 01:26:24<SeP>2024-05-03 13:19:12<SeP>2024-05-05 01:12:00<SeP>2024-05-06 13:04:48<SeP>2024-05-08 00:57:36<SeP>2024-05-09 12:50:24<SeP>2024-05-11 00:43:12<SeP>2024-05-12 12:36:00<SeP>2024-05-14 00:28:48<SeP>2024-05-15 12:21:36<SeP>2024-05-17 00:14:24<SeP>2024-05-18 12:07:12<SeP>2024-05-20 00:00:00<SeP>2024-05-21 11:52:48<SeP>2024-05-22 23:45:36<SeP>2024-05-24 11:38:24<SeP>2024-05-25 23:31:12<SeP>2024-05-27 11:24:00<SeP>2024-05-28 23:16:48<SeP>2024-05-30 11:09:36<SeP>2024-05-31 23:02:24<SeP>2024-06-02 10:55:12<SeP>2024-06-03 22:48:00<SeP>2024-06-05 10:40:48<SeP>2024-06-06 22:33:36<SeP>2024-06-08 10:26:24<SeP>2024-06-09 22:19:12<SeP>2024-06-11 10:12:00<SeP>2024-06-12 22:04:48<SeP>2024-06-14 09:57:36<SeP>2024-06-15 21:50:24<SeP>2024-06-17 09:43:12<SeP>2024-06-18 21:36:00<SeP>2024-06-20 09:28:48<SeP>2024-06-21 21:21:36<SeP>2024-06-23 09:14:24<SeP>2024-06-24 21:07:12<SeP>2024-06-26 09:00:00<SeP>2024-06-27 20:52:48<SeP>2024-06-29 08:45:36<SeP>2024-06-30 20:38:24<SeP>2024-07-02 08:31:12<SeP>2024-07-03 20:24:00<SeP>2024-07-05 08:16:48<SeP>2024-07-06 20:09:36<SeP>2024-07-08 08:02:24<SeP>2024-07-09 19:55:12<SeP>2024-07-11 07:48:00<SeP>2024-07-12 19:40:48<SeP>2024-07-14 07:33:36<SeP>2024-07-15 19:26:24<SeP>2024-07-17 07:19:12<SeP>2024-07-18 19:12:00<SeP>2024-07-20 07:04:48<SeP>2024-07-21 18:57:36<SeP>2024-07-23 06:50:24<SeP>2024-07-24 18:43:12<SeP>2024-07-26 06:36:00<SeP>2024-07-27 18:28:48<SeP>2024-07-29 06:21:36<SeP>2024-07-30 18:14:24<SeP>2024-08-01 06:07:12<SeP>2024-08-02 18:00:00<SeP>2024-08-04 05:52:48<SeP>2024-08-05 17:45:36<SeP>2024-08-07 05:38:24<SeP>2024-08-08 17:31:12<SeP>2024-08-10 05:24:00<SeP>2024-08-11 17:16:48<SeP>2024-08-13 05:09:36<SeP>2024-08-14 17:02:24<SeP>2024-08-16 04:55:12<SeP>2024-08-17 16:48:00<SeP>2024-08-19 04:40:48<SeP>2024-08-20 16:33:36<SeP>2024-08-22 04:26:24<SeP>2024-08-23 16:19:12<SeP>2024-08-25 04:12:00<SeP>2024-08-26 16:04:48<SeP>2024-08-28 03:57:36<SeP>2024-08-29 15:50:24<SeP>2024-08-31 03:43:12<SeP>2024-09-01 15:36:00<SeP>2024-09-03 03:28:48<SeP>2024-09-04 15:21:36<SeP>2024-09-06 03:14:24<SeP>2024-09-07 15:07:12<SeP>2024-09-09 03:00:00<SeP>2024-09-10 14:52:48<SeP>2024-09-12 02:45:36<SeP>2024-09-13 14:38:24<SeP>2024-09-15 02:31:12<SeP>2024-09-16 14:24:00<SeP>2024-09-18 02:16:48<SeP>2024-09-19 14:09:36<SeP>2024-09-21 02:02:24<SeP>2024-09-22 13:55:12<SeP>2024-09-24 01:48:00<SeP>2024-09-25 13:40:48<SeP>2024-09-27 01:33:36<SeP>2024-09-28 13:26:24<SeP>2024-09-30 01:19:12<SeP>2024-10-01 13:12:00<SeP>2024-10-03 01:04:48<SeP>2024-10-04 12:57:36<SeP>2024-10-06 00:50:24<SeP>2024-10-07 12:43:12<SeP>2024-10-09 00:36:00<SeP>2024-10-10 12:28:48<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:07:12<SeP>2024-10-16 12:00:00<SeP>2024-10-17 23:52:48<SeP>2024-10-19 11:45:36<SeP>2024-10-20 23:38:24<SeP>2024-10-22 11:31:12<SeP>2024-10-23 23:24:00<SeP>2024-10-25 11:16:48<SeP>2024-10-26 23:09:36<SeP>2024-10-28 11:02:24<SeP>2024-10-29 22:55:12<SeP>2024-10-31 10:48:00<SeP>2024-11-01 22:40:48<SeP>2024-11-03 09:33:36<SeP>2024-11-04 21:26:24<SeP>2024-11-06 09:19:12<SeP>2024-11-07 21:12:00<SeP>2024-11-09 09:04:48<SeP>2024-11-10 20:57:36<SeP>2024-11-12 08:50:24<SeP>2024-11-13 20:43:12<SeP>2024-11-15 08:36:00<SeP>2024-11-16 20:28:48<SeP>2024-11-18 08:21:36<SeP>2024-11-19 20:14:24<SeP>2024-11-21 08:07:12<SeP>2024-11-22 20:00:00<SeP>2024-11-24 07:52:48<SeP>2024-11-25 19:45:36<SeP>2024-11-27 07:38:24<SeP>2024-11-28 19:31:12<SeP>2024-11-30 07:24:00<SeP>2024-12-01 19:16:48<SeP>2024-12-03 07:09:36<SeP>2024-12-04 19:02:24<SeP>2024-12-06 06:55:12<SeP>2024-12-07 18:48:00<SeP>2024-12-09 06:40:48<SeP>2024-12-10 18:33:36<SeP>2024-12-12 06:26:24<SeP>2024-12-13 18:19:12<SeP>2024-12-15 06:12:00<SeP>2024-12-16 18:04:48<SeP>2024-12-18 05:57:36<SeP>2024-12-19 17:50:24<SeP>2024-12-21 05:43:12<SeP>2024-12-22 17:36:00<SeP>2024-12-24 05:28:48<SeP>2024-12-25 17:21:36<SeP>2024-12-27 05:14:24<SeP>2024-12-28 17:07:12<SeP>2024-12-30 05:00:00<SeP>2024-12-31 16:52:48<SeP>2025-01-02 04:45:36<SeP>2025-01-03 16:38:24<SeP>2025-01-05 04:31:12<SeP>2025-01-06 16:24:00<SeP>2025-01-08 04:16:48<SeP>2025-01-09 16:09:36<SeP>2025-01-11 04:02:24<SeP>2025-01-12 15:55:12<SeP>2025-01-14 03:48:00<SeP>2025-01-15 15:40:48<SeP>2025-01-17 03:33:36<SeP>2025-01-18 15:26:24<SeP>2025-01-20 03:19:12<SeP>2025-01-21 15:12:00<SeP>2025-01-23 03:04:48<SeP>2025-01-24 14:57:36<SeP>2025-01-26 02:50:24<SeP>2025-01-27 14:43:12<SeP>2025-01-29 02:36:00<SeP>2025-01-30 14:28:48<SeP>2025-02-01 02:21:36<SeP>2025-02-02 14:14:24<SeP>2025-02-04 02:07:12<SeP>2025-02-05 14:00:00<SeP>2025-02-07 01:52:48<SeP>2025-02-08 13:45:36<SeP>2025-02-10 01:38:24<SeP>2025-02-11 13:31:12<SeP>2025-02-13 01:24:00<SeP>2025-02-14 13:16:48<SeP>2025-02-16 01:09:36<SeP>2025-02-17 13:02:24<SeP>2025-02-19 00:55:12<SeP>2025-02-20 12:48:00<SeP>2025-02-22 00:40:48<SeP>2025-02-23 12:33:36<SeP>2025-02-25 00:26:24<SeP>2025-02-26 12:19:12<SeP>2025-02-28 00:12:00<SeP>2025-03-01 12:04:48<SeP>2025-03-02 23:57:36<SeP>2025-03-04 11:50:24<SeP>2025-03-05 23:43:12<SeP>2025-03-07 11:36:00<SeP>2025-03-08 23:28:48<SeP>2025-03-10 12:21:36<SeP>2025-03-12 00:14:24<SeP>2025-03-13 12:07:12";
  const item1Label       = "Escaneos";
  const item1Data        = "788<SeP>1529<SeP>1387<SeP>1495<SeP>1283<SeP>1749<SeP>949<SeP>966<SeP>1172<SeP>3419<SeP>3383<SeP>1025<SeP>3323<SeP>896<SeP>781<SeP>891<SeP>1455<SeP>3231<SeP>1462<SeP>1486<SeP>1063<SeP>957<SeP>1100<SeP>1217<SeP>933<SeP>762<SeP>934<SeP>3645<SeP>959<SeP>852<SeP>1464<SeP>1280<SeP>830<SeP>2902<SeP>1772<SeP>2654<SeP>1916<SeP>1642<SeP>1467<SeP>1332<SeP>1951<SeP>1953<SeP>2063<SeP>1587<SeP>1676<SeP>1569<SeP>1798<SeP>1718<SeP>1887<SeP>1880<SeP>1854<SeP>1561<SeP>3286<SeP>1402<SeP>1770<SeP>2062<SeP>1894<SeP>2139<SeP>1981<SeP>3330<SeP>1472<SeP>1491<SeP>1492<SeP>1552<SeP>1885<SeP>1608<SeP>1269<SeP>1435<SeP>1208<SeP>2397<SeP>1266<SeP>1138<SeP>1343<SeP>2465<SeP>7067<SeP>1340<SeP>1328<SeP>1408<SeP>2239<SeP>1263<SeP>2832<SeP>5091<SeP>1624<SeP>1513<SeP>1025<SeP>3292<SeP>1267<SeP>1117<SeP>996<SeP>1106<SeP>1060<SeP>3026<SeP>1252<SeP>1300<SeP>2931<SeP>6537<SeP>1392<SeP>1017<SeP>945<SeP>931<SeP>1027<SeP>982<SeP>1031<SeP>1058<SeP>4376<SeP>1822<SeP>1405<SeP>1508<SeP>544<SeP>1444<SeP>1337<SeP>1201<SeP>887<SeP>2396<SeP>1072<SeP>1225<SeP>1109<SeP>929<SeP>1199<SeP>665<SeP>933<SeP>887<SeP>752<SeP>1127<SeP>881<SeP>925<SeP>844<SeP>851<SeP>893<SeP>717<SeP>863<SeP>912<SeP>914<SeP>919<SeP>841<SeP>846<SeP>740<SeP>879<SeP>1080<SeP>799<SeP>856<SeP>938<SeP>958<SeP>1119<SeP>998<SeP>585<SeP>834<SeP>855<SeP>896<SeP>1297<SeP>951<SeP>1131<SeP>1259<SeP>1084<SeP>996<SeP>928<SeP>922<SeP>842<SeP>980<SeP>1113<SeP>905<SeP>886<SeP>916<SeP>1104<SeP>1020<SeP>1061<SeP>1012<SeP>1185<SeP>885<SeP>893<SeP>1706<SeP>1665<SeP>1283<SeP>1018<SeP>1028<SeP>1174<SeP>1020<SeP>974<SeP>782<SeP>893<SeP>954<SeP>1090<SeP>819<SeP>1122<SeP>1291<SeP>1181<SeP>1121<SeP>1364<SeP>1243<SeP>1225<SeP>1393<SeP>1271<SeP>1613<SeP>1908<SeP>1478<SeP>1240<SeP>759<SeP>1128<SeP>907<SeP>1064<SeP>636<SeP>836<SeP>1000<SeP>837<SeP>4160<SeP>4340<SeP>2034<SeP>1480<SeP>1146<SeP>885<SeP>1115<SeP>877<SeP>1058<SeP>983<SeP>1141<SeP>994<SeP>1314<SeP>2276<SeP>996<SeP>1263<SeP>1260<SeP>1268<SeP>1196<SeP>1078<SeP>1011<SeP>1025<SeP>1156<SeP>1092<SeP>1190<SeP>918<SeP>1153<SeP>865<SeP>1401<SeP>1164<SeP>1157<SeP>1198<SeP>1352<SeP>1252<SeP>1620<SeP>1220<SeP>1181<SeP>1201<SeP>1136<SeP>2003<SeP>1292<SeP>1887<SeP>1745<SeP>1421<SeP>2017<SeP>1699<SeP>1198<SeP>1129<SeP>1457<SeP>1091<SeP>1586<SeP>1281<SeP>1269<SeP>1724<SeP>1714<SeP>1450<SeP>1442<SeP>1491<SeP>1282<SeP>1027<SeP>1155<SeP>1425<SeP>1069<SeP>1297<SeP>1507<SeP>1083<SeP>1585<SeP>1768<SeP>1289<SeP>1460<SeP>1696<SeP>1299<SeP>1137<SeP>932<SeP>966<SeP>974<SeP>876<SeP>1108<SeP>1675<SeP>1204<SeP>1189<SeP>1130<SeP>827<SeP>1108<SeP>917<SeP>1418<SeP>874<SeP>905<SeP>1153<SeP>1384<SeP>1656<SeP>1313<SeP>1092<SeP>1050<SeP>1182<SeP>1762<SeP>1014<SeP>1224<SeP>1029<SeP>1587<SeP>1050<SeP>998<SeP>1196<SeP>1137<SeP>855<SeP>937<SeP>1137<SeP>1457<SeP>1587<SeP>1484<SeP>1500<SeP>1171<SeP>945<SeP>1153<SeP>1289<SeP>1166<SeP>1194<SeP>1014<SeP>1009<SeP>1308<SeP>1462<SeP>1440<SeP>1581<SeP>1506<SeP>1315<SeP>1552<SeP>1475<SeP>1570<SeP>1311<SeP>1447<SeP>1293<SeP>1799<SeP>1454<SeP>1536<SeP>1557<SeP>1293<SeP>1491<SeP>1290<SeP>1325<SeP>1406<SeP>1466<SeP>1673<SeP>1217<SeP>1331<SeP>1268<SeP>1477<SeP>1308<SeP>1167<SeP>1676<SeP>1925<SeP>1457<SeP>1032<SeP>949<SeP>1792<SeP>1498<SeP>1334<SeP>1433<SeP>1018<SeP>1483<SeP>1329<SeP>1376<SeP>1472<SeP>1496<SeP>1670<SeP>1509<SeP>1602<SeP>1605<SeP>1481<SeP>1417<SeP>1669<SeP>1561<SeP>1198<SeP>1257<SeP>1889<SeP>1853<SeP>1832<SeP>1859<SeP>1733<SeP>1602<SeP>1548<SeP>1700<SeP>1562<SeP>1461<SeP>1868<SeP>1715<SeP>1752<SeP>1504<SeP>1459<SeP>1531<SeP>1505<SeP>1697<SeP>2102<SeP>1997<SeP>1455<SeP>1706<SeP>1794";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "247<SeP>526<SeP>1408<SeP>645<SeP>229<SeP>231<SeP>7053<SeP>790<SeP>9312<SeP>437<SeP>405<SeP>1349<SeP>1079<SeP>246<SeP>356<SeP>258<SeP>274<SeP>692<SeP>1389<SeP>8127<SeP>7773<SeP>6530<SeP>9507<SeP>439<SeP>306<SeP>401<SeP>217<SeP>393<SeP>5886<SeP>85<SeP>382<SeP>322<SeP>386<SeP>3362<SeP>9879<SeP>9301<SeP>10507<SeP>8694<SeP>6036<SeP>7518<SeP>7121<SeP>9532<SeP>9078<SeP>8320<SeP>7941<SeP>8637<SeP>9215<SeP>8458<SeP>6035<SeP>6502<SeP>11656<SeP>7406<SeP>8094<SeP>7632<SeP>10324<SeP>16024<SeP>19302<SeP>8642<SeP>9595<SeP>9513<SeP>7933<SeP>8864<SeP>8731<SeP>8980<SeP>7023<SeP>6840<SeP>6813<SeP>6976<SeP>4753<SeP>5251<SeP>6308<SeP>6361<SeP>5920<SeP>8358<SeP>4000<SeP>6096<SeP>5831<SeP>6787<SeP>5004<SeP>7245<SeP>4710<SeP>6563<SeP>6108<SeP>5672<SeP>5927<SeP>6231<SeP>21859<SeP>11873<SeP>34172<SeP>7826<SeP>7921<SeP>7165<SeP>11415<SeP>8041<SeP>4033<SeP>6821<SeP>3780<SeP>4775<SeP>7266<SeP>6616<SeP>7187<SeP>6910<SeP>6050<SeP>4220<SeP>7756<SeP>8826<SeP>7666<SeP>8020<SeP>3960<SeP>8305<SeP>10464<SeP>7265<SeP>2895<SeP>6007<SeP>7881<SeP>6463<SeP>6945<SeP>9136<SeP>6842<SeP>1345<SeP>2459<SeP>1023<SeP>2590<SeP>2403<SeP>1104<SeP>958<SeP>968<SeP>1370<SeP>1578<SeP>1216<SeP>865<SeP>1104<SeP>1070<SeP>806<SeP>1468<SeP>1520<SeP>1107<SeP>1693<SeP>2061<SeP>1671<SeP>11567<SeP>6176<SeP>11302<SeP>7343<SeP>5567<SeP>10714<SeP>9097<SeP>9302<SeP>8620<SeP>14282<SeP>8927<SeP>11450<SeP>10340<SeP>11993<SeP>12286<SeP>6896<SeP>3949<SeP>8149<SeP>23653<SeP>7547<SeP>7933<SeP>8340<SeP>14696<SeP>11943<SeP>7558<SeP>5038<SeP>7224<SeP>8763<SeP>25344<SeP>6990<SeP>10160<SeP>9180<SeP>6007<SeP>5916<SeP>6734<SeP>14906<SeP>5993<SeP>14289<SeP>8354<SeP>8342<SeP>6496<SeP>6136<SeP>3541<SeP>7091<SeP>7531<SeP>6261<SeP>4865<SeP>9372<SeP>15012<SeP>9663<SeP>9805<SeP>5103<SeP>7592<SeP>9107<SeP>9012<SeP>5848<SeP>2909<SeP>7654<SeP>2790<SeP>5266<SeP>4110<SeP>674<SeP>111<SeP>645<SeP>215<SeP>683<SeP>996<SeP>374<SeP>633<SeP>1267<SeP>1219<SeP>3177<SeP>22980<SeP>545<SeP>4491<SeP>2729<SeP>3011<SeP>7533<SeP>3130<SeP>4174<SeP>3141<SeP>3252<SeP>3072<SeP>3282<SeP>4779<SeP>1803<SeP>2923<SeP>2646<SeP>2179<SeP>1983<SeP>1879<SeP>1153<SeP>1918<SeP>850<SeP>1282<SeP>1601<SeP>26518<SeP>1688<SeP>4089<SeP>4204<SeP>1978<SeP>3745<SeP>2751<SeP>1907<SeP>3882<SeP>2120<SeP>4119<SeP>2063<SeP>2978<SeP>3940<SeP>5032<SeP>4951<SeP>5252<SeP>4376<SeP>2582<SeP>2731<SeP>4925<SeP>4082<SeP>10360<SeP>5169<SeP>2481<SeP>3273<SeP>2397<SeP>4375<SeP>3837<SeP>3939<SeP>2595<SeP>3919<SeP>4935<SeP>4060<SeP>6045<SeP>3966<SeP>6588<SeP>4852<SeP>5381<SeP>5093<SeP>22456<SeP>5312<SeP>10807<SeP>1983<SeP>3464<SeP>4232<SeP>4189<SeP>3746<SeP>5628<SeP>3764<SeP>4806<SeP>4613<SeP>3739<SeP>3312<SeP>1292<SeP>1981<SeP>3265<SeP>2860<SeP>2499<SeP>3682<SeP>4343<SeP>4181<SeP>3417<SeP>4330<SeP>3462<SeP>3236<SeP>4086<SeP>8578<SeP>6239<SeP>5585<SeP>5219<SeP>4730<SeP>3619<SeP>3583<SeP>4861<SeP>5942<SeP>5746<SeP>4508<SeP>4237<SeP>949<SeP>1047<SeP>1989<SeP>1386<SeP>1232<SeP>1699<SeP>1560<SeP>1349<SeP>3399<SeP>4536<SeP>6372<SeP>34445<SeP>5123<SeP>4492<SeP>21573<SeP>8030<SeP>5198<SeP>6240<SeP>4583<SeP>24576<SeP>5135<SeP>5264<SeP>4943<SeP>5874<SeP>14081<SeP>21381<SeP>4426<SeP>3577<SeP>4639<SeP>5099<SeP>6301<SeP>3159<SeP>3145<SeP>3938<SeP>5441<SeP>5011<SeP>10651<SeP>12232<SeP>5879<SeP>6520<SeP>2811<SeP>2772<SeP>3567<SeP>5150<SeP>4073<SeP>3796<SeP>2609<SeP>3676<SeP>3172<SeP>4505<SeP>5694<SeP>8873<SeP>10257<SeP>8689<SeP>9118<SeP>7965<SeP>7145<SeP>5198<SeP>4927<SeP>7279<SeP>22479<SeP>3350<SeP>4385<SeP>3214<SeP>11447<SeP>5554<SeP>4373<SeP>4829<SeP>4139<SeP>2993<SeP>9335<SeP>9097<SeP>5337<SeP>3567<SeP>3248<SeP>2474<SeP>2523<SeP>2563<SeP>2062<SeP>2593<SeP>1805<SeP>2675<SeP>2793<SeP>2975<SeP>3227";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:52:48<SeP>2023-07-28 23:45:36<SeP>2023-07-30 11:38:24<SeP>2023-07-31 23:31:12<SeP>2023-08-02 11:24:00<SeP>2023-08-03 23:16:48<SeP>2023-08-05 11:09:36<SeP>2023-08-06 23:02:24<SeP>2023-08-08 10:55:12<SeP>2023-08-09 22:48:00<SeP>2023-08-11 10:40:48<SeP>2023-08-12 22:33:36<SeP>2023-08-14 10:26:24<SeP>2023-08-15 22:19:12<SeP>2023-08-17 10:12:00<SeP>2023-08-18 22:04:48<SeP>2023-08-20 09:57:36<SeP>2023-08-21 21:50:24<SeP>2023-08-23 09:43:12<SeP>2023-08-24 21:36:00<SeP>2023-08-26 09:28:48<SeP>2023-08-27 21:21:36<SeP>2023-08-29 09:14:24<SeP>2023-08-30 21:07:12<SeP>2023-09-01 09:00:00<SeP>2023-09-02 20:52:48<SeP>2023-09-04 08:45:36<SeP>2023-09-05 20:38:24<SeP>2023-09-07 08:31:12<SeP>2023-09-08 20:24:00<SeP>2023-09-10 08:16:48<SeP>2023-09-11 20:09:36<SeP>2023-09-13 08:02:24<SeP>2023-09-14 19:55:12<SeP>2023-09-16 07:48:00<SeP>2023-09-17 19:40:48<SeP>2023-09-19 07:33:36<SeP>2023-09-20 19:26:24<SeP>2023-09-22 07:19:12<SeP>2023-09-23 19:12:00<SeP>2023-09-25 07:04:48<SeP>2023-09-26 18:57:36<SeP>2023-09-28 06:50:24<SeP>2023-09-29 18:43:12<SeP>2023-10-01 06:36:00<SeP>2023-10-02 18:28:48<SeP>2023-10-04 06:21:36<SeP>2023-10-05 18:14:24<SeP>2023-10-07 06:07:12<SeP>2023-10-08 18:00:00<SeP>2023-10-10 05:52:48<SeP>2023-10-11 17:45:36<SeP>2023-10-13 05:38:24<SeP>2023-10-14 17:31:12<SeP>2023-10-16 05:24:00<SeP>2023-10-17 17:16:48<SeP>2023-10-19 05:09:36<SeP>2023-10-20 17:02:24<SeP>2023-10-22 04:55:12<SeP>2023-10-23 16:48:00<SeP>2023-10-25 04:40:48<SeP>2023-10-26 16:33:36<SeP>2023-10-28 04:26:24<SeP>2023-10-29 16:19:12<SeP>2023-10-31 04:12:00<SeP>2023-11-01 16:04:48<SeP>2023-11-03 03:57:36<SeP>2023-11-04 15:50:24<SeP>2023-11-06 02:43:12<SeP>2023-11-07 14:36:00<SeP>2023-11-09 02:28:48<SeP>2023-11-10 14:21:36<SeP>2023-11-12 02:14:24<SeP>2023-11-13 14:07:12<SeP>2023-11-15 02:00:00<SeP>2023-11-16 13:52:48<SeP>2023-11-18 01:45:36<SeP>2023-11-19 13:38:24<SeP>2023-11-21 01:31:12<SeP>2023-11-22 13:24:00<SeP>2023-11-24 01:16:48<SeP>2023-11-25 13:09:36<SeP>2023-11-27 01:02:24<SeP>2023-11-28 12:55:12<SeP>2023-11-30 00:48:00<SeP>2023-12-01 12:40:48<SeP>2023-12-03 00:33:36<SeP>2023-12-04 12:26:24<SeP>2023-12-06 00:19:12<SeP>2023-12-07 12:12:00<SeP>2023-12-09 00:04:48<SeP>2023-12-10 11:57:36<SeP>2023-12-11 23:50:24<SeP>2023-12-13 11:43:12<SeP>2023-12-14 23:36:00<SeP>2023-12-16 11:28:48<SeP>2023-12-17 23:21:36<SeP>2023-12-19 11:14:24<SeP>2023-12-20 23:07:12<SeP>2023-12-22 11:00:00<SeP>2023-12-23 22:52:48<SeP>2023-12-25 10:45:36<SeP>2023-12-26 22:38:24<SeP>2023-12-28 10:31:12<SeP>2023-12-29 22:24:00<SeP>2023-12-31 10:16:48<SeP>2024-01-01 22:09:36<SeP>2024-01-03 10:02:24<SeP>2024-01-04 21:55:12<SeP>2024-01-06 09:48:00<SeP>2024-01-07 21:40:48<SeP>2024-01-09 09:33:36<SeP>2024-01-10 21:26:24<SeP>2024-01-12 09:19:12<SeP>2024-01-13 21:12:00<SeP>2024-01-15 09:04:48<SeP>2024-01-16 20:57:36<SeP>2024-01-18 08:50:24<SeP>2024-01-19 20:43:12<SeP>2024-01-21 08:36:00<SeP>2024-01-22 20:28:48<SeP>2024-01-24 08:21:36<SeP>2024-01-25 20:14:24<SeP>2024-01-27 08:07:12<SeP>2024-01-28 20:00:00<SeP>2024-01-30 07:52:48<SeP>2024-01-31 19:45:36<SeP>2024-02-02 07:38:24<SeP>2024-02-03 19:31:12<SeP>2024-02-05 07:24:00<SeP>2024-02-06 19:16:48<SeP>2024-02-08 07:09:36<SeP>2024-02-09 19:02:24<SeP>2024-02-11 06:55:12<SeP>2024-02-12 18:48:00<SeP>2024-02-14 06:40:48<SeP>2024-02-15 18:33:36<SeP>2024-02-17 06:26:24<SeP>2024-02-18 18:19:12<SeP>2024-02-20 06:12:00<SeP>2024-02-21 18:04:48<SeP>2024-02-23 05:57:36<SeP>2024-02-24 17:50:24<SeP>2024-02-26 05:43:12<SeP>2024-02-27 17:36:00<SeP>2024-02-29 05:28:48<SeP>2024-03-01 17:21:36<SeP>2024-03-03 05:14:24<SeP>2024-03-04 17:07:12<SeP>2024-03-06 05:00:00<SeP>2024-03-07 16:52:48<SeP>2024-03-09 04:45:36<SeP>2024-03-10 17:38:24<SeP>2024-03-12 05:31:12<SeP>2024-03-13 17:24:00<SeP>2024-03-15 05:16:48<SeP>2024-03-16 17:09:36<SeP>2024-03-18 05:02:24<SeP>2024-03-19 16:55:12<SeP>2024-03-21 04:48:00<SeP>2024-03-22 16:40:48<SeP>2024-03-24 04:33:36<SeP>2024-03-25 16:26:24<SeP>2024-03-27 04:19:12<SeP>2024-03-28 16:12:00<SeP>2024-03-30 04:04:48<SeP>2024-03-31 15:57:36<SeP>2024-04-02 03:50:24<SeP>2024-04-03 15:43:12<SeP>2024-04-05 03:36:00<SeP>2024-04-06 15:28:48<SeP>2024-04-08 03:21:36<SeP>2024-04-09 15:14:24<SeP>2024-04-11 03:07:12<SeP>2024-04-12 15:00:00<SeP>2024-04-14 02:52:48<SeP>2024-04-15 14:45:36<SeP>2024-04-17 02:38:24<SeP>2024-04-18 14:31:12<SeP>2024-04-20 02:24:00<SeP>2024-04-21 14:16:48<SeP>2024-04-23 02:09:36<SeP>2024-04-24 14:02:24<SeP>2024-04-26 01:55:12<SeP>2024-04-27 13:48:00<SeP>2024-04-29 01:40:48<SeP>2024-04-30 13:33:36<SeP>2024-05-02 01:26:24<SeP>2024-05-03 13:19:12<SeP>2024-05-05 01:12:00<SeP>2024-05-06 13:04:48<SeP>2024-05-08 00:57:36<SeP>2024-05-09 12:50:24<SeP>2024-05-11 00:43:12<SeP>2024-05-12 12:36:00<SeP>2024-05-14 00:28:48<SeP>2024-05-15 12:21:36<SeP>2024-05-17 00:14:24<SeP>2024-05-18 12:07:12<SeP>2024-05-20 00:00:00<SeP>2024-05-21 11:52:48<SeP>2024-05-22 23:45:36<SeP>2024-05-24 11:38:24<SeP>2024-05-25 23:31:12<SeP>2024-05-27 11:24:00<SeP>2024-05-28 23:16:48<SeP>2024-05-30 11:09:36<SeP>2024-05-31 23:02:24<SeP>2024-06-02 10:55:12<SeP>2024-06-03 22:48:00<SeP>2024-06-05 10:40:48<SeP>2024-06-06 22:33:36<SeP>2024-06-08 10:26:24<SeP>2024-06-09 22:19:12<SeP>2024-06-11 10:12:00<SeP>2024-06-12 22:04:48<SeP>2024-06-14 09:57:36<SeP>2024-06-15 21:50:24<SeP>2024-06-17 09:43:12<SeP>2024-06-18 21:36:00<SeP>2024-06-20 09:28:48<SeP>2024-06-21 21:21:36<SeP>2024-06-23 09:14:24<SeP>2024-06-24 21:07:12<SeP>2024-06-26 09:00:00<SeP>2024-06-27 20:52:48<SeP>2024-06-29 08:45:36<SeP>2024-06-30 20:38:24<SeP>2024-07-02 08:31:12<SeP>2024-07-03 20:24:00<SeP>2024-07-05 08:16:48<SeP>2024-07-06 20:09:36<SeP>2024-07-08 08:02:24<SeP>2024-07-09 19:55:12<SeP>2024-07-11 07:48:00<SeP>2024-07-12 19:40:48<SeP>2024-07-14 07:33:36<SeP>2024-07-15 19:26:24<SeP>2024-07-17 07:19:12<SeP>2024-07-18 19:12:00<SeP>2024-07-20 07:04:48<SeP>2024-07-21 18:57:36<SeP>2024-07-23 06:50:24<SeP>2024-07-24 18:43:12<SeP>2024-07-26 06:36:00<SeP>2024-07-27 18:28:48<SeP>2024-07-29 06:21:36<SeP>2024-07-30 18:14:24<SeP>2024-08-01 06:07:12<SeP>2024-08-02 18:00:00<SeP>2024-08-04 05:52:48<SeP>2024-08-05 17:45:36<SeP>2024-08-07 05:38:24<SeP>2024-08-08 17:31:12<SeP>2024-08-10 05:24:00<SeP>2024-08-11 17:16:48<SeP>2024-08-13 05:09:36<SeP>2024-08-14 17:02:24<SeP>2024-08-16 04:55:12<SeP>2024-08-17 16:48:00<SeP>2024-08-19 04:40:48<SeP>2024-08-20 16:33:36<SeP>2024-08-22 04:26:24<SeP>2024-08-23 16:19:12<SeP>2024-08-25 04:12:00<SeP>2024-08-26 16:04:48<SeP>2024-08-28 03:57:36<SeP>2024-08-29 15:50:24<SeP>2024-08-31 03:43:12<SeP>2024-09-01 15:36:00<SeP>2024-09-03 03:28:48<SeP>2024-09-04 15:21:36<SeP>2024-09-06 03:14:24<SeP>2024-09-07 15:07:12<SeP>2024-09-09 03:00:00<SeP>2024-09-10 14:52:48<SeP>2024-09-12 02:45:36<SeP>2024-09-13 14:38:24<SeP>2024-09-15 02:31:12<SeP>2024-09-16 14:24:00<SeP>2024-09-18 02:16:48<SeP>2024-09-19 14:09:36<SeP>2024-09-21 02:02:24<SeP>2024-09-22 13:55:12<SeP>2024-09-24 01:48:00<SeP>2024-09-25 13:40:48<SeP>2024-09-27 01:33:36<SeP>2024-09-28 13:26:24<SeP>2024-09-30 01:19:12<SeP>2024-10-01 13:12:00<SeP>2024-10-03 01:04:48<SeP>2024-10-04 12:57:36<SeP>2024-10-06 00:50:24<SeP>2024-10-07 12:43:12<SeP>2024-10-09 00:36:00<SeP>2024-10-10 12:28:48<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:07:12<SeP>2024-10-16 12:00:00<SeP>2024-10-17 23:52:48<SeP>2024-10-19 11:45:36<SeP>2024-10-20 23:38:24<SeP>2024-10-22 11:31:12<SeP>2024-10-23 23:24:00<SeP>2024-10-25 11:16:48<SeP>2024-10-26 23:09:36<SeP>2024-10-28 11:02:24<SeP>2024-10-29 22:55:12<SeP>2024-10-31 10:48:00<SeP>2024-11-01 22:40:48<SeP>2024-11-03 09:33:36<SeP>2024-11-04 21:26:24<SeP>2024-11-06 09:19:12<SeP>2024-11-07 21:12:00<SeP>2024-11-09 09:04:48<SeP>2024-11-10 20:57:36<SeP>2024-11-12 08:50:24<SeP>2024-11-13 20:43:12<SeP>2024-11-15 08:36:00<SeP>2024-11-16 20:28:48<SeP>2024-11-18 08:21:36<SeP>2024-11-19 20:14:24<SeP>2024-11-21 08:07:12<SeP>2024-11-22 20:00:00<SeP>2024-11-24 07:52:48<SeP>2024-11-25 19:45:36<SeP>2024-11-27 07:38:24<SeP>2024-11-28 19:31:12<SeP>2024-11-30 07:24:00<SeP>2024-12-01 19:16:48<SeP>2024-12-03 07:09:36<SeP>2024-12-04 19:02:24<SeP>2024-12-06 06:55:12<SeP>2024-12-07 18:48:00<SeP>2024-12-09 06:40:48<SeP>2024-12-10 18:33:36<SeP>2024-12-12 06:26:24<SeP>2024-12-13 18:19:12<SeP>2024-12-15 06:12:00<SeP>2024-12-16 18:04:48<SeP>2024-12-18 05:57:36<SeP>2024-12-19 17:50:24<SeP>2024-12-21 05:43:12<SeP>2024-12-22 17:36:00<SeP>2024-12-24 05:28:48<SeP>2024-12-25 17:21:36<SeP>2024-12-27 05:14:24<SeP>2024-12-28 17:07:12<SeP>2024-12-30 05:00:00<SeP>2024-12-31 16:52:48<SeP>2025-01-02 04:45:36<SeP>2025-01-03 16:38:24<SeP>2025-01-05 04:31:12<SeP>2025-01-06 16:24:00<SeP>2025-01-08 04:16:48<SeP>2025-01-09 16:09:36<SeP>2025-01-11 04:02:24<SeP>2025-01-12 15:55:12<SeP>2025-01-14 03:48:00<SeP>2025-01-15 15:40:48<SeP>2025-01-17 03:33:36<SeP>2025-01-18 15:26:24<SeP>2025-01-20 03:19:12<SeP>2025-01-21 15:12:00<SeP>2025-01-23 03:04:48<SeP>2025-01-24 14:57:36<SeP>2025-01-26 02:50:24<SeP>2025-01-27 14:43:12<SeP>2025-01-29 02:36:00<SeP>2025-01-30 14:28:48<SeP>2025-02-01 02:21:36<SeP>2025-02-02 14:14:24<SeP>2025-02-04 02:07:12<SeP>2025-02-05 14:00:00<SeP>2025-02-07 01:52:48<SeP>2025-02-08 13:45:36<SeP>2025-02-10 01:38:24<SeP>2025-02-11 13:31:12<SeP>2025-02-13 01:24:00<SeP>2025-02-14 13:16:48<SeP>2025-02-16 01:09:36<SeP>2025-02-17 13:02:24<SeP>2025-02-19 00:55:12<SeP>2025-02-20 12:48:00<SeP>2025-02-22 00:40:48<SeP>2025-02-23 12:33:36<SeP>2025-02-25 00:26:24<SeP>2025-02-26 12:19:12<SeP>2025-02-28 00:12:00<SeP>2025-03-01 12:04:48<SeP>2025-03-02 23:57:36<SeP>2025-03-04 11:50:24<SeP>2025-03-05 23:43:12<SeP>2025-03-07 11:36:00<SeP>2025-03-08 23:28:48<SeP>2025-03-10 12:21:36<SeP>2025-03-12 00:14:24<SeP>2025-03-13 12:07:12";
  const itemLabel       = "Escaneos";
  const itemData        = "788<SeP>1529<SeP>1387<SeP>1495<SeP>1283<SeP>1749<SeP>949<SeP>966<SeP>1172<SeP>3419<SeP>3383<SeP>1025<SeP>3323<SeP>896<SeP>781<SeP>891<SeP>1455<SeP>3231<SeP>1462<SeP>1486<SeP>1063<SeP>957<SeP>1100<SeP>1217<SeP>933<SeP>762<SeP>934<SeP>3645<SeP>959<SeP>852<SeP>1464<SeP>1280<SeP>830<SeP>2902<SeP>1772<SeP>2654<SeP>1916<SeP>1642<SeP>1467<SeP>1332<SeP>1951<SeP>1953<SeP>2063<SeP>1587<SeP>1676<SeP>1569<SeP>1798<SeP>1718<SeP>1887<SeP>1880<SeP>1854<SeP>1561<SeP>3286<SeP>1402<SeP>1770<SeP>2062<SeP>1894<SeP>2139<SeP>1981<SeP>3330<SeP>1472<SeP>1491<SeP>1492<SeP>1552<SeP>1885<SeP>1608<SeP>1269<SeP>1435<SeP>1208<SeP>2397<SeP>1266<SeP>1138<SeP>1343<SeP>2465<SeP>7067<SeP>1340<SeP>1328<SeP>1408<SeP>2239<SeP>1263<SeP>2832<SeP>5091<SeP>1624<SeP>1513<SeP>1025<SeP>3292<SeP>1267<SeP>1117<SeP>996<SeP>1106<SeP>1060<SeP>3026<SeP>1252<SeP>1300<SeP>2931<SeP>6537<SeP>1392<SeP>1017<SeP>945<SeP>931<SeP>1027<SeP>982<SeP>1031<SeP>1058<SeP>4376<SeP>1822<SeP>1405<SeP>1508<SeP>544<SeP>1444<SeP>1337<SeP>1201<SeP>887<SeP>2396<SeP>1072<SeP>1225<SeP>1109<SeP>929<SeP>1199<SeP>665<SeP>933<SeP>887<SeP>752<SeP>1127<SeP>881<SeP>925<SeP>844<SeP>851<SeP>893<SeP>717<SeP>863<SeP>912<SeP>914<SeP>919<SeP>841<SeP>846<SeP>740<SeP>879<SeP>1080<SeP>799<SeP>856<SeP>938<SeP>958<SeP>1119<SeP>998<SeP>585<SeP>834<SeP>855<SeP>896<SeP>1297<SeP>951<SeP>1131<SeP>1259<SeP>1084<SeP>996<SeP>928<SeP>922<SeP>842<SeP>980<SeP>1113<SeP>905<SeP>886<SeP>916<SeP>1104<SeP>1020<SeP>1061<SeP>1012<SeP>1185<SeP>885<SeP>893<SeP>1706<SeP>1665<SeP>1283<SeP>1018<SeP>1028<SeP>1174<SeP>1020<SeP>974<SeP>782<SeP>893<SeP>954<SeP>1090<SeP>819<SeP>1122<SeP>1291<SeP>1181<SeP>1121<SeP>1364<SeP>1243<SeP>1225<SeP>1393<SeP>1271<SeP>1613<SeP>1908<SeP>1478<SeP>1240<SeP>759<SeP>1128<SeP>907<SeP>1064<SeP>636<SeP>836<SeP>1000<SeP>837<SeP>4160<SeP>4340<SeP>2034<SeP>1480<SeP>1146<SeP>885<SeP>1115<SeP>877<SeP>1058<SeP>983<SeP>1141<SeP>994<SeP>1314<SeP>2276<SeP>996<SeP>1263<SeP>1260<SeP>1268<SeP>1196<SeP>1078<SeP>1011<SeP>1025<SeP>1156<SeP>1092<SeP>1190<SeP>918<SeP>1153<SeP>865<SeP>1401<SeP>1164<SeP>1157<SeP>1198<SeP>1352<SeP>1252<SeP>1620<SeP>1220<SeP>1181<SeP>1201<SeP>1136<SeP>2003<SeP>1292<SeP>1887<SeP>1745<SeP>1421<SeP>2017<SeP>1699<SeP>1198<SeP>1129<SeP>1457<SeP>1091<SeP>1586<SeP>1281<SeP>1269<SeP>1724<SeP>1714<SeP>1450<SeP>1442<SeP>1491<SeP>1282<SeP>1027<SeP>1155<SeP>1425<SeP>1069<SeP>1297<SeP>1507<SeP>1083<SeP>1585<SeP>1768<SeP>1289<SeP>1460<SeP>1696<SeP>1299<SeP>1137<SeP>932<SeP>966<SeP>974<SeP>876<SeP>1108<SeP>1675<SeP>1204<SeP>1189<SeP>1130<SeP>827<SeP>1108<SeP>917<SeP>1418<SeP>874<SeP>905<SeP>1153<SeP>1384<SeP>1656<SeP>1313<SeP>1092<SeP>1050<SeP>1182<SeP>1762<SeP>1014<SeP>1224<SeP>1029<SeP>1587<SeP>1050<SeP>998<SeP>1196<SeP>1137<SeP>855<SeP>937<SeP>1137<SeP>1457<SeP>1587<SeP>1484<SeP>1500<SeP>1171<SeP>945<SeP>1153<SeP>1289<SeP>1166<SeP>1194<SeP>1014<SeP>1009<SeP>1308<SeP>1462<SeP>1440<SeP>1581<SeP>1506<SeP>1315<SeP>1552<SeP>1475<SeP>1570<SeP>1311<SeP>1447<SeP>1293<SeP>1799<SeP>1454<SeP>1536<SeP>1557<SeP>1293<SeP>1491<SeP>1290<SeP>1325<SeP>1406<SeP>1466<SeP>1673<SeP>1217<SeP>1331<SeP>1268<SeP>1477<SeP>1308<SeP>1167<SeP>1676<SeP>1925<SeP>1457<SeP>1032<SeP>949<SeP>1792<SeP>1498<SeP>1334<SeP>1433<SeP>1018<SeP>1483<SeP>1329<SeP>1376<SeP>1472<SeP>1496<SeP>1670<SeP>1509<SeP>1602<SeP>1605<SeP>1481<SeP>1417<SeP>1669<SeP>1561<SeP>1198<SeP>1257<SeP>1889<SeP>1853<SeP>1832<SeP>1859<SeP>1733<SeP>1602<SeP>1548<SeP>1700<SeP>1562<SeP>1461<SeP>1868<SeP>1715<SeP>1752<SeP>1504<SeP>1459<SeP>1531<SeP>1505<SeP>1697<SeP>2102<SeP>1997<SeP>1455<SeP>1706<SeP>1794";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:52:48<SeP>2023-07-28 23:45:36<SeP>2023-07-30 11:38:24<SeP>2023-07-31 23:31:12<SeP>2023-08-02 11:24:00<SeP>2023-08-03 23:16:48<SeP>2023-08-05 11:09:36<SeP>2023-08-06 23:02:24<SeP>2023-08-08 10:55:12<SeP>2023-08-09 22:48:00<SeP>2023-08-11 10:40:48<SeP>2023-08-12 22:33:36<SeP>2023-08-14 10:26:24<SeP>2023-08-15 22:19:12<SeP>2023-08-17 10:12:00<SeP>2023-08-18 22:04:48<SeP>2023-08-20 09:57:36<SeP>2023-08-21 21:50:24<SeP>2023-08-23 09:43:12<SeP>2023-08-24 21:36:00<SeP>2023-08-26 09:28:48<SeP>2023-08-27 21:21:36<SeP>2023-08-29 09:14:24<SeP>2023-08-30 21:07:12<SeP>2023-09-01 09:00:00<SeP>2023-09-02 20:52:48<SeP>2023-09-04 08:45:36<SeP>2023-09-05 20:38:24<SeP>2023-09-07 08:31:12<SeP>2023-09-08 20:24:00<SeP>2023-09-10 08:16:48<SeP>2023-09-11 20:09:36<SeP>2023-09-13 08:02:24<SeP>2023-09-14 19:55:12<SeP>2023-09-16 07:48:00<SeP>2023-09-17 19:40:48<SeP>2023-09-19 07:33:36<SeP>2023-09-20 19:26:24<SeP>2023-09-22 07:19:12<SeP>2023-09-23 19:12:00<SeP>2023-09-25 07:04:48<SeP>2023-09-26 18:57:36<SeP>2023-09-28 06:50:24<SeP>2023-09-29 18:43:12<SeP>2023-10-01 06:36:00<SeP>2023-10-02 18:28:48<SeP>2023-10-04 06:21:36<SeP>2023-10-05 18:14:24<SeP>2023-10-07 06:07:12<SeP>2023-10-08 18:00:00<SeP>2023-10-10 05:52:48<SeP>2023-10-11 17:45:36<SeP>2023-10-13 05:38:24<SeP>2023-10-14 17:31:12<SeP>2023-10-16 05:24:00<SeP>2023-10-17 17:16:48<SeP>2023-10-19 05:09:36<SeP>2023-10-20 17:02:24<SeP>2023-10-22 04:55:12<SeP>2023-10-23 16:48:00<SeP>2023-10-25 04:40:48<SeP>2023-10-26 16:33:36<SeP>2023-10-28 04:26:24<SeP>2023-10-29 16:19:12<SeP>2023-10-31 04:12:00<SeP>2023-11-01 16:04:48<SeP>2023-11-03 03:57:36<SeP>2023-11-04 15:50:24<SeP>2023-11-06 02:43:12<SeP>2023-11-07 14:36:00<SeP>2023-11-09 02:28:48<SeP>2023-11-10 14:21:36<SeP>2023-11-12 02:14:24<SeP>2023-11-13 14:07:12<SeP>2023-11-15 02:00:00<SeP>2023-11-16 13:52:48<SeP>2023-11-18 01:45:36<SeP>2023-11-19 13:38:24<SeP>2023-11-21 01:31:12<SeP>2023-11-22 13:24:00<SeP>2023-11-24 01:16:48<SeP>2023-11-25 13:09:36<SeP>2023-11-27 01:02:24<SeP>2023-11-28 12:55:12<SeP>2023-11-30 00:48:00<SeP>2023-12-01 12:40:48<SeP>2023-12-03 00:33:36<SeP>2023-12-04 12:26:24<SeP>2023-12-06 00:19:12<SeP>2023-12-07 12:12:00<SeP>2023-12-09 00:04:48<SeP>2023-12-10 11:57:36<SeP>2023-12-11 23:50:24<SeP>2023-12-13 11:43:12<SeP>2023-12-14 23:36:00<SeP>2023-12-16 11:28:48<SeP>2023-12-17 23:21:36<SeP>2023-12-19 11:14:24<SeP>2023-12-20 23:07:12<SeP>2023-12-22 11:00:00<SeP>2023-12-23 22:52:48<SeP>2023-12-25 10:45:36<SeP>2023-12-26 22:38:24<SeP>2023-12-28 10:31:12<SeP>2023-12-29 22:24:00<SeP>2023-12-31 10:16:48<SeP>2024-01-01 22:09:36<SeP>2024-01-03 10:02:24<SeP>2024-01-04 21:55:12<SeP>2024-01-06 09:48:00<SeP>2024-01-07 21:40:48<SeP>2024-01-09 09:33:36<SeP>2024-01-10 21:26:24<SeP>2024-01-12 09:19:12<SeP>2024-01-13 21:12:00<SeP>2024-01-15 09:04:48<SeP>2024-01-16 20:57:36<SeP>2024-01-18 08:50:24<SeP>2024-01-19 20:43:12<SeP>2024-01-21 08:36:00<SeP>2024-01-22 20:28:48<SeP>2024-01-24 08:21:36<SeP>2024-01-25 20:14:24<SeP>2024-01-27 08:07:12<SeP>2024-01-28 20:00:00<SeP>2024-01-30 07:52:48<SeP>2024-01-31 19:45:36<SeP>2024-02-02 07:38:24<SeP>2024-02-03 19:31:12<SeP>2024-02-05 07:24:00<SeP>2024-02-06 19:16:48<SeP>2024-02-08 07:09:36<SeP>2024-02-09 19:02:24<SeP>2024-02-11 06:55:12<SeP>2024-02-12 18:48:00<SeP>2024-02-14 06:40:48<SeP>2024-02-15 18:33:36<SeP>2024-02-17 06:26:24<SeP>2024-02-18 18:19:12<SeP>2024-02-20 06:12:00<SeP>2024-02-21 18:04:48<SeP>2024-02-23 05:57:36<SeP>2024-02-24 17:50:24<SeP>2024-02-26 05:43:12<SeP>2024-02-27 17:36:00<SeP>2024-02-29 05:28:48<SeP>2024-03-01 17:21:36<SeP>2024-03-03 05:14:24<SeP>2024-03-04 17:07:12<SeP>2024-03-06 05:00:00<SeP>2024-03-07 16:52:48<SeP>2024-03-09 04:45:36<SeP>2024-03-10 17:38:24<SeP>2024-03-12 05:31:12<SeP>2024-03-13 17:24:00<SeP>2024-03-15 05:16:48<SeP>2024-03-16 17:09:36<SeP>2024-03-18 05:02:24<SeP>2024-03-19 16:55:12<SeP>2024-03-21 04:48:00<SeP>2024-03-22 16:40:48<SeP>2024-03-24 04:33:36<SeP>2024-03-25 16:26:24<SeP>2024-03-27 04:19:12<SeP>2024-03-28 16:12:00<SeP>2024-03-30 04:04:48<SeP>2024-03-31 15:57:36<SeP>2024-04-02 03:50:24<SeP>2024-04-03 15:43:12<SeP>2024-04-05 03:36:00<SeP>2024-04-06 15:28:48<SeP>2024-04-08 03:21:36<SeP>2024-04-09 15:14:24<SeP>2024-04-11 03:07:12<SeP>2024-04-12 15:00:00<SeP>2024-04-14 02:52:48<SeP>2024-04-15 14:45:36<SeP>2024-04-17 02:38:24<SeP>2024-04-18 14:31:12<SeP>2024-04-20 02:24:00<SeP>2024-04-21 14:16:48<SeP>2024-04-23 02:09:36<SeP>2024-04-24 14:02:24<SeP>2024-04-26 01:55:12<SeP>2024-04-27 13:48:00<SeP>2024-04-29 01:40:48<SeP>2024-04-30 13:33:36<SeP>2024-05-02 01:26:24<SeP>2024-05-03 13:19:12<SeP>2024-05-05 01:12:00<SeP>2024-05-06 13:04:48<SeP>2024-05-08 00:57:36<SeP>2024-05-09 12:50:24<SeP>2024-05-11 00:43:12<SeP>2024-05-12 12:36:00<SeP>2024-05-14 00:28:48<SeP>2024-05-15 12:21:36<SeP>2024-05-17 00:14:24<SeP>2024-05-18 12:07:12<SeP>2024-05-20 00:00:00<SeP>2024-05-21 11:52:48<SeP>2024-05-22 23:45:36<SeP>2024-05-24 11:38:24<SeP>2024-05-25 23:31:12<SeP>2024-05-27 11:24:00<SeP>2024-05-28 23:16:48<SeP>2024-05-30 11:09:36<SeP>2024-05-31 23:02:24<SeP>2024-06-02 10:55:12<SeP>2024-06-03 22:48:00<SeP>2024-06-05 10:40:48<SeP>2024-06-06 22:33:36<SeP>2024-06-08 10:26:24<SeP>2024-06-09 22:19:12<SeP>2024-06-11 10:12:00<SeP>2024-06-12 22:04:48<SeP>2024-06-14 09:57:36<SeP>2024-06-15 21:50:24<SeP>2024-06-17 09:43:12<SeP>2024-06-18 21:36:00<SeP>2024-06-20 09:28:48<SeP>2024-06-21 21:21:36<SeP>2024-06-23 09:14:24<SeP>2024-06-24 21:07:12<SeP>2024-06-26 09:00:00<SeP>2024-06-27 20:52:48<SeP>2024-06-29 08:45:36<SeP>2024-06-30 20:38:24<SeP>2024-07-02 08:31:12<SeP>2024-07-03 20:24:00<SeP>2024-07-05 08:16:48<SeP>2024-07-06 20:09:36<SeP>2024-07-08 08:02:24<SeP>2024-07-09 19:55:12<SeP>2024-07-11 07:48:00<SeP>2024-07-12 19:40:48<SeP>2024-07-14 07:33:36<SeP>2024-07-15 19:26:24<SeP>2024-07-17 07:19:12<SeP>2024-07-18 19:12:00<SeP>2024-07-20 07:04:48<SeP>2024-07-21 18:57:36<SeP>2024-07-23 06:50:24<SeP>2024-07-24 18:43:12<SeP>2024-07-26 06:36:00<SeP>2024-07-27 18:28:48<SeP>2024-07-29 06:21:36<SeP>2024-07-30 18:14:24<SeP>2024-08-01 06:07:12<SeP>2024-08-02 18:00:00<SeP>2024-08-04 05:52:48<SeP>2024-08-05 17:45:36<SeP>2024-08-07 05:38:24<SeP>2024-08-08 17:31:12<SeP>2024-08-10 05:24:00<SeP>2024-08-11 17:16:48<SeP>2024-08-13 05:09:36<SeP>2024-08-14 17:02:24<SeP>2024-08-16 04:55:12<SeP>2024-08-17 16:48:00<SeP>2024-08-19 04:40:48<SeP>2024-08-20 16:33:36<SeP>2024-08-22 04:26:24<SeP>2024-08-23 16:19:12<SeP>2024-08-25 04:12:00<SeP>2024-08-26 16:04:48<SeP>2024-08-28 03:57:36<SeP>2024-08-29 15:50:24<SeP>2024-08-31 03:43:12<SeP>2024-09-01 15:36:00<SeP>2024-09-03 03:28:48<SeP>2024-09-04 15:21:36<SeP>2024-09-06 03:14:24<SeP>2024-09-07 15:07:12<SeP>2024-09-09 03:00:00<SeP>2024-09-10 14:52:48<SeP>2024-09-12 02:45:36<SeP>2024-09-13 14:38:24<SeP>2024-09-15 02:31:12<SeP>2024-09-16 14:24:00<SeP>2024-09-18 02:16:48<SeP>2024-09-19 14:09:36<SeP>2024-09-21 02:02:24<SeP>2024-09-22 13:55:12<SeP>2024-09-24 01:48:00<SeP>2024-09-25 13:40:48<SeP>2024-09-27 01:33:36<SeP>2024-09-28 13:26:24<SeP>2024-09-30 01:19:12<SeP>2024-10-01 13:12:00<SeP>2024-10-03 01:04:48<SeP>2024-10-04 12:57:36<SeP>2024-10-06 00:50:24<SeP>2024-10-07 12:43:12<SeP>2024-10-09 00:36:00<SeP>2024-10-10 12:28:48<SeP>2024-10-12 00:21:36<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:07:12<SeP>2024-10-16 12:00:00<SeP>2024-10-17 23:52:48<SeP>2024-10-19 11:45:36<SeP>2024-10-20 23:38:24<SeP>2024-10-22 11:31:12<SeP>2024-10-23 23:24:00<SeP>2024-10-25 11:16:48<SeP>2024-10-26 23:09:36<SeP>2024-10-28 11:02:24<SeP>2024-10-29 22:55:12<SeP>2024-10-31 10:48:00<SeP>2024-11-01 22:40:48<SeP>2024-11-03 09:33:36<SeP>2024-11-04 21:26:24<SeP>2024-11-06 09:19:12<SeP>2024-11-07 21:12:00<SeP>2024-11-09 09:04:48<SeP>2024-11-10 20:57:36<SeP>2024-11-12 08:50:24<SeP>2024-11-13 20:43:12<SeP>2024-11-15 08:36:00<SeP>2024-11-16 20:28:48<SeP>2024-11-18 08:21:36<SeP>2024-11-19 20:14:24<SeP>2024-11-21 08:07:12<SeP>2024-11-22 20:00:00<SeP>2024-11-24 07:52:48<SeP>2024-11-25 19:45:36<SeP>2024-11-27 07:38:24<SeP>2024-11-28 19:31:12<SeP>2024-11-30 07:24:00<SeP>2024-12-01 19:16:48<SeP>2024-12-03 07:09:36<SeP>2024-12-04 19:02:24<SeP>2024-12-06 06:55:12<SeP>2024-12-07 18:48:00<SeP>2024-12-09 06:40:48<SeP>2024-12-10 18:33:36<SeP>2024-12-12 06:26:24<SeP>2024-12-13 18:19:12<SeP>2024-12-15 06:12:00<SeP>2024-12-16 18:04:48<SeP>2024-12-18 05:57:36<SeP>2024-12-19 17:50:24<SeP>2024-12-21 05:43:12<SeP>2024-12-22 17:36:00<SeP>2024-12-24 05:28:48<SeP>2024-12-25 17:21:36<SeP>2024-12-27 05:14:24<SeP>2024-12-28 17:07:12<SeP>2024-12-30 05:00:00<SeP>2024-12-31 16:52:48<SeP>2025-01-02 04:45:36<SeP>2025-01-03 16:38:24<SeP>2025-01-05 04:31:12<SeP>2025-01-06 16:24:00<SeP>2025-01-08 04:16:48<SeP>2025-01-09 16:09:36<SeP>2025-01-11 04:02:24<SeP>2025-01-12 15:55:12<SeP>2025-01-14 03:48:00<SeP>2025-01-15 15:40:48<SeP>2025-01-17 03:33:36<SeP>2025-01-18 15:26:24<SeP>2025-01-20 03:19:12<SeP>2025-01-21 15:12:00<SeP>2025-01-23 03:04:48<SeP>2025-01-24 14:57:36<SeP>2025-01-26 02:50:24<SeP>2025-01-27 14:43:12<SeP>2025-01-29 02:36:00<SeP>2025-01-30 14:28:48<SeP>2025-02-01 02:21:36<SeP>2025-02-02 14:14:24<SeP>2025-02-04 02:07:12<SeP>2025-02-05 14:00:00<SeP>2025-02-07 01:52:48<SeP>2025-02-08 13:45:36<SeP>2025-02-10 01:38:24<SeP>2025-02-11 13:31:12<SeP>2025-02-13 01:24:00<SeP>2025-02-14 13:16:48<SeP>2025-02-16 01:09:36<SeP>2025-02-17 13:02:24<SeP>2025-02-19 00:55:12<SeP>2025-02-20 12:48:00<SeP>2025-02-22 00:40:48<SeP>2025-02-23 12:33:36<SeP>2025-02-25 00:26:24<SeP>2025-02-26 12:19:12<SeP>2025-02-28 00:12:00<SeP>2025-03-01 12:04:48<SeP>2025-03-02 23:57:36<SeP>2025-03-04 11:50:24<SeP>2025-03-05 23:43:12<SeP>2025-03-07 11:36:00<SeP>2025-03-08 23:28:48<SeP>2025-03-10 12:21:36<SeP>2025-03-12 00:14:24<SeP>2025-03-13 12:07:12";
  const itemLabel       = "Ataques";
  const itemData        = "247<SeP>526<SeP>1408<SeP>645<SeP>229<SeP>231<SeP>7053<SeP>790<SeP>9312<SeP>437<SeP>405<SeP>1349<SeP>1079<SeP>246<SeP>356<SeP>258<SeP>274<SeP>692<SeP>1389<SeP>8127<SeP>7773<SeP>6530<SeP>9507<SeP>439<SeP>306<SeP>401<SeP>217<SeP>393<SeP>5886<SeP>85<SeP>382<SeP>322<SeP>386<SeP>3362<SeP>9879<SeP>9301<SeP>10507<SeP>8694<SeP>6036<SeP>7518<SeP>7121<SeP>9532<SeP>9078<SeP>8320<SeP>7941<SeP>8637<SeP>9215<SeP>8458<SeP>6035<SeP>6502<SeP>11656<SeP>7406<SeP>8094<SeP>7632<SeP>10324<SeP>16024<SeP>19302<SeP>8642<SeP>9595<SeP>9513<SeP>7933<SeP>8864<SeP>8731<SeP>8980<SeP>7023<SeP>6840<SeP>6813<SeP>6976<SeP>4753<SeP>5251<SeP>6308<SeP>6361<SeP>5920<SeP>8358<SeP>4000<SeP>6096<SeP>5831<SeP>6787<SeP>5004<SeP>7245<SeP>4710<SeP>6563<SeP>6108<SeP>5672<SeP>5927<SeP>6231<SeP>21859<SeP>11873<SeP>34172<SeP>7826<SeP>7921<SeP>7165<SeP>11415<SeP>8041<SeP>4033<SeP>6821<SeP>3780<SeP>4775<SeP>7266<SeP>6616<SeP>7187<SeP>6910<SeP>6050<SeP>4220<SeP>7756<SeP>8826<SeP>7666<SeP>8020<SeP>3960<SeP>8305<SeP>10464<SeP>7265<SeP>2895<SeP>6007<SeP>7881<SeP>6463<SeP>6945<SeP>9136<SeP>6842<SeP>1345<SeP>2459<SeP>1023<SeP>2590<SeP>2403<SeP>1104<SeP>958<SeP>968<SeP>1370<SeP>1578<SeP>1216<SeP>865<SeP>1104<SeP>1070<SeP>806<SeP>1468<SeP>1520<SeP>1107<SeP>1693<SeP>2061<SeP>1671<SeP>11567<SeP>6176<SeP>11302<SeP>7343<SeP>5567<SeP>10714<SeP>9097<SeP>9302<SeP>8620<SeP>14282<SeP>8927<SeP>11450<SeP>10340<SeP>11993<SeP>12286<SeP>6896<SeP>3949<SeP>8149<SeP>23653<SeP>7547<SeP>7933<SeP>8340<SeP>14696<SeP>11943<SeP>7558<SeP>5038<SeP>7224<SeP>8763<SeP>25344<SeP>6990<SeP>10160<SeP>9180<SeP>6007<SeP>5916<SeP>6734<SeP>14906<SeP>5993<SeP>14289<SeP>8354<SeP>8342<SeP>6496<SeP>6136<SeP>3541<SeP>7091<SeP>7531<SeP>6261<SeP>4865<SeP>9372<SeP>15012<SeP>9663<SeP>9805<SeP>5103<SeP>7592<SeP>9107<SeP>9012<SeP>5848<SeP>2909<SeP>7654<SeP>2790<SeP>5266<SeP>4110<SeP>674<SeP>111<SeP>645<SeP>215<SeP>683<SeP>996<SeP>374<SeP>633<SeP>1267<SeP>1219<SeP>3177<SeP>22980<SeP>545<SeP>4491<SeP>2729<SeP>3011<SeP>7533<SeP>3130<SeP>4174<SeP>3141<SeP>3252<SeP>3072<SeP>3282<SeP>4779<SeP>1803<SeP>2923<SeP>2646<SeP>2179<SeP>1983<SeP>1879<SeP>1153<SeP>1918<SeP>850<SeP>1282<SeP>1601<SeP>26518<SeP>1688<SeP>4089<SeP>4204<SeP>1978<SeP>3745<SeP>2751<SeP>1907<SeP>3882<SeP>2120<SeP>4119<SeP>2063<SeP>2978<SeP>3940<SeP>5032<SeP>4951<SeP>5252<SeP>4376<SeP>2582<SeP>2731<SeP>4925<SeP>4082<SeP>10360<SeP>5169<SeP>2481<SeP>3273<SeP>2397<SeP>4375<SeP>3837<SeP>3939<SeP>2595<SeP>3919<SeP>4935<SeP>4060<SeP>6045<SeP>3966<SeP>6588<SeP>4852<SeP>5381<SeP>5093<SeP>22456<SeP>5312<SeP>10807<SeP>1983<SeP>3464<SeP>4232<SeP>4189<SeP>3746<SeP>5628<SeP>3764<SeP>4806<SeP>4613<SeP>3739<SeP>3312<SeP>1292<SeP>1981<SeP>3265<SeP>2860<SeP>2499<SeP>3682<SeP>4343<SeP>4181<SeP>3417<SeP>4330<SeP>3462<SeP>3236<SeP>4086<SeP>8578<SeP>6239<SeP>5585<SeP>5219<SeP>4730<SeP>3619<SeP>3583<SeP>4861<SeP>5942<SeP>5746<SeP>4508<SeP>4237<SeP>949<SeP>1047<SeP>1989<SeP>1386<SeP>1232<SeP>1699<SeP>1560<SeP>1349<SeP>3399<SeP>4536<SeP>6372<SeP>34445<SeP>5123<SeP>4492<SeP>21573<SeP>8030<SeP>5198<SeP>6240<SeP>4583<SeP>24576<SeP>5135<SeP>5264<SeP>4943<SeP>5874<SeP>14081<SeP>21381<SeP>4426<SeP>3577<SeP>4639<SeP>5099<SeP>6301<SeP>3159<SeP>3145<SeP>3938<SeP>5441<SeP>5011<SeP>10651<SeP>12232<SeP>5879<SeP>6520<SeP>2811<SeP>2772<SeP>3567<SeP>5150<SeP>4073<SeP>3796<SeP>2609<SeP>3676<SeP>3172<SeP>4505<SeP>5694<SeP>8873<SeP>10257<SeP>8689<SeP>9118<SeP>7965<SeP>7145<SeP>5198<SeP>4927<SeP>7279<SeP>22479<SeP>3350<SeP>4385<SeP>3214<SeP>11447<SeP>5554<SeP>4373<SeP>4829<SeP>4139<SeP>2993<SeP>9335<SeP>9097<SeP>5337<SeP>3567<SeP>3248<SeP>2474<SeP>2523<SeP>2563<SeP>2062<SeP>2593<SeP>1805<SeP>2675<SeP>2793<SeP>2975<SeP>3227";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficPieCountryEnglish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Unwanted Traffic";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Iran";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "701801<SeP>369098<SeP>207507<SeP>182103<SeP>111230<SeP>88998<SeP>84814<SeP>81816<SeP>68810<SeP>68409";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "301791<SeP>41451<SeP>41328<SeP>37314<SeP>14760<SeP>11429<SeP>8958<SeP>8175<SeP>7325<SeP>7298";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "400010<SeP>331784<SeP>204349<SeP>140775<SeP>96470<SeP>82086<SeP>81700<SeP>70387<SeP>60635<SeP>59311";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>9829<SeP>58224";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "366991<SeP>259560<SeP>239705<SeP>144197<SeP>68195<SeP>60244<SeP>57277<SeP>53871<SeP>36748<SeP>36062";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>0<SeP>14061<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "159144<SeP>54287<SeP>35026<SeP>33080<SeP>21947<SeP>13583<SeP>13035<SeP>11021<SeP>7614<SeP>7528";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Atacks";
  const itemData    = "353956<SeP>258791<SeP>122250<SeP>80561<SeP>56243<SeP>49223<SeP>47644<SeP>30695<SeP>29324<SeP>26896";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Iran";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "701801<SeP>369098<SeP>207507<SeP>182103<SeP>111230<SeP>88998<SeP>84814<SeP>81816<SeP>68810<SeP>68409";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "301791<SeP>41451<SeP>41328<SeP>37314<SeP>14760<SeP>11429<SeP>8958<SeP>8175<SeP>7325<SeP>7298";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "400010<SeP>331784<SeP>204349<SeP>140775<SeP>96470<SeP>82086<SeP>81700<SeP>70387<SeP>60635<SeP>59311";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>9829<SeP>58224";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "366991<SeP>259560<SeP>239705<SeP>144197<SeP>68195<SeP>60244<SeP>57277<SeP>53871<SeP>36748<SeP>36062";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>0<SeP>14061<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "159144<SeP>54287<SeP>35026<SeP>33080<SeP>21947<SeP>13583<SeP>13035<SeP>11021<SeP>7614<SeP>7528";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Ataques";
  const itemData    = "353956<SeP>258791<SeP>122250<SeP>80561<SeP>56243<SeP>49223<SeP>47644<SeP>30695<SeP>29324<SeP>26896";
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
