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
  document.getElementById("last-updated").innerHTML = "2025-3-12";
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
  const metricData    = "120410";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "33718";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "86692";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8687";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "51148";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "35544";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4217";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "7947";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "27597";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3336";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "120410";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "33718";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "86692";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "8687";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "51148";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "35544";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "4217";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "7947";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "27597";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "3336";
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
  const incomingData = "120410<SeP>33718<SeP>86692<SeP>8687";
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
  const incomingData = "86692<SeP>51148<SeP>35544<SeP>4217";
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
  const incomingData = "35544<SeP>7947<SeP>27597<SeP>3336";
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
  const incomingData = "8210<SeP>7409<SeP>801";
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
  const incomingData = "90<SeP>10<SeP>80<SeP>15";
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
  const incomingData = "120410<SeP>33718<SeP>86692<SeP>8687";
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
  const incomingData = "86692<SeP>51148<SeP>35544<SeP>4217";
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
  const incomingData = "35544<SeP>7947<SeP>27597<SeP>3336";
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
  const incomingData = "8210<SeP>7409<SeP>801";
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
  const incomingData = "90<SeP>10<SeP>80<SeP>15";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>122.100.182.168</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)";
  const column2Data  = "AS44486<SeP>AS207566<SeP>AS47890<SeP>AS34534<SeP>AS4609<SeP>AS204428<SeP>AS400619<SeP>AS207566<SeP>AS14061<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  const column4Data  = "6226<SeP>1402<SeP>1140<SeP>852<SeP>758<SeP>685<SeP>604<SeP>602<SeP>528<SeP>431";
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
  const column1Data  = "IP05 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP13 (<span class=blur>218.92.0.226</span>)<SeP>IP14 (<span class=blur>218.92.0.230</span>)<SeP>IP16 (<span class=blur>218.92.0.114</span>)<SeP>IP15 (<span class=blur>126.62.95.172</span>)<SeP>IP17 (<span class=blur>218.92.0.217</span>)<SeP>IP18 (<span class=blur>218.92.0.216</span>)<SeP>IP19 (<span class=blur>218.92.0.237</span>)";
  const column2Data  = "AS4609<SeP>AS207566<SeP>AS207566<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data  = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  const column4Data  = "758<SeP>701<SeP>602<SeP>342<SeP>339<SeP>337<SeP>337<SeP>335<SeP>333<SeP>326";
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
  const column1Data  = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)<SeP>IP11 (<span class=blur>92.255.57.132</span>)<SeP>IP12 (<span class=blur>104.252.127.63</span>)";
  const column2Data  = "AS44486<SeP>AS47890<SeP>AS34534<SeP>AS207566<SeP>AS204428<SeP>AS400619<SeP>AS14061<SeP>AS56971<SeP>AS207566<SeP>AS56971";
  const column3Data  = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  const column4Data  = "6225<SeP>1136<SeP>836<SeP>701<SeP>685<SeP>602<SeP>527<SeP>430<SeP>424<SeP>382";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP05 (<span class=blur>122.100.182.168</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)";
  const column2Data   = "AS44486<SeP>AS207566<SeP>AS47890<SeP>AS34534<SeP>AS4609<SeP>AS204428<SeP>AS400619<SeP>AS207566<SeP>AS14061<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6226<SeP>1402<SeP>1140<SeP>852<SeP>758<SeP>685<SeP>604<SeP>602<SeP>528<SeP>431";
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
  const column1Data   = "IP05 (<span class=blur>122.100.182.168</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP08 (<span class=blur>92.255.85.35</span>)<SeP>IP13 (<span class=blur>218.92.0.226</span>)<SeP>IP14 (<span class=blur>218.92.0.230</span>)<SeP>IP16 (<span class=blur>218.92.0.114</span>)<SeP>IP15 (<span class=blur>126.62.95.172</span>)<SeP>IP17 (<span class=blur>218.92.0.217</span>)<SeP>IP18 (<span class=blur>218.92.0.216</span>)<SeP>IP19 (<span class=blur>218.92.0.237</span>)";
  const column2Data   = "AS4609<SeP>AS207566<SeP>AS207566<SeP>AS4134<SeP>AS4134<SeP>AS4134<SeP>AS17676<SeP>AS4134<SeP>AS4134<SeP>AS4134";
  const column3Data   = "<span class=\u0022fi fi-mo\u0022></span>\u00a0Macao<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-jp\u0022></span>\u00a0Japan<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China<SeP><span class=\u0022fi fi-cn\u0022></span>\u00a0China";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "758<SeP>701<SeP>602<SeP>342<SeP>339<SeP>337<SeP>337<SeP>335<SeP>333<SeP>326";
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
  const column1Data   = "IP01 (<span class=blur>45.82.121.247</span>)<SeP>IP03 (<span class=blur>2.57.122.193</span>)<SeP>IP04 (<span class=blur>37.44.238.88</span>)<SeP>IP02 (<span class=blur>185.7.214.180</span>)<SeP>IP06 (<span class=blur>80.94.95.112</span>)<SeP>IP07 (<span class=blur>38.12.5.41</span>)<SeP>IP09 (<span class=blur>64.23.130.251</span>)<SeP>IP10 (<span class=blur>95.182.115.45</span>)<SeP>IP11 (<span class=blur>92.255.57.132</span>)<SeP>IP12 (<span class=blur>104.252.127.63</span>)";
  const column2Data   = "AS44486<SeP>AS47890<SeP>AS34534<SeP>AS207566<SeP>AS204428<SeP>AS400619<SeP>AS14061<SeP>AS56971<SeP>AS207566<SeP>AS56971";
  const column3Data   = "<span class=\u0022fi fi-de\u0022></span>\u00a0Germany<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-fr\u0022></span>\u00a0France<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-ro\u0022></span>\u00a0Romania<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-us\u0022></span>\u00a0United States<SeP><span class=\u0022fi fi-ru\u0022></span>\u00a0Russia<SeP><span class=\u0022fi fi-hk\u0022></span>\u00a0Hong Kong<SeP><span class=\u0022fi fi-ua\u0022></span>\u00a0Ukraine";
  let   column3DataES = translateCountryList(column3Data);
  const column4Data   = "6225<SeP>1136<SeP>836<SeP>701<SeP>685<SeP>602<SeP>527<SeP>430<SeP>424<SeP>382";
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
  const column3Data   = "5888<SeP>5809<SeP>1247<SeP>249<SeP>217<SeP>213<SeP>202<SeP>199<SeP>195<SeP>186";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>94f2e4d8d4436874785cd14e6e6d403507b8750852f7f2040352069a75da4c00";
  const column2Data  = "6134<SeP>972<SeP>247<SeP>40<SeP>39<SeP>33<SeP>33<SeP>33<SeP>32<SeP>22";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
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
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://194.85.251.8<SeP>http://193.143.1.7<SeP>http://61.215.151.173<SeP>http://66.63.187.69<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>tftp://199.195.248.181<SeP>http://91.224.92.19";
  const column2Data  = "89<SeP>20<SeP>12<SeP>8<SeP>5<SeP>4<SeP>2<SeP>2<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsEnglish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocol";
  const column2Label = "Count";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "85750<SeP>34660";
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
  const column3Data   = "5888<SeP>5809<SeP>1247<SeP>249<SeP>217<SeP>213<SeP>202<SeP>199<SeP>195<SeP>186";
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
  const column1Data  = "a8460f446be540410004b1a8db4083773fa46f7fe76fa84219c93daa1669f8f2<SeP>80c15d8108ea5828bdbdf8a5eff145358ca69532c748ca8ef44b1b82d962762d<SeP>01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b<SeP>d46555af1173d22f07c37ef9c1e0e74fd68db022f2b6fb3ab5388d2c5bc6a98e<SeP>3b15778595cef00d1a51035dd4fd65e6be97e73544cb1899f40aec4aaa0445ae<SeP>6148113073dd1e9138660134605768d9ae635c9399d4f296f5d75b347fc0872f<SeP>5f85bbb2f68df12de19dad2367ce920cc99fcb583aa963c7791633f4c86bd88a<SeP>15df367d98a807d1c41b677e17b4e73b7f99657c3966542180e0535bc138d43c<SeP>c3a7c7ca980033664826b402c1aa85293547ae30a788286ad68aa4ad7d406e2b<SeP>94f2e4d8d4436874785cd14e6e6d403507b8750852f7f2040352069a75da4c00";
  const column2Data  = "6134<SeP>972<SeP>247<SeP>40<SeP>39<SeP>33<SeP>33<SeP>33<SeP>32<SeP>22";
  let   column3Data  = "redir<SeP>redir<SeP>redir<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload<SeP>upload";
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
  const column1Data  = "http://37.44.238.88<SeP>http://37.44.238.92<SeP>http://194.85.251.8<SeP>http://193.143.1.7<SeP>http://61.215.151.173<SeP>http://66.63.187.69<SeP>http://83.23.27.238<SeP>http://45.148.10.136<SeP>tftp://199.195.248.181<SeP>http://91.224.92.19";
  const column2Data  = "89<SeP>20<SeP>12<SeP>8<SeP>5<SeP>4<SeP>2<SeP>2<SeP>1<SeP>1";
  const listLocale   = "en-US";

  listColumns2(listElement, column1Label, column1Data, column2Label, column2Data, listLocale);
}

