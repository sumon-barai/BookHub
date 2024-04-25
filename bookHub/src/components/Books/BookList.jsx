import BookCard from "./BookCard";
import Skeleton from "../Skeleton/Skeleton";

const BookList = ({ books, loading, onFavorite }) => {
  let content;
  if (books.length < 1) {
    content = <p>No Books here</p>;
  }

  if (books.length > 1) {
    content = books.map((book) => (
      <BookCard key={book.id} book={book} onFavorite={onFavorite} />
    ));
  }
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="movie-list">
          <div className="row row-cols-1 row-cols-md-3 g-4">{content}</div>
        </div>
      )}
    </>
  );
};

export default BookList;
