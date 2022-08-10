function one() {
  let one = document.getElementById("one");
  let display = document.getElementById("display");
  display.innerHTML += one.innerHTML;
  console.log("running..");
}

function two() {
  let two = document.getElementById("two");
  let display = document.getElementById("display");
  display.innerHTML += two.innerHTML;
  console.log("running..");
}

function three() {
  let three = document.getElementById("three");
  let display = document.getElementById("display");
  display.innerHTML += three.innerHTML;
  console.log("running..");
}

function four() {
  let four = document.getElementById("four");
  let display = document.getElementById("display");
  display.innerHTML += four.innerHTML;
  console.log("running..");
}

function five() {
  let five = document.getElementById("five");
  let display = document.getElementById("display");
  display.innerHTML += five.innerHTML;
  console.log("running..");
}

function six() {
  let six = document.getElementById("six");
  let display = document.getElementById("display");
  display.innerHTML += six.innerHTML;
  console.log("running..");
}

function seven() {
  let seven = document.getElementById("seven");
  let display = document.getElementById("display");
  display.innerHTML += seven.innerHTML;
  console.log("running..");
}

function eight() {
  let eight = document.getElementById("eight");
  let display = document.getElementById("display");
  display.innerHTML += eight.innerHTML;
  console.log("running..");
}

function nine() {
  let nine = document.getElementById("nine");
  let display = document.getElementById("display");
  display.innerHTML += nine.innerHTML;
  console.log("running..");
}

function zero() {
  let zero = document.getElementById("zero");
  let display = document.getElementById("display");
  display.innerHTML += zero.innerHTML;
  console.log("running..");
}

/*Operations*/
function plus() {
  let plus = document.getElementById("plus");
  let display = document.getElementById("display");
  if (display.innerHTML == "+") {
    alert("Plus is already there you dumb fuck");
  } else if (display.innerHTML != "+") {
    display.innerHTML += plus.innerHTML;
  } else {
    alert("Plus is already there you dumb fuck");
  }
  console.log("running..");
}

function minus() {
  let minus = document.getElementById("minus");
  let display = document.getElementById("display");
  if (display.innerHTML == "-") {
    alert("Minus is already there you dumb fuck");
  } else if (display.innerHTML != "-") {
    display.innerHTML += minus.innerHTML;
  } else {
    alert("Minus is already there you dumb fuck");
  }
  console.log("running..");
}

function mul() {
  let mul = document.getElementById("mul");
  let display = document.getElementById("display");
  if (display.innerHTML == "*") {
    alert("multiply symbol is already there you dumb fuck");
  } else if (display.innerHTML != "*") {
    display.innerHTML += mul.innerHTML;
  } else {
    alert("mul is already there you dumb fuck");
  }
  console.log("running..");
}

function divide() {
  let divide = document.getElementById("divide");
  let display = document.getElementById("display");
  if (display.innerHTML == "/") {
    alert("divide symbol is already there you dumb fuck");
  } else if (display.innerHTML != "/") {
    display.innerHTML += divide.innerHTML;
  } else {
    alert("divide is already there you dumb fuck");
  }
  console.log("running..");
}

function modular() {
  let modular = document.getElementById("modular");
  let display = document.getElementById("display");
  if (display.innerHTML == "%") {
    alert("modular symbol is already there you dumb fuck");
  } else if (display.innerHTML != "%") {
    display.innerHTML += modular.innerHTML;
  } else {
    alert("modular is already there you dumb fuck");
  }
  console.log("running..");
}

function deleteAll() {
  let result = document.getElementById("result");
  let display = document.getElementById("display");
  if (display.innerHTML == "") {
    alert("Nothing is there you dumb fuck!");
  } else if (display.innerHTML != "") {
    display.innerHTML = "";
  } else {
    alert("Nothing is there you dumb fuck!");
  }

  if (result.innerHTML == "") {
  } else if (result.innerHTML != "") {
    result.innerHTML = "";
  } else {
  }
}

/*Calculation Function */
function calculation() {
  let displayContent = document.getElementById("display").innerHTML;

  let displayArray = displayContent.split();

  // for(let i = 0; i < displayArray.length; i++){
  //   console.log(displayArray[i]);
  //   if(displayArray[i] == displayArray[i + 1]){
  //     alert('Please write the operators properly.')
  //   }
  // }

  if (displayContent == "") {
    let result = document.getElementById("result");
    result.innerHTML = "";
  } else {
    let calculatedResult = eval(displayContent);
    result.innerHTML = calculatedResult;
  }
}
