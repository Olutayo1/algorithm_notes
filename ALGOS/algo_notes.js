INTRODUCTION TO ALGORITHM

what you need?? be a bit grounded in javascript.

before we begin it might seem hard
because it is hard have a pen and paper and trace the execution of code with a sample input.

what is an ALGORITHM??
An Algorithm is a set of well-defined intruction to solving a particular problem.
for example 
using an ingredient => recicpe = tasty dish

using ans ingredient follow the step by step to get or arrive at a delicious meal.


ingredient
noodle
pot
table
gas
water

recipe
boil water
pour water inside the cup 
add spicies
close pot and wait for 5min.

then you have your tasty noodle..
in programming
Algorithm to add two numbers
inputs => Agorithm => Output

inputs
two numbers( 'a' and 'b')

algorithm
1.Add numbers using '+'
2. return a value

the Output 
sum of 'a' and 'b'

now we have a set of well defined instruction to solve a particular problem.

PART ONE IS UP. (edited)
[4:10 PM]
CHARACTERISTICS OF ALGORITHM
1.well defined inputs and outputs
2.Each step should be clear and unambiguous
3.language independent

why should you learn algorithm??
as a developer, you are going to come across problem you need to solve.
learning algorithm translate to learning different techniques to solving those problem

one problem can be solved in many ways using different algorithms.

Analysis of ALGORITHM
there are multiple ways to solve one problem 
example: There are multiple ways to sort a list of numbers

How can we analyse which one of them is the most efficient Algorithm
Generally, when we talk about performance, we use an absolute measure
if i can run 100 meters in 12 seconds, im faster than someone who takes 15 seconds.
>> the absolute running time of an algorithm cannot be predicted, since it depends on a number of factors
- It can change 
due to the programming language used to implement the algorithm
due to the computer the program runs on
due to other programs running at the same time
due to the quality of the operation system and many other factors.
[4:12 PM]
now we evaluate the performance of an algorithm in terms of the input size
the evaluation is two types
1. time complexity-Amount of time taken by an algorithm to run, as a function of input size
2. Space complexity- amount of memory taken by an algorithm to run, as a function of input size

by evaluating against the input size, the Analysisis not only machine independent but comparison is also more approprate.

keep in mind there is no one solution that works best every single time.

it is always good to know that there are multiple ways to solve the problem and use the best solution, given the constrains
if your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity

if you have a very little memory to work with, you should pick a solution that is relatively slower but needs less space.

How do we represent the complexity?( the time and space complexity)

CWB — 12/01/2022 4:18 PM
we us Asymptotic notation
(Mathematical tools to represent time and space complexity)

1. big-0 Notation-( worst case complexity)
2. Omega Notation-(best case complexity)
3.Theta Notation (Average case complexity)

our focus is 1.
[4:18 PM]
Objects - Big-O
an object is a collection of key value pair 

const person = {
    firstName: "John",
    lastName: "Doe"
}

insert - O(1)
Remove - O(1)
access - O(1)

to search-O(n) for an object the linear time complexity
Object.keys()-O(n)
Object.values()-O(n)
Object.entries()-O(n)
all linear time complexities
[4:19 PM]
Array
an array is an ordered collection of values
const odd = [1, 3, 5, 7, 9]

starts from index 0 increment by 1

if you insert/remove from the end of the array -O(1)
if you insert/remove at beginning -O(n)
this is because the index has to be reset for every element remaining in the array

access - O(1)
Search- O(n)

Push/ pop - O(1)
Shift/ unshift /concat/ slice/ splice - O(n)

forEach/map/filter/reduce- o(n).
[4:19 PM]
Efi sara>>>>>
[4:22 PM]
bigO notation.
the worst case complexty of an algorithm is represented using the Big-O notation
Big-O notation describes the complexity of an algorithm using algebraic
the big O notation has 2 characteristics
1. it is expressed interms of the inputs.
2.it focuses on the bigger picture without getting caught in the minute details.

lets understand the 2 point under the concept of time complexity and extend the knowledge to understand space complexity.

now lets calculate the worst time complexty of our program
because the algorithm has already been implemented using javascript language

the algorith is to find the sum of a natural number n
function summation(n)// n=4{
  let sum = 0;  // execute 1 time
  for (let i = 1; i <= n; i++) {
    sum += i // execute 4 times
}
return sum   // execute 1 time
}

Example summation(4) = 10
1 + 2 + 3 + 4 = 10
[4:22 PM]
console.log(summation(4))
[4:23 PM]
we cannot calculate the absolute running time so that cannot be the time complexity
 what we do instead is count the number of time a statement execute based on the input size.

 complexity n+2

 all the count + 2 big-O is expressed in terms of input!
 n = 100  100 + 2
 n = 1000  1000 + 2
 n = 10000 10000 + 2



 time complexity
O(n)- linear
means at the input increases the time complexity also increases

whenever you see a loop you can atleast say your time complexity is at 
least linear. ofcourse there are exception

function summation(n) {
  return(n * (n + 1))/ 2;
}

line 0ne will tell us what the value of n is and line 2 executes only once.
time complexity ) O(1)- constant

for example if there are 2 nested loop like this
for (let i = 1; i <+ n; i++) {
  for(j = 1; j => i; j++) {

  }
}

you should know the time complexity is 
O(n²)- Quadratic
3n² + 5n + 1

