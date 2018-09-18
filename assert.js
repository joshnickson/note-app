var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      document.getElementById('test').innerHTML = "Test fails... red etc"
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      document.getElementById('test').innerHTML = assertionToCheck + " test passing! green etc"      
    }
  }
}