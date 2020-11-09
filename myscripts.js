//add Number to input
document.getElementById("period").addEventListener("click",function sendId(){getDataFromButton("period")});
document.getElementById("0").addEventListener("click",function sendId(){getNumberFromButton("0")});
document.getElementById("1").addEventListener("click",function sendId(){getNumberFromButton("1")});
document.getElementById("2").addEventListener("click",function sendId(){getNumberFromButton("2")});
document.getElementById("3").addEventListener("click",function sendId(){getNumberFromButton("3")});
document.getElementById("4").addEventListener("click",function sendId(){getNumberFromButton("4")});
document.getElementById("5").addEventListener("click",function sendId(){getNumberFromButton("5")});
document.getElementById("6").addEventListener("click",function sendId(){getNumberFromButton("6")});
document.getElementById("7").addEventListener("click",function sendId(){getNumberFromButton("7")});
document.getElementById("8").addEventListener("click",function sendId(){getNumberFromButton("8")});
document.getElementById("9").addEventListener("click",function sendId(){getNumberFromButton("9")});

//add function to simple button

document.getElementById("reset").addEventListener("click",resetInput);
document.getElementById("divide").addEventListener("click",function sendId(){getDataFromButton("divide")});
document.getElementById("multiply").addEventListener("click",function sendId(){getDataFromButton("multiply")});
document.getElementById("subtract").addEventListener("click",function sendId(){getDataFromButton("subtract")});
document.getElementById("plus").addEventListener("click",function sendId(){getDataFromButton("plus")});
document.getElementById("openParenthesis").addEventListener("click",function sendId(){getDataFromButton("openParenthesis")});
document.getElementById("closeParenthesis").addEventListener("click",function sendId(){getDataFromButton("closeParenthesis")});
document.getElementById("percent").addEventListener("click",function sendId(){getDataFromButton("percent")});
document.getElementById("equals").addEventListener("click",result);

function getNumberFromButton(getId) {
      let valueNumber = document.getElementById(getId).value;
      document.getElementById("inputNumber").value = document.getElementById("inputNumber").value + valueNumber;
};

function getDataFromButton(getID){
      let typeOfNumber = getID;
      switch (typeOfNumber) {
            case "period":
                  document.getElementById("inputNumber").value = document.getElementById("inputNumber").value + ".";
                  break;
            case "divide":
                        document.getElementById("inputNumber").value = document.getElementById("inputNumber").value + "/";
                        break;
            case "multiply":
                  document.getElementById("inputNumber").value = document.getElementById("inputNumber").value + "*";
            break;
            case "subtract":
                  document.getElementById("inputNumber").value = document.getElementById("inputNumber").value + "-";
            break;
            case "plus":
                  document.getElementById("inputNumber").value = document.getElementById("inputNumber").value + "+";
            break;
            case "openParenthesis":
                  document.getElementById("inputNumber").value = document.getElementById("inputNumber").value + "(";
            break;
            case "closeParenthesis":
                  document.getElementById("inputNumber").value = document.getElementById("inputNumber").value + ")";
            break;
            case "percent":
                  document.getElementById("inputNumber").value = document.getElementById("inputNumber").value + "%";
            break;
            default:
                  break;
      }
}

function resetInput(){
      document.getElementById("inputNumber").value = "";
};

function result(){
      document.getElementById("inputNumber").value = eval(document.getElementById("inputNumber").value);
}