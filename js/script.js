// Сайт розроблено студенткою Бондаренко Вікторія Олексіївна, група ФЕМП 5-3з

document.getElementById("creditForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let amount = parseFloat(document.getElementById("amount").value);
    let months = parseInt(document.getElementById("months").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100;

    if (amount <= 0 || months <= 0 || rate <= 0) {
        showResult("❌ Будь ласка, введіть коректні дані.", true);
        return;
    }

    // Місячна ставка
    let monthlyRate = rate / 12;

    // Формула ануїтетного платежу
    let monthlyPayment = amount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));
    let totalPayment = monthlyPayment * months;
    let overpay = totalPayment - amount;

    let message = `
        <h3>Результати:</h3>
        <p>Щомісячний платіж: <b>${monthlyPayment.toFixed(2)} грн</b></p>
        <p>Загальна переплата: <b>${overpay.toFixed(2)} грн</b></p>
        <p>Повна сума до сплати: <b>${totalPayment.toFixed(2)} грн</b></p>
    `;

    showResult(message);
});

// Функція для показу результатів з анімацією
function showResult(message, isError = false) {
    const result = document.getElementById("result");
    result.innerHTML = message;
    result.classList.remove("hidden", "error", "show");
    if (isError) {
        result.classList.add("error");
    }
    setTimeout(() => {
        result.classList.add("show");
    }, 50);
}