if there are 3 nested loop it is cubic
O(n)
[4:29 PM]
___SPACE complexity
O(1)-Constant
O(n) linear
O(logn)- logarithmic it grows but not at the same rate as the input size.



>>>>>>>>>> FIBONACCI SEQUENCE
problem _ Given a number 'n', find the 'n' element of the Fibonacci sequence.

what is fibonacci sequence?? in mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

The first two numbers in the sequence are 0 and 1.
fibonacci[2] = [0,1]
fibonacci[3] = [0,1,1]
fibonacci[7] = [0,1,1,2,3,5,8]

In other words, to get the next term in the sequence, add the two previous terms.

{1,1,2,3,5,8,13,21,34,55,55+34=89,89+55=144,⋯}

lets start by definning the function signature
the function will have one parameter which denote how many number in the sequence we have to display.
for example calling the function with 
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))

it will return an array of fibonacci sequence with the same length.

what do we know about the sequence? we know that the first two numbers are 0 and 1

now lets create a constant called fib = [0, 1] initialised to 0 and 1.

so what do you know about the sequence, the sum of the previous two is the next number
const fib = [0, 1]

now we need to populate the remaining element from the third element till n while satisfying the condition that every number should be the sum of the two number.
to populate the element we use for loop and we initialised to 2. since we already have an element of 0 and 1 and we itirate have n element in the array

so for(let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
}
this for loop populate the array with the required sequence
once the for loop exit we return the array

function fibonacci(n) {
  const fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

bigO = O(n)
as the number increases the times line 235 will run will also increases

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1] // this is because the sum of previous two number is the sum.
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

this is pretty much the implementation of fibonacci in javascript




FACTOR OF A NUMBER
problem statement: given an integer 'n', find the factorial of that integer
in mathematics, the factorial of a non-negative integer 'n', denoted n! is the product of all positive integers less than or equal to 'n'
Factorial of zero is 1.
factorial(4) = 4321 = 24
factorial(5) = 54321 = 120

we pass in a parameter (n) which represents the integer for which we need to calculate the factorial number. what we we know about factorial??
we know the factorial of 0 is 1, and 1 is 1
now lets create a variable called result and initialised to 1.

next if n is greater than 1 we need to find the product of all the numbers less than or equal to n. for that we use a for loop that starts at 2 since multiplying by 1 has not effect. in each iteration we multiply the current result with i.

result = result i
upon the for loop exit we return the result

function factorial(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

console.log(factorial(0)) // 1;
console.log(factorial(1)) // 1;
console.log(factorial(5)) // 120;

bigO = O(n)
as the number increases the times line 235 will run will also increases!
>>>>>>>>>>PRIME NUMBER
:lets test for prime number
problem - Give a natural number 'n', determine if the number is prime or not.

what is a prime number? a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

isPrime(5) = true (1 * 5 or 5 * 1)
isPrime(4) = false (2*2 or 2 + 2)

lets begin by defining the function signature
it will have 0ne parameter (n) which is the natural number for which we will run the primality test.
what do we know as prime number ?
we know it is a natural number greater than 1
lets start by defining an if statement
if(n < 2) {
  return false
}

then we use a for loop
for(let i = 2; i < n; i++) {
  if (n%i===0){
    return false // if it can be divided then its not a prime number return false
  }
}
return true // if it has gone true the loop and nothing changes

run it.

function isPrime(n) {
if(n < 2) {
    return false
  }
  for( i = 2; i < n; i++) {
    if (n%i===0){
      return false
    }
    return true
  }
}
// console.log(isPrime(5))
// console.log(isPrime(4))
// console.log(isPrime(100))
// >>>>>>>>POWER OF TWO
// problem: Given a positive integer 'n', determine if the number is a power of 2 or not.
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2x

// >>>>>>>>POWER OF TWO
// problem: Given a positive integer 'n', determine if the number is a power of 2 or not.
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2x

// n = 8;
// what we are going to do is repeatedly divide 8 by 2

// we will have 
// 8/2 = 4 (remainder 0)
// 4/2 = 2 (remainder 0)
// 2/2 = 1 (remainder 0)
// AT each step we check if the remainder is 0

// function isPowerOfTwo(n) {
//   if(n < 1) {
//     return false
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false
//     }
//     n = n / 2
//   }
//   return true
// }

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(16))
// console.log(isPowerOfTwo(3))
// console.log(isPowerOfTwo(10))

// function isPowerOfTwoBitWise(n) {
//   if (n < 1) {
//     return false
//   }
//   return (n & (n - 1)) === 0
// }

// console.log(isPowerOfTwoBitWise(1))
// console.log(isPowerOfTwoBitWise(16))

// .........................
// // a  picture : recursive_pattern.png
// ..........................

>>>>>>>>>>>>>>>>>>>>>>RECURSION
what? Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem.

if we want to get abit more technical we can say Recursion is when a function calls itself.

why do we need this technique?
1)it is a great technique to simplify your solution.
if you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful.

analogy: you go to your local school and askyour principal how many number of student are in his school
then is said the number of student will be determined by how many student is thought by professor A and Professor B
in the same way if the professor A is ask how many students do they have the can say that will be determined by Teacher A and Teacher B. professor B then say his own will be determined by Teacher C and Teacher D
this is the lowest level by which the problem can be broken down

                       PRINCIPAL
                       200

         PROFESSOR A              PROFESSOR B
              100                     100

  TEACHER A    TEACHER B         TEACHER C    TEACHER D
  50            50                  55            45

  the teacher report back to the professors and the professors report back to the principal. the problem is always finding the number of students in each level the problem is smaller.

  FEW POINTS :
  1) every recursive solution needs to have a base case - which is nothing but a condition that terminates the recursion. without a base case we will have an infinite loop that will crash the program.

  2)a recursion might simplfy solving the problem but it might not translate to a faster solution. a recursive solution might be far worse than and iterative solution. 
  3) Recursion is a topic that is not the most straight forward to understand. Do not give up if you struggle with the concept.

  now lets solve the fibonacci with recursive

