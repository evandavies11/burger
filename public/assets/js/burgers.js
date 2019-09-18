$(document).ready(function () {
    $(".change-devour").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        //var newDevour = $(this).data("newDevour");

        var newBurgerSpot = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerSpot
        }).then(
            function () {
                console.log("changed devoured to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: 0,
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});