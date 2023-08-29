// Module_2_Week_2
// Задание 1
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1 Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// 2 Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// 3 Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var purchase = [
    {
        name: 'a',
        count: 10,
        purchased: true
    },
    {
        name: 'b',
        count: 5,
        purchased: false
    },
    {
        name: 'c',
        count: 3,
        purchased: true
    },
    {
        name: 'd',
        count: 1,
        purchased: false
    },
];
var purchasedOl = document.querySelector('.purchase');
var showPurchaseButton = document.querySelector('.showPurchase');
var addPurchaseButton = document.querySelector('.addPurchase');
var setPurchasedButton = document.querySelector('.setPurchased');
function showPurchase() {
    if (purchasedOl) {
        purchasedOl.innerHTML = "";
    }
    for (var _i = 0, purchase_1 = purchase; _i < purchase_1.length; _i++) {
        var el = purchase_1[_i];
        if (!el.purchased) {
            if (purchasedOl) {
                purchasedOl.innerHTML += "<li>" + el.name + " \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043A\u0443\u043F\u0438\u0442\u044C " + el.count + " \u0448\u0442\u0443\u043A</li>";
            }
        }
    }
    for (var _a = 0, purchase_2 = purchase; _a < purchase_2.length; _a++) {
        var el = purchase_2[_a];
        if (el.purchased) {
            if (purchasedOl) {
                purchasedOl.innerHTML += "<li>" + el.name + " \u043A\u0443\u043F\u043B\u0435\u043D\u043E " + el.count + " \u0448\u0442\u0443\u043A</li>";
            }
        }
    }
}
function addPurchase() {
    var name = prompt('Введите назавание покупки');
    var count = prompt('Введите количество');
    var find = false;
    for (var _i = 0, purchase_3 = purchase; _i < purchase_3.length; _i++) {
        var el = purchase_3[_i];
        if (el.name == name) {
            find = true;
            // @ts-ignore  
            el.count += count;
        }
    }
    if (!find) {
        purchase.push({
            // @ts-ignore
            name: name,
            // @ts-ignore 
            count: count,
            purchased: false
        });
    }
    showPurchase();
}
function setPurchased() {
    var name = prompt('Введите назавание покупки');
    for (var _i = 0, purchase_4 = purchase; _i < purchase_4.length; _i++) {
        var el = purchase_4[_i];
        if (el.name == name) {
            el.purchased = true;
        }
    }
    showPurchase();
}
showPurchaseButton === null || showPurchaseButton === void 0 ? void 0 : showPurchaseButton.addEventListener('click', showPurchase);
addPurchaseButton === null || addPurchaseButton === void 0 ? void 0 : addPurchaseButton.addEventListener('click', addPurchase);
setPurchasedButton === null || setPurchasedButton === void 0 ? void 0 : setPurchasedButton.addEventListener('click', setPurchased);
// // Задание 3
// // Создать массив css - стилей(цвет, размер шрифта, выравнивание, подчеркивание и т.д.).Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// // Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p> </p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
var styleRed = [
    {
        name: 'color',
        value: 'red'
    },
    {
        name: 'text-decoration',
        value: 'underline'
    },
];
var styleGreen = [
    {
        name: 'color',
        value: 'green'
    },
    {
        name: 'font-size',
        value: '20px'
    },
];
var printTextDiv = document.querySelector('.printText');
function printText(style, text) {
    var styleStr = '';
    for (var _i = 0, style_1 = style; _i < style_1.length; _i++) {
        var el = style_1[_i];
        styleStr += el.name + ":" + el.value + ";";
    }
    if (printTextDiv) {
        printTextDiv.innerHTML += "<p style=" + styleStr + ">" + text + "</p>";
    }
}
printText(styleRed, 'fsdfsd sdf sdf sdf sg erwtw ');
printText(styleGreen, 'fsdfsd sdf sdf sdf sg erwtw sdf sdfsdf sdf ');
// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
// 1 Распечатка чека на экран.
// 2 Подсчет общей суммы покупки.
// 3 Получение самой дорогой покупки в чеке.
// 4 Подсчет средней стоимости одного товара в чеке.
function goods(nameOfGoods, count, price) {
    this.nameOfGoods = nameOfGoods;
    this.count = count;
    this.price = price;
    this.sum = this.price * this.count;
}
var goodsList = [new goods("fresh", 2, 7), new goods("pasta", 1, 15), new goods("pepsi", 3, 3)];
var goodsListPrint = function () {
    var total = 0;
    goodsList.forEach(function (item, index) {
        console.log(index + 1 + ") Name: " + item.nameOfGoods + " | Count: " + item.count + " | Price: " + item.price + " - Sum: " + item.sum);
        total += item.sum;
    });
};
var cheque = [
    {
        name: 'fresh',
        count: 10,
        price: 534
    },
    {
        name: 'pasta',
        count: 5,
        price: 11
    },
    {
        name: 'pepsi',
        count: 3,
        price: 32
    },
];
function showCheque(arr) {
    console.log(arr);
}
showCheque(cheque);
// Задание 4.
// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.
// 1.Вывод на экран всех аудиторий.
// 2.Вывод на экран аудиторий для указанного факультета.
// 3.Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4.Функция сортировки аудиторий по количеству мест.
// 5.Функция сортировки аудиторий по названию (по алфавиту).
var university = [
    {
        "name": "classroom1",
        "quantity": "15",
        "faculty": "physics"
    },
    {
        "name": "classroom2",
        "quantity": "17",
        "faculty": "mathematics"
    },
    {
        "name": "classroom3",
        "quantity": "13",
        "faculty": "literature"
    },
];
university.sort(function (a, b) {
    if (a.name < b.name || b.name > c) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});
