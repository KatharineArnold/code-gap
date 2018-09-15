$(document).ready(function () {
    // Getting references to the name input
    let projectNameInput = $("#projectName");
    let projectDescriptionInput = $("#projectDescription");
    let nonProfitProfileId = $("#projectSubmit").data('nonprofitprofileid');

    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#projectForm", handleProjectFormSubmit);



    // A function to handle what happens when the form is submitted to create a new Author
    function handleProjectFormSubmit(event) {
        event.preventDefault();


        const projectProfileData = {
            projectName: projectNameInput.val().trim(),
            projectDescription: projectDescriptionInput.val().trim(),
            nonProfitProfileId: nonProfitProfileId
        }
        // /this is posting to route
        $.post("/projects/add-project", projectProfileData).then(function (projectProfile) {
            console.log(projectProfile);
            document.getElementById("projectForm").reset();
            window.location.href = '/non-profit/list';


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
