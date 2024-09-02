const inputArray = document.querySelector("#inputArray")
const yourResult = document.querySelector("#yourResult")

const positive = document.querySelector("#positive")
const negative = document.querySelector("#negative")
const even = document.querySelector("#even")
const odd = document.querySelector("#odd")

let Arr = []

positive.addEventListener('click', positiveFilter)
function positiveFilter() {
    Arr = inputArray.value
        .replace(/\s/g, "")
        .split(",")
        .map(Number)

    yourResult.innerHTML = Arr

    let result = Arr.filter((e) => e > 0)
    yourResult.innerHTML = result.length === 0 ? "Положительных чисел нет" : result
};

negative.addEventListener('click', negativeFilter)
function negativeFilter() {
    Arr = inputArray.value
        .replace(/\s/g, "")
        .split(",")
        .map(Number)

    yourResult.innerHTML = Arr

    let result = Arr.filter((e) => e < 0)
    yourResult.innerHTML = result.length === 0 ? "Отрицательных чисел нет" : result
};

even.addEventListener('click', evenFilter)
function evenFilter() {
    Arr = inputArray.value
        .replace(/\s/g, "")
        .split(",")
        .map(Number)

    yourResult.innerHTML = Arr

    let result = Arr.filter((e) => e % 2 === 0)
    yourResult.innerHTML = result.length === 0 ? "Четных чисел нет" : result
};

odd.addEventListener('click', oddFilter)
function oddFilter() {
    Arr = inputArray.value
        .replace(/\s/g, "")
        .split(",")
        .map(Number)

    yourResult.innerHTML = Arr

    let result = Arr.filter((e) => e % 2 !== 0)
    yourResult.innerHTML = result.length === 0 ? "Нечетных чисел нет" : result
};