problem question: Given the number 'n', find the nth element of the fibonacci sequence.

in mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
EG
The first two numbers in the sequence are 0 and 1. (0, 1, 1, 2, 3, 5,8...)

recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8

Rather than the entire sequence we are only interested in the number present at a certain position in the sequence.

Tips for recursive solutions
1.figure out how to break down the problem into smaller versions of the same problem.
2. identify the base case for recursion

we know The Fibonacci sequence is a sequence in which each number is the sum of the two preceeding ones.

if F represents a function to calculate the Fibonacci number, then
Fn = Fn-1 + Fn-2
As the number is the sum of the previous two numbers.

we still have to calculate the fibonacci number this time smaller number

 the loop wont stop if only you have a base case 
 what is our base case.
 F0 = 0 and F1 = 1

 what is F2? F2 = F1 + F0
 what is F1? F1 = F1 + F0 = 1


 F2 = F1 + F0
 F2 = 1 + 0
 F2 = 1

 this is the approach of solving recursion

lets begin by defining the function signature
it will have 0ne parameter (n) which the element position in the fibonacci sequence.

function recursiveFibonacci(n) {

}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1))//  1
console.log(recursiveFibonacci(6))//  8

know tha n starts from 0 and not 1

what do we know about our recursion 
we know Fn = Fn-1 + Fn-2

function recursiveFibonacci(n) {
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
  
}


return recursiveFibonacci(n-1) + recursiveFibonacci(n-2) //this is an unending loop we have to put in our base case
 F0 = 0 and F1 = 1

( we can start the function with the base case
if (n < 2) {
  return n
}
this will return 0 if n = 0 and return 1 if n = 1 )
this complete our recursiveFibonacci code

function recursiveFibonacci(n) {
  if (n < 2) {
  return n
}
return recursiveFibonacci(n-1) + recursiveFibonacci(n-2) 
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1))//  1
console.log(recursiveFibonacci(6))//  8

the time complexity for recursive is two power n
O(2^n)
you can see the perform is really terrible compared to big O(n)

//..............

>>>>>RECURSIVE Factorial of a number
problem: given an integer 'n', find the factoral of that integer

the factorial of a non-negative integer 'n', denote n!, denoted n!, is the product of all positive integers less than or equal to 'n'.

the factorial of 0 is 1.

factorial(4) = 4321 = 24
factorial(5)= 54321 = 120

tips for solving problem with recursion solutions.
1.figure out how to break down the problem into smaller versions of the same problem.
2. identify the base case for the recursion.( to exit the infinite flow of code)

the factorial of a non-negative integer 'n' is the product of all positive integers less than or equal to 'n'.

if we have to calculate the 5 factorial
5! = 54321
4! = 4321
3! = 321
2! = 21
1! = 11
0! = 1 (fact in mathemetics)

now lets get the pattern
to get 1 factorial is
  1 * 0
  2 = 2 * 1, 
  3 = 3 * 2,
  4 = 4 * 3,
  5 = 5 * 4

n!= n * (n -1)!

base case 0 factorial = 1

now  let begin by definning the function signature, it will have one parameter (n) which is the factorial we have to calculate.

function recursiveFactorial(n) {

  return n * recursiveFactorial(n - 1)
}

base case 0 factorial = 1


function recursiveFactorial() {
  if ( n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))

bigO is linear complexinity becasue the higher the inputs the higher the execution
O(n)
bigO = O(n).
[4:23 PM]
>>>>>>>>>>>>>>>>>  SEARCH ALGORITHM  <<<<<<<<<<<<<<<<<<<<<<
linear search   Binary search  Recursive binary search

lets start with linear search

problem statement
given an array of 'n' elements and the target element 't',
find the index of 't' in the array. return -1 if the target element is not found.

examples
arr = [-5, 2, 10, 4, 6], t=10 --> should return 2

arr = [-5, 2, 10, 4, 6], t=6--> should return 4

arr = [-5, 2, 10, 4, 6], t=20--> should return -1

//pseudocode
 In this algorithm you Start at the first element in the array and move towards the last.
 At each element though, check if the element is equal to the target element.
if element found, return the index of the element
*** if element not found, return -1

if you understood this lets continue...


lets begin by defining the function signature
the function will have two parameters,

 first the array you want to search, and target which represent the elemnt you want to find in the array
loop through the array to find element. if element is found return element if not return -1.


