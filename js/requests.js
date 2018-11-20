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
      "Content-Type": "application/json"
    },
    "processData": false,
    "data": JSON.stringify(itemObject)
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log('Successfully Logged In');
    window.location.href = 'admin.html';
  });
});

$("#update-form").submit(function(e) {

  e.preventDefault()
  console.log("WORKING")
  formArray = $(this).serializeArray();

  var itemObject = {};
  for (var i = 0; i < formArray.length; i++){
    itemObject[formArray[i]['name']] = formArray[i]['value'];
  }

  // var settings = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "https://bll0hoveu3.execute-api.us-east-1.amazonaws.com/prod/update-item",
  //   "method": "POST",
  //   "headers": {
  //     "Content-Type": "application/json"
  //   },
  //   "processData": false,
  //   "data": JSON.stringify(itemObject)
  // }

  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });
});

