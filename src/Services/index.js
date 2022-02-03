import API from "../Config/axios-config";

const fetchUsers = () => {
  return API.get("/users");
};

export { fetchUsers };
