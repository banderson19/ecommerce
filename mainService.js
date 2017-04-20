angular.module('appStore').factory('mainService', function($http) {
  return {
    getProducts (products, price) {
      return $http.get('/products').then(response => response.data)
    }
  }
});
