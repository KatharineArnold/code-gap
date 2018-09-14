$(document).ready(function () {

    let volunteerProfileId = $("#deleteButton").data("volunteer_profile_id");

    $(document).on("click", "#deleteButton", handleDeleteButtonClick);

    function handleDeleteButtonClick(event) {
        $.ajax({
            method: "DELETE",
            url: "/volunteer/" + volunteerProfileId + "/delete"
        }).then(function () {
            window.location.href = '/user';
        });
    };

    $(document).on("click", ".orgDeleteButton", handleOrgDeleteButtonClick);

    function handleOrgDeleteButtonClick(event) {
        const nonProfitProfileId = $(this).data('non_profit_profile_id');
        $.ajax({
            method: "DELETE",
            url: "/non-profit/" + nonProfitProfileId + "/delete"
        }).then(function () {
            window.location.href = '/user';
        });
    };
});

