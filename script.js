document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const numberInput = document.getElementById("numberInput");
    const resultDiv = document.getElementById("result");

    function convertToRoman(num) {
        const romanNumerals = [
            // ... (the same array from the previous response)
        ];

        let result = "";

        for (const numeral of romanNumerals) {
            while (num >= numeral.value) {
                result += numeral.symbol;
                num -= numeral.value;
            }
        }

        return result;
    }

    convertButton.addEventListener("click", function () {
        const inputNumber = parseInt(numberInput.value);

        if (!isNaN(inputNumber) && inputNumber >= 0 && inputNumber <= 100000) {
            const romanNumeral = convertToRoman(inputNumber);
            resultDiv.textContent = `Roman Numeral: ${romanNumeral}`;
        } else {
            resultDiv.textContent = "Please enter a valid number (0-100000).";
        }
    });
});
