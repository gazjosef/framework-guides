// * ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?

/*
Template literals help make it simple to do string interpolation, or to include variables in a string. Before ES2015, it was common to do something like this:
*/

var person = { name: "Tyler", age: 28 };
console.log(
  "Hi, my name is " + person.name + " and I am " + person.age + " years old!"
);
// 'Hi, my name is Tyler and I am 28 years old!'

/*
With template literals, you can now create that same output like this instead:
*/

const person = { name: "Tyler", age: 28 };
console.log(`Hi, my name is ${person.name} and I am ${person.age} years old!`);
// 'Hi, my name is Tyler and I am 28 years old!'

/*
Note that you use backticks, not quotes, to indicate that you are using a template literal and that you can insert expressions inside the ${} placeholders.
*/

/*
A second helpful use case is in creating multi-line strings. Before ES2015, you could create a multi-line string like this:
*/

console.log("This is line one.\nThis is line two.");
// This is line one.
// This is line two.

/*
Or if you wanted to break it up into multiple lines in your code so you didn't have to scroll to the right in your text editor to read a long string, you could also write it like this:
*/

console.log("This is line one.\n" + "This is line two.");
// This is line one.
// This is line two.

/* 
Template literals, however, preserve whatever spacing you add to them. For example, to create that same multi-line output that we created above, you can simply do:
*/

console.log(`This is line one.
This is line two.`);
// This is line one.
// This is line two.

/*
Another use case of template literals would be to use as a substitute for templating libraries for simple variable interpolations:
*/

const person = { name: "Tyler", age: 28 };
document.body.innerHTML = `
  <div>
    <p>Name: ${person.name}</p>
    <p>Name: ${person.age}</p>
  </div>
`;

/*
Note that your code may be susceptible to XSS by using .innerHTML. Sanitize your data before displaying it if it came from a user!
*/
