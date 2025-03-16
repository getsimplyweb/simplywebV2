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

// SWP Calculator
function calculateSWP() {
    let P = Number(document.getElementById("swpInitial").value);
    let W = Number(document.getElementById("swpWithdraw").value);
    let r = Number(document.getElementById("swpRate").value) / 100 / 12;
    let n = Number(document.getElementById("swpYears").value) * 12;

    for (let i = 0; i < n; i++) {
        P = (P * (1 + r)) - W;
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

// SIP & SWP Calculator
function calculateSIPSWP() {
    document.getElementById("sipSwpResult").innerText = "Coming Soon!";
}
