$(document).ready(function () {
    // Getting references to the name input
    let locationInput = $("#location");
    let hoursInput = $("#hours");

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
            hours: hoursInput.val().trim()
        }
        //post form data to create endpoint
        $.post("/volunteer/create", profileData).then(function (volunteerProfile) {
            console.log(volunteerProfile);
            document.getElementById("volunteerForm").reset();
        });
    };




    // $(document).on("click", "#update-volunteer", handleVolunteerUpdate);

    // // This function figures out which post we want to edit and takes it to the appropriate url
    // function handleVolunteerUpdate() {
    //     var currentVolunteer = $(this)
    //         .parent()
    //         .parent()
    //         .data("");
    //     window.location.href = "" + currentVolunteer.id;
    // }




    //     $(document).on("click", "#delete-volunteer", handleDeleteButton);


    //     // Function for handling what happens when the delete button is pressed
    //     function handleDeleteButton() {
    //         var volunteerData = $(this).parent("td").parent("tr").data("");
    //         var id = volunteerData.id;
    //         $.ajax({
    //             method: "DELETE",
    //             url: "/list" + id
    //         })
    //             .then();
    //     }
});

