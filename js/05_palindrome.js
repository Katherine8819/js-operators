(function () {
    'use strict';

    let poly = prompt('Введите число, чтобы узнать, является ли оно палиндромом');

    let p = poly;
    let number = 0;
    while (p != 0) {
        number *= 10;
        let left = p % 10;
        p = (p - left) / 10;
        number += left;
    }
    let isPalindrome = poly == number;
    if (isPalindrome) {
        alert(`Число ${poly} - палиндром`)
    } else {
        alert(`Число ${poly} - не палиндром`)
    }

})();

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.