function realpic() {
const id = Math.floor( ( Math.random() * 6 + 1 ) *10000);
console.log(id);
return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

const fakePic = "https://thispersondoesnotexist.com/";

const imgcontainer = document.getElementById("images");
const resultcontainer = document.getElementById("result");

function draw() {
resultcontainer.innerHTML="";
imgcontainer.innerHTML="";
  const resetBTN =document.createElement("button");
  resetBTN.innerHTML = "play again"
 
  resetBTN.onclick =draw; 
  const rnd = Math.random() > 0.5
  const arr = [rnd, !rnd];

for(const isReal of arr){
  const img1 = document.createElement("img");
  img1.src = isReal ? realpic() : fakePic;

img1.onclick = function(){
  if(isReal){
    resultcontainer.innerHTML = "correct😊"
  }
  else{
    resultcontainer.innerHTML = "incorrect😢😭😟😞💔😿😥😓";
  }
resultcontainer.appendChild(resetBTN);
}


  imgcontainer.appendChild(img1); 

}
}
draw();