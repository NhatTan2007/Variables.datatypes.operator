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
      let radius = parseFloat(document.getElementById("radius").value)
      let circuit = parseFloat((radius*2*Math.PI).toFixed(1));
      let area = parseFloat((radius**2*Math.PI).toFixed(1));
      document.getElementById("circuit").innerHTML = circuit;
      document.getElementById("area").innerHTML = area;
}
