import { useState } from "react";
import BookDetails from "../BookDetails/BookDetails";
import Modal from "../Modal/Modal";
import Rating from "./Rating";
import { useCart } from "../../Context/CartProvider";
import {
  errorNotification,
  successNotification,
} from "../../utilities/notification";

const BookCard = ({ book, onFavorite }) => {
  const [cart, setCart] = useCart();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleAddToCart = (e, book) => {
    e.stopPropagation();
    const isExist = cart.find((item) => item.id === book.id);
    if (!isExist) {
      setCart([...cart, book]);
      successNotification("successfully added ");
    } else {
      errorNotification("already exists");
    }
  };

  return (
    <>
      <div className="col">
        {show && (
          <Modal onClose={handleClose}>
            <BookDetails book={book} />
          </Modal>
        )}
        <div className="card" onClick={handleShow}>
          <img
            src={book.img}
            className="card-img-top"
            alt="cover image"
            style={{
              width: "100%",
              height: 300,
              objectFit: "cover",
            }}
          />
          <div className="card-body">
            <h5 className="card-title" title={book.title}>
              {book.title.slice(0, 50)}{" "}
            </h5>
            <p className="card-text">By {book.author}</p>
            <p className="card-text">price ${book.price}</p>
            <Rating rating={book.rating} />
          </div>
          <div className="card-footer">
            <button
              type="button"
              className={`btn ${
                !book.favorite ? "btn-success" : "bg-secondary"
              } mx-1`}
              onClick={(e) => onFavorite(e, book.id)}
            >
              <i className="bi bi-heart" /> Favorite
            </button>
            <button
              type="button"
              className="btn btn-success mx-1"
              onClick={(e) => handleAddToCart(e, book)}
            >
              <i className="bi bi-cart2" /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
