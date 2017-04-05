angular.module('appStore', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('products', {
        url: '/',
        templateUrl: './app/products/products.html'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'app/cart/cart.html',
        controller: 'cartCtrl'
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'app/checkout/checkout.html',
        controller: 'checkoutCtrl'
      });

      $urlRouterProvider.otherwise('/');
  });
