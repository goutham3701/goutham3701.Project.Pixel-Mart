// const btotal = document.getElementById("sub-total");
// console.log(btotal);
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue("phone") * 95500;
    const caseTotal = getInputValue("case") * 2500;
    const subTotal = phoneTotal + caseTotal; 
    const tax = subTotal / 5;
    const totalPrice = subTotal + tax;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
}
document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber("phone", 95500, true);    
});
document.getElementById("phone-minus").addEventListener("click", function () {
    updateProductNumber("phone", 95500, false);
});
document.getElementById("case-plus").addEventListener("click", function () {
    updateProductNumber("case", 2500, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
    updateProductNumber("case", 2500, false);
});

// id="sub-total"
// id="tax-amount"
// id="total-price"