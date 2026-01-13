var printAnswer : any[] = []; //object to store answers

// function to record answers
function recordAnswer(q_id: number, answer : any): void {
    printAnswer.push({question_id: q_id, answer: answer});
}

recordAnswer(1, "This is my first answer"); //string type 
recordAnswer(2, 100); //number type
recordAnswer(3, [0, 1, 1, 2, 3, 5, 8]); //array type

//print the recorded answers 
for (let index of printAnswer) {
    console.log(`Answer of Question ID: ${index.question_id} :- ${index.answer}`); 
}