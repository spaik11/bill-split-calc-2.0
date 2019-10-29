
function billSplitCalc(bill, tip, people) {
    if (tip > 0) {
        let withTip = bill + tip * bill / 100;
        return total = withTip / people;
        // console.log(`$${total.toFixed(2)} per person. Thanks for the tip!`);
    } else {
        return total = bill / people;
        // console.log(`$${total.toFixed(2)} per person. See you next time!`);
    }
}