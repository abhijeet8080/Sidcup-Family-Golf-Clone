import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
gsap.registerPlugin(CSSPlugin, Draggable, InertiaPlugin);


const cursor = document.querySelector("#cursor")
const cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
cursor.style.left = dets.x+"px"
cursor.style.top = dets.y+"px"
cursorBlur.style.left = (dets.x-200)+"px"
    cursorBlur.style.top = (dets.y-200)+"px"
});

const h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        cursor.style.scale = 3;
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid #fff"
    })
    elem.addEventListener("mouseleave",()=>{
        cursor.style.scale = 1;
        cursor.style.backgroundColor = "#ffb700";
        cursor.style.border = "0px solid #ffb700"
    })
})
gsap.to("#nav",{
    backgroundColor : "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end : "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub :2

    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

gsap.from("#page4 h1",{
    y:50,

    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub: 3
    }
})
