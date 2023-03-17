// 2739
let prod = 0;
for (let i = 1; i <= 9; i++) {
    prod = i * 2
console.log(`2 * ${i} = ${prod}`)
}

// 2884
let h = 23, m = 59;
console.log(`${h} ${m}`);

if (h > 0 && h <=23 && h != 0 && m >= 0 && m < 45)
    (h1 = h -1, m1 = 60 - (45 - m));
    else if (h == 0 &&  m >= 0 && m < 45)
    (h1 = 23, m1 = 60 - (45 - m));
    else if (h >= 0 && h <=23 && m < 60 &&m >= 45)
        (h1 = h, m1 = m - 45)
    else
        (h1 = '에러', m1 = '에러')
console.log(`${h1} ${m1}`);

// 2480
let dice1 = parseInt(Math.ceil(Math.random() * 6));
let dice2 = parseInt(Math.ceil(Math.random() * 6));
let dice3 = parseInt(Math.ceil(Math.random() * 6));
console.log(`${dice1} ${dice2} ${dice3}`);

if (dice1 == dice2 && dice2 == dice3 && dice3 == dice1)
    money = 10000 + dice1 * 1000;
    else if (dice1 == dice2)
        money = 1000 + dice1 * 100;
    else if (dice2 == dice3)
        money = 1000 + dice2 * 100;
    else if (dice3 == dice1)
        money = 1000 + dice3 * 100;
    else
        money = Math.max(dice1, Math.max(dice2, dice3)) * 100;

console.log(money);
