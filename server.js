/**
*  WEB322 - Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites, friends gpt or otherwise) or distributed to other students.
*  I understand that if caught doing so, I will receive zero on this assignment and possibly 
*  fail the entire course.
*  Name: Amirali Shahriarymanesh
*  Student ID: 153106232
*  Date:05/17/2024
*  Vercel Web App URL: https://vercel.com/amirali-shahriarymaneshs-projects/web322
*  GitHub Repository URL: https://github.com/AmirShrymnsh/web322
**/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define the route to render the HTML template
app.get('/', (req, res) => {
  res.render('index', { name: 'Full Name: Amirali Shahriarymanesh', studentId: 'Student ID: 153106232' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


