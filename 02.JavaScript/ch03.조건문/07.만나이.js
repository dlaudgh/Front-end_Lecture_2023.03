// 생일 - 오늘 현재 만나이 계산
const bYear = 2000, bMonth = 3, bDay = 10;
const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1;
const tDay = today.getDate();
console.log(tYear, tMonth, tDay);

// tMonth > bMonth -> age : tYear - bYear
// tMonth < bMonth -> age : tYear - bYear -1
// tMonth == bMonth, tDay >= bDay -> age : tYear - bYear
// tMonth == bMonth, tDay < bDay -> age : tYear - bYear -1

let age;
if (tMonth > bMonth)
    age = tYear - bYear;
else if (tMonth < bMonth)
    age = tYear - bYear -1;
else {
    if (tDay >= bDay)
        age =  tYear - bYear;
    else
        age = tYear - bYear -1;
}
console.log(age);