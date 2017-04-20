angular.module('appStore').service('productService', function($http, $q){
  this.itemData = function() {

    var deferred = $q.defer();
    $http.get('/products').then(function(response) {
      deferred.resolve(response.data);
    })
      return deferred.promise;
    }
  // this.grabData = function() {
  //   var deferred = $q.defer();
  //   $http.get('/products/:productid').then(function(result){
  //     deferred.resolve(result.data);
  //   })
  //     return deferred.promice;
  // }

});
