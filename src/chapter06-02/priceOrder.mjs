function priceOrder(product,quantity,shippingMethod){
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold,0) *
        product.basePrice *
        product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price
}


function priceOrder_advanced(product,quantity,shippingMethod){
    const priceData = calculatePriceData(product, quantity);
    return applyShiping(priceData, shippingMethod);
}

function calculatePriceData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) *
        product.basePrice *
        product.discountRate;
    return {basePrice: basePrice, quantity: quantity, discount: discount}
}

function applyShiping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}
