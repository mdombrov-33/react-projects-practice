import Person from "./Person";

function List({ people }) {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            image={person.image}
          />
        );
      })}
    </section>
  );
}

export default List;
