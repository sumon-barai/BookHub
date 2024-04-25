import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/Books/BookList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Sorting from "./components/Sorting/Sorting";
import { Toaster } from "react-hot-toast";

function App() {
  const [books, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setBook(data);
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const handleFavorite = (e, id) => {
    e.stopPropagation();
    const newBooks = books.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      } else {
        return item;
      }
    });

    setBook(newBooks);
  };

  return (
    <div>
      <Header />
      <main>
        <section className="container mt-2">
          <div className="row">
            <div className="col-3">
              <SideBar />
            </div>
            <div className="col-9">
              <Sorting />
              <BookList
                books={books}
                loading={loading}
                onFavorite={handleFavorite}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
