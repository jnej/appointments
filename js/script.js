$(document).ready(function()  {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var descrip =$("input#descrip").val();
    var date =$("input#date").val();
    var time =$("input#time").val();

    $(".name").text(name);
    $(".descrip").text(descrip);
    $(".date").text(date);
    $(".time").text(time);

    $("#confirm").show();

    event.preventDefault();
  });
});
