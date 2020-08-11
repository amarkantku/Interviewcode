// Modular  

const Order = ((items) => {
  return class OrderClass {
    constructor(items) {
      this._item = items;
    }
    get total() {
      const { qty, unitPrice } = this._item;
      return qty * unitPrice;
    }
  };
})();

let order = new Order({
  pid: 685769123,
  name: 'Test Item',
  qty: 5,
  unitPrice: 110.50
});

console.log(order.total);
