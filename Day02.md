<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
     You should use objects when you want the element names to be strings (text).
    You should use arrays when you want the element names to be numbers. 
<script>

    //=========== Syntext =====================//

    const arr = [ "one" , "two" , 
    "three" , 
    "four" , 
    ]; 
    console.log(arr) ; 
    console.log(arr.length) ; 
    console.log(arr.sort()) ; //['four', 'one', 'three', 'two']
    
    => Copy Array 
    const newArr = [...oldArr]; // not newArr = oldArr

    =>  Destructuring Arrays
    const [a, b] = [10, 20];  // a = 10, b = 20



    //=========== Loop Over Array  =====================//

    const color  = [ "red" , "green" , "yellow" , "blue"] ; 
    let text = "Array Colors Are :\n" ; 
    color.push("black")
    for(let i = 0 ; i<color.length ; i++)
    {
        text+= color[i] ; 
        text+="\n" ; 
    }
    console.log(text) ; 
    Array Colors Are :
    red
    green
    yellow
    blue
    black
    console.log(Array.isArray(color)) ; //true 

     //=========== For Each Over Array  =====================//

    const arr = ["a" , "b" , "c"] ; 

    arr.forEach(output) ; 

    function output(value)
    {
        console.log(value) ; 
    }

     //=========== Nested Loop Over Array  =====================//

    const id = [
    ["CSE" , "BBA"] , 
    ["EEE" , "ELL"] , 
    ["Civil" , "ETE"]
    ] ; 
    for(let i = 0 ; i<id.length ; i++)
    {
        for(let j = 0 ; j<id[i].length ; j++)
        {
            console.log(id[i][j]) ; 
        }
    }

//============================******============================****==========================================

    =========== Array Method  =====================

    01 -> tostring

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let myList = fruits.toString();
    console.log(myList) ; // Banana,Orange,Apple,Mango

    02 -> length

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.length = 2;
    console.log(fruits) ; //(2) ['Banana', 'Orange']

    03 -> join

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text =  fruits.join(" and ")
     console.log(text) ; Banana and Orange and Apple and Mango

    04 -> POP | PUSH 

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.pop();
    fruits.push("Guava") ; 
    console.log(fruits) ; // (4) ['Banana', 'Orange', 'Apple', 'Guava']

    05 -> shift | unshift 

     const fruits = ["Banana", "Orange", "Apple", "Mango"];
     fruits.shift(); // Delete Fisrt Elemnt
     let fruit = fruits.shift(); // Return Delete Value 
     console.log(fruit) // BANANA 
     console.log(fruits) ; // (3) ['Orange', 'Apple', 'Mango']
     fruits.unshift("Banana") ; 
     console.log(fruits) ; // (4) ['Banana', 'Orange', 'Apple', 'Mango']

    06 -> Concat 

    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const myChildren = myGirls.concat(myBoys);
    console.log(myChildren) ; //(5) ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']
    //===
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3);

    const myArray = ["Emil", "Tobias", "Linus"];
    const myChildren = myArray.concat("Peter");  // Emil,Tobias,Linus,Peter

    07 -> splice
    The splice() method adds new items to an array.

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log(fruits); //(6) ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
    //where new elements should be added // how many elements should be removed.
    fruits.splice(2, 1, "Lemon", "Kiwi"); 
    console.log(fruits); //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Kiwi', 'Apple', 'Mango']
    //===
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1);
    console.log(fruits) ; // (3) ['Orange', 'Apple', 'Mango']


    08 -> slice
    The slice() method slices out a piece of an array.

    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(2 , 4); //Start(inclusive)  , End(Exclusive)
    console.log(citrus) ; // (2) ['Lemon', 'Apple']

