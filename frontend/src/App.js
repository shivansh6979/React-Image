import "./App.css";
import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import axios from "axios";
import "./styles.css";
import Header from "./components/Header";
import ImageSearch from "./components/ImageSearch";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("men");

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=29483234-f2bb2fad1c3e504655c42c391&q=${term}&image_type=photo&pretty=true`
      )

      .then((res) => {
        setImages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, [term]);

  return (
    <div>
      <Header />
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!loading && images.length === 0 && <h1>No Images Found</h1>}

      <div className="flex main">
        {images &&
          images?.hits?.map((image) => {
            return <ImageCard image={image} key={image.id} />;
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
