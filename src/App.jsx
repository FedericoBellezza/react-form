import { useState } from "react";
import Header from "./assets/components/Header";

function App() {
  const [titles, setTitles] = useState(["Titolo 1", "Titolo 2", "Titolo 3"]);
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