function linearSearch(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1

// one for loop
//as the input inscreases time execution also inscreases
//bigO = O(n)


//................


>>>>>>>>>>>>>>>>BINARY SEARCH
Problem statement: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target elelment is not found.

binary search only works on sorted array. if it is not sorted use linear search.
or sort the array first before applying binary search

arr = [-5, 2, 4, 6, 10], t =10 --> should return 4
arr = [-5, 2, 4, 6, 10], t =6 --> should return 3
arr = [-5, 2, 4, 6, 10], t =20 --> should return -1

Binary search pseudocode
**if the array is empty return -1 as the element cant be found

**if the array has elements, find the middle element in the array. if target is equal to the middle element, return the middle element index.

** if target is less than the middle element, binary search left half of the array.
**if target is greater than middle element, binary search right half of the array.

[-5][2][4][6][10]   taget [6]

middle element is 4 binary search right half of the array because target element is greater than [4]
the middle element serves as a good comparisonn element to decide which way to narrow down.

pseudocode
if the array is empty, return -1 as the element cannot be found.

if the array has elements, find the middle element in the array, if target is equal to the middle element, return the middle element index.

if the target is less than the middle element, binary search left half of the array.

if target is greater than the middle element, binary search right half of the array


=>lets start by defining the function signature
it will have two parameter => arr which represent the sorted array, and => target which represent the element we have to find in an array.

we repeat as long as array is not empty, we add a while loop with a condition that the left index is less than or equal to the right index. in the iteration we find the middle element which is leftindex + rightIndex divided by 2.
left = 0 index
right = 4 index

if we have an even number of element the middle element might be a decimal now we use Math.floor to return the lower integer value
left = 0 index
right = 4 index
middle = 2 index

let leftarray = 0, because begins every index
let rightIndex = arr.length - 1( which represents the last index of the array element, length start from 1 the length -1 will return the index of the array).

the next set of operation we repeat as long as the array is not empty, so we add a while loop that runs as long as leftIndex is less than or equal to right index.

in each iteration we find the middle element 
so let middle index = leftIndex + rightIndex divided by 2
while(leftIndex <= rightIndex) {
  let middleIndex = (leftIndex + rightIndex) / 2


if we have an even number of element middle index might be a decimal, so we use math.floor
index 0 + index 4 divided by 2 = 2

while(leftIndex <= rightIndex) {
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

if target = array of middle index, if it is return middle index 
 if(target === arr[middleIndex]) {
  return middleIndex
  }

now we are left to pursue the left part of the array or the rigth path
if target is less than the middle element which is array of the middle index arr[middleIndex] we say right index = middle index minus 1

  if(target < arr[middleIndex]) {
    rightIndex = middleIndex - 1
    }

  else if the target is greater than the middle element we change left index to middle index plus 1

   else {
      leftIndex = middleIndex + 1

in our case 
[-5, 2, 4, 6, 10], t =6

target element 6 is greater than middle element 4
left index point at element 6 and right point at element 10. left index is 3 and right index is 4. we do this because the array is already sorted. we know 6 has to lie to the right side of the element because it is greater than the middle element
since the target element less than and equal to the right element we repeat the while loop. leftIndex 3, rightIndex 4 = 7 divided by 2 = 3.5... math.floor will convert it to 3 middle index is now 3. now we check if the target element is 6, 6 is indeed = 6, then we return the index which is 3. that middle index is the position of the element in the array. our code will return from binarySearch Function. ofcourse if the element is not present eventually our while loop condition fails in that scenario we return -1
 }
 return -1
}
this indicate element is not found

function binarySearch(arr, target) {
let leftIndex = 0
let rightIndex = arr.length - 1

while(leftIndex <= rightIndex) {
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if(target === arr[middleIndex]) {
  return middleIndex
  }
  if(target < arr[middleIndex]) {
    rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
 }
 return -1
}
console.log(binarySearch([-5, 2, 4, 6, 10],10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10],6)) // 3
console.log(binarySearch([-5, 2, 4, 6, 10],20)) // -1

to get the bigO notation of the binary search
we have one while loop but the detail is in the while loop. in every iteration we reduce the input size by half so the time complexity of our function is = O(logn) and not O(n). it means the time complexity is logarithmic and lot linear.

//...................................

big'O GUIDE IMAGE IS HERE


>>>>>>>>>>>>>>RECURSIVE SOLUTION TO BINARY SEARCH
Given a sorted array of 'n' element and target element 't', find the index of 't' in the sorted array. Return -1 if the target element is not found.

arr = [-5, 2, 4, 6, 10], t =10 --> should return 4
arr = [-5, 2, 4, 6, 10], t =6 --> should return 3
arr = [-5, 2, 4, 6, 10], t =20 --> should return -1

CWB — 12/08/2022 4:27 PM
Tips for solving recursion
1) Figure out how to break down the problem into smaller versions of the same problem
2) Identify the base case for recursion( to exit the infinit flow of code)

PSEUDOCODE
1)if the array is empty, return -1 as the element cannot be found.
2)if the array has elements, find the middle element in the array, if target is equal to the middle element, return the middle element index.
3)if the target is less than the middle element, binary search left half of the array.
4)if target is greater than the middle element, binary search right half of the array

the first two point address the base case for our recursion. and the last two points help break down the problem to a smaller versions of the same problem

if 1, 2 we exit from recursion, if 3,4 we perform the binary search.
the pseudocode pretty much explains the recursive solution.

lets start by definning the function signature, the function will have two parameters
arr, target. the arr which represent the array we want to sort and target which represent the target element.
The function body is quite different because we wil rely on a helper function that will be called recursively. we will return a function called search() that will accept four parameters, the first two parameter remain the same arr, target, the third and fourth parameter will be the leftIndex and the rightIndex.

return search(arr, target, 0, arr.length -1)

0 points to the beggining of the array while arr.length -1 points to the end of the array(last index of the array)

lets now define the search function
function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1
  }
}