function listProtocolsSpanish()
{
  const listElement  = "list-protocols";
  const column1Label = "Protocolo";
  const column2Label = "N\u00famero";
  const column1Data  = "ssh<SeP>telnet";
  const column2Data  = "85750<SeP>34660";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-12";

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
        "name": "traffic between 2025-02-10 and 2025-03-11"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          16805,50
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
        "name": "scans between 2025-02-10 and 2025-03-11"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12396,38,
          16805,50
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
        "name": "attacks between 2025-02-10 and 2025-03-11"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6613,21,
          16805,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-12";

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
        "name": "tráfico entre 2025-02-10 y 2025-03-11"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          16805,50
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
        "name": "escaneos entre 2025-02-10 y 2025-03-11"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          12396,38,
          16805,50
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
        "name": "ataques entre 2025-02-10 y 2025-03-11"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          6613,21,
          16805,50
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
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 01:47:51<SeP>2025-02-10 03:35:42<SeP>2025-02-10 05:23:33<SeP>2025-02-10 07:11:24<SeP>2025-02-10 08:59:15<SeP>2025-02-10 10:47:06<SeP>2025-02-10 12:34:57<SeP>2025-02-10 14:22:48<SeP>2025-02-10 16:10:39<SeP>2025-02-10 17:58:30<SeP>2025-02-10 19:46:21<SeP>2025-02-10 21:34:12<SeP>2025-02-10 23:22:03<SeP>2025-02-11 01:09:54<SeP>2025-02-11 02:57:45<SeP>2025-02-11 04:45:36<SeP>2025-02-11 06:33:27<SeP>2025-02-11 08:21:18<SeP>2025-02-11 10:09:09<SeP>2025-02-11 11:57:00<SeP>2025-02-11 13:44:51<SeP>2025-02-11 15:32:42<SeP>2025-02-11 17:20:33<SeP>2025-02-11 19:08:24<SeP>2025-02-11 20:56:15<SeP>2025-02-11 22:44:06<SeP>2025-02-12 00:31:57<SeP>2025-02-12 02:19:48<SeP>2025-02-12 04:07:39<SeP>2025-02-12 05:55:30<SeP>2025-02-12 07:43:21<SeP>2025-02-12 09:31:12<SeP>2025-02-12 11:19:03<SeP>2025-02-12 13:06:54<SeP>2025-02-12 14:54:45<SeP>2025-02-12 16:42:36<SeP>2025-02-12 18:30:27<SeP>2025-02-12 20:18:18<SeP>2025-02-12 22:06:09<SeP>2025-02-12 23:54:00<SeP>2025-02-13 01:41:51<SeP>2025-02-13 03:29:42<SeP>2025-02-13 05:17:33<SeP>2025-02-13 07:05:24<SeP>2025-02-13 08:53:15<SeP>2025-02-13 10:41:06<SeP>2025-02-13 12:28:57<SeP>2025-02-13 14:16:48<SeP>2025-02-13 16:04:39<SeP>2025-02-13 17:52:30<SeP>2025-02-13 19:40:21<SeP>2025-02-13 21:28:12<SeP>2025-02-13 23:16:03<SeP>2025-02-14 01:03:54<SeP>2025-02-14 02:51:45<SeP>2025-02-14 04:39:36<SeP>2025-02-14 06:27:27<SeP>2025-02-14 08:15:18<SeP>2025-02-14 10:03:09<SeP>2025-02-14 11:51:00<SeP>2025-02-14 13:38:51<SeP>2025-02-14 15:26:42<SeP>2025-02-14 17:14:33<SeP>2025-02-14 19:02:24<SeP>2025-02-14 20:50:15<SeP>2025-02-14 22:38:06<SeP>2025-02-15 00:25:57<SeP>2025-02-15 02:13:48<SeP>2025-02-15 04:01:39<SeP>2025-02-15 05:49:30<SeP>2025-02-15 07:37:21<SeP>2025-02-15 09:25:12<SeP>2025-02-15 11:13:03<SeP>2025-02-15 13:00:54<SeP>2025-02-15 14:48:45<SeP>2025-02-15 16:36:36<SeP>2025-02-15 18:24:27<SeP>2025-02-15 20:12:18<SeP>2025-02-15 22:00:09<SeP>2025-02-15 23:48:00<SeP>2025-02-16 01:35:51<SeP>2025-02-16 03:23:42<SeP>2025-02-16 05:11:33<SeP>2025-02-16 06:59:24<SeP>2025-02-16 08:47:15<SeP>2025-02-16 10:35:06<SeP>2025-02-16 12:22:57<SeP>2025-02-16 14:10:48<SeP>2025-02-16 15:58:39<SeP>2025-02-16 17:46:30<SeP>2025-02-16 19:34:21<SeP>2025-02-16 21:22:12<SeP>2025-02-16 23:10:03<SeP>2025-02-17 00:57:54<SeP>2025-02-17 02:45:45<SeP>2025-02-17 04:33:36<SeP>2025-02-17 06:21:27<SeP>2025-02-17 08:09:18<SeP>2025-02-17 09:57:09<SeP>2025-02-17 11:45:00<SeP>2025-02-17 13:32:51<SeP>2025-02-17 15:20:42<SeP>2025-02-17 17:08:33<SeP>2025-02-17 18:56:24<SeP>2025-02-17 20:44:15<SeP>2025-02-17 22:32:06<SeP>2025-02-18 00:19:57<SeP>2025-02-18 02:07:48<SeP>2025-02-18 03:55:39<SeP>2025-02-18 05:43:30<SeP>2025-02-18 07:31:21<SeP>2025-02-18 09:19:12<SeP>2025-02-18 11:07:03<SeP>2025-02-18 12:54:54<SeP>2025-02-18 14:42:45<SeP>2025-02-18 16:30:36<SeP>2025-02-18 18:18:27<SeP>2025-02-18 20:06:18<SeP>2025-02-18 21:54:09<SeP>2025-02-18 23:42:00<SeP>2025-02-19 01:29:51<SeP>2025-02-19 03:17:42<SeP>2025-02-19 05:05:33<SeP>2025-02-19 06:53:24<SeP>2025-02-19 08:41:15<SeP>2025-02-19 10:29:06<SeP>2025-02-19 12:16:57<SeP>2025-02-19 14:04:48<SeP>2025-02-19 15:52:39<SeP>2025-02-19 17:40:30<SeP>2025-02-19 19:28:21<SeP>2025-02-19 21:16:12<SeP>2025-02-19 23:04:03<SeP>2025-02-20 00:51:54<SeP>2025-02-20 02:39:45<SeP>2025-02-20 04:27:36<SeP>2025-02-20 06:15:27<SeP>2025-02-20 08:03:18<SeP>2025-02-20 09:51:09<SeP>2025-02-20 11:39:00<SeP>2025-02-20 13:26:51<SeP>2025-02-20 15:14:42<SeP>2025-02-20 17:02:33<SeP>2025-02-20 18:50:24<SeP>2025-02-20 20:38:15<SeP>2025-02-20 22:26:06<SeP>2025-02-21 00:13:57<SeP>2025-02-21 02:01:48<SeP>2025-02-21 03:49:39<SeP>2025-02-21 05:37:30<SeP>2025-02-21 07:25:21<SeP>2025-02-21 09:13:12<SeP>2025-02-21 11:01:03<SeP>2025-02-21 12:48:54<SeP>2025-02-21 14:36:45<SeP>2025-02-21 16:24:36<SeP>2025-02-21 18:12:27<SeP>2025-02-21 20:00:18<SeP>2025-02-21 21:48:09<SeP>2025-02-21 23:36:00<SeP>2025-02-22 01:23:51<SeP>2025-02-22 03:11:42<SeP>2025-02-22 04:59:33<SeP>2025-02-22 06:47:24<SeP>2025-02-22 08:35:15<SeP>2025-02-22 10:23:06<SeP>2025-02-22 12:10:57<SeP>2025-02-22 13:58:48<SeP>2025-02-22 15:46:39<SeP>2025-02-22 17:34:30<SeP>2025-02-22 19:22:21<SeP>2025-02-22 21:10:12<SeP>2025-02-22 22:58:03<SeP>2025-02-23 00:45:54<SeP>2025-02-23 02:33:45<SeP>2025-02-23 04:21:36<SeP>2025-02-23 06:09:27<SeP>2025-02-23 07:57:18<SeP>2025-02-23 09:45:09<SeP>2025-02-23 11:33:00<SeP>2025-02-23 13:20:51<SeP>2025-02-23 15:08:42<SeP>2025-02-23 16:56:33<SeP>2025-02-23 18:44:24<SeP>2025-02-23 20:32:15<SeP>2025-02-23 22:20:06<SeP>2025-02-24 00:07:57<SeP>2025-02-24 01:55:48<SeP>2025-02-24 03:43:39<SeP>2025-02-24 05:31:30<SeP>2025-02-24 07:19:21<SeP>2025-02-24 09:07:12<SeP>2025-02-24 10:55:03<SeP>2025-02-24 12:42:54<SeP>2025-02-24 14:30:45<SeP>2025-02-24 16:18:36<SeP>2025-02-24 18:06:27<SeP>2025-02-24 19:54:18<SeP>2025-02-24 21:42:09<SeP>2025-02-24 23:30:00<SeP>2025-02-25 01:17:51<SeP>2025-02-25 03:05:42<SeP>2025-02-25 04:53:33<SeP>2025-02-25 06:41:24<SeP>2025-02-25 08:29:15<SeP>2025-02-25 10:17:06<SeP>2025-02-25 12:04:57<SeP>2025-02-25 13:52:48<SeP>2025-02-25 15:40:39<SeP>2025-02-25 17:28:30<SeP>2025-02-25 19:16:21<SeP>2025-02-25 21:04:12<SeP>2025-02-25 22:52:03<SeP>2025-02-26 00:39:54<SeP>2025-02-26 02:27:45<SeP>2025-02-26 04:15:36<SeP>2025-02-26 06:03:27<SeP>2025-02-26 07:51:18<SeP>2025-02-26 09:39:09<SeP>2025-02-26 11:27:00<SeP>2025-02-26 13:14:51<SeP>2025-02-26 15:02:42<SeP>2025-02-26 16:50:33<SeP>2025-02-26 18:38:24<SeP>2025-02-26 20:26:15<SeP>2025-02-26 22:14:06<SeP>2025-02-27 00:01:57<SeP>2025-02-27 01:49:48<SeP>2025-02-27 03:37:39<SeP>2025-02-27 05:25:30<SeP>2025-02-27 07:13:21<SeP>2025-02-27 09:01:12<SeP>2025-02-27 10:49:03<SeP>2025-02-27 12:36:54<SeP>2025-02-27 14:24:45<SeP>2025-02-27 16:12:36<SeP>2025-02-27 18:00:27<SeP>2025-02-27 19:48:18<SeP>2025-02-27 21:36:09<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:11:51<SeP>2025-02-28 02:59:42<SeP>2025-02-28 04:47:33<SeP>2025-02-28 06:35:24<SeP>2025-02-28 08:23:15<SeP>2025-02-28 10:11:06<SeP>2025-02-28 11:58:57<SeP>2025-02-28 13:46:48<SeP>2025-02-28 15:34:39<SeP>2025-02-28 17:22:30<SeP>2025-02-28 19:10:21<SeP>2025-02-28 20:58:12<SeP>2025-02-28 22:46:03<SeP>2025-03-01 00:33:54<SeP>2025-03-01 02:21:45<SeP>2025-03-01 04:09:36<SeP>2025-03-01 05:57:27<SeP>2025-03-01 07:45:18<SeP>2025-03-01 09:33:09<SeP>2025-03-01 11:21:00<SeP>2025-03-01 13:08:51<SeP>2025-03-01 14:56:42<SeP>2025-03-01 16:44:33<SeP>2025-03-01 18:32:24<SeP>2025-03-01 20:20:15<SeP>2025-03-01 22:08:06<SeP>2025-03-01 23:55:57<SeP>2025-03-02 01:43:48<SeP>2025-03-02 03:31:39<SeP>2025-03-02 05:19:30<SeP>2025-03-02 07:07:21<SeP>2025-03-02 08:55:12<SeP>2025-03-02 10:43:03<SeP>2025-03-02 12:30:54<SeP>2025-03-02 14:18:45<SeP>2025-03-02 16:06:36<SeP>2025-03-02 17:54:27<SeP>2025-03-02 19:42:18<SeP>2025-03-02 21:30:09<SeP>2025-03-02 23:18:00<SeP>2025-03-03 01:05:51<SeP>2025-03-03 02:53:42<SeP>2025-03-03 04:41:33<SeP>2025-03-03 06:29:24<SeP>2025-03-03 08:17:15<SeP>2025-03-03 10:05:06<SeP>2025-03-03 11:52:57<SeP>2025-03-03 13:40:48<SeP>2025-03-03 15:28:39<SeP>2025-03-03 17:16:30<SeP>2025-03-03 19:04:21<SeP>2025-03-03 20:52:12<SeP>2025-03-03 22:40:03<SeP>2025-03-04 00:27:54<SeP>2025-03-04 02:15:45<SeP>2025-03-04 04:03:36<SeP>2025-03-04 05:51:27<SeP>2025-03-04 07:39:18<SeP>2025-03-04 09:27:09<SeP>2025-03-04 11:15:00<SeP>2025-03-04 13:02:51<SeP>2025-03-04 14:50:42<SeP>2025-03-04 16:38:33<SeP>2025-03-04 18:26:24<SeP>2025-03-04 20:14:15<SeP>2025-03-04 22:02:06<SeP>2025-03-04 23:49:57<SeP>2025-03-05 01:37:48<SeP>2025-03-05 03:25:39<SeP>2025-03-05 05:13:30<SeP>2025-03-05 07:01:21<SeP>2025-03-05 08:49:12<SeP>2025-03-05 10:37:03<SeP>2025-03-05 12:24:54<SeP>2025-03-05 14:12:45<SeP>2025-03-05 16:00:36<SeP>2025-03-05 17:48:27<SeP>2025-03-05 19:36:18<SeP>2025-03-05 21:24:09<SeP>2025-03-05 23:12:00<SeP>2025-03-06 00:59:51<SeP>2025-03-06 02:47:42<SeP>2025-03-06 04:35:33<SeP>2025-03-06 06:23:24<SeP>2025-03-06 08:11:15<SeP>2025-03-06 09:59:06<SeP>2025-03-06 11:46:57<SeP>2025-03-06 13:34:48<SeP>2025-03-06 15:22:39<SeP>2025-03-06 17:10:30<SeP>2025-03-06 18:58:21<SeP>2025-03-06 20:46:12<SeP>2025-03-06 22:34:03<SeP>2025-03-07 00:21:54<SeP>2025-03-07 02:09:45<SeP>2025-03-07 03:57:36<SeP>2025-03-07 05:45:27<SeP>2025-03-07 07:33:18<SeP>2025-03-07 09:21:09<SeP>2025-03-07 11:09:00<SeP>2025-03-07 12:56:51<SeP>2025-03-07 14:44:42<SeP>2025-03-07 16:32:33<SeP>2025-03-07 18:20:24<SeP>2025-03-07 20:08:15<SeP>2025-03-07 21:56:06<SeP>2025-03-07 23:43:57<SeP>2025-03-08 01:31:48<SeP>2025-03-08 03:19:39<SeP>2025-03-08 05:07:30<SeP>2025-03-08 06:55:21<SeP>2025-03-08 08:43:12<SeP>2025-03-08 10:31:03<SeP>2025-03-08 12:18:54<SeP>2025-03-08 14:06:45<SeP>2025-03-08 15:54:36<SeP>2025-03-08 17:42:27<SeP>2025-03-08 19:30:18<SeP>2025-03-08 21:18:09<SeP>2025-03-08 23:06:00<SeP>2025-03-09 00:53:51<SeP>2025-03-09 03:41:42<SeP>2025-03-09 05:29:33<SeP>2025-03-09 07:17:24<SeP>2025-03-09 09:05:15<SeP>2025-03-09 10:53:06<SeP>2025-03-09 12:40:57<SeP>2025-03-09 14:28:48<SeP>2025-03-09 16:16:39<SeP>2025-03-09 18:04:30<SeP>2025-03-09 19:52:21<SeP>2025-03-09 21:40:12<SeP>2025-03-09 23:28:03<SeP>2025-03-10 01:15:54<SeP>2025-03-10 03:03:45<SeP>2025-03-10 04:51:36<SeP>2025-03-10 06:39:27<SeP>2025-03-10 08:27:18<SeP>2025-03-10 10:15:09<SeP>2025-03-10 12:03:00<SeP>2025-03-10 13:50:51<SeP>2025-03-10 15:38:42<SeP>2025-03-10 17:26:33<SeP>2025-03-10 19:14:24<SeP>2025-03-10 21:02:15<SeP>2025-03-10 22:50:06<SeP>2025-03-11 00:37:57<SeP>2025-03-11 02:25:48<SeP>2025-03-11 04:13:39<SeP>2025-03-11 06:01:30<SeP>2025-03-11 07:49:21<SeP>2025-03-11 09:37:12<SeP>2025-03-11 11:25:03<SeP>2025-03-11 13:12:54<SeP>2025-03-11 15:00:45<SeP>2025-03-11 16:48:36<SeP>2025-03-11 18:36:27<SeP>2025-03-11 20:24:18<SeP>2025-03-11 22:12:09";
  const item1Label       = "Scans";
  const item1Data        = "44<SeP>135<SeP>59<SeP>73<SeP>113<SeP>85<SeP>74<SeP>82<SeP>77<SeP>67<SeP>92<SeP>150<SeP>48<SeP>59<SeP>62<SeP>103<SeP>91<SeP>173<SeP>113<SeP>80<SeP>142<SeP>103<SeP>100<SeP>88<SeP>164<SeP>42<SeP>120<SeP>36<SeP>100<SeP>72<SeP>92<SeP>87<SeP>52<SeP>67<SeP>78<SeP>57<SeP>108<SeP>201<SeP>21<SeP>111<SeP>111<SeP>100<SeP>119<SeP>41<SeP>66<SeP>86<SeP>151<SeP>84<SeP>130<SeP>22<SeP>75<SeP>123<SeP>45<SeP>82<SeP>77<SeP>94<SeP>129<SeP>115<SeP>180<SeP>100<SeP>48<SeP>46<SeP>96<SeP>40<SeP>87<SeP>108<SeP>105<SeP>72<SeP>71<SeP>64<SeP>139<SeP>165<SeP>127<SeP>107<SeP>66<SeP>33<SeP>79<SeP>43<SeP>129<SeP>92<SeP>63<SeP>51<SeP>74<SeP>62<SeP>144<SeP>57<SeP>77<SeP>90<SeP>41<SeP>81<SeP>77<SeP>124<SeP>109<SeP>95<SeP>74<SeP>65<SeP>63<SeP>62<SeP>91<SeP>103<SeP>68<SeP>51<SeP>32<SeP>58<SeP>48<SeP>159<SeP>78<SeP>100<SeP>93<SeP>79<SeP>104<SeP>145<SeP>76<SeP>62<SeP>99<SeP>75<SeP>37<SeP>46<SeP>98<SeP>58<SeP>47<SeP>63<SeP>125<SeP>55<SeP>204<SeP>78<SeP>71<SeP>67<SeP>57<SeP>52<SeP>73<SeP>81<SeP>70<SeP>116<SeP>57<SeP>80<SeP>116<SeP>66<SeP>77<SeP>148<SeP>47<SeP>77<SeP>55<SeP>41<SeP>62<SeP>93<SeP>89<SeP>72<SeP>72<SeP>161<SeP>67<SeP>110<SeP>53<SeP>62<SeP>43<SeP>104<SeP>75<SeP>65<SeP>113<SeP>91<SeP>85<SeP>71<SeP>105<SeP>124<SeP>69<SeP>51<SeP>28<SeP>47<SeP>89<SeP>75<SeP>55<SeP>92<SeP>85<SeP>51<SeP>82<SeP>95<SeP>126<SeP>84<SeP>36<SeP>27<SeP>57<SeP>65<SeP>193<SeP>130<SeP>60<SeP>67<SeP>123<SeP>52<SeP>59<SeP>88<SeP>94<SeP>186<SeP>71<SeP>51<SeP>97<SeP>103<SeP>58<SeP>85<SeP>72<SeP>118<SeP>114<SeP>68<SeP>98<SeP>77<SeP>81<SeP>79<SeP>65<SeP>68<SeP>86<SeP>116<SeP>58<SeP>134<SeP>80<SeP>94<SeP>144<SeP>50<SeP>82<SeP>140<SeP>61<SeP>68<SeP>116<SeP>122<SeP>78<SeP>189<SeP>72<SeP>142<SeP>57<SeP>73<SeP>62<SeP>86<SeP>88<SeP>68<SeP>63<SeP>57<SeP>69<SeP>50<SeP>79<SeP>48<SeP>105<SeP>88<SeP>91<SeP>91<SeP>76<SeP>85<SeP>46<SeP>51<SeP>98<SeP>48<SeP>43<SeP>61<SeP>78<SeP>83<SeP>63<SeP>111<SeP>47<SeP>76<SeP>42<SeP>29<SeP>233<SeP>88<SeP>40<SeP>77<SeP>61<SeP>67<SeP>111<SeP>44<SeP>41<SeP>105<SeP>146<SeP>80<SeP>44<SeP>45<SeP>92<SeP>47<SeP>45<SeP>65<SeP>88<SeP>109<SeP>80<SeP>62<SeP>113<SeP>63<SeP>68<SeP>26<SeP>23<SeP>58<SeP>32<SeP>41<SeP>105<SeP>69<SeP>58<SeP>59<SeP>79<SeP>272<SeP>51<SeP>28<SeP>67<SeP>56<SeP>124<SeP>132<SeP>72<SeP>45<SeP>76<SeP>129<SeP>103<SeP>95<SeP>70<SeP>104<SeP>31<SeP>95<SeP>43<SeP>33<SeP>41<SeP>75<SeP>52<SeP>89<SeP>71<SeP>137<SeP>107<SeP>57<SeP>67<SeP>52<SeP>35<SeP>92<SeP>87<SeP>124<SeP>43<SeP>82<SeP>170<SeP>64<SeP>65<SeP>52<SeP>64<SeP>153<SeP>369<SeP>36<SeP>41<SeP>21<SeP>43<SeP>42<SeP>47<SeP>63<SeP>111<SeP>166<SeP>91<SeP>65<SeP>357<SeP>63<SeP>71<SeP>283<SeP>142<SeP>193<SeP>53<SeP>53<SeP>56<SeP>63<SeP>69<SeP>43<SeP>56<SeP>63<SeP>18<SeP>39<SeP>81<SeP>90<SeP>53<SeP>61<SeP>61<SeP>56<SeP>60<SeP>31<SeP>24<SeP>40<SeP>116<SeP>30<SeP>33<SeP>814<SeP>70<SeP>86<SeP>104<SeP>109<SeP>105<SeP>73<SeP>22<SeP>32<SeP>38<SeP>181<SeP>77<SeP>91<SeP>64<SeP>94<SeP>61<SeP>23<SeP>53<SeP>111<SeP>140<SeP>38<SeP>52<SeP>66<SeP>56<SeP>44";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "85<SeP>327<SeP>261<SeP>223<SeP>95<SeP>123<SeP>18<SeP>29<SeP>231<SeP>187<SeP>181<SeP>85<SeP>48<SeP>220<SeP>208<SeP>156<SeP>218<SeP>163<SeP>235<SeP>180<SeP>39<SeP>344<SeP>263<SeP>85<SeP>281<SeP>115<SeP>359<SeP>94<SeP>590<SeP>1680<SeP>3171<SeP>1969<SeP>460<SeP>246<SeP>383<SeP>158<SeP>622<SeP>323<SeP>174<SeP>70<SeP>55<SeP>40<SeP>627<SeP>25<SeP>319<SeP>114<SeP>264<SeP>141<SeP>527<SeP>665<SeP>121<SeP>571<SeP>225<SeP>69<SeP>275<SeP>178<SeP>485<SeP>278<SeP>222<SeP>358<SeP>88<SeP>310<SeP>367<SeP>124<SeP>401<SeP>169<SeP>154<SeP>110<SeP>205<SeP>100<SeP>744<SeP>91<SeP>185<SeP>161<SeP>231<SeP>96<SeP>43<SeP>144<SeP>429<SeP>128<SeP>151<SeP>56<SeP>39<SeP>129<SeP>439<SeP>175<SeP>159<SeP>112<SeP>375<SeP>172<SeP>294<SeP>562<SeP>102<SeP>321<SeP>244<SeP>299<SeP>233<SeP>256<SeP>436<SeP>129<SeP>368<SeP>191<SeP>34<SeP>278<SeP>389<SeP>17<SeP>143<SeP>303<SeP>401<SeP>98<SeP>356<SeP>136<SeP>74<SeP>337<SeP>131<SeP>254<SeP>280<SeP>213<SeP>204<SeP>18<SeP>255<SeP>122<SeP>349<SeP>318<SeP>65<SeP>72<SeP>93<SeP>56<SeP>67<SeP>165<SeP>332<SeP>208<SeP>156<SeP>137<SeP>242<SeP>189<SeP>119<SeP>50<SeP>174<SeP>7<SeP>17<SeP>258<SeP>233<SeP>243<SeP>696<SeP>536<SeP>235<SeP>730<SeP>338<SeP>611<SeP>192<SeP>379<SeP>355<SeP>515<SeP>439<SeP>305<SeP>479<SeP>1063<SeP>604<SeP>865<SeP>370<SeP>326<SeP>228<SeP>284<SeP>376<SeP>870<SeP>437<SeP>521<SeP>547<SeP>196<SeP>500<SeP>449<SeP>811<SeP>604<SeP>222<SeP>690<SeP>476<SeP>486<SeP>340<SeP>367<SeP>756<SeP>575<SeP>599<SeP>403<SeP>213<SeP>87<SeP>314<SeP>101<SeP>198<SeP>254<SeP>387<SeP>58<SeP>243<SeP>222<SeP>64<SeP>93<SeP>211<SeP>277<SeP>216<SeP>265<SeP>115<SeP>449<SeP>133<SeP>75<SeP>271<SeP>99<SeP>429<SeP>304<SeP>192<SeP>140<SeP>210<SeP>41<SeP>133<SeP>167<SeP>80<SeP>20<SeP>292<SeP>157<SeP>43<SeP>247<SeP>40<SeP>92<SeP>62<SeP>78<SeP>110<SeP>317<SeP>141<SeP>335<SeP>51<SeP>279<SeP>462<SeP>180<SeP>156<SeP>137<SeP>151<SeP>305<SeP>49<SeP>39<SeP>73<SeP>114<SeP>207<SeP>185<SeP>125<SeP>254<SeP>156<SeP>200<SeP>295<SeP>126<SeP>312<SeP>63<SeP>60<SeP>46<SeP>48<SeP>140<SeP>25<SeP>23<SeP>84<SeP>55<SeP>69<SeP>89<SeP>33<SeP>196<SeP>105<SeP>114<SeP>44<SeP>206<SeP>77<SeP>343<SeP>263<SeP>117<SeP>20<SeP>313<SeP>18<SeP>21<SeP>127<SeP>157<SeP>80<SeP>30<SeP>147<SeP>98<SeP>111<SeP>95<SeP>272<SeP>57<SeP>87<SeP>49<SeP>38<SeP>98<SeP>391<SeP>87<SeP>90<SeP>41<SeP>120<SeP>209<SeP>37<SeP>214<SeP>272<SeP>29<SeP>21<SeP>194<SeP>144<SeP>25<SeP>98<SeP>28<SeP>99<SeP>38<SeP>311<SeP>127<SeP>152<SeP>41<SeP>113<SeP>73<SeP>36<SeP>35<SeP>33<SeP>258<SeP>110<SeP>64<SeP>158<SeP>176<SeP>90<SeP>29<SeP>69<SeP>193<SeP>68<SeP>184<SeP>91<SeP>68<SeP>79<SeP>129<SeP>27<SeP>166<SeP>63<SeP>144<SeP>175<SeP>41<SeP>193<SeP>551<SeP>111<SeP>104<SeP>186<SeP>35<SeP>41<SeP>65<SeP>110<SeP>72<SeP>120<SeP>74<SeP>230<SeP>43<SeP>16<SeP>12<SeP>221<SeP>80<SeP>65<SeP>28<SeP>25<SeP>17<SeP>80<SeP>301<SeP>39<SeP>160<SeP>114<SeP>14<SeP>18<SeP>33<SeP>98<SeP>32<SeP>272<SeP>85<SeP>27<SeP>26<SeP>273<SeP>305<SeP>353<SeP>591<SeP>34<SeP>45<SeP>122<SeP>40<SeP>114<SeP>71<SeP>107<SeP>40<SeP>44<SeP>421<SeP>287<SeP>87<SeP>107<SeP>43<SeP>220<SeP>33<SeP>30<SeP>183<SeP>145<SeP>499<SeP>82<SeP>42<SeP>49<SeP>190";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 01:47:51<SeP>2025-02-10 03:35:42<SeP>2025-02-10 05:23:33<SeP>2025-02-10 07:11:24<SeP>2025-02-10 08:59:15<SeP>2025-02-10 10:47:06<SeP>2025-02-10 12:34:57<SeP>2025-02-10 14:22:48<SeP>2025-02-10 16:10:39<SeP>2025-02-10 17:58:30<SeP>2025-02-10 19:46:21<SeP>2025-02-10 21:34:12<SeP>2025-02-10 23:22:03<SeP>2025-02-11 01:09:54<SeP>2025-02-11 02:57:45<SeP>2025-02-11 04:45:36<SeP>2025-02-11 06:33:27<SeP>2025-02-11 08:21:18<SeP>2025-02-11 10:09:09<SeP>2025-02-11 11:57:00<SeP>2025-02-11 13:44:51<SeP>2025-02-11 15:32:42<SeP>2025-02-11 17:20:33<SeP>2025-02-11 19:08:24<SeP>2025-02-11 20:56:15<SeP>2025-02-11 22:44:06<SeP>2025-02-12 00:31:57<SeP>2025-02-12 02:19:48<SeP>2025-02-12 04:07:39<SeP>2025-02-12 05:55:30<SeP>2025-02-12 07:43:21<SeP>2025-02-12 09:31:12<SeP>2025-02-12 11:19:03<SeP>2025-02-12 13:06:54<SeP>2025-02-12 14:54:45<SeP>2025-02-12 16:42:36<SeP>2025-02-12 18:30:27<SeP>2025-02-12 20:18:18<SeP>2025-02-12 22:06:09<SeP>2025-02-12 23:54:00<SeP>2025-02-13 01:41:51<SeP>2025-02-13 03:29:42<SeP>2025-02-13 05:17:33<SeP>2025-02-13 07:05:24<SeP>2025-02-13 08:53:15<SeP>2025-02-13 10:41:06<SeP>2025-02-13 12:28:57<SeP>2025-02-13 14:16:48<SeP>2025-02-13 16:04:39<SeP>2025-02-13 17:52:30<SeP>2025-02-13 19:40:21<SeP>2025-02-13 21:28:12<SeP>2025-02-13 23:16:03<SeP>2025-02-14 01:03:54<SeP>2025-02-14 02:51:45<SeP>2025-02-14 04:39:36<SeP>2025-02-14 06:27:27<SeP>2025-02-14 08:15:18<SeP>2025-02-14 10:03:09<SeP>2025-02-14 11:51:00<SeP>2025-02-14 13:38:51<SeP>2025-02-14 15:26:42<SeP>2025-02-14 17:14:33<SeP>2025-02-14 19:02:24<SeP>2025-02-14 20:50:15<SeP>2025-02-14 22:38:06<SeP>2025-02-15 00:25:57<SeP>2025-02-15 02:13:48<SeP>2025-02-15 04:01:39<SeP>2025-02-15 05:49:30<SeP>2025-02-15 07:37:21<SeP>2025-02-15 09:25:12<SeP>2025-02-15 11:13:03<SeP>2025-02-15 13:00:54<SeP>2025-02-15 14:48:45<SeP>2025-02-15 16:36:36<SeP>2025-02-15 18:24:27<SeP>2025-02-15 20:12:18<SeP>2025-02-15 22:00:09<SeP>2025-02-15 23:48:00<SeP>2025-02-16 01:35:51<SeP>2025-02-16 03:23:42<SeP>2025-02-16 05:11:33<SeP>2025-02-16 06:59:24<SeP>2025-02-16 08:47:15<SeP>2025-02-16 10:35:06<SeP>2025-02-16 12:22:57<SeP>2025-02-16 14:10:48<SeP>2025-02-16 15:58:39<SeP>2025-02-16 17:46:30<SeP>2025-02-16 19:34:21<SeP>2025-02-16 21:22:12<SeP>2025-02-16 23:10:03<SeP>2025-02-17 00:57:54<SeP>2025-02-17 02:45:45<SeP>2025-02-17 04:33:36<SeP>2025-02-17 06:21:27<SeP>2025-02-17 08:09:18<SeP>2025-02-17 09:57:09<SeP>2025-02-17 11:45:00<SeP>2025-02-17 13:32:51<SeP>2025-02-17 15:20:42<SeP>2025-02-17 17:08:33<SeP>2025-02-17 18:56:24<SeP>2025-02-17 20:44:15<SeP>2025-02-17 22:32:06<SeP>2025-02-18 00:19:57<SeP>2025-02-18 02:07:48<SeP>2025-02-18 03:55:39<SeP>2025-02-18 05:43:30<SeP>2025-02-18 07:31:21<SeP>2025-02-18 09:19:12<SeP>2025-02-18 11:07:03<SeP>2025-02-18 12:54:54<SeP>2025-02-18 14:42:45<SeP>2025-02-18 16:30:36<SeP>2025-02-18 18:18:27<SeP>2025-02-18 20:06:18<SeP>2025-02-18 21:54:09<SeP>2025-02-18 23:42:00<SeP>2025-02-19 01:29:51<SeP>2025-02-19 03:17:42<SeP>2025-02-19 05:05:33<SeP>2025-02-19 06:53:24<SeP>2025-02-19 08:41:15<SeP>2025-02-19 10:29:06<SeP>2025-02-19 12:16:57<SeP>2025-02-19 14:04:48<SeP>2025-02-19 15:52:39<SeP>2025-02-19 17:40:30<SeP>2025-02-19 19:28:21<SeP>2025-02-19 21:16:12<SeP>2025-02-19 23:04:03<SeP>2025-02-20 00:51:54<SeP>2025-02-20 02:39:45<SeP>2025-02-20 04:27:36<SeP>2025-02-20 06:15:27<SeP>2025-02-20 08:03:18<SeP>2025-02-20 09:51:09<SeP>2025-02-20 11:39:00<SeP>2025-02-20 13:26:51<SeP>2025-02-20 15:14:42<SeP>2025-02-20 17:02:33<SeP>2025-02-20 18:50:24<SeP>2025-02-20 20:38:15<SeP>2025-02-20 22:26:06<SeP>2025-02-21 00:13:57<SeP>2025-02-21 02:01:48<SeP>2025-02-21 03:49:39<SeP>2025-02-21 05:37:30<SeP>2025-02-21 07:25:21<SeP>2025-02-21 09:13:12<SeP>2025-02-21 11:01:03<SeP>2025-02-21 12:48:54<SeP>2025-02-21 14:36:45<SeP>2025-02-21 16:24:36<SeP>2025-02-21 18:12:27<SeP>2025-02-21 20:00:18<SeP>2025-02-21 21:48:09<SeP>2025-02-21 23:36:00<SeP>2025-02-22 01:23:51<SeP>2025-02-22 03:11:42<SeP>2025-02-22 04:59:33<SeP>2025-02-22 06:47:24<SeP>2025-02-22 08:35:15<SeP>2025-02-22 10:23:06<SeP>2025-02-22 12:10:57<SeP>2025-02-22 13:58:48<SeP>2025-02-22 15:46:39<SeP>2025-02-22 17:34:30<SeP>2025-02-22 19:22:21<SeP>2025-02-22 21:10:12<SeP>2025-02-22 22:58:03<SeP>2025-02-23 00:45:54<SeP>2025-02-23 02:33:45<SeP>2025-02-23 04:21:36<SeP>2025-02-23 06:09:27<SeP>2025-02-23 07:57:18<SeP>2025-02-23 09:45:09<SeP>2025-02-23 11:33:00<SeP>2025-02-23 13:20:51<SeP>2025-02-23 15:08:42<SeP>2025-02-23 16:56:33<SeP>2025-02-23 18:44:24<SeP>2025-02-23 20:32:15<SeP>2025-02-23 22:20:06<SeP>2025-02-24 00:07:57<SeP>2025-02-24 01:55:48<SeP>2025-02-24 03:43:39<SeP>2025-02-24 05:31:30<SeP>2025-02-24 07:19:21<SeP>2025-02-24 09:07:12<SeP>2025-02-24 10:55:03<SeP>2025-02-24 12:42:54<SeP>2025-02-24 14:30:45<SeP>2025-02-24 16:18:36<SeP>2025-02-24 18:06:27<SeP>2025-02-24 19:54:18<SeP>2025-02-24 21:42:09<SeP>2025-02-24 23:30:00<SeP>2025-02-25 01:17:51<SeP>2025-02-25 03:05:42<SeP>2025-02-25 04:53:33<SeP>2025-02-25 06:41:24<SeP>2025-02-25 08:29:15<SeP>2025-02-25 10:17:06<SeP>2025-02-25 12:04:57<SeP>2025-02-25 13:52:48<SeP>2025-02-25 15:40:39<SeP>2025-02-25 17:28:30<SeP>2025-02-25 19:16:21<SeP>2025-02-25 21:04:12<SeP>2025-02-25 22:52:03<SeP>2025-02-26 00:39:54<SeP>2025-02-26 02:27:45<SeP>2025-02-26 04:15:36<SeP>2025-02-26 06:03:27<SeP>2025-02-26 07:51:18<SeP>2025-02-26 09:39:09<SeP>2025-02-26 11:27:00<SeP>2025-02-26 13:14:51<SeP>2025-02-26 15:02:42<SeP>2025-02-26 16:50:33<SeP>2025-02-26 18:38:24<SeP>2025-02-26 20:26:15<SeP>2025-02-26 22:14:06<SeP>2025-02-27 00:01:57<SeP>2025-02-27 01:49:48<SeP>2025-02-27 03:37:39<SeP>2025-02-27 05:25:30<SeP>2025-02-27 07:13:21<SeP>2025-02-27 09:01:12<SeP>2025-02-27 10:49:03<SeP>2025-02-27 12:36:54<SeP>2025-02-27 14:24:45<SeP>2025-02-27 16:12:36<SeP>2025-02-27 18:00:27<SeP>2025-02-27 19:48:18<SeP>2025-02-27 21:36:09<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:11:51<SeP>2025-02-28 02:59:42<SeP>2025-02-28 04:47:33<SeP>2025-02-28 06:35:24<SeP>2025-02-28 08:23:15<SeP>2025-02-28 10:11:06<SeP>2025-02-28 11:58:57<SeP>2025-02-28 13:46:48<SeP>2025-02-28 15:34:39<SeP>2025-02-28 17:22:30<SeP>2025-02-28 19:10:21<SeP>2025-02-28 20:58:12<SeP>2025-02-28 22:46:03<SeP>2025-03-01 00:33:54<SeP>2025-03-01 02:21:45<SeP>2025-03-01 04:09:36<SeP>2025-03-01 05:57:27<SeP>2025-03-01 07:45:18<SeP>2025-03-01 09:33:09<SeP>2025-03-01 11:21:00<SeP>2025-03-01 13:08:51<SeP>2025-03-01 14:56:42<SeP>2025-03-01 16:44:33<SeP>2025-03-01 18:32:24<SeP>2025-03-01 20:20:15<SeP>2025-03-01 22:08:06<SeP>2025-03-01 23:55:57<SeP>2025-03-02 01:43:48<SeP>2025-03-02 03:31:39<SeP>2025-03-02 05:19:30<SeP>2025-03-02 07:07:21<SeP>2025-03-02 08:55:12<SeP>2025-03-02 10:43:03<SeP>2025-03-02 12:30:54<SeP>2025-03-02 14:18:45<SeP>2025-03-02 16:06:36<SeP>2025-03-02 17:54:27<SeP>2025-03-02 19:42:18<SeP>2025-03-02 21:30:09<SeP>2025-03-02 23:18:00<SeP>2025-03-03 01:05:51<SeP>2025-03-03 02:53:42<SeP>2025-03-03 04:41:33<SeP>2025-03-03 06:29:24<SeP>2025-03-03 08:17:15<SeP>2025-03-03 10:05:06<SeP>2025-03-03 11:52:57<SeP>2025-03-03 13:40:48<SeP>2025-03-03 15:28:39<SeP>2025-03-03 17:16:30<SeP>2025-03-03 19:04:21<SeP>2025-03-03 20:52:12<SeP>2025-03-03 22:40:03<SeP>2025-03-04 00:27:54<SeP>2025-03-04 02:15:45<SeP>2025-03-04 04:03:36<SeP>2025-03-04 05:51:27<SeP>2025-03-04 07:39:18<SeP>2025-03-04 09:27:09<SeP>2025-03-04 11:15:00<SeP>2025-03-04 13:02:51<SeP>2025-03-04 14:50:42<SeP>2025-03-04 16:38:33<SeP>2025-03-04 18:26:24<SeP>2025-03-04 20:14:15<SeP>2025-03-04 22:02:06<SeP>2025-03-04 23:49:57<SeP>2025-03-05 01:37:48<SeP>2025-03-05 03:25:39<SeP>2025-03-05 05:13:30<SeP>2025-03-05 07:01:21<SeP>2025-03-05 08:49:12<SeP>2025-03-05 10:37:03<SeP>2025-03-05 12:24:54<SeP>2025-03-05 14:12:45<SeP>2025-03-05 16:00:36<SeP>2025-03-05 17:48:27<SeP>2025-03-05 19:36:18<SeP>2025-03-05 21:24:09<SeP>2025-03-05 23:12:00<SeP>2025-03-06 00:59:51<SeP>2025-03-06 02:47:42<SeP>2025-03-06 04:35:33<SeP>2025-03-06 06:23:24<SeP>2025-03-06 08:11:15<SeP>2025-03-06 09:59:06<SeP>2025-03-06 11:46:57<SeP>2025-03-06 13:34:48<SeP>2025-03-06 15:22:39<SeP>2025-03-06 17:10:30<SeP>2025-03-06 18:58:21<SeP>2025-03-06 20:46:12<SeP>2025-03-06 22:34:03<SeP>2025-03-07 00:21:54<SeP>2025-03-07 02:09:45<SeP>2025-03-07 03:57:36<SeP>2025-03-07 05:45:27<SeP>2025-03-07 07:33:18<SeP>2025-03-07 09:21:09<SeP>2025-03-07 11:09:00<SeP>2025-03-07 12:56:51<SeP>2025-03-07 14:44:42<SeP>2025-03-07 16:32:33<SeP>2025-03-07 18:20:24<SeP>2025-03-07 20:08:15<SeP>2025-03-07 21:56:06<SeP>2025-03-07 23:43:57<SeP>2025-03-08 01:31:48<SeP>2025-03-08 03:19:39<SeP>2025-03-08 05:07:30<SeP>2025-03-08 06:55:21<SeP>2025-03-08 08:43:12<SeP>2025-03-08 10:31:03<SeP>2025-03-08 12:18:54<SeP>2025-03-08 14:06:45<SeP>2025-03-08 15:54:36<SeP>2025-03-08 17:42:27<SeP>2025-03-08 19:30:18<SeP>2025-03-08 21:18:09<SeP>2025-03-08 23:06:00<SeP>2025-03-09 00:53:51<SeP>2025-03-09 03:41:42<SeP>2025-03-09 05:29:33<SeP>2025-03-09 07:17:24<SeP>2025-03-09 09:05:15<SeP>2025-03-09 10:53:06<SeP>2025-03-09 12:40:57<SeP>2025-03-09 14:28:48<SeP>2025-03-09 16:16:39<SeP>2025-03-09 18:04:30<SeP>2025-03-09 19:52:21<SeP>2025-03-09 21:40:12<SeP>2025-03-09 23:28:03<SeP>2025-03-10 01:15:54<SeP>2025-03-10 03:03:45<SeP>2025-03-10 04:51:36<SeP>2025-03-10 06:39:27<SeP>2025-03-10 08:27:18<SeP>2025-03-10 10:15:09<SeP>2025-03-10 12:03:00<SeP>2025-03-10 13:50:51<SeP>2025-03-10 15:38:42<SeP>2025-03-10 17:26:33<SeP>2025-03-10 19:14:24<SeP>2025-03-10 21:02:15<SeP>2025-03-10 22:50:06<SeP>2025-03-11 00:37:57<SeP>2025-03-11 02:25:48<SeP>2025-03-11 04:13:39<SeP>2025-03-11 06:01:30<SeP>2025-03-11 07:49:21<SeP>2025-03-11 09:37:12<SeP>2025-03-11 11:25:03<SeP>2025-03-11 13:12:54<SeP>2025-03-11 15:00:45<SeP>2025-03-11 16:48:36<SeP>2025-03-11 18:36:27<SeP>2025-03-11 20:24:18<SeP>2025-03-11 22:12:09";
  const itemLabel       = "Scans";
  const itemData        = "44<SeP>135<SeP>59<SeP>73<SeP>113<SeP>85<SeP>74<SeP>82<SeP>77<SeP>67<SeP>92<SeP>150<SeP>48<SeP>59<SeP>62<SeP>103<SeP>91<SeP>173<SeP>113<SeP>80<SeP>142<SeP>103<SeP>100<SeP>88<SeP>164<SeP>42<SeP>120<SeP>36<SeP>100<SeP>72<SeP>92<SeP>87<SeP>52<SeP>67<SeP>78<SeP>57<SeP>108<SeP>201<SeP>21<SeP>111<SeP>111<SeP>100<SeP>119<SeP>41<SeP>66<SeP>86<SeP>151<SeP>84<SeP>130<SeP>22<SeP>75<SeP>123<SeP>45<SeP>82<SeP>77<SeP>94<SeP>129<SeP>115<SeP>180<SeP>100<SeP>48<SeP>46<SeP>96<SeP>40<SeP>87<SeP>108<SeP>105<SeP>72<SeP>71<SeP>64<SeP>139<SeP>165<SeP>127<SeP>107<SeP>66<SeP>33<SeP>79<SeP>43<SeP>129<SeP>92<SeP>63<SeP>51<SeP>74<SeP>62<SeP>144<SeP>57<SeP>77<SeP>90<SeP>41<SeP>81<SeP>77<SeP>124<SeP>109<SeP>95<SeP>74<SeP>65<SeP>63<SeP>62<SeP>91<SeP>103<SeP>68<SeP>51<SeP>32<SeP>58<SeP>48<SeP>159<SeP>78<SeP>100<SeP>93<SeP>79<SeP>104<SeP>145<SeP>76<SeP>62<SeP>99<SeP>75<SeP>37<SeP>46<SeP>98<SeP>58<SeP>47<SeP>63<SeP>125<SeP>55<SeP>204<SeP>78<SeP>71<SeP>67<SeP>57<SeP>52<SeP>73<SeP>81<SeP>70<SeP>116<SeP>57<SeP>80<SeP>116<SeP>66<SeP>77<SeP>148<SeP>47<SeP>77<SeP>55<SeP>41<SeP>62<SeP>93<SeP>89<SeP>72<SeP>72<SeP>161<SeP>67<SeP>110<SeP>53<SeP>62<SeP>43<SeP>104<SeP>75<SeP>65<SeP>113<SeP>91<SeP>85<SeP>71<SeP>105<SeP>124<SeP>69<SeP>51<SeP>28<SeP>47<SeP>89<SeP>75<SeP>55<SeP>92<SeP>85<SeP>51<SeP>82<SeP>95<SeP>126<SeP>84<SeP>36<SeP>27<SeP>57<SeP>65<SeP>193<SeP>130<SeP>60<SeP>67<SeP>123<SeP>52<SeP>59<SeP>88<SeP>94<SeP>186<SeP>71<SeP>51<SeP>97<SeP>103<SeP>58<SeP>85<SeP>72<SeP>118<SeP>114<SeP>68<SeP>98<SeP>77<SeP>81<SeP>79<SeP>65<SeP>68<SeP>86<SeP>116<SeP>58<SeP>134<SeP>80<SeP>94<SeP>144<SeP>50<SeP>82<SeP>140<SeP>61<SeP>68<SeP>116<SeP>122<SeP>78<SeP>189<SeP>72<SeP>142<SeP>57<SeP>73<SeP>62<SeP>86<SeP>88<SeP>68<SeP>63<SeP>57<SeP>69<SeP>50<SeP>79<SeP>48<SeP>105<SeP>88<SeP>91<SeP>91<SeP>76<SeP>85<SeP>46<SeP>51<SeP>98<SeP>48<SeP>43<SeP>61<SeP>78<SeP>83<SeP>63<SeP>111<SeP>47<SeP>76<SeP>42<SeP>29<SeP>233<SeP>88<SeP>40<SeP>77<SeP>61<SeP>67<SeP>111<SeP>44<SeP>41<SeP>105<SeP>146<SeP>80<SeP>44<SeP>45<SeP>92<SeP>47<SeP>45<SeP>65<SeP>88<SeP>109<SeP>80<SeP>62<SeP>113<SeP>63<SeP>68<SeP>26<SeP>23<SeP>58<SeP>32<SeP>41<SeP>105<SeP>69<SeP>58<SeP>59<SeP>79<SeP>272<SeP>51<SeP>28<SeP>67<SeP>56<SeP>124<SeP>132<SeP>72<SeP>45<SeP>76<SeP>129<SeP>103<SeP>95<SeP>70<SeP>104<SeP>31<SeP>95<SeP>43<SeP>33<SeP>41<SeP>75<SeP>52<SeP>89<SeP>71<SeP>137<SeP>107<SeP>57<SeP>67<SeP>52<SeP>35<SeP>92<SeP>87<SeP>124<SeP>43<SeP>82<SeP>170<SeP>64<SeP>65<SeP>52<SeP>64<SeP>153<SeP>369<SeP>36<SeP>41<SeP>21<SeP>43<SeP>42<SeP>47<SeP>63<SeP>111<SeP>166<SeP>91<SeP>65<SeP>357<SeP>63<SeP>71<SeP>283<SeP>142<SeP>193<SeP>53<SeP>53<SeP>56<SeP>63<SeP>69<SeP>43<SeP>56<SeP>63<SeP>18<SeP>39<SeP>81<SeP>90<SeP>53<SeP>61<SeP>61<SeP>56<SeP>60<SeP>31<SeP>24<SeP>40<SeP>116<SeP>30<SeP>33<SeP>814<SeP>70<SeP>86<SeP>104<SeP>109<SeP>105<SeP>73<SeP>22<SeP>32<SeP>38<SeP>181<SeP>77<SeP>91<SeP>64<SeP>94<SeP>61<SeP>23<SeP>53<SeP>111<SeP>140<SeP>38<SeP>52<SeP>66<SeP>56<SeP>44";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 01:47:51<SeP>2025-02-10 03:35:42<SeP>2025-02-10 05:23:33<SeP>2025-02-10 07:11:24<SeP>2025-02-10 08:59:15<SeP>2025-02-10 10:47:06<SeP>2025-02-10 12:34:57<SeP>2025-02-10 14:22:48<SeP>2025-02-10 16:10:39<SeP>2025-02-10 17:58:30<SeP>2025-02-10 19:46:21<SeP>2025-02-10 21:34:12<SeP>2025-02-10 23:22:03<SeP>2025-02-11 01:09:54<SeP>2025-02-11 02:57:45<SeP>2025-02-11 04:45:36<SeP>2025-02-11 06:33:27<SeP>2025-02-11 08:21:18<SeP>2025-02-11 10:09:09<SeP>2025-02-11 11:57:00<SeP>2025-02-11 13:44:51<SeP>2025-02-11 15:32:42<SeP>2025-02-11 17:20:33<SeP>2025-02-11 19:08:24<SeP>2025-02-11 20:56:15<SeP>2025-02-11 22:44:06<SeP>2025-02-12 00:31:57<SeP>2025-02-12 02:19:48<SeP>2025-02-12 04:07:39<SeP>2025-02-12 05:55:30<SeP>2025-02-12 07:43:21<SeP>2025-02-12 09:31:12<SeP>2025-02-12 11:19:03<SeP>2025-02-12 13:06:54<SeP>2025-02-12 14:54:45<SeP>2025-02-12 16:42:36<SeP>2025-02-12 18:30:27<SeP>2025-02-12 20:18:18<SeP>2025-02-12 22:06:09<SeP>2025-02-12 23:54:00<SeP>2025-02-13 01:41:51<SeP>2025-02-13 03:29:42<SeP>2025-02-13 05:17:33<SeP>2025-02-13 07:05:24<SeP>2025-02-13 08:53:15<SeP>2025-02-13 10:41:06<SeP>2025-02-13 12:28:57<SeP>2025-02-13 14:16:48<SeP>2025-02-13 16:04:39<SeP>2025-02-13 17:52:30<SeP>2025-02-13 19:40:21<SeP>2025-02-13 21:28:12<SeP>2025-02-13 23:16:03<SeP>2025-02-14 01:03:54<SeP>2025-02-14 02:51:45<SeP>2025-02-14 04:39:36<SeP>2025-02-14 06:27:27<SeP>2025-02-14 08:15:18<SeP>2025-02-14 10:03:09<SeP>2025-02-14 11:51:00<SeP>2025-02-14 13:38:51<SeP>2025-02-14 15:26:42<SeP>2025-02-14 17:14:33<SeP>2025-02-14 19:02:24<SeP>2025-02-14 20:50:15<SeP>2025-02-14 22:38:06<SeP>2025-02-15 00:25:57<SeP>2025-02-15 02:13:48<SeP>2025-02-15 04:01:39<SeP>2025-02-15 05:49:30<SeP>2025-02-15 07:37:21<SeP>2025-02-15 09:25:12<SeP>2025-02-15 11:13:03<SeP>2025-02-15 13:00:54<SeP>2025-02-15 14:48:45<SeP>2025-02-15 16:36:36<SeP>2025-02-15 18:24:27<SeP>2025-02-15 20:12:18<SeP>2025-02-15 22:00:09<SeP>2025-02-15 23:48:00<SeP>2025-02-16 01:35:51<SeP>2025-02-16 03:23:42<SeP>2025-02-16 05:11:33<SeP>2025-02-16 06:59:24<SeP>2025-02-16 08:47:15<SeP>2025-02-16 10:35:06<SeP>2025-02-16 12:22:57<SeP>2025-02-16 14:10:48<SeP>2025-02-16 15:58:39<SeP>2025-02-16 17:46:30<SeP>2025-02-16 19:34:21<SeP>2025-02-16 21:22:12<SeP>2025-02-16 23:10:03<SeP>2025-02-17 00:57:54<SeP>2025-02-17 02:45:45<SeP>2025-02-17 04:33:36<SeP>2025-02-17 06:21:27<SeP>2025-02-17 08:09:18<SeP>2025-02-17 09:57:09<SeP>2025-02-17 11:45:00<SeP>2025-02-17 13:32:51<SeP>2025-02-17 15:20:42<SeP>2025-02-17 17:08:33<SeP>2025-02-17 18:56:24<SeP>2025-02-17 20:44:15<SeP>2025-02-17 22:32:06<SeP>2025-02-18 00:19:57<SeP>2025-02-18 02:07:48<SeP>2025-02-18 03:55:39<SeP>2025-02-18 05:43:30<SeP>2025-02-18 07:31:21<SeP>2025-02-18 09:19:12<SeP>2025-02-18 11:07:03<SeP>2025-02-18 12:54:54<SeP>2025-02-18 14:42:45<SeP>2025-02-18 16:30:36<SeP>2025-02-18 18:18:27<SeP>2025-02-18 20:06:18<SeP>2025-02-18 21:54:09<SeP>2025-02-18 23:42:00<SeP>2025-02-19 01:29:51<SeP>2025-02-19 03:17:42<SeP>2025-02-19 05:05:33<SeP>2025-02-19 06:53:24<SeP>2025-02-19 08:41:15<SeP>2025-02-19 10:29:06<SeP>2025-02-19 12:16:57<SeP>2025-02-19 14:04:48<SeP>2025-02-19 15:52:39<SeP>2025-02-19 17:40:30<SeP>2025-02-19 19:28:21<SeP>2025-02-19 21:16:12<SeP>2025-02-19 23:04:03<SeP>2025-02-20 00:51:54<SeP>2025-02-20 02:39:45<SeP>2025-02-20 04:27:36<SeP>2025-02-20 06:15:27<SeP>2025-02-20 08:03:18<SeP>2025-02-20 09:51:09<SeP>2025-02-20 11:39:00<SeP>2025-02-20 13:26:51<SeP>2025-02-20 15:14:42<SeP>2025-02-20 17:02:33<SeP>2025-02-20 18:50:24<SeP>2025-02-20 20:38:15<SeP>2025-02-20 22:26:06<SeP>2025-02-21 00:13:57<SeP>2025-02-21 02:01:48<SeP>2025-02-21 03:49:39<SeP>2025-02-21 05:37:30<SeP>2025-02-21 07:25:21<SeP>2025-02-21 09:13:12<SeP>2025-02-21 11:01:03<SeP>2025-02-21 12:48:54<SeP>2025-02-21 14:36:45<SeP>2025-02-21 16:24:36<SeP>2025-02-21 18:12:27<SeP>2025-02-21 20:00:18<SeP>2025-02-21 21:48:09<SeP>2025-02-21 23:36:00<SeP>2025-02-22 01:23:51<SeP>2025-02-22 03:11:42<SeP>2025-02-22 04:59:33<SeP>2025-02-22 06:47:24<SeP>2025-02-22 08:35:15<SeP>2025-02-22 10:23:06<SeP>2025-02-22 12:10:57<SeP>2025-02-22 13:58:48<SeP>2025-02-22 15:46:39<SeP>2025-02-22 17:34:30<SeP>2025-02-22 19:22:21<SeP>2025-02-22 21:10:12<SeP>2025-02-22 22:58:03<SeP>2025-02-23 00:45:54<SeP>2025-02-23 02:33:45<SeP>2025-02-23 04:21:36<SeP>2025-02-23 06:09:27<SeP>2025-02-23 07:57:18<SeP>2025-02-23 09:45:09<SeP>2025-02-23 11:33:00<SeP>2025-02-23 13:20:51<SeP>2025-02-23 15:08:42<SeP>2025-02-23 16:56:33<SeP>2025-02-23 18:44:24<SeP>2025-02-23 20:32:15<SeP>2025-02-23 22:20:06<SeP>2025-02-24 00:07:57<SeP>2025-02-24 01:55:48<SeP>2025-02-24 03:43:39<SeP>2025-02-24 05:31:30<SeP>2025-02-24 07:19:21<SeP>2025-02-24 09:07:12<SeP>2025-02-24 10:55:03<SeP>2025-02-24 12:42:54<SeP>2025-02-24 14:30:45<SeP>2025-02-24 16:18:36<SeP>2025-02-24 18:06:27<SeP>2025-02-24 19:54:18<SeP>2025-02-24 21:42:09<SeP>2025-02-24 23:30:00<SeP>2025-02-25 01:17:51<SeP>2025-02-25 03:05:42<SeP>2025-02-25 04:53:33<SeP>2025-02-25 06:41:24<SeP>2025-02-25 08:29:15<SeP>2025-02-25 10:17:06<SeP>2025-02-25 12:04:57<SeP>2025-02-25 13:52:48<SeP>2025-02-25 15:40:39<SeP>2025-02-25 17:28:30<SeP>2025-02-25 19:16:21<SeP>2025-02-25 21:04:12<SeP>2025-02-25 22:52:03<SeP>2025-02-26 00:39:54<SeP>2025-02-26 02:27:45<SeP>2025-02-26 04:15:36<SeP>2025-02-26 06:03:27<SeP>2025-02-26 07:51:18<SeP>2025-02-26 09:39:09<SeP>2025-02-26 11:27:00<SeP>2025-02-26 13:14:51<SeP>2025-02-26 15:02:42<SeP>2025-02-26 16:50:33<SeP>2025-02-26 18:38:24<SeP>2025-02-26 20:26:15<SeP>2025-02-26 22:14:06<SeP>2025-02-27 00:01:57<SeP>2025-02-27 01:49:48<SeP>2025-02-27 03:37:39<SeP>2025-02-27 05:25:30<SeP>2025-02-27 07:13:21<SeP>2025-02-27 09:01:12<SeP>2025-02-27 10:49:03<SeP>2025-02-27 12:36:54<SeP>2025-02-27 14:24:45<SeP>2025-02-27 16:12:36<SeP>2025-02-27 18:00:27<SeP>2025-02-27 19:48:18<SeP>2025-02-27 21:36:09<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:11:51<SeP>2025-02-28 02:59:42<SeP>2025-02-28 04:47:33<SeP>2025-02-28 06:35:24<SeP>2025-02-28 08:23:15<SeP>2025-02-28 10:11:06<SeP>2025-02-28 11:58:57<SeP>2025-02-28 13:46:48<SeP>2025-02-28 15:34:39<SeP>2025-02-28 17:22:30<SeP>2025-02-28 19:10:21<SeP>2025-02-28 20:58:12<SeP>2025-02-28 22:46:03<SeP>2025-03-01 00:33:54<SeP>2025-03-01 02:21:45<SeP>2025-03-01 04:09:36<SeP>2025-03-01 05:57:27<SeP>2025-03-01 07:45:18<SeP>2025-03-01 09:33:09<SeP>2025-03-01 11:21:00<SeP>2025-03-01 13:08:51<SeP>2025-03-01 14:56:42<SeP>2025-03-01 16:44:33<SeP>2025-03-01 18:32:24<SeP>2025-03-01 20:20:15<SeP>2025-03-01 22:08:06<SeP>2025-03-01 23:55:57<SeP>2025-03-02 01:43:48<SeP>2025-03-02 03:31:39<SeP>2025-03-02 05:19:30<SeP>2025-03-02 07:07:21<SeP>2025-03-02 08:55:12<SeP>2025-03-02 10:43:03<SeP>2025-03-02 12:30:54<SeP>2025-03-02 14:18:45<SeP>2025-03-02 16:06:36<SeP>2025-03-02 17:54:27<SeP>2025-03-02 19:42:18<SeP>2025-03-02 21:30:09<SeP>2025-03-02 23:18:00<SeP>2025-03-03 01:05:51<SeP>2025-03-03 02:53:42<SeP>2025-03-03 04:41:33<SeP>2025-03-03 06:29:24<SeP>2025-03-03 08:17:15<SeP>2025-03-03 10:05:06<SeP>2025-03-03 11:52:57<SeP>2025-03-03 13:40:48<SeP>2025-03-03 15:28:39<SeP>2025-03-03 17:16:30<SeP>2025-03-03 19:04:21<SeP>2025-03-03 20:52:12<SeP>2025-03-03 22:40:03<SeP>2025-03-04 00:27:54<SeP>2025-03-04 02:15:45<SeP>2025-03-04 04:03:36<SeP>2025-03-04 05:51:27<SeP>2025-03-04 07:39:18<SeP>2025-03-04 09:27:09<SeP>2025-03-04 11:15:00<SeP>2025-03-04 13:02:51<SeP>2025-03-04 14:50:42<SeP>2025-03-04 16:38:33<SeP>2025-03-04 18:26:24<SeP>2025-03-04 20:14:15<SeP>2025-03-04 22:02:06<SeP>2025-03-04 23:49:57<SeP>2025-03-05 01:37:48<SeP>2025-03-05 03:25:39<SeP>2025-03-05 05:13:30<SeP>2025-03-05 07:01:21<SeP>2025-03-05 08:49:12<SeP>2025-03-05 10:37:03<SeP>2025-03-05 12:24:54<SeP>2025-03-05 14:12:45<SeP>2025-03-05 16:00:36<SeP>2025-03-05 17:48:27<SeP>2025-03-05 19:36:18<SeP>2025-03-05 21:24:09<SeP>2025-03-05 23:12:00<SeP>2025-03-06 00:59:51<SeP>2025-03-06 02:47:42<SeP>2025-03-06 04:35:33<SeP>2025-03-06 06:23:24<SeP>2025-03-06 08:11:15<SeP>2025-03-06 09:59:06<SeP>2025-03-06 11:46:57<SeP>2025-03-06 13:34:48<SeP>2025-03-06 15:22:39<SeP>2025-03-06 17:10:30<SeP>2025-03-06 18:58:21<SeP>2025-03-06 20:46:12<SeP>2025-03-06 22:34:03<SeP>2025-03-07 00:21:54<SeP>2025-03-07 02:09:45<SeP>2025-03-07 03:57:36<SeP>2025-03-07 05:45:27<SeP>2025-03-07 07:33:18<SeP>2025-03-07 09:21:09<SeP>2025-03-07 11:09:00<SeP>2025-03-07 12:56:51<SeP>2025-03-07 14:44:42<SeP>2025-03-07 16:32:33<SeP>2025-03-07 18:20:24<SeP>2025-03-07 20:08:15<SeP>2025-03-07 21:56:06<SeP>2025-03-07 23:43:57<SeP>2025-03-08 01:31:48<SeP>2025-03-08 03:19:39<SeP>2025-03-08 05:07:30<SeP>2025-03-08 06:55:21<SeP>2025-03-08 08:43:12<SeP>2025-03-08 10:31:03<SeP>2025-03-08 12:18:54<SeP>2025-03-08 14:06:45<SeP>2025-03-08 15:54:36<SeP>2025-03-08 17:42:27<SeP>2025-03-08 19:30:18<SeP>2025-03-08 21:18:09<SeP>2025-03-08 23:06:00<SeP>2025-03-09 00:53:51<SeP>2025-03-09 03:41:42<SeP>2025-03-09 05:29:33<SeP>2025-03-09 07:17:24<SeP>2025-03-09 09:05:15<SeP>2025-03-09 10:53:06<SeP>2025-03-09 12:40:57<SeP>2025-03-09 14:28:48<SeP>2025-03-09 16:16:39<SeP>2025-03-09 18:04:30<SeP>2025-03-09 19:52:21<SeP>2025-03-09 21:40:12<SeP>2025-03-09 23:28:03<SeP>2025-03-10 01:15:54<SeP>2025-03-10 03:03:45<SeP>2025-03-10 04:51:36<SeP>2025-03-10 06:39:27<SeP>2025-03-10 08:27:18<SeP>2025-03-10 10:15:09<SeP>2025-03-10 12:03:00<SeP>2025-03-10 13:50:51<SeP>2025-03-10 15:38:42<SeP>2025-03-10 17:26:33<SeP>2025-03-10 19:14:24<SeP>2025-03-10 21:02:15<SeP>2025-03-10 22:50:06<SeP>2025-03-11 00:37:57<SeP>2025-03-11 02:25:48<SeP>2025-03-11 04:13:39<SeP>2025-03-11 06:01:30<SeP>2025-03-11 07:49:21<SeP>2025-03-11 09:37:12<SeP>2025-03-11 11:25:03<SeP>2025-03-11 13:12:54<SeP>2025-03-11 15:00:45<SeP>2025-03-11 16:48:36<SeP>2025-03-11 18:36:27<SeP>2025-03-11 20:24:18<SeP>2025-03-11 22:12:09";
  const itemLabel       = "Attacks";
  const itemData        = "85<SeP>327<SeP>261<SeP>223<SeP>95<SeP>123<SeP>18<SeP>29<SeP>231<SeP>187<SeP>181<SeP>85<SeP>48<SeP>220<SeP>208<SeP>156<SeP>218<SeP>163<SeP>235<SeP>180<SeP>39<SeP>344<SeP>263<SeP>85<SeP>281<SeP>115<SeP>359<SeP>94<SeP>590<SeP>1680<SeP>3171<SeP>1969<SeP>460<SeP>246<SeP>383<SeP>158<SeP>622<SeP>323<SeP>174<SeP>70<SeP>55<SeP>40<SeP>627<SeP>25<SeP>319<SeP>114<SeP>264<SeP>141<SeP>527<SeP>665<SeP>121<SeP>571<SeP>225<SeP>69<SeP>275<SeP>178<SeP>485<SeP>278<SeP>222<SeP>358<SeP>88<SeP>310<SeP>367<SeP>124<SeP>401<SeP>169<SeP>154<SeP>110<SeP>205<SeP>100<SeP>744<SeP>91<SeP>185<SeP>161<SeP>231<SeP>96<SeP>43<SeP>144<SeP>429<SeP>128<SeP>151<SeP>56<SeP>39<SeP>129<SeP>439<SeP>175<SeP>159<SeP>112<SeP>375<SeP>172<SeP>294<SeP>562<SeP>102<SeP>321<SeP>244<SeP>299<SeP>233<SeP>256<SeP>436<SeP>129<SeP>368<SeP>191<SeP>34<SeP>278<SeP>389<SeP>17<SeP>143<SeP>303<SeP>401<SeP>98<SeP>356<SeP>136<SeP>74<SeP>337<SeP>131<SeP>254<SeP>280<SeP>213<SeP>204<SeP>18<SeP>255<SeP>122<SeP>349<SeP>318<SeP>65<SeP>72<SeP>93<SeP>56<SeP>67<SeP>165<SeP>332<SeP>208<SeP>156<SeP>137<SeP>242<SeP>189<SeP>119<SeP>50<SeP>174<SeP>7<SeP>17<SeP>258<SeP>233<SeP>243<SeP>696<SeP>536<SeP>235<SeP>730<SeP>338<SeP>611<SeP>192<SeP>379<SeP>355<SeP>515<SeP>439<SeP>305<SeP>479<SeP>1063<SeP>604<SeP>865<SeP>370<SeP>326<SeP>228<SeP>284<SeP>376<SeP>870<SeP>437<SeP>521<SeP>547<SeP>196<SeP>500<SeP>449<SeP>811<SeP>604<SeP>222<SeP>690<SeP>476<SeP>486<SeP>340<SeP>367<SeP>756<SeP>575<SeP>599<SeP>403<SeP>213<SeP>87<SeP>314<SeP>101<SeP>198<SeP>254<SeP>387<SeP>58<SeP>243<SeP>222<SeP>64<SeP>93<SeP>211<SeP>277<SeP>216<SeP>265<SeP>115<SeP>449<SeP>133<SeP>75<SeP>271<SeP>99<SeP>429<SeP>304<SeP>192<SeP>140<SeP>210<SeP>41<SeP>133<SeP>167<SeP>80<SeP>20<SeP>292<SeP>157<SeP>43<SeP>247<SeP>40<SeP>92<SeP>62<SeP>78<SeP>110<SeP>317<SeP>141<SeP>335<SeP>51<SeP>279<SeP>462<SeP>180<SeP>156<SeP>137<SeP>151<SeP>305<SeP>49<SeP>39<SeP>73<SeP>114<SeP>207<SeP>185<SeP>125<SeP>254<SeP>156<SeP>200<SeP>295<SeP>126<SeP>312<SeP>63<SeP>60<SeP>46<SeP>48<SeP>140<SeP>25<SeP>23<SeP>84<SeP>55<SeP>69<SeP>89<SeP>33<SeP>196<SeP>105<SeP>114<SeP>44<SeP>206<SeP>77<SeP>343<SeP>263<SeP>117<SeP>20<SeP>313<SeP>18<SeP>21<SeP>127<SeP>157<SeP>80<SeP>30<SeP>147<SeP>98<SeP>111<SeP>95<SeP>272<SeP>57<SeP>87<SeP>49<SeP>38<SeP>98<SeP>391<SeP>87<SeP>90<SeP>41<SeP>120<SeP>209<SeP>37<SeP>214<SeP>272<SeP>29<SeP>21<SeP>194<SeP>144<SeP>25<SeP>98<SeP>28<SeP>99<SeP>38<SeP>311<SeP>127<SeP>152<SeP>41<SeP>113<SeP>73<SeP>36<SeP>35<SeP>33<SeP>258<SeP>110<SeP>64<SeP>158<SeP>176<SeP>90<SeP>29<SeP>69<SeP>193<SeP>68<SeP>184<SeP>91<SeP>68<SeP>79<SeP>129<SeP>27<SeP>166<SeP>63<SeP>144<SeP>175<SeP>41<SeP>193<SeP>551<SeP>111<SeP>104<SeP>186<SeP>35<SeP>41<SeP>65<SeP>110<SeP>72<SeP>120<SeP>74<SeP>230<SeP>43<SeP>16<SeP>12<SeP>221<SeP>80<SeP>65<SeP>28<SeP>25<SeP>17<SeP>80<SeP>301<SeP>39<SeP>160<SeP>114<SeP>14<SeP>18<SeP>33<SeP>98<SeP>32<SeP>272<SeP>85<SeP>27<SeP>26<SeP>273<SeP>305<SeP>353<SeP>591<SeP>34<SeP>45<SeP>122<SeP>40<SeP>114<SeP>71<SeP>107<SeP>40<SeP>44<SeP>421<SeP>287<SeP>87<SeP>107<SeP>43<SeP>220<SeP>33<SeP>30<SeP>183<SeP>145<SeP>499<SeP>82<SeP>42<SeP>49<SeP>190";
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
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 01:47:51<SeP>2025-02-10 03:35:42<SeP>2025-02-10 05:23:33<SeP>2025-02-10 07:11:24<SeP>2025-02-10 08:59:15<SeP>2025-02-10 10:47:06<SeP>2025-02-10 12:34:57<SeP>2025-02-10 14:22:48<SeP>2025-02-10 16:10:39<SeP>2025-02-10 17:58:30<SeP>2025-02-10 19:46:21<SeP>2025-02-10 21:34:12<SeP>2025-02-10 23:22:03<SeP>2025-02-11 01:09:54<SeP>2025-02-11 02:57:45<SeP>2025-02-11 04:45:36<SeP>2025-02-11 06:33:27<SeP>2025-02-11 08:21:18<SeP>2025-02-11 10:09:09<SeP>2025-02-11 11:57:00<SeP>2025-02-11 13:44:51<SeP>2025-02-11 15:32:42<SeP>2025-02-11 17:20:33<SeP>2025-02-11 19:08:24<SeP>2025-02-11 20:56:15<SeP>2025-02-11 22:44:06<SeP>2025-02-12 00:31:57<SeP>2025-02-12 02:19:48<SeP>2025-02-12 04:07:39<SeP>2025-02-12 05:55:30<SeP>2025-02-12 07:43:21<SeP>2025-02-12 09:31:12<SeP>2025-02-12 11:19:03<SeP>2025-02-12 13:06:54<SeP>2025-02-12 14:54:45<SeP>2025-02-12 16:42:36<SeP>2025-02-12 18:30:27<SeP>2025-02-12 20:18:18<SeP>2025-02-12 22:06:09<SeP>2025-02-12 23:54:00<SeP>2025-02-13 01:41:51<SeP>2025-02-13 03:29:42<SeP>2025-02-13 05:17:33<SeP>2025-02-13 07:05:24<SeP>2025-02-13 08:53:15<SeP>2025-02-13 10:41:06<SeP>2025-02-13 12:28:57<SeP>2025-02-13 14:16:48<SeP>2025-02-13 16:04:39<SeP>2025-02-13 17:52:30<SeP>2025-02-13 19:40:21<SeP>2025-02-13 21:28:12<SeP>2025-02-13 23:16:03<SeP>2025-02-14 01:03:54<SeP>2025-02-14 02:51:45<SeP>2025-02-14 04:39:36<SeP>2025-02-14 06:27:27<SeP>2025-02-14 08:15:18<SeP>2025-02-14 10:03:09<SeP>2025-02-14 11:51:00<SeP>2025-02-14 13:38:51<SeP>2025-02-14 15:26:42<SeP>2025-02-14 17:14:33<SeP>2025-02-14 19:02:24<SeP>2025-02-14 20:50:15<SeP>2025-02-14 22:38:06<SeP>2025-02-15 00:25:57<SeP>2025-02-15 02:13:48<SeP>2025-02-15 04:01:39<SeP>2025-02-15 05:49:30<SeP>2025-02-15 07:37:21<SeP>2025-02-15 09:25:12<SeP>2025-02-15 11:13:03<SeP>2025-02-15 13:00:54<SeP>2025-02-15 14:48:45<SeP>2025-02-15 16:36:36<SeP>2025-02-15 18:24:27<SeP>2025-02-15 20:12:18<SeP>2025-02-15 22:00:09<SeP>2025-02-15 23:48:00<SeP>2025-02-16 01:35:51<SeP>2025-02-16 03:23:42<SeP>2025-02-16 05:11:33<SeP>2025-02-16 06:59:24<SeP>2025-02-16 08:47:15<SeP>2025-02-16 10:35:06<SeP>2025-02-16 12:22:57<SeP>2025-02-16 14:10:48<SeP>2025-02-16 15:58:39<SeP>2025-02-16 17:46:30<SeP>2025-02-16 19:34:21<SeP>2025-02-16 21:22:12<SeP>2025-02-16 23:10:03<SeP>2025-02-17 00:57:54<SeP>2025-02-17 02:45:45<SeP>2025-02-17 04:33:36<SeP>2025-02-17 06:21:27<SeP>2025-02-17 08:09:18<SeP>2025-02-17 09:57:09<SeP>2025-02-17 11:45:00<SeP>2025-02-17 13:32:51<SeP>2025-02-17 15:20:42<SeP>2025-02-17 17:08:33<SeP>2025-02-17 18:56:24<SeP>2025-02-17 20:44:15<SeP>2025-02-17 22:32:06<SeP>2025-02-18 00:19:57<SeP>2025-02-18 02:07:48<SeP>2025-02-18 03:55:39<SeP>2025-02-18 05:43:30<SeP>2025-02-18 07:31:21<SeP>2025-02-18 09:19:12<SeP>2025-02-18 11:07:03<SeP>2025-02-18 12:54:54<SeP>2025-02-18 14:42:45<SeP>2025-02-18 16:30:36<SeP>2025-02-18 18:18:27<SeP>2025-02-18 20:06:18<SeP>2025-02-18 21:54:09<SeP>2025-02-18 23:42:00<SeP>2025-02-19 01:29:51<SeP>2025-02-19 03:17:42<SeP>2025-02-19 05:05:33<SeP>2025-02-19 06:53:24<SeP>2025-02-19 08:41:15<SeP>2025-02-19 10:29:06<SeP>2025-02-19 12:16:57<SeP>2025-02-19 14:04:48<SeP>2025-02-19 15:52:39<SeP>2025-02-19 17:40:30<SeP>2025-02-19 19:28:21<SeP>2025-02-19 21:16:12<SeP>2025-02-19 23:04:03<SeP>2025-02-20 00:51:54<SeP>2025-02-20 02:39:45<SeP>2025-02-20 04:27:36<SeP>2025-02-20 06:15:27<SeP>2025-02-20 08:03:18<SeP>2025-02-20 09:51:09<SeP>2025-02-20 11:39:00<SeP>2025-02-20 13:26:51<SeP>2025-02-20 15:14:42<SeP>2025-02-20 17:02:33<SeP>2025-02-20 18:50:24<SeP>2025-02-20 20:38:15<SeP>2025-02-20 22:26:06<SeP>2025-02-21 00:13:57<SeP>2025-02-21 02:01:48<SeP>2025-02-21 03:49:39<SeP>2025-02-21 05:37:30<SeP>2025-02-21 07:25:21<SeP>2025-02-21 09:13:12<SeP>2025-02-21 11:01:03<SeP>2025-02-21 12:48:54<SeP>2025-02-21 14:36:45<SeP>2025-02-21 16:24:36<SeP>2025-02-21 18:12:27<SeP>2025-02-21 20:00:18<SeP>2025-02-21 21:48:09<SeP>2025-02-21 23:36:00<SeP>2025-02-22 01:23:51<SeP>2025-02-22 03:11:42<SeP>2025-02-22 04:59:33<SeP>2025-02-22 06:47:24<SeP>2025-02-22 08:35:15<SeP>2025-02-22 10:23:06<SeP>2025-02-22 12:10:57<SeP>2025-02-22 13:58:48<SeP>2025-02-22 15:46:39<SeP>2025-02-22 17:34:30<SeP>2025-02-22 19:22:21<SeP>2025-02-22 21:10:12<SeP>2025-02-22 22:58:03<SeP>2025-02-23 00:45:54<SeP>2025-02-23 02:33:45<SeP>2025-02-23 04:21:36<SeP>2025-02-23 06:09:27<SeP>2025-02-23 07:57:18<SeP>2025-02-23 09:45:09<SeP>2025-02-23 11:33:00<SeP>2025-02-23 13:20:51<SeP>2025-02-23 15:08:42<SeP>2025-02-23 16:56:33<SeP>2025-02-23 18:44:24<SeP>2025-02-23 20:32:15<SeP>2025-02-23 22:20:06<SeP>2025-02-24 00:07:57<SeP>2025-02-24 01:55:48<SeP>2025-02-24 03:43:39<SeP>2025-02-24 05:31:30<SeP>2025-02-24 07:19:21<SeP>2025-02-24 09:07:12<SeP>2025-02-24 10:55:03<SeP>2025-02-24 12:42:54<SeP>2025-02-24 14:30:45<SeP>2025-02-24 16:18:36<SeP>2025-02-24 18:06:27<SeP>2025-02-24 19:54:18<SeP>2025-02-24 21:42:09<SeP>2025-02-24 23:30:00<SeP>2025-02-25 01:17:51<SeP>2025-02-25 03:05:42<SeP>2025-02-25 04:53:33<SeP>2025-02-25 06:41:24<SeP>2025-02-25 08:29:15<SeP>2025-02-25 10:17:06<SeP>2025-02-25 12:04:57<SeP>2025-02-25 13:52:48<SeP>2025-02-25 15:40:39<SeP>2025-02-25 17:28:30<SeP>2025-02-25 19:16:21<SeP>2025-02-25 21:04:12<SeP>2025-02-25 22:52:03<SeP>2025-02-26 00:39:54<SeP>2025-02-26 02:27:45<SeP>2025-02-26 04:15:36<SeP>2025-02-26 06:03:27<SeP>2025-02-26 07:51:18<SeP>2025-02-26 09:39:09<SeP>2025-02-26 11:27:00<SeP>2025-02-26 13:14:51<SeP>2025-02-26 15:02:42<SeP>2025-02-26 16:50:33<SeP>2025-02-26 18:38:24<SeP>2025-02-26 20:26:15<SeP>2025-02-26 22:14:06<SeP>2025-02-27 00:01:57<SeP>2025-02-27 01:49:48<SeP>2025-02-27 03:37:39<SeP>2025-02-27 05:25:30<SeP>2025-02-27 07:13:21<SeP>2025-02-27 09:01:12<SeP>2025-02-27 10:49:03<SeP>2025-02-27 12:36:54<SeP>2025-02-27 14:24:45<SeP>2025-02-27 16:12:36<SeP>2025-02-27 18:00:27<SeP>2025-02-27 19:48:18<SeP>2025-02-27 21:36:09<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:11:51<SeP>2025-02-28 02:59:42<SeP>2025-02-28 04:47:33<SeP>2025-02-28 06:35:24<SeP>2025-02-28 08:23:15<SeP>2025-02-28 10:11:06<SeP>2025-02-28 11:58:57<SeP>2025-02-28 13:46:48<SeP>2025-02-28 15:34:39<SeP>2025-02-28 17:22:30<SeP>2025-02-28 19:10:21<SeP>2025-02-28 20:58:12<SeP>2025-02-28 22:46:03<SeP>2025-03-01 00:33:54<SeP>2025-03-01 02:21:45<SeP>2025-03-01 04:09:36<SeP>2025-03-01 05:57:27<SeP>2025-03-01 07:45:18<SeP>2025-03-01 09:33:09<SeP>2025-03-01 11:21:00<SeP>2025-03-01 13:08:51<SeP>2025-03-01 14:56:42<SeP>2025-03-01 16:44:33<SeP>2025-03-01 18:32:24<SeP>2025-03-01 20:20:15<SeP>2025-03-01 22:08:06<SeP>2025-03-01 23:55:57<SeP>2025-03-02 01:43:48<SeP>2025-03-02 03:31:39<SeP>2025-03-02 05:19:30<SeP>2025-03-02 07:07:21<SeP>2025-03-02 08:55:12<SeP>2025-03-02 10:43:03<SeP>2025-03-02 12:30:54<SeP>2025-03-02 14:18:45<SeP>2025-03-02 16:06:36<SeP>2025-03-02 17:54:27<SeP>2025-03-02 19:42:18<SeP>2025-03-02 21:30:09<SeP>2025-03-02 23:18:00<SeP>2025-03-03 01:05:51<SeP>2025-03-03 02:53:42<SeP>2025-03-03 04:41:33<SeP>2025-03-03 06:29:24<SeP>2025-03-03 08:17:15<SeP>2025-03-03 10:05:06<SeP>2025-03-03 11:52:57<SeP>2025-03-03 13:40:48<SeP>2025-03-03 15:28:39<SeP>2025-03-03 17:16:30<SeP>2025-03-03 19:04:21<SeP>2025-03-03 20:52:12<SeP>2025-03-03 22:40:03<SeP>2025-03-04 00:27:54<SeP>2025-03-04 02:15:45<SeP>2025-03-04 04:03:36<SeP>2025-03-04 05:51:27<SeP>2025-03-04 07:39:18<SeP>2025-03-04 09:27:09<SeP>2025-03-04 11:15:00<SeP>2025-03-04 13:02:51<SeP>2025-03-04 14:50:42<SeP>2025-03-04 16:38:33<SeP>2025-03-04 18:26:24<SeP>2025-03-04 20:14:15<SeP>2025-03-04 22:02:06<SeP>2025-03-04 23:49:57<SeP>2025-03-05 01:37:48<SeP>2025-03-05 03:25:39<SeP>2025-03-05 05:13:30<SeP>2025-03-05 07:01:21<SeP>2025-03-05 08:49:12<SeP>2025-03-05 10:37:03<SeP>2025-03-05 12:24:54<SeP>2025-03-05 14:12:45<SeP>2025-03-05 16:00:36<SeP>2025-03-05 17:48:27<SeP>2025-03-05 19:36:18<SeP>2025-03-05 21:24:09<SeP>2025-03-05 23:12:00<SeP>2025-03-06 00:59:51<SeP>2025-03-06 02:47:42<SeP>2025-03-06 04:35:33<SeP>2025-03-06 06:23:24<SeP>2025-03-06 08:11:15<SeP>2025-03-06 09:59:06<SeP>2025-03-06 11:46:57<SeP>2025-03-06 13:34:48<SeP>2025-03-06 15:22:39<SeP>2025-03-06 17:10:30<SeP>2025-03-06 18:58:21<SeP>2025-03-06 20:46:12<SeP>2025-03-06 22:34:03<SeP>2025-03-07 00:21:54<SeP>2025-03-07 02:09:45<SeP>2025-03-07 03:57:36<SeP>2025-03-07 05:45:27<SeP>2025-03-07 07:33:18<SeP>2025-03-07 09:21:09<SeP>2025-03-07 11:09:00<SeP>2025-03-07 12:56:51<SeP>2025-03-07 14:44:42<SeP>2025-03-07 16:32:33<SeP>2025-03-07 18:20:24<SeP>2025-03-07 20:08:15<SeP>2025-03-07 21:56:06<SeP>2025-03-07 23:43:57<SeP>2025-03-08 01:31:48<SeP>2025-03-08 03:19:39<SeP>2025-03-08 05:07:30<SeP>2025-03-08 06:55:21<SeP>2025-03-08 08:43:12<SeP>2025-03-08 10:31:03<SeP>2025-03-08 12:18:54<SeP>2025-03-08 14:06:45<SeP>2025-03-08 15:54:36<SeP>2025-03-08 17:42:27<SeP>2025-03-08 19:30:18<SeP>2025-03-08 21:18:09<SeP>2025-03-08 23:06:00<SeP>2025-03-09 00:53:51<SeP>2025-03-09 03:41:42<SeP>2025-03-09 05:29:33<SeP>2025-03-09 07:17:24<SeP>2025-03-09 09:05:15<SeP>2025-03-09 10:53:06<SeP>2025-03-09 12:40:57<SeP>2025-03-09 14:28:48<SeP>2025-03-09 16:16:39<SeP>2025-03-09 18:04:30<SeP>2025-03-09 19:52:21<SeP>2025-03-09 21:40:12<SeP>2025-03-09 23:28:03<SeP>2025-03-10 01:15:54<SeP>2025-03-10 03:03:45<SeP>2025-03-10 04:51:36<SeP>2025-03-10 06:39:27<SeP>2025-03-10 08:27:18<SeP>2025-03-10 10:15:09<SeP>2025-03-10 12:03:00<SeP>2025-03-10 13:50:51<SeP>2025-03-10 15:38:42<SeP>2025-03-10 17:26:33<SeP>2025-03-10 19:14:24<SeP>2025-03-10 21:02:15<SeP>2025-03-10 22:50:06<SeP>2025-03-11 00:37:57<SeP>2025-03-11 02:25:48<SeP>2025-03-11 04:13:39<SeP>2025-03-11 06:01:30<SeP>2025-03-11 07:49:21<SeP>2025-03-11 09:37:12<SeP>2025-03-11 11:25:03<SeP>2025-03-11 13:12:54<SeP>2025-03-11 15:00:45<SeP>2025-03-11 16:48:36<SeP>2025-03-11 18:36:27<SeP>2025-03-11 20:24:18<SeP>2025-03-11 22:12:09";
  const item1Label       = "Escaneos";
  const item1Data        = "44<SeP>135<SeP>59<SeP>73<SeP>113<SeP>85<SeP>74<SeP>82<SeP>77<SeP>67<SeP>92<SeP>150<SeP>48<SeP>59<SeP>62<SeP>103<SeP>91<SeP>173<SeP>113<SeP>80<SeP>142<SeP>103<SeP>100<SeP>88<SeP>164<SeP>42<SeP>120<SeP>36<SeP>100<SeP>72<SeP>92<SeP>87<SeP>52<SeP>67<SeP>78<SeP>57<SeP>108<SeP>201<SeP>21<SeP>111<SeP>111<SeP>100<SeP>119<SeP>41<SeP>66<SeP>86<SeP>151<SeP>84<SeP>130<SeP>22<SeP>75<SeP>123<SeP>45<SeP>82<SeP>77<SeP>94<SeP>129<SeP>115<SeP>180<SeP>100<SeP>48<SeP>46<SeP>96<SeP>40<SeP>87<SeP>108<SeP>105<SeP>72<SeP>71<SeP>64<SeP>139<SeP>165<SeP>127<SeP>107<SeP>66<SeP>33<SeP>79<SeP>43<SeP>129<SeP>92<SeP>63<SeP>51<SeP>74<SeP>62<SeP>144<SeP>57<SeP>77<SeP>90<SeP>41<SeP>81<SeP>77<SeP>124<SeP>109<SeP>95<SeP>74<SeP>65<SeP>63<SeP>62<SeP>91<SeP>103<SeP>68<SeP>51<SeP>32<SeP>58<SeP>48<SeP>159<SeP>78<SeP>100<SeP>93<SeP>79<SeP>104<SeP>145<SeP>76<SeP>62<SeP>99<SeP>75<SeP>37<SeP>46<SeP>98<SeP>58<SeP>47<SeP>63<SeP>125<SeP>55<SeP>204<SeP>78<SeP>71<SeP>67<SeP>57<SeP>52<SeP>73<SeP>81<SeP>70<SeP>116<SeP>57<SeP>80<SeP>116<SeP>66<SeP>77<SeP>148<SeP>47<SeP>77<SeP>55<SeP>41<SeP>62<SeP>93<SeP>89<SeP>72<SeP>72<SeP>161<SeP>67<SeP>110<SeP>53<SeP>62<SeP>43<SeP>104<SeP>75<SeP>65<SeP>113<SeP>91<SeP>85<SeP>71<SeP>105<SeP>124<SeP>69<SeP>51<SeP>28<SeP>47<SeP>89<SeP>75<SeP>55<SeP>92<SeP>85<SeP>51<SeP>82<SeP>95<SeP>126<SeP>84<SeP>36<SeP>27<SeP>57<SeP>65<SeP>193<SeP>130<SeP>60<SeP>67<SeP>123<SeP>52<SeP>59<SeP>88<SeP>94<SeP>186<SeP>71<SeP>51<SeP>97<SeP>103<SeP>58<SeP>85<SeP>72<SeP>118<SeP>114<SeP>68<SeP>98<SeP>77<SeP>81<SeP>79<SeP>65<SeP>68<SeP>86<SeP>116<SeP>58<SeP>134<SeP>80<SeP>94<SeP>144<SeP>50<SeP>82<SeP>140<SeP>61<SeP>68<SeP>116<SeP>122<SeP>78<SeP>189<SeP>72<SeP>142<SeP>57<SeP>73<SeP>62<SeP>86<SeP>88<SeP>68<SeP>63<SeP>57<SeP>69<SeP>50<SeP>79<SeP>48<SeP>105<SeP>88<SeP>91<SeP>91<SeP>76<SeP>85<SeP>46<SeP>51<SeP>98<SeP>48<SeP>43<SeP>61<SeP>78<SeP>83<SeP>63<SeP>111<SeP>47<SeP>76<SeP>42<SeP>29<SeP>233<SeP>88<SeP>40<SeP>77<SeP>61<SeP>67<SeP>111<SeP>44<SeP>41<SeP>105<SeP>146<SeP>80<SeP>44<SeP>45<SeP>92<SeP>47<SeP>45<SeP>65<SeP>88<SeP>109<SeP>80<SeP>62<SeP>113<SeP>63<SeP>68<SeP>26<SeP>23<SeP>58<SeP>32<SeP>41<SeP>105<SeP>69<SeP>58<SeP>59<SeP>79<SeP>272<SeP>51<SeP>28<SeP>67<SeP>56<SeP>124<SeP>132<SeP>72<SeP>45<SeP>76<SeP>129<SeP>103<SeP>95<SeP>70<SeP>104<SeP>31<SeP>95<SeP>43<SeP>33<SeP>41<SeP>75<SeP>52<SeP>89<SeP>71<SeP>137<SeP>107<SeP>57<SeP>67<SeP>52<SeP>35<SeP>92<SeP>87<SeP>124<SeP>43<SeP>82<SeP>170<SeP>64<SeP>65<SeP>52<SeP>64<SeP>153<SeP>369<SeP>36<SeP>41<SeP>21<SeP>43<SeP>42<SeP>47<SeP>63<SeP>111<SeP>166<SeP>91<SeP>65<SeP>357<SeP>63<SeP>71<SeP>283<SeP>142<SeP>193<SeP>53<SeP>53<SeP>56<SeP>63<SeP>69<SeP>43<SeP>56<SeP>63<SeP>18<SeP>39<SeP>81<SeP>90<SeP>53<SeP>61<SeP>61<SeP>56<SeP>60<SeP>31<SeP>24<SeP>40<SeP>116<SeP>30<SeP>33<SeP>814<SeP>70<SeP>86<SeP>104<SeP>109<SeP>105<SeP>73<SeP>22<SeP>32<SeP>38<SeP>181<SeP>77<SeP>91<SeP>64<SeP>94<SeP>61<SeP>23<SeP>53<SeP>111<SeP>140<SeP>38<SeP>52<SeP>66<SeP>56<SeP>44";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "85<SeP>327<SeP>261<SeP>223<SeP>95<SeP>123<SeP>18<SeP>29<SeP>231<SeP>187<SeP>181<SeP>85<SeP>48<SeP>220<SeP>208<SeP>156<SeP>218<SeP>163<SeP>235<SeP>180<SeP>39<SeP>344<SeP>263<SeP>85<SeP>281<SeP>115<SeP>359<SeP>94<SeP>590<SeP>1680<SeP>3171<SeP>1969<SeP>460<SeP>246<SeP>383<SeP>158<SeP>622<SeP>323<SeP>174<SeP>70<SeP>55<SeP>40<SeP>627<SeP>25<SeP>319<SeP>114<SeP>264<SeP>141<SeP>527<SeP>665<SeP>121<SeP>571<SeP>225<SeP>69<SeP>275<SeP>178<SeP>485<SeP>278<SeP>222<SeP>358<SeP>88<SeP>310<SeP>367<SeP>124<SeP>401<SeP>169<SeP>154<SeP>110<SeP>205<SeP>100<SeP>744<SeP>91<SeP>185<SeP>161<SeP>231<SeP>96<SeP>43<SeP>144<SeP>429<SeP>128<SeP>151<SeP>56<SeP>39<SeP>129<SeP>439<SeP>175<SeP>159<SeP>112<SeP>375<SeP>172<SeP>294<SeP>562<SeP>102<SeP>321<SeP>244<SeP>299<SeP>233<SeP>256<SeP>436<SeP>129<SeP>368<SeP>191<SeP>34<SeP>278<SeP>389<SeP>17<SeP>143<SeP>303<SeP>401<SeP>98<SeP>356<SeP>136<SeP>74<SeP>337<SeP>131<SeP>254<SeP>280<SeP>213<SeP>204<SeP>18<SeP>255<SeP>122<SeP>349<SeP>318<SeP>65<SeP>72<SeP>93<SeP>56<SeP>67<SeP>165<SeP>332<SeP>208<SeP>156<SeP>137<SeP>242<SeP>189<SeP>119<SeP>50<SeP>174<SeP>7<SeP>17<SeP>258<SeP>233<SeP>243<SeP>696<SeP>536<SeP>235<SeP>730<SeP>338<SeP>611<SeP>192<SeP>379<SeP>355<SeP>515<SeP>439<SeP>305<SeP>479<SeP>1063<SeP>604<SeP>865<SeP>370<SeP>326<SeP>228<SeP>284<SeP>376<SeP>870<SeP>437<SeP>521<SeP>547<SeP>196<SeP>500<SeP>449<SeP>811<SeP>604<SeP>222<SeP>690<SeP>476<SeP>486<SeP>340<SeP>367<SeP>756<SeP>575<SeP>599<SeP>403<SeP>213<SeP>87<SeP>314<SeP>101<SeP>198<SeP>254<SeP>387<SeP>58<SeP>243<SeP>222<SeP>64<SeP>93<SeP>211<SeP>277<SeP>216<SeP>265<SeP>115<SeP>449<SeP>133<SeP>75<SeP>271<SeP>99<SeP>429<SeP>304<SeP>192<SeP>140<SeP>210<SeP>41<SeP>133<SeP>167<SeP>80<SeP>20<SeP>292<SeP>157<SeP>43<SeP>247<SeP>40<SeP>92<SeP>62<SeP>78<SeP>110<SeP>317<SeP>141<SeP>335<SeP>51<SeP>279<SeP>462<SeP>180<SeP>156<SeP>137<SeP>151<SeP>305<SeP>49<SeP>39<SeP>73<SeP>114<SeP>207<SeP>185<SeP>125<SeP>254<SeP>156<SeP>200<SeP>295<SeP>126<SeP>312<SeP>63<SeP>60<SeP>46<SeP>48<SeP>140<SeP>25<SeP>23<SeP>84<SeP>55<SeP>69<SeP>89<SeP>33<SeP>196<SeP>105<SeP>114<SeP>44<SeP>206<SeP>77<SeP>343<SeP>263<SeP>117<SeP>20<SeP>313<SeP>18<SeP>21<SeP>127<SeP>157<SeP>80<SeP>30<SeP>147<SeP>98<SeP>111<SeP>95<SeP>272<SeP>57<SeP>87<SeP>49<SeP>38<SeP>98<SeP>391<SeP>87<SeP>90<SeP>41<SeP>120<SeP>209<SeP>37<SeP>214<SeP>272<SeP>29<SeP>21<SeP>194<SeP>144<SeP>25<SeP>98<SeP>28<SeP>99<SeP>38<SeP>311<SeP>127<SeP>152<SeP>41<SeP>113<SeP>73<SeP>36<SeP>35<SeP>33<SeP>258<SeP>110<SeP>64<SeP>158<SeP>176<SeP>90<SeP>29<SeP>69<SeP>193<SeP>68<SeP>184<SeP>91<SeP>68<SeP>79<SeP>129<SeP>27<SeP>166<SeP>63<SeP>144<SeP>175<SeP>41<SeP>193<SeP>551<SeP>111<SeP>104<SeP>186<SeP>35<SeP>41<SeP>65<SeP>110<SeP>72<SeP>120<SeP>74<SeP>230<SeP>43<SeP>16<SeP>12<SeP>221<SeP>80<SeP>65<SeP>28<SeP>25<SeP>17<SeP>80<SeP>301<SeP>39<SeP>160<SeP>114<SeP>14<SeP>18<SeP>33<SeP>98<SeP>32<SeP>272<SeP>85<SeP>27<SeP>26<SeP>273<SeP>305<SeP>353<SeP>591<SeP>34<SeP>45<SeP>122<SeP>40<SeP>114<SeP>71<SeP>107<SeP>40<SeP>44<SeP>421<SeP>287<SeP>87<SeP>107<SeP>43<SeP>220<SeP>33<SeP>30<SeP>183<SeP>145<SeP>499<SeP>82<SeP>42<SeP>49<SeP>190";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 01:47:51<SeP>2025-02-10 03:35:42<SeP>2025-02-10 05:23:33<SeP>2025-02-10 07:11:24<SeP>2025-02-10 08:59:15<SeP>2025-02-10 10:47:06<SeP>2025-02-10 12:34:57<SeP>2025-02-10 14:22:48<SeP>2025-02-10 16:10:39<SeP>2025-02-10 17:58:30<SeP>2025-02-10 19:46:21<SeP>2025-02-10 21:34:12<SeP>2025-02-10 23:22:03<SeP>2025-02-11 01:09:54<SeP>2025-02-11 02:57:45<SeP>2025-02-11 04:45:36<SeP>2025-02-11 06:33:27<SeP>2025-02-11 08:21:18<SeP>2025-02-11 10:09:09<SeP>2025-02-11 11:57:00<SeP>2025-02-11 13:44:51<SeP>2025-02-11 15:32:42<SeP>2025-02-11 17:20:33<SeP>2025-02-11 19:08:24<SeP>2025-02-11 20:56:15<SeP>2025-02-11 22:44:06<SeP>2025-02-12 00:31:57<SeP>2025-02-12 02:19:48<SeP>2025-02-12 04:07:39<SeP>2025-02-12 05:55:30<SeP>2025-02-12 07:43:21<SeP>2025-02-12 09:31:12<SeP>2025-02-12 11:19:03<SeP>2025-02-12 13:06:54<SeP>2025-02-12 14:54:45<SeP>2025-02-12 16:42:36<SeP>2025-02-12 18:30:27<SeP>2025-02-12 20:18:18<SeP>2025-02-12 22:06:09<SeP>2025-02-12 23:54:00<SeP>2025-02-13 01:41:51<SeP>2025-02-13 03:29:42<SeP>2025-02-13 05:17:33<SeP>2025-02-13 07:05:24<SeP>2025-02-13 08:53:15<SeP>2025-02-13 10:41:06<SeP>2025-02-13 12:28:57<SeP>2025-02-13 14:16:48<SeP>2025-02-13 16:04:39<SeP>2025-02-13 17:52:30<SeP>2025-02-13 19:40:21<SeP>2025-02-13 21:28:12<SeP>2025-02-13 23:16:03<SeP>2025-02-14 01:03:54<SeP>2025-02-14 02:51:45<SeP>2025-02-14 04:39:36<SeP>2025-02-14 06:27:27<SeP>2025-02-14 08:15:18<SeP>2025-02-14 10:03:09<SeP>2025-02-14 11:51:00<SeP>2025-02-14 13:38:51<SeP>2025-02-14 15:26:42<SeP>2025-02-14 17:14:33<SeP>2025-02-14 19:02:24<SeP>2025-02-14 20:50:15<SeP>2025-02-14 22:38:06<SeP>2025-02-15 00:25:57<SeP>2025-02-15 02:13:48<SeP>2025-02-15 04:01:39<SeP>2025-02-15 05:49:30<SeP>2025-02-15 07:37:21<SeP>2025-02-15 09:25:12<SeP>2025-02-15 11:13:03<SeP>2025-02-15 13:00:54<SeP>2025-02-15 14:48:45<SeP>2025-02-15 16:36:36<SeP>2025-02-15 18:24:27<SeP>2025-02-15 20:12:18<SeP>2025-02-15 22:00:09<SeP>2025-02-15 23:48:00<SeP>2025-02-16 01:35:51<SeP>2025-02-16 03:23:42<SeP>2025-02-16 05:11:33<SeP>2025-02-16 06:59:24<SeP>2025-02-16 08:47:15<SeP>2025-02-16 10:35:06<SeP>2025-02-16 12:22:57<SeP>2025-02-16 14:10:48<SeP>2025-02-16 15:58:39<SeP>2025-02-16 17:46:30<SeP>2025-02-16 19:34:21<SeP>2025-02-16 21:22:12<SeP>2025-02-16 23:10:03<SeP>2025-02-17 00:57:54<SeP>2025-02-17 02:45:45<SeP>2025-02-17 04:33:36<SeP>2025-02-17 06:21:27<SeP>2025-02-17 08:09:18<SeP>2025-02-17 09:57:09<SeP>2025-02-17 11:45:00<SeP>2025-02-17 13:32:51<SeP>2025-02-17 15:20:42<SeP>2025-02-17 17:08:33<SeP>2025-02-17 18:56:24<SeP>2025-02-17 20:44:15<SeP>2025-02-17 22:32:06<SeP>2025-02-18 00:19:57<SeP>2025-02-18 02:07:48<SeP>2025-02-18 03:55:39<SeP>2025-02-18 05:43:30<SeP>2025-02-18 07:31:21<SeP>2025-02-18 09:19:12<SeP>2025-02-18 11:07:03<SeP>2025-02-18 12:54:54<SeP>2025-02-18 14:42:45<SeP>2025-02-18 16:30:36<SeP>2025-02-18 18:18:27<SeP>2025-02-18 20:06:18<SeP>2025-02-18 21:54:09<SeP>2025-02-18 23:42:00<SeP>2025-02-19 01:29:51<SeP>2025-02-19 03:17:42<SeP>2025-02-19 05:05:33<SeP>2025-02-19 06:53:24<SeP>2025-02-19 08:41:15<SeP>2025-02-19 10:29:06<SeP>2025-02-19 12:16:57<SeP>2025-02-19 14:04:48<SeP>2025-02-19 15:52:39<SeP>2025-02-19 17:40:30<SeP>2025-02-19 19:28:21<SeP>2025-02-19 21:16:12<SeP>2025-02-19 23:04:03<SeP>2025-02-20 00:51:54<SeP>2025-02-20 02:39:45<SeP>2025-02-20 04:27:36<SeP>2025-02-20 06:15:27<SeP>2025-02-20 08:03:18<SeP>2025-02-20 09:51:09<SeP>2025-02-20 11:39:00<SeP>2025-02-20 13:26:51<SeP>2025-02-20 15:14:42<SeP>2025-02-20 17:02:33<SeP>2025-02-20 18:50:24<SeP>2025-02-20 20:38:15<SeP>2025-02-20 22:26:06<SeP>2025-02-21 00:13:57<SeP>2025-02-21 02:01:48<SeP>2025-02-21 03:49:39<SeP>2025-02-21 05:37:30<SeP>2025-02-21 07:25:21<SeP>2025-02-21 09:13:12<SeP>2025-02-21 11:01:03<SeP>2025-02-21 12:48:54<SeP>2025-02-21 14:36:45<SeP>2025-02-21 16:24:36<SeP>2025-02-21 18:12:27<SeP>2025-02-21 20:00:18<SeP>2025-02-21 21:48:09<SeP>2025-02-21 23:36:00<SeP>2025-02-22 01:23:51<SeP>2025-02-22 03:11:42<SeP>2025-02-22 04:59:33<SeP>2025-02-22 06:47:24<SeP>2025-02-22 08:35:15<SeP>2025-02-22 10:23:06<SeP>2025-02-22 12:10:57<SeP>2025-02-22 13:58:48<SeP>2025-02-22 15:46:39<SeP>2025-02-22 17:34:30<SeP>2025-02-22 19:22:21<SeP>2025-02-22 21:10:12<SeP>2025-02-22 22:58:03<SeP>2025-02-23 00:45:54<SeP>2025-02-23 02:33:45<SeP>2025-02-23 04:21:36<SeP>2025-02-23 06:09:27<SeP>2025-02-23 07:57:18<SeP>2025-02-23 09:45:09<SeP>2025-02-23 11:33:00<SeP>2025-02-23 13:20:51<SeP>2025-02-23 15:08:42<SeP>2025-02-23 16:56:33<SeP>2025-02-23 18:44:24<SeP>2025-02-23 20:32:15<SeP>2025-02-23 22:20:06<SeP>2025-02-24 00:07:57<SeP>2025-02-24 01:55:48<SeP>2025-02-24 03:43:39<SeP>2025-02-24 05:31:30<SeP>2025-02-24 07:19:21<SeP>2025-02-24 09:07:12<SeP>2025-02-24 10:55:03<SeP>2025-02-24 12:42:54<SeP>2025-02-24 14:30:45<SeP>2025-02-24 16:18:36<SeP>2025-02-24 18:06:27<SeP>2025-02-24 19:54:18<SeP>2025-02-24 21:42:09<SeP>2025-02-24 23:30:00<SeP>2025-02-25 01:17:51<SeP>2025-02-25 03:05:42<SeP>2025-02-25 04:53:33<SeP>2025-02-25 06:41:24<SeP>2025-02-25 08:29:15<SeP>2025-02-25 10:17:06<SeP>2025-02-25 12:04:57<SeP>2025-02-25 13:52:48<SeP>2025-02-25 15:40:39<SeP>2025-02-25 17:28:30<SeP>2025-02-25 19:16:21<SeP>2025-02-25 21:04:12<SeP>2025-02-25 22:52:03<SeP>2025-02-26 00:39:54<SeP>2025-02-26 02:27:45<SeP>2025-02-26 04:15:36<SeP>2025-02-26 06:03:27<SeP>2025-02-26 07:51:18<SeP>2025-02-26 09:39:09<SeP>2025-02-26 11:27:00<SeP>2025-02-26 13:14:51<SeP>2025-02-26 15:02:42<SeP>2025-02-26 16:50:33<SeP>2025-02-26 18:38:24<SeP>2025-02-26 20:26:15<SeP>2025-02-26 22:14:06<SeP>2025-02-27 00:01:57<SeP>2025-02-27 01:49:48<SeP>2025-02-27 03:37:39<SeP>2025-02-27 05:25:30<SeP>2025-02-27 07:13:21<SeP>2025-02-27 09:01:12<SeP>2025-02-27 10:49:03<SeP>2025-02-27 12:36:54<SeP>2025-02-27 14:24:45<SeP>2025-02-27 16:12:36<SeP>2025-02-27 18:00:27<SeP>2025-02-27 19:48:18<SeP>2025-02-27 21:36:09<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:11:51<SeP>2025-02-28 02:59:42<SeP>2025-02-28 04:47:33<SeP>2025-02-28 06:35:24<SeP>2025-02-28 08:23:15<SeP>2025-02-28 10:11:06<SeP>2025-02-28 11:58:57<SeP>2025-02-28 13:46:48<SeP>2025-02-28 15:34:39<SeP>2025-02-28 17:22:30<SeP>2025-02-28 19:10:21<SeP>2025-02-28 20:58:12<SeP>2025-02-28 22:46:03<SeP>2025-03-01 00:33:54<SeP>2025-03-01 02:21:45<SeP>2025-03-01 04:09:36<SeP>2025-03-01 05:57:27<SeP>2025-03-01 07:45:18<SeP>2025-03-01 09:33:09<SeP>2025-03-01 11:21:00<SeP>2025-03-01 13:08:51<SeP>2025-03-01 14:56:42<SeP>2025-03-01 16:44:33<SeP>2025-03-01 18:32:24<SeP>2025-03-01 20:20:15<SeP>2025-03-01 22:08:06<SeP>2025-03-01 23:55:57<SeP>2025-03-02 01:43:48<SeP>2025-03-02 03:31:39<SeP>2025-03-02 05:19:30<SeP>2025-03-02 07:07:21<SeP>2025-03-02 08:55:12<SeP>2025-03-02 10:43:03<SeP>2025-03-02 12:30:54<SeP>2025-03-02 14:18:45<SeP>2025-03-02 16:06:36<SeP>2025-03-02 17:54:27<SeP>2025-03-02 19:42:18<SeP>2025-03-02 21:30:09<SeP>2025-03-02 23:18:00<SeP>2025-03-03 01:05:51<SeP>2025-03-03 02:53:42<SeP>2025-03-03 04:41:33<SeP>2025-03-03 06:29:24<SeP>2025-03-03 08:17:15<SeP>2025-03-03 10:05:06<SeP>2025-03-03 11:52:57<SeP>2025-03-03 13:40:48<SeP>2025-03-03 15:28:39<SeP>2025-03-03 17:16:30<SeP>2025-03-03 19:04:21<SeP>2025-03-03 20:52:12<SeP>2025-03-03 22:40:03<SeP>2025-03-04 00:27:54<SeP>2025-03-04 02:15:45<SeP>2025-03-04 04:03:36<SeP>2025-03-04 05:51:27<SeP>2025-03-04 07:39:18<SeP>2025-03-04 09:27:09<SeP>2025-03-04 11:15:00<SeP>2025-03-04 13:02:51<SeP>2025-03-04 14:50:42<SeP>2025-03-04 16:38:33<SeP>2025-03-04 18:26:24<SeP>2025-03-04 20:14:15<SeP>2025-03-04 22:02:06<SeP>2025-03-04 23:49:57<SeP>2025-03-05 01:37:48<SeP>2025-03-05 03:25:39<SeP>2025-03-05 05:13:30<SeP>2025-03-05 07:01:21<SeP>2025-03-05 08:49:12<SeP>2025-03-05 10:37:03<SeP>2025-03-05 12:24:54<SeP>2025-03-05 14:12:45<SeP>2025-03-05 16:00:36<SeP>2025-03-05 17:48:27<SeP>2025-03-05 19:36:18<SeP>2025-03-05 21:24:09<SeP>2025-03-05 23:12:00<SeP>2025-03-06 00:59:51<SeP>2025-03-06 02:47:42<SeP>2025-03-06 04:35:33<SeP>2025-03-06 06:23:24<SeP>2025-03-06 08:11:15<SeP>2025-03-06 09:59:06<SeP>2025-03-06 11:46:57<SeP>2025-03-06 13:34:48<SeP>2025-03-06 15:22:39<SeP>2025-03-06 17:10:30<SeP>2025-03-06 18:58:21<SeP>2025-03-06 20:46:12<SeP>2025-03-06 22:34:03<SeP>2025-03-07 00:21:54<SeP>2025-03-07 02:09:45<SeP>2025-03-07 03:57:36<SeP>2025-03-07 05:45:27<SeP>2025-03-07 07:33:18<SeP>2025-03-07 09:21:09<SeP>2025-03-07 11:09:00<SeP>2025-03-07 12:56:51<SeP>2025-03-07 14:44:42<SeP>2025-03-07 16:32:33<SeP>2025-03-07 18:20:24<SeP>2025-03-07 20:08:15<SeP>2025-03-07 21:56:06<SeP>2025-03-07 23:43:57<SeP>2025-03-08 01:31:48<SeP>2025-03-08 03:19:39<SeP>2025-03-08 05:07:30<SeP>2025-03-08 06:55:21<SeP>2025-03-08 08:43:12<SeP>2025-03-08 10:31:03<SeP>2025-03-08 12:18:54<SeP>2025-03-08 14:06:45<SeP>2025-03-08 15:54:36<SeP>2025-03-08 17:42:27<SeP>2025-03-08 19:30:18<SeP>2025-03-08 21:18:09<SeP>2025-03-08 23:06:00<SeP>2025-03-09 00:53:51<SeP>2025-03-09 03:41:42<SeP>2025-03-09 05:29:33<SeP>2025-03-09 07:17:24<SeP>2025-03-09 09:05:15<SeP>2025-03-09 10:53:06<SeP>2025-03-09 12:40:57<SeP>2025-03-09 14:28:48<SeP>2025-03-09 16:16:39<SeP>2025-03-09 18:04:30<SeP>2025-03-09 19:52:21<SeP>2025-03-09 21:40:12<SeP>2025-03-09 23:28:03<SeP>2025-03-10 01:15:54<SeP>2025-03-10 03:03:45<SeP>2025-03-10 04:51:36<SeP>2025-03-10 06:39:27<SeP>2025-03-10 08:27:18<SeP>2025-03-10 10:15:09<SeP>2025-03-10 12:03:00<SeP>2025-03-10 13:50:51<SeP>2025-03-10 15:38:42<SeP>2025-03-10 17:26:33<SeP>2025-03-10 19:14:24<SeP>2025-03-10 21:02:15<SeP>2025-03-10 22:50:06<SeP>2025-03-11 00:37:57<SeP>2025-03-11 02:25:48<SeP>2025-03-11 04:13:39<SeP>2025-03-11 06:01:30<SeP>2025-03-11 07:49:21<SeP>2025-03-11 09:37:12<SeP>2025-03-11 11:25:03<SeP>2025-03-11 13:12:54<SeP>2025-03-11 15:00:45<SeP>2025-03-11 16:48:36<SeP>2025-03-11 18:36:27<SeP>2025-03-11 20:24:18<SeP>2025-03-11 22:12:09";
  const itemLabel       = "Escaneos";
  const itemData        = "44<SeP>135<SeP>59<SeP>73<SeP>113<SeP>85<SeP>74<SeP>82<SeP>77<SeP>67<SeP>92<SeP>150<SeP>48<SeP>59<SeP>62<SeP>103<SeP>91<SeP>173<SeP>113<SeP>80<SeP>142<SeP>103<SeP>100<SeP>88<SeP>164<SeP>42<SeP>120<SeP>36<SeP>100<SeP>72<SeP>92<SeP>87<SeP>52<SeP>67<SeP>78<SeP>57<SeP>108<SeP>201<SeP>21<SeP>111<SeP>111<SeP>100<SeP>119<SeP>41<SeP>66<SeP>86<SeP>151<SeP>84<SeP>130<SeP>22<SeP>75<SeP>123<SeP>45<SeP>82<SeP>77<SeP>94<SeP>129<SeP>115<SeP>180<SeP>100<SeP>48<SeP>46<SeP>96<SeP>40<SeP>87<SeP>108<SeP>105<SeP>72<SeP>71<SeP>64<SeP>139<SeP>165<SeP>127<SeP>107<SeP>66<SeP>33<SeP>79<SeP>43<SeP>129<SeP>92<SeP>63<SeP>51<SeP>74<SeP>62<SeP>144<SeP>57<SeP>77<SeP>90<SeP>41<SeP>81<SeP>77<SeP>124<SeP>109<SeP>95<SeP>74<SeP>65<SeP>63<SeP>62<SeP>91<SeP>103<SeP>68<SeP>51<SeP>32<SeP>58<SeP>48<SeP>159<SeP>78<SeP>100<SeP>93<SeP>79<SeP>104<SeP>145<SeP>76<SeP>62<SeP>99<SeP>75<SeP>37<SeP>46<SeP>98<SeP>58<SeP>47<SeP>63<SeP>125<SeP>55<SeP>204<SeP>78<SeP>71<SeP>67<SeP>57<SeP>52<SeP>73<SeP>81<SeP>70<SeP>116<SeP>57<SeP>80<SeP>116<SeP>66<SeP>77<SeP>148<SeP>47<SeP>77<SeP>55<SeP>41<SeP>62<SeP>93<SeP>89<SeP>72<SeP>72<SeP>161<SeP>67<SeP>110<SeP>53<SeP>62<SeP>43<SeP>104<SeP>75<SeP>65<SeP>113<SeP>91<SeP>85<SeP>71<SeP>105<SeP>124<SeP>69<SeP>51<SeP>28<SeP>47<SeP>89<SeP>75<SeP>55<SeP>92<SeP>85<SeP>51<SeP>82<SeP>95<SeP>126<SeP>84<SeP>36<SeP>27<SeP>57<SeP>65<SeP>193<SeP>130<SeP>60<SeP>67<SeP>123<SeP>52<SeP>59<SeP>88<SeP>94<SeP>186<SeP>71<SeP>51<SeP>97<SeP>103<SeP>58<SeP>85<SeP>72<SeP>118<SeP>114<SeP>68<SeP>98<SeP>77<SeP>81<SeP>79<SeP>65<SeP>68<SeP>86<SeP>116<SeP>58<SeP>134<SeP>80<SeP>94<SeP>144<SeP>50<SeP>82<SeP>140<SeP>61<SeP>68<SeP>116<SeP>122<SeP>78<SeP>189<SeP>72<SeP>142<SeP>57<SeP>73<SeP>62<SeP>86<SeP>88<SeP>68<SeP>63<SeP>57<SeP>69<SeP>50<SeP>79<SeP>48<SeP>105<SeP>88<SeP>91<SeP>91<SeP>76<SeP>85<SeP>46<SeP>51<SeP>98<SeP>48<SeP>43<SeP>61<SeP>78<SeP>83<SeP>63<SeP>111<SeP>47<SeP>76<SeP>42<SeP>29<SeP>233<SeP>88<SeP>40<SeP>77<SeP>61<SeP>67<SeP>111<SeP>44<SeP>41<SeP>105<SeP>146<SeP>80<SeP>44<SeP>45<SeP>92<SeP>47<SeP>45<SeP>65<SeP>88<SeP>109<SeP>80<SeP>62<SeP>113<SeP>63<SeP>68<SeP>26<SeP>23<SeP>58<SeP>32<SeP>41<SeP>105<SeP>69<SeP>58<SeP>59<SeP>79<SeP>272<SeP>51<SeP>28<SeP>67<SeP>56<SeP>124<SeP>132<SeP>72<SeP>45<SeP>76<SeP>129<SeP>103<SeP>95<SeP>70<SeP>104<SeP>31<SeP>95<SeP>43<SeP>33<SeP>41<SeP>75<SeP>52<SeP>89<SeP>71<SeP>137<SeP>107<SeP>57<SeP>67<SeP>52<SeP>35<SeP>92<SeP>87<SeP>124<SeP>43<SeP>82<SeP>170<SeP>64<SeP>65<SeP>52<SeP>64<SeP>153<SeP>369<SeP>36<SeP>41<SeP>21<SeP>43<SeP>42<SeP>47<SeP>63<SeP>111<SeP>166<SeP>91<SeP>65<SeP>357<SeP>63<SeP>71<SeP>283<SeP>142<SeP>193<SeP>53<SeP>53<SeP>56<SeP>63<SeP>69<SeP>43<SeP>56<SeP>63<SeP>18<SeP>39<SeP>81<SeP>90<SeP>53<SeP>61<SeP>61<SeP>56<SeP>60<SeP>31<SeP>24<SeP>40<SeP>116<SeP>30<SeP>33<SeP>814<SeP>70<SeP>86<SeP>104<SeP>109<SeP>105<SeP>73<SeP>22<SeP>32<SeP>38<SeP>181<SeP>77<SeP>91<SeP>64<SeP>94<SeP>61<SeP>23<SeP>53<SeP>111<SeP>140<SeP>38<SeP>52<SeP>66<SeP>56<SeP>44";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2025-02-10 00:00:00<SeP>2025-02-10 01:47:51<SeP>2025-02-10 03:35:42<SeP>2025-02-10 05:23:33<SeP>2025-02-10 07:11:24<SeP>2025-02-10 08:59:15<SeP>2025-02-10 10:47:06<SeP>2025-02-10 12:34:57<SeP>2025-02-10 14:22:48<SeP>2025-02-10 16:10:39<SeP>2025-02-10 17:58:30<SeP>2025-02-10 19:46:21<SeP>2025-02-10 21:34:12<SeP>2025-02-10 23:22:03<SeP>2025-02-11 01:09:54<SeP>2025-02-11 02:57:45<SeP>2025-02-11 04:45:36<SeP>2025-02-11 06:33:27<SeP>2025-02-11 08:21:18<SeP>2025-02-11 10:09:09<SeP>2025-02-11 11:57:00<SeP>2025-02-11 13:44:51<SeP>2025-02-11 15:32:42<SeP>2025-02-11 17:20:33<SeP>2025-02-11 19:08:24<SeP>2025-02-11 20:56:15<SeP>2025-02-11 22:44:06<SeP>2025-02-12 00:31:57<SeP>2025-02-12 02:19:48<SeP>2025-02-12 04:07:39<SeP>2025-02-12 05:55:30<SeP>2025-02-12 07:43:21<SeP>2025-02-12 09:31:12<SeP>2025-02-12 11:19:03<SeP>2025-02-12 13:06:54<SeP>2025-02-12 14:54:45<SeP>2025-02-12 16:42:36<SeP>2025-02-12 18:30:27<SeP>2025-02-12 20:18:18<SeP>2025-02-12 22:06:09<SeP>2025-02-12 23:54:00<SeP>2025-02-13 01:41:51<SeP>2025-02-13 03:29:42<SeP>2025-02-13 05:17:33<SeP>2025-02-13 07:05:24<SeP>2025-02-13 08:53:15<SeP>2025-02-13 10:41:06<SeP>2025-02-13 12:28:57<SeP>2025-02-13 14:16:48<SeP>2025-02-13 16:04:39<SeP>2025-02-13 17:52:30<SeP>2025-02-13 19:40:21<SeP>2025-02-13 21:28:12<SeP>2025-02-13 23:16:03<SeP>2025-02-14 01:03:54<SeP>2025-02-14 02:51:45<SeP>2025-02-14 04:39:36<SeP>2025-02-14 06:27:27<SeP>2025-02-14 08:15:18<SeP>2025-02-14 10:03:09<SeP>2025-02-14 11:51:00<SeP>2025-02-14 13:38:51<SeP>2025-02-14 15:26:42<SeP>2025-02-14 17:14:33<SeP>2025-02-14 19:02:24<SeP>2025-02-14 20:50:15<SeP>2025-02-14 22:38:06<SeP>2025-02-15 00:25:57<SeP>2025-02-15 02:13:48<SeP>2025-02-15 04:01:39<SeP>2025-02-15 05:49:30<SeP>2025-02-15 07:37:21<SeP>2025-02-15 09:25:12<SeP>2025-02-15 11:13:03<SeP>2025-02-15 13:00:54<SeP>2025-02-15 14:48:45<SeP>2025-02-15 16:36:36<SeP>2025-02-15 18:24:27<SeP>2025-02-15 20:12:18<SeP>2025-02-15 22:00:09<SeP>2025-02-15 23:48:00<SeP>2025-02-16 01:35:51<SeP>2025-02-16 03:23:42<SeP>2025-02-16 05:11:33<SeP>2025-02-16 06:59:24<SeP>2025-02-16 08:47:15<SeP>2025-02-16 10:35:06<SeP>2025-02-16 12:22:57<SeP>2025-02-16 14:10:48<SeP>2025-02-16 15:58:39<SeP>2025-02-16 17:46:30<SeP>2025-02-16 19:34:21<SeP>2025-02-16 21:22:12<SeP>2025-02-16 23:10:03<SeP>2025-02-17 00:57:54<SeP>2025-02-17 02:45:45<SeP>2025-02-17 04:33:36<SeP>2025-02-17 06:21:27<SeP>2025-02-17 08:09:18<SeP>2025-02-17 09:57:09<SeP>2025-02-17 11:45:00<SeP>2025-02-17 13:32:51<SeP>2025-02-17 15:20:42<SeP>2025-02-17 17:08:33<SeP>2025-02-17 18:56:24<SeP>2025-02-17 20:44:15<SeP>2025-02-17 22:32:06<SeP>2025-02-18 00:19:57<SeP>2025-02-18 02:07:48<SeP>2025-02-18 03:55:39<SeP>2025-02-18 05:43:30<SeP>2025-02-18 07:31:21<SeP>2025-02-18 09:19:12<SeP>2025-02-18 11:07:03<SeP>2025-02-18 12:54:54<SeP>2025-02-18 14:42:45<SeP>2025-02-18 16:30:36<SeP>2025-02-18 18:18:27<SeP>2025-02-18 20:06:18<SeP>2025-02-18 21:54:09<SeP>2025-02-18 23:42:00<SeP>2025-02-19 01:29:51<SeP>2025-02-19 03:17:42<SeP>2025-02-19 05:05:33<SeP>2025-02-19 06:53:24<SeP>2025-02-19 08:41:15<SeP>2025-02-19 10:29:06<SeP>2025-02-19 12:16:57<SeP>2025-02-19 14:04:48<SeP>2025-02-19 15:52:39<SeP>2025-02-19 17:40:30<SeP>2025-02-19 19:28:21<SeP>2025-02-19 21:16:12<SeP>2025-02-19 23:04:03<SeP>2025-02-20 00:51:54<SeP>2025-02-20 02:39:45<SeP>2025-02-20 04:27:36<SeP>2025-02-20 06:15:27<SeP>2025-02-20 08:03:18<SeP>2025-02-20 09:51:09<SeP>2025-02-20 11:39:00<SeP>2025-02-20 13:26:51<SeP>2025-02-20 15:14:42<SeP>2025-02-20 17:02:33<SeP>2025-02-20 18:50:24<SeP>2025-02-20 20:38:15<SeP>2025-02-20 22:26:06<SeP>2025-02-21 00:13:57<SeP>2025-02-21 02:01:48<SeP>2025-02-21 03:49:39<SeP>2025-02-21 05:37:30<SeP>2025-02-21 07:25:21<SeP>2025-02-21 09:13:12<SeP>2025-02-21 11:01:03<SeP>2025-02-21 12:48:54<SeP>2025-02-21 14:36:45<SeP>2025-02-21 16:24:36<SeP>2025-02-21 18:12:27<SeP>2025-02-21 20:00:18<SeP>2025-02-21 21:48:09<SeP>2025-02-21 23:36:00<SeP>2025-02-22 01:23:51<SeP>2025-02-22 03:11:42<SeP>2025-02-22 04:59:33<SeP>2025-02-22 06:47:24<SeP>2025-02-22 08:35:15<SeP>2025-02-22 10:23:06<SeP>2025-02-22 12:10:57<SeP>2025-02-22 13:58:48<SeP>2025-02-22 15:46:39<SeP>2025-02-22 17:34:30<SeP>2025-02-22 19:22:21<SeP>2025-02-22 21:10:12<SeP>2025-02-22 22:58:03<SeP>2025-02-23 00:45:54<SeP>2025-02-23 02:33:45<SeP>2025-02-23 04:21:36<SeP>2025-02-23 06:09:27<SeP>2025-02-23 07:57:18<SeP>2025-02-23 09:45:09<SeP>2025-02-23 11:33:00<SeP>2025-02-23 13:20:51<SeP>2025-02-23 15:08:42<SeP>2025-02-23 16:56:33<SeP>2025-02-23 18:44:24<SeP>2025-02-23 20:32:15<SeP>2025-02-23 22:20:06<SeP>2025-02-24 00:07:57<SeP>2025-02-24 01:55:48<SeP>2025-02-24 03:43:39<SeP>2025-02-24 05:31:30<SeP>2025-02-24 07:19:21<SeP>2025-02-24 09:07:12<SeP>2025-02-24 10:55:03<SeP>2025-02-24 12:42:54<SeP>2025-02-24 14:30:45<SeP>2025-02-24 16:18:36<SeP>2025-02-24 18:06:27<SeP>2025-02-24 19:54:18<SeP>2025-02-24 21:42:09<SeP>2025-02-24 23:30:00<SeP>2025-02-25 01:17:51<SeP>2025-02-25 03:05:42<SeP>2025-02-25 04:53:33<SeP>2025-02-25 06:41:24<SeP>2025-02-25 08:29:15<SeP>2025-02-25 10:17:06<SeP>2025-02-25 12:04:57<SeP>2025-02-25 13:52:48<SeP>2025-02-25 15:40:39<SeP>2025-02-25 17:28:30<SeP>2025-02-25 19:16:21<SeP>2025-02-25 21:04:12<SeP>2025-02-25 22:52:03<SeP>2025-02-26 00:39:54<SeP>2025-02-26 02:27:45<SeP>2025-02-26 04:15:36<SeP>2025-02-26 06:03:27<SeP>2025-02-26 07:51:18<SeP>2025-02-26 09:39:09<SeP>2025-02-26 11:27:00<SeP>2025-02-26 13:14:51<SeP>2025-02-26 15:02:42<SeP>2025-02-26 16:50:33<SeP>2025-02-26 18:38:24<SeP>2025-02-26 20:26:15<SeP>2025-02-26 22:14:06<SeP>2025-02-27 00:01:57<SeP>2025-02-27 01:49:48<SeP>2025-02-27 03:37:39<SeP>2025-02-27 05:25:30<SeP>2025-02-27 07:13:21<SeP>2025-02-27 09:01:12<SeP>2025-02-27 10:49:03<SeP>2025-02-27 12:36:54<SeP>2025-02-27 14:24:45<SeP>2025-02-27 16:12:36<SeP>2025-02-27 18:00:27<SeP>2025-02-27 19:48:18<SeP>2025-02-27 21:36:09<SeP>2025-02-27 23:24:00<SeP>2025-02-28 01:11:51<SeP>2025-02-28 02:59:42<SeP>2025-02-28 04:47:33<SeP>2025-02-28 06:35:24<SeP>2025-02-28 08:23:15<SeP>2025-02-28 10:11:06<SeP>2025-02-28 11:58:57<SeP>2025-02-28 13:46:48<SeP>2025-02-28 15:34:39<SeP>2025-02-28 17:22:30<SeP>2025-02-28 19:10:21<SeP>2025-02-28 20:58:12<SeP>2025-02-28 22:46:03<SeP>2025-03-01 00:33:54<SeP>2025-03-01 02:21:45<SeP>2025-03-01 04:09:36<SeP>2025-03-01 05:57:27<SeP>2025-03-01 07:45:18<SeP>2025-03-01 09:33:09<SeP>2025-03-01 11:21:00<SeP>2025-03-01 13:08:51<SeP>2025-03-01 14:56:42<SeP>2025-03-01 16:44:33<SeP>2025-03-01 18:32:24<SeP>2025-03-01 20:20:15<SeP>2025-03-01 22:08:06<SeP>2025-03-01 23:55:57<SeP>2025-03-02 01:43:48<SeP>2025-03-02 03:31:39<SeP>2025-03-02 05:19:30<SeP>2025-03-02 07:07:21<SeP>2025-03-02 08:55:12<SeP>2025-03-02 10:43:03<SeP>2025-03-02 12:30:54<SeP>2025-03-02 14:18:45<SeP>2025-03-02 16:06:36<SeP>2025-03-02 17:54:27<SeP>2025-03-02 19:42:18<SeP>2025-03-02 21:30:09<SeP>2025-03-02 23:18:00<SeP>2025-03-03 01:05:51<SeP>2025-03-03 02:53:42<SeP>2025-03-03 04:41:33<SeP>2025-03-03 06:29:24<SeP>2025-03-03 08:17:15<SeP>2025-03-03 10:05:06<SeP>2025-03-03 11:52:57<SeP>2025-03-03 13:40:48<SeP>2025-03-03 15:28:39<SeP>2025-03-03 17:16:30<SeP>2025-03-03 19:04:21<SeP>2025-03-03 20:52:12<SeP>2025-03-03 22:40:03<SeP>2025-03-04 00:27:54<SeP>2025-03-04 02:15:45<SeP>2025-03-04 04:03:36<SeP>2025-03-04 05:51:27<SeP>2025-03-04 07:39:18<SeP>2025-03-04 09:27:09<SeP>2025-03-04 11:15:00<SeP>2025-03-04 13:02:51<SeP>2025-03-04 14:50:42<SeP>2025-03-04 16:38:33<SeP>2025-03-04 18:26:24<SeP>2025-03-04 20:14:15<SeP>2025-03-04 22:02:06<SeP>2025-03-04 23:49:57<SeP>2025-03-05 01:37:48<SeP>2025-03-05 03:25:39<SeP>2025-03-05 05:13:30<SeP>2025-03-05 07:01:21<SeP>2025-03-05 08:49:12<SeP>2025-03-05 10:37:03<SeP>2025-03-05 12:24:54<SeP>2025-03-05 14:12:45<SeP>2025-03-05 16:00:36<SeP>2025-03-05 17:48:27<SeP>2025-03-05 19:36:18<SeP>2025-03-05 21:24:09<SeP>2025-03-05 23:12:00<SeP>2025-03-06 00:59:51<SeP>2025-03-06 02:47:42<SeP>2025-03-06 04:35:33<SeP>2025-03-06 06:23:24<SeP>2025-03-06 08:11:15<SeP>2025-03-06 09:59:06<SeP>2025-03-06 11:46:57<SeP>2025-03-06 13:34:48<SeP>2025-03-06 15:22:39<SeP>2025-03-06 17:10:30<SeP>2025-03-06 18:58:21<SeP>2025-03-06 20:46:12<SeP>2025-03-06 22:34:03<SeP>2025-03-07 00:21:54<SeP>2025-03-07 02:09:45<SeP>2025-03-07 03:57:36<SeP>2025-03-07 05:45:27<SeP>2025-03-07 07:33:18<SeP>2025-03-07 09:21:09<SeP>2025-03-07 11:09:00<SeP>2025-03-07 12:56:51<SeP>2025-03-07 14:44:42<SeP>2025-03-07 16:32:33<SeP>2025-03-07 18:20:24<SeP>2025-03-07 20:08:15<SeP>2025-03-07 21:56:06<SeP>2025-03-07 23:43:57<SeP>2025-03-08 01:31:48<SeP>2025-03-08 03:19:39<SeP>2025-03-08 05:07:30<SeP>2025-03-08 06:55:21<SeP>2025-03-08 08:43:12<SeP>2025-03-08 10:31:03<SeP>2025-03-08 12:18:54<SeP>2025-03-08 14:06:45<SeP>2025-03-08 15:54:36<SeP>2025-03-08 17:42:27<SeP>2025-03-08 19:30:18<SeP>2025-03-08 21:18:09<SeP>2025-03-08 23:06:00<SeP>2025-03-09 00:53:51<SeP>2025-03-09 03:41:42<SeP>2025-03-09 05:29:33<SeP>2025-03-09 07:17:24<SeP>2025-03-09 09:05:15<SeP>2025-03-09 10:53:06<SeP>2025-03-09 12:40:57<SeP>2025-03-09 14:28:48<SeP>2025-03-09 16:16:39<SeP>2025-03-09 18:04:30<SeP>2025-03-09 19:52:21<SeP>2025-03-09 21:40:12<SeP>2025-03-09 23:28:03<SeP>2025-03-10 01:15:54<SeP>2025-03-10 03:03:45<SeP>2025-03-10 04:51:36<SeP>2025-03-10 06:39:27<SeP>2025-03-10 08:27:18<SeP>2025-03-10 10:15:09<SeP>2025-03-10 12:03:00<SeP>2025-03-10 13:50:51<SeP>2025-03-10 15:38:42<SeP>2025-03-10 17:26:33<SeP>2025-03-10 19:14:24<SeP>2025-03-10 21:02:15<SeP>2025-03-10 22:50:06<SeP>2025-03-11 00:37:57<SeP>2025-03-11 02:25:48<SeP>2025-03-11 04:13:39<SeP>2025-03-11 06:01:30<SeP>2025-03-11 07:49:21<SeP>2025-03-11 09:37:12<SeP>2025-03-11 11:25:03<SeP>2025-03-11 13:12:54<SeP>2025-03-11 15:00:45<SeP>2025-03-11 16:48:36<SeP>2025-03-11 18:36:27<SeP>2025-03-11 20:24:18<SeP>2025-03-11 22:12:09";
  const itemLabel       = "Ataques";
  const itemData        = "85<SeP>327<SeP>261<SeP>223<SeP>95<SeP>123<SeP>18<SeP>29<SeP>231<SeP>187<SeP>181<SeP>85<SeP>48<SeP>220<SeP>208<SeP>156<SeP>218<SeP>163<SeP>235<SeP>180<SeP>39<SeP>344<SeP>263<SeP>85<SeP>281<SeP>115<SeP>359<SeP>94<SeP>590<SeP>1680<SeP>3171<SeP>1969<SeP>460<SeP>246<SeP>383<SeP>158<SeP>622<SeP>323<SeP>174<SeP>70<SeP>55<SeP>40<SeP>627<SeP>25<SeP>319<SeP>114<SeP>264<SeP>141<SeP>527<SeP>665<SeP>121<SeP>571<SeP>225<SeP>69<SeP>275<SeP>178<SeP>485<SeP>278<SeP>222<SeP>358<SeP>88<SeP>310<SeP>367<SeP>124<SeP>401<SeP>169<SeP>154<SeP>110<SeP>205<SeP>100<SeP>744<SeP>91<SeP>185<SeP>161<SeP>231<SeP>96<SeP>43<SeP>144<SeP>429<SeP>128<SeP>151<SeP>56<SeP>39<SeP>129<SeP>439<SeP>175<SeP>159<SeP>112<SeP>375<SeP>172<SeP>294<SeP>562<SeP>102<SeP>321<SeP>244<SeP>299<SeP>233<SeP>256<SeP>436<SeP>129<SeP>368<SeP>191<SeP>34<SeP>278<SeP>389<SeP>17<SeP>143<SeP>303<SeP>401<SeP>98<SeP>356<SeP>136<SeP>74<SeP>337<SeP>131<SeP>254<SeP>280<SeP>213<SeP>204<SeP>18<SeP>255<SeP>122<SeP>349<SeP>318<SeP>65<SeP>72<SeP>93<SeP>56<SeP>67<SeP>165<SeP>332<SeP>208<SeP>156<SeP>137<SeP>242<SeP>189<SeP>119<SeP>50<SeP>174<SeP>7<SeP>17<SeP>258<SeP>233<SeP>243<SeP>696<SeP>536<SeP>235<SeP>730<SeP>338<SeP>611<SeP>192<SeP>379<SeP>355<SeP>515<SeP>439<SeP>305<SeP>479<SeP>1063<SeP>604<SeP>865<SeP>370<SeP>326<SeP>228<SeP>284<SeP>376<SeP>870<SeP>437<SeP>521<SeP>547<SeP>196<SeP>500<SeP>449<SeP>811<SeP>604<SeP>222<SeP>690<SeP>476<SeP>486<SeP>340<SeP>367<SeP>756<SeP>575<SeP>599<SeP>403<SeP>213<SeP>87<SeP>314<SeP>101<SeP>198<SeP>254<SeP>387<SeP>58<SeP>243<SeP>222<SeP>64<SeP>93<SeP>211<SeP>277<SeP>216<SeP>265<SeP>115<SeP>449<SeP>133<SeP>75<SeP>271<SeP>99<SeP>429<SeP>304<SeP>192<SeP>140<SeP>210<SeP>41<SeP>133<SeP>167<SeP>80<SeP>20<SeP>292<SeP>157<SeP>43<SeP>247<SeP>40<SeP>92<SeP>62<SeP>78<SeP>110<SeP>317<SeP>141<SeP>335<SeP>51<SeP>279<SeP>462<SeP>180<SeP>156<SeP>137<SeP>151<SeP>305<SeP>49<SeP>39<SeP>73<SeP>114<SeP>207<SeP>185<SeP>125<SeP>254<SeP>156<SeP>200<SeP>295<SeP>126<SeP>312<SeP>63<SeP>60<SeP>46<SeP>48<SeP>140<SeP>25<SeP>23<SeP>84<SeP>55<SeP>69<SeP>89<SeP>33<SeP>196<SeP>105<SeP>114<SeP>44<SeP>206<SeP>77<SeP>343<SeP>263<SeP>117<SeP>20<SeP>313<SeP>18<SeP>21<SeP>127<SeP>157<SeP>80<SeP>30<SeP>147<SeP>98<SeP>111<SeP>95<SeP>272<SeP>57<SeP>87<SeP>49<SeP>38<SeP>98<SeP>391<SeP>87<SeP>90<SeP>41<SeP>120<SeP>209<SeP>37<SeP>214<SeP>272<SeP>29<SeP>21<SeP>194<SeP>144<SeP>25<SeP>98<SeP>28<SeP>99<SeP>38<SeP>311<SeP>127<SeP>152<SeP>41<SeP>113<SeP>73<SeP>36<SeP>35<SeP>33<SeP>258<SeP>110<SeP>64<SeP>158<SeP>176<SeP>90<SeP>29<SeP>69<SeP>193<SeP>68<SeP>184<SeP>91<SeP>68<SeP>79<SeP>129<SeP>27<SeP>166<SeP>63<SeP>144<SeP>175<SeP>41<SeP>193<SeP>551<SeP>111<SeP>104<SeP>186<SeP>35<SeP>41<SeP>65<SeP>110<SeP>72<SeP>120<SeP>74<SeP>230<SeP>43<SeP>16<SeP>12<SeP>221<SeP>80<SeP>65<SeP>28<SeP>25<SeP>17<SeP>80<SeP>301<SeP>39<SeP>160<SeP>114<SeP>14<SeP>18<SeP>33<SeP>98<SeP>32<SeP>272<SeP>85<SeP>27<SeP>26<SeP>273<SeP>305<SeP>353<SeP>591<SeP>34<SeP>45<SeP>122<SeP>40<SeP>114<SeP>71<SeP>107<SeP>40<SeP>44<SeP>421<SeP>287<SeP>87<SeP>107<SeP>43<SeP>220<SeP>33<SeP>30<SeP>183<SeP>145<SeP>499<SeP>82<SeP>42<SeP>49<SeP>190";
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
  const itemData    = "21113<SeP>13558<SeP>12203<SeP>8685<SeP>5980<SeP>5418<SeP>4272<SeP>4219<SeP>3988<SeP>3941";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Macao<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany";
  const itemLabel   = "Scans";
  const itemData    = "14301<SeP>3143<SeP>2510<SeP>2102<SeP>1356<SeP>1171<SeP>926<SeP>855<SeP>793<SeP>619";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Romania<SeP>Russia";
  const itemLabel   = "Attacks";
  const itemData    = "11277<SeP>10415<SeP>8066<SeP>6812<SeP>4625<SeP>3832<SeP>3733<SeP>3470<SeP>3424<SeP>2863";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>4837<SeP>136052<SeP>207566";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "10385<SeP>9733<SeP>8011<SeP>6226<SeP>4286<SeP>3644<SeP>3092<SeP>2873<SeP>2552<SeP>2542";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4609<SeP>3462<SeP>4766<SeP>9269<SeP>4811<SeP>14061";
  const itemLabel   = "Scans";
  const itemData    = "8377<SeP>2500<SeP>1991<SeP>1304<SeP>1171<SeP>772<SeP>685<SeP>621<SeP>551<SeP>530";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "3462<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>136052<SeP>56971<SeP>4134<SeP>396982";
  const itemLabel   = "Atacks";
  const itemData    = "9613<SeP>7481<SeP>6225<SeP>3601<SeP>3279<SeP>2936<SeP>2551<SeP>1577<SeP>1356<SeP>1254";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Taiwan<SeP>Germany<SeP>India<SeP>South Korea<SeP>Hong Kong<SeP>Russia<SeP>Indonesia<SeP>France";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "21113<SeP>13558<SeP>12203<SeP>8685<SeP>5980<SeP>5418<SeP>4272<SeP>4219<SeP>3988<SeP>3941";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>United States<SeP>India<SeP>Hong Kong<SeP>Russia<SeP>Macao<SeP>Taiwan<SeP>Japan<SeP>South Korea<SeP>Germany";
  const itemLabel   = "Escaneos";
  const itemData    = "14301<SeP>3143<SeP>2510<SeP>2102<SeP>1356<SeP>1171<SeP>926<SeP>855<SeP>793<SeP>619";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "Taiwan<SeP>United States<SeP>Germany<SeP>China<SeP>South Korea<SeP>Indonesia<SeP>France<SeP>India<SeP>Romania<SeP>Russia";
  const itemLabel   = "Ataques";
  const itemData    = "11277<SeP>10415<SeP>8066<SeP>6812<SeP>4625<SeP>3832<SeP>3733<SeP>3470<SeP>3424<SeP>2863";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "3462<SeP>4134<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>4837<SeP>136052<SeP>207566";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "10385<SeP>9733<SeP>8011<SeP>6226<SeP>4286<SeP>3644<SeP>3092<SeP>2873<SeP>2552<SeP>2542";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>9829<SeP>207566<SeP>4609<SeP>3462<SeP>4766<SeP>9269<SeP>4811<SeP>14061";
  const itemLabel   = "Escaneos";
  const itemData    = "8377<SeP>2500<SeP>1991<SeP>1304<SeP>1171<SeP>772<SeP>685<SeP>621<SeP>551<SeP>530";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "3462<SeP>14061<SeP>44486<SeP>4766<SeP>47890<SeP>16276<SeP>136052<SeP>56971<SeP>4134<SeP>396982";
  const itemLabel   = "Ataques";
  const itemData    = "9613<SeP>7481<SeP>6225<SeP>3601<SeP>3279<SeP>2936<SeP>2551<SeP>1577<SeP>1356<SeP>1254";
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
