// #1
let txt1 = document.querySelector('#id1');
let id1 = document.querySelector('#txt1');
txt1.addEventListener('blur', function() { 
  let txt2 = txt1.value;
  id1.textContent += ' ' + txt2;
  console.log(id1.textContent);
});


// #2
let id2 = document.querySelector('#id2');
let id3 = document.querySelector('#id3');
let id4 = document.querySelector('#id4');
let txt2 = document.querySelector('#txt2');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
    let sum = Number(id2.value) + Number(id3.value) + Number(id4.value);
    txt2.textContent = "Сумма: " + sum;
});


// #3
let id5 = document.querySelector('#id5');
let txt3 = document.querySelector('#txt3');
id5.addEventListener('blur', function(){
    let number1 = id5.value;
    let sum = 0;
    for (let i = 0; i < number1.length; i++) {
        sum += parseInt(number1.charAt(i));
    }
    txt3.textContent = "Сумма цифр: " + sum;
});

//#4
let id6 = document.querySelector('#id6');
let txt4 = document.querySelector('#txt4');
id6.addEventListener('blur', function(){
    let number2 = id6.value.split(",");
    let sum = 0;
    for (let i = 0; i < number2.length; i++) {
        sum += parseInt(number2[i]);
    }
    let itog = sum / number2.length;
    txt4.textContent = "Среднее арифметическое: " + itog;
})

//5
let id7 = document.querySelector('#id7');
let id8 = document.querySelector('#id8');
let id9 = document.querySelector('#id9');
let id10 = document.querySelector('#id10');
id7.addEventListener('blur', function(){
    let number4 = id7.value.split(" ");
        id8.value = number4[0];
        id9.value = number4[1];
        id10.value = number4[2];
    }
);

//6
let id11 = document.querySelector('#id11');
id11.addEventListener("blur", function() {
    let znach1 = id11.value;
    let words = znach1.split(" ");
    let itog2 = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
    id11.value = itog2;
});

//7
// let id12 = document.querySelector('id12');
// let txt5 = document.querySelector('txt5');
// id12.addEventListener("blur", function() {
//     let zhach2 = id12.value;
//     let words = zhach2.split(" ");
//     words = words.filter(function(word) {
//         return word !== "";
//     });
//     let count = words.length;
//     txt5.textContent = "Количество слов: " + count;
// });


//8
// let id13 = document.querySelector('id13');
// id13.addEventListener("blur", function() {
//     let date = id13.value;
//     let part = date.split(".");
//     let datta = part[2] + "-" + part[1] + "-" + part[0];
//     id13.value = datta;
// });

//9
let id14 = document.querySelector('#id14');
let button2 = document.querySelector('#button2');
let result = document.querySelector('#result');
button2.addEventListener("click", function() {
    let word = id14.value.toLowerCase();
    if (word === word.split("").reverse().join("")) {
        result.textContent = "палиндром";
    } else {
        result.textContent = "не палиндром";
    }
});

//10
let id15 = document.querySelector('#id15');
let itog1 = document.querySelector('#tog1');
id15.addEventListener("blur", function() {
    let number = id15.value;
    if (number.includes("3")) {
        itog1.textContent = "Число содержит цифру 3";
    } else {
        itog1.textContent = "Число не содержит цифру 3";
    }
});

// 11
let txt6 = document.getElementsByTagName("p");
let button3 = document.querySelector('#button3');
button3.addEventListener("click", function() {
    for (let i = 0; i < txt6.length; i++) {
        txt6[i].textContent += " " + (i + 1);
    }
});

// 12
let links = document.getElementsByTagName("a");
let button5 = document.querySelector('#button5');
button5.addEventListener("click", function() {
    for (let i = 0; i < links.length; i++) {
        links[i].textContent += " (" + links[i].href + ")";
    }
});

// 13
let links1 = document.getElementsByTagName("a");
let button6 = document.querySelector('#button6');
button6.addEventListener("click", function() {
    for (let i = 0; i < links1.length; i++) {
        if (links1[i].href.startsWith("http://")) {
            links1[i].textContent += " →";
        }
    }
});

//14
let id16 = document.querySelector("#id16");
let id17 = document.querySelector("#id17");
let id18 = document.querySelector("#id18");
let button7 = document.querySelector('#button7');
id16.addEventListener("click", function() {
    let square = parseInt(id16.textContent) ** 2;
    id16.textContent = square;
});
id17.addEventListener("click", function() {
    let square = parseInt(id17.textContent) ** 2;
    id17.textContent = square;
});
id18.addEventListener("click", function() {
    let square = parseInt(id18.textContent) ** 2;
    id18.textContent = square;
});

//15
let id19 = document.querySelector('#id19');
let result12 = document.querySelector('#result12');
id19.addEventListener("blur", function() {
    let date = id19.value;
    let dayOfWeek = getDayOfWeek(date);
    result12.textContent = dayOfWeek;
});
function getDayOfWeek(dateString) {
    let dateParts = dateString.split(".");
    let day = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]) - 1;
    let year = parseInt(dateParts[2]);
    let date = new Date(year, month, day);
    let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return daysOfWeek[date.getDay()];
}

//16
let id21 = document.querySelector('#id21');
let butt = document.querySelector('#butt');
let but = document.querySelector('#but');
butt.addEventListener("click", function() {
    let currentValue = parseInt(id21.value);
    id21.value = currentValue + 1;
});
but.addEventListener("click", function() {
    let currentValue = parseInt(id21.value);
    if (currentValue > 0) {
        id21.value = currentValue - 1;
    }
});

//17
let id20 = document.querySelector('#id20');
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function() {
        let currentValue = parseInt(id20.value);
        id20.value = currentValue + 1;
    });
}

//18
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    let div = divs[i];
    let text = div.innerHTML;
    if (text.length > 10) {
        text = text.substring(0, 10) + "...";
    }
    div.innerHTML = text;
}

//19
function generateRandomString1() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    document.querySelector('#id24').value = randomString;
}

//20
function RandomString() {
    let input = document.querySelector('#randomStringInput');
    let string = input.value;
    let shuffledString = shuffleString(string);
input.value = shuffledString;
}
function shuffleString(string) {
    let characters = string.split("");
    for (let i = characters.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = characters[i];
        characters[i] = characters[randomIndex];
        characters[randomIndex] = temp;
    }
    return characters.join("");
}

//21
function convertToFahrenheit() {
    let id234 = document.querySelector('#id234');
    let celsiusResult = document.querySelector('#result13');
    let fahrenheit = parseFloat(id234.value);
    let celsius = (fahrenheit - 32) * 5/9;
    celsiusResult.textContent = "Temperature in Celsius: " + celsius.toFixed(2);
}

//22
function calculateFactorial() {
    let numberInput = document.querySelector('#numberInput');
    let result16 = document.querySelector('#result16');
    let number = parseInt(numberInput.value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    result16.textContent = "Factorial: " + factorial;
}

//23
function calculateRoots() {
    let inputA = document.querySelector('#inputA');
    let inputB = document.querySelector('#inputB');
    let inputC = document.querySelector('#inputC');
    let res18 = document.querySelector('#res18');
    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    let c = parseInt(inputC.value);
    let discriminant = Math.pow(b, 2) - (4 * a * c);
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.textContent = "Roots: " + root1 + ", " + root2;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        res18.textContent = "Root: " + root;
    } else {
        res18.textContent = "No real roots";
    }
}