$(document).ready(function()  {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#nameInput").val();
    var descripInput =$("input#descrip").val();
    var dateInput =$("input#date").val();
    var timeInput =$("input#time").val();

    $(".name").text(nameInput);
    $(".descrip").text(descripInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    $("#confirm").show();

    event.preventDefault();
  });
});
