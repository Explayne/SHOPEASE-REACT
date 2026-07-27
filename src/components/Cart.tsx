import "../styles/Cart.css";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  selected: boolean;
}
interface CartProps {
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void;
  onToggleSelected: (id: number) => void;
  onDeleteSelected: () => void;
}

// The Cart component exists to display the items App owns.It does
//not change the cart state; it only renders the current data.
export default function Cart({
  cartItems,
  onRemoveItem,
  onToggleSelected,
  onDeleteSelected,
}: CartProps) {
  return (
    <section className="cart">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <article key={item.id} className="cart-item">
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => onToggleSelected(item.id)}
              />
              <img src={item.image} alt={item.title} />

              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <p>Qty: {item.quantity}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
                <button onClick={() => onRemoveItem(item.id)}>Remove</button>
              </div>
            </article>
          ))}
          <button onClick={onDeleteSelected}>Delete Selected</button>
        </div>
      )}
    </section>
  );
}
