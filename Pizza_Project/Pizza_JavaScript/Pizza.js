// Function to generate receipt based on user's pizza order
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>"; // Initial text for the receipt
    var runningTotal = 0; // Running total cost of the order
    var sizeTotal = 0; // Cost based on selected pizza size
    var sizeArray = document.getElementsByClassName("size"); // Array of pizza size input elements

    // Loop through pizza size options
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value; // Get the selected pizza size
            text1 = text1 + selectedSize + "<br>"; // Add the selected size to the receipt text
        }
    }

    // Determine cost based on the selected pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal; // Update the running total with the size cost
    console.log(selectedSize + " = $" + sizeTotal + ".00"); // Log the selected size and its cost
    console.log("size text1: " + text1); // Log the receipt text after selecting size
    console.log("subtotal: $" + runningTotal + ".00"); // Log the current subtotal
    getTopping(runningTotal, text1); // Call the next function to handle toppings
}

// Function to calculate and handle toppings in the order
function getTopping(runningTotal, text1) {
    var toppingTotal = 0; // Cost based on selected toppings
    var selectedTopping = []; // Array to store selected toppings
    var toppingArray = document.getElementsByClassName("toppings"); // Array of topping input elements

    // Loop through topping options
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); // Add selected topping to the array
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>"; // Add selected topping to the receipt text
        }
    }

    var toppingCount = selectedTopping.length; // Count of selected toppings
    // Calculate topping cost (one free topping)
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    runningTotal = runningTotal + toppingTotal; // Update the running total with topping cost
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1); // Log the receipt text after selecting toppings
    console.log("Purchase Total: " + "$" + runningTotal + ".00"); // Log the final purchase total
    document.getElementById("showtext").innerHTML = text1; // Display the receipt text on the webpage
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"; // Display the total cost on the webpage
}
