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
  document.getElementById("last-updated").innerHTML = "2025-3-2";
}

// Print the length in hours of each click in the trend chart (American number formatting)
function trendClickEnglish() {
  document.getElementById("trend-click").innerHTML = "35.1";
}

// Print the length in hours of each click in the trend chart (Spanish number formatting)
function trendClickSpanish() {
  const clickEnglish = "35.1";
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
  const metricData    = "2831158";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansEnglish()
{
  const metricElement = "metric-scans";
  const metricData    = "549703";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksEnglish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2281455";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsEnglish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139539";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulEnglish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1432296";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulEnglish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "849159";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsEnglish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54081";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveEnglish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "248646";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveEnglish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "600513";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsEnglish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43388";
  const metricLocale  = "en-US";

  singleMetric(metricElement, metricData, metricLocale);
}

// Using Italian locale because Spanish locale (es-ES) gives inconsistent results processing number formatting (e.g. 1.234,56)
function metricTrafficSpanish()
{
  const metricElement = "metric-traffic";
  const metricData    = "2831158";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricScansSpanish()
{
  const metricElement = "metric-scans";
  const metricData    = "549703";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSpanish()
{
  const metricElement = "metric-attacks";
  const metricData    = "2281455";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricTrafficIPsSpanish()
{
  const metricElement = "metric-traffic-ip";
  const metricData    = "139539";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksUnsuccessfulSpanish()
{
  const metricElement = "metric-attacks-unsuccessful";
  const metricData    = "1432296";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulSpanish()
{
  const metricElement = "metric-attacks-successful";
  const metricData    = "849159";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksIPsSpanish()
{
  const metricElement = "metric-attacks-ip";
  const metricData    = "54081";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksPassiveSpanish()
{
  const metricElement = "metric-attacks-passive";
  const metricData    = "248646";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksActiveSpanish()
{
  const metricElement = "metric-attacks-active";
  const metricData    = "600513";
  const metricLocale  = "it-IT";

  singleMetric(metricElement, metricData, metricLocale);
}

function metricAttacksSuccessfulIPsSpanish()
{
  const metricElement = "metric-attacks-successful-ip";
  const metricData    = "43388";
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
  const incomingData = "2831158<SeP>549703<SeP>2281455<SeP>139539";
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
  const incomingData = "2281455<SeP>1432296<SeP>849159<SeP>54081";
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
  const incomingData = "849159<SeP>248646<SeP>600513<SeP>43388";
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
  const incomingData = "2559346<SeP>256491<SeP>2302855";
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
  const incomingData = "388196<SeP>149<SeP>388047<SeP>226";
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
  const incomingData = "2831158<SeP>549703<SeP>2281455<SeP>139539";
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
  const incomingData = "2281455<SeP>1432296<SeP>849159<SeP>54081";
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
  const incomingData = "849159<SeP>248646<SeP>600513<SeP>43388";
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
  const incomingData = "2559346<SeP>256491<SeP>2302855";
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
  const incomingData = "388196<SeP>149<SeP>388047<SeP>226";
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
  const column3Data   = "220068<SeP>201602<SeP>12462<SeP>12442<SeP>9746<SeP>9440<SeP>6446<SeP>5593<SeP>4631<SeP>3495";
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
  const column2Data  = "211392<SeP>43094<SeP>761<SeP>485<SeP>456<SeP>437<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2398290<SeP>432868";
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
  const column3Data   = "220068<SeP>201602<SeP>12462<SeP>12442<SeP>9746<SeP>9440<SeP>6446<SeP>5593<SeP>4631<SeP>3495";
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
  const column2Data  = "211392<SeP>43094<SeP>761<SeP>485<SeP>456<SeP>437<SeP>376<SeP>281<SeP>245<SeP>224";
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
  const column2Data  = "2398290<SeP>432868";
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

  document.getElementById('map-title').innerHTML = "Updated 2025-3-2";

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
        "name": "traffic between 2023-07-26 and 2025-02-28"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          364696,50
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
        "name": "scans between 2023-07-26 and 2025-02-28"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225958,32,
          364696,50
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
        "name": "attacks between 2023-07-26 and 2025-02-28"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138738,21,
          364696,50
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

  document.getElementById('map-title').innerHTML = "Actualizado 2025-3-2";

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
        "name": "tráfico entre 2023-07-26 y 2025-02-28"
      },
      "type": "circle",
      "source": "all-traffic",
      "layout": {
        "visibility": vat
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          364696,50
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
        "name": "escaneos entre 2023-07-26 y 2025-02-28"
      },
      "type": "circle",
      "source": "all-scans",
      "layout": {
        "visibility": vas
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          225958,32,
          364696,50
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
        "name": "ataques entre 2023-07-26 y 2025-02-28"
      },
      "type": "circle",
      "source": "all-attacks",
      "layout": {
        "visibility": vaa
      },
      "paint": {
        "circle-radius": ["interpolate", ["linear"], ["get", "count"],
          1,3,
          138738,21,
          364696,50
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
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:06:09<SeP>2023-07-28 22:12:18<SeP>2023-07-30 09:18:27<SeP>2023-07-31 20:24:36<SeP>2023-08-02 07:30:45<SeP>2023-08-03 18:36:54<SeP>2023-08-05 05:43:03<SeP>2023-08-06 16:49:12<SeP>2023-08-08 03:55:21<SeP>2023-08-09 15:01:30<SeP>2023-08-11 02:07:39<SeP>2023-08-12 13:13:48<SeP>2023-08-14 00:19:57<SeP>2023-08-15 11:26:06<SeP>2023-08-16 22:32:15<SeP>2023-08-18 09:38:24<SeP>2023-08-19 20:44:33<SeP>2023-08-21 07:50:42<SeP>2023-08-22 18:56:51<SeP>2023-08-24 06:03:00<SeP>2023-08-25 17:09:09<SeP>2023-08-27 04:15:18<SeP>2023-08-28 15:21:27<SeP>2023-08-30 02:27:36<SeP>2023-08-31 13:33:45<SeP>2023-09-02 00:39:54<SeP>2023-09-03 11:46:03<SeP>2023-09-04 22:52:12<SeP>2023-09-06 09:58:21<SeP>2023-09-07 21:04:30<SeP>2023-09-09 08:10:39<SeP>2023-09-10 19:16:48<SeP>2023-09-12 06:22:57<SeP>2023-09-13 17:29:06<SeP>2023-09-15 04:35:15<SeP>2023-09-16 15:41:24<SeP>2023-09-18 02:47:33<SeP>2023-09-19 13:53:42<SeP>2023-09-21 00:59:51<SeP>2023-09-22 12:06:00<SeP>2023-09-23 23:12:09<SeP>2023-09-25 10:18:18<SeP>2023-09-26 21:24:27<SeP>2023-09-28 08:30:36<SeP>2023-09-29 19:36:45<SeP>2023-10-01 06:42:54<SeP>2023-10-02 17:49:03<SeP>2023-10-04 04:55:12<SeP>2023-10-05 16:01:21<SeP>2023-10-07 03:07:30<SeP>2023-10-08 14:13:39<SeP>2023-10-10 01:19:48<SeP>2023-10-11 12:25:57<SeP>2023-10-12 23:32:06<SeP>2023-10-14 10:38:15<SeP>2023-10-15 21:44:24<SeP>2023-10-17 08:50:33<SeP>2023-10-18 19:56:42<SeP>2023-10-20 07:02:51<SeP>2023-10-21 18:09:00<SeP>2023-10-23 05:15:09<SeP>2023-10-24 16:21:18<SeP>2023-10-26 03:27:27<SeP>2023-10-27 14:33:36<SeP>2023-10-29 01:39:45<SeP>2023-10-30 12:45:54<SeP>2023-10-31 23:52:03<SeP>2023-11-02 10:58:12<SeP>2023-11-03 22:04:21<SeP>2023-11-05 08:10:30<SeP>2023-11-06 19:16:39<SeP>2023-11-08 06:22:48<SeP>2023-11-09 17:28:57<SeP>2023-11-11 04:35:06<SeP>2023-11-12 15:41:15<SeP>2023-11-14 02:47:24<SeP>2023-11-15 13:53:33<SeP>2023-11-17 00:59:42<SeP>2023-11-18 12:05:51<SeP>2023-11-19 23:12:00<SeP>2023-11-21 10:18:09<SeP>2023-11-22 21:24:18<SeP>2023-11-24 08:30:27<SeP>2023-11-25 19:36:36<SeP>2023-11-27 06:42:45<SeP>2023-11-28 17:48:54<SeP>2023-11-30 04:55:03<SeP>2023-12-01 16:01:12<SeP>2023-12-03 03:07:21<SeP>2023-12-04 14:13:30<SeP>2023-12-06 01:19:39<SeP>2023-12-07 12:25:48<SeP>2023-12-08 23:31:57<SeP>2023-12-10 10:38:06<SeP>2023-12-11 21:44:15<SeP>2023-12-13 08:50:24<SeP>2023-12-14 19:56:33<SeP>2023-12-16 07:02:42<SeP>2023-12-17 18:08:51<SeP>2023-12-19 05:15:00<SeP>2023-12-20 16:21:09<SeP>2023-12-22 03:27:18<SeP>2023-12-23 14:33:27<SeP>2023-12-25 01:39:36<SeP>2023-12-26 12:45:45<SeP>2023-12-27 23:51:54<SeP>2023-12-29 10:58:03<SeP>2023-12-30 22:04:12<SeP>2024-01-01 09:10:21<SeP>2024-01-02 20:16:30<SeP>2024-01-04 07:22:39<SeP>2024-01-05 18:28:48<SeP>2024-01-07 05:34:57<SeP>2024-01-08 16:41:06<SeP>2024-01-10 03:47:15<SeP>2024-01-11 14:53:24<SeP>2024-01-13 01:59:33<SeP>2024-01-14 13:05:42<SeP>2024-01-16 00:11:51<SeP>2024-01-17 11:18:00<SeP>2024-01-18 22:24:09<SeP>2024-01-20 09:30:18<SeP>2024-01-21 20:36:27<SeP>2024-01-23 07:42:36<SeP>2024-01-24 18:48:45<SeP>2024-01-26 05:54:54<SeP>2024-01-27 17:01:03<SeP>2024-01-29 04:07:12<SeP>2024-01-30 15:13:21<SeP>2024-02-01 02:19:30<SeP>2024-02-02 13:25:39<SeP>2024-02-04 00:31:48<SeP>2024-02-05 11:37:57<SeP>2024-02-06 22:44:06<SeP>2024-02-08 09:50:15<SeP>2024-02-09 20:56:24<SeP>2024-02-11 08:02:33<SeP>2024-02-12 19:08:42<SeP>2024-02-14 06:14:51<SeP>2024-02-15 17:21:00<SeP>2024-02-17 04:27:09<SeP>2024-02-18 15:33:18<SeP>2024-02-20 02:39:27<SeP>2024-02-21 13:45:36<SeP>2024-02-23 00:51:45<SeP>2024-02-24 11:57:54<SeP>2024-02-25 23:04:03<SeP>2024-02-27 10:10:12<SeP>2024-02-28 21:16:21<SeP>2024-03-01 08:22:30<SeP>2024-03-02 19:28:39<SeP>2024-03-04 06:34:48<SeP>2024-03-05 17:40:57<SeP>2024-03-07 04:47:06<SeP>2024-03-08 15:53:15<SeP>2024-03-10 03:59:24<SeP>2024-03-11 15:05:33<SeP>2024-03-13 02:11:42<SeP>2024-03-14 13:17:51<SeP>2024-03-16 00:24:00<SeP>2024-03-17 11:30:09<SeP>2024-03-18 22:36:18<SeP>2024-03-20 09:42:27<SeP>2024-03-21 20:48:36<SeP>2024-03-23 07:54:45<SeP>2024-03-24 19:00:54<SeP>2024-03-26 06:07:03<SeP>2024-03-27 17:13:12<SeP>2024-03-29 04:19:21<SeP>2024-03-30 15:25:30<SeP>2024-04-01 02:31:39<SeP>2024-04-02 13:37:48<SeP>2024-04-04 00:43:57<SeP>2024-04-05 11:50:06<SeP>2024-04-06 22:56:15<SeP>2024-04-08 10:02:24<SeP>2024-04-09 21:08:33<SeP>2024-04-11 08:14:42<SeP>2024-04-12 19:20:51<SeP>2024-04-14 06:27:00<SeP>2024-04-15 17:33:09<SeP>2024-04-17 04:39:18<SeP>2024-04-18 15:45:27<SeP>2024-04-20 02:51:36<SeP>2024-04-21 13:57:45<SeP>2024-04-23 01:03:54<SeP>2024-04-24 12:10:03<SeP>2024-04-25 23:16:12<SeP>2024-04-27 10:22:21<SeP>2024-04-28 21:28:30<SeP>2024-04-30 08:34:39<SeP>2024-05-01 19:40:48<SeP>2024-05-03 06:46:57<SeP>2024-05-04 17:53:06<SeP>2024-05-06 04:59:15<SeP>2024-05-07 16:05:24<SeP>2024-05-09 03:11:33<SeP>2024-05-10 14:17:42<SeP>2024-05-12 01:23:51<SeP>2024-05-13 12:30:00<SeP>2024-05-14 23:36:09<SeP>2024-05-16 10:42:18<SeP>2024-05-17 21:48:27<SeP>2024-05-19 08:54:36<SeP>2024-05-20 20:00:45<SeP>2024-05-22 07:06:54<SeP>2024-05-23 18:13:03<SeP>2024-05-25 05:19:12<SeP>2024-05-26 16:25:21<SeP>2024-05-28 03:31:30<SeP>2024-05-29 14:37:39<SeP>2024-05-31 01:43:48<SeP>2024-06-01 12:49:57<SeP>2024-06-02 23:56:06<SeP>2024-06-04 11:02:15<SeP>2024-06-05 22:08:24<SeP>2024-06-07 09:14:33<SeP>2024-06-08 20:20:42<SeP>2024-06-10 07:26:51<SeP>2024-06-11 18:33:00<SeP>2024-06-13 05:39:09<SeP>2024-06-14 16:45:18<SeP>2024-06-16 03:51:27<SeP>2024-06-17 14:57:36<SeP>2024-06-19 02:03:45<SeP>2024-06-20 13:09:54<SeP>2024-06-22 00:16:03<SeP>2024-06-23 11:22:12<SeP>2024-06-24 22:28:21<SeP>2024-06-26 09:34:30<SeP>2024-06-27 20:40:39<SeP>2024-06-29 07:46:48<SeP>2024-06-30 18:52:57<SeP>2024-07-02 05:59:06<SeP>2024-07-03 17:05:15<SeP>2024-07-05 04:11:24<SeP>2024-07-06 15:17:33<SeP>2024-07-08 02:23:42<SeP>2024-07-09 13:29:51<SeP>2024-07-11 00:36:00<SeP>2024-07-12 11:42:09<SeP>2024-07-13 22:48:18<SeP>2024-07-15 09:54:27<SeP>2024-07-16 21:00:36<SeP>2024-07-18 08:06:45<SeP>2024-07-19 19:12:54<SeP>2024-07-21 06:19:03<SeP>2024-07-22 17:25:12<SeP>2024-07-24 04:31:21<SeP>2024-07-25 15:37:30<SeP>2024-07-27 02:43:39<SeP>2024-07-28 13:49:48<SeP>2024-07-30 00:55:57<SeP>2024-07-31 12:02:06<SeP>2024-08-01 23:08:15<SeP>2024-08-03 10:14:24<SeP>2024-08-04 21:20:33<SeP>2024-08-06 08:26:42<SeP>2024-08-07 19:32:51<SeP>2024-08-09 06:39:00<SeP>2024-08-10 17:45:09<SeP>2024-08-12 04:51:18<SeP>2024-08-13 15:57:27<SeP>2024-08-15 03:03:36<SeP>2024-08-16 14:09:45<SeP>2024-08-18 01:15:54<SeP>2024-08-19 12:22:03<SeP>2024-08-20 23:28:12<SeP>2024-08-22 10:34:21<SeP>2024-08-23 21:40:30<SeP>2024-08-25 08:46:39<SeP>2024-08-26 19:52:48<SeP>2024-08-28 06:58:57<SeP>2024-08-29 18:05:06<SeP>2024-08-31 05:11:15<SeP>2024-09-01 16:17:24<SeP>2024-09-03 03:23:33<SeP>2024-09-04 14:29:42<SeP>2024-09-06 01:35:51<SeP>2024-09-07 12:42:00<SeP>2024-09-08 23:48:09<SeP>2024-09-10 10:54:18<SeP>2024-09-11 22:00:27<SeP>2024-09-13 09:06:36<SeP>2024-09-14 20:12:45<SeP>2024-09-16 07:18:54<SeP>2024-09-17 18:25:03<SeP>2024-09-19 05:31:12<SeP>2024-09-20 16:37:21<SeP>2024-09-22 03:43:30<SeP>2024-09-23 14:49:39<SeP>2024-09-25 01:55:48<SeP>2024-09-26 13:01:57<SeP>2024-09-28 00:08:06<SeP>2024-09-29 11:14:15<SeP>2024-09-30 22:20:24<SeP>2024-10-02 09:26:33<SeP>2024-10-03 20:32:42<SeP>2024-10-05 07:38:51<SeP>2024-10-06 18:45:00<SeP>2024-10-08 05:51:09<SeP>2024-10-09 16:57:18<SeP>2024-10-11 04:03:27<SeP>2024-10-12 15:09:36<SeP>2024-10-14 02:15:45<SeP>2024-10-15 13:21:54<SeP>2024-10-17 00:28:03<SeP>2024-10-18 11:34:12<SeP>2024-10-19 22:40:21<SeP>2024-10-21 09:46:30<SeP>2024-10-22 20:52:39<SeP>2024-10-24 07:58:48<SeP>2024-10-25 19:04:57<SeP>2024-10-27 06:11:06<SeP>2024-10-28 17:17:15<SeP>2024-10-30 04:23:24<SeP>2024-10-31 15:29:33<SeP>2024-11-02 02:35:42<SeP>2024-11-03 12:41:51<SeP>2024-11-04 23:48:00<SeP>2024-11-06 10:54:09<SeP>2024-11-07 22:00:18<SeP>2024-11-09 09:06:27<SeP>2024-11-10 20:12:36<SeP>2024-11-12 07:18:45<SeP>2024-11-13 18:24:54<SeP>2024-11-15 05:31:03<SeP>2024-11-16 16:37:12<SeP>2024-11-18 03:43:21<SeP>2024-11-19 14:49:30<SeP>2024-11-21 01:55:39<SeP>2024-11-22 13:01:48<SeP>2024-11-24 00:07:57<SeP>2024-11-25 11:14:06<SeP>2024-11-26 22:20:15<SeP>2024-11-28 09:26:24<SeP>2024-11-29 20:32:33<SeP>2024-12-01 07:38:42<SeP>2024-12-02 18:44:51<SeP>2024-12-04 05:51:00<SeP>2024-12-05 16:57:09<SeP>2024-12-07 04:03:18<SeP>2024-12-08 15:09:27<SeP>2024-12-10 02:15:36<SeP>2024-12-11 13:21:45<SeP>2024-12-13 00:27:54<SeP>2024-12-14 11:34:03<SeP>2024-12-15 22:40:12<SeP>2024-12-17 09:46:21<SeP>2024-12-18 20:52:30<SeP>2024-12-20 07:58:39<SeP>2024-12-21 19:04:48<SeP>2024-12-23 06:10:57<SeP>2024-12-24 17:17:06<SeP>2024-12-26 04:23:15<SeP>2024-12-27 15:29:24<SeP>2024-12-29 02:35:33<SeP>2024-12-30 13:41:42<SeP>2025-01-01 00:47:51<SeP>2025-01-02 11:54:00<SeP>2025-01-03 23:00:09<SeP>2025-01-05 10:06:18<SeP>2025-01-06 21:12:27<SeP>2025-01-08 08:18:36<SeP>2025-01-09 19:24:45<SeP>2025-01-11 06:30:54<SeP>2025-01-12 17:37:03<SeP>2025-01-14 04:43:12<SeP>2025-01-15 15:49:21<SeP>2025-01-17 02:55:30<SeP>2025-01-18 14:01:39<SeP>2025-01-20 01:07:48<SeP>2025-01-21 12:13:57<SeP>2025-01-22 23:20:06<SeP>2025-01-24 10:26:15<SeP>2025-01-25 21:32:24<SeP>2025-01-27 08:38:33<SeP>2025-01-28 19:44:42<SeP>2025-01-30 06:50:51<SeP>2025-01-31 17:57:00<SeP>2025-02-02 05:03:09<SeP>2025-02-03 16:09:18<SeP>2025-02-05 03:15:27<SeP>2025-02-06 14:21:36<SeP>2025-02-08 01:27:45<SeP>2025-02-09 12:33:54<SeP>2025-02-10 23:40:03<SeP>2025-02-12 10:46:12<SeP>2025-02-13 21:52:21<SeP>2025-02-15 08:58:30<SeP>2025-02-16 20:04:39<SeP>2025-02-18 07:10:48<SeP>2025-02-19 18:16:57<SeP>2025-02-21 05:23:06<SeP>2025-02-22 16:29:15<SeP>2025-02-24 03:35:24<SeP>2025-02-25 14:41:33<SeP>2025-02-27 01:47:42<SeP>2025-02-28 12:53:51";
  const item1Label       = "Scans";
  const item1Data        = "767<SeP>1492<SeP>1385<SeP>1441<SeP>1256<SeP>1709<SeP>959<SeP>961<SeP>1186<SeP>3382<SeP>2354<SeP>1916<SeP>2924<SeP>1385<SeP>736<SeP>966<SeP>1383<SeP>2914<SeP>1222<SeP>1664<SeP>1294<SeP>914<SeP>1001<SeP>1339<SeP>821<SeP>925<SeP>791<SeP>3153<SeP>1294<SeP>1035<SeP>826<SeP>1349<SeP>1291<SeP>797<SeP>3092<SeP>1883<SeP>2631<SeP>1804<SeP>1553<SeP>1378<SeP>1345<SeP>1962<SeP>1959<SeP>2002<SeP>1503<SeP>1648<SeP>1516<SeP>1766<SeP>1705<SeP>1852<SeP>1870<SeP>1703<SeP>1488<SeP>3249<SeP>1594<SeP>1534<SeP>2113<SeP>1879<SeP>2218<SeP>1751<SeP>3415<SeP>1327<SeP>1538<SeP>1601<SeP>1272<SeP>1877<SeP>1701<SeP>1217<SeP>1445<SeP>1352<SeP>1186<SeP>2287<SeP>1208<SeP>1168<SeP>1301<SeP>5375<SeP>4020<SeP>1380<SeP>1334<SeP>1759<SeP>1948<SeP>1121<SeP>5826<SeP>2324<SeP>1704<SeP>972<SeP>1082<SeP>3294<SeP>1264<SeP>1060<SeP>994<SeP>1062<SeP>1044<SeP>3013<SeP>954<SeP>1424<SeP>3025<SeP>5429<SeP>2448<SeP>1018<SeP>914<SeP>915<SeP>992<SeP>1012<SeP>985<SeP>1033<SeP>3700<SeP>2315<SeP>1397<SeP>1640<SeP>663<SeP>928<SeP>1595<SeP>1057<SeP>1103<SeP>978<SeP>2229<SeP>1313<SeP>1058<SeP>990<SeP>1078<SeP>838<SeP>817<SeP>889<SeP>831<SeP>918<SeP>1042<SeP>825<SeP>829<SeP>797<SeP>949<SeP>828<SeP>686<SeP>896<SeP>853<SeP>872<SeP>928<SeP>816<SeP>843<SeP>715<SeP>785<SeP>1102<SeP>804<SeP>856<SeP>969<SeP>872<SeP>1132<SeP>972<SeP>748<SeP>533<SeP>956<SeP>830<SeP>1284<SeP>875<SeP>988<SeP>1271<SeP>1216<SeP>818<SeP>961<SeP>945<SeP>901<SeP>805<SeP>1073<SeP>940<SeP>959<SeP>904<SeP>1010<SeP>1013<SeP>1024<SeP>1014<SeP>1019<SeP>1096<SeP>908<SeP>932<SeP>1961<SeP>1327<SeP>1204<SeP>1074<SeP>929<SeP>1166<SeP>970<SeP>952<SeP>760<SeP>890<SeP>931<SeP>1089<SeP>797<SeP>1075<SeP>1280<SeP>1115<SeP>1135<SeP>1309<SeP>1180<SeP>1283<SeP>1275<SeP>1294<SeP>1518<SeP>1721<SeP>1688<SeP>1339<SeP>741<SeP>858<SeP>1148<SeP>1037<SeP>591<SeP>775<SeP>860<SeP>999<SeP>990<SeP>5981<SeP>2801<SeP>1892<SeP>1350<SeP>956<SeP>902<SeP>968<SeP>947<SeP>969<SeP>1096<SeP>1031<SeP>1074<SeP>1497<SeP>1896<SeP>1055<SeP>1276<SeP>1248<SeP>1192<SeP>1158<SeP>1036<SeP>999<SeP>1015<SeP>1137<SeP>1038<SeP>1142<SeP>946<SeP>1189<SeP>804<SeP>1412<SeP>1066<SeP>1168<SeP>1124<SeP>1336<SeP>1320<SeP>1357<SeP>1326<SeP>1144<SeP>1108<SeP>1230<SeP>1793<SeP>1464<SeP>1418<SeP>1944<SeP>1487<SeP>1583<SeP>1992<SeP>1325<SeP>1207<SeP>1059<SeP>1379<SeP>1271<SeP>1458<SeP>1143<SeP>1405<SeP>1683<SeP>1561<SeP>1489<SeP>1451<SeP>1470<SeP>1246<SeP>959<SeP>1173<SeP>1290<SeP>1163<SeP>1251<SeP>1432<SeP>1085<SeP>1554<SeP>1755<SeP>1260<SeP>1453<SeP>1612<SeP>1374<SeP>928<SeP>1026<SeP>991<SeP>995<SeP>840<SeP>1006<SeP>1740<SeP>1189<SeP>1045<SeP>1124<SeP>955<SeP>776<SeP>1137<SeP>1350<SeP>821<SeP>943<SeP>930<SeP>1311<SeP>1578<SeP>1474<SeP>1090<SeP>1129<SeP>990<SeP>1794<SeP>1107<SeP>1074<SeP>1104<SeP>1194<SeP>1426<SeP>956<SeP>972<SeP>1267<SeP>1045<SeP>838<SeP>902<SeP>1095<SeP>1567<SeP>1438<SeP>1541<SeP>1430<SeP>1141<SeP>896<SeP>1138<SeP>1287<SeP>1137<SeP>1152<SeP>1001<SeP>1057<SeP>1143<SeP>1557<SeP>1303<SeP>1540<SeP>1281<SeP>1501<SeP>1553<SeP>1466<SeP>1223<SeP>1521<SeP>1501<SeP>1350<SeP>1388<SeP>1544<SeP>1584<SeP>1483<SeP>1384<SeP>1402<SeP>1384<SeP>1176<SeP>1275<SeP>1435<SeP>1653<SeP>1457<SeP>1289<SeP>1105<SeP>1489<SeP>1188<SeP>1387<SeP>1157<SeP>1673<SeP>1899<SeP>1344<SeP>872<SeP>1059<SeP>1833<SeP>1434<SeP>1265<SeP>1421<SeP>996<SeP>1387<SeP>1339<SeP>1388<SeP>1404<SeP>1466<SeP>1669<SeP>1554<SeP>1424<SeP>1614<SeP>1402<SeP>1357<SeP>1722<SeP>1530<SeP>1307<SeP>1176<SeP>1575<SeP>1786<SeP>1854<SeP>1775<SeP>1841<SeP>1511<SeP>1623<SeP>1583<SeP>1588<SeP>1522<SeP>1558<SeP>1734<SeP>1905<SeP>1429<SeP>1421";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Attacks";
  const item2Data        = "155<SeP>614<SeP>1144<SeP>683<SeP>442<SeP>219<SeP>6972<SeP>536<SeP>9522<SeP>573<SeP>396<SeP>1125<SeP>1266<SeP>270<SeP>148<SeP>461<SeP>112<SeP>764<SeP>280<SeP>5841<SeP>7246<SeP>7092<SeP>8232<SeP>5126<SeP>198<SeP>284<SeP>425<SeP>227<SeP>5695<SeP>481<SeP>173<SeP>305<SeP>451<SeP>318<SeP>5320<SeP>10316<SeP>8782<SeP>10915<SeP>7884<SeP>5285<SeP>7425<SeP>6649<SeP>9916<SeP>9083<SeP>7711<SeP>7935<SeP>8520<SeP>8846<SeP>8132<SeP>6203<SeP>6075<SeP>11592<SeP>7098<SeP>8090<SeP>7470<SeP>9650<SeP>11315<SeP>21314<SeP>11543<SeP>9320<SeP>10229<SeP>6118<SeP>9219<SeP>7485<SeP>9069<SeP>9135<SeP>5931<SeP>6520<SeP>7369<SeP>6977<SeP>2297<SeP>6103<SeP>5380<SeP>6675<SeP>6645<SeP>8185<SeP>2759<SeP>6180<SeP>6281<SeP>6490<SeP>5982<SeP>6514<SeP>3947<SeP>7255<SeP>5205<SeP>5570<SeP>5818<SeP>6729<SeP>21700<SeP>12858<SeP>32582<SeP>7770<SeP>7795<SeP>6986<SeP>11129<SeP>7908<SeP>4340<SeP>6278<SeP>3401<SeP>5429<SeP>7084<SeP>4896<SeP>8856<SeP>6658<SeP>5022<SeP>4850<SeP>5684<SeP>9683<SeP>8005<SeP>7676<SeP>4675<SeP>5866<SeP>10182<SeP>8573<SeP>4863<SeP>3278<SeP>6469<SeP>9331<SeP>4846<SeP>7374<SeP>9292<SeP>4188<SeP>3006<SeP>1083<SeP>1692<SeP>1819<SeP>2503<SeP>860<SeP>1359<SeP>551<SeP>1655<SeP>1281<SeP>1153<SeP>1104<SeP>827<SeP>1127<SeP>746<SeP>1462<SeP>1483<SeP>1124<SeP>1634<SeP>2041<SeP>1474<SeP>9801<SeP>7224<SeP>10570<SeP>8199<SeP>6048<SeP>11113<SeP>7250<SeP>8718<SeP>9436<SeP>10468<SeP>11686<SeP>7309<SeP>13377<SeP>13619<SeP>6782<SeP>10459<SeP>5572<SeP>5350<SeP>7304<SeP>25092<SeP>6118<SeP>8452<SeP>9630<SeP>17154<SeP>8299<SeP>6892<SeP>6853<SeP>6051<SeP>13887<SeP>20265<SeP>7826<SeP>10412<SeP>5496<SeP>6936<SeP>5588<SeP>10545<SeP>10896<SeP>5831<SeP>14843<SeP>7481<SeP>8350<SeP>6434<SeP>6165<SeP>3535<SeP>7065<SeP>7520<SeP>4627<SeP>6494<SeP>8134<SeP>5714<SeP>19451<SeP>7897<SeP>6521<SeP>5896<SeP>8617<SeP>10408<SeP>7345<SeP>2505<SeP>4776<SeP>4993<SeP>4019<SeP>4670<SeP>2459<SeP>625<SeP>592<SeP>154<SeP>622<SeP>586<SeP>783<SeP>349<SeP>662<SeP>1339<SeP>1400<SeP>3073<SeP>22804<SeP>626<SeP>4468<SeP>3824<SeP>2952<SeP>6943<SeP>2739<SeP>4234<SeP>3268<SeP>3083<SeP>3049<SeP>3151<SeP>4720<SeP>1763<SeP>2919<SeP>2619<SeP>2202<SeP>1949<SeP>1913<SeP>1136<SeP>1911<SeP>795<SeP>925<SeP>1776<SeP>23893<SeP>4333<SeP>3345<SeP>3334<SeP>3067<SeP>2776<SeP>3774<SeP>1588<SeP>3726<SeP>2574<SeP>3294<SeP>2512<SeP>2950<SeP>3110<SeP>3290<SeP>6697<SeP>4689<SeP>4065<SeP>3388<SeP>3177<SeP>3380<SeP>4003<SeP>5943<SeP>8018<SeP>5666<SeP>2311<SeP>3183<SeP>2512<SeP>4840<SeP>3606<SeP>3063<SeP>2614<SeP>4141<SeP>4934<SeP>3923<SeP>5848<SeP>3951<SeP>6556<SeP>4828<SeP>5406<SeP>4977<SeP>21658<SeP>5746<SeP>11024<SeP>1755<SeP>2976<SeP>4156<SeP>3638<SeP>5305<SeP>3664<SeP>4664<SeP>4417<SeP>4830<SeP>3096<SeP>4231<SeP>1981<SeP>1393<SeP>2169<SeP>3637<SeP>2651<SeP>2848<SeP>3598<SeP>4461<SeP>3728<SeP>3317<SeP>4282<SeP>3486<SeP>3121<SeP>5775<SeP>7922<SeP>6089<SeP>4628<SeP>5103<SeP>4591<SeP>3458<SeP>4071<SeP>3962<SeP>6355<SeP>5459<SeP>4625<SeP>3826<SeP>948<SeP>785<SeP>2231<SeP>1365<SeP>1089<SeP>1855<SeP>1559<SeP>1061<SeP>3115<SeP>4166<SeP>6445<SeP>23588<SeP>14970<SeP>5589<SeP>13684<SeP>14582<SeP>5381<SeP>5950<SeP>4871<SeP>19745<SeP>9401<SeP>5336<SeP>4591<SeP>4751<SeP>6351<SeP>22124<SeP>13470<SeP>3931<SeP>3618<SeP>3998<SeP>5694<SeP>4928<SeP>2986<SeP>3254<SeP>4390<SeP>5205<SeP>5347<SeP>17911<SeP>4921<SeP>5937<SeP>5960<SeP>2200<SeP>2838<SeP>3727<SeP>4942<SeP>4351<SeP>3501<SeP>2603<SeP>3574<SeP>2811<SeP>4579<SeP>5001<SeP>8493<SeP>10624<SeP>8205<SeP>9288<SeP>7858<SeP>7884<SeP>4769<SeP>5263<SeP>3690<SeP>25663<SeP>3700<SeP>3166<SeP>3965<SeP>10707<SeP>5569<SeP>4946<SeP>3679<SeP>4888<SeP>3366<SeP>5432<SeP>9266<SeP>8310<SeP>4330<SeP>2733<SeP>3472<SeP>1874";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendEnglish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Scans Trend";
  const yaxisTitle       = "Number of Scans";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:06:09<SeP>2023-07-28 22:12:18<SeP>2023-07-30 09:18:27<SeP>2023-07-31 20:24:36<SeP>2023-08-02 07:30:45<SeP>2023-08-03 18:36:54<SeP>2023-08-05 05:43:03<SeP>2023-08-06 16:49:12<SeP>2023-08-08 03:55:21<SeP>2023-08-09 15:01:30<SeP>2023-08-11 02:07:39<SeP>2023-08-12 13:13:48<SeP>2023-08-14 00:19:57<SeP>2023-08-15 11:26:06<SeP>2023-08-16 22:32:15<SeP>2023-08-18 09:38:24<SeP>2023-08-19 20:44:33<SeP>2023-08-21 07:50:42<SeP>2023-08-22 18:56:51<SeP>2023-08-24 06:03:00<SeP>2023-08-25 17:09:09<SeP>2023-08-27 04:15:18<SeP>2023-08-28 15:21:27<SeP>2023-08-30 02:27:36<SeP>2023-08-31 13:33:45<SeP>2023-09-02 00:39:54<SeP>2023-09-03 11:46:03<SeP>2023-09-04 22:52:12<SeP>2023-09-06 09:58:21<SeP>2023-09-07 21:04:30<SeP>2023-09-09 08:10:39<SeP>2023-09-10 19:16:48<SeP>2023-09-12 06:22:57<SeP>2023-09-13 17:29:06<SeP>2023-09-15 04:35:15<SeP>2023-09-16 15:41:24<SeP>2023-09-18 02:47:33<SeP>2023-09-19 13:53:42<SeP>2023-09-21 00:59:51<SeP>2023-09-22 12:06:00<SeP>2023-09-23 23:12:09<SeP>2023-09-25 10:18:18<SeP>2023-09-26 21:24:27<SeP>2023-09-28 08:30:36<SeP>2023-09-29 19:36:45<SeP>2023-10-01 06:42:54<SeP>2023-10-02 17:49:03<SeP>2023-10-04 04:55:12<SeP>2023-10-05 16:01:21<SeP>2023-10-07 03:07:30<SeP>2023-10-08 14:13:39<SeP>2023-10-10 01:19:48<SeP>2023-10-11 12:25:57<SeP>2023-10-12 23:32:06<SeP>2023-10-14 10:38:15<SeP>2023-10-15 21:44:24<SeP>2023-10-17 08:50:33<SeP>2023-10-18 19:56:42<SeP>2023-10-20 07:02:51<SeP>2023-10-21 18:09:00<SeP>2023-10-23 05:15:09<SeP>2023-10-24 16:21:18<SeP>2023-10-26 03:27:27<SeP>2023-10-27 14:33:36<SeP>2023-10-29 01:39:45<SeP>2023-10-30 12:45:54<SeP>2023-10-31 23:52:03<SeP>2023-11-02 10:58:12<SeP>2023-11-03 22:04:21<SeP>2023-11-05 08:10:30<SeP>2023-11-06 19:16:39<SeP>2023-11-08 06:22:48<SeP>2023-11-09 17:28:57<SeP>2023-11-11 04:35:06<SeP>2023-11-12 15:41:15<SeP>2023-11-14 02:47:24<SeP>2023-11-15 13:53:33<SeP>2023-11-17 00:59:42<SeP>2023-11-18 12:05:51<SeP>2023-11-19 23:12:00<SeP>2023-11-21 10:18:09<SeP>2023-11-22 21:24:18<SeP>2023-11-24 08:30:27<SeP>2023-11-25 19:36:36<SeP>2023-11-27 06:42:45<SeP>2023-11-28 17:48:54<SeP>2023-11-30 04:55:03<SeP>2023-12-01 16:01:12<SeP>2023-12-03 03:07:21<SeP>2023-12-04 14:13:30<SeP>2023-12-06 01:19:39<SeP>2023-12-07 12:25:48<SeP>2023-12-08 23:31:57<SeP>2023-12-10 10:38:06<SeP>2023-12-11 21:44:15<SeP>2023-12-13 08:50:24<SeP>2023-12-14 19:56:33<SeP>2023-12-16 07:02:42<SeP>2023-12-17 18:08:51<SeP>2023-12-19 05:15:00<SeP>2023-12-20 16:21:09<SeP>2023-12-22 03:27:18<SeP>2023-12-23 14:33:27<SeP>2023-12-25 01:39:36<SeP>2023-12-26 12:45:45<SeP>2023-12-27 23:51:54<SeP>2023-12-29 10:58:03<SeP>2023-12-30 22:04:12<SeP>2024-01-01 09:10:21<SeP>2024-01-02 20:16:30<SeP>2024-01-04 07:22:39<SeP>2024-01-05 18:28:48<SeP>2024-01-07 05:34:57<SeP>2024-01-08 16:41:06<SeP>2024-01-10 03:47:15<SeP>2024-01-11 14:53:24<SeP>2024-01-13 01:59:33<SeP>2024-01-14 13:05:42<SeP>2024-01-16 00:11:51<SeP>2024-01-17 11:18:00<SeP>2024-01-18 22:24:09<SeP>2024-01-20 09:30:18<SeP>2024-01-21 20:36:27<SeP>2024-01-23 07:42:36<SeP>2024-01-24 18:48:45<SeP>2024-01-26 05:54:54<SeP>2024-01-27 17:01:03<SeP>2024-01-29 04:07:12<SeP>2024-01-30 15:13:21<SeP>2024-02-01 02:19:30<SeP>2024-02-02 13:25:39<SeP>2024-02-04 00:31:48<SeP>2024-02-05 11:37:57<SeP>2024-02-06 22:44:06<SeP>2024-02-08 09:50:15<SeP>2024-02-09 20:56:24<SeP>2024-02-11 08:02:33<SeP>2024-02-12 19:08:42<SeP>2024-02-14 06:14:51<SeP>2024-02-15 17:21:00<SeP>2024-02-17 04:27:09<SeP>2024-02-18 15:33:18<SeP>2024-02-20 02:39:27<SeP>2024-02-21 13:45:36<SeP>2024-02-23 00:51:45<SeP>2024-02-24 11:57:54<SeP>2024-02-25 23:04:03<SeP>2024-02-27 10:10:12<SeP>2024-02-28 21:16:21<SeP>2024-03-01 08:22:30<SeP>2024-03-02 19:28:39<SeP>2024-03-04 06:34:48<SeP>2024-03-05 17:40:57<SeP>2024-03-07 04:47:06<SeP>2024-03-08 15:53:15<SeP>2024-03-10 03:59:24<SeP>2024-03-11 15:05:33<SeP>2024-03-13 02:11:42<SeP>2024-03-14 13:17:51<SeP>2024-03-16 00:24:00<SeP>2024-03-17 11:30:09<SeP>2024-03-18 22:36:18<SeP>2024-03-20 09:42:27<SeP>2024-03-21 20:48:36<SeP>2024-03-23 07:54:45<SeP>2024-03-24 19:00:54<SeP>2024-03-26 06:07:03<SeP>2024-03-27 17:13:12<SeP>2024-03-29 04:19:21<SeP>2024-03-30 15:25:30<SeP>2024-04-01 02:31:39<SeP>2024-04-02 13:37:48<SeP>2024-04-04 00:43:57<SeP>2024-04-05 11:50:06<SeP>2024-04-06 22:56:15<SeP>2024-04-08 10:02:24<SeP>2024-04-09 21:08:33<SeP>2024-04-11 08:14:42<SeP>2024-04-12 19:20:51<SeP>2024-04-14 06:27:00<SeP>2024-04-15 17:33:09<SeP>2024-04-17 04:39:18<SeP>2024-04-18 15:45:27<SeP>2024-04-20 02:51:36<SeP>2024-04-21 13:57:45<SeP>2024-04-23 01:03:54<SeP>2024-04-24 12:10:03<SeP>2024-04-25 23:16:12<SeP>2024-04-27 10:22:21<SeP>2024-04-28 21:28:30<SeP>2024-04-30 08:34:39<SeP>2024-05-01 19:40:48<SeP>2024-05-03 06:46:57<SeP>2024-05-04 17:53:06<SeP>2024-05-06 04:59:15<SeP>2024-05-07 16:05:24<SeP>2024-05-09 03:11:33<SeP>2024-05-10 14:17:42<SeP>2024-05-12 01:23:51<SeP>2024-05-13 12:30:00<SeP>2024-05-14 23:36:09<SeP>2024-05-16 10:42:18<SeP>2024-05-17 21:48:27<SeP>2024-05-19 08:54:36<SeP>2024-05-20 20:00:45<SeP>2024-05-22 07:06:54<SeP>2024-05-23 18:13:03<SeP>2024-05-25 05:19:12<SeP>2024-05-26 16:25:21<SeP>2024-05-28 03:31:30<SeP>2024-05-29 14:37:39<SeP>2024-05-31 01:43:48<SeP>2024-06-01 12:49:57<SeP>2024-06-02 23:56:06<SeP>2024-06-04 11:02:15<SeP>2024-06-05 22:08:24<SeP>2024-06-07 09:14:33<SeP>2024-06-08 20:20:42<SeP>2024-06-10 07:26:51<SeP>2024-06-11 18:33:00<SeP>2024-06-13 05:39:09<SeP>2024-06-14 16:45:18<SeP>2024-06-16 03:51:27<SeP>2024-06-17 14:57:36<SeP>2024-06-19 02:03:45<SeP>2024-06-20 13:09:54<SeP>2024-06-22 00:16:03<SeP>2024-06-23 11:22:12<SeP>2024-06-24 22:28:21<SeP>2024-06-26 09:34:30<SeP>2024-06-27 20:40:39<SeP>2024-06-29 07:46:48<SeP>2024-06-30 18:52:57<SeP>2024-07-02 05:59:06<SeP>2024-07-03 17:05:15<SeP>2024-07-05 04:11:24<SeP>2024-07-06 15:17:33<SeP>2024-07-08 02:23:42<SeP>2024-07-09 13:29:51<SeP>2024-07-11 00:36:00<SeP>2024-07-12 11:42:09<SeP>2024-07-13 22:48:18<SeP>2024-07-15 09:54:27<SeP>2024-07-16 21:00:36<SeP>2024-07-18 08:06:45<SeP>2024-07-19 19:12:54<SeP>2024-07-21 06:19:03<SeP>2024-07-22 17:25:12<SeP>2024-07-24 04:31:21<SeP>2024-07-25 15:37:30<SeP>2024-07-27 02:43:39<SeP>2024-07-28 13:49:48<SeP>2024-07-30 00:55:57<SeP>2024-07-31 12:02:06<SeP>2024-08-01 23:08:15<SeP>2024-08-03 10:14:24<SeP>2024-08-04 21:20:33<SeP>2024-08-06 08:26:42<SeP>2024-08-07 19:32:51<SeP>2024-08-09 06:39:00<SeP>2024-08-10 17:45:09<SeP>2024-08-12 04:51:18<SeP>2024-08-13 15:57:27<SeP>2024-08-15 03:03:36<SeP>2024-08-16 14:09:45<SeP>2024-08-18 01:15:54<SeP>2024-08-19 12:22:03<SeP>2024-08-20 23:28:12<SeP>2024-08-22 10:34:21<SeP>2024-08-23 21:40:30<SeP>2024-08-25 08:46:39<SeP>2024-08-26 19:52:48<SeP>2024-08-28 06:58:57<SeP>2024-08-29 18:05:06<SeP>2024-08-31 05:11:15<SeP>2024-09-01 16:17:24<SeP>2024-09-03 03:23:33<SeP>2024-09-04 14:29:42<SeP>2024-09-06 01:35:51<SeP>2024-09-07 12:42:00<SeP>2024-09-08 23:48:09<SeP>2024-09-10 10:54:18<SeP>2024-09-11 22:00:27<SeP>2024-09-13 09:06:36<SeP>2024-09-14 20:12:45<SeP>2024-09-16 07:18:54<SeP>2024-09-17 18:25:03<SeP>2024-09-19 05:31:12<SeP>2024-09-20 16:37:21<SeP>2024-09-22 03:43:30<SeP>2024-09-23 14:49:39<SeP>2024-09-25 01:55:48<SeP>2024-09-26 13:01:57<SeP>2024-09-28 00:08:06<SeP>2024-09-29 11:14:15<SeP>2024-09-30 22:20:24<SeP>2024-10-02 09:26:33<SeP>2024-10-03 20:32:42<SeP>2024-10-05 07:38:51<SeP>2024-10-06 18:45:00<SeP>2024-10-08 05:51:09<SeP>2024-10-09 16:57:18<SeP>2024-10-11 04:03:27<SeP>2024-10-12 15:09:36<SeP>2024-10-14 02:15:45<SeP>2024-10-15 13:21:54<SeP>2024-10-17 00:28:03<SeP>2024-10-18 11:34:12<SeP>2024-10-19 22:40:21<SeP>2024-10-21 09:46:30<SeP>2024-10-22 20:52:39<SeP>2024-10-24 07:58:48<SeP>2024-10-25 19:04:57<SeP>2024-10-27 06:11:06<SeP>2024-10-28 17:17:15<SeP>2024-10-30 04:23:24<SeP>2024-10-31 15:29:33<SeP>2024-11-02 02:35:42<SeP>2024-11-03 12:41:51<SeP>2024-11-04 23:48:00<SeP>2024-11-06 10:54:09<SeP>2024-11-07 22:00:18<SeP>2024-11-09 09:06:27<SeP>2024-11-10 20:12:36<SeP>2024-11-12 07:18:45<SeP>2024-11-13 18:24:54<SeP>2024-11-15 05:31:03<SeP>2024-11-16 16:37:12<SeP>2024-11-18 03:43:21<SeP>2024-11-19 14:49:30<SeP>2024-11-21 01:55:39<SeP>2024-11-22 13:01:48<SeP>2024-11-24 00:07:57<SeP>2024-11-25 11:14:06<SeP>2024-11-26 22:20:15<SeP>2024-11-28 09:26:24<SeP>2024-11-29 20:32:33<SeP>2024-12-01 07:38:42<SeP>2024-12-02 18:44:51<SeP>2024-12-04 05:51:00<SeP>2024-12-05 16:57:09<SeP>2024-12-07 04:03:18<SeP>2024-12-08 15:09:27<SeP>2024-12-10 02:15:36<SeP>2024-12-11 13:21:45<SeP>2024-12-13 00:27:54<SeP>2024-12-14 11:34:03<SeP>2024-12-15 22:40:12<SeP>2024-12-17 09:46:21<SeP>2024-12-18 20:52:30<SeP>2024-12-20 07:58:39<SeP>2024-12-21 19:04:48<SeP>2024-12-23 06:10:57<SeP>2024-12-24 17:17:06<SeP>2024-12-26 04:23:15<SeP>2024-12-27 15:29:24<SeP>2024-12-29 02:35:33<SeP>2024-12-30 13:41:42<SeP>2025-01-01 00:47:51<SeP>2025-01-02 11:54:00<SeP>2025-01-03 23:00:09<SeP>2025-01-05 10:06:18<SeP>2025-01-06 21:12:27<SeP>2025-01-08 08:18:36<SeP>2025-01-09 19:24:45<SeP>2025-01-11 06:30:54<SeP>2025-01-12 17:37:03<SeP>2025-01-14 04:43:12<SeP>2025-01-15 15:49:21<SeP>2025-01-17 02:55:30<SeP>2025-01-18 14:01:39<SeP>2025-01-20 01:07:48<SeP>2025-01-21 12:13:57<SeP>2025-01-22 23:20:06<SeP>2025-01-24 10:26:15<SeP>2025-01-25 21:32:24<SeP>2025-01-27 08:38:33<SeP>2025-01-28 19:44:42<SeP>2025-01-30 06:50:51<SeP>2025-01-31 17:57:00<SeP>2025-02-02 05:03:09<SeP>2025-02-03 16:09:18<SeP>2025-02-05 03:15:27<SeP>2025-02-06 14:21:36<SeP>2025-02-08 01:27:45<SeP>2025-02-09 12:33:54<SeP>2025-02-10 23:40:03<SeP>2025-02-12 10:46:12<SeP>2025-02-13 21:52:21<SeP>2025-02-15 08:58:30<SeP>2025-02-16 20:04:39<SeP>2025-02-18 07:10:48<SeP>2025-02-19 18:16:57<SeP>2025-02-21 05:23:06<SeP>2025-02-22 16:29:15<SeP>2025-02-24 03:35:24<SeP>2025-02-25 14:41:33<SeP>2025-02-27 01:47:42<SeP>2025-02-28 12:53:51";
  const itemLabel       = "Scans";
  const itemData        = "767<SeP>1492<SeP>1385<SeP>1441<SeP>1256<SeP>1709<SeP>959<SeP>961<SeP>1186<SeP>3382<SeP>2354<SeP>1916<SeP>2924<SeP>1385<SeP>736<SeP>966<SeP>1383<SeP>2914<SeP>1222<SeP>1664<SeP>1294<SeP>914<SeP>1001<SeP>1339<SeP>821<SeP>925<SeP>791<SeP>3153<SeP>1294<SeP>1035<SeP>826<SeP>1349<SeP>1291<SeP>797<SeP>3092<SeP>1883<SeP>2631<SeP>1804<SeP>1553<SeP>1378<SeP>1345<SeP>1962<SeP>1959<SeP>2002<SeP>1503<SeP>1648<SeP>1516<SeP>1766<SeP>1705<SeP>1852<SeP>1870<SeP>1703<SeP>1488<SeP>3249<SeP>1594<SeP>1534<SeP>2113<SeP>1879<SeP>2218<SeP>1751<SeP>3415<SeP>1327<SeP>1538<SeP>1601<SeP>1272<SeP>1877<SeP>1701<SeP>1217<SeP>1445<SeP>1352<SeP>1186<SeP>2287<SeP>1208<SeP>1168<SeP>1301<SeP>5375<SeP>4020<SeP>1380<SeP>1334<SeP>1759<SeP>1948<SeP>1121<SeP>5826<SeP>2324<SeP>1704<SeP>972<SeP>1082<SeP>3294<SeP>1264<SeP>1060<SeP>994<SeP>1062<SeP>1044<SeP>3013<SeP>954<SeP>1424<SeP>3025<SeP>5429<SeP>2448<SeP>1018<SeP>914<SeP>915<SeP>992<SeP>1012<SeP>985<SeP>1033<SeP>3700<SeP>2315<SeP>1397<SeP>1640<SeP>663<SeP>928<SeP>1595<SeP>1057<SeP>1103<SeP>978<SeP>2229<SeP>1313<SeP>1058<SeP>990<SeP>1078<SeP>838<SeP>817<SeP>889<SeP>831<SeP>918<SeP>1042<SeP>825<SeP>829<SeP>797<SeP>949<SeP>828<SeP>686<SeP>896<SeP>853<SeP>872<SeP>928<SeP>816<SeP>843<SeP>715<SeP>785<SeP>1102<SeP>804<SeP>856<SeP>969<SeP>872<SeP>1132<SeP>972<SeP>748<SeP>533<SeP>956<SeP>830<SeP>1284<SeP>875<SeP>988<SeP>1271<SeP>1216<SeP>818<SeP>961<SeP>945<SeP>901<SeP>805<SeP>1073<SeP>940<SeP>959<SeP>904<SeP>1010<SeP>1013<SeP>1024<SeP>1014<SeP>1019<SeP>1096<SeP>908<SeP>932<SeP>1961<SeP>1327<SeP>1204<SeP>1074<SeP>929<SeP>1166<SeP>970<SeP>952<SeP>760<SeP>890<SeP>931<SeP>1089<SeP>797<SeP>1075<SeP>1280<SeP>1115<SeP>1135<SeP>1309<SeP>1180<SeP>1283<SeP>1275<SeP>1294<SeP>1518<SeP>1721<SeP>1688<SeP>1339<SeP>741<SeP>858<SeP>1148<SeP>1037<SeP>591<SeP>775<SeP>860<SeP>999<SeP>990<SeP>5981<SeP>2801<SeP>1892<SeP>1350<SeP>956<SeP>902<SeP>968<SeP>947<SeP>969<SeP>1096<SeP>1031<SeP>1074<SeP>1497<SeP>1896<SeP>1055<SeP>1276<SeP>1248<SeP>1192<SeP>1158<SeP>1036<SeP>999<SeP>1015<SeP>1137<SeP>1038<SeP>1142<SeP>946<SeP>1189<SeP>804<SeP>1412<SeP>1066<SeP>1168<SeP>1124<SeP>1336<SeP>1320<SeP>1357<SeP>1326<SeP>1144<SeP>1108<SeP>1230<SeP>1793<SeP>1464<SeP>1418<SeP>1944<SeP>1487<SeP>1583<SeP>1992<SeP>1325<SeP>1207<SeP>1059<SeP>1379<SeP>1271<SeP>1458<SeP>1143<SeP>1405<SeP>1683<SeP>1561<SeP>1489<SeP>1451<SeP>1470<SeP>1246<SeP>959<SeP>1173<SeP>1290<SeP>1163<SeP>1251<SeP>1432<SeP>1085<SeP>1554<SeP>1755<SeP>1260<SeP>1453<SeP>1612<SeP>1374<SeP>928<SeP>1026<SeP>991<SeP>995<SeP>840<SeP>1006<SeP>1740<SeP>1189<SeP>1045<SeP>1124<SeP>955<SeP>776<SeP>1137<SeP>1350<SeP>821<SeP>943<SeP>930<SeP>1311<SeP>1578<SeP>1474<SeP>1090<SeP>1129<SeP>990<SeP>1794<SeP>1107<SeP>1074<SeP>1104<SeP>1194<SeP>1426<SeP>956<SeP>972<SeP>1267<SeP>1045<SeP>838<SeP>902<SeP>1095<SeP>1567<SeP>1438<SeP>1541<SeP>1430<SeP>1141<SeP>896<SeP>1138<SeP>1287<SeP>1137<SeP>1152<SeP>1001<SeP>1057<SeP>1143<SeP>1557<SeP>1303<SeP>1540<SeP>1281<SeP>1501<SeP>1553<SeP>1466<SeP>1223<SeP>1521<SeP>1501<SeP>1350<SeP>1388<SeP>1544<SeP>1584<SeP>1483<SeP>1384<SeP>1402<SeP>1384<SeP>1176<SeP>1275<SeP>1435<SeP>1653<SeP>1457<SeP>1289<SeP>1105<SeP>1489<SeP>1188<SeP>1387<SeP>1157<SeP>1673<SeP>1899<SeP>1344<SeP>872<SeP>1059<SeP>1833<SeP>1434<SeP>1265<SeP>1421<SeP>996<SeP>1387<SeP>1339<SeP>1388<SeP>1404<SeP>1466<SeP>1669<SeP>1554<SeP>1424<SeP>1614<SeP>1402<SeP>1357<SeP>1722<SeP>1530<SeP>1307<SeP>1176<SeP>1575<SeP>1786<SeP>1854<SeP>1775<SeP>1841<SeP>1511<SeP>1623<SeP>1583<SeP>1588<SeP>1522<SeP>1558<SeP>1734<SeP>1905<SeP>1429<SeP>1421";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendEnglish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Attacks Trend";
  const yaxisTitle       = "Number of Attacks";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:06:09<SeP>2023-07-28 22:12:18<SeP>2023-07-30 09:18:27<SeP>2023-07-31 20:24:36<SeP>2023-08-02 07:30:45<SeP>2023-08-03 18:36:54<SeP>2023-08-05 05:43:03<SeP>2023-08-06 16:49:12<SeP>2023-08-08 03:55:21<SeP>2023-08-09 15:01:30<SeP>2023-08-11 02:07:39<SeP>2023-08-12 13:13:48<SeP>2023-08-14 00:19:57<SeP>2023-08-15 11:26:06<SeP>2023-08-16 22:32:15<SeP>2023-08-18 09:38:24<SeP>2023-08-19 20:44:33<SeP>2023-08-21 07:50:42<SeP>2023-08-22 18:56:51<SeP>2023-08-24 06:03:00<SeP>2023-08-25 17:09:09<SeP>2023-08-27 04:15:18<SeP>2023-08-28 15:21:27<SeP>2023-08-30 02:27:36<SeP>2023-08-31 13:33:45<SeP>2023-09-02 00:39:54<SeP>2023-09-03 11:46:03<SeP>2023-09-04 22:52:12<SeP>2023-09-06 09:58:21<SeP>2023-09-07 21:04:30<SeP>2023-09-09 08:10:39<SeP>2023-09-10 19:16:48<SeP>2023-09-12 06:22:57<SeP>2023-09-13 17:29:06<SeP>2023-09-15 04:35:15<SeP>2023-09-16 15:41:24<SeP>2023-09-18 02:47:33<SeP>2023-09-19 13:53:42<SeP>2023-09-21 00:59:51<SeP>2023-09-22 12:06:00<SeP>2023-09-23 23:12:09<SeP>2023-09-25 10:18:18<SeP>2023-09-26 21:24:27<SeP>2023-09-28 08:30:36<SeP>2023-09-29 19:36:45<SeP>2023-10-01 06:42:54<SeP>2023-10-02 17:49:03<SeP>2023-10-04 04:55:12<SeP>2023-10-05 16:01:21<SeP>2023-10-07 03:07:30<SeP>2023-10-08 14:13:39<SeP>2023-10-10 01:19:48<SeP>2023-10-11 12:25:57<SeP>2023-10-12 23:32:06<SeP>2023-10-14 10:38:15<SeP>2023-10-15 21:44:24<SeP>2023-10-17 08:50:33<SeP>2023-10-18 19:56:42<SeP>2023-10-20 07:02:51<SeP>2023-10-21 18:09:00<SeP>2023-10-23 05:15:09<SeP>2023-10-24 16:21:18<SeP>2023-10-26 03:27:27<SeP>2023-10-27 14:33:36<SeP>2023-10-29 01:39:45<SeP>2023-10-30 12:45:54<SeP>2023-10-31 23:52:03<SeP>2023-11-02 10:58:12<SeP>2023-11-03 22:04:21<SeP>2023-11-05 08:10:30<SeP>2023-11-06 19:16:39<SeP>2023-11-08 06:22:48<SeP>2023-11-09 17:28:57<SeP>2023-11-11 04:35:06<SeP>2023-11-12 15:41:15<SeP>2023-11-14 02:47:24<SeP>2023-11-15 13:53:33<SeP>2023-11-17 00:59:42<SeP>2023-11-18 12:05:51<SeP>2023-11-19 23:12:00<SeP>2023-11-21 10:18:09<SeP>2023-11-22 21:24:18<SeP>2023-11-24 08:30:27<SeP>2023-11-25 19:36:36<SeP>2023-11-27 06:42:45<SeP>2023-11-28 17:48:54<SeP>2023-11-30 04:55:03<SeP>2023-12-01 16:01:12<SeP>2023-12-03 03:07:21<SeP>2023-12-04 14:13:30<SeP>2023-12-06 01:19:39<SeP>2023-12-07 12:25:48<SeP>2023-12-08 23:31:57<SeP>2023-12-10 10:38:06<SeP>2023-12-11 21:44:15<SeP>2023-12-13 08:50:24<SeP>2023-12-14 19:56:33<SeP>2023-12-16 07:02:42<SeP>2023-12-17 18:08:51<SeP>2023-12-19 05:15:00<SeP>2023-12-20 16:21:09<SeP>2023-12-22 03:27:18<SeP>2023-12-23 14:33:27<SeP>2023-12-25 01:39:36<SeP>2023-12-26 12:45:45<SeP>2023-12-27 23:51:54<SeP>2023-12-29 10:58:03<SeP>2023-12-30 22:04:12<SeP>2024-01-01 09:10:21<SeP>2024-01-02 20:16:30<SeP>2024-01-04 07:22:39<SeP>2024-01-05 18:28:48<SeP>2024-01-07 05:34:57<SeP>2024-01-08 16:41:06<SeP>2024-01-10 03:47:15<SeP>2024-01-11 14:53:24<SeP>2024-01-13 01:59:33<SeP>2024-01-14 13:05:42<SeP>2024-01-16 00:11:51<SeP>2024-01-17 11:18:00<SeP>2024-01-18 22:24:09<SeP>2024-01-20 09:30:18<SeP>2024-01-21 20:36:27<SeP>2024-01-23 07:42:36<SeP>2024-01-24 18:48:45<SeP>2024-01-26 05:54:54<SeP>2024-01-27 17:01:03<SeP>2024-01-29 04:07:12<SeP>2024-01-30 15:13:21<SeP>2024-02-01 02:19:30<SeP>2024-02-02 13:25:39<SeP>2024-02-04 00:31:48<SeP>2024-02-05 11:37:57<SeP>2024-02-06 22:44:06<SeP>2024-02-08 09:50:15<SeP>2024-02-09 20:56:24<SeP>2024-02-11 08:02:33<SeP>2024-02-12 19:08:42<SeP>2024-02-14 06:14:51<SeP>2024-02-15 17:21:00<SeP>2024-02-17 04:27:09<SeP>2024-02-18 15:33:18<SeP>2024-02-20 02:39:27<SeP>2024-02-21 13:45:36<SeP>2024-02-23 00:51:45<SeP>2024-02-24 11:57:54<SeP>2024-02-25 23:04:03<SeP>2024-02-27 10:10:12<SeP>2024-02-28 21:16:21<SeP>2024-03-01 08:22:30<SeP>2024-03-02 19:28:39<SeP>2024-03-04 06:34:48<SeP>2024-03-05 17:40:57<SeP>2024-03-07 04:47:06<SeP>2024-03-08 15:53:15<SeP>2024-03-10 03:59:24<SeP>2024-03-11 15:05:33<SeP>2024-03-13 02:11:42<SeP>2024-03-14 13:17:51<SeP>2024-03-16 00:24:00<SeP>2024-03-17 11:30:09<SeP>2024-03-18 22:36:18<SeP>2024-03-20 09:42:27<SeP>2024-03-21 20:48:36<SeP>2024-03-23 07:54:45<SeP>2024-03-24 19:00:54<SeP>2024-03-26 06:07:03<SeP>2024-03-27 17:13:12<SeP>2024-03-29 04:19:21<SeP>2024-03-30 15:25:30<SeP>2024-04-01 02:31:39<SeP>2024-04-02 13:37:48<SeP>2024-04-04 00:43:57<SeP>2024-04-05 11:50:06<SeP>2024-04-06 22:56:15<SeP>2024-04-08 10:02:24<SeP>2024-04-09 21:08:33<SeP>2024-04-11 08:14:42<SeP>2024-04-12 19:20:51<SeP>2024-04-14 06:27:00<SeP>2024-04-15 17:33:09<SeP>2024-04-17 04:39:18<SeP>2024-04-18 15:45:27<SeP>2024-04-20 02:51:36<SeP>2024-04-21 13:57:45<SeP>2024-04-23 01:03:54<SeP>2024-04-24 12:10:03<SeP>2024-04-25 23:16:12<SeP>2024-04-27 10:22:21<SeP>2024-04-28 21:28:30<SeP>2024-04-30 08:34:39<SeP>2024-05-01 19:40:48<SeP>2024-05-03 06:46:57<SeP>2024-05-04 17:53:06<SeP>2024-05-06 04:59:15<SeP>2024-05-07 16:05:24<SeP>2024-05-09 03:11:33<SeP>2024-05-10 14:17:42<SeP>2024-05-12 01:23:51<SeP>2024-05-13 12:30:00<SeP>2024-05-14 23:36:09<SeP>2024-05-16 10:42:18<SeP>2024-05-17 21:48:27<SeP>2024-05-19 08:54:36<SeP>2024-05-20 20:00:45<SeP>2024-05-22 07:06:54<SeP>2024-05-23 18:13:03<SeP>2024-05-25 05:19:12<SeP>2024-05-26 16:25:21<SeP>2024-05-28 03:31:30<SeP>2024-05-29 14:37:39<SeP>2024-05-31 01:43:48<SeP>2024-06-01 12:49:57<SeP>2024-06-02 23:56:06<SeP>2024-06-04 11:02:15<SeP>2024-06-05 22:08:24<SeP>2024-06-07 09:14:33<SeP>2024-06-08 20:20:42<SeP>2024-06-10 07:26:51<SeP>2024-06-11 18:33:00<SeP>2024-06-13 05:39:09<SeP>2024-06-14 16:45:18<SeP>2024-06-16 03:51:27<SeP>2024-06-17 14:57:36<SeP>2024-06-19 02:03:45<SeP>2024-06-20 13:09:54<SeP>2024-06-22 00:16:03<SeP>2024-06-23 11:22:12<SeP>2024-06-24 22:28:21<SeP>2024-06-26 09:34:30<SeP>2024-06-27 20:40:39<SeP>2024-06-29 07:46:48<SeP>2024-06-30 18:52:57<SeP>2024-07-02 05:59:06<SeP>2024-07-03 17:05:15<SeP>2024-07-05 04:11:24<SeP>2024-07-06 15:17:33<SeP>2024-07-08 02:23:42<SeP>2024-07-09 13:29:51<SeP>2024-07-11 00:36:00<SeP>2024-07-12 11:42:09<SeP>2024-07-13 22:48:18<SeP>2024-07-15 09:54:27<SeP>2024-07-16 21:00:36<SeP>2024-07-18 08:06:45<SeP>2024-07-19 19:12:54<SeP>2024-07-21 06:19:03<SeP>2024-07-22 17:25:12<SeP>2024-07-24 04:31:21<SeP>2024-07-25 15:37:30<SeP>2024-07-27 02:43:39<SeP>2024-07-28 13:49:48<SeP>2024-07-30 00:55:57<SeP>2024-07-31 12:02:06<SeP>2024-08-01 23:08:15<SeP>2024-08-03 10:14:24<SeP>2024-08-04 21:20:33<SeP>2024-08-06 08:26:42<SeP>2024-08-07 19:32:51<SeP>2024-08-09 06:39:00<SeP>2024-08-10 17:45:09<SeP>2024-08-12 04:51:18<SeP>2024-08-13 15:57:27<SeP>2024-08-15 03:03:36<SeP>2024-08-16 14:09:45<SeP>2024-08-18 01:15:54<SeP>2024-08-19 12:22:03<SeP>2024-08-20 23:28:12<SeP>2024-08-22 10:34:21<SeP>2024-08-23 21:40:30<SeP>2024-08-25 08:46:39<SeP>2024-08-26 19:52:48<SeP>2024-08-28 06:58:57<SeP>2024-08-29 18:05:06<SeP>2024-08-31 05:11:15<SeP>2024-09-01 16:17:24<SeP>2024-09-03 03:23:33<SeP>2024-09-04 14:29:42<SeP>2024-09-06 01:35:51<SeP>2024-09-07 12:42:00<SeP>2024-09-08 23:48:09<SeP>2024-09-10 10:54:18<SeP>2024-09-11 22:00:27<SeP>2024-09-13 09:06:36<SeP>2024-09-14 20:12:45<SeP>2024-09-16 07:18:54<SeP>2024-09-17 18:25:03<SeP>2024-09-19 05:31:12<SeP>2024-09-20 16:37:21<SeP>2024-09-22 03:43:30<SeP>2024-09-23 14:49:39<SeP>2024-09-25 01:55:48<SeP>2024-09-26 13:01:57<SeP>2024-09-28 00:08:06<SeP>2024-09-29 11:14:15<SeP>2024-09-30 22:20:24<SeP>2024-10-02 09:26:33<SeP>2024-10-03 20:32:42<SeP>2024-10-05 07:38:51<SeP>2024-10-06 18:45:00<SeP>2024-10-08 05:51:09<SeP>2024-10-09 16:57:18<SeP>2024-10-11 04:03:27<SeP>2024-10-12 15:09:36<SeP>2024-10-14 02:15:45<SeP>2024-10-15 13:21:54<SeP>2024-10-17 00:28:03<SeP>2024-10-18 11:34:12<SeP>2024-10-19 22:40:21<SeP>2024-10-21 09:46:30<SeP>2024-10-22 20:52:39<SeP>2024-10-24 07:58:48<SeP>2024-10-25 19:04:57<SeP>2024-10-27 06:11:06<SeP>2024-10-28 17:17:15<SeP>2024-10-30 04:23:24<SeP>2024-10-31 15:29:33<SeP>2024-11-02 02:35:42<SeP>2024-11-03 12:41:51<SeP>2024-11-04 23:48:00<SeP>2024-11-06 10:54:09<SeP>2024-11-07 22:00:18<SeP>2024-11-09 09:06:27<SeP>2024-11-10 20:12:36<SeP>2024-11-12 07:18:45<SeP>2024-11-13 18:24:54<SeP>2024-11-15 05:31:03<SeP>2024-11-16 16:37:12<SeP>2024-11-18 03:43:21<SeP>2024-11-19 14:49:30<SeP>2024-11-21 01:55:39<SeP>2024-11-22 13:01:48<SeP>2024-11-24 00:07:57<SeP>2024-11-25 11:14:06<SeP>2024-11-26 22:20:15<SeP>2024-11-28 09:26:24<SeP>2024-11-29 20:32:33<SeP>2024-12-01 07:38:42<SeP>2024-12-02 18:44:51<SeP>2024-12-04 05:51:00<SeP>2024-12-05 16:57:09<SeP>2024-12-07 04:03:18<SeP>2024-12-08 15:09:27<SeP>2024-12-10 02:15:36<SeP>2024-12-11 13:21:45<SeP>2024-12-13 00:27:54<SeP>2024-12-14 11:34:03<SeP>2024-12-15 22:40:12<SeP>2024-12-17 09:46:21<SeP>2024-12-18 20:52:30<SeP>2024-12-20 07:58:39<SeP>2024-12-21 19:04:48<SeP>2024-12-23 06:10:57<SeP>2024-12-24 17:17:06<SeP>2024-12-26 04:23:15<SeP>2024-12-27 15:29:24<SeP>2024-12-29 02:35:33<SeP>2024-12-30 13:41:42<SeP>2025-01-01 00:47:51<SeP>2025-01-02 11:54:00<SeP>2025-01-03 23:00:09<SeP>2025-01-05 10:06:18<SeP>2025-01-06 21:12:27<SeP>2025-01-08 08:18:36<SeP>2025-01-09 19:24:45<SeP>2025-01-11 06:30:54<SeP>2025-01-12 17:37:03<SeP>2025-01-14 04:43:12<SeP>2025-01-15 15:49:21<SeP>2025-01-17 02:55:30<SeP>2025-01-18 14:01:39<SeP>2025-01-20 01:07:48<SeP>2025-01-21 12:13:57<SeP>2025-01-22 23:20:06<SeP>2025-01-24 10:26:15<SeP>2025-01-25 21:32:24<SeP>2025-01-27 08:38:33<SeP>2025-01-28 19:44:42<SeP>2025-01-30 06:50:51<SeP>2025-01-31 17:57:00<SeP>2025-02-02 05:03:09<SeP>2025-02-03 16:09:18<SeP>2025-02-05 03:15:27<SeP>2025-02-06 14:21:36<SeP>2025-02-08 01:27:45<SeP>2025-02-09 12:33:54<SeP>2025-02-10 23:40:03<SeP>2025-02-12 10:46:12<SeP>2025-02-13 21:52:21<SeP>2025-02-15 08:58:30<SeP>2025-02-16 20:04:39<SeP>2025-02-18 07:10:48<SeP>2025-02-19 18:16:57<SeP>2025-02-21 05:23:06<SeP>2025-02-22 16:29:15<SeP>2025-02-24 03:35:24<SeP>2025-02-25 14:41:33<SeP>2025-02-27 01:47:42<SeP>2025-02-28 12:53:51";
  const itemLabel       = "Attacks";
  const itemData        = "155<SeP>614<SeP>1144<SeP>683<SeP>442<SeP>219<SeP>6972<SeP>536<SeP>9522<SeP>573<SeP>396<SeP>1125<SeP>1266<SeP>270<SeP>148<SeP>461<SeP>112<SeP>764<SeP>280<SeP>5841<SeP>7246<SeP>7092<SeP>8232<SeP>5126<SeP>198<SeP>284<SeP>425<SeP>227<SeP>5695<SeP>481<SeP>173<SeP>305<SeP>451<SeP>318<SeP>5320<SeP>10316<SeP>8782<SeP>10915<SeP>7884<SeP>5285<SeP>7425<SeP>6649<SeP>9916<SeP>9083<SeP>7711<SeP>7935<SeP>8520<SeP>8846<SeP>8132<SeP>6203<SeP>6075<SeP>11592<SeP>7098<SeP>8090<SeP>7470<SeP>9650<SeP>11315<SeP>21314<SeP>11543<SeP>9320<SeP>10229<SeP>6118<SeP>9219<SeP>7485<SeP>9069<SeP>9135<SeP>5931<SeP>6520<SeP>7369<SeP>6977<SeP>2297<SeP>6103<SeP>5380<SeP>6675<SeP>6645<SeP>8185<SeP>2759<SeP>6180<SeP>6281<SeP>6490<SeP>5982<SeP>6514<SeP>3947<SeP>7255<SeP>5205<SeP>5570<SeP>5818<SeP>6729<SeP>21700<SeP>12858<SeP>32582<SeP>7770<SeP>7795<SeP>6986<SeP>11129<SeP>7908<SeP>4340<SeP>6278<SeP>3401<SeP>5429<SeP>7084<SeP>4896<SeP>8856<SeP>6658<SeP>5022<SeP>4850<SeP>5684<SeP>9683<SeP>8005<SeP>7676<SeP>4675<SeP>5866<SeP>10182<SeP>8573<SeP>4863<SeP>3278<SeP>6469<SeP>9331<SeP>4846<SeP>7374<SeP>9292<SeP>4188<SeP>3006<SeP>1083<SeP>1692<SeP>1819<SeP>2503<SeP>860<SeP>1359<SeP>551<SeP>1655<SeP>1281<SeP>1153<SeP>1104<SeP>827<SeP>1127<SeP>746<SeP>1462<SeP>1483<SeP>1124<SeP>1634<SeP>2041<SeP>1474<SeP>9801<SeP>7224<SeP>10570<SeP>8199<SeP>6048<SeP>11113<SeP>7250<SeP>8718<SeP>9436<SeP>10468<SeP>11686<SeP>7309<SeP>13377<SeP>13619<SeP>6782<SeP>10459<SeP>5572<SeP>5350<SeP>7304<SeP>25092<SeP>6118<SeP>8452<SeP>9630<SeP>17154<SeP>8299<SeP>6892<SeP>6853<SeP>6051<SeP>13887<SeP>20265<SeP>7826<SeP>10412<SeP>5496<SeP>6936<SeP>5588<SeP>10545<SeP>10896<SeP>5831<SeP>14843<SeP>7481<SeP>8350<SeP>6434<SeP>6165<SeP>3535<SeP>7065<SeP>7520<SeP>4627<SeP>6494<SeP>8134<SeP>5714<SeP>19451<SeP>7897<SeP>6521<SeP>5896<SeP>8617<SeP>10408<SeP>7345<SeP>2505<SeP>4776<SeP>4993<SeP>4019<SeP>4670<SeP>2459<SeP>625<SeP>592<SeP>154<SeP>622<SeP>586<SeP>783<SeP>349<SeP>662<SeP>1339<SeP>1400<SeP>3073<SeP>22804<SeP>626<SeP>4468<SeP>3824<SeP>2952<SeP>6943<SeP>2739<SeP>4234<SeP>3268<SeP>3083<SeP>3049<SeP>3151<SeP>4720<SeP>1763<SeP>2919<SeP>2619<SeP>2202<SeP>1949<SeP>1913<SeP>1136<SeP>1911<SeP>795<SeP>925<SeP>1776<SeP>23893<SeP>4333<SeP>3345<SeP>3334<SeP>3067<SeP>2776<SeP>3774<SeP>1588<SeP>3726<SeP>2574<SeP>3294<SeP>2512<SeP>2950<SeP>3110<SeP>3290<SeP>6697<SeP>4689<SeP>4065<SeP>3388<SeP>3177<SeP>3380<SeP>4003<SeP>5943<SeP>8018<SeP>5666<SeP>2311<SeP>3183<SeP>2512<SeP>4840<SeP>3606<SeP>3063<SeP>2614<SeP>4141<SeP>4934<SeP>3923<SeP>5848<SeP>3951<SeP>6556<SeP>4828<SeP>5406<SeP>4977<SeP>21658<SeP>5746<SeP>11024<SeP>1755<SeP>2976<SeP>4156<SeP>3638<SeP>5305<SeP>3664<SeP>4664<SeP>4417<SeP>4830<SeP>3096<SeP>4231<SeP>1981<SeP>1393<SeP>2169<SeP>3637<SeP>2651<SeP>2848<SeP>3598<SeP>4461<SeP>3728<SeP>3317<SeP>4282<SeP>3486<SeP>3121<SeP>5775<SeP>7922<SeP>6089<SeP>4628<SeP>5103<SeP>4591<SeP>3458<SeP>4071<SeP>3962<SeP>6355<SeP>5459<SeP>4625<SeP>3826<SeP>948<SeP>785<SeP>2231<SeP>1365<SeP>1089<SeP>1855<SeP>1559<SeP>1061<SeP>3115<SeP>4166<SeP>6445<SeP>23588<SeP>14970<SeP>5589<SeP>13684<SeP>14582<SeP>5381<SeP>5950<SeP>4871<SeP>19745<SeP>9401<SeP>5336<SeP>4591<SeP>4751<SeP>6351<SeP>22124<SeP>13470<SeP>3931<SeP>3618<SeP>3998<SeP>5694<SeP>4928<SeP>2986<SeP>3254<SeP>4390<SeP>5205<SeP>5347<SeP>17911<SeP>4921<SeP>5937<SeP>5960<SeP>2200<SeP>2838<SeP>3727<SeP>4942<SeP>4351<SeP>3501<SeP>2603<SeP>3574<SeP>2811<SeP>4579<SeP>5001<SeP>8493<SeP>10624<SeP>8205<SeP>9288<SeP>7858<SeP>7884<SeP>4769<SeP>5263<SeP>3690<SeP>25663<SeP>3700<SeP>3166<SeP>3965<SeP>10707<SeP>5569<SeP>4946<SeP>3679<SeP>4888<SeP>3366<SeP>5432<SeP>9266<SeP>8310<SeP>4330<SeP>2733<SeP>3472<SeP>1874";
  const itemBorderColor = "rgba(50,130,191,1)";
  const itemFillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function trafficTrendSpanish()
{
  const chartElement     = "traffic-trend";
  const chartTitle       = "Tendencia de tr\u00e1fico no deseado";
  const yaxisTitle       = "N\u00famero de conexiones no deseadas";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:06:09<SeP>2023-07-28 22:12:18<SeP>2023-07-30 09:18:27<SeP>2023-07-31 20:24:36<SeP>2023-08-02 07:30:45<SeP>2023-08-03 18:36:54<SeP>2023-08-05 05:43:03<SeP>2023-08-06 16:49:12<SeP>2023-08-08 03:55:21<SeP>2023-08-09 15:01:30<SeP>2023-08-11 02:07:39<SeP>2023-08-12 13:13:48<SeP>2023-08-14 00:19:57<SeP>2023-08-15 11:26:06<SeP>2023-08-16 22:32:15<SeP>2023-08-18 09:38:24<SeP>2023-08-19 20:44:33<SeP>2023-08-21 07:50:42<SeP>2023-08-22 18:56:51<SeP>2023-08-24 06:03:00<SeP>2023-08-25 17:09:09<SeP>2023-08-27 04:15:18<SeP>2023-08-28 15:21:27<SeP>2023-08-30 02:27:36<SeP>2023-08-31 13:33:45<SeP>2023-09-02 00:39:54<SeP>2023-09-03 11:46:03<SeP>2023-09-04 22:52:12<SeP>2023-09-06 09:58:21<SeP>2023-09-07 21:04:30<SeP>2023-09-09 08:10:39<SeP>2023-09-10 19:16:48<SeP>2023-09-12 06:22:57<SeP>2023-09-13 17:29:06<SeP>2023-09-15 04:35:15<SeP>2023-09-16 15:41:24<SeP>2023-09-18 02:47:33<SeP>2023-09-19 13:53:42<SeP>2023-09-21 00:59:51<SeP>2023-09-22 12:06:00<SeP>2023-09-23 23:12:09<SeP>2023-09-25 10:18:18<SeP>2023-09-26 21:24:27<SeP>2023-09-28 08:30:36<SeP>2023-09-29 19:36:45<SeP>2023-10-01 06:42:54<SeP>2023-10-02 17:49:03<SeP>2023-10-04 04:55:12<SeP>2023-10-05 16:01:21<SeP>2023-10-07 03:07:30<SeP>2023-10-08 14:13:39<SeP>2023-10-10 01:19:48<SeP>2023-10-11 12:25:57<SeP>2023-10-12 23:32:06<SeP>2023-10-14 10:38:15<SeP>2023-10-15 21:44:24<SeP>2023-10-17 08:50:33<SeP>2023-10-18 19:56:42<SeP>2023-10-20 07:02:51<SeP>2023-10-21 18:09:00<SeP>2023-10-23 05:15:09<SeP>2023-10-24 16:21:18<SeP>2023-10-26 03:27:27<SeP>2023-10-27 14:33:36<SeP>2023-10-29 01:39:45<SeP>2023-10-30 12:45:54<SeP>2023-10-31 23:52:03<SeP>2023-11-02 10:58:12<SeP>2023-11-03 22:04:21<SeP>2023-11-05 08:10:30<SeP>2023-11-06 19:16:39<SeP>2023-11-08 06:22:48<SeP>2023-11-09 17:28:57<SeP>2023-11-11 04:35:06<SeP>2023-11-12 15:41:15<SeP>2023-11-14 02:47:24<SeP>2023-11-15 13:53:33<SeP>2023-11-17 00:59:42<SeP>2023-11-18 12:05:51<SeP>2023-11-19 23:12:00<SeP>2023-11-21 10:18:09<SeP>2023-11-22 21:24:18<SeP>2023-11-24 08:30:27<SeP>2023-11-25 19:36:36<SeP>2023-11-27 06:42:45<SeP>2023-11-28 17:48:54<SeP>2023-11-30 04:55:03<SeP>2023-12-01 16:01:12<SeP>2023-12-03 03:07:21<SeP>2023-12-04 14:13:30<SeP>2023-12-06 01:19:39<SeP>2023-12-07 12:25:48<SeP>2023-12-08 23:31:57<SeP>2023-12-10 10:38:06<SeP>2023-12-11 21:44:15<SeP>2023-12-13 08:50:24<SeP>2023-12-14 19:56:33<SeP>2023-12-16 07:02:42<SeP>2023-12-17 18:08:51<SeP>2023-12-19 05:15:00<SeP>2023-12-20 16:21:09<SeP>2023-12-22 03:27:18<SeP>2023-12-23 14:33:27<SeP>2023-12-25 01:39:36<SeP>2023-12-26 12:45:45<SeP>2023-12-27 23:51:54<SeP>2023-12-29 10:58:03<SeP>2023-12-30 22:04:12<SeP>2024-01-01 09:10:21<SeP>2024-01-02 20:16:30<SeP>2024-01-04 07:22:39<SeP>2024-01-05 18:28:48<SeP>2024-01-07 05:34:57<SeP>2024-01-08 16:41:06<SeP>2024-01-10 03:47:15<SeP>2024-01-11 14:53:24<SeP>2024-01-13 01:59:33<SeP>2024-01-14 13:05:42<SeP>2024-01-16 00:11:51<SeP>2024-01-17 11:18:00<SeP>2024-01-18 22:24:09<SeP>2024-01-20 09:30:18<SeP>2024-01-21 20:36:27<SeP>2024-01-23 07:42:36<SeP>2024-01-24 18:48:45<SeP>2024-01-26 05:54:54<SeP>2024-01-27 17:01:03<SeP>2024-01-29 04:07:12<SeP>2024-01-30 15:13:21<SeP>2024-02-01 02:19:30<SeP>2024-02-02 13:25:39<SeP>2024-02-04 00:31:48<SeP>2024-02-05 11:37:57<SeP>2024-02-06 22:44:06<SeP>2024-02-08 09:50:15<SeP>2024-02-09 20:56:24<SeP>2024-02-11 08:02:33<SeP>2024-02-12 19:08:42<SeP>2024-02-14 06:14:51<SeP>2024-02-15 17:21:00<SeP>2024-02-17 04:27:09<SeP>2024-02-18 15:33:18<SeP>2024-02-20 02:39:27<SeP>2024-02-21 13:45:36<SeP>2024-02-23 00:51:45<SeP>2024-02-24 11:57:54<SeP>2024-02-25 23:04:03<SeP>2024-02-27 10:10:12<SeP>2024-02-28 21:16:21<SeP>2024-03-01 08:22:30<SeP>2024-03-02 19:28:39<SeP>2024-03-04 06:34:48<SeP>2024-03-05 17:40:57<SeP>2024-03-07 04:47:06<SeP>2024-03-08 15:53:15<SeP>2024-03-10 03:59:24<SeP>2024-03-11 15:05:33<SeP>2024-03-13 02:11:42<SeP>2024-03-14 13:17:51<SeP>2024-03-16 00:24:00<SeP>2024-03-17 11:30:09<SeP>2024-03-18 22:36:18<SeP>2024-03-20 09:42:27<SeP>2024-03-21 20:48:36<SeP>2024-03-23 07:54:45<SeP>2024-03-24 19:00:54<SeP>2024-03-26 06:07:03<SeP>2024-03-27 17:13:12<SeP>2024-03-29 04:19:21<SeP>2024-03-30 15:25:30<SeP>2024-04-01 02:31:39<SeP>2024-04-02 13:37:48<SeP>2024-04-04 00:43:57<SeP>2024-04-05 11:50:06<SeP>2024-04-06 22:56:15<SeP>2024-04-08 10:02:24<SeP>2024-04-09 21:08:33<SeP>2024-04-11 08:14:42<SeP>2024-04-12 19:20:51<SeP>2024-04-14 06:27:00<SeP>2024-04-15 17:33:09<SeP>2024-04-17 04:39:18<SeP>2024-04-18 15:45:27<SeP>2024-04-20 02:51:36<SeP>2024-04-21 13:57:45<SeP>2024-04-23 01:03:54<SeP>2024-04-24 12:10:03<SeP>2024-04-25 23:16:12<SeP>2024-04-27 10:22:21<SeP>2024-04-28 21:28:30<SeP>2024-04-30 08:34:39<SeP>2024-05-01 19:40:48<SeP>2024-05-03 06:46:57<SeP>2024-05-04 17:53:06<SeP>2024-05-06 04:59:15<SeP>2024-05-07 16:05:24<SeP>2024-05-09 03:11:33<SeP>2024-05-10 14:17:42<SeP>2024-05-12 01:23:51<SeP>2024-05-13 12:30:00<SeP>2024-05-14 23:36:09<SeP>2024-05-16 10:42:18<SeP>2024-05-17 21:48:27<SeP>2024-05-19 08:54:36<SeP>2024-05-20 20:00:45<SeP>2024-05-22 07:06:54<SeP>2024-05-23 18:13:03<SeP>2024-05-25 05:19:12<SeP>2024-05-26 16:25:21<SeP>2024-05-28 03:31:30<SeP>2024-05-29 14:37:39<SeP>2024-05-31 01:43:48<SeP>2024-06-01 12:49:57<SeP>2024-06-02 23:56:06<SeP>2024-06-04 11:02:15<SeP>2024-06-05 22:08:24<SeP>2024-06-07 09:14:33<SeP>2024-06-08 20:20:42<SeP>2024-06-10 07:26:51<SeP>2024-06-11 18:33:00<SeP>2024-06-13 05:39:09<SeP>2024-06-14 16:45:18<SeP>2024-06-16 03:51:27<SeP>2024-06-17 14:57:36<SeP>2024-06-19 02:03:45<SeP>2024-06-20 13:09:54<SeP>2024-06-22 00:16:03<SeP>2024-06-23 11:22:12<SeP>2024-06-24 22:28:21<SeP>2024-06-26 09:34:30<SeP>2024-06-27 20:40:39<SeP>2024-06-29 07:46:48<SeP>2024-06-30 18:52:57<SeP>2024-07-02 05:59:06<SeP>2024-07-03 17:05:15<SeP>2024-07-05 04:11:24<SeP>2024-07-06 15:17:33<SeP>2024-07-08 02:23:42<SeP>2024-07-09 13:29:51<SeP>2024-07-11 00:36:00<SeP>2024-07-12 11:42:09<SeP>2024-07-13 22:48:18<SeP>2024-07-15 09:54:27<SeP>2024-07-16 21:00:36<SeP>2024-07-18 08:06:45<SeP>2024-07-19 19:12:54<SeP>2024-07-21 06:19:03<SeP>2024-07-22 17:25:12<SeP>2024-07-24 04:31:21<SeP>2024-07-25 15:37:30<SeP>2024-07-27 02:43:39<SeP>2024-07-28 13:49:48<SeP>2024-07-30 00:55:57<SeP>2024-07-31 12:02:06<SeP>2024-08-01 23:08:15<SeP>2024-08-03 10:14:24<SeP>2024-08-04 21:20:33<SeP>2024-08-06 08:26:42<SeP>2024-08-07 19:32:51<SeP>2024-08-09 06:39:00<SeP>2024-08-10 17:45:09<SeP>2024-08-12 04:51:18<SeP>2024-08-13 15:57:27<SeP>2024-08-15 03:03:36<SeP>2024-08-16 14:09:45<SeP>2024-08-18 01:15:54<SeP>2024-08-19 12:22:03<SeP>2024-08-20 23:28:12<SeP>2024-08-22 10:34:21<SeP>2024-08-23 21:40:30<SeP>2024-08-25 08:46:39<SeP>2024-08-26 19:52:48<SeP>2024-08-28 06:58:57<SeP>2024-08-29 18:05:06<SeP>2024-08-31 05:11:15<SeP>2024-09-01 16:17:24<SeP>2024-09-03 03:23:33<SeP>2024-09-04 14:29:42<SeP>2024-09-06 01:35:51<SeP>2024-09-07 12:42:00<SeP>2024-09-08 23:48:09<SeP>2024-09-10 10:54:18<SeP>2024-09-11 22:00:27<SeP>2024-09-13 09:06:36<SeP>2024-09-14 20:12:45<SeP>2024-09-16 07:18:54<SeP>2024-09-17 18:25:03<SeP>2024-09-19 05:31:12<SeP>2024-09-20 16:37:21<SeP>2024-09-22 03:43:30<SeP>2024-09-23 14:49:39<SeP>2024-09-25 01:55:48<SeP>2024-09-26 13:01:57<SeP>2024-09-28 00:08:06<SeP>2024-09-29 11:14:15<SeP>2024-09-30 22:20:24<SeP>2024-10-02 09:26:33<SeP>2024-10-03 20:32:42<SeP>2024-10-05 07:38:51<SeP>2024-10-06 18:45:00<SeP>2024-10-08 05:51:09<SeP>2024-10-09 16:57:18<SeP>2024-10-11 04:03:27<SeP>2024-10-12 15:09:36<SeP>2024-10-14 02:15:45<SeP>2024-10-15 13:21:54<SeP>2024-10-17 00:28:03<SeP>2024-10-18 11:34:12<SeP>2024-10-19 22:40:21<SeP>2024-10-21 09:46:30<SeP>2024-10-22 20:52:39<SeP>2024-10-24 07:58:48<SeP>2024-10-25 19:04:57<SeP>2024-10-27 06:11:06<SeP>2024-10-28 17:17:15<SeP>2024-10-30 04:23:24<SeP>2024-10-31 15:29:33<SeP>2024-11-02 02:35:42<SeP>2024-11-03 12:41:51<SeP>2024-11-04 23:48:00<SeP>2024-11-06 10:54:09<SeP>2024-11-07 22:00:18<SeP>2024-11-09 09:06:27<SeP>2024-11-10 20:12:36<SeP>2024-11-12 07:18:45<SeP>2024-11-13 18:24:54<SeP>2024-11-15 05:31:03<SeP>2024-11-16 16:37:12<SeP>2024-11-18 03:43:21<SeP>2024-11-19 14:49:30<SeP>2024-11-21 01:55:39<SeP>2024-11-22 13:01:48<SeP>2024-11-24 00:07:57<SeP>2024-11-25 11:14:06<SeP>2024-11-26 22:20:15<SeP>2024-11-28 09:26:24<SeP>2024-11-29 20:32:33<SeP>2024-12-01 07:38:42<SeP>2024-12-02 18:44:51<SeP>2024-12-04 05:51:00<SeP>2024-12-05 16:57:09<SeP>2024-12-07 04:03:18<SeP>2024-12-08 15:09:27<SeP>2024-12-10 02:15:36<SeP>2024-12-11 13:21:45<SeP>2024-12-13 00:27:54<SeP>2024-12-14 11:34:03<SeP>2024-12-15 22:40:12<SeP>2024-12-17 09:46:21<SeP>2024-12-18 20:52:30<SeP>2024-12-20 07:58:39<SeP>2024-12-21 19:04:48<SeP>2024-12-23 06:10:57<SeP>2024-12-24 17:17:06<SeP>2024-12-26 04:23:15<SeP>2024-12-27 15:29:24<SeP>2024-12-29 02:35:33<SeP>2024-12-30 13:41:42<SeP>2025-01-01 00:47:51<SeP>2025-01-02 11:54:00<SeP>2025-01-03 23:00:09<SeP>2025-01-05 10:06:18<SeP>2025-01-06 21:12:27<SeP>2025-01-08 08:18:36<SeP>2025-01-09 19:24:45<SeP>2025-01-11 06:30:54<SeP>2025-01-12 17:37:03<SeP>2025-01-14 04:43:12<SeP>2025-01-15 15:49:21<SeP>2025-01-17 02:55:30<SeP>2025-01-18 14:01:39<SeP>2025-01-20 01:07:48<SeP>2025-01-21 12:13:57<SeP>2025-01-22 23:20:06<SeP>2025-01-24 10:26:15<SeP>2025-01-25 21:32:24<SeP>2025-01-27 08:38:33<SeP>2025-01-28 19:44:42<SeP>2025-01-30 06:50:51<SeP>2025-01-31 17:57:00<SeP>2025-02-02 05:03:09<SeP>2025-02-03 16:09:18<SeP>2025-02-05 03:15:27<SeP>2025-02-06 14:21:36<SeP>2025-02-08 01:27:45<SeP>2025-02-09 12:33:54<SeP>2025-02-10 23:40:03<SeP>2025-02-12 10:46:12<SeP>2025-02-13 21:52:21<SeP>2025-02-15 08:58:30<SeP>2025-02-16 20:04:39<SeP>2025-02-18 07:10:48<SeP>2025-02-19 18:16:57<SeP>2025-02-21 05:23:06<SeP>2025-02-22 16:29:15<SeP>2025-02-24 03:35:24<SeP>2025-02-25 14:41:33<SeP>2025-02-27 01:47:42<SeP>2025-02-28 12:53:51";
  const item1Label       = "Escaneos";
  const item1Data        = "767<SeP>1492<SeP>1385<SeP>1441<SeP>1256<SeP>1709<SeP>959<SeP>961<SeP>1186<SeP>3382<SeP>2354<SeP>1916<SeP>2924<SeP>1385<SeP>736<SeP>966<SeP>1383<SeP>2914<SeP>1222<SeP>1664<SeP>1294<SeP>914<SeP>1001<SeP>1339<SeP>821<SeP>925<SeP>791<SeP>3153<SeP>1294<SeP>1035<SeP>826<SeP>1349<SeP>1291<SeP>797<SeP>3092<SeP>1883<SeP>2631<SeP>1804<SeP>1553<SeP>1378<SeP>1345<SeP>1962<SeP>1959<SeP>2002<SeP>1503<SeP>1648<SeP>1516<SeP>1766<SeP>1705<SeP>1852<SeP>1870<SeP>1703<SeP>1488<SeP>3249<SeP>1594<SeP>1534<SeP>2113<SeP>1879<SeP>2218<SeP>1751<SeP>3415<SeP>1327<SeP>1538<SeP>1601<SeP>1272<SeP>1877<SeP>1701<SeP>1217<SeP>1445<SeP>1352<SeP>1186<SeP>2287<SeP>1208<SeP>1168<SeP>1301<SeP>5375<SeP>4020<SeP>1380<SeP>1334<SeP>1759<SeP>1948<SeP>1121<SeP>5826<SeP>2324<SeP>1704<SeP>972<SeP>1082<SeP>3294<SeP>1264<SeP>1060<SeP>994<SeP>1062<SeP>1044<SeP>3013<SeP>954<SeP>1424<SeP>3025<SeP>5429<SeP>2448<SeP>1018<SeP>914<SeP>915<SeP>992<SeP>1012<SeP>985<SeP>1033<SeP>3700<SeP>2315<SeP>1397<SeP>1640<SeP>663<SeP>928<SeP>1595<SeP>1057<SeP>1103<SeP>978<SeP>2229<SeP>1313<SeP>1058<SeP>990<SeP>1078<SeP>838<SeP>817<SeP>889<SeP>831<SeP>918<SeP>1042<SeP>825<SeP>829<SeP>797<SeP>949<SeP>828<SeP>686<SeP>896<SeP>853<SeP>872<SeP>928<SeP>816<SeP>843<SeP>715<SeP>785<SeP>1102<SeP>804<SeP>856<SeP>969<SeP>872<SeP>1132<SeP>972<SeP>748<SeP>533<SeP>956<SeP>830<SeP>1284<SeP>875<SeP>988<SeP>1271<SeP>1216<SeP>818<SeP>961<SeP>945<SeP>901<SeP>805<SeP>1073<SeP>940<SeP>959<SeP>904<SeP>1010<SeP>1013<SeP>1024<SeP>1014<SeP>1019<SeP>1096<SeP>908<SeP>932<SeP>1961<SeP>1327<SeP>1204<SeP>1074<SeP>929<SeP>1166<SeP>970<SeP>952<SeP>760<SeP>890<SeP>931<SeP>1089<SeP>797<SeP>1075<SeP>1280<SeP>1115<SeP>1135<SeP>1309<SeP>1180<SeP>1283<SeP>1275<SeP>1294<SeP>1518<SeP>1721<SeP>1688<SeP>1339<SeP>741<SeP>858<SeP>1148<SeP>1037<SeP>591<SeP>775<SeP>860<SeP>999<SeP>990<SeP>5981<SeP>2801<SeP>1892<SeP>1350<SeP>956<SeP>902<SeP>968<SeP>947<SeP>969<SeP>1096<SeP>1031<SeP>1074<SeP>1497<SeP>1896<SeP>1055<SeP>1276<SeP>1248<SeP>1192<SeP>1158<SeP>1036<SeP>999<SeP>1015<SeP>1137<SeP>1038<SeP>1142<SeP>946<SeP>1189<SeP>804<SeP>1412<SeP>1066<SeP>1168<SeP>1124<SeP>1336<SeP>1320<SeP>1357<SeP>1326<SeP>1144<SeP>1108<SeP>1230<SeP>1793<SeP>1464<SeP>1418<SeP>1944<SeP>1487<SeP>1583<SeP>1992<SeP>1325<SeP>1207<SeP>1059<SeP>1379<SeP>1271<SeP>1458<SeP>1143<SeP>1405<SeP>1683<SeP>1561<SeP>1489<SeP>1451<SeP>1470<SeP>1246<SeP>959<SeP>1173<SeP>1290<SeP>1163<SeP>1251<SeP>1432<SeP>1085<SeP>1554<SeP>1755<SeP>1260<SeP>1453<SeP>1612<SeP>1374<SeP>928<SeP>1026<SeP>991<SeP>995<SeP>840<SeP>1006<SeP>1740<SeP>1189<SeP>1045<SeP>1124<SeP>955<SeP>776<SeP>1137<SeP>1350<SeP>821<SeP>943<SeP>930<SeP>1311<SeP>1578<SeP>1474<SeP>1090<SeP>1129<SeP>990<SeP>1794<SeP>1107<SeP>1074<SeP>1104<SeP>1194<SeP>1426<SeP>956<SeP>972<SeP>1267<SeP>1045<SeP>838<SeP>902<SeP>1095<SeP>1567<SeP>1438<SeP>1541<SeP>1430<SeP>1141<SeP>896<SeP>1138<SeP>1287<SeP>1137<SeP>1152<SeP>1001<SeP>1057<SeP>1143<SeP>1557<SeP>1303<SeP>1540<SeP>1281<SeP>1501<SeP>1553<SeP>1466<SeP>1223<SeP>1521<SeP>1501<SeP>1350<SeP>1388<SeP>1544<SeP>1584<SeP>1483<SeP>1384<SeP>1402<SeP>1384<SeP>1176<SeP>1275<SeP>1435<SeP>1653<SeP>1457<SeP>1289<SeP>1105<SeP>1489<SeP>1188<SeP>1387<SeP>1157<SeP>1673<SeP>1899<SeP>1344<SeP>872<SeP>1059<SeP>1833<SeP>1434<SeP>1265<SeP>1421<SeP>996<SeP>1387<SeP>1339<SeP>1388<SeP>1404<SeP>1466<SeP>1669<SeP>1554<SeP>1424<SeP>1614<SeP>1402<SeP>1357<SeP>1722<SeP>1530<SeP>1307<SeP>1176<SeP>1575<SeP>1786<SeP>1854<SeP>1775<SeP>1841<SeP>1511<SeP>1623<SeP>1583<SeP>1588<SeP>1522<SeP>1558<SeP>1734<SeP>1905<SeP>1429<SeP>1421";
  const item1BorderColor = "rgba(94,184,77,1)";
  const item1FillColor   = "rgba(224,234,223,0.75)";
  const item2Label       = "Ataques";
  const item2Data        = "155<SeP>614<SeP>1144<SeP>683<SeP>442<SeP>219<SeP>6972<SeP>536<SeP>9522<SeP>573<SeP>396<SeP>1125<SeP>1266<SeP>270<SeP>148<SeP>461<SeP>112<SeP>764<SeP>280<SeP>5841<SeP>7246<SeP>7092<SeP>8232<SeP>5126<SeP>198<SeP>284<SeP>425<SeP>227<SeP>5695<SeP>481<SeP>173<SeP>305<SeP>451<SeP>318<SeP>5320<SeP>10316<SeP>8782<SeP>10915<SeP>7884<SeP>5285<SeP>7425<SeP>6649<SeP>9916<SeP>9083<SeP>7711<SeP>7935<SeP>8520<SeP>8846<SeP>8132<SeP>6203<SeP>6075<SeP>11592<SeP>7098<SeP>8090<SeP>7470<SeP>9650<SeP>11315<SeP>21314<SeP>11543<SeP>9320<SeP>10229<SeP>6118<SeP>9219<SeP>7485<SeP>9069<SeP>9135<SeP>5931<SeP>6520<SeP>7369<SeP>6977<SeP>2297<SeP>6103<SeP>5380<SeP>6675<SeP>6645<SeP>8185<SeP>2759<SeP>6180<SeP>6281<SeP>6490<SeP>5982<SeP>6514<SeP>3947<SeP>7255<SeP>5205<SeP>5570<SeP>5818<SeP>6729<SeP>21700<SeP>12858<SeP>32582<SeP>7770<SeP>7795<SeP>6986<SeP>11129<SeP>7908<SeP>4340<SeP>6278<SeP>3401<SeP>5429<SeP>7084<SeP>4896<SeP>8856<SeP>6658<SeP>5022<SeP>4850<SeP>5684<SeP>9683<SeP>8005<SeP>7676<SeP>4675<SeP>5866<SeP>10182<SeP>8573<SeP>4863<SeP>3278<SeP>6469<SeP>9331<SeP>4846<SeP>7374<SeP>9292<SeP>4188<SeP>3006<SeP>1083<SeP>1692<SeP>1819<SeP>2503<SeP>860<SeP>1359<SeP>551<SeP>1655<SeP>1281<SeP>1153<SeP>1104<SeP>827<SeP>1127<SeP>746<SeP>1462<SeP>1483<SeP>1124<SeP>1634<SeP>2041<SeP>1474<SeP>9801<SeP>7224<SeP>10570<SeP>8199<SeP>6048<SeP>11113<SeP>7250<SeP>8718<SeP>9436<SeP>10468<SeP>11686<SeP>7309<SeP>13377<SeP>13619<SeP>6782<SeP>10459<SeP>5572<SeP>5350<SeP>7304<SeP>25092<SeP>6118<SeP>8452<SeP>9630<SeP>17154<SeP>8299<SeP>6892<SeP>6853<SeP>6051<SeP>13887<SeP>20265<SeP>7826<SeP>10412<SeP>5496<SeP>6936<SeP>5588<SeP>10545<SeP>10896<SeP>5831<SeP>14843<SeP>7481<SeP>8350<SeP>6434<SeP>6165<SeP>3535<SeP>7065<SeP>7520<SeP>4627<SeP>6494<SeP>8134<SeP>5714<SeP>19451<SeP>7897<SeP>6521<SeP>5896<SeP>8617<SeP>10408<SeP>7345<SeP>2505<SeP>4776<SeP>4993<SeP>4019<SeP>4670<SeP>2459<SeP>625<SeP>592<SeP>154<SeP>622<SeP>586<SeP>783<SeP>349<SeP>662<SeP>1339<SeP>1400<SeP>3073<SeP>22804<SeP>626<SeP>4468<SeP>3824<SeP>2952<SeP>6943<SeP>2739<SeP>4234<SeP>3268<SeP>3083<SeP>3049<SeP>3151<SeP>4720<SeP>1763<SeP>2919<SeP>2619<SeP>2202<SeP>1949<SeP>1913<SeP>1136<SeP>1911<SeP>795<SeP>925<SeP>1776<SeP>23893<SeP>4333<SeP>3345<SeP>3334<SeP>3067<SeP>2776<SeP>3774<SeP>1588<SeP>3726<SeP>2574<SeP>3294<SeP>2512<SeP>2950<SeP>3110<SeP>3290<SeP>6697<SeP>4689<SeP>4065<SeP>3388<SeP>3177<SeP>3380<SeP>4003<SeP>5943<SeP>8018<SeP>5666<SeP>2311<SeP>3183<SeP>2512<SeP>4840<SeP>3606<SeP>3063<SeP>2614<SeP>4141<SeP>4934<SeP>3923<SeP>5848<SeP>3951<SeP>6556<SeP>4828<SeP>5406<SeP>4977<SeP>21658<SeP>5746<SeP>11024<SeP>1755<SeP>2976<SeP>4156<SeP>3638<SeP>5305<SeP>3664<SeP>4664<SeP>4417<SeP>4830<SeP>3096<SeP>4231<SeP>1981<SeP>1393<SeP>2169<SeP>3637<SeP>2651<SeP>2848<SeP>3598<SeP>4461<SeP>3728<SeP>3317<SeP>4282<SeP>3486<SeP>3121<SeP>5775<SeP>7922<SeP>6089<SeP>4628<SeP>5103<SeP>4591<SeP>3458<SeP>4071<SeP>3962<SeP>6355<SeP>5459<SeP>4625<SeP>3826<SeP>948<SeP>785<SeP>2231<SeP>1365<SeP>1089<SeP>1855<SeP>1559<SeP>1061<SeP>3115<SeP>4166<SeP>6445<SeP>23588<SeP>14970<SeP>5589<SeP>13684<SeP>14582<SeP>5381<SeP>5950<SeP>4871<SeP>19745<SeP>9401<SeP>5336<SeP>4591<SeP>4751<SeP>6351<SeP>22124<SeP>13470<SeP>3931<SeP>3618<SeP>3998<SeP>5694<SeP>4928<SeP>2986<SeP>3254<SeP>4390<SeP>5205<SeP>5347<SeP>17911<SeP>4921<SeP>5937<SeP>5960<SeP>2200<SeP>2838<SeP>3727<SeP>4942<SeP>4351<SeP>3501<SeP>2603<SeP>3574<SeP>2811<SeP>4579<SeP>5001<SeP>8493<SeP>10624<SeP>8205<SeP>9288<SeP>7858<SeP>7884<SeP>4769<SeP>5263<SeP>3690<SeP>25663<SeP>3700<SeP>3166<SeP>3965<SeP>10707<SeP>5569<SeP>4946<SeP>3679<SeP>4888<SeP>3366<SeP>5432<SeP>9266<SeP>8310<SeP>4330<SeP>2733<SeP>3472<SeP>1874";
  const item2BorderColor = "rgba(50,130,191,1)";
  const item2FillColor   = "rgba(146,190,210,0.75)";

  areaChartStacked2(chartElement, chartTitle, yaxisTitle, labelsData, item1Label, item1Data, item1BorderColor, item1FillColor, item2Label, item2Data, item2BorderColor, item2FillColor);
}

function scansTrendSpanish()
{
  const chartElement     = "scans-trend";
  const chartTitle       = "Tendencia de escaneos";
  const yaxisTitle       = "N\u00famero de escaneos";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:06:09<SeP>2023-07-28 22:12:18<SeP>2023-07-30 09:18:27<SeP>2023-07-31 20:24:36<SeP>2023-08-02 07:30:45<SeP>2023-08-03 18:36:54<SeP>2023-08-05 05:43:03<SeP>2023-08-06 16:49:12<SeP>2023-08-08 03:55:21<SeP>2023-08-09 15:01:30<SeP>2023-08-11 02:07:39<SeP>2023-08-12 13:13:48<SeP>2023-08-14 00:19:57<SeP>2023-08-15 11:26:06<SeP>2023-08-16 22:32:15<SeP>2023-08-18 09:38:24<SeP>2023-08-19 20:44:33<SeP>2023-08-21 07:50:42<SeP>2023-08-22 18:56:51<SeP>2023-08-24 06:03:00<SeP>2023-08-25 17:09:09<SeP>2023-08-27 04:15:18<SeP>2023-08-28 15:21:27<SeP>2023-08-30 02:27:36<SeP>2023-08-31 13:33:45<SeP>2023-09-02 00:39:54<SeP>2023-09-03 11:46:03<SeP>2023-09-04 22:52:12<SeP>2023-09-06 09:58:21<SeP>2023-09-07 21:04:30<SeP>2023-09-09 08:10:39<SeP>2023-09-10 19:16:48<SeP>2023-09-12 06:22:57<SeP>2023-09-13 17:29:06<SeP>2023-09-15 04:35:15<SeP>2023-09-16 15:41:24<SeP>2023-09-18 02:47:33<SeP>2023-09-19 13:53:42<SeP>2023-09-21 00:59:51<SeP>2023-09-22 12:06:00<SeP>2023-09-23 23:12:09<SeP>2023-09-25 10:18:18<SeP>2023-09-26 21:24:27<SeP>2023-09-28 08:30:36<SeP>2023-09-29 19:36:45<SeP>2023-10-01 06:42:54<SeP>2023-10-02 17:49:03<SeP>2023-10-04 04:55:12<SeP>2023-10-05 16:01:21<SeP>2023-10-07 03:07:30<SeP>2023-10-08 14:13:39<SeP>2023-10-10 01:19:48<SeP>2023-10-11 12:25:57<SeP>2023-10-12 23:32:06<SeP>2023-10-14 10:38:15<SeP>2023-10-15 21:44:24<SeP>2023-10-17 08:50:33<SeP>2023-10-18 19:56:42<SeP>2023-10-20 07:02:51<SeP>2023-10-21 18:09:00<SeP>2023-10-23 05:15:09<SeP>2023-10-24 16:21:18<SeP>2023-10-26 03:27:27<SeP>2023-10-27 14:33:36<SeP>2023-10-29 01:39:45<SeP>2023-10-30 12:45:54<SeP>2023-10-31 23:52:03<SeP>2023-11-02 10:58:12<SeP>2023-11-03 22:04:21<SeP>2023-11-05 08:10:30<SeP>2023-11-06 19:16:39<SeP>2023-11-08 06:22:48<SeP>2023-11-09 17:28:57<SeP>2023-11-11 04:35:06<SeP>2023-11-12 15:41:15<SeP>2023-11-14 02:47:24<SeP>2023-11-15 13:53:33<SeP>2023-11-17 00:59:42<SeP>2023-11-18 12:05:51<SeP>2023-11-19 23:12:00<SeP>2023-11-21 10:18:09<SeP>2023-11-22 21:24:18<SeP>2023-11-24 08:30:27<SeP>2023-11-25 19:36:36<SeP>2023-11-27 06:42:45<SeP>2023-11-28 17:48:54<SeP>2023-11-30 04:55:03<SeP>2023-12-01 16:01:12<SeP>2023-12-03 03:07:21<SeP>2023-12-04 14:13:30<SeP>2023-12-06 01:19:39<SeP>2023-12-07 12:25:48<SeP>2023-12-08 23:31:57<SeP>2023-12-10 10:38:06<SeP>2023-12-11 21:44:15<SeP>2023-12-13 08:50:24<SeP>2023-12-14 19:56:33<SeP>2023-12-16 07:02:42<SeP>2023-12-17 18:08:51<SeP>2023-12-19 05:15:00<SeP>2023-12-20 16:21:09<SeP>2023-12-22 03:27:18<SeP>2023-12-23 14:33:27<SeP>2023-12-25 01:39:36<SeP>2023-12-26 12:45:45<SeP>2023-12-27 23:51:54<SeP>2023-12-29 10:58:03<SeP>2023-12-30 22:04:12<SeP>2024-01-01 09:10:21<SeP>2024-01-02 20:16:30<SeP>2024-01-04 07:22:39<SeP>2024-01-05 18:28:48<SeP>2024-01-07 05:34:57<SeP>2024-01-08 16:41:06<SeP>2024-01-10 03:47:15<SeP>2024-01-11 14:53:24<SeP>2024-01-13 01:59:33<SeP>2024-01-14 13:05:42<SeP>2024-01-16 00:11:51<SeP>2024-01-17 11:18:00<SeP>2024-01-18 22:24:09<SeP>2024-01-20 09:30:18<SeP>2024-01-21 20:36:27<SeP>2024-01-23 07:42:36<SeP>2024-01-24 18:48:45<SeP>2024-01-26 05:54:54<SeP>2024-01-27 17:01:03<SeP>2024-01-29 04:07:12<SeP>2024-01-30 15:13:21<SeP>2024-02-01 02:19:30<SeP>2024-02-02 13:25:39<SeP>2024-02-04 00:31:48<SeP>2024-02-05 11:37:57<SeP>2024-02-06 22:44:06<SeP>2024-02-08 09:50:15<SeP>2024-02-09 20:56:24<SeP>2024-02-11 08:02:33<SeP>2024-02-12 19:08:42<SeP>2024-02-14 06:14:51<SeP>2024-02-15 17:21:00<SeP>2024-02-17 04:27:09<SeP>2024-02-18 15:33:18<SeP>2024-02-20 02:39:27<SeP>2024-02-21 13:45:36<SeP>2024-02-23 00:51:45<SeP>2024-02-24 11:57:54<SeP>2024-02-25 23:04:03<SeP>2024-02-27 10:10:12<SeP>2024-02-28 21:16:21<SeP>2024-03-01 08:22:30<SeP>2024-03-02 19:28:39<SeP>2024-03-04 06:34:48<SeP>2024-03-05 17:40:57<SeP>2024-03-07 04:47:06<SeP>2024-03-08 15:53:15<SeP>2024-03-10 03:59:24<SeP>2024-03-11 15:05:33<SeP>2024-03-13 02:11:42<SeP>2024-03-14 13:17:51<SeP>2024-03-16 00:24:00<SeP>2024-03-17 11:30:09<SeP>2024-03-18 22:36:18<SeP>2024-03-20 09:42:27<SeP>2024-03-21 20:48:36<SeP>2024-03-23 07:54:45<SeP>2024-03-24 19:00:54<SeP>2024-03-26 06:07:03<SeP>2024-03-27 17:13:12<SeP>2024-03-29 04:19:21<SeP>2024-03-30 15:25:30<SeP>2024-04-01 02:31:39<SeP>2024-04-02 13:37:48<SeP>2024-04-04 00:43:57<SeP>2024-04-05 11:50:06<SeP>2024-04-06 22:56:15<SeP>2024-04-08 10:02:24<SeP>2024-04-09 21:08:33<SeP>2024-04-11 08:14:42<SeP>2024-04-12 19:20:51<SeP>2024-04-14 06:27:00<SeP>2024-04-15 17:33:09<SeP>2024-04-17 04:39:18<SeP>2024-04-18 15:45:27<SeP>2024-04-20 02:51:36<SeP>2024-04-21 13:57:45<SeP>2024-04-23 01:03:54<SeP>2024-04-24 12:10:03<SeP>2024-04-25 23:16:12<SeP>2024-04-27 10:22:21<SeP>2024-04-28 21:28:30<SeP>2024-04-30 08:34:39<SeP>2024-05-01 19:40:48<SeP>2024-05-03 06:46:57<SeP>2024-05-04 17:53:06<SeP>2024-05-06 04:59:15<SeP>2024-05-07 16:05:24<SeP>2024-05-09 03:11:33<SeP>2024-05-10 14:17:42<SeP>2024-05-12 01:23:51<SeP>2024-05-13 12:30:00<SeP>2024-05-14 23:36:09<SeP>2024-05-16 10:42:18<SeP>2024-05-17 21:48:27<SeP>2024-05-19 08:54:36<SeP>2024-05-20 20:00:45<SeP>2024-05-22 07:06:54<SeP>2024-05-23 18:13:03<SeP>2024-05-25 05:19:12<SeP>2024-05-26 16:25:21<SeP>2024-05-28 03:31:30<SeP>2024-05-29 14:37:39<SeP>2024-05-31 01:43:48<SeP>2024-06-01 12:49:57<SeP>2024-06-02 23:56:06<SeP>2024-06-04 11:02:15<SeP>2024-06-05 22:08:24<SeP>2024-06-07 09:14:33<SeP>2024-06-08 20:20:42<SeP>2024-06-10 07:26:51<SeP>2024-06-11 18:33:00<SeP>2024-06-13 05:39:09<SeP>2024-06-14 16:45:18<SeP>2024-06-16 03:51:27<SeP>2024-06-17 14:57:36<SeP>2024-06-19 02:03:45<SeP>2024-06-20 13:09:54<SeP>2024-06-22 00:16:03<SeP>2024-06-23 11:22:12<SeP>2024-06-24 22:28:21<SeP>2024-06-26 09:34:30<SeP>2024-06-27 20:40:39<SeP>2024-06-29 07:46:48<SeP>2024-06-30 18:52:57<SeP>2024-07-02 05:59:06<SeP>2024-07-03 17:05:15<SeP>2024-07-05 04:11:24<SeP>2024-07-06 15:17:33<SeP>2024-07-08 02:23:42<SeP>2024-07-09 13:29:51<SeP>2024-07-11 00:36:00<SeP>2024-07-12 11:42:09<SeP>2024-07-13 22:48:18<SeP>2024-07-15 09:54:27<SeP>2024-07-16 21:00:36<SeP>2024-07-18 08:06:45<SeP>2024-07-19 19:12:54<SeP>2024-07-21 06:19:03<SeP>2024-07-22 17:25:12<SeP>2024-07-24 04:31:21<SeP>2024-07-25 15:37:30<SeP>2024-07-27 02:43:39<SeP>2024-07-28 13:49:48<SeP>2024-07-30 00:55:57<SeP>2024-07-31 12:02:06<SeP>2024-08-01 23:08:15<SeP>2024-08-03 10:14:24<SeP>2024-08-04 21:20:33<SeP>2024-08-06 08:26:42<SeP>2024-08-07 19:32:51<SeP>2024-08-09 06:39:00<SeP>2024-08-10 17:45:09<SeP>2024-08-12 04:51:18<SeP>2024-08-13 15:57:27<SeP>2024-08-15 03:03:36<SeP>2024-08-16 14:09:45<SeP>2024-08-18 01:15:54<SeP>2024-08-19 12:22:03<SeP>2024-08-20 23:28:12<SeP>2024-08-22 10:34:21<SeP>2024-08-23 21:40:30<SeP>2024-08-25 08:46:39<SeP>2024-08-26 19:52:48<SeP>2024-08-28 06:58:57<SeP>2024-08-29 18:05:06<SeP>2024-08-31 05:11:15<SeP>2024-09-01 16:17:24<SeP>2024-09-03 03:23:33<SeP>2024-09-04 14:29:42<SeP>2024-09-06 01:35:51<SeP>2024-09-07 12:42:00<SeP>2024-09-08 23:48:09<SeP>2024-09-10 10:54:18<SeP>2024-09-11 22:00:27<SeP>2024-09-13 09:06:36<SeP>2024-09-14 20:12:45<SeP>2024-09-16 07:18:54<SeP>2024-09-17 18:25:03<SeP>2024-09-19 05:31:12<SeP>2024-09-20 16:37:21<SeP>2024-09-22 03:43:30<SeP>2024-09-23 14:49:39<SeP>2024-09-25 01:55:48<SeP>2024-09-26 13:01:57<SeP>2024-09-28 00:08:06<SeP>2024-09-29 11:14:15<SeP>2024-09-30 22:20:24<SeP>2024-10-02 09:26:33<SeP>2024-10-03 20:32:42<SeP>2024-10-05 07:38:51<SeP>2024-10-06 18:45:00<SeP>2024-10-08 05:51:09<SeP>2024-10-09 16:57:18<SeP>2024-10-11 04:03:27<SeP>2024-10-12 15:09:36<SeP>2024-10-14 02:15:45<SeP>2024-10-15 13:21:54<SeP>2024-10-17 00:28:03<SeP>2024-10-18 11:34:12<SeP>2024-10-19 22:40:21<SeP>2024-10-21 09:46:30<SeP>2024-10-22 20:52:39<SeP>2024-10-24 07:58:48<SeP>2024-10-25 19:04:57<SeP>2024-10-27 06:11:06<SeP>2024-10-28 17:17:15<SeP>2024-10-30 04:23:24<SeP>2024-10-31 15:29:33<SeP>2024-11-02 02:35:42<SeP>2024-11-03 12:41:51<SeP>2024-11-04 23:48:00<SeP>2024-11-06 10:54:09<SeP>2024-11-07 22:00:18<SeP>2024-11-09 09:06:27<SeP>2024-11-10 20:12:36<SeP>2024-11-12 07:18:45<SeP>2024-11-13 18:24:54<SeP>2024-11-15 05:31:03<SeP>2024-11-16 16:37:12<SeP>2024-11-18 03:43:21<SeP>2024-11-19 14:49:30<SeP>2024-11-21 01:55:39<SeP>2024-11-22 13:01:48<SeP>2024-11-24 00:07:57<SeP>2024-11-25 11:14:06<SeP>2024-11-26 22:20:15<SeP>2024-11-28 09:26:24<SeP>2024-11-29 20:32:33<SeP>2024-12-01 07:38:42<SeP>2024-12-02 18:44:51<SeP>2024-12-04 05:51:00<SeP>2024-12-05 16:57:09<SeP>2024-12-07 04:03:18<SeP>2024-12-08 15:09:27<SeP>2024-12-10 02:15:36<SeP>2024-12-11 13:21:45<SeP>2024-12-13 00:27:54<SeP>2024-12-14 11:34:03<SeP>2024-12-15 22:40:12<SeP>2024-12-17 09:46:21<SeP>2024-12-18 20:52:30<SeP>2024-12-20 07:58:39<SeP>2024-12-21 19:04:48<SeP>2024-12-23 06:10:57<SeP>2024-12-24 17:17:06<SeP>2024-12-26 04:23:15<SeP>2024-12-27 15:29:24<SeP>2024-12-29 02:35:33<SeP>2024-12-30 13:41:42<SeP>2025-01-01 00:47:51<SeP>2025-01-02 11:54:00<SeP>2025-01-03 23:00:09<SeP>2025-01-05 10:06:18<SeP>2025-01-06 21:12:27<SeP>2025-01-08 08:18:36<SeP>2025-01-09 19:24:45<SeP>2025-01-11 06:30:54<SeP>2025-01-12 17:37:03<SeP>2025-01-14 04:43:12<SeP>2025-01-15 15:49:21<SeP>2025-01-17 02:55:30<SeP>2025-01-18 14:01:39<SeP>2025-01-20 01:07:48<SeP>2025-01-21 12:13:57<SeP>2025-01-22 23:20:06<SeP>2025-01-24 10:26:15<SeP>2025-01-25 21:32:24<SeP>2025-01-27 08:38:33<SeP>2025-01-28 19:44:42<SeP>2025-01-30 06:50:51<SeP>2025-01-31 17:57:00<SeP>2025-02-02 05:03:09<SeP>2025-02-03 16:09:18<SeP>2025-02-05 03:15:27<SeP>2025-02-06 14:21:36<SeP>2025-02-08 01:27:45<SeP>2025-02-09 12:33:54<SeP>2025-02-10 23:40:03<SeP>2025-02-12 10:46:12<SeP>2025-02-13 21:52:21<SeP>2025-02-15 08:58:30<SeP>2025-02-16 20:04:39<SeP>2025-02-18 07:10:48<SeP>2025-02-19 18:16:57<SeP>2025-02-21 05:23:06<SeP>2025-02-22 16:29:15<SeP>2025-02-24 03:35:24<SeP>2025-02-25 14:41:33<SeP>2025-02-27 01:47:42<SeP>2025-02-28 12:53:51";
  const itemLabel       = "Escaneos";
  const itemData        = "767<SeP>1492<SeP>1385<SeP>1441<SeP>1256<SeP>1709<SeP>959<SeP>961<SeP>1186<SeP>3382<SeP>2354<SeP>1916<SeP>2924<SeP>1385<SeP>736<SeP>966<SeP>1383<SeP>2914<SeP>1222<SeP>1664<SeP>1294<SeP>914<SeP>1001<SeP>1339<SeP>821<SeP>925<SeP>791<SeP>3153<SeP>1294<SeP>1035<SeP>826<SeP>1349<SeP>1291<SeP>797<SeP>3092<SeP>1883<SeP>2631<SeP>1804<SeP>1553<SeP>1378<SeP>1345<SeP>1962<SeP>1959<SeP>2002<SeP>1503<SeP>1648<SeP>1516<SeP>1766<SeP>1705<SeP>1852<SeP>1870<SeP>1703<SeP>1488<SeP>3249<SeP>1594<SeP>1534<SeP>2113<SeP>1879<SeP>2218<SeP>1751<SeP>3415<SeP>1327<SeP>1538<SeP>1601<SeP>1272<SeP>1877<SeP>1701<SeP>1217<SeP>1445<SeP>1352<SeP>1186<SeP>2287<SeP>1208<SeP>1168<SeP>1301<SeP>5375<SeP>4020<SeP>1380<SeP>1334<SeP>1759<SeP>1948<SeP>1121<SeP>5826<SeP>2324<SeP>1704<SeP>972<SeP>1082<SeP>3294<SeP>1264<SeP>1060<SeP>994<SeP>1062<SeP>1044<SeP>3013<SeP>954<SeP>1424<SeP>3025<SeP>5429<SeP>2448<SeP>1018<SeP>914<SeP>915<SeP>992<SeP>1012<SeP>985<SeP>1033<SeP>3700<SeP>2315<SeP>1397<SeP>1640<SeP>663<SeP>928<SeP>1595<SeP>1057<SeP>1103<SeP>978<SeP>2229<SeP>1313<SeP>1058<SeP>990<SeP>1078<SeP>838<SeP>817<SeP>889<SeP>831<SeP>918<SeP>1042<SeP>825<SeP>829<SeP>797<SeP>949<SeP>828<SeP>686<SeP>896<SeP>853<SeP>872<SeP>928<SeP>816<SeP>843<SeP>715<SeP>785<SeP>1102<SeP>804<SeP>856<SeP>969<SeP>872<SeP>1132<SeP>972<SeP>748<SeP>533<SeP>956<SeP>830<SeP>1284<SeP>875<SeP>988<SeP>1271<SeP>1216<SeP>818<SeP>961<SeP>945<SeP>901<SeP>805<SeP>1073<SeP>940<SeP>959<SeP>904<SeP>1010<SeP>1013<SeP>1024<SeP>1014<SeP>1019<SeP>1096<SeP>908<SeP>932<SeP>1961<SeP>1327<SeP>1204<SeP>1074<SeP>929<SeP>1166<SeP>970<SeP>952<SeP>760<SeP>890<SeP>931<SeP>1089<SeP>797<SeP>1075<SeP>1280<SeP>1115<SeP>1135<SeP>1309<SeP>1180<SeP>1283<SeP>1275<SeP>1294<SeP>1518<SeP>1721<SeP>1688<SeP>1339<SeP>741<SeP>858<SeP>1148<SeP>1037<SeP>591<SeP>775<SeP>860<SeP>999<SeP>990<SeP>5981<SeP>2801<SeP>1892<SeP>1350<SeP>956<SeP>902<SeP>968<SeP>947<SeP>969<SeP>1096<SeP>1031<SeP>1074<SeP>1497<SeP>1896<SeP>1055<SeP>1276<SeP>1248<SeP>1192<SeP>1158<SeP>1036<SeP>999<SeP>1015<SeP>1137<SeP>1038<SeP>1142<SeP>946<SeP>1189<SeP>804<SeP>1412<SeP>1066<SeP>1168<SeP>1124<SeP>1336<SeP>1320<SeP>1357<SeP>1326<SeP>1144<SeP>1108<SeP>1230<SeP>1793<SeP>1464<SeP>1418<SeP>1944<SeP>1487<SeP>1583<SeP>1992<SeP>1325<SeP>1207<SeP>1059<SeP>1379<SeP>1271<SeP>1458<SeP>1143<SeP>1405<SeP>1683<SeP>1561<SeP>1489<SeP>1451<SeP>1470<SeP>1246<SeP>959<SeP>1173<SeP>1290<SeP>1163<SeP>1251<SeP>1432<SeP>1085<SeP>1554<SeP>1755<SeP>1260<SeP>1453<SeP>1612<SeP>1374<SeP>928<SeP>1026<SeP>991<SeP>995<SeP>840<SeP>1006<SeP>1740<SeP>1189<SeP>1045<SeP>1124<SeP>955<SeP>776<SeP>1137<SeP>1350<SeP>821<SeP>943<SeP>930<SeP>1311<SeP>1578<SeP>1474<SeP>1090<SeP>1129<SeP>990<SeP>1794<SeP>1107<SeP>1074<SeP>1104<SeP>1194<SeP>1426<SeP>956<SeP>972<SeP>1267<SeP>1045<SeP>838<SeP>902<SeP>1095<SeP>1567<SeP>1438<SeP>1541<SeP>1430<SeP>1141<SeP>896<SeP>1138<SeP>1287<SeP>1137<SeP>1152<SeP>1001<SeP>1057<SeP>1143<SeP>1557<SeP>1303<SeP>1540<SeP>1281<SeP>1501<SeP>1553<SeP>1466<SeP>1223<SeP>1521<SeP>1501<SeP>1350<SeP>1388<SeP>1544<SeP>1584<SeP>1483<SeP>1384<SeP>1402<SeP>1384<SeP>1176<SeP>1275<SeP>1435<SeP>1653<SeP>1457<SeP>1289<SeP>1105<SeP>1489<SeP>1188<SeP>1387<SeP>1157<SeP>1673<SeP>1899<SeP>1344<SeP>872<SeP>1059<SeP>1833<SeP>1434<SeP>1265<SeP>1421<SeP>996<SeP>1387<SeP>1339<SeP>1388<SeP>1404<SeP>1466<SeP>1669<SeP>1554<SeP>1424<SeP>1614<SeP>1402<SeP>1357<SeP>1722<SeP>1530<SeP>1307<SeP>1176<SeP>1575<SeP>1786<SeP>1854<SeP>1775<SeP>1841<SeP>1511<SeP>1623<SeP>1583<SeP>1588<SeP>1522<SeP>1558<SeP>1734<SeP>1905<SeP>1429<SeP>1421";
  const itemBorderColor = "rgba(94,184,77,1)";
  const itemFillColor   = "rgba(224,234,223,0.75)";

  areaChartStacked1(chartElement, chartTitle, yaxisTitle, labelsData, itemLabel, itemData, itemBorderColor, itemFillColor);
}

function attacksTrendSpanish()
{
  const chartElement     = "attacks-trend";
  const chartTitle       = "Tendencia de ataques";
  const yaxisTitle       = "N\u00famero de ataques";
  const labelsData       = "2023-07-26 00:00:00<SeP>2023-07-27 11:06:09<SeP>2023-07-28 22:12:18<SeP>2023-07-30 09:18:27<SeP>2023-07-31 20:24:36<SeP>2023-08-02 07:30:45<SeP>2023-08-03 18:36:54<SeP>2023-08-05 05:43:03<SeP>2023-08-06 16:49:12<SeP>2023-08-08 03:55:21<SeP>2023-08-09 15:01:30<SeP>2023-08-11 02:07:39<SeP>2023-08-12 13:13:48<SeP>2023-08-14 00:19:57<SeP>2023-08-15 11:26:06<SeP>2023-08-16 22:32:15<SeP>2023-08-18 09:38:24<SeP>2023-08-19 20:44:33<SeP>2023-08-21 07:50:42<SeP>2023-08-22 18:56:51<SeP>2023-08-24 06:03:00<SeP>2023-08-25 17:09:09<SeP>2023-08-27 04:15:18<SeP>2023-08-28 15:21:27<SeP>2023-08-30 02:27:36<SeP>2023-08-31 13:33:45<SeP>2023-09-02 00:39:54<SeP>2023-09-03 11:46:03<SeP>2023-09-04 22:52:12<SeP>2023-09-06 09:58:21<SeP>2023-09-07 21:04:30<SeP>2023-09-09 08:10:39<SeP>2023-09-10 19:16:48<SeP>2023-09-12 06:22:57<SeP>2023-09-13 17:29:06<SeP>2023-09-15 04:35:15<SeP>2023-09-16 15:41:24<SeP>2023-09-18 02:47:33<SeP>2023-09-19 13:53:42<SeP>2023-09-21 00:59:51<SeP>2023-09-22 12:06:00<SeP>2023-09-23 23:12:09<SeP>2023-09-25 10:18:18<SeP>2023-09-26 21:24:27<SeP>2023-09-28 08:30:36<SeP>2023-09-29 19:36:45<SeP>2023-10-01 06:42:54<SeP>2023-10-02 17:49:03<SeP>2023-10-04 04:55:12<SeP>2023-10-05 16:01:21<SeP>2023-10-07 03:07:30<SeP>2023-10-08 14:13:39<SeP>2023-10-10 01:19:48<SeP>2023-10-11 12:25:57<SeP>2023-10-12 23:32:06<SeP>2023-10-14 10:38:15<SeP>2023-10-15 21:44:24<SeP>2023-10-17 08:50:33<SeP>2023-10-18 19:56:42<SeP>2023-10-20 07:02:51<SeP>2023-10-21 18:09:00<SeP>2023-10-23 05:15:09<SeP>2023-10-24 16:21:18<SeP>2023-10-26 03:27:27<SeP>2023-10-27 14:33:36<SeP>2023-10-29 01:39:45<SeP>2023-10-30 12:45:54<SeP>2023-10-31 23:52:03<SeP>2023-11-02 10:58:12<SeP>2023-11-03 22:04:21<SeP>2023-11-05 08:10:30<SeP>2023-11-06 19:16:39<SeP>2023-11-08 06:22:48<SeP>2023-11-09 17:28:57<SeP>2023-11-11 04:35:06<SeP>2023-11-12 15:41:15<SeP>2023-11-14 02:47:24<SeP>2023-11-15 13:53:33<SeP>2023-11-17 00:59:42<SeP>2023-11-18 12:05:51<SeP>2023-11-19 23:12:00<SeP>2023-11-21 10:18:09<SeP>2023-11-22 21:24:18<SeP>2023-11-24 08:30:27<SeP>2023-11-25 19:36:36<SeP>2023-11-27 06:42:45<SeP>2023-11-28 17:48:54<SeP>2023-11-30 04:55:03<SeP>2023-12-01 16:01:12<SeP>2023-12-03 03:07:21<SeP>2023-12-04 14:13:30<SeP>2023-12-06 01:19:39<SeP>2023-12-07 12:25:48<SeP>2023-12-08 23:31:57<SeP>2023-12-10 10:38:06<SeP>2023-12-11 21:44:15<SeP>2023-12-13 08:50:24<SeP>2023-12-14 19:56:33<SeP>2023-12-16 07:02:42<SeP>2023-12-17 18:08:51<SeP>2023-12-19 05:15:00<SeP>2023-12-20 16:21:09<SeP>2023-12-22 03:27:18<SeP>2023-12-23 14:33:27<SeP>2023-12-25 01:39:36<SeP>2023-12-26 12:45:45<SeP>2023-12-27 23:51:54<SeP>2023-12-29 10:58:03<SeP>2023-12-30 22:04:12<SeP>2024-01-01 09:10:21<SeP>2024-01-02 20:16:30<SeP>2024-01-04 07:22:39<SeP>2024-01-05 18:28:48<SeP>2024-01-07 05:34:57<SeP>2024-01-08 16:41:06<SeP>2024-01-10 03:47:15<SeP>2024-01-11 14:53:24<SeP>2024-01-13 01:59:33<SeP>2024-01-14 13:05:42<SeP>2024-01-16 00:11:51<SeP>2024-01-17 11:18:00<SeP>2024-01-18 22:24:09<SeP>2024-01-20 09:30:18<SeP>2024-01-21 20:36:27<SeP>2024-01-23 07:42:36<SeP>2024-01-24 18:48:45<SeP>2024-01-26 05:54:54<SeP>2024-01-27 17:01:03<SeP>2024-01-29 04:07:12<SeP>2024-01-30 15:13:21<SeP>2024-02-01 02:19:30<SeP>2024-02-02 13:25:39<SeP>2024-02-04 00:31:48<SeP>2024-02-05 11:37:57<SeP>2024-02-06 22:44:06<SeP>2024-02-08 09:50:15<SeP>2024-02-09 20:56:24<SeP>2024-02-11 08:02:33<SeP>2024-02-12 19:08:42<SeP>2024-02-14 06:14:51<SeP>2024-02-15 17:21:00<SeP>2024-02-17 04:27:09<SeP>2024-02-18 15:33:18<SeP>2024-02-20 02:39:27<SeP>2024-02-21 13:45:36<SeP>2024-02-23 00:51:45<SeP>2024-02-24 11:57:54<SeP>2024-02-25 23:04:03<SeP>2024-02-27 10:10:12<SeP>2024-02-28 21:16:21<SeP>2024-03-01 08:22:30<SeP>2024-03-02 19:28:39<SeP>2024-03-04 06:34:48<SeP>2024-03-05 17:40:57<SeP>2024-03-07 04:47:06<SeP>2024-03-08 15:53:15<SeP>2024-03-10 03:59:24<SeP>2024-03-11 15:05:33<SeP>2024-03-13 02:11:42<SeP>2024-03-14 13:17:51<SeP>2024-03-16 00:24:00<SeP>2024-03-17 11:30:09<SeP>2024-03-18 22:36:18<SeP>2024-03-20 09:42:27<SeP>2024-03-21 20:48:36<SeP>2024-03-23 07:54:45<SeP>2024-03-24 19:00:54<SeP>2024-03-26 06:07:03<SeP>2024-03-27 17:13:12<SeP>2024-03-29 04:19:21<SeP>2024-03-30 15:25:30<SeP>2024-04-01 02:31:39<SeP>2024-04-02 13:37:48<SeP>2024-04-04 00:43:57<SeP>2024-04-05 11:50:06<SeP>2024-04-06 22:56:15<SeP>2024-04-08 10:02:24<SeP>2024-04-09 21:08:33<SeP>2024-04-11 08:14:42<SeP>2024-04-12 19:20:51<SeP>2024-04-14 06:27:00<SeP>2024-04-15 17:33:09<SeP>2024-04-17 04:39:18<SeP>2024-04-18 15:45:27<SeP>2024-04-20 02:51:36<SeP>2024-04-21 13:57:45<SeP>2024-04-23 01:03:54<SeP>2024-04-24 12:10:03<SeP>2024-04-25 23:16:12<SeP>2024-04-27 10:22:21<SeP>2024-04-28 21:28:30<SeP>2024-04-30 08:34:39<SeP>2024-05-01 19:40:48<SeP>2024-05-03 06:46:57<SeP>2024-05-04 17:53:06<SeP>2024-05-06 04:59:15<SeP>2024-05-07 16:05:24<SeP>2024-05-09 03:11:33<SeP>2024-05-10 14:17:42<SeP>2024-05-12 01:23:51<SeP>2024-05-13 12:30:00<SeP>2024-05-14 23:36:09<SeP>2024-05-16 10:42:18<SeP>2024-05-17 21:48:27<SeP>2024-05-19 08:54:36<SeP>2024-05-20 20:00:45<SeP>2024-05-22 07:06:54<SeP>2024-05-23 18:13:03<SeP>2024-05-25 05:19:12<SeP>2024-05-26 16:25:21<SeP>2024-05-28 03:31:30<SeP>2024-05-29 14:37:39<SeP>2024-05-31 01:43:48<SeP>2024-06-01 12:49:57<SeP>2024-06-02 23:56:06<SeP>2024-06-04 11:02:15<SeP>2024-06-05 22:08:24<SeP>2024-06-07 09:14:33<SeP>2024-06-08 20:20:42<SeP>2024-06-10 07:26:51<SeP>2024-06-11 18:33:00<SeP>2024-06-13 05:39:09<SeP>2024-06-14 16:45:18<SeP>2024-06-16 03:51:27<SeP>2024-06-17 14:57:36<SeP>2024-06-19 02:03:45<SeP>2024-06-20 13:09:54<SeP>2024-06-22 00:16:03<SeP>2024-06-23 11:22:12<SeP>2024-06-24 22:28:21<SeP>2024-06-26 09:34:30<SeP>2024-06-27 20:40:39<SeP>2024-06-29 07:46:48<SeP>2024-06-30 18:52:57<SeP>2024-07-02 05:59:06<SeP>2024-07-03 17:05:15<SeP>2024-07-05 04:11:24<SeP>2024-07-06 15:17:33<SeP>2024-07-08 02:23:42<SeP>2024-07-09 13:29:51<SeP>2024-07-11 00:36:00<SeP>2024-07-12 11:42:09<SeP>2024-07-13 22:48:18<SeP>2024-07-15 09:54:27<SeP>2024-07-16 21:00:36<SeP>2024-07-18 08:06:45<SeP>2024-07-19 19:12:54<SeP>2024-07-21 06:19:03<SeP>2024-07-22 17:25:12<SeP>2024-07-24 04:31:21<SeP>2024-07-25 15:37:30<SeP>2024-07-27 02:43:39<SeP>2024-07-28 13:49:48<SeP>2024-07-30 00:55:57<SeP>2024-07-31 12:02:06<SeP>2024-08-01 23:08:15<SeP>2024-08-03 10:14:24<SeP>2024-08-04 21:20:33<SeP>2024-08-06 08:26:42<SeP>2024-08-07 19:32:51<SeP>2024-08-09 06:39:00<SeP>2024-08-10 17:45:09<SeP>2024-08-12 04:51:18<SeP>2024-08-13 15:57:27<SeP>2024-08-15 03:03:36<SeP>2024-08-16 14:09:45<SeP>2024-08-18 01:15:54<SeP>2024-08-19 12:22:03<SeP>2024-08-20 23:28:12<SeP>2024-08-22 10:34:21<SeP>2024-08-23 21:40:30<SeP>2024-08-25 08:46:39<SeP>2024-08-26 19:52:48<SeP>2024-08-28 06:58:57<SeP>2024-08-29 18:05:06<SeP>2024-08-31 05:11:15<SeP>2024-09-01 16:17:24<SeP>2024-09-03 03:23:33<SeP>2024-09-04 14:29:42<SeP>2024-09-06 01:35:51<SeP>2024-09-07 12:42:00<SeP>2024-09-08 23:48:09<SeP>2024-09-10 10:54:18<SeP>2024-09-11 22:00:27<SeP>2024-09-13 09:06:36<SeP>2024-09-14 20:12:45<SeP>2024-09-16 07:18:54<SeP>2024-09-17 18:25:03<SeP>2024-09-19 05:31:12<SeP>2024-09-20 16:37:21<SeP>2024-09-22 03:43:30<SeP>2024-09-23 14:49:39<SeP>2024-09-25 01:55:48<SeP>2024-09-26 13:01:57<SeP>2024-09-28 00:08:06<SeP>2024-09-29 11:14:15<SeP>2024-09-30 22:20:24<SeP>2024-10-02 09:26:33<SeP>2024-10-03 20:32:42<SeP>2024-10-05 07:38:51<SeP>2024-10-06 18:45:00<SeP>2024-10-08 05:51:09<SeP>2024-10-09 16:57:18<SeP>2024-10-11 04:03:27<SeP>2024-10-12 15:09:36<SeP>2024-10-14 02:15:45<SeP>2024-10-15 13:21:54<SeP>2024-10-17 00:28:03<SeP>2024-10-18 11:34:12<SeP>2024-10-19 22:40:21<SeP>2024-10-21 09:46:30<SeP>2024-10-22 20:52:39<SeP>2024-10-24 07:58:48<SeP>2024-10-25 19:04:57<SeP>2024-10-27 06:11:06<SeP>2024-10-28 17:17:15<SeP>2024-10-30 04:23:24<SeP>2024-10-31 15:29:33<SeP>2024-11-02 02:35:42<SeP>2024-11-03 12:41:51<SeP>2024-11-04 23:48:00<SeP>2024-11-06 10:54:09<SeP>2024-11-07 22:00:18<SeP>2024-11-09 09:06:27<SeP>2024-11-10 20:12:36<SeP>2024-11-12 07:18:45<SeP>2024-11-13 18:24:54<SeP>2024-11-15 05:31:03<SeP>2024-11-16 16:37:12<SeP>2024-11-18 03:43:21<SeP>2024-11-19 14:49:30<SeP>2024-11-21 01:55:39<SeP>2024-11-22 13:01:48<SeP>2024-11-24 00:07:57<SeP>2024-11-25 11:14:06<SeP>2024-11-26 22:20:15<SeP>2024-11-28 09:26:24<SeP>2024-11-29 20:32:33<SeP>2024-12-01 07:38:42<SeP>2024-12-02 18:44:51<SeP>2024-12-04 05:51:00<SeP>2024-12-05 16:57:09<SeP>2024-12-07 04:03:18<SeP>2024-12-08 15:09:27<SeP>2024-12-10 02:15:36<SeP>2024-12-11 13:21:45<SeP>2024-12-13 00:27:54<SeP>2024-12-14 11:34:03<SeP>2024-12-15 22:40:12<SeP>2024-12-17 09:46:21<SeP>2024-12-18 20:52:30<SeP>2024-12-20 07:58:39<SeP>2024-12-21 19:04:48<SeP>2024-12-23 06:10:57<SeP>2024-12-24 17:17:06<SeP>2024-12-26 04:23:15<SeP>2024-12-27 15:29:24<SeP>2024-12-29 02:35:33<SeP>2024-12-30 13:41:42<SeP>2025-01-01 00:47:51<SeP>2025-01-02 11:54:00<SeP>2025-01-03 23:00:09<SeP>2025-01-05 10:06:18<SeP>2025-01-06 21:12:27<SeP>2025-01-08 08:18:36<SeP>2025-01-09 19:24:45<SeP>2025-01-11 06:30:54<SeP>2025-01-12 17:37:03<SeP>2025-01-14 04:43:12<SeP>2025-01-15 15:49:21<SeP>2025-01-17 02:55:30<SeP>2025-01-18 14:01:39<SeP>2025-01-20 01:07:48<SeP>2025-01-21 12:13:57<SeP>2025-01-22 23:20:06<SeP>2025-01-24 10:26:15<SeP>2025-01-25 21:32:24<SeP>2025-01-27 08:38:33<SeP>2025-01-28 19:44:42<SeP>2025-01-30 06:50:51<SeP>2025-01-31 17:57:00<SeP>2025-02-02 05:03:09<SeP>2025-02-03 16:09:18<SeP>2025-02-05 03:15:27<SeP>2025-02-06 14:21:36<SeP>2025-02-08 01:27:45<SeP>2025-02-09 12:33:54<SeP>2025-02-10 23:40:03<SeP>2025-02-12 10:46:12<SeP>2025-02-13 21:52:21<SeP>2025-02-15 08:58:30<SeP>2025-02-16 20:04:39<SeP>2025-02-18 07:10:48<SeP>2025-02-19 18:16:57<SeP>2025-02-21 05:23:06<SeP>2025-02-22 16:29:15<SeP>2025-02-24 03:35:24<SeP>2025-02-25 14:41:33<SeP>2025-02-27 01:47:42<SeP>2025-02-28 12:53:51";
  const itemLabel       = "Ataques";
  const itemData        = "155<SeP>614<SeP>1144<SeP>683<SeP>442<SeP>219<SeP>6972<SeP>536<SeP>9522<SeP>573<SeP>396<SeP>1125<SeP>1266<SeP>270<SeP>148<SeP>461<SeP>112<SeP>764<SeP>280<SeP>5841<SeP>7246<SeP>7092<SeP>8232<SeP>5126<SeP>198<SeP>284<SeP>425<SeP>227<SeP>5695<SeP>481<SeP>173<SeP>305<SeP>451<SeP>318<SeP>5320<SeP>10316<SeP>8782<SeP>10915<SeP>7884<SeP>5285<SeP>7425<SeP>6649<SeP>9916<SeP>9083<SeP>7711<SeP>7935<SeP>8520<SeP>8846<SeP>8132<SeP>6203<SeP>6075<SeP>11592<SeP>7098<SeP>8090<SeP>7470<SeP>9650<SeP>11315<SeP>21314<SeP>11543<SeP>9320<SeP>10229<SeP>6118<SeP>9219<SeP>7485<SeP>9069<SeP>9135<SeP>5931<SeP>6520<SeP>7369<SeP>6977<SeP>2297<SeP>6103<SeP>5380<SeP>6675<SeP>6645<SeP>8185<SeP>2759<SeP>6180<SeP>6281<SeP>6490<SeP>5982<SeP>6514<SeP>3947<SeP>7255<SeP>5205<SeP>5570<SeP>5818<SeP>6729<SeP>21700<SeP>12858<SeP>32582<SeP>7770<SeP>7795<SeP>6986<SeP>11129<SeP>7908<SeP>4340<SeP>6278<SeP>3401<SeP>5429<SeP>7084<SeP>4896<SeP>8856<SeP>6658<SeP>5022<SeP>4850<SeP>5684<SeP>9683<SeP>8005<SeP>7676<SeP>4675<SeP>5866<SeP>10182<SeP>8573<SeP>4863<SeP>3278<SeP>6469<SeP>9331<SeP>4846<SeP>7374<SeP>9292<SeP>4188<SeP>3006<SeP>1083<SeP>1692<SeP>1819<SeP>2503<SeP>860<SeP>1359<SeP>551<SeP>1655<SeP>1281<SeP>1153<SeP>1104<SeP>827<SeP>1127<SeP>746<SeP>1462<SeP>1483<SeP>1124<SeP>1634<SeP>2041<SeP>1474<SeP>9801<SeP>7224<SeP>10570<SeP>8199<SeP>6048<SeP>11113<SeP>7250<SeP>8718<SeP>9436<SeP>10468<SeP>11686<SeP>7309<SeP>13377<SeP>13619<SeP>6782<SeP>10459<SeP>5572<SeP>5350<SeP>7304<SeP>25092<SeP>6118<SeP>8452<SeP>9630<SeP>17154<SeP>8299<SeP>6892<SeP>6853<SeP>6051<SeP>13887<SeP>20265<SeP>7826<SeP>10412<SeP>5496<SeP>6936<SeP>5588<SeP>10545<SeP>10896<SeP>5831<SeP>14843<SeP>7481<SeP>8350<SeP>6434<SeP>6165<SeP>3535<SeP>7065<SeP>7520<SeP>4627<SeP>6494<SeP>8134<SeP>5714<SeP>19451<SeP>7897<SeP>6521<SeP>5896<SeP>8617<SeP>10408<SeP>7345<SeP>2505<SeP>4776<SeP>4993<SeP>4019<SeP>4670<SeP>2459<SeP>625<SeP>592<SeP>154<SeP>622<SeP>586<SeP>783<SeP>349<SeP>662<SeP>1339<SeP>1400<SeP>3073<SeP>22804<SeP>626<SeP>4468<SeP>3824<SeP>2952<SeP>6943<SeP>2739<SeP>4234<SeP>3268<SeP>3083<SeP>3049<SeP>3151<SeP>4720<SeP>1763<SeP>2919<SeP>2619<SeP>2202<SeP>1949<SeP>1913<SeP>1136<SeP>1911<SeP>795<SeP>925<SeP>1776<SeP>23893<SeP>4333<SeP>3345<SeP>3334<SeP>3067<SeP>2776<SeP>3774<SeP>1588<SeP>3726<SeP>2574<SeP>3294<SeP>2512<SeP>2950<SeP>3110<SeP>3290<SeP>6697<SeP>4689<SeP>4065<SeP>3388<SeP>3177<SeP>3380<SeP>4003<SeP>5943<SeP>8018<SeP>5666<SeP>2311<SeP>3183<SeP>2512<SeP>4840<SeP>3606<SeP>3063<SeP>2614<SeP>4141<SeP>4934<SeP>3923<SeP>5848<SeP>3951<SeP>6556<SeP>4828<SeP>5406<SeP>4977<SeP>21658<SeP>5746<SeP>11024<SeP>1755<SeP>2976<SeP>4156<SeP>3638<SeP>5305<SeP>3664<SeP>4664<SeP>4417<SeP>4830<SeP>3096<SeP>4231<SeP>1981<SeP>1393<SeP>2169<SeP>3637<SeP>2651<SeP>2848<SeP>3598<SeP>4461<SeP>3728<SeP>3317<SeP>4282<SeP>3486<SeP>3121<SeP>5775<SeP>7922<SeP>6089<SeP>4628<SeP>5103<SeP>4591<SeP>3458<SeP>4071<SeP>3962<SeP>6355<SeP>5459<SeP>4625<SeP>3826<SeP>948<SeP>785<SeP>2231<SeP>1365<SeP>1089<SeP>1855<SeP>1559<SeP>1061<SeP>3115<SeP>4166<SeP>6445<SeP>23588<SeP>14970<SeP>5589<SeP>13684<SeP>14582<SeP>5381<SeP>5950<SeP>4871<SeP>19745<SeP>9401<SeP>5336<SeP>4591<SeP>4751<SeP>6351<SeP>22124<SeP>13470<SeP>3931<SeP>3618<SeP>3998<SeP>5694<SeP>4928<SeP>2986<SeP>3254<SeP>4390<SeP>5205<SeP>5347<SeP>17911<SeP>4921<SeP>5937<SeP>5960<SeP>2200<SeP>2838<SeP>3727<SeP>4942<SeP>4351<SeP>3501<SeP>2603<SeP>3574<SeP>2811<SeP>4579<SeP>5001<SeP>8493<SeP>10624<SeP>8205<SeP>9288<SeP>7858<SeP>7884<SeP>4769<SeP>5263<SeP>3690<SeP>25663<SeP>3700<SeP>3166<SeP>3965<SeP>10707<SeP>5569<SeP>4946<SeP>3679<SeP>4888<SeP>3366<SeP>5432<SeP>9266<SeP>8310<SeP>4330<SeP>2733<SeP>3472<SeP>1874";
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
  const itemData    = "694077<SeP>364391<SeP>206171<SeP>179809<SeP>110334<SeP>87976<SeP>83347<SeP>80868<SeP>68080<SeP>67296";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountryEnglish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Scans";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Scans";
  const itemData    = "296914<SeP>41422<SeP>40467<SeP>35662<SeP>14453<SeP>10968<SeP>7925<SeP>7876<SeP>7167<SeP>7022";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountryEnglish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Top 10 Countries of Origin of Attacks";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Attacks";
  const itemData    = "397163<SeP>328729<SeP>203148<SeP>139342<SeP>95881<SeP>80809<SeP>80710<SeP>69900<SeP>59371<SeP>58639";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieASNEnglish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Unwanted Traffic";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Unwanted Traffic";
  const itemData    = "363047<SeP>259552<SeP>236424<SeP>143851<SeP>67163<SeP>59617<SeP>56578<SeP>53049<SeP>41617<SeP>36073";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNEnglish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Scans";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>9808<SeP>137688";
  const itemLabel   = "Scans";
  const itemData    = "156262<SeP>53331<SeP>40495<SeP>32408<SeP>21910<SeP>12807<SeP>10775<SeP>8990<SeP>8269<SeP>7614";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNEnglish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Top 10 Autonomous Systems of Origin of Attacks";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>149722<SeP>4808<SeP>22927";
  const itemLabel   = "Atacks";
  const itemData    = "350240<SeP>258787<SeP>121941<SeP>80162<SeP>55595<SeP>48842<SeP>47018<SeP>29324<SeP>29134<SeP>26846";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function trafficPieCountrySpanish()
{
  const chartElement = "traffic-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s tr\u00e1fico";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Iran<SeP>Taiwan";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "694077<SeP>364391<SeP>206171<SeP>179809<SeP>110334<SeP>87976<SeP>83347<SeP>80868<SeP>68080<SeP>67296";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieCountrySpanish()
{
  const chartElement = "scans-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s escaneos";
  const labelsData   = "China<SeP>Iran<SeP>India<SeP>United States<SeP>South Korea<SeP>Russia<SeP>Taiwan<SeP>Hong Kong<SeP>Germany<SeP>Brazil";
  const itemLabel   = "Escaneos";
  const itemData    = "296914<SeP>41422<SeP>40467<SeP>35662<SeP>14453<SeP>10968<SeP>7925<SeP>7876<SeP>7167<SeP>7022";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieCountrySpanish()
{
  const chartElement = "attacks-pie-country";
  const chartTitle   = "Los 10 pa\u00edses origen de m\u00e1s ataques";
  const labelsData   = "China<SeP>United States<SeP>Singapore<SeP>India<SeP>South Korea<SeP>Germany<SeP>Indonesia<SeP>Russia<SeP>Taiwan<SeP>Hong Kong";
  const itemLabel   = "Ataques";
  const itemData    = "397163<SeP>328729<SeP>203148<SeP>139342<SeP>95881<SeP>80809<SeP>80710<SeP>69900<SeP>59371<SeP>58639";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);

}

function trafficPieASNSpanish()
{
  const chartElement = "traffic-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s tr\u00e1fico no deseado";
  const labelsData   = "14061<SeP>132203<SeP>4134<SeP>45090<SeP>4837<SeP>4766<SeP>16276<SeP>3462<SeP>58224<SeP>9829";
  const itemLabel   = "Tr\u00e1fico no deseado";
  const itemData    = "363047<SeP>259552<SeP>236424<SeP>143851<SeP>67163<SeP>59617<SeP>56578<SeP>53049<SeP>41617<SeP>36073";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function scansPieASNSpanish()
{
  const chartElement = "scans-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s escaneos";
  const labelsData   = "4134<SeP>4837<SeP>58224<SeP>9829<SeP>45090<SeP>14061<SeP>4766<SeP>0<SeP>9808<SeP>137688";
  const itemLabel   = "Escaneos";
  const itemData    = "156262<SeP>53331<SeP>40495<SeP>32408<SeP>21910<SeP>12807<SeP>10775<SeP>8990<SeP>8269<SeP>7614";
  const itemColor   = "rgba(216,149,31,0.75)" + ARRAY_SEP + "rgba(248,99,204,0.75)" + ARRAY_SEP + "rgba(197,5,148,0.75)" + ARRAY_SEP + "rgba(71,93,12,0.75)" + ARRAY_SEP + "rgba(14,74,15,0.75)" + ARRAY_SEP + "rgba(238,70,27,0.75)" + ARRAY_SEP + "rgba(249,145,159,0.75)" + ARRAY_SEP + "rgba(150,178,30,0.75)" + ARRAY_SEP + "rgba(239,179,82,0.75)" + ARRAY_SEP + "rgba(154,96,17,0.75)";

  pieChart(chartElement, chartTitle, labelsData, itemLabel, itemData, itemColor);
}

function attacksPieASNSpanish()
{
  const chartElement = "attacks-pie-asn";
  const chartTitle   = "Los 10 sistemas aut\u00f3nomos origen de m\u00e1s ataques";
  const labelsData   = "14061<SeP>132203<SeP>45090<SeP>4134<SeP>16276<SeP>4766<SeP>3462<SeP>149722<SeP>4808<SeP>22927";
  const itemLabel   = "Ataques";
  const itemData    = "350240<SeP>258787<SeP>121941<SeP>80162<SeP>55595<SeP>48842<SeP>47018<SeP>29324<SeP>29134<SeP>26846";
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
