const ui = ["paper","Scissors","rock"];
const player = document.querySelector('.player-input');
const startBtn = document.querySelector('.start');
const cube = document.querySelector('.cube');
const cube2 = document.querySelector('.cube2');
const result = document.querySelector('.show-result');
const title = document.getElementById('title');
// get a CSS variable
const winnerColor = getComputedStyle(document.documentElement).getPropertyValue('--ai-win');
const tieColor = getComputedStyle(document.documentElement).getPropertyValue('--tie');

startBtn.addEventListener('click', ()=>{

  let count = Math.floor(Math.random() * ui.length);
  const playerValue = player.value.toUpperCase()
  const aivalue = ui[count].toUpperCase();

  if (playerValue === ""){
    alert('enter a value to play');
    return;
  }else if (playerValue !== "PAPER" && playerValue !== "ROCK"  && playerValue !== "SCISSORS"){
    alert('Please enter an correct value to start playing');
    player.value = "";
    return;
  }


    setTimeout(game,5000,aivalue,playerValue);

    hiedInputs();
    setTimeout(showResult,5100);

})

function hiedInputs(){
    cube.style.display = "block";
    cube2.style.display = "block";
    player.classList.add('hide');
    startBtn.classList.add('hide');
    title.classList.add('hide');
}
function showResult(){
    cube.classList.add('hide');
    cube2.classList.add('hide');
    result.classList.remove('show-result');
    result.classList.add('show');
}


function game(aivalue,playerValue){
  if( aivalue === playerValue ){
    result.style.color = tieColor;
    result.innerHTML = "Tie" + " &#128533;";
    restart()
    return;
  }
  else if( aivalue !== playerValue){

       if(aivalue === "PAPER" && playerValue === "SCISSORS"){
          result.innerHTML = "Hey You win!!!" + " &#128512;";
          restart()
        return;
      }
      else if(aivalue === "SCISSORS" && playerValue === "PAPER"){

        result.style.color = winnerColor;
        result.innerHTML = "Ai wins" + " &#128532;";
        restart()
        return;
      }
      else if(aivalue === "ROCK" && playerValue === "PAPER"){
        result.innerHTML = "Hey You win!!!" + " &#128512;";
        restart()
        return;
      }
      else if(aivalue === "PAPER" && playerValue === "ROCK"){
        result.style.color = winnerColor;
        result.innerHTML = "Ai wins" + " &#128532;";
        restart()
        return;
      }
      else if(aivalue === "SCISSORS" && playerValue === "ROCK"){
        result.innerHTML = "Hey You win!!!" + " &#128512;";
        restart()
        return;
      }
      else if(aivalue === "ROCK" && playerValue === "SCISSORS"){
        result.style.color = winnerColor;
        result.innerHTML = "Ai wins"  + " &#128532;";
        restart()
        return;
      }

 }
}
function restart(){
  setInterval(()=>{result.innerHTML +="."},1000);
  setInterval(()=>{window.location.reload()},4000);
}