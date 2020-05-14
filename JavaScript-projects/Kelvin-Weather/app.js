// A kelvin variable for today forcast
const kelvin = 293;

// Coverts Kelvin to Celsius
const celsius = kelvin - 273;

//Converts Kelvin to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounds decimal numbers
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(newton)
