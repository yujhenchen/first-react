// function Hello(){
//     return <h1>Hello World!</h1>
// }

/* 
Using ES6 Syntax
 */
const name = "myName";
const displayMessage = () => {
  return "There is a cat";
};
const Hello = () => (
  <h1>
    Hello World! {name}. The message is: {displayMessage()}
  </h1>
);

export default Hello;
