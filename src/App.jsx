import { useState } from "react";
import Header from "./assets/components/Header";

function App() {
  const [titles, setTitles] = useState([
    "Inception",
    "The Dark Knight",
    "Titanic",
    "Avatar",
    "The Godfather",
    "Forrest Gump",
    "Pulp Fiction",
    "The Shawshank Redemption",
    "The Matrix",
    "Gladiator",
    "The Lion King",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Star Wars: A New Hope",
    "Interstellar",
    "The Avengers",
  ]);
  const [inputValue, setInputValue] = useState("");
  let newTitles = [...titles];
  // - Funzione per eliminare un post
  const deleteTitle = (element) => {
    const index = newTitles.indexOf(element);
    console.log(index);

    if (index > -1) {
      console.log(`Eliminato il titolo: "${newTitles[index]}"`);

      newTitles.splice(index, 1);
      setTitles(newTitles);
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    event.preventDefault();
    console.log("Aggiunto il titolo: " + inputValue);
    newTitles = [...titles, inputValue];
    setTitles(newTitles);
  };
  return (
    <>
      <div className="container">
        <Header />
        <form onSubmit={handleFormSubmit} className="input-group mt-5 ">
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            value={inputValue}
            placeholder="Aggiungi il titolo di un post"
          />
          <button className="btn btn-outline-secondary">Aggiungi</button>
        </form>
        <hr />
        <ul>
          {titles.map((element) => {
            return (
              <li
                className="fw-bold d-flex justify-content-end mb-3"
                key={element}
              >
                <p className="flex-grow-1">{element}</p>
                <section>
                  {/* <button className="btn btn-primary  me-3 ">
                    <i className=" fa-solid fa-pen"></i>
                  </button> */}
                  <button
                    className="btn btn-primary  "
                    onClick={() => deleteTitle(element)}
                  >
                    <i className=" fa-solid fa-trash"></i>
                  </button>
                </section>

                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
