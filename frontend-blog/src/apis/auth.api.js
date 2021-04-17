import axios from "axios";

const link = "https://605c6c8a6d85de00170da31f.mockapi.io/api/v1/users";

export const login = (account) => {
  new Promise((resolve, reject) => {
    axios
      .post(`${link}`, account)
      .then((req) => {
        resolve(req.data);
      })
      .catch((err) => reject(err));
  });
};

export const register = (account) => {
    new Promise((resolve, reject) => {
      axios
        .post(`${link}`, account)
        .then((req) => {
          resolve(req.data);
        })
        .catch((err) => reject(err));
    });
  };