now we calculate if the middle element is equal to the target element then return the index
[4:27 PM]
let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
if (target ===arr[middleIndex]) {
  return middleIndex
}

if element is not found at the middleindex we need to recursively search the left half or the right halh of the array
if(target < arr[middleIndex]) {
  return search(arr, target, leftIndex, midddleIndex -1)
}
leftIndex, midddleIndex -1)// this is nothing but the left half of the array

else {
  return  search(arr, target, middleIndex + 1, rightIndex)
}
//middleIndex + 1, rightIndex)this represent the right half of the array
[4:28 PM]
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length -1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
    return -1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target ===arr[middleIndex]) {
    return middleIndex
  }
  if(target < arr[middleIndex]) {
  return search(arr, target, leftIndex, midddleIndex -1)
  } else {
  return  search(arr, target, middleIndex + 1, rightIndex)
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1

the BigO of our recursive binary search is also logarithmic because our input size is reduced by half. it has a double function but each time ti is called it is reduced by half. bigO = O(logn)
[4:28 PM]
>>>>>>>>>>>>>>>>>>>> SORTING ALGORITHM   <<<<<<<<<<<<<<<<
In this lets focus on the sorting algorithms, we normaly tend to sort with the newest items first or the item with the most number of upvote
we will be learning four different sorting algorithms to arrange element in a specific order.
we will be working with numbers and accending them cos thats the easiest for beginners like us.

we will learn

Bubble sort
Insertion sort
Quick sort
Merge sort
[4:30 PM]
BUBBLE SORT

PROBLEM STATEMENT: Given an array of Integers Sort the Array.
const arr = [-6, 20, 8, -2, 4]
passing the array in bubble sort function should return the array in an ascending order.
bubbleSort(arr)=> Should return [-6, -2,4, 8, 20]
before we start i must mention bubble sort is a poor sorting algorithm in the real world and it is primarily used as an introduction to sorting algorithms.
you might never use this apart from interview or a stepping stone to learning other algorithms.

Bubble sort idea.
Compare adjacent element in the array and swap the positions if they are not in the intended order.

repeat the instruction as you step through each element in the array
once you step through the whole array with no swaps, the array is sorted.

lets begin by defining the function signature it will have one parameter arr. which represent the array to sort.

what do we know about bubble sort
we know we start at the first element in the array and compare the adjacent element of the array till we reach the last element. this sounds like a loop so lets begin with that.
within the loop body we compare the element with the adjacent element and swap them if they are out of order.
 if (arr[i] > arr[i+1]) {
  let temp = arr[i]
  arr[i] = arr[i+1]
  arr[i+1] = temp
}
This implemantation will sort this array.

now we implement the logic to check if to  repeat this loop
now we are going to wrap the sort with a while loop to be precise witha do while loop. 
To determine if the array is sorted or not we have to go through the element atleast once that is a perfect use case for a do while loop.
in the while implement the condition to repeat the comparism. which is if the element are swapped at the begginning set swapped to false while at the end set swapped to true.
and now we have implemented bubblesort
[4:30 PM]
let swapped
do {
   for(let i = 0; i < arr.length -1- 1; i++) {
    if (arr[i] > arr[i+1]) {
    let temp = arr[i]
     arr[i] = arr[i+1]
    arr[i+1] = temp
    }
  }
} while()
-->
let swapped
do {
  swapped = false
   for(let i = 0; i < arr.length -1- 1; i++) {
    if (arr[i] > arr[i+1]) {
    let temp = arr[i]
     arr[i] = arr[i+1]
    arr[i+1] = temp
    swapped= true
    }
  }
} while(swapped)

summary of the code. we begin by going through the array atleast once, we check if any adjacent element is out of order, if they are not we exit the do while loop since the array is already sorted. if we did swap element we go through the array again to make sure there is no more swapping required. if we encounter a swap repeat the process. if we dont encounter a swap the array has been sorted.
 trace the code with the slide that will give you a better understanding



function bubbleSort(arr) {
let swapped
  do {
    swapped = false
    for(let i = 0; i < arr.length -1- 1; i++) {
      if (arr[i] > arr[i+1]) {
      let temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp
      swapped = true
      }
    }
  } while(swapped)
}

const arr =[-6, -2,4, 8, 20]
bubbleSort(arr)
console.log(arr) //[-6, -2, 4, 8, 20]

Tracing the bigO the function contains two loops.
a for loop contained in a do-while loop
in our cheat sheet it is quadratic time complexity
bigO = O(n^2)
as the number of element increases the comparism increase by square of the number
quadratic complexity isnt great for sorting.


//...........................

bubbleSort image is here


>>>>>>>>>>INSERT SORT
Problem: Given an array of integers, sort the array.
const arr =[-6, -2, 4, 8, 20]
passing the array insertion function should return the array in ascending order.
insertionSort(arr) => Should return [-6, -2, 4, 8, 20]


INSERT SORT idea
lets first understand the idea of the insertion Sort
with insertion sort you first split the array into sorted and unsorted part.
Assume that the first element is already sorted  and the remaining unsorted.
Select an unsorted element and compare with all the elements in the sorted part.
if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger element in the sorted part towards the right.

insert the selected element at the right index

Repeat till all the unsorted elements are placed in the right order.

use Insert pic to explain.
NTI= number to insert

let begin with the function signature.
the function will have one parameter arr which represent the function to sort

what do we know about insertion sort?
we know that the first element is assumed to be sorted and we need to traverse the unsorted part of the array
the unsorted part start from index 1 and arr.length - 1

to achieve that we can use a for loop
for (let i = 0; i < arr.length; i++)
[4:32 PM]
the number in each iteration has to be stored in a variable till we find the right place for it.
let numberToInsert = arr[i]
now we know numberToInsert needs to be compared with each element in the sorted part and we know the sorted part always lies to the left of the sorted part for example -6 is one less than the number to insert
so let j = i - 1 // here j refers to the index of the sorted element.

 To sort the element can be more than one we need logic to iterate over the sorted part of the array. for that we are going to use while loop
while(j >= 0) {
 j = j - 1
}
we also need to check if the sorted element is greater than the number to insert otherwise there is no need to iterate further to the left
&& arr[j] > numberToInsert.

arr[j+1] = arr[j] this ensure all the element greater than the number to insert are shifted to the left by one.
once that is done j will point to where the condition failed or the sorted element is lesser than the number to insert
arr[j+1] = numberToInsert

that is all for our implementation of insertion sort.

Summary
we use a for loop to iterate through the unsorted part of the array
we store the number to insert in each iteration
we compare the sorted element in the array with the number to insert trying to find the index where the insertion has to happen. the index is where the sorted element is lesser than the number to insert
you then insert the number to the right of that index.


function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
  let numberToInsert = arr[i]
  let j = i - 1
  while(j >= 0 && arr[j] > numberToInsert) {
  arr[j+1] = arr[j]
  j = j - 1
  }
  arr[j+1] = numberToInsert
  }
}

