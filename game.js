const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const timeaud = new Audio();
const jumpaud = new Audio();
const deadaud = new Audio();
timeaud.src = "audio/time.mp3";
jumpaud.src = "audio/jump.mp3";
deadaud.src = "audio/dead.mp3";
let msg = document.getElementById('msg');
let score = document.getElementById('score');
let a = 0; // user score
let b = 3;  // 3seconds timeout


document.addEventListener('keypress', function(e){
    if(e.keyCode == 13){  //Enter keycode
        // on click enter game will start in 3seconds.
        setInterval(() => {
                if(b>0){
                    msg.innerHTML = `Game will start in ${b--}sec`;
                    timeaud.play();
                }
                else {
                    msg.innerHTML = "Game Started";
                }
            }, 1000);
        setTimeout(() => {
            rock.classList.add('rockanimation');
            let res = setInterval(() => {
                // user score to display
                score.innerHTML = `Score : ${a++}`;
                }, 100);
        }, 4000);
    }
});

document.addEventListener('keydown', function(e){
  if(e.keyCode == 32){  // spacebar keycode
      jumpaud.play();
      jump();
  }
});

// to check whether dino isAlive or not
    let dinoAlive = setInterval(() => {
         // y position of dino
        let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        // console.log(dinotop); 
        
        // x position of rock
        let rockleft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
        // console.log(rockleft); 
        
        // check collision according to media screen
            if(dinotop >= 310 && dinotop >= 310 && rockleft < 60 && rockleft>0){
                deadaud.play();
                alert(`Game Over Your ${score.innerText} Restart again`);
                window.location.reload();
            }           
        
}, 10);

function jump(){
    dino.classList.add('dinojump');
// setTimeout function to remove function after 3s when jump completes.
    setTimeout(() => {
        dino.classList.remove('dinojump');
    }, 300);
}

