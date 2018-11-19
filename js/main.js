$(document).ready(function () {

    loadDoc();

    // Switch from details to modify modal 
    $("#switch-modify").click(function () {
        console.log("Switching from modify to details modal.")
        $("#detailsModal").modal('hide');
        $("#modifyModal").modal('show');
    });

});

function populateTable(items) {

    // Get list of items in json
    var itemList = getItems();

    // Create HTML table rows from JSON
    var r = new Array(), j = -1;
    for (var key=0, size=itemList.length; key<size; key++){
        r[++j] ='<tr><td>';
        r[++j] = itemList[key]["assetID"];
        r[++j] = '</td><td>';
        r[++j] = itemList[key]["assetLocation"];
        r[++j] = '</td><td>';
        r[++j] = itemList[key]["organizationalTag"];
        r[++j] = '</td><td>';
        r[++j] = itemList[key]["manufacturer"];
        r[++j] = '</td><td>';
        r[++j] = itemList[key]["manufacturerPart"];
        r[++j] = '</td><td>';
        r[++j] = itemList[key]["description"];
        r[++j] = '</td><td>';
        r[++j] = itemList[key]["implementationMonth"];
        r[++j] = '/';
        r[++j] = itemList[key]["implementationYear"];
        r[++j] = '</td><td><a href="#" data-toggle="modal" data-target="#detailsModal">Details</a> | <a href="#"data-toggle="modal" data-target="#modifyModal">Modify</a></td></tr>';
    }

    // Insert dynamically created rows into 
    $('#tableBody').html(r.join('')); 
}

function getItems() {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://bll0hoveu3.execute-api.us-east-1.amazonaws.com/prod/list-items', true);

    // Send json response to populateTable function when received
    request.onload = function () {
        return this.responseText;
    }

    // Send request
    request.send();
}
