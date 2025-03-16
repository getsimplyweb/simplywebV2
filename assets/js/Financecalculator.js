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

// SIP Calculator with Inflation
function calculateSIP() {
    let P = Number(document.getElementById("sipAmount").value);
    let r = Number(document.getElementById("sipRate").value) / 100 / 12;
    let n = Number(document.getElementById("sipYears").value) * 12;
    let i = Number(document.getElementById("inflationRate").value) / 100;

    let futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    futureValue /= Math.pow(1 + i, n / 12);
    document.getElementById("sipResult").innerText = futureValue.toFixed(2);
}

// SWP Calculator (Fixed)
function calculateSWP() {
    let P = Number(document.getElementById("swpInitial").value);
    let W = Number(document.getElementById("swpWithdraw").value);
    let r = Number(document.getElementById("swpRate").value) / 100 / 12;
    let n = Number(document.getElementById("swpYears").value) * 12;

    for (let i = 0; i < n; i++) {
        P = (P * (1 + r)) - W;
        if (P <= 0) {
            P = 0;
            break;
        }
    }
    document.getElementById("swpResult").innerText = P.toFixed(2);
}

// Lumpsum Calculator
function calculateLumpsum() {
    let P = Number(document.getElementById("lumpAmount").value);
    let r = Number(document.getElementById("lumpRate").value) / 100;
    let t = Number(document.getElementById("lumpYears").value);

    let futureValue = P * Math.pow(1 + r, t);
    document.getElementById("lumpResult").innerText = futureValue.toFixed(2);
}

// SIP & SWP Calculator (Implemented)
function calculateSIPSWP() {
    let sipAmount = Number(document.getElementById("sipSwpAmount").value);
    let rate = Number(document.getElementById("sipSwpRate").value) / 100 / 12;
    let investYears = Number(document.getElementById("sipSwpYears").value);
    let withdrawAmount = Number(document.getElementById("sipSwpWithdraw").value);
    let withdrawYears = Number(document.getElementById("sipSwpWithdrawYears").value);

    // Step 1: Calculate SIP Future Value
    let months = investYears * 12;
    let sipFutureValue = sipAmount * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);

    // Step 2: Perform SWP on SIP Amount
    let remainingAmount = sipFutureValue;
    let withdrawMonths = withdrawYears * 12;

    for (let i = 0; i < withdrawMonths; i++) {
        remainingAmount = (remainingAmount * (1 + rate)) - withdrawAmount;
        if (remainingAmount <= 0) {
            remainingAmount = 0;
            break;
        }
    }

    document.getElementById("sipSwpResult").innerText = remainingAmount.toFixed(2);
}
