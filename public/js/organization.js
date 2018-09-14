$(document).ready(function () {
    // Getting references to the name input
    let orgNameInput = $("#orgName");
    let orgDescriptionInput = $("#orgDescription");

    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#orgForm", handleOrgFormSubmit);



    // A function to handle what happens when the form is submitted to create a new Author
    function handleOrgFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name field hasn't been filled out
        // if (!locationInput.val().trim().trim()) {
        //     return;
        // }

        const orgProfileData = {
            companyName: orgNameInput.val().trim(),
            description: orgDescriptionInput.val().trim()
        }
        // /this is posting to route
        $.post("/non-profit/create", orgProfileData).then(function (orgProfile) {
            console.log(orgProfile);
            document.getElementById("orgForm").reset();
            window.location.href = '/user';


        });
    };



});
