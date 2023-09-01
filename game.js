const user_buttons = document.querySelector(".logos")
let user_img = document.getElementById("you_img")
const compHandElem = document.getElementById("hand-computer");
let us_score = document.getElementById("you-score")
let comps_score = document.getElementById("comp-score")
let message = document.getElementById("message")
let gameo = document.querySelector("#gameover")
let playAgainBtn = document.querySelector('#play-again')
let user_score = 0
let comp_score = 0;

const imgSrcOptions = [
  `<img class="hands" src="./assets/rock-hand.png" alt="">`,

  `<img class="hands" src="./assets/paper-hand.png" alt="">`,

  `<img class="hands" src="./assets/scissors-hand.png" alt="">`

];

const clicks = (e)=>{
  showhands(e.target.id)
};

user_buttons.addEventListener("click",clicks)

function randomHand(){
  return Math.floor(Math.random()*3)
}

function showhands(id){
  const randomIndex = randomHand();

  if(id == "rock"){
    user_img.innerHTML =  imgSrcOptions[0]   
    compHandElem.innerHTML = imgSrcOptions[randomIndex]
  }if(id == "paper")
  {
    user_img.innerHTML =  imgSrcOptions[1]   
    compHandElem.innerHTML = imgSrcOptions[randomIndex]
  }else if(id == "scissors")
  {
    user_img.innerHTML =  imgSrcOptions[2]   
    compHandElem.innerHTML = imgSrcOptions[randomIndex]
  }
  result()
}


function result(){
  if (user_img.innerHTML == compHandElem.innerHTML){
 

  }else if(compHandElem.innerHTML == imgSrcOptions[0] && user_img.innerHTML == imgSrcOptions[1] ||
    compHandElem.innerHTML == imgSrcOptions[1] && user_img.innerHTML == imgSrcOptions[2] ||
    compHandElem.innerHTML == imgSrcOptions[2] && user_img.innerHTML == imgSrcOptions[0]){
      comp_score++
      comps_score.innerText = comp_score

  }
  else if(user_img.innerHTML == imgSrcOptions[0] && compHandElem.innerHTML == imgSrcOptions[1] ||
    user_img.innerHTML == imgSrcOptions[1] && compHandElem.innerHTML == imgSrcOptions[2] ||
    user_img.innerHTML == imgSrcOptions[2] && compHandElem.innerHTML == imgSrcOptions[0]){
      user_score++
      us_score.innerText = user_score
    }
    gameover()

            
}

function gameover(){
  if (user_score ==5 && user_score > comp_score) message.innerHTML = "You won the game"
  else if(comp_score == 5 && comp_score > user_score) message.innerHTML = "Computer won the game"
  else if(user_score >= 5 && user_score == comp_score) message.innerHTML = "Its a draw"
  if (user_score == 5 || comp_score == 5) {
 
    user_buttons.removeEventListener("click", clicks)
    gameo.style.visibility = "visible";
    user_buttons.style.visibility = "hidden";
    playAgainBtn.addEventListener("click", () => {
        location.href = "game.html"})
    
  } 
}