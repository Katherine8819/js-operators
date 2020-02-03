(function () {
    'use strict'

    let circleLength = prompt('Введите длину окружности');
    let squarePerimeter = prompt('Введите периметр квадрата');

    let circleDiameter = circleLength / Math.PI;
    let squareSiade = squarePerimeter / 4;

    if (circleDiameter <= squareSiade) {
        alert("Окружность поместится в квадрат")
    } else {
        alert("Окружность не поместится в квадрат")
    }
})();


// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.