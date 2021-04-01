export class MiniCart {
  constructor(cartLabelElement, cartPriceElement) {
    this.cartLabelElement = cartLabelElement;
    this.cartPriceElement = cartPriceElement;
    this.products = [];
  }

  getProductsSummary() {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
  setPriceAndLabel() {
    this.cartPriceElement.innerHTML = `${this.getProductsSummary()} Kr`;
    this.cartLabelElement.textContent = this.products.length;
  }

  addProduct(product) {
    this.products.push(product);
    this.setPriceAndLabel();
  }
}

export class ThumbnailGallery {
  constructor(current, thumbnails, options) {
    this.current = current.querySelector("img");
    this.container = thumbnails;
    this.images = thumbnails.querySelectorAll("img");
    this.options = {
      opacity: 0.6,
      ...options,
    };
  }

  imgEventClick(e) {
    if (e.target.src !== undefined && this.current.src != e.target.src) {
      this.images.forEach((img) => (img.style.opacity = 1));

      this.current.src = e.target.src;
      this.current.classList.add("fade-in");
      setTimeout(() => this.current.classList.remove("fade-in"), 500);
      e.target.style.opacity = this.options.opacity;
    }
  }
  init() {
    this.container.addEventListener("click", (e) => this.imgEventClick(e));
  }
}
