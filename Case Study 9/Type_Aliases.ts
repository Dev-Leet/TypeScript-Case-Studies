type CustomerID = string;  //string alias

type Customer = {           //object alias
    id : CustomerID;
    name : string;
    email ?: string;
}

type OrderStatus = 'pending' | 'shipped' | 'returned'; //union alias

type OrderCallback = (status: OrderStatus) => void; //function alias
const processOrder : OrderCallback = status => {
    console.log(`Order is now ${status}`);
};

type Container<T> = {   //Generic alias
    value : T;
    timestamp : Date;
}

let customer : Customer = {
    id : "bce101",
    name : "xyz",
    email : "xyz@gmail.com"
}

processOrder("pending");

let customerContainer : Container<Customer> = {
    value : customer,
    timestamp : new Date()
};

console.log(customerContainer);