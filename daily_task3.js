 // Functions without Parameters
 function greet(){
    console.log("Hello, World")
}
greet()
// Functions with Parameters
function add_Num(a,b){
    console.log(a+b)
}
add_num(10,50)
// Functions with Return Statements
function multiply(x,y){
   let result = x*y;
    return result;

}
console.log(multiply(10,4))
// Combining Functions
function calculateRectangleArea(length,width){
return multiply(length,width)
}
console.log(calculateRectangleArea(10,30))
// Default Parameters
function greetUser(name){
console.log("hello,",name)
}
greetUser()
function greetUser(name){
console.log("hello,",name)
}
greetUser("surya")