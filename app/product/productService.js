angular.module('appStore').service('productService', function($http, $q){
  this.itemData = function() {
    console.log('this fired');
    var deferred = $q.defer();
    $http.get('/products').then(function(response) {
      deferred.resolve(response.data);
    })
      return deferred.promise;
    }
});
