// scroll from homepage to page 1 upon clicking "click to begin"
var elem1 = document.getElementById("scrolldown1")
var video1 = document.getElementById("video1")

elem1.addEventListener("click",()=>{
	document.getElementById("page1").style.display="block"
})


// move from page 1 to page 2 when video 1 has ended 
var elem2 = document.getElementById("scrolldown2")

video1.addEventListener("ended",()=>{
	document.getElementById("page2").style.display="block"
})

// move from page 2 to page 3 when video 2 has ended
var elem3 = document.getElementById("scrolldown3")

video2.addEventListener("ended",()=>{
	document.getElementById("page3").style.display="block"
})

//move from page 3 to closing screen when video 3 has ended\
var elem4 = document.getElementById("scrolldown4")

video3.addEventListener("ended",()=>{
	document.getElementById("closing-screen").style.display="block"
})

// adding jQuery auto-scroll when video ends 
function myScrollFunction() {
	window.scrollTo(0, 1507.2);
}
