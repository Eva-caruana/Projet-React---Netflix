import "./App.css";
import data from "../src/assets/movies.json";
import logo from "./assets/img/netflix_logo.png";

function App() {
  return (
    <div>
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <section>
        <article>
          {data.map((element) => {
            console.log("=>>>", element);
            return (
              <section className="category-lines">
                <h2 className="category-title">{element.category}</h2>
                <div className="movies-images">
                  {element.images.map((element, index) => {
                    // console.log("here===>", element, index);
                    return <img key={index} src={element} alt="movie-image" />;
                  })}
                </div>
              </section>
            );
          })}
        </article>
      </section>
    </div>
  );
}

export default App;
