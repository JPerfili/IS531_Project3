// ************************ //
// ****  Validating  ****** //
// ************************ //

// Display validation error
function showValidationError(name, show) {
  if (show) {
    $("#" + name).addClass("is-invalid");
  }
  else {
    $("#" + name).removeClass("is-invalid");
  }
}

function getInput(name, form) {
  input = $("#" + name).val();
  // Overwrite with form submission data if available
  if (form != null) {
    if (form[name] == null) {
      input = form[name];
    }
  }
  return input;
}

function checkNull(name, form) {
  // Variables
  input = getInput(name, form);
  // Validation
  // Must not be null
  if (input == null || input == "") {
    showValidationError(name, true);
    return false;
  }
  else {
    showValidationError(name, false);
    return true;
  }
}

/* Validate Asset ID
function validateAssetId(form) {
  name = "assetID";
  input = getInput(name, form);
  // Overwrite with form submission data if available
  if (form[name] == null) {
    input = form[name];
  }
  // Only allow values between 1950 and 2018
  if (input == null || input == /[^0-9][^a-z]/i) {
    showValidationError(name, true);
    return false;
  }
  else {
    showValidationError(name, false);
    return true;
  }
} */

// Validate Asset Location
function validateAssetLocation(form) {
  // Variables
  name = "assetLocation";
  input = getInput(name, form);
  var places = ["Chicago", "Denver", "Los Angeles", "Salt Lake City", "New York City", "Seattle", "Houston", "San Franscisco", "Washington D.C.", "Boston", "Miami", "Atlanta"]
  // Validations
  if (input == null || !places.includes(input)) {
    showValidationError(name, true);
    return false;
  }
  else {
    showValidationError(name, false);
    return true;
  }
}

// Validate Organizational Tag
function validateOrganizationalTag(form) {
  //Variables
  name = "organizationalTag";
  // Validations
  // Must not be null
  return checkNull(name, form);
}

// Validate Manufacturer
function validateManufacturer(form) {
  // Variables
  name = "manufacturer";
  input = getInput(name, form);
  // Validations
  // Must not be null
  return checkNull(name, form);

}

// Validate Manufacturer
function validateManufacturerPart(form) {
  // Variables
  name = "manufacturerPart";
  input = getInput(name, form);
  // Validations
  // Must not be null
  return checkNull(name, form);

}

// Validate Description
function validateDescription(form) {
  // Variables
  name = "description";
  input = getInput(name, form);
  // Validations
  // Must not be null
  return checkNull(name, form);

}

// Validate Implementation Month
function validateImplementationMonth(form) {
  // Variables
  name = "implementationMonth";
  input = getInput(name, form);
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  // Validations
  // Must be month of year
  if (input == null || !month.includes(input)) {
    showValidationError(name, true);
    return false;
  }
  else {
    showValidationError(name, false);
    return true;
  }

}

// Validate Implemenation Year
function validateImplementationYear(form) {
  // Variables
  name = "implementationYear";
  input = getInput(name, form);
  // Validations
  // Only allow values between 1950 and 2018
  console.log("Input: " + input);
  if (input == null || input < 1950 || input > 2018) {
    showValidationError(name, true);
    return false;
  }
  else {
    showValidationError(name, false);
    return true;
  }
}

// Validate Mainenance Notes
function validateMaintenanceNotes(form) {
  // no Validation
  return true;
}

// Validate all fields in form
function validateForm(form) {

  var v = []; j = -1;
  // Run validations
  // v[++j] = validateAssetId(form);
  v[++j] = validateAssetLocation(form);
  v[++j] = validateOrganizationalTag(form);
  v[++j] = validateManufacturer(form);
  v[++j] = validateManufacturerPart(form);
  v[++j] = validateDescription(form);
  v[++j] = validateImplementationMonth(form);
  v[++j] = validateImplementationYear(form);
  v[++j] = validateMaintenanceNotes(form);

  if (v.includes(false)) {
    return false;
  }
  else {
    return true;
  }
}

function clearForm() {
  // Close confirmation modal
  $("#modal-confirmation").modal('hide');
  // Clear previous form values
  document.getElementById("item-form").reset();
}


// ************************ //
// ****  Submitting  ****** //
// ************************ //

$("#item-form").submit(function (e) {

  e.preventDefault()
  formArray = $(this).serializeArray();

  var itemObject = {};
  for (var i = 0; i < formArray.length; i++) {
    itemObject[formArray[i]['name']] = formArray[i]['value'];
  }
  console.log(itemObject)

  // Validate inputs
  if (validateForm(itemObject)) {
    // Submit
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

      // Show confirmation modal
      $("#modal-confirmation").modal('show');
    });
  }
});

$("#update-form").submit(function (e) {

  e.preventDefault()
  console.log("WORKING")
  formArray = $(this).serializeArray();

  var itemObject = {};
  for (var i = 0; i < formArray.length; i++) {
    itemObject[formArray[i]['name']] = formArray[i]['value'];
  }

  // Validate inputs
  if (validateForm(itemObject)) {
    // Submit
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://bll0hoveu3.execute-api.us-east-1.amazonaws.com/prod/update-item",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "processData": false,
      "data": JSON.stringify(itemObject)
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
      // Close modal
      $("#modifyModal").modal('hide');
      // Refresh table
      populateTable();
    });

  }
});

