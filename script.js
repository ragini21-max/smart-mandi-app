function calculateETA() {
  const tonnage = parseFloat(document.getElementById('tonnage').value) || 0;
  const bridges = parseFloat(document.getElementById('bridges').value) || 1;

  // Formula approximation: (Tonnage * 5 mins unload + 10 mins weigh) / Weighbridges
  const unloadTimePerTon = 3; // minutes per ton
  const weighTime = 10; // fixed weighbridge time in minutes

  const totalMinutes = Math.round(((tonnage * unloadTimePerTon) + weighTime) / bridges);

  const resultDiv = document.getElementById('etaResult');
  resultDiv.innerHTML = `Estimated Wait Time ($W_i$): <strong>${totalMinutes} minutes</strong>`;
}