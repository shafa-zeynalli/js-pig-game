var Number1, Number2, Operator, Result, Answer, True, False;

Number1 = document.getElementById('number1');
Number2 = document.getElementById('number2');
Operator = document.getElementById('operator');
Result = document.getElementById('result');
Answer = document.getElementById('answer');
True = document.getElementById('true');
False = document.getElementById('false');


function RandomNumber(max, min) {
    var number = Math.floor(Math.random() * (max - min) + min);
    return number;
}

function newQuestion() {
    var operation = ['+', '-', '/', '*'];

    Operator.textContent = operation[RandomNumber(0, 4)];
    Number1.textContent = RandomNumber(0, 50);
    Number2.textContent = RandomNumber(0, 50);

    if (Operator.textContent == '/') {
        while (true) {
            Number2.textContent = RandomNumber(0, 50);
            if (Number1.textContent % Number2.textContent == 0) {
                break
            }
        }
    }
}
window.onload = function () { newQuestion() };

Answer.onclick = function () {
    var ans, n1, n2;
    n1 = Number(Number1.textContent);
    n2 = Number(Number2.textContent);

    switch (Operator.textContent) {
        case '+': ans = n1 + n2; break;
        case '-': ans = n1 - n2; break;
        case '/': ans = n1 / n2; break;
        case '*': ans = n1 * n2; break;
        default: break;
    }

    if (result.value == ans) {
        True.textContent = Number(True.textContent) + 1;
    } else {
        False.textContent = Number(False.textContent) + 1;
    }

    newQuestion();
}