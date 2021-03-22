import numbersService from "../services/numbers";

const PersonForm = (props) => {
  const [
    persons,
    setPersons,
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    setNotification
  ] = props.tools;

  const addNew = (e) => {
    e.preventDefault();

    const newContact = {
      name: newName,
      number: newNumber,
    };

    let duplicate = "";
    duplicate = persons.find(({ name }) => name === newName);
    console.log(duplicate);

    if (duplicate) {
      if (
        window.confirm(
          `The name ${newName} already exists. WOuld you like to replace the old number with a new one?`
        )
      ) {
        numbersService
          .updateNumber(duplicate.id, newContact)
          .then((updatedContact) => {
            setPersons(
              persons.map((p) => (p.id !== duplicate.id ? p : updatedContact))
            );
            setNotification({message:`Added ${newName}`, type:"info"});
            setTimeout(() => {
              setNotification({message:null, type:null})
            }, 5000);
          }).catch(err=>{
            setNotification({message:`${newName} has already been removed from server`, type:"error"});
            setTimeout(() => {
              setNotification({message:null, type:null})
            }, 5000);            
          });
      }
    } else {
      numbersService
        .addNew(newContact)
        .then((contact) => {
          setPersons(persons.concat(contact))
          setNotification({message:`Added ${newName}`, type:"success"});
          setTimeout(() => {
            setNotification({message:null, type:null})
          }, 5000);
        });
    }

    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={addNew}>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={(e) => {
            setNewNumber(e.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
