
let fruits = ["g Spaghetti oder andere Pasta","g Tomaten, gehackt","g Parmesan","ml Sahne","Stk. kleine Zwiebel","Stk. Knoblauchzehen", "EL Olivenöl","EL Butter", "kleine(r) EL Zucker", "g Basilikum", "kleine(r) EL Salz und Pfeffer"];
let amount = [250, 150, 90, 150, 1, 2, 2, 2, 1, 50, 1];

function AddPortion() {
 let valuePortion = document.getElementById('valuePortion').value;  
 let recipe1 = document.getElementById("recipe1");
 let needed = document.getElementById("needed");
 
  if (valuePortion.length <= 0) {
    needed.innerHTML = "Die Menge muss mindestens 1 Portion enthalten!";
  } else if (valuePortion < 1 || isNaN(valuePortion)) {
    needed.innerHTML = "Die Menge muss mindestens 1 Portion enthalten!";
  } else {


    needed.innerHTML = '';
    recipe1.innerHTML ='';

    
    for (let index = 0; index < amount.length; index++) {
      let result = valuePortion * amount[index];
      recipe1.innerHTML += `<div class="outlineBg outlineBg2"> ${result} ${fruits[index]} </div>`;
      }
  }
}











