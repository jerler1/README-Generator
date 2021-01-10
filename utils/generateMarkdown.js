// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

// Making a validation function.
function confirmValidation(input) {
  if (input !== "Yes" || input !== "No" || input !== "y" || input !== "n") {
    return "Incorrect asnwer";
  } else if (input === "No" || input === "n") {
    process.exit();
  } else {
    return true;
  }
}

module.exports = generateMarkdown;
module.exports = confirmValidation;
