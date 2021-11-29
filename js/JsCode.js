//For the picture of the rat
function changeCorner(xxx) {
  document.getElementById("BrownRodent").style.borderRadius = xxx;
}

//For the advanced JS, it simulates a dice roll
function randomize() {
  //Looks for and choose a number between 1 and 6, then checks the result
  var diceface = Math.floor(Math.random() * 6 + 1);
  document.getElementById("check").innerHTML = diceface;
  //Then with used result, it looks for the corresponding dice .jpg
  //associated with said number
  var diceNum = "Week12/images/diceImgs/dice" + diceface + ".jpg";
  document.getElementById("theDice").src = diceNum;
}
