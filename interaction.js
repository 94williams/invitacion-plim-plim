"use strict";
(() => {
  if (!document.body.classList.contains("cars")) return;
  const image = document.querySelector("[data-hero-index]");
  if (!image) return;
  const fallback = () => {
    image.removeEventListener("error", fallback);
    image.src = window.INVITATION.ambientacion.src;
    image.alt = window.INVITATION.ambientacion.alt;
  };
  image.addEventListener("error", fallback);
  if (image.complete && image.naturalWidth === 0) fallback();
})();
