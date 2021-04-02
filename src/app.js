import { MiniCart, ThumbnailGallery } from "./Layout";
import "./scss/styles.scss";

const addToCart = () => {
  const cartLabel = document.querySelector(".icon-bag__label");
  const cartPrice = document.querySelector(".header__cart-price");
  const product = document.querySelector(".product");
  const miniCart = new MiniCart(cartLabel, cartPrice);

  product.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn__buy")) {
      let price = parseFloat(
        this.querySelector("span[data-price]").dataset.price
      );
      let name = this.querySelector(".product__title").textContent;
      miniCart.addProduct({ name, price });
    }
  });
};

const readMore = (
  maxHeight = 220,
  textSelector = "#read-more-text",
  buttonSelector = ".btn__readmore"
) => {
  let text = document.querySelector(textSelector);
  let button = document.querySelector(buttonSelector);
  let initialHeight = text.offsetHeight;

  text.style.transition = "all 1s ease-in-out";
  text.style.maxHeight = maxHeight + "px";
  button.addEventListener("click", () => {
    if (!button.classList.contains("open")) {
      text.style.maxHeight = initialHeight + 20 + "px";
      button.classList.add("open");
      button.textContent = "Read less";
    } else {
      text.style.maxHeight = maxHeight + "px";
      button.classList.remove("open");
      button.textContent = "Read more";
    }
  });
};

const initThumbnails = () => {
  const current = document.querySelector(".thumb-gallery__main");
  const imgs = document.querySelector(".thumb-gallery__thumbnails");
  let gallery = new ThumbnailGallery(current, imgs, { opacity: 0.5 });
  gallery.init();
};
document.addEventListener("DOMContentLoaded", (event) => {
  addToCart();
  initThumbnails();
  readMore(300);
});
