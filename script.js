function randint(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

let choice= 0;
let gene1 = "";
let gene2 = "";

function genotypeMaker(letter1, letter2){
  choice = randint(1,4);
  let gene = "";
  if(choice == 1){
    gene = letter1 + letter1;
  }else if(choice == 2){
    gene = letter2 + letter2;
  }else{
    gene = letter2 + letter1;
  } 

  return gene;
}

cross1="";
cross2="";
cross3="";
cross4="";

function displayGene(gene1, gene2){
  document.getElementById("geneCross").innerText = (gene1 + " x " + gene2).replaceAll(",","");

  document.getElementById("alleleA1").innerText = gene1[0];
  document.getElementById("alleleA2").innerText = gene1[1];
  document.getElementById("alleleB1").innerText = gene2[0];
  document.getElementById("alleleB2").innerText = gene2[1];

  document.getElementById("cross1").value = "";
  document.getElementById("cross2").value = "";
  document.getElementById("cross3").value = "";
  document.getElementById("cross4").value = "";

  cross1 = (gene1[0] + gene2[0]);
  cross2 = (gene1[1] + gene2[0]);
  cross3 = (gene1[0] + gene2[1]);
  cross4 = (gene1[1] + gene2[1]);
  document.getElementById("punnettWork").style.display = "block";

  document.getElementById("generatorBtn").style.display = "none";
  document.getElementById("check").style.display = "block";
  document.getElementById("message").innerText = "";
}

function generateGene(){
  let letters=["a","b","d","e","f","g","h","i","j","l","m","n","q","r","t","y"];

  let letter1 = letters[randint(0,19)];
  let letter2 = letter1.toUpperCase();
  gene1 = genotypeMaker(letter1, letter2);
  gene2 = genotypeMaker(letter1, letter2);
  orderify = [gene1, gene2].sort()
  gene1 = orderify[0].toString();
  gene2 = orderify[1].toString();
  displayGene(gene1, gene2);
}

function generateIncomplete(){
  letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let letter1 = letters[randint(0,26)]
  let letter2 = letters[randint(0,26)]
  choice = randint(1,4);
  gene1 = genotypeMaker(letter1, letter2);
  gene2 = genotypeMaker(letter1, letter2);
  displayGene(gene1, gene2);
}

function generateSexLinked(){
  let chromos = [["ᴬ","ᵃ"], ["ᴮ", "ᵇ"], ["ᴰ", "ᵈ"], ["ᴱ", "ᵉ"]]
  let pair = chromos[randint(0,4)]
  let xType = genotypeMaker("X" + pair[0], "X"+ pair[1]).split("");
  xType = [[xType[0], xType[1]].join(""), [xType[2], xType[3]].join("")];
  let yType = genotypeMaker("X" + pair[randint(0,2)], "X" + pair[randint(0,2)]).split("");
  yType[2] = "Y";
  yType = [[yType[0],yType[1]].join(""), [yType[2], yType[3]].join("")];
  console.log(xType + " " + yType);
  displayGene(xType, yType);
}

function generateBloodType(){
  let alleles = ["Iᴬ", "Iᴮ", "i"];
  let bloodGene1 = [alleles[randint(0,3)], alleles[randint(0,3)]].sort();
  let bloodGene2 = [alleles[randint(0,3)], alleles[randint(0,3)]].sort();
  displayGene(bloodGene1, bloodGene2)
}

function check(){
  let message = document.getElementById("message")
  let fullCorrect = "true";
  let inverse1 = cross1[1] + cross1[0];
  let inverse2 = cross2[1] + cross2[0];
  let inverse3 = cross3[1] + cross3[0];
  let inverse4 = cross4[1] + cross4[0];
  if(document.getElementById("cross1").value != cross1 && document.getElementById("cross1").value != inverse1){
    fullCorrect = "false";
    console.log("Cross 1: Got " + document.getElementById("cross1").value + ". Expected " + cross1+ ".");  
  }

  if(document.getElementById("cross2").value != cross2 && document.getElementById("cross2").value != inverse2){
    fullCorrect = "false";
    console.log("Cross 2: Got " + document.getElementById("cross2").value + ". Expected " + cross2+ ".");  
  }

  if(document.getElementById("cross3").value != cross3 && document.getElementById("cross3").value != inverse3){
    fullCorrect = "false";
    console.log("Cross 3: Got " + document.getElementById("cross3").value + ". Expected " + cross3+ ".");  
  }

  if(document.getElementById("cross4").value != cross4 && document.getElementById("cross4").value != inverse4){
    fullCorrect = "false";
    console.log("Cross 4: Got " + document.getElementById("cross4").value + ". Expected " + cross4+ ".");  
  }

  if(fullCorrect == "true"){
    message.innerText = "Correct!";
    message.style.color = "green";
    document.getElementById("generatorBtn").style.display = "block";
    document.getElementById("check").style.display = "none";
  }else{
    message.innerText = "Try again.";
    message.style.color = "red";
  }
}

//

function directToSimpleDom(){
  window.location.replace("index.html");
}

function directToCoDom(){
  window.location.replace("codominance.html")
}

function directToSexLinked(){
  window.location.replace("sexlinked.html");
}

function directToBlood(){
  window.location.replace("bloodtype.html");
}