const arr =[8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr)

const arr =[8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr) we should see the element sorted in ascending order
[4:32 PM]
big O insertion Sort
big O is quadratic time complexity
bigO = O(n^2)
as the number of array increases the number of comparison increase the by square of that number.

//..................
Isertion-sort image is here

//........................

>>>>>>>>>>>>>QUICK SORT
Problem: Given an array of integers, sort the array.

sorting can either be ascending or descending
const arr =[-6, -2, 4, 8, 20]
QuickSort(arr) => Should return [-6, -2, 4, 8, 20].

Quick sort idea
Identify the pivot element in the array
you have plenty of option to choose from, you can either 
- Pick first element as pivot
- Pick last element as pivot
- Pick a random element as pivot
- Pick median as pivot

then put everthing thats smaller than the pivot into the 'left' array and everything that's greater than pivot into the 'right' array.

Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition.

Repeatedly concatenate the left array pivot and right array till till one sorted array remains.

refer to the quick sort diagram
first identify the pivot which is the last element of the array in our case [4].
now the remaining element are split into left array and right array.
the left array contain element less than the pivot so you have [-6] [-2].
the right array contain element greater than the pivot [8][20].
so you repeat the same partition for left and right sub-arrays.
for the left sub-array the pivot is last element which is [-2] the left array will contain smaller elements
which is [-6] the right array will be empty as no element are larger than the pivot.
similarly on the right sub-array the pivot the the last element [20] the left array will be [8] because it is smaller than [20] and the right array will be empty.
now if the array contain one element we have reached the base condition.
you now start concatinating the array at each level
[-6][-2][][8][20][] => [-6][-2]  [8][20]

the move one level up where [4] is the pivot element. you once again merge left array pivot and right array.
this will give the final sorted array
[-6][-2][4][8][20]
this pretty much the way the quick sort algorithm works.

now lets solve the quick sort algorithm
lets begin by definning the function signature. the function will have one parameter (arr) which represents the array to sort. for example 
const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr))// [-6, -2, 4, 8, 20]
returns a sorted array.
our first step is to find the pivot element
let pivot = arr[arr.length -1]
step 2. we traverse the array and put it to the left and right array
now lets create two arrays
let left = []
let right = []
now add a for loop to traverse the array
for(let i = 0; i < arr.length - 1; i++) {
  if(arr[i] < pivot) {
   left.push(arr[i]) 
  } else {
    right.push(arr[i])
  }
}
return [...quickSort(left), pivot, ...quickSort(right)]

with each element in the array we compare with pivot and then push into the approprate array. if array of i is less than the pivot element push to the left array else push to the right array.
repeat this for left and right sub-arrays eventually concatinate it with the pivot element.
return an array that we call quickSort on the left, quickSort on the right array with pivot element inbetween. what we have here is recursion we need a base case to exit. the base case is if the array contains one element so at the top, if(arr.length<2) {
  return arr
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]

bigO is O(n^2)
worse case complexity is O(n^2)
this happens when the array is already sorted instead of partitioning our array into small arrays we end up partitioning into empty array and a full array. we end up comparing with every element and that will be quadratic time complexity.
however quickSort algorithm is a popular algorithm because its average case complexity is O(nlogn) we recursively divide the array into smaller arrays logn and also have a for loop which is O(n) combine the two which is O(nlogn), ofcourse the way to derive the complexity is complex and out of scope for this fundamentals.
it is very unlikely that you will sort an already sorted array so the worst case complexity even though it is quadratic the avearage case complexity is what matters with this algorithm.
on the side note it is possible to implement the same algorithm without taking extra space. it is helpful when you have space constrains if you dont have space constraints it it okat to go with this solution or you can go with the merge sort algorithm.


// .............................
Quick-sort example

>>>>>>>>>>> MERGE SORT
Problem: Given an array of integers, sort the array.
sorting can either be ascending or descending
const arr =[-6, 20, 8, -2, 4]
MergeSort => Should return [-6, -2, 4, 8, 20].

