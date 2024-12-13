document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[name="unit"]');
  const totalElement = document.getElementById("total");
  const addToCartButton = document.getElementById("addToCart");

  let totalPrice = 0;

  // Update total price when a radio button is selected
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      switch (e.target.id) {
        case "unit1":
          totalPrice = 10.0;
          break;
        case "unit2":
          totalPrice = 18.0;
          break;
        case "unit3":
          totalPrice = 24.0;
          break;
        default:
          totalPrice = 0.0;
      }
      totalElement.textContent = totalPrice.toFixed(2);
    });
  });

  // Handle Add to Cart button click
  addToCartButton.addEventListener("click", () => {
    alert(
      `You have added items to your cart for a total of $${totalPrice.toFixed(
        2
      )} USD.`
    );
  });
});
