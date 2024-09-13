// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const prices = {
    "Garlic Bread": 65.50,
    Bruschetta: 70.0,
    "Margherita Pizza": 119.99,
    "Spaghetti Carbonara": 135.50,
    Tiramisu: 95.99,
    Cheesecake: 75.0,
  };

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");
    // Loop through each category and its items in the menu object
    for (const category in menu) {
    // Create an element to represent the category
        const categoryElement = document.createElement("h3");
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);
        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items
        const itemList = document.createElement('ul');
        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items
        menu[category].forEach(item =>{
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`
            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order
            itemElement.addEventListener('click', () => addToOrder(item))
            // Append the list item to the list of items
            itemList.appendChild(itemElement)
            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderItemElement = document.createElement('li');
    orderItemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;
    // Set the text content of the list item to the item name

    // Append the list item to the order items list
    orderItemsList.appendChild(orderItemElement)
    // Calculate and update the total price
    orderItems.push(item);
    orderTotal += item.price
    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = `R${orderTotal.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}


// Start the menu system by calling the init function
initMenuSystem(menu);
