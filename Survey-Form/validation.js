function validateForm() {
    let x = document.forms["myForm"]["fname"]["lastname"]["email"]["dob"]["country"]["recommed"]["profession"]["mobileno"].value;
    if (x == "") {
      alert("data must be filled out");
      return false;
    }
}