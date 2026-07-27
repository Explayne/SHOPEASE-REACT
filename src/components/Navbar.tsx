import "../styles/Navbar.css";

// ======================================================
// COMPONENT PURPOSE
// ======================================================

// Navbar provides the application's primary navigation.
//
// Its responsibility is to help users discover and move
// between the major sections of the website.
//
// At this stage the links are placeholders. As we learn
// React Router later in the curriculum, these links will
// navigate between real pages instead of anchor targets.

// Defines what data Navbar expects from its parent.
interface NavbarProps {
  cartCount: number;
}

// Destructure the cartCount prop so we can display it.
// Navbar: "Thank you. I'll display whatever number you send me."
export default function Navbar({ cartCount }: NavbarProps) {
  return (
    <header>
      {/* <header> communicates that everything inside belongs
          to the introductory section of the page, improving
          semantic structure and accessibility. */}
      <nav className="navbar">
        {/* The logo represents the store's identity and serves
            as the visual anchor of the navigation bar. */}
        <h1 className="logo">Nathan Store</h1>

        <p>🛒 Cart {cartCount}</p>

        {/* Group all navigation links into a single unordered
            list because they belong to one navigation menu.
            This improves both semantics and accessibility. */}
        <ul className="nav-links">
          {/* Each list item represents one navigation option.
              Keeping every link inside its own <li> makes the
              menu easier to style and maintain. */}

          <li>
            <a href="#Home">Home</a>
          </li>

          <li>
            <a href="#Shop">Shop</a>
          </li>

          <li>
            <a href="#About">About</a>
          </li>

          <li>
            <a href="#Contact">Contact Us</a>
          </li>

          <li>
            <a href="#Blog">Blog</a>
          </li>

          <li>
            <a href="#Login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
