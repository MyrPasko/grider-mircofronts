import faker from 'faker';

let products = '';
const devProductsElement = document.querySelector('#dev-products');

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();

  products += `<div>${name}</div>`;
}

console.log('[From products.]', );

devProductsElement.innerHTML = products;
