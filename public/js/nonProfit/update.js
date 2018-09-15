$(document).ready(function () {
    // Getting references to the name input
    let orgNameInput = $("#orgName");
    let orgDescriptionInput = $("#orgDescription");
    let orgEmailInput = $("#orgEmail");
    let orgPhoneInput = $("#orgPhone");
    let orgLocationInput = $("#orgLocation");
    let nonProfitProfileId = $("#orgForm").data("non_profit_profile_id");

    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#orgForm", handleOrgFormSubmit);

    // A function to handle what happens when the form is submitted to create a new Author
    function handleOrgFormSubmit(event) {
        event.preventDefault();

        const profileData = {
            companyName: orgNameInput.val().trim(),
            description: orgDescriptionInput.val().trim(),
            phone: orgPhoneInput.val(),
            email: orgEmailInput.val(),
            location: orgLocationInput.val().trim()
        }
        $.ajax({
            method: "PUT",
            url: "/non-profit/" + nonProfitProfileId + "/update",
            data: profileData
        }).then(function () {
            window.location.href = '/user';
        });
    };
});

