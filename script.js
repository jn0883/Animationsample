var tl = gsap.timeline();

tl.from(".logo h3, .navlinks h3, .loginbtn button",{
    opacity:0,
    y:-100,
    duration:0.5,
    delay:0.5,
    stagger: 0.1,
})

tl.from(".page1 .box",{
    ease:Expo.easeInOut,
    opacity:0,
    rotate: 360,
    scale:0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".page1 .box",
        scroller:"body",
        start:"top 60%",
        end:"top 90%",
        scrub:2,
    }
})

tl.from(".page2 .box",{
    opacity:0,
    x:250,
    duration: 2.5,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller:"body",
        start:"top 60%",
        end:"top 90%",
        scrub:2,
    }
})

tl.from(".page3 .box",{
    opacity:0,
    x: -250,
    duration: 2.5,
    scrollTrigger: {
        trigger: ".page3 .box",
        scroller:"body",
        /*markers: true,*/
        start:"top 60%",
        end:"top 90%",
        scrub:2,
    }
})