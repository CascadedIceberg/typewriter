
//creating a variable with a string to be used by the function
const sentence = "hello there from lighthouse labs";
//defining the value to be used by the setTimeout function
  let delayValue = 150
//iterates over the string and divides it into sepeate elements [abc] => [a, b , c]
for (const char of sentence){
  //settimeout function
  setTimeout(() => {
   //writes out the iterated string variable in a more legible format
    process.stdout.write(char) 
//calls the  delayvalue as a timeout arguement
  },  delayValue)
//increments the delay value after the loop is finished to be reused
  delayValue += 150


}

//fixes the .write function to produce a new line so the console is legible 
setTimeout(() => { 
  console.log('\n')
}, delayValue )