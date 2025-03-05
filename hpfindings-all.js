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
  document.getElementById("last-updated").innerHTML = "2025-3-5";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.3";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.3";
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
  const metricData    = "2839260";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "552825";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2286435";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140011";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1435051";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "851384";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54249";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "249550";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "601834";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43545";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2839260";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "552825";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2286435";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140011";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1435051";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "851384";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54249";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "249550";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "601834";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43545";
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
  const incomingData = "2839260<SeP>552825<SeP>2286435<SeP>140011";
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
  const incomingData = "2286435<SeP>1435051<SeP>851384<SeP>54249";
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
  const incomingData = "851384<SeP>249550<SeP>601834<SeP>43545";
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
  const incomingData = "2560264<SeP>257333<SeP>2302931";
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
  const incomingData = "388202<SeP>149<SeP>388053<SeP>228";
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
  const incomingData = "2839260<SeP>552825<SeP>2286435<SeP>140011";
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
  const incomingData = "2286435<SeP>1435051<SeP>851384<SeP>54249";
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
  const incomingData = "851384<SeP>249550<SeP>601834<SeP>43545";
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
  const incomingData = "2560264<SeP>257333<SeP>2302931";
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
  const incomingData = "388202<SeP>149<SeP>388053<SeP>228";
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
  const column3Data   = "220759<SeP>202288<SeP>12606<SeP>12464<SeP>9767<SeP>9447<SeP>6449<SeP>5593<SeP>4632<SeP>3500";
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
  const column2Data  = "212114<SeP>43127<SeP>847<SeP>485<SeP>461<SeP>442<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2404190<SeP>435070";
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
  const column3Data   = "220759<SeP>202288<SeP>12606<SeP>12464<SeP>9767<SeP>9447<SeP>6449<SeP>5593<SeP>4632<SeP>3500";
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
  const column2Data  = "212114<SeP>43127<SeP>847<SeP>485<SeP>461<SeP>442<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2404190<SeP>435070";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-5";

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
        "name": "traffic between 2023-07-26 and 2025-03-03"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          365819,50
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
        "name": "scans between 2023-07-26 and 2025-03-03"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          226890,32,
          365819,50
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
        "name": "attacks between 2023-07-26 and 2025-03-03"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138929,21,
          365819,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-5";

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
        "name": "tráfico entre 2023-07-26 y 2025-03-03"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          365819,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-03"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          226890,32,
          365819,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-03"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138929,21,
          365819,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:16:57<SeP>2023-07-28 22:33:54<SeP>2023-07-30 09:50:51<SeP>2023-07-31 21:07:48<SeP>2023-08-02 08:24:45<SeP>2023-08-03 19:41:42<SeP>2023-08-05 06:58:39<SeP>2023-08-06 18:15:36<SeP>2023-08-08 05:32:33<SeP>2023-08-09 16:49:30<SeP>2023-08-11 04:06:27<SeP>2023-08-12 15:23:24<SeP>2023-08-14 02:40:21<SeP>2023-08-15 13:57:18<SeP>2023-08-17 01:14:15<SeP>2023-08-18 12:31:12<SeP>2023-08-19 23:48:09<SeP>2023-08-21 11:05:06<SeP>2023-08-22 22:22:03<SeP>2023-08-24 09:39:00<SeP>2023-08-25 20:55:57<SeP>2023-08-27 08:12:54<SeP>2023-08-28 19:29:51<SeP>2023-08-30 06:46:48<SeP>2023-08-31 18:03:45<SeP>2023-09-02 05:20:42<SeP>2023-09-03 16:37:39<SeP>2023-09-05 03:54:36<SeP>2023-09-06 15:11:33<SeP>2023-09-08 02:28:30<SeP>2023-09-09 13:45:27<SeP>2023-09-11 01:02:24<SeP>2023-09-12 12:19:21<SeP>2023-09-13 23:36:18<SeP>2023-09-15 10:53:15<SeP>2023-09-16 22:10:12<SeP>2023-09-18 09:27:09<SeP>2023-09-19 20:44:06<SeP>2023-09-21 08:01:03<SeP>2023-09-22 19:18:00<SeP>2023-09-24 06:34:57<SeP>2023-09-25 17:51:54<SeP>2023-09-27 05:08:51<SeP>2023-09-28 16:25:48<SeP>2023-09-30 03:42:45<SeP>2023-10-01 14:59:42<SeP>2023-10-03 02:16:39<SeP>2023-10-04 13:33:36<SeP>2023-10-06 00:50:33<SeP>2023-10-07 12:07:30<SeP>2023-10-08 23:24:27<SeP>2023-10-10 10:41:24<SeP>2023-10-11 21:58:21<SeP>2023-10-13 09:15:18<SeP>2023-10-14 20:32:15<SeP>2023-10-16 07:49:12<SeP>2023-10-17 19:06:09<SeP>2023-10-19 06:23:06<SeP>2023-10-20 17:40:03<SeP>2023-10-22 04:57:00<SeP>2023-10-23 16:13:57<SeP>2023-10-25 03:30:54<SeP>2023-10-26 14:47:51<SeP>2023-10-28 02:04:48<SeP>2023-10-29 13:21:45<SeP>2023-10-31 00:38:42<SeP>2023-11-01 11:55:39<SeP>2023-11-02 23:12:36<SeP>2023-11-04 10:29:33<SeP>2023-11-05 20:46:30<SeP>2023-11-07 08:03:27<SeP>2023-11-08 19:20:24<SeP>2023-11-10 06:37:21<SeP>2023-11-11 17:54:18<SeP>2023-11-13 05:11:15<SeP>2023-11-14 16:28:12<SeP>2023-11-16 03:45:09<SeP>2023-11-17 15:02:06<SeP>2023-11-19 02:19:03<SeP>2023-11-20 13:36:00<SeP>2023-11-22 00:52:57<SeP>2023-11-23 12:09:54<SeP>2023-11-24 23:26:51<SeP>2023-11-26 10:43:48<SeP>2023-11-27 22:00:45<SeP>2023-11-29 09:17:42<SeP>2023-11-30 20:34:39<SeP>2023-12-02 07:51:36<SeP>2023-12-03 19:08:33<SeP>2023-12-05 06:25:30<SeP>2023-12-06 17:42:27<SeP>2023-12-08 04:59:24<SeP>2023-12-09 16:16:21<SeP>2023-12-11 03:33:18<SeP>2023-12-12 14:50:15<SeP>2023-12-14 02:07:12<SeP>2023-12-15 13:24:09<SeP>2023-12-17 00:41:06<SeP>2023-12-18 11:58:03<SeP>2023-12-19 23:15:00<SeP>2023-12-21 10:31:57<SeP>2023-12-22 21:48:54<SeP>2023-12-24 09:05:51<SeP>2023-12-25 20:22:48<SeP>2023-12-27 07:39:45<SeP>2023-12-28 18:56:42<SeP>2023-12-30 06:13:39<SeP>2023-12-31 17:30:36<SeP>2024-01-02 04:47:33<SeP>2024-01-03 16:04:30<SeP>2024-01-05 03:21:27<SeP>2024-01-06 14:38:24<SeP>2024-01-08 01:55:21<SeP>2024-01-09 13:12:18<SeP>2024-01-11 00:29:15<SeP>2024-01-12 11:46:12<SeP>2024-01-13 23:03:09<SeP>2024-01-15 10:20:06<SeP>2024-01-16 21:37:03<SeP>2024-01-18 08:54:00<SeP>2024-01-19 20:10:57<SeP>2024-01-21 07:27:54<SeP>2024-01-22 18:44:51<SeP>2024-01-24 06:01:48<SeP>2024-01-25 17:18:45<SeP>2024-01-27 04:35:42<SeP>2024-01-28 15:52:39<SeP>2024-01-30 03:09:36<SeP>2024-01-31 14:26:33<SeP>2024-02-02 01:43:30<SeP>2024-02-03 13:00:27<SeP>2024-02-05 00:17:24<SeP>2024-02-06 11:34:21<SeP>2024-02-07 22:51:18<SeP>2024-02-09 10:08:15<SeP>2024-02-10 21:25:12<SeP>2024-02-12 08:42:09<SeP>2024-02-13 19:59:06<SeP>2024-02-15 07:16:03<SeP>2024-02-16 18:33:00<SeP>2024-02-18 05:49:57<SeP>2024-02-19 17:06:54<SeP>2024-02-21 04:23:51<SeP>2024-02-22 15:40:48<SeP>2024-02-24 02:57:45<SeP>2024-02-25 14:14:42<SeP>2024-02-27 01:31:39<SeP>2024-02-28 12:48:36<SeP>2024-03-01 00:05:33<SeP>2024-03-02 11:22:30<SeP>2024-03-03 22:39:27<SeP>2024-03-05 09:56:24<SeP>2024-03-06 21:13:21<SeP>2024-03-08 08:30:18<SeP>2024-03-09 19:47:15<SeP>2024-03-11 08:04:12<SeP>2024-03-12 19:21:09<SeP>2024-03-14 06:38:06<SeP>2024-03-15 17:55:03<SeP>2024-03-17 05:12:00<SeP>2024-03-18 16:28:57<SeP>2024-03-20 03:45:54<SeP>2024-03-21 15:02:51<SeP>2024-03-23 02:19:48<SeP>2024-03-24 13:36:45<SeP>2024-03-26 00:53:42<SeP>2024-03-27 12:10:39<SeP>2024-03-28 23:27:36<SeP>2024-03-30 10:44:33<SeP>2024-03-31 22:01:30<SeP>2024-04-02 09:18:27<SeP>2024-04-03 20:35:24<SeP>2024-04-05 07:52:21<SeP>2024-04-06 19:09:18<SeP>2024-04-08 06:26:15<SeP>2024-04-09 17:43:12<SeP>2024-04-11 05:00:09<SeP>2024-04-12 16:17:06<SeP>2024-04-14 03:34:03<SeP>2024-04-15 14:51:00<SeP>2024-04-17 02:07:57<SeP>2024-04-18 13:24:54<SeP>2024-04-20 00:41:51<SeP>2024-04-21 11:58:48<SeP>2024-04-22 23:15:45<SeP>2024-04-24 10:32:42<SeP>2024-04-25 21:49:39<SeP>2024-04-27 09:06:36<SeP>2024-04-28 20:23:33<SeP>2024-04-30 07:40:30<SeP>2024-05-01 18:57:27<SeP>2024-05-03 06:14:24<SeP>2024-05-04 17:31:21<SeP>2024-05-06 04:48:18<SeP>2024-05-07 16:05:15<SeP>2024-05-09 03:22:12<SeP>2024-05-10 14:39:09<SeP>2024-05-12 01:56:06<SeP>2024-05-13 13:13:03<SeP>2024-05-15 00:30:00<SeP>2024-05-16 11:46:57<SeP>2024-05-17 23:03:54<SeP>2024-05-19 10:20:51<SeP>2024-05-20 21:37:48<SeP>2024-05-22 08:54:45<SeP>2024-05-23 20:11:42<SeP>2024-05-25 07:28:39<SeP>2024-05-26 18:45:36<SeP>2024-05-28 06:02:33<SeP>2024-05-29 17:19:30<SeP>2024-05-31 04:36:27<SeP>2024-06-01 15:53:24<SeP>2024-06-03 03:10:21<SeP>2024-06-04 14:27:18<SeP>2024-06-06 01:44:15<SeP>2024-06-07 13:01:12<SeP>2024-06-09 00:18:09<SeP>2024-06-10 11:35:06<SeP>2024-06-11 22:52:03<SeP>2024-06-13 10:09:00<SeP>2024-06-14 21:25:57<SeP>2024-06-16 08:42:54<SeP>2024-06-17 19:59:51<SeP>2024-06-19 07:16:48<SeP>2024-06-20 18:33:45<SeP>2024-06-22 05:50:42<SeP>2024-06-23 17:07:39<SeP>2024-06-25 04:24:36<SeP>2024-06-26 15:41:33<SeP>2024-06-28 02:58:30<SeP>2024-06-29 14:15:27<SeP>2024-07-01 01:32:24<SeP>2024-07-02 12:49:21<SeP>2024-07-04 00:06:18<SeP>2024-07-05 11:23:15<SeP>2024-07-06 22:40:12<SeP>2024-07-08 09:57:09<SeP>2024-07-09 21:14:06<SeP>2024-07-11 08:31:03<SeP>2024-07-12 19:48:00<SeP>2024-07-14 07:04:57<SeP>2024-07-15 18:21:54<SeP>2024-07-17 05:38:51<SeP>2024-07-18 16:55:48<SeP>2024-07-20 04:12:45<SeP>2024-07-21 15:29:42<SeP>2024-07-23 02:46:39<SeP>2024-07-24 14:03:36<SeP>2024-07-26 01:20:33<SeP>2024-07-27 12:37:30<SeP>2024-07-28 23:54:27<SeP>2024-07-30 11:11:24<SeP>2024-07-31 22:28:21<SeP>2024-08-02 09:45:18<SeP>2024-08-03 21:02:15<SeP>2024-08-05 08:19:12<SeP>2024-08-06 19:36:09<SeP>2024-08-08 06:53:06<SeP>2024-08-09 18:10:03<SeP>2024-08-11 05:27:00<SeP>2024-08-12 16:43:57<SeP>2024-08-14 04:00:54<SeP>2024-08-15 15:17:51<SeP>2024-08-17 02:34:48<SeP>2024-08-18 13:51:45<SeP>2024-08-20 01:08:42<SeP>2024-08-21 12:25:39<SeP>2024-08-22 23:42:36<SeP>2024-08-24 10:59:33<SeP>2024-08-25 22:16:30<SeP>2024-08-27 09:33:27<SeP>2024-08-28 20:50:24<SeP>2024-08-30 08:07:21<SeP>2024-08-31 19:24:18<SeP>2024-09-02 06:41:15<SeP>2024-09-03 17:58:12<SeP>2024-09-05 05:15:09<SeP>2024-09-06 16:32:06<SeP>2024-09-08 03:49:03<SeP>2024-09-09 15:06:00<SeP>2024-09-11 02:22:57<SeP>2024-09-12 13:39:54<SeP>2024-09-14 00:56:51<SeP>2024-09-15 12:13:48<SeP>2024-09-16 23:30:45<SeP>2024-09-18 10:47:42<SeP>2024-09-19 22:04:39<SeP>2024-09-21 09:21:36<SeP>2024-09-22 20:38:33<SeP>2024-09-24 07:55:30<SeP>2024-09-25 19:12:27<SeP>2024-09-27 06:29:24<SeP>2024-09-28 17:46:21<SeP>2024-09-30 05:03:18<SeP>2024-10-01 16:20:15<SeP>2024-10-03 03:37:12<SeP>2024-10-04 14:54:09<SeP>2024-10-06 02:11:06<SeP>2024-10-07 13:28:03<SeP>2024-10-09 00:45:00<SeP>2024-10-10 12:01:57<SeP>2024-10-11 23:18:54<SeP>2024-10-13 10:35:51<SeP>2024-10-14 21:52:48<SeP>2024-10-16 09:09:45<SeP>2024-10-17 20:26:42<SeP>2024-10-19 07:43:39<SeP>2024-10-20 19:00:36<SeP>2024-10-22 06:17:33<SeP>2024-10-23 17:34:30<SeP>2024-10-25 04:51:27<SeP>2024-10-26 16:08:24<SeP>2024-10-28 03:25:21<SeP>2024-10-29 14:42:18<SeP>2024-10-31 01:59:15<SeP>2024-11-01 13:16:12<SeP>2024-11-03 00:33:09<SeP>2024-11-04 10:50:06<SeP>2024-11-05 22:07:03<SeP>2024-11-07 09:24:00<SeP>2024-11-08 20:40:57<SeP>2024-11-10 07:57:54<SeP>2024-11-11 19:14:51<SeP>2024-11-13 06:31:48<SeP>2024-11-14 17:48:45<SeP>2024-11-16 05:05:42<SeP>2024-11-17 16:22:39<SeP>2024-11-19 03:39:36<SeP>2024-11-20 14:56:33<SeP>2024-11-22 02:13:30<SeP>2024-11-23 13:30:27<SeP>2024-11-25 00:47:24<SeP>2024-11-26 12:04:21<SeP>2024-11-27 23:21:18<SeP>2024-11-29 10:38:15<SeP>2024-11-30 21:55:12<SeP>2024-12-02 09:12:09<SeP>2024-12-03 20:29:06<SeP>2024-12-05 07:46:03<SeP>2024-12-06 19:03:00<SeP>2024-12-08 06:19:57<SeP>2024-12-09 17:36:54<SeP>2024-12-11 04:53:51<SeP>2024-12-12 16:10:48<SeP>2024-12-14 03:27:45<SeP>2024-12-15 14:44:42<SeP>2024-12-17 02:01:39<SeP>2024-12-18 13:18:36<SeP>2024-12-20 00:35:33<SeP>2024-12-21 11:52:30<SeP>2024-12-22 23:09:27<SeP>2024-12-24 10:26:24<SeP>2024-12-25 21:43:21<SeP>2024-12-27 09:00:18<SeP>2024-12-28 20:17:15<SeP>2024-12-30 07:34:12<SeP>2024-12-31 18:51:09<SeP>2025-01-02 06:08:06<SeP>2025-01-03 17:25:03<SeP>2025-01-05 04:42:00<SeP>2025-01-06 15:58:57<SeP>2025-01-08 03:15:54<SeP>2025-01-09 14:32:51<SeP>2025-01-11 01:49:48<SeP>2025-01-12 13:06:45<SeP>2025-01-14 00:23:42<SeP>2025-01-15 11:40:39<SeP>2025-01-16 22:57:36<SeP>2025-01-18 10:14:33<SeP>2025-01-19 21:31:30<SeP>2025-01-21 08:48:27<SeP>2025-01-22 20:05:24<SeP>2025-01-24 07:22:21<SeP>2025-01-25 18:39:18<SeP>2025-01-27 05:56:15<SeP>2025-01-28 17:13:12<SeP>2025-01-30 04:30:09<SeP>2025-01-31 15:47:06<SeP>2025-02-02 03:04:03<SeP>2025-02-03 14:21:00<SeP>2025-02-05 01:37:57<SeP>2025-02-06 12:54:54<SeP>2025-02-08 00:11:51<SeP>2025-02-09 11:28:48<SeP>2025-02-10 22:45:45<SeP>2025-02-12 10:02:42<SeP>2025-02-13 21:19:39<SeP>2025-02-15 08:36:36<SeP>2025-02-16 19:53:33<SeP>2025-02-18 07:10:30<SeP>2025-02-19 18:27:27<SeP>2025-02-21 05:44:24<SeP>2025-02-22 17:01:21<SeP>2025-02-24 04:18:18<SeP>2025-02-25 15:35:15<SeP>2025-02-27 02:52:12<SeP>2025-02-28 14:09:09<SeP>2025-03-02 01:26:06<SeP>2025-03-03 12:43:03";
  const item1Label       = "Scans";
  const item1Data        = "770<SeP>1513<SeP>1367<SeP>1458<SeP>1247<SeP>1727<SeP>955<SeP>965<SeP>1171<SeP>3409<SeP>2696<SeP>1687<SeP>3215<SeP>990<SeP>758<SeP>915<SeP>1413<SeP>2925<SeP>1756<SeP>1190<SeP>1262<SeP>947<SeP>1015<SeP>1290<SeP>892<SeP>860<SeP>802<SeP>3785<SeP>703<SeP>1003<SeP>847<SeP>1771<SeP>889<SeP>835<SeP>3106<SeP>2546<SeP>2064<SeP>1677<SeP>1725<SeP>1279<SeP>1550<SeP>1828<SeP>1946<SeP>1964<SeP>1662<SeP>1648<SeP>1668<SeP>1719<SeP>1624<SeP>1787<SeP>1872<SeP>1792<SeP>1617<SeP>3185<SeP>1352<SeP>1864<SeP>1932<SeP>1857<SeP>2117<SeP>1976<SeP>3315<SeP>1433<SeP>1488<SeP>1485<SeP>1449<SeP>1956<SeP>1557<SeP>1254<SeP>1441<SeP>1268<SeP>2329<SeP>1195<SeP>1135<SeP>1250<SeP>2284<SeP>7311<SeP>1161<SeP>1351<SeP>1344<SeP>1623<SeP>2016<SeP>1084<SeP>6729<SeP>1529<SeP>1642<SeP>914<SeP>2099<SeP>2422<SeP>1186<SeP>1003<SeP>1014<SeP>1170<SeP>2437<SeP>1529<SeP>1133<SeP>1640<SeP>3959<SeP>5355<SeP>1242<SeP>924<SeP>958<SeP>978<SeP>951<SeP>963<SeP>1101<SeP>2233<SeP>3436<SeP>1687<SeP>1243<SeP>1340<SeP>631<SeP>1462<SeP>1314<SeP>1118<SeP>963<SeP>2295<SeP>1066<SeP>1193<SeP>1094<SeP>919<SeP>1183<SeP>660<SeP>909<SeP>852<SeP>796<SeP>1108<SeP>831<SeP>921<SeP>808<SeP>903<SeP>901<SeP>657<SeP>778<SeP>860<SeP>917<SeP>881<SeP>822<SeP>851<SeP>832<SeP>785<SeP>1058<SeP>805<SeP>872<SeP>881<SeP>973<SeP>991<SeP>964<SeP>965<SeP>543<SeP>912<SeP>866<SeP>1190<SeP>916<SeP>967<SeP>1220<SeP>1305<SeP>900<SeP>942<SeP>873<SeP>982<SeP>731<SeP>1046<SeP>999<SeP>970<SeP>911<SeP>962<SeP>1026<SeP>1100<SeP>975<SeP>1017<SeP>1038<SeP>941<SeP>1006<SeP>1819<SeP>1428<SeP>1232<SeP>1115<SeP>910<SeP>1155<SeP>1008<SeP>971<SeP>777<SeP>853<SeP>898<SeP>1165<SeP>788<SeP>1047<SeP>1291<SeP>1114<SeP>1154<SeP>1313<SeP>1178<SeP>1294<SeP>1274<SeP>1305<SeP>1521<SeP>1727<SeP>1703<SeP>1369<SeP>748<SeP>831<SeP>1127<SeP>1106<SeP>577<SeP>742<SeP>854<SeP>1009<SeP>1250<SeP>5987<SeP>2597<SeP>1967<SeP>1244<SeP>924<SeP>991<SeP>940<SeP>959<SeP>937<SeP>1148<SeP>1026<SeP>1066<SeP>1763<SeP>1732<SeP>1011<SeP>1319<SeP>1208<SeP>1170<SeP>1155<SeP>1005<SeP>1034<SeP>1083<SeP>1117<SeP>1062<SeP>1099<SeP>992<SeP>1145<SeP>817<SeP>1402<SeP>1108<SeP>1139<SeP>1191<SeP>1271<SeP>1307<SeP>1589<SeP>1207<SeP>1139<SeP>1264<SeP>1027<SeP>2015<SeP>1204<SeP>1721<SeP>1836<SeP>1376<SeP>2021<SeP>1726<SeP>1125<SeP>1259<SeP>1209<SeP>1145<SeP>1620<SeP>1348<SeP>1134<SeP>1517<SeP>1898<SeP>1269<SeP>1511<SeP>1401<SeP>1348<SeP>1177<SeP>1180<SeP>1245<SeP>1190<SeP>1206<SeP>1259<SeP>1268<SeP>1342<SeP>1868<SeP>1338<SeP>1296<SeP>1574<SeP>1537<SeP>1171<SeP>1149<SeP>908<SeP>900<SeP>874<SeP>1038<SeP>1000<SeP>1796<SeP>1087<SeP>1136<SeP>1168<SeP>784<SeP>1015<SeP>1002<SeP>1319<SeP>874<SeP>907<SeP>1148<SeP>1379<SeP>1616<SeP>1299<SeP>1071<SeP>1051<SeP>1105<SeP>1808<SeP>944<SeP>1260<SeP>1003<SeP>1474<SeP>1182<SeP>843<SeP>1236<SeP>1038<SeP>980<SeP>891<SeP>1118<SeP>1353<SeP>1585<SeP>1423<SeP>1361<SeP>1372<SeP>985<SeP>1167<SeP>1188<SeP>1170<SeP>1049<SeP>1091<SeP>1022<SeP>1243<SeP>1317<SeP>1505<SeP>1283<SeP>1568<SeP>1343<SeP>1621<SeP>1399<SeP>1297<SeP>1465<SeP>1476<SeP>1450<SeP>1339<SeP>1570<SeP>1510<SeP>1656<SeP>1324<SeP>1364<SeP>1408<SeP>1328<SeP>1252<SeP>1384<SeP>1574<SeP>1513<SeP>1250<SeP>1252<SeP>1284<SeP>1410<SeP>1304<SeP>1127<SeP>1697<SeP>1878<SeP>1428<SeP>1046<SeP>892<SeP>1519<SeP>1765<SeP>1241<SeP>1420<SeP>1060<SeP>1337<SeP>1301<SeP>1490<SeP>1350<SeP>1535<SeP>1633<SeP>1531<SeP>1397<SeP>1702<SeP>1392<SeP>1423<SeP>1654<SeP>1597<SeP>1264<SeP>1180<SeP>1576<SeP>1828<SeP>1854<SeP>1783<SeP>1839<SeP>1522<SeP>1627<SeP>1585<SeP>1617<SeP>1506<SeP>1568<SeP>1741<SeP>1908<SeP>1426<SeP>1446<SeP>1345<SeP>1720";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "155<SeP>614<SeP>1256<SeP>793<SeP>221<SeP>234<SeP>6985<SeP>552<SeP>9484<SeP>567<SeP>399<SeP>1130<SeP>1285<SeP>247<SeP>169<SeP>447<SeP>109<SeP>761<SeP>321<SeP>6852<SeP>7142<SeP>6916<SeP>8441<SeP>4179<SeP>265<SeP>235<SeP>385<SeP>367<SeP>5727<SeP>312<SeP>252<SeP>228<SeP>505<SeP>306<SeP>6782<SeP>10082<SeP>9515<SeP>10286<SeP>7645<SeP>4889<SeP>8631<SeP>7462<SeP>9014<SeP>8853<SeP>7433<SeP>8128<SeP>9063<SeP>8288<SeP>9164<SeP>5537<SeP>5848<SeP>12858<SeP>6764<SeP>7326<SeP>8057<SeP>9912<SeP>16821<SeP>18328<SeP>8373<SeP>9616<SeP>9476<SeP>7773<SeP>8324<SeP>8360<SeP>8603<SeP>8097<SeP>6432<SeP>6772<SeP>7131<SeP>5357<SeP>3366<SeP>6879<SeP>5873<SeP>6711<SeP>6356<SeP>6672<SeP>4504<SeP>5874<SeP>7399<SeP>4523<SeP>6855<SeP>5190<SeP>5685<SeP>6740<SeP>5500<SeP>5755<SeP>5702<SeP>10102<SeP>20809<SeP>35938<SeP>7548<SeP>9835<SeP>5331<SeP>6625<SeP>13056<SeP>6082<SeP>4470<SeP>5236<SeP>4915<SeP>6122<SeP>5619<SeP>8373<SeP>5613<SeP>6675<SeP>5050<SeP>4708<SeP>8343<SeP>8724<SeP>8043<SeP>6453<SeP>3818<SeP>9070<SeP>10058<SeP>6606<SeP>3334<SeP>5834<SeP>8347<SeP>5619<SeP>7017<SeP>9035<SeP>6805<SeP>1322<SeP>2478<SeP>1027<SeP>2481<SeP>2048<SeP>1493<SeP>734<SeP>1048<SeP>1285<SeP>1859<SeP>596<SeP>1297<SeP>1123<SeP>1088<SeP>817<SeP>1346<SeP>1359<SeP>1301<SeP>893<SeP>2193<SeP>1884<SeP>6246<SeP>10609<SeP>8039<SeP>8222<SeP>7200<SeP>12615<SeP>2842<SeP>11589<SeP>9943<SeP>9100<SeP>12916<SeP>8094<SeP>13037<SeP>12315<SeP>6598<SeP>12579<SeP>5040<SeP>5774<SeP>6663<SeP>24163<SeP>6996<SeP>9087<SeP>7959<SeP>17082<SeP>8951<SeP>7983<SeP>5974<SeP>7196<SeP>6781<SeP>26477<SeP>7896<SeP>10867<SeP>6233<SeP>6631<SeP>5845<SeP>6277<SeP>14796<SeP>5989<SeP>14262<SeP>8373<SeP>7901<SeP>6099<SeP>6962<SeP>2798<SeP>7770<SeP>7192<SeP>4992<SeP>6111<SeP>8514<SeP>4824<SeP>20351<SeP>7894<SeP>6525<SeP>5899<SeP>8623<SeP>10595<SeP>7187<SeP>2486<SeP>5925<SeP>4309<SeP>4512<SeP>3914<SeP>2246<SeP>618<SeP>596<SeP>235<SeP>552<SeP>583<SeP>804<SeP>360<SeP>960<SeP>1075<SeP>1370<SeP>3322<SeP>22554<SeP>702<SeP>5344<SeP>3056<SeP>3422<SeP>6503<SeP>2644<SeP>4220<SeP>3796<SeP>2937<SeP>3078<SeP>3110<SeP>4738<SeP>1626<SeP>3606<SeP>1875<SeP>2601<SeP>1285<SeP>1848<SeP>1342<SeP>1735<SeP>840<SeP>1280<SeP>1598<SeP>26516<SeP>1687<SeP>4062<SeP>3583<SeP>2590<SeP>3229<SeP>3079<SeP>1938<SeP>3363<SeP>2638<SeP>3651<SeP>2553<SeP>2663<SeP>3577<SeP>4184<SeP>5660<SeP>4957<SeP>4611<SeP>2671<SeP>2890<SeP>4268<SeP>3823<SeP>10142<SeP>5080<SeP>3599<SeP>2477<SeP>2845<SeP>4325<SeP>3699<SeP>3221<SeP>3194<SeP>2876<SeP>4935<SeP>4619<SeP>4592<SeP>4817<SeP>5305<SeP>4915<SeP>5072<SeP>5321<SeP>12731<SeP>15806<SeP>12595<SeP>1870<SeP>2196<SeP>4853<SeP>3328<SeP>4091<SeP>3955<SeP>5051<SeP>3955<SeP>4517<SeP>4252<SeP>3567<SeP>3301<SeP>1267<SeP>1969<SeP>3247<SeP>2874<SeP>2612<SeP>3533<SeP>4259<SeP>4154<SeP>3137<SeP>4564<SeP>2856<SeP>3777<SeP>3629<SeP>8256<SeP>6433<SeP>5530<SeP>4708<SeP>5110<SeP>3903<SeP>3641<SeP>4745<SeP>5201<SeP>5429<SeP>4654<SeP>4447<SeP>2003<SeP>733<SeP>2016<SeP>1687<SeP>827<SeP>1922<SeP>1278<SeP>1080<SeP>2622<SeP>4035<SeP>6524<SeP>6026<SeP>32586<SeP>5502<SeP>9702<SeP>18693<SeP>5353<SeP>5094<SeP>6021<SeP>4098<SeP>24725<SeP>5840<SeP>4698<SeP>4668<SeP>5979<SeP>18939<SeP>16384<SeP>4585<SeP>3103<SeP>4525<SeP>5370<SeP>5731<SeP>2911<SeP>3215<SeP>4231<SeP>5170<SeP>5065<SeP>14303<SeP>8617<SeP>5590<SeP>6418<SeP>2896<SeP>2752<SeP>3563<SeP>4534<SeP>4221<SeP>3871<SeP>2713<SeP>3677<SeP>2621<SeP>4632<SeP>4846<SeP>8219<SeP>10814<SeP>7991<SeP>8944<SeP>8571<SeP>8078<SeP>4711<SeP>5216<SeP>3677<SeP>25841<SeP>3782<SeP>3073<SeP>4116<SeP>10593<SeP>5711<SeP>4945<SeP>3626<SeP>4943<SeP>3409<SeP>5441<SeP>9263<SeP>8287<SeP>4336<SeP>2737<SeP>3786<SeP>1762<SeP>2215<SeP>2530";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:16:57<SeP>2023-07-28 22:33:54<SeP>2023-07-30 09:50:51<SeP>2023-07-31 21:07:48<SeP>2023-08-02 08:24:45<SeP>2023-08-03 19:41:42<SeP>2023-08-05 06:58:39<SeP>2023-08-06 18:15:36<SeP>2023-08-08 05:32:33<SeP>2023-08-09 16:49:30<SeP>2023-08-11 04:06:27<SeP>2023-08-12 15:23:24<SeP>2023-08-14 02:40:21<SeP>2023-08-15 13:57:18<SeP>2023-08-17 01:14:15<SeP>2023-08-18 12:31:12<SeP>2023-08-19 23:48:09<SeP>2023-08-21 11:05:06<SeP>2023-08-22 22:22:03<SeP>2023-08-24 09:39:00<SeP>2023-08-25 20:55:57<SeP>2023-08-27 08:12:54<SeP>2023-08-28 19:29:51<SeP>2023-08-30 06:46:48<SeP>2023-08-31 18:03:45<SeP>2023-09-02 05:20:42<SeP>2023-09-03 16:37:39<SeP>2023-09-05 03:54:36<SeP>2023-09-06 15:11:33<SeP>2023-09-08 02:28:30<SeP>2023-09-09 13:45:27<SeP>2023-09-11 01:02:24<SeP>2023-09-12 12:19:21<SeP>2023-09-13 23:36:18<SeP>2023-09-15 10:53:15<SeP>2023-09-16 22:10:12<SeP>2023-09-18 09:27:09<SeP>2023-09-19 20:44:06<SeP>2023-09-21 08:01:03<SeP>2023-09-22 19:18:00<SeP>2023-09-24 06:34:57<SeP>2023-09-25 17:51:54<SeP>2023-09-27 05:08:51<SeP>2023-09-28 16:25:48<SeP>2023-09-30 03:42:45<SeP>2023-10-01 14:59:42<SeP>2023-10-03 02:16:39<SeP>2023-10-04 13:33:36<SeP>2023-10-06 00:50:33<SeP>2023-10-07 12:07:30<SeP>2023-10-08 23:24:27<SeP>2023-10-10 10:41:24<SeP>2023-10-11 21:58:21<SeP>2023-10-13 09:15:18<SeP>2023-10-14 20:32:15<SeP>2023-10-16 07:49:12<SeP>2023-10-17 19:06:09<SeP>2023-10-19 06:23:06<SeP>2023-10-20 17:40:03<SeP>2023-10-22 04:57:00<SeP>2023-10-23 16:13:57<SeP>2023-10-25 03:30:54<SeP>2023-10-26 14:47:51<SeP>2023-10-28 02:04:48<SeP>2023-10-29 13:21:45<SeP>2023-10-31 00:38:42<SeP>2023-11-01 11:55:39<SeP>2023-11-02 23:12:36<SeP>2023-11-04 10:29:33<SeP>2023-11-05 20:46:30<SeP>2023-11-07 08:03:27<SeP>2023-11-08 19:20:24<SeP>2023-11-10 06:37:21<SeP>2023-11-11 17:54:18<SeP>2023-11-13 05:11:15<SeP>2023-11-14 16:28:12<SeP>2023-11-16 03:45:09<SeP>2023-11-17 15:02:06<SeP>2023-11-19 02:19:03<SeP>2023-11-20 13:36:00<SeP>2023-11-22 00:52:57<SeP>2023-11-23 12:09:54<SeP>2023-11-24 23:26:51<SeP>2023-11-26 10:43:48<SeP>2023-11-27 22:00:45<SeP>2023-11-29 09:17:42<SeP>2023-11-30 20:34:39<SeP>2023-12-02 07:51:36<SeP>2023-12-03 19:08:33<SeP>2023-12-05 06:25:30<SeP>2023-12-06 17:42:27<SeP>2023-12-08 04:59:24<SeP>2023-12-09 16:16:21<SeP>2023-12-11 03:33:18<SeP>2023-12-12 14:50:15<SeP>2023-12-14 02:07:12<SeP>2023-12-15 13:24:09<SeP>2023-12-17 00:41:06<SeP>2023-12-18 11:58:03<SeP>2023-12-19 23:15:00<SeP>2023-12-21 10:31:57<SeP>2023-12-22 21:48:54<SeP>2023-12-24 09:05:51<SeP>2023-12-25 20:22:48<SeP>2023-12-27 07:39:45<SeP>2023-12-28 18:56:42<SeP>2023-12-30 06:13:39<SeP>2023-12-31 17:30:36<SeP>2024-01-02 04:47:33<SeP>2024-01-03 16:04:30<SeP>2024-01-05 03:21:27<SeP>2024-01-06 14:38:24<SeP>2024-01-08 01:55:21<SeP>2024-01-09 13:12:18<SeP>2024-01-11 00:29:15<SeP>2024-01-12 11:46:12<SeP>2024-01-13 23:03:09<SeP>2024-01-15 10:20:06<SeP>2024-01-16 21:37:03<SeP>2024-01-18 08:54:00<SeP>2024-01-19 20:10:57<SeP>2024-01-21 07:27:54<SeP>2024-01-22 18:44:51<SeP>2024-01-24 06:01:48<SeP>2024-01-25 17:18:45<SeP>2024-01-27 04:35:42<SeP>2024-01-28 15:52:39<SeP>2024-01-30 03:09:36<SeP>2024-01-31 14:26:33<SeP>2024-02-02 01:43:30<SeP>2024-02-03 13:00:27<SeP>2024-02-05 00:17:24<SeP>2024-02-06 11:34:21<SeP>2024-02-07 22:51:18<SeP>2024-02-09 10:08:15<SeP>2024-02-10 21:25:12<SeP>2024-02-12 08:42:09<SeP>2024-02-13 19:59:06<SeP>2024-02-15 07:16:03<SeP>2024-02-16 18:33:00<SeP>2024-02-18 05:49:57<SeP>2024-02-19 17:06:54<SeP>2024-02-21 04:23:51<SeP>2024-02-22 15:40:48<SeP>2024-02-24 02:57:45<SeP>2024-02-25 14:14:42<SeP>2024-02-27 01:31:39<SeP>2024-02-28 12:48:36<SeP>2024-03-01 00:05:33<SeP>2024-03-02 11:22:30<SeP>2024-03-03 22:39:27<SeP>2024-03-05 09:56:24<SeP>2024-03-06 21:13:21<SeP>2024-03-08 08:30:18<SeP>2024-03-09 19:47:15<SeP>2024-03-11 08:04:12<SeP>2024-03-12 19:21:09<SeP>2024-03-14 06:38:06<SeP>2024-03-15 17:55:03<SeP>2024-03-17 05:12:00<SeP>2024-03-18 16:28:57<SeP>2024-03-20 03:45:54<SeP>2024-03-21 15:02:51<SeP>2024-03-23 02:19:48<SeP>2024-03-24 13:36:45<SeP>2024-03-26 00:53:42<SeP>2024-03-27 12:10:39<SeP>2024-03-28 23:27:36<SeP>2024-03-30 10:44:33<SeP>2024-03-31 22:01:30<SeP>2024-04-02 09:18:27<SeP>2024-04-03 20:35:24<SeP>2024-04-05 07:52:21<SeP>2024-04-06 19:09:18<SeP>2024-04-08 06:26:15<SeP>2024-04-09 17:43:12<SeP>2024-04-11 05:00:09<SeP>2024-04-12 16:17:06<SeP>2024-04-14 03:34:03<SeP>2024-04-15 14:51:00<SeP>2024-04-17 02:07:57<SeP>2024-04-18 13:24:54<SeP>2024-04-20 00:41:51<SeP>2024-04-21 11:58:48<SeP>2024-04-22 23:15:45<SeP>2024-04-24 10:32:42<SeP>2024-04-25 21:49:39<SeP>2024-04-27 09:06:36<SeP>2024-04-28 20:23:33<SeP>2024-04-30 07:40:30<SeP>2024-05-01 18:57:27<SeP>2024-05-03 06:14:24<SeP>2024-05-04 17:31:21<SeP>2024-05-06 04:48:18<SeP>2024-05-07 16:05:15<SeP>2024-05-09 03:22:12<SeP>2024-05-10 14:39:09<SeP>2024-05-12 01:56:06<SeP>2024-05-13 13:13:03<SeP>2024-05-15 00:30:00<SeP>2024-05-16 11:46:57<SeP>2024-05-17 23:03:54<SeP>2024-05-19 10:20:51<SeP>2024-05-20 21:37:48<SeP>2024-05-22 08:54:45<SeP>2024-05-23 20:11:42<SeP>2024-05-25 07:28:39<SeP>2024-05-26 18:45:36<SeP>2024-05-28 06:02:33<SeP>2024-05-29 17:19:30<SeP>2024-05-31 04:36:27<SeP>2024-06-01 15:53:24<SeP>2024-06-03 03:10:21<SeP>2024-06-04 14:27:18<SeP>2024-06-06 01:44:15<SeP>2024-06-07 13:01:12<SeP>2024-06-09 00:18:09<SeP>2024-06-10 11:35:06<SeP>2024-06-11 22:52:03<SeP>2024-06-13 10:09:00<SeP>2024-06-14 21:25:57<SeP>2024-06-16 08:42:54<SeP>2024-06-17 19:59:51<SeP>2024-06-19 07:16:48<SeP>2024-06-20 18:33:45<SeP>2024-06-22 05:50:42<SeP>2024-06-23 17:07:39<SeP>2024-06-25 04:24:36<SeP>2024-06-26 15:41:33<SeP>2024-06-28 02:58:30<SeP>2024-06-29 14:15:27<SeP>2024-07-01 01:32:24<SeP>2024-07-02 12:49:21<SeP>2024-07-04 00:06:18<SeP>2024-07-05 11:23:15<SeP>2024-07-06 22:40:12<SeP>2024-07-08 09:57:09<SeP>2024-07-09 21:14:06<SeP>2024-07-11 08:31:03<SeP>2024-07-12 19:48:00<SeP>2024-07-14 07:04:57<SeP>2024-07-15 18:21:54<SeP>2024-07-17 05:38:51<SeP>2024-07-18 16:55:48<SeP>2024-07-20 04:12:45<SeP>2024-07-21 15:29:42<SeP>2024-07-23 02:46:39<SeP>2024-07-24 14:03:36<SeP>2024-07-26 01:20:33<SeP>2024-07-27 12:37:30<SeP>2024-07-28 23:54:27<SeP>2024-07-30 11:11:24<SeP>2024-07-31 22:28:21<SeP>2024-08-02 09:45:18<SeP>2024-08-03 21:02:15<SeP>2024-08-05 08:19:12<SeP>2024-08-06 19:36:09<SeP>2024-08-08 06:53:06<SeP>2024-08-09 18:10:03<SeP>2024-08-11 05:27:00<SeP>2024-08-12 16:43:57<SeP>2024-08-14 04:00:54<SeP>2024-08-15 15:17:51<SeP>2024-08-17 02:34:48<SeP>2024-08-18 13:51:45<SeP>2024-08-20 01:08:42<SeP>2024-08-21 12:25:39<SeP>2024-08-22 23:42:36<SeP>2024-08-24 10:59:33<SeP>2024-08-25 22:16:30<SeP>2024-08-27 09:33:27<SeP>2024-08-28 20:50:24<SeP>2024-08-30 08:07:21<SeP>2024-08-31 19:24:18<SeP>2024-09-02 06:41:15<SeP>2024-09-03 17:58:12<SeP>2024-09-05 05:15:09<SeP>2024-09-06 16:32:06<SeP>2024-09-08 03:49:03<SeP>2024-09-09 15:06:00<SeP>2024-09-11 02:22:57<SeP>2024-09-12 13:39:54<SeP>2024-09-14 00:56:51<SeP>2024-09-15 12:13:48<SeP>2024-09-16 23:30:45<SeP>2024-09-18 10:47:42<SeP>2024-09-19 22:04:39<SeP>2024-09-21 09:21:36<SeP>2024-09-22 20:38:33<SeP>2024-09-24 07:55:30<SeP>2024-09-25 19:12:27<SeP>2024-09-27 06:29:24<SeP>2024-09-28 17:46:21<SeP>2024-09-30 05:03:18<SeP>2024-10-01 16:20:15<SeP>2024-10-03 03:37:12<SeP>2024-10-04 14:54:09<SeP>2024-10-06 02:11:06<SeP>2024-10-07 13:28:03<SeP>2024-10-09 00:45:00<SeP>2024-10-10 12:01:57<SeP>2024-10-11 23:18:54<SeP>2024-10-13 10:35:51<SeP>2024-10-14 21:52:48<SeP>2024-10-16 09:09:45<SeP>2024-10-17 20:26:42<SeP>2024-10-19 07:43:39<SeP>2024-10-20 19:00:36<SeP>2024-10-22 06:17:33<SeP>2024-10-23 17:34:30<SeP>2024-10-25 04:51:27<SeP>2024-10-26 16:08:24<SeP>2024-10-28 03:25:21<SeP>2024-10-29 14:42:18<SeP>2024-10-31 01:59:15<SeP>2024-11-01 13:16:12<SeP>2024-11-03 00:33:09<SeP>2024-11-04 10:50:06<SeP>2024-11-05 22:07:03<SeP>2024-11-07 09:24:00<SeP>2024-11-08 20:40:57<SeP>2024-11-10 07:57:54<SeP>2024-11-11 19:14:51<SeP>2024-11-13 06:31:48<SeP>2024-11-14 17:48:45<SeP>2024-11-16 05:05:42<SeP>2024-11-17 16:22:39<SeP>2024-11-19 03:39:36<SeP>2024-11-20 14:56:33<SeP>2024-11-22 02:13:30<SeP>2024-11-23 13:30:27<SeP>2024-11-25 00:47:24<SeP>2024-11-26 12:04:21<SeP>2024-11-27 23:21:18<SeP>2024-11-29 10:38:15<SeP>2024-11-30 21:55:12<SeP>2024-12-02 09:12:09<SeP>2024-12-03 20:29:06<SeP>2024-12-05 07:46:03<SeP>2024-12-06 19:03:00<SeP>2024-12-08 06:19:57<SeP>2024-12-09 17:36:54<SeP>2024-12-11 04:53:51<SeP>2024-12-12 16:10:48<SeP>2024-12-14 03:27:45<SeP>2024-12-15 14:44:42<SeP>2024-12-17 02:01:39<SeP>2024-12-18 13:18:36<SeP>2024-12-20 00:35:33<SeP>2024-12-21 11:52:30<SeP>2024-12-22 23:09:27<SeP>2024-12-24 10:26:24<SeP>2024-12-25 21:43:21<SeP>2024-12-27 09:00:18<SeP>2024-12-28 20:17:15<SeP>2024-12-30 07:34:12<SeP>2024-12-31 18:51:09<SeP>2025-01-02 06:08:06<SeP>2025-01-03 17:25:03<SeP>2025-01-05 04:42:00<SeP>2025-01-06 15:58:57<SeP>2025-01-08 03:15:54<SeP>2025-01-09 14:32:51<SeP>2025-01-11 01:49:48<SeP>2025-01-12 13:06:45<SeP>2025-01-14 00:23:42<SeP>2025-01-15 11:40:39<SeP>2025-01-16 22:57:36<SeP>2025-01-18 10:14:33<SeP>2025-01-19 21:31:30<SeP>2025-01-21 08:48:27<SeP>2025-01-22 20:05:24<SeP>2025-01-24 07:22:21<SeP>2025-01-25 18:39:18<SeP>2025-01-27 05:56:15<SeP>2025-01-28 17:13:12<SeP>2025-01-30 04:30:09<SeP>2025-01-31 15:47:06<SeP>2025-02-02 03:04:03<SeP>2025-02-03 14:21:00<SeP>2025-02-05 01:37:57<SeP>2025-02-06 12:54:54<SeP>2025-02-08 00:11:51<SeP>2025-02-09 11:28:48<SeP>2025-02-10 22:45:45<SeP>2025-02-12 10:02:42<SeP>2025-02-13 21:19:39<SeP>2025-02-15 08:36:36<SeP>2025-02-16 19:53:33<SeP>2025-02-18 07:10:30<SeP>2025-02-19 18:27:27<SeP>2025-02-21 05:44:24<SeP>2025-02-22 17:01:21<SeP>2025-02-24 04:18:18<SeP>2025-02-25 15:35:15<SeP>2025-02-27 02:52:12<SeP>2025-02-28 14:09:09<SeP>2025-03-02 01:26:06<SeP>2025-03-03 12:43:03";
  const itemLabel       = "Scans";
  const itemData        = "770<SeP>1513<SeP>1367<SeP>1458<SeP>1247<SeP>1727<SeP>955<SeP>965<SeP>1171<SeP>3409<SeP>2696<SeP>1687<SeP>3215<SeP>990<SeP>758<SeP>915<SeP>1413<SeP>2925<SeP>1756<SeP>1190<SeP>1262<SeP>947<SeP>1015<SeP>1290<SeP>892<SeP>860<SeP>802<SeP>3785<SeP>703<SeP>1003<SeP>847<SeP>1771<SeP>889<SeP>835<SeP>3106<SeP>2546<SeP>2064<SeP>1677<SeP>1725<SeP>1279<SeP>1550<SeP>1828<SeP>1946<SeP>1964<SeP>1662<SeP>1648<SeP>1668<SeP>1719<SeP>1624<SeP>1787<SeP>1872<SeP>1792<SeP>1617<SeP>3185<SeP>1352<SeP>1864<SeP>1932<SeP>1857<SeP>2117<SeP>1976<SeP>3315<SeP>1433<SeP>1488<SeP>1485<SeP>1449<SeP>1956<SeP>1557<SeP>1254<SeP>1441<SeP>1268<SeP>2329<SeP>1195<SeP>1135<SeP>1250<SeP>2284<SeP>7311<SeP>1161<SeP>1351<SeP>1344<SeP>1623<SeP>2016<SeP>1084<SeP>6729<SeP>1529<SeP>1642<SeP>914<SeP>2099<SeP>2422<SeP>1186<SeP>1003<SeP>1014<SeP>1170<SeP>2437<SeP>1529<SeP>1133<SeP>1640<SeP>3959<SeP>5355<SeP>1242<SeP>924<SeP>958<SeP>978<SeP>951<SeP>963<SeP>1101<SeP>2233<SeP>3436<SeP>1687<SeP>1243<SeP>1340<SeP>631<SeP>1462<SeP>1314<SeP>1118<SeP>963<SeP>2295<SeP>1066<SeP>1193<SeP>1094<SeP>919<SeP>1183<SeP>660<SeP>909<SeP>852<SeP>796<SeP>1108<SeP>831<SeP>921<SeP>808<SeP>903<SeP>901<SeP>657<SeP>778<SeP>860<SeP>917<SeP>881<SeP>822<SeP>851<SeP>832<SeP>785<SeP>1058<SeP>805<SeP>872<SeP>881<SeP>973<SeP>991<SeP>964<SeP>965<SeP>543<SeP>912<SeP>866<SeP>1190<SeP>916<SeP>967<SeP>1220<SeP>1305<SeP>900<SeP>942<SeP>873<SeP>982<SeP>731<SeP>1046<SeP>999<SeP>970<SeP>911<SeP>962<SeP>1026<SeP>1100<SeP>975<SeP>1017<SeP>1038<SeP>941<SeP>1006<SeP>1819<SeP>1428<SeP>1232<SeP>1115<SeP>910<SeP>1155<SeP>1008<SeP>971<SeP>777<SeP>853<SeP>898<SeP>1165<SeP>788<SeP>1047<SeP>1291<SeP>1114<SeP>1154<SeP>1313<SeP>1178<SeP>1294<SeP>1274<SeP>1305<SeP>1521<SeP>1727<SeP>1703<SeP>1369<SeP>748<SeP>831<SeP>1127<SeP>1106<SeP>577<SeP>742<SeP>854<SeP>1009<SeP>1250<SeP>5987<SeP>2597<SeP>1967<SeP>1244<SeP>924<SeP>991<SeP>940<SeP>959<SeP>937<SeP>1148<SeP>1026<SeP>1066<SeP>1763<SeP>1732<SeP>1011<SeP>1319<SeP>1208<SeP>1170<SeP>1155<SeP>1005<SeP>1034<SeP>1083<SeP>1117<SeP>1062<SeP>1099<SeP>992<SeP>1145<SeP>817<SeP>1402<SeP>1108<SeP>1139<SeP>1191<SeP>1271<SeP>1307<SeP>1589<SeP>1207<SeP>1139<SeP>1264<SeP>1027<SeP>2015<SeP>1204<SeP>1721<SeP>1836<SeP>1376<SeP>2021<SeP>1726<SeP>1125<SeP>1259<SeP>1209<SeP>1145<SeP>1620<SeP>1348<SeP>1134<SeP>1517<SeP>1898<SeP>1269<SeP>1511<SeP>1401<SeP>1348<SeP>1177<SeP>1180<SeP>1245<SeP>1190<SeP>1206<SeP>1259<SeP>1268<SeP>1342<SeP>1868<SeP>1338<SeP>1296<SeP>1574<SeP>1537<SeP>1171<SeP>1149<SeP>908<SeP>900<SeP>874<SeP>1038<SeP>1000<SeP>1796<SeP>1087<SeP>1136<SeP>1168<SeP>784<SeP>1015<SeP>1002<SeP>1319<SeP>874<SeP>907<SeP>1148<SeP>1379<SeP>1616<SeP>1299<SeP>1071<SeP>1051<SeP>1105<SeP>1808<SeP>944<SeP>1260<SeP>1003<SeP>1474<SeP>1182<SeP>843<SeP>1236<SeP>1038<SeP>980<SeP>891<SeP>1118<SeP>1353<SeP>1585<SeP>1423<SeP>1361<SeP>1372<SeP>985<SeP>1167<SeP>1188<SeP>1170<SeP>1049<SeP>1091<SeP>1022<SeP>1243<SeP>1317<SeP>1505<SeP>1283<SeP>1568<SeP>1343<SeP>1621<SeP>1399<SeP>1297<SeP>1465<SeP>1476<SeP>1450<SeP>1339<SeP>1570<SeP>1510<SeP>1656<SeP>1324<SeP>1364<SeP>1408<SeP>1328<SeP>1252<SeP>1384<SeP>1574<SeP>1513<SeP>1250<SeP>1252<SeP>1284<SeP>1410<SeP>1304<SeP>1127<SeP>1697<SeP>1878<SeP>1428<SeP>1046<SeP>892<SeP>1519<SeP>1765<SeP>1241<SeP>1420<SeP>1060<SeP>1337<SeP>1301<SeP>1490<SeP>1350<SeP>1535<SeP>1633<SeP>1531<SeP>1397<SeP>1702<SeP>1392<SeP>1423<SeP>1654<SeP>1597<SeP>1264<SeP>1180<SeP>1576<SeP>1828<SeP>1854<SeP>1783<SeP>1839<SeP>1522<SeP>1627<SeP>1585<SeP>1617<SeP>1506<SeP>1568<SeP>1741<SeP>1908<SeP>1426<SeP>1446<SeP>1345<SeP>1720";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:16:57<SeP>2023-07-28 22:33:54<SeP>2023-07-30 09:50:51<SeP>2023-07-31 21:07:48<SeP>2023-08-02 08:24:45<SeP>2023-08-03 19:41:42<SeP>2023-08-05 06:58:39<SeP>2023-08-06 18:15:36<SeP>2023-08-08 05:32:33<SeP>2023-08-09 16:49:30<SeP>2023-08-11 04:06:27<SeP>2023-08-12 15:23:24<SeP>2023-08-14 02:40:21<SeP>2023-08-15 13:57:18<SeP>2023-08-17 01:14:15<SeP>2023-08-18 12:31:12<SeP>2023-08-19 23:48:09<SeP>2023-08-21 11:05:06<SeP>2023-08-22 22:22:03<SeP>2023-08-24 09:39:00<SeP>2023-08-25 20:55:57<SeP>2023-08-27 08:12:54<SeP>2023-08-28 19:29:51<SeP>2023-08-30 06:46:48<SeP>2023-08-31 18:03:45<SeP>2023-09-02 05:20:42<SeP>2023-09-03 16:37:39<SeP>2023-09-05 03:54:36<SeP>2023-09-06 15:11:33<SeP>2023-09-08 02:28:30<SeP>2023-09-09 13:45:27<SeP>2023-09-11 01:02:24<SeP>2023-09-12 12:19:21<SeP>2023-09-13 23:36:18<SeP>2023-09-15 10:53:15<SeP>2023-09-16 22:10:12<SeP>2023-09-18 09:27:09<SeP>2023-09-19 20:44:06<SeP>2023-09-21 08:01:03<SeP>2023-09-22 19:18:00<SeP>2023-09-24 06:34:57<SeP>2023-09-25 17:51:54<SeP>2023-09-27 05:08:51<SeP>2023-09-28 16:25:48<SeP>2023-09-30 03:42:45<SeP>2023-10-01 14:59:42<SeP>2023-10-03 02:16:39<SeP>2023-10-04 13:33:36<SeP>2023-10-06 00:50:33<SeP>2023-10-07 12:07:30<SeP>2023-10-08 23:24:27<SeP>2023-10-10 10:41:24<SeP>2023-10-11 21:58:21<SeP>2023-10-13 09:15:18<SeP>2023-10-14 20:32:15<SeP>2023-10-16 07:49:12<SeP>2023-10-17 19:06:09<SeP>2023-10-19 06:23:06<SeP>2023-10-20 17:40:03<SeP>2023-10-22 04:57:00<SeP>2023-10-23 16:13:57<SeP>2023-10-25 03:30:54<SeP>2023-10-26 14:47:51<SeP>2023-10-28 02:04:48<SeP>2023-10-29 13:21:45<SeP>2023-10-31 00:38:42<SeP>2023-11-01 11:55:39<SeP>2023-11-02 23:12:36<SeP>2023-11-04 10:29:33<SeP>2023-11-05 20:46:30<SeP>2023-11-07 08:03:27<SeP>2023-11-08 19:20:24<SeP>2023-11-10 06:37:21<SeP>2023-11-11 17:54:18<SeP>2023-11-13 05:11:15<SeP>2023-11-14 16:28:12<SeP>2023-11-16 03:45:09<SeP>2023-11-17 15:02:06<SeP>2023-11-19 02:19:03<SeP>2023-11-20 13:36:00<SeP>2023-11-22 00:52:57<SeP>2023-11-23 12:09:54<SeP>2023-11-24 23:26:51<SeP>2023-11-26 10:43:48<SeP>2023-11-27 22:00:45<SeP>2023-11-29 09:17:42<SeP>2023-11-30 20:34:39<SeP>2023-12-02 07:51:36<SeP>2023-12-03 19:08:33<SeP>2023-12-05 06:25:30<SeP>2023-12-06 17:42:27<SeP>2023-12-08 04:59:24<SeP>2023-12-09 16:16:21<SeP>2023-12-11 03:33:18<SeP>2023-12-12 14:50:15<SeP>2023-12-14 02:07:12<SeP>2023-12-15 13:24:09<SeP>2023-12-17 00:41:06<SeP>2023-12-18 11:58:03<SeP>2023-12-19 23:15:00<SeP>2023-12-21 10:31:57<SeP>2023-12-22 21:48:54<SeP>2023-12-24 09:05:51<SeP>2023-12-25 20:22:48<SeP>2023-12-27 07:39:45<SeP>2023-12-28 18:56:42<SeP>2023-12-30 06:13:39<SeP>2023-12-31 17:30:36<SeP>2024-01-02 04:47:33<SeP>2024-01-03 16:04:30<SeP>2024-01-05 03:21:27<SeP>2024-01-06 14:38:24<SeP>2024-01-08 01:55:21<SeP>2024-01-09 13:12:18<SeP>2024-01-11 00:29:15<SeP>2024-01-12 11:46:12<SeP>2024-01-13 23:03:09<SeP>2024-01-15 10:20:06<SeP>2024-01-16 21:37:03<SeP>2024-01-18 08:54:00<SeP>2024-01-19 20:10:57<SeP>2024-01-21 07:27:54<SeP>2024-01-22 18:44:51<SeP>2024-01-24 06:01:48<SeP>2024-01-25 17:18:45<SeP>2024-01-27 04:35:42<SeP>2024-01-28 15:52:39<SeP>2024-01-30 03:09:36<SeP>2024-01-31 14:26:33<SeP>2024-02-02 01:43:30<SeP>2024-02-03 13:00:27<SeP>2024-02-05 00:17:24<SeP>2024-02-06 11:34:21<SeP>2024-02-07 22:51:18<SeP>2024-02-09 10:08:15<SeP>2024-02-10 21:25:12<SeP>2024-02-12 08:42:09<SeP>2024-02-13 19:59:06<SeP>2024-02-15 07:16:03<SeP>2024-02-16 18:33:00<SeP>2024-02-18 05:49:57<SeP>2024-02-19 17:06:54<SeP>2024-02-21 04:23:51<SeP>2024-02-22 15:40:48<SeP>2024-02-24 02:57:45<SeP>2024-02-25 14:14:42<SeP>2024-02-27 01:31:39<SeP>2024-02-28 12:48:36<SeP>2024-03-01 00:05:33<SeP>2024-03-02 11:22:30<SeP>2024-03-03 22:39:27<SeP>2024-03-05 09:56:24<SeP>2024-03-06 21:13:21<SeP>2024-03-08 08:30:18<SeP>2024-03-09 19:47:15<SeP>2024-03-11 08:04:12<SeP>2024-03-12 19:21:09<SeP>2024-03-14 06:38:06<SeP>2024-03-15 17:55:03<SeP>2024-03-17 05:12:00<SeP>2024-03-18 16:28:57<SeP>2024-03-20 03:45:54<SeP>2024-03-21 15:02:51<SeP>2024-03-23 02:19:48<SeP>2024-03-24 13:36:45<SeP>2024-03-26 00:53:42<SeP>2024-03-27 12:10:39<SeP>2024-03-28 23:27:36<SeP>2024-03-30 10:44:33<SeP>2024-03-31 22:01:30<SeP>2024-04-02 09:18:27<SeP>2024-04-03 20:35:24<SeP>2024-04-05 07:52:21<SeP>2024-04-06 19:09:18<SeP>2024-04-08 06:26:15<SeP>2024-04-09 17:43:12<SeP>2024-04-11 05:00:09<SeP>2024-04-12 16:17:06<SeP>2024-04-14 03:34:03<SeP>2024-04-15 14:51:00<SeP>2024-04-17 02:07:57<SeP>2024-04-18 13:24:54<SeP>2024-04-20 00:41:51<SeP>2024-04-21 11:58:48<SeP>2024-04-22 23:15:45<SeP>2024-04-24 10:32:42<SeP>2024-04-25 21:49:39<SeP>2024-04-27 09:06:36<SeP>2024-04-28 20:23:33<SeP>2024-04-30 07:40:30<SeP>2024-05-01 18:57:27<SeP>2024-05-03 06:14:24<SeP>2024-05-04 17:31:21<SeP>2024-05-06 04:48:18<SeP>2024-05-07 16:05:15<SeP>2024-05-09 03:22:12<SeP>2024-05-10 14:39:09<SeP>2024-05-12 01:56:06<SeP>2024-05-13 13:13:03<SeP>2024-05-15 00:30:00<SeP>2024-05-16 11:46:57<SeP>2024-05-17 23:03:54<SeP>2024-05-19 10:20:51<SeP>2024-05-20 21:37:48<SeP>2024-05-22 08:54:45<SeP>2024-05-23 20:11:42<SeP>2024-05-25 07:28:39<SeP>2024-05-26 18:45:36<SeP>2024-05-28 06:02:33<SeP>2024-05-29 17:19:30<SeP>2024-05-31 04:36:27<SeP>2024-06-01 15:53:24<SeP>2024-06-03 03:10:21<SeP>2024-06-04 14:27:18<SeP>2024-06-06 01:44:15<SeP>2024-06-07 13:01:12<SeP>2024-06-09 00:18:09<SeP>2024-06-10 11:35:06<SeP>2024-06-11 22:52:03<SeP>2024-06-13 10:09:00<SeP>2024-06-14 21:25:57<SeP>2024-06-16 08:42:54<SeP>2024-06-17 19:59:51<SeP>2024-06-19 07:16:48<SeP>2024-06-20 18:33:45<SeP>2024-06-22 05:50:42<SeP>2024-06-23 17:07:39<SeP>2024-06-25 04:24:36<SeP>2024-06-26 15:41:33<SeP>2024-06-28 02:58:30<SeP>2024-06-29 14:15:27<SeP>2024-07-01 01:32:24<SeP>2024-07-02 12:49:21<SeP>2024-07-04 00:06:18<SeP>2024-07-05 11:23:15<SeP>2024-07-06 22:40:12<SeP>2024-07-08 09:57:09<SeP>2024-07-09 21:14:06<SeP>2024-07-11 08:31:03<SeP>2024-07-12 19:48:00<SeP>2024-07-14 07:04:57<SeP>2024-07-15 18:21:54<SeP>2024-07-17 05:38:51<SeP>2024-07-18 16:55:48<SeP>2024-07-20 04:12:45<SeP>2024-07-21 15:29:42<SeP>2024-07-23 02:46:39<SeP>2024-07-24 14:03:36<SeP>2024-07-26 01:20:33<SeP>2024-07-27 12:37:30<SeP>2024-07-28 23:54:27<SeP>2024-07-30 11:11:24<SeP>2024-07-31 22:28:21<SeP>2024-08-02 09:45:18<SeP>2024-08-03 21:02:15<SeP>2024-08-05 08:19:12<SeP>2024-08-06 19:36:09<SeP>2024-08-08 06:53:06<SeP>2024-08-09 18:10:03<SeP>2024-08-11 05:27:00<SeP>2024-08-12 16:43:57<SeP>2024-08-14 04:00:54<SeP>2024-08-15 15:17:51<SeP>2024-08-17 02:34:48<SeP>2024-08-18 13:51:45<SeP>2024-08-20 01:08:42<SeP>2024-08-21 12:25:39<SeP>2024-08-22 23:42:36<SeP>2024-08-24 10:59:33<SeP>2024-08-25 22:16:30<SeP>2024-08-27 09:33:27<SeP>2024-08-28 20:50:24<SeP>2024-08-30 08:07:21<SeP>2024-08-31 19:24:18<SeP>2024-09-02 06:41:15<SeP>2024-09-03 17:58:12<SeP>2024-09-05 05:15:09<SeP>2024-09-06 16:32:06<SeP>2024-09-08 03:49:03<SeP>2024-09-09 15:06:00<SeP>2024-09-11 02:22:57<SeP>2024-09-12 13:39:54<SeP>2024-09-14 00:56:51<SeP>2024-09-15 12:13:48<SeP>2024-09-16 23:30:45<SeP>2024-09-18 10:47:42<SeP>2024-09-19 22:04:39<SeP>2024-09-21 09:21:36<SeP>2024-09-22 20:38:33<SeP>2024-09-24 07:55:30<SeP>2024-09-25 19:12:27<SeP>2024-09-27 06:29:24<SeP>2024-09-28 17:46:21<SeP>2024-09-30 05:03:18<SeP>2024-10-01 16:20:15<SeP>2024-10-03 03:37:12<SeP>2024-10-04 14:54:09<SeP>2024-10-06 02:11:06<SeP>2024-10-07 13:28:03<SeP>2024-10-09 00:45:00<SeP>2024-10-10 12:01:57<SeP>2024-10-11 23:18:54<SeP>2024-10-13 10:35:51<SeP>2024-10-14 21:52:48<SeP>2024-10-16 09:09:45<SeP>2024-10-17 20:26:42<SeP>2024-10-19 07:43:39<SeP>2024-10-20 19:00:36<SeP>2024-10-22 06:17:33<SeP>2024-10-23 17:34:30<SeP>2024-10-25 04:51:27<SeP>2024-10-26 16:08:24<SeP>2024-10-28 03:25:21<SeP>2024-10-29 14:42:18<SeP>2024-10-31 01:59:15<SeP>2024-11-01 13:16:12<SeP>2024-11-03 00:33:09<SeP>2024-11-04 10:50:06<SeP>2024-11-05 22:07:03<SeP>2024-11-07 09:24:00<SeP>2024-11-08 20:40:57<SeP>2024-11-10 07:57:54<SeP>2024-11-11 19:14:51<SeP>2024-11-13 06:31:48<SeP>2024-11-14 17:48:45<SeP>2024-11-16 05:05:42<SeP>2024-11-17 16:22:39<SeP>2024-11-19 03:39:36<SeP>2024-11-20 14:56:33<SeP>2024-11-22 02:13:30<SeP>2024-11-23 13:30:27<SeP>2024-11-25 00:47:24<SeP>2024-11-26 12:04:21<SeP>2024-11-27 23:21:18<SeP>2024-11-29 10:38:15<SeP>2024-11-30 21:55:12<SeP>2024-12-02 09:12:09<SeP>2024-12-03 20:29:06<SeP>2024-12-05 07:46:03<SeP>2024-12-06 19:03:00<SeP>2024-12-08 06:19:57<SeP>2024-12-09 17:36:54<SeP>2024-12-11 04:53:51<SeP>2024-12-12 16:10:48<SeP>2024-12-14 03:27:45<SeP>2024-12-15 14:44:42<SeP>2024-12-17 02:01:39<SeP>2024-12-18 13:18:36<SeP>2024-12-20 00:35:33<SeP>2024-12-21 11:52:30<SeP>2024-12-22 23:09:27<SeP>2024-12-24 10:26:24<SeP>2024-12-25 21:43:21<SeP>2024-12-27 09:00:18<SeP>2024-12-28 20:17:15<SeP>2024-12-30 07:34:12<SeP>2024-12-31 18:51:09<SeP>2025-01-02 06:08:06<SeP>2025-01-03 17:25:03<SeP>2025-01-05 04:42:00<SeP>2025-01-06 15:58:57<SeP>2025-01-08 03:15:54<SeP>2025-01-09 14:32:51<SeP>2025-01-11 01:49:48<SeP>2025-01-12 13:06:45<SeP>2025-01-14 00:23:42<SeP>2025-01-15 11:40:39<SeP>2025-01-16 22:57:36<SeP>2025-01-18 10:14:33<SeP>2025-01-19 21:31:30<SeP>2025-01-21 08:48:27<SeP>2025-01-22 20:05:24<SeP>2025-01-24 07:22:21<SeP>2025-01-25 18:39:18<SeP>2025-01-27 05:56:15<SeP>2025-01-28 17:13:12<SeP>2025-01-30 04:30:09<SeP>2025-01-31 15:47:06<SeP>2025-02-02 03:04:03<SeP>2025-02-03 14:21:00<SeP>2025-02-05 01:37:57<SeP>2025-02-06 12:54:54<SeP>2025-02-08 00:11:51<SeP>2025-02-09 11:28:48<SeP>2025-02-10 22:45:45<SeP>2025-02-12 10:02:42<SeP>2025-02-13 21:19:39<SeP>2025-02-15 08:36:36<SeP>2025-02-16 19:53:33<SeP>2025-02-18 07:10:30<SeP>2025-02-19 18:27:27<SeP>2025-02-21 05:44:24<SeP>2025-02-22 17:01:21<SeP>2025-02-24 04:18:18<SeP>2025-02-25 15:35:15<SeP>2025-02-27 02:52:12<SeP>2025-02-28 14:09:09<SeP>2025-03-02 01:26:06<SeP>2025-03-03 12:43:03";
  const itemLabel       = "Attacks";
  const itemData        = "155<SeP>614<SeP>1256<SeP>793<SeP>221<SeP>234<SeP>6985<SeP>552<SeP>9484<SeP>567<SeP>399<SeP>1130<SeP>1285<SeP>247<SeP>169<SeP>447<SeP>109<SeP>761<SeP>321<SeP>6852<SeP>7142<SeP>6916<SeP>8441<SeP>4179<SeP>265<SeP>235<SeP>385<SeP>367<SeP>5727<SeP>312<SeP>252<SeP>228<SeP>505<SeP>306<SeP>6782<SeP>10082<SeP>9515<SeP>10286<SeP>7645<SeP>4889<SeP>8631<SeP>7462<SeP>9014<SeP>8853<SeP>7433<SeP>8128<SeP>9063<SeP>8288<SeP>9164<SeP>5537<SeP>5848<SeP>12858<SeP>6764<SeP>7326<SeP>8057<SeP>9912<SeP>16821<SeP>18328<SeP>8373<SeP>9616<SeP>9476<SeP>7773<SeP>8324<SeP>8360<SeP>8603<SeP>8097<SeP>6432<SeP>6772<SeP>7131<SeP>5357<SeP>3366<SeP>6879<SeP>5873<SeP>6711<SeP>6356<SeP>6672<SeP>4504<SeP>5874<SeP>7399<SeP>4523<SeP>6855<SeP>5190<SeP>5685<SeP>6740<SeP>5500<SeP>5755<SeP>5702<SeP>10102<SeP>20809<SeP>35938<SeP>7548<SeP>9835<SeP>5331<SeP>6625<SeP>13056<SeP>6082<SeP>4470<SeP>5236<SeP>4915<SeP>6122<SeP>5619<SeP>8373<SeP>5613<SeP>6675<SeP>5050<SeP>4708<SeP>8343<SeP>8724<SeP>8043<SeP>6453<SeP>3818<SeP>9070<SeP>10058<SeP>6606<SeP>3334<SeP>5834<SeP>8347<SeP>5619<SeP>7017<SeP>9035<SeP>6805<SeP>1322<SeP>2478<SeP>1027<SeP>2481<SeP>2048<SeP>1493<SeP>734<SeP>1048<SeP>1285<SeP>1859<SeP>596<SeP>1297<SeP>1123<SeP>1088<SeP>817<SeP>1346<SeP>1359<SeP>1301<SeP>893<SeP>2193<SeP>1884<SeP>6246<SeP>10609<SeP>8039<SeP>8222<SeP>7200<SeP>12615<SeP>2842<SeP>11589<SeP>9943<SeP>9100<SeP>12916<SeP>8094<SeP>13037<SeP>12315<SeP>6598<SeP>12579<SeP>5040<SeP>5774<SeP>6663<SeP>24163<SeP>6996<SeP>9087<SeP>7959<SeP>17082<SeP>8951<SeP>7983<SeP>5974<SeP>7196<SeP>6781<SeP>26477<SeP>7896<SeP>10867<SeP>6233<SeP>6631<SeP>5845<SeP>6277<SeP>14796<SeP>5989<SeP>14262<SeP>8373<SeP>7901<SeP>6099<SeP>6962<SeP>2798<SeP>7770<SeP>7192<SeP>4992<SeP>6111<SeP>8514<SeP>4824<SeP>20351<SeP>7894<SeP>6525<SeP>5899<SeP>8623<SeP>10595<SeP>7187<SeP>2486<SeP>5925<SeP>4309<SeP>4512<SeP>3914<SeP>2246<SeP>618<SeP>596<SeP>235<SeP>552<SeP>583<SeP>804<SeP>360<SeP>960<SeP>1075<SeP>1370<SeP>3322<SeP>22554<SeP>702<SeP>5344<SeP>3056<SeP>3422<SeP>6503<SeP>2644<SeP>4220<SeP>3796<SeP>2937<SeP>3078<SeP>3110<SeP>4738<SeP>1626<SeP>3606<SeP>1875<SeP>2601<SeP>1285<SeP>1848<SeP>1342<SeP>1735<SeP>840<SeP>1280<SeP>1598<SeP>26516<SeP>1687<SeP>4062<SeP>3583<SeP>2590<SeP>3229<SeP>3079<SeP>1938<SeP>3363<SeP>2638<SeP>3651<SeP>2553<SeP>2663<SeP>3577<SeP>4184<SeP>5660<SeP>4957<SeP>4611<SeP>2671<SeP>2890<SeP>4268<SeP>3823<SeP>10142<SeP>5080<SeP>3599<SeP>2477<SeP>2845<SeP>4325<SeP>3699<SeP>3221<SeP>3194<SeP>2876<SeP>4935<SeP>4619<SeP>4592<SeP>4817<SeP>5305<SeP>4915<SeP>5072<SeP>5321<SeP>12731<SeP>15806<SeP>12595<SeP>1870<SeP>2196<SeP>4853<SeP>3328<SeP>4091<SeP>3955<SeP>5051<SeP>3955<SeP>4517<SeP>4252<SeP>3567<SeP>3301<SeP>1267<SeP>1969<SeP>3247<SeP>2874<SeP>2612<SeP>3533<SeP>4259<SeP>4154<SeP>3137<SeP>4564<SeP>2856<SeP>3777<SeP>3629<SeP>8256<SeP>6433<SeP>5530<SeP>4708<SeP>5110<SeP>3903<SeP>3641<SeP>4745<SeP>5201<SeP>5429<SeP>4654<SeP>4447<SeP>2003<SeP>733<SeP>2016<SeP>1687<SeP>827<SeP>1922<SeP>1278<SeP>1080<SeP>2622<SeP>4035<SeP>6524<SeP>6026<SeP>32586<SeP>5502<SeP>9702<SeP>18693<SeP>5353<SeP>5094<SeP>6021<SeP>4098<SeP>24725<SeP>5840<SeP>4698<SeP>4668<SeP>5979<SeP>18939<SeP>16384<SeP>4585<SeP>3103<SeP>4525<SeP>5370<SeP>5731<SeP>2911<SeP>3215<SeP>4231<SeP>5170<SeP>5065<SeP>14303<SeP>8617<SeP>5590<SeP>6418<SeP>2896<SeP>2752<SeP>3563<SeP>4534<SeP>4221<SeP>3871<SeP>2713<SeP>3677<SeP>2621<SeP>4632<SeP>4846<SeP>8219<SeP>10814<SeP>7991<SeP>8944<SeP>8571<SeP>8078<SeP>4711<SeP>5216<SeP>3677<SeP>25841<SeP>3782<SeP>3073<SeP>4116<SeP>10593<SeP>5711<SeP>4945<SeP>3626<SeP>4943<SeP>3409<SeP>5441<SeP>9263<SeP>8287<SeP>4336<SeP>2737<SeP>3786<SeP>1762<SeP>2215<SeP>2530";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:16:57<SeP>2023-07-28 22:33:54<SeP>2023-07-30 09:50:51<SeP>2023-07-31 21:07:48<SeP>2023-08-02 08:24:45<SeP>2023-08-03 19:41:42<SeP>2023-08-05 06:58:39<SeP>2023-08-06 18:15:36<SeP>2023-08-08 05:32:33<SeP>2023-08-09 16:49:30<SeP>2023-08-11 04:06:27<SeP>2023-08-12 15:23:24<SeP>2023-08-14 02:40:21<SeP>2023-08-15 13:57:18<SeP>2023-08-17 01:14:15<SeP>2023-08-18 12:31:12<SeP>2023-08-19 23:48:09<SeP>2023-08-21 11:05:06<SeP>2023-08-22 22:22:03<SeP>2023-08-24 09:39:00<SeP>2023-08-25 20:55:57<SeP>2023-08-27 08:12:54<SeP>2023-08-28 19:29:51<SeP>2023-08-30 06:46:48<SeP>2023-08-31 18:03:45<SeP>2023-09-02 05:20:42<SeP>2023-09-03 16:37:39<SeP>2023-09-05 03:54:36<SeP>2023-09-06 15:11:33<SeP>2023-09-08 02:28:30<SeP>2023-09-09 13:45:27<SeP>2023-09-11 01:02:24<SeP>2023-09-12 12:19:21<SeP>2023-09-13 23:36:18<SeP>2023-09-15 10:53:15<SeP>2023-09-16 22:10:12<SeP>2023-09-18 09:27:09<SeP>2023-09-19 20:44:06<SeP>2023-09-21 08:01:03<SeP>2023-09-22 19:18:00<SeP>2023-09-24 06:34:57<SeP>2023-09-25 17:51:54<SeP>2023-09-27 05:08:51<SeP>2023-09-28 16:25:48<SeP>2023-09-30 03:42:45<SeP>2023-10-01 14:59:42<SeP>2023-10-03 02:16:39<SeP>2023-10-04 13:33:36<SeP>2023-10-06 00:50:33<SeP>2023-10-07 12:07:30<SeP>2023-10-08 23:24:27<SeP>2023-10-10 10:41:24<SeP>2023-10-11 21:58:21<SeP>2023-10-13 09:15:18<SeP>2023-10-14 20:32:15<SeP>2023-10-16 07:49:12<SeP>2023-10-17 19:06:09<SeP>2023-10-19 06:23:06<SeP>2023-10-20 17:40:03<SeP>2023-10-22 04:57:00<SeP>2023-10-23 16:13:57<SeP>2023-10-25 03:30:54<SeP>2023-10-26 14:47:51<SeP>2023-10-28 02:04:48<SeP>2023-10-29 13:21:45<SeP>2023-10-31 00:38:42<SeP>2023-11-01 11:55:39<SeP>2023-11-02 23:12:36<SeP>2023-11-04 10:29:33<SeP>2023-11-05 20:46:30<SeP>2023-11-07 08:03:27<SeP>2023-11-08 19:20:24<SeP>2023-11-10 06:37:21<SeP>2023-11-11 17:54:18<SeP>2023-11-13 05:11:15<SeP>2023-11-14 16:28:12<SeP>2023-11-16 03:45:09<SeP>2023-11-17 15:02:06<SeP>2023-11-19 02:19:03<SeP>2023-11-20 13:36:00<SeP>2023-11-22 00:52:57<SeP>2023-11-23 12:09:54<SeP>2023-11-24 23:26:51<SeP>2023-11-26 10:43:48<SeP>2023-11-27 22:00:45<SeP>2023-11-29 09:17:42<SeP>2023-11-30 20:34:39<SeP>2023-12-02 07:51:36<SeP>2023-12-03 19:08:33<SeP>2023-12-05 06:25:30<SeP>2023-12-06 17:42:27<SeP>2023-12-08 04:59:24<SeP>2023-12-09 16:16:21<SeP>2023-12-11 03:33:18<SeP>2023-12-12 14:50:15<SeP>2023-12-14 02:07:12<SeP>2023-12-15 13:24:09<SeP>2023-12-17 00:41:06<SeP>2023-12-18 11:58:03<SeP>2023-12-19 23:15:00<SeP>2023-12-21 10:31:57<SeP>2023-12-22 21:48:54<SeP>2023-12-24 09:05:51<SeP>2023-12-25 20:22:48<SeP>2023-12-27 07:39:45<SeP>2023-12-28 18:56:42<SeP>2023-12-30 06:13:39<SeP>2023-12-31 17:30:36<SeP>2024-01-02 04:47:33<SeP>2024-01-03 16:04:30<SeP>2024-01-05 03:21:27<SeP>2024-01-06 14:38:24<SeP>2024-01-08 01:55:21<SeP>2024-01-09 13:12:18<SeP>2024-01-11 00:29:15<SeP>2024-01-12 11:46:12<SeP>2024-01-13 23:03:09<SeP>2024-01-15 10:20:06<SeP>2024-01-16 21:37:03<SeP>2024-01-18 08:54:00<SeP>2024-01-19 20:10:57<SeP>2024-01-21 07:27:54<SeP>2024-01-22 18:44:51<SeP>2024-01-24 06:01:48<SeP>2024-01-25 17:18:45<SeP>2024-01-27 04:35:42<SeP>2024-01-28 15:52:39<SeP>2024-01-30 03:09:36<SeP>2024-01-31 14:26:33<SeP>2024-02-02 01:43:30<SeP>2024-02-03 13:00:27<SeP>2024-02-05 00:17:24<SeP>2024-02-06 11:34:21<SeP>2024-02-07 22:51:18<SeP>2024-02-09 10:08:15<SeP>2024-02-10 21:25:12<SeP>2024-02-12 08:42:09<SeP>2024-02-13 19:59:06<SeP>2024-02-15 07:16:03<SeP>2024-02-16 18:33:00<SeP>2024-02-18 05:49:57<SeP>2024-02-19 17:06:54<SeP>2024-02-21 04:23:51<SeP>2024-02-22 15:40:48<SeP>2024-02-24 02:57:45<SeP>2024-02-25 14:14:42<SeP>2024-02-27 01:31:39<SeP>2024-02-28 12:48:36<SeP>2024-03-01 00:05:33<SeP>2024-03-02 11:22:30<SeP>2024-03-03 22:39:27<SeP>2024-03-05 09:56:24<SeP>2024-03-06 21:13:21<SeP>2024-03-08 08:30:18<SeP>2024-03-09 19:47:15<SeP>2024-03-11 08:04:12<SeP>2024-03-12 19:21:09<SeP>2024-03-14 06:38:06<SeP>2024-03-15 17:55:03<SeP>2024-03-17 05:12:00<SeP>2024-03-18 16:28:57<SeP>2024-03-20 03:45:54<SeP>2024-03-21 15:02:51<SeP>2024-03-23 02:19:48<SeP>2024-03-24 13:36:45<SeP>2024-03-26 00:53:42<SeP>2024-03-27 12:10:39<SeP>2024-03-28 23:27:36<SeP>2024-03-30 10:44:33<SeP>2024-03-31 22:01:30<SeP>2024-04-02 09:18:27<SeP>2024-04-03 20:35:24<SeP>2024-04-05 07:52:21<SeP>2024-04-06 19:09:18<SeP>2024-04-08 06:26:15<SeP>2024-04-09 17:43:12<SeP>2024-04-11 05:00:09<SeP>2024-04-12 16:17:06<SeP>2024-04-14 03:34:03<SeP>2024-04-15 14:51:00<SeP>2024-04-17 02:07:57<SeP>2024-04-18 13:24:54<SeP>2024-04-20 00:41:51<SeP>2024-04-21 11:58:48<SeP>2024-04-22 23:15:45<SeP>2024-04-24 10:32:42<SeP>2024-04-25 21:49:39<SeP>2024-04-27 09:06:36<SeP>2024-04-28 20:23:33<SeP>2024-04-30 07:40:30<SeP>2024-05-01 18:57:27<SeP>2024-05-03 06:14:24<SeP>2024-05-04 17:31:21<SeP>2024-05-06 04:48:18<SeP>2024-05-07 16:05:15<SeP>2024-05-09 03:22:12<SeP>2024-05-10 14:39:09<SeP>2024-05-12 01:56:06<SeP>2024-05-13 13:13:03<SeP>2024-05-15 00:30:00<SeP>2024-05-16 11:46:57<SeP>2024-05-17 23:03:54<SeP>2024-05-19 10:20:51<SeP>2024-05-20 21:37:48<SeP>2024-05-22 08:54:45<SeP>2024-05-23 20:11:42<SeP>2024-05-25 07:28:39<SeP>2024-05-26 18:45:36<SeP>2024-05-28 06:02:33<SeP>2024-05-29 17:19:30<SeP>2024-05-31 04:36:27<SeP>2024-06-01 15:53:24<SeP>2024-06-03 03:10:21<SeP>2024-06-04 14:27:18<SeP>2024-06-06 01:44:15<SeP>2024-06-07 13:01:12<SeP>2024-06-09 00:18:09<SeP>2024-06-10 11:35:06<SeP>2024-06-11 22:52:03<SeP>2024-06-13 10:09:00<SeP>2024-06-14 21:25:57<SeP>2024-06-16 08:42:54<SeP>2024-06-17 19:59:51<SeP>2024-06-19 07:16:48<SeP>2024-06-20 18:33:45<SeP>2024-06-22 05:50:42<SeP>2024-06-23 17:07:39<SeP>2024-06-25 04:24:36<SeP>2024-06-26 15:41:33<SeP>2024-06-28 02:58:30<SeP>2024-06-29 14:15:27<SeP>2024-07-01 01:32:24<SeP>2024-07-02 12:49:21<SeP>2024-07-04 00:06:18<SeP>2024-07-05 11:23:15<SeP>2024-07-06 22:40:12<SeP>2024-07-08 09:57:09<SeP>2024-07-09 21:14:06<SeP>2024-07-11 08:31:03<SeP>2024-07-12 19:48:00<SeP>2024-07-14 07:04:57<SeP>2024-07-15 18:21:54<SeP>2024-07-17 05:38:51<SeP>2024-07-18 16:55:48<SeP>2024-07-20 04:12:45<SeP>2024-07-21 15:29:42<SeP>2024-07-23 02:46:39<SeP>2024-07-24 14:03:36<SeP>2024-07-26 01:20:33<SeP>2024-07-27 12:37:30<SeP>2024-07-28 23:54:27<SeP>2024-07-30 11:11:24<SeP>2024-07-31 22:28:21<SeP>2024-08-02 09:45:18<SeP>2024-08-03 21:02:15<SeP>2024-08-05 08:19:12<SeP>2024-08-06 19:36:09<SeP>2024-08-08 06:53:06<SeP>2024-08-09 18:10:03<SeP>2024-08-11 05:27:00<SeP>2024-08-12 16:43:57<SeP>2024-08-14 04:00:54<SeP>2024-08-15 15:17:51<SeP>2024-08-17 02:34:48<SeP>2024-08-18 13:51:45<SeP>2024-08-20 01:08:42<SeP>2024-08-21 12:25:39<SeP>2024-08-22 23:42:36<SeP>2024-08-24 10:59:33<SeP>2024-08-25 22:16:30<SeP>2024-08-27 09:33:27<SeP>2024-08-28 20:50:24<SeP>2024-08-30 08:07:21<SeP>2024-08-31 19:24:18<SeP>2024-09-02 06:41:15<SeP>2024-09-03 17:58:12<SeP>2024-09-05 05:15:09<SeP>2024-09-06 16:32:06<SeP>2024-09-08 03:49:03<SeP>2024-09-09 15:06:00<SeP>2024-09-11 02:22:57<SeP>2024-09-12 13:39:54<SeP>2024-09-14 00:56:51<SeP>2024-09-15 12:13:48<SeP>2024-09-16 23:30:45<SeP>2024-09-18 10:47:42<SeP>2024-09-19 22:04:39<SeP>2024-09-21 09:21:36<SeP>2024-09-22 20:38:33<SeP>2024-09-24 07:55:30<SeP>2024-09-25 19:12:27<SeP>2024-09-27 06:29:24<SeP>2024-09-28 17:46:21<SeP>2024-09-30 05:03:18<SeP>2024-10-01 16:20:15<SeP>2024-10-03 03:37:12<SeP>2024-10-04 14:54:09<SeP>2024-10-06 02:11:06<SeP>2024-10-07 13:28:03<SeP>2024-10-09 00:45:00<SeP>2024-10-10 12:01:57<SeP>2024-10-11 23:18:54<SeP>2024-10-13 10:35:51<SeP>2024-10-14 21:52:48<SeP>2024-10-16 09:09:45<SeP>2024-10-17 20:26:42<SeP>2024-10-19 07:43:39<SeP>2024-10-20 19:00:36<SeP>2024-10-22 06:17:33<SeP>2024-10-23 17:34:30<SeP>2024-10-25 04:51:27<SeP>2024-10-26 16:08:24<SeP>2024-10-28 03:25:21<SeP>2024-10-29 14:42:18<SeP>2024-10-31 01:59:15<SeP>2024-11-01 13:16:12<SeP>2024-11-03 00:33:09<SeP>2024-11-04 10:50:06<SeP>2024-11-05 22:07:03<SeP>2024-11-07 09:24:00<SeP>2024-11-08 20:40:57<SeP>2024-11-10 07:57:54<SeP>2024-11-11 19:14:51<SeP>2024-11-13 06:31:48<SeP>2024-11-14 17:48:45<SeP>2024-11-16 05:05:42<SeP>2024-11-17 16:22:39<SeP>2024-11-19 03:39:36<SeP>2024-11-20 14:56:33<SeP>2024-11-22 02:13:30<SeP>2024-11-23 13:30:27<SeP>2024-11-25 00:47:24<SeP>2024-11-26 12:04:21<SeP>2024-11-27 23:21:18<SeP>2024-11-29 10:38:15<SeP>2024-11-30 21:55:12<SeP>2024-12-02 09:12:09<SeP>2024-12-03 20:29:06<SeP>2024-12-05 07:46:03<SeP>2024-12-06 19:03:00<SeP>2024-12-08 06:19:57<SeP>2024-12-09 17:36:54<SeP>2024-12-11 04:53:51<SeP>2024-12-12 16:10:48<SeP>2024-12-14 03:27:45<SeP>2024-12-15 14:44:42<SeP>2024-12-17 02:01:39<SeP>2024-12-18 13:18:36<SeP>2024-12-20 00:35:33<SeP>2024-12-21 11:52:30<SeP>2024-12-22 23:09:27<SeP>2024-12-24 10:26:24<SeP>2024-12-25 21:43:21<SeP>2024-12-27 09:00:18<SeP>2024-12-28 20:17:15<SeP>2024-12-30 07:34:12<SeP>2024-12-31 18:51:09<SeP>2025-01-02 06:08:06<SeP>2025-01-03 17:25:03<SeP>2025-01-05 04:42:00<SeP>2025-01-06 15:58:57<SeP>2025-01-08 03:15:54<SeP>2025-01-09 14:32:51<SeP>2025-01-11 01:49:48<SeP>2025-01-12 13:06:45<SeP>2025-01-14 00:23:42<SeP>2025-01-15 11:40:39<SeP>2025-01-16 22:57:36<SeP>2025-01-18 10:14:33<SeP>2025-01-19 21:31:30<SeP>2025-01-21 08:48:27<SeP>2025-01-22 20:05:24<SeP>2025-01-24 07:22:21<SeP>2025-01-25 18:39:18<SeP>2025-01-27 05:56:15<SeP>2025-01-28 17:13:12<SeP>2025-01-30 04:30:09<SeP>2025-01-31 15:47:06<SeP>2025-02-02 03:04:03<SeP>2025-02-03 14:21:00<SeP>2025-02-05 01:37:57<SeP>2025-02-06 12:54:54<SeP>2025-02-08 00:11:51<SeP>2025-02-09 11:28:48<SeP>2025-02-10 22:45:45<SeP>2025-02-12 10:02:42<SeP>2025-02-13 21:19:39<SeP>2025-02-15 08:36:36<SeP>2025-02-16 19:53:33<SeP>2025-02-18 07:10:30<SeP>2025-02-19 18:27:27<SeP>2025-02-21 05:44:24<SeP>2025-02-22 17:01:21<SeP>2025-02-24 04:18:18<SeP>2025-02-25 15:35:15<SeP>2025-02-27 02:52:12<SeP>2025-02-28 14:09:09<SeP>2025-03-02 01:26:06<SeP>2025-03-03 12:43:03";
  const item1Label       = "Escaneos";
  const item1Data        = "770<SeP>1513<SeP>1367<SeP>1458<SeP>1247<SeP>1727<SeP>955<SeP>965<SeP>1171<SeP>3409<SeP>2696<SeP>1687<SeP>3215<SeP>990<SeP>758<SeP>915<SeP>1413<SeP>2925<SeP>1756<SeP>1190<SeP>1262<SeP>947<SeP>1015<SeP>1290<SeP>892<SeP>860<SeP>802<SeP>3785<SeP>703<SeP>1003<SeP>847<SeP>1771<SeP>889<SeP>835<SeP>3106<SeP>2546<SeP>2064<SeP>1677<SeP>1725<SeP>1279<SeP>1550<SeP>1828<SeP>1946<SeP>1964<SeP>1662<SeP>1648<SeP>1668<SeP>1719<SeP>1624<SeP>1787<SeP>1872<SeP>1792<SeP>1617<SeP>3185<SeP>1352<SeP>1864<SeP>1932<SeP>1857<SeP>2117<SeP>1976<SeP>3315<SeP>1433<SeP>1488<SeP>1485<SeP>1449<SeP>1956<SeP>1557<SeP>1254<SeP>1441<SeP>1268<SeP>2329<SeP>1195<SeP>1135<SeP>1250<SeP>2284<SeP>7311<SeP>1161<SeP>1351<SeP>1344<SeP>1623<SeP>2016<SeP>1084<SeP>6729<SeP>1529<SeP>1642<SeP>914<SeP>2099<SeP>2422<SeP>1186<SeP>1003<SeP>1014<SeP>1170<SeP>2437<SeP>1529<SeP>1133<SeP>1640<SeP>3959<SeP>5355<SeP>1242<SeP>924<SeP>958<SeP>978<SeP>951<SeP>963<SeP>1101<SeP>2233<SeP>3436<SeP>1687<SeP>1243<SeP>1340<SeP>631<SeP>1462<SeP>1314<SeP>1118<SeP>963<SeP>2295<SeP>1066<SeP>1193<SeP>1094<SeP>919<SeP>1183<SeP>660<SeP>909<SeP>852<SeP>796<SeP>1108<SeP>831<SeP>921<SeP>808<SeP>903<SeP>901<SeP>657<SeP>778<SeP>860<SeP>917<SeP>881<SeP>822<SeP>851<SeP>832<SeP>785<SeP>1058<SeP>805<SeP>872<SeP>881<SeP>973<SeP>991<SeP>964<SeP>965<SeP>543<SeP>912<SeP>866<SeP>1190<SeP>916<SeP>967<SeP>1220<SeP>1305<SeP>900<SeP>942<SeP>873<SeP>982<SeP>731<SeP>1046<SeP>999<SeP>970<SeP>911<SeP>962<SeP>1026<SeP>1100<SeP>975<SeP>1017<SeP>1038<SeP>941<SeP>1006<SeP>1819<SeP>1428<SeP>1232<SeP>1115<SeP>910<SeP>1155<SeP>1008<SeP>971<SeP>777<SeP>853<SeP>898<SeP>1165<SeP>788<SeP>1047<SeP>1291<SeP>1114<SeP>1154<SeP>1313<SeP>1178<SeP>1294<SeP>1274<SeP>1305<SeP>1521<SeP>1727<SeP>1703<SeP>1369<SeP>748<SeP>831<SeP>1127<SeP>1106<SeP>577<SeP>742<SeP>854<SeP>1009<SeP>1250<SeP>5987<SeP>2597<SeP>1967<SeP>1244<SeP>924<SeP>991<SeP>940<SeP>959<SeP>937<SeP>1148<SeP>1026<SeP>1066<SeP>1763<SeP>1732<SeP>1011<SeP>1319<SeP>1208<SeP>1170<SeP>1155<SeP>1005<SeP>1034<SeP>1083<SeP>1117<SeP>1062<SeP>1099<SeP>992<SeP>1145<SeP>817<SeP>1402<SeP>1108<SeP>1139<SeP>1191<SeP>1271<SeP>1307<SeP>1589<SeP>1207<SeP>1139<SeP>1264<SeP>1027<SeP>2015<SeP>1204<SeP>1721<SeP>1836<SeP>1376<SeP>2021<SeP>1726<SeP>1125<SeP>1259<SeP>1209<SeP>1145<SeP>1620<SeP>1348<SeP>1134<SeP>1517<SeP>1898<SeP>1269<SeP>1511<SeP>1401<SeP>1348<SeP>1177<SeP>1180<SeP>1245<SeP>1190<SeP>1206<SeP>1259<SeP>1268<SeP>1342<SeP>1868<SeP>1338<SeP>1296<SeP>1574<SeP>1537<SeP>1171<SeP>1149<SeP>908<SeP>900<SeP>874<SeP>1038<SeP>1000<SeP>1796<SeP>1087<SeP>1136<SeP>1168<SeP>784<SeP>1015<SeP>1002<SeP>1319<SeP>874<SeP>907<SeP>1148<SeP>1379<SeP>1616<SeP>1299<SeP>1071<SeP>1051<SeP>1105<SeP>1808<SeP>944<SeP>1260<SeP>1003<SeP>1474<SeP>1182<SeP>843<SeP>1236<SeP>1038<SeP>980<SeP>891<SeP>1118<SeP>1353<SeP>1585<SeP>1423<SeP>1361<SeP>1372<SeP>985<SeP>1167<SeP>1188<SeP>1170<SeP>1049<SeP>1091<SeP>1022<SeP>1243<SeP>1317<SeP>1505<SeP>1283<SeP>1568<SeP>1343<SeP>1621<SeP>1399<SeP>1297<SeP>1465<SeP>1476<SeP>1450<SeP>1339<SeP>1570<SeP>1510<SeP>1656<SeP>1324<SeP>1364<SeP>1408<SeP>1328<SeP>1252<SeP>1384<SeP>1574<SeP>1513<SeP>1250<SeP>1252<SeP>1284<SeP>1410<SeP>1304<SeP>1127<SeP>1697<SeP>1878<SeP>1428<SeP>1046<SeP>892<SeP>1519<SeP>1765<SeP>1241<SeP>1420<SeP>1060<SeP>1337<SeP>1301<SeP>1490<SeP>1350<SeP>1535<SeP>1633<SeP>1531<SeP>1397<SeP>1702<SeP>1392<SeP>1423<SeP>1654<SeP>1597<SeP>1264<SeP>1180<SeP>1576<SeP>1828<SeP>1854<SeP>1783<SeP>1839<SeP>1522<SeP>1627<SeP>1585<SeP>1617<SeP>1506<SeP>1568<SeP>1741<SeP>1908<SeP>1426<SeP>1446<SeP>1345<SeP>1720";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "155<SeP>614<SeP>1256<SeP>793<SeP>221<SeP>234<SeP>6985<SeP>552<SeP>9484<SeP>567<SeP>399<SeP>1130<SeP>1285<SeP>247<SeP>169<SeP>447<SeP>109<SeP>761<SeP>321<SeP>6852<SeP>7142<SeP>6916<SeP>8441<SeP>4179<SeP>265<SeP>235<SeP>385<SeP>367<SeP>5727<SeP>312<SeP>252<SeP>228<SeP>505<SeP>306<SeP>6782<SeP>10082<SeP>9515<SeP>10286<SeP>7645<SeP>4889<SeP>8631<SeP>7462<SeP>9014<SeP>8853<SeP>7433<SeP>8128<SeP>9063<SeP>8288<SeP>9164<SeP>5537<SeP>5848<SeP>12858<SeP>6764<SeP>7326<SeP>8057<SeP>9912<SeP>16821<SeP>18328<SeP>8373<SeP>9616<SeP>9476<SeP>7773<SeP>8324<SeP>8360<SeP>8603<SeP>8097<SeP>6432<SeP>6772<SeP>7131<SeP>5357<SeP>3366<SeP>6879<SeP>5873<SeP>6711<SeP>6356<SeP>6672<SeP>4504<SeP>5874<SeP>7399<SeP>4523<SeP>6855<SeP>5190<SeP>5685<SeP>6740<SeP>5500<SeP>5755<SeP>5702<SeP>10102<SeP>20809<SeP>35938<SeP>7548<SeP>9835<SeP>5331<SeP>6625<SeP>13056<SeP>6082<SeP>4470<SeP>5236<SeP>4915<SeP>6122<SeP>5619<SeP>8373<SeP>5613<SeP>6675<SeP>5050<SeP>4708<SeP>8343<SeP>8724<SeP>8043<SeP>6453<SeP>3818<SeP>9070<SeP>10058<SeP>6606<SeP>3334<SeP>5834<SeP>8347<SeP>5619<SeP>7017<SeP>9035<SeP>6805<SeP>1322<SeP>2478<SeP>1027<SeP>2481<SeP>2048<SeP>1493<SeP>734<SeP>1048<SeP>1285<SeP>1859<SeP>596<SeP>1297<SeP>1123<SeP>1088<SeP>817<SeP>1346<SeP>1359<SeP>1301<SeP>893<SeP>2193<SeP>1884<SeP>6246<SeP>10609<SeP>8039<SeP>8222<SeP>7200<SeP>12615<SeP>2842<SeP>11589<SeP>9943<SeP>9100<SeP>12916<SeP>8094<SeP>13037<SeP>12315<SeP>6598<SeP>12579<SeP>5040<SeP>5774<SeP>6663<SeP>24163<SeP>6996<SeP>9087<SeP>7959<SeP>17082<SeP>8951<SeP>7983<SeP>5974<SeP>7196<SeP>6781<SeP>26477<SeP>7896<SeP>10867<SeP>6233<SeP>6631<SeP>5845<SeP>6277<SeP>14796<SeP>5989<SeP>14262<SeP>8373<SeP>7901<SeP>6099<SeP>6962<SeP>2798<SeP>7770<SeP>7192<SeP>4992<SeP>6111<SeP>8514<SeP>4824<SeP>20351<SeP>7894<SeP>6525<SeP>5899<SeP>8623<SeP>10595<SeP>7187<SeP>2486<SeP>5925<SeP>4309<SeP>4512<SeP>3914<SeP>2246<SeP>618<SeP>596<SeP>235<SeP>552<SeP>583<SeP>804<SeP>360<SeP>960<SeP>1075<SeP>1370<SeP>3322<SeP>22554<SeP>702<SeP>5344<SeP>3056<SeP>3422<SeP>6503<SeP>2644<SeP>4220<SeP>3796<SeP>2937<SeP>3078<SeP>3110<SeP>4738<SeP>1626<SeP>3606<SeP>1875<SeP>2601<SeP>1285<SeP>1848<SeP>1342<SeP>1735<SeP>840<SeP>1280<SeP>1598<SeP>26516<SeP>1687<SeP>4062<SeP>3583<SeP>2590<SeP>3229<SeP>3079<SeP>1938<SeP>3363<SeP>2638<SeP>3651<SeP>2553<SeP>2663<SeP>3577<SeP>4184<SeP>5660<SeP>4957<SeP>4611<SeP>2671<SeP>2890<SeP>4268<SeP>3823<SeP>10142<SeP>5080<SeP>3599<SeP>2477<SeP>2845<SeP>4325<SeP>3699<SeP>3221<SeP>3194<SeP>2876<SeP>4935<SeP>4619<SeP>4592<SeP>4817<SeP>5305<SeP>4915<SeP>5072<SeP>5321<SeP>12731<SeP>15806<SeP>12595<SeP>1870<SeP>2196<SeP>4853<SeP>3328<SeP>4091<SeP>3955<SeP>5051<SeP>3955<SeP>4517<SeP>4252<SeP>3567<SeP>3301<SeP>1267<SeP>1969<SeP>3247<SeP>2874<SeP>2612<SeP>3533<SeP>4259<SeP>4154<SeP>3137<SeP>4564<SeP>2856<SeP>3777<SeP>3629<SeP>8256<SeP>6433<SeP>5530<SeP>4708<SeP>5110<SeP>3903<SeP>3641<SeP>4745<SeP>5201<SeP>5429<SeP>4654<SeP>4447<SeP>2003<SeP>733<SeP>2016<SeP>1687<SeP>827<SeP>1922<SeP>1278<SeP>1080<SeP>2622<SeP>4035<SeP>6524<SeP>6026<SeP>32586<SeP>5502<SeP>9702<SeP>18693<SeP>5353<SeP>5094<SeP>6021<SeP>4098<SeP>24725<SeP>5840<SeP>4698<SeP>4668<SeP>5979<SeP>18939<SeP>16384<SeP>4585<SeP>3103<SeP>4525<SeP>5370<SeP>5731<SeP>2911<SeP>3215<SeP>4231<SeP>5170<SeP>5065<SeP>14303<SeP>8617<SeP>5590<SeP>6418<SeP>2896<SeP>2752<SeP>3563<SeP>4534<SeP>4221<SeP>3871<SeP>2713<SeP>3677<SeP>2621<SeP>4632<SeP>4846<SeP>8219<SeP>10814<SeP>7991<SeP>8944<SeP>8571<SeP>8078<SeP>4711<SeP>5216<SeP>3677<SeP>25841<SeP>3782<SeP>3073<SeP>4116<SeP>10593<SeP>5711<SeP>4945<SeP>3626<SeP>4943<SeP>3409<SeP>5441<SeP>9263<SeP>8287<SeP>4336<SeP>2737<SeP>3786<SeP>1762<SeP>2215<SeP>2530";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:16:57<SeP>2023-07-28 22:33:54<SeP>2023-07-30 09:50:51<SeP>2023-07-31 21:07:48<SeP>2023-08-02 08:24:45<SeP>2023-08-03 19:41:42<SeP>2023-08-05 06:58:39<SeP>2023-08-06 18:15:36<SeP>2023-08-08 05:32:33<SeP>2023-08-09 16:49:30<SeP>2023-08-11 04:06:27<SeP>2023-08-12 15:23:24<SeP>2023-08-14 02:40:21<SeP>2023-08-15 13:57:18<SeP>2023-08-17 01:14:15<SeP>2023-08-18 12:31:12<SeP>2023-08-19 23:48:09<SeP>2023-08-21 11:05:06<SeP>2023-08-22 22:22:03<SeP>2023-08-24 09:39:00<SeP>2023-08-25 20:55:57<SeP>2023-08-27 08:12:54<SeP>2023-08-28 19:29:51<SeP>2023-08-30 06:46:48<SeP>2023-08-31 18:03:45<SeP>2023-09-02 05:20:42<SeP>2023-09-03 16:37:39<SeP>2023-09-05 03:54:36<SeP>2023-09-06 15:11:33<SeP>2023-09-08 02:28:30<SeP>2023-09-09 13:45:27<SeP>2023-09-11 01:02:24<SeP>2023-09-12 12:19:21<SeP>2023-09-13 23:36:18<SeP>2023-09-15 10:53:15<SeP>2023-09-16 22:10:12<SeP>2023-09-18 09:27:09<SeP>2023-09-19 20:44:06<SeP>2023-09-21 08:01:03<SeP>2023-09-22 19:18:00<SeP>2023-09-24 06:34:57<SeP>2023-09-25 17:51:54<SeP>2023-09-27 05:08:51<SeP>2023-09-28 16:25:48<SeP>2023-09-30 03:42:45<SeP>2023-10-01 14:59:42<SeP>2023-10-03 02:16:39<SeP>2023-10-04 13:33:36<SeP>2023-10-06 00:50:33<SeP>2023-10-07 12:07:30<SeP>2023-10-08 23:24:27<SeP>2023-10-10 10:41:24<SeP>2023-10-11 21:58:21<SeP>2023-10-13 09:15:18<SeP>2023-10-14 20:32:15<SeP>2023-10-16 07:49:12<SeP>2023-10-17 19:06:09<SeP>2023-10-19 06:23:06<SeP>2023-10-20 17:40:03<SeP>2023-10-22 04:57:00<SeP>2023-10-23 16:13:57<SeP>2023-10-25 03:30:54<SeP>2023-10-26 14:47:51<SeP>2023-10-28 02:04:48<SeP>2023-10-29 13:21:45<SeP>2023-10-31 00:38:42<SeP>2023-11-01 11:55:39<SeP>2023-11-02 23:12:36<SeP>2023-11-04 10:29:33<SeP>2023-11-05 20:46:30<SeP>2023-11-07 08:03:27<SeP>2023-11-08 19:20:24<SeP>2023-11-10 06:37:21<SeP>2023-11-11 17:54:18<SeP>2023-11-13 05:11:15<SeP>2023-11-14 16:28:12<SeP>2023-11-16 03:45:09<SeP>2023-11-17 15:02:06<SeP>2023-11-19 02:19:03<SeP>2023-11-20 13:36:00<SeP>2023-11-22 00:52:57<SeP>2023-11-23 12:09:54<SeP>2023-11-24 23:26:51<SeP>2023-11-26 10:43:48<SeP>2023-11-27 22:00:45<SeP>2023-11-29 09:17:42<SeP>2023-11-30 20:34:39<SeP>2023-12-02 07:51:36<SeP>2023-12-03 19:08:33<SeP>2023-12-05 06:25:30<SeP>2023-12-06 17:42:27<SeP>2023-12-08 04:59:24<SeP>2023-12-09 16:16:21<SeP>2023-12-11 03:33:18<SeP>2023-12-12 14:50:15<SeP>2023-12-14 02:07:12<SeP>2023-12-15 13:24:09<SeP>2023-12-17 00:41:06<SeP>2023-12-18 11:58:03<SeP>2023-12-19 23:15:00<SeP>2023-12-21 10:31:57<SeP>2023-12-22 21:48:54<SeP>2023-12-24 09:05:51<SeP>2023-12-25 20:22:48<SeP>2023-12-27 07:39:45<SeP>2023-12-28 18:56:42<SeP>2023-12-30 06:13:39<SeP>2023-12-31 17:30:36<SeP>2024-01-02 04:47:33<SeP>2024-01-03 16:04:30<SeP>2024-01-05 03:21:27<SeP>2024-01-06 14:38:24<SeP>2024-01-08 01:55:21<SeP>2024-01-09 13:12:18<SeP>2024-01-11 00:29:15<SeP>2024-01-12 11:46:12<SeP>2024-01-13 23:03:09<SeP>2024-01-15 10:20:06<SeP>2024-01-16 21:37:03<SeP>2024-01-18 08:54:00<SeP>2024-01-19 20:10:57<SeP>2024-01-21 07:27:54<SeP>2024-01-22 18:44:51<SeP>2024-01-24 06:01:48<SeP>2024-01-25 17:18:45<SeP>2024-01-27 04:35:42<SeP>2024-01-28 15:52:39<SeP>2024-01-30 03:09:36<SeP>2024-01-31 14:26:33<SeP>2024-02-02 01:43:30<SeP>2024-02-03 13:00:27<SeP>2024-02-05 00:17:24<SeP>2024-02-06 11:34:21<SeP>2024-02-07 22:51:18<SeP>2024-02-09 10:08:15<SeP>2024-02-10 21:25:12<SeP>2024-02-12 08:42:09<SeP>2024-02-13 19:59:06<SeP>2024-02-15 07:16:03<SeP>2024-02-16 18:33:00<SeP>2024-02-18 05:49:57<SeP>2024-02-19 17:06:54<SeP>2024-02-21 04:23:51<SeP>2024-02-22 15:40:48<SeP>2024-02-24 02:57:45<SeP>2024-02-25 14:14:42<SeP>2024-02-27 01:31:39<SeP>2024-02-28 12:48:36<SeP>2024-03-01 00:05:33<SeP>2024-03-02 11:22:30<SeP>2024-03-03 22:39:27<SeP>2024-03-05 09:56:24<SeP>2024-03-06 21:13:21<SeP>2024-03-08 08:30:18<SeP>2024-03-09 19:47:15<SeP>2024-03-11 08:04:12<SeP>2024-03-12 19:21:09<SeP>2024-03-14 06:38:06<SeP>2024-03-15 17:55:03<SeP>2024-03-17 05:12:00<SeP>2024-03-18 16:28:57<SeP>2024-03-20 03:45:54<SeP>2024-03-21 15:02:51<SeP>2024-03-23 02:19:48<SeP>2024-03-24 13:36:45<SeP>2024-03-26 00:53:42<SeP>2024-03-27 12:10:39<SeP>2024-03-28 23:27:36<SeP>2024-03-30 10:44:33<SeP>2024-03-31 22:01:30<SeP>2024-04-02 09:18:27<SeP>2024-04-03 20:35:24<SeP>2024-04-05 07:52:21<SeP>2024-04-06 19:09:18<SeP>2024-04-08 06:26:15<SeP>2024-04-09 17:43:12<SeP>2024-04-11 05:00:09<SeP>2024-04-12 16:17:06<SeP>2024-04-14 03:34:03<SeP>2024-04-15 14:51:00<SeP>2024-04-17 02:07:57<SeP>2024-04-18 13:24:54<SeP>2024-04-20 00:41:51<SeP>2024-04-21 11:58:48<SeP>2024-04-22 23:15:45<SeP>2024-04-24 10:32:42<SeP>2024-04-25 21:49:39<SeP>2024-04-27 09:06:36<SeP>2024-04-28 20:23:33<SeP>2024-04-30 07:40:30<SeP>2024-05-01 18:57:27<SeP>2024-05-03 06:14:24<SeP>2024-05-04 17:31:21<SeP>2024-05-06 04:48:18<SeP>2024-05-07 16:05:15<SeP>2024-05-09 03:22:12<SeP>2024-05-10 14:39:09<SeP>2024-05-12 01:56:06<SeP>2024-05-13 13:13:03<SeP>2024-05-15 00:30:00<SeP>2024-05-16 11:46:57<SeP>2024-05-17 23:03:54<SeP>2024-05-19 10:20:51<SeP>2024-05-20 21:37:48<SeP>2024-05-22 08:54:45<SeP>2024-05-23 20:11:42<SeP>2024-05-25 07:28:39<SeP>2024-05-26 18:45:36<SeP>2024-05-28 06:02:33<SeP>2024-05-29 17:19:30<SeP>2024-05-31 04:36:27<SeP>2024-06-01 15:53:24<SeP>2024-06-03 03:10:21<SeP>2024-06-04 14:27:18<SeP>2024-06-06 01:44:15<SeP>2024-06-07 13:01:12<SeP>2024-06-09 00:18:09<SeP>2024-06-10 11:35:06<SeP>2024-06-11 22:52:03<SeP>2024-06-13 10:09:00<SeP>2024-06-14 21:25:57<SeP>2024-06-16 08:42:54<SeP>2024-06-17 19:59:51<SeP>2024-06-19 07:16:48<SeP>2024-06-20 18:33:45<SeP>2024-06-22 05:50:42<SeP>2024-06-23 17:07:39<SeP>2024-06-25 04:24:36<SeP>2024-06-26 15:41:33<SeP>2024-06-28 02:58:30<SeP>2024-06-29 14:15:27<SeP>2024-07-01 01:32:24<SeP>2024-07-02 12:49:21<SeP>2024-07-04 00:06:18<SeP>2024-07-05 11:23:15<SeP>2024-07-06 22:40:12<SeP>2024-07-08 09:57:09<SeP>2024-07-09 21:14:06<SeP>2024-07-11 08:31:03<SeP>2024-07-12 19:48:00<SeP>2024-07-14 07:04:57<SeP>2024-07-15 18:21:54<SeP>2024-07-17 05:38:51<SeP>2024-07-18 16:55:48<SeP>2024-07-20 04:12:45<SeP>2024-07-21 15:29:42<SeP>2024-07-23 02:46:39<SeP>2024-07-24 14:03:36<SeP>2024-07-26 01:20:33<SeP>2024-07-27 12:37:30<SeP>2024-07-28 23:54:27<SeP>2024-07-30 11:11:24<SeP>2024-07-31 22:28:21<SeP>2024-08-02 09:45:18<SeP>2024-08-03 21:02:15<SeP>2024-08-05 08:19:12<SeP>2024-08-06 19:36:09<SeP>2024-08-08 06:53:06<SeP>2024-08-09 18:10:03<SeP>2024-08-11 05:27:00<SeP>2024-08-12 16:43:57<SeP>2024-08-14 04:00:54<SeP>2024-08-15 15:17:51<SeP>2024-08-17 02:34:48<SeP>2024-08-18 13:51:45<SeP>2024-08-20 01:08:42<SeP>2024-08-21 12:25:39<SeP>2024-08-22 23:42:36<SeP>2024-08-24 10:59:33<SeP>2024-08-25 22:16:30<SeP>2024-08-27 09:33:27<SeP>2024-08-28 20:50:24<SeP>2024-08-30 08:07:21<SeP>2024-08-31 19:24:18<SeP>2024-09-02 06:41:15<SeP>2024-09-03 17:58:12<SeP>2024-09-05 05:15:09<SeP>2024-09-06 16:32:06<SeP>2024-09-08 03:49:03<SeP>2024-09-09 15:06:00<SeP>2024-09-11 02:22:57<SeP>2024-09-12 13:39:54<SeP>2024-09-14 00:56:51<SeP>2024-09-15 12:13:48<SeP>2024-09-16 23:30:45<SeP>2024-09-18 10:47:42<SeP>2024-09-19 22:04:39<SeP>2024-09-21 09:21:36<SeP>2024-09-22 20:38:33<SeP>2024-09-24 07:55:30<SeP>2024-09-25 19:12:27<SeP>2024-09-27 06:29:24<SeP>2024-09-28 17:46:21<SeP>2024-09-30 05:03:18<SeP>2024-10-01 16:20:15<SeP>2024-10-03 03:37:12<SeP>2024-10-04 14:54:09<SeP>2024-10-06 02:11:06<SeP>2024-10-07 13:28:03<SeP>2024-10-09 00:45:00<SeP>2024-10-10 12:01:57<SeP>2024-10-11 23:18:54<SeP>2024-10-13 10:35:51<SeP>2024-10-14 21:52:48<SeP>2024-10-16 09:09:45<SeP>2024-10-17 20:26:42<SeP>2024-10-19 07:43:39<SeP>2024-10-20 19:00:36<SeP>2024-10-22 06:17:33<SeP>2024-10-23 17:34:30<SeP>2024-10-25 04:51:27<SeP>2024-10-26 16:08:24<SeP>2024-10-28 03:25:21<SeP>2024-10-29 14:42:18<SeP>2024-10-31 01:59:15<SeP>2024-11-01 13:16:12<SeP>2024-11-03 00:33:09<SeP>2024-11-04 10:50:06<SeP>2024-11-05 22:07:03<SeP>2024-11-07 09:24:00<SeP>2024-11-08 20:40:57<SeP>2024-11-10 07:57:54<SeP>2024-11-11 19:14:51<SeP>2024-11-13 06:31:48<SeP>2024-11-14 17:48:45<SeP>2024-11-16 05:05:42<SeP>2024-11-17 16:22:39<SeP>2024-11-19 03:39:36<SeP>2024-11-20 14:56:33<SeP>2024-11-22 02:13:30<SeP>2024-11-23 13:30:27<SeP>2024-11-25 00:47:24<SeP>2024-11-26 12:04:21<SeP>2024-11-27 23:21:18<SeP>2024-11-29 10:38:15<SeP>2024-11-30 21:55:12<SeP>2024-12-02 09:12:09<SeP>2024-12-03 20:29:06<SeP>2024-12-05 07:46:03<SeP>2024-12-06 19:03:00<SeP>2024-12-08 06:19:57<SeP>2024-12-09 17:36:54<SeP>2024-12-11 04:53:51<SeP>2024-12-12 16:10:48<SeP>2024-12-14 03:27:45<SeP>2024-12-15 14:44:42<SeP>2024-12-17 02:01:39<SeP>2024-12-18 13:18:36<SeP>2024-12-20 00:35:33<SeP>2024-12-21 11:52:30<SeP>2024-12-22 23:09:27<SeP>2024-12-24 10:26:24<SeP>2024-12-25 21:43:21<SeP>2024-12-27 09:00:18<SeP>2024-12-28 20:17:15<SeP>2024-12-30 07:34:12<SeP>2024-12-31 18:51:09<SeP>2025-01-02 06:08:06<SeP>2025-01-03 17:25:03<SeP>2025-01-05 04:42:00<SeP>2025-01-06 15:58:57<SeP>2025-01-08 03:15:54<SeP>2025-01-09 14:32:51<SeP>2025-01-11 01:49:48<SeP>2025-01-12 13:06:45<SeP>2025-01-14 00:23:42<SeP>2025-01-15 11:40:39<SeP>2025-01-16 22:57:36<SeP>2025-01-18 10:14:33<SeP>2025-01-19 21:31:30<SeP>2025-01-21 08:48:27<SeP>2025-01-22 20:05:24<SeP>2025-01-24 07:22:21<SeP>2025-01-25 18:39:18<SeP>2025-01-27 05:56:15<SeP>2025-01-28 17:13:12<SeP>2025-01-30 04:30:09<SeP>2025-01-31 15:47:06<SeP>2025-02-02 03:04:03<SeP>2025-02-03 14:21:00<SeP>2025-02-05 01:37:57<SeP>2025-02-06 12:54:54<SeP>2025-02-08 00:11:51<SeP>2025-02-09 11:28:48<SeP>2025-02-10 22:45:45<SeP>2025-02-12 10:02:42<SeP>2025-02-13 21:19:39<SeP>2025-02-15 08:36:36<SeP>2025-02-16 19:53:33<SeP>2025-02-18 07:10:30<SeP>2025-02-19 18:27:27<SeP>2025-02-21 05:44:24<SeP>2025-02-22 17:01:21<SeP>2025-02-24 04:18:18<SeP>2025-02-25 15:35:15<SeP>2025-02-27 02:52:12<SeP>2025-02-28 14:09:09<SeP>2025-03-02 01:26:06<SeP>2025-03-03 12:43:03";
  const itemLabel       = "Escaneos";
  const itemData        = "770<SeP>1513<SeP>1367<SeP>1458<SeP>1247<SeP>1727<SeP>955<SeP>965<SeP>1171<SeP>3409<SeP>2696<SeP>1687<SeP>3215<SeP>990<SeP>758<SeP>915<SeP>1413<SeP>2925<SeP>1756<SeP>1190<SeP>1262<SeP>947<SeP>1015<SeP>1290<SeP>892<SeP>860<SeP>802<SeP>3785<SeP>703<SeP>1003<SeP>847<SeP>1771<SeP>889<SeP>835<SeP>3106<SeP>2546<SeP>2064<SeP>1677<SeP>1725<SeP>1279<SeP>1550<SeP>1828<SeP>1946<SeP>1964<SeP>1662<SeP>1648<SeP>1668<SeP>1719<SeP>1624<SeP>1787<SeP>1872<SeP>1792<SeP>1617<SeP>3185<SeP>1352<SeP>1864<SeP>1932<SeP>1857<SeP>2117<SeP>1976<SeP>3315<SeP>1433<SeP>1488<SeP>1485<SeP>1449<SeP>1956<SeP>1557<SeP>1254<SeP>1441<SeP>1268<SeP>2329<SeP>1195<SeP>1135<SeP>1250<SeP>2284<SeP>7311<SeP>1161<SeP>1351<SeP>1344<SeP>1623<SeP>2016<SeP>1084<SeP>6729<SeP>1529<SeP>1642<SeP>914<SeP>2099<SeP>2422<SeP>1186<SeP>1003<SeP>1014<SeP>1170<SeP>2437<SeP>1529<SeP>1133<SeP>1640<SeP>3959<SeP>5355<SeP>1242<SeP>924<SeP>958<SeP>978<SeP>951<SeP>963<SeP>1101<SeP>2233<SeP>3436<SeP>1687<SeP>1243<SeP>1340<SeP>631<SeP>1462<SeP>1314<SeP>1118<SeP>963<SeP>2295<SeP>1066<SeP>1193<SeP>1094<SeP>919<SeP>1183<SeP>660<SeP>909<SeP>852<SeP>796<SeP>1108<SeP>831<SeP>921<SeP>808<SeP>903<SeP>901<SeP>657<SeP>778<SeP>860<SeP>917<SeP>881<SeP>822<SeP>851<SeP>832<SeP>785<SeP>1058<SeP>805<SeP>872<SeP>881<SeP>973<SeP>991<SeP>964<SeP>965<SeP>543<SeP>912<SeP>866<SeP>1190<SeP>916<SeP>967<SeP>1220<SeP>1305<SeP>900<SeP>942<SeP>873<SeP>982<SeP>731<SeP>1046<SeP>999<SeP>970<SeP>911<SeP>962<SeP>1026<SeP>1100<SeP>975<SeP>1017<SeP>1038<SeP>941<SeP>1006<SeP>1819<SeP>1428<SeP>1232<SeP>1115<SeP>910<SeP>1155<SeP>1008<SeP>971<SeP>777<SeP>853<SeP>898<SeP>1165<SeP>788<SeP>1047<SeP>1291<SeP>1114<SeP>1154<SeP>1313<SeP>1178<SeP>1294<SeP>1274<SeP>1305<SeP>1521<SeP>1727<SeP>1703<SeP>1369<SeP>748<SeP>831<SeP>1127<SeP>1106<SeP>577<SeP>742<SeP>854<SeP>1009<SeP>1250<SeP>5987<SeP>2597<SeP>1967<SeP>1244<SeP>924<SeP>991<SeP>940<SeP>959<SeP>937<SeP>1148<SeP>1026<SeP>1066<SeP>1763<SeP>1732<SeP>1011<SeP>1319<SeP>1208<SeP>1170<SeP>1155<SeP>1005<SeP>1034<SeP>1083<SeP>1117<SeP>1062<SeP>1099<SeP>992<SeP>1145<SeP>817<SeP>1402<SeP>1108<SeP>1139<SeP>1191<SeP>1271<SeP>1307<SeP>1589<SeP>1207<SeP>1139<SeP>1264<SeP>1027<SeP>2015<SeP>1204<SeP>1721<SeP>1836<SeP>1376<SeP>2021<SeP>1726<SeP>1125<SeP>1259<SeP>1209<SeP>1145<SeP>1620<SeP>1348<SeP>1134<SeP>1517<SeP>1898<SeP>1269<SeP>1511<SeP>1401<SeP>1348<SeP>1177<SeP>1180<SeP>1245<SeP>1190<SeP>1206<SeP>1259<SeP>1268<SeP>1342<SeP>1868<SeP>1338<SeP>1296<SeP>1574<SeP>1537<SeP>1171<SeP>1149<SeP>908<SeP>900<SeP>874<SeP>1038<SeP>1000<SeP>1796<SeP>1087<SeP>1136<SeP>1168<SeP>784<SeP>1015<SeP>1002<SeP>1319<SeP>874<SeP>907<SeP>1148<SeP>1379<SeP>1616<SeP>1299<SeP>1071<SeP>1051<SeP>1105<SeP>1808<SeP>944<SeP>1260<SeP>1003<SeP>1474<SeP>1182<SeP>843<SeP>1236<SeP>1038<SeP>980<SeP>891<SeP>1118<SeP>1353<SeP>1585<SeP>1423<SeP>1361<SeP>1372<SeP>985<SeP>1167<SeP>1188<SeP>1170<SeP>1049<SeP>1091<SeP>1022<SeP>1243<SeP>1317<SeP>1505<SeP>1283<SeP>1568<SeP>1343<SeP>1621<SeP>1399<SeP>1297<SeP>1465<SeP>1476<SeP>1450<SeP>1339<SeP>1570<SeP>1510<SeP>1656<SeP>1324<SeP>1364<SeP>1408<SeP>1328<SeP>1252<SeP>1384<SeP>1574<SeP>1513<SeP>1250<SeP>1252<SeP>1284<SeP>1410<SeP>1304<SeP>1127<SeP>1697<SeP>1878<SeP>1428<SeP>1046<SeP>892<SeP>1519<SeP>1765<SeP>1241<SeP>1420<SeP>1060<SeP>1337<SeP>1301<SeP>1490<SeP>1350<SeP>1535<SeP>1633<SeP>1531<SeP>1397<SeP>1702<SeP>1392<SeP>1423<SeP>1654<SeP>1597<SeP>1264<SeP>1180<SeP>1576<SeP>1828<SeP>1854<SeP>1783<SeP>1839<SeP>1522<SeP>1627<SeP>1585<SeP>1617<SeP>1506<SeP>1568<SeP>1741<SeP>1908<SeP>1426<SeP>1446<SeP>1345<SeP>1720";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:16:57<SeP>2023-07-28 22:33:54<SeP>2023-07-30 09:50:51<SeP>2023-07-31 21:07:48<SeP>2023-08-02 08:24:45<SeP>2023-08-03 19:41:42<SeP>2023-08-05 06:58:39<SeP>2023-08-06 18:15:36<SeP>2023-08-08 05:32:33<SeP>2023-08-09 16:49:30<SeP>2023-08-11 04:06:27<SeP>2023-08-12 15:23:24<SeP>2023-08-14 02:40:21<SeP>2023-08-15 13:57:18<SeP>2023-08-17 01:14:15<SeP>2023-08-18 12:31:12<SeP>2023-08-19 23:48:09<SeP>2023-08-21 11:05:06<SeP>2023-08-22 22:22:03<SeP>2023-08-24 09:39:00<SeP>2023-08-25 20:55:57<SeP>2023-08-27 08:12:54<SeP>2023-08-28 19:29:51<SeP>2023-08-30 06:46:48<SeP>2023-08-31 18:03:45<SeP>2023-09-02 05:20:42<SeP>2023-09-03 16:37:39<SeP>2023-09-05 03:54:36<SeP>2023-09-06 15:11:33<SeP>2023-09-08 02:28:30<SeP>2023-09-09 13:45:27<SeP>2023-09-11 01:02:24<SeP>2023-09-12 12:19:21<SeP>2023-09-13 23:36:18<SeP>2023-09-15 10:53:15<SeP>2023-09-16 22:10:12<SeP>2023-09-18 09:27:09<SeP>2023-09-19 20:44:06<SeP>2023-09-21 08:01:03<SeP>2023-09-22 19:18:00<SeP>2023-09-24 06:34:57<SeP>2023-09-25 17:51:54<SeP>2023-09-27 05:08:51<SeP>2023-09-28 16:25:48<SeP>2023-09-30 03:42:45<SeP>2023-10-01 14:59:42<SeP>2023-10-03 02:16:39<SeP>2023-10-04 13:33:36<SeP>2023-10-06 00:50:33<SeP>2023-10-07 12:07:30<SeP>2023-10-08 23:24:27<SeP>2023-10-10 10:41:24<SeP>2023-10-11 21:58:21<SeP>2023-10-13 09:15:18<SeP>2023-10-14 20:32:15<SeP>2023-10-16 07:49:12<SeP>2023-10-17 19:06:09<SeP>2023-10-19 06:23:06<SeP>2023-10-20 17:40:03<SeP>2023-10-22 04:57:00<SeP>2023-10-23 16:13:57<SeP>2023-10-25 03:30:54<SeP>2023-10-26 14:47:51<SeP>2023-10-28 02:04:48<SeP>2023-10-29 13:21:45<SeP>2023-10-31 00:38:42<SeP>2023-11-01 11:55:39<SeP>2023-11-02 23:12:36<SeP>2023-11-04 10:29:33<SeP>2023-11-05 20:46:30<SeP>2023-11-07 08:03:27<SeP>2023-11-08 19:20:24<SeP>2023-11-10 06:37:21<SeP>2023-11-11 17:54:18<SeP>2023-11-13 05:11:15<SeP>2023-11-14 16:28:12<SeP>2023-11-16 03:45:09<SeP>2023-11-17 15:02:06<SeP>2023-11-19 02:19:03<SeP>2023-11-20 13:36:00<SeP>2023-11-22 00:52:57<SeP>2023-11-23 12:09:54<SeP>2023-11-24 23:26:51<SeP>2023-11-26 10:43:48<SeP>2023-11-27 22:00:45<SeP>2023-11-29 09:17:42<SeP>2023-11-30 20:34:39<SeP>2023-12-02 07:51:36<SeP>2023-12-03 19:08:33<SeP>2023-12-05 06:25:30<SeP>2023-12-06 17:42:27<SeP>2023-12-08 04:59:24<SeP>2023-12-09 16:16:21<SeP>2023-12-11 03:33:18<SeP>2023-12-12 14:50:15<SeP>2023-12-14 02:07:12<SeP>2023-12-15 13:24:09<SeP>2023-12-17 00:41:06<SeP>2023-12-18 11:58:03<SeP>2023-12-19 23:15:00<SeP>2023-12-21 10:31:57<SeP>2023-12-22 21:48:54<SeP>2023-12-24 09:05:51<SeP>2023-12-25 20:22:48<SeP>2023-12-27 07:39:45<SeP>2023-12-28 18:56:42<SeP>2023-12-30 06:13:39<SeP>2023-12-31 17:30:36<SeP>2024-01-02 04:47:33<SeP>2024-01-03 16:04:30<SeP>2024-01-05 03:21:27<SeP>2024-01-06 14:38:24<SeP>2024-01-08 01:55:21<SeP>2024-01-09 13:12:18<SeP>2024-01-11 00:29:15<SeP>2024-01-12 11:46:12<SeP>2024-01-13 23:03:09<SeP>2024-01-15 10:20:06<SeP>2024-01-16 21:37:03<SeP>2024-01-18 08:54:00<SeP>2024-01-19 20:10:57<SeP>2024-01-21 07:27:54<SeP>2024-01-22 18:44:51<SeP>2024-01-24 06:01:48<SeP>2024-01-25 17:18:45<SeP>2024-01-27 04:35:42<SeP>2024-01-28 15:52:39<SeP>2024-01-30 03:09:36<SeP>2024-01-31 14:26:33<SeP>2024-02-02 01:43:30<SeP>2024-02-03 13:00:27<SeP>2024-02-05 00:17:24<SeP>2024-02-06 11:34:21<SeP>2024-02-07 22:51:18<SeP>2024-02-09 10:08:15<SeP>2024-02-10 21:25:12<SeP>2024-02-12 08:42:09<SeP>2024-02-13 19:59:06<SeP>2024-02-15 07:16:03<SeP>2024-02-16 18:33:00<SeP>2024-02-18 05:49:57<SeP>2024-02-19 17:06:54<SeP>2024-02-21 04:23:51<SeP>2024-02-22 15:40:48<SeP>2024-02-24 02:57:45<SeP>2024-02-25 14:14:42<SeP>2024-02-27 01:31:39<SeP>2024-02-28 12:48:36<SeP>2024-03-01 00:05:33<SeP>2024-03-02 11:22:30<SeP>2024-03-03 22:39:27<SeP>2024-03-05 09:56:24<SeP>2024-03-06 21:13:21<SeP>2024-03-08 08:30:18<SeP>2024-03-09 19:47:15<SeP>2024-03-11 08:04:12<SeP>2024-03-12 19:21:09<SeP>2024-03-14 06:38:06<SeP>2024-03-15 17:55:03<SeP>2024-03-17 05:12:00<SeP>2024-03-18 16:28:57<SeP>2024-03-20 03:45:54<SeP>2024-03-21 15:02:51<SeP>2024-03-23 02:19:48<SeP>2024-03-24 13:36:45<SeP>2024-03-26 00:53:42<SeP>2024-03-27 12:10:39<SeP>2024-03-28 23:27:36<SeP>2024-03-30 10:44:33<SeP>2024-03-31 22:01:30<SeP>2024-04-02 09:18:27<SeP>2024-04-03 20:35:24<SeP>2024-04-05 07:52:21<SeP>2024-04-06 19:09:18<SeP>2024-04-08 06:26:15<SeP>2024-04-09 17:43:12<SeP>2024-04-11 05:00:09<SeP>2024-04-12 16:17:06<SeP>2024-04-14 03:34:03<SeP>2024-04-15 14:51:00<SeP>2024-04-17 02:07:57<SeP>2024-04-18 13:24:54<SeP>2024-04-20 00:41:51<SeP>2024-04-21 11:58:48<SeP>2024-04-22 23:15:45<SeP>2024-04-24 10:32:42<SeP>2024-04-25 21:49:39<SeP>2024-04-27 09:06:36<SeP>2024-04-28 20:23:33<SeP>2024-04-30 07:40:30<SeP>2024-05-01 18:57:27<SeP>2024-05-03 06:14:24<SeP>2024-05-04 17:31:21<SeP>2024-05-06 04:48:18<SeP>2024-05-07 16:05:15<SeP>2024-05-09 03:22:12<SeP>2024-05-10 14:39:09<SeP>2024-05-12 01:56:06<SeP>2024-05-13 13:13:03<SeP>2024-05-15 00:30:00<SeP>2024-05-16 11:46:57<SeP>2024-05-17 23:03:54<SeP>2024-05-19 10:20:51<SeP>2024-05-20 21:37:48<SeP>2024-05-22 08:54:45<SeP>2024-05-23 20:11:42<SeP>2024-05-25 07:28:39<SeP>2024-05-26 18:45:36<SeP>2024-05-28 06:02:33<SeP>2024-05-29 17:19:30<SeP>2024-05-31 04:36:27<SeP>2024-06-01 15:53:24<SeP>2024-06-03 03:10:21<SeP>2024-06-04 14:27:18<SeP>2024-06-06 01:44:15<SeP>2024-06-07 13:01:12<SeP>2024-06-09 00:18:09<SeP>2024-06-10 11:35:06<SeP>2024-06-11 22:52:03<SeP>2024-06-13 10:09:00<SeP>2024-06-14 21:25:57<SeP>2024-06-16 08:42:54<SeP>2024-06-17 19:59:51<SeP>2024-06-19 07:16:48<SeP>2024-06-20 18:33:45<SeP>2024-06-22 05:50:42<SeP>2024-06-23 17:07:39<SeP>2024-06-25 04:24:36<SeP>2024-06-26 15:41:33<SeP>2024-06-28 02:58:30<SeP>2024-06-29 14:15:27<SeP>2024-07-01 01:32:24<SeP>2024-07-02 12:49:21<SeP>2024-07-04 00:06:18<SeP>2024-07-05 11:23:15<SeP>2024-07-06 22:40:12<SeP>2024-07-08 09:57:09<SeP>2024-07-09 21:14:06<SeP>2024-07-11 08:31:03<SeP>2024-07-12 19:48:00<SeP>2024-07-14 07:04:57<SeP>2024-07-15 18:21:54<SeP>2024-07-17 05:38:51<SeP>2024-07-18 16:55:48<SeP>2024-07-20 04:12:45<SeP>2024-07-21 15:29:42<SeP>2024-07-23 02:46:39<SeP>2024-07-24 14:03:36<SeP>2024-07-26 01:20:33<SeP>2024-07-27 12:37:30<SeP>2024-07-28 23:54:27<SeP>2024-07-30 11:11:24<SeP>2024-07-31 22:28:21<SeP>2024-08-02 09:45:18<SeP>2024-08-03 21:02:15<SeP>2024-08-05 08:19:12<SeP>2024-08-06 19:36:09<SeP>2024-08-08 06:53:06<SeP>2024-08-09 18:10:03<SeP>2024-08-11 05:27:00<SeP>2024-08-12 16:43:57<SeP>2024-08-14 04:00:54<SeP>2024-08-15 15:17:51<SeP>2024-08-17 02:34:48<SeP>2024-08-18 13:51:45<SeP>2024-08-20 01:08:42<SeP>2024-08-21 12:25:39<SeP>2024-08-22 23:42:36<SeP>2024-08-24 10:59:33<SeP>2024-08-25 22:16:30<SeP>2024-08-27 09:33:27<SeP>2024-08-28 20:50:24<SeP>2024-08-30 08:07:21<SeP>2024-08-31 19:24:18<SeP>2024-09-02 06:41:15<SeP>2024-09-03 17:58:12<SeP>2024-09-05 05:15:09<SeP>2024-09-06 16:32:06<SeP>2024-09-08 03:49:03<SeP>2024-09-09 15:06:00<SeP>2024-09-11 02:22:57<SeP>2024-09-12 13:39:54<SeP>2024-09-14 00:56:51<SeP>2024-09-15 12:13:48<SeP>2024-09-16 23:30:45<SeP>2024-09-18 10:47:42<SeP>2024-09-19 22:04:39<SeP>2024-09-21 09:21:36<SeP>2024-09-22 20:38:33<SeP>2024-09-24 07:55:30<SeP>2024-09-25 19:12:27<SeP>2024-09-27 06:29:24<SeP>2024-09-28 17:46:21<SeP>2024-09-30 05:03:18<SeP>2024-10-01 16:20:15<SeP>2024-10-03 03:37:12<SeP>2024-10-04 14:54:09<SeP>2024-10-06 02:11:06<SeP>2024-10-07 13:28:03<SeP>2024-10-09 00:45:00<SeP>2024-10-10 12:01:57<SeP>2024-10-11 23:18:54<SeP>2024-10-13 10:35:51<SeP>2024-10-14 21:52:48<SeP>2024-10-16 09:09:45<SeP>2024-10-17 20:26:42<SeP>2024-10-19 07:43:39<SeP>2024-10-20 19:00:36<SeP>2024-10-22 06:17:33<SeP>2024-10-23 17:34:30<SeP>2024-10-25 04:51:27<SeP>2024-10-26 16:08:24<SeP>2024-10-28 03:25:21<SeP>2024-10-29 14:42:18<SeP>2024-10-31 01:59:15<SeP>2024-11-01 13:16:12<SeP>2024-11-03 00:33:09<SeP>2024-11-04 10:50:06<SeP>2024-11-05 22:07:03<SeP>2024-11-07 09:24:00<SeP>2024-11-08 20:40:57<SeP>2024-11-10 07:57:54<SeP>2024-11-11 19:14:51<SeP>2024-11-13 06:31:48<SeP>2024-11-14 17:48:45<SeP>2024-11-16 05:05:42<SeP>2024-11-17 16:22:39<SeP>2024-11-19 03:39:36<SeP>2024-11-20 14:56:33<SeP>2024-11-22 02:13:30<SeP>2024-11-23 13:30:27<SeP>2024-11-25 00:47:24<SeP>2024-11-26 12:04:21<SeP>2024-11-27 23:21:18<SeP>2024-11-29 10:38:15<SeP>2024-11-30 21:55:12<SeP>2024-12-02 09:12:09<SeP>2024-12-03 20:29:06<SeP>2024-12-05 07:46:03<SeP>2024-12-06 19:03:00<SeP>2024-12-08 06:19:57<SeP>2024-12-09 17:36:54<SeP>2024-12-11 04:53:51<SeP>2024-12-12 16:10:48<SeP>2024-12-14 03:27:45<SeP>2024-12-15 14:44:42<SeP>2024-12-17 02:01:39<SeP>2024-12-18 13:18:36<SeP>2024-12-20 00:35:33<SeP>2024-12-21 11:52:30<SeP>2024-12-22 23:09:27<SeP>2024-12-24 10:26:24<SeP>2024-12-25 21:43:21<SeP>2024-12-27 09:00:18<SeP>2024-12-28 20:17:15<SeP>2024-12-30 07:34:12<SeP>2024-12-31 18:51:09<SeP>2025-01-02 06:08:06<SeP>2025-01-03 17:25:03<SeP>2025-01-05 04:42:00<SeP>2025-01-06 15:58:57<SeP>2025-01-08 03:15:54<SeP>2025-01-09 14:32:51<SeP>2025-01-11 01:49:48<SeP>2025-01-12 13:06:45<SeP>2025-01-14 00:23:42<SeP>2025-01-15 11:40:39<SeP>2025-01-16 22:57:36<SeP>2025-01-18 10:14:33<SeP>2025-01-19 21:31:30<SeP>2025-01-21 08:48:27<SeP>2025-01-22 20:05:24<SeP>2025-01-24 07:22:21<SeP>2025-01-25 18:39:18<SeP>2025-01-27 05:56:15<SeP>2025-01-28 17:13:12<SeP>2025-01-30 04:30:09<SeP>2025-01-31 15:47:06<SeP>2025-02-02 03:04:03<SeP>2025-02-03 14:21:00<SeP>2025-02-05 01:37:57<SeP>2025-02-06 12:54:54<SeP>2025-02-08 00:11:51<SeP>2025-02-09 11:28:48<SeP>2025-02-10 22:45:45<SeP>2025-02-12 10:02:42<SeP>2025-02-13 21:19:39<SeP>2025-02-15 08:36:36<SeP>2025-02-16 19:53:33<SeP>2025-02-18 07:10:30<SeP>2025-02-19 18:27:27<SeP>2025-02-21 05:44:24<SeP>2025-02-22 17:01:21<SeP>2025-02-24 04:18:18<SeP>2025-02-25 15:35:15<SeP>2025-02-27 02:52:12<SeP>2025-02-28 14:09:09<SeP>2025-03-02 01:26:06<SeP>2025-03-03 12:43:03";
  const itemLabel       = "Ataques";
  const itemData        = "155<SeP>614<SeP>1256<SeP>793<SeP>221<SeP>234<SeP>6985<SeP>552<SeP>9484<SeP>567<SeP>399<SeP>1130<SeP>1285<SeP>247<SeP>169<SeP>447<SeP>109<SeP>761<SeP>321<SeP>6852<SeP>7142<SeP>6916<SeP>8441<SeP>4179<SeP>265<SeP>235<SeP>385<SeP>367<SeP>5727<SeP>312<SeP>252<SeP>228<SeP>505<SeP>306<SeP>6782<SeP>10082<SeP>9515<SeP>10286<SeP>7645<SeP>4889<SeP>8631<SeP>7462<SeP>9014<SeP>8853<SeP>7433<SeP>8128<SeP>9063<SeP>8288<SeP>9164<SeP>5537<SeP>5848<SeP>12858<SeP>6764<SeP>7326<SeP>8057<SeP>9912<SeP>16821<SeP>18328<SeP>8373<SeP>9616<SeP>9476<SeP>7773<SeP>8324<SeP>8360<SeP>8603<SeP>8097<SeP>6432<SeP>6772<SeP>7131<SeP>5357<SeP>3366<SeP>6879<SeP>5873<SeP>6711<SeP>6356<SeP>6672<SeP>4504<SeP>5874<SeP>7399<SeP>4523<SeP>6855<SeP>5190<SeP>5685<SeP>6740<SeP>5500<SeP>5755<SeP>5702<SeP>10102<SeP>20809<SeP>35938<SeP>7548<SeP>9835<SeP>5331<SeP>6625<SeP>13056<SeP>6082<SeP>4470<SeP>5236<SeP>4915<SeP>6122<SeP>5619<SeP>8373<SeP>5613<SeP>6675<SeP>5050<SeP>4708<SeP>8343<SeP>8724<SeP>8043<SeP>6453<SeP>3818<SeP>9070<SeP>10058<SeP>6606<SeP>3334<SeP>5834<SeP>8347<SeP>5619<SeP>7017<SeP>9035<SeP>6805<SeP>1322<SeP>2478<SeP>1027<SeP>2481<SeP>2048<SeP>1493<SeP>734<SeP>1048<SeP>1285<SeP>1859<SeP>596<SeP>1297<SeP>1123<SeP>1088<SeP>817<SeP>1346<SeP>1359<SeP>1301<SeP>893<SeP>2193<SeP>1884<SeP>6246<SeP>10609<SeP>8039<SeP>8222<SeP>7200<SeP>12615<SeP>2842<SeP>11589<SeP>9943<SeP>9100<SeP>12916<SeP>8094<SeP>13037<SeP>12315<SeP>6598<SeP>12579<SeP>5040<SeP>5774<SeP>6663<SeP>24163<SeP>6996<SeP>9087<SeP>7959<SeP>17082<SeP>8951<SeP>7983<SeP>5974<SeP>7196<SeP>6781<SeP>26477<SeP>7896<SeP>10867<SeP>6233<SeP>6631<SeP>5845<SeP>6277<SeP>14796<SeP>5989<SeP>14262<SeP>8373<SeP>7901<SeP>6099<SeP>6962<SeP>2798<SeP>7770<SeP>7192<SeP>4992<SeP>6111<SeP>8514<SeP>4824<SeP>20351<SeP>7894<SeP>6525<SeP>5899<SeP>8623<SeP>10595<SeP>7187<SeP>2486<SeP>5925<SeP>4309<SeP>4512<SeP>3914<SeP>2246<SeP>618<SeP>596<SeP>235<SeP>552<SeP>583<SeP>804<SeP>360<SeP>960<SeP>1075<SeP>1370<SeP>3322<SeP>22554<SeP>702<SeP>5344<SeP>3056<SeP>3422<SeP>6503<SeP>2644<SeP>4220<SeP>3796<SeP>2937<SeP>3078<SeP>3110<SeP>4738<SeP>1626<SeP>3606<SeP>1875<SeP>2601<SeP>1285<SeP>1848<SeP>1342<SeP>1735<SeP>840<SeP>1280<SeP>1598<SeP>26516<SeP>1687<SeP>4062<SeP>3583<SeP>2590<SeP>3229<SeP>3079<SeP>1938<SeP>3363<SeP>2638<SeP>3651<SeP>2553<SeP>2663<SeP>3577<SeP>4184<SeP>5660<SeP>4957<SeP>4611<SeP>2671<SeP>2890<SeP>4268<SeP>3823<SeP>10142<SeP>5080<SeP>3599<SeP>2477<SeP>2845<SeP>4325<SeP>3699<SeP>3221<SeP>3194<SeP>2876<SeP>4935<SeP>4619<SeP>4592<SeP>4817<SeP>5305<SeP>4915<SeP>5072<SeP>5321<SeP>12731<SeP>15806<SeP>12595<SeP>1870<SeP>2196<SeP>4853<SeP>3328<SeP>4091<SeP>3955<SeP>5051<SeP>3955<SeP>4517<SeP>4252<SeP>3567<SeP>3301<SeP>1267<SeP>1969<SeP>3247<SeP>2874<SeP>2612<SeP>3533<SeP>4259<SeP>4154<SeP>3137<SeP>4564<SeP>2856<SeP>3777<SeP>3629<SeP>8256<SeP>6433<SeP>5530<SeP>4708<SeP>5110<SeP>3903<SeP>3641<SeP>4745<SeP>5201<SeP>5429<SeP>4654<SeP>4447<SeP>2003<SeP>733<SeP>2016<SeP>1687<SeP>827<SeP>1922<SeP>1278<SeP>1080<SeP>2622<SeP>4035<SeP>6524<SeP>6026<SeP>32586<SeP>5502<SeP>9702<SeP>18693<SeP>5353<SeP>5094<SeP>6021<SeP>4098<SeP>24725<SeP>5840<SeP>4698<SeP>4668<SeP>5979<SeP>18939<SeP>16384<SeP>4585<SeP>3103<SeP>4525<SeP>5370<SeP>5731<SeP>2911<SeP>3215<SeP>4231<SeP>5170<SeP>5065<SeP>14303<SeP>8617<SeP>5590<SeP>6418<SeP>2896<SeP>2752<SeP>3563<SeP>4534<SeP>4221<SeP>3871<SeP>2713<SeP>3677<SeP>2621<SeP>4632<SeP>4846<SeP>8219<SeP>10814<SeP>7991<SeP>8944<SeP>8571<SeP>8078<SeP>4711<SeP>5216<SeP>3677<SeP>25841<SeP>3782<SeP>3073<SeP>4116<SeP>10593<SeP>5711<SeP>4945<SeP>3626<SeP>4943<SeP>3409<SeP>5441<SeP>9263<SeP>8287<SeP>4336<SeP>2737<SeP>3786<SeP>1762<SeP>2215<SeP>2530";
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
  const itemData    = "695802<SeP>365393<SeP>206581<SeP>180284<SeP>110590<SeP>88130<SeP>83816<SeP>81128<SeP>68110<SeP>67567";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "297990<SeP>41426<SeP>40677<SeP>36120<SeP>14556<SeP>11101<SeP>8101<SeP>7971<SeP>7182<SeP>7123";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "397812<SeP>329273<SeP>203541<SeP>139607<SeP>96034<SeP>81177<SeP>80948<SeP>70027<SeP>59596<SeP>58750";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "363334<SeP>259557<SeP>237149<SeP>143855<SeP>67426<SeP>59836<SeP>56755<SeP>53245<SeP>41619<SeP>36225";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>9808<SeP>0<SeP>137688";
  const itemLabel   = "Scans";
  const itemData    = "156925<SeP>53547<SeP>40497<SeP>32558<SeP>21913<SeP>12834<SeP>10848<SeP>8281<SeP>8090<SeP>7614";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>149722<SeP>4808<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "350500<SeP>258790<SeP>121942<SeP>80224<SeP>55747<SeP>48988<SeP>47170<SeP>29324<SeP>29186<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "695802<SeP>365393<SeP>206581<SeP>180284<SeP>110590<SeP>88130<SeP>83816<SeP>81128<SeP>68110<SeP>67567";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "297990<SeP>41426<SeP>40677<SeP>36120<SeP>14556<SeP>11101<SeP>8101<SeP>7971<SeP>7182<SeP>7123";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "397812<SeP>329273<SeP>203541<SeP>139607<SeP>96034<SeP>81177<SeP>80948<SeP>70027<SeP>59596<SeP>58750";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "363334<SeP>259557<SeP>237149<SeP>143855<SeP>67426<SeP>59836<SeP>56755<SeP>53245<SeP>41619<SeP>36225";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>9808<SeP>0<SeP>137688";
  const itemLabel   = "Escaneos";
  const itemData    = "156925<SeP>53547<SeP>40497<SeP>32558<SeP>21913<SeP>12834<SeP>10848<SeP>8281<SeP>8090<SeP>7614";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>149722<SeP>4808<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "350500<SeP>258790<SeP>121942<SeP>80224<SeP>55747<SeP>48988<SeP>47170<SeP>29324<SeP>29186<SeP>26846";
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
