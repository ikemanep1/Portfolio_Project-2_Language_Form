$(document).ready(function(){
  $("#userinterface").submit(function(event){
    event.preventDefault();


var interests = parseInt($("select#interests").val());
var drivingQuestion = parseInt($("select#drivingquestion").val());
var osQuestion = parseInt($("select#osquestion").val());
var energyDrinkQuestion = parseInt($("select#energydrinkquestion").val());
var goals = parseInt($("select#goals").val());

var formResult = interests + drivingQuestion + osQuestion + energyDrinkQuestion + goals;

  console.log(formResult)

    if (formResult <= 15 && formResult > 10) {
      $("#python").show();
      $("#swift").hide();
      $("#rust").hide();
    }

    else if (formResult <=10 && formResult > 5) {
    $("#python").hide();
    $("#swift").show();
    $("#rust").hide();

    }

    else if (formResult < 6) {
    $("#python").hide();
    $("#swift").hide();
    $("#rust").show();

    }

    else {
      alert("That's enough, citizen")
    }

  });
});
