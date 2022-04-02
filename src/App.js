import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import CategoryBar from "./components/Category";
import BookCard from "./components/BookCard";
import BookQuantity from "./components/BookQuantity";
import Footer from "./components/Footer";

import {
  faMicroscope,
  faBookQuran,
  faBookMedical,
  faPalette,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "./images/card-1.png";
import img2 from "./images/card-2.png";
import img3 from "./images/card-3.png";
import book1 from "./images/book1.jpg";
import book2 from "./images/book2.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <section className="home-seciton">
        <Home
          img={img1}
          title="Read Free Books Online"
          para="you can read milions of books in this library"
        />
        <Home
          img={img2}
          className="home-img-2"
          title="Your Favourite books"
          para="you can add your favourite books to library"
        />
        <Home
          img={img3}
          title="Send us feedback"
          para="your feedback will help us to improve library"
        />
      </section>
      <section>
        <CategoryBar />
        <div className="book--card">
          <BookCard
            name="Secrect Stone"
            author="JS.Rowling"
            type="novel"
            date="2/2/2022"
            img={book1}
          />
          <BookCard
            name="Cursed Child"
            author="JS.Rowling"
            type="novel"
            date="13/2/2022"
            img={book2}
          />
        </div>
      </section>
      <h3 className="quantity-title">Quantity of books</h3>
      <section className="icon-container">
        <BookQuantity
          icon={faMicroscope}
          bookType="Science Books"
          quantity="330,300"
        />
        <BookQuantity
          icon={faBookQuran}
          bookType="Comic Books"
          quantity="609,300"
        />
        <BookQuantity
          icon={faBookMedical}
          bookType="Health Books"
          quantity="330,300"
        />
        <BookQuantity
          icon={faPalette}
          bookType="Art Books"
          quantity="330,300"
        />
        <BookQuantity
          icon={faHeart}
          bookType="Romance Books"
          quantity="330,300"
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
