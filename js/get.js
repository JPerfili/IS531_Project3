var assetManager = window.assetManager || {};
assetManager.map = assetManager.map || {};

// function requestGET() {
//     $.ajax({
//         method: 'GET',
//         url: 	_config.api.invokeUrl + '/list-items'
//         // headers: {
//         //     Authorization: authToken
//         // },
//         // data: JSON.stringify({
//         //     PickupLocation: {
//         //         Latitude: pickupLocation.latitude,
//         //         Longitude: pickupLocation.longitude
//         //     }
//         // }),
//         // contentType: 'application/json',
//         // success: completeRequest,
//         // error: function ajaxError(jqXHR, textStatus, errorThrown) {
//         //     console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
//         //     console.error('Response: ', jqXHR.responseText);
//         //     alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
//         // }
//     });
// }JQuery();


function adminList(){

//    var authToken;
//    assetManager.authToken.then(function setAuthToken(token) {
//        if (token) {
//            authToken = token;
//        } else {
//            window.location.href = '/login.html';
//        }
//    }).catch(function handleTokenError(error) {
//        alert(error);
//        window.location.href = '/login.html';
//    });
    
    function requestGET() {
        document.write("test");
        $.ajax({
            method: 'GET',
            //url: window._config.api.invokeUrl + '/list-items',
            url: 'https://bll0hoveu3.execute-api.us-east-1.amazonaws.com/prod/list-items',
            //headers: {Authorization: authToken},
            contentType: 'application/json',
            sucess: completeRequest
        });
    }

    function completeRequest(result){
        var assetID;
        assetID = result[0].assetID;
        
    }
    
    
    requestGET();
    
}jQuery();