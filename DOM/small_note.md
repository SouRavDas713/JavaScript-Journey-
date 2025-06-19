const p = document.getElementById("one") ; 
console.dir(p) ; // Here p is a object .... that have many Property ... you can access and Change
p.innerHTML = "World" ; 
p.textContent = "World" ; // if there is only text ; 

==================================================================================
const p = document.getElementsByTagName("p")[0] ; 
p.textContent = "world" ;

document.getElementsByTagName(name) 
document.getElementsByClassName(name)
They Return Like Array HTMLCollection

==================================================================================
const p =  document.querySelector("p") ; 
console.log(p.innerHTML) ; // Hello => return First Apperence
const q = document.querySelectorAll("p") ; 
console.log(q) ; // This is a NodeList [ All Apearence ]

==================================================================================
How To Iterate : 
if HTMLCFollection: 
Array.from || For of || Classican For Loop
if NodeList : 
ForEach || Array.from || For of || Classical For Loop

==================================================================================
Some Example Of How We Change : 

element.innerHTML = "<b>Hello</b>";
element.src = "image.jpg";  // We Can Change Image
element.style.color = "red";
element.setAttribute("href", "https://google.com");
=>
<p id="one">Hello</p>
const p =  document.querySelector("p") ; || document.querySelector("#one")
p.id="five" ; 
console.log(p.id) ; //five

==================================================================================
Creat , Replace  , Delete 

    <p id="one">Mango</p>
    <p id="two">Orange</p>

    //Creat
    let newItem = document.createElement("p") ; 
    newItem.textContent = "Banana" ; 
    newItem.id = "three" ; 
    //Deploy
    document.body.appendChild(newItem) ; 
    //Remove 
    const del = document.getElementById(`${newItem.id}`) ; 
    document.body.removeChild(del) ; 
    //replace 
    const re = document.getElementById('two')
    let newItem2 = document.createElement("p") ; 
    newItem2.textContent = "Pineapple" ;
    document.body.replaceChild(newItem2 , re) ; 

==================================================================================
Basic Form : 

<form id="frm1">
First name: <input type="text" name="fname" value="Donald"><br>
Last name: <input type="text" name="lname" value="Duck"><br><br>
<input type="submit" value="Submit">
</form> 
<p>These are the values of each element in the form:</p>
<p id="output"></p>

const form = document.forms['frm1'] ; 
let text = "" ; 
for(let i = 0 ; i<form.elements.length ; i++)
{
text+=form.elements[i].value+" " ; 
}
document.getElementById('output').textContent = text ;

==================================================================================
Basic Form Validation : 

    <p>Name Must Be UpperCase And Age Must Be 18+</p>
    <form id="frm1">
      <label for="name">Your Name : </label><br>
      <input type="text" id="name" name="name"><br> 
      <label for="age">Your Age : </label><br>
      <input id="age" name="age"><br><br>
      <input type="submit">
    </form>
    <p id="out"></p>


const form = document.forms['frm1'] ;
 form.addEventListener("submit" , function (e){
  e.preventDefault() ; 
 
    const name = form.elements['name'].value ;  // Or form['name].value
    const age = form.elements['age'].value ;
    if(name!=name.toUpperCase())
    {
      alert("Name Upper") ; 
      return ; 
    }
    if(isNaN(age) || age<18)
    {
      alert("Age Gap") ; 
      return ; 
    }
    document.getElementById('out').textContent = `Your Name is ${name} and Your Age is ${age}` ;
 }) ;

 
==================================================================================

Animation : www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3 

 
==================================================================================
EVENT : 

<h2 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
====

document.getElementById("myBtn").onclick = displayDate;

====
    onclick="console.log('Clicked')" 
    onmouseover="console.log('Mouse Over')" 
    onmouseout="console.log('Mouse Out')" 
    onmousedown="console.log('Mouse Down')" 
    onmouseup="console.log('Mouse Up')"

