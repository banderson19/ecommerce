angular.module('appStore').controller('homeCtrl', function ($scope, productService) {
          function getProducts() {
          productService.shoeData().then(function(response){
            $scope.productData = response;
            console.log(response)
          });
          getProducts();
      }
});
