/*
swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
  });

  */

/*
  var spec = prompt("Your Name is", "");

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
*/
/*
  let num1 = prompt("Enter the first number:"); let num2 = prompt("Enter the second number:"); let operator = prompt("Enter an operator (+, -, *, /):"); num1 = parseFloat(num1); num2 = parseFloat(num2); let result; if (operator === "+") { result = num1 + num2; } else if (operator === "-") { result = num1 - num2; } else if (operator === "*") { result = num1 * num2; } else if (operator === "/") { result = num1 / num2; } else { console.log("Invalid operator"); } document.write("Result: " + result);
*/
  
//--------------sort a number------
//--------------without method-----
/*
var numarr = [2,5,6,4,9,1];

for (let i = 0; i < numarr.length - 1; i++){
  for(let j = 0; j < numarr.length - i; - 1; j++) {
    if (numarr[j] > numarr[j + 1]) {
      var temp = numarr[j];
      numarr[j] = numarr[j+1];
      numarr[j +1] =temp;

    }
  }
}
console.log(numarr);
*/

  
//--------------sort a number------
//--------------with method-----

/*
var numarr = [2,5,6,4,9,1];
numarr.sort()
console.log(numarr);
*/


//---------find a small number-------
//---------use a method-------------
/*
var snf = [2,4,6,3,7,9,1]
var small_Number =[] 
small_Number = Math.min(snf[0])
console.log(snf)
*/


//---------find a small number-------
//---------don't use a method-------------
/*var arr= [1,5,6,7,9,4,8,2]
smallest =[];
smallest=arr[0];
for(var i =0;i<arr.length;i++){
  if(i[0]<smallest){
    smallest=arr
  }
}
console.log("The smallest number in the array is",smallest)
*/


//---------find a big number-------
//---------use a method-------------

/*var findnum =[1,5,3,6,4,9,8,7]
var largenum=[];
largenum=math.max(findnum.length)
console.log(largenum);*/

//---------don't use a method-------------
/*var seriesnumarray =[2,5,6,3,4,9,1,7]
var largestnum =[];
var largestnum=seriesnumarray[0];
for(var i =1;i<seriesnumarray.length; i++){
  if(seriesnumarray[i]>largestnum){
    largestnum = seriesnumarray[i];
  }
}
console.log(largestnum);
*/