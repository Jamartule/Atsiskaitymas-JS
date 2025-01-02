/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

//atlikta 1-uzduotis folderyje

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

// tai pat atlikta 2-uzduotis folderyje

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
// BMI apskaiciuoti
function calculateBMI(weight, height) {
  const bmi = weight / height ** 2;
  return bmi;
}

// Funkcija, kuri nustato svorio kategoriją pagal BMI
function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Per mažas svoris';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normalu';
  } else {
    return 'Viršsvoris';
  }
}

// Svoris ir ūgis
const weight = 75; // kg
const height = 1.53; // m

const bmi = calculateBMI(weight, height);

const category = getBMICategory(bmi);

console.log(`BMI: ${bmi.toFixed(2)}`);
console.log(`Svorio kategorija: ${category}`);

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

function convertAgeToUnits(ageInYears) {
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInYear = 365.25; // Vidutinis metų skaičius per metus (įtraukiant keliamuosius metus)

  // Apskaičiuojame kiekvieną vienetą
  const ageInDays = ageInYears * daysInYear;
  const ageInHours = ageInDays * hoursInDay;
  const ageInMinutes = ageInHours * minutesInHour;
  const ageInSeconds = ageInMinutes * secondsInMinute;

  return {
    seconds: ageInSeconds,
    minutes: ageInMinutes,
    hours: ageInHours,
    days: ageInDays,
  };
}

const ageInYears = 25; // Amžius metais

// Konvertuojamas amzius į sekundes, minutes, valandas ir dienas
const ageInUnits = convertAgeToUnits(ageInYears);

console.log(`Amžius: ${ageInYears} metai(ų)`);
console.log(`Sekundės: ${ageInUnits.seconds.toLocaleString()}`);
console.log(`Minutės: ${ageInUnits.minutes.toLocaleString()}`);
console.log(`Valandos: ${ageInUnits.hours.toLocaleString()}`);
console.log(`Dienos: ${ageInUnits.days.toLocaleString()}`);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

//  is Farenheito i Celsiju
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// is Celsijaus i Farenheita
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const fahrenheit = 100; //Farenheito
const celsius = 37.78; // Celsijaus

// is Farenheito i Celsiju
const convertedToCelsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F = ${convertedToCelsius.toFixed(2)}°C`);

// is Celsijaus i Farenheita
const convertedToFahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C = ${convertedToFahrenheit.toFixed(2)}°F`);

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

const numbers = [];
for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}

const result = numbers.join('-');

console.log(result);

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

for (let i = 1; i <= 5; i++) {
  let row = ''; // Kintamasis

  for (let j = 1; j <= i; j++) {
    row += '* '; // ZVAIGZDUTE SU TARPELIU
  }

  console.log(row);
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

// siandien diena
const today = new Date();

const kaledos = new Date(today.getFullYear(), 11, 25); // 11 yra gruodžio mėnesio indeksas js (0 - sausis, 11 - gruodis)

if (today > kaledos) {
  kaledos.setFullYear(today.getFullYear() + 1);
}

// Skirtumas tarp siandien ir kaledu datos
const timeDifference = kaledos - today;

// likusios dienos.
const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));

//
console.log(`Liko ${daysRemaining} dienos(-ų) iki Kalėdų.`);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let vardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

//su kableliais
let vardaiSuKableliais = '';
for (let i = 0; i < vardai.length; i++) {
  vardaiSuKableliais += vardai[i];
  if (i < vardai.length - 1) {
    vardaiSuKableliais += ',';
  }
}
console.log(vardaiSuKableliais);

//  su pliusais
let vardaiSuPliusais = '';
for (let i = 0; i < vardai.length; i++) {
  vardaiSuPliusais += vardai[i];
  if (i < vardai.length - 1) {
    vardaiSuPliusais += '+';
  }
}
console.log(vardaiSuPliusais);

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

function generatePassword() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const specialChars = '!@#$%^&*()';

  //atsitiktiniai simboliai
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  const randomDigit = digits[Math.floor(Math.random() * digits.length)];
  const randomSpecial =
    specialChars[Math.floor(Math.random() * specialChars.length)];

  const allCharacters = letters + digits + specialChars;
  let password = randomLetter + randomDigit + randomSpecial;

  for (let i = password.length; i < 12; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  return password;
}

console.log(generatePassword());
