import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClearAll = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={handleClearAll}
          type="button"
          className="btn btn-block"
        >
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
