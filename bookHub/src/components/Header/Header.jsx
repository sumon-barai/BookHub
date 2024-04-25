import { useState } from "react";
import Action from "./Action";
import Logo from "./Logo";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <header>
      {show && (
        <Modal onClose={handleClose}>
          <Cart />
        </Modal>
      )}
      <nav className="navbar navbar-expand-lg bg-success bg-opacity-75">
        <div className="container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Action onShow={handleShow} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
