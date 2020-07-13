$(() => {

    $(".dev").on("click", function (event) {
        var id = $(this).data("id");
        // Send the PUT request.
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function () {
                console.log(" your burger is ready");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $("#newBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // [name=burger] will find an element with a "name" attribute equal to the string "plan"
        var newBurg = {
            burger_name: $("[name=burger]").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
                console.log(" new burger  ordered");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});