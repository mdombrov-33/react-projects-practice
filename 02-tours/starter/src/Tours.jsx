import Tour from "./Tour";

function Tours({ tours, onHandleDeleteTour }) {
  return (
    <section>
      {tours.map((tour) => {
        const { name, info, image, price } = tour;
        return (
          <Tour
            onHandleDeleteTour={onHandleDeleteTour}
            key={tour.id}
            name={name}
            info={info}
            image={image}
            price={price}
            {...tour}
          />
        );
      })}
    </section>
  );
}

export default Tours;
