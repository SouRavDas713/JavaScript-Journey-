
    =========== Syntext ==============================================================


    const text = "I Love JS" ; 
    console.log(text) ; 

    const text = "I love Js .\nAnd This is New Line" ; 
    console.log(text) ; 

    const text = "My Name X . But \"Y\" is also name"  ; 
    console.log(text) ;  // output : My Name X . But "Y" is also name
    
    const text = "I love Js " + 
    "And This is New Line" ; 
    console.log(text) ; 




    =========== Method =====================================================================



    const text = "Hello Bangladesh" ; 
    console.log(text) ; 

    console.log(text.length) ; 

    console.log(text[0]) ; // H

    console.log(text.slice(0 , 9)) ; 
    // Hello Ban

    console.log(text.slice(-10 , -4)) ;
     // Bangla

    console.log(text.substring(0,9)) ; 
    // Hello Ban

    console.log(text.substring(6)) ;  
    // Bangladesh

    //Substr => ( start , how many )
    console.log(text.substr(6 , 5)) ; 
    // Bangl

    console.log(text.toUpperCase()) ; 
    console.log(text.toLowerCase()) ;

    const text2 = "     Hello    " 
    const text3 = text2.trim() ; // removes whitespace from both sides
    console.log(text3) ; // Hello


    let name = "My name is Sourav" ; 
    let newName = name.replace("Sourav" , "MoonStone") ; 
    console.log(newName) ; //My name is MoonStone


    //String To Array By Split

    let text = "one two three" ; 
    let arr = text.split(" ") ; 
    console.log(arr) ; 

    let text2 = "one , two ,  three" ; 
    let arr2 = text2.split(",") ; 
    console.log(arr2) ; 

    const name = "W3Schools";
    let letter = name.at(2); // S
    let letter = name.at(-2); // l


    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);
    console.log(text3) ; // Hello World

    let numb = 5;
    let text = numb.toString();
    let padded = text.padStart(4,"0");

    // It pads a string with another string (multiple times) until it reaches a given length.
    let numb = 5;
    let text = numb.toString();
    let padded1 = text.padStart(4,"0");
    let ans = padded1 ; 
    ans = ans.padEnd(7 , "0") ;  
    console.log(ans) ; // 0005000



    =========== Search Method ================================================================================




    let text = "I Love Js But Its Hard Js" ; 
    console.log(text.indexOf("JS")) ; // -1 ;
    console.log(text.indexOf("Js")) // 7

    console.log(text.lastIndexOf("Js")) // 23 
    console.log(text.indexOf("Js" , 10)) //Means Search after 10th index Ans = 23 ; 
    console.log(text.search("Js")) ; //Return 7 

    //Return array how many Match
    let text = "I Love Js But Its Hard Js" ; 
    console.log(text.match("Js")) ; // [ 'Js', index: 7, input: 'I Love Js But Its Hard Js', groups: undefined ]
    console.log(text.match(/Js/g)); // → [ 'Js', 'Js' ]

    console.log(text.includes("Love")) // true 
    console.log(text.includes("Love" , 5 )) // false

    console.log(text.startsWith("Love")) // False
    console.log(text.startsWith("Love" , 2)) // True
    console.log(text.startsWith("I")) // true  
    //Javascript Only Go Left -> right 
    console.log(text.endsWith("Love" , 6)) // True
    console.log(text.endsWith("Love" , 10)) // Flase { index 0 to 10 ends wuth Js } 






    =========== String Templete ==============================================================================

   
    //Templete Litarel

    let firstName = "John";
    let lastName = "Doe";
    let text = `Welcome ${firstName}, ${lastName}!`;


    let text = `I'am Good` ; 
    let text2 = `I'm a Student
    Also A * `
    console.log(text2) ; // print as i input 
    // this is useful 

    //InterPolation
    let x = 'sourav' ; 
    let out = `Hi ! My Name is ${x} . ` ; 
    console.log(out) ; 
    let otherWay = "Hi ! My Name is " + x  ; 
    console.log(otherWay) ; 
    
    ===================== *** Problem Solve *** ==========================================

    *** Easy : 
    ===============================

    Create a string "JavaScript is fun" and print it
    Check the length of a string
    Access first, last, and middle character using indexing
    Convert string to uppercase and lowercase (.toUpperCase(), .toLowerCase())
    Extract a word using .slice(start, end)
    Check if includes a word (.includes("fun"))
    Find the index of a word or character (.indexOf("a"), .lastIndexOf("a"))
    Replace "fun" with "awesome" (.replace("fun", "awesome"))

    *** Answer : 
    ================================== 
    let str = "JavaScript is fun";                 // Create string
    console.log(str);                              // Print

    console.log(str.length);                       // Check length

    console.log(str[0]);                           // First character
    console.log(str[str.length - 1]);              // Last character
    console.log(str[Math.floor(str.length / 2)]);  // Middle character

    console.log(str.toUpperCase());                // Uppercase
    console.log(str.toLowerCase());                // Lowercase

    console.log(str.slice(0, 10));                 // Extract "JavaScript"

    console.log(str.includes("fun"));              // Check if includes "fun"

    console.log(str.indexOf("a"));                 // First index of "a"
    console.log(str.lastIndexOf("a"));             // Last index of "a"

    console.log(str.replace("fun", "awesome"));    // Replace "fun" with "awesome"


    ==========================================================================

    *** Mid : 
   ==================================
    Trim whitespaces from both ends (.trim())
    Repeat the string 3 times (.repeat(3))
    Split the string into words (.split(" "))
    Check if the string starts or ends with certain word (.startsWith(), .endsWith())
    Pad string at start or end (.padStart(), .padEnd())
    Count how many times a character appears (loop or regex)
    Reverse a string manually


    
    *** Sol : 
    ==================================

    let str = "   JavaScript is fun   ";
    console.log(str.trim());                     // Trim whitespaces

    let cleanStr = str.trim();
    console.log(cleanStr.repeat(3));             // Repeat 3 times

    console.log(cleanStr.split(" "));            // Split into words

    console.log(cleanStr.startsWith("Java"));    // Check start
    console.log(cleanStr.endsWith("fun"));       // Check end

    console.log(cleanStr.padStart(25, "*"));     // Pad at start
    console.log(cleanStr.padEnd(25, "-"));       // Pad at end

    // Count how many times 'a' appears
    let count = 0;
    for (let char of cleanStr) {
    if (char === 'a') count++;
    }
    console.log(count);                          // Count of 'a'

    // Reverse the string manually
    let reversed = "";
    for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversed += cleanStr[i];
    }
    console.log(reversed);                       // Reversed string


    ========================================================================================

    *** Hard : 
   ==================================

    Capitalize first letter of each word (like a title)
    Count vowels and consonants
    Check if a string is a palindrome
    Remove duplicate characters from a string
    Find the most frequent character
    Compress repeated characters (e.g., "aaabb" → "a3b2")
    Convert "this-is-a-test" to "This Is A Test"



    *** Sol : 
    ==================================

    let str = "javascript is fun";

    // Capitalize first letter of each word
    let title = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    console.log(title);  // "Javascript Is Fun"

    // Count vowels and consonants
    let vowels = "aeiouAEIOU";
    let v = 0, c = 0;
    for (let char of str) {
    if (/[a-z]/i.test(char)) {
        if (vowels.includes(char)) v++;
        else c++;
    }
    }
    console.log("Vowels:", v, "Consonants:", c);


    // Check if string is a palindrome
    let text = "madam";
    let isPalindrome = text === text.split("").reverse().join("");
    console.log(isPalindrome); // true


    // Remove duplicate characters
    let input = "aabbccdde";
    let unique = "";
    for (let char of input) {
    if (!unique.includes(char)) unique += char;
    }
    console.log(unique); // "abcde"


    // Find most frequent character
    let freq = {};
    for (let char of input) {
    freq[char] = (freq[char] || 0) + 1;
    }
    let maxChar = '';
    let maxCount = 0;
    for (let char in freq) {
    if (freq[char] > maxCount) {
        maxCount = freq[char];
        maxChar = char;
    }
    }
    console.log("Most frequent:", maxChar, "-", maxCount);

    
    // Compress repeated characters
    let comp = "";
    let count = 1;
    for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) count++;
    else {
        comp += input[i] + count;
        count = 1;
    }
    }
    console.log(comp); // a2b2c2d2e1

    // Convert "this-is-a-test" → "This Is A Test"
    let dashStr = "this-is-a-test";
    let converted = dashStr.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    console.log(converted); // "This Is A Test"