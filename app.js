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
    "Mulanje-mountain": {
    title: "Mulanje Mountain",
    image: "https://images.unsplash.com/photo-1459262833944-29e65ca2c86a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <p>Mulanje Massif, also known as Mount Mulanje, is a large inselberg in southern Malawi that rises dramatically from the surrounding plains of Phalombe. At its highest point, Sapitwa Peak, it reaches 3,002 meters (9,849 feet), making it the highest mountain in Central Africa.</p>
      <p>The massif was formed about 130 million years ago from a granite upwelling. Over millennia, erosion has sculpted the mountain into its current form with dramatic peaks, deep valleys, and high plateaus. The mountain is known for its unique microclimate, with frequent cloud cover and higher rainfall than the surrounding areas.</p>
      <p>Mulanje is ecologically significant as it hosts numerous endemic species of plants and animals, including the Mulanje cedar (Widdringtonia whytei), Malawi's national tree. This slow-growing conifer is critically endangered due to illegal logging and fires.</p>
      <p>The mountain holds cultural significance for the local people, featuring prominently in local folklore. One legend tells of a powerful spirit, Napolo, who resides on the mountain and causes thunderstorms and landslides when displeased.</p>
      <p>Today, Mulanje is a popular destination for hiking and climbing, with several huts maintained by the Malawi Mountain Club providing accommodation for multiday treks. The challenging ascent to Sapitwa Peak offers breathtaking views of the surrounding landscape.</p>
    `
  },

}
