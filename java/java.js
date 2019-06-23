// chose topic
//create array of strings relating to topic and link them to "topic" variable
//create buttons using jquery for html for topic selected
//giphs should load static -data status still
//click to unpause

var topics = ["hamster", "dog", "cat", "goldfish", "meercat", "horse", "cow", "moose", "chicken"];

function renderButtons() {
    $("#btn").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#btn").append(a);
    }

}   
    renderButtons();

    $(document).on("click", ".btn", dipsplayGif);



function dipsplayGif() {
    https://api.giphy.com/v1/gifs/search?api_key=8IU6p9tovrWHktCTRmpFupLJcR4hpEi3&q=animals&limit=25&offset=0&rating=G&lang=en

    var animal = $(".animal").attr("data-name",dipsplayGif);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "api_key=8IU6p9tovrWHktCTRmpFupLJcR4hpEi3&q=animals&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            $("#gif-here").text(JSON.stringify(response));
            console.log(response)
        });
       
        
}       
