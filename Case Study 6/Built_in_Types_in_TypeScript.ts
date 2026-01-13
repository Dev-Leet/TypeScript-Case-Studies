function AmountError() : never {
    throw new Error("Amount entered is negative");
}

function processTransaction(amount: number, isCredit : boolean, description? : string) : void {
    if (amount <= 0) {
        AmountError();
    }
    else {
        if (description === undefined) {
            console.log(`Processing Transaction :- No Description, Amount: ${amount}, Credit: ${isCredit}`);
        }
        else {
            console.log(`Processing transaction :- ${description}, Amount: ${amount}, Credit: ${isCredit}`);
        }
    }
}

//Test cases
try {
    processTransaction(-10, false, "Last Transaction");
} catch (error) {
    console.error((error as Error).message);
}

processTransaction(1000, true, "First Transaction");
processTransaction(100, false, undefined); 