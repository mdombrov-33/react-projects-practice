import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <Tour
              key={id}
              id={id}
              name={name}
              info={info}
              image={image}
              price={price}
              removeTour={removeTour}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
