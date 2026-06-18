const screen = document.getElementById("screen");
let lastasn = "0";

document.addEventListener("keydown", function(event) {
  if ("0123456789+-*/^".includes(event.key)) {
    numbers(event.key);
  }
  
  if (event.key === "Enter") {
    result();
  } 
  
  if (event.key === "Backspace") {
    deletes();
  } 
});

function numbers(num) {
  
  if (screen.value == "" || num == 'ANS') {
     
     if ( num == '+' || num == '*' || num == '/' || num == '^') {
   return;
 } 
 
 if (num == 'ANS') {
   if (screen.value.at(-1) == "+" || screen.value.at(-1) == "-" || screen.value.at(-1) == "/" || screen.value.at(-1) == "*" || screen.value.at(-1) == "^" ||  screen.value == "") {
     screen.value += lastasn;
     return;
   } else {
     return;
   }
 }
  }
  
  

    screen.value += num;
}

function clears(i) {
  if (i == 1) {
    screen.value = "";
  } else {
    document.getElementsByClassName('logs')[0].innerHTML = `    <div>
      <h5>Logs Will be here :</h5>
      <button onclick="clears(2)">clear</button>
    </div>`;
  }

}

function deletes() {
 screen.value = screen.value.slice(0, -1);
}

function result() {
  if (screen.value.includes("/0")) {
    document.getElementsByClassName('logs')[0].innerHTML += `<h5>It cannot be divided by zero.</h5>`;
    return;
  }
  
  try {
      let result = screen.value.replace(/\^/g, "**");
  result = result.replace(/ANS/g, lastasn);
  result = result.replace(/√\(/g, "Math.sqrt(");
  result = result.replace(/(\d+)%/g, "($1/100)");
  lastasn = eval(result);
  screen.value = eval(result);
  document.getElementsByClassName('logs')[0].innerHTML += `<h5>${eval(result)}</h5>`;
  } catch (e) {
    document.getElementsByClassName('logs')[0].innerHTML += `<h5>${e.message}</h5>`;
  }

}