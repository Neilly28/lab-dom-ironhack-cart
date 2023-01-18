// ITERATION 1

console.log("hello from index js");

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //... your code goes here
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector("input").value;
  const subTotal = price * quantity;
  // console.log(price, quantity, subTotal);

  let subTotalDisplay = product.querySelector(".subtotal span");
  subTotalDisplay.innerHTML = subTotal;
  // console.log(typeof subTotal, subTotal);
  return subTotalDisplay;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  //select all products
  const products = document.querySelectorAll(".product");

  //loop thru all products and call the update subtotal function
  products.forEach((prod) => updateSubtotal(prod));

  //select all subtotals
  const subtotals = document.querySelectorAll(".subtotal span");

  //loop thru all the subtotals and sum
  let total = 0;
  for (let subs of subtotals) {
    total += Number(subs.innerText);
  }
  console.log(total);

  // ITERATION 3
  //... your code goes here
  //total all the subtotals
  let totalDisplay = document.querySelector("#total-value span");
  totalDisplay.innerHTML = total;
}

// const products = document.querySelectorAll(".product");
// const subtotals = document.querySelectorAll(".subtotal span");
// console.log(subtotals.innerHTML);

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// const removeBtns = document.querySelectorAll(".btn-remove");
// console.log(removeBtns);

// removeBtns.forEach((btn) =>
//   btn.addEventListener("click", () => console.log("a button was clicjked"))
// );

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  // select all remove buttons
  const removeBtns = document.querySelectorAll(".btn-remove");
  console.log(removeBtns);

  // loop thru all remove buttons and addeventlistener
  removeBtns.forEach((btn) => btn.addEventListener("click", removeProduct));

  //... your code goes here
});
