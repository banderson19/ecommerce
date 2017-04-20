angular.module('appStore').service('cartService', function($http, $q) {
  this.itemData = function() {
    console.log('my cart service is firing');
    var deferred = $q.defer();
    $http.get('/products/:productid').then(function(response) {
      deferred.resolve(response.data);
    })
    return deferred.promice;
  }
});
