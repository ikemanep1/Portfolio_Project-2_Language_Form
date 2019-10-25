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
    }
    if (interests === 2) {
      $("#resultb").show();
    }
    if (interests === 3) {
      $("#resultc").show();
    }



    if (scenario1 === 1) {
      $("#resulta").show();
    }
    if (scenario1 === 2) {
      $("#resultb").show();
    }
    if (scenario1 === 3) {
      $("#resultc").show();
    }


    if (scenario2 === 1) {
      $("#resulta").show();
    }
    if (scenario2 === 2) {
      $("#resultb").show();
    }
    if (scenario2 === 3) {
      $("#resultc").show();
    }


    if (scenario3 === 1) {
      $("#resulta").show();
    }
    if (scenario3 === 2) {
      $("#resultb").show();
    }
    if (scenario3 === 3) {
      $("#resultc").show();
    }


    if (scenario4 === 1) {
      $("#resulta").show();
    }
    if (scenario4 === 2) {
      $("#resultb").show();
    }
    if (scenario4 === 3) {
      $("#resultc").show();
    }

  });
});
