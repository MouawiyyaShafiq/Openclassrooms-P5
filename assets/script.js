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
	console.log("flèche gauche clicked")
})

arrowRight.addEventListener("click", () =>{
	console.log("flèche droite clicked")
})

//---------------------------------------------//

//Modif : ajout des bullet points au slider//

let divDot = document.querySelector(".dots")

for ( i=0 ; i < slides.length ; i++ ) {

let dot = document.createElement("div")
dot.classList.add("dot",i)

if (i==0){
	dot.classList.add("dot_selected")
}

divDot.appendChild(dot)

}

//---------------------------------------------//