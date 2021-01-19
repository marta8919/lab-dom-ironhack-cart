// ITERATION 1

function updateSubtotal(product) {

  //console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')

  let subtotal = product.querySelector('.subtotal span')
  //... your code goes here

  let valuePrice = Number(price.innerHTML)
  let valueQuantity = quantity.value

  let total = valueQuantity * valuePrice

  //console.log(total)

  return subtotal.innerHTML = total

  //console.log(typeof total)//number
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll('.product')
  

  // products.forEach(function(elem){
  //   updateSubtotal(elem)
  // })
  // ITERATION 3
  //... your code goes here
  // let totalFinal = document.querySelector('#total-value span')


  let totalValue = document.querySelector('#total-value span')

  let counter = 0;

  console.log(typeof counter)//number

  for(let i = 0; i < products.length; i++){
    counter = counter + updateSubtotal(products[i])
  }

  //console.log(counter)

  totalValue.innerHTML = counter

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let products = document.querySelector('.product')
  
  products.remove()

}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementById('remove');
  removeButtons.addEventListener('click', removeProduct)
});
