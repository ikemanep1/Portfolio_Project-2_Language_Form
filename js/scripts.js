$(document).ready(function(){
  $("#userinterface").submit(function(event){
    event.preventDefault();
    var experience = parseInt($("select#experience").val());
    var interests = parseInt($("select#interests").val());
    var os = parseInt($("select#os").val());
    var focuses = parseInt($("select#focuses").val());
    var goals = parseInt($("select#goals").val());
    var formResult = experience + interests + os + focuses + goals;
    $("#JavaScript").hide();
    $("#Ruby").hide();
    $("#Csharp").hide();
    if (formResult < 6) {
      $("#JavaScript").show();
    }
    else if (formResult <=10 && formResult > 5) {
      $("#Ruby").show();
    }
    else if (formResult <= 15 && formResult > 10) {
      $("#Csharp").show();
    }
    else {
      alert("Please fill out the entire form.")
    }
  });
});
