const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const image = document.getElementById("image");
const tagline = document.getElementById("tagline");
const dotsContainer = document.querySelector('.dots')

let currentSlideIndex = 0;

// Ajout d'écouteurs d'événements pour les dots
slides.forEach((slide, index) => {
	const dot = document.createElement('span')
	dot.setAttribute('class', index === currentSlideIndex ? 'dot dot_selected' : 'dot')

	dot.addEventListener('click', () => {
		currentSlideIndex = index;
		displaySlide();
	});

	dotsContainer.appendChild(dot)
});

displaySlide();

function displaySlide() {
	let slide = slides[currentSlideIndex];
	image.src = "./assets/images/slideshow/" + slide.image;
	tagline.innerHTML = slide.tagLine;

	// Mettre à jour les dots pour indiquer le slide actuel
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		if (index === currentSlideIndex) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

leftArrow.addEventListener('click', () => {
	// currentSlideIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1
	if (currentSlideIndex === 0) {
		currentSlideIndex = slides.length - 1;
	} else {
		currentSlideIndex--;
	}
	displaySlide();
});

rightArrow.addEventListener('click', () => {
	if (currentSlideIndex === slides.length - 1) {
		currentSlideIndex = 0;
	} else {
		currentSlideIndex++;
	}
	displaySlide();
});