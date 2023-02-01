import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const itemList = [];
galleryItems.forEach((item) => {
  const galleryDiv = document.createElement("div");
  galleryDiv.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");

  galleryLink.href = item.original;

  const imgInGallery = document.createElement("img");
  imgInGallery.classList.add("gallery__image");

  imgInGallery.src = item.preview;
  imgInGallery.setAttribute("data-source", item.original);
  imgInGallery.alt = item.description;

  galleryDiv.append(galleryLink);
  galleryLink.append(imgInGallery);

  itemList.push(galleryDiv);
});
gallery.append(...itemList);

document.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const selectedImg = e.target.getAttribute("data-source");

  const template = basicLightbox.create(
    `
   <img src='${selectedImg}' width='600' height='400'>
   `,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  template.show();

  function closeModal(e) {
    if (e.key === "Escape") {
      template.close();
    }
  }
});
