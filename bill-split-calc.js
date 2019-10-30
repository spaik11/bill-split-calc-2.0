function billSplitCalc(bill, tip, people) {
    if (tip > 0) {
        let withTip = bill + tip * bill / 100;
        return `$${total = withTip / people} each`;
    } else {
        return `$${total = bill / people} each`;
    }
}