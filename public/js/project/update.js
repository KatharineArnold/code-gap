$(document).ready(function () {
    // Getting references to the name input
    let projectNameInput = $("#projectName");
    let projectDescriptionInput = $("#projectDescription");
    let projectId = $("#projectForm").data("project_id");

    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#projectForm", handleProjectFormSubmit);

    // A function to handle what happens when the form is submitted to create a new Author
    function handleProjectFormSubmit(event) {
        event.preventDefault();

        const profileData = {
            projectName: projectNameInput.val().trim(),
            projectDescription: projectDescriptionInput.val().trim()
        }
        $.ajax({
            method: "PUT",
            url: "/projects/" + projectId + "/update",
            data: profileData
        }).then(function () {
            window.location.href = '/projects/list';
        });
    };
});

