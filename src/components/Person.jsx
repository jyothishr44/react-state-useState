function Person({ person }) {
  return (
    <div>
      <h2>
        Name: {person.name}, Age: {person.age}, Gender: {person.gender}
      </h2>
    </div>
  );
}
export default Person;
