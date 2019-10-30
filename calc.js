calc = prompt('Please input the bill, the tip % (even if its 0) and how many people to split it with.').split(' ')

let bill = Number(calc[0])
let tip = Number(calc[1])
let people = Number(calc[2])

const result = billSplitCalc(bill, tip, people)
document.querySelector('h1').innerText = result;
