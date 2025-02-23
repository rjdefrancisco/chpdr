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
  document.getElementById("last-updated").innerHTML = "2025-2-23";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "34.7";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.7";
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
  const metricData    = "2805021";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "541948";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2263073";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "137798";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1423880";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "839193";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53171";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "246011";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "593182";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42589";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2805021";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "541948";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2263073";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "137798";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1423880";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "839193";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53171";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "246011";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "593182";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42589";
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
  const incomingData = "2805021<SeP>541948<SeP>2263073<SeP>137798";
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
  const incomingData = "2263073<SeP>1423880<SeP>839193<SeP>53171";
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
  const incomingData = "839193<SeP>246011<SeP>593182<SeP>42589";
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
  const incomingData = "2556047<SeP>253379<SeP>2302668";
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
  const incomingData = "388179<SeP>144<SeP>388035<SeP>224";
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
  const incomingData = "2805021<SeP>541948<SeP>2263073<SeP>137798";
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
  const incomingData = "2263073<SeP>1423880<SeP>839193<SeP>53171";
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
  const incomingData = "839193<SeP>246011<SeP>593182<SeP>42589";
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
  const incomingData = "2556047<SeP>253379<SeP>2302668";
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
  const incomingData = "388179<SeP>144<SeP>388035<SeP>224";
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
  const column3Data   = "217890<SeP>199448<SeP>12449<SeP>12178<SeP>9702<SeP>9393<SeP>6441<SeP>5593<SeP>4621<SeP>3462";
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
  const column2Data  = "209140<SeP>43014<SeP>484<SeP>445<SeP>426<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2381232<SeP>423789";
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
  const column3Data   = "217890<SeP>199448<SeP>12449<SeP>12178<SeP>9702<SeP>9393<SeP>6441<SeP>5593<SeP>4621<SeP>3462";
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
  const column2Data  = "209140<SeP>43014<SeP>484<SeP>445<SeP>426<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2381232<SeP>423789";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-23";

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
        "name": "traffic between 2023-07-26 and 2025-02-21"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          389241,50
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
        "name": "scans between 2023-07-26 and 2025-02-21"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          223785,30,
          389241,50
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
        "name": "attacks between 2023-07-26 and 2025-02-21"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165456,23,
          389241,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-23";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-21"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          389241,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-21"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          223785,30,
          389241,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-21"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165456,23,
          389241,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:40:57<SeP>2023-07-28 21:21:54<SeP>2023-07-30 08:02:51<SeP>2023-07-31 18:43:48<SeP>2023-08-02 05:24:45<SeP>2023-08-03 16:05:42<SeP>2023-08-05 02:46:39<SeP>2023-08-06 13:27:36<SeP>2023-08-08 00:08:33<SeP>2023-08-09 10:49:30<SeP>2023-08-10 21:30:27<SeP>2023-08-12 08:11:24<SeP>2023-08-13 18:52:21<SeP>2023-08-15 05:33:18<SeP>2023-08-16 16:14:15<SeP>2023-08-18 02:55:12<SeP>2023-08-19 13:36:09<SeP>2023-08-21 00:17:06<SeP>2023-08-22 10:58:03<SeP>2023-08-23 21:39:00<SeP>2023-08-25 08:19:57<SeP>2023-08-26 19:00:54<SeP>2023-08-28 05:41:51<SeP>2023-08-29 16:22:48<SeP>2023-08-31 03:03:45<SeP>2023-09-01 13:44:42<SeP>2023-09-03 00:25:39<SeP>2023-09-04 11:06:36<SeP>2023-09-05 21:47:33<SeP>2023-09-07 08:28:30<SeP>2023-09-08 19:09:27<SeP>2023-09-10 05:50:24<SeP>2023-09-11 16:31:21<SeP>2023-09-13 03:12:18<SeP>2023-09-14 13:53:15<SeP>2023-09-16 00:34:12<SeP>2023-09-17 11:15:09<SeP>2023-09-18 21:56:06<SeP>2023-09-20 08:37:03<SeP>2023-09-21 19:18:00<SeP>2023-09-23 05:58:57<SeP>2023-09-24 16:39:54<SeP>2023-09-26 03:20:51<SeP>2023-09-27 14:01:48<SeP>2023-09-29 00:42:45<SeP>2023-09-30 11:23:42<SeP>2023-10-01 22:04:39<SeP>2023-10-03 08:45:36<SeP>2023-10-04 19:26:33<SeP>2023-10-06 06:07:30<SeP>2023-10-07 16:48:27<SeP>2023-10-09 03:29:24<SeP>2023-10-10 14:10:21<SeP>2023-10-12 00:51:18<SeP>2023-10-13 11:32:15<SeP>2023-10-14 22:13:12<SeP>2023-10-16 08:54:09<SeP>2023-10-17 19:35:06<SeP>2023-10-19 06:16:03<SeP>2023-10-20 16:57:00<SeP>2023-10-22 03:37:57<SeP>2023-10-23 14:18:54<SeP>2023-10-25 00:59:51<SeP>2023-10-26 11:40:48<SeP>2023-10-27 22:21:45<SeP>2023-10-29 09:02:42<SeP>2023-10-30 19:43:39<SeP>2023-11-01 06:24:36<SeP>2023-11-02 17:05:33<SeP>2023-11-04 03:46:30<SeP>2023-11-05 13:27:27<SeP>2023-11-07 00:08:24<SeP>2023-11-08 10:49:21<SeP>2023-11-09 21:30:18<SeP>2023-11-11 08:11:15<SeP>2023-11-12 18:52:12<SeP>2023-11-14 05:33:09<SeP>2023-11-15 16:14:06<SeP>2023-11-17 02:55:03<SeP>2023-11-18 13:36:00<SeP>2023-11-20 00:16:57<SeP>2023-11-21 10:57:54<SeP>2023-11-22 21:38:51<SeP>2023-11-24 08:19:48<SeP>2023-11-25 19:00:45<SeP>2023-11-27 05:41:42<SeP>2023-11-28 16:22:39<SeP>2023-11-30 03:03:36<SeP>2023-12-01 13:44:33<SeP>2023-12-03 00:25:30<SeP>2023-12-04 11:06:27<SeP>2023-12-05 21:47:24<SeP>2023-12-07 08:28:21<SeP>2023-12-08 19:09:18<SeP>2023-12-10 05:50:15<SeP>2023-12-11 16:31:12<SeP>2023-12-13 03:12:09<SeP>2023-12-14 13:53:06<SeP>2023-12-16 00:34:03<SeP>2023-12-17 11:15:00<SeP>2023-12-18 21:55:57<SeP>2023-12-20 08:36:54<SeP>2023-12-21 19:17:51<SeP>2023-12-23 05:58:48<SeP>2023-12-24 16:39:45<SeP>2023-12-26 03:20:42<SeP>2023-12-27 14:01:39<SeP>2023-12-29 00:42:36<SeP>2023-12-30 11:23:33<SeP>2023-12-31 22:04:30<SeP>2024-01-02 08:45:27<SeP>2024-01-03 19:26:24<SeP>2024-01-05 06:07:21<SeP>2024-01-06 16:48:18<SeP>2024-01-08 03:29:15<SeP>2024-01-09 14:10:12<SeP>2024-01-11 00:51:09<SeP>2024-01-12 11:32:06<SeP>2024-01-13 22:13:03<SeP>2024-01-15 08:54:00<SeP>2024-01-16 19:34:57<SeP>2024-01-18 06:15:54<SeP>2024-01-19 16:56:51<SeP>2024-01-21 03:37:48<SeP>2024-01-22 14:18:45<SeP>2024-01-24 00:59:42<SeP>2024-01-25 11:40:39<SeP>2024-01-26 22:21:36<SeP>2024-01-28 09:02:33<SeP>2024-01-29 19:43:30<SeP>2024-01-31 06:24:27<SeP>2024-02-01 17:05:24<SeP>2024-02-03 03:46:21<SeP>2024-02-04 14:27:18<SeP>2024-02-06 01:08:15<SeP>2024-02-07 11:49:12<SeP>2024-02-08 22:30:09<SeP>2024-02-10 09:11:06<SeP>2024-02-11 19:52:03<SeP>2024-02-13 06:33:00<SeP>2024-02-14 17:13:57<SeP>2024-02-16 03:54:54<SeP>2024-02-17 14:35:51<SeP>2024-02-19 01:16:48<SeP>2024-02-20 11:57:45<SeP>2024-02-21 22:38:42<SeP>2024-02-23 09:19:39<SeP>2024-02-24 20:00:36<SeP>2024-02-26 06:41:33<SeP>2024-02-27 17:22:30<SeP>2024-02-29 04:03:27<SeP>2024-03-01 14:44:24<SeP>2024-03-03 01:25:21<SeP>2024-03-04 12:06:18<SeP>2024-03-05 22:47:15<SeP>2024-03-07 09:28:12<SeP>2024-03-08 20:09:09<SeP>2024-03-10 07:50:06<SeP>2024-03-11 18:31:03<SeP>2024-03-13 05:12:00<SeP>2024-03-14 15:52:57<SeP>2024-03-16 02:33:54<SeP>2024-03-17 13:14:51<SeP>2024-03-18 23:55:48<SeP>2024-03-20 10:36:45<SeP>2024-03-21 21:17:42<SeP>2024-03-23 07:58:39<SeP>2024-03-24 18:39:36<SeP>2024-03-26 05:20:33<SeP>2024-03-27 16:01:30<SeP>2024-03-29 02:42:27<SeP>2024-03-30 13:23:24<SeP>2024-04-01 00:04:21<SeP>2024-04-02 10:45:18<SeP>2024-04-03 21:26:15<SeP>2024-04-05 08:07:12<SeP>2024-04-06 18:48:09<SeP>2024-04-08 05:29:06<SeP>2024-04-09 16:10:03<SeP>2024-04-11 02:51:00<SeP>2024-04-12 13:31:57<SeP>2024-04-14 00:12:54<SeP>2024-04-15 10:53:51<SeP>2024-04-16 21:34:48<SeP>2024-04-18 08:15:45<SeP>2024-04-19 18:56:42<SeP>2024-04-21 05:37:39<SeP>2024-04-22 16:18:36<SeP>2024-04-24 02:59:33<SeP>2024-04-25 13:40:30<SeP>2024-04-27 00:21:27<SeP>2024-04-28 11:02:24<SeP>2024-04-29 21:43:21<SeP>2024-05-01 08:24:18<SeP>2024-05-02 19:05:15<SeP>2024-05-04 05:46:12<SeP>2024-05-05 16:27:09<SeP>2024-05-07 03:08:06<SeP>2024-05-08 13:49:03<SeP>2024-05-10 00:30:00<SeP>2024-05-11 11:10:57<SeP>2024-05-12 21:51:54<SeP>2024-05-14 08:32:51<SeP>2024-05-15 19:13:48<SeP>2024-05-17 05:54:45<SeP>2024-05-18 16:35:42<SeP>2024-05-20 03:16:39<SeP>2024-05-21 13:57:36<SeP>2024-05-23 00:38:33<SeP>2024-05-24 11:19:30<SeP>2024-05-25 22:00:27<SeP>2024-05-27 08:41:24<SeP>2024-05-28 19:22:21<SeP>2024-05-30 06:03:18<SeP>2024-05-31 16:44:15<SeP>2024-06-02 03:25:12<SeP>2024-06-03 14:06:09<SeP>2024-06-05 00:47:06<SeP>2024-06-06 11:28:03<SeP>2024-06-07 22:09:00<SeP>2024-06-09 08:49:57<SeP>2024-06-10 19:30:54<SeP>2024-06-12 06:11:51<SeP>2024-06-13 16:52:48<SeP>2024-06-15 03:33:45<SeP>2024-06-16 14:14:42<SeP>2024-06-18 00:55:39<SeP>2024-06-19 11:36:36<SeP>2024-06-20 22:17:33<SeP>2024-06-22 08:58:30<SeP>2024-06-23 19:39:27<SeP>2024-06-25 06:20:24<SeP>2024-06-26 17:01:21<SeP>2024-06-28 03:42:18<SeP>2024-06-29 14:23:15<SeP>2024-07-01 01:04:12<SeP>2024-07-02 11:45:09<SeP>2024-07-03 22:26:06<SeP>2024-07-05 09:07:03<SeP>2024-07-06 19:48:00<SeP>2024-07-08 06:28:57<SeP>2024-07-09 17:09:54<SeP>2024-07-11 03:50:51<SeP>2024-07-12 14:31:48<SeP>2024-07-14 01:12:45<SeP>2024-07-15 11:53:42<SeP>2024-07-16 22:34:39<SeP>2024-07-18 09:15:36<SeP>2024-07-19 19:56:33<SeP>2024-07-21 06:37:30<SeP>2024-07-22 17:18:27<SeP>2024-07-24 03:59:24<SeP>2024-07-25 14:40:21<SeP>2024-07-27 01:21:18<SeP>2024-07-28 12:02:15<SeP>2024-07-29 22:43:12<SeP>2024-07-31 09:24:09<SeP>2024-08-01 20:05:06<SeP>2024-08-03 06:46:03<SeP>2024-08-04 17:27:00<SeP>2024-08-06 04:07:57<SeP>2024-08-07 14:48:54<SeP>2024-08-09 01:29:51<SeP>2024-08-10 12:10:48<SeP>2024-08-11 22:51:45<SeP>2024-08-13 09:32:42<SeP>2024-08-14 20:13:39<SeP>2024-08-16 06:54:36<SeP>2024-08-17 17:35:33<SeP>2024-08-19 04:16:30<SeP>2024-08-20 14:57:27<SeP>2024-08-22 01:38:24<SeP>2024-08-23 12:19:21<SeP>2024-08-24 23:00:18<SeP>2024-08-26 09:41:15<SeP>2024-08-27 20:22:12<SeP>2024-08-29 07:03:09<SeP>2024-08-30 17:44:06<SeP>2024-09-01 04:25:03<SeP>2024-09-02 15:06:00<SeP>2024-09-04 01:46:57<SeP>2024-09-05 12:27:54<SeP>2024-09-06 23:08:51<SeP>2024-09-08 09:49:48<SeP>2024-09-09 20:30:45<SeP>2024-09-11 07:11:42<SeP>2024-09-12 17:52:39<SeP>2024-09-14 04:33:36<SeP>2024-09-15 15:14:33<SeP>2024-09-17 01:55:30<SeP>2024-09-18 12:36:27<SeP>2024-09-19 23:17:24<SeP>2024-09-21 09:58:21<SeP>2024-09-22 20:39:18<SeP>2024-09-24 07:20:15<SeP>2024-09-25 18:01:12<SeP>2024-09-27 04:42:09<SeP>2024-09-28 15:23:06<SeP>2024-09-30 02:04:03<SeP>2024-10-01 12:45:00<SeP>2024-10-02 23:25:57<SeP>2024-10-04 10:06:54<SeP>2024-10-05 20:47:51<SeP>2024-10-07 07:28:48<SeP>2024-10-08 18:09:45<SeP>2024-10-10 04:50:42<SeP>2024-10-11 15:31:39<SeP>2024-10-13 02:12:36<SeP>2024-10-14 12:53:33<SeP>2024-10-15 23:34:30<SeP>2024-10-17 10:15:27<SeP>2024-10-18 20:56:24<SeP>2024-10-20 07:37:21<SeP>2024-10-21 18:18:18<SeP>2024-10-23 04:59:15<SeP>2024-10-24 15:40:12<SeP>2024-10-26 02:21:09<SeP>2024-10-27 13:02:06<SeP>2024-10-28 23:43:03<SeP>2024-10-30 10:24:00<SeP>2024-10-31 21:04:57<SeP>2024-11-02 07:45:54<SeP>2024-11-03 17:26:51<SeP>2024-11-05 04:07:48<SeP>2024-11-06 14:48:45<SeP>2024-11-08 01:29:42<SeP>2024-11-09 12:10:39<SeP>2024-11-10 22:51:36<SeP>2024-11-12 09:32:33<SeP>2024-11-13 20:13:30<SeP>2024-11-15 06:54:27<SeP>2024-11-16 17:35:24<SeP>2024-11-18 04:16:21<SeP>2024-11-19 14:57:18<SeP>2024-11-21 01:38:15<SeP>2024-11-22 12:19:12<SeP>2024-11-23 23:00:09<SeP>2024-11-25 09:41:06<SeP>2024-11-26 20:22:03<SeP>2024-11-28 07:03:00<SeP>2024-11-29 17:43:57<SeP>2024-12-01 04:24:54<SeP>2024-12-02 15:05:51<SeP>2024-12-04 01:46:48<SeP>2024-12-05 12:27:45<SeP>2024-12-06 23:08:42<SeP>2024-12-08 09:49:39<SeP>2024-12-09 20:30:36<SeP>2024-12-11 07:11:33<SeP>2024-12-12 17:52:30<SeP>2024-12-14 04:33:27<SeP>2024-12-15 15:14:24<SeP>2024-12-17 01:55:21<SeP>2024-12-18 12:36:18<SeP>2024-12-19 23:17:15<SeP>2024-12-21 09:58:12<SeP>2024-12-22 20:39:09<SeP>2024-12-24 07:20:06<SeP>2024-12-25 18:01:03<SeP>2024-12-27 04:42:00<SeP>2024-12-28 15:22:57<SeP>2024-12-30 02:03:54<SeP>2024-12-31 12:44:51<SeP>2025-01-01 23:25:48<SeP>2025-01-03 10:06:45<SeP>2025-01-04 20:47:42<SeP>2025-01-06 07:28:39<SeP>2025-01-07 18:09:36<SeP>2025-01-09 04:50:33<SeP>2025-01-10 15:31:30<SeP>2025-01-12 02:12:27<SeP>2025-01-13 12:53:24<SeP>2025-01-14 23:34:21<SeP>2025-01-16 10:15:18<SeP>2025-01-17 20:56:15<SeP>2025-01-19 07:37:12<SeP>2025-01-20 18:18:09<SeP>2025-01-22 04:59:06<SeP>2025-01-23 15:40:03<SeP>2025-01-25 02:21:00<SeP>2025-01-26 13:01:57<SeP>2025-01-27 23:42:54<SeP>2025-01-29 10:23:51<SeP>2025-01-30 21:04:48<SeP>2025-02-01 07:45:45<SeP>2025-02-02 18:26:42<SeP>2025-02-04 05:07:39<SeP>2025-02-05 15:48:36<SeP>2025-02-07 02:29:33<SeP>2025-02-08 13:10:30<SeP>2025-02-09 23:51:27<SeP>2025-02-11 10:32:24<SeP>2025-02-12 21:13:21<SeP>2025-02-14 07:54:18<SeP>2025-02-15 18:35:15<SeP>2025-02-17 05:16:12<SeP>2025-02-18 15:57:09<SeP>2025-02-20 02:38:06<SeP>2025-02-21 13:19:03";
  const item1Label       = "Scans";
  const item1Data        = "760<SeP>1462<SeP>1379<SeP>1442<SeP>1250<SeP>1677<SeP>952<SeP>978<SeP>1104<SeP>3353<SeP>1607<SeP>2702<SeP>1989<SeP>2350<SeP>751<SeP>858<SeP>1407<SeP>1954<SeP>1973<SeP>1668<SeP>1454<SeP>936<SeP>843<SeP>1446<SeP>789<SeP>992<SeP>758<SeP>935<SeP>3539<SeP>931<SeP>840<SeP>1390<SeP>1253<SeP>799<SeP>2659<SeP>1575<SeP>2847<SeP>1855<SeP>1841<SeP>1253<SeP>1282<SeP>1728<SeP>1847<SeP>2075<SeP>1545<SeP>1738<SeP>1541<SeP>1601<SeP>1756<SeP>1687<SeP>1683<SeP>1836<SeP>1724<SeP>1736<SeP>3079<SeP>1270<SeP>1893<SeP>1876<SeP>1832<SeP>2119<SeP>1946<SeP>3297<SeP>1382<SeP>1457<SeP>1490<SeP>1448<SeP>1932<SeP>1484<SeP>1228<SeP>1279<SeP>1453<SeP>1407<SeP>2030<SeP>1135<SeP>1207<SeP>1220<SeP>6333<SeP>3094<SeP>1360<SeP>1303<SeP>1736<SeP>1956<SeP>1104<SeP>5736<SeP>2380<SeP>1711<SeP>967<SeP>1053<SeP>3266<SeP>1222<SeP>1088<SeP>957<SeP>1111<SeP>999<SeP>3060<SeP>895<SeP>1196<SeP>2937<SeP>4488<SeP>3726<SeP>922<SeP>911<SeP>958<SeP>927<SeP>1013<SeP>817<SeP>1151<SeP>2827<SeP>2945<SeP>1579<SeP>1721<SeP>758<SeP>666<SeP>1416<SeP>1277<SeP>1109<SeP>957<SeP>2282<SeP>1044<SeP>1192<SeP>1080<SeP>890<SeP>1173<SeP>654<SeP>856<SeP>866<SeP>783<SeP>1114<SeP>847<SeP>921<SeP>691<SeP>868<SeP>841<SeP>847<SeP>686<SeP>849<SeP>836<SeP>906<SeP>881<SeP>844<SeP>781<SeP>771<SeP>945<SeP>861<SeP>808<SeP>893<SeP>883<SeP>906<SeP>1123<SeP>954<SeP>604<SeP>708<SeP>935<SeP>828<SeP>1280<SeP>872<SeP>1070<SeP>1118<SeP>1226<SeP>917<SeP>825<SeP>951<SeP>912<SeP>772<SeP>1096<SeP>902<SeP>943<SeP>903<SeP>972<SeP>985<SeP>1046<SeP>1006<SeP>1002<SeP>1006<SeP>920<SeP>993<SeP>1776<SeP>1427<SeP>1231<SeP>997<SeP>1019<SeP>1159<SeP>991<SeP>939<SeP>774<SeP>677<SeP>991<SeP>1064<SeP>849<SeP>1043<SeP>1217<SeP>1137<SeP>1138<SeP>1268<SeP>1056<SeP>1366<SeP>1106<SeP>1470<SeP>1196<SeP>1518<SeP>2079<SeP>1222<SeP>913<SeP>900<SeP>1091<SeP>1034<SeP>833<SeP>663<SeP>832<SeP>971<SeP>808<SeP>3699<SeP>4397<SeP>2136<SeP>1675<SeP>1157<SeP>815<SeP>1020<SeP>894<SeP>919<SeP>1014<SeP>1084<SeP>1026<SeP>1019<SeP>2135<SeP>1374<SeP>1040<SeP>1209<SeP>1192<SeP>1233<SeP>1077<SeP>973<SeP>1026<SeP>1080<SeP>1084<SeP>1053<SeP>1094<SeP>947<SeP>1081<SeP>847<SeP>1382<SeP>1118<SeP>1106<SeP>1203<SeP>1213<SeP>1349<SeP>1480<SeP>1171<SeP>1147<SeP>1089<SeP>1220<SeP>1752<SeP>1469<SeP>1364<SeP>1984<SeP>1517<SeP>1507<SeP>1923<SeP>1365<SeP>1189<SeP>1114<SeP>1295<SeP>1247<SeP>1470<SeP>1197<SeP>1269<SeP>1681<SeP>1654<SeP>1382<SeP>1429<SeP>1455<SeP>1189<SeP>1075<SeP>1087<SeP>1349<SeP>1103<SeP>1222<SeP>1280<SeP>1157<SeP>1497<SeP>1837<SeP>1317<SeP>1210<SeP>1625<SeP>1401<SeP>1116<SeP>1088<SeP>985<SeP>772<SeP>897<SeP>1020<SeP>996<SeP>1807<SeP>1050<SeP>1126<SeP>1143<SeP>782<SeP>1018<SeP>900<SeP>1394<SeP>835<SeP>868<SeP>1142<SeP>1226<SeP>1585<SeP>1414<SeP>1028<SeP>1051<SeP>1069<SeP>1749<SeP>1128<SeP>1103<SeP>1002<SeP>1295<SeP>1330<SeP>910<SeP>1003<SeP>1194<SeP>1011<SeP>950<SeP>808<SeP>1094<SeP>1521<SeP>1443<SeP>1615<SeP>1356<SeP>1066<SeP>993<SeP>1106<SeP>1210<SeP>1132<SeP>1163<SeP>972<SeP>1039<SeP>1121<SeP>1530<SeP>1313<SeP>1469<SeP>1326<SeP>1470<SeP>1526<SeP>1403<SeP>1246<SeP>1469<SeP>1501<SeP>1408<SeP>1347<SeP>1452<SeP>1671<SeP>1472<SeP>1323<SeP>1336<SeP>1395<SeP>1276<SeP>1238<SeP>1352<SeP>1557<SeP>1518<SeP>1162<SeP>1303<SeP>1232<SeP>1378<SeP>1313<SeP>1152<SeP>1387<SeP>1909<SeP>1594<SeP>1221<SeP>613<SeP>1489<SeP>1811<SeP>1252<SeP>1317<SeP>1212<SeP>1098<SeP>1459<SeP>1290<SeP>1288<SeP>1476<SeP>1724<SeP>1334<SeP>1567<SeP>1674<SeP>1310<SeP>1399<SeP>1488<SeP>1571<SeP>1716<SeP>983<SeP>1191<SeP>1872<SeP>1710<SeP>1791<SeP>1762<SeP>1744<SeP>1562<SeP>1614<SeP>1470<SeP>1559<SeP>1488";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "152<SeP>614<SeP>973<SeP>717<SeP>538<SeP>222<SeP>6966<SeP>506<SeP>9183<SeP>976<SeP>328<SeP>1192<SeP>836<SeP>678<SeP>150<SeP>471<SeP>115<SeP>763<SeP>278<SeP>3945<SeP>7185<SeP>7316<SeP>6990<SeP>7854<SeP>405<SeP>318<SeP>345<SeP>218<SeP>400<SeP>5870<SeP>71<SeP>384<SeP>279<SeP>404<SeP>1454<SeP>9745<SeP>8715<SeP>10158<SeP>10244<SeP>5266<SeP>5883<SeP>8564<SeP>7667<SeP>9200<SeP>7809<SeP>7319<SeP>9142<SeP>7944<SeP>8578<SeP>8468<SeP>5734<SeP>5907<SeP>12537<SeP>6712<SeP>7008<SeP>8219<SeP>9522<SeP>17167<SeP>17907<SeP>8385<SeP>9230<SeP>9705<SeP>7190<SeP>8400<SeP>7630<SeP>9077<SeP>8423<SeP>6072<SeP>6526<SeP>6895<SeP>6508<SeP>2501<SeP>6006<SeP>5837<SeP>6826<SeP>5986<SeP>8408<SeP>3157<SeP>6116<SeP>5507<SeP>6490<SeP>5844<SeP>6514<SeP>3888<SeP>7207<SeP>5048<SeP>5746<SeP>5614<SeP>6372<SeP>21496<SeP>11726<SeP>33963<SeP>7627<SeP>7641<SeP>7365<SeP>11248<SeP>6916<SeP>4807<SeP>6489<SeP>3792<SeP>5287<SeP>6223<SeP>4923<SeP>8907<SeP>5067<SeP>6766<SeP>4982<SeP>5337<SeP>8331<SeP>8052<SeP>7454<SeP>6455<SeP>3998<SeP>9262<SeP>9911<SeP>6168<SeP>3169<SeP>5750<SeP>7711<SeP>6283<SeP>6592<SeP>8451<SeP>7423<SeP>1343<SeP>2789<SeP>991<SeP>1869<SeP>2705<SeP>1283<SeP>887<SeP>1157<SeP>1109<SeP>1342<SeP>1130<SeP>1209<SeP>1172<SeP>744<SeP>1237<SeP>1069<SeP>1143<SeP>1414<SeP>1018<SeP>1762<SeP>2086<SeP>1858<SeP>12175<SeP>6125<SeP>10332<SeP>7287<SeP>5548<SeP>10723<SeP>9064<SeP>8036<SeP>9333<SeP>11327<SeP>10310<SeP>9372<SeP>10890<SeP>14208<SeP>7077<SeP>10356<SeP>4860<SeP>5629<SeP>7219<SeP>24756<SeP>6214<SeP>8351<SeP>9584<SeP>16766<SeP>7671<SeP>7619<SeP>6526<SeP>6480<SeP>8012<SeP>25137<SeP>7909<SeP>10176<SeP>6790<SeP>6069<SeP>5838<SeP>6690<SeP>14924<SeP>5931<SeP>13351<SeP>7887<SeP>6098<SeP>8685<SeP>5715<SeP>4049<SeP>6031<SeP>7871<SeP>4811<SeP>7064<SeP>7035<SeP>5255<SeP>21061<SeP>6681<SeP>6019<SeP>6216<SeP>8150<SeP>10316<SeP>6975<SeP>4242<SeP>4274<SeP>6797<SeP>2862<SeP>4686<SeP>4131<SeP>659<SeP>104<SeP>641<SeP>214<SeP>628<SeP>1012<SeP>357<SeP>530<SeP>960<SeP>1454<SeP>3193<SeP>10371<SeP>13122<SeP>1960<SeP>4354<SeP>2896<SeP>3582<SeP>6361<SeP>4529<SeP>2727<SeP>3585<SeP>2656<SeP>3073<SeP>3205<SeP>4585<SeP>1641<SeP>3512<SeP>1863<SeP>1955<SeP>1925<SeP>1851<SeP>1152<SeP>1913<SeP>843<SeP>861<SeP>2006<SeP>26519<SeP>1480<SeP>3552<SeP>3396<SeP>2789<SeP>2777<SeP>3767<SeP>1585<SeP>3718<SeP>2572<SeP>3281<SeP>2444<SeP>2976<SeP>2835<SeP>3303<SeP>6686<SeP>4768<SeP>3628<SeP>3727<SeP>2907<SeP>3136<SeP>4078<SeP>4472<SeP>9926<SeP>5150<SeP>2478<SeP>2973<SeP>2280<SeP>4311<SeP>4069<SeP>3481<SeP>3083<SeP>2460<SeP>5890<SeP>3338<SeP>6157<SeP>3311<SeP>5847<SeP>4669<SeP>6618<SeP>3596<SeP>17802<SeP>10251<SeP>12517<SeP>1726<SeP>2288<SeP>4887<SeP>3389<SeP>3860<SeP>3929<SeP>5019<SeP>3933<SeP>4562<SeP>4249<SeP>3515<SeP>3289<SeP>1288<SeP>1896<SeP>2193<SeP>3467<SeP>2346<SeP>3823<SeP>3740<SeP>4328<SeP>3445<SeP>3035<SeP>4273<SeP>3406<SeP>3192<SeP>6440<SeP>7866<SeP>5769<SeP>4647<SeP>4656<SeP>4367<SeP>3784<SeP>3963<SeP>3942<SeP>6810<SeP>5218<SeP>4147<SeP>3486<SeP>930<SeP>1107<SeP>1931<SeP>1348<SeP>1237<SeP>1690<SeP>1556<SeP>1061<SeP>3050<SeP>3937<SeP>6583<SeP>20924<SeP>17677<SeP>5588<SeP>12555<SeP>15073<SeP>5587<SeP>5560<SeP>5163<SeP>10584<SeP>18397<SeP>5661<SeP>4782<SeP>4390<SeP>5945<SeP>18927<SeP>16239<SeP>4539<SeP>3095<SeP>4405<SeP>5456<SeP>5603<SeP>3045<SeP>3089<SeP>3935<SeP>4978<SeP>5337<SeP>3489<SeP>17734<SeP>6130<SeP>6369<SeP>4264<SeP>2219<SeP>3506<SeP>4584<SeP>3578<SeP>4237<SeP>2703<SeP>3834<SeP>2494<SeP>4194<SeP>3677<SeP>7248<SeP>9386<SeP>9128<SeP>8589<SeP>8724<SeP>7323<SeP>6697<SeP>5103<SeP>4730<SeP>9484<SeP>19891<SeP>3250<SeP>4315<SeP>3105<SeP>11470<SeP>5073<SeP>4194<SeP>4414<SeP>4438<SeP>3393<SeP>5906<SeP>10096";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:40:57<SeP>2023-07-28 21:21:54<SeP>2023-07-30 08:02:51<SeP>2023-07-31 18:43:48<SeP>2023-08-02 05:24:45<SeP>2023-08-03 16:05:42<SeP>2023-08-05 02:46:39<SeP>2023-08-06 13:27:36<SeP>2023-08-08 00:08:33<SeP>2023-08-09 10:49:30<SeP>2023-08-10 21:30:27<SeP>2023-08-12 08:11:24<SeP>2023-08-13 18:52:21<SeP>2023-08-15 05:33:18<SeP>2023-08-16 16:14:15<SeP>2023-08-18 02:55:12<SeP>2023-08-19 13:36:09<SeP>2023-08-21 00:17:06<SeP>2023-08-22 10:58:03<SeP>2023-08-23 21:39:00<SeP>2023-08-25 08:19:57<SeP>2023-08-26 19:00:54<SeP>2023-08-28 05:41:51<SeP>2023-08-29 16:22:48<SeP>2023-08-31 03:03:45<SeP>2023-09-01 13:44:42<SeP>2023-09-03 00:25:39<SeP>2023-09-04 11:06:36<SeP>2023-09-05 21:47:33<SeP>2023-09-07 08:28:30<SeP>2023-09-08 19:09:27<SeP>2023-09-10 05:50:24<SeP>2023-09-11 16:31:21<SeP>2023-09-13 03:12:18<SeP>2023-09-14 13:53:15<SeP>2023-09-16 00:34:12<SeP>2023-09-17 11:15:09<SeP>2023-09-18 21:56:06<SeP>2023-09-20 08:37:03<SeP>2023-09-21 19:18:00<SeP>2023-09-23 05:58:57<SeP>2023-09-24 16:39:54<SeP>2023-09-26 03:20:51<SeP>2023-09-27 14:01:48<SeP>2023-09-29 00:42:45<SeP>2023-09-30 11:23:42<SeP>2023-10-01 22:04:39<SeP>2023-10-03 08:45:36<SeP>2023-10-04 19:26:33<SeP>2023-10-06 06:07:30<SeP>2023-10-07 16:48:27<SeP>2023-10-09 03:29:24<SeP>2023-10-10 14:10:21<SeP>2023-10-12 00:51:18<SeP>2023-10-13 11:32:15<SeP>2023-10-14 22:13:12<SeP>2023-10-16 08:54:09<SeP>2023-10-17 19:35:06<SeP>2023-10-19 06:16:03<SeP>2023-10-20 16:57:00<SeP>2023-10-22 03:37:57<SeP>2023-10-23 14:18:54<SeP>2023-10-25 00:59:51<SeP>2023-10-26 11:40:48<SeP>2023-10-27 22:21:45<SeP>2023-10-29 09:02:42<SeP>2023-10-30 19:43:39<SeP>2023-11-01 06:24:36<SeP>2023-11-02 17:05:33<SeP>2023-11-04 03:46:30<SeP>2023-11-05 13:27:27<SeP>2023-11-07 00:08:24<SeP>2023-11-08 10:49:21<SeP>2023-11-09 21:30:18<SeP>2023-11-11 08:11:15<SeP>2023-11-12 18:52:12<SeP>2023-11-14 05:33:09<SeP>2023-11-15 16:14:06<SeP>2023-11-17 02:55:03<SeP>2023-11-18 13:36:00<SeP>2023-11-20 00:16:57<SeP>2023-11-21 10:57:54<SeP>2023-11-22 21:38:51<SeP>2023-11-24 08:19:48<SeP>2023-11-25 19:00:45<SeP>2023-11-27 05:41:42<SeP>2023-11-28 16:22:39<SeP>2023-11-30 03:03:36<SeP>2023-12-01 13:44:33<SeP>2023-12-03 00:25:30<SeP>2023-12-04 11:06:27<SeP>2023-12-05 21:47:24<SeP>2023-12-07 08:28:21<SeP>2023-12-08 19:09:18<SeP>2023-12-10 05:50:15<SeP>2023-12-11 16:31:12<SeP>2023-12-13 03:12:09<SeP>2023-12-14 13:53:06<SeP>2023-12-16 00:34:03<SeP>2023-12-17 11:15:00<SeP>2023-12-18 21:55:57<SeP>2023-12-20 08:36:54<SeP>2023-12-21 19:17:51<SeP>2023-12-23 05:58:48<SeP>2023-12-24 16:39:45<SeP>2023-12-26 03:20:42<SeP>2023-12-27 14:01:39<SeP>2023-12-29 00:42:36<SeP>2023-12-30 11:23:33<SeP>2023-12-31 22:04:30<SeP>2024-01-02 08:45:27<SeP>2024-01-03 19:26:24<SeP>2024-01-05 06:07:21<SeP>2024-01-06 16:48:18<SeP>2024-01-08 03:29:15<SeP>2024-01-09 14:10:12<SeP>2024-01-11 00:51:09<SeP>2024-01-12 11:32:06<SeP>2024-01-13 22:13:03<SeP>2024-01-15 08:54:00<SeP>2024-01-16 19:34:57<SeP>2024-01-18 06:15:54<SeP>2024-01-19 16:56:51<SeP>2024-01-21 03:37:48<SeP>2024-01-22 14:18:45<SeP>2024-01-24 00:59:42<SeP>2024-01-25 11:40:39<SeP>2024-01-26 22:21:36<SeP>2024-01-28 09:02:33<SeP>2024-01-29 19:43:30<SeP>2024-01-31 06:24:27<SeP>2024-02-01 17:05:24<SeP>2024-02-03 03:46:21<SeP>2024-02-04 14:27:18<SeP>2024-02-06 01:08:15<SeP>2024-02-07 11:49:12<SeP>2024-02-08 22:30:09<SeP>2024-02-10 09:11:06<SeP>2024-02-11 19:52:03<SeP>2024-02-13 06:33:00<SeP>2024-02-14 17:13:57<SeP>2024-02-16 03:54:54<SeP>2024-02-17 14:35:51<SeP>2024-02-19 01:16:48<SeP>2024-02-20 11:57:45<SeP>2024-02-21 22:38:42<SeP>2024-02-23 09:19:39<SeP>2024-02-24 20:00:36<SeP>2024-02-26 06:41:33<SeP>2024-02-27 17:22:30<SeP>2024-02-29 04:03:27<SeP>2024-03-01 14:44:24<SeP>2024-03-03 01:25:21<SeP>2024-03-04 12:06:18<SeP>2024-03-05 22:47:15<SeP>2024-03-07 09:28:12<SeP>2024-03-08 20:09:09<SeP>2024-03-10 07:50:06<SeP>2024-03-11 18:31:03<SeP>2024-03-13 05:12:00<SeP>2024-03-14 15:52:57<SeP>2024-03-16 02:33:54<SeP>2024-03-17 13:14:51<SeP>2024-03-18 23:55:48<SeP>2024-03-20 10:36:45<SeP>2024-03-21 21:17:42<SeP>2024-03-23 07:58:39<SeP>2024-03-24 18:39:36<SeP>2024-03-26 05:20:33<SeP>2024-03-27 16:01:30<SeP>2024-03-29 02:42:27<SeP>2024-03-30 13:23:24<SeP>2024-04-01 00:04:21<SeP>2024-04-02 10:45:18<SeP>2024-04-03 21:26:15<SeP>2024-04-05 08:07:12<SeP>2024-04-06 18:48:09<SeP>2024-04-08 05:29:06<SeP>2024-04-09 16:10:03<SeP>2024-04-11 02:51:00<SeP>2024-04-12 13:31:57<SeP>2024-04-14 00:12:54<SeP>2024-04-15 10:53:51<SeP>2024-04-16 21:34:48<SeP>2024-04-18 08:15:45<SeP>2024-04-19 18:56:42<SeP>2024-04-21 05:37:39<SeP>2024-04-22 16:18:36<SeP>2024-04-24 02:59:33<SeP>2024-04-25 13:40:30<SeP>2024-04-27 00:21:27<SeP>2024-04-28 11:02:24<SeP>2024-04-29 21:43:21<SeP>2024-05-01 08:24:18<SeP>2024-05-02 19:05:15<SeP>2024-05-04 05:46:12<SeP>2024-05-05 16:27:09<SeP>2024-05-07 03:08:06<SeP>2024-05-08 13:49:03<SeP>2024-05-10 00:30:00<SeP>2024-05-11 11:10:57<SeP>2024-05-12 21:51:54<SeP>2024-05-14 08:32:51<SeP>2024-05-15 19:13:48<SeP>2024-05-17 05:54:45<SeP>2024-05-18 16:35:42<SeP>2024-05-20 03:16:39<SeP>2024-05-21 13:57:36<SeP>2024-05-23 00:38:33<SeP>2024-05-24 11:19:30<SeP>2024-05-25 22:00:27<SeP>2024-05-27 08:41:24<SeP>2024-05-28 19:22:21<SeP>2024-05-30 06:03:18<SeP>2024-05-31 16:44:15<SeP>2024-06-02 03:25:12<SeP>2024-06-03 14:06:09<SeP>2024-06-05 00:47:06<SeP>2024-06-06 11:28:03<SeP>2024-06-07 22:09:00<SeP>2024-06-09 08:49:57<SeP>2024-06-10 19:30:54<SeP>2024-06-12 06:11:51<SeP>2024-06-13 16:52:48<SeP>2024-06-15 03:33:45<SeP>2024-06-16 14:14:42<SeP>2024-06-18 00:55:39<SeP>2024-06-19 11:36:36<SeP>2024-06-20 22:17:33<SeP>2024-06-22 08:58:30<SeP>2024-06-23 19:39:27<SeP>2024-06-25 06:20:24<SeP>2024-06-26 17:01:21<SeP>2024-06-28 03:42:18<SeP>2024-06-29 14:23:15<SeP>2024-07-01 01:04:12<SeP>2024-07-02 11:45:09<SeP>2024-07-03 22:26:06<SeP>2024-07-05 09:07:03<SeP>2024-07-06 19:48:00<SeP>2024-07-08 06:28:57<SeP>2024-07-09 17:09:54<SeP>2024-07-11 03:50:51<SeP>2024-07-12 14:31:48<SeP>2024-07-14 01:12:45<SeP>2024-07-15 11:53:42<SeP>2024-07-16 22:34:39<SeP>2024-07-18 09:15:36<SeP>2024-07-19 19:56:33<SeP>2024-07-21 06:37:30<SeP>2024-07-22 17:18:27<SeP>2024-07-24 03:59:24<SeP>2024-07-25 14:40:21<SeP>2024-07-27 01:21:18<SeP>2024-07-28 12:02:15<SeP>2024-07-29 22:43:12<SeP>2024-07-31 09:24:09<SeP>2024-08-01 20:05:06<SeP>2024-08-03 06:46:03<SeP>2024-08-04 17:27:00<SeP>2024-08-06 04:07:57<SeP>2024-08-07 14:48:54<SeP>2024-08-09 01:29:51<SeP>2024-08-10 12:10:48<SeP>2024-08-11 22:51:45<SeP>2024-08-13 09:32:42<SeP>2024-08-14 20:13:39<SeP>2024-08-16 06:54:36<SeP>2024-08-17 17:35:33<SeP>2024-08-19 04:16:30<SeP>2024-08-20 14:57:27<SeP>2024-08-22 01:38:24<SeP>2024-08-23 12:19:21<SeP>2024-08-24 23:00:18<SeP>2024-08-26 09:41:15<SeP>2024-08-27 20:22:12<SeP>2024-08-29 07:03:09<SeP>2024-08-30 17:44:06<SeP>2024-09-01 04:25:03<SeP>2024-09-02 15:06:00<SeP>2024-09-04 01:46:57<SeP>2024-09-05 12:27:54<SeP>2024-09-06 23:08:51<SeP>2024-09-08 09:49:48<SeP>2024-09-09 20:30:45<SeP>2024-09-11 07:11:42<SeP>2024-09-12 17:52:39<SeP>2024-09-14 04:33:36<SeP>2024-09-15 15:14:33<SeP>2024-09-17 01:55:30<SeP>2024-09-18 12:36:27<SeP>2024-09-19 23:17:24<SeP>2024-09-21 09:58:21<SeP>2024-09-22 20:39:18<SeP>2024-09-24 07:20:15<SeP>2024-09-25 18:01:12<SeP>2024-09-27 04:42:09<SeP>2024-09-28 15:23:06<SeP>2024-09-30 02:04:03<SeP>2024-10-01 12:45:00<SeP>2024-10-02 23:25:57<SeP>2024-10-04 10:06:54<SeP>2024-10-05 20:47:51<SeP>2024-10-07 07:28:48<SeP>2024-10-08 18:09:45<SeP>2024-10-10 04:50:42<SeP>2024-10-11 15:31:39<SeP>2024-10-13 02:12:36<SeP>2024-10-14 12:53:33<SeP>2024-10-15 23:34:30<SeP>2024-10-17 10:15:27<SeP>2024-10-18 20:56:24<SeP>2024-10-20 07:37:21<SeP>2024-10-21 18:18:18<SeP>2024-10-23 04:59:15<SeP>2024-10-24 15:40:12<SeP>2024-10-26 02:21:09<SeP>2024-10-27 13:02:06<SeP>2024-10-28 23:43:03<SeP>2024-10-30 10:24:00<SeP>2024-10-31 21:04:57<SeP>2024-11-02 07:45:54<SeP>2024-11-03 17:26:51<SeP>2024-11-05 04:07:48<SeP>2024-11-06 14:48:45<SeP>2024-11-08 01:29:42<SeP>2024-11-09 12:10:39<SeP>2024-11-10 22:51:36<SeP>2024-11-12 09:32:33<SeP>2024-11-13 20:13:30<SeP>2024-11-15 06:54:27<SeP>2024-11-16 17:35:24<SeP>2024-11-18 04:16:21<SeP>2024-11-19 14:57:18<SeP>2024-11-21 01:38:15<SeP>2024-11-22 12:19:12<SeP>2024-11-23 23:00:09<SeP>2024-11-25 09:41:06<SeP>2024-11-26 20:22:03<SeP>2024-11-28 07:03:00<SeP>2024-11-29 17:43:57<SeP>2024-12-01 04:24:54<SeP>2024-12-02 15:05:51<SeP>2024-12-04 01:46:48<SeP>2024-12-05 12:27:45<SeP>2024-12-06 23:08:42<SeP>2024-12-08 09:49:39<SeP>2024-12-09 20:30:36<SeP>2024-12-11 07:11:33<SeP>2024-12-12 17:52:30<SeP>2024-12-14 04:33:27<SeP>2024-12-15 15:14:24<SeP>2024-12-17 01:55:21<SeP>2024-12-18 12:36:18<SeP>2024-12-19 23:17:15<SeP>2024-12-21 09:58:12<SeP>2024-12-22 20:39:09<SeP>2024-12-24 07:20:06<SeP>2024-12-25 18:01:03<SeP>2024-12-27 04:42:00<SeP>2024-12-28 15:22:57<SeP>2024-12-30 02:03:54<SeP>2024-12-31 12:44:51<SeP>2025-01-01 23:25:48<SeP>2025-01-03 10:06:45<SeP>2025-01-04 20:47:42<SeP>2025-01-06 07:28:39<SeP>2025-01-07 18:09:36<SeP>2025-01-09 04:50:33<SeP>2025-01-10 15:31:30<SeP>2025-01-12 02:12:27<SeP>2025-01-13 12:53:24<SeP>2025-01-14 23:34:21<SeP>2025-01-16 10:15:18<SeP>2025-01-17 20:56:15<SeP>2025-01-19 07:37:12<SeP>2025-01-20 18:18:09<SeP>2025-01-22 04:59:06<SeP>2025-01-23 15:40:03<SeP>2025-01-25 02:21:00<SeP>2025-01-26 13:01:57<SeP>2025-01-27 23:42:54<SeP>2025-01-29 10:23:51<SeP>2025-01-30 21:04:48<SeP>2025-02-01 07:45:45<SeP>2025-02-02 18:26:42<SeP>2025-02-04 05:07:39<SeP>2025-02-05 15:48:36<SeP>2025-02-07 02:29:33<SeP>2025-02-08 13:10:30<SeP>2025-02-09 23:51:27<SeP>2025-02-11 10:32:24<SeP>2025-02-12 21:13:21<SeP>2025-02-14 07:54:18<SeP>2025-02-15 18:35:15<SeP>2025-02-17 05:16:12<SeP>2025-02-18 15:57:09<SeP>2025-02-20 02:38:06<SeP>2025-02-21 13:19:03";
  const itemLabel       = "Scans";
  const itemData        = "760<SeP>1462<SeP>1379<SeP>1442<SeP>1250<SeP>1677<SeP>952<SeP>978<SeP>1104<SeP>3353<SeP>1607<SeP>2702<SeP>1989<SeP>2350<SeP>751<SeP>858<SeP>1407<SeP>1954<SeP>1973<SeP>1668<SeP>1454<SeP>936<SeP>843<SeP>1446<SeP>789<SeP>992<SeP>758<SeP>935<SeP>3539<SeP>931<SeP>840<SeP>1390<SeP>1253<SeP>799<SeP>2659<SeP>1575<SeP>2847<SeP>1855<SeP>1841<SeP>1253<SeP>1282<SeP>1728<SeP>1847<SeP>2075<SeP>1545<SeP>1738<SeP>1541<SeP>1601<SeP>1756<SeP>1687<SeP>1683<SeP>1836<SeP>1724<SeP>1736<SeP>3079<SeP>1270<SeP>1893<SeP>1876<SeP>1832<SeP>2119<SeP>1946<SeP>3297<SeP>1382<SeP>1457<SeP>1490<SeP>1448<SeP>1932<SeP>1484<SeP>1228<SeP>1279<SeP>1453<SeP>1407<SeP>2030<SeP>1135<SeP>1207<SeP>1220<SeP>6333<SeP>3094<SeP>1360<SeP>1303<SeP>1736<SeP>1956<SeP>1104<SeP>5736<SeP>2380<SeP>1711<SeP>967<SeP>1053<SeP>3266<SeP>1222<SeP>1088<SeP>957<SeP>1111<SeP>999<SeP>3060<SeP>895<SeP>1196<SeP>2937<SeP>4488<SeP>3726<SeP>922<SeP>911<SeP>958<SeP>927<SeP>1013<SeP>817<SeP>1151<SeP>2827<SeP>2945<SeP>1579<SeP>1721<SeP>758<SeP>666<SeP>1416<SeP>1277<SeP>1109<SeP>957<SeP>2282<SeP>1044<SeP>1192<SeP>1080<SeP>890<SeP>1173<SeP>654<SeP>856<SeP>866<SeP>783<SeP>1114<SeP>847<SeP>921<SeP>691<SeP>868<SeP>841<SeP>847<SeP>686<SeP>849<SeP>836<SeP>906<SeP>881<SeP>844<SeP>781<SeP>771<SeP>945<SeP>861<SeP>808<SeP>893<SeP>883<SeP>906<SeP>1123<SeP>954<SeP>604<SeP>708<SeP>935<SeP>828<SeP>1280<SeP>872<SeP>1070<SeP>1118<SeP>1226<SeP>917<SeP>825<SeP>951<SeP>912<SeP>772<SeP>1096<SeP>902<SeP>943<SeP>903<SeP>972<SeP>985<SeP>1046<SeP>1006<SeP>1002<SeP>1006<SeP>920<SeP>993<SeP>1776<SeP>1427<SeP>1231<SeP>997<SeP>1019<SeP>1159<SeP>991<SeP>939<SeP>774<SeP>677<SeP>991<SeP>1064<SeP>849<SeP>1043<SeP>1217<SeP>1137<SeP>1138<SeP>1268<SeP>1056<SeP>1366<SeP>1106<SeP>1470<SeP>1196<SeP>1518<SeP>2079<SeP>1222<SeP>913<SeP>900<SeP>1091<SeP>1034<SeP>833<SeP>663<SeP>832<SeP>971<SeP>808<SeP>3699<SeP>4397<SeP>2136<SeP>1675<SeP>1157<SeP>815<SeP>1020<SeP>894<SeP>919<SeP>1014<SeP>1084<SeP>1026<SeP>1019<SeP>2135<SeP>1374<SeP>1040<SeP>1209<SeP>1192<SeP>1233<SeP>1077<SeP>973<SeP>1026<SeP>1080<SeP>1084<SeP>1053<SeP>1094<SeP>947<SeP>1081<SeP>847<SeP>1382<SeP>1118<SeP>1106<SeP>1203<SeP>1213<SeP>1349<SeP>1480<SeP>1171<SeP>1147<SeP>1089<SeP>1220<SeP>1752<SeP>1469<SeP>1364<SeP>1984<SeP>1517<SeP>1507<SeP>1923<SeP>1365<SeP>1189<SeP>1114<SeP>1295<SeP>1247<SeP>1470<SeP>1197<SeP>1269<SeP>1681<SeP>1654<SeP>1382<SeP>1429<SeP>1455<SeP>1189<SeP>1075<SeP>1087<SeP>1349<SeP>1103<SeP>1222<SeP>1280<SeP>1157<SeP>1497<SeP>1837<SeP>1317<SeP>1210<SeP>1625<SeP>1401<SeP>1116<SeP>1088<SeP>985<SeP>772<SeP>897<SeP>1020<SeP>996<SeP>1807<SeP>1050<SeP>1126<SeP>1143<SeP>782<SeP>1018<SeP>900<SeP>1394<SeP>835<SeP>868<SeP>1142<SeP>1226<SeP>1585<SeP>1414<SeP>1028<SeP>1051<SeP>1069<SeP>1749<SeP>1128<SeP>1103<SeP>1002<SeP>1295<SeP>1330<SeP>910<SeP>1003<SeP>1194<SeP>1011<SeP>950<SeP>808<SeP>1094<SeP>1521<SeP>1443<SeP>1615<SeP>1356<SeP>1066<SeP>993<SeP>1106<SeP>1210<SeP>1132<SeP>1163<SeP>972<SeP>1039<SeP>1121<SeP>1530<SeP>1313<SeP>1469<SeP>1326<SeP>1470<SeP>1526<SeP>1403<SeP>1246<SeP>1469<SeP>1501<SeP>1408<SeP>1347<SeP>1452<SeP>1671<SeP>1472<SeP>1323<SeP>1336<SeP>1395<SeP>1276<SeP>1238<SeP>1352<SeP>1557<SeP>1518<SeP>1162<SeP>1303<SeP>1232<SeP>1378<SeP>1313<SeP>1152<SeP>1387<SeP>1909<SeP>1594<SeP>1221<SeP>613<SeP>1489<SeP>1811<SeP>1252<SeP>1317<SeP>1212<SeP>1098<SeP>1459<SeP>1290<SeP>1288<SeP>1476<SeP>1724<SeP>1334<SeP>1567<SeP>1674<SeP>1310<SeP>1399<SeP>1488<SeP>1571<SeP>1716<SeP>983<SeP>1191<SeP>1872<SeP>1710<SeP>1791<SeP>1762<SeP>1744<SeP>1562<SeP>1614<SeP>1470<SeP>1559<SeP>1488";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:40:57<SeP>2023-07-28 21:21:54<SeP>2023-07-30 08:02:51<SeP>2023-07-31 18:43:48<SeP>2023-08-02 05:24:45<SeP>2023-08-03 16:05:42<SeP>2023-08-05 02:46:39<SeP>2023-08-06 13:27:36<SeP>2023-08-08 00:08:33<SeP>2023-08-09 10:49:30<SeP>2023-08-10 21:30:27<SeP>2023-08-12 08:11:24<SeP>2023-08-13 18:52:21<SeP>2023-08-15 05:33:18<SeP>2023-08-16 16:14:15<SeP>2023-08-18 02:55:12<SeP>2023-08-19 13:36:09<SeP>2023-08-21 00:17:06<SeP>2023-08-22 10:58:03<SeP>2023-08-23 21:39:00<SeP>2023-08-25 08:19:57<SeP>2023-08-26 19:00:54<SeP>2023-08-28 05:41:51<SeP>2023-08-29 16:22:48<SeP>2023-08-31 03:03:45<SeP>2023-09-01 13:44:42<SeP>2023-09-03 00:25:39<SeP>2023-09-04 11:06:36<SeP>2023-09-05 21:47:33<SeP>2023-09-07 08:28:30<SeP>2023-09-08 19:09:27<SeP>2023-09-10 05:50:24<SeP>2023-09-11 16:31:21<SeP>2023-09-13 03:12:18<SeP>2023-09-14 13:53:15<SeP>2023-09-16 00:34:12<SeP>2023-09-17 11:15:09<SeP>2023-09-18 21:56:06<SeP>2023-09-20 08:37:03<SeP>2023-09-21 19:18:00<SeP>2023-09-23 05:58:57<SeP>2023-09-24 16:39:54<SeP>2023-09-26 03:20:51<SeP>2023-09-27 14:01:48<SeP>2023-09-29 00:42:45<SeP>2023-09-30 11:23:42<SeP>2023-10-01 22:04:39<SeP>2023-10-03 08:45:36<SeP>2023-10-04 19:26:33<SeP>2023-10-06 06:07:30<SeP>2023-10-07 16:48:27<SeP>2023-10-09 03:29:24<SeP>2023-10-10 14:10:21<SeP>2023-10-12 00:51:18<SeP>2023-10-13 11:32:15<SeP>2023-10-14 22:13:12<SeP>2023-10-16 08:54:09<SeP>2023-10-17 19:35:06<SeP>2023-10-19 06:16:03<SeP>2023-10-20 16:57:00<SeP>2023-10-22 03:37:57<SeP>2023-10-23 14:18:54<SeP>2023-10-25 00:59:51<SeP>2023-10-26 11:40:48<SeP>2023-10-27 22:21:45<SeP>2023-10-29 09:02:42<SeP>2023-10-30 19:43:39<SeP>2023-11-01 06:24:36<SeP>2023-11-02 17:05:33<SeP>2023-11-04 03:46:30<SeP>2023-11-05 13:27:27<SeP>2023-11-07 00:08:24<SeP>2023-11-08 10:49:21<SeP>2023-11-09 21:30:18<SeP>2023-11-11 08:11:15<SeP>2023-11-12 18:52:12<SeP>2023-11-14 05:33:09<SeP>2023-11-15 16:14:06<SeP>2023-11-17 02:55:03<SeP>2023-11-18 13:36:00<SeP>2023-11-20 00:16:57<SeP>2023-11-21 10:57:54<SeP>2023-11-22 21:38:51<SeP>2023-11-24 08:19:48<SeP>2023-11-25 19:00:45<SeP>2023-11-27 05:41:42<SeP>2023-11-28 16:22:39<SeP>2023-11-30 03:03:36<SeP>2023-12-01 13:44:33<SeP>2023-12-03 00:25:30<SeP>2023-12-04 11:06:27<SeP>2023-12-05 21:47:24<SeP>2023-12-07 08:28:21<SeP>2023-12-08 19:09:18<SeP>2023-12-10 05:50:15<SeP>2023-12-11 16:31:12<SeP>2023-12-13 03:12:09<SeP>2023-12-14 13:53:06<SeP>2023-12-16 00:34:03<SeP>2023-12-17 11:15:00<SeP>2023-12-18 21:55:57<SeP>2023-12-20 08:36:54<SeP>2023-12-21 19:17:51<SeP>2023-12-23 05:58:48<SeP>2023-12-24 16:39:45<SeP>2023-12-26 03:20:42<SeP>2023-12-27 14:01:39<SeP>2023-12-29 00:42:36<SeP>2023-12-30 11:23:33<SeP>2023-12-31 22:04:30<SeP>2024-01-02 08:45:27<SeP>2024-01-03 19:26:24<SeP>2024-01-05 06:07:21<SeP>2024-01-06 16:48:18<SeP>2024-01-08 03:29:15<SeP>2024-01-09 14:10:12<SeP>2024-01-11 00:51:09<SeP>2024-01-12 11:32:06<SeP>2024-01-13 22:13:03<SeP>2024-01-15 08:54:00<SeP>2024-01-16 19:34:57<SeP>2024-01-18 06:15:54<SeP>2024-01-19 16:56:51<SeP>2024-01-21 03:37:48<SeP>2024-01-22 14:18:45<SeP>2024-01-24 00:59:42<SeP>2024-01-25 11:40:39<SeP>2024-01-26 22:21:36<SeP>2024-01-28 09:02:33<SeP>2024-01-29 19:43:30<SeP>2024-01-31 06:24:27<SeP>2024-02-01 17:05:24<SeP>2024-02-03 03:46:21<SeP>2024-02-04 14:27:18<SeP>2024-02-06 01:08:15<SeP>2024-02-07 11:49:12<SeP>2024-02-08 22:30:09<SeP>2024-02-10 09:11:06<SeP>2024-02-11 19:52:03<SeP>2024-02-13 06:33:00<SeP>2024-02-14 17:13:57<SeP>2024-02-16 03:54:54<SeP>2024-02-17 14:35:51<SeP>2024-02-19 01:16:48<SeP>2024-02-20 11:57:45<SeP>2024-02-21 22:38:42<SeP>2024-02-23 09:19:39<SeP>2024-02-24 20:00:36<SeP>2024-02-26 06:41:33<SeP>2024-02-27 17:22:30<SeP>2024-02-29 04:03:27<SeP>2024-03-01 14:44:24<SeP>2024-03-03 01:25:21<SeP>2024-03-04 12:06:18<SeP>2024-03-05 22:47:15<SeP>2024-03-07 09:28:12<SeP>2024-03-08 20:09:09<SeP>2024-03-10 07:50:06<SeP>2024-03-11 18:31:03<SeP>2024-03-13 05:12:00<SeP>2024-03-14 15:52:57<SeP>2024-03-16 02:33:54<SeP>2024-03-17 13:14:51<SeP>2024-03-18 23:55:48<SeP>2024-03-20 10:36:45<SeP>2024-03-21 21:17:42<SeP>2024-03-23 07:58:39<SeP>2024-03-24 18:39:36<SeP>2024-03-26 05:20:33<SeP>2024-03-27 16:01:30<SeP>2024-03-29 02:42:27<SeP>2024-03-30 13:23:24<SeP>2024-04-01 00:04:21<SeP>2024-04-02 10:45:18<SeP>2024-04-03 21:26:15<SeP>2024-04-05 08:07:12<SeP>2024-04-06 18:48:09<SeP>2024-04-08 05:29:06<SeP>2024-04-09 16:10:03<SeP>2024-04-11 02:51:00<SeP>2024-04-12 13:31:57<SeP>2024-04-14 00:12:54<SeP>2024-04-15 10:53:51<SeP>2024-04-16 21:34:48<SeP>2024-04-18 08:15:45<SeP>2024-04-19 18:56:42<SeP>2024-04-21 05:37:39<SeP>2024-04-22 16:18:36<SeP>2024-04-24 02:59:33<SeP>2024-04-25 13:40:30<SeP>2024-04-27 00:21:27<SeP>2024-04-28 11:02:24<SeP>2024-04-29 21:43:21<SeP>2024-05-01 08:24:18<SeP>2024-05-02 19:05:15<SeP>2024-05-04 05:46:12<SeP>2024-05-05 16:27:09<SeP>2024-05-07 03:08:06<SeP>2024-05-08 13:49:03<SeP>2024-05-10 00:30:00<SeP>2024-05-11 11:10:57<SeP>2024-05-12 21:51:54<SeP>2024-05-14 08:32:51<SeP>2024-05-15 19:13:48<SeP>2024-05-17 05:54:45<SeP>2024-05-18 16:35:42<SeP>2024-05-20 03:16:39<SeP>2024-05-21 13:57:36<SeP>2024-05-23 00:38:33<SeP>2024-05-24 11:19:30<SeP>2024-05-25 22:00:27<SeP>2024-05-27 08:41:24<SeP>2024-05-28 19:22:21<SeP>2024-05-30 06:03:18<SeP>2024-05-31 16:44:15<SeP>2024-06-02 03:25:12<SeP>2024-06-03 14:06:09<SeP>2024-06-05 00:47:06<SeP>2024-06-06 11:28:03<SeP>2024-06-07 22:09:00<SeP>2024-06-09 08:49:57<SeP>2024-06-10 19:30:54<SeP>2024-06-12 06:11:51<SeP>2024-06-13 16:52:48<SeP>2024-06-15 03:33:45<SeP>2024-06-16 14:14:42<SeP>2024-06-18 00:55:39<SeP>2024-06-19 11:36:36<SeP>2024-06-20 22:17:33<SeP>2024-06-22 08:58:30<SeP>2024-06-23 19:39:27<SeP>2024-06-25 06:20:24<SeP>2024-06-26 17:01:21<SeP>2024-06-28 03:42:18<SeP>2024-06-29 14:23:15<SeP>2024-07-01 01:04:12<SeP>2024-07-02 11:45:09<SeP>2024-07-03 22:26:06<SeP>2024-07-05 09:07:03<SeP>2024-07-06 19:48:00<SeP>2024-07-08 06:28:57<SeP>2024-07-09 17:09:54<SeP>2024-07-11 03:50:51<SeP>2024-07-12 14:31:48<SeP>2024-07-14 01:12:45<SeP>2024-07-15 11:53:42<SeP>2024-07-16 22:34:39<SeP>2024-07-18 09:15:36<SeP>2024-07-19 19:56:33<SeP>2024-07-21 06:37:30<SeP>2024-07-22 17:18:27<SeP>2024-07-24 03:59:24<SeP>2024-07-25 14:40:21<SeP>2024-07-27 01:21:18<SeP>2024-07-28 12:02:15<SeP>2024-07-29 22:43:12<SeP>2024-07-31 09:24:09<SeP>2024-08-01 20:05:06<SeP>2024-08-03 06:46:03<SeP>2024-08-04 17:27:00<SeP>2024-08-06 04:07:57<SeP>2024-08-07 14:48:54<SeP>2024-08-09 01:29:51<SeP>2024-08-10 12:10:48<SeP>2024-08-11 22:51:45<SeP>2024-08-13 09:32:42<SeP>2024-08-14 20:13:39<SeP>2024-08-16 06:54:36<SeP>2024-08-17 17:35:33<SeP>2024-08-19 04:16:30<SeP>2024-08-20 14:57:27<SeP>2024-08-22 01:38:24<SeP>2024-08-23 12:19:21<SeP>2024-08-24 23:00:18<SeP>2024-08-26 09:41:15<SeP>2024-08-27 20:22:12<SeP>2024-08-29 07:03:09<SeP>2024-08-30 17:44:06<SeP>2024-09-01 04:25:03<SeP>2024-09-02 15:06:00<SeP>2024-09-04 01:46:57<SeP>2024-09-05 12:27:54<SeP>2024-09-06 23:08:51<SeP>2024-09-08 09:49:48<SeP>2024-09-09 20:30:45<SeP>2024-09-11 07:11:42<SeP>2024-09-12 17:52:39<SeP>2024-09-14 04:33:36<SeP>2024-09-15 15:14:33<SeP>2024-09-17 01:55:30<SeP>2024-09-18 12:36:27<SeP>2024-09-19 23:17:24<SeP>2024-09-21 09:58:21<SeP>2024-09-22 20:39:18<SeP>2024-09-24 07:20:15<SeP>2024-09-25 18:01:12<SeP>2024-09-27 04:42:09<SeP>2024-09-28 15:23:06<SeP>2024-09-30 02:04:03<SeP>2024-10-01 12:45:00<SeP>2024-10-02 23:25:57<SeP>2024-10-04 10:06:54<SeP>2024-10-05 20:47:51<SeP>2024-10-07 07:28:48<SeP>2024-10-08 18:09:45<SeP>2024-10-10 04:50:42<SeP>2024-10-11 15:31:39<SeP>2024-10-13 02:12:36<SeP>2024-10-14 12:53:33<SeP>2024-10-15 23:34:30<SeP>2024-10-17 10:15:27<SeP>2024-10-18 20:56:24<SeP>2024-10-20 07:37:21<SeP>2024-10-21 18:18:18<SeP>2024-10-23 04:59:15<SeP>2024-10-24 15:40:12<SeP>2024-10-26 02:21:09<SeP>2024-10-27 13:02:06<SeP>2024-10-28 23:43:03<SeP>2024-10-30 10:24:00<SeP>2024-10-31 21:04:57<SeP>2024-11-02 07:45:54<SeP>2024-11-03 17:26:51<SeP>2024-11-05 04:07:48<SeP>2024-11-06 14:48:45<SeP>2024-11-08 01:29:42<SeP>2024-11-09 12:10:39<SeP>2024-11-10 22:51:36<SeP>2024-11-12 09:32:33<SeP>2024-11-13 20:13:30<SeP>2024-11-15 06:54:27<SeP>2024-11-16 17:35:24<SeP>2024-11-18 04:16:21<SeP>2024-11-19 14:57:18<SeP>2024-11-21 01:38:15<SeP>2024-11-22 12:19:12<SeP>2024-11-23 23:00:09<SeP>2024-11-25 09:41:06<SeP>2024-11-26 20:22:03<SeP>2024-11-28 07:03:00<SeP>2024-11-29 17:43:57<SeP>2024-12-01 04:24:54<SeP>2024-12-02 15:05:51<SeP>2024-12-04 01:46:48<SeP>2024-12-05 12:27:45<SeP>2024-12-06 23:08:42<SeP>2024-12-08 09:49:39<SeP>2024-12-09 20:30:36<SeP>2024-12-11 07:11:33<SeP>2024-12-12 17:52:30<SeP>2024-12-14 04:33:27<SeP>2024-12-15 15:14:24<SeP>2024-12-17 01:55:21<SeP>2024-12-18 12:36:18<SeP>2024-12-19 23:17:15<SeP>2024-12-21 09:58:12<SeP>2024-12-22 20:39:09<SeP>2024-12-24 07:20:06<SeP>2024-12-25 18:01:03<SeP>2024-12-27 04:42:00<SeP>2024-12-28 15:22:57<SeP>2024-12-30 02:03:54<SeP>2024-12-31 12:44:51<SeP>2025-01-01 23:25:48<SeP>2025-01-03 10:06:45<SeP>2025-01-04 20:47:42<SeP>2025-01-06 07:28:39<SeP>2025-01-07 18:09:36<SeP>2025-01-09 04:50:33<SeP>2025-01-10 15:31:30<SeP>2025-01-12 02:12:27<SeP>2025-01-13 12:53:24<SeP>2025-01-14 23:34:21<SeP>2025-01-16 10:15:18<SeP>2025-01-17 20:56:15<SeP>2025-01-19 07:37:12<SeP>2025-01-20 18:18:09<SeP>2025-01-22 04:59:06<SeP>2025-01-23 15:40:03<SeP>2025-01-25 02:21:00<SeP>2025-01-26 13:01:57<SeP>2025-01-27 23:42:54<SeP>2025-01-29 10:23:51<SeP>2025-01-30 21:04:48<SeP>2025-02-01 07:45:45<SeP>2025-02-02 18:26:42<SeP>2025-02-04 05:07:39<SeP>2025-02-05 15:48:36<SeP>2025-02-07 02:29:33<SeP>2025-02-08 13:10:30<SeP>2025-02-09 23:51:27<SeP>2025-02-11 10:32:24<SeP>2025-02-12 21:13:21<SeP>2025-02-14 07:54:18<SeP>2025-02-15 18:35:15<SeP>2025-02-17 05:16:12<SeP>2025-02-18 15:57:09<SeP>2025-02-20 02:38:06<SeP>2025-02-21 13:19:03";
  const itemLabel       = "Attacks";
  const itemData        = "152<SeP>614<SeP>973<SeP>717<SeP>538<SeP>222<SeP>6966<SeP>506<SeP>9183<SeP>976<SeP>328<SeP>1192<SeP>836<SeP>678<SeP>150<SeP>471<SeP>115<SeP>763<SeP>278<SeP>3945<SeP>7185<SeP>7316<SeP>6990<SeP>7854<SeP>405<SeP>318<SeP>345<SeP>218<SeP>400<SeP>5870<SeP>71<SeP>384<SeP>279<SeP>404<SeP>1454<SeP>9745<SeP>8715<SeP>10158<SeP>10244<SeP>5266<SeP>5883<SeP>8564<SeP>7667<SeP>9200<SeP>7809<SeP>7319<SeP>9142<SeP>7944<SeP>8578<SeP>8468<SeP>5734<SeP>5907<SeP>12537<SeP>6712<SeP>7008<SeP>8219<SeP>9522<SeP>17167<SeP>17907<SeP>8385<SeP>9230<SeP>9705<SeP>7190<SeP>8400<SeP>7630<SeP>9077<SeP>8423<SeP>6072<SeP>6526<SeP>6895<SeP>6508<SeP>2501<SeP>6006<SeP>5837<SeP>6826<SeP>5986<SeP>8408<SeP>3157<SeP>6116<SeP>5507<SeP>6490<SeP>5844<SeP>6514<SeP>3888<SeP>7207<SeP>5048<SeP>5746<SeP>5614<SeP>6372<SeP>21496<SeP>11726<SeP>33963<SeP>7627<SeP>7641<SeP>7365<SeP>11248<SeP>6916<SeP>4807<SeP>6489<SeP>3792<SeP>5287<SeP>6223<SeP>4923<SeP>8907<SeP>5067<SeP>6766<SeP>4982<SeP>5337<SeP>8331<SeP>8052<SeP>7454<SeP>6455<SeP>3998<SeP>9262<SeP>9911<SeP>6168<SeP>3169<SeP>5750<SeP>7711<SeP>6283<SeP>6592<SeP>8451<SeP>7423<SeP>1343<SeP>2789<SeP>991<SeP>1869<SeP>2705<SeP>1283<SeP>887<SeP>1157<SeP>1109<SeP>1342<SeP>1130<SeP>1209<SeP>1172<SeP>744<SeP>1237<SeP>1069<SeP>1143<SeP>1414<SeP>1018<SeP>1762<SeP>2086<SeP>1858<SeP>12175<SeP>6125<SeP>10332<SeP>7287<SeP>5548<SeP>10723<SeP>9064<SeP>8036<SeP>9333<SeP>11327<SeP>10310<SeP>9372<SeP>10890<SeP>14208<SeP>7077<SeP>10356<SeP>4860<SeP>5629<SeP>7219<SeP>24756<SeP>6214<SeP>8351<SeP>9584<SeP>16766<SeP>7671<SeP>7619<SeP>6526<SeP>6480<SeP>8012<SeP>25137<SeP>7909<SeP>10176<SeP>6790<SeP>6069<SeP>5838<SeP>6690<SeP>14924<SeP>5931<SeP>13351<SeP>7887<SeP>6098<SeP>8685<SeP>5715<SeP>4049<SeP>6031<SeP>7871<SeP>4811<SeP>7064<SeP>7035<SeP>5255<SeP>21061<SeP>6681<SeP>6019<SeP>6216<SeP>8150<SeP>10316<SeP>6975<SeP>4242<SeP>4274<SeP>6797<SeP>2862<SeP>4686<SeP>4131<SeP>659<SeP>104<SeP>641<SeP>214<SeP>628<SeP>1012<SeP>357<SeP>530<SeP>960<SeP>1454<SeP>3193<SeP>10371<SeP>13122<SeP>1960<SeP>4354<SeP>2896<SeP>3582<SeP>6361<SeP>4529<SeP>2727<SeP>3585<SeP>2656<SeP>3073<SeP>3205<SeP>4585<SeP>1641<SeP>3512<SeP>1863<SeP>1955<SeP>1925<SeP>1851<SeP>1152<SeP>1913<SeP>843<SeP>861<SeP>2006<SeP>26519<SeP>1480<SeP>3552<SeP>3396<SeP>2789<SeP>2777<SeP>3767<SeP>1585<SeP>3718<SeP>2572<SeP>3281<SeP>2444<SeP>2976<SeP>2835<SeP>3303<SeP>6686<SeP>4768<SeP>3628<SeP>3727<SeP>2907<SeP>3136<SeP>4078<SeP>4472<SeP>9926<SeP>5150<SeP>2478<SeP>2973<SeP>2280<SeP>4311<SeP>4069<SeP>3481<SeP>3083<SeP>2460<SeP>5890<SeP>3338<SeP>6157<SeP>3311<SeP>5847<SeP>4669<SeP>6618<SeP>3596<SeP>17802<SeP>10251<SeP>12517<SeP>1726<SeP>2288<SeP>4887<SeP>3389<SeP>3860<SeP>3929<SeP>5019<SeP>3933<SeP>4562<SeP>4249<SeP>3515<SeP>3289<SeP>1288<SeP>1896<SeP>2193<SeP>3467<SeP>2346<SeP>3823<SeP>3740<SeP>4328<SeP>3445<SeP>3035<SeP>4273<SeP>3406<SeP>3192<SeP>6440<SeP>7866<SeP>5769<SeP>4647<SeP>4656<SeP>4367<SeP>3784<SeP>3963<SeP>3942<SeP>6810<SeP>5218<SeP>4147<SeP>3486<SeP>930<SeP>1107<SeP>1931<SeP>1348<SeP>1237<SeP>1690<SeP>1556<SeP>1061<SeP>3050<SeP>3937<SeP>6583<SeP>20924<SeP>17677<SeP>5588<SeP>12555<SeP>15073<SeP>5587<SeP>5560<SeP>5163<SeP>10584<SeP>18397<SeP>5661<SeP>4782<SeP>4390<SeP>5945<SeP>18927<SeP>16239<SeP>4539<SeP>3095<SeP>4405<SeP>5456<SeP>5603<SeP>3045<SeP>3089<SeP>3935<SeP>4978<SeP>5337<SeP>3489<SeP>17734<SeP>6130<SeP>6369<SeP>4264<SeP>2219<SeP>3506<SeP>4584<SeP>3578<SeP>4237<SeP>2703<SeP>3834<SeP>2494<SeP>4194<SeP>3677<SeP>7248<SeP>9386<SeP>9128<SeP>8589<SeP>8724<SeP>7323<SeP>6697<SeP>5103<SeP>4730<SeP>9484<SeP>19891<SeP>3250<SeP>4315<SeP>3105<SeP>11470<SeP>5073<SeP>4194<SeP>4414<SeP>4438<SeP>3393<SeP>5906<SeP>10096";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:40:57<SeP>2023-07-28 21:21:54<SeP>2023-07-30 08:02:51<SeP>2023-07-31 18:43:48<SeP>2023-08-02 05:24:45<SeP>2023-08-03 16:05:42<SeP>2023-08-05 02:46:39<SeP>2023-08-06 13:27:36<SeP>2023-08-08 00:08:33<SeP>2023-08-09 10:49:30<SeP>2023-08-10 21:30:27<SeP>2023-08-12 08:11:24<SeP>2023-08-13 18:52:21<SeP>2023-08-15 05:33:18<SeP>2023-08-16 16:14:15<SeP>2023-08-18 02:55:12<SeP>2023-08-19 13:36:09<SeP>2023-08-21 00:17:06<SeP>2023-08-22 10:58:03<SeP>2023-08-23 21:39:00<SeP>2023-08-25 08:19:57<SeP>2023-08-26 19:00:54<SeP>2023-08-28 05:41:51<SeP>2023-08-29 16:22:48<SeP>2023-08-31 03:03:45<SeP>2023-09-01 13:44:42<SeP>2023-09-03 00:25:39<SeP>2023-09-04 11:06:36<SeP>2023-09-05 21:47:33<SeP>2023-09-07 08:28:30<SeP>2023-09-08 19:09:27<SeP>2023-09-10 05:50:24<SeP>2023-09-11 16:31:21<SeP>2023-09-13 03:12:18<SeP>2023-09-14 13:53:15<SeP>2023-09-16 00:34:12<SeP>2023-09-17 11:15:09<SeP>2023-09-18 21:56:06<SeP>2023-09-20 08:37:03<SeP>2023-09-21 19:18:00<SeP>2023-09-23 05:58:57<SeP>2023-09-24 16:39:54<SeP>2023-09-26 03:20:51<SeP>2023-09-27 14:01:48<SeP>2023-09-29 00:42:45<SeP>2023-09-30 11:23:42<SeP>2023-10-01 22:04:39<SeP>2023-10-03 08:45:36<SeP>2023-10-04 19:26:33<SeP>2023-10-06 06:07:30<SeP>2023-10-07 16:48:27<SeP>2023-10-09 03:29:24<SeP>2023-10-10 14:10:21<SeP>2023-10-12 00:51:18<SeP>2023-10-13 11:32:15<SeP>2023-10-14 22:13:12<SeP>2023-10-16 08:54:09<SeP>2023-10-17 19:35:06<SeP>2023-10-19 06:16:03<SeP>2023-10-20 16:57:00<SeP>2023-10-22 03:37:57<SeP>2023-10-23 14:18:54<SeP>2023-10-25 00:59:51<SeP>2023-10-26 11:40:48<SeP>2023-10-27 22:21:45<SeP>2023-10-29 09:02:42<SeP>2023-10-30 19:43:39<SeP>2023-11-01 06:24:36<SeP>2023-11-02 17:05:33<SeP>2023-11-04 03:46:30<SeP>2023-11-05 13:27:27<SeP>2023-11-07 00:08:24<SeP>2023-11-08 10:49:21<SeP>2023-11-09 21:30:18<SeP>2023-11-11 08:11:15<SeP>2023-11-12 18:52:12<SeP>2023-11-14 05:33:09<SeP>2023-11-15 16:14:06<SeP>2023-11-17 02:55:03<SeP>2023-11-18 13:36:00<SeP>2023-11-20 00:16:57<SeP>2023-11-21 10:57:54<SeP>2023-11-22 21:38:51<SeP>2023-11-24 08:19:48<SeP>2023-11-25 19:00:45<SeP>2023-11-27 05:41:42<SeP>2023-11-28 16:22:39<SeP>2023-11-30 03:03:36<SeP>2023-12-01 13:44:33<SeP>2023-12-03 00:25:30<SeP>2023-12-04 11:06:27<SeP>2023-12-05 21:47:24<SeP>2023-12-07 08:28:21<SeP>2023-12-08 19:09:18<SeP>2023-12-10 05:50:15<SeP>2023-12-11 16:31:12<SeP>2023-12-13 03:12:09<SeP>2023-12-14 13:53:06<SeP>2023-12-16 00:34:03<SeP>2023-12-17 11:15:00<SeP>2023-12-18 21:55:57<SeP>2023-12-20 08:36:54<SeP>2023-12-21 19:17:51<SeP>2023-12-23 05:58:48<SeP>2023-12-24 16:39:45<SeP>2023-12-26 03:20:42<SeP>2023-12-27 14:01:39<SeP>2023-12-29 00:42:36<SeP>2023-12-30 11:23:33<SeP>2023-12-31 22:04:30<SeP>2024-01-02 08:45:27<SeP>2024-01-03 19:26:24<SeP>2024-01-05 06:07:21<SeP>2024-01-06 16:48:18<SeP>2024-01-08 03:29:15<SeP>2024-01-09 14:10:12<SeP>2024-01-11 00:51:09<SeP>2024-01-12 11:32:06<SeP>2024-01-13 22:13:03<SeP>2024-01-15 08:54:00<SeP>2024-01-16 19:34:57<SeP>2024-01-18 06:15:54<SeP>2024-01-19 16:56:51<SeP>2024-01-21 03:37:48<SeP>2024-01-22 14:18:45<SeP>2024-01-24 00:59:42<SeP>2024-01-25 11:40:39<SeP>2024-01-26 22:21:36<SeP>2024-01-28 09:02:33<SeP>2024-01-29 19:43:30<SeP>2024-01-31 06:24:27<SeP>2024-02-01 17:05:24<SeP>2024-02-03 03:46:21<SeP>2024-02-04 14:27:18<SeP>2024-02-06 01:08:15<SeP>2024-02-07 11:49:12<SeP>2024-02-08 22:30:09<SeP>2024-02-10 09:11:06<SeP>2024-02-11 19:52:03<SeP>2024-02-13 06:33:00<SeP>2024-02-14 17:13:57<SeP>2024-02-16 03:54:54<SeP>2024-02-17 14:35:51<SeP>2024-02-19 01:16:48<SeP>2024-02-20 11:57:45<SeP>2024-02-21 22:38:42<SeP>2024-02-23 09:19:39<SeP>2024-02-24 20:00:36<SeP>2024-02-26 06:41:33<SeP>2024-02-27 17:22:30<SeP>2024-02-29 04:03:27<SeP>2024-03-01 14:44:24<SeP>2024-03-03 01:25:21<SeP>2024-03-04 12:06:18<SeP>2024-03-05 22:47:15<SeP>2024-03-07 09:28:12<SeP>2024-03-08 20:09:09<SeP>2024-03-10 07:50:06<SeP>2024-03-11 18:31:03<SeP>2024-03-13 05:12:00<SeP>2024-03-14 15:52:57<SeP>2024-03-16 02:33:54<SeP>2024-03-17 13:14:51<SeP>2024-03-18 23:55:48<SeP>2024-03-20 10:36:45<SeP>2024-03-21 21:17:42<SeP>2024-03-23 07:58:39<SeP>2024-03-24 18:39:36<SeP>2024-03-26 05:20:33<SeP>2024-03-27 16:01:30<SeP>2024-03-29 02:42:27<SeP>2024-03-30 13:23:24<SeP>2024-04-01 00:04:21<SeP>2024-04-02 10:45:18<SeP>2024-04-03 21:26:15<SeP>2024-04-05 08:07:12<SeP>2024-04-06 18:48:09<SeP>2024-04-08 05:29:06<SeP>2024-04-09 16:10:03<SeP>2024-04-11 02:51:00<SeP>2024-04-12 13:31:57<SeP>2024-04-14 00:12:54<SeP>2024-04-15 10:53:51<SeP>2024-04-16 21:34:48<SeP>2024-04-18 08:15:45<SeP>2024-04-19 18:56:42<SeP>2024-04-21 05:37:39<SeP>2024-04-22 16:18:36<SeP>2024-04-24 02:59:33<SeP>2024-04-25 13:40:30<SeP>2024-04-27 00:21:27<SeP>2024-04-28 11:02:24<SeP>2024-04-29 21:43:21<SeP>2024-05-01 08:24:18<SeP>2024-05-02 19:05:15<SeP>2024-05-04 05:46:12<SeP>2024-05-05 16:27:09<SeP>2024-05-07 03:08:06<SeP>2024-05-08 13:49:03<SeP>2024-05-10 00:30:00<SeP>2024-05-11 11:10:57<SeP>2024-05-12 21:51:54<SeP>2024-05-14 08:32:51<SeP>2024-05-15 19:13:48<SeP>2024-05-17 05:54:45<SeP>2024-05-18 16:35:42<SeP>2024-05-20 03:16:39<SeP>2024-05-21 13:57:36<SeP>2024-05-23 00:38:33<SeP>2024-05-24 11:19:30<SeP>2024-05-25 22:00:27<SeP>2024-05-27 08:41:24<SeP>2024-05-28 19:22:21<SeP>2024-05-30 06:03:18<SeP>2024-05-31 16:44:15<SeP>2024-06-02 03:25:12<SeP>2024-06-03 14:06:09<SeP>2024-06-05 00:47:06<SeP>2024-06-06 11:28:03<SeP>2024-06-07 22:09:00<SeP>2024-06-09 08:49:57<SeP>2024-06-10 19:30:54<SeP>2024-06-12 06:11:51<SeP>2024-06-13 16:52:48<SeP>2024-06-15 03:33:45<SeP>2024-06-16 14:14:42<SeP>2024-06-18 00:55:39<SeP>2024-06-19 11:36:36<SeP>2024-06-20 22:17:33<SeP>2024-06-22 08:58:30<SeP>2024-06-23 19:39:27<SeP>2024-06-25 06:20:24<SeP>2024-06-26 17:01:21<SeP>2024-06-28 03:42:18<SeP>2024-06-29 14:23:15<SeP>2024-07-01 01:04:12<SeP>2024-07-02 11:45:09<SeP>2024-07-03 22:26:06<SeP>2024-07-05 09:07:03<SeP>2024-07-06 19:48:00<SeP>2024-07-08 06:28:57<SeP>2024-07-09 17:09:54<SeP>2024-07-11 03:50:51<SeP>2024-07-12 14:31:48<SeP>2024-07-14 01:12:45<SeP>2024-07-15 11:53:42<SeP>2024-07-16 22:34:39<SeP>2024-07-18 09:15:36<SeP>2024-07-19 19:56:33<SeP>2024-07-21 06:37:30<SeP>2024-07-22 17:18:27<SeP>2024-07-24 03:59:24<SeP>2024-07-25 14:40:21<SeP>2024-07-27 01:21:18<SeP>2024-07-28 12:02:15<SeP>2024-07-29 22:43:12<SeP>2024-07-31 09:24:09<SeP>2024-08-01 20:05:06<SeP>2024-08-03 06:46:03<SeP>2024-08-04 17:27:00<SeP>2024-08-06 04:07:57<SeP>2024-08-07 14:48:54<SeP>2024-08-09 01:29:51<SeP>2024-08-10 12:10:48<SeP>2024-08-11 22:51:45<SeP>2024-08-13 09:32:42<SeP>2024-08-14 20:13:39<SeP>2024-08-16 06:54:36<SeP>2024-08-17 17:35:33<SeP>2024-08-19 04:16:30<SeP>2024-08-20 14:57:27<SeP>2024-08-22 01:38:24<SeP>2024-08-23 12:19:21<SeP>2024-08-24 23:00:18<SeP>2024-08-26 09:41:15<SeP>2024-08-27 20:22:12<SeP>2024-08-29 07:03:09<SeP>2024-08-30 17:44:06<SeP>2024-09-01 04:25:03<SeP>2024-09-02 15:06:00<SeP>2024-09-04 01:46:57<SeP>2024-09-05 12:27:54<SeP>2024-09-06 23:08:51<SeP>2024-09-08 09:49:48<SeP>2024-09-09 20:30:45<SeP>2024-09-11 07:11:42<SeP>2024-09-12 17:52:39<SeP>2024-09-14 04:33:36<SeP>2024-09-15 15:14:33<SeP>2024-09-17 01:55:30<SeP>2024-09-18 12:36:27<SeP>2024-09-19 23:17:24<SeP>2024-09-21 09:58:21<SeP>2024-09-22 20:39:18<SeP>2024-09-24 07:20:15<SeP>2024-09-25 18:01:12<SeP>2024-09-27 04:42:09<SeP>2024-09-28 15:23:06<SeP>2024-09-30 02:04:03<SeP>2024-10-01 12:45:00<SeP>2024-10-02 23:25:57<SeP>2024-10-04 10:06:54<SeP>2024-10-05 20:47:51<SeP>2024-10-07 07:28:48<SeP>2024-10-08 18:09:45<SeP>2024-10-10 04:50:42<SeP>2024-10-11 15:31:39<SeP>2024-10-13 02:12:36<SeP>2024-10-14 12:53:33<SeP>2024-10-15 23:34:30<SeP>2024-10-17 10:15:27<SeP>2024-10-18 20:56:24<SeP>2024-10-20 07:37:21<SeP>2024-10-21 18:18:18<SeP>2024-10-23 04:59:15<SeP>2024-10-24 15:40:12<SeP>2024-10-26 02:21:09<SeP>2024-10-27 13:02:06<SeP>2024-10-28 23:43:03<SeP>2024-10-30 10:24:00<SeP>2024-10-31 21:04:57<SeP>2024-11-02 07:45:54<SeP>2024-11-03 17:26:51<SeP>2024-11-05 04:07:48<SeP>2024-11-06 14:48:45<SeP>2024-11-08 01:29:42<SeP>2024-11-09 12:10:39<SeP>2024-11-10 22:51:36<SeP>2024-11-12 09:32:33<SeP>2024-11-13 20:13:30<SeP>2024-11-15 06:54:27<SeP>2024-11-16 17:35:24<SeP>2024-11-18 04:16:21<SeP>2024-11-19 14:57:18<SeP>2024-11-21 01:38:15<SeP>2024-11-22 12:19:12<SeP>2024-11-23 23:00:09<SeP>2024-11-25 09:41:06<SeP>2024-11-26 20:22:03<SeP>2024-11-28 07:03:00<SeP>2024-11-29 17:43:57<SeP>2024-12-01 04:24:54<SeP>2024-12-02 15:05:51<SeP>2024-12-04 01:46:48<SeP>2024-12-05 12:27:45<SeP>2024-12-06 23:08:42<SeP>2024-12-08 09:49:39<SeP>2024-12-09 20:30:36<SeP>2024-12-11 07:11:33<SeP>2024-12-12 17:52:30<SeP>2024-12-14 04:33:27<SeP>2024-12-15 15:14:24<SeP>2024-12-17 01:55:21<SeP>2024-12-18 12:36:18<SeP>2024-12-19 23:17:15<SeP>2024-12-21 09:58:12<SeP>2024-12-22 20:39:09<SeP>2024-12-24 07:20:06<SeP>2024-12-25 18:01:03<SeP>2024-12-27 04:42:00<SeP>2024-12-28 15:22:57<SeP>2024-12-30 02:03:54<SeP>2024-12-31 12:44:51<SeP>2025-01-01 23:25:48<SeP>2025-01-03 10:06:45<SeP>2025-01-04 20:47:42<SeP>2025-01-06 07:28:39<SeP>2025-01-07 18:09:36<SeP>2025-01-09 04:50:33<SeP>2025-01-10 15:31:30<SeP>2025-01-12 02:12:27<SeP>2025-01-13 12:53:24<SeP>2025-01-14 23:34:21<SeP>2025-01-16 10:15:18<SeP>2025-01-17 20:56:15<SeP>2025-01-19 07:37:12<SeP>2025-01-20 18:18:09<SeP>2025-01-22 04:59:06<SeP>2025-01-23 15:40:03<SeP>2025-01-25 02:21:00<SeP>2025-01-26 13:01:57<SeP>2025-01-27 23:42:54<SeP>2025-01-29 10:23:51<SeP>2025-01-30 21:04:48<SeP>2025-02-01 07:45:45<SeP>2025-02-02 18:26:42<SeP>2025-02-04 05:07:39<SeP>2025-02-05 15:48:36<SeP>2025-02-07 02:29:33<SeP>2025-02-08 13:10:30<SeP>2025-02-09 23:51:27<SeP>2025-02-11 10:32:24<SeP>2025-02-12 21:13:21<SeP>2025-02-14 07:54:18<SeP>2025-02-15 18:35:15<SeP>2025-02-17 05:16:12<SeP>2025-02-18 15:57:09<SeP>2025-02-20 02:38:06<SeP>2025-02-21 13:19:03";
  const item1Label       = "Escaneos";
  const item1Data        = "760<SeP>1462<SeP>1379<SeP>1442<SeP>1250<SeP>1677<SeP>952<SeP>978<SeP>1104<SeP>3353<SeP>1607<SeP>2702<SeP>1989<SeP>2350<SeP>751<SeP>858<SeP>1407<SeP>1954<SeP>1973<SeP>1668<SeP>1454<SeP>936<SeP>843<SeP>1446<SeP>789<SeP>992<SeP>758<SeP>935<SeP>3539<SeP>931<SeP>840<SeP>1390<SeP>1253<SeP>799<SeP>2659<SeP>1575<SeP>2847<SeP>1855<SeP>1841<SeP>1253<SeP>1282<SeP>1728<SeP>1847<SeP>2075<SeP>1545<SeP>1738<SeP>1541<SeP>1601<SeP>1756<SeP>1687<SeP>1683<SeP>1836<SeP>1724<SeP>1736<SeP>3079<SeP>1270<SeP>1893<SeP>1876<SeP>1832<SeP>2119<SeP>1946<SeP>3297<SeP>1382<SeP>1457<SeP>1490<SeP>1448<SeP>1932<SeP>1484<SeP>1228<SeP>1279<SeP>1453<SeP>1407<SeP>2030<SeP>1135<SeP>1207<SeP>1220<SeP>6333<SeP>3094<SeP>1360<SeP>1303<SeP>1736<SeP>1956<SeP>1104<SeP>5736<SeP>2380<SeP>1711<SeP>967<SeP>1053<SeP>3266<SeP>1222<SeP>1088<SeP>957<SeP>1111<SeP>999<SeP>3060<SeP>895<SeP>1196<SeP>2937<SeP>4488<SeP>3726<SeP>922<SeP>911<SeP>958<SeP>927<SeP>1013<SeP>817<SeP>1151<SeP>2827<SeP>2945<SeP>1579<SeP>1721<SeP>758<SeP>666<SeP>1416<SeP>1277<SeP>1109<SeP>957<SeP>2282<SeP>1044<SeP>1192<SeP>1080<SeP>890<SeP>1173<SeP>654<SeP>856<SeP>866<SeP>783<SeP>1114<SeP>847<SeP>921<SeP>691<SeP>868<SeP>841<SeP>847<SeP>686<SeP>849<SeP>836<SeP>906<SeP>881<SeP>844<SeP>781<SeP>771<SeP>945<SeP>861<SeP>808<SeP>893<SeP>883<SeP>906<SeP>1123<SeP>954<SeP>604<SeP>708<SeP>935<SeP>828<SeP>1280<SeP>872<SeP>1070<SeP>1118<SeP>1226<SeP>917<SeP>825<SeP>951<SeP>912<SeP>772<SeP>1096<SeP>902<SeP>943<SeP>903<SeP>972<SeP>985<SeP>1046<SeP>1006<SeP>1002<SeP>1006<SeP>920<SeP>993<SeP>1776<SeP>1427<SeP>1231<SeP>997<SeP>1019<SeP>1159<SeP>991<SeP>939<SeP>774<SeP>677<SeP>991<SeP>1064<SeP>849<SeP>1043<SeP>1217<SeP>1137<SeP>1138<SeP>1268<SeP>1056<SeP>1366<SeP>1106<SeP>1470<SeP>1196<SeP>1518<SeP>2079<SeP>1222<SeP>913<SeP>900<SeP>1091<SeP>1034<SeP>833<SeP>663<SeP>832<SeP>971<SeP>808<SeP>3699<SeP>4397<SeP>2136<SeP>1675<SeP>1157<SeP>815<SeP>1020<SeP>894<SeP>919<SeP>1014<SeP>1084<SeP>1026<SeP>1019<SeP>2135<SeP>1374<SeP>1040<SeP>1209<SeP>1192<SeP>1233<SeP>1077<SeP>973<SeP>1026<SeP>1080<SeP>1084<SeP>1053<SeP>1094<SeP>947<SeP>1081<SeP>847<SeP>1382<SeP>1118<SeP>1106<SeP>1203<SeP>1213<SeP>1349<SeP>1480<SeP>1171<SeP>1147<SeP>1089<SeP>1220<SeP>1752<SeP>1469<SeP>1364<SeP>1984<SeP>1517<SeP>1507<SeP>1923<SeP>1365<SeP>1189<SeP>1114<SeP>1295<SeP>1247<SeP>1470<SeP>1197<SeP>1269<SeP>1681<SeP>1654<SeP>1382<SeP>1429<SeP>1455<SeP>1189<SeP>1075<SeP>1087<SeP>1349<SeP>1103<SeP>1222<SeP>1280<SeP>1157<SeP>1497<SeP>1837<SeP>1317<SeP>1210<SeP>1625<SeP>1401<SeP>1116<SeP>1088<SeP>985<SeP>772<SeP>897<SeP>1020<SeP>996<SeP>1807<SeP>1050<SeP>1126<SeP>1143<SeP>782<SeP>1018<SeP>900<SeP>1394<SeP>835<SeP>868<SeP>1142<SeP>1226<SeP>1585<SeP>1414<SeP>1028<SeP>1051<SeP>1069<SeP>1749<SeP>1128<SeP>1103<SeP>1002<SeP>1295<SeP>1330<SeP>910<SeP>1003<SeP>1194<SeP>1011<SeP>950<SeP>808<SeP>1094<SeP>1521<SeP>1443<SeP>1615<SeP>1356<SeP>1066<SeP>993<SeP>1106<SeP>1210<SeP>1132<SeP>1163<SeP>972<SeP>1039<SeP>1121<SeP>1530<SeP>1313<SeP>1469<SeP>1326<SeP>1470<SeP>1526<SeP>1403<SeP>1246<SeP>1469<SeP>1501<SeP>1408<SeP>1347<SeP>1452<SeP>1671<SeP>1472<SeP>1323<SeP>1336<SeP>1395<SeP>1276<SeP>1238<SeP>1352<SeP>1557<SeP>1518<SeP>1162<SeP>1303<SeP>1232<SeP>1378<SeP>1313<SeP>1152<SeP>1387<SeP>1909<SeP>1594<SeP>1221<SeP>613<SeP>1489<SeP>1811<SeP>1252<SeP>1317<SeP>1212<SeP>1098<SeP>1459<SeP>1290<SeP>1288<SeP>1476<SeP>1724<SeP>1334<SeP>1567<SeP>1674<SeP>1310<SeP>1399<SeP>1488<SeP>1571<SeP>1716<SeP>983<SeP>1191<SeP>1872<SeP>1710<SeP>1791<SeP>1762<SeP>1744<SeP>1562<SeP>1614<SeP>1470<SeP>1559<SeP>1488";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "152<SeP>614<SeP>973<SeP>717<SeP>538<SeP>222<SeP>6966<SeP>506<SeP>9183<SeP>976<SeP>328<SeP>1192<SeP>836<SeP>678<SeP>150<SeP>471<SeP>115<SeP>763<SeP>278<SeP>3945<SeP>7185<SeP>7316<SeP>6990<SeP>7854<SeP>405<SeP>318<SeP>345<SeP>218<SeP>400<SeP>5870<SeP>71<SeP>384<SeP>279<SeP>404<SeP>1454<SeP>9745<SeP>8715<SeP>10158<SeP>10244<SeP>5266<SeP>5883<SeP>8564<SeP>7667<SeP>9200<SeP>7809<SeP>7319<SeP>9142<SeP>7944<SeP>8578<SeP>8468<SeP>5734<SeP>5907<SeP>12537<SeP>6712<SeP>7008<SeP>8219<SeP>9522<SeP>17167<SeP>17907<SeP>8385<SeP>9230<SeP>9705<SeP>7190<SeP>8400<SeP>7630<SeP>9077<SeP>8423<SeP>6072<SeP>6526<SeP>6895<SeP>6508<SeP>2501<SeP>6006<SeP>5837<SeP>6826<SeP>5986<SeP>8408<SeP>3157<SeP>6116<SeP>5507<SeP>6490<SeP>5844<SeP>6514<SeP>3888<SeP>7207<SeP>5048<SeP>5746<SeP>5614<SeP>6372<SeP>21496<SeP>11726<SeP>33963<SeP>7627<SeP>7641<SeP>7365<SeP>11248<SeP>6916<SeP>4807<SeP>6489<SeP>3792<SeP>5287<SeP>6223<SeP>4923<SeP>8907<SeP>5067<SeP>6766<SeP>4982<SeP>5337<SeP>8331<SeP>8052<SeP>7454<SeP>6455<SeP>3998<SeP>9262<SeP>9911<SeP>6168<SeP>3169<SeP>5750<SeP>7711<SeP>6283<SeP>6592<SeP>8451<SeP>7423<SeP>1343<SeP>2789<SeP>991<SeP>1869<SeP>2705<SeP>1283<SeP>887<SeP>1157<SeP>1109<SeP>1342<SeP>1130<SeP>1209<SeP>1172<SeP>744<SeP>1237<SeP>1069<SeP>1143<SeP>1414<SeP>1018<SeP>1762<SeP>2086<SeP>1858<SeP>12175<SeP>6125<SeP>10332<SeP>7287<SeP>5548<SeP>10723<SeP>9064<SeP>8036<SeP>9333<SeP>11327<SeP>10310<SeP>9372<SeP>10890<SeP>14208<SeP>7077<SeP>10356<SeP>4860<SeP>5629<SeP>7219<SeP>24756<SeP>6214<SeP>8351<SeP>9584<SeP>16766<SeP>7671<SeP>7619<SeP>6526<SeP>6480<SeP>8012<SeP>25137<SeP>7909<SeP>10176<SeP>6790<SeP>6069<SeP>5838<SeP>6690<SeP>14924<SeP>5931<SeP>13351<SeP>7887<SeP>6098<SeP>8685<SeP>5715<SeP>4049<SeP>6031<SeP>7871<SeP>4811<SeP>7064<SeP>7035<SeP>5255<SeP>21061<SeP>6681<SeP>6019<SeP>6216<SeP>8150<SeP>10316<SeP>6975<SeP>4242<SeP>4274<SeP>6797<SeP>2862<SeP>4686<SeP>4131<SeP>659<SeP>104<SeP>641<SeP>214<SeP>628<SeP>1012<SeP>357<SeP>530<SeP>960<SeP>1454<SeP>3193<SeP>10371<SeP>13122<SeP>1960<SeP>4354<SeP>2896<SeP>3582<SeP>6361<SeP>4529<SeP>2727<SeP>3585<SeP>2656<SeP>3073<SeP>3205<SeP>4585<SeP>1641<SeP>3512<SeP>1863<SeP>1955<SeP>1925<SeP>1851<SeP>1152<SeP>1913<SeP>843<SeP>861<SeP>2006<SeP>26519<SeP>1480<SeP>3552<SeP>3396<SeP>2789<SeP>2777<SeP>3767<SeP>1585<SeP>3718<SeP>2572<SeP>3281<SeP>2444<SeP>2976<SeP>2835<SeP>3303<SeP>6686<SeP>4768<SeP>3628<SeP>3727<SeP>2907<SeP>3136<SeP>4078<SeP>4472<SeP>9926<SeP>5150<SeP>2478<SeP>2973<SeP>2280<SeP>4311<SeP>4069<SeP>3481<SeP>3083<SeP>2460<SeP>5890<SeP>3338<SeP>6157<SeP>3311<SeP>5847<SeP>4669<SeP>6618<SeP>3596<SeP>17802<SeP>10251<SeP>12517<SeP>1726<SeP>2288<SeP>4887<SeP>3389<SeP>3860<SeP>3929<SeP>5019<SeP>3933<SeP>4562<SeP>4249<SeP>3515<SeP>3289<SeP>1288<SeP>1896<SeP>2193<SeP>3467<SeP>2346<SeP>3823<SeP>3740<SeP>4328<SeP>3445<SeP>3035<SeP>4273<SeP>3406<SeP>3192<SeP>6440<SeP>7866<SeP>5769<SeP>4647<SeP>4656<SeP>4367<SeP>3784<SeP>3963<SeP>3942<SeP>6810<SeP>5218<SeP>4147<SeP>3486<SeP>930<SeP>1107<SeP>1931<SeP>1348<SeP>1237<SeP>1690<SeP>1556<SeP>1061<SeP>3050<SeP>3937<SeP>6583<SeP>20924<SeP>17677<SeP>5588<SeP>12555<SeP>15073<SeP>5587<SeP>5560<SeP>5163<SeP>10584<SeP>18397<SeP>5661<SeP>4782<SeP>4390<SeP>5945<SeP>18927<SeP>16239<SeP>4539<SeP>3095<SeP>4405<SeP>5456<SeP>5603<SeP>3045<SeP>3089<SeP>3935<SeP>4978<SeP>5337<SeP>3489<SeP>17734<SeP>6130<SeP>6369<SeP>4264<SeP>2219<SeP>3506<SeP>4584<SeP>3578<SeP>4237<SeP>2703<SeP>3834<SeP>2494<SeP>4194<SeP>3677<SeP>7248<SeP>9386<SeP>9128<SeP>8589<SeP>8724<SeP>7323<SeP>6697<SeP>5103<SeP>4730<SeP>9484<SeP>19891<SeP>3250<SeP>4315<SeP>3105<SeP>11470<SeP>5073<SeP>4194<SeP>4414<SeP>4438<SeP>3393<SeP>5906<SeP>10096";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:40:57<SeP>2023-07-28 21:21:54<SeP>2023-07-30 08:02:51<SeP>2023-07-31 18:43:48<SeP>2023-08-02 05:24:45<SeP>2023-08-03 16:05:42<SeP>2023-08-05 02:46:39<SeP>2023-08-06 13:27:36<SeP>2023-08-08 00:08:33<SeP>2023-08-09 10:49:30<SeP>2023-08-10 21:30:27<SeP>2023-08-12 08:11:24<SeP>2023-08-13 18:52:21<SeP>2023-08-15 05:33:18<SeP>2023-08-16 16:14:15<SeP>2023-08-18 02:55:12<SeP>2023-08-19 13:36:09<SeP>2023-08-21 00:17:06<SeP>2023-08-22 10:58:03<SeP>2023-08-23 21:39:00<SeP>2023-08-25 08:19:57<SeP>2023-08-26 19:00:54<SeP>2023-08-28 05:41:51<SeP>2023-08-29 16:22:48<SeP>2023-08-31 03:03:45<SeP>2023-09-01 13:44:42<SeP>2023-09-03 00:25:39<SeP>2023-09-04 11:06:36<SeP>2023-09-05 21:47:33<SeP>2023-09-07 08:28:30<SeP>2023-09-08 19:09:27<SeP>2023-09-10 05:50:24<SeP>2023-09-11 16:31:21<SeP>2023-09-13 03:12:18<SeP>2023-09-14 13:53:15<SeP>2023-09-16 00:34:12<SeP>2023-09-17 11:15:09<SeP>2023-09-18 21:56:06<SeP>2023-09-20 08:37:03<SeP>2023-09-21 19:18:00<SeP>2023-09-23 05:58:57<SeP>2023-09-24 16:39:54<SeP>2023-09-26 03:20:51<SeP>2023-09-27 14:01:48<SeP>2023-09-29 00:42:45<SeP>2023-09-30 11:23:42<SeP>2023-10-01 22:04:39<SeP>2023-10-03 08:45:36<SeP>2023-10-04 19:26:33<SeP>2023-10-06 06:07:30<SeP>2023-10-07 16:48:27<SeP>2023-10-09 03:29:24<SeP>2023-10-10 14:10:21<SeP>2023-10-12 00:51:18<SeP>2023-10-13 11:32:15<SeP>2023-10-14 22:13:12<SeP>2023-10-16 08:54:09<SeP>2023-10-17 19:35:06<SeP>2023-10-19 06:16:03<SeP>2023-10-20 16:57:00<SeP>2023-10-22 03:37:57<SeP>2023-10-23 14:18:54<SeP>2023-10-25 00:59:51<SeP>2023-10-26 11:40:48<SeP>2023-10-27 22:21:45<SeP>2023-10-29 09:02:42<SeP>2023-10-30 19:43:39<SeP>2023-11-01 06:24:36<SeP>2023-11-02 17:05:33<SeP>2023-11-04 03:46:30<SeP>2023-11-05 13:27:27<SeP>2023-11-07 00:08:24<SeP>2023-11-08 10:49:21<SeP>2023-11-09 21:30:18<SeP>2023-11-11 08:11:15<SeP>2023-11-12 18:52:12<SeP>2023-11-14 05:33:09<SeP>2023-11-15 16:14:06<SeP>2023-11-17 02:55:03<SeP>2023-11-18 13:36:00<SeP>2023-11-20 00:16:57<SeP>2023-11-21 10:57:54<SeP>2023-11-22 21:38:51<SeP>2023-11-24 08:19:48<SeP>2023-11-25 19:00:45<SeP>2023-11-27 05:41:42<SeP>2023-11-28 16:22:39<SeP>2023-11-30 03:03:36<SeP>2023-12-01 13:44:33<SeP>2023-12-03 00:25:30<SeP>2023-12-04 11:06:27<SeP>2023-12-05 21:47:24<SeP>2023-12-07 08:28:21<SeP>2023-12-08 19:09:18<SeP>2023-12-10 05:50:15<SeP>2023-12-11 16:31:12<SeP>2023-12-13 03:12:09<SeP>2023-12-14 13:53:06<SeP>2023-12-16 00:34:03<SeP>2023-12-17 11:15:00<SeP>2023-12-18 21:55:57<SeP>2023-12-20 08:36:54<SeP>2023-12-21 19:17:51<SeP>2023-12-23 05:58:48<SeP>2023-12-24 16:39:45<SeP>2023-12-26 03:20:42<SeP>2023-12-27 14:01:39<SeP>2023-12-29 00:42:36<SeP>2023-12-30 11:23:33<SeP>2023-12-31 22:04:30<SeP>2024-01-02 08:45:27<SeP>2024-01-03 19:26:24<SeP>2024-01-05 06:07:21<SeP>2024-01-06 16:48:18<SeP>2024-01-08 03:29:15<SeP>2024-01-09 14:10:12<SeP>2024-01-11 00:51:09<SeP>2024-01-12 11:32:06<SeP>2024-01-13 22:13:03<SeP>2024-01-15 08:54:00<SeP>2024-01-16 19:34:57<SeP>2024-01-18 06:15:54<SeP>2024-01-19 16:56:51<SeP>2024-01-21 03:37:48<SeP>2024-01-22 14:18:45<SeP>2024-01-24 00:59:42<SeP>2024-01-25 11:40:39<SeP>2024-01-26 22:21:36<SeP>2024-01-28 09:02:33<SeP>2024-01-29 19:43:30<SeP>2024-01-31 06:24:27<SeP>2024-02-01 17:05:24<SeP>2024-02-03 03:46:21<SeP>2024-02-04 14:27:18<SeP>2024-02-06 01:08:15<SeP>2024-02-07 11:49:12<SeP>2024-02-08 22:30:09<SeP>2024-02-10 09:11:06<SeP>2024-02-11 19:52:03<SeP>2024-02-13 06:33:00<SeP>2024-02-14 17:13:57<SeP>2024-02-16 03:54:54<SeP>2024-02-17 14:35:51<SeP>2024-02-19 01:16:48<SeP>2024-02-20 11:57:45<SeP>2024-02-21 22:38:42<SeP>2024-02-23 09:19:39<SeP>2024-02-24 20:00:36<SeP>2024-02-26 06:41:33<SeP>2024-02-27 17:22:30<SeP>2024-02-29 04:03:27<SeP>2024-03-01 14:44:24<SeP>2024-03-03 01:25:21<SeP>2024-03-04 12:06:18<SeP>2024-03-05 22:47:15<SeP>2024-03-07 09:28:12<SeP>2024-03-08 20:09:09<SeP>2024-03-10 07:50:06<SeP>2024-03-11 18:31:03<SeP>2024-03-13 05:12:00<SeP>2024-03-14 15:52:57<SeP>2024-03-16 02:33:54<SeP>2024-03-17 13:14:51<SeP>2024-03-18 23:55:48<SeP>2024-03-20 10:36:45<SeP>2024-03-21 21:17:42<SeP>2024-03-23 07:58:39<SeP>2024-03-24 18:39:36<SeP>2024-03-26 05:20:33<SeP>2024-03-27 16:01:30<SeP>2024-03-29 02:42:27<SeP>2024-03-30 13:23:24<SeP>2024-04-01 00:04:21<SeP>2024-04-02 10:45:18<SeP>2024-04-03 21:26:15<SeP>2024-04-05 08:07:12<SeP>2024-04-06 18:48:09<SeP>2024-04-08 05:29:06<SeP>2024-04-09 16:10:03<SeP>2024-04-11 02:51:00<SeP>2024-04-12 13:31:57<SeP>2024-04-14 00:12:54<SeP>2024-04-15 10:53:51<SeP>2024-04-16 21:34:48<SeP>2024-04-18 08:15:45<SeP>2024-04-19 18:56:42<SeP>2024-04-21 05:37:39<SeP>2024-04-22 16:18:36<SeP>2024-04-24 02:59:33<SeP>2024-04-25 13:40:30<SeP>2024-04-27 00:21:27<SeP>2024-04-28 11:02:24<SeP>2024-04-29 21:43:21<SeP>2024-05-01 08:24:18<SeP>2024-05-02 19:05:15<SeP>2024-05-04 05:46:12<SeP>2024-05-05 16:27:09<SeP>2024-05-07 03:08:06<SeP>2024-05-08 13:49:03<SeP>2024-05-10 00:30:00<SeP>2024-05-11 11:10:57<SeP>2024-05-12 21:51:54<SeP>2024-05-14 08:32:51<SeP>2024-05-15 19:13:48<SeP>2024-05-17 05:54:45<SeP>2024-05-18 16:35:42<SeP>2024-05-20 03:16:39<SeP>2024-05-21 13:57:36<SeP>2024-05-23 00:38:33<SeP>2024-05-24 11:19:30<SeP>2024-05-25 22:00:27<SeP>2024-05-27 08:41:24<SeP>2024-05-28 19:22:21<SeP>2024-05-30 06:03:18<SeP>2024-05-31 16:44:15<SeP>2024-06-02 03:25:12<SeP>2024-06-03 14:06:09<SeP>2024-06-05 00:47:06<SeP>2024-06-06 11:28:03<SeP>2024-06-07 22:09:00<SeP>2024-06-09 08:49:57<SeP>2024-06-10 19:30:54<SeP>2024-06-12 06:11:51<SeP>2024-06-13 16:52:48<SeP>2024-06-15 03:33:45<SeP>2024-06-16 14:14:42<SeP>2024-06-18 00:55:39<SeP>2024-06-19 11:36:36<SeP>2024-06-20 22:17:33<SeP>2024-06-22 08:58:30<SeP>2024-06-23 19:39:27<SeP>2024-06-25 06:20:24<SeP>2024-06-26 17:01:21<SeP>2024-06-28 03:42:18<SeP>2024-06-29 14:23:15<SeP>2024-07-01 01:04:12<SeP>2024-07-02 11:45:09<SeP>2024-07-03 22:26:06<SeP>2024-07-05 09:07:03<SeP>2024-07-06 19:48:00<SeP>2024-07-08 06:28:57<SeP>2024-07-09 17:09:54<SeP>2024-07-11 03:50:51<SeP>2024-07-12 14:31:48<SeP>2024-07-14 01:12:45<SeP>2024-07-15 11:53:42<SeP>2024-07-16 22:34:39<SeP>2024-07-18 09:15:36<SeP>2024-07-19 19:56:33<SeP>2024-07-21 06:37:30<SeP>2024-07-22 17:18:27<SeP>2024-07-24 03:59:24<SeP>2024-07-25 14:40:21<SeP>2024-07-27 01:21:18<SeP>2024-07-28 12:02:15<SeP>2024-07-29 22:43:12<SeP>2024-07-31 09:24:09<SeP>2024-08-01 20:05:06<SeP>2024-08-03 06:46:03<SeP>2024-08-04 17:27:00<SeP>2024-08-06 04:07:57<SeP>2024-08-07 14:48:54<SeP>2024-08-09 01:29:51<SeP>2024-08-10 12:10:48<SeP>2024-08-11 22:51:45<SeP>2024-08-13 09:32:42<SeP>2024-08-14 20:13:39<SeP>2024-08-16 06:54:36<SeP>2024-08-17 17:35:33<SeP>2024-08-19 04:16:30<SeP>2024-08-20 14:57:27<SeP>2024-08-22 01:38:24<SeP>2024-08-23 12:19:21<SeP>2024-08-24 23:00:18<SeP>2024-08-26 09:41:15<SeP>2024-08-27 20:22:12<SeP>2024-08-29 07:03:09<SeP>2024-08-30 17:44:06<SeP>2024-09-01 04:25:03<SeP>2024-09-02 15:06:00<SeP>2024-09-04 01:46:57<SeP>2024-09-05 12:27:54<SeP>2024-09-06 23:08:51<SeP>2024-09-08 09:49:48<SeP>2024-09-09 20:30:45<SeP>2024-09-11 07:11:42<SeP>2024-09-12 17:52:39<SeP>2024-09-14 04:33:36<SeP>2024-09-15 15:14:33<SeP>2024-09-17 01:55:30<SeP>2024-09-18 12:36:27<SeP>2024-09-19 23:17:24<SeP>2024-09-21 09:58:21<SeP>2024-09-22 20:39:18<SeP>2024-09-24 07:20:15<SeP>2024-09-25 18:01:12<SeP>2024-09-27 04:42:09<SeP>2024-09-28 15:23:06<SeP>2024-09-30 02:04:03<SeP>2024-10-01 12:45:00<SeP>2024-10-02 23:25:57<SeP>2024-10-04 10:06:54<SeP>2024-10-05 20:47:51<SeP>2024-10-07 07:28:48<SeP>2024-10-08 18:09:45<SeP>2024-10-10 04:50:42<SeP>2024-10-11 15:31:39<SeP>2024-10-13 02:12:36<SeP>2024-10-14 12:53:33<SeP>2024-10-15 23:34:30<SeP>2024-10-17 10:15:27<SeP>2024-10-18 20:56:24<SeP>2024-10-20 07:37:21<SeP>2024-10-21 18:18:18<SeP>2024-10-23 04:59:15<SeP>2024-10-24 15:40:12<SeP>2024-10-26 02:21:09<SeP>2024-10-27 13:02:06<SeP>2024-10-28 23:43:03<SeP>2024-10-30 10:24:00<SeP>2024-10-31 21:04:57<SeP>2024-11-02 07:45:54<SeP>2024-11-03 17:26:51<SeP>2024-11-05 04:07:48<SeP>2024-11-06 14:48:45<SeP>2024-11-08 01:29:42<SeP>2024-11-09 12:10:39<SeP>2024-11-10 22:51:36<SeP>2024-11-12 09:32:33<SeP>2024-11-13 20:13:30<SeP>2024-11-15 06:54:27<SeP>2024-11-16 17:35:24<SeP>2024-11-18 04:16:21<SeP>2024-11-19 14:57:18<SeP>2024-11-21 01:38:15<SeP>2024-11-22 12:19:12<SeP>2024-11-23 23:00:09<SeP>2024-11-25 09:41:06<SeP>2024-11-26 20:22:03<SeP>2024-11-28 07:03:00<SeP>2024-11-29 17:43:57<SeP>2024-12-01 04:24:54<SeP>2024-12-02 15:05:51<SeP>2024-12-04 01:46:48<SeP>2024-12-05 12:27:45<SeP>2024-12-06 23:08:42<SeP>2024-12-08 09:49:39<SeP>2024-12-09 20:30:36<SeP>2024-12-11 07:11:33<SeP>2024-12-12 17:52:30<SeP>2024-12-14 04:33:27<SeP>2024-12-15 15:14:24<SeP>2024-12-17 01:55:21<SeP>2024-12-18 12:36:18<SeP>2024-12-19 23:17:15<SeP>2024-12-21 09:58:12<SeP>2024-12-22 20:39:09<SeP>2024-12-24 07:20:06<SeP>2024-12-25 18:01:03<SeP>2024-12-27 04:42:00<SeP>2024-12-28 15:22:57<SeP>2024-12-30 02:03:54<SeP>2024-12-31 12:44:51<SeP>2025-01-01 23:25:48<SeP>2025-01-03 10:06:45<SeP>2025-01-04 20:47:42<SeP>2025-01-06 07:28:39<SeP>2025-01-07 18:09:36<SeP>2025-01-09 04:50:33<SeP>2025-01-10 15:31:30<SeP>2025-01-12 02:12:27<SeP>2025-01-13 12:53:24<SeP>2025-01-14 23:34:21<SeP>2025-01-16 10:15:18<SeP>2025-01-17 20:56:15<SeP>2025-01-19 07:37:12<SeP>2025-01-20 18:18:09<SeP>2025-01-22 04:59:06<SeP>2025-01-23 15:40:03<SeP>2025-01-25 02:21:00<SeP>2025-01-26 13:01:57<SeP>2025-01-27 23:42:54<SeP>2025-01-29 10:23:51<SeP>2025-01-30 21:04:48<SeP>2025-02-01 07:45:45<SeP>2025-02-02 18:26:42<SeP>2025-02-04 05:07:39<SeP>2025-02-05 15:48:36<SeP>2025-02-07 02:29:33<SeP>2025-02-08 13:10:30<SeP>2025-02-09 23:51:27<SeP>2025-02-11 10:32:24<SeP>2025-02-12 21:13:21<SeP>2025-02-14 07:54:18<SeP>2025-02-15 18:35:15<SeP>2025-02-17 05:16:12<SeP>2025-02-18 15:57:09<SeP>2025-02-20 02:38:06<SeP>2025-02-21 13:19:03";
  const itemLabel       = "Escaneos";
  const itemData        = "760<SeP>1462<SeP>1379<SeP>1442<SeP>1250<SeP>1677<SeP>952<SeP>978<SeP>1104<SeP>3353<SeP>1607<SeP>2702<SeP>1989<SeP>2350<SeP>751<SeP>858<SeP>1407<SeP>1954<SeP>1973<SeP>1668<SeP>1454<SeP>936<SeP>843<SeP>1446<SeP>789<SeP>992<SeP>758<SeP>935<SeP>3539<SeP>931<SeP>840<SeP>1390<SeP>1253<SeP>799<SeP>2659<SeP>1575<SeP>2847<SeP>1855<SeP>1841<SeP>1253<SeP>1282<SeP>1728<SeP>1847<SeP>2075<SeP>1545<SeP>1738<SeP>1541<SeP>1601<SeP>1756<SeP>1687<SeP>1683<SeP>1836<SeP>1724<SeP>1736<SeP>3079<SeP>1270<SeP>1893<SeP>1876<SeP>1832<SeP>2119<SeP>1946<SeP>3297<SeP>1382<SeP>1457<SeP>1490<SeP>1448<SeP>1932<SeP>1484<SeP>1228<SeP>1279<SeP>1453<SeP>1407<SeP>2030<SeP>1135<SeP>1207<SeP>1220<SeP>6333<SeP>3094<SeP>1360<SeP>1303<SeP>1736<SeP>1956<SeP>1104<SeP>5736<SeP>2380<SeP>1711<SeP>967<SeP>1053<SeP>3266<SeP>1222<SeP>1088<SeP>957<SeP>1111<SeP>999<SeP>3060<SeP>895<SeP>1196<SeP>2937<SeP>4488<SeP>3726<SeP>922<SeP>911<SeP>958<SeP>927<SeP>1013<SeP>817<SeP>1151<SeP>2827<SeP>2945<SeP>1579<SeP>1721<SeP>758<SeP>666<SeP>1416<SeP>1277<SeP>1109<SeP>957<SeP>2282<SeP>1044<SeP>1192<SeP>1080<SeP>890<SeP>1173<SeP>654<SeP>856<SeP>866<SeP>783<SeP>1114<SeP>847<SeP>921<SeP>691<SeP>868<SeP>841<SeP>847<SeP>686<SeP>849<SeP>836<SeP>906<SeP>881<SeP>844<SeP>781<SeP>771<SeP>945<SeP>861<SeP>808<SeP>893<SeP>883<SeP>906<SeP>1123<SeP>954<SeP>604<SeP>708<SeP>935<SeP>828<SeP>1280<SeP>872<SeP>1070<SeP>1118<SeP>1226<SeP>917<SeP>825<SeP>951<SeP>912<SeP>772<SeP>1096<SeP>902<SeP>943<SeP>903<SeP>972<SeP>985<SeP>1046<SeP>1006<SeP>1002<SeP>1006<SeP>920<SeP>993<SeP>1776<SeP>1427<SeP>1231<SeP>997<SeP>1019<SeP>1159<SeP>991<SeP>939<SeP>774<SeP>677<SeP>991<SeP>1064<SeP>849<SeP>1043<SeP>1217<SeP>1137<SeP>1138<SeP>1268<SeP>1056<SeP>1366<SeP>1106<SeP>1470<SeP>1196<SeP>1518<SeP>2079<SeP>1222<SeP>913<SeP>900<SeP>1091<SeP>1034<SeP>833<SeP>663<SeP>832<SeP>971<SeP>808<SeP>3699<SeP>4397<SeP>2136<SeP>1675<SeP>1157<SeP>815<SeP>1020<SeP>894<SeP>919<SeP>1014<SeP>1084<SeP>1026<SeP>1019<SeP>2135<SeP>1374<SeP>1040<SeP>1209<SeP>1192<SeP>1233<SeP>1077<SeP>973<SeP>1026<SeP>1080<SeP>1084<SeP>1053<SeP>1094<SeP>947<SeP>1081<SeP>847<SeP>1382<SeP>1118<SeP>1106<SeP>1203<SeP>1213<SeP>1349<SeP>1480<SeP>1171<SeP>1147<SeP>1089<SeP>1220<SeP>1752<SeP>1469<SeP>1364<SeP>1984<SeP>1517<SeP>1507<SeP>1923<SeP>1365<SeP>1189<SeP>1114<SeP>1295<SeP>1247<SeP>1470<SeP>1197<SeP>1269<SeP>1681<SeP>1654<SeP>1382<SeP>1429<SeP>1455<SeP>1189<SeP>1075<SeP>1087<SeP>1349<SeP>1103<SeP>1222<SeP>1280<SeP>1157<SeP>1497<SeP>1837<SeP>1317<SeP>1210<SeP>1625<SeP>1401<SeP>1116<SeP>1088<SeP>985<SeP>772<SeP>897<SeP>1020<SeP>996<SeP>1807<SeP>1050<SeP>1126<SeP>1143<SeP>782<SeP>1018<SeP>900<SeP>1394<SeP>835<SeP>868<SeP>1142<SeP>1226<SeP>1585<SeP>1414<SeP>1028<SeP>1051<SeP>1069<SeP>1749<SeP>1128<SeP>1103<SeP>1002<SeP>1295<SeP>1330<SeP>910<SeP>1003<SeP>1194<SeP>1011<SeP>950<SeP>808<SeP>1094<SeP>1521<SeP>1443<SeP>1615<SeP>1356<SeP>1066<SeP>993<SeP>1106<SeP>1210<SeP>1132<SeP>1163<SeP>972<SeP>1039<SeP>1121<SeP>1530<SeP>1313<SeP>1469<SeP>1326<SeP>1470<SeP>1526<SeP>1403<SeP>1246<SeP>1469<SeP>1501<SeP>1408<SeP>1347<SeP>1452<SeP>1671<SeP>1472<SeP>1323<SeP>1336<SeP>1395<SeP>1276<SeP>1238<SeP>1352<SeP>1557<SeP>1518<SeP>1162<SeP>1303<SeP>1232<SeP>1378<SeP>1313<SeP>1152<SeP>1387<SeP>1909<SeP>1594<SeP>1221<SeP>613<SeP>1489<SeP>1811<SeP>1252<SeP>1317<SeP>1212<SeP>1098<SeP>1459<SeP>1290<SeP>1288<SeP>1476<SeP>1724<SeP>1334<SeP>1567<SeP>1674<SeP>1310<SeP>1399<SeP>1488<SeP>1571<SeP>1716<SeP>983<SeP>1191<SeP>1872<SeP>1710<SeP>1791<SeP>1762<SeP>1744<SeP>1562<SeP>1614<SeP>1470<SeP>1559<SeP>1488";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:40:57<SeP>2023-07-28 21:21:54<SeP>2023-07-30 08:02:51<SeP>2023-07-31 18:43:48<SeP>2023-08-02 05:24:45<SeP>2023-08-03 16:05:42<SeP>2023-08-05 02:46:39<SeP>2023-08-06 13:27:36<SeP>2023-08-08 00:08:33<SeP>2023-08-09 10:49:30<SeP>2023-08-10 21:30:27<SeP>2023-08-12 08:11:24<SeP>2023-08-13 18:52:21<SeP>2023-08-15 05:33:18<SeP>2023-08-16 16:14:15<SeP>2023-08-18 02:55:12<SeP>2023-08-19 13:36:09<SeP>2023-08-21 00:17:06<SeP>2023-08-22 10:58:03<SeP>2023-08-23 21:39:00<SeP>2023-08-25 08:19:57<SeP>2023-08-26 19:00:54<SeP>2023-08-28 05:41:51<SeP>2023-08-29 16:22:48<SeP>2023-08-31 03:03:45<SeP>2023-09-01 13:44:42<SeP>2023-09-03 00:25:39<SeP>2023-09-04 11:06:36<SeP>2023-09-05 21:47:33<SeP>2023-09-07 08:28:30<SeP>2023-09-08 19:09:27<SeP>2023-09-10 05:50:24<SeP>2023-09-11 16:31:21<SeP>2023-09-13 03:12:18<SeP>2023-09-14 13:53:15<SeP>2023-09-16 00:34:12<SeP>2023-09-17 11:15:09<SeP>2023-09-18 21:56:06<SeP>2023-09-20 08:37:03<SeP>2023-09-21 19:18:00<SeP>2023-09-23 05:58:57<SeP>2023-09-24 16:39:54<SeP>2023-09-26 03:20:51<SeP>2023-09-27 14:01:48<SeP>2023-09-29 00:42:45<SeP>2023-09-30 11:23:42<SeP>2023-10-01 22:04:39<SeP>2023-10-03 08:45:36<SeP>2023-10-04 19:26:33<SeP>2023-10-06 06:07:30<SeP>2023-10-07 16:48:27<SeP>2023-10-09 03:29:24<SeP>2023-10-10 14:10:21<SeP>2023-10-12 00:51:18<SeP>2023-10-13 11:32:15<SeP>2023-10-14 22:13:12<SeP>2023-10-16 08:54:09<SeP>2023-10-17 19:35:06<SeP>2023-10-19 06:16:03<SeP>2023-10-20 16:57:00<SeP>2023-10-22 03:37:57<SeP>2023-10-23 14:18:54<SeP>2023-10-25 00:59:51<SeP>2023-10-26 11:40:48<SeP>2023-10-27 22:21:45<SeP>2023-10-29 09:02:42<SeP>2023-10-30 19:43:39<SeP>2023-11-01 06:24:36<SeP>2023-11-02 17:05:33<SeP>2023-11-04 03:46:30<SeP>2023-11-05 13:27:27<SeP>2023-11-07 00:08:24<SeP>2023-11-08 10:49:21<SeP>2023-11-09 21:30:18<SeP>2023-11-11 08:11:15<SeP>2023-11-12 18:52:12<SeP>2023-11-14 05:33:09<SeP>2023-11-15 16:14:06<SeP>2023-11-17 02:55:03<SeP>2023-11-18 13:36:00<SeP>2023-11-20 00:16:57<SeP>2023-11-21 10:57:54<SeP>2023-11-22 21:38:51<SeP>2023-11-24 08:19:48<SeP>2023-11-25 19:00:45<SeP>2023-11-27 05:41:42<SeP>2023-11-28 16:22:39<SeP>2023-11-30 03:03:36<SeP>2023-12-01 13:44:33<SeP>2023-12-03 00:25:30<SeP>2023-12-04 11:06:27<SeP>2023-12-05 21:47:24<SeP>2023-12-07 08:28:21<SeP>2023-12-08 19:09:18<SeP>2023-12-10 05:50:15<SeP>2023-12-11 16:31:12<SeP>2023-12-13 03:12:09<SeP>2023-12-14 13:53:06<SeP>2023-12-16 00:34:03<SeP>2023-12-17 11:15:00<SeP>2023-12-18 21:55:57<SeP>2023-12-20 08:36:54<SeP>2023-12-21 19:17:51<SeP>2023-12-23 05:58:48<SeP>2023-12-24 16:39:45<SeP>2023-12-26 03:20:42<SeP>2023-12-27 14:01:39<SeP>2023-12-29 00:42:36<SeP>2023-12-30 11:23:33<SeP>2023-12-31 22:04:30<SeP>2024-01-02 08:45:27<SeP>2024-01-03 19:26:24<SeP>2024-01-05 06:07:21<SeP>2024-01-06 16:48:18<SeP>2024-01-08 03:29:15<SeP>2024-01-09 14:10:12<SeP>2024-01-11 00:51:09<SeP>2024-01-12 11:32:06<SeP>2024-01-13 22:13:03<SeP>2024-01-15 08:54:00<SeP>2024-01-16 19:34:57<SeP>2024-01-18 06:15:54<SeP>2024-01-19 16:56:51<SeP>2024-01-21 03:37:48<SeP>2024-01-22 14:18:45<SeP>2024-01-24 00:59:42<SeP>2024-01-25 11:40:39<SeP>2024-01-26 22:21:36<SeP>2024-01-28 09:02:33<SeP>2024-01-29 19:43:30<SeP>2024-01-31 06:24:27<SeP>2024-02-01 17:05:24<SeP>2024-02-03 03:46:21<SeP>2024-02-04 14:27:18<SeP>2024-02-06 01:08:15<SeP>2024-02-07 11:49:12<SeP>2024-02-08 22:30:09<SeP>2024-02-10 09:11:06<SeP>2024-02-11 19:52:03<SeP>2024-02-13 06:33:00<SeP>2024-02-14 17:13:57<SeP>2024-02-16 03:54:54<SeP>2024-02-17 14:35:51<SeP>2024-02-19 01:16:48<SeP>2024-02-20 11:57:45<SeP>2024-02-21 22:38:42<SeP>2024-02-23 09:19:39<SeP>2024-02-24 20:00:36<SeP>2024-02-26 06:41:33<SeP>2024-02-27 17:22:30<SeP>2024-02-29 04:03:27<SeP>2024-03-01 14:44:24<SeP>2024-03-03 01:25:21<SeP>2024-03-04 12:06:18<SeP>2024-03-05 22:47:15<SeP>2024-03-07 09:28:12<SeP>2024-03-08 20:09:09<SeP>2024-03-10 07:50:06<SeP>2024-03-11 18:31:03<SeP>2024-03-13 05:12:00<SeP>2024-03-14 15:52:57<SeP>2024-03-16 02:33:54<SeP>2024-03-17 13:14:51<SeP>2024-03-18 23:55:48<SeP>2024-03-20 10:36:45<SeP>2024-03-21 21:17:42<SeP>2024-03-23 07:58:39<SeP>2024-03-24 18:39:36<SeP>2024-03-26 05:20:33<SeP>2024-03-27 16:01:30<SeP>2024-03-29 02:42:27<SeP>2024-03-30 13:23:24<SeP>2024-04-01 00:04:21<SeP>2024-04-02 10:45:18<SeP>2024-04-03 21:26:15<SeP>2024-04-05 08:07:12<SeP>2024-04-06 18:48:09<SeP>2024-04-08 05:29:06<SeP>2024-04-09 16:10:03<SeP>2024-04-11 02:51:00<SeP>2024-04-12 13:31:57<SeP>2024-04-14 00:12:54<SeP>2024-04-15 10:53:51<SeP>2024-04-16 21:34:48<SeP>2024-04-18 08:15:45<SeP>2024-04-19 18:56:42<SeP>2024-04-21 05:37:39<SeP>2024-04-22 16:18:36<SeP>2024-04-24 02:59:33<SeP>2024-04-25 13:40:30<SeP>2024-04-27 00:21:27<SeP>2024-04-28 11:02:24<SeP>2024-04-29 21:43:21<SeP>2024-05-01 08:24:18<SeP>2024-05-02 19:05:15<SeP>2024-05-04 05:46:12<SeP>2024-05-05 16:27:09<SeP>2024-05-07 03:08:06<SeP>2024-05-08 13:49:03<SeP>2024-05-10 00:30:00<SeP>2024-05-11 11:10:57<SeP>2024-05-12 21:51:54<SeP>2024-05-14 08:32:51<SeP>2024-05-15 19:13:48<SeP>2024-05-17 05:54:45<SeP>2024-05-18 16:35:42<SeP>2024-05-20 03:16:39<SeP>2024-05-21 13:57:36<SeP>2024-05-23 00:38:33<SeP>2024-05-24 11:19:30<SeP>2024-05-25 22:00:27<SeP>2024-05-27 08:41:24<SeP>2024-05-28 19:22:21<SeP>2024-05-30 06:03:18<SeP>2024-05-31 16:44:15<SeP>2024-06-02 03:25:12<SeP>2024-06-03 14:06:09<SeP>2024-06-05 00:47:06<SeP>2024-06-06 11:28:03<SeP>2024-06-07 22:09:00<SeP>2024-06-09 08:49:57<SeP>2024-06-10 19:30:54<SeP>2024-06-12 06:11:51<SeP>2024-06-13 16:52:48<SeP>2024-06-15 03:33:45<SeP>2024-06-16 14:14:42<SeP>2024-06-18 00:55:39<SeP>2024-06-19 11:36:36<SeP>2024-06-20 22:17:33<SeP>2024-06-22 08:58:30<SeP>2024-06-23 19:39:27<SeP>2024-06-25 06:20:24<SeP>2024-06-26 17:01:21<SeP>2024-06-28 03:42:18<SeP>2024-06-29 14:23:15<SeP>2024-07-01 01:04:12<SeP>2024-07-02 11:45:09<SeP>2024-07-03 22:26:06<SeP>2024-07-05 09:07:03<SeP>2024-07-06 19:48:00<SeP>2024-07-08 06:28:57<SeP>2024-07-09 17:09:54<SeP>2024-07-11 03:50:51<SeP>2024-07-12 14:31:48<SeP>2024-07-14 01:12:45<SeP>2024-07-15 11:53:42<SeP>2024-07-16 22:34:39<SeP>2024-07-18 09:15:36<SeP>2024-07-19 19:56:33<SeP>2024-07-21 06:37:30<SeP>2024-07-22 17:18:27<SeP>2024-07-24 03:59:24<SeP>2024-07-25 14:40:21<SeP>2024-07-27 01:21:18<SeP>2024-07-28 12:02:15<SeP>2024-07-29 22:43:12<SeP>2024-07-31 09:24:09<SeP>2024-08-01 20:05:06<SeP>2024-08-03 06:46:03<SeP>2024-08-04 17:27:00<SeP>2024-08-06 04:07:57<SeP>2024-08-07 14:48:54<SeP>2024-08-09 01:29:51<SeP>2024-08-10 12:10:48<SeP>2024-08-11 22:51:45<SeP>2024-08-13 09:32:42<SeP>2024-08-14 20:13:39<SeP>2024-08-16 06:54:36<SeP>2024-08-17 17:35:33<SeP>2024-08-19 04:16:30<SeP>2024-08-20 14:57:27<SeP>2024-08-22 01:38:24<SeP>2024-08-23 12:19:21<SeP>2024-08-24 23:00:18<SeP>2024-08-26 09:41:15<SeP>2024-08-27 20:22:12<SeP>2024-08-29 07:03:09<SeP>2024-08-30 17:44:06<SeP>2024-09-01 04:25:03<SeP>2024-09-02 15:06:00<SeP>2024-09-04 01:46:57<SeP>2024-09-05 12:27:54<SeP>2024-09-06 23:08:51<SeP>2024-09-08 09:49:48<SeP>2024-09-09 20:30:45<SeP>2024-09-11 07:11:42<SeP>2024-09-12 17:52:39<SeP>2024-09-14 04:33:36<SeP>2024-09-15 15:14:33<SeP>2024-09-17 01:55:30<SeP>2024-09-18 12:36:27<SeP>2024-09-19 23:17:24<SeP>2024-09-21 09:58:21<SeP>2024-09-22 20:39:18<SeP>2024-09-24 07:20:15<SeP>2024-09-25 18:01:12<SeP>2024-09-27 04:42:09<SeP>2024-09-28 15:23:06<SeP>2024-09-30 02:04:03<SeP>2024-10-01 12:45:00<SeP>2024-10-02 23:25:57<SeP>2024-10-04 10:06:54<SeP>2024-10-05 20:47:51<SeP>2024-10-07 07:28:48<SeP>2024-10-08 18:09:45<SeP>2024-10-10 04:50:42<SeP>2024-10-11 15:31:39<SeP>2024-10-13 02:12:36<SeP>2024-10-14 12:53:33<SeP>2024-10-15 23:34:30<SeP>2024-10-17 10:15:27<SeP>2024-10-18 20:56:24<SeP>2024-10-20 07:37:21<SeP>2024-10-21 18:18:18<SeP>2024-10-23 04:59:15<SeP>2024-10-24 15:40:12<SeP>2024-10-26 02:21:09<SeP>2024-10-27 13:02:06<SeP>2024-10-28 23:43:03<SeP>2024-10-30 10:24:00<SeP>2024-10-31 21:04:57<SeP>2024-11-02 07:45:54<SeP>2024-11-03 17:26:51<SeP>2024-11-05 04:07:48<SeP>2024-11-06 14:48:45<SeP>2024-11-08 01:29:42<SeP>2024-11-09 12:10:39<SeP>2024-11-10 22:51:36<SeP>2024-11-12 09:32:33<SeP>2024-11-13 20:13:30<SeP>2024-11-15 06:54:27<SeP>2024-11-16 17:35:24<SeP>2024-11-18 04:16:21<SeP>2024-11-19 14:57:18<SeP>2024-11-21 01:38:15<SeP>2024-11-22 12:19:12<SeP>2024-11-23 23:00:09<SeP>2024-11-25 09:41:06<SeP>2024-11-26 20:22:03<SeP>2024-11-28 07:03:00<SeP>2024-11-29 17:43:57<SeP>2024-12-01 04:24:54<SeP>2024-12-02 15:05:51<SeP>2024-12-04 01:46:48<SeP>2024-12-05 12:27:45<SeP>2024-12-06 23:08:42<SeP>2024-12-08 09:49:39<SeP>2024-12-09 20:30:36<SeP>2024-12-11 07:11:33<SeP>2024-12-12 17:52:30<SeP>2024-12-14 04:33:27<SeP>2024-12-15 15:14:24<SeP>2024-12-17 01:55:21<SeP>2024-12-18 12:36:18<SeP>2024-12-19 23:17:15<SeP>2024-12-21 09:58:12<SeP>2024-12-22 20:39:09<SeP>2024-12-24 07:20:06<SeP>2024-12-25 18:01:03<SeP>2024-12-27 04:42:00<SeP>2024-12-28 15:22:57<SeP>2024-12-30 02:03:54<SeP>2024-12-31 12:44:51<SeP>2025-01-01 23:25:48<SeP>2025-01-03 10:06:45<SeP>2025-01-04 20:47:42<SeP>2025-01-06 07:28:39<SeP>2025-01-07 18:09:36<SeP>2025-01-09 04:50:33<SeP>2025-01-10 15:31:30<SeP>2025-01-12 02:12:27<SeP>2025-01-13 12:53:24<SeP>2025-01-14 23:34:21<SeP>2025-01-16 10:15:18<SeP>2025-01-17 20:56:15<SeP>2025-01-19 07:37:12<SeP>2025-01-20 18:18:09<SeP>2025-01-22 04:59:06<SeP>2025-01-23 15:40:03<SeP>2025-01-25 02:21:00<SeP>2025-01-26 13:01:57<SeP>2025-01-27 23:42:54<SeP>2025-01-29 10:23:51<SeP>2025-01-30 21:04:48<SeP>2025-02-01 07:45:45<SeP>2025-02-02 18:26:42<SeP>2025-02-04 05:07:39<SeP>2025-02-05 15:48:36<SeP>2025-02-07 02:29:33<SeP>2025-02-08 13:10:30<SeP>2025-02-09 23:51:27<SeP>2025-02-11 10:32:24<SeP>2025-02-12 21:13:21<SeP>2025-02-14 07:54:18<SeP>2025-02-15 18:35:15<SeP>2025-02-17 05:16:12<SeP>2025-02-18 15:57:09<SeP>2025-02-20 02:38:06<SeP>2025-02-21 13:19:03";
  const itemLabel       = "Ataques";
  const itemData        = "152<SeP>614<SeP>973<SeP>717<SeP>538<SeP>222<SeP>6966<SeP>506<SeP>9183<SeP>976<SeP>328<SeP>1192<SeP>836<SeP>678<SeP>150<SeP>471<SeP>115<SeP>763<SeP>278<SeP>3945<SeP>7185<SeP>7316<SeP>6990<SeP>7854<SeP>405<SeP>318<SeP>345<SeP>218<SeP>400<SeP>5870<SeP>71<SeP>384<SeP>279<SeP>404<SeP>1454<SeP>9745<SeP>8715<SeP>10158<SeP>10244<SeP>5266<SeP>5883<SeP>8564<SeP>7667<SeP>9200<SeP>7809<SeP>7319<SeP>9142<SeP>7944<SeP>8578<SeP>8468<SeP>5734<SeP>5907<SeP>12537<SeP>6712<SeP>7008<SeP>8219<SeP>9522<SeP>17167<SeP>17907<SeP>8385<SeP>9230<SeP>9705<SeP>7190<SeP>8400<SeP>7630<SeP>9077<SeP>8423<SeP>6072<SeP>6526<SeP>6895<SeP>6508<SeP>2501<SeP>6006<SeP>5837<SeP>6826<SeP>5986<SeP>8408<SeP>3157<SeP>6116<SeP>5507<SeP>6490<SeP>5844<SeP>6514<SeP>3888<SeP>7207<SeP>5048<SeP>5746<SeP>5614<SeP>6372<SeP>21496<SeP>11726<SeP>33963<SeP>7627<SeP>7641<SeP>7365<SeP>11248<SeP>6916<SeP>4807<SeP>6489<SeP>3792<SeP>5287<SeP>6223<SeP>4923<SeP>8907<SeP>5067<SeP>6766<SeP>4982<SeP>5337<SeP>8331<SeP>8052<SeP>7454<SeP>6455<SeP>3998<SeP>9262<SeP>9911<SeP>6168<SeP>3169<SeP>5750<SeP>7711<SeP>6283<SeP>6592<SeP>8451<SeP>7423<SeP>1343<SeP>2789<SeP>991<SeP>1869<SeP>2705<SeP>1283<SeP>887<SeP>1157<SeP>1109<SeP>1342<SeP>1130<SeP>1209<SeP>1172<SeP>744<SeP>1237<SeP>1069<SeP>1143<SeP>1414<SeP>1018<SeP>1762<SeP>2086<SeP>1858<SeP>12175<SeP>6125<SeP>10332<SeP>7287<SeP>5548<SeP>10723<SeP>9064<SeP>8036<SeP>9333<SeP>11327<SeP>10310<SeP>9372<SeP>10890<SeP>14208<SeP>7077<SeP>10356<SeP>4860<SeP>5629<SeP>7219<SeP>24756<SeP>6214<SeP>8351<SeP>9584<SeP>16766<SeP>7671<SeP>7619<SeP>6526<SeP>6480<SeP>8012<SeP>25137<SeP>7909<SeP>10176<SeP>6790<SeP>6069<SeP>5838<SeP>6690<SeP>14924<SeP>5931<SeP>13351<SeP>7887<SeP>6098<SeP>8685<SeP>5715<SeP>4049<SeP>6031<SeP>7871<SeP>4811<SeP>7064<SeP>7035<SeP>5255<SeP>21061<SeP>6681<SeP>6019<SeP>6216<SeP>8150<SeP>10316<SeP>6975<SeP>4242<SeP>4274<SeP>6797<SeP>2862<SeP>4686<SeP>4131<SeP>659<SeP>104<SeP>641<SeP>214<SeP>628<SeP>1012<SeP>357<SeP>530<SeP>960<SeP>1454<SeP>3193<SeP>10371<SeP>13122<SeP>1960<SeP>4354<SeP>2896<SeP>3582<SeP>6361<SeP>4529<SeP>2727<SeP>3585<SeP>2656<SeP>3073<SeP>3205<SeP>4585<SeP>1641<SeP>3512<SeP>1863<SeP>1955<SeP>1925<SeP>1851<SeP>1152<SeP>1913<SeP>843<SeP>861<SeP>2006<SeP>26519<SeP>1480<SeP>3552<SeP>3396<SeP>2789<SeP>2777<SeP>3767<SeP>1585<SeP>3718<SeP>2572<SeP>3281<SeP>2444<SeP>2976<SeP>2835<SeP>3303<SeP>6686<SeP>4768<SeP>3628<SeP>3727<SeP>2907<SeP>3136<SeP>4078<SeP>4472<SeP>9926<SeP>5150<SeP>2478<SeP>2973<SeP>2280<SeP>4311<SeP>4069<SeP>3481<SeP>3083<SeP>2460<SeP>5890<SeP>3338<SeP>6157<SeP>3311<SeP>5847<SeP>4669<SeP>6618<SeP>3596<SeP>17802<SeP>10251<SeP>12517<SeP>1726<SeP>2288<SeP>4887<SeP>3389<SeP>3860<SeP>3929<SeP>5019<SeP>3933<SeP>4562<SeP>4249<SeP>3515<SeP>3289<SeP>1288<SeP>1896<SeP>2193<SeP>3467<SeP>2346<SeP>3823<SeP>3740<SeP>4328<SeP>3445<SeP>3035<SeP>4273<SeP>3406<SeP>3192<SeP>6440<SeP>7866<SeP>5769<SeP>4647<SeP>4656<SeP>4367<SeP>3784<SeP>3963<SeP>3942<SeP>6810<SeP>5218<SeP>4147<SeP>3486<SeP>930<SeP>1107<SeP>1931<SeP>1348<SeP>1237<SeP>1690<SeP>1556<SeP>1061<SeP>3050<SeP>3937<SeP>6583<SeP>20924<SeP>17677<SeP>5588<SeP>12555<SeP>15073<SeP>5587<SeP>5560<SeP>5163<SeP>10584<SeP>18397<SeP>5661<SeP>4782<SeP>4390<SeP>5945<SeP>18927<SeP>16239<SeP>4539<SeP>3095<SeP>4405<SeP>5456<SeP>5603<SeP>3045<SeP>3089<SeP>3935<SeP>4978<SeP>5337<SeP>3489<SeP>17734<SeP>6130<SeP>6369<SeP>4264<SeP>2219<SeP>3506<SeP>4584<SeP>3578<SeP>4237<SeP>2703<SeP>3834<SeP>2494<SeP>4194<SeP>3677<SeP>7248<SeP>9386<SeP>9128<SeP>8589<SeP>8724<SeP>7323<SeP>6697<SeP>5103<SeP>4730<SeP>9484<SeP>19891<SeP>3250<SeP>4315<SeP>3105<SeP>11470<SeP>5073<SeP>4194<SeP>4414<SeP>4438<SeP>3393<SeP>5906<SeP>10096";
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
  const itemData    = "689599<SeP>360477<SeP>205333<SeP>178710<SeP>109690<SeP>87219<SeP>82726<SeP>79951<SeP>67708<SeP>65334";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "293838<SeP>41414<SeP>39918<SeP>34876<SeP>14352<SeP>10625<SeP>7523<SeP>7245<SeP>6949<SeP>6803";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Attacks";
  const itemData    = "395761<SeP>325601<SeP>202605<SeP>138792<SeP>95338<SeP>80416<SeP>80141<SeP>69326<SeP>58089<SeP>56188";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "360337<SeP>259479<SeP>234271<SeP>143844<SeP>66441<SeP>59070<SeP>55761<SeP>49682<SeP>41611<SeP>35630";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "154480<SeP>52675<SeP>40490<SeP>31996<SeP>21903<SeP>12611<SeP>10691<SeP>9278<SeP>7614<SeP>7425";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "347726<SeP>258716<SeP>121941<SeP>79791<SeP>54803<SeP>48379<SeP>43991<SeP>30532<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Hong Kong";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "689599<SeP>360477<SeP>205333<SeP>178710<SeP>109690<SeP>87219<SeP>82726<SeP>79951<SeP>67708<SeP>65334";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "293838<SeP>41414<SeP>39918<SeP>34876<SeP>14352<SeP>10625<SeP>7523<SeP>7245<SeP>6949<SeP>6803";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Ataques";
  const itemData    = "395761<SeP>325601<SeP>202605<SeP>138792<SeP>95338<SeP>80416<SeP>80141<SeP>69326<SeP>58089<SeP>56188";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "360337<SeP>259479<SeP>234271<SeP>143844<SeP>66441<SeP>59070<SeP>55761<SeP>49682<SeP>41611<SeP>35630";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "154480<SeP>52675<SeP>40490<SeP>31996<SeP>21903<SeP>12611<SeP>10691<SeP>9278<SeP>7614<SeP>7425";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "347726<SeP>258716<SeP>121941<SeP>79791<SeP>54803<SeP>48379<SeP>43991<SeP>30532<SeP>29324<SeP>26846";
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
