var wallet = 100;

var apples = {
    name: 'apples',
    inventory: 0,
    marketPrice: randomNumber(50, 999) / 100,
    avgPrice: 0,
    purchasePrices: []
};
var oranges = {
    name: 'oranges',
    inventory: 0,
    marketPrice: randomNumber(50, 999) / 100,
    avgPrice: 0,
    purchasePrices: []
};
var bananas = {
    name: 'bananas',
    inventory: 0,
    marketPrice: randomNumber(50, 999) / 100,
    avgPrice: 0,
    purchasePrices: []
};
var grapes = {
    name: 'grapes',
    inventory: 0,
    marketPrice: randomNumber(50, 999) / 100,
    avgPrice: 0,
    purchasePrices: []
};

var fruits = [apples, oranges, bananas, grapes];


function buyFruit(fruitClicked) {
    fruitClicked.inventory += 1;
    fruitClicked.purchasePrices.push(fruitClicked.marketPrice);
    var avgPrice = 0;
    for (var i = 0; i < fruitClicked.purchasePrices.length; i++) {
        avgPrice += fruitClicked.purchasePrices[i];
        fruitClicked.avgPrice = avgPrice / fruitClicked.purchasePrices.length;
    }
    wallet -= fruitClicked.marketPrice;

};

function sellFruit(fruitClicked) {
    if (fruitClicked.inventory == 0) {
        alert("YOU DON'T HAVE ANY OF THAT TO SELL!");
    } else {
        fruitClicked.inventory--;
        wallet += fruitClicked.marketPrice;

    }
};

function randomNumber(min, max, precision) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

function priceTimer () {
  $('.marketPrice').append(randomNumber(-50, 50) / 100);
}








$(function() {
    console.log('jQuery Working');

    $('#wallet').append(100);

    $('#applesPrice').append(apples.marketPrice);
    $('#orangesPrice').append(oranges.marketPrice);
    $('#bananasPrice').append(bananas.marketPrice);
    $('#grapesPrice').append(grapes.marketPrice);




    $('.fruit').on('click', '.buyButton', function() {
        var index = $(this).attr("id");
        var fruitClicked = fruits[index];
        if (fruitClicked.marketPrice > wallet) {
            alert("NOT ENOUGH MONEY");
        } else {
            buyFruit(fruitClicked);
            console.log(fruitClicked);
            $(this).siblings('.inventory').text(fruitClicked.inventory);
            $('#wallet').text('Total Available Cash: $' + wallet);

        }
    });





});
