$("#item-form").submit(function(e) {

  e.preventDefault()
  formArray = $(this).serializeArray();

  var itemObject = {};
  for (var i = 0; i < formArray.length; i++){
    itemObject[formArray[i]['name']] = formArray[i]['value'];
  }
  console.log(itemObject)

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://bll0hoveu3.execute-api.us-east-1.amazonaws.com/prod/create-item",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "processData": false,
    "data": JSON.stringify(itemObject)
  }

$.ajax(settings).done(function (response) {
  console.log(response);
});

  // $.ajax({
  //       method: 'POST',
  //       url: 'https://bll0hoveu3.execute-api.us-east-1.amazonaws.com/prod//create-item',
  //       data: JSON.stringify(itemObject),
  //       contentType: 'application/json',
  //       success: completeRequest,
  //       error: function ajaxError(jqXHR, textStatus, errorThrown) {
  //           console.error('Error creating new item: ', textStatus, ', Details: ', errorThrown);
  //           console.error('Response: ', jqXHR.responseText);
  //           alert('An error occured when creating a new item:\n' + jqXHR.responseText);
  //       }
  //   })
});

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://bll0hoveu3.execute-api.us-east-1.amazonaws.com/prod/list-items",
//   "method": "GET",
// }

// $.ajax(settings).done(function (response) {
//   // console.log(response);
// });

  // console.log(JSON.stringify($('#item-form').serializeArray()))
  // console.log($("select[name=assignedLocation]").val())
  // console.log($("input[name=organizationalTag]").val())
  // console.log($("input[name=manufacturer]").val())
  // console.log($("input[name=manufacturerPart]").val())
  // console.log($("input[name=description]").val())
  // console.log($("select[name=implementationMonth]").val())
  // console.log($("input[name=implementationYear]").val())
  // console.log($("textarea[name=maintenanceNotes]").val())




function create_item(new_item) {
    
}

function completeRequest(result) {
    console.log('Response received from API: ', result);
}

function delete_item(new_item) {
    $.ajax({
        method: 'POST',
        url: _config.api.invokeURL + '/delete-item',
        data: JSON.stringify({
            assetID: new_item.assetID
        }),
        contentType: 'application/json',
        success: completeRequest,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            console.error('Error creating new item: ', textStatus, ', Details: ', errorThrown);
            console.error('Response: ', jqXHR.responseText);
            alert('An error occured when creating a new item:\n' + jqXHR.responseText);
        }
    })
}

function get_item(new_item) {
    $.ajax({
        method: 'POST',
        url: _config.api.invokeURL + '/get-item',
        data: JSON.stringify({
            assetID: new_item.assetID
        }),
        contentType: 'application/json',
        success: completeRequest,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            console.error('Error creating new item: ', textStatus, ', Details: ', errorThrown);
            console.error('Response: ', jqXHR.responseText);
            alert('An error occured when creating a new item:\n' + jqXHR.responseText);
        }
    })
}

function update_item(new_item) {
    $.ajax({
        method: 'POST',
        url: _config.api.invokeURL + '/update-item',
        data: JSON.stringify({
            item: {
                assetID: new_item.assetID,
                text: new_item.text,
                assetLocation: new_item.assetLocation,
                description: new_item.description,
                implementationMonth: new_item.implementationMonth,
                implementationYear: new_item.implementationYear,
                manufacturer: new_item.manufacturer,
                manufacturerPart: new_item.manufacturerPart,
                organizationalTag: new_item.organizationalTag
            }
        }),
        contentType: 'application/json',
        success: completeRequest,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            console.error('Error creating new item: ', textStatus, ', Details: ', errorThrown);
            console.error('Response: ', jqXHR.responseText);
            alert('An error occured when creating a new item:\n' + jqXHR.responseText);
        }
    })
}