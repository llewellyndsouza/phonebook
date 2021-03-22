import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import Notification from './components/Notification'

import numbersService from './services/numbers';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const [notification, setNotification] = useState({message:null, type:null})

  const hook = () => {
    numbersService.getAll().then(contacts => {
      console.log(contacts);
      setPersons(contacts)
    })
  }

  useEffect(hook,[]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notification={notification}/>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Add a new</h2>
      <PersonForm
        tools={[
          persons,
          setPersons,
          newName,
          setNewName,
          newNumber,
          setNewNumber,
          setNotification
        ]}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filter={newFilter} setNotification={setNotification} />
    </div>
  );
};

export default App;
