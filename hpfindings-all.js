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
  document.getElementById("last-updated").innerHTML = "2025-3-1";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.0";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.0";
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
  const metricData    = "2829007";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "548695";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2280312";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139369";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1431747";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "848565";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54006";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "248366";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "600199";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43328";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2829007";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "548695";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2280312";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139369";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1431747";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "848565";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54006";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "248366";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "600199";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43328";
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
  const incomingData = "2829007<SeP>548695<SeP>2280312<SeP>139369";
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
  const incomingData = "2280312<SeP>1431747<SeP>848565<SeP>54006";
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
  const incomingData = "848565<SeP>248366<SeP>600199<SeP>43328";
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
  const incomingData = "2559078<SeP>256237<SeP>2302841";
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
  const incomingData = "388195<SeP>149<SeP>388046<SeP>226";
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
  const incomingData = "2829007<SeP>548695<SeP>2280312<SeP>139369";
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
  const incomingData = "2280312<SeP>1431747<SeP>848565<SeP>54006";
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
  const incomingData = "848565<SeP>248366<SeP>600199<SeP>43328";
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
  const incomingData = "2559078<SeP>256237<SeP>2302841";
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
  const incomingData = "388195<SeP>149<SeP>388046<SeP>226";
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
  const column3Data   = "219855<SeP>201391<SeP>12458<SeP>12410<SeP>9743<SeP>9440<SeP>6446<SeP>5593<SeP>4629<SeP>3495";
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
  const column2Data  = "211171<SeP>43091<SeP>732<SeP>485<SeP>454<SeP>435<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2396887<SeP>432120";
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
  const column3Data   = "219855<SeP>201391<SeP>12458<SeP>12410<SeP>9743<SeP>9440<SeP>6446<SeP>5593<SeP>4629<SeP>3495";
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
  const column2Data  = "211171<SeP>43091<SeP>732<SeP>485<SeP>454<SeP>435<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2396887<SeP>432120";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-1";

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
        "name": "traffic between 2023-07-26 and 2025-02-27"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          364324,50
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
        "name": "scans between 2023-07-26 and 2025-02-27"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225642,32,
          364324,50
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
        "name": "attacks between 2023-07-26 and 2025-02-27"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138682,21,
          364324,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-1";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-27"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          364324,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-27"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225642,32,
          364324,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-27"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138682,21,
          364324,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:02:33<SeP>2023-07-28 22:05:06<SeP>2023-07-30 09:07:39<SeP>2023-07-31 20:10:12<SeP>2023-08-02 07:12:45<SeP>2023-08-03 18:15:18<SeP>2023-08-05 05:17:51<SeP>2023-08-06 16:20:24<SeP>2023-08-08 03:22:57<SeP>2023-08-09 14:25:30<SeP>2023-08-11 01:28:03<SeP>2023-08-12 12:30:36<SeP>2023-08-13 23:33:09<SeP>2023-08-15 10:35:42<SeP>2023-08-16 21:38:15<SeP>2023-08-18 08:40:48<SeP>2023-08-19 19:43:21<SeP>2023-08-21 06:45:54<SeP>2023-08-22 17:48:27<SeP>2023-08-24 04:51:00<SeP>2023-08-25 15:53:33<SeP>2023-08-27 02:56:06<SeP>2023-08-28 13:58:39<SeP>2023-08-30 01:01:12<SeP>2023-08-31 12:03:45<SeP>2023-09-01 23:06:18<SeP>2023-09-03 10:08:51<SeP>2023-09-04 21:11:24<SeP>2023-09-06 08:13:57<SeP>2023-09-07 19:16:30<SeP>2023-09-09 06:19:03<SeP>2023-09-10 17:21:36<SeP>2023-09-12 04:24:09<SeP>2023-09-13 15:26:42<SeP>2023-09-15 02:29:15<SeP>2023-09-16 13:31:48<SeP>2023-09-18 00:34:21<SeP>2023-09-19 11:36:54<SeP>2023-09-20 22:39:27<SeP>2023-09-22 09:42:00<SeP>2023-09-23 20:44:33<SeP>2023-09-25 07:47:06<SeP>2023-09-26 18:49:39<SeP>2023-09-28 05:52:12<SeP>2023-09-29 16:54:45<SeP>2023-10-01 03:57:18<SeP>2023-10-02 14:59:51<SeP>2023-10-04 02:02:24<SeP>2023-10-05 13:04:57<SeP>2023-10-07 00:07:30<SeP>2023-10-08 11:10:03<SeP>2023-10-09 22:12:36<SeP>2023-10-11 09:15:09<SeP>2023-10-12 20:17:42<SeP>2023-10-14 07:20:15<SeP>2023-10-15 18:22:48<SeP>2023-10-17 05:25:21<SeP>2023-10-18 16:27:54<SeP>2023-10-20 03:30:27<SeP>2023-10-21 14:33:00<SeP>2023-10-23 01:35:33<SeP>2023-10-24 12:38:06<SeP>2023-10-25 23:40:39<SeP>2023-10-27 10:43:12<SeP>2023-10-28 21:45:45<SeP>2023-10-30 08:48:18<SeP>2023-10-31 19:50:51<SeP>2023-11-02 06:53:24<SeP>2023-11-03 17:55:57<SeP>2023-11-05 03:58:30<SeP>2023-11-06 15:01:03<SeP>2023-11-08 02:03:36<SeP>2023-11-09 13:06:09<SeP>2023-11-11 00:08:42<SeP>2023-11-12 11:11:15<SeP>2023-11-13 22:13:48<SeP>2023-11-15 09:16:21<SeP>2023-11-16 20:18:54<SeP>2023-11-18 07:21:27<SeP>2023-11-19 18:24:00<SeP>2023-11-21 05:26:33<SeP>2023-11-22 16:29:06<SeP>2023-11-24 03:31:39<SeP>2023-11-25 14:34:12<SeP>2023-11-27 01:36:45<SeP>2023-11-28 12:39:18<SeP>2023-11-29 23:41:51<SeP>2023-12-01 10:44:24<SeP>2023-12-02 21:46:57<SeP>2023-12-04 08:49:30<SeP>2023-12-05 19:52:03<SeP>2023-12-07 06:54:36<SeP>2023-12-08 17:57:09<SeP>2023-12-10 04:59:42<SeP>2023-12-11 16:02:15<SeP>2023-12-13 03:04:48<SeP>2023-12-14 14:07:21<SeP>2023-12-16 01:09:54<SeP>2023-12-17 12:12:27<SeP>2023-12-18 23:15:00<SeP>2023-12-20 10:17:33<SeP>2023-12-21 21:20:06<SeP>2023-12-23 08:22:39<SeP>2023-12-24 19:25:12<SeP>2023-12-26 06:27:45<SeP>2023-12-27 17:30:18<SeP>2023-12-29 04:32:51<SeP>2023-12-30 15:35:24<SeP>2024-01-01 02:37:57<SeP>2024-01-02 13:40:30<SeP>2024-01-04 00:43:03<SeP>2024-01-05 11:45:36<SeP>2024-01-06 22:48:09<SeP>2024-01-08 09:50:42<SeP>2024-01-09 20:53:15<SeP>2024-01-11 07:55:48<SeP>2024-01-12 18:58:21<SeP>2024-01-14 06:00:54<SeP>2024-01-15 17:03:27<SeP>2024-01-17 04:06:00<SeP>2024-01-18 15:08:33<SeP>2024-01-20 02:11:06<SeP>2024-01-21 13:13:39<SeP>2024-01-23 00:16:12<SeP>2024-01-24 11:18:45<SeP>2024-01-25 22:21:18<SeP>2024-01-27 09:23:51<SeP>2024-01-28 20:26:24<SeP>2024-01-30 07:28:57<SeP>2024-01-31 18:31:30<SeP>2024-02-02 05:34:03<SeP>2024-02-03 16:36:36<SeP>2024-02-05 03:39:09<SeP>2024-02-06 14:41:42<SeP>2024-02-08 01:44:15<SeP>2024-02-09 12:46:48<SeP>2024-02-10 23:49:21<SeP>2024-02-12 10:51:54<SeP>2024-02-13 21:54:27<SeP>2024-02-15 08:57:00<SeP>2024-02-16 19:59:33<SeP>2024-02-18 07:02:06<SeP>2024-02-19 18:04:39<SeP>2024-02-21 05:07:12<SeP>2024-02-22 16:09:45<SeP>2024-02-24 03:12:18<SeP>2024-02-25 14:14:51<SeP>2024-02-27 01:17:24<SeP>2024-02-28 12:19:57<SeP>2024-02-29 23:22:30<SeP>2024-03-02 10:25:03<SeP>2024-03-03 21:27:36<SeP>2024-03-05 08:30:09<SeP>2024-03-06 19:32:42<SeP>2024-03-08 06:35:15<SeP>2024-03-09 17:37:48<SeP>2024-03-11 05:40:21<SeP>2024-03-12 16:42:54<SeP>2024-03-14 03:45:27<SeP>2024-03-15 14:48:00<SeP>2024-03-17 01:50:33<SeP>2024-03-18 12:53:06<SeP>2024-03-19 23:55:39<SeP>2024-03-21 10:58:12<SeP>2024-03-22 22:00:45<SeP>2024-03-24 09:03:18<SeP>2024-03-25 20:05:51<SeP>2024-03-27 07:08:24<SeP>2024-03-28 18:10:57<SeP>2024-03-30 05:13:30<SeP>2024-03-31 16:16:03<SeP>2024-04-02 03:18:36<SeP>2024-04-03 14:21:09<SeP>2024-04-05 01:23:42<SeP>2024-04-06 12:26:15<SeP>2024-04-07 23:28:48<SeP>2024-04-09 10:31:21<SeP>2024-04-10 21:33:54<SeP>2024-04-12 08:36:27<SeP>2024-04-13 19:39:00<SeP>2024-04-15 06:41:33<SeP>2024-04-16 17:44:06<SeP>2024-04-18 04:46:39<SeP>2024-04-19 15:49:12<SeP>2024-04-21 02:51:45<SeP>2024-04-22 13:54:18<SeP>2024-04-24 00:56:51<SeP>2024-04-25 11:59:24<SeP>2024-04-26 23:01:57<SeP>2024-04-28 10:04:30<SeP>2024-04-29 21:07:03<SeP>2024-05-01 08:09:36<SeP>2024-05-02 19:12:09<SeP>2024-05-04 06:14:42<SeP>2024-05-05 17:17:15<SeP>2024-05-07 04:19:48<SeP>2024-05-08 15:22:21<SeP>2024-05-10 02:24:54<SeP>2024-05-11 13:27:27<SeP>2024-05-13 00:30:00<SeP>2024-05-14 11:32:33<SeP>2024-05-15 22:35:06<SeP>2024-05-17 09:37:39<SeP>2024-05-18 20:40:12<SeP>2024-05-20 07:42:45<SeP>2024-05-21 18:45:18<SeP>2024-05-23 05:47:51<SeP>2024-05-24 16:50:24<SeP>2024-05-26 03:52:57<SeP>2024-05-27 14:55:30<SeP>2024-05-29 01:58:03<SeP>2024-05-30 13:00:36<SeP>2024-06-01 00:03:09<SeP>2024-06-02 11:05:42<SeP>2024-06-03 22:08:15<SeP>2024-06-05 09:10:48<SeP>2024-06-06 20:13:21<SeP>2024-06-08 07:15:54<SeP>2024-06-09 18:18:27<SeP>2024-06-11 05:21:00<SeP>2024-06-12 16:23:33<SeP>2024-06-14 03:26:06<SeP>2024-06-15 14:28:39<SeP>2024-06-17 01:31:12<SeP>2024-06-18 12:33:45<SeP>2024-06-19 23:36:18<SeP>2024-06-21 10:38:51<SeP>2024-06-22 21:41:24<SeP>2024-06-24 08:43:57<SeP>2024-06-25 19:46:30<SeP>2024-06-27 06:49:03<SeP>2024-06-28 17:51:36<SeP>2024-06-30 04:54:09<SeP>2024-07-01 15:56:42<SeP>2024-07-03 02:59:15<SeP>2024-07-04 14:01:48<SeP>2024-07-06 01:04:21<SeP>2024-07-07 12:06:54<SeP>2024-07-08 23:09:27<SeP>2024-07-10 10:12:00<SeP>2024-07-11 21:14:33<SeP>2024-07-13 08:17:06<SeP>2024-07-14 19:19:39<SeP>2024-07-16 06:22:12<SeP>2024-07-17 17:24:45<SeP>2024-07-19 04:27:18<SeP>2024-07-20 15:29:51<SeP>2024-07-22 02:32:24<SeP>2024-07-23 13:34:57<SeP>2024-07-25 00:37:30<SeP>2024-07-26 11:40:03<SeP>2024-07-27 22:42:36<SeP>2024-07-29 09:45:09<SeP>2024-07-30 20:47:42<SeP>2024-08-01 07:50:15<SeP>2024-08-02 18:52:48<SeP>2024-08-04 05:55:21<SeP>2024-08-05 16:57:54<SeP>2024-08-07 04:00:27<SeP>2024-08-08 15:03:00<SeP>2024-08-10 02:05:33<SeP>2024-08-11 13:08:06<SeP>2024-08-13 00:10:39<SeP>2024-08-14 11:13:12<SeP>2024-08-15 22:15:45<SeP>2024-08-17 09:18:18<SeP>2024-08-18 20:20:51<SeP>2024-08-20 07:23:24<SeP>2024-08-21 18:25:57<SeP>2024-08-23 05:28:30<SeP>2024-08-24 16:31:03<SeP>2024-08-26 03:33:36<SeP>2024-08-27 14:36:09<SeP>2024-08-29 01:38:42<SeP>2024-08-30 12:41:15<SeP>2024-08-31 23:43:48<SeP>2024-09-02 10:46:21<SeP>2024-09-03 21:48:54<SeP>2024-09-05 08:51:27<SeP>2024-09-06 19:54:00<SeP>2024-09-08 06:56:33<SeP>2024-09-09 17:59:06<SeP>2024-09-11 05:01:39<SeP>2024-09-12 16:04:12<SeP>2024-09-14 03:06:45<SeP>2024-09-15 14:09:18<SeP>2024-09-17 01:11:51<SeP>2024-09-18 12:14:24<SeP>2024-09-19 23:16:57<SeP>2024-09-21 10:19:30<SeP>2024-09-22 21:22:03<SeP>2024-09-24 08:24:36<SeP>2024-09-25 19:27:09<SeP>2024-09-27 06:29:42<SeP>2024-09-28 17:32:15<SeP>2024-09-30 04:34:48<SeP>2024-10-01 15:37:21<SeP>2024-10-03 02:39:54<SeP>2024-10-04 13:42:27<SeP>2024-10-06 00:45:00<SeP>2024-10-07 11:47:33<SeP>2024-10-08 22:50:06<SeP>2024-10-10 09:52:39<SeP>2024-10-11 20:55:12<SeP>2024-10-13 07:57:45<SeP>2024-10-14 19:00:18<SeP>2024-10-16 06:02:51<SeP>2024-10-17 17:05:24<SeP>2024-10-19 04:07:57<SeP>2024-10-20 15:10:30<SeP>2024-10-22 02:13:03<SeP>2024-10-23 13:15:36<SeP>2024-10-25 00:18:09<SeP>2024-10-26 11:20:42<SeP>2024-10-27 22:23:15<SeP>2024-10-29 09:25:48<SeP>2024-10-30 20:28:21<SeP>2024-11-01 07:30:54<SeP>2024-11-02 18:33:27<SeP>2024-11-04 04:36:00<SeP>2024-11-05 15:38:33<SeP>2024-11-07 02:41:06<SeP>2024-11-08 13:43:39<SeP>2024-11-10 00:46:12<SeP>2024-11-11 11:48:45<SeP>2024-11-12 22:51:18<SeP>2024-11-14 09:53:51<SeP>2024-11-15 20:56:24<SeP>2024-11-17 07:58:57<SeP>2024-11-18 19:01:30<SeP>2024-11-20 06:04:03<SeP>2024-11-21 17:06:36<SeP>2024-11-23 04:09:09<SeP>2024-11-24 15:11:42<SeP>2024-11-26 02:14:15<SeP>2024-11-27 13:16:48<SeP>2024-11-29 00:19:21<SeP>2024-11-30 11:21:54<SeP>2024-12-01 22:24:27<SeP>2024-12-03 09:27:00<SeP>2024-12-04 20:29:33<SeP>2024-12-06 07:32:06<SeP>2024-12-07 18:34:39<SeP>2024-12-09 05:37:12<SeP>2024-12-10 16:39:45<SeP>2024-12-12 03:42:18<SeP>2024-12-13 14:44:51<SeP>2024-12-15 01:47:24<SeP>2024-12-16 12:49:57<SeP>2024-12-17 23:52:30<SeP>2024-12-19 10:55:03<SeP>2024-12-20 21:57:36<SeP>2024-12-22 09:00:09<SeP>2024-12-23 20:02:42<SeP>2024-12-25 07:05:15<SeP>2024-12-26 18:07:48<SeP>2024-12-28 05:10:21<SeP>2024-12-29 16:12:54<SeP>2024-12-31 03:15:27<SeP>2025-01-01 14:18:00<SeP>2025-01-03 01:20:33<SeP>2025-01-04 12:23:06<SeP>2025-01-05 23:25:39<SeP>2025-01-07 10:28:12<SeP>2025-01-08 21:30:45<SeP>2025-01-10 08:33:18<SeP>2025-01-11 19:35:51<SeP>2025-01-13 06:38:24<SeP>2025-01-14 17:40:57<SeP>2025-01-16 04:43:30<SeP>2025-01-17 15:46:03<SeP>2025-01-19 02:48:36<SeP>2025-01-20 13:51:09<SeP>2025-01-22 00:53:42<SeP>2025-01-23 11:56:15<SeP>2025-01-24 22:58:48<SeP>2025-01-26 10:01:21<SeP>2025-01-27 21:03:54<SeP>2025-01-29 08:06:27<SeP>2025-01-30 19:09:00<SeP>2025-02-01 06:11:33<SeP>2025-02-02 17:14:06<SeP>2025-02-04 04:16:39<SeP>2025-02-05 15:19:12<SeP>2025-02-07 02:21:45<SeP>2025-02-08 13:24:18<SeP>2025-02-10 00:26:51<SeP>2025-02-11 11:29:24<SeP>2025-02-12 22:31:57<SeP>2025-02-14 09:34:30<SeP>2025-02-15 20:37:03<SeP>2025-02-17 07:39:36<SeP>2025-02-18 18:42:09<SeP>2025-02-20 05:44:42<SeP>2025-02-21 16:47:15<SeP>2025-02-23 03:49:48<SeP>2025-02-24 14:52:21<SeP>2025-02-26 01:54:54<SeP>2025-02-27 12:57:27";
  const item1Label       = "Scans";
  const item1Data        = "765<SeP>1488<SeP>1387<SeP>1439<SeP>1255<SeP>1708<SeP>957<SeP>946<SeP>1191<SeP>3386<SeP>2238<SeP>2027<SeP>2794<SeP>1522<SeP>720<SeP>977<SeP>1371<SeP>2919<SeP>1226<SeP>1631<SeP>1302<SeP>929<SeP>954<SeP>1377<SeP>812<SeP>938<SeP>802<SeP>2831<SeP>1612<SeP>1014<SeP>834<SeP>1353<SeP>1286<SeP>784<SeP>3113<SeP>1850<SeP>2556<SeP>1851<SeP>1553<SeP>1389<SeP>1289<SeP>1954<SeP>1920<SeP>2028<SeP>1564<SeP>1579<SeP>1561<SeP>1798<SeP>1735<SeP>1773<SeP>1835<SeP>1769<SeP>1462<SeP>3212<SeP>1629<SeP>1534<SeP>2101<SeP>1860<SeP>2190<SeP>1322<SeP>3864<SeP>1375<SeP>1516<SeP>1625<SeP>1142<SeP>1903<SeP>1742<SeP>1264<SeP>1292<SeP>1498<SeP>1152<SeP>2311<SeP>1233<SeP>1102<SeP>1360<SeP>3794<SeP>5645<SeP>1354<SeP>1299<SeP>1554<SeP>2093<SeP>1133<SeP>3560<SeP>4340<SeP>1604<SeP>1479<SeP>1008<SeP>3247<SeP>1255<SeP>1055<SeP>1014<SeP>1125<SeP>992<SeP>3095<SeP>895<SeP>1191<SeP>2989<SeP>4567<SeP>3621<SeP>978<SeP>866<SeP>975<SeP>936<SeP>1003<SeP>866<SeP>1157<SeP>3207<SeP>2713<SeP>1499<SeP>1659<SeP>722<SeP>800<SeP>1409<SeP>1278<SeP>1073<SeP>1012<SeP>2263<SeP>1107<SeP>1122<SeP>1075<SeP>1042<SeP>963<SeP>790<SeP>869<SeP>841<SeP>752<SeP>1125<SeP>845<SeP>902<SeP>831<SeP>844<SeP>897<SeP>706<SeP>735<SeP>840<SeP>946<SeP>919<SeP>791<SeP>863<SeP>767<SeP>816<SeP>1032<SeP>786<SeP>885<SeP>903<SeP>936<SeP>985<SeP>961<SeP>958<SeP>538<SeP>906<SeP>874<SeP>1111<SeP>936<SeP>1001<SeP>1207<SeP>1241<SeP>929<SeP>940<SeP>916<SeP>988<SeP>701<SeP>997<SeP>1059<SeP>952<SeP>859<SeP>902<SeP>1068<SeP>1013<SeP>1073<SeP>966<SeP>1157<SeP>869<SeP>890<SeP>1332<SeP>1954<SeP>1240<SeP>1002<SeP>1040<SeP>1205<SeP>964<SeP>955<SeP>769<SeP>711<SeP>969<SeP>1114<SeP>859<SeP>985<SeP>1248<SeP>1155<SeP>1167<SeP>1280<SeP>1065<SeP>1374<SeP>1115<SeP>1491<SeP>1209<SeP>1527<SeP>2108<SeP>1320<SeP>828<SeP>907<SeP>1059<SeP>1044<SeP>746<SeP>763<SeP>891<SeP>949<SeP>805<SeP>4712<SeP>3820<SeP>1996<SeP>1409<SeP>1128<SeP>866<SeP>1077<SeP>899<SeP>1012<SeP>988<SeP>1049<SeP>1012<SeP>1051<SeP>2383<SeP>1082<SeP>1150<SeP>1191<SeP>1323<SeP>1098<SeP>1045<SeP>990<SeP>1150<SeP>1103<SeP>985<SeP>1152<SeP>1079<SeP>1118<SeP>919<SeP>976<SeP>1368<SeP>1113<SeP>1098<SeP>1270<SeP>1305<SeP>1197<SeP>1509<SeP>1223<SeP>1089<SeP>1185<SeP>1166<SeP>1948<SeP>1276<SeP>1894<SeP>1672<SeP>1491<SeP>1974<SeP>1607<SeP>1172<SeP>1113<SeP>1421<SeP>1093<SeP>1554<SeP>1229<SeP>1237<SeP>1751<SeP>1519<SeP>1398<SeP>1595<SeP>1198<SeP>1311<SeP>1260<SeP>1152<SeP>1157<SeP>1154<SeP>1251<SeP>1253<SeP>1240<SeP>1462<SeP>1794<SeP>1449<SeP>1098<SeP>1669<SeP>1497<SeP>1157<SeP>1097<SeP>908<SeP>865<SeP>903<SeP>1022<SeP>1003<SeP>1818<SeP>1045<SeP>1139<SeP>1160<SeP>782<SeP>1012<SeP>997<SeP>1315<SeP>865<SeP>892<SeP>1133<SeP>1328<SeP>1647<SeP>1317<SeP>1047<SeP>1055<SeP>1100<SeP>1807<SeP>977<SeP>1209<SeP>992<SeP>1450<SeP>1217<SeP>855<SeP>1199<SeP>1064<SeP>985<SeP>868<SeP>982<SeP>1382<SeP>1275<SeP>1664<SeP>1549<SeP>1281<SeP>978<SeP>1124<SeP>1289<SeP>971<SeP>1066<SeP>1206<SeP>1016<SeP>1004<SeP>1275<SeP>1616<SeP>1280<SeP>1614<SeP>1309<SeP>1426<SeP>1596<SeP>1331<SeP>1499<SeP>1283<SeP>1416<SeP>1278<SeP>1757<SeP>1433<SeP>1425<SeP>1577<SeP>1269<SeP>1476<SeP>1236<SeP>1308<SeP>1265<SeP>1502<SeP>1618<SeP>1303<SeP>1259<SeP>1271<SeP>1369<SeP>1219<SeP>1221<SeP>1513<SeP>1767<SeP>1781<SeP>1186<SeP>631<SeP>1446<SeP>1926<SeP>1141<SeP>1426<SeP>1179<SeP>1191<SeP>1280<SeP>1454<SeP>1179<SeP>1579<SeP>1631<SeP>1487<SeP>1543<SeP>1685<SeP>1336<SeP>1421<SeP>1464<SeP>1616<SeP>1563<SeP>1148<SeP>1210<SeP>1869<SeP>1742<SeP>1780<SeP>1880<SeP>1678<SeP>1568<SeP>1591<SeP>1563<SeP>1552<SeP>1496<SeP>1739<SeP>1749<SeP>1700<SeP>1399";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "155<SeP>614<SeP>1104<SeP>602<SeP>563<SeP>213<SeP>6966<SeP>535<SeP>9532<SeP>573<SeP>396<SeP>1127<SeP>1254<SeP>277<SeP>151<SeP>460<SeP>114<SeP>763<SeP>279<SeP>5714<SeP>7315<SeP>6800<SeP>8294<SeP>5402<SeP>213<SeP>280<SeP>429<SeP>129<SeP>5775<SeP>499<SeP>169<SeP>292<SeP>424<SeP>339<SeP>4513<SeP>10675<SeP>8608<SeP>10601<SeP>8382<SeP>5256<SeP>7290<SeP>7043<SeP>9500<SeP>8803<SeP>8118<SeP>8061<SeP>8415<SeP>8504<SeP>8129<SeP>6712<SeP>5503<SeP>12016<SeP>7235<SeP>7469<SeP>7232<SeP>9525<SeP>9416<SeP>17841<SeP>17033<SeP>8623<SeP>11320<SeP>6269<SeP>8626<SeP>8594<SeP>8464<SeP>8777<SeP>5864<SeP>6921<SeP>7318<SeP>6449<SeP>2834<SeP>6160<SeP>5438<SeP>6423<SeP>7241<SeP>8238<SeP>2439<SeP>6335<SeP>6137<SeP>6375<SeP>5386<SeP>6542<SeP>4620<SeP>6582<SeP>5989<SeP>5486<SeP>5958<SeP>5606<SeP>21886<SeP>11294<SeP>34535<SeP>7871<SeP>7801<SeP>6162<SeP>12488<SeP>6905<SeP>4822<SeP>6543<SeP>3755<SeP>5461<SeP>6291<SeP>5197<SeP>8687<SeP>6009<SeP>6057<SeP>4593<SeP>5431<SeP>9454<SeP>7350<SeP>7867<SeP>5790<SeP>4369<SeP>10648<SeP>9078<SeP>5445<SeP>3128<SeP>6482<SeP>8924<SeP>5634<SeP>6527<SeP>9752<SeP>4844<SeP>1593<SeP>2161<SeP>1492<SeP>2255<SeP>2277<SeP>1072<SeP>760<SeP>1152<SeP>1319<SeP>1627<SeP>986<SeP>929<SeP>1169<SeP>1048<SeP>801<SeP>1376<SeP>1422<SeP>1233<SeP>837<SeP>2242<SeP>2040<SeP>6317<SeP>10355<SeP>8092<SeP>8148<SeP>7114<SeP>12659<SeP>2635<SeP>11474<SeP>10005<SeP>8995<SeP>13198<SeP>8191<SeP>12359<SeP>12052<SeP>7169<SeP>12859<SeP>5117<SeP>4951<SeP>7016<SeP>23783<SeP>7768<SeP>7778<SeP>8385<SeP>17267<SeP>9312<SeP>7463<SeP>5264<SeP>6765<SeP>8666<SeP>25316<SeP>6957<SeP>10197<SeP>9196<SeP>5310<SeP>5452<SeP>7296<SeP>15356<SeP>5001<SeP>13279<SeP>7260<SeP>7120<SeP>8826<SeP>6298<SeP>3884<SeP>6161<SeP>6759<SeP>5968<SeP>7069<SeP>6849<SeP>5446<SeP>21078<SeP>6670<SeP>6027<SeP>6268<SeP>8259<SeP>10883<SeP>6869<SeP>4698<SeP>3695<SeP>6298<SeP>3287<SeP>4247<SeP>4174<SeP>642<SeP>92<SeP>647<SeP>500<SeP>685<SeP>709<SeP>368<SeP>626<SeP>1258<SeP>1202<SeP>3171<SeP>22905<SeP>591<SeP>3448<SeP>3544<SeP>3029<SeP>7178<SeP>3014<SeP>4302<SeP>2263<SeP>3919<SeP>2871<SeP>2976<SeP>4212<SeP>2985<SeP>2381<SeP>3501<SeP>2049<SeP>2027<SeP>1748<SeP>1550<SeP>960<SeP>1693<SeP>936<SeP>1417<SeP>1031<SeP>27071<SeP>2107<SeP>3801<SeP>3562<SeP>2469<SeP>3608<SeP>2764<SeP>1853<SeP>3732<SeP>2761<SeP>3574<SeP>2021<SeP>2991<SeP>3517<SeP>5019<SeP>4940<SeP>5201<SeP>4367<SeP>2635<SeP>2304<SeP>5243<SeP>3442<SeP>9586<SeP>5478<SeP>3669<SeP>2166<SeP>2396<SeP>4976<SeP>3484<SeP>3299<SeP>2984<SeP>3043<SeP>5935<SeP>3361<SeP>5945<SeP>3301<SeP>5908<SeP>4255<SeP>5931<SeP>5096<SeP>15079<SeP>12890<SeP>12508<SeP>1830<SeP>2293<SeP>4903<SeP>3402<SeP>3887<SeP>3949<SeP>5005<SeP>3987<SeP>4483<SeP>4246<SeP>3559<SeP>3306<SeP>1255<SeP>1964<SeP>3255<SeP>2828<SeP>2176<SeP>3981<SeP>3961<SeP>4305<SeP>3025<SeP>4150<SeP>3225<SeP>3828<SeP>3179<SeP>8050<SeP>6941<SeP>5258<SeP>4705<SeP>5193<SeP>4164<SeP>3647<SeP>4510<SeP>3994<SeP>6272<SeP>4702<SeP>5369<SeP>1984<SeP>745<SeP>1567<SeP>1765<SeP>1127<SeP>1079<SeP>2083<SeP>1091<SeP>1639<SeP>3936<SeP>4894<SeP>6428<SeP>34278<SeP>4666<SeP>4671<SeP>23524<SeP>5705<SeP>5266<SeP>5780<SeP>4512<SeP>24479<SeP>4851<SeP>5438<SeP>4795<SeP>5481<SeP>7992<SeP>27334<SeP>4660<SeP>3645<SeP>4339<SeP>4482<SeP>5882<SeP>3960<SeP>3221<SeP>3275<SeP>4216<SeP>5632<SeP>4640<SeP>17613<SeP>5876<SeP>6614<SeP>5074<SeP>1345<SeP>3938<SeP>4494<SeP>3647<SeP>4567<SeP>2840<SeP>3559<SeP>2901<SeP>3832<SeP>3377<SeP>6689<SeP>9373<SeP>9868<SeP>8719<SeP>8667<SeP>7443<SeP>6897<SeP>5254<SeP>4646<SeP>8865<SeP>20623<SeP>3270<SeP>4362<SeP>3215<SeP>11431<SeP>5207<SeP>4220<SeP>4405<SeP>4529<SeP>3299<SeP>6405<SeP>10176<SeP>6362<SeP>3884<SeP>3245<SeP>2903";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:02:33<SeP>2023-07-28 22:05:06<SeP>2023-07-30 09:07:39<SeP>2023-07-31 20:10:12<SeP>2023-08-02 07:12:45<SeP>2023-08-03 18:15:18<SeP>2023-08-05 05:17:51<SeP>2023-08-06 16:20:24<SeP>2023-08-08 03:22:57<SeP>2023-08-09 14:25:30<SeP>2023-08-11 01:28:03<SeP>2023-08-12 12:30:36<SeP>2023-08-13 23:33:09<SeP>2023-08-15 10:35:42<SeP>2023-08-16 21:38:15<SeP>2023-08-18 08:40:48<SeP>2023-08-19 19:43:21<SeP>2023-08-21 06:45:54<SeP>2023-08-22 17:48:27<SeP>2023-08-24 04:51:00<SeP>2023-08-25 15:53:33<SeP>2023-08-27 02:56:06<SeP>2023-08-28 13:58:39<SeP>2023-08-30 01:01:12<SeP>2023-08-31 12:03:45<SeP>2023-09-01 23:06:18<SeP>2023-09-03 10:08:51<SeP>2023-09-04 21:11:24<SeP>2023-09-06 08:13:57<SeP>2023-09-07 19:16:30<SeP>2023-09-09 06:19:03<SeP>2023-09-10 17:21:36<SeP>2023-09-12 04:24:09<SeP>2023-09-13 15:26:42<SeP>2023-09-15 02:29:15<SeP>2023-09-16 13:31:48<SeP>2023-09-18 00:34:21<SeP>2023-09-19 11:36:54<SeP>2023-09-20 22:39:27<SeP>2023-09-22 09:42:00<SeP>2023-09-23 20:44:33<SeP>2023-09-25 07:47:06<SeP>2023-09-26 18:49:39<SeP>2023-09-28 05:52:12<SeP>2023-09-29 16:54:45<SeP>2023-10-01 03:57:18<SeP>2023-10-02 14:59:51<SeP>2023-10-04 02:02:24<SeP>2023-10-05 13:04:57<SeP>2023-10-07 00:07:30<SeP>2023-10-08 11:10:03<SeP>2023-10-09 22:12:36<SeP>2023-10-11 09:15:09<SeP>2023-10-12 20:17:42<SeP>2023-10-14 07:20:15<SeP>2023-10-15 18:22:48<SeP>2023-10-17 05:25:21<SeP>2023-10-18 16:27:54<SeP>2023-10-20 03:30:27<SeP>2023-10-21 14:33:00<SeP>2023-10-23 01:35:33<SeP>2023-10-24 12:38:06<SeP>2023-10-25 23:40:39<SeP>2023-10-27 10:43:12<SeP>2023-10-28 21:45:45<SeP>2023-10-30 08:48:18<SeP>2023-10-31 19:50:51<SeP>2023-11-02 06:53:24<SeP>2023-11-03 17:55:57<SeP>2023-11-05 03:58:30<SeP>2023-11-06 15:01:03<SeP>2023-11-08 02:03:36<SeP>2023-11-09 13:06:09<SeP>2023-11-11 00:08:42<SeP>2023-11-12 11:11:15<SeP>2023-11-13 22:13:48<SeP>2023-11-15 09:16:21<SeP>2023-11-16 20:18:54<SeP>2023-11-18 07:21:27<SeP>2023-11-19 18:24:00<SeP>2023-11-21 05:26:33<SeP>2023-11-22 16:29:06<SeP>2023-11-24 03:31:39<SeP>2023-11-25 14:34:12<SeP>2023-11-27 01:36:45<SeP>2023-11-28 12:39:18<SeP>2023-11-29 23:41:51<SeP>2023-12-01 10:44:24<SeP>2023-12-02 21:46:57<SeP>2023-12-04 08:49:30<SeP>2023-12-05 19:52:03<SeP>2023-12-07 06:54:36<SeP>2023-12-08 17:57:09<SeP>2023-12-10 04:59:42<SeP>2023-12-11 16:02:15<SeP>2023-12-13 03:04:48<SeP>2023-12-14 14:07:21<SeP>2023-12-16 01:09:54<SeP>2023-12-17 12:12:27<SeP>2023-12-18 23:15:00<SeP>2023-12-20 10:17:33<SeP>2023-12-21 21:20:06<SeP>2023-12-23 08:22:39<SeP>2023-12-24 19:25:12<SeP>2023-12-26 06:27:45<SeP>2023-12-27 17:30:18<SeP>2023-12-29 04:32:51<SeP>2023-12-30 15:35:24<SeP>2024-01-01 02:37:57<SeP>2024-01-02 13:40:30<SeP>2024-01-04 00:43:03<SeP>2024-01-05 11:45:36<SeP>2024-01-06 22:48:09<SeP>2024-01-08 09:50:42<SeP>2024-01-09 20:53:15<SeP>2024-01-11 07:55:48<SeP>2024-01-12 18:58:21<SeP>2024-01-14 06:00:54<SeP>2024-01-15 17:03:27<SeP>2024-01-17 04:06:00<SeP>2024-01-18 15:08:33<SeP>2024-01-20 02:11:06<SeP>2024-01-21 13:13:39<SeP>2024-01-23 00:16:12<SeP>2024-01-24 11:18:45<SeP>2024-01-25 22:21:18<SeP>2024-01-27 09:23:51<SeP>2024-01-28 20:26:24<SeP>2024-01-30 07:28:57<SeP>2024-01-31 18:31:30<SeP>2024-02-02 05:34:03<SeP>2024-02-03 16:36:36<SeP>2024-02-05 03:39:09<SeP>2024-02-06 14:41:42<SeP>2024-02-08 01:44:15<SeP>2024-02-09 12:46:48<SeP>2024-02-10 23:49:21<SeP>2024-02-12 10:51:54<SeP>2024-02-13 21:54:27<SeP>2024-02-15 08:57:00<SeP>2024-02-16 19:59:33<SeP>2024-02-18 07:02:06<SeP>2024-02-19 18:04:39<SeP>2024-02-21 05:07:12<SeP>2024-02-22 16:09:45<SeP>2024-02-24 03:12:18<SeP>2024-02-25 14:14:51<SeP>2024-02-27 01:17:24<SeP>2024-02-28 12:19:57<SeP>2024-02-29 23:22:30<SeP>2024-03-02 10:25:03<SeP>2024-03-03 21:27:36<SeP>2024-03-05 08:30:09<SeP>2024-03-06 19:32:42<SeP>2024-03-08 06:35:15<SeP>2024-03-09 17:37:48<SeP>2024-03-11 05:40:21<SeP>2024-03-12 16:42:54<SeP>2024-03-14 03:45:27<SeP>2024-03-15 14:48:00<SeP>2024-03-17 01:50:33<SeP>2024-03-18 12:53:06<SeP>2024-03-19 23:55:39<SeP>2024-03-21 10:58:12<SeP>2024-03-22 22:00:45<SeP>2024-03-24 09:03:18<SeP>2024-03-25 20:05:51<SeP>2024-03-27 07:08:24<SeP>2024-03-28 18:10:57<SeP>2024-03-30 05:13:30<SeP>2024-03-31 16:16:03<SeP>2024-04-02 03:18:36<SeP>2024-04-03 14:21:09<SeP>2024-04-05 01:23:42<SeP>2024-04-06 12:26:15<SeP>2024-04-07 23:28:48<SeP>2024-04-09 10:31:21<SeP>2024-04-10 21:33:54<SeP>2024-04-12 08:36:27<SeP>2024-04-13 19:39:00<SeP>2024-04-15 06:41:33<SeP>2024-04-16 17:44:06<SeP>2024-04-18 04:46:39<SeP>2024-04-19 15:49:12<SeP>2024-04-21 02:51:45<SeP>2024-04-22 13:54:18<SeP>2024-04-24 00:56:51<SeP>2024-04-25 11:59:24<SeP>2024-04-26 23:01:57<SeP>2024-04-28 10:04:30<SeP>2024-04-29 21:07:03<SeP>2024-05-01 08:09:36<SeP>2024-05-02 19:12:09<SeP>2024-05-04 06:14:42<SeP>2024-05-05 17:17:15<SeP>2024-05-07 04:19:48<SeP>2024-05-08 15:22:21<SeP>2024-05-10 02:24:54<SeP>2024-05-11 13:27:27<SeP>2024-05-13 00:30:00<SeP>2024-05-14 11:32:33<SeP>2024-05-15 22:35:06<SeP>2024-05-17 09:37:39<SeP>2024-05-18 20:40:12<SeP>2024-05-20 07:42:45<SeP>2024-05-21 18:45:18<SeP>2024-05-23 05:47:51<SeP>2024-05-24 16:50:24<SeP>2024-05-26 03:52:57<SeP>2024-05-27 14:55:30<SeP>2024-05-29 01:58:03<SeP>2024-05-30 13:00:36<SeP>2024-06-01 00:03:09<SeP>2024-06-02 11:05:42<SeP>2024-06-03 22:08:15<SeP>2024-06-05 09:10:48<SeP>2024-06-06 20:13:21<SeP>2024-06-08 07:15:54<SeP>2024-06-09 18:18:27<SeP>2024-06-11 05:21:00<SeP>2024-06-12 16:23:33<SeP>2024-06-14 03:26:06<SeP>2024-06-15 14:28:39<SeP>2024-06-17 01:31:12<SeP>2024-06-18 12:33:45<SeP>2024-06-19 23:36:18<SeP>2024-06-21 10:38:51<SeP>2024-06-22 21:41:24<SeP>2024-06-24 08:43:57<SeP>2024-06-25 19:46:30<SeP>2024-06-27 06:49:03<SeP>2024-06-28 17:51:36<SeP>2024-06-30 04:54:09<SeP>2024-07-01 15:56:42<SeP>2024-07-03 02:59:15<SeP>2024-07-04 14:01:48<SeP>2024-07-06 01:04:21<SeP>2024-07-07 12:06:54<SeP>2024-07-08 23:09:27<SeP>2024-07-10 10:12:00<SeP>2024-07-11 21:14:33<SeP>2024-07-13 08:17:06<SeP>2024-07-14 19:19:39<SeP>2024-07-16 06:22:12<SeP>2024-07-17 17:24:45<SeP>2024-07-19 04:27:18<SeP>2024-07-20 15:29:51<SeP>2024-07-22 02:32:24<SeP>2024-07-23 13:34:57<SeP>2024-07-25 00:37:30<SeP>2024-07-26 11:40:03<SeP>2024-07-27 22:42:36<SeP>2024-07-29 09:45:09<SeP>2024-07-30 20:47:42<SeP>2024-08-01 07:50:15<SeP>2024-08-02 18:52:48<SeP>2024-08-04 05:55:21<SeP>2024-08-05 16:57:54<SeP>2024-08-07 04:00:27<SeP>2024-08-08 15:03:00<SeP>2024-08-10 02:05:33<SeP>2024-08-11 13:08:06<SeP>2024-08-13 00:10:39<SeP>2024-08-14 11:13:12<SeP>2024-08-15 22:15:45<SeP>2024-08-17 09:18:18<SeP>2024-08-18 20:20:51<SeP>2024-08-20 07:23:24<SeP>2024-08-21 18:25:57<SeP>2024-08-23 05:28:30<SeP>2024-08-24 16:31:03<SeP>2024-08-26 03:33:36<SeP>2024-08-27 14:36:09<SeP>2024-08-29 01:38:42<SeP>2024-08-30 12:41:15<SeP>2024-08-31 23:43:48<SeP>2024-09-02 10:46:21<SeP>2024-09-03 21:48:54<SeP>2024-09-05 08:51:27<SeP>2024-09-06 19:54:00<SeP>2024-09-08 06:56:33<SeP>2024-09-09 17:59:06<SeP>2024-09-11 05:01:39<SeP>2024-09-12 16:04:12<SeP>2024-09-14 03:06:45<SeP>2024-09-15 14:09:18<SeP>2024-09-17 01:11:51<SeP>2024-09-18 12:14:24<SeP>2024-09-19 23:16:57<SeP>2024-09-21 10:19:30<SeP>2024-09-22 21:22:03<SeP>2024-09-24 08:24:36<SeP>2024-09-25 19:27:09<SeP>2024-09-27 06:29:42<SeP>2024-09-28 17:32:15<SeP>2024-09-30 04:34:48<SeP>2024-10-01 15:37:21<SeP>2024-10-03 02:39:54<SeP>2024-10-04 13:42:27<SeP>2024-10-06 00:45:00<SeP>2024-10-07 11:47:33<SeP>2024-10-08 22:50:06<SeP>2024-10-10 09:52:39<SeP>2024-10-11 20:55:12<SeP>2024-10-13 07:57:45<SeP>2024-10-14 19:00:18<SeP>2024-10-16 06:02:51<SeP>2024-10-17 17:05:24<SeP>2024-10-19 04:07:57<SeP>2024-10-20 15:10:30<SeP>2024-10-22 02:13:03<SeP>2024-10-23 13:15:36<SeP>2024-10-25 00:18:09<SeP>2024-10-26 11:20:42<SeP>2024-10-27 22:23:15<SeP>2024-10-29 09:25:48<SeP>2024-10-30 20:28:21<SeP>2024-11-01 07:30:54<SeP>2024-11-02 18:33:27<SeP>2024-11-04 04:36:00<SeP>2024-11-05 15:38:33<SeP>2024-11-07 02:41:06<SeP>2024-11-08 13:43:39<SeP>2024-11-10 00:46:12<SeP>2024-11-11 11:48:45<SeP>2024-11-12 22:51:18<SeP>2024-11-14 09:53:51<SeP>2024-11-15 20:56:24<SeP>2024-11-17 07:58:57<SeP>2024-11-18 19:01:30<SeP>2024-11-20 06:04:03<SeP>2024-11-21 17:06:36<SeP>2024-11-23 04:09:09<SeP>2024-11-24 15:11:42<SeP>2024-11-26 02:14:15<SeP>2024-11-27 13:16:48<SeP>2024-11-29 00:19:21<SeP>2024-11-30 11:21:54<SeP>2024-12-01 22:24:27<SeP>2024-12-03 09:27:00<SeP>2024-12-04 20:29:33<SeP>2024-12-06 07:32:06<SeP>2024-12-07 18:34:39<SeP>2024-12-09 05:37:12<SeP>2024-12-10 16:39:45<SeP>2024-12-12 03:42:18<SeP>2024-12-13 14:44:51<SeP>2024-12-15 01:47:24<SeP>2024-12-16 12:49:57<SeP>2024-12-17 23:52:30<SeP>2024-12-19 10:55:03<SeP>2024-12-20 21:57:36<SeP>2024-12-22 09:00:09<SeP>2024-12-23 20:02:42<SeP>2024-12-25 07:05:15<SeP>2024-12-26 18:07:48<SeP>2024-12-28 05:10:21<SeP>2024-12-29 16:12:54<SeP>2024-12-31 03:15:27<SeP>2025-01-01 14:18:00<SeP>2025-01-03 01:20:33<SeP>2025-01-04 12:23:06<SeP>2025-01-05 23:25:39<SeP>2025-01-07 10:28:12<SeP>2025-01-08 21:30:45<SeP>2025-01-10 08:33:18<SeP>2025-01-11 19:35:51<SeP>2025-01-13 06:38:24<SeP>2025-01-14 17:40:57<SeP>2025-01-16 04:43:30<SeP>2025-01-17 15:46:03<SeP>2025-01-19 02:48:36<SeP>2025-01-20 13:51:09<SeP>2025-01-22 00:53:42<SeP>2025-01-23 11:56:15<SeP>2025-01-24 22:58:48<SeP>2025-01-26 10:01:21<SeP>2025-01-27 21:03:54<SeP>2025-01-29 08:06:27<SeP>2025-01-30 19:09:00<SeP>2025-02-01 06:11:33<SeP>2025-02-02 17:14:06<SeP>2025-02-04 04:16:39<SeP>2025-02-05 15:19:12<SeP>2025-02-07 02:21:45<SeP>2025-02-08 13:24:18<SeP>2025-02-10 00:26:51<SeP>2025-02-11 11:29:24<SeP>2025-02-12 22:31:57<SeP>2025-02-14 09:34:30<SeP>2025-02-15 20:37:03<SeP>2025-02-17 07:39:36<SeP>2025-02-18 18:42:09<SeP>2025-02-20 05:44:42<SeP>2025-02-21 16:47:15<SeP>2025-02-23 03:49:48<SeP>2025-02-24 14:52:21<SeP>2025-02-26 01:54:54<SeP>2025-02-27 12:57:27";
  const itemLabel       = "Scans";
  const itemData        = "765<SeP>1488<SeP>1387<SeP>1439<SeP>1255<SeP>1708<SeP>957<SeP>946<SeP>1191<SeP>3386<SeP>2238<SeP>2027<SeP>2794<SeP>1522<SeP>720<SeP>977<SeP>1371<SeP>2919<SeP>1226<SeP>1631<SeP>1302<SeP>929<SeP>954<SeP>1377<SeP>812<SeP>938<SeP>802<SeP>2831<SeP>1612<SeP>1014<SeP>834<SeP>1353<SeP>1286<SeP>784<SeP>3113<SeP>1850<SeP>2556<SeP>1851<SeP>1553<SeP>1389<SeP>1289<SeP>1954<SeP>1920<SeP>2028<SeP>1564<SeP>1579<SeP>1561<SeP>1798<SeP>1735<SeP>1773<SeP>1835<SeP>1769<SeP>1462<SeP>3212<SeP>1629<SeP>1534<SeP>2101<SeP>1860<SeP>2190<SeP>1322<SeP>3864<SeP>1375<SeP>1516<SeP>1625<SeP>1142<SeP>1903<SeP>1742<SeP>1264<SeP>1292<SeP>1498<SeP>1152<SeP>2311<SeP>1233<SeP>1102<SeP>1360<SeP>3794<SeP>5645<SeP>1354<SeP>1299<SeP>1554<SeP>2093<SeP>1133<SeP>3560<SeP>4340<SeP>1604<SeP>1479<SeP>1008<SeP>3247<SeP>1255<SeP>1055<SeP>1014<SeP>1125<SeP>992<SeP>3095<SeP>895<SeP>1191<SeP>2989<SeP>4567<SeP>3621<SeP>978<SeP>866<SeP>975<SeP>936<SeP>1003<SeP>866<SeP>1157<SeP>3207<SeP>2713<SeP>1499<SeP>1659<SeP>722<SeP>800<SeP>1409<SeP>1278<SeP>1073<SeP>1012<SeP>2263<SeP>1107<SeP>1122<SeP>1075<SeP>1042<SeP>963<SeP>790<SeP>869<SeP>841<SeP>752<SeP>1125<SeP>845<SeP>902<SeP>831<SeP>844<SeP>897<SeP>706<SeP>735<SeP>840<SeP>946<SeP>919<SeP>791<SeP>863<SeP>767<SeP>816<SeP>1032<SeP>786<SeP>885<SeP>903<SeP>936<SeP>985<SeP>961<SeP>958<SeP>538<SeP>906<SeP>874<SeP>1111<SeP>936<SeP>1001<SeP>1207<SeP>1241<SeP>929<SeP>940<SeP>916<SeP>988<SeP>701<SeP>997<SeP>1059<SeP>952<SeP>859<SeP>902<SeP>1068<SeP>1013<SeP>1073<SeP>966<SeP>1157<SeP>869<SeP>890<SeP>1332<SeP>1954<SeP>1240<SeP>1002<SeP>1040<SeP>1205<SeP>964<SeP>955<SeP>769<SeP>711<SeP>969<SeP>1114<SeP>859<SeP>985<SeP>1248<SeP>1155<SeP>1167<SeP>1280<SeP>1065<SeP>1374<SeP>1115<SeP>1491<SeP>1209<SeP>1527<SeP>2108<SeP>1320<SeP>828<SeP>907<SeP>1059<SeP>1044<SeP>746<SeP>763<SeP>891<SeP>949<SeP>805<SeP>4712<SeP>3820<SeP>1996<SeP>1409<SeP>1128<SeP>866<SeP>1077<SeP>899<SeP>1012<SeP>988<SeP>1049<SeP>1012<SeP>1051<SeP>2383<SeP>1082<SeP>1150<SeP>1191<SeP>1323<SeP>1098<SeP>1045<SeP>990<SeP>1150<SeP>1103<SeP>985<SeP>1152<SeP>1079<SeP>1118<SeP>919<SeP>976<SeP>1368<SeP>1113<SeP>1098<SeP>1270<SeP>1305<SeP>1197<SeP>1509<SeP>1223<SeP>1089<SeP>1185<SeP>1166<SeP>1948<SeP>1276<SeP>1894<SeP>1672<SeP>1491<SeP>1974<SeP>1607<SeP>1172<SeP>1113<SeP>1421<SeP>1093<SeP>1554<SeP>1229<SeP>1237<SeP>1751<SeP>1519<SeP>1398<SeP>1595<SeP>1198<SeP>1311<SeP>1260<SeP>1152<SeP>1157<SeP>1154<SeP>1251<SeP>1253<SeP>1240<SeP>1462<SeP>1794<SeP>1449<SeP>1098<SeP>1669<SeP>1497<SeP>1157<SeP>1097<SeP>908<SeP>865<SeP>903<SeP>1022<SeP>1003<SeP>1818<SeP>1045<SeP>1139<SeP>1160<SeP>782<SeP>1012<SeP>997<SeP>1315<SeP>865<SeP>892<SeP>1133<SeP>1328<SeP>1647<SeP>1317<SeP>1047<SeP>1055<SeP>1100<SeP>1807<SeP>977<SeP>1209<SeP>992<SeP>1450<SeP>1217<SeP>855<SeP>1199<SeP>1064<SeP>985<SeP>868<SeP>982<SeP>1382<SeP>1275<SeP>1664<SeP>1549<SeP>1281<SeP>978<SeP>1124<SeP>1289<SeP>971<SeP>1066<SeP>1206<SeP>1016<SeP>1004<SeP>1275<SeP>1616<SeP>1280<SeP>1614<SeP>1309<SeP>1426<SeP>1596<SeP>1331<SeP>1499<SeP>1283<SeP>1416<SeP>1278<SeP>1757<SeP>1433<SeP>1425<SeP>1577<SeP>1269<SeP>1476<SeP>1236<SeP>1308<SeP>1265<SeP>1502<SeP>1618<SeP>1303<SeP>1259<SeP>1271<SeP>1369<SeP>1219<SeP>1221<SeP>1513<SeP>1767<SeP>1781<SeP>1186<SeP>631<SeP>1446<SeP>1926<SeP>1141<SeP>1426<SeP>1179<SeP>1191<SeP>1280<SeP>1454<SeP>1179<SeP>1579<SeP>1631<SeP>1487<SeP>1543<SeP>1685<SeP>1336<SeP>1421<SeP>1464<SeP>1616<SeP>1563<SeP>1148<SeP>1210<SeP>1869<SeP>1742<SeP>1780<SeP>1880<SeP>1678<SeP>1568<SeP>1591<SeP>1563<SeP>1552<SeP>1496<SeP>1739<SeP>1749<SeP>1700<SeP>1399";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:02:33<SeP>2023-07-28 22:05:06<SeP>2023-07-30 09:07:39<SeP>2023-07-31 20:10:12<SeP>2023-08-02 07:12:45<SeP>2023-08-03 18:15:18<SeP>2023-08-05 05:17:51<SeP>2023-08-06 16:20:24<SeP>2023-08-08 03:22:57<SeP>2023-08-09 14:25:30<SeP>2023-08-11 01:28:03<SeP>2023-08-12 12:30:36<SeP>2023-08-13 23:33:09<SeP>2023-08-15 10:35:42<SeP>2023-08-16 21:38:15<SeP>2023-08-18 08:40:48<SeP>2023-08-19 19:43:21<SeP>2023-08-21 06:45:54<SeP>2023-08-22 17:48:27<SeP>2023-08-24 04:51:00<SeP>2023-08-25 15:53:33<SeP>2023-08-27 02:56:06<SeP>2023-08-28 13:58:39<SeP>2023-08-30 01:01:12<SeP>2023-08-31 12:03:45<SeP>2023-09-01 23:06:18<SeP>2023-09-03 10:08:51<SeP>2023-09-04 21:11:24<SeP>2023-09-06 08:13:57<SeP>2023-09-07 19:16:30<SeP>2023-09-09 06:19:03<SeP>2023-09-10 17:21:36<SeP>2023-09-12 04:24:09<SeP>2023-09-13 15:26:42<SeP>2023-09-15 02:29:15<SeP>2023-09-16 13:31:48<SeP>2023-09-18 00:34:21<SeP>2023-09-19 11:36:54<SeP>2023-09-20 22:39:27<SeP>2023-09-22 09:42:00<SeP>2023-09-23 20:44:33<SeP>2023-09-25 07:47:06<SeP>2023-09-26 18:49:39<SeP>2023-09-28 05:52:12<SeP>2023-09-29 16:54:45<SeP>2023-10-01 03:57:18<SeP>2023-10-02 14:59:51<SeP>2023-10-04 02:02:24<SeP>2023-10-05 13:04:57<SeP>2023-10-07 00:07:30<SeP>2023-10-08 11:10:03<SeP>2023-10-09 22:12:36<SeP>2023-10-11 09:15:09<SeP>2023-10-12 20:17:42<SeP>2023-10-14 07:20:15<SeP>2023-10-15 18:22:48<SeP>2023-10-17 05:25:21<SeP>2023-10-18 16:27:54<SeP>2023-10-20 03:30:27<SeP>2023-10-21 14:33:00<SeP>2023-10-23 01:35:33<SeP>2023-10-24 12:38:06<SeP>2023-10-25 23:40:39<SeP>2023-10-27 10:43:12<SeP>2023-10-28 21:45:45<SeP>2023-10-30 08:48:18<SeP>2023-10-31 19:50:51<SeP>2023-11-02 06:53:24<SeP>2023-11-03 17:55:57<SeP>2023-11-05 03:58:30<SeP>2023-11-06 15:01:03<SeP>2023-11-08 02:03:36<SeP>2023-11-09 13:06:09<SeP>2023-11-11 00:08:42<SeP>2023-11-12 11:11:15<SeP>2023-11-13 22:13:48<SeP>2023-11-15 09:16:21<SeP>2023-11-16 20:18:54<SeP>2023-11-18 07:21:27<SeP>2023-11-19 18:24:00<SeP>2023-11-21 05:26:33<SeP>2023-11-22 16:29:06<SeP>2023-11-24 03:31:39<SeP>2023-11-25 14:34:12<SeP>2023-11-27 01:36:45<SeP>2023-11-28 12:39:18<SeP>2023-11-29 23:41:51<SeP>2023-12-01 10:44:24<SeP>2023-12-02 21:46:57<SeP>2023-12-04 08:49:30<SeP>2023-12-05 19:52:03<SeP>2023-12-07 06:54:36<SeP>2023-12-08 17:57:09<SeP>2023-12-10 04:59:42<SeP>2023-12-11 16:02:15<SeP>2023-12-13 03:04:48<SeP>2023-12-14 14:07:21<SeP>2023-12-16 01:09:54<SeP>2023-12-17 12:12:27<SeP>2023-12-18 23:15:00<SeP>2023-12-20 10:17:33<SeP>2023-12-21 21:20:06<SeP>2023-12-23 08:22:39<SeP>2023-12-24 19:25:12<SeP>2023-12-26 06:27:45<SeP>2023-12-27 17:30:18<SeP>2023-12-29 04:32:51<SeP>2023-12-30 15:35:24<SeP>2024-01-01 02:37:57<SeP>2024-01-02 13:40:30<SeP>2024-01-04 00:43:03<SeP>2024-01-05 11:45:36<SeP>2024-01-06 22:48:09<SeP>2024-01-08 09:50:42<SeP>2024-01-09 20:53:15<SeP>2024-01-11 07:55:48<SeP>2024-01-12 18:58:21<SeP>2024-01-14 06:00:54<SeP>2024-01-15 17:03:27<SeP>2024-01-17 04:06:00<SeP>2024-01-18 15:08:33<SeP>2024-01-20 02:11:06<SeP>2024-01-21 13:13:39<SeP>2024-01-23 00:16:12<SeP>2024-01-24 11:18:45<SeP>2024-01-25 22:21:18<SeP>2024-01-27 09:23:51<SeP>2024-01-28 20:26:24<SeP>2024-01-30 07:28:57<SeP>2024-01-31 18:31:30<SeP>2024-02-02 05:34:03<SeP>2024-02-03 16:36:36<SeP>2024-02-05 03:39:09<SeP>2024-02-06 14:41:42<SeP>2024-02-08 01:44:15<SeP>2024-02-09 12:46:48<SeP>2024-02-10 23:49:21<SeP>2024-02-12 10:51:54<SeP>2024-02-13 21:54:27<SeP>2024-02-15 08:57:00<SeP>2024-02-16 19:59:33<SeP>2024-02-18 07:02:06<SeP>2024-02-19 18:04:39<SeP>2024-02-21 05:07:12<SeP>2024-02-22 16:09:45<SeP>2024-02-24 03:12:18<SeP>2024-02-25 14:14:51<SeP>2024-02-27 01:17:24<SeP>2024-02-28 12:19:57<SeP>2024-02-29 23:22:30<SeP>2024-03-02 10:25:03<SeP>2024-03-03 21:27:36<SeP>2024-03-05 08:30:09<SeP>2024-03-06 19:32:42<SeP>2024-03-08 06:35:15<SeP>2024-03-09 17:37:48<SeP>2024-03-11 05:40:21<SeP>2024-03-12 16:42:54<SeP>2024-03-14 03:45:27<SeP>2024-03-15 14:48:00<SeP>2024-03-17 01:50:33<SeP>2024-03-18 12:53:06<SeP>2024-03-19 23:55:39<SeP>2024-03-21 10:58:12<SeP>2024-03-22 22:00:45<SeP>2024-03-24 09:03:18<SeP>2024-03-25 20:05:51<SeP>2024-03-27 07:08:24<SeP>2024-03-28 18:10:57<SeP>2024-03-30 05:13:30<SeP>2024-03-31 16:16:03<SeP>2024-04-02 03:18:36<SeP>2024-04-03 14:21:09<SeP>2024-04-05 01:23:42<SeP>2024-04-06 12:26:15<SeP>2024-04-07 23:28:48<SeP>2024-04-09 10:31:21<SeP>2024-04-10 21:33:54<SeP>2024-04-12 08:36:27<SeP>2024-04-13 19:39:00<SeP>2024-04-15 06:41:33<SeP>2024-04-16 17:44:06<SeP>2024-04-18 04:46:39<SeP>2024-04-19 15:49:12<SeP>2024-04-21 02:51:45<SeP>2024-04-22 13:54:18<SeP>2024-04-24 00:56:51<SeP>2024-04-25 11:59:24<SeP>2024-04-26 23:01:57<SeP>2024-04-28 10:04:30<SeP>2024-04-29 21:07:03<SeP>2024-05-01 08:09:36<SeP>2024-05-02 19:12:09<SeP>2024-05-04 06:14:42<SeP>2024-05-05 17:17:15<SeP>2024-05-07 04:19:48<SeP>2024-05-08 15:22:21<SeP>2024-05-10 02:24:54<SeP>2024-05-11 13:27:27<SeP>2024-05-13 00:30:00<SeP>2024-05-14 11:32:33<SeP>2024-05-15 22:35:06<SeP>2024-05-17 09:37:39<SeP>2024-05-18 20:40:12<SeP>2024-05-20 07:42:45<SeP>2024-05-21 18:45:18<SeP>2024-05-23 05:47:51<SeP>2024-05-24 16:50:24<SeP>2024-05-26 03:52:57<SeP>2024-05-27 14:55:30<SeP>2024-05-29 01:58:03<SeP>2024-05-30 13:00:36<SeP>2024-06-01 00:03:09<SeP>2024-06-02 11:05:42<SeP>2024-06-03 22:08:15<SeP>2024-06-05 09:10:48<SeP>2024-06-06 20:13:21<SeP>2024-06-08 07:15:54<SeP>2024-06-09 18:18:27<SeP>2024-06-11 05:21:00<SeP>2024-06-12 16:23:33<SeP>2024-06-14 03:26:06<SeP>2024-06-15 14:28:39<SeP>2024-06-17 01:31:12<SeP>2024-06-18 12:33:45<SeP>2024-06-19 23:36:18<SeP>2024-06-21 10:38:51<SeP>2024-06-22 21:41:24<SeP>2024-06-24 08:43:57<SeP>2024-06-25 19:46:30<SeP>2024-06-27 06:49:03<SeP>2024-06-28 17:51:36<SeP>2024-06-30 04:54:09<SeP>2024-07-01 15:56:42<SeP>2024-07-03 02:59:15<SeP>2024-07-04 14:01:48<SeP>2024-07-06 01:04:21<SeP>2024-07-07 12:06:54<SeP>2024-07-08 23:09:27<SeP>2024-07-10 10:12:00<SeP>2024-07-11 21:14:33<SeP>2024-07-13 08:17:06<SeP>2024-07-14 19:19:39<SeP>2024-07-16 06:22:12<SeP>2024-07-17 17:24:45<SeP>2024-07-19 04:27:18<SeP>2024-07-20 15:29:51<SeP>2024-07-22 02:32:24<SeP>2024-07-23 13:34:57<SeP>2024-07-25 00:37:30<SeP>2024-07-26 11:40:03<SeP>2024-07-27 22:42:36<SeP>2024-07-29 09:45:09<SeP>2024-07-30 20:47:42<SeP>2024-08-01 07:50:15<SeP>2024-08-02 18:52:48<SeP>2024-08-04 05:55:21<SeP>2024-08-05 16:57:54<SeP>2024-08-07 04:00:27<SeP>2024-08-08 15:03:00<SeP>2024-08-10 02:05:33<SeP>2024-08-11 13:08:06<SeP>2024-08-13 00:10:39<SeP>2024-08-14 11:13:12<SeP>2024-08-15 22:15:45<SeP>2024-08-17 09:18:18<SeP>2024-08-18 20:20:51<SeP>2024-08-20 07:23:24<SeP>2024-08-21 18:25:57<SeP>2024-08-23 05:28:30<SeP>2024-08-24 16:31:03<SeP>2024-08-26 03:33:36<SeP>2024-08-27 14:36:09<SeP>2024-08-29 01:38:42<SeP>2024-08-30 12:41:15<SeP>2024-08-31 23:43:48<SeP>2024-09-02 10:46:21<SeP>2024-09-03 21:48:54<SeP>2024-09-05 08:51:27<SeP>2024-09-06 19:54:00<SeP>2024-09-08 06:56:33<SeP>2024-09-09 17:59:06<SeP>2024-09-11 05:01:39<SeP>2024-09-12 16:04:12<SeP>2024-09-14 03:06:45<SeP>2024-09-15 14:09:18<SeP>2024-09-17 01:11:51<SeP>2024-09-18 12:14:24<SeP>2024-09-19 23:16:57<SeP>2024-09-21 10:19:30<SeP>2024-09-22 21:22:03<SeP>2024-09-24 08:24:36<SeP>2024-09-25 19:27:09<SeP>2024-09-27 06:29:42<SeP>2024-09-28 17:32:15<SeP>2024-09-30 04:34:48<SeP>2024-10-01 15:37:21<SeP>2024-10-03 02:39:54<SeP>2024-10-04 13:42:27<SeP>2024-10-06 00:45:00<SeP>2024-10-07 11:47:33<SeP>2024-10-08 22:50:06<SeP>2024-10-10 09:52:39<SeP>2024-10-11 20:55:12<SeP>2024-10-13 07:57:45<SeP>2024-10-14 19:00:18<SeP>2024-10-16 06:02:51<SeP>2024-10-17 17:05:24<SeP>2024-10-19 04:07:57<SeP>2024-10-20 15:10:30<SeP>2024-10-22 02:13:03<SeP>2024-10-23 13:15:36<SeP>2024-10-25 00:18:09<SeP>2024-10-26 11:20:42<SeP>2024-10-27 22:23:15<SeP>2024-10-29 09:25:48<SeP>2024-10-30 20:28:21<SeP>2024-11-01 07:30:54<SeP>2024-11-02 18:33:27<SeP>2024-11-04 04:36:00<SeP>2024-11-05 15:38:33<SeP>2024-11-07 02:41:06<SeP>2024-11-08 13:43:39<SeP>2024-11-10 00:46:12<SeP>2024-11-11 11:48:45<SeP>2024-11-12 22:51:18<SeP>2024-11-14 09:53:51<SeP>2024-11-15 20:56:24<SeP>2024-11-17 07:58:57<SeP>2024-11-18 19:01:30<SeP>2024-11-20 06:04:03<SeP>2024-11-21 17:06:36<SeP>2024-11-23 04:09:09<SeP>2024-11-24 15:11:42<SeP>2024-11-26 02:14:15<SeP>2024-11-27 13:16:48<SeP>2024-11-29 00:19:21<SeP>2024-11-30 11:21:54<SeP>2024-12-01 22:24:27<SeP>2024-12-03 09:27:00<SeP>2024-12-04 20:29:33<SeP>2024-12-06 07:32:06<SeP>2024-12-07 18:34:39<SeP>2024-12-09 05:37:12<SeP>2024-12-10 16:39:45<SeP>2024-12-12 03:42:18<SeP>2024-12-13 14:44:51<SeP>2024-12-15 01:47:24<SeP>2024-12-16 12:49:57<SeP>2024-12-17 23:52:30<SeP>2024-12-19 10:55:03<SeP>2024-12-20 21:57:36<SeP>2024-12-22 09:00:09<SeP>2024-12-23 20:02:42<SeP>2024-12-25 07:05:15<SeP>2024-12-26 18:07:48<SeP>2024-12-28 05:10:21<SeP>2024-12-29 16:12:54<SeP>2024-12-31 03:15:27<SeP>2025-01-01 14:18:00<SeP>2025-01-03 01:20:33<SeP>2025-01-04 12:23:06<SeP>2025-01-05 23:25:39<SeP>2025-01-07 10:28:12<SeP>2025-01-08 21:30:45<SeP>2025-01-10 08:33:18<SeP>2025-01-11 19:35:51<SeP>2025-01-13 06:38:24<SeP>2025-01-14 17:40:57<SeP>2025-01-16 04:43:30<SeP>2025-01-17 15:46:03<SeP>2025-01-19 02:48:36<SeP>2025-01-20 13:51:09<SeP>2025-01-22 00:53:42<SeP>2025-01-23 11:56:15<SeP>2025-01-24 22:58:48<SeP>2025-01-26 10:01:21<SeP>2025-01-27 21:03:54<SeP>2025-01-29 08:06:27<SeP>2025-01-30 19:09:00<SeP>2025-02-01 06:11:33<SeP>2025-02-02 17:14:06<SeP>2025-02-04 04:16:39<SeP>2025-02-05 15:19:12<SeP>2025-02-07 02:21:45<SeP>2025-02-08 13:24:18<SeP>2025-02-10 00:26:51<SeP>2025-02-11 11:29:24<SeP>2025-02-12 22:31:57<SeP>2025-02-14 09:34:30<SeP>2025-02-15 20:37:03<SeP>2025-02-17 07:39:36<SeP>2025-02-18 18:42:09<SeP>2025-02-20 05:44:42<SeP>2025-02-21 16:47:15<SeP>2025-02-23 03:49:48<SeP>2025-02-24 14:52:21<SeP>2025-02-26 01:54:54<SeP>2025-02-27 12:57:27";
  const itemLabel       = "Attacks";
  const itemData        = "155<SeP>614<SeP>1104<SeP>602<SeP>563<SeP>213<SeP>6966<SeP>535<SeP>9532<SeP>573<SeP>396<SeP>1127<SeP>1254<SeP>277<SeP>151<SeP>460<SeP>114<SeP>763<SeP>279<SeP>5714<SeP>7315<SeP>6800<SeP>8294<SeP>5402<SeP>213<SeP>280<SeP>429<SeP>129<SeP>5775<SeP>499<SeP>169<SeP>292<SeP>424<SeP>339<SeP>4513<SeP>10675<SeP>8608<SeP>10601<SeP>8382<SeP>5256<SeP>7290<SeP>7043<SeP>9500<SeP>8803<SeP>8118<SeP>8061<SeP>8415<SeP>8504<SeP>8129<SeP>6712<SeP>5503<SeP>12016<SeP>7235<SeP>7469<SeP>7232<SeP>9525<SeP>9416<SeP>17841<SeP>17033<SeP>8623<SeP>11320<SeP>6269<SeP>8626<SeP>8594<SeP>8464<SeP>8777<SeP>5864<SeP>6921<SeP>7318<SeP>6449<SeP>2834<SeP>6160<SeP>5438<SeP>6423<SeP>7241<SeP>8238<SeP>2439<SeP>6335<SeP>6137<SeP>6375<SeP>5386<SeP>6542<SeP>4620<SeP>6582<SeP>5989<SeP>5486<SeP>5958<SeP>5606<SeP>21886<SeP>11294<SeP>34535<SeP>7871<SeP>7801<SeP>6162<SeP>12488<SeP>6905<SeP>4822<SeP>6543<SeP>3755<SeP>5461<SeP>6291<SeP>5197<SeP>8687<SeP>6009<SeP>6057<SeP>4593<SeP>5431<SeP>9454<SeP>7350<SeP>7867<SeP>5790<SeP>4369<SeP>10648<SeP>9078<SeP>5445<SeP>3128<SeP>6482<SeP>8924<SeP>5634<SeP>6527<SeP>9752<SeP>4844<SeP>1593<SeP>2161<SeP>1492<SeP>2255<SeP>2277<SeP>1072<SeP>760<SeP>1152<SeP>1319<SeP>1627<SeP>986<SeP>929<SeP>1169<SeP>1048<SeP>801<SeP>1376<SeP>1422<SeP>1233<SeP>837<SeP>2242<SeP>2040<SeP>6317<SeP>10355<SeP>8092<SeP>8148<SeP>7114<SeP>12659<SeP>2635<SeP>11474<SeP>10005<SeP>8995<SeP>13198<SeP>8191<SeP>12359<SeP>12052<SeP>7169<SeP>12859<SeP>5117<SeP>4951<SeP>7016<SeP>23783<SeP>7768<SeP>7778<SeP>8385<SeP>17267<SeP>9312<SeP>7463<SeP>5264<SeP>6765<SeP>8666<SeP>25316<SeP>6957<SeP>10197<SeP>9196<SeP>5310<SeP>5452<SeP>7296<SeP>15356<SeP>5001<SeP>13279<SeP>7260<SeP>7120<SeP>8826<SeP>6298<SeP>3884<SeP>6161<SeP>6759<SeP>5968<SeP>7069<SeP>6849<SeP>5446<SeP>21078<SeP>6670<SeP>6027<SeP>6268<SeP>8259<SeP>10883<SeP>6869<SeP>4698<SeP>3695<SeP>6298<SeP>3287<SeP>4247<SeP>4174<SeP>642<SeP>92<SeP>647<SeP>500<SeP>685<SeP>709<SeP>368<SeP>626<SeP>1258<SeP>1202<SeP>3171<SeP>22905<SeP>591<SeP>3448<SeP>3544<SeP>3029<SeP>7178<SeP>3014<SeP>4302<SeP>2263<SeP>3919<SeP>2871<SeP>2976<SeP>4212<SeP>2985<SeP>2381<SeP>3501<SeP>2049<SeP>2027<SeP>1748<SeP>1550<SeP>960<SeP>1693<SeP>936<SeP>1417<SeP>1031<SeP>27071<SeP>2107<SeP>3801<SeP>3562<SeP>2469<SeP>3608<SeP>2764<SeP>1853<SeP>3732<SeP>2761<SeP>3574<SeP>2021<SeP>2991<SeP>3517<SeP>5019<SeP>4940<SeP>5201<SeP>4367<SeP>2635<SeP>2304<SeP>5243<SeP>3442<SeP>9586<SeP>5478<SeP>3669<SeP>2166<SeP>2396<SeP>4976<SeP>3484<SeP>3299<SeP>2984<SeP>3043<SeP>5935<SeP>3361<SeP>5945<SeP>3301<SeP>5908<SeP>4255<SeP>5931<SeP>5096<SeP>15079<SeP>12890<SeP>12508<SeP>1830<SeP>2293<SeP>4903<SeP>3402<SeP>3887<SeP>3949<SeP>5005<SeP>3987<SeP>4483<SeP>4246<SeP>3559<SeP>3306<SeP>1255<SeP>1964<SeP>3255<SeP>2828<SeP>2176<SeP>3981<SeP>3961<SeP>4305<SeP>3025<SeP>4150<SeP>3225<SeP>3828<SeP>3179<SeP>8050<SeP>6941<SeP>5258<SeP>4705<SeP>5193<SeP>4164<SeP>3647<SeP>4510<SeP>3994<SeP>6272<SeP>4702<SeP>5369<SeP>1984<SeP>745<SeP>1567<SeP>1765<SeP>1127<SeP>1079<SeP>2083<SeP>1091<SeP>1639<SeP>3936<SeP>4894<SeP>6428<SeP>34278<SeP>4666<SeP>4671<SeP>23524<SeP>5705<SeP>5266<SeP>5780<SeP>4512<SeP>24479<SeP>4851<SeP>5438<SeP>4795<SeP>5481<SeP>7992<SeP>27334<SeP>4660<SeP>3645<SeP>4339<SeP>4482<SeP>5882<SeP>3960<SeP>3221<SeP>3275<SeP>4216<SeP>5632<SeP>4640<SeP>17613<SeP>5876<SeP>6614<SeP>5074<SeP>1345<SeP>3938<SeP>4494<SeP>3647<SeP>4567<SeP>2840<SeP>3559<SeP>2901<SeP>3832<SeP>3377<SeP>6689<SeP>9373<SeP>9868<SeP>8719<SeP>8667<SeP>7443<SeP>6897<SeP>5254<SeP>4646<SeP>8865<SeP>20623<SeP>3270<SeP>4362<SeP>3215<SeP>11431<SeP>5207<SeP>4220<SeP>4405<SeP>4529<SeP>3299<SeP>6405<SeP>10176<SeP>6362<SeP>3884<SeP>3245<SeP>2903";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:02:33<SeP>2023-07-28 22:05:06<SeP>2023-07-30 09:07:39<SeP>2023-07-31 20:10:12<SeP>2023-08-02 07:12:45<SeP>2023-08-03 18:15:18<SeP>2023-08-05 05:17:51<SeP>2023-08-06 16:20:24<SeP>2023-08-08 03:22:57<SeP>2023-08-09 14:25:30<SeP>2023-08-11 01:28:03<SeP>2023-08-12 12:30:36<SeP>2023-08-13 23:33:09<SeP>2023-08-15 10:35:42<SeP>2023-08-16 21:38:15<SeP>2023-08-18 08:40:48<SeP>2023-08-19 19:43:21<SeP>2023-08-21 06:45:54<SeP>2023-08-22 17:48:27<SeP>2023-08-24 04:51:00<SeP>2023-08-25 15:53:33<SeP>2023-08-27 02:56:06<SeP>2023-08-28 13:58:39<SeP>2023-08-30 01:01:12<SeP>2023-08-31 12:03:45<SeP>2023-09-01 23:06:18<SeP>2023-09-03 10:08:51<SeP>2023-09-04 21:11:24<SeP>2023-09-06 08:13:57<SeP>2023-09-07 19:16:30<SeP>2023-09-09 06:19:03<SeP>2023-09-10 17:21:36<SeP>2023-09-12 04:24:09<SeP>2023-09-13 15:26:42<SeP>2023-09-15 02:29:15<SeP>2023-09-16 13:31:48<SeP>2023-09-18 00:34:21<SeP>2023-09-19 11:36:54<SeP>2023-09-20 22:39:27<SeP>2023-09-22 09:42:00<SeP>2023-09-23 20:44:33<SeP>2023-09-25 07:47:06<SeP>2023-09-26 18:49:39<SeP>2023-09-28 05:52:12<SeP>2023-09-29 16:54:45<SeP>2023-10-01 03:57:18<SeP>2023-10-02 14:59:51<SeP>2023-10-04 02:02:24<SeP>2023-10-05 13:04:57<SeP>2023-10-07 00:07:30<SeP>2023-10-08 11:10:03<SeP>2023-10-09 22:12:36<SeP>2023-10-11 09:15:09<SeP>2023-10-12 20:17:42<SeP>2023-10-14 07:20:15<SeP>2023-10-15 18:22:48<SeP>2023-10-17 05:25:21<SeP>2023-10-18 16:27:54<SeP>2023-10-20 03:30:27<SeP>2023-10-21 14:33:00<SeP>2023-10-23 01:35:33<SeP>2023-10-24 12:38:06<SeP>2023-10-25 23:40:39<SeP>2023-10-27 10:43:12<SeP>2023-10-28 21:45:45<SeP>2023-10-30 08:48:18<SeP>2023-10-31 19:50:51<SeP>2023-11-02 06:53:24<SeP>2023-11-03 17:55:57<SeP>2023-11-05 03:58:30<SeP>2023-11-06 15:01:03<SeP>2023-11-08 02:03:36<SeP>2023-11-09 13:06:09<SeP>2023-11-11 00:08:42<SeP>2023-11-12 11:11:15<SeP>2023-11-13 22:13:48<SeP>2023-11-15 09:16:21<SeP>2023-11-16 20:18:54<SeP>2023-11-18 07:21:27<SeP>2023-11-19 18:24:00<SeP>2023-11-21 05:26:33<SeP>2023-11-22 16:29:06<SeP>2023-11-24 03:31:39<SeP>2023-11-25 14:34:12<SeP>2023-11-27 01:36:45<SeP>2023-11-28 12:39:18<SeP>2023-11-29 23:41:51<SeP>2023-12-01 10:44:24<SeP>2023-12-02 21:46:57<SeP>2023-12-04 08:49:30<SeP>2023-12-05 19:52:03<SeP>2023-12-07 06:54:36<SeP>2023-12-08 17:57:09<SeP>2023-12-10 04:59:42<SeP>2023-12-11 16:02:15<SeP>2023-12-13 03:04:48<SeP>2023-12-14 14:07:21<SeP>2023-12-16 01:09:54<SeP>2023-12-17 12:12:27<SeP>2023-12-18 23:15:00<SeP>2023-12-20 10:17:33<SeP>2023-12-21 21:20:06<SeP>2023-12-23 08:22:39<SeP>2023-12-24 19:25:12<SeP>2023-12-26 06:27:45<SeP>2023-12-27 17:30:18<SeP>2023-12-29 04:32:51<SeP>2023-12-30 15:35:24<SeP>2024-01-01 02:37:57<SeP>2024-01-02 13:40:30<SeP>2024-01-04 00:43:03<SeP>2024-01-05 11:45:36<SeP>2024-01-06 22:48:09<SeP>2024-01-08 09:50:42<SeP>2024-01-09 20:53:15<SeP>2024-01-11 07:55:48<SeP>2024-01-12 18:58:21<SeP>2024-01-14 06:00:54<SeP>2024-01-15 17:03:27<SeP>2024-01-17 04:06:00<SeP>2024-01-18 15:08:33<SeP>2024-01-20 02:11:06<SeP>2024-01-21 13:13:39<SeP>2024-01-23 00:16:12<SeP>2024-01-24 11:18:45<SeP>2024-01-25 22:21:18<SeP>2024-01-27 09:23:51<SeP>2024-01-28 20:26:24<SeP>2024-01-30 07:28:57<SeP>2024-01-31 18:31:30<SeP>2024-02-02 05:34:03<SeP>2024-02-03 16:36:36<SeP>2024-02-05 03:39:09<SeP>2024-02-06 14:41:42<SeP>2024-02-08 01:44:15<SeP>2024-02-09 12:46:48<SeP>2024-02-10 23:49:21<SeP>2024-02-12 10:51:54<SeP>2024-02-13 21:54:27<SeP>2024-02-15 08:57:00<SeP>2024-02-16 19:59:33<SeP>2024-02-18 07:02:06<SeP>2024-02-19 18:04:39<SeP>2024-02-21 05:07:12<SeP>2024-02-22 16:09:45<SeP>2024-02-24 03:12:18<SeP>2024-02-25 14:14:51<SeP>2024-02-27 01:17:24<SeP>2024-02-28 12:19:57<SeP>2024-02-29 23:22:30<SeP>2024-03-02 10:25:03<SeP>2024-03-03 21:27:36<SeP>2024-03-05 08:30:09<SeP>2024-03-06 19:32:42<SeP>2024-03-08 06:35:15<SeP>2024-03-09 17:37:48<SeP>2024-03-11 05:40:21<SeP>2024-03-12 16:42:54<SeP>2024-03-14 03:45:27<SeP>2024-03-15 14:48:00<SeP>2024-03-17 01:50:33<SeP>2024-03-18 12:53:06<SeP>2024-03-19 23:55:39<SeP>2024-03-21 10:58:12<SeP>2024-03-22 22:00:45<SeP>2024-03-24 09:03:18<SeP>2024-03-25 20:05:51<SeP>2024-03-27 07:08:24<SeP>2024-03-28 18:10:57<SeP>2024-03-30 05:13:30<SeP>2024-03-31 16:16:03<SeP>2024-04-02 03:18:36<SeP>2024-04-03 14:21:09<SeP>2024-04-05 01:23:42<SeP>2024-04-06 12:26:15<SeP>2024-04-07 23:28:48<SeP>2024-04-09 10:31:21<SeP>2024-04-10 21:33:54<SeP>2024-04-12 08:36:27<SeP>2024-04-13 19:39:00<SeP>2024-04-15 06:41:33<SeP>2024-04-16 17:44:06<SeP>2024-04-18 04:46:39<SeP>2024-04-19 15:49:12<SeP>2024-04-21 02:51:45<SeP>2024-04-22 13:54:18<SeP>2024-04-24 00:56:51<SeP>2024-04-25 11:59:24<SeP>2024-04-26 23:01:57<SeP>2024-04-28 10:04:30<SeP>2024-04-29 21:07:03<SeP>2024-05-01 08:09:36<SeP>2024-05-02 19:12:09<SeP>2024-05-04 06:14:42<SeP>2024-05-05 17:17:15<SeP>2024-05-07 04:19:48<SeP>2024-05-08 15:22:21<SeP>2024-05-10 02:24:54<SeP>2024-05-11 13:27:27<SeP>2024-05-13 00:30:00<SeP>2024-05-14 11:32:33<SeP>2024-05-15 22:35:06<SeP>2024-05-17 09:37:39<SeP>2024-05-18 20:40:12<SeP>2024-05-20 07:42:45<SeP>2024-05-21 18:45:18<SeP>2024-05-23 05:47:51<SeP>2024-05-24 16:50:24<SeP>2024-05-26 03:52:57<SeP>2024-05-27 14:55:30<SeP>2024-05-29 01:58:03<SeP>2024-05-30 13:00:36<SeP>2024-06-01 00:03:09<SeP>2024-06-02 11:05:42<SeP>2024-06-03 22:08:15<SeP>2024-06-05 09:10:48<SeP>2024-06-06 20:13:21<SeP>2024-06-08 07:15:54<SeP>2024-06-09 18:18:27<SeP>2024-06-11 05:21:00<SeP>2024-06-12 16:23:33<SeP>2024-06-14 03:26:06<SeP>2024-06-15 14:28:39<SeP>2024-06-17 01:31:12<SeP>2024-06-18 12:33:45<SeP>2024-06-19 23:36:18<SeP>2024-06-21 10:38:51<SeP>2024-06-22 21:41:24<SeP>2024-06-24 08:43:57<SeP>2024-06-25 19:46:30<SeP>2024-06-27 06:49:03<SeP>2024-06-28 17:51:36<SeP>2024-06-30 04:54:09<SeP>2024-07-01 15:56:42<SeP>2024-07-03 02:59:15<SeP>2024-07-04 14:01:48<SeP>2024-07-06 01:04:21<SeP>2024-07-07 12:06:54<SeP>2024-07-08 23:09:27<SeP>2024-07-10 10:12:00<SeP>2024-07-11 21:14:33<SeP>2024-07-13 08:17:06<SeP>2024-07-14 19:19:39<SeP>2024-07-16 06:22:12<SeP>2024-07-17 17:24:45<SeP>2024-07-19 04:27:18<SeP>2024-07-20 15:29:51<SeP>2024-07-22 02:32:24<SeP>2024-07-23 13:34:57<SeP>2024-07-25 00:37:30<SeP>2024-07-26 11:40:03<SeP>2024-07-27 22:42:36<SeP>2024-07-29 09:45:09<SeP>2024-07-30 20:47:42<SeP>2024-08-01 07:50:15<SeP>2024-08-02 18:52:48<SeP>2024-08-04 05:55:21<SeP>2024-08-05 16:57:54<SeP>2024-08-07 04:00:27<SeP>2024-08-08 15:03:00<SeP>2024-08-10 02:05:33<SeP>2024-08-11 13:08:06<SeP>2024-08-13 00:10:39<SeP>2024-08-14 11:13:12<SeP>2024-08-15 22:15:45<SeP>2024-08-17 09:18:18<SeP>2024-08-18 20:20:51<SeP>2024-08-20 07:23:24<SeP>2024-08-21 18:25:57<SeP>2024-08-23 05:28:30<SeP>2024-08-24 16:31:03<SeP>2024-08-26 03:33:36<SeP>2024-08-27 14:36:09<SeP>2024-08-29 01:38:42<SeP>2024-08-30 12:41:15<SeP>2024-08-31 23:43:48<SeP>2024-09-02 10:46:21<SeP>2024-09-03 21:48:54<SeP>2024-09-05 08:51:27<SeP>2024-09-06 19:54:00<SeP>2024-09-08 06:56:33<SeP>2024-09-09 17:59:06<SeP>2024-09-11 05:01:39<SeP>2024-09-12 16:04:12<SeP>2024-09-14 03:06:45<SeP>2024-09-15 14:09:18<SeP>2024-09-17 01:11:51<SeP>2024-09-18 12:14:24<SeP>2024-09-19 23:16:57<SeP>2024-09-21 10:19:30<SeP>2024-09-22 21:22:03<SeP>2024-09-24 08:24:36<SeP>2024-09-25 19:27:09<SeP>2024-09-27 06:29:42<SeP>2024-09-28 17:32:15<SeP>2024-09-30 04:34:48<SeP>2024-10-01 15:37:21<SeP>2024-10-03 02:39:54<SeP>2024-10-04 13:42:27<SeP>2024-10-06 00:45:00<SeP>2024-10-07 11:47:33<SeP>2024-10-08 22:50:06<SeP>2024-10-10 09:52:39<SeP>2024-10-11 20:55:12<SeP>2024-10-13 07:57:45<SeP>2024-10-14 19:00:18<SeP>2024-10-16 06:02:51<SeP>2024-10-17 17:05:24<SeP>2024-10-19 04:07:57<SeP>2024-10-20 15:10:30<SeP>2024-10-22 02:13:03<SeP>2024-10-23 13:15:36<SeP>2024-10-25 00:18:09<SeP>2024-10-26 11:20:42<SeP>2024-10-27 22:23:15<SeP>2024-10-29 09:25:48<SeP>2024-10-30 20:28:21<SeP>2024-11-01 07:30:54<SeP>2024-11-02 18:33:27<SeP>2024-11-04 04:36:00<SeP>2024-11-05 15:38:33<SeP>2024-11-07 02:41:06<SeP>2024-11-08 13:43:39<SeP>2024-11-10 00:46:12<SeP>2024-11-11 11:48:45<SeP>2024-11-12 22:51:18<SeP>2024-11-14 09:53:51<SeP>2024-11-15 20:56:24<SeP>2024-11-17 07:58:57<SeP>2024-11-18 19:01:30<SeP>2024-11-20 06:04:03<SeP>2024-11-21 17:06:36<SeP>2024-11-23 04:09:09<SeP>2024-11-24 15:11:42<SeP>2024-11-26 02:14:15<SeP>2024-11-27 13:16:48<SeP>2024-11-29 00:19:21<SeP>2024-11-30 11:21:54<SeP>2024-12-01 22:24:27<SeP>2024-12-03 09:27:00<SeP>2024-12-04 20:29:33<SeP>2024-12-06 07:32:06<SeP>2024-12-07 18:34:39<SeP>2024-12-09 05:37:12<SeP>2024-12-10 16:39:45<SeP>2024-12-12 03:42:18<SeP>2024-12-13 14:44:51<SeP>2024-12-15 01:47:24<SeP>2024-12-16 12:49:57<SeP>2024-12-17 23:52:30<SeP>2024-12-19 10:55:03<SeP>2024-12-20 21:57:36<SeP>2024-12-22 09:00:09<SeP>2024-12-23 20:02:42<SeP>2024-12-25 07:05:15<SeP>2024-12-26 18:07:48<SeP>2024-12-28 05:10:21<SeP>2024-12-29 16:12:54<SeP>2024-12-31 03:15:27<SeP>2025-01-01 14:18:00<SeP>2025-01-03 01:20:33<SeP>2025-01-04 12:23:06<SeP>2025-01-05 23:25:39<SeP>2025-01-07 10:28:12<SeP>2025-01-08 21:30:45<SeP>2025-01-10 08:33:18<SeP>2025-01-11 19:35:51<SeP>2025-01-13 06:38:24<SeP>2025-01-14 17:40:57<SeP>2025-01-16 04:43:30<SeP>2025-01-17 15:46:03<SeP>2025-01-19 02:48:36<SeP>2025-01-20 13:51:09<SeP>2025-01-22 00:53:42<SeP>2025-01-23 11:56:15<SeP>2025-01-24 22:58:48<SeP>2025-01-26 10:01:21<SeP>2025-01-27 21:03:54<SeP>2025-01-29 08:06:27<SeP>2025-01-30 19:09:00<SeP>2025-02-01 06:11:33<SeP>2025-02-02 17:14:06<SeP>2025-02-04 04:16:39<SeP>2025-02-05 15:19:12<SeP>2025-02-07 02:21:45<SeP>2025-02-08 13:24:18<SeP>2025-02-10 00:26:51<SeP>2025-02-11 11:29:24<SeP>2025-02-12 22:31:57<SeP>2025-02-14 09:34:30<SeP>2025-02-15 20:37:03<SeP>2025-02-17 07:39:36<SeP>2025-02-18 18:42:09<SeP>2025-02-20 05:44:42<SeP>2025-02-21 16:47:15<SeP>2025-02-23 03:49:48<SeP>2025-02-24 14:52:21<SeP>2025-02-26 01:54:54<SeP>2025-02-27 12:57:27";
  const item1Label       = "Escaneos";
  const item1Data        = "765<SeP>1488<SeP>1387<SeP>1439<SeP>1255<SeP>1708<SeP>957<SeP>946<SeP>1191<SeP>3386<SeP>2238<SeP>2027<SeP>2794<SeP>1522<SeP>720<SeP>977<SeP>1371<SeP>2919<SeP>1226<SeP>1631<SeP>1302<SeP>929<SeP>954<SeP>1377<SeP>812<SeP>938<SeP>802<SeP>2831<SeP>1612<SeP>1014<SeP>834<SeP>1353<SeP>1286<SeP>784<SeP>3113<SeP>1850<SeP>2556<SeP>1851<SeP>1553<SeP>1389<SeP>1289<SeP>1954<SeP>1920<SeP>2028<SeP>1564<SeP>1579<SeP>1561<SeP>1798<SeP>1735<SeP>1773<SeP>1835<SeP>1769<SeP>1462<SeP>3212<SeP>1629<SeP>1534<SeP>2101<SeP>1860<SeP>2190<SeP>1322<SeP>3864<SeP>1375<SeP>1516<SeP>1625<SeP>1142<SeP>1903<SeP>1742<SeP>1264<SeP>1292<SeP>1498<SeP>1152<SeP>2311<SeP>1233<SeP>1102<SeP>1360<SeP>3794<SeP>5645<SeP>1354<SeP>1299<SeP>1554<SeP>2093<SeP>1133<SeP>3560<SeP>4340<SeP>1604<SeP>1479<SeP>1008<SeP>3247<SeP>1255<SeP>1055<SeP>1014<SeP>1125<SeP>992<SeP>3095<SeP>895<SeP>1191<SeP>2989<SeP>4567<SeP>3621<SeP>978<SeP>866<SeP>975<SeP>936<SeP>1003<SeP>866<SeP>1157<SeP>3207<SeP>2713<SeP>1499<SeP>1659<SeP>722<SeP>800<SeP>1409<SeP>1278<SeP>1073<SeP>1012<SeP>2263<SeP>1107<SeP>1122<SeP>1075<SeP>1042<SeP>963<SeP>790<SeP>869<SeP>841<SeP>752<SeP>1125<SeP>845<SeP>902<SeP>831<SeP>844<SeP>897<SeP>706<SeP>735<SeP>840<SeP>946<SeP>919<SeP>791<SeP>863<SeP>767<SeP>816<SeP>1032<SeP>786<SeP>885<SeP>903<SeP>936<SeP>985<SeP>961<SeP>958<SeP>538<SeP>906<SeP>874<SeP>1111<SeP>936<SeP>1001<SeP>1207<SeP>1241<SeP>929<SeP>940<SeP>916<SeP>988<SeP>701<SeP>997<SeP>1059<SeP>952<SeP>859<SeP>902<SeP>1068<SeP>1013<SeP>1073<SeP>966<SeP>1157<SeP>869<SeP>890<SeP>1332<SeP>1954<SeP>1240<SeP>1002<SeP>1040<SeP>1205<SeP>964<SeP>955<SeP>769<SeP>711<SeP>969<SeP>1114<SeP>859<SeP>985<SeP>1248<SeP>1155<SeP>1167<SeP>1280<SeP>1065<SeP>1374<SeP>1115<SeP>1491<SeP>1209<SeP>1527<SeP>2108<SeP>1320<SeP>828<SeP>907<SeP>1059<SeP>1044<SeP>746<SeP>763<SeP>891<SeP>949<SeP>805<SeP>4712<SeP>3820<SeP>1996<SeP>1409<SeP>1128<SeP>866<SeP>1077<SeP>899<SeP>1012<SeP>988<SeP>1049<SeP>1012<SeP>1051<SeP>2383<SeP>1082<SeP>1150<SeP>1191<SeP>1323<SeP>1098<SeP>1045<SeP>990<SeP>1150<SeP>1103<SeP>985<SeP>1152<SeP>1079<SeP>1118<SeP>919<SeP>976<SeP>1368<SeP>1113<SeP>1098<SeP>1270<SeP>1305<SeP>1197<SeP>1509<SeP>1223<SeP>1089<SeP>1185<SeP>1166<SeP>1948<SeP>1276<SeP>1894<SeP>1672<SeP>1491<SeP>1974<SeP>1607<SeP>1172<SeP>1113<SeP>1421<SeP>1093<SeP>1554<SeP>1229<SeP>1237<SeP>1751<SeP>1519<SeP>1398<SeP>1595<SeP>1198<SeP>1311<SeP>1260<SeP>1152<SeP>1157<SeP>1154<SeP>1251<SeP>1253<SeP>1240<SeP>1462<SeP>1794<SeP>1449<SeP>1098<SeP>1669<SeP>1497<SeP>1157<SeP>1097<SeP>908<SeP>865<SeP>903<SeP>1022<SeP>1003<SeP>1818<SeP>1045<SeP>1139<SeP>1160<SeP>782<SeP>1012<SeP>997<SeP>1315<SeP>865<SeP>892<SeP>1133<SeP>1328<SeP>1647<SeP>1317<SeP>1047<SeP>1055<SeP>1100<SeP>1807<SeP>977<SeP>1209<SeP>992<SeP>1450<SeP>1217<SeP>855<SeP>1199<SeP>1064<SeP>985<SeP>868<SeP>982<SeP>1382<SeP>1275<SeP>1664<SeP>1549<SeP>1281<SeP>978<SeP>1124<SeP>1289<SeP>971<SeP>1066<SeP>1206<SeP>1016<SeP>1004<SeP>1275<SeP>1616<SeP>1280<SeP>1614<SeP>1309<SeP>1426<SeP>1596<SeP>1331<SeP>1499<SeP>1283<SeP>1416<SeP>1278<SeP>1757<SeP>1433<SeP>1425<SeP>1577<SeP>1269<SeP>1476<SeP>1236<SeP>1308<SeP>1265<SeP>1502<SeP>1618<SeP>1303<SeP>1259<SeP>1271<SeP>1369<SeP>1219<SeP>1221<SeP>1513<SeP>1767<SeP>1781<SeP>1186<SeP>631<SeP>1446<SeP>1926<SeP>1141<SeP>1426<SeP>1179<SeP>1191<SeP>1280<SeP>1454<SeP>1179<SeP>1579<SeP>1631<SeP>1487<SeP>1543<SeP>1685<SeP>1336<SeP>1421<SeP>1464<SeP>1616<SeP>1563<SeP>1148<SeP>1210<SeP>1869<SeP>1742<SeP>1780<SeP>1880<SeP>1678<SeP>1568<SeP>1591<SeP>1563<SeP>1552<SeP>1496<SeP>1739<SeP>1749<SeP>1700<SeP>1399";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "155<SeP>614<SeP>1104<SeP>602<SeP>563<SeP>213<SeP>6966<SeP>535<SeP>9532<SeP>573<SeP>396<SeP>1127<SeP>1254<SeP>277<SeP>151<SeP>460<SeP>114<SeP>763<SeP>279<SeP>5714<SeP>7315<SeP>6800<SeP>8294<SeP>5402<SeP>213<SeP>280<SeP>429<SeP>129<SeP>5775<SeP>499<SeP>169<SeP>292<SeP>424<SeP>339<SeP>4513<SeP>10675<SeP>8608<SeP>10601<SeP>8382<SeP>5256<SeP>7290<SeP>7043<SeP>9500<SeP>8803<SeP>8118<SeP>8061<SeP>8415<SeP>8504<SeP>8129<SeP>6712<SeP>5503<SeP>12016<SeP>7235<SeP>7469<SeP>7232<SeP>9525<SeP>9416<SeP>17841<SeP>17033<SeP>8623<SeP>11320<SeP>6269<SeP>8626<SeP>8594<SeP>8464<SeP>8777<SeP>5864<SeP>6921<SeP>7318<SeP>6449<SeP>2834<SeP>6160<SeP>5438<SeP>6423<SeP>7241<SeP>8238<SeP>2439<SeP>6335<SeP>6137<SeP>6375<SeP>5386<SeP>6542<SeP>4620<SeP>6582<SeP>5989<SeP>5486<SeP>5958<SeP>5606<SeP>21886<SeP>11294<SeP>34535<SeP>7871<SeP>7801<SeP>6162<SeP>12488<SeP>6905<SeP>4822<SeP>6543<SeP>3755<SeP>5461<SeP>6291<SeP>5197<SeP>8687<SeP>6009<SeP>6057<SeP>4593<SeP>5431<SeP>9454<SeP>7350<SeP>7867<SeP>5790<SeP>4369<SeP>10648<SeP>9078<SeP>5445<SeP>3128<SeP>6482<SeP>8924<SeP>5634<SeP>6527<SeP>9752<SeP>4844<SeP>1593<SeP>2161<SeP>1492<SeP>2255<SeP>2277<SeP>1072<SeP>760<SeP>1152<SeP>1319<SeP>1627<SeP>986<SeP>929<SeP>1169<SeP>1048<SeP>801<SeP>1376<SeP>1422<SeP>1233<SeP>837<SeP>2242<SeP>2040<SeP>6317<SeP>10355<SeP>8092<SeP>8148<SeP>7114<SeP>12659<SeP>2635<SeP>11474<SeP>10005<SeP>8995<SeP>13198<SeP>8191<SeP>12359<SeP>12052<SeP>7169<SeP>12859<SeP>5117<SeP>4951<SeP>7016<SeP>23783<SeP>7768<SeP>7778<SeP>8385<SeP>17267<SeP>9312<SeP>7463<SeP>5264<SeP>6765<SeP>8666<SeP>25316<SeP>6957<SeP>10197<SeP>9196<SeP>5310<SeP>5452<SeP>7296<SeP>15356<SeP>5001<SeP>13279<SeP>7260<SeP>7120<SeP>8826<SeP>6298<SeP>3884<SeP>6161<SeP>6759<SeP>5968<SeP>7069<SeP>6849<SeP>5446<SeP>21078<SeP>6670<SeP>6027<SeP>6268<SeP>8259<SeP>10883<SeP>6869<SeP>4698<SeP>3695<SeP>6298<SeP>3287<SeP>4247<SeP>4174<SeP>642<SeP>92<SeP>647<SeP>500<SeP>685<SeP>709<SeP>368<SeP>626<SeP>1258<SeP>1202<SeP>3171<SeP>22905<SeP>591<SeP>3448<SeP>3544<SeP>3029<SeP>7178<SeP>3014<SeP>4302<SeP>2263<SeP>3919<SeP>2871<SeP>2976<SeP>4212<SeP>2985<SeP>2381<SeP>3501<SeP>2049<SeP>2027<SeP>1748<SeP>1550<SeP>960<SeP>1693<SeP>936<SeP>1417<SeP>1031<SeP>27071<SeP>2107<SeP>3801<SeP>3562<SeP>2469<SeP>3608<SeP>2764<SeP>1853<SeP>3732<SeP>2761<SeP>3574<SeP>2021<SeP>2991<SeP>3517<SeP>5019<SeP>4940<SeP>5201<SeP>4367<SeP>2635<SeP>2304<SeP>5243<SeP>3442<SeP>9586<SeP>5478<SeP>3669<SeP>2166<SeP>2396<SeP>4976<SeP>3484<SeP>3299<SeP>2984<SeP>3043<SeP>5935<SeP>3361<SeP>5945<SeP>3301<SeP>5908<SeP>4255<SeP>5931<SeP>5096<SeP>15079<SeP>12890<SeP>12508<SeP>1830<SeP>2293<SeP>4903<SeP>3402<SeP>3887<SeP>3949<SeP>5005<SeP>3987<SeP>4483<SeP>4246<SeP>3559<SeP>3306<SeP>1255<SeP>1964<SeP>3255<SeP>2828<SeP>2176<SeP>3981<SeP>3961<SeP>4305<SeP>3025<SeP>4150<SeP>3225<SeP>3828<SeP>3179<SeP>8050<SeP>6941<SeP>5258<SeP>4705<SeP>5193<SeP>4164<SeP>3647<SeP>4510<SeP>3994<SeP>6272<SeP>4702<SeP>5369<SeP>1984<SeP>745<SeP>1567<SeP>1765<SeP>1127<SeP>1079<SeP>2083<SeP>1091<SeP>1639<SeP>3936<SeP>4894<SeP>6428<SeP>34278<SeP>4666<SeP>4671<SeP>23524<SeP>5705<SeP>5266<SeP>5780<SeP>4512<SeP>24479<SeP>4851<SeP>5438<SeP>4795<SeP>5481<SeP>7992<SeP>27334<SeP>4660<SeP>3645<SeP>4339<SeP>4482<SeP>5882<SeP>3960<SeP>3221<SeP>3275<SeP>4216<SeP>5632<SeP>4640<SeP>17613<SeP>5876<SeP>6614<SeP>5074<SeP>1345<SeP>3938<SeP>4494<SeP>3647<SeP>4567<SeP>2840<SeP>3559<SeP>2901<SeP>3832<SeP>3377<SeP>6689<SeP>9373<SeP>9868<SeP>8719<SeP>8667<SeP>7443<SeP>6897<SeP>5254<SeP>4646<SeP>8865<SeP>20623<SeP>3270<SeP>4362<SeP>3215<SeP>11431<SeP>5207<SeP>4220<SeP>4405<SeP>4529<SeP>3299<SeP>6405<SeP>10176<SeP>6362<SeP>3884<SeP>3245<SeP>2903";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:02:33<SeP>2023-07-28 22:05:06<SeP>2023-07-30 09:07:39<SeP>2023-07-31 20:10:12<SeP>2023-08-02 07:12:45<SeP>2023-08-03 18:15:18<SeP>2023-08-05 05:17:51<SeP>2023-08-06 16:20:24<SeP>2023-08-08 03:22:57<SeP>2023-08-09 14:25:30<SeP>2023-08-11 01:28:03<SeP>2023-08-12 12:30:36<SeP>2023-08-13 23:33:09<SeP>2023-08-15 10:35:42<SeP>2023-08-16 21:38:15<SeP>2023-08-18 08:40:48<SeP>2023-08-19 19:43:21<SeP>2023-08-21 06:45:54<SeP>2023-08-22 17:48:27<SeP>2023-08-24 04:51:00<SeP>2023-08-25 15:53:33<SeP>2023-08-27 02:56:06<SeP>2023-08-28 13:58:39<SeP>2023-08-30 01:01:12<SeP>2023-08-31 12:03:45<SeP>2023-09-01 23:06:18<SeP>2023-09-03 10:08:51<SeP>2023-09-04 21:11:24<SeP>2023-09-06 08:13:57<SeP>2023-09-07 19:16:30<SeP>2023-09-09 06:19:03<SeP>2023-09-10 17:21:36<SeP>2023-09-12 04:24:09<SeP>2023-09-13 15:26:42<SeP>2023-09-15 02:29:15<SeP>2023-09-16 13:31:48<SeP>2023-09-18 00:34:21<SeP>2023-09-19 11:36:54<SeP>2023-09-20 22:39:27<SeP>2023-09-22 09:42:00<SeP>2023-09-23 20:44:33<SeP>2023-09-25 07:47:06<SeP>2023-09-26 18:49:39<SeP>2023-09-28 05:52:12<SeP>2023-09-29 16:54:45<SeP>2023-10-01 03:57:18<SeP>2023-10-02 14:59:51<SeP>2023-10-04 02:02:24<SeP>2023-10-05 13:04:57<SeP>2023-10-07 00:07:30<SeP>2023-10-08 11:10:03<SeP>2023-10-09 22:12:36<SeP>2023-10-11 09:15:09<SeP>2023-10-12 20:17:42<SeP>2023-10-14 07:20:15<SeP>2023-10-15 18:22:48<SeP>2023-10-17 05:25:21<SeP>2023-10-18 16:27:54<SeP>2023-10-20 03:30:27<SeP>2023-10-21 14:33:00<SeP>2023-10-23 01:35:33<SeP>2023-10-24 12:38:06<SeP>2023-10-25 23:40:39<SeP>2023-10-27 10:43:12<SeP>2023-10-28 21:45:45<SeP>2023-10-30 08:48:18<SeP>2023-10-31 19:50:51<SeP>2023-11-02 06:53:24<SeP>2023-11-03 17:55:57<SeP>2023-11-05 03:58:30<SeP>2023-11-06 15:01:03<SeP>2023-11-08 02:03:36<SeP>2023-11-09 13:06:09<SeP>2023-11-11 00:08:42<SeP>2023-11-12 11:11:15<SeP>2023-11-13 22:13:48<SeP>2023-11-15 09:16:21<SeP>2023-11-16 20:18:54<SeP>2023-11-18 07:21:27<SeP>2023-11-19 18:24:00<SeP>2023-11-21 05:26:33<SeP>2023-11-22 16:29:06<SeP>2023-11-24 03:31:39<SeP>2023-11-25 14:34:12<SeP>2023-11-27 01:36:45<SeP>2023-11-28 12:39:18<SeP>2023-11-29 23:41:51<SeP>2023-12-01 10:44:24<SeP>2023-12-02 21:46:57<SeP>2023-12-04 08:49:30<SeP>2023-12-05 19:52:03<SeP>2023-12-07 06:54:36<SeP>2023-12-08 17:57:09<SeP>2023-12-10 04:59:42<SeP>2023-12-11 16:02:15<SeP>2023-12-13 03:04:48<SeP>2023-12-14 14:07:21<SeP>2023-12-16 01:09:54<SeP>2023-12-17 12:12:27<SeP>2023-12-18 23:15:00<SeP>2023-12-20 10:17:33<SeP>2023-12-21 21:20:06<SeP>2023-12-23 08:22:39<SeP>2023-12-24 19:25:12<SeP>2023-12-26 06:27:45<SeP>2023-12-27 17:30:18<SeP>2023-12-29 04:32:51<SeP>2023-12-30 15:35:24<SeP>2024-01-01 02:37:57<SeP>2024-01-02 13:40:30<SeP>2024-01-04 00:43:03<SeP>2024-01-05 11:45:36<SeP>2024-01-06 22:48:09<SeP>2024-01-08 09:50:42<SeP>2024-01-09 20:53:15<SeP>2024-01-11 07:55:48<SeP>2024-01-12 18:58:21<SeP>2024-01-14 06:00:54<SeP>2024-01-15 17:03:27<SeP>2024-01-17 04:06:00<SeP>2024-01-18 15:08:33<SeP>2024-01-20 02:11:06<SeP>2024-01-21 13:13:39<SeP>2024-01-23 00:16:12<SeP>2024-01-24 11:18:45<SeP>2024-01-25 22:21:18<SeP>2024-01-27 09:23:51<SeP>2024-01-28 20:26:24<SeP>2024-01-30 07:28:57<SeP>2024-01-31 18:31:30<SeP>2024-02-02 05:34:03<SeP>2024-02-03 16:36:36<SeP>2024-02-05 03:39:09<SeP>2024-02-06 14:41:42<SeP>2024-02-08 01:44:15<SeP>2024-02-09 12:46:48<SeP>2024-02-10 23:49:21<SeP>2024-02-12 10:51:54<SeP>2024-02-13 21:54:27<SeP>2024-02-15 08:57:00<SeP>2024-02-16 19:59:33<SeP>2024-02-18 07:02:06<SeP>2024-02-19 18:04:39<SeP>2024-02-21 05:07:12<SeP>2024-02-22 16:09:45<SeP>2024-02-24 03:12:18<SeP>2024-02-25 14:14:51<SeP>2024-02-27 01:17:24<SeP>2024-02-28 12:19:57<SeP>2024-02-29 23:22:30<SeP>2024-03-02 10:25:03<SeP>2024-03-03 21:27:36<SeP>2024-03-05 08:30:09<SeP>2024-03-06 19:32:42<SeP>2024-03-08 06:35:15<SeP>2024-03-09 17:37:48<SeP>2024-03-11 05:40:21<SeP>2024-03-12 16:42:54<SeP>2024-03-14 03:45:27<SeP>2024-03-15 14:48:00<SeP>2024-03-17 01:50:33<SeP>2024-03-18 12:53:06<SeP>2024-03-19 23:55:39<SeP>2024-03-21 10:58:12<SeP>2024-03-22 22:00:45<SeP>2024-03-24 09:03:18<SeP>2024-03-25 20:05:51<SeP>2024-03-27 07:08:24<SeP>2024-03-28 18:10:57<SeP>2024-03-30 05:13:30<SeP>2024-03-31 16:16:03<SeP>2024-04-02 03:18:36<SeP>2024-04-03 14:21:09<SeP>2024-04-05 01:23:42<SeP>2024-04-06 12:26:15<SeP>2024-04-07 23:28:48<SeP>2024-04-09 10:31:21<SeP>2024-04-10 21:33:54<SeP>2024-04-12 08:36:27<SeP>2024-04-13 19:39:00<SeP>2024-04-15 06:41:33<SeP>2024-04-16 17:44:06<SeP>2024-04-18 04:46:39<SeP>2024-04-19 15:49:12<SeP>2024-04-21 02:51:45<SeP>2024-04-22 13:54:18<SeP>2024-04-24 00:56:51<SeP>2024-04-25 11:59:24<SeP>2024-04-26 23:01:57<SeP>2024-04-28 10:04:30<SeP>2024-04-29 21:07:03<SeP>2024-05-01 08:09:36<SeP>2024-05-02 19:12:09<SeP>2024-05-04 06:14:42<SeP>2024-05-05 17:17:15<SeP>2024-05-07 04:19:48<SeP>2024-05-08 15:22:21<SeP>2024-05-10 02:24:54<SeP>2024-05-11 13:27:27<SeP>2024-05-13 00:30:00<SeP>2024-05-14 11:32:33<SeP>2024-05-15 22:35:06<SeP>2024-05-17 09:37:39<SeP>2024-05-18 20:40:12<SeP>2024-05-20 07:42:45<SeP>2024-05-21 18:45:18<SeP>2024-05-23 05:47:51<SeP>2024-05-24 16:50:24<SeP>2024-05-26 03:52:57<SeP>2024-05-27 14:55:30<SeP>2024-05-29 01:58:03<SeP>2024-05-30 13:00:36<SeP>2024-06-01 00:03:09<SeP>2024-06-02 11:05:42<SeP>2024-06-03 22:08:15<SeP>2024-06-05 09:10:48<SeP>2024-06-06 20:13:21<SeP>2024-06-08 07:15:54<SeP>2024-06-09 18:18:27<SeP>2024-06-11 05:21:00<SeP>2024-06-12 16:23:33<SeP>2024-06-14 03:26:06<SeP>2024-06-15 14:28:39<SeP>2024-06-17 01:31:12<SeP>2024-06-18 12:33:45<SeP>2024-06-19 23:36:18<SeP>2024-06-21 10:38:51<SeP>2024-06-22 21:41:24<SeP>2024-06-24 08:43:57<SeP>2024-06-25 19:46:30<SeP>2024-06-27 06:49:03<SeP>2024-06-28 17:51:36<SeP>2024-06-30 04:54:09<SeP>2024-07-01 15:56:42<SeP>2024-07-03 02:59:15<SeP>2024-07-04 14:01:48<SeP>2024-07-06 01:04:21<SeP>2024-07-07 12:06:54<SeP>2024-07-08 23:09:27<SeP>2024-07-10 10:12:00<SeP>2024-07-11 21:14:33<SeP>2024-07-13 08:17:06<SeP>2024-07-14 19:19:39<SeP>2024-07-16 06:22:12<SeP>2024-07-17 17:24:45<SeP>2024-07-19 04:27:18<SeP>2024-07-20 15:29:51<SeP>2024-07-22 02:32:24<SeP>2024-07-23 13:34:57<SeP>2024-07-25 00:37:30<SeP>2024-07-26 11:40:03<SeP>2024-07-27 22:42:36<SeP>2024-07-29 09:45:09<SeP>2024-07-30 20:47:42<SeP>2024-08-01 07:50:15<SeP>2024-08-02 18:52:48<SeP>2024-08-04 05:55:21<SeP>2024-08-05 16:57:54<SeP>2024-08-07 04:00:27<SeP>2024-08-08 15:03:00<SeP>2024-08-10 02:05:33<SeP>2024-08-11 13:08:06<SeP>2024-08-13 00:10:39<SeP>2024-08-14 11:13:12<SeP>2024-08-15 22:15:45<SeP>2024-08-17 09:18:18<SeP>2024-08-18 20:20:51<SeP>2024-08-20 07:23:24<SeP>2024-08-21 18:25:57<SeP>2024-08-23 05:28:30<SeP>2024-08-24 16:31:03<SeP>2024-08-26 03:33:36<SeP>2024-08-27 14:36:09<SeP>2024-08-29 01:38:42<SeP>2024-08-30 12:41:15<SeP>2024-08-31 23:43:48<SeP>2024-09-02 10:46:21<SeP>2024-09-03 21:48:54<SeP>2024-09-05 08:51:27<SeP>2024-09-06 19:54:00<SeP>2024-09-08 06:56:33<SeP>2024-09-09 17:59:06<SeP>2024-09-11 05:01:39<SeP>2024-09-12 16:04:12<SeP>2024-09-14 03:06:45<SeP>2024-09-15 14:09:18<SeP>2024-09-17 01:11:51<SeP>2024-09-18 12:14:24<SeP>2024-09-19 23:16:57<SeP>2024-09-21 10:19:30<SeP>2024-09-22 21:22:03<SeP>2024-09-24 08:24:36<SeP>2024-09-25 19:27:09<SeP>2024-09-27 06:29:42<SeP>2024-09-28 17:32:15<SeP>2024-09-30 04:34:48<SeP>2024-10-01 15:37:21<SeP>2024-10-03 02:39:54<SeP>2024-10-04 13:42:27<SeP>2024-10-06 00:45:00<SeP>2024-10-07 11:47:33<SeP>2024-10-08 22:50:06<SeP>2024-10-10 09:52:39<SeP>2024-10-11 20:55:12<SeP>2024-10-13 07:57:45<SeP>2024-10-14 19:00:18<SeP>2024-10-16 06:02:51<SeP>2024-10-17 17:05:24<SeP>2024-10-19 04:07:57<SeP>2024-10-20 15:10:30<SeP>2024-10-22 02:13:03<SeP>2024-10-23 13:15:36<SeP>2024-10-25 00:18:09<SeP>2024-10-26 11:20:42<SeP>2024-10-27 22:23:15<SeP>2024-10-29 09:25:48<SeP>2024-10-30 20:28:21<SeP>2024-11-01 07:30:54<SeP>2024-11-02 18:33:27<SeP>2024-11-04 04:36:00<SeP>2024-11-05 15:38:33<SeP>2024-11-07 02:41:06<SeP>2024-11-08 13:43:39<SeP>2024-11-10 00:46:12<SeP>2024-11-11 11:48:45<SeP>2024-11-12 22:51:18<SeP>2024-11-14 09:53:51<SeP>2024-11-15 20:56:24<SeP>2024-11-17 07:58:57<SeP>2024-11-18 19:01:30<SeP>2024-11-20 06:04:03<SeP>2024-11-21 17:06:36<SeP>2024-11-23 04:09:09<SeP>2024-11-24 15:11:42<SeP>2024-11-26 02:14:15<SeP>2024-11-27 13:16:48<SeP>2024-11-29 00:19:21<SeP>2024-11-30 11:21:54<SeP>2024-12-01 22:24:27<SeP>2024-12-03 09:27:00<SeP>2024-12-04 20:29:33<SeP>2024-12-06 07:32:06<SeP>2024-12-07 18:34:39<SeP>2024-12-09 05:37:12<SeP>2024-12-10 16:39:45<SeP>2024-12-12 03:42:18<SeP>2024-12-13 14:44:51<SeP>2024-12-15 01:47:24<SeP>2024-12-16 12:49:57<SeP>2024-12-17 23:52:30<SeP>2024-12-19 10:55:03<SeP>2024-12-20 21:57:36<SeP>2024-12-22 09:00:09<SeP>2024-12-23 20:02:42<SeP>2024-12-25 07:05:15<SeP>2024-12-26 18:07:48<SeP>2024-12-28 05:10:21<SeP>2024-12-29 16:12:54<SeP>2024-12-31 03:15:27<SeP>2025-01-01 14:18:00<SeP>2025-01-03 01:20:33<SeP>2025-01-04 12:23:06<SeP>2025-01-05 23:25:39<SeP>2025-01-07 10:28:12<SeP>2025-01-08 21:30:45<SeP>2025-01-10 08:33:18<SeP>2025-01-11 19:35:51<SeP>2025-01-13 06:38:24<SeP>2025-01-14 17:40:57<SeP>2025-01-16 04:43:30<SeP>2025-01-17 15:46:03<SeP>2025-01-19 02:48:36<SeP>2025-01-20 13:51:09<SeP>2025-01-22 00:53:42<SeP>2025-01-23 11:56:15<SeP>2025-01-24 22:58:48<SeP>2025-01-26 10:01:21<SeP>2025-01-27 21:03:54<SeP>2025-01-29 08:06:27<SeP>2025-01-30 19:09:00<SeP>2025-02-01 06:11:33<SeP>2025-02-02 17:14:06<SeP>2025-02-04 04:16:39<SeP>2025-02-05 15:19:12<SeP>2025-02-07 02:21:45<SeP>2025-02-08 13:24:18<SeP>2025-02-10 00:26:51<SeP>2025-02-11 11:29:24<SeP>2025-02-12 22:31:57<SeP>2025-02-14 09:34:30<SeP>2025-02-15 20:37:03<SeP>2025-02-17 07:39:36<SeP>2025-02-18 18:42:09<SeP>2025-02-20 05:44:42<SeP>2025-02-21 16:47:15<SeP>2025-02-23 03:49:48<SeP>2025-02-24 14:52:21<SeP>2025-02-26 01:54:54<SeP>2025-02-27 12:57:27";
  const itemLabel       = "Escaneos";
  const itemData        = "765<SeP>1488<SeP>1387<SeP>1439<SeP>1255<SeP>1708<SeP>957<SeP>946<SeP>1191<SeP>3386<SeP>2238<SeP>2027<SeP>2794<SeP>1522<SeP>720<SeP>977<SeP>1371<SeP>2919<SeP>1226<SeP>1631<SeP>1302<SeP>929<SeP>954<SeP>1377<SeP>812<SeP>938<SeP>802<SeP>2831<SeP>1612<SeP>1014<SeP>834<SeP>1353<SeP>1286<SeP>784<SeP>3113<SeP>1850<SeP>2556<SeP>1851<SeP>1553<SeP>1389<SeP>1289<SeP>1954<SeP>1920<SeP>2028<SeP>1564<SeP>1579<SeP>1561<SeP>1798<SeP>1735<SeP>1773<SeP>1835<SeP>1769<SeP>1462<SeP>3212<SeP>1629<SeP>1534<SeP>2101<SeP>1860<SeP>2190<SeP>1322<SeP>3864<SeP>1375<SeP>1516<SeP>1625<SeP>1142<SeP>1903<SeP>1742<SeP>1264<SeP>1292<SeP>1498<SeP>1152<SeP>2311<SeP>1233<SeP>1102<SeP>1360<SeP>3794<SeP>5645<SeP>1354<SeP>1299<SeP>1554<SeP>2093<SeP>1133<SeP>3560<SeP>4340<SeP>1604<SeP>1479<SeP>1008<SeP>3247<SeP>1255<SeP>1055<SeP>1014<SeP>1125<SeP>992<SeP>3095<SeP>895<SeP>1191<SeP>2989<SeP>4567<SeP>3621<SeP>978<SeP>866<SeP>975<SeP>936<SeP>1003<SeP>866<SeP>1157<SeP>3207<SeP>2713<SeP>1499<SeP>1659<SeP>722<SeP>800<SeP>1409<SeP>1278<SeP>1073<SeP>1012<SeP>2263<SeP>1107<SeP>1122<SeP>1075<SeP>1042<SeP>963<SeP>790<SeP>869<SeP>841<SeP>752<SeP>1125<SeP>845<SeP>902<SeP>831<SeP>844<SeP>897<SeP>706<SeP>735<SeP>840<SeP>946<SeP>919<SeP>791<SeP>863<SeP>767<SeP>816<SeP>1032<SeP>786<SeP>885<SeP>903<SeP>936<SeP>985<SeP>961<SeP>958<SeP>538<SeP>906<SeP>874<SeP>1111<SeP>936<SeP>1001<SeP>1207<SeP>1241<SeP>929<SeP>940<SeP>916<SeP>988<SeP>701<SeP>997<SeP>1059<SeP>952<SeP>859<SeP>902<SeP>1068<SeP>1013<SeP>1073<SeP>966<SeP>1157<SeP>869<SeP>890<SeP>1332<SeP>1954<SeP>1240<SeP>1002<SeP>1040<SeP>1205<SeP>964<SeP>955<SeP>769<SeP>711<SeP>969<SeP>1114<SeP>859<SeP>985<SeP>1248<SeP>1155<SeP>1167<SeP>1280<SeP>1065<SeP>1374<SeP>1115<SeP>1491<SeP>1209<SeP>1527<SeP>2108<SeP>1320<SeP>828<SeP>907<SeP>1059<SeP>1044<SeP>746<SeP>763<SeP>891<SeP>949<SeP>805<SeP>4712<SeP>3820<SeP>1996<SeP>1409<SeP>1128<SeP>866<SeP>1077<SeP>899<SeP>1012<SeP>988<SeP>1049<SeP>1012<SeP>1051<SeP>2383<SeP>1082<SeP>1150<SeP>1191<SeP>1323<SeP>1098<SeP>1045<SeP>990<SeP>1150<SeP>1103<SeP>985<SeP>1152<SeP>1079<SeP>1118<SeP>919<SeP>976<SeP>1368<SeP>1113<SeP>1098<SeP>1270<SeP>1305<SeP>1197<SeP>1509<SeP>1223<SeP>1089<SeP>1185<SeP>1166<SeP>1948<SeP>1276<SeP>1894<SeP>1672<SeP>1491<SeP>1974<SeP>1607<SeP>1172<SeP>1113<SeP>1421<SeP>1093<SeP>1554<SeP>1229<SeP>1237<SeP>1751<SeP>1519<SeP>1398<SeP>1595<SeP>1198<SeP>1311<SeP>1260<SeP>1152<SeP>1157<SeP>1154<SeP>1251<SeP>1253<SeP>1240<SeP>1462<SeP>1794<SeP>1449<SeP>1098<SeP>1669<SeP>1497<SeP>1157<SeP>1097<SeP>908<SeP>865<SeP>903<SeP>1022<SeP>1003<SeP>1818<SeP>1045<SeP>1139<SeP>1160<SeP>782<SeP>1012<SeP>997<SeP>1315<SeP>865<SeP>892<SeP>1133<SeP>1328<SeP>1647<SeP>1317<SeP>1047<SeP>1055<SeP>1100<SeP>1807<SeP>977<SeP>1209<SeP>992<SeP>1450<SeP>1217<SeP>855<SeP>1199<SeP>1064<SeP>985<SeP>868<SeP>982<SeP>1382<SeP>1275<SeP>1664<SeP>1549<SeP>1281<SeP>978<SeP>1124<SeP>1289<SeP>971<SeP>1066<SeP>1206<SeP>1016<SeP>1004<SeP>1275<SeP>1616<SeP>1280<SeP>1614<SeP>1309<SeP>1426<SeP>1596<SeP>1331<SeP>1499<SeP>1283<SeP>1416<SeP>1278<SeP>1757<SeP>1433<SeP>1425<SeP>1577<SeP>1269<SeP>1476<SeP>1236<SeP>1308<SeP>1265<SeP>1502<SeP>1618<SeP>1303<SeP>1259<SeP>1271<SeP>1369<SeP>1219<SeP>1221<SeP>1513<SeP>1767<SeP>1781<SeP>1186<SeP>631<SeP>1446<SeP>1926<SeP>1141<SeP>1426<SeP>1179<SeP>1191<SeP>1280<SeP>1454<SeP>1179<SeP>1579<SeP>1631<SeP>1487<SeP>1543<SeP>1685<SeP>1336<SeP>1421<SeP>1464<SeP>1616<SeP>1563<SeP>1148<SeP>1210<SeP>1869<SeP>1742<SeP>1780<SeP>1880<SeP>1678<SeP>1568<SeP>1591<SeP>1563<SeP>1552<SeP>1496<SeP>1739<SeP>1749<SeP>1700<SeP>1399";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:02:33<SeP>2023-07-28 22:05:06<SeP>2023-07-30 09:07:39<SeP>2023-07-31 20:10:12<SeP>2023-08-02 07:12:45<SeP>2023-08-03 18:15:18<SeP>2023-08-05 05:17:51<SeP>2023-08-06 16:20:24<SeP>2023-08-08 03:22:57<SeP>2023-08-09 14:25:30<SeP>2023-08-11 01:28:03<SeP>2023-08-12 12:30:36<SeP>2023-08-13 23:33:09<SeP>2023-08-15 10:35:42<SeP>2023-08-16 21:38:15<SeP>2023-08-18 08:40:48<SeP>2023-08-19 19:43:21<SeP>2023-08-21 06:45:54<SeP>2023-08-22 17:48:27<SeP>2023-08-24 04:51:00<SeP>2023-08-25 15:53:33<SeP>2023-08-27 02:56:06<SeP>2023-08-28 13:58:39<SeP>2023-08-30 01:01:12<SeP>2023-08-31 12:03:45<SeP>2023-09-01 23:06:18<SeP>2023-09-03 10:08:51<SeP>2023-09-04 21:11:24<SeP>2023-09-06 08:13:57<SeP>2023-09-07 19:16:30<SeP>2023-09-09 06:19:03<SeP>2023-09-10 17:21:36<SeP>2023-09-12 04:24:09<SeP>2023-09-13 15:26:42<SeP>2023-09-15 02:29:15<SeP>2023-09-16 13:31:48<SeP>2023-09-18 00:34:21<SeP>2023-09-19 11:36:54<SeP>2023-09-20 22:39:27<SeP>2023-09-22 09:42:00<SeP>2023-09-23 20:44:33<SeP>2023-09-25 07:47:06<SeP>2023-09-26 18:49:39<SeP>2023-09-28 05:52:12<SeP>2023-09-29 16:54:45<SeP>2023-10-01 03:57:18<SeP>2023-10-02 14:59:51<SeP>2023-10-04 02:02:24<SeP>2023-10-05 13:04:57<SeP>2023-10-07 00:07:30<SeP>2023-10-08 11:10:03<SeP>2023-10-09 22:12:36<SeP>2023-10-11 09:15:09<SeP>2023-10-12 20:17:42<SeP>2023-10-14 07:20:15<SeP>2023-10-15 18:22:48<SeP>2023-10-17 05:25:21<SeP>2023-10-18 16:27:54<SeP>2023-10-20 03:30:27<SeP>2023-10-21 14:33:00<SeP>2023-10-23 01:35:33<SeP>2023-10-24 12:38:06<SeP>2023-10-25 23:40:39<SeP>2023-10-27 10:43:12<SeP>2023-10-28 21:45:45<SeP>2023-10-30 08:48:18<SeP>2023-10-31 19:50:51<SeP>2023-11-02 06:53:24<SeP>2023-11-03 17:55:57<SeP>2023-11-05 03:58:30<SeP>2023-11-06 15:01:03<SeP>2023-11-08 02:03:36<SeP>2023-11-09 13:06:09<SeP>2023-11-11 00:08:42<SeP>2023-11-12 11:11:15<SeP>2023-11-13 22:13:48<SeP>2023-11-15 09:16:21<SeP>2023-11-16 20:18:54<SeP>2023-11-18 07:21:27<SeP>2023-11-19 18:24:00<SeP>2023-11-21 05:26:33<SeP>2023-11-22 16:29:06<SeP>2023-11-24 03:31:39<SeP>2023-11-25 14:34:12<SeP>2023-11-27 01:36:45<SeP>2023-11-28 12:39:18<SeP>2023-11-29 23:41:51<SeP>2023-12-01 10:44:24<SeP>2023-12-02 21:46:57<SeP>2023-12-04 08:49:30<SeP>2023-12-05 19:52:03<SeP>2023-12-07 06:54:36<SeP>2023-12-08 17:57:09<SeP>2023-12-10 04:59:42<SeP>2023-12-11 16:02:15<SeP>2023-12-13 03:04:48<SeP>2023-12-14 14:07:21<SeP>2023-12-16 01:09:54<SeP>2023-12-17 12:12:27<SeP>2023-12-18 23:15:00<SeP>2023-12-20 10:17:33<SeP>2023-12-21 21:20:06<SeP>2023-12-23 08:22:39<SeP>2023-12-24 19:25:12<SeP>2023-12-26 06:27:45<SeP>2023-12-27 17:30:18<SeP>2023-12-29 04:32:51<SeP>2023-12-30 15:35:24<SeP>2024-01-01 02:37:57<SeP>2024-01-02 13:40:30<SeP>2024-01-04 00:43:03<SeP>2024-01-05 11:45:36<SeP>2024-01-06 22:48:09<SeP>2024-01-08 09:50:42<SeP>2024-01-09 20:53:15<SeP>2024-01-11 07:55:48<SeP>2024-01-12 18:58:21<SeP>2024-01-14 06:00:54<SeP>2024-01-15 17:03:27<SeP>2024-01-17 04:06:00<SeP>2024-01-18 15:08:33<SeP>2024-01-20 02:11:06<SeP>2024-01-21 13:13:39<SeP>2024-01-23 00:16:12<SeP>2024-01-24 11:18:45<SeP>2024-01-25 22:21:18<SeP>2024-01-27 09:23:51<SeP>2024-01-28 20:26:24<SeP>2024-01-30 07:28:57<SeP>2024-01-31 18:31:30<SeP>2024-02-02 05:34:03<SeP>2024-02-03 16:36:36<SeP>2024-02-05 03:39:09<SeP>2024-02-06 14:41:42<SeP>2024-02-08 01:44:15<SeP>2024-02-09 12:46:48<SeP>2024-02-10 23:49:21<SeP>2024-02-12 10:51:54<SeP>2024-02-13 21:54:27<SeP>2024-02-15 08:57:00<SeP>2024-02-16 19:59:33<SeP>2024-02-18 07:02:06<SeP>2024-02-19 18:04:39<SeP>2024-02-21 05:07:12<SeP>2024-02-22 16:09:45<SeP>2024-02-24 03:12:18<SeP>2024-02-25 14:14:51<SeP>2024-02-27 01:17:24<SeP>2024-02-28 12:19:57<SeP>2024-02-29 23:22:30<SeP>2024-03-02 10:25:03<SeP>2024-03-03 21:27:36<SeP>2024-03-05 08:30:09<SeP>2024-03-06 19:32:42<SeP>2024-03-08 06:35:15<SeP>2024-03-09 17:37:48<SeP>2024-03-11 05:40:21<SeP>2024-03-12 16:42:54<SeP>2024-03-14 03:45:27<SeP>2024-03-15 14:48:00<SeP>2024-03-17 01:50:33<SeP>2024-03-18 12:53:06<SeP>2024-03-19 23:55:39<SeP>2024-03-21 10:58:12<SeP>2024-03-22 22:00:45<SeP>2024-03-24 09:03:18<SeP>2024-03-25 20:05:51<SeP>2024-03-27 07:08:24<SeP>2024-03-28 18:10:57<SeP>2024-03-30 05:13:30<SeP>2024-03-31 16:16:03<SeP>2024-04-02 03:18:36<SeP>2024-04-03 14:21:09<SeP>2024-04-05 01:23:42<SeP>2024-04-06 12:26:15<SeP>2024-04-07 23:28:48<SeP>2024-04-09 10:31:21<SeP>2024-04-10 21:33:54<SeP>2024-04-12 08:36:27<SeP>2024-04-13 19:39:00<SeP>2024-04-15 06:41:33<SeP>2024-04-16 17:44:06<SeP>2024-04-18 04:46:39<SeP>2024-04-19 15:49:12<SeP>2024-04-21 02:51:45<SeP>2024-04-22 13:54:18<SeP>2024-04-24 00:56:51<SeP>2024-04-25 11:59:24<SeP>2024-04-26 23:01:57<SeP>2024-04-28 10:04:30<SeP>2024-04-29 21:07:03<SeP>2024-05-01 08:09:36<SeP>2024-05-02 19:12:09<SeP>2024-05-04 06:14:42<SeP>2024-05-05 17:17:15<SeP>2024-05-07 04:19:48<SeP>2024-05-08 15:22:21<SeP>2024-05-10 02:24:54<SeP>2024-05-11 13:27:27<SeP>2024-05-13 00:30:00<SeP>2024-05-14 11:32:33<SeP>2024-05-15 22:35:06<SeP>2024-05-17 09:37:39<SeP>2024-05-18 20:40:12<SeP>2024-05-20 07:42:45<SeP>2024-05-21 18:45:18<SeP>2024-05-23 05:47:51<SeP>2024-05-24 16:50:24<SeP>2024-05-26 03:52:57<SeP>2024-05-27 14:55:30<SeP>2024-05-29 01:58:03<SeP>2024-05-30 13:00:36<SeP>2024-06-01 00:03:09<SeP>2024-06-02 11:05:42<SeP>2024-06-03 22:08:15<SeP>2024-06-05 09:10:48<SeP>2024-06-06 20:13:21<SeP>2024-06-08 07:15:54<SeP>2024-06-09 18:18:27<SeP>2024-06-11 05:21:00<SeP>2024-06-12 16:23:33<SeP>2024-06-14 03:26:06<SeP>2024-06-15 14:28:39<SeP>2024-06-17 01:31:12<SeP>2024-06-18 12:33:45<SeP>2024-06-19 23:36:18<SeP>2024-06-21 10:38:51<SeP>2024-06-22 21:41:24<SeP>2024-06-24 08:43:57<SeP>2024-06-25 19:46:30<SeP>2024-06-27 06:49:03<SeP>2024-06-28 17:51:36<SeP>2024-06-30 04:54:09<SeP>2024-07-01 15:56:42<SeP>2024-07-03 02:59:15<SeP>2024-07-04 14:01:48<SeP>2024-07-06 01:04:21<SeP>2024-07-07 12:06:54<SeP>2024-07-08 23:09:27<SeP>2024-07-10 10:12:00<SeP>2024-07-11 21:14:33<SeP>2024-07-13 08:17:06<SeP>2024-07-14 19:19:39<SeP>2024-07-16 06:22:12<SeP>2024-07-17 17:24:45<SeP>2024-07-19 04:27:18<SeP>2024-07-20 15:29:51<SeP>2024-07-22 02:32:24<SeP>2024-07-23 13:34:57<SeP>2024-07-25 00:37:30<SeP>2024-07-26 11:40:03<SeP>2024-07-27 22:42:36<SeP>2024-07-29 09:45:09<SeP>2024-07-30 20:47:42<SeP>2024-08-01 07:50:15<SeP>2024-08-02 18:52:48<SeP>2024-08-04 05:55:21<SeP>2024-08-05 16:57:54<SeP>2024-08-07 04:00:27<SeP>2024-08-08 15:03:00<SeP>2024-08-10 02:05:33<SeP>2024-08-11 13:08:06<SeP>2024-08-13 00:10:39<SeP>2024-08-14 11:13:12<SeP>2024-08-15 22:15:45<SeP>2024-08-17 09:18:18<SeP>2024-08-18 20:20:51<SeP>2024-08-20 07:23:24<SeP>2024-08-21 18:25:57<SeP>2024-08-23 05:28:30<SeP>2024-08-24 16:31:03<SeP>2024-08-26 03:33:36<SeP>2024-08-27 14:36:09<SeP>2024-08-29 01:38:42<SeP>2024-08-30 12:41:15<SeP>2024-08-31 23:43:48<SeP>2024-09-02 10:46:21<SeP>2024-09-03 21:48:54<SeP>2024-09-05 08:51:27<SeP>2024-09-06 19:54:00<SeP>2024-09-08 06:56:33<SeP>2024-09-09 17:59:06<SeP>2024-09-11 05:01:39<SeP>2024-09-12 16:04:12<SeP>2024-09-14 03:06:45<SeP>2024-09-15 14:09:18<SeP>2024-09-17 01:11:51<SeP>2024-09-18 12:14:24<SeP>2024-09-19 23:16:57<SeP>2024-09-21 10:19:30<SeP>2024-09-22 21:22:03<SeP>2024-09-24 08:24:36<SeP>2024-09-25 19:27:09<SeP>2024-09-27 06:29:42<SeP>2024-09-28 17:32:15<SeP>2024-09-30 04:34:48<SeP>2024-10-01 15:37:21<SeP>2024-10-03 02:39:54<SeP>2024-10-04 13:42:27<SeP>2024-10-06 00:45:00<SeP>2024-10-07 11:47:33<SeP>2024-10-08 22:50:06<SeP>2024-10-10 09:52:39<SeP>2024-10-11 20:55:12<SeP>2024-10-13 07:57:45<SeP>2024-10-14 19:00:18<SeP>2024-10-16 06:02:51<SeP>2024-10-17 17:05:24<SeP>2024-10-19 04:07:57<SeP>2024-10-20 15:10:30<SeP>2024-10-22 02:13:03<SeP>2024-10-23 13:15:36<SeP>2024-10-25 00:18:09<SeP>2024-10-26 11:20:42<SeP>2024-10-27 22:23:15<SeP>2024-10-29 09:25:48<SeP>2024-10-30 20:28:21<SeP>2024-11-01 07:30:54<SeP>2024-11-02 18:33:27<SeP>2024-11-04 04:36:00<SeP>2024-11-05 15:38:33<SeP>2024-11-07 02:41:06<SeP>2024-11-08 13:43:39<SeP>2024-11-10 00:46:12<SeP>2024-11-11 11:48:45<SeP>2024-11-12 22:51:18<SeP>2024-11-14 09:53:51<SeP>2024-11-15 20:56:24<SeP>2024-11-17 07:58:57<SeP>2024-11-18 19:01:30<SeP>2024-11-20 06:04:03<SeP>2024-11-21 17:06:36<SeP>2024-11-23 04:09:09<SeP>2024-11-24 15:11:42<SeP>2024-11-26 02:14:15<SeP>2024-11-27 13:16:48<SeP>2024-11-29 00:19:21<SeP>2024-11-30 11:21:54<SeP>2024-12-01 22:24:27<SeP>2024-12-03 09:27:00<SeP>2024-12-04 20:29:33<SeP>2024-12-06 07:32:06<SeP>2024-12-07 18:34:39<SeP>2024-12-09 05:37:12<SeP>2024-12-10 16:39:45<SeP>2024-12-12 03:42:18<SeP>2024-12-13 14:44:51<SeP>2024-12-15 01:47:24<SeP>2024-12-16 12:49:57<SeP>2024-12-17 23:52:30<SeP>2024-12-19 10:55:03<SeP>2024-12-20 21:57:36<SeP>2024-12-22 09:00:09<SeP>2024-12-23 20:02:42<SeP>2024-12-25 07:05:15<SeP>2024-12-26 18:07:48<SeP>2024-12-28 05:10:21<SeP>2024-12-29 16:12:54<SeP>2024-12-31 03:15:27<SeP>2025-01-01 14:18:00<SeP>2025-01-03 01:20:33<SeP>2025-01-04 12:23:06<SeP>2025-01-05 23:25:39<SeP>2025-01-07 10:28:12<SeP>2025-01-08 21:30:45<SeP>2025-01-10 08:33:18<SeP>2025-01-11 19:35:51<SeP>2025-01-13 06:38:24<SeP>2025-01-14 17:40:57<SeP>2025-01-16 04:43:30<SeP>2025-01-17 15:46:03<SeP>2025-01-19 02:48:36<SeP>2025-01-20 13:51:09<SeP>2025-01-22 00:53:42<SeP>2025-01-23 11:56:15<SeP>2025-01-24 22:58:48<SeP>2025-01-26 10:01:21<SeP>2025-01-27 21:03:54<SeP>2025-01-29 08:06:27<SeP>2025-01-30 19:09:00<SeP>2025-02-01 06:11:33<SeP>2025-02-02 17:14:06<SeP>2025-02-04 04:16:39<SeP>2025-02-05 15:19:12<SeP>2025-02-07 02:21:45<SeP>2025-02-08 13:24:18<SeP>2025-02-10 00:26:51<SeP>2025-02-11 11:29:24<SeP>2025-02-12 22:31:57<SeP>2025-02-14 09:34:30<SeP>2025-02-15 20:37:03<SeP>2025-02-17 07:39:36<SeP>2025-02-18 18:42:09<SeP>2025-02-20 05:44:42<SeP>2025-02-21 16:47:15<SeP>2025-02-23 03:49:48<SeP>2025-02-24 14:52:21<SeP>2025-02-26 01:54:54<SeP>2025-02-27 12:57:27";
  const itemLabel       = "Ataques";
  const itemData        = "155<SeP>614<SeP>1104<SeP>602<SeP>563<SeP>213<SeP>6966<SeP>535<SeP>9532<SeP>573<SeP>396<SeP>1127<SeP>1254<SeP>277<SeP>151<SeP>460<SeP>114<SeP>763<SeP>279<SeP>5714<SeP>7315<SeP>6800<SeP>8294<SeP>5402<SeP>213<SeP>280<SeP>429<SeP>129<SeP>5775<SeP>499<SeP>169<SeP>292<SeP>424<SeP>339<SeP>4513<SeP>10675<SeP>8608<SeP>10601<SeP>8382<SeP>5256<SeP>7290<SeP>7043<SeP>9500<SeP>8803<SeP>8118<SeP>8061<SeP>8415<SeP>8504<SeP>8129<SeP>6712<SeP>5503<SeP>12016<SeP>7235<SeP>7469<SeP>7232<SeP>9525<SeP>9416<SeP>17841<SeP>17033<SeP>8623<SeP>11320<SeP>6269<SeP>8626<SeP>8594<SeP>8464<SeP>8777<SeP>5864<SeP>6921<SeP>7318<SeP>6449<SeP>2834<SeP>6160<SeP>5438<SeP>6423<SeP>7241<SeP>8238<SeP>2439<SeP>6335<SeP>6137<SeP>6375<SeP>5386<SeP>6542<SeP>4620<SeP>6582<SeP>5989<SeP>5486<SeP>5958<SeP>5606<SeP>21886<SeP>11294<SeP>34535<SeP>7871<SeP>7801<SeP>6162<SeP>12488<SeP>6905<SeP>4822<SeP>6543<SeP>3755<SeP>5461<SeP>6291<SeP>5197<SeP>8687<SeP>6009<SeP>6057<SeP>4593<SeP>5431<SeP>9454<SeP>7350<SeP>7867<SeP>5790<SeP>4369<SeP>10648<SeP>9078<SeP>5445<SeP>3128<SeP>6482<SeP>8924<SeP>5634<SeP>6527<SeP>9752<SeP>4844<SeP>1593<SeP>2161<SeP>1492<SeP>2255<SeP>2277<SeP>1072<SeP>760<SeP>1152<SeP>1319<SeP>1627<SeP>986<SeP>929<SeP>1169<SeP>1048<SeP>801<SeP>1376<SeP>1422<SeP>1233<SeP>837<SeP>2242<SeP>2040<SeP>6317<SeP>10355<SeP>8092<SeP>8148<SeP>7114<SeP>12659<SeP>2635<SeP>11474<SeP>10005<SeP>8995<SeP>13198<SeP>8191<SeP>12359<SeP>12052<SeP>7169<SeP>12859<SeP>5117<SeP>4951<SeP>7016<SeP>23783<SeP>7768<SeP>7778<SeP>8385<SeP>17267<SeP>9312<SeP>7463<SeP>5264<SeP>6765<SeP>8666<SeP>25316<SeP>6957<SeP>10197<SeP>9196<SeP>5310<SeP>5452<SeP>7296<SeP>15356<SeP>5001<SeP>13279<SeP>7260<SeP>7120<SeP>8826<SeP>6298<SeP>3884<SeP>6161<SeP>6759<SeP>5968<SeP>7069<SeP>6849<SeP>5446<SeP>21078<SeP>6670<SeP>6027<SeP>6268<SeP>8259<SeP>10883<SeP>6869<SeP>4698<SeP>3695<SeP>6298<SeP>3287<SeP>4247<SeP>4174<SeP>642<SeP>92<SeP>647<SeP>500<SeP>685<SeP>709<SeP>368<SeP>626<SeP>1258<SeP>1202<SeP>3171<SeP>22905<SeP>591<SeP>3448<SeP>3544<SeP>3029<SeP>7178<SeP>3014<SeP>4302<SeP>2263<SeP>3919<SeP>2871<SeP>2976<SeP>4212<SeP>2985<SeP>2381<SeP>3501<SeP>2049<SeP>2027<SeP>1748<SeP>1550<SeP>960<SeP>1693<SeP>936<SeP>1417<SeP>1031<SeP>27071<SeP>2107<SeP>3801<SeP>3562<SeP>2469<SeP>3608<SeP>2764<SeP>1853<SeP>3732<SeP>2761<SeP>3574<SeP>2021<SeP>2991<SeP>3517<SeP>5019<SeP>4940<SeP>5201<SeP>4367<SeP>2635<SeP>2304<SeP>5243<SeP>3442<SeP>9586<SeP>5478<SeP>3669<SeP>2166<SeP>2396<SeP>4976<SeP>3484<SeP>3299<SeP>2984<SeP>3043<SeP>5935<SeP>3361<SeP>5945<SeP>3301<SeP>5908<SeP>4255<SeP>5931<SeP>5096<SeP>15079<SeP>12890<SeP>12508<SeP>1830<SeP>2293<SeP>4903<SeP>3402<SeP>3887<SeP>3949<SeP>5005<SeP>3987<SeP>4483<SeP>4246<SeP>3559<SeP>3306<SeP>1255<SeP>1964<SeP>3255<SeP>2828<SeP>2176<SeP>3981<SeP>3961<SeP>4305<SeP>3025<SeP>4150<SeP>3225<SeP>3828<SeP>3179<SeP>8050<SeP>6941<SeP>5258<SeP>4705<SeP>5193<SeP>4164<SeP>3647<SeP>4510<SeP>3994<SeP>6272<SeP>4702<SeP>5369<SeP>1984<SeP>745<SeP>1567<SeP>1765<SeP>1127<SeP>1079<SeP>2083<SeP>1091<SeP>1639<SeP>3936<SeP>4894<SeP>6428<SeP>34278<SeP>4666<SeP>4671<SeP>23524<SeP>5705<SeP>5266<SeP>5780<SeP>4512<SeP>24479<SeP>4851<SeP>5438<SeP>4795<SeP>5481<SeP>7992<SeP>27334<SeP>4660<SeP>3645<SeP>4339<SeP>4482<SeP>5882<SeP>3960<SeP>3221<SeP>3275<SeP>4216<SeP>5632<SeP>4640<SeP>17613<SeP>5876<SeP>6614<SeP>5074<SeP>1345<SeP>3938<SeP>4494<SeP>3647<SeP>4567<SeP>2840<SeP>3559<SeP>2901<SeP>3832<SeP>3377<SeP>6689<SeP>9373<SeP>9868<SeP>8719<SeP>8667<SeP>7443<SeP>6897<SeP>5254<SeP>4646<SeP>8865<SeP>20623<SeP>3270<SeP>4362<SeP>3215<SeP>11431<SeP>5207<SeP>4220<SeP>4405<SeP>4529<SeP>3299<SeP>6405<SeP>10176<SeP>6362<SeP>3884<SeP>3245<SeP>2903";
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
  const itemData    = "693578<SeP>364158<SeP>206095<SeP>179664<SeP>110273<SeP>87890<SeP>83340<SeP>80752<SeP>68077<SeP>67194";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "296550<SeP>41422<SeP>40386<SeP>35620<SeP>14447<SeP>10945<SeP>7894<SeP>7619<SeP>7131<SeP>7014";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "397028<SeP>328538<SeP>203077<SeP>139278<SeP>95826<SeP>80759<SeP>80704<SeP>69807<SeP>59300<SeP>58601";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "362946<SeP>259551<SeP>236168<SeP>143850<SeP>67079<SeP>59557<SeP>56509<SeP>52967<SeP>41617<SeP>35999";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "156021<SeP>53247<SeP>40495<SeP>32336<SeP>21909<SeP>12769<SeP>10770<SeP>8979<SeP>7614<SeP>7452";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "350177<SeP>258786<SeP>121941<SeP>80147<SeP>55529<SeP>48787<SeP>46962<SeP>30554<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "693578<SeP>364158<SeP>206095<SeP>179664<SeP>110273<SeP>87890<SeP>83340<SeP>80752<SeP>68077<SeP>67194";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "296550<SeP>41422<SeP>40386<SeP>35620<SeP>14447<SeP>10945<SeP>7894<SeP>7619<SeP>7131<SeP>7014";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "397028<SeP>328538<SeP>203077<SeP>139278<SeP>95826<SeP>80759<SeP>80704<SeP>69807<SeP>59300<SeP>58601";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "362946<SeP>259551<SeP>236168<SeP>143850<SeP>67079<SeP>59557<SeP>56509<SeP>52967<SeP>41617<SeP>35999";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "156021<SeP>53247<SeP>40495<SeP>32336<SeP>21909<SeP>12769<SeP>10770<SeP>8979<SeP>7614<SeP>7452";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "350177<SeP>258786<SeP>121941<SeP>80147<SeP>55529<SeP>48787<SeP>46962<SeP>30554<SeP>29324<SeP>26846";
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
