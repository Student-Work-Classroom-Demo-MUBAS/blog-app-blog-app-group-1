const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const fs = require('fs');
// const { title } = require('process');
const port = process.env.PORT || 3000;

// Set EJS as the view engine and set views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Debug logging middleware
app.use((req, res, next) => {
  if (req.url.startsWith('/css') || req.url.startsWith('/js') || req.url.startsWith('/images')) {
    console.log('Static file request:', req.url, '-', res.statusCode);
  } 
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

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
    "Nyika-plateau": {
    title: "Nyika Plateau",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
      <p>Nyika Plateau is a beautiful, high-altitude plateau located in northern Malawi, with a small extension in northeastern Zambia. Most of the plateau lies within Nyika National Park, Malawi's largest national park, covering an area of about 3,200 km².</p>
      <p>The name "Nyika" means "where the water comes from" in the local language, an appropriate name as the plateau is the source of several important rivers. The landscape is characterized by rolling grasslands interspersed with patches of forest, dramatic escarpments, and occasional granite outcrops.</p>
      <p>At elevations between 1,800 and 2,500 meters, Nyika has a cool climate unusual for Africa, with temperatures sometimes dropping below freezing in winter. This unique environment supports flora and fauna not found elsewhere in Malawi, including orchids, proteas, and over 400 species of birds.</p>
      <p>Large mammals found on the plateau include eland, roan antelope, zebra, leopard, and elephant. The park is particularly known for its high density of leopards, though these elusive cats are rarely seen by visitors.</p>
      <p>The plateau has a rich cultural history, with evidence of human occupation dating back to the Stone Age. During the colonial era, the area was set aside as a forest reserve before being declared a national park in 1965.</p>
      <p>Today, visitors to Nyika can enjoy game drives, hiking, mountain biking, and horse riding safaris. The park's remote location and unique high-altitude ecosystem offer a wilderness experience unlike any other in Africa.</p>
    `
  },
    "Liwonde-park": {
    title: "Liwonde National Park",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
        <p>Liwonde National Park, located in southern Malawi along the upper Shire River, is one of the country's premier wildlife destinations. Established in 1973, the park covers 548 square kilometers of diverse habitats including floodplains, woodlands, and lagoons.</p>
        <p>The park is best known for its large populations of elephants and hippos, which can often be seen along the riverbanks. Other wildlife includes crocodiles, antelope species such as kudu and waterbuck, and over 400 species of birds.</p>
        <p>In recent years, Liwonde has been the focus of major conservation efforts. In 2015, African Parks assumed management of the reserve and initiated an ambitious program to restore wildlife populations. This included the reintroduction of cheetahs in 2017 and lions in 2018, making Liwonde the only park in Malawi where visitors can see all of Africa's "Big Five" (except rhino).</p>
        <p>The Shire River, which flows along the western boundary of the park, is its lifeblood. Boat safaris along the river offer excellent opportunities to view wildlife, particularly hippos and crocodiles. The river is also home to rare and endangered species such as the African skimmer and Nile monitor lizard.</p>
        <p>Local communities have lived around the park for generations, and conservation efforts now include community outreach programs to ensure that local people benefit from tourism and conservation. These initiatives have helped reduce human-wildlife conflict and poaching.</p>
        <p>Today, visitors to Liwonde can enjoy game drives, boat safaris, and walking safaris, with accommodation options ranging from luxury lodges to basic campsites. The park's accessibility from Blantyre and its diverse wildlife make it one of Malawi's most popular tourist destinations.</p>
    `
  },
    "Zomba-plateau": {
    title: "Zomba Plateau",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
        <p>Zomba Plateau is a striking granite massif that rises dramatically to about 1,800 meters (6,000 feet) above the city of Zomba, the former colonial capital of Malawi. The plateau covers an area of approximately 130 square kilometers and offers some of the most breathtaking views in the country.</p>
        <p>The plateau was formed about 130 million years ago during the breakup of Gondwana, the ancient supercontinent. Over millennia, erosion has sculpted the granite into its current form, with dramatic cliffs, rocky outcrops, and deep valleys.</p>
        <p>Zomba's elevation creates a cool, moist climate that supports diverse vegetation, including evergreen forests, pine plantations, grasslands, and patches of heather. The plateau is home to various antelope species, monkeys, and over 100 species of birds.</p>
        <p>The plateau has several streams and rivers that originate from its heights, including the Mulunguzi, Domasi, and Likangala rivers. These water sources feed the surrounding agricultural lands and provide drinking water for the city below.</p>
        <p>During the colonial era, Zomba was developed as a hill station where British officials could escape the heat of the lowlands. Remnants of this era include the former Governor's residence and various walking trails. The plateau also served as an important site for astronomical observations in the early 20th century.</p>
        <p>Today, Zomba Plateau is a popular destination for hiking, mountain biking, and horseback riding. Key attractions include Emperor's View, which offers panoramic vistas of Lake Chilwa and the Shire Highlands, and the Chagwa Falls. The plateau's cool climate and scenic beauty make it a refreshing retreat from Malawi's lowland heat.</p>
    `
  },
    "cape-maclear": {
    title: "Cape Maclear",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `  
        <p>Cape Maclear, known locally as Chembe, is a picturesque fishing village located on the southern shore of Lake Malawi within the Lake Malawi National Park. This UNESCO World Heritage Site is renowned for its stunning beaches, crystal-clear waters, and incredible biodiversity.</p>
        <p>The cape was named after Sir Thomas Maclear, Astronomer Royal at the Cape of Good Hope and friend of David Livingstone, who visited the area in 1859. Livingstone's mission established a base here, making it one of the first places in Malawi visited by Europeans.</p>
        <p>The waters around Cape Maclear are home to hundreds of species of colorful cichlid fish, making it a snorkeling and diving paradise. The aquarium-like clarity of the water allows visitors to observe these unique fish in their natural habitat without even getting wet.</p>
        <p>Beyond its natural beauty, Cape Maclear has a rich cultural history. The area has been inhabited by the Chewa people for centuries, and traditional fishing methods are still practiced today. The village offers visitors a glimpse into authentic Malawian life alongside tourist facilities.</p>
        <p>Nearby islands, including Thumbi West Island and Domwe Island, provide excellent opportunities for kayaking, hiking, and camping. The area is also known for its spectacular sunsets, which paint the sky and lake in brilliant shades of orange and red.</p>
        <p>Conservation efforts in the area focus on protecting the lake's unique biodiversity while supporting sustainable tourism that benefits local communities. These initiatives have helped maintain Cape Maclear's status as one of Malawi's premier tourist destinations.</p>
        `
  }
}

app.get('/', (req, res) => {
  res.render('index', {
    post: posts.sort((a, b) => b.createdAt - a.createdAt),
    title: 'Malawi Tourism Blog - Discover the Beauty of Malawi',
  });
});

//redirect 
app.get('/create', (req, res) => {
  res.redirect('/posts/new');
});

//view single post
app.get('/posts/:id', (req, res) => {
  const post = posts.find (p => p.id ===parseInt(req.params.id));
  if (!post) {
    return res.status(404).render('404 error', { 
      message: 'Post not found',
      title: 'Post Not Found' });
  }
});

//create

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});


// API endpont to get blog data
app.get('api/blog', (req, res) => {
  const blogId = req.params.id;
  if (blogData[blogId]) {
    res.json(blogData[blogId]);
  } else {
    res.status(404).json({ error: 'Blog post not found' });
  }
});

//Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});