import { useCart } from "../../Context/CartProvider";
import { successNotification } from "../../utilities/notification";

const Cart = () => {
  const [cart, setCart] = useCart();
  const handleRemoveCartItem = (id) => {
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);
    successNotification("remove successfully");
  };
  return (
    <div>
      <>
        <h2>carts List</h2>
        <div>
          {cart.length < 1 ? (
            <h5>No Data Found</h5>
          ) : (
            cart.map((book) => (
              <div
                key={book.id}
                className="d-flex justify-content-between align-content-center mb-2"
              >
                <div>
                  <h3>item name</h3>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, odio.
                  </div>
                  <p>price $ 20</p>
                </div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveCartItem(book.id)}
                  >
                    remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </>
    </div>
  );
};

export default Cart;
