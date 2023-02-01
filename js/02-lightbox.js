import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const itemList = [];
galleryItems.forEach((item) => {
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");

  galleryLink.href = item.original;

  const imgInGallery = document.createElement("img");
  imgInGallery.classList.add("gallery__image");

  imgInGallery.src = item.preview;

  imgInGallery.setAttribute("title", item.description);
  imgInGallery.alt = item.description;

  galleryLink.append(imgInGallery);

  itemList.push(galleryLink);
});
gallery.append(...itemList);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  //  captionDelay: 2500,
});
