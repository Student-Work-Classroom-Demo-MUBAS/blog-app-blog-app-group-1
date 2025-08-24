const express = require('express');
const path = require('path');
const { title } = require('process');
const port = 3000;


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const blogData = {
  "Lake-Malawi": {
    title: "Exploring wonders of Lake Malawi",
    image: "images\\Lake-Malawi.jpg",
    content: `
      <p>Lake Malawi, also known as Lake Nyasa in Tanzania and Lago Niassa in Mozambique, is an African Great Lake located between Malawi, Mozambique, and Tanzania. It is the third largest lake in Africa and the ninth largest in the world.</p>
      <p>The lake is approximately 580 km long and 75 km wide at its widest point, with a total area of about 29,600 km². The lake is famous for being home to more species of fish than any other lake in the world, including at least 700 species of cichlids, with many still waiting to be discovered and described.</p>
      <p>For the people of Malawi, the lake is a vital resource providing food, water transport, and tourism opportunities. The lake's clear waters and sandy beaches make it a popular destination for swimming, snorkeling, sailing, and kayaking.</p>
      <p>In 1984, the lake was designated a UNESCO World Heritage Site for its global importance in biodiversity conservation. The Lake Malawi National Park, located at the southern end of the lake, protects various aquatic habitats and hundreds of fish species found nowhere else on Earth.</p>
      <p>Local legend tells that the lake was discovered by the renowned Scottish explorer David Livingstone in 1859, though it had been known to local people for centuries before European arrival. The Yao people called it Nyasa, meaning simply "lake."</p>
    
    `
  },

}
