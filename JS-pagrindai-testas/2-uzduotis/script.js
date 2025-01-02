function convertUsdToEur(usd, exchangeRate) {
  return usd * exchangeRate;
}

function generateRandomDollars(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const exchangeRate = 0.93; // 1 doleris = 0.93 euro

// Gaunama lentele
const tableBody = document.getElementById('conversion-table');

// Sukuriu 10 eil. su atsitiktiniais doleriais
for (let i = 0; i < 10; i++) {
  const randomDollars = generateRandomDollars(1, 1000); // Generuoju atsitiktinę dolerių sumą
  const convertedEur = convertUsdToEur(randomDollars, exchangeRate); // Paverčiu į eurus

  const row = document.createElement('tr');

  // Sukuriami langeliai (doleriai ir eurai)
  const dollarsCell = document.createElement('td');
  dollarsCell.textContent = `${randomDollars} USD`;

  const eurosCell = document.createElement('td');
  eurosCell.textContent = `${convertedEur.toFixed(2)} EUR`;

  // Pridedu langelius
  row.appendChild(dollarsCell);
  row.appendChild(eurosCell);

  tableBody.appendChild(row);
}
