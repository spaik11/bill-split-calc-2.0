calc = prompt('Please input the bill, the tip and how many people to split it with.').split(' ')

const bill = Number(calc[0])
const tip = Number(calc[1])
const people = Number(calc[2])


const result = theTip(bill, tip, people)
document.querySelector('h1').innerText = result;
