$(document).ready(function () {
    // Getting references to the name input
    let locationInput = $("#location");
    let hoursInput = $("#hours");
    let volunteerProfileId = $("#volunteerForm").data("volunteer_profile_id");

    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#volunteerForm", handleVolunteerFormSubmit);

    // A function to handle what happens when the form is submitted to create a new Author
    function handleVolunteerFormSubmit(event) {
        event.preventDefault();

        const profileData = {
            location: locationInput.val().trim(),
            hours: hoursInput.val().trim()
        }
        $.ajax({
            method: "PUT",
            url: "/volunteer/" + volunteerProfileId + "/update",
            data: profileData
        }).then(function () {
            window.location.href = '/user';
        });
    };
});

