window.addEventListener('load', () =>{
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const color = [
    "#bfd364",
    "#57a2e9",
    "#c37cf1",
    "#8ce46a",
    "#f3d13b",
   " #4d0549"
  ];

  pads.forEach((pad,index) => {
      pad.addEventListener('click',function(){
        sounds[index].currentTime = 0;
        sounds[index].play(); 
        creatBublles(index);
      });
  });
  //add Event to creat bubbles
 const creatBublles = (index) => {
     const bubble = document.createElement("div");
     visual.appendChild(bubble);
    bubble.style.background = color[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend",function(){
        visual.removeChild(this);
    });
 }
});