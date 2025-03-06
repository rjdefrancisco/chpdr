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
  document.getElementById("last-updated").innerHTML = "2025-3-6";
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
  const metricData    = "2841605";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "553780";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2287825";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140182";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1435859";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "851966";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54317";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "249821";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "602145";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43601";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2841605";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "553780";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2287825";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "140182";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1435859";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "851966";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54317";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "249821";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "602145";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43601";
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
  const incomingData = "2841605<SeP>553780<SeP>2287825<SeP>140182";
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
  const incomingData = "2287825<SeP>1435859<SeP>851966<SeP>54317";
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
  const incomingData = "851966<SeP>249821<SeP>602145<SeP>43601";
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
  const incomingData = "2560518<SeP>257576<SeP>2302942";
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
  const incomingData = "388203<SeP>149<SeP>388054<SeP>229";
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
  const incomingData = "2841605<SeP>553780<SeP>2287825<SeP>140182";
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
  const incomingData = "2287825<SeP>1435859<SeP>851966<SeP>54317";
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
  const incomingData = "851966<SeP>249821<SeP>602145<SeP>43601";
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
  const incomingData = "2560518<SeP>257576<SeP>2302942";
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
  const incomingData = "388203<SeP>149<SeP>388054<SeP>229";
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
  const column3Data   = "220961<SeP>202488<SeP>12636<SeP>12464<SeP>9774<SeP>9451<SeP>6449<SeP>5593<SeP>4633<SeP>3500";
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
  const column2Data  = "212325<SeP>43136<SeP>870<SeP>485<SeP>462<SeP>443<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2405862<SeP>435743";
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
  const column3Data   = "220961<SeP>202488<SeP>12636<SeP>12464<SeP>9774<SeP>9451<SeP>6449<SeP>5593<SeP>4633<SeP>3500";
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
  const column2Data  = "212325<SeP>43136<SeP>870<SeP>485<SeP>462<SeP>443<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2405862<SeP>435743";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-6";

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
        "name": "traffic between 2023-07-26 and 2025-03-04"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          396771,50
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
        "name": "scans between 2023-07-26 and 2025-03-04"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          228404,30,
          396771,50
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
        "name": "attacks between 2023-07-26 and 2025-03-04"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168367,23,
          396771,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-6";

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
        "name": "tráfico entre 2023-07-26 y 2025-03-04"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          396771,50
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
        "name": "escaneos entre 2023-07-26 y 2025-03-04"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          228404,30,
          396771,50
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
        "name": "ataques entre 2023-07-26 y 2025-03-04"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          168367,23,
          396771,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:20:33<SeP>2023-07-28 22:41:06<SeP>2023-07-30 10:01:39<SeP>2023-07-31 21:22:12<SeP>2023-08-02 08:42:45<SeP>2023-08-03 20:03:18<SeP>2023-08-05 07:23:51<SeP>2023-08-06 18:44:24<SeP>2023-08-08 06:04:57<SeP>2023-08-09 17:25:30<SeP>2023-08-11 04:46:03<SeP>2023-08-12 16:06:36<SeP>2023-08-14 03:27:09<SeP>2023-08-15 14:47:42<SeP>2023-08-17 02:08:15<SeP>2023-08-18 13:28:48<SeP>2023-08-20 00:49:21<SeP>2023-08-21 12:09:54<SeP>2023-08-22 23:30:27<SeP>2023-08-24 10:51:00<SeP>2023-08-25 22:11:33<SeP>2023-08-27 09:32:06<SeP>2023-08-28 20:52:39<SeP>2023-08-30 08:13:12<SeP>2023-08-31 19:33:45<SeP>2023-09-02 06:54:18<SeP>2023-09-03 18:14:51<SeP>2023-09-05 05:35:24<SeP>2023-09-06 16:55:57<SeP>2023-09-08 04:16:30<SeP>2023-09-09 15:37:03<SeP>2023-09-11 02:57:36<SeP>2023-09-12 14:18:09<SeP>2023-09-14 01:38:42<SeP>2023-09-15 12:59:15<SeP>2023-09-17 00:19:48<SeP>2023-09-18 11:40:21<SeP>2023-09-19 23:00:54<SeP>2023-09-21 10:21:27<SeP>2023-09-22 21:42:00<SeP>2023-09-24 09:02:33<SeP>2023-09-25 20:23:06<SeP>2023-09-27 07:43:39<SeP>2023-09-28 19:04:12<SeP>2023-09-30 06:24:45<SeP>2023-10-01 17:45:18<SeP>2023-10-03 05:05:51<SeP>2023-10-04 16:26:24<SeP>2023-10-06 03:46:57<SeP>2023-10-07 15:07:30<SeP>2023-10-09 02:28:03<SeP>2023-10-10 13:48:36<SeP>2023-10-12 01:09:09<SeP>2023-10-13 12:29:42<SeP>2023-10-14 23:50:15<SeP>2023-10-16 11:10:48<SeP>2023-10-17 22:31:21<SeP>2023-10-19 09:51:54<SeP>2023-10-20 21:12:27<SeP>2023-10-22 08:33:00<SeP>2023-10-23 19:53:33<SeP>2023-10-25 07:14:06<SeP>2023-10-26 18:34:39<SeP>2023-10-28 05:55:12<SeP>2023-10-29 17:15:45<SeP>2023-10-31 04:36:18<SeP>2023-11-01 15:56:51<SeP>2023-11-03 03:17:24<SeP>2023-11-04 14:37:57<SeP>2023-11-06 00:58:30<SeP>2023-11-07 12:19:03<SeP>2023-11-08 23:39:36<SeP>2023-11-10 11:00:09<SeP>2023-11-11 22:20:42<SeP>2023-11-13 09:41:15<SeP>2023-11-14 21:01:48<SeP>2023-11-16 08:22:21<SeP>2023-11-17 19:42:54<SeP>2023-11-19 07:03:27<SeP>2023-11-20 18:24:00<SeP>2023-11-22 05:44:33<SeP>2023-11-23 17:05:06<SeP>2023-11-25 04:25:39<SeP>2023-11-26 15:46:12<SeP>2023-11-28 03:06:45<SeP>2023-11-29 14:27:18<SeP>2023-12-01 01:47:51<SeP>2023-12-02 13:08:24<SeP>2023-12-04 00:28:57<SeP>2023-12-05 11:49:30<SeP>2023-12-06 23:10:03<SeP>2023-12-08 10:30:36<SeP>2023-12-09 21:51:09<SeP>2023-12-11 09:11:42<SeP>2023-12-12 20:32:15<SeP>2023-12-14 07:52:48<SeP>2023-12-15 19:13:21<SeP>2023-12-17 06:33:54<SeP>2023-12-18 17:54:27<SeP>2023-12-20 05:15:00<SeP>2023-12-21 16:35:33<SeP>2023-12-23 03:56:06<SeP>2023-12-24 15:16:39<SeP>2023-12-26 02:37:12<SeP>2023-12-27 13:57:45<SeP>2023-12-29 01:18:18<SeP>2023-12-30 12:38:51<SeP>2023-12-31 23:59:24<SeP>2024-01-02 11:19:57<SeP>2024-01-03 22:40:30<SeP>2024-01-05 10:01:03<SeP>2024-01-06 21:21:36<SeP>2024-01-08 08:42:09<SeP>2024-01-09 20:02:42<SeP>2024-01-11 07:23:15<SeP>2024-01-12 18:43:48<SeP>2024-01-14 06:04:21<SeP>2024-01-15 17:24:54<SeP>2024-01-17 04:45:27<SeP>2024-01-18 16:06:00<SeP>2024-01-20 03:26:33<SeP>2024-01-21 14:47:06<SeP>2024-01-23 02:07:39<SeP>2024-01-24 13:28:12<SeP>2024-01-26 00:48:45<SeP>2024-01-27 12:09:18<SeP>2024-01-28 23:29:51<SeP>2024-01-30 10:50:24<SeP>2024-01-31 22:10:57<SeP>2024-02-02 09:31:30<SeP>2024-02-03 20:52:03<SeP>2024-02-05 08:12:36<SeP>2024-02-06 19:33:09<SeP>2024-02-08 06:53:42<SeP>2024-02-09 18:14:15<SeP>2024-02-11 05:34:48<SeP>2024-02-12 16:55:21<SeP>2024-02-14 04:15:54<SeP>2024-02-15 15:36:27<SeP>2024-02-17 02:57:00<SeP>2024-02-18 14:17:33<SeP>2024-02-20 01:38:06<SeP>2024-02-21 12:58:39<SeP>2024-02-23 00:19:12<SeP>2024-02-24 11:39:45<SeP>2024-02-25 23:00:18<SeP>2024-02-27 10:20:51<SeP>2024-02-28 21:41:24<SeP>2024-03-01 09:01:57<SeP>2024-03-02 20:22:30<SeP>2024-03-04 07:43:03<SeP>2024-03-05 19:03:36<SeP>2024-03-07 06:24:09<SeP>2024-03-08 17:44:42<SeP>2024-03-10 06:05:15<SeP>2024-03-11 17:25:48<SeP>2024-03-13 04:46:21<SeP>2024-03-14 16:06:54<SeP>2024-03-16 03:27:27<SeP>2024-03-17 14:48:00<SeP>2024-03-19 02:08:33<SeP>2024-03-20 13:29:06<SeP>2024-03-22 00:49:39<SeP>2024-03-23 12:10:12<SeP>2024-03-24 23:30:45<SeP>2024-03-26 10:51:18<SeP>2024-03-27 22:11:51<SeP>2024-03-29 09:32:24<SeP>2024-03-30 20:52:57<SeP>2024-04-01 08:13:30<SeP>2024-04-02 19:34:03<SeP>2024-04-04 06:54:36<SeP>2024-04-05 18:15:09<SeP>2024-04-07 05:35:42<SeP>2024-04-08 16:56:15<SeP>2024-04-10 04:16:48<SeP>2024-04-11 15:37:21<SeP>2024-04-13 02:57:54<SeP>2024-04-14 14:18:27<SeP>2024-04-16 01:39:00<SeP>2024-04-17 12:59:33<SeP>2024-04-19 00:20:06<SeP>2024-04-20 11:40:39<SeP>2024-04-21 23:01:12<SeP>2024-04-23 10:21:45<SeP>2024-04-24 21:42:18<SeP>2024-04-26 09:02:51<SeP>2024-04-27 20:23:24<SeP>2024-04-29 07:43:57<SeP>2024-04-30 19:04:30<SeP>2024-05-02 06:25:03<SeP>2024-05-03 17:45:36<SeP>2024-05-05 05:06:09<SeP>2024-05-06 16:26:42<SeP>2024-05-08 03:47:15<SeP>2024-05-09 15:07:48<SeP>2024-05-11 02:28:21<SeP>2024-05-12 13:48:54<SeP>2024-05-14 01:09:27<SeP>2024-05-15 12:30:00<SeP>2024-05-16 23:50:33<SeP>2024-05-18 11:11:06<SeP>2024-05-19 22:31:39<SeP>2024-05-21 09:52:12<SeP>2024-05-22 21:12:45<SeP>2024-05-24 08:33:18<SeP>2024-05-25 19:53:51<SeP>2024-05-27 07:14:24<SeP>2024-05-28 18:34:57<SeP>2024-05-30 05:55:30<SeP>2024-05-31 17:16:03<SeP>2024-06-02 04:36:36<SeP>2024-06-03 15:57:09<SeP>2024-06-05 03:17:42<SeP>2024-06-06 14:38:15<SeP>2024-06-08 01:58:48<SeP>2024-06-09 13:19:21<SeP>2024-06-11 00:39:54<SeP>2024-06-12 12:00:27<SeP>2024-06-13 23:21:00<SeP>2024-06-15 10:41:33<SeP>2024-06-16 22:02:06<SeP>2024-06-18 09:22:39<SeP>2024-06-19 20:43:12<SeP>2024-06-21 08:03:45<SeP>2024-06-22 19:24:18<SeP>2024-06-24 06:44:51<SeP>2024-06-25 18:05:24<SeP>2024-06-27 05:25:57<SeP>2024-06-28 16:46:30<SeP>2024-06-30 04:07:03<SeP>2024-07-01 15:27:36<SeP>2024-07-03 02:48:09<SeP>2024-07-04 14:08:42<SeP>2024-07-06 01:29:15<SeP>2024-07-07 12:49:48<SeP>2024-07-09 00:10:21<SeP>2024-07-10 11:30:54<SeP>2024-07-11 22:51:27<SeP>2024-07-13 10:12:00<SeP>2024-07-14 21:32:33<SeP>2024-07-16 08:53:06<SeP>2024-07-17 20:13:39<SeP>2024-07-19 07:34:12<SeP>2024-07-20 18:54:45<SeP>2024-07-22 06:15:18<SeP>2024-07-23 17:35:51<SeP>2024-07-25 04:56:24<SeP>2024-07-26 16:16:57<SeP>2024-07-28 03:37:30<SeP>2024-07-29 14:58:03<SeP>2024-07-31 02:18:36<SeP>2024-08-01 13:39:09<SeP>2024-08-03 00:59:42<SeP>2024-08-04 12:20:15<SeP>2024-08-05 23:40:48<SeP>2024-08-07 11:01:21<SeP>2024-08-08 22:21:54<SeP>2024-08-10 09:42:27<SeP>2024-08-11 21:03:00<SeP>2024-08-13 08:23:33<SeP>2024-08-14 19:44:06<SeP>2024-08-16 07:04:39<SeP>2024-08-17 18:25:12<SeP>2024-08-19 05:45:45<SeP>2024-08-20 17:06:18<SeP>2024-08-22 04:26:51<SeP>2024-08-23 15:47:24<SeP>2024-08-25 03:07:57<SeP>2024-08-26 14:28:30<SeP>2024-08-28 01:49:03<SeP>2024-08-29 13:09:36<SeP>2024-08-31 00:30:09<SeP>2024-09-01 11:50:42<SeP>2024-09-02 23:11:15<SeP>2024-09-04 10:31:48<SeP>2024-09-05 21:52:21<SeP>2024-09-07 09:12:54<SeP>2024-09-08 20:33:27<SeP>2024-09-10 07:54:00<SeP>2024-09-11 19:14:33<SeP>2024-09-13 06:35:06<SeP>2024-09-14 17:55:39<SeP>2024-09-16 05:16:12<SeP>2024-09-17 16:36:45<SeP>2024-09-19 03:57:18<SeP>2024-09-20 15:17:51<SeP>2024-09-22 02:38:24<SeP>2024-09-23 13:58:57<SeP>2024-09-25 01:19:30<SeP>2024-09-26 12:40:03<SeP>2024-09-28 00:00:36<SeP>2024-09-29 11:21:09<SeP>2024-09-30 22:41:42<SeP>2024-10-02 10:02:15<SeP>2024-10-03 21:22:48<SeP>2024-10-05 08:43:21<SeP>2024-10-06 20:03:54<SeP>2024-10-08 07:24:27<SeP>2024-10-09 18:45:00<SeP>2024-10-11 06:05:33<SeP>2024-10-12 17:26:06<SeP>2024-10-14 04:46:39<SeP>2024-10-15 16:07:12<SeP>2024-10-17 03:27:45<SeP>2024-10-18 14:48:18<SeP>2024-10-20 02:08:51<SeP>2024-10-21 13:29:24<SeP>2024-10-23 00:49:57<SeP>2024-10-24 12:10:30<SeP>2024-10-25 23:31:03<SeP>2024-10-27 10:51:36<SeP>2024-10-28 22:12:09<SeP>2024-10-30 09:32:42<SeP>2024-10-31 20:53:15<SeP>2024-11-02 08:13:48<SeP>2024-11-03 18:34:21<SeP>2024-11-05 05:54:54<SeP>2024-11-06 17:15:27<SeP>2024-11-08 04:36:00<SeP>2024-11-09 15:56:33<SeP>2024-11-11 03:17:06<SeP>2024-11-12 14:37:39<SeP>2024-11-14 01:58:12<SeP>2024-11-15 13:18:45<SeP>2024-11-17 00:39:18<SeP>2024-11-18 11:59:51<SeP>2024-11-19 23:20:24<SeP>2024-11-21 10:40:57<SeP>2024-11-22 22:01:30<SeP>2024-11-24 09:22:03<SeP>2024-11-25 20:42:36<SeP>2024-11-27 08:03:09<SeP>2024-11-28 19:23:42<SeP>2024-11-30 06:44:15<SeP>2024-12-01 18:04:48<SeP>2024-12-03 05:25:21<SeP>2024-12-04 16:45:54<SeP>2024-12-06 04:06:27<SeP>2024-12-07 15:27:00<SeP>2024-12-09 02:47:33<SeP>2024-12-10 14:08:06<SeP>2024-12-12 01:28:39<SeP>2024-12-13 12:49:12<SeP>2024-12-15 00:09:45<SeP>2024-12-16 11:30:18<SeP>2024-12-17 22:50:51<SeP>2024-12-19 10:11:24<SeP>2024-12-20 21:31:57<SeP>2024-12-22 08:52:30<SeP>2024-12-23 20:13:03<SeP>2024-12-25 07:33:36<SeP>2024-12-26 18:54:09<SeP>2024-12-28 06:14:42<SeP>2024-12-29 17:35:15<SeP>2024-12-31 04:55:48<SeP>2025-01-01 16:16:21<SeP>2025-01-03 03:36:54<SeP>2025-01-04 14:57:27<SeP>2025-01-06 02:18:00<SeP>2025-01-07 13:38:33<SeP>2025-01-09 00:59:06<SeP>2025-01-10 12:19:39<SeP>2025-01-11 23:40:12<SeP>2025-01-13 11:00:45<SeP>2025-01-14 22:21:18<SeP>2025-01-16 09:41:51<SeP>2025-01-17 21:02:24<SeP>2025-01-19 08:22:57<SeP>2025-01-20 19:43:30<SeP>2025-01-22 07:04:03<SeP>2025-01-23 18:24:36<SeP>2025-01-25 05:45:09<SeP>2025-01-26 17:05:42<SeP>2025-01-28 04:26:15<SeP>2025-01-29 15:46:48<SeP>2025-01-31 03:07:21<SeP>2025-02-01 14:27:54<SeP>2025-02-03 01:48:27<SeP>2025-02-04 13:09:00<SeP>2025-02-06 00:29:33<SeP>2025-02-07 11:50:06<SeP>2025-02-08 23:10:39<SeP>2025-02-10 10:31:12<SeP>2025-02-11 21:51:45<SeP>2025-02-13 09:12:18<SeP>2025-02-14 20:32:51<SeP>2025-02-16 07:53:24<SeP>2025-02-17 19:13:57<SeP>2025-02-19 06:34:30<SeP>2025-02-20 17:55:03<SeP>2025-02-22 05:15:36<SeP>2025-02-23 16:36:09<SeP>2025-02-25 03:56:42<SeP>2025-02-26 15:17:15<SeP>2025-02-28 02:37:48<SeP>2025-03-01 13:58:21<SeP>2025-03-03 01:18:54<SeP>2025-03-04 12:39:27";
  const item1Label       = "Scans";
  const item1Data        = "771<SeP>1514<SeP>1366<SeP>1486<SeP>1228<SeP>1745<SeP>938<SeP>964<SeP>1167<SeP>3409<SeP>2810<SeP>1596<SeP>3285<SeP>909<SeP>760<SeP>911<SeP>1413<SeP>2915<SeP>1816<SeP>1175<SeP>1244<SeP>945<SeP>1028<SeP>1271<SeP>888<SeP>862<SeP>813<SeP>3796<SeP>711<SeP>978<SeP>988<SeP>1658<SeP>897<SeP>823<SeP>3167<SeP>2660<SeP>1934<SeP>1669<SeP>1814<SeP>1224<SeP>1600<SeP>1900<SeP>1996<SeP>1783<SeP>1672<SeP>1596<SeP>1725<SeP>1685<SeP>1768<SeP>1724<SeP>1823<SeP>1766<SeP>1757<SeP>3098<SeP>1323<SeP>1961<SeP>1823<SeP>2396<SeP>1548<SeP>2041<SeP>3259<SeP>1471<SeP>1465<SeP>1524<SeP>1510<SeP>1860<SeP>1585<SeP>1258<SeP>1439<SeP>1186<SeP>2383<SeP>1211<SeP>1159<SeP>1262<SeP>2408<SeP>7159<SeP>1187<SeP>1313<SeP>1440<SeP>2275<SeP>1289<SeP>1381<SeP>6486<SeP>1451<SeP>1612<SeP>978<SeP>3014<SeP>1591<SeP>1015<SeP>1132<SeP>1053<SeP>1052<SeP>3121<SeP>914<SeP>1078<SeP>2093<SeP>4526<SeP>4676<SeP>919<SeP>949<SeP>968<SeP>961<SeP>1036<SeP>811<SeP>1174<SeP>2896<SeP>2976<SeP>1574<SeP>1687<SeP>745<SeP>786<SeP>1399<SeP>1283<SeP>1092<SeP>1029<SeP>2257<SeP>1123<SeP>1129<SeP>1084<SeP>1052<SeP>952<SeP>815<SeP>857<SeP>843<SeP>793<SeP>1154<SeP>853<SeP>871<SeP>820<SeP>859<SeP>874<SeP>697<SeP>861<SeP>899<SeP>915<SeP>867<SeP>733<SeP>986<SeP>689<SeP>771<SeP>1135<SeP>730<SeP>942<SeP>973<SeP>876<SeP>1142<SeP>975<SeP>745<SeP>547<SeP>950<SeP>843<SeP>1300<SeP>879<SeP>1047<SeP>1215<SeP>1239<SeP>916<SeP>852<SeP>957<SeP>933<SeP>865<SeP>1056<SeP>862<SeP>983<SeP>897<SeP>1089<SeP>919<SeP>1122<SeP>984<SeP>1042<SeP>1105<SeP>896<SeP>918<SeP>2206<SeP>1225<SeP>1140<SeP>1081<SeP>1047<SeP>1141<SeP>937<SeP>851<SeP>722<SeP>896<SeP>1091<SeP>969<SeP>929<SeP>1106<SeP>1333<SeP>1027<SeP>1193<SeP>1270<SeP>1210<SeP>1284<SeP>1331<SeP>1294<SeP>1539<SeP>1940<SeP>1426<SeP>1207<SeP>764<SeP>1115<SeP>896<SeP>1083<SeP>576<SeP>803<SeP>999<SeP>851<SeP>3459<SeP>4627<SeP>2172<SeP>1707<SeP>1165<SeP>828<SeP>1036<SeP>949<SeP>949<SeP>1061<SeP>1062<SeP>1004<SeP>1039<SeP>2234<SeP>1258<SeP>1153<SeP>1217<SeP>1341<SeP>1087<SeP>1093<SeP>986<SeP>1139<SeP>1105<SeP>1012<SeP>1163<SeP>1079<SeP>1131<SeP>914<SeP>991<SeP>1399<SeP>1122<SeP>1058<SeP>1336<SeP>1273<SeP>1166<SeP>1571<SeP>1265<SeP>1098<SeP>1110<SeP>1235<SeP>1968<SeP>1333<SeP>1974<SeP>1759<SeP>1468<SeP>1921<SeP>1536<SeP>1132<SeP>1181<SeP>1389<SeP>1119<SeP>1537<SeP>1273<SeP>1247<SeP>1718<SeP>1679<SeP>1379<SeP>1484<SeP>1460<SeP>1263<SeP>1014<SeP>1136<SeP>1392<SeP>1087<SeP>1254<SeP>1445<SeP>1076<SeP>1511<SeP>1841<SeP>1344<SeP>1369<SeP>1557<SeP>1393<SeP>1053<SeP>1012<SeP>992<SeP>971<SeP>886<SeP>1010<SeP>1777<SeP>1158<SeP>1064<SeP>1128<SeP>964<SeP>779<SeP>1163<SeP>1331<SeP>850<SeP>924<SeP>948<SeP>1313<SeP>1622<SeP>1468<SeP>1063<SeP>1153<SeP>989<SeP>1842<SeP>1095<SeP>1185<SeP>1040<SeP>1243<SeP>1319<SeP>1012<SeP>951<SeP>1278<SeP>1000<SeP>970<SeP>843<SeP>1116<SeP>1554<SeP>1443<SeP>1702<SeP>1365<SeP>1020<SeP>1110<SeP>1091<SeP>1144<SeP>1174<SeP>1136<SeP>1062<SeP>1072<SeP>1216<SeP>1430<SeP>1438<SeP>1564<SeP>1483<SeP>1300<SeP>1509<SeP>1450<SeP>1549<SeP>1344<SeP>1438<SeP>1243<SeP>1840<SeP>1247<SeP>1508<SeP>1632<SeP>1298<SeP>1485<SeP>1239<SeP>1293<SeP>1300<SeP>1506<SeP>1647<SeP>1340<SeP>1221<SeP>1315<SeP>1345<SeP>1315<SeP>1143<SeP>1557<SeP>1843<SeP>1732<SeP>1171<SeP>606<SeP>1493<SeP>1905<SeP>1247<SeP>1343<SeP>1209<SeP>1142<SeP>1483<SeP>1298<SeP>1322<SeP>1502<SeP>1801<SeP>1298<SeP>1616<SeP>1767<SeP>1297<SeP>1395<SeP>1525<SeP>1772<SeP>1618<SeP>973<SeP>1116<SeP>2060<SeP>1908<SeP>1658<SeP>1787<SeP>1755<SeP>1474<SeP>1632<SeP>1613<SeP>1663<SeP>1479<SeP>1752<SeP>1796<SeP>1627<SeP>1432<SeP>1503<SeP>1457<SeP>1493";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "155<SeP>614<SeP>1294<SeP>758<SeP>219<SeP>238<SeP>6991<SeP>557<SeP>9470<SeP>568<SeP>396<SeP>1132<SeP>1292<SeP>240<SeP>177<SeP>445<SeP>114<SeP>751<SeP>332<SeP>6997<SeP>7413<SeP>6593<SeP>8735<SeP>3791<SeP>254<SeP>353<SeP>267<SeP>386<SeP>5733<SeP>287<SeP>361<SeP>134<SeP>493<SeP>326<SeP>7456<SeP>10040<SeP>9722<SeP>10257<SeP>7033<SeP>5146<SeP>8871<SeP>7298<SeP>8865<SeP>8814<SeP>7809<SeP>8034<SeP>9086<SeP>8006<SeP>9221<SeP>5739<SeP>5841<SeP>12869<SeP>6787<SeP>7026<SeP>8385<SeP>10030<SeP>18491<SeP>16000<SeP>9298<SeP>10788<SeP>7565<SeP>7995<SeP>9006<SeP>8769<SeP>8503<SeP>7036<SeP>6614<SeP>6882<SeP>6847<SeP>4908<SeP>4646<SeP>6535<SeP>5516<SeP>6390<SeP>7536<SeP>5312<SeP>5455<SeP>5506<SeP>6978<SeP>4773<SeP>7088<SeP>4814<SeP>5903<SeP>6488<SeP>5953<SeP>5740<SeP>5441<SeP>14408<SeP>17597<SeP>36173<SeP>6965<SeP>9215<SeP>5304<SeP>6945<SeP>12582<SeP>6218<SeP>6268<SeP>3937<SeP>4810<SeP>6026<SeP>5212<SeP>8995<SeP>5376<SeP>6722<SeP>5101<SeP>5370<SeP>8639<SeP>8209<SeP>7544<SeP>6152<SeP>4096<SeP>10737<SeP>9242<SeP>5511<SeP>3228<SeP>6363<SeP>9047<SeP>5643<SeP>6771<SeP>9666<SeP>4693<SeP>2178<SeP>1570<SeP>1976<SeP>1794<SeP>2277<SeP>1087<SeP>1417<SeP>495<SeP>1422<SeP>1523<SeP>1188<SeP>872<SeP>1081<SeP>1062<SeP>782<SeP>1438<SeP>1510<SeP>1176<SeP>1315<SeP>2316<SeP>1464<SeP>9085<SeP>7900<SeP>10464<SeP>8402<SeP>6071<SeP>11091<SeP>7640<SeP>8345<SeP>9684<SeP>10523<SeP>11426<SeP>7819<SeP>12821<SeP>14229<SeP>7096<SeP>10393<SeP>4891<SeP>5806<SeP>7957<SeP>24380<SeP>6330<SeP>8812<SeP>10589<SeP>17245<SeP>6899<SeP>6427<SeP>6677<SeP>7298<SeP>25123<SeP>8647<SeP>8361<SeP>11675<SeP>4654<SeP>7051<SeP>4576<SeP>16979<SeP>5436<SeP>12132<SeP>8399<SeP>6624<SeP>8321<SeP>7595<SeP>4079<SeP>5471<SeP>5767<SeP>7799<SeP>6081<SeP>6362<SeP>7346<SeP>18683<SeP>6913<SeP>8664<SeP>5564<SeP>7413<SeP>9336<SeP>8464<SeP>5834<SeP>2909<SeP>7645<SeP>2772<SeP>5293<SeP>4102<SeP>663<SeP>123<SeP>637<SeP>195<SeP>603<SeP>1065<SeP>362<SeP>594<SeP>1028<SeP>1375<SeP>3195<SeP>21750<SeP>1746<SeP>2659<SeP>3716<SeP>3637<SeP>2993<SeP>7175<SeP>4390<SeP>2136<SeP>3888<SeP>2957<SeP>3049<SeP>3902<SeP>3327<SeP>2361<SeP>3556<SeP>2052<SeP>2031<SeP>1750<SeP>1555<SeP>962<SeP>1695<SeP>955<SeP>1631<SeP>1744<SeP>26491<SeP>1806<SeP>4124<SeP>3774<SeP>1921<SeP>4309<SeP>2064<SeP>2266<SeP>3447<SeP>2864<SeP>3419<SeP>2108<SeP>3825<SeP>2835<SeP>5848<SeP>5789<SeP>3958<SeP>3761<SeP>2575<SeP>3279<SeP>4305<SeP>4476<SeP>9937<SeP>5147<SeP>2485<SeP>3266<SeP>2396<SeP>4365<SeP>3794<SeP>3782<SeP>2651<SeP>3436<SeP>5276<SeP>3920<SeP>5787<SeP>4246<SeP>6724<SeP>4827<SeP>5239<SeP>4735<SeP>22104<SeP>5906<SeP>10841<SeP>1740<SeP>2953<SeP>4379<SeP>3666<SeP>5185<SeP>3499<SeP>4793<SeP>4577<SeP>4827<SeP>3101<SeP>4246<SeP>1971<SeP>1493<SeP>2103<SeP>3981<SeP>2272<SeP>3039<SeP>3476<SeP>4728<SeP>3582<SeP>3404<SeP>4300<SeP>3374<SeP>3259<SeP>6122<SeP>7875<SeP>6148<SeP>4589<SeP>4998<SeP>4368<SeP>3832<SeP>4029<SeP>3955<SeP>6984<SeP>5180<SeP>4413<SeP>3100<SeP>1144<SeP>1144<SeP>1749<SeP>1297<SeP>1235<SeP>1695<SeP>1569<SeP>1428<SeP>3355<SeP>4619<SeP>6391<SeP>34397<SeP>5060<SeP>4430<SeP>21080<SeP>8359<SeP>5220<SeP>6081<SeP>4606<SeP>24519<SeP>4837<SeP>5106<SeP>5137<SeP>5441<SeP>6621<SeP>28851<SeP>4801<SeP>3630<SeP>4331<SeP>4472<SeP>6007<SeP>4180<SeP>3085<SeP>3249<SeP>4549<SeP>5750<SeP>4264<SeP>17946<SeP>5640<SeP>6660<SeP>4894<SeP>1559<SeP>3831<SeP>4851<SeP>3699<SeP>4198<SeP>2779<SeP>3850<SeP>2582<SeP>4130<SeP>3953<SeP>7579<SeP>10059<SeP>8800<SeP>8454<SeP>9355<SeP>7515<SeP>6008<SeP>5197<SeP>4577<SeP>20720<SeP>8429<SeP>3310<SeP>4652<SeP>3232<SeP>11469<SeP>5724<SeP>3658<SeP>4944<SeP>4321<SeP>2760<SeP>9470<SeP>9978<SeP>4378<SeP>3065<SeP>3408<SeP>2264<SeP>2554<SeP>2512<SeP>2011";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:20:33<SeP>2023-07-28 22:41:06<SeP>2023-07-30 10:01:39<SeP>2023-07-31 21:22:12<SeP>2023-08-02 08:42:45<SeP>2023-08-03 20:03:18<SeP>2023-08-05 07:23:51<SeP>2023-08-06 18:44:24<SeP>2023-08-08 06:04:57<SeP>2023-08-09 17:25:30<SeP>2023-08-11 04:46:03<SeP>2023-08-12 16:06:36<SeP>2023-08-14 03:27:09<SeP>2023-08-15 14:47:42<SeP>2023-08-17 02:08:15<SeP>2023-08-18 13:28:48<SeP>2023-08-20 00:49:21<SeP>2023-08-21 12:09:54<SeP>2023-08-22 23:30:27<SeP>2023-08-24 10:51:00<SeP>2023-08-25 22:11:33<SeP>2023-08-27 09:32:06<SeP>2023-08-28 20:52:39<SeP>2023-08-30 08:13:12<SeP>2023-08-31 19:33:45<SeP>2023-09-02 06:54:18<SeP>2023-09-03 18:14:51<SeP>2023-09-05 05:35:24<SeP>2023-09-06 16:55:57<SeP>2023-09-08 04:16:30<SeP>2023-09-09 15:37:03<SeP>2023-09-11 02:57:36<SeP>2023-09-12 14:18:09<SeP>2023-09-14 01:38:42<SeP>2023-09-15 12:59:15<SeP>2023-09-17 00:19:48<SeP>2023-09-18 11:40:21<SeP>2023-09-19 23:00:54<SeP>2023-09-21 10:21:27<SeP>2023-09-22 21:42:00<SeP>2023-09-24 09:02:33<SeP>2023-09-25 20:23:06<SeP>2023-09-27 07:43:39<SeP>2023-09-28 19:04:12<SeP>2023-09-30 06:24:45<SeP>2023-10-01 17:45:18<SeP>2023-10-03 05:05:51<SeP>2023-10-04 16:26:24<SeP>2023-10-06 03:46:57<SeP>2023-10-07 15:07:30<SeP>2023-10-09 02:28:03<SeP>2023-10-10 13:48:36<SeP>2023-10-12 01:09:09<SeP>2023-10-13 12:29:42<SeP>2023-10-14 23:50:15<SeP>2023-10-16 11:10:48<SeP>2023-10-17 22:31:21<SeP>2023-10-19 09:51:54<SeP>2023-10-20 21:12:27<SeP>2023-10-22 08:33:00<SeP>2023-10-23 19:53:33<SeP>2023-10-25 07:14:06<SeP>2023-10-26 18:34:39<SeP>2023-10-28 05:55:12<SeP>2023-10-29 17:15:45<SeP>2023-10-31 04:36:18<SeP>2023-11-01 15:56:51<SeP>2023-11-03 03:17:24<SeP>2023-11-04 14:37:57<SeP>2023-11-06 00:58:30<SeP>2023-11-07 12:19:03<SeP>2023-11-08 23:39:36<SeP>2023-11-10 11:00:09<SeP>2023-11-11 22:20:42<SeP>2023-11-13 09:41:15<SeP>2023-11-14 21:01:48<SeP>2023-11-16 08:22:21<SeP>2023-11-17 19:42:54<SeP>2023-11-19 07:03:27<SeP>2023-11-20 18:24:00<SeP>2023-11-22 05:44:33<SeP>2023-11-23 17:05:06<SeP>2023-11-25 04:25:39<SeP>2023-11-26 15:46:12<SeP>2023-11-28 03:06:45<SeP>2023-11-29 14:27:18<SeP>2023-12-01 01:47:51<SeP>2023-12-02 13:08:24<SeP>2023-12-04 00:28:57<SeP>2023-12-05 11:49:30<SeP>2023-12-06 23:10:03<SeP>2023-12-08 10:30:36<SeP>2023-12-09 21:51:09<SeP>2023-12-11 09:11:42<SeP>2023-12-12 20:32:15<SeP>2023-12-14 07:52:48<SeP>2023-12-15 19:13:21<SeP>2023-12-17 06:33:54<SeP>2023-12-18 17:54:27<SeP>2023-12-20 05:15:00<SeP>2023-12-21 16:35:33<SeP>2023-12-23 03:56:06<SeP>2023-12-24 15:16:39<SeP>2023-12-26 02:37:12<SeP>2023-12-27 13:57:45<SeP>2023-12-29 01:18:18<SeP>2023-12-30 12:38:51<SeP>2023-12-31 23:59:24<SeP>2024-01-02 11:19:57<SeP>2024-01-03 22:40:30<SeP>2024-01-05 10:01:03<SeP>2024-01-06 21:21:36<SeP>2024-01-08 08:42:09<SeP>2024-01-09 20:02:42<SeP>2024-01-11 07:23:15<SeP>2024-01-12 18:43:48<SeP>2024-01-14 06:04:21<SeP>2024-01-15 17:24:54<SeP>2024-01-17 04:45:27<SeP>2024-01-18 16:06:00<SeP>2024-01-20 03:26:33<SeP>2024-01-21 14:47:06<SeP>2024-01-23 02:07:39<SeP>2024-01-24 13:28:12<SeP>2024-01-26 00:48:45<SeP>2024-01-27 12:09:18<SeP>2024-01-28 23:29:51<SeP>2024-01-30 10:50:24<SeP>2024-01-31 22:10:57<SeP>2024-02-02 09:31:30<SeP>2024-02-03 20:52:03<SeP>2024-02-05 08:12:36<SeP>2024-02-06 19:33:09<SeP>2024-02-08 06:53:42<SeP>2024-02-09 18:14:15<SeP>2024-02-11 05:34:48<SeP>2024-02-12 16:55:21<SeP>2024-02-14 04:15:54<SeP>2024-02-15 15:36:27<SeP>2024-02-17 02:57:00<SeP>2024-02-18 14:17:33<SeP>2024-02-20 01:38:06<SeP>2024-02-21 12:58:39<SeP>2024-02-23 00:19:12<SeP>2024-02-24 11:39:45<SeP>2024-02-25 23:00:18<SeP>2024-02-27 10:20:51<SeP>2024-02-28 21:41:24<SeP>2024-03-01 09:01:57<SeP>2024-03-02 20:22:30<SeP>2024-03-04 07:43:03<SeP>2024-03-05 19:03:36<SeP>2024-03-07 06:24:09<SeP>2024-03-08 17:44:42<SeP>2024-03-10 06:05:15<SeP>2024-03-11 17:25:48<SeP>2024-03-13 04:46:21<SeP>2024-03-14 16:06:54<SeP>2024-03-16 03:27:27<SeP>2024-03-17 14:48:00<SeP>2024-03-19 02:08:33<SeP>2024-03-20 13:29:06<SeP>2024-03-22 00:49:39<SeP>2024-03-23 12:10:12<SeP>2024-03-24 23:30:45<SeP>2024-03-26 10:51:18<SeP>2024-03-27 22:11:51<SeP>2024-03-29 09:32:24<SeP>2024-03-30 20:52:57<SeP>2024-04-01 08:13:30<SeP>2024-04-02 19:34:03<SeP>2024-04-04 06:54:36<SeP>2024-04-05 18:15:09<SeP>2024-04-07 05:35:42<SeP>2024-04-08 16:56:15<SeP>2024-04-10 04:16:48<SeP>2024-04-11 15:37:21<SeP>2024-04-13 02:57:54<SeP>2024-04-14 14:18:27<SeP>2024-04-16 01:39:00<SeP>2024-04-17 12:59:33<SeP>2024-04-19 00:20:06<SeP>2024-04-20 11:40:39<SeP>2024-04-21 23:01:12<SeP>2024-04-23 10:21:45<SeP>2024-04-24 21:42:18<SeP>2024-04-26 09:02:51<SeP>2024-04-27 20:23:24<SeP>2024-04-29 07:43:57<SeP>2024-04-30 19:04:30<SeP>2024-05-02 06:25:03<SeP>2024-05-03 17:45:36<SeP>2024-05-05 05:06:09<SeP>2024-05-06 16:26:42<SeP>2024-05-08 03:47:15<SeP>2024-05-09 15:07:48<SeP>2024-05-11 02:28:21<SeP>2024-05-12 13:48:54<SeP>2024-05-14 01:09:27<SeP>2024-05-15 12:30:00<SeP>2024-05-16 23:50:33<SeP>2024-05-18 11:11:06<SeP>2024-05-19 22:31:39<SeP>2024-05-21 09:52:12<SeP>2024-05-22 21:12:45<SeP>2024-05-24 08:33:18<SeP>2024-05-25 19:53:51<SeP>2024-05-27 07:14:24<SeP>2024-05-28 18:34:57<SeP>2024-05-30 05:55:30<SeP>2024-05-31 17:16:03<SeP>2024-06-02 04:36:36<SeP>2024-06-03 15:57:09<SeP>2024-06-05 03:17:42<SeP>2024-06-06 14:38:15<SeP>2024-06-08 01:58:48<SeP>2024-06-09 13:19:21<SeP>2024-06-11 00:39:54<SeP>2024-06-12 12:00:27<SeP>2024-06-13 23:21:00<SeP>2024-06-15 10:41:33<SeP>2024-06-16 22:02:06<SeP>2024-06-18 09:22:39<SeP>2024-06-19 20:43:12<SeP>2024-06-21 08:03:45<SeP>2024-06-22 19:24:18<SeP>2024-06-24 06:44:51<SeP>2024-06-25 18:05:24<SeP>2024-06-27 05:25:57<SeP>2024-06-28 16:46:30<SeP>2024-06-30 04:07:03<SeP>2024-07-01 15:27:36<SeP>2024-07-03 02:48:09<SeP>2024-07-04 14:08:42<SeP>2024-07-06 01:29:15<SeP>2024-07-07 12:49:48<SeP>2024-07-09 00:10:21<SeP>2024-07-10 11:30:54<SeP>2024-07-11 22:51:27<SeP>2024-07-13 10:12:00<SeP>2024-07-14 21:32:33<SeP>2024-07-16 08:53:06<SeP>2024-07-17 20:13:39<SeP>2024-07-19 07:34:12<SeP>2024-07-20 18:54:45<SeP>2024-07-22 06:15:18<SeP>2024-07-23 17:35:51<SeP>2024-07-25 04:56:24<SeP>2024-07-26 16:16:57<SeP>2024-07-28 03:37:30<SeP>2024-07-29 14:58:03<SeP>2024-07-31 02:18:36<SeP>2024-08-01 13:39:09<SeP>2024-08-03 00:59:42<SeP>2024-08-04 12:20:15<SeP>2024-08-05 23:40:48<SeP>2024-08-07 11:01:21<SeP>2024-08-08 22:21:54<SeP>2024-08-10 09:42:27<SeP>2024-08-11 21:03:00<SeP>2024-08-13 08:23:33<SeP>2024-08-14 19:44:06<SeP>2024-08-16 07:04:39<SeP>2024-08-17 18:25:12<SeP>2024-08-19 05:45:45<SeP>2024-08-20 17:06:18<SeP>2024-08-22 04:26:51<SeP>2024-08-23 15:47:24<SeP>2024-08-25 03:07:57<SeP>2024-08-26 14:28:30<SeP>2024-08-28 01:49:03<SeP>2024-08-29 13:09:36<SeP>2024-08-31 00:30:09<SeP>2024-09-01 11:50:42<SeP>2024-09-02 23:11:15<SeP>2024-09-04 10:31:48<SeP>2024-09-05 21:52:21<SeP>2024-09-07 09:12:54<SeP>2024-09-08 20:33:27<SeP>2024-09-10 07:54:00<SeP>2024-09-11 19:14:33<SeP>2024-09-13 06:35:06<SeP>2024-09-14 17:55:39<SeP>2024-09-16 05:16:12<SeP>2024-09-17 16:36:45<SeP>2024-09-19 03:57:18<SeP>2024-09-20 15:17:51<SeP>2024-09-22 02:38:24<SeP>2024-09-23 13:58:57<SeP>2024-09-25 01:19:30<SeP>2024-09-26 12:40:03<SeP>2024-09-28 00:00:36<SeP>2024-09-29 11:21:09<SeP>2024-09-30 22:41:42<SeP>2024-10-02 10:02:15<SeP>2024-10-03 21:22:48<SeP>2024-10-05 08:43:21<SeP>2024-10-06 20:03:54<SeP>2024-10-08 07:24:27<SeP>2024-10-09 18:45:00<SeP>2024-10-11 06:05:33<SeP>2024-10-12 17:26:06<SeP>2024-10-14 04:46:39<SeP>2024-10-15 16:07:12<SeP>2024-10-17 03:27:45<SeP>2024-10-18 14:48:18<SeP>2024-10-20 02:08:51<SeP>2024-10-21 13:29:24<SeP>2024-10-23 00:49:57<SeP>2024-10-24 12:10:30<SeP>2024-10-25 23:31:03<SeP>2024-10-27 10:51:36<SeP>2024-10-28 22:12:09<SeP>2024-10-30 09:32:42<SeP>2024-10-31 20:53:15<SeP>2024-11-02 08:13:48<SeP>2024-11-03 18:34:21<SeP>2024-11-05 05:54:54<SeP>2024-11-06 17:15:27<SeP>2024-11-08 04:36:00<SeP>2024-11-09 15:56:33<SeP>2024-11-11 03:17:06<SeP>2024-11-12 14:37:39<SeP>2024-11-14 01:58:12<SeP>2024-11-15 13:18:45<SeP>2024-11-17 00:39:18<SeP>2024-11-18 11:59:51<SeP>2024-11-19 23:20:24<SeP>2024-11-21 10:40:57<SeP>2024-11-22 22:01:30<SeP>2024-11-24 09:22:03<SeP>2024-11-25 20:42:36<SeP>2024-11-27 08:03:09<SeP>2024-11-28 19:23:42<SeP>2024-11-30 06:44:15<SeP>2024-12-01 18:04:48<SeP>2024-12-03 05:25:21<SeP>2024-12-04 16:45:54<SeP>2024-12-06 04:06:27<SeP>2024-12-07 15:27:00<SeP>2024-12-09 02:47:33<SeP>2024-12-10 14:08:06<SeP>2024-12-12 01:28:39<SeP>2024-12-13 12:49:12<SeP>2024-12-15 00:09:45<SeP>2024-12-16 11:30:18<SeP>2024-12-17 22:50:51<SeP>2024-12-19 10:11:24<SeP>2024-12-20 21:31:57<SeP>2024-12-22 08:52:30<SeP>2024-12-23 20:13:03<SeP>2024-12-25 07:33:36<SeP>2024-12-26 18:54:09<SeP>2024-12-28 06:14:42<SeP>2024-12-29 17:35:15<SeP>2024-12-31 04:55:48<SeP>2025-01-01 16:16:21<SeP>2025-01-03 03:36:54<SeP>2025-01-04 14:57:27<SeP>2025-01-06 02:18:00<SeP>2025-01-07 13:38:33<SeP>2025-01-09 00:59:06<SeP>2025-01-10 12:19:39<SeP>2025-01-11 23:40:12<SeP>2025-01-13 11:00:45<SeP>2025-01-14 22:21:18<SeP>2025-01-16 09:41:51<SeP>2025-01-17 21:02:24<SeP>2025-01-19 08:22:57<SeP>2025-01-20 19:43:30<SeP>2025-01-22 07:04:03<SeP>2025-01-23 18:24:36<SeP>2025-01-25 05:45:09<SeP>2025-01-26 17:05:42<SeP>2025-01-28 04:26:15<SeP>2025-01-29 15:46:48<SeP>2025-01-31 03:07:21<SeP>2025-02-01 14:27:54<SeP>2025-02-03 01:48:27<SeP>2025-02-04 13:09:00<SeP>2025-02-06 00:29:33<SeP>2025-02-07 11:50:06<SeP>2025-02-08 23:10:39<SeP>2025-02-10 10:31:12<SeP>2025-02-11 21:51:45<SeP>2025-02-13 09:12:18<SeP>2025-02-14 20:32:51<SeP>2025-02-16 07:53:24<SeP>2025-02-17 19:13:57<SeP>2025-02-19 06:34:30<SeP>2025-02-20 17:55:03<SeP>2025-02-22 05:15:36<SeP>2025-02-23 16:36:09<SeP>2025-02-25 03:56:42<SeP>2025-02-26 15:17:15<SeP>2025-02-28 02:37:48<SeP>2025-03-01 13:58:21<SeP>2025-03-03 01:18:54<SeP>2025-03-04 12:39:27";
  const itemLabel       = "Scans";
  const itemData        = "771<SeP>1514<SeP>1366<SeP>1486<SeP>1228<SeP>1745<SeP>938<SeP>964<SeP>1167<SeP>3409<SeP>2810<SeP>1596<SeP>3285<SeP>909<SeP>760<SeP>911<SeP>1413<SeP>2915<SeP>1816<SeP>1175<SeP>1244<SeP>945<SeP>1028<SeP>1271<SeP>888<SeP>862<SeP>813<SeP>3796<SeP>711<SeP>978<SeP>988<SeP>1658<SeP>897<SeP>823<SeP>3167<SeP>2660<SeP>1934<SeP>1669<SeP>1814<SeP>1224<SeP>1600<SeP>1900<SeP>1996<SeP>1783<SeP>1672<SeP>1596<SeP>1725<SeP>1685<SeP>1768<SeP>1724<SeP>1823<SeP>1766<SeP>1757<SeP>3098<SeP>1323<SeP>1961<SeP>1823<SeP>2396<SeP>1548<SeP>2041<SeP>3259<SeP>1471<SeP>1465<SeP>1524<SeP>1510<SeP>1860<SeP>1585<SeP>1258<SeP>1439<SeP>1186<SeP>2383<SeP>1211<SeP>1159<SeP>1262<SeP>2408<SeP>7159<SeP>1187<SeP>1313<SeP>1440<SeP>2275<SeP>1289<SeP>1381<SeP>6486<SeP>1451<SeP>1612<SeP>978<SeP>3014<SeP>1591<SeP>1015<SeP>1132<SeP>1053<SeP>1052<SeP>3121<SeP>914<SeP>1078<SeP>2093<SeP>4526<SeP>4676<SeP>919<SeP>949<SeP>968<SeP>961<SeP>1036<SeP>811<SeP>1174<SeP>2896<SeP>2976<SeP>1574<SeP>1687<SeP>745<SeP>786<SeP>1399<SeP>1283<SeP>1092<SeP>1029<SeP>2257<SeP>1123<SeP>1129<SeP>1084<SeP>1052<SeP>952<SeP>815<SeP>857<SeP>843<SeP>793<SeP>1154<SeP>853<SeP>871<SeP>820<SeP>859<SeP>874<SeP>697<SeP>861<SeP>899<SeP>915<SeP>867<SeP>733<SeP>986<SeP>689<SeP>771<SeP>1135<SeP>730<SeP>942<SeP>973<SeP>876<SeP>1142<SeP>975<SeP>745<SeP>547<SeP>950<SeP>843<SeP>1300<SeP>879<SeP>1047<SeP>1215<SeP>1239<SeP>916<SeP>852<SeP>957<SeP>933<SeP>865<SeP>1056<SeP>862<SeP>983<SeP>897<SeP>1089<SeP>919<SeP>1122<SeP>984<SeP>1042<SeP>1105<SeP>896<SeP>918<SeP>2206<SeP>1225<SeP>1140<SeP>1081<SeP>1047<SeP>1141<SeP>937<SeP>851<SeP>722<SeP>896<SeP>1091<SeP>969<SeP>929<SeP>1106<SeP>1333<SeP>1027<SeP>1193<SeP>1270<SeP>1210<SeP>1284<SeP>1331<SeP>1294<SeP>1539<SeP>1940<SeP>1426<SeP>1207<SeP>764<SeP>1115<SeP>896<SeP>1083<SeP>576<SeP>803<SeP>999<SeP>851<SeP>3459<SeP>4627<SeP>2172<SeP>1707<SeP>1165<SeP>828<SeP>1036<SeP>949<SeP>949<SeP>1061<SeP>1062<SeP>1004<SeP>1039<SeP>2234<SeP>1258<SeP>1153<SeP>1217<SeP>1341<SeP>1087<SeP>1093<SeP>986<SeP>1139<SeP>1105<SeP>1012<SeP>1163<SeP>1079<SeP>1131<SeP>914<SeP>991<SeP>1399<SeP>1122<SeP>1058<SeP>1336<SeP>1273<SeP>1166<SeP>1571<SeP>1265<SeP>1098<SeP>1110<SeP>1235<SeP>1968<SeP>1333<SeP>1974<SeP>1759<SeP>1468<SeP>1921<SeP>1536<SeP>1132<SeP>1181<SeP>1389<SeP>1119<SeP>1537<SeP>1273<SeP>1247<SeP>1718<SeP>1679<SeP>1379<SeP>1484<SeP>1460<SeP>1263<SeP>1014<SeP>1136<SeP>1392<SeP>1087<SeP>1254<SeP>1445<SeP>1076<SeP>1511<SeP>1841<SeP>1344<SeP>1369<SeP>1557<SeP>1393<SeP>1053<SeP>1012<SeP>992<SeP>971<SeP>886<SeP>1010<SeP>1777<SeP>1158<SeP>1064<SeP>1128<SeP>964<SeP>779<SeP>1163<SeP>1331<SeP>850<SeP>924<SeP>948<SeP>1313<SeP>1622<SeP>1468<SeP>1063<SeP>1153<SeP>989<SeP>1842<SeP>1095<SeP>1185<SeP>1040<SeP>1243<SeP>1319<SeP>1012<SeP>951<SeP>1278<SeP>1000<SeP>970<SeP>843<SeP>1116<SeP>1554<SeP>1443<SeP>1702<SeP>1365<SeP>1020<SeP>1110<SeP>1091<SeP>1144<SeP>1174<SeP>1136<SeP>1062<SeP>1072<SeP>1216<SeP>1430<SeP>1438<SeP>1564<SeP>1483<SeP>1300<SeP>1509<SeP>1450<SeP>1549<SeP>1344<SeP>1438<SeP>1243<SeP>1840<SeP>1247<SeP>1508<SeP>1632<SeP>1298<SeP>1485<SeP>1239<SeP>1293<SeP>1300<SeP>1506<SeP>1647<SeP>1340<SeP>1221<SeP>1315<SeP>1345<SeP>1315<SeP>1143<SeP>1557<SeP>1843<SeP>1732<SeP>1171<SeP>606<SeP>1493<SeP>1905<SeP>1247<SeP>1343<SeP>1209<SeP>1142<SeP>1483<SeP>1298<SeP>1322<SeP>1502<SeP>1801<SeP>1298<SeP>1616<SeP>1767<SeP>1297<SeP>1395<SeP>1525<SeP>1772<SeP>1618<SeP>973<SeP>1116<SeP>2060<SeP>1908<SeP>1658<SeP>1787<SeP>1755<SeP>1474<SeP>1632<SeP>1613<SeP>1663<SeP>1479<SeP>1752<SeP>1796<SeP>1627<SeP>1432<SeP>1503<SeP>1457<SeP>1493";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:20:33<SeP>2023-07-28 22:41:06<SeP>2023-07-30 10:01:39<SeP>2023-07-31 21:22:12<SeP>2023-08-02 08:42:45<SeP>2023-08-03 20:03:18<SeP>2023-08-05 07:23:51<SeP>2023-08-06 18:44:24<SeP>2023-08-08 06:04:57<SeP>2023-08-09 17:25:30<SeP>2023-08-11 04:46:03<SeP>2023-08-12 16:06:36<SeP>2023-08-14 03:27:09<SeP>2023-08-15 14:47:42<SeP>2023-08-17 02:08:15<SeP>2023-08-18 13:28:48<SeP>2023-08-20 00:49:21<SeP>2023-08-21 12:09:54<SeP>2023-08-22 23:30:27<SeP>2023-08-24 10:51:00<SeP>2023-08-25 22:11:33<SeP>2023-08-27 09:32:06<SeP>2023-08-28 20:52:39<SeP>2023-08-30 08:13:12<SeP>2023-08-31 19:33:45<SeP>2023-09-02 06:54:18<SeP>2023-09-03 18:14:51<SeP>2023-09-05 05:35:24<SeP>2023-09-06 16:55:57<SeP>2023-09-08 04:16:30<SeP>2023-09-09 15:37:03<SeP>2023-09-11 02:57:36<SeP>2023-09-12 14:18:09<SeP>2023-09-14 01:38:42<SeP>2023-09-15 12:59:15<SeP>2023-09-17 00:19:48<SeP>2023-09-18 11:40:21<SeP>2023-09-19 23:00:54<SeP>2023-09-21 10:21:27<SeP>2023-09-22 21:42:00<SeP>2023-09-24 09:02:33<SeP>2023-09-25 20:23:06<SeP>2023-09-27 07:43:39<SeP>2023-09-28 19:04:12<SeP>2023-09-30 06:24:45<SeP>2023-10-01 17:45:18<SeP>2023-10-03 05:05:51<SeP>2023-10-04 16:26:24<SeP>2023-10-06 03:46:57<SeP>2023-10-07 15:07:30<SeP>2023-10-09 02:28:03<SeP>2023-10-10 13:48:36<SeP>2023-10-12 01:09:09<SeP>2023-10-13 12:29:42<SeP>2023-10-14 23:50:15<SeP>2023-10-16 11:10:48<SeP>2023-10-17 22:31:21<SeP>2023-10-19 09:51:54<SeP>2023-10-20 21:12:27<SeP>2023-10-22 08:33:00<SeP>2023-10-23 19:53:33<SeP>2023-10-25 07:14:06<SeP>2023-10-26 18:34:39<SeP>2023-10-28 05:55:12<SeP>2023-10-29 17:15:45<SeP>2023-10-31 04:36:18<SeP>2023-11-01 15:56:51<SeP>2023-11-03 03:17:24<SeP>2023-11-04 14:37:57<SeP>2023-11-06 00:58:30<SeP>2023-11-07 12:19:03<SeP>2023-11-08 23:39:36<SeP>2023-11-10 11:00:09<SeP>2023-11-11 22:20:42<SeP>2023-11-13 09:41:15<SeP>2023-11-14 21:01:48<SeP>2023-11-16 08:22:21<SeP>2023-11-17 19:42:54<SeP>2023-11-19 07:03:27<SeP>2023-11-20 18:24:00<SeP>2023-11-22 05:44:33<SeP>2023-11-23 17:05:06<SeP>2023-11-25 04:25:39<SeP>2023-11-26 15:46:12<SeP>2023-11-28 03:06:45<SeP>2023-11-29 14:27:18<SeP>2023-12-01 01:47:51<SeP>2023-12-02 13:08:24<SeP>2023-12-04 00:28:57<SeP>2023-12-05 11:49:30<SeP>2023-12-06 23:10:03<SeP>2023-12-08 10:30:36<SeP>2023-12-09 21:51:09<SeP>2023-12-11 09:11:42<SeP>2023-12-12 20:32:15<SeP>2023-12-14 07:52:48<SeP>2023-12-15 19:13:21<SeP>2023-12-17 06:33:54<SeP>2023-12-18 17:54:27<SeP>2023-12-20 05:15:00<SeP>2023-12-21 16:35:33<SeP>2023-12-23 03:56:06<SeP>2023-12-24 15:16:39<SeP>2023-12-26 02:37:12<SeP>2023-12-27 13:57:45<SeP>2023-12-29 01:18:18<SeP>2023-12-30 12:38:51<SeP>2023-12-31 23:59:24<SeP>2024-01-02 11:19:57<SeP>2024-01-03 22:40:30<SeP>2024-01-05 10:01:03<SeP>2024-01-06 21:21:36<SeP>2024-01-08 08:42:09<SeP>2024-01-09 20:02:42<SeP>2024-01-11 07:23:15<SeP>2024-01-12 18:43:48<SeP>2024-01-14 06:04:21<SeP>2024-01-15 17:24:54<SeP>2024-01-17 04:45:27<SeP>2024-01-18 16:06:00<SeP>2024-01-20 03:26:33<SeP>2024-01-21 14:47:06<SeP>2024-01-23 02:07:39<SeP>2024-01-24 13:28:12<SeP>2024-01-26 00:48:45<SeP>2024-01-27 12:09:18<SeP>2024-01-28 23:29:51<SeP>2024-01-30 10:50:24<SeP>2024-01-31 22:10:57<SeP>2024-02-02 09:31:30<SeP>2024-02-03 20:52:03<SeP>2024-02-05 08:12:36<SeP>2024-02-06 19:33:09<SeP>2024-02-08 06:53:42<SeP>2024-02-09 18:14:15<SeP>2024-02-11 05:34:48<SeP>2024-02-12 16:55:21<SeP>2024-02-14 04:15:54<SeP>2024-02-15 15:36:27<SeP>2024-02-17 02:57:00<SeP>2024-02-18 14:17:33<SeP>2024-02-20 01:38:06<SeP>2024-02-21 12:58:39<SeP>2024-02-23 00:19:12<SeP>2024-02-24 11:39:45<SeP>2024-02-25 23:00:18<SeP>2024-02-27 10:20:51<SeP>2024-02-28 21:41:24<SeP>2024-03-01 09:01:57<SeP>2024-03-02 20:22:30<SeP>2024-03-04 07:43:03<SeP>2024-03-05 19:03:36<SeP>2024-03-07 06:24:09<SeP>2024-03-08 17:44:42<SeP>2024-03-10 06:05:15<SeP>2024-03-11 17:25:48<SeP>2024-03-13 04:46:21<SeP>2024-03-14 16:06:54<SeP>2024-03-16 03:27:27<SeP>2024-03-17 14:48:00<SeP>2024-03-19 02:08:33<SeP>2024-03-20 13:29:06<SeP>2024-03-22 00:49:39<SeP>2024-03-23 12:10:12<SeP>2024-03-24 23:30:45<SeP>2024-03-26 10:51:18<SeP>2024-03-27 22:11:51<SeP>2024-03-29 09:32:24<SeP>2024-03-30 20:52:57<SeP>2024-04-01 08:13:30<SeP>2024-04-02 19:34:03<SeP>2024-04-04 06:54:36<SeP>2024-04-05 18:15:09<SeP>2024-04-07 05:35:42<SeP>2024-04-08 16:56:15<SeP>2024-04-10 04:16:48<SeP>2024-04-11 15:37:21<SeP>2024-04-13 02:57:54<SeP>2024-04-14 14:18:27<SeP>2024-04-16 01:39:00<SeP>2024-04-17 12:59:33<SeP>2024-04-19 00:20:06<SeP>2024-04-20 11:40:39<SeP>2024-04-21 23:01:12<SeP>2024-04-23 10:21:45<SeP>2024-04-24 21:42:18<SeP>2024-04-26 09:02:51<SeP>2024-04-27 20:23:24<SeP>2024-04-29 07:43:57<SeP>2024-04-30 19:04:30<SeP>2024-05-02 06:25:03<SeP>2024-05-03 17:45:36<SeP>2024-05-05 05:06:09<SeP>2024-05-06 16:26:42<SeP>2024-05-08 03:47:15<SeP>2024-05-09 15:07:48<SeP>2024-05-11 02:28:21<SeP>2024-05-12 13:48:54<SeP>2024-05-14 01:09:27<SeP>2024-05-15 12:30:00<SeP>2024-05-16 23:50:33<SeP>2024-05-18 11:11:06<SeP>2024-05-19 22:31:39<SeP>2024-05-21 09:52:12<SeP>2024-05-22 21:12:45<SeP>2024-05-24 08:33:18<SeP>2024-05-25 19:53:51<SeP>2024-05-27 07:14:24<SeP>2024-05-28 18:34:57<SeP>2024-05-30 05:55:30<SeP>2024-05-31 17:16:03<SeP>2024-06-02 04:36:36<SeP>2024-06-03 15:57:09<SeP>2024-06-05 03:17:42<SeP>2024-06-06 14:38:15<SeP>2024-06-08 01:58:48<SeP>2024-06-09 13:19:21<SeP>2024-06-11 00:39:54<SeP>2024-06-12 12:00:27<SeP>2024-06-13 23:21:00<SeP>2024-06-15 10:41:33<SeP>2024-06-16 22:02:06<SeP>2024-06-18 09:22:39<SeP>2024-06-19 20:43:12<SeP>2024-06-21 08:03:45<SeP>2024-06-22 19:24:18<SeP>2024-06-24 06:44:51<SeP>2024-06-25 18:05:24<SeP>2024-06-27 05:25:57<SeP>2024-06-28 16:46:30<SeP>2024-06-30 04:07:03<SeP>2024-07-01 15:27:36<SeP>2024-07-03 02:48:09<SeP>2024-07-04 14:08:42<SeP>2024-07-06 01:29:15<SeP>2024-07-07 12:49:48<SeP>2024-07-09 00:10:21<SeP>2024-07-10 11:30:54<SeP>2024-07-11 22:51:27<SeP>2024-07-13 10:12:00<SeP>2024-07-14 21:32:33<SeP>2024-07-16 08:53:06<SeP>2024-07-17 20:13:39<SeP>2024-07-19 07:34:12<SeP>2024-07-20 18:54:45<SeP>2024-07-22 06:15:18<SeP>2024-07-23 17:35:51<SeP>2024-07-25 04:56:24<SeP>2024-07-26 16:16:57<SeP>2024-07-28 03:37:30<SeP>2024-07-29 14:58:03<SeP>2024-07-31 02:18:36<SeP>2024-08-01 13:39:09<SeP>2024-08-03 00:59:42<SeP>2024-08-04 12:20:15<SeP>2024-08-05 23:40:48<SeP>2024-08-07 11:01:21<SeP>2024-08-08 22:21:54<SeP>2024-08-10 09:42:27<SeP>2024-08-11 21:03:00<SeP>2024-08-13 08:23:33<SeP>2024-08-14 19:44:06<SeP>2024-08-16 07:04:39<SeP>2024-08-17 18:25:12<SeP>2024-08-19 05:45:45<SeP>2024-08-20 17:06:18<SeP>2024-08-22 04:26:51<SeP>2024-08-23 15:47:24<SeP>2024-08-25 03:07:57<SeP>2024-08-26 14:28:30<SeP>2024-08-28 01:49:03<SeP>2024-08-29 13:09:36<SeP>2024-08-31 00:30:09<SeP>2024-09-01 11:50:42<SeP>2024-09-02 23:11:15<SeP>2024-09-04 10:31:48<SeP>2024-09-05 21:52:21<SeP>2024-09-07 09:12:54<SeP>2024-09-08 20:33:27<SeP>2024-09-10 07:54:00<SeP>2024-09-11 19:14:33<SeP>2024-09-13 06:35:06<SeP>2024-09-14 17:55:39<SeP>2024-09-16 05:16:12<SeP>2024-09-17 16:36:45<SeP>2024-09-19 03:57:18<SeP>2024-09-20 15:17:51<SeP>2024-09-22 02:38:24<SeP>2024-09-23 13:58:57<SeP>2024-09-25 01:19:30<SeP>2024-09-26 12:40:03<SeP>2024-09-28 00:00:36<SeP>2024-09-29 11:21:09<SeP>2024-09-30 22:41:42<SeP>2024-10-02 10:02:15<SeP>2024-10-03 21:22:48<SeP>2024-10-05 08:43:21<SeP>2024-10-06 20:03:54<SeP>2024-10-08 07:24:27<SeP>2024-10-09 18:45:00<SeP>2024-10-11 06:05:33<SeP>2024-10-12 17:26:06<SeP>2024-10-14 04:46:39<SeP>2024-10-15 16:07:12<SeP>2024-10-17 03:27:45<SeP>2024-10-18 14:48:18<SeP>2024-10-20 02:08:51<SeP>2024-10-21 13:29:24<SeP>2024-10-23 00:49:57<SeP>2024-10-24 12:10:30<SeP>2024-10-25 23:31:03<SeP>2024-10-27 10:51:36<SeP>2024-10-28 22:12:09<SeP>2024-10-30 09:32:42<SeP>2024-10-31 20:53:15<SeP>2024-11-02 08:13:48<SeP>2024-11-03 18:34:21<SeP>2024-11-05 05:54:54<SeP>2024-11-06 17:15:27<SeP>2024-11-08 04:36:00<SeP>2024-11-09 15:56:33<SeP>2024-11-11 03:17:06<SeP>2024-11-12 14:37:39<SeP>2024-11-14 01:58:12<SeP>2024-11-15 13:18:45<SeP>2024-11-17 00:39:18<SeP>2024-11-18 11:59:51<SeP>2024-11-19 23:20:24<SeP>2024-11-21 10:40:57<SeP>2024-11-22 22:01:30<SeP>2024-11-24 09:22:03<SeP>2024-11-25 20:42:36<SeP>2024-11-27 08:03:09<SeP>2024-11-28 19:23:42<SeP>2024-11-30 06:44:15<SeP>2024-12-01 18:04:48<SeP>2024-12-03 05:25:21<SeP>2024-12-04 16:45:54<SeP>2024-12-06 04:06:27<SeP>2024-12-07 15:27:00<SeP>2024-12-09 02:47:33<SeP>2024-12-10 14:08:06<SeP>2024-12-12 01:28:39<SeP>2024-12-13 12:49:12<SeP>2024-12-15 00:09:45<SeP>2024-12-16 11:30:18<SeP>2024-12-17 22:50:51<SeP>2024-12-19 10:11:24<SeP>2024-12-20 21:31:57<SeP>2024-12-22 08:52:30<SeP>2024-12-23 20:13:03<SeP>2024-12-25 07:33:36<SeP>2024-12-26 18:54:09<SeP>2024-12-28 06:14:42<SeP>2024-12-29 17:35:15<SeP>2024-12-31 04:55:48<SeP>2025-01-01 16:16:21<SeP>2025-01-03 03:36:54<SeP>2025-01-04 14:57:27<SeP>2025-01-06 02:18:00<SeP>2025-01-07 13:38:33<SeP>2025-01-09 00:59:06<SeP>2025-01-10 12:19:39<SeP>2025-01-11 23:40:12<SeP>2025-01-13 11:00:45<SeP>2025-01-14 22:21:18<SeP>2025-01-16 09:41:51<SeP>2025-01-17 21:02:24<SeP>2025-01-19 08:22:57<SeP>2025-01-20 19:43:30<SeP>2025-01-22 07:04:03<SeP>2025-01-23 18:24:36<SeP>2025-01-25 05:45:09<SeP>2025-01-26 17:05:42<SeP>2025-01-28 04:26:15<SeP>2025-01-29 15:46:48<SeP>2025-01-31 03:07:21<SeP>2025-02-01 14:27:54<SeP>2025-02-03 01:48:27<SeP>2025-02-04 13:09:00<SeP>2025-02-06 00:29:33<SeP>2025-02-07 11:50:06<SeP>2025-02-08 23:10:39<SeP>2025-02-10 10:31:12<SeP>2025-02-11 21:51:45<SeP>2025-02-13 09:12:18<SeP>2025-02-14 20:32:51<SeP>2025-02-16 07:53:24<SeP>2025-02-17 19:13:57<SeP>2025-02-19 06:34:30<SeP>2025-02-20 17:55:03<SeP>2025-02-22 05:15:36<SeP>2025-02-23 16:36:09<SeP>2025-02-25 03:56:42<SeP>2025-02-26 15:17:15<SeP>2025-02-28 02:37:48<SeP>2025-03-01 13:58:21<SeP>2025-03-03 01:18:54<SeP>2025-03-04 12:39:27";
  const itemLabel       = "Attacks";
  const itemData        = "155<SeP>614<SeP>1294<SeP>758<SeP>219<SeP>238<SeP>6991<SeP>557<SeP>9470<SeP>568<SeP>396<SeP>1132<SeP>1292<SeP>240<SeP>177<SeP>445<SeP>114<SeP>751<SeP>332<SeP>6997<SeP>7413<SeP>6593<SeP>8735<SeP>3791<SeP>254<SeP>353<SeP>267<SeP>386<SeP>5733<SeP>287<SeP>361<SeP>134<SeP>493<SeP>326<SeP>7456<SeP>10040<SeP>9722<SeP>10257<SeP>7033<SeP>5146<SeP>8871<SeP>7298<SeP>8865<SeP>8814<SeP>7809<SeP>8034<SeP>9086<SeP>8006<SeP>9221<SeP>5739<SeP>5841<SeP>12869<SeP>6787<SeP>7026<SeP>8385<SeP>10030<SeP>18491<SeP>16000<SeP>9298<SeP>10788<SeP>7565<SeP>7995<SeP>9006<SeP>8769<SeP>8503<SeP>7036<SeP>6614<SeP>6882<SeP>6847<SeP>4908<SeP>4646<SeP>6535<SeP>5516<SeP>6390<SeP>7536<SeP>5312<SeP>5455<SeP>5506<SeP>6978<SeP>4773<SeP>7088<SeP>4814<SeP>5903<SeP>6488<SeP>5953<SeP>5740<SeP>5441<SeP>14408<SeP>17597<SeP>36173<SeP>6965<SeP>9215<SeP>5304<SeP>6945<SeP>12582<SeP>6218<SeP>6268<SeP>3937<SeP>4810<SeP>6026<SeP>5212<SeP>8995<SeP>5376<SeP>6722<SeP>5101<SeP>5370<SeP>8639<SeP>8209<SeP>7544<SeP>6152<SeP>4096<SeP>10737<SeP>9242<SeP>5511<SeP>3228<SeP>6363<SeP>9047<SeP>5643<SeP>6771<SeP>9666<SeP>4693<SeP>2178<SeP>1570<SeP>1976<SeP>1794<SeP>2277<SeP>1087<SeP>1417<SeP>495<SeP>1422<SeP>1523<SeP>1188<SeP>872<SeP>1081<SeP>1062<SeP>782<SeP>1438<SeP>1510<SeP>1176<SeP>1315<SeP>2316<SeP>1464<SeP>9085<SeP>7900<SeP>10464<SeP>8402<SeP>6071<SeP>11091<SeP>7640<SeP>8345<SeP>9684<SeP>10523<SeP>11426<SeP>7819<SeP>12821<SeP>14229<SeP>7096<SeP>10393<SeP>4891<SeP>5806<SeP>7957<SeP>24380<SeP>6330<SeP>8812<SeP>10589<SeP>17245<SeP>6899<SeP>6427<SeP>6677<SeP>7298<SeP>25123<SeP>8647<SeP>8361<SeP>11675<SeP>4654<SeP>7051<SeP>4576<SeP>16979<SeP>5436<SeP>12132<SeP>8399<SeP>6624<SeP>8321<SeP>7595<SeP>4079<SeP>5471<SeP>5767<SeP>7799<SeP>6081<SeP>6362<SeP>7346<SeP>18683<SeP>6913<SeP>8664<SeP>5564<SeP>7413<SeP>9336<SeP>8464<SeP>5834<SeP>2909<SeP>7645<SeP>2772<SeP>5293<SeP>4102<SeP>663<SeP>123<SeP>637<SeP>195<SeP>603<SeP>1065<SeP>362<SeP>594<SeP>1028<SeP>1375<SeP>3195<SeP>21750<SeP>1746<SeP>2659<SeP>3716<SeP>3637<SeP>2993<SeP>7175<SeP>4390<SeP>2136<SeP>3888<SeP>2957<SeP>3049<SeP>3902<SeP>3327<SeP>2361<SeP>3556<SeP>2052<SeP>2031<SeP>1750<SeP>1555<SeP>962<SeP>1695<SeP>955<SeP>1631<SeP>1744<SeP>26491<SeP>1806<SeP>4124<SeP>3774<SeP>1921<SeP>4309<SeP>2064<SeP>2266<SeP>3447<SeP>2864<SeP>3419<SeP>2108<SeP>3825<SeP>2835<SeP>5848<SeP>5789<SeP>3958<SeP>3761<SeP>2575<SeP>3279<SeP>4305<SeP>4476<SeP>9937<SeP>5147<SeP>2485<SeP>3266<SeP>2396<SeP>4365<SeP>3794<SeP>3782<SeP>2651<SeP>3436<SeP>5276<SeP>3920<SeP>5787<SeP>4246<SeP>6724<SeP>4827<SeP>5239<SeP>4735<SeP>22104<SeP>5906<SeP>10841<SeP>1740<SeP>2953<SeP>4379<SeP>3666<SeP>5185<SeP>3499<SeP>4793<SeP>4577<SeP>4827<SeP>3101<SeP>4246<SeP>1971<SeP>1493<SeP>2103<SeP>3981<SeP>2272<SeP>3039<SeP>3476<SeP>4728<SeP>3582<SeP>3404<SeP>4300<SeP>3374<SeP>3259<SeP>6122<SeP>7875<SeP>6148<SeP>4589<SeP>4998<SeP>4368<SeP>3832<SeP>4029<SeP>3955<SeP>6984<SeP>5180<SeP>4413<SeP>3100<SeP>1144<SeP>1144<SeP>1749<SeP>1297<SeP>1235<SeP>1695<SeP>1569<SeP>1428<SeP>3355<SeP>4619<SeP>6391<SeP>34397<SeP>5060<SeP>4430<SeP>21080<SeP>8359<SeP>5220<SeP>6081<SeP>4606<SeP>24519<SeP>4837<SeP>5106<SeP>5137<SeP>5441<SeP>6621<SeP>28851<SeP>4801<SeP>3630<SeP>4331<SeP>4472<SeP>6007<SeP>4180<SeP>3085<SeP>3249<SeP>4549<SeP>5750<SeP>4264<SeP>17946<SeP>5640<SeP>6660<SeP>4894<SeP>1559<SeP>3831<SeP>4851<SeP>3699<SeP>4198<SeP>2779<SeP>3850<SeP>2582<SeP>4130<SeP>3953<SeP>7579<SeP>10059<SeP>8800<SeP>8454<SeP>9355<SeP>7515<SeP>6008<SeP>5197<SeP>4577<SeP>20720<SeP>8429<SeP>3310<SeP>4652<SeP>3232<SeP>11469<SeP>5724<SeP>3658<SeP>4944<SeP>4321<SeP>2760<SeP>9470<SeP>9978<SeP>4378<SeP>3065<SeP>3408<SeP>2264<SeP>2554<SeP>2512<SeP>2011";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:20:33<SeP>2023-07-28 22:41:06<SeP>2023-07-30 10:01:39<SeP>2023-07-31 21:22:12<SeP>2023-08-02 08:42:45<SeP>2023-08-03 20:03:18<SeP>2023-08-05 07:23:51<SeP>2023-08-06 18:44:24<SeP>2023-08-08 06:04:57<SeP>2023-08-09 17:25:30<SeP>2023-08-11 04:46:03<SeP>2023-08-12 16:06:36<SeP>2023-08-14 03:27:09<SeP>2023-08-15 14:47:42<SeP>2023-08-17 02:08:15<SeP>2023-08-18 13:28:48<SeP>2023-08-20 00:49:21<SeP>2023-08-21 12:09:54<SeP>2023-08-22 23:30:27<SeP>2023-08-24 10:51:00<SeP>2023-08-25 22:11:33<SeP>2023-08-27 09:32:06<SeP>2023-08-28 20:52:39<SeP>2023-08-30 08:13:12<SeP>2023-08-31 19:33:45<SeP>2023-09-02 06:54:18<SeP>2023-09-03 18:14:51<SeP>2023-09-05 05:35:24<SeP>2023-09-06 16:55:57<SeP>2023-09-08 04:16:30<SeP>2023-09-09 15:37:03<SeP>2023-09-11 02:57:36<SeP>2023-09-12 14:18:09<SeP>2023-09-14 01:38:42<SeP>2023-09-15 12:59:15<SeP>2023-09-17 00:19:48<SeP>2023-09-18 11:40:21<SeP>2023-09-19 23:00:54<SeP>2023-09-21 10:21:27<SeP>2023-09-22 21:42:00<SeP>2023-09-24 09:02:33<SeP>2023-09-25 20:23:06<SeP>2023-09-27 07:43:39<SeP>2023-09-28 19:04:12<SeP>2023-09-30 06:24:45<SeP>2023-10-01 17:45:18<SeP>2023-10-03 05:05:51<SeP>2023-10-04 16:26:24<SeP>2023-10-06 03:46:57<SeP>2023-10-07 15:07:30<SeP>2023-10-09 02:28:03<SeP>2023-10-10 13:48:36<SeP>2023-10-12 01:09:09<SeP>2023-10-13 12:29:42<SeP>2023-10-14 23:50:15<SeP>2023-10-16 11:10:48<SeP>2023-10-17 22:31:21<SeP>2023-10-19 09:51:54<SeP>2023-10-20 21:12:27<SeP>2023-10-22 08:33:00<SeP>2023-10-23 19:53:33<SeP>2023-10-25 07:14:06<SeP>2023-10-26 18:34:39<SeP>2023-10-28 05:55:12<SeP>2023-10-29 17:15:45<SeP>2023-10-31 04:36:18<SeP>2023-11-01 15:56:51<SeP>2023-11-03 03:17:24<SeP>2023-11-04 14:37:57<SeP>2023-11-06 00:58:30<SeP>2023-11-07 12:19:03<SeP>2023-11-08 23:39:36<SeP>2023-11-10 11:00:09<SeP>2023-11-11 22:20:42<SeP>2023-11-13 09:41:15<SeP>2023-11-14 21:01:48<SeP>2023-11-16 08:22:21<SeP>2023-11-17 19:42:54<SeP>2023-11-19 07:03:27<SeP>2023-11-20 18:24:00<SeP>2023-11-22 05:44:33<SeP>2023-11-23 17:05:06<SeP>2023-11-25 04:25:39<SeP>2023-11-26 15:46:12<SeP>2023-11-28 03:06:45<SeP>2023-11-29 14:27:18<SeP>2023-12-01 01:47:51<SeP>2023-12-02 13:08:24<SeP>2023-12-04 00:28:57<SeP>2023-12-05 11:49:30<SeP>2023-12-06 23:10:03<SeP>2023-12-08 10:30:36<SeP>2023-12-09 21:51:09<SeP>2023-12-11 09:11:42<SeP>2023-12-12 20:32:15<SeP>2023-12-14 07:52:48<SeP>2023-12-15 19:13:21<SeP>2023-12-17 06:33:54<SeP>2023-12-18 17:54:27<SeP>2023-12-20 05:15:00<SeP>2023-12-21 16:35:33<SeP>2023-12-23 03:56:06<SeP>2023-12-24 15:16:39<SeP>2023-12-26 02:37:12<SeP>2023-12-27 13:57:45<SeP>2023-12-29 01:18:18<SeP>2023-12-30 12:38:51<SeP>2023-12-31 23:59:24<SeP>2024-01-02 11:19:57<SeP>2024-01-03 22:40:30<SeP>2024-01-05 10:01:03<SeP>2024-01-06 21:21:36<SeP>2024-01-08 08:42:09<SeP>2024-01-09 20:02:42<SeP>2024-01-11 07:23:15<SeP>2024-01-12 18:43:48<SeP>2024-01-14 06:04:21<SeP>2024-01-15 17:24:54<SeP>2024-01-17 04:45:27<SeP>2024-01-18 16:06:00<SeP>2024-01-20 03:26:33<SeP>2024-01-21 14:47:06<SeP>2024-01-23 02:07:39<SeP>2024-01-24 13:28:12<SeP>2024-01-26 00:48:45<SeP>2024-01-27 12:09:18<SeP>2024-01-28 23:29:51<SeP>2024-01-30 10:50:24<SeP>2024-01-31 22:10:57<SeP>2024-02-02 09:31:30<SeP>2024-02-03 20:52:03<SeP>2024-02-05 08:12:36<SeP>2024-02-06 19:33:09<SeP>2024-02-08 06:53:42<SeP>2024-02-09 18:14:15<SeP>2024-02-11 05:34:48<SeP>2024-02-12 16:55:21<SeP>2024-02-14 04:15:54<SeP>2024-02-15 15:36:27<SeP>2024-02-17 02:57:00<SeP>2024-02-18 14:17:33<SeP>2024-02-20 01:38:06<SeP>2024-02-21 12:58:39<SeP>2024-02-23 00:19:12<SeP>2024-02-24 11:39:45<SeP>2024-02-25 23:00:18<SeP>2024-02-27 10:20:51<SeP>2024-02-28 21:41:24<SeP>2024-03-01 09:01:57<SeP>2024-03-02 20:22:30<SeP>2024-03-04 07:43:03<SeP>2024-03-05 19:03:36<SeP>2024-03-07 06:24:09<SeP>2024-03-08 17:44:42<SeP>2024-03-10 06:05:15<SeP>2024-03-11 17:25:48<SeP>2024-03-13 04:46:21<SeP>2024-03-14 16:06:54<SeP>2024-03-16 03:27:27<SeP>2024-03-17 14:48:00<SeP>2024-03-19 02:08:33<SeP>2024-03-20 13:29:06<SeP>2024-03-22 00:49:39<SeP>2024-03-23 12:10:12<SeP>2024-03-24 23:30:45<SeP>2024-03-26 10:51:18<SeP>2024-03-27 22:11:51<SeP>2024-03-29 09:32:24<SeP>2024-03-30 20:52:57<SeP>2024-04-01 08:13:30<SeP>2024-04-02 19:34:03<SeP>2024-04-04 06:54:36<SeP>2024-04-05 18:15:09<SeP>2024-04-07 05:35:42<SeP>2024-04-08 16:56:15<SeP>2024-04-10 04:16:48<SeP>2024-04-11 15:37:21<SeP>2024-04-13 02:57:54<SeP>2024-04-14 14:18:27<SeP>2024-04-16 01:39:00<SeP>2024-04-17 12:59:33<SeP>2024-04-19 00:20:06<SeP>2024-04-20 11:40:39<SeP>2024-04-21 23:01:12<SeP>2024-04-23 10:21:45<SeP>2024-04-24 21:42:18<SeP>2024-04-26 09:02:51<SeP>2024-04-27 20:23:24<SeP>2024-04-29 07:43:57<SeP>2024-04-30 19:04:30<SeP>2024-05-02 06:25:03<SeP>2024-05-03 17:45:36<SeP>2024-05-05 05:06:09<SeP>2024-05-06 16:26:42<SeP>2024-05-08 03:47:15<SeP>2024-05-09 15:07:48<SeP>2024-05-11 02:28:21<SeP>2024-05-12 13:48:54<SeP>2024-05-14 01:09:27<SeP>2024-05-15 12:30:00<SeP>2024-05-16 23:50:33<SeP>2024-05-18 11:11:06<SeP>2024-05-19 22:31:39<SeP>2024-05-21 09:52:12<SeP>2024-05-22 21:12:45<SeP>2024-05-24 08:33:18<SeP>2024-05-25 19:53:51<SeP>2024-05-27 07:14:24<SeP>2024-05-28 18:34:57<SeP>2024-05-30 05:55:30<SeP>2024-05-31 17:16:03<SeP>2024-06-02 04:36:36<SeP>2024-06-03 15:57:09<SeP>2024-06-05 03:17:42<SeP>2024-06-06 14:38:15<SeP>2024-06-08 01:58:48<SeP>2024-06-09 13:19:21<SeP>2024-06-11 00:39:54<SeP>2024-06-12 12:00:27<SeP>2024-06-13 23:21:00<SeP>2024-06-15 10:41:33<SeP>2024-06-16 22:02:06<SeP>2024-06-18 09:22:39<SeP>2024-06-19 20:43:12<SeP>2024-06-21 08:03:45<SeP>2024-06-22 19:24:18<SeP>2024-06-24 06:44:51<SeP>2024-06-25 18:05:24<SeP>2024-06-27 05:25:57<SeP>2024-06-28 16:46:30<SeP>2024-06-30 04:07:03<SeP>2024-07-01 15:27:36<SeP>2024-07-03 02:48:09<SeP>2024-07-04 14:08:42<SeP>2024-07-06 01:29:15<SeP>2024-07-07 12:49:48<SeP>2024-07-09 00:10:21<SeP>2024-07-10 11:30:54<SeP>2024-07-11 22:51:27<SeP>2024-07-13 10:12:00<SeP>2024-07-14 21:32:33<SeP>2024-07-16 08:53:06<SeP>2024-07-17 20:13:39<SeP>2024-07-19 07:34:12<SeP>2024-07-20 18:54:45<SeP>2024-07-22 06:15:18<SeP>2024-07-23 17:35:51<SeP>2024-07-25 04:56:24<SeP>2024-07-26 16:16:57<SeP>2024-07-28 03:37:30<SeP>2024-07-29 14:58:03<SeP>2024-07-31 02:18:36<SeP>2024-08-01 13:39:09<SeP>2024-08-03 00:59:42<SeP>2024-08-04 12:20:15<SeP>2024-08-05 23:40:48<SeP>2024-08-07 11:01:21<SeP>2024-08-08 22:21:54<SeP>2024-08-10 09:42:27<SeP>2024-08-11 21:03:00<SeP>2024-08-13 08:23:33<SeP>2024-08-14 19:44:06<SeP>2024-08-16 07:04:39<SeP>2024-08-17 18:25:12<SeP>2024-08-19 05:45:45<SeP>2024-08-20 17:06:18<SeP>2024-08-22 04:26:51<SeP>2024-08-23 15:47:24<SeP>2024-08-25 03:07:57<SeP>2024-08-26 14:28:30<SeP>2024-08-28 01:49:03<SeP>2024-08-29 13:09:36<SeP>2024-08-31 00:30:09<SeP>2024-09-01 11:50:42<SeP>2024-09-02 23:11:15<SeP>2024-09-04 10:31:48<SeP>2024-09-05 21:52:21<SeP>2024-09-07 09:12:54<SeP>2024-09-08 20:33:27<SeP>2024-09-10 07:54:00<SeP>2024-09-11 19:14:33<SeP>2024-09-13 06:35:06<SeP>2024-09-14 17:55:39<SeP>2024-09-16 05:16:12<SeP>2024-09-17 16:36:45<SeP>2024-09-19 03:57:18<SeP>2024-09-20 15:17:51<SeP>2024-09-22 02:38:24<SeP>2024-09-23 13:58:57<SeP>2024-09-25 01:19:30<SeP>2024-09-26 12:40:03<SeP>2024-09-28 00:00:36<SeP>2024-09-29 11:21:09<SeP>2024-09-30 22:41:42<SeP>2024-10-02 10:02:15<SeP>2024-10-03 21:22:48<SeP>2024-10-05 08:43:21<SeP>2024-10-06 20:03:54<SeP>2024-10-08 07:24:27<SeP>2024-10-09 18:45:00<SeP>2024-10-11 06:05:33<SeP>2024-10-12 17:26:06<SeP>2024-10-14 04:46:39<SeP>2024-10-15 16:07:12<SeP>2024-10-17 03:27:45<SeP>2024-10-18 14:48:18<SeP>2024-10-20 02:08:51<SeP>2024-10-21 13:29:24<SeP>2024-10-23 00:49:57<SeP>2024-10-24 12:10:30<SeP>2024-10-25 23:31:03<SeP>2024-10-27 10:51:36<SeP>2024-10-28 22:12:09<SeP>2024-10-30 09:32:42<SeP>2024-10-31 20:53:15<SeP>2024-11-02 08:13:48<SeP>2024-11-03 18:34:21<SeP>2024-11-05 05:54:54<SeP>2024-11-06 17:15:27<SeP>2024-11-08 04:36:00<SeP>2024-11-09 15:56:33<SeP>2024-11-11 03:17:06<SeP>2024-11-12 14:37:39<SeP>2024-11-14 01:58:12<SeP>2024-11-15 13:18:45<SeP>2024-11-17 00:39:18<SeP>2024-11-18 11:59:51<SeP>2024-11-19 23:20:24<SeP>2024-11-21 10:40:57<SeP>2024-11-22 22:01:30<SeP>2024-11-24 09:22:03<SeP>2024-11-25 20:42:36<SeP>2024-11-27 08:03:09<SeP>2024-11-28 19:23:42<SeP>2024-11-30 06:44:15<SeP>2024-12-01 18:04:48<SeP>2024-12-03 05:25:21<SeP>2024-12-04 16:45:54<SeP>2024-12-06 04:06:27<SeP>2024-12-07 15:27:00<SeP>2024-12-09 02:47:33<SeP>2024-12-10 14:08:06<SeP>2024-12-12 01:28:39<SeP>2024-12-13 12:49:12<SeP>2024-12-15 00:09:45<SeP>2024-12-16 11:30:18<SeP>2024-12-17 22:50:51<SeP>2024-12-19 10:11:24<SeP>2024-12-20 21:31:57<SeP>2024-12-22 08:52:30<SeP>2024-12-23 20:13:03<SeP>2024-12-25 07:33:36<SeP>2024-12-26 18:54:09<SeP>2024-12-28 06:14:42<SeP>2024-12-29 17:35:15<SeP>2024-12-31 04:55:48<SeP>2025-01-01 16:16:21<SeP>2025-01-03 03:36:54<SeP>2025-01-04 14:57:27<SeP>2025-01-06 02:18:00<SeP>2025-01-07 13:38:33<SeP>2025-01-09 00:59:06<SeP>2025-01-10 12:19:39<SeP>2025-01-11 23:40:12<SeP>2025-01-13 11:00:45<SeP>2025-01-14 22:21:18<SeP>2025-01-16 09:41:51<SeP>2025-01-17 21:02:24<SeP>2025-01-19 08:22:57<SeP>2025-01-20 19:43:30<SeP>2025-01-22 07:04:03<SeP>2025-01-23 18:24:36<SeP>2025-01-25 05:45:09<SeP>2025-01-26 17:05:42<SeP>2025-01-28 04:26:15<SeP>2025-01-29 15:46:48<SeP>2025-01-31 03:07:21<SeP>2025-02-01 14:27:54<SeP>2025-02-03 01:48:27<SeP>2025-02-04 13:09:00<SeP>2025-02-06 00:29:33<SeP>2025-02-07 11:50:06<SeP>2025-02-08 23:10:39<SeP>2025-02-10 10:31:12<SeP>2025-02-11 21:51:45<SeP>2025-02-13 09:12:18<SeP>2025-02-14 20:32:51<SeP>2025-02-16 07:53:24<SeP>2025-02-17 19:13:57<SeP>2025-02-19 06:34:30<SeP>2025-02-20 17:55:03<SeP>2025-02-22 05:15:36<SeP>2025-02-23 16:36:09<SeP>2025-02-25 03:56:42<SeP>2025-02-26 15:17:15<SeP>2025-02-28 02:37:48<SeP>2025-03-01 13:58:21<SeP>2025-03-03 01:18:54<SeP>2025-03-04 12:39:27";
  const item1Label       = "Escaneos";
  const item1Data        = "771<SeP>1514<SeP>1366<SeP>1486<SeP>1228<SeP>1745<SeP>938<SeP>964<SeP>1167<SeP>3409<SeP>2810<SeP>1596<SeP>3285<SeP>909<SeP>760<SeP>911<SeP>1413<SeP>2915<SeP>1816<SeP>1175<SeP>1244<SeP>945<SeP>1028<SeP>1271<SeP>888<SeP>862<SeP>813<SeP>3796<SeP>711<SeP>978<SeP>988<SeP>1658<SeP>897<SeP>823<SeP>3167<SeP>2660<SeP>1934<SeP>1669<SeP>1814<SeP>1224<SeP>1600<SeP>1900<SeP>1996<SeP>1783<SeP>1672<SeP>1596<SeP>1725<SeP>1685<SeP>1768<SeP>1724<SeP>1823<SeP>1766<SeP>1757<SeP>3098<SeP>1323<SeP>1961<SeP>1823<SeP>2396<SeP>1548<SeP>2041<SeP>3259<SeP>1471<SeP>1465<SeP>1524<SeP>1510<SeP>1860<SeP>1585<SeP>1258<SeP>1439<SeP>1186<SeP>2383<SeP>1211<SeP>1159<SeP>1262<SeP>2408<SeP>7159<SeP>1187<SeP>1313<SeP>1440<SeP>2275<SeP>1289<SeP>1381<SeP>6486<SeP>1451<SeP>1612<SeP>978<SeP>3014<SeP>1591<SeP>1015<SeP>1132<SeP>1053<SeP>1052<SeP>3121<SeP>914<SeP>1078<SeP>2093<SeP>4526<SeP>4676<SeP>919<SeP>949<SeP>968<SeP>961<SeP>1036<SeP>811<SeP>1174<SeP>2896<SeP>2976<SeP>1574<SeP>1687<SeP>745<SeP>786<SeP>1399<SeP>1283<SeP>1092<SeP>1029<SeP>2257<SeP>1123<SeP>1129<SeP>1084<SeP>1052<SeP>952<SeP>815<SeP>857<SeP>843<SeP>793<SeP>1154<SeP>853<SeP>871<SeP>820<SeP>859<SeP>874<SeP>697<SeP>861<SeP>899<SeP>915<SeP>867<SeP>733<SeP>986<SeP>689<SeP>771<SeP>1135<SeP>730<SeP>942<SeP>973<SeP>876<SeP>1142<SeP>975<SeP>745<SeP>547<SeP>950<SeP>843<SeP>1300<SeP>879<SeP>1047<SeP>1215<SeP>1239<SeP>916<SeP>852<SeP>957<SeP>933<SeP>865<SeP>1056<SeP>862<SeP>983<SeP>897<SeP>1089<SeP>919<SeP>1122<SeP>984<SeP>1042<SeP>1105<SeP>896<SeP>918<SeP>2206<SeP>1225<SeP>1140<SeP>1081<SeP>1047<SeP>1141<SeP>937<SeP>851<SeP>722<SeP>896<SeP>1091<SeP>969<SeP>929<SeP>1106<SeP>1333<SeP>1027<SeP>1193<SeP>1270<SeP>1210<SeP>1284<SeP>1331<SeP>1294<SeP>1539<SeP>1940<SeP>1426<SeP>1207<SeP>764<SeP>1115<SeP>896<SeP>1083<SeP>576<SeP>803<SeP>999<SeP>851<SeP>3459<SeP>4627<SeP>2172<SeP>1707<SeP>1165<SeP>828<SeP>1036<SeP>949<SeP>949<SeP>1061<SeP>1062<SeP>1004<SeP>1039<SeP>2234<SeP>1258<SeP>1153<SeP>1217<SeP>1341<SeP>1087<SeP>1093<SeP>986<SeP>1139<SeP>1105<SeP>1012<SeP>1163<SeP>1079<SeP>1131<SeP>914<SeP>991<SeP>1399<SeP>1122<SeP>1058<SeP>1336<SeP>1273<SeP>1166<SeP>1571<SeP>1265<SeP>1098<SeP>1110<SeP>1235<SeP>1968<SeP>1333<SeP>1974<SeP>1759<SeP>1468<SeP>1921<SeP>1536<SeP>1132<SeP>1181<SeP>1389<SeP>1119<SeP>1537<SeP>1273<SeP>1247<SeP>1718<SeP>1679<SeP>1379<SeP>1484<SeP>1460<SeP>1263<SeP>1014<SeP>1136<SeP>1392<SeP>1087<SeP>1254<SeP>1445<SeP>1076<SeP>1511<SeP>1841<SeP>1344<SeP>1369<SeP>1557<SeP>1393<SeP>1053<SeP>1012<SeP>992<SeP>971<SeP>886<SeP>1010<SeP>1777<SeP>1158<SeP>1064<SeP>1128<SeP>964<SeP>779<SeP>1163<SeP>1331<SeP>850<SeP>924<SeP>948<SeP>1313<SeP>1622<SeP>1468<SeP>1063<SeP>1153<SeP>989<SeP>1842<SeP>1095<SeP>1185<SeP>1040<SeP>1243<SeP>1319<SeP>1012<SeP>951<SeP>1278<SeP>1000<SeP>970<SeP>843<SeP>1116<SeP>1554<SeP>1443<SeP>1702<SeP>1365<SeP>1020<SeP>1110<SeP>1091<SeP>1144<SeP>1174<SeP>1136<SeP>1062<SeP>1072<SeP>1216<SeP>1430<SeP>1438<SeP>1564<SeP>1483<SeP>1300<SeP>1509<SeP>1450<SeP>1549<SeP>1344<SeP>1438<SeP>1243<SeP>1840<SeP>1247<SeP>1508<SeP>1632<SeP>1298<SeP>1485<SeP>1239<SeP>1293<SeP>1300<SeP>1506<SeP>1647<SeP>1340<SeP>1221<SeP>1315<SeP>1345<SeP>1315<SeP>1143<SeP>1557<SeP>1843<SeP>1732<SeP>1171<SeP>606<SeP>1493<SeP>1905<SeP>1247<SeP>1343<SeP>1209<SeP>1142<SeP>1483<SeP>1298<SeP>1322<SeP>1502<SeP>1801<SeP>1298<SeP>1616<SeP>1767<SeP>1297<SeP>1395<SeP>1525<SeP>1772<SeP>1618<SeP>973<SeP>1116<SeP>2060<SeP>1908<SeP>1658<SeP>1787<SeP>1755<SeP>1474<SeP>1632<SeP>1613<SeP>1663<SeP>1479<SeP>1752<SeP>1796<SeP>1627<SeP>1432<SeP>1503<SeP>1457<SeP>1493";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "155<SeP>614<SeP>1294<SeP>758<SeP>219<SeP>238<SeP>6991<SeP>557<SeP>9470<SeP>568<SeP>396<SeP>1132<SeP>1292<SeP>240<SeP>177<SeP>445<SeP>114<SeP>751<SeP>332<SeP>6997<SeP>7413<SeP>6593<SeP>8735<SeP>3791<SeP>254<SeP>353<SeP>267<SeP>386<SeP>5733<SeP>287<SeP>361<SeP>134<SeP>493<SeP>326<SeP>7456<SeP>10040<SeP>9722<SeP>10257<SeP>7033<SeP>5146<SeP>8871<SeP>7298<SeP>8865<SeP>8814<SeP>7809<SeP>8034<SeP>9086<SeP>8006<SeP>9221<SeP>5739<SeP>5841<SeP>12869<SeP>6787<SeP>7026<SeP>8385<SeP>10030<SeP>18491<SeP>16000<SeP>9298<SeP>10788<SeP>7565<SeP>7995<SeP>9006<SeP>8769<SeP>8503<SeP>7036<SeP>6614<SeP>6882<SeP>6847<SeP>4908<SeP>4646<SeP>6535<SeP>5516<SeP>6390<SeP>7536<SeP>5312<SeP>5455<SeP>5506<SeP>6978<SeP>4773<SeP>7088<SeP>4814<SeP>5903<SeP>6488<SeP>5953<SeP>5740<SeP>5441<SeP>14408<SeP>17597<SeP>36173<SeP>6965<SeP>9215<SeP>5304<SeP>6945<SeP>12582<SeP>6218<SeP>6268<SeP>3937<SeP>4810<SeP>6026<SeP>5212<SeP>8995<SeP>5376<SeP>6722<SeP>5101<SeP>5370<SeP>8639<SeP>8209<SeP>7544<SeP>6152<SeP>4096<SeP>10737<SeP>9242<SeP>5511<SeP>3228<SeP>6363<SeP>9047<SeP>5643<SeP>6771<SeP>9666<SeP>4693<SeP>2178<SeP>1570<SeP>1976<SeP>1794<SeP>2277<SeP>1087<SeP>1417<SeP>495<SeP>1422<SeP>1523<SeP>1188<SeP>872<SeP>1081<SeP>1062<SeP>782<SeP>1438<SeP>1510<SeP>1176<SeP>1315<SeP>2316<SeP>1464<SeP>9085<SeP>7900<SeP>10464<SeP>8402<SeP>6071<SeP>11091<SeP>7640<SeP>8345<SeP>9684<SeP>10523<SeP>11426<SeP>7819<SeP>12821<SeP>14229<SeP>7096<SeP>10393<SeP>4891<SeP>5806<SeP>7957<SeP>24380<SeP>6330<SeP>8812<SeP>10589<SeP>17245<SeP>6899<SeP>6427<SeP>6677<SeP>7298<SeP>25123<SeP>8647<SeP>8361<SeP>11675<SeP>4654<SeP>7051<SeP>4576<SeP>16979<SeP>5436<SeP>12132<SeP>8399<SeP>6624<SeP>8321<SeP>7595<SeP>4079<SeP>5471<SeP>5767<SeP>7799<SeP>6081<SeP>6362<SeP>7346<SeP>18683<SeP>6913<SeP>8664<SeP>5564<SeP>7413<SeP>9336<SeP>8464<SeP>5834<SeP>2909<SeP>7645<SeP>2772<SeP>5293<SeP>4102<SeP>663<SeP>123<SeP>637<SeP>195<SeP>603<SeP>1065<SeP>362<SeP>594<SeP>1028<SeP>1375<SeP>3195<SeP>21750<SeP>1746<SeP>2659<SeP>3716<SeP>3637<SeP>2993<SeP>7175<SeP>4390<SeP>2136<SeP>3888<SeP>2957<SeP>3049<SeP>3902<SeP>3327<SeP>2361<SeP>3556<SeP>2052<SeP>2031<SeP>1750<SeP>1555<SeP>962<SeP>1695<SeP>955<SeP>1631<SeP>1744<SeP>26491<SeP>1806<SeP>4124<SeP>3774<SeP>1921<SeP>4309<SeP>2064<SeP>2266<SeP>3447<SeP>2864<SeP>3419<SeP>2108<SeP>3825<SeP>2835<SeP>5848<SeP>5789<SeP>3958<SeP>3761<SeP>2575<SeP>3279<SeP>4305<SeP>4476<SeP>9937<SeP>5147<SeP>2485<SeP>3266<SeP>2396<SeP>4365<SeP>3794<SeP>3782<SeP>2651<SeP>3436<SeP>5276<SeP>3920<SeP>5787<SeP>4246<SeP>6724<SeP>4827<SeP>5239<SeP>4735<SeP>22104<SeP>5906<SeP>10841<SeP>1740<SeP>2953<SeP>4379<SeP>3666<SeP>5185<SeP>3499<SeP>4793<SeP>4577<SeP>4827<SeP>3101<SeP>4246<SeP>1971<SeP>1493<SeP>2103<SeP>3981<SeP>2272<SeP>3039<SeP>3476<SeP>4728<SeP>3582<SeP>3404<SeP>4300<SeP>3374<SeP>3259<SeP>6122<SeP>7875<SeP>6148<SeP>4589<SeP>4998<SeP>4368<SeP>3832<SeP>4029<SeP>3955<SeP>6984<SeP>5180<SeP>4413<SeP>3100<SeP>1144<SeP>1144<SeP>1749<SeP>1297<SeP>1235<SeP>1695<SeP>1569<SeP>1428<SeP>3355<SeP>4619<SeP>6391<SeP>34397<SeP>5060<SeP>4430<SeP>21080<SeP>8359<SeP>5220<SeP>6081<SeP>4606<SeP>24519<SeP>4837<SeP>5106<SeP>5137<SeP>5441<SeP>6621<SeP>28851<SeP>4801<SeP>3630<SeP>4331<SeP>4472<SeP>6007<SeP>4180<SeP>3085<SeP>3249<SeP>4549<SeP>5750<SeP>4264<SeP>17946<SeP>5640<SeP>6660<SeP>4894<SeP>1559<SeP>3831<SeP>4851<SeP>3699<SeP>4198<SeP>2779<SeP>3850<SeP>2582<SeP>4130<SeP>3953<SeP>7579<SeP>10059<SeP>8800<SeP>8454<SeP>9355<SeP>7515<SeP>6008<SeP>5197<SeP>4577<SeP>20720<SeP>8429<SeP>3310<SeP>4652<SeP>3232<SeP>11469<SeP>5724<SeP>3658<SeP>4944<SeP>4321<SeP>2760<SeP>9470<SeP>9978<SeP>4378<SeP>3065<SeP>3408<SeP>2264<SeP>2554<SeP>2512<SeP>2011";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:20:33<SeP>2023-07-28 22:41:06<SeP>2023-07-30 10:01:39<SeP>2023-07-31 21:22:12<SeP>2023-08-02 08:42:45<SeP>2023-08-03 20:03:18<SeP>2023-08-05 07:23:51<SeP>2023-08-06 18:44:24<SeP>2023-08-08 06:04:57<SeP>2023-08-09 17:25:30<SeP>2023-08-11 04:46:03<SeP>2023-08-12 16:06:36<SeP>2023-08-14 03:27:09<SeP>2023-08-15 14:47:42<SeP>2023-08-17 02:08:15<SeP>2023-08-18 13:28:48<SeP>2023-08-20 00:49:21<SeP>2023-08-21 12:09:54<SeP>2023-08-22 23:30:27<SeP>2023-08-24 10:51:00<SeP>2023-08-25 22:11:33<SeP>2023-08-27 09:32:06<SeP>2023-08-28 20:52:39<SeP>2023-08-30 08:13:12<SeP>2023-08-31 19:33:45<SeP>2023-09-02 06:54:18<SeP>2023-09-03 18:14:51<SeP>2023-09-05 05:35:24<SeP>2023-09-06 16:55:57<SeP>2023-09-08 04:16:30<SeP>2023-09-09 15:37:03<SeP>2023-09-11 02:57:36<SeP>2023-09-12 14:18:09<SeP>2023-09-14 01:38:42<SeP>2023-09-15 12:59:15<SeP>2023-09-17 00:19:48<SeP>2023-09-18 11:40:21<SeP>2023-09-19 23:00:54<SeP>2023-09-21 10:21:27<SeP>2023-09-22 21:42:00<SeP>2023-09-24 09:02:33<SeP>2023-09-25 20:23:06<SeP>2023-09-27 07:43:39<SeP>2023-09-28 19:04:12<SeP>2023-09-30 06:24:45<SeP>2023-10-01 17:45:18<SeP>2023-10-03 05:05:51<SeP>2023-10-04 16:26:24<SeP>2023-10-06 03:46:57<SeP>2023-10-07 15:07:30<SeP>2023-10-09 02:28:03<SeP>2023-10-10 13:48:36<SeP>2023-10-12 01:09:09<SeP>2023-10-13 12:29:42<SeP>2023-10-14 23:50:15<SeP>2023-10-16 11:10:48<SeP>2023-10-17 22:31:21<SeP>2023-10-19 09:51:54<SeP>2023-10-20 21:12:27<SeP>2023-10-22 08:33:00<SeP>2023-10-23 19:53:33<SeP>2023-10-25 07:14:06<SeP>2023-10-26 18:34:39<SeP>2023-10-28 05:55:12<SeP>2023-10-29 17:15:45<SeP>2023-10-31 04:36:18<SeP>2023-11-01 15:56:51<SeP>2023-11-03 03:17:24<SeP>2023-11-04 14:37:57<SeP>2023-11-06 00:58:30<SeP>2023-11-07 12:19:03<SeP>2023-11-08 23:39:36<SeP>2023-11-10 11:00:09<SeP>2023-11-11 22:20:42<SeP>2023-11-13 09:41:15<SeP>2023-11-14 21:01:48<SeP>2023-11-16 08:22:21<SeP>2023-11-17 19:42:54<SeP>2023-11-19 07:03:27<SeP>2023-11-20 18:24:00<SeP>2023-11-22 05:44:33<SeP>2023-11-23 17:05:06<SeP>2023-11-25 04:25:39<SeP>2023-11-26 15:46:12<SeP>2023-11-28 03:06:45<SeP>2023-11-29 14:27:18<SeP>2023-12-01 01:47:51<SeP>2023-12-02 13:08:24<SeP>2023-12-04 00:28:57<SeP>2023-12-05 11:49:30<SeP>2023-12-06 23:10:03<SeP>2023-12-08 10:30:36<SeP>2023-12-09 21:51:09<SeP>2023-12-11 09:11:42<SeP>2023-12-12 20:32:15<SeP>2023-12-14 07:52:48<SeP>2023-12-15 19:13:21<SeP>2023-12-17 06:33:54<SeP>2023-12-18 17:54:27<SeP>2023-12-20 05:15:00<SeP>2023-12-21 16:35:33<SeP>2023-12-23 03:56:06<SeP>2023-12-24 15:16:39<SeP>2023-12-26 02:37:12<SeP>2023-12-27 13:57:45<SeP>2023-12-29 01:18:18<SeP>2023-12-30 12:38:51<SeP>2023-12-31 23:59:24<SeP>2024-01-02 11:19:57<SeP>2024-01-03 22:40:30<SeP>2024-01-05 10:01:03<SeP>2024-01-06 21:21:36<SeP>2024-01-08 08:42:09<SeP>2024-01-09 20:02:42<SeP>2024-01-11 07:23:15<SeP>2024-01-12 18:43:48<SeP>2024-01-14 06:04:21<SeP>2024-01-15 17:24:54<SeP>2024-01-17 04:45:27<SeP>2024-01-18 16:06:00<SeP>2024-01-20 03:26:33<SeP>2024-01-21 14:47:06<SeP>2024-01-23 02:07:39<SeP>2024-01-24 13:28:12<SeP>2024-01-26 00:48:45<SeP>2024-01-27 12:09:18<SeP>2024-01-28 23:29:51<SeP>2024-01-30 10:50:24<SeP>2024-01-31 22:10:57<SeP>2024-02-02 09:31:30<SeP>2024-02-03 20:52:03<SeP>2024-02-05 08:12:36<SeP>2024-02-06 19:33:09<SeP>2024-02-08 06:53:42<SeP>2024-02-09 18:14:15<SeP>2024-02-11 05:34:48<SeP>2024-02-12 16:55:21<SeP>2024-02-14 04:15:54<SeP>2024-02-15 15:36:27<SeP>2024-02-17 02:57:00<SeP>2024-02-18 14:17:33<SeP>2024-02-20 01:38:06<SeP>2024-02-21 12:58:39<SeP>2024-02-23 00:19:12<SeP>2024-02-24 11:39:45<SeP>2024-02-25 23:00:18<SeP>2024-02-27 10:20:51<SeP>2024-02-28 21:41:24<SeP>2024-03-01 09:01:57<SeP>2024-03-02 20:22:30<SeP>2024-03-04 07:43:03<SeP>2024-03-05 19:03:36<SeP>2024-03-07 06:24:09<SeP>2024-03-08 17:44:42<SeP>2024-03-10 06:05:15<SeP>2024-03-11 17:25:48<SeP>2024-03-13 04:46:21<SeP>2024-03-14 16:06:54<SeP>2024-03-16 03:27:27<SeP>2024-03-17 14:48:00<SeP>2024-03-19 02:08:33<SeP>2024-03-20 13:29:06<SeP>2024-03-22 00:49:39<SeP>2024-03-23 12:10:12<SeP>2024-03-24 23:30:45<SeP>2024-03-26 10:51:18<SeP>2024-03-27 22:11:51<SeP>2024-03-29 09:32:24<SeP>2024-03-30 20:52:57<SeP>2024-04-01 08:13:30<SeP>2024-04-02 19:34:03<SeP>2024-04-04 06:54:36<SeP>2024-04-05 18:15:09<SeP>2024-04-07 05:35:42<SeP>2024-04-08 16:56:15<SeP>2024-04-10 04:16:48<SeP>2024-04-11 15:37:21<SeP>2024-04-13 02:57:54<SeP>2024-04-14 14:18:27<SeP>2024-04-16 01:39:00<SeP>2024-04-17 12:59:33<SeP>2024-04-19 00:20:06<SeP>2024-04-20 11:40:39<SeP>2024-04-21 23:01:12<SeP>2024-04-23 10:21:45<SeP>2024-04-24 21:42:18<SeP>2024-04-26 09:02:51<SeP>2024-04-27 20:23:24<SeP>2024-04-29 07:43:57<SeP>2024-04-30 19:04:30<SeP>2024-05-02 06:25:03<SeP>2024-05-03 17:45:36<SeP>2024-05-05 05:06:09<SeP>2024-05-06 16:26:42<SeP>2024-05-08 03:47:15<SeP>2024-05-09 15:07:48<SeP>2024-05-11 02:28:21<SeP>2024-05-12 13:48:54<SeP>2024-05-14 01:09:27<SeP>2024-05-15 12:30:00<SeP>2024-05-16 23:50:33<SeP>2024-05-18 11:11:06<SeP>2024-05-19 22:31:39<SeP>2024-05-21 09:52:12<SeP>2024-05-22 21:12:45<SeP>2024-05-24 08:33:18<SeP>2024-05-25 19:53:51<SeP>2024-05-27 07:14:24<SeP>2024-05-28 18:34:57<SeP>2024-05-30 05:55:30<SeP>2024-05-31 17:16:03<SeP>2024-06-02 04:36:36<SeP>2024-06-03 15:57:09<SeP>2024-06-05 03:17:42<SeP>2024-06-06 14:38:15<SeP>2024-06-08 01:58:48<SeP>2024-06-09 13:19:21<SeP>2024-06-11 00:39:54<SeP>2024-06-12 12:00:27<SeP>2024-06-13 23:21:00<SeP>2024-06-15 10:41:33<SeP>2024-06-16 22:02:06<SeP>2024-06-18 09:22:39<SeP>2024-06-19 20:43:12<SeP>2024-06-21 08:03:45<SeP>2024-06-22 19:24:18<SeP>2024-06-24 06:44:51<SeP>2024-06-25 18:05:24<SeP>2024-06-27 05:25:57<SeP>2024-06-28 16:46:30<SeP>2024-06-30 04:07:03<SeP>2024-07-01 15:27:36<SeP>2024-07-03 02:48:09<SeP>2024-07-04 14:08:42<SeP>2024-07-06 01:29:15<SeP>2024-07-07 12:49:48<SeP>2024-07-09 00:10:21<SeP>2024-07-10 11:30:54<SeP>2024-07-11 22:51:27<SeP>2024-07-13 10:12:00<SeP>2024-07-14 21:32:33<SeP>2024-07-16 08:53:06<SeP>2024-07-17 20:13:39<SeP>2024-07-19 07:34:12<SeP>2024-07-20 18:54:45<SeP>2024-07-22 06:15:18<SeP>2024-07-23 17:35:51<SeP>2024-07-25 04:56:24<SeP>2024-07-26 16:16:57<SeP>2024-07-28 03:37:30<SeP>2024-07-29 14:58:03<SeP>2024-07-31 02:18:36<SeP>2024-08-01 13:39:09<SeP>2024-08-03 00:59:42<SeP>2024-08-04 12:20:15<SeP>2024-08-05 23:40:48<SeP>2024-08-07 11:01:21<SeP>2024-08-08 22:21:54<SeP>2024-08-10 09:42:27<SeP>2024-08-11 21:03:00<SeP>2024-08-13 08:23:33<SeP>2024-08-14 19:44:06<SeP>2024-08-16 07:04:39<SeP>2024-08-17 18:25:12<SeP>2024-08-19 05:45:45<SeP>2024-08-20 17:06:18<SeP>2024-08-22 04:26:51<SeP>2024-08-23 15:47:24<SeP>2024-08-25 03:07:57<SeP>2024-08-26 14:28:30<SeP>2024-08-28 01:49:03<SeP>2024-08-29 13:09:36<SeP>2024-08-31 00:30:09<SeP>2024-09-01 11:50:42<SeP>2024-09-02 23:11:15<SeP>2024-09-04 10:31:48<SeP>2024-09-05 21:52:21<SeP>2024-09-07 09:12:54<SeP>2024-09-08 20:33:27<SeP>2024-09-10 07:54:00<SeP>2024-09-11 19:14:33<SeP>2024-09-13 06:35:06<SeP>2024-09-14 17:55:39<SeP>2024-09-16 05:16:12<SeP>2024-09-17 16:36:45<SeP>2024-09-19 03:57:18<SeP>2024-09-20 15:17:51<SeP>2024-09-22 02:38:24<SeP>2024-09-23 13:58:57<SeP>2024-09-25 01:19:30<SeP>2024-09-26 12:40:03<SeP>2024-09-28 00:00:36<SeP>2024-09-29 11:21:09<SeP>2024-09-30 22:41:42<SeP>2024-10-02 10:02:15<SeP>2024-10-03 21:22:48<SeP>2024-10-05 08:43:21<SeP>2024-10-06 20:03:54<SeP>2024-10-08 07:24:27<SeP>2024-10-09 18:45:00<SeP>2024-10-11 06:05:33<SeP>2024-10-12 17:26:06<SeP>2024-10-14 04:46:39<SeP>2024-10-15 16:07:12<SeP>2024-10-17 03:27:45<SeP>2024-10-18 14:48:18<SeP>2024-10-20 02:08:51<SeP>2024-10-21 13:29:24<SeP>2024-10-23 00:49:57<SeP>2024-10-24 12:10:30<SeP>2024-10-25 23:31:03<SeP>2024-10-27 10:51:36<SeP>2024-10-28 22:12:09<SeP>2024-10-30 09:32:42<SeP>2024-10-31 20:53:15<SeP>2024-11-02 08:13:48<SeP>2024-11-03 18:34:21<SeP>2024-11-05 05:54:54<SeP>2024-11-06 17:15:27<SeP>2024-11-08 04:36:00<SeP>2024-11-09 15:56:33<SeP>2024-11-11 03:17:06<SeP>2024-11-12 14:37:39<SeP>2024-11-14 01:58:12<SeP>2024-11-15 13:18:45<SeP>2024-11-17 00:39:18<SeP>2024-11-18 11:59:51<SeP>2024-11-19 23:20:24<SeP>2024-11-21 10:40:57<SeP>2024-11-22 22:01:30<SeP>2024-11-24 09:22:03<SeP>2024-11-25 20:42:36<SeP>2024-11-27 08:03:09<SeP>2024-11-28 19:23:42<SeP>2024-11-30 06:44:15<SeP>2024-12-01 18:04:48<SeP>2024-12-03 05:25:21<SeP>2024-12-04 16:45:54<SeP>2024-12-06 04:06:27<SeP>2024-12-07 15:27:00<SeP>2024-12-09 02:47:33<SeP>2024-12-10 14:08:06<SeP>2024-12-12 01:28:39<SeP>2024-12-13 12:49:12<SeP>2024-12-15 00:09:45<SeP>2024-12-16 11:30:18<SeP>2024-12-17 22:50:51<SeP>2024-12-19 10:11:24<SeP>2024-12-20 21:31:57<SeP>2024-12-22 08:52:30<SeP>2024-12-23 20:13:03<SeP>2024-12-25 07:33:36<SeP>2024-12-26 18:54:09<SeP>2024-12-28 06:14:42<SeP>2024-12-29 17:35:15<SeP>2024-12-31 04:55:48<SeP>2025-01-01 16:16:21<SeP>2025-01-03 03:36:54<SeP>2025-01-04 14:57:27<SeP>2025-01-06 02:18:00<SeP>2025-01-07 13:38:33<SeP>2025-01-09 00:59:06<SeP>2025-01-10 12:19:39<SeP>2025-01-11 23:40:12<SeP>2025-01-13 11:00:45<SeP>2025-01-14 22:21:18<SeP>2025-01-16 09:41:51<SeP>2025-01-17 21:02:24<SeP>2025-01-19 08:22:57<SeP>2025-01-20 19:43:30<SeP>2025-01-22 07:04:03<SeP>2025-01-23 18:24:36<SeP>2025-01-25 05:45:09<SeP>2025-01-26 17:05:42<SeP>2025-01-28 04:26:15<SeP>2025-01-29 15:46:48<SeP>2025-01-31 03:07:21<SeP>2025-02-01 14:27:54<SeP>2025-02-03 01:48:27<SeP>2025-02-04 13:09:00<SeP>2025-02-06 00:29:33<SeP>2025-02-07 11:50:06<SeP>2025-02-08 23:10:39<SeP>2025-02-10 10:31:12<SeP>2025-02-11 21:51:45<SeP>2025-02-13 09:12:18<SeP>2025-02-14 20:32:51<SeP>2025-02-16 07:53:24<SeP>2025-02-17 19:13:57<SeP>2025-02-19 06:34:30<SeP>2025-02-20 17:55:03<SeP>2025-02-22 05:15:36<SeP>2025-02-23 16:36:09<SeP>2025-02-25 03:56:42<SeP>2025-02-26 15:17:15<SeP>2025-02-28 02:37:48<SeP>2025-03-01 13:58:21<SeP>2025-03-03 01:18:54<SeP>2025-03-04 12:39:27";
  const itemLabel       = "Escaneos";
  const itemData        = "771<SeP>1514<SeP>1366<SeP>1486<SeP>1228<SeP>1745<SeP>938<SeP>964<SeP>1167<SeP>3409<SeP>2810<SeP>1596<SeP>3285<SeP>909<SeP>760<SeP>911<SeP>1413<SeP>2915<SeP>1816<SeP>1175<SeP>1244<SeP>945<SeP>1028<SeP>1271<SeP>888<SeP>862<SeP>813<SeP>3796<SeP>711<SeP>978<SeP>988<SeP>1658<SeP>897<SeP>823<SeP>3167<SeP>2660<SeP>1934<SeP>1669<SeP>1814<SeP>1224<SeP>1600<SeP>1900<SeP>1996<SeP>1783<SeP>1672<SeP>1596<SeP>1725<SeP>1685<SeP>1768<SeP>1724<SeP>1823<SeP>1766<SeP>1757<SeP>3098<SeP>1323<SeP>1961<SeP>1823<SeP>2396<SeP>1548<SeP>2041<SeP>3259<SeP>1471<SeP>1465<SeP>1524<SeP>1510<SeP>1860<SeP>1585<SeP>1258<SeP>1439<SeP>1186<SeP>2383<SeP>1211<SeP>1159<SeP>1262<SeP>2408<SeP>7159<SeP>1187<SeP>1313<SeP>1440<SeP>2275<SeP>1289<SeP>1381<SeP>6486<SeP>1451<SeP>1612<SeP>978<SeP>3014<SeP>1591<SeP>1015<SeP>1132<SeP>1053<SeP>1052<SeP>3121<SeP>914<SeP>1078<SeP>2093<SeP>4526<SeP>4676<SeP>919<SeP>949<SeP>968<SeP>961<SeP>1036<SeP>811<SeP>1174<SeP>2896<SeP>2976<SeP>1574<SeP>1687<SeP>745<SeP>786<SeP>1399<SeP>1283<SeP>1092<SeP>1029<SeP>2257<SeP>1123<SeP>1129<SeP>1084<SeP>1052<SeP>952<SeP>815<SeP>857<SeP>843<SeP>793<SeP>1154<SeP>853<SeP>871<SeP>820<SeP>859<SeP>874<SeP>697<SeP>861<SeP>899<SeP>915<SeP>867<SeP>733<SeP>986<SeP>689<SeP>771<SeP>1135<SeP>730<SeP>942<SeP>973<SeP>876<SeP>1142<SeP>975<SeP>745<SeP>547<SeP>950<SeP>843<SeP>1300<SeP>879<SeP>1047<SeP>1215<SeP>1239<SeP>916<SeP>852<SeP>957<SeP>933<SeP>865<SeP>1056<SeP>862<SeP>983<SeP>897<SeP>1089<SeP>919<SeP>1122<SeP>984<SeP>1042<SeP>1105<SeP>896<SeP>918<SeP>2206<SeP>1225<SeP>1140<SeP>1081<SeP>1047<SeP>1141<SeP>937<SeP>851<SeP>722<SeP>896<SeP>1091<SeP>969<SeP>929<SeP>1106<SeP>1333<SeP>1027<SeP>1193<SeP>1270<SeP>1210<SeP>1284<SeP>1331<SeP>1294<SeP>1539<SeP>1940<SeP>1426<SeP>1207<SeP>764<SeP>1115<SeP>896<SeP>1083<SeP>576<SeP>803<SeP>999<SeP>851<SeP>3459<SeP>4627<SeP>2172<SeP>1707<SeP>1165<SeP>828<SeP>1036<SeP>949<SeP>949<SeP>1061<SeP>1062<SeP>1004<SeP>1039<SeP>2234<SeP>1258<SeP>1153<SeP>1217<SeP>1341<SeP>1087<SeP>1093<SeP>986<SeP>1139<SeP>1105<SeP>1012<SeP>1163<SeP>1079<SeP>1131<SeP>914<SeP>991<SeP>1399<SeP>1122<SeP>1058<SeP>1336<SeP>1273<SeP>1166<SeP>1571<SeP>1265<SeP>1098<SeP>1110<SeP>1235<SeP>1968<SeP>1333<SeP>1974<SeP>1759<SeP>1468<SeP>1921<SeP>1536<SeP>1132<SeP>1181<SeP>1389<SeP>1119<SeP>1537<SeP>1273<SeP>1247<SeP>1718<SeP>1679<SeP>1379<SeP>1484<SeP>1460<SeP>1263<SeP>1014<SeP>1136<SeP>1392<SeP>1087<SeP>1254<SeP>1445<SeP>1076<SeP>1511<SeP>1841<SeP>1344<SeP>1369<SeP>1557<SeP>1393<SeP>1053<SeP>1012<SeP>992<SeP>971<SeP>886<SeP>1010<SeP>1777<SeP>1158<SeP>1064<SeP>1128<SeP>964<SeP>779<SeP>1163<SeP>1331<SeP>850<SeP>924<SeP>948<SeP>1313<SeP>1622<SeP>1468<SeP>1063<SeP>1153<SeP>989<SeP>1842<SeP>1095<SeP>1185<SeP>1040<SeP>1243<SeP>1319<SeP>1012<SeP>951<SeP>1278<SeP>1000<SeP>970<SeP>843<SeP>1116<SeP>1554<SeP>1443<SeP>1702<SeP>1365<SeP>1020<SeP>1110<SeP>1091<SeP>1144<SeP>1174<SeP>1136<SeP>1062<SeP>1072<SeP>1216<SeP>1430<SeP>1438<SeP>1564<SeP>1483<SeP>1300<SeP>1509<SeP>1450<SeP>1549<SeP>1344<SeP>1438<SeP>1243<SeP>1840<SeP>1247<SeP>1508<SeP>1632<SeP>1298<SeP>1485<SeP>1239<SeP>1293<SeP>1300<SeP>1506<SeP>1647<SeP>1340<SeP>1221<SeP>1315<SeP>1345<SeP>1315<SeP>1143<SeP>1557<SeP>1843<SeP>1732<SeP>1171<SeP>606<SeP>1493<SeP>1905<SeP>1247<SeP>1343<SeP>1209<SeP>1142<SeP>1483<SeP>1298<SeP>1322<SeP>1502<SeP>1801<SeP>1298<SeP>1616<SeP>1767<SeP>1297<SeP>1395<SeP>1525<SeP>1772<SeP>1618<SeP>973<SeP>1116<SeP>2060<SeP>1908<SeP>1658<SeP>1787<SeP>1755<SeP>1474<SeP>1632<SeP>1613<SeP>1663<SeP>1479<SeP>1752<SeP>1796<SeP>1627<SeP>1432<SeP>1503<SeP>1457<SeP>1493";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:20:33<SeP>2023-07-28 22:41:06<SeP>2023-07-30 10:01:39<SeP>2023-07-31 21:22:12<SeP>2023-08-02 08:42:45<SeP>2023-08-03 20:03:18<SeP>2023-08-05 07:23:51<SeP>2023-08-06 18:44:24<SeP>2023-08-08 06:04:57<SeP>2023-08-09 17:25:30<SeP>2023-08-11 04:46:03<SeP>2023-08-12 16:06:36<SeP>2023-08-14 03:27:09<SeP>2023-08-15 14:47:42<SeP>2023-08-17 02:08:15<SeP>2023-08-18 13:28:48<SeP>2023-08-20 00:49:21<SeP>2023-08-21 12:09:54<SeP>2023-08-22 23:30:27<SeP>2023-08-24 10:51:00<SeP>2023-08-25 22:11:33<SeP>2023-08-27 09:32:06<SeP>2023-08-28 20:52:39<SeP>2023-08-30 08:13:12<SeP>2023-08-31 19:33:45<SeP>2023-09-02 06:54:18<SeP>2023-09-03 18:14:51<SeP>2023-09-05 05:35:24<SeP>2023-09-06 16:55:57<SeP>2023-09-08 04:16:30<SeP>2023-09-09 15:37:03<SeP>2023-09-11 02:57:36<SeP>2023-09-12 14:18:09<SeP>2023-09-14 01:38:42<SeP>2023-09-15 12:59:15<SeP>2023-09-17 00:19:48<SeP>2023-09-18 11:40:21<SeP>2023-09-19 23:00:54<SeP>2023-09-21 10:21:27<SeP>2023-09-22 21:42:00<SeP>2023-09-24 09:02:33<SeP>2023-09-25 20:23:06<SeP>2023-09-27 07:43:39<SeP>2023-09-28 19:04:12<SeP>2023-09-30 06:24:45<SeP>2023-10-01 17:45:18<SeP>2023-10-03 05:05:51<SeP>2023-10-04 16:26:24<SeP>2023-10-06 03:46:57<SeP>2023-10-07 15:07:30<SeP>2023-10-09 02:28:03<SeP>2023-10-10 13:48:36<SeP>2023-10-12 01:09:09<SeP>2023-10-13 12:29:42<SeP>2023-10-14 23:50:15<SeP>2023-10-16 11:10:48<SeP>2023-10-17 22:31:21<SeP>2023-10-19 09:51:54<SeP>2023-10-20 21:12:27<SeP>2023-10-22 08:33:00<SeP>2023-10-23 19:53:33<SeP>2023-10-25 07:14:06<SeP>2023-10-26 18:34:39<SeP>2023-10-28 05:55:12<SeP>2023-10-29 17:15:45<SeP>2023-10-31 04:36:18<SeP>2023-11-01 15:56:51<SeP>2023-11-03 03:17:24<SeP>2023-11-04 14:37:57<SeP>2023-11-06 00:58:30<SeP>2023-11-07 12:19:03<SeP>2023-11-08 23:39:36<SeP>2023-11-10 11:00:09<SeP>2023-11-11 22:20:42<SeP>2023-11-13 09:41:15<SeP>2023-11-14 21:01:48<SeP>2023-11-16 08:22:21<SeP>2023-11-17 19:42:54<SeP>2023-11-19 07:03:27<SeP>2023-11-20 18:24:00<SeP>2023-11-22 05:44:33<SeP>2023-11-23 17:05:06<SeP>2023-11-25 04:25:39<SeP>2023-11-26 15:46:12<SeP>2023-11-28 03:06:45<SeP>2023-11-29 14:27:18<SeP>2023-12-01 01:47:51<SeP>2023-12-02 13:08:24<SeP>2023-12-04 00:28:57<SeP>2023-12-05 11:49:30<SeP>2023-12-06 23:10:03<SeP>2023-12-08 10:30:36<SeP>2023-12-09 21:51:09<SeP>2023-12-11 09:11:42<SeP>2023-12-12 20:32:15<SeP>2023-12-14 07:52:48<SeP>2023-12-15 19:13:21<SeP>2023-12-17 06:33:54<SeP>2023-12-18 17:54:27<SeP>2023-12-20 05:15:00<SeP>2023-12-21 16:35:33<SeP>2023-12-23 03:56:06<SeP>2023-12-24 15:16:39<SeP>2023-12-26 02:37:12<SeP>2023-12-27 13:57:45<SeP>2023-12-29 01:18:18<SeP>2023-12-30 12:38:51<SeP>2023-12-31 23:59:24<SeP>2024-01-02 11:19:57<SeP>2024-01-03 22:40:30<SeP>2024-01-05 10:01:03<SeP>2024-01-06 21:21:36<SeP>2024-01-08 08:42:09<SeP>2024-01-09 20:02:42<SeP>2024-01-11 07:23:15<SeP>2024-01-12 18:43:48<SeP>2024-01-14 06:04:21<SeP>2024-01-15 17:24:54<SeP>2024-01-17 04:45:27<SeP>2024-01-18 16:06:00<SeP>2024-01-20 03:26:33<SeP>2024-01-21 14:47:06<SeP>2024-01-23 02:07:39<SeP>2024-01-24 13:28:12<SeP>2024-01-26 00:48:45<SeP>2024-01-27 12:09:18<SeP>2024-01-28 23:29:51<SeP>2024-01-30 10:50:24<SeP>2024-01-31 22:10:57<SeP>2024-02-02 09:31:30<SeP>2024-02-03 20:52:03<SeP>2024-02-05 08:12:36<SeP>2024-02-06 19:33:09<SeP>2024-02-08 06:53:42<SeP>2024-02-09 18:14:15<SeP>2024-02-11 05:34:48<SeP>2024-02-12 16:55:21<SeP>2024-02-14 04:15:54<SeP>2024-02-15 15:36:27<SeP>2024-02-17 02:57:00<SeP>2024-02-18 14:17:33<SeP>2024-02-20 01:38:06<SeP>2024-02-21 12:58:39<SeP>2024-02-23 00:19:12<SeP>2024-02-24 11:39:45<SeP>2024-02-25 23:00:18<SeP>2024-02-27 10:20:51<SeP>2024-02-28 21:41:24<SeP>2024-03-01 09:01:57<SeP>2024-03-02 20:22:30<SeP>2024-03-04 07:43:03<SeP>2024-03-05 19:03:36<SeP>2024-03-07 06:24:09<SeP>2024-03-08 17:44:42<SeP>2024-03-10 06:05:15<SeP>2024-03-11 17:25:48<SeP>2024-03-13 04:46:21<SeP>2024-03-14 16:06:54<SeP>2024-03-16 03:27:27<SeP>2024-03-17 14:48:00<SeP>2024-03-19 02:08:33<SeP>2024-03-20 13:29:06<SeP>2024-03-22 00:49:39<SeP>2024-03-23 12:10:12<SeP>2024-03-24 23:30:45<SeP>2024-03-26 10:51:18<SeP>2024-03-27 22:11:51<SeP>2024-03-29 09:32:24<SeP>2024-03-30 20:52:57<SeP>2024-04-01 08:13:30<SeP>2024-04-02 19:34:03<SeP>2024-04-04 06:54:36<SeP>2024-04-05 18:15:09<SeP>2024-04-07 05:35:42<SeP>2024-04-08 16:56:15<SeP>2024-04-10 04:16:48<SeP>2024-04-11 15:37:21<SeP>2024-04-13 02:57:54<SeP>2024-04-14 14:18:27<SeP>2024-04-16 01:39:00<SeP>2024-04-17 12:59:33<SeP>2024-04-19 00:20:06<SeP>2024-04-20 11:40:39<SeP>2024-04-21 23:01:12<SeP>2024-04-23 10:21:45<SeP>2024-04-24 21:42:18<SeP>2024-04-26 09:02:51<SeP>2024-04-27 20:23:24<SeP>2024-04-29 07:43:57<SeP>2024-04-30 19:04:30<SeP>2024-05-02 06:25:03<SeP>2024-05-03 17:45:36<SeP>2024-05-05 05:06:09<SeP>2024-05-06 16:26:42<SeP>2024-05-08 03:47:15<SeP>2024-05-09 15:07:48<SeP>2024-05-11 02:28:21<SeP>2024-05-12 13:48:54<SeP>2024-05-14 01:09:27<SeP>2024-05-15 12:30:00<SeP>2024-05-16 23:50:33<SeP>2024-05-18 11:11:06<SeP>2024-05-19 22:31:39<SeP>2024-05-21 09:52:12<SeP>2024-05-22 21:12:45<SeP>2024-05-24 08:33:18<SeP>2024-05-25 19:53:51<SeP>2024-05-27 07:14:24<SeP>2024-05-28 18:34:57<SeP>2024-05-30 05:55:30<SeP>2024-05-31 17:16:03<SeP>2024-06-02 04:36:36<SeP>2024-06-03 15:57:09<SeP>2024-06-05 03:17:42<SeP>2024-06-06 14:38:15<SeP>2024-06-08 01:58:48<SeP>2024-06-09 13:19:21<SeP>2024-06-11 00:39:54<SeP>2024-06-12 12:00:27<SeP>2024-06-13 23:21:00<SeP>2024-06-15 10:41:33<SeP>2024-06-16 22:02:06<SeP>2024-06-18 09:22:39<SeP>2024-06-19 20:43:12<SeP>2024-06-21 08:03:45<SeP>2024-06-22 19:24:18<SeP>2024-06-24 06:44:51<SeP>2024-06-25 18:05:24<SeP>2024-06-27 05:25:57<SeP>2024-06-28 16:46:30<SeP>2024-06-30 04:07:03<SeP>2024-07-01 15:27:36<SeP>2024-07-03 02:48:09<SeP>2024-07-04 14:08:42<SeP>2024-07-06 01:29:15<SeP>2024-07-07 12:49:48<SeP>2024-07-09 00:10:21<SeP>2024-07-10 11:30:54<SeP>2024-07-11 22:51:27<SeP>2024-07-13 10:12:00<SeP>2024-07-14 21:32:33<SeP>2024-07-16 08:53:06<SeP>2024-07-17 20:13:39<SeP>2024-07-19 07:34:12<SeP>2024-07-20 18:54:45<SeP>2024-07-22 06:15:18<SeP>2024-07-23 17:35:51<SeP>2024-07-25 04:56:24<SeP>2024-07-26 16:16:57<SeP>2024-07-28 03:37:30<SeP>2024-07-29 14:58:03<SeP>2024-07-31 02:18:36<SeP>2024-08-01 13:39:09<SeP>2024-08-03 00:59:42<SeP>2024-08-04 12:20:15<SeP>2024-08-05 23:40:48<SeP>2024-08-07 11:01:21<SeP>2024-08-08 22:21:54<SeP>2024-08-10 09:42:27<SeP>2024-08-11 21:03:00<SeP>2024-08-13 08:23:33<SeP>2024-08-14 19:44:06<SeP>2024-08-16 07:04:39<SeP>2024-08-17 18:25:12<SeP>2024-08-19 05:45:45<SeP>2024-08-20 17:06:18<SeP>2024-08-22 04:26:51<SeP>2024-08-23 15:47:24<SeP>2024-08-25 03:07:57<SeP>2024-08-26 14:28:30<SeP>2024-08-28 01:49:03<SeP>2024-08-29 13:09:36<SeP>2024-08-31 00:30:09<SeP>2024-09-01 11:50:42<SeP>2024-09-02 23:11:15<SeP>2024-09-04 10:31:48<SeP>2024-09-05 21:52:21<SeP>2024-09-07 09:12:54<SeP>2024-09-08 20:33:27<SeP>2024-09-10 07:54:00<SeP>2024-09-11 19:14:33<SeP>2024-09-13 06:35:06<SeP>2024-09-14 17:55:39<SeP>2024-09-16 05:16:12<SeP>2024-09-17 16:36:45<SeP>2024-09-19 03:57:18<SeP>2024-09-20 15:17:51<SeP>2024-09-22 02:38:24<SeP>2024-09-23 13:58:57<SeP>2024-09-25 01:19:30<SeP>2024-09-26 12:40:03<SeP>2024-09-28 00:00:36<SeP>2024-09-29 11:21:09<SeP>2024-09-30 22:41:42<SeP>2024-10-02 10:02:15<SeP>2024-10-03 21:22:48<SeP>2024-10-05 08:43:21<SeP>2024-10-06 20:03:54<SeP>2024-10-08 07:24:27<SeP>2024-10-09 18:45:00<SeP>2024-10-11 06:05:33<SeP>2024-10-12 17:26:06<SeP>2024-10-14 04:46:39<SeP>2024-10-15 16:07:12<SeP>2024-10-17 03:27:45<SeP>2024-10-18 14:48:18<SeP>2024-10-20 02:08:51<SeP>2024-10-21 13:29:24<SeP>2024-10-23 00:49:57<SeP>2024-10-24 12:10:30<SeP>2024-10-25 23:31:03<SeP>2024-10-27 10:51:36<SeP>2024-10-28 22:12:09<SeP>2024-10-30 09:32:42<SeP>2024-10-31 20:53:15<SeP>2024-11-02 08:13:48<SeP>2024-11-03 18:34:21<SeP>2024-11-05 05:54:54<SeP>2024-11-06 17:15:27<SeP>2024-11-08 04:36:00<SeP>2024-11-09 15:56:33<SeP>2024-11-11 03:17:06<SeP>2024-11-12 14:37:39<SeP>2024-11-14 01:58:12<SeP>2024-11-15 13:18:45<SeP>2024-11-17 00:39:18<SeP>2024-11-18 11:59:51<SeP>2024-11-19 23:20:24<SeP>2024-11-21 10:40:57<SeP>2024-11-22 22:01:30<SeP>2024-11-24 09:22:03<SeP>2024-11-25 20:42:36<SeP>2024-11-27 08:03:09<SeP>2024-11-28 19:23:42<SeP>2024-11-30 06:44:15<SeP>2024-12-01 18:04:48<SeP>2024-12-03 05:25:21<SeP>2024-12-04 16:45:54<SeP>2024-12-06 04:06:27<SeP>2024-12-07 15:27:00<SeP>2024-12-09 02:47:33<SeP>2024-12-10 14:08:06<SeP>2024-12-12 01:28:39<SeP>2024-12-13 12:49:12<SeP>2024-12-15 00:09:45<SeP>2024-12-16 11:30:18<SeP>2024-12-17 22:50:51<SeP>2024-12-19 10:11:24<SeP>2024-12-20 21:31:57<SeP>2024-12-22 08:52:30<SeP>2024-12-23 20:13:03<SeP>2024-12-25 07:33:36<SeP>2024-12-26 18:54:09<SeP>2024-12-28 06:14:42<SeP>2024-12-29 17:35:15<SeP>2024-12-31 04:55:48<SeP>2025-01-01 16:16:21<SeP>2025-01-03 03:36:54<SeP>2025-01-04 14:57:27<SeP>2025-01-06 02:18:00<SeP>2025-01-07 13:38:33<SeP>2025-01-09 00:59:06<SeP>2025-01-10 12:19:39<SeP>2025-01-11 23:40:12<SeP>2025-01-13 11:00:45<SeP>2025-01-14 22:21:18<SeP>2025-01-16 09:41:51<SeP>2025-01-17 21:02:24<SeP>2025-01-19 08:22:57<SeP>2025-01-20 19:43:30<SeP>2025-01-22 07:04:03<SeP>2025-01-23 18:24:36<SeP>2025-01-25 05:45:09<SeP>2025-01-26 17:05:42<SeP>2025-01-28 04:26:15<SeP>2025-01-29 15:46:48<SeP>2025-01-31 03:07:21<SeP>2025-02-01 14:27:54<SeP>2025-02-03 01:48:27<SeP>2025-02-04 13:09:00<SeP>2025-02-06 00:29:33<SeP>2025-02-07 11:50:06<SeP>2025-02-08 23:10:39<SeP>2025-02-10 10:31:12<SeP>2025-02-11 21:51:45<SeP>2025-02-13 09:12:18<SeP>2025-02-14 20:32:51<SeP>2025-02-16 07:53:24<SeP>2025-02-17 19:13:57<SeP>2025-02-19 06:34:30<SeP>2025-02-20 17:55:03<SeP>2025-02-22 05:15:36<SeP>2025-02-23 16:36:09<SeP>2025-02-25 03:56:42<SeP>2025-02-26 15:17:15<SeP>2025-02-28 02:37:48<SeP>2025-03-01 13:58:21<SeP>2025-03-03 01:18:54<SeP>2025-03-04 12:39:27";
  const itemLabel       = "Ataques";
  const itemData        = "155<SeP>614<SeP>1294<SeP>758<SeP>219<SeP>238<SeP>6991<SeP>557<SeP>9470<SeP>568<SeP>396<SeP>1132<SeP>1292<SeP>240<SeP>177<SeP>445<SeP>114<SeP>751<SeP>332<SeP>6997<SeP>7413<SeP>6593<SeP>8735<SeP>3791<SeP>254<SeP>353<SeP>267<SeP>386<SeP>5733<SeP>287<SeP>361<SeP>134<SeP>493<SeP>326<SeP>7456<SeP>10040<SeP>9722<SeP>10257<SeP>7033<SeP>5146<SeP>8871<SeP>7298<SeP>8865<SeP>8814<SeP>7809<SeP>8034<SeP>9086<SeP>8006<SeP>9221<SeP>5739<SeP>5841<SeP>12869<SeP>6787<SeP>7026<SeP>8385<SeP>10030<SeP>18491<SeP>16000<SeP>9298<SeP>10788<SeP>7565<SeP>7995<SeP>9006<SeP>8769<SeP>8503<SeP>7036<SeP>6614<SeP>6882<SeP>6847<SeP>4908<SeP>4646<SeP>6535<SeP>5516<SeP>6390<SeP>7536<SeP>5312<SeP>5455<SeP>5506<SeP>6978<SeP>4773<SeP>7088<SeP>4814<SeP>5903<SeP>6488<SeP>5953<SeP>5740<SeP>5441<SeP>14408<SeP>17597<SeP>36173<SeP>6965<SeP>9215<SeP>5304<SeP>6945<SeP>12582<SeP>6218<SeP>6268<SeP>3937<SeP>4810<SeP>6026<SeP>5212<SeP>8995<SeP>5376<SeP>6722<SeP>5101<SeP>5370<SeP>8639<SeP>8209<SeP>7544<SeP>6152<SeP>4096<SeP>10737<SeP>9242<SeP>5511<SeP>3228<SeP>6363<SeP>9047<SeP>5643<SeP>6771<SeP>9666<SeP>4693<SeP>2178<SeP>1570<SeP>1976<SeP>1794<SeP>2277<SeP>1087<SeP>1417<SeP>495<SeP>1422<SeP>1523<SeP>1188<SeP>872<SeP>1081<SeP>1062<SeP>782<SeP>1438<SeP>1510<SeP>1176<SeP>1315<SeP>2316<SeP>1464<SeP>9085<SeP>7900<SeP>10464<SeP>8402<SeP>6071<SeP>11091<SeP>7640<SeP>8345<SeP>9684<SeP>10523<SeP>11426<SeP>7819<SeP>12821<SeP>14229<SeP>7096<SeP>10393<SeP>4891<SeP>5806<SeP>7957<SeP>24380<SeP>6330<SeP>8812<SeP>10589<SeP>17245<SeP>6899<SeP>6427<SeP>6677<SeP>7298<SeP>25123<SeP>8647<SeP>8361<SeP>11675<SeP>4654<SeP>7051<SeP>4576<SeP>16979<SeP>5436<SeP>12132<SeP>8399<SeP>6624<SeP>8321<SeP>7595<SeP>4079<SeP>5471<SeP>5767<SeP>7799<SeP>6081<SeP>6362<SeP>7346<SeP>18683<SeP>6913<SeP>8664<SeP>5564<SeP>7413<SeP>9336<SeP>8464<SeP>5834<SeP>2909<SeP>7645<SeP>2772<SeP>5293<SeP>4102<SeP>663<SeP>123<SeP>637<SeP>195<SeP>603<SeP>1065<SeP>362<SeP>594<SeP>1028<SeP>1375<SeP>3195<SeP>21750<SeP>1746<SeP>2659<SeP>3716<SeP>3637<SeP>2993<SeP>7175<SeP>4390<SeP>2136<SeP>3888<SeP>2957<SeP>3049<SeP>3902<SeP>3327<SeP>2361<SeP>3556<SeP>2052<SeP>2031<SeP>1750<SeP>1555<SeP>962<SeP>1695<SeP>955<SeP>1631<SeP>1744<SeP>26491<SeP>1806<SeP>4124<SeP>3774<SeP>1921<SeP>4309<SeP>2064<SeP>2266<SeP>3447<SeP>2864<SeP>3419<SeP>2108<SeP>3825<SeP>2835<SeP>5848<SeP>5789<SeP>3958<SeP>3761<SeP>2575<SeP>3279<SeP>4305<SeP>4476<SeP>9937<SeP>5147<SeP>2485<SeP>3266<SeP>2396<SeP>4365<SeP>3794<SeP>3782<SeP>2651<SeP>3436<SeP>5276<SeP>3920<SeP>5787<SeP>4246<SeP>6724<SeP>4827<SeP>5239<SeP>4735<SeP>22104<SeP>5906<SeP>10841<SeP>1740<SeP>2953<SeP>4379<SeP>3666<SeP>5185<SeP>3499<SeP>4793<SeP>4577<SeP>4827<SeP>3101<SeP>4246<SeP>1971<SeP>1493<SeP>2103<SeP>3981<SeP>2272<SeP>3039<SeP>3476<SeP>4728<SeP>3582<SeP>3404<SeP>4300<SeP>3374<SeP>3259<SeP>6122<SeP>7875<SeP>6148<SeP>4589<SeP>4998<SeP>4368<SeP>3832<SeP>4029<SeP>3955<SeP>6984<SeP>5180<SeP>4413<SeP>3100<SeP>1144<SeP>1144<SeP>1749<SeP>1297<SeP>1235<SeP>1695<SeP>1569<SeP>1428<SeP>3355<SeP>4619<SeP>6391<SeP>34397<SeP>5060<SeP>4430<SeP>21080<SeP>8359<SeP>5220<SeP>6081<SeP>4606<SeP>24519<SeP>4837<SeP>5106<SeP>5137<SeP>5441<SeP>6621<SeP>28851<SeP>4801<SeP>3630<SeP>4331<SeP>4472<SeP>6007<SeP>4180<SeP>3085<SeP>3249<SeP>4549<SeP>5750<SeP>4264<SeP>17946<SeP>5640<SeP>6660<SeP>4894<SeP>1559<SeP>3831<SeP>4851<SeP>3699<SeP>4198<SeP>2779<SeP>3850<SeP>2582<SeP>4130<SeP>3953<SeP>7579<SeP>10059<SeP>8800<SeP>8454<SeP>9355<SeP>7515<SeP>6008<SeP>5197<SeP>4577<SeP>20720<SeP>8429<SeP>3310<SeP>4652<SeP>3232<SeP>11469<SeP>5724<SeP>3658<SeP>4944<SeP>4321<SeP>2760<SeP>9470<SeP>9978<SeP>4378<SeP>3065<SeP>3408<SeP>2264<SeP>2554<SeP>2512<SeP>2011";
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
  const itemData    = "696347<SeP>366420<SeP>206640<SeP>180333<SeP>110617<SeP>88241<SeP>83961<SeP>80987<SeP>68234<SeP>67628";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "298328<SeP>41430<SeP>40720<SeP>36183<SeP>14566<SeP>11123<SeP>8239<SeP>7983<SeP>7213<SeP>7128";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "398019<SeP>330237<SeP>203597<SeP>139613<SeP>96051<SeP>81277<SeP>81028<SeP>69864<SeP>59645<SeP>58700";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "363551<SeP>259557<SeP>237513<SeP>143857<SeP>67462<SeP>59852<SeP>56827<SeP>53304<SeP>41621<SeP>36268";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "157182<SeP>53580<SeP>40499<SeP>32601<SeP>21915<SeP>12868<SeP>10854<SeP>8097<SeP>7614<SeP>7468";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "350683<SeP>258790<SeP>121942<SeP>80331<SeP>55816<SeP>48998<SeP>47218<SeP>30610<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "696347<SeP>366420<SeP>206640<SeP>180333<SeP>110617<SeP>88241<SeP>83961<SeP>80987<SeP>68234<SeP>67628";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Hong Kong<SeP>Taiwan<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "298328<SeP>41430<SeP>40720<SeP>36183<SeP>14566<SeP>11123<SeP>8239<SeP>7983<SeP>7213<SeP>7128";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Indonesia<SeP>Germany<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "398019<SeP>330237<SeP>203597<SeP>139613<SeP>96051<SeP>81277<SeP>81028<SeP>69864<SeP>59645<SeP>58700";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "363551<SeP>259557<SeP>237513<SeP>143857<SeP>67462<SeP>59852<SeP>56827<SeP>53304<SeP>41621<SeP>36268";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "157182<SeP>53580<SeP>40499<SeP>32601<SeP>21915<SeP>12868<SeP>10854<SeP>8097<SeP>7614<SeP>7468";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "350683<SeP>258790<SeP>121942<SeP>80331<SeP>55816<SeP>48998<SeP>47218<SeP>30610<SeP>29324<SeP>26846";
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
