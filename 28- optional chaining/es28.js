const order = {};

if (order.customer?.address?.city) {
  console.log("city exists");
} else {
  console.log("city doesn't exists");
}

console.log(order.customer?.address?.city);
