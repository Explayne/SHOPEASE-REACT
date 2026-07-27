import "../styles/Products.css";
import ProductCard from "./ProductCard.tsx";

// ======================================================
// COMPONENT PURPOSE
// ======================================================

// The Products component owns the product collection.
// It acts as the single source of truth for product data
// before passing each product to ProductCard through props.
//
// In a production application this array will eventually
// come from an API instead of being hardcoded.
interface ProductsProps {
  addToCart: (
    product: { id: number; title: string; price: number; image: string },
    quantity: number,
  ) => void;
}

export default function Products({ addToCart }: ProductsProps) {
  // ======================================================
  // PRODUCT DATA
  // ======================================================

  // Store all product information in one collection so the
  // UI can be generated from data instead of manually
  // creating individual ProductCard components.
  const products = [
    {
      id: 1,
      title: "Gaming Mouse",
      price: 49,
      image: "/images/mouse.jpg",
      description: "Beautiful Gaming Mouse",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Gaming Keyboard",
      price: 99,
      image: "/images/keyboard.jpg",
      description: "Beautiful Gaming Keyboard",
      stock: 20,
      rating: 4.6,
    },
    {
      id: 3,
      title: "Gaming Monitor",
      price: 299,
      image: "/images/monitor.jpg",
      description: "Beautiful Gaming Monitor",
      stock: 20,
      rating: 4.9,
    },
    {
      id: 4,
      title: "Headphones",
      price: 59,
      image: "/images/headphones.jpg",
      description: "Beautiful Headphones",
      stock: 20,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Wireless Headphones",
      price: 99,
      image: "/images/headphones.jpg",
      description: "Beautiful Wireless Headphones",
      stock: 15,
      rating: 4.7,
    },
    {
      id: 6,
      title: "Smart Watch",
      price: 199,
      image: "/images/SmartWatch.jpg",
      description: "Beautiful Smart Watch",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 7,
      title: "Bluetooth Speaker",
      price: 59,
      image: "/images/headphones.jpg",
      description: "Beautiful Bluetooth Speaker",
      stock: 30,
      rating: 4.4,
    },
    {
      id: 8,
      title: "Gaming Mouse",
      price: 29,
      image: "/images/headphones.jpg",
      description: "Beautiful Gaming Mouse",
      stock: 20,
      rating: 4.2,
    },
  ];

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="products-grid">
        {/* Generate one ProductCard for every product object.
            JavaScript handles the iteration while React
            converts each object into a reusable component.

            The parent decides exactly what information each
            child receives, making the data flow predictable
            and easy to maintain.
        */}
        {products.map((product) => (
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            stock={product.stock}
            rating={product.rating}
            addToCart={addToCart}
            // Every ProductCard gets the same addToCart function."
          />
        ))}
      </div>
    </section>
  );
}
