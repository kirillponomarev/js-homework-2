'use strict'

// TASK 2!!!!



const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let attemptsLeft = 3;

let inputPassword;

let i = 0;

do {
    inputPassword = prompt('Введите пароль...');

    if (!inputPassword) {
        alert('Вход был отменен!');
        break;
    } else if (passwords.includes(inputPassword)) {
        alert('Добро пожаловать!');
        break;
    } else {
        alert(`Попробуйте еще, у вас осталось ${attemptsLeft - 1 - [i]} попыток`);
    }

    i += 1;

} while (i < attemptsLeft);

if (i >= attemptsLeft) {
    alert('У вас закончились попытки! Аккаунт заблокирован!!!')
}