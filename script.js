function setGreeting() {

   let now = new Date(); //built in class in Javascript
    console.log("i am printing now " +  now.getHours());

    let hours = now.getHours();
    //Good morning <12
    //Good afternoon <18
    //Good evening otherwise

    let greeting;
    if (now.getHours() < 12) {
    greeting ="Good morning"; 
    }
    else if (now.getHours() < 18) {
        greeting = "Good afternoon";
    }
     else {
        greeting = "Good evening";
    }

    console.log(greeting);
    document.getElementById("greetingOutput").textContent = greeting;
}

window.onload = function() {
        setGreeting();
}

function setButtonText() {
        document.getElementById("buttonClickText").textContent = "The Time is ";

}
function setButtonTextForDate() {
    let now = new Date();
        document.getElementById("buttonClickTextForDate").textContent = now.toLocaleDateString();
}

function addNumbers() {
    let num1 = document. getElementById("num1").value;
    let num2 = document. getElementById("num2").value;
    let result = num1 + num2;

    document.getElementById("numericValuesOutput").textContent = result;

}
