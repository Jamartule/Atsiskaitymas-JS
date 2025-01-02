// Paverciam eurus i dolerius
function convertEurToUsd(eur, exchangeRate) {
  return eur * exchangeRate;
}

// generuojamas atsitiktinis sk nuo 1 iki 1000
function generateRandomEuros(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const exchangeRate = 1.1; //  1 euras = 1.10 dolerių

// gaunama lentele
const tableBody = document.getElementById('conversion-table');

// Sukuriu 10 eiluciu su atsitiktiniais sk.
for (let i = 0; i < 10; i++) {
  const randomEuros = generateRandomEuros(1, 1000); // Generuoju atsitiktine euru suma
  const convertedUsd = convertEurToUsd(randomEuros, exchangeRate); // paverciu doleriais

  const row = document.createElement('tr');

  // Sukurti langeliai (eurai ir doleriai)
  const eurosCell = document.createElement('td');
  eurosCell.textContent = `${randomEuros} EUR`;

  const dollarsCell = document.createElement('td');
  dollarsCell.textContent = `${convertedUsd.toFixed(2)} USD`;

  // Pridedu langelius
  row.appendChild(eurosCell);
  row.appendChild(dollarsCell);

  // Pridedama eilute
  tableBody.appendChild(row);
}
