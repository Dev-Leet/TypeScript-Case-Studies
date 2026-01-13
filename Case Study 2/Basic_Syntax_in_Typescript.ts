let fav_fruit : string = "Mango";
console.log("My favourite fruit is " + fav_fruit); //This line prints the favourite fruit as Mango

// function to print the double of number
function num_double(num : number) : void {
    console.log("The double of " + num + " is " + (2 * num));
}

num_double(7); 

/* Defining a Class Person 
with a sayHello method */
class Person {
    sayHello() : void {
        console.log("Hello Everyone, This is my second greeting");
    }
}

let person = new Person();
person.sayHello();