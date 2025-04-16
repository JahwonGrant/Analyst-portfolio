// This is a simple script to convert the resume.txt to a PDF
// You can run this locally with Node.js after installing the necessary packages
// npm install jspdf

const fs = require("fs")
const { jsPDF } = require("jspdf")

// Read the resume text
const resumeText = fs.readFileSync("./public/resume.txt", "utf8")

// Create a new PDF document
const doc = new jsPDF()

// Set font size and add text
doc.setFontSize(10)
const lines = resumeText.split("\n")
let y = 10

lines.forEach((line) => {
  // Check if we need a new page
  if (y > 280) {
    doc.addPage()
    y = 10
  }

  // Add the line to the PDF
  doc.text(line, 10, y)
  y += 5 // Move down for the next line
})

// Save the PDF
doc.save("./public/resume.pdf")

console.log("Resume PDF generated successfully!")
