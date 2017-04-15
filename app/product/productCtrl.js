angular.module('appStore').controller('productCtrl', function ($scope, productService) {
          function getProducts() {
            console.log('getproducts fired');
          productService.itemData().then(function(response){
            $scope.productData = response;
            console.log(response)
          });
      }
      getProducts();
});
