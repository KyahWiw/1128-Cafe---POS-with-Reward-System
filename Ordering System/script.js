let items = [];
let rewardPoints = 100; // Initial reward points for a customer
let currentSelection = { category: null, flavor: null, size: null };

// Select category and show flavors
function selectCategory(category) {
  currentSelection.category = category;
  document.getElementById("flavorSection").style.display = "block";
  document.getElementById("categorySection").style.display = "none";

  const flavors =
    category === "Iced Coffee"
      ? ["Caramel Macchiato", "Vanilla Latte", "Mocha"]
      : category === "Milk Tea"
      ? ["Classic Milk Tea", "Taro", "Matcha"]
      : category === "Frappe"
      ? [
          "Chocolate Frappe",
          "Coffee Frappe",
          "Vanilla Frappe",
          "Cookies & Cream",
          "Strawberry Frappe",
        ]
      : category === "Premium Frappe"
      ? [
          "Matcha Frappe",
          "Mango Frappe",
          "Taro Frappe",
          "Caramel Frappe",
          "Hazelnut Frappe",
        ]
      : category === "Milk Series"
      ? [
          "Classic Milk",
          "Strawberry Milk",
          "Oreo Milk",
          "Brown Sugar Milk",
          "Taro Milk",
        ]
      : category === "Soda Refresher"
      ? [
          "Lemon Lime",
          "Orange Citrus",
          "Berry Blast",
          "Peach Melon",
          "Mango Pineapple",
        ]
      : category === "Rice Meal"
      ? [
          "Chicken Adobo",
          "Beef Steak",
          "Pork Sisig",
          "Sinigang na Baboy",
          "Bicol Express",
        ]
      : category === "Snacks"
      ? [
          "Spring Rolls",
          "Potato Wedges",
          "Cheese Sticks",
          "Garlic Bread",
          "Nachos",
        ]
      : category === "Adds-On"
      ? [
          "Whipped Cream",
          "Chocolate Syrup",
          "Caramel Drizzle",
          "Oreo Crumble",
          "Cinnamon Sprinkles",
        ]
      : category === "Fruit Tea"
      ? [
          "Apple Green Tea",
          "Peach Black Tea",
          "Mango Green Tea",
          "Strawberry Lemonade",
          "Lychee Jasmine",
        ]
      : category === "Hot Brew"
      ? ["Americano", "Cappuccino", "Espresso", "Latte", "Flat White"]
      : [
          "Whipped Cream",
          "Chocolate Syrup",
          "Caramel Drizzle",
          "Oreo Crumble",
          "Cinnamon Sprinkles",
        ];

  const flavorOptions = document.getElementById("flavorOptions");
  flavorOptions.innerHTML = "";
  flavors.forEach((flavor) => {
    const button = document.createElement("button");
    button.textContent = flavor;
    button.onclick = () => selectFlavor(flavor);
    flavorOptions.appendChild(button);
  });
}

// Select flavor and show size options
// Select flavor and show size options with different prices for each category
function selectFlavor(flavor) {
  currentSelection.flavor = flavor;
  document.getElementById("sizeSection").style.display = "block";
  document.getElementById("flavorSection").style.display = "none";

  const sizeOptions = document.getElementById("sizeOptions");
  sizeOptions.innerHTML = getSizeOptions(currentSelection.category);
}

// Function to get size options with dynamic prices based on category
function getSizeOptions(category) {
  switch (category) {
    case "Iced Coffee":
      return `
        <button onclick="selectSize('Small', 120)">Small ₱120</button>
        <button onclick="selectSize('Medium', 170)">Medium ₱170</button>
        <button onclick="selectSize('Large', 220)">Large ₱220</button>
      `;
    case "Milk Tea":
      return `
        <button onclick="selectSize('Small', 100)">Small ₱100</button>
        <button onclick="selectSize('Medium', 140)">Medium ₱140</button>
        <button onclick="selectSize('Large', 190)">Large ₱190</button>
      `;
    case "Frappe":
      return `
        <button onclick="selectSize('Small', 150)">Small ₱150</button>
        <button onclick="selectSize('Medium', 200)">Medium ₱200</button>
        <button onclick="selectSize('Large', 250)">Large ₱250</button>
      `;
    case "Premium Frappe":
      return `
        <button onclick="selectSize('Small', 180)">Small ₱180</button>
        <button onclick="selectSize('Medium', 230)">Medium ₱230</button>
        <button onclick="selectSize('Large', 280)">Large ₱280</button>
      `;
    case "Milk Series":
      return `
        <button onclick="selectSize('Small', 130)">Small ₱130</button>
        <button onclick="selectSize('Medium', 180)">Medium ₱180</button>
        <button onclick="selectSize('Large', 230)">Large ₱230</button>
      `;
    case "Soda Refresher":
      return `
        <button onclick="selectSize('Small', 90)">Small ₱90</button>
        <button onclick="selectSize('Medium', 120)">Medium ₱120</button>
        <button onclick="selectSize('Large', 160)">Large ₱160</button>
      `;
    case "Rice Meal":
      return `
        <button onclick="selectSize('Small', 180)">Small ₱180</button>
        <button onclick="selectSize('Medium', 230)">Medium ₱230</button>
        <button onclick="selectSize('Large', 280)">Large ₱280</button>
      `;
    case "Snacks":
      return `
        <button onclick="selectSize('Small', 70)">Small ₱70</button>
        <button onclick="selectSize('Medium', 100)">Medium ₱100</button>
        <button onclick="selectSize('Large', 130)">Large ₱130</button>
      `;
    case "Adds-On":
      return `
        <button onclick="selectSize('Small', 30)">Small ₱30</button>
        <button onclick="selectSize('Medium', 50)">Medium ₱50</button>
        <button onclick="selectSize('Large', 70)">Large ₱70</button>
      `;
    case "Fruit Tea":
      return `
        <button onclick="selectSize('Small', 130)">Small ₱130</button>
        <button onclick="selectSize('Medium', 170)">Medium ₱170</button>
        <button onclick="selectSize('Large', 220)">Large ₱220</button>
      `;
    case "Hot Brew":
      return `
        <button onclick="selectSize('Small', 110)">Small ₱110</button>
        <button onclick="selectSize('Medium', 150)">Medium ₱150</button>
        <button onclick="selectSize('Large', 200)">Large ₱200</button>
      `;
    default:
      return `
        <button onclick="selectSize('Small', 30)">Small ₱5</button>
        <button onclick="selectSize('Medium', 50)">Regular ₱10</button>
        <button onclick="selectSize('Large', 70)">Large ₱20</button>
      `;
  }
}

