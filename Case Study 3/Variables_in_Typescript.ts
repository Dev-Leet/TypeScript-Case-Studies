var city : string = "Varanasi"; //This is my favorite city
var temperature : number = 32;
var isRaining = true; //Type inferred as boolean

function weatherReport() : void {
    console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`);
}

weatherReport(); //Funciton call
