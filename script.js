var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.5,
    delay:0.8,
    duration:0.6,

})
tl.from("#line1-part1, #forh2gap h2",{
    opacity:0,
    onStart:function(){
        var h5text = document.querySelector("#line1-part1 h5");
var count = 0;

setInterval(function(){
    if(count<100){
        h5text.innerHTML = count++
    }
    else{
        h5text.innerHTML = 100;
    }
},30)
    }
})
 
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3,  
})
tl.from("#page1",{
    delay:0.8,
    y:1600,
    opacity:0,
    ease:Power4,
    duration:1,
})
tl.to("loader",{
    display:"none",

})

