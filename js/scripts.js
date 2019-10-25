$(document).ready(function(){
  $("#userinterface").submit(function(event){
    event.preventDefault();
    var interests = parseInt($("select#interests").val());
    var scenario1 = parseInt($("select#scenario1").val());
    var scenario2 = parseInt($("select#scenario2").val());
    var scenario3 = parseInt($("select#scenario3").val());
    var scenario4 = parseInt($("select#scenario4").val());



    if (interests === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("resultc").hide();
    }
    if (interests === 2) {
      $("#resultb").show();
      $("#resulta").hide();
      $("resultc").hide();
    }
    if (interests === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("resultb").hide();
    }



    if (scenario1 === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("resultc").hide();
    }
    if (scenario1 === 2) {
      $("#resultb").show();
      $("#resulta").hide();
      $("resultc").hide();
    }
    if (scenario1 === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("resultb").hide();
    }


    if (scenario2 === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("resultc").hide();
    }
    if (scenario2 === 2) {
      $("#resultb").show();
      $("#resultb").hide();
      $("resultc").hide();
    }
    if (scenario2 === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("resultb").hide();
    }


    if (scenario3 === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("resultc").hide();
    }
    if (scenario3 === 2) {
      $("#resultb").show();
      $("#resulta").hide();
      $("resultc").hide();
    }
    if (scenario3 === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("resultb").hide();
    }


    if (scenario4 === 1) {
      $("#resulta").show();
      $("#resultb").hide();
      $("resultc").hide();
    }
    if (scenario4 === 2) {
      $("#resultb").show();
      $("#resulta").hide();
      $("resultc").hide();
    }
    if (scenario4 === 3) {
      $("#resultc").show();
      $("#resulta").hide();
      $("resultb").hide();
    }

    else {
       alert('Thats enough, young man.');
     }

  });
});
