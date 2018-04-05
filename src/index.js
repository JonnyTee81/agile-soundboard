
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  console.log(`${e.keyCode}`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
//   console.log(audio.play());
  audio.play();
//   .then(function(){
//       console.log('started');
//   }).catch(function(err){
//       console.log('error: '+err+'\n');
//   });

}
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);