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
  document.getElementById("trend-click").innerHTML = "35.8";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.8";
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
  const metricData    = "2861792";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "562188";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2299604";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "141242";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1442380";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "857224";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54727";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "251930";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "605294";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43987";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2861792";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "562188";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2299604";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "141242";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1442380";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "857224";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54727";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "251930";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "605294";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43987";
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
  const incomingData = "2861792<SeP>562188<SeP>2299604<SeP>141242";
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
  const incomingData = "2299604<SeP>1442380<SeP>857224<SeP>54727";
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
  const incomingData = "857224<SeP>251930<SeP>605294<SeP>43987";
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
  const incomingData = "2562661<SeP>259537<SeP>2303124";
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
  const incomingData = "388210<SeP>150<SeP>388060<SeP>233";
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
  const incomingData = "2861792<SeP>562188<SeP>2299604<SeP>141242";
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
  const incomingData = "2299604<SeP>1442380<SeP>857224<SeP>54727";
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
  const incomingData = "857224<SeP>251930<SeP>605294<SeP>43987";
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
  const incomingData = "2562661<SeP>259537<SeP>2303124";
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
  const incomingData = "388210<SeP>150<SeP>388060<SeP>233";
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
  const column3Data   = "222573<SeP>204092<SeP>12891<SeP>12478<SeP>9825<SeP>9485<SeP>6456<SeP>5593<SeP>4637<SeP>3523";
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
  const column2Data  = "214017<SeP>43213<SeP>972<SeP>485<SeP>478<SeP>460<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2419914<SeP>441878";
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
  const column3Data   = "222573<SeP>204092<SeP>12891<SeP>12478<SeP>9825<SeP>9485<SeP>6456<SeP>5593<SeP>4637<SeP>3523";
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
  const column2Data  = "214017<SeP>43213<SeP>972<SeP>485<SeP>478<SeP>460<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2419914<SeP>441878";
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
        "name": "traffic between 2023-07-26 and 2025-03-11"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          401434,50
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
        "name": "scans between 2023-07-26 and 2025-03-11"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          231394,30,
          401434,50
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
        "name": "attacks between 2023-07-26 and 2025-03-11"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          170040,23,
          401434,50
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
        "name": "tráfico entre 2023-07-26 y 2025-03-11"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          401434,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-11"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          231394,30,
          401434,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-11"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          170040,23,
          401434,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:45:36<SeP>2023-07-28 23:31:12<SeP>2023-07-30 11:16:48<SeP>2023-07-31 23:02:24<SeP>2023-08-02 10:48:00<SeP>2023-08-03 22:33:36<SeP>2023-08-05 10:19:12<SeP>2023-08-06 22:04:48<SeP>2023-08-08 09:50:24<SeP>2023-08-09 21:36:00<SeP>2023-08-11 09:21:36<SeP>2023-08-12 21:07:12<SeP>2023-08-14 08:52:48<SeP>2023-08-15 20:38:24<SeP>2023-08-17 08:24:00<SeP>2023-08-18 20:09:36<SeP>2023-08-20 07:55:12<SeP>2023-08-21 19:40:48<SeP>2023-08-23 07:26:24<SeP>2023-08-24 19:12:00<SeP>2023-08-26 06:57:36<SeP>2023-08-27 18:43:12<SeP>2023-08-29 06:28:48<SeP>2023-08-30 18:14:24<SeP>2023-09-01 06:00:00<SeP>2023-09-02 17:45:36<SeP>2023-09-04 05:31:12<SeP>2023-09-05 17:16:48<SeP>2023-09-07 05:02:24<SeP>2023-09-08 16:48:00<SeP>2023-09-10 04:33:36<SeP>2023-09-11 16:19:12<SeP>2023-09-13 04:04:48<SeP>2023-09-14 15:50:24<SeP>2023-09-16 03:36:00<SeP>2023-09-17 15:21:36<SeP>2023-09-19 03:07:12<SeP>2023-09-20 14:52:48<SeP>2023-09-22 02:38:24<SeP>2023-09-23 14:24:00<SeP>2023-09-25 02:09:36<SeP>2023-09-26 13:55:12<SeP>2023-09-28 01:40:48<SeP>2023-09-29 13:26:24<SeP>2023-10-01 01:12:00<SeP>2023-10-02 12:57:36<SeP>2023-10-04 00:43:12<SeP>2023-10-05 12:28:48<SeP>2023-10-07 00:14:24<SeP>2023-10-08 12:00:00<SeP>2023-10-09 23:45:36<SeP>2023-10-11 11:31:12<SeP>2023-10-12 23:16:48<SeP>2023-10-14 11:02:24<SeP>2023-10-15 22:48:00<SeP>2023-10-17 10:33:36<SeP>2023-10-18 22:19:12<SeP>2023-10-20 10:04:48<SeP>2023-10-21 21:50:24<SeP>2023-10-23 09:36:00<SeP>2023-10-24 21:21:36<SeP>2023-10-26 09:07:12<SeP>2023-10-27 20:52:48<SeP>2023-10-29 08:38:24<SeP>2023-10-30 20:24:00<SeP>2023-11-01 08:09:36<SeP>2023-11-02 19:55:12<SeP>2023-11-04 07:40:48<SeP>2023-11-05 18:26:24<SeP>2023-11-07 06:12:00<SeP>2023-11-08 17:57:36<SeP>2023-11-10 05:43:12<SeP>2023-11-11 17:28:48<SeP>2023-11-13 05:14:24<SeP>2023-11-14 17:00:00<SeP>2023-11-16 04:45:36<SeP>2023-11-17 16:31:12<SeP>2023-11-19 04:16:48<SeP>2023-11-20 16:02:24<SeP>2023-11-22 03:48:00<SeP>2023-11-23 15:33:36<SeP>2023-11-25 03:19:12<SeP>2023-11-26 15:04:48<SeP>2023-11-28 02:50:24<SeP>2023-11-29 14:36:00<SeP>2023-12-01 02:21:36<SeP>2023-12-02 14:07:12<SeP>2023-12-04 01:52:48<SeP>2023-12-05 13:38:24<SeP>2023-12-07 01:24:00<SeP>2023-12-08 13:09:36<SeP>2023-12-10 00:55:12<SeP>2023-12-11 12:40:48<SeP>2023-12-13 00:26:24<SeP>2023-12-14 12:12:00<SeP>2023-12-15 23:57:36<SeP>2023-12-17 11:43:12<SeP>2023-12-18 23:28:48<SeP>2023-12-20 11:14:24<SeP>2023-12-21 23:00:00<SeP>2023-12-23 10:45:36<SeP>2023-12-24 22:31:12<SeP>2023-12-26 10:16:48<SeP>2023-12-27 22:02:24<SeP>2023-12-29 09:48:00<SeP>2023-12-30 21:33:36<SeP>2024-01-01 09:19:12<SeP>2024-01-02 21:04:48<SeP>2024-01-04 08:50:24<SeP>2024-01-05 20:36:00<SeP>2024-01-07 08:21:36<SeP>2024-01-08 20:07:12<SeP>2024-01-10 07:52:48<SeP>2024-01-11 19:38:24<SeP>2024-01-13 07:24:00<SeP>2024-01-14 19:09:36<SeP>2024-01-16 06:55:12<SeP>2024-01-17 18:40:48<SeP>2024-01-19 06:26:24<SeP>2024-01-20 18:12:00<SeP>2024-01-22 05:57:36<SeP>2024-01-23 17:43:12<SeP>2024-01-25 05:28:48<SeP>2024-01-26 17:14:24<SeP>2024-01-28 05:00:00<SeP>2024-01-29 16:45:36<SeP>2024-01-31 04:31:12<SeP>2024-02-01 16:16:48<SeP>2024-02-03 04:02:24<SeP>2024-02-04 15:48:00<SeP>2024-02-06 03:33:36<SeP>2024-02-07 15:19:12<SeP>2024-02-09 03:04:48<SeP>2024-02-10 14:50:24<SeP>2024-02-12 02:36:00<SeP>2024-02-13 14:21:36<SeP>2024-02-15 02:07:12<SeP>2024-02-16 13:52:48<SeP>2024-02-18 01:38:24<SeP>2024-02-19 13:24:00<SeP>2024-02-21 01:09:36<SeP>2024-02-22 12:55:12<SeP>2024-02-24 00:40:48<SeP>2024-02-25 12:26:24<SeP>2024-02-27 00:12:00<SeP>2024-02-28 11:57:36<SeP>2024-02-29 23:43:12<SeP>2024-03-02 11:28:48<SeP>2024-03-03 23:14:24<SeP>2024-03-05 11:00:00<SeP>2024-03-06 22:45:36<SeP>2024-03-08 10:31:12<SeP>2024-03-09 22:16:48<SeP>2024-03-11 11:02:24<SeP>2024-03-12 22:48:00<SeP>2024-03-14 10:33:36<SeP>2024-03-15 22:19:12<SeP>2024-03-17 10:04:48<SeP>2024-03-18 21:50:24<SeP>2024-03-20 09:36:00<SeP>2024-03-21 21:21:36<SeP>2024-03-23 09:07:12<SeP>2024-03-24 20:52:48<SeP>2024-03-26 08:38:24<SeP>2024-03-27 20:24:00<SeP>2024-03-29 08:09:36<SeP>2024-03-30 19:55:12<SeP>2024-04-01 07:40:48<SeP>2024-04-02 19:26:24<SeP>2024-04-04 07:12:00<SeP>2024-04-05 18:57:36<SeP>2024-04-07 06:43:12<SeP>2024-04-08 18:28:48<SeP>2024-04-10 06:14:24<SeP>2024-04-11 18:00:00<SeP>2024-04-13 05:45:36<SeP>2024-04-14 17:31:12<SeP>2024-04-16 05:16:48<SeP>2024-04-17 17:02:24<SeP>2024-04-19 04:48:00<SeP>2024-04-20 16:33:36<SeP>2024-04-22 04:19:12<SeP>2024-04-23 16:04:48<SeP>2024-04-25 03:50:24<SeP>2024-04-26 15:36:00<SeP>2024-04-28 03:21:36<SeP>2024-04-29 15:07:12<SeP>2024-05-01 02:52:48<SeP>2024-05-02 14:38:24<SeP>2024-05-04 02:24:00<SeP>2024-05-05 14:09:36<SeP>2024-05-07 01:55:12<SeP>2024-05-08 13:40:48<SeP>2024-05-10 01:26:24<SeP>2024-05-11 13:12:00<SeP>2024-05-13 00:57:36<SeP>2024-05-14 12:43:12<SeP>2024-05-16 00:28:48<SeP>2024-05-17 12:14:24<SeP>2024-05-19 00:00:00<SeP>2024-05-20 11:45:36<SeP>2024-05-21 23:31:12<SeP>2024-05-23 11:16:48<SeP>2024-05-24 23:02:24<SeP>2024-05-26 10:48:00<SeP>2024-05-27 22:33:36<SeP>2024-05-29 10:19:12<SeP>2024-05-30 22:04:48<SeP>2024-06-01 09:50:24<SeP>2024-06-02 21:36:00<SeP>2024-06-04 09:21:36<SeP>2024-06-05 21:07:12<SeP>2024-06-07 08:52:48<SeP>2024-06-08 20:38:24<SeP>2024-06-10 08:24:00<SeP>2024-06-11 20:09:36<SeP>2024-06-13 07:55:12<SeP>2024-06-14 19:40:48<SeP>2024-06-16 07:26:24<SeP>2024-06-17 19:12:00<SeP>2024-06-19 06:57:36<SeP>2024-06-20 18:43:12<SeP>2024-06-22 06:28:48<SeP>2024-06-23 18:14:24<SeP>2024-06-25 06:00:00<SeP>2024-06-26 17:45:36<SeP>2024-06-28 05:31:12<SeP>2024-06-29 17:16:48<SeP>2024-07-01 05:02:24<SeP>2024-07-02 16:48:00<SeP>2024-07-04 04:33:36<SeP>2024-07-05 16:19:12<SeP>2024-07-07 04:04:48<SeP>2024-07-08 15:50:24<SeP>2024-07-10 03:36:00<SeP>2024-07-11 15:21:36<SeP>2024-07-13 03:07:12<SeP>2024-07-14 14:52:48<SeP>2024-07-16 02:38:24<SeP>2024-07-17 14:24:00<SeP>2024-07-19 02:09:36<SeP>2024-07-20 13:55:12<SeP>2024-07-22 01:40:48<SeP>2024-07-23 13:26:24<SeP>2024-07-25 01:12:00<SeP>2024-07-26 12:57:36<SeP>2024-07-28 00:43:12<SeP>2024-07-29 12:28:48<SeP>2024-07-31 00:14:24<SeP>2024-08-01 12:00:00<SeP>2024-08-02 23:45:36<SeP>2024-08-04 11:31:12<SeP>2024-08-05 23:16:48<SeP>2024-08-07 11:02:24<SeP>2024-08-08 22:48:00<SeP>2024-08-10 10:33:36<SeP>2024-08-11 22:19:12<SeP>2024-08-13 10:04:48<SeP>2024-08-14 21:50:24<SeP>2024-08-16 09:36:00<SeP>2024-08-17 21:21:36<SeP>2024-08-19 09:07:12<SeP>2024-08-20 20:52:48<SeP>2024-08-22 08:38:24<SeP>2024-08-23 20:24:00<SeP>2024-08-25 08:09:36<SeP>2024-08-26 19:55:12<SeP>2024-08-28 07:40:48<SeP>2024-08-29 19:26:24<SeP>2024-08-31 07:12:00<SeP>2024-09-01 18:57:36<SeP>2024-09-03 06:43:12<SeP>2024-09-04 18:28:48<SeP>2024-09-06 06:14:24<SeP>2024-09-07 18:00:00<SeP>2024-09-09 05:45:36<SeP>2024-09-10 17:31:12<SeP>2024-09-12 05:16:48<SeP>2024-09-13 17:02:24<SeP>2024-09-15 04:48:00<SeP>2024-09-16 16:33:36<SeP>2024-09-18 04:19:12<SeP>2024-09-19 16:04:48<SeP>2024-09-21 03:50:24<SeP>2024-09-22 15:36:00<SeP>2024-09-24 03:21:36<SeP>2024-09-25 15:07:12<SeP>2024-09-27 02:52:48<SeP>2024-09-28 14:38:24<SeP>2024-09-30 02:24:00<SeP>2024-10-01 14:09:36<SeP>2024-10-03 01:55:12<SeP>2024-10-04 13:40:48<SeP>2024-10-06 01:26:24<SeP>2024-10-07 13:12:00<SeP>2024-10-09 00:57:36<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:28:48<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:00:00<SeP>2024-10-16 11:45:36<SeP>2024-10-17 23:31:12<SeP>2024-10-19 11:16:48<SeP>2024-10-20 23:02:24<SeP>2024-10-22 10:48:00<SeP>2024-10-23 22:33:36<SeP>2024-10-25 10:19:12<SeP>2024-10-26 22:04:48<SeP>2024-10-28 09:50:24<SeP>2024-10-29 21:36:00<SeP>2024-10-31 09:21:36<SeP>2024-11-01 21:07:12<SeP>2024-11-03 07:52:48<SeP>2024-11-04 19:38:24<SeP>2024-11-06 07:24:00<SeP>2024-11-07 19:09:36<SeP>2024-11-09 06:55:12<SeP>2024-11-10 18:40:48<SeP>2024-11-12 06:26:24<SeP>2024-11-13 18:12:00<SeP>2024-11-15 05:57:36<SeP>2024-11-16 17:43:12<SeP>2024-11-18 05:28:48<SeP>2024-11-19 17:14:24<SeP>2024-11-21 05:00:00<SeP>2024-11-22 16:45:36<SeP>2024-11-24 04:31:12<SeP>2024-11-25 16:16:48<SeP>2024-11-27 04:02:24<SeP>2024-11-28 15:48:00<SeP>2024-11-30 03:33:36<SeP>2024-12-01 15:19:12<SeP>2024-12-03 03:04:48<SeP>2024-12-04 14:50:24<SeP>2024-12-06 02:36:00<SeP>2024-12-07 14:21:36<SeP>2024-12-09 02:07:12<SeP>2024-12-10 13:52:48<SeP>2024-12-12 01:38:24<SeP>2024-12-13 13:24:00<SeP>2024-12-15 01:09:36<SeP>2024-12-16 12:55:12<SeP>2024-12-18 00:40:48<SeP>2024-12-19 12:26:24<SeP>2024-12-21 00:12:00<SeP>2024-12-22 11:57:36<SeP>2024-12-23 23:43:12<SeP>2024-12-25 11:28:48<SeP>2024-12-26 23:14:24<SeP>2024-12-28 11:00:00<SeP>2024-12-29 22:45:36<SeP>2024-12-31 10:31:12<SeP>2025-01-01 22:16:48<SeP>2025-01-03 10:02:24<SeP>2025-01-04 21:48:00<SeP>2025-01-06 09:33:36<SeP>2025-01-07 21:19:12<SeP>2025-01-09 09:04:48<SeP>2025-01-10 20:50:24<SeP>2025-01-12 08:36:00<SeP>2025-01-13 20:21:36<SeP>2025-01-15 08:07:12<SeP>2025-01-16 19:52:48<SeP>2025-01-18 07:38:24<SeP>2025-01-19 19:24:00<SeP>2025-01-21 07:09:36<SeP>2025-01-22 18:55:12<SeP>2025-01-24 06:40:48<SeP>2025-01-25 18:26:24<SeP>2025-01-27 06:12:00<SeP>2025-01-28 17:57:36<SeP>2025-01-30 05:43:12<SeP>2025-01-31 17:28:48<SeP>2025-02-02 05:14:24<SeP>2025-02-03 17:00:00<SeP>2025-02-05 04:45:36<SeP>2025-02-06 16:31:12<SeP>2025-02-08 04:16:48<SeP>2025-02-09 16:02:24<SeP>2025-02-11 03:48:00<SeP>2025-02-12 15:33:36<SeP>2025-02-14 03:19:12<SeP>2025-02-15 15:04:48<SeP>2025-02-17 02:50:24<SeP>2025-02-18 14:36:00<SeP>2025-02-20 02:21:36<SeP>2025-02-21 14:07:12<SeP>2025-02-23 01:52:48<SeP>2025-02-24 13:38:24<SeP>2025-02-26 01:24:00<SeP>2025-02-27 13:09:36<SeP>2025-03-01 00:55:12<SeP>2025-03-02 12:40:48<SeP>2025-03-04 00:26:24<SeP>2025-03-05 12:12:00<SeP>2025-03-06 23:57:36<SeP>2025-03-08 11:43:12<SeP>2025-03-10 00:28:48<SeP>2025-03-11 12:14:24";
  const item1Label       = "Scans";
  const item1Data        = "787<SeP>1521<SeP>1390<SeP>1496<SeP>1257<SeP>1754<SeP>950<SeP>969<SeP>1162<SeP>3393<SeP>3416<SeP>1026<SeP>3326<SeP>879<SeP>789<SeP>882<SeP>1440<SeP>3239<SeP>1465<SeP>1453<SeP>1082<SeP>924<SeP>1125<SeP>1210<SeP>964<SeP>720<SeP>937<SeP>3651<SeP>1000<SeP>839<SeP>1397<SeP>1270<SeP>836<SeP>2809<SeP>1658<SeP>2744<SeP>1855<SeP>1857<SeP>1430<SeP>1299<SeP>1801<SeP>1822<SeP>2277<SeP>1480<SeP>1692<SeP>1640<SeP>1814<SeP>1771<SeP>1792<SeP>1875<SeP>1791<SeP>1495<SeP>3271<SeP>1633<SeP>1542<SeP>2154<SeP>1912<SeP>2222<SeP>1899<SeP>3350<SeP>1343<SeP>1605<SeP>1530<SeP>1428<SeP>2033<SeP>1530<SeP>1226<SeP>1471<SeP>1360<SeP>2333<SeP>1234<SeP>1124<SeP>1270<SeP>2304<SeP>7333<SeP>1158<SeP>1353<SeP>1409<SeP>2344<SeP>1293<SeP>1160<SeP>6702<SeP>1505<SeP>1616<SeP>991<SeP>3114<SeP>1515<SeP>1018<SeP>1121<SeP>1131<SeP>1031<SeP>3098<SeP>952<SeP>1089<SeP>2773<SeP>4680<SeP>3869<SeP>992<SeP>895<SeP>976<SeP>962<SeP>1038<SeP>987<SeP>1069<SeP>3646<SeP>2397<SeP>1423<SeP>1656<SeP>663<SeP>973<SeP>1605<SeP>1116<SeP>1075<SeP>1001<SeP>2334<SeP>1324<SeP>1050<SeP>969<SeP>1117<SeP>807<SeP>872<SeP>855<SeP>835<SeP>897<SeP>1116<SeP>896<SeP>740<SeP>913<SeP>862<SeP>834<SeP>735<SeP>870<SeP>958<SeP>857<SeP>878<SeP>818<SeP>802<SeP>829<SeP>1050<SeP>887<SeP>822<SeP>921<SeP>953<SeP>911<SeP>1094<SeP>974<SeP>549<SeP>926<SeP>865<SeP>1227<SeP>909<SeP>988<SeP>1249<SeP>1304<SeP>884<SeP>969<SeP>919<SeP>931<SeP>812<SeP>1095<SeP>958<SeP>997<SeP>865<SeP>1057<SeP>982<SeP>1090<SeP>1026<SeP>1054<SeP>1116<SeP>907<SeP>916<SeP>2258<SeP>1225<SeP>1129<SeP>1114<SeP>1025<SeP>1136<SeP>993<SeP>855<SeP>690<SeP>933<SeP>1193<SeP>915<SeP>945<SeP>1029<SeP>1381<SeP>1087<SeP>1194<SeP>1365<SeP>1252<SeP>1190<SeP>1538<SeP>1208<SeP>1541<SeP>2123<SeP>1365<SeP>829<SeP>911<SeP>1113<SeP>1091<SeP>681<SeP>826<SeP>879<SeP>1000<SeP>833<SeP>5525<SeP>3307<SeP>1964<SeP>1398<SeP>1014<SeP>841<SeP>1019<SeP>989<SeP>981<SeP>1119<SeP>1037<SeP>1085<SeP>1682<SeP>1857<SeP>1010<SeP>1337<SeP>1221<SeP>1176<SeP>1193<SeP>995<SeP>1059<SeP>1095<SeP>1137<SeP>1030<SeP>1138<SeP>1135<SeP>1018<SeP>979<SeP>1299<SeP>1125<SeP>1151<SeP>1260<SeP>1398<SeP>1246<SeP>1501<SeP>1262<SeP>1094<SeP>1226<SeP>1186<SeP>1965<SeP>1298<SeP>1993<SeP>1649<SeP>1607<SeP>2022<SeP>1457<SeP>1204<SeP>1204<SeP>1397<SeP>1152<SeP>1548<SeP>1249<SeP>1303<SeP>1689<SeP>1722<SeP>1341<SeP>1541<SeP>1513<SeP>1243<SeP>1026<SeP>1179<SeP>1311<SeP>1184<SeP>1270<SeP>1433<SeP>1099<SeP>1632<SeP>1710<SeP>1323<SeP>1712<SeP>1381<SeP>1345<SeP>1129<SeP>884<SeP>971<SeP>961<SeP>906<SeP>1108<SeP>1683<SeP>1191<SeP>1215<SeP>1078<SeP>889<SeP>1052<SeP>908<SeP>1409<SeP>877<SeP>910<SeP>1165<SeP>1396<SeP>1649<SeP>1278<SeP>1093<SeP>1047<SeP>1179<SeP>1762<SeP>989<SeP>1215<SeP>1059<SeP>1581<SeP>1036<SeP>1004<SeP>1166<SeP>1176<SeP>836<SeP>917<SeP>1145<SeP>1467<SeP>1563<SeP>1494<SeP>1436<SeP>1225<SeP>920<SeP>1154<SeP>1303<SeP>1149<SeP>1192<SeP>1003<SeP>1022<SeP>1275<SeP>1498<SeP>1391<SeP>1579<SeP>1516<SeP>1308<SeP>1530<SeP>1437<SeP>1543<SeP>1377<SeP>1481<SeP>1259<SeP>1847<SeP>1270<SeP>1512<SeP>1647<SeP>1321<SeP>1486<SeP>1274<SeP>1305<SeP>1352<SeP>1503<SeP>1710<SeP>1231<SeP>1346<SeP>1300<SeP>1364<SeP>1349<SeP>1190<SeP>1427<SeP>1962<SeP>1618<SeP>1261<SeP>717<SeP>1464<SeP>1849<SeP>1302<SeP>1345<SeP>1210<SeP>1264<SeP>1320<SeP>1546<SeP>1326<SeP>1563<SeP>1653<SeP>1566<SeP>1388<SeP>1729<SeP>1410<SeP>1389<SeP>1739<SeP>1528<SeP>1402<SeP>1120<SeP>1687<SeP>1776<SeP>1871<SeP>1830<SeP>1918<SeP>1596<SeP>1633<SeP>1524<SeP>1580<SeP>1526<SeP>1732<SeP>1770<SeP>1810<SeP>1442<SeP>1513<SeP>1510<SeP>1464<SeP>1610<SeP>2357<SeP>1110<SeP>2203<SeP>1668";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "221<SeP>550<SeP>1405<SeP>649<SeP>226<SeP>235<SeP>7048<SeP>637<SeP>9341<SeP>564<SeP>401<SeP>1261<SeP>1167<SeP>243<SeP>329<SeP>290<SeP>242<SeP>698<SeP>323<SeP>8579<SeP>7681<SeP>6896<SeP>9797<SeP>514<SeP>295<SeP>414<SeP>165<SeP>386<SeP>5935<SeP>79<SeP>385<SeP>279<SeP>412<SeP>2384<SeP>9743<SeP>8700<SeP>10767<SeP>9558<SeP>6030<SeP>6587<SeP>7871<SeP>8857<SeP>9091<SeP>8041<SeP>7234<SeP>9877<SeP>8963<SeP>8104<SeP>6908<SeP>5538<SeP>12348<SeP>6970<SeP>8214<SeP>7602<SeP>9924<SeP>12259<SeP>22812<SeP>9558<SeP>9299<SeP>10116<SeP>6621<SeP>9054<SeP>8127<SeP>9221<SeP>8575<SeP>6158<SeP>6767<SeP>7404<SeP>5787<SeP>3235<SeP>6903<SeP>6033<SeP>6633<SeP>6510<SeP>6673<SeP>4527<SeP>5984<SeP>7373<SeP>4765<SeP>7099<SeP>4830<SeP>5911<SeP>6613<SeP>5933<SeP>5799<SeP>5452<SeP>16285<SeP>16203<SeP>36184<SeP>7134<SeP>8792<SeP>6084<SeP>9127<SeP>10466<SeP>5137<SeP>6437<SeP>3859<SeP>5482<SeP>6486<SeP>5280<SeP>8723<SeP>6814<SeP>5355<SeP>4550<SeP>5986<SeP>9714<SeP>8059<SeP>7945<SeP>4527<SeP>6914<SeP>9897<SeP>8508<SeP>4490<SeP>3645<SeP>6923<SeP>9106<SeP>5905<SeP>7583<SeP>8446<SeP>2791<SeP>3178<SeP>1077<SeP>1670<SeP>2566<SeP>1781<SeP>876<SeP>1238<SeP>1097<SeP>1358<SeP>1129<SeP>1291<SeP>1175<SeP>993<SeP>1020<SeP>1022<SeP>1503<SeP>1273<SeP>1130<SeP>2097<SeP>1694<SeP>4572<SeP>12291<SeP>7827<SeP>8646<SeP>6950<SeP>12889<SeP>2785<SeP>11748<SeP>10033<SeP>9500<SeP>12503<SeP>8208<SeP>13217<SeP>12015<SeP>7661<SeP>11550<SeP>5841<SeP>5240<SeP>7169<SeP>25478<SeP>6261<SeP>8806<SeP>10563<SeP>17047<SeP>7293<SeP>6907<SeP>6689<SeP>6889<SeP>25185<SeP>9019<SeP>8367<SeP>12174<SeP>4320<SeP>6885<SeP>5223<SeP>17149<SeP>4893<SeP>13037<SeP>7924<SeP>6985<SeP>8579<SeP>7593<SeP>3004<SeP>6205<SeP>5567<SeP>7201<SeP>7457<SeP>5728<SeP>7587<SeP>20169<SeP>5939<SeP>7640<SeP>6248<SeP>8204<SeP>10787<SeP>7377<SeP>4843<SeP>3299<SeP>6327<SeP>3366<SeP>4346<SeP>3944<SeP>637<SeP>109<SeP>637<SeP>610<SeP>588<SeP>766<SeP>365<SeP>658<SeP>1341<SeP>1372<SeP>3033<SeP>22903<SeP>653<SeP>4710<SeP>3569<SeP>3416<SeP>6654<SeP>2675<SeP>4255<SeP>3827<SeP>2972<SeP>3080<SeP>3219<SeP>4687<SeP>1622<SeP>3706<SeP>1698<SeP>2590<SeP>1307<SeP>1919<SeP>1599<SeP>1382<SeP>1260<SeP>852<SeP>1716<SeP>26799<SeP>1771<SeP>4184<SeP>3807<SeP>2416<SeP>3472<SeP>2956<SeP>2152<SeP>3544<SeP>2814<SeP>3517<SeP>2128<SeP>3732<SeP>2745<SeP>5539<SeP>6272<SeP>3983<SeP>3771<SeP>2571<SeP>3441<SeP>4351<SeP>5357<SeP>8929<SeP>5362<SeP>2289<SeP>3544<SeP>2688<SeP>4835<SeP>3284<SeP>3448<SeP>2622<SeP>4446<SeP>4945<SeP>3828<SeP>5877<SeP>4401<SeP>6213<SeP>4547<SeP>5578<SeP>5494<SeP>21946<SeP>5228<SeP>11005<SeP>1800<SeP>3726<SeP>4835<SeP>3355<SeP>3888<SeP>5910<SeP>3620<SeP>4745<SeP>4465<SeP>3625<SeP>3329<SeP>1273<SeP>1966<SeP>3269<SeP>2878<SeP>2828<SeP>3331<SeP>4348<SeP>4173<SeP>3412<SeP>4322<SeP>3464<SeP>3238<SeP>4060<SeP>8510<SeP>6035<SeP>5771<SeP>5135<SeP>4855<SeP>3636<SeP>3582<SeP>4656<SeP>5967<SeP>5522<SeP>4767<SeP>4392<SeP>998<SeP>787<SeP>2232<SeP>1366<SeP>1093<SeP>1859<SeP>1559<SeP>1084<SeP>3389<SeP>4071<SeP>6557<SeP>32296<SeP>6908<SeP>5296<SeP>18946<SeP>10245<SeP>5315<SeP>6235<SeP>4579<SeP>24354<SeP>5108<SeP>5127<SeP>5175<SeP>5586<SeP>7197<SeP>28315<SeP>4678<SeP>3701<SeP>4417<SeP>5307<SeP>5929<SeP>3495<SeP>3301<SeP>3544<SeP>4899<SeP>5374<SeP>4109<SeP>17846<SeP>6268<SeP>7306<SeP>3479<SeP>2437<SeP>3515<SeP>4340<SeP>3992<SeP>4423<SeP>2726<SeP>3879<SeP>2519<SeP>4488<SeP>4794<SeP>8424<SeP>10877<SeP>8146<SeP>9085<SeP>8516<SeP>8068<SeP>4879<SeP>5348<SeP>3923<SeP>25576<SeP>3613<SeP>3642<SeP>3737<SeP>11016<SeP>5424<SeP>4951<SeP>4147<SeP>4572<SeP>3607<SeP>6194<SeP>10130<SeP>6882<SeP>3904<SeP>3264<SeP>2914<SeP>2212<SeP>2380<SeP>2085<SeP>2193<SeP>2473<SeP>1967<SeP>2892<SeP>3071";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:45:36<SeP>2023-07-28 23:31:12<SeP>2023-07-30 11:16:48<SeP>2023-07-31 23:02:24<SeP>2023-08-02 10:48:00<SeP>2023-08-03 22:33:36<SeP>2023-08-05 10:19:12<SeP>2023-08-06 22:04:48<SeP>2023-08-08 09:50:24<SeP>2023-08-09 21:36:00<SeP>2023-08-11 09:21:36<SeP>2023-08-12 21:07:12<SeP>2023-08-14 08:52:48<SeP>2023-08-15 20:38:24<SeP>2023-08-17 08:24:00<SeP>2023-08-18 20:09:36<SeP>2023-08-20 07:55:12<SeP>2023-08-21 19:40:48<SeP>2023-08-23 07:26:24<SeP>2023-08-24 19:12:00<SeP>2023-08-26 06:57:36<SeP>2023-08-27 18:43:12<SeP>2023-08-29 06:28:48<SeP>2023-08-30 18:14:24<SeP>2023-09-01 06:00:00<SeP>2023-09-02 17:45:36<SeP>2023-09-04 05:31:12<SeP>2023-09-05 17:16:48<SeP>2023-09-07 05:02:24<SeP>2023-09-08 16:48:00<SeP>2023-09-10 04:33:36<SeP>2023-09-11 16:19:12<SeP>2023-09-13 04:04:48<SeP>2023-09-14 15:50:24<SeP>2023-09-16 03:36:00<SeP>2023-09-17 15:21:36<SeP>2023-09-19 03:07:12<SeP>2023-09-20 14:52:48<SeP>2023-09-22 02:38:24<SeP>2023-09-23 14:24:00<SeP>2023-09-25 02:09:36<SeP>2023-09-26 13:55:12<SeP>2023-09-28 01:40:48<SeP>2023-09-29 13:26:24<SeP>2023-10-01 01:12:00<SeP>2023-10-02 12:57:36<SeP>2023-10-04 00:43:12<SeP>2023-10-05 12:28:48<SeP>2023-10-07 00:14:24<SeP>2023-10-08 12:00:00<SeP>2023-10-09 23:45:36<SeP>2023-10-11 11:31:12<SeP>2023-10-12 23:16:48<SeP>2023-10-14 11:02:24<SeP>2023-10-15 22:48:00<SeP>2023-10-17 10:33:36<SeP>2023-10-18 22:19:12<SeP>2023-10-20 10:04:48<SeP>2023-10-21 21:50:24<SeP>2023-10-23 09:36:00<SeP>2023-10-24 21:21:36<SeP>2023-10-26 09:07:12<SeP>2023-10-27 20:52:48<SeP>2023-10-29 08:38:24<SeP>2023-10-30 20:24:00<SeP>2023-11-01 08:09:36<SeP>2023-11-02 19:55:12<SeP>2023-11-04 07:40:48<SeP>2023-11-05 18:26:24<SeP>2023-11-07 06:12:00<SeP>2023-11-08 17:57:36<SeP>2023-11-10 05:43:12<SeP>2023-11-11 17:28:48<SeP>2023-11-13 05:14:24<SeP>2023-11-14 17:00:00<SeP>2023-11-16 04:45:36<SeP>2023-11-17 16:31:12<SeP>2023-11-19 04:16:48<SeP>2023-11-20 16:02:24<SeP>2023-11-22 03:48:00<SeP>2023-11-23 15:33:36<SeP>2023-11-25 03:19:12<SeP>2023-11-26 15:04:48<SeP>2023-11-28 02:50:24<SeP>2023-11-29 14:36:00<SeP>2023-12-01 02:21:36<SeP>2023-12-02 14:07:12<SeP>2023-12-04 01:52:48<SeP>2023-12-05 13:38:24<SeP>2023-12-07 01:24:00<SeP>2023-12-08 13:09:36<SeP>2023-12-10 00:55:12<SeP>2023-12-11 12:40:48<SeP>2023-12-13 00:26:24<SeP>2023-12-14 12:12:00<SeP>2023-12-15 23:57:36<SeP>2023-12-17 11:43:12<SeP>2023-12-18 23:28:48<SeP>2023-12-20 11:14:24<SeP>2023-12-21 23:00:00<SeP>2023-12-23 10:45:36<SeP>2023-12-24 22:31:12<SeP>2023-12-26 10:16:48<SeP>2023-12-27 22:02:24<SeP>2023-12-29 09:48:00<SeP>2023-12-30 21:33:36<SeP>2024-01-01 09:19:12<SeP>2024-01-02 21:04:48<SeP>2024-01-04 08:50:24<SeP>2024-01-05 20:36:00<SeP>2024-01-07 08:21:36<SeP>2024-01-08 20:07:12<SeP>2024-01-10 07:52:48<SeP>2024-01-11 19:38:24<SeP>2024-01-13 07:24:00<SeP>2024-01-14 19:09:36<SeP>2024-01-16 06:55:12<SeP>2024-01-17 18:40:48<SeP>2024-01-19 06:26:24<SeP>2024-01-20 18:12:00<SeP>2024-01-22 05:57:36<SeP>2024-01-23 17:43:12<SeP>2024-01-25 05:28:48<SeP>2024-01-26 17:14:24<SeP>2024-01-28 05:00:00<SeP>2024-01-29 16:45:36<SeP>2024-01-31 04:31:12<SeP>2024-02-01 16:16:48<SeP>2024-02-03 04:02:24<SeP>2024-02-04 15:48:00<SeP>2024-02-06 03:33:36<SeP>2024-02-07 15:19:12<SeP>2024-02-09 03:04:48<SeP>2024-02-10 14:50:24<SeP>2024-02-12 02:36:00<SeP>2024-02-13 14:21:36<SeP>2024-02-15 02:07:12<SeP>2024-02-16 13:52:48<SeP>2024-02-18 01:38:24<SeP>2024-02-19 13:24:00<SeP>2024-02-21 01:09:36<SeP>2024-02-22 12:55:12<SeP>2024-02-24 00:40:48<SeP>2024-02-25 12:26:24<SeP>2024-02-27 00:12:00<SeP>2024-02-28 11:57:36<SeP>2024-02-29 23:43:12<SeP>2024-03-02 11:28:48<SeP>2024-03-03 23:14:24<SeP>2024-03-05 11:00:00<SeP>2024-03-06 22:45:36<SeP>2024-03-08 10:31:12<SeP>2024-03-09 22:16:48<SeP>2024-03-11 11:02:24<SeP>2024-03-12 22:48:00<SeP>2024-03-14 10:33:36<SeP>2024-03-15 22:19:12<SeP>2024-03-17 10:04:48<SeP>2024-03-18 21:50:24<SeP>2024-03-20 09:36:00<SeP>2024-03-21 21:21:36<SeP>2024-03-23 09:07:12<SeP>2024-03-24 20:52:48<SeP>2024-03-26 08:38:24<SeP>2024-03-27 20:24:00<SeP>2024-03-29 08:09:36<SeP>2024-03-30 19:55:12<SeP>2024-04-01 07:40:48<SeP>2024-04-02 19:26:24<SeP>2024-04-04 07:12:00<SeP>2024-04-05 18:57:36<SeP>2024-04-07 06:43:12<SeP>2024-04-08 18:28:48<SeP>2024-04-10 06:14:24<SeP>2024-04-11 18:00:00<SeP>2024-04-13 05:45:36<SeP>2024-04-14 17:31:12<SeP>2024-04-16 05:16:48<SeP>2024-04-17 17:02:24<SeP>2024-04-19 04:48:00<SeP>2024-04-20 16:33:36<SeP>2024-04-22 04:19:12<SeP>2024-04-23 16:04:48<SeP>2024-04-25 03:50:24<SeP>2024-04-26 15:36:00<SeP>2024-04-28 03:21:36<SeP>2024-04-29 15:07:12<SeP>2024-05-01 02:52:48<SeP>2024-05-02 14:38:24<SeP>2024-05-04 02:24:00<SeP>2024-05-05 14:09:36<SeP>2024-05-07 01:55:12<SeP>2024-05-08 13:40:48<SeP>2024-05-10 01:26:24<SeP>2024-05-11 13:12:00<SeP>2024-05-13 00:57:36<SeP>2024-05-14 12:43:12<SeP>2024-05-16 00:28:48<SeP>2024-05-17 12:14:24<SeP>2024-05-19 00:00:00<SeP>2024-05-20 11:45:36<SeP>2024-05-21 23:31:12<SeP>2024-05-23 11:16:48<SeP>2024-05-24 23:02:24<SeP>2024-05-26 10:48:00<SeP>2024-05-27 22:33:36<SeP>2024-05-29 10:19:12<SeP>2024-05-30 22:04:48<SeP>2024-06-01 09:50:24<SeP>2024-06-02 21:36:00<SeP>2024-06-04 09:21:36<SeP>2024-06-05 21:07:12<SeP>2024-06-07 08:52:48<SeP>2024-06-08 20:38:24<SeP>2024-06-10 08:24:00<SeP>2024-06-11 20:09:36<SeP>2024-06-13 07:55:12<SeP>2024-06-14 19:40:48<SeP>2024-06-16 07:26:24<SeP>2024-06-17 19:12:00<SeP>2024-06-19 06:57:36<SeP>2024-06-20 18:43:12<SeP>2024-06-22 06:28:48<SeP>2024-06-23 18:14:24<SeP>2024-06-25 06:00:00<SeP>2024-06-26 17:45:36<SeP>2024-06-28 05:31:12<SeP>2024-06-29 17:16:48<SeP>2024-07-01 05:02:24<SeP>2024-07-02 16:48:00<SeP>2024-07-04 04:33:36<SeP>2024-07-05 16:19:12<SeP>2024-07-07 04:04:48<SeP>2024-07-08 15:50:24<SeP>2024-07-10 03:36:00<SeP>2024-07-11 15:21:36<SeP>2024-07-13 03:07:12<SeP>2024-07-14 14:52:48<SeP>2024-07-16 02:38:24<SeP>2024-07-17 14:24:00<SeP>2024-07-19 02:09:36<SeP>2024-07-20 13:55:12<SeP>2024-07-22 01:40:48<SeP>2024-07-23 13:26:24<SeP>2024-07-25 01:12:00<SeP>2024-07-26 12:57:36<SeP>2024-07-28 00:43:12<SeP>2024-07-29 12:28:48<SeP>2024-07-31 00:14:24<SeP>2024-08-01 12:00:00<SeP>2024-08-02 23:45:36<SeP>2024-08-04 11:31:12<SeP>2024-08-05 23:16:48<SeP>2024-08-07 11:02:24<SeP>2024-08-08 22:48:00<SeP>2024-08-10 10:33:36<SeP>2024-08-11 22:19:12<SeP>2024-08-13 10:04:48<SeP>2024-08-14 21:50:24<SeP>2024-08-16 09:36:00<SeP>2024-08-17 21:21:36<SeP>2024-08-19 09:07:12<SeP>2024-08-20 20:52:48<SeP>2024-08-22 08:38:24<SeP>2024-08-23 20:24:00<SeP>2024-08-25 08:09:36<SeP>2024-08-26 19:55:12<SeP>2024-08-28 07:40:48<SeP>2024-08-29 19:26:24<SeP>2024-08-31 07:12:00<SeP>2024-09-01 18:57:36<SeP>2024-09-03 06:43:12<SeP>2024-09-04 18:28:48<SeP>2024-09-06 06:14:24<SeP>2024-09-07 18:00:00<SeP>2024-09-09 05:45:36<SeP>2024-09-10 17:31:12<SeP>2024-09-12 05:16:48<SeP>2024-09-13 17:02:24<SeP>2024-09-15 04:48:00<SeP>2024-09-16 16:33:36<SeP>2024-09-18 04:19:12<SeP>2024-09-19 16:04:48<SeP>2024-09-21 03:50:24<SeP>2024-09-22 15:36:00<SeP>2024-09-24 03:21:36<SeP>2024-09-25 15:07:12<SeP>2024-09-27 02:52:48<SeP>2024-09-28 14:38:24<SeP>2024-09-30 02:24:00<SeP>2024-10-01 14:09:36<SeP>2024-10-03 01:55:12<SeP>2024-10-04 13:40:48<SeP>2024-10-06 01:26:24<SeP>2024-10-07 13:12:00<SeP>2024-10-09 00:57:36<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:28:48<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:00:00<SeP>2024-10-16 11:45:36<SeP>2024-10-17 23:31:12<SeP>2024-10-19 11:16:48<SeP>2024-10-20 23:02:24<SeP>2024-10-22 10:48:00<SeP>2024-10-23 22:33:36<SeP>2024-10-25 10:19:12<SeP>2024-10-26 22:04:48<SeP>2024-10-28 09:50:24<SeP>2024-10-29 21:36:00<SeP>2024-10-31 09:21:36<SeP>2024-11-01 21:07:12<SeP>2024-11-03 07:52:48<SeP>2024-11-04 19:38:24<SeP>2024-11-06 07:24:00<SeP>2024-11-07 19:09:36<SeP>2024-11-09 06:55:12<SeP>2024-11-10 18:40:48<SeP>2024-11-12 06:26:24<SeP>2024-11-13 18:12:00<SeP>2024-11-15 05:57:36<SeP>2024-11-16 17:43:12<SeP>2024-11-18 05:28:48<SeP>2024-11-19 17:14:24<SeP>2024-11-21 05:00:00<SeP>2024-11-22 16:45:36<SeP>2024-11-24 04:31:12<SeP>2024-11-25 16:16:48<SeP>2024-11-27 04:02:24<SeP>2024-11-28 15:48:00<SeP>2024-11-30 03:33:36<SeP>2024-12-01 15:19:12<SeP>2024-12-03 03:04:48<SeP>2024-12-04 14:50:24<SeP>2024-12-06 02:36:00<SeP>2024-12-07 14:21:36<SeP>2024-12-09 02:07:12<SeP>2024-12-10 13:52:48<SeP>2024-12-12 01:38:24<SeP>2024-12-13 13:24:00<SeP>2024-12-15 01:09:36<SeP>2024-12-16 12:55:12<SeP>2024-12-18 00:40:48<SeP>2024-12-19 12:26:24<SeP>2024-12-21 00:12:00<SeP>2024-12-22 11:57:36<SeP>2024-12-23 23:43:12<SeP>2024-12-25 11:28:48<SeP>2024-12-26 23:14:24<SeP>2024-12-28 11:00:00<SeP>2024-12-29 22:45:36<SeP>2024-12-31 10:31:12<SeP>2025-01-01 22:16:48<SeP>2025-01-03 10:02:24<SeP>2025-01-04 21:48:00<SeP>2025-01-06 09:33:36<SeP>2025-01-07 21:19:12<SeP>2025-01-09 09:04:48<SeP>2025-01-10 20:50:24<SeP>2025-01-12 08:36:00<SeP>2025-01-13 20:21:36<SeP>2025-01-15 08:07:12<SeP>2025-01-16 19:52:48<SeP>2025-01-18 07:38:24<SeP>2025-01-19 19:24:00<SeP>2025-01-21 07:09:36<SeP>2025-01-22 18:55:12<SeP>2025-01-24 06:40:48<SeP>2025-01-25 18:26:24<SeP>2025-01-27 06:12:00<SeP>2025-01-28 17:57:36<SeP>2025-01-30 05:43:12<SeP>2025-01-31 17:28:48<SeP>2025-02-02 05:14:24<SeP>2025-02-03 17:00:00<SeP>2025-02-05 04:45:36<SeP>2025-02-06 16:31:12<SeP>2025-02-08 04:16:48<SeP>2025-02-09 16:02:24<SeP>2025-02-11 03:48:00<SeP>2025-02-12 15:33:36<SeP>2025-02-14 03:19:12<SeP>2025-02-15 15:04:48<SeP>2025-02-17 02:50:24<SeP>2025-02-18 14:36:00<SeP>2025-02-20 02:21:36<SeP>2025-02-21 14:07:12<SeP>2025-02-23 01:52:48<SeP>2025-02-24 13:38:24<SeP>2025-02-26 01:24:00<SeP>2025-02-27 13:09:36<SeP>2025-03-01 00:55:12<SeP>2025-03-02 12:40:48<SeP>2025-03-04 00:26:24<SeP>2025-03-05 12:12:00<SeP>2025-03-06 23:57:36<SeP>2025-03-08 11:43:12<SeP>2025-03-10 00:28:48<SeP>2025-03-11 12:14:24";
  const itemLabel       = "Scans";
  const itemData        = "787<SeP>1521<SeP>1390<SeP>1496<SeP>1257<SeP>1754<SeP>950<SeP>969<SeP>1162<SeP>3393<SeP>3416<SeP>1026<SeP>3326<SeP>879<SeP>789<SeP>882<SeP>1440<SeP>3239<SeP>1465<SeP>1453<SeP>1082<SeP>924<SeP>1125<SeP>1210<SeP>964<SeP>720<SeP>937<SeP>3651<SeP>1000<SeP>839<SeP>1397<SeP>1270<SeP>836<SeP>2809<SeP>1658<SeP>2744<SeP>1855<SeP>1857<SeP>1430<SeP>1299<SeP>1801<SeP>1822<SeP>2277<SeP>1480<SeP>1692<SeP>1640<SeP>1814<SeP>1771<SeP>1792<SeP>1875<SeP>1791<SeP>1495<SeP>3271<SeP>1633<SeP>1542<SeP>2154<SeP>1912<SeP>2222<SeP>1899<SeP>3350<SeP>1343<SeP>1605<SeP>1530<SeP>1428<SeP>2033<SeP>1530<SeP>1226<SeP>1471<SeP>1360<SeP>2333<SeP>1234<SeP>1124<SeP>1270<SeP>2304<SeP>7333<SeP>1158<SeP>1353<SeP>1409<SeP>2344<SeP>1293<SeP>1160<SeP>6702<SeP>1505<SeP>1616<SeP>991<SeP>3114<SeP>1515<SeP>1018<SeP>1121<SeP>1131<SeP>1031<SeP>3098<SeP>952<SeP>1089<SeP>2773<SeP>4680<SeP>3869<SeP>992<SeP>895<SeP>976<SeP>962<SeP>1038<SeP>987<SeP>1069<SeP>3646<SeP>2397<SeP>1423<SeP>1656<SeP>663<SeP>973<SeP>1605<SeP>1116<SeP>1075<SeP>1001<SeP>2334<SeP>1324<SeP>1050<SeP>969<SeP>1117<SeP>807<SeP>872<SeP>855<SeP>835<SeP>897<SeP>1116<SeP>896<SeP>740<SeP>913<SeP>862<SeP>834<SeP>735<SeP>870<SeP>958<SeP>857<SeP>878<SeP>818<SeP>802<SeP>829<SeP>1050<SeP>887<SeP>822<SeP>921<SeP>953<SeP>911<SeP>1094<SeP>974<SeP>549<SeP>926<SeP>865<SeP>1227<SeP>909<SeP>988<SeP>1249<SeP>1304<SeP>884<SeP>969<SeP>919<SeP>931<SeP>812<SeP>1095<SeP>958<SeP>997<SeP>865<SeP>1057<SeP>982<SeP>1090<SeP>1026<SeP>1054<SeP>1116<SeP>907<SeP>916<SeP>2258<SeP>1225<SeP>1129<SeP>1114<SeP>1025<SeP>1136<SeP>993<SeP>855<SeP>690<SeP>933<SeP>1193<SeP>915<SeP>945<SeP>1029<SeP>1381<SeP>1087<SeP>1194<SeP>1365<SeP>1252<SeP>1190<SeP>1538<SeP>1208<SeP>1541<SeP>2123<SeP>1365<SeP>829<SeP>911<SeP>1113<SeP>1091<SeP>681<SeP>826<SeP>879<SeP>1000<SeP>833<SeP>5525<SeP>3307<SeP>1964<SeP>1398<SeP>1014<SeP>841<SeP>1019<SeP>989<SeP>981<SeP>1119<SeP>1037<SeP>1085<SeP>1682<SeP>1857<SeP>1010<SeP>1337<SeP>1221<SeP>1176<SeP>1193<SeP>995<SeP>1059<SeP>1095<SeP>1137<SeP>1030<SeP>1138<SeP>1135<SeP>1018<SeP>979<SeP>1299<SeP>1125<SeP>1151<SeP>1260<SeP>1398<SeP>1246<SeP>1501<SeP>1262<SeP>1094<SeP>1226<SeP>1186<SeP>1965<SeP>1298<SeP>1993<SeP>1649<SeP>1607<SeP>2022<SeP>1457<SeP>1204<SeP>1204<SeP>1397<SeP>1152<SeP>1548<SeP>1249<SeP>1303<SeP>1689<SeP>1722<SeP>1341<SeP>1541<SeP>1513<SeP>1243<SeP>1026<SeP>1179<SeP>1311<SeP>1184<SeP>1270<SeP>1433<SeP>1099<SeP>1632<SeP>1710<SeP>1323<SeP>1712<SeP>1381<SeP>1345<SeP>1129<SeP>884<SeP>971<SeP>961<SeP>906<SeP>1108<SeP>1683<SeP>1191<SeP>1215<SeP>1078<SeP>889<SeP>1052<SeP>908<SeP>1409<SeP>877<SeP>910<SeP>1165<SeP>1396<SeP>1649<SeP>1278<SeP>1093<SeP>1047<SeP>1179<SeP>1762<SeP>989<SeP>1215<SeP>1059<SeP>1581<SeP>1036<SeP>1004<SeP>1166<SeP>1176<SeP>836<SeP>917<SeP>1145<SeP>1467<SeP>1563<SeP>1494<SeP>1436<SeP>1225<SeP>920<SeP>1154<SeP>1303<SeP>1149<SeP>1192<SeP>1003<SeP>1022<SeP>1275<SeP>1498<SeP>1391<SeP>1579<SeP>1516<SeP>1308<SeP>1530<SeP>1437<SeP>1543<SeP>1377<SeP>1481<SeP>1259<SeP>1847<SeP>1270<SeP>1512<SeP>1647<SeP>1321<SeP>1486<SeP>1274<SeP>1305<SeP>1352<SeP>1503<SeP>1710<SeP>1231<SeP>1346<SeP>1300<SeP>1364<SeP>1349<SeP>1190<SeP>1427<SeP>1962<SeP>1618<SeP>1261<SeP>717<SeP>1464<SeP>1849<SeP>1302<SeP>1345<SeP>1210<SeP>1264<SeP>1320<SeP>1546<SeP>1326<SeP>1563<SeP>1653<SeP>1566<SeP>1388<SeP>1729<SeP>1410<SeP>1389<SeP>1739<SeP>1528<SeP>1402<SeP>1120<SeP>1687<SeP>1776<SeP>1871<SeP>1830<SeP>1918<SeP>1596<SeP>1633<SeP>1524<SeP>1580<SeP>1526<SeP>1732<SeP>1770<SeP>1810<SeP>1442<SeP>1513<SeP>1510<SeP>1464<SeP>1610<SeP>2357<SeP>1110<SeP>2203<SeP>1668";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:45:36<SeP>2023-07-28 23:31:12<SeP>2023-07-30 11:16:48<SeP>2023-07-31 23:02:24<SeP>2023-08-02 10:48:00<SeP>2023-08-03 22:33:36<SeP>2023-08-05 10:19:12<SeP>2023-08-06 22:04:48<SeP>2023-08-08 09:50:24<SeP>2023-08-09 21:36:00<SeP>2023-08-11 09:21:36<SeP>2023-08-12 21:07:12<SeP>2023-08-14 08:52:48<SeP>2023-08-15 20:38:24<SeP>2023-08-17 08:24:00<SeP>2023-08-18 20:09:36<SeP>2023-08-20 07:55:12<SeP>2023-08-21 19:40:48<SeP>2023-08-23 07:26:24<SeP>2023-08-24 19:12:00<SeP>2023-08-26 06:57:36<SeP>2023-08-27 18:43:12<SeP>2023-08-29 06:28:48<SeP>2023-08-30 18:14:24<SeP>2023-09-01 06:00:00<SeP>2023-09-02 17:45:36<SeP>2023-09-04 05:31:12<SeP>2023-09-05 17:16:48<SeP>2023-09-07 05:02:24<SeP>2023-09-08 16:48:00<SeP>2023-09-10 04:33:36<SeP>2023-09-11 16:19:12<SeP>2023-09-13 04:04:48<SeP>2023-09-14 15:50:24<SeP>2023-09-16 03:36:00<SeP>2023-09-17 15:21:36<SeP>2023-09-19 03:07:12<SeP>2023-09-20 14:52:48<SeP>2023-09-22 02:38:24<SeP>2023-09-23 14:24:00<SeP>2023-09-25 02:09:36<SeP>2023-09-26 13:55:12<SeP>2023-09-28 01:40:48<SeP>2023-09-29 13:26:24<SeP>2023-10-01 01:12:00<SeP>2023-10-02 12:57:36<SeP>2023-10-04 00:43:12<SeP>2023-10-05 12:28:48<SeP>2023-10-07 00:14:24<SeP>2023-10-08 12:00:00<SeP>2023-10-09 23:45:36<SeP>2023-10-11 11:31:12<SeP>2023-10-12 23:16:48<SeP>2023-10-14 11:02:24<SeP>2023-10-15 22:48:00<SeP>2023-10-17 10:33:36<SeP>2023-10-18 22:19:12<SeP>2023-10-20 10:04:48<SeP>2023-10-21 21:50:24<SeP>2023-10-23 09:36:00<SeP>2023-10-24 21:21:36<SeP>2023-10-26 09:07:12<SeP>2023-10-27 20:52:48<SeP>2023-10-29 08:38:24<SeP>2023-10-30 20:24:00<SeP>2023-11-01 08:09:36<SeP>2023-11-02 19:55:12<SeP>2023-11-04 07:40:48<SeP>2023-11-05 18:26:24<SeP>2023-11-07 06:12:00<SeP>2023-11-08 17:57:36<SeP>2023-11-10 05:43:12<SeP>2023-11-11 17:28:48<SeP>2023-11-13 05:14:24<SeP>2023-11-14 17:00:00<SeP>2023-11-16 04:45:36<SeP>2023-11-17 16:31:12<SeP>2023-11-19 04:16:48<SeP>2023-11-20 16:02:24<SeP>2023-11-22 03:48:00<SeP>2023-11-23 15:33:36<SeP>2023-11-25 03:19:12<SeP>2023-11-26 15:04:48<SeP>2023-11-28 02:50:24<SeP>2023-11-29 14:36:00<SeP>2023-12-01 02:21:36<SeP>2023-12-02 14:07:12<SeP>2023-12-04 01:52:48<SeP>2023-12-05 13:38:24<SeP>2023-12-07 01:24:00<SeP>2023-12-08 13:09:36<SeP>2023-12-10 00:55:12<SeP>2023-12-11 12:40:48<SeP>2023-12-13 00:26:24<SeP>2023-12-14 12:12:00<SeP>2023-12-15 23:57:36<SeP>2023-12-17 11:43:12<SeP>2023-12-18 23:28:48<SeP>2023-12-20 11:14:24<SeP>2023-12-21 23:00:00<SeP>2023-12-23 10:45:36<SeP>2023-12-24 22:31:12<SeP>2023-12-26 10:16:48<SeP>2023-12-27 22:02:24<SeP>2023-12-29 09:48:00<SeP>2023-12-30 21:33:36<SeP>2024-01-01 09:19:12<SeP>2024-01-02 21:04:48<SeP>2024-01-04 08:50:24<SeP>2024-01-05 20:36:00<SeP>2024-01-07 08:21:36<SeP>2024-01-08 20:07:12<SeP>2024-01-10 07:52:48<SeP>2024-01-11 19:38:24<SeP>2024-01-13 07:24:00<SeP>2024-01-14 19:09:36<SeP>2024-01-16 06:55:12<SeP>2024-01-17 18:40:48<SeP>2024-01-19 06:26:24<SeP>2024-01-20 18:12:00<SeP>2024-01-22 05:57:36<SeP>2024-01-23 17:43:12<SeP>2024-01-25 05:28:48<SeP>2024-01-26 17:14:24<SeP>2024-01-28 05:00:00<SeP>2024-01-29 16:45:36<SeP>2024-01-31 04:31:12<SeP>2024-02-01 16:16:48<SeP>2024-02-03 04:02:24<SeP>2024-02-04 15:48:00<SeP>2024-02-06 03:33:36<SeP>2024-02-07 15:19:12<SeP>2024-02-09 03:04:48<SeP>2024-02-10 14:50:24<SeP>2024-02-12 02:36:00<SeP>2024-02-13 14:21:36<SeP>2024-02-15 02:07:12<SeP>2024-02-16 13:52:48<SeP>2024-02-18 01:38:24<SeP>2024-02-19 13:24:00<SeP>2024-02-21 01:09:36<SeP>2024-02-22 12:55:12<SeP>2024-02-24 00:40:48<SeP>2024-02-25 12:26:24<SeP>2024-02-27 00:12:00<SeP>2024-02-28 11:57:36<SeP>2024-02-29 23:43:12<SeP>2024-03-02 11:28:48<SeP>2024-03-03 23:14:24<SeP>2024-03-05 11:00:00<SeP>2024-03-06 22:45:36<SeP>2024-03-08 10:31:12<SeP>2024-03-09 22:16:48<SeP>2024-03-11 11:02:24<SeP>2024-03-12 22:48:00<SeP>2024-03-14 10:33:36<SeP>2024-03-15 22:19:12<SeP>2024-03-17 10:04:48<SeP>2024-03-18 21:50:24<SeP>2024-03-20 09:36:00<SeP>2024-03-21 21:21:36<SeP>2024-03-23 09:07:12<SeP>2024-03-24 20:52:48<SeP>2024-03-26 08:38:24<SeP>2024-03-27 20:24:00<SeP>2024-03-29 08:09:36<SeP>2024-03-30 19:55:12<SeP>2024-04-01 07:40:48<SeP>2024-04-02 19:26:24<SeP>2024-04-04 07:12:00<SeP>2024-04-05 18:57:36<SeP>2024-04-07 06:43:12<SeP>2024-04-08 18:28:48<SeP>2024-04-10 06:14:24<SeP>2024-04-11 18:00:00<SeP>2024-04-13 05:45:36<SeP>2024-04-14 17:31:12<SeP>2024-04-16 05:16:48<SeP>2024-04-17 17:02:24<SeP>2024-04-19 04:48:00<SeP>2024-04-20 16:33:36<SeP>2024-04-22 04:19:12<SeP>2024-04-23 16:04:48<SeP>2024-04-25 03:50:24<SeP>2024-04-26 15:36:00<SeP>2024-04-28 03:21:36<SeP>2024-04-29 15:07:12<SeP>2024-05-01 02:52:48<SeP>2024-05-02 14:38:24<SeP>2024-05-04 02:24:00<SeP>2024-05-05 14:09:36<SeP>2024-05-07 01:55:12<SeP>2024-05-08 13:40:48<SeP>2024-05-10 01:26:24<SeP>2024-05-11 13:12:00<SeP>2024-05-13 00:57:36<SeP>2024-05-14 12:43:12<SeP>2024-05-16 00:28:48<SeP>2024-05-17 12:14:24<SeP>2024-05-19 00:00:00<SeP>2024-05-20 11:45:36<SeP>2024-05-21 23:31:12<SeP>2024-05-23 11:16:48<SeP>2024-05-24 23:02:24<SeP>2024-05-26 10:48:00<SeP>2024-05-27 22:33:36<SeP>2024-05-29 10:19:12<SeP>2024-05-30 22:04:48<SeP>2024-06-01 09:50:24<SeP>2024-06-02 21:36:00<SeP>2024-06-04 09:21:36<SeP>2024-06-05 21:07:12<SeP>2024-06-07 08:52:48<SeP>2024-06-08 20:38:24<SeP>2024-06-10 08:24:00<SeP>2024-06-11 20:09:36<SeP>2024-06-13 07:55:12<SeP>2024-06-14 19:40:48<SeP>2024-06-16 07:26:24<SeP>2024-06-17 19:12:00<SeP>2024-06-19 06:57:36<SeP>2024-06-20 18:43:12<SeP>2024-06-22 06:28:48<SeP>2024-06-23 18:14:24<SeP>2024-06-25 06:00:00<SeP>2024-06-26 17:45:36<SeP>2024-06-28 05:31:12<SeP>2024-06-29 17:16:48<SeP>2024-07-01 05:02:24<SeP>2024-07-02 16:48:00<SeP>2024-07-04 04:33:36<SeP>2024-07-05 16:19:12<SeP>2024-07-07 04:04:48<SeP>2024-07-08 15:50:24<SeP>2024-07-10 03:36:00<SeP>2024-07-11 15:21:36<SeP>2024-07-13 03:07:12<SeP>2024-07-14 14:52:48<SeP>2024-07-16 02:38:24<SeP>2024-07-17 14:24:00<SeP>2024-07-19 02:09:36<SeP>2024-07-20 13:55:12<SeP>2024-07-22 01:40:48<SeP>2024-07-23 13:26:24<SeP>2024-07-25 01:12:00<SeP>2024-07-26 12:57:36<SeP>2024-07-28 00:43:12<SeP>2024-07-29 12:28:48<SeP>2024-07-31 00:14:24<SeP>2024-08-01 12:00:00<SeP>2024-08-02 23:45:36<SeP>2024-08-04 11:31:12<SeP>2024-08-05 23:16:48<SeP>2024-08-07 11:02:24<SeP>2024-08-08 22:48:00<SeP>2024-08-10 10:33:36<SeP>2024-08-11 22:19:12<SeP>2024-08-13 10:04:48<SeP>2024-08-14 21:50:24<SeP>2024-08-16 09:36:00<SeP>2024-08-17 21:21:36<SeP>2024-08-19 09:07:12<SeP>2024-08-20 20:52:48<SeP>2024-08-22 08:38:24<SeP>2024-08-23 20:24:00<SeP>2024-08-25 08:09:36<SeP>2024-08-26 19:55:12<SeP>2024-08-28 07:40:48<SeP>2024-08-29 19:26:24<SeP>2024-08-31 07:12:00<SeP>2024-09-01 18:57:36<SeP>2024-09-03 06:43:12<SeP>2024-09-04 18:28:48<SeP>2024-09-06 06:14:24<SeP>2024-09-07 18:00:00<SeP>2024-09-09 05:45:36<SeP>2024-09-10 17:31:12<SeP>2024-09-12 05:16:48<SeP>2024-09-13 17:02:24<SeP>2024-09-15 04:48:00<SeP>2024-09-16 16:33:36<SeP>2024-09-18 04:19:12<SeP>2024-09-19 16:04:48<SeP>2024-09-21 03:50:24<SeP>2024-09-22 15:36:00<SeP>2024-09-24 03:21:36<SeP>2024-09-25 15:07:12<SeP>2024-09-27 02:52:48<SeP>2024-09-28 14:38:24<SeP>2024-09-30 02:24:00<SeP>2024-10-01 14:09:36<SeP>2024-10-03 01:55:12<SeP>2024-10-04 13:40:48<SeP>2024-10-06 01:26:24<SeP>2024-10-07 13:12:00<SeP>2024-10-09 00:57:36<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:28:48<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:00:00<SeP>2024-10-16 11:45:36<SeP>2024-10-17 23:31:12<SeP>2024-10-19 11:16:48<SeP>2024-10-20 23:02:24<SeP>2024-10-22 10:48:00<SeP>2024-10-23 22:33:36<SeP>2024-10-25 10:19:12<SeP>2024-10-26 22:04:48<SeP>2024-10-28 09:50:24<SeP>2024-10-29 21:36:00<SeP>2024-10-31 09:21:36<SeP>2024-11-01 21:07:12<SeP>2024-11-03 07:52:48<SeP>2024-11-04 19:38:24<SeP>2024-11-06 07:24:00<SeP>2024-11-07 19:09:36<SeP>2024-11-09 06:55:12<SeP>2024-11-10 18:40:48<SeP>2024-11-12 06:26:24<SeP>2024-11-13 18:12:00<SeP>2024-11-15 05:57:36<SeP>2024-11-16 17:43:12<SeP>2024-11-18 05:28:48<SeP>2024-11-19 17:14:24<SeP>2024-11-21 05:00:00<SeP>2024-11-22 16:45:36<SeP>2024-11-24 04:31:12<SeP>2024-11-25 16:16:48<SeP>2024-11-27 04:02:24<SeP>2024-11-28 15:48:00<SeP>2024-11-30 03:33:36<SeP>2024-12-01 15:19:12<SeP>2024-12-03 03:04:48<SeP>2024-12-04 14:50:24<SeP>2024-12-06 02:36:00<SeP>2024-12-07 14:21:36<SeP>2024-12-09 02:07:12<SeP>2024-12-10 13:52:48<SeP>2024-12-12 01:38:24<SeP>2024-12-13 13:24:00<SeP>2024-12-15 01:09:36<SeP>2024-12-16 12:55:12<SeP>2024-12-18 00:40:48<SeP>2024-12-19 12:26:24<SeP>2024-12-21 00:12:00<SeP>2024-12-22 11:57:36<SeP>2024-12-23 23:43:12<SeP>2024-12-25 11:28:48<SeP>2024-12-26 23:14:24<SeP>2024-12-28 11:00:00<SeP>2024-12-29 22:45:36<SeP>2024-12-31 10:31:12<SeP>2025-01-01 22:16:48<SeP>2025-01-03 10:02:24<SeP>2025-01-04 21:48:00<SeP>2025-01-06 09:33:36<SeP>2025-01-07 21:19:12<SeP>2025-01-09 09:04:48<SeP>2025-01-10 20:50:24<SeP>2025-01-12 08:36:00<SeP>2025-01-13 20:21:36<SeP>2025-01-15 08:07:12<SeP>2025-01-16 19:52:48<SeP>2025-01-18 07:38:24<SeP>2025-01-19 19:24:00<SeP>2025-01-21 07:09:36<SeP>2025-01-22 18:55:12<SeP>2025-01-24 06:40:48<SeP>2025-01-25 18:26:24<SeP>2025-01-27 06:12:00<SeP>2025-01-28 17:57:36<SeP>2025-01-30 05:43:12<SeP>2025-01-31 17:28:48<SeP>2025-02-02 05:14:24<SeP>2025-02-03 17:00:00<SeP>2025-02-05 04:45:36<SeP>2025-02-06 16:31:12<SeP>2025-02-08 04:16:48<SeP>2025-02-09 16:02:24<SeP>2025-02-11 03:48:00<SeP>2025-02-12 15:33:36<SeP>2025-02-14 03:19:12<SeP>2025-02-15 15:04:48<SeP>2025-02-17 02:50:24<SeP>2025-02-18 14:36:00<SeP>2025-02-20 02:21:36<SeP>2025-02-21 14:07:12<SeP>2025-02-23 01:52:48<SeP>2025-02-24 13:38:24<SeP>2025-02-26 01:24:00<SeP>2025-02-27 13:09:36<SeP>2025-03-01 00:55:12<SeP>2025-03-02 12:40:48<SeP>2025-03-04 00:26:24<SeP>2025-03-05 12:12:00<SeP>2025-03-06 23:57:36<SeP>2025-03-08 11:43:12<SeP>2025-03-10 00:28:48<SeP>2025-03-11 12:14:24";
  const itemLabel       = "Attacks";
  const itemData        = "221<SeP>550<SeP>1405<SeP>649<SeP>226<SeP>235<SeP>7048<SeP>637<SeP>9341<SeP>564<SeP>401<SeP>1261<SeP>1167<SeP>243<SeP>329<SeP>290<SeP>242<SeP>698<SeP>323<SeP>8579<SeP>7681<SeP>6896<SeP>9797<SeP>514<SeP>295<SeP>414<SeP>165<SeP>386<SeP>5935<SeP>79<SeP>385<SeP>279<SeP>412<SeP>2384<SeP>9743<SeP>8700<SeP>10767<SeP>9558<SeP>6030<SeP>6587<SeP>7871<SeP>8857<SeP>9091<SeP>8041<SeP>7234<SeP>9877<SeP>8963<SeP>8104<SeP>6908<SeP>5538<SeP>12348<SeP>6970<SeP>8214<SeP>7602<SeP>9924<SeP>12259<SeP>22812<SeP>9558<SeP>9299<SeP>10116<SeP>6621<SeP>9054<SeP>8127<SeP>9221<SeP>8575<SeP>6158<SeP>6767<SeP>7404<SeP>5787<SeP>3235<SeP>6903<SeP>6033<SeP>6633<SeP>6510<SeP>6673<SeP>4527<SeP>5984<SeP>7373<SeP>4765<SeP>7099<SeP>4830<SeP>5911<SeP>6613<SeP>5933<SeP>5799<SeP>5452<SeP>16285<SeP>16203<SeP>36184<SeP>7134<SeP>8792<SeP>6084<SeP>9127<SeP>10466<SeP>5137<SeP>6437<SeP>3859<SeP>5482<SeP>6486<SeP>5280<SeP>8723<SeP>6814<SeP>5355<SeP>4550<SeP>5986<SeP>9714<SeP>8059<SeP>7945<SeP>4527<SeP>6914<SeP>9897<SeP>8508<SeP>4490<SeP>3645<SeP>6923<SeP>9106<SeP>5905<SeP>7583<SeP>8446<SeP>2791<SeP>3178<SeP>1077<SeP>1670<SeP>2566<SeP>1781<SeP>876<SeP>1238<SeP>1097<SeP>1358<SeP>1129<SeP>1291<SeP>1175<SeP>993<SeP>1020<SeP>1022<SeP>1503<SeP>1273<SeP>1130<SeP>2097<SeP>1694<SeP>4572<SeP>12291<SeP>7827<SeP>8646<SeP>6950<SeP>12889<SeP>2785<SeP>11748<SeP>10033<SeP>9500<SeP>12503<SeP>8208<SeP>13217<SeP>12015<SeP>7661<SeP>11550<SeP>5841<SeP>5240<SeP>7169<SeP>25478<SeP>6261<SeP>8806<SeP>10563<SeP>17047<SeP>7293<SeP>6907<SeP>6689<SeP>6889<SeP>25185<SeP>9019<SeP>8367<SeP>12174<SeP>4320<SeP>6885<SeP>5223<SeP>17149<SeP>4893<SeP>13037<SeP>7924<SeP>6985<SeP>8579<SeP>7593<SeP>3004<SeP>6205<SeP>5567<SeP>7201<SeP>7457<SeP>5728<SeP>7587<SeP>20169<SeP>5939<SeP>7640<SeP>6248<SeP>8204<SeP>10787<SeP>7377<SeP>4843<SeP>3299<SeP>6327<SeP>3366<SeP>4346<SeP>3944<SeP>637<SeP>109<SeP>637<SeP>610<SeP>588<SeP>766<SeP>365<SeP>658<SeP>1341<SeP>1372<SeP>3033<SeP>22903<SeP>653<SeP>4710<SeP>3569<SeP>3416<SeP>6654<SeP>2675<SeP>4255<SeP>3827<SeP>2972<SeP>3080<SeP>3219<SeP>4687<SeP>1622<SeP>3706<SeP>1698<SeP>2590<SeP>1307<SeP>1919<SeP>1599<SeP>1382<SeP>1260<SeP>852<SeP>1716<SeP>26799<SeP>1771<SeP>4184<SeP>3807<SeP>2416<SeP>3472<SeP>2956<SeP>2152<SeP>3544<SeP>2814<SeP>3517<SeP>2128<SeP>3732<SeP>2745<SeP>5539<SeP>6272<SeP>3983<SeP>3771<SeP>2571<SeP>3441<SeP>4351<SeP>5357<SeP>8929<SeP>5362<SeP>2289<SeP>3544<SeP>2688<SeP>4835<SeP>3284<SeP>3448<SeP>2622<SeP>4446<SeP>4945<SeP>3828<SeP>5877<SeP>4401<SeP>6213<SeP>4547<SeP>5578<SeP>5494<SeP>21946<SeP>5228<SeP>11005<SeP>1800<SeP>3726<SeP>4835<SeP>3355<SeP>3888<SeP>5910<SeP>3620<SeP>4745<SeP>4465<SeP>3625<SeP>3329<SeP>1273<SeP>1966<SeP>3269<SeP>2878<SeP>2828<SeP>3331<SeP>4348<SeP>4173<SeP>3412<SeP>4322<SeP>3464<SeP>3238<SeP>4060<SeP>8510<SeP>6035<SeP>5771<SeP>5135<SeP>4855<SeP>3636<SeP>3582<SeP>4656<SeP>5967<SeP>5522<SeP>4767<SeP>4392<SeP>998<SeP>787<SeP>2232<SeP>1366<SeP>1093<SeP>1859<SeP>1559<SeP>1084<SeP>3389<SeP>4071<SeP>6557<SeP>32296<SeP>6908<SeP>5296<SeP>18946<SeP>10245<SeP>5315<SeP>6235<SeP>4579<SeP>24354<SeP>5108<SeP>5127<SeP>5175<SeP>5586<SeP>7197<SeP>28315<SeP>4678<SeP>3701<SeP>4417<SeP>5307<SeP>5929<SeP>3495<SeP>3301<SeP>3544<SeP>4899<SeP>5374<SeP>4109<SeP>17846<SeP>6268<SeP>7306<SeP>3479<SeP>2437<SeP>3515<SeP>4340<SeP>3992<SeP>4423<SeP>2726<SeP>3879<SeP>2519<SeP>4488<SeP>4794<SeP>8424<SeP>10877<SeP>8146<SeP>9085<SeP>8516<SeP>8068<SeP>4879<SeP>5348<SeP>3923<SeP>25576<SeP>3613<SeP>3642<SeP>3737<SeP>11016<SeP>5424<SeP>4951<SeP>4147<SeP>4572<SeP>3607<SeP>6194<SeP>10130<SeP>6882<SeP>3904<SeP>3264<SeP>2914<SeP>2212<SeP>2380<SeP>2085<SeP>2193<SeP>2473<SeP>1967<SeP>2892<SeP>3071";
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:45:36<SeP>2023-07-28 23:31:12<SeP>2023-07-30 11:16:48<SeP>2023-07-31 23:02:24<SeP>2023-08-02 10:48:00<SeP>2023-08-03 22:33:36<SeP>2023-08-05 10:19:12<SeP>2023-08-06 22:04:48<SeP>2023-08-08 09:50:24<SeP>2023-08-09 21:36:00<SeP>2023-08-11 09:21:36<SeP>2023-08-12 21:07:12<SeP>2023-08-14 08:52:48<SeP>2023-08-15 20:38:24<SeP>2023-08-17 08:24:00<SeP>2023-08-18 20:09:36<SeP>2023-08-20 07:55:12<SeP>2023-08-21 19:40:48<SeP>2023-08-23 07:26:24<SeP>2023-08-24 19:12:00<SeP>2023-08-26 06:57:36<SeP>2023-08-27 18:43:12<SeP>2023-08-29 06:28:48<SeP>2023-08-30 18:14:24<SeP>2023-09-01 06:00:00<SeP>2023-09-02 17:45:36<SeP>2023-09-04 05:31:12<SeP>2023-09-05 17:16:48<SeP>2023-09-07 05:02:24<SeP>2023-09-08 16:48:00<SeP>2023-09-10 04:33:36<SeP>2023-09-11 16:19:12<SeP>2023-09-13 04:04:48<SeP>2023-09-14 15:50:24<SeP>2023-09-16 03:36:00<SeP>2023-09-17 15:21:36<SeP>2023-09-19 03:07:12<SeP>2023-09-20 14:52:48<SeP>2023-09-22 02:38:24<SeP>2023-09-23 14:24:00<SeP>2023-09-25 02:09:36<SeP>2023-09-26 13:55:12<SeP>2023-09-28 01:40:48<SeP>2023-09-29 13:26:24<SeP>2023-10-01 01:12:00<SeP>2023-10-02 12:57:36<SeP>2023-10-04 00:43:12<SeP>2023-10-05 12:28:48<SeP>2023-10-07 00:14:24<SeP>2023-10-08 12:00:00<SeP>2023-10-09 23:45:36<SeP>2023-10-11 11:31:12<SeP>2023-10-12 23:16:48<SeP>2023-10-14 11:02:24<SeP>2023-10-15 22:48:00<SeP>2023-10-17 10:33:36<SeP>2023-10-18 22:19:12<SeP>2023-10-20 10:04:48<SeP>2023-10-21 21:50:24<SeP>2023-10-23 09:36:00<SeP>2023-10-24 21:21:36<SeP>2023-10-26 09:07:12<SeP>2023-10-27 20:52:48<SeP>2023-10-29 08:38:24<SeP>2023-10-30 20:24:00<SeP>2023-11-01 08:09:36<SeP>2023-11-02 19:55:12<SeP>2023-11-04 07:40:48<SeP>2023-11-05 18:26:24<SeP>2023-11-07 06:12:00<SeP>2023-11-08 17:57:36<SeP>2023-11-10 05:43:12<SeP>2023-11-11 17:28:48<SeP>2023-11-13 05:14:24<SeP>2023-11-14 17:00:00<SeP>2023-11-16 04:45:36<SeP>2023-11-17 16:31:12<SeP>2023-11-19 04:16:48<SeP>2023-11-20 16:02:24<SeP>2023-11-22 03:48:00<SeP>2023-11-23 15:33:36<SeP>2023-11-25 03:19:12<SeP>2023-11-26 15:04:48<SeP>2023-11-28 02:50:24<SeP>2023-11-29 14:36:00<SeP>2023-12-01 02:21:36<SeP>2023-12-02 14:07:12<SeP>2023-12-04 01:52:48<SeP>2023-12-05 13:38:24<SeP>2023-12-07 01:24:00<SeP>2023-12-08 13:09:36<SeP>2023-12-10 00:55:12<SeP>2023-12-11 12:40:48<SeP>2023-12-13 00:26:24<SeP>2023-12-14 12:12:00<SeP>2023-12-15 23:57:36<SeP>2023-12-17 11:43:12<SeP>2023-12-18 23:28:48<SeP>2023-12-20 11:14:24<SeP>2023-12-21 23:00:00<SeP>2023-12-23 10:45:36<SeP>2023-12-24 22:31:12<SeP>2023-12-26 10:16:48<SeP>2023-12-27 22:02:24<SeP>2023-12-29 09:48:00<SeP>2023-12-30 21:33:36<SeP>2024-01-01 09:19:12<SeP>2024-01-02 21:04:48<SeP>2024-01-04 08:50:24<SeP>2024-01-05 20:36:00<SeP>2024-01-07 08:21:36<SeP>2024-01-08 20:07:12<SeP>2024-01-10 07:52:48<SeP>2024-01-11 19:38:24<SeP>2024-01-13 07:24:00<SeP>2024-01-14 19:09:36<SeP>2024-01-16 06:55:12<SeP>2024-01-17 18:40:48<SeP>2024-01-19 06:26:24<SeP>2024-01-20 18:12:00<SeP>2024-01-22 05:57:36<SeP>2024-01-23 17:43:12<SeP>2024-01-25 05:28:48<SeP>2024-01-26 17:14:24<SeP>2024-01-28 05:00:00<SeP>2024-01-29 16:45:36<SeP>2024-01-31 04:31:12<SeP>2024-02-01 16:16:48<SeP>2024-02-03 04:02:24<SeP>2024-02-04 15:48:00<SeP>2024-02-06 03:33:36<SeP>2024-02-07 15:19:12<SeP>2024-02-09 03:04:48<SeP>2024-02-10 14:50:24<SeP>2024-02-12 02:36:00<SeP>2024-02-13 14:21:36<SeP>2024-02-15 02:07:12<SeP>2024-02-16 13:52:48<SeP>2024-02-18 01:38:24<SeP>2024-02-19 13:24:00<SeP>2024-02-21 01:09:36<SeP>2024-02-22 12:55:12<SeP>2024-02-24 00:40:48<SeP>2024-02-25 12:26:24<SeP>2024-02-27 00:12:00<SeP>2024-02-28 11:57:36<SeP>2024-02-29 23:43:12<SeP>2024-03-02 11:28:48<SeP>2024-03-03 23:14:24<SeP>2024-03-05 11:00:00<SeP>2024-03-06 22:45:36<SeP>2024-03-08 10:31:12<SeP>2024-03-09 22:16:48<SeP>2024-03-11 11:02:24<SeP>2024-03-12 22:48:00<SeP>2024-03-14 10:33:36<SeP>2024-03-15 22:19:12<SeP>2024-03-17 10:04:48<SeP>2024-03-18 21:50:24<SeP>2024-03-20 09:36:00<SeP>2024-03-21 21:21:36<SeP>2024-03-23 09:07:12<SeP>2024-03-24 20:52:48<SeP>2024-03-26 08:38:24<SeP>2024-03-27 20:24:00<SeP>2024-03-29 08:09:36<SeP>2024-03-30 19:55:12<SeP>2024-04-01 07:40:48<SeP>2024-04-02 19:26:24<SeP>2024-04-04 07:12:00<SeP>2024-04-05 18:57:36<SeP>2024-04-07 06:43:12<SeP>2024-04-08 18:28:48<SeP>2024-04-10 06:14:24<SeP>2024-04-11 18:00:00<SeP>2024-04-13 05:45:36<SeP>2024-04-14 17:31:12<SeP>2024-04-16 05:16:48<SeP>2024-04-17 17:02:24<SeP>2024-04-19 04:48:00<SeP>2024-04-20 16:33:36<SeP>2024-04-22 04:19:12<SeP>2024-04-23 16:04:48<SeP>2024-04-25 03:50:24<SeP>2024-04-26 15:36:00<SeP>2024-04-28 03:21:36<SeP>2024-04-29 15:07:12<SeP>2024-05-01 02:52:48<SeP>2024-05-02 14:38:24<SeP>2024-05-04 02:24:00<SeP>2024-05-05 14:09:36<SeP>2024-05-07 01:55:12<SeP>2024-05-08 13:40:48<SeP>2024-05-10 01:26:24<SeP>2024-05-11 13:12:00<SeP>2024-05-13 00:57:36<SeP>2024-05-14 12:43:12<SeP>2024-05-16 00:28:48<SeP>2024-05-17 12:14:24<SeP>2024-05-19 00:00:00<SeP>2024-05-20 11:45:36<SeP>2024-05-21 23:31:12<SeP>2024-05-23 11:16:48<SeP>2024-05-24 23:02:24<SeP>2024-05-26 10:48:00<SeP>2024-05-27 22:33:36<SeP>2024-05-29 10:19:12<SeP>2024-05-30 22:04:48<SeP>2024-06-01 09:50:24<SeP>2024-06-02 21:36:00<SeP>2024-06-04 09:21:36<SeP>2024-06-05 21:07:12<SeP>2024-06-07 08:52:48<SeP>2024-06-08 20:38:24<SeP>2024-06-10 08:24:00<SeP>2024-06-11 20:09:36<SeP>2024-06-13 07:55:12<SeP>2024-06-14 19:40:48<SeP>2024-06-16 07:26:24<SeP>2024-06-17 19:12:00<SeP>2024-06-19 06:57:36<SeP>2024-06-20 18:43:12<SeP>2024-06-22 06:28:48<SeP>2024-06-23 18:14:24<SeP>2024-06-25 06:00:00<SeP>2024-06-26 17:45:36<SeP>2024-06-28 05:31:12<SeP>2024-06-29 17:16:48<SeP>2024-07-01 05:02:24<SeP>2024-07-02 16:48:00<SeP>2024-07-04 04:33:36<SeP>2024-07-05 16:19:12<SeP>2024-07-07 04:04:48<SeP>2024-07-08 15:50:24<SeP>2024-07-10 03:36:00<SeP>2024-07-11 15:21:36<SeP>2024-07-13 03:07:12<SeP>2024-07-14 14:52:48<SeP>2024-07-16 02:38:24<SeP>2024-07-17 14:24:00<SeP>2024-07-19 02:09:36<SeP>2024-07-20 13:55:12<SeP>2024-07-22 01:40:48<SeP>2024-07-23 13:26:24<SeP>2024-07-25 01:12:00<SeP>2024-07-26 12:57:36<SeP>2024-07-28 00:43:12<SeP>2024-07-29 12:28:48<SeP>2024-07-31 00:14:24<SeP>2024-08-01 12:00:00<SeP>2024-08-02 23:45:36<SeP>2024-08-04 11:31:12<SeP>2024-08-05 23:16:48<SeP>2024-08-07 11:02:24<SeP>2024-08-08 22:48:00<SeP>2024-08-10 10:33:36<SeP>2024-08-11 22:19:12<SeP>2024-08-13 10:04:48<SeP>2024-08-14 21:50:24<SeP>2024-08-16 09:36:00<SeP>2024-08-17 21:21:36<SeP>2024-08-19 09:07:12<SeP>2024-08-20 20:52:48<SeP>2024-08-22 08:38:24<SeP>2024-08-23 20:24:00<SeP>2024-08-25 08:09:36<SeP>2024-08-26 19:55:12<SeP>2024-08-28 07:40:48<SeP>2024-08-29 19:26:24<SeP>2024-08-31 07:12:00<SeP>2024-09-01 18:57:36<SeP>2024-09-03 06:43:12<SeP>2024-09-04 18:28:48<SeP>2024-09-06 06:14:24<SeP>2024-09-07 18:00:00<SeP>2024-09-09 05:45:36<SeP>2024-09-10 17:31:12<SeP>2024-09-12 05:16:48<SeP>2024-09-13 17:02:24<SeP>2024-09-15 04:48:00<SeP>2024-09-16 16:33:36<SeP>2024-09-18 04:19:12<SeP>2024-09-19 16:04:48<SeP>2024-09-21 03:50:24<SeP>2024-09-22 15:36:00<SeP>2024-09-24 03:21:36<SeP>2024-09-25 15:07:12<SeP>2024-09-27 02:52:48<SeP>2024-09-28 14:38:24<SeP>2024-09-30 02:24:00<SeP>2024-10-01 14:09:36<SeP>2024-10-03 01:55:12<SeP>2024-10-04 13:40:48<SeP>2024-10-06 01:26:24<SeP>2024-10-07 13:12:00<SeP>2024-10-09 00:57:36<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:28:48<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:00:00<SeP>2024-10-16 11:45:36<SeP>2024-10-17 23:31:12<SeP>2024-10-19 11:16:48<SeP>2024-10-20 23:02:24<SeP>2024-10-22 10:48:00<SeP>2024-10-23 22:33:36<SeP>2024-10-25 10:19:12<SeP>2024-10-26 22:04:48<SeP>2024-10-28 09:50:24<SeP>2024-10-29 21:36:00<SeP>2024-10-31 09:21:36<SeP>2024-11-01 21:07:12<SeP>2024-11-03 07:52:48<SeP>2024-11-04 19:38:24<SeP>2024-11-06 07:24:00<SeP>2024-11-07 19:09:36<SeP>2024-11-09 06:55:12<SeP>2024-11-10 18:40:48<SeP>2024-11-12 06:26:24<SeP>2024-11-13 18:12:00<SeP>2024-11-15 05:57:36<SeP>2024-11-16 17:43:12<SeP>2024-11-18 05:28:48<SeP>2024-11-19 17:14:24<SeP>2024-11-21 05:00:00<SeP>2024-11-22 16:45:36<SeP>2024-11-24 04:31:12<SeP>2024-11-25 16:16:48<SeP>2024-11-27 04:02:24<SeP>2024-11-28 15:48:00<SeP>2024-11-30 03:33:36<SeP>2024-12-01 15:19:12<SeP>2024-12-03 03:04:48<SeP>2024-12-04 14:50:24<SeP>2024-12-06 02:36:00<SeP>2024-12-07 14:21:36<SeP>2024-12-09 02:07:12<SeP>2024-12-10 13:52:48<SeP>2024-12-12 01:38:24<SeP>2024-12-13 13:24:00<SeP>2024-12-15 01:09:36<SeP>2024-12-16 12:55:12<SeP>2024-12-18 00:40:48<SeP>2024-12-19 12:26:24<SeP>2024-12-21 00:12:00<SeP>2024-12-22 11:57:36<SeP>2024-12-23 23:43:12<SeP>2024-12-25 11:28:48<SeP>2024-12-26 23:14:24<SeP>2024-12-28 11:00:00<SeP>2024-12-29 22:45:36<SeP>2024-12-31 10:31:12<SeP>2025-01-01 22:16:48<SeP>2025-01-03 10:02:24<SeP>2025-01-04 21:48:00<SeP>2025-01-06 09:33:36<SeP>2025-01-07 21:19:12<SeP>2025-01-09 09:04:48<SeP>2025-01-10 20:50:24<SeP>2025-01-12 08:36:00<SeP>2025-01-13 20:21:36<SeP>2025-01-15 08:07:12<SeP>2025-01-16 19:52:48<SeP>2025-01-18 07:38:24<SeP>2025-01-19 19:24:00<SeP>2025-01-21 07:09:36<SeP>2025-01-22 18:55:12<SeP>2025-01-24 06:40:48<SeP>2025-01-25 18:26:24<SeP>2025-01-27 06:12:00<SeP>2025-01-28 17:57:36<SeP>2025-01-30 05:43:12<SeP>2025-01-31 17:28:48<SeP>2025-02-02 05:14:24<SeP>2025-02-03 17:00:00<SeP>2025-02-05 04:45:36<SeP>2025-02-06 16:31:12<SeP>2025-02-08 04:16:48<SeP>2025-02-09 16:02:24<SeP>2025-02-11 03:48:00<SeP>2025-02-12 15:33:36<SeP>2025-02-14 03:19:12<SeP>2025-02-15 15:04:48<SeP>2025-02-17 02:50:24<SeP>2025-02-18 14:36:00<SeP>2025-02-20 02:21:36<SeP>2025-02-21 14:07:12<SeP>2025-02-23 01:52:48<SeP>2025-02-24 13:38:24<SeP>2025-02-26 01:24:00<SeP>2025-02-27 13:09:36<SeP>2025-03-01 00:55:12<SeP>2025-03-02 12:40:48<SeP>2025-03-04 00:26:24<SeP>2025-03-05 12:12:00<SeP>2025-03-06 23:57:36<SeP>2025-03-08 11:43:12<SeP>2025-03-10 00:28:48<SeP>2025-03-11 12:14:24";
  const item1Label       = "Escaneos";
  const item1Data        = "787<SeP>1521<SeP>1390<SeP>1496<SeP>1257<SeP>1754<SeP>950<SeP>969<SeP>1162<SeP>3393<SeP>3416<SeP>1026<SeP>3326<SeP>879<SeP>789<SeP>882<SeP>1440<SeP>3239<SeP>1465<SeP>1453<SeP>1082<SeP>924<SeP>1125<SeP>1210<SeP>964<SeP>720<SeP>937<SeP>3651<SeP>1000<SeP>839<SeP>1397<SeP>1270<SeP>836<SeP>2809<SeP>1658<SeP>2744<SeP>1855<SeP>1857<SeP>1430<SeP>1299<SeP>1801<SeP>1822<SeP>2277<SeP>1480<SeP>1692<SeP>1640<SeP>1814<SeP>1771<SeP>1792<SeP>1875<SeP>1791<SeP>1495<SeP>3271<SeP>1633<SeP>1542<SeP>2154<SeP>1912<SeP>2222<SeP>1899<SeP>3350<SeP>1343<SeP>1605<SeP>1530<SeP>1428<SeP>2033<SeP>1530<SeP>1226<SeP>1471<SeP>1360<SeP>2333<SeP>1234<SeP>1124<SeP>1270<SeP>2304<SeP>7333<SeP>1158<SeP>1353<SeP>1409<SeP>2344<SeP>1293<SeP>1160<SeP>6702<SeP>1505<SeP>1616<SeP>991<SeP>3114<SeP>1515<SeP>1018<SeP>1121<SeP>1131<SeP>1031<SeP>3098<SeP>952<SeP>1089<SeP>2773<SeP>4680<SeP>3869<SeP>992<SeP>895<SeP>976<SeP>962<SeP>1038<SeP>987<SeP>1069<SeP>3646<SeP>2397<SeP>1423<SeP>1656<SeP>663<SeP>973<SeP>1605<SeP>1116<SeP>1075<SeP>1001<SeP>2334<SeP>1324<SeP>1050<SeP>969<SeP>1117<SeP>807<SeP>872<SeP>855<SeP>835<SeP>897<SeP>1116<SeP>896<SeP>740<SeP>913<SeP>862<SeP>834<SeP>735<SeP>870<SeP>958<SeP>857<SeP>878<SeP>818<SeP>802<SeP>829<SeP>1050<SeP>887<SeP>822<SeP>921<SeP>953<SeP>911<SeP>1094<SeP>974<SeP>549<SeP>926<SeP>865<SeP>1227<SeP>909<SeP>988<SeP>1249<SeP>1304<SeP>884<SeP>969<SeP>919<SeP>931<SeP>812<SeP>1095<SeP>958<SeP>997<SeP>865<SeP>1057<SeP>982<SeP>1090<SeP>1026<SeP>1054<SeP>1116<SeP>907<SeP>916<SeP>2258<SeP>1225<SeP>1129<SeP>1114<SeP>1025<SeP>1136<SeP>993<SeP>855<SeP>690<SeP>933<SeP>1193<SeP>915<SeP>945<SeP>1029<SeP>1381<SeP>1087<SeP>1194<SeP>1365<SeP>1252<SeP>1190<SeP>1538<SeP>1208<SeP>1541<SeP>2123<SeP>1365<SeP>829<SeP>911<SeP>1113<SeP>1091<SeP>681<SeP>826<SeP>879<SeP>1000<SeP>833<SeP>5525<SeP>3307<SeP>1964<SeP>1398<SeP>1014<SeP>841<SeP>1019<SeP>989<SeP>981<SeP>1119<SeP>1037<SeP>1085<SeP>1682<SeP>1857<SeP>1010<SeP>1337<SeP>1221<SeP>1176<SeP>1193<SeP>995<SeP>1059<SeP>1095<SeP>1137<SeP>1030<SeP>1138<SeP>1135<SeP>1018<SeP>979<SeP>1299<SeP>1125<SeP>1151<SeP>1260<SeP>1398<SeP>1246<SeP>1501<SeP>1262<SeP>1094<SeP>1226<SeP>1186<SeP>1965<SeP>1298<SeP>1993<SeP>1649<SeP>1607<SeP>2022<SeP>1457<SeP>1204<SeP>1204<SeP>1397<SeP>1152<SeP>1548<SeP>1249<SeP>1303<SeP>1689<SeP>1722<SeP>1341<SeP>1541<SeP>1513<SeP>1243<SeP>1026<SeP>1179<SeP>1311<SeP>1184<SeP>1270<SeP>1433<SeP>1099<SeP>1632<SeP>1710<SeP>1323<SeP>1712<SeP>1381<SeP>1345<SeP>1129<SeP>884<SeP>971<SeP>961<SeP>906<SeP>1108<SeP>1683<SeP>1191<SeP>1215<SeP>1078<SeP>889<SeP>1052<SeP>908<SeP>1409<SeP>877<SeP>910<SeP>1165<SeP>1396<SeP>1649<SeP>1278<SeP>1093<SeP>1047<SeP>1179<SeP>1762<SeP>989<SeP>1215<SeP>1059<SeP>1581<SeP>1036<SeP>1004<SeP>1166<SeP>1176<SeP>836<SeP>917<SeP>1145<SeP>1467<SeP>1563<SeP>1494<SeP>1436<SeP>1225<SeP>920<SeP>1154<SeP>1303<SeP>1149<SeP>1192<SeP>1003<SeP>1022<SeP>1275<SeP>1498<SeP>1391<SeP>1579<SeP>1516<SeP>1308<SeP>1530<SeP>1437<SeP>1543<SeP>1377<SeP>1481<SeP>1259<SeP>1847<SeP>1270<SeP>1512<SeP>1647<SeP>1321<SeP>1486<SeP>1274<SeP>1305<SeP>1352<SeP>1503<SeP>1710<SeP>1231<SeP>1346<SeP>1300<SeP>1364<SeP>1349<SeP>1190<SeP>1427<SeP>1962<SeP>1618<SeP>1261<SeP>717<SeP>1464<SeP>1849<SeP>1302<SeP>1345<SeP>1210<SeP>1264<SeP>1320<SeP>1546<SeP>1326<SeP>1563<SeP>1653<SeP>1566<SeP>1388<SeP>1729<SeP>1410<SeP>1389<SeP>1739<SeP>1528<SeP>1402<SeP>1120<SeP>1687<SeP>1776<SeP>1871<SeP>1830<SeP>1918<SeP>1596<SeP>1633<SeP>1524<SeP>1580<SeP>1526<SeP>1732<SeP>1770<SeP>1810<SeP>1442<SeP>1513<SeP>1510<SeP>1464<SeP>1610<SeP>2357<SeP>1110<SeP>2203<SeP>1668";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "221<SeP>550<SeP>1405<SeP>649<SeP>226<SeP>235<SeP>7048<SeP>637<SeP>9341<SeP>564<SeP>401<SeP>1261<SeP>1167<SeP>243<SeP>329<SeP>290<SeP>242<SeP>698<SeP>323<SeP>8579<SeP>7681<SeP>6896<SeP>9797<SeP>514<SeP>295<SeP>414<SeP>165<SeP>386<SeP>5935<SeP>79<SeP>385<SeP>279<SeP>412<SeP>2384<SeP>9743<SeP>8700<SeP>10767<SeP>9558<SeP>6030<SeP>6587<SeP>7871<SeP>8857<SeP>9091<SeP>8041<SeP>7234<SeP>9877<SeP>8963<SeP>8104<SeP>6908<SeP>5538<SeP>12348<SeP>6970<SeP>8214<SeP>7602<SeP>9924<SeP>12259<SeP>22812<SeP>9558<SeP>9299<SeP>10116<SeP>6621<SeP>9054<SeP>8127<SeP>9221<SeP>8575<SeP>6158<SeP>6767<SeP>7404<SeP>5787<SeP>3235<SeP>6903<SeP>6033<SeP>6633<SeP>6510<SeP>6673<SeP>4527<SeP>5984<SeP>7373<SeP>4765<SeP>7099<SeP>4830<SeP>5911<SeP>6613<SeP>5933<SeP>5799<SeP>5452<SeP>16285<SeP>16203<SeP>36184<SeP>7134<SeP>8792<SeP>6084<SeP>9127<SeP>10466<SeP>5137<SeP>6437<SeP>3859<SeP>5482<SeP>6486<SeP>5280<SeP>8723<SeP>6814<SeP>5355<SeP>4550<SeP>5986<SeP>9714<SeP>8059<SeP>7945<SeP>4527<SeP>6914<SeP>9897<SeP>8508<SeP>4490<SeP>3645<SeP>6923<SeP>9106<SeP>5905<SeP>7583<SeP>8446<SeP>2791<SeP>3178<SeP>1077<SeP>1670<SeP>2566<SeP>1781<SeP>876<SeP>1238<SeP>1097<SeP>1358<SeP>1129<SeP>1291<SeP>1175<SeP>993<SeP>1020<SeP>1022<SeP>1503<SeP>1273<SeP>1130<SeP>2097<SeP>1694<SeP>4572<SeP>12291<SeP>7827<SeP>8646<SeP>6950<SeP>12889<SeP>2785<SeP>11748<SeP>10033<SeP>9500<SeP>12503<SeP>8208<SeP>13217<SeP>12015<SeP>7661<SeP>11550<SeP>5841<SeP>5240<SeP>7169<SeP>25478<SeP>6261<SeP>8806<SeP>10563<SeP>17047<SeP>7293<SeP>6907<SeP>6689<SeP>6889<SeP>25185<SeP>9019<SeP>8367<SeP>12174<SeP>4320<SeP>6885<SeP>5223<SeP>17149<SeP>4893<SeP>13037<SeP>7924<SeP>6985<SeP>8579<SeP>7593<SeP>3004<SeP>6205<SeP>5567<SeP>7201<SeP>7457<SeP>5728<SeP>7587<SeP>20169<SeP>5939<SeP>7640<SeP>6248<SeP>8204<SeP>10787<SeP>7377<SeP>4843<SeP>3299<SeP>6327<SeP>3366<SeP>4346<SeP>3944<SeP>637<SeP>109<SeP>637<SeP>610<SeP>588<SeP>766<SeP>365<SeP>658<SeP>1341<SeP>1372<SeP>3033<SeP>22903<SeP>653<SeP>4710<SeP>3569<SeP>3416<SeP>6654<SeP>2675<SeP>4255<SeP>3827<SeP>2972<SeP>3080<SeP>3219<SeP>4687<SeP>1622<SeP>3706<SeP>1698<SeP>2590<SeP>1307<SeP>1919<SeP>1599<SeP>1382<SeP>1260<SeP>852<SeP>1716<SeP>26799<SeP>1771<SeP>4184<SeP>3807<SeP>2416<SeP>3472<SeP>2956<SeP>2152<SeP>3544<SeP>2814<SeP>3517<SeP>2128<SeP>3732<SeP>2745<SeP>5539<SeP>6272<SeP>3983<SeP>3771<SeP>2571<SeP>3441<SeP>4351<SeP>5357<SeP>8929<SeP>5362<SeP>2289<SeP>3544<SeP>2688<SeP>4835<SeP>3284<SeP>3448<SeP>2622<SeP>4446<SeP>4945<SeP>3828<SeP>5877<SeP>4401<SeP>6213<SeP>4547<SeP>5578<SeP>5494<SeP>21946<SeP>5228<SeP>11005<SeP>1800<SeP>3726<SeP>4835<SeP>3355<SeP>3888<SeP>5910<SeP>3620<SeP>4745<SeP>4465<SeP>3625<SeP>3329<SeP>1273<SeP>1966<SeP>3269<SeP>2878<SeP>2828<SeP>3331<SeP>4348<SeP>4173<SeP>3412<SeP>4322<SeP>3464<SeP>3238<SeP>4060<SeP>8510<SeP>6035<SeP>5771<SeP>5135<SeP>4855<SeP>3636<SeP>3582<SeP>4656<SeP>5967<SeP>5522<SeP>4767<SeP>4392<SeP>998<SeP>787<SeP>2232<SeP>1366<SeP>1093<SeP>1859<SeP>1559<SeP>1084<SeP>3389<SeP>4071<SeP>6557<SeP>32296<SeP>6908<SeP>5296<SeP>18946<SeP>10245<SeP>5315<SeP>6235<SeP>4579<SeP>24354<SeP>5108<SeP>5127<SeP>5175<SeP>5586<SeP>7197<SeP>28315<SeP>4678<SeP>3701<SeP>4417<SeP>5307<SeP>5929<SeP>3495<SeP>3301<SeP>3544<SeP>4899<SeP>5374<SeP>4109<SeP>17846<SeP>6268<SeP>7306<SeP>3479<SeP>2437<SeP>3515<SeP>4340<SeP>3992<SeP>4423<SeP>2726<SeP>3879<SeP>2519<SeP>4488<SeP>4794<SeP>8424<SeP>10877<SeP>8146<SeP>9085<SeP>8516<SeP>8068<SeP>4879<SeP>5348<SeP>3923<SeP>25576<SeP>3613<SeP>3642<SeP>3737<SeP>11016<SeP>5424<SeP>4951<SeP>4147<SeP>4572<SeP>3607<SeP>6194<SeP>10130<SeP>6882<SeP>3904<SeP>3264<SeP>2914<SeP>2212<SeP>2380<SeP>2085<SeP>2193<SeP>2473<SeP>1967<SeP>2892<SeP>3071";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:45:36<SeP>2023-07-28 23:31:12<SeP>2023-07-30 11:16:48<SeP>2023-07-31 23:02:24<SeP>2023-08-02 10:48:00<SeP>2023-08-03 22:33:36<SeP>2023-08-05 10:19:12<SeP>2023-08-06 22:04:48<SeP>2023-08-08 09:50:24<SeP>2023-08-09 21:36:00<SeP>2023-08-11 09:21:36<SeP>2023-08-12 21:07:12<SeP>2023-08-14 08:52:48<SeP>2023-08-15 20:38:24<SeP>2023-08-17 08:24:00<SeP>2023-08-18 20:09:36<SeP>2023-08-20 07:55:12<SeP>2023-08-21 19:40:48<SeP>2023-08-23 07:26:24<SeP>2023-08-24 19:12:00<SeP>2023-08-26 06:57:36<SeP>2023-08-27 18:43:12<SeP>2023-08-29 06:28:48<SeP>2023-08-30 18:14:24<SeP>2023-09-01 06:00:00<SeP>2023-09-02 17:45:36<SeP>2023-09-04 05:31:12<SeP>2023-09-05 17:16:48<SeP>2023-09-07 05:02:24<SeP>2023-09-08 16:48:00<SeP>2023-09-10 04:33:36<SeP>2023-09-11 16:19:12<SeP>2023-09-13 04:04:48<SeP>2023-09-14 15:50:24<SeP>2023-09-16 03:36:00<SeP>2023-09-17 15:21:36<SeP>2023-09-19 03:07:12<SeP>2023-09-20 14:52:48<SeP>2023-09-22 02:38:24<SeP>2023-09-23 14:24:00<SeP>2023-09-25 02:09:36<SeP>2023-09-26 13:55:12<SeP>2023-09-28 01:40:48<SeP>2023-09-29 13:26:24<SeP>2023-10-01 01:12:00<SeP>2023-10-02 12:57:36<SeP>2023-10-04 00:43:12<SeP>2023-10-05 12:28:48<SeP>2023-10-07 00:14:24<SeP>2023-10-08 12:00:00<SeP>2023-10-09 23:45:36<SeP>2023-10-11 11:31:12<SeP>2023-10-12 23:16:48<SeP>2023-10-14 11:02:24<SeP>2023-10-15 22:48:00<SeP>2023-10-17 10:33:36<SeP>2023-10-18 22:19:12<SeP>2023-10-20 10:04:48<SeP>2023-10-21 21:50:24<SeP>2023-10-23 09:36:00<SeP>2023-10-24 21:21:36<SeP>2023-10-26 09:07:12<SeP>2023-10-27 20:52:48<SeP>2023-10-29 08:38:24<SeP>2023-10-30 20:24:00<SeP>2023-11-01 08:09:36<SeP>2023-11-02 19:55:12<SeP>2023-11-04 07:40:48<SeP>2023-11-05 18:26:24<SeP>2023-11-07 06:12:00<SeP>2023-11-08 17:57:36<SeP>2023-11-10 05:43:12<SeP>2023-11-11 17:28:48<SeP>2023-11-13 05:14:24<SeP>2023-11-14 17:00:00<SeP>2023-11-16 04:45:36<SeP>2023-11-17 16:31:12<SeP>2023-11-19 04:16:48<SeP>2023-11-20 16:02:24<SeP>2023-11-22 03:48:00<SeP>2023-11-23 15:33:36<SeP>2023-11-25 03:19:12<SeP>2023-11-26 15:04:48<SeP>2023-11-28 02:50:24<SeP>2023-11-29 14:36:00<SeP>2023-12-01 02:21:36<SeP>2023-12-02 14:07:12<SeP>2023-12-04 01:52:48<SeP>2023-12-05 13:38:24<SeP>2023-12-07 01:24:00<SeP>2023-12-08 13:09:36<SeP>2023-12-10 00:55:12<SeP>2023-12-11 12:40:48<SeP>2023-12-13 00:26:24<SeP>2023-12-14 12:12:00<SeP>2023-12-15 23:57:36<SeP>2023-12-17 11:43:12<SeP>2023-12-18 23:28:48<SeP>2023-12-20 11:14:24<SeP>2023-12-21 23:00:00<SeP>2023-12-23 10:45:36<SeP>2023-12-24 22:31:12<SeP>2023-12-26 10:16:48<SeP>2023-12-27 22:02:24<SeP>2023-12-29 09:48:00<SeP>2023-12-30 21:33:36<SeP>2024-01-01 09:19:12<SeP>2024-01-02 21:04:48<SeP>2024-01-04 08:50:24<SeP>2024-01-05 20:36:00<SeP>2024-01-07 08:21:36<SeP>2024-01-08 20:07:12<SeP>2024-01-10 07:52:48<SeP>2024-01-11 19:38:24<SeP>2024-01-13 07:24:00<SeP>2024-01-14 19:09:36<SeP>2024-01-16 06:55:12<SeP>2024-01-17 18:40:48<SeP>2024-01-19 06:26:24<SeP>2024-01-20 18:12:00<SeP>2024-01-22 05:57:36<SeP>2024-01-23 17:43:12<SeP>2024-01-25 05:28:48<SeP>2024-01-26 17:14:24<SeP>2024-01-28 05:00:00<SeP>2024-01-29 16:45:36<SeP>2024-01-31 04:31:12<SeP>2024-02-01 16:16:48<SeP>2024-02-03 04:02:24<SeP>2024-02-04 15:48:00<SeP>2024-02-06 03:33:36<SeP>2024-02-07 15:19:12<SeP>2024-02-09 03:04:48<SeP>2024-02-10 14:50:24<SeP>2024-02-12 02:36:00<SeP>2024-02-13 14:21:36<SeP>2024-02-15 02:07:12<SeP>2024-02-16 13:52:48<SeP>2024-02-18 01:38:24<SeP>2024-02-19 13:24:00<SeP>2024-02-21 01:09:36<SeP>2024-02-22 12:55:12<SeP>2024-02-24 00:40:48<SeP>2024-02-25 12:26:24<SeP>2024-02-27 00:12:00<SeP>2024-02-28 11:57:36<SeP>2024-02-29 23:43:12<SeP>2024-03-02 11:28:48<SeP>2024-03-03 23:14:24<SeP>2024-03-05 11:00:00<SeP>2024-03-06 22:45:36<SeP>2024-03-08 10:31:12<SeP>2024-03-09 22:16:48<SeP>2024-03-11 11:02:24<SeP>2024-03-12 22:48:00<SeP>2024-03-14 10:33:36<SeP>2024-03-15 22:19:12<SeP>2024-03-17 10:04:48<SeP>2024-03-18 21:50:24<SeP>2024-03-20 09:36:00<SeP>2024-03-21 21:21:36<SeP>2024-03-23 09:07:12<SeP>2024-03-24 20:52:48<SeP>2024-03-26 08:38:24<SeP>2024-03-27 20:24:00<SeP>2024-03-29 08:09:36<SeP>2024-03-30 19:55:12<SeP>2024-04-01 07:40:48<SeP>2024-04-02 19:26:24<SeP>2024-04-04 07:12:00<SeP>2024-04-05 18:57:36<SeP>2024-04-07 06:43:12<SeP>2024-04-08 18:28:48<SeP>2024-04-10 06:14:24<SeP>2024-04-11 18:00:00<SeP>2024-04-13 05:45:36<SeP>2024-04-14 17:31:12<SeP>2024-04-16 05:16:48<SeP>2024-04-17 17:02:24<SeP>2024-04-19 04:48:00<SeP>2024-04-20 16:33:36<SeP>2024-04-22 04:19:12<SeP>2024-04-23 16:04:48<SeP>2024-04-25 03:50:24<SeP>2024-04-26 15:36:00<SeP>2024-04-28 03:21:36<SeP>2024-04-29 15:07:12<SeP>2024-05-01 02:52:48<SeP>2024-05-02 14:38:24<SeP>2024-05-04 02:24:00<SeP>2024-05-05 14:09:36<SeP>2024-05-07 01:55:12<SeP>2024-05-08 13:40:48<SeP>2024-05-10 01:26:24<SeP>2024-05-11 13:12:00<SeP>2024-05-13 00:57:36<SeP>2024-05-14 12:43:12<SeP>2024-05-16 00:28:48<SeP>2024-05-17 12:14:24<SeP>2024-05-19 00:00:00<SeP>2024-05-20 11:45:36<SeP>2024-05-21 23:31:12<SeP>2024-05-23 11:16:48<SeP>2024-05-24 23:02:24<SeP>2024-05-26 10:48:00<SeP>2024-05-27 22:33:36<SeP>2024-05-29 10:19:12<SeP>2024-05-30 22:04:48<SeP>2024-06-01 09:50:24<SeP>2024-06-02 21:36:00<SeP>2024-06-04 09:21:36<SeP>2024-06-05 21:07:12<SeP>2024-06-07 08:52:48<SeP>2024-06-08 20:38:24<SeP>2024-06-10 08:24:00<SeP>2024-06-11 20:09:36<SeP>2024-06-13 07:55:12<SeP>2024-06-14 19:40:48<SeP>2024-06-16 07:26:24<SeP>2024-06-17 19:12:00<SeP>2024-06-19 06:57:36<SeP>2024-06-20 18:43:12<SeP>2024-06-22 06:28:48<SeP>2024-06-23 18:14:24<SeP>2024-06-25 06:00:00<SeP>2024-06-26 17:45:36<SeP>2024-06-28 05:31:12<SeP>2024-06-29 17:16:48<SeP>2024-07-01 05:02:24<SeP>2024-07-02 16:48:00<SeP>2024-07-04 04:33:36<SeP>2024-07-05 16:19:12<SeP>2024-07-07 04:04:48<SeP>2024-07-08 15:50:24<SeP>2024-07-10 03:36:00<SeP>2024-07-11 15:21:36<SeP>2024-07-13 03:07:12<SeP>2024-07-14 14:52:48<SeP>2024-07-16 02:38:24<SeP>2024-07-17 14:24:00<SeP>2024-07-19 02:09:36<SeP>2024-07-20 13:55:12<SeP>2024-07-22 01:40:48<SeP>2024-07-23 13:26:24<SeP>2024-07-25 01:12:00<SeP>2024-07-26 12:57:36<SeP>2024-07-28 00:43:12<SeP>2024-07-29 12:28:48<SeP>2024-07-31 00:14:24<SeP>2024-08-01 12:00:00<SeP>2024-08-02 23:45:36<SeP>2024-08-04 11:31:12<SeP>2024-08-05 23:16:48<SeP>2024-08-07 11:02:24<SeP>2024-08-08 22:48:00<SeP>2024-08-10 10:33:36<SeP>2024-08-11 22:19:12<SeP>2024-08-13 10:04:48<SeP>2024-08-14 21:50:24<SeP>2024-08-16 09:36:00<SeP>2024-08-17 21:21:36<SeP>2024-08-19 09:07:12<SeP>2024-08-20 20:52:48<SeP>2024-08-22 08:38:24<SeP>2024-08-23 20:24:00<SeP>2024-08-25 08:09:36<SeP>2024-08-26 19:55:12<SeP>2024-08-28 07:40:48<SeP>2024-08-29 19:26:24<SeP>2024-08-31 07:12:00<SeP>2024-09-01 18:57:36<SeP>2024-09-03 06:43:12<SeP>2024-09-04 18:28:48<SeP>2024-09-06 06:14:24<SeP>2024-09-07 18:00:00<SeP>2024-09-09 05:45:36<SeP>2024-09-10 17:31:12<SeP>2024-09-12 05:16:48<SeP>2024-09-13 17:02:24<SeP>2024-09-15 04:48:00<SeP>2024-09-16 16:33:36<SeP>2024-09-18 04:19:12<SeP>2024-09-19 16:04:48<SeP>2024-09-21 03:50:24<SeP>2024-09-22 15:36:00<SeP>2024-09-24 03:21:36<SeP>2024-09-25 15:07:12<SeP>2024-09-27 02:52:48<SeP>2024-09-28 14:38:24<SeP>2024-09-30 02:24:00<SeP>2024-10-01 14:09:36<SeP>2024-10-03 01:55:12<SeP>2024-10-04 13:40:48<SeP>2024-10-06 01:26:24<SeP>2024-10-07 13:12:00<SeP>2024-10-09 00:57:36<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:28:48<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:00:00<SeP>2024-10-16 11:45:36<SeP>2024-10-17 23:31:12<SeP>2024-10-19 11:16:48<SeP>2024-10-20 23:02:24<SeP>2024-10-22 10:48:00<SeP>2024-10-23 22:33:36<SeP>2024-10-25 10:19:12<SeP>2024-10-26 22:04:48<SeP>2024-10-28 09:50:24<SeP>2024-10-29 21:36:00<SeP>2024-10-31 09:21:36<SeP>2024-11-01 21:07:12<SeP>2024-11-03 07:52:48<SeP>2024-11-04 19:38:24<SeP>2024-11-06 07:24:00<SeP>2024-11-07 19:09:36<SeP>2024-11-09 06:55:12<SeP>2024-11-10 18:40:48<SeP>2024-11-12 06:26:24<SeP>2024-11-13 18:12:00<SeP>2024-11-15 05:57:36<SeP>2024-11-16 17:43:12<SeP>2024-11-18 05:28:48<SeP>2024-11-19 17:14:24<SeP>2024-11-21 05:00:00<SeP>2024-11-22 16:45:36<SeP>2024-11-24 04:31:12<SeP>2024-11-25 16:16:48<SeP>2024-11-27 04:02:24<SeP>2024-11-28 15:48:00<SeP>2024-11-30 03:33:36<SeP>2024-12-01 15:19:12<SeP>2024-12-03 03:04:48<SeP>2024-12-04 14:50:24<SeP>2024-12-06 02:36:00<SeP>2024-12-07 14:21:36<SeP>2024-12-09 02:07:12<SeP>2024-12-10 13:52:48<SeP>2024-12-12 01:38:24<SeP>2024-12-13 13:24:00<SeP>2024-12-15 01:09:36<SeP>2024-12-16 12:55:12<SeP>2024-12-18 00:40:48<SeP>2024-12-19 12:26:24<SeP>2024-12-21 00:12:00<SeP>2024-12-22 11:57:36<SeP>2024-12-23 23:43:12<SeP>2024-12-25 11:28:48<SeP>2024-12-26 23:14:24<SeP>2024-12-28 11:00:00<SeP>2024-12-29 22:45:36<SeP>2024-12-31 10:31:12<SeP>2025-01-01 22:16:48<SeP>2025-01-03 10:02:24<SeP>2025-01-04 21:48:00<SeP>2025-01-06 09:33:36<SeP>2025-01-07 21:19:12<SeP>2025-01-09 09:04:48<SeP>2025-01-10 20:50:24<SeP>2025-01-12 08:36:00<SeP>2025-01-13 20:21:36<SeP>2025-01-15 08:07:12<SeP>2025-01-16 19:52:48<SeP>2025-01-18 07:38:24<SeP>2025-01-19 19:24:00<SeP>2025-01-21 07:09:36<SeP>2025-01-22 18:55:12<SeP>2025-01-24 06:40:48<SeP>2025-01-25 18:26:24<SeP>2025-01-27 06:12:00<SeP>2025-01-28 17:57:36<SeP>2025-01-30 05:43:12<SeP>2025-01-31 17:28:48<SeP>2025-02-02 05:14:24<SeP>2025-02-03 17:00:00<SeP>2025-02-05 04:45:36<SeP>2025-02-06 16:31:12<SeP>2025-02-08 04:16:48<SeP>2025-02-09 16:02:24<SeP>2025-02-11 03:48:00<SeP>2025-02-12 15:33:36<SeP>2025-02-14 03:19:12<SeP>2025-02-15 15:04:48<SeP>2025-02-17 02:50:24<SeP>2025-02-18 14:36:00<SeP>2025-02-20 02:21:36<SeP>2025-02-21 14:07:12<SeP>2025-02-23 01:52:48<SeP>2025-02-24 13:38:24<SeP>2025-02-26 01:24:00<SeP>2025-02-27 13:09:36<SeP>2025-03-01 00:55:12<SeP>2025-03-02 12:40:48<SeP>2025-03-04 00:26:24<SeP>2025-03-05 12:12:00<SeP>2025-03-06 23:57:36<SeP>2025-03-08 11:43:12<SeP>2025-03-10 00:28:48<SeP>2025-03-11 12:14:24";
  const itemLabel       = "Escaneos";
  const itemData        = "787<SeP>1521<SeP>1390<SeP>1496<SeP>1257<SeP>1754<SeP>950<SeP>969<SeP>1162<SeP>3393<SeP>3416<SeP>1026<SeP>3326<SeP>879<SeP>789<SeP>882<SeP>1440<SeP>3239<SeP>1465<SeP>1453<SeP>1082<SeP>924<SeP>1125<SeP>1210<SeP>964<SeP>720<SeP>937<SeP>3651<SeP>1000<SeP>839<SeP>1397<SeP>1270<SeP>836<SeP>2809<SeP>1658<SeP>2744<SeP>1855<SeP>1857<SeP>1430<SeP>1299<SeP>1801<SeP>1822<SeP>2277<SeP>1480<SeP>1692<SeP>1640<SeP>1814<SeP>1771<SeP>1792<SeP>1875<SeP>1791<SeP>1495<SeP>3271<SeP>1633<SeP>1542<SeP>2154<SeP>1912<SeP>2222<SeP>1899<SeP>3350<SeP>1343<SeP>1605<SeP>1530<SeP>1428<SeP>2033<SeP>1530<SeP>1226<SeP>1471<SeP>1360<SeP>2333<SeP>1234<SeP>1124<SeP>1270<SeP>2304<SeP>7333<SeP>1158<SeP>1353<SeP>1409<SeP>2344<SeP>1293<SeP>1160<SeP>6702<SeP>1505<SeP>1616<SeP>991<SeP>3114<SeP>1515<SeP>1018<SeP>1121<SeP>1131<SeP>1031<SeP>3098<SeP>952<SeP>1089<SeP>2773<SeP>4680<SeP>3869<SeP>992<SeP>895<SeP>976<SeP>962<SeP>1038<SeP>987<SeP>1069<SeP>3646<SeP>2397<SeP>1423<SeP>1656<SeP>663<SeP>973<SeP>1605<SeP>1116<SeP>1075<SeP>1001<SeP>2334<SeP>1324<SeP>1050<SeP>969<SeP>1117<SeP>807<SeP>872<SeP>855<SeP>835<SeP>897<SeP>1116<SeP>896<SeP>740<SeP>913<SeP>862<SeP>834<SeP>735<SeP>870<SeP>958<SeP>857<SeP>878<SeP>818<SeP>802<SeP>829<SeP>1050<SeP>887<SeP>822<SeP>921<SeP>953<SeP>911<SeP>1094<SeP>974<SeP>549<SeP>926<SeP>865<SeP>1227<SeP>909<SeP>988<SeP>1249<SeP>1304<SeP>884<SeP>969<SeP>919<SeP>931<SeP>812<SeP>1095<SeP>958<SeP>997<SeP>865<SeP>1057<SeP>982<SeP>1090<SeP>1026<SeP>1054<SeP>1116<SeP>907<SeP>916<SeP>2258<SeP>1225<SeP>1129<SeP>1114<SeP>1025<SeP>1136<SeP>993<SeP>855<SeP>690<SeP>933<SeP>1193<SeP>915<SeP>945<SeP>1029<SeP>1381<SeP>1087<SeP>1194<SeP>1365<SeP>1252<SeP>1190<SeP>1538<SeP>1208<SeP>1541<SeP>2123<SeP>1365<SeP>829<SeP>911<SeP>1113<SeP>1091<SeP>681<SeP>826<SeP>879<SeP>1000<SeP>833<SeP>5525<SeP>3307<SeP>1964<SeP>1398<SeP>1014<SeP>841<SeP>1019<SeP>989<SeP>981<SeP>1119<SeP>1037<SeP>1085<SeP>1682<SeP>1857<SeP>1010<SeP>1337<SeP>1221<SeP>1176<SeP>1193<SeP>995<SeP>1059<SeP>1095<SeP>1137<SeP>1030<SeP>1138<SeP>1135<SeP>1018<SeP>979<SeP>1299<SeP>1125<SeP>1151<SeP>1260<SeP>1398<SeP>1246<SeP>1501<SeP>1262<SeP>1094<SeP>1226<SeP>1186<SeP>1965<SeP>1298<SeP>1993<SeP>1649<SeP>1607<SeP>2022<SeP>1457<SeP>1204<SeP>1204<SeP>1397<SeP>1152<SeP>1548<SeP>1249<SeP>1303<SeP>1689<SeP>1722<SeP>1341<SeP>1541<SeP>1513<SeP>1243<SeP>1026<SeP>1179<SeP>1311<SeP>1184<SeP>1270<SeP>1433<SeP>1099<SeP>1632<SeP>1710<SeP>1323<SeP>1712<SeP>1381<SeP>1345<SeP>1129<SeP>884<SeP>971<SeP>961<SeP>906<SeP>1108<SeP>1683<SeP>1191<SeP>1215<SeP>1078<SeP>889<SeP>1052<SeP>908<SeP>1409<SeP>877<SeP>910<SeP>1165<SeP>1396<SeP>1649<SeP>1278<SeP>1093<SeP>1047<SeP>1179<SeP>1762<SeP>989<SeP>1215<SeP>1059<SeP>1581<SeP>1036<SeP>1004<SeP>1166<SeP>1176<SeP>836<SeP>917<SeP>1145<SeP>1467<SeP>1563<SeP>1494<SeP>1436<SeP>1225<SeP>920<SeP>1154<SeP>1303<SeP>1149<SeP>1192<SeP>1003<SeP>1022<SeP>1275<SeP>1498<SeP>1391<SeP>1579<SeP>1516<SeP>1308<SeP>1530<SeP>1437<SeP>1543<SeP>1377<SeP>1481<SeP>1259<SeP>1847<SeP>1270<SeP>1512<SeP>1647<SeP>1321<SeP>1486<SeP>1274<SeP>1305<SeP>1352<SeP>1503<SeP>1710<SeP>1231<SeP>1346<SeP>1300<SeP>1364<SeP>1349<SeP>1190<SeP>1427<SeP>1962<SeP>1618<SeP>1261<SeP>717<SeP>1464<SeP>1849<SeP>1302<SeP>1345<SeP>1210<SeP>1264<SeP>1320<SeP>1546<SeP>1326<SeP>1563<SeP>1653<SeP>1566<SeP>1388<SeP>1729<SeP>1410<SeP>1389<SeP>1739<SeP>1528<SeP>1402<SeP>1120<SeP>1687<SeP>1776<SeP>1871<SeP>1830<SeP>1918<SeP>1596<SeP>1633<SeP>1524<SeP>1580<SeP>1526<SeP>1732<SeP>1770<SeP>1810<SeP>1442<SeP>1513<SeP>1510<SeP>1464<SeP>1610<SeP>2357<SeP>1110<SeP>2203<SeP>1668";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:45:36<SeP>2023-07-28 23:31:12<SeP>2023-07-30 11:16:48<SeP>2023-07-31 23:02:24<SeP>2023-08-02 10:48:00<SeP>2023-08-03 22:33:36<SeP>2023-08-05 10:19:12<SeP>2023-08-06 22:04:48<SeP>2023-08-08 09:50:24<SeP>2023-08-09 21:36:00<SeP>2023-08-11 09:21:36<SeP>2023-08-12 21:07:12<SeP>2023-08-14 08:52:48<SeP>2023-08-15 20:38:24<SeP>2023-08-17 08:24:00<SeP>2023-08-18 20:09:36<SeP>2023-08-20 07:55:12<SeP>2023-08-21 19:40:48<SeP>2023-08-23 07:26:24<SeP>2023-08-24 19:12:00<SeP>2023-08-26 06:57:36<SeP>2023-08-27 18:43:12<SeP>2023-08-29 06:28:48<SeP>2023-08-30 18:14:24<SeP>2023-09-01 06:00:00<SeP>2023-09-02 17:45:36<SeP>2023-09-04 05:31:12<SeP>2023-09-05 17:16:48<SeP>2023-09-07 05:02:24<SeP>2023-09-08 16:48:00<SeP>2023-09-10 04:33:36<SeP>2023-09-11 16:19:12<SeP>2023-09-13 04:04:48<SeP>2023-09-14 15:50:24<SeP>2023-09-16 03:36:00<SeP>2023-09-17 15:21:36<SeP>2023-09-19 03:07:12<SeP>2023-09-20 14:52:48<SeP>2023-09-22 02:38:24<SeP>2023-09-23 14:24:00<SeP>2023-09-25 02:09:36<SeP>2023-09-26 13:55:12<SeP>2023-09-28 01:40:48<SeP>2023-09-29 13:26:24<SeP>2023-10-01 01:12:00<SeP>2023-10-02 12:57:36<SeP>2023-10-04 00:43:12<SeP>2023-10-05 12:28:48<SeP>2023-10-07 00:14:24<SeP>2023-10-08 12:00:00<SeP>2023-10-09 23:45:36<SeP>2023-10-11 11:31:12<SeP>2023-10-12 23:16:48<SeP>2023-10-14 11:02:24<SeP>2023-10-15 22:48:00<SeP>2023-10-17 10:33:36<SeP>2023-10-18 22:19:12<SeP>2023-10-20 10:04:48<SeP>2023-10-21 21:50:24<SeP>2023-10-23 09:36:00<SeP>2023-10-24 21:21:36<SeP>2023-10-26 09:07:12<SeP>2023-10-27 20:52:48<SeP>2023-10-29 08:38:24<SeP>2023-10-30 20:24:00<SeP>2023-11-01 08:09:36<SeP>2023-11-02 19:55:12<SeP>2023-11-04 07:40:48<SeP>2023-11-05 18:26:24<SeP>2023-11-07 06:12:00<SeP>2023-11-08 17:57:36<SeP>2023-11-10 05:43:12<SeP>2023-11-11 17:28:48<SeP>2023-11-13 05:14:24<SeP>2023-11-14 17:00:00<SeP>2023-11-16 04:45:36<SeP>2023-11-17 16:31:12<SeP>2023-11-19 04:16:48<SeP>2023-11-20 16:02:24<SeP>2023-11-22 03:48:00<SeP>2023-11-23 15:33:36<SeP>2023-11-25 03:19:12<SeP>2023-11-26 15:04:48<SeP>2023-11-28 02:50:24<SeP>2023-11-29 14:36:00<SeP>2023-12-01 02:21:36<SeP>2023-12-02 14:07:12<SeP>2023-12-04 01:52:48<SeP>2023-12-05 13:38:24<SeP>2023-12-07 01:24:00<SeP>2023-12-08 13:09:36<SeP>2023-12-10 00:55:12<SeP>2023-12-11 12:40:48<SeP>2023-12-13 00:26:24<SeP>2023-12-14 12:12:00<SeP>2023-12-15 23:57:36<SeP>2023-12-17 11:43:12<SeP>2023-12-18 23:28:48<SeP>2023-12-20 11:14:24<SeP>2023-12-21 23:00:00<SeP>2023-12-23 10:45:36<SeP>2023-12-24 22:31:12<SeP>2023-12-26 10:16:48<SeP>2023-12-27 22:02:24<SeP>2023-12-29 09:48:00<SeP>2023-12-30 21:33:36<SeP>2024-01-01 09:19:12<SeP>2024-01-02 21:04:48<SeP>2024-01-04 08:50:24<SeP>2024-01-05 20:36:00<SeP>2024-01-07 08:21:36<SeP>2024-01-08 20:07:12<SeP>2024-01-10 07:52:48<SeP>2024-01-11 19:38:24<SeP>2024-01-13 07:24:00<SeP>2024-01-14 19:09:36<SeP>2024-01-16 06:55:12<SeP>2024-01-17 18:40:48<SeP>2024-01-19 06:26:24<SeP>2024-01-20 18:12:00<SeP>2024-01-22 05:57:36<SeP>2024-01-23 17:43:12<SeP>2024-01-25 05:28:48<SeP>2024-01-26 17:14:24<SeP>2024-01-28 05:00:00<SeP>2024-01-29 16:45:36<SeP>2024-01-31 04:31:12<SeP>2024-02-01 16:16:48<SeP>2024-02-03 04:02:24<SeP>2024-02-04 15:48:00<SeP>2024-02-06 03:33:36<SeP>2024-02-07 15:19:12<SeP>2024-02-09 03:04:48<SeP>2024-02-10 14:50:24<SeP>2024-02-12 02:36:00<SeP>2024-02-13 14:21:36<SeP>2024-02-15 02:07:12<SeP>2024-02-16 13:52:48<SeP>2024-02-18 01:38:24<SeP>2024-02-19 13:24:00<SeP>2024-02-21 01:09:36<SeP>2024-02-22 12:55:12<SeP>2024-02-24 00:40:48<SeP>2024-02-25 12:26:24<SeP>2024-02-27 00:12:00<SeP>2024-02-28 11:57:36<SeP>2024-02-29 23:43:12<SeP>2024-03-02 11:28:48<SeP>2024-03-03 23:14:24<SeP>2024-03-05 11:00:00<SeP>2024-03-06 22:45:36<SeP>2024-03-08 10:31:12<SeP>2024-03-09 22:16:48<SeP>2024-03-11 11:02:24<SeP>2024-03-12 22:48:00<SeP>2024-03-14 10:33:36<SeP>2024-03-15 22:19:12<SeP>2024-03-17 10:04:48<SeP>2024-03-18 21:50:24<SeP>2024-03-20 09:36:00<SeP>2024-03-21 21:21:36<SeP>2024-03-23 09:07:12<SeP>2024-03-24 20:52:48<SeP>2024-03-26 08:38:24<SeP>2024-03-27 20:24:00<SeP>2024-03-29 08:09:36<SeP>2024-03-30 19:55:12<SeP>2024-04-01 07:40:48<SeP>2024-04-02 19:26:24<SeP>2024-04-04 07:12:00<SeP>2024-04-05 18:57:36<SeP>2024-04-07 06:43:12<SeP>2024-04-08 18:28:48<SeP>2024-04-10 06:14:24<SeP>2024-04-11 18:00:00<SeP>2024-04-13 05:45:36<SeP>2024-04-14 17:31:12<SeP>2024-04-16 05:16:48<SeP>2024-04-17 17:02:24<SeP>2024-04-19 04:48:00<SeP>2024-04-20 16:33:36<SeP>2024-04-22 04:19:12<SeP>2024-04-23 16:04:48<SeP>2024-04-25 03:50:24<SeP>2024-04-26 15:36:00<SeP>2024-04-28 03:21:36<SeP>2024-04-29 15:07:12<SeP>2024-05-01 02:52:48<SeP>2024-05-02 14:38:24<SeP>2024-05-04 02:24:00<SeP>2024-05-05 14:09:36<SeP>2024-05-07 01:55:12<SeP>2024-05-08 13:40:48<SeP>2024-05-10 01:26:24<SeP>2024-05-11 13:12:00<SeP>2024-05-13 00:57:36<SeP>2024-05-14 12:43:12<SeP>2024-05-16 00:28:48<SeP>2024-05-17 12:14:24<SeP>2024-05-19 00:00:00<SeP>2024-05-20 11:45:36<SeP>2024-05-21 23:31:12<SeP>2024-05-23 11:16:48<SeP>2024-05-24 23:02:24<SeP>2024-05-26 10:48:00<SeP>2024-05-27 22:33:36<SeP>2024-05-29 10:19:12<SeP>2024-05-30 22:04:48<SeP>2024-06-01 09:50:24<SeP>2024-06-02 21:36:00<SeP>2024-06-04 09:21:36<SeP>2024-06-05 21:07:12<SeP>2024-06-07 08:52:48<SeP>2024-06-08 20:38:24<SeP>2024-06-10 08:24:00<SeP>2024-06-11 20:09:36<SeP>2024-06-13 07:55:12<SeP>2024-06-14 19:40:48<SeP>2024-06-16 07:26:24<SeP>2024-06-17 19:12:00<SeP>2024-06-19 06:57:36<SeP>2024-06-20 18:43:12<SeP>2024-06-22 06:28:48<SeP>2024-06-23 18:14:24<SeP>2024-06-25 06:00:00<SeP>2024-06-26 17:45:36<SeP>2024-06-28 05:31:12<SeP>2024-06-29 17:16:48<SeP>2024-07-01 05:02:24<SeP>2024-07-02 16:48:00<SeP>2024-07-04 04:33:36<SeP>2024-07-05 16:19:12<SeP>2024-07-07 04:04:48<SeP>2024-07-08 15:50:24<SeP>2024-07-10 03:36:00<SeP>2024-07-11 15:21:36<SeP>2024-07-13 03:07:12<SeP>2024-07-14 14:52:48<SeP>2024-07-16 02:38:24<SeP>2024-07-17 14:24:00<SeP>2024-07-19 02:09:36<SeP>2024-07-20 13:55:12<SeP>2024-07-22 01:40:48<SeP>2024-07-23 13:26:24<SeP>2024-07-25 01:12:00<SeP>2024-07-26 12:57:36<SeP>2024-07-28 00:43:12<SeP>2024-07-29 12:28:48<SeP>2024-07-31 00:14:24<SeP>2024-08-01 12:00:00<SeP>2024-08-02 23:45:36<SeP>2024-08-04 11:31:12<SeP>2024-08-05 23:16:48<SeP>2024-08-07 11:02:24<SeP>2024-08-08 22:48:00<SeP>2024-08-10 10:33:36<SeP>2024-08-11 22:19:12<SeP>2024-08-13 10:04:48<SeP>2024-08-14 21:50:24<SeP>2024-08-16 09:36:00<SeP>2024-08-17 21:21:36<SeP>2024-08-19 09:07:12<SeP>2024-08-20 20:52:48<SeP>2024-08-22 08:38:24<SeP>2024-08-23 20:24:00<SeP>2024-08-25 08:09:36<SeP>2024-08-26 19:55:12<SeP>2024-08-28 07:40:48<SeP>2024-08-29 19:26:24<SeP>2024-08-31 07:12:00<SeP>2024-09-01 18:57:36<SeP>2024-09-03 06:43:12<SeP>2024-09-04 18:28:48<SeP>2024-09-06 06:14:24<SeP>2024-09-07 18:00:00<SeP>2024-09-09 05:45:36<SeP>2024-09-10 17:31:12<SeP>2024-09-12 05:16:48<SeP>2024-09-13 17:02:24<SeP>2024-09-15 04:48:00<SeP>2024-09-16 16:33:36<SeP>2024-09-18 04:19:12<SeP>2024-09-19 16:04:48<SeP>2024-09-21 03:50:24<SeP>2024-09-22 15:36:00<SeP>2024-09-24 03:21:36<SeP>2024-09-25 15:07:12<SeP>2024-09-27 02:52:48<SeP>2024-09-28 14:38:24<SeP>2024-09-30 02:24:00<SeP>2024-10-01 14:09:36<SeP>2024-10-03 01:55:12<SeP>2024-10-04 13:40:48<SeP>2024-10-06 01:26:24<SeP>2024-10-07 13:12:00<SeP>2024-10-09 00:57:36<SeP>2024-10-10 12:43:12<SeP>2024-10-12 00:28:48<SeP>2024-10-13 12:14:24<SeP>2024-10-15 00:00:00<SeP>2024-10-16 11:45:36<SeP>2024-10-17 23:31:12<SeP>2024-10-19 11:16:48<SeP>2024-10-20 23:02:24<SeP>2024-10-22 10:48:00<SeP>2024-10-23 22:33:36<SeP>2024-10-25 10:19:12<SeP>2024-10-26 22:04:48<SeP>2024-10-28 09:50:24<SeP>2024-10-29 21:36:00<SeP>2024-10-31 09:21:36<SeP>2024-11-01 21:07:12<SeP>2024-11-03 07:52:48<SeP>2024-11-04 19:38:24<SeP>2024-11-06 07:24:00<SeP>2024-11-07 19:09:36<SeP>2024-11-09 06:55:12<SeP>2024-11-10 18:40:48<SeP>2024-11-12 06:26:24<SeP>2024-11-13 18:12:00<SeP>2024-11-15 05:57:36<SeP>2024-11-16 17:43:12<SeP>2024-11-18 05:28:48<SeP>2024-11-19 17:14:24<SeP>2024-11-21 05:00:00<SeP>2024-11-22 16:45:36<SeP>2024-11-24 04:31:12<SeP>2024-11-25 16:16:48<SeP>2024-11-27 04:02:24<SeP>2024-11-28 15:48:00<SeP>2024-11-30 03:33:36<SeP>2024-12-01 15:19:12<SeP>2024-12-03 03:04:48<SeP>2024-12-04 14:50:24<SeP>2024-12-06 02:36:00<SeP>2024-12-07 14:21:36<SeP>2024-12-09 02:07:12<SeP>2024-12-10 13:52:48<SeP>2024-12-12 01:38:24<SeP>2024-12-13 13:24:00<SeP>2024-12-15 01:09:36<SeP>2024-12-16 12:55:12<SeP>2024-12-18 00:40:48<SeP>2024-12-19 12:26:24<SeP>2024-12-21 00:12:00<SeP>2024-12-22 11:57:36<SeP>2024-12-23 23:43:12<SeP>2024-12-25 11:28:48<SeP>2024-12-26 23:14:24<SeP>2024-12-28 11:00:00<SeP>2024-12-29 22:45:36<SeP>2024-12-31 10:31:12<SeP>2025-01-01 22:16:48<SeP>2025-01-03 10:02:24<SeP>2025-01-04 21:48:00<SeP>2025-01-06 09:33:36<SeP>2025-01-07 21:19:12<SeP>2025-01-09 09:04:48<SeP>2025-01-10 20:50:24<SeP>2025-01-12 08:36:00<SeP>2025-01-13 20:21:36<SeP>2025-01-15 08:07:12<SeP>2025-01-16 19:52:48<SeP>2025-01-18 07:38:24<SeP>2025-01-19 19:24:00<SeP>2025-01-21 07:09:36<SeP>2025-01-22 18:55:12<SeP>2025-01-24 06:40:48<SeP>2025-01-25 18:26:24<SeP>2025-01-27 06:12:00<SeP>2025-01-28 17:57:36<SeP>2025-01-30 05:43:12<SeP>2025-01-31 17:28:48<SeP>2025-02-02 05:14:24<SeP>2025-02-03 17:00:00<SeP>2025-02-05 04:45:36<SeP>2025-02-06 16:31:12<SeP>2025-02-08 04:16:48<SeP>2025-02-09 16:02:24<SeP>2025-02-11 03:48:00<SeP>2025-02-12 15:33:36<SeP>2025-02-14 03:19:12<SeP>2025-02-15 15:04:48<SeP>2025-02-17 02:50:24<SeP>2025-02-18 14:36:00<SeP>2025-02-20 02:21:36<SeP>2025-02-21 14:07:12<SeP>2025-02-23 01:52:48<SeP>2025-02-24 13:38:24<SeP>2025-02-26 01:24:00<SeP>2025-02-27 13:09:36<SeP>2025-03-01 00:55:12<SeP>2025-03-02 12:40:48<SeP>2025-03-04 00:26:24<SeP>2025-03-05 12:12:00<SeP>2025-03-06 23:57:36<SeP>2025-03-08 11:43:12<SeP>2025-03-10 00:28:48<SeP>2025-03-11 12:14:24";
  const itemLabel       = "Ataques";
  const itemData        = "221<SeP>550<SeP>1405<SeP>649<SeP>226<SeP>235<SeP>7048<SeP>637<SeP>9341<SeP>564<SeP>401<SeP>1261<SeP>1167<SeP>243<SeP>329<SeP>290<SeP>242<SeP>698<SeP>323<SeP>8579<SeP>7681<SeP>6896<SeP>9797<SeP>514<SeP>295<SeP>414<SeP>165<SeP>386<SeP>5935<SeP>79<SeP>385<SeP>279<SeP>412<SeP>2384<SeP>9743<SeP>8700<SeP>10767<SeP>9558<SeP>6030<SeP>6587<SeP>7871<SeP>8857<SeP>9091<SeP>8041<SeP>7234<SeP>9877<SeP>8963<SeP>8104<SeP>6908<SeP>5538<SeP>12348<SeP>6970<SeP>8214<SeP>7602<SeP>9924<SeP>12259<SeP>22812<SeP>9558<SeP>9299<SeP>10116<SeP>6621<SeP>9054<SeP>8127<SeP>9221<SeP>8575<SeP>6158<SeP>6767<SeP>7404<SeP>5787<SeP>3235<SeP>6903<SeP>6033<SeP>6633<SeP>6510<SeP>6673<SeP>4527<SeP>5984<SeP>7373<SeP>4765<SeP>7099<SeP>4830<SeP>5911<SeP>6613<SeP>5933<SeP>5799<SeP>5452<SeP>16285<SeP>16203<SeP>36184<SeP>7134<SeP>8792<SeP>6084<SeP>9127<SeP>10466<SeP>5137<SeP>6437<SeP>3859<SeP>5482<SeP>6486<SeP>5280<SeP>8723<SeP>6814<SeP>5355<SeP>4550<SeP>5986<SeP>9714<SeP>8059<SeP>7945<SeP>4527<SeP>6914<SeP>9897<SeP>8508<SeP>4490<SeP>3645<SeP>6923<SeP>9106<SeP>5905<SeP>7583<SeP>8446<SeP>2791<SeP>3178<SeP>1077<SeP>1670<SeP>2566<SeP>1781<SeP>876<SeP>1238<SeP>1097<SeP>1358<SeP>1129<SeP>1291<SeP>1175<SeP>993<SeP>1020<SeP>1022<SeP>1503<SeP>1273<SeP>1130<SeP>2097<SeP>1694<SeP>4572<SeP>12291<SeP>7827<SeP>8646<SeP>6950<SeP>12889<SeP>2785<SeP>11748<SeP>10033<SeP>9500<SeP>12503<SeP>8208<SeP>13217<SeP>12015<SeP>7661<SeP>11550<SeP>5841<SeP>5240<SeP>7169<SeP>25478<SeP>6261<SeP>8806<SeP>10563<SeP>17047<SeP>7293<SeP>6907<SeP>6689<SeP>6889<SeP>25185<SeP>9019<SeP>8367<SeP>12174<SeP>4320<SeP>6885<SeP>5223<SeP>17149<SeP>4893<SeP>13037<SeP>7924<SeP>6985<SeP>8579<SeP>7593<SeP>3004<SeP>6205<SeP>5567<SeP>7201<SeP>7457<SeP>5728<SeP>7587<SeP>20169<SeP>5939<SeP>7640<SeP>6248<SeP>8204<SeP>10787<SeP>7377<SeP>4843<SeP>3299<SeP>6327<SeP>3366<SeP>4346<SeP>3944<SeP>637<SeP>109<SeP>637<SeP>610<SeP>588<SeP>766<SeP>365<SeP>658<SeP>1341<SeP>1372<SeP>3033<SeP>22903<SeP>653<SeP>4710<SeP>3569<SeP>3416<SeP>6654<SeP>2675<SeP>4255<SeP>3827<SeP>2972<SeP>3080<SeP>3219<SeP>4687<SeP>1622<SeP>3706<SeP>1698<SeP>2590<SeP>1307<SeP>1919<SeP>1599<SeP>1382<SeP>1260<SeP>852<SeP>1716<SeP>26799<SeP>1771<SeP>4184<SeP>3807<SeP>2416<SeP>3472<SeP>2956<SeP>2152<SeP>3544<SeP>2814<SeP>3517<SeP>2128<SeP>3732<SeP>2745<SeP>5539<SeP>6272<SeP>3983<SeP>3771<SeP>2571<SeP>3441<SeP>4351<SeP>5357<SeP>8929<SeP>5362<SeP>2289<SeP>3544<SeP>2688<SeP>4835<SeP>3284<SeP>3448<SeP>2622<SeP>4446<SeP>4945<SeP>3828<SeP>5877<SeP>4401<SeP>6213<SeP>4547<SeP>5578<SeP>5494<SeP>21946<SeP>5228<SeP>11005<SeP>1800<SeP>3726<SeP>4835<SeP>3355<SeP>3888<SeP>5910<SeP>3620<SeP>4745<SeP>4465<SeP>3625<SeP>3329<SeP>1273<SeP>1966<SeP>3269<SeP>2878<SeP>2828<SeP>3331<SeP>4348<SeP>4173<SeP>3412<SeP>4322<SeP>3464<SeP>3238<SeP>4060<SeP>8510<SeP>6035<SeP>5771<SeP>5135<SeP>4855<SeP>3636<SeP>3582<SeP>4656<SeP>5967<SeP>5522<SeP>4767<SeP>4392<SeP>998<SeP>787<SeP>2232<SeP>1366<SeP>1093<SeP>1859<SeP>1559<SeP>1084<SeP>3389<SeP>4071<SeP>6557<SeP>32296<SeP>6908<SeP>5296<SeP>18946<SeP>10245<SeP>5315<SeP>6235<SeP>4579<SeP>24354<SeP>5108<SeP>5127<SeP>5175<SeP>5586<SeP>7197<SeP>28315<SeP>4678<SeP>3701<SeP>4417<SeP>5307<SeP>5929<SeP>3495<SeP>3301<SeP>3544<SeP>4899<SeP>5374<SeP>4109<SeP>17846<SeP>6268<SeP>7306<SeP>3479<SeP>2437<SeP>3515<SeP>4340<SeP>3992<SeP>4423<SeP>2726<SeP>3879<SeP>2519<SeP>4488<SeP>4794<SeP>8424<SeP>10877<SeP>8146<SeP>9085<SeP>8516<SeP>8068<SeP>4879<SeP>5348<SeP>3923<SeP>25576<SeP>3613<SeP>3642<SeP>3737<SeP>11016<SeP>5424<SeP>4951<SeP>4147<SeP>4572<SeP>3607<SeP>6194<SeP>10130<SeP>6882<SeP>3904<SeP>3264<SeP>2914<SeP>2212<SeP>2380<SeP>2085<SeP>2193<SeP>2473<SeP>1967<SeP>2892<SeP>3071";
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
  const itemData    = "700281<SeP>369077<SeP>207513<SeP>181525<SeP>111176<SeP>88789<SeP>84358<SeP>81704<SeP>68504<SeP>68404";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "300943<SeP>41451<SeP>41222<SeP>37080<SeP>14743<SeP>11373<SeP>8755<SeP>8124<SeP>7285<SeP>7269";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "399338<SeP>331997<SeP>204362<SeP>140303<SeP>96433<SeP>81638<SeP>81504<SeP>70331<SeP>60380<SeP>59204";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>9829<SeP>58224";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "365954<SeP>259557<SeP>239021<SeP>144195<SeP>68019<SeP>60216<SeP>57262<SeP>53654<SeP>36666<SeP>36062";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>0<SeP>14061<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "158598<SeP>54118<SeP>35026<SeP>32998<SeP>21945<SeP>13911<SeP>12985<SeP>11012<SeP>7614<SeP>7523";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Atacks";
  const itemData    = "352969<SeP>258790<SeP>122250<SeP>80423<SeP>56231<SeP>49204<SeP>47473<SeP>30694<SeP>29324<SeP>26894";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Iran";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "700281<SeP>369077<SeP>207513<SeP>181525<SeP>111176<SeP>88789<SeP>84358<SeP>81704<SeP>68504<SeP>68404";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "300943<SeP>41451<SeP>41222<SeP>37080<SeP>14743<SeP>11373<SeP>8755<SeP>8124<SeP>7285<SeP>7269";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "399338<SeP>331997<SeP>204362<SeP>140303<SeP>96433<SeP>81638<SeP>81504<SeP>70331<SeP>60380<SeP>59204";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>9829<SeP>58224";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "365954<SeP>259557<SeP>239021<SeP>144195<SeP>68019<SeP>60216<SeP>57262<SeP>53654<SeP>36666<SeP>36062";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>0<SeP>14061<SeP>4766<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "158598<SeP>54118<SeP>35026<SeP>32998<SeP>21945<SeP>13911<SeP>12985<SeP>11012<SeP>7614<SeP>7523";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>4812";
  const itemLabel   = "Ataques";
  const itemData    = "352969<SeP>258790<SeP>122250<SeP>80423<SeP>56231<SeP>49204<SeP>47473<SeP>30694<SeP>29324<SeP>26894";
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
