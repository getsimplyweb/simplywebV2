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
    //let P = Number(document.getElementById("sipAmount").value);
    //let r = Number(document.getElementById("sipRate").value) / 100 / 12;
    //let n = Number(document.getElementById("sipYears").value) * 12;
    //let i = Number(document.getElementById("inflationRate").value) / 100;

    //let futureValue = P * ((Math.pow(1 + (r - i), n) - 1) / r) * (1 + (r - i));
    //futureValue /= Math.pow(1 + i, n / 12);

    let P = Number(document.getElementById("sipAmount").value);
    let annualRate = Number(document.getElementById("sipRate").value);        // Annual SIP return rate
    let inflation = Number(document.getElementById("inflationRate").value);   // Annual inflation rate

    let realAnnualRate = annualRate - inflation;     // Adjust for inflation first
    let r = realAnnualRate / 100 / 12;               // Convert to monthly rate after inflation adjustment

    let n = Number(document.getElementById("sipYears").value) * 12;

    let futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    let amountInvested = P * n;
    let profitEarned = futureValue - amountInvested;

    document.getElementById("sipResult").innerHTML = `
   <div class="result-line"><span class="label">Amount Invested:</span><span class="value">₹${formatIndianNumber(amountInvested)}</span></div>
   <div class="result-line"><span class="label">Profit Earned:</span><span class="value">₹${formatIndianNumber(profitEarned)}</span></div>
   <div class="result-line"><span class="label">Final Value:</span><span class="value">₹${formatIndianNumber(futureValue)}</span></div>
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
    <div class="result-line"><span class="label">Amount Invested:</span><span class="value">₹${formatIndianNumber(initialInvestment)}</span></div>
    <div class="result-line"><span class="label">Amount Withdrawn:</span><span class="value">₹${formatIndianNumber(totalWithdrawn)}</span></div>
    <div class="result-line"><span class="label">Profit Earned:</span><span class="value">₹${formatIndianNumber(profitEarned)}</span></div>
    <div class="result-line"><span class="label">Final Value:</span><span class="value">₹${formatIndianNumber(P)}</span></div>
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
    <div class="result-line"><span class="label">Amount Invested:</span><span class="value">₹${formatIndianNumber(P)}</span></div>
    <div class="result-line"><span class="label">Profit Earned:</span><span class="value">₹${formatIndianNumber(profitEarned)}</span></div>
    <div class="result-line"><span class="label">Final Value:</span><span class="value">₹${formatIndianNumber(futureValue)}</span></div>
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
    <div class="result-line"><span class="label">Amount Invested:</span><span class="value">₹${formatIndianNumber(totalInvested)}</span></div>
    <div class="result-line"><span class="label">Profit Earned:</span><span class="value">₹${formatIndianNumber(profitEarned)}</span></div>
    <div class="result-line"><span class="label">Amount Withdrawn:</span><span class="value">₹${formatIndianNumber(totalWithdrawn)}</span></div>
    <div class="result-line"><span class="label">Final Value:</span><span class="value">₹${formatIndianNumber(remainingAmount)}</span></div>
`;
}
