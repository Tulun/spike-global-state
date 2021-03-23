import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

export const getUsers = (action$) => {
  return ajax
    .getJSON("https://jsonplaceholder.typicode.com/users")
    .pipe(map((response) => response.map((user) => user)));
};
