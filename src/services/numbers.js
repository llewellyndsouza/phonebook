import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addNew = (newContact) => {
  const request = axios.post(baseUrl, newContact);
  return request.then((response) => response.data);
};

const updateNumber = (id, updatedContact) => {
  console.log(id, updatedContact);
  const request = axios.put(`${baseUrl}/${id}`, updatedContact);
  return request.then((response) => response.data);
}

const deleteNumber = (id) => {
  console.log("deleting number", id);
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then((response) => response.data);
};

export default { getAll, addNew, updateNumber, deleteNumber };
