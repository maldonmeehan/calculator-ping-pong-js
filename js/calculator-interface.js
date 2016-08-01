var Calculator = require('./../js/ping-pong.js').calculatorModule;

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    var simpleCalculator = new Calculator();
    if (operator === "add") {
      result = simpleCalculator.addition(number1, number2);
    } else if (operator === "subtract") {
      result = simpleCalculator.subtract(number1, number2);
    } else if (operator === "multiply") {
      result = simpleCalculator.multiply(number1, number2);
    } else {
      result = simpleCalculator.divide(number1, number2);
    }
    $("#output").text(result);
  });
});
