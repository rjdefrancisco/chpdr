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
  document.getElementById("last-updated").innerHTML = "2025-2-21";
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
  const metricData    = "2789635";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "539835";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2249800";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "137232";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1419805";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "829995";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52824";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "245000";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "584995";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42249";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2789635";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "539835";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2249800";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "137232";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1419805";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "829995";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52824";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "245000";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "584995";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42249";
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
  const incomingData = "2789635<SeP>539835<SeP>2249800<SeP>137232";
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
  const incomingData = "2249800<SeP>1419805<SeP>829995<SeP>52824";
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
  const incomingData = "829995<SeP>245000<SeP>584995<SeP>42249";
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
  const incomingData = "2555071<SeP>252428<SeP>2302643";
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
  const incomingData = "388176<SeP>144<SeP>388032<SeP>224";
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
  const incomingData = "2789635<SeP>539835<SeP>2249800<SeP>137232";
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
  const incomingData = "2249800<SeP>1419805<SeP>829995<SeP>52824";
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
  const incomingData = "829995<SeP>245000<SeP>584995<SeP>42249";
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
  const incomingData = "2555071<SeP>252428<SeP>2302643";
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
  const incomingData = "388176<SeP>144<SeP>388032<SeP>224";
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
  const column3Data   = "217022<SeP>198585<SeP>12445<SeP>11976<SeP>9678<SeP>9371<SeP>6437<SeP>5593<SeP>4619<SeP>3451";
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
  const column2Data  = "208232<SeP>42975<SeP>482<SeP>443<SeP>424<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2373784<SeP>415851";
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
  const column3Data   = "217022<SeP>198585<SeP>12445<SeP>11976<SeP>9678<SeP>9371<SeP>6437<SeP>5593<SeP>4619<SeP>3451";
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
  const column2Data  = "208232<SeP>42975<SeP>482<SeP>443<SeP>424<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2373784<SeP>415851";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-21";

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
        "name": "traffic between 2023-07-26 and 2025-02-19"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          388114,50
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
        "name": "scans between 2023-07-26 and 2025-02-19"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          222921,30,
          388114,50
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
        "name": "attacks between 2023-07-26 and 2025-02-19"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165193,23,
          388114,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-21";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-19"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          388114,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-19"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          222921,30,
          388114,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-19"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165193,23,
          388114,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:33:45<SeP>2023-07-28 21:07:30<SeP>2023-07-30 07:41:15<SeP>2023-07-31 18:15:00<SeP>2023-08-02 04:48:45<SeP>2023-08-03 15:22:30<SeP>2023-08-05 01:56:15<SeP>2023-08-06 12:30:00<SeP>2023-08-07 23:03:45<SeP>2023-08-09 09:37:30<SeP>2023-08-10 20:11:15<SeP>2023-08-12 06:45:00<SeP>2023-08-13 17:18:45<SeP>2023-08-15 03:52:30<SeP>2023-08-16 14:26:15<SeP>2023-08-18 01:00:00<SeP>2023-08-19 11:33:45<SeP>2023-08-20 22:07:30<SeP>2023-08-22 08:41:15<SeP>2023-08-23 19:15:00<SeP>2023-08-25 05:48:45<SeP>2023-08-26 16:22:30<SeP>2023-08-28 02:56:15<SeP>2023-08-29 13:30:00<SeP>2023-08-31 00:03:45<SeP>2023-09-01 10:37:30<SeP>2023-09-02 21:11:15<SeP>2023-09-04 07:45:00<SeP>2023-09-05 18:18:45<SeP>2023-09-07 04:52:30<SeP>2023-09-08 15:26:15<SeP>2023-09-10 02:00:00<SeP>2023-09-11 12:33:45<SeP>2023-09-12 23:07:30<SeP>2023-09-14 09:41:15<SeP>2023-09-15 20:15:00<SeP>2023-09-17 06:48:45<SeP>2023-09-18 17:22:30<SeP>2023-09-20 03:56:15<SeP>2023-09-21 14:30:00<SeP>2023-09-23 01:03:45<SeP>2023-09-24 11:37:30<SeP>2023-09-25 22:11:15<SeP>2023-09-27 08:45:00<SeP>2023-09-28 19:18:45<SeP>2023-09-30 05:52:30<SeP>2023-10-01 16:26:15<SeP>2023-10-03 03:00:00<SeP>2023-10-04 13:33:45<SeP>2023-10-06 00:07:30<SeP>2023-10-07 10:41:15<SeP>2023-10-08 21:15:00<SeP>2023-10-10 07:48:45<SeP>2023-10-11 18:22:30<SeP>2023-10-13 04:56:15<SeP>2023-10-14 15:30:00<SeP>2023-10-16 02:03:45<SeP>2023-10-17 12:37:30<SeP>2023-10-18 23:11:15<SeP>2023-10-20 09:45:00<SeP>2023-10-21 20:18:45<SeP>2023-10-23 06:52:30<SeP>2023-10-24 17:26:15<SeP>2023-10-26 04:00:00<SeP>2023-10-27 14:33:45<SeP>2023-10-29 01:07:30<SeP>2023-10-30 11:41:15<SeP>2023-10-31 22:15:00<SeP>2023-11-02 08:48:45<SeP>2023-11-03 19:22:30<SeP>2023-11-05 04:56:15<SeP>2023-11-06 15:30:00<SeP>2023-11-08 02:03:45<SeP>2023-11-09 12:37:30<SeP>2023-11-10 23:11:15<SeP>2023-11-12 09:45:00<SeP>2023-11-13 20:18:45<SeP>2023-11-15 06:52:30<SeP>2023-11-16 17:26:15<SeP>2023-11-18 04:00:00<SeP>2023-11-19 14:33:45<SeP>2023-11-21 01:07:30<SeP>2023-11-22 11:41:15<SeP>2023-11-23 22:15:00<SeP>2023-11-25 08:48:45<SeP>2023-11-26 19:22:30<SeP>2023-11-28 05:56:15<SeP>2023-11-29 16:30:00<SeP>2023-12-01 03:03:45<SeP>2023-12-02 13:37:30<SeP>2023-12-04 00:11:15<SeP>2023-12-05 10:45:00<SeP>2023-12-06 21:18:45<SeP>2023-12-08 07:52:30<SeP>2023-12-09 18:26:15<SeP>2023-12-11 05:00:00<SeP>2023-12-12 15:33:45<SeP>2023-12-14 02:07:30<SeP>2023-12-15 12:41:15<SeP>2023-12-16 23:15:00<SeP>2023-12-18 09:48:45<SeP>2023-12-19 20:22:30<SeP>2023-12-21 06:56:15<SeP>2023-12-22 17:30:00<SeP>2023-12-24 04:03:45<SeP>2023-12-25 14:37:30<SeP>2023-12-27 01:11:15<SeP>2023-12-28 11:45:00<SeP>2023-12-29 22:18:45<SeP>2023-12-31 08:52:30<SeP>2024-01-01 19:26:15<SeP>2024-01-03 06:00:00<SeP>2024-01-04 16:33:45<SeP>2024-01-06 03:07:30<SeP>2024-01-07 13:41:15<SeP>2024-01-09 00:15:00<SeP>2024-01-10 10:48:45<SeP>2024-01-11 21:22:30<SeP>2024-01-13 07:56:15<SeP>2024-01-14 18:30:00<SeP>2024-01-16 05:03:45<SeP>2024-01-17 15:37:30<SeP>2024-01-19 02:11:15<SeP>2024-01-20 12:45:00<SeP>2024-01-21 23:18:45<SeP>2024-01-23 09:52:30<SeP>2024-01-24 20:26:15<SeP>2024-01-26 07:00:00<SeP>2024-01-27 17:33:45<SeP>2024-01-29 04:07:30<SeP>2024-01-30 14:41:15<SeP>2024-02-01 01:15:00<SeP>2024-02-02 11:48:45<SeP>2024-02-03 22:22:30<SeP>2024-02-05 08:56:15<SeP>2024-02-06 19:30:00<SeP>2024-02-08 06:03:45<SeP>2024-02-09 16:37:30<SeP>2024-02-11 03:11:15<SeP>2024-02-12 13:45:00<SeP>2024-02-14 00:18:45<SeP>2024-02-15 10:52:30<SeP>2024-02-16 21:26:15<SeP>2024-02-18 08:00:00<SeP>2024-02-19 18:33:45<SeP>2024-02-21 05:07:30<SeP>2024-02-22 15:41:15<SeP>2024-02-24 02:15:00<SeP>2024-02-25 12:48:45<SeP>2024-02-26 23:22:30<SeP>2024-02-28 09:56:15<SeP>2024-02-29 20:30:00<SeP>2024-03-02 07:03:45<SeP>2024-03-03 17:37:30<SeP>2024-03-05 04:11:15<SeP>2024-03-06 14:45:00<SeP>2024-03-08 01:18:45<SeP>2024-03-09 11:52:30<SeP>2024-03-10 23:26:15<SeP>2024-03-12 10:00:00<SeP>2024-03-13 20:33:45<SeP>2024-03-15 07:07:30<SeP>2024-03-16 17:41:15<SeP>2024-03-18 04:15:00<SeP>2024-03-19 14:48:45<SeP>2024-03-21 01:22:30<SeP>2024-03-22 11:56:15<SeP>2024-03-23 22:30:00<SeP>2024-03-25 09:03:45<SeP>2024-03-26 19:37:30<SeP>2024-03-28 06:11:15<SeP>2024-03-29 16:45:00<SeP>2024-03-31 03:18:45<SeP>2024-04-01 13:52:30<SeP>2024-04-03 00:26:15<SeP>2024-04-04 11:00:00<SeP>2024-04-05 21:33:45<SeP>2024-04-07 08:07:30<SeP>2024-04-08 18:41:15<SeP>2024-04-10 05:15:00<SeP>2024-04-11 15:48:45<SeP>2024-04-13 02:22:30<SeP>2024-04-14 12:56:15<SeP>2024-04-15 23:30:00<SeP>2024-04-17 10:03:45<SeP>2024-04-18 20:37:30<SeP>2024-04-20 07:11:15<SeP>2024-04-21 17:45:00<SeP>2024-04-23 04:18:45<SeP>2024-04-24 14:52:30<SeP>2024-04-26 01:26:15<SeP>2024-04-27 12:00:00<SeP>2024-04-28 22:33:45<SeP>2024-04-30 09:07:30<SeP>2024-05-01 19:41:15<SeP>2024-05-03 06:15:00<SeP>2024-05-04 16:48:45<SeP>2024-05-06 03:22:30<SeP>2024-05-07 13:56:15<SeP>2024-05-09 00:30:00<SeP>2024-05-10 11:03:45<SeP>2024-05-11 21:37:30<SeP>2024-05-13 08:11:15<SeP>2024-05-14 18:45:00<SeP>2024-05-16 05:18:45<SeP>2024-05-17 15:52:30<SeP>2024-05-19 02:26:15<SeP>2024-05-20 13:00:00<SeP>2024-05-21 23:33:45<SeP>2024-05-23 10:07:30<SeP>2024-05-24 20:41:15<SeP>2024-05-26 07:15:00<SeP>2024-05-27 17:48:45<SeP>2024-05-29 04:22:30<SeP>2024-05-30 14:56:15<SeP>2024-06-01 01:30:00<SeP>2024-06-02 12:03:45<SeP>2024-06-03 22:37:30<SeP>2024-06-05 09:11:15<SeP>2024-06-06 19:45:00<SeP>2024-06-08 06:18:45<SeP>2024-06-09 16:52:30<SeP>2024-06-11 03:26:15<SeP>2024-06-12 14:00:00<SeP>2024-06-14 00:33:45<SeP>2024-06-15 11:07:30<SeP>2024-06-16 21:41:15<SeP>2024-06-18 08:15:00<SeP>2024-06-19 18:48:45<SeP>2024-06-21 05:22:30<SeP>2024-06-22 15:56:15<SeP>2024-06-24 02:30:00<SeP>2024-06-25 13:03:45<SeP>2024-06-26 23:37:30<SeP>2024-06-28 10:11:15<SeP>2024-06-29 20:45:00<SeP>2024-07-01 07:18:45<SeP>2024-07-02 17:52:30<SeP>2024-07-04 04:26:15<SeP>2024-07-05 15:00:00<SeP>2024-07-07 01:33:45<SeP>2024-07-08 12:07:30<SeP>2024-07-09 22:41:15<SeP>2024-07-11 09:15:00<SeP>2024-07-12 19:48:45<SeP>2024-07-14 06:22:30<SeP>2024-07-15 16:56:15<SeP>2024-07-17 03:30:00<SeP>2024-07-18 14:03:45<SeP>2024-07-20 00:37:30<SeP>2024-07-21 11:11:15<SeP>2024-07-22 21:45:00<SeP>2024-07-24 08:18:45<SeP>2024-07-25 18:52:30<SeP>2024-07-27 05:26:15<SeP>2024-07-28 16:00:00<SeP>2024-07-30 02:33:45<SeP>2024-07-31 13:07:30<SeP>2024-08-01 23:41:15<SeP>2024-08-03 10:15:00<SeP>2024-08-04 20:48:45<SeP>2024-08-06 07:22:30<SeP>2024-08-07 17:56:15<SeP>2024-08-09 04:30:00<SeP>2024-08-10 15:03:45<SeP>2024-08-12 01:37:30<SeP>2024-08-13 12:11:15<SeP>2024-08-14 22:45:00<SeP>2024-08-16 09:18:45<SeP>2024-08-17 19:52:30<SeP>2024-08-19 06:26:15<SeP>2024-08-20 17:00:00<SeP>2024-08-22 03:33:45<SeP>2024-08-23 14:07:30<SeP>2024-08-25 00:41:15<SeP>2024-08-26 11:15:00<SeP>2024-08-27 21:48:45<SeP>2024-08-29 08:22:30<SeP>2024-08-30 18:56:15<SeP>2024-09-01 05:30:00<SeP>2024-09-02 16:03:45<SeP>2024-09-04 02:37:30<SeP>2024-09-05 13:11:15<SeP>2024-09-06 23:45:00<SeP>2024-09-08 10:18:45<SeP>2024-09-09 20:52:30<SeP>2024-09-11 07:26:15<SeP>2024-09-12 18:00:00<SeP>2024-09-14 04:33:45<SeP>2024-09-15 15:07:30<SeP>2024-09-17 01:41:15<SeP>2024-09-18 12:15:00<SeP>2024-09-19 22:48:45<SeP>2024-09-21 09:22:30<SeP>2024-09-22 19:56:15<SeP>2024-09-24 06:30:00<SeP>2024-09-25 17:03:45<SeP>2024-09-27 03:37:30<SeP>2024-09-28 14:11:15<SeP>2024-09-30 00:45:00<SeP>2024-10-01 11:18:45<SeP>2024-10-02 21:52:30<SeP>2024-10-04 08:26:15<SeP>2024-10-05 19:00:00<SeP>2024-10-07 05:33:45<SeP>2024-10-08 16:07:30<SeP>2024-10-10 02:41:15<SeP>2024-10-11 13:15:00<SeP>2024-10-12 23:48:45<SeP>2024-10-14 10:22:30<SeP>2024-10-15 20:56:15<SeP>2024-10-17 07:30:00<SeP>2024-10-18 18:03:45<SeP>2024-10-20 04:37:30<SeP>2024-10-21 15:11:15<SeP>2024-10-23 01:45:00<SeP>2024-10-24 12:18:45<SeP>2024-10-25 22:52:30<SeP>2024-10-27 09:26:15<SeP>2024-10-28 20:00:00<SeP>2024-10-30 06:33:45<SeP>2024-10-31 17:07:30<SeP>2024-11-02 03:41:15<SeP>2024-11-03 13:15:00<SeP>2024-11-04 23:48:45<SeP>2024-11-06 10:22:30<SeP>2024-11-07 20:56:15<SeP>2024-11-09 07:30:00<SeP>2024-11-10 18:03:45<SeP>2024-11-12 04:37:30<SeP>2024-11-13 15:11:15<SeP>2024-11-15 01:45:00<SeP>2024-11-16 12:18:45<SeP>2024-11-17 22:52:30<SeP>2024-11-19 09:26:15<SeP>2024-11-20 20:00:00<SeP>2024-11-22 06:33:45<SeP>2024-11-23 17:07:30<SeP>2024-11-25 03:41:15<SeP>2024-11-26 14:15:00<SeP>2024-11-28 00:48:45<SeP>2024-11-29 11:22:30<SeP>2024-11-30 21:56:15<SeP>2024-12-02 08:30:00<SeP>2024-12-03 19:03:45<SeP>2024-12-05 05:37:30<SeP>2024-12-06 16:11:15<SeP>2024-12-08 02:45:00<SeP>2024-12-09 13:18:45<SeP>2024-12-10 23:52:30<SeP>2024-12-12 10:26:15<SeP>2024-12-13 21:00:00<SeP>2024-12-15 07:33:45<SeP>2024-12-16 18:07:30<SeP>2024-12-18 04:41:15<SeP>2024-12-19 15:15:00<SeP>2024-12-21 01:48:45<SeP>2024-12-22 12:22:30<SeP>2024-12-23 22:56:15<SeP>2024-12-25 09:30:00<SeP>2024-12-26 20:03:45<SeP>2024-12-28 06:37:30<SeP>2024-12-29 17:11:15<SeP>2024-12-31 03:45:00<SeP>2025-01-01 14:18:45<SeP>2025-01-03 00:52:30<SeP>2025-01-04 11:26:15<SeP>2025-01-05 22:00:00<SeP>2025-01-07 08:33:45<SeP>2025-01-08 19:07:30<SeP>2025-01-10 05:41:15<SeP>2025-01-11 16:15:00<SeP>2025-01-13 02:48:45<SeP>2025-01-14 13:22:30<SeP>2025-01-15 23:56:15<SeP>2025-01-17 10:30:00<SeP>2025-01-18 21:03:45<SeP>2025-01-20 07:37:30<SeP>2025-01-21 18:11:15<SeP>2025-01-23 04:45:00<SeP>2025-01-24 15:18:45<SeP>2025-01-26 01:52:30<SeP>2025-01-27 12:26:15<SeP>2025-01-28 23:00:00<SeP>2025-01-30 09:33:45<SeP>2025-01-31 20:07:30<SeP>2025-02-02 06:41:15<SeP>2025-02-03 17:15:00<SeP>2025-02-05 03:48:45<SeP>2025-02-06 14:22:30<SeP>2025-02-08 00:56:15<SeP>2025-02-09 11:30:00<SeP>2025-02-10 22:03:45<SeP>2025-02-12 08:37:30<SeP>2025-02-13 19:11:15<SeP>2025-02-15 05:45:00<SeP>2025-02-16 16:18:45<SeP>2025-02-18 02:52:30<SeP>2025-02-19 13:26:15";
  const item1Label       = "Scans";
  const item1Data        = "759<SeP>1453<SeP>1378<SeP>1419<SeP>1223<SeP>1682<SeP>997<SeP>982<SeP>1087<SeP>3333<SeP>1467<SeP>2855<SeP>1809<SeP>2549<SeP>744<SeP>813<SeP>1421<SeP>1578<SeP>2343<SeP>1519<SeP>1527<SeP>986<SeP>868<SeP>1076<SeP>1184<SeP>918<SeP>733<SeP>914<SeP>3597<SeP>993<SeP>828<SeP>1334<SeP>1202<SeP>859<SeP>1717<SeP>2444<SeP>2876<SeP>1771<SeP>1429<SeP>1729<SeP>1252<SeP>1632<SeP>1885<SeP>1997<SeP>1685<SeP>1641<SeP>1572<SeP>1690<SeP>1660<SeP>1567<SeP>1796<SeP>1807<SeP>1749<SeP>1546<SeP>3218<SeP>1366<SeP>1566<SeP>2102<SeP>1860<SeP>2183<SeP>1863<SeP>3274<SeP>1294<SeP>1542<SeP>1568<SeP>1245<SeP>1829<SeP>1701<SeP>1222<SeP>1290<SeP>1453<SeP>1143<SeP>2292<SeP>1216<SeP>1088<SeP>1331<SeP>2951<SeP>6480<SeP>1328<SeP>1295<SeP>1568<SeP>1969<SeP>1235<SeP>2220<SeP>5578<SeP>1518<SeP>1551<SeP>935<SeP>3181<SeP>1373<SeP>997<SeP>1108<SeP>1026<SeP>1014<SeP>2854<SeP>1141<SeP>1093<SeP>1625<SeP>3821<SeP>5445<SeP>1217<SeP>953<SeP>902<SeP>890<SeP>978<SeP>954<SeP>1014<SeP>1058<SeP>4308<SeP>1781<SeP>1358<SeP>1509<SeP>548<SeP>1173<SeP>1440<SeP>1130<SeP>993<SeP>978<SeP>2293<SeP>1284<SeP>993<SeP>971<SeP>1066<SeP>807<SeP>807<SeP>878<SeP>803<SeP>898<SeP>1029<SeP>814<SeP>825<SeP>795<SeP>870<SeP>860<SeP>680<SeP>843<SeP>880<SeP>828<SeP>914<SeP>765<SeP>856<SeP>737<SeP>805<SeP>1059<SeP>753<SeP>873<SeP>860<SeP>958<SeP>886<SeP>1041<SeP>946<SeP>489<SeP>911<SeP>869<SeP>979<SeP>1074<SeP>1030<SeP>1120<SeP>1179<SeP>952<SeP>947<SeP>942<SeP>889<SeP>813<SeP>910<SeP>1061<SeP>935<SeP>762<SeP>962<SeP>1074<SeP>867<SeP>1126<SeP>897<SeP>1059<SeP>1088<SeP>928<SeP>885<SeP>2184<SeP>1198<SeP>1104<SeP>1065<SeP>985<SeP>1139<SeP>954<SeP>819<SeP>714<SeP>888<SeP>1042<SeP>956<SeP>788<SeP>1082<SeP>1277<SeP>1093<SeP>1126<SeP>1297<SeP>1157<SeP>1288<SeP>1201<SeP>1332<SeP>1391<SeP>1693<SeP>1730<SeP>1367<SeP>687<SeP>882<SeP>1163<SeP>986<SeP>631<SeP>809<SeP>860<SeP>972<SeP>784<SeP>4975<SeP>3586<SeP>1938<SeP>1388<SeP>1101<SeP>859<SeP>1064<SeP>886<SeP>992<SeP>996<SeP>1045<SeP>966<SeP>1000<SeP>2230<SeP>1239<SeP>1119<SeP>1179<SeP>1334<SeP>1106<SeP>1081<SeP>902<SeP>1074<SeP>1089<SeP>1082<SeP>1001<SeP>1108<SeP>1096<SeP>987<SeP>949<SeP>1206<SeP>1106<SeP>1137<SeP>1178<SeP>1253<SeP>1296<SeP>1555<SeP>1128<SeP>1171<SeP>1077<SeP>1166<SeP>1936<SeP>1280<SeP>1542<SeP>1851<SeP>1420<SeP>1595<SeP>1987<SeP>1298<SeP>1178<SeP>1064<SeP>1369<SeP>1264<SeP>1452<SeP>1098<SeP>1323<SeP>1684<SeP>1657<SeP>1332<SeP>1454<SeP>1443<SeP>1232<SeP>1009<SeP>1087<SeP>1379<SeP>1064<SeP>1208<SeP>1305<SeP>1145<SeP>1483<SeP>1850<SeP>1320<SeP>1208<SeP>1610<SeP>1438<SeP>1073<SeP>1083<SeP>982<SeP>772<SeP>894<SeP>1017<SeP>991<SeP>1780<SeP>1077<SeP>1105<SeP>1165<SeP>784<SeP>1003<SeP>898<SeP>1407<SeP>827<SeP>819<SeP>1123<SeP>1242<SeP>1615<SeP>1397<SeP>987<SeP>1084<SeP>1066<SeP>1752<SeP>1109<SeP>1095<SeP>1051<SeP>1273<SeP>1244<SeP>987<SeP>942<SeP>1251<SeP>1000<SeP>851<SeP>861<SeP>1100<SeP>1542<SeP>1425<SeP>1481<SeP>1437<SeP>1146<SeP>889<SeP>1126<SeP>1290<SeP>1103<SeP>1135<SeP>995<SeP>1034<SeP>1092<SeP>1470<SeP>1352<SeP>1413<SeP>1438<SeP>1340<SeP>1571<SeP>1391<SeP>1281<SeP>1432<SeP>1446<SeP>1372<SeP>1240<SeP>1694<SeP>1385<SeP>1561<SeP>1460<SeP>1285<SeP>1410<SeP>1212<SeP>1298<SeP>1283<SeP>1481<SeP>1654<SeP>1210<SeP>1212<SeP>1334<SeP>1269<SeP>1230<SeP>1190<SeP>1501<SeP>1702<SeP>1776<SeP>1188<SeP>618<SeP>1399<SeP>1886<SeP>1166<SeP>1444<SeP>1164<SeP>1110<SeP>1329<SeP>1420<SeP>1196<SeP>1493<SeP>1449<SeP>1620<SeP>1492<SeP>1485<SeP>1588<SeP>1390<SeP>1283<SeP>1708<SeP>1509<SeP>1302<SeP>1147<SeP>1540<SeP>1796<SeP>1834<SeP>1699<SeP>1687<SeP>1648<SeP>1616<SeP>1584<SeP>1460";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "152<SeP>614<SeP>967<SeP>718<SeP>543<SeP>210<SeP>6966<SeP>502<SeP>9196<SeP>975<SeP>299<SeP>1220<SeP>795<SeP>719<SeP>146<SeP>447<SeP>143<SeP>667<SeP>368<SeP>3556<SeP>6971<SeP>7758<SeP>6788<SeP>8195<SeP>429<SeP>281<SeP>386<SeP>212<SeP>334<SeP>5935<SeP>76<SeP>386<SeP>183<SeP>489<SeP>503<SeP>9768<SeP>9287<SeP>9775<SeP>9589<SeP>6151<SeP>5555<SeP>8305<SeP>7315<SeP>8819<SeP>8791<SeP>7633<SeP>7736<SeP>8906<SeP>8153<SeP>9063<SeP>5532<SeP>5737<SeP>11657<SeP>7014<SeP>7889<SeP>7026<SeP>10360<SeP>12675<SeP>21599<SeP>9095<SeP>9024<SeP>10018<SeP>5977<SeP>9366<SeP>7272<SeP>8915<SeP>8678<SeP>6438<SeP>6156<SeP>7600<SeP>6199<SeP>2612<SeP>6037<SeP>5336<SeP>6445<SeP>7132<SeP>7213<SeP>3485<SeP>6118<SeP>6089<SeP>6189<SeP>4929<SeP>7030<SeP>4143<SeP>6199<SeP>6603<SeP>5224<SeP>5729<SeP>5280<SeP>15285<SeP>16627<SeP>35507<SeP>7529<SeP>9107<SeP>5374<SeP>6587<SeP>12658<SeP>6082<SeP>4420<SeP>5125<SeP>4939<SeP>5433<SeP>5894<SeP>6974<SeP>7355<SeP>5484<SeP>5809<SeP>4627<SeP>7156<SeP>8394<SeP>7310<SeP>8548<SeP>3564<SeP>7133<SeP>10562<SeP>7875<SeP>3333<SeP>3621<SeP>6796<SeP>8970<SeP>5144<SeP>7810<SeP>8133<SeP>3624<SeP>3056<SeP>1056<SeP>1654<SeP>1827<SeP>2485<SeP>860<SeP>1359<SeP>516<SeP>1454<SeP>1473<SeP>1166<SeP>849<SeP>1063<SeP>1043<SeP>758<SeP>1453<SeP>1363<SeP>1217<SeP>822<SeP>2264<SeP>2005<SeP>6307<SeP>10335<SeP>7812<SeP>8358<SeP>6867<SeP>12768<SeP>2330<SeP>10027<SeP>10864<SeP>9460<SeP>12955<SeP>8596<SeP>11020<SeP>11564<SeP>8213<SeP>13154<SeP>5743<SeP>3950<SeP>8088<SeP>21002<SeP>10057<SeP>5841<SeP>7752<SeP>10277<SeP>17092<SeP>7209<SeP>5625<SeP>6501<SeP>7782<SeP>25878<SeP>7461<SeP>8507<SeP>11637<SeP>4082<SeP>6875<SeP>4582<SeP>16789<SeP>4756<SeP>9499<SeP>11363<SeP>6557<SeP>8053<SeP>7015<SeP>5414<SeP>3539<SeP>7075<SeP>7511<SeP>4609<SeP>6495<SeP>8126<SeP>4832<SeP>20328<SeP>7630<SeP>5677<SeP>6691<SeP>8040<SeP>10437<SeP>6838<SeP>3758<SeP>4596<SeP>4913<SeP>3605<SeP>4338<SeP>3561<SeP>632<SeP>109<SeP>630<SeP>548<SeP>645<SeP>716<SeP>357<SeP>626<SeP>1255<SeP>1195<SeP>3162<SeP>22863<SeP>615<SeP>3426<SeP>3553<SeP>3016<SeP>2920<SeP>7141<SeP>4055<SeP>2381<SeP>3846<SeP>2953<SeP>2716<SeP>3436<SeP>4214<SeP>2039<SeP>3487<SeP>1261<SeP>2561<SeP>1301<SeP>1837<SeP>1670<SeP>1380<SeP>879<SeP>1228<SeP>1597<SeP>26514<SeP>1568<SeP>4017<SeP>3375<SeP>2870<SeP>3115<SeP>3054<SeP>1579<SeP>3677<SeP>2481<SeP>3547<SeP>2321<SeP>2876<SeP>3101<SeP>3207<SeP>6692<SeP>4676<SeP>3799<SeP>3642<SeP>3031<SeP>2857<SeP>4360<SeP>5621<SeP>8403<SeP>5319<SeP>2236<SeP>3258<SeP>2315<SeP>4084<SeP>4085<SeP>3667<SeP>2803<SeP>2575<SeP>5799<SeP>3293<SeP>6186<SeP>3683<SeP>5442<SeP>5332<SeP>5966<SeP>3683<SeP>17962<SeP>9987<SeP>12516<SeP>1726<SeP>2288<SeP>4875<SeP>3209<SeP>4026<SeP>3923<SeP>5010<SeP>3781<SeP>4752<SeP>4019<SeP>3729<SeP>3224<SeP>1364<SeP>1797<SeP>2104<SeP>3659<SeP>2322<SeP>3336<SeP>3977<SeP>3903<SeP>3931<SeP>3169<SeP>4217<SeP>3323<SeP>3209<SeP>6306<SeP>7600<SeP>5967<SeP>4540<SeP>4704<SeP>4557<SeP>3476<SeP>3947<SeP>4056<SeP>6268<SeP>5397<SeP>4501<SeP>3942<SeP>946<SeP>787<SeP>2229<SeP>1329<SeP>619<SeP>1847<SeP>1793<SeP>576<SeP>3122<SeP>3896<SeP>6524<SeP>10992<SeP>27442<SeP>5468<SeP>10144<SeP>18045<SeP>5337<SeP>4877<SeP>6119<SeP>3939<SeP>24730<SeP>5354<SeP>4710<SeP>4838<SeP>5620<SeP>16246<SeP>18947<SeP>4106<SeP>3728<SeP>4215<SeP>5279<SeP>5692<SeP>3605<SeP>2891<SeP>3359<SeP>4174<SeP>5662<SeP>4390<SeP>17610<SeP>5783<SeP>6101<SeP>5446<SeP>1359<SeP>3914<SeP>3873<SeP>4466<SeP>3562<SeP>3586<SeP>2954<SeP>3344<SeP>3563<SeP>3588<SeP>5847<SeP>8678<SeP>10077<SeP>8463<SeP>9012<SeP>7675<SeP>7168<SeP>4952<SeP>5164<SeP>3656<SeP>25535<SeP>3643<SeP>3038<SeP>4104<SeP>10169<SeP>5574<SeP>4653<SeP>3954<SeP>5072<SeP>3500<SeP>4039";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:33:45<SeP>2023-07-28 21:07:30<SeP>2023-07-30 07:41:15<SeP>2023-07-31 18:15:00<SeP>2023-08-02 04:48:45<SeP>2023-08-03 15:22:30<SeP>2023-08-05 01:56:15<SeP>2023-08-06 12:30:00<SeP>2023-08-07 23:03:45<SeP>2023-08-09 09:37:30<SeP>2023-08-10 20:11:15<SeP>2023-08-12 06:45:00<SeP>2023-08-13 17:18:45<SeP>2023-08-15 03:52:30<SeP>2023-08-16 14:26:15<SeP>2023-08-18 01:00:00<SeP>2023-08-19 11:33:45<SeP>2023-08-20 22:07:30<SeP>2023-08-22 08:41:15<SeP>2023-08-23 19:15:00<SeP>2023-08-25 05:48:45<SeP>2023-08-26 16:22:30<SeP>2023-08-28 02:56:15<SeP>2023-08-29 13:30:00<SeP>2023-08-31 00:03:45<SeP>2023-09-01 10:37:30<SeP>2023-09-02 21:11:15<SeP>2023-09-04 07:45:00<SeP>2023-09-05 18:18:45<SeP>2023-09-07 04:52:30<SeP>2023-09-08 15:26:15<SeP>2023-09-10 02:00:00<SeP>2023-09-11 12:33:45<SeP>2023-09-12 23:07:30<SeP>2023-09-14 09:41:15<SeP>2023-09-15 20:15:00<SeP>2023-09-17 06:48:45<SeP>2023-09-18 17:22:30<SeP>2023-09-20 03:56:15<SeP>2023-09-21 14:30:00<SeP>2023-09-23 01:03:45<SeP>2023-09-24 11:37:30<SeP>2023-09-25 22:11:15<SeP>2023-09-27 08:45:00<SeP>2023-09-28 19:18:45<SeP>2023-09-30 05:52:30<SeP>2023-10-01 16:26:15<SeP>2023-10-03 03:00:00<SeP>2023-10-04 13:33:45<SeP>2023-10-06 00:07:30<SeP>2023-10-07 10:41:15<SeP>2023-10-08 21:15:00<SeP>2023-10-10 07:48:45<SeP>2023-10-11 18:22:30<SeP>2023-10-13 04:56:15<SeP>2023-10-14 15:30:00<SeP>2023-10-16 02:03:45<SeP>2023-10-17 12:37:30<SeP>2023-10-18 23:11:15<SeP>2023-10-20 09:45:00<SeP>2023-10-21 20:18:45<SeP>2023-10-23 06:52:30<SeP>2023-10-24 17:26:15<SeP>2023-10-26 04:00:00<SeP>2023-10-27 14:33:45<SeP>2023-10-29 01:07:30<SeP>2023-10-30 11:41:15<SeP>2023-10-31 22:15:00<SeP>2023-11-02 08:48:45<SeP>2023-11-03 19:22:30<SeP>2023-11-05 04:56:15<SeP>2023-11-06 15:30:00<SeP>2023-11-08 02:03:45<SeP>2023-11-09 12:37:30<SeP>2023-11-10 23:11:15<SeP>2023-11-12 09:45:00<SeP>2023-11-13 20:18:45<SeP>2023-11-15 06:52:30<SeP>2023-11-16 17:26:15<SeP>2023-11-18 04:00:00<SeP>2023-11-19 14:33:45<SeP>2023-11-21 01:07:30<SeP>2023-11-22 11:41:15<SeP>2023-11-23 22:15:00<SeP>2023-11-25 08:48:45<SeP>2023-11-26 19:22:30<SeP>2023-11-28 05:56:15<SeP>2023-11-29 16:30:00<SeP>2023-12-01 03:03:45<SeP>2023-12-02 13:37:30<SeP>2023-12-04 00:11:15<SeP>2023-12-05 10:45:00<SeP>2023-12-06 21:18:45<SeP>2023-12-08 07:52:30<SeP>2023-12-09 18:26:15<SeP>2023-12-11 05:00:00<SeP>2023-12-12 15:33:45<SeP>2023-12-14 02:07:30<SeP>2023-12-15 12:41:15<SeP>2023-12-16 23:15:00<SeP>2023-12-18 09:48:45<SeP>2023-12-19 20:22:30<SeP>2023-12-21 06:56:15<SeP>2023-12-22 17:30:00<SeP>2023-12-24 04:03:45<SeP>2023-12-25 14:37:30<SeP>2023-12-27 01:11:15<SeP>2023-12-28 11:45:00<SeP>2023-12-29 22:18:45<SeP>2023-12-31 08:52:30<SeP>2024-01-01 19:26:15<SeP>2024-01-03 06:00:00<SeP>2024-01-04 16:33:45<SeP>2024-01-06 03:07:30<SeP>2024-01-07 13:41:15<SeP>2024-01-09 00:15:00<SeP>2024-01-10 10:48:45<SeP>2024-01-11 21:22:30<SeP>2024-01-13 07:56:15<SeP>2024-01-14 18:30:00<SeP>2024-01-16 05:03:45<SeP>2024-01-17 15:37:30<SeP>2024-01-19 02:11:15<SeP>2024-01-20 12:45:00<SeP>2024-01-21 23:18:45<SeP>2024-01-23 09:52:30<SeP>2024-01-24 20:26:15<SeP>2024-01-26 07:00:00<SeP>2024-01-27 17:33:45<SeP>2024-01-29 04:07:30<SeP>2024-01-30 14:41:15<SeP>2024-02-01 01:15:00<SeP>2024-02-02 11:48:45<SeP>2024-02-03 22:22:30<SeP>2024-02-05 08:56:15<SeP>2024-02-06 19:30:00<SeP>2024-02-08 06:03:45<SeP>2024-02-09 16:37:30<SeP>2024-02-11 03:11:15<SeP>2024-02-12 13:45:00<SeP>2024-02-14 00:18:45<SeP>2024-02-15 10:52:30<SeP>2024-02-16 21:26:15<SeP>2024-02-18 08:00:00<SeP>2024-02-19 18:33:45<SeP>2024-02-21 05:07:30<SeP>2024-02-22 15:41:15<SeP>2024-02-24 02:15:00<SeP>2024-02-25 12:48:45<SeP>2024-02-26 23:22:30<SeP>2024-02-28 09:56:15<SeP>2024-02-29 20:30:00<SeP>2024-03-02 07:03:45<SeP>2024-03-03 17:37:30<SeP>2024-03-05 04:11:15<SeP>2024-03-06 14:45:00<SeP>2024-03-08 01:18:45<SeP>2024-03-09 11:52:30<SeP>2024-03-10 23:26:15<SeP>2024-03-12 10:00:00<SeP>2024-03-13 20:33:45<SeP>2024-03-15 07:07:30<SeP>2024-03-16 17:41:15<SeP>2024-03-18 04:15:00<SeP>2024-03-19 14:48:45<SeP>2024-03-21 01:22:30<SeP>2024-03-22 11:56:15<SeP>2024-03-23 22:30:00<SeP>2024-03-25 09:03:45<SeP>2024-03-26 19:37:30<SeP>2024-03-28 06:11:15<SeP>2024-03-29 16:45:00<SeP>2024-03-31 03:18:45<SeP>2024-04-01 13:52:30<SeP>2024-04-03 00:26:15<SeP>2024-04-04 11:00:00<SeP>2024-04-05 21:33:45<SeP>2024-04-07 08:07:30<SeP>2024-04-08 18:41:15<SeP>2024-04-10 05:15:00<SeP>2024-04-11 15:48:45<SeP>2024-04-13 02:22:30<SeP>2024-04-14 12:56:15<SeP>2024-04-15 23:30:00<SeP>2024-04-17 10:03:45<SeP>2024-04-18 20:37:30<SeP>2024-04-20 07:11:15<SeP>2024-04-21 17:45:00<SeP>2024-04-23 04:18:45<SeP>2024-04-24 14:52:30<SeP>2024-04-26 01:26:15<SeP>2024-04-27 12:00:00<SeP>2024-04-28 22:33:45<SeP>2024-04-30 09:07:30<SeP>2024-05-01 19:41:15<SeP>2024-05-03 06:15:00<SeP>2024-05-04 16:48:45<SeP>2024-05-06 03:22:30<SeP>2024-05-07 13:56:15<SeP>2024-05-09 00:30:00<SeP>2024-05-10 11:03:45<SeP>2024-05-11 21:37:30<SeP>2024-05-13 08:11:15<SeP>2024-05-14 18:45:00<SeP>2024-05-16 05:18:45<SeP>2024-05-17 15:52:30<SeP>2024-05-19 02:26:15<SeP>2024-05-20 13:00:00<SeP>2024-05-21 23:33:45<SeP>2024-05-23 10:07:30<SeP>2024-05-24 20:41:15<SeP>2024-05-26 07:15:00<SeP>2024-05-27 17:48:45<SeP>2024-05-29 04:22:30<SeP>2024-05-30 14:56:15<SeP>2024-06-01 01:30:00<SeP>2024-06-02 12:03:45<SeP>2024-06-03 22:37:30<SeP>2024-06-05 09:11:15<SeP>2024-06-06 19:45:00<SeP>2024-06-08 06:18:45<SeP>2024-06-09 16:52:30<SeP>2024-06-11 03:26:15<SeP>2024-06-12 14:00:00<SeP>2024-06-14 00:33:45<SeP>2024-06-15 11:07:30<SeP>2024-06-16 21:41:15<SeP>2024-06-18 08:15:00<SeP>2024-06-19 18:48:45<SeP>2024-06-21 05:22:30<SeP>2024-06-22 15:56:15<SeP>2024-06-24 02:30:00<SeP>2024-06-25 13:03:45<SeP>2024-06-26 23:37:30<SeP>2024-06-28 10:11:15<SeP>2024-06-29 20:45:00<SeP>2024-07-01 07:18:45<SeP>2024-07-02 17:52:30<SeP>2024-07-04 04:26:15<SeP>2024-07-05 15:00:00<SeP>2024-07-07 01:33:45<SeP>2024-07-08 12:07:30<SeP>2024-07-09 22:41:15<SeP>2024-07-11 09:15:00<SeP>2024-07-12 19:48:45<SeP>2024-07-14 06:22:30<SeP>2024-07-15 16:56:15<SeP>2024-07-17 03:30:00<SeP>2024-07-18 14:03:45<SeP>2024-07-20 00:37:30<SeP>2024-07-21 11:11:15<SeP>2024-07-22 21:45:00<SeP>2024-07-24 08:18:45<SeP>2024-07-25 18:52:30<SeP>2024-07-27 05:26:15<SeP>2024-07-28 16:00:00<SeP>2024-07-30 02:33:45<SeP>2024-07-31 13:07:30<SeP>2024-08-01 23:41:15<SeP>2024-08-03 10:15:00<SeP>2024-08-04 20:48:45<SeP>2024-08-06 07:22:30<SeP>2024-08-07 17:56:15<SeP>2024-08-09 04:30:00<SeP>2024-08-10 15:03:45<SeP>2024-08-12 01:37:30<SeP>2024-08-13 12:11:15<SeP>2024-08-14 22:45:00<SeP>2024-08-16 09:18:45<SeP>2024-08-17 19:52:30<SeP>2024-08-19 06:26:15<SeP>2024-08-20 17:00:00<SeP>2024-08-22 03:33:45<SeP>2024-08-23 14:07:30<SeP>2024-08-25 00:41:15<SeP>2024-08-26 11:15:00<SeP>2024-08-27 21:48:45<SeP>2024-08-29 08:22:30<SeP>2024-08-30 18:56:15<SeP>2024-09-01 05:30:00<SeP>2024-09-02 16:03:45<SeP>2024-09-04 02:37:30<SeP>2024-09-05 13:11:15<SeP>2024-09-06 23:45:00<SeP>2024-09-08 10:18:45<SeP>2024-09-09 20:52:30<SeP>2024-09-11 07:26:15<SeP>2024-09-12 18:00:00<SeP>2024-09-14 04:33:45<SeP>2024-09-15 15:07:30<SeP>2024-09-17 01:41:15<SeP>2024-09-18 12:15:00<SeP>2024-09-19 22:48:45<SeP>2024-09-21 09:22:30<SeP>2024-09-22 19:56:15<SeP>2024-09-24 06:30:00<SeP>2024-09-25 17:03:45<SeP>2024-09-27 03:37:30<SeP>2024-09-28 14:11:15<SeP>2024-09-30 00:45:00<SeP>2024-10-01 11:18:45<SeP>2024-10-02 21:52:30<SeP>2024-10-04 08:26:15<SeP>2024-10-05 19:00:00<SeP>2024-10-07 05:33:45<SeP>2024-10-08 16:07:30<SeP>2024-10-10 02:41:15<SeP>2024-10-11 13:15:00<SeP>2024-10-12 23:48:45<SeP>2024-10-14 10:22:30<SeP>2024-10-15 20:56:15<SeP>2024-10-17 07:30:00<SeP>2024-10-18 18:03:45<SeP>2024-10-20 04:37:30<SeP>2024-10-21 15:11:15<SeP>2024-10-23 01:45:00<SeP>2024-10-24 12:18:45<SeP>2024-10-25 22:52:30<SeP>2024-10-27 09:26:15<SeP>2024-10-28 20:00:00<SeP>2024-10-30 06:33:45<SeP>2024-10-31 17:07:30<SeP>2024-11-02 03:41:15<SeP>2024-11-03 13:15:00<SeP>2024-11-04 23:48:45<SeP>2024-11-06 10:22:30<SeP>2024-11-07 20:56:15<SeP>2024-11-09 07:30:00<SeP>2024-11-10 18:03:45<SeP>2024-11-12 04:37:30<SeP>2024-11-13 15:11:15<SeP>2024-11-15 01:45:00<SeP>2024-11-16 12:18:45<SeP>2024-11-17 22:52:30<SeP>2024-11-19 09:26:15<SeP>2024-11-20 20:00:00<SeP>2024-11-22 06:33:45<SeP>2024-11-23 17:07:30<SeP>2024-11-25 03:41:15<SeP>2024-11-26 14:15:00<SeP>2024-11-28 00:48:45<SeP>2024-11-29 11:22:30<SeP>2024-11-30 21:56:15<SeP>2024-12-02 08:30:00<SeP>2024-12-03 19:03:45<SeP>2024-12-05 05:37:30<SeP>2024-12-06 16:11:15<SeP>2024-12-08 02:45:00<SeP>2024-12-09 13:18:45<SeP>2024-12-10 23:52:30<SeP>2024-12-12 10:26:15<SeP>2024-12-13 21:00:00<SeP>2024-12-15 07:33:45<SeP>2024-12-16 18:07:30<SeP>2024-12-18 04:41:15<SeP>2024-12-19 15:15:00<SeP>2024-12-21 01:48:45<SeP>2024-12-22 12:22:30<SeP>2024-12-23 22:56:15<SeP>2024-12-25 09:30:00<SeP>2024-12-26 20:03:45<SeP>2024-12-28 06:37:30<SeP>2024-12-29 17:11:15<SeP>2024-12-31 03:45:00<SeP>2025-01-01 14:18:45<SeP>2025-01-03 00:52:30<SeP>2025-01-04 11:26:15<SeP>2025-01-05 22:00:00<SeP>2025-01-07 08:33:45<SeP>2025-01-08 19:07:30<SeP>2025-01-10 05:41:15<SeP>2025-01-11 16:15:00<SeP>2025-01-13 02:48:45<SeP>2025-01-14 13:22:30<SeP>2025-01-15 23:56:15<SeP>2025-01-17 10:30:00<SeP>2025-01-18 21:03:45<SeP>2025-01-20 07:37:30<SeP>2025-01-21 18:11:15<SeP>2025-01-23 04:45:00<SeP>2025-01-24 15:18:45<SeP>2025-01-26 01:52:30<SeP>2025-01-27 12:26:15<SeP>2025-01-28 23:00:00<SeP>2025-01-30 09:33:45<SeP>2025-01-31 20:07:30<SeP>2025-02-02 06:41:15<SeP>2025-02-03 17:15:00<SeP>2025-02-05 03:48:45<SeP>2025-02-06 14:22:30<SeP>2025-02-08 00:56:15<SeP>2025-02-09 11:30:00<SeP>2025-02-10 22:03:45<SeP>2025-02-12 08:37:30<SeP>2025-02-13 19:11:15<SeP>2025-02-15 05:45:00<SeP>2025-02-16 16:18:45<SeP>2025-02-18 02:52:30<SeP>2025-02-19 13:26:15";
  const itemLabel       = "Scans";
  const itemData        = "759<SeP>1453<SeP>1378<SeP>1419<SeP>1223<SeP>1682<SeP>997<SeP>982<SeP>1087<SeP>3333<SeP>1467<SeP>2855<SeP>1809<SeP>2549<SeP>744<SeP>813<SeP>1421<SeP>1578<SeP>2343<SeP>1519<SeP>1527<SeP>986<SeP>868<SeP>1076<SeP>1184<SeP>918<SeP>733<SeP>914<SeP>3597<SeP>993<SeP>828<SeP>1334<SeP>1202<SeP>859<SeP>1717<SeP>2444<SeP>2876<SeP>1771<SeP>1429<SeP>1729<SeP>1252<SeP>1632<SeP>1885<SeP>1997<SeP>1685<SeP>1641<SeP>1572<SeP>1690<SeP>1660<SeP>1567<SeP>1796<SeP>1807<SeP>1749<SeP>1546<SeP>3218<SeP>1366<SeP>1566<SeP>2102<SeP>1860<SeP>2183<SeP>1863<SeP>3274<SeP>1294<SeP>1542<SeP>1568<SeP>1245<SeP>1829<SeP>1701<SeP>1222<SeP>1290<SeP>1453<SeP>1143<SeP>2292<SeP>1216<SeP>1088<SeP>1331<SeP>2951<SeP>6480<SeP>1328<SeP>1295<SeP>1568<SeP>1969<SeP>1235<SeP>2220<SeP>5578<SeP>1518<SeP>1551<SeP>935<SeP>3181<SeP>1373<SeP>997<SeP>1108<SeP>1026<SeP>1014<SeP>2854<SeP>1141<SeP>1093<SeP>1625<SeP>3821<SeP>5445<SeP>1217<SeP>953<SeP>902<SeP>890<SeP>978<SeP>954<SeP>1014<SeP>1058<SeP>4308<SeP>1781<SeP>1358<SeP>1509<SeP>548<SeP>1173<SeP>1440<SeP>1130<SeP>993<SeP>978<SeP>2293<SeP>1284<SeP>993<SeP>971<SeP>1066<SeP>807<SeP>807<SeP>878<SeP>803<SeP>898<SeP>1029<SeP>814<SeP>825<SeP>795<SeP>870<SeP>860<SeP>680<SeP>843<SeP>880<SeP>828<SeP>914<SeP>765<SeP>856<SeP>737<SeP>805<SeP>1059<SeP>753<SeP>873<SeP>860<SeP>958<SeP>886<SeP>1041<SeP>946<SeP>489<SeP>911<SeP>869<SeP>979<SeP>1074<SeP>1030<SeP>1120<SeP>1179<SeP>952<SeP>947<SeP>942<SeP>889<SeP>813<SeP>910<SeP>1061<SeP>935<SeP>762<SeP>962<SeP>1074<SeP>867<SeP>1126<SeP>897<SeP>1059<SeP>1088<SeP>928<SeP>885<SeP>2184<SeP>1198<SeP>1104<SeP>1065<SeP>985<SeP>1139<SeP>954<SeP>819<SeP>714<SeP>888<SeP>1042<SeP>956<SeP>788<SeP>1082<SeP>1277<SeP>1093<SeP>1126<SeP>1297<SeP>1157<SeP>1288<SeP>1201<SeP>1332<SeP>1391<SeP>1693<SeP>1730<SeP>1367<SeP>687<SeP>882<SeP>1163<SeP>986<SeP>631<SeP>809<SeP>860<SeP>972<SeP>784<SeP>4975<SeP>3586<SeP>1938<SeP>1388<SeP>1101<SeP>859<SeP>1064<SeP>886<SeP>992<SeP>996<SeP>1045<SeP>966<SeP>1000<SeP>2230<SeP>1239<SeP>1119<SeP>1179<SeP>1334<SeP>1106<SeP>1081<SeP>902<SeP>1074<SeP>1089<SeP>1082<SeP>1001<SeP>1108<SeP>1096<SeP>987<SeP>949<SeP>1206<SeP>1106<SeP>1137<SeP>1178<SeP>1253<SeP>1296<SeP>1555<SeP>1128<SeP>1171<SeP>1077<SeP>1166<SeP>1936<SeP>1280<SeP>1542<SeP>1851<SeP>1420<SeP>1595<SeP>1987<SeP>1298<SeP>1178<SeP>1064<SeP>1369<SeP>1264<SeP>1452<SeP>1098<SeP>1323<SeP>1684<SeP>1657<SeP>1332<SeP>1454<SeP>1443<SeP>1232<SeP>1009<SeP>1087<SeP>1379<SeP>1064<SeP>1208<SeP>1305<SeP>1145<SeP>1483<SeP>1850<SeP>1320<SeP>1208<SeP>1610<SeP>1438<SeP>1073<SeP>1083<SeP>982<SeP>772<SeP>894<SeP>1017<SeP>991<SeP>1780<SeP>1077<SeP>1105<SeP>1165<SeP>784<SeP>1003<SeP>898<SeP>1407<SeP>827<SeP>819<SeP>1123<SeP>1242<SeP>1615<SeP>1397<SeP>987<SeP>1084<SeP>1066<SeP>1752<SeP>1109<SeP>1095<SeP>1051<SeP>1273<SeP>1244<SeP>987<SeP>942<SeP>1251<SeP>1000<SeP>851<SeP>861<SeP>1100<SeP>1542<SeP>1425<SeP>1481<SeP>1437<SeP>1146<SeP>889<SeP>1126<SeP>1290<SeP>1103<SeP>1135<SeP>995<SeP>1034<SeP>1092<SeP>1470<SeP>1352<SeP>1413<SeP>1438<SeP>1340<SeP>1571<SeP>1391<SeP>1281<SeP>1432<SeP>1446<SeP>1372<SeP>1240<SeP>1694<SeP>1385<SeP>1561<SeP>1460<SeP>1285<SeP>1410<SeP>1212<SeP>1298<SeP>1283<SeP>1481<SeP>1654<SeP>1210<SeP>1212<SeP>1334<SeP>1269<SeP>1230<SeP>1190<SeP>1501<SeP>1702<SeP>1776<SeP>1188<SeP>618<SeP>1399<SeP>1886<SeP>1166<SeP>1444<SeP>1164<SeP>1110<SeP>1329<SeP>1420<SeP>1196<SeP>1493<SeP>1449<SeP>1620<SeP>1492<SeP>1485<SeP>1588<SeP>1390<SeP>1283<SeP>1708<SeP>1509<SeP>1302<SeP>1147<SeP>1540<SeP>1796<SeP>1834<SeP>1699<SeP>1687<SeP>1648<SeP>1616<SeP>1584<SeP>1460";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:33:45<SeP>2023-07-28 21:07:30<SeP>2023-07-30 07:41:15<SeP>2023-07-31 18:15:00<SeP>2023-08-02 04:48:45<SeP>2023-08-03 15:22:30<SeP>2023-08-05 01:56:15<SeP>2023-08-06 12:30:00<SeP>2023-08-07 23:03:45<SeP>2023-08-09 09:37:30<SeP>2023-08-10 20:11:15<SeP>2023-08-12 06:45:00<SeP>2023-08-13 17:18:45<SeP>2023-08-15 03:52:30<SeP>2023-08-16 14:26:15<SeP>2023-08-18 01:00:00<SeP>2023-08-19 11:33:45<SeP>2023-08-20 22:07:30<SeP>2023-08-22 08:41:15<SeP>2023-08-23 19:15:00<SeP>2023-08-25 05:48:45<SeP>2023-08-26 16:22:30<SeP>2023-08-28 02:56:15<SeP>2023-08-29 13:30:00<SeP>2023-08-31 00:03:45<SeP>2023-09-01 10:37:30<SeP>2023-09-02 21:11:15<SeP>2023-09-04 07:45:00<SeP>2023-09-05 18:18:45<SeP>2023-09-07 04:52:30<SeP>2023-09-08 15:26:15<SeP>2023-09-10 02:00:00<SeP>2023-09-11 12:33:45<SeP>2023-09-12 23:07:30<SeP>2023-09-14 09:41:15<SeP>2023-09-15 20:15:00<SeP>2023-09-17 06:48:45<SeP>2023-09-18 17:22:30<SeP>2023-09-20 03:56:15<SeP>2023-09-21 14:30:00<SeP>2023-09-23 01:03:45<SeP>2023-09-24 11:37:30<SeP>2023-09-25 22:11:15<SeP>2023-09-27 08:45:00<SeP>2023-09-28 19:18:45<SeP>2023-09-30 05:52:30<SeP>2023-10-01 16:26:15<SeP>2023-10-03 03:00:00<SeP>2023-10-04 13:33:45<SeP>2023-10-06 00:07:30<SeP>2023-10-07 10:41:15<SeP>2023-10-08 21:15:00<SeP>2023-10-10 07:48:45<SeP>2023-10-11 18:22:30<SeP>2023-10-13 04:56:15<SeP>2023-10-14 15:30:00<SeP>2023-10-16 02:03:45<SeP>2023-10-17 12:37:30<SeP>2023-10-18 23:11:15<SeP>2023-10-20 09:45:00<SeP>2023-10-21 20:18:45<SeP>2023-10-23 06:52:30<SeP>2023-10-24 17:26:15<SeP>2023-10-26 04:00:00<SeP>2023-10-27 14:33:45<SeP>2023-10-29 01:07:30<SeP>2023-10-30 11:41:15<SeP>2023-10-31 22:15:00<SeP>2023-11-02 08:48:45<SeP>2023-11-03 19:22:30<SeP>2023-11-05 04:56:15<SeP>2023-11-06 15:30:00<SeP>2023-11-08 02:03:45<SeP>2023-11-09 12:37:30<SeP>2023-11-10 23:11:15<SeP>2023-11-12 09:45:00<SeP>2023-11-13 20:18:45<SeP>2023-11-15 06:52:30<SeP>2023-11-16 17:26:15<SeP>2023-11-18 04:00:00<SeP>2023-11-19 14:33:45<SeP>2023-11-21 01:07:30<SeP>2023-11-22 11:41:15<SeP>2023-11-23 22:15:00<SeP>2023-11-25 08:48:45<SeP>2023-11-26 19:22:30<SeP>2023-11-28 05:56:15<SeP>2023-11-29 16:30:00<SeP>2023-12-01 03:03:45<SeP>2023-12-02 13:37:30<SeP>2023-12-04 00:11:15<SeP>2023-12-05 10:45:00<SeP>2023-12-06 21:18:45<SeP>2023-12-08 07:52:30<SeP>2023-12-09 18:26:15<SeP>2023-12-11 05:00:00<SeP>2023-12-12 15:33:45<SeP>2023-12-14 02:07:30<SeP>2023-12-15 12:41:15<SeP>2023-12-16 23:15:00<SeP>2023-12-18 09:48:45<SeP>2023-12-19 20:22:30<SeP>2023-12-21 06:56:15<SeP>2023-12-22 17:30:00<SeP>2023-12-24 04:03:45<SeP>2023-12-25 14:37:30<SeP>2023-12-27 01:11:15<SeP>2023-12-28 11:45:00<SeP>2023-12-29 22:18:45<SeP>2023-12-31 08:52:30<SeP>2024-01-01 19:26:15<SeP>2024-01-03 06:00:00<SeP>2024-01-04 16:33:45<SeP>2024-01-06 03:07:30<SeP>2024-01-07 13:41:15<SeP>2024-01-09 00:15:00<SeP>2024-01-10 10:48:45<SeP>2024-01-11 21:22:30<SeP>2024-01-13 07:56:15<SeP>2024-01-14 18:30:00<SeP>2024-01-16 05:03:45<SeP>2024-01-17 15:37:30<SeP>2024-01-19 02:11:15<SeP>2024-01-20 12:45:00<SeP>2024-01-21 23:18:45<SeP>2024-01-23 09:52:30<SeP>2024-01-24 20:26:15<SeP>2024-01-26 07:00:00<SeP>2024-01-27 17:33:45<SeP>2024-01-29 04:07:30<SeP>2024-01-30 14:41:15<SeP>2024-02-01 01:15:00<SeP>2024-02-02 11:48:45<SeP>2024-02-03 22:22:30<SeP>2024-02-05 08:56:15<SeP>2024-02-06 19:30:00<SeP>2024-02-08 06:03:45<SeP>2024-02-09 16:37:30<SeP>2024-02-11 03:11:15<SeP>2024-02-12 13:45:00<SeP>2024-02-14 00:18:45<SeP>2024-02-15 10:52:30<SeP>2024-02-16 21:26:15<SeP>2024-02-18 08:00:00<SeP>2024-02-19 18:33:45<SeP>2024-02-21 05:07:30<SeP>2024-02-22 15:41:15<SeP>2024-02-24 02:15:00<SeP>2024-02-25 12:48:45<SeP>2024-02-26 23:22:30<SeP>2024-02-28 09:56:15<SeP>2024-02-29 20:30:00<SeP>2024-03-02 07:03:45<SeP>2024-03-03 17:37:30<SeP>2024-03-05 04:11:15<SeP>2024-03-06 14:45:00<SeP>2024-03-08 01:18:45<SeP>2024-03-09 11:52:30<SeP>2024-03-10 23:26:15<SeP>2024-03-12 10:00:00<SeP>2024-03-13 20:33:45<SeP>2024-03-15 07:07:30<SeP>2024-03-16 17:41:15<SeP>2024-03-18 04:15:00<SeP>2024-03-19 14:48:45<SeP>2024-03-21 01:22:30<SeP>2024-03-22 11:56:15<SeP>2024-03-23 22:30:00<SeP>2024-03-25 09:03:45<SeP>2024-03-26 19:37:30<SeP>2024-03-28 06:11:15<SeP>2024-03-29 16:45:00<SeP>2024-03-31 03:18:45<SeP>2024-04-01 13:52:30<SeP>2024-04-03 00:26:15<SeP>2024-04-04 11:00:00<SeP>2024-04-05 21:33:45<SeP>2024-04-07 08:07:30<SeP>2024-04-08 18:41:15<SeP>2024-04-10 05:15:00<SeP>2024-04-11 15:48:45<SeP>2024-04-13 02:22:30<SeP>2024-04-14 12:56:15<SeP>2024-04-15 23:30:00<SeP>2024-04-17 10:03:45<SeP>2024-04-18 20:37:30<SeP>2024-04-20 07:11:15<SeP>2024-04-21 17:45:00<SeP>2024-04-23 04:18:45<SeP>2024-04-24 14:52:30<SeP>2024-04-26 01:26:15<SeP>2024-04-27 12:00:00<SeP>2024-04-28 22:33:45<SeP>2024-04-30 09:07:30<SeP>2024-05-01 19:41:15<SeP>2024-05-03 06:15:00<SeP>2024-05-04 16:48:45<SeP>2024-05-06 03:22:30<SeP>2024-05-07 13:56:15<SeP>2024-05-09 00:30:00<SeP>2024-05-10 11:03:45<SeP>2024-05-11 21:37:30<SeP>2024-05-13 08:11:15<SeP>2024-05-14 18:45:00<SeP>2024-05-16 05:18:45<SeP>2024-05-17 15:52:30<SeP>2024-05-19 02:26:15<SeP>2024-05-20 13:00:00<SeP>2024-05-21 23:33:45<SeP>2024-05-23 10:07:30<SeP>2024-05-24 20:41:15<SeP>2024-05-26 07:15:00<SeP>2024-05-27 17:48:45<SeP>2024-05-29 04:22:30<SeP>2024-05-30 14:56:15<SeP>2024-06-01 01:30:00<SeP>2024-06-02 12:03:45<SeP>2024-06-03 22:37:30<SeP>2024-06-05 09:11:15<SeP>2024-06-06 19:45:00<SeP>2024-06-08 06:18:45<SeP>2024-06-09 16:52:30<SeP>2024-06-11 03:26:15<SeP>2024-06-12 14:00:00<SeP>2024-06-14 00:33:45<SeP>2024-06-15 11:07:30<SeP>2024-06-16 21:41:15<SeP>2024-06-18 08:15:00<SeP>2024-06-19 18:48:45<SeP>2024-06-21 05:22:30<SeP>2024-06-22 15:56:15<SeP>2024-06-24 02:30:00<SeP>2024-06-25 13:03:45<SeP>2024-06-26 23:37:30<SeP>2024-06-28 10:11:15<SeP>2024-06-29 20:45:00<SeP>2024-07-01 07:18:45<SeP>2024-07-02 17:52:30<SeP>2024-07-04 04:26:15<SeP>2024-07-05 15:00:00<SeP>2024-07-07 01:33:45<SeP>2024-07-08 12:07:30<SeP>2024-07-09 22:41:15<SeP>2024-07-11 09:15:00<SeP>2024-07-12 19:48:45<SeP>2024-07-14 06:22:30<SeP>2024-07-15 16:56:15<SeP>2024-07-17 03:30:00<SeP>2024-07-18 14:03:45<SeP>2024-07-20 00:37:30<SeP>2024-07-21 11:11:15<SeP>2024-07-22 21:45:00<SeP>2024-07-24 08:18:45<SeP>2024-07-25 18:52:30<SeP>2024-07-27 05:26:15<SeP>2024-07-28 16:00:00<SeP>2024-07-30 02:33:45<SeP>2024-07-31 13:07:30<SeP>2024-08-01 23:41:15<SeP>2024-08-03 10:15:00<SeP>2024-08-04 20:48:45<SeP>2024-08-06 07:22:30<SeP>2024-08-07 17:56:15<SeP>2024-08-09 04:30:00<SeP>2024-08-10 15:03:45<SeP>2024-08-12 01:37:30<SeP>2024-08-13 12:11:15<SeP>2024-08-14 22:45:00<SeP>2024-08-16 09:18:45<SeP>2024-08-17 19:52:30<SeP>2024-08-19 06:26:15<SeP>2024-08-20 17:00:00<SeP>2024-08-22 03:33:45<SeP>2024-08-23 14:07:30<SeP>2024-08-25 00:41:15<SeP>2024-08-26 11:15:00<SeP>2024-08-27 21:48:45<SeP>2024-08-29 08:22:30<SeP>2024-08-30 18:56:15<SeP>2024-09-01 05:30:00<SeP>2024-09-02 16:03:45<SeP>2024-09-04 02:37:30<SeP>2024-09-05 13:11:15<SeP>2024-09-06 23:45:00<SeP>2024-09-08 10:18:45<SeP>2024-09-09 20:52:30<SeP>2024-09-11 07:26:15<SeP>2024-09-12 18:00:00<SeP>2024-09-14 04:33:45<SeP>2024-09-15 15:07:30<SeP>2024-09-17 01:41:15<SeP>2024-09-18 12:15:00<SeP>2024-09-19 22:48:45<SeP>2024-09-21 09:22:30<SeP>2024-09-22 19:56:15<SeP>2024-09-24 06:30:00<SeP>2024-09-25 17:03:45<SeP>2024-09-27 03:37:30<SeP>2024-09-28 14:11:15<SeP>2024-09-30 00:45:00<SeP>2024-10-01 11:18:45<SeP>2024-10-02 21:52:30<SeP>2024-10-04 08:26:15<SeP>2024-10-05 19:00:00<SeP>2024-10-07 05:33:45<SeP>2024-10-08 16:07:30<SeP>2024-10-10 02:41:15<SeP>2024-10-11 13:15:00<SeP>2024-10-12 23:48:45<SeP>2024-10-14 10:22:30<SeP>2024-10-15 20:56:15<SeP>2024-10-17 07:30:00<SeP>2024-10-18 18:03:45<SeP>2024-10-20 04:37:30<SeP>2024-10-21 15:11:15<SeP>2024-10-23 01:45:00<SeP>2024-10-24 12:18:45<SeP>2024-10-25 22:52:30<SeP>2024-10-27 09:26:15<SeP>2024-10-28 20:00:00<SeP>2024-10-30 06:33:45<SeP>2024-10-31 17:07:30<SeP>2024-11-02 03:41:15<SeP>2024-11-03 13:15:00<SeP>2024-11-04 23:48:45<SeP>2024-11-06 10:22:30<SeP>2024-11-07 20:56:15<SeP>2024-11-09 07:30:00<SeP>2024-11-10 18:03:45<SeP>2024-11-12 04:37:30<SeP>2024-11-13 15:11:15<SeP>2024-11-15 01:45:00<SeP>2024-11-16 12:18:45<SeP>2024-11-17 22:52:30<SeP>2024-11-19 09:26:15<SeP>2024-11-20 20:00:00<SeP>2024-11-22 06:33:45<SeP>2024-11-23 17:07:30<SeP>2024-11-25 03:41:15<SeP>2024-11-26 14:15:00<SeP>2024-11-28 00:48:45<SeP>2024-11-29 11:22:30<SeP>2024-11-30 21:56:15<SeP>2024-12-02 08:30:00<SeP>2024-12-03 19:03:45<SeP>2024-12-05 05:37:30<SeP>2024-12-06 16:11:15<SeP>2024-12-08 02:45:00<SeP>2024-12-09 13:18:45<SeP>2024-12-10 23:52:30<SeP>2024-12-12 10:26:15<SeP>2024-12-13 21:00:00<SeP>2024-12-15 07:33:45<SeP>2024-12-16 18:07:30<SeP>2024-12-18 04:41:15<SeP>2024-12-19 15:15:00<SeP>2024-12-21 01:48:45<SeP>2024-12-22 12:22:30<SeP>2024-12-23 22:56:15<SeP>2024-12-25 09:30:00<SeP>2024-12-26 20:03:45<SeP>2024-12-28 06:37:30<SeP>2024-12-29 17:11:15<SeP>2024-12-31 03:45:00<SeP>2025-01-01 14:18:45<SeP>2025-01-03 00:52:30<SeP>2025-01-04 11:26:15<SeP>2025-01-05 22:00:00<SeP>2025-01-07 08:33:45<SeP>2025-01-08 19:07:30<SeP>2025-01-10 05:41:15<SeP>2025-01-11 16:15:00<SeP>2025-01-13 02:48:45<SeP>2025-01-14 13:22:30<SeP>2025-01-15 23:56:15<SeP>2025-01-17 10:30:00<SeP>2025-01-18 21:03:45<SeP>2025-01-20 07:37:30<SeP>2025-01-21 18:11:15<SeP>2025-01-23 04:45:00<SeP>2025-01-24 15:18:45<SeP>2025-01-26 01:52:30<SeP>2025-01-27 12:26:15<SeP>2025-01-28 23:00:00<SeP>2025-01-30 09:33:45<SeP>2025-01-31 20:07:30<SeP>2025-02-02 06:41:15<SeP>2025-02-03 17:15:00<SeP>2025-02-05 03:48:45<SeP>2025-02-06 14:22:30<SeP>2025-02-08 00:56:15<SeP>2025-02-09 11:30:00<SeP>2025-02-10 22:03:45<SeP>2025-02-12 08:37:30<SeP>2025-02-13 19:11:15<SeP>2025-02-15 05:45:00<SeP>2025-02-16 16:18:45<SeP>2025-02-18 02:52:30<SeP>2025-02-19 13:26:15";
  const itemLabel       = "Attacks";
  const itemData        = "152<SeP>614<SeP>967<SeP>718<SeP>543<SeP>210<SeP>6966<SeP>502<SeP>9196<SeP>975<SeP>299<SeP>1220<SeP>795<SeP>719<SeP>146<SeP>447<SeP>143<SeP>667<SeP>368<SeP>3556<SeP>6971<SeP>7758<SeP>6788<SeP>8195<SeP>429<SeP>281<SeP>386<SeP>212<SeP>334<SeP>5935<SeP>76<SeP>386<SeP>183<SeP>489<SeP>503<SeP>9768<SeP>9287<SeP>9775<SeP>9589<SeP>6151<SeP>5555<SeP>8305<SeP>7315<SeP>8819<SeP>8791<SeP>7633<SeP>7736<SeP>8906<SeP>8153<SeP>9063<SeP>5532<SeP>5737<SeP>11657<SeP>7014<SeP>7889<SeP>7026<SeP>10360<SeP>12675<SeP>21599<SeP>9095<SeP>9024<SeP>10018<SeP>5977<SeP>9366<SeP>7272<SeP>8915<SeP>8678<SeP>6438<SeP>6156<SeP>7600<SeP>6199<SeP>2612<SeP>6037<SeP>5336<SeP>6445<SeP>7132<SeP>7213<SeP>3485<SeP>6118<SeP>6089<SeP>6189<SeP>4929<SeP>7030<SeP>4143<SeP>6199<SeP>6603<SeP>5224<SeP>5729<SeP>5280<SeP>15285<SeP>16627<SeP>35507<SeP>7529<SeP>9107<SeP>5374<SeP>6587<SeP>12658<SeP>6082<SeP>4420<SeP>5125<SeP>4939<SeP>5433<SeP>5894<SeP>6974<SeP>7355<SeP>5484<SeP>5809<SeP>4627<SeP>7156<SeP>8394<SeP>7310<SeP>8548<SeP>3564<SeP>7133<SeP>10562<SeP>7875<SeP>3333<SeP>3621<SeP>6796<SeP>8970<SeP>5144<SeP>7810<SeP>8133<SeP>3624<SeP>3056<SeP>1056<SeP>1654<SeP>1827<SeP>2485<SeP>860<SeP>1359<SeP>516<SeP>1454<SeP>1473<SeP>1166<SeP>849<SeP>1063<SeP>1043<SeP>758<SeP>1453<SeP>1363<SeP>1217<SeP>822<SeP>2264<SeP>2005<SeP>6307<SeP>10335<SeP>7812<SeP>8358<SeP>6867<SeP>12768<SeP>2330<SeP>10027<SeP>10864<SeP>9460<SeP>12955<SeP>8596<SeP>11020<SeP>11564<SeP>8213<SeP>13154<SeP>5743<SeP>3950<SeP>8088<SeP>21002<SeP>10057<SeP>5841<SeP>7752<SeP>10277<SeP>17092<SeP>7209<SeP>5625<SeP>6501<SeP>7782<SeP>25878<SeP>7461<SeP>8507<SeP>11637<SeP>4082<SeP>6875<SeP>4582<SeP>16789<SeP>4756<SeP>9499<SeP>11363<SeP>6557<SeP>8053<SeP>7015<SeP>5414<SeP>3539<SeP>7075<SeP>7511<SeP>4609<SeP>6495<SeP>8126<SeP>4832<SeP>20328<SeP>7630<SeP>5677<SeP>6691<SeP>8040<SeP>10437<SeP>6838<SeP>3758<SeP>4596<SeP>4913<SeP>3605<SeP>4338<SeP>3561<SeP>632<SeP>109<SeP>630<SeP>548<SeP>645<SeP>716<SeP>357<SeP>626<SeP>1255<SeP>1195<SeP>3162<SeP>22863<SeP>615<SeP>3426<SeP>3553<SeP>3016<SeP>2920<SeP>7141<SeP>4055<SeP>2381<SeP>3846<SeP>2953<SeP>2716<SeP>3436<SeP>4214<SeP>2039<SeP>3487<SeP>1261<SeP>2561<SeP>1301<SeP>1837<SeP>1670<SeP>1380<SeP>879<SeP>1228<SeP>1597<SeP>26514<SeP>1568<SeP>4017<SeP>3375<SeP>2870<SeP>3115<SeP>3054<SeP>1579<SeP>3677<SeP>2481<SeP>3547<SeP>2321<SeP>2876<SeP>3101<SeP>3207<SeP>6692<SeP>4676<SeP>3799<SeP>3642<SeP>3031<SeP>2857<SeP>4360<SeP>5621<SeP>8403<SeP>5319<SeP>2236<SeP>3258<SeP>2315<SeP>4084<SeP>4085<SeP>3667<SeP>2803<SeP>2575<SeP>5799<SeP>3293<SeP>6186<SeP>3683<SeP>5442<SeP>5332<SeP>5966<SeP>3683<SeP>17962<SeP>9987<SeP>12516<SeP>1726<SeP>2288<SeP>4875<SeP>3209<SeP>4026<SeP>3923<SeP>5010<SeP>3781<SeP>4752<SeP>4019<SeP>3729<SeP>3224<SeP>1364<SeP>1797<SeP>2104<SeP>3659<SeP>2322<SeP>3336<SeP>3977<SeP>3903<SeP>3931<SeP>3169<SeP>4217<SeP>3323<SeP>3209<SeP>6306<SeP>7600<SeP>5967<SeP>4540<SeP>4704<SeP>4557<SeP>3476<SeP>3947<SeP>4056<SeP>6268<SeP>5397<SeP>4501<SeP>3942<SeP>946<SeP>787<SeP>2229<SeP>1329<SeP>619<SeP>1847<SeP>1793<SeP>576<SeP>3122<SeP>3896<SeP>6524<SeP>10992<SeP>27442<SeP>5468<SeP>10144<SeP>18045<SeP>5337<SeP>4877<SeP>6119<SeP>3939<SeP>24730<SeP>5354<SeP>4710<SeP>4838<SeP>5620<SeP>16246<SeP>18947<SeP>4106<SeP>3728<SeP>4215<SeP>5279<SeP>5692<SeP>3605<SeP>2891<SeP>3359<SeP>4174<SeP>5662<SeP>4390<SeP>17610<SeP>5783<SeP>6101<SeP>5446<SeP>1359<SeP>3914<SeP>3873<SeP>4466<SeP>3562<SeP>3586<SeP>2954<SeP>3344<SeP>3563<SeP>3588<SeP>5847<SeP>8678<SeP>10077<SeP>8463<SeP>9012<SeP>7675<SeP>7168<SeP>4952<SeP>5164<SeP>3656<SeP>25535<SeP>3643<SeP>3038<SeP>4104<SeP>10169<SeP>5574<SeP>4653<SeP>3954<SeP>5072<SeP>3500<SeP>4039";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:33:45<SeP>2023-07-28 21:07:30<SeP>2023-07-30 07:41:15<SeP>2023-07-31 18:15:00<SeP>2023-08-02 04:48:45<SeP>2023-08-03 15:22:30<SeP>2023-08-05 01:56:15<SeP>2023-08-06 12:30:00<SeP>2023-08-07 23:03:45<SeP>2023-08-09 09:37:30<SeP>2023-08-10 20:11:15<SeP>2023-08-12 06:45:00<SeP>2023-08-13 17:18:45<SeP>2023-08-15 03:52:30<SeP>2023-08-16 14:26:15<SeP>2023-08-18 01:00:00<SeP>2023-08-19 11:33:45<SeP>2023-08-20 22:07:30<SeP>2023-08-22 08:41:15<SeP>2023-08-23 19:15:00<SeP>2023-08-25 05:48:45<SeP>2023-08-26 16:22:30<SeP>2023-08-28 02:56:15<SeP>2023-08-29 13:30:00<SeP>2023-08-31 00:03:45<SeP>2023-09-01 10:37:30<SeP>2023-09-02 21:11:15<SeP>2023-09-04 07:45:00<SeP>2023-09-05 18:18:45<SeP>2023-09-07 04:52:30<SeP>2023-09-08 15:26:15<SeP>2023-09-10 02:00:00<SeP>2023-09-11 12:33:45<SeP>2023-09-12 23:07:30<SeP>2023-09-14 09:41:15<SeP>2023-09-15 20:15:00<SeP>2023-09-17 06:48:45<SeP>2023-09-18 17:22:30<SeP>2023-09-20 03:56:15<SeP>2023-09-21 14:30:00<SeP>2023-09-23 01:03:45<SeP>2023-09-24 11:37:30<SeP>2023-09-25 22:11:15<SeP>2023-09-27 08:45:00<SeP>2023-09-28 19:18:45<SeP>2023-09-30 05:52:30<SeP>2023-10-01 16:26:15<SeP>2023-10-03 03:00:00<SeP>2023-10-04 13:33:45<SeP>2023-10-06 00:07:30<SeP>2023-10-07 10:41:15<SeP>2023-10-08 21:15:00<SeP>2023-10-10 07:48:45<SeP>2023-10-11 18:22:30<SeP>2023-10-13 04:56:15<SeP>2023-10-14 15:30:00<SeP>2023-10-16 02:03:45<SeP>2023-10-17 12:37:30<SeP>2023-10-18 23:11:15<SeP>2023-10-20 09:45:00<SeP>2023-10-21 20:18:45<SeP>2023-10-23 06:52:30<SeP>2023-10-24 17:26:15<SeP>2023-10-26 04:00:00<SeP>2023-10-27 14:33:45<SeP>2023-10-29 01:07:30<SeP>2023-10-30 11:41:15<SeP>2023-10-31 22:15:00<SeP>2023-11-02 08:48:45<SeP>2023-11-03 19:22:30<SeP>2023-11-05 04:56:15<SeP>2023-11-06 15:30:00<SeP>2023-11-08 02:03:45<SeP>2023-11-09 12:37:30<SeP>2023-11-10 23:11:15<SeP>2023-11-12 09:45:00<SeP>2023-11-13 20:18:45<SeP>2023-11-15 06:52:30<SeP>2023-11-16 17:26:15<SeP>2023-11-18 04:00:00<SeP>2023-11-19 14:33:45<SeP>2023-11-21 01:07:30<SeP>2023-11-22 11:41:15<SeP>2023-11-23 22:15:00<SeP>2023-11-25 08:48:45<SeP>2023-11-26 19:22:30<SeP>2023-11-28 05:56:15<SeP>2023-11-29 16:30:00<SeP>2023-12-01 03:03:45<SeP>2023-12-02 13:37:30<SeP>2023-12-04 00:11:15<SeP>2023-12-05 10:45:00<SeP>2023-12-06 21:18:45<SeP>2023-12-08 07:52:30<SeP>2023-12-09 18:26:15<SeP>2023-12-11 05:00:00<SeP>2023-12-12 15:33:45<SeP>2023-12-14 02:07:30<SeP>2023-12-15 12:41:15<SeP>2023-12-16 23:15:00<SeP>2023-12-18 09:48:45<SeP>2023-12-19 20:22:30<SeP>2023-12-21 06:56:15<SeP>2023-12-22 17:30:00<SeP>2023-12-24 04:03:45<SeP>2023-12-25 14:37:30<SeP>2023-12-27 01:11:15<SeP>2023-12-28 11:45:00<SeP>2023-12-29 22:18:45<SeP>2023-12-31 08:52:30<SeP>2024-01-01 19:26:15<SeP>2024-01-03 06:00:00<SeP>2024-01-04 16:33:45<SeP>2024-01-06 03:07:30<SeP>2024-01-07 13:41:15<SeP>2024-01-09 00:15:00<SeP>2024-01-10 10:48:45<SeP>2024-01-11 21:22:30<SeP>2024-01-13 07:56:15<SeP>2024-01-14 18:30:00<SeP>2024-01-16 05:03:45<SeP>2024-01-17 15:37:30<SeP>2024-01-19 02:11:15<SeP>2024-01-20 12:45:00<SeP>2024-01-21 23:18:45<SeP>2024-01-23 09:52:30<SeP>2024-01-24 20:26:15<SeP>2024-01-26 07:00:00<SeP>2024-01-27 17:33:45<SeP>2024-01-29 04:07:30<SeP>2024-01-30 14:41:15<SeP>2024-02-01 01:15:00<SeP>2024-02-02 11:48:45<SeP>2024-02-03 22:22:30<SeP>2024-02-05 08:56:15<SeP>2024-02-06 19:30:00<SeP>2024-02-08 06:03:45<SeP>2024-02-09 16:37:30<SeP>2024-02-11 03:11:15<SeP>2024-02-12 13:45:00<SeP>2024-02-14 00:18:45<SeP>2024-02-15 10:52:30<SeP>2024-02-16 21:26:15<SeP>2024-02-18 08:00:00<SeP>2024-02-19 18:33:45<SeP>2024-02-21 05:07:30<SeP>2024-02-22 15:41:15<SeP>2024-02-24 02:15:00<SeP>2024-02-25 12:48:45<SeP>2024-02-26 23:22:30<SeP>2024-02-28 09:56:15<SeP>2024-02-29 20:30:00<SeP>2024-03-02 07:03:45<SeP>2024-03-03 17:37:30<SeP>2024-03-05 04:11:15<SeP>2024-03-06 14:45:00<SeP>2024-03-08 01:18:45<SeP>2024-03-09 11:52:30<SeP>2024-03-10 23:26:15<SeP>2024-03-12 10:00:00<SeP>2024-03-13 20:33:45<SeP>2024-03-15 07:07:30<SeP>2024-03-16 17:41:15<SeP>2024-03-18 04:15:00<SeP>2024-03-19 14:48:45<SeP>2024-03-21 01:22:30<SeP>2024-03-22 11:56:15<SeP>2024-03-23 22:30:00<SeP>2024-03-25 09:03:45<SeP>2024-03-26 19:37:30<SeP>2024-03-28 06:11:15<SeP>2024-03-29 16:45:00<SeP>2024-03-31 03:18:45<SeP>2024-04-01 13:52:30<SeP>2024-04-03 00:26:15<SeP>2024-04-04 11:00:00<SeP>2024-04-05 21:33:45<SeP>2024-04-07 08:07:30<SeP>2024-04-08 18:41:15<SeP>2024-04-10 05:15:00<SeP>2024-04-11 15:48:45<SeP>2024-04-13 02:22:30<SeP>2024-04-14 12:56:15<SeP>2024-04-15 23:30:00<SeP>2024-04-17 10:03:45<SeP>2024-04-18 20:37:30<SeP>2024-04-20 07:11:15<SeP>2024-04-21 17:45:00<SeP>2024-04-23 04:18:45<SeP>2024-04-24 14:52:30<SeP>2024-04-26 01:26:15<SeP>2024-04-27 12:00:00<SeP>2024-04-28 22:33:45<SeP>2024-04-30 09:07:30<SeP>2024-05-01 19:41:15<SeP>2024-05-03 06:15:00<SeP>2024-05-04 16:48:45<SeP>2024-05-06 03:22:30<SeP>2024-05-07 13:56:15<SeP>2024-05-09 00:30:00<SeP>2024-05-10 11:03:45<SeP>2024-05-11 21:37:30<SeP>2024-05-13 08:11:15<SeP>2024-05-14 18:45:00<SeP>2024-05-16 05:18:45<SeP>2024-05-17 15:52:30<SeP>2024-05-19 02:26:15<SeP>2024-05-20 13:00:00<SeP>2024-05-21 23:33:45<SeP>2024-05-23 10:07:30<SeP>2024-05-24 20:41:15<SeP>2024-05-26 07:15:00<SeP>2024-05-27 17:48:45<SeP>2024-05-29 04:22:30<SeP>2024-05-30 14:56:15<SeP>2024-06-01 01:30:00<SeP>2024-06-02 12:03:45<SeP>2024-06-03 22:37:30<SeP>2024-06-05 09:11:15<SeP>2024-06-06 19:45:00<SeP>2024-06-08 06:18:45<SeP>2024-06-09 16:52:30<SeP>2024-06-11 03:26:15<SeP>2024-06-12 14:00:00<SeP>2024-06-14 00:33:45<SeP>2024-06-15 11:07:30<SeP>2024-06-16 21:41:15<SeP>2024-06-18 08:15:00<SeP>2024-06-19 18:48:45<SeP>2024-06-21 05:22:30<SeP>2024-06-22 15:56:15<SeP>2024-06-24 02:30:00<SeP>2024-06-25 13:03:45<SeP>2024-06-26 23:37:30<SeP>2024-06-28 10:11:15<SeP>2024-06-29 20:45:00<SeP>2024-07-01 07:18:45<SeP>2024-07-02 17:52:30<SeP>2024-07-04 04:26:15<SeP>2024-07-05 15:00:00<SeP>2024-07-07 01:33:45<SeP>2024-07-08 12:07:30<SeP>2024-07-09 22:41:15<SeP>2024-07-11 09:15:00<SeP>2024-07-12 19:48:45<SeP>2024-07-14 06:22:30<SeP>2024-07-15 16:56:15<SeP>2024-07-17 03:30:00<SeP>2024-07-18 14:03:45<SeP>2024-07-20 00:37:30<SeP>2024-07-21 11:11:15<SeP>2024-07-22 21:45:00<SeP>2024-07-24 08:18:45<SeP>2024-07-25 18:52:30<SeP>2024-07-27 05:26:15<SeP>2024-07-28 16:00:00<SeP>2024-07-30 02:33:45<SeP>2024-07-31 13:07:30<SeP>2024-08-01 23:41:15<SeP>2024-08-03 10:15:00<SeP>2024-08-04 20:48:45<SeP>2024-08-06 07:22:30<SeP>2024-08-07 17:56:15<SeP>2024-08-09 04:30:00<SeP>2024-08-10 15:03:45<SeP>2024-08-12 01:37:30<SeP>2024-08-13 12:11:15<SeP>2024-08-14 22:45:00<SeP>2024-08-16 09:18:45<SeP>2024-08-17 19:52:30<SeP>2024-08-19 06:26:15<SeP>2024-08-20 17:00:00<SeP>2024-08-22 03:33:45<SeP>2024-08-23 14:07:30<SeP>2024-08-25 00:41:15<SeP>2024-08-26 11:15:00<SeP>2024-08-27 21:48:45<SeP>2024-08-29 08:22:30<SeP>2024-08-30 18:56:15<SeP>2024-09-01 05:30:00<SeP>2024-09-02 16:03:45<SeP>2024-09-04 02:37:30<SeP>2024-09-05 13:11:15<SeP>2024-09-06 23:45:00<SeP>2024-09-08 10:18:45<SeP>2024-09-09 20:52:30<SeP>2024-09-11 07:26:15<SeP>2024-09-12 18:00:00<SeP>2024-09-14 04:33:45<SeP>2024-09-15 15:07:30<SeP>2024-09-17 01:41:15<SeP>2024-09-18 12:15:00<SeP>2024-09-19 22:48:45<SeP>2024-09-21 09:22:30<SeP>2024-09-22 19:56:15<SeP>2024-09-24 06:30:00<SeP>2024-09-25 17:03:45<SeP>2024-09-27 03:37:30<SeP>2024-09-28 14:11:15<SeP>2024-09-30 00:45:00<SeP>2024-10-01 11:18:45<SeP>2024-10-02 21:52:30<SeP>2024-10-04 08:26:15<SeP>2024-10-05 19:00:00<SeP>2024-10-07 05:33:45<SeP>2024-10-08 16:07:30<SeP>2024-10-10 02:41:15<SeP>2024-10-11 13:15:00<SeP>2024-10-12 23:48:45<SeP>2024-10-14 10:22:30<SeP>2024-10-15 20:56:15<SeP>2024-10-17 07:30:00<SeP>2024-10-18 18:03:45<SeP>2024-10-20 04:37:30<SeP>2024-10-21 15:11:15<SeP>2024-10-23 01:45:00<SeP>2024-10-24 12:18:45<SeP>2024-10-25 22:52:30<SeP>2024-10-27 09:26:15<SeP>2024-10-28 20:00:00<SeP>2024-10-30 06:33:45<SeP>2024-10-31 17:07:30<SeP>2024-11-02 03:41:15<SeP>2024-11-03 13:15:00<SeP>2024-11-04 23:48:45<SeP>2024-11-06 10:22:30<SeP>2024-11-07 20:56:15<SeP>2024-11-09 07:30:00<SeP>2024-11-10 18:03:45<SeP>2024-11-12 04:37:30<SeP>2024-11-13 15:11:15<SeP>2024-11-15 01:45:00<SeP>2024-11-16 12:18:45<SeP>2024-11-17 22:52:30<SeP>2024-11-19 09:26:15<SeP>2024-11-20 20:00:00<SeP>2024-11-22 06:33:45<SeP>2024-11-23 17:07:30<SeP>2024-11-25 03:41:15<SeP>2024-11-26 14:15:00<SeP>2024-11-28 00:48:45<SeP>2024-11-29 11:22:30<SeP>2024-11-30 21:56:15<SeP>2024-12-02 08:30:00<SeP>2024-12-03 19:03:45<SeP>2024-12-05 05:37:30<SeP>2024-12-06 16:11:15<SeP>2024-12-08 02:45:00<SeP>2024-12-09 13:18:45<SeP>2024-12-10 23:52:30<SeP>2024-12-12 10:26:15<SeP>2024-12-13 21:00:00<SeP>2024-12-15 07:33:45<SeP>2024-12-16 18:07:30<SeP>2024-12-18 04:41:15<SeP>2024-12-19 15:15:00<SeP>2024-12-21 01:48:45<SeP>2024-12-22 12:22:30<SeP>2024-12-23 22:56:15<SeP>2024-12-25 09:30:00<SeP>2024-12-26 20:03:45<SeP>2024-12-28 06:37:30<SeP>2024-12-29 17:11:15<SeP>2024-12-31 03:45:00<SeP>2025-01-01 14:18:45<SeP>2025-01-03 00:52:30<SeP>2025-01-04 11:26:15<SeP>2025-01-05 22:00:00<SeP>2025-01-07 08:33:45<SeP>2025-01-08 19:07:30<SeP>2025-01-10 05:41:15<SeP>2025-01-11 16:15:00<SeP>2025-01-13 02:48:45<SeP>2025-01-14 13:22:30<SeP>2025-01-15 23:56:15<SeP>2025-01-17 10:30:00<SeP>2025-01-18 21:03:45<SeP>2025-01-20 07:37:30<SeP>2025-01-21 18:11:15<SeP>2025-01-23 04:45:00<SeP>2025-01-24 15:18:45<SeP>2025-01-26 01:52:30<SeP>2025-01-27 12:26:15<SeP>2025-01-28 23:00:00<SeP>2025-01-30 09:33:45<SeP>2025-01-31 20:07:30<SeP>2025-02-02 06:41:15<SeP>2025-02-03 17:15:00<SeP>2025-02-05 03:48:45<SeP>2025-02-06 14:22:30<SeP>2025-02-08 00:56:15<SeP>2025-02-09 11:30:00<SeP>2025-02-10 22:03:45<SeP>2025-02-12 08:37:30<SeP>2025-02-13 19:11:15<SeP>2025-02-15 05:45:00<SeP>2025-02-16 16:18:45<SeP>2025-02-18 02:52:30<SeP>2025-02-19 13:26:15";
  const item1Label       = "Escaneos";
  const item1Data        = "759<SeP>1453<SeP>1378<SeP>1419<SeP>1223<SeP>1682<SeP>997<SeP>982<SeP>1087<SeP>3333<SeP>1467<SeP>2855<SeP>1809<SeP>2549<SeP>744<SeP>813<SeP>1421<SeP>1578<SeP>2343<SeP>1519<SeP>1527<SeP>986<SeP>868<SeP>1076<SeP>1184<SeP>918<SeP>733<SeP>914<SeP>3597<SeP>993<SeP>828<SeP>1334<SeP>1202<SeP>859<SeP>1717<SeP>2444<SeP>2876<SeP>1771<SeP>1429<SeP>1729<SeP>1252<SeP>1632<SeP>1885<SeP>1997<SeP>1685<SeP>1641<SeP>1572<SeP>1690<SeP>1660<SeP>1567<SeP>1796<SeP>1807<SeP>1749<SeP>1546<SeP>3218<SeP>1366<SeP>1566<SeP>2102<SeP>1860<SeP>2183<SeP>1863<SeP>3274<SeP>1294<SeP>1542<SeP>1568<SeP>1245<SeP>1829<SeP>1701<SeP>1222<SeP>1290<SeP>1453<SeP>1143<SeP>2292<SeP>1216<SeP>1088<SeP>1331<SeP>2951<SeP>6480<SeP>1328<SeP>1295<SeP>1568<SeP>1969<SeP>1235<SeP>2220<SeP>5578<SeP>1518<SeP>1551<SeP>935<SeP>3181<SeP>1373<SeP>997<SeP>1108<SeP>1026<SeP>1014<SeP>2854<SeP>1141<SeP>1093<SeP>1625<SeP>3821<SeP>5445<SeP>1217<SeP>953<SeP>902<SeP>890<SeP>978<SeP>954<SeP>1014<SeP>1058<SeP>4308<SeP>1781<SeP>1358<SeP>1509<SeP>548<SeP>1173<SeP>1440<SeP>1130<SeP>993<SeP>978<SeP>2293<SeP>1284<SeP>993<SeP>971<SeP>1066<SeP>807<SeP>807<SeP>878<SeP>803<SeP>898<SeP>1029<SeP>814<SeP>825<SeP>795<SeP>870<SeP>860<SeP>680<SeP>843<SeP>880<SeP>828<SeP>914<SeP>765<SeP>856<SeP>737<SeP>805<SeP>1059<SeP>753<SeP>873<SeP>860<SeP>958<SeP>886<SeP>1041<SeP>946<SeP>489<SeP>911<SeP>869<SeP>979<SeP>1074<SeP>1030<SeP>1120<SeP>1179<SeP>952<SeP>947<SeP>942<SeP>889<SeP>813<SeP>910<SeP>1061<SeP>935<SeP>762<SeP>962<SeP>1074<SeP>867<SeP>1126<SeP>897<SeP>1059<SeP>1088<SeP>928<SeP>885<SeP>2184<SeP>1198<SeP>1104<SeP>1065<SeP>985<SeP>1139<SeP>954<SeP>819<SeP>714<SeP>888<SeP>1042<SeP>956<SeP>788<SeP>1082<SeP>1277<SeP>1093<SeP>1126<SeP>1297<SeP>1157<SeP>1288<SeP>1201<SeP>1332<SeP>1391<SeP>1693<SeP>1730<SeP>1367<SeP>687<SeP>882<SeP>1163<SeP>986<SeP>631<SeP>809<SeP>860<SeP>972<SeP>784<SeP>4975<SeP>3586<SeP>1938<SeP>1388<SeP>1101<SeP>859<SeP>1064<SeP>886<SeP>992<SeP>996<SeP>1045<SeP>966<SeP>1000<SeP>2230<SeP>1239<SeP>1119<SeP>1179<SeP>1334<SeP>1106<SeP>1081<SeP>902<SeP>1074<SeP>1089<SeP>1082<SeP>1001<SeP>1108<SeP>1096<SeP>987<SeP>949<SeP>1206<SeP>1106<SeP>1137<SeP>1178<SeP>1253<SeP>1296<SeP>1555<SeP>1128<SeP>1171<SeP>1077<SeP>1166<SeP>1936<SeP>1280<SeP>1542<SeP>1851<SeP>1420<SeP>1595<SeP>1987<SeP>1298<SeP>1178<SeP>1064<SeP>1369<SeP>1264<SeP>1452<SeP>1098<SeP>1323<SeP>1684<SeP>1657<SeP>1332<SeP>1454<SeP>1443<SeP>1232<SeP>1009<SeP>1087<SeP>1379<SeP>1064<SeP>1208<SeP>1305<SeP>1145<SeP>1483<SeP>1850<SeP>1320<SeP>1208<SeP>1610<SeP>1438<SeP>1073<SeP>1083<SeP>982<SeP>772<SeP>894<SeP>1017<SeP>991<SeP>1780<SeP>1077<SeP>1105<SeP>1165<SeP>784<SeP>1003<SeP>898<SeP>1407<SeP>827<SeP>819<SeP>1123<SeP>1242<SeP>1615<SeP>1397<SeP>987<SeP>1084<SeP>1066<SeP>1752<SeP>1109<SeP>1095<SeP>1051<SeP>1273<SeP>1244<SeP>987<SeP>942<SeP>1251<SeP>1000<SeP>851<SeP>861<SeP>1100<SeP>1542<SeP>1425<SeP>1481<SeP>1437<SeP>1146<SeP>889<SeP>1126<SeP>1290<SeP>1103<SeP>1135<SeP>995<SeP>1034<SeP>1092<SeP>1470<SeP>1352<SeP>1413<SeP>1438<SeP>1340<SeP>1571<SeP>1391<SeP>1281<SeP>1432<SeP>1446<SeP>1372<SeP>1240<SeP>1694<SeP>1385<SeP>1561<SeP>1460<SeP>1285<SeP>1410<SeP>1212<SeP>1298<SeP>1283<SeP>1481<SeP>1654<SeP>1210<SeP>1212<SeP>1334<SeP>1269<SeP>1230<SeP>1190<SeP>1501<SeP>1702<SeP>1776<SeP>1188<SeP>618<SeP>1399<SeP>1886<SeP>1166<SeP>1444<SeP>1164<SeP>1110<SeP>1329<SeP>1420<SeP>1196<SeP>1493<SeP>1449<SeP>1620<SeP>1492<SeP>1485<SeP>1588<SeP>1390<SeP>1283<SeP>1708<SeP>1509<SeP>1302<SeP>1147<SeP>1540<SeP>1796<SeP>1834<SeP>1699<SeP>1687<SeP>1648<SeP>1616<SeP>1584<SeP>1460";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "152<SeP>614<SeP>967<SeP>718<SeP>543<SeP>210<SeP>6966<SeP>502<SeP>9196<SeP>975<SeP>299<SeP>1220<SeP>795<SeP>719<SeP>146<SeP>447<SeP>143<SeP>667<SeP>368<SeP>3556<SeP>6971<SeP>7758<SeP>6788<SeP>8195<SeP>429<SeP>281<SeP>386<SeP>212<SeP>334<SeP>5935<SeP>76<SeP>386<SeP>183<SeP>489<SeP>503<SeP>9768<SeP>9287<SeP>9775<SeP>9589<SeP>6151<SeP>5555<SeP>8305<SeP>7315<SeP>8819<SeP>8791<SeP>7633<SeP>7736<SeP>8906<SeP>8153<SeP>9063<SeP>5532<SeP>5737<SeP>11657<SeP>7014<SeP>7889<SeP>7026<SeP>10360<SeP>12675<SeP>21599<SeP>9095<SeP>9024<SeP>10018<SeP>5977<SeP>9366<SeP>7272<SeP>8915<SeP>8678<SeP>6438<SeP>6156<SeP>7600<SeP>6199<SeP>2612<SeP>6037<SeP>5336<SeP>6445<SeP>7132<SeP>7213<SeP>3485<SeP>6118<SeP>6089<SeP>6189<SeP>4929<SeP>7030<SeP>4143<SeP>6199<SeP>6603<SeP>5224<SeP>5729<SeP>5280<SeP>15285<SeP>16627<SeP>35507<SeP>7529<SeP>9107<SeP>5374<SeP>6587<SeP>12658<SeP>6082<SeP>4420<SeP>5125<SeP>4939<SeP>5433<SeP>5894<SeP>6974<SeP>7355<SeP>5484<SeP>5809<SeP>4627<SeP>7156<SeP>8394<SeP>7310<SeP>8548<SeP>3564<SeP>7133<SeP>10562<SeP>7875<SeP>3333<SeP>3621<SeP>6796<SeP>8970<SeP>5144<SeP>7810<SeP>8133<SeP>3624<SeP>3056<SeP>1056<SeP>1654<SeP>1827<SeP>2485<SeP>860<SeP>1359<SeP>516<SeP>1454<SeP>1473<SeP>1166<SeP>849<SeP>1063<SeP>1043<SeP>758<SeP>1453<SeP>1363<SeP>1217<SeP>822<SeP>2264<SeP>2005<SeP>6307<SeP>10335<SeP>7812<SeP>8358<SeP>6867<SeP>12768<SeP>2330<SeP>10027<SeP>10864<SeP>9460<SeP>12955<SeP>8596<SeP>11020<SeP>11564<SeP>8213<SeP>13154<SeP>5743<SeP>3950<SeP>8088<SeP>21002<SeP>10057<SeP>5841<SeP>7752<SeP>10277<SeP>17092<SeP>7209<SeP>5625<SeP>6501<SeP>7782<SeP>25878<SeP>7461<SeP>8507<SeP>11637<SeP>4082<SeP>6875<SeP>4582<SeP>16789<SeP>4756<SeP>9499<SeP>11363<SeP>6557<SeP>8053<SeP>7015<SeP>5414<SeP>3539<SeP>7075<SeP>7511<SeP>4609<SeP>6495<SeP>8126<SeP>4832<SeP>20328<SeP>7630<SeP>5677<SeP>6691<SeP>8040<SeP>10437<SeP>6838<SeP>3758<SeP>4596<SeP>4913<SeP>3605<SeP>4338<SeP>3561<SeP>632<SeP>109<SeP>630<SeP>548<SeP>645<SeP>716<SeP>357<SeP>626<SeP>1255<SeP>1195<SeP>3162<SeP>22863<SeP>615<SeP>3426<SeP>3553<SeP>3016<SeP>2920<SeP>7141<SeP>4055<SeP>2381<SeP>3846<SeP>2953<SeP>2716<SeP>3436<SeP>4214<SeP>2039<SeP>3487<SeP>1261<SeP>2561<SeP>1301<SeP>1837<SeP>1670<SeP>1380<SeP>879<SeP>1228<SeP>1597<SeP>26514<SeP>1568<SeP>4017<SeP>3375<SeP>2870<SeP>3115<SeP>3054<SeP>1579<SeP>3677<SeP>2481<SeP>3547<SeP>2321<SeP>2876<SeP>3101<SeP>3207<SeP>6692<SeP>4676<SeP>3799<SeP>3642<SeP>3031<SeP>2857<SeP>4360<SeP>5621<SeP>8403<SeP>5319<SeP>2236<SeP>3258<SeP>2315<SeP>4084<SeP>4085<SeP>3667<SeP>2803<SeP>2575<SeP>5799<SeP>3293<SeP>6186<SeP>3683<SeP>5442<SeP>5332<SeP>5966<SeP>3683<SeP>17962<SeP>9987<SeP>12516<SeP>1726<SeP>2288<SeP>4875<SeP>3209<SeP>4026<SeP>3923<SeP>5010<SeP>3781<SeP>4752<SeP>4019<SeP>3729<SeP>3224<SeP>1364<SeP>1797<SeP>2104<SeP>3659<SeP>2322<SeP>3336<SeP>3977<SeP>3903<SeP>3931<SeP>3169<SeP>4217<SeP>3323<SeP>3209<SeP>6306<SeP>7600<SeP>5967<SeP>4540<SeP>4704<SeP>4557<SeP>3476<SeP>3947<SeP>4056<SeP>6268<SeP>5397<SeP>4501<SeP>3942<SeP>946<SeP>787<SeP>2229<SeP>1329<SeP>619<SeP>1847<SeP>1793<SeP>576<SeP>3122<SeP>3896<SeP>6524<SeP>10992<SeP>27442<SeP>5468<SeP>10144<SeP>18045<SeP>5337<SeP>4877<SeP>6119<SeP>3939<SeP>24730<SeP>5354<SeP>4710<SeP>4838<SeP>5620<SeP>16246<SeP>18947<SeP>4106<SeP>3728<SeP>4215<SeP>5279<SeP>5692<SeP>3605<SeP>2891<SeP>3359<SeP>4174<SeP>5662<SeP>4390<SeP>17610<SeP>5783<SeP>6101<SeP>5446<SeP>1359<SeP>3914<SeP>3873<SeP>4466<SeP>3562<SeP>3586<SeP>2954<SeP>3344<SeP>3563<SeP>3588<SeP>5847<SeP>8678<SeP>10077<SeP>8463<SeP>9012<SeP>7675<SeP>7168<SeP>4952<SeP>5164<SeP>3656<SeP>25535<SeP>3643<SeP>3038<SeP>4104<SeP>10169<SeP>5574<SeP>4653<SeP>3954<SeP>5072<SeP>3500<SeP>4039";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:33:45<SeP>2023-07-28 21:07:30<SeP>2023-07-30 07:41:15<SeP>2023-07-31 18:15:00<SeP>2023-08-02 04:48:45<SeP>2023-08-03 15:22:30<SeP>2023-08-05 01:56:15<SeP>2023-08-06 12:30:00<SeP>2023-08-07 23:03:45<SeP>2023-08-09 09:37:30<SeP>2023-08-10 20:11:15<SeP>2023-08-12 06:45:00<SeP>2023-08-13 17:18:45<SeP>2023-08-15 03:52:30<SeP>2023-08-16 14:26:15<SeP>2023-08-18 01:00:00<SeP>2023-08-19 11:33:45<SeP>2023-08-20 22:07:30<SeP>2023-08-22 08:41:15<SeP>2023-08-23 19:15:00<SeP>2023-08-25 05:48:45<SeP>2023-08-26 16:22:30<SeP>2023-08-28 02:56:15<SeP>2023-08-29 13:30:00<SeP>2023-08-31 00:03:45<SeP>2023-09-01 10:37:30<SeP>2023-09-02 21:11:15<SeP>2023-09-04 07:45:00<SeP>2023-09-05 18:18:45<SeP>2023-09-07 04:52:30<SeP>2023-09-08 15:26:15<SeP>2023-09-10 02:00:00<SeP>2023-09-11 12:33:45<SeP>2023-09-12 23:07:30<SeP>2023-09-14 09:41:15<SeP>2023-09-15 20:15:00<SeP>2023-09-17 06:48:45<SeP>2023-09-18 17:22:30<SeP>2023-09-20 03:56:15<SeP>2023-09-21 14:30:00<SeP>2023-09-23 01:03:45<SeP>2023-09-24 11:37:30<SeP>2023-09-25 22:11:15<SeP>2023-09-27 08:45:00<SeP>2023-09-28 19:18:45<SeP>2023-09-30 05:52:30<SeP>2023-10-01 16:26:15<SeP>2023-10-03 03:00:00<SeP>2023-10-04 13:33:45<SeP>2023-10-06 00:07:30<SeP>2023-10-07 10:41:15<SeP>2023-10-08 21:15:00<SeP>2023-10-10 07:48:45<SeP>2023-10-11 18:22:30<SeP>2023-10-13 04:56:15<SeP>2023-10-14 15:30:00<SeP>2023-10-16 02:03:45<SeP>2023-10-17 12:37:30<SeP>2023-10-18 23:11:15<SeP>2023-10-20 09:45:00<SeP>2023-10-21 20:18:45<SeP>2023-10-23 06:52:30<SeP>2023-10-24 17:26:15<SeP>2023-10-26 04:00:00<SeP>2023-10-27 14:33:45<SeP>2023-10-29 01:07:30<SeP>2023-10-30 11:41:15<SeP>2023-10-31 22:15:00<SeP>2023-11-02 08:48:45<SeP>2023-11-03 19:22:30<SeP>2023-11-05 04:56:15<SeP>2023-11-06 15:30:00<SeP>2023-11-08 02:03:45<SeP>2023-11-09 12:37:30<SeP>2023-11-10 23:11:15<SeP>2023-11-12 09:45:00<SeP>2023-11-13 20:18:45<SeP>2023-11-15 06:52:30<SeP>2023-11-16 17:26:15<SeP>2023-11-18 04:00:00<SeP>2023-11-19 14:33:45<SeP>2023-11-21 01:07:30<SeP>2023-11-22 11:41:15<SeP>2023-11-23 22:15:00<SeP>2023-11-25 08:48:45<SeP>2023-11-26 19:22:30<SeP>2023-11-28 05:56:15<SeP>2023-11-29 16:30:00<SeP>2023-12-01 03:03:45<SeP>2023-12-02 13:37:30<SeP>2023-12-04 00:11:15<SeP>2023-12-05 10:45:00<SeP>2023-12-06 21:18:45<SeP>2023-12-08 07:52:30<SeP>2023-12-09 18:26:15<SeP>2023-12-11 05:00:00<SeP>2023-12-12 15:33:45<SeP>2023-12-14 02:07:30<SeP>2023-12-15 12:41:15<SeP>2023-12-16 23:15:00<SeP>2023-12-18 09:48:45<SeP>2023-12-19 20:22:30<SeP>2023-12-21 06:56:15<SeP>2023-12-22 17:30:00<SeP>2023-12-24 04:03:45<SeP>2023-12-25 14:37:30<SeP>2023-12-27 01:11:15<SeP>2023-12-28 11:45:00<SeP>2023-12-29 22:18:45<SeP>2023-12-31 08:52:30<SeP>2024-01-01 19:26:15<SeP>2024-01-03 06:00:00<SeP>2024-01-04 16:33:45<SeP>2024-01-06 03:07:30<SeP>2024-01-07 13:41:15<SeP>2024-01-09 00:15:00<SeP>2024-01-10 10:48:45<SeP>2024-01-11 21:22:30<SeP>2024-01-13 07:56:15<SeP>2024-01-14 18:30:00<SeP>2024-01-16 05:03:45<SeP>2024-01-17 15:37:30<SeP>2024-01-19 02:11:15<SeP>2024-01-20 12:45:00<SeP>2024-01-21 23:18:45<SeP>2024-01-23 09:52:30<SeP>2024-01-24 20:26:15<SeP>2024-01-26 07:00:00<SeP>2024-01-27 17:33:45<SeP>2024-01-29 04:07:30<SeP>2024-01-30 14:41:15<SeP>2024-02-01 01:15:00<SeP>2024-02-02 11:48:45<SeP>2024-02-03 22:22:30<SeP>2024-02-05 08:56:15<SeP>2024-02-06 19:30:00<SeP>2024-02-08 06:03:45<SeP>2024-02-09 16:37:30<SeP>2024-02-11 03:11:15<SeP>2024-02-12 13:45:00<SeP>2024-02-14 00:18:45<SeP>2024-02-15 10:52:30<SeP>2024-02-16 21:26:15<SeP>2024-02-18 08:00:00<SeP>2024-02-19 18:33:45<SeP>2024-02-21 05:07:30<SeP>2024-02-22 15:41:15<SeP>2024-02-24 02:15:00<SeP>2024-02-25 12:48:45<SeP>2024-02-26 23:22:30<SeP>2024-02-28 09:56:15<SeP>2024-02-29 20:30:00<SeP>2024-03-02 07:03:45<SeP>2024-03-03 17:37:30<SeP>2024-03-05 04:11:15<SeP>2024-03-06 14:45:00<SeP>2024-03-08 01:18:45<SeP>2024-03-09 11:52:30<SeP>2024-03-10 23:26:15<SeP>2024-03-12 10:00:00<SeP>2024-03-13 20:33:45<SeP>2024-03-15 07:07:30<SeP>2024-03-16 17:41:15<SeP>2024-03-18 04:15:00<SeP>2024-03-19 14:48:45<SeP>2024-03-21 01:22:30<SeP>2024-03-22 11:56:15<SeP>2024-03-23 22:30:00<SeP>2024-03-25 09:03:45<SeP>2024-03-26 19:37:30<SeP>2024-03-28 06:11:15<SeP>2024-03-29 16:45:00<SeP>2024-03-31 03:18:45<SeP>2024-04-01 13:52:30<SeP>2024-04-03 00:26:15<SeP>2024-04-04 11:00:00<SeP>2024-04-05 21:33:45<SeP>2024-04-07 08:07:30<SeP>2024-04-08 18:41:15<SeP>2024-04-10 05:15:00<SeP>2024-04-11 15:48:45<SeP>2024-04-13 02:22:30<SeP>2024-04-14 12:56:15<SeP>2024-04-15 23:30:00<SeP>2024-04-17 10:03:45<SeP>2024-04-18 20:37:30<SeP>2024-04-20 07:11:15<SeP>2024-04-21 17:45:00<SeP>2024-04-23 04:18:45<SeP>2024-04-24 14:52:30<SeP>2024-04-26 01:26:15<SeP>2024-04-27 12:00:00<SeP>2024-04-28 22:33:45<SeP>2024-04-30 09:07:30<SeP>2024-05-01 19:41:15<SeP>2024-05-03 06:15:00<SeP>2024-05-04 16:48:45<SeP>2024-05-06 03:22:30<SeP>2024-05-07 13:56:15<SeP>2024-05-09 00:30:00<SeP>2024-05-10 11:03:45<SeP>2024-05-11 21:37:30<SeP>2024-05-13 08:11:15<SeP>2024-05-14 18:45:00<SeP>2024-05-16 05:18:45<SeP>2024-05-17 15:52:30<SeP>2024-05-19 02:26:15<SeP>2024-05-20 13:00:00<SeP>2024-05-21 23:33:45<SeP>2024-05-23 10:07:30<SeP>2024-05-24 20:41:15<SeP>2024-05-26 07:15:00<SeP>2024-05-27 17:48:45<SeP>2024-05-29 04:22:30<SeP>2024-05-30 14:56:15<SeP>2024-06-01 01:30:00<SeP>2024-06-02 12:03:45<SeP>2024-06-03 22:37:30<SeP>2024-06-05 09:11:15<SeP>2024-06-06 19:45:00<SeP>2024-06-08 06:18:45<SeP>2024-06-09 16:52:30<SeP>2024-06-11 03:26:15<SeP>2024-06-12 14:00:00<SeP>2024-06-14 00:33:45<SeP>2024-06-15 11:07:30<SeP>2024-06-16 21:41:15<SeP>2024-06-18 08:15:00<SeP>2024-06-19 18:48:45<SeP>2024-06-21 05:22:30<SeP>2024-06-22 15:56:15<SeP>2024-06-24 02:30:00<SeP>2024-06-25 13:03:45<SeP>2024-06-26 23:37:30<SeP>2024-06-28 10:11:15<SeP>2024-06-29 20:45:00<SeP>2024-07-01 07:18:45<SeP>2024-07-02 17:52:30<SeP>2024-07-04 04:26:15<SeP>2024-07-05 15:00:00<SeP>2024-07-07 01:33:45<SeP>2024-07-08 12:07:30<SeP>2024-07-09 22:41:15<SeP>2024-07-11 09:15:00<SeP>2024-07-12 19:48:45<SeP>2024-07-14 06:22:30<SeP>2024-07-15 16:56:15<SeP>2024-07-17 03:30:00<SeP>2024-07-18 14:03:45<SeP>2024-07-20 00:37:30<SeP>2024-07-21 11:11:15<SeP>2024-07-22 21:45:00<SeP>2024-07-24 08:18:45<SeP>2024-07-25 18:52:30<SeP>2024-07-27 05:26:15<SeP>2024-07-28 16:00:00<SeP>2024-07-30 02:33:45<SeP>2024-07-31 13:07:30<SeP>2024-08-01 23:41:15<SeP>2024-08-03 10:15:00<SeP>2024-08-04 20:48:45<SeP>2024-08-06 07:22:30<SeP>2024-08-07 17:56:15<SeP>2024-08-09 04:30:00<SeP>2024-08-10 15:03:45<SeP>2024-08-12 01:37:30<SeP>2024-08-13 12:11:15<SeP>2024-08-14 22:45:00<SeP>2024-08-16 09:18:45<SeP>2024-08-17 19:52:30<SeP>2024-08-19 06:26:15<SeP>2024-08-20 17:00:00<SeP>2024-08-22 03:33:45<SeP>2024-08-23 14:07:30<SeP>2024-08-25 00:41:15<SeP>2024-08-26 11:15:00<SeP>2024-08-27 21:48:45<SeP>2024-08-29 08:22:30<SeP>2024-08-30 18:56:15<SeP>2024-09-01 05:30:00<SeP>2024-09-02 16:03:45<SeP>2024-09-04 02:37:30<SeP>2024-09-05 13:11:15<SeP>2024-09-06 23:45:00<SeP>2024-09-08 10:18:45<SeP>2024-09-09 20:52:30<SeP>2024-09-11 07:26:15<SeP>2024-09-12 18:00:00<SeP>2024-09-14 04:33:45<SeP>2024-09-15 15:07:30<SeP>2024-09-17 01:41:15<SeP>2024-09-18 12:15:00<SeP>2024-09-19 22:48:45<SeP>2024-09-21 09:22:30<SeP>2024-09-22 19:56:15<SeP>2024-09-24 06:30:00<SeP>2024-09-25 17:03:45<SeP>2024-09-27 03:37:30<SeP>2024-09-28 14:11:15<SeP>2024-09-30 00:45:00<SeP>2024-10-01 11:18:45<SeP>2024-10-02 21:52:30<SeP>2024-10-04 08:26:15<SeP>2024-10-05 19:00:00<SeP>2024-10-07 05:33:45<SeP>2024-10-08 16:07:30<SeP>2024-10-10 02:41:15<SeP>2024-10-11 13:15:00<SeP>2024-10-12 23:48:45<SeP>2024-10-14 10:22:30<SeP>2024-10-15 20:56:15<SeP>2024-10-17 07:30:00<SeP>2024-10-18 18:03:45<SeP>2024-10-20 04:37:30<SeP>2024-10-21 15:11:15<SeP>2024-10-23 01:45:00<SeP>2024-10-24 12:18:45<SeP>2024-10-25 22:52:30<SeP>2024-10-27 09:26:15<SeP>2024-10-28 20:00:00<SeP>2024-10-30 06:33:45<SeP>2024-10-31 17:07:30<SeP>2024-11-02 03:41:15<SeP>2024-11-03 13:15:00<SeP>2024-11-04 23:48:45<SeP>2024-11-06 10:22:30<SeP>2024-11-07 20:56:15<SeP>2024-11-09 07:30:00<SeP>2024-11-10 18:03:45<SeP>2024-11-12 04:37:30<SeP>2024-11-13 15:11:15<SeP>2024-11-15 01:45:00<SeP>2024-11-16 12:18:45<SeP>2024-11-17 22:52:30<SeP>2024-11-19 09:26:15<SeP>2024-11-20 20:00:00<SeP>2024-11-22 06:33:45<SeP>2024-11-23 17:07:30<SeP>2024-11-25 03:41:15<SeP>2024-11-26 14:15:00<SeP>2024-11-28 00:48:45<SeP>2024-11-29 11:22:30<SeP>2024-11-30 21:56:15<SeP>2024-12-02 08:30:00<SeP>2024-12-03 19:03:45<SeP>2024-12-05 05:37:30<SeP>2024-12-06 16:11:15<SeP>2024-12-08 02:45:00<SeP>2024-12-09 13:18:45<SeP>2024-12-10 23:52:30<SeP>2024-12-12 10:26:15<SeP>2024-12-13 21:00:00<SeP>2024-12-15 07:33:45<SeP>2024-12-16 18:07:30<SeP>2024-12-18 04:41:15<SeP>2024-12-19 15:15:00<SeP>2024-12-21 01:48:45<SeP>2024-12-22 12:22:30<SeP>2024-12-23 22:56:15<SeP>2024-12-25 09:30:00<SeP>2024-12-26 20:03:45<SeP>2024-12-28 06:37:30<SeP>2024-12-29 17:11:15<SeP>2024-12-31 03:45:00<SeP>2025-01-01 14:18:45<SeP>2025-01-03 00:52:30<SeP>2025-01-04 11:26:15<SeP>2025-01-05 22:00:00<SeP>2025-01-07 08:33:45<SeP>2025-01-08 19:07:30<SeP>2025-01-10 05:41:15<SeP>2025-01-11 16:15:00<SeP>2025-01-13 02:48:45<SeP>2025-01-14 13:22:30<SeP>2025-01-15 23:56:15<SeP>2025-01-17 10:30:00<SeP>2025-01-18 21:03:45<SeP>2025-01-20 07:37:30<SeP>2025-01-21 18:11:15<SeP>2025-01-23 04:45:00<SeP>2025-01-24 15:18:45<SeP>2025-01-26 01:52:30<SeP>2025-01-27 12:26:15<SeP>2025-01-28 23:00:00<SeP>2025-01-30 09:33:45<SeP>2025-01-31 20:07:30<SeP>2025-02-02 06:41:15<SeP>2025-02-03 17:15:00<SeP>2025-02-05 03:48:45<SeP>2025-02-06 14:22:30<SeP>2025-02-08 00:56:15<SeP>2025-02-09 11:30:00<SeP>2025-02-10 22:03:45<SeP>2025-02-12 08:37:30<SeP>2025-02-13 19:11:15<SeP>2025-02-15 05:45:00<SeP>2025-02-16 16:18:45<SeP>2025-02-18 02:52:30<SeP>2025-02-19 13:26:15";
  const itemLabel       = "Escaneos";
  const itemData        = "759<SeP>1453<SeP>1378<SeP>1419<SeP>1223<SeP>1682<SeP>997<SeP>982<SeP>1087<SeP>3333<SeP>1467<SeP>2855<SeP>1809<SeP>2549<SeP>744<SeP>813<SeP>1421<SeP>1578<SeP>2343<SeP>1519<SeP>1527<SeP>986<SeP>868<SeP>1076<SeP>1184<SeP>918<SeP>733<SeP>914<SeP>3597<SeP>993<SeP>828<SeP>1334<SeP>1202<SeP>859<SeP>1717<SeP>2444<SeP>2876<SeP>1771<SeP>1429<SeP>1729<SeP>1252<SeP>1632<SeP>1885<SeP>1997<SeP>1685<SeP>1641<SeP>1572<SeP>1690<SeP>1660<SeP>1567<SeP>1796<SeP>1807<SeP>1749<SeP>1546<SeP>3218<SeP>1366<SeP>1566<SeP>2102<SeP>1860<SeP>2183<SeP>1863<SeP>3274<SeP>1294<SeP>1542<SeP>1568<SeP>1245<SeP>1829<SeP>1701<SeP>1222<SeP>1290<SeP>1453<SeP>1143<SeP>2292<SeP>1216<SeP>1088<SeP>1331<SeP>2951<SeP>6480<SeP>1328<SeP>1295<SeP>1568<SeP>1969<SeP>1235<SeP>2220<SeP>5578<SeP>1518<SeP>1551<SeP>935<SeP>3181<SeP>1373<SeP>997<SeP>1108<SeP>1026<SeP>1014<SeP>2854<SeP>1141<SeP>1093<SeP>1625<SeP>3821<SeP>5445<SeP>1217<SeP>953<SeP>902<SeP>890<SeP>978<SeP>954<SeP>1014<SeP>1058<SeP>4308<SeP>1781<SeP>1358<SeP>1509<SeP>548<SeP>1173<SeP>1440<SeP>1130<SeP>993<SeP>978<SeP>2293<SeP>1284<SeP>993<SeP>971<SeP>1066<SeP>807<SeP>807<SeP>878<SeP>803<SeP>898<SeP>1029<SeP>814<SeP>825<SeP>795<SeP>870<SeP>860<SeP>680<SeP>843<SeP>880<SeP>828<SeP>914<SeP>765<SeP>856<SeP>737<SeP>805<SeP>1059<SeP>753<SeP>873<SeP>860<SeP>958<SeP>886<SeP>1041<SeP>946<SeP>489<SeP>911<SeP>869<SeP>979<SeP>1074<SeP>1030<SeP>1120<SeP>1179<SeP>952<SeP>947<SeP>942<SeP>889<SeP>813<SeP>910<SeP>1061<SeP>935<SeP>762<SeP>962<SeP>1074<SeP>867<SeP>1126<SeP>897<SeP>1059<SeP>1088<SeP>928<SeP>885<SeP>2184<SeP>1198<SeP>1104<SeP>1065<SeP>985<SeP>1139<SeP>954<SeP>819<SeP>714<SeP>888<SeP>1042<SeP>956<SeP>788<SeP>1082<SeP>1277<SeP>1093<SeP>1126<SeP>1297<SeP>1157<SeP>1288<SeP>1201<SeP>1332<SeP>1391<SeP>1693<SeP>1730<SeP>1367<SeP>687<SeP>882<SeP>1163<SeP>986<SeP>631<SeP>809<SeP>860<SeP>972<SeP>784<SeP>4975<SeP>3586<SeP>1938<SeP>1388<SeP>1101<SeP>859<SeP>1064<SeP>886<SeP>992<SeP>996<SeP>1045<SeP>966<SeP>1000<SeP>2230<SeP>1239<SeP>1119<SeP>1179<SeP>1334<SeP>1106<SeP>1081<SeP>902<SeP>1074<SeP>1089<SeP>1082<SeP>1001<SeP>1108<SeP>1096<SeP>987<SeP>949<SeP>1206<SeP>1106<SeP>1137<SeP>1178<SeP>1253<SeP>1296<SeP>1555<SeP>1128<SeP>1171<SeP>1077<SeP>1166<SeP>1936<SeP>1280<SeP>1542<SeP>1851<SeP>1420<SeP>1595<SeP>1987<SeP>1298<SeP>1178<SeP>1064<SeP>1369<SeP>1264<SeP>1452<SeP>1098<SeP>1323<SeP>1684<SeP>1657<SeP>1332<SeP>1454<SeP>1443<SeP>1232<SeP>1009<SeP>1087<SeP>1379<SeP>1064<SeP>1208<SeP>1305<SeP>1145<SeP>1483<SeP>1850<SeP>1320<SeP>1208<SeP>1610<SeP>1438<SeP>1073<SeP>1083<SeP>982<SeP>772<SeP>894<SeP>1017<SeP>991<SeP>1780<SeP>1077<SeP>1105<SeP>1165<SeP>784<SeP>1003<SeP>898<SeP>1407<SeP>827<SeP>819<SeP>1123<SeP>1242<SeP>1615<SeP>1397<SeP>987<SeP>1084<SeP>1066<SeP>1752<SeP>1109<SeP>1095<SeP>1051<SeP>1273<SeP>1244<SeP>987<SeP>942<SeP>1251<SeP>1000<SeP>851<SeP>861<SeP>1100<SeP>1542<SeP>1425<SeP>1481<SeP>1437<SeP>1146<SeP>889<SeP>1126<SeP>1290<SeP>1103<SeP>1135<SeP>995<SeP>1034<SeP>1092<SeP>1470<SeP>1352<SeP>1413<SeP>1438<SeP>1340<SeP>1571<SeP>1391<SeP>1281<SeP>1432<SeP>1446<SeP>1372<SeP>1240<SeP>1694<SeP>1385<SeP>1561<SeP>1460<SeP>1285<SeP>1410<SeP>1212<SeP>1298<SeP>1283<SeP>1481<SeP>1654<SeP>1210<SeP>1212<SeP>1334<SeP>1269<SeP>1230<SeP>1190<SeP>1501<SeP>1702<SeP>1776<SeP>1188<SeP>618<SeP>1399<SeP>1886<SeP>1166<SeP>1444<SeP>1164<SeP>1110<SeP>1329<SeP>1420<SeP>1196<SeP>1493<SeP>1449<SeP>1620<SeP>1492<SeP>1485<SeP>1588<SeP>1390<SeP>1283<SeP>1708<SeP>1509<SeP>1302<SeP>1147<SeP>1540<SeP>1796<SeP>1834<SeP>1699<SeP>1687<SeP>1648<SeP>1616<SeP>1584<SeP>1460";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:33:45<SeP>2023-07-28 21:07:30<SeP>2023-07-30 07:41:15<SeP>2023-07-31 18:15:00<SeP>2023-08-02 04:48:45<SeP>2023-08-03 15:22:30<SeP>2023-08-05 01:56:15<SeP>2023-08-06 12:30:00<SeP>2023-08-07 23:03:45<SeP>2023-08-09 09:37:30<SeP>2023-08-10 20:11:15<SeP>2023-08-12 06:45:00<SeP>2023-08-13 17:18:45<SeP>2023-08-15 03:52:30<SeP>2023-08-16 14:26:15<SeP>2023-08-18 01:00:00<SeP>2023-08-19 11:33:45<SeP>2023-08-20 22:07:30<SeP>2023-08-22 08:41:15<SeP>2023-08-23 19:15:00<SeP>2023-08-25 05:48:45<SeP>2023-08-26 16:22:30<SeP>2023-08-28 02:56:15<SeP>2023-08-29 13:30:00<SeP>2023-08-31 00:03:45<SeP>2023-09-01 10:37:30<SeP>2023-09-02 21:11:15<SeP>2023-09-04 07:45:00<SeP>2023-09-05 18:18:45<SeP>2023-09-07 04:52:30<SeP>2023-09-08 15:26:15<SeP>2023-09-10 02:00:00<SeP>2023-09-11 12:33:45<SeP>2023-09-12 23:07:30<SeP>2023-09-14 09:41:15<SeP>2023-09-15 20:15:00<SeP>2023-09-17 06:48:45<SeP>2023-09-18 17:22:30<SeP>2023-09-20 03:56:15<SeP>2023-09-21 14:30:00<SeP>2023-09-23 01:03:45<SeP>2023-09-24 11:37:30<SeP>2023-09-25 22:11:15<SeP>2023-09-27 08:45:00<SeP>2023-09-28 19:18:45<SeP>2023-09-30 05:52:30<SeP>2023-10-01 16:26:15<SeP>2023-10-03 03:00:00<SeP>2023-10-04 13:33:45<SeP>2023-10-06 00:07:30<SeP>2023-10-07 10:41:15<SeP>2023-10-08 21:15:00<SeP>2023-10-10 07:48:45<SeP>2023-10-11 18:22:30<SeP>2023-10-13 04:56:15<SeP>2023-10-14 15:30:00<SeP>2023-10-16 02:03:45<SeP>2023-10-17 12:37:30<SeP>2023-10-18 23:11:15<SeP>2023-10-20 09:45:00<SeP>2023-10-21 20:18:45<SeP>2023-10-23 06:52:30<SeP>2023-10-24 17:26:15<SeP>2023-10-26 04:00:00<SeP>2023-10-27 14:33:45<SeP>2023-10-29 01:07:30<SeP>2023-10-30 11:41:15<SeP>2023-10-31 22:15:00<SeP>2023-11-02 08:48:45<SeP>2023-11-03 19:22:30<SeP>2023-11-05 04:56:15<SeP>2023-11-06 15:30:00<SeP>2023-11-08 02:03:45<SeP>2023-11-09 12:37:30<SeP>2023-11-10 23:11:15<SeP>2023-11-12 09:45:00<SeP>2023-11-13 20:18:45<SeP>2023-11-15 06:52:30<SeP>2023-11-16 17:26:15<SeP>2023-11-18 04:00:00<SeP>2023-11-19 14:33:45<SeP>2023-11-21 01:07:30<SeP>2023-11-22 11:41:15<SeP>2023-11-23 22:15:00<SeP>2023-11-25 08:48:45<SeP>2023-11-26 19:22:30<SeP>2023-11-28 05:56:15<SeP>2023-11-29 16:30:00<SeP>2023-12-01 03:03:45<SeP>2023-12-02 13:37:30<SeP>2023-12-04 00:11:15<SeP>2023-12-05 10:45:00<SeP>2023-12-06 21:18:45<SeP>2023-12-08 07:52:30<SeP>2023-12-09 18:26:15<SeP>2023-12-11 05:00:00<SeP>2023-12-12 15:33:45<SeP>2023-12-14 02:07:30<SeP>2023-12-15 12:41:15<SeP>2023-12-16 23:15:00<SeP>2023-12-18 09:48:45<SeP>2023-12-19 20:22:30<SeP>2023-12-21 06:56:15<SeP>2023-12-22 17:30:00<SeP>2023-12-24 04:03:45<SeP>2023-12-25 14:37:30<SeP>2023-12-27 01:11:15<SeP>2023-12-28 11:45:00<SeP>2023-12-29 22:18:45<SeP>2023-12-31 08:52:30<SeP>2024-01-01 19:26:15<SeP>2024-01-03 06:00:00<SeP>2024-01-04 16:33:45<SeP>2024-01-06 03:07:30<SeP>2024-01-07 13:41:15<SeP>2024-01-09 00:15:00<SeP>2024-01-10 10:48:45<SeP>2024-01-11 21:22:30<SeP>2024-01-13 07:56:15<SeP>2024-01-14 18:30:00<SeP>2024-01-16 05:03:45<SeP>2024-01-17 15:37:30<SeP>2024-01-19 02:11:15<SeP>2024-01-20 12:45:00<SeP>2024-01-21 23:18:45<SeP>2024-01-23 09:52:30<SeP>2024-01-24 20:26:15<SeP>2024-01-26 07:00:00<SeP>2024-01-27 17:33:45<SeP>2024-01-29 04:07:30<SeP>2024-01-30 14:41:15<SeP>2024-02-01 01:15:00<SeP>2024-02-02 11:48:45<SeP>2024-02-03 22:22:30<SeP>2024-02-05 08:56:15<SeP>2024-02-06 19:30:00<SeP>2024-02-08 06:03:45<SeP>2024-02-09 16:37:30<SeP>2024-02-11 03:11:15<SeP>2024-02-12 13:45:00<SeP>2024-02-14 00:18:45<SeP>2024-02-15 10:52:30<SeP>2024-02-16 21:26:15<SeP>2024-02-18 08:00:00<SeP>2024-02-19 18:33:45<SeP>2024-02-21 05:07:30<SeP>2024-02-22 15:41:15<SeP>2024-02-24 02:15:00<SeP>2024-02-25 12:48:45<SeP>2024-02-26 23:22:30<SeP>2024-02-28 09:56:15<SeP>2024-02-29 20:30:00<SeP>2024-03-02 07:03:45<SeP>2024-03-03 17:37:30<SeP>2024-03-05 04:11:15<SeP>2024-03-06 14:45:00<SeP>2024-03-08 01:18:45<SeP>2024-03-09 11:52:30<SeP>2024-03-10 23:26:15<SeP>2024-03-12 10:00:00<SeP>2024-03-13 20:33:45<SeP>2024-03-15 07:07:30<SeP>2024-03-16 17:41:15<SeP>2024-03-18 04:15:00<SeP>2024-03-19 14:48:45<SeP>2024-03-21 01:22:30<SeP>2024-03-22 11:56:15<SeP>2024-03-23 22:30:00<SeP>2024-03-25 09:03:45<SeP>2024-03-26 19:37:30<SeP>2024-03-28 06:11:15<SeP>2024-03-29 16:45:00<SeP>2024-03-31 03:18:45<SeP>2024-04-01 13:52:30<SeP>2024-04-03 00:26:15<SeP>2024-04-04 11:00:00<SeP>2024-04-05 21:33:45<SeP>2024-04-07 08:07:30<SeP>2024-04-08 18:41:15<SeP>2024-04-10 05:15:00<SeP>2024-04-11 15:48:45<SeP>2024-04-13 02:22:30<SeP>2024-04-14 12:56:15<SeP>2024-04-15 23:30:00<SeP>2024-04-17 10:03:45<SeP>2024-04-18 20:37:30<SeP>2024-04-20 07:11:15<SeP>2024-04-21 17:45:00<SeP>2024-04-23 04:18:45<SeP>2024-04-24 14:52:30<SeP>2024-04-26 01:26:15<SeP>2024-04-27 12:00:00<SeP>2024-04-28 22:33:45<SeP>2024-04-30 09:07:30<SeP>2024-05-01 19:41:15<SeP>2024-05-03 06:15:00<SeP>2024-05-04 16:48:45<SeP>2024-05-06 03:22:30<SeP>2024-05-07 13:56:15<SeP>2024-05-09 00:30:00<SeP>2024-05-10 11:03:45<SeP>2024-05-11 21:37:30<SeP>2024-05-13 08:11:15<SeP>2024-05-14 18:45:00<SeP>2024-05-16 05:18:45<SeP>2024-05-17 15:52:30<SeP>2024-05-19 02:26:15<SeP>2024-05-20 13:00:00<SeP>2024-05-21 23:33:45<SeP>2024-05-23 10:07:30<SeP>2024-05-24 20:41:15<SeP>2024-05-26 07:15:00<SeP>2024-05-27 17:48:45<SeP>2024-05-29 04:22:30<SeP>2024-05-30 14:56:15<SeP>2024-06-01 01:30:00<SeP>2024-06-02 12:03:45<SeP>2024-06-03 22:37:30<SeP>2024-06-05 09:11:15<SeP>2024-06-06 19:45:00<SeP>2024-06-08 06:18:45<SeP>2024-06-09 16:52:30<SeP>2024-06-11 03:26:15<SeP>2024-06-12 14:00:00<SeP>2024-06-14 00:33:45<SeP>2024-06-15 11:07:30<SeP>2024-06-16 21:41:15<SeP>2024-06-18 08:15:00<SeP>2024-06-19 18:48:45<SeP>2024-06-21 05:22:30<SeP>2024-06-22 15:56:15<SeP>2024-06-24 02:30:00<SeP>2024-06-25 13:03:45<SeP>2024-06-26 23:37:30<SeP>2024-06-28 10:11:15<SeP>2024-06-29 20:45:00<SeP>2024-07-01 07:18:45<SeP>2024-07-02 17:52:30<SeP>2024-07-04 04:26:15<SeP>2024-07-05 15:00:00<SeP>2024-07-07 01:33:45<SeP>2024-07-08 12:07:30<SeP>2024-07-09 22:41:15<SeP>2024-07-11 09:15:00<SeP>2024-07-12 19:48:45<SeP>2024-07-14 06:22:30<SeP>2024-07-15 16:56:15<SeP>2024-07-17 03:30:00<SeP>2024-07-18 14:03:45<SeP>2024-07-20 00:37:30<SeP>2024-07-21 11:11:15<SeP>2024-07-22 21:45:00<SeP>2024-07-24 08:18:45<SeP>2024-07-25 18:52:30<SeP>2024-07-27 05:26:15<SeP>2024-07-28 16:00:00<SeP>2024-07-30 02:33:45<SeP>2024-07-31 13:07:30<SeP>2024-08-01 23:41:15<SeP>2024-08-03 10:15:00<SeP>2024-08-04 20:48:45<SeP>2024-08-06 07:22:30<SeP>2024-08-07 17:56:15<SeP>2024-08-09 04:30:00<SeP>2024-08-10 15:03:45<SeP>2024-08-12 01:37:30<SeP>2024-08-13 12:11:15<SeP>2024-08-14 22:45:00<SeP>2024-08-16 09:18:45<SeP>2024-08-17 19:52:30<SeP>2024-08-19 06:26:15<SeP>2024-08-20 17:00:00<SeP>2024-08-22 03:33:45<SeP>2024-08-23 14:07:30<SeP>2024-08-25 00:41:15<SeP>2024-08-26 11:15:00<SeP>2024-08-27 21:48:45<SeP>2024-08-29 08:22:30<SeP>2024-08-30 18:56:15<SeP>2024-09-01 05:30:00<SeP>2024-09-02 16:03:45<SeP>2024-09-04 02:37:30<SeP>2024-09-05 13:11:15<SeP>2024-09-06 23:45:00<SeP>2024-09-08 10:18:45<SeP>2024-09-09 20:52:30<SeP>2024-09-11 07:26:15<SeP>2024-09-12 18:00:00<SeP>2024-09-14 04:33:45<SeP>2024-09-15 15:07:30<SeP>2024-09-17 01:41:15<SeP>2024-09-18 12:15:00<SeP>2024-09-19 22:48:45<SeP>2024-09-21 09:22:30<SeP>2024-09-22 19:56:15<SeP>2024-09-24 06:30:00<SeP>2024-09-25 17:03:45<SeP>2024-09-27 03:37:30<SeP>2024-09-28 14:11:15<SeP>2024-09-30 00:45:00<SeP>2024-10-01 11:18:45<SeP>2024-10-02 21:52:30<SeP>2024-10-04 08:26:15<SeP>2024-10-05 19:00:00<SeP>2024-10-07 05:33:45<SeP>2024-10-08 16:07:30<SeP>2024-10-10 02:41:15<SeP>2024-10-11 13:15:00<SeP>2024-10-12 23:48:45<SeP>2024-10-14 10:22:30<SeP>2024-10-15 20:56:15<SeP>2024-10-17 07:30:00<SeP>2024-10-18 18:03:45<SeP>2024-10-20 04:37:30<SeP>2024-10-21 15:11:15<SeP>2024-10-23 01:45:00<SeP>2024-10-24 12:18:45<SeP>2024-10-25 22:52:30<SeP>2024-10-27 09:26:15<SeP>2024-10-28 20:00:00<SeP>2024-10-30 06:33:45<SeP>2024-10-31 17:07:30<SeP>2024-11-02 03:41:15<SeP>2024-11-03 13:15:00<SeP>2024-11-04 23:48:45<SeP>2024-11-06 10:22:30<SeP>2024-11-07 20:56:15<SeP>2024-11-09 07:30:00<SeP>2024-11-10 18:03:45<SeP>2024-11-12 04:37:30<SeP>2024-11-13 15:11:15<SeP>2024-11-15 01:45:00<SeP>2024-11-16 12:18:45<SeP>2024-11-17 22:52:30<SeP>2024-11-19 09:26:15<SeP>2024-11-20 20:00:00<SeP>2024-11-22 06:33:45<SeP>2024-11-23 17:07:30<SeP>2024-11-25 03:41:15<SeP>2024-11-26 14:15:00<SeP>2024-11-28 00:48:45<SeP>2024-11-29 11:22:30<SeP>2024-11-30 21:56:15<SeP>2024-12-02 08:30:00<SeP>2024-12-03 19:03:45<SeP>2024-12-05 05:37:30<SeP>2024-12-06 16:11:15<SeP>2024-12-08 02:45:00<SeP>2024-12-09 13:18:45<SeP>2024-12-10 23:52:30<SeP>2024-12-12 10:26:15<SeP>2024-12-13 21:00:00<SeP>2024-12-15 07:33:45<SeP>2024-12-16 18:07:30<SeP>2024-12-18 04:41:15<SeP>2024-12-19 15:15:00<SeP>2024-12-21 01:48:45<SeP>2024-12-22 12:22:30<SeP>2024-12-23 22:56:15<SeP>2024-12-25 09:30:00<SeP>2024-12-26 20:03:45<SeP>2024-12-28 06:37:30<SeP>2024-12-29 17:11:15<SeP>2024-12-31 03:45:00<SeP>2025-01-01 14:18:45<SeP>2025-01-03 00:52:30<SeP>2025-01-04 11:26:15<SeP>2025-01-05 22:00:00<SeP>2025-01-07 08:33:45<SeP>2025-01-08 19:07:30<SeP>2025-01-10 05:41:15<SeP>2025-01-11 16:15:00<SeP>2025-01-13 02:48:45<SeP>2025-01-14 13:22:30<SeP>2025-01-15 23:56:15<SeP>2025-01-17 10:30:00<SeP>2025-01-18 21:03:45<SeP>2025-01-20 07:37:30<SeP>2025-01-21 18:11:15<SeP>2025-01-23 04:45:00<SeP>2025-01-24 15:18:45<SeP>2025-01-26 01:52:30<SeP>2025-01-27 12:26:15<SeP>2025-01-28 23:00:00<SeP>2025-01-30 09:33:45<SeP>2025-01-31 20:07:30<SeP>2025-02-02 06:41:15<SeP>2025-02-03 17:15:00<SeP>2025-02-05 03:48:45<SeP>2025-02-06 14:22:30<SeP>2025-02-08 00:56:15<SeP>2025-02-09 11:30:00<SeP>2025-02-10 22:03:45<SeP>2025-02-12 08:37:30<SeP>2025-02-13 19:11:15<SeP>2025-02-15 05:45:00<SeP>2025-02-16 16:18:45<SeP>2025-02-18 02:52:30<SeP>2025-02-19 13:26:15";
  const itemLabel       = "Ataques";
  const itemData        = "152<SeP>614<SeP>967<SeP>718<SeP>543<SeP>210<SeP>6966<SeP>502<SeP>9196<SeP>975<SeP>299<SeP>1220<SeP>795<SeP>719<SeP>146<SeP>447<SeP>143<SeP>667<SeP>368<SeP>3556<SeP>6971<SeP>7758<SeP>6788<SeP>8195<SeP>429<SeP>281<SeP>386<SeP>212<SeP>334<SeP>5935<SeP>76<SeP>386<SeP>183<SeP>489<SeP>503<SeP>9768<SeP>9287<SeP>9775<SeP>9589<SeP>6151<SeP>5555<SeP>8305<SeP>7315<SeP>8819<SeP>8791<SeP>7633<SeP>7736<SeP>8906<SeP>8153<SeP>9063<SeP>5532<SeP>5737<SeP>11657<SeP>7014<SeP>7889<SeP>7026<SeP>10360<SeP>12675<SeP>21599<SeP>9095<SeP>9024<SeP>10018<SeP>5977<SeP>9366<SeP>7272<SeP>8915<SeP>8678<SeP>6438<SeP>6156<SeP>7600<SeP>6199<SeP>2612<SeP>6037<SeP>5336<SeP>6445<SeP>7132<SeP>7213<SeP>3485<SeP>6118<SeP>6089<SeP>6189<SeP>4929<SeP>7030<SeP>4143<SeP>6199<SeP>6603<SeP>5224<SeP>5729<SeP>5280<SeP>15285<SeP>16627<SeP>35507<SeP>7529<SeP>9107<SeP>5374<SeP>6587<SeP>12658<SeP>6082<SeP>4420<SeP>5125<SeP>4939<SeP>5433<SeP>5894<SeP>6974<SeP>7355<SeP>5484<SeP>5809<SeP>4627<SeP>7156<SeP>8394<SeP>7310<SeP>8548<SeP>3564<SeP>7133<SeP>10562<SeP>7875<SeP>3333<SeP>3621<SeP>6796<SeP>8970<SeP>5144<SeP>7810<SeP>8133<SeP>3624<SeP>3056<SeP>1056<SeP>1654<SeP>1827<SeP>2485<SeP>860<SeP>1359<SeP>516<SeP>1454<SeP>1473<SeP>1166<SeP>849<SeP>1063<SeP>1043<SeP>758<SeP>1453<SeP>1363<SeP>1217<SeP>822<SeP>2264<SeP>2005<SeP>6307<SeP>10335<SeP>7812<SeP>8358<SeP>6867<SeP>12768<SeP>2330<SeP>10027<SeP>10864<SeP>9460<SeP>12955<SeP>8596<SeP>11020<SeP>11564<SeP>8213<SeP>13154<SeP>5743<SeP>3950<SeP>8088<SeP>21002<SeP>10057<SeP>5841<SeP>7752<SeP>10277<SeP>17092<SeP>7209<SeP>5625<SeP>6501<SeP>7782<SeP>25878<SeP>7461<SeP>8507<SeP>11637<SeP>4082<SeP>6875<SeP>4582<SeP>16789<SeP>4756<SeP>9499<SeP>11363<SeP>6557<SeP>8053<SeP>7015<SeP>5414<SeP>3539<SeP>7075<SeP>7511<SeP>4609<SeP>6495<SeP>8126<SeP>4832<SeP>20328<SeP>7630<SeP>5677<SeP>6691<SeP>8040<SeP>10437<SeP>6838<SeP>3758<SeP>4596<SeP>4913<SeP>3605<SeP>4338<SeP>3561<SeP>632<SeP>109<SeP>630<SeP>548<SeP>645<SeP>716<SeP>357<SeP>626<SeP>1255<SeP>1195<SeP>3162<SeP>22863<SeP>615<SeP>3426<SeP>3553<SeP>3016<SeP>2920<SeP>7141<SeP>4055<SeP>2381<SeP>3846<SeP>2953<SeP>2716<SeP>3436<SeP>4214<SeP>2039<SeP>3487<SeP>1261<SeP>2561<SeP>1301<SeP>1837<SeP>1670<SeP>1380<SeP>879<SeP>1228<SeP>1597<SeP>26514<SeP>1568<SeP>4017<SeP>3375<SeP>2870<SeP>3115<SeP>3054<SeP>1579<SeP>3677<SeP>2481<SeP>3547<SeP>2321<SeP>2876<SeP>3101<SeP>3207<SeP>6692<SeP>4676<SeP>3799<SeP>3642<SeP>3031<SeP>2857<SeP>4360<SeP>5621<SeP>8403<SeP>5319<SeP>2236<SeP>3258<SeP>2315<SeP>4084<SeP>4085<SeP>3667<SeP>2803<SeP>2575<SeP>5799<SeP>3293<SeP>6186<SeP>3683<SeP>5442<SeP>5332<SeP>5966<SeP>3683<SeP>17962<SeP>9987<SeP>12516<SeP>1726<SeP>2288<SeP>4875<SeP>3209<SeP>4026<SeP>3923<SeP>5010<SeP>3781<SeP>4752<SeP>4019<SeP>3729<SeP>3224<SeP>1364<SeP>1797<SeP>2104<SeP>3659<SeP>2322<SeP>3336<SeP>3977<SeP>3903<SeP>3931<SeP>3169<SeP>4217<SeP>3323<SeP>3209<SeP>6306<SeP>7600<SeP>5967<SeP>4540<SeP>4704<SeP>4557<SeP>3476<SeP>3947<SeP>4056<SeP>6268<SeP>5397<SeP>4501<SeP>3942<SeP>946<SeP>787<SeP>2229<SeP>1329<SeP>619<SeP>1847<SeP>1793<SeP>576<SeP>3122<SeP>3896<SeP>6524<SeP>10992<SeP>27442<SeP>5468<SeP>10144<SeP>18045<SeP>5337<SeP>4877<SeP>6119<SeP>3939<SeP>24730<SeP>5354<SeP>4710<SeP>4838<SeP>5620<SeP>16246<SeP>18947<SeP>4106<SeP>3728<SeP>4215<SeP>5279<SeP>5692<SeP>3605<SeP>2891<SeP>3359<SeP>4174<SeP>5662<SeP>4390<SeP>17610<SeP>5783<SeP>6101<SeP>5446<SeP>1359<SeP>3914<SeP>3873<SeP>4466<SeP>3562<SeP>3586<SeP>2954<SeP>3344<SeP>3563<SeP>3588<SeP>5847<SeP>8678<SeP>10077<SeP>8463<SeP>9012<SeP>7675<SeP>7168<SeP>4952<SeP>5164<SeP>3656<SeP>25535<SeP>3643<SeP>3038<SeP>4104<SeP>10169<SeP>5574<SeP>4653<SeP>3954<SeP>5072<SeP>3500<SeP>4039";
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
  const itemData    = "688097<SeP>358384<SeP>205228<SeP>178074<SeP>107906<SeP>87019<SeP>82104<SeP>79685<SeP>67589<SeP>65149";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "292847<SeP>41413<SeP>39758<SeP>34755<SeP>14285<SeP>10523<SeP>7361<SeP>7182<SeP>6937<SeP>6774";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Attacks";
  const itemData    = "395250<SeP>323629<SeP>202526<SeP>138316<SeP>93621<SeP>80245<SeP>79522<SeP>69162<SeP>57967<SeP>56122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "359958<SeP>259476<SeP>233378<SeP>143825<SeP>66360<SeP>57340<SeP>55558<SeP>45527<SeP>41611<SeP>35475";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "153773<SeP>52628<SeP>40490<SeP>31858<SeP>21885<SeP>12577<SeP>10633<SeP>9233<SeP>7614<SeP>7412";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "347381<SeP>258713<SeP>121940<SeP>79605<SeP>54605<SeP>46707<SeP>39987<SeP>30525<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Hong Kong";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "688097<SeP>358384<SeP>205228<SeP>178074<SeP>107906<SeP>87019<SeP>82104<SeP>79685<SeP>67589<SeP>65149";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "292847<SeP>41413<SeP>39758<SeP>34755<SeP>14285<SeP>10523<SeP>7361<SeP>7182<SeP>6937<SeP>6774";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Ataques";
  const itemData    = "395250<SeP>323629<SeP>202526<SeP>138316<SeP>93621<SeP>80245<SeP>79522<SeP>69162<SeP>57967<SeP>56122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "359958<SeP>259476<SeP>233378<SeP>143825<SeP>66360<SeP>57340<SeP>55558<SeP>45527<SeP>41611<SeP>35475";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "153773<SeP>52628<SeP>40490<SeP>31858<SeP>21885<SeP>12577<SeP>10633<SeP>9233<SeP>7614<SeP>7412";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "347381<SeP>258713<SeP>121940<SeP>79605<SeP>54605<SeP>46707<SeP>39987<SeP>30525<SeP>29324<SeP>26846";
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
