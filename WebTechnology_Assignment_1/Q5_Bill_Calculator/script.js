// User-defined function to calculate product amount
function calculateProduct(quantity, price) {

    return quantity * price;
}

// Main bill calculation function
function calculateBill() {

    // Get quantity and price of Product 1
    let q1 = Number(document.getElementById("q1").value);
    let p1 = Number(document.getElementById("p1").value);

    // Get quantity and price of Product 2
    let q2 = Number(document.getElementById("q2").value);
    let p2 = Number(document.getElementById("p2").value);

    // Get quantity and price of Product 3
    let q3 = Number(document.getElementById("q3").value);
    let p3 = Number(document.getElementById("p3").value);

    // Calculate individual product amounts
    let amount1 = calculateProduct(q1, p1);
    let amount2 = calculateProduct(q2, p2);
    let amount3 = calculateProduct(q3, p3);

    // Calculate total bill
    let total = amount1 + amount2 + amount3;

    // Initialize discount
    let discount = 0;

    // Apply 10% discount if total exceeds ₹2000
    if (total > 2000) {
        discount = total * 0.10;
    }

    // Calculate final payable amount
    let finalAmount = total - discount;

    // Display bill
    document.getElementById("bill").innerHTML =
        "Product 1: ₹" + amount1.toFixed(2) +
        "<br>Product 2: ₹" + amount2.toFixed(2) +
        "<br>Product 3: ₹" + amount3.toFixed(2) +
        "<br><br>Total Bill: ₹" + total.toFixed(2) +
        "<br>Discount: ₹" + discount.toFixed(2) +
        "<br><b>Final Payable Amount: ₹" +
        finalAmount.toFixed(2) +
        "</b>";
}