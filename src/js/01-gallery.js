import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

// code from prev task
const galleryContainer = document.querySelector("ul.gallery");

function createGalleryItem(array) {
	return array
		.map(({ preview, original, description }) => {
			return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>
        `;
		})
		.join("");
}

const photosMarkup = createGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

const galleryHandler = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
galleryHandler.on("show.simplelightbox");