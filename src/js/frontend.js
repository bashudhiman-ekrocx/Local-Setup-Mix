import faqs from './sections/faqs';
import productCard from './snippets/product-card';

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.faqs')) {
    faqs();
  }

  if (document.querySelector('.product-card')) {
    productCard();
  }
});
