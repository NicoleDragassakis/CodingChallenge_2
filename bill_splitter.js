//Task 1 Tip Calculation

let bill = 87.00; //bill amount
let tip = (bill<=300) ? 0.15*bill : 0.20*bill; //when the bill is less than 300, 15% gratituity applies if the bill is greater than 300 20% applies

//Task 2 Output Details

console.log("Bill:", bill); // output Bill: 87.00
console.log("Tip:", tip);  // output Tip: 13.05
console.log("Total Amount:", bill+tip); // output Total amount: 100.05

//Task 3 Create a Function

const calculateTip = function(b) { 
   return (b <= 300) ? 0.15 * b : 0.20 * b; // Calculates tip amount based off b
};
let b = 100.00; //test bill ammount
console.log(calculateTip(b())); //output 15.00

//Task 4 Utilize Arrays

let bills = [275, 40, 430, 125, 555, 44]; //define dataset 1 and 2
let tips = bills.map(calculateTip); // calculate the tip based off the bill from the array
let totals = bills.map((bills, index) => bills+tips[index]); // Sums tips and bills for total amount.

// Task 5 test data

console.log("Bills:" bills); // output 275 40 430 125 555 44
console.log("Tips:", tips); // output 41.25 8 18.75 111 8.8
console.log("Totals:", totals); //output 316.25 48 516 143.75 666 52.8
