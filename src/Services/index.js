import API from "../Config/axios-config";

const fetchUsers = () => {
  return API.get("/users");
};

const fetchTodos = () => {
  return API.get("/todos");
};
const fetchCoupons = () => {
  return API.get("/posts");
};

export { fetchUsers, fetchTodos, fetchCoupons };
