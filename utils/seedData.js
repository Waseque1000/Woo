const categories = [
  "True Wireless Earbuds", 
  "Neckbands", 
  "Smart Watches", 
  "Headphones", 
  "Wireless Speakers", 
  "Soundbars", 
  "Party Speakers",
  "Power Banks",
  "Dashcams",
  "Projectors",
  "Gaming Series",
  "Chargers & Cables",
  "Wired Earphones",
  "Limited Edition"
];

const boatProducts = [
  // True Wireless Earbuds
  { name: "EOO Nirvana Zenith Pro", category: "True Wireless Earbuds", image: "/images/headphones.png", price: 2999, oldPrice: 5999, rating: 4.8 },
  { name: "EOO Airdopes Supreme", category: "True Wireless Earbuds", image: "/images/headphones.png", price: 1499, oldPrice: 2999, rating: 4.5 },
  { name: "EOO Airdopes 161", category: "True Wireless Earbuds", image: "/images/headphones.png", price: 999, oldPrice: 2499, rating: 4.2 },
  
  // Neckbands
  { name: "EOO Rockerz 255 ANC", category: "Neckbands", image: "/images/headphones.png", price: 1799, oldPrice: 3999, rating: 4.7 },
  { name: "EOO Rockerz 330 Pro", category: "Neckbands", image: "/images/headphones.png", price: 1499, oldPrice: 2999, rating: 4.6 },
  { name: "EOO Rockerz 205 Pro", category: "Neckbands", image: "/images/headphones.png", price: 1299, oldPrice: 2499, rating: 4.4 },

  // Smart Watches
  { name: "EOO Enigma Gem", category: "Smart Watches", image: "/images/watch.png", price: 3999, oldPrice: 9999, rating: 4.7 },
  { name: "EOO Lunar Discovery", category: "Smart Watches", image: "/images/watch.png", price: 1299, oldPrice: 6999, rating: 4.3 },
  { name: "EOO Wave Fury", category: "Smart Watches", image: "/images/watch.png", price: 1199, oldPrice: 5999, rating: 4.1 },

  // Headphones
  { name: "EOO Rockerz 450", category: "Headphones", image: "/images/headphones.png", price: 1299, oldPrice: 3999, rating: 4.5 },
  { name: "EOO Nirvana 751 ANC", category: "Headphones", image: "/images/headphones.png", price: 3999, oldPrice: 7999, rating: 4.8 },

  // Wireless Speakers
  { name: "EOO Stone 1200", category: "Wireless Speakers", image: "/images/bag.png", price: 3499, oldPrice: 6999, rating: 4.6 },
  { name: "EOO Stone 180", category: "Wireless Speakers", image: "/images/bag.png", price: 999, oldPrice: 2499, rating: 4.2 },

  // Soundbars
  { name: "EOO Aavante Bar 3150D", category: "Soundbars", image: "/images/bag.png", price: 12999, oldPrice: 24999, rating: 4.9 },
  { name: "EOO Aavante Bar 1160", category: "Soundbars", image: "/images/bag.png", price: 4499, oldPrice: 9999, rating: 4.5 },

  // Party Speakers
  { name: "EOO PartyPal 60", category: "Party Speakers", image: "/images/bag.png", price: 5999, oldPrice: 12999, rating: 4.7 },
  { name: "EOO PartyPal 50", category: "Party Speakers", image: "/images/bag.png", price: 3999, oldPrice: 8999, rating: 4.5 },

  // Power Banks
  { name: "EOO Energy 10000mAh", category: "Power Banks", image: "/images/bag.png", price: 999, oldPrice: 1999, rating: 4.4 },
  { name: "EOO Energy 20000mAh", category: "Power Banks", image: "/images/bag.png", price: 1699, oldPrice: 2999, rating: 4.6 },

  // Dashcams
  { name: "EOO Dashcam Pro", category: "Dashcams", image: "/images/bag.png", price: 4999, oldPrice: 9999, rating: 4.8 },

  // Projectors
  { name: "EOO View Pro", category: "Projectors", image: "/images/bag.png", price: 14999, oldPrice: 29999, rating: 4.7 },

  // Gaming Series
  { name: "EOO Immortal 121", category: "Gaming Series", image: "/images/headphones.png", price: 1499, oldPrice: 3499, rating: 4.5 },
  { name: "EOO Immortal 700", category: "Gaming Series", image: "/images/headphones.png", price: 2999, oldPrice: 6999, rating: 4.8 },

  // Chargers & Cables
  { name: "EOO Rugged Cable", category: "Chargers & Cables", image: "/images/bag.png", price: 299, oldPrice: 799, rating: 4.9 },
  { name: "EOO 65W Rapid Charger", category: "Chargers & Cables", image: "/images/bag.png", price: 1999, oldPrice: 3999, rating: 4.7 },

  // Wired Earphones
  { name: "EOO Bassheads 100", category: "Wired Earphones", image: "/images/headphones.png", price: 399, oldPrice: 999, rating: 4.8 },
  { name: "EOO Bassheads 225", category: "Wired Earphones", image: "/images/headphones.png", price: 599, oldPrice: 1299, rating: 4.7 },

  // Limited Edition
  { name: "EOO x Sunburn Edition", category: "Limited Edition", image: "/images/headphones.png", price: 4999, oldPrice: 9999, rating: 5.0 },
];

const generateProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const template = boatProducts[i % boatProducts.length];
    const id = `prod_${i + 1}`;
    
    products.push({
      id: id,
      name: i < boatProducts.length ? template.name : `${template.name} V${Math.floor(i / boatProducts.length) + 1}`,
      description: `Experience the future of lifestyle tech with the ${template.name}. Built with industry-leading ${template.category} features, signature sound, and a design that makes a statement with EOO.`,
      price: template.price,
      oldPrice: template.oldPrice,
      image: template.image,
      category: template.category,
      stock: 50 + (i * 7) % 100,
      rating: template.rating,
      reviews: 100 + (i * 23) % 1000,
      isNew: (i % 10) === 0,
      sale: (i % 3) === 0,
      variants: [
        { name: "Color", options: ["Active Black", "Deep Blue", "Silver Metal"] },
        { name: "Warranty", options: ["1 Year Standard", "2 Year Extended"] }
      ]
    });
  }
  return products;
};

export const products = generateProducts(400);
