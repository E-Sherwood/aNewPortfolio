$("#IDC").click(function () {
    $(".openingText").hide();
    $("#actually").show()
})
$("#actually").click(function () {
    $(".openingText").show()
    $("#actually").hide()
})

var scModal = $("#scModal");
var scButton = $("#scImages");
var scClose = $("#scClose");
scButton.on("click", function () {
    $("#scModal").css("display", "block");
    console.log("open sesame")
})
scClose.on("click", function () {
    $("#scModal").css("display", "none");
})
var scImageArray = ["spaceCat-Playtime", "spaceCat-Gameover", "spaceCat-Scripts", "SpaceCat-Scratch"];
$("#nextButton").on("click", function () {
    for (var i = 0; i < scImageArray.length; i++) {
        $("#test").prop("src", "assets/images/" + scImageArray[i] +".png");
        
         if (i === scImageArray.length) {
             i === 0;
         }
    }
})    