Merge Sort idea
-divide the array into sub arrays, each containing only one element(An array with one element is considered sorted)
- repeatedly merge the sub arrays to produce new sorted sub-arrays until there is only one sub-array remaining. That will be the sorted array.

consider the merge sort diagram 

merge sort is a two part process
first you divide the array until your leftward sub-arrays contain only one element. the logic of that is to split the array in the middle till you have an array of length 1
first array[-6, 20]  second array[-6, -2, 4]
now check if the array length is 1 
. it is not so we further divide the arrays. 
this time [-6] [20] has two seperate arrays and for the right handside [8] is one array while [-2, 4] is another array. remember we split in the middle. now again we check for element which has more than one element in the array and divide those.
the right most array will now split to [-6] [20] [8] and the left most array will now split into [-2] [4]
at this point in time every element in the original array contain in it own sub-array. step one is complete

step two: we merge the individual sub-array into new sub-arrays by ensuring the element are sorted. 
here is how it works:
we take the two arrays and a temporary empty array as they are sorted
[-6] [20] => [] left & right are not empty. -6 < 20
[] [20] => [-6] Left is empty push right array.
[] [] => [-6, 20]
now you have a sorted sub-array.
lets repeat the process to the right-most sub-array
[8][-2, 4] => [] left & right are not empty, -2 < 8 then we push it to the empty array
[8] [4] => [-2] then we conpare again
4 < 8 so we push 4 onto the temp array
[8] [] => [-2, 4]
we also push [8] to the temp array now the array is sorted 
[][] => [-2, 4, 8]
lets repeat the process one more time for [-6, 20] and [-2, 4, 8]
use merge sort diagram 2.

now lets solve by defining the function signature which will have one parameter (arr) which represents the array to sort
const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))// [-6, -2, 4, 8, 20]
returns a sorted array.

we know we need to didvide the array till its length is 1. that will be our base case for recursion
if(arr.length < 2) {
  return arr
}
lets go back to dividing the array we divide at the middle lets calculate that first
const mid = Math.floor(arr.length / 2)

now we consider all the element from the first element upto but not including the middle element as the left array
const leftArr = arr.slice(0, mid)

the rest of the array will be the right array
const rightArr = arr.slice(mid)

this will be the rest of the array.
the reset of the array may still contain more than one element. we have to repeat this step for both of the arrays
mergeSort(leftArr), mergeSort(rightArr)

return(merge(mergeSort(leftArr), mergeSort(rightArr))

This here is dividing the array till it contains one element when that happend we pass the arrays into a merge function which will be part two of the algorithm.

function merge(leftArr, rightArr)){
  const sortedArr = []
}
this will recieve the left and right array as parameters(leftArr, rightArr). within the function body we create a temporary array to hold the sorted element.
const sortedArr = []
next we check that both arrays are not empty. while left and right arrays are posisitive. aslong as this condition is true we compare the first element two array and push smaller element to the sorted array.
we use shift since the element should also be removed from the left array.

while(leftArr.length && rightArr.length) {
  if(leftArr[0] <= rightArr[0]){
    sortedArr.push(leftArr.shift())
  }
}

How ever if the right element is smaller ELSE the sorted array dot push right array dot shift.

else {
  sortedArr.push(rightArr.shift())
}

keep in mind the shift method removes the element from the corresponding array
now if one of this array is empty we exit the loop we then merge the sort sorted array with whatever array still contains the element. we will use the spread operator for that purpose.
which simply says the sortedArr if the left array has element merge them if the right array has element merge them
[...sortedArr, ...leftArr, ...rightArr]
the order is important to ensure the resulting array is sorted.
finally return the resulting array which will be sorted.
return [...sortedArr, ...leftArr, ...rightArr]
This is the merging sort algorithm in javascript.


