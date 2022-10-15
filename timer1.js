//Creating variables to get the input from the command line
const args = process.argv;
const inputArray = args.slice(2);
//Turning the items in the input array from strings to numbers
let input = inputArray.map(item => Number(item));

const alarm = function(input) {
  //loop over each number in the input
  for (const number of input) {
  //Skip if input is not a number
    if (typeof number !== "number") {
      continue;
    }
    //Skip if number is NaN
    if (Number.isNaN(number)) {
      continue;
    }
    //Skip if number is less than zero
    if (number < 0) {
      continue;
    }
    //Setting timeout
    setTimeout(() => {
    //Writing the beep
      process.stdout.write('\x07');
    //multiplying the number by 1000 since it should be milliseconds
    }, number * 1000);
  }
};

alarm(input);