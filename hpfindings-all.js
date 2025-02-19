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
  document.getElementById("last-updated").innerHTML = "2025-2-19";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "34.4";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.4";
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
  const metricData    = "2782178";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "537693";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2244485";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "136868";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1416464";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "828021";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52705";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "244487";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "583534";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42153";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2782178";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "537693";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2244485";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "136868";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1416464";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "828021";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "52705";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "244487";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "583534";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42153";
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
  const incomingData = "2782178<SeP>537693<SeP>2244485<SeP>136868";
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
  const incomingData = "2244485<SeP>1416464<SeP>828021<SeP>52705";
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
  const incomingData = "828021<SeP>244487<SeP>583534<SeP>42153";
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
  const incomingData = "2554604<SeP>252008<SeP>2302596";
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
  const incomingData = "388175<SeP>144<SeP>388031<SeP>224";
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
  const incomingData = "2782178<SeP>537693<SeP>2244485<SeP>136868";
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
  const incomingData = "2244485<SeP>1416464<SeP>828021<SeP>52705";
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
  const incomingData = "828021<SeP>244487<SeP>583534<SeP>42153";
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
  const incomingData = "2554604<SeP>252008<SeP>2302596";
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
  const incomingData = "388175<SeP>144<SeP>388031<SeP>224";
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
  const column3Data   = "216643<SeP>198210<SeP>12442<SeP>11912<SeP>9671<SeP>9359<SeP>6436<SeP>5593<SeP>4618<SeP>3444";
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
  const column2Data  = "207832<SeP>42956<SeP>482<SeP>443<SeP>424<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2368232<SeP>413946";
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
  const column3Data   = "216643<SeP>198210<SeP>12442<SeP>11912<SeP>9671<SeP>9359<SeP>6436<SeP>5593<SeP>4618<SeP>3444";
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
  const column2Data  = "207832<SeP>42956<SeP>482<SeP>443<SeP>424<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
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
  const column2Data  = "2368232<SeP>413946";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-19";

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
        "name": "traffic between 2023-07-26 and 2025-02-17"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          358997,50
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
        "name": "scans between 2023-07-26 and 2025-02-17"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          221736,32,
          358997,50
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
        "name": "attacks between 2023-07-26 and 2025-02-17"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          137261,21,
          358997,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-19";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-17"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          358997,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-17"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          221736,32,
          358997,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-17"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          137261,21,
          358997,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:26:33<SeP>2023-07-28 20:53:06<SeP>2023-07-30 07:19:39<SeP>2023-07-31 17:46:12<SeP>2023-08-02 04:12:45<SeP>2023-08-03 14:39:18<SeP>2023-08-05 01:05:51<SeP>2023-08-06 11:32:24<SeP>2023-08-07 21:58:57<SeP>2023-08-09 08:25:30<SeP>2023-08-10 18:52:03<SeP>2023-08-12 05:18:36<SeP>2023-08-13 15:45:09<SeP>2023-08-15 02:11:42<SeP>2023-08-16 12:38:15<SeP>2023-08-17 23:04:48<SeP>2023-08-19 09:31:21<SeP>2023-08-20 19:57:54<SeP>2023-08-22 06:24:27<SeP>2023-08-23 16:51:00<SeP>2023-08-25 03:17:33<SeP>2023-08-26 13:44:06<SeP>2023-08-28 00:10:39<SeP>2023-08-29 10:37:12<SeP>2023-08-30 21:03:45<SeP>2023-09-01 07:30:18<SeP>2023-09-02 17:56:51<SeP>2023-09-04 04:23:24<SeP>2023-09-05 14:49:57<SeP>2023-09-07 01:16:30<SeP>2023-09-08 11:43:03<SeP>2023-09-09 22:09:36<SeP>2023-09-11 08:36:09<SeP>2023-09-12 19:02:42<SeP>2023-09-14 05:29:15<SeP>2023-09-15 15:55:48<SeP>2023-09-17 02:22:21<SeP>2023-09-18 12:48:54<SeP>2023-09-19 23:15:27<SeP>2023-09-21 09:42:00<SeP>2023-09-22 20:08:33<SeP>2023-09-24 06:35:06<SeP>2023-09-25 17:01:39<SeP>2023-09-27 03:28:12<SeP>2023-09-28 13:54:45<SeP>2023-09-30 00:21:18<SeP>2023-10-01 10:47:51<SeP>2023-10-02 21:14:24<SeP>2023-10-04 07:40:57<SeP>2023-10-05 18:07:30<SeP>2023-10-07 04:34:03<SeP>2023-10-08 15:00:36<SeP>2023-10-10 01:27:09<SeP>2023-10-11 11:53:42<SeP>2023-10-12 22:20:15<SeP>2023-10-14 08:46:48<SeP>2023-10-15 19:13:21<SeP>2023-10-17 05:39:54<SeP>2023-10-18 16:06:27<SeP>2023-10-20 02:33:00<SeP>2023-10-21 12:59:33<SeP>2023-10-22 23:26:06<SeP>2023-10-24 09:52:39<SeP>2023-10-25 20:19:12<SeP>2023-10-27 06:45:45<SeP>2023-10-28 17:12:18<SeP>2023-10-30 03:38:51<SeP>2023-10-31 14:05:24<SeP>2023-11-02 00:31:57<SeP>2023-11-03 10:58:30<SeP>2023-11-04 21:25:03<SeP>2023-11-06 06:51:36<SeP>2023-11-07 17:18:09<SeP>2023-11-09 03:44:42<SeP>2023-11-10 14:11:15<SeP>2023-11-12 00:37:48<SeP>2023-11-13 11:04:21<SeP>2023-11-14 21:30:54<SeP>2023-11-16 07:57:27<SeP>2023-11-17 18:24:00<SeP>2023-11-19 04:50:33<SeP>2023-11-20 15:17:06<SeP>2023-11-22 01:43:39<SeP>2023-11-23 12:10:12<SeP>2023-11-24 22:36:45<SeP>2023-11-26 09:03:18<SeP>2023-11-27 19:29:51<SeP>2023-11-29 05:56:24<SeP>2023-11-30 16:22:57<SeP>2023-12-02 02:49:30<SeP>2023-12-03 13:16:03<SeP>2023-12-04 23:42:36<SeP>2023-12-06 10:09:09<SeP>2023-12-07 20:35:42<SeP>2023-12-09 07:02:15<SeP>2023-12-10 17:28:48<SeP>2023-12-12 03:55:21<SeP>2023-12-13 14:21:54<SeP>2023-12-15 00:48:27<SeP>2023-12-16 11:15:00<SeP>2023-12-17 21:41:33<SeP>2023-12-19 08:08:06<SeP>2023-12-20 18:34:39<SeP>2023-12-22 05:01:12<SeP>2023-12-23 15:27:45<SeP>2023-12-25 01:54:18<SeP>2023-12-26 12:20:51<SeP>2023-12-27 22:47:24<SeP>2023-12-29 09:13:57<SeP>2023-12-30 19:40:30<SeP>2024-01-01 06:07:03<SeP>2024-01-02 16:33:36<SeP>2024-01-04 03:00:09<SeP>2024-01-05 13:26:42<SeP>2024-01-06 23:53:15<SeP>2024-01-08 10:19:48<SeP>2024-01-09 20:46:21<SeP>2024-01-11 07:12:54<SeP>2024-01-12 17:39:27<SeP>2024-01-14 04:06:00<SeP>2024-01-15 14:32:33<SeP>2024-01-17 00:59:06<SeP>2024-01-18 11:25:39<SeP>2024-01-19 21:52:12<SeP>2024-01-21 08:18:45<SeP>2024-01-22 18:45:18<SeP>2024-01-24 05:11:51<SeP>2024-01-25 15:38:24<SeP>2024-01-27 02:04:57<SeP>2024-01-28 12:31:30<SeP>2024-01-29 22:58:03<SeP>2024-01-31 09:24:36<SeP>2024-02-01 19:51:09<SeP>2024-02-03 06:17:42<SeP>2024-02-04 16:44:15<SeP>2024-02-06 03:10:48<SeP>2024-02-07 13:37:21<SeP>2024-02-09 00:03:54<SeP>2024-02-10 10:30:27<SeP>2024-02-11 20:57:00<SeP>2024-02-13 07:23:33<SeP>2024-02-14 17:50:06<SeP>2024-02-16 04:16:39<SeP>2024-02-17 14:43:12<SeP>2024-02-19 01:09:45<SeP>2024-02-20 11:36:18<SeP>2024-02-21 22:02:51<SeP>2024-02-23 08:29:24<SeP>2024-02-24 18:55:57<SeP>2024-02-26 05:22:30<SeP>2024-02-27 15:49:03<SeP>2024-02-29 02:15:36<SeP>2024-03-01 12:42:09<SeP>2024-03-02 23:08:42<SeP>2024-03-04 09:35:15<SeP>2024-03-05 20:01:48<SeP>2024-03-07 06:28:21<SeP>2024-03-08 16:54:54<SeP>2024-03-10 04:21:27<SeP>2024-03-11 14:48:00<SeP>2024-03-13 01:14:33<SeP>2024-03-14 11:41:06<SeP>2024-03-15 22:07:39<SeP>2024-03-17 08:34:12<SeP>2024-03-18 19:00:45<SeP>2024-03-20 05:27:18<SeP>2024-03-21 15:53:51<SeP>2024-03-23 02:20:24<SeP>2024-03-24 12:46:57<SeP>2024-03-25 23:13:30<SeP>2024-03-27 09:40:03<SeP>2024-03-28 20:06:36<SeP>2024-03-30 06:33:09<SeP>2024-03-31 16:59:42<SeP>2024-04-02 03:26:15<SeP>2024-04-03 13:52:48<SeP>2024-04-05 00:19:21<SeP>2024-04-06 10:45:54<SeP>2024-04-07 21:12:27<SeP>2024-04-09 07:39:00<SeP>2024-04-10 18:05:33<SeP>2024-04-12 04:32:06<SeP>2024-04-13 14:58:39<SeP>2024-04-15 01:25:12<SeP>2024-04-16 11:51:45<SeP>2024-04-17 22:18:18<SeP>2024-04-19 08:44:51<SeP>2024-04-20 19:11:24<SeP>2024-04-22 05:37:57<SeP>2024-04-23 16:04:30<SeP>2024-04-25 02:31:03<SeP>2024-04-26 12:57:36<SeP>2024-04-27 23:24:09<SeP>2024-04-29 09:50:42<SeP>2024-04-30 20:17:15<SeP>2024-05-02 06:43:48<SeP>2024-05-03 17:10:21<SeP>2024-05-05 03:36:54<SeP>2024-05-06 14:03:27<SeP>2024-05-08 00:30:00<SeP>2024-05-09 10:56:33<SeP>2024-05-10 21:23:06<SeP>2024-05-12 07:49:39<SeP>2024-05-13 18:16:12<SeP>2024-05-15 04:42:45<SeP>2024-05-16 15:09:18<SeP>2024-05-18 01:35:51<SeP>2024-05-19 12:02:24<SeP>2024-05-20 22:28:57<SeP>2024-05-22 08:55:30<SeP>2024-05-23 19:22:03<SeP>2024-05-25 05:48:36<SeP>2024-05-26 16:15:09<SeP>2024-05-28 02:41:42<SeP>2024-05-29 13:08:15<SeP>2024-05-30 23:34:48<SeP>2024-06-01 10:01:21<SeP>2024-06-02 20:27:54<SeP>2024-06-04 06:54:27<SeP>2024-06-05 17:21:00<SeP>2024-06-07 03:47:33<SeP>2024-06-08 14:14:06<SeP>2024-06-10 00:40:39<SeP>2024-06-11 11:07:12<SeP>2024-06-12 21:33:45<SeP>2024-06-14 08:00:18<SeP>2024-06-15 18:26:51<SeP>2024-06-17 04:53:24<SeP>2024-06-18 15:19:57<SeP>2024-06-20 01:46:30<SeP>2024-06-21 12:13:03<SeP>2024-06-22 22:39:36<SeP>2024-06-24 09:06:09<SeP>2024-06-25 19:32:42<SeP>2024-06-27 05:59:15<SeP>2024-06-28 16:25:48<SeP>2024-06-30 02:52:21<SeP>2024-07-01 13:18:54<SeP>2024-07-02 23:45:27<SeP>2024-07-04 10:12:00<SeP>2024-07-05 20:38:33<SeP>2024-07-07 07:05:06<SeP>2024-07-08 17:31:39<SeP>2024-07-10 03:58:12<SeP>2024-07-11 14:24:45<SeP>2024-07-13 00:51:18<SeP>2024-07-14 11:17:51<SeP>2024-07-15 21:44:24<SeP>2024-07-17 08:10:57<SeP>2024-07-18 18:37:30<SeP>2024-07-20 05:04:03<SeP>2024-07-21 15:30:36<SeP>2024-07-23 01:57:09<SeP>2024-07-24 12:23:42<SeP>2024-07-25 22:50:15<SeP>2024-07-27 09:16:48<SeP>2024-07-28 19:43:21<SeP>2024-07-30 06:09:54<SeP>2024-07-31 16:36:27<SeP>2024-08-02 03:03:00<SeP>2024-08-03 13:29:33<SeP>2024-08-04 23:56:06<SeP>2024-08-06 10:22:39<SeP>2024-08-07 20:49:12<SeP>2024-08-09 07:15:45<SeP>2024-08-10 17:42:18<SeP>2024-08-12 04:08:51<SeP>2024-08-13 14:35:24<SeP>2024-08-15 01:01:57<SeP>2024-08-16 11:28:30<SeP>2024-08-17 21:55:03<SeP>2024-08-19 08:21:36<SeP>2024-08-20 18:48:09<SeP>2024-08-22 05:14:42<SeP>2024-08-23 15:41:15<SeP>2024-08-25 02:07:48<SeP>2024-08-26 12:34:21<SeP>2024-08-27 23:00:54<SeP>2024-08-29 09:27:27<SeP>2024-08-30 19:54:00<SeP>2024-09-01 06:20:33<SeP>2024-09-02 16:47:06<SeP>2024-09-04 03:13:39<SeP>2024-09-05 13:40:12<SeP>2024-09-07 00:06:45<SeP>2024-09-08 10:33:18<SeP>2024-09-09 20:59:51<SeP>2024-09-11 07:26:24<SeP>2024-09-12 17:52:57<SeP>2024-09-14 04:19:30<SeP>2024-09-15 14:46:03<SeP>2024-09-17 01:12:36<SeP>2024-09-18 11:39:09<SeP>2024-09-19 22:05:42<SeP>2024-09-21 08:32:15<SeP>2024-09-22 18:58:48<SeP>2024-09-24 05:25:21<SeP>2024-09-25 15:51:54<SeP>2024-09-27 02:18:27<SeP>2024-09-28 12:45:00<SeP>2024-09-29 23:11:33<SeP>2024-10-01 09:38:06<SeP>2024-10-02 20:04:39<SeP>2024-10-04 06:31:12<SeP>2024-10-05 16:57:45<SeP>2024-10-07 03:24:18<SeP>2024-10-08 13:50:51<SeP>2024-10-10 00:17:24<SeP>2024-10-11 10:43:57<SeP>2024-10-12 21:10:30<SeP>2024-10-14 07:37:03<SeP>2024-10-15 18:03:36<SeP>2024-10-17 04:30:09<SeP>2024-10-18 14:56:42<SeP>2024-10-20 01:23:15<SeP>2024-10-21 11:49:48<SeP>2024-10-22 22:16:21<SeP>2024-10-24 08:42:54<SeP>2024-10-25 19:09:27<SeP>2024-10-27 05:36:00<SeP>2024-10-28 16:02:33<SeP>2024-10-30 02:29:06<SeP>2024-10-31 12:55:39<SeP>2024-11-01 23:22:12<SeP>2024-11-03 08:48:45<SeP>2024-11-04 19:15:18<SeP>2024-11-06 05:41:51<SeP>2024-11-07 16:08:24<SeP>2024-11-09 02:34:57<SeP>2024-11-10 13:01:30<SeP>2024-11-11 23:28:03<SeP>2024-11-13 09:54:36<SeP>2024-11-14 20:21:09<SeP>2024-11-16 06:47:42<SeP>2024-11-17 17:14:15<SeP>2024-11-19 03:40:48<SeP>2024-11-20 14:07:21<SeP>2024-11-22 00:33:54<SeP>2024-11-23 11:00:27<SeP>2024-11-24 21:27:00<SeP>2024-11-26 07:53:33<SeP>2024-11-27 18:20:06<SeP>2024-11-29 04:46:39<SeP>2024-11-30 15:13:12<SeP>2024-12-02 01:39:45<SeP>2024-12-03 12:06:18<SeP>2024-12-04 22:32:51<SeP>2024-12-06 08:59:24<SeP>2024-12-07 19:25:57<SeP>2024-12-09 05:52:30<SeP>2024-12-10 16:19:03<SeP>2024-12-12 02:45:36<SeP>2024-12-13 13:12:09<SeP>2024-12-14 23:38:42<SeP>2024-12-16 10:05:15<SeP>2024-12-17 20:31:48<SeP>2024-12-19 06:58:21<SeP>2024-12-20 17:24:54<SeP>2024-12-22 03:51:27<SeP>2024-12-23 14:18:00<SeP>2024-12-25 00:44:33<SeP>2024-12-26 11:11:06<SeP>2024-12-27 21:37:39<SeP>2024-12-29 08:04:12<SeP>2024-12-30 18:30:45<SeP>2025-01-01 04:57:18<SeP>2025-01-02 15:23:51<SeP>2025-01-04 01:50:24<SeP>2025-01-05 12:16:57<SeP>2025-01-06 22:43:30<SeP>2025-01-08 09:10:03<SeP>2025-01-09 19:36:36<SeP>2025-01-11 06:03:09<SeP>2025-01-12 16:29:42<SeP>2025-01-14 02:56:15<SeP>2025-01-15 13:22:48<SeP>2025-01-16 23:49:21<SeP>2025-01-18 10:15:54<SeP>2025-01-19 20:42:27<SeP>2025-01-21 07:09:00<SeP>2025-01-22 17:35:33<SeP>2025-01-24 04:02:06<SeP>2025-01-25 14:28:39<SeP>2025-01-27 00:55:12<SeP>2025-01-28 11:21:45<SeP>2025-01-29 21:48:18<SeP>2025-01-31 08:14:51<SeP>2025-02-01 18:41:24<SeP>2025-02-03 05:07:57<SeP>2025-02-04 15:34:30<SeP>2025-02-06 02:01:03<SeP>2025-02-07 12:27:36<SeP>2025-02-08 22:54:09<SeP>2025-02-10 09:20:42<SeP>2025-02-11 19:47:15<SeP>2025-02-13 06:13:48<SeP>2025-02-14 16:40:21<SeP>2025-02-16 03:06:54<SeP>2025-02-17 13:33:27";
  const item1Label       = "Scans";
  const item1Data        = "755<SeP>1447<SeP>1373<SeP>1422<SeP>1194<SeP>1711<SeP>993<SeP>984<SeP>1066<SeP>3322<SeP>1472<SeP>2858<SeP>1825<SeP>2535<SeP>724<SeP>822<SeP>1416<SeP>1212<SeP>2749<SeP>1482<SeP>1481<SeP>1002<SeP>882<SeP>1100<SeP>1179<SeP>918<SeP>701<SeP>910<SeP>3640<SeP>964<SeP>784<SeP>1303<SeP>1258<SeP>845<SeP>1001<SeP>3059<SeP>2676<SeP>1923<SeP>1530<SeP>1749<SeP>1207<SeP>1501<SeP>1783<SeP>1889<SeP>1967<SeP>1594<SeP>1538<SeP>1576<SeP>1698<SeP>1643<SeP>1835<SeP>1841<SeP>1668<SeP>1457<SeP>3192<SeP>1627<SeP>1509<SeP>2043<SeP>1829<SeP>2150<SeP>1363<SeP>3797<SeP>1393<SeP>1456<SeP>1564<SeP>1218<SeP>1839<SeP>1565<SeP>1460<SeP>1240<SeP>1412<SeP>1170<SeP>2337<SeP>1212<SeP>1082<SeP>1293<SeP>2388<SeP>7078<SeP>1144<SeP>1261<SeP>1435<SeP>2240<SeP>1289<SeP>1066<SeP>6668<SeP>1544<SeP>1617<SeP>900<SeP>1345<SeP>3104<SeP>1169<SeP>967<SeP>1026<SeP>1018<SeP>1003<SeP>3000<SeP>1190<SeP>1380<SeP>2827<SeP>6431<SeP>1387<SeP>961<SeP>915<SeP>899<SeP>989<SeP>983<SeP>967<SeP>1018<SeP>3567<SeP>2376<SeP>1406<SeP>1631<SeP>697<SeP>798<SeP>1409<SeP>1261<SeP>1056<SeP>1005<SeP>2246<SeP>1115<SeP>1079<SeP>1043<SeP>969<SeP>1102<SeP>658<SeP>896<SeP>831<SeP>786<SeP>1106<SeP>804<SeP>915<SeP>727<SeP>914<SeP>817<SeP>737<SeP>721<SeP>853<SeP>915<SeP>826<SeP>866<SeP>842<SeP>773<SeP>761<SeP>942<SeP>859<SeP>806<SeP>884<SeP>855<SeP>937<SeP>1100<SeP>943<SeP>648<SeP>638<SeP>925<SeP>804<SeP>1311<SeP>844<SeP>989<SeP>1256<SeP>1179<SeP>809<SeP>959<SeP>899<SeP>906<SeP>723<SeP>1067<SeP>965<SeP>933<SeP>891<SeP>896<SeP>1061<SeP>1016<SeP>1018<SeP>945<SeP>1135<SeP>865<SeP>881<SeP>1255<SeP>1965<SeP>1246<SeP>995<SeP>1005<SeP>1174<SeP>975<SeP>949<SeP>827<SeP>616<SeP>917<SeP>1173<SeP>877<SeP>918<SeP>1017<SeP>1334<SeP>1015<SeP>1150<SeP>1267<SeP>1184<SeP>1217<SeP>1337<SeP>1236<SeP>1560<SeP>1844<SeP>1511<SeP>1215<SeP>738<SeP>785<SeP>1184<SeP>1062<SeP>554<SeP>705<SeP>842<SeP>998<SeP>965<SeP>5836<SeP>2879<SeP>1882<SeP>1349<SeP>959<SeP>802<SeP>1064<SeP>822<SeP>1002<SeP>1006<SeP>1097<SeP>952<SeP>1160<SeP>2299<SeP>1060<SeP>1171<SeP>1100<SeP>1336<SeP>1051<SeP>1023<SeP>977<SeP>1119<SeP>1085<SeP>971<SeP>1125<SeP>1068<SeP>1177<SeP>887<SeP>878<SeP>1279<SeP>1098<SeP>1121<SeP>1229<SeP>1324<SeP>1146<SeP>1602<SeP>1129<SeP>1104<SeP>1254<SeP>1004<SeP>1990<SeP>1208<SeP>1545<SeP>1841<SeP>1414<SeP>1906<SeP>1727<SeP>1245<SeP>1185<SeP>1051<SeP>1342<SeP>1261<SeP>1433<SeP>1125<SeP>1363<SeP>1615<SeP>1645<SeP>1325<SeP>1502<SeP>1475<SeP>1166<SeP>1007<SeP>1086<SeP>1379<SeP>1065<SeP>1189<SeP>1317<SeP>1134<SeP>1476<SeP>1863<SeP>1308<SeP>1232<SeP>1581<SeP>1442<SeP>1060<SeP>1080<SeP>981<SeP>776<SeP>888<SeP>1007<SeP>994<SeP>1774<SeP>1075<SeP>1109<SeP>1075<SeP>838<SeP>1028<SeP>851<SeP>1383<SeP>871<SeP>818<SeP>1118<SeP>1245<SeP>1599<SeP>1363<SeP>1035<SeP>1066<SeP>995<SeP>1828<SeP>1062<SeP>1159<SeP>956<SeP>1231<SeP>1345<SeP>961<SeP>939<SeP>1192<SeP>1076<SeP>825<SeP>882<SeP>1093<SeP>1435<SeP>1542<SeP>1432<SeP>1386<SeP>1217<SeP>908<SeP>1164<SeP>1167<SeP>1199<SeP>1028<SeP>1023<SeP>1004<SeP>1204<SeP>1282<SeP>1475<SeP>1156<SeP>1655<SeP>1293<SeP>1647<SeP>1345<SeP>1261<SeP>1443<SeP>1393<SeP>1324<SeP>1268<SeP>1728<SeP>1422<SeP>1346<SeP>1599<SeP>1277<SeP>1423<SeP>1271<SeP>1197<SeP>1296<SeP>1385<SeP>1666<SeP>1272<SeP>1302<SeP>1180<SeP>1444<SeP>1139<SeP>1317<SeP>1320<SeP>1648<SeP>1774<SeP>1323<SeP>790<SeP>1079<SeP>1800<SeP>1375<SeP>1293<SeP>1357<SeP>1004<SeP>1326<SeP>1253<SeP>1507<SeP>1298<SeP>1451<SeP>1618<SeP>1363<SeP>1497<SeP>1719<SeP>1252<SeP>1526<SeP>1342<SeP>1752<SeP>1606<SeP>925<SeP>1071<SeP>2022<SeP>1875<SeP>1658<SeP>1718<SeP>1688<SeP>1561<SeP>1506";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "152<SeP>612<SeP>966<SeP>712<SeP>551<SeP>211<SeP>6953<SeP>488<SeP>9219<SeP>977<SeP>278<SeP>1234<SeP>787<SeP>729<SeP>144<SeP>438<SeP>155<SeP>361<SeP>667<SeP>3197<SeP>6590<SeP>8083<SeP>6386<SeP>8990<SeP>422<SeP>303<SeP>402<SeP>164<SeP>378<SeP>5930<SeP>81<SeP>385<SeP>129<SeP>525<SeP>317<SeP>8626<SeP>9399<SeP>9955<SeP>9470<SeP>6851<SeP>5060<SeP>8396<SeP>6978<SeP>8970<SeP>8909<SeP>7502<SeP>7972<SeP>8317<SeP>8731<SeP>8227<SeP>5501<SeP>6022<SeP>11565<SeP>6919<SeP>7685<SeP>7573<SeP>9465<SeP>8987<SeP>17567<SeP>16548<SeP>8471<SeP>11481<SeP>6352<SeP>8080<SeP>8148<SeP>9161<SeP>8546<SeP>6049<SeP>6721<SeP>6223<SeP>6726<SeP>3875<SeP>5877<SeP>5714<SeP>6268<SeP>5619<SeP>7356<SeP>5126<SeP>5350<SeP>5306<SeP>7080<SeP>4526<SeP>6706<SeP>5171<SeP>5372<SeP>6872<SeP>5353<SeP>5296<SeP>5385<SeP>9298<SeP>20882<SeP>27943<SeP>15222<SeP>9499<SeP>5447<SeP>7802<SeP>11448<SeP>7679<SeP>3184<SeP>6687<SeP>3566<SeP>4817<SeP>6761<SeP>4889<SeP>8854<SeP>6623<SeP>4990<SeP>4795<SeP>5641<SeP>9481<SeP>8113<SeP>6917<SeP>5281<SeP>4334<SeP>10764<SeP>8796<SeP>5398<SeP>3127<SeP>6096<SeP>9174<SeP>5349<SeP>6113<SeP>9264<SeP>6097<SeP>1335<SeP>2451<SeP>1026<SeP>2399<SeP>2078<SeP>1500<SeP>696<SeP>1098<SeP>1195<SeP>1877<SeP>489<SeP>1283<SeP>1115<SeP>944<SeP>1054<SeP>1042<SeP>1152<SeP>1429<SeP>987<SeP>1763<SeP>2084<SeP>1516<SeP>12414<SeP>5724<SeP>10792<SeP>7322<SeP>5526<SeP>10755<SeP>9031<SeP>7190<SeP>9813<SeP>10465<SeP>11127<SeP>7400<SeP>13221<SeP>13423<SeP>6763<SeP>10393<SeP>5687<SeP>4974<SeP>6915<SeP>25426<SeP>5859<SeP>8592<SeP>7502<SeP>17384<SeP>8891<SeP>7280<SeP>5793<SeP>6437<SeP>8410<SeP>25305<SeP>6695<SeP>9837<SeP>9811<SeP>4728<SeP>6024<SeP>6174<SeP>16183<SeP>4655<SeP>12572<SeP>8006<SeP>6635<SeP>8033<SeP>7581<SeP>2996<SeP>6038<SeP>5690<SeP>7072<SeP>6374<SeP>6082<SeP>7336<SeP>18616<SeP>6045<SeP>9543<SeP>5069<SeP>6946<SeP>8264<SeP>10379<SeP>5581<SeP>2483<SeP>6314<SeP>4484<SeP>3987<SeP>4312<SeP>1654<SeP>617<SeP>595<SeP>151<SeP>619<SeP>583<SeP>776<SeP>337<SeP>645<SeP>1313<SeP>1221<SeP>3109<SeP>22936<SeP>535<SeP>4469<SeP>2713<SeP>2973<SeP>7142<SeP>3170<SeP>4191<SeP>2340<SeP>3804<SeP>2742<SeP>2921<SeP>4179<SeP>2969<SeP>2336<SeP>3552<SeP>1238<SeP>2407<SeP>1732<SeP>1292<SeP>1551<SeP>1375<SeP>1251<SeP>848<SeP>1609<SeP>26513<SeP>1698<SeP>4223<SeP>4036<SeP>1943<SeP>3228<SeP>3075<SeP>1933<SeP>3166<SeP>2783<SeP>3329<SeP>2586<SeP>2526<SeP>3264<SeP>3056<SeP>6764<SeP>4769<SeP>3914<SeP>3337<SeP>3143<SeP>3297<SeP>3972<SeP>5882<SeP>7949<SeP>5340<SeP>2225<SeP>3234<SeP>2399<SeP>4346<SeP>3730<SeP>3737<SeP>2743<SeP>2584<SeP>5854<SeP>3280<SeP>6130<SeP>3714<SeP>5406<SeP>5619<SeP>5673<SeP>3809<SeP>17839<SeP>9983<SeP>12516<SeP>1718<SeP>2269<SeP>4769<SeP>3277<SeP>3810<SeP>4187<SeP>4887<SeP>3676<SeP>4548<SeP>4463<SeP>3230<SeP>3701<SeP>1335<SeP>1738<SeP>2164<SeP>3647<SeP>2385<SeP>3005<SeP>3847<SeP>4175<SeP>3845<SeP>3265<SeP>4093<SeP>3324<SeP>3135<SeP>6003<SeP>7853<SeP>5773<SeP>4577<SeP>5028<SeP>4552<SeP>3310<SeP>3733<SeP>4475<SeP>5713<SeP>5369<SeP>4604<SeP>3763<SeP>1796<SeP>378<SeP>2358<SeP>1433<SeP>738<SeP>1914<SeP>1280<SeP>1060<SeP>2412<SeP>4113<SeP>5850<SeP>5075<SeP>33960<SeP>5168<SeP>6256<SeP>21829<SeP>5350<SeP>5242<SeP>5834<SeP>4182<SeP>24552<SeP>4784<SeP>5296<SeP>4677<SeP>5448<SeP>6370<SeP>28843<SeP>4714<SeP>3604<SeP>4080<SeP>3620<SeP>5995<SeP>4315<SeP>3782<SeP>2463<SeP>4451<SeP>5641<SeP>4631<SeP>17998<SeP>5121<SeP>5899<SeP>5852<SeP>1812<SeP>2872<SeP>3622<SeP>5001<SeP>3799<SeP>3973<SeP>2417<SeP>3647<SeP>2614<SeP>4359<SeP>4602<SeP>8115<SeP>10456<SeP>7874<SeP>8552<SeP>9155<SeP>6792<SeP>5729<SeP>4992<SeP>4235<SeP>22553<SeP>6383<SeP>3225<SeP>4678<SeP>3204<SeP>11193<SeP>5507<SeP>3783<SeP>4858<SeP>3907";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:26:33<SeP>2023-07-28 20:53:06<SeP>2023-07-30 07:19:39<SeP>2023-07-31 17:46:12<SeP>2023-08-02 04:12:45<SeP>2023-08-03 14:39:18<SeP>2023-08-05 01:05:51<SeP>2023-08-06 11:32:24<SeP>2023-08-07 21:58:57<SeP>2023-08-09 08:25:30<SeP>2023-08-10 18:52:03<SeP>2023-08-12 05:18:36<SeP>2023-08-13 15:45:09<SeP>2023-08-15 02:11:42<SeP>2023-08-16 12:38:15<SeP>2023-08-17 23:04:48<SeP>2023-08-19 09:31:21<SeP>2023-08-20 19:57:54<SeP>2023-08-22 06:24:27<SeP>2023-08-23 16:51:00<SeP>2023-08-25 03:17:33<SeP>2023-08-26 13:44:06<SeP>2023-08-28 00:10:39<SeP>2023-08-29 10:37:12<SeP>2023-08-30 21:03:45<SeP>2023-09-01 07:30:18<SeP>2023-09-02 17:56:51<SeP>2023-09-04 04:23:24<SeP>2023-09-05 14:49:57<SeP>2023-09-07 01:16:30<SeP>2023-09-08 11:43:03<SeP>2023-09-09 22:09:36<SeP>2023-09-11 08:36:09<SeP>2023-09-12 19:02:42<SeP>2023-09-14 05:29:15<SeP>2023-09-15 15:55:48<SeP>2023-09-17 02:22:21<SeP>2023-09-18 12:48:54<SeP>2023-09-19 23:15:27<SeP>2023-09-21 09:42:00<SeP>2023-09-22 20:08:33<SeP>2023-09-24 06:35:06<SeP>2023-09-25 17:01:39<SeP>2023-09-27 03:28:12<SeP>2023-09-28 13:54:45<SeP>2023-09-30 00:21:18<SeP>2023-10-01 10:47:51<SeP>2023-10-02 21:14:24<SeP>2023-10-04 07:40:57<SeP>2023-10-05 18:07:30<SeP>2023-10-07 04:34:03<SeP>2023-10-08 15:00:36<SeP>2023-10-10 01:27:09<SeP>2023-10-11 11:53:42<SeP>2023-10-12 22:20:15<SeP>2023-10-14 08:46:48<SeP>2023-10-15 19:13:21<SeP>2023-10-17 05:39:54<SeP>2023-10-18 16:06:27<SeP>2023-10-20 02:33:00<SeP>2023-10-21 12:59:33<SeP>2023-10-22 23:26:06<SeP>2023-10-24 09:52:39<SeP>2023-10-25 20:19:12<SeP>2023-10-27 06:45:45<SeP>2023-10-28 17:12:18<SeP>2023-10-30 03:38:51<SeP>2023-10-31 14:05:24<SeP>2023-11-02 00:31:57<SeP>2023-11-03 10:58:30<SeP>2023-11-04 21:25:03<SeP>2023-11-06 06:51:36<SeP>2023-11-07 17:18:09<SeP>2023-11-09 03:44:42<SeP>2023-11-10 14:11:15<SeP>2023-11-12 00:37:48<SeP>2023-11-13 11:04:21<SeP>2023-11-14 21:30:54<SeP>2023-11-16 07:57:27<SeP>2023-11-17 18:24:00<SeP>2023-11-19 04:50:33<SeP>2023-11-20 15:17:06<SeP>2023-11-22 01:43:39<SeP>2023-11-23 12:10:12<SeP>2023-11-24 22:36:45<SeP>2023-11-26 09:03:18<SeP>2023-11-27 19:29:51<SeP>2023-11-29 05:56:24<SeP>2023-11-30 16:22:57<SeP>2023-12-02 02:49:30<SeP>2023-12-03 13:16:03<SeP>2023-12-04 23:42:36<SeP>2023-12-06 10:09:09<SeP>2023-12-07 20:35:42<SeP>2023-12-09 07:02:15<SeP>2023-12-10 17:28:48<SeP>2023-12-12 03:55:21<SeP>2023-12-13 14:21:54<SeP>2023-12-15 00:48:27<SeP>2023-12-16 11:15:00<SeP>2023-12-17 21:41:33<SeP>2023-12-19 08:08:06<SeP>2023-12-20 18:34:39<SeP>2023-12-22 05:01:12<SeP>2023-12-23 15:27:45<SeP>2023-12-25 01:54:18<SeP>2023-12-26 12:20:51<SeP>2023-12-27 22:47:24<SeP>2023-12-29 09:13:57<SeP>2023-12-30 19:40:30<SeP>2024-01-01 06:07:03<SeP>2024-01-02 16:33:36<SeP>2024-01-04 03:00:09<SeP>2024-01-05 13:26:42<SeP>2024-01-06 23:53:15<SeP>2024-01-08 10:19:48<SeP>2024-01-09 20:46:21<SeP>2024-01-11 07:12:54<SeP>2024-01-12 17:39:27<SeP>2024-01-14 04:06:00<SeP>2024-01-15 14:32:33<SeP>2024-01-17 00:59:06<SeP>2024-01-18 11:25:39<SeP>2024-01-19 21:52:12<SeP>2024-01-21 08:18:45<SeP>2024-01-22 18:45:18<SeP>2024-01-24 05:11:51<SeP>2024-01-25 15:38:24<SeP>2024-01-27 02:04:57<SeP>2024-01-28 12:31:30<SeP>2024-01-29 22:58:03<SeP>2024-01-31 09:24:36<SeP>2024-02-01 19:51:09<SeP>2024-02-03 06:17:42<SeP>2024-02-04 16:44:15<SeP>2024-02-06 03:10:48<SeP>2024-02-07 13:37:21<SeP>2024-02-09 00:03:54<SeP>2024-02-10 10:30:27<SeP>2024-02-11 20:57:00<SeP>2024-02-13 07:23:33<SeP>2024-02-14 17:50:06<SeP>2024-02-16 04:16:39<SeP>2024-02-17 14:43:12<SeP>2024-02-19 01:09:45<SeP>2024-02-20 11:36:18<SeP>2024-02-21 22:02:51<SeP>2024-02-23 08:29:24<SeP>2024-02-24 18:55:57<SeP>2024-02-26 05:22:30<SeP>2024-02-27 15:49:03<SeP>2024-02-29 02:15:36<SeP>2024-03-01 12:42:09<SeP>2024-03-02 23:08:42<SeP>2024-03-04 09:35:15<SeP>2024-03-05 20:01:48<SeP>2024-03-07 06:28:21<SeP>2024-03-08 16:54:54<SeP>2024-03-10 04:21:27<SeP>2024-03-11 14:48:00<SeP>2024-03-13 01:14:33<SeP>2024-03-14 11:41:06<SeP>2024-03-15 22:07:39<SeP>2024-03-17 08:34:12<SeP>2024-03-18 19:00:45<SeP>2024-03-20 05:27:18<SeP>2024-03-21 15:53:51<SeP>2024-03-23 02:20:24<SeP>2024-03-24 12:46:57<SeP>2024-03-25 23:13:30<SeP>2024-03-27 09:40:03<SeP>2024-03-28 20:06:36<SeP>2024-03-30 06:33:09<SeP>2024-03-31 16:59:42<SeP>2024-04-02 03:26:15<SeP>2024-04-03 13:52:48<SeP>2024-04-05 00:19:21<SeP>2024-04-06 10:45:54<SeP>2024-04-07 21:12:27<SeP>2024-04-09 07:39:00<SeP>2024-04-10 18:05:33<SeP>2024-04-12 04:32:06<SeP>2024-04-13 14:58:39<SeP>2024-04-15 01:25:12<SeP>2024-04-16 11:51:45<SeP>2024-04-17 22:18:18<SeP>2024-04-19 08:44:51<SeP>2024-04-20 19:11:24<SeP>2024-04-22 05:37:57<SeP>2024-04-23 16:04:30<SeP>2024-04-25 02:31:03<SeP>2024-04-26 12:57:36<SeP>2024-04-27 23:24:09<SeP>2024-04-29 09:50:42<SeP>2024-04-30 20:17:15<SeP>2024-05-02 06:43:48<SeP>2024-05-03 17:10:21<SeP>2024-05-05 03:36:54<SeP>2024-05-06 14:03:27<SeP>2024-05-08 00:30:00<SeP>2024-05-09 10:56:33<SeP>2024-05-10 21:23:06<SeP>2024-05-12 07:49:39<SeP>2024-05-13 18:16:12<SeP>2024-05-15 04:42:45<SeP>2024-05-16 15:09:18<SeP>2024-05-18 01:35:51<SeP>2024-05-19 12:02:24<SeP>2024-05-20 22:28:57<SeP>2024-05-22 08:55:30<SeP>2024-05-23 19:22:03<SeP>2024-05-25 05:48:36<SeP>2024-05-26 16:15:09<SeP>2024-05-28 02:41:42<SeP>2024-05-29 13:08:15<SeP>2024-05-30 23:34:48<SeP>2024-06-01 10:01:21<SeP>2024-06-02 20:27:54<SeP>2024-06-04 06:54:27<SeP>2024-06-05 17:21:00<SeP>2024-06-07 03:47:33<SeP>2024-06-08 14:14:06<SeP>2024-06-10 00:40:39<SeP>2024-06-11 11:07:12<SeP>2024-06-12 21:33:45<SeP>2024-06-14 08:00:18<SeP>2024-06-15 18:26:51<SeP>2024-06-17 04:53:24<SeP>2024-06-18 15:19:57<SeP>2024-06-20 01:46:30<SeP>2024-06-21 12:13:03<SeP>2024-06-22 22:39:36<SeP>2024-06-24 09:06:09<SeP>2024-06-25 19:32:42<SeP>2024-06-27 05:59:15<SeP>2024-06-28 16:25:48<SeP>2024-06-30 02:52:21<SeP>2024-07-01 13:18:54<SeP>2024-07-02 23:45:27<SeP>2024-07-04 10:12:00<SeP>2024-07-05 20:38:33<SeP>2024-07-07 07:05:06<SeP>2024-07-08 17:31:39<SeP>2024-07-10 03:58:12<SeP>2024-07-11 14:24:45<SeP>2024-07-13 00:51:18<SeP>2024-07-14 11:17:51<SeP>2024-07-15 21:44:24<SeP>2024-07-17 08:10:57<SeP>2024-07-18 18:37:30<SeP>2024-07-20 05:04:03<SeP>2024-07-21 15:30:36<SeP>2024-07-23 01:57:09<SeP>2024-07-24 12:23:42<SeP>2024-07-25 22:50:15<SeP>2024-07-27 09:16:48<SeP>2024-07-28 19:43:21<SeP>2024-07-30 06:09:54<SeP>2024-07-31 16:36:27<SeP>2024-08-02 03:03:00<SeP>2024-08-03 13:29:33<SeP>2024-08-04 23:56:06<SeP>2024-08-06 10:22:39<SeP>2024-08-07 20:49:12<SeP>2024-08-09 07:15:45<SeP>2024-08-10 17:42:18<SeP>2024-08-12 04:08:51<SeP>2024-08-13 14:35:24<SeP>2024-08-15 01:01:57<SeP>2024-08-16 11:28:30<SeP>2024-08-17 21:55:03<SeP>2024-08-19 08:21:36<SeP>2024-08-20 18:48:09<SeP>2024-08-22 05:14:42<SeP>2024-08-23 15:41:15<SeP>2024-08-25 02:07:48<SeP>2024-08-26 12:34:21<SeP>2024-08-27 23:00:54<SeP>2024-08-29 09:27:27<SeP>2024-08-30 19:54:00<SeP>2024-09-01 06:20:33<SeP>2024-09-02 16:47:06<SeP>2024-09-04 03:13:39<SeP>2024-09-05 13:40:12<SeP>2024-09-07 00:06:45<SeP>2024-09-08 10:33:18<SeP>2024-09-09 20:59:51<SeP>2024-09-11 07:26:24<SeP>2024-09-12 17:52:57<SeP>2024-09-14 04:19:30<SeP>2024-09-15 14:46:03<SeP>2024-09-17 01:12:36<SeP>2024-09-18 11:39:09<SeP>2024-09-19 22:05:42<SeP>2024-09-21 08:32:15<SeP>2024-09-22 18:58:48<SeP>2024-09-24 05:25:21<SeP>2024-09-25 15:51:54<SeP>2024-09-27 02:18:27<SeP>2024-09-28 12:45:00<SeP>2024-09-29 23:11:33<SeP>2024-10-01 09:38:06<SeP>2024-10-02 20:04:39<SeP>2024-10-04 06:31:12<SeP>2024-10-05 16:57:45<SeP>2024-10-07 03:24:18<SeP>2024-10-08 13:50:51<SeP>2024-10-10 00:17:24<SeP>2024-10-11 10:43:57<SeP>2024-10-12 21:10:30<SeP>2024-10-14 07:37:03<SeP>2024-10-15 18:03:36<SeP>2024-10-17 04:30:09<SeP>2024-10-18 14:56:42<SeP>2024-10-20 01:23:15<SeP>2024-10-21 11:49:48<SeP>2024-10-22 22:16:21<SeP>2024-10-24 08:42:54<SeP>2024-10-25 19:09:27<SeP>2024-10-27 05:36:00<SeP>2024-10-28 16:02:33<SeP>2024-10-30 02:29:06<SeP>2024-10-31 12:55:39<SeP>2024-11-01 23:22:12<SeP>2024-11-03 08:48:45<SeP>2024-11-04 19:15:18<SeP>2024-11-06 05:41:51<SeP>2024-11-07 16:08:24<SeP>2024-11-09 02:34:57<SeP>2024-11-10 13:01:30<SeP>2024-11-11 23:28:03<SeP>2024-11-13 09:54:36<SeP>2024-11-14 20:21:09<SeP>2024-11-16 06:47:42<SeP>2024-11-17 17:14:15<SeP>2024-11-19 03:40:48<SeP>2024-11-20 14:07:21<SeP>2024-11-22 00:33:54<SeP>2024-11-23 11:00:27<SeP>2024-11-24 21:27:00<SeP>2024-11-26 07:53:33<SeP>2024-11-27 18:20:06<SeP>2024-11-29 04:46:39<SeP>2024-11-30 15:13:12<SeP>2024-12-02 01:39:45<SeP>2024-12-03 12:06:18<SeP>2024-12-04 22:32:51<SeP>2024-12-06 08:59:24<SeP>2024-12-07 19:25:57<SeP>2024-12-09 05:52:30<SeP>2024-12-10 16:19:03<SeP>2024-12-12 02:45:36<SeP>2024-12-13 13:12:09<SeP>2024-12-14 23:38:42<SeP>2024-12-16 10:05:15<SeP>2024-12-17 20:31:48<SeP>2024-12-19 06:58:21<SeP>2024-12-20 17:24:54<SeP>2024-12-22 03:51:27<SeP>2024-12-23 14:18:00<SeP>2024-12-25 00:44:33<SeP>2024-12-26 11:11:06<SeP>2024-12-27 21:37:39<SeP>2024-12-29 08:04:12<SeP>2024-12-30 18:30:45<SeP>2025-01-01 04:57:18<SeP>2025-01-02 15:23:51<SeP>2025-01-04 01:50:24<SeP>2025-01-05 12:16:57<SeP>2025-01-06 22:43:30<SeP>2025-01-08 09:10:03<SeP>2025-01-09 19:36:36<SeP>2025-01-11 06:03:09<SeP>2025-01-12 16:29:42<SeP>2025-01-14 02:56:15<SeP>2025-01-15 13:22:48<SeP>2025-01-16 23:49:21<SeP>2025-01-18 10:15:54<SeP>2025-01-19 20:42:27<SeP>2025-01-21 07:09:00<SeP>2025-01-22 17:35:33<SeP>2025-01-24 04:02:06<SeP>2025-01-25 14:28:39<SeP>2025-01-27 00:55:12<SeP>2025-01-28 11:21:45<SeP>2025-01-29 21:48:18<SeP>2025-01-31 08:14:51<SeP>2025-02-01 18:41:24<SeP>2025-02-03 05:07:57<SeP>2025-02-04 15:34:30<SeP>2025-02-06 02:01:03<SeP>2025-02-07 12:27:36<SeP>2025-02-08 22:54:09<SeP>2025-02-10 09:20:42<SeP>2025-02-11 19:47:15<SeP>2025-02-13 06:13:48<SeP>2025-02-14 16:40:21<SeP>2025-02-16 03:06:54<SeP>2025-02-17 13:33:27";
  const itemLabel       = "Scans";
  const itemData        = "755<SeP>1447<SeP>1373<SeP>1422<SeP>1194<SeP>1711<SeP>993<SeP>984<SeP>1066<SeP>3322<SeP>1472<SeP>2858<SeP>1825<SeP>2535<SeP>724<SeP>822<SeP>1416<SeP>1212<SeP>2749<SeP>1482<SeP>1481<SeP>1002<SeP>882<SeP>1100<SeP>1179<SeP>918<SeP>701<SeP>910<SeP>3640<SeP>964<SeP>784<SeP>1303<SeP>1258<SeP>845<SeP>1001<SeP>3059<SeP>2676<SeP>1923<SeP>1530<SeP>1749<SeP>1207<SeP>1501<SeP>1783<SeP>1889<SeP>1967<SeP>1594<SeP>1538<SeP>1576<SeP>1698<SeP>1643<SeP>1835<SeP>1841<SeP>1668<SeP>1457<SeP>3192<SeP>1627<SeP>1509<SeP>2043<SeP>1829<SeP>2150<SeP>1363<SeP>3797<SeP>1393<SeP>1456<SeP>1564<SeP>1218<SeP>1839<SeP>1565<SeP>1460<SeP>1240<SeP>1412<SeP>1170<SeP>2337<SeP>1212<SeP>1082<SeP>1293<SeP>2388<SeP>7078<SeP>1144<SeP>1261<SeP>1435<SeP>2240<SeP>1289<SeP>1066<SeP>6668<SeP>1544<SeP>1617<SeP>900<SeP>1345<SeP>3104<SeP>1169<SeP>967<SeP>1026<SeP>1018<SeP>1003<SeP>3000<SeP>1190<SeP>1380<SeP>2827<SeP>6431<SeP>1387<SeP>961<SeP>915<SeP>899<SeP>989<SeP>983<SeP>967<SeP>1018<SeP>3567<SeP>2376<SeP>1406<SeP>1631<SeP>697<SeP>798<SeP>1409<SeP>1261<SeP>1056<SeP>1005<SeP>2246<SeP>1115<SeP>1079<SeP>1043<SeP>969<SeP>1102<SeP>658<SeP>896<SeP>831<SeP>786<SeP>1106<SeP>804<SeP>915<SeP>727<SeP>914<SeP>817<SeP>737<SeP>721<SeP>853<SeP>915<SeP>826<SeP>866<SeP>842<SeP>773<SeP>761<SeP>942<SeP>859<SeP>806<SeP>884<SeP>855<SeP>937<SeP>1100<SeP>943<SeP>648<SeP>638<SeP>925<SeP>804<SeP>1311<SeP>844<SeP>989<SeP>1256<SeP>1179<SeP>809<SeP>959<SeP>899<SeP>906<SeP>723<SeP>1067<SeP>965<SeP>933<SeP>891<SeP>896<SeP>1061<SeP>1016<SeP>1018<SeP>945<SeP>1135<SeP>865<SeP>881<SeP>1255<SeP>1965<SeP>1246<SeP>995<SeP>1005<SeP>1174<SeP>975<SeP>949<SeP>827<SeP>616<SeP>917<SeP>1173<SeP>877<SeP>918<SeP>1017<SeP>1334<SeP>1015<SeP>1150<SeP>1267<SeP>1184<SeP>1217<SeP>1337<SeP>1236<SeP>1560<SeP>1844<SeP>1511<SeP>1215<SeP>738<SeP>785<SeP>1184<SeP>1062<SeP>554<SeP>705<SeP>842<SeP>998<SeP>965<SeP>5836<SeP>2879<SeP>1882<SeP>1349<SeP>959<SeP>802<SeP>1064<SeP>822<SeP>1002<SeP>1006<SeP>1097<SeP>952<SeP>1160<SeP>2299<SeP>1060<SeP>1171<SeP>1100<SeP>1336<SeP>1051<SeP>1023<SeP>977<SeP>1119<SeP>1085<SeP>971<SeP>1125<SeP>1068<SeP>1177<SeP>887<SeP>878<SeP>1279<SeP>1098<SeP>1121<SeP>1229<SeP>1324<SeP>1146<SeP>1602<SeP>1129<SeP>1104<SeP>1254<SeP>1004<SeP>1990<SeP>1208<SeP>1545<SeP>1841<SeP>1414<SeP>1906<SeP>1727<SeP>1245<SeP>1185<SeP>1051<SeP>1342<SeP>1261<SeP>1433<SeP>1125<SeP>1363<SeP>1615<SeP>1645<SeP>1325<SeP>1502<SeP>1475<SeP>1166<SeP>1007<SeP>1086<SeP>1379<SeP>1065<SeP>1189<SeP>1317<SeP>1134<SeP>1476<SeP>1863<SeP>1308<SeP>1232<SeP>1581<SeP>1442<SeP>1060<SeP>1080<SeP>981<SeP>776<SeP>888<SeP>1007<SeP>994<SeP>1774<SeP>1075<SeP>1109<SeP>1075<SeP>838<SeP>1028<SeP>851<SeP>1383<SeP>871<SeP>818<SeP>1118<SeP>1245<SeP>1599<SeP>1363<SeP>1035<SeP>1066<SeP>995<SeP>1828<SeP>1062<SeP>1159<SeP>956<SeP>1231<SeP>1345<SeP>961<SeP>939<SeP>1192<SeP>1076<SeP>825<SeP>882<SeP>1093<SeP>1435<SeP>1542<SeP>1432<SeP>1386<SeP>1217<SeP>908<SeP>1164<SeP>1167<SeP>1199<SeP>1028<SeP>1023<SeP>1004<SeP>1204<SeP>1282<SeP>1475<SeP>1156<SeP>1655<SeP>1293<SeP>1647<SeP>1345<SeP>1261<SeP>1443<SeP>1393<SeP>1324<SeP>1268<SeP>1728<SeP>1422<SeP>1346<SeP>1599<SeP>1277<SeP>1423<SeP>1271<SeP>1197<SeP>1296<SeP>1385<SeP>1666<SeP>1272<SeP>1302<SeP>1180<SeP>1444<SeP>1139<SeP>1317<SeP>1320<SeP>1648<SeP>1774<SeP>1323<SeP>790<SeP>1079<SeP>1800<SeP>1375<SeP>1293<SeP>1357<SeP>1004<SeP>1326<SeP>1253<SeP>1507<SeP>1298<SeP>1451<SeP>1618<SeP>1363<SeP>1497<SeP>1719<SeP>1252<SeP>1526<SeP>1342<SeP>1752<SeP>1606<SeP>925<SeP>1071<SeP>2022<SeP>1875<SeP>1658<SeP>1718<SeP>1688<SeP>1561<SeP>1506";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:26:33<SeP>2023-07-28 20:53:06<SeP>2023-07-30 07:19:39<SeP>2023-07-31 17:46:12<SeP>2023-08-02 04:12:45<SeP>2023-08-03 14:39:18<SeP>2023-08-05 01:05:51<SeP>2023-08-06 11:32:24<SeP>2023-08-07 21:58:57<SeP>2023-08-09 08:25:30<SeP>2023-08-10 18:52:03<SeP>2023-08-12 05:18:36<SeP>2023-08-13 15:45:09<SeP>2023-08-15 02:11:42<SeP>2023-08-16 12:38:15<SeP>2023-08-17 23:04:48<SeP>2023-08-19 09:31:21<SeP>2023-08-20 19:57:54<SeP>2023-08-22 06:24:27<SeP>2023-08-23 16:51:00<SeP>2023-08-25 03:17:33<SeP>2023-08-26 13:44:06<SeP>2023-08-28 00:10:39<SeP>2023-08-29 10:37:12<SeP>2023-08-30 21:03:45<SeP>2023-09-01 07:30:18<SeP>2023-09-02 17:56:51<SeP>2023-09-04 04:23:24<SeP>2023-09-05 14:49:57<SeP>2023-09-07 01:16:30<SeP>2023-09-08 11:43:03<SeP>2023-09-09 22:09:36<SeP>2023-09-11 08:36:09<SeP>2023-09-12 19:02:42<SeP>2023-09-14 05:29:15<SeP>2023-09-15 15:55:48<SeP>2023-09-17 02:22:21<SeP>2023-09-18 12:48:54<SeP>2023-09-19 23:15:27<SeP>2023-09-21 09:42:00<SeP>2023-09-22 20:08:33<SeP>2023-09-24 06:35:06<SeP>2023-09-25 17:01:39<SeP>2023-09-27 03:28:12<SeP>2023-09-28 13:54:45<SeP>2023-09-30 00:21:18<SeP>2023-10-01 10:47:51<SeP>2023-10-02 21:14:24<SeP>2023-10-04 07:40:57<SeP>2023-10-05 18:07:30<SeP>2023-10-07 04:34:03<SeP>2023-10-08 15:00:36<SeP>2023-10-10 01:27:09<SeP>2023-10-11 11:53:42<SeP>2023-10-12 22:20:15<SeP>2023-10-14 08:46:48<SeP>2023-10-15 19:13:21<SeP>2023-10-17 05:39:54<SeP>2023-10-18 16:06:27<SeP>2023-10-20 02:33:00<SeP>2023-10-21 12:59:33<SeP>2023-10-22 23:26:06<SeP>2023-10-24 09:52:39<SeP>2023-10-25 20:19:12<SeP>2023-10-27 06:45:45<SeP>2023-10-28 17:12:18<SeP>2023-10-30 03:38:51<SeP>2023-10-31 14:05:24<SeP>2023-11-02 00:31:57<SeP>2023-11-03 10:58:30<SeP>2023-11-04 21:25:03<SeP>2023-11-06 06:51:36<SeP>2023-11-07 17:18:09<SeP>2023-11-09 03:44:42<SeP>2023-11-10 14:11:15<SeP>2023-11-12 00:37:48<SeP>2023-11-13 11:04:21<SeP>2023-11-14 21:30:54<SeP>2023-11-16 07:57:27<SeP>2023-11-17 18:24:00<SeP>2023-11-19 04:50:33<SeP>2023-11-20 15:17:06<SeP>2023-11-22 01:43:39<SeP>2023-11-23 12:10:12<SeP>2023-11-24 22:36:45<SeP>2023-11-26 09:03:18<SeP>2023-11-27 19:29:51<SeP>2023-11-29 05:56:24<SeP>2023-11-30 16:22:57<SeP>2023-12-02 02:49:30<SeP>2023-12-03 13:16:03<SeP>2023-12-04 23:42:36<SeP>2023-12-06 10:09:09<SeP>2023-12-07 20:35:42<SeP>2023-12-09 07:02:15<SeP>2023-12-10 17:28:48<SeP>2023-12-12 03:55:21<SeP>2023-12-13 14:21:54<SeP>2023-12-15 00:48:27<SeP>2023-12-16 11:15:00<SeP>2023-12-17 21:41:33<SeP>2023-12-19 08:08:06<SeP>2023-12-20 18:34:39<SeP>2023-12-22 05:01:12<SeP>2023-12-23 15:27:45<SeP>2023-12-25 01:54:18<SeP>2023-12-26 12:20:51<SeP>2023-12-27 22:47:24<SeP>2023-12-29 09:13:57<SeP>2023-12-30 19:40:30<SeP>2024-01-01 06:07:03<SeP>2024-01-02 16:33:36<SeP>2024-01-04 03:00:09<SeP>2024-01-05 13:26:42<SeP>2024-01-06 23:53:15<SeP>2024-01-08 10:19:48<SeP>2024-01-09 20:46:21<SeP>2024-01-11 07:12:54<SeP>2024-01-12 17:39:27<SeP>2024-01-14 04:06:00<SeP>2024-01-15 14:32:33<SeP>2024-01-17 00:59:06<SeP>2024-01-18 11:25:39<SeP>2024-01-19 21:52:12<SeP>2024-01-21 08:18:45<SeP>2024-01-22 18:45:18<SeP>2024-01-24 05:11:51<SeP>2024-01-25 15:38:24<SeP>2024-01-27 02:04:57<SeP>2024-01-28 12:31:30<SeP>2024-01-29 22:58:03<SeP>2024-01-31 09:24:36<SeP>2024-02-01 19:51:09<SeP>2024-02-03 06:17:42<SeP>2024-02-04 16:44:15<SeP>2024-02-06 03:10:48<SeP>2024-02-07 13:37:21<SeP>2024-02-09 00:03:54<SeP>2024-02-10 10:30:27<SeP>2024-02-11 20:57:00<SeP>2024-02-13 07:23:33<SeP>2024-02-14 17:50:06<SeP>2024-02-16 04:16:39<SeP>2024-02-17 14:43:12<SeP>2024-02-19 01:09:45<SeP>2024-02-20 11:36:18<SeP>2024-02-21 22:02:51<SeP>2024-02-23 08:29:24<SeP>2024-02-24 18:55:57<SeP>2024-02-26 05:22:30<SeP>2024-02-27 15:49:03<SeP>2024-02-29 02:15:36<SeP>2024-03-01 12:42:09<SeP>2024-03-02 23:08:42<SeP>2024-03-04 09:35:15<SeP>2024-03-05 20:01:48<SeP>2024-03-07 06:28:21<SeP>2024-03-08 16:54:54<SeP>2024-03-10 04:21:27<SeP>2024-03-11 14:48:00<SeP>2024-03-13 01:14:33<SeP>2024-03-14 11:41:06<SeP>2024-03-15 22:07:39<SeP>2024-03-17 08:34:12<SeP>2024-03-18 19:00:45<SeP>2024-03-20 05:27:18<SeP>2024-03-21 15:53:51<SeP>2024-03-23 02:20:24<SeP>2024-03-24 12:46:57<SeP>2024-03-25 23:13:30<SeP>2024-03-27 09:40:03<SeP>2024-03-28 20:06:36<SeP>2024-03-30 06:33:09<SeP>2024-03-31 16:59:42<SeP>2024-04-02 03:26:15<SeP>2024-04-03 13:52:48<SeP>2024-04-05 00:19:21<SeP>2024-04-06 10:45:54<SeP>2024-04-07 21:12:27<SeP>2024-04-09 07:39:00<SeP>2024-04-10 18:05:33<SeP>2024-04-12 04:32:06<SeP>2024-04-13 14:58:39<SeP>2024-04-15 01:25:12<SeP>2024-04-16 11:51:45<SeP>2024-04-17 22:18:18<SeP>2024-04-19 08:44:51<SeP>2024-04-20 19:11:24<SeP>2024-04-22 05:37:57<SeP>2024-04-23 16:04:30<SeP>2024-04-25 02:31:03<SeP>2024-04-26 12:57:36<SeP>2024-04-27 23:24:09<SeP>2024-04-29 09:50:42<SeP>2024-04-30 20:17:15<SeP>2024-05-02 06:43:48<SeP>2024-05-03 17:10:21<SeP>2024-05-05 03:36:54<SeP>2024-05-06 14:03:27<SeP>2024-05-08 00:30:00<SeP>2024-05-09 10:56:33<SeP>2024-05-10 21:23:06<SeP>2024-05-12 07:49:39<SeP>2024-05-13 18:16:12<SeP>2024-05-15 04:42:45<SeP>2024-05-16 15:09:18<SeP>2024-05-18 01:35:51<SeP>2024-05-19 12:02:24<SeP>2024-05-20 22:28:57<SeP>2024-05-22 08:55:30<SeP>2024-05-23 19:22:03<SeP>2024-05-25 05:48:36<SeP>2024-05-26 16:15:09<SeP>2024-05-28 02:41:42<SeP>2024-05-29 13:08:15<SeP>2024-05-30 23:34:48<SeP>2024-06-01 10:01:21<SeP>2024-06-02 20:27:54<SeP>2024-06-04 06:54:27<SeP>2024-06-05 17:21:00<SeP>2024-06-07 03:47:33<SeP>2024-06-08 14:14:06<SeP>2024-06-10 00:40:39<SeP>2024-06-11 11:07:12<SeP>2024-06-12 21:33:45<SeP>2024-06-14 08:00:18<SeP>2024-06-15 18:26:51<SeP>2024-06-17 04:53:24<SeP>2024-06-18 15:19:57<SeP>2024-06-20 01:46:30<SeP>2024-06-21 12:13:03<SeP>2024-06-22 22:39:36<SeP>2024-06-24 09:06:09<SeP>2024-06-25 19:32:42<SeP>2024-06-27 05:59:15<SeP>2024-06-28 16:25:48<SeP>2024-06-30 02:52:21<SeP>2024-07-01 13:18:54<SeP>2024-07-02 23:45:27<SeP>2024-07-04 10:12:00<SeP>2024-07-05 20:38:33<SeP>2024-07-07 07:05:06<SeP>2024-07-08 17:31:39<SeP>2024-07-10 03:58:12<SeP>2024-07-11 14:24:45<SeP>2024-07-13 00:51:18<SeP>2024-07-14 11:17:51<SeP>2024-07-15 21:44:24<SeP>2024-07-17 08:10:57<SeP>2024-07-18 18:37:30<SeP>2024-07-20 05:04:03<SeP>2024-07-21 15:30:36<SeP>2024-07-23 01:57:09<SeP>2024-07-24 12:23:42<SeP>2024-07-25 22:50:15<SeP>2024-07-27 09:16:48<SeP>2024-07-28 19:43:21<SeP>2024-07-30 06:09:54<SeP>2024-07-31 16:36:27<SeP>2024-08-02 03:03:00<SeP>2024-08-03 13:29:33<SeP>2024-08-04 23:56:06<SeP>2024-08-06 10:22:39<SeP>2024-08-07 20:49:12<SeP>2024-08-09 07:15:45<SeP>2024-08-10 17:42:18<SeP>2024-08-12 04:08:51<SeP>2024-08-13 14:35:24<SeP>2024-08-15 01:01:57<SeP>2024-08-16 11:28:30<SeP>2024-08-17 21:55:03<SeP>2024-08-19 08:21:36<SeP>2024-08-20 18:48:09<SeP>2024-08-22 05:14:42<SeP>2024-08-23 15:41:15<SeP>2024-08-25 02:07:48<SeP>2024-08-26 12:34:21<SeP>2024-08-27 23:00:54<SeP>2024-08-29 09:27:27<SeP>2024-08-30 19:54:00<SeP>2024-09-01 06:20:33<SeP>2024-09-02 16:47:06<SeP>2024-09-04 03:13:39<SeP>2024-09-05 13:40:12<SeP>2024-09-07 00:06:45<SeP>2024-09-08 10:33:18<SeP>2024-09-09 20:59:51<SeP>2024-09-11 07:26:24<SeP>2024-09-12 17:52:57<SeP>2024-09-14 04:19:30<SeP>2024-09-15 14:46:03<SeP>2024-09-17 01:12:36<SeP>2024-09-18 11:39:09<SeP>2024-09-19 22:05:42<SeP>2024-09-21 08:32:15<SeP>2024-09-22 18:58:48<SeP>2024-09-24 05:25:21<SeP>2024-09-25 15:51:54<SeP>2024-09-27 02:18:27<SeP>2024-09-28 12:45:00<SeP>2024-09-29 23:11:33<SeP>2024-10-01 09:38:06<SeP>2024-10-02 20:04:39<SeP>2024-10-04 06:31:12<SeP>2024-10-05 16:57:45<SeP>2024-10-07 03:24:18<SeP>2024-10-08 13:50:51<SeP>2024-10-10 00:17:24<SeP>2024-10-11 10:43:57<SeP>2024-10-12 21:10:30<SeP>2024-10-14 07:37:03<SeP>2024-10-15 18:03:36<SeP>2024-10-17 04:30:09<SeP>2024-10-18 14:56:42<SeP>2024-10-20 01:23:15<SeP>2024-10-21 11:49:48<SeP>2024-10-22 22:16:21<SeP>2024-10-24 08:42:54<SeP>2024-10-25 19:09:27<SeP>2024-10-27 05:36:00<SeP>2024-10-28 16:02:33<SeP>2024-10-30 02:29:06<SeP>2024-10-31 12:55:39<SeP>2024-11-01 23:22:12<SeP>2024-11-03 08:48:45<SeP>2024-11-04 19:15:18<SeP>2024-11-06 05:41:51<SeP>2024-11-07 16:08:24<SeP>2024-11-09 02:34:57<SeP>2024-11-10 13:01:30<SeP>2024-11-11 23:28:03<SeP>2024-11-13 09:54:36<SeP>2024-11-14 20:21:09<SeP>2024-11-16 06:47:42<SeP>2024-11-17 17:14:15<SeP>2024-11-19 03:40:48<SeP>2024-11-20 14:07:21<SeP>2024-11-22 00:33:54<SeP>2024-11-23 11:00:27<SeP>2024-11-24 21:27:00<SeP>2024-11-26 07:53:33<SeP>2024-11-27 18:20:06<SeP>2024-11-29 04:46:39<SeP>2024-11-30 15:13:12<SeP>2024-12-02 01:39:45<SeP>2024-12-03 12:06:18<SeP>2024-12-04 22:32:51<SeP>2024-12-06 08:59:24<SeP>2024-12-07 19:25:57<SeP>2024-12-09 05:52:30<SeP>2024-12-10 16:19:03<SeP>2024-12-12 02:45:36<SeP>2024-12-13 13:12:09<SeP>2024-12-14 23:38:42<SeP>2024-12-16 10:05:15<SeP>2024-12-17 20:31:48<SeP>2024-12-19 06:58:21<SeP>2024-12-20 17:24:54<SeP>2024-12-22 03:51:27<SeP>2024-12-23 14:18:00<SeP>2024-12-25 00:44:33<SeP>2024-12-26 11:11:06<SeP>2024-12-27 21:37:39<SeP>2024-12-29 08:04:12<SeP>2024-12-30 18:30:45<SeP>2025-01-01 04:57:18<SeP>2025-01-02 15:23:51<SeP>2025-01-04 01:50:24<SeP>2025-01-05 12:16:57<SeP>2025-01-06 22:43:30<SeP>2025-01-08 09:10:03<SeP>2025-01-09 19:36:36<SeP>2025-01-11 06:03:09<SeP>2025-01-12 16:29:42<SeP>2025-01-14 02:56:15<SeP>2025-01-15 13:22:48<SeP>2025-01-16 23:49:21<SeP>2025-01-18 10:15:54<SeP>2025-01-19 20:42:27<SeP>2025-01-21 07:09:00<SeP>2025-01-22 17:35:33<SeP>2025-01-24 04:02:06<SeP>2025-01-25 14:28:39<SeP>2025-01-27 00:55:12<SeP>2025-01-28 11:21:45<SeP>2025-01-29 21:48:18<SeP>2025-01-31 08:14:51<SeP>2025-02-01 18:41:24<SeP>2025-02-03 05:07:57<SeP>2025-02-04 15:34:30<SeP>2025-02-06 02:01:03<SeP>2025-02-07 12:27:36<SeP>2025-02-08 22:54:09<SeP>2025-02-10 09:20:42<SeP>2025-02-11 19:47:15<SeP>2025-02-13 06:13:48<SeP>2025-02-14 16:40:21<SeP>2025-02-16 03:06:54<SeP>2025-02-17 13:33:27";
  const itemLabel       = "Attacks";
  const itemData        = "152<SeP>612<SeP>966<SeP>712<SeP>551<SeP>211<SeP>6953<SeP>488<SeP>9219<SeP>977<SeP>278<SeP>1234<SeP>787<SeP>729<SeP>144<SeP>438<SeP>155<SeP>361<SeP>667<SeP>3197<SeP>6590<SeP>8083<SeP>6386<SeP>8990<SeP>422<SeP>303<SeP>402<SeP>164<SeP>378<SeP>5930<SeP>81<SeP>385<SeP>129<SeP>525<SeP>317<SeP>8626<SeP>9399<SeP>9955<SeP>9470<SeP>6851<SeP>5060<SeP>8396<SeP>6978<SeP>8970<SeP>8909<SeP>7502<SeP>7972<SeP>8317<SeP>8731<SeP>8227<SeP>5501<SeP>6022<SeP>11565<SeP>6919<SeP>7685<SeP>7573<SeP>9465<SeP>8987<SeP>17567<SeP>16548<SeP>8471<SeP>11481<SeP>6352<SeP>8080<SeP>8148<SeP>9161<SeP>8546<SeP>6049<SeP>6721<SeP>6223<SeP>6726<SeP>3875<SeP>5877<SeP>5714<SeP>6268<SeP>5619<SeP>7356<SeP>5126<SeP>5350<SeP>5306<SeP>7080<SeP>4526<SeP>6706<SeP>5171<SeP>5372<SeP>6872<SeP>5353<SeP>5296<SeP>5385<SeP>9298<SeP>20882<SeP>27943<SeP>15222<SeP>9499<SeP>5447<SeP>7802<SeP>11448<SeP>7679<SeP>3184<SeP>6687<SeP>3566<SeP>4817<SeP>6761<SeP>4889<SeP>8854<SeP>6623<SeP>4990<SeP>4795<SeP>5641<SeP>9481<SeP>8113<SeP>6917<SeP>5281<SeP>4334<SeP>10764<SeP>8796<SeP>5398<SeP>3127<SeP>6096<SeP>9174<SeP>5349<SeP>6113<SeP>9264<SeP>6097<SeP>1335<SeP>2451<SeP>1026<SeP>2399<SeP>2078<SeP>1500<SeP>696<SeP>1098<SeP>1195<SeP>1877<SeP>489<SeP>1283<SeP>1115<SeP>944<SeP>1054<SeP>1042<SeP>1152<SeP>1429<SeP>987<SeP>1763<SeP>2084<SeP>1516<SeP>12414<SeP>5724<SeP>10792<SeP>7322<SeP>5526<SeP>10755<SeP>9031<SeP>7190<SeP>9813<SeP>10465<SeP>11127<SeP>7400<SeP>13221<SeP>13423<SeP>6763<SeP>10393<SeP>5687<SeP>4974<SeP>6915<SeP>25426<SeP>5859<SeP>8592<SeP>7502<SeP>17384<SeP>8891<SeP>7280<SeP>5793<SeP>6437<SeP>8410<SeP>25305<SeP>6695<SeP>9837<SeP>9811<SeP>4728<SeP>6024<SeP>6174<SeP>16183<SeP>4655<SeP>12572<SeP>8006<SeP>6635<SeP>8033<SeP>7581<SeP>2996<SeP>6038<SeP>5690<SeP>7072<SeP>6374<SeP>6082<SeP>7336<SeP>18616<SeP>6045<SeP>9543<SeP>5069<SeP>6946<SeP>8264<SeP>10379<SeP>5581<SeP>2483<SeP>6314<SeP>4484<SeP>3987<SeP>4312<SeP>1654<SeP>617<SeP>595<SeP>151<SeP>619<SeP>583<SeP>776<SeP>337<SeP>645<SeP>1313<SeP>1221<SeP>3109<SeP>22936<SeP>535<SeP>4469<SeP>2713<SeP>2973<SeP>7142<SeP>3170<SeP>4191<SeP>2340<SeP>3804<SeP>2742<SeP>2921<SeP>4179<SeP>2969<SeP>2336<SeP>3552<SeP>1238<SeP>2407<SeP>1732<SeP>1292<SeP>1551<SeP>1375<SeP>1251<SeP>848<SeP>1609<SeP>26513<SeP>1698<SeP>4223<SeP>4036<SeP>1943<SeP>3228<SeP>3075<SeP>1933<SeP>3166<SeP>2783<SeP>3329<SeP>2586<SeP>2526<SeP>3264<SeP>3056<SeP>6764<SeP>4769<SeP>3914<SeP>3337<SeP>3143<SeP>3297<SeP>3972<SeP>5882<SeP>7949<SeP>5340<SeP>2225<SeP>3234<SeP>2399<SeP>4346<SeP>3730<SeP>3737<SeP>2743<SeP>2584<SeP>5854<SeP>3280<SeP>6130<SeP>3714<SeP>5406<SeP>5619<SeP>5673<SeP>3809<SeP>17839<SeP>9983<SeP>12516<SeP>1718<SeP>2269<SeP>4769<SeP>3277<SeP>3810<SeP>4187<SeP>4887<SeP>3676<SeP>4548<SeP>4463<SeP>3230<SeP>3701<SeP>1335<SeP>1738<SeP>2164<SeP>3647<SeP>2385<SeP>3005<SeP>3847<SeP>4175<SeP>3845<SeP>3265<SeP>4093<SeP>3324<SeP>3135<SeP>6003<SeP>7853<SeP>5773<SeP>4577<SeP>5028<SeP>4552<SeP>3310<SeP>3733<SeP>4475<SeP>5713<SeP>5369<SeP>4604<SeP>3763<SeP>1796<SeP>378<SeP>2358<SeP>1433<SeP>738<SeP>1914<SeP>1280<SeP>1060<SeP>2412<SeP>4113<SeP>5850<SeP>5075<SeP>33960<SeP>5168<SeP>6256<SeP>21829<SeP>5350<SeP>5242<SeP>5834<SeP>4182<SeP>24552<SeP>4784<SeP>5296<SeP>4677<SeP>5448<SeP>6370<SeP>28843<SeP>4714<SeP>3604<SeP>4080<SeP>3620<SeP>5995<SeP>4315<SeP>3782<SeP>2463<SeP>4451<SeP>5641<SeP>4631<SeP>17998<SeP>5121<SeP>5899<SeP>5852<SeP>1812<SeP>2872<SeP>3622<SeP>5001<SeP>3799<SeP>3973<SeP>2417<SeP>3647<SeP>2614<SeP>4359<SeP>4602<SeP>8115<SeP>10456<SeP>7874<SeP>8552<SeP>9155<SeP>6792<SeP>5729<SeP>4992<SeP>4235<SeP>22553<SeP>6383<SeP>3225<SeP>4678<SeP>3204<SeP>11193<SeP>5507<SeP>3783<SeP>4858<SeP>3907";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:26:33<SeP>2023-07-28 20:53:06<SeP>2023-07-30 07:19:39<SeP>2023-07-31 17:46:12<SeP>2023-08-02 04:12:45<SeP>2023-08-03 14:39:18<SeP>2023-08-05 01:05:51<SeP>2023-08-06 11:32:24<SeP>2023-08-07 21:58:57<SeP>2023-08-09 08:25:30<SeP>2023-08-10 18:52:03<SeP>2023-08-12 05:18:36<SeP>2023-08-13 15:45:09<SeP>2023-08-15 02:11:42<SeP>2023-08-16 12:38:15<SeP>2023-08-17 23:04:48<SeP>2023-08-19 09:31:21<SeP>2023-08-20 19:57:54<SeP>2023-08-22 06:24:27<SeP>2023-08-23 16:51:00<SeP>2023-08-25 03:17:33<SeP>2023-08-26 13:44:06<SeP>2023-08-28 00:10:39<SeP>2023-08-29 10:37:12<SeP>2023-08-30 21:03:45<SeP>2023-09-01 07:30:18<SeP>2023-09-02 17:56:51<SeP>2023-09-04 04:23:24<SeP>2023-09-05 14:49:57<SeP>2023-09-07 01:16:30<SeP>2023-09-08 11:43:03<SeP>2023-09-09 22:09:36<SeP>2023-09-11 08:36:09<SeP>2023-09-12 19:02:42<SeP>2023-09-14 05:29:15<SeP>2023-09-15 15:55:48<SeP>2023-09-17 02:22:21<SeP>2023-09-18 12:48:54<SeP>2023-09-19 23:15:27<SeP>2023-09-21 09:42:00<SeP>2023-09-22 20:08:33<SeP>2023-09-24 06:35:06<SeP>2023-09-25 17:01:39<SeP>2023-09-27 03:28:12<SeP>2023-09-28 13:54:45<SeP>2023-09-30 00:21:18<SeP>2023-10-01 10:47:51<SeP>2023-10-02 21:14:24<SeP>2023-10-04 07:40:57<SeP>2023-10-05 18:07:30<SeP>2023-10-07 04:34:03<SeP>2023-10-08 15:00:36<SeP>2023-10-10 01:27:09<SeP>2023-10-11 11:53:42<SeP>2023-10-12 22:20:15<SeP>2023-10-14 08:46:48<SeP>2023-10-15 19:13:21<SeP>2023-10-17 05:39:54<SeP>2023-10-18 16:06:27<SeP>2023-10-20 02:33:00<SeP>2023-10-21 12:59:33<SeP>2023-10-22 23:26:06<SeP>2023-10-24 09:52:39<SeP>2023-10-25 20:19:12<SeP>2023-10-27 06:45:45<SeP>2023-10-28 17:12:18<SeP>2023-10-30 03:38:51<SeP>2023-10-31 14:05:24<SeP>2023-11-02 00:31:57<SeP>2023-11-03 10:58:30<SeP>2023-11-04 21:25:03<SeP>2023-11-06 06:51:36<SeP>2023-11-07 17:18:09<SeP>2023-11-09 03:44:42<SeP>2023-11-10 14:11:15<SeP>2023-11-12 00:37:48<SeP>2023-11-13 11:04:21<SeP>2023-11-14 21:30:54<SeP>2023-11-16 07:57:27<SeP>2023-11-17 18:24:00<SeP>2023-11-19 04:50:33<SeP>2023-11-20 15:17:06<SeP>2023-11-22 01:43:39<SeP>2023-11-23 12:10:12<SeP>2023-11-24 22:36:45<SeP>2023-11-26 09:03:18<SeP>2023-11-27 19:29:51<SeP>2023-11-29 05:56:24<SeP>2023-11-30 16:22:57<SeP>2023-12-02 02:49:30<SeP>2023-12-03 13:16:03<SeP>2023-12-04 23:42:36<SeP>2023-12-06 10:09:09<SeP>2023-12-07 20:35:42<SeP>2023-12-09 07:02:15<SeP>2023-12-10 17:28:48<SeP>2023-12-12 03:55:21<SeP>2023-12-13 14:21:54<SeP>2023-12-15 00:48:27<SeP>2023-12-16 11:15:00<SeP>2023-12-17 21:41:33<SeP>2023-12-19 08:08:06<SeP>2023-12-20 18:34:39<SeP>2023-12-22 05:01:12<SeP>2023-12-23 15:27:45<SeP>2023-12-25 01:54:18<SeP>2023-12-26 12:20:51<SeP>2023-12-27 22:47:24<SeP>2023-12-29 09:13:57<SeP>2023-12-30 19:40:30<SeP>2024-01-01 06:07:03<SeP>2024-01-02 16:33:36<SeP>2024-01-04 03:00:09<SeP>2024-01-05 13:26:42<SeP>2024-01-06 23:53:15<SeP>2024-01-08 10:19:48<SeP>2024-01-09 20:46:21<SeP>2024-01-11 07:12:54<SeP>2024-01-12 17:39:27<SeP>2024-01-14 04:06:00<SeP>2024-01-15 14:32:33<SeP>2024-01-17 00:59:06<SeP>2024-01-18 11:25:39<SeP>2024-01-19 21:52:12<SeP>2024-01-21 08:18:45<SeP>2024-01-22 18:45:18<SeP>2024-01-24 05:11:51<SeP>2024-01-25 15:38:24<SeP>2024-01-27 02:04:57<SeP>2024-01-28 12:31:30<SeP>2024-01-29 22:58:03<SeP>2024-01-31 09:24:36<SeP>2024-02-01 19:51:09<SeP>2024-02-03 06:17:42<SeP>2024-02-04 16:44:15<SeP>2024-02-06 03:10:48<SeP>2024-02-07 13:37:21<SeP>2024-02-09 00:03:54<SeP>2024-02-10 10:30:27<SeP>2024-02-11 20:57:00<SeP>2024-02-13 07:23:33<SeP>2024-02-14 17:50:06<SeP>2024-02-16 04:16:39<SeP>2024-02-17 14:43:12<SeP>2024-02-19 01:09:45<SeP>2024-02-20 11:36:18<SeP>2024-02-21 22:02:51<SeP>2024-02-23 08:29:24<SeP>2024-02-24 18:55:57<SeP>2024-02-26 05:22:30<SeP>2024-02-27 15:49:03<SeP>2024-02-29 02:15:36<SeP>2024-03-01 12:42:09<SeP>2024-03-02 23:08:42<SeP>2024-03-04 09:35:15<SeP>2024-03-05 20:01:48<SeP>2024-03-07 06:28:21<SeP>2024-03-08 16:54:54<SeP>2024-03-10 04:21:27<SeP>2024-03-11 14:48:00<SeP>2024-03-13 01:14:33<SeP>2024-03-14 11:41:06<SeP>2024-03-15 22:07:39<SeP>2024-03-17 08:34:12<SeP>2024-03-18 19:00:45<SeP>2024-03-20 05:27:18<SeP>2024-03-21 15:53:51<SeP>2024-03-23 02:20:24<SeP>2024-03-24 12:46:57<SeP>2024-03-25 23:13:30<SeP>2024-03-27 09:40:03<SeP>2024-03-28 20:06:36<SeP>2024-03-30 06:33:09<SeP>2024-03-31 16:59:42<SeP>2024-04-02 03:26:15<SeP>2024-04-03 13:52:48<SeP>2024-04-05 00:19:21<SeP>2024-04-06 10:45:54<SeP>2024-04-07 21:12:27<SeP>2024-04-09 07:39:00<SeP>2024-04-10 18:05:33<SeP>2024-04-12 04:32:06<SeP>2024-04-13 14:58:39<SeP>2024-04-15 01:25:12<SeP>2024-04-16 11:51:45<SeP>2024-04-17 22:18:18<SeP>2024-04-19 08:44:51<SeP>2024-04-20 19:11:24<SeP>2024-04-22 05:37:57<SeP>2024-04-23 16:04:30<SeP>2024-04-25 02:31:03<SeP>2024-04-26 12:57:36<SeP>2024-04-27 23:24:09<SeP>2024-04-29 09:50:42<SeP>2024-04-30 20:17:15<SeP>2024-05-02 06:43:48<SeP>2024-05-03 17:10:21<SeP>2024-05-05 03:36:54<SeP>2024-05-06 14:03:27<SeP>2024-05-08 00:30:00<SeP>2024-05-09 10:56:33<SeP>2024-05-10 21:23:06<SeP>2024-05-12 07:49:39<SeP>2024-05-13 18:16:12<SeP>2024-05-15 04:42:45<SeP>2024-05-16 15:09:18<SeP>2024-05-18 01:35:51<SeP>2024-05-19 12:02:24<SeP>2024-05-20 22:28:57<SeP>2024-05-22 08:55:30<SeP>2024-05-23 19:22:03<SeP>2024-05-25 05:48:36<SeP>2024-05-26 16:15:09<SeP>2024-05-28 02:41:42<SeP>2024-05-29 13:08:15<SeP>2024-05-30 23:34:48<SeP>2024-06-01 10:01:21<SeP>2024-06-02 20:27:54<SeP>2024-06-04 06:54:27<SeP>2024-06-05 17:21:00<SeP>2024-06-07 03:47:33<SeP>2024-06-08 14:14:06<SeP>2024-06-10 00:40:39<SeP>2024-06-11 11:07:12<SeP>2024-06-12 21:33:45<SeP>2024-06-14 08:00:18<SeP>2024-06-15 18:26:51<SeP>2024-06-17 04:53:24<SeP>2024-06-18 15:19:57<SeP>2024-06-20 01:46:30<SeP>2024-06-21 12:13:03<SeP>2024-06-22 22:39:36<SeP>2024-06-24 09:06:09<SeP>2024-06-25 19:32:42<SeP>2024-06-27 05:59:15<SeP>2024-06-28 16:25:48<SeP>2024-06-30 02:52:21<SeP>2024-07-01 13:18:54<SeP>2024-07-02 23:45:27<SeP>2024-07-04 10:12:00<SeP>2024-07-05 20:38:33<SeP>2024-07-07 07:05:06<SeP>2024-07-08 17:31:39<SeP>2024-07-10 03:58:12<SeP>2024-07-11 14:24:45<SeP>2024-07-13 00:51:18<SeP>2024-07-14 11:17:51<SeP>2024-07-15 21:44:24<SeP>2024-07-17 08:10:57<SeP>2024-07-18 18:37:30<SeP>2024-07-20 05:04:03<SeP>2024-07-21 15:30:36<SeP>2024-07-23 01:57:09<SeP>2024-07-24 12:23:42<SeP>2024-07-25 22:50:15<SeP>2024-07-27 09:16:48<SeP>2024-07-28 19:43:21<SeP>2024-07-30 06:09:54<SeP>2024-07-31 16:36:27<SeP>2024-08-02 03:03:00<SeP>2024-08-03 13:29:33<SeP>2024-08-04 23:56:06<SeP>2024-08-06 10:22:39<SeP>2024-08-07 20:49:12<SeP>2024-08-09 07:15:45<SeP>2024-08-10 17:42:18<SeP>2024-08-12 04:08:51<SeP>2024-08-13 14:35:24<SeP>2024-08-15 01:01:57<SeP>2024-08-16 11:28:30<SeP>2024-08-17 21:55:03<SeP>2024-08-19 08:21:36<SeP>2024-08-20 18:48:09<SeP>2024-08-22 05:14:42<SeP>2024-08-23 15:41:15<SeP>2024-08-25 02:07:48<SeP>2024-08-26 12:34:21<SeP>2024-08-27 23:00:54<SeP>2024-08-29 09:27:27<SeP>2024-08-30 19:54:00<SeP>2024-09-01 06:20:33<SeP>2024-09-02 16:47:06<SeP>2024-09-04 03:13:39<SeP>2024-09-05 13:40:12<SeP>2024-09-07 00:06:45<SeP>2024-09-08 10:33:18<SeP>2024-09-09 20:59:51<SeP>2024-09-11 07:26:24<SeP>2024-09-12 17:52:57<SeP>2024-09-14 04:19:30<SeP>2024-09-15 14:46:03<SeP>2024-09-17 01:12:36<SeP>2024-09-18 11:39:09<SeP>2024-09-19 22:05:42<SeP>2024-09-21 08:32:15<SeP>2024-09-22 18:58:48<SeP>2024-09-24 05:25:21<SeP>2024-09-25 15:51:54<SeP>2024-09-27 02:18:27<SeP>2024-09-28 12:45:00<SeP>2024-09-29 23:11:33<SeP>2024-10-01 09:38:06<SeP>2024-10-02 20:04:39<SeP>2024-10-04 06:31:12<SeP>2024-10-05 16:57:45<SeP>2024-10-07 03:24:18<SeP>2024-10-08 13:50:51<SeP>2024-10-10 00:17:24<SeP>2024-10-11 10:43:57<SeP>2024-10-12 21:10:30<SeP>2024-10-14 07:37:03<SeP>2024-10-15 18:03:36<SeP>2024-10-17 04:30:09<SeP>2024-10-18 14:56:42<SeP>2024-10-20 01:23:15<SeP>2024-10-21 11:49:48<SeP>2024-10-22 22:16:21<SeP>2024-10-24 08:42:54<SeP>2024-10-25 19:09:27<SeP>2024-10-27 05:36:00<SeP>2024-10-28 16:02:33<SeP>2024-10-30 02:29:06<SeP>2024-10-31 12:55:39<SeP>2024-11-01 23:22:12<SeP>2024-11-03 08:48:45<SeP>2024-11-04 19:15:18<SeP>2024-11-06 05:41:51<SeP>2024-11-07 16:08:24<SeP>2024-11-09 02:34:57<SeP>2024-11-10 13:01:30<SeP>2024-11-11 23:28:03<SeP>2024-11-13 09:54:36<SeP>2024-11-14 20:21:09<SeP>2024-11-16 06:47:42<SeP>2024-11-17 17:14:15<SeP>2024-11-19 03:40:48<SeP>2024-11-20 14:07:21<SeP>2024-11-22 00:33:54<SeP>2024-11-23 11:00:27<SeP>2024-11-24 21:27:00<SeP>2024-11-26 07:53:33<SeP>2024-11-27 18:20:06<SeP>2024-11-29 04:46:39<SeP>2024-11-30 15:13:12<SeP>2024-12-02 01:39:45<SeP>2024-12-03 12:06:18<SeP>2024-12-04 22:32:51<SeP>2024-12-06 08:59:24<SeP>2024-12-07 19:25:57<SeP>2024-12-09 05:52:30<SeP>2024-12-10 16:19:03<SeP>2024-12-12 02:45:36<SeP>2024-12-13 13:12:09<SeP>2024-12-14 23:38:42<SeP>2024-12-16 10:05:15<SeP>2024-12-17 20:31:48<SeP>2024-12-19 06:58:21<SeP>2024-12-20 17:24:54<SeP>2024-12-22 03:51:27<SeP>2024-12-23 14:18:00<SeP>2024-12-25 00:44:33<SeP>2024-12-26 11:11:06<SeP>2024-12-27 21:37:39<SeP>2024-12-29 08:04:12<SeP>2024-12-30 18:30:45<SeP>2025-01-01 04:57:18<SeP>2025-01-02 15:23:51<SeP>2025-01-04 01:50:24<SeP>2025-01-05 12:16:57<SeP>2025-01-06 22:43:30<SeP>2025-01-08 09:10:03<SeP>2025-01-09 19:36:36<SeP>2025-01-11 06:03:09<SeP>2025-01-12 16:29:42<SeP>2025-01-14 02:56:15<SeP>2025-01-15 13:22:48<SeP>2025-01-16 23:49:21<SeP>2025-01-18 10:15:54<SeP>2025-01-19 20:42:27<SeP>2025-01-21 07:09:00<SeP>2025-01-22 17:35:33<SeP>2025-01-24 04:02:06<SeP>2025-01-25 14:28:39<SeP>2025-01-27 00:55:12<SeP>2025-01-28 11:21:45<SeP>2025-01-29 21:48:18<SeP>2025-01-31 08:14:51<SeP>2025-02-01 18:41:24<SeP>2025-02-03 05:07:57<SeP>2025-02-04 15:34:30<SeP>2025-02-06 02:01:03<SeP>2025-02-07 12:27:36<SeP>2025-02-08 22:54:09<SeP>2025-02-10 09:20:42<SeP>2025-02-11 19:47:15<SeP>2025-02-13 06:13:48<SeP>2025-02-14 16:40:21<SeP>2025-02-16 03:06:54<SeP>2025-02-17 13:33:27";
  const item1Label       = "Escaneos";
  const item1Data        = "755<SeP>1447<SeP>1373<SeP>1422<SeP>1194<SeP>1711<SeP>993<SeP>984<SeP>1066<SeP>3322<SeP>1472<SeP>2858<SeP>1825<SeP>2535<SeP>724<SeP>822<SeP>1416<SeP>1212<SeP>2749<SeP>1482<SeP>1481<SeP>1002<SeP>882<SeP>1100<SeP>1179<SeP>918<SeP>701<SeP>910<SeP>3640<SeP>964<SeP>784<SeP>1303<SeP>1258<SeP>845<SeP>1001<SeP>3059<SeP>2676<SeP>1923<SeP>1530<SeP>1749<SeP>1207<SeP>1501<SeP>1783<SeP>1889<SeP>1967<SeP>1594<SeP>1538<SeP>1576<SeP>1698<SeP>1643<SeP>1835<SeP>1841<SeP>1668<SeP>1457<SeP>3192<SeP>1627<SeP>1509<SeP>2043<SeP>1829<SeP>2150<SeP>1363<SeP>3797<SeP>1393<SeP>1456<SeP>1564<SeP>1218<SeP>1839<SeP>1565<SeP>1460<SeP>1240<SeP>1412<SeP>1170<SeP>2337<SeP>1212<SeP>1082<SeP>1293<SeP>2388<SeP>7078<SeP>1144<SeP>1261<SeP>1435<SeP>2240<SeP>1289<SeP>1066<SeP>6668<SeP>1544<SeP>1617<SeP>900<SeP>1345<SeP>3104<SeP>1169<SeP>967<SeP>1026<SeP>1018<SeP>1003<SeP>3000<SeP>1190<SeP>1380<SeP>2827<SeP>6431<SeP>1387<SeP>961<SeP>915<SeP>899<SeP>989<SeP>983<SeP>967<SeP>1018<SeP>3567<SeP>2376<SeP>1406<SeP>1631<SeP>697<SeP>798<SeP>1409<SeP>1261<SeP>1056<SeP>1005<SeP>2246<SeP>1115<SeP>1079<SeP>1043<SeP>969<SeP>1102<SeP>658<SeP>896<SeP>831<SeP>786<SeP>1106<SeP>804<SeP>915<SeP>727<SeP>914<SeP>817<SeP>737<SeP>721<SeP>853<SeP>915<SeP>826<SeP>866<SeP>842<SeP>773<SeP>761<SeP>942<SeP>859<SeP>806<SeP>884<SeP>855<SeP>937<SeP>1100<SeP>943<SeP>648<SeP>638<SeP>925<SeP>804<SeP>1311<SeP>844<SeP>989<SeP>1256<SeP>1179<SeP>809<SeP>959<SeP>899<SeP>906<SeP>723<SeP>1067<SeP>965<SeP>933<SeP>891<SeP>896<SeP>1061<SeP>1016<SeP>1018<SeP>945<SeP>1135<SeP>865<SeP>881<SeP>1255<SeP>1965<SeP>1246<SeP>995<SeP>1005<SeP>1174<SeP>975<SeP>949<SeP>827<SeP>616<SeP>917<SeP>1173<SeP>877<SeP>918<SeP>1017<SeP>1334<SeP>1015<SeP>1150<SeP>1267<SeP>1184<SeP>1217<SeP>1337<SeP>1236<SeP>1560<SeP>1844<SeP>1511<SeP>1215<SeP>738<SeP>785<SeP>1184<SeP>1062<SeP>554<SeP>705<SeP>842<SeP>998<SeP>965<SeP>5836<SeP>2879<SeP>1882<SeP>1349<SeP>959<SeP>802<SeP>1064<SeP>822<SeP>1002<SeP>1006<SeP>1097<SeP>952<SeP>1160<SeP>2299<SeP>1060<SeP>1171<SeP>1100<SeP>1336<SeP>1051<SeP>1023<SeP>977<SeP>1119<SeP>1085<SeP>971<SeP>1125<SeP>1068<SeP>1177<SeP>887<SeP>878<SeP>1279<SeP>1098<SeP>1121<SeP>1229<SeP>1324<SeP>1146<SeP>1602<SeP>1129<SeP>1104<SeP>1254<SeP>1004<SeP>1990<SeP>1208<SeP>1545<SeP>1841<SeP>1414<SeP>1906<SeP>1727<SeP>1245<SeP>1185<SeP>1051<SeP>1342<SeP>1261<SeP>1433<SeP>1125<SeP>1363<SeP>1615<SeP>1645<SeP>1325<SeP>1502<SeP>1475<SeP>1166<SeP>1007<SeP>1086<SeP>1379<SeP>1065<SeP>1189<SeP>1317<SeP>1134<SeP>1476<SeP>1863<SeP>1308<SeP>1232<SeP>1581<SeP>1442<SeP>1060<SeP>1080<SeP>981<SeP>776<SeP>888<SeP>1007<SeP>994<SeP>1774<SeP>1075<SeP>1109<SeP>1075<SeP>838<SeP>1028<SeP>851<SeP>1383<SeP>871<SeP>818<SeP>1118<SeP>1245<SeP>1599<SeP>1363<SeP>1035<SeP>1066<SeP>995<SeP>1828<SeP>1062<SeP>1159<SeP>956<SeP>1231<SeP>1345<SeP>961<SeP>939<SeP>1192<SeP>1076<SeP>825<SeP>882<SeP>1093<SeP>1435<SeP>1542<SeP>1432<SeP>1386<SeP>1217<SeP>908<SeP>1164<SeP>1167<SeP>1199<SeP>1028<SeP>1023<SeP>1004<SeP>1204<SeP>1282<SeP>1475<SeP>1156<SeP>1655<SeP>1293<SeP>1647<SeP>1345<SeP>1261<SeP>1443<SeP>1393<SeP>1324<SeP>1268<SeP>1728<SeP>1422<SeP>1346<SeP>1599<SeP>1277<SeP>1423<SeP>1271<SeP>1197<SeP>1296<SeP>1385<SeP>1666<SeP>1272<SeP>1302<SeP>1180<SeP>1444<SeP>1139<SeP>1317<SeP>1320<SeP>1648<SeP>1774<SeP>1323<SeP>790<SeP>1079<SeP>1800<SeP>1375<SeP>1293<SeP>1357<SeP>1004<SeP>1326<SeP>1253<SeP>1507<SeP>1298<SeP>1451<SeP>1618<SeP>1363<SeP>1497<SeP>1719<SeP>1252<SeP>1526<SeP>1342<SeP>1752<SeP>1606<SeP>925<SeP>1071<SeP>2022<SeP>1875<SeP>1658<SeP>1718<SeP>1688<SeP>1561<SeP>1506";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "152<SeP>612<SeP>966<SeP>712<SeP>551<SeP>211<SeP>6953<SeP>488<SeP>9219<SeP>977<SeP>278<SeP>1234<SeP>787<SeP>729<SeP>144<SeP>438<SeP>155<SeP>361<SeP>667<SeP>3197<SeP>6590<SeP>8083<SeP>6386<SeP>8990<SeP>422<SeP>303<SeP>402<SeP>164<SeP>378<SeP>5930<SeP>81<SeP>385<SeP>129<SeP>525<SeP>317<SeP>8626<SeP>9399<SeP>9955<SeP>9470<SeP>6851<SeP>5060<SeP>8396<SeP>6978<SeP>8970<SeP>8909<SeP>7502<SeP>7972<SeP>8317<SeP>8731<SeP>8227<SeP>5501<SeP>6022<SeP>11565<SeP>6919<SeP>7685<SeP>7573<SeP>9465<SeP>8987<SeP>17567<SeP>16548<SeP>8471<SeP>11481<SeP>6352<SeP>8080<SeP>8148<SeP>9161<SeP>8546<SeP>6049<SeP>6721<SeP>6223<SeP>6726<SeP>3875<SeP>5877<SeP>5714<SeP>6268<SeP>5619<SeP>7356<SeP>5126<SeP>5350<SeP>5306<SeP>7080<SeP>4526<SeP>6706<SeP>5171<SeP>5372<SeP>6872<SeP>5353<SeP>5296<SeP>5385<SeP>9298<SeP>20882<SeP>27943<SeP>15222<SeP>9499<SeP>5447<SeP>7802<SeP>11448<SeP>7679<SeP>3184<SeP>6687<SeP>3566<SeP>4817<SeP>6761<SeP>4889<SeP>8854<SeP>6623<SeP>4990<SeP>4795<SeP>5641<SeP>9481<SeP>8113<SeP>6917<SeP>5281<SeP>4334<SeP>10764<SeP>8796<SeP>5398<SeP>3127<SeP>6096<SeP>9174<SeP>5349<SeP>6113<SeP>9264<SeP>6097<SeP>1335<SeP>2451<SeP>1026<SeP>2399<SeP>2078<SeP>1500<SeP>696<SeP>1098<SeP>1195<SeP>1877<SeP>489<SeP>1283<SeP>1115<SeP>944<SeP>1054<SeP>1042<SeP>1152<SeP>1429<SeP>987<SeP>1763<SeP>2084<SeP>1516<SeP>12414<SeP>5724<SeP>10792<SeP>7322<SeP>5526<SeP>10755<SeP>9031<SeP>7190<SeP>9813<SeP>10465<SeP>11127<SeP>7400<SeP>13221<SeP>13423<SeP>6763<SeP>10393<SeP>5687<SeP>4974<SeP>6915<SeP>25426<SeP>5859<SeP>8592<SeP>7502<SeP>17384<SeP>8891<SeP>7280<SeP>5793<SeP>6437<SeP>8410<SeP>25305<SeP>6695<SeP>9837<SeP>9811<SeP>4728<SeP>6024<SeP>6174<SeP>16183<SeP>4655<SeP>12572<SeP>8006<SeP>6635<SeP>8033<SeP>7581<SeP>2996<SeP>6038<SeP>5690<SeP>7072<SeP>6374<SeP>6082<SeP>7336<SeP>18616<SeP>6045<SeP>9543<SeP>5069<SeP>6946<SeP>8264<SeP>10379<SeP>5581<SeP>2483<SeP>6314<SeP>4484<SeP>3987<SeP>4312<SeP>1654<SeP>617<SeP>595<SeP>151<SeP>619<SeP>583<SeP>776<SeP>337<SeP>645<SeP>1313<SeP>1221<SeP>3109<SeP>22936<SeP>535<SeP>4469<SeP>2713<SeP>2973<SeP>7142<SeP>3170<SeP>4191<SeP>2340<SeP>3804<SeP>2742<SeP>2921<SeP>4179<SeP>2969<SeP>2336<SeP>3552<SeP>1238<SeP>2407<SeP>1732<SeP>1292<SeP>1551<SeP>1375<SeP>1251<SeP>848<SeP>1609<SeP>26513<SeP>1698<SeP>4223<SeP>4036<SeP>1943<SeP>3228<SeP>3075<SeP>1933<SeP>3166<SeP>2783<SeP>3329<SeP>2586<SeP>2526<SeP>3264<SeP>3056<SeP>6764<SeP>4769<SeP>3914<SeP>3337<SeP>3143<SeP>3297<SeP>3972<SeP>5882<SeP>7949<SeP>5340<SeP>2225<SeP>3234<SeP>2399<SeP>4346<SeP>3730<SeP>3737<SeP>2743<SeP>2584<SeP>5854<SeP>3280<SeP>6130<SeP>3714<SeP>5406<SeP>5619<SeP>5673<SeP>3809<SeP>17839<SeP>9983<SeP>12516<SeP>1718<SeP>2269<SeP>4769<SeP>3277<SeP>3810<SeP>4187<SeP>4887<SeP>3676<SeP>4548<SeP>4463<SeP>3230<SeP>3701<SeP>1335<SeP>1738<SeP>2164<SeP>3647<SeP>2385<SeP>3005<SeP>3847<SeP>4175<SeP>3845<SeP>3265<SeP>4093<SeP>3324<SeP>3135<SeP>6003<SeP>7853<SeP>5773<SeP>4577<SeP>5028<SeP>4552<SeP>3310<SeP>3733<SeP>4475<SeP>5713<SeP>5369<SeP>4604<SeP>3763<SeP>1796<SeP>378<SeP>2358<SeP>1433<SeP>738<SeP>1914<SeP>1280<SeP>1060<SeP>2412<SeP>4113<SeP>5850<SeP>5075<SeP>33960<SeP>5168<SeP>6256<SeP>21829<SeP>5350<SeP>5242<SeP>5834<SeP>4182<SeP>24552<SeP>4784<SeP>5296<SeP>4677<SeP>5448<SeP>6370<SeP>28843<SeP>4714<SeP>3604<SeP>4080<SeP>3620<SeP>5995<SeP>4315<SeP>3782<SeP>2463<SeP>4451<SeP>5641<SeP>4631<SeP>17998<SeP>5121<SeP>5899<SeP>5852<SeP>1812<SeP>2872<SeP>3622<SeP>5001<SeP>3799<SeP>3973<SeP>2417<SeP>3647<SeP>2614<SeP>4359<SeP>4602<SeP>8115<SeP>10456<SeP>7874<SeP>8552<SeP>9155<SeP>6792<SeP>5729<SeP>4992<SeP>4235<SeP>22553<SeP>6383<SeP>3225<SeP>4678<SeP>3204<SeP>11193<SeP>5507<SeP>3783<SeP>4858<SeP>3907";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:26:33<SeP>2023-07-28 20:53:06<SeP>2023-07-30 07:19:39<SeP>2023-07-31 17:46:12<SeP>2023-08-02 04:12:45<SeP>2023-08-03 14:39:18<SeP>2023-08-05 01:05:51<SeP>2023-08-06 11:32:24<SeP>2023-08-07 21:58:57<SeP>2023-08-09 08:25:30<SeP>2023-08-10 18:52:03<SeP>2023-08-12 05:18:36<SeP>2023-08-13 15:45:09<SeP>2023-08-15 02:11:42<SeP>2023-08-16 12:38:15<SeP>2023-08-17 23:04:48<SeP>2023-08-19 09:31:21<SeP>2023-08-20 19:57:54<SeP>2023-08-22 06:24:27<SeP>2023-08-23 16:51:00<SeP>2023-08-25 03:17:33<SeP>2023-08-26 13:44:06<SeP>2023-08-28 00:10:39<SeP>2023-08-29 10:37:12<SeP>2023-08-30 21:03:45<SeP>2023-09-01 07:30:18<SeP>2023-09-02 17:56:51<SeP>2023-09-04 04:23:24<SeP>2023-09-05 14:49:57<SeP>2023-09-07 01:16:30<SeP>2023-09-08 11:43:03<SeP>2023-09-09 22:09:36<SeP>2023-09-11 08:36:09<SeP>2023-09-12 19:02:42<SeP>2023-09-14 05:29:15<SeP>2023-09-15 15:55:48<SeP>2023-09-17 02:22:21<SeP>2023-09-18 12:48:54<SeP>2023-09-19 23:15:27<SeP>2023-09-21 09:42:00<SeP>2023-09-22 20:08:33<SeP>2023-09-24 06:35:06<SeP>2023-09-25 17:01:39<SeP>2023-09-27 03:28:12<SeP>2023-09-28 13:54:45<SeP>2023-09-30 00:21:18<SeP>2023-10-01 10:47:51<SeP>2023-10-02 21:14:24<SeP>2023-10-04 07:40:57<SeP>2023-10-05 18:07:30<SeP>2023-10-07 04:34:03<SeP>2023-10-08 15:00:36<SeP>2023-10-10 01:27:09<SeP>2023-10-11 11:53:42<SeP>2023-10-12 22:20:15<SeP>2023-10-14 08:46:48<SeP>2023-10-15 19:13:21<SeP>2023-10-17 05:39:54<SeP>2023-10-18 16:06:27<SeP>2023-10-20 02:33:00<SeP>2023-10-21 12:59:33<SeP>2023-10-22 23:26:06<SeP>2023-10-24 09:52:39<SeP>2023-10-25 20:19:12<SeP>2023-10-27 06:45:45<SeP>2023-10-28 17:12:18<SeP>2023-10-30 03:38:51<SeP>2023-10-31 14:05:24<SeP>2023-11-02 00:31:57<SeP>2023-11-03 10:58:30<SeP>2023-11-04 21:25:03<SeP>2023-11-06 06:51:36<SeP>2023-11-07 17:18:09<SeP>2023-11-09 03:44:42<SeP>2023-11-10 14:11:15<SeP>2023-11-12 00:37:48<SeP>2023-11-13 11:04:21<SeP>2023-11-14 21:30:54<SeP>2023-11-16 07:57:27<SeP>2023-11-17 18:24:00<SeP>2023-11-19 04:50:33<SeP>2023-11-20 15:17:06<SeP>2023-11-22 01:43:39<SeP>2023-11-23 12:10:12<SeP>2023-11-24 22:36:45<SeP>2023-11-26 09:03:18<SeP>2023-11-27 19:29:51<SeP>2023-11-29 05:56:24<SeP>2023-11-30 16:22:57<SeP>2023-12-02 02:49:30<SeP>2023-12-03 13:16:03<SeP>2023-12-04 23:42:36<SeP>2023-12-06 10:09:09<SeP>2023-12-07 20:35:42<SeP>2023-12-09 07:02:15<SeP>2023-12-10 17:28:48<SeP>2023-12-12 03:55:21<SeP>2023-12-13 14:21:54<SeP>2023-12-15 00:48:27<SeP>2023-12-16 11:15:00<SeP>2023-12-17 21:41:33<SeP>2023-12-19 08:08:06<SeP>2023-12-20 18:34:39<SeP>2023-12-22 05:01:12<SeP>2023-12-23 15:27:45<SeP>2023-12-25 01:54:18<SeP>2023-12-26 12:20:51<SeP>2023-12-27 22:47:24<SeP>2023-12-29 09:13:57<SeP>2023-12-30 19:40:30<SeP>2024-01-01 06:07:03<SeP>2024-01-02 16:33:36<SeP>2024-01-04 03:00:09<SeP>2024-01-05 13:26:42<SeP>2024-01-06 23:53:15<SeP>2024-01-08 10:19:48<SeP>2024-01-09 20:46:21<SeP>2024-01-11 07:12:54<SeP>2024-01-12 17:39:27<SeP>2024-01-14 04:06:00<SeP>2024-01-15 14:32:33<SeP>2024-01-17 00:59:06<SeP>2024-01-18 11:25:39<SeP>2024-01-19 21:52:12<SeP>2024-01-21 08:18:45<SeP>2024-01-22 18:45:18<SeP>2024-01-24 05:11:51<SeP>2024-01-25 15:38:24<SeP>2024-01-27 02:04:57<SeP>2024-01-28 12:31:30<SeP>2024-01-29 22:58:03<SeP>2024-01-31 09:24:36<SeP>2024-02-01 19:51:09<SeP>2024-02-03 06:17:42<SeP>2024-02-04 16:44:15<SeP>2024-02-06 03:10:48<SeP>2024-02-07 13:37:21<SeP>2024-02-09 00:03:54<SeP>2024-02-10 10:30:27<SeP>2024-02-11 20:57:00<SeP>2024-02-13 07:23:33<SeP>2024-02-14 17:50:06<SeP>2024-02-16 04:16:39<SeP>2024-02-17 14:43:12<SeP>2024-02-19 01:09:45<SeP>2024-02-20 11:36:18<SeP>2024-02-21 22:02:51<SeP>2024-02-23 08:29:24<SeP>2024-02-24 18:55:57<SeP>2024-02-26 05:22:30<SeP>2024-02-27 15:49:03<SeP>2024-02-29 02:15:36<SeP>2024-03-01 12:42:09<SeP>2024-03-02 23:08:42<SeP>2024-03-04 09:35:15<SeP>2024-03-05 20:01:48<SeP>2024-03-07 06:28:21<SeP>2024-03-08 16:54:54<SeP>2024-03-10 04:21:27<SeP>2024-03-11 14:48:00<SeP>2024-03-13 01:14:33<SeP>2024-03-14 11:41:06<SeP>2024-03-15 22:07:39<SeP>2024-03-17 08:34:12<SeP>2024-03-18 19:00:45<SeP>2024-03-20 05:27:18<SeP>2024-03-21 15:53:51<SeP>2024-03-23 02:20:24<SeP>2024-03-24 12:46:57<SeP>2024-03-25 23:13:30<SeP>2024-03-27 09:40:03<SeP>2024-03-28 20:06:36<SeP>2024-03-30 06:33:09<SeP>2024-03-31 16:59:42<SeP>2024-04-02 03:26:15<SeP>2024-04-03 13:52:48<SeP>2024-04-05 00:19:21<SeP>2024-04-06 10:45:54<SeP>2024-04-07 21:12:27<SeP>2024-04-09 07:39:00<SeP>2024-04-10 18:05:33<SeP>2024-04-12 04:32:06<SeP>2024-04-13 14:58:39<SeP>2024-04-15 01:25:12<SeP>2024-04-16 11:51:45<SeP>2024-04-17 22:18:18<SeP>2024-04-19 08:44:51<SeP>2024-04-20 19:11:24<SeP>2024-04-22 05:37:57<SeP>2024-04-23 16:04:30<SeP>2024-04-25 02:31:03<SeP>2024-04-26 12:57:36<SeP>2024-04-27 23:24:09<SeP>2024-04-29 09:50:42<SeP>2024-04-30 20:17:15<SeP>2024-05-02 06:43:48<SeP>2024-05-03 17:10:21<SeP>2024-05-05 03:36:54<SeP>2024-05-06 14:03:27<SeP>2024-05-08 00:30:00<SeP>2024-05-09 10:56:33<SeP>2024-05-10 21:23:06<SeP>2024-05-12 07:49:39<SeP>2024-05-13 18:16:12<SeP>2024-05-15 04:42:45<SeP>2024-05-16 15:09:18<SeP>2024-05-18 01:35:51<SeP>2024-05-19 12:02:24<SeP>2024-05-20 22:28:57<SeP>2024-05-22 08:55:30<SeP>2024-05-23 19:22:03<SeP>2024-05-25 05:48:36<SeP>2024-05-26 16:15:09<SeP>2024-05-28 02:41:42<SeP>2024-05-29 13:08:15<SeP>2024-05-30 23:34:48<SeP>2024-06-01 10:01:21<SeP>2024-06-02 20:27:54<SeP>2024-06-04 06:54:27<SeP>2024-06-05 17:21:00<SeP>2024-06-07 03:47:33<SeP>2024-06-08 14:14:06<SeP>2024-06-10 00:40:39<SeP>2024-06-11 11:07:12<SeP>2024-06-12 21:33:45<SeP>2024-06-14 08:00:18<SeP>2024-06-15 18:26:51<SeP>2024-06-17 04:53:24<SeP>2024-06-18 15:19:57<SeP>2024-06-20 01:46:30<SeP>2024-06-21 12:13:03<SeP>2024-06-22 22:39:36<SeP>2024-06-24 09:06:09<SeP>2024-06-25 19:32:42<SeP>2024-06-27 05:59:15<SeP>2024-06-28 16:25:48<SeP>2024-06-30 02:52:21<SeP>2024-07-01 13:18:54<SeP>2024-07-02 23:45:27<SeP>2024-07-04 10:12:00<SeP>2024-07-05 20:38:33<SeP>2024-07-07 07:05:06<SeP>2024-07-08 17:31:39<SeP>2024-07-10 03:58:12<SeP>2024-07-11 14:24:45<SeP>2024-07-13 00:51:18<SeP>2024-07-14 11:17:51<SeP>2024-07-15 21:44:24<SeP>2024-07-17 08:10:57<SeP>2024-07-18 18:37:30<SeP>2024-07-20 05:04:03<SeP>2024-07-21 15:30:36<SeP>2024-07-23 01:57:09<SeP>2024-07-24 12:23:42<SeP>2024-07-25 22:50:15<SeP>2024-07-27 09:16:48<SeP>2024-07-28 19:43:21<SeP>2024-07-30 06:09:54<SeP>2024-07-31 16:36:27<SeP>2024-08-02 03:03:00<SeP>2024-08-03 13:29:33<SeP>2024-08-04 23:56:06<SeP>2024-08-06 10:22:39<SeP>2024-08-07 20:49:12<SeP>2024-08-09 07:15:45<SeP>2024-08-10 17:42:18<SeP>2024-08-12 04:08:51<SeP>2024-08-13 14:35:24<SeP>2024-08-15 01:01:57<SeP>2024-08-16 11:28:30<SeP>2024-08-17 21:55:03<SeP>2024-08-19 08:21:36<SeP>2024-08-20 18:48:09<SeP>2024-08-22 05:14:42<SeP>2024-08-23 15:41:15<SeP>2024-08-25 02:07:48<SeP>2024-08-26 12:34:21<SeP>2024-08-27 23:00:54<SeP>2024-08-29 09:27:27<SeP>2024-08-30 19:54:00<SeP>2024-09-01 06:20:33<SeP>2024-09-02 16:47:06<SeP>2024-09-04 03:13:39<SeP>2024-09-05 13:40:12<SeP>2024-09-07 00:06:45<SeP>2024-09-08 10:33:18<SeP>2024-09-09 20:59:51<SeP>2024-09-11 07:26:24<SeP>2024-09-12 17:52:57<SeP>2024-09-14 04:19:30<SeP>2024-09-15 14:46:03<SeP>2024-09-17 01:12:36<SeP>2024-09-18 11:39:09<SeP>2024-09-19 22:05:42<SeP>2024-09-21 08:32:15<SeP>2024-09-22 18:58:48<SeP>2024-09-24 05:25:21<SeP>2024-09-25 15:51:54<SeP>2024-09-27 02:18:27<SeP>2024-09-28 12:45:00<SeP>2024-09-29 23:11:33<SeP>2024-10-01 09:38:06<SeP>2024-10-02 20:04:39<SeP>2024-10-04 06:31:12<SeP>2024-10-05 16:57:45<SeP>2024-10-07 03:24:18<SeP>2024-10-08 13:50:51<SeP>2024-10-10 00:17:24<SeP>2024-10-11 10:43:57<SeP>2024-10-12 21:10:30<SeP>2024-10-14 07:37:03<SeP>2024-10-15 18:03:36<SeP>2024-10-17 04:30:09<SeP>2024-10-18 14:56:42<SeP>2024-10-20 01:23:15<SeP>2024-10-21 11:49:48<SeP>2024-10-22 22:16:21<SeP>2024-10-24 08:42:54<SeP>2024-10-25 19:09:27<SeP>2024-10-27 05:36:00<SeP>2024-10-28 16:02:33<SeP>2024-10-30 02:29:06<SeP>2024-10-31 12:55:39<SeP>2024-11-01 23:22:12<SeP>2024-11-03 08:48:45<SeP>2024-11-04 19:15:18<SeP>2024-11-06 05:41:51<SeP>2024-11-07 16:08:24<SeP>2024-11-09 02:34:57<SeP>2024-11-10 13:01:30<SeP>2024-11-11 23:28:03<SeP>2024-11-13 09:54:36<SeP>2024-11-14 20:21:09<SeP>2024-11-16 06:47:42<SeP>2024-11-17 17:14:15<SeP>2024-11-19 03:40:48<SeP>2024-11-20 14:07:21<SeP>2024-11-22 00:33:54<SeP>2024-11-23 11:00:27<SeP>2024-11-24 21:27:00<SeP>2024-11-26 07:53:33<SeP>2024-11-27 18:20:06<SeP>2024-11-29 04:46:39<SeP>2024-11-30 15:13:12<SeP>2024-12-02 01:39:45<SeP>2024-12-03 12:06:18<SeP>2024-12-04 22:32:51<SeP>2024-12-06 08:59:24<SeP>2024-12-07 19:25:57<SeP>2024-12-09 05:52:30<SeP>2024-12-10 16:19:03<SeP>2024-12-12 02:45:36<SeP>2024-12-13 13:12:09<SeP>2024-12-14 23:38:42<SeP>2024-12-16 10:05:15<SeP>2024-12-17 20:31:48<SeP>2024-12-19 06:58:21<SeP>2024-12-20 17:24:54<SeP>2024-12-22 03:51:27<SeP>2024-12-23 14:18:00<SeP>2024-12-25 00:44:33<SeP>2024-12-26 11:11:06<SeP>2024-12-27 21:37:39<SeP>2024-12-29 08:04:12<SeP>2024-12-30 18:30:45<SeP>2025-01-01 04:57:18<SeP>2025-01-02 15:23:51<SeP>2025-01-04 01:50:24<SeP>2025-01-05 12:16:57<SeP>2025-01-06 22:43:30<SeP>2025-01-08 09:10:03<SeP>2025-01-09 19:36:36<SeP>2025-01-11 06:03:09<SeP>2025-01-12 16:29:42<SeP>2025-01-14 02:56:15<SeP>2025-01-15 13:22:48<SeP>2025-01-16 23:49:21<SeP>2025-01-18 10:15:54<SeP>2025-01-19 20:42:27<SeP>2025-01-21 07:09:00<SeP>2025-01-22 17:35:33<SeP>2025-01-24 04:02:06<SeP>2025-01-25 14:28:39<SeP>2025-01-27 00:55:12<SeP>2025-01-28 11:21:45<SeP>2025-01-29 21:48:18<SeP>2025-01-31 08:14:51<SeP>2025-02-01 18:41:24<SeP>2025-02-03 05:07:57<SeP>2025-02-04 15:34:30<SeP>2025-02-06 02:01:03<SeP>2025-02-07 12:27:36<SeP>2025-02-08 22:54:09<SeP>2025-02-10 09:20:42<SeP>2025-02-11 19:47:15<SeP>2025-02-13 06:13:48<SeP>2025-02-14 16:40:21<SeP>2025-02-16 03:06:54<SeP>2025-02-17 13:33:27";
  const itemLabel       = "Escaneos";
  const itemData        = "755<SeP>1447<SeP>1373<SeP>1422<SeP>1194<SeP>1711<SeP>993<SeP>984<SeP>1066<SeP>3322<SeP>1472<SeP>2858<SeP>1825<SeP>2535<SeP>724<SeP>822<SeP>1416<SeP>1212<SeP>2749<SeP>1482<SeP>1481<SeP>1002<SeP>882<SeP>1100<SeP>1179<SeP>918<SeP>701<SeP>910<SeP>3640<SeP>964<SeP>784<SeP>1303<SeP>1258<SeP>845<SeP>1001<SeP>3059<SeP>2676<SeP>1923<SeP>1530<SeP>1749<SeP>1207<SeP>1501<SeP>1783<SeP>1889<SeP>1967<SeP>1594<SeP>1538<SeP>1576<SeP>1698<SeP>1643<SeP>1835<SeP>1841<SeP>1668<SeP>1457<SeP>3192<SeP>1627<SeP>1509<SeP>2043<SeP>1829<SeP>2150<SeP>1363<SeP>3797<SeP>1393<SeP>1456<SeP>1564<SeP>1218<SeP>1839<SeP>1565<SeP>1460<SeP>1240<SeP>1412<SeP>1170<SeP>2337<SeP>1212<SeP>1082<SeP>1293<SeP>2388<SeP>7078<SeP>1144<SeP>1261<SeP>1435<SeP>2240<SeP>1289<SeP>1066<SeP>6668<SeP>1544<SeP>1617<SeP>900<SeP>1345<SeP>3104<SeP>1169<SeP>967<SeP>1026<SeP>1018<SeP>1003<SeP>3000<SeP>1190<SeP>1380<SeP>2827<SeP>6431<SeP>1387<SeP>961<SeP>915<SeP>899<SeP>989<SeP>983<SeP>967<SeP>1018<SeP>3567<SeP>2376<SeP>1406<SeP>1631<SeP>697<SeP>798<SeP>1409<SeP>1261<SeP>1056<SeP>1005<SeP>2246<SeP>1115<SeP>1079<SeP>1043<SeP>969<SeP>1102<SeP>658<SeP>896<SeP>831<SeP>786<SeP>1106<SeP>804<SeP>915<SeP>727<SeP>914<SeP>817<SeP>737<SeP>721<SeP>853<SeP>915<SeP>826<SeP>866<SeP>842<SeP>773<SeP>761<SeP>942<SeP>859<SeP>806<SeP>884<SeP>855<SeP>937<SeP>1100<SeP>943<SeP>648<SeP>638<SeP>925<SeP>804<SeP>1311<SeP>844<SeP>989<SeP>1256<SeP>1179<SeP>809<SeP>959<SeP>899<SeP>906<SeP>723<SeP>1067<SeP>965<SeP>933<SeP>891<SeP>896<SeP>1061<SeP>1016<SeP>1018<SeP>945<SeP>1135<SeP>865<SeP>881<SeP>1255<SeP>1965<SeP>1246<SeP>995<SeP>1005<SeP>1174<SeP>975<SeP>949<SeP>827<SeP>616<SeP>917<SeP>1173<SeP>877<SeP>918<SeP>1017<SeP>1334<SeP>1015<SeP>1150<SeP>1267<SeP>1184<SeP>1217<SeP>1337<SeP>1236<SeP>1560<SeP>1844<SeP>1511<SeP>1215<SeP>738<SeP>785<SeP>1184<SeP>1062<SeP>554<SeP>705<SeP>842<SeP>998<SeP>965<SeP>5836<SeP>2879<SeP>1882<SeP>1349<SeP>959<SeP>802<SeP>1064<SeP>822<SeP>1002<SeP>1006<SeP>1097<SeP>952<SeP>1160<SeP>2299<SeP>1060<SeP>1171<SeP>1100<SeP>1336<SeP>1051<SeP>1023<SeP>977<SeP>1119<SeP>1085<SeP>971<SeP>1125<SeP>1068<SeP>1177<SeP>887<SeP>878<SeP>1279<SeP>1098<SeP>1121<SeP>1229<SeP>1324<SeP>1146<SeP>1602<SeP>1129<SeP>1104<SeP>1254<SeP>1004<SeP>1990<SeP>1208<SeP>1545<SeP>1841<SeP>1414<SeP>1906<SeP>1727<SeP>1245<SeP>1185<SeP>1051<SeP>1342<SeP>1261<SeP>1433<SeP>1125<SeP>1363<SeP>1615<SeP>1645<SeP>1325<SeP>1502<SeP>1475<SeP>1166<SeP>1007<SeP>1086<SeP>1379<SeP>1065<SeP>1189<SeP>1317<SeP>1134<SeP>1476<SeP>1863<SeP>1308<SeP>1232<SeP>1581<SeP>1442<SeP>1060<SeP>1080<SeP>981<SeP>776<SeP>888<SeP>1007<SeP>994<SeP>1774<SeP>1075<SeP>1109<SeP>1075<SeP>838<SeP>1028<SeP>851<SeP>1383<SeP>871<SeP>818<SeP>1118<SeP>1245<SeP>1599<SeP>1363<SeP>1035<SeP>1066<SeP>995<SeP>1828<SeP>1062<SeP>1159<SeP>956<SeP>1231<SeP>1345<SeP>961<SeP>939<SeP>1192<SeP>1076<SeP>825<SeP>882<SeP>1093<SeP>1435<SeP>1542<SeP>1432<SeP>1386<SeP>1217<SeP>908<SeP>1164<SeP>1167<SeP>1199<SeP>1028<SeP>1023<SeP>1004<SeP>1204<SeP>1282<SeP>1475<SeP>1156<SeP>1655<SeP>1293<SeP>1647<SeP>1345<SeP>1261<SeP>1443<SeP>1393<SeP>1324<SeP>1268<SeP>1728<SeP>1422<SeP>1346<SeP>1599<SeP>1277<SeP>1423<SeP>1271<SeP>1197<SeP>1296<SeP>1385<SeP>1666<SeP>1272<SeP>1302<SeP>1180<SeP>1444<SeP>1139<SeP>1317<SeP>1320<SeP>1648<SeP>1774<SeP>1323<SeP>790<SeP>1079<SeP>1800<SeP>1375<SeP>1293<SeP>1357<SeP>1004<SeP>1326<SeP>1253<SeP>1507<SeP>1298<SeP>1451<SeP>1618<SeP>1363<SeP>1497<SeP>1719<SeP>1252<SeP>1526<SeP>1342<SeP>1752<SeP>1606<SeP>925<SeP>1071<SeP>2022<SeP>1875<SeP>1658<SeP>1718<SeP>1688<SeP>1561<SeP>1506";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:26:33<SeP>2023-07-28 20:53:06<SeP>2023-07-30 07:19:39<SeP>2023-07-31 17:46:12<SeP>2023-08-02 04:12:45<SeP>2023-08-03 14:39:18<SeP>2023-08-05 01:05:51<SeP>2023-08-06 11:32:24<SeP>2023-08-07 21:58:57<SeP>2023-08-09 08:25:30<SeP>2023-08-10 18:52:03<SeP>2023-08-12 05:18:36<SeP>2023-08-13 15:45:09<SeP>2023-08-15 02:11:42<SeP>2023-08-16 12:38:15<SeP>2023-08-17 23:04:48<SeP>2023-08-19 09:31:21<SeP>2023-08-20 19:57:54<SeP>2023-08-22 06:24:27<SeP>2023-08-23 16:51:00<SeP>2023-08-25 03:17:33<SeP>2023-08-26 13:44:06<SeP>2023-08-28 00:10:39<SeP>2023-08-29 10:37:12<SeP>2023-08-30 21:03:45<SeP>2023-09-01 07:30:18<SeP>2023-09-02 17:56:51<SeP>2023-09-04 04:23:24<SeP>2023-09-05 14:49:57<SeP>2023-09-07 01:16:30<SeP>2023-09-08 11:43:03<SeP>2023-09-09 22:09:36<SeP>2023-09-11 08:36:09<SeP>2023-09-12 19:02:42<SeP>2023-09-14 05:29:15<SeP>2023-09-15 15:55:48<SeP>2023-09-17 02:22:21<SeP>2023-09-18 12:48:54<SeP>2023-09-19 23:15:27<SeP>2023-09-21 09:42:00<SeP>2023-09-22 20:08:33<SeP>2023-09-24 06:35:06<SeP>2023-09-25 17:01:39<SeP>2023-09-27 03:28:12<SeP>2023-09-28 13:54:45<SeP>2023-09-30 00:21:18<SeP>2023-10-01 10:47:51<SeP>2023-10-02 21:14:24<SeP>2023-10-04 07:40:57<SeP>2023-10-05 18:07:30<SeP>2023-10-07 04:34:03<SeP>2023-10-08 15:00:36<SeP>2023-10-10 01:27:09<SeP>2023-10-11 11:53:42<SeP>2023-10-12 22:20:15<SeP>2023-10-14 08:46:48<SeP>2023-10-15 19:13:21<SeP>2023-10-17 05:39:54<SeP>2023-10-18 16:06:27<SeP>2023-10-20 02:33:00<SeP>2023-10-21 12:59:33<SeP>2023-10-22 23:26:06<SeP>2023-10-24 09:52:39<SeP>2023-10-25 20:19:12<SeP>2023-10-27 06:45:45<SeP>2023-10-28 17:12:18<SeP>2023-10-30 03:38:51<SeP>2023-10-31 14:05:24<SeP>2023-11-02 00:31:57<SeP>2023-11-03 10:58:30<SeP>2023-11-04 21:25:03<SeP>2023-11-06 06:51:36<SeP>2023-11-07 17:18:09<SeP>2023-11-09 03:44:42<SeP>2023-11-10 14:11:15<SeP>2023-11-12 00:37:48<SeP>2023-11-13 11:04:21<SeP>2023-11-14 21:30:54<SeP>2023-11-16 07:57:27<SeP>2023-11-17 18:24:00<SeP>2023-11-19 04:50:33<SeP>2023-11-20 15:17:06<SeP>2023-11-22 01:43:39<SeP>2023-11-23 12:10:12<SeP>2023-11-24 22:36:45<SeP>2023-11-26 09:03:18<SeP>2023-11-27 19:29:51<SeP>2023-11-29 05:56:24<SeP>2023-11-30 16:22:57<SeP>2023-12-02 02:49:30<SeP>2023-12-03 13:16:03<SeP>2023-12-04 23:42:36<SeP>2023-12-06 10:09:09<SeP>2023-12-07 20:35:42<SeP>2023-12-09 07:02:15<SeP>2023-12-10 17:28:48<SeP>2023-12-12 03:55:21<SeP>2023-12-13 14:21:54<SeP>2023-12-15 00:48:27<SeP>2023-12-16 11:15:00<SeP>2023-12-17 21:41:33<SeP>2023-12-19 08:08:06<SeP>2023-12-20 18:34:39<SeP>2023-12-22 05:01:12<SeP>2023-12-23 15:27:45<SeP>2023-12-25 01:54:18<SeP>2023-12-26 12:20:51<SeP>2023-12-27 22:47:24<SeP>2023-12-29 09:13:57<SeP>2023-12-30 19:40:30<SeP>2024-01-01 06:07:03<SeP>2024-01-02 16:33:36<SeP>2024-01-04 03:00:09<SeP>2024-01-05 13:26:42<SeP>2024-01-06 23:53:15<SeP>2024-01-08 10:19:48<SeP>2024-01-09 20:46:21<SeP>2024-01-11 07:12:54<SeP>2024-01-12 17:39:27<SeP>2024-01-14 04:06:00<SeP>2024-01-15 14:32:33<SeP>2024-01-17 00:59:06<SeP>2024-01-18 11:25:39<SeP>2024-01-19 21:52:12<SeP>2024-01-21 08:18:45<SeP>2024-01-22 18:45:18<SeP>2024-01-24 05:11:51<SeP>2024-01-25 15:38:24<SeP>2024-01-27 02:04:57<SeP>2024-01-28 12:31:30<SeP>2024-01-29 22:58:03<SeP>2024-01-31 09:24:36<SeP>2024-02-01 19:51:09<SeP>2024-02-03 06:17:42<SeP>2024-02-04 16:44:15<SeP>2024-02-06 03:10:48<SeP>2024-02-07 13:37:21<SeP>2024-02-09 00:03:54<SeP>2024-02-10 10:30:27<SeP>2024-02-11 20:57:00<SeP>2024-02-13 07:23:33<SeP>2024-02-14 17:50:06<SeP>2024-02-16 04:16:39<SeP>2024-02-17 14:43:12<SeP>2024-02-19 01:09:45<SeP>2024-02-20 11:36:18<SeP>2024-02-21 22:02:51<SeP>2024-02-23 08:29:24<SeP>2024-02-24 18:55:57<SeP>2024-02-26 05:22:30<SeP>2024-02-27 15:49:03<SeP>2024-02-29 02:15:36<SeP>2024-03-01 12:42:09<SeP>2024-03-02 23:08:42<SeP>2024-03-04 09:35:15<SeP>2024-03-05 20:01:48<SeP>2024-03-07 06:28:21<SeP>2024-03-08 16:54:54<SeP>2024-03-10 04:21:27<SeP>2024-03-11 14:48:00<SeP>2024-03-13 01:14:33<SeP>2024-03-14 11:41:06<SeP>2024-03-15 22:07:39<SeP>2024-03-17 08:34:12<SeP>2024-03-18 19:00:45<SeP>2024-03-20 05:27:18<SeP>2024-03-21 15:53:51<SeP>2024-03-23 02:20:24<SeP>2024-03-24 12:46:57<SeP>2024-03-25 23:13:30<SeP>2024-03-27 09:40:03<SeP>2024-03-28 20:06:36<SeP>2024-03-30 06:33:09<SeP>2024-03-31 16:59:42<SeP>2024-04-02 03:26:15<SeP>2024-04-03 13:52:48<SeP>2024-04-05 00:19:21<SeP>2024-04-06 10:45:54<SeP>2024-04-07 21:12:27<SeP>2024-04-09 07:39:00<SeP>2024-04-10 18:05:33<SeP>2024-04-12 04:32:06<SeP>2024-04-13 14:58:39<SeP>2024-04-15 01:25:12<SeP>2024-04-16 11:51:45<SeP>2024-04-17 22:18:18<SeP>2024-04-19 08:44:51<SeP>2024-04-20 19:11:24<SeP>2024-04-22 05:37:57<SeP>2024-04-23 16:04:30<SeP>2024-04-25 02:31:03<SeP>2024-04-26 12:57:36<SeP>2024-04-27 23:24:09<SeP>2024-04-29 09:50:42<SeP>2024-04-30 20:17:15<SeP>2024-05-02 06:43:48<SeP>2024-05-03 17:10:21<SeP>2024-05-05 03:36:54<SeP>2024-05-06 14:03:27<SeP>2024-05-08 00:30:00<SeP>2024-05-09 10:56:33<SeP>2024-05-10 21:23:06<SeP>2024-05-12 07:49:39<SeP>2024-05-13 18:16:12<SeP>2024-05-15 04:42:45<SeP>2024-05-16 15:09:18<SeP>2024-05-18 01:35:51<SeP>2024-05-19 12:02:24<SeP>2024-05-20 22:28:57<SeP>2024-05-22 08:55:30<SeP>2024-05-23 19:22:03<SeP>2024-05-25 05:48:36<SeP>2024-05-26 16:15:09<SeP>2024-05-28 02:41:42<SeP>2024-05-29 13:08:15<SeP>2024-05-30 23:34:48<SeP>2024-06-01 10:01:21<SeP>2024-06-02 20:27:54<SeP>2024-06-04 06:54:27<SeP>2024-06-05 17:21:00<SeP>2024-06-07 03:47:33<SeP>2024-06-08 14:14:06<SeP>2024-06-10 00:40:39<SeP>2024-06-11 11:07:12<SeP>2024-06-12 21:33:45<SeP>2024-06-14 08:00:18<SeP>2024-06-15 18:26:51<SeP>2024-06-17 04:53:24<SeP>2024-06-18 15:19:57<SeP>2024-06-20 01:46:30<SeP>2024-06-21 12:13:03<SeP>2024-06-22 22:39:36<SeP>2024-06-24 09:06:09<SeP>2024-06-25 19:32:42<SeP>2024-06-27 05:59:15<SeP>2024-06-28 16:25:48<SeP>2024-06-30 02:52:21<SeP>2024-07-01 13:18:54<SeP>2024-07-02 23:45:27<SeP>2024-07-04 10:12:00<SeP>2024-07-05 20:38:33<SeP>2024-07-07 07:05:06<SeP>2024-07-08 17:31:39<SeP>2024-07-10 03:58:12<SeP>2024-07-11 14:24:45<SeP>2024-07-13 00:51:18<SeP>2024-07-14 11:17:51<SeP>2024-07-15 21:44:24<SeP>2024-07-17 08:10:57<SeP>2024-07-18 18:37:30<SeP>2024-07-20 05:04:03<SeP>2024-07-21 15:30:36<SeP>2024-07-23 01:57:09<SeP>2024-07-24 12:23:42<SeP>2024-07-25 22:50:15<SeP>2024-07-27 09:16:48<SeP>2024-07-28 19:43:21<SeP>2024-07-30 06:09:54<SeP>2024-07-31 16:36:27<SeP>2024-08-02 03:03:00<SeP>2024-08-03 13:29:33<SeP>2024-08-04 23:56:06<SeP>2024-08-06 10:22:39<SeP>2024-08-07 20:49:12<SeP>2024-08-09 07:15:45<SeP>2024-08-10 17:42:18<SeP>2024-08-12 04:08:51<SeP>2024-08-13 14:35:24<SeP>2024-08-15 01:01:57<SeP>2024-08-16 11:28:30<SeP>2024-08-17 21:55:03<SeP>2024-08-19 08:21:36<SeP>2024-08-20 18:48:09<SeP>2024-08-22 05:14:42<SeP>2024-08-23 15:41:15<SeP>2024-08-25 02:07:48<SeP>2024-08-26 12:34:21<SeP>2024-08-27 23:00:54<SeP>2024-08-29 09:27:27<SeP>2024-08-30 19:54:00<SeP>2024-09-01 06:20:33<SeP>2024-09-02 16:47:06<SeP>2024-09-04 03:13:39<SeP>2024-09-05 13:40:12<SeP>2024-09-07 00:06:45<SeP>2024-09-08 10:33:18<SeP>2024-09-09 20:59:51<SeP>2024-09-11 07:26:24<SeP>2024-09-12 17:52:57<SeP>2024-09-14 04:19:30<SeP>2024-09-15 14:46:03<SeP>2024-09-17 01:12:36<SeP>2024-09-18 11:39:09<SeP>2024-09-19 22:05:42<SeP>2024-09-21 08:32:15<SeP>2024-09-22 18:58:48<SeP>2024-09-24 05:25:21<SeP>2024-09-25 15:51:54<SeP>2024-09-27 02:18:27<SeP>2024-09-28 12:45:00<SeP>2024-09-29 23:11:33<SeP>2024-10-01 09:38:06<SeP>2024-10-02 20:04:39<SeP>2024-10-04 06:31:12<SeP>2024-10-05 16:57:45<SeP>2024-10-07 03:24:18<SeP>2024-10-08 13:50:51<SeP>2024-10-10 00:17:24<SeP>2024-10-11 10:43:57<SeP>2024-10-12 21:10:30<SeP>2024-10-14 07:37:03<SeP>2024-10-15 18:03:36<SeP>2024-10-17 04:30:09<SeP>2024-10-18 14:56:42<SeP>2024-10-20 01:23:15<SeP>2024-10-21 11:49:48<SeP>2024-10-22 22:16:21<SeP>2024-10-24 08:42:54<SeP>2024-10-25 19:09:27<SeP>2024-10-27 05:36:00<SeP>2024-10-28 16:02:33<SeP>2024-10-30 02:29:06<SeP>2024-10-31 12:55:39<SeP>2024-11-01 23:22:12<SeP>2024-11-03 08:48:45<SeP>2024-11-04 19:15:18<SeP>2024-11-06 05:41:51<SeP>2024-11-07 16:08:24<SeP>2024-11-09 02:34:57<SeP>2024-11-10 13:01:30<SeP>2024-11-11 23:28:03<SeP>2024-11-13 09:54:36<SeP>2024-11-14 20:21:09<SeP>2024-11-16 06:47:42<SeP>2024-11-17 17:14:15<SeP>2024-11-19 03:40:48<SeP>2024-11-20 14:07:21<SeP>2024-11-22 00:33:54<SeP>2024-11-23 11:00:27<SeP>2024-11-24 21:27:00<SeP>2024-11-26 07:53:33<SeP>2024-11-27 18:20:06<SeP>2024-11-29 04:46:39<SeP>2024-11-30 15:13:12<SeP>2024-12-02 01:39:45<SeP>2024-12-03 12:06:18<SeP>2024-12-04 22:32:51<SeP>2024-12-06 08:59:24<SeP>2024-12-07 19:25:57<SeP>2024-12-09 05:52:30<SeP>2024-12-10 16:19:03<SeP>2024-12-12 02:45:36<SeP>2024-12-13 13:12:09<SeP>2024-12-14 23:38:42<SeP>2024-12-16 10:05:15<SeP>2024-12-17 20:31:48<SeP>2024-12-19 06:58:21<SeP>2024-12-20 17:24:54<SeP>2024-12-22 03:51:27<SeP>2024-12-23 14:18:00<SeP>2024-12-25 00:44:33<SeP>2024-12-26 11:11:06<SeP>2024-12-27 21:37:39<SeP>2024-12-29 08:04:12<SeP>2024-12-30 18:30:45<SeP>2025-01-01 04:57:18<SeP>2025-01-02 15:23:51<SeP>2025-01-04 01:50:24<SeP>2025-01-05 12:16:57<SeP>2025-01-06 22:43:30<SeP>2025-01-08 09:10:03<SeP>2025-01-09 19:36:36<SeP>2025-01-11 06:03:09<SeP>2025-01-12 16:29:42<SeP>2025-01-14 02:56:15<SeP>2025-01-15 13:22:48<SeP>2025-01-16 23:49:21<SeP>2025-01-18 10:15:54<SeP>2025-01-19 20:42:27<SeP>2025-01-21 07:09:00<SeP>2025-01-22 17:35:33<SeP>2025-01-24 04:02:06<SeP>2025-01-25 14:28:39<SeP>2025-01-27 00:55:12<SeP>2025-01-28 11:21:45<SeP>2025-01-29 21:48:18<SeP>2025-01-31 08:14:51<SeP>2025-02-01 18:41:24<SeP>2025-02-03 05:07:57<SeP>2025-02-04 15:34:30<SeP>2025-02-06 02:01:03<SeP>2025-02-07 12:27:36<SeP>2025-02-08 22:54:09<SeP>2025-02-10 09:20:42<SeP>2025-02-11 19:47:15<SeP>2025-02-13 06:13:48<SeP>2025-02-14 16:40:21<SeP>2025-02-16 03:06:54<SeP>2025-02-17 13:33:27";
  const itemLabel       = "Ataques";
  const itemData        = "152<SeP>612<SeP>966<SeP>712<SeP>551<SeP>211<SeP>6953<SeP>488<SeP>9219<SeP>977<SeP>278<SeP>1234<SeP>787<SeP>729<SeP>144<SeP>438<SeP>155<SeP>361<SeP>667<SeP>3197<SeP>6590<SeP>8083<SeP>6386<SeP>8990<SeP>422<SeP>303<SeP>402<SeP>164<SeP>378<SeP>5930<SeP>81<SeP>385<SeP>129<SeP>525<SeP>317<SeP>8626<SeP>9399<SeP>9955<SeP>9470<SeP>6851<SeP>5060<SeP>8396<SeP>6978<SeP>8970<SeP>8909<SeP>7502<SeP>7972<SeP>8317<SeP>8731<SeP>8227<SeP>5501<SeP>6022<SeP>11565<SeP>6919<SeP>7685<SeP>7573<SeP>9465<SeP>8987<SeP>17567<SeP>16548<SeP>8471<SeP>11481<SeP>6352<SeP>8080<SeP>8148<SeP>9161<SeP>8546<SeP>6049<SeP>6721<SeP>6223<SeP>6726<SeP>3875<SeP>5877<SeP>5714<SeP>6268<SeP>5619<SeP>7356<SeP>5126<SeP>5350<SeP>5306<SeP>7080<SeP>4526<SeP>6706<SeP>5171<SeP>5372<SeP>6872<SeP>5353<SeP>5296<SeP>5385<SeP>9298<SeP>20882<SeP>27943<SeP>15222<SeP>9499<SeP>5447<SeP>7802<SeP>11448<SeP>7679<SeP>3184<SeP>6687<SeP>3566<SeP>4817<SeP>6761<SeP>4889<SeP>8854<SeP>6623<SeP>4990<SeP>4795<SeP>5641<SeP>9481<SeP>8113<SeP>6917<SeP>5281<SeP>4334<SeP>10764<SeP>8796<SeP>5398<SeP>3127<SeP>6096<SeP>9174<SeP>5349<SeP>6113<SeP>9264<SeP>6097<SeP>1335<SeP>2451<SeP>1026<SeP>2399<SeP>2078<SeP>1500<SeP>696<SeP>1098<SeP>1195<SeP>1877<SeP>489<SeP>1283<SeP>1115<SeP>944<SeP>1054<SeP>1042<SeP>1152<SeP>1429<SeP>987<SeP>1763<SeP>2084<SeP>1516<SeP>12414<SeP>5724<SeP>10792<SeP>7322<SeP>5526<SeP>10755<SeP>9031<SeP>7190<SeP>9813<SeP>10465<SeP>11127<SeP>7400<SeP>13221<SeP>13423<SeP>6763<SeP>10393<SeP>5687<SeP>4974<SeP>6915<SeP>25426<SeP>5859<SeP>8592<SeP>7502<SeP>17384<SeP>8891<SeP>7280<SeP>5793<SeP>6437<SeP>8410<SeP>25305<SeP>6695<SeP>9837<SeP>9811<SeP>4728<SeP>6024<SeP>6174<SeP>16183<SeP>4655<SeP>12572<SeP>8006<SeP>6635<SeP>8033<SeP>7581<SeP>2996<SeP>6038<SeP>5690<SeP>7072<SeP>6374<SeP>6082<SeP>7336<SeP>18616<SeP>6045<SeP>9543<SeP>5069<SeP>6946<SeP>8264<SeP>10379<SeP>5581<SeP>2483<SeP>6314<SeP>4484<SeP>3987<SeP>4312<SeP>1654<SeP>617<SeP>595<SeP>151<SeP>619<SeP>583<SeP>776<SeP>337<SeP>645<SeP>1313<SeP>1221<SeP>3109<SeP>22936<SeP>535<SeP>4469<SeP>2713<SeP>2973<SeP>7142<SeP>3170<SeP>4191<SeP>2340<SeP>3804<SeP>2742<SeP>2921<SeP>4179<SeP>2969<SeP>2336<SeP>3552<SeP>1238<SeP>2407<SeP>1732<SeP>1292<SeP>1551<SeP>1375<SeP>1251<SeP>848<SeP>1609<SeP>26513<SeP>1698<SeP>4223<SeP>4036<SeP>1943<SeP>3228<SeP>3075<SeP>1933<SeP>3166<SeP>2783<SeP>3329<SeP>2586<SeP>2526<SeP>3264<SeP>3056<SeP>6764<SeP>4769<SeP>3914<SeP>3337<SeP>3143<SeP>3297<SeP>3972<SeP>5882<SeP>7949<SeP>5340<SeP>2225<SeP>3234<SeP>2399<SeP>4346<SeP>3730<SeP>3737<SeP>2743<SeP>2584<SeP>5854<SeP>3280<SeP>6130<SeP>3714<SeP>5406<SeP>5619<SeP>5673<SeP>3809<SeP>17839<SeP>9983<SeP>12516<SeP>1718<SeP>2269<SeP>4769<SeP>3277<SeP>3810<SeP>4187<SeP>4887<SeP>3676<SeP>4548<SeP>4463<SeP>3230<SeP>3701<SeP>1335<SeP>1738<SeP>2164<SeP>3647<SeP>2385<SeP>3005<SeP>3847<SeP>4175<SeP>3845<SeP>3265<SeP>4093<SeP>3324<SeP>3135<SeP>6003<SeP>7853<SeP>5773<SeP>4577<SeP>5028<SeP>4552<SeP>3310<SeP>3733<SeP>4475<SeP>5713<SeP>5369<SeP>4604<SeP>3763<SeP>1796<SeP>378<SeP>2358<SeP>1433<SeP>738<SeP>1914<SeP>1280<SeP>1060<SeP>2412<SeP>4113<SeP>5850<SeP>5075<SeP>33960<SeP>5168<SeP>6256<SeP>21829<SeP>5350<SeP>5242<SeP>5834<SeP>4182<SeP>24552<SeP>4784<SeP>5296<SeP>4677<SeP>5448<SeP>6370<SeP>28843<SeP>4714<SeP>3604<SeP>4080<SeP>3620<SeP>5995<SeP>4315<SeP>3782<SeP>2463<SeP>4451<SeP>5641<SeP>4631<SeP>17998<SeP>5121<SeP>5899<SeP>5852<SeP>1812<SeP>2872<SeP>3622<SeP>5001<SeP>3799<SeP>3973<SeP>2417<SeP>3647<SeP>2614<SeP>4359<SeP>4602<SeP>8115<SeP>10456<SeP>7874<SeP>8552<SeP>9155<SeP>6792<SeP>5729<SeP>4992<SeP>4235<SeP>22553<SeP>6383<SeP>3225<SeP>4678<SeP>3204<SeP>11193<SeP>5507<SeP>3783<SeP>4858<SeP>3907";
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
  const itemData    = "686471<SeP>357597<SeP>205165<SeP>177778<SeP>107376<SeP>86779<SeP>81831<SeP>79356<SeP>67437<SeP>64965";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "291617<SeP>41411<SeP>39618<SeP>34628<SeP>14166<SeP>10404<SeP>7314<SeP>7105<SeP>6910<SeP>6771";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Attacks";
  const itemData    = "394854<SeP>322969<SeP>202469<SeP>138160<SeP>93210<SeP>80008<SeP>79252<SeP>68952<SeP>57860<SeP>56122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "359449<SeP>259475<SeP>232684<SeP>143804<SeP>66129<SeP>56965<SeP>55465<SeP>44877<SeP>41608<SeP>35360";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "153098<SeP>52413<SeP>40488<SeP>31743<SeP>21866<SeP>12557<SeP>10524<SeP>9183<SeP>7614<SeP>7378";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "346892<SeP>258713<SeP>121938<SeP>79586<SeP>54514<SeP>46441<SeP>39374<SeP>30440<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Hong Kong";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "686471<SeP>357597<SeP>205165<SeP>177778<SeP>107376<SeP>86779<SeP>81831<SeP>79356<SeP>67437<SeP>64965";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "291617<SeP>41411<SeP>39618<SeP>34628<SeP>14166<SeP>10404<SeP>7314<SeP>7105<SeP>6910<SeP>6771";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Hong Kong<SeP>Australia";
  const itemLabel   = "Ataques";
  const itemData    = "394854<SeP>322969<SeP>202469<SeP>138160<SeP>93210<SeP>80008<SeP>79252<SeP>68952<SeP>57860<SeP>56122";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "359449<SeP>259475<SeP>232684<SeP>143804<SeP>66129<SeP>56965<SeP>55465<SeP>44877<SeP>41608<SeP>35360";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "153098<SeP>52413<SeP>40488<SeP>31743<SeP>21866<SeP>12557<SeP>10524<SeP>9183<SeP>7614<SeP>7378";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "346892<SeP>258713<SeP>121938<SeP>79586<SeP>54514<SeP>46441<SeP>39374<SeP>30440<SeP>29324<SeP>26846";
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
