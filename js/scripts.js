var add = function(number1, number2) {
  return number1 + number2;
};
var subtraction = function(number1, number2) {
  return number1 - number2;
};

var multiplication = function(number1, number2) {
  return number1 * number2;
};
var division = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $('#output').text(result);
  });
});
//var number1 = parseInt(prompt("Enter a number:"));
//var number2 = parseInt(prompt("Enter another number:"));
//var result = add(number1, number2);
//var result = subtraction(number1, number2)
//var result = multiplication(number1, number2);
//var result = division(number1, number2);
//alert(result);
