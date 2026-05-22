let price = [250, 645, 300, 900, 50];
for (let i = 0; i < price.length; i++) {
    console.log(price[i]);
    let offer = (price[i] * 10) / 100;
    price[i] -= offer;
}
console.log(price);