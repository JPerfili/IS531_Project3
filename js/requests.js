var AssetManager = window.AssetManager || {};

// Create new item
(function PostManager($) {
    function create_item(new_item) {
        $.ajax({
            method: 'POST',
            url: _config.api.invokeURL + '/create-item',
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
    function completeRequest(result) {
        console.log('Response received from API: ', result);
    }

    // Delete item
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

    // Get item
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

    // Update item
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
}(jQuery));