//============================******============================****==========================================
    
   =========== Sort  =====================

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.sort() );   //(4) ['Apple', 'Banana', 'Mango', 'Orange']

    const months = ["Jan", "Feb", "Mar", "Apr"];
    const sorted = months.toSorted();  || months.toReversed();
    console.log(sorted) ; //(4) ['Apr', 'Feb', 'Jan', 'Mar'] => Creat New Array 

    const arr = [1,4,3,7,2,6] ; 
    console.log(arr.sort()) ; 
    console.log(arr.reverse()) ; 
    ***But***
    const arr = [10 , 100 , 25 , 55] ; 
    console.log(arr.sort()) ; //(4) [10, 100, 25, 55] error .. beacuse it sort as string
    =>Here Come Numeric Sort : 
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b)
    {
        return a - b ; || b - a for descending 
    });
    console.log(points) ; //(6) [1, 5, 10, 25, 40, 100]

    //Sorting an Array in Random Order
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(){return 0.5 - Math.random()});

//============================******============================****==========================================
    =========== Array Search  =====================

    // pos -> indexOf , lastIndexOf , bool -> include
    const color = ['red' , 'blue' , "green"] ; 
    console.log(color.indexOf("red")) ; // 0  ; 
    array.indexOf(item, start)  ; 
    fruits.lastIndexOf(item , start) ;
    fruits.includes("Mango"); // false 
    // UpperBound -> find function
    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.find(myFunction);
    function myFunction(value, index, array) 
    {
     return value > 18;
    }   // First element Over 18 
    //UpperBound Index ->findIndex Function
    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.findIndex(myFunction);

    function myFunction(value, index, array) {
    return value > 18;
    }   // Return Index over 18 

    // Easy Syntex
    const temp = [27, 28, 30, 40, 42, 35, 30];
    let high = temp.findLast(x => x > 40); //42
    const temp = [27, 28, 30, 40, 42, 35, 30];
    let pos = temp.findLastIndex(x => x > 40);

    //============================******============================****==========================================
    =========== Array Iteration  =====================

    00 -> For Of \ For In
    let arr = [10, 20, 30];
    for (let val of arr) {
    console.log(val); // 10, 20, 30
    }
    let arr = [10, 20, 30];
    for (let i in arr) {
    console.log(i);       // 0, 1, 2
    console.log(arr[i]);  // 10, 20, 30
    }

    01 -> forEach

    const numbers = [45, 4, 9, 16, 25];
    numbers.forEach(myFunction);
    function myFunction(value, index, array) 
    {
    console.log(value) ; 
    console.log(index) ; 
    }

    02 -> Map

    const numbers1 = [45, 4, 9, 16, 25];
    const numbers2 = numbers1.map(myFunction);
    function myFunction(value, index, array) 
    {
    return value ;
    }
    console.log(numbers2) ; // (5) [45, 4, 9, 16, 25]

    03 -> Filter (conditional)

    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);

    function myFunction(value, index, array) 
    {
     return value > 18;
    } 
    console.log(over18) // (2) [45, 25]

    04 -> Prefix Sum 

    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduce(myFunction);   || numbers.reduce(myFunction, 100); If we want start 100
    function myFunction(total, value, index, array)
    {
       return total + value; // like prefix sum
    }   console.log(sum) ; // 99 
    // sum right to left
    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduceRight(myFunction); 
    function myFunction(total, value, index, array) {
    return total + value;
    }

    05 -> Every (Conditional )
    every() method checks if all array values pass a test.
    const numbers = [45, 4, 9, 16, 25];
    let allOver18 = numbers.every(myFunction);

    function myFunction(value, index, array) {
    return value > 18;
    }

