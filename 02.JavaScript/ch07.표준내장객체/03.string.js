// String 객체

let stringFromLiteral = '안녕하세요?';
let stringFromConstructor = new String('안녕하세요?');

// 속성(attribute, property)
// console.log(stringFromLiteral.length);

// 메소드(method)
let str = '안녕하세요?';
// console.log(str[1], str.charAt(1));
// console.log(str.concat(' 여러분!'));    // '안녕하세요?' + ' 여러분!'
// console.log(str.indexOf('하'));

// console.log('pineapple'.lastIndexOf('p'));

// 정규 표현식 (Regular Expression)
const sample = 'ㅠㅠA quick brown fox 갈색의 재빠른 여우가 Jumps over the lazy dog. 게으른 개를 ㅋㅋ';

let newStr = sample.replace('A', 'a');
// console.log(newStr);

newStr = sample.replace(/[A-Z]/, '대');     // 한개만 바꿈
// console.log(newStr);
newStr = sample.replace(/[A-Z]/g, '대');    // 모두 바꿈
// console.log(newStr);

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
// console.log(newStr);
// 한글과 공백만 남기고 모두 제거
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g, '');
// console.log(newStr);

// 문자열을 분리하여 배열을 반환
let fruitString = '사과,배,감,포도';
let fruitArray = fruitString.split(',');
// console.log(fruitArray);

// 문자열 일부분
const today = new Date().toISOString();
console.log(today);     // 2023-03-20T06:52:00.474Z
console.log(today.substring(0, 10));    // 날짜 추출: 2023-03-20
console.log(today.substring(11, 19));   // 시간 추출: 06:52:00
console.log(new Date().getHours());

// YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDatetime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} ` +
        `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}

let now = myDatetime();
console.log(now);       // 2023-03-20 16:09:15
console.log(now.substring(2));      // 23-03-20 16:09:15, 두번째 인수를 생략하면 맨 끝까지

console.log('  hello  '.trim());    // 양 끝의 공백을 없애줌

console.log('33'.split('3').length);        // [ '', '', '' ]
console.log('13131'.split('3').length);     // [ '1', '1', '1' ]