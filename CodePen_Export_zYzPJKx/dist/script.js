//1

let people = ["Greg", "Mary", "Devon", "James"];

for (let i=0; i<people; i++) {
  console.log(people[i])
}

//2

people.shift();

//3

people.pop();

//4

people.unshift("Matt");

//5

people.push("Oreofe");

//6
for (let i=0; i< people.length; i++){
  if(i > 1){
    break;
  }
  console.log(people[i]);
}

//7.
let copy = people.slice(0,2);

//8
people.indexOf("Mary");

//9
people.indexOf("Foo");

//10
people.splice(2, 1, "Elizabeth", "Artie");

//11
let withBob = people.concat("Bob");