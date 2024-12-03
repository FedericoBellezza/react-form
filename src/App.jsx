import { useState } from "react";
import Header from "./assets/components/Header";

function App() {
  const nomi = ["nome 1", "nome 2"];
  const [titles, setTitles] = useState(["titolo 1", "titolo 2", "titolo 3"]);
  const [formValue, setFormValue] = useState("");
  const handleInputChange = (e) => {
    setFormValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    event.preventDefault();
    console.log("Form inviato");
    setTitles("Ciao");
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
            value={formValue}
            placeholder="Aggiungi il titolo di un post"
          />
          <button className="btn btn-outline-secondary">Aggiungi</button>
        </form>
        <hr />
        <section>
          {nomi.map((element) => {
            <p>{element}</p>;
          })}
        </section>
      </div>
    </>
  );
}

export default App;
