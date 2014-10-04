'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.news = [
      {region:'歐洲',title:'歐洲新聞1號'},
      {region:'美洲',title:'美洲新聞1號'}
      /*{region:'歐洲',title:'歐洲新聞2號'},
      {region:'亞洲',title:'亞洲新聞1號'},
      {region:'歐洲',title:'歐洲新聞3號'},
      {region:'亞洲',title:'亞洲新聞1號'},
      {region:'非洲',title:'非洲新聞1號'},
      {region:'大洋洲',title:'大洋洲新聞1號'},
      {region:'未分類',title:'未分類新聞1號'}*/
    ];
  });