// =================================== //=========================================// ==============================================
*** Array Practice ***  String Type 

    
    *** Easy : 
    Create an array called colors with these elements: "red", "green", "blue", "yellow".
    Add "purple" at the end of the array.
    Remove the first color And Print 
    Insert "orange" and "pink" starting at index 2 without removing any elements.
    creat new Colors array with 3 consecutive portion 
    Sort the array alphabetically.
    Print the array after each step. 
    *** Mid : 
    Find the index of "pink" and remove it from the array.
    Add "violet" right after "orange".
    Create a new array warmColors containing only colors that come before "red" alphabetically
    *** Hard : 
    01 Remove every color whose name length is less than 5 characters.
    02 Find all colors whose names contain the letter "o" and move them to the front of the array in the same order they appear.
    03 Replace the last 3 elements of the original array with the first 3 elements of another color  If specialColors has less than 3 elements, replace as many as possible.
    
    // ======================
    // *** Easy : 
    const color = ["red" , "green" , "blue" , "yellow"] ; 
     color.push("purple") ; 
     color.unshift("golden") ; 
     console.log(color)
    // (6) ['golden', 'red', 'green', 'blue', 'yellow', 'purple']
     let first = color.shift() ; 
     let last = color.pop() ; 
     color.sort() ; 
     console.log(first , last , color ) ; 
    // golden purple => (4) (4) ['blue', 'green', 'red', 'yellow']
    color.splice(2 , 0 , "orange" , "pink") ; 
    console.log(color) ; 
    // (6) ['blue', 'green', 'orange', 'pink', 'red', 'yellow']
    const threeColor = color.slice(2,5) ; 
    console.log(threeColor) ; 
    // (3) ['orange', 'pink', 'red'] 
    // ======================
    // *** Mid : 
    //
    let indexofPink = color.indexOf("pink") ; 
    color.splice(indexofPink , 1) ; 
    console.log(color) ;  
    // (5) ['blue', 'green', 'orange', 'red', 'yellow']
    let indexofOrange = color.indexOf("orange") ; 
    color.splice(indexofOrange+1 , 0 , "violet") ; 
    console.log(color) ; 
    // (6) ['blue', 'green', 'orange', 'violet', 'red', 'yellow']

    // Many Way : 
    const redIndex = color.indexOf("red");
    const warmColors = color.slice(0, redIndex);
    console.log(warmColors) ;
    // (4) ['blue', 'green', 'orange', 'violet']
    const warmColors = [];
    for(let c of color) {
    if(c < "red") warmColors.push(c);
    }
    console.log(warmColors) ;

    // ======================
    // *** Hard : 
     const color = ['blue', 'green', 'orange', 'violet', 'red', 'yellow'] ; 
    for(let x in color)
    {
        if(color[x].length<5)
        {
            color.splice(x , 1) ; 
        }
    }   
    console.log(color) ; 
    (4) ['green', 'orange', 'violet', 'yellow']

    // 02 

    for (let i = color.length - 1; i >= 0; i--) 
    {
        if (color[i].includes('o')) 
        {
            let del = color.splice(i, 1)[0];  // Remove and get the element as its return array
            color.unshift(del);               // Insert at the beginning
        }
    }
     console.log(color);
     (6) ['yellow', 'violet', 'blue', 'green', 'orange', 'red']

    // 03
     const color = ['blue', 'green', 'orange', 'violet', 'red', 'yellow'] ; 
     const specialColors = ['golden' , 'brown' , 'black'] ; 
     color.splice(-3, 3, ...specialColors); // -3 means reverse order 3 
     console.log(color)  ; 
     (6) ['blue', 'green', 'orange', 'golden', 'brown', 'black']


    // ================================================
    *** Array Practice ***  Number Type 

    *** Easy : 

     Create an array with numbers 1 to 10. Print.
     Create a new array of only even numbers using .filter(). Print.
     Double every number using .map(). Print.
     Reverse the array. Print.
     Sort it in ascending and descending order. Print.

    *** Mid : 

    Find the sum of the array using .reduce().
    Find the maximum and minimum numbers.
    Check if any number is negative using .some().
    Check if all numbers are less than 50 using .every().
    Find the index of number 100, and if found, remove it.
    Slice out the middle 3 numbers into a new array.
    Create a new array of square roots, round to 2 decimals.

    *** Hard : 

    Remove all duplicate numbers from an array.
    Move all even numbers to the front, maintaining order.
    Create an array of prefix sums.
    Replace the last 3 numbers with the first 3 prime numbers.
    Sort only a portion of the array (e.g., index 3 to 6).
    Implement sliding window sum of size 3.
    Find the longest increasing subarray.




    // Sol : ====== *** =========

    // *** Easy  : 

    const arr =[] ; 
    for(let i = 1 ; i<=10 ; i++)
    {
        arr.push(i) ; 
    }
    // console.log(arr) ;

    const even = arr.filter(x => x%2 ===0 ) ; 
    console.log(even) ; 
    // (5) [2, 4, 6, 8, 10]

    const double = arr.map(x => x*2 ) ;
    console.log(double) ; 
    // (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] 

    console.log(arr.reverse()) ;  // (10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

    arr.sort((a , b) => a - b) ; 
    console.log(arr) ; // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr.sort((a , b) =>  b - a) ; 
    console.log(arr) ; // (10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

     *** Mid  : 

    const arr = ['23' , '11' , '9' ,  '34' , '45' , '11' , '77'] ; 
    let sum = arr.reduce((accumulator , current) => accumulator+current , 0) ; 
    console.log(sum) ; // 02334451177
    let sum = arr.reduce((accumulator , current) => accumulator+Number(current) , 0) ;
    console.log(sum) ; // 190
    const arr = ['23', '11', '9', '34', '45', '11', '77'].map(Number);

    Max and Min
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    console.log("Max:", max, "Min:", min);

    // Check if any number is negative
    console.log("Any negative?", arr.some(n => n < 0));

    // Check if all numbers are less than 50
    console.log("All < 50?", arr.every(n => n < 50));

    // Find index of 100 and remove if found
    const index100 = arr.indexOf(100);
    if (index100 !== -1) arr.splice(index100, 1);

    // Slice out middle 3 numbers
    const midStart = Math.floor((arr.length - 3) / 2);
    const mid3 = arr.slice(midStart, midStart + 3);
    console.log("Middle 3:", mid3);

    // New array of square roots (2 decimal)
    const roots = arr.map(n => Math.sqrt(n).toFixed(2));
    console.log("Square roots:", roots);

    // *** Hard  :

    let arr = [23, 11, 9, 34, 45, 11, 77, 34, 9];

    // 1. Remove duplicates
    arr = [...new Set(arr)];
    console.log("No Duplicates:", arr);

    // 2. Move all even numbers to front, maintain order
    const evens = arr.filter(n => n % 2 === 0);
    const odds = arr.filter(n => n % 2 !== 0);
    arr = [...evens, ...odds];
    console.log("Evens First:", arr);

    // 3. Prefix sums
    const prefixSum = [];
    arr.reduce((acc, curr, i) => prefixSum[i] = acc + curr, 0);
    console.log("Prefix Sum:", prefixSum);

    // 4. Replace last 3 with first 3 primes
    const primes = [2, 3, 5];
    for (let i = 0; i < primes.length && i < 3; i++) {
        arr[arr.length - 3 + i] = primes[i];
    }
    console.log("Primes at End:", arr);

    // 5. Sort only index 3 to 6
    const sortedSection = arr.slice(3, 7).sort((a, b) => a - b);
    arr.splice(3, sortedSection.length, ...sortedSection);
    console.log("Partial Sort (3-6):", arr);

    // 6. Sliding window sum of size 3
    const windowSums = [];
    for (let i = 0; i <= arr.length - 3; i++) {
        windowSums.push(arr[i] + arr[i+1] + arr[i+2]);
    }
    console.log("Sliding Window (3):", windowSums);

    // 7. Longest increasing subarray
    let maxLen = 1, currLen = 1, start = 0, bestStart = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currLen++;
            if (currLen > maxLen) {
                maxLen = currLen;
                bestStart = start;
            }
        } else {
            currLen = 1;
            start = i;
        }
    }
    const longestInc = arr.slice(bestStart, bestStart + maxLen);
    console.log("Longest Increasing Subarray:", longestInc);



</script>
</html>