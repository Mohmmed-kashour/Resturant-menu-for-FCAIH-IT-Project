function addToCart() {
  let span = document.getElementById("itemsInCart");
  let currentNumber = parseInt(span.innerText);
  currentNumber += 1;                             
  span.innerText = currentNumber;                 
}
function completePurchase() {
  alert("Thank you for your purchase!");
  let span = document.getElementById("itemsInCart");
  span.innerText = "0";
}

window.onload = function () {
  let buttons = document.getElementsByClassName("category-button");
  let sections = document.getElementsByClassName("menu-category");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      let target = this.getAttribute("data-category");

      for (let j = 0; j < sections.length; j++) {
        sections[j].style.display = "none";
      }

      for (let j = 0; j < sections.length; j++) {
        if (sections[j].getAttribute("data-category") === target) {
          sections[j].style.display = "block";
        }
      }
    };
  }
};
