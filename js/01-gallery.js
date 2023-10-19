import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

galleryList.addEventListener("click", onImageClick);

function onImageClick(evt) {
  findImageOnClick(evt);
}

function findImageOnClick(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }
  evt.preventDefault();
  const currentImage = evt.target.closest(".gallery__image");
  const imgUrl = currentImage.dataset.source;
  const image = galleryItems.find(({ original }) => original === imgUrl);
  createModal(image);
}

function createListMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");
}
galleryList.insertAdjacentHTML("beforeend", createListMarkup(galleryItems));

function createModal({ original, description }) {
  const instance = basicLightbox.create(`
    <img src="${original}" alt="${description}">
`);

  instance.show();
}
