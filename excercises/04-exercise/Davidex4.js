// Age Checker
let age = 20;

if (age >= 18) {
  console.log("You are old enough to vote.");
} else {
  console.log("You are not old enough to vote.");
}


// Grade Calculator
let score = 87;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Countdown Timer 
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

console.log("Blast off!");


// Loop Through Names
let names = ["Alice", "Bob", "Charlie", "Dana"];

for (let name of names) {
  console.log("Hello, " + name + "!");
}


// Even or Odd
for (let i = 1; i <= 10; i++) {
  
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }

}
