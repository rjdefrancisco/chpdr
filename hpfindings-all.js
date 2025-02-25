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
  document.getElementById("last-updated").innerHTML = "2025-2-25";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "34.8";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "34.8";
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
  const metricData    = "2815630";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "544267";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2271363";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "138408";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1427208";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "844155";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53526";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "246882";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "597273";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42863";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2815630";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "544267";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2271363";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "138408";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1427208";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "844155";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "53526";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "246882";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "597273";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "42863";
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
  const incomingData = "2815630<SeP>544267<SeP>2271363<SeP>138408";
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
  const incomingData = "2271363<SeP>1427208<SeP>844155<SeP>53526";
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
  const incomingData = "844155<SeP>246882<SeP>597273<SeP>42863";
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
  const incomingData = "2557082<SeP>254331<SeP>2302751";
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
  const incomingData = "388191<SeP>146<SeP>388045<SeP>226";
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
  const incomingData = "2815630<SeP>544267<SeP>2271363<SeP>138408";
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
  const incomingData = "2271363<SeP>1427208<SeP>844155<SeP>53526";
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
  const incomingData = "844155<SeP>246882<SeP>597273<SeP>42863";
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
  const incomingData = "2557082<SeP>254331<SeP>2302751";
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
  const incomingData = "388191<SeP>146<SeP>388045<SeP>226";
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
  const column3Data   = "218633<SeP>200184<SeP>12451<SeP>12252<SeP>9711<SeP>9414<SeP>6443<SeP>5593<SeP>4624<SeP>3469";
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
  const column2Data  = "209893<SeP>43026<SeP>485<SeP>446<SeP>427<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>upload<SeP>upload";
  const column4Data  = "malicious<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>harmless<SeP>harmless<SeP>NA<SeP>NA";
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
  const column2Data  = "2387383<SeP>428247";
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
  const column3Data   = "218633<SeP>200184<SeP>12451<SeP>12252<SeP>9711<SeP>9414<SeP>6443<SeP>5593<SeP>4624<SeP>3469";
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
  const column2Data  = "209893<SeP>43026<SeP>485<SeP>446<SeP>427<SeP>376<SeP>281<SeP>245<SeP>224<SeP>224";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>redir<SeP>download<SeP>download<SeP>upload<SeP>upload";
  let   column4Data  = "malicious<SeP>malicious<SeP>NA<SeP>NA<SeP>NA<SeP>harmless<SeP>harmless<SeP>harmless<SeP>NA<SeP>NA";
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
  const column2Data  = "2387383<SeP>428247";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-2-25";

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
        "name": "traffic between 2023-07-26 and 2025-02-23"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          390202,50
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
        "name": "scans between 2023-07-26 and 2025-02-23"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          224608,30,
          390202,50
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
        "name": "attacks between 2023-07-26 and 2025-02-23"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165594,23,
          390202,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-2-25";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-23"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          390202,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-23"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          224608,30,
          390202,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-23"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          165594,23,
          390202,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:48:09<SeP>2023-07-28 21:36:18<SeP>2023-07-30 08:24:27<SeP>2023-07-31 19:12:36<SeP>2023-08-02 06:00:45<SeP>2023-08-03 16:48:54<SeP>2023-08-05 03:37:03<SeP>2023-08-06 14:25:12<SeP>2023-08-08 01:13:21<SeP>2023-08-09 12:01:30<SeP>2023-08-10 22:49:39<SeP>2023-08-12 09:37:48<SeP>2023-08-13 20:25:57<SeP>2023-08-15 07:14:06<SeP>2023-08-16 18:02:15<SeP>2023-08-18 04:50:24<SeP>2023-08-19 15:38:33<SeP>2023-08-21 02:26:42<SeP>2023-08-22 13:14:51<SeP>2023-08-24 00:03:00<SeP>2023-08-25 10:51:09<SeP>2023-08-26 21:39:18<SeP>2023-08-28 08:27:27<SeP>2023-08-29 19:15:36<SeP>2023-08-31 06:03:45<SeP>2023-09-01 16:51:54<SeP>2023-09-03 03:40:03<SeP>2023-09-04 14:28:12<SeP>2023-09-06 01:16:21<SeP>2023-09-07 12:04:30<SeP>2023-09-08 22:52:39<SeP>2023-09-10 09:40:48<SeP>2023-09-11 20:28:57<SeP>2023-09-13 07:17:06<SeP>2023-09-14 18:05:15<SeP>2023-09-16 04:53:24<SeP>2023-09-17 15:41:33<SeP>2023-09-19 02:29:42<SeP>2023-09-20 13:17:51<SeP>2023-09-22 00:06:00<SeP>2023-09-23 10:54:09<SeP>2023-09-24 21:42:18<SeP>2023-09-26 08:30:27<SeP>2023-09-27 19:18:36<SeP>2023-09-29 06:06:45<SeP>2023-09-30 16:54:54<SeP>2023-10-02 03:43:03<SeP>2023-10-03 14:31:12<SeP>2023-10-05 01:19:21<SeP>2023-10-06 12:07:30<SeP>2023-10-07 22:55:39<SeP>2023-10-09 09:43:48<SeP>2023-10-10 20:31:57<SeP>2023-10-12 07:20:06<SeP>2023-10-13 18:08:15<SeP>2023-10-15 04:56:24<SeP>2023-10-16 15:44:33<SeP>2023-10-18 02:32:42<SeP>2023-10-19 13:20:51<SeP>2023-10-21 00:09:00<SeP>2023-10-22 10:57:09<SeP>2023-10-23 21:45:18<SeP>2023-10-25 08:33:27<SeP>2023-10-26 19:21:36<SeP>2023-10-28 06:09:45<SeP>2023-10-29 16:57:54<SeP>2023-10-31 03:46:03<SeP>2023-11-01 14:34:12<SeP>2023-11-03 01:22:21<SeP>2023-11-04 12:10:30<SeP>2023-11-05 21:58:39<SeP>2023-11-07 08:46:48<SeP>2023-11-08 19:34:57<SeP>2023-11-10 06:23:06<SeP>2023-11-11 17:11:15<SeP>2023-11-13 03:59:24<SeP>2023-11-14 14:47:33<SeP>2023-11-16 01:35:42<SeP>2023-11-17 12:23:51<SeP>2023-11-18 23:12:00<SeP>2023-11-20 10:00:09<SeP>2023-11-21 20:48:18<SeP>2023-11-23 07:36:27<SeP>2023-11-24 18:24:36<SeP>2023-11-26 05:12:45<SeP>2023-11-27 16:00:54<SeP>2023-11-29 02:49:03<SeP>2023-11-30 13:37:12<SeP>2023-12-02 00:25:21<SeP>2023-12-03 11:13:30<SeP>2023-12-04 22:01:39<SeP>2023-12-06 08:49:48<SeP>2023-12-07 19:37:57<SeP>2023-12-09 06:26:06<SeP>2023-12-10 17:14:15<SeP>2023-12-12 04:02:24<SeP>2023-12-13 14:50:33<SeP>2023-12-15 01:38:42<SeP>2023-12-16 12:26:51<SeP>2023-12-17 23:15:00<SeP>2023-12-19 10:03:09<SeP>2023-12-20 20:51:18<SeP>2023-12-22 07:39:27<SeP>2023-12-23 18:27:36<SeP>2023-12-25 05:15:45<SeP>2023-12-26 16:03:54<SeP>2023-12-28 02:52:03<SeP>2023-12-29 13:40:12<SeP>2023-12-31 00:28:21<SeP>2024-01-01 11:16:30<SeP>2024-01-02 22:04:39<SeP>2024-01-04 08:52:48<SeP>2024-01-05 19:40:57<SeP>2024-01-07 06:29:06<SeP>2024-01-08 17:17:15<SeP>2024-01-10 04:05:24<SeP>2024-01-11 14:53:33<SeP>2024-01-13 01:41:42<SeP>2024-01-14 12:29:51<SeP>2024-01-15 23:18:00<SeP>2024-01-17 10:06:09<SeP>2024-01-18 20:54:18<SeP>2024-01-20 07:42:27<SeP>2024-01-21 18:30:36<SeP>2024-01-23 05:18:45<SeP>2024-01-24 16:06:54<SeP>2024-01-26 02:55:03<SeP>2024-01-27 13:43:12<SeP>2024-01-29 00:31:21<SeP>2024-01-30 11:19:30<SeP>2024-01-31 22:07:39<SeP>2024-02-02 08:55:48<SeP>2024-02-03 19:43:57<SeP>2024-02-05 06:32:06<SeP>2024-02-06 17:20:15<SeP>2024-02-08 04:08:24<SeP>2024-02-09 14:56:33<SeP>2024-02-11 01:44:42<SeP>2024-02-12 12:32:51<SeP>2024-02-13 23:21:00<SeP>2024-02-15 10:09:09<SeP>2024-02-16 20:57:18<SeP>2024-02-18 07:45:27<SeP>2024-02-19 18:33:36<SeP>2024-02-21 05:21:45<SeP>2024-02-22 16:09:54<SeP>2024-02-24 02:58:03<SeP>2024-02-25 13:46:12<SeP>2024-02-27 00:34:21<SeP>2024-02-28 11:22:30<SeP>2024-02-29 22:10:39<SeP>2024-03-02 08:58:48<SeP>2024-03-03 19:46:57<SeP>2024-03-05 06:35:06<SeP>2024-03-06 17:23:15<SeP>2024-03-08 04:11:24<SeP>2024-03-09 14:59:33<SeP>2024-03-11 02:47:42<SeP>2024-03-12 13:35:51<SeP>2024-03-14 00:24:00<SeP>2024-03-15 11:12:09<SeP>2024-03-16 22:00:18<SeP>2024-03-18 08:48:27<SeP>2024-03-19 19:36:36<SeP>2024-03-21 06:24:45<SeP>2024-03-22 17:12:54<SeP>2024-03-24 04:01:03<SeP>2024-03-25 14:49:12<SeP>2024-03-27 01:37:21<SeP>2024-03-28 12:25:30<SeP>2024-03-29 23:13:39<SeP>2024-03-31 10:01:48<SeP>2024-04-01 20:49:57<SeP>2024-04-03 07:38:06<SeP>2024-04-04 18:26:15<SeP>2024-04-06 05:14:24<SeP>2024-04-07 16:02:33<SeP>2024-04-09 02:50:42<SeP>2024-04-10 13:38:51<SeP>2024-04-12 00:27:00<SeP>2024-04-13 11:15:09<SeP>2024-04-14 22:03:18<SeP>2024-04-16 08:51:27<SeP>2024-04-17 19:39:36<SeP>2024-04-19 06:27:45<SeP>2024-04-20 17:15:54<SeP>2024-04-22 04:04:03<SeP>2024-04-23 14:52:12<SeP>2024-04-25 01:40:21<SeP>2024-04-26 12:28:30<SeP>2024-04-27 23:16:39<SeP>2024-04-29 10:04:48<SeP>2024-04-30 20:52:57<SeP>2024-05-02 07:41:06<SeP>2024-05-03 18:29:15<SeP>2024-05-05 05:17:24<SeP>2024-05-06 16:05:33<SeP>2024-05-08 02:53:42<SeP>2024-05-09 13:41:51<SeP>2024-05-11 00:30:00<SeP>2024-05-12 11:18:09<SeP>2024-05-13 22:06:18<SeP>2024-05-15 08:54:27<SeP>2024-05-16 19:42:36<SeP>2024-05-18 06:30:45<SeP>2024-05-19 17:18:54<SeP>2024-05-21 04:07:03<SeP>2024-05-22 14:55:12<SeP>2024-05-24 01:43:21<SeP>2024-05-25 12:31:30<SeP>2024-05-26 23:19:39<SeP>2024-05-28 10:07:48<SeP>2024-05-29 20:55:57<SeP>2024-05-31 07:44:06<SeP>2024-06-01 18:32:15<SeP>2024-06-03 05:20:24<SeP>2024-06-04 16:08:33<SeP>2024-06-06 02:56:42<SeP>2024-06-07 13:44:51<SeP>2024-06-09 00:33:00<SeP>2024-06-10 11:21:09<SeP>2024-06-11 22:09:18<SeP>2024-06-13 08:57:27<SeP>2024-06-14 19:45:36<SeP>2024-06-16 06:33:45<SeP>2024-06-17 17:21:54<SeP>2024-06-19 04:10:03<SeP>2024-06-20 14:58:12<SeP>2024-06-22 01:46:21<SeP>2024-06-23 12:34:30<SeP>2024-06-24 23:22:39<SeP>2024-06-26 10:10:48<SeP>2024-06-27 20:58:57<SeP>2024-06-29 07:47:06<SeP>2024-06-30 18:35:15<SeP>2024-07-02 05:23:24<SeP>2024-07-03 16:11:33<SeP>2024-07-05 02:59:42<SeP>2024-07-06 13:47:51<SeP>2024-07-08 00:36:00<SeP>2024-07-09 11:24:09<SeP>2024-07-10 22:12:18<SeP>2024-07-12 09:00:27<SeP>2024-07-13 19:48:36<SeP>2024-07-15 06:36:45<SeP>2024-07-16 17:24:54<SeP>2024-07-18 04:13:03<SeP>2024-07-19 15:01:12<SeP>2024-07-21 01:49:21<SeP>2024-07-22 12:37:30<SeP>2024-07-23 23:25:39<SeP>2024-07-25 10:13:48<SeP>2024-07-26 21:01:57<SeP>2024-07-28 07:50:06<SeP>2024-07-29 18:38:15<SeP>2024-07-31 05:26:24<SeP>2024-08-01 16:14:33<SeP>2024-08-03 03:02:42<SeP>2024-08-04 13:50:51<SeP>2024-08-06 00:39:00<SeP>2024-08-07 11:27:09<SeP>2024-08-08 22:15:18<SeP>2024-08-10 09:03:27<SeP>2024-08-11 19:51:36<SeP>2024-08-13 06:39:45<SeP>2024-08-14 17:27:54<SeP>2024-08-16 04:16:03<SeP>2024-08-17 15:04:12<SeP>2024-08-19 01:52:21<SeP>2024-08-20 12:40:30<SeP>2024-08-21 23:28:39<SeP>2024-08-23 10:16:48<SeP>2024-08-24 21:04:57<SeP>2024-08-26 07:53:06<SeP>2024-08-27 18:41:15<SeP>2024-08-29 05:29:24<SeP>2024-08-30 16:17:33<SeP>2024-09-01 03:05:42<SeP>2024-09-02 13:53:51<SeP>2024-09-04 00:42:00<SeP>2024-09-05 11:30:09<SeP>2024-09-06 22:18:18<SeP>2024-09-08 09:06:27<SeP>2024-09-09 19:54:36<SeP>2024-09-11 06:42:45<SeP>2024-09-12 17:30:54<SeP>2024-09-14 04:19:03<SeP>2024-09-15 15:07:12<SeP>2024-09-17 01:55:21<SeP>2024-09-18 12:43:30<SeP>2024-09-19 23:31:39<SeP>2024-09-21 10:19:48<SeP>2024-09-22 21:07:57<SeP>2024-09-24 07:56:06<SeP>2024-09-25 18:44:15<SeP>2024-09-27 05:32:24<SeP>2024-09-28 16:20:33<SeP>2024-09-30 03:08:42<SeP>2024-10-01 13:56:51<SeP>2024-10-03 00:45:00<SeP>2024-10-04 11:33:09<SeP>2024-10-05 22:21:18<SeP>2024-10-07 09:09:27<SeP>2024-10-08 19:57:36<SeP>2024-10-10 06:45:45<SeP>2024-10-11 17:33:54<SeP>2024-10-13 04:22:03<SeP>2024-10-14 15:10:12<SeP>2024-10-16 01:58:21<SeP>2024-10-17 12:46:30<SeP>2024-10-18 23:34:39<SeP>2024-10-20 10:22:48<SeP>2024-10-21 21:10:57<SeP>2024-10-23 07:59:06<SeP>2024-10-24 18:47:15<SeP>2024-10-26 05:35:24<SeP>2024-10-27 16:23:33<SeP>2024-10-29 03:11:42<SeP>2024-10-30 13:59:51<SeP>2024-11-01 00:48:00<SeP>2024-11-02 11:36:09<SeP>2024-11-03 21:24:18<SeP>2024-11-05 08:12:27<SeP>2024-11-06 19:00:36<SeP>2024-11-08 05:48:45<SeP>2024-11-09 16:36:54<SeP>2024-11-11 03:25:03<SeP>2024-11-12 14:13:12<SeP>2024-11-14 01:01:21<SeP>2024-11-15 11:49:30<SeP>2024-11-16 22:37:39<SeP>2024-11-18 09:25:48<SeP>2024-11-19 20:13:57<SeP>2024-11-21 07:02:06<SeP>2024-11-22 17:50:15<SeP>2024-11-24 04:38:24<SeP>2024-11-25 15:26:33<SeP>2024-11-27 02:14:42<SeP>2024-11-28 13:02:51<SeP>2024-11-29 23:51:00<SeP>2024-12-01 10:39:09<SeP>2024-12-02 21:27:18<SeP>2024-12-04 08:15:27<SeP>2024-12-05 19:03:36<SeP>2024-12-07 05:51:45<SeP>2024-12-08 16:39:54<SeP>2024-12-10 03:28:03<SeP>2024-12-11 14:16:12<SeP>2024-12-13 01:04:21<SeP>2024-12-14 11:52:30<SeP>2024-12-15 22:40:39<SeP>2024-12-17 09:28:48<SeP>2024-12-18 20:16:57<SeP>2024-12-20 07:05:06<SeP>2024-12-21 17:53:15<SeP>2024-12-23 04:41:24<SeP>2024-12-24 15:29:33<SeP>2024-12-26 02:17:42<SeP>2024-12-27 13:05:51<SeP>2024-12-28 23:54:00<SeP>2024-12-30 10:42:09<SeP>2024-12-31 21:30:18<SeP>2025-01-02 08:18:27<SeP>2025-01-03 19:06:36<SeP>2025-01-05 05:54:45<SeP>2025-01-06 16:42:54<SeP>2025-01-08 03:31:03<SeP>2025-01-09 14:19:12<SeP>2025-01-11 01:07:21<SeP>2025-01-12 11:55:30<SeP>2025-01-13 22:43:39<SeP>2025-01-15 09:31:48<SeP>2025-01-16 20:19:57<SeP>2025-01-18 07:08:06<SeP>2025-01-19 17:56:15<SeP>2025-01-21 04:44:24<SeP>2025-01-22 15:32:33<SeP>2025-01-24 02:20:42<SeP>2025-01-25 13:08:51<SeP>2025-01-26 23:57:00<SeP>2025-01-28 10:45:09<SeP>2025-01-29 21:33:18<SeP>2025-01-31 08:21:27<SeP>2025-02-01 19:09:36<SeP>2025-02-03 05:57:45<SeP>2025-02-04 16:45:54<SeP>2025-02-06 03:34:03<SeP>2025-02-07 14:22:12<SeP>2025-02-09 01:10:21<SeP>2025-02-10 11:58:30<SeP>2025-02-11 22:46:39<SeP>2025-02-13 09:34:48<SeP>2025-02-14 20:22:57<SeP>2025-02-16 07:11:06<SeP>2025-02-17 17:59:15<SeP>2025-02-19 04:47:24<SeP>2025-02-20 15:35:33<SeP>2025-02-22 02:23:42<SeP>2025-02-23 13:11:51";
  const item1Label       = "Scans";
  const item1Data        = "761<SeP>1472<SeP>1376<SeP>1447<SeP>1254<SeP>1683<SeP>961<SeP>954<SeP>1132<SeP>3377<SeP>1819<SeP>2475<SeP>2251<SeP>2065<SeP>755<SeP>882<SeP>1408<SeP>2327<SeP>1604<SeP>1791<SeP>1335<SeP>929<SeP>884<SeP>1408<SeP>807<SeP>969<SeP>817<SeP>1515<SeP>2945<SeP>920<SeP>832<SeP>1439<SeP>1249<SeP>804<SeP>2828<SeP>1645<SeP>2647<SeP>1842<SeP>1803<SeP>1401<SeP>1258<SeP>1750<SeP>1736<SeP>2205<SeP>1581<SeP>1628<SeP>1608<SeP>1655<SeP>1708<SeP>1634<SeP>2091<SeP>1505<SeP>1666<SeP>2055<SeP>2860<SeP>1279<SeP>1891<SeP>1833<SeP>2378<SeP>1509<SeP>2150<SeP>3110<SeP>1400<SeP>1495<SeP>1462<SeP>1486<SeP>1845<SeP>1562<SeP>1251<SeP>1434<SeP>1201<SeP>2327<SeP>1195<SeP>1118<SeP>1206<SeP>2293<SeP>7296<SeP>1139<SeP>1363<SeP>1255<SeP>1710<SeP>1961<SeP>1079<SeP>6533<SeP>1706<SeP>1576<SeP>992<SeP>1132<SeP>3314<SeP>1199<SeP>947<SeP>967<SeP>1105<SeP>1011<SeP>3008<SeP>1196<SeP>1388<SeP>2856<SeP>6585<SeP>1241<SeP>973<SeP>924<SeP>918<SeP>1004<SeP>975<SeP>971<SeP>1024<SeP>3807<SeP>2195<SeP>1408<SeP>1610<SeP>638<SeP>947<SeP>1580<SeP>1089<SeP>1052<SeP>974<SeP>2219<SeP>1255<SeP>1083<SeP>994<SeP>1079<SeP>825<SeP>834<SeP>867<SeP>823<SeP>900<SeP>1032<SeP>842<SeP>844<SeP>814<SeP>850<SeP>857<SeP>707<SeP>801<SeP>911<SeP>841<SeP>894<SeP>791<SeP>856<SeP>760<SeP>802<SeP>1050<SeP>767<SeP>879<SeP>897<SeP>930<SeP>953<SeP>987<SeP>952<SeP>513<SeP>888<SeP>891<SeP>1054<SeP>981<SeP>1043<SeP>1137<SeP>1152<SeP>1016<SeP>939<SeP>936<SeP>990<SeP>722<SeP>980<SeP>1044<SeP>899<SeP>873<SeP>894<SeP>1016<SeP>994<SeP>1035<SeP>990<SeP>1121<SeP>969<SeP>915<SeP>1028<SeP>2136<SeP>1300<SeP>1022<SeP>1000<SeP>1133<SeP>954<SeP>1029<SeP>830<SeP>625<SeP>928<SeP>1179<SeP>877<SeP>936<SeP>1023<SeP>1350<SeP>1024<SeP>1148<SeP>1282<SeP>1202<SeP>1290<SeP>1294<SeP>1269<SeP>1536<SeP>1880<SeP>1457<SeP>1252<SeP>685<SeP>963<SeP>1026<SeP>1166<SeP>403<SeP>901<SeP>794<SeP>1001<SeP>1907<SeP>5636<SeP>2265<SeP>1949<SeP>1257<SeP>881<SeP>967<SeP>918<SeP>976<SeP>897<SeP>1143<SeP>1005<SeP>1050<SeP>1654<SeP>1832<SeP>972<SeP>1271<SeP>1240<SeP>1162<SeP>1154<SeP>1010<SeP>1018<SeP>983<SeP>1134<SeP>979<SeP>1185<SeP>952<SeP>1190<SeP>787<SeP>1416<SeP>1025<SeP>1145<SeP>1100<SeP>1339<SeP>1239<SeP>1114<SeP>1615<SeP>1107<SeP>1154<SeP>1113<SeP>1660<SeP>1596<SeP>1300<SeP>1972<SeP>1617<SeP>1525<SeP>1895<SeP>1448<SeP>1173<SeP>1135<SeP>1372<SeP>1100<SeP>1526<SeP>1250<SeP>1185<SeP>1729<SeP>1656<SeP>1440<SeP>1363<SeP>1450<SeP>1216<SeP>1124<SeP>1083<SeP>1290<SeP>1160<SeP>1254<SeP>1236<SeP>1185<SeP>1445<SeP>1888<SeP>1324<SeP>1173<SeP>1660<SeP>1414<SeP>1124<SeP>1092<SeP>986<SeP>776<SeP>897<SeP>1023<SeP>996<SeP>1815<SeP>1044<SeP>1130<SeP>1161<SeP>785<SeP>1005<SeP>990<SeP>1303<SeP>857<SeP>881<SeP>1122<SeP>1295<SeP>1547<SeP>1417<SeP>1050<SeP>1007<SeP>1143<SeP>1744<SeP>1082<SeP>1112<SeP>995<SeP>1318<SeP>1366<SeP>834<SeP>1057<SeP>1190<SeP>1021<SeP>890<SeP>832<SeP>1359<SeP>1316<SeP>1481<SeP>1631<SeP>1415<SeP>935<SeP>1099<SeP>1075<SeP>1146<SeP>1146<SeP>1143<SeP>1003<SeP>985<SeP>1269<SeP>1444<SeP>1372<SeP>1556<SeP>1427<SeP>1213<SeP>1590<SeP>1475<SeP>1277<SeP>1441<SeP>1523<SeP>1302<SeP>1410<SeP>1530<SeP>1567<SeP>1480<SeP>1355<SeP>1394<SeP>1371<SeP>1174<SeP>1263<SeP>1435<SeP>1606<SeP>1491<SeP>1262<SeP>1122<SeP>1295<SeP>1356<SeP>1316<SeP>1120<SeP>1672<SeP>1877<SeP>1400<SeP>1023<SeP>887<SeP>1519<SeP>1716<SeP>1231<SeP>1406<SeP>1108<SeP>1186<SeP>1347<SeP>1490<SeP>1299<SeP>1480<SeP>1671<SeP>1319<SeP>1550<SeP>1730<SeP>1253<SeP>1540<SeP>1345<SeP>1792<SeP>1567<SeP>1009<SeP>1057<SeP>2050<SeP>1864<SeP>1682<SeP>1752<SeP>1673<SeP>1510<SeP>1619<SeP>1612<SeP>1547<SeP>1411<SeP>1794";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "152<SeP>615<SeP>976<SeP>719<SeP>534<SeP>229<SeP>6968<SeP>511<SeP>9176<SeP>970<SeP>382<SeP>1142<SeP>1222<SeP>293<SeP>162<SeP>459<SeP>110<SeP>764<SeP>284<SeP>4306<SeP>7532<SeP>6986<SeP>7447<SeP>7165<SeP>266<SeP>309<SeP>350<SeP>215<SeP>721<SeP>5555<SeP>73<SeP>381<SeP>324<SeP>374<SeP>3075<SeP>9463<SeP>8403<SeP>10374<SeP>9380<SeP>5932<SeP>5912<SeP>8101<SeP>7859<SeP>10035<SeP>7653<SeP>7172<SeP>9201<SeP>8272<SeP>7677<SeP>8334<SeP>6004<SeP>9310<SeP>9170<SeP>6238<SeP>8311<SeP>7387<SeP>10364<SeP>18151<SeP>15813<SeP>9851<SeP>10586<SeP>7342<SeP>7589<SeP>9002<SeP>8588<SeP>8374<SeP>6904<SeP>6275<SeP>7082<SeP>6800<SeP>5200<SeP>3436<SeP>6799<SeP>5846<SeP>6458<SeP>6595<SeP>6663<SeP>4349<SeP>5708<SeP>7362<SeP>4684<SeP>6418<SeP>5555<SeP>4485<SeP>7628<SeP>5263<SeP>5334<SeP>5681<SeP>8942<SeP>20932<SeP>25193<SeP>17941<SeP>9927<SeP>5534<SeP>7658<SeP>11628<SeP>7671<SeP>3400<SeP>6658<SeP>3590<SeP>4747<SeP>6805<SeP>6033<SeP>7855<SeP>6568<SeP>5493<SeP>4322<SeP>5924<SeP>9482<SeP>8038<SeP>7956<SeP>4211<SeP>6575<SeP>9575<SeP>8595<SeP>4611<SeP>3275<SeP>6261<SeP>9351<SeP>5018<SeP>7159<SeP>9489<SeP>4216<SeP>2788<SeP>1261<SeP>1715<SeP>1782<SeP>2265<SeP>1083<SeP>1402<SeP>487<SeP>1373<SeP>1541<SeP>1122<SeP>878<SeP>1114<SeP>1062<SeP>749<SeP>1432<SeP>1404<SeP>1201<SeP>845<SeP>2240<SeP>2030<SeP>6427<SeP>10235<SeP>8015<SeP>8173<SeP>6938<SeP>12800<SeP>2435<SeP>11023<SeP>9938<SeP>9514<SeP>13304<SeP>8221<SeP>11676<SeP>10774<SeP>8726<SeP>13369<SeP>5115<SeP>4578<SeP>7307<SeP>23563<SeP>7543<SeP>7933<SeP>8317<SeP>13428<SeP>11415<SeP>8789<SeP>4495<SeP>7664<SeP>8171<SeP>24837<SeP>7508<SeP>8711<SeP>10662<SeP>5651<SeP>5587<SeP>6372<SeP>16111<SeP>4259<SeP>12774<SeP>8087<SeP>6803<SeP>8542<SeP>7585<SeP>3002<SeP>6033<SeP>5683<SeP>7086<SeP>6400<SeP>6244<SeP>7155<SeP>18658<SeP>6998<SeP>8560<SeP>5064<SeP>7601<SeP>9080<SeP>8954<SeP>5831<SeP>2650<SeP>7106<SeP>3373<SeP>5209<SeP>3095<SeP>1550<SeP>581<SeP>636<SeP>196<SeP>541<SeP>637<SeP>771<SeP>419<SeP>917<SeP>1548<SeP>1340<SeP>2848<SeP>22541<SeP>695<SeP>5336<SeP>2877<SeP>3394<SeP>6608<SeP>2645<SeP>4236<SeP>3528<SeP>2840<SeP>3074<SeP>3099<SeP>4734<SeP>1704<SeP>2919<SeP>2617<SeP>2190<SeP>1871<SeP>1937<SeP>1200<SeP>1911<SeP>787<SeP>925<SeP>1780<SeP>18905<SeP>9315<SeP>2338<SeP>3723<SeP>3640<SeP>2235<SeP>3964<SeP>1819<SeP>3179<SeP>2997<SeP>2940<SeP>2877<SeP>3088<SeP>2822<SeP>3168<SeP>6258<SeP>5275<SeP>3704<SeP>3756<SeP>2576<SeP>2978<SeP>4556<SeP>4166<SeP>10270<SeP>5163<SeP>2475<SeP>2801<SeP>2009<SeP>4736<SeP>3666<SeP>3745<SeP>3168<SeP>2484<SeP>5879<SeP>3269<SeP>6014<SeP>3576<SeP>5512<SeP>4437<SeP>7186<SeP>3601<SeP>17270<SeP>10791<SeP>12519<SeP>1727<SeP>2288<SeP>4889<SeP>3388<SeP>3888<SeP>3931<SeP>5019<SeP>3935<SeP>4531<SeP>4251<SeP>3529<SeP>3315<SeP>1257<SeP>1979<SeP>2765<SeP>2973<SeP>2232<SeP>3921<SeP>3822<SeP>4319<SeP>3351<SeP>3566<SeP>3782<SeP>3500<SeP>3121<SeP>6821<SeP>7648<SeP>5865<SeP>4497<SeP>4716<SeP>4573<SeP>3693<SeP>4013<SeP>4037<SeP>6672<SeP>5060<SeP>4582<SeP>2754<SeP>1129<SeP>1145<SeP>1742<SeP>1301<SeP>1232<SeP>1693<SeP>1550<SeP>1346<SeP>3255<SeP>4111<SeP>6369<SeP>30759<SeP>8250<SeP>5306<SeP>15956<SeP>12605<SeP>4998<SeP>6344<SeP>4678<SeP>22416<SeP>6367<SeP>5407<SeP>4431<SeP>4660<SeP>6316<SeP>22107<SeP>13445<SeP>3918<SeP>3542<SeP>3959<SeP>5595<SeP>5140<SeP>2775<SeP>3451<SeP>4159<SeP>5169<SeP>5042<SeP>18275<SeP>4427<SeP>5929<SeP>6224<SeP>2689<SeP>2750<SeP>3550<SeP>4341<SeP>3934<SeP>4233<SeP>2755<SeP>3734<SeP>2155<SeP>4522<SeP>4315<SeP>8170<SeP>10625<SeP>8012<SeP>8600<SeP>9286<SeP>6873<SeP>5774<SeP>5117<SeP>4141<SeP>24922<SeP>4374<SeP>3027<SeP>4520<SeP>3273<SeP>11390<SeP>5715<SeP>3489<SeP>4883<SeP>4121<SeP>2959<SeP>9296<SeP>9175<SeP>4944";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:48:09<SeP>2023-07-28 21:36:18<SeP>2023-07-30 08:24:27<SeP>2023-07-31 19:12:36<SeP>2023-08-02 06:00:45<SeP>2023-08-03 16:48:54<SeP>2023-08-05 03:37:03<SeP>2023-08-06 14:25:12<SeP>2023-08-08 01:13:21<SeP>2023-08-09 12:01:30<SeP>2023-08-10 22:49:39<SeP>2023-08-12 09:37:48<SeP>2023-08-13 20:25:57<SeP>2023-08-15 07:14:06<SeP>2023-08-16 18:02:15<SeP>2023-08-18 04:50:24<SeP>2023-08-19 15:38:33<SeP>2023-08-21 02:26:42<SeP>2023-08-22 13:14:51<SeP>2023-08-24 00:03:00<SeP>2023-08-25 10:51:09<SeP>2023-08-26 21:39:18<SeP>2023-08-28 08:27:27<SeP>2023-08-29 19:15:36<SeP>2023-08-31 06:03:45<SeP>2023-09-01 16:51:54<SeP>2023-09-03 03:40:03<SeP>2023-09-04 14:28:12<SeP>2023-09-06 01:16:21<SeP>2023-09-07 12:04:30<SeP>2023-09-08 22:52:39<SeP>2023-09-10 09:40:48<SeP>2023-09-11 20:28:57<SeP>2023-09-13 07:17:06<SeP>2023-09-14 18:05:15<SeP>2023-09-16 04:53:24<SeP>2023-09-17 15:41:33<SeP>2023-09-19 02:29:42<SeP>2023-09-20 13:17:51<SeP>2023-09-22 00:06:00<SeP>2023-09-23 10:54:09<SeP>2023-09-24 21:42:18<SeP>2023-09-26 08:30:27<SeP>2023-09-27 19:18:36<SeP>2023-09-29 06:06:45<SeP>2023-09-30 16:54:54<SeP>2023-10-02 03:43:03<SeP>2023-10-03 14:31:12<SeP>2023-10-05 01:19:21<SeP>2023-10-06 12:07:30<SeP>2023-10-07 22:55:39<SeP>2023-10-09 09:43:48<SeP>2023-10-10 20:31:57<SeP>2023-10-12 07:20:06<SeP>2023-10-13 18:08:15<SeP>2023-10-15 04:56:24<SeP>2023-10-16 15:44:33<SeP>2023-10-18 02:32:42<SeP>2023-10-19 13:20:51<SeP>2023-10-21 00:09:00<SeP>2023-10-22 10:57:09<SeP>2023-10-23 21:45:18<SeP>2023-10-25 08:33:27<SeP>2023-10-26 19:21:36<SeP>2023-10-28 06:09:45<SeP>2023-10-29 16:57:54<SeP>2023-10-31 03:46:03<SeP>2023-11-01 14:34:12<SeP>2023-11-03 01:22:21<SeP>2023-11-04 12:10:30<SeP>2023-11-05 21:58:39<SeP>2023-11-07 08:46:48<SeP>2023-11-08 19:34:57<SeP>2023-11-10 06:23:06<SeP>2023-11-11 17:11:15<SeP>2023-11-13 03:59:24<SeP>2023-11-14 14:47:33<SeP>2023-11-16 01:35:42<SeP>2023-11-17 12:23:51<SeP>2023-11-18 23:12:00<SeP>2023-11-20 10:00:09<SeP>2023-11-21 20:48:18<SeP>2023-11-23 07:36:27<SeP>2023-11-24 18:24:36<SeP>2023-11-26 05:12:45<SeP>2023-11-27 16:00:54<SeP>2023-11-29 02:49:03<SeP>2023-11-30 13:37:12<SeP>2023-12-02 00:25:21<SeP>2023-12-03 11:13:30<SeP>2023-12-04 22:01:39<SeP>2023-12-06 08:49:48<SeP>2023-12-07 19:37:57<SeP>2023-12-09 06:26:06<SeP>2023-12-10 17:14:15<SeP>2023-12-12 04:02:24<SeP>2023-12-13 14:50:33<SeP>2023-12-15 01:38:42<SeP>2023-12-16 12:26:51<SeP>2023-12-17 23:15:00<SeP>2023-12-19 10:03:09<SeP>2023-12-20 20:51:18<SeP>2023-12-22 07:39:27<SeP>2023-12-23 18:27:36<SeP>2023-12-25 05:15:45<SeP>2023-12-26 16:03:54<SeP>2023-12-28 02:52:03<SeP>2023-12-29 13:40:12<SeP>2023-12-31 00:28:21<SeP>2024-01-01 11:16:30<SeP>2024-01-02 22:04:39<SeP>2024-01-04 08:52:48<SeP>2024-01-05 19:40:57<SeP>2024-01-07 06:29:06<SeP>2024-01-08 17:17:15<SeP>2024-01-10 04:05:24<SeP>2024-01-11 14:53:33<SeP>2024-01-13 01:41:42<SeP>2024-01-14 12:29:51<SeP>2024-01-15 23:18:00<SeP>2024-01-17 10:06:09<SeP>2024-01-18 20:54:18<SeP>2024-01-20 07:42:27<SeP>2024-01-21 18:30:36<SeP>2024-01-23 05:18:45<SeP>2024-01-24 16:06:54<SeP>2024-01-26 02:55:03<SeP>2024-01-27 13:43:12<SeP>2024-01-29 00:31:21<SeP>2024-01-30 11:19:30<SeP>2024-01-31 22:07:39<SeP>2024-02-02 08:55:48<SeP>2024-02-03 19:43:57<SeP>2024-02-05 06:32:06<SeP>2024-02-06 17:20:15<SeP>2024-02-08 04:08:24<SeP>2024-02-09 14:56:33<SeP>2024-02-11 01:44:42<SeP>2024-02-12 12:32:51<SeP>2024-02-13 23:21:00<SeP>2024-02-15 10:09:09<SeP>2024-02-16 20:57:18<SeP>2024-02-18 07:45:27<SeP>2024-02-19 18:33:36<SeP>2024-02-21 05:21:45<SeP>2024-02-22 16:09:54<SeP>2024-02-24 02:58:03<SeP>2024-02-25 13:46:12<SeP>2024-02-27 00:34:21<SeP>2024-02-28 11:22:30<SeP>2024-02-29 22:10:39<SeP>2024-03-02 08:58:48<SeP>2024-03-03 19:46:57<SeP>2024-03-05 06:35:06<SeP>2024-03-06 17:23:15<SeP>2024-03-08 04:11:24<SeP>2024-03-09 14:59:33<SeP>2024-03-11 02:47:42<SeP>2024-03-12 13:35:51<SeP>2024-03-14 00:24:00<SeP>2024-03-15 11:12:09<SeP>2024-03-16 22:00:18<SeP>2024-03-18 08:48:27<SeP>2024-03-19 19:36:36<SeP>2024-03-21 06:24:45<SeP>2024-03-22 17:12:54<SeP>2024-03-24 04:01:03<SeP>2024-03-25 14:49:12<SeP>2024-03-27 01:37:21<SeP>2024-03-28 12:25:30<SeP>2024-03-29 23:13:39<SeP>2024-03-31 10:01:48<SeP>2024-04-01 20:49:57<SeP>2024-04-03 07:38:06<SeP>2024-04-04 18:26:15<SeP>2024-04-06 05:14:24<SeP>2024-04-07 16:02:33<SeP>2024-04-09 02:50:42<SeP>2024-04-10 13:38:51<SeP>2024-04-12 00:27:00<SeP>2024-04-13 11:15:09<SeP>2024-04-14 22:03:18<SeP>2024-04-16 08:51:27<SeP>2024-04-17 19:39:36<SeP>2024-04-19 06:27:45<SeP>2024-04-20 17:15:54<SeP>2024-04-22 04:04:03<SeP>2024-04-23 14:52:12<SeP>2024-04-25 01:40:21<SeP>2024-04-26 12:28:30<SeP>2024-04-27 23:16:39<SeP>2024-04-29 10:04:48<SeP>2024-04-30 20:52:57<SeP>2024-05-02 07:41:06<SeP>2024-05-03 18:29:15<SeP>2024-05-05 05:17:24<SeP>2024-05-06 16:05:33<SeP>2024-05-08 02:53:42<SeP>2024-05-09 13:41:51<SeP>2024-05-11 00:30:00<SeP>2024-05-12 11:18:09<SeP>2024-05-13 22:06:18<SeP>2024-05-15 08:54:27<SeP>2024-05-16 19:42:36<SeP>2024-05-18 06:30:45<SeP>2024-05-19 17:18:54<SeP>2024-05-21 04:07:03<SeP>2024-05-22 14:55:12<SeP>2024-05-24 01:43:21<SeP>2024-05-25 12:31:30<SeP>2024-05-26 23:19:39<SeP>2024-05-28 10:07:48<SeP>2024-05-29 20:55:57<SeP>2024-05-31 07:44:06<SeP>2024-06-01 18:32:15<SeP>2024-06-03 05:20:24<SeP>2024-06-04 16:08:33<SeP>2024-06-06 02:56:42<SeP>2024-06-07 13:44:51<SeP>2024-06-09 00:33:00<SeP>2024-06-10 11:21:09<SeP>2024-06-11 22:09:18<SeP>2024-06-13 08:57:27<SeP>2024-06-14 19:45:36<SeP>2024-06-16 06:33:45<SeP>2024-06-17 17:21:54<SeP>2024-06-19 04:10:03<SeP>2024-06-20 14:58:12<SeP>2024-06-22 01:46:21<SeP>2024-06-23 12:34:30<SeP>2024-06-24 23:22:39<SeP>2024-06-26 10:10:48<SeP>2024-06-27 20:58:57<SeP>2024-06-29 07:47:06<SeP>2024-06-30 18:35:15<SeP>2024-07-02 05:23:24<SeP>2024-07-03 16:11:33<SeP>2024-07-05 02:59:42<SeP>2024-07-06 13:47:51<SeP>2024-07-08 00:36:00<SeP>2024-07-09 11:24:09<SeP>2024-07-10 22:12:18<SeP>2024-07-12 09:00:27<SeP>2024-07-13 19:48:36<SeP>2024-07-15 06:36:45<SeP>2024-07-16 17:24:54<SeP>2024-07-18 04:13:03<SeP>2024-07-19 15:01:12<SeP>2024-07-21 01:49:21<SeP>2024-07-22 12:37:30<SeP>2024-07-23 23:25:39<SeP>2024-07-25 10:13:48<SeP>2024-07-26 21:01:57<SeP>2024-07-28 07:50:06<SeP>2024-07-29 18:38:15<SeP>2024-07-31 05:26:24<SeP>2024-08-01 16:14:33<SeP>2024-08-03 03:02:42<SeP>2024-08-04 13:50:51<SeP>2024-08-06 00:39:00<SeP>2024-08-07 11:27:09<SeP>2024-08-08 22:15:18<SeP>2024-08-10 09:03:27<SeP>2024-08-11 19:51:36<SeP>2024-08-13 06:39:45<SeP>2024-08-14 17:27:54<SeP>2024-08-16 04:16:03<SeP>2024-08-17 15:04:12<SeP>2024-08-19 01:52:21<SeP>2024-08-20 12:40:30<SeP>2024-08-21 23:28:39<SeP>2024-08-23 10:16:48<SeP>2024-08-24 21:04:57<SeP>2024-08-26 07:53:06<SeP>2024-08-27 18:41:15<SeP>2024-08-29 05:29:24<SeP>2024-08-30 16:17:33<SeP>2024-09-01 03:05:42<SeP>2024-09-02 13:53:51<SeP>2024-09-04 00:42:00<SeP>2024-09-05 11:30:09<SeP>2024-09-06 22:18:18<SeP>2024-09-08 09:06:27<SeP>2024-09-09 19:54:36<SeP>2024-09-11 06:42:45<SeP>2024-09-12 17:30:54<SeP>2024-09-14 04:19:03<SeP>2024-09-15 15:07:12<SeP>2024-09-17 01:55:21<SeP>2024-09-18 12:43:30<SeP>2024-09-19 23:31:39<SeP>2024-09-21 10:19:48<SeP>2024-09-22 21:07:57<SeP>2024-09-24 07:56:06<SeP>2024-09-25 18:44:15<SeP>2024-09-27 05:32:24<SeP>2024-09-28 16:20:33<SeP>2024-09-30 03:08:42<SeP>2024-10-01 13:56:51<SeP>2024-10-03 00:45:00<SeP>2024-10-04 11:33:09<SeP>2024-10-05 22:21:18<SeP>2024-10-07 09:09:27<SeP>2024-10-08 19:57:36<SeP>2024-10-10 06:45:45<SeP>2024-10-11 17:33:54<SeP>2024-10-13 04:22:03<SeP>2024-10-14 15:10:12<SeP>2024-10-16 01:58:21<SeP>2024-10-17 12:46:30<SeP>2024-10-18 23:34:39<SeP>2024-10-20 10:22:48<SeP>2024-10-21 21:10:57<SeP>2024-10-23 07:59:06<SeP>2024-10-24 18:47:15<SeP>2024-10-26 05:35:24<SeP>2024-10-27 16:23:33<SeP>2024-10-29 03:11:42<SeP>2024-10-30 13:59:51<SeP>2024-11-01 00:48:00<SeP>2024-11-02 11:36:09<SeP>2024-11-03 21:24:18<SeP>2024-11-05 08:12:27<SeP>2024-11-06 19:00:36<SeP>2024-11-08 05:48:45<SeP>2024-11-09 16:36:54<SeP>2024-11-11 03:25:03<SeP>2024-11-12 14:13:12<SeP>2024-11-14 01:01:21<SeP>2024-11-15 11:49:30<SeP>2024-11-16 22:37:39<SeP>2024-11-18 09:25:48<SeP>2024-11-19 20:13:57<SeP>2024-11-21 07:02:06<SeP>2024-11-22 17:50:15<SeP>2024-11-24 04:38:24<SeP>2024-11-25 15:26:33<SeP>2024-11-27 02:14:42<SeP>2024-11-28 13:02:51<SeP>2024-11-29 23:51:00<SeP>2024-12-01 10:39:09<SeP>2024-12-02 21:27:18<SeP>2024-12-04 08:15:27<SeP>2024-12-05 19:03:36<SeP>2024-12-07 05:51:45<SeP>2024-12-08 16:39:54<SeP>2024-12-10 03:28:03<SeP>2024-12-11 14:16:12<SeP>2024-12-13 01:04:21<SeP>2024-12-14 11:52:30<SeP>2024-12-15 22:40:39<SeP>2024-12-17 09:28:48<SeP>2024-12-18 20:16:57<SeP>2024-12-20 07:05:06<SeP>2024-12-21 17:53:15<SeP>2024-12-23 04:41:24<SeP>2024-12-24 15:29:33<SeP>2024-12-26 02:17:42<SeP>2024-12-27 13:05:51<SeP>2024-12-28 23:54:00<SeP>2024-12-30 10:42:09<SeP>2024-12-31 21:30:18<SeP>2025-01-02 08:18:27<SeP>2025-01-03 19:06:36<SeP>2025-01-05 05:54:45<SeP>2025-01-06 16:42:54<SeP>2025-01-08 03:31:03<SeP>2025-01-09 14:19:12<SeP>2025-01-11 01:07:21<SeP>2025-01-12 11:55:30<SeP>2025-01-13 22:43:39<SeP>2025-01-15 09:31:48<SeP>2025-01-16 20:19:57<SeP>2025-01-18 07:08:06<SeP>2025-01-19 17:56:15<SeP>2025-01-21 04:44:24<SeP>2025-01-22 15:32:33<SeP>2025-01-24 02:20:42<SeP>2025-01-25 13:08:51<SeP>2025-01-26 23:57:00<SeP>2025-01-28 10:45:09<SeP>2025-01-29 21:33:18<SeP>2025-01-31 08:21:27<SeP>2025-02-01 19:09:36<SeP>2025-02-03 05:57:45<SeP>2025-02-04 16:45:54<SeP>2025-02-06 03:34:03<SeP>2025-02-07 14:22:12<SeP>2025-02-09 01:10:21<SeP>2025-02-10 11:58:30<SeP>2025-02-11 22:46:39<SeP>2025-02-13 09:34:48<SeP>2025-02-14 20:22:57<SeP>2025-02-16 07:11:06<SeP>2025-02-17 17:59:15<SeP>2025-02-19 04:47:24<SeP>2025-02-20 15:35:33<SeP>2025-02-22 02:23:42<SeP>2025-02-23 13:11:51";
  const itemLabel       = "Scans";
  const itemData        = "761<SeP>1472<SeP>1376<SeP>1447<SeP>1254<SeP>1683<SeP>961<SeP>954<SeP>1132<SeP>3377<SeP>1819<SeP>2475<SeP>2251<SeP>2065<SeP>755<SeP>882<SeP>1408<SeP>2327<SeP>1604<SeP>1791<SeP>1335<SeP>929<SeP>884<SeP>1408<SeP>807<SeP>969<SeP>817<SeP>1515<SeP>2945<SeP>920<SeP>832<SeP>1439<SeP>1249<SeP>804<SeP>2828<SeP>1645<SeP>2647<SeP>1842<SeP>1803<SeP>1401<SeP>1258<SeP>1750<SeP>1736<SeP>2205<SeP>1581<SeP>1628<SeP>1608<SeP>1655<SeP>1708<SeP>1634<SeP>2091<SeP>1505<SeP>1666<SeP>2055<SeP>2860<SeP>1279<SeP>1891<SeP>1833<SeP>2378<SeP>1509<SeP>2150<SeP>3110<SeP>1400<SeP>1495<SeP>1462<SeP>1486<SeP>1845<SeP>1562<SeP>1251<SeP>1434<SeP>1201<SeP>2327<SeP>1195<SeP>1118<SeP>1206<SeP>2293<SeP>7296<SeP>1139<SeP>1363<SeP>1255<SeP>1710<SeP>1961<SeP>1079<SeP>6533<SeP>1706<SeP>1576<SeP>992<SeP>1132<SeP>3314<SeP>1199<SeP>947<SeP>967<SeP>1105<SeP>1011<SeP>3008<SeP>1196<SeP>1388<SeP>2856<SeP>6585<SeP>1241<SeP>973<SeP>924<SeP>918<SeP>1004<SeP>975<SeP>971<SeP>1024<SeP>3807<SeP>2195<SeP>1408<SeP>1610<SeP>638<SeP>947<SeP>1580<SeP>1089<SeP>1052<SeP>974<SeP>2219<SeP>1255<SeP>1083<SeP>994<SeP>1079<SeP>825<SeP>834<SeP>867<SeP>823<SeP>900<SeP>1032<SeP>842<SeP>844<SeP>814<SeP>850<SeP>857<SeP>707<SeP>801<SeP>911<SeP>841<SeP>894<SeP>791<SeP>856<SeP>760<SeP>802<SeP>1050<SeP>767<SeP>879<SeP>897<SeP>930<SeP>953<SeP>987<SeP>952<SeP>513<SeP>888<SeP>891<SeP>1054<SeP>981<SeP>1043<SeP>1137<SeP>1152<SeP>1016<SeP>939<SeP>936<SeP>990<SeP>722<SeP>980<SeP>1044<SeP>899<SeP>873<SeP>894<SeP>1016<SeP>994<SeP>1035<SeP>990<SeP>1121<SeP>969<SeP>915<SeP>1028<SeP>2136<SeP>1300<SeP>1022<SeP>1000<SeP>1133<SeP>954<SeP>1029<SeP>830<SeP>625<SeP>928<SeP>1179<SeP>877<SeP>936<SeP>1023<SeP>1350<SeP>1024<SeP>1148<SeP>1282<SeP>1202<SeP>1290<SeP>1294<SeP>1269<SeP>1536<SeP>1880<SeP>1457<SeP>1252<SeP>685<SeP>963<SeP>1026<SeP>1166<SeP>403<SeP>901<SeP>794<SeP>1001<SeP>1907<SeP>5636<SeP>2265<SeP>1949<SeP>1257<SeP>881<SeP>967<SeP>918<SeP>976<SeP>897<SeP>1143<SeP>1005<SeP>1050<SeP>1654<SeP>1832<SeP>972<SeP>1271<SeP>1240<SeP>1162<SeP>1154<SeP>1010<SeP>1018<SeP>983<SeP>1134<SeP>979<SeP>1185<SeP>952<SeP>1190<SeP>787<SeP>1416<SeP>1025<SeP>1145<SeP>1100<SeP>1339<SeP>1239<SeP>1114<SeP>1615<SeP>1107<SeP>1154<SeP>1113<SeP>1660<SeP>1596<SeP>1300<SeP>1972<SeP>1617<SeP>1525<SeP>1895<SeP>1448<SeP>1173<SeP>1135<SeP>1372<SeP>1100<SeP>1526<SeP>1250<SeP>1185<SeP>1729<SeP>1656<SeP>1440<SeP>1363<SeP>1450<SeP>1216<SeP>1124<SeP>1083<SeP>1290<SeP>1160<SeP>1254<SeP>1236<SeP>1185<SeP>1445<SeP>1888<SeP>1324<SeP>1173<SeP>1660<SeP>1414<SeP>1124<SeP>1092<SeP>986<SeP>776<SeP>897<SeP>1023<SeP>996<SeP>1815<SeP>1044<SeP>1130<SeP>1161<SeP>785<SeP>1005<SeP>990<SeP>1303<SeP>857<SeP>881<SeP>1122<SeP>1295<SeP>1547<SeP>1417<SeP>1050<SeP>1007<SeP>1143<SeP>1744<SeP>1082<SeP>1112<SeP>995<SeP>1318<SeP>1366<SeP>834<SeP>1057<SeP>1190<SeP>1021<SeP>890<SeP>832<SeP>1359<SeP>1316<SeP>1481<SeP>1631<SeP>1415<SeP>935<SeP>1099<SeP>1075<SeP>1146<SeP>1146<SeP>1143<SeP>1003<SeP>985<SeP>1269<SeP>1444<SeP>1372<SeP>1556<SeP>1427<SeP>1213<SeP>1590<SeP>1475<SeP>1277<SeP>1441<SeP>1523<SeP>1302<SeP>1410<SeP>1530<SeP>1567<SeP>1480<SeP>1355<SeP>1394<SeP>1371<SeP>1174<SeP>1263<SeP>1435<SeP>1606<SeP>1491<SeP>1262<SeP>1122<SeP>1295<SeP>1356<SeP>1316<SeP>1120<SeP>1672<SeP>1877<SeP>1400<SeP>1023<SeP>887<SeP>1519<SeP>1716<SeP>1231<SeP>1406<SeP>1108<SeP>1186<SeP>1347<SeP>1490<SeP>1299<SeP>1480<SeP>1671<SeP>1319<SeP>1550<SeP>1730<SeP>1253<SeP>1540<SeP>1345<SeP>1792<SeP>1567<SeP>1009<SeP>1057<SeP>2050<SeP>1864<SeP>1682<SeP>1752<SeP>1673<SeP>1510<SeP>1619<SeP>1612<SeP>1547<SeP>1411<SeP>1794";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:48:09<SeP>2023-07-28 21:36:18<SeP>2023-07-30 08:24:27<SeP>2023-07-31 19:12:36<SeP>2023-08-02 06:00:45<SeP>2023-08-03 16:48:54<SeP>2023-08-05 03:37:03<SeP>2023-08-06 14:25:12<SeP>2023-08-08 01:13:21<SeP>2023-08-09 12:01:30<SeP>2023-08-10 22:49:39<SeP>2023-08-12 09:37:48<SeP>2023-08-13 20:25:57<SeP>2023-08-15 07:14:06<SeP>2023-08-16 18:02:15<SeP>2023-08-18 04:50:24<SeP>2023-08-19 15:38:33<SeP>2023-08-21 02:26:42<SeP>2023-08-22 13:14:51<SeP>2023-08-24 00:03:00<SeP>2023-08-25 10:51:09<SeP>2023-08-26 21:39:18<SeP>2023-08-28 08:27:27<SeP>2023-08-29 19:15:36<SeP>2023-08-31 06:03:45<SeP>2023-09-01 16:51:54<SeP>2023-09-03 03:40:03<SeP>2023-09-04 14:28:12<SeP>2023-09-06 01:16:21<SeP>2023-09-07 12:04:30<SeP>2023-09-08 22:52:39<SeP>2023-09-10 09:40:48<SeP>2023-09-11 20:28:57<SeP>2023-09-13 07:17:06<SeP>2023-09-14 18:05:15<SeP>2023-09-16 04:53:24<SeP>2023-09-17 15:41:33<SeP>2023-09-19 02:29:42<SeP>2023-09-20 13:17:51<SeP>2023-09-22 00:06:00<SeP>2023-09-23 10:54:09<SeP>2023-09-24 21:42:18<SeP>2023-09-26 08:30:27<SeP>2023-09-27 19:18:36<SeP>2023-09-29 06:06:45<SeP>2023-09-30 16:54:54<SeP>2023-10-02 03:43:03<SeP>2023-10-03 14:31:12<SeP>2023-10-05 01:19:21<SeP>2023-10-06 12:07:30<SeP>2023-10-07 22:55:39<SeP>2023-10-09 09:43:48<SeP>2023-10-10 20:31:57<SeP>2023-10-12 07:20:06<SeP>2023-10-13 18:08:15<SeP>2023-10-15 04:56:24<SeP>2023-10-16 15:44:33<SeP>2023-10-18 02:32:42<SeP>2023-10-19 13:20:51<SeP>2023-10-21 00:09:00<SeP>2023-10-22 10:57:09<SeP>2023-10-23 21:45:18<SeP>2023-10-25 08:33:27<SeP>2023-10-26 19:21:36<SeP>2023-10-28 06:09:45<SeP>2023-10-29 16:57:54<SeP>2023-10-31 03:46:03<SeP>2023-11-01 14:34:12<SeP>2023-11-03 01:22:21<SeP>2023-11-04 12:10:30<SeP>2023-11-05 21:58:39<SeP>2023-11-07 08:46:48<SeP>2023-11-08 19:34:57<SeP>2023-11-10 06:23:06<SeP>2023-11-11 17:11:15<SeP>2023-11-13 03:59:24<SeP>2023-11-14 14:47:33<SeP>2023-11-16 01:35:42<SeP>2023-11-17 12:23:51<SeP>2023-11-18 23:12:00<SeP>2023-11-20 10:00:09<SeP>2023-11-21 20:48:18<SeP>2023-11-23 07:36:27<SeP>2023-11-24 18:24:36<SeP>2023-11-26 05:12:45<SeP>2023-11-27 16:00:54<SeP>2023-11-29 02:49:03<SeP>2023-11-30 13:37:12<SeP>2023-12-02 00:25:21<SeP>2023-12-03 11:13:30<SeP>2023-12-04 22:01:39<SeP>2023-12-06 08:49:48<SeP>2023-12-07 19:37:57<SeP>2023-12-09 06:26:06<SeP>2023-12-10 17:14:15<SeP>2023-12-12 04:02:24<SeP>2023-12-13 14:50:33<SeP>2023-12-15 01:38:42<SeP>2023-12-16 12:26:51<SeP>2023-12-17 23:15:00<SeP>2023-12-19 10:03:09<SeP>2023-12-20 20:51:18<SeP>2023-12-22 07:39:27<SeP>2023-12-23 18:27:36<SeP>2023-12-25 05:15:45<SeP>2023-12-26 16:03:54<SeP>2023-12-28 02:52:03<SeP>2023-12-29 13:40:12<SeP>2023-12-31 00:28:21<SeP>2024-01-01 11:16:30<SeP>2024-01-02 22:04:39<SeP>2024-01-04 08:52:48<SeP>2024-01-05 19:40:57<SeP>2024-01-07 06:29:06<SeP>2024-01-08 17:17:15<SeP>2024-01-10 04:05:24<SeP>2024-01-11 14:53:33<SeP>2024-01-13 01:41:42<SeP>2024-01-14 12:29:51<SeP>2024-01-15 23:18:00<SeP>2024-01-17 10:06:09<SeP>2024-01-18 20:54:18<SeP>2024-01-20 07:42:27<SeP>2024-01-21 18:30:36<SeP>2024-01-23 05:18:45<SeP>2024-01-24 16:06:54<SeP>2024-01-26 02:55:03<SeP>2024-01-27 13:43:12<SeP>2024-01-29 00:31:21<SeP>2024-01-30 11:19:30<SeP>2024-01-31 22:07:39<SeP>2024-02-02 08:55:48<SeP>2024-02-03 19:43:57<SeP>2024-02-05 06:32:06<SeP>2024-02-06 17:20:15<SeP>2024-02-08 04:08:24<SeP>2024-02-09 14:56:33<SeP>2024-02-11 01:44:42<SeP>2024-02-12 12:32:51<SeP>2024-02-13 23:21:00<SeP>2024-02-15 10:09:09<SeP>2024-02-16 20:57:18<SeP>2024-02-18 07:45:27<SeP>2024-02-19 18:33:36<SeP>2024-02-21 05:21:45<SeP>2024-02-22 16:09:54<SeP>2024-02-24 02:58:03<SeP>2024-02-25 13:46:12<SeP>2024-02-27 00:34:21<SeP>2024-02-28 11:22:30<SeP>2024-02-29 22:10:39<SeP>2024-03-02 08:58:48<SeP>2024-03-03 19:46:57<SeP>2024-03-05 06:35:06<SeP>2024-03-06 17:23:15<SeP>2024-03-08 04:11:24<SeP>2024-03-09 14:59:33<SeP>2024-03-11 02:47:42<SeP>2024-03-12 13:35:51<SeP>2024-03-14 00:24:00<SeP>2024-03-15 11:12:09<SeP>2024-03-16 22:00:18<SeP>2024-03-18 08:48:27<SeP>2024-03-19 19:36:36<SeP>2024-03-21 06:24:45<SeP>2024-03-22 17:12:54<SeP>2024-03-24 04:01:03<SeP>2024-03-25 14:49:12<SeP>2024-03-27 01:37:21<SeP>2024-03-28 12:25:30<SeP>2024-03-29 23:13:39<SeP>2024-03-31 10:01:48<SeP>2024-04-01 20:49:57<SeP>2024-04-03 07:38:06<SeP>2024-04-04 18:26:15<SeP>2024-04-06 05:14:24<SeP>2024-04-07 16:02:33<SeP>2024-04-09 02:50:42<SeP>2024-04-10 13:38:51<SeP>2024-04-12 00:27:00<SeP>2024-04-13 11:15:09<SeP>2024-04-14 22:03:18<SeP>2024-04-16 08:51:27<SeP>2024-04-17 19:39:36<SeP>2024-04-19 06:27:45<SeP>2024-04-20 17:15:54<SeP>2024-04-22 04:04:03<SeP>2024-04-23 14:52:12<SeP>2024-04-25 01:40:21<SeP>2024-04-26 12:28:30<SeP>2024-04-27 23:16:39<SeP>2024-04-29 10:04:48<SeP>2024-04-30 20:52:57<SeP>2024-05-02 07:41:06<SeP>2024-05-03 18:29:15<SeP>2024-05-05 05:17:24<SeP>2024-05-06 16:05:33<SeP>2024-05-08 02:53:42<SeP>2024-05-09 13:41:51<SeP>2024-05-11 00:30:00<SeP>2024-05-12 11:18:09<SeP>2024-05-13 22:06:18<SeP>2024-05-15 08:54:27<SeP>2024-05-16 19:42:36<SeP>2024-05-18 06:30:45<SeP>2024-05-19 17:18:54<SeP>2024-05-21 04:07:03<SeP>2024-05-22 14:55:12<SeP>2024-05-24 01:43:21<SeP>2024-05-25 12:31:30<SeP>2024-05-26 23:19:39<SeP>2024-05-28 10:07:48<SeP>2024-05-29 20:55:57<SeP>2024-05-31 07:44:06<SeP>2024-06-01 18:32:15<SeP>2024-06-03 05:20:24<SeP>2024-06-04 16:08:33<SeP>2024-06-06 02:56:42<SeP>2024-06-07 13:44:51<SeP>2024-06-09 00:33:00<SeP>2024-06-10 11:21:09<SeP>2024-06-11 22:09:18<SeP>2024-06-13 08:57:27<SeP>2024-06-14 19:45:36<SeP>2024-06-16 06:33:45<SeP>2024-06-17 17:21:54<SeP>2024-06-19 04:10:03<SeP>2024-06-20 14:58:12<SeP>2024-06-22 01:46:21<SeP>2024-06-23 12:34:30<SeP>2024-06-24 23:22:39<SeP>2024-06-26 10:10:48<SeP>2024-06-27 20:58:57<SeP>2024-06-29 07:47:06<SeP>2024-06-30 18:35:15<SeP>2024-07-02 05:23:24<SeP>2024-07-03 16:11:33<SeP>2024-07-05 02:59:42<SeP>2024-07-06 13:47:51<SeP>2024-07-08 00:36:00<SeP>2024-07-09 11:24:09<SeP>2024-07-10 22:12:18<SeP>2024-07-12 09:00:27<SeP>2024-07-13 19:48:36<SeP>2024-07-15 06:36:45<SeP>2024-07-16 17:24:54<SeP>2024-07-18 04:13:03<SeP>2024-07-19 15:01:12<SeP>2024-07-21 01:49:21<SeP>2024-07-22 12:37:30<SeP>2024-07-23 23:25:39<SeP>2024-07-25 10:13:48<SeP>2024-07-26 21:01:57<SeP>2024-07-28 07:50:06<SeP>2024-07-29 18:38:15<SeP>2024-07-31 05:26:24<SeP>2024-08-01 16:14:33<SeP>2024-08-03 03:02:42<SeP>2024-08-04 13:50:51<SeP>2024-08-06 00:39:00<SeP>2024-08-07 11:27:09<SeP>2024-08-08 22:15:18<SeP>2024-08-10 09:03:27<SeP>2024-08-11 19:51:36<SeP>2024-08-13 06:39:45<SeP>2024-08-14 17:27:54<SeP>2024-08-16 04:16:03<SeP>2024-08-17 15:04:12<SeP>2024-08-19 01:52:21<SeP>2024-08-20 12:40:30<SeP>2024-08-21 23:28:39<SeP>2024-08-23 10:16:48<SeP>2024-08-24 21:04:57<SeP>2024-08-26 07:53:06<SeP>2024-08-27 18:41:15<SeP>2024-08-29 05:29:24<SeP>2024-08-30 16:17:33<SeP>2024-09-01 03:05:42<SeP>2024-09-02 13:53:51<SeP>2024-09-04 00:42:00<SeP>2024-09-05 11:30:09<SeP>2024-09-06 22:18:18<SeP>2024-09-08 09:06:27<SeP>2024-09-09 19:54:36<SeP>2024-09-11 06:42:45<SeP>2024-09-12 17:30:54<SeP>2024-09-14 04:19:03<SeP>2024-09-15 15:07:12<SeP>2024-09-17 01:55:21<SeP>2024-09-18 12:43:30<SeP>2024-09-19 23:31:39<SeP>2024-09-21 10:19:48<SeP>2024-09-22 21:07:57<SeP>2024-09-24 07:56:06<SeP>2024-09-25 18:44:15<SeP>2024-09-27 05:32:24<SeP>2024-09-28 16:20:33<SeP>2024-09-30 03:08:42<SeP>2024-10-01 13:56:51<SeP>2024-10-03 00:45:00<SeP>2024-10-04 11:33:09<SeP>2024-10-05 22:21:18<SeP>2024-10-07 09:09:27<SeP>2024-10-08 19:57:36<SeP>2024-10-10 06:45:45<SeP>2024-10-11 17:33:54<SeP>2024-10-13 04:22:03<SeP>2024-10-14 15:10:12<SeP>2024-10-16 01:58:21<SeP>2024-10-17 12:46:30<SeP>2024-10-18 23:34:39<SeP>2024-10-20 10:22:48<SeP>2024-10-21 21:10:57<SeP>2024-10-23 07:59:06<SeP>2024-10-24 18:47:15<SeP>2024-10-26 05:35:24<SeP>2024-10-27 16:23:33<SeP>2024-10-29 03:11:42<SeP>2024-10-30 13:59:51<SeP>2024-11-01 00:48:00<SeP>2024-11-02 11:36:09<SeP>2024-11-03 21:24:18<SeP>2024-11-05 08:12:27<SeP>2024-11-06 19:00:36<SeP>2024-11-08 05:48:45<SeP>2024-11-09 16:36:54<SeP>2024-11-11 03:25:03<SeP>2024-11-12 14:13:12<SeP>2024-11-14 01:01:21<SeP>2024-11-15 11:49:30<SeP>2024-11-16 22:37:39<SeP>2024-11-18 09:25:48<SeP>2024-11-19 20:13:57<SeP>2024-11-21 07:02:06<SeP>2024-11-22 17:50:15<SeP>2024-11-24 04:38:24<SeP>2024-11-25 15:26:33<SeP>2024-11-27 02:14:42<SeP>2024-11-28 13:02:51<SeP>2024-11-29 23:51:00<SeP>2024-12-01 10:39:09<SeP>2024-12-02 21:27:18<SeP>2024-12-04 08:15:27<SeP>2024-12-05 19:03:36<SeP>2024-12-07 05:51:45<SeP>2024-12-08 16:39:54<SeP>2024-12-10 03:28:03<SeP>2024-12-11 14:16:12<SeP>2024-12-13 01:04:21<SeP>2024-12-14 11:52:30<SeP>2024-12-15 22:40:39<SeP>2024-12-17 09:28:48<SeP>2024-12-18 20:16:57<SeP>2024-12-20 07:05:06<SeP>2024-12-21 17:53:15<SeP>2024-12-23 04:41:24<SeP>2024-12-24 15:29:33<SeP>2024-12-26 02:17:42<SeP>2024-12-27 13:05:51<SeP>2024-12-28 23:54:00<SeP>2024-12-30 10:42:09<SeP>2024-12-31 21:30:18<SeP>2025-01-02 08:18:27<SeP>2025-01-03 19:06:36<SeP>2025-01-05 05:54:45<SeP>2025-01-06 16:42:54<SeP>2025-01-08 03:31:03<SeP>2025-01-09 14:19:12<SeP>2025-01-11 01:07:21<SeP>2025-01-12 11:55:30<SeP>2025-01-13 22:43:39<SeP>2025-01-15 09:31:48<SeP>2025-01-16 20:19:57<SeP>2025-01-18 07:08:06<SeP>2025-01-19 17:56:15<SeP>2025-01-21 04:44:24<SeP>2025-01-22 15:32:33<SeP>2025-01-24 02:20:42<SeP>2025-01-25 13:08:51<SeP>2025-01-26 23:57:00<SeP>2025-01-28 10:45:09<SeP>2025-01-29 21:33:18<SeP>2025-01-31 08:21:27<SeP>2025-02-01 19:09:36<SeP>2025-02-03 05:57:45<SeP>2025-02-04 16:45:54<SeP>2025-02-06 03:34:03<SeP>2025-02-07 14:22:12<SeP>2025-02-09 01:10:21<SeP>2025-02-10 11:58:30<SeP>2025-02-11 22:46:39<SeP>2025-02-13 09:34:48<SeP>2025-02-14 20:22:57<SeP>2025-02-16 07:11:06<SeP>2025-02-17 17:59:15<SeP>2025-02-19 04:47:24<SeP>2025-02-20 15:35:33<SeP>2025-02-22 02:23:42<SeP>2025-02-23 13:11:51";
  const itemLabel       = "Attacks";
  const itemData        = "152<SeP>615<SeP>976<SeP>719<SeP>534<SeP>229<SeP>6968<SeP>511<SeP>9176<SeP>970<SeP>382<SeP>1142<SeP>1222<SeP>293<SeP>162<SeP>459<SeP>110<SeP>764<SeP>284<SeP>4306<SeP>7532<SeP>6986<SeP>7447<SeP>7165<SeP>266<SeP>309<SeP>350<SeP>215<SeP>721<SeP>5555<SeP>73<SeP>381<SeP>324<SeP>374<SeP>3075<SeP>9463<SeP>8403<SeP>10374<SeP>9380<SeP>5932<SeP>5912<SeP>8101<SeP>7859<SeP>10035<SeP>7653<SeP>7172<SeP>9201<SeP>8272<SeP>7677<SeP>8334<SeP>6004<SeP>9310<SeP>9170<SeP>6238<SeP>8311<SeP>7387<SeP>10364<SeP>18151<SeP>15813<SeP>9851<SeP>10586<SeP>7342<SeP>7589<SeP>9002<SeP>8588<SeP>8374<SeP>6904<SeP>6275<SeP>7082<SeP>6800<SeP>5200<SeP>3436<SeP>6799<SeP>5846<SeP>6458<SeP>6595<SeP>6663<SeP>4349<SeP>5708<SeP>7362<SeP>4684<SeP>6418<SeP>5555<SeP>4485<SeP>7628<SeP>5263<SeP>5334<SeP>5681<SeP>8942<SeP>20932<SeP>25193<SeP>17941<SeP>9927<SeP>5534<SeP>7658<SeP>11628<SeP>7671<SeP>3400<SeP>6658<SeP>3590<SeP>4747<SeP>6805<SeP>6033<SeP>7855<SeP>6568<SeP>5493<SeP>4322<SeP>5924<SeP>9482<SeP>8038<SeP>7956<SeP>4211<SeP>6575<SeP>9575<SeP>8595<SeP>4611<SeP>3275<SeP>6261<SeP>9351<SeP>5018<SeP>7159<SeP>9489<SeP>4216<SeP>2788<SeP>1261<SeP>1715<SeP>1782<SeP>2265<SeP>1083<SeP>1402<SeP>487<SeP>1373<SeP>1541<SeP>1122<SeP>878<SeP>1114<SeP>1062<SeP>749<SeP>1432<SeP>1404<SeP>1201<SeP>845<SeP>2240<SeP>2030<SeP>6427<SeP>10235<SeP>8015<SeP>8173<SeP>6938<SeP>12800<SeP>2435<SeP>11023<SeP>9938<SeP>9514<SeP>13304<SeP>8221<SeP>11676<SeP>10774<SeP>8726<SeP>13369<SeP>5115<SeP>4578<SeP>7307<SeP>23563<SeP>7543<SeP>7933<SeP>8317<SeP>13428<SeP>11415<SeP>8789<SeP>4495<SeP>7664<SeP>8171<SeP>24837<SeP>7508<SeP>8711<SeP>10662<SeP>5651<SeP>5587<SeP>6372<SeP>16111<SeP>4259<SeP>12774<SeP>8087<SeP>6803<SeP>8542<SeP>7585<SeP>3002<SeP>6033<SeP>5683<SeP>7086<SeP>6400<SeP>6244<SeP>7155<SeP>18658<SeP>6998<SeP>8560<SeP>5064<SeP>7601<SeP>9080<SeP>8954<SeP>5831<SeP>2650<SeP>7106<SeP>3373<SeP>5209<SeP>3095<SeP>1550<SeP>581<SeP>636<SeP>196<SeP>541<SeP>637<SeP>771<SeP>419<SeP>917<SeP>1548<SeP>1340<SeP>2848<SeP>22541<SeP>695<SeP>5336<SeP>2877<SeP>3394<SeP>6608<SeP>2645<SeP>4236<SeP>3528<SeP>2840<SeP>3074<SeP>3099<SeP>4734<SeP>1704<SeP>2919<SeP>2617<SeP>2190<SeP>1871<SeP>1937<SeP>1200<SeP>1911<SeP>787<SeP>925<SeP>1780<SeP>18905<SeP>9315<SeP>2338<SeP>3723<SeP>3640<SeP>2235<SeP>3964<SeP>1819<SeP>3179<SeP>2997<SeP>2940<SeP>2877<SeP>3088<SeP>2822<SeP>3168<SeP>6258<SeP>5275<SeP>3704<SeP>3756<SeP>2576<SeP>2978<SeP>4556<SeP>4166<SeP>10270<SeP>5163<SeP>2475<SeP>2801<SeP>2009<SeP>4736<SeP>3666<SeP>3745<SeP>3168<SeP>2484<SeP>5879<SeP>3269<SeP>6014<SeP>3576<SeP>5512<SeP>4437<SeP>7186<SeP>3601<SeP>17270<SeP>10791<SeP>12519<SeP>1727<SeP>2288<SeP>4889<SeP>3388<SeP>3888<SeP>3931<SeP>5019<SeP>3935<SeP>4531<SeP>4251<SeP>3529<SeP>3315<SeP>1257<SeP>1979<SeP>2765<SeP>2973<SeP>2232<SeP>3921<SeP>3822<SeP>4319<SeP>3351<SeP>3566<SeP>3782<SeP>3500<SeP>3121<SeP>6821<SeP>7648<SeP>5865<SeP>4497<SeP>4716<SeP>4573<SeP>3693<SeP>4013<SeP>4037<SeP>6672<SeP>5060<SeP>4582<SeP>2754<SeP>1129<SeP>1145<SeP>1742<SeP>1301<SeP>1232<SeP>1693<SeP>1550<SeP>1346<SeP>3255<SeP>4111<SeP>6369<SeP>30759<SeP>8250<SeP>5306<SeP>15956<SeP>12605<SeP>4998<SeP>6344<SeP>4678<SeP>22416<SeP>6367<SeP>5407<SeP>4431<SeP>4660<SeP>6316<SeP>22107<SeP>13445<SeP>3918<SeP>3542<SeP>3959<SeP>5595<SeP>5140<SeP>2775<SeP>3451<SeP>4159<SeP>5169<SeP>5042<SeP>18275<SeP>4427<SeP>5929<SeP>6224<SeP>2689<SeP>2750<SeP>3550<SeP>4341<SeP>3934<SeP>4233<SeP>2755<SeP>3734<SeP>2155<SeP>4522<SeP>4315<SeP>8170<SeP>10625<SeP>8012<SeP>8600<SeP>9286<SeP>6873<SeP>5774<SeP>5117<SeP>4141<SeP>24922<SeP>4374<SeP>3027<SeP>4520<SeP>3273<SeP>11390<SeP>5715<SeP>3489<SeP>4883<SeP>4121<SeP>2959<SeP>9296<SeP>9175<SeP>4944";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:48:09<SeP>2023-07-28 21:36:18<SeP>2023-07-30 08:24:27<SeP>2023-07-31 19:12:36<SeP>2023-08-02 06:00:45<SeP>2023-08-03 16:48:54<SeP>2023-08-05 03:37:03<SeP>2023-08-06 14:25:12<SeP>2023-08-08 01:13:21<SeP>2023-08-09 12:01:30<SeP>2023-08-10 22:49:39<SeP>2023-08-12 09:37:48<SeP>2023-08-13 20:25:57<SeP>2023-08-15 07:14:06<SeP>2023-08-16 18:02:15<SeP>2023-08-18 04:50:24<SeP>2023-08-19 15:38:33<SeP>2023-08-21 02:26:42<SeP>2023-08-22 13:14:51<SeP>2023-08-24 00:03:00<SeP>2023-08-25 10:51:09<SeP>2023-08-26 21:39:18<SeP>2023-08-28 08:27:27<SeP>2023-08-29 19:15:36<SeP>2023-08-31 06:03:45<SeP>2023-09-01 16:51:54<SeP>2023-09-03 03:40:03<SeP>2023-09-04 14:28:12<SeP>2023-09-06 01:16:21<SeP>2023-09-07 12:04:30<SeP>2023-09-08 22:52:39<SeP>2023-09-10 09:40:48<SeP>2023-09-11 20:28:57<SeP>2023-09-13 07:17:06<SeP>2023-09-14 18:05:15<SeP>2023-09-16 04:53:24<SeP>2023-09-17 15:41:33<SeP>2023-09-19 02:29:42<SeP>2023-09-20 13:17:51<SeP>2023-09-22 00:06:00<SeP>2023-09-23 10:54:09<SeP>2023-09-24 21:42:18<SeP>2023-09-26 08:30:27<SeP>2023-09-27 19:18:36<SeP>2023-09-29 06:06:45<SeP>2023-09-30 16:54:54<SeP>2023-10-02 03:43:03<SeP>2023-10-03 14:31:12<SeP>2023-10-05 01:19:21<SeP>2023-10-06 12:07:30<SeP>2023-10-07 22:55:39<SeP>2023-10-09 09:43:48<SeP>2023-10-10 20:31:57<SeP>2023-10-12 07:20:06<SeP>2023-10-13 18:08:15<SeP>2023-10-15 04:56:24<SeP>2023-10-16 15:44:33<SeP>2023-10-18 02:32:42<SeP>2023-10-19 13:20:51<SeP>2023-10-21 00:09:00<SeP>2023-10-22 10:57:09<SeP>2023-10-23 21:45:18<SeP>2023-10-25 08:33:27<SeP>2023-10-26 19:21:36<SeP>2023-10-28 06:09:45<SeP>2023-10-29 16:57:54<SeP>2023-10-31 03:46:03<SeP>2023-11-01 14:34:12<SeP>2023-11-03 01:22:21<SeP>2023-11-04 12:10:30<SeP>2023-11-05 21:58:39<SeP>2023-11-07 08:46:48<SeP>2023-11-08 19:34:57<SeP>2023-11-10 06:23:06<SeP>2023-11-11 17:11:15<SeP>2023-11-13 03:59:24<SeP>2023-11-14 14:47:33<SeP>2023-11-16 01:35:42<SeP>2023-11-17 12:23:51<SeP>2023-11-18 23:12:00<SeP>2023-11-20 10:00:09<SeP>2023-11-21 20:48:18<SeP>2023-11-23 07:36:27<SeP>2023-11-24 18:24:36<SeP>2023-11-26 05:12:45<SeP>2023-11-27 16:00:54<SeP>2023-11-29 02:49:03<SeP>2023-11-30 13:37:12<SeP>2023-12-02 00:25:21<SeP>2023-12-03 11:13:30<SeP>2023-12-04 22:01:39<SeP>2023-12-06 08:49:48<SeP>2023-12-07 19:37:57<SeP>2023-12-09 06:26:06<SeP>2023-12-10 17:14:15<SeP>2023-12-12 04:02:24<SeP>2023-12-13 14:50:33<SeP>2023-12-15 01:38:42<SeP>2023-12-16 12:26:51<SeP>2023-12-17 23:15:00<SeP>2023-12-19 10:03:09<SeP>2023-12-20 20:51:18<SeP>2023-12-22 07:39:27<SeP>2023-12-23 18:27:36<SeP>2023-12-25 05:15:45<SeP>2023-12-26 16:03:54<SeP>2023-12-28 02:52:03<SeP>2023-12-29 13:40:12<SeP>2023-12-31 00:28:21<SeP>2024-01-01 11:16:30<SeP>2024-01-02 22:04:39<SeP>2024-01-04 08:52:48<SeP>2024-01-05 19:40:57<SeP>2024-01-07 06:29:06<SeP>2024-01-08 17:17:15<SeP>2024-01-10 04:05:24<SeP>2024-01-11 14:53:33<SeP>2024-01-13 01:41:42<SeP>2024-01-14 12:29:51<SeP>2024-01-15 23:18:00<SeP>2024-01-17 10:06:09<SeP>2024-01-18 20:54:18<SeP>2024-01-20 07:42:27<SeP>2024-01-21 18:30:36<SeP>2024-01-23 05:18:45<SeP>2024-01-24 16:06:54<SeP>2024-01-26 02:55:03<SeP>2024-01-27 13:43:12<SeP>2024-01-29 00:31:21<SeP>2024-01-30 11:19:30<SeP>2024-01-31 22:07:39<SeP>2024-02-02 08:55:48<SeP>2024-02-03 19:43:57<SeP>2024-02-05 06:32:06<SeP>2024-02-06 17:20:15<SeP>2024-02-08 04:08:24<SeP>2024-02-09 14:56:33<SeP>2024-02-11 01:44:42<SeP>2024-02-12 12:32:51<SeP>2024-02-13 23:21:00<SeP>2024-02-15 10:09:09<SeP>2024-02-16 20:57:18<SeP>2024-02-18 07:45:27<SeP>2024-02-19 18:33:36<SeP>2024-02-21 05:21:45<SeP>2024-02-22 16:09:54<SeP>2024-02-24 02:58:03<SeP>2024-02-25 13:46:12<SeP>2024-02-27 00:34:21<SeP>2024-02-28 11:22:30<SeP>2024-02-29 22:10:39<SeP>2024-03-02 08:58:48<SeP>2024-03-03 19:46:57<SeP>2024-03-05 06:35:06<SeP>2024-03-06 17:23:15<SeP>2024-03-08 04:11:24<SeP>2024-03-09 14:59:33<SeP>2024-03-11 02:47:42<SeP>2024-03-12 13:35:51<SeP>2024-03-14 00:24:00<SeP>2024-03-15 11:12:09<SeP>2024-03-16 22:00:18<SeP>2024-03-18 08:48:27<SeP>2024-03-19 19:36:36<SeP>2024-03-21 06:24:45<SeP>2024-03-22 17:12:54<SeP>2024-03-24 04:01:03<SeP>2024-03-25 14:49:12<SeP>2024-03-27 01:37:21<SeP>2024-03-28 12:25:30<SeP>2024-03-29 23:13:39<SeP>2024-03-31 10:01:48<SeP>2024-04-01 20:49:57<SeP>2024-04-03 07:38:06<SeP>2024-04-04 18:26:15<SeP>2024-04-06 05:14:24<SeP>2024-04-07 16:02:33<SeP>2024-04-09 02:50:42<SeP>2024-04-10 13:38:51<SeP>2024-04-12 00:27:00<SeP>2024-04-13 11:15:09<SeP>2024-04-14 22:03:18<SeP>2024-04-16 08:51:27<SeP>2024-04-17 19:39:36<SeP>2024-04-19 06:27:45<SeP>2024-04-20 17:15:54<SeP>2024-04-22 04:04:03<SeP>2024-04-23 14:52:12<SeP>2024-04-25 01:40:21<SeP>2024-04-26 12:28:30<SeP>2024-04-27 23:16:39<SeP>2024-04-29 10:04:48<SeP>2024-04-30 20:52:57<SeP>2024-05-02 07:41:06<SeP>2024-05-03 18:29:15<SeP>2024-05-05 05:17:24<SeP>2024-05-06 16:05:33<SeP>2024-05-08 02:53:42<SeP>2024-05-09 13:41:51<SeP>2024-05-11 00:30:00<SeP>2024-05-12 11:18:09<SeP>2024-05-13 22:06:18<SeP>2024-05-15 08:54:27<SeP>2024-05-16 19:42:36<SeP>2024-05-18 06:30:45<SeP>2024-05-19 17:18:54<SeP>2024-05-21 04:07:03<SeP>2024-05-22 14:55:12<SeP>2024-05-24 01:43:21<SeP>2024-05-25 12:31:30<SeP>2024-05-26 23:19:39<SeP>2024-05-28 10:07:48<SeP>2024-05-29 20:55:57<SeP>2024-05-31 07:44:06<SeP>2024-06-01 18:32:15<SeP>2024-06-03 05:20:24<SeP>2024-06-04 16:08:33<SeP>2024-06-06 02:56:42<SeP>2024-06-07 13:44:51<SeP>2024-06-09 00:33:00<SeP>2024-06-10 11:21:09<SeP>2024-06-11 22:09:18<SeP>2024-06-13 08:57:27<SeP>2024-06-14 19:45:36<SeP>2024-06-16 06:33:45<SeP>2024-06-17 17:21:54<SeP>2024-06-19 04:10:03<SeP>2024-06-20 14:58:12<SeP>2024-06-22 01:46:21<SeP>2024-06-23 12:34:30<SeP>2024-06-24 23:22:39<SeP>2024-06-26 10:10:48<SeP>2024-06-27 20:58:57<SeP>2024-06-29 07:47:06<SeP>2024-06-30 18:35:15<SeP>2024-07-02 05:23:24<SeP>2024-07-03 16:11:33<SeP>2024-07-05 02:59:42<SeP>2024-07-06 13:47:51<SeP>2024-07-08 00:36:00<SeP>2024-07-09 11:24:09<SeP>2024-07-10 22:12:18<SeP>2024-07-12 09:00:27<SeP>2024-07-13 19:48:36<SeP>2024-07-15 06:36:45<SeP>2024-07-16 17:24:54<SeP>2024-07-18 04:13:03<SeP>2024-07-19 15:01:12<SeP>2024-07-21 01:49:21<SeP>2024-07-22 12:37:30<SeP>2024-07-23 23:25:39<SeP>2024-07-25 10:13:48<SeP>2024-07-26 21:01:57<SeP>2024-07-28 07:50:06<SeP>2024-07-29 18:38:15<SeP>2024-07-31 05:26:24<SeP>2024-08-01 16:14:33<SeP>2024-08-03 03:02:42<SeP>2024-08-04 13:50:51<SeP>2024-08-06 00:39:00<SeP>2024-08-07 11:27:09<SeP>2024-08-08 22:15:18<SeP>2024-08-10 09:03:27<SeP>2024-08-11 19:51:36<SeP>2024-08-13 06:39:45<SeP>2024-08-14 17:27:54<SeP>2024-08-16 04:16:03<SeP>2024-08-17 15:04:12<SeP>2024-08-19 01:52:21<SeP>2024-08-20 12:40:30<SeP>2024-08-21 23:28:39<SeP>2024-08-23 10:16:48<SeP>2024-08-24 21:04:57<SeP>2024-08-26 07:53:06<SeP>2024-08-27 18:41:15<SeP>2024-08-29 05:29:24<SeP>2024-08-30 16:17:33<SeP>2024-09-01 03:05:42<SeP>2024-09-02 13:53:51<SeP>2024-09-04 00:42:00<SeP>2024-09-05 11:30:09<SeP>2024-09-06 22:18:18<SeP>2024-09-08 09:06:27<SeP>2024-09-09 19:54:36<SeP>2024-09-11 06:42:45<SeP>2024-09-12 17:30:54<SeP>2024-09-14 04:19:03<SeP>2024-09-15 15:07:12<SeP>2024-09-17 01:55:21<SeP>2024-09-18 12:43:30<SeP>2024-09-19 23:31:39<SeP>2024-09-21 10:19:48<SeP>2024-09-22 21:07:57<SeP>2024-09-24 07:56:06<SeP>2024-09-25 18:44:15<SeP>2024-09-27 05:32:24<SeP>2024-09-28 16:20:33<SeP>2024-09-30 03:08:42<SeP>2024-10-01 13:56:51<SeP>2024-10-03 00:45:00<SeP>2024-10-04 11:33:09<SeP>2024-10-05 22:21:18<SeP>2024-10-07 09:09:27<SeP>2024-10-08 19:57:36<SeP>2024-10-10 06:45:45<SeP>2024-10-11 17:33:54<SeP>2024-10-13 04:22:03<SeP>2024-10-14 15:10:12<SeP>2024-10-16 01:58:21<SeP>2024-10-17 12:46:30<SeP>2024-10-18 23:34:39<SeP>2024-10-20 10:22:48<SeP>2024-10-21 21:10:57<SeP>2024-10-23 07:59:06<SeP>2024-10-24 18:47:15<SeP>2024-10-26 05:35:24<SeP>2024-10-27 16:23:33<SeP>2024-10-29 03:11:42<SeP>2024-10-30 13:59:51<SeP>2024-11-01 00:48:00<SeP>2024-11-02 11:36:09<SeP>2024-11-03 21:24:18<SeP>2024-11-05 08:12:27<SeP>2024-11-06 19:00:36<SeP>2024-11-08 05:48:45<SeP>2024-11-09 16:36:54<SeP>2024-11-11 03:25:03<SeP>2024-11-12 14:13:12<SeP>2024-11-14 01:01:21<SeP>2024-11-15 11:49:30<SeP>2024-11-16 22:37:39<SeP>2024-11-18 09:25:48<SeP>2024-11-19 20:13:57<SeP>2024-11-21 07:02:06<SeP>2024-11-22 17:50:15<SeP>2024-11-24 04:38:24<SeP>2024-11-25 15:26:33<SeP>2024-11-27 02:14:42<SeP>2024-11-28 13:02:51<SeP>2024-11-29 23:51:00<SeP>2024-12-01 10:39:09<SeP>2024-12-02 21:27:18<SeP>2024-12-04 08:15:27<SeP>2024-12-05 19:03:36<SeP>2024-12-07 05:51:45<SeP>2024-12-08 16:39:54<SeP>2024-12-10 03:28:03<SeP>2024-12-11 14:16:12<SeP>2024-12-13 01:04:21<SeP>2024-12-14 11:52:30<SeP>2024-12-15 22:40:39<SeP>2024-12-17 09:28:48<SeP>2024-12-18 20:16:57<SeP>2024-12-20 07:05:06<SeP>2024-12-21 17:53:15<SeP>2024-12-23 04:41:24<SeP>2024-12-24 15:29:33<SeP>2024-12-26 02:17:42<SeP>2024-12-27 13:05:51<SeP>2024-12-28 23:54:00<SeP>2024-12-30 10:42:09<SeP>2024-12-31 21:30:18<SeP>2025-01-02 08:18:27<SeP>2025-01-03 19:06:36<SeP>2025-01-05 05:54:45<SeP>2025-01-06 16:42:54<SeP>2025-01-08 03:31:03<SeP>2025-01-09 14:19:12<SeP>2025-01-11 01:07:21<SeP>2025-01-12 11:55:30<SeP>2025-01-13 22:43:39<SeP>2025-01-15 09:31:48<SeP>2025-01-16 20:19:57<SeP>2025-01-18 07:08:06<SeP>2025-01-19 17:56:15<SeP>2025-01-21 04:44:24<SeP>2025-01-22 15:32:33<SeP>2025-01-24 02:20:42<SeP>2025-01-25 13:08:51<SeP>2025-01-26 23:57:00<SeP>2025-01-28 10:45:09<SeP>2025-01-29 21:33:18<SeP>2025-01-31 08:21:27<SeP>2025-02-01 19:09:36<SeP>2025-02-03 05:57:45<SeP>2025-02-04 16:45:54<SeP>2025-02-06 03:34:03<SeP>2025-02-07 14:22:12<SeP>2025-02-09 01:10:21<SeP>2025-02-10 11:58:30<SeP>2025-02-11 22:46:39<SeP>2025-02-13 09:34:48<SeP>2025-02-14 20:22:57<SeP>2025-02-16 07:11:06<SeP>2025-02-17 17:59:15<SeP>2025-02-19 04:47:24<SeP>2025-02-20 15:35:33<SeP>2025-02-22 02:23:42<SeP>2025-02-23 13:11:51";
  const item1Label       = "Escaneos";
  const item1Data        = "761<SeP>1472<SeP>1376<SeP>1447<SeP>1254<SeP>1683<SeP>961<SeP>954<SeP>1132<SeP>3377<SeP>1819<SeP>2475<SeP>2251<SeP>2065<SeP>755<SeP>882<SeP>1408<SeP>2327<SeP>1604<SeP>1791<SeP>1335<SeP>929<SeP>884<SeP>1408<SeP>807<SeP>969<SeP>817<SeP>1515<SeP>2945<SeP>920<SeP>832<SeP>1439<SeP>1249<SeP>804<SeP>2828<SeP>1645<SeP>2647<SeP>1842<SeP>1803<SeP>1401<SeP>1258<SeP>1750<SeP>1736<SeP>2205<SeP>1581<SeP>1628<SeP>1608<SeP>1655<SeP>1708<SeP>1634<SeP>2091<SeP>1505<SeP>1666<SeP>2055<SeP>2860<SeP>1279<SeP>1891<SeP>1833<SeP>2378<SeP>1509<SeP>2150<SeP>3110<SeP>1400<SeP>1495<SeP>1462<SeP>1486<SeP>1845<SeP>1562<SeP>1251<SeP>1434<SeP>1201<SeP>2327<SeP>1195<SeP>1118<SeP>1206<SeP>2293<SeP>7296<SeP>1139<SeP>1363<SeP>1255<SeP>1710<SeP>1961<SeP>1079<SeP>6533<SeP>1706<SeP>1576<SeP>992<SeP>1132<SeP>3314<SeP>1199<SeP>947<SeP>967<SeP>1105<SeP>1011<SeP>3008<SeP>1196<SeP>1388<SeP>2856<SeP>6585<SeP>1241<SeP>973<SeP>924<SeP>918<SeP>1004<SeP>975<SeP>971<SeP>1024<SeP>3807<SeP>2195<SeP>1408<SeP>1610<SeP>638<SeP>947<SeP>1580<SeP>1089<SeP>1052<SeP>974<SeP>2219<SeP>1255<SeP>1083<SeP>994<SeP>1079<SeP>825<SeP>834<SeP>867<SeP>823<SeP>900<SeP>1032<SeP>842<SeP>844<SeP>814<SeP>850<SeP>857<SeP>707<SeP>801<SeP>911<SeP>841<SeP>894<SeP>791<SeP>856<SeP>760<SeP>802<SeP>1050<SeP>767<SeP>879<SeP>897<SeP>930<SeP>953<SeP>987<SeP>952<SeP>513<SeP>888<SeP>891<SeP>1054<SeP>981<SeP>1043<SeP>1137<SeP>1152<SeP>1016<SeP>939<SeP>936<SeP>990<SeP>722<SeP>980<SeP>1044<SeP>899<SeP>873<SeP>894<SeP>1016<SeP>994<SeP>1035<SeP>990<SeP>1121<SeP>969<SeP>915<SeP>1028<SeP>2136<SeP>1300<SeP>1022<SeP>1000<SeP>1133<SeP>954<SeP>1029<SeP>830<SeP>625<SeP>928<SeP>1179<SeP>877<SeP>936<SeP>1023<SeP>1350<SeP>1024<SeP>1148<SeP>1282<SeP>1202<SeP>1290<SeP>1294<SeP>1269<SeP>1536<SeP>1880<SeP>1457<SeP>1252<SeP>685<SeP>963<SeP>1026<SeP>1166<SeP>403<SeP>901<SeP>794<SeP>1001<SeP>1907<SeP>5636<SeP>2265<SeP>1949<SeP>1257<SeP>881<SeP>967<SeP>918<SeP>976<SeP>897<SeP>1143<SeP>1005<SeP>1050<SeP>1654<SeP>1832<SeP>972<SeP>1271<SeP>1240<SeP>1162<SeP>1154<SeP>1010<SeP>1018<SeP>983<SeP>1134<SeP>979<SeP>1185<SeP>952<SeP>1190<SeP>787<SeP>1416<SeP>1025<SeP>1145<SeP>1100<SeP>1339<SeP>1239<SeP>1114<SeP>1615<SeP>1107<SeP>1154<SeP>1113<SeP>1660<SeP>1596<SeP>1300<SeP>1972<SeP>1617<SeP>1525<SeP>1895<SeP>1448<SeP>1173<SeP>1135<SeP>1372<SeP>1100<SeP>1526<SeP>1250<SeP>1185<SeP>1729<SeP>1656<SeP>1440<SeP>1363<SeP>1450<SeP>1216<SeP>1124<SeP>1083<SeP>1290<SeP>1160<SeP>1254<SeP>1236<SeP>1185<SeP>1445<SeP>1888<SeP>1324<SeP>1173<SeP>1660<SeP>1414<SeP>1124<SeP>1092<SeP>986<SeP>776<SeP>897<SeP>1023<SeP>996<SeP>1815<SeP>1044<SeP>1130<SeP>1161<SeP>785<SeP>1005<SeP>990<SeP>1303<SeP>857<SeP>881<SeP>1122<SeP>1295<SeP>1547<SeP>1417<SeP>1050<SeP>1007<SeP>1143<SeP>1744<SeP>1082<SeP>1112<SeP>995<SeP>1318<SeP>1366<SeP>834<SeP>1057<SeP>1190<SeP>1021<SeP>890<SeP>832<SeP>1359<SeP>1316<SeP>1481<SeP>1631<SeP>1415<SeP>935<SeP>1099<SeP>1075<SeP>1146<SeP>1146<SeP>1143<SeP>1003<SeP>985<SeP>1269<SeP>1444<SeP>1372<SeP>1556<SeP>1427<SeP>1213<SeP>1590<SeP>1475<SeP>1277<SeP>1441<SeP>1523<SeP>1302<SeP>1410<SeP>1530<SeP>1567<SeP>1480<SeP>1355<SeP>1394<SeP>1371<SeP>1174<SeP>1263<SeP>1435<SeP>1606<SeP>1491<SeP>1262<SeP>1122<SeP>1295<SeP>1356<SeP>1316<SeP>1120<SeP>1672<SeP>1877<SeP>1400<SeP>1023<SeP>887<SeP>1519<SeP>1716<SeP>1231<SeP>1406<SeP>1108<SeP>1186<SeP>1347<SeP>1490<SeP>1299<SeP>1480<SeP>1671<SeP>1319<SeP>1550<SeP>1730<SeP>1253<SeP>1540<SeP>1345<SeP>1792<SeP>1567<SeP>1009<SeP>1057<SeP>2050<SeP>1864<SeP>1682<SeP>1752<SeP>1673<SeP>1510<SeP>1619<SeP>1612<SeP>1547<SeP>1411<SeP>1794";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "152<SeP>615<SeP>976<SeP>719<SeP>534<SeP>229<SeP>6968<SeP>511<SeP>9176<SeP>970<SeP>382<SeP>1142<SeP>1222<SeP>293<SeP>162<SeP>459<SeP>110<SeP>764<SeP>284<SeP>4306<SeP>7532<SeP>6986<SeP>7447<SeP>7165<SeP>266<SeP>309<SeP>350<SeP>215<SeP>721<SeP>5555<SeP>73<SeP>381<SeP>324<SeP>374<SeP>3075<SeP>9463<SeP>8403<SeP>10374<SeP>9380<SeP>5932<SeP>5912<SeP>8101<SeP>7859<SeP>10035<SeP>7653<SeP>7172<SeP>9201<SeP>8272<SeP>7677<SeP>8334<SeP>6004<SeP>9310<SeP>9170<SeP>6238<SeP>8311<SeP>7387<SeP>10364<SeP>18151<SeP>15813<SeP>9851<SeP>10586<SeP>7342<SeP>7589<SeP>9002<SeP>8588<SeP>8374<SeP>6904<SeP>6275<SeP>7082<SeP>6800<SeP>5200<SeP>3436<SeP>6799<SeP>5846<SeP>6458<SeP>6595<SeP>6663<SeP>4349<SeP>5708<SeP>7362<SeP>4684<SeP>6418<SeP>5555<SeP>4485<SeP>7628<SeP>5263<SeP>5334<SeP>5681<SeP>8942<SeP>20932<SeP>25193<SeP>17941<SeP>9927<SeP>5534<SeP>7658<SeP>11628<SeP>7671<SeP>3400<SeP>6658<SeP>3590<SeP>4747<SeP>6805<SeP>6033<SeP>7855<SeP>6568<SeP>5493<SeP>4322<SeP>5924<SeP>9482<SeP>8038<SeP>7956<SeP>4211<SeP>6575<SeP>9575<SeP>8595<SeP>4611<SeP>3275<SeP>6261<SeP>9351<SeP>5018<SeP>7159<SeP>9489<SeP>4216<SeP>2788<SeP>1261<SeP>1715<SeP>1782<SeP>2265<SeP>1083<SeP>1402<SeP>487<SeP>1373<SeP>1541<SeP>1122<SeP>878<SeP>1114<SeP>1062<SeP>749<SeP>1432<SeP>1404<SeP>1201<SeP>845<SeP>2240<SeP>2030<SeP>6427<SeP>10235<SeP>8015<SeP>8173<SeP>6938<SeP>12800<SeP>2435<SeP>11023<SeP>9938<SeP>9514<SeP>13304<SeP>8221<SeP>11676<SeP>10774<SeP>8726<SeP>13369<SeP>5115<SeP>4578<SeP>7307<SeP>23563<SeP>7543<SeP>7933<SeP>8317<SeP>13428<SeP>11415<SeP>8789<SeP>4495<SeP>7664<SeP>8171<SeP>24837<SeP>7508<SeP>8711<SeP>10662<SeP>5651<SeP>5587<SeP>6372<SeP>16111<SeP>4259<SeP>12774<SeP>8087<SeP>6803<SeP>8542<SeP>7585<SeP>3002<SeP>6033<SeP>5683<SeP>7086<SeP>6400<SeP>6244<SeP>7155<SeP>18658<SeP>6998<SeP>8560<SeP>5064<SeP>7601<SeP>9080<SeP>8954<SeP>5831<SeP>2650<SeP>7106<SeP>3373<SeP>5209<SeP>3095<SeP>1550<SeP>581<SeP>636<SeP>196<SeP>541<SeP>637<SeP>771<SeP>419<SeP>917<SeP>1548<SeP>1340<SeP>2848<SeP>22541<SeP>695<SeP>5336<SeP>2877<SeP>3394<SeP>6608<SeP>2645<SeP>4236<SeP>3528<SeP>2840<SeP>3074<SeP>3099<SeP>4734<SeP>1704<SeP>2919<SeP>2617<SeP>2190<SeP>1871<SeP>1937<SeP>1200<SeP>1911<SeP>787<SeP>925<SeP>1780<SeP>18905<SeP>9315<SeP>2338<SeP>3723<SeP>3640<SeP>2235<SeP>3964<SeP>1819<SeP>3179<SeP>2997<SeP>2940<SeP>2877<SeP>3088<SeP>2822<SeP>3168<SeP>6258<SeP>5275<SeP>3704<SeP>3756<SeP>2576<SeP>2978<SeP>4556<SeP>4166<SeP>10270<SeP>5163<SeP>2475<SeP>2801<SeP>2009<SeP>4736<SeP>3666<SeP>3745<SeP>3168<SeP>2484<SeP>5879<SeP>3269<SeP>6014<SeP>3576<SeP>5512<SeP>4437<SeP>7186<SeP>3601<SeP>17270<SeP>10791<SeP>12519<SeP>1727<SeP>2288<SeP>4889<SeP>3388<SeP>3888<SeP>3931<SeP>5019<SeP>3935<SeP>4531<SeP>4251<SeP>3529<SeP>3315<SeP>1257<SeP>1979<SeP>2765<SeP>2973<SeP>2232<SeP>3921<SeP>3822<SeP>4319<SeP>3351<SeP>3566<SeP>3782<SeP>3500<SeP>3121<SeP>6821<SeP>7648<SeP>5865<SeP>4497<SeP>4716<SeP>4573<SeP>3693<SeP>4013<SeP>4037<SeP>6672<SeP>5060<SeP>4582<SeP>2754<SeP>1129<SeP>1145<SeP>1742<SeP>1301<SeP>1232<SeP>1693<SeP>1550<SeP>1346<SeP>3255<SeP>4111<SeP>6369<SeP>30759<SeP>8250<SeP>5306<SeP>15956<SeP>12605<SeP>4998<SeP>6344<SeP>4678<SeP>22416<SeP>6367<SeP>5407<SeP>4431<SeP>4660<SeP>6316<SeP>22107<SeP>13445<SeP>3918<SeP>3542<SeP>3959<SeP>5595<SeP>5140<SeP>2775<SeP>3451<SeP>4159<SeP>5169<SeP>5042<SeP>18275<SeP>4427<SeP>5929<SeP>6224<SeP>2689<SeP>2750<SeP>3550<SeP>4341<SeP>3934<SeP>4233<SeP>2755<SeP>3734<SeP>2155<SeP>4522<SeP>4315<SeP>8170<SeP>10625<SeP>8012<SeP>8600<SeP>9286<SeP>6873<SeP>5774<SeP>5117<SeP>4141<SeP>24922<SeP>4374<SeP>3027<SeP>4520<SeP>3273<SeP>11390<SeP>5715<SeP>3489<SeP>4883<SeP>4121<SeP>2959<SeP>9296<SeP>9175<SeP>4944";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:48:09<SeP>2023-07-28 21:36:18<SeP>2023-07-30 08:24:27<SeP>2023-07-31 19:12:36<SeP>2023-08-02 06:00:45<SeP>2023-08-03 16:48:54<SeP>2023-08-05 03:37:03<SeP>2023-08-06 14:25:12<SeP>2023-08-08 01:13:21<SeP>2023-08-09 12:01:30<SeP>2023-08-10 22:49:39<SeP>2023-08-12 09:37:48<SeP>2023-08-13 20:25:57<SeP>2023-08-15 07:14:06<SeP>2023-08-16 18:02:15<SeP>2023-08-18 04:50:24<SeP>2023-08-19 15:38:33<SeP>2023-08-21 02:26:42<SeP>2023-08-22 13:14:51<SeP>2023-08-24 00:03:00<SeP>2023-08-25 10:51:09<SeP>2023-08-26 21:39:18<SeP>2023-08-28 08:27:27<SeP>2023-08-29 19:15:36<SeP>2023-08-31 06:03:45<SeP>2023-09-01 16:51:54<SeP>2023-09-03 03:40:03<SeP>2023-09-04 14:28:12<SeP>2023-09-06 01:16:21<SeP>2023-09-07 12:04:30<SeP>2023-09-08 22:52:39<SeP>2023-09-10 09:40:48<SeP>2023-09-11 20:28:57<SeP>2023-09-13 07:17:06<SeP>2023-09-14 18:05:15<SeP>2023-09-16 04:53:24<SeP>2023-09-17 15:41:33<SeP>2023-09-19 02:29:42<SeP>2023-09-20 13:17:51<SeP>2023-09-22 00:06:00<SeP>2023-09-23 10:54:09<SeP>2023-09-24 21:42:18<SeP>2023-09-26 08:30:27<SeP>2023-09-27 19:18:36<SeP>2023-09-29 06:06:45<SeP>2023-09-30 16:54:54<SeP>2023-10-02 03:43:03<SeP>2023-10-03 14:31:12<SeP>2023-10-05 01:19:21<SeP>2023-10-06 12:07:30<SeP>2023-10-07 22:55:39<SeP>2023-10-09 09:43:48<SeP>2023-10-10 20:31:57<SeP>2023-10-12 07:20:06<SeP>2023-10-13 18:08:15<SeP>2023-10-15 04:56:24<SeP>2023-10-16 15:44:33<SeP>2023-10-18 02:32:42<SeP>2023-10-19 13:20:51<SeP>2023-10-21 00:09:00<SeP>2023-10-22 10:57:09<SeP>2023-10-23 21:45:18<SeP>2023-10-25 08:33:27<SeP>2023-10-26 19:21:36<SeP>2023-10-28 06:09:45<SeP>2023-10-29 16:57:54<SeP>2023-10-31 03:46:03<SeP>2023-11-01 14:34:12<SeP>2023-11-03 01:22:21<SeP>2023-11-04 12:10:30<SeP>2023-11-05 21:58:39<SeP>2023-11-07 08:46:48<SeP>2023-11-08 19:34:57<SeP>2023-11-10 06:23:06<SeP>2023-11-11 17:11:15<SeP>2023-11-13 03:59:24<SeP>2023-11-14 14:47:33<SeP>2023-11-16 01:35:42<SeP>2023-11-17 12:23:51<SeP>2023-11-18 23:12:00<SeP>2023-11-20 10:00:09<SeP>2023-11-21 20:48:18<SeP>2023-11-23 07:36:27<SeP>2023-11-24 18:24:36<SeP>2023-11-26 05:12:45<SeP>2023-11-27 16:00:54<SeP>2023-11-29 02:49:03<SeP>2023-11-30 13:37:12<SeP>2023-12-02 00:25:21<SeP>2023-12-03 11:13:30<SeP>2023-12-04 22:01:39<SeP>2023-12-06 08:49:48<SeP>2023-12-07 19:37:57<SeP>2023-12-09 06:26:06<SeP>2023-12-10 17:14:15<SeP>2023-12-12 04:02:24<SeP>2023-12-13 14:50:33<SeP>2023-12-15 01:38:42<SeP>2023-12-16 12:26:51<SeP>2023-12-17 23:15:00<SeP>2023-12-19 10:03:09<SeP>2023-12-20 20:51:18<SeP>2023-12-22 07:39:27<SeP>2023-12-23 18:27:36<SeP>2023-12-25 05:15:45<SeP>2023-12-26 16:03:54<SeP>2023-12-28 02:52:03<SeP>2023-12-29 13:40:12<SeP>2023-12-31 00:28:21<SeP>2024-01-01 11:16:30<SeP>2024-01-02 22:04:39<SeP>2024-01-04 08:52:48<SeP>2024-01-05 19:40:57<SeP>2024-01-07 06:29:06<SeP>2024-01-08 17:17:15<SeP>2024-01-10 04:05:24<SeP>2024-01-11 14:53:33<SeP>2024-01-13 01:41:42<SeP>2024-01-14 12:29:51<SeP>2024-01-15 23:18:00<SeP>2024-01-17 10:06:09<SeP>2024-01-18 20:54:18<SeP>2024-01-20 07:42:27<SeP>2024-01-21 18:30:36<SeP>2024-01-23 05:18:45<SeP>2024-01-24 16:06:54<SeP>2024-01-26 02:55:03<SeP>2024-01-27 13:43:12<SeP>2024-01-29 00:31:21<SeP>2024-01-30 11:19:30<SeP>2024-01-31 22:07:39<SeP>2024-02-02 08:55:48<SeP>2024-02-03 19:43:57<SeP>2024-02-05 06:32:06<SeP>2024-02-06 17:20:15<SeP>2024-02-08 04:08:24<SeP>2024-02-09 14:56:33<SeP>2024-02-11 01:44:42<SeP>2024-02-12 12:32:51<SeP>2024-02-13 23:21:00<SeP>2024-02-15 10:09:09<SeP>2024-02-16 20:57:18<SeP>2024-02-18 07:45:27<SeP>2024-02-19 18:33:36<SeP>2024-02-21 05:21:45<SeP>2024-02-22 16:09:54<SeP>2024-02-24 02:58:03<SeP>2024-02-25 13:46:12<SeP>2024-02-27 00:34:21<SeP>2024-02-28 11:22:30<SeP>2024-02-29 22:10:39<SeP>2024-03-02 08:58:48<SeP>2024-03-03 19:46:57<SeP>2024-03-05 06:35:06<SeP>2024-03-06 17:23:15<SeP>2024-03-08 04:11:24<SeP>2024-03-09 14:59:33<SeP>2024-03-11 02:47:42<SeP>2024-03-12 13:35:51<SeP>2024-03-14 00:24:00<SeP>2024-03-15 11:12:09<SeP>2024-03-16 22:00:18<SeP>2024-03-18 08:48:27<SeP>2024-03-19 19:36:36<SeP>2024-03-21 06:24:45<SeP>2024-03-22 17:12:54<SeP>2024-03-24 04:01:03<SeP>2024-03-25 14:49:12<SeP>2024-03-27 01:37:21<SeP>2024-03-28 12:25:30<SeP>2024-03-29 23:13:39<SeP>2024-03-31 10:01:48<SeP>2024-04-01 20:49:57<SeP>2024-04-03 07:38:06<SeP>2024-04-04 18:26:15<SeP>2024-04-06 05:14:24<SeP>2024-04-07 16:02:33<SeP>2024-04-09 02:50:42<SeP>2024-04-10 13:38:51<SeP>2024-04-12 00:27:00<SeP>2024-04-13 11:15:09<SeP>2024-04-14 22:03:18<SeP>2024-04-16 08:51:27<SeP>2024-04-17 19:39:36<SeP>2024-04-19 06:27:45<SeP>2024-04-20 17:15:54<SeP>2024-04-22 04:04:03<SeP>2024-04-23 14:52:12<SeP>2024-04-25 01:40:21<SeP>2024-04-26 12:28:30<SeP>2024-04-27 23:16:39<SeP>2024-04-29 10:04:48<SeP>2024-04-30 20:52:57<SeP>2024-05-02 07:41:06<SeP>2024-05-03 18:29:15<SeP>2024-05-05 05:17:24<SeP>2024-05-06 16:05:33<SeP>2024-05-08 02:53:42<SeP>2024-05-09 13:41:51<SeP>2024-05-11 00:30:00<SeP>2024-05-12 11:18:09<SeP>2024-05-13 22:06:18<SeP>2024-05-15 08:54:27<SeP>2024-05-16 19:42:36<SeP>2024-05-18 06:30:45<SeP>2024-05-19 17:18:54<SeP>2024-05-21 04:07:03<SeP>2024-05-22 14:55:12<SeP>2024-05-24 01:43:21<SeP>2024-05-25 12:31:30<SeP>2024-05-26 23:19:39<SeP>2024-05-28 10:07:48<SeP>2024-05-29 20:55:57<SeP>2024-05-31 07:44:06<SeP>2024-06-01 18:32:15<SeP>2024-06-03 05:20:24<SeP>2024-06-04 16:08:33<SeP>2024-06-06 02:56:42<SeP>2024-06-07 13:44:51<SeP>2024-06-09 00:33:00<SeP>2024-06-10 11:21:09<SeP>2024-06-11 22:09:18<SeP>2024-06-13 08:57:27<SeP>2024-06-14 19:45:36<SeP>2024-06-16 06:33:45<SeP>2024-06-17 17:21:54<SeP>2024-06-19 04:10:03<SeP>2024-06-20 14:58:12<SeP>2024-06-22 01:46:21<SeP>2024-06-23 12:34:30<SeP>2024-06-24 23:22:39<SeP>2024-06-26 10:10:48<SeP>2024-06-27 20:58:57<SeP>2024-06-29 07:47:06<SeP>2024-06-30 18:35:15<SeP>2024-07-02 05:23:24<SeP>2024-07-03 16:11:33<SeP>2024-07-05 02:59:42<SeP>2024-07-06 13:47:51<SeP>2024-07-08 00:36:00<SeP>2024-07-09 11:24:09<SeP>2024-07-10 22:12:18<SeP>2024-07-12 09:00:27<SeP>2024-07-13 19:48:36<SeP>2024-07-15 06:36:45<SeP>2024-07-16 17:24:54<SeP>2024-07-18 04:13:03<SeP>2024-07-19 15:01:12<SeP>2024-07-21 01:49:21<SeP>2024-07-22 12:37:30<SeP>2024-07-23 23:25:39<SeP>2024-07-25 10:13:48<SeP>2024-07-26 21:01:57<SeP>2024-07-28 07:50:06<SeP>2024-07-29 18:38:15<SeP>2024-07-31 05:26:24<SeP>2024-08-01 16:14:33<SeP>2024-08-03 03:02:42<SeP>2024-08-04 13:50:51<SeP>2024-08-06 00:39:00<SeP>2024-08-07 11:27:09<SeP>2024-08-08 22:15:18<SeP>2024-08-10 09:03:27<SeP>2024-08-11 19:51:36<SeP>2024-08-13 06:39:45<SeP>2024-08-14 17:27:54<SeP>2024-08-16 04:16:03<SeP>2024-08-17 15:04:12<SeP>2024-08-19 01:52:21<SeP>2024-08-20 12:40:30<SeP>2024-08-21 23:28:39<SeP>2024-08-23 10:16:48<SeP>2024-08-24 21:04:57<SeP>2024-08-26 07:53:06<SeP>2024-08-27 18:41:15<SeP>2024-08-29 05:29:24<SeP>2024-08-30 16:17:33<SeP>2024-09-01 03:05:42<SeP>2024-09-02 13:53:51<SeP>2024-09-04 00:42:00<SeP>2024-09-05 11:30:09<SeP>2024-09-06 22:18:18<SeP>2024-09-08 09:06:27<SeP>2024-09-09 19:54:36<SeP>2024-09-11 06:42:45<SeP>2024-09-12 17:30:54<SeP>2024-09-14 04:19:03<SeP>2024-09-15 15:07:12<SeP>2024-09-17 01:55:21<SeP>2024-09-18 12:43:30<SeP>2024-09-19 23:31:39<SeP>2024-09-21 10:19:48<SeP>2024-09-22 21:07:57<SeP>2024-09-24 07:56:06<SeP>2024-09-25 18:44:15<SeP>2024-09-27 05:32:24<SeP>2024-09-28 16:20:33<SeP>2024-09-30 03:08:42<SeP>2024-10-01 13:56:51<SeP>2024-10-03 00:45:00<SeP>2024-10-04 11:33:09<SeP>2024-10-05 22:21:18<SeP>2024-10-07 09:09:27<SeP>2024-10-08 19:57:36<SeP>2024-10-10 06:45:45<SeP>2024-10-11 17:33:54<SeP>2024-10-13 04:22:03<SeP>2024-10-14 15:10:12<SeP>2024-10-16 01:58:21<SeP>2024-10-17 12:46:30<SeP>2024-10-18 23:34:39<SeP>2024-10-20 10:22:48<SeP>2024-10-21 21:10:57<SeP>2024-10-23 07:59:06<SeP>2024-10-24 18:47:15<SeP>2024-10-26 05:35:24<SeP>2024-10-27 16:23:33<SeP>2024-10-29 03:11:42<SeP>2024-10-30 13:59:51<SeP>2024-11-01 00:48:00<SeP>2024-11-02 11:36:09<SeP>2024-11-03 21:24:18<SeP>2024-11-05 08:12:27<SeP>2024-11-06 19:00:36<SeP>2024-11-08 05:48:45<SeP>2024-11-09 16:36:54<SeP>2024-11-11 03:25:03<SeP>2024-11-12 14:13:12<SeP>2024-11-14 01:01:21<SeP>2024-11-15 11:49:30<SeP>2024-11-16 22:37:39<SeP>2024-11-18 09:25:48<SeP>2024-11-19 20:13:57<SeP>2024-11-21 07:02:06<SeP>2024-11-22 17:50:15<SeP>2024-11-24 04:38:24<SeP>2024-11-25 15:26:33<SeP>2024-11-27 02:14:42<SeP>2024-11-28 13:02:51<SeP>2024-11-29 23:51:00<SeP>2024-12-01 10:39:09<SeP>2024-12-02 21:27:18<SeP>2024-12-04 08:15:27<SeP>2024-12-05 19:03:36<SeP>2024-12-07 05:51:45<SeP>2024-12-08 16:39:54<SeP>2024-12-10 03:28:03<SeP>2024-12-11 14:16:12<SeP>2024-12-13 01:04:21<SeP>2024-12-14 11:52:30<SeP>2024-12-15 22:40:39<SeP>2024-12-17 09:28:48<SeP>2024-12-18 20:16:57<SeP>2024-12-20 07:05:06<SeP>2024-12-21 17:53:15<SeP>2024-12-23 04:41:24<SeP>2024-12-24 15:29:33<SeP>2024-12-26 02:17:42<SeP>2024-12-27 13:05:51<SeP>2024-12-28 23:54:00<SeP>2024-12-30 10:42:09<SeP>2024-12-31 21:30:18<SeP>2025-01-02 08:18:27<SeP>2025-01-03 19:06:36<SeP>2025-01-05 05:54:45<SeP>2025-01-06 16:42:54<SeP>2025-01-08 03:31:03<SeP>2025-01-09 14:19:12<SeP>2025-01-11 01:07:21<SeP>2025-01-12 11:55:30<SeP>2025-01-13 22:43:39<SeP>2025-01-15 09:31:48<SeP>2025-01-16 20:19:57<SeP>2025-01-18 07:08:06<SeP>2025-01-19 17:56:15<SeP>2025-01-21 04:44:24<SeP>2025-01-22 15:32:33<SeP>2025-01-24 02:20:42<SeP>2025-01-25 13:08:51<SeP>2025-01-26 23:57:00<SeP>2025-01-28 10:45:09<SeP>2025-01-29 21:33:18<SeP>2025-01-31 08:21:27<SeP>2025-02-01 19:09:36<SeP>2025-02-03 05:57:45<SeP>2025-02-04 16:45:54<SeP>2025-02-06 03:34:03<SeP>2025-02-07 14:22:12<SeP>2025-02-09 01:10:21<SeP>2025-02-10 11:58:30<SeP>2025-02-11 22:46:39<SeP>2025-02-13 09:34:48<SeP>2025-02-14 20:22:57<SeP>2025-02-16 07:11:06<SeP>2025-02-17 17:59:15<SeP>2025-02-19 04:47:24<SeP>2025-02-20 15:35:33<SeP>2025-02-22 02:23:42<SeP>2025-02-23 13:11:51";
  const itemLabel       = "Escaneos";
  const itemData        = "761<SeP>1472<SeP>1376<SeP>1447<SeP>1254<SeP>1683<SeP>961<SeP>954<SeP>1132<SeP>3377<SeP>1819<SeP>2475<SeP>2251<SeP>2065<SeP>755<SeP>882<SeP>1408<SeP>2327<SeP>1604<SeP>1791<SeP>1335<SeP>929<SeP>884<SeP>1408<SeP>807<SeP>969<SeP>817<SeP>1515<SeP>2945<SeP>920<SeP>832<SeP>1439<SeP>1249<SeP>804<SeP>2828<SeP>1645<SeP>2647<SeP>1842<SeP>1803<SeP>1401<SeP>1258<SeP>1750<SeP>1736<SeP>2205<SeP>1581<SeP>1628<SeP>1608<SeP>1655<SeP>1708<SeP>1634<SeP>2091<SeP>1505<SeP>1666<SeP>2055<SeP>2860<SeP>1279<SeP>1891<SeP>1833<SeP>2378<SeP>1509<SeP>2150<SeP>3110<SeP>1400<SeP>1495<SeP>1462<SeP>1486<SeP>1845<SeP>1562<SeP>1251<SeP>1434<SeP>1201<SeP>2327<SeP>1195<SeP>1118<SeP>1206<SeP>2293<SeP>7296<SeP>1139<SeP>1363<SeP>1255<SeP>1710<SeP>1961<SeP>1079<SeP>6533<SeP>1706<SeP>1576<SeP>992<SeP>1132<SeP>3314<SeP>1199<SeP>947<SeP>967<SeP>1105<SeP>1011<SeP>3008<SeP>1196<SeP>1388<SeP>2856<SeP>6585<SeP>1241<SeP>973<SeP>924<SeP>918<SeP>1004<SeP>975<SeP>971<SeP>1024<SeP>3807<SeP>2195<SeP>1408<SeP>1610<SeP>638<SeP>947<SeP>1580<SeP>1089<SeP>1052<SeP>974<SeP>2219<SeP>1255<SeP>1083<SeP>994<SeP>1079<SeP>825<SeP>834<SeP>867<SeP>823<SeP>900<SeP>1032<SeP>842<SeP>844<SeP>814<SeP>850<SeP>857<SeP>707<SeP>801<SeP>911<SeP>841<SeP>894<SeP>791<SeP>856<SeP>760<SeP>802<SeP>1050<SeP>767<SeP>879<SeP>897<SeP>930<SeP>953<SeP>987<SeP>952<SeP>513<SeP>888<SeP>891<SeP>1054<SeP>981<SeP>1043<SeP>1137<SeP>1152<SeP>1016<SeP>939<SeP>936<SeP>990<SeP>722<SeP>980<SeP>1044<SeP>899<SeP>873<SeP>894<SeP>1016<SeP>994<SeP>1035<SeP>990<SeP>1121<SeP>969<SeP>915<SeP>1028<SeP>2136<SeP>1300<SeP>1022<SeP>1000<SeP>1133<SeP>954<SeP>1029<SeP>830<SeP>625<SeP>928<SeP>1179<SeP>877<SeP>936<SeP>1023<SeP>1350<SeP>1024<SeP>1148<SeP>1282<SeP>1202<SeP>1290<SeP>1294<SeP>1269<SeP>1536<SeP>1880<SeP>1457<SeP>1252<SeP>685<SeP>963<SeP>1026<SeP>1166<SeP>403<SeP>901<SeP>794<SeP>1001<SeP>1907<SeP>5636<SeP>2265<SeP>1949<SeP>1257<SeP>881<SeP>967<SeP>918<SeP>976<SeP>897<SeP>1143<SeP>1005<SeP>1050<SeP>1654<SeP>1832<SeP>972<SeP>1271<SeP>1240<SeP>1162<SeP>1154<SeP>1010<SeP>1018<SeP>983<SeP>1134<SeP>979<SeP>1185<SeP>952<SeP>1190<SeP>787<SeP>1416<SeP>1025<SeP>1145<SeP>1100<SeP>1339<SeP>1239<SeP>1114<SeP>1615<SeP>1107<SeP>1154<SeP>1113<SeP>1660<SeP>1596<SeP>1300<SeP>1972<SeP>1617<SeP>1525<SeP>1895<SeP>1448<SeP>1173<SeP>1135<SeP>1372<SeP>1100<SeP>1526<SeP>1250<SeP>1185<SeP>1729<SeP>1656<SeP>1440<SeP>1363<SeP>1450<SeP>1216<SeP>1124<SeP>1083<SeP>1290<SeP>1160<SeP>1254<SeP>1236<SeP>1185<SeP>1445<SeP>1888<SeP>1324<SeP>1173<SeP>1660<SeP>1414<SeP>1124<SeP>1092<SeP>986<SeP>776<SeP>897<SeP>1023<SeP>996<SeP>1815<SeP>1044<SeP>1130<SeP>1161<SeP>785<SeP>1005<SeP>990<SeP>1303<SeP>857<SeP>881<SeP>1122<SeP>1295<SeP>1547<SeP>1417<SeP>1050<SeP>1007<SeP>1143<SeP>1744<SeP>1082<SeP>1112<SeP>995<SeP>1318<SeP>1366<SeP>834<SeP>1057<SeP>1190<SeP>1021<SeP>890<SeP>832<SeP>1359<SeP>1316<SeP>1481<SeP>1631<SeP>1415<SeP>935<SeP>1099<SeP>1075<SeP>1146<SeP>1146<SeP>1143<SeP>1003<SeP>985<SeP>1269<SeP>1444<SeP>1372<SeP>1556<SeP>1427<SeP>1213<SeP>1590<SeP>1475<SeP>1277<SeP>1441<SeP>1523<SeP>1302<SeP>1410<SeP>1530<SeP>1567<SeP>1480<SeP>1355<SeP>1394<SeP>1371<SeP>1174<SeP>1263<SeP>1435<SeP>1606<SeP>1491<SeP>1262<SeP>1122<SeP>1295<SeP>1356<SeP>1316<SeP>1120<SeP>1672<SeP>1877<SeP>1400<SeP>1023<SeP>887<SeP>1519<SeP>1716<SeP>1231<SeP>1406<SeP>1108<SeP>1186<SeP>1347<SeP>1490<SeP>1299<SeP>1480<SeP>1671<SeP>1319<SeP>1550<SeP>1730<SeP>1253<SeP>1540<SeP>1345<SeP>1792<SeP>1567<SeP>1009<SeP>1057<SeP>2050<SeP>1864<SeP>1682<SeP>1752<SeP>1673<SeP>1510<SeP>1619<SeP>1612<SeP>1547<SeP>1411<SeP>1794";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 10:48:09<SeP>2023-07-28 21:36:18<SeP>2023-07-30 08:24:27<SeP>2023-07-31 19:12:36<SeP>2023-08-02 06:00:45<SeP>2023-08-03 16:48:54<SeP>2023-08-05 03:37:03<SeP>2023-08-06 14:25:12<SeP>2023-08-08 01:13:21<SeP>2023-08-09 12:01:30<SeP>2023-08-10 22:49:39<SeP>2023-08-12 09:37:48<SeP>2023-08-13 20:25:57<SeP>2023-08-15 07:14:06<SeP>2023-08-16 18:02:15<SeP>2023-08-18 04:50:24<SeP>2023-08-19 15:38:33<SeP>2023-08-21 02:26:42<SeP>2023-08-22 13:14:51<SeP>2023-08-24 00:03:00<SeP>2023-08-25 10:51:09<SeP>2023-08-26 21:39:18<SeP>2023-08-28 08:27:27<SeP>2023-08-29 19:15:36<SeP>2023-08-31 06:03:45<SeP>2023-09-01 16:51:54<SeP>2023-09-03 03:40:03<SeP>2023-09-04 14:28:12<SeP>2023-09-06 01:16:21<SeP>2023-09-07 12:04:30<SeP>2023-09-08 22:52:39<SeP>2023-09-10 09:40:48<SeP>2023-09-11 20:28:57<SeP>2023-09-13 07:17:06<SeP>2023-09-14 18:05:15<SeP>2023-09-16 04:53:24<SeP>2023-09-17 15:41:33<SeP>2023-09-19 02:29:42<SeP>2023-09-20 13:17:51<SeP>2023-09-22 00:06:00<SeP>2023-09-23 10:54:09<SeP>2023-09-24 21:42:18<SeP>2023-09-26 08:30:27<SeP>2023-09-27 19:18:36<SeP>2023-09-29 06:06:45<SeP>2023-09-30 16:54:54<SeP>2023-10-02 03:43:03<SeP>2023-10-03 14:31:12<SeP>2023-10-05 01:19:21<SeP>2023-10-06 12:07:30<SeP>2023-10-07 22:55:39<SeP>2023-10-09 09:43:48<SeP>2023-10-10 20:31:57<SeP>2023-10-12 07:20:06<SeP>2023-10-13 18:08:15<SeP>2023-10-15 04:56:24<SeP>2023-10-16 15:44:33<SeP>2023-10-18 02:32:42<SeP>2023-10-19 13:20:51<SeP>2023-10-21 00:09:00<SeP>2023-10-22 10:57:09<SeP>2023-10-23 21:45:18<SeP>2023-10-25 08:33:27<SeP>2023-10-26 19:21:36<SeP>2023-10-28 06:09:45<SeP>2023-10-29 16:57:54<SeP>2023-10-31 03:46:03<SeP>2023-11-01 14:34:12<SeP>2023-11-03 01:22:21<SeP>2023-11-04 12:10:30<SeP>2023-11-05 21:58:39<SeP>2023-11-07 08:46:48<SeP>2023-11-08 19:34:57<SeP>2023-11-10 06:23:06<SeP>2023-11-11 17:11:15<SeP>2023-11-13 03:59:24<SeP>2023-11-14 14:47:33<SeP>2023-11-16 01:35:42<SeP>2023-11-17 12:23:51<SeP>2023-11-18 23:12:00<SeP>2023-11-20 10:00:09<SeP>2023-11-21 20:48:18<SeP>2023-11-23 07:36:27<SeP>2023-11-24 18:24:36<SeP>2023-11-26 05:12:45<SeP>2023-11-27 16:00:54<SeP>2023-11-29 02:49:03<SeP>2023-11-30 13:37:12<SeP>2023-12-02 00:25:21<SeP>2023-12-03 11:13:30<SeP>2023-12-04 22:01:39<SeP>2023-12-06 08:49:48<SeP>2023-12-07 19:37:57<SeP>2023-12-09 06:26:06<SeP>2023-12-10 17:14:15<SeP>2023-12-12 04:02:24<SeP>2023-12-13 14:50:33<SeP>2023-12-15 01:38:42<SeP>2023-12-16 12:26:51<SeP>2023-12-17 23:15:00<SeP>2023-12-19 10:03:09<SeP>2023-12-20 20:51:18<SeP>2023-12-22 07:39:27<SeP>2023-12-23 18:27:36<SeP>2023-12-25 05:15:45<SeP>2023-12-26 16:03:54<SeP>2023-12-28 02:52:03<SeP>2023-12-29 13:40:12<SeP>2023-12-31 00:28:21<SeP>2024-01-01 11:16:30<SeP>2024-01-02 22:04:39<SeP>2024-01-04 08:52:48<SeP>2024-01-05 19:40:57<SeP>2024-01-07 06:29:06<SeP>2024-01-08 17:17:15<SeP>2024-01-10 04:05:24<SeP>2024-01-11 14:53:33<SeP>2024-01-13 01:41:42<SeP>2024-01-14 12:29:51<SeP>2024-01-15 23:18:00<SeP>2024-01-17 10:06:09<SeP>2024-01-18 20:54:18<SeP>2024-01-20 07:42:27<SeP>2024-01-21 18:30:36<SeP>2024-01-23 05:18:45<SeP>2024-01-24 16:06:54<SeP>2024-01-26 02:55:03<SeP>2024-01-27 13:43:12<SeP>2024-01-29 00:31:21<SeP>2024-01-30 11:19:30<SeP>2024-01-31 22:07:39<SeP>2024-02-02 08:55:48<SeP>2024-02-03 19:43:57<SeP>2024-02-05 06:32:06<SeP>2024-02-06 17:20:15<SeP>2024-02-08 04:08:24<SeP>2024-02-09 14:56:33<SeP>2024-02-11 01:44:42<SeP>2024-02-12 12:32:51<SeP>2024-02-13 23:21:00<SeP>2024-02-15 10:09:09<SeP>2024-02-16 20:57:18<SeP>2024-02-18 07:45:27<SeP>2024-02-19 18:33:36<SeP>2024-02-21 05:21:45<SeP>2024-02-22 16:09:54<SeP>2024-02-24 02:58:03<SeP>2024-02-25 13:46:12<SeP>2024-02-27 00:34:21<SeP>2024-02-28 11:22:30<SeP>2024-02-29 22:10:39<SeP>2024-03-02 08:58:48<SeP>2024-03-03 19:46:57<SeP>2024-03-05 06:35:06<SeP>2024-03-06 17:23:15<SeP>2024-03-08 04:11:24<SeP>2024-03-09 14:59:33<SeP>2024-03-11 02:47:42<SeP>2024-03-12 13:35:51<SeP>2024-03-14 00:24:00<SeP>2024-03-15 11:12:09<SeP>2024-03-16 22:00:18<SeP>2024-03-18 08:48:27<SeP>2024-03-19 19:36:36<SeP>2024-03-21 06:24:45<SeP>2024-03-22 17:12:54<SeP>2024-03-24 04:01:03<SeP>2024-03-25 14:49:12<SeP>2024-03-27 01:37:21<SeP>2024-03-28 12:25:30<SeP>2024-03-29 23:13:39<SeP>2024-03-31 10:01:48<SeP>2024-04-01 20:49:57<SeP>2024-04-03 07:38:06<SeP>2024-04-04 18:26:15<SeP>2024-04-06 05:14:24<SeP>2024-04-07 16:02:33<SeP>2024-04-09 02:50:42<SeP>2024-04-10 13:38:51<SeP>2024-04-12 00:27:00<SeP>2024-04-13 11:15:09<SeP>2024-04-14 22:03:18<SeP>2024-04-16 08:51:27<SeP>2024-04-17 19:39:36<SeP>2024-04-19 06:27:45<SeP>2024-04-20 17:15:54<SeP>2024-04-22 04:04:03<SeP>2024-04-23 14:52:12<SeP>2024-04-25 01:40:21<SeP>2024-04-26 12:28:30<SeP>2024-04-27 23:16:39<SeP>2024-04-29 10:04:48<SeP>2024-04-30 20:52:57<SeP>2024-05-02 07:41:06<SeP>2024-05-03 18:29:15<SeP>2024-05-05 05:17:24<SeP>2024-05-06 16:05:33<SeP>2024-05-08 02:53:42<SeP>2024-05-09 13:41:51<SeP>2024-05-11 00:30:00<SeP>2024-05-12 11:18:09<SeP>2024-05-13 22:06:18<SeP>2024-05-15 08:54:27<SeP>2024-05-16 19:42:36<SeP>2024-05-18 06:30:45<SeP>2024-05-19 17:18:54<SeP>2024-05-21 04:07:03<SeP>2024-05-22 14:55:12<SeP>2024-05-24 01:43:21<SeP>2024-05-25 12:31:30<SeP>2024-05-26 23:19:39<SeP>2024-05-28 10:07:48<SeP>2024-05-29 20:55:57<SeP>2024-05-31 07:44:06<SeP>2024-06-01 18:32:15<SeP>2024-06-03 05:20:24<SeP>2024-06-04 16:08:33<SeP>2024-06-06 02:56:42<SeP>2024-06-07 13:44:51<SeP>2024-06-09 00:33:00<SeP>2024-06-10 11:21:09<SeP>2024-06-11 22:09:18<SeP>2024-06-13 08:57:27<SeP>2024-06-14 19:45:36<SeP>2024-06-16 06:33:45<SeP>2024-06-17 17:21:54<SeP>2024-06-19 04:10:03<SeP>2024-06-20 14:58:12<SeP>2024-06-22 01:46:21<SeP>2024-06-23 12:34:30<SeP>2024-06-24 23:22:39<SeP>2024-06-26 10:10:48<SeP>2024-06-27 20:58:57<SeP>2024-06-29 07:47:06<SeP>2024-06-30 18:35:15<SeP>2024-07-02 05:23:24<SeP>2024-07-03 16:11:33<SeP>2024-07-05 02:59:42<SeP>2024-07-06 13:47:51<SeP>2024-07-08 00:36:00<SeP>2024-07-09 11:24:09<SeP>2024-07-10 22:12:18<SeP>2024-07-12 09:00:27<SeP>2024-07-13 19:48:36<SeP>2024-07-15 06:36:45<SeP>2024-07-16 17:24:54<SeP>2024-07-18 04:13:03<SeP>2024-07-19 15:01:12<SeP>2024-07-21 01:49:21<SeP>2024-07-22 12:37:30<SeP>2024-07-23 23:25:39<SeP>2024-07-25 10:13:48<SeP>2024-07-26 21:01:57<SeP>2024-07-28 07:50:06<SeP>2024-07-29 18:38:15<SeP>2024-07-31 05:26:24<SeP>2024-08-01 16:14:33<SeP>2024-08-03 03:02:42<SeP>2024-08-04 13:50:51<SeP>2024-08-06 00:39:00<SeP>2024-08-07 11:27:09<SeP>2024-08-08 22:15:18<SeP>2024-08-10 09:03:27<SeP>2024-08-11 19:51:36<SeP>2024-08-13 06:39:45<SeP>2024-08-14 17:27:54<SeP>2024-08-16 04:16:03<SeP>2024-08-17 15:04:12<SeP>2024-08-19 01:52:21<SeP>2024-08-20 12:40:30<SeP>2024-08-21 23:28:39<SeP>2024-08-23 10:16:48<SeP>2024-08-24 21:04:57<SeP>2024-08-26 07:53:06<SeP>2024-08-27 18:41:15<SeP>2024-08-29 05:29:24<SeP>2024-08-30 16:17:33<SeP>2024-09-01 03:05:42<SeP>2024-09-02 13:53:51<SeP>2024-09-04 00:42:00<SeP>2024-09-05 11:30:09<SeP>2024-09-06 22:18:18<SeP>2024-09-08 09:06:27<SeP>2024-09-09 19:54:36<SeP>2024-09-11 06:42:45<SeP>2024-09-12 17:30:54<SeP>2024-09-14 04:19:03<SeP>2024-09-15 15:07:12<SeP>2024-09-17 01:55:21<SeP>2024-09-18 12:43:30<SeP>2024-09-19 23:31:39<SeP>2024-09-21 10:19:48<SeP>2024-09-22 21:07:57<SeP>2024-09-24 07:56:06<SeP>2024-09-25 18:44:15<SeP>2024-09-27 05:32:24<SeP>2024-09-28 16:20:33<SeP>2024-09-30 03:08:42<SeP>2024-10-01 13:56:51<SeP>2024-10-03 00:45:00<SeP>2024-10-04 11:33:09<SeP>2024-10-05 22:21:18<SeP>2024-10-07 09:09:27<SeP>2024-10-08 19:57:36<SeP>2024-10-10 06:45:45<SeP>2024-10-11 17:33:54<SeP>2024-10-13 04:22:03<SeP>2024-10-14 15:10:12<SeP>2024-10-16 01:58:21<SeP>2024-10-17 12:46:30<SeP>2024-10-18 23:34:39<SeP>2024-10-20 10:22:48<SeP>2024-10-21 21:10:57<SeP>2024-10-23 07:59:06<SeP>2024-10-24 18:47:15<SeP>2024-10-26 05:35:24<SeP>2024-10-27 16:23:33<SeP>2024-10-29 03:11:42<SeP>2024-10-30 13:59:51<SeP>2024-11-01 00:48:00<SeP>2024-11-02 11:36:09<SeP>2024-11-03 21:24:18<SeP>2024-11-05 08:12:27<SeP>2024-11-06 19:00:36<SeP>2024-11-08 05:48:45<SeP>2024-11-09 16:36:54<SeP>2024-11-11 03:25:03<SeP>2024-11-12 14:13:12<SeP>2024-11-14 01:01:21<SeP>2024-11-15 11:49:30<SeP>2024-11-16 22:37:39<SeP>2024-11-18 09:25:48<SeP>2024-11-19 20:13:57<SeP>2024-11-21 07:02:06<SeP>2024-11-22 17:50:15<SeP>2024-11-24 04:38:24<SeP>2024-11-25 15:26:33<SeP>2024-11-27 02:14:42<SeP>2024-11-28 13:02:51<SeP>2024-11-29 23:51:00<SeP>2024-12-01 10:39:09<SeP>2024-12-02 21:27:18<SeP>2024-12-04 08:15:27<SeP>2024-12-05 19:03:36<SeP>2024-12-07 05:51:45<SeP>2024-12-08 16:39:54<SeP>2024-12-10 03:28:03<SeP>2024-12-11 14:16:12<SeP>2024-12-13 01:04:21<SeP>2024-12-14 11:52:30<SeP>2024-12-15 22:40:39<SeP>2024-12-17 09:28:48<SeP>2024-12-18 20:16:57<SeP>2024-12-20 07:05:06<SeP>2024-12-21 17:53:15<SeP>2024-12-23 04:41:24<SeP>2024-12-24 15:29:33<SeP>2024-12-26 02:17:42<SeP>2024-12-27 13:05:51<SeP>2024-12-28 23:54:00<SeP>2024-12-30 10:42:09<SeP>2024-12-31 21:30:18<SeP>2025-01-02 08:18:27<SeP>2025-01-03 19:06:36<SeP>2025-01-05 05:54:45<SeP>2025-01-06 16:42:54<SeP>2025-01-08 03:31:03<SeP>2025-01-09 14:19:12<SeP>2025-01-11 01:07:21<SeP>2025-01-12 11:55:30<SeP>2025-01-13 22:43:39<SeP>2025-01-15 09:31:48<SeP>2025-01-16 20:19:57<SeP>2025-01-18 07:08:06<SeP>2025-01-19 17:56:15<SeP>2025-01-21 04:44:24<SeP>2025-01-22 15:32:33<SeP>2025-01-24 02:20:42<SeP>2025-01-25 13:08:51<SeP>2025-01-26 23:57:00<SeP>2025-01-28 10:45:09<SeP>2025-01-29 21:33:18<SeP>2025-01-31 08:21:27<SeP>2025-02-01 19:09:36<SeP>2025-02-03 05:57:45<SeP>2025-02-04 16:45:54<SeP>2025-02-06 03:34:03<SeP>2025-02-07 14:22:12<SeP>2025-02-09 01:10:21<SeP>2025-02-10 11:58:30<SeP>2025-02-11 22:46:39<SeP>2025-02-13 09:34:48<SeP>2025-02-14 20:22:57<SeP>2025-02-16 07:11:06<SeP>2025-02-17 17:59:15<SeP>2025-02-19 04:47:24<SeP>2025-02-20 15:35:33<SeP>2025-02-22 02:23:42<SeP>2025-02-23 13:11:51";
  const itemLabel       = "Ataques";
  const itemData        = "152<SeP>615<SeP>976<SeP>719<SeP>534<SeP>229<SeP>6968<SeP>511<SeP>9176<SeP>970<SeP>382<SeP>1142<SeP>1222<SeP>293<SeP>162<SeP>459<SeP>110<SeP>764<SeP>284<SeP>4306<SeP>7532<SeP>6986<SeP>7447<SeP>7165<SeP>266<SeP>309<SeP>350<SeP>215<SeP>721<SeP>5555<SeP>73<SeP>381<SeP>324<SeP>374<SeP>3075<SeP>9463<SeP>8403<SeP>10374<SeP>9380<SeP>5932<SeP>5912<SeP>8101<SeP>7859<SeP>10035<SeP>7653<SeP>7172<SeP>9201<SeP>8272<SeP>7677<SeP>8334<SeP>6004<SeP>9310<SeP>9170<SeP>6238<SeP>8311<SeP>7387<SeP>10364<SeP>18151<SeP>15813<SeP>9851<SeP>10586<SeP>7342<SeP>7589<SeP>9002<SeP>8588<SeP>8374<SeP>6904<SeP>6275<SeP>7082<SeP>6800<SeP>5200<SeP>3436<SeP>6799<SeP>5846<SeP>6458<SeP>6595<SeP>6663<SeP>4349<SeP>5708<SeP>7362<SeP>4684<SeP>6418<SeP>5555<SeP>4485<SeP>7628<SeP>5263<SeP>5334<SeP>5681<SeP>8942<SeP>20932<SeP>25193<SeP>17941<SeP>9927<SeP>5534<SeP>7658<SeP>11628<SeP>7671<SeP>3400<SeP>6658<SeP>3590<SeP>4747<SeP>6805<SeP>6033<SeP>7855<SeP>6568<SeP>5493<SeP>4322<SeP>5924<SeP>9482<SeP>8038<SeP>7956<SeP>4211<SeP>6575<SeP>9575<SeP>8595<SeP>4611<SeP>3275<SeP>6261<SeP>9351<SeP>5018<SeP>7159<SeP>9489<SeP>4216<SeP>2788<SeP>1261<SeP>1715<SeP>1782<SeP>2265<SeP>1083<SeP>1402<SeP>487<SeP>1373<SeP>1541<SeP>1122<SeP>878<SeP>1114<SeP>1062<SeP>749<SeP>1432<SeP>1404<SeP>1201<SeP>845<SeP>2240<SeP>2030<SeP>6427<SeP>10235<SeP>8015<SeP>8173<SeP>6938<SeP>12800<SeP>2435<SeP>11023<SeP>9938<SeP>9514<SeP>13304<SeP>8221<SeP>11676<SeP>10774<SeP>8726<SeP>13369<SeP>5115<SeP>4578<SeP>7307<SeP>23563<SeP>7543<SeP>7933<SeP>8317<SeP>13428<SeP>11415<SeP>8789<SeP>4495<SeP>7664<SeP>8171<SeP>24837<SeP>7508<SeP>8711<SeP>10662<SeP>5651<SeP>5587<SeP>6372<SeP>16111<SeP>4259<SeP>12774<SeP>8087<SeP>6803<SeP>8542<SeP>7585<SeP>3002<SeP>6033<SeP>5683<SeP>7086<SeP>6400<SeP>6244<SeP>7155<SeP>18658<SeP>6998<SeP>8560<SeP>5064<SeP>7601<SeP>9080<SeP>8954<SeP>5831<SeP>2650<SeP>7106<SeP>3373<SeP>5209<SeP>3095<SeP>1550<SeP>581<SeP>636<SeP>196<SeP>541<SeP>637<SeP>771<SeP>419<SeP>917<SeP>1548<SeP>1340<SeP>2848<SeP>22541<SeP>695<SeP>5336<SeP>2877<SeP>3394<SeP>6608<SeP>2645<SeP>4236<SeP>3528<SeP>2840<SeP>3074<SeP>3099<SeP>4734<SeP>1704<SeP>2919<SeP>2617<SeP>2190<SeP>1871<SeP>1937<SeP>1200<SeP>1911<SeP>787<SeP>925<SeP>1780<SeP>18905<SeP>9315<SeP>2338<SeP>3723<SeP>3640<SeP>2235<SeP>3964<SeP>1819<SeP>3179<SeP>2997<SeP>2940<SeP>2877<SeP>3088<SeP>2822<SeP>3168<SeP>6258<SeP>5275<SeP>3704<SeP>3756<SeP>2576<SeP>2978<SeP>4556<SeP>4166<SeP>10270<SeP>5163<SeP>2475<SeP>2801<SeP>2009<SeP>4736<SeP>3666<SeP>3745<SeP>3168<SeP>2484<SeP>5879<SeP>3269<SeP>6014<SeP>3576<SeP>5512<SeP>4437<SeP>7186<SeP>3601<SeP>17270<SeP>10791<SeP>12519<SeP>1727<SeP>2288<SeP>4889<SeP>3388<SeP>3888<SeP>3931<SeP>5019<SeP>3935<SeP>4531<SeP>4251<SeP>3529<SeP>3315<SeP>1257<SeP>1979<SeP>2765<SeP>2973<SeP>2232<SeP>3921<SeP>3822<SeP>4319<SeP>3351<SeP>3566<SeP>3782<SeP>3500<SeP>3121<SeP>6821<SeP>7648<SeP>5865<SeP>4497<SeP>4716<SeP>4573<SeP>3693<SeP>4013<SeP>4037<SeP>6672<SeP>5060<SeP>4582<SeP>2754<SeP>1129<SeP>1145<SeP>1742<SeP>1301<SeP>1232<SeP>1693<SeP>1550<SeP>1346<SeP>3255<SeP>4111<SeP>6369<SeP>30759<SeP>8250<SeP>5306<SeP>15956<SeP>12605<SeP>4998<SeP>6344<SeP>4678<SeP>22416<SeP>6367<SeP>5407<SeP>4431<SeP>4660<SeP>6316<SeP>22107<SeP>13445<SeP>3918<SeP>3542<SeP>3959<SeP>5595<SeP>5140<SeP>2775<SeP>3451<SeP>4159<SeP>5169<SeP>5042<SeP>18275<SeP>4427<SeP>5929<SeP>6224<SeP>2689<SeP>2750<SeP>3550<SeP>4341<SeP>3934<SeP>4233<SeP>2755<SeP>3734<SeP>2155<SeP>4522<SeP>4315<SeP>8170<SeP>10625<SeP>8012<SeP>8600<SeP>9286<SeP>6873<SeP>5774<SeP>5117<SeP>4141<SeP>24922<SeP>4374<SeP>3027<SeP>4520<SeP>3273<SeP>11390<SeP>5715<SeP>3489<SeP>4883<SeP>4121<SeP>2959<SeP>9296<SeP>9175<SeP>4944";
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
  const itemData    = "690801<SeP>361953<SeP>205722<SeP>179040<SeP>110163<SeP>87449<SeP>82964<SeP>80156<SeP>67775<SeP>66021";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "294745<SeP>41416<SeP>40074<SeP>35188<SeP>14394<SeP>10707<SeP>7668<SeP>7343<SeP>6978<SeP>6925";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "396056<SeP>326765<SeP>202852<SeP>138966<SeP>95769<SeP>80524<SeP>80379<SeP>69449<SeP>58353<SeP>58298";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "361532<SeP>259480<SeP>234822<SeP>143846<SeP>66654<SeP>59499<SeP>56187<SeP>51918<SeP>41612<SeP>35781";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Scans";
  const itemData    = "155000<SeP>52881<SeP>40491<SeP>32123<SeP>21905<SeP>12655<SeP>10726<SeP>9001<SeP>7614<SeP>7430";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "348877<SeP>258717<SeP>121941<SeP>79822<SeP>55217<SeP>48773<SeP>46109<SeP>30549<SeP>29324<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "690801<SeP>361953<SeP>205722<SeP>179040<SeP>110163<SeP>87449<SeP>82964<SeP>80156<SeP>67775<SeP>66021";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Brazil<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "294745<SeP>41416<SeP>40074<SeP>35188<SeP>14394<SeP>10707<SeP>7668<SeP>7343<SeP>6978<SeP>6925";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "396056<SeP>326765<SeP>202852<SeP>138966<SeP>95769<SeP>80524<SeP>80379<SeP>69449<SeP>58353<SeP>58298";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "361532<SeP>259480<SeP>234822<SeP>143846<SeP>66654<SeP>59499<SeP>56187<SeP>51918<SeP>41612<SeP>35781";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>137688<SeP>9808";
  const itemLabel   = "Escaneos";
  const itemData    = "155000<SeP>52881<SeP>40491<SeP>32123<SeP>21905<SeP>12655<SeP>10726<SeP>9001<SeP>7614<SeP>7430";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>4808<SeP>149722<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "348877<SeP>258717<SeP>121941<SeP>79822<SeP>55217<SeP>48773<SeP>46109<SeP>30549<SeP>29324<SeP>26846";
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
