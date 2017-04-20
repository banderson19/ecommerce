angular.module('appStore')
.controller('productCtrl', function ($scope, productService) {

$scope.cartItems = [];
$scope.cartCount = 0;

  function getProducts() {
    console.log('gathering products from database');
    productService.itemData().then(function(response){
      $scope.productsData = response;
      localStorage.setItem("products", JSON.stringify(response));
      console.log(response)
        });
    }
    getProducts();

    $scope.addToCart = function(productid) {
      console.log("product id " + productid + " has been added to cartItems array(localStorage)");
      var itemsInCart = JSON.parse(localStorage.getItem('cartItems'));
      if (itemsInCart !== null){
        if (itemsInCart.length > 1 ) {
          for(i=0; i<itemsInCart.length; i++) {
            $scope.cartItems.push(itemsInCart[i]);
          }
        } else if(itemsInCart.length == 1) {
          $scope.cartItems.push(itemsInCart[0]);
        }
      }

      $scope.cartItems.push(productid);
      $scope.cartCount++;
      localStorage.setItem("cartItems", JSON.stringify($scope.cartItems));

      // productService.grabData().then(function(response){
      //   $scope.dataGrabbed = response;
      //   console.log(response);
      // });
    }
});
