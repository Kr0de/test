"use strict";



let money, time;

function start(){
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    optionalExpenses:{} ,
    savings: true,
    chooseExpenses: function(){
        for(var i = 0; i < 2; i++){ 
            let a = prompt("Введите обязательную статью расходов в этом месяце", '');
            let b = +prompt("Во сколько обойдется?"); 
           if(typeof(a) === "string" && a != '' && b != '' && typeof(b) != null && a.length < 50){
               appData.expenses[a] = b;
           } else {
             i--;  
           }
       } 
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневные выплаты: ' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay <  100){
            console.log("Минимальный уровень достатка");
        }else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        }else if(appData.moneyPerDay >= 2000){
            console.log("Высокий уровень достатка");
        }else{
            console.log("Возникла ошибка в данных!");
        } 
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с ващего депозита: " + appData.monthIncome);
        }  
    },
    chooseOptExpenses: function(){
        for(let i = 1; i < 4; i++){
            appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесёт дополнительный доход?");
        while( typeof(items) != 'string' && items == '' && items == null){
            items = prompt("Что принесёт дополнительный доход?");
        }
            appData.income = items.split(', ');
            appData.income.push( prompt("Может что-то ещё?") );
            appData.income.sort();

            appData.income.forEach(function(item, i, arr){
                i++;
                alert("Способы доп. заработка: " + i + '-' + item);
            })
    }
};

console.log("Наша программа включает в себя данные:");
for( var key in appData){
    console.log(key + ": " + appData[key]);
}







