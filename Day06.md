

// ========= Validation API -> W3School

KeyWord : validity | validationMessage 

<h2>JavaScript Validation</h2>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">OK</button>

<p>If the number is less than 100 or greater than 300, an error message will be displayed.</p>

<p id="demo"></p>

<script>
function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) 
  {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } 
  else
  {
    document.getElementById("demo").innerHTML = "Input OK";
  } 
} 
</script>

What if We Want Custom Messege : 

if (document.getElementById("id1").validity.rangeOverflow) 
{
    text = "Value too large";
}

Or 
if (document.getElementById("id1").validity.rangeOverflow) 
{
    inputObj.setcustomValidity("Hello ... ") ;
}

// ==================================== *** History API : 

 

<button onclick="myFunction()">Go Back</button>
// + forward - backward 

function goBack() {
      window.history.back();
    }

    function goForward() {
      window.history.forward(); 
    }

    function goSteps(n) {
      window.history.go(n); // use negative for back, positive for forward
    }

    function showHistoryLength() {
      alert("Number of pages in history: " + window.history.length);
    } 

    // ==================================== *** Storage API : 

    //Local -> lifelong 
    //Session -> Untill Close
    
    localStorage.setItem("name", "John Doe");
    localStorage.getItem("name");
    sessionStorage.getItem("name");
    sessionStorage.setItem("name", "John Doe");

    clear()	Empty all key out of the storage
    removeItem(keyname)