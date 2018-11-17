$(document).ready(function () {
    
    // Switch from details to modify modal 
    $("#switch-modify").click(function () {
        console.log("Switching from modify to details modal.")
        $("#detailsModal").modal('hide');
        $("#modifyModal").modal('show');
    });

});