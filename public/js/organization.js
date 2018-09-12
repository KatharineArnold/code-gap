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

        });
    };


    // $(document).on("click", "#update-organization", handleOrganizationUpdate);

    // // This function figures out which post we want to edit and takes it to the appropriate url
    // function handleOrganizationUpdate() {
    //     var currentOrganization = $(this)
    //         .parent()
    //         .parent()
    //         .data("organization");
    //     window.location.href = "" + currentOrganization.id;
    // }




    //     $(document).on("click", "#delete-organization", handleDeleteButton);


    //     // Function for handling what happens when the delete button is pressed
    //     function handleDeleteButton() {
    //         var organizationData = $(this).parent("td").parent("tr").data("");
    //         var id = organizationData.id;
    //         $.ajax({
    //             method: "DELETE",
    //             url: "" + id
    //         })
    //             .then();
    //     }
    // });

});
