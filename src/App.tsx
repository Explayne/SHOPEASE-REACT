import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./components/Cart.tsx";

// This interface describes the shape of each cart item.

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  selected: boolean;
}
// ======================================================
// APPLICATION ROOT
// ======================================================

// App is the entry point of the user interface.
//
// Its responsibility is to assemble the highest-level
// sections of the application into one complete page.
//
// App deliberately contains NO business logic, product data,
// or event handling. Keeping it lightweight makes the overall
// application structure easy to understand and allows each
// section to manage its own responsibilities.

export default function App() {
  // Store the actual products added to the cart instead of only a number.
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add a product to the cart or increase its quantity if it already exists.
  function addToCart(product: Omit<CartItem, "quantity">, quantity: number) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...currentItems, { ...product, quantity, selected: true }];
    });
  }

  // Derive the cart badge count from the items inside the cart.
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Remove one product completely from the cart.

  function removeFromCart(id: number) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }
  // function to toggle cart item selection Go through the
  // cart. When you find the matching item,flip its selected
  // state.If it was selected, unselect it.If it was unselected, select it.”

  function toggleSelected(id: number) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  }
  return (
    <>
      {/* Navigation is placed first so it remains the user's
          primary entry point for exploring the application. */}
      <Navbar cartCount={cartCount} />
      {/* App says: "Navbar, here's the current cart count." */}
      {/* Main contains the primary content of the landing page.
          It is responsible for composing all major sections
          such as Hero, Products, About and Contact. */}
      <Main addToCart={addToCart} /> {/*passing prop through main*/}
      <Cart
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onToggleSelected={toggleSelected}
      />
      {/* cart component*/}
      {/* Footer provides closing information and secondary
          navigation that appears at the bottom of every page. */}
      <Footer />
    </>
  );
}
