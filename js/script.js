//Creo ciclo 
for (let i = 1; i <=100; i++) {
    
    //Stampo la condizione dei multipli di 3 e 5 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

        //Condizione dei multipli di 5
    } else if (i % 5 === 0) {
        console.log("Buzz");

        //Condizione dei multipli di 3
    } else if ( i % 3 === 0) {
        console.log("Fizz");

        // Ciclo normale
    } else {
        console.log(i);
    }
}
