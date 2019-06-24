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
    };
    $(".animal").on("click", function (event) {
        event.preventDefault();
        displayGif(this);
    }
    )

};

$(document).ready(function () {
    renderButtons();

});


// "click", ".btn", dipsplayGif());



function displayGif(button) {

    console.log("this click listener is active! ");

    var animal = $(button).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=8IU6p9tovrWHktCTRmpFupLJcR4hpEi3&limit=25";

    console.log(animal);

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)

            var results = response.data;

            results.forEach(function (element) {
                var gifDiv = $('<div>');
                var animalImage = $('<img>');
                var rating = results.rating
                var p = $('<p>').text('Rating: ' + rating);
                animalImage.attr('src', element.images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(animalImage);
                $('#gif-here').prepend(gifDiv);

            })

        });


}
$("#add-animal").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var animal = $("#animal-input").val().trim();

    // The movie from the textbox is then added to our array
    topics.push(animal);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
    
});

