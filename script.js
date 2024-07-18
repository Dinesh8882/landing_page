const tl = gsap.timeline();

tl.from(".logo",{
    y:100,
    opacity:0,
    duration:1
}).from("ul li",{
    y:100,
    stagger:0.05,
}).from(".con-logo h1",{
    y:100,
}).from(".content p",{
    y:100
}).from("button:nth-child(1)",{
    opacity:0,
    x:-100
}).from("button:nth-child(2)",{
    opacity:0,
    x:100
})