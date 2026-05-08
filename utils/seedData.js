const categories = ["Electronics", "Fashion", "Beauty", "Home & Living", "Accessories"];
const images = [
  "/images/watch.png",
  "/images/bag.png",
  "/images/headphones.png",
  "/images/sneakers.png",
  "/images/perfume.png"
];

const generateProducts = (count) => {
  const products = [];
  for (let i = 1; i <= count; i++) {
    // Deterministic selection based on index i
    const categoryIndex = i % categories.length;
    const category = categories[categoryIndex];
    
    const imageIndex = i % images.length;
    const image = images[imageIndex];
    
    const price = 100 + (i * 7) % 800; // Deterministic price
    const oldPrice = i % 3 === 0 ? price + 50 : null; // Some items on sale
    
    products.push({
      id: `prod_${i}`,
      name: `${category} Item #${i}`,
      description: `Premium quality ${category.toLowerCase()} product designed for style and comfort. Features durable materials and elegant craftsmanship.`,
      price: price,
      oldPrice: oldPrice,
      image: image,
      category: category,
      stock: (i * 13) % 100,
      rating: (3.5 + (i % 15) / 10).toFixed(1),
      reviews: (i * 23) % 500,
      isNew: i <= 20,
      sale: oldPrice !== null,
      variants: [
        { name: "Color", options: ["Black", "White", "Sliver"] },
        { name: "Size", options: ["S", "M", "L", "XL"] }
      ]
    });
  }
  return products;
};

export const products = generateProducts(300);
