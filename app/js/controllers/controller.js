counterApp.counterController = (function(){
  var self = this;
  self.count=10;

  increment = function(){
    self.count++;
  };

  decrement = function(){
    self.count--;
  };

});
