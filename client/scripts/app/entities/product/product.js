'use strict';

angular.module('membershipApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('product', {
                parent: 'entity',
                url: '/product',
                data: {
                    roles: [],
                    pageTitle: 'membershipApp.product.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/product/products.html',
                        controller: 'ProductController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('product');
                        return $translate.refresh();
                    }]
                }
            })
            .state('productDetail', {
                parent: 'entity',
                url: '/product/:id',
                data: {
                    roles: [],
                    pageTitle: 'membershipApp.product.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/product/product-detail.html',
                        controller: 'ProductDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('product');
                        return $translate.refresh();
                    }]
                }
            })
            .state('productSave', {
                parent: 'entity',
                url: '/product/save/:id',
                data: {
                    roles: [],
                    pageTitle: 'membershipApp.product.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/product/product-save.html',
                        controller: 'ProductSaveController'
                    }
                },
               
            });
            
    });