console.log(university);
console.log(university);
var universityLiterature = university.filter(function (university) { return university.faculty === "literature"; });
console.log(universityLiterature);
var universityQuantity = university.filter(function (university) { return university.quantity === "13"; });
console.log(universityQuantity);
// 6. Написать функцию, которая принимает минимальное и 
// максимальное значения для диапазона, и выводит только 
// те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, 
// совершенное число или нет.
// let perfectNumber = +prompt("write the number for the start of the range");
// function perf(n) {
//     let n1 = 0;
//     for (let i = 1; i < n; i++) {
//         if (n % i == 0) {
//             n1 = n1 + i;
//         }
//     }
//     if (n1 == n) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let diapazonFrom = +prompt("write the number for the start of the range");
// let diapazonTo = +prompt("write the number for the end of the range");
// function findPerfectNumberInRange(from, to) {
//     let str=''
//     for (from; from<=to; from++) {
//         if (perf(from)) {
//             str += from + ', '
//         }
//     }
//     console.log(str)
// }
// findPerfectNumberInRange(diapazonFrom, diapazonTo)
// Modul_1_Week_4
// 1.Написать функцию, которая принимает 2 числа и возвра-
// щает меньшее из них.
// function takeNumbers () {
//     let a = +(prompt("write the first number"));
//     let b = +(prompt("write the second number"));
//     if (a>b) {
//         console.log (b)
//     } else if (a<b) {
//         console.log (a)
//     }
// }
// takeNumbers ()
// 2. Написать функцию, которая возводит переданное число
// в указанную степень.
// function exponentNumber () {
//     let a = +(prompt("write the number"));
//     let b = +(prompt("write the exponent"));
//     console.log (a**b)
// }
// exponentNumber ()
// 3. Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат.
// function calculatorOfNumbers () {
//     let a = +(prompt("write the first number"));
//     let b = +(prompt("write the second number"));
//     let c = prompt("write the sign");
//     if (c=='+') return a+b
//     if (c=='*') return a*b
//     if (c=='-') return a-b
//     if (c=='/') return a/b
// }
// console.log(calculatorOfNumbers ())
// 4. Написать функцию, которая проверяет, является ли пере-
// данное ей число простым.
// function primeNumber () {
//     let a = +(prompt("write the first number"));
//     if (a/a && a/1) {
//         console.log ('the number is prime')
//     } else {
//         console.log ('the number is composite')
//     }
// }
// primeNumber()
// 5. Написать функцию, которая принимает число и выводит
// таблицу умножения для этого числа. Вызовите функцию
// для всех чисел от 2 до 9
// function multiplicationCalculator() {
// let number = parseInt(prompt('write the number'));
// for(let i = 2; i <= 9; i++) {
//     let result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }
// }
// multiplicationCalculator ()
// 6. Написать функцию, которая реализует работу оператора %.
// Функция принимает 2 параметра и возвращает остаток от
// деления первого параметра на второй. В функции исполь-
// зовать только + - * /, оператор % не использовать.
// function divideOst(num1,num2) {
//     let mnoz = 1
//     let accum = num1-num2
//     while (accum>num2) {
//         accum -= num2
//         mnoz++
//     }
//     return num1 - num2*mnoz
// }
// console.log(divideOst(11,2))
// console.log(divideOst(11,3))
// console.log(divideOst(11,4))
// 7. Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает их сумму.
// function sumOfTheNumbersFromOneToFive (a,b=0,c=0,d=0,e=0) {
//     return a+b+c+d+e    
// }
// console.log(sumOfTheNumbersFromOneToFive(9))
// console.log(sumOfTheNumbersFromOneToFive(1,2))
// console.log(sumOfTheNumbersFromOneToFive(9,5,8))
// console.log(sumOfTheNumbersFromOneToFive(9,6,7,3))
// console.log(sumOfTheNumbersFromOneToFive(9,3,4,2,3))
// 8.Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает большее из них.
// function theBiggestOfTheNumbersFromOneToFive (a,b=0,c=0,d=0,f=0) {
//     if (a>b && a>c && a>d && a>f)
// {
//     return a;
// }
// else if (b>a && b>c && b>d && b>f)
// {
//     return b;
// }
// else if (c>a && c>b && c>d && c>f)
// {
//     return c;
// }
// else if (d>a && d>c && d>b && d>f)
// {
//     return d;
// }
// else
// {
//     return f
// }
// }
// console.log(theBiggestOfTheNumbersFromOneToFive(1,2,8,4,6))
// Module 2 week 2.
// Задание 1
// Создать массив из 10 случайных чисел и написать несколько
// функций для работы с ним.
// let arr = [1,2,4,6,3,4,77,334,1,2]
// 1. Функция принимает массив и выводит его на экран.
// const myArray = [1,2,4,6,3,4,77,334,1,2]
// function myFunction(arr: any []) {
//     console.log(arr);
//   }
//  myFunction(myArray) 
// 2. Функция принимает массив и выводит только четные элементы.
// const myArray = [1,2,4,6,3,4,77,334,1,2]
// const evens = myArray.filter((number) => number % 2 === 0);
// console.log(evens);
// 3. Функция принимает массив и возвращает сумму всех элементов массива.
// let arr = [1,2,4,6,3,4,77,334,1,2];
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result)
// 4. Функция принимает массив и возвращает его максималь-ный элемент.
// let arr = [1,2,4,6,3,4,77,334,1,2];
// let maxElement = Math.max.apply(null, arr);
// console.log(maxElement)
//     ;
// 5. Функция добавления нового элемента в массив по указанному индексу.
// 6. Функция удаления элемента из массива по указанному индексу.
// Задание 2.
// Создать еще один массив из 5 случайных чисел и написать
// следующие функции.
// 1. Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.
// let a = [1, 2, 3]; 
// let b = [101, 2, 1, 10];
// let c = a.concat(b)
// let d = c.filter((item, positive) => c.indexOf(item) === positive)
// console.log(d) 
// 2.Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.
// let a = [1, 2, 3, 5, 6, 8]; 
// let b = [101, 2, 1, 10, 6, 8];
// let commonElements = a.filter((element) => b.includes(element))
// console.log([commonElements]) 
// 3. Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве.
// let a = [1, 2, 3, 5, 6, 8 ]; 
// let b = [101, 2, 1, 10, 6 ];
// let commonElements = a.filter((element) => b.includes(element))
// let newArrayWithoutCommonElements = a.filter((element) => !commonElements.includes(element))
// console.log([newArrayWithoutCommonElements]) 
// Module_2_Week_4
// Задание 1
// Реализовать класс PrintMaсhine, которой состоит из:
// ■ размера шрифта;
// ■ цвета шрифта;
// ■ семейства шрифта;
// ■ метода print(), который принимает текст и печатает его
// соответствующим шрифтом с помощью document.write().
// Создать объект такого класса и продемонстрировать работу
// метода.
var PrintMaсhine = /** @class */ (function () {
    function PrintMaсhine(size, color, family) {
        if (size === void 0) { size = "16px"; }
        if (color === void 0) { color = "black"; }
        if (family === void 0) { family = "Times New Roman"; }
        this.size = size;
        this.color = color;
        this.family = family;
    }
    PrintMaсhine.prototype.print = function (text) {
        document.write("<p style=\"font-size:" + this.size + "; color:" + this.color + "; font-family:" + this.family + ";\">" + text + "</p>");
    };
    return PrintMaсhine;
}());
var header = new PrintMaсhine("40px", "black", "calibri");
var text = new PrintMaсhine("18px", "#333", "calibri");
var date = new PrintMaсhine("20px", "#dedede", "calibri");
var tags = new PrintMaсhine("16px", "#555", "calibri");
// Задание 2. Реализовать класс, описывающий новость (заголовок, текст,
// массив тегов, дата публикации). В классе необходимо реализовать
// один метод print, который выводит всю информацию в таком
// виде, как на рисунке 1
// Обратите внимание на то, как выводится дата:
// ■ если с даты публикации прошло менее дня, то выводится
// «сегодня»; если с даты публикации прошло менее недели, то выво-
// дится «N дней назад»;
// ■ в остальных случаях, полная дата в формате «дд.мм.гггг».
var infoNews = /** @class */ (function () {
    function infoNews(heading, text, arrayTags, date) {
        this.heading = heading;
        this.text = text;
        this.arrayTags = arrayTags;
        this.date = new Date(date);
    }
    infoNews.prototype.getDate = function () {
        var today = new Date();
        if (this.date.toLocaleDateString() == today.toLocaleDateString()) {
            return 'today';
        }
        else if (this.date.valueOf() > (today.valueOf() - 1000 * 60 * 60 * 24 * 7)) {
            return ((today.valueOf() - this.date.valueOf()) / (1000 * 60 * 60 * 24)).toFixed(0) + ' days ago';
        }
        else {
            return this.date.toLocaleDateString();
        }
    };
    infoNews.prototype.print = function () {
        header.print(this.heading);
        text.print(this.text);
        date.print(this.getDate());
        tags.print(this.arrayTags.join(' '));
    };
    return infoNews;
}());
var post = new infoNews('sdfsdfsd', 'sdfsdsdf', ['sfsd', 'sdf'], '2023-07-29');
post.print();
//   Задание 3
// Реализовать класс, описывающий новостную ленту.
// Класс должен содержать:
// ■ массив новостей;
// ■ get-свойство, которое возвращает количество новостей;
// ■ метод для вывода на экран всех новостей;
// ■ метод для добавления новости;
// ■ метод для удаления новости;
// ■ метод для сортировки новостей по дате (от последних но-
// востей до старых);
// ■ метод для поиска новостей по тегу (возвращает массив
// новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.
// class NewsFlow {
//     array;
//     text;
//     arrayTags;
//     date;
// constructor (array, text, arrayTags, date ) {
//   this.array = array;
//   this.text = text;
//   this.arrayTags = arrayTags;
//   this.date = date;
//  Module_2_Week_3. 
// 1.Написать функцию, которая принимает 2 строки и срав-
// нивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во вто-
// рой больше символов, чем в первой; или 0 – если строки
// одинаковой длины.
var text1 = "cdgergrt";
var text2 = "abrtgrthtrwwqweqwe";
var result = text1.localeCompare(text2);
console.log(result);
// 2.Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки.
function ucFirst(str) {
    if (!str)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("germany"));
