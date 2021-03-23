import numbersService from "../services/numbers";

const DeleteButton = ({ id, persons, setPersons, setNotification }) => {
  return (
    <button
      onClick={() => {
        if (window.confirm(`are you sure?`)) {
          numbersService
            .deleteNumber(id)
            .then((success) => {
              console.log(success);
              setNotification({ message: `${persons.find(p => p.id === id).name} deleted on server`, type: "info" });
              setTimeout(() => {
                setNotification({ message: null, type: null });
              }, 5000);
              setPersons(persons.filter((p) => p.id !== id));
            })
            .catch((err) => {
              setNotification({ message: `${persons.find(p => p.id === id).name} already deleted on server`, type: "error" });
              setTimeout(() => {
                setNotification({ message: null, type: null });
              }, 5000);
              setPersons(persons.filter((p) => p.id !== id));
            });
        }
      }}
    >
      delete
    </button>
  );
};

const Persons = ({ persons, setPersons, filter, setNotification }) => {
  let people = "";
  if (filter === "") {
    people = persons.map((person) => (
      <p key={person.name}>
        {person.name} : {person.number}{" "}
        <DeleteButton
          id={person.id}
          persons={persons}
          setPersons={setPersons}
          setNotification={setNotification}
        />
      </p>
    ));
  } else {
    people = persons.filter(({ name, number }) => {
      if (name.toLowerCase().includes(filter.toLowerCase())) return true;
      else return false;
    });
    people = people.map((person) => (
      <p key={person.name}>
        {person.name} : {person.number}{" "}
        <DeleteButton
          id={person.id}
          persons={persons}
          setPersons={setPersons}
          setNotification={setNotification}
        />
      </p>
    ));
  }
  return <div>{people}</div>;
};

export default Persons;
