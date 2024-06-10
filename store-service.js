const fs = require('fs').promises;
const path = require('path');

let items = [];
let categories = [];

async function initialize() {
    try {
        const itemsData = await fs.readFile(path.join(__dirname, 'data', 'items.json'), 'utf8');
        items = JSON.parse(itemsData);

        const categoriesData = await fs.readFile(path.join(__dirname, 'data', 'categories.json'), 'utf8');
        categories = JSON.parse(categoriesData);
    } catch (err) {
        console.error('Error initializing store service:', err);
        throw err;
    }
}

function getAllItems() {
    return items;
}

function getPublishedItems() {
    return items.filter(item => item.published === true);
}

function getCategories() {
    return categories;
}

module.exports = {
    initialize,
    getAllItems,
    getPublishedItems,
    getCategories
};


