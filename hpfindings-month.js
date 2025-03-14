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
  const metricData    = "119577";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "33468";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "86109";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8819";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "49499";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "36610";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4335";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "8191";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "28419";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3552";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "119577";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "33468";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "86109";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8819";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "49499";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "36610";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4335";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "8191";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "28419";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3552";
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
  const incomingData = "119577<SeP>33468<SeP>86109<SeP>8819";
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
  const incomingData = "86109<SeP>49499<SeP>36610<SeP>4335";
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
  const incomingData = "36610<SeP>8191<SeP>28419<SeP>3552";
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
  const incomingData = "8581<SeP>7833<SeP>748";
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
  const incomingData = "89<SeP>10<SeP>79<SeP>19";
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
  const incomingData = "119577<SeP>33468<SeP>86109<SeP>8819";
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
  const incomingData = "86109<SeP>49499<SeP>36610<SeP>4335";
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
  const incomingData = "36610<SeP>8191<SeP>28419<SeP>3552";
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
  const incomingData = "8581<SeP>7833<SeP>748";
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
  const incomingData = "89<SeP>10<SeP>79<SeP>19";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>122.100.182.168</span>)<SeP>IP05 (<span class=blur>37.44.238.88</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>92.255.57.132</span>)";
  const column2Data  = "AS44486<SeP>AS207566<SeP>AS47890<SeP>AS4609<SeP>AS34534<SeP>AS204428<SeP>AS400619<SeP>AS207566<SeP>AS14061<SeP>AS207566";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong";
  const column4Data  = "6226<SeP>1380<SeP>1140<SeP>758<SeP>740<SeP>638<SeP>604<SeP>580<SeP>528<SeP>459";
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
  const column1Data  = "IP04 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP13 (<span class=blur>126.62.95.172</span>)<SeP>IP14 (<span class=blur>218.92.0.226</span>)<SeP>IP15 (<span class=blur>218.92.0.230</span>)<SeP>IP16 (<span class=blur>218.92.0.216</span>)<SeP>IP17 (<span class=blur>218.92.0.217</span>)<SeP>IP18 (<span class=blur>218.92.0.223</span>)<SeP>IP19 (<span class=blur>218.92.0.237</span>)";
  const column2Data  = "AS4609<SeP>AS207566<SeP>AS207566<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data  = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "758<SeP>690<SeP>580<SeP>337<SeP>330<SeP>327<SeP>326<SeP>319<SeP>316<SeP>314";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP05 (<span class=blur>37.44.238.88</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>92.255.57.132</span>)<SeP>IP11 (<span class=blur>95.182.115.45</span>)<SeP>IP12 (<span class=blur>104.252.127.63</span>)";
  const column2Data  = "AS44486<SeP>AS47890<SeP>AS34534<SeP>AS207566<SeP>AS204428<SeP>AS400619<SeP>AS14061<SeP>AS207566<SeP>AS56971<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  const column4Data  = "6225<SeP>1136<SeP>728<SeP>690<SeP>638<SeP>602<SeP>527<SeP>458<SeP>430<SeP>382";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>122.100.182.168</span>)<SeP>IP05 (<span class=blur>37.44.238.88</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>92.255.57.132</span>)";
  const column2Data   = "AS44486<SeP>AS207566<SeP>AS47890<SeP>AS4609<SeP>AS34534<SeP>AS204428<SeP>AS400619<SeP>AS207566<SeP>AS14061<SeP>AS207566";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6226<SeP>1380<SeP>1140<SeP>758<SeP>740<SeP>638<SeP>604<SeP>580<SeP>528<SeP>459";
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
  const column1Data   = "IP04 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP13 (<span class=blur>126.62.95.172</span>)<SeP>IP14 (<span class=blur>218.92.0.226</span>)<SeP>IP15 (<span class=blur>218.92.0.230</span>)<SeP>IP16 (<span class=blur>218.92.0.216</span>)<SeP>IP17 (<span class=blur>218.92.0.217</span>)<SeP>IP18 (<span class=blur>218.92.0.223</span>)<SeP>IP19 (<span class=blur>218.92.0.237</span>)";
  const column2Data   = "AS4609<SeP>AS207566<SeP>AS207566<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data   = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "758<SeP>690<SeP>580<SeP>337<SeP>330<SeP>327<SeP>326<SeP>319<SeP>316<SeP>314";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP05 (<span class=blur>37.44.238.88</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>92.255.57.132</span>)<SeP>IP11 (<span class=blur>95.182.115.45</span>)<SeP>IP12 (<span class=blur>104.252.127.63</span>)";
  const column2Data   = "AS44486<SeP>AS47890<SeP>AS34534<SeP>AS207566<SeP>AS204428<SeP>AS400619<SeP>AS14061<SeP>AS207566<SeP>AS56971<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6225<SeP>1136<SeP>728<SeP>690<SeP>638<SeP>602<SeP>527<SeP>458<SeP>430<SeP>382";
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
  const column3Data   = "6129<SeP>6050<SeP>1309<SeP>250<SeP>218<SeP>203<SeP>201<SeP>201<SeP>196<SeP>186";
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
  const column2Data  = "6398<SeP>972<SeP>268<SeP>161<SeP>41<SeP>40<SeP>35<SeP>35<SeP>35<SeP>34";
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
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://193.143.1.7<SeP>http://61.215.151.173<SeP>http://194.85.251.8<SeP>http://66.63.187.69<SeP>tftp://156.253.227.112<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>http://141.98.10.122";
  const column2Data  = "80<SeP>20<SeP>7<SeP>5<SeP>5<SeP>4<SeP>2<SeP>2<SeP>2<SeP>2";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "84639<SeP>34938";
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
  const column3Data   = "6129<SeP>6050<SeP>1309<SeP>250<SeP>218<SeP>203<SeP>201<SeP>201<SeP>196<SeP>186";
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
  const column2Data  = "6398<SeP>972<SeP>268<SeP>161<SeP>41<SeP>40<SeP>35<SeP>35<SeP>35<SeP>34";
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
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://193.143.1.7<SeP>http://61.215.151.173<SeP>http://194.85.251.8<SeP>http://66.63.187.69<SeP>tftp://156.253.227.112<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>http://141.98.10.122";
  const column2Data  = "80<SeP>20<SeP>7<SeP>5<SeP>5<SeP>4<SeP>2<SeP>2<SeP>2<SeP>2";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "84639<SeP>34938";
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
        "name": "traffic between 2025-02-12 and 2025-03-13"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          16403,50
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
        "name": "scans between 2025-02-12 and 2025-03-13"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12055,38,
          16403,50
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
        "name": "attacks between 2025-02-12 and 2025-03-13"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6611,22,
          16403,50
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
        "name": "tráfico entre 2025-02-12 y 2025-03-13"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          16403,50
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
        "name": "escaneos entre 2025-02-12 y 2025-03-13"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12055,38,
          16403,50
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
        "name": "ataques entre 2025-02-12 y 2025-03-13"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6611,22,
          16403,50
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
  const labelsData       = "2025-02-12 00:00:00<SeP>2025-02-12 01:47:51<SeP>2025-02-12 03:35:42<SeP>2025-02-12 05:23:33<SeP>2025-02-12 07:11:24<SeP>2025-02-12 08:59:15<SeP>2025-02-12 10:47:06<SeP>2025-02-12 12:34:57<SeP>2025-02-12 14:22:48<SeP>2025-02-12 16:10:39<SeP>2025-02-12 17:58:30<SeP>2025-02-12 19:46:21<SeP>2025-02-12 21:34:12<SeP>2025-02-12 23:22:03<SeP>2025-02-13 01:09:54<SeP>2025-02-13 02:57:45<SeP>2025-02-13 04:45:36<SeP>2025-02-13 06:33:27<SeP>2025-02-13 08:21:18<SeP>2025-02-13 10:09:09<SeP>2025-02-13 11:57:00<SeP>2025-02-13 13:44:51<SeP>2025-02-13 15:32:42<SeP>2025-02-13 17:20:33<SeP>2025-02-13 19:08:24<SeP>2025-02-13 20:56:15<SeP>2025-02-13 22:44:06<SeP>2025-02-14 00:31:57<SeP>2025-02-14 02:19:48<SeP>2025-02-14 04:07:39<SeP>2025-02-14 05:55:30<SeP>2025-02-14 07:43:21<SeP>2025-02-14 09:31:12<SeP>2025-02-14 11:19:03<SeP>2025-02-14 13:06:54<SeP>2025-02-14 14:54:45<SeP>2025-02-14 16:42:36<SeP>2025-02-14 18:30:27<SeP>2025-02-14 20:18:18<SeP>2025-02-14 22:06:09<SeP>2025-02-14 23:54:00<SeP>2025-02-15 01:41:51<SeP>2025-02-15 03:29:42<SeP>2025-02-15 05:17:33<SeP>2025-02-15 07:05:24<SeP>2025-02-15 08:53:15<SeP>2025-02-15 10:41:06<SeP>2025-02-15 12:28:57<SeP>2025-02-15 14:16:48<SeP>2025-02-15 16:04:39<SeP>2025-02-15 17:52:30<SeP>2025-02-15 19:40:21<SeP>2025-02-15 21:28:12<SeP>2025-02-15 23:16:03<SeP>2025-02-16 01:03:54<SeP>2025-02-16 02:51:45<SeP>2025-02-16 04:39:36<SeP>2025-02-16 06:27:27<SeP>2025-02-16 08:15:18<SeP>2025-02-16 10:03:09<SeP>2025-02-16 11:51:00<SeP>2025-02-16 13:38:51<SeP>2025-02-16 15:26:42<SeP>2025-02-16 17:14:33<SeP>2025-02-16 19:02:24<SeP>2025-02-16 20:50:15<SeP>2025-02-16 22:38:06<SeP>2025-02-17 00:25:57<SeP>2025-02-17 02:13:48<SeP>2025-02-17 04:01:39<SeP>2025-02-17 05:49:30<SeP>2025-02-17 07:37:21<SeP>2025-02-17 09:25:12<SeP>2025-02-17 11:13:03<SeP>2025-02-17 13:00:54<SeP>2025-02-17 14:48:45<SeP>2025-02-17 16:36:36<SeP>2025-02-17 18:24:27<SeP>2025-02-17 20:12:18<SeP>2025-02-17 22:00:09<SeP>2025-02-17 23:48:00<SeP>2025-02-18 01:35:51<SeP>2025-02-18 03:23:42<SeP>2025-02-18 05:11:33<SeP>2025-02-18 06:59:24<SeP>2025-02-18 08:47:15<SeP>2025-02-18 10:35:06<SeP>2025-02-18 12:22:57<SeP>2025-02-18 14:10:48<SeP>2025-02-18 15:58:39<SeP>2025-02-18 17:46:30<SeP>2025-02-18 19:34:21<SeP>2025-02-18 21:22:12<SeP>2025-02-18 23:10:03<SeP>2025-02-19 00:57:54<SeP>2025-02-19 02:45:45<SeP>2025-02-19 04:33:36<SeP>2025-02-19 06:21:27<SeP>2025-02-19 08:09:18<SeP>2025-02-19 09:57:09<SeP>2025-02-19 11:45:00<SeP>2025-02-19 13:32:51<SeP>2025-02-19 15:20:42<SeP>2025-02-19 17:08:33<SeP>2025-02-19 18:56:24<SeP>2025-02-19 20:44:15<SeP>2025-02-19 22:32:06<SeP>2025-02-20 00:19:57<SeP>2025-02-20 02:07:48<SeP>2025-02-20 03:55:39<SeP>2025-02-20 05:43:30<SeP>2025-02-20 07:31:21<SeP>2025-02-20 09:19:12<SeP>2025-02-20 11:07:03<SeP>2025-02-20 12:54:54<SeP>2025-02-20 14:42:45<SeP>2025-02-20 16:30:36<SeP>2025-02-20 18:18:27<SeP>2025-02-20 20:06:18<SeP>2025-02-20 21:54:09<SeP>2025-02-20 23:42:00<SeP>2025-02-21 01:29:51<SeP>2025-02-21 03:17:42<SeP>2025-02-21 05:05:33<SeP>2025-02-21 06:53:24<SeP>2025-02-21 08:41:15<SeP>2025-02-21 10:29:06<SeP>2025-02-21 12:16:57<SeP>2025-02-21 14:04:48<SeP>2025-02-21 15:52:39<SeP>2025-02-21 17:40:30<SeP>2025-02-21 19:28:21<SeP>2025-02-21 21:16:12<SeP>2025-02-21 23:04:03<SeP>2025-02-22 00:51:54<SeP>2025-02-22 02:39:45<SeP>2025-02-22 04:27:36<SeP>2025-02-22 06:15:27<SeP>2025-02-22 08:03:18<SeP>2025-02-22 09:51:09<SeP>2025-02-22 11:39:00<SeP>2025-02-22 13:26:51<SeP>2025-02-22 15:14:42<SeP>2025-02-22 17:02:33<SeP>2025-02-22 18:50:24<SeP>2025-02-22 20:38:15<SeP>2025-02-22 22:26:06<SeP>2025-02-23 00:13:57<SeP>2025-02-23 02:01:48<SeP>2025-02-23 03:49:39<SeP>2025-02-23 05:37:30<SeP>2025-02-23 07:25:21<SeP>2025-02-23 09:13:12<SeP>2025-02-23 11:01:03<SeP>2025-02-23 12:48:54<SeP>2025-02-23 14:36:45<SeP>2025-02-23 16:24:36<SeP>2025-02-23 18:12:27<SeP>2025-02-23 20:00:18<SeP>2025-02-23 21:48:09<SeP>2025-02-23 23:36:00<SeP>2025-02-24 01:23:51<SeP>2025-02-24 03:11:42<SeP>2025-02-24 04:59:33<SeP>2025-02-24 06:47:24<SeP>2025-02-24 08:35:15<SeP>2025-02-24 10:23:06<SeP>2025-02-24 12:10:57<SeP>2025-02-24 13:58:48<SeP>2025-02-24 15:46:39<SeP>2025-02-24 17:34:30<SeP>2025-02-24 19:22:21<SeP>2025-02-24 21:10:12<SeP>2025-02-24 22:58:03<SeP>2025-02-25 00:45:54<SeP>2025-02-25 02:33:45<SeP>2025-02-25 04:21:36<SeP>2025-02-25 06:09:27<SeP>2025-02-25 07:57:18<SeP>2025-02-25 09:45:09<SeP>2025-02-25 11:33:00<SeP>2025-02-25 13:20:51<SeP>2025-02-25 15:08:42<SeP>2025-02-25 16:56:33<SeP>2025-02-25 18:44:24<SeP>2025-02-25 20:32:15<SeP>2025-02-25 22:20:06<SeP>2025-02-26 00:07:57<SeP>2025-02-26 01:55:48<SeP>2025-02-26 03:43:39<SeP>2025-02-26 05:31:30<SeP>2025-02-26 07:19:21<SeP>2025-02-26 09:07:12<SeP>2025-02-26 10:55:03<SeP>2025-02-26 12:42:54<SeP>2025-02-26 14:30:45<SeP>2025-02-26 16:18:36<SeP>2025-02-26 18:06:27<SeP>2025-02-26 19:54:18<SeP>2025-02-26 21:42:09<SeP>2025-02-26 23:30:00<SeP>2025-02-27 01:17:51<SeP>2025-02-27 03:05:42<SeP>2025-02-27 04:53:33<SeP>2025-02-27 06:41:24<SeP>2025-02-27 08:29:15<SeP>2025-02-27 10:17:06<SeP>2025-02-27 12:04:57<SeP>2025-02-27 13:52:48<SeP>2025-02-27 15:40:39<SeP>2025-02-27 17:28:30<SeP>2025-02-27 19:16:21<SeP>2025-02-27 21:04:12<SeP>2025-02-27 22:52:03<SeP>2025-02-28 00:39:54<SeP>2025-02-28 02:27:45<SeP>2025-02-28 04:15:36<SeP>2025-02-28 06:03:27<SeP>2025-02-28 07:51:18<SeP>2025-02-28 09:39:09<SeP>2025-02-28 11:27:00<SeP>2025-02-28 13:14:51<SeP>2025-02-28 15:02:42<SeP>2025-02-28 16:50:33<SeP>2025-02-28 18:38:24<SeP>2025-02-28 20:26:15<SeP>2025-02-28 22:14:06<SeP>2025-03-01 00:01:57<SeP>2025-03-01 01:49:48<SeP>2025-03-01 03:37:39<SeP>2025-03-01 05:25:30<SeP>2025-03-01 07:13:21<SeP>2025-03-01 09:01:12<SeP>2025-03-01 10:49:03<SeP>2025-03-01 12:36:54<SeP>2025-03-01 14:24:45<SeP>2025-03-01 16:12:36<SeP>2025-03-01 18:00:27<SeP>2025-03-01 19:48:18<SeP>2025-03-01 21:36:09<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:11:51<SeP>2025-03-02 02:59:42<SeP>2025-03-02 04:47:33<SeP>2025-03-02 06:35:24<SeP>2025-03-02 08:23:15<SeP>2025-03-02 10:11:06<SeP>2025-03-02 11:58:57<SeP>2025-03-02 13:46:48<SeP>2025-03-02 15:34:39<SeP>2025-03-02 17:22:30<SeP>2025-03-02 19:10:21<SeP>2025-03-02 20:58:12<SeP>2025-03-02 22:46:03<SeP>2025-03-03 00:33:54<SeP>2025-03-03 02:21:45<SeP>2025-03-03 04:09:36<SeP>2025-03-03 05:57:27<SeP>2025-03-03 07:45:18<SeP>2025-03-03 09:33:09<SeP>2025-03-03 11:21:00<SeP>2025-03-03 13:08:51<SeP>2025-03-03 14:56:42<SeP>2025-03-03 16:44:33<SeP>2025-03-03 18:32:24<SeP>2025-03-03 20:20:15<SeP>2025-03-03 22:08:06<SeP>2025-03-03 23:55:57<SeP>2025-03-04 01:43:48<SeP>2025-03-04 03:31:39<SeP>2025-03-04 05:19:30<SeP>2025-03-04 07:07:21<SeP>2025-03-04 08:55:12<SeP>2025-03-04 10:43:03<SeP>2025-03-04 12:30:54<SeP>2025-03-04 14:18:45<SeP>2025-03-04 16:06:36<SeP>2025-03-04 17:54:27<SeP>2025-03-04 19:42:18<SeP>2025-03-04 21:30:09<SeP>2025-03-04 23:18:00<SeP>2025-03-05 01:05:51<SeP>2025-03-05 02:53:42<SeP>2025-03-05 04:41:33<SeP>2025-03-05 06:29:24<SeP>2025-03-05 08:17:15<SeP>2025-03-05 10:05:06<SeP>2025-03-05 11:52:57<SeP>2025-03-05 13:40:48<SeP>2025-03-05 15:28:39<SeP>2025-03-05 17:16:30<SeP>2025-03-05 19:04:21<SeP>2025-03-05 20:52:12<SeP>2025-03-05 22:40:03<SeP>2025-03-06 00:27:54<SeP>2025-03-06 02:15:45<SeP>2025-03-06 04:03:36<SeP>2025-03-06 05:51:27<SeP>2025-03-06 07:39:18<SeP>2025-03-06 09:27:09<SeP>2025-03-06 11:15:00<SeP>2025-03-06 13:02:51<SeP>2025-03-06 14:50:42<SeP>2025-03-06 16:38:33<SeP>2025-03-06 18:26:24<SeP>2025-03-06 20:14:15<SeP>2025-03-06 22:02:06<SeP>2025-03-06 23:49:57<SeP>2025-03-07 01:37:48<SeP>2025-03-07 03:25:39<SeP>2025-03-07 05:13:30<SeP>2025-03-07 07:01:21<SeP>2025-03-07 08:49:12<SeP>2025-03-07 10:37:03<SeP>2025-03-07 12:24:54<SeP>2025-03-07 14:12:45<SeP>2025-03-07 16:00:36<SeP>2025-03-07 17:48:27<SeP>2025-03-07 19:36:18<SeP>2025-03-07 21:24:09<SeP>2025-03-07 23:12:00<SeP>2025-03-08 00:59:51<SeP>2025-03-08 02:47:42<SeP>2025-03-08 04:35:33<SeP>2025-03-08 06:23:24<SeP>2025-03-08 08:11:15<SeP>2025-03-08 09:59:06<SeP>2025-03-08 11:46:57<SeP>2025-03-08 13:34:48<SeP>2025-03-08 15:22:39<SeP>2025-03-08 17:10:30<SeP>2025-03-08 18:58:21<SeP>2025-03-08 20:46:12<SeP>2025-03-08 22:34:03<SeP>2025-03-09 00:21:54<SeP>2025-03-09 03:09:45<SeP>2025-03-09 04:57:36<SeP>2025-03-09 06:45:27<SeP>2025-03-09 08:33:18<SeP>2025-03-09 10:21:09<SeP>2025-03-09 12:09:00<SeP>2025-03-09 13:56:51<SeP>2025-03-09 15:44:42<SeP>2025-03-09 17:32:33<SeP>2025-03-09 19:20:24<SeP>2025-03-09 21:08:15<SeP>2025-03-09 22:56:06<SeP>2025-03-10 00:43:57<SeP>2025-03-10 02:31:48<SeP>2025-03-10 04:19:39<SeP>2025-03-10 06:07:30<SeP>2025-03-10 07:55:21<SeP>2025-03-10 09:43:12<SeP>2025-03-10 11:31:03<SeP>2025-03-10 13:18:54<SeP>2025-03-10 15:06:45<SeP>2025-03-10 16:54:36<SeP>2025-03-10 18:42:27<SeP>2025-03-10 20:30:18<SeP>2025-03-10 22:18:09<SeP>2025-03-11 00:06:00<SeP>2025-03-11 01:53:51<SeP>2025-03-11 03:41:42<SeP>2025-03-11 05:29:33<SeP>2025-03-11 07:17:24<SeP>2025-03-11 09:05:15<SeP>2025-03-11 10:53:06<SeP>2025-03-11 12:40:57<SeP>2025-03-11 14:28:48<SeP>2025-03-11 16:16:39<SeP>2025-03-11 18:04:30<SeP>2025-03-11 19:52:21<SeP>2025-03-11 21:40:12<SeP>2025-03-11 23:28:03<SeP>2025-03-12 01:15:54<SeP>2025-03-12 03:03:45<SeP>2025-03-12 04:51:36<SeP>2025-03-12 06:39:27<SeP>2025-03-12 08:27:18<SeP>2025-03-12 10:15:09<SeP>2025-03-12 12:03:00<SeP>2025-03-12 13:50:51<SeP>2025-03-12 15:38:42<SeP>2025-03-12 17:26:33<SeP>2025-03-12 19:14:24<SeP>2025-03-12 21:02:15<SeP>2025-03-12 22:50:06<SeP>2025-03-13 00:37:57<SeP>2025-03-13 02:25:48<SeP>2025-03-13 04:13:39<SeP>2025-03-13 06:01:30<SeP>2025-03-13 07:49:21<SeP>2025-03-13 09:37:12<SeP>2025-03-13 11:25:03<SeP>2025-03-13 13:12:54<SeP>2025-03-13 15:00:45<SeP>2025-03-13 16:48:36<SeP>2025-03-13 18:36:27<SeP>2025-03-13 20:24:18<SeP>2025-03-13 22:12:09";
  const item1Label       = "Scans";
  const item1Data        = "65<SeP>90<SeP>52<SeP>117<SeP>80<SeP>60<SeP>59<SeP>86<SeP>56<SeP>79<SeP>91<SeP>166<SeP>72<SeP>148<SeP>80<SeP>125<SeP>51<SeP>65<SeP>74<SeP>108<SeP>138<SeP>122<SeP>35<SeP>72<SeP>120<SeP>50<SeP>79<SeP>77<SeP>85<SeP>101<SeP>153<SeP>154<SeP>123<SeP>47<SeP>50<SeP>59<SeP>89<SeP>68<SeP>111<SeP>83<SeP>72<SeP>85<SeP>62<SeP>150<SeP>169<SeP>124<SeP>104<SeP>82<SeP>30<SeP>46<SeP>66<SeP>118<SeP>82<SeP>84<SeP>50<SeP>80<SeP>55<SeP>139<SeP>71<SeP>75<SeP>61<SeP>64<SeP>86<SeP>68<SeP>129<SeP>115<SeP>86<SeP>83<SeP>60<SeP>43<SeP>76<SeP>99<SeP>82<SeP>81<SeP>71<SeP>26<SeP>46<SeP>42<SeP>165<SeP>80<SeP>59<SeP>147<SeP>30<SeP>122<SeP>83<SeP>154<SeP>61<SeP>96<SeP>86<SeP>42<SeP>43<SeP>90<SeP>60<SeP>47<SeP>50<SeP>115<SeP>78<SeP>181<SeP>94<SeP>80<SeP>62<SeP>37<SeP>78<SeP>73<SeP>80<SeP>67<SeP>103<SeP>70<SeP>81<SeP>95<SeP>91<SeP>47<SeP>130<SeP>94<SeP>78<SeP>62<SeP>25<SeP>45<SeP>95<SeP>84<SeP>93<SeP>62<SeP>150<SeP>83<SeP>104<SeP>76<SeP>40<SeP>53<SeP>106<SeP>68<SeP>76<SeP>90<SeP>112<SeP>66<SeP>78<SeP>97<SeP>130<SeP>83<SeP>59<SeP>25<SeP>49<SeP>68<SeP>92<SeP>53<SeP>72<SeP>89<SeP>69<SeP>53<SeP>101<SeP>142<SeP>84<SeP>44<SeP>32<SeP>43<SeP>63<SeP>198<SeP>106<SeP>81<SeP>58<SeP>68<SeP>118<SeP>53<SeP>83<SeP>105<SeP>193<SeP>68<SeP>48<SeP>37<SeP>164<SeP>55<SeP>77<SeP>78<SeP>113<SeP>108<SeP>79<SeP>93<SeP>89<SeP>52<SeP>82<SeP>99<SeP>61<SeP>81<SeP>92<SeP>87<SeP>115<SeP>83<SeP>93<SeP>164<SeP>46<SeP>76<SeP>133<SeP>77<SeP>44<SeP>71<SeP>180<SeP>90<SeP>175<SeP>79<SeP>94<SeP>110<SeP>51<SeP>71<SeP>96<SeP>89<SeP>48<SeP>89<SeP>38<SeP>79<SeP>61<SeP>60<SeP>51<SeP>115<SeP>69<SeP>98<SeP>108<SeP>63<SeP>85<SeP>58<SeP>47<SeP>81<SeP>58<SeP>55<SeP>54<SeP>54<SeP>96<SeP>77<SeP>72<SeP>87<SeP>76<SeP>46<SeP>31<SeP>208<SeP>68<SeP>81<SeP>66<SeP>66<SeP>64<SeP>113<SeP>46<SeP>39<SeP>55<SeP>183<SeP>83<SeP>67<SeP>26<SeP>80<SeP>68<SeP>45<SeP>41<SeP>61<SeP>164<SeP>67<SeP>58<SeP>119<SeP>64<SeP>40<SeP>70<SeP>17<SeP>48<SeP>43<SeP>29<SeP>97<SeP>59<SeP>74<SeP>59<SeP>87<SeP>262<SeP>59<SeP>33<SeP>60<SeP>50<SeP>118<SeP>123<SeP>89<SeP>50<SeP>79<SeP>34<SeP>204<SeP>41<SeP>118<SeP>85<SeP>59<SeP>18<SeP>115<SeP>32<SeP>42<SeP>68<SeP>53<SeP>47<SeP>99<SeP>120<SeP>106<SeP>92<SeP>53<SeP>71<SeP>34<SeP>51<SeP>123<SeP>123<SeP>44<SeP>85<SeP>169<SeP>67<SeP>63<SeP>52<SeP>63<SeP>83<SeP>434<SeP>44<SeP>43<SeP>23<SeP>31<SeP>47<SeP>48<SeP>60<SeP>109<SeP>76<SeP>176<SeP>73<SeP>203<SeP>219<SeP>50<SeP>104<SeP>300<SeP>111<SeP>176<SeP>56<SeP>53<SeP>64<SeP>43<SeP>69<SeP>54<SeP>68<SeP>21<SeP>21<SeP>92<SeP>43<SeP>94<SeP>61<SeP>66<SeP>64<SeP>30<SeP>61<SeP>26<SeP>32<SeP>49<SeP>98<SeP>29<SeP>797<SeP>60<SeP>101<SeP>71<SeP>154<SeP>98<SeP>81<SeP>27<SeP>16<SeP>51<SeP>171<SeP>85<SeP>89<SeP>72<SeP>42<SeP>112<SeP>15<SeP>51<SeP>114<SeP>129<SeP>60<SeP>48<SeP>53<SeP>62<SeP>42<SeP>112<SeP>33<SeP>103<SeP>68<SeP>77<SeP>74<SeP>62<SeP>95<SeP>53<SeP>111<SeP>168<SeP>81<SeP>133<SeP>93<SeP>80<SeP>80<SeP>40<SeP>67<SeP>69<SeP>136<SeP>91<SeP>97<SeP>58<SeP>71<SeP>75<SeP>68<SeP>73";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "194<SeP>439<SeP>897<SeP>3214<SeP>2753<SeP>510<SeP>312<SeP>318<SeP>224<SeP>661<SeP>266<SeP>185<SeP>126<SeP>32<SeP>51<SeP>568<SeP>93<SeP>235<SeP>135<SeP>325<SeP>100<SeP>251<SeP>893<SeP>213<SeP>533<SeP>130<SeP>190<SeP>239<SeP>182<SeP>485<SeP>266<SeP>277<SeP>358<SeP>40<SeP>293<SeP>364<SeP>173<SeP>382<SeP>201<SeP>159<SeP>26<SeP>253<SeP>59<SeP>545<SeP>367<SeP>145<SeP>182<SeP>240<SeP>103<SeP>46<SeP>92<SeP>413<SeP>107<SeP>215<SeP>68<SeP>52<SeP>25<SeP>475<SeP>174<SeP>208<SeP>45<SeP>404<SeP>200<SeP>182<SeP>588<SeP>184<SeP>277<SeP>229<SeP>368<SeP>162<SeP>196<SeP>388<SeP>312<SeP>295<SeP>242<SeP>80<SeP>129<SeP>506<SeP>43<SeP>121<SeP>207<SeP>514<SeP>100<SeP>179<SeP>295<SeP>46<SeP>281<SeP>192<SeP>265<SeP>274<SeP>221<SeP>239<SeP>9<SeP>206<SeP>118<SeP>150<SeP>496<SeP>125<SeP>38<SeP>146<SeP>60<SeP>25<SeP>90<SeP>419<SeP>177<SeP>173<SeP>179<SeP>188<SeP>222<SeP>102<SeP>90<SeP>159<SeP>23<SeP>8<SeP>250<SeP>201<SeP>185<SeP>710<SeP>480<SeP>351<SeP>644<SeP>372<SeP>536<SeP>329<SeP>196<SeP>525<SeP>450<SeP>383<SeP>392<SeP>354<SeP>1073<SeP>574<SeP>929<SeP>451<SeP>290<SeP>262<SeP>329<SeP>277<SeP>736<SeP>528<SeP>567<SeP>521<SeP>271<SeP>410<SeP>520<SeP>624<SeP>808<SeP>272<SeP>502<SeP>427<SeP>720<SeP>274<SeP>339<SeP>507<SeP>702<SeP>613<SeP>478<SeP>341<SeP>90<SeP>163<SeP>264<SeP>148<SeP>159<SeP>521<SeP>57<SeP>119<SeP>359<SeP>64<SeP>93<SeP>50<SeP>405<SeP>225<SeP>221<SeP>148<SeP>359<SeP>256<SeP>73<SeP>245<SeP>116<SeP>382<SeP>266<SeP>290<SeP>133<SeP>212<SeP>42<SeP>140<SeP>92<SeP>155<SeP>29<SeP>201<SeP>221<SeP>53<SeP>174<SeP>119<SeP>85<SeP>69<SeP>69<SeP>45<SeP>337<SeP>202<SeP>331<SeP>47<SeP>270<SeP>424<SeP>218<SeP>140<SeP>106<SeP>205<SeP>224<SeP>141<SeP>30<SeP>44<SeP>144<SeP>139<SeP>245<SeP>90<SeP>211<SeP>244<SeP>106<SeP>384<SeP>77<SeP>353<SeP>68<SeP>70<SeP>48<SeP>37<SeP>147<SeP>31<SeP>26<SeP>82<SeP>40<SeP>83<SeP>82<SeP>19<SeP>113<SeP>171<SeP>129<SeP>68<SeP>107<SeP>170<SeP>175<SeP>431<SeP>82<SeP>63<SeP>310<SeP>15<SeP>25<SeP>60<SeP>222<SeP>24<SeP>85<SeP>56<SeP>182<SeP>92<SeP>68<SeP>301<SeP>80<SeP>52<SeP>79<SeP>45<SeP>32<SeP>406<SeP>131<SeP>84<SeP>52<SeP>99<SeP>225<SeP>42<SeP>172<SeP>314<SeP>28<SeP>26<SeP>101<SeP>215<SeP>44<SeP>61<SeP>53<SeP>114<SeP>14<SeP>89<SeP>353<SeP>119<SeP>94<SeP>112<SeP>66<SeP>42<SeP>32<SeP>27<SeP>127<SeP>229<SeP>49<SeP>135<SeP>228<SeP>95<SeP>29<SeP>18<SeP>170<SeP>124<SeP>190<SeP>59<SeP>106<SeP>84<SeP>93<SeP>63<SeP>163<SeP>48<SeP>157<SeP>114<SeP>101<SeP>144<SeP>546<SeP>164<SeP>71<SeP>119<SeP>143<SeP>39<SeP>46<SeP>117<SeP>57<SeP>99<SeP>104<SeP>237<SeP>56<SeP>19<SeP>13<SeP>153<SeP>138<SeP>33<SeP>69<SeP>25<SeP>17<SeP>74<SeP>287<SeP>57<SeP>104<SeP>161<SeP>28<SeP>12<SeP>30<SeP>86<SeP>39<SeP>56<SeP>303<SeP>33<SeP>12<SeP>42<SeP>500<SeP>394<SeP>297<SeP>337<SeP>43<SeP>120<SeP>34<SeP>83<SeP>104<SeP>78<SeP>78<SeP>27<SeP>381<SeP>156<SeP>278<SeP>69<SeP>70<SeP>110<SeP>151<SeP>30<SeP>159<SeP>75<SeP>565<SeP>110<SeP>30<SeP>55<SeP>147<SeP>103<SeP>183<SeP>29<SeP>19<SeP>106<SeP>178<SeP>111<SeP>181<SeP>140<SeP>366<SeP>126<SeP>177<SeP>173<SeP>130<SeP>256<SeP>132<SeP>179<SeP>124<SeP>102<SeP>134<SeP>218<SeP>139<SeP>388<SeP>149<SeP>132<SeP>32<SeP>65";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-12 00:00:00<SeP>2025-02-12 01:47:51<SeP>2025-02-12 03:35:42<SeP>2025-02-12 05:23:33<SeP>2025-02-12 07:11:24<SeP>2025-02-12 08:59:15<SeP>2025-02-12 10:47:06<SeP>2025-02-12 12:34:57<SeP>2025-02-12 14:22:48<SeP>2025-02-12 16:10:39<SeP>2025-02-12 17:58:30<SeP>2025-02-12 19:46:21<SeP>2025-02-12 21:34:12<SeP>2025-02-12 23:22:03<SeP>2025-02-13 01:09:54<SeP>2025-02-13 02:57:45<SeP>2025-02-13 04:45:36<SeP>2025-02-13 06:33:27<SeP>2025-02-13 08:21:18<SeP>2025-02-13 10:09:09<SeP>2025-02-13 11:57:00<SeP>2025-02-13 13:44:51<SeP>2025-02-13 15:32:42<SeP>2025-02-13 17:20:33<SeP>2025-02-13 19:08:24<SeP>2025-02-13 20:56:15<SeP>2025-02-13 22:44:06<SeP>2025-02-14 00:31:57<SeP>2025-02-14 02:19:48<SeP>2025-02-14 04:07:39<SeP>2025-02-14 05:55:30<SeP>2025-02-14 07:43:21<SeP>2025-02-14 09:31:12<SeP>2025-02-14 11:19:03<SeP>2025-02-14 13:06:54<SeP>2025-02-14 14:54:45<SeP>2025-02-14 16:42:36<SeP>2025-02-14 18:30:27<SeP>2025-02-14 20:18:18<SeP>2025-02-14 22:06:09<SeP>2025-02-14 23:54:00<SeP>2025-02-15 01:41:51<SeP>2025-02-15 03:29:42<SeP>2025-02-15 05:17:33<SeP>2025-02-15 07:05:24<SeP>2025-02-15 08:53:15<SeP>2025-02-15 10:41:06<SeP>2025-02-15 12:28:57<SeP>2025-02-15 14:16:48<SeP>2025-02-15 16:04:39<SeP>2025-02-15 17:52:30<SeP>2025-02-15 19:40:21<SeP>2025-02-15 21:28:12<SeP>2025-02-15 23:16:03<SeP>2025-02-16 01:03:54<SeP>2025-02-16 02:51:45<SeP>2025-02-16 04:39:36<SeP>2025-02-16 06:27:27<SeP>2025-02-16 08:15:18<SeP>2025-02-16 10:03:09<SeP>2025-02-16 11:51:00<SeP>2025-02-16 13:38:51<SeP>2025-02-16 15:26:42<SeP>2025-02-16 17:14:33<SeP>2025-02-16 19:02:24<SeP>2025-02-16 20:50:15<SeP>2025-02-16 22:38:06<SeP>2025-02-17 00:25:57<SeP>2025-02-17 02:13:48<SeP>2025-02-17 04:01:39<SeP>2025-02-17 05:49:30<SeP>2025-02-17 07:37:21<SeP>2025-02-17 09:25:12<SeP>2025-02-17 11:13:03<SeP>2025-02-17 13:00:54<SeP>2025-02-17 14:48:45<SeP>2025-02-17 16:36:36<SeP>2025-02-17 18:24:27<SeP>2025-02-17 20:12:18<SeP>2025-02-17 22:00:09<SeP>2025-02-17 23:48:00<SeP>2025-02-18 01:35:51<SeP>2025-02-18 03:23:42<SeP>2025-02-18 05:11:33<SeP>2025-02-18 06:59:24<SeP>2025-02-18 08:47:15<SeP>2025-02-18 10:35:06<SeP>2025-02-18 12:22:57<SeP>2025-02-18 14:10:48<SeP>2025-02-18 15:58:39<SeP>2025-02-18 17:46:30<SeP>2025-02-18 19:34:21<SeP>2025-02-18 21:22:12<SeP>2025-02-18 23:10:03<SeP>2025-02-19 00:57:54<SeP>2025-02-19 02:45:45<SeP>2025-02-19 04:33:36<SeP>2025-02-19 06:21:27<SeP>2025-02-19 08:09:18<SeP>2025-02-19 09:57:09<SeP>2025-02-19 11:45:00<SeP>2025-02-19 13:32:51<SeP>2025-02-19 15:20:42<SeP>2025-02-19 17:08:33<SeP>2025-02-19 18:56:24<SeP>2025-02-19 20:44:15<SeP>2025-02-19 22:32:06<SeP>2025-02-20 00:19:57<SeP>2025-02-20 02:07:48<SeP>2025-02-20 03:55:39<SeP>2025-02-20 05:43:30<SeP>2025-02-20 07:31:21<SeP>2025-02-20 09:19:12<SeP>2025-02-20 11:07:03<SeP>2025-02-20 12:54:54<SeP>2025-02-20 14:42:45<SeP>2025-02-20 16:30:36<SeP>2025-02-20 18:18:27<SeP>2025-02-20 20:06:18<SeP>2025-02-20 21:54:09<SeP>2025-02-20 23:42:00<SeP>2025-02-21 01:29:51<SeP>2025-02-21 03:17:42<SeP>2025-02-21 05:05:33<SeP>2025-02-21 06:53:24<SeP>2025-02-21 08:41:15<SeP>2025-02-21 10:29:06<SeP>2025-02-21 12:16:57<SeP>2025-02-21 14:04:48<SeP>2025-02-21 15:52:39<SeP>2025-02-21 17:40:30<SeP>2025-02-21 19:28:21<SeP>2025-02-21 21:16:12<SeP>2025-02-21 23:04:03<SeP>2025-02-22 00:51:54<SeP>2025-02-22 02:39:45<SeP>2025-02-22 04:27:36<SeP>2025-02-22 06:15:27<SeP>2025-02-22 08:03:18<SeP>2025-02-22 09:51:09<SeP>2025-02-22 11:39:00<SeP>2025-02-22 13:26:51<SeP>2025-02-22 15:14:42<SeP>2025-02-22 17:02:33<SeP>2025-02-22 18:50:24<SeP>2025-02-22 20:38:15<SeP>2025-02-22 22:26:06<SeP>2025-02-23 00:13:57<SeP>2025-02-23 02:01:48<SeP>2025-02-23 03:49:39<SeP>2025-02-23 05:37:30<SeP>2025-02-23 07:25:21<SeP>2025-02-23 09:13:12<SeP>2025-02-23 11:01:03<SeP>2025-02-23 12:48:54<SeP>2025-02-23 14:36:45<SeP>2025-02-23 16:24:36<SeP>2025-02-23 18:12:27<SeP>2025-02-23 20:00:18<SeP>2025-02-23 21:48:09<SeP>2025-02-23 23:36:00<SeP>2025-02-24 01:23:51<SeP>2025-02-24 03:11:42<SeP>2025-02-24 04:59:33<SeP>2025-02-24 06:47:24<SeP>2025-02-24 08:35:15<SeP>2025-02-24 10:23:06<SeP>2025-02-24 12:10:57<SeP>2025-02-24 13:58:48<SeP>2025-02-24 15:46:39<SeP>2025-02-24 17:34:30<SeP>2025-02-24 19:22:21<SeP>2025-02-24 21:10:12<SeP>2025-02-24 22:58:03<SeP>2025-02-25 00:45:54<SeP>2025-02-25 02:33:45<SeP>2025-02-25 04:21:36<SeP>2025-02-25 06:09:27<SeP>2025-02-25 07:57:18<SeP>2025-02-25 09:45:09<SeP>2025-02-25 11:33:00<SeP>2025-02-25 13:20:51<SeP>2025-02-25 15:08:42<SeP>2025-02-25 16:56:33<SeP>2025-02-25 18:44:24<SeP>2025-02-25 20:32:15<SeP>2025-02-25 22:20:06<SeP>2025-02-26 00:07:57<SeP>2025-02-26 01:55:48<SeP>2025-02-26 03:43:39<SeP>2025-02-26 05:31:30<SeP>2025-02-26 07:19:21<SeP>2025-02-26 09:07:12<SeP>2025-02-26 10:55:03<SeP>2025-02-26 12:42:54<SeP>2025-02-26 14:30:45<SeP>2025-02-26 16:18:36<SeP>2025-02-26 18:06:27<SeP>2025-02-26 19:54:18<SeP>2025-02-26 21:42:09<SeP>2025-02-26 23:30:00<SeP>2025-02-27 01:17:51<SeP>2025-02-27 03:05:42<SeP>2025-02-27 04:53:33<SeP>2025-02-27 06:41:24<SeP>2025-02-27 08:29:15<SeP>2025-02-27 10:17:06<SeP>2025-02-27 12:04:57<SeP>2025-02-27 13:52:48<SeP>2025-02-27 15:40:39<SeP>2025-02-27 17:28:30<SeP>2025-02-27 19:16:21<SeP>2025-02-27 21:04:12<SeP>2025-02-27 22:52:03<SeP>2025-02-28 00:39:54<SeP>2025-02-28 02:27:45<SeP>2025-02-28 04:15:36<SeP>2025-02-28 06:03:27<SeP>2025-02-28 07:51:18<SeP>2025-02-28 09:39:09<SeP>2025-02-28 11:27:00<SeP>2025-02-28 13:14:51<SeP>2025-02-28 15:02:42<SeP>2025-02-28 16:50:33<SeP>2025-02-28 18:38:24<SeP>2025-02-28 20:26:15<SeP>2025-02-28 22:14:06<SeP>2025-03-01 00:01:57<SeP>2025-03-01 01:49:48<SeP>2025-03-01 03:37:39<SeP>2025-03-01 05:25:30<SeP>2025-03-01 07:13:21<SeP>2025-03-01 09:01:12<SeP>2025-03-01 10:49:03<SeP>2025-03-01 12:36:54<SeP>2025-03-01 14:24:45<SeP>2025-03-01 16:12:36<SeP>2025-03-01 18:00:27<SeP>2025-03-01 19:48:18<SeP>2025-03-01 21:36:09<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:11:51<SeP>2025-03-02 02:59:42<SeP>2025-03-02 04:47:33<SeP>2025-03-02 06:35:24<SeP>2025-03-02 08:23:15<SeP>2025-03-02 10:11:06<SeP>2025-03-02 11:58:57<SeP>2025-03-02 13:46:48<SeP>2025-03-02 15:34:39<SeP>2025-03-02 17:22:30<SeP>2025-03-02 19:10:21<SeP>2025-03-02 20:58:12<SeP>2025-03-02 22:46:03<SeP>2025-03-03 00:33:54<SeP>2025-03-03 02:21:45<SeP>2025-03-03 04:09:36<SeP>2025-03-03 05:57:27<SeP>2025-03-03 07:45:18<SeP>2025-03-03 09:33:09<SeP>2025-03-03 11:21:00<SeP>2025-03-03 13:08:51<SeP>2025-03-03 14:56:42<SeP>2025-03-03 16:44:33<SeP>2025-03-03 18:32:24<SeP>2025-03-03 20:20:15<SeP>2025-03-03 22:08:06<SeP>2025-03-03 23:55:57<SeP>2025-03-04 01:43:48<SeP>2025-03-04 03:31:39<SeP>2025-03-04 05:19:30<SeP>2025-03-04 07:07:21<SeP>2025-03-04 08:55:12<SeP>2025-03-04 10:43:03<SeP>2025-03-04 12:30:54<SeP>2025-03-04 14:18:45<SeP>2025-03-04 16:06:36<SeP>2025-03-04 17:54:27<SeP>2025-03-04 19:42:18<SeP>2025-03-04 21:30:09<SeP>2025-03-04 23:18:00<SeP>2025-03-05 01:05:51<SeP>2025-03-05 02:53:42<SeP>2025-03-05 04:41:33<SeP>2025-03-05 06:29:24<SeP>2025-03-05 08:17:15<SeP>2025-03-05 10:05:06<SeP>2025-03-05 11:52:57<SeP>2025-03-05 13:40:48<SeP>2025-03-05 15:28:39<SeP>2025-03-05 17:16:30<SeP>2025-03-05 19:04:21<SeP>2025-03-05 20:52:12<SeP>2025-03-05 22:40:03<SeP>2025-03-06 00:27:54<SeP>2025-03-06 02:15:45<SeP>2025-03-06 04:03:36<SeP>2025-03-06 05:51:27<SeP>2025-03-06 07:39:18<SeP>2025-03-06 09:27:09<SeP>2025-03-06 11:15:00<SeP>2025-03-06 13:02:51<SeP>2025-03-06 14:50:42<SeP>2025-03-06 16:38:33<SeP>2025-03-06 18:26:24<SeP>2025-03-06 20:14:15<SeP>2025-03-06 22:02:06<SeP>2025-03-06 23:49:57<SeP>2025-03-07 01:37:48<SeP>2025-03-07 03:25:39<SeP>2025-03-07 05:13:30<SeP>2025-03-07 07:01:21<SeP>2025-03-07 08:49:12<SeP>2025-03-07 10:37:03<SeP>2025-03-07 12:24:54<SeP>2025-03-07 14:12:45<SeP>2025-03-07 16:00:36<SeP>2025-03-07 17:48:27<SeP>2025-03-07 19:36:18<SeP>2025-03-07 21:24:09<SeP>2025-03-07 23:12:00<SeP>2025-03-08 00:59:51<SeP>2025-03-08 02:47:42<SeP>2025-03-08 04:35:33<SeP>2025-03-08 06:23:24<SeP>2025-03-08 08:11:15<SeP>2025-03-08 09:59:06<SeP>2025-03-08 11:46:57<SeP>2025-03-08 13:34:48<SeP>2025-03-08 15:22:39<SeP>2025-03-08 17:10:30<SeP>2025-03-08 18:58:21<SeP>2025-03-08 20:46:12<SeP>2025-03-08 22:34:03<SeP>2025-03-09 00:21:54<SeP>2025-03-09 03:09:45<SeP>2025-03-09 04:57:36<SeP>2025-03-09 06:45:27<SeP>2025-03-09 08:33:18<SeP>2025-03-09 10:21:09<SeP>2025-03-09 12:09:00<SeP>2025-03-09 13:56:51<SeP>2025-03-09 15:44:42<SeP>2025-03-09 17:32:33<SeP>2025-03-09 19:20:24<SeP>2025-03-09 21:08:15<SeP>2025-03-09 22:56:06<SeP>2025-03-10 00:43:57<SeP>2025-03-10 02:31:48<SeP>2025-03-10 04:19:39<SeP>2025-03-10 06:07:30<SeP>2025-03-10 07:55:21<SeP>2025-03-10 09:43:12<SeP>2025-03-10 11:31:03<SeP>2025-03-10 13:18:54<SeP>2025-03-10 15:06:45<SeP>2025-03-10 16:54:36<SeP>2025-03-10 18:42:27<SeP>2025-03-10 20:30:18<SeP>2025-03-10 22:18:09<SeP>2025-03-11 00:06:00<SeP>2025-03-11 01:53:51<SeP>2025-03-11 03:41:42<SeP>2025-03-11 05:29:33<SeP>2025-03-11 07:17:24<SeP>2025-03-11 09:05:15<SeP>2025-03-11 10:53:06<SeP>2025-03-11 12:40:57<SeP>2025-03-11 14:28:48<SeP>2025-03-11 16:16:39<SeP>2025-03-11 18:04:30<SeP>2025-03-11 19:52:21<SeP>2025-03-11 21:40:12<SeP>2025-03-11 23:28:03<SeP>2025-03-12 01:15:54<SeP>2025-03-12 03:03:45<SeP>2025-03-12 04:51:36<SeP>2025-03-12 06:39:27<SeP>2025-03-12 08:27:18<SeP>2025-03-12 10:15:09<SeP>2025-03-12 12:03:00<SeP>2025-03-12 13:50:51<SeP>2025-03-12 15:38:42<SeP>2025-03-12 17:26:33<SeP>2025-03-12 19:14:24<SeP>2025-03-12 21:02:15<SeP>2025-03-12 22:50:06<SeP>2025-03-13 00:37:57<SeP>2025-03-13 02:25:48<SeP>2025-03-13 04:13:39<SeP>2025-03-13 06:01:30<SeP>2025-03-13 07:49:21<SeP>2025-03-13 09:37:12<SeP>2025-03-13 11:25:03<SeP>2025-03-13 13:12:54<SeP>2025-03-13 15:00:45<SeP>2025-03-13 16:48:36<SeP>2025-03-13 18:36:27<SeP>2025-03-13 20:24:18<SeP>2025-03-13 22:12:09";
  const itemLabel       = "Scans";
  const itemData        = "65<SeP>90<SeP>52<SeP>117<SeP>80<SeP>60<SeP>59<SeP>86<SeP>56<SeP>79<SeP>91<SeP>166<SeP>72<SeP>148<SeP>80<SeP>125<SeP>51<SeP>65<SeP>74<SeP>108<SeP>138<SeP>122<SeP>35<SeP>72<SeP>120<SeP>50<SeP>79<SeP>77<SeP>85<SeP>101<SeP>153<SeP>154<SeP>123<SeP>47<SeP>50<SeP>59<SeP>89<SeP>68<SeP>111<SeP>83<SeP>72<SeP>85<SeP>62<SeP>150<SeP>169<SeP>124<SeP>104<SeP>82<SeP>30<SeP>46<SeP>66<SeP>118<SeP>82<SeP>84<SeP>50<SeP>80<SeP>55<SeP>139<SeP>71<SeP>75<SeP>61<SeP>64<SeP>86<SeP>68<SeP>129<SeP>115<SeP>86<SeP>83<SeP>60<SeP>43<SeP>76<SeP>99<SeP>82<SeP>81<SeP>71<SeP>26<SeP>46<SeP>42<SeP>165<SeP>80<SeP>59<SeP>147<SeP>30<SeP>122<SeP>83<SeP>154<SeP>61<SeP>96<SeP>86<SeP>42<SeP>43<SeP>90<SeP>60<SeP>47<SeP>50<SeP>115<SeP>78<SeP>181<SeP>94<SeP>80<SeP>62<SeP>37<SeP>78<SeP>73<SeP>80<SeP>67<SeP>103<SeP>70<SeP>81<SeP>95<SeP>91<SeP>47<SeP>130<SeP>94<SeP>78<SeP>62<SeP>25<SeP>45<SeP>95<SeP>84<SeP>93<SeP>62<SeP>150<SeP>83<SeP>104<SeP>76<SeP>40<SeP>53<SeP>106<SeP>68<SeP>76<SeP>90<SeP>112<SeP>66<SeP>78<SeP>97<SeP>130<SeP>83<SeP>59<SeP>25<SeP>49<SeP>68<SeP>92<SeP>53<SeP>72<SeP>89<SeP>69<SeP>53<SeP>101<SeP>142<SeP>84<SeP>44<SeP>32<SeP>43<SeP>63<SeP>198<SeP>106<SeP>81<SeP>58<SeP>68<SeP>118<SeP>53<SeP>83<SeP>105<SeP>193<SeP>68<SeP>48<SeP>37<SeP>164<SeP>55<SeP>77<SeP>78<SeP>113<SeP>108<SeP>79<SeP>93<SeP>89<SeP>52<SeP>82<SeP>99<SeP>61<SeP>81<SeP>92<SeP>87<SeP>115<SeP>83<SeP>93<SeP>164<SeP>46<SeP>76<SeP>133<SeP>77<SeP>44<SeP>71<SeP>180<SeP>90<SeP>175<SeP>79<SeP>94<SeP>110<SeP>51<SeP>71<SeP>96<SeP>89<SeP>48<SeP>89<SeP>38<SeP>79<SeP>61<SeP>60<SeP>51<SeP>115<SeP>69<SeP>98<SeP>108<SeP>63<SeP>85<SeP>58<SeP>47<SeP>81<SeP>58<SeP>55<SeP>54<SeP>54<SeP>96<SeP>77<SeP>72<SeP>87<SeP>76<SeP>46<SeP>31<SeP>208<SeP>68<SeP>81<SeP>66<SeP>66<SeP>64<SeP>113<SeP>46<SeP>39<SeP>55<SeP>183<SeP>83<SeP>67<SeP>26<SeP>80<SeP>68<SeP>45<SeP>41<SeP>61<SeP>164<SeP>67<SeP>58<SeP>119<SeP>64<SeP>40<SeP>70<SeP>17<SeP>48<SeP>43<SeP>29<SeP>97<SeP>59<SeP>74<SeP>59<SeP>87<SeP>262<SeP>59<SeP>33<SeP>60<SeP>50<SeP>118<SeP>123<SeP>89<SeP>50<SeP>79<SeP>34<SeP>204<SeP>41<SeP>118<SeP>85<SeP>59<SeP>18<SeP>115<SeP>32<SeP>42<SeP>68<SeP>53<SeP>47<SeP>99<SeP>120<SeP>106<SeP>92<SeP>53<SeP>71<SeP>34<SeP>51<SeP>123<SeP>123<SeP>44<SeP>85<SeP>169<SeP>67<SeP>63<SeP>52<SeP>63<SeP>83<SeP>434<SeP>44<SeP>43<SeP>23<SeP>31<SeP>47<SeP>48<SeP>60<SeP>109<SeP>76<SeP>176<SeP>73<SeP>203<SeP>219<SeP>50<SeP>104<SeP>300<SeP>111<SeP>176<SeP>56<SeP>53<SeP>64<SeP>43<SeP>69<SeP>54<SeP>68<SeP>21<SeP>21<SeP>92<SeP>43<SeP>94<SeP>61<SeP>66<SeP>64<SeP>30<SeP>61<SeP>26<SeP>32<SeP>49<SeP>98<SeP>29<SeP>797<SeP>60<SeP>101<SeP>71<SeP>154<SeP>98<SeP>81<SeP>27<SeP>16<SeP>51<SeP>171<SeP>85<SeP>89<SeP>72<SeP>42<SeP>112<SeP>15<SeP>51<SeP>114<SeP>129<SeP>60<SeP>48<SeP>53<SeP>62<SeP>42<SeP>112<SeP>33<SeP>103<SeP>68<SeP>77<SeP>74<SeP>62<SeP>95<SeP>53<SeP>111<SeP>168<SeP>81<SeP>133<SeP>93<SeP>80<SeP>80<SeP>40<SeP>67<SeP>69<SeP>136<SeP>91<SeP>97<SeP>58<SeP>71<SeP>75<SeP>68<SeP>73";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-12 00:00:00<SeP>2025-02-12 01:47:51<SeP>2025-02-12 03:35:42<SeP>2025-02-12 05:23:33<SeP>2025-02-12 07:11:24<SeP>2025-02-12 08:59:15<SeP>2025-02-12 10:47:06<SeP>2025-02-12 12:34:57<SeP>2025-02-12 14:22:48<SeP>2025-02-12 16:10:39<SeP>2025-02-12 17:58:30<SeP>2025-02-12 19:46:21<SeP>2025-02-12 21:34:12<SeP>2025-02-12 23:22:03<SeP>2025-02-13 01:09:54<SeP>2025-02-13 02:57:45<SeP>2025-02-13 04:45:36<SeP>2025-02-13 06:33:27<SeP>2025-02-13 08:21:18<SeP>2025-02-13 10:09:09<SeP>2025-02-13 11:57:00<SeP>2025-02-13 13:44:51<SeP>2025-02-13 15:32:42<SeP>2025-02-13 17:20:33<SeP>2025-02-13 19:08:24<SeP>2025-02-13 20:56:15<SeP>2025-02-13 22:44:06<SeP>2025-02-14 00:31:57<SeP>2025-02-14 02:19:48<SeP>2025-02-14 04:07:39<SeP>2025-02-14 05:55:30<SeP>2025-02-14 07:43:21<SeP>2025-02-14 09:31:12<SeP>2025-02-14 11:19:03<SeP>2025-02-14 13:06:54<SeP>2025-02-14 14:54:45<SeP>2025-02-14 16:42:36<SeP>2025-02-14 18:30:27<SeP>2025-02-14 20:18:18<SeP>2025-02-14 22:06:09<SeP>2025-02-14 23:54:00<SeP>2025-02-15 01:41:51<SeP>2025-02-15 03:29:42<SeP>2025-02-15 05:17:33<SeP>2025-02-15 07:05:24<SeP>2025-02-15 08:53:15<SeP>2025-02-15 10:41:06<SeP>2025-02-15 12:28:57<SeP>2025-02-15 14:16:48<SeP>2025-02-15 16:04:39<SeP>2025-02-15 17:52:30<SeP>2025-02-15 19:40:21<SeP>2025-02-15 21:28:12<SeP>2025-02-15 23:16:03<SeP>2025-02-16 01:03:54<SeP>2025-02-16 02:51:45<SeP>2025-02-16 04:39:36<SeP>2025-02-16 06:27:27<SeP>2025-02-16 08:15:18<SeP>2025-02-16 10:03:09<SeP>2025-02-16 11:51:00<SeP>2025-02-16 13:38:51<SeP>2025-02-16 15:26:42<SeP>2025-02-16 17:14:33<SeP>2025-02-16 19:02:24<SeP>2025-02-16 20:50:15<SeP>2025-02-16 22:38:06<SeP>2025-02-17 00:25:57<SeP>2025-02-17 02:13:48<SeP>2025-02-17 04:01:39<SeP>2025-02-17 05:49:30<SeP>2025-02-17 07:37:21<SeP>2025-02-17 09:25:12<SeP>2025-02-17 11:13:03<SeP>2025-02-17 13:00:54<SeP>2025-02-17 14:48:45<SeP>2025-02-17 16:36:36<SeP>2025-02-17 18:24:27<SeP>2025-02-17 20:12:18<SeP>2025-02-17 22:00:09<SeP>2025-02-17 23:48:00<SeP>2025-02-18 01:35:51<SeP>2025-02-18 03:23:42<SeP>2025-02-18 05:11:33<SeP>2025-02-18 06:59:24<SeP>2025-02-18 08:47:15<SeP>2025-02-18 10:35:06<SeP>2025-02-18 12:22:57<SeP>2025-02-18 14:10:48<SeP>2025-02-18 15:58:39<SeP>2025-02-18 17:46:30<SeP>2025-02-18 19:34:21<SeP>2025-02-18 21:22:12<SeP>2025-02-18 23:10:03<SeP>2025-02-19 00:57:54<SeP>2025-02-19 02:45:45<SeP>2025-02-19 04:33:36<SeP>2025-02-19 06:21:27<SeP>2025-02-19 08:09:18<SeP>2025-02-19 09:57:09<SeP>2025-02-19 11:45:00<SeP>2025-02-19 13:32:51<SeP>2025-02-19 15:20:42<SeP>2025-02-19 17:08:33<SeP>2025-02-19 18:56:24<SeP>2025-02-19 20:44:15<SeP>2025-02-19 22:32:06<SeP>2025-02-20 00:19:57<SeP>2025-02-20 02:07:48<SeP>2025-02-20 03:55:39<SeP>2025-02-20 05:43:30<SeP>2025-02-20 07:31:21<SeP>2025-02-20 09:19:12<SeP>2025-02-20 11:07:03<SeP>2025-02-20 12:54:54<SeP>2025-02-20 14:42:45<SeP>2025-02-20 16:30:36<SeP>2025-02-20 18:18:27<SeP>2025-02-20 20:06:18<SeP>2025-02-20 21:54:09<SeP>2025-02-20 23:42:00<SeP>2025-02-21 01:29:51<SeP>2025-02-21 03:17:42<SeP>2025-02-21 05:05:33<SeP>2025-02-21 06:53:24<SeP>2025-02-21 08:41:15<SeP>2025-02-21 10:29:06<SeP>2025-02-21 12:16:57<SeP>2025-02-21 14:04:48<SeP>2025-02-21 15:52:39<SeP>2025-02-21 17:40:30<SeP>2025-02-21 19:28:21<SeP>2025-02-21 21:16:12<SeP>2025-02-21 23:04:03<SeP>2025-02-22 00:51:54<SeP>2025-02-22 02:39:45<SeP>2025-02-22 04:27:36<SeP>2025-02-22 06:15:27<SeP>2025-02-22 08:03:18<SeP>2025-02-22 09:51:09<SeP>2025-02-22 11:39:00<SeP>2025-02-22 13:26:51<SeP>2025-02-22 15:14:42<SeP>2025-02-22 17:02:33<SeP>2025-02-22 18:50:24<SeP>2025-02-22 20:38:15<SeP>2025-02-22 22:26:06<SeP>2025-02-23 00:13:57<SeP>2025-02-23 02:01:48<SeP>2025-02-23 03:49:39<SeP>2025-02-23 05:37:30<SeP>2025-02-23 07:25:21<SeP>2025-02-23 09:13:12<SeP>2025-02-23 11:01:03<SeP>2025-02-23 12:48:54<SeP>2025-02-23 14:36:45<SeP>2025-02-23 16:24:36<SeP>2025-02-23 18:12:27<SeP>2025-02-23 20:00:18<SeP>2025-02-23 21:48:09<SeP>2025-02-23 23:36:00<SeP>2025-02-24 01:23:51<SeP>2025-02-24 03:11:42<SeP>2025-02-24 04:59:33<SeP>2025-02-24 06:47:24<SeP>2025-02-24 08:35:15<SeP>2025-02-24 10:23:06<SeP>2025-02-24 12:10:57<SeP>2025-02-24 13:58:48<SeP>2025-02-24 15:46:39<SeP>2025-02-24 17:34:30<SeP>2025-02-24 19:22:21<SeP>2025-02-24 21:10:12<SeP>2025-02-24 22:58:03<SeP>2025-02-25 00:45:54<SeP>2025-02-25 02:33:45<SeP>2025-02-25 04:21:36<SeP>2025-02-25 06:09:27<SeP>2025-02-25 07:57:18<SeP>2025-02-25 09:45:09<SeP>2025-02-25 11:33:00<SeP>2025-02-25 13:20:51<SeP>2025-02-25 15:08:42<SeP>2025-02-25 16:56:33<SeP>2025-02-25 18:44:24<SeP>2025-02-25 20:32:15<SeP>2025-02-25 22:20:06<SeP>2025-02-26 00:07:57<SeP>2025-02-26 01:55:48<SeP>2025-02-26 03:43:39<SeP>2025-02-26 05:31:30<SeP>2025-02-26 07:19:21<SeP>2025-02-26 09:07:12<SeP>2025-02-26 10:55:03<SeP>2025-02-26 12:42:54<SeP>2025-02-26 14:30:45<SeP>2025-02-26 16:18:36<SeP>2025-02-26 18:06:27<SeP>2025-02-26 19:54:18<SeP>2025-02-26 21:42:09<SeP>2025-02-26 23:30:00<SeP>2025-02-27 01:17:51<SeP>2025-02-27 03:05:42<SeP>2025-02-27 04:53:33<SeP>2025-02-27 06:41:24<SeP>2025-02-27 08:29:15<SeP>2025-02-27 10:17:06<SeP>2025-02-27 12:04:57<SeP>2025-02-27 13:52:48<SeP>2025-02-27 15:40:39<SeP>2025-02-27 17:28:30<SeP>2025-02-27 19:16:21<SeP>2025-02-27 21:04:12<SeP>2025-02-27 22:52:03<SeP>2025-02-28 00:39:54<SeP>2025-02-28 02:27:45<SeP>2025-02-28 04:15:36<SeP>2025-02-28 06:03:27<SeP>2025-02-28 07:51:18<SeP>2025-02-28 09:39:09<SeP>2025-02-28 11:27:00<SeP>2025-02-28 13:14:51<SeP>2025-02-28 15:02:42<SeP>2025-02-28 16:50:33<SeP>2025-02-28 18:38:24<SeP>2025-02-28 20:26:15<SeP>2025-02-28 22:14:06<SeP>2025-03-01 00:01:57<SeP>2025-03-01 01:49:48<SeP>2025-03-01 03:37:39<SeP>2025-03-01 05:25:30<SeP>2025-03-01 07:13:21<SeP>2025-03-01 09:01:12<SeP>2025-03-01 10:49:03<SeP>2025-03-01 12:36:54<SeP>2025-03-01 14:24:45<SeP>2025-03-01 16:12:36<SeP>2025-03-01 18:00:27<SeP>2025-03-01 19:48:18<SeP>2025-03-01 21:36:09<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:11:51<SeP>2025-03-02 02:59:42<SeP>2025-03-02 04:47:33<SeP>2025-03-02 06:35:24<SeP>2025-03-02 08:23:15<SeP>2025-03-02 10:11:06<SeP>2025-03-02 11:58:57<SeP>2025-03-02 13:46:48<SeP>2025-03-02 15:34:39<SeP>2025-03-02 17:22:30<SeP>2025-03-02 19:10:21<SeP>2025-03-02 20:58:12<SeP>2025-03-02 22:46:03<SeP>2025-03-03 00:33:54<SeP>2025-03-03 02:21:45<SeP>2025-03-03 04:09:36<SeP>2025-03-03 05:57:27<SeP>2025-03-03 07:45:18<SeP>2025-03-03 09:33:09<SeP>2025-03-03 11:21:00<SeP>2025-03-03 13:08:51<SeP>2025-03-03 14:56:42<SeP>2025-03-03 16:44:33<SeP>2025-03-03 18:32:24<SeP>2025-03-03 20:20:15<SeP>2025-03-03 22:08:06<SeP>2025-03-03 23:55:57<SeP>2025-03-04 01:43:48<SeP>2025-03-04 03:31:39<SeP>2025-03-04 05:19:30<SeP>2025-03-04 07:07:21<SeP>2025-03-04 08:55:12<SeP>2025-03-04 10:43:03<SeP>2025-03-04 12:30:54<SeP>2025-03-04 14:18:45<SeP>2025-03-04 16:06:36<SeP>2025-03-04 17:54:27<SeP>2025-03-04 19:42:18<SeP>2025-03-04 21:30:09<SeP>2025-03-04 23:18:00<SeP>2025-03-05 01:05:51<SeP>2025-03-05 02:53:42<SeP>2025-03-05 04:41:33<SeP>2025-03-05 06:29:24<SeP>2025-03-05 08:17:15<SeP>2025-03-05 10:05:06<SeP>2025-03-05 11:52:57<SeP>2025-03-05 13:40:48<SeP>2025-03-05 15:28:39<SeP>2025-03-05 17:16:30<SeP>2025-03-05 19:04:21<SeP>2025-03-05 20:52:12<SeP>2025-03-05 22:40:03<SeP>2025-03-06 00:27:54<SeP>2025-03-06 02:15:45<SeP>2025-03-06 04:03:36<SeP>2025-03-06 05:51:27<SeP>2025-03-06 07:39:18<SeP>2025-03-06 09:27:09<SeP>2025-03-06 11:15:00<SeP>2025-03-06 13:02:51<SeP>2025-03-06 14:50:42<SeP>2025-03-06 16:38:33<SeP>2025-03-06 18:26:24<SeP>2025-03-06 20:14:15<SeP>2025-03-06 22:02:06<SeP>2025-03-06 23:49:57<SeP>2025-03-07 01:37:48<SeP>2025-03-07 03:25:39<SeP>2025-03-07 05:13:30<SeP>2025-03-07 07:01:21<SeP>2025-03-07 08:49:12<SeP>2025-03-07 10:37:03<SeP>2025-03-07 12:24:54<SeP>2025-03-07 14:12:45<SeP>2025-03-07 16:00:36<SeP>2025-03-07 17:48:27<SeP>2025-03-07 19:36:18<SeP>2025-03-07 21:24:09<SeP>2025-03-07 23:12:00<SeP>2025-03-08 00:59:51<SeP>2025-03-08 02:47:42<SeP>2025-03-08 04:35:33<SeP>2025-03-08 06:23:24<SeP>2025-03-08 08:11:15<SeP>2025-03-08 09:59:06<SeP>2025-03-08 11:46:57<SeP>2025-03-08 13:34:48<SeP>2025-03-08 15:22:39<SeP>2025-03-08 17:10:30<SeP>2025-03-08 18:58:21<SeP>2025-03-08 20:46:12<SeP>2025-03-08 22:34:03<SeP>2025-03-09 00:21:54<SeP>2025-03-09 03:09:45<SeP>2025-03-09 04:57:36<SeP>2025-03-09 06:45:27<SeP>2025-03-09 08:33:18<SeP>2025-03-09 10:21:09<SeP>2025-03-09 12:09:00<SeP>2025-03-09 13:56:51<SeP>2025-03-09 15:44:42<SeP>2025-03-09 17:32:33<SeP>2025-03-09 19:20:24<SeP>2025-03-09 21:08:15<SeP>2025-03-09 22:56:06<SeP>2025-03-10 00:43:57<SeP>2025-03-10 02:31:48<SeP>2025-03-10 04:19:39<SeP>2025-03-10 06:07:30<SeP>2025-03-10 07:55:21<SeP>2025-03-10 09:43:12<SeP>2025-03-10 11:31:03<SeP>2025-03-10 13:18:54<SeP>2025-03-10 15:06:45<SeP>2025-03-10 16:54:36<SeP>2025-03-10 18:42:27<SeP>2025-03-10 20:30:18<SeP>2025-03-10 22:18:09<SeP>2025-03-11 00:06:00<SeP>2025-03-11 01:53:51<SeP>2025-03-11 03:41:42<SeP>2025-03-11 05:29:33<SeP>2025-03-11 07:17:24<SeP>2025-03-11 09:05:15<SeP>2025-03-11 10:53:06<SeP>2025-03-11 12:40:57<SeP>2025-03-11 14:28:48<SeP>2025-03-11 16:16:39<SeP>2025-03-11 18:04:30<SeP>2025-03-11 19:52:21<SeP>2025-03-11 21:40:12<SeP>2025-03-11 23:28:03<SeP>2025-03-12 01:15:54<SeP>2025-03-12 03:03:45<SeP>2025-03-12 04:51:36<SeP>2025-03-12 06:39:27<SeP>2025-03-12 08:27:18<SeP>2025-03-12 10:15:09<SeP>2025-03-12 12:03:00<SeP>2025-03-12 13:50:51<SeP>2025-03-12 15:38:42<SeP>2025-03-12 17:26:33<SeP>2025-03-12 19:14:24<SeP>2025-03-12 21:02:15<SeP>2025-03-12 22:50:06<SeP>2025-03-13 00:37:57<SeP>2025-03-13 02:25:48<SeP>2025-03-13 04:13:39<SeP>2025-03-13 06:01:30<SeP>2025-03-13 07:49:21<SeP>2025-03-13 09:37:12<SeP>2025-03-13 11:25:03<SeP>2025-03-13 13:12:54<SeP>2025-03-13 15:00:45<SeP>2025-03-13 16:48:36<SeP>2025-03-13 18:36:27<SeP>2025-03-13 20:24:18<SeP>2025-03-13 22:12:09";
  const itemLabel       = "Attacks";
  const itemData        = "194<SeP>439<SeP>897<SeP>3214<SeP>2753<SeP>510<SeP>312<SeP>318<SeP>224<SeP>661<SeP>266<SeP>185<SeP>126<SeP>32<SeP>51<SeP>568<SeP>93<SeP>235<SeP>135<SeP>325<SeP>100<SeP>251<SeP>893<SeP>213<SeP>533<SeP>130<SeP>190<SeP>239<SeP>182<SeP>485<SeP>266<SeP>277<SeP>358<SeP>40<SeP>293<SeP>364<SeP>173<SeP>382<SeP>201<SeP>159<SeP>26<SeP>253<SeP>59<SeP>545<SeP>367<SeP>145<SeP>182<SeP>240<SeP>103<SeP>46<SeP>92<SeP>413<SeP>107<SeP>215<SeP>68<SeP>52<SeP>25<SeP>475<SeP>174<SeP>208<SeP>45<SeP>404<SeP>200<SeP>182<SeP>588<SeP>184<SeP>277<SeP>229<SeP>368<SeP>162<SeP>196<SeP>388<SeP>312<SeP>295<SeP>242<SeP>80<SeP>129<SeP>506<SeP>43<SeP>121<SeP>207<SeP>514<SeP>100<SeP>179<SeP>295<SeP>46<SeP>281<SeP>192<SeP>265<SeP>274<SeP>221<SeP>239<SeP>9<SeP>206<SeP>118<SeP>150<SeP>496<SeP>125<SeP>38<SeP>146<SeP>60<SeP>25<SeP>90<SeP>419<SeP>177<SeP>173<SeP>179<SeP>188<SeP>222<SeP>102<SeP>90<SeP>159<SeP>23<SeP>8<SeP>250<SeP>201<SeP>185<SeP>710<SeP>480<SeP>351<SeP>644<SeP>372<SeP>536<SeP>329<SeP>196<SeP>525<SeP>450<SeP>383<SeP>392<SeP>354<SeP>1073<SeP>574<SeP>929<SeP>451<SeP>290<SeP>262<SeP>329<SeP>277<SeP>736<SeP>528<SeP>567<SeP>521<SeP>271<SeP>410<SeP>520<SeP>624<SeP>808<SeP>272<SeP>502<SeP>427<SeP>720<SeP>274<SeP>339<SeP>507<SeP>702<SeP>613<SeP>478<SeP>341<SeP>90<SeP>163<SeP>264<SeP>148<SeP>159<SeP>521<SeP>57<SeP>119<SeP>359<SeP>64<SeP>93<SeP>50<SeP>405<SeP>225<SeP>221<SeP>148<SeP>359<SeP>256<SeP>73<SeP>245<SeP>116<SeP>382<SeP>266<SeP>290<SeP>133<SeP>212<SeP>42<SeP>140<SeP>92<SeP>155<SeP>29<SeP>201<SeP>221<SeP>53<SeP>174<SeP>119<SeP>85<SeP>69<SeP>69<SeP>45<SeP>337<SeP>202<SeP>331<SeP>47<SeP>270<SeP>424<SeP>218<SeP>140<SeP>106<SeP>205<SeP>224<SeP>141<SeP>30<SeP>44<SeP>144<SeP>139<SeP>245<SeP>90<SeP>211<SeP>244<SeP>106<SeP>384<SeP>77<SeP>353<SeP>68<SeP>70<SeP>48<SeP>37<SeP>147<SeP>31<SeP>26<SeP>82<SeP>40<SeP>83<SeP>82<SeP>19<SeP>113<SeP>171<SeP>129<SeP>68<SeP>107<SeP>170<SeP>175<SeP>431<SeP>82<SeP>63<SeP>310<SeP>15<SeP>25<SeP>60<SeP>222<SeP>24<SeP>85<SeP>56<SeP>182<SeP>92<SeP>68<SeP>301<SeP>80<SeP>52<SeP>79<SeP>45<SeP>32<SeP>406<SeP>131<SeP>84<SeP>52<SeP>99<SeP>225<SeP>42<SeP>172<SeP>314<SeP>28<SeP>26<SeP>101<SeP>215<SeP>44<SeP>61<SeP>53<SeP>114<SeP>14<SeP>89<SeP>353<SeP>119<SeP>94<SeP>112<SeP>66<SeP>42<SeP>32<SeP>27<SeP>127<SeP>229<SeP>49<SeP>135<SeP>228<SeP>95<SeP>29<SeP>18<SeP>170<SeP>124<SeP>190<SeP>59<SeP>106<SeP>84<SeP>93<SeP>63<SeP>163<SeP>48<SeP>157<SeP>114<SeP>101<SeP>144<SeP>546<SeP>164<SeP>71<SeP>119<SeP>143<SeP>39<SeP>46<SeP>117<SeP>57<SeP>99<SeP>104<SeP>237<SeP>56<SeP>19<SeP>13<SeP>153<SeP>138<SeP>33<SeP>69<SeP>25<SeP>17<SeP>74<SeP>287<SeP>57<SeP>104<SeP>161<SeP>28<SeP>12<SeP>30<SeP>86<SeP>39<SeP>56<SeP>303<SeP>33<SeP>12<SeP>42<SeP>500<SeP>394<SeP>297<SeP>337<SeP>43<SeP>120<SeP>34<SeP>83<SeP>104<SeP>78<SeP>78<SeP>27<SeP>381<SeP>156<SeP>278<SeP>69<SeP>70<SeP>110<SeP>151<SeP>30<SeP>159<SeP>75<SeP>565<SeP>110<SeP>30<SeP>55<SeP>147<SeP>103<SeP>183<SeP>29<SeP>19<SeP>106<SeP>178<SeP>111<SeP>181<SeP>140<SeP>366<SeP>126<SeP>177<SeP>173<SeP>130<SeP>256<SeP>132<SeP>179<SeP>124<SeP>102<SeP>134<SeP>218<SeP>139<SeP>388<SeP>149<SeP>132<SeP>32<SeP>65";
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
  const labelsData       = "2025-02-12 00:00:00<SeP>2025-02-12 01:47:51<SeP>2025-02-12 03:35:42<SeP>2025-02-12 05:23:33<SeP>2025-02-12 07:11:24<SeP>2025-02-12 08:59:15<SeP>2025-02-12 10:47:06<SeP>2025-02-12 12:34:57<SeP>2025-02-12 14:22:48<SeP>2025-02-12 16:10:39<SeP>2025-02-12 17:58:30<SeP>2025-02-12 19:46:21<SeP>2025-02-12 21:34:12<SeP>2025-02-12 23:22:03<SeP>2025-02-13 01:09:54<SeP>2025-02-13 02:57:45<SeP>2025-02-13 04:45:36<SeP>2025-02-13 06:33:27<SeP>2025-02-13 08:21:18<SeP>2025-02-13 10:09:09<SeP>2025-02-13 11:57:00<SeP>2025-02-13 13:44:51<SeP>2025-02-13 15:32:42<SeP>2025-02-13 17:20:33<SeP>2025-02-13 19:08:24<SeP>2025-02-13 20:56:15<SeP>2025-02-13 22:44:06<SeP>2025-02-14 00:31:57<SeP>2025-02-14 02:19:48<SeP>2025-02-14 04:07:39<SeP>2025-02-14 05:55:30<SeP>2025-02-14 07:43:21<SeP>2025-02-14 09:31:12<SeP>2025-02-14 11:19:03<SeP>2025-02-14 13:06:54<SeP>2025-02-14 14:54:45<SeP>2025-02-14 16:42:36<SeP>2025-02-14 18:30:27<SeP>2025-02-14 20:18:18<SeP>2025-02-14 22:06:09<SeP>2025-02-14 23:54:00<SeP>2025-02-15 01:41:51<SeP>2025-02-15 03:29:42<SeP>2025-02-15 05:17:33<SeP>2025-02-15 07:05:24<SeP>2025-02-15 08:53:15<SeP>2025-02-15 10:41:06<SeP>2025-02-15 12:28:57<SeP>2025-02-15 14:16:48<SeP>2025-02-15 16:04:39<SeP>2025-02-15 17:52:30<SeP>2025-02-15 19:40:21<SeP>2025-02-15 21:28:12<SeP>2025-02-15 23:16:03<SeP>2025-02-16 01:03:54<SeP>2025-02-16 02:51:45<SeP>2025-02-16 04:39:36<SeP>2025-02-16 06:27:27<SeP>2025-02-16 08:15:18<SeP>2025-02-16 10:03:09<SeP>2025-02-16 11:51:00<SeP>2025-02-16 13:38:51<SeP>2025-02-16 15:26:42<SeP>2025-02-16 17:14:33<SeP>2025-02-16 19:02:24<SeP>2025-02-16 20:50:15<SeP>2025-02-16 22:38:06<SeP>2025-02-17 00:25:57<SeP>2025-02-17 02:13:48<SeP>2025-02-17 04:01:39<SeP>2025-02-17 05:49:30<SeP>2025-02-17 07:37:21<SeP>2025-02-17 09:25:12<SeP>2025-02-17 11:13:03<SeP>2025-02-17 13:00:54<SeP>2025-02-17 14:48:45<SeP>2025-02-17 16:36:36<SeP>2025-02-17 18:24:27<SeP>2025-02-17 20:12:18<SeP>2025-02-17 22:00:09<SeP>2025-02-17 23:48:00<SeP>2025-02-18 01:35:51<SeP>2025-02-18 03:23:42<SeP>2025-02-18 05:11:33<SeP>2025-02-18 06:59:24<SeP>2025-02-18 08:47:15<SeP>2025-02-18 10:35:06<SeP>2025-02-18 12:22:57<SeP>2025-02-18 14:10:48<SeP>2025-02-18 15:58:39<SeP>2025-02-18 17:46:30<SeP>2025-02-18 19:34:21<SeP>2025-02-18 21:22:12<SeP>2025-02-18 23:10:03<SeP>2025-02-19 00:57:54<SeP>2025-02-19 02:45:45<SeP>2025-02-19 04:33:36<SeP>2025-02-19 06:21:27<SeP>2025-02-19 08:09:18<SeP>2025-02-19 09:57:09<SeP>2025-02-19 11:45:00<SeP>2025-02-19 13:32:51<SeP>2025-02-19 15:20:42<SeP>2025-02-19 17:08:33<SeP>2025-02-19 18:56:24<SeP>2025-02-19 20:44:15<SeP>2025-02-19 22:32:06<SeP>2025-02-20 00:19:57<SeP>2025-02-20 02:07:48<SeP>2025-02-20 03:55:39<SeP>2025-02-20 05:43:30<SeP>2025-02-20 07:31:21<SeP>2025-02-20 09:19:12<SeP>2025-02-20 11:07:03<SeP>2025-02-20 12:54:54<SeP>2025-02-20 14:42:45<SeP>2025-02-20 16:30:36<SeP>2025-02-20 18:18:27<SeP>2025-02-20 20:06:18<SeP>2025-02-20 21:54:09<SeP>2025-02-20 23:42:00<SeP>2025-02-21 01:29:51<SeP>2025-02-21 03:17:42<SeP>2025-02-21 05:05:33<SeP>2025-02-21 06:53:24<SeP>2025-02-21 08:41:15<SeP>2025-02-21 10:29:06<SeP>2025-02-21 12:16:57<SeP>2025-02-21 14:04:48<SeP>2025-02-21 15:52:39<SeP>2025-02-21 17:40:30<SeP>2025-02-21 19:28:21<SeP>2025-02-21 21:16:12<SeP>2025-02-21 23:04:03<SeP>2025-02-22 00:51:54<SeP>2025-02-22 02:39:45<SeP>2025-02-22 04:27:36<SeP>2025-02-22 06:15:27<SeP>2025-02-22 08:03:18<SeP>2025-02-22 09:51:09<SeP>2025-02-22 11:39:00<SeP>2025-02-22 13:26:51<SeP>2025-02-22 15:14:42<SeP>2025-02-22 17:02:33<SeP>2025-02-22 18:50:24<SeP>2025-02-22 20:38:15<SeP>2025-02-22 22:26:06<SeP>2025-02-23 00:13:57<SeP>2025-02-23 02:01:48<SeP>2025-02-23 03:49:39<SeP>2025-02-23 05:37:30<SeP>2025-02-23 07:25:21<SeP>2025-02-23 09:13:12<SeP>2025-02-23 11:01:03<SeP>2025-02-23 12:48:54<SeP>2025-02-23 14:36:45<SeP>2025-02-23 16:24:36<SeP>2025-02-23 18:12:27<SeP>2025-02-23 20:00:18<SeP>2025-02-23 21:48:09<SeP>2025-02-23 23:36:00<SeP>2025-02-24 01:23:51<SeP>2025-02-24 03:11:42<SeP>2025-02-24 04:59:33<SeP>2025-02-24 06:47:24<SeP>2025-02-24 08:35:15<SeP>2025-02-24 10:23:06<SeP>2025-02-24 12:10:57<SeP>2025-02-24 13:58:48<SeP>2025-02-24 15:46:39<SeP>2025-02-24 17:34:30<SeP>2025-02-24 19:22:21<SeP>2025-02-24 21:10:12<SeP>2025-02-24 22:58:03<SeP>2025-02-25 00:45:54<SeP>2025-02-25 02:33:45<SeP>2025-02-25 04:21:36<SeP>2025-02-25 06:09:27<SeP>2025-02-25 07:57:18<SeP>2025-02-25 09:45:09<SeP>2025-02-25 11:33:00<SeP>2025-02-25 13:20:51<SeP>2025-02-25 15:08:42<SeP>2025-02-25 16:56:33<SeP>2025-02-25 18:44:24<SeP>2025-02-25 20:32:15<SeP>2025-02-25 22:20:06<SeP>2025-02-26 00:07:57<SeP>2025-02-26 01:55:48<SeP>2025-02-26 03:43:39<SeP>2025-02-26 05:31:30<SeP>2025-02-26 07:19:21<SeP>2025-02-26 09:07:12<SeP>2025-02-26 10:55:03<SeP>2025-02-26 12:42:54<SeP>2025-02-26 14:30:45<SeP>2025-02-26 16:18:36<SeP>2025-02-26 18:06:27<SeP>2025-02-26 19:54:18<SeP>2025-02-26 21:42:09<SeP>2025-02-26 23:30:00<SeP>2025-02-27 01:17:51<SeP>2025-02-27 03:05:42<SeP>2025-02-27 04:53:33<SeP>2025-02-27 06:41:24<SeP>2025-02-27 08:29:15<SeP>2025-02-27 10:17:06<SeP>2025-02-27 12:04:57<SeP>2025-02-27 13:52:48<SeP>2025-02-27 15:40:39<SeP>2025-02-27 17:28:30<SeP>2025-02-27 19:16:21<SeP>2025-02-27 21:04:12<SeP>2025-02-27 22:52:03<SeP>2025-02-28 00:39:54<SeP>2025-02-28 02:27:45<SeP>2025-02-28 04:15:36<SeP>2025-02-28 06:03:27<SeP>2025-02-28 07:51:18<SeP>2025-02-28 09:39:09<SeP>2025-02-28 11:27:00<SeP>2025-02-28 13:14:51<SeP>2025-02-28 15:02:42<SeP>2025-02-28 16:50:33<SeP>2025-02-28 18:38:24<SeP>2025-02-28 20:26:15<SeP>2025-02-28 22:14:06<SeP>2025-03-01 00:01:57<SeP>2025-03-01 01:49:48<SeP>2025-03-01 03:37:39<SeP>2025-03-01 05:25:30<SeP>2025-03-01 07:13:21<SeP>2025-03-01 09:01:12<SeP>2025-03-01 10:49:03<SeP>2025-03-01 12:36:54<SeP>2025-03-01 14:24:45<SeP>2025-03-01 16:12:36<SeP>2025-03-01 18:00:27<SeP>2025-03-01 19:48:18<SeP>2025-03-01 21:36:09<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:11:51<SeP>2025-03-02 02:59:42<SeP>2025-03-02 04:47:33<SeP>2025-03-02 06:35:24<SeP>2025-03-02 08:23:15<SeP>2025-03-02 10:11:06<SeP>2025-03-02 11:58:57<SeP>2025-03-02 13:46:48<SeP>2025-03-02 15:34:39<SeP>2025-03-02 17:22:30<SeP>2025-03-02 19:10:21<SeP>2025-03-02 20:58:12<SeP>2025-03-02 22:46:03<SeP>2025-03-03 00:33:54<SeP>2025-03-03 02:21:45<SeP>2025-03-03 04:09:36<SeP>2025-03-03 05:57:27<SeP>2025-03-03 07:45:18<SeP>2025-03-03 09:33:09<SeP>2025-03-03 11:21:00<SeP>2025-03-03 13:08:51<SeP>2025-03-03 14:56:42<SeP>2025-03-03 16:44:33<SeP>2025-03-03 18:32:24<SeP>2025-03-03 20:20:15<SeP>2025-03-03 22:08:06<SeP>2025-03-03 23:55:57<SeP>2025-03-04 01:43:48<SeP>2025-03-04 03:31:39<SeP>2025-03-04 05:19:30<SeP>2025-03-04 07:07:21<SeP>2025-03-04 08:55:12<SeP>2025-03-04 10:43:03<SeP>2025-03-04 12:30:54<SeP>2025-03-04 14:18:45<SeP>2025-03-04 16:06:36<SeP>2025-03-04 17:54:27<SeP>2025-03-04 19:42:18<SeP>2025-03-04 21:30:09<SeP>2025-03-04 23:18:00<SeP>2025-03-05 01:05:51<SeP>2025-03-05 02:53:42<SeP>2025-03-05 04:41:33<SeP>2025-03-05 06:29:24<SeP>2025-03-05 08:17:15<SeP>2025-03-05 10:05:06<SeP>2025-03-05 11:52:57<SeP>2025-03-05 13:40:48<SeP>2025-03-05 15:28:39<SeP>2025-03-05 17:16:30<SeP>2025-03-05 19:04:21<SeP>2025-03-05 20:52:12<SeP>2025-03-05 22:40:03<SeP>2025-03-06 00:27:54<SeP>2025-03-06 02:15:45<SeP>2025-03-06 04:03:36<SeP>2025-03-06 05:51:27<SeP>2025-03-06 07:39:18<SeP>2025-03-06 09:27:09<SeP>2025-03-06 11:15:00<SeP>2025-03-06 13:02:51<SeP>2025-03-06 14:50:42<SeP>2025-03-06 16:38:33<SeP>2025-03-06 18:26:24<SeP>2025-03-06 20:14:15<SeP>2025-03-06 22:02:06<SeP>2025-03-06 23:49:57<SeP>2025-03-07 01:37:48<SeP>2025-03-07 03:25:39<SeP>2025-03-07 05:13:30<SeP>2025-03-07 07:01:21<SeP>2025-03-07 08:49:12<SeP>2025-03-07 10:37:03<SeP>2025-03-07 12:24:54<SeP>2025-03-07 14:12:45<SeP>2025-03-07 16:00:36<SeP>2025-03-07 17:48:27<SeP>2025-03-07 19:36:18<SeP>2025-03-07 21:24:09<SeP>2025-03-07 23:12:00<SeP>2025-03-08 00:59:51<SeP>2025-03-08 02:47:42<SeP>2025-03-08 04:35:33<SeP>2025-03-08 06:23:24<SeP>2025-03-08 08:11:15<SeP>2025-03-08 09:59:06<SeP>2025-03-08 11:46:57<SeP>2025-03-08 13:34:48<SeP>2025-03-08 15:22:39<SeP>2025-03-08 17:10:30<SeP>2025-03-08 18:58:21<SeP>2025-03-08 20:46:12<SeP>2025-03-08 22:34:03<SeP>2025-03-09 00:21:54<SeP>2025-03-09 03:09:45<SeP>2025-03-09 04:57:36<SeP>2025-03-09 06:45:27<SeP>2025-03-09 08:33:18<SeP>2025-03-09 10:21:09<SeP>2025-03-09 12:09:00<SeP>2025-03-09 13:56:51<SeP>2025-03-09 15:44:42<SeP>2025-03-09 17:32:33<SeP>2025-03-09 19:20:24<SeP>2025-03-09 21:08:15<SeP>2025-03-09 22:56:06<SeP>2025-03-10 00:43:57<SeP>2025-03-10 02:31:48<SeP>2025-03-10 04:19:39<SeP>2025-03-10 06:07:30<SeP>2025-03-10 07:55:21<SeP>2025-03-10 09:43:12<SeP>2025-03-10 11:31:03<SeP>2025-03-10 13:18:54<SeP>2025-03-10 15:06:45<SeP>2025-03-10 16:54:36<SeP>2025-03-10 18:42:27<SeP>2025-03-10 20:30:18<SeP>2025-03-10 22:18:09<SeP>2025-03-11 00:06:00<SeP>2025-03-11 01:53:51<SeP>2025-03-11 03:41:42<SeP>2025-03-11 05:29:33<SeP>2025-03-11 07:17:24<SeP>2025-03-11 09:05:15<SeP>2025-03-11 10:53:06<SeP>2025-03-11 12:40:57<SeP>2025-03-11 14:28:48<SeP>2025-03-11 16:16:39<SeP>2025-03-11 18:04:30<SeP>2025-03-11 19:52:21<SeP>2025-03-11 21:40:12<SeP>2025-03-11 23:28:03<SeP>2025-03-12 01:15:54<SeP>2025-03-12 03:03:45<SeP>2025-03-12 04:51:36<SeP>2025-03-12 06:39:27<SeP>2025-03-12 08:27:18<SeP>2025-03-12 10:15:09<SeP>2025-03-12 12:03:00<SeP>2025-03-12 13:50:51<SeP>2025-03-12 15:38:42<SeP>2025-03-12 17:26:33<SeP>2025-03-12 19:14:24<SeP>2025-03-12 21:02:15<SeP>2025-03-12 22:50:06<SeP>2025-03-13 00:37:57<SeP>2025-03-13 02:25:48<SeP>2025-03-13 04:13:39<SeP>2025-03-13 06:01:30<SeP>2025-03-13 07:49:21<SeP>2025-03-13 09:37:12<SeP>2025-03-13 11:25:03<SeP>2025-03-13 13:12:54<SeP>2025-03-13 15:00:45<SeP>2025-03-13 16:48:36<SeP>2025-03-13 18:36:27<SeP>2025-03-13 20:24:18<SeP>2025-03-13 22:12:09";
  const item1Label       = "Escaneos";
  const item1Data        = "65<SeP>90<SeP>52<SeP>117<SeP>80<SeP>60<SeP>59<SeP>86<SeP>56<SeP>79<SeP>91<SeP>166<SeP>72<SeP>148<SeP>80<SeP>125<SeP>51<SeP>65<SeP>74<SeP>108<SeP>138<SeP>122<SeP>35<SeP>72<SeP>120<SeP>50<SeP>79<SeP>77<SeP>85<SeP>101<SeP>153<SeP>154<SeP>123<SeP>47<SeP>50<SeP>59<SeP>89<SeP>68<SeP>111<SeP>83<SeP>72<SeP>85<SeP>62<SeP>150<SeP>169<SeP>124<SeP>104<SeP>82<SeP>30<SeP>46<SeP>66<SeP>118<SeP>82<SeP>84<SeP>50<SeP>80<SeP>55<SeP>139<SeP>71<SeP>75<SeP>61<SeP>64<SeP>86<SeP>68<SeP>129<SeP>115<SeP>86<SeP>83<SeP>60<SeP>43<SeP>76<SeP>99<SeP>82<SeP>81<SeP>71<SeP>26<SeP>46<SeP>42<SeP>165<SeP>80<SeP>59<SeP>147<SeP>30<SeP>122<SeP>83<SeP>154<SeP>61<SeP>96<SeP>86<SeP>42<SeP>43<SeP>90<SeP>60<SeP>47<SeP>50<SeP>115<SeP>78<SeP>181<SeP>94<SeP>80<SeP>62<SeP>37<SeP>78<SeP>73<SeP>80<SeP>67<SeP>103<SeP>70<SeP>81<SeP>95<SeP>91<SeP>47<SeP>130<SeP>94<SeP>78<SeP>62<SeP>25<SeP>45<SeP>95<SeP>84<SeP>93<SeP>62<SeP>150<SeP>83<SeP>104<SeP>76<SeP>40<SeP>53<SeP>106<SeP>68<SeP>76<SeP>90<SeP>112<SeP>66<SeP>78<SeP>97<SeP>130<SeP>83<SeP>59<SeP>25<SeP>49<SeP>68<SeP>92<SeP>53<SeP>72<SeP>89<SeP>69<SeP>53<SeP>101<SeP>142<SeP>84<SeP>44<SeP>32<SeP>43<SeP>63<SeP>198<SeP>106<SeP>81<SeP>58<SeP>68<SeP>118<SeP>53<SeP>83<SeP>105<SeP>193<SeP>68<SeP>48<SeP>37<SeP>164<SeP>55<SeP>77<SeP>78<SeP>113<SeP>108<SeP>79<SeP>93<SeP>89<SeP>52<SeP>82<SeP>99<SeP>61<SeP>81<SeP>92<SeP>87<SeP>115<SeP>83<SeP>93<SeP>164<SeP>46<SeP>76<SeP>133<SeP>77<SeP>44<SeP>71<SeP>180<SeP>90<SeP>175<SeP>79<SeP>94<SeP>110<SeP>51<SeP>71<SeP>96<SeP>89<SeP>48<SeP>89<SeP>38<SeP>79<SeP>61<SeP>60<SeP>51<SeP>115<SeP>69<SeP>98<SeP>108<SeP>63<SeP>85<SeP>58<SeP>47<SeP>81<SeP>58<SeP>55<SeP>54<SeP>54<SeP>96<SeP>77<SeP>72<SeP>87<SeP>76<SeP>46<SeP>31<SeP>208<SeP>68<SeP>81<SeP>66<SeP>66<SeP>64<SeP>113<SeP>46<SeP>39<SeP>55<SeP>183<SeP>83<SeP>67<SeP>26<SeP>80<SeP>68<SeP>45<SeP>41<SeP>61<SeP>164<SeP>67<SeP>58<SeP>119<SeP>64<SeP>40<SeP>70<SeP>17<SeP>48<SeP>43<SeP>29<SeP>97<SeP>59<SeP>74<SeP>59<SeP>87<SeP>262<SeP>59<SeP>33<SeP>60<SeP>50<SeP>118<SeP>123<SeP>89<SeP>50<SeP>79<SeP>34<SeP>204<SeP>41<SeP>118<SeP>85<SeP>59<SeP>18<SeP>115<SeP>32<SeP>42<SeP>68<SeP>53<SeP>47<SeP>99<SeP>120<SeP>106<SeP>92<SeP>53<SeP>71<SeP>34<SeP>51<SeP>123<SeP>123<SeP>44<SeP>85<SeP>169<SeP>67<SeP>63<SeP>52<SeP>63<SeP>83<SeP>434<SeP>44<SeP>43<SeP>23<SeP>31<SeP>47<SeP>48<SeP>60<SeP>109<SeP>76<SeP>176<SeP>73<SeP>203<SeP>219<SeP>50<SeP>104<SeP>300<SeP>111<SeP>176<SeP>56<SeP>53<SeP>64<SeP>43<SeP>69<SeP>54<SeP>68<SeP>21<SeP>21<SeP>92<SeP>43<SeP>94<SeP>61<SeP>66<SeP>64<SeP>30<SeP>61<SeP>26<SeP>32<SeP>49<SeP>98<SeP>29<SeP>797<SeP>60<SeP>101<SeP>71<SeP>154<SeP>98<SeP>81<SeP>27<SeP>16<SeP>51<SeP>171<SeP>85<SeP>89<SeP>72<SeP>42<SeP>112<SeP>15<SeP>51<SeP>114<SeP>129<SeP>60<SeP>48<SeP>53<SeP>62<SeP>42<SeP>112<SeP>33<SeP>103<SeP>68<SeP>77<SeP>74<SeP>62<SeP>95<SeP>53<SeP>111<SeP>168<SeP>81<SeP>133<SeP>93<SeP>80<SeP>80<SeP>40<SeP>67<SeP>69<SeP>136<SeP>91<SeP>97<SeP>58<SeP>71<SeP>75<SeP>68<SeP>73";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "194<SeP>439<SeP>897<SeP>3214<SeP>2753<SeP>510<SeP>312<SeP>318<SeP>224<SeP>661<SeP>266<SeP>185<SeP>126<SeP>32<SeP>51<SeP>568<SeP>93<SeP>235<SeP>135<SeP>325<SeP>100<SeP>251<SeP>893<SeP>213<SeP>533<SeP>130<SeP>190<SeP>239<SeP>182<SeP>485<SeP>266<SeP>277<SeP>358<SeP>40<SeP>293<SeP>364<SeP>173<SeP>382<SeP>201<SeP>159<SeP>26<SeP>253<SeP>59<SeP>545<SeP>367<SeP>145<SeP>182<SeP>240<SeP>103<SeP>46<SeP>92<SeP>413<SeP>107<SeP>215<SeP>68<SeP>52<SeP>25<SeP>475<SeP>174<SeP>208<SeP>45<SeP>404<SeP>200<SeP>182<SeP>588<SeP>184<SeP>277<SeP>229<SeP>368<SeP>162<SeP>196<SeP>388<SeP>312<SeP>295<SeP>242<SeP>80<SeP>129<SeP>506<SeP>43<SeP>121<SeP>207<SeP>514<SeP>100<SeP>179<SeP>295<SeP>46<SeP>281<SeP>192<SeP>265<SeP>274<SeP>221<SeP>239<SeP>9<SeP>206<SeP>118<SeP>150<SeP>496<SeP>125<SeP>38<SeP>146<SeP>60<SeP>25<SeP>90<SeP>419<SeP>177<SeP>173<SeP>179<SeP>188<SeP>222<SeP>102<SeP>90<SeP>159<SeP>23<SeP>8<SeP>250<SeP>201<SeP>185<SeP>710<SeP>480<SeP>351<SeP>644<SeP>372<SeP>536<SeP>329<SeP>196<SeP>525<SeP>450<SeP>383<SeP>392<SeP>354<SeP>1073<SeP>574<SeP>929<SeP>451<SeP>290<SeP>262<SeP>329<SeP>277<SeP>736<SeP>528<SeP>567<SeP>521<SeP>271<SeP>410<SeP>520<SeP>624<SeP>808<SeP>272<SeP>502<SeP>427<SeP>720<SeP>274<SeP>339<SeP>507<SeP>702<SeP>613<SeP>478<SeP>341<SeP>90<SeP>163<SeP>264<SeP>148<SeP>159<SeP>521<SeP>57<SeP>119<SeP>359<SeP>64<SeP>93<SeP>50<SeP>405<SeP>225<SeP>221<SeP>148<SeP>359<SeP>256<SeP>73<SeP>245<SeP>116<SeP>382<SeP>266<SeP>290<SeP>133<SeP>212<SeP>42<SeP>140<SeP>92<SeP>155<SeP>29<SeP>201<SeP>221<SeP>53<SeP>174<SeP>119<SeP>85<SeP>69<SeP>69<SeP>45<SeP>337<SeP>202<SeP>331<SeP>47<SeP>270<SeP>424<SeP>218<SeP>140<SeP>106<SeP>205<SeP>224<SeP>141<SeP>30<SeP>44<SeP>144<SeP>139<SeP>245<SeP>90<SeP>211<SeP>244<SeP>106<SeP>384<SeP>77<SeP>353<SeP>68<SeP>70<SeP>48<SeP>37<SeP>147<SeP>31<SeP>26<SeP>82<SeP>40<SeP>83<SeP>82<SeP>19<SeP>113<SeP>171<SeP>129<SeP>68<SeP>107<SeP>170<SeP>175<SeP>431<SeP>82<SeP>63<SeP>310<SeP>15<SeP>25<SeP>60<SeP>222<SeP>24<SeP>85<SeP>56<SeP>182<SeP>92<SeP>68<SeP>301<SeP>80<SeP>52<SeP>79<SeP>45<SeP>32<SeP>406<SeP>131<SeP>84<SeP>52<SeP>99<SeP>225<SeP>42<SeP>172<SeP>314<SeP>28<SeP>26<SeP>101<SeP>215<SeP>44<SeP>61<SeP>53<SeP>114<SeP>14<SeP>89<SeP>353<SeP>119<SeP>94<SeP>112<SeP>66<SeP>42<SeP>32<SeP>27<SeP>127<SeP>229<SeP>49<SeP>135<SeP>228<SeP>95<SeP>29<SeP>18<SeP>170<SeP>124<SeP>190<SeP>59<SeP>106<SeP>84<SeP>93<SeP>63<SeP>163<SeP>48<SeP>157<SeP>114<SeP>101<SeP>144<SeP>546<SeP>164<SeP>71<SeP>119<SeP>143<SeP>39<SeP>46<SeP>117<SeP>57<SeP>99<SeP>104<SeP>237<SeP>56<SeP>19<SeP>13<SeP>153<SeP>138<SeP>33<SeP>69<SeP>25<SeP>17<SeP>74<SeP>287<SeP>57<SeP>104<SeP>161<SeP>28<SeP>12<SeP>30<SeP>86<SeP>39<SeP>56<SeP>303<SeP>33<SeP>12<SeP>42<SeP>500<SeP>394<SeP>297<SeP>337<SeP>43<SeP>120<SeP>34<SeP>83<SeP>104<SeP>78<SeP>78<SeP>27<SeP>381<SeP>156<SeP>278<SeP>69<SeP>70<SeP>110<SeP>151<SeP>30<SeP>159<SeP>75<SeP>565<SeP>110<SeP>30<SeP>55<SeP>147<SeP>103<SeP>183<SeP>29<SeP>19<SeP>106<SeP>178<SeP>111<SeP>181<SeP>140<SeP>366<SeP>126<SeP>177<SeP>173<SeP>130<SeP>256<SeP>132<SeP>179<SeP>124<SeP>102<SeP>134<SeP>218<SeP>139<SeP>388<SeP>149<SeP>132<SeP>32<SeP>65";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-12 00:00:00<SeP>2025-02-12 01:47:51<SeP>2025-02-12 03:35:42<SeP>2025-02-12 05:23:33<SeP>2025-02-12 07:11:24<SeP>2025-02-12 08:59:15<SeP>2025-02-12 10:47:06<SeP>2025-02-12 12:34:57<SeP>2025-02-12 14:22:48<SeP>2025-02-12 16:10:39<SeP>2025-02-12 17:58:30<SeP>2025-02-12 19:46:21<SeP>2025-02-12 21:34:12<SeP>2025-02-12 23:22:03<SeP>2025-02-13 01:09:54<SeP>2025-02-13 02:57:45<SeP>2025-02-13 04:45:36<SeP>2025-02-13 06:33:27<SeP>2025-02-13 08:21:18<SeP>2025-02-13 10:09:09<SeP>2025-02-13 11:57:00<SeP>2025-02-13 13:44:51<SeP>2025-02-13 15:32:42<SeP>2025-02-13 17:20:33<SeP>2025-02-13 19:08:24<SeP>2025-02-13 20:56:15<SeP>2025-02-13 22:44:06<SeP>2025-02-14 00:31:57<SeP>2025-02-14 02:19:48<SeP>2025-02-14 04:07:39<SeP>2025-02-14 05:55:30<SeP>2025-02-14 07:43:21<SeP>2025-02-14 09:31:12<SeP>2025-02-14 11:19:03<SeP>2025-02-14 13:06:54<SeP>2025-02-14 14:54:45<SeP>2025-02-14 16:42:36<SeP>2025-02-14 18:30:27<SeP>2025-02-14 20:18:18<SeP>2025-02-14 22:06:09<SeP>2025-02-14 23:54:00<SeP>2025-02-15 01:41:51<SeP>2025-02-15 03:29:42<SeP>2025-02-15 05:17:33<SeP>2025-02-15 07:05:24<SeP>2025-02-15 08:53:15<SeP>2025-02-15 10:41:06<SeP>2025-02-15 12:28:57<SeP>2025-02-15 14:16:48<SeP>2025-02-15 16:04:39<SeP>2025-02-15 17:52:30<SeP>2025-02-15 19:40:21<SeP>2025-02-15 21:28:12<SeP>2025-02-15 23:16:03<SeP>2025-02-16 01:03:54<SeP>2025-02-16 02:51:45<SeP>2025-02-16 04:39:36<SeP>2025-02-16 06:27:27<SeP>2025-02-16 08:15:18<SeP>2025-02-16 10:03:09<SeP>2025-02-16 11:51:00<SeP>2025-02-16 13:38:51<SeP>2025-02-16 15:26:42<SeP>2025-02-16 17:14:33<SeP>2025-02-16 19:02:24<SeP>2025-02-16 20:50:15<SeP>2025-02-16 22:38:06<SeP>2025-02-17 00:25:57<SeP>2025-02-17 02:13:48<SeP>2025-02-17 04:01:39<SeP>2025-02-17 05:49:30<SeP>2025-02-17 07:37:21<SeP>2025-02-17 09:25:12<SeP>2025-02-17 11:13:03<SeP>2025-02-17 13:00:54<SeP>2025-02-17 14:48:45<SeP>2025-02-17 16:36:36<SeP>2025-02-17 18:24:27<SeP>2025-02-17 20:12:18<SeP>2025-02-17 22:00:09<SeP>2025-02-17 23:48:00<SeP>2025-02-18 01:35:51<SeP>2025-02-18 03:23:42<SeP>2025-02-18 05:11:33<SeP>2025-02-18 06:59:24<SeP>2025-02-18 08:47:15<SeP>2025-02-18 10:35:06<SeP>2025-02-18 12:22:57<SeP>2025-02-18 14:10:48<SeP>2025-02-18 15:58:39<SeP>2025-02-18 17:46:30<SeP>2025-02-18 19:34:21<SeP>2025-02-18 21:22:12<SeP>2025-02-18 23:10:03<SeP>2025-02-19 00:57:54<SeP>2025-02-19 02:45:45<SeP>2025-02-19 04:33:36<SeP>2025-02-19 06:21:27<SeP>2025-02-19 08:09:18<SeP>2025-02-19 09:57:09<SeP>2025-02-19 11:45:00<SeP>2025-02-19 13:32:51<SeP>2025-02-19 15:20:42<SeP>2025-02-19 17:08:33<SeP>2025-02-19 18:56:24<SeP>2025-02-19 20:44:15<SeP>2025-02-19 22:32:06<SeP>2025-02-20 00:19:57<SeP>2025-02-20 02:07:48<SeP>2025-02-20 03:55:39<SeP>2025-02-20 05:43:30<SeP>2025-02-20 07:31:21<SeP>2025-02-20 09:19:12<SeP>2025-02-20 11:07:03<SeP>2025-02-20 12:54:54<SeP>2025-02-20 14:42:45<SeP>2025-02-20 16:30:36<SeP>2025-02-20 18:18:27<SeP>2025-02-20 20:06:18<SeP>2025-02-20 21:54:09<SeP>2025-02-20 23:42:00<SeP>2025-02-21 01:29:51<SeP>2025-02-21 03:17:42<SeP>2025-02-21 05:05:33<SeP>2025-02-21 06:53:24<SeP>2025-02-21 08:41:15<SeP>2025-02-21 10:29:06<SeP>2025-02-21 12:16:57<SeP>2025-02-21 14:04:48<SeP>2025-02-21 15:52:39<SeP>2025-02-21 17:40:30<SeP>2025-02-21 19:28:21<SeP>2025-02-21 21:16:12<SeP>2025-02-21 23:04:03<SeP>2025-02-22 00:51:54<SeP>2025-02-22 02:39:45<SeP>2025-02-22 04:27:36<SeP>2025-02-22 06:15:27<SeP>2025-02-22 08:03:18<SeP>2025-02-22 09:51:09<SeP>2025-02-22 11:39:00<SeP>2025-02-22 13:26:51<SeP>2025-02-22 15:14:42<SeP>2025-02-22 17:02:33<SeP>2025-02-22 18:50:24<SeP>2025-02-22 20:38:15<SeP>2025-02-22 22:26:06<SeP>2025-02-23 00:13:57<SeP>2025-02-23 02:01:48<SeP>2025-02-23 03:49:39<SeP>2025-02-23 05:37:30<SeP>2025-02-23 07:25:21<SeP>2025-02-23 09:13:12<SeP>2025-02-23 11:01:03<SeP>2025-02-23 12:48:54<SeP>2025-02-23 14:36:45<SeP>2025-02-23 16:24:36<SeP>2025-02-23 18:12:27<SeP>2025-02-23 20:00:18<SeP>2025-02-23 21:48:09<SeP>2025-02-23 23:36:00<SeP>2025-02-24 01:23:51<SeP>2025-02-24 03:11:42<SeP>2025-02-24 04:59:33<SeP>2025-02-24 06:47:24<SeP>2025-02-24 08:35:15<SeP>2025-02-24 10:23:06<SeP>2025-02-24 12:10:57<SeP>2025-02-24 13:58:48<SeP>2025-02-24 15:46:39<SeP>2025-02-24 17:34:30<SeP>2025-02-24 19:22:21<SeP>2025-02-24 21:10:12<SeP>2025-02-24 22:58:03<SeP>2025-02-25 00:45:54<SeP>2025-02-25 02:33:45<SeP>2025-02-25 04:21:36<SeP>2025-02-25 06:09:27<SeP>2025-02-25 07:57:18<SeP>2025-02-25 09:45:09<SeP>2025-02-25 11:33:00<SeP>2025-02-25 13:20:51<SeP>2025-02-25 15:08:42<SeP>2025-02-25 16:56:33<SeP>2025-02-25 18:44:24<SeP>2025-02-25 20:32:15<SeP>2025-02-25 22:20:06<SeP>2025-02-26 00:07:57<SeP>2025-02-26 01:55:48<SeP>2025-02-26 03:43:39<SeP>2025-02-26 05:31:30<SeP>2025-02-26 07:19:21<SeP>2025-02-26 09:07:12<SeP>2025-02-26 10:55:03<SeP>2025-02-26 12:42:54<SeP>2025-02-26 14:30:45<SeP>2025-02-26 16:18:36<SeP>2025-02-26 18:06:27<SeP>2025-02-26 19:54:18<SeP>2025-02-26 21:42:09<SeP>2025-02-26 23:30:00<SeP>2025-02-27 01:17:51<SeP>2025-02-27 03:05:42<SeP>2025-02-27 04:53:33<SeP>2025-02-27 06:41:24<SeP>2025-02-27 08:29:15<SeP>2025-02-27 10:17:06<SeP>2025-02-27 12:04:57<SeP>2025-02-27 13:52:48<SeP>2025-02-27 15:40:39<SeP>2025-02-27 17:28:30<SeP>2025-02-27 19:16:21<SeP>2025-02-27 21:04:12<SeP>2025-02-27 22:52:03<SeP>2025-02-28 00:39:54<SeP>2025-02-28 02:27:45<SeP>2025-02-28 04:15:36<SeP>2025-02-28 06:03:27<SeP>2025-02-28 07:51:18<SeP>2025-02-28 09:39:09<SeP>2025-02-28 11:27:00<SeP>2025-02-28 13:14:51<SeP>2025-02-28 15:02:42<SeP>2025-02-28 16:50:33<SeP>2025-02-28 18:38:24<SeP>2025-02-28 20:26:15<SeP>2025-02-28 22:14:06<SeP>2025-03-01 00:01:57<SeP>2025-03-01 01:49:48<SeP>2025-03-01 03:37:39<SeP>2025-03-01 05:25:30<SeP>2025-03-01 07:13:21<SeP>2025-03-01 09:01:12<SeP>2025-03-01 10:49:03<SeP>2025-03-01 12:36:54<SeP>2025-03-01 14:24:45<SeP>2025-03-01 16:12:36<SeP>2025-03-01 18:00:27<SeP>2025-03-01 19:48:18<SeP>2025-03-01 21:36:09<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:11:51<SeP>2025-03-02 02:59:42<SeP>2025-03-02 04:47:33<SeP>2025-03-02 06:35:24<SeP>2025-03-02 08:23:15<SeP>2025-03-02 10:11:06<SeP>2025-03-02 11:58:57<SeP>2025-03-02 13:46:48<SeP>2025-03-02 15:34:39<SeP>2025-03-02 17:22:30<SeP>2025-03-02 19:10:21<SeP>2025-03-02 20:58:12<SeP>2025-03-02 22:46:03<SeP>2025-03-03 00:33:54<SeP>2025-03-03 02:21:45<SeP>2025-03-03 04:09:36<SeP>2025-03-03 05:57:27<SeP>2025-03-03 07:45:18<SeP>2025-03-03 09:33:09<SeP>2025-03-03 11:21:00<SeP>2025-03-03 13:08:51<SeP>2025-03-03 14:56:42<SeP>2025-03-03 16:44:33<SeP>2025-03-03 18:32:24<SeP>2025-03-03 20:20:15<SeP>2025-03-03 22:08:06<SeP>2025-03-03 23:55:57<SeP>2025-03-04 01:43:48<SeP>2025-03-04 03:31:39<SeP>2025-03-04 05:19:30<SeP>2025-03-04 07:07:21<SeP>2025-03-04 08:55:12<SeP>2025-03-04 10:43:03<SeP>2025-03-04 12:30:54<SeP>2025-03-04 14:18:45<SeP>2025-03-04 16:06:36<SeP>2025-03-04 17:54:27<SeP>2025-03-04 19:42:18<SeP>2025-03-04 21:30:09<SeP>2025-03-04 23:18:00<SeP>2025-03-05 01:05:51<SeP>2025-03-05 02:53:42<SeP>2025-03-05 04:41:33<SeP>2025-03-05 06:29:24<SeP>2025-03-05 08:17:15<SeP>2025-03-05 10:05:06<SeP>2025-03-05 11:52:57<SeP>2025-03-05 13:40:48<SeP>2025-03-05 15:28:39<SeP>2025-03-05 17:16:30<SeP>2025-03-05 19:04:21<SeP>2025-03-05 20:52:12<SeP>2025-03-05 22:40:03<SeP>2025-03-06 00:27:54<SeP>2025-03-06 02:15:45<SeP>2025-03-06 04:03:36<SeP>2025-03-06 05:51:27<SeP>2025-03-06 07:39:18<SeP>2025-03-06 09:27:09<SeP>2025-03-06 11:15:00<SeP>2025-03-06 13:02:51<SeP>2025-03-06 14:50:42<SeP>2025-03-06 16:38:33<SeP>2025-03-06 18:26:24<SeP>2025-03-06 20:14:15<SeP>2025-03-06 22:02:06<SeP>2025-03-06 23:49:57<SeP>2025-03-07 01:37:48<SeP>2025-03-07 03:25:39<SeP>2025-03-07 05:13:30<SeP>2025-03-07 07:01:21<SeP>2025-03-07 08:49:12<SeP>2025-03-07 10:37:03<SeP>2025-03-07 12:24:54<SeP>2025-03-07 14:12:45<SeP>2025-03-07 16:00:36<SeP>2025-03-07 17:48:27<SeP>2025-03-07 19:36:18<SeP>2025-03-07 21:24:09<SeP>2025-03-07 23:12:00<SeP>2025-03-08 00:59:51<SeP>2025-03-08 02:47:42<SeP>2025-03-08 04:35:33<SeP>2025-03-08 06:23:24<SeP>2025-03-08 08:11:15<SeP>2025-03-08 09:59:06<SeP>2025-03-08 11:46:57<SeP>2025-03-08 13:34:48<SeP>2025-03-08 15:22:39<SeP>2025-03-08 17:10:30<SeP>2025-03-08 18:58:21<SeP>2025-03-08 20:46:12<SeP>2025-03-08 22:34:03<SeP>2025-03-09 00:21:54<SeP>2025-03-09 03:09:45<SeP>2025-03-09 04:57:36<SeP>2025-03-09 06:45:27<SeP>2025-03-09 08:33:18<SeP>2025-03-09 10:21:09<SeP>2025-03-09 12:09:00<SeP>2025-03-09 13:56:51<SeP>2025-03-09 15:44:42<SeP>2025-03-09 17:32:33<SeP>2025-03-09 19:20:24<SeP>2025-03-09 21:08:15<SeP>2025-03-09 22:56:06<SeP>2025-03-10 00:43:57<SeP>2025-03-10 02:31:48<SeP>2025-03-10 04:19:39<SeP>2025-03-10 06:07:30<SeP>2025-03-10 07:55:21<SeP>2025-03-10 09:43:12<SeP>2025-03-10 11:31:03<SeP>2025-03-10 13:18:54<SeP>2025-03-10 15:06:45<SeP>2025-03-10 16:54:36<SeP>2025-03-10 18:42:27<SeP>2025-03-10 20:30:18<SeP>2025-03-10 22:18:09<SeP>2025-03-11 00:06:00<SeP>2025-03-11 01:53:51<SeP>2025-03-11 03:41:42<SeP>2025-03-11 05:29:33<SeP>2025-03-11 07:17:24<SeP>2025-03-11 09:05:15<SeP>2025-03-11 10:53:06<SeP>2025-03-11 12:40:57<SeP>2025-03-11 14:28:48<SeP>2025-03-11 16:16:39<SeP>2025-03-11 18:04:30<SeP>2025-03-11 19:52:21<SeP>2025-03-11 21:40:12<SeP>2025-03-11 23:28:03<SeP>2025-03-12 01:15:54<SeP>2025-03-12 03:03:45<SeP>2025-03-12 04:51:36<SeP>2025-03-12 06:39:27<SeP>2025-03-12 08:27:18<SeP>2025-03-12 10:15:09<SeP>2025-03-12 12:03:00<SeP>2025-03-12 13:50:51<SeP>2025-03-12 15:38:42<SeP>2025-03-12 17:26:33<SeP>2025-03-12 19:14:24<SeP>2025-03-12 21:02:15<SeP>2025-03-12 22:50:06<SeP>2025-03-13 00:37:57<SeP>2025-03-13 02:25:48<SeP>2025-03-13 04:13:39<SeP>2025-03-13 06:01:30<SeP>2025-03-13 07:49:21<SeP>2025-03-13 09:37:12<SeP>2025-03-13 11:25:03<SeP>2025-03-13 13:12:54<SeP>2025-03-13 15:00:45<SeP>2025-03-13 16:48:36<SeP>2025-03-13 18:36:27<SeP>2025-03-13 20:24:18<SeP>2025-03-13 22:12:09";
  const itemLabel       = "Escaneos";
  const itemData        = "65<SeP>90<SeP>52<SeP>117<SeP>80<SeP>60<SeP>59<SeP>86<SeP>56<SeP>79<SeP>91<SeP>166<SeP>72<SeP>148<SeP>80<SeP>125<SeP>51<SeP>65<SeP>74<SeP>108<SeP>138<SeP>122<SeP>35<SeP>72<SeP>120<SeP>50<SeP>79<SeP>77<SeP>85<SeP>101<SeP>153<SeP>154<SeP>123<SeP>47<SeP>50<SeP>59<SeP>89<SeP>68<SeP>111<SeP>83<SeP>72<SeP>85<SeP>62<SeP>150<SeP>169<SeP>124<SeP>104<SeP>82<SeP>30<SeP>46<SeP>66<SeP>118<SeP>82<SeP>84<SeP>50<SeP>80<SeP>55<SeP>139<SeP>71<SeP>75<SeP>61<SeP>64<SeP>86<SeP>68<SeP>129<SeP>115<SeP>86<SeP>83<SeP>60<SeP>43<SeP>76<SeP>99<SeP>82<SeP>81<SeP>71<SeP>26<SeP>46<SeP>42<SeP>165<SeP>80<SeP>59<SeP>147<SeP>30<SeP>122<SeP>83<SeP>154<SeP>61<SeP>96<SeP>86<SeP>42<SeP>43<SeP>90<SeP>60<SeP>47<SeP>50<SeP>115<SeP>78<SeP>181<SeP>94<SeP>80<SeP>62<SeP>37<SeP>78<SeP>73<SeP>80<SeP>67<SeP>103<SeP>70<SeP>81<SeP>95<SeP>91<SeP>47<SeP>130<SeP>94<SeP>78<SeP>62<SeP>25<SeP>45<SeP>95<SeP>84<SeP>93<SeP>62<SeP>150<SeP>83<SeP>104<SeP>76<SeP>40<SeP>53<SeP>106<SeP>68<SeP>76<SeP>90<SeP>112<SeP>66<SeP>78<SeP>97<SeP>130<SeP>83<SeP>59<SeP>25<SeP>49<SeP>68<SeP>92<SeP>53<SeP>72<SeP>89<SeP>69<SeP>53<SeP>101<SeP>142<SeP>84<SeP>44<SeP>32<SeP>43<SeP>63<SeP>198<SeP>106<SeP>81<SeP>58<SeP>68<SeP>118<SeP>53<SeP>83<SeP>105<SeP>193<SeP>68<SeP>48<SeP>37<SeP>164<SeP>55<SeP>77<SeP>78<SeP>113<SeP>108<SeP>79<SeP>93<SeP>89<SeP>52<SeP>82<SeP>99<SeP>61<SeP>81<SeP>92<SeP>87<SeP>115<SeP>83<SeP>93<SeP>164<SeP>46<SeP>76<SeP>133<SeP>77<SeP>44<SeP>71<SeP>180<SeP>90<SeP>175<SeP>79<SeP>94<SeP>110<SeP>51<SeP>71<SeP>96<SeP>89<SeP>48<SeP>89<SeP>38<SeP>79<SeP>61<SeP>60<SeP>51<SeP>115<SeP>69<SeP>98<SeP>108<SeP>63<SeP>85<SeP>58<SeP>47<SeP>81<SeP>58<SeP>55<SeP>54<SeP>54<SeP>96<SeP>77<SeP>72<SeP>87<SeP>76<SeP>46<SeP>31<SeP>208<SeP>68<SeP>81<SeP>66<SeP>66<SeP>64<SeP>113<SeP>46<SeP>39<SeP>55<SeP>183<SeP>83<SeP>67<SeP>26<SeP>80<SeP>68<SeP>45<SeP>41<SeP>61<SeP>164<SeP>67<SeP>58<SeP>119<SeP>64<SeP>40<SeP>70<SeP>17<SeP>48<SeP>43<SeP>29<SeP>97<SeP>59<SeP>74<SeP>59<SeP>87<SeP>262<SeP>59<SeP>33<SeP>60<SeP>50<SeP>118<SeP>123<SeP>89<SeP>50<SeP>79<SeP>34<SeP>204<SeP>41<SeP>118<SeP>85<SeP>59<SeP>18<SeP>115<SeP>32<SeP>42<SeP>68<SeP>53<SeP>47<SeP>99<SeP>120<SeP>106<SeP>92<SeP>53<SeP>71<SeP>34<SeP>51<SeP>123<SeP>123<SeP>44<SeP>85<SeP>169<SeP>67<SeP>63<SeP>52<SeP>63<SeP>83<SeP>434<SeP>44<SeP>43<SeP>23<SeP>31<SeP>47<SeP>48<SeP>60<SeP>109<SeP>76<SeP>176<SeP>73<SeP>203<SeP>219<SeP>50<SeP>104<SeP>300<SeP>111<SeP>176<SeP>56<SeP>53<SeP>64<SeP>43<SeP>69<SeP>54<SeP>68<SeP>21<SeP>21<SeP>92<SeP>43<SeP>94<SeP>61<SeP>66<SeP>64<SeP>30<SeP>61<SeP>26<SeP>32<SeP>49<SeP>98<SeP>29<SeP>797<SeP>60<SeP>101<SeP>71<SeP>154<SeP>98<SeP>81<SeP>27<SeP>16<SeP>51<SeP>171<SeP>85<SeP>89<SeP>72<SeP>42<SeP>112<SeP>15<SeP>51<SeP>114<SeP>129<SeP>60<SeP>48<SeP>53<SeP>62<SeP>42<SeP>112<SeP>33<SeP>103<SeP>68<SeP>77<SeP>74<SeP>62<SeP>95<SeP>53<SeP>111<SeP>168<SeP>81<SeP>133<SeP>93<SeP>80<SeP>80<SeP>40<SeP>67<SeP>69<SeP>136<SeP>91<SeP>97<SeP>58<SeP>71<SeP>75<SeP>68<SeP>73";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-12 00:00:00<SeP>2025-02-12 01:47:51<SeP>2025-02-12 03:35:42<SeP>2025-02-12 05:23:33<SeP>2025-02-12 07:11:24<SeP>2025-02-12 08:59:15<SeP>2025-02-12 10:47:06<SeP>2025-02-12 12:34:57<SeP>2025-02-12 14:22:48<SeP>2025-02-12 16:10:39<SeP>2025-02-12 17:58:30<SeP>2025-02-12 19:46:21<SeP>2025-02-12 21:34:12<SeP>2025-02-12 23:22:03<SeP>2025-02-13 01:09:54<SeP>2025-02-13 02:57:45<SeP>2025-02-13 04:45:36<SeP>2025-02-13 06:33:27<SeP>2025-02-13 08:21:18<SeP>2025-02-13 10:09:09<SeP>2025-02-13 11:57:00<SeP>2025-02-13 13:44:51<SeP>2025-02-13 15:32:42<SeP>2025-02-13 17:20:33<SeP>2025-02-13 19:08:24<SeP>2025-02-13 20:56:15<SeP>2025-02-13 22:44:06<SeP>2025-02-14 00:31:57<SeP>2025-02-14 02:19:48<SeP>2025-02-14 04:07:39<SeP>2025-02-14 05:55:30<SeP>2025-02-14 07:43:21<SeP>2025-02-14 09:31:12<SeP>2025-02-14 11:19:03<SeP>2025-02-14 13:06:54<SeP>2025-02-14 14:54:45<SeP>2025-02-14 16:42:36<SeP>2025-02-14 18:30:27<SeP>2025-02-14 20:18:18<SeP>2025-02-14 22:06:09<SeP>2025-02-14 23:54:00<SeP>2025-02-15 01:41:51<SeP>2025-02-15 03:29:42<SeP>2025-02-15 05:17:33<SeP>2025-02-15 07:05:24<SeP>2025-02-15 08:53:15<SeP>2025-02-15 10:41:06<SeP>2025-02-15 12:28:57<SeP>2025-02-15 14:16:48<SeP>2025-02-15 16:04:39<SeP>2025-02-15 17:52:30<SeP>2025-02-15 19:40:21<SeP>2025-02-15 21:28:12<SeP>2025-02-15 23:16:03<SeP>2025-02-16 01:03:54<SeP>2025-02-16 02:51:45<SeP>2025-02-16 04:39:36<SeP>2025-02-16 06:27:27<SeP>2025-02-16 08:15:18<SeP>2025-02-16 10:03:09<SeP>2025-02-16 11:51:00<SeP>2025-02-16 13:38:51<SeP>2025-02-16 15:26:42<SeP>2025-02-16 17:14:33<SeP>2025-02-16 19:02:24<SeP>2025-02-16 20:50:15<SeP>2025-02-16 22:38:06<SeP>2025-02-17 00:25:57<SeP>2025-02-17 02:13:48<SeP>2025-02-17 04:01:39<SeP>2025-02-17 05:49:30<SeP>2025-02-17 07:37:21<SeP>2025-02-17 09:25:12<SeP>2025-02-17 11:13:03<SeP>2025-02-17 13:00:54<SeP>2025-02-17 14:48:45<SeP>2025-02-17 16:36:36<SeP>2025-02-17 18:24:27<SeP>2025-02-17 20:12:18<SeP>2025-02-17 22:00:09<SeP>2025-02-17 23:48:00<SeP>2025-02-18 01:35:51<SeP>2025-02-18 03:23:42<SeP>2025-02-18 05:11:33<SeP>2025-02-18 06:59:24<SeP>2025-02-18 08:47:15<SeP>2025-02-18 10:35:06<SeP>2025-02-18 12:22:57<SeP>2025-02-18 14:10:48<SeP>2025-02-18 15:58:39<SeP>2025-02-18 17:46:30<SeP>2025-02-18 19:34:21<SeP>2025-02-18 21:22:12<SeP>2025-02-18 23:10:03<SeP>2025-02-19 00:57:54<SeP>2025-02-19 02:45:45<SeP>2025-02-19 04:33:36<SeP>2025-02-19 06:21:27<SeP>2025-02-19 08:09:18<SeP>2025-02-19 09:57:09<SeP>2025-02-19 11:45:00<SeP>2025-02-19 13:32:51<SeP>2025-02-19 15:20:42<SeP>2025-02-19 17:08:33<SeP>2025-02-19 18:56:24<SeP>2025-02-19 20:44:15<SeP>2025-02-19 22:32:06<SeP>2025-02-20 00:19:57<SeP>2025-02-20 02:07:48<SeP>2025-02-20 03:55:39<SeP>2025-02-20 05:43:30<SeP>2025-02-20 07:31:21<SeP>2025-02-20 09:19:12<SeP>2025-02-20 11:07:03<SeP>2025-02-20 12:54:54<SeP>2025-02-20 14:42:45<SeP>2025-02-20 16:30:36<SeP>2025-02-20 18:18:27<SeP>2025-02-20 20:06:18<SeP>2025-02-20 21:54:09<SeP>2025-02-20 23:42:00<SeP>2025-02-21 01:29:51<SeP>2025-02-21 03:17:42<SeP>2025-02-21 05:05:33<SeP>2025-02-21 06:53:24<SeP>2025-02-21 08:41:15<SeP>2025-02-21 10:29:06<SeP>2025-02-21 12:16:57<SeP>2025-02-21 14:04:48<SeP>2025-02-21 15:52:39<SeP>2025-02-21 17:40:30<SeP>2025-02-21 19:28:21<SeP>2025-02-21 21:16:12<SeP>2025-02-21 23:04:03<SeP>2025-02-22 00:51:54<SeP>2025-02-22 02:39:45<SeP>2025-02-22 04:27:36<SeP>2025-02-22 06:15:27<SeP>2025-02-22 08:03:18<SeP>2025-02-22 09:51:09<SeP>2025-02-22 11:39:00<SeP>2025-02-22 13:26:51<SeP>2025-02-22 15:14:42<SeP>2025-02-22 17:02:33<SeP>2025-02-22 18:50:24<SeP>2025-02-22 20:38:15<SeP>2025-02-22 22:26:06<SeP>2025-02-23 00:13:57<SeP>2025-02-23 02:01:48<SeP>2025-02-23 03:49:39<SeP>2025-02-23 05:37:30<SeP>2025-02-23 07:25:21<SeP>2025-02-23 09:13:12<SeP>2025-02-23 11:01:03<SeP>2025-02-23 12:48:54<SeP>2025-02-23 14:36:45<SeP>2025-02-23 16:24:36<SeP>2025-02-23 18:12:27<SeP>2025-02-23 20:00:18<SeP>2025-02-23 21:48:09<SeP>2025-02-23 23:36:00<SeP>2025-02-24 01:23:51<SeP>2025-02-24 03:11:42<SeP>2025-02-24 04:59:33<SeP>2025-02-24 06:47:24<SeP>2025-02-24 08:35:15<SeP>2025-02-24 10:23:06<SeP>2025-02-24 12:10:57<SeP>2025-02-24 13:58:48<SeP>2025-02-24 15:46:39<SeP>2025-02-24 17:34:30<SeP>2025-02-24 19:22:21<SeP>2025-02-24 21:10:12<SeP>2025-02-24 22:58:03<SeP>2025-02-25 00:45:54<SeP>2025-02-25 02:33:45<SeP>2025-02-25 04:21:36<SeP>2025-02-25 06:09:27<SeP>2025-02-25 07:57:18<SeP>2025-02-25 09:45:09<SeP>2025-02-25 11:33:00<SeP>2025-02-25 13:20:51<SeP>2025-02-25 15:08:42<SeP>2025-02-25 16:56:33<SeP>2025-02-25 18:44:24<SeP>2025-02-25 20:32:15<SeP>2025-02-25 22:20:06<SeP>2025-02-26 00:07:57<SeP>2025-02-26 01:55:48<SeP>2025-02-26 03:43:39<SeP>2025-02-26 05:31:30<SeP>2025-02-26 07:19:21<SeP>2025-02-26 09:07:12<SeP>2025-02-26 10:55:03<SeP>2025-02-26 12:42:54<SeP>2025-02-26 14:30:45<SeP>2025-02-26 16:18:36<SeP>2025-02-26 18:06:27<SeP>2025-02-26 19:54:18<SeP>2025-02-26 21:42:09<SeP>2025-02-26 23:30:00<SeP>2025-02-27 01:17:51<SeP>2025-02-27 03:05:42<SeP>2025-02-27 04:53:33<SeP>2025-02-27 06:41:24<SeP>2025-02-27 08:29:15<SeP>2025-02-27 10:17:06<SeP>2025-02-27 12:04:57<SeP>2025-02-27 13:52:48<SeP>2025-02-27 15:40:39<SeP>2025-02-27 17:28:30<SeP>2025-02-27 19:16:21<SeP>2025-02-27 21:04:12<SeP>2025-02-27 22:52:03<SeP>2025-02-28 00:39:54<SeP>2025-02-28 02:27:45<SeP>2025-02-28 04:15:36<SeP>2025-02-28 06:03:27<SeP>2025-02-28 07:51:18<SeP>2025-02-28 09:39:09<SeP>2025-02-28 11:27:00<SeP>2025-02-28 13:14:51<SeP>2025-02-28 15:02:42<SeP>2025-02-28 16:50:33<SeP>2025-02-28 18:38:24<SeP>2025-02-28 20:26:15<SeP>2025-02-28 22:14:06<SeP>2025-03-01 00:01:57<SeP>2025-03-01 01:49:48<SeP>2025-03-01 03:37:39<SeP>2025-03-01 05:25:30<SeP>2025-03-01 07:13:21<SeP>2025-03-01 09:01:12<SeP>2025-03-01 10:49:03<SeP>2025-03-01 12:36:54<SeP>2025-03-01 14:24:45<SeP>2025-03-01 16:12:36<SeP>2025-03-01 18:00:27<SeP>2025-03-01 19:48:18<SeP>2025-03-01 21:36:09<SeP>2025-03-01 23:24:00<SeP>2025-03-02 01:11:51<SeP>2025-03-02 02:59:42<SeP>2025-03-02 04:47:33<SeP>2025-03-02 06:35:24<SeP>2025-03-02 08:23:15<SeP>2025-03-02 10:11:06<SeP>2025-03-02 11:58:57<SeP>2025-03-02 13:46:48<SeP>2025-03-02 15:34:39<SeP>2025-03-02 17:22:30<SeP>2025-03-02 19:10:21<SeP>2025-03-02 20:58:12<SeP>2025-03-02 22:46:03<SeP>2025-03-03 00:33:54<SeP>2025-03-03 02:21:45<SeP>2025-03-03 04:09:36<SeP>2025-03-03 05:57:27<SeP>2025-03-03 07:45:18<SeP>2025-03-03 09:33:09<SeP>2025-03-03 11:21:00<SeP>2025-03-03 13:08:51<SeP>2025-03-03 14:56:42<SeP>2025-03-03 16:44:33<SeP>2025-03-03 18:32:24<SeP>2025-03-03 20:20:15<SeP>2025-03-03 22:08:06<SeP>2025-03-03 23:55:57<SeP>2025-03-04 01:43:48<SeP>2025-03-04 03:31:39<SeP>2025-03-04 05:19:30<SeP>2025-03-04 07:07:21<SeP>2025-03-04 08:55:12<SeP>2025-03-04 10:43:03<SeP>2025-03-04 12:30:54<SeP>2025-03-04 14:18:45<SeP>2025-03-04 16:06:36<SeP>2025-03-04 17:54:27<SeP>2025-03-04 19:42:18<SeP>2025-03-04 21:30:09<SeP>2025-03-04 23:18:00<SeP>2025-03-05 01:05:51<SeP>2025-03-05 02:53:42<SeP>2025-03-05 04:41:33<SeP>2025-03-05 06:29:24<SeP>2025-03-05 08:17:15<SeP>2025-03-05 10:05:06<SeP>2025-03-05 11:52:57<SeP>2025-03-05 13:40:48<SeP>2025-03-05 15:28:39<SeP>2025-03-05 17:16:30<SeP>2025-03-05 19:04:21<SeP>2025-03-05 20:52:12<SeP>2025-03-05 22:40:03<SeP>2025-03-06 00:27:54<SeP>2025-03-06 02:15:45<SeP>2025-03-06 04:03:36<SeP>2025-03-06 05:51:27<SeP>2025-03-06 07:39:18<SeP>2025-03-06 09:27:09<SeP>2025-03-06 11:15:00<SeP>2025-03-06 13:02:51<SeP>2025-03-06 14:50:42<SeP>2025-03-06 16:38:33<SeP>2025-03-06 18:26:24<SeP>2025-03-06 20:14:15<SeP>2025-03-06 22:02:06<SeP>2025-03-06 23:49:57<SeP>2025-03-07 01:37:48<SeP>2025-03-07 03:25:39<SeP>2025-03-07 05:13:30<SeP>2025-03-07 07:01:21<SeP>2025-03-07 08:49:12<SeP>2025-03-07 10:37:03<SeP>2025-03-07 12:24:54<SeP>2025-03-07 14:12:45<SeP>2025-03-07 16:00:36<SeP>2025-03-07 17:48:27<SeP>2025-03-07 19:36:18<SeP>2025-03-07 21:24:09<SeP>2025-03-07 23:12:00<SeP>2025-03-08 00:59:51<SeP>2025-03-08 02:47:42<SeP>2025-03-08 04:35:33<SeP>2025-03-08 06:23:24<SeP>2025-03-08 08:11:15<SeP>2025-03-08 09:59:06<SeP>2025-03-08 11:46:57<SeP>2025-03-08 13:34:48<SeP>2025-03-08 15:22:39<SeP>2025-03-08 17:10:30<SeP>2025-03-08 18:58:21<SeP>2025-03-08 20:46:12<SeP>2025-03-08 22:34:03<SeP>2025-03-09 00:21:54<SeP>2025-03-09 03:09:45<SeP>2025-03-09 04:57:36<SeP>2025-03-09 06:45:27<SeP>2025-03-09 08:33:18<SeP>2025-03-09 10:21:09<SeP>2025-03-09 12:09:00<SeP>2025-03-09 13:56:51<SeP>2025-03-09 15:44:42<SeP>2025-03-09 17:32:33<SeP>2025-03-09 19:20:24<SeP>2025-03-09 21:08:15<SeP>2025-03-09 22:56:06<SeP>2025-03-10 00:43:57<SeP>2025-03-10 02:31:48<SeP>2025-03-10 04:19:39<SeP>2025-03-10 06:07:30<SeP>2025-03-10 07:55:21<SeP>2025-03-10 09:43:12<SeP>2025-03-10 11:31:03<SeP>2025-03-10 13:18:54<SeP>2025-03-10 15:06:45<SeP>2025-03-10 16:54:36<SeP>2025-03-10 18:42:27<SeP>2025-03-10 20:30:18<SeP>2025-03-10 22:18:09<SeP>2025-03-11 00:06:00<SeP>2025-03-11 01:53:51<SeP>2025-03-11 03:41:42<SeP>2025-03-11 05:29:33<SeP>2025-03-11 07:17:24<SeP>2025-03-11 09:05:15<SeP>2025-03-11 10:53:06<SeP>2025-03-11 12:40:57<SeP>2025-03-11 14:28:48<SeP>2025-03-11 16:16:39<SeP>2025-03-11 18:04:30<SeP>2025-03-11 19:52:21<SeP>2025-03-11 21:40:12<SeP>2025-03-11 23:28:03<SeP>2025-03-12 01:15:54<SeP>2025-03-12 03:03:45<SeP>2025-03-12 04:51:36<SeP>2025-03-12 06:39:27<SeP>2025-03-12 08:27:18<SeP>2025-03-12 10:15:09<SeP>2025-03-12 12:03:00<SeP>2025-03-12 13:50:51<SeP>2025-03-12 15:38:42<SeP>2025-03-12 17:26:33<SeP>2025-03-12 19:14:24<SeP>2025-03-12 21:02:15<SeP>2025-03-12 22:50:06<SeP>2025-03-13 00:37:57<SeP>2025-03-13 02:25:48<SeP>2025-03-13 04:13:39<SeP>2025-03-13 06:01:30<SeP>2025-03-13 07:49:21<SeP>2025-03-13 09:37:12<SeP>2025-03-13 11:25:03<SeP>2025-03-13 13:12:54<SeP>2025-03-13 15:00:45<SeP>2025-03-13 16:48:36<SeP>2025-03-13 18:36:27<SeP>2025-03-13 20:24:18<SeP>2025-03-13 22:12:09";
  const itemLabel       = "Ataques";
  const itemData        = "194<SeP>439<SeP>897<SeP>3214<SeP>2753<SeP>510<SeP>312<SeP>318<SeP>224<SeP>661<SeP>266<SeP>185<SeP>126<SeP>32<SeP>51<SeP>568<SeP>93<SeP>235<SeP>135<SeP>325<SeP>100<SeP>251<SeP>893<SeP>213<SeP>533<SeP>130<SeP>190<SeP>239<SeP>182<SeP>485<SeP>266<SeP>277<SeP>358<SeP>40<SeP>293<SeP>364<SeP>173<SeP>382<SeP>201<SeP>159<SeP>26<SeP>253<SeP>59<SeP>545<SeP>367<SeP>145<SeP>182<SeP>240<SeP>103<SeP>46<SeP>92<SeP>413<SeP>107<SeP>215<SeP>68<SeP>52<SeP>25<SeP>475<SeP>174<SeP>208<SeP>45<SeP>404<SeP>200<SeP>182<SeP>588<SeP>184<SeP>277<SeP>229<SeP>368<SeP>162<SeP>196<SeP>388<SeP>312<SeP>295<SeP>242<SeP>80<SeP>129<SeP>506<SeP>43<SeP>121<SeP>207<SeP>514<SeP>100<SeP>179<SeP>295<SeP>46<SeP>281<SeP>192<SeP>265<SeP>274<SeP>221<SeP>239<SeP>9<SeP>206<SeP>118<SeP>150<SeP>496<SeP>125<SeP>38<SeP>146<SeP>60<SeP>25<SeP>90<SeP>419<SeP>177<SeP>173<SeP>179<SeP>188<SeP>222<SeP>102<SeP>90<SeP>159<SeP>23<SeP>8<SeP>250<SeP>201<SeP>185<SeP>710<SeP>480<SeP>351<SeP>644<SeP>372<SeP>536<SeP>329<SeP>196<SeP>525<SeP>450<SeP>383<SeP>392<SeP>354<SeP>1073<SeP>574<SeP>929<SeP>451<SeP>290<SeP>262<SeP>329<SeP>277<SeP>736<SeP>528<SeP>567<SeP>521<SeP>271<SeP>410<SeP>520<SeP>624<SeP>808<SeP>272<SeP>502<SeP>427<SeP>720<SeP>274<SeP>339<SeP>507<SeP>702<SeP>613<SeP>478<SeP>341<SeP>90<SeP>163<SeP>264<SeP>148<SeP>159<SeP>521<SeP>57<SeP>119<SeP>359<SeP>64<SeP>93<SeP>50<SeP>405<SeP>225<SeP>221<SeP>148<SeP>359<SeP>256<SeP>73<SeP>245<SeP>116<SeP>382<SeP>266<SeP>290<SeP>133<SeP>212<SeP>42<SeP>140<SeP>92<SeP>155<SeP>29<SeP>201<SeP>221<SeP>53<SeP>174<SeP>119<SeP>85<SeP>69<SeP>69<SeP>45<SeP>337<SeP>202<SeP>331<SeP>47<SeP>270<SeP>424<SeP>218<SeP>140<SeP>106<SeP>205<SeP>224<SeP>141<SeP>30<SeP>44<SeP>144<SeP>139<SeP>245<SeP>90<SeP>211<SeP>244<SeP>106<SeP>384<SeP>77<SeP>353<SeP>68<SeP>70<SeP>48<SeP>37<SeP>147<SeP>31<SeP>26<SeP>82<SeP>40<SeP>83<SeP>82<SeP>19<SeP>113<SeP>171<SeP>129<SeP>68<SeP>107<SeP>170<SeP>175<SeP>431<SeP>82<SeP>63<SeP>310<SeP>15<SeP>25<SeP>60<SeP>222<SeP>24<SeP>85<SeP>56<SeP>182<SeP>92<SeP>68<SeP>301<SeP>80<SeP>52<SeP>79<SeP>45<SeP>32<SeP>406<SeP>131<SeP>84<SeP>52<SeP>99<SeP>225<SeP>42<SeP>172<SeP>314<SeP>28<SeP>26<SeP>101<SeP>215<SeP>44<SeP>61<SeP>53<SeP>114<SeP>14<SeP>89<SeP>353<SeP>119<SeP>94<SeP>112<SeP>66<SeP>42<SeP>32<SeP>27<SeP>127<SeP>229<SeP>49<SeP>135<SeP>228<SeP>95<SeP>29<SeP>18<SeP>170<SeP>124<SeP>190<SeP>59<SeP>106<SeP>84<SeP>93<SeP>63<SeP>163<SeP>48<SeP>157<SeP>114<SeP>101<SeP>144<SeP>546<SeP>164<SeP>71<SeP>119<SeP>143<SeP>39<SeP>46<SeP>117<SeP>57<SeP>99<SeP>104<SeP>237<SeP>56<SeP>19<SeP>13<SeP>153<SeP>138<SeP>33<SeP>69<SeP>25<SeP>17<SeP>74<SeP>287<SeP>57<SeP>104<SeP>161<SeP>28<SeP>12<SeP>30<SeP>86<SeP>39<SeP>56<SeP>303<SeP>33<SeP>12<SeP>42<SeP>500<SeP>394<SeP>297<SeP>337<SeP>43<SeP>120<SeP>34<SeP>83<SeP>104<SeP>78<SeP>78<SeP>27<SeP>381<SeP>156<SeP>278<SeP>69<SeP>70<SeP>110<SeP>151<SeP>30<SeP>159<SeP>75<SeP>565<SeP>110<SeP>30<SeP>55<SeP>147<SeP>103<SeP>183<SeP>29<SeP>19<SeP>106<SeP>178<SeP>111<SeP>181<SeP>140<SeP>366<SeP>126<SeP>177<SeP>173<SeP>130<SeP>256<SeP>132<SeP>179<SeP>124<SeP>102<SeP>134<SeP>218<SeP>139<SeP>388<SeP>149<SeP>132<SeP>32<SeP>65";
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
  const itemData    = "20722<SeP>14081<SeP>12294<SeP>8771<SeP>5691<SeP>5266<SeP>4514<SeP>4039<SeP>3893<SeP>3761";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Macao<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "13952<SeP>3304<SeP>2349<SeP>2253<SeP>1261<SeP>1171<SeP>951<SeP>914<SeP>725<SeP>583";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Romania<SeP>Russia";
  const itemLabel   = "Attacks";
  const itemData    = "11343<SeP>10777<SeP>8188<SeP>6770<SeP>4541<SeP>3734<SeP>3573<SeP>3342<SeP>3328<SeP>2778";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>4837<SeP>16276<SeP>207566<SeP>136052";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "10346<SeP>9453<SeP>8853<SeP>6226<SeP>4179<SeP>3631<SeP>2959<SeP>2950<SeP>2544<SeP>2443";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4609<SeP>9269<SeP>3462<SeP>4766<SeP>14061<SeP>4811";
  const itemLabel   = "Scans";
  const itemData    = "8099<SeP>2609<SeP>1824<SeP>1271<SeP>1171<SeP>802<SeP>800<SeP>610<SeP>580<SeP>487";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "3462<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>136052<SeP>56971<SeP>4134<SeP>207566";
  const itemLabel   = "Atacks";
  const itemData    = "9546<SeP>8273<SeP>6225<SeP>3569<SeP>3237<SeP>2818<SeP>2442<SeP>1580<SeP>1354<SeP>1273";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>India<SeP>South Korea<SeP>Hong Kong<SeP>Russia<SeP>Indonesia<SeP>France";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "20722<SeP>14081<SeP>12294<SeP>8771<SeP>5691<SeP>5266<SeP>4514<SeP>4039<SeP>3893<SeP>3761";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Macao<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "13952<SeP>3304<SeP>2349<SeP>2253<SeP>1261<SeP>1171<SeP>951<SeP>914<SeP>725<SeP>583";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Romania<SeP>Russia";
  const itemLabel   = "Ataques";
  const itemData    = "11343<SeP>10777<SeP>8188<SeP>6770<SeP>4541<SeP>3734<SeP>3573<SeP>3342<SeP>3328<SeP>2778";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>4837<SeP>16276<SeP>207566<SeP>136052";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "10346<SeP>9453<SeP>8853<SeP>6226<SeP>4179<SeP>3631<SeP>2959<SeP>2950<SeP>2544<SeP>2443";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4609<SeP>9269<SeP>3462<SeP>4766<SeP>14061<SeP>4811";
  const itemLabel   = "Escaneos";
  const itemData    = "8099<SeP>2609<SeP>1824<SeP>1271<SeP>1171<SeP>802<SeP>800<SeP>610<SeP>580<SeP>487";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "3462<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>136052<SeP>56971<SeP>4134<SeP>207566";
  const itemLabel   = "Ataques";
  const itemData    = "9546<SeP>8273<SeP>6225<SeP>3569<SeP>3237<SeP>2818<SeP>2442<SeP>1580<SeP>1354<SeP>1273";
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
