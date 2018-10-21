function Pizza(size, sauce) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = [];
}

Pizza.prototype.priceCalc = function(topping) {
  var toppingCount = 0;
  var pizzaPrice = 0;
  for (i=0; i >= this.toppings.length; i++) {
    toppingCount +=1;
  }
  if (this.size === "small") {
    pizzaPrice = 8.25;
  } else if (this.size === "medium") {
    pizzaPrice = 11.75;
  } else if (this.size === "large") {
    pizzaPrice = 14.25;
  } else if (this.size === "extra-large") {
    pizzaPrice = 16.50;
  }
  if (this.sauce === "pesto" || this.sauce === "alfredo") {
    pizzaPrice += 0.25;
  }
  pizzaPrice += (toppingCount * 0.25);
  $("#price-output").text("$" + pizzaPrice);
}

Pizza.prototype.orderEcho = function() {
$("#order-echo").text("You ordered a " + this.size + " pizza with " + this.sauce + " sauce and " + this.toppings.join(", ") + " toppings.")
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var size = $("#pizza-size").val();
    var sauce = $("input:radio[name=pizza-sauce]:checked").val();
    var newPizza = new Pizza(size, sauce);
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      newPizza.toppings.push($(this).val());
    });

    newPizza.orderEcho();
    newPizza.priceCalc();


  })
})
