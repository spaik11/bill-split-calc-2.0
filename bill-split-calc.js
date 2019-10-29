
console.log(`The Bill - $${bill}`);

function theTip(bill, tip, people) {
    result = tip * bill / 100;
    
    if (tip > 0) {
        const withTip = bill + tip * bill / 100;
        const total = withTip / people;
        console.log(`$${total.toFixed(2)} per person. Thanks for the tip!`);
    } else {
        const total = bill / people;
        console.log(`$${total.toFixed(2)} per person. See you next time!`);
    }
}