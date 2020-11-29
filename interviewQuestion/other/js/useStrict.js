// Stack Overflow
/*
Its main purpose is to do more checking.

Just add "use strict"; at the top of your code, before anything else.

For example, blah = 33; is valid JavaScript. It means you create a completely global variable blah.

But in strict mode its an error because you did not use the keyword "var" to declare the variable.

Most of the time you don't mean to create global variables in the middle of some arbitrary scope, so most of the time that blah = 33 is written it is an error and the programmer didn't actually want it to be a global variable, they meant to write var blah = 33.

It similarly disallows a lot of things that are technically valid to do. NaN = "lol" does not produce an error. It also doesn't change the value of NaN. using strict this (and similar weird statements) produce errors. Most people appreciate this because there is no reason to ever write NaN = "lol", so there was most likely a typo.

*/

/*

'use strict' is a statement used to enable strict mode to entire scripts or individual functions. Strict mode is a way to opt into a restricted variant of JavaScript.*/

// Advantages

/* 
Makes it impossible to accidentally create global variables.
Makes assignments which would otherwise silently fail to throw an exception.
Makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect).
Requires that function parameter names be unique.
this is undefined in the global context.
It catches some common coding bloopers, throwing exceptions.
It disables features that are confusing or poorly thought out.
*/

/* 
Many missing features that some developers might be used to.
No more access to function.caller and function.arguments.
Concatenation of scripts written in different strict modes might cause issues.
*/
