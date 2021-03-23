import axios from "axios";

const baseUrl = "/persons";

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

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, addNew, updateNumber, deleteNumber };
