const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Modif : ajout des eventlistener sur les flèches//

let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")

arrowLeft.addEventListener("click", () =>{
	changeDotSelected(-1)
	changeSlideImg_texte(-1)
	currentSlide--
})

arrowRight.addEventListener("click", () =>{
	changeDotSelected(+1)
	changeSlideImg_texte(+1)
	currentSlide++
	
})

//---------------------------------------------//

//Modif : ajout des bullet points au slider//

let divDot = document.querySelector(".dots")
let currentSlide = 0

for ( i=0 ; i < slides.length ; i++ ) {

	let dot = document.createElement("div")
	dot.classList.add("dot","dot"+i)

if (i==currentSlide){
	dot.classList.add("dot_selected")
}

divDot.appendChild(dot)

}

//---------------------------------------------//

//Modif : change le bullet point actif au suivant //

function changeDotSelected (direction) {

	let nextSlide = currentSlide + direction
	let currentDot = document.querySelector(".dot"+currentSlide)
	let nextDot = document.querySelector(".dot"+nextSlide)

	currentDot.classList.remove("dot_selected")
	nextDot.classList.add("dot_selected")

}

//---------------------------------------------//

//Modif : change le IMG et texte actif au suivant //

function changeSlideImg_texte (direction) {

	let nextSlide = currentSlide + direction

	let currentImg = document.querySelector(".banner-img")
	currentImg.src = "./assets/images/slideshow/"+slides[nextSlide]["image"]

	let currentTexte = document.querySelector("#banner p")
	currentTexte.innerHTML = slides[nextSlide]["tagLine"]
	
}

//---------------------------------------------//
