const addTraditoinal = function (a, b) {
  return a + b;
};

const add = (a, b) => a + b;

console.log(add(1, 2));

const ids = [1, 2, 3, 4, 5, 6];
ids.forEach((id) => {
  id++;
  console.log(id);
});

function test(firstArgument, ...otherArguments) {
  console.log(firstArgument);
  console.log(otherArguments);
}

test("peter", "Max", "Claudia", "Mitch");

const fruits = ["apple", "banna"];
const newState = [...fruits, "cherry"];

console.log(newState);
