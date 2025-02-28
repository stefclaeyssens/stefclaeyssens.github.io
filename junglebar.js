document.addEventListener("DOMContentLoaded", () => {
  const drinksContainer = document.getElementById("drinks-container");
  const selectedDrinksList = document.getElementById("selected-drinks");
  const totalPriceEl = document.getElementById("total-price");
  const clearBtn = document.getElementById("clear-btn");

  let totalPrice = 0;
  let selectedDrinks = {}; // Object to track drink counts

  // Load drinks from JSON file
  fetch("junglebar.json")
    .then((response) => response.json())
    .then((drinks) => {
      drinks.forEach((drink) => {
        // Create button for drink
        const button = document.createElement("button");
        button.classList.add("drink");

        // Create text span for drink name and price
        const textSpan = document.createElement("span");
        textSpan.textContent = `${drink.name} - ${drink.price} bonnen`;

        // Create image for drink
        const img = document.createElement("img");
        img.src = drink.image;
        img.alt = drink.name;

        // Append text first, then image (so image appears on the right)
        button.appendChild(textSpan);
        button.appendChild(img);

        // Add click event to update order
        button.addEventListener("click", () => {
          totalPrice += drink.price;

          if (selectedDrinks[drink.name]) {
            selectedDrinks[drink.name].count += 1;
          } else {
            selectedDrinks[drink.name] = { count: 1, price: drink.price };
          }

          updateUI();
        });

        drinksContainer.appendChild(button);
      });
    })
    .catch((error) => console.error("Error loading drinks:", error));

  // Clear selection
  clearBtn.addEventListener("click", () => {
    totalPrice = 0;
    selectedDrinks = {};

    updateUI();
  });

  // Update UI
  function updateUI() {
    // Ensure total price is displayed without unnecessary decimals
    totalPriceEl.textContent =
      totalPrice % 1 === 0
        ? totalPrice.toFixed(0) // No decimal if it's a whole number
        : totalPrice.toFixed(1); // Show a decimals if needed

    // Update selected drinks list
    selectedDrinksList.innerHTML = "";
    Object.keys(selectedDrinks).forEach((drinkName) => {
      const drink = selectedDrinks[drinkName];

      // Format the text: show multiplier only if count > 1
      const displayText =
        drink.count > 1 ? `${drink.count}x ${drinkName}` : drinkName;

      const listItem = document.createElement("li");
      listItem.textContent = `${displayText} - ${
        drink.price * drink.count
      } bonnen`;

      selectedDrinksList.appendChild(listItem);
    });
  }
});