// 3.Написать функцию, которая считает количество гласных
// букв в переданной строке.
var vowel_count = function (string) { return __spreadArrays(string).filter(function (c) { return 'aeiou'.includes(c.toLowerCase()); }).length; };
console.log(vowel_count('aaaa'));
console.log(vowel_count('AAAA'));
console.log(vowel_count('foo BAR baz QUX'));
console.log(vowel_count('Hello, world!'));
// 4.Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.
function checkSpam(str) {
    var lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
// 5.Написать функцию сокращения строки. Функция прини-
// мает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”.
// 6.Написать функцию, которая проверяет, является ли пере-
// данная строка палиндромом.
// 7.Написать функцию, которая считает количество слов в
// предложении.
// 8.Написать функцию, которая возвращает самое длинное
// слово из предложения.
// 9.Написать функцию, которая считает среднюю длину слова
// в предложении.
// 10. Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.
// Full review of the topic - Date.
// 1. Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.
var d1 = new Date(2012, 1, 20, 3, 12);
console.log(d1);
// 2. Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
function getWeekDay(date) {
    var days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
var date1 = new Date(2023, 3, 2);
console.log(getWeekDay(date1));
// 3. В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
function getLocalDay(date) {
    var day = date.getDay();
    return [1, 2, 3, 4, 5, 6, 0][day];
}
console.log(getLocalDay(date1));
// Module_1_Week_5.
// 1. Написать функцию, которая вычисляет факториал заданного числа.
var d = 6;
function calculatingTheFactorial(a) {
    var f = 1;
    if (0 <= a && a <= 1) {
        return f;
    }
    else if (a > 1) {
        return f = a * calculatingTheFactorial(a - 1);
    }
}
console.log("factorial number " + d + " is equal to " + calculatingTheFactorial(d));
// 2. Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну функцию – для вывода в обратном порядке.
var start = 3;
var end = 18;
function outputsNumbers(min, max) {
    var str = '';
    if (min == max) {
        return str = ' ' + min + ' ';
    }
    else {
        return str = ' ' + min + ' ' + [outputsNumbers((min + 1), max)];
    }
}
console.log("Numbers in the straight way: " + outputsNumbers(start, end));
function outputsNumbers1(min, max) {
    var str = '';
    if (min == max) {
        return str = ' ' + max + ' ';
    }
    else {
        return str = ' ' + max + ' ' + [outputsNumbers1(min, max - 1)];
    }
}
console.log("Numbers in the back way: " + outputsNumbers1(start, end));
// 3. Написать функцию, которая выводит переданное ей число задом наперед. Например: число 1234 вывести как 4321.
var num = '87654';
function flipTheNumber(s, i) {
    var a;
    if (i == 0) {
        return a = s[i];
    }
    else {
        return a = s[i] + flipTheNumber(s, --i);
    }
}
console.log("Flip this number: " + flipTheNumber(num, num.length - 1));
// 4. Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.
function sumDigitsOfTheNumber(s, i) {
    var sum;
    // console.log (s)
    // console.log (i)
    // console.log (Number(s[i]))
    if (i == 0) {
        return sum = +s[i];
    }
    else {
        return sum = +s[i] + (+sumDigitsOfTheNumber(s, --i));
    }
}
console.log("Sum of digits in the number \"" + num + "\" is equal: " + sumDigitsOfTheNumber(num, num.length - 1));
// 5. Написать функцию, которая принимает число и выводит
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((()))).
var brackets = [];
function printTheBrackets(num) {
    if (num == 1) {
        return brackets.unshift('(') + brackets.push(')');
    }
    else {
        return brackets.unshift('(') + brackets.push(')') + printTheBrackets(--num);
    }
}
console.log(printTheBrackets(5));
console.log(brackets.join(''));
// Module_1_Week_5. Во всех заданиях обязательно использовать рекурсию.
// 1. Написать функцию возведения числа в степень.
var the_number_being_exponentiated = 5;
var degree = 3;
function weRaiseToADegree(num, n) {
    if (n == 1) {
        return num;
    }
    else {
        return num * weRaiseToADegree(num, n - 1);
    }
}
console.log("Result: " + weRaiseToADegree(the_number_being_exponentiated, degree));
// 2. Написать функцию поиска наибольшего общего делителя.
var num1 = 36;
var num2 = 24;
function calculateTheGCD(a, s) {
    if (s == 0) {
        return a;
    }
    else if (a == 0) {
        return s;
    }
    if (a > s) {
        return calculateTheGCD(a % s, s);
    }
    else {
        return calculateTheGCD(a, s % a);
    }
}
console.log("The Biggest divider: " + calculateTheGCD(num1, num2));
// 3. Написать функцию для поиска максимальной цифры в числе.
var six_digits = 780235;
function weFindTheMaximumFigure(n) {
    var max;
    if (n < 10) {
        return n;
    }
    else {
        return Math.max(n % 10, weFindTheMaximumFigure(Math.round(n / 10)));
    }
}
console.log("Maximum number: " + weFindTheMaximumFigure(six_digits));
// 4. Написать функцию, которая определяет простое ли переданное число.
var simple_or_not = 5;
var simple_or_not1 = 6;
function weIdentifyAPrimeNumber(n, i) {
    if (i === void 0) { i = 2; }
    if (n == i && n % i == 0) {
        return 'Simple number';
    }
    else if (n > i && n % i == 0) {
        return 'Composite number';
    }
    else {
        return weIdentifyAPrimeNumber(n, i + 1);
    }
}
console.log("Provided number " + simple_or_not + " - " + weIdentifyAPrimeNumber(simple_or_not));
console.log("Provided number " + simple_or_not1 + " - " + weIdentifyAPrimeNumber(simple_or_not1));
// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3.
var factorization = 8;
var factorization1 = 72;
var a = [];
function weDecomposeIntoMultipliers(n, a, i) {
    if (a === void 0) { a = []; }
    if (n == i) {
        //@ts-ignore
        a.push(n);
        return a;
    }
    else if (n >= i && n % i == 0) {
        //@ts-ignore
        a.push(i);
        return weDecomposeIntoMultipliers(n / i, a, i);
    }
    else {
        return weDecomposeIntoMultipliers(n, a, i + 1);
    }
}
console.log("Multiplier of the provided number " + factorization + " - " + weDecomposeIntoMultipliers(factorization, a = [], 2).join('*'));
console.log("Multiplier of the provided number " + factorization1 + " - " + weDecomposeIntoMultipliers(factorization1, a = [], 2).join('*'));
// 6. Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8.
var numFib = 10;
var numFib1 = 15;
function calculateTheFibonacciNumber(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return calculateTheFibonacciNumber(n - 1) + calculateTheFibonacciNumber(n - 2);
    }
}
console.log("Finding the index number " + numFib + " Fibonacci number " + calculateTheFibonacciNumber(numFib));
console.log("Finding the index number " + numFib1 + " Fibonacci number " + calculateTheFibonacciNumber(numFib1));
