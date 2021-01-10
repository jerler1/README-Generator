// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.License) {
    const license = data.chooseLicense;
    const badge = renderLicenseBadge(license);
    return `## ${data.title}
  ---
  ${badge}
  `;
  } else {
    return;
  }
}

function generateDescription(data) {
  if (data.Description) {
    return (
      "#### **Description**" +
      "\n" +
      "---" +
      "\n" +
      data.inputDescription +
      "\n"
    );
  } else {
    return;
  }
}

// Generating a dynamic table of contents.
function generateToC(data) {
  let contents = "";
  if (data.confirmTOC) {
    const table = [];
    const keyValue = Object.entries(data);

    // Pushing the agreed sections into an array
    for (let i = 0; i < keyValue.length; i++) {
      if (keyValue[i][1] === true) {
        if (keyValue[i][0] === "confirmTOC") {
          continue;
        } else {
          table.push(keyValue[i][0]);
        }
      }
    }

    // Iterating over the array to add to a string to return.
    contents = "#### **Table of Contents**" + "\n" + "---" + "\n";
    for (let i = 0; i < table.length; i++) {
      contents = contents + `1. [${table[i]}](#${table[i]})` + "\n";
    }
  }
  return contents;
}
module.exports = {
  generateMarkdown,
  generateDescription,
  generateToC,
};
