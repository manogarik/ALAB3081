// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log("The four numbers are valid according to the provided criteria  - " + isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  //Checking if all numbers is divisible by 5

  const divby5 = (n1%5) + (n2%5) + (n3%5) + (n4%5) == 0;
  console.log("Checking if all numbers is divisible by 5  - " + divby5);

  //Checking if first number is larger than last

  const checkFirstLast = n1 > n4 ;
  console.log("Checking if the first number is larger than the last number -  " + checkFirstLast);

  //Arithmetic chain

  let calculate = n2 - n1;
  calculate *= n3;
  calculate %= n4;

  console.log("The reminder after performing the arithmetic chain  - " + calculate);


  //PART2

  const distance = 1500 ; 
  const mph1 = 55 ;
  const mph2 = 60;
  const mph3 = 75;
  const gallonsat55 = 30;
  const gallonsat60 = 28;
  const gallonsat75 = 23;
  const galloncost = 3;
 
  //Gallons needed for the entire trip 

   const totalgallonsat55 = distance/gallonsat55 ;
   console.log("Gallons needed for the entire trip when travelling at 55mph " +  totalgallonsat55 ) ;
   const totalgallonsat60 = distance/gallonsat60  ;
   console.log("Gallons needed for the entire trip when travelling at 55mph " + totalgallonsat60 );
   const totalgallonsat75 = distance/gallonsat75 ;
   console.log("Gallons needed for the entire trip when travelling at 55mph " + totalgallonsat75 );
  
   //calculating the total cost for the entire trip

   const Totalcostat55 = totalgallonsat55 * galloncost ;
   console.log("Total gallon cost for the entire trip when travelling at 55mph is $ " + Totalcostat55 );
   const Totalcostat60 = totalgallonsat60 * galloncost ;
   console.log("Total gallon cost for the entire trip when travelling at 60mph  is $ " + Totalcostat60 );
   
   const Totalcostat75 = totalgallonsat75 * galloncost ;
   console.log("Total gallon cost for the entire trip when travelling at 75mph is $ " + Totalcostat75 );

   //checking if the budget will cover the total cost;

   console.log("Checking if the budget will cover the fuel expense at 55mph " + (Totalcostat55 <= 175));
   console.log("Checking if the budget will cover the fuel expense at 60mph " + (Totalcostat60 <= 175));
   console.log("Checking if the budget will cover the fuel expense at 75mph " + (Totalcostat75 <= 175));

   //Total time taken in hours

   console.log("Total time taken when travelling at 55mph " + distance/55);
   console.log("Total time taken when travelling at 55mph " + distance/60);
   console.log("Total time taken when travelling at 55mph " + distance/75);

   console.log("As a result, we see that travelling at 55mph makes the most sense for the trip");

   