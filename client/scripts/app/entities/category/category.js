'use strict';

angular.module('jhipsterApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('category', {
                parent: 'entity',
                url: '/category',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'jhipsterApp.category.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/category/categorys.html',
                        controller: 'CategoryController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('category');
                        return $translate.refresh();
                    }]
                }
            })
            .state('categoryDetail', {
                parent: 'entity',
                url: '/category/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'jhipsterApp.category.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/category/category-detail.html',
                        controller: 'CategoryDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('category');
                        return $translate.refresh();
                    }]
                }
            });
    });
