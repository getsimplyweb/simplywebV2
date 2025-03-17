// Function to switch tabs
function openTab(tabName) {
    document.querySelectorAll(".calculator").forEach(el => el.style.display = "none");
    document.getElementById(tabName).style.display = "block";
}

// Sync slider with input field
function syncInput(sliderId, inputId) {
    document.getElementById(inputId).value = document.getElementById(sliderId).value;
}

// Sync input field with slider
function syncSlider(inputId, sliderId) {
    document.getElementById(sliderId).value = document.getElementById(inputId).value;
}

// SIP Calculation
function calculateSIP() {
    let P = Number(document.getElementById("sipAmount").value);
    let r = Number(document.getElementById("sipRate").value) / 100 / 12;
    let n = Number(document.getElementById("sipYears").value) * 12;

    let futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    let amountInvested = P * n;
    let profitEarned = futureValue - amountInvested;

    document.getElementById("sipResult").innerHTML = `
        <p>Amount Invested: ₹${amountInvested.toLocaleString('en-IN')}</p>
        <p>Profit Earned: ₹${profitEarned.toLocaleString('en-IN')}</p>
        <p>Final Value: ₹${futureValue.toLocaleString('en-IN')}</p>
    `;
}

// Placeholder for SWP, Lumpsum, and SIP-SWP calculations
function calculateSWP() {
    alert("SWP calculation logic goes here.");
}
function calculateLumpsum() {
    alert("Lumpsum calculation logic goes here.");
}
function calculateSIPSWP() {
    alert("SIP & SWP calculation logic goes here.");
}
