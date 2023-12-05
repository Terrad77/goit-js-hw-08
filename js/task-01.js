const createGalleryItem = (image) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery-item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery-link");
  galleryLink.href = image.original;
  galleryLink.setAttribute("target", "_blank"); // Відкривати в новому вікні
  galleryLink.addEventListener("click", (event) => {
    event.preventDefault(); // Заборона переходу за посиланням
  });

  const imageItem = document.createElement("img");
  imageItem.classList.add("gallery-image");
  imageItem.src = image.preview;
  imageItem.dataset.source = image.original;
  imageItem.alt = image.description;

  galleryLink.appendChild(imageItem);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
};
