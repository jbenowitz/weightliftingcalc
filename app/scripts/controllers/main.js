'use strict';

/**
 * @ngdoc function
 * @name weightcalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weightcalcApp
 */
angular.module('weightcalcApp')
  .controller('MainCtrl', function () {
    
    this.bars = [
      {
        name: 'Training',
        weight: 25
      },
      {
        name: 'Women\'s CH',
        weight: 33
      },
      {
        name: 'Women\'s EW',
        weight: 35
      },
      {
        name: 'Men\'s',
        weight: 45
      }
    ];
    
    
    this.bar = {
      name: undefined,
      value: undefined
    };
  });
