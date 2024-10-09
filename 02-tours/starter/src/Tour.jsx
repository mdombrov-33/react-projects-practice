function Tour({ id, name, info, image, price, onHandleDeleteTour }) {
  return (
    <article key={id}>
      <img src={image} alt={name} />
      <footer>
        <div>
          <h4>{name}</h4>
          <h4 className="price">${price}</h4>
        </div>
        <p>{info}</p>
      </footer>
      <button onClick={() => onHandleDeleteTour(id)} className="btn">
        Not interesting?
      </button>
      ;
    </article>
  );
}

export default Tour;
