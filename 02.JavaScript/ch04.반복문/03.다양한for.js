// 역 for 반복문
let sum = 0;
for (let i = 10; i > 0; i--) {
    sum += i;
// console.log(`index=${i}, sum=${sum}`);
}

// 1에서 10까지 홀수의 합
let oddSum = 0;
for (let i = 1; i <= 10; i += 2) {
    oddSum += i
console.log(`index=${i}, sum=${oddSum}`);
}

// 48에서 10까지 3의 배수의 합
let sum3 = 0;
for (let i = 48; i >= 10; i -= 3) {
    sum3 += i;
// console.log(`index=${i}, sum=${sum3}`);
}

