import "../styles/Main.css";
import Hero from "./Hero";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";

// ======================================================
// COMPONENT PURPOSE
// ======================================================

// Main acts as the layout container for the application's
// primary content. Its responsibility is NOT to own data or
// business logic; instead, it composes the major sections of
// the landing page into a single, organized layout.
//
// Each child component is responsible for managing its own
// content and behavior, allowing Main to remain clean and
// focused on page structure.
// addToCart: () => void; means App says "Main expects to receive a function called addToCart.
// That function takes no arguments and returns nothing."
interface MainProps {
  addToCart: (
    product: { id: number; title: string; price: number; image: string },
    quantity: number,
  ) => void;
}
export default function Main({ addToCart }: MainProps) {
  return (
    <main className="main-content">
      {/* Hero introduces the store and provides the
          first impression for users visiting the page. */}
      <Hero />
      {/* Products displays the featured product catalogue.
          It owns the product collection and renders
          ProductCard components from that data. */}
      {/* <Products addToCart={addToCart} /> means "Main doesn't
           need this function, but Products does, so I'll pass it along.
           this is called prop drilling"*/}
      <Products addToCart={addToCart} />
      {/*passing prop from App through product*/}
      {/* About communicates information about the business
          and helps build trust with customers. */}
      <About />
      {/* Contact provides users with a way to reach the
          business through the contact form. */}
      <Contact />
    </main>
  );
}
