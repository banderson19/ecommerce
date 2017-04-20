angular.module('appStore').controller('cartCtrl', function ($scope, cartService) {
$scope.itemsToDisplay = [];

function showProducts() {
  if(localStorage.cartItems !== undefined){
    var cartItems = JSON.parse(localStorage.cartItems);
    var products = JSON.parse(localStorage.products);

        for(i=0; i<cartItems.length; i++) {
          for(j=0; j < products.length; j++) {
            if (cartItems[i] == products[j].productid){
              $scope.itemsToDisplay.push(products[j]);
              console.log("item added");
            }
          }
        }
  }
  else {
    alert("Hey dude your cart empty, go add something.");
  }

}

$scope.clearCart = function() {
  localStorage.clear();
  showProducts();
}

showProducts();
});
