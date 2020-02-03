(function () {
    'use strict';

    let sum = prompt('Введите сумму в грн., которую хотите конертировать');
    let currency = prompt('Введите валюту (EUR, RUB или AZN)');
    let result = 0;
    let eurCur = 27.21;
    let rubCur = 2.53;
    let aznCur = 0.069;


    if (currency == 'EUR' || currency == 'eur' || currency == 'евро') {
        result = (sum * eurCur).toFixed(2);
        alert(`${sum} UAH = ${result} EUR`)
    }

    if (currency == 'RUB' || currency == 'rub' || currency == 'руб' || currency == 'рубли') {
        result = (sum * rubCur).toFixed(2);
        alert(`${sum} UAH = ${result} RUB`)
    }
    if (currency == 'AZN' || currency == 'azn') {
        result = (sum * aznCur).toFixed(2);
        alert(`${sum} UAH = ${result} AZN`)
    }

})();





// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.