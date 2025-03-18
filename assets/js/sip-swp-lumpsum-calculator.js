// Tab Switching
function openTab(event, tabName) {
    let tabContent = document.getElementsByClassName("tab-content");
    let tabButtons = document.getElementsByClassName("tab-btn");

    for (let tab of tabContent) {
        tab.classList.remove("active");
    }
    for (let button of tabButtons) {
        button.classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Ensure the first tab is open by default
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tab-btn").click();
});

// Function to format numbers in Indian numbering format
function formatIndianNumber(num) {
    return new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
}

// SIP Calculator with Inflation
function calculateSIP() {
    let P = Number(document.getElementById("sipAmount").value);
    let r = Number(document.getElementById("sipRate").value) / 100 / 12;
    let n = Number(document.getElementById("sipYears").value) * 12;
    let i = Number(document.getElementById("inflationRate").value) / 100;

    let futureValue = P * ((Math.pow(1 + r, n) - 1) / r); //* (1 + r);
    // futureValue /= Math.pow(1 + i, n / 12);

    let amountInvested = P * n;
    let profitEarned = futureValue - amountInvested;

    document.getElementById("sipResult").innerHTML = `
       <div class="result-line"><strong>Amount Invested:</strong> ₹${formatIndianNumber(amountInvested)}</div>
       <div class="result-line"><strong>Profit Earned:</strong> ₹${formatIndianNumber(profitEarned)}</div>
       <div class="result-line"><strong>Final Value:</strong> ₹${formatIndianNumber(futureValue)}</div>
   `;
}

// SWP Calculator
function calculateSWP() {
    let P = Number(document.getElementById("swpInitial").value);
    let W = Number(document.getElementById("swpWithdraw").value);
    let r = Number(document.getElementById("swpRate").value) / 100 / 12;
    let n = Number(document.getElementById("swpYears").value) * 12;

    let initialInvestment = P;
    let totalWithdrawn = 0;

    for (let i = 0; i < n; i++) {
        P = (P * (1 + r)) - W;
        if (P <= 0) {
            P = 0;
            totalWithdrawn += W;
            break;
        }
        totalWithdrawn += W;
    }

    let profitEarned = P + totalWithdrawn - initialInvestment;

    document.getElementById("swpResult").innerHTML = `
       <div class="result-line"><strong>Amount Invested:</strong> ₹${formatIndianNumber(initialInvestment)}</div>
       <div class="result-line"><strong>Profit Earned:</strong> ₹${formatIndianNumber(profitEarned)}</div>
       <div class="result-line"><strong>Final Value:</strong> ₹${formatIndianNumber(P)}</div>
   `;
}

// Lumpsum Calculator
function calculateLumpsum() {
    let P = Number(document.getElementById("lumpAmount").value);
    let r = Number(document.getElementById("lumpRate").value) / 100;
    let t = Number(document.getElementById("lumpYears").value);

    let futureValue = P * Math.pow(1 + r, t);
    let profitEarned = futureValue - P;

    document.getElementById("lumpResult").innerHTML = `
       <div class="result-line"><strong>Amount Invested:</strong> ₹${formatIndianNumber(P)}</div>
       <div class="result-line"><strong>Profit Earned:</strong> ₹${formatIndianNumber(profitEarned)}</div>
       <div class="result-line"><strong>Final Value:</strong> ₹${formatIndianNumber(futureValue)}</div>
   `;
}

// SIP & SWP Calculator
function calculateSIPSWP() {
    let sipAmount = Number(document.getElementById("sipSwpAmount").value);
    let rate = Number(document.getElementById("sipSwpRate").value) / 100 / 12;
    let investYears = Number(document.getElementById("sipSwpYears").value);
    let withdrawAmount = Number(document.getElementById("sipSwpWithdraw").value);
    let withdrawYears = Number(document.getElementById("sipSwpWithdrawYears").value);

    let months = investYears * 12;
    let sipFutureValue = sipAmount * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
    let totalInvested = sipAmount * months;

    let remainingAmount = sipFutureValue;
    let withdrawMonths = withdrawYears * 12;
    let totalWithdrawn = 0;

    for (let i = 0; i < withdrawMonths; i++) {
        remainingAmount = (remainingAmount * (1 + rate)) - withdrawAmount;
        if (remainingAmount <= 0) {
            remainingAmount = 0;
            totalWithdrawn += withdrawAmount;
            break;
        }
        totalWithdrawn += withdrawAmount;
    }

    let profitEarned = (sipFutureValue + totalWithdrawn) - totalInvested;

    document.getElementById("sipSwpResult").innerHTML = `
       <div class="result-line"><strong>Amount Invested:</strong> ₹${formatIndianNumber(totalInvested)}</div>
       <div class="result-line"><strong>Profit Earned:</strong> ₹${formatIndianNumber(profitEarned)}</div>
       <div class="result-line"><strong>Amount Withdrawn:</strong> ₹${formatIndianNumber(totalWithdrawn)}</div>
       <div class="result-line"><strong>Final Value:</strong> ₹${formatIndianNumber(remainingAmount)}</div>
   `;
}
