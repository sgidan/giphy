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

            results.forEach(function (element, index) {
                var gifDiv = $('<div>');
                var animalImage = $('<img>');
                animalImage.addClass("gif-image");
                animalImage.attr(`data-id`, index);
                animalImage.attr("data-state", "still");
                animalImage.attr('data-still', element.images.fixed_width_still.url);
                animalImage.attr('data-animated', results[index].images.fixed_width.url);
                var rating = element.rating
                var p = $('<p>').text('Rating: ' + rating);
                animalImage.attr('src', element.images.fixed_width_still.url);
                gifDiv.append(p);
                gifDiv.append(animalImage);
                $('#gif-here').prepend(gifDiv);

            });

        });

    $("#gif-here").on("click", ".gif-image", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        var imgIndex = parseInt($(this).attr('data-id'));

        console.log(imgIndex);


        if (state === "still") {
            $(this).attr("src", $(this).attr('data-animated'));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");

        }
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

