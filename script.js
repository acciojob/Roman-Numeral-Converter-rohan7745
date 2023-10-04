function convertToRoman(num) {
    const romanNumerals = [
        { value: 100000, symbol: "C̅" },
        { value: 90000, symbol: "X̅C̅" },
        { value: 50000, symbol: "L̅" },
        { value: 40000, symbol: "X̅L̅" },
        { value: 10000, symbol: "X̅" },
        { value: 9000, symbol: "I̅X̅" },
        { value: 5000, symbol: "V̅" },
        { value: 4000, symbol: "I̅V̅" },
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
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
