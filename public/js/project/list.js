$(document).ready(function () {

    $(document).on("click", ".projectDeleteButton", handleDeleteButtonClick);

    function handleDeleteButtonClick(event) {
        let projectId = $(this).data("project_id");
        $.ajax({
            method: "DELETE",
            url: "/projects/" + projectId + "/delete"
        }).then(function () {
            window.location.href = '/projects/list';
        });
    };
});

