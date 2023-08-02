
// // Задание 1
// // Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// // 1 Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// // 2 Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// // 3 Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
// const purchase = [
//     {
//         name: 'a',
//         count: 10,
//         purchased: true,
//     },
//     {
//         name: 'b',
//         count: 5,
//         purchased: false,
//     },
//     {
//         name: 'c',
//         count: 3,
//         purchased: true,
//     },
//     {
//         name: 'd',
//         count: 1,
//         purchased: false,
//     },
// ];
// const purchasedOl = document.querySelector('.purchase');
// const showPurchaseButton = document.querySelector('.showPurchase');
// const addPurchaseButton = document.querySelector('.addPurchase');
// const setPurchasedButton = document.querySelector('.setPurchased');
// function showPurchase() {
//     if (purchasedOl) {
//         purchasedOl.innerHTML = ``;
//     }
//     for (let el of purchase) {
//         if (!el.purchased) {
//             if (purchasedOl) {
//                 purchasedOl.innerHTML += `<li>${el.name} необходимо купить ${el.count} штук</li>`;
//             }
//         }
//     }
//     for (let el of purchase) {
//         if (el.purchased) {
//             if (purchasedOl) {
//                 purchasedOl.innerHTML += `<li>${el.name} куплено ${el.count} штук</li>`;
//             }
//         }
//     }
// }
// function addPurchase() {
//     const name = prompt('Введите назавание покупки');
//     const count = +prompt('Введите количество');
//     let find = false;
//     for (let el of purchase) {
//         if (el.name == name) {
//             find = true;
//             el.count += count;
//         }
//     }
//     if (!find) {
//         purchase.push({
//             name,
//             count,
//             purchased: false
//         });
//     }
//     showPurchase();
// }
// function setPurchased() {
//     const name = prompt('Введите назавание покупки');
//     for (let el of purchase) {
//         if (el.name == name) {
//             el.purchased = true;
//         }
//     }
//     showPurchase();
// }
// showPurchaseButton?.addEventListener('click', showPurchase);
// addPurchaseButton?.addEventListener('click', addPurchase);
// setPurchasedButton?.addEventListener('click', setPurchased);

// // Задание 3
// // Создать массив css - стилей(цвет, размер шрифта, выравнивание, подчеркивание и т.д.).Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// // Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p> </p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
// const styleRed = [
//     {
//         name: 'color',
//         value: 'red',
//     },
//     {
//         name: 'text-decoration',
//         value: 'underline',
//     },
// ];
// const styleGreen = [
//     {
//         name: 'color',
//         value: 'green',
//     },
//     {
//         name: 'font-size',
//         value: '20px',
//     },
// ];
// const printTextDiv = document.querySelector('.printText');
// function printText(style, text) {
//     let styleStr = '';
//     for (let el of style) {
//         styleStr += `${el.name}:${el.value};`;
//     }
//     if (printTextDiv) {
//         printTextDiv.innerHTML += `<p style=${styleStr}>${text}</p>`;
//     }
// }
// printText(styleRed, 'fsdfsd sdf sdf sdf sg erwtw ');
// printText(styleGreen, 'fsdfsd sdf sdf sdf sg erwtw sdf sdfsdf sdf ');


// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
// 1 Распечатка чека на экран.
// 2 Подсчет общей суммы покупки.
// 3 Получение самой дорогой покупки в чеке.
// 4 Подсчет средней стоимости одного товара в чеке.



// function goods(nameOfGoods, count, price) {
//     this.nameOfGoods = nameOfGoods
//     this.count = count
//     this.price = price
//     this.sum   = this.price * this.count
// }

// let goodsList = [new goods("fresh", 2, 7), new goods("pasta", 1, 15), new goods("pepsi", 3, 3)]

// const goodsListPrint = function() {
//     let total = 0

//     goodsList.forEach((item, index) => 
//     {
//         console.log(`${index + 1}) Name: ${item.nameOfGoods} | Count: ${item.count} | Price: ${item.price} - Sum: ${item.sum}`)
//         total += item.sum
//     })
// }




// const cheque = [
//         {
//             name: 'fresh',
//             count: 10,
//             price: 534,
//         },
//         {
//             name: 'pasta',
//             count: 5,
//             price: 11,
//         },
//         {
//             name: 'pepsi',
//             count: 3,
//             price: 32,
//         },
//     ]

//         function showCheque (arr: any[]) {
//             console.log(arr)
//         }
//         showCheque(cheque)


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

class PrintMaсhine {
  size;
  color;
  family;
  constructor(size = "16px", color = "black", family = "Times New Roman") {
    this.size = size;
    this.color = color;
    this.family = family;
  }
  print(text) {
    document.write(`<p style="font-size:${this.size}; color:${this.color}; font-family:${this.family};">${text}</p>`);
  }

}

let header = new PrintMaсhine("40px", "black", "calibri");
let text = new PrintMaсhine("18px", "#333", "calibri");
let date = new PrintMaсhine("20px", "#dedede", "calibri");
let tags = new PrintMaсhine("16px", "#555", "calibri");

// Задание 2. Реализовать класс, описывающий новость (заголовок, текст,
// массив тегов, дата публикации). В классе необходимо реализовать
// один метод print, который выводит всю информацию в таком
// виде, как на рисунке 1
// Обратите внимание на то, как выводится дата:
// ■ если с даты публикации прошло менее дня, то выводится
// «сегодня»; если с даты публикации прошло менее недели, то выво-
// дится «N дней назад»;
// ■ в остальных случаях, полная дата в формате «дд.мм.гггг».


class infoNews {
  heading;
  text;
  arrayTags;
  date: Date;

  constructor(heading, text, arrayTags, date: string) {
    this.heading = heading;
    this.text = text;
    this.arrayTags = arrayTags;
    this.date = new Date(date);
  }

  getDate() {
    let today = new Date()
    if (this.date.toLocaleDateString() == today.toLocaleDateString()) {
      return 'today'
    } else if (this.date.valueOf() > (today.valueOf() - 1000 * 60 * 60 * 24 * 7)) {
      return ((today.valueOf() - this.date.valueOf()) / (1000 * 60 * 60 * 24)).toFixed(0) + ' days ago'
    } else {
      return this.date.toLocaleDateString()
    }
  }
  print() {
    header.print(this.heading)
    text.print(this.text)
    date.print(this.getDate())
    tags.print(this.arrayTags.join(' '))
  }
}

const post = new infoNews('sdfsdfsd','sdfsdsdf',['sfsd','sdf'],'2023-07-29')
post.print()

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

let text1 = "cdgergrt";
let text2 = "abrtgrthtrwwqweqwe";
let result = text1.localeCompare(text2);
console.log(result)

// 2.Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки.
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("germany"));

// 3.Написать функцию, которая считает количество гласных
// букв в переданной строке.
const vowel_count = string => [...string].filter(c => 'aeiou'.includes(c.toLowerCase())).length;

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
  let lowerStr = str.toLowerCase();

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