const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = parseInt(cardStyle.marginRight.match(/\d+/)[0]);

const cardCount = carousel.querySelectorAll("[data-target='card']").length;
let offset = 0;
const maxX = -((carouselWidth - cardMarginRight)
	* (cardCount - 1));

leftButton.addEventListener("click", function () {
	if (offset !== 0) {
		offset += carouselWidth - cardMarginRight;
		carousel.style.transform = `translateX(${offset}px)`;
	}
})
  
rightButton.addEventListener("click", function () {
 	if (offset !== maxX) {
 		offset -= carouselWidth - cardMarginRight;
		carousel.style.transform = `translateX(${offset}px)`;
	}
})