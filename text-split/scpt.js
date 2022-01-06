var hidden= true;
var circle = document.querySelector(".circle")
function play(){
    if(!hidden)return;
    circle.style.boxShadow = " 0 0 40px rgb(216, 19, 59)"
    anime({
        targets:".up",
        top:-38,
        easing:"easeInOutQuad",
        duration:1000
    })
    anime({
        targets:".down-container",
        top:38,
        easing:"easeInOutQuad",
        duration:1000
    })
    anime({
        targets:".hidden",
        opacity:1,
        easing:"easeInOutQuad",
        duration:1000,
        complete:function(){hidden=false}
    })
}
function revert(){
    if(hidden)return;
    circle.style.boxShadow = " 0 0 0px rgb(216, 19, 59)"
    anime({
        targets:".up",
        top:-19,
        easing:"easeInOutQuad",
        duration:1000
    })
    anime({
        targets:".down-container",
        top:19,
        easing:"easeInOutQuad",
        duration:1000
    })
    anime({
        targets:".hidden",
        opacity:0,
        easing:"easeInOutQuad",
        duration:1000,
        complete:function(){hidden=true}
    })
}
