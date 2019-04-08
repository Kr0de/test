"use strict";

var money = prompt('Ваш бюджет на месяц?');
var time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {};

appData.money = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = '';
appData.income = '';
appData.savings = false;

appData.expenses.question1 = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses.question2 = prompt("Во сколько обойдется?");  


alert((+money - +appData.expenses.question2)/30);