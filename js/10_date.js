(function () {
    'use strict';

    let date = prompt('Введите любую дату (день.месяц.год)', '29.01.2020');
    const fullDay = 86400000;

    date = date.split('.');

    const MONTHS = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    let oldDate = new Date(date[2], date[1] - 1, date[0]);
    let timestamp = oldDate.getTime();
    let nextDate = new Date();
    nextDate.setTime(timestamp + fullDay);

    let dateDay = nextDate.getDate(),
        dateMonth = MONTHS[nextDate.getMonth()],
        dateYear = nextDate.getFullYear();

    alert(`Следующий день: ${dateDay} ${dateMonth} ${dateYear} г.`);
})()




// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.