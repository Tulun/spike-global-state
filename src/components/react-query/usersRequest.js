// Each key must be unique. This could be concat'd object separating different types of calls
// ie: userAPI, postsAPI:
// apiService= {...userAPI, ...postsAPI }

import httpService from "./httpService";

const userRequests = {
  getUsers: () => {
    return httpService.get("https://jsonplaceholder.typicode.com/users");
  },
};

export default userRequests;
