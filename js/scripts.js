$(document).ready(function(){
  $("#userinterface").submit(function(event){
    event.preventDefault();
    var interests = parseInt($("select#interests").val());
    var scenario1 = parseInt($("select#drivingquestion").val());
    var scenario2 = parseInt($("select#osquestion").val());
    var scenario3 = parseInt($("select#energydrinkquestion").val());
    var scenario4 = parseInt($("select#goals").val());



    if (interests === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("#resultc").hide();
    }
    else if (interests === 2) {
      $("#resultb").show();
      $("#resulta").hide();
      $("#resultc").hide();
    }
    else if (interests === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("#resultb").hide();
    }



    if (drivingquestion === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("#resultc").hide();
    }
    else if (drivingquestion === 2) {
      $("#resultb").show();
      $("#resulta").hide();
      $("#resultc").hide();
    }
    else if (drivingquestion === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("#resultb").hide();
    }


    if (osquestion === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("#resultc").hide();
    }
    else if (osquestion === 2) {
      $("#resultb").show();
      $("#resultb").hide();
      $("#resultc").hide();
    }
    else if (osquestion === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("#resultb").hide();
    }


    if (energydrinkquestion === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("#resultc").hide();
    }
    else if (energydrinkquestion === 2) {
      $("#resultb").show();
      $("#resulta").hide();
      $("#resultc").hide();
    }
    else if (energydrinkquestion === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("#resultb").hide();
    }


    if (goals === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("resultc").hide();
    }
    else if (goals === 2) {
      $("#resultb").show();
      $("#resulta").hide();
      $("#resultc").hide();
    }
    else if (goals === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("#resultb").hide();
    }

    else {
       $("#resultd").show();
     }

  });
});
