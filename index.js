gsap.registerPlugin(ScrollTrigger)
var introTl = gsap.timeline();
introTl.to("#myText", { ease: Back.easeOut.config(1), type: "diff", padSpace: true, duration: 3, text: "Hello" },)
.to("#myText", {ease: Back.easeOut.config(1), type: "diff", padSpace: true, duration: 4, text: "this is the portfolio of..."})
.to("#myText", { ease: Back.easeOut.config(1), type: "diff", padSpace: true, duration: 4, text: "Lucas Leiberman"})
.to(".title", {  ease: Back.easeOut.config(1), type: "diff", padSpace: true, duration: 1, text: "Front End Software Engineer"},"-=2.5")

var tl = gsap.timeline({defaults: {duration: .7, ease: Back.easeOut.config(1), opacity:0}});
var tl2 = gsap.timeline({defaults: {duration:1.5, delay:1.5}});
var tl3 = gsap.timeline({defaults: {duration:1, delay:4}});

tl.from(".github", {delay: 10, x:50, scale:.2, transformOrigin:"center"},)
    .from(".elipse1", {ease: "elastic.out(.7,0.3)",duration: 1.6, x:100},"-=.2")
    .from(".elipse2", {ease: "elastic.out(.7,0.3)", duration: 1.6, x: 100}, "-=1.8")
    .from(".elipse3", { ease: "elastic.out(.7,0.3)", duration: 1.6, x: 100},"-=1.8")
    .from(".i", { duration: .4, x:100},"-=1.5")
    .from(".n", { duration: .4, x:100},"-=1.2")
    .from(".dot", { duration: 1, ease: "elastic.out(1)", scale:.2,transformOrigin:"center"},"-=.3")

    tl2.from(".header-content", { opacity: 0, y:40, stagger:.3})
    tl3.from("#down-arrow", { delay: 12.5, opacity:0, y:15, repeat:-1, yoyo:true})

    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".projects",
          toggleActions: "play none none reset ",
            start: "top 75%",
            end:"bottom 10%",
           
        },
    })

    tl5.from(".underline", {duration: .7, ease: Back.easeOut.config(1), scaleX:0},)
    .from(".projects", {  duration: .7, ease: Back.easeOut.config(1), opacity:0, y:20},)
    
    
    var tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".individual-proj",
          toggleActions: "play none none reset",
          start: "top 75%",
          end:"bottom 10%",
      
        }
      });
      tl4.from(".proj-pic", { duration:.7, opacity:0, ease: Back.easeOut.config(1), x:-50 },) // add animations
        .from(".proj-desc", { duration:.7, opacity:0, ease: Back.easeOut.config(1), y:50 },'-=.7') // add animatio

        var tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".individual-proj1",
              toggleActions: "play none none reset ",
                start: "top 75%",
                end:"bottom 10%",
               
            },
        })

        tl6.from(".proj-pic1", { duration:.7, opacity:0, ease: Back.easeOut.config(1), x:50 },) // add animations
        .from(".proj-desc1", { duration:.7, opacity:0, ease: Back.easeOut.config(1), y:50 },'-=.7') // add animatio

      

         
        // gsap.from(".blob2", { delay: 13, duration: 8, repeat: -1, opacity: 0, x:-50, y:-250, rotation: -90, yoyo:true},)
      

        gsap.to(".st0", {
            scrollTrigger: {
                trigger: ".container",
            scrub: -1,
            start: "top top",
            markers: true,
        },// start the animation when ".box" enters the viewport (once)
            x: -200,
            opacity:0,
          });
        
        gsap.to(".st1", {
            scrollTrigger: {
                trigger: ".container",
            scrub: -1,
            start: "top top",
            markers: true,
        },// start the animation when ".box" enters the viewport (once)
            x: 200,
            opacity:0,
          });
        
        gsap.to(".st2", {
            scrollTrigger: {
                trigger: ".container",
            scrub: -1,
            start: "top top",
            markers: true,
        },// start the animation when ".box" enters the viewport (once)
            x: 1000
          });
        
        gsap.to(".st3", {
            scrollTrigger: {
                trigger: ".container",
            scrub: -1,
            start: "top top",
            markers: true,
        },// start the animation when ".box" enters the viewport (once)
            x: 1000
          });
        
        gsap.to(".st4", {
            scrollTrigger: {
                trigger: ".container",
            scrub: -1,
            start: "top top",
            markers: true,
        },// start the animation when ".box" enters the viewport (once)
            x: -1000
          });
        gsap.to(".st5", {
            scrollTrigger: {
                trigger: ".container",
            scrub: -1,
            start: "top top",
            markers: true,
        },// start the animation when ".box" enters the viewport (once)
            x: -1000
          });
        
        gsap.to(".st6", {
            scrollTrigger: {
                trigger: ".container",
            scrub: -1,
            start: "top top",
            markers: true,
        },// start the animation when ".box" enters the viewport (once)
            x: -1000
          });
      
        gsap.to(".st7", {
            scrollTrigger: {
                trigger: ".container",
            scrub: -1,
            start: "top top",
            markers: true,
        },// start the animation when ".box" enters the viewport (once)
            x: 1000
          });
      
        
