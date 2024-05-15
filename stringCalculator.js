//Function Add
function add(numbers) {
  if (!numbers) {
    return 0;
  }
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterIndex);
    numbers = numbers.substring(delimiterIndex + 1);
  }
  const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`));
  let sum = 0;
  let negatives = [];

  for (let num of numberArray) {
    num = parseInt(num);
    if (num < 0) {
      negatives.push(num);
    } else {
      sum += num;
    }
  }

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return sum;
}

// Tests Case
function test(input, expected) {
  const result = add(input);
  console.log(`Input: "${input}", Expected: ${expected}, Result: ${result}`);
}

test("", 0);
test("1", 1);
test("1,5", 6);
test("1\n2,3", 6);
test("//;\n1;2", 3);
test("-1,2,-3", "Error: Negative numbers not allowed: -1, -3");
