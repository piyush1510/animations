const left = document.querySelector('.left');
const wLeft = left.offsetWidth;
left.style.width=wLeft
left.style.opacity = "1";
const right = document.querySelector('.right');
const wRight = right.offsetWidth;
right.style.width=wRight
right.style.opacity = "1";
anime({
    targets:'.left-para',
    right:[-wLeft+"px",0],
    delay:100,
    duration:1000,
    easing:"easeInOutQuad"
})
anime({
    targets:'.right-para',
    left:[-wRight+"px",0],
    delay:100,
    duration:1000,
    easing:"easeInOutQuad"
})
anime({
    targets:".bar",
    height:["10px","100px"]
})

