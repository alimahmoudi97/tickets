const persionDigitsList = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const englishDigitsList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.querySelectorAll(".ticket__date");
  const uploadNumElements = document.querySelectorAll(".ticket__number");
  const idElements = document.querySelectorAll(".id");

  convertAllDates(dateElement);
  convertNumbers(uploadNumElements);
  converId(idElements);
});

function converId(idElements) {
  idElements.forEach((element) => {
    element.innerHTML = convertDigits(element.innerHTML);
    console.log(element);
  });
  // console.log(idElements);
}

function convertNumbers(uploadNums) {
  uploadNums.forEach((element) => {
    element.innerHTML = convertDigits(element.innerHTML);
  });
}

function convertAllDates(dateElements) {
  dateElements.forEach((element) => {
    element.innerHTML = convertDate(element.innerHTML);
  });
}

function convertDate(dat) {
  return dat.split("/").map(convertDigits).join("/");
}

function convertDigits(number) {
  return number
    .split("")
    .map((digit) => {
      const index = englishDigitsList.indexOf(digit);
      return index !== -1 ? persionDigitsList[index] : digit;
    })
    .join("");
}
