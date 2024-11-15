
function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
locomotive()


function vedbox(){
    var play = document.querySelector("#play")
var vedbox = document.querySelector("#vedbox")
vedbox.addEventListener("mouseenter",function(dets){
  gsap.to(play,{
    opacity:1,
    scale:1,
    
  })

}
)
vedbox.addEventListener("mouseleave",function(dets){
  gsap.to(play,{
    opacity:0,
    scale:0,

  })

}
)

vedbox.addEventListener("mousemove",function(dets){
    gsap.to(play,{
        left:dets.x-40,
        top:dets.y-50,
    })
})

}
vedbox();

function page01h1(){
    gsap.from("#page01 h1",{
        y:100,
        opacity:0,
        duration:0.5,
        delay:0.2,
        stagger:0.2,
    })
    gsap.from("#page01 #vedbox",{
        scale:0.9,
        opacity:0,
        duration:0.5,
        delay:0.2,
       
    })

}
page01h1();




var com = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
  gsap.to(com,{
    left:dets.x,
    top:dets.y,
   
       
  })

}
)


var p3 = document.querySelector("#page03")
var img = document.querySelectorAll(".cd img")
p3.addEventListener("mouseenter",function(){
  gsap.from(img,{
    scale:0.5,
    opacity:0,
    duration:2,

  })

})

