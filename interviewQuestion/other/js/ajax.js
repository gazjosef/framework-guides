// * What is AJAX?

/*
  Ajax (asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly substitute use JSON instead of XML, due to the advantages of JSON being native to JavaScript.

- The XMLHttpRequest API is frequently used for the asynchronous communication or these days, the fetch API.
  */

// * What are the advantages and disadvantages of using Ajax?

// ? Advantages
/*
  Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.
  Reduce connections to the server since scripts and stylesheets only have to be requested once.
  State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.
  Basically most of the advantages of an SPA.
*/

// ! Disadvantages
/*
  Dynamic webpages are harder to bookmark.
  Does not work if JavaScript has been disabled in the browser.
  Some webcrawlers do not execute JavaScript and would not see content that has been loaded by JavaScript.
  Basically most of the disadvantages of an SPA.
*/
