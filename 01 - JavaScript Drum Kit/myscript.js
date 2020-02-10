// const keys = document.querySelectorAll(".key");
// keys.forEach((key) => {
//     key.addEventListener("click", 
//     () => 
//     {
//         document.querySelector(`audio[data-key="${key.getAttribute("data-key")}"]`).play();
//         //document.querySelector('audio[data-key="' + key.getAttribute("data-key") + '"]').play();
//     }
//     );
//     //try with ` $
// });

// console.log('sss');
// const keys = document.querySelectorAll(".key");
// keys.forEach(key => {
//     document.addEventListener("keydown", (event) => {
//         //console.log(''+event.code+' '+key.querySelector('kbd').textContent);
//         if(event.code==(`Key${key.querySelector('kbd').textContent}`))
//         {
//             key.classList.toggle('playing');
//             //cument.querySelector(`audio[data-key="${key.getAttribute("data-key")}"]`).currentTime=0
//                 //also lets you play multiple times
//             document.querySelector(`audio[data-key="${key.getAttribute("data-key")}"]`).cloneNode().play();
//             //cloneNode lets me play the sounds over itself. Does it take up memory once it's down
//         }
//     });
// });

// const keyList = document.querySelectorAll(".key");
// keyList.forEach(key => {
//     key.addEventListener("transitionend", () => {
//         key.classList.remove("playing");
//     }); //puts event listeners on the div elements with .key class; so the div listend for transitionend
// });

// window.addEventListener("keydown", e => {
//   const sound = document.querySelector(`audio[data-key="${e.keyCode}"`);
//   if (!sound) return; //if key doesn't correspond to audio element, the function will exit
//   sound.currentTime = 0; //another way to reset the time
//   sound.play();
//   const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   btn.classList.add("playing");
//   btn.addEventListener("transitionend", (e) => {
//     if(e.propertyName !== "transform") return; 
//     //there are many transitions when changing class, pick longest or you trigger this code multiple times 
//     btn.classList.remove("playing");
//   });
// });

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.toggle('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);