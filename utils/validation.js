// Making a validation function.
// Not entirely sure this works.
function confirmValidation(input) {
  if (input !== "Yes" || input !== "No" || input !== "y" || input !== "n") {
    return "Incorrect asnwer";
  } else if (input === "No" || input === "n") {
    process.exit();
  } else {
    return true;
  }
}

module.exports = confirmValidation;
