$(document).ready(function () {

    populateTable();

    // Switch from details to modify modal 
    $("#switch-modify").click(function () {
        console.log("Switching from modify to details modal.")
        $("#detailsModal").modal('hide');
        $("#modifyModal").modal('show');
    });
    
});

// Get target list from API and send to next function to be added to page appropriately
function getData(url, OnCompletionFunction) {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, true);

    // Send json response to populateTable function when received
    request.onload = function () {
        // Return list of item(s) as json
        OnCompletionFunction(JSON.parse(this.responseText));
    }

    // Send request
    request.send();
}

// Enter items into table
function updateTable(itemList) {

    // Create HTML table rows from itemList JSON
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
        r[++j] = '</td><td><a href="#" onclick=detailsModal("' + itemList[key]["assetID"] + '")>Details</a> | <a href="#"data-toggle="modal" data-target="#modifyModal">Modify</a></td></tr>';
    }

    // Insert dynamically created rows into table
    $('#tableBody').html(r.join('')); 
}

function showDetailsModal(id) {
    console.log("The ID is: " + String(id));
}

// Populate table with list of items
function populateTable() {

    // Call list-items API to get list of all items and send data to updateTable function to fill table
    getData('https://bll0hoveu3.execute-api.us-east-1.amazonaws.com/prod/list-items', updateTable)
}

function detailsModal(id) {
    // Call list-items API to get item and send data to showDetailsModal function to fill modal
    getData('https://bll0hoveu3.execute-api.us-east-1.amazonaws.com/prod/get-items?assetID=' + id, updateTable)
}

