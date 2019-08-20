// hide/show portfolio beginning text
$("#IDC").click(function () {
    $(".openingText").hide();
    $("#actually").show()
})
$("#actually").click(function () {
    $(".openingText").show()
    $("#actually").hide()
})
// arrays for project galleries

var scImageArray = ["spaceCat-Playtime", "spaceCat-Gameover", "spaceCat-Scripts", "SpaceCat-Scratch"];
var psyImageArray = ["psygame2", "psygame3", "psygame4"];
var mageImageArray = ["mageFightGame", "mageFight2", "mageFight3", "mageFight4"]
var cosmicImageArray= ["cosmic2", "cosmicTriviaGame", "cosmic3", "cosmic4"]
var gifImageArray = ["brutal", "brutal2", "brutal3", "brutal4"]
var razputinImageArray = ["raz1", "raz3", "raz4", "raz7", "raz9"]

$("#scImages").on("click", function (){
    $("#scModal").css("display", "block");
    console.log("open sesame")
    for (var i = 0; i < scImageArray.length; i++) {
        var newImage = $('<img>');
        newImage.prop("style", "height: 550px; width: 700px; padding-bottom: 10px")
        newImage.prop("src", "assets/images/"+scImageArray[i]+".png")
        $("#SC").append(newImage);
    }
})
$("#scClose").on("click", function () {
    $("#scModal").css("display", "none");
})
    
$("#psyImages").on("click", function (){
    $("#psyModal").css("display", "block");
    console.log("open sesame")
    for (var i = 0; i < psyImageArray.length; i++) {
        var newImage = $('<img>');
        newImage.prop("style", "height: 550px; width: 700px; padding-bottom: 10px")
        newImage.prop("src", "assets/images/"+psyImageArray[i]+".png")
        $("#PSY").append(newImage);
    }
})
$("#psyClose").on("click", function(){
    $("#psyModal").css("display", "none");
})
$("#mageImages").on("click", function (){
    $("#mageModal").css("display", "block");
    console.log("open sesame")
    for (var i = 0; i < psyImageArray.length; i++) {
        var newImage = $('<img>');
        newImage.prop("style", "height: 550px; width: 700px; padding-bottom: 10px")
        newImage.prop("src", "assets/images/"+mageImageArray[i]+".png")
        $("#MF").append(newImage);
    }
})
$("#mageClose").on("click", function(){
    $("#mageModal").css("display", "none");
})

$("#cosmicImages").on("click", function (){
    $("#cosmicModal").css("display", "block");
    console.log("open sesame")
    for (var i = 0; i < cosmicImageArray.length; i++) {
        var newImage = $('<img>');
        newImage.prop("style", "height: 550px; width: 700px; padding-bottom: 10px")
        newImage.prop("src", "assets/images/"+cosmicImageArray[i]+".png")
        $("#CT").append(newImage);
    }
})
$("#cosmicClose").on("click", function(){
    $("#cosmicModal").css("display", "none");
})
$("#gifImages").on("click", function (){
    $("#gifModal").css("display", "block");
    console.log("open sesame")
    for (var i = 0; i < gifImageArray.length; i++) {
        var newImage = $('<img>');
        newImage.prop("style", "height: 550px; width: 700px; padding-bottom: 10px")
        newImage.prop("src", "assets/images/"+gifImageArray[i]+".png")
        $("#BG").append(newImage);
    }
})
$("#gifClose").on("click", function(){
    $("#gifModal").css("display", "none");
})
$("#razImages").on("click", function (){
    $("#razModal").css("display", "block");
    console.log("open sesame")
    for (var i = 0; i < razputinImageArray.length; i++) {
        var newImage = $('<img>');
        newImage.prop("style", "height: 550px; width: 700px; padding-bottom: 10px")
        newImage.prop("src", "assets/images/"+razputinImageArray[i]+".png")
        $("#RAZ").append(newImage);
    }
})
$("#razClose").on("click", function(){
    $("#razModal").css("display", "none");
})
$("#openEmail").on("click", function(event){
    event.preventDefault();
    alert("don't trip, email functionality coming soon!");
})
$("#switchLink").on("click", function(){
    $("#switchImage").css("display", "block");
    console.log("maybe?");
    $("#switchClose").css("display", "block");
})
 $("#switchClose").on("click", function(){
    $("#switchImage").css("display", "none");
    $("#switchClose").css("display", "none");
 })
// $("#emailClose").on("click", function(){
//     $("#mailModal").css("display", "none");
// })
// var sendEmail = function(){
//     var name = $("#modalName").val();
//     var email = $("#modalEmail").val();
//     var message = $("#modalMessage").val();
//     window.location.href = 'mailto:e.sherwood0@yahoo.com?subject=portfolio-contact - ' + name + ' (' + email + ')' + '&body=' + message;
//     alert("message sent!");
// }
// $("#send").on("click", function(){
//     sendEmail();
// })