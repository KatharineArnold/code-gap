$(document).ready(function () {
    // Getting references to the name input
    let projectNameInput = $("#projectName");
    let projectDescriptionInput = $("#projectDescription");

    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#projectForm", handleProjectFormSubmit);



    // A function to handle what happens when the form is submitted to create a new Author
    function handleProjectFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name field hasn't been filled out
        // if (!locationInput.val().trim().trim()) {
        //     return;
        // }

        const projectProfileData = {
            projectName: projectNameInput.val().trim(),
            projectDescription: projectDescriptionInput.val().trim()
        }
        // /this is posting to route
        $.post("/projects/add-project", projectProfileData).then(function (projectProfile) {
            console.log(projectProfile);
            document.getElementById("projectForm").reset();

        });
    };


    //     $(document).on("click", "#delete-volunteer", handleDeleteButton);


    //     // Function for handling what happens when the delete button is pressed
    //     function handleDeleteButton() {
    //         var volunteerData = $(this).parent("td").parent("tr").data("author");
    //         var id = volunteerData.id;
    //         $.ajax({
    //             method: "DELETE",
    //             url: "/list" + id
    //         })
    //             .then();
    //     }
    // });


    // this is allowing user to select multiple technologies
    jQuery('option').mousedown(function (e) {
        e.preventDefault();
        jQuery(this).toggleClass('selected');

        jQuery(this).prop('selected', !jQuery(this).prop('selected'));
        return false;
    });
});
