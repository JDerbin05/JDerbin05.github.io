"use strict";

// Select all unordered lists with class "sort-me"
    const listsToSort = document.querySelectorAll("ul.sort-me");

// Loop through each unordered list
listsToSort.forEach((list) => {
    // Select all list items within the current list
    const listItems = Array.from(list.querySelectorAll("li"));

    // Sort the list items by text content
    listItems.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Append the sorted list items back to the original list
    listItems.forEach((item) => list.appendChild(item));
});