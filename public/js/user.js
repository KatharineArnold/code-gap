$(document).ready(function () {

    let volunteerProfileId = $("#deleteButton").data("volunteer_profile_id");

    $(document).on("click", "#deleteButton", handleDeleteButtonClick);

    // A function to handle what happens when the form is submitted to create a new Author
    function handleDeleteButtonClick(event) {
        $.ajax({
            method: "DELETE",
            url: "/volunteer/" + volunteerProfileId + "/delete"
        }).then(function () {
            window.location.href = '/user';
        });
    };
});

