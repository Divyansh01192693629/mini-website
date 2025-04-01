// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Modal Functionality
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const close = document.querySelector(".close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").src;
    const title = item.querySelector("h3").textContent;
    const description = item.querySelector("p").textContent;

    modalImage.src = img;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = "block";
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
