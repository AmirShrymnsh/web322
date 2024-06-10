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
const port = process.env.PORT || 8080;
const storeService = require('./store-service');

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route for the "/" path - redirects to "/about"
app.get('/', (req, res) => {
    res.redirect('/about');
});

// Route for the "/about" path - returns the about.html file
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

// Route for the "/shop" path - returns published items
app.get('/shop', (req, res) => {
    storeService.getPublishedItems()
        .then(items => res.json(items))
        .catch(err => res.status(500).json({ message: err }));
});

// Route for the "/items" path - returns all items
app.get('/items', (req, res) => {
    storeService.getAllItems()
        .then(items => res.json(items))
        .catch(err => res.status(500).json({ message: err }));
});

// Route for the "/categories" path - returns all categories
app.get('/categories', (req, res) => {
    storeService.getCategories()
        .then(categories => res.json(categories))
        .catch(err => res.status(500).json({ message: err }));
});

// Route for unmatched routes - returns "Page Not Found"
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// Start the server
app.listen(port, () => {
    console.log(`Express http server listening on port ${port}`);
});

// Initialize the store service
storeService.initialize()
    .then(() => {
        console.log('Store service initialized successfully');
    })
    .catch(err => {
        console.error('Failed to initialize store service:', err);
    });
