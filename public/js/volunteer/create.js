$(document).ready(function () {
    // Getting references to the name input
    let locationInput = $("#location");
    let hoursInput = $("#hours");
    let techInput = $("#techSelect");
    let bioInput = $("#bio");
    // console.log(techInput);

    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#volunteerForm", handleVolunteerFormSubmit);



    // A function to handle what happens when the form is submitted to create a new Author
    function handleVolunteerFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name field hasn't been filled out
        // if (!locationInput.val().trim().trim()) {
        //     return;
        // }

        const profileData = {
            location: locationInput.val().trim(),
            hours: hoursInput.val().trim(),
            bio: bioInput.val().trim(),
            technologies: techInput.val().join(", ")
        }
        //post form data to create endpoint
        $.post("/volunteer/create", profileData).then(function (volunteerProfile) {
            console.log(volunteerProfile);
            document.getElementById("volunteerForm").reset();
            window.location.href = '/user';

        });
    };

    // this is allowing user to select multiple technologies
    jQuery('option').mousedown(function (e) {
        e.preventDefault();
        jQuery(this).toggleClass('selected');

        jQuery(this).prop('selected', !jQuery(this).prop('selected'));
        return false;
    });

});

