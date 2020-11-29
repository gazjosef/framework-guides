/*
let i = 1;

const f = () => {
  console.log(i);
};

f();
*/

/*
if (true) {
  let i = 1;

  const f = () => {
    console.log(i);
  };
}
*/

/*
let f;

if (true) {
  let i = 1;

  f = () => {
    console.log(i);
  };
}

console.dir(f);
f();
*/

/*
let f = () => {
  let i = 1;
  let j = 2;
  return () => {
    console.log(i);
  };
};

console.dir(f());
*/

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

console.log("After the loop");
