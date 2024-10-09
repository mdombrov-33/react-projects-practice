import { useState, useEffect } from "react";

import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function handleDeleteTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    async function fetchTours() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setIsLoading(false);
        setTours(tours);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <h2>Our Tours</h2>
      <Tours onHandleDeleteTour={handleDeleteTour} tours={tours} />
    </main>
  );
};
export default App;
