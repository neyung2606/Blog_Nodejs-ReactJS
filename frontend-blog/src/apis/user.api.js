import axios from "axios";

const link = "https://605c6c8a6d85de00170da31f.mockapi.io/api/v1/users";

export const getUser = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${link}`)
      .then((req) => {
        resolve(req.data);
      })
      .catch((err) => reject(err));
  });

export const updateUser = (id, payload) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${link}/${id}`, payload)
      .then((req) => {
        resolve(req.request.status);
      })
      .catch((err) => reject(err));
  });

export const deleteUser = (id) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${link}/${id}`)
      .then((req) => {
        resolve(req.request.status);
      })
      .catch((err) => reject(err));
  });
