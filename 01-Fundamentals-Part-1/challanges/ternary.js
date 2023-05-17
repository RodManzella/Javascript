// if value is between 50 and 300 (tip 15%). Else tip is 20%

const billValue = 40;

const calculateBill = billValue >= 50 && billValue <= 300 ? billValue *= 1.15: billValue *= 1.2
console.log(calculateBill);