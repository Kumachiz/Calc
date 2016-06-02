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
  $('#additionOutput').text(result);
  });

  $("form#subtraction").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#subtraction1").val());
  var number2 = parseInt($("#subtraction2").val());
  var result = subtraction(number1, number2);
  $('#subtractionOutput').text(result);
  });

  $("form#multiplication").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#multiplication1").val());
  var number2 = parseInt($("#multiplication2").val());
  var result = multiplication(number1, number2);
  $('#multiplicationOutput').text(result);
  });
});
