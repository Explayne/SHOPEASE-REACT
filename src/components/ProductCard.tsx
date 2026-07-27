import { useState } from "react";

// ======================================================
// COMPONENT CONTRACT
// ======================================================

// This interface defines the data ProductCard expects from
// its parent (Products). TypeScript uses it to verify that
// every ProductCard receives the correct data types before
// the application runs.
interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  rating: number;
  // Function provided by App to add this product to the shopping
  // cart.Every ProductCard expects to receive a function called addToCart."
  addToCart: (
    product: { id: number; title: string; price: number; image: string },
    quantity: number,
  ) => void;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
  description,
  stock,
  rating,
  addToCart,
}: ProductCardProps) {
  // ======================================================
  // STATE
  // ======================================================
  // Store the current quantity of this product that the user
  // wants to add to the cart.
  const [quantity, setQuantity] = useState(1);
  // Store the current visible like count for THIS card.
  // The count changes only when this user interacts with
  // the Like button.
  const [likes, setLikes] = useState(0);

  // Track whether THIS user has liked the product.
  // This prevents repeated likes and allows the button
  // to toggle between Like and Unlike.
  const [liked, setLiked] = useState(false);

  // ======================================================
  // EVENT HANDLERS
  // ======================================================

  // Keep all Like/Unlike logic in one function instead of
  // embedding decision making inside the JSX. This keeps
  // the UI easy to read and the business logic easy to
  // maintain as the application grows.
  function handleLike() {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  }
  function handleQuantityIncrease() {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }
  function handleQuantityDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <div className="card">
      {/* Display the product image supplied by the parent.
          ProductCard doesn't own the image; it simply renders
          the data it receives through props. */}
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>${price}</p>

      {/* The heart icon reflects THIS user's interaction,
          while the number represents the current visible
          like count for this card. */}
      <p>
        {liked ? "❤️" : "🤍"} {likes}
      </p>

      {/* Render different button content based on whether
          the current user has already liked this product. */}
      <button onClick={handleLike}>{liked ? "Unlike 🤍" : "Like ❤️"}</button>

      <p>{description}</p>

      <p>{stock} in stock</p>

      <p>⭐ {rating}</p>

      <div className="quantity-controls">
        <button onClick={handleQuantityDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleQuantityIncrease}>+</button>
      </div>
      <button onClick={() => addToCart({ id, title, price, image }, quantity)}>
        Add to Cart
      </button>
      {/* "When this button is clicked, call the function App gave me." */}
    </div>
  );
}
