const Modal = ({ children, onClose }) => {
  return (
    <div
      className="cart-section position-fixed top-0 end-0 vw-100 vh-100 z-1 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#000000a8" }}
    >
      <div
        className="cart-area d-flex flex-column w-50 t p-5 box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; rounded-2"
        style={{ backgroundColor: "#fafafa" }}
      >
        {children}
        <div className="text-end">
          <button className="btn btn-success " onClick={onClose}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
