 function valueSetters(){
      gsap.set("#nav a ",{y:"-100%", opacity:0})
      gsap.set("#home .parent .child",{y:"100%"})
      gsap.set("#home .row img",{opacity:0})

      document.querySelectorAll("#Visual > g").forEach(function(e){
         var Character = e.childNodes[1].childNodes[1];
 
          Character.style.strokeDasharray =  Character.getTotalLength() + 'px';
          Character.style.strokeDashoffset = Character.getTotalLength() + 'px';
      })
 }


 
function revealToSpan(){
    document.querySelectorAll(".reveal")
 .forEach(function(elem){
 //create two spans
  var parent=document.createElement("span");
  var child= document.createElement("span");

 // parent and child both sets their respective classes
 parent.classList.add("parent");
 child.classList.add("child");

 //spans parent gets child and child  gets elems details
 child.innerHTML = elem.innerHTML;
 parent.appendChild(child);

 // elems replace its value with parent span
 elem.innerHTML="";
 elem.appendChild(parent);
});
}
 
 function loaderAnimation(){
   var tl= gsap.timeline();

   tl
      .from(" #loader .child span ",{
      x: "50%",
      duration: 2,
      stagger: .3,
      delay: 1.4,
      ease: Power3.easeInOut,
   })
  
    .to(" #loader .parent .child",{
      y: "-100%",
      duration: 1.,
      
      ease: Circ.easeInOut,
   })
  
   .to("#loader",{
     height :0 ,
     duration: 1,
     
     ease: Circ.easeInOut,
  })
  
  .to("#green",{
     height :"100%" ,
     top:0,
     delay:-.8,
     duration: 1,
     ease: Circ.easeInOut,
  })
  .to("#green",{
     height :0 ,
     duration: 1,
     delay:-.5,
     ease: Circ.easeInOut,
     onComplete:function(){
      animateHomepage();
     }
  })
 }
  function animateSvg(){
    
     gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
            strokeDashoffset:0,
            duration:2,
            ease:Expo.easeInOut,
            
     })
     
     
  }
   
   
  function animateHomepage(){
      

   var tl = gsap.timeline();

   tl.to("#nav a",{
      y:0,
      opacity:5,
      stagger:.05,
      ease:Expo.easeInOut
   })

   tl.to("#home .parent .child",{
      y:0,
      stagger:.1,
      duration:2,
      ease:Expo.easeInOut
   })

   tl.to("#home .row img",{
       opacity:1,
       ease:Expo.easeInOut,
       onComplete:function(){
         animateSvg();
      }
   })
}
 revealToSpan();
 valueSetters();
 loaderAnimation();
 
  
 

 