// var scoreMath= document.getElementById(id="scoreMath").innerHTML = prompt("Nhập điểm Toán:");
// while (parseFloat(scoreMath) > 10 || parseFloat(scoreMath) < 0) {
//       scoreMath= document.getElementById(id="scoreMath").innerHTML = prompt("Nhập điểm Toán:")
// }
// var scorePhysics = document.getElementById(id="scorePhysics").innerHTML = prompt("Nhập điểm Lý:");
// while (parseFloat(scorePhysics) > 10 || parseFloat(scorePhysics) < 0) {
//       scorePhysics = document.getElementById(id="scorePhysics").innerHTML = prompt("Nhập điểm Lý:");
// }
// var scoreChemistry = document.getElementById(id="scoreChemistry").innerHTML = prompt("Nhập điểm Hóa:");
// while (parseFloat(scoreChemistry) > 10 || parseFloat(scoreChemistry) < 0) {
//       scoreChemistry = document.getElementById(id="scoreChemistry").innerHTML = prompt("Nhập điểm Hóa:");
// }
// scoreMath = parseFloat(parseFloat(scoreMath).toFixed(1));
// scorePhysics = parseFloat(parseFloat(scorePhysics).toFixed(1));
// scoreChemistry = parseFloat(parseFloat(scoreChemistry).toFixed(1));
// document.getElementById("calculator").addEventListener("click",caculatorAverageScore);

// function caculatorAverageScore(){
//       document.getElementById(id="averageScore").innerHTML = ((scoreMath + scorePhysics + scoreChemistry)/3).toFixed(1);
// }

document.getElementById("calculator").addEventListener("click",calculator);
function calculator(){
      let numberOfCurrency = parseFloat(document.getElementById("numberOfCurrency").value);
      let fromCurrency = document.getElementById("fromCurrency").value;
      let toCurrency = document.getElementById("toCurrency").value;
      let rateChange = document.getElementById("rateChange").textContent;
      let amountChange = numberOfCurrency*rateChange;
      document.getElementById("amountChange").innerHTML = amountChange;

}
      document.getElementById("fromCurrency").addEventListener("change",getRateChange);
      document.getElementById("toCurrency").addEventListener("change",getRateChange);
function getRateChange(){
      let fromCurrency = document.getElementById("fromCurrency").value;
      let toCurrency = document.getElementById("toCurrency").value;
      //from VND
      if (fromCurrency == "vnd") {
            switch (toCurrency) {
                  case "usd":
                        document.getElementById("rateChange").innerHTML = 0.000043;
                        break;
                  case "eur":
                        document.getElementById("rateChange").innerHTML = 0.000037;
                        break;
                  case "cny":
                        document.getElementById("rateChange").innerHTML = 0.00029;
                        break;
                  case "vnd":
                        document.getElementById("rateChange").innerHTML = 1;
                        break;
            }
            
      }
      //from USD
      if (fromCurrency == "usd") {
            switch (toCurrency) {
                  case "usd":
                        document.getElementById("rateChange").innerHTML = 1;
                        break;
                  case "eur":
                        document.getElementById("rateChange").innerHTML = 0.85;
                        break;
                  case "cny":
                        document.getElementById("rateChange").innerHTML = 6.63;
                        break;
                  case "vnd":
                        document.getElementById("rateChange").innerHTML = 23.176;
                        break;
            }
            
      }
      //from EUR
      if (fromCurrency == "eur") {
            switch (toCurrency) {
                  case "usd":
                        document.getElementById("rateChange").innerHTML = 1.18;
                        break;
                  case "eur":
                        document.getElementById("rateChange").innerHTML = 1;
                        break;
                  case "cny":
                        document.getElementById("rateChange").innerHTML = 7.84;
                        break;
                  case "vnd":
                        document.getElementById("rateChange").innerHTML = 27432;
                        break;
            }
            
      }
      //from CNY
      if (fromCurrency == "cny") {
            switch (toCurrency) {
                  case "usd":
                        document.getElementById("rateChange").innerHTML = 0.15;
                        break;
                  case "eur":
                        document.getElementById("rateChange").innerHTML = 0.13;
                        break;
                  case "cny":
                        document.getElementById("rateChange").innerHTML = 1;
                        break;
                  case "vnd":
                        document.getElementById("rateChange").innerHTML = 3497;
                        break;
            }
            
      }
};
