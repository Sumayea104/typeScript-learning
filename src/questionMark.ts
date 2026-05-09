// ? : ternary operator : if else er moto kaj kore but onekta short way te kora jay. decision making er jonno use kora hoy. condition true hole first value return kore, false hole second value return kore.
// ?? : nullish coalescing operator : jodi kono value null ba undefined hoy tahole default value return kore. jodi value null ba undefined na hoy tahole oi value return kore. 
// ?. : optional chaining operator : jodi kono object er property access korte chai kintu oi property undefined ba null hoy tahole error throw kore. optional chaining operator use kore amra ei problem ta solve korte pari. jodi property undefined ba null hoy tahole undefined return kore, jodi property exist kore tahole oi property er value return kore.

//ternary operator
const age: number = 18;

const isAdult: string = age >= 18 ? "Yes, you are an adult." : "No, you are not an adult.";
// console.log(isAdult);

//const userAge = 21

const biyerJonnoEligible = (age: number) => {
    if (age >= 18) {
        console.log("Yes, you are eligible for marriage.");
    } else {
        console.log("No, you are not eligible for marriage.");
    }   
};

biyerJonnoEligible(19); 