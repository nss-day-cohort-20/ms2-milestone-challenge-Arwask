// This IIFE will add a new module to Carlot in the
// namespace of CarLot.Inventory
var CarLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars
  let car_inventory = [];  

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
      var inventoryLoader = new XMLHttpRequest();
  let inventory =  {};
  let executeAfterLoad = function(){
      inventoryLoader.addEventListener("load", function () {
        var data = JSON.parse(event.target.responseText);
        data.cars.forEach(function(car)
        {
          car_inventory.push(car);
        })
        globalScopeCarLot.dom.displayToDom(car_inventory);
      });
    }
  inventory.getCarLot = function()
  {
    return car_inventory;
  }
  inventory.loadjson = function()
  {
  inventoryLoader.open("GET", "../inventory.json");
  inventoryLoader.send();
  executeAfterLoad();
  }();
  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(CarLot || {});