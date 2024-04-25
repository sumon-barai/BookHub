const BookDetails = ({ book }) => {
  return (
    <>
      <h2>Book Details </h2>
      <div className="d-flex justify-content-between align-content-center mb-2">
        <div>
          <img src={book.img} alt="" />
        </div>
        <div>
          <h3>{book.title}</h3>
          <div>{book.description}</div>
          <h3>price $ {book.price}</h3>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