// Select size and add item to the order
function selectSize(size, price) {
  currentSelection.size = size;
  addItem(size, price);
}

// Add selected item to the order
function addItem(size, price) {
  const item = {
    name: `${currentSelection.category} - ${currentSelection.flavor}`,
    size: size,
    price: price,
  };
  items.push(item);
  displayOrderItems();
  calculateTotal();
  resetSelection();
}

// Reset selection after adding item to the order
function resetSelection() {
  currentSelection.category = null;
  currentSelection.flavor = null;
  currentSelection.size = null;
  // Hide sections after adding an item
  document.getElementById("flavorSection").style.display = "none";
  document.getElementById("sizeSection").style.display = "none";
  document.getElementById("categorySection").style.display = "block";
}

// Display the order summary
function displayOrderItems() {
  const orderItemsDiv = document.getElementById("orderItems");
  orderItemsDiv.innerHTML = "";
  items.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `${item.name} (${item.size}) - ₱${item.price.toFixed(
      2
    )} <span class="remove-item" onclick="removeItem(${index})">Remove</span>`;
    orderItemsDiv.appendChild(itemDiv);
  });
}

// Remove item from the order
function removeItem(index) {
  items.splice(index, 1);
  displayOrderItems();
  calculateTotal();
}

// Calculate the total order and display it
function calculateTotal() {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("totalAmount").innerText = `₱${total.toFixed(2)}`;
  return total; // Return total for use in updateChange
}

// Fetch the current total amount from displayed element (for consistency)
function getCurrentTotal() {
  return (
    parseFloat(
      document.getElementById("totalAmount").innerText.replace("₱", "")
    ) || 0
  );
}

// Update the change and final total based on amount paid
function updateChange() {
  const totalCost = getCurrentTotal();
  const amountPaid =
    parseFloat(document.getElementById("amountPaid").value) || 0;
  const change = amountPaid - totalCost;

  // Display the change if positive or zero, hide otherwise
  document.getElementById("changeAmount").innerText = `₱${change.toFixed(2)}`;
  document.querySelector(".change-section").style.display =
    change >= 0 ? "block" : "none";

  // Display the final total (Amount Paid - Change)
  document.getElementById("finalTotal").innerText = `₱${(
    amountPaid - change
  ).toFixed(2)}`;
}

// Redeem reward points
function redeemPoints() {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  if (rewardPoints >= total) {
    rewardPoints -= total;
    alert(`You redeemed ${total} points!`);
  } else {
    alert("You don't have enough points to redeem.");
  }
}

function completeOrder() {
  const total = calculateTotal();
  if (total === 0) {
    alert("Please add items to the order before completing.");
    return;
  }
  alert("Order completed!");
  saveOrderToReport(items, total, rewardPoints);

  // Clear the current order
  items = [];
  displayOrderItems();
  calculateTotal();
  document.getElementById("amountPaid").value = ""; // Reset paid amount
  document.getElementById("changeAmount").innerText = "₱0.00"; // Reset change
}

// Save order to sales report
function saveOrderToReport(orderItems, total, pointsEarned) {
  const salesReport = JSON.parse(localStorage.getItem("salesReport")) || [];
  const orderData = {
    items: orderItems,
    total: total,
    pointsEarned: pointsEarned,
    timestamp: new Date().toLocaleString(),
  };
  salesReport.push(orderData);
  localStorage.setItem("salesReport", JSON.stringify(salesReport));
}

// Generate the QR code for loyalty card
function generateQRCode() {
  const loyaltyData = `CustomerID:${customerId},Points:${rewardPoints},CardNumber:1234567890,Expiry:12/2025`;
  const qrCodeCanvas = document.getElementById("qrCodeCanvas");

  QRCode.toCanvas(qrCodeCanvas, loyaltyData, function (error) {
    if (error) console.error(error);
  });
}

// Add points to loyalty card
function addPoints() {
  rewardPoints += 50;
  alert(`You earned 50 points! Your total points: ${rewardPoints}`);
}

// Redeem product using loyalty points
function redeemProduct() {
  if (rewardPoints >= 100) {
    rewardPoints -= 100;
    alert(`You redeemed a product! Your total points: ${rewardPoints}`);
  } else {
    alert("You don't have enough points to redeem a product.");
  }
}

// Initialize QR code generation
generateQRCode();
