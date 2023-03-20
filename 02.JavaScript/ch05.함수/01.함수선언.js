// 선언적 함수
function add(a, b) {    // a, b - parametrer, argument, 인수
    return a + b;
}
console.log(add(3, 4));
console.log(add(5, 8));

// 익명 함수
const anonymousSum = function (a, b) {
    return a+ b;
}
console.log(anonymousSum(3, 4));
console.log(anonymousSum(5, 8));

// 화살표 함수, 람다 함수
const arrowSum = (a, b) => a + b;
console.log(arrowSum(3, 4));
console.log(arrowSum(5, 8));

