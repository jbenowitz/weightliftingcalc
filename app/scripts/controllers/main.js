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
    var _this = this;

    //Public variables;
    this.bars = undefined;
    this.weights = undefined;
    this.bar = undefined;

    //Public methods:
    this.getTotalPounds = getTotalPounds;
    this.clear = _init;

    _init();

    //Binded Methods
    function getTotalPounds() {
      var total = _this.bar ? _.toNumber(_this.bar.weight) : 0;
      total = _.reduce(_this.weights, 
                       function(sum, n) {return sum + n.getWeight();}, 
                       total);
      return total;
    }

    //Private Functions
    function _init() {
      _this.bars = _generateBars();
      _this.weights = _generateWeights();
      _this.bar = undefined;
    }

    function _generateBars() {
      return [
        new BarType("Training", 25),
        new BarType("Women's CH", 33),
        new BarType("Women's EW", 35),
        new BarType("Men's", 45)
      ];
    }

    function _generateWeights() {
      return [
        new WeightType("2.5lb", 2.5),
        new WeightType("5lb", 5),
        new WeightType("10lb", 10),
        new WeightType("15lb", 15),
        new WeightType("25lb", 25)
      ];
    }

  });

function WeightType(name, weight) {
  var _this = this;

  //Public Variables
  this.name = name;
  this.weight = weight;
  this.amount = undefined;

  //Public Functions
  this.getWeight = getWeight;

  //Binded Functions
  function getWeight() {
    if (_.isUndefined(_this.amount)) {
      return 0;
    }
    return _this.weight * _this.amount;
  }
}

function BarType(name, weight) {
  //Public Variables
  this.name = name;
  this.weight = weight;
}
