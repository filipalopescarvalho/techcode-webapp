function calculateOrderTotal(items, discountPercent = 0) {
    if (!Array.isArray(items) || items.length === 0) return 0;
  
    let total = items.reduce((sum, item) => {
      if (
        typeof item.quantity !== 'number' ||
        typeof item.pricePerUnit !== 'number' ||
        item.quantity < 0 ||
        item.pricePerUnit < 0
      ) {
        throw new Error('Invalid item data');
      }
      return sum + item.quantity * item.pricePerUnit;
    }, 0);
  
    if (discountPercent > 0) {
      total = total - (total * discountPercent) / 100;
    }
  
    return parseFloat(total.toFixed(2)); // round to 2 decimals
  }
  
  module.exports = { calculateOrderTotal };