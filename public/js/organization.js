$(document).ready(function () {
    // Getting references to the name input
    let orgNameInput = $("#orgName");
    let orgDescriptionInput = $("#orgDescription");
    let orgEmailInput = $("#orgEmail");
    let orgPhoneInput = $("#orgPhone");
    let orgLocationInput = $("#orgLocation");

    // Adding event listeners to the form to create a new object
    $(document).on("submit", "#orgForm", handleOrgFormSubmit);



    // A function to handle what happens when the form is submitted to create a new Author
    function handleOrgFormSubmit(event) {
        event.preventDefault();

        const orgProfileData = {
            companyName: orgNameInput.val().trim(),
            description: orgDescriptionInput.val().trim(),
            phone: orgPhoneInput.val().trim(),
            email: orgEmailInput.val().trim(),
            Location: orgLocationInput.val().trim()
        }
        // /this is posting to route
        $.post("/non-profit/create", orgProfileData).then(function (orgProfile) {
            console.log(orgProfile);
            document.getElementById("orgForm").reset();
            window.location.href = '/user';


        });
    };



});
