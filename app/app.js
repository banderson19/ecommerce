angular.module('appStore', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/home/homeTmpl.html',
        controller: 'homeCtrl'
      })
      .state('product', {
        url: '/product',
        templateUrl: './app/product/productTmpl.html',
        controller: 'productCtrl'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: './app/cart/cartTmpl.html',
        controller: 'cartCtrl'
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: './checkout/checkoutTmpl.html',
        controller: 'checkoutCtrl'
      })

      $urlRouterProvider.otherwise('/');
  });