function mergeSort(arr) {
  if(arr.length < 2) {
  return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  const sortedArr = []
  while(leftArr.length && rightArr.length) {
  if(leftArr[0] <= rightArr[0]){
    sortedArr.push(leftArr.shift())
  } else {
  sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))// [-6, -2, 4, 8, 20]

The bigO
in the first function we recursively divide the problem into half this is n(logn) the second part we merge the array and this contain a while loop loop, if there is a loop the time comnplexity is linear. our solution is a combination of the two.
the time compexitylexity is O of n log n
bigOo = O(nlogn) this is one of the best time complexity you can get when sorting


image here
mergeSort2.png
mergeSort1.png

Big_O_complexity_chart.png

// Ternary operator
// A ternary operator is used to evaluate a condition and executes a block of code based on the condition.

// condition ? expression1 : expression2
// The ternary operator evaluates the condition.

// If the condition is true, expression1 is executed.
// If the condition is false, expression2 is executed.

// ternary operator
let marks = 0
// normal ternary operator 
(marks >= 40) ? 'passed' : 'failed';
//chained ternary operator
let result = (marks === 0) ? 'negative':(marks >= 40) ? 'passed' : 'failed';

console.log( you ${result} the exam)

// Chained ternary operators
// You can also nest one ternary operator as an expression inside another ternary operator. For example,

// program to check if number is positive, negative or zero
// let a = -6;
// let result = (a === 0) ?  "zero" : a> 0 ? "positive"  : "negative";
// console.log(The number is ${result}.);
CWB — 12/12/2022 3:38 PM
// Arrow functions
// ES6 is all about having an optimized and minimal code.
// ES6 Arrow functions are a more concise syntax for writing function expressions.

// Below is an example of a simple function with no arguments :
//normal function
// function add(a,b){
//   return a + b;
// }
// // ES6 Arrow functions
// const add = (a,b) => { return a+b}
// const add = (a,b) => a+b

let sayHello = (n) => console.log("hello");
let sayBye = (n) => console.log("bye");
sayHello(); // “Hello” will be alerted
// // Let’s create a function that takes an argument and call it as if it was a function
let doSomething = somethingToDo => {
 somethingToDo();
};
// //  Now any function we send to “doSomething()” function will be called right away
doSomething(sayHello); // “Hello” will be alerted
doSomething(sayBye); // “Bye” will be alerted
CWB — 12/12/2022 3:51 PM
/VARIABLE
//global scope varaible and local scope variable
// const x = "me"
// const scope = () => {
//   const x = "x"

//   {
//     // var y = "y";
//     let z = 'z'
//     const p = 'p'
//     console.log(x)
//     console.log(x)
//   }
//   console.log(x)
//   console.log(y)
//   // console.log(z)
//   //console.log(p)

// }
// scope()
// console.log(x)
CWB — 12/12/2022 4:24 PM
//////ARRAY////////
let array = [15, 24, 15, 26, 1, 8, 45];
// // MAP METHOD
// let array1 = array.map(el => el * 2)
// console.log(array1)
// console.log(array)

// FOR EACH
// forEach does not return a new array
// array = array.forEach( el => console.log(el * 2))

//FILTER METHOD
// let array1 = array.filter((el, i) => el > 20)
// console.log(array1)

// REDUCE METHOD
// let array1 = array.reduce((prev, curr) => prev + curr)
// console.log(array1)

// FIND METHOD
// let array1 = array.find(el =>el > 25)
// console.log(array1)

//FIND INDEX
let array1 = array.findIndex(el =>el > 25)
console.log(array1)

// function map (){
//   let array=[15, 24, 15, 26, 1, 8, 45]
//   for(let i=0; i< array.length; i++){
//     array[i]=array[i]+1
//   }
//   return array
// }


// function filter (){
//   let array=[15, 24, 15, 26, 1, 8, 45]
//   let tab = []
//   for(let i=0; i< array.length; i++){
//     if(array[i]>20){
//       tab=tab.concat(array[i])
//     }
//   }
//   return tab
// }
CWB — 12/12/2022 4:32 PM
///////DEST + SPREAD.JS/////////
// Without destruction
let user = {
  name: "Tobi",
  age: 26,
  fullstack: {
    track: "js",
    skill: 'ES6',
  },
};

let a = (user) => {
  return my name is ${user.name}, i'm ${user.age} and we are learning ${user.fullstack.track}:${user.fullstack.skill} ;
};

let b = ({name, age, fullstack: { track, skill}} ) => {
  return my name is ${name}, i'am ${age} we are learning ${track}: ${skill}
}
console.log(a(user));
console.log(b(user))
CWB — 12/12/2022 4:42 PM
//spread objects
// let user={name:'ilen', age:25, adress:'boumhel'}
// let infos={track:'full stack js', framework:'react'}

// let fullinfo = {...user, ...infos}

// console.log(fullinfo)

// let info = {...user, id:1}
// console.log(info)

// //spread with map 
// const users = [{ name: "mohamed" }, { name: "salah" }];
// const tt = [...users, { name: "hejer" }];
// const u = users.map((el, i) => { return{...el, age: i} });
// console.log(...u);

// let arr=['hello', 'world']
// let arr2=['welcome', 'to', 'gomycode']

// let newarr=[...arr2, "fanta"]
// console.log(newarr)




https://youtu.be/QFaFIcGhPoM
YouTube
Codevolution
ReactJS Tutorial - 1 - Introduction

December 19, 2022

CWB — 12/19/2022 1:18 PM
https://github.com/codewithbillions/reactjs-workshop.git
GitHub
GitHub - codewithbillions/reactjs-workshop
Contribute to codewithbillions/reactjs-workshop development by creating an account on GitHub.

January 23, 2023

CWB — 01/23/2023 1:16 PM
https://youtu.be/SnoAwLP1a-0
YouTube
The Net Ninja
Node Auth Tutorial (JWT) #1 - Intro & Setup

[1:18 PM]
https://youtu.be/DZBGEVgL2eE
YouTube
Web Dev Simplified
Mongoose Crash Course - Beginner Through Advanced


CWB — 01/23/2023 5:07 PM
console.log("i am mongoose");
const User = require("./User");
const mongoose = require("mongoose");


mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://mongoose:rzUGkpKWl2x15UJt@cluster0.kjg1q2t.mongodb.net/mongoose",
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);

run();
async function run() {
  try {
    const user = await User.create({ 
      name: "billions", age: 20,
      hobbies: ['weight lifting',' bowling'],
      address: {
        street: "Herbert Mcauley",
        city: "lagos",
  },
});
await user.save()
  console.log(user);

  } catch (e) {
    console.log(e.message)
  }
}
[5:07 PM]
this is for script.js
[5:09 PM]
const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})

const userSchema = new mongoose.Schema({
    name: String,
    age : {
        type: Number,
        min: 18,
        max: 100,
    },
    email : String,
    createdAt : {
        type: Date,
        default: () => Date.now(),
    },
    updatedAt : Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
})

module.exports = mongoose.model("User", userSchema);
[5:09 PM]
this is for